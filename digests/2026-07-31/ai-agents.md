# OpenClaw 生态日报 2026-07-31

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-31 02:09 UTC

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

# OpenClaw 项目日报 · 2026-07-31

---

## 一、今日速览

OpenClaw 仓库今日呈现**高活跃度、高积压、零版本发布**的态势。过去 24 小时 Issues 更新 500 条（476 活跃/24 已关闭），PR 更新 500 条（410 待合并/90 已合并或关闭），但**没有任何版本发布**，说明代码改动仍在评审与积压状态。从健康度看，仓库处于**活跃但承压**阶段：P0/P1 严重缺陷密度持续偏高，多个核心问题（Gateway 内存泄漏、消息丢失、Crash-loop 抑制器）已存在 4 个月以上但尚未根治；与此同时，社区贡献者的 PR 流入量巨大，维护者审查带宽明显吃紧。整体评估：**Bug 治理速度低于问题发现速度**。

---

## 二、版本发布

**今日无新版本发布。** 建议关注积压 PR 中的修复批量是否会在下一次 minor/patch 版本中集中放出。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响面 | 备注 |
|---|---|---|---|
| [#116606](https://github.com/openclaw/openclaw/pull/116606) | feat(setup): improve local model onboarding | 本地模型接入 | XL，已关闭（含维护者审核），覆盖 LM Studio、Ollama、启动故障提示 |
| [#116320](https://github.com/openclaw/openclaw/pull/116320) | improve(macos): avoid identity reads during menu rendering | macOS 客户端性能 | S，主线程优化 |
| [#102006](https://github.com/openclaw/openclaw/pull/102006) | [BUG] exec tool: aborted run wedges subsequent exec calls | 已关闭 Issue | 对应 Issue 关闭，但修复 PR 是否合并未明示 |

**进展评估：** 今日实质性合入的"重量级"修复有限，更像是 perf/UX 改进型提交。P0/P1 级别的核心 Bug（见下节）大多仍停留在"等待维护者审核"或"等待作者"状态。

---

## 四、社区热点（评论数 Top Issues & PRs）

### 高讨论度 Issues（评论 ≥ 15）

| 排名 | Issue | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | Text between tool calls leaks to messaging channels | **38** | 1 |
| 2 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak — RSS 350MB→15.5GB，触发 OOM | **22** | 1 |
| 3 | [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp | **20** | 0 |
| 4 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap file loading | **17** | 0 |
| 5 | [#102175](https://github.com/openclaw/openclaw/issues/102175) | Embedded prompt cache 跨边界失效 | **16** | 1 |
| 6 | [#99551](https://github.com/openclaw/openclaw/issues/99551) | Codex worker runaway hardening sprint (Tracker) | **15** | 1 |
| 7 | [#50090](https://github.com/openclaw/openclaw/issues/50090) | Community Skill Development & ClawHub | **15** | 2 |
| 8 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode 不注入 mid-turn 消息 | **15** | 4 |
| 9 | [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir 中的 bootstrap 文件被忽略 | **14** | 5 |
| 10 | [#53628](https://github.com/openclaw/openclaw/issues/53628) | ${XDG_CONFIG_HOME} 安装 skill 时未展开 | **13** | 1 |

**社区诉求分析：**
- **"消息路由/中间过程泄漏"** 仍是第一痛点（#25592），反映用户对 agent 与人类消息边界混乱的强烈不满；
- **基础设施级稳定性**（OOM、crash-loop、prompt cache 失效）紧随其后，显示核心运行时可靠性是当前最大短板；
- **Skill 生态**（#50090）和 **多 Agent 协作 RFC**（#35203、#48874）显示社区对"扩展性 & 生态化"的兴趣高于纯功能增量。

---

## 五、Bug 与稳定性（按严重度）

### 🔴 P0 级（系统级瘫痪风险）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 350MB→15.5GB，2-3 天 OOM | ❌ 未见 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于 release，Heartbeat IsolatedSessions 文档与代码不一致 | ❌ 未见 |

### 🟠 P1 级（核心功能受损）

| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | Crash-loop breaker 永久抑制 Discord/WhatsApp，文档恢复路径 1006 失败 | ❌ 未见 |
| [#29387](https://github.com/openclaw/openclaw/issues/29387) | agentDir 中 bootstrap 文件被静默忽略 | ❌ 未见（diamond lobster 级） |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | sandbox.workspaceAccess=none 时沙盒只读 | ❌ 未见（diamond lobster） |
| [#69118](https://github.com/openclaw/openclaw/issues/69118) | Claude CLI 在群组频道每轮重置 | ❌ 未见（关联 PR open） |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | steer mode 不注入 mid-turn 消息 | ❌ 未见（关联 PR open） |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | Cron 失败时 LLM 编造输出（信任安全） | ❌ 未见 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | clearUnboundScopes 无条件剥离 operator scope | ❌ 未见（diamond lobster） |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数 tool call 导致 "Network connection lost" | ❌ 未见 |
| [#99586](https://github.com/openclaw/openclaw/issues/99586) | Runtime tool surface 返回空 body | ❌ 未见 |
| [#100778](https://github.com/openclaw/openclaw/issues/100778) | Preflight compaction 失败永久锁定 Composer | ❌ 未见（关联 PR open） |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无限保留 provider 状态 | ✅ [#116589](https://github.com/openclaw/openclaw/pull/116589) |
| [#116525](https://github.com/openclaw/openclaw/issues/116525) | GPT-Live browser broker 被无关清理永久停止 | ❌ 未见 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | write tool 无 append 模式，cron 会话覆盖共享文件 | ❌ 未见（数据丢失） |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu read 图片在出站前丢失 | ❌ 未见（关联 PR open） |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | 响应未回传至源渠道（Telegram/Discord/WhatsApp） | ❌ 未见 |

### 🟡 P2 回归/严重 UX 摩擦

| Issue | 标题 |
|---|---|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | Embedded prompt cache 跨多边界失效（platinum hermit） |
| [#48579](https://github.com/openclaw/openclaw/issues/48579) | `mode: "off"` 仍持续 compaction（82 次/天） |
| [#48810](https://github.com/openclaw/openclaw/issues/48810) | Compaction retry 产生孤儿 fork 链 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 大参数 → 网络连接丢失 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | Isolated cron agentTurn "setup timed out before runner start" |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | Control UI 头像不显示 |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 工作路径硬编码 `/Users/wangtao`（社区吐槽） |
| [#37966](https://github.com/openclaw/openclaw/issues/37966) | LiteLLM 代理下 cacheRetention 被忽略 |

**关键信号：** 已发现 P0/P1 问题中，**多数没有对应修复 PR**，部分仅有"linked-pr-open"但仍处于"needs-maintainer-review"或"needs-product-decision"状态，**说明维护者审查瓶颈已经显著影响修复周转**。

---

## 六、功能请求与路线图信号

| 提案 | Issue/PR | 状态 | 纳入下一版本的概率 |
|---|---|---|---|
| 分层 bootstrap 文件加载（节省上下文窗口） | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 讨论中 | ⭐⭐⭐⭐ 高（已有关联 PR open） |
| Gateway 级每 agent 成本预算 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 已有关联 PR | ⭐⭐⭐⭐ 高 |
| Sub-agent 完成 announceTarget 路由 | [#27445](https://github.com/openclaw/openclaw/issues/27445) | 已有关联 PR | ⭐⭐⭐ 中 |
| Post-subagent 完成扩展钩子 | [#22358](https://github.com/openclaw/openclaw/issues/22358) | RFC 阶段 | ⭐⭐⭐ 中 |
| Session stream mode 命令 | [#93218](https://github.com/openclaw/openclaw/pull/93218) | PR 待合并 | ⭐⭐⭐⭐ 高 |
| Telegram Business Bot 支持 | [#20786](https://github.com/openclaw/openclaw/issues/20786) | 已关联 PR | ⭐⭐⭐ 中 |
| Skill 作者定义 setup 钩子 | [#80213](https://github.com/openclaw/openclaw/issues/80213) | RFC | ⭐⭐ 中 |
| 多 Agent 协作 RFC（能力画像/共享黑板/分层记忆） | [#35203](https://github.com/openclaw/openclaw/issues/35203) | RFC | ⭐⭐ 中（架构级，工作量大） |
| 多 Session 架构（共享 LLM + 隔离 Session） | [#48874](https://github.com/openclaw/openclaw/issues/48874) | RFC | ⭐⭐ 中 |
| Owner-signed 责任门控（记忆/动作/技能） | [#96675](https://github.com/openclaw/openclaw/issues/96675) | RFC | ⭐⭐⭐ 中（安全合规方向） |
| ClawHub 社区 Skill 治理 | [#50090](https://github.com/openclaw/openclaw/issues/50090) | 长期讨论 | ⭐⭐⭐⭐ 高（生态关键） |
| session 流模式切换命令 | [#93218](https://github.com/openclaw/openclaw/pull/93218) | PR 待合并 | ⭐⭐⭐⭐ |
| 失败分类的 provider fallback（auth 隔离） | [#47910](https://github.com/openclaw/openclaw/issues/47910) | 提案 | ⭐⭐⭐⭐ 高（与稳定性高度相关） |
| Codex/Ollama 模型 thinking 保留 | [#116584](https://github.com/openclaw/openclaw/pull/116584) | PR 待合并 | ⭐⭐⭐⭐ |
| 实时会议 bot 内存控制 | [#116589](https://github.com/openclaw/openclaw/pull/116589) | PR 待合并 | ⭐⭐⭐⭐ 高（已关联核心 issue） |

**路线图共识：** 下一版本最可能落地的方向集中在**消息路由修正、内存与稳定性 hardening、本地模型接入 UX、Skill 生态基础**四大主题。

---

## 七、用户反馈摘要（来自 Issues 评论的真实痛点）

- 🔥 **"中间文本泄露到 Slack/iMessage"**（#25592）—— 用户最强烈的体验痛点之一，38 条评论。Agent 的处理/错误日志被当作正式消息发送给用户，造成严重 UX 混淆与隐私风险。**满意度：极低。**
- 🔥 **"工具调用之间会出现奇怪文本"** —— 反映出"思考/回答"边界未分离的设计缺陷。
- ⚠️ **"Gateway 几天就被 OOM 杀掉"**（#91588）—— 影响所有自托管用户。**满意度：极低**，但评论仅 1 个赞，说明样本量有限或社区已"习以为常"。
- 😡 **"代码里硬编码 /Users/wangtao"**（#51429）—— 用户的愤怒与讽刺，对代码审查流程的质疑。
- 😟 **"启动后 15 分钟内子 agent 卡死，主 session 无响应"**（#47975）—— 多 agent 编排下的稳定性焦虑。
- 🤔 **"Slack 一直显示 'is typing...'，不知道 agent 在干啥"**（#33413）—— 透明性诉求。
- 🛠 **"docs 写的是 IsolatedSessions，但代码里压根没有"**（#48920）—— 文档与发布脱节，破坏信任。
- 🛠 **"ClawHub 上写 SKILL.md 的承诺，实际还要手动桥接"**（#50090）—— Skill 生态"承诺与实践"的落差。

**总体满意度画像：** **基础设施层（稳定性/内存/路由）满意度低**；**Skill/扩展性生态层**用户期待高但落地慢；**文档一致性**正在侵蚀信任。

---

## 八、待处理积压（需维护者重点关注）

### 长期未解的严重 Issue（创建于 2-4 月前，尚未根治）

| Issue | 严重度 | 标题 | 创建日期 |
|---|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | P1 (diamond lobster) | Text between tool calls leaks to messaging channels | 2026-02-24 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | P0 (platinum hermit) | Gateway Memory Leak 350MB→15.5GB | 2026-06-09 |
| [#37634](https://github.com/openclaw/openclaw/issues/37634) | P1 (diamond lobster) | sandbox.workspaceAccess=none 仍只读 | 2026-03-06 |
| [#49876](https://github.com/openclaw/openclaw/issues/49876) | P1 (platinum hermit) | Cron 失败时 LLM 编造输出 | 2026-03-18 |
| [#51396](https://github.com/openclaw/openclaw/issues/51396) | P1 (diamond lobster) | clearUnboundScopes 无条件剥离 | 2026-03-21 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | P1 (platinum hermit) | 大参数 tool call → "Network connection lost" | 2026-03-24 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | P1 (silver shellfish) | write tool 无 append 模式（数据丢失） | 2026-03-08 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | P1 (platinum hermit) | steer mode 不注入 mid-turn 消息 | 2026-03-16 |
| [#39847](https://github.com/openclaw/openclaw/issues/39847) | P1 (diamond lobster) | Echo contamination：stripInboundMetadata 未被调用 | 2026-03-08 |
| [#54531](https://github.com/openclaw/openclaw/issues/54531) | P1 (silver shellfish) | 响应未回传源渠道 | 2026-03-25 |
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | P1 (platinum hermit) | exec aborted 阻塞后续 exec | 2026-07-08（已关闭但修复待验证） |
| [#48003](https://github

---

## 横向生态对比

# 2026-07-31 AI 智能体与个人 AI 助手开源生态横向对比分析

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"高活跃度、高并发、高承压"**的典型扩张期特征：12 个被监测项目中，10 个在 24 小时内有实质更新，单日 PR/Issue 总量超过 1300 条；与此同时，**社区普遍进入"合并率下滑 + 维护者瓶颈"阶段**——ZeroClaw、IronClaw、OpenClaw 的 PR 合并率分别仅为 0%、约 30%、约 18%，Reviewer 资源被严重稀释。安全与稳定性取代"功能增量"成为社区第一优先级：Moltis 的 Vault CWE-306 鉴权漏洞、IronClaw 的跨用户记忆泄漏（#6900）、ZeroClaw 的 Webhook fail-closed（#9565）、NanoBot 的 DoS 速率限制缺失（#4791）均在 24 小时内同时浮现，反映**生产部署规模扩大正在倒逼治理层从"能跑"向"可信"演进**。

---

## 2. 各项目活跃度对比

| 项目 | Issues (24h) | PRs (24h) | PR 合并/关闭 | 新版本 | 健康度评级 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (476 活跃) | 500 (410 待合并) | ~90 | ❌ 无 | ⚠️ 活跃但承压 | Bug 治理滞后于发现 |
| **NanoBot** | 7 | 48 | 31 (含 11 个 P1 修复) | ❌ 无 | 🟢 良好偏优 | 高强度健壮性升级 |
| **Hermes Agent** | 50 | 50 | 2 (合并率 4%) | v0.19.1 (昨日) | 🟡 高活跃低产出 | 跨平台硬化冲刺 |
| **PicoClaw** | 7 | 17 | ~6 (多为依赖) | ❌ 无 | 🟢 中等偏高 | 依赖治理 + 多模态扩展 |
| **NanoClaw** | 2 | 17 | 5 | ❌ 无 | 🟢 健康 | 镜像供应链加固 |
| **NullClaw** | 0 | 0 | 0 | ❌ 无 | ⚪ 沉寂 | 停滞 |
| **IronClaw** | 38 | 50 | 26 | ❌ 无 (含未合并 release PR) | 🟡 冲刺期 | **v1 发布前质量收口** |
| **LobsterAI** | 0 | 10 | 8 | ✅ **2026.7.29** | 🟢 高强度迭代 | 协作 + 企业隔离 |
| **TinyClaw** | 0 | 0 | 0 | ❌ 无 | ⚪ 沉寂 | 停滞 |
| **Moltis** | 2 | 4 | 1 | ❌ 无 | 🟢 中等偏上 | 可观测性筑基 |
| **CoPaw (QwenPaw)** | 24 | 48 | **25** | ❌ 无 | 🟢 高活跃高产出 | **v2.0 稳定化** |
| **ZeptoClaw** | 0 | 1 | 0 | ❌ 无 | 🟡 偏静默 | 单点修复 |
| **ZeroClaw** | 14 | 50 | **0** | ❌ 无 | ⚠️ 高讨论低落地 | RFC 集中期 |

**关键观察：**
- **合并效率 Top 2**：CoPaw（25/48 = 52%）、NanoBot（31/48 = 65%）—— 维护者带宽仍充足
- **合并效率 Bottom 2**：ZeroClaw（0%）、OpenClaw（约 18%）—— review 瓶颈已严重制约修复周转
- **当日发版**：仅 LobsterAI（2026.7.29）；Hermes Agent 昨日发 v0.19.1

---

## 3. OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 同类最强对手 | 差距分析 |
|---|---|---|---|
| **Issue 涌入量** | 500/日（最大） | IronClaw 38/日 | OpenClaw **社区体量约 10×** 于同类 |
| **核心问题集中度** | 38 评论的 #25592、22 评论的 #91588 | IronClaw 15 评论的 #6284 | OpenClaw 高优 issue **讨论密度领先** |
| **贡献者规模** | 410 待合并 PR | CoPaw 23 待合并 | OpenClaw **贡献者池最大** |
| **Skill 生态成熟度** | ClawHub 治理讨论（#50090）、分层 bootstrap（#22438） | LobsterAI 站点化、IronClaw IronHub | OpenClaw **生态化方向最系统** |
| **功能广度** | 多渠道 + 多 Agent + 本地模型 + Skill 全栈 | 多以"AI 桌面助手"或"Agent 运行时"单点切入 | OpenClaw **平台型**，对手多为**单点工具型** |

### 技术路线差异

OpenClaw 走的是 **"消息路由中枢 + 多 Agent 协作 + Skill 生态"** 的平台型路线，与之形成明显分化的两类对手：
- **桌面/CLI 助手型**：Hermes Agent、CoPaw、IronClaw —— 重心在 Desktop/CLI/TUI 多端体验与跨平台硬化
- **运行时/基础设施型**：ZeroClaw、ZeptoClaw、NanoBot —— 重心在 Gateway/Provider/可观测性的底层契约

### 关键差距

- **修复周转速度**：OpenClaw 的 P0 Gateway 内存泄漏（#91588）已存在 4 个月无 PR，对比 NanoBot 同类会话锁/Pairing/Telegram 自愈问题**24 小时内形成闭环**，反映 OpenClaw 的"代码规模 vs 维护带宽"剪刀差
- **版本节奏**：近 24 小时零发版（IronClaw、LobsterAI、CoPaw 均有版本或在发布轨道上），用户**感知到的"活体感"弱于同类**

---

## 4. 共同关注的技术方向

下表统计的是**至少 2 个项目**在 24 小时内独立浮现的同一类诉求：

| 技术方向 | 涉及项目 | 具体诉求 | 共识强度 |
|---|---|---|---|
| **消息路由与边界安全** | OpenClaw（#25592）、NanoClaw（#3153）、IronClaw（#6900）、Hermes（#62935） | "agent 中间文本泄漏到用户消息"、"跨用户记忆/凭据泄漏"、"反应/编辑失败" | ⭐⭐⭐⭐⭐ 极高 |
| **运行时资源生命周期** | OpenClaw（OOM #91588）、NanoBot（#5151 会话锁、#5150 输出缓冲）、ZeptoClaw（#645 子进程回收）、Hermes（#43186 SIGABRT） | 内存/会话锁/进程树/Docker 容器的回收 | ⭐⭐⭐⭐⭐ 极高 |
| **多渠道能力均衡化** | PicoClaw（Telegram #3307、IRC #3287）、Moltis（Slack #1166 / Telegram #1178）、NanoBot（Telegram #5156）、CoPaw（多文件 #6583） | 各渠道的"功能鸿沟"成一致痛点 | ⭐⭐⭐⭐ 高 |
| **Skill 生态治理** | OpenClaw（#50090、#22438）、IronClaw（#6565、#6745、#6937）、LobsterAI（sites 风格统一） | Skill 发现、路由、激活、关键词误命中、社区治理 | ⭐⭐⭐⭐ 高 |
| **可观测性 / OTLP / Trace** | ZeroClaw（#8933 OTel 会话关联）、Moltis（#1174 Langfuse+OTLP）、NanoBot（exec 截断统计）、OpenClaw（compaction retry 孤儿 #48810） | 会话级 trace、provider failover 归因、缓存感知 token | ⭐⭐⭐⭐ 高 |
| **多 Agent / 子 Agent 协作** | OpenClaw（#35203、#48874、#27445）、CoPaw（#6562 子会话审批）、NanoBot（#4291 subagent 模型预设） | 能力画像、共享黑板、announceTarget 路由 | ⭐⭐⭐ 中 |
| **本地小模型接入** | OpenClaw（#116606 LM Studio/Ollama）、ZeroClaw（#5287 local_small profile、#7951 effort 路由）、CoPaw（#6557 Kimi 兼容） | 紧凑 prompt budget、provider 路由策略 | ⭐⭐⭐ 中 |
| **凭据/权限边界** | IronClaw（#6866 共享主目录、#6900 跨用户记忆）、ZeptoClaw（#645 子进程凭据隔离）、LobsterAI（#2409 企业账号隔离） | "被允许访问" ≠ "被允许执行特权操作" | ⭐⭐⭐ 中 |
| **Windows 平台硬化** | Hermes（#74942、#73629、#74904、#75113、#47122）、CoPaw（#6424 Computer Use） | PTY、设备名、滚动渲染、autostash | ⭐⭐⭐ 中（仅 Desktop 项目） |

---

## 5. 差异化定位分析

### 按"用户场景"分层

| 层级 | 代表项目 | 核心定位 |
|---|---|---|
| **平台型 Agent OS** | **OpenClaw** | 多 Agent 协作中枢 + Skill 生态，目标是"消息即入口，agent 即服务" |
| **桌面 AI 助手** | Hermes Agent、CoPaw、IronClaw、LobsterAI | Desktop/CLI/TUI 多端体验 + 跨平台硬化，面向 C 端/B 端桌面用户 |
| **运行时/基础设施** | NanoBot、ZeroClaw、ZeptoClaw | Provider/Gateway/Session 的底层契约，目标是"Agent 运行时可被嵌入其他产品" |
| **专项渠道/能力** | PicoClaw（多模态渠道）、Moltis（多通道交互） | 在某一能力轴上做深（渠道矩阵、Slack/Telegram 交互） |

### 目标用户差异

- **C 端"AI 陪伴"导向**：LobsterAI（每日签到、活动面板）、CoPaw（快速唤起浮动框 #6568）
- **DevOps / 自托管导向**：OpenClaw、IronClaw、ZeroClaw、NanoBot —— 强调 Gateway、Provider、CLI、cron、webhook
- **企业多租户导向**：IronClaw（SSO + 多用户隔离 Epic #4636）、LobsterAI（#2409 企业账号隔离）
- **本地优先 / 隐私导向**：ZeroClaw（local_small profile）、CoPaw（Kimi/Qwen 本地模型）、NanoBot（Termux 兼容）

### 技术架构关键差异

| 维度 | OpenClaw | Hermes Agent | IronClaw | CoPaw | ZeroClaw |
|---|---|---|---|---|---|
| 多 Agent 原生 | ✅ 强（#35203 RFC） | ⚠️ 弱 | ⚠️ 弱 | ⚠️ 弱（#6562 修补） | ⚠️ 弱 |
| Skill 系统 | ✅ **平台级（ClawHub）** | ⚠️ 检索开销已成负担 | ⚠️ 关键词误命中 + 评分缺陷 | ✅ Creator 插件 | ✅ schema 强约束 |
| 安全模型分层 | ⚠️ P0 漏洞多 | ⚠️ shell 注入 HIGH | ✅ Epic 化推进 | ✅ Enterprise isolation | ✅ Trusted boundary |
| 跨平台 Desktop | ❌ | ✅ **Windows 主战场** | ✅ macOS/Windows | ✅ macOS/Windows | ❌ |

---

## 6. 社区热度与成熟度分层

### 第一梯队：快速迭代期（日合并 25+ PR，活跃且能产出）

- **CoPaw**（25 合并）—— v2.0 稳定化收口，Computer Use 旗舰特性已合入
- **NanoBot**（31 合并）—— 单日完成"内存/会话/网络/存储"全链健壮性升级
- **IronClaw**（26 合并）—— v1 发布冲刺，工程化指标同步推进
- **LobsterAI**（8 合并 + 1 发布）—— 协作 + 企业 + 运营三线齐进

### 第二梯队：质量巩固期（PR 流入大于合并，治理承压）

- **OpenClaw** —— 社区最大但 Reviewer 瓶颈最严重，P0/P1 修复周转数月
- **Hermes Agent** —— 4% 合并率，Issue 涌入 50/日但当日仅合 2 条
- **ZeroClaw** —— 0% 合并率，50 条 PR 全员待审，处于 RFC 集中起草阶段

### 第三梯队：方向明确但产出有限

- **PicoClaw** —— 24 条更新但多为 Dependbot；多模态扩展方向明确但无版本
- **NanoClaw** —— 镜像供应链加固专精，单日 5 合并
- **Moltis** —— 4 PR，Slack 通道生产化为代表；安全 PR #1170 待合并
- **ZeptoClaw** —— 单 PR 但属"安全 + 稳定性"双价值修复

### 第四梯队：停滞

- **NullClaw**、**TinyClaw** —— 24 小时零活动，需评估是否仍在维护

---

## 7. 值得关注的趋势信号

### 趋势 1：**"安全默认"成为合并前置条件**

**信号：** 24 小时内至少出现 5 起 fail-closed / 平台门控修复（ZeroClaw #9569/#9568、IronClaw #6906/#6917、Moltis #1170、LobsterAI #2389、ZeptoClaw #645、NanoBot #5147）。

**对开发者的启示：** 在 Agent Gateway、Provider fallback、跨用户状态等"隐式信任点"上，"默认拒绝 + 显式允许"正在取代"默认放行 + 异常检测"。这一原则应纳入新项目架构模板。

### 趋势 2：**"运行时可观测性"从 nice-to-have 变为 must-have**

**信号：** ZeroClaw RFC #8933 要求 OTel 携带 `gen_ai.conversation.id`；Moltis PR #1174 引入 Langfuse v4 + OTLP + 反馈回路；OpenClaw 多个 compaction/retry bug 都因"无 trace"而难以诊断。

**对开发者的启示：** Agent 项目的"可调试性"决定其能否进入企业生产。建议在 v0.x 阶段就内建 trace/event/span 体系，而不是等到 v1.x 故障频发后再补。

### 趋势 3：**Skill 生态从"协议层"竞争转向"治理层"竞争**

**信号：** OpenClaw ClawHub 治理（#50090）、IronClaw SkillsBench 基准（#6745）、Moltis 激活拒绝路径明示（#6938）、CoPaw Creator 插件（#6556）—— **"如何发现 / 路由 / 评分 / 拒绝"比"能否注册"更受关注**。

**对开发者的启示：** Skill/插件系统的下一战场不是 API 表面，而是评分函数、激活门控、用户反馈回路与跨 Skill 一致性。

### 趋势 4：**多 Agent / 子 Agent 协作从"提议"走向"修补"**

**信号：** OpenClaw 仍处 RFC 阶段（#35203），但 CoPaw（#6562 子会话审批继承）、NanoBot（#4291 subagent 模型预设）、Hermes（subagent 完成 announceTarget）已进入修补期——说明**第一批实现者已暴露真实痛点**。

**对开发者的启示：** 多 Agent 不再是"是否要做"的问题，而是"子会话上下文继承 / 审批语义 / 路由回环"的工程细节问题。新设计应优先考虑父子状态隔离与可中断性。

### 趋势 5

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-31

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
> 统计周期：过去 24 小时

---

## 一、今日速览

NanoBot 今日处于**高强度维护与功能迭代并行**状态：48 条 PR 更新、7 条 Issue 更新，且无新版本发布，说明项目仍处于内部打磨阶段。从结构看，今日合并/关闭了 31 条 PR（含 11 条 P1 优先级修复），同时有 17 条 PR 等待合并，社区贡献者持续活跃。**项目健康度评级：良好偏优**——多个关键 Bug 在 24 小时内完成了"报告 → 修复 PR → 合并/关闭"闭环（如 Telegram 轮询停滞、finish_reason 误路由、配对存储瞬态故障等），但仍有少数长期 Issue（如 #3106 自 4 月起未解决）和跨平台兼容性问题（Termux 时区）需要关注。

---

## 二、版本发布

**无新版本发布。** 今日合并的 31 条 PR 中，多为稳定性与内部重构（CI 加速、内存存储、Agent Loop 锁等），尚未累积到需要发版的程度。建议关注 #5173（Session JSONL → SQLite 迁移）等重大变更的合并进展，这可能是下个版本的引爆点。

---

## 三、项目进展

### 3.1 今日合并/关闭的重要 PR（P1 优先级修复密集落地）

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| **#5136** | fix(agent) | 修复 `finish_reason='length'` 携 `tool_calls` 且文本为空时，被错误路由到空响应重试的逻辑，关闭 #5133 | [#5136](https://github.com/HKUDS/nanobot/pull/5136) |
| **#5145** | fix(ci) | 用 stdin gated readiness 握手替代计时依赖的 exec-session 超时测试；批量安装频道依赖，加速 CI | [#5145](https://github.com/HKUDS/nanobot/pull/5145) |
| **#5147** | fix(pairing) | 防止瞬态 `pairing.json` 读取失败抹除所有已批准的发送者；读失败"fail closed"，写失败"fail loudly" | [#5147](https://github.com/HKUDS/nanobot/pull/5147) |
| **#5150** | fix(exec) | 限制 exec session 缓冲输出（保留 head/tail 预算），并把 producer 端丢弃字符纳入截断统计 | [#5150](https://github.com/HKUDS/nanobot/pull/5150) |
| **#5151** | fix(agent) | `AgentLoop._session_locks` 改用 `WeakValueDictionary`，统一在 `_get_session_lock()` 创建，释放空闲会话锁 | [#5151](https://github.com/HKUDS/nanobot/pull/5151) |
| **#5156** | fix(telegram) | 修复 Telegram 轮询在网络瞬态故障后永久静默挂起，关闭 #5171 | [#5156](https://github.com/HKUDS/nanobot/pull/5156) |

> 此外还合并了 **#5172**（保留 Responses 推理状态、压缩上下文）、**#5181**（WebUI 持久化 Quick Chat）、**#5182**（侧边栏选中态高亮复用）等功能/重构 PR。

### 3.2 整体评估

项目今日在**稳定性与资源管理**方向有显著推进——尤其是会话锁释放、exec 输出缓冲上限、配对存储原子性、Telegram 长连接自愈这四个方面，覆盖了"内存泄漏 → 进程僵死 → 数据丢失 → 网络中断"的常见故障链，可视为一次较为系统性的健壮性升级。

---

## 四、社区热点

> 注：今日 Issues/PR 数据中评论数普遍较少（多数为 0–3 条），尚无明显"高热度"话题；但以下议题仍值得追踪：

- **🔴 #5171 Telegram 轮询静默挂起** —— 由用户 QQQ300kuai 报告的生产事故，可复现，已在 PR #5156 中修复。链接：[Issue #5171](https://github.com/HKUDS/nanobot/issues/5171)
- **🔴 #4791 DoS：渠道级无消息速率限制**（已关闭）—— hamb1y 提出"任何已配对用户可洪泛攻击 Agent"，引发对限流/防抖机制的讨论。链接：[Issue #4791](https://github.com/HKUDS/nanobot/issues/4791)
- **🟡 #5185 响应中混入工具调用代码** —— fablau 反映"突现的工具调用 XML 暴露给用户"，疑为系统提示词或格式路由回归。链接：[Issue #5185](https://github.com/HKUDS/nanobot/issues/5185)

**诉求分析：** 用户最关心的并非花哨功能，而是"基本可运行性"——能发音频（#5149）、能在 Termux 跑（#5187）、定时任务不半途卡死（#3106）、长连接不假死（#5171）。

---

## 五、Bug 与稳定性

按严重程度排列：

| 级别 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **P1 / 严重** | [#5171](https://github.com/HKUDS/nanobot/issues/5171) | Telegram 轮询在瞬态网络故障后永久静默挂起，进程存活但日志无输出 | OPEN | ✅ [#5156](https://github.com/HKUDS/nanobot/pull/5156) |
| 🔴 **P1 / 安全** | [#4791](https://github.com/HKUDS/nanobot/issues/4791) | 渠道适配器缺少每用户/每会话速率限制，配对用户可洪泛消耗 LLM Token 与工具资源 | CLOSED（已记录建议，待实施） | ❌ 无 |
| 🟠 **P2 / 中度** | [#5149](https://github.com/HKUDS/nanobot/issues/5149) | nanobot 在 WhatsApp 上能接收音频但无法发送（ffmpeg 警告） | OPEN | ❌ 无 |
| 🟠 **P2 / 中度** | [#5187](https://github.com/HKUDS/nanobot/issues/5187) | Termux 下因系统缺少时区数据库，启动时 Pydantic 校验失败 | OPEN | ✅ [#5189](https://github.com/HKUDS/nanobot/pull/5189) |
| 🟠 **P2 / 中度** | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | 响应中意外返回工具调用代码（疑似格式路由/提示词回归） | OPEN | ❌ 无 |
| 🟡 **P3 / 体验** | [#3106](https://github.com/HKUDS/nanobot/issues/3106) | 使用 GPT 模型设置定时任务时常报"无法产出最终答案"；换 gml-4.7 正常 | OPEN（长期未响应） | ❌ 无 |
| ✅ **已修复** | [#5133](https://github.com/HKUDS/nanobot/issues/5133) | `finish_reason='length'` + `tool_calls` + 空文本被误路由 | CLOSED | ✅ [#5136](https://github.com/HKUDS/nanobot/pull/5136) |

**总体判断：** 严重 Bug 均已有配套 Fix PR 在评审中或已合并，中度 Bug 中已有 1/3 进入修复流程。#3106 长期未响应，需要维护者关注。

---

## 六、功能请求与路线图信号

### 6.1 已有对应 PR 的强信号需求（可能进入下版本）

| 需求 | Issue/PR | 优先级 |
|---|---|---|
| Session 存储从 JSONL 迁移到 SQLite | [PR #5173](https://github.com/HKUDS/nanobot/pull/5173) | 高 |
| WebUI 新增 Quick Chat 与 Temporary Chat | [PR #5184](https://github.com/HKUDS/nanobot/pull/5184) | 中 |
| Telegram 频道支持自定义 Bot API base URL 与额外头（自托管/企业网关） | [PR #4919](https://github.com/HKUDS/nanobot/pull/4919)（实现 #4702） | 中 |
| subagent 支持可配置的 model preset | [PR #4291](https://github.com/HKUDS/nanobot/pull/4291) | 中 |
| Heartbeat 支持 `isolated_session` 配置 | [PR #4551](https://github.com/HKUDS/nanobot/pull/4551)（修复 #1899） | 中 |

### 6.2 隐含路线图方向

- **可靠性基线**：从今日合并的多个 P1 修复来看，"会话锁/输出缓冲/网络自愈/存储原子性"正在成为版本核心目标
- **WebUI 体验升级**：Quick Chat 概念（#5181→#5184）反映出"轻量入口 + 固定会话"的产品思路
- **生态兼容**：#5189（时区数据兜底）、#5186（skills.sh 已知源）显示出对"边缘运行环境"和"开放生态源"的扩展策略

---

## 七、用户反馈摘要

- **whisper/音频通道**：用户 @mxnbf 在 WhatsApp 通道遇到 ffmpeg 编码相关警告，无法发出音频；接收侧正常——典型"上游客户端 ↔ 通道适配器"不对称问题。
- **移动端/低配环境**：@CVFA1 反馈 Termux（Android 上的 Linux 终端模拟器）因缺失系统时区数据库而无法启动 webui，反映出 nanobot 仍假设目标平台具有完整 GNU/Linux 工具链。
- **GPT 模型兼容性**：@SamNotAltman 反映定时任务场景下 GPT 模型常出现"工具步骤完成但未产出最终回答"的错误，怀疑与中文 prompt + 定时任务调度器的兼容性有关；换模型则正常。
- **Telegram 稳定性**：@QQQ300kuai 报告的是生产级故障（22:58:46 警告后永久失联），对运维型用户影响很大。

**总体满意度判断：** 社区对项目能力面总体认可，但**对边缘场景（移动端/弱网络/异构模型）的容忍度正在下降**——这些不是"是否支持"的问题，而是"是否稳定可用"。

---

## 八、待处理积压

| 编号 | 类型 | 创建时间 | 描述 | 链接 |
|---|---|---|---|---|
| **#3106** | Bug | 2026-04-13 | GPT 模型 + 定时任务 → "无法产出最终答案"；超 3 个月未响应 | [#3106](https://github.com/HKUDS/nanobot/issues/3106) |
| **#4021** | PR（Open） | 2026-05-27 | fix(codex): dedup reasoning items before send，关联 #3633 | [#4021](https://github.com/HKUDS/nanobot/pull/4021) |
| **#4819** | PR（Open, conflict） | 2026-07-06 | fix(memory): 替换 WeakValueDictionary，存在合并冲突 | [#4819](https://github.com/HKUDS/nanobot/pull/4819) |
| **#4551** | PR（Open, conflict） | 2026-06-26 | feat(heartbeat): isolated_session，存在合并冲突 | [#4551](https://github.com/HKUDS/nanobot/pull/4551) |
| **#5149** | Bug | 2026-07-28 | WhatsApp 音频发送失败，无 fix PR | [#5149](https://github.com/HKUDS/nanobot/issues/5149) |
| **#5185** | Bug | 2026-07-30 | 响应混入工具调用代码，无 fix PR | [#5185](https://github.com/HKUDS/nanobot/issues/5185) |

**维护者建议：**
1. 优先关闭 #3106——长期未响应会损害社区信心，至少需要"确认/拒绝/转交"的回复；
2. 处理 2 个标有 `conflict` 的 PR（#4819、#4551）——它们已停留超过 3 周，可能需要 rebase 或拆分；
3. 为 #5149 与 #5185 指派 owner，避免重复堆积。

---

*本日报由 AI 自动生成，基于过去 24 小时公开 GitHub 事件汇总。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**: 2026-07-31
**数据周期**: 过去 24 小时
**项目仓库**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 处于 **高活跃度维护期**。昨日发布 v0.19.1 (v2026.7.30) 补丁版本后，今日社区反馈集中涌入，过去 24 小时产生 50 条活跃 Issue 与 50 条 PR 更新（48 待合并/2 已关闭）。议题焦点明显呈现三个特征：**桌面端 (Desktop) 的体验问题（特别是 Windows 平台）**、**会话/状态管理的一致性缺陷**，以及**多处安全加固与配置漂移修复**。0 个 Issue 在 24 小时内被关闭、PR 合并率仅 4%，说明 issue 涌入速度远超处理速度，社区需要关注积压风险。

---

## 2. 版本发布

### v2026.7.30 / v0.19.1 — 补丁版本

- **发布类型**: Patch Release（稳定标签）
- **发布目的**: 自 v0.19.0 以来的 **1000+ PR 滚动合集**，为 Docker 镜像、托管部署与全新安装提供稳定基线
- **预期影响**: 低风险 — 主要是 bug 修复与小规模改进的合集
- **迁移建议**: 生产环境可直接升级；定制化分叉请对比 changelog 中是否涉及您依赖的内部 API

> 当前 release notes 文本在数据截断中未完全展示，建议前往 [Releases 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.30) 查看完整内容。

---

## 3. 项目进展

虽然过去 24 小时 PR 合并数仅为 2，但 **在飞 PR 池非常健康**，许多 PR 已具备合并条件，等待 review：

### 已合并/关闭的重要 PR
- （数据中已合并 PR 的详情有限，仅显示 2 条已合并/关闭条目，建议关注 GitHub 页面获取具体列表）

### 接近合并的高质量 PR（Open，但状态 ci-reviewed）

| PR | 主题 | 关键价值 |
|---|---|---|
| [#75037](https://github.com/NousResearch/hermes-agent/pull/75037) | **供应链安全补丁**：修复易受攻击依赖 + 增加 publication-age 门槛 + npm 脚本白名单 | 直接降低生产环境 RCE 风险 |
| [#71876](https://github.com/NousResearch/hermes-agent/pull/71876) | **Gateway 结构化安全重启** | 解决重启竞态导致 agent 提前被终止的问题 |
| [#72428](https://github.com/NousResearch/hermes-agent/pull/72428) | **Docker 路径暴露修复** | 修正 web cache 路径在容器内不可见导致的截断损坏 |
| [#72416](https://github.com/NousResearch/hermes-agent/pull/72416) | **Anthropic OAuth `--no-browser` 支持** | 完善无头环境认证流程 |
| [#70505](https://github.com/NousResearch/hermes-agent/pull/70505) | **Desktop 新会话头显示目标项目** | 减少新建会话时的上下文歧义 |
| [#70487](https://github.com/NousResearch/hermes-agent/pull/70487) | **Desktop tooltip 精确时间戳** | 提升无障碍体验 |
| [#75129](https://github.com/NousResearch/hermes-agent/pull/75129) | **修复 model picker 写入错误的 provider slug** | 直接修复 [#75087](https://github.com/NousResearch/hermes-agent/issues/75087) |
| [#75122](https://github.com/NousResearch/hermes-agent/pull/75122) | **迭代预算默认值对齐 (90→500) + execute-code-only turn 退还 api_call_count** | 直接修复 [#75097](https://github.com/NousResearch/hermes-agent/issues/75097) |
| [#75113](https://github.com/NousResearch/hermes-agent/pull/75113) | **Windows PTY 后代清理验证** | 防止 Windows 平台 PTY 子进程泄漏 |
| [#74904](https://github.com/NousResearch/hermes-agent/pull/74904) | **Windows autostash 处理保留设备名 (CON/PRN/AUX/NUL/COM1-9/LPT1-9)** | 修复 Windows 更新流程阻塞 |
| [#43277](https://github.com/NousResearch/hermes-agent/pull/43277) | **Codex 凭据池冷却兜底** | 修复认证 fallback 在限流后仍尝试旧账号的问题 |
| [#75124](https://github.com/NousResearch/hermes-agent/pull/75124) | **ACP turn keepalive（防 VS Code Copilot Chat idle timeout）** | 提升长任务在 IDE 中的稳定性 |

**项目整体进度评估**：稳步推进，质量水位较高（多数 PR 标注 `ci-reviewed`），但 review 节奏跟不上 issue 增长。

---

## 4. 社区热点

### 讨论最活跃的 Issue

#### 🔥 [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) — 10 条评论 ⭐
**Treat memory-context as background context, not authoritative user-message content**
- **诉求分析**: 该 Issue 揭示了一个**潜在安全威胁面** — 当前 agent 将 memory-context 与 user-message 同等对待，可能被恶意注入操纵。作者主动说明是让 agent 代笔提交，说明了议题的技术深度
- **重要程度**: P2，涉及 memory 与 agent 安全边界，影响所有使用 memory 功能的用户

#### 🔥 [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) — 5 条评论 👍2
**Desktop 升级器误检自身为"另一个实例"**
- **诉求分析**: 这是一个**完全阻塞更新流程**的 bug — 升级引导程序误判当前 PID 即为冲突进程，导致任何更新尝试都失败。对桌面用户影响严重

#### [#73629](https://github.com/NousResearch/hermes-agent/issues/73629) — 3 条评论
**Desktop Sessions 列表在 Win11 滚动时持续抖动/闪烁**（Win10 不复现）

#### [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) — 3 条评论 👍1
**macOS 内嵌更新被旧版 `~/.hermes/hermes-setup` 永久破坏**

### PR 端关注度
今日 PR 的 `comments` 字段在数据中普遍为 `undefined`，说明社区尚未广泛 review。但根据 issue 提及的频次，以下 PR 的修复对象（#75087、#75097 等）已经在社区形成共识。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🚨 P1（严重）
| Issue | 描述 | 平台 | 是否已有 fix |
|---|---|---|---|
| [#74942](https://github.com/NousResearch/hermes-agent/issues/74942) | 升级器 PID 误检导致更新完全失败 | Desktop (Windows) | ❌ 暂未见 |

### ⚠️ P2（重要）
| Issue | 描述 | 平台 | 是否已有 fix |
|---|---|---|---|
| [#73629](https://github.com/NousResearch/hermes-agent/issues/73629) | Sessions 列表滚动抖动 | Desktop Win11 | ❌ |
| [#74836](https://github.com/NousResearch/hermes-agent/issues/74836) | macOS 内嵌更新永久失败 | Desktop macOS | ❌ |
| [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | Docker backend 首次工具调用未拉镜像就执行在 host | Docker | ❌ |
| [#74570](https://github.com/NousResearch/hermes-agent/issues/74570) | Desktop pin/unpin 被 `pullRemotePins` 竞态静默回滚 | Desktop | ❌ |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | `microsoft-teams-apps` import 副作用把外部 `.env` 加载进所有 gateway 进程，破坏 profile secret 隔离 | Gateway | ❌ |
| [#75128](https://github.com/NousResearch/hermes-agent/issues/75128) | Desktop 与 CLI 在 provider/model routing 上配置变更后发散 | Desktop | ❌ |
| [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) | **Shell 注入 — HIGH**：`config.yaml` quick commands 用 `shell=True`，无文件所有权校验 | CLI | ❌ |
| [#75087](https://github.com/NousResearch/hermes-agent/issues/75087) | model picker 保存的 provider slug 错误 | CLI | ✅ **有 [#75129](https://github.com/NousResearch/hermes-agent/pull/75129)** |
| [#75130](https://github.com/NousResearch/hermes-agent/issues/75130) | skill-proposal 队列无界增长并自我失效 | Skills | ❌ |
| [#75018](https://github.com/NousResearch/hermes-agent/issues/75018) | Gateway 把 venv 环境变量泄漏到 `no_agent` cron 子进程 | Gateway/Cron | ❌（标记为 duplicate） |
| [#51132](https://github.com/NousResearch/hermes-agent/issues/51132) | `computer_use(windows)` agent 拒绝调用 cua-driver 暴露的 `launch_app` MCP 工具 | Windows | ❌ |
| [#50930](https://github.com/NousResearch/hermes-agent/issues/50930) | Cron 输出泄漏未标签的纯文本 reasoning | Cron | ❌ |
| [#52551](https://github.com/NousResearch/hermes-agent/issues/52551) | 安全过滤器过激：`.env` 变量名被遮蔽（中文 issue） | Agent/Terminal | ❌ |

### 🔵 P3（中低级）
| Issue | 描述 | 是否已有 fix |
|---|---|---|
| [#53813](https://github.com/NousResearch/hermes-agent/issues/53813) | 上下文压缩后 session↔project 关联丢失 | ❌ |
| [#55274](https://github.com/NousResearch/hermes-agent/issues/55274) | BlueBubbles REST helper 无限制缓冲 JSON | ❌ |
| [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) | 并发 `hermes chat -q` 在退出时偶发 SIGABRT | ❌ |
| [#66756](https://github.com/NousResearch/hermes-agent/issues/66756) | `hermes doctor` 对正常 Azure Foundry 端点报 404 | ❌ |
| [#52858](https://github.com/NousResearch/hermes-agent/issues/52858) | LSP 在文件编辑后仍发送旧诊断 | ❌ |
| [#48654](https://github.com/NousResearch/hermes-agent/issues/48654) | Desktop 更新 changelog 截断至 6 项，无法复制完整列表 | ❌ |

---

## 6. 功能请求与路线图信号

### 高潜力/已开工
| 请求 | 描述 | 状态 |
|---|---|---|
| [#67375](https://github.com/NousResearch/hermes-agent/issues/67375) | Desktop deep link 在已安装 profile 中启动空会话 | 提议中，3 评论 |
| [#43028](https://github.com/NousResearch/hermes-agent/issues/43028) | Ollama 等慢本地 provider 的默认静默模式（spinner timeout） | 提议中 |
| [#34823](https://github.com/NousResearch/hermes-agent/issues/34823) | **Per-Message 语义化 Skill 检索**（节省每调用 800 tokens） | 实验性 `semantic_retrieval` 已存在但只匹配首条消息 |
| [#38284](https://github.com/NousResearch/hermes-agent/issues/38284) | Hermes Agent skill 应在自查前先查 issues/PR | 提议中 |
| [#46467](https://github.com/NousResearch/hermes-agent/issues/46467) | macOS TUI copy-on-select 可配置开关 | 提议中 |
| [#51398](https://github.com/NousResearch/hermes-agent/issues/51398) | 显示 thinking/reasoning 耗时 | 提议中 |
| [#26785](https://github.com/NousResearch/hermes-agent/issues/26785) | Plugin startup advisory API（banner 与 prompt 之间） | 提议中 |

### 已对应 PR 的功能
- [#69670](https://github.com/NousResearch/hermes-agent/pull/69670) — WhatsApp 历史消息 API（默认关闭，零行为变更）
- [#47122](https://github.com/NousResearch/hermes-agent/pull/47122) — `ssh_pwsh` 后端用于 Windows 远程
- [#73849](https://github.com/NousResearch/hermes-agent/pull/73849) — `hermes serve` 支持多次 `--host`（双栈绑定）

**路线图信号**：本周期大量 PR 集中于**多平台稳健性**（Windows 设备名、PTY 清理、Drive letter）、**配置层一致性**（CLI ↔ Desktop ↔ Gateway）、以及**安全边界**（auth、profile 隔离、供应链）。下一个 minor 版本（v0.20）很可能以"cross-platform hardening" 为主题。

---

## 7. 用户反馈摘要

从 Issue 评论与正文提炼的真实用户痛点：

### 😤 主要痛点
1. **跨平台不一致** — Windows/macOS Desktop bug 频发，特别是与系统级操作（更新、PTY、设备名、滚动渲染）相关的边界 case
2. **更新流程脆弱** — 多个平台都报告更新器无法正常工作，且修复后仍有路径未覆盖（PID 误检、过期二进制）
3. **配置行为不一致** — Desktop 与 CLI 对相同 `config.yaml` 变更的反应不同（provider routing 模型漂移）
4. **安全过滤器副作用** — [#52551](https://github.com/NousResearch/hermes-agent/issues/52551) 中用户反馈 v0.17 后 `.env` 变量名被一并遮蔽，导致无法用 grep 判断 Key 是否存在，体现**安全措施过度激进**
5. **长任务稳定性** — ACP 客户端（VS Code Copilot Chat）超时杀掉 agent turn，cron 偶发崩溃、Docker 首次调用跑在 host

### 😊 隐含满意点
- Skill 系统被广泛使用（提案显示 20+ skills 注入，每调用 ~800 tokens 开销已成为关注点，意味着真的有人在重度使用）
- 多 provider 生态活跃（Ollama、Anthropic、OpenAI、Azure Foundry、BlueBubbles、WhatsApp、Teams）
- 社区愿意写技术深度 issue（[#31584](https://github.com/NousResearch/hermes-agent/issues/31584) 由 agent 代笔说明用户在用 agent 做严肃的工程工作）

### 🌍 使用场景
- 桌面 + CLI + TUI 多端切换
- 本地 Ollama 模型（慢网络下的 UX 问题）
- Windows 作为 desktop 主战场（大量 Windows-specific bug）
- cron / background / integration agent 长跑场景

---

## 8. 待处理积压

### ⏰ 长期未响应但重要

| Issue/PR | 创建日期 | 主题 | 风险 |
|---|---|---|---|
| [#31584](https://github.com/NousResearch/hermes-agent/issues/31584) | 2026-05-24 | memory-context 安全边界 | **2 个月未解**，讨论最热 |
| [#53813](https://github.com/NousResearch/hermes-agent/issues/53813) | 2026-06-27 | session↔project 关联丢失 | Desktop 用户痛点 |
| [#54354](https://github.com/NousResearch/hermes-agent/issues/54354) | 2026-06-28 | Docker 首次调用跑在 host | **安全风险**：可能跨容器逃逸到 host 数据 |
| [#55274](https://github.com/NousResearch/hermes-agent/issues/55274) | 2026-06-29 | BlueBubbles 无限制缓冲 | **DoS 风险**：未限制的内存增长 |
| [#43186](https://github.com/NousResearch/hermes-agent/issues/43186) | 2026-06-10 | 并发 SIGABRT | 难复现但持续影响并发用户 |
| [#52858](https://github.com/NousResearch/hermes-agent/issues/52858) | 2026-06-26 | LSP 旧诊断 | 日常使用浪费 token |
| [#62935](https://github.com/NousResearch/hermes-agent/issues/62935) | 2026-07-12 | microsoft-teams-apps 污染 profile secret | **跨 profile 凭据泄漏，HIGH** |
| [#53140](https://github.com/NousResearch/hermes-agent/issues/53140) | 2026-06-26 | config.yaml shell 注入 | **标记为 HIGH 但 1 个月无 PR** |
| PR [#47122](https://github.com/NousResearch/hermes-agent/pull/47122) | 2026-06-16 | ssh_pwsh 后端 | **1 个半月未合并**，重要 Windows 特性 |

### ⚠️ 维护者提醒
- **Open PR: 48 vs Merged: 2** — review 速率严重落后

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期**: 2026-07-31
**项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日社区活跃度处于**中等偏高**水平，过去 24 小时共产生 24 条更新（7 个 Issue + 17 个 PR）。工作重心明显集中在**依赖项升级**与**渠道功能增强**两大方向：Dependbot 集中推送了一批 AWS SDK、Anthropic SDK、GitHub Actions 等核心依赖更新；同时有 3 个关键 Issue 被关闭（#2546、#3258、#3257），反映出维护团队对历史积压的有效清理。无新版本发布，整体节奏平稳但**无重大里程碑进展**。

---

## 2. 版本发布

⚠️ 今日无新版本发布。当前公开版本为 `v0.3.1`（参见 [#3258](https://github.com/sipeed/picoclaw/issues/3258) 中的版本信息）。

---

## 3. 项目进展

今日合并/关闭的重要 PR 主要集中在**依赖维护**与**历史功能整理**两类：

| 类型 | PR | 说明 |
|---|---|---|
| 依赖更新(已关闭/被取代) | [#3263](https://github.com/sipeed/picoclaw/pull/3263) | `actions/setup-node` 6 → 7 |
| 依赖更新(已关闭/被取代) | [#3262](https://github.com/sipeed/picoclaw/pull/3262) | `actions/setup-go` 6 → 7 |
| 依赖更新(已关闭/被取代) | [#3290](https://github.com/sipeed/picoclaw/pull/3290) | `aws-sdk-go-v2/config` 1.32.25 → 1.32.31（已被 #3306 取代） |
| 依赖更新(已关闭/被取代) | [#3288](https://github.com/sipeed/picoclaw/pull/3288) | `bedrockruntime` 1.53.3 → 1.56.0（已被 #3305 取代） |
| 功能调整 | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | feat(bedrock): Converse prompt caching — 已关闭（需评估 Bedrock 缓存机制） |

**整体判断**：今日**无实质功能合入主干**。多个 Dependbot PR 形成"打开→关闭→新版本再次打开"的循环，表明依赖管理流程存在版本协调问题，但也说明项目供应链持续紧跟上游。

---

## 4. 社区热点

按评论数与讨论活跃度排序：

| 排名 | Issue/PR | 评论数 | 热度分析 |
|---|---|---|---|
| 1 | [#2546](https://github.com/sipeed/picoclaw/issues/2546) [已关闭] | 6 | **MCP 生态接入** 的关键诉求，6 条评论反映社区对零配置 OAuth 流程的强烈需求，今日已关闭（疑似合并或转为 Wontfix） |
| 2 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) [OPEN] | 2 | IRC 长消息分段处理问题，影响 IRC 用户的实际使用体验 |
| 3 | [#3258](https://github.com/sipeed/picoclaw/issues/3258) [已关闭] | 2 | Process Hook 反序列化缺陷，技术含量较高的 Bug 报告 |
| 4 | [#3257](https://github.com/sipeed/picoclaw/issues/3257) [已关闭] | 2 | Gateway 会话无状态模式请求 |
| 5 | [#3302](https://github.com/sipeed/picoclaw/issues/3302) [OPEN] | 0 | OAuth 2.1 for MCP 的**重复请求**（duplicate of #2546） |

**信号**：MCP 协议接入与 OAuth 认证仍是社区最关心的两大主题；Issue #3302 的同日开立暗示社区对 #2546 的关闭结果存在分歧或希望推动。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | **Process Hook `before_tool` 决策字段被丢弃 + 参数反序列化缺陷**（影响 v0.3.1 @ 2cf030d2）。用户在使用自定义 hook 改写工具参数时，结果被错误丢弃，属于静默数据丢失类 Bug。 | ✅ 已关闭（建议关注相关 fix PR 是否合入主干） |
| 🟡 中 | [#3308](https://github.com/sipeed/picoclaw/issues/3308) | **SeaHorse、Channel Manager、Hooks 中的并发风险、goroutine 泄漏与内存/速度优化** —— 由社区开发者自发提交的代码审查报告，涵盖潜在资源泄漏风险。 | 🆕 新开，无 fix PR |
| 🟡 中 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 渠道长消息（>512 bytes）被错误拆分后 PicoClaw 未识别为同一消息，导致对话上下文错乱。 | 🔓 OPEN，无 fix PR |
| 🟢 低 | [#3279](https://github.com/sipeed/picoclaw/pull/3279) | fix(seahorse): 防止工具调用格式泄漏到 LLM 摘要中 —— 属于已发现但未合入的修复 | 🔓 OPEN PR |

**整体稳定性评估**：未发现 P0 级崩溃或数据损坏报告，但并发与生命周期管理方面的隐患（#3308）值得维护者优先审视。

---

## 6. 功能请求与路线图信号

| 优先级 | 请求 | 关联 PR | 落地概率 |
|---|---|---|---|
| ⭐⭐⭐ | [#2546 / #3302](https://github.com/sipeed/picoclaw/issues/2546) MCP 服务器 OAuth 2.1 + PKCE 仪表盘集成 | — | 🟡 中等（已关闭但有重复需求） |
| ⭐⭐⭐ | [#3307](https://github.com/sipeed/picoclaw/issues/3307) Telegram 等聊天渠道的会话列表/切换命令（对齐 Web UI） | — | 🟢 较高（明确功能点） |
| ⭐⭐ | [#3270](https://github.com/sipeed/picoclaw/pull/3270) DashScope TTS 提供商 + 微信音频文件发送 | PR 本身即实现 | 🟢 高 |
| ⭐⭐ | [#3283](https://github.com/sipeed/picoclaw/pull/3283) 钉钉渠道图片/图像消息接收支持 | PR 本身即实现 | 🟢 高 |
| ⭐⭐ | [#3200](https://github.com/sipeed/picoclaw/pull/3200) 模型可配置默认 fallback 链（Web UI 端到端） | PR 本身即实现 | 🟡 中等（取决于后端联调） |
| ⭐ | [#3271](https://github.com/sipeed/picoclaw/pull/3271) 9 家 Provider 默认模型名更新到 2026-07 最新 | PR 本身即实现 | 🟢 极高 |
| ⭐ | [#3222](https://github.com/sipeed/picoclaw/pull/3222) DeltaChat 渠道重构 (-200 LOC) | PR 本身即实现 | 🟡 中等（重构类需谨慎） |

**路线图洞察**：
- **多模态扩展** 是当前主线（图像、音频、TTS）—— 钉钉图片、微信音频、DashScope TTS 三项 PR 同步推进。
- **会话管理 UX 均衡化** 趋势明显（Telegram 追赶 Web UI）。
- **模型生态更新** 进入常态化（每月刷新 provider 默认模型）。

---

## 7. 用户反馈摘要

从 Issue 评论与 PR 描述中提炼的真实声音：

- 🎙️ **多平台一致体验诉求**（来自 [#3307](https://github.com/sipeed/picoclaw/issues/3307)）：Telegram 用户明确表达"Web UI 有完整的 session 管理，而我们在 Telegram 上什么都做不了" —— 反映**渠道功能差距**正在成为用户不满的主要来源。
- 🔐 **低门槛 MCP 接入**（来自 [#2546](https://github.com/sipeed/picoclaw/issues/2546)）：用户希望"非技术人员粘贴 URL 即可添加 OAuth 保护的 MCP 服务器，无需 shell 与 Node.js" —— 强烈指向**开箱即用体验**。
- 💬 **IRC 协议语义尊重**（来自 [#3287](https://github.com/sipeed/picoclaw/issues/3287)）：技术用户指出 PicoClaw 当前对 IRC 消息分段语义理解不正确，影响对话连贯性 —— 体现**小众渠道**用户对协议正确性的高要求。
- 🛠️ **高级用户可扩展性**（来自 [#3258](https://github.com/sipeed/picoclaw/issues/3258)）：hook 系统是高级用户定制关键路径，反序列化缺陷属于"无声失败" —— 用户期望**更严格的契约保障**。
- 🧹 **代码质量敏感度提升**（来自 [#3308](https://github.com/sipeed/picoclaw/issues/3308)）：社区开发者主动提交并发与内存审查报告 —— 项目健康度已进入"被外部深度审查"阶段。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应或标记为 `stale`，维护者应予以关注：

| 编号 | 类型 | 闲置时长 | 提醒 |
|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR - DeltaChat 重构 | ~28 天 OPEN | 社区贡献者重构成果，需要核心维护者评审 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | PR - Fallback Chain 配置 | ~30 天 OPEN | Web UI + 后端完整方案，阻塞模型路由灵活性 |
| [#3291](https://github.com/sipeed/picoclaw/pull/3291) | PR - copilot-sdk/go 0.2.0 → 1.0.8 | ~8 天 OPEN | 主版本升级（大版本跨度），需重点验证 |
| [#3289](https://github.com/sipeed/picoclaw/pull/3289) | PR - pion/rtp 1.10.2 → 1.10.5 | ~8 天 OPEN | 涉及媒体流处理 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue - IRC 长消息 | OPEN | 影响 IRC 用户核心体验 |
| [#2546](https://github.com/sipeed/picoclaw/issues/2546) | Issue - MCP OAuth | **已关闭但 #3302 重复开立** | 需明确回应社区，避免反复开立 |

**积压风险**：多个 stale 标记的 PR 显示维护者可能存在审阅瓶颈；尤其 [#3291](https://github.com/sipeed/picoclaw/pull/3291) 涉及 GitHub Copilot SDK 主版本跳跃，存在潜在 API 破坏风险，建议优先评审。

---

### 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 24h 24 条更新，节奏稳定 |
| 维护响应 | ⭐⭐⭐ | 3 个历史 Issue 关闭，但 stale PR 累积 |
| 代码质量 | ⭐⭐⭐⭐ | 社区主动提交代码审查（#3308） |
| 路线图清晰度 | ⭐⭐⭐ | 多模态/会话管理方向明确，但无近期版本规划公告 |
| 社区参与 | ⭐⭐⭐⭐ | 外部贡献者持续提交功能 PR（DingTalk、微信、IRC 等） |

---

> 📌 **维护者建议**：今日重点应放在（1）回应 [#3302](https://github.com/sipeed/picoclaw/issues/3302) 与 [#2546](https://github.com/sipeed/picoclaw/issues/2546) 的关系以避免社区重复开立；（2）推进 [#3307](https://github.com/sipeed/picoclaw/issues/3307) Telegram session 管理的方案对齐；（3）评估 [#3308](https://github.com/sipeed/picoclaw/issues/3308) 中并发问题是否需要 backport 到 v0.3.x。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-07-31
**数据来源**：nanocoai/nanoclaw GitHub 仓库
**项目类别**：AI 智能体 / 个人 AI 助手

---

## 1. 今日速览

NanoClaw 今日活跃度**中偏高**：24 小时内 17 个 PR 流转、5 个已合入/关闭、12 个待合并，同时新增 2 个未关闭 Issue，无新版本发布。合并的 5 个 PR 集中于**镜像加固与供应链安全**（#3160、#3158、#3159）以及一处功能兼容性修复（#3122）和文档链接补全（#3152）。当前 PR 队列健康度较好但仍有 5 个超过 30 天的旧 PR 处于 OPEN 状态，存在**积压风险**。新增的两个 Issue 均直指核心消息通路与安装管线，**稳定性问题**是本日最值得关注的信号。

---

## 2. 版本发布

无新版本发布。仓库近 24 小时未产出 Release 标签，最新代理镜像通过 PR #3160 重新 pin 到 `hardened-2026-07-30`（sha256:4e441375…，611 MB / 8 层），属于内部供应链变更而非版本号发布。

---

## 3. 项目进展

今日合入/关闭的 5 个 PR 主要推进了如下方向：

| PR | 主题 | 影响 |
|---|---|---|
| [#3160](https://github.com/nanocoai/nanoclaw/pull/3160) | repin 代理镜像到 hardened-2026-07-30 | 镜像层数从 18 降到 8、单层最大占比从 39% 降到 27%，**拉取吞吐显著改善** |
| [#3159](https://github.com/nanocoai/nanoclaw/pull/3159) | 将 Vercel CLI 改为 opt-in | 默认镜像**不再携带部署凭据面**，减小体积与攻击面 |
| [#3158](https://github.com/nanocoai/nanoclaw/pull/3158) | verify-agent-image 绑定发布者身份 | 修复 #3150 引入的 Sigstore 签名校验静默跳过问题，使 auto-merge 真正能触发 |
| [#3122](https://github.com/nanocoai/nanoclaw/pull/3122) | opencode 主线兼容性 + 自定义端点传输 + 记忆对齐 | 收尾较早提交的能力补齐 |
| [#3152](https://github.com/nanocoai/nanoclaw/pull/3152) | README 链接到架构文档 | docs/REQUIREMENTS.md、docs/SECURITY.md 提升可达性 |
| [#2682](https://github.com/nanocoai/nanoclaw/pull/2682) | 跳过 v1-only skill 分支 | `/update-skills` 现在正确分类不兼容分支 |

整体看，项目在**容器/镜像供应链**这条主线上明显推进：发行身份、镜像层结构、CLI 工具面三个层面同日内被打通，可视为一次有意义的"安全与体积"集中治理。

---

## 4. 社区热点

今日评论/反应最活跃的是 Issue **#3153**（1 条评论，作者 TO-maschenborn）：
- [#3153 add_reaction / edit_message 对入站消息全部失败](https://github.com/nanocoai/nanoclaw/issues/3153)

话题聚焦："agent-group 后缀未从平台消息 ID 上剥离，导致 Slack 反复返回 `message_not_found` 并经 3 次重试后标记失败"。这条 Issue 触及**入站消息反应/编辑**这一关键交互链路，0 个 👍 但已被讨论，说明属于影响实际部署的**功能性 bug** 而非口味之争。

其次是 PR **#3156**（fix(agent-runner)：将频道附件作为结构化 parts 传递给 provider），属于对 #3153 类现象的**对侧修复尝试**，将附件载荷从松散字段统一为结构化 parts，有望同时缓解 #3153 这类 ID 错配问题。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#3153](https://github.com/nanocoai/nanoclaw/issues/3153) | `add_reaction`/`edit_message` 对入站消息全部失败（Slack 端 `message_not_found`，3× 重试后失败） | 待补，PR #3156 可能间接覆盖 |
| 🟠 中-高 | [#3155](https://github.com/nanocoai/nanoclaw/issues/3155) | registry 分支漂移导致 `/add-codex` 自有构建步骤失败，typecheck 不通过 | 待补 |
| 🟡 中 | [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) | container-runner 未追踪孤儿容器，单 agent-group 累积 3 个并发容器轮询同一 session DB | 已有修复 PR（仍 OPEN） |
| 🟡 中 | [#3157](https://github.com/nanocoai/nanoclaw/pull/3157) | `materializeTemplateSkills` 在 `.claude-shared/skills` 上跟随悬空符号链接，指向容器路径（`/app/skills/<name>`） | 已有修复 PR |
| 🟢 低 | [#3154](https://github.com/nanocoai/nanoclaw/pull/3154) | 定时任务收到的 `time` 未取自 `process_after`，调度语义不准 | 已有修复 PR |

总体看：**核心消息通路与容器运行时**是当前稳定性双热点，且大多已有对应方向的 PR 在路上。

---

## 6. 功能请求与路线图信号

今日没有显式的新功能请求 Issue，但**已 OPEN 的能力型 PR** 透露出下一阶段可能的纳入方向：

- **附件/附件结构化**：[#3156](https://github.com/nanocoai/nanoclaw/pull/3156) —— 若合并，将使多 provider 间附件处理统一
- **镜像供应链强化**：[#3158](https://github.com/nanocoai/nanoclaw/pull/3158) + #3159 + #3160 已同日落地，构成完整闭环
- **MCP 服务器健康可见性**：[#3124](https://github.com/nanocoai/nanoclaw/pull/3124) 报告 unavailable MCP server，提升诊断能力
- **数据库迁移完善**：[#3145](https://github.com/nanocoai/nanoclaw/pull/3145) 迁移 021 为现有 wiring 补齐 channel destination
- **Signal 文档完善**：[#2685](https://github.com/nanocoai/nanoclaw/pull/2685) 已积压 57 天，若合入将完善群组 typing/出站 reaction/quote-reply

仍 OPEN 的较老能力型 PR（按仓库来看大概率将作为独立 skill 发布）：
- [#2301 feat(add-github): polling 模式](https://github.com/nanocoai/nanoclaw/pull/2301) —— NAT/防火墙友好
- [#2317 /add-voice-transcription-free-whisper](https://github.com/nanocoai/nanoclaw/pull/2317)
- [#2634 /add-paws4claws](https://github.com/nanocoai/nanoclaw/pull/2634)

---

## 7. 用户反馈摘要

从 Issue/评论区提炼出的真实痛点：

- **Slack 集成**是用户当前最高频踩坑面：ID 后缀处理错误让"加 reaction/编辑消息"变成每次必失败，对一个会话型产品而言是体验硬伤（[#3153](https://github.com/nanocoai/nanoclaw/issues/3153)）。
- **多 agent-group 部署**的运维者反馈"5 天 uptime 下出现 3 个并发容器抢同一 session DB"，反映出容器生命周期回收存在**长尾 race**（[#3119](https://github.com/nanocoai/nanoclaw/pull/3119)）。
- **provider 安装**流程对 `main` 与 `providers` 分支漂移敏感，会卡在自己 typecheck 上，反映出**技能 (skill) 与主仓库**的发布节奏需要更紧的同步约束（[#3155](https://github.com/nanocoai/nanoclaw/issues/3155)）。
- **满意侧**：今日批量合入的镜像加固、CLI opt-in 化、签名校验闭环，意在回应"默认面/凭据面过大"的隐忧，方向与社区诉求一致。

---

## 8. 待处理积压

按"OPEN 时长"排序、最值得维护者关注的项：

| 停留天数 | PR | 主题 | 风险 |
|---|---|---|---|
| ~86 天 | [#2301](https://github.com/nanocoai/nanoclaw/pull/2301) | `/add-github` polling 模式 | 与默认 webhook 模式互为补充，长期 OPEN 会让 NAT 用户群体缺乏官方能力 |
| ~85 天 | [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | `/add-voice-transcription-free-whisper` | 本地转写是高需求功能，长期积压易引发 fork 漂移 |
| ~74 天 | [#2537](https://github.com/nanocoai/nanoclaw/pull/2537) | CI pre-commit（prettier/eslint/typecheck/vitest） | 贡献者体验基线，积压与日益增长的 PR 量形成反比 |
| ~64 天 | [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | `/add-paws4claws`（AWS 凭据代理） | 与 #3159 的"opt-in 凭据面"思路一致，整合时机已成熟 |
| ~57 天 | [#2685](https://github.com/nanocoai/nanoclaw/pull/2685) | Signal 文档补全 | 仅文档类，风险极低、合并成本极低，纯属应清 |
| ~8 天 | [#3119](https://github.com/nanocoai/nanoclaw/pull/3119) | 孤儿容器 reconcile | 与稳定性直接相关，建议优先评审 |
| ~7 天 | [#3124](https://github.com/nanocoai/nanoclaw/pull/3124) | 报告 unavailable MCP server | 提升诊断能力，建议尽快合并 |

> 维护者建议：本周可优先清理 #2685（纯文档零风险）、#3158（auto-merge 阻塞依赖）、#3119（运行时稳定性），同时为 5 个超 30 天的能力型 PR 给出明确去留判断。

---

*报告基于 nanocoai/nanoclaw 在 2026-07-30 07:00 UTC 至 2026-07-31 07:00 UTC 区间的公开数据生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-31

---

## 1. 今日速览

IronClaw 今日维持高强度迭代节奏，**过去 24 小时累计 88 条工单变动（38 Issues + 50 PRs）**，社区活跃度处于项目高位。围绕 v1 发布前的"Reborn"架构重构与多 Epic 推进，本日共合并/关闭 26 条工单，另有 29 条 PR 待合并。

信号层面有三类问题需要关注：
- **2 个 P0/P2 安全相关 Issue**（跨用户记忆泄漏、共享主目录）已被打开，威胁 v1 落地；
- **目标 crate 架构 Epic #3773** 在 7 月 30 日集中拆分为 10 个 WS 工作流，配套 PR #6936 已合入基线与"只缩不增"异常指标闸门；
- **IronHub 安装链路** 出现两类问题：全部技能 CTA 404（#6940）、安装未绑定包指纹（PR #6933 修复中）。

整体来看，IronClaw 进入 **v1 发布前质量冲刺期**，工程节奏稳定，但安全与 UX 收口仍是主要风险点。

---

## 2. 版本发布

**无新版本发布。** 上一轮待合并的 chore: release PR #5598（涉及 `ironclaw_common` 0.4.2 → 0.5.0、`ironclaw_skills` 0.3.0 → 0.4.0 的破坏性变更，`ironclaw_safety` 0.2.2 → 0.2.3）仍处于 OPEN 状态，建议关注合并时机——`ironclaw_common` 与 `ironclaw_skills` 均含 API breaking change，下游消费者需同步迁移。

🔗 https://github.com/nearai/ironclaw/pull/5598

---

## 3. 项目进展

本日合并/关闭的关键 PR 与 Issue：

### 已关闭（合并或被拒）
| 工单 | 内容 | 影响 |
|------|------|------|
| [PR #6934](https://github.com/nearai/ironclaw/pull/6934) | `host_api` 合约 prelude 去通配符（WS0） | 目标架构重构第一步，移除 `pub use *` 的扁平再导出，强制消费者走模块路径 |
| [Issue #4636](https://github.com/nearai/ironclaw/issues/4636) | 独立 SSO 会话与多用户隔离 E2E 覆盖 | 关闭 #4632 Epic 的最后一块缺口 |
| [Issue #6771](https://github.com/nearai/ironclaw/issues/6771) | 稳定 Reborn Playwright 运行时与 served-API 覆盖 | 修复 `legacy-runtime` 与 `served-api-routes` 夜间矩阵抖动 |

### 推进中的关键 PR（OPEN）
- [PR #6936](https://github.com/nearai/ironclaw/pull/6936)（**WS0 第 4 项**）：基线 + 仅缩异常 ratchet，为目标架构重构装上"度量闸门"，无行为改动。
- [PR #6935](https://github.com/nearai/ironclaw/pull/6935)：修复 libSQL 因事务回滚导致连接租约泄漏与历史迁移竞态引起的 503。
- [PR #6937](https://github.com/nearai/ironclaw/pull/6937) + [PR #6938](https://github.com/nearai/ironclaw/pull/6938)（Epic #6565 切片 0）：修复技能关键词"裸子串误命中"评分缺陷，并让激活拒绝路径明示原因。
- [PR #6906](https://github.com/nearai/ironclaw/pull/6906)：移除 Projects 概览页伪造的 spend / gates / failures / threads / activity / health 指标，仅渲染 API 后端真实字段。
- [PR #6917](https://github.com/nearai/ironclaw/pull/6917)：将 `/workspace/...` 链接接入鉴权附件预览，解决助手消息中工作区链接点击无反应。
- [PR #6933](https://github.com/nearai/ironclaw/pull/6933)（叠加 #6780）：IronHub 安装审批绑定版本化 SHA-256 包摘要，杜绝"目录改了但产物没改"的中间状态。
- [PR #6855](https://github.com/nearai/ironclaw/pull/6855)：将托管压缩改造为确定性机密脱敏边界，`Redact/Warn/Block` 命中后用 `[REDACTED]` 替换而非直接失败。
- [PR #6889](https://github.com/nearai/ironclaw/pull/6889)：CI 强制 WS11 覆盖率闸门与关键变异测试 gate，固定 85.11% Reborn 聚合覆盖率。
- [PR #6930](https://github.com/nearai/ironclaw/pull/6930)：扩展注册托管 MCP 服务器，自动探测 no-auth / bearer / 标准 OAuth。

**整体评价**：项目工程化指标（依赖治理、架构北辰星、CI 覆盖率闸门、合约去通配符）在本日同步推进，向 v1 发布的"可验证、可证伪、可证伪之依据"路径稳步迈进。

---

## 4. 社区热点

| 工单 | 评论 | 👍 | 主题 |
|------|------|----|------|
| [#6284](https://github.com/nearai/ironclaw/issues/6284) **Error-recoverability endgame** | **15** | 0 | Epic：模型必须能恢复 100% 可见错误，要求 (a) 运行不中断 (b) 模型可见 (c) 包含根因与成功条件 (d) 模型有行动机会 (e) 非成功永不被上报 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) **Hermetic capability & journey 测试平台** | 4 | 0 | Epic：让每个支持能力与关键用户旅程都拥有确定性、有意义的覆盖 |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) **可靠的技能发现、路由与激活** | 1 | 0 | Epic：技能系统可靠性，#6937/#6938 已在路上 |

**诉求解读**：
- #6284 的 15 条评论集中在"错误可见性契约"——社区认为当前 mid-run error 在传递路径上信息损耗严重，要求**统一的、可被验证的恢复语义**，这与 #6900（跨用户记忆泄漏）共同指向"运行时的可观察性 + 不可绕过性"两大底座。
- #6524 反映了**评测真空**：当前 recorded-fixture 与 Emulate 覆盖了所有已抓取的模型轨迹，但仍无法机械回答"每条能力是否都有覆盖"。
- #6565 是 SkillsBench/SkillLearnBench 基准（PR #6745 引用）在 IronClaw 上的具体落地切片。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0（建议立即修复）
| Issue | 现象 | 是否已有 fix PR |
|-------|------|------------------|
| [#6900](https://github.com/nearai/ironclaw/issues/6900) **跨用户记忆泄漏**：共享通道默认 subject 把所有用户折叠到 operator 记忆命名空间 | 共享 Slack 频道等多人类会话中，记忆读写未按真实行为用户隔离，存在跨用户信息泄露 | ❌ 无 |

### 🟠 P2 / v1 发布清单
| Issue | 现象 | 是否已有 fix PR |
|-------|------|------------------|
| [#6752](https://github.com/nearai/ironclaw/issues/6752) 实例删除报错，重登后 "Loading your agents..." 卡死 | `calm-horizon` 实例删除失败 + 重登加载态悬挂 | ❌ 无 |
| [#6834](https://github.com/nearai/ironclaw/issues/6834) Slack 集成在 near.foundation 账户设置失败 | OAuth/连接流程未完成，扩展处于不可用状态 | ❌ 无 |
| [#6940](https://github.com/nearai/ironclaw/issues/6940) **IronHub 所有技能 CTA 返回 404** | 每个技能的 CTA 都落到 404，平台功能整体性故障 | ❌ 无 |
| [#6866](https://github.com/nearai/ironclaw/issues/6866) **共享主目录**：所有用户能看到彼此的工作区 | 隐私缺陷，所有用户可见他人工作区 | ❌ 无 |
| [#6916](https://github.com/nearai/ironclaw/issues/6916) Markdown 文件在预览模态框渲染为纯文本 | `.md`/`.mdx` 文件以 `<pre>` 显示源文本，未走 markdown 渲染 | ❌ 无 |
| [#6915](https://github.com/nearai/ironclaw/issues/6915) 助手消息中的工作区文件链接点击无效 | 链接可见但点击不打开 | ✅ [#6917](https://github.com/nearai/ironclaw/pull/6917) |
| [#6904](https://github.com/nearai/ironclaw/issues/6904) Logs 页无法加载超过最新一页 | `nextCursor` 已返回但前端未消费 | ❌ 无 |
| [#6903](https://github.com/nearai/ironclaw/issues/6903) Admin 用户列表无法翻页 | 后端初始限 100 条 + `next_cursor`，前端未实现 | ❌ 无 |
| [#6902](https://github.com/nearai/ironclaw/issues/6902) **Projects 页展示伪造指标** | 渲染了 `$0.00 spend`、`0 pending gates` 等后端未提供字段 | ✅ [#6906](https://github.com/nearai/ironclaw/pull/6906) |

### 已修复的回归
- [PR #6935](https://github.com/nearai/ironclaw/pull/6935)：libSQL 因 transcript-index 迁移与并发消息更新竞态导致的 503（修复已落地）。

**稳定性评估**：UI/UX 一致性问题（分页、Markdown 渲染、链接跳转）批量涌现，**建议 v1 发布前专门做一轮 UI 收口冲刺**；安全相关的 P0/P2 须在 v1 前完成。

---

## 6. 功能请求与路线图信号

### 用户提出的新功能
| Issue | 描述 | 与现有 PR 的对应 |
|-------|------|------------------|
| [#6939](https://github.com/nearai/ironclaw/issues/6939) **从 Hermes/Openclaw 迁移代理设置与记忆的工具** | 降低老用户切换成本，避免"白纸重来" | ❌ 尚无对应 PR，但与 #6866（共享主目录）共同提示"用户隔离 + 数据迁移"是 v1 关键卖点 |
| [#6905](https://github.com/nearai/ironclaw/issues/6905) **使用 keyless cosign 签名发布产物** | 便于 AUR 等第三方包验证 | ❌ 尚无对应 PR，与 #6900/#6866 安全主题对齐 |
| [#6910](https://github.com/nearai/ironclaw/issues/6910) 为设置项引入共享 Switch 组件 | Appearance/Tools 两个设置页存在样式不一致 | ❌ 尚无对应 PR |
| [#6909](https://github.com/nearai/ironclaw/issues/6909) Admin 删除流程迁移到共享 ConfirmDialog | 删除确认/加载/错误/键盘焦点体验分裂 | ❌ 尚无对应 PR |

### 路线图信号判断
- **很可能进入 v1**：#6939（迁移工具）—— 用户切换成本是发布期留存的关键卡点；#6905（cosign）—— 与 AUR 等下游打包方已存在镜像，安全签名属于"必须做"。
- **下一小版本进入**：#6910 / #6909（UI 一致性）—— 工程量小但收益高。
- **架构层 Epic（#3773、#6565、#6284、#6524）**：构成 v1→v1.x 的中长期演进路线，多个 PR 已铺路。

---

## 7. 用户反馈摘要

来自 Slack/邮件渠道的真实反馈：

1. **隐私与隔离缺失**（tobias.holenstein）："主目录所有用户共享，能看到别人的 workspace。"——直击 #6866，提示**沙箱与命名空间隔离**必须作为 v1 底线。
2. **平台级 404**（用户报告）："IronHub 主技能 CTA 在所有技能上都跳 404。"——#6940 表明 IronHub 的注册/发现链路存在系统性缺陷，与 PR #6780/#6933 的"指纹绑定"修复方向一致。
3. **迁移阻力**（多用户）："已有 Hermes/Openclaw 用户不愿从零开始。"——#6939，社区在用脚投票。
4. **第三方集成失败**（near.foundation 账户）："Slack 设置流程未完成，扩展不可用。"——#6834，可能是 OAuth 回调或 scope 协商问题。
5. **工作区文件操作断裂**（用户）：助手生成的文件链接"看起来可点，但点了不打开"——#6915/#6916，提示前端 Markdown 渲染与附件预览管线需统一。

**整体满意度信号**：偏负面。今日新开 Issue 中 5/33 直接标记为安全、隐私或全面性故障（#6866、#6900、#6940、#6916、#6915），表明 v1 发布前还有用户信任层面的硬仗要打。

---

## 8. 待处理积压

| 工单 | 创建 | 状态 | 风险 |
|------|------|------|------|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) **目标 crate 架构 Epic** | 2026-05-19 | OPEN | 已拆分为 #6919-#6927 共 10 个 WS，但父 Epic 本身长期挂着未关闭，建议在 PR #6918 决策记录定稿后正式关闭父级 |
| [#6524](https://github.com/nearai/ironclaw/issues/6524) Hermetic 评测平台 Epic | 2026-07-22 | OPEN, 4 评论 | 与 #6284 共同构成"可证伪性"双引擎，建议指定 owner |
| [#6565](https://github.com/nearai/ironclaw/issues/6565) Skills Epic | 2026-07-23 | OPEN | #6937/#6938 已动，但 Epic 范围更广，需要里程碑梳理 |
| [#6284](https://github.com/nearai/ironclaw/issues/6284) Error-recoverability Epic | 2026-07-19 | OPEN, 15 评论 | 评论最密集的 Epic，建议作者 @serrrfirat 给出阶段路线图 |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) chore: release（带 breaking change） | 2026-07-03 | OPEN | 含 `ironclaw_common` 与 `ironclaw_skills` 的破坏性变更，建议标注合并窗口与下游迁移指南 |
| [#6780](https://github.com/nearai/ironclaw/pull/6780) Re-port of #5409 深度链接安装网关 | 2026-07-28 | OPEN | 与 #6940（CTA 404）修复方向直接相关，建议优先评审 |
| [#6745](https://github.com/nearai/ironclaw/pull/6745) 让已安装/代理自创技能可被选择、安装、完成 | 2026-07-28 | OPEN | SkillsBench 实证驱动，跨 PR #6937/#6938 协同 |
| [#6364](https://github.com/nearai/ironclaw/pull/6364) 跨通道附件流 | 2026-07-20 | OPEN | XL size，是 WebUI/Telegram/Slack 通用附件契约的统一入口，触及面广需更多 reviewer |

**维护者提醒**：
- v1-launch-checklist 标签下已出现 **CTA 全 404、用户隔离缺失、Slack 集成失败** 三类硬故障，建议在合并 release PR #5598 前优先解决。
- Epic #6284 / #6524 / #6565 / #3773 的 owner 尚不清晰，建议在评论中明确指派与里程碑。

---

*报告基于 2026-07-30 至 2026-07-31 的 GitHub 数据生成，统计窗口为 24 小时。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-07-31

> 数据来源：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> 报告周期：2026-07-30 ~ 2026-07-31（UTC）

---

## 一、今日速览

LobsterAI 今日继续保持**高强度迭代节奏**：过去 24 小时内共有 **10 个 PR 更新**（8 个已合并/关闭、2 个长期处于 OPEN 状态的待处理），并伴随 1 个正式版本（`2026.7.29`）发布。当日 Issues 活跃数为 0，社区问答/缺陷反馈通道较为安静，但 PR 端的提交密度反映出核心维护团队（`liuzhq1986`、`fisherdaddy`、`btc69m979y-dotcom`）正集中推进 **协作（cowork）能力升级、企业账号隔离、以及日常签到与活动面板的体验增强**。整体健康度评估为 **活跃、面向 0.7.x 系列稳步演进**。

---

## 二、版本发布

### 🦞 LobsterAI 2026.7.29

- **发布日期**：2026-07-29
- **关键变更**：
  1. **feat(cowork)**: 侧边聊天面板新增"选中文本标签"能力（[#2405](https://github.com/netease-youdao/LobsterAI/pull/2405)）
  2. **feat**: 模型侧新增对 **Kimi K3** 的支持（[#2381](https://github.com/netease-youdao/LobsterAI/pull/2381)）
  3. **fix(auth)**: 加固会话生命周期与 Token 刷新机制
- **破坏性变更**：未在 release notes 中明确披露，但 `fix(auth)` 涉及 Token 刷新逻辑，企业集成方在升级前建议先在测试环境验证 SSO/Token 续签链路。
- **迁移注意**：随版本发布已经配套发布 `2026.7.29` 安装包（NSIS），如启用了自动更新，Windows 平台可平滑过渡。

> 📦 完整 changelog：见 [Release 2026.7.29](https://github.com/netease-youdao/LobsterAI/releases)（以仓库实际发布页面为准）

---

## 三、项目进展（今日已合并/关闭的 PR）

| 类别 | PR | 标题 | 价值评估 |
|---|---|---|---|
| 🌟 核心功能 | [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) | `feat(cowork)`: 新增隔离的 `/btw` 侧聊天面板 | **高** —— 引入可拖拽、八向缩放、可打断的浮动侧聊，并与主对话历史隔离，路由走 OpenClaw 工具流，是协作场景的重要扩展 |
| 🌟 核心功能 | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) | `feat(activity)`: 新增桌面端原生"每日签到" | **高** —— 服务端驱动的签到活动，未登录用户走登录引导，已登录用户领取积分且不向渲染层泄露 token，安全性佳 |
| 🌟 核心功能 | [#2411](https://github.com/netease-youdao/LobsterAI/pull/2411) | `feat(sidebar)`: 侧边栏签到 + 横幅轮播 | **高** —— 统一侧边栏轮播组件，单元素自动隐藏导航控件，banner 组支持持久化关闭 |
| 🏢 企业级 | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) | `feat(enterprise)`: 账号维度的鉴权与服务隔离 | **极高** —— 隔离鉴权、媒体、待办、分享、部署等状态，防止异步响应串号，强化企业 entitlement 与失败回滚，是面向多账号/多租户的关键基建 |
| 🐛 安全修复 | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | `fix(email)`: 防止附件路径穿越 | **极高** —— 净化附件文件名、强制下载目录边界、跨平台安全测试，强烈建议所有用户升级 |
| 🐛 稳定性 | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | `fix(nsis)`: 安装器每轮轮询重新 kill 残留进程 | **中-高** —— 修复 Windows 安装器关闭门控在某些时序下漏杀进程/被中途复活进程的边界问题 |
| 🐛 稳定性 | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | `fix(cowork)`: 改进侧聊输入处理 | **中** —— 累计选中文本片段、解除产品级问题长度限制、保留有界上下文与传输安全校验 |
| 🎨 体验统一 | [#2410](https://github.com/netease-youdao/LobsterAI/pull/2410) | `style(sites)`: 页面布局对齐管理视图 | **低-中** —— Sites 页与 Skills/MCP 风格统一，降低用户认知切换成本 |

> **推进度评估**：项目在 **协作（cowork）+ 活动运营（activity/sign-in）+ 企业账号隔离** 三大方向上同时取得实质进展，迭代紧凑且方向明确，预计 `0.7.x` 系列将很快进入 RC 阶段。

---

## 四、社区热点

⚠️ **今日 Issues 活跃数为 0**（无新开/无评论），社区问答/反馈通道较安静。

**最值得关注的 PR（综合影响面、跨模块覆盖度）**：
- 🔥 [#2409 feat(enterprise): isolate account-scoped auth and service flows](https://github.com/netease-youdao/LobsterAI/pull/2409) —— 一次性横跨 renderer / docs / main / openclaw / cowork / artifacts 六大模块，是本批 PR 中最重磅的工程化推进。
- 🔥 [#2397 feat(cowork): add isolated /btw side chat](https://github.com/netease-youdao/LobsterAI/pull/2397) —— `cowork` 侧聊的产品形态首次成型，标志着 AI 助手与"伴随式问答"使用模式的进一步融合。

**诉求分析**：从 PR 集中度看，社区/产品侧当前最强烈的诉求集中在三件事：
1. **让 AI 真正"陪着"工作**（侧聊、可选中标签、隔离上下文）；
2. **让多账号/多租户不再串号**（鉴权/媒体/分享的强隔离）；
3. **让产品更"上瘾"**（每日签到、横幅轮播、活动面板）。

---

## 五、Bug 与稳定性

| 严重度 | 描述 | 对应 PR | 状态 |
|---|---|---|---|
| 🔴 **高（安全）** | 邮件附件存在路径穿越风险（attachment path traversal） | [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | ✅ 已修复（已合并） |
| 🟠 **中-高** | Windows NSIS 安装器在关闭门控轮询中存在"漏杀/复活"边界 | [#2412](https://github.com/netease-youdao/LobsterAI/pull/2412) | ✅ 已修复（已关闭） |
| 🟡 **中** | 协作侧聊输入存在长度限制过严、上下文累积不友好 | [#2406](https://github.com/netease-youdao/LobsterAI/pull/2406) | ✅ 已修复（已关闭） |

> 上述三项均在 24 小时内闭环，未发现新的未修复 P0/P1 报告，项目稳定度处于**良好**水平。

---

## 六、功能请求与路线图信号

> ⚠️ 今日无新功能请求类 Issue 流入，信号主要来自**已存在的长尾 PR**。

- **会话"标记为未读"** —— [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) 由 `fhraiwxr` 自 2026-04-01 提出，至今已 **超过 3 个月未合并**，标签为 `stale`。该需求契合 `cowork` 多会话切换的真实痛点，建议在下一轮协作体验更新中优先纳入。
- **AgentCreateModal 支持 Esc 关闭 + 表单重置** —— [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) 由 `choyuenga` 提出（2026-04-01），亦为 `stale`。这是非常明确的 UX 一致性问题，改造量小、收益高。
- **Kimi K3 模型支持** —— 已在 2026.7.29 版本落地（[#2381](https://github.com/netease-youdao/LobsterAI/pull/2381)），说明社区/产品对国产模型矩阵的扩展诉求强烈，后续可关注 DeepSeek / Qwen / Doubao 系列的对齐节奏。
- **协作侧聊（/btw 模式）** —— [#2397](https://github.com/netease-youdao/LobsterAI/pull/2397) 已合并，预示下一版本将出现"伴随式 AI"作为差异化的产品力。

---

## 七、用户反馈摘要

由于今日无活跃 Issues、且 PR 数据中无评论/反应数可统计（`comments: undefined`、`👍: 0`），**无法从公开评论中直接提取一手用户痛点**。建议：

1. 在 PR 模板中强制要求填写"用户场景/Motivation"段落，便于回溯；
2. 维护者可主动在 `stale` 标签 PR 下与贡献者互动（[#1228](https://github.com/netease-youdao/LobsterAI/pull/1228)、[#1231](https://github.com/netease-youdao/LobsterAI/pull/1231)），以激活社区参与。

---

## 八、待处理积压（重点提醒维护者）

| 类型 | 编号 | 标题 | 作者 | 距今 | 状态 |
|---|---|---|---|---|---|
| 🟡 PR | [#1228](https://github.com/netease-youdao/LobsterAI/pull/1228) | feat(cowork): 新增会话「标记为未读」功能 | fhraiwxr | ~121 天 | OPEN / stale |
| 🟡 PR | [#1231](https://github.com/netease-youdao/LobsterAI/pull/1231) | fix(agent): AgentCreateModal 支持 Escape 键关闭 | choyuenga | ~121 天 | OPEN / stale |

> 📌 **维护者建议**：两笔 PR 均超过 3 个月未更新且贴有 `stale` 标签。建议：
> - 若设计已变更，请及时回复并礼貌 close；
> - 若仍有效，评估是否能合入 `0.7.x` 后续小版本（影响面均较小），以维护社区贡献者积极性。

---

### 📊 今日健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 10 个 PR 更新、覆盖 6+ 模块 |
| 安全/稳定性 | ⭐⭐⭐⭐⭐ | 关键路径穿越与安装器时序问题均在当日修复 |
| 社区参与 | ⭐⭐ | Issues 端冷清，长尾 PR 已 `stale` |
| 版本可预期性 | ⭐⭐⭐⭐ | `2026.7.29` 已发布，节奏清晰 |
| 路线图清晰度 | ⭐⭐⭐⭐ | 协作 + 企业隔离 + 活动运营 三线齐进 |

**总评：项目处于**高强度产品迭代期**，工程与产品力持续在线，但社区侧的"打开度"和长尾 PR 处理效率有提升空间。**

---

*报告生成于 2026-07-31 | 数据口径：GitHub REST API 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**: 2026-07-31
**项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)
**报告范围**: 过去 24 小时

---

## 1. 今日速览

Moltis 项目今日整体活跃度中等偏上，共记录到 2 条新 Issue 和 4 条 PR 更新，其中 3 条 PR 仍待合并、1 条已关闭。**安全相关议题成为今日焦点**：社区既报告了一个涉及 CWE-306 的 Vault 鉴权缺失漏洞（#1177），也有维护者本人在 PR #1170 中主动收紧了通道特权工具的访问控制。基础设施层面，PR #1174 推进了横跨后端、Langfuse v4 与 OTLP 的可观测性栈，体量较大但仍处于待审状态。今日无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发版信息未在数据中体现，请关注仓库 [Releases 页](https://github.com/moltis-org/moltis/releases) 获取最新动态。

---

## 3. 项目进展

### 已关闭 PR

- **[#1166](https://github.com/moltis-org/moltis/pull/1166) — feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit**（作者：penso，2026-07-31 关闭）
  - 为 Slack 通道补齐了完整的"应答生命周期"能力：每条消息的确认反应、阶段化进度、断线重连监督以及 Block Kit 交互组件。
  - 该 PR 基于已合并的 #1165，进一步解决了 Slack bot 无法表达 typing 指示的固有限制，使进度信号在队列、取消、重试、回调风暴和投递失败等场景下都保持安全。
  - **意义**：Slack 通道从"能用"走向"生产可用"，是该通道的一次显著成熟化。

### 持续推进中的 PR

- **[#1174](https://github.com/moltis-org/moltis/pull/1174) — Add instrumentation and feedback collection infrastructure**（penso，2026-07-31 仍 OPEN）
  - 引入后端中立的 agent 插桩、Langfuse v4 导出、可运营的 OTLP 后端以及终端用户反应反馈。
  - 记录不可变的"完成态"轮次与观测，支持流式/非流式一致性、provider failover 归因、缓存感知的 token 用量、推理内容等。
  - **意义**：是 Moltis 可观测性体系的奠基性 PR，落地后将极大改善生产环境的可调试性与成本分析能力。

- **[#1170](https://github.com/moltis-org/moltis/pull/1170) — fix(channels): gate /sh and privileged tools behind a per-account operators list**（penso，2026-07-31 仍 OPEN）
  - 将"通道访问"与"特权工具调用"解耦，引入每账户显式 `operators` 名单。
  - 该边界将在命令、回调、队列重放、聊天执行、外部路由等路径上一致生效。

- **[#1176](https://github.com/moltis-org/moltis/pull/1176) — feat(web): add Markdown copy and session export**（Jonesxq，2026-07-30 新开）
  - 复制助手回复时保留原始 Markdown（包含实时与持久化回复，且不携带模型元数据）。
  - 新增会话级"另存为 Markdown"动作，分页加载完整历史并导出用户/助手文本与图片引用。
  - **意义**：增强用户体验与数据可移植性，社区贡献 PR，体现项目可被外部参与。

**整体评估**：今日净推进 1 个 PR（#1166 关闭），同时有 3 个实质性 PR 进入待合并队列，项目处于稳健的工程化推进阶段。

---

## 4. 社区热点

今日 Issue 评论数与反应数都较低（均为 0），**真正"热议"的并不存在**，但讨论价值最高的当属以下两条：

- **[#1178](https://github.com/moltis-org/moltis/issues/1178) — [Feature]: Let agents send Telegram inline buttons and receive structured callback responses**（作者：eddyvlad）
  - 诉求：让 agent 能够在 Telegram 上发送 inline buttons 并以结构化形式接收回调。
  - **背景分析**：这并非首次出现的通用 inline button 请求，作者明确指出在搜索后未发现已有同类增强请求，说明该项目历史上对此类交互能力支持有限。一旦实现，将显著提升 Telegram 通道在交互式工作流（如审批、表单、菜单选择）中的可用性。

- **[#1177](https://github.com/moltis-org/moltis/issues/1177) — [Bug]: Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306)**（作者：Practice100101）
  - **严重性高**（涉及安全漏洞 CWE-306，关键操作缺少认证），是今日社区贡献中优先级最高的内容。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **高（安全）** | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault 解锁/恢复端点缺少认证（CWE-306），可能导致敏感密钥材料的未授权访问 | ❌ 尚无明确关联 fix PR；维护者本人昨日的 #1170 涉及通道特权边界但未直接覆盖 Vault 端点 |
| 🟡 中（间接相关） | [#1170](https://github.com/moltis-org/moltis/pull/1170) | 通道 senders 通过访问白名单即可调用 `/sh` 与宿主工具（属"修复"性质 PR，待合并） | ✅ 已有 fix PR（待合并） |

**建议**：维护者应尽快对 #1177 进行 triage，确认受影响版本范围，并准备安全公告与修复 PR；这是典型的应优先于功能 PR 处理的安全缺陷。

---

## 6. 功能请求与路线图信号

- **[#1178 — Telegram inline buttons + 结构化回调](https://github.com/moltis-org/moltis/issues/1178)**
  - **纳入下一版本的概率：中高**。该能力与项目已有的多通道策略一致，且 Slack 通道（#1166）已先行扩展了交互能力，Telegram 跟进在方向上较为自然。短板在于目前没有现成 PR，需要有人牵头实现。

- **[#1176 — Markdown 复制与会话导出](https://github.com/moltis-org/moltis/pull/1176)**（已存在 PR）
  - 已被外部贡献者（Jonesxq）实现，处于待合并状态，**很可能随下次发版上线**。功能小巧、价值清晰，审查与合并成本低。

- **[#1174 — 可观测性/反馈基础设施](https://github.com/moltis-org/moltis/pull/1174)**
  - 体量大、影响面广，**更可能作为单独的 minor 或 major 版本发布**。该 PR 是后续所有基于 trace/feedback 的优化（如自动评估、成本面板、用户反馈回路）的前提，建议独立里程碑跟踪。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 评论数均为 0，**直接的文字反馈信号较弱**，但从议题摘要可提炼出以下场景与痛点：

- **多通道交互能力不均衡**：Slack 通道交互能力快速补齐（#1166、#1165），而 Telegram 仍缺乏 inline button 等结构化交互（#1178）。反映出用户希望在所有通道获得对等的交互体验。
- **数据可移植性与回溯需求**：#1176 的会话级 Markdown 导出，暗示用户在长期使用中希望"带着数据走"——既包括原始内容保真（复制时不丢失 Markdown 格式），也包括完整历史的离线归档。
- **安全模型期待**：#1177 与 #1170 共同指向一个用户隐含期待——**"被允许访问通道" ≠ "被允许执行特权操作"**。当前的访问控制模型被认为过于宽泛，社区期待更细粒度的权限分层。

---

## 8. 待处理积压提醒

| 类型 | 编号 | 标题 | 状态 | 备注 |
|---|---|---|---|---|
| 🔴 安全 Bug | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault Unlock/Recovery 缺少认证 | OPEN，无响应 | 创建于 2026-07-30，建议 24–48h 内 triage |
| 🟠 大型基础设施 PR | [#1174](https://github.com/moltis-org/moltis/pull/1174) | 可观测性与反馈基础设施 | OPEN，待审查 | 创建于 2026-07-27，已更新 4 天，跨度较大 |
| 🟡 安全相关 PR | [#1170](https://github.com/moltis-org/moltis/pull/1170) | 通道特权工具按 operators 名单门控 | OPEN，待合并 | 与 #1177 同方向，建议尽早合并以快速缓解部分风险 |
| 🟢 UX PR | [#1176](https://github.com/moltis-org/moltis/pull/1176) | Markdown 复制与会话导出 | OPEN，外部贡献 | 合并门槛低，建议优先合并以鼓励外部贡献 |
| 🔵 功能请求 | [#1178](https://github.com/moltis-org/moltis/issues/1178) | Telegram inline buttons | OPEN，无响应 | 需维护者确认方向并标记 enhancement/roadmap |

**维护者行动建议**：
1. **优先级 1**：对 #1177 进行安全评估并准备 patch。
2. **优先级 2**：合并 #1170 以收紧权限边界，缓解 #1177 类似风险。
3. **优先级 3**：合并低门槛的 #1176，提升外部贡献者积极性。
4. **优先级 4**：对 #1174 指定 reviewer 推进大规模基础设施 PR。

---

*本报告由 GitHub 公开数据自动汇总生成，所有链接指向 moltis-org/moltis 仓库。如需更细粒度的历史趋势分析（如近 30 天 burn-up、贡献者活跃度等），可在后续日报中扩展。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-07-31**

---

## 1. 今日速览

CoPaw 今日延续了高强度的开发节奏，过去 24 小时内共更新 **24 个 Issues** 与 **48 个 PRs**，社区活跃度维持在较高水平。Issues 端以中文用户体验类反馈为主（占比超过 70%），反映桌面端 v2.0.1 在国际化、本地化与高负载场景下仍有较多待打磨之处；PR 端则呈现出**集中修复一批关键 Bug** 的态势（5 个 PR 在同日合并/关闭），涉及会话审批、Mission 命令、Matrix E2EE、沙箱治理与 Creator 插件等核心模块。**整体评估：项目处于 v2.0 稳定化阶段，社区反馈通道畅通，技术债正在被有序清理。**

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前线上稳定版仍为 **v2.0.1**，开发者合并的修复预计将进入下一个小版本（v2.0.2 或 v2.1.0）。

---

## 3. 项目进展

今日共有 **25 个 PR 被合并/关闭**，其中 5 个具有显著意义：

| PR | 主题 | 价值 |
|---|---|---|
| [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562) | 修复 `/mission` TypeError + 子会话审批继承 + AC 相关 | 一次解决 3 个 Bug，Mission 模式与多 Agent 协同可用性显著提升 |
| [#6424](https://github.com/agentscope-ai/QwenPaw/pull/6424) | **Computer Use：Windows 与 macOS 原生桌面 GUI 自动化** | QwenPaw 打通"操作系统级 Agent"能力，是 v2.1 的旗舰特性 |
| [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486) | Matrix E2EE Python 3.12 兼容 | 解决长期遗留的端到端加密失效问题，恢复 Matrix 频道信任 |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | 沙箱不可用时的 Fallback 动作可配置 | 提升企业部署中沙箱策略的可控性 |
| [#6556](https://github.com/agentscope-ai/QwenPaw/pull/6556) | Creator 插件：创作检查点、首页改版、媒体恢复、导入导出 | Creator 模块走向可生产化 |

**综合评估：** 项目在"Agent 能力扩展"（Computer Use、Creator）与"稳定性加固"（Mission、Matrix、沙箱、会话审批）两条主线同步推进，v2.1 形态逐渐清晰。

---

## 4. 社区热点

### 🔥 最高关注 Issues（评论数 Top 3）

1. **[#6307 — v2.0 每次回复 ~2s 固定开销](https://github.com/agentscope-ai/QwenPaw/issues/6307)**（7 条评论）
   - 用户从 v1.1.12.post2 升级到 v2.0.0.post3 后，每次对话回复额外增加约 2 秒延迟，归因于请求路径的架构改动。
   - 这是 v2.0 升级最受关注的性能回归问题，**关注度高但尚无 fix PR 提交**。

2. **[#6524 — MCP 后端重启后客户端无法自动恢复](https://github.com/agentscope-ai/QwenPaw/issues/6524)**（5 条评论）
   - `streamable_http` MCP Server 重启后，QwenPaw 仍复用旧 `mcp-session-id`，需手动 `list mcp` 才能重连。
   - 已有对应修复 PR [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586)（待合并）。

3. **[#6563 — `real-behavior-proof` workflow 阻塞所有 fork PR](https://github.com/agentscope-ai/QwenPaw/issues/6563)**（4 条评论，已关闭）
   - 集成权限不足导致外部贡献者 PR 全部无法通过 CI，**已关闭**，应已有修复跟进。

### 📈 讨论趋势分析

- **桌面客户端体验**类 Issue 占比骤增（多文件上传、文件名 CJK、字符计数动画、托盘图标命名等），说明 v2.0.1 桌面端用户群已显著扩大。
- **MCP 生态相关问题**集中爆发（工具名校验、会话恢复），表明 MCP 已成为 QwenPaw 用户连接外部工具的主要方式。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（功能不可用 / 数据丢失 / 安全）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) | `execute_shell_command` 大量输出导致 **UI 主线程冻结**，用户只能强杀进程 | ❌ 无 |
| [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) | MCP 工具名以 `-` 开头，Kimi 等严格 LLM API 返回 400（**直接阻断**该 MCP 在 Kimi 下使用） | ✅ [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)（待合并） |
| [#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) | `spawn_subagent` single-task mode **不可用**（`batch` 被错误暴露为 required） | ❌ 无 |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP 客户端无法自动恢复会话 | ✅ [#6586](https://github.com/agentscope-ai/QwenPaw/pull/6586) |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream/记忆压缩导致**早晨操作永久丢失** | ❌ 无（架构层问题） |
| [#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565) | 多行命令换行被转为空格（**破坏语义**）+ Linux PIPE 后台进程卡住 | ❌ 无 |

### 🟡 中严重度（影响体验 / 工作流受阻）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 每回复 +2s 固定延迟 | ❌ 无 |
| [#6558](https://github.com/agentscope-ai/QwenPaw/issues/6558) | 多会话切换数据丢失 / 指令漂移 / 回复从头渲染 | ❌ 无 |
| [#6559](https://github.com/agentscope-ai/QwenPaw/issues/6559) | 自动 fork 会话**无父子分组**，会话列表混乱 | ❌ 无 |
| [#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585) | 加载提示字符计数不停跳动，"闪眼" | ❌ 无 |

### 🟢 已修复（今日合并/关闭）

- [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) — API 连接测试失败 → 已关闭
- [#6533](https://github.com/agentscope-ai/QwenPaw/issues/6533) — `/mission` TypeError → ✅ [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562)
- [#6506](https://github.com/agentscope-ai/QwenPaw/issues/6506) — 子会话审批级别不继承 → ✅ [#6562](https://github.com/agentscope-ai/QwenPaw/pull/6562)
- [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) — Matrix E2EE 不可用 → ✅ [#6486](https://github.com/agentscope-ai/QwenPaw/pull/6486)
- [#6578](https://github.com/agentscope-ai/QwenPaw/issues/6578) — Cron `dispatch.mode: "final"` 不生效 → 已关闭
- [#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563) — Fork PR CI 阻塞 → 已关闭

---

## 6. 功能请求与路线图信号

按可行性 / 优先级排列：

| 需求 | 来源 | 状态 / 信号 |
|---|---|---|
| **C 端"快速唤起"浮动输入框**（豆包/Raycast 式） | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 高需求场景明确（macOS `Option+Space`），桌面端产品方向的关键差异化 |
| **MCP 工具名校验**（避免 `-` 前缀触发 400） | [#6557](https://github.com/agentscope-ai/QwenPaw/issues/6557) | ✅ 已有 PR [#6561](https://github.com/agentscope-ai/QwenPaw/pull/6561)，下版本有望落地 |
| **中文文件名保留**（避免 UUID 替换） | [#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453) | ✅ 已有 2 个竞争 PR [#6492](https://github.com/agentscope-ai/QwenPaw/pull/6492) / [#6567](https://github.com/agentscope-ai/QwenPaw/pull/6567) |
| **`execute_shell_command` 大输出流式读取 / 写文件** | [#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512) | 与 [#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589) 合并为"输出治理"主题，**建议下版本重点** |
| **桌面应用名简化**（去掉 "Desktop" 后缀） | [#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587) | 极低成本，建议快速合并 |
| **Chat UI 基础交互**（复制、ESC 停止、撤销、滚动性能、上下文交接） | [#6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | **系统性 UI 债务**，建议列入 v2.1 |
| **工作流 / 强逻辑流程引擎**（类似 Dify） | [#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571) | 企业场景关键诉求，**重大架构方向**，路线图级别讨论 |
| **删除 `/new` 命令建议**（侧栏已有入口） | [#6429](https://github.com/agentscope-ai/QwenPaw/pull/6429) | ✅ PR 待合并 |

---

## 7. 用户反馈摘要

来自 Issue 评论与正文，提取的真实声音：

### 👍 满意
- **[#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)**："非常不错的项目"——用户对 v2.0.1 整体评价正面。
- **[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** 用户**主动留下 v1.1.12 的回退路径**，说明社区用户具有较强工程能力，反馈质量高。

### 👎 痛点
- **桌面端 UX 粗糙感**（多 Issue 集中爆发）：
  - 文件名 CJK 转乱码（[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)）
  - 多文件拖入挤在一行（[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)）
  - 字符计数动态跳动"闪眼"（[#6585](https://github.com/agentscope-ai/QwenPaw/issues/6585)）
  - "未检测到多模态能力"提示粗暴（[#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452)）
  - 应用名"QwenPaw Desktop"后缀"多此一举"（[#6587](https://github.com/agentscope-ai/QwenPaw/issues/6587)）
  > 📌 **洞察：** 桌面端产品细节的"中文体验"打磨已成为用户首要诉求。

- **大输出场景的全面失控**：
  - 命令截断（[#6512](https://github.com/agentscope-ai/QwenPaw/issues/6512)）
  - UI 冻结（[#6589](https://github.com/agentscope-ai/QwenPaw/issues/6589)）
  - 多行命令被折叠（[#6565](https://github.com/agentscope-ai/QwenPaw/issues/6565)）
  > 📌 **洞察：** `execute_shell_command` 是高频工具，其输出治理已上升为**P0 级**问题。

- **企业场景表达不满**：
  - [#6571](https://github.com/agentscope-ai/QwenPaw/issues/6571)："agent 应该根据权限结果来强逻辑判断是否下一步执行，**根据 skill 做不到强制，容易引发越权行为**"——直指当前权限/流程模型的不足。

---

## 8. 待处理积压

提醒维护者关注以下**已开放较久但优先级高**的 Issue / PR：

| 编号 | 主题 | 创建日期 | 风险 |
|---|---|---|---|
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 每回复 +2s 性能回归 | 2026-07-21（10 天） | 影响所有 v2.0 用户，**应作为 v2.0.2 头号问题** |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | 重构 provider/model/路由平台（#6167） | 2026-07-21（10 天） | 巨型 PR，已开放 10 天尚未进入 Review 流程 |
| [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) | 控制台主题/皮肤模块（Task 1 draft） | 2026-07-21（10 天） | Draft 状态待维护者确认方向 |
| [#6312 / #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 品牌/外观定制长期议题 | — | 跨多 PR 的产品决策 |
| [#6555](https://github.com/agentscope-ai/QwenPaw/issues/6555) | Dream 记忆丢失早晨事件 | 2026-07-29 | 长期记忆数据完整性问题，**需架构层面回复** |

---

## 📌 维护者建议

1. **立即合并高价值 PR**：`#6561`（MCP 工具名）、`#6586`（MCP 会话恢复）、`#6492`/`#6567`（CJK 文件名）、`#6429`（移除 `/new`）——这些都是零风险且解决用户痛点的修复。
2. **本周发布 v2.0.2 候选**：打包 #6562、#6486、#6256、#6582、#6584 等已合并修复。
3. **公开回应 #6307**：性能回归涉及架构变更，需给出根因分析与修复时间表，避免社区信心流失。
4. **规划"输出治理"主题**：`execute_shell_command` 相关 3 个 Issue 建议集中解决（流式输出 + 大输出写文件 + UI 渲染优化）。
5. **回应 #6571 工作流诉求**：即使是 "currently out of scope"，也应明确方向，避免企业用户预期错位。

---

*报告基于 2026-07-31 当日 GitHub 数据生成，数据来源：[github.com/agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**日期**：2026-07-31
**仓库**：github.com/qhkm/zeptoclaw
**数据周期**：过去 24 小时

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**低位**——过去 24 小时内无新 Issue、无版本发布、仅 1 个 PR 处于待审状态。项目节奏趋缓，但当前唯一在流转的 PR #645 是一项涉及**凭据安全隔离**与**进程资源回收**的重要运行时修复，属于"低频但高价值"的技术变更。整体来看，社区互动信号微弱（0 评论、0 反应），维护响应链需重点关注此 PR 的审阅进展。

---

## 2. 版本发布

**无新版本发布**。本节略。

---

## 3. 项目进展

今日无 PR 被合并或关闭。

仅有一项 **OPEN** 状态的实质性变更仍在审阅队列中：

- **PR #645** —— [fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645)
  - 作者：qhkm
  - 状态：OPEN（待合并）
  - 创建：2026-07-23，最近更新：2026-07-30
  - 该 PR 推进了两项关键改进：
    1. **凭据隔离**：修复运行时 shell 命令继承了 ZeptoClaw 完整进程环境，导致 provider keys 及无关凭据可能泄漏到模型生成的命令中的安全隐患。
    2. **进程回收**：修复运行时超时机制丢弃 `Command::output()` future 后未能一致终止并回收子进程的问题，同时涉及 Docker 容器的相关清理。
  - **进度评估**：该项目实质性前进了一步，但因无审阅互动（0 评论、0 👍），距合入仍存在不确定性。

---

## 4. 社区热点

今日社区讨论度极低，**无 Issues 或 PR 收到评论或互动反应**。

- PR #645 当前评论数与反应数均为 0，但其内容本身涉及 AI 智能体场景下的**安全与资源管理**两大共性痛点，具备引发讨论的潜力。
- 建议维护者主动发起审阅或征求社区反馈，以激活该 PR 的讨论氛围。

---

## 5. Bug 与稳定性

今日无用户报告的 Bug Issue。但 **PR #645** 本身即为对一类**潜在安全与稳定性缺陷**的修复，可归入"已识别、修复在途"类别：

| 严重程度 | 问题描述 | 是否有 Fix PR |
|---------|---------|--------------|
| 🔴 高（安全） | 子进程继承完整环境变量，凭据可能泄漏至模型生成的命令 | ✅ PR #645（待合并） |
| 🟠 中（稳定性） | 超时后 `Command::output()` future 被丢弃，子进程未被终止与回收，存在资源泄漏及 Docker 容器残留风险 | ✅ PR #645（待合并） |

两项问题均指向**运行时资源生命周期管理**这一系统性短板，建议合并后补充回归测试用例。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issue。从 PR #645 的方向可推断项目当前路线图信号：

- **安全加固**：进程间凭据隔离成为优先项，反映项目正进入更严肃的部署场景。
- **运行时鲁棒性**：进程树回收机制是 AI Agent 长时间运行时的基础保障。
- 若 PR #645 顺利合入，下一版本（若有）预计将携带"安全 + 稳定性"双重标签。

---

## 7. 用户反馈摘要

今日 Issues 评论区为空，无可提炼的真实用户反馈。

**待观察**：项目当前公开渠道的用户声音沉寂，可能原因包括：
- 社区规模本身较小；
- 活跃用户更多在 Discord/私下渠道反馈；
- 节假日/周末效应（2026-07-31 为周五，需结合历史节奏判断）。

---

## 8. 待处理积压

⚠️ **维护者需关注的积压项**：

- **[OPEN 8 天] PR #645** — [fix(runtime): scrub subprocess secrets and reap timed-out process trees](https://github.com/qhkm/zeptoclaw/pull/645)
  - 创建于 2026-07-23，距今 8 天无审阅评论、无反应。
  - 涉及安全与稳定性双重价值，建议优先安排 Reviewer 介入，避免与下一批提交产生合并冲突。

---

## 项目健康度速判

| 维度 | 评估 |
|------|------|
| 提交活跃度 | 🟡 低（仅 1 PR） |
| 社区互动度 | 🔴 极低（0 评论） |
| 安全响应 | 🟢 有进行中的关键修复 |
| 版本节奏 | ⚪ 今日无新版本 |
| 综合 | 🟡 偏静默，但安全方向有实质性推进 |

> **建议**：维护者尽快对 PR #645 做出响应（合入、请求修改或关闭），以释放审阅积压并向社区释放活跃信号。

---
*报告生成时间：2026-07-31 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报
**报告日期：** 2026-07-31
**数据来源：** zeroclaw-labs/zeroclaw
**报告人：** AI 智能体与个人 AI 助手开源项目分析师

---

## 一、今日速览

ZeroClaw 今日仍处于高强度讨论期，过去 24 小时内共触达 14 条 Issues 与 50 条 PR，全员保持 OPEN 状态，无版本发布、无 PR 合并/关闭记录。这种"零合并、零关闭"的形态，表明维护者精力集中于设计评审与 RFC 起草阶段，而非合并分支。今日内容以 **架构 RFC、可观测性、安全加固、模型路由扩展** 四大方向为主线，其中包含一项 S0 级别的网关 Webhook 鉴权绕过问题（[#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)）及其对应的修复 PR（[#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569)）。整体社区活跃度处于高位，但合并流程明显滞后，建议关注 reviewer 调度。

---

## 二、版本发布

**今日无新版本发布。**

---

## 三、项目进展

### 3.1 已合并/关闭的重要 PR
**今日无 PR 合并或关闭。** 所有 50 条更新的 PR 仍处于待合并状态。

### 3.2 待合并高优先级 PR（按风险/影响排序）

| PR | 标题 | 风险 | 大小 | 意义 |
|---|---|---|---|---|
| [#9410](https://github.com/zeroclaw-labs/zeroclaw/pull/9410) | fix(security): default command audit logging to disabled | high | S | 默认关闭命令审计日志，属于"安全诚实性"方向；移除示例配置并修正运维文档 |
| [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) | fix(gateway): fail closed when WhatsApp Cloud/Linq webhook 不可验签 | high | – | 修补 #9565 S0 安全漏洞，让缺失 secret 时请求被阻断而非放行 |
| [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) | fix(security): 命令 allowlist 在 Unix 大小写不敏感匹配 | high | – | 修补 #9566，移除仅 Windows 才生效的大小写折叠门控 |
| [#8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937) | fix(agent): stream-hash tool args in loop_detector | high | M | 用流式哈希替代每调用深拷贝，去热路径开销 |
| [#9325](https://github.com/zeroclaw-labs/zeroclaw/pull/9325) | fix(runtime): 流式用户回合按对话而非日志载荷解读 | high | M | 修复本地小模型（如 Ollama llama3.2）把会话格式当 API 日志复读的口语污染问题 |
| [#8953](https://github.com/zeroclaw-labs/zeroclaw/pull/8953) | fix(config): dev 模板里把 Ollama 端点放进 URI 而非 api_key | medium | XS | 拆除把 URL 当密钥写的反模式，修正示例配置 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | fix(providers): 将 Nova 2 从 Bedrock prompt caching 中排除 | medium | XS | 让 Nova 2 Lite 不再因多余 `cachePoint` 字段返回 400 |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | fix(providers): 移除 compatible provider 的无条件 strip_think_tags | medium | S | 修复 MiniMax 等推理上游因内置 `<think>` 标签被错剥的回归（#8615） |
| [#9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) | chore(channels): remove the WATI channel | – | – | 移除 WATI 全栈：模块、feature、网关、迁移、CI、容器、安装器、labeler、web 代理 |
| [#9311](https://github.com/zeroclaw-labs/zeroclaw/pull/9311) | feat(config): 把悬空 `peer_groups.*.channel` 显示成结构化警告 | medium | L | 让 typo（如 `telegram.alert` vs `telegram.alerts`）不再静默禁用权限 |
| [#8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) | feat(zerocode): 在 Doctor 中展示已解析日志路径 | high | M | 合并 #8650 双任务 |
| [#8878](https://github.com/zeroclaw-labs/zeroclaw/pull/8878) | feat(providers): 收窄 per-model 视觉能力目录解析 | low | S | 模型视觉模态信息不再丢失 |
| [#9567](https://github.com/zeroclaw-labs/zeroclaw/pull/9567) | feat(channel/email): 单封邮件支持多 To/Cc/Bcc | – | – | 完成 #9506 的 CC/Reply-All 半任务 |
| [#8313](https://github.com/zeroclaw-labs/zeroclaw/pull/8313) | feat(skills): 默认紧凑注入、废弃完整模式 | high | M | 让技能上下文按需加载，降低提示词膨胀 |
| [#9211](https://github.com/zeroclaw-labs/zeroclaw/pull/9211) | ci(release): 合并 release attestations | high | M | 让 GitHub artifact attestations 成为唯一的来源证明通道 |
| [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) | feat(runtime): 受信目标工具与委托边界 | high | XL | 新增 `goal_start/objective/resume` 工具，仅在受信上下文中注册 |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | feat(plugins): 校验类型化的实例配置 | high | XL | 强约束 `config_read` 清单的 draft-2020-12 schema |
| [#9248](https://github.com/zeroclaw-labs/zeroclaw/pull/9248) | feat(eval): 仅追加运行历史 receipt | medium | XL | `[eval].history_dir` 与 `--history-dir` 选项 |
| [#9244](https://github.com/zeroclaw-labs/zeroclaw/pull/9244) | feat(eval): 隔离用例记忆种子与评分 | high | XL | 给 eval 加上结构化记忆种子与精确后置断言 |
| [#9225](https://github.com/zeroclaw-labs/zeroclaw/pull/9225) | test(eval): 从 tracker 故障播种回归套件 | low | M | 把 18 个回放用例注入 `evals/regression/` |

> **项目进度评估：** 代码侧推进显著，集中在 security/observability/eval/email 几个轴，但所有 PR 都卡在 review/merge 环节；今日合并/关闭率为 **0%**，处于明显的"提交-评审"不平衡。

---

## 四、社区热点

### 4.1 讨论最热的 Issues（按评论数）

1. **[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)**（12 条评论）— RFC: 将"对话历史"与"代理精选长期记忆"分离
   作者：Audacity88；标签：`memory, runtime, rfc, risk:high, p2`
   诉求：当前实现让 runtime/gateway/autosave 把对话回合写入通用记忆后端 `MemoryCategory::Conversation`，生命周期概念被错位耦合；建议拆分持久化路径，让"会话履历"与"长期记忆"走不同的存储与召回策略。

2. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**（7 条评论）— RFC: OpenAI Chat Completions 兼容适配
   作者：REL-mame；标签：`gateway, architecture, rfc, risk:high, p2`
   诉求：让 Open WebUI、LobeChat 等会讲 OpenAI Chat Completions API 的前端开箱即用，避免每个客户端都自建协议适配。

3. **[#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933)**（7 条评论）— RFC: 为 OTel 导出增加跨回合会话关联
   作者：FTDGRT；标签：`observability, otel, architecture, rfc, risk:high, p2`
   诉求：在回合生命周期观察者事件中携带不透明会话 ID，并以 `gen_ai.conversation.id` 字段导出。

4. **[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)**（7 条评论，👍 2）— 定义紧凑的 `local_small` 运行时 profile 与 prompt-budget 契约
   作者：ThirDecade2020；标签：`agent, config, provider, tool, security, p2, accepted, risk:high`
   诉求：让本地小模型启用紧凑模式，禁用宽松容错解析，防止内部工具/系统指令泄到用户可见输出。

5. **[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)**（5 条评论）— RFC: Gemini Live 的实时语音到语音通道
   作者：metalmon；标签：`channel, gateway, provider:gemini, architecture, rfc, risk:high, p2`
   诉求：让模型自身做对话大脑（原生 a-a、自带轮次/barge-in、自带 function-calling），ZeroClaw 负责工具、审批、跨通道记忆。

6. **[#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568)**（4 条评论）— MoA 虚拟模型 provider
   作者：NiuBlibing；标签：`config, gateway, observability, architecture, rfc, risk:high, p2`
   诉求：暴露一个聚合-裁判预设，让多个参考模型并行先跑、再汇总给聚合模型。

### 4.2 综合诉求分析

社区的"诉求光谱"形成了三条清晰主线：

- **互操作性：** OpenAI Chat Completions 适配（#8603）让 ZeroClaw 接入主流聊天前端；email 多收件人（#9567）补齐"企业协作"日常使用细节。
- **可观测性与可控性：** OTel 会话关联（#8933）解决链路追踪；`peer_groups` typo 结构化警告（#9311）让配置错误可见；rustdoc 警告闸门（#9545）巩固 CI 质量基线。
- **本地优先 vs 云端扩展：** `local_small` profile（#5287）、按 effort 的本地/云路由（#7951）、MoA 虚拟 provider（#8568）相互呼应，构成 ZeroClaw 在推理经济性上的差异化策略。

---

## 五、Bug 与稳定性

按严重程度由高到低排列：

| 级别 | Issue | 标题 | Fix PR | 状态 |
|---|---|---|---|---|
| **S0 – 数据丢失/安全风险** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | gateway webhook handlers 没有 fail-closed（WhatsApp Cloud、Linq、WATI） | [#9569](https://github.com/zeroclaw-labs/zeroclaw/pull/9569) ✅ 已提 PR（未合） | 30min 内出修复 |
| **S2 – 降级行为** | [#9572](https://github.com/zeroclaw-labs/zeroclaw/issues/9572) | debug gateway WebSocket 转弯时 Tokio worker 栈溢出 | 无 | 需补 PR |
| **S2 – 降级行为** | [#9566](https://github.com/zeroclaw-labs/zeroclaw/issues/9566) | Unix 上大写 `allowed_commands` 项永不匹配（#4552 回归） | [#9568](https://github.com/zeroclaw-labs/zeroclaw/pull/9568) ✅ 已提 PR（未合） | 与 PR 同批次 |
| **S3 – 小问题** | [#8847](https://github.com/zeroclaw-labs/zeroclaw/issues/8847) | cargo test --doc 因重复 rustdoc theme flag 失败 | 无（独立） | Rust 1.96 兼容 |

**安全态势观察：** 今日一次提交内同时出现 1 个 S0 + 2 个 S2 安全类修复，且都集中在"默认配置 + Unix 行为门控"两个共性点（fail-closed 默认、平台门控 `#cfg`）。值得关注的是 WATI 通道几乎同步被 [PR #9571](https://github.com/zeroclaw-labs/zeroclaw/pull/9571) 移除——可推测其在 #9565 中已与两个存活的 WhatsApp/Linq 并列为鉴权缺陷源。

---

## 六、功能请求与路线图信号

| 类别 | Issue | 关联进展 | 纳入下一版的概率（评估） |
|---|---|

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*