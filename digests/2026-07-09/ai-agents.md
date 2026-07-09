# OpenClaw 生态日报 2026-07-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-09 02:36 UTC

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
**日期：2026-07-09**

---

## 1. 今日速览

OpenClaw 今日仓库活跃度极高，24 小时内累计 500 条 Issue 更新（457 条活跃/新开，43 条已关闭）与 500 条 PR 更新（407 条待合并，93 条已合并/关闭），但**无新版本发布**，表明项目正处于"密集提交但缺乏稳定发布节奏"的状态。讨论焦点高度集中在 **会话状态可靠性、消息丢失、多智能体编排与渠道适配（Slack/Telegram/Discord/Feishu/MS Teams）** 等核心问题，多个 P0/P1 级"Bug 链"已稳定超过 100 天未根治。整体评估：**开发势头强劲，但稳定性信号偏弱，存在积压风险**。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。最近一次稳定版（issue 中提及）仍为 `2026.3.13`（2026-03-18 前后），距离首次出现在 issue 描述中的 `2026.5.20` 已有近 2 个月未生成正式 release tag，**建议维护者明确下一版本计划**。

---

## 3. 项目进展

今日虽无版本发布，但有 **93 条 PR 完成合并/关闭**，以下为对项目健康度影响较大的关键合并/关闭 PR：

| PR 链接 | 标题 | 影响 |
|---|---|---|
| [#102305](https://github.com/openclaw/openclaw/pull/102305) | `fix(gateway)`: 热重载后重新校验 session runtime model | 修复 agent 模型热重载不生效的隐性 bug，减少对全量重启的依赖 |
| [#102358](https://github.com/openclaw/openclaw/pull/102358) | `fix(telegram)`: 修复含 `&` 的链接被截断 | 修复用户在 Telegram 渠道点击多参 URL 时的体验问题 |
| [#102349](https://github.com/openclaw/openclaw/pull/102349) / [#102344](https://github.com/openclaw/openclaw/pull/102344) | `fix(openai)`: 暴露 Chat Completions refusal 字段 | 用户不再看到"空回复"，完善了安全拒绝的可观测性 |
| [#102357](https://github.com/openclaw/openclaw/pull/102357) | `fix(msteams)`: 修复流式输出首字符丢失 | 修复 Teams 流式聊天首字符被吞的回归问题 |
| [#102361](https://github.com/openclaw/openclaw/pull/102361) | 新增 J-Lens 可观测性技能 | 跨平台推理可观测性的生态扩展 |
| [#102354](https://github.com/openclaw/openclaw/pull/102354) | `fix(ai)`: 校验图片 MIME 类型（HEIC/TIFF） | 修复 iPhone HEIC 图片在 Mistral/OpenAI 上的拒绝 |
| [#102157](https://github.com/openclaw/openclaw/pull/102157) | `fix(google-meet)`: 为 Calendar v3 请求加 deadline | 防止日历查询无限挂起 |
| [#101276](https://github.com/openclaw/openclaw/pull/101276) | `feat(exec)`: deny-over-allow exec 审批黑名单（关联 #6615） | 重大安全加固：替代 #92456，重启长期未响应的安全功能讨论 |
| [#10298299](https://github.com/openclaw/openclaw/pull/98299) | 新增 hosted feed 信封验证器 | 启动受信 feed 验证实现序列（已关闭但完成 RFC 关联） |

**整体进展评估：** 渠道层修复（#102358、#102357、#102354、#102354）和安全加固（#101276）方向推进显著；但**核心会话/编排层的根因类修复仍未合并**，下一版本的质量跃升仍有空间。

---

## 4. 社区热点

按评论数排序的 TOP 5 讨论热点：

| 排名 | Issue | 标题 | 评论数 | 👍 |
|---|---|---|---|---|
| 1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用之间的文本泄露到消息渠道 | **35** | 1 |
| 2 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子智能体完成静默丢失（无重试/通知/自动重启） | **21** | 1 |
| 3 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式不向主会话中途注入消息 | **15** | 3 |
| 4 | [#85333](https://github.com/openclaw/openclaw/issues/85333) | `openclaw doctor --fix` 4-5x 性能回退（55s → 229s） | **15** | 1 |
| 5 | [#45740](https://github.com/openclaw/openclaw/issues/45740) | `gh-issues` skill 未净化注入 sub-agent 提示 | **14** | 1 |

**最具社区共鸣的请求（按 👍 数）：**

- [#39604](https://github.com/openclaw/openclaw/issues/39604) — `tools.web.fetch.allowPrivateNetwork` 配置项（**👍11**，评论 13）
- [#42840](https://github.com/openclaw/openclaw/issues/42840) — Webchat/控制台增加 MathJax/LaTeX 渲染（**👍9**，评论 8）
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — 文档领先于发布的回归问题（👍3，P0 release blocker）
- [#45608](https://github.com/openclaw/openclaw/issues/45608) — `/new` / 重置前的记忆刷新（👍4）
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — 文本泄露（🦞 diamond lobster 评级）

**背后诉求分析：** 用户群体正在分化为两类——一类是**重度生产用户**（关注多智能体编排、cost 预算、provider fallback），另一类是**前端/可视化用户**（关注 MathJax、avatar 修复）。前者是付费转化关键，后者是开发者口碑关键。

---

## 5. Bug 与稳定性

按严重程度排序（结合 `clawsweeper` 标签、`issue-rating` 和 `impact` 字段）：

### 🔴 P0 级（影响发布）
- [#43661](https://github.com/openclaw/openclaw/issues/43661) — **压缩超时会话挂起，重复发送同一消息**（impact: ux-release-blocker）— ⚠️ **无 fix PR**
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — **Live Docs 领先于 release 版本**（regression）— ⚠️ **无 fix PR**

### 🟠 P1 高优先级（数据丢失 / 崩溃 / 安全）
- [#25592](https://github.com/openclaw/openclaw/issues/25592) — 工具间文本泄露（影响 message-loss + security，diamond lobster）
- [#44925](https://github.com/openclaw/openclaw/issues/44925) — 子智能体完成静默丢失（多错误码 E31/E42/E45）
- [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer 模式不注入消息
- [#94228](https://github.com/openclaw/openclaw/issues/94228) — Anthropic thinking 块签名失效导致长会话"砖死"
- [#85333](https://github.com/openclaw/openclaw/issues/85333) — `doctor --fix` 4-5x 性能回退
- [#43367](https://github.com/openclaw/openclaw/issues/43367) — 多智能体编排不稳定（并发覆盖、session-lock 失败）
- [#99912](https://github.com/openclaw/openclaw/issues/99912) — Heartbeat 路由到错误 agent 的 session
- [#40611](https://github.com/openclaw/openclaw/openclaw/issues/40611) — Heartbeat drift 修复后阻塞 Telegram
- [#41744](https://github.com/openclaw/openclaw/issues/41744) — Feishu 读图工具结果丢失（`stale` 标签）
- [#41165](https://github.com/openclaw/openclaw/issues/41165) — Telegram DM 仍污染 main session（fix #40519 后）
- [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A sessions_send 双向调用导致重复消息
- [#44905](https://github.com/openclaw/openclaw/issues/44905) — Discord 泄露内部 tool-call 痕迹（NO_REPLY、commentary）
- [#44502](https://github.com/openclaw/openclaw/issues/44502) — Discord mention-gating 路由 bug
- [#45494](https://github.com/openclaw/openclaw/issues/45494) — Cron 在 LLM 持续故障时缓慢超时而非快速失败
- [#45224](https://github.com/openclaw/openclaw/issues/45224) — 未处理的 Playwright assertion 错误导致 Gateway 崩溃
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — 2026.3.2 与 google-vertex/gemini-3.1-pro-preview 的回归

### 🟡 P2 中优先级
- [#45740](https://github.com/openclaw/openclaw/issues/45740) — `gh-issues` 提示注入风险（diamond lobster + security）
- [#43996](https://github.com/openclaw/openclaw/issues/43996) — 沙箱容器在 `no-new-privileges` 下立即退出
- [#49603](https://github.com/openclaw/openclaw/issues/49603) — 孤立锁文件未清除
- [#47975](https://github.com/openclaw/openclaw/issues/47975) — 子智能体完成后 session 持续占用
- [#86034](https://github.com/openclaw/openclaw/issues/86034) — 媒体生成完成但回执失败
- [#82662](https://github.com/openclaw/openclaw/issues/82662) — Isolated cron agentTurn setup 超时
- [#94846](https://github.com/openclaw/openclaw/issues/94846) — Cron isolated agentTurn 跳过交付
- [#45718](https://github.com/openclaw/openclaw/issues/45718) — `skillsSnapshot` / `systemPromptReport` 无界累积
- [#43747](https://github.com/openclaw/openclaw/issues/43747) — 多用户记忆管理不一致

**关键洞察：**
- 多条 P1/P0 标记为 `clawsweeper:no-new-fix-pr`，表明**维护者人手可能不足以应对根因级问题**
- `clawsweeper:needs-product-decision` 标签占比高，反映许多问题不是技术 bug，而是**产品策略缺失**（如消息渠道隔离策略、provider fallback 策略）
- 已关联 fix PR 的（`clawsweeper:linked-pr-open`）占比约 30%，仍有大量孤儿 issue

---

## 6. 功能请求与路线图信号

按需求强度与已有 PR 进展评估最可能被纳入下一版本的特性：

| 特性请求 | Issue | 现有 PR | 纳入概率评估 |
|---|---|---|---|
| **多智能体编排 announceTarget**（subagent 完成回到父 session） | [#44925](https://github.com/openclaw/openclaw/issues/44925) | [#101248](https://github.com/openclaw/openclaw/pull/101248)（P1, M size, ready for maintainer） | 🟢 **高** |
| **`web_fetch` 私有网络配置** | [#39604](https://github.com/openclaw/openclaw/issues/39604) | 暂无 | 🟡 中（👍11，社区呼声高） |
| **每 agent 成本预算网关强制** | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 暂无 | 🟡 中（生产用户刚需） |
| **重置前 agentic 记忆刷新** | [#45608](https://github.com/openclaw/openclaw/issues/45608) | 暂无 | 🟢 高（修复路径清晰） |
| **Gateway 生命周期 hooks** | [#43454](https://github.com/openclaw/openclaw/issues/43454) | 暂无 | 🟡 中（生态扩展型） |
| **backup CLI 排除模式** | [#40786](https://github.com/openclaw/openclaw/issues/40786) | 暂无 | 🟢 高（实现简单） |
| **分布式 Agent Runtime（控制面/计算面分离）** | [#42026](https://github.com/openclaw/openclaw/issues/42026) | [#98299](https://github.com/openclaw/openclaw/pull/98299)（已部分启动） | 🟠 长线 |
| **MathJax/LaTeX 渲染** | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 暂无 | 🟢 高（👍9，前端可见） |
| **YAML 配置格式支持** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 暂无 | 🟡 中 |
| **Provider 故障分类 fallback / 隔离** | [#47910](https://github.com/openclaw/openclaw/issues/47910) | 暂无 | 🟡 中 |
| **exec 审批 deny-over-allow 黑名单** | [#6615](https://github.com/openclaw/openclaw/issues/6615)（原 issue） | [#101276](https://github.com/openclaw/openclaw/pull/101276)（P1, ready for maintainer） | 🟢 **高** |
| **Gateway 生命周期警告专用渠道** | [#45565](https://github.com/openclaw/openclaw/issues/45565) | 暂无 | 🟢 高（可观测性） |
| **Webchat 内联按钮支持** | [#46656](https://github.com/openclaw/openclaw/issues/46656) | 暂无 | 🟡 中 |
| **TUI 跨渠道可见性（可选）** | [#40678](https://github.com/openclaw/openclaw/issues/40678) | 暂无 | 🟡 中 |
| **心跳系统事件 cron 修复** | [#101668](https://github.com/openclaw/openclaw/pull/101668)（已 close） | ✅ | 🟢 修复合入中 |

---

## 7. 用户反馈摘要

**真实痛点场景（来自用户原话提炼）：**

1. **生产环境挫败感强**
   - 用户 samson1357924：VPS 上 `doctor --fix` 从 55s 退化到 229s+，影响运维节奏
   - 用户 waliddafif：CLI 多 agent 批次完全不可靠，"add/config 反复覆盖"，被迫放弃并行
   - 用户 Stoff81：发现 Heartbeat `IsolatedSessions` 在官方文档中描述但代码缺失

2. **跨渠道用户体验断裂**
   - 内部 LLM 痕迹（NO_REPLY、tool call JSON）泄露到 Discord/Slack/iMessage 已成为**最普遍痛点**（#25592、#44905、#39476、#25592）
   - 用户 ychi6567-glitch 描述 Discord 出现了 `to=functions.memory_search` 等原始 tool-call 痕迹
   - Telegram forum 模式下子智能体完成公告在 E31/E42/E45 三种错误码下全部静默失败

3. **多智能体用户群 vs 单会话用户群割裂**
   - 用户 magnusbonnevier：子会话完成后主会话卡死，WSL2 + Node 24.14
   - 用户 IIIyban：3 个错误码（E31/E42/E45）下结果全部静默丢失

4. **隐式数据丢失引起恐慌**
   - 用户 altsoulkiller：cron 隔离会话覆盖 `memory/YYYY-MM-DD.md`（无 append 模式）
   - 用户 PabloDaVa：成本仪表盘因 `.jsonl.reset.<timestamp>` 归档文件未计入，**严重低估日消费**
   - 用户 kamikariat：用户运行 `/new` 后记忆没刷新就销毁，体验割裂

5. **正向反馈信号**
   - 用户 henserlu（MathJax 请求）：认可控制台

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期：2026-07-09**
**覆盖项目：13 个**（OpenClaw + 12 个参照项目）

---

## 1. 生态全景

2026 年 7 月的个人 AI 助手/自主智能体开源生态呈现 **"头部高密度迭代、长尾明显分化"** 的格局：以 OpenClaw（500 Issues / 500 PRs）、ZeroClaw（50 / 50）、IronClaw（21 / 50）、CoPaw（39 / 50）为代表的四个"重量级"项目贡献了生态绝大多数的活动量与代码流入，而 Moltis、TinyClaw、NullClaw、ZeptoClaw 等项目则陷入低活跃或静默状态。

技术焦点高度收敛于**多智能体编排可靠性、跨渠道消息层（Discord/Telegram/Feishu/Slack/Teams/iMessage）适配、OpenAI 兼容网关、会话状态持久化与压缩**这四大方向。**安全加固成为生态共识**——NanoBot、TinyClaw、ZeroClaw、CoPaw、LobsterAI 均在 24 小时内完成了至少一项鉴权/凭据/默认开启白名单类的安全修复，呈现"安全为产品底线"的新阶段特征。

整体而言，生态正从"功能可用"向"生产可信"过渡，**版本发布节奏普遍放缓**（13 个项目中仅 2 个发版），反映出项目方在面对真实生产场景时的审慎态度。

---

## 2. 各项目活跃度对比

| 项目 | Issues (活跃/关闭) | PRs (待合并/已合并) | 今日 Release | 综合健康度 | 关键信号 |
|---|---|---|---|---|---|
| **OpenClaw** | 457 / 43 | 407 / 93 | ❌ | ⭐⭐⭐ | 体量最大，稳定性偏弱 |
| **NanoBot** | 0 / 8 | 17 / 9 | ❌ | ⭐⭐⭐⭐⭐ | 响应迅速，8/8 Issue 当日闭环 |
| **Hermes Agent** | 50 / 3 | 49 / 1 | ✅ v0.18.2 | ⭐⭐⭐ | 审阅通道积压严重（98% PR 待合并） |
| **PicoClaw** | 2 / 0 | 0 / 3 | ❌ | ⭐⭐⭐ | 轻活跃，稳健迭代 |
| **NanoClaw** | 2 / 0 | 24 / 4 | ❌ | ⭐⭐⭐⭐ | 核心团队主导，节奏健康 |
| **NullClaw** | — | — | — | — | 24h 无活动 |
| **IronClaw** | 21 / 6 | ~39 / ~11 | ❌ | ⭐⭐⭐ | NEA-25 重构冲刺中 |
| **LobsterAI** | 3 / 0 | 3 / 10 | ❌ | ⭐⭐⭐ | PR 集中合并，0 个发布 |
| **TinyClaw** | 0 / 0 | 0 / 1 | ❌ | ⭐⭐ | 安全 PR 合入但未发版 |
| **Moltis** | 0 / 0 | 1 / 0 | ❌ | ⭐ | 仅 1 个待合并 PR |
| **CoPaw** | 15 / 24 | 34 / 16 | ✅ v2.0.0-beta.4 | ⭐⭐⭐⭐⭐ | 唯一高产+发版+高关闭率 |
| **ZeptoClaw** | — | — | — | — | 24h 无活动 |
| **ZeroClaw** | 40 / 10 | 42 / 8 | ❌ | ⭐⭐⭐⭐ | 双线推进（功能+安全） |

**汇总统计**：
- 24h 总 Issue 活动：~590 条
- 24h 总 PR 活动：~430 条
- 24h 新 Release：2 个（CoPaw beta.4、Hermes v0.18.2）
- 零活动项目：2 个（NullClaw、ZeptoClaw）

---

## 3. OpenClaw 在生态中的定位

### 规模与活跃度
OpenClaw **单日 500+500 的活动量是生态第二位 ZeroClaw / IronClaw 的 10 倍**，是 Hermes Agent、CoPaw 等同梯队的 10 倍量级。这种体量优势带来三方面影响：
- **正**：拥有最丰富的渠道覆盖（Slack/Telegram/Discord/Feishu/MS Teams/iMessage 等）、最多的功能场景、最大的社区讨论池
- **负**：维护者人手相对不足，多个 P0/P1 "Bug 链"已稳定 100 天以上未根治（如 #43661 压缩挂起、#48920 文档领先于 release）
- **负**：PR 评审通道严重积压（407/500 = 81% 待合并）

### 技术路线差异
- **OpenClaw**："**大而全的智能体网关**"，强调多渠道、多 provider、多智能体编排，目标用户是**重度生产用户**
- **CoPaw / NanoBot / NanoClaw**：相对收敛，专注一两个核心场景（多智能体协作 / 安全默认 / 调度控制）
- **ZeroClaw**：从底层协议层切入，**WASM 插件架构 + OpenAI 兼容网关** 是其差异化
- **IronClaw**：走"扩展表面"统一抽象的架构治理路线（NEA-25 重构净删 900 行）
- **Hermes Agent**：在 CLI/Desktop/Web 三端用户体验层做深

### 社区规模对比
OpenClaw 的"长寿 Issue 链"（#39604 11 👍、#42840 9 👍）和"重度生产用户"画像（VPS 部署、成本仪表盘、provider fallback）显示其已积累了一批**付费转化潜力高**的核心用户；但同时 P0 Bug 链的长期挂起也在消耗这部分用户的耐心。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **多智能体编排可靠性** | OpenClaw（#44925、E31/E42/E45）、NanoBot（#2463）、NanoClaw（#2985）、IronClaw（#5836） | 子智能体完成静默丢失、announceTarget 缺失、session-lock 失败、bot 静默无回复 |
| **OpenAI 兼容 API 网关** | OpenClaw（Chat Completions refusal 暴露）、ZeroClaw（PR #8486 size:XL）、NanoBot（#4078 鉴权） | 让 LangChain/Continue.dev/Aider 等生态客户端直连；统一鉴权与流式协议 |
| **跨渠道消息层** | OpenClaw（#25592、#44905、#41165）、NanoBot（#2873）、PicoClaw（#3201）、Hermes（#58646 QQ、#61211 WeCom） | 工具调用痕迹（NO_REPLY、tool-call JSON）泄露到 Discord；QQ 流式输出缺失；Telegram 链接截断 |
| **会话状态与压缩** | OpenClaw（#43661、#45718、#94228）、CoPaw（v2.0.0-beta.4 graduated pressure relief）、ZeroClaw（#6517 上下文溢出） | 长会话"砖死"、压缩后回溯可读性、thinking 块签名失效 |
| **安全默认与白名单** | NanoBot（#4849）、TinyClaw（PR #44）、ZeroClaw（#8713 SSRF、#8725 webhook）、CoPaw（approval level）、LobsterAI（#1401 crypto 随机数） | 默认开启发送者白名单、SSRF 旁路、webhook secret 强制、密码学随机数 |
| **Cron / 调度子系统** | OpenClaw（#45494、#82662）、NanoBot（#4622 model_preset）、NanoClaw（#2980-2981 5-PR train）、LobsterAI（#1347） | 快速失败而非缓慢超时、模型解耦、控制面 CLI、隔离 session |
| **可观测性 / 诊断导出** | OpenClaw（#102361 J-Lens、#45565）、IronClaw（#5857 OTLP、#61252 health diagnostic） | 跨平台推理 trace、Gateway 生命周期警告渠道 |
| **Desktop UX 统一** | Hermes（#61246 托盘化、#48098 状态残留、#59224 跨端会话）、CoPaw（#5725 流式卡顿、#5421 切换卡顿） | 退出语义统一、跨端会话互通、状态指示陈旧 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道网关 + 多智能体编排 + 大量 provider 适配 | 重度生产用户、运维/SRE | 单体 gateway，分散修复策略 |
| **NanoBot** | 安全默认 + WebUI/Cron 精细化 | 私有化部署、对鉴权敏感的用户 | "少依赖、强核心" 哲学，Node 24 |
| **Hermes Agent** | CLI/Desktop/Web 三端体验 | 跨端工作流用户、东亚用户（中文支持） | 多平台适配器（Baileys/Blooio/Matrix/WeCom） |
| **PicoClaw** | 嵌入式/边缘硬件（NanoKVM）+ 告警生态 | 嵌入式/IoT 开发者、SRE | 网关绑定回退策略、Grafana Alertmanager |
| **NanoClaw** | 调度子系统 + Agent-on-host | 企业级调度、PR 工厂类元工作流 | `ncl` CLI 控制面、scheduled-tasks 5-PR train |
| **IronClaw** | 扩展架构统一 + 平台层 | 平台构建者、企业客户 | NEA-25 "统一扩展表面" 重构、零 legacy 门禁 |
| **LobsterAI** | 多 agent 隔离 + 协作 | 中国市场、多 agent 协作场景 | USER.md per-agent、IM 会话 scope 化 |
| **TinyClaw** | 渠道鉴权 + bundle 完整性 | 个人/小团队、VPS 部署者 | 默认安全、白名单 opt-out |
| **Moltis** | CalDAV 协议集成 | 自托管/企业 Exchange 用户 | Rust 实现的 CalDAV 客户端 |
| **CoPaw** | 2.0 大版本 + 中文生态 | 中国开发者、AgentScope 用户 | scroll 压缩保护 active turn、graduated pressure relief |
| **ZeroClaw** | OpenAI 兼容网关 + WASM 插件架构 | 客户端生态集成者、插件开发者 | 运行时 WASM 替代编译期 feature、`.ignore` 工作区保护 |

**关键差异化判断**：
- **安全路线**：TinyClaw 走"默认开启白名单"的最严格路线；NanoBot 走"分层 Token 鉴权"路线；OpenClaw/CoPaw 走"按场景审批"路线
- **可扩展性路线**：ZeroClaw 押注 WASM 运行时；IronClaw 押注统一扩展表面；OpenClaw 维持单体
- **可观测性路线**：IronClaw、OpenClaw、CoPaw 三家分别从 OTLP、J-Lens、approval level 切入

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

**第一梯队（迭代冲刺期）**：
- **OpenClaw / CoPaw / ZeroClaw / IronClaw**：日活动量 50+ PRs / 20+ Issues，正处于大规模功能/重构推进中
- **Hermes Agent**：日活动量 50+ PRs，但 PR 待合并率 98%，**处于"提交爆炸、审阅冻结"状态**

**第二梯队（稳健成长期）**：
- **NanoBot / NanoClaw / LobsterAI**：日活动量 10-30 PRs，维护者响应及时，质量收口为主
- **PicoClaw**：日活动量 3-5 PRs，节奏平稳

**第三梯队（静默/维护期）**：
- **TinyClaw / Moltis / NullClaw / ZeptoClaw**：日活动量 ≤1 PR，处于常规维护或事实停摆

### 6.2 成熟度信号

| 阶段 | 特征 | 代表项目 |
|---|---|---|
| **快速迭代** | 大量新功能 PR、beta 版本频繁、bug 同步爆发 | CoPaw（2.0.0-beta.4）、ZeroClaw（功能主线） |
| **质量巩固** | 关注安全/回归测试/老 bug 清理、发版放缓 | NanoBot（安全加固主线）、IronClaw（架构治理） |
| **架构重构** | 大规模栈式 PR、净删大量代码、零 legacy 门禁 | IronClaw（NEA-25）、OpenClaw（隐含在多 PR 中） |
| **运维导向** | 渠道适配、provider fallback、可观测性 | OpenClaw、Hermes Agent |

### 6.3 关键风险

- **OpenClaw**：P0/P1 100 天+ 未根治的"bug 链"是最大风险信号
- **Hermes Agent**：PR 评审通道几乎冻结，社区贡献者可能流失
- **IronClaw**：NEA-25 大规模重构后的回归风险（已在 #5859 pinchbench 44 个 non-pass 中显现）
- **LobsterAI**：版本节奏滞后（4.1 升级事故 + 长期 stale Issue）
- **TinyClaw**：安全 PR 合入但未发版，存在暴露

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-07-09**

---

## 1. 今日速览

NanoBot 今日呈现"集中收尾 + 持续推进"的健康节奏：**8 条 Issue 全部关闭**（含 4 条安全相关），**26 个 PR 更新**（9 条合并/关闭，17 条待评审）。当日没有新版本发布，但安全修复链路闭环完整——WebUI 引导令牌问题、OpenAI 兼容端点鉴权问题、Slack 依赖缺失等关键问题均在 24 小时内被处理或通过对应 PR 修复。项目整体活跃度处于中高水平，维护者响应及时。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共 9 个 PR 被合并或关闭，涵盖安全修复、文档重构、新功能落地多个方向：

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#4849](https://github.com/HKUDS/nanobot/pull/4849) | fix(webui): gate bootstrap API token issuance | 安全修复 | 拆分 WebUI 引导的 WebSocket Token 与 REST API Token，仅在验证 `tokenIssueSecret`/静态 `token` 后才返回 `api_token` |
| [#4850](https://github.com/HKUDS/nanobot/pull/4850) | docs: improve search entry pages | 文档 | README 重型新闻块改为归档，新增按场景分类的搜索入口页（聊天应用、配置、SDK、API、WebUI、MCP、Gateway 等） |
| [#4852](https://github.com/HKUDS/nanobot/pull/4852) | Feature: non-interactive config refresh | 增强 | 实现 `nanobot onboard --refresh`，支持非交互式配置刷新，关闭 Issue [#4851](https://github.com/HKUDS/nanobot/issues/4851) |
| [#4848](https://github.com/HKUDS/nanobot/pull/4848) | refactor(agent): extract turn hook assembly | 重构 | 将每轮 hook 组装从 `AgentLoop` 抽离至 `nanobot.agent.turn_hooks`，提升可维护性 |
| [#4460](https://github.com/HKUDS/nanobot/pull/4460) | chore: bump to node 24 | 维护 | Node 运行时升级到 v24 |
| [#12](https://github.com/HKUDS/nanobot/pull/12) | feat: add vision support for image recognition in Telegram | 新功能 | Telegram 渠道图片识别支持（base64 编码 + 多模态格式） |

**整体判断**：今日推进集中在"安全加固 + 用户体验"两条主线，WebUI 鉴权从粗放走向精细分层，文档体系向"搜索优先"重构，为下一版本奠定更稳健的基础。

---

## 4. 社区热点

**最活跃 Issue（按评论数）**：
- [#2463](https://github.com/HKUDS/nanobot/issues/2463)（13 条评论）——架构性问题：当前会话历史持久化形式与实际发送给模型的 prompt 前缀不一致，与 OpenAI 兼容 API 存在根本冲突。该 Issue 在被标记 stale 后今日关闭。
- [#2450](https://github.com/HKUDS/nanobot/issues/2450)（4 条评论）——Ollama Cloud 跑 minimax-m2.7:cloud 时第二次及后续请求 `APIConnectionError`。
- [#4825](https://github.com/HKUDS/nanobot/issues/4825)、[#4826](https://github.com/HKUDS/nanobot/issues/4826)、[#4827](https://github.com/HKUDS/nanobot/issues/4827)（共 7 条评论）——三位安全研究人员同日提交相关 WebUI 引导令牌漏洞报告。

**背后诉求**：社区对"会话历史可复现性"和"本地服务鉴权边界"高度关注，反映出 NanoBot 在被嵌入更复杂生产链路（OpenAI 兼容 API、WebUI 网关）后，用户对可审计性与安全默认值的期待显著提升。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#4825](https://github.com/HKUDS/nanobot/issues/4825) / [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827) | WebUI 引导端点向任意 localhost 进程签发 API Bearer Token | ✅ 已通过 PR [#4849](https://github.com/HKUDS/nanobot/pull/4849) 修复并关闭 Issue |
| 🔴 高 | [#4078](https://github.com/HKUDS/nanobot/issues/4078) | OpenAI 兼容 `/v1/chat/completions` 端点接受未鉴权请求，直接进入 `process_direct` | ✅ 已关闭，但未见明确修复 PR 在今日列表中，需关注是否已有跟进 |
| 🟠 中 | [#2450](https://github.com/HKUDS/nanobot/issues/2450) | Ollama Cloud 首次成功、第 2+ 次报 `Internal Server Error`（疑似会话状态/重试缺陷） | ✅ Issue 已关闭，未见明确修复 PR |
| 🟠 中 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | `pyproject.toml` 的 slack extras 缺少 `aiohttp`，导致 slack 插件不可用 | ✅ Issue 已关闭 |
| 🟢 低 | [#4851](https://github.com/HKUDS/nanobot/issues/4851) | 缺少 `nanobot onboard --refresh` 非交互式配置刷新 | ✅ 已通过 [#4852](https://github.com/HKUDS/nanobot/pull/4852) 解决 |

**回归风险关注点**：
- PR [#4856](https://github.com/HKUDS/nanobot/pull/4856)（P1）"restore localhost bootstrap" 与 [#4849](https://github.com/HKUDS/nanobot/pull/4849) 是同一问题的两个不同提案，#4849 已合并，#4856 仍 OPEN，二者策略需明确收敛，避免文档/代码不一致。
- PR [#4764](https://github.com/HKUDS/nanobot/pull/4764) 与 [#4843](https://github.com/HKUDS/nanobot/pull/4843) 同时在修复 MCP 重连 Gateway 崩溃（stale `AsyncExitStack`），存在重复工作，需协调合并顺序。

---

## 6. 功能请求与路线图信号

今日新增强方向主要集中在三个领域：

**① WebUI 体验增强**（维护者 chengyongru 主导）
- [#4828](https://github.com/HKUDS/nanobot/pull/4828) — 文件编辑以 GitHub 风格 unified diff 展示，支持折叠、按用户偏好切换
- [#4854](https://github.com/HKUDS/nanobot/pull/4854) — `tools.exec.rtk` 配置 + RTK 命令重写器，命令执行前先经 RTK 重写并复跑 exec 守卫
- [#4853](https://github.com/HKUDS/nanobot/pull/4853) — 新增 `nano_timer` 核心工具（UTC/本地时间 + IANA 时区 + DST + 日历字段），零依赖

**② 渠道与集成扩展**
- [#4855](https://github.com/HKUDS/nanobot/pull/4855) — Channels 引导式配置流程，新增飞书多 assistant 实例与共享 WebSocket 运行时
- [#4622](https://github.com/HKUDS/nanobot/pull/4622) — Cron 任务支持 `model_preset`，与运行时模型解耦
- [#2873](https://github.com/HKUDS/nanobot/pull/2873) — Discord 转发消息归一化修复（仍 OPEN，自 2026-04 以来）

**③ 工程化与可靠性**
- [#4840](https://github.com/HKUDS/nanobot/pull/4840) — P1：`shell` 子进程僵尸回收，覆盖所有退出路径
- [#4857](https://github.com/HKUDS/nanobot/pull/4857) — Dockerfile 新增 `NANOBOT_EXTRAS` 构建参数

**路线图信号**：可清晰看到 NanoBot 正从"基础 agent 框架"向"可投产的多渠道网关"演进，WebUI/Cron/Channels 的精细化是下个版本的明确方向。`nano_timer` 等轻量内置工具的加入也预示维护者倾向于"少依赖、强核心"的设计哲学。

---

## 7. 用户反馈摘要

从已关闭 Issue 评论中提炼的真实痛点：

- **可复现性焦虑（#2463）**：用户希望保存的会话历史能严格对应到真实送入模型的 prompt 上下文，这关系到审计、回放、调试闭环——是 OpenAI 兼容 API 上线后的强需求。
- **多请求链路不稳（#2450）**：用户使用 minimax-m2.7:cloud 时第 2+ 次请求即失败，说明 LiteLLM/Ollama Cloud 适配层的会话复用逻辑仍有缺陷。
- **自动/无人值守运维诉求（#4851 → #4852）**：用户场景是"系统需要自动或半自动更新自己"，纯粹的交互式 onboarding 已成为障碍。
- **依赖完整性（#4829）**：用户构建 Slack 集成时直接踩到 extras 缺失问题，说明可选依赖矩阵需要更清晰的文档或自动检测。

**满意度信号**：安全相关 Issue 能在 24 小时内由维护者本人提 PR 闭环处理（#4825/#4826/#4827 → #4849），社区响应速度获得正面反馈。

---

## 8. 待处理积压

请维护者关注以下长期或重要未合并项：

- **[#2873](https://github.com/HKUDS/nanobot/pull/2873)** — Discord 转发消息归一化（自 2026-04-06 OPEN，已 3 个月）
- **[#2463](https://github.com/HKUDS/nanobot/issues/2463)** — 虽已关闭，但 13 条评论的核心架构性问题（prompt 前缀保真度）建议纳入内部技术债追踪
- **[#4078](https://github.com/HKUDS/nanobot/issues/4078)** — OpenAI 兼容 API 鉴权问题已关闭，但 PR 列表中未见对应修复，需确认是否实际修复还是仅关闭 Issue
- **[#4844](https://github.com/HKUDS/nanobot/pull/4844)** — P1：将持续目标门控在显式运行时模式后，仍 OPEN 且标记 conflict
- **[#4764](https://github.com/HKUDS/nanobot/pull/4764)** vs **[#4843](https://github.com/HKUDS/nanobot/pull/4843)** — 两份 MCP 重连 Gateway 崩溃修复并存，建议尽快二选一合并
- **[#4856](https://github.com/HKUDS/nanobot/pull/4856)** vs **[#4849](https://github.com/HKUDS/nanobot/pull/4849)** — WebUI 引导令牌策略两个提案并存，已合并 #4849，#4856 状态需澄清

---

## 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 响应速度 | ⭐⭐⭐⭐⭐ | 全部 8 条 Issue 当日闭环，安全响应极佳 |
| 安全态势 | ⭐⭐⭐⭐ | 闭环迅速，但仍有未明确修复的鉴权问题（#4078），需复查 |
| PR 流转 | ⭐⭐⭐ | 17 个待合并 + 2 对重复提案需协调 |
| 文档完善 | ⭐⭐⭐⭐ | #4850 显著优化搜索体验 |
| 路线图清晰度 | ⭐⭐⭐⭐ | WebUI/Cron/Channels 方向明确 |

**综合**：项目处于稳健上升期，今日重点已从"新增功能"转向"质量与安全收口"，是版本发布前良好的整理窗口。建议在下一版本前完成 #4844、#4843/#4764 的合并，并明确 #4078 的修复归属。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期：2026-07-09**
**项目仓库：NousResearch/hermes-agent**
**报告范围：过去 24 小时动态**

---

## 一、今日速览

Hermes Agent 仓库在过去 24 小时维持高活跃度，**50 条 Issue** 与 **50 条 PR** 同时刷新，社区讨论度集中在 CLI / Desktop / 多平台适配器等用户可感知面。值得关注的是，**Issue 关闭率仅 6%（3/50），PR 待合并率高达 98%（49/50）**，说明今日工作集中在「报告问题与提交修复」环节，合并/审阅环节存在明显积压。同步发布 v0.18.2 补丁版本修复 WhatsApp Baileys 依赖问题，整体项目健康度处于「活跃反馈、审阅偏慢」状态。

---

## 二、版本发布

### 🔖 v2026.7.7.2 — Hermes Agent v0.18.2（2026-07-07 发布）

- **更新内容**：单日补丁版本，将 WhatsApp Baileys 依赖从 Git commit 固定改为已发布的 7.0.0-rc13 版本。
- **影响范围**：仅影响使用 Docker tagged-release 构建并启用 WhatsApp 渠道的用户。
- **破坏性变更**：无。
- **升级建议**：使用 Docker 标签镜像的生产环境建议立即拉取；其他用户可在下次常规升级时一并更新。

---

## 三、项目进展

### 3.1 已关闭的 Issue

| 编号 | 类型 | 标题摘要 |
|------|------|----------|
| [#28260](https://github.com/NousResearch/hermes-agent/issues/28260) | bug | `custom_providers` 指向自签名 HTTPS 端点时 SSL 校验失败（4 评论，👍2） |
| [#61087](https://github.com/NousResearch/hermes-agent/issues/61087) | bug | macOS 退出 Desktop 应用时未停止 gateway |

两条关闭均与具体 Bug 修复对应，社区对自签名证书场景的修复具有实际部署价值。

### 3.2 关键修复 PR（已开放，等待审阅）

虽然今日仅 1 个 PR 处于已合并/关闭状态，但以下 PR 体现了明确的项目推进方向：

- **[#61258](https://github.com/NousResearch/hermes-agent/pull/61258)** — 修复 delegation 模式下凭证池覆盖显式 `base_url` 的问题（修复 #61195）。
- **[#61253](https://github.com/NousResearch/hermes-agent/pull/61253)** — 修复 WeCom 适配器对 URL 编码文件名未解码，导致 Windows MAX_PATH 溢出（修复 #61211）。
- **[#61254](https://github.com/NousResearch/hermes-agent/pull/61254)** — 修复 `custom_providers` 下 per-model `max_tokens` 被忽略的路由 Bug。
- **[#61251](https://github.com/NousResearch/hermes-agent/pull/61251)** — 修复流式响应未读取时 `_summarize_api_error` 静默丢失错误体的缺陷。
- **[#61221](https://github.com/NousResearch/hermes-agent/pull/61221)** — 修复 process_registry 后台进程未继承 venv 环境，导致依赖崩溃。
- **[#52094](https://github.com/NousResearch/hermes-agent/pull/52094)** — 修复 Desktop 模型可见性偏好仅存 localStorage，跨 origin 丢失。

整体方向：**「稳定性修补 > 新功能」**，多项修复指向跨平台（Windows/macOS）、跨部署形态（Docker/Electron）下的边界场景。

### 3.3 功能类 PR

- **[#60531](https://github.com/NousResearch/hermes-agent/pull/60531)** — 新增 desired-state 规划技能（V1）。
- **[#61257](https://github.com/NousResearch/hermes-agent/pull/61257)** — Desktop 新增 chat tool 展开偏好持久化。
- **[#61250](https://github.com/NousResearch/hermes-agent/pull/61250)** — 引入 Blooio 作为 iMessage gateway 平台插件。
- **[#61252](https://github.com/NousResearch/hermes-agent/pull/61252)** — 新增 gateway 健康诊断 OTLP 导出。
- **[#52173](https://github.com/NousResearch/hermes-agent/pull/52173)** — CLI 新增 `--recent N` 标志，仅加载会话最后 N 条消息。

### 3.4 性能与体验

- **[#61240](https://github.com/NousResearch/hermes-agent/pull/61240)** — 记忆化 Desktop 线程消息分组，降低长会话重渲染开销。
- **[#60829](https://github.com/NousResearch/hermes-agent/pull/60829)** — 加固 Desktop-as-webapp 路径，浏览器/移动端控制。

---

## 四、社区热点

### 4.1 讨论最热的 Issue

| 排名 | Issue | 评论数 | 👍 | 主题 |
|------|-------|--------|----|------|
| 1 | [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | 9 | 12 | 集成 headroom-ai 实现工具输出压缩 |
| 2 | [#59224](https://github.com/NousResearch/hermes-agent/issues/59224) | 8 | 0 | `/resume` 列表隐藏 Desktop/WebUI 会话 |
| 3 | [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | 7 | 0 | Windows v0.15.1 中文 prompt 截断 |
| 4 | [#58646](https://github.com/NousResearch/hermes-agent/issues/58646) | 7 | 0 | QQ bot adapter 启动失败（`is_reconnect` 参数） |
| 5 | [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | 6 | 0 | Desktop compaction 后残留「Summarizing thread」状态 |

### 4.2 长期高需求但进展缓慢

- **[#569](https://github.com/NousResearch/hermes-agent/issues/569)** — Agent Client Protocol (ACP) Server Mode，让 Hermes 在 Zed/JetBrains/Neovim 中运行。**👍9、自 2026-03-07 开案至今未合并，跨 4 个月悬而未决**，是仓库内高需求低进展的典型。
- **[#18241](https://github.com/NousResearch/hermes-agent/issues/18241)** — TUI 按时间顺序混合显示思考块与工具调用，👍4，自 2026-05-01 以来无明确 PR 对应。

### 4.3 诉求分析

社区诉求集中在三类：
1. **上下文/成本管理**：长会话下的压缩、降本（#39691）；
2. **多端一致性**：CLI、Desktop、WebUI 之间的会话可见与切换体验（#59224, #48098, #50718）；
3. **跨平台可用性**：Windows 中文/本地化问题、macOS 退出语义（#39534, #61087）。

---

## 五、Bug 与稳定性

### 5.1 高严重度（P2）且尚无关联修复 PR

| Issue | 组件 | 现象 | 备注 |
|-------|------|------|------|
| [#58646](https://github.com/NousResearch/hermes-agent/issues/58646) | gateway / QQ bot | `QQAdapter.connect()` 不支持 `is_reconnect` 参数，启动崩溃 | 已被标记为 duplicate，可能已有部分解决 |
| [#39534](https://github.com/NousResearch/hermes-agent/issues/39534) | Desktop / Windows | 中文 prompt 在 v0.15.1 被截断 | 持续 1 个月，影响东亚用户体验 |
| [#48098](https://github.com/NousResearch/hermes-agent/issues/48098) | Desktop | compaction 后状态标签「Summarizing thread」不消失 | UX 误判，已知 6 条评论 |
| [#39047](https://github.com/NousResearch/hermes-agent/issues/39047) | agent | 辅助压缩路由将 Gemini 模型错误指向 Codex 后端 | 多 provider 路由风险 |
| [#39838](https://github.com/NousResearch/hermes-agent/issues/39838) | gateway / cron | `notification_sources` 配置已记录但未生效 | 文档与实现不一致 |
| [#61220](https://github.com/NousResearch/hermes-agent/issues/61220) | gateway | session 过期未设 `end_reason='session_reset'`，陈旧恢复重开过期会话（关联 #54878） | 关联历史回归 |
| [#61211](https://github.com/NousResearch/hermes-agent/issues/61211) / [#61212](https://github.com/NousResearch/hermes-agent/issues/61212) | WeCom / Windows | 中文文件名 percent-encode 超出 MAX_PATH | 已有 PR #61253 修复，**建议优先合并** |
| [#61207](https://github.com/NousResearch/hermes-agent/issues/61207) | agent / skills | `/plan` 不再写 plan.md（Windows） | 回归性 |
| [#5254](https://github.com/NousResearch/hermes-agent/issues/5254) | agent / LM-Studio | 本地模型工具调用被碎片化、循环重复 | 自 2026-04-05 开案，与 Codex 行为一致 |

### 5.2 已有修复 PR 待合并（建议优先审阅）

| Bug | 修复 PR |
|-----|---------|
| WeCom 中文文件名 MAX_PATH | [PR #61253](https://github.com/NousResearch/hermes-agent/pull/61253) |
| `custom_providers` per-model max_tokens 丢失 | [PR #61254](https://github.com/NousResearch/hermes-agent/pull/61254) |
| 流式响应错误体丢失 | [PR #61251](https://github.com/NousResearch/hermes-agent/pull/61251) |
| venv 环境未继承 | [PR #61221](https://github.com/NousResearch/hermes-agent/pull/61221) |
| 全部 subprocess UTF-8 编码 | [PR #60741](https://github.com/NousResearch/hermes-agent/pull/60741) |
| Desktop esbuild binary staging | [PR #53118](https://github.com/NousResearch/hermes-agent/pull/53118) |
| web extract auxiliary 后端未注册 | [PR #52209](https://github.com/NousResearch/hermes-agent/pull/52209) |

### 5.3 提供商/网络层异常

- **[#60715](https://github.com/NousResearch/hermes-agent/issues/60715)** — Nous inference API 不可达，所有模型超时；属外部服务问题，但需在客户端增加更早熔断。

---

## 六、功能请求与路线图信号

### 6.1 进入实现阶段（PR 已存在）

| 需求 | 关联 PR |
|------|---------|
| 关闭按钮最小化到系统托盘（#61246） | 暂无 PR，建议参考 #61250 类平台插件机制实现 |
| Chat tool 默认展开偏好（#53617 部分重叠） | [PR #61257](https://github.com/NousResearch/hermes-agent/pull/61257) |
| CLI `--recent N` 加载最近消息 | [PR #52173](https://github.com/NousResearch/hermes-agent/pull/52173) |
| Desktop 终端命令完整可见（#61193） | 暂无 PR，但属于 UX 改进 |
| 自托管 OIDC 支持 RP-Initiated 登出（#61243） | 暂无 PR |
| Per-cron reasoning effort 覆盖（#23524） | 暂无 PR |
| 通知未读标记 / 需输入提示（#50718） | 暂无 PR |

### 6.2 路线图信号

- **平台生态扩张**：Blooio iMessage 插件（PR #61250）显示 Hermes 正在构建与 BlueBubbles 并列的多 iMessage gateway，可能成为 v0.19 平台层亮点。
- **可观测性建设**：PR #61252（gateway 健康诊断 OTLP 导出）显示企业级/Coatue 客户驱动的 P0 优先级观测能力正在落地。
- **压缩与成本**：`#39691` 集成 headroom-ai 的需求已积累 9 条评论 + 12 个 👍，是 v0.19+ 的高 ROI 候选。

---

## 七、用户反馈摘要

### 7.1 真实痛点

1. **桌面端工作流意外中断**：Windows 用户频繁误触关闭按钮导致任务中断（#61246）；macOS 用户 ⌘Q 后 Telegram gateway 仍在运行（#61087）。两则反馈均显示**「退出语义」缺乏跨平台统一规范**。
2. **审批可见性不足**：Desktop 审批栏只显示一行 diff，多行变更无法审阅（#61249），而 gateway/Matrix 端体验更好。**用户希望 Desktop 端与 gateway 行为对齐**。
3. **本地模型集成困难**：LM-Studio、Ollama 用户反复报告工具调用碎片化（#5254，跨 3 个月），反映**第三方 provider 适配层鲁棒性不足**。
4. **多端会话不互通**：用户在 Desktop 创建的会话无法在 CLI `/resume` 列表中出现（#59224），需以 ID 或 title 检索，**破坏「会话即工作单元」的心智模型**。
5. **国际化和路径处理**：Windows 平台中文文件名（#61211/61212）和中文 prompt 截断（#39534）持续出现，**东亚用户场景尚未在 CI 覆盖之内**。
6. **状态指示陈旧**：Desktop 长时间显示「Summarizing thread」即使模型已恢复工作（#48098），降低用户对系统状态判断的信任度。
7. **CLI 可发现性差**：`notification_sources` 文档与实现脱节（#39838），fallback 激活静

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-07-09
**项目**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 项目今日呈现"轻活跃"状态：Issues 与 PRs 数量均处于较低水平，但工作流正常运转。过去 24 小时内共有 2 个 Issue 持续活跃、3 个 PR 全部完成生命周期（关闭/合并），且无新版本发布。从结构上看，今日收尾的多为早期提交的功能增强类 PR（如 Grafana Alertmanager 通道、网关绑定回退策略），同时社区关注点正集中在 **NanoKVM 硬件部署兼容性** 与 **QQ 通道流式输出** 两个方向。整体而言，项目处于稳健迭代期，未见紧急修复或重大破坏性变更。

---

## 2. 版本发布

⚪ **今日无新版本发布。** 最近版本信息缺失，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 获取最新动态。

---

## 3. 项目进展

今日有 3 个 PR 完成生命周期（状态：CLOSED），分别覆盖网关可靠性、新通道接入、视觉模型能力三个方向：

### 🔹 PR #3234 — Anthropic Messages 视觉支持修复
- **链接**: [#3234](https://github.com/sipeed/picoclaw/pull/3234)
- **作者**: darren101004
- **类型**: CHORE / Bug fix
- **要点**: 修复 `anthropic_messages` provider 在构造请求体时丢弃 `msg.Media` 字段的问题，使通过 `load_image` 加载的图像能够正确嵌入到用户消息中，供 Claude 系列视觉模型识别。
- **意义**: 修复了视觉模型"看不见图片"的隐性缺陷，是模型接入层的关键补丁。

### 🔹 PR #2278 — 网关绑定回退策略
- **链接**: [#2278](https://github.com/sipeed/picoclaw/pull/2278)
- **作者**: Sakurapainting
- **类型**: Enhancement（gateway / channel / config）
- **要点**: 引入"通配符绑定 + CIDR 白名单"的回退策略。当配置的回环地址（loopback）绑定失败时，网关可降级到通配符绑定并基于 CIDR 进行访问控制，提升在受限环境（如容器、嵌入式设备）下的启动成功率。
- **意义**: 显著提升网关层在异构环境中的部署鲁棒性，对 NanoKVM 等硬件部署场景尤为关键。

### 🔹 PR #2251 — Grafana Alertmanager Webhook 通道
- **链接**: [#2251](https://github.com/sipeed/picoclaw/pull/2251)
- **作者**: loafoe
- **类型**: Enhancement（channel / agent）
- **要点**: 新增 `grafana_alertmanager` 输入型通道，解析 Alertmanager webhook payload 为可读消息，并支持通过 `skill` 配置触发特定技能。
- **意义**: 拓展了 PicoClaw 在运维告警场景下的集成能力，将 LLM Agent 接入到 SRE/可观测性工作流。

**整体评估**: 今日合并方向覆盖了"模型层能力修复 + 部署可靠性 + 集成生态扩展"三个维度，项目在多线并进的轨道上稳步前行。

---

## 4. 社区热点

由于今日 Issues/PRs 的互动量整体偏低（评论数 0–2），可识别的热点话题如下：

### 🔥 热点 #1：NanoKVM 上的 OpenAI GPT 兼容性问题
- **Issue**: [#3195](https://github.com/sipeed/picoclaw/issues/3195)
- **热度**: 2 条评论，创建于 6 月 30 日（已活跃约 9 天）
- **诉求分析**: 用户在 NanoKVM 2.4.0 设备上部署 PicoClaw，按官方文档配置 `gpt-5.4` 时所有交互均失败。这暴露了 **官方文档（model-list）与实际部署（嵌入式硬件）之间的可用性差距**，特别是 NanoKVM 这类新支持平台的端到端验证尚不充分。

### 🔥 热点 #2：QQ 通道流式输出能力补齐
- **Issue**: [#3201](https://github.com/sipeed/picoclaw/issues/3201)
- **热度**: 1 条评论，标记为 [stale]，创建于 7 月 1 日
- **诉求分析**: 目前仅 Telegram 与 Pico WebSocket 实现 `StreamingCapable` 接口，QQ 用户必须等待完整响应生成完毕才能看到内容，体验明显落后。该请求反映了 **多通道功能对齐** 的长期需求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有修复 PR |
|:---:|:---|:---|:---:|
| 🟠 中 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | OpenAI GPT 模型在 NanoKVM 默认配置下完全无法工作，影响该新平台的可落地性 | ❌ 暂无 |
| 🟢 低 | [#3234 (已修复)](https://github.com/sipeed/picoclaw/pull/3234) | Anthropic Messages provider 丢弃图像媒体字段，致视觉模型失明 | ✅ 今日已通过 PR #3234 关闭 |

**评估**: 今日 PR #3234 的合入显著降低了视觉模型通道的隐性风险。NanoKVM 上的 OpenAI 兼容性问题仍是待解决的悬挂风险点。

---

## 6. 功能请求与路线图信号

### 📌 信号 A：流式输出能力向更多通道扩展
- **来源**: [#3201](https://github.com/sipeed/picoclaw/issues/3201)（QQ 通道）
- **判断**: **高概率进入下一迭代**。`StreamingCapable` 已形成清晰的接口抽象，向 QQ 等通道移植属于工程化扩展，社区诉求合理且成本可控。

### 📌 信号 B：可观测性/告警生态集成
- **来源**: PR [#2251](https://github.com/sipeed/picoclaw/pull/2251)（Grafana Alertmanager）
- **判断**: **已落地**（今日关闭）。该 PR 已被社区接纳，标志着 PicoClaw 正从"对话工具"向"运维 Agent 平台"延伸。

### 📌 信号 C：嵌入式/边缘硬件部署
- **来源**: [#3195](https://github.com/sipeed/picoclaw/issues/3195)（NanoKVM）+ PR [#2278](https://github.com/sipeed/picoclaw/pull/2278)
- **判断**: **进行中**。网关绑定回退策略已并入，但 NanoKVM 上的具体模型兼容性仍需维护者侧验证与文档更新。

---

## 7. 用户反馈摘要

- **😟 痛点 — 文档与现实脱节**：用户严格按照 [官方配置文档](https://docs.picoclaw.io/docs/configuration/model-list/) 配置 gpt-5.4，仍无法在 NanoKVM 上跑通。这反映出 **新硬件/平台支持缺乏端到端冒烟测试** 的问题。
- **😟 痛点 — 通道体验不一致**：QQ 用户必须等待完整响应，与 Telegram/Pico WebSocket 的流式体验形成落差，损害产品一致性。
- **🙂 满意点（侧面）**：PR #3234 表明社区贡献者能主动发现并修复较深层的协议层 bug，说明项目具备良好的协作成熟度。
- **🔇 沉默信号**：今日所有 PR 均无评论、无点赞，互动性较低，可能暗示 PR 规模较小或维护者评审流程较快。

---

## 8. 待处理积压

以下 Issue/PR 已开放多日，建议维护者优先关注：

| 编号 | 类型 | 标题 | 开放天数（截至 7-09） | 风险 |
|:---|:---:|:---|:---:|:---|
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | BUG | OpenAI GPT does not work on NanoKVM with default config | ~9 天 | 🟠 影响 NanoKVM 用户首日体验 |
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | Feature | Support streaming output for QQ channel | ~8 天（已标 stale） | 🟡 用户体验一致性 |

**建议**:
1. 维护者可在 #3195 下追加复现指引或临时 workaround，避免同类用户在 NanoKVM 上反复踩坑。
2. #3201 已被系统标记为 stale，建议要么恢复活跃要么正式关闭以保持 Issue 列表整洁。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|:---|:---:|:---|
| 活跃度 | ⭐⭐☆☆☆ | Issues/PRs 数量偏低，处于常规维护节奏 |
| 代码流入 | ⭐⭐⭐⭐☆ | 三个 PR 覆盖模型层、网关层、集成层，质量较高 |
| 响应及时性 | ⭐⭐☆☆☆ | 关键 Issue（#3195）已开放 9 天无明确进展 |
| 社区互动 | ⭐⭐☆☆☆ | 评论与点赞稀少，互动深度不足 |
| 文档同步 | ⭐⭐☆☆☆ | 存在文档与实际行为不一致的反馈 |

**综合判断**: 项目整体处于 **"稳健但需提速"** 的状态。下一步若能在 1–2 周内闭环 #3195 并推进 QQ 流式输出（#3201），将显著改善用户侧的"首日体验"。

---

*本日报基于 GitHub 公开数据生成，数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期：2026-07-09**

---

## 1. 今日速览

NanoClaw 仓库今日呈现**中等偏高的活跃度**：过去 24 小时新开/活跃 Issues 2 条，PR 更新 28 条（其中 4 条已合并/关闭，24 条仍在评审中）。核心团队（core-team）成员主导了几乎所有重要变更，重点方向集中在 **scheduled-tasks 系列重构**（ncl CLI 控制面）与 **agent harness 能力收紧**（per-group 能力开关、CLI 工具白名单对齐）。无新版本发布，社区贡献的 PR 比重较低。整体来看项目处于**功能深化与稳定性修复并行阶段**，节奏健康。

---

## 2. 版本发布

**今日无新版本发布。** 当前 CHANGELOG 扩充 PR（#2798，v2.1.17）仍处于待合并状态，提示下一次版本发布预计将整合本轮 PR train 的内容。

---

## 3. 项目进展

今日有 3 条 PR 在数据样本中显示为 CLOSED（实际可能为 4 条，另有 1 条未进入 Top20），均为基础设施与控制面改进：

| PR | 标题 | 影响 |
|---|---|---|
| [#1702](https://github.com/qwibitai/nanoclaw/pull/1702) | fix: break for-await loop on result to prevent IPC message loss | **重要修复**：解决 `for-await` 循环未中断导致的 IPC 消息丢失问题，已关闭 |
| [#2978](https://github.com/qwibitai/nanoclaw/pull/2978) | ci: auto-label PRs from core team members | **流程优化**：核心团队成员 PR 自动打 `core-team` 标签，提升仓库治理效率 |
| [#2980](https://github.com/qwibitai/nanoclaw/pull/2980) | ncl CLI: verb-level args, deep help, server-rendered human view | **关键里程碑**：`scheduled-tasks` 6-PR train 的 **Part 1/6**，为后续任务控制面提供 CLI 参数校验与可读视图基座 |

**项目推进评估**：scheduled-tasks 重构已迈出第一步（CLI 基座落地），后续 Part 2（#2981，任务控制面）已同日开启评审，意味着这是**有节奏、分阶段的架构演进**。配合 PR #2982（CLI 工具白名单与 pinned 版本对齐）、#2983（harness 能力开关）等修复/收敛类变更，项目的"内部一致性"正在被系统性强化。

---

## 4. 社区热点

由于数据样本显示所有 PR 评论数均为 `undefined`、Issues 评论数为 0，以下按**功能影响力与核心团队背书**排序作为"潜在热点"：

- **🥇 [#2742 — PR Factory：PR 评审、Triage 与测试的可发布 Recipe](https://github.com/qwibitai/nanoclaw/pull/2742)**（gavrielc，6 月 11 日创建，仍 OPEN）
  这是社区贡献中最具野心的提案——将每个 PR 转化为由专属 worker agent 评审、测试规划并交付至 Slack 线程的工作流。它代表了 NanoClaw **"用 NanoClaw 治理 NanoClaw"** 的元能力诉求，已开放 28 天仍待合并，**值得维护者给出明确反馈**。

- **🥈 [#2981 — ncl tasks 控制面、隔离 session、script gate](https://github.com/qwibitai/nanoclaw/pull/2981)**（omri-maya，scheduled-tasks Part 2/5）
  作为今日最重磅的新增 PR（supersede #2947），承载了完整任务资源（create/update/run/append-log、per-series 隔离 session、运行历史、pre-task script gate），是项目**调度子系统**的核心。

- **🥉 [#2984 — Discord 线程按主题自动重命名](https://github.com/qwibitai/nanoclaw/issues/2984)**（eagansilverpathmarketing）
  真实场景痛点：busy 服务器中默认日期命名的 Discord 线程"无法扫读"，建议在 host 侧新增 `rename_thread` 工具让 agent 主动给线程命名。

**诉求分析**：社区热点集中在三类——**元工作流自动化**（PR Factory）、**企业级调度控制**（scheduled-tasks）、**日常使用 UX 改进**（Discord 线程命名）。三者的共同点是都在 NanoClaw 已有的"agent-on-host"模型上做加法，而非另起炉灶，说明社区对项目方向**认可度高**。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度

- **[#2985 — opencode provider 静默无回复](https://github.com/qwibitai/nanoclaw/issues/2985)**（fjnoyp，2026-07-08）
  **症状**：使用 opencode provider 时，长 agentic turn 完成后 agent 输出完整答案，但消息 bot **不发送任何回复且不报错**，外观上像"机器人忽略消息"。**可重复触发**。
  **根因方向**：最终 text snapshot 错过了 `session.idle` 状态，导致 `message.part.delta` 中的回答未被消费。
  **影响**：用户信任度直接受损——bot "假装在工作"，却什么都不说。
  **当前状态**：🚫 无对应 fix PR，需核心团队优先响应。

### 🟡 中严重度

- **[#2921 — fix(compose): gate skill fragments on group skill selection](https://github.com/qwibitai/nanoclaw/pull/2921)**（michaelzetune）
  `composeGroupClaudeMd` 会把所有 skill 的 `instructions.md` 内联到每个 group 的 `CLAUDE.md`，**忽略 group 的 skill 选择配置**。会导致 group 收到本不该看到的指令，污染上下文与权限模型。

- **[#1702 — IPC 消息丢失](https://github.com/qwibitai/nanoclaw/pull/1702)** ✅ 已修复
  `for-await` 循环未 `break` 导致 result 被丢弃。今日已 CLOSED。

- **[#2878 — Codex 重连时存在过期 OpenAI secret](https://github.com/qwibitai/nanoclaw/pull/2878)**（glifocat）
  `runCodexAuthStep()` 只要发现 OneCLI 存在匹配 secret 即返回成功，但若 token 已过期或被吊销，Codex agent 会中途崩溃报 *"Your access token could not be refreshed"*。OPEN 状态。

- **[#2913 — WhatsApp Cloud bridge 注册冲突](https://github.com/qwibitai/nanoclaw/pull/2913)**（glifocat）
  `@chat-adapter/whatsapp` 硬编码 `name = "whatsapp"`，与原生 Baileys adapter 冲突，导致 channel registry 命中错误实例。

- **[#2798 — CHANGELOG 扩充待合并](https://github.com/qwibitai/nanoclaw/pull/2798)**（glifocat）
  v2.1.17 changelog 已就绪但未合入，延迟了下一次版本发布节奏。

### 🟢 低严重度

- **[#2982 — agent-runner 工具白名单与 pinned CLI 漂移](https://github.com/qwibitai/nanoclaw/pull/2982)**（gabi-simons）
  `TOOL_ALLOWLIST` 列出 5 个工具在 pinned claude-code CLI 2.1.197 上不存在（含 `Task`→`Agent` 重命名、`TodoWrite`、`TeamCreate`、`TeamDelete`、`ToolSearch`）。OPEN。

---

## 6. 功能请求与路线图信号

| 请求/信号 | 来源 | 已被 PR 跟进？ | 进入下版本概率 |
|---|---|---|---|
| **Scheduled tasks 控制面（ncl tasks、隔离 session、script gate）** | PR #2981 | ✅ 自身即为实现 | ⭐⭐⭐⭐⭐ 极可能（已合并前置 #2980） |
| **Discord 线程按主题自动重命名（`rename_thread` tool）** | Issue #2984 | ❌ 无 | ⭐⭐⭐ 中等（社区请求，单点能力） |
| **PR Factory（meta 评审/测试/Triage 工作流）** | PR #2742 | ✅ 已提 PR | ⭐⭐ 待定（已开放 28 天，无明确核心团队信号） |
| **实例级默认 agent provider** | PR #2906 | ✅ 自身即为实现 | ⭐⭐⭐⭐ 高（核心团队主导） |
| **OneCLI credential card 的 reject-with-reason** | PR #2941 | ✅ 自身即为实现 | ⭐⭐⭐⭐ 高（延续 #2832 设计） |
| **Setup 向导模板选择 + 首 agent 印记** | PR #2909 | ✅ 自身即为实现 | ⭐⭐⭐⭐ 高（Part 2/2，依赖已合入的 loader） |
| **per-group harness 能力开关（agent-teams & workflow 默认关闭）** | PR #2983 | ✅ 自身即为实现 | ⭐⭐⭐⭐ 高（与现有 `schedule_task` 收敛策略一致） |

**路线图信号总结**：核心团队的"scheduled-tasks train" 与 "harness 能力收敛"两大主线已十分清晰；`ncl` CLI 正在成为新的**操作平面**，而 `setup` 向导 + `add-teams` 的 SSF 重构则预示**首次安装体验**即将大幅简化。Discord 线程重命名属社区补强需求，体量小、价值直观，有望快速跟进。

---

## 7. 用户反馈摘要

由于今日 Issues/PR 评论数均为 0 或未披露，以下从**摘要与上下文**提炼：

- **😟 痛点：bot 静默失败**（[#2985](https://github.com/qwibitai/nanoclaw/issues/2985)）
  用户 fjnoyp 在长 agentic 任务场景下反复遇到"agent 完成但 bot 不回复"。**没有任何错误提示**是最严重的问题——既无 trace 可追，也无法确认是 provider 问题还是 bot 问题。该反馈反映出生产场景对**可观测性（observability）**的强烈需求。

- **😟 痛点：Discord 线程可读性差**（[#2984](https://github.com/qwibitai/nanoclaw/issues/2984)）
  eagansilverpathmarketing 在 busy server 上积累大量默认日期命名的 thread，扫描成本高。**典型企业 Slack/Discord 工作流诉求**：channel/thread 元信息需要由 agent 主动维护。

- **😊 满意信号（间接）**
  PR Factory（#2742）等大型社区提案的存在本身说明：**用户愿意在 NanoClaw 之上构建产品级工作流**，反映出对项目长期价值的认可。

- **😐 隐性不满**
  PR #2742 开放 28 天仍未合并；WhatsApp Cloud 修复（#2913 + #2914）从 7 月 2 日至今 7 天仅停留在评审中。**社区贡献 PR 的响应节奏**有改善空间。

---

## 8. 待处理积压

按开放时长排序，需维护者优先关注：

| 编号 | 类型 | 标题 | 创建日期 | 开放天数 |
|---|---|---|---|---|
| [#2742](https://github.com/qwibitai/nanoclaw/pull/2742) | PR (Skill) | PR Factory — PR 评审/Triage/测试 Recipe | 2026-06-11 | **28 天** |
| [#2770](https://github.com/qwibitai/nanoclaw/pull/2770) | PR (core-team) | fix(codex): deliver harness file events + `file` to ProviderEvent | 2026-06-14 | 25 天 |
| [#2798](https://github.com/qwibitai/nanoclaw/pull/2798) | PR (core-team) | chore(release): expand CHANGELOG for v2.1.17 | 2026-06-17 | 22 天 |
| [#2873](https://github.com/qwibitai/nanoclaw/pull/2873) | PR (core-team) | fix(skills): split pre-flight from credentials | 2026-06-27 | 12 天 |
| [#2878](https://github.com/qwibitai/nanoclaw/pull/2878) | PR (core-team) | fix(codex): allow reconnect with stale OpenAI secret | 2026-06-28 | 11 天 |
| [#2909](https://github.com/qwibitai/nanoclaw/pull/2909) | PR (core-team) | feat(setup): template setup flow + first-agent stamping | 2026-07-02 | 7 天 |
| [#2913](https://github.com/qwibitai/nanoclaw/pull/2913) / [#2914](https://github.com/qwibitai/nanoclaw/pull/2914) | PR (core-team) | WhatsApp Cloud bridge 注册修复 + 文档 | 2026-07-02 | 7 天 |
| [#2921](https://github.com/qwibitai/nanoclaw/pull/2921) | PR (社区) | fix(compose): gate skill fragments on group skill selection | 2026-07-03 | 6 天 |

**维护者建议**：
1. **#2742（PR Factory）已超 4 周**，应给出明确 maintainer 决策（合入/拒绝/拆分），避免社区贡献者流失。
2. **#2798（CHANGELOG）与 #2873（skills 拆分）** 同属 release-blocking 类，应在下一次发版前一并清理。
3. **#2985（opencode provider 静默失败）** 作为高严重度 Bug，建议本周内出 fix PR 或至少给出根因确认。

---

## 项目健康度评分（5 分制）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | PR 28 条更新，核心团队主导，节奏稳定 |
| 稳定性 | ⭐⭐⭐ | 出现 1 例高严重度静默失败 Bug，未及时修复 |
| 社区参与 | ⭐⭐⭐ | 有大型社区提案（PR Factory）但响应慢 |
| 路线图清晰度 | ⭐⭐⭐⭐⭐ | scheduled-tasks + harness 收敛两大主线明确 |
| 文档/发版节奏 | ⭐⭐⭐ | CHANGELOG 待合入，版本发布滞后 |

**综合健康度：⭐⭐⭐⭐（良好）**——项目处于产品化深水区，主要风险点在于"高严重度 Bug 的响应速度"与"社区大型 PR 的评审反馈"。

---

*本报告由 GitHub 数据自动生成，所有链接指向 nanoclaw 仓库（github.com/qwibitai/nanoclaw）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-07-09**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 今日整体活跃度处于高位，共 21 条 Issues 动态、50 条 PRs 动态，是近几周最密集的开发日之一。今日工作重心明显围绕两大主线：一是 **BenKurrek 主导的 NEA-25「统一扩展表面（Unified Extension Surfaces）」大规模重构栈**（一次推送了 7 个栈式 PR，净删约 900 行代码），二是 QA 团队的 **bug_bash 收尾批次**（当日新增 6 条 P2/P3 Bug）。Bug 修复层面进展顺利，单日净关闭 6 条 Issue，但仍有多个中高级别稳定性问题待跟进。**没有新版本发布**，所有变更仍在评审/合并通道中。

---

## 2. 版本发布

**今日无新版本发布。** 最近一个 tag 也未在数据中体现。建议关注近期 NEA-25 栈合并完成后是否会出现 0.29.x 或更跳跃式的版本号。

---

## 3. 项目进展（已合并/关闭的重要 PR 与 Issue）

| 类型 | 编号 | 标题 | 影响 |
|---|---|---|---|
| ✅ Closed Issue | [#5419](https://github.com/nearai/ironclaw/issues/5419) | 无重命名自动化入口 | 关闭——可能已被 WebUI v2 中的修复覆盖 |
| ✅ Closed Issue | [#3535](https://github.com/nearai/ironclaw/issues/3535) | UI 时间戳不正确 | 长期 P1 Bug 终于关单，聊天消息时间戳已修复 |
| ✅ Closed Issue | [#5768](https://github.com/nearai/ironclaw/issues/5768) | Reborn Projects 页 i18n 不全 | 中文 UI 覆盖率提升 |
| ✅ Closed Issue | [#5770](https://github.com/nearai/ironclaw/issues/5770) | 工具权限下拉框替换为自定义组件 | Reborn Settings 视觉一致性提升 |
| ✅ Closed Issue | [#5787](https://github.com/nearai/ironclaw/issues/5787) | Slack 配对过期码 flaky 测试 | 暂停 tokio 时钟与 chrono 墙钟 TTL 竞态修复 |
| ✅ Closed Issue | [#4108](https://github.com/nearai/ironclaw/issues/4108) | Nightly E2E 失败 | 自动化标记，需关注后续重跑 |

**进展评估：** 在 Bug 治理和 UI 一致性方面有可见推进，但**没有 PR 在今日合并落地**（已合并/关闭的 11 条 PR 中多为关闭/拒绝），说明今日仍处于「评审与积压」阶段，明日合并高峰可期。

---

## 4. 社区热点

### 🔥 最受关注的 PR 栈——NEA-25「统一扩展表面」大规模重构
BenKurrek 一日内推送了完整的 **NEA-25 7-PR 栈**（以及收尾 PR #5850、#5849），目标是让「extension」成为顶层产品对象，channel 仅是其声明的一个能力面（capability surface），彻底消除 legacy kind 字符串混淆。栈结构如下：

| 顺序 | PR | 主题 |
|---|---|---|
| 1/7 | [#5833](https://github.com/nearai/ironclaw/pull/5833) | 能力面词汇表 + manifest 投影 |
| 2/7 | [#5839](https://github.com/nearai/ironclaw/pull/5839) | manifest v2 全量切换，host_api 契约全面铺开 |
| 3/7 | [#5842](https://github.com/nearai/ironclaw/pull/5842) | 用 extension-surface 取代 connectable-channels rail（净 −900 行） |
| 4/7 | [#5845](https://github.com/nearai/ironclaw/pull/5845) | Slack 合并：slack_bot + slack_personal 退休为一个 `slack` |
| 5/7 | [#5847](https://github.com/nearai/ironclaw/pull/5847) | 扩展线缆携带 runtime + surfaces，去除 kind 字符串 |
| 6/7 | [#5848](https://github.com/nearai/ironclaw/pull/5848) | 零 legacy 架构门禁测试 |
| 7/7 | [#5849](https://github.com/nearai/ironclaw/pull/5849) | 新建 `.claude/skills/reborn-extension-surfaces` 文档 |
| 收尾 | [#5850](https://github.com/nearai/ironclaw/pull/5850) | 审计修复：删除残余 shim、统一工具视图 |

**背景诉求：** 维护者长期被「产品类型（channel/tool/auth）」与「运行时实现（kind）」混杂的模型困扰，Slack 同时存在 `slack_bot` 和 `slack_personal` 两个扩展就是典型症状。该栈用机器化检查（架构门禁测试 #5848）替代人工约定，是「零 legacy」原则的落地。

### 📌 其他高关注度 PR
- [#5857](https://github.com/nearai/ironclaw/pull/5857) **perf(reborn): 降低 API 容量预模型延迟**（XL）—— 缓存系统技能包 fs descriptor 并发优化。
- [#5525](https://github.com/nearai/ironclaw/pull/5525) **私有工具安装 (#5459 part 2)**——SSO 非管理员用户可独立安装工具。
- [#5831](https://github.com/nearai/ironclaw/pull/5831) **WebUI 工作区浏览器作用域隔离**——修复跨用户/跨项目可见性漏洞。
- [#5821](https://github.com/nearai/ironclaw/pull/5821) **WebUI 助手文本流式输出**——通过投影 SSE 转发 NEAR AI Chat 流。
- [#5763](https://github.com/nearai/ironclaw/pull/5763) **失败运行显示连接丢失**——SSE 断开时正确停止加载指示器。
- [#5817](https://github.com/nearai/ironclaw/pull/5817) **不再把小数误识别为能力 ID**——修复 reborn 模型网关的「x.y 命名空间」误判。

---

## 5. Bug 与稳定性

### 🔴 P2 严重（功能失效/集成断裂）
| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub issue 搜索/创建 HTTP 403 | OPEN | ❌ 无 |
| [#5837](https://github.com/nearai/ironclaw/issues/5837) | 失败 routine 的「Open run / Logs」按钮不可点击 | OPEN | ❌ 无 |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | 多工具调用后 context compaction 报错 | OPEN | ❌ 无 |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | 5 分钟一次 routine 全部失败："No thread attached" | OPEN | ❌ 无 |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack 断开连接请求被 agent 拒绝 | OPEN | ❌ 无 |
| [#5856](https://github.com/nearai/ironclaw/issues/5856) | Admin 面板无 API token 重新签发入口，且按钮孤立 | OPEN | ❌ 无 |

### 🟡 P3 中等（UI/体验）
| Issue | 标题 | 状态 |
|---|---|---|
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | Chat UI 终端图标无禁用选项 | OPEN |
| [#5835](https://github.com/nearai/ironclaw/issues/5835) | "Jump to latest" 按钮位置过高且多余出现 | OPEN |

### 📊 自动化质量追踪
- [#5859](https://github.com/nearai/ironclaw/issues/5859) **每日失败分类（2026-07-09）**：pinchbench 出现 44 个 non-pass，**被上游 provider 限流饱和**——基本每个 LLM 调用都失败，疑似外部因素。
- [#5788](https://github.com/nearai/ironclaw/issues/5788) **每日失败分类（2026-07-08）**：pinchbench 3-of-4 non-pass，harness 缺陷叠加一个主导故事。

**整体稳定性信号：** ⚠️ 多个 routine 与运行链路相关 P2 Bug 集中爆发，**很可能与 NEA-25 重构过程中的行为变化有关**，建议 QA 在 NEA-25 栈合并前后跑完整回归。

---

## 6. 功能请求与路线图信号

| 信号源 | 需求 | 已有对应工作 |
|---|---|---|
| [#5820](https://github.com/nearai/ironclaw/issues/5820) | **WebChat 附件文件数限制（10 个）+ 静默丢弃 bug**——真实工作流两次触顶 | 待 PR |
| [#5856](https://github.com/nearai/ironclaw/issues/5856) | Admin 面板需要 API token 重签发流；当前 `#5779` 的后续 | 待 PR |
| [#5857](https://github.com/nearai/ironclaw/pull/5857) | 预模型延迟优化 → 容量提升 | 评审中 |
| [#5525](https://github.com/nearai/ironclaw/pull/5525) | 私有工具安装 | 评审中 |
| [#5780](https://github.com/nearai/ironclaw/pull/5780) | 管理员安装 + 私有 skills 支持 | 评审中 |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | WASM 工具 zip 安装 + 租户级共享凭据 (#5459 part 1) | 评审中 |

**路线图判断：** 「私有化扩展能力」是 #5459 系列的明确方向，分 part 1（[#5499](https://github.com/nearai/ironclaw/pull/5499)）和 part 2（[#5525](https://github.com/nearai/ironclaw/pull/5525)）落地；NEA-25 完成合并后，下个版本有望承载这些能力并解决 #5820 的附件上限。

---

## 7. 用户反馈摘要

提炼自 Issue 评论和描述：

- **真实工作流瓶颈**：WebChat 10 个附件上限已在客户真实工作流中触顶两次（[#5820](https://github.com/nearai/ironclaw/issues/5820)），且超额时**部分文件被静默丢弃**——这是比上限本身更严重的 UX Bug。
- **自动化命名失控**：Agent 自动生成的 routine 名称过长或被截断（如 "Check Gmail for @gmail.com emails -> TA..."），用户**完全没有重命名入口**（[#5419](https://github.com/nearai/ironclaw/issues/5419)，已关闭但路径需验证）。
- **日常可观察但难修复的 UX 摩擦**：终端图标无禁用项（[#5705](https://github.com/nearai/ironclaw/issues/5705)）、Logs 深链需点击两次（[#5557](https://github.com/nearai/ironclaw/issues/5557)）——这些「能跑但不好用」的细节正在累积。
- **Agent 拒绝合理请求**：用户请求 Slack 断开时 agent 回复无关内容（[#5834](https://github.com/nearai/ironclaw/issues/5834)），反映 agent 在集成生命周期操作上的对齐仍不足。
- **Routine 几乎全失败**：`ironclaw-issues-slack-summary` 5 分钟一次 0% 成功率（[#5836](https://github.com/nearai/ironclaw/issues/5836)），生产可用性受质疑。
- **i18n 不完整**：中文用户报告 Projects 页面仅部分翻译（[#5768](https://github.com/nearai/ironclaw/issues/5768)，已修复）。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 标题 | 风险 | 状态 |
|---|---|---|---|
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | GitHub 集成 HTTP 403 | **核心集成断裂，无 fix PR** | OPEN 2 天，0 👍 |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs 深链需点击两次 | UX 回归 | OPEN 7 天 |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) | 终端图标无禁用项 | UX 一致性 | OPEN 3 天 |
| [#5856](https://github.com/nearai/ironclaw/issues/5856) | Admin 面板 API token 重签发缺失 | **生产运维阻塞** | OPEN 1 天 |
| [#5837](https://github.com/nearai/ironclaw/issues/5837) | Routine run 操作按钮不可点 | P2 调试阻塞 | OPEN 1 天 |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | Context compaction 报错 | P2 多步任务不可用 | OPEN 1 天 |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | Routine 100% 失败 | P2 生产事故 | OPEN 1 天 |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | Slack 断开被 agent 拒 | P2 集成生命周期 | OPEN 1 天 |

**给维护者的优先级建议：**
1. **立刻**：#5702（GitHub 403 阻断核心集成）、#5836（routine 全失败）、#5856（admin 无 token 重签发）。
2. **本周末前**：#5837 / #5838 / #5834 这三个 P2 新鲜 Bug 集中批次——它们是否与 NEA-25 行为变更相关需要排查。
3. **关注回归**：NEA-25 栈合并后必须重跑 routine 全链路回归，否则 #5836/#5838 类问题可能放大。

---

## 健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 单日 50 PR、21 Issue，节奏极强 |
| 评审/合并效率 | ⭐⭐ | 大量 PR 在评审通道，今日 PR 合并数偏低 |
| Bug 治理 | ⭐⭐⭐ | 关闭 6 个 Issue 积极，但同时新增 15 个，新 Bug 流入 > 修复 |
| 稳定性 | ⭐⭐ | 多个 routine / 运行链路 P2 集中爆发 |
| 路线清晰度 | ⭐⭐⭐⭐ | NEA-25 栈体现强架构治理意图 |

**整体判断：** 处于「重构红利兑现前夜」——今日看似停滞（无版本、无合并）实则在大规模栈合并前的最后冲刺；维护者应警惕 NEA-25 落地带来的回归风险，并优先处理 6 个未修复 P2 Bug。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-07-09
**数据来源**：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 过去 24 小时项目活跃度**中等偏高**，共发生 3 条 Issue 更新、13 条 PR 更新，呈现"PR 集中合并、Issue 反馈新增"的态势。维护团队今日一次性合并/关闭了 10 条 PR，重点修复了多 agent 下的 USER.md 跨工作区覆盖、IM 会话映射作用域、内存搜索默认配置以及 Cowork 权限弹窗最小化等多项关键问题，**迭代质量较高**。但需关注仍有 2 条长期未解决的 Issue 处于 Open 状态，且 0 个新版本发布，修复成果尚未打包到可分发版本中。

---

## 2. 版本发布

**无新版本发布**。今日合并的 10 条 PR 均为 bug 修复与体验优化，尚未触发版本号变更。建议维护者评估是否进入下一个 patch 版本发布流程，将今日修复同步给 4.1 版本受影响的用户。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR  | 标题 | 类别 | 意义 |
|-----|------|------|------|
| [#2295](https://github.com/netease-youdao/LobsterAI/pull/2295) | **fix(agent): 按 agent 工作区隔离 USER.md 引导文件** | Bug Fix | 修复了多 agent 下 USER.md 互相覆盖的核心问题，对应用户报告 #2293 |
| [#2298](https://github.com/netease-youdao/LobsterAI/pull/2298) | **fix(im): 按 agent 作用域化 IM 渠道会话映射** | Bug Fix | 解决了不同 agent 下 IM 会话映射冲突，并保留向后兼容 |
| [#2297](https://github.com/netease-youdao/LobsterAI/pull/2297) | **fix(openclaw): 默认内存搜索回退到本地 FTS** | Bug Fix | 为未启用 embedding 的用户恢复 trigram FTS，并附带升级迁移逻辑 |
| [#2296](https://github.com/netease-youdao/LobsterAI/pull/2296) | **feat(cowork): 权限弹窗支持最小化** | Feature | 提升 Cowork 多人协作场景的交互体验，权限确认可最小化并显示状态条 |
| [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) | **fix(cowork): 同步子 agent 工具历史** | Bug Fix | 修复子 agent 会话页工具调用/结果缺失问题，并恢复孤儿工具结果 |
| [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) | **fix: 使用 crypto.randomUUID 替代 Math.random** | 安全修复 | **安全加固** — 修复 SSE 流式请求 ID 可预测导致的串流订阅风险 |

### 📊 整体评估

- 推进方向：**Agent 多租户隔离（USER.md / IM 会话）、安全强化、协作 UX**
- 项目向前迈进程度：**中度** —— 没有新特性大版本，但核心数据隔离与安全机制得到系统性修复
- 安全姿态良好，主动修复了密码学随机数问题（PR #1401）

---

## 4. 社区热点

### 🔥 最活跃讨论

**[#1400 - 4.1 版本网关反复启动失败](https://github.com/netease-youdao/LobsterAI/issues/1400)** ⭐
- 评论数：7（今日 Issue 中最高）
- 状态：已 **CLOSED**（但标记 [stale]）
- 核心诉求：用户从 3.30 升级到 4.1 后网关无限重启，附带 qwen3.5-plus LLM 接入 web-extractor 依赖 web-search 的连环配置冲突
- ⚠️ **建议关注**：作为 high-priority 用户报告被关闭为 stale 而非被官方确认修复，用户需要明确答复

**[#2293 - 多 agent 下 USER.md 被覆盖](https://github.com/netease-youdao/LobsterAI/issues/2293)** 🆕
- 评论数：1，今日新开
- 状态：OPEN
- 核心诉求：编辑任一 agent 的"关于你"或 USER.md 都会覆盖所有其他 agent，影响多 agent 场景使用
- ✨ **亮点**：该 Issue 已被 [PR #2295](https://github.com/netease-youdao/LobsterAI/pull/2295) 修复，响应速度值得肯定

### 社区需求分析
- 多 agent 隔离是当前最强烈的真实需求
- 升级路径中的回归问题（4.1 升级导致瘫痪）是用户信任度的最大威胁

---

## 5. Bug 与稳定性

### 🔴 高严重度

| Issue | 描述 | 是否有 Fix | 状态 |
|-------|------|-----------|------|
| [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1 网关无限重启循环 + qwen3.5-plus 配置冲突 | ❌ 无明确关联 PR | **CLOSED (stale)** ⚠️ |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | USER.md 跨 agent 覆盖 | ✅ [PR #2295](https://github.com/netease-youdao/LobsterAI/pull/2295) | OPEN → 已修复待发版 |

### 🟡 中严重度

| Issue | 描述 | 是否有 Fix | 状态 |
|-------|------|-----------|------|
| [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名称重复未校验 | ❌ 无 PR | OPEN (stale) |

### 📈 风险评估
- **PR #1401 修复的 Math.random 安全隐患**是高严重度风险，但未单独披露 CVE，影响范围难以估计
- **PR #2297 涉及的内存搜索迁移**是潜在回归点，需验证存量用户数据无丢失

---

## 6. 功能请求与路线图信号

### 📌 已合并/即将合并的功能增强
- **Cowork 权限弹窗最小化**（[PR #2296](https://github.com/netease-youdao/LobsterAI/pull/2296)）→ 反映多 agent 协作场景持续完善
- **本地 FTS 作为默认内存搜索**（[PR #2297](https://github.com/netease-youdao/LobsterAI/pull/2297)）→ 降低默认部署门槛

### 📂 长期搁置的 Open PR（建议路线图评估）
- **[#1346 - skills 管理](https://github.com/netease-youdao/LobsterAI/pull/1346)**：自 4 月开放至今仍 stale
- **[#1347 - 定时任务 Cron 自定义调度 + Agent/Model 绑定](https://github.com/netease-youdao/LobsterAI/pull/1347)**：功能完整度较高，包含可视化和原始表达式双模式，值得进入下一版本路线图
- **[#2294 - TakoAPI 目录徽章](https://github.com/netease-youdao/LobsterAI/pull/2294)**：项目曝光度提升，可快速合入

### 💡 路线图信号
- **多 agent 工作区隔离** 已成为最核心的演进方向
- **定时任务模块**正在迭代多个体验优化 PR（#1347、#1404、#1406），建议整合为一个完整特性发布
- **本地优先 / 离线能力**（FTS 兜底）暗示对私有化部署的重视

---

## 7. 用户反馈摘要

### 😣 真实痛点

1. **升级即瘫痪**（来自 #1400）：用户描述从 3.30 升级 4.1 后"彻底瘫痪"，影响核心使用。说明**升级路径与配置兼容性测试**是当前最严重的体验断点。

2. **多 agent 名存实亡**（来自 #2293）：用户明确表达"就没法对不同 agent 建立不同的需求"，暴露**多 agent 系统的数据隔离是基础承诺**而非可选功能。

3. **LLM 模型与组件耦合**（来自 #1400）：qwen3.5-plus 自定义 LLM 因 web-extractor 依赖 web-search 而无法使用，反映**插件/扩展系统的依赖图设计不够透明**。

### 😌 积极信号
- 用户愿意主动提供邮箱、微信联系方式（#1400），说明**用户对项目仍有较高信任和求助意愿**，并未流失
- 新 Issue #2293 描述详细，附测试步骤（关闭软件后单独修改 workspace-* 下 USER.md），代表社区用户**质量较高、能提供可复现证据**

### 📊 满意度推断
- 短期：**不满意** — 4.1 升级事故 + 多 agent 数据相互覆盖影响核心场景
- 长期：**乐观** — 维护团队当日即修复 #2293 相关问题，响应速度属于开源项目中上水平

---

## 8. 待处理积压 ⚠️

| 类型 | 编号 | 标题 | 创建日期 | 状态 |
|------|------|------|---------|------|
| Issue | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1 版本网关反复启动失败 | 2026-04-03 | **CLOSED (stale)** 🔴 |
| Issue | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名称重复没有校验 | 2026-04-02 | OPEN (stale) |
| PR | [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | Feat/skills management | 2026-04-02 | OPEN (stale) |
| PR | [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | 定时任务 Cron 自定义调度 | 2026-04-02 | OPEN (stale) |
| PR | [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) | docs: add TakoAPI badge | 2026-07-08 | OPEN |

### 📣 给维护者的提醒
- **#1400 不应作为 stale 关闭**：7 条评论 + 完整联系方式 + 严重程度 = 应当官方确认已修复或转发至 4.1.1 修复版本说明
- **#1347 PR 内容详实**，建议作为下一个 minor 版本的功能候选进行正式 review
- **#1346 skills 管理** 长期未响应，可能存在维护者人手不足的问题，建议在 issue 中给出明确意向

---

## 📈 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐⭐ | 10 条 PR 当日处理，节奏良好 |
| 安全响应 | ⭐⭐⭐⭐ | 主动修复 crypto 随机数问题 |
| 社区响应 | ⭐⭐⭐ | 新 Issue 当日关联修复 PR，但存在 stale 关闭争议 |
| 版本管理 | ⭐⭐ | 0 个新发布，修复未及时触达用户 |
| 积压管理 | ⭐⭐ | 多条 4 月以来的 Issue/PR 仍处 stale 状态 |
| **综合** | **⭐⭐⭐ (3.0/5)** | 代码层面活跃稳健，但版本节奏与积压治理需加强 |

---

*本报告基于公开 GitHub 数据自动生成，所有链接均指向 [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) 仓库。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报

**日期：2026-07-09** | **仓库：** [TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)

---

## 1. 今日速览

TinyClaw 今日整体活跃度**偏低**。过去 24 小时内仓库无新 Issue 提交、无新版本发布，仅有 1 条此前已存在的安全加固 PR（[#44](https://github.com/TinyAGI/tinyagi/pull/44)）被关闭，疑为合并入库或维护者主动关闭。社区讨论维度趋于静默，但安全方向的关键 PR 落地标志着项目在 **Ingress 安全、Agent 隔离、文件出站、Bundle 完整性** 四个面取得阶段性进展。整体来看，项目处于"安全收尾、社区冷却"的阶段，需要关注后续是否释放对应版本 tag。

---

## 2. 版本发布

**今日无新版本发布。** 鉴于安全加固类 PR [#44](https://github.com/TinyAGI/tinyagi/pull/44) 已关闭，强烈建议维护者尽快发布包含此次变更的 patch 版本（如 `v0.x.y`），以便用户能够通过标准升级路径获取安全修复。

---

## 3. 项目进展

### ✅ PR #44 — Harden channel auth, file safety, and update integrity — **已关闭**

- **链接：** https://github.com/TinyAGI/tinyagi/pull/44
- **作者：** coreyone
- **生命周期：** 创建于 2026-02-13，更新于 2026-07-08，状态为 `CLOSED`
- **点赞：** 0（社区参与度较低）
- **核心变更：**
  - **入站鉴权强化：** 在 Telegram、Discord、WhatsApp 及队列处理链路中默认开启 **发送者白名单（sender allowlist）**
  - **Agent 调用收敛：** 限制 Agent 的可调用面，降低越权/滥用风险
  - **出站文件处理收紧：** 对 outbound 文件路径与操作施加更严格的限制
  - **Bundle 更新/安装完整性校验：** 防止 update 与 install 链路被劫持或篡改
- **项目意义：** 该 PR 是对全量安全 / 代码审查审计发现的集中修复，**标志着项目从"功能可用"向"生产可信"过渡**。配合默认开启的白名单机制，部署门槛与误用风险同步下降。

> ⚠️ 由于 PR 评论数与点赞数均为 0/未公开，缺少外部 reviewer 信号，建议关注后续是否伴随 release notes、CHANGELOG 更新或配套 issue 跟踪。

---

## 4. 社区热点

今日 **无新增 Issue、无活跃讨论线程**。唯一仍在昨日时间窗内被更新的 [#44](https://github.com/TinyAGI/tinyagi/pull/44) 也以 0 评论关闭，社区互动极为冷清。

**潜在诉求分析：**
- 从 PR 内容反推，外部审计/社区曾就 *渠道鉴权、Agent 越权、文件出站、bundle 完整性* 四类风险提出过系统性关切，但当前没有对应的 issue 跟踪或 RFC 公开讨论。
- 建议维护者后续建立 **Security Advisory / Disclosure 通道**，将审计类工作纳入公开流程，提升信任感。

---

## 5. Bug 与稳定性

今日 **无新增 Bug 报告 / 崩溃 / 回归 Issue**。

但根据 [#44](https://github.com/TinyAGI/tinyagi/pull/44) 的修复面，**以下历史隐患应视为已修复**（待版本发布确认）：

| 严重程度 | 问题类别 | 修复来源 | 状态 |
| --- | --- | --- | --- |
| 🔴 高 | 渠道发送者未鉴权 / 任意用户可触发 Agent | PR #44 | 已合入（待发版） |
| 🔴 高 | Bundle 更新链路缺完整性校验，可被中间人篡改 | PR #44 | 已合入（待发版） |
| 🟠 中 | Agent 可调用面过宽，潜在越权 | PR #44 | 已合入（待发版） |
| 🟠 中 | 出站文件路径/操作未受限 | PR #44 | 已合入（待发版） |

---

## 6. 功能请求与路线图信号

今日 **无明确的功能请求 Issue**。但从 [#44](https://github.com/TinyAGI/tinyagi/pull/44) 的实现策略可推断以下路线图信号：

1. **默认安全（Secure-by-default）成为产品基调**：白名单默认开启，而非 opt-in，意味着项目正在主动收敛误用空间。
2. **多渠道（multi-channel）网关定位清晰**：Telegram / Discord / WhatsApp 并列加固，渠道接入成为项目核心能力之一。
3. **OTA / Bundle 分发链路安全化**：未来可能进一步引入签名校验、SBOM、SLSA 等供应链安全实践。

> 建议：维护者可公开一份 *security roadmap*，明确后续是否支持自定义 allowlist 配置化、TLS pinning、审计日志等。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 均无评论数据，**无法从用户发言中提炼痛点**。仅能基于 PR 描述侧写：

- **隐含痛点：** 部署者担心聊天渠道被未授权用户触发、Agent 越权操作本地文件、Bundle 更新被劫持——这三类正是 PR #44 直接回应的场景。
- **场景侧写：** 典型用户为将 TinyClaw 部署在 VPS/家庭服务器、对外暴露 Telegram/Discord Bot 端点的个人/小团队用户，他们最关心的就是"谁能调用 Agent、Agent 能动什么文件、升级是否可信"。
- **满意度信号缺失：** 缺少正面/负面反馈，无法判断当前安全策略是否与用户预期冲突（例如白名单默认开启是否会阻断老用户既有使用方式，需要在 release notes 中重点提示）。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 风险 | 链接 |
| --- | --- | --- | --- | --- |
| ⚠️ 维护者提醒 | — | 尚未为已合入的安全修复发布版本 | 用户无法感知修复，存在窗口期暴露风险 | https://github.com/TinyAGI/tinyagi/releases |
| ⚠️ 维护者提醒 | — | 无 Security Advisory 公开记录 | 安全披露流程透明度不足 | https://github.com/TinyAGI/tinyagi/security/advisories |
| ⚠️ 社区激活 | — | 24h 内 0 Issue、0 PR（除已关闭） | 社区活跃度下行，建议发起 issue 模板、讨论帖 | https://github.com/TinyAGI/tinyagi/issues |
| ⚠️ 文档同步 | — | 渠道白名单默认开启后的迁移指南缺失 | 升级用户可能踩坑 | https://github.com/TinyAGI/tinyagi |

---

### 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
| --- | --- | --- |
| 代码活跃度 | ⭐⭐☆☆☆ | 24h 内仅 1 条 PR 更新，无新 Issue |
| 安全态势 | ⭐⭐⭐⭐☆ | 重大安全审计修复已合入，方向积极 |
| 社区互动 | ⭐☆☆☆☆ | 评论与点赞均缺位 |
| 发布节奏 | ⭐⭐☆☆☆ | 已合入修复但未发版，存在滞后 |
| 文档透明度 | ⭐⭐☆☆☆ | 缺少 release notes / migration guide |

**综合评估：** TinyClaw 当前处于"**安全硬化完成、版本发布滞后、社区声量回落**"的关键节点。建议维护者：① 立即发布包含 [#44](https://github.com/TinyAGI/tinyagi/pull/44) 的 patch 版本；② 同步 CHANGELOG 与升级迁移说明；③ 在 README / Discussions 中公布安全策略，降低用户认知成本。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-09

> 数据来源：GitHub 公开仓库 [moltis-org/moltis](https://github.com/moltis-org/moltis)
> 采样窗口：过去 24 小时

---

## 1. 今日速览

Moltis 项目今日整体活跃度偏低，处于"低流量维护日"状态：过去 24 小时内无新增 Issue、无已关闭 Issue、无新版本发布，仅有 1 条面向 CalDAV 模块的 Bug 修复 PR (#1145) 处于待合并状态。该 PR 修复了一个由远程 CalDAV 服务器返回非 ASCII 字符 datetime 时触发的潜在 panic，属于稳定性级别的关键修复。社区互动（评论、反应）几乎为零，说明项目目前处于常规维护节奏，暂无重大需求或争议在讨论。

**活跃度评级：⭐☆☆☆☆（低活跃）**

---

## 2. 版本发布

🚫 **过去 24 小时内无新版本发布。**

---

## 3. 项目进展

✅ **今日无 PR 合并 / 关闭。**

### 待合并 PR（1 条）

| # | 标题 | 作者 | 类型 | 状态 |
|---|------|------|------|------|
| [#1145](https://github.com/moltis-org/moltis/pull/1145) | fix(caldav): avoid panic on non-ASCII datetime in normalise_datetime | @Osamaali313 | Bug Fix | 🟡 Open（待合并） |

**推进方向**：本 PR 旨在修补 `crates/caldav/src/ical.rs` 中 `normalise_datetime` 函数在解析远程 CalDAV 服务器返回的 datetime 值时，因未对非 ASCII 字符做充分校验而可能触发的 panic。这是 CalDAV 集成路径上的关键稳定性问题，合并后将提升协议层的鲁棒性，特别是针对多语言或非标准服务器实现的环境。

---

## 4. 社区热点

🔥 **今日无高互动 Issue / PR。**

- 0 评论、0 反应的 PR：#1145
- 无新增 Issue 讨论

社区今日处于静默期，未出现值得关注的热点话题或争议。

---

## 5. Bug 与稳定性

### 🔴 严重：CalDAV 模块潜在 Panic 风险

- **描述**：`normalise_datetime` 函数在 DATE 分支使用 `raw.chars().all(|c| c.is_ascii_digit())` 做 ASCII 校验，但其他分支（特别是 DATETIME 处理路径）对非 ASCII 字符未做同等校验。当远程 CalDAV 服务器返回的 datetime 值包含非 ASCII 字符时，会导致字节索引越界切片并触发 panic，可能造成客户端进程崩溃。
- **影响范围**：所有使用 CalDAV 集成的用户，且远程服务器存在非标准 datetime 输出时（部分企业 Exchange、自托管 Radicale 实例曾有此类情况）。
- **严重程度**：高 — panic 会直接终止当前任务，属于可用性问题。
- **是否已有 Fix PR**：✅ 是 — [PR #1145](https://github.com/moltis-org/moltis/pull/1145)
- **建议**：维护者应优先 review 该 PR 并尽快合并，建议附带回归测试用例覆盖非 ASCII datetime 场景。

---

## 6. 功能请求与路线图信号

📭 **今日无新功能请求 / Feature Issue。**

由于 Issues 流入量为 0，无法从中提取具体的路线图信号。可关注的方向仍为 CalDAV 集成的稳健性提升（基于 #1145 的修复方向）。

---

## 7. 用户反馈摘要

⚠️ **今日无 Issue 评论可供分析。**

---

## 8. 待处理积压

📋 今日窗口内无新增长期未响应项。整体待办积压情况需结合仓库 [Issues 列表](https://github.com/moltis-org/moltis/issues) 与 [PR 列表](https://github.com/moltis-org/moltis/pulls) 进行跨日追踪。**提醒维护者关注**：

- [PR #1145](https://github.com/moltis-org/moltis/pull/1145) 作为今日唯一的活跃 PR，建议尽早 review，避免关键稳定性修复积压。
- 建议回顾历史 Issue 中是否有长期（>30 天）未响应的高优先级 Bug 或 Feature 请求。

---

## 📊 数据附录

| 指标 | 数值 |
|------|------|
| 24h 新增 Issue | 0 |
| 24h 关闭 Issue | 0 |
| 24h 新增 PR | 1 |
| 24h 合并 PR | 0 |
| 24h 新 Release | 0 |
| 当前 Open PR 总数 | 1+ |
| 当前 Open Issue 总数 | 待确认 |

---

*报告生成时间：2026-07-09 ｜ 仅基于公开 GitHub 数据分析*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-09

> 注：本报告所依据的 GitHub 数据中，仓库路径仍以旧名称 `agentscope-ai/QwenPaw` 出现，疑似项目正处于从 QwenPaw → CoPaw 的品牌过渡期，下文统称 CoPaw，链接保持原始路径。

---

## 1. 今日速览

CoPaw 今日处于 **2.0 大版本密集迭代期**，活跃度极高：过去 24 小时累计 **39 条 Issue 更新 + 50 条 PR 更新 + 1 个新版本发布**。社区端 Bug 反馈集中爆发（多与 v2.0 beta 上下文压缩、流式输出、第三方渠道相关），但关闭率同样亮眼（24/39 Issue、16/50 PR 已关闭），说明维护团队响应速度较快。整体处于 **β 质量持续打磨 + 渠道生态扩张 + 安全/测试基线加固** 三轨并进的健康节奏。

---

## 2. 版本发布

### v2.0.0-beta.4（今日发布）

- **版本号变化**：由 `v2.0.0-beta.3` 升至 `2.0.0b4`，由 [@rayrayraykk](https://github.com/agentscope-ai/QwenPaw/pull/5837) 提交 bump。
- **核心修复**（[@niceIrene](https://github.com/agentscope-ai/QwenPaw/pull/5837)）：
  - **scroll 压缩保护 active turn**：避免正在执行中的任务被错误折叠（旧 bug，#5746 即此问题）。
  - **分级压力释放（graduated pressure relief）**：压缩阈值动态化，缓解长会话上下文膨胀。
  - **recall 失败显式化**：原"静默丢消息"改为可见错误提示（呼应 #5344、#5776 等社区反馈）。
- **破坏性变更**：作为 beta 版本，2.0 系列默认配置（`preserve_thinking`、scroll 行为、压缩阈值）持续调整，**不建议生产环境升级**。
- **迁移注意**：从 1.x 升级至 2.0 的用户需重新评估 `agent.json` 中 scroll 策略与压缩阈值；自定义模型 + 多 provider 场景下注意 #5784 中提到的 `provider_id` 校验问题。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848) | scroll eviction index 为无 headline 段打标签 | 修复 #5746 的关键补丁，提升压缩后回溯可读性 |
| [#5792](https://github.com/agentscope-ai/QwenPaw/pull/5792) | 修复 sanitation 阶段丢弃 self-paired tool 消息 | 修复合法 AgentScope 2.0 自配对消息被误删的问题 |
| [#5864](https://github.com/agentscope-ai/QwenPaw/pull/5864) | MCP 驱动遵循运行时 approval level | 让 Console UI 显示与后端真实审批策略一致（呼应 #5846） |
| [#5810](https://github.com/agentscope-ai/QwenPaw/pull/5810) / [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) / [#5809](https://github.com/agentscope-ai/QwenPaw/pull/5809) | inbox/runtime/security 回归测试（43 + 64 用例） | 7 月回归计划落地，**钉死** #5090 rm 绕过、#5379 启动崩溃、inbox JSON 损坏等多个老 bug |
| [#5844](https://github.com/agentscope-ai/QwenPaw/pull/5844) | 引入 real-behavior-proof PR 审核门禁 | 借鉴上游 openclaw 治理 PR 噪声 |

**整体推进评估**：今日 16 条 PR 关闭/合并，其中 **回归测试与安全加固占比近 40%**，说明团队正在为 2.0 正式版铺路——质量基线已显著提升。

---

## 4. 社区热点（评论最多）

| 排名 | 编号 | 主题 | 评论 | 状态 |
|---|---|---|---|---|
| 1 | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 飞书渠道首条回复后无反应 | 12 | OPEN 🔥 |
| 2 | [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) | v2.0b3 关闭模式仍弹审批窗 | 10 | CLOSED ✅ |
| 3 | [#5171](https://github.com/agentscope-ai/QwenPaw/issues/5171) | 上下文压缩将任务完全压没 | 9 | CLOSED ✅ |
| 4 | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Python 安装后 Internal Server Error | 8 | OPEN |
| 5 | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 对话思考逻辑死循环 | 7 | CLOSED ✅ |

**诉求分析**：
- **渠道层稳定性**（飞书、Matrix、QQ）成为用户首要痛点，长期会话下的"中途失忆 / 静默丢消息 / 重复执行旧任务"问题（#5757、#5776、#5344）反复出现。
- **审批与权限粒度**仍是 2.0 用户最敏感的配置项（#5846、#5864），UI 展示与后端实际策略必须严格对齐。
- **压缩策略**是 2.0 核心卖点也是最大雷区，#5171、#5746、#5860 三个高评论 Issue 全部指向 scroll 行为异常。

---

## 5. Bug 与稳定性

按严重程度排列（**P0 = 数据丢失/任务中断；P1 = 功能失效；P2 = 体验降级**）：

| 等级 | Issue | 描述 | 状态 / Fix |
|---|---|---|---|
| **P0** | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | v2.0 频繁丢失对话进度 + 无限循环 | OPEN，无对应 PR；关联 #5870 `preserve_thinking` 修复 PR |
| **P0** | [#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746) | scroll 错误折叠当前任务，回复旧消息 | CLOSED，已由 v2.0.0-beta.4 修复 ✅ |
| **P0** | [#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776) | 长 IM 会话将陈旧用户消息视为当前任务 | CLOSED ✅ |
| **P0** | [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` 返回 200 但静默丢消息 | CLOSED ✅ |
| **P1** | [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 飞书首条回复后无反应 | OPEN（社区最关注，**建议优先响应**） |
| **P1** | [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Python 安装后启动 Internal Server Error | OPEN |
| **P1** | [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) | Matrix Token 登录失败 | OPEN，[#5873](https://github.com/agentscope-ai/QwenPaw/pull/5873) 已提交 fix |
| **P1** | [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker 内 browser_use 启动 dbus 错误 | OPEN |
| **P2** | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | 压缩阈值显示错取 provider 值 | OPEN |
| **P2** | [#5725](https://github.com/agentscope-ai/QwenPaw/issues/5725) | Console 流式输出浏览器卡顿 | OPEN |
| **P2** | [#5421](https://github.com/agentscope-ai/QwenPaw/issues/5421) | 切换 agents / 聊天窗口严重卡顿 | CLOSED ✅ |
| **P2** | [#5162](https://github.com/agentscope-ai/QwenPaw/issues/5162) | 对话思考逻辑死循环 | CLOSED ✅ |
| **P2** | [#5052](https://github.com/agentscope-ai/QwenPaw/issues/5052) | 工具调用报 `arguments` 错误 | CLOSED ✅ |

**整体观察**：今日 P0 已修复 3/4，**但 #5860（新发现的 P0）尚未收敛**，与 [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) 的 `preserve_thinking` 默认值切换相关，预计在下个 beta 落地。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态 | 信号 |
|---|---|---|---|
| **多 Agent 团队/群智协作** | [#5139](https://github.com/agentscope-ai/QwenPaw/issues/5139) | CLOSED | 需求被关，疑似已有替代方案或延后；建议关注官方 Roadmap |
| **Zalo Bot 渠道** | — | PR [#5801](https://github.com/agentscope-ai/QwenPaw/pull/5801) OPEN | **极有可能并入下个版本**（越南市场扩展） |
| **Creator Page / kind=app 插件发现** | — | PR [#5874](https://github.com/agentscope-ai/QwenPaw/pull/5874) OPEN | 标记 "Do not merge"，**方向性探索** |
| **Vision fallback（文本模型自动调用 VL 模型）** | — | PR [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) OPEN | 关联 [#5615](https://github.com/agentscope-ai/QwenPaw/issues/5615)，落地概率高 |
| **待审批系统提示音** | [#5852](https://github.com/agentscope-ai/QwenPaw/issues/5852) | OPEN | 与 #3302 任务完成提醒诉求一致，**用户呼声较高** |
| **关闭按钮最小化到托盘** | [#5312](https://github.com/agentscope-ai/QwenPaw/issues/5312) | CLOSED | 已纳入 ✅ |
| **指令输入排队** | [#3302](https://github.com/agentscope-ai/QwenPaw/issues/3302) | CLOSED | 已纳入 ✅ |
| **Memory Reranker** | — | PR [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) OPEN | re

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**报告日期：2026-07-09**

---

## 1. 今日速览

ZeroClaw 项目今日保持高强度开发节奏，过去 24 小时共有 **50 条 Issue 更新**（40 条活跃 / 10 条已关闭）和 **50 条 PR 更新**（42 条待合并 / 8 条已合并或关闭），无新版本发布。讨论热度集中在**网关层的 OpenAI Chat Completions 兼容性适配**（PR #8486、Issue #8550 / #8603）、**WASM 插件架构演进**（Issue #8850）以及**多轮 SSRF / 凭据安全审计修复**（PR #8713、#8725、#8496、#8751）。整体看，项目处于"功能深化 + 安全加固"双线推进状态，社区活跃度高于平均水平，但**部分高优先级 Issue 长期挂起**，需维护者关注。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展（今日合并 / 关闭的重要 PR 与 Issue）

| 类型 | 编号 | 标题 | 意义 |
|------|------|------|------|
| PR 已关闭 | [#8861](https://github.com/zeroclaw-labs/zeroclaw/pull/8861) | resolve alias credential for model-catalog | 修复 OpenAI 兼容家族（xAI/Grok、Groq、DeepSeek 等）在 `/models` 下拉中因硬编码 `None` API key 无法展示的问题 |
| Issue 已关闭 | [#7690](https://github.com/zeroclaw-labs/zeroclaw/issues/7690) | feat(provider): cover responses-wire option propagation | 补齐 responses-wire provider 测试覆盖 |
| Issue 已关闭 | [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | `skills install/list/remove` 目标目录错误 | 修复多代理运行时下 skill 安装路径指向 `data_dir` 而不被加载的问题 |
| Issue 已关闭 | [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | Agent 无法使用环境变量作为 http_request 凭据 | 高优先级安全与功能问题已闭环 |
| Issue 已关闭 | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | `model_switch` 工具不跨回合持久化 | 桌面 / 网关层模型切换路径已修复 |
| Issue 已关闭 | [#4873](https://github.com/zeroclaw-labs/zeroclaw/issues/4873) | 飞书集成后默认仅调用 LLM 而非 Agent | 通道路由修复 |

**整体推进评估**：今日 8 条 PR / Issue 闭环，覆盖了**凭据解析、Skill 安装路径、模型切换、飞书通道、本地 Whisper 配置、Provider 测试覆盖**等关键路径，显著改善了多代理运行时下的用户体验。但与昨日新开活跃 Issue 数（40）相比，净增量仍为正，**积压压力未明显缓解**。

---

## 4. 社区热点

### 🔥 高评论高关注议题

1. **[Issue #5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862)** （13 条评论）
  - [Bug]: zeroclaw 不自知可使用 `zeroclaw cron` 添加定时任务
  - 本质是 Agent 工具描述 / 系统提示词未告知内置 cron 能力，社区呼唤更清晰的工具发现机制
  - 当前 `status:blocked`、`stale-candidate` 状态堪忧

2. **[Issue #6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034)** （7 条评论）★ S1
  - 单轮 / 多轮对话丢失 user message，影响所有 OpenAI-compatible 提供商
  - 复现稳定，影响范围广（Hit S1 workflow blocked），作者等待复现确认

3. **[Issue #8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** （7 条评论）
  - RFC：`.ignore` 文件机制用于工作区文件保护
  - 现有 `forbidden_paths` 仅能阻止工作区**外部**路径，无法覆盖 `rust-toolchain.toml`、`.env`、`config.yaml` 等敏感内部文件
  - 是 AI Agent 权限边界设计的关键讨论

4. **[Issue #6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002)** （5 条评论）★ S1
  - Telegram 通道下消息未明确路由到 assistant（@-mention 不生效）
  - 反映通道层 mention 解析的鲁棒性问题

5. **[Issue #6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672)** （5 条评论）★ S0
  - 小米 thinking 模式下 `reasoning_content` 未回传到 agentic 工具调用循环
  - 数据丢失级风险，影响 mimo-v2.5 / mimo-v2.5-pro 用户

6. **[Issue #8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226)** （5 条评论）
  - 支持 per-agent 自定义环境变量配置（区分 `runtime_context` 与 `runtime_secrets`）
  - 多租户、MCP 共享实例场景的关键需求

7. **[Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)** （4 条评论，新开）
  - 将可选 channel / tool 从编译期 feature flag 迁移到运行时 WASM 插件
  - 战略性架构改革，缩小默认二进制并指向 `zeroclaw-labs/zeroclaw-plugins` 生态

8. **[PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** （OpenAI chat completions gateway）
  - 关闭 #8550，关联 #8603
  - 让 ZeroClaw 网关可被 LangChain、OpenAI SDK、Continue.dev、Aider 等原生客户端直连，意义重大
  - 体积为 **size:XL**，需 maintainer 重点 review

**诉求分析**：今日热点反映三大诉求——**①协议互操作性**（OpenAI 兼容）②**细粒度权限与多租户隔离**（`.ignore`、per-agent env）③**架构可扩展性**（WASM 插件）。这些都是构建健康 AI Agent 平台的核心要素。

---

## 5. Bug 与稳定性

按严重程度排序（已附今日是否有修复 PR）：

| 严重度 | Issue | 简述 | 是否已有 Fix PR |
|--------|-------|------|-----------------|
| **S0 数据丢失 / 安全风险** | [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers 接口 405 错误（Qwen 兼容端点）| ❌ 无 |
| **S0 数据丢失 / 安全风险** | [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | Xiaomi 思考模式 `reasoning_content` 丢失 | ❌ 无 |
| **S1 工作流阻塞** | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单 / 多轮 user message 丢失 | ❌ 无 |
| **S1 工作流阻塞** | [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram mention 路由无效 | ❌ 无 |
| **S2 行为降级** | [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 上下文溢出导致幻觉 / 话题漂移 | ❌ 无（相关 RFC #7673 提案压缩装饰器）|
| **S3 次要问题** | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | Agent 不识别 cron 工具 | ❌ 无 |
| **S2 行为降级** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | model_switch 不持久化（已关闭）| ✅ 关闭 |
| **S1 工作流阻塞** | [#8553](https://github.com/zeroclaw-labs/zeroclaw/issues/8553) | Agent 无法用环境变量做 http_request 凭据（已关闭）| ✅ 关闭 |
| **S2 行为降级** | [#8334](https://github.com/zeroclaw-labs/zeroclaw/issues/8334) | skills CLI 路径错误（已关闭）| ✅ 关闭 |
| **S1 工作流阻塞** | [#6173](https://github.com/zeroclaw-labs/zeroclaw/issues/6173) | — | ✅ 关闭 |

**今日已修复**：
- [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) `bind-telegram` 错误信息中 bot_token 属性名错误（kebab-case → 实际命名）
- [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)、[#8873](https://github.com/zeroclaw-labs/zeroclaw/pull/8873) UTF-8 安全字节边界审计（fix #7828 跟踪）
- [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) `LocalWhisperConfig::default` 重用 serde 默认值（修复 #8718）
- [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) `file_download` 增加 `allowed_private_hosts` 旁路以防 SSRF（2026-07-03 安全审计第三处剩余面）
- [#8725](https://github.com/zeroclaw-labs/zeroclaw/pull/8725) Webhook 通道在缺失 secret 时拒绝启动
- [#8819](https://github.com/zeroclaw-labs/zeroclaw/pull/8819) `tool_filter_groups` 按 MCP 来源分类（修复 #6699）

**待修复警告**：今日**仍有 5+ 个 S0/S1 级 Bug 无对应 PR**，主要集中在 provider 兼容层与通道路由层，建议维护者优先处理 #6034、#6672。

---

## 6. 功能请求与路线图信号

候选进入下一版本的强信号：

| 提议 | 关联实现 | 优先级信号 |
|------|----------|------------|
| **OpenAI Chat Completions 网关端点** | RFC #8603 + PR #8486 | ⭐⭐⭐⭐⭐ size:XL，已在 PR review 中 |
| **Web UI 多会话支持**（侧边栏：新建 / 切换 / 重命名 / 删除）| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | ⭐⭐⭐⭐ |
| **OpenAI 兼容适配层 RFC** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)（no-stale 标记） | ⭐⭐⭐⭐ |
| **per-agent 自定义环境变量 / secrets** | [#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) | ⭐⭐⭐（多租户刚需）|
| **运行时 WASM 插件（替代编译期 feature）**| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) `in-progress` | ⭐⭐⭐⭐⭐（架构主线）|
| **OCI 容器注册中心作为插件存储**| [#7497](https://github.com/zeroclaw-labs/zeroclaw/issues/7497) | ⭐⭐⭐ |
| **原生 context compression 装饰器** | RFC #7673 | ⭐⭐⭐（与 #6517 紧密关联）|
| **预轮路由意图提取（send_via）** | [#7431](https://github.com/zeroclaw-labs/zeroclaw/issues/7431) | ⭐⭐⭐ |
| **ZeroCode Dashboard 内联 rename 代理** | PR #7954 | ⭐⭐⭐ |
| **网关 web 应用内自动升级 + 重启** | PR #8173（size:L，风险高，关联 RFC #8170）| ⭐⭐⭐⭐ |
| **file_read 增强**（行数限制、字符集、PDF 分页）| Tracker #8602 | ⭐⭐⭐ |
| **Discord 通道交互面一致性**（embed、slash、组件、语音）| Tracker #7831 | ⭐⭐⭐ |
| **Rust→Wasm 替换 React/Vite Web UI** | RFC #8132（从 #7674 拆分）| ⭐⭐⭐⭐ |
| **删除无用分支** | [#6715](https://github.com/zeroclaw-labs/zeroclaw/issues/6715) | ⭐（仓库清理）|

**版本节奏推测**：上述列表中，OpenAI 兼容端点（#8486）、运行时 WASM 插件（#8850）、web 多会话（#7543）三项进入下一个 minor 版本的概率最高。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼：

- **🟢 满意 / 赞赏**：
  - 飞书集成（#4873）得到及时修复，用户期望保持 Agent 路径而非纯 LLM
  - ZeroCode Desktop 用户对模型切换 UI 修复表示欢迎（#6173 关闭讨论）

- **🔴 痛点**：
  - **多代理运行时下 skill 安装路径错误**（#8334）让用户感受"pull a skill and use it"流程彻底失效（headline 体验）
  - **Telegram mention 路由失败**（#6002）使团队沟通场景无法落地
  - **thinking 模式数据丢失**（#6672）使 mimo-v2.5 用户被迫绕道
  - **Qwen 兼容 / 405 错误**（#6558）与上下文溢出幻觉（#6517）反映**长对话 + 国产模型组合**的鲁棒性短板
  - **Android Termux 安装**（#7911）出现 `unknown linux aarch64` 二进制分发问题，移动端用户被边缘化

- **🟡 改进建议**：
  - `.ignore` 工作区文件保护机制（#8424）呼声强烈
  - OpenAI 兼容端点（#8550 / #8603）被 6+ 个客户端生态点名：Open WebUI、LobeChat、LangChain、Continue.dev、Aider、custom integrations
  - 模型目录（model catalog）alias 凭据解析（PR #8861 已闭环）此前让 Groq / xAI / DeepSeek 在下拉中不可见

---

## 8. 待处理积压（维护者请重点关注）

以下 Issue **长期挂起**且具备较高严重度 / 价值，建议优先回复或分配 owner：

| 编号 | 标题 | 创建日期 | 严重度 | 状态 |
|------|------|----------|--------|------|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw 不知道自己有 cron 工具 | 2026-04-18（83 天）| S3 | blocked / stale-candidate |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单 / 多轮 user message 丢失 | 2026-04-23（78 天）| S1 | accepted / needs-repro |
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers 错误 (Qwen 兼容 405) | 2026-05-10（61 天）| S0 | blocked / stale-candidate |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | 上下文溢出幻觉 / 话题漂移 | 2026-05-07（64 天）| S2 | blocked / stale-candidate |
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | Xiaomi thinking `reasoning_content` 丢失 | 2026-05-15（56 天）| S0 | accepted / blocked |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | 全部 channel `enabled=false` 时 supervisor crashloop | 2026-05-16（55 天）| P3 高风险 | blocked |
| [#7673](https

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*