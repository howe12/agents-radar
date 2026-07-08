# OpenClaw 生态日报 2026-07-08

> Issues: 197 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-08 02:49 UTC

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

**报告日期：** 2026-07-08
**项目：** openclaw/openclaw

---

## 1. 今日速览

OpenClaw 今日活跃度处于高位：过去 24 小时共有 **197 条 Issue 更新**（180 活跃 / 17 关闭）与 **500 条 PR 更新**（358 待合并 / 142 已合并或关闭），但**无新版本发布**。从结构上看，PR 提交远多于 Issue，且大量 PR 集中在 7 月 7–8 日，提示项目正处于"密集合入"阶段而非"密集发版"阶段。当前社区关注的核心议题围绕 **API Key 泄露防护、Signal 重启竞态、Agent 启动引导、多 Agent 编排稳定性** 等高严重度方向；评论数最多的前 10 条 Issue 几乎全部带有 🦞 diamond lobster 评级，表明这些并非边缘诉求，而是项目运行中的关键阻塞面。

---

## 2. 版本发布

本周期无新 Release 可报告。建议关注者通过 PR 合并节奏推断下一版本的回归风险与能力变化。

---

## 3. 项目进展

在 142 条已合并/关闭 PR 中，可识别出以下几条对项目健康度有实质推进作用的修复与改进：

### 3.1 控制流与错误处理
- **#101762** `fix(agent-core): skip handleRunFailure error forwarding for control-flow signals` — 修复 `MidTurnPrecheckSignal`（用于在工具结果超出上下文预算时触发裁剪重试的内部控制信号）被误判为致命错误而注入事件流的问题。🔗 [PR #101762](https://github.com/openclaw/openclaw/pull/101762)
- **#101928** `fix(agents): allow re-entrant session write lock for overflow-recovery compaction` — 解决 `acquireSessionWriteLock` 默认不允许重入导致自动压缩路径死锁的问题。🔗 [PR #101928](https://github.com/openclaw/openclaw/pull/101928)
- **#101715** `fix(model-fallback): re-throw LiveSessionModelSwitchError for outer retry loop` — 中途切换模型时让外层重试循环接住模型切换错误。🔗 [PR #101715](https://github.com/openclaw/openclaw/pull/101715)

### 3.2 安全与认证
- **#101399** `fix(gateway): detect unresolved env-var placeholders in gateway auth token`（P0）— 当 `gateway.auth.token` 配置为 `${OPENCLAW_GATEWAY_TOKEN}` 而环境变量未注入时（如 macOS GUI App 从 Dock 启动），原先会把字面字符串当作 token，引入误鉴权风险。🔗 [PR #101399](https://github.com/openclaw/openclaw/pull/101399)

### 3.3 性能与稳定性
- **#89040** `perf: avoid event-loop stall during embedded_run bootstrap-context`（P1, XL）— 修复 `embedded_run` 引导阶段同步文件 I/O 阻塞事件循环 14–22 秒、导致消息丢失的根因。🔗 [PR #89040](https://github.com/openclaw/openclaw/pull/89040)
- **#100845** `fix(cli): one-shot agent --local runs never export OTel diagnostics` — 一次性本地运行在 OTel 启用时不导出遥测；该 PR 已具备 automerge armed 状态。🔗 [PR #100845](https://github.com/openclaw/openclaw/pull/100845)
- **#101932** `fix(session): avoid stalls when parent token probing hangs` — 解决从父会话创建或 fork 时父级 token 探测不收敛导致无限等待的问题。🔗 [PR #101932](https://github.com/openclaw/openclaw/pull/101932)

### 3.4 跨渠道与跨平台
- **#101873 / #101911 / #101912** Android 端语言切换、Skill Workshop 设置面板、模型提供商管理面板的连续合入，提示 Android 客户端进入体验补齐阶段。
- **#101741** `fix(line): cap user profile cache`、**#101964** `fix(msteams): cap team-group-id cache` — 分别为 LINE 与 MS Teams 渠道加上缓存封顶，解决内存无界增长隐患。
- **#99515** `feat(discord): support multiple file attachments per message` — Discord 单条消息支持最多 10 个附件（[#24196](https://github.com/openclaw/openclaw/issues/24196) 修复）。

### 3.5 国际化与编码安全
- **#101942** `fix(cli): keep plugin description truncation UTF-16 safe`
- **#101976** `fix(acp): keep background-task summaries UTF-16 safe at truncation boundaries`
  — 修复 emoji / CJK 增补字符在 57 字符截断边界产生 U+FFFD 替换字符的常见 bug。

> 总体判断：项目处于"打磨期"——大量 PR 关注的是边界条件、编码、缓存封顶、并发重入等生产化细节，**功能层大事已基本就绪**。

---

## 4. 社区热点

按评论数排序的 Top 5 议题，呈现社区当前最关注的痛点：

| 排名 | Issue | 评论数 | 👍 | 主题 | 链接 |
|------|-------|--------|----|------|------|
| 1 | #11829 Security Roadmap: API Keys from Agent Access | 20 | 0 | 安全 | [🔗](https://github.com/openclaw/openclaw/issues/11829) |
| 2 | #22676 Signal daemon stop() race condition | 17 | 0 | 稳定性 | [🔗](https://github.com/openclaw/openclaw/issues/22676) |
| 3 | #29387 Bootstrap files in agentDir ignored | 14 | 5 | 配置/行为 | [🔗](https://github.com/openclaw/openclaw/issues/29387) |
| 4 | #43367 Multi-agent orchestration unstable | 13 | 1 | 多 Agent | [🔗](https://github.com/openclaw/openclaw/issues/43367) |
| 5 | #31583 exec tool does not inherit skills.entries.*.env | 13 | 2 | 工具/回归 | [🔗](https://github.com/openclaw/openclaw/issues/31583) |
| 5 | #99241 Tool outputs render as image attachments | 13 | 1 | 工具/UX | [🔗](https://github.com/openclaw/openclaw/issues/99241) |
| 5 | #39604 tools.web.fetch.allowPrivateNetwork | 13 | 11 | 特性请求 | [🔗](https://github.com/openclaw/openclaw/issues/39604) |

**诉求分析：**
- **#11829** 是高强度讨论的安全路线图：API Key 在模型目录中解析后被序列化进提示词、聊天回显等多处泄露路径，社区希望"分层防御"。这是 OpenClaw 走向企业部署的**最大信任门槛**。
- **#22676 + #41165 + #40001** 共同指向"多入口+多会话+文件共享"的复合故障模式：信号守护进程与配置文件锁的竞态

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：** 2026-07-08
**覆盖范围：** OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、TinyClaw、CoPaw、ZeroClaw 等 10 个活跃项目（NullClaw、Moltis、ZeptoClaw 过去 24 小时无活动，不纳入主分析）

---

## 1. 生态全景

2026 年 7 月 8 日，个人 AI 助手/自主智能体开源生态呈现出 **"高频迭代 + 协同安全披露"** 的双重特征：头部项目（OpenClaw、IronClaw、ZeroClaw、CoPaw、Hermes Agent）单日 PR 吞吐均达 23–500 级别，发布密度（Hermes Agent v0.18.1、LobsterAI 2026.7.7、CoPaw v2.0.0-beta.3）反映出 **生产化攻坚已进入收尾期**；与此同时，单一安全研究员 YLChen-007 在 24 小时内向 NanoBot、LobsterAI、NanoClaw、TinyClaw 等多个项目集中披露了一组同构漏洞（loopback WebUI/Webhook 未鉴权），揭示出 **"本地 IPC 即安全"的默认假设** 已成为生态级系统性风险。整体来看，生态正从"功能堆叠"转向"安全硬化 + 多 Agent 编排 + MCP 稳定化"的三线并进阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已合并) | 今日 Release | 核心主题 | 健康度 |
|------|--------------------|---------------------|--------------|----------|--------|
| **OpenClaw** | 197 (180/17) | 500 (358/142) | ❌ 无 | 打磨期/边界条件 | 🟢 高（高强度迭代） |
| **IronClaw** | 5 (4/1) | 50 (39/11) | ❌ 无 | Slack OAuth 重构栈收口 | 🟢 高（纪律良好） |
| **ZeroClaw** | 10 (8/2) | 50 (45/5) | ❌ 无 | MCP/Runtime 安全硬化 | 🟢 高 |
| **Hermes Agent** | 10 (10/0) | 50 (47/3) | ✅ **v0.18.1** | 网关稳定性/平台适配 | 🟢 高（刚发版） |
| **CoPaw** | 16 (12/4) | 38 (23/15) | ✅ **v2.0.0-beta.3** | 前端稳定性/沙箱兼容 | 🟢 高（beta 节奏） |
| **LobsterAI** | ~8 (5+/3-) | 16 (1/15) | ✅ **2026.7.7** | 子代理协作/邮件多账户 | 🟡 中（并行安全漏洞） |
| **NanoBot** | 12 (12/0) | 31 (20/11) | ❌ 无 | WebUI 鉴权漏洞集中披露 | 🟡 中（安全待修复） |
| **NanoClaw** | 1 (1/0) | 23 (14/9) | ❌ 无 | 文档治理收口 + 安全公告 | 🟢 良 |
| **PicoClaw** | 7 (5/2) | 4 (3/1) | ❌ 无 | 嵌入式/多供应商适配 | 🟡 中偏低（维护响应弱） |
| **TinyClaw** | 9 (9/0) | 0 (0/0) | ❌ 无 | 9 项安全漏洞未响应 | 🔴 高风险观望 |

> 📊 **绝对量级：** OpenClaw 的当日 Issue 更新量（197）≈ Hermes Agent + IronClaw + ZeroClaw + CoPaw 之和（170），PR 更新量（500）≈ 其他 9 个项目总和（303）的 1.65 倍，**在生态中处于显著的"主干项目"位置**。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与活跃度

| 维度 | OpenClaw | 第二名 | 倍数差 |
|------|----------|--------|--------|
| 24h Issue 更新 | 197 | ZeroClaw / Hermes Agent: 10 | **~20×** |
| 24h PR 更新 | 500 | IronClaw / ZeroClaw: 50 | **10×** |
| 已合并 PR（24h） | 142 | IronClaw: 11 | **~13×** |

### 3.2 差异化优势

1. **渠道矩阵最广**：今日合入涉及 Android 语言切换、LINE/MS Teams 缓存封顶、Discord 多附件、CLI 国际化等，覆盖度远超 NanoBot（飞书/微信/Slack）、CoPaw（钉钉/Matrix）等同类项目。
2. **生产化细节最深**：UTF-16 截断安全（#101942/#101976）、嵌入式 Run 事件循环阻塞修复（#89040）、OTel 诊断导出（#100845）、session write lock 重入（#101928）等，体现 **"打磨期"独有** 的工程纵深。
3. **安全路线图最体系化**：[#11829](https://github.com/openclaw/openclaw/issues/11829)（API Key 分层防御）已是高强度讨论话题（20 评论），而同类项目（NanoBot、LobsterAI、TinyClaw）仍处于**漏洞披露后的被动应对期**。
4. **平台覆盖最完整**：同时拥有 macOS GUI App、Android 客户端、CLI、网关、SDK 多端，是少数能覆盖"开发者桌面 + 移动 + 服务端"全场景的开源智能体项目。

### 3.3 相对短板

- **多 Agent 编排稳定性**（[#43367](https://github.com/openclaw/openclaw/issues/43367) 13 评论）落后于 LobsterAI 的子代理白名单协作（[#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 已合并）。
- **API Key 泄露防护**（[#11829](https://github.com/openclaw/openclaw/issues/11829)）虽有讨论但**仍处于路线图阶段**，相较 Hermes Agent [#60636](https://github.com/NousResearch/hermes-agent/pull/60636)（harden for production）已交付 hashed bearer token + Docker 模板，节奏偏慢。

---

## 4. 共同关注的技术方向

跨项目出现频次 ≥3 的共性技术议题（按重要度排序）：

### 4.1 🔴 本地 IPC/Loopback 服务未鉴权（生态级系统性风险）

| 项目 | 议题 | 报告者 |
|------|------|--------|
| NanoBot | [#4825/#4826/#4827](https://github.com/HKUDS/nanobot/issues/4825) WebUI Token 铸造 | YLChen-007 |
| LobsterAI | [#2286/#2287/#2288](https://github.com/netease-youdao/LobsterAI/issues/2286) 本地 Token 代理/NIM 媒体外泄/HTML 预览 | YLChen-007 |
| NanoClaw | [#2970](https://github.com/qwibitai/nanoclaw/issues/2970) 本地 webhook 未鉴权 | YLChen-007 |
| TinyClaw | [#286-#294](https://github.com/TinyAGI/tinyagi/issues/286)（9 项同主题漏洞） | YLChen-007 |

**共同诉求：** 默认安全策略应放弃 "loopback 即安全" 的假设，引入 HMAC/Bearer Token/共享密钥等显式鉴权边界。

### 4.2 🟠 MCP（Model Context Protocol）稳定性

| 项目 | 议题 | 阶段 |
|------|------|------|
| ZeroClaw | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) schema 深克隆致 OOM | 修复 PR [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) 待合并 |
| ZeroClaw | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` 对 MCP 失效 | 待修复 |
| NanoBot | [#4506](https://github.com/HKUDS/nanobot/pull/4506) idle timeout / [#4764](https://github.com/HKUDS/nanobot/pull/4764) reconnect 崩溃 | P1 长期积压 |

**共同诉求：** MCP 已从"新特性"升级为 **关键基础设施层**，但 schema 共享、空闲清理、重连语义在多个项目仍存在原生缺陷。

### 4.3 🟠 多 Agent 编排与目标系统

| 项目 | 议题 | 状态 |
|------|------|------|
| OpenClaw | [#43367](https://github.com/openclaw/openclaw/issues/43367) 多 Agent 编排不稳定 | 讨论中 |
| LobsterAI | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 子代理协作白名单 | ✅ 已合并 |
| NanoBot | [#4844](https://github.com/HKUDS/nanobot/pull/4844) `long_task` → `create_goal/update_goal` 重构 | 维护者主导中 |
| Hermes Agent | [#46944](https://github.com/NousResearch/hermes-agent/issues/46944) `delegate_task(background=true)` 丢失 | 待修复 |

**共同诉求：** 从单体 agent 走向多 agent 委托/子会话延续，需要 **白名单 + 抢占（CAS）+ 状态风暴抑制** 三件套，缺一不可。

### 4.4 🟡 Cron/定时任务可靠性

- Hermes Agent [#38647](https://github.com/NousResearch/hermes-agent/issues/38647) cron memory 静默失败
- LobsterAI [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409) 跨天定时任务无历史
- LobsterAI [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) 通知目标可选（已合并）
- Hermes Agent [#60631](https://github.com/NousResearch/hermes-agent/pull/60631) drain 漏 cron（修复 PR 就绪）

**共同诉求：** Cron 通道存在 **"success ≠ delivered"** 的语义不一致，需要事实回执机制。

### 4.5 🟡 UTF-16 编码安全 / 多语言截断

- OpenClaw [#101942](https://github.com/openclaw/openclaw/pull/101942)（plugin description）/ [#101976](https://github.com/openclaw/openclaw/pull/101976)（background-task summary）

**判断：** 这是 OpenClaw

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-07-08**

---

## 1. 今日速览

NanoBot 今日社区活跃度**较高**，过去 24 小时共产生 **43 条更新**（12 个 Issue + 31 个 PR），其中 PR 数量显著多于 Issue，表明开发侧处于集中迭代期。值得高度关注的是**三项 WebUI 安全漏洞同日被披露**（#4825/#4826/#4827），同时 WhatsApp 群组授权出现回归（#4823）。整体看，项目正处于多线并进的稳定性修复阶段，修复类 PR 占比突出。**今日无新版本发布**，积压待合并 PR 达 20 条，建议维护者集中审阅。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一个稳定版本（0.2.x 系列）的变更正在通过 PR 队列积累，预计下一版本可能集中修复 WhatsApp/MCP/WebUI 三类问题。

---

## 3. 项目进展（合并/关闭的重要 PR）

| PR | 标题 | 意义 |
|---|---|---|
| [#4763](https://github.com/HKUDS/nanobot/pull/4763) | feat(feishu): add new session divider | ✅ 已合并：飞书会话分隔符体验优化，修复 #4619 |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | Gate sustained goals behind explicit runtime mode | 🔁 已关闭：由新版 #4844 替代 |
| [#3378](https://github.com/HKUDS/nanobot/pull/3378) | feat: add camera_capture tool | ❌ 已关闭：长期未合并的摄像头工具提案 |
| [#3517](https://github.com/HKUDS/nanobot/pull/3517) | fix(weixin): refresh context_token | ❌ 已关闭：微信定时消息静默丢失修复 |
| [#3743](https://github.com/HKUDS/nanobot/pull/3743) | feat(provider): support provider-hosted web search | ❌ 已关闭：Azure OpenAI 等托管式 Web 搜索提案 |

**整体判断**：项目整体向前推进，但**多数高价值修复仍未落地**。长任务目标（long_task）机制正在重构中，#4833 → #4844 的迭代表明维护者在持续打磨 Agent 运行时的目标调度设计。

---

## 4. 社区热点

### 最高讨论度 Issues
- **[#4013](https://github.com/HKUDS/nanobot/issues/4013)** ⭐ 评论 6 — LLM 流式响应停滞 90 秒报错（升级 0.2.0 后出现）。用户表达了对 0.1.5post2 的高度认可（"its been very good"），但升级后核心工作流几乎不可用，今日已**关闭**，反映该问题已被识别并修复。
- **[#4823](https://github.com/HKUDS/nanobot/issues/4823)** — WhatsApp 群组响应在所有加入的群中广播，破坏 `allowFrom` 的群组授权语义。属严重回归。

### 安全类高优先级报告（同一作者 YLChen-007 同日连发）
- **[#4825](https://github.com/HKUDS/nanobot/issues/4825)** — 未认证 localhost 调用者可通过 `/webui/bootstrap` 铸造 WebUI API token
- **[#4826](https://github.com/HKUDS/nanobot/issues/4826)** — WebUI bootstrap 向任意 localhost 进程发放 API 能力 token
- **[#4827](https://github.com/HKUDS/nanobot/issues/4827)** — 同主题的嵌入式 WebUI 漏洞变体

**背后诉求**：当 WebUI 绑定 loopback 且未配置 `tokenIssueSecret` 时，本地任意进程可获得 API 鉴权 token，构成**权限提升风险**。这是本地多用户/共享主机场景下的关键缺陷，需要尽快修复。

---

## 5. Bug 与稳定性

### 🔴 严重 / 安全类
| 编号 | 问题 | 状态 |
|---|---|---|
| [#4825](https://github.com/HKUDS/nanobot/issues/4825) | WebUI 未认证 token 铸造 | ❌ 待修复 |
| [#4826](https://github.com/HKUDS/nanobot/issues/4826) | WebUI localhost 鉴权绕过 | ❌ 待修复 |
| [#4827](https://github.com/HKUDS/nanobot/issues/4827) | WebUI embedded bootstrap 鉴权问题 | ❌ 待修复 |
| [#4611](https://github.com/HKUDS/nanobot/issues/4611) | DNS rebinding TOCTOU（SSRF 校验不锁定 IP） | ✅ 已关闭 |

### 🟠 高优先级 Bug
| 编号 | 问题 | 修复 PR |
|---|---|---|
| [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp 群组响应广播（回归） | [#4834](https://github.com/HKUDS/nanobot/pull/4834) ✅ 已提 PR |
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` 静默吞掉工具校验错误 | [#4837](https://github.com/HKUDS/nanobot/pull/4837) ✅ 已提 PR |
| [#4800](https://github.com/HKUDS/nanobot/issues/4800) | `.strip()` 在多模态消息上崩溃 | [#4837](https://github.com/HKUDS/nanobot/pull/4837) ✅ 已提 PR |
| [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI 首条消息可能误发到无关会话 | [#4836](https://github.com/HKUDS/nanobot/pull/4836) ✅ 已提 PR |
| [#4829](https://github.com/HKUDS/nanobot/issues/4829) | Slack 依赖缺 `aiohttp` | ❌ 待修复 |

### 🟡 中优先级 Bug
- **[#4841](https://github.com/HKUDS/nanobot/issues/4841)** — Matrix bot 在 Element 显示为 "Untrusted"，缺少交叉签名路径
- **MCP 相关**：[#4842](https://github.com/HKUDS/nanobot/pull/4842)、[#4843](https://github.com/HKUDS/nanobot/pull/4843)、[#4764](https://github.com/HKUDS/nanobot/pull/4764) — 多个 PR 共同解决 MCP 重连崩溃与僵尸进程
- **[#4840](https://github.com/HKUDS/nanobot/pull/4840)** — Shell 子进程僵尸回收不全
- **[#4839](https://github.com/HKUDS/nanobot/pull/4839)** — Telegram 长消息分片 HTML 解析异常

**整体看**，大部分用户报告的 Bug **已有对应修复 PR**，但**安全类漏洞尚无对应 PR**，是当前最大风险敞口。

---

## 6. 功能请求与路线图信号

| 请求 | 对应 PR | 进入下版本概率 |
|---|---|---|
| Provider-hosted Web 搜索（Azure Responses API） | [#3743](https://github.com/HKUDS/nanobot/pull/3743) 已关闭 | ⭐⭐⭐ 需求真实存在但当前实现被关闭，需重新设计 |
| WebUI 文件编辑 diff 视图 | [#4828](https://github.com/HKUDS/nanobot/pull/4828) OPEN | ⭐⭐⭐⭐ 体验类强需求，已开放 PR |
| 长时间任务目标门控 | [#4844](https://github.com/HKUDS/nanobot/pull/4844) OPEN | ⭐⭐⭐⭐⭐ 维护者亲自推进，重构 `long_task` → `create_goal/update_goal` |
| MCP server 空闲超时自动清理 | [#4506](https://github.com/HKUDS/nanobot/pull/4506) OPEN | ⭐⭐⭐⭐ 资源泄漏治理，长期有价值 |
| QQ 自动重连指数退避 | [#4838](https://github.com/HKUDS/nanobot/pull/4838) OPEN | ⭐⭐⭐⭐ 稳定性提升 |
| CLI 支持 CSI-u Shift+Enter | [#4832](https://github.com/HKUDS/nanobot/pull/4832) OPEN | ⭐⭐⭐ 终端体验优化 |
| 飞书会话分隔符 | [#4763](https://github.com/HKUDS/nanobot/pull/4763) ✅ | ⭐⭐⭐⭐⭐ 已合并 |

**路线图信号**：WebUI 增强 + MCP 稳定性 + 目标系统重构是三大主线，与社区诉求高度契合。

---

## 7. 用户反馈摘要

- **正面**：「I've been using 0.1.5post2 for the webui, it's been very good (way to say ty)」 — 用户对历史版本体验明确认可（[#4013](https://github.com/HKUDS/nanobot/issues/4013)）
- **强烈不满**：0.2.0 升级后核心 LLM 工作流因 stream 停滞报错近乎瘫痪，反映**升级路径上的稳定性回归是真实痛点**
- **场景诉求**：用户实际部署到欧拉（openEuler）红帽系系统时遇到证书路径缺失（[#4845](https://github.com/HKUDS/nanobot/pull/4845)），表明 NanoBot 正在被用于**国产化 Linux 信创场景**
- **沉默风险**：多个安全漏洞在未配置 `tokenIssueSecret` 的默认/常见配置下可被利用，提示**默认安全策略需硬化**

---

## 8. 待处理积压（提醒维护者关注）

### 紧急（建议 24h 内响应）
- 🔴 **#4825 / #4826 / #4827** 三连 WebUI 鉴权安全漏洞，尚未有对应修复 PR
- 🔴 **#4823** WhatsApp 群组回归，PR #4834 待审

### 高优先级（建议本周内处理）
- 🟠 [#4829](https://github.com/HKUDS/nanobot/issues/4829) Slack `aiohttp` 依赖缺失（影响 Slack 插件启用）
- 🟠 [#4844](https://github.com/HKUDS/nanobot/pull/4844) 长任务目标系统重构（维护者主导，优先级 p1）
- 🟠 [#4828](https://github.com/HKUDS/nanobot/pull/4828) WebUI 文件 diff 视图
- 🟠 [#4841](https://github.com/HKUDS/nanobot/issues/4841) Matrix 端到端加密设备信任

### 长期积压
- 🟡 [#4506](https://github.com/HKUDS/nanobot/pull/4506) MCP idle timeout（p1，开 13 天）
- 🟡 [#4764](https://github.com/HKUDS/nanobot/pull/4764) MCP reconnect cancel scope（p1，开 3 天）
- 🟡 [#3378](https://github.com/HKUDS/nanobot/pull/3378) camera_capture 工具提案（开 77 天后已关闭但功能未落地）

---

## 健康度总结

| 维度 | 评估 |
|---|---|
| 活跃度 | 🟢 高（43 条更新） |
| 响应速度 | 🟡 中（多个 Issue 24h 内无回复） |
| 安全态势 | 🔴 需立即关注（3 项未修复漏洞） |
| 功能推进 | 🟢 持续（WebUI + MCP + 目标系统三线并进） |
| 版本节奏 | 🟡 偏慢（今日无版本，安全修复或需快速发版） |

**建议**：维护者应优先处理 WebUI 安全三连与 WhatsApp 群组回归，并考虑发布 **0.2.3 补丁版本**。

---
*报告生成基于 HKUDS/nanobot GitHub 公开数据，数据时间窗口为 2026-07-07 至 2026-07-08。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**：2026-07-08
**项目**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
**报告人**：AI 智能体领域开源项目分析师

---

## 1. 今日速览

Hermes Agent 今日进入高强度迭代周期：过去 24 小时新开/活跃 Issues **10 条**（均未关闭）、Pull Requests **50 条**（47 条待合并，3 条已合并/关闭），并伴随一个 Patch 版本发布（v0.18.1，回滚自 7 月 1 日以来约 660 个 PR）。议题与 PR 的高频产出表明社区贡献与问题反馈同步活跃，项目处于 **典型的高速收尾-发版阶段**。安全/网关/平台适配器相关问题集中曝光（QQ Bot、Email、WhatsApp、Anthropic OAuth），而功能请求中"Desktop 反馈闭环"和"Dashboard 反向代理支持"诉求最强烈。

---

## 2. 版本发布

### 🚢 Hermes Agent v0.18.1 (v2026.7.7)

- **发布日期**：2026-07-07
- **类型**：Patch（补丁版本）
- **主要变更**：聚合自 v0.18.0（7 月 1 日）以来合并的约 **660 个 PR**，内容涵盖 bug 修复、稳定性硬化与部分进行中的特性工作
- **下游影响**：为 Docker 镜像、托管部署、PyPI 安装等下游消费者提供稳定的 tag
- **迁移注意**：作为 patch 版本，预期无破坏性变更；从 v0.18.0 直接升级应平滑

> 📌 **分析师观察**：发版前一日（7-08）仍涌入 50 条 PR，说明 v0.18.2 候选补丁正在快速集结，建议下游用户在 v0.18.1 上验证关键路径，并关注 7 月中旬的下一版本动向。

---

## 3. 项目进展

### 已合并/关闭 PR（3 条）

由于仅给出汇总数据，未列出具体明细。从过去 24h 整体产出推断：合并的 PR 多为低风险修复（文档、依赖、本地化）。建议关注 GitHub 上 [closed PRs 列表](https://github.com/NousResearch/hermes-agent/pulls?q=is%3Apr+is%3Aclosed) 以确认。

### 高价值待合并 PR（按主题归类）

#### 🔒 安全与稳定性（核心推进）
- **[#60631](https://github.com/NousResearch/hermes-agent/pull/60631) — `fix(gateway,cron): make shutdown drain visible to in-flight cron work`**（P1）
  - 修复 `/update`、`/restart`、SIGUSR1 触发 drain 时漏掉 cron 任务导致消息丢失的问题。属于 **P1 风险面**，强烈建议优先合入。
- **[#60527](https://github.com/NousResearch/hermes-agent/pull/60527) — `fix(approval): honor /stop cancel over a racing /approve (fail-closed)`**
  - 解决 `/stop` 与 `/approve` 竞态导致取消失败的 fail-closed 安全问题（命令审批流）。
- **[#59674](https://github.com/NousResearch/hermes-agent/pull/59674) — `fix(gateway/platforms): use get_secret() for WEIXIN_TOKEN`**
  - 多 profile 模式下防止企业微信 token 跨账户泄露，安全边界加固。
- **[#24302](https://github.com/NousResearch/hermes-agent/pull/24302) — `fix: redact sensitive MCP URL query values`**
  - `hermes mcp list/test` 输出中遮蔽 key/token 等敏感查询参数。

#### ⚙️ 网关/平台适配器（多端打通）
- **[#60641](https://github.com/NousResearch/hermes-agent/pull/60641) — `fix(qqbot): add is_reconnect parameter`**（对应 Issue [#60635](https://github.com/NousResearch/hermes-agent/issues/60635)）
- **[#60639](https://github.com/NousResearch/hermes-agent/pull/60639) — `fix(anthropic): serialize Claude Code OAuth refresh`**
  - 并发负载下原生 Anthropic provider 静默 fallback 的竞态修复。
- **[#60643](https://github.com/NousResearch/hermes-agent/pull/60643) — `fix(whatsapp): unpin Baileys`**（Teknium 本人提交）
  - 安装时间从 ~3 分钟降至 ~3 秒。
- **[#60644](https://github.com/NousResearch/hermes-agent/pull/60644) — `fix(desktop): register /compress command in TUI gateway`**（对应 Issue #60603）
- **[#60324](https://github.com/NousResearch/hermes-agent/pull/60324) — `fix: auto-refresh member cache`**
  - 修复 @ 提及降级为纯文本的隐患。

#### 🧠 模型路由 / MoA
- **[#60645](https://github.com/NousResearch/hermes-agent/pull/60645) — `fix(aux): forward max_tokens to all providers`**（修复 [#60388](https://github.com/NousResearch/hermes-agent/issues/60388)）
  - 此前 OpenRouter / OpenAI / Copilot 等被静默丢弃 `max_tokens`，影响 MoA `reference_max_tokens`、压缩、token 预算。
- **[#60646](https://github.com/NousResearch/hermes-agent/pull/60646) — `fix(moa): trim reference model context`**
  - 修复 kimi/glm 等不同 context window 下 MoA 静默退化。

#### 🎨 Desktop / 用户体验
- **[#60638](https://github.com/NousResearch/hermes-agent/pull/60638) — `feat(desktop): contribution-driven shell on a layout-tree model`**
  - 用 Dockview 风格 layout tree 替换硬编码 shell，是 Desktop 方向的大改。
- **[#60640](https://github.com/NousResearch/hermes-agent/pull/60640) — `feat(desktop): add Italian (it) locale`**
  - 与现有 ja/zh/zh-hant 并列的完整翻译。
- **[#41792](https://github.com/NousResearch/hermes-agent/pull/41792) — `docs: Skill vs Tool guide`**
  - 在 `CONTRIBUTING.md` 增加 "Script as third option" 章节，普及 `no_agent` 概念。

#### 🚀 新功能
- **[#58460](https://github.com/NousResearch/hermes-agent/pull/58460) — `feat: add Codex operations support`**（带 Playwright MCP 目录条目）
- **[#60636](https://github.com/NousResearch/hermes-agent/pull/60636) — `Harden Hermes for production deployment`**
  - API 服务端 hashed bearer token 撤销、双提交 cookie + CSRF、Dockerfile / docker-compose / .env 模板。

#### ⚡ 性能
- **[#47303](https://github.com/NousResearch/hermes-agent/pull/47303) — `feat(Yuanbao): parallel download media`**
  - 入站媒体并发解析（`_DEFAULT_RESOLVE_CONCURRENCY = 6`），保持顺序与异常隔离。

> 📌 **整体评估**：项目在 **网关稳定性、平台适配器一致性、Desktop UX、生产化部署** 四个方向同时推进，节奏健康。安全相关 PR 占比可观（≥15%），体现社区对生产部署场景的重视。

---

## 4. 社区热点

按评论数与点赞数排序：

| 排名 | 议题 | 互动 | 关键诉求 |
|------|------|------|---------|
| 🥇 | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) Dashboard `--allowed-hosts` for reverse-proxy / Tailscale | **11 评论** | 让 dashboard 可以安全地暴露在反向代理后，受 DNS rebinding 保护限制阻碍 |
| 🥈 | [#38647](https://github.com/NousResearch/hermes-agent/issues/38647) Cron 静默丢失 memory 写入 | 2 评论 / 👍 2 | `skip_memory=True` 隐式吞掉 memory write，用户无感知 |
| 🥉 | [#60616](https://github.com/NousResearch/hermes-agent/issues/60616) `hermes -z` SIGABRT（仅 honcho provider） | 2 评论 | oneshot 模式在 Honcho memory 写入成功后崩溃 |

### 背后诉求分析
- **反向代理/Tailscale 部署**（#34390）是社区**最强烈的需求**：11 条评论说明多位用户在自托管场景下受阻，且与官方推荐的 DNS rebinding 防护存在张力。需要一个明确的多维度 allowlist 方案（host header + 来源 IP）。
- **Cron 静默失败**（#38647）反映了对**可观测性**的渴求：用户在生产定时任务中无法察觉 memory 是否真的写入，暴露了异步通道缺少"事实回执"的根本问题。
- **Honcho oneshot 崩溃**（#60616）体现**单一 provider 路径缺乏测试覆盖**。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1（最高优先级）
| 议题/修复 | 描述 | 状态 |
|----------|------|------|
| [#60631 (PR)](https://github.com/NousResearch/hermes-agent/pull/60631) | 网关 drain 漏掉 cron work | **Fix PR 已就绪**（修 [#60432](https://github.com/NousResearch/hermes-agent/issues/60432)） |

### 🟠 P2（重要）
| 议题/修复 | 描述 | 状态 |
|----------|------|------|
| [#60635](https://github.com/NousResearch/hermes-agent/issues/60635) `fix(qqbot)` is_reconnect | QQ Bot 重连崩溃 | **Fix PR [#60641](https://github.com/NousResearch/hermes-agent/pull/60641) 待合并** |
| [#46944](https://github.com/NousResearch/hermes-agent/issues/46944) `delegate_task(background=true)` 被 AIAgent dispatch 丢弃 | 异步降级为同步 | 尚无明确 fix PR |
| [#46960](https://github.com/NousResearch/hermes-agent/issues/46960) delegate_task background 未传到 OpenRouter | 模型层 fallback | 尚无明确 fix PR |
| [#60634](https://github.com/NousResearch/hermes-agent/issues/60634) Runs SSE 推理内容不完整 | 流式 vs 历史不一致 | 尚无 fix PR |
| [#56886 (PR)](https://github.com/NousResearch/hermes-agent/pull/56886) Dashboard auth `NotImplementedError`（password-only providers） | 500 错误 | **Fix PR 待合并** |
| [#60639 (PR)](https://github.com/NousResearch/hermes-agent/pull/60639) Anthropic OAuth 并发 fallback | 鉴权竞态 | **Fix PR 待合并** |

### 🟡 P3（一般）
| 议题/修复 | 描述 | 状态 |
|----------|------|------|
| [#60616](https://github.com/NousResearch/hermes-agent/issues/60616) `hermes -z` SIGABRT（honcho） | oneshot 模式崩溃 | 尚无 fix PR |
| [#60637](https://github.com/NousResearch/hermes-agent/issues/60637) Email 网关 UID 修剪导致重放历史未读邮件 | 启动时回放风险 | 尚无 fix PR |
| [#60647 (PR)](https://github.com/NousResearch/hermes-agent/pull/60647) Windows WhatsApp 控制台闪烁 | 仅 Windows | **Fix PR 待合并** |
| [#60644 (PR)](https://github.com/NousResearch/hermes-agent/pull/60644) Desktop `/compress` 未注册 | Desktop 不可用 | **Fix PR 待合并** |
| [#60646 (PR)](https://github.com/NousResearch/hermes-agent/pull/60646) MoA 参考模型 context 修剪 | 静默退化 | **Fix PR 待合并** |
| [#60645 (PR)](https://github.com/NousResearch/hermes-agent/pull/60645) `max_tokens` 转发 | 多 provider 修复 | **Fix PR 待合并** |

> 📌 **维护者建议**：P1 的 #60631 与 P2 的 #60641、#60639、#56886 已具备合并条件，建议在下一次 patch 版本（v0.18.2 候选）中优先合入。

---

## 6. 功能请求与路线图信号

| 需求 | 议题 / PR | 路线图信号 |
|------|-----------|-----------|
| Dashboard 反向代理 / Tailscale 安全暴露 | [#34390](https://github.com/NousResearch/hermes-agent/issues/34390) | 11 评论 + 0 赞 = **讨论激烈但尚未达成共识**。鉴于 Tailscale Serve 用户基数大，预计进入 v0.19 大版本。 |
| Pending skill/memory 使用顺序 ID | [#60446](https://github.com/NousResearch/hermes-agent/issues/60446) + [#60642 (PR)](https://github.com/NousResearch/hermes-agent/pull/60642) | **已有 PR**，极有可能合入下一 patch。 |
| Desktop 👍/👎 一键反馈 | [#60633](https://github.com/NousResearch/hermes-agent/issues/60633) | 与 [#27438](https://github.com/NousResearch/hermes-agent/issues/27438) / [#3506](https://github.com/NousResearch/hermes-agent/issues/3506) / [#18408](https://github.com/NousResearch/hermes-agent/issues/18408) / [#34660](https://github.com/NousResearch/hermes-agent/issues/34660) 一脉相承——**Desktop 反馈闭环**是用户的长期呼声，预计与 [#60638 (PR)](https://github.com/NousResearch/hermes-agent/pull/60638) 的新 shell 一同进入下一里程碑。 |
| 生产化部署硬化 | [#60636 (PR)](https://github.com/NousResearch/hermes-agent/pull/60636) | 官方开始输出 Dockerfile / docker-compose / env 模板，**自托管生态进入第二阶段**。 |
| Codex operations | [#58460 (PR)](https://github.com/NousResearch/hermes-agent/pull/58460) | 拓展 agent 操作面，含 Playwright MCP。 |
| Desktop 意大利语本地化 | [#60640 (PR)](https://github.com/NousResearch/hermes-agent/pull/60640) | 与 ja/zh/zh-hant 一致，**国际化策略明确**。 |
| Yuanbao 媒体并发 | [#47303 (PR)](https://github.com/NousResearch/hermes-agent/pull/47303) | 中等平台优化，预期合入。 |

---

## 7. 用户反馈摘要

从评论与上下文提炼：

1. **"我以为任务成功了"——Cron Memory 静默失败**（[#38647](https://github.com/NousResearch/hermes-agent/issues/38647)）
   - 用户痛点：定时任务报告 success，但 memory 没写入。**通道语义不一致**（success ≠ delivered），期望引入"事实回执"或显式写入审计。

2. **"Dashboard 必须绑 127.0.0.1 吗？我用 Tailscale"**（[#34390](https://github.com/NousResearch/hermes-agent/issues/34390)）
   - 用户场景：自托管玩家用 Tailscale Serve / nginx 把 dashboard 暴露给同事或自己的其他设备。**安全 vs 便利的取舍**正卡住整个反向代理生态。

3. **"oneshot 跑完才

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-07-08**
**项目仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏低水平**：无新版本发布，Issues 端有 7 条更新（5 条仍处于 Open/活跃状态，2 条因 stale 机制被自动关闭），PR 端有 4 条更新（3 条待合并，1 条已关闭）。值得关注的是，今日全部新近活动均由 stale 机器人自动触发或用户补充评论驱动，**维护者人工介入迹象较弱**。新报告的 Issue [#3232](https://github.com/sipeed/picoclaw/issues/3232) 揭示了一个真实可复现的限流缺陷；PR [#3226](https://github.com/sipeed/picoclaw/pull/3226) 正在对 `write_file` 工具的破坏性覆写逻辑进行修正，是今日最实质性的代码推进。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前社区使用版本仍分散在 v0.2.8、v0.2.9、0.3.1 之间，Issue [#3232](https://github.com/sipeed/picoclaw/issues/3232) 的报告版本为 0.3.1。

---

## 3. 项目进展

**今日合并/关闭的重要 PR：**

- ✅ **[#3157](https://github.com/sipeed/picoclaw/pull/3157) Android ADB 远程操作工具（已关闭 - stale）**
  - 贡献者：@danmobot
  - 该 PR 原本尝试引入 Android ADB 设备远程操作工具集（设备列表、截图、UI 层级、tap/swipe、文本输入、按键事件等原子操作），但因长期无维护者回应，已被标记为 stale 并关闭。
  - 意义：标志着 PicoClaw 移动端工具扩展尝试的一次阶段性搁置。

**正在推进但尚未合并的关键 PR：**

- 🟡 **[#3226](https://github.com/sipeed/picoclaw/pull/3226) fix(tools): 阻止 write_file 引导破坏性覆写**
  - 关联 Issue：#3150
  - 修复了 `write_file` 工具在文件已存在时，错误提示反而"鼓励"模型使用 overwrite 标志进行破坏性覆写的引导问题。该 PR 还指出 PicoClaw 缺少专门的 memory 写入工具，agent 需通过通用文件工具更新 `memory/MEMORY.md`。
  - 意义：属于**安全/体验类修复**，直接关联用户痛点，值得优先 review。

- 🟡 **[#3222](https://github.com/sipeed/picoclaw/pull/3222) refactor(deltachat): 清理实现与文档 -320 行**
  - 贡献者：@trufae
  - 删除了遗留特性、无回退路径与过时测试；引用官方 relay 列表替代硬编码副本；移除基于密码的邮件配置（密钥必须存于 jsonrpc）；重命名 `invite_link` → `join_invite_link` 并新增 `show_invite_link`。
  - 配套修复 PR [#3233](https://github.com/sipeed/picoclaw/pull/3233)（Fix PR #3222 向后兼容性）同日创建。

---

## 4. 社区热点

**今日讨论最活跃的 Issue：**

| 排名 | Issue | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| 1 | [#3093](https://github.com/sipeed/picoclaw/issues/3093) - 请求 SimpleX/Tox 网关 | 5 | 1 | 🔴 CLOSED (stale) |
| 2 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) - 豆包 Seed 工具调用泄露 | 3 | 0 | 🟢 OPEN (stale) |
| 3 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) - NanoKVM 上 OpenAI GPT 不可用 | 2 | 0 | 🟢 OPEN (stale) |
| 3 | [#3159](https://github.com/sipeed/picoclaw/issues/3159) - 任务重复执行 | 2 | 0 | 🔴 CLOSED (stale) |

**分析：**

- **[#3093](https://github.com/sipeed/picoclaw/issues/3093) SimpleX/Tox 网关请求** 是历史评论数最多的功能请求（5 条评论 + 1 个 👍），反映出社区对**隐私导向的 P2P 消息通道**有明确诉求。该 Issue 因 stale 机制被自动关闭，可能引发用户不满。
- **多模型兼容性** 持续是热点：豆包 Seed、GPT-5.4 (NanoKVM)、Codex/Antigravity OAuth 三个不同模型/平台均出现接入问题，反映出 PicoClaw 在**多供应商适配上的稳定性短板**。

---

## 5. Bug 与稳定性

按严重程度排序（🔴 严重 > 🟠 中等 > 🟡 轻微）：

| 严重度 | Issue | 描述 | 版本 | 已有 Fix？ |
|---|---|---|---|---|
| 🟠 中 | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | 未配置 fallback 模型时，rate limiting 完全失效 | 0.3.1 | ❌ 无 |
| 🟠 中 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 豆包 Seed 偶发返回原始 `<seed:tool_call>` 文本而非执行工具调用 | v0.2.8 | ❌ 无 |
| 🟠 中 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | NanoKVM 默认配置下 OpenAI GPT 交互失败 | 未指定 | ❌ 无 |
| 🟡 轻微 | [#3159](https://github.com/sipeed/picoclaw/issues/3159) | 多轮对话中前序任务被重复执行 | v0.2.9 | ❌ 无（已 stale 关闭） |
| 🟡 轻微 | [#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex / Antigravity OAuth 登录不可用（疑似重复报告） | v0.2.9 | ❌ 无 |

**关键观察：**
- 今日**没有任何 Bug 获得修复 PR**，社区报告的可靠性问题进入积压状态。
- [#3232](https://github.com/sipeed/picoclaw/issues/3232) 复现步骤清晰、版本信息完整，是最值得优先处理的 Bug。
- [#3196](https://github.com/sipeed/picoclaw/issues/3196) 与 [#3197](https://github.com/sipeed/picoclaw/issues/3197) 几乎完全重复，建议合并处理。

---

## 6. 功能请求与路线图信号

**已收到且尚未实现的明确功能请求：**

- 🔌 **SimpleX / Tox / Wire 网关**（[#3093](https://github.com/sipeed/picoclaw/issues/3093)）
  - 用户希望引入端到端加密的 P2P 消息协议作为聊天网关通道。
  - 路线图可能性：**低**。该 Issue 因 stale 被自动关闭，且无配套 PR。

- 📱 **Android ADB 远程控制工具**（[#3157](https://github.com/sipeed/picoclaw/pull/3157)，已关闭）
  - 提供截图、UI 操控等原子操作。
  - 路线图可能性：**中低**。已有 PR 草稿，但因 stale 关闭未被合并；若有维护者推动可重新激活。

- 🛠️ **专用 memory 写入工具**（由 [#3226](https://github.com/sipeed/picoclaw/pull/3226) 间接提出）
  - 当前 agent 需借用通用文件工具更新 `memory/MEMORY.md`。
  - 路线图可能性：**中高**。已在活跃 PR 中被明确指出，需求合理且实现成本低。

- 📨 **DeltaChat 通道重构**（[#3222](https://github.com/sipeed/picoclaw/pull/3222)）
  - 正在进行中的通道实现现代化、清理 320 行遗留代码。
  - 路线图可能性：**高**（已 active review 状态）。

---

## 7. 用户反馈摘要

**真实用户痛点提炼：**

1. **多供应商适配不稳定**（[#3153](https://github.com/sipeed/picoclaw/issues/3153)、[#3195](https://github.com/sipeed/picoclaw/issues/3195)、[#3196](https://github.com/sipeed/picoclaw/issues/3196)、[#3197](https://github.com/sipeed/picoclaw/issues/3197)）
   - 国内（火山豆包）、国外（OpenAI、Codex、Antigravity）多模型接入失败/异常，用户反映文档与实际行为不一致。
   - 用户场景：嵌入式 NanoKVM、Docker 容器、Web UI 等多场景。

2. **破坏性文件操作安全隐患**（[#3226](https://github.com/sipeed/picoclaw/pull/3226) 关联问题）
   - `write_file` 的错误提示反而引导模型执行破坏性覆写，用户担心 agent 在长任务中误删文件内容。

3. **任务重复执行体验差**（[#3159](https://github.com/sipeed/picoclaw/issues/3159)）
   - 用户场景：在 Web UI 中连续提问"今日美国新闻 → 今日法国新闻"，AI 重复执行前序任务，影响效率。

4. **限流机制不完整**（[#3232](https://github.com/sipeed/picoclaw/issues/3232)）
   - 用户按文档配置了 `agents.defaults.model_name` 但未配 fallback 模型，导致 RPM 限流形同虚设，担心被上游 API 封号。

5. **隐私通信需求被搁置**（[#3093](https://github.com/sipeed/picoclaw/issues/3093)）
   - 对 SimpleX/Tox 等去中心化加密通道有明确需求，但社区响应不足，Issue 被 stale 自动关闭引发挫败感。

---

## 8. 待处理积压

**长期未响应的重要 Issue / PR（建议维护者优先关注）：**

| 编号 | 类型 | 标题 | 创建至今 | 当前状态 |
|---|---|---|---|---|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Bug | 豆包 Seed 工具调用泄露 | ~16 天 | OPEN, stale |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | Bug | NanoKVM GPT 不可用 | ~8 天 | OPEN, stale |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | Refactor | DeltaChat 通道清理 (-320 LOC) | ~5 天 | OPEN, 待 review |
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | Bugfix | write_file 引导破坏性覆写 | ~3 天 | OPEN, 待 review |
| [#3196](https://github.com/sipeed/picoclaw/issues/3196) + [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Bug | OAuth 登录失败（疑似重复） | ~8 天 | OPEN, stale |
| [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Bug | 限流机制在无 fallback 时失效 | 1 天 | OPEN, 需复审 |

**风险提示：**
- 多个 Bug Issue 已触发 stale 标记，**若不在宽限期内获得响应将被自动关闭**，可能造成用户报告丢失与社区信任流失。
- PR [#3226](https://github.com/sipeed/picoclaw/pull/3226) 涉及安全引导语义，**建议维护者优先合并**。
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) 涉及大量代码清理，已衍生 [#3233](https://github.com/sipeed/picoclaw/pull/3233) 处理向后兼容性，**形成小型协作链**，值得加快 review 节奏。

---

*报告生成时间：2026-07-08 | 数据来源：GitHub API | 覆盖范围：过去 24 小时活动*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-07-08**

---

## 1. 今日速览

NanoClaw 今日维持高强度的迭代节奏：过去 24 小时内共产生 23 条 PR 更新（其中 9 条已合并/关闭，14 条仍待合并），并新开 1 条 **安全相关 Issue**。已关闭的 PR 中包含一项重要的 CLI 崩溃修复（#2804）、Discord 适配器修复（#2922）以及 SDK 0.3.x 兼容性更新（#2965），并由 glifocat 一次性完成了 5 篇仓库文档的"代码对账式"刷新（#2961–#2965）。当日未发布新版本，但修复密度与文档治理并进，项目健康度处于稳步上升区间。需重点关注的是一条关于本地 webhook 未鉴权的 **安全公告**（#2970）目前尚无对应修复 PR。

---

## 2. 版本发布

⚠️ 今日无新版本发布。

> 最近的稳定版本需结合已合并的 9 条 PR 追踪：CLI 崩溃修复、Discord 适配器修正、SDK 消息类型识别更新（影响 `@anthropic-ai/claude-agent-sdk` 0.3.x 用户）以及文档同步。建议维护者在合并 #2974（approvals 抢占）与 #2973（供应链最小发布龄门控）后尽快打 tag。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR

| PR | 标题 | 价值 |
|---|---|---|
| [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) | **fix(cli): ncl messaging-groups create always throws (NOT NULL instance)** | 修复 `messaging_groups.instance` 列在 migration 016 中被设为 NOT NULL 但 INSERT 路径未传入的硬性崩溃；CLI 创建流程恢复可用 |
| [#2922](https://github.com/nanocoai/nanoclaw/pull/2922) | **fix(discord): unwrap forwarded-message snapshots** | 修正转发消息快照未拆封导致 Agent 无法看到转发内容的问题 |
| [#2965](https://github.com/nanocoai/nanoclaw/pull/2965) | **fix(agent-runner): match rate_limit_event as top-level SDK message type** | 适配 `@anthropic-ai/claude-agent-sdk` 0.3.x 将速率限制事件提升为顶层 `SDKRateLimitEvent`；旧分支检测彻底失效，本 PR 恢复识别 |

### 📚 文档治理批量同步（#2961–#2965，作者：glifocat）

这是本次日报中最显著的进展：glifocat 在一天内提交并合并了 **5 篇文档刷新 PR**，完成一次"代码对账式"治理（基于 `08a1ac9/v2.1.38` 与 `b6cb53e` 双向核对）：

- [#2961](https://github.com/nanocoai/nanoclaw/pull/2961) README / CONTRIBUTING / CLAUDE.md / 运维文档事实纠错
- [#2962](https://github.com/nanocoai/nanoclaw/pull/2962) DB schema 文档与 migration 010–018 对齐
- [#2963](https://github.com/nanocoai/nanoclaw/pull/2963) `architecture.md` 与 `agent-runner-details.md` 重写
- [#2964](https://github.com/nanocoai/nanoclaw/pull/2964) SDK 深度文档从 0.2.x 升级到 0.3.197
- [#2965](https://github.com/nanocoai/nanoclaw/pull/2965) （已并入功能修复）

> **意义**：仓库长期存在的"代码与文档漂移"问题在这一波集中收口，对外部贡献者与下游集成方的可读性意义重大。

---

## 4. 社区热点

> ⚠️ 原始数据中评论数（comments）字段均为 `undefined`，无法按评论数排序。以下按 **讨论价值 + 关联性** 综合排序。

### 🔥 最值得关注的开放议题

1. **[#2970 Local action forgery via unauthenticated forwarded gateway loopback webhook](https://github.com/nanocoai/nanoclaw/issues/2970)** — 作者：YLChen-007
   - **核心问题**：NanoClaw 起了一个仅 localhost 可达的 webhook 来接收网关转发事件，但 **未对发送方进行身份校验** 即信任其内容。结合 "forwarded" 语义，攻击面虽小但形成伪造本地动作的能力，CWE 性质明确。
   - **关联修复 PR**：目前 **尚无对应修复 PR**，但同日 sturdy4days 提交的 [#2800](https://github.com/nanocoai/nanoclaw/pull/2800)（CWE-22 路径穿越 + 镜像 tag 钉死）与 [#2973](https://github.com/nanocoai/nanoclaw/pull/2973)（供应链 `minimumReleaseAge` 门控）显示安全加固正在并行推进。
   - **诉求**：社区希望官方对"网关转发"通道引入 HMAC 签名或共享密钥机制，并给出默认安全配置。

2. **[#2873 fix(skills): split pre-flight from credentials so /update-skills can refresh code (#2868)](https://github.com/nanocoai/nanoclaw/pull/2873)** — 作者：glifocat
   - 揭示了一个 **技能生命周期维护痛点**：当前 `/update-skills` 无法在已绑定凭证的情况下刷新技能代码，迫使维护者重新走授权流程。该 PR 通过将"前置检查"与"凭证注入"分离解决此问题。

3. **[#2974 fix(approvals): claim pending approvals before running the handler](https://github.com/nanocoai/nanoclaw/pull/2974)** — 作者：sturdy4days
   - 提出一个 **并发安全 CAS 模式**：在调用已注册的 approval handler 之前先以 compare-and-set delete 抢占行，避免同一审批被多个 worker 并发执行造成重复动作。

### 🧪 测试与噪声

- [#2919 PR-Test2-LargePRTest](https://github.com/nanocoai/nanoclaw/pull/2919) 已被关闭，属于大 PR 压力测试，与功能无关。

---

## 5. Bug 与稳定性

按严重程度（🔴 高 → 🟡 中 → 🟢 低）排序：

| 等级 | 问题 | 状态 | 关联修复 |
|---|---|---|---|
| 🔴 | **#2970** 未鉴权本地 webhook → 伪造本地动作 | 待修复 | ❌ 无 |
| 🟡 | **#2804** `ncl messaging-groups create` 必崩（NOT NULL 约束） | ✅ 已合并 | [#2804](https://github.com/nanocoai/nanoclaw/pull/2804) |
| 🟡 | **#2922** Discord 转发消息 Agent 看不见 | ✅ 已合并 | [#2922](https://github.com/nanocoai/nanoclaw/pull/2922) |
| 🟡 | **#2965** SDK 0.3.x 速率限制事件被错误归类 | ✅ 已合并 | [#2965](https://github.com/nanocoai/nanoclaw/pull/2965) |
| 🟡 | **#2966** Provider 错误被记录为 `completed`（语义混淆） | 待合并 | [#2966](https://github.com/nanocoai/nanoclaw/pull/2966)（草稿，需讨论语义） |
| 🟡 | **#2969** `/add-rtk` 在 v2 上挂载被拒（相对路径 + PATH） | 待合并 | [#2969](https://github.com/nanocoai/nanoclaw/pull/2969) |
| 🟢 | **#2729** 配对状态块名称与 setup 步骤不匹配 | 待合并 | [#2729](https://github.com/nanocoai/nanoclaw/pull/2729) |

> **稳定性观察**：CLI 层的崩溃与适配器层的内容丢失类问题已得到有效收口；尚未修复的最高优先级问题是 **#2970 安全漏洞**，建议维护者立即标记为 `priority/security` 并指派 reviewer。

---

## 6. 功能请求与路线图信号

### 📦 已被 PR 化的功能请求（有望纳入下个版本）

| 候选 PR | 功能 | 成熟度评估 |
|---|---|---|
| [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) **add-remote-storage skill**（WebDAV/S3 via rclone + systemd） | 远程存储挂载 + `ncl groups config add-mount/remove-mount` 子命令 | 高（长周期 PR，已迭代 3 个月） |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) **feat(setup): 模板化 setup 向导** | 在创建第一个 Agent 时让用户在"全新"与"模板"间选择 | 高（属于模板计划 Part 2） |
| [#2971](https://github.com/nanocoai/nanoclaw/pull/2971) **ncc utility skill** | 提供 host 运维与健康检查 CLI 的统一封装 | 中（新增 utility skill） |
| [#2958](https://github.com/nanocoai/nanoclaw/pull/2958) **add-teams** | Teams 凭据流程改为 CLI-first（`teams login` + `teams app create --json`），告别 Azure 门户 7 步操作 | 中-高 |
| [#2972](https://github.com/nanocoai/nanoclaw/pull/2972) **Wizard UX 升级 + add-slack Socket Mode 修复** | 配对卡片 UI、either/or 选择、Spinner 动画 | 中（含 4 个 commit） |

### 🧭 路线图信号

- **安全加固成为主线**：#2970（公告）+ #2800（CWE-22）+ #2973（供应链）+ #2974（审批 CAS）四件事在 24 小时内同时出现，强烈暗示下个版本会带 **"Security Hardening"** 标签。
- **文档治理告一段落**：#2961–#2965 的集中合并为下个版本提供了"文档已与代码对齐"的可信 baseline。
- **模板化 Agent 创建** 进入交付尾声（#2890 + #2909 两阶段方案 Part 2 完成）。

---

## 7. 用户反馈摘要

> ⚠️ 原始 Issue 评论数均为 0；以下反馈来自 PR 描述中**作者明示的痛点**（这是该仓库当前可观察到的最真实信号）。

### 🗣️ 真实痛点还原

1. **CLI "看起来能用、点开就死"**（#2804）
   - 场景：`ncl messaging-groups create` 在 v2.1.x 上 100% 抛 `NOT NULL constraint failed`
   - 用户原话："**the CLI create path is completely dead**"
   - 满意度：❌ 严重——基础命令完全不可用

2. **技能代码无法热更新**（#2873 / 关联 #2868）
   - 场景：用户先走了 `/add-*` 完成 OAuth 凭据绑定，SDK 升级后想用 `/update-skills` 仅刷新技能代码
   - 痛点：被迫 **重新走凭证流程** 才能更新技能
   - 满意度：❌ 中度——功能性有，但 UX 不连贯

3. **Discord 转发消息丢失语义**（#2922）
   - 场景：用户在 Discord 转发一条消息给 Bot，Agent 只看到 snapshot 包装，看不到原内容
   - 满意度：❌ 中度——影响核心消息通道体验

4. **Teams 配置"过重"**（#2958）
   - 痛点：现有 `add-teams` 流程要在 Azure 门户走 **7 步**操作
   - 满意度：❌ 中度——被社区反复绕开的接入门槛

5. **SDK 升级导致事件类型沉默失效**（#2965）
   - 场景：升级到 `claude-agent-sdk` 0.3.x 后，所有 rate_limit 事件未被识别
   - 满意度：❌ 高严重性——但属静默 bug，多数用户可能尚未察觉

### ✨ 满意度信号

- 已合并的文档治理（#2961–#2965）本身是社区积极贡献的产物，说明外部贡献者愿意花时间做"深度代码对账"工作，**项目贡献者粘性较高**。

---

## 8. 待处理积压

### ⏰ 长期未合并的开放 PR

| PR | 标题 | 创建日期 | 积压天数 | 风险 |
|---|---|---|---|---|
| [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) | **feat: add-remote-storage skill** | 2026-04-02 | **≈ 96 天** | 🟡 优先级评论请求未响应 |
| [#2729](https://github.com/nanocoai/nanoclaw/pull/2729) | docs(add-telegram): 配对状态块名称与 setup 步骤对齐 | 2026-06-11 | ≈ 27 天 | 🟢 低 |
| [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) | fix(security): validate folder + restrict --image-tag (CWE-22 + image pinning) | 2026-06-17 | ≈ 21 天 | 🔴 高——安全 PR 长期挂起 |
| [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) | fix(skills): split pre-flight from credentials | 2026-06-27 | ≈ 11 天 | 🟡 中 |
| [#2909](https://github.com/nanocoai/nanoclaw/pull/2909) | feat(setup): 模板化 setup 向导 | 2026-07-02 | ≈ 6 天 | 🟡 中 |

### 🚨 维护者需重点关注

1. **🔴 [#2800](https://github.com/nanocoai/nanoclaw/pull/2800) — 安全 PR 已挂起 21 天**
   - 解决 `ncl groups create --folder ../../etc`

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-08

## 1. 今日速览

IronClaw 仓库今天呈现**高强度航运日**特征：过去 24 小时产生了 50 条 PR 更新（39 待合并 / 11 已关闭）与 5 条 Issue 变动，但无新版本发布。最大亮点是 **BenKurrek 主导的 Slack OAuth 重构栈（Stack 1/4–7/7）今日集中收口**，多条 XL 级 PR 在一天内陆续关闭，意味着 Slack 模型-B（bot 入口 + installable tools）与个人 OAuth 配对流的整套改造进入收尾阶段。同期，ilblackdragon 正在以 #5791 为基础 PR，系统性推进 "default-backed setter chains" 重构栈（覆盖 11 个 crate）。项目整体处于**重构 + 大型功能落地并行**的状态，开发节奏密集。社区互动度偏低（多数 Issue/PR 评论数 ≤1），主要议程仍由核心维护者主导。

## 2. 版本发布

无新增 Release。本日报周期内没有可下载的二进制或 crate 版本变动。

## 3. 项目进展

今日合并/关闭的重要 PR（按相关性与规模排列）：

- **Slack OAuth 全栈收官**：BenKurrek 的 Slack 重塑栈今日集中关闭，至少 7 条 XL 级 PR 在 24 小时内状态变为 CLOSED：
  - [#5643](https://github.com/nearai/ironclaw/pull/5643)（Stack 1/4）— CI 改造，把 `webui_v2` 全部 JS 测试纳入 CI
  - [#5644](https://github.com/nearai/ironclaw/pull/5644)（Stack 2/4）— Slack 个人 OAuth 基础（dormant additive，77 文件）
  - [#5645](https://github.com/nearai/ironclaw/pull/5645)（Stack 3/4）— **将 Slack 配对码替换为个人 OAuth**（删除主导型重构，121 文件）
  - [#5646](https://github.com/nearai/ironclaw/pull/5646)（Stack 4/4）— `ironclaw-reborn serve` 启动时拒绝旧 `[slack]` 字段（**操作者面向的破坏性变更**）
  - [#5668](https://github.com/nearai/ironclaw/pull/5668)（Stack 5/7）— Slack model-B 重构，bot 渠道作为入口，user-token tools 作为可安装扩展
  - [#5670](https://github.com/nearai/ironclaw/pull/5670)（Stack 6/7）— 最小权限 Slack 工具作用域（每 capability 独立 scope，按需）
  - [#5693](https://github.com/nearai/ironclaw/pull/5693)（Stack 7/7）— Slack 对话绑定持久化
  - [#5773](https://github.com/nearai/ironclaw/pull/5773) — 同步修复 Slack OAuth live canary 配置（让 WebUI QA harness 不再写已被拒绝的 legacy 字段）
  
  **项目意义**：Slack 是 IronClaw 最早的主渠道之一，本次从「pairing code 配对」过渡到「个人 OAuth + bot tools 安装式扩展」，并明确把 `chat:write` 等敏感 scope 下放到具体能力上，是渠道安全模型的一次结构性升级。配套的 CLI breaking change (#5646) 同步完成，可见团队纪律良好（feature → migrate → reject 的分阶段交付）。

- **Trace Commons 的客户端落地**：[#5280](https://github.com/nearai/ironclaw/pull/5280) 今日关闭。这是一条超大 XL 级 PR（含 `DB MIGRATION` 标记），覆盖 23 个范围，引入 instance-wide enrollment、per-user contributor profiles、trace inspection 能力，伴随 Postgres schema 变更。需关注服务器端 PR 是否同步跟上，否则 IronClaw 端可能孤立。

- **"Default-backed setters" 重构栈启航**：ilblackdragon 以 #5791（基础 PR，本日未在 Top 20 出现）为根，新开 11 条衍生 PR（[#5798](https://github.com/nearai/ironclaw/pull/5798)、[#5799](https://github.com/nearai/ironclaw/pull/5799)、[#5800](https://github.com/nearai/ironclaw/pull/5800)、[#5802](https://github.com/nearai/ironclaw/pull/5802)、[#5803](https://github.com/nearai/ironclaw/pull/5803)、[#5804](https://github.com/nearai/ironclaw/pull/5804)、[#5805](https://github.com/nearai/ironclaw/pull/5805)、[#5806](https://github.com/nearai/ironclaw/pull/5806)、[#5807](https://github.com/nearai/ironclaw/pull/5807)、[#5808](https://github.com/nearai/ironclaw/pull/5808)、[#5809](https://github.com/nearai/ironclaw/pull/5809)），覆盖 processes / capabilities / authorization / MCP / wasm / dispatcher / loop_support / reborn CLI / reborn composition / reborn config 等多个 crate，统一把 `ResourceEstimate` / `ResourceUsage` / `ResourceLimits` 等资源结构体的稀疏字面量替换为 `::default().set_*()` 链。
  
  **项目意义**：纯内部重构，零行为变更。目的是**为后续资源字段扩展减少样板噪音**。这是一个有利的「技术债清理」信号，但因 PR 基数大，**评审工作量集中**，维护团队需关注合并节奏与 CI 压力。

## 4. 社区热点

今日评论与互动数据偏低（多在 0–1 之间），以下是仍值得关注的 Top 讨论：

- [Issue #5795 placeholder](https://github.com/nearai/ironclaw/issues/5795) — 评论 1；唯一一条已闭合的 Issue，作者 ilblackdragon（核心维护者），属于典型仓库内占位工单。
- [Issue #5788 Daily ironclaw failure taxonomy 2026-07-08](https://github.com/nearai/ironclaw/issues/5788) — 评论 0 但内容详尽：自动化的 benchmark 失败汇总（pinchbench 当日 3 个 non-pass），与 [Issue #5767](https://github.com/nearai/ironclaw/issues/5767)（2026-07-07 同主题）的失败模式形成连续信号，表明 **`gws_*` 集成任务** 持续掉分，需要回归分析。
- [PR #5280 Trace Commons](https://github.com/nearai/ironclaw/pull/5280) — XL 规模 DB migration PR，今日关闭，是观察社区对实例级 enrollment 模式接受度的重要切入点（目前评论为 undefined）。

> **诉求解读**：用户在 ISSUE 内的可见诉求为 0（多为自动化失败记录与核心维护者内部讨论）；Slack OAuth 栈的大量 PR 关闭反映维护者正在主动重塑对外 API，可能间接导致现有用户升级路径复杂化（已通过 [#5646](https://github.com/nearai/ironclaw/pull/5646) 的破坏性变更与 [#5773](https://github.com/nearai/ironclaw/pull/5773) 的现场 canary 修补做了缓冲）。

## 5. Bug 与稳定性

按严重程度排序：

1. **🟠 高 — 测试套件 flaky，关键路径存在时序竞态**
   - [Issue #5787 flaky: slack_pairing_redeem_rejects_expired_code](https://github.com/nearai/ironclaw/issues/5787)（作者：henrypark133）
   - **症状**：在 "Reborn integration coverage (3)" lane / bucket 3 中间歇性失败——已过期的 Slack pairing code 在 CI 中被意外接受（`Ok(...)` 而非 `assert rejection`）。疑似 **paused tokio clock 与 chrono wall-clock TTL 之间存在 race**。
   - **位置**：`tests/integration/slack_pairing_redeem.rs:215`
   - **当前 fix PR**：❌ 无关联修复 PR（数据中未见）
   - **风险评估**：与正在关闭的 #5645（pairing → OAuth swap）路径相关——若 Slack 配对流最终会被移除，该 flaky 可能自然消失；但若保留残留路径，回归需要专门的 mock-clock 修复。

2. **🟡 中 — Provider 元数据丢失，影响调试与路由可观测性**
   - [Issue #5786 Expose OpenRouter upstream provider on ToolCompletionResponse](https://github.com/nearai/ironclaw/issues/5786)（作者：zetyquickly）
   - **症状**：通过 OpenRouter（`openai_compatible` 后端 → `https://openrouter.ai/api/v1`）调用时，OpenRouter 返回顶层 `provider` 字段（`Fireworks`/`Parasail`/`GMICloud`/`SiliconFlow` 等）与 `gen-…` generation id，但 IronClaw 未把这些向上透传到 `ToolCompletionResponse`。
   - **当前 fix PR**：❌ 无
   - **影响**：用户无法审计"工具调用实际命中了哪家上游"，对生产路由/账单核对造成障碍。

3. **🟢 低 — 自动化的失败分类报告（非代码 bug）**
   - [Issue #5788](https://github.com/nearai/ironclaw/issues/5788) 与 [Issue #5767](https://github.com/nearai/ironclaw/issues/5767) 是由 pranavraja99 维护的每日失败分类。pinchbench 的 `gws_*` 集成任务连续两日 0 分，是潜在的功能退化信号。

## 6. 功能请求与路线图信号

- **OpenRouter 上游 Provider 透出**（[Issue #5786](https://github.com/nearai/ironclaw/issues/5786)）：这是一个**合理的可观测性扩展**——把 OpenRouter 的 `provider` + `gen-*` id 暴露在 `ToolCompletionResponse` 上。在已有 `openai_compatible` 后端架构下，工程量应较小（serializer 字段扩展）。**有较高概率纳入下一版本**。
- **Trace Commons 实例级 enrollment**（[PR #5280](https://github.com/nearai/ironclaw/pull/5280)，已关闭）：路线图强烈信号——从 per-scope 个人邀请迈向 instance-wide + per-user profiles，是 IronClaw 走向多租户 SaaS 化的关键一步。
- **Slack OAuth 重塑**（栈 #5643–#5693 全部关闭）：完成 Slack 渠道**安全模型与 UX 模型**的同时升级；同时通过 #5773 把"现场 canary 失败"转化为自动化 recovery。

## 7. 用户反馈摘要

由于今日 Issue 端评论近零（多为 0–1 条），直接的用户声音较弱。可识别的信号包括：

- **集成测试调试体验差**（[#5787](https://github.com/nearai/ironclaw/issues/5787)）：tokio paused clock 与 chrono wall-clock 的微妙差异，导致 CI flaky，维护者需要更稳健的时间抽象。这是开发者侧的真实痛点。
- **多供应商路由缺乏透明度**（[#5786](https://github.com/nearai/ironclaw/issues/5786)）：用户在生产环境想知道"这次到底走了哪个上游 / 哪一代模型"，目前没有路径。这是企业部署的常见合规需求。
- **Benchmark 持续掉分**（[#5788](https://github.com/nearai/ironclaw/issues/5788)、[#5767](https://github.com/nearai/ironclaw/issues/5767)）：`gws_*` 任务两日 0 分暗示着工具/通道集成质量波动，但用户无平台反馈，需要 maintainer 主动跟进。

整体可见用户满意度无显性数据，但 Slack 改造栈 #5646 引入了**配置层面的破坏性变更**，未来一周需要观察是否有用户因升级受阻而发问。

## 8. 待处理积压

| 项目 | 链接 | 关注点 |
|---|---|---|
| PR #5791（**基础 PR**） | 推断：nearai/ironclaw PR #5791 | ilblackdragon 的 default-setters 重构栈所有 11 条子 PR 都依赖该 PR；它是本次重构能否合并的**关键路径节点**。若 #5791 阻塞过久，整支栈会全部停滞。建议维护者优先审 #5791。 |
| PR #5643（Stack 1/4） | [#5643](https://github.com/nearai/ironclaw/pull/5643) | CI glob 扩到 `webui_v2/static/js` 全部页面；Slack OAuth 栈的前置 CI 改革，规模 XL。它仍是 OPEN 状态（与栈内后续都已 CLOSED 不同步），需关注是否仍需合并。 |
| Issue #5787 flaky 测试 | [#5787](https://github.com/nearai/ironclaw/issues/5787) | 无 fix PR，阻塞 CI 绿色信号。 |
| Issue #5786 OpenRouter provider | [#5786](https://github.com/nearai/ironclaw/issues/5786) | 用户明确诉求，无跟进 PR。 |
| PR #5280 Trace Commons | [#5280](https://github.com/nearai/ironclaw/pull/5280) | 虽已关闭，但配套服务器端 PR 的状态、社区对 per-user profile 的接受度尚不清晰，建议 maintainer 后续以集成进展形式更新。 |

---

**整体健康度判断**：🟢 **活跃且纪律良好**。开发节奏密集但有序（Slack 重构栈采用编号化 stack 1/N 分阶段交付，并保留 revert point），资源管理抽象正在进行系统性重构（有利

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-07-08** | 数据周期：过去 24 小时

---

## 1. 今日速览

LobsterAI 在过去 24 小时呈现**高强度开发+安全加固并行的状态**。一方面，团队发布了 **2026.7.7 版本**，合并了 15 个 PR（涉及 Cowork 稳定性、定时任务 UI 重构、子代理协作、邮件多账户等重大特性）；另一方面，社区集中披露了 **3 个安全漏洞**（Issue #2286/#2287/#2288），涉及本地 Token 代理、NIM 出站媒体与 HTML 预览沙箱，安全性被显著提上议程。整体来看，项目活跃度处于高位（24h PR 吞吐量 16 条），但同时伴随大量 4 月遗留的"stale"工单集中清理，仓库健康度得到明显改善。

---

## 2. 版本发布

### 🚀 LobsterAI 2026.7.7（[Release 链接](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.7.7)）

通过 [PR #2291](https://github.com/netease-youdao/LobsterAI/pull/2291) 将 `release/2026.7.6` 合入 `main`，主要更新：

- **定时任务 UI 重构**（[PR #2273](https://github.com/netease-youdao/LobsterAI/pull/2273)）：新增状态 chip、toggle、搜索与乐观更新
- **新增 xAI (Grok) OAuth 登录**（[#2273 同源 PR](https://github.com/netease-youdao/LobsterAI/pull/2273)）
- **Cowork 子代理协作能力**（[PR #2285](https://github.com/netease-youdao/LobsterAI/pull/2285)）：多 agent 委托白名单 + 子会话延续
- **Steer 后续路由稳定化**（[PR #2292](https://github.com/netease-youdao/LobsterAI/pull/2292)）
- **邮件技能多账户**（[PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275)）：内置 imap-smtp-email 支持多账户、连通性测试、删除确认
- **定时任务通知目标可选**（[PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290)）
- **运行时可靠性修复**：Cowork 压缩重试卡死（[#2289](https://github.com/netease-youdao/LobsterAI/pull/2289)）、分析事件上报（[#2245](https://github.com/netease-youdao/LobsterAI/pull/2245)）、紧凑菜单宽度还原（[#2268](https://github.com/netease-youdao/LobsterAI/pull/2268)）

> **迁移注意**：邮件技能升级时保留旧版 `.env` 单账户兼容性，建议用户在设置中迁移至"账户管理"面板以便使用连通性测试与多账户能力。无破坏性 API 变更。

---

## 3. 项目进展

### 🔧 关键修复与稳定性

| 类别 | PR | 意义 |
|---|---|---|
| OpenClaw Token Proxy 请求体大小限制 | [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407) | 防止恶意本地进程通过 10MB 限制缓解 OOM 攻击面 |
| MCP Bridge Promise 链处理 | [#1408](https://github.com/netease-youdao/LobsterAI/pull/1408) | 修复未捕获异步错误导致连接挂起或 Node 崩溃 |
| SqliteStore.set 防抖批量落盘 | [#1410](https://github.com/netease-youdao/LobsterAI/pull/1410) | 流式场景性能优化，避免高频同步 I/O 阻塞事件循环 |
| 迁移完成标志事务一致性 | [#1415](https://github.com/netease-youdao/LobsterAI/pull/1415) | 保证 COMMIT 成功后才标记迁移完成，避免历史 MEMORY.md 数据丢失 |
| CronJobService pollOnce 重入并发 | [#1420](https://github.com/netease-youdao/LobsterAI/pull/1420) | 修复幽灵事件与状态风暴（关联 #1107） |
| buildUserMemoriesXml 查询缓存 | [#1421](https://github.com/netease-youdao/LobsterAI/pull/1421) | 5 秒窗口合并查询 + 失效即拿新数据 |
| NIM 群组类型枚举映射 | [#1419](https://github.com/netease-youdao/LobsterAI/pull/1419) | 修正 `V2NIMTeamType` 常量错误 |

### ✨ 功能演进
- **子代理协作**（[#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)）：从单体 agent 走向多 agent 委托编排，与 Cowork 子会话模型深度集成
- **定时任务通知目标可选化**（[#2290](https://github.com/netease-youdao/LobsterAI/pull/2290)）：补足通知灵活性
- **邮件多账户**（[#2275](https://github.com/netease-youdao/LobsterAI/pull/2275)）：从单账户走向账户矩阵管理

整体看，**24h 内合并 PR 数（15）已超过 4 月单周合并量**，项目推进节奏明显加快。

---

## 4. 社区热点

> 24h 内评论数最高 / 最新创建 / 跨多条目互动最高的议题：

| 排名 | 条目 | 热度指标 | 简评 |
|---|---|---|---|
| 🔥 1 | [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286) 无认证本地 Token 代理可被任意进程重放 | 安全披露 | 严重性最高，攻击面广，绑定 127.0.0.1 但同机任意进程可访问；社区最迫切的修复诉求 |
| 🔥 2 | [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM 出站媒体可外泄本地任意文件 | 安全披露 | 经"助手批准"即可外发绝对路径文件，绕过出站媒体沙箱 |
| 🔥 3 | [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML 预览服务跟随符号链接 | 安全披露 | 词法路径检查可被符号链接绕过，等价于本地任意文件读取 |
| 💬 4 | [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 多 agent "关于你" 内容联动 | 用户功能困惑 | 多用户场景下不同 agent 无法保留独立画像 |
| 📌 5 | [Issue #1411](https://github.com/netease-youdao/LobsterAI/issues/1411) 概览页时间维度筛选器无响应 | 已关闭（stale） | 复现路径明确，社区已认可是 bug |

**诉求分析**：当日热点由**安全研究员集中披露的 3 个本地攻击面议题**主导，反映 LobsterAI 在本地代理、媒体出站、文件预览三大模块的隔离边界存在共性问题，与此前 [#1407](https://github.com/netease-youdao/LobsterAI/pull/1407)（OpenClaw Token Proxy）整改方向一致，**建议维护者统一评审本地 IPC/代理层安全模型**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重级 | 条目 | 状态 | 已有 Fix |
|---|---|---|---|
| 🔴 P0 - 安全 | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) 无认证本地 Token 代理可被任意进程重放 | OPEN | ❌ 待修复 |
| 🔴 P0 - 安全 | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM 出站媒体任意本地文件外泄 | OPEN | ❌ 待修复 |
| 🔴 P0 - 安全 | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML 预览跟随符号链接 | OPEN | ❌ 待修复 |
| 🟠 P1 - 数据 | [#1414](https://github.com/netease-youdao/LobsterAI/issues/1414) 概览页"总会话数"恒为 0 | CLOSED（stale）| ⚠️ 关闭但未明确修复 |
| 🟠 P1 - UI | [#1416](https://github.com/netease-youdao/LobsterAI/issues/1416) 概览页英文切换布局错乱 | CLOSED（stale）| ⚠️ 关闭但未明确修复 |
| 🟡 P2 - 功能 | [#1409](https://github.com/netease-youdao/LobsterAI/issues/1409) 跨天定时任务未生成历史记录 | CLOSED（stale）| ⚠️ 关闭但未明确修复 |
| 🟡 P2 - 交互 | [#1411](https://github.com/netease-youdao/LobsterAI/issues/1411) 时间维度筛选器点击无响应 | CLOSED（stale）| ⚠️ 关闭但未明确修复 |
| 🟢 P3 - 体验 | [#1413](https://github.com/netease-youdao/LobsterAI/issues/1413) skills 较多时输入框展示不友好 | CLOSED（stale）| ⚠️ 关闭但未明确修复 |

> ⚠️ **健康度提示**：本日有 5 条 stale 工单被关闭，但合入描述中并未看到对应的功能/修复 PR 链接。若这些关闭是机器人"长时间无活动自动关闭"，存在**用户回访无修复预期**的风险，建议维护者回查并补充手动确认。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 路线图契合度 |
|---|---|---|
| **多 agent 独立 USER.md 隔离** | [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 高 — [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 已实现子代理委托白名单，下一阶段很可能扩展至独立上下文 |
| **xAI (Grok) OAuth 登录** | 已在 2026.7.7 发布 | ✅ 已交付 |
| **定时任务通知目标可选化** | [PR #2290](https://github.com/netease-youdao/LobsterAI/pull/2290) | ✅ 已合并至 2026.7.7 |
| **邮件多账户管理** | [PR #2275](https://github.com/netease-youdao/LobsterAI/pull/2275) | ✅ 已合并至 2026.7.7 |
| **概览页英文 i18n 自适应** | [Issue #1416](https://github.com/netease-youdao/LobsterAI/issues/1416) | 中 — 国际化是长期债务 |
| **概览页会话数统计准确性** | [Issue #1414](https://github.com/netease-youdao/LobsterAI/issues/1414) | 中 — 涉及事件埋点与 [#2245](https://github.com/netease-youdao/LobsterAI/pull/2245) 分析修复可能间接改善 |

**信号**：用户画像隔离、xAI 接入、IM 增强已成 7 月主线，与官方发版节奏吻合。

---

## 7. 用户反馈摘要

从开放/已关闭 Issue 评论提炼：

- 😟 **痛点：多 agent 缺乏隔离**（[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）  
  用户 @yepcn 反馈："在软件里建立了多个 agent，最近发现只要改了一个 agent 设置里的'关于你'页面内容或者修改 USER.md 里的内容，其他 agent 里也同步进行了修改，这样就没法对不同 agent 建立不同的需求。"  
  → **典型诉求**：多 agent 场景下需要每 agent 独立画像与上下文。

- 😟 **痛点：概览页统计明显异常**（[#1414](https://github.com/netease-youdao/LobsterAI/issues/1414)）  
  "总会话数始终显示为 0，但同页面的'总 API 调用数'为 432、'今日用量'为 444.39 积分"——数据自洽性受质疑。

- 😟 **痛点：英文 UI 适应性差**（[#1416](https://github.com/netease-youdao/LobsterAI/issues/1416)）  
  切换英文后额度数字与标签文本重叠，**i18n 自适应布局** 是出海用户核心痛点。

- 😟 **痛点：定时任务跨天不生成历史**（[#1409](https://github.com/netease-youdao/LobsterAI/issues/1409)）  
  涉及定时任务在跨天触发下的持久化路径，与 [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) UI 重构可能已涵盖部分问题。

- 😐 **满意信号**：官方 2026.7.7 版本合并 8 项功能/修复，社区驱动披露的安全问题在 24h 内获得官方响应通道。

---

## 8. 待处理积压

> 长期未响应 / 仍处 Open 状态且优先级较高的项，建议维护者关注：

| 条目 | 创建日期 | 已开放天数 | 关注点 |
|---|---|---|---|
| [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286) 无认证本地 Token 代理 | 2026-07-07 | 1 | 🔴 安全 P0，任意本地进程可重放受害者 API 凭证 |
| [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287) NIM 出站媒体文件外泄 | 2026-07-07 | 1 | 🔴 安全 P0，已批准远程访问路径绕过 |
| [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288) HTML 预览符号链接 | 2026-07-07 | 1 | 🔴 安全 P0，本地任意文件读取 |
| [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 多 agent USER.md 联动 | 2026-07-07 | 1 | 🟠 用户体验，影响多 agent 用户群体 |
| [PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 依赖批量升级（40→43） | 2026-04-02 | ~97 | 🟡 大版本跨级升级，包含 electron 主版本突破，存在回归风险，搁置时间较长 |

**建议**：
1. **优先处理 3 个安全披露**，建议设立统一修复 PR 并在 CHANGELOG 与 2026.7.8 安全公告中同步披露；
2. 对 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) Electron 大版本升级做一次专项评审，决定合并、拆分或回退；
3. 对今日批量关闭的 5 条 stale Issue 复查关闭理由，避免"静默关闭"伤害贡献者复访意愿。

---

> 📊 **项目健康

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw (TinyAGI) 项目动态日报

**日期：2026-07-08**
**仓库：github.com/TinyAGI/tinyagi**

---

## 1. 今日速览

今日 TinyAGI 仓库呈现出 **"高度活跃但风险高度集中"** 的特殊态势：过去 24 小时内新增 9 条 Issues，全部为安全类披露报告，且全部来自同一作者 YLChen-007，时间戳高度一致（均为 2026-07-07），呈现典型的 **协调式漏洞披露（Coordinated Disclosure）** 特征。仓库无 PR 提交、无版本发布、无任何合并活动，表明维护团队可能尚未对披露做出响应。**项目健康度评估：⚠️ 高风险观望期**，需密切关注官方对披露内容的确认与修复进展。

---

## 2. 版本发布

今日无新版本发布，详见 [Releases 页面](https://github.com/TinyAGI/tinyagi/releases)。

---

## 3. 项目进展

今日 **无任何 PR 合并或关闭**，项目代码层面无实质性推进。所有 Issues 均处于 OPEN 状态，未见维护者发出任何修复性 PR 或 Acknowledgement（致谢/确认）回复。

> **推进度评估：0** —— 仓库在功能开发、代码迭代层面处于停滞状态。

---

## 4. 社区热点

今日社区关注的焦点 **完全集中于安全漏洞披露**。以下 9 条 Issues 均标记为 `[Security]`，全部由同一报告者 YLChen-007 提交，评论数与点赞数均为 0（可能因披露时间过短，尚未发酵），但议题本身具备极高讨论潜力。

| # | 标题摘要 | 链接 |
|---|---------|------|
| #286 | 未认证本地控制 API 可篡改设置、覆盖 Agent Prompt 并访问事件流 | [Issue #286](https://github.com/TinyAGI/tinyagi/issues/286) |
| #287 | 未认证配对管理 API 可任意审批待定通道发送者 | [Issue #287](https://github.com/TinyAGI/tinyagi/issues/287) |
| #288 | 未认证本地控制平面泄露实时事件并允许持久化设置修改 | [Issue #288](https://github.com/TinyAGI/tinyagi/issues/288) |
| #289 | 未认证调用者可经出站通道附件外泄任意本地文件 | [Issue #289](https://github.com/TinyAGI/tinyagi/issues/289) |
| #290 | 通过 `POST /api/message` 注入终端转义符以伪造操作员日志 | [Issue #290](https://github.com/TinyAGI/tinyagi/issues/290) |
| #291 | Anthropic Adapter 无条件使用 `--dangerously-skip-permissions` 禁用危险工具确认 | [Issue #291](https://github.com/TinyAGI/tinyagi/issues/291) |
| #292 | 未认证管理 API 允许持久化设置与 Agent Prompt 修改 | [Issue #292](https://github.com/TinyAGI/tinyagi/issues/292) |
| #293 | 未认证 Agent ID 路径遍历逃逸工作区根目录 | [Issue #293](https://github.com/TinyAGI/tinyagi/issues/293) |
| #294 | 未认证控制平面路由允许系统 Prompt 覆盖与守护进程重启 | [Issue #294](https://github.com/TinyAGI/tinyagi/issues/294) |

**诉求分析**：报告者集中指出 TinyAGI 的控制平面（control-plane）路由、SSE 事件流、文件外发、配对管理等关键接口 **完全缺乏身份认证与授权边界**，且 Anthropic CLI 调用方式存在危险配置。这是一个涉及多个攻击面的 **系统性安全问题**，而非孤立 bug。

---

## 5. Bug 与稳定性

今日报告的 9 条问题全部归类为 **安全漏洞**，按严重程度由高到低排列如下：

### 🔴 严重（Critical）

| # | 漏洞类型 | 影响范围 | 是否有 Fix PR |
|---|---------|---------|--------------|
| [#291](https://github.com/TinyAGI/tinyagi/issues/291) | Claude `--dangerously-skip-permissions` 无条件启用 | 远程未认证攻击者可绕过 Anthropic 所有危险工具确认 | ❌ 无 |
| [#289](https://github.com/TinyAGI/tinyagi/issues/289) | 任意本地文件外泄 | 未认证调用者可通过出站附件读取服务器本地文件 | ❌ 无 |
| [#293](https://github.com/TinyAGI/tinyagi/issues/293) | 路径遍历逃逸工作区 | Agent ID 设为 `..` 可突破沙箱根目录 | ❌ 无 |
| [#286](https://github.com/TinyAGI/tinyagi/issues/286) | 控制平面完全无认证 | 可篡改设置、覆盖 Prompt、订阅事件流 | ❌ 无 |

### 🟠 高危（High）

| # | 漏洞类型 | 影响范围 | 是否有 Fix PR |
|---|---------|---------|--------------|
| [#292](https://github.com/TinyAGI/tinyagi/issues/292) | 管理 API 无认证 | 持久化设置与 Prompt 被未授权修改 | ❌ 无 |
| [#288](https://github.com/TinyAGI/tinyagi/issues/288) | 本地控制平面泄露 | 同主机进程可读取实时事件流 | ❌ 无 |
| [#294](https://github.com/TinyAGI/tinyagi/issues/294) | 守护进程可被远程重启 | 系统 Prompt 可被覆盖，进程可被重启 | ❌ 无 |

### 🟡 中危（Medium）

| # | 漏洞类型 | 影响范围 | 是否有 Fix PR |
|---|---------|---------|--------------|
| [#287](https://github.com/TinyAGI/tinyagi/issues/287) | 配对码任意审批 | 未认证者可绕过发送者审批流程 | ❌ 无 |
| [#290](https://github.com/TinyAGI/tinyagi/issues/290) | 终端转义注入 | 操作员日志可被伪造 | ❌ 无 |

**结论**：全部 9 个漏洞 **均无对应修复 PR**，处于完全暴露状态。

---

## 6. 功能请求与路线图信号

今日提交内容 **未涉及任何新功能请求**，均为安全漏洞披露。但从披露内容可推断出 **隐含的路线图信号**：

- **认证 / 授权层（AuthN/AuthZ）**：所有披露都指向同一根本缺陷——缺乏控制平面认证机制。修复方案大概率会引入 Bearer Token、API Key、或基于配对码的会话机制。
- **Anthropic Adapter 安全加固**：需要重新评估 `--dangerously-skip-permissions` 的使用条件，可能引入交互式确认或白名单。
- **文件访问沙箱**：Agent ID 解析与文件外发路径校验需要重构，加入 canonical path 检查。

**短期（下一版本）纳入概率**：极高 —— 这批漏洞的严重性意味着任何对外暴露 TinyAGI 服务的部署都处于风险中，修复 PR 大概率会在近期版本中合并。

---

## 7. 用户反馈摘要

由于 9 条 Issues 评论数均为 0，目前 **无法从社区评论中提炼真实用户痛点**。但从披露者的描述中可还原部分使用场景与反馈倾向：

- **痛点 1 —"开发者本地服务被误认为是安全的"**：报告者反复强调 TinyAGI 将控制平面暴露在 "localhost-oriented" 的设计中却未提供认证边界，这反映出 **项目文档或默认配置可能未警示部署者** 该服务不应直接暴露公网。
- **痛点 2 —"危险参数被硬编码开启"**：Anthropic CLI 调用时使用 `--dangerously-skip-permissions` 是 **无条件启用** 而非可配置项，剥夺了用户在多租户场景下的选择权。
- **满意点**：报告中描述的接口行为（REST + SSE、配对管理、出站附件）显示出 TinyAGI 的 **功能完整性较好**，问题集中在"开放了但未加锁"而非"功能缺失"。

> **建议**：维护者应发布官方安全公告（Security Advisory），并在 README 中明确警示用户 `POST /api/message` 等接口的暴露风险。

---

## 8. 待处理积压

**优先级提醒**：

1. 🚨 **9 条 [Security] Issues 全部 OPEN 且 0 回复** —— 这是当前最严重的积压。建议维护者：
   - 24 小时内对每条 Issue 至少发出 Acknowledgement；
   - 评估是否触发 CVE 编号分配；
   - 协调内部修复 PR 并对原始报告者发起 Private Disclosure 流程（若尚未私下沟通过）。

2. **历史 Issues/PRs 排查**：由于本次披露显示多个攻击面共享同一根因（缺乏认证），建议维护者同时审查 **其他控制平面路由** 是否存在同类问题，而非仅修复已披露的 9 处。

3. **版本发布计划**：在修复合并后，应尽快发布 **patch 版本**（如 `0.x.y+1`），并撰写 Release Notes 说明安全修复内容。

---

## 附录：数据快照

| 指标 | 数值 |
|------|------|
| 24h 新开/活跃 Issues | 9 |
| 24h 已关闭 Issues | 0 |
| 24h PR 活动 | 0 |
| 24h Release 数 | 0 |
| 安全类 Issues 占比 | 100% (9/9) |
| 唯一报告者 | YLChen-007 |

---

*报告生成基于 2026-07-08 当日 GitHub 公开数据。*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-08

> 数据来源：GitHub 仓库 agentscope-ai/CoPaw（数据中仓库路径显示为 QwenPaw，疑为仓库迁移或别名映射）
> 统计周期：过去 24 小时（截至 2026-07-08）

---

## 1. 今日速览

CoPaw 项目今日处于 **v2.0.0 预发布节奏中的高强度迭代期**：发布了一个 beta 版本（v2.0.0-beta.3），同日开启下一个版本（v2.0.0b4）的版本号 bump PR。社区活跃度较高，过去 24 小时共产生 **38 个 PR**（待合并 23，已关闭 15）和 **16 个 Issue**（新开/活跃 12，已关闭 4）。讨论焦点集中在 **前端稳定性（大会话/工具历史渲染崩溃）**、**Windows 沙箱兼容性** 和 **v2.0.0 预发布回归**。整体看，项目处于"快迭代+密切 QA"的状态，issue 关闭率 25%，PR 关闭率约 40%，属于高节奏但可控的范围。

---

## 2. 版本发布

### 🚀 v2.0.0-beta.3

- **类型**：Beta 预发布版本
- **发布时间**：2026-07-07
- **Release 链接**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3

**关键改动**（来自 PR 摘要）：
- **#5743** `fix(ci)`：在 macOS 的 bash 3.2 下保护空 `extra_flags` 展开（CI 兼容修复）
- **#5738** `feat(auth)`：增强限流机制，引入**多维度保护**（multi-dimensional rate limiting）

**后续节奏**：同一天已有 **PR #5837（bump version 2.0.0b4）** 被关闭，意味着团队正在为下一个 beta 做准备。**Release Duty** Issue #5833 已自动开启 v2.0.0-beta.3 的安装验证流程，截止时间为发布后 4 小时。

**⚠️ 破坏性变更 / 迁移提示**：从 v1.x 升级到 v2.0.0-beta 的用户请注意：
- 限流机制从单维度升级为多维度，行为可能略有差异
- 安装验证涉及四个 checkpoint，部署前请关注 Issue #5833 状态
- Issue #5273 是 v2.0.0 预发布 Bug 集中跟踪帖，建议作为升级时的参考入口

---

## 3. 项目进展

过去 24 小时共有 15 个 PR 被合并/关闭，推进了多个方向：

| 类别 | PR | 意义 |
|---|---|---|
| 稳定性修复 | **#5786**（三合一修复 #5709/#5773/#5784） | 修复 Console 模型匹配未校验 `provider_id` 导致压缩阈值错乱等三个 bug，已合并 |
| 安全修复 | **#5843** fix(tool_guard)：识别 `find -delete` 危险命令 | 修复 Issue #5842 提到的 file_guard 绕过漏洞 |
| 平台兼容 | **#5839** static `project.urls` | 让 PyPI 包能正确关联到 GitHub 仓库，激活 Dependents 页面 |
| 桌面体验 | **#5832** 移除 session approval level 的 default mode | 减少误授权风险 |
| 打包改进 | **#5814** Bundle Node 运行时到 ACP desktop | 让使用 `npx` 的内置 ACP 代理不再要求用户单独安装 Node |
| 渠道扩展 | **#5585** Matrix 频道流式模式 | 参考 Discord 的 TTFT 后立即推送体验 |
| 内存系统 | **#5820** 使用量感知的 auto memory search | 完善 ReMe Light 嵌入配置对齐 |
| 插件化 | **#4693** 插件注册自定义 channel | 替换旧的 `custom_channels/` 目录机制，引入 schema 驱动 UI |

**整体评估**：项目在 v2.0.0 预发布阶段保持了 **多线并进** 的节奏——稳定性、安全、桌面 UX、渠道扩展均有推进，未出现明显偏科。

---

## 4. 社区热点

按评论数与活跃度排序，今日最值得关注的话题：

| 排名 | Issue/PR | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | **#5401** Console 大工具历史会话前端崩溃 | 15 | 前端 `type: "data"` 渲染兼容 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| 2 | **#5273** v2.0.0 预发布 Bug 集中跟踪 | 10 | 预发布 QA 总入口 | [#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) |
| 3 | **#5479** 大会话文件（>500KB）前端崩溃 | 6 | 前端渐进式加载需求 | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) |

**热点诉求分析**：

- **前端稳定性是当下最强烈的社区声音**。#5401（15 条评论）与 #5479（6 条评论）都指向同一个根源——**前端在面对大规模会话历史/工具调用块时的渲染鲁棒性不足**。两者一起反映出真实使用场景下，会话累积到一定规模就会直接白屏，是典型的"用得越久越不能用"痛点。建议维护者将这两个 issue 关联考虑，作为同一类问题统一治理。

- **#5273 作为预发布 QA 中心** 起到组织者作用，10 条评论意味着很多用户在用它集中反馈 v2.0.0 预发布问题，是衡量 v2.0.0 GA 准备度的核心指标。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重（崩溃/白屏/数据丢失风险）

| Issue | 描述 | 状态 | 链接 |
|---|---|---|---|
| **#5401** | 包含大量工具调用历史的会话在 Console 前端崩溃/白屏，根因在后端将 `tool_use/tool_result` 转为 `type:"data"` 后前端组件未适配 | OPEN，无关联 fix PR | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5401) |
| **#5479** | 单个会话 JSON >500KB 后 Web UI 报"渲染此页面时发生了意外错误" | OPEN，无 fix PR | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5479) |
| **#5829** | Windows AppContainer 沙箱 ACE 污染系统目录，导致 Hermes Desktop 等 Chromium 应用 GPU 进程崩溃 | OPEN，无 fix PR（沙箱安全类，建议优先） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5829) |
| **#5789** | 上下文压缩时模型输出超过 JSON Schema `maxLength: 200` 导致 `jsonschema.validate()` 崩溃 | OPEN，无 fix PR | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5789) |

### 🟠 中严重（功能不可用/安全隐患）

| Issue | 描述 | 状态 | 链接 |
|---|---|---|---|
| **#5842** | `find ... -delete` 绕过 file_guard 的工作区外删除检查 | OPEN，**#5843 已提交 fix PR** ✅ | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5842) |
| **#5835** | 钉钉 DM 中 `/stop` 命令因 `conversation_id` 后 8 位相同导致跨用户任务误取消 | OPEN，无 fix PR | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5835) |
| **#5759** | 计划模式反复读取同一文件（实测 5 次），缺少去重 | OPEN，无 fix PR | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5759) |
| **#5775** | Auto-memory interval 因 MemoryMiddleware 在每次请求重建 agent 时丢失 state 而不触发 | **已关闭** ✅（v2.0.0-beta.3 修复或路线图纳入） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5775) |
| **#5774** | Google Gemini 渠道报错 | **已关闭** ✅ | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5774) |

**严重度结论**：仍有 4 个高严重度 Bug 未有 fix PR，其中 **#5401 与 #5479 高度相关**，建议打包解决；**#5829 涉及 Windows 沙箱与第三方应用兼容性**，建议作为安全优先项。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有 PR 信号 | 纳入下一版本可能性 |
|---|---|---|---|
| 定时任务结果弹窗**增加用户开关**（用户可自选弹窗/不弹窗 + 停留时长） | [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | 无 | 中——反馈 #4776 的旧 PR #4803 一刀切关掉弹窗引发反弹，社区明显倾向"提供开关"而非默认行为 |
| **关闭按钮最小化到托盘**（类微信/QQ 行为） | [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | 无 | 高——用户已给出明确行为规范，且 Desktop 形态天然需要 |
| 大会话文件**渐进式加载** | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 无 | 高——真实使用场景驱动，影响留存 |
| **`rejects_media` 按媒体类型粒度化**（避免一个媒体类型失败把其他全部 strip） | [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | 无 | 中——设计清晰，技术改动可控 |
| coding 模式支持**选择隐藏文件夹** | [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | 无 | 低——已关闭，可能是临时方案 |
| Agent 头像字段 | [#5826](https://github.com/agentscope-ai/QwenPaw/pull/5826) | **PR #5826 已开** ✅ | 高——已有 first-time-contributor 提交 PR |
| `grep_search` 增加 `show_file` 参数 | [#5840](https://github.com/agentscope-ai/QwenPaw/pull/5840) | **PR #5840 已开** ✅ | 高——已实现 |
| `grep_search` 支持管道分隔的多关键词 | [#5834](https://github.com/agentscope-ai/QwenPaw/pull/5834) | **PR #5834 已开** ✅ | 高——已实现 |
| Desktop 自动识别聊天输出中的本地路径并点击打开文件管理器 | [#4830](https://github.com/agentscope-ai/QwenPaw/pull/5836) | **PR #5836 已开** ✅ | 高——已实现 |
| 飞书 Markdown 图片作为 image part 发送 | [#5823](https://github.com/agentscope-ai/QwenPaw/pull/5823) | **PR #5823 已开** ✅ | 高——已实现 |
| `qwen3-rerank` 用于 memory search | [#5669](https://github.com/agentscope-ai/QwenPaw/pull/5669) | **PR #5669 已开** ✅ | 中 |
| Windows 桌面 GUI 自动化（UIA + Tauri Control Mode） | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187) | **PR #5187 已开** ✅ | 中——大型功能 |

**路线图洞察**：桌面体验优化（托盘、路径点击、头像）与工具改进（grep_search、computer-use）形成明显两极，反映出 **Desktop + 工具生态** 是 v2.0.0 之后的重要发力方向。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

**🔴 痛点类（高频/高强度）**

- **"会话越用越不能用"**——#5401 与 #5479 共同体现：用户长期使用后，前端因会话历史膨胀而崩溃，**破坏"沉淀型"使用场景**。一位用户（#5479）直言"只能删除该会话才能继续使用"。
- **"开发者不要替我做选择"**——#5797 关于定时任务弹窗的反馈尤其尖锐："千问不要因噎废食，有人反对，就都关掉了……"。反映出 **PR #4803 一刀切关闭弹窗** 引发了真实用户反弹，部分用户依赖弹窗来"提醒自己起身活动"。

**🟡 期望类（潜在需求）**

- **桌面行为向主流 IM 看齐**——#5312 直接对比微信、QQ、钉钉，期望"点关闭→缩到托盘→右键退出才是真退出"。
- **路径可点击**——#5836 闭合的 #4830 反映出用户希望在 Desktop 中点击聊天里的本地路径直接打开文件管理器，体现 **Desktop 与操作系统的深度集成** 需求。

**✅ 已解决带来的正向反馈**

- #5775 关闭（auto-memory 修复）、#5774 关闭（Google Gemini 渠道）、#5785 关闭（隐藏文件夹），三者关闭反映出维护者响应较快。

---

## 8. 待处理积压

需要维护者重点关注的长期未充分响应项：

| Issue/PR | 标题 | 积压时长 | 建议关注点 |
|---|---|---|---|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | Console 大工具历史前端崩溃 | 创建于 2026-06-23（已 ~14 天），15 评论无 fix PR | **最高优先级**——影响核心 Console 使用 |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | 大会话文件前端崩溃 | 创建于 2026-06-24

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-07-08**
**仓库：**[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日保持高强度的多线并发开发节奏：**过去 24 小时共有 50 个 PR 处于活跃状态**（45 待合并、5 已关闭），**10 个 Issue 更新**（8 持续活跃、2 关闭）。当日没有版本发布，但项目整体呈现出"集中修复 MCP/Runtime 安全与稳定性、稳步推进 v0.8.3 周边工作"的清晰格局。今日值得关注的两条主线是：(1) **`agent` 主循环的多次内存与权限回归**正在被系统性收口（MCP schema 克隆、excluded_tools 强制、scope 鉴权），(2) **Telegram 通道的端到端可用性问题**——从 `bind-telegram` 错误提示到文档示例——在一个工作日内被连续 PR 修复。整体活跃度评估：**高（High）**，社区投入和风险收敛并行。

---

## 2. 版本发布

**无新版本发布。** 当前主线版本仍维持在 v0.8.1，相关工作通过 [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)（已关闭）与 [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)（v0.8.3 tracker，p2）跟踪，尚未切到新 tag。

---

## 3. 项目进展

**今日合并/关闭的关键 PR（5 条已关闭）：**

| PR | 作者 | 说明 |
|---|---|---|
| [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) | yaotukeji | 在 zerocode 的 Channels 配置下新增 "Global settings" 入口，让根级字段（`show_tool_calls`、`ack_reactions`、`message…`）可被发现 |
| [#8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820) | yaotukeji | 对应 [#8757](https://github.com/zeroclaw-labs/zeroclaw/issues/8757) 的 channels root settings 修复（hotfix 提交 `e85b19319`） |
| [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822) | yaotukeji | 同一 [#8757](https://github.com/zeroclaw-labs/zeroclaw/issues/8757) 的发现性入口补齐 PR |

**推进评估：**
今日 PR 净增量集中在 **zerocode 配置可发现性 + Telegram 文档/CLI 一致性** 两个面；同时一批**正在合并中**的关键修复（[#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) MCP schema 共享、[#8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816) log 配置热重载、[#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) Telegram `bot_token` 命名修复）正在加压 v0.8.3 通道。预计未来 24–72 小时内还会有 ≥3 个 p1/p2 修复落地。

---

## 4. 社区热点

**评论最多 / 持续活跃的讨论：**

- 🥇 **[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) `tool_filter_groups` 对真实 MCP 工具不生效（prefix-check bug）** — 9 条评论，p1，high risk
  作者 nick-pape 指出 [agent] 配置段中的 `tool_filter_groups` 在 dispatch 时实际是 no-op，且与 `deferred_loading` 没有集成。两个独立 bug 都在 `crates/zeroclaw-runtime/src/agent/loop_.rs:149` 附近。
  → **背后诉求：** 多工具/MCP 场景下的策略可声明、可静态审计；目前只能"在 prompt 里祈祷"。

- 🥈 **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) 发布 full-channel prebuilt assets** — 5 条评论，p2，**status:blocked，需维护者决策**
  → **背后诉求：** 当用户配置了非默认 channel（如 WeCom / 飞书 / Slack）时，瘦身的默认预编译包不再可用，造成"装好即用"破窗。

- 🥉 **[#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) 日志持久化与轮转配置的热重载** — 3 条评论
  → 已有对应修复 PR [#8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816) 待合并。

此外，[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)（MCP schema 克隆导致 agent 循环 RSS 无限增长，已从 [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542) WSL2 OOM tracker 拆分）有 [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) 的 Arc 共享修复正在合并路径上。

---

## 5. Bug 与稳定性

按严重程度排序（**P1 / High risk 在前**）：

| 严重度 | Issue / PR | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **P1 / High** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema 深度克隆致 agent 循环 RSS 单调增长（WSL2 OOM 子根因之一） | ✅ [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817)（Arc 共享，Open） |
| 🔴 **P1 / High** | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` 在 MCP 工具上前缀匹配失效 + 与 `deferred_loading` 未集成 | ⏳ 待 PR |
| 🔴 **P1 / High** | [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) → **PR [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)** | `/model --agent` 写到错误的 scope key，存在**跨调用方越权写入**风险 | ✅ [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)（Open，**security:domain**） |
| 🟠 **P2 / High** | [#8642 衍生 #8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) → **PR [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)** | `DeferredMcpToolSet` 多套访问策略不一致（prompt 侧 vs. 执行侧） | ✅ [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496)（Open，size L） |
| 🟠 **S2（中度）** | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | 文档中 Telegram 示例字段名/输出与 CLI 不一致 | ✅ [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) 文档修复；[#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) `bot_token` 命名修复 |
| 🟢 **S3（轻量）** | [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | `bind-telegram` 设置说明引用未知配置属性（用户实际填了 kebab-case 的 `bot-token`） | ✅ [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) 已对应修复 |
| 🔵 **安全加固** | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) | `image_gen` 工具对 fal.ai 返回的下载 URL **未做 SSRF 防护** | ✅ Open |
| 🔵 **安全加固** | [#8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824) | `/ws/nodes` WebSocket 升级用非恒定时间字符串比较 `auth_token`（潜在时序攻击） | ✅ Open |
| 🟢 **小修** | [#8656](https://github.com/zeroclaw-labs/zeroclaw/pull/8656) | WeChat 通道 Markdown 表格/格式化渲染 | ✅ Open（size S） |
| 🟢 **小修（XS）** | [#8739](https://github.com/zeroclaw-labs/zeroclaw/pull/8739) | 七个 `.map_err(|_| ...)` 位点丢弃原始错误，丢失诊断上下文 | ✅ Open |

**总体判断：** 本日新出现的真实"功能性 bug"集中在 Telegram 通道（CLI ↔ 文档 ↔ 实际配置三方不一致），其余高严重度条目均为长期欠账，今天由 [#8817](https://github.com/zeroclaw-labs/zeroclaw/pull/8817) / [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) / [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) / [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) / [#8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824) 这一组 PR 集中收口。

---

## 6. 功能请求与路线图信号

**已提出但尚无直接 PR 的功能/增强：**

- **[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)（p2，blocked，需维护者）：** 在主预编译包旁发布 `channels-full` 预编译包。**路线图评估：** 与 [#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) v0.8.3 release-support 通道强相关，**有合理概率并入 v0.8.3**，但需要 release 工程介入（trust 链、签名、产物膨胀）。
- **[#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314)（p2）：** 日志持久化与轮转配置热重载。**路线图评估：** PR [#8816](https://github.com/zeroclaw-labs/zeroclaw/pull/8816) 已被作者挂上 `Fixes #8314` 标签，**极可能并入 v0.8.3**。
- **[#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)（已关闭）：** 已有 `skill_manage.create` action。**新增状态：** 今日已关闭，说明维护者已经合并了对应实现，建议关注其关联 PR。

**已有 PR 的增强项（高纳入概率）：**

- **[#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) OpenAI Bridge 通道** — size XL（万行级），需 `needs-maintainer-review`，**v0.8.x 重大新增**。
- **[#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) `prompt_injection_mode` 在 runtime profile 下可覆盖** — size S，6/23 创建，**优先级被工具/通道挤到中段，建议 review 唤醒**。
- **[#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) SOP authoring surface（feat/sop-authoring, #8590）** — p2，in-progress，**巨型 multi-PR 落地**，对应已合入的 web+zerocode 端到端能力。
- **[#8806](https://github.com/zeroclaw-labs/zeroclaw/pull/8806) `ResolvedModelAccess::run_model_query` metered provider seam（S21 P1）** — 这是后续 [#8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821)（max-iteration 优雅总结）的依赖底座，**S21 系列 PR 是下一版本核心架构改动信号**。

---

## 7. 用户反馈摘要

从 Issues 评论/摘要中提炼的真实使用场景与痛点：

- **MCP 多工具环境策略不可用（[#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)）：** 高级用户在 audit/合规场景下需要"在配置里声明工具过滤"，但当前只能依赖 prompt 工程。**痛点：** "我的安全策略在配置里写不出来。"
- **Telegram 入门体验连续碰壁（[#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) + [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)）：**
  - 用户按错误提示填入 `bot-token`（kebab-case），CLI 不识别，**配置盲区**。
  - 文档示例与 CLI 输出与运行时实际行为三方不一致（[#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) 评论原话：*"if not implemented correctly, slop remains slop"*——批评者认为 doc/CLI/runtime 三方漂移是体验问题）。
  - **痛点：** "看起来都差不多，但哪个是真名？"
- **WSL2 上跑 zerocode 时的 OOM/重启风暴（[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 拆分自 [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)）：** 长会话下 RSS 单调增加，最终触发 supervisor 重启循环。**痛点：** "开发机内存小，跑 10 分钟就被 OOM kill。"
- **预编译包瘦身过头（[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)）：** 默认包不包含部分 channel 插件，用户对"为什么 `bind-telegram` 之后还得自己编译"的体验提出质疑。**痛点：** "我装的是 release 还是 source？"
- **满意/正面信号：** [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) tracker 当日被**主动关闭**，说明 v0.8.1 集成/通道/工具队列已被消化；[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) 中**显式提到"保持支持工作可见"**，说明维护团队对工程纪律有意识。

---

## 8. 待处理积压（提醒维护者关注）

按"重要度 × 静止时长"排序：

| 优先级 | Issue / PR | 静止天数 | 风险 |
|---|---|---|---|
| 🔴 P1 | [#6699](https://github.com/zer

</details>