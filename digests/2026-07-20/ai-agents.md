# OpenClaw 生态日报 2026-07-20

> Issues: 348 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-20 02:25 UTC

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

# OpenClaw 项目日报 · 2026-07-20

---

## 1. 今日速览

OpenClaw 仓库在 2026-07-20 维持高位活跃度：过去 24 小时共 348 条 Issue 更新（232 条新开/活跃，116 条已关闭）与 500 条 PR 更新（353 条待合并，147 条已合并/关闭），关闭率分别约为 33% 与 29%，处于"高吞吐+较多待办"状态。没有新版本发布，社区贡献集中在 **Telegram/Feishu 投递链路修复、CLI/Gateway 边界加固、Web UI 体验改进** 三条主线。值得注意的是，2026.7.1 版本相关的多个回归 Bug（#108238、#109490、#111519、#108580）仍在闭环过程中，session-state / message-loss 类 P1 议题仍是当前主要风险点。整体项目健康度评估：**中等偏紧**——提交节奏旺盛，但维护者审查积压与 P1 安全/稳定性议题集中暴露值得警惕。

---

## 2. 版本发布

⚠️ 过去 24 小时内 **无新版本发布**。当前最新稳定分支仍为 `2026.7.1`，社区在多个 Issue（#108238、#111519、#108580、#108075、#109490）中报告该版本在 cron tool schema、会话上下文计量、Telegram DM、工具调用中断等多处存在回归。维护者 steipete 等近期提交的多项 PR（如 #111569 onboard 设置保留、#111571 CLI config set 校验、#111600 update.run 单飞锁）暗示下一补丁版本正在酝酿中。

---

## 3. 项目进展

今日合并/关闭的代表性 PR（按议题覆盖面排序）：

| PR | 标题 | 影响 |
|---|---|---|
| [#108238 (CLOSED)](https://github.com/openclaw/openclaw/issues/108238) | 2026.7.1 中会话上下文累计 cacheRead 误算入 totalTokens | 修复上下文误判触发压缩失败 |
| [#108075 (CLOSED)](https://github.com/openclaw/openclaw/issues/108075) | 2026.7.1 LLM provider 拒绝请求 schema | 修复 agent 启动后失败 |
| [#89954 (CLOSED)](https://github.com/openclaw/openclaw/issues/89954) | Telegram getUpdates 409 cascade（IPv6→IPv4 回退） | 修复长轮询自循环重建 |
| [#72948 (CLOSED)](https://github.com/openclaw/openclaw/issues/72948) | `gateway stop` 未终止前台 gateway | 修复前台进程残留 |
| [#97970 (CLOSED)](https://github.com/openclaw/openclaw/issues/97970) | update 补全 `gateway.bind: lan` 与 `auth.mode:none` 冲突致 exit 78 | 修复升级后死循环重启 |
| [#81525 (CLOSED)](https://github.com/openclaw/openclaw/issues/81525) | media-understanding 静默路由到未校验的视觉模型 | 修复图片投递错误 |
| [#92405 (CLOSED)](https://github.com/openclaw/openclaw/issues/92405) | subagent spawn 持久化原始 provider | 修复 depth-2 子代理静默死亡 |
| [#111344 (CLOSED)](https://github.com/openclaw/openclaw/issues/111344) | 启动校验误报 `defineChannelPluginEntry` 缺少 register/activate | 修复 SDK 误报 |
| [#111441 (CLOSED)](https://github.com/openclaw/openclaw/issues/111441) | ClawHub 摘要含换行导致 `skills search` 结果拆分 | 修复 CLI 搜索显示 |

整体看，**投递链路（message-delivery）、配置健壮性、平台兼容性** 三类问题在今日集中收尾；项目在"修复 2026.7.1 回归"主线上稳步推进。

---

## 4. 社区热点

**评论数排行**（含历史累计与近期活跃度）：

1. **🥇 [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 评论 114，👍80。开放于 2026-01-01，截至今日仍是仓库第一长青议题。当前 OpenClaw 已覆盖 macOS、iOS、Android，唯缺 Linux/Windows 桌面端。这是社区呼声最高的"全平台覆盖"请求。

2. **🥈 [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)** — 评论 17。钻石龙虾评级。呼吁按来源（用户指令/网页抓取/三方 skill）为 agent 记忆打信任等级，防止 memory poisoning 攻击。

3. **🥉 [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** — 评论 14，👍4。P1。提议代理可"使用"API key 而"看不到"明文，应对 prompt injection 凭据窃取。

4. **[#13583 Pre-response Enforcement Hooks](https://github.com/openclaw/openclaw/issues/13583)** — 评论 14，👍2。P2。量化/金融/安全场景需要机械性硬门禁，禁止 agent 在必须工具未调用前产生最终回复。

5. **[#94846 Cron isolated agentTurn skips delivery](https://github.com/openclaw/openclaw/issues/94846)** — 评论 12，👍1。P2。Cron 隔离会话早期工具错误被标记 fatal 后，回复被静默吞掉。

6. **[#109490 codex app-server turn interrupted](https://github.com/openclaw/openclaw/issues/109490)** — 评论 11，👍1。P1。客户端委托 message 工具（terminate:true）后，`releaseTurnAfterTerminalDynamicTool` 误中断承诺的后续工作。

7. **[#44431 Browser tool 7 improvements](https://github.com/openclaw/openclaw/issues/44431)** — 评论 11，👍1。真实场景 9+ 邮件注册网站测试反馈，含 CSS 选择器缺失等多项 UX 痛点。

8. **[#79077 Telegram bot-to-bot / guest-bot](https://github.com/openclaw/openclaw/issues/79077)** — 评论 11，👍8。跟进 Telegram 2026-05-07 平台新能力。

**诉求画像**：社区当前关切高度集中于**安全（记忆隔离、凭据脱敏、强制门禁）+ 平台覆盖（Linux/Windows 应用、跨 IM 平台能力跟进）+ 工具可用性（browser/exec/Telegram）**三大方向。

---

## 5. Bug 与稳定性

按严重程度排列（**P1 / 🦞 钻石龙虾 / 🦀 挑战螃蟹**）：

| Issue | 等级 | 主题 | 是否有 fix PR |
|---|---|---|---|
| [#108238](https://github.com/openclaw/openclaw/issues/108238) | P1 / 🦀 | 2026.7.1 cacheRead 累计致上下文误判 | **已关闭（已修）** |
| [#108075](https://github.com/openclaw/openclaw/issues/108075) | P1 | 2026.7.1 LLM provider schema 拒绝 | **已关闭（已修）** |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | P1 / 🦞 | codex app-server 误中断承诺工作 | 待修（无关联 PR） |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | P1 / 🦞 | Subagent 完成投递失败（请求方 run 不活跃） | 待修 |
| [#70024](https://github.com/openclaw/openclaw/issues/70024) | P1 / 🦞 | channel stop timeout 后永久僵死 | 已关联 PR（`linked-pr-open`） |
| [#85246](https://github.com/openclaw/openclaw/issues/85246) | P1 / 🐚 | UI Update 按钮触发 Gateway launchd 死锁 | 待修 |
| [#83337](https://github.com/openclaw/openclaw/issues/83337) | P1 / 🐚 | 插件/核心版本漂移致 channel 静默失败 | 待修 |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | P1 / 🦐 | Telegram DM stale cleanup 回退（2026.7.2-beta.3） | 待修 |
| [#102006](https://github.com/openclaw/openclaw/issues/102006) | P1 / 🐚 | exec aborted 后同会话后续 exec 卡死（#94412 回归） | 待修 |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | P1 / 🐚 | Memory dreaming 卡死事件循环 ~10 分钟 | 待修 |
| [#39248](https://github.com/openclaw/openclaw/issues/39248) | P1 / 🐚 | `sandbox.mode: non-main` 静默破坏 `sessions_spawn` | 待修 |
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | 回归 | cron tool schema 与 llama.cpp GBNF 不兼容 | 待修 |
| [#93139](https://github.com/openclaw/openclaw/issues/93139) | P2 | write/exec heredoc 字面 `\n` 而非换行 | 待修 |
| [#111506](https://github.com/openclaw/openclaw/issues/111506) | P2 | 快速请求致 session lock 争用（LM Studio） | 待修 |
| [#103198](https://github.com/openclaw/openclaw/issues/103198) | Bug | WebChat image 附件未映射到 media store 路径 | 待修 |

**稳定性摘要**：今日关闭了一批高影响回归（#108238、#108075、#89954），但 P1 积压中仍有约 **10+ 个未修复议题**，其中至少 5 个（#109490、#92076、#70024、#102006、#99910）直接关联 **消息丢失或会话状态损毁**，建议优先处理。

---

## 6. 功能请求与路线图信号

社区当前高频请求可分为三个梯队：

**梯队 A · 高社区共识、与安全主线强相关（候选优先级高）**
- [#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)（114 评论，👍80）—— 全平台覆盖仍是最大公约数。
- [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)（P1）—— 凭据脱敏，关联 anti-prompt-injection。
- [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707)（17 评论）—— 记忆污染防御。
- [#13583 Pre-response Enforcement Hooks](https://github.com/openclaw/openclaw/issues/13583) —— 高风险工作流硬门禁。

**梯队 B · 已存在 PR 草案，落地可能性较高**
- [#6615 exec-approvals denylist](https://github.com/openclaw/openclaw/issues/6615) —— `linked-pr-open`，合并在即。
- [#11665 Webhook hook session 复用](https://github.com/openclaw/openclaw/issues/11665) —— `linked-pr-open`。
- [#7524 groupScope](https://github.com/openclaw/openclaw/issues/7524) —— `linked-pr-open`。
- [#10142 session:end hook](https://github.com/openclaw/openclaw/issues/10142) —— `linked-pr-open`，对接 Temporal 等编排器。
- [#8299 抑制 sub-agent announce](https://github.com/openclaw/openclaw/issues/8299) —— UX 改进。
- [#9016 OpenRouter 成本暴露](https://github.com/openclaw/openclaw/issues/9016) —— 已有相关产品信号。
- [#9912 maxTurns/maxToolCalls](https://github.com/openclaw/openclaw/issues/9912) —— 控制迭代次数。
- [#9409 上下文溢出错误细化](https://github.com/openclaw/openclaw/issues/9409) —— 可观测性。
- [#79077 Telegram bot-to-bot / guest-bot](https://github.com/openclaw/openclaw/issues/79077) —— 跟进平台官方能力。
- [#110950 Everything is a cron](https://github.com/openclaw/openclaw/issues/110950)（维护者 steipete 自提）—— 将 heartbeat / watchers / 调度统一为 cron 原语，**强路线图信号**。

**梯队 C · 长期增强 / UX**
- [#44431 Browser tool 7 项改进](https://github.com/openclaw/openclaw/issues/44431)、[#8355 语音 TTS 流式管线](https://github.com/openclaw/openclaw/issues/8355)、[#7540 WhatsApp 通话事件](https://github.com/openclaw/openclaw/issues/7540)、[#10118 TUI Shift+Enter](https://github.com/openclaw/openclaw/issues/10118)、[#99583 会话自动标题](https://github.com/openclaw/openclaw/issues/99583)、[#11955 记忆/上下文可观测性](https://github.com/openclaw/openclaw/issues/11955)、[#6599 `/models test-fallback`](https://github.com/openclaw/openclaw/issues/6599)、[#12219 Skill Permission Manifest](https://github.com/openclaw/openclaw/issues/12219)、[#78963 WhatsApp listen-only](https://github.com/openclaw/openclaw/issues/78963)。

**路线图研判**：下一稳定版本（推测 `2026.7.2`）预计优先承载 2026.7.1 回归修复（已在路上）+ 安全三件套（masked secrets / memory tagging / hard gates）的部分落地 + Telegram 平台能力跟进。维护者自提的"everything is a cron"（#110950）可能成为下一个重要架构动作。

---

## 7. 用户反馈摘要

提炼自近 24 小时 Issues 评论：

- **安全焦虑升级**：多位用户（[#10659](https://github.com/openclaw/openclaw/issues/10659)、[#7707](https://github.com/openclaw/openclaw/issues/7707)、[#12219](https://github.com/openclaw/openclaw/issues/12219)）描述了真实场景——技能市场出现的"凭据窃取 + 隐式网络访问"事件、对抗 prompt injection 时凭据明文可见的风险，呼吁 OpenClaw 提供**声明式权限、强制策略门禁、记忆隔离**机制。
- **桌面端缺席的明确不满**：[#75](https://github.com/openclaw/openclaw/issues/75) 评论区反复出现"为什么 2026 年还没有 Linux/Windows 应用"的呼声，部分用户明确表示因平台限制已转向 fork 或竞品。
- **真实使用痛点**：
  - [#44431](https://github.com/openclaw/openclaw/issues/44431) 作者基于"9+ 邮件注册网站"的实战测试，反馈浏览器工具**缺失 CSS 选择器**、必须通过 snapshot→ref 间接交互，效率低下。
  - [#92369](https://github.com/openclaw/openclaw/issues/92369) / [#8299](https://github.com/openclaw/openclaw/issues/8299) 反映 cron + subagent 工作流编排中"子代理报告丢失 / 强制 announce 噪音"严重影响批处理可信度。
  - [#99910](https://github.com/openclaw/openclaw/issues/99910) 用户描述"memory dreaming 任务让 gateway 整个事件循环停摆 10 分钟"，必须依赖外部 watchdog 杀掉进程——希望 OpenClaw 自带超时与可见日志。
- **升级体验负反馈**：
  - [#97970](https://github.com/openclaw/openclaw/issues/97970)、[#83337](https://github.com/openclaw/openclaw/issues/83337) 共同指向"升级 = 静默失败"模式（gateway bind 默认变更、plugin 版本漂移），用户希望升级流程提供更强的 dry-run / 兼容性校验。
- **正面信号**：
  - 多位贡献者（如 mikasa0818、anyech、ljy-1351、xydt-juyaohui）连续提交小型高密度 PR，社区贡献者生态活跃。
  - 维护者 steipete 亲自推动 CLI/onboard、UI 更新、架构统一等多项关键 PR（#111569、#111571、#111598、#110950），显示项目治理仍在 owner 视野内。

---

## 8. 待处理积压

提醒维护者关注的**长期未响应重要议题**：

- **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** —— 已开 7 个月（2026-01-01），114 评论、80 👍，仍无实质进展。
- **[#44431 Browser tool 7 improvements](https://github.com/openclaw/openclaw/issues/44431)** —— 开于 2026-03-12，含详细可落地方案。
- **[#13583 Pre-response enforcement hooks](https://github.com/openclaw/openclaw/issues/13583)** —— 开于 2026-02-10，安全关键 P2 但无 PR 关联。
- **[#39248 sandbox.mode: non-main 破坏 sessions_spawn](https://github.com/openclaw/openclaw/issues/39248)** —— P1 / 🐚，稳定成熟版本（maturity:stable）上的崩溃级 bug，开于 2026-03-07 至今无 fix。
- **[#70024 channel stop timeout 永久僵死](https://github.com/openclaw/openclaw/issues/70024)** —— P1 / 🦞，稳定版本，影响生产。
- **[#102006 exec aborted 后续调用卡死](https://github.com/openclaw/openclaw/issues/102006)** —— P1 / 🐚，明确回归（PR #94412 引入），开于 2026-07-08 仍 OPEN。
- **[#99910 memory dreaming 卡死事件循环](https://github.com/open

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告
**报告日期：2026-07-20 ｜ 数据窗口：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手 / 自主智能体开源生态当前呈现**"高度活跃与高度承压并存"**的态势：在 13 个被监测项目中，8 个项目过去 24 小时均处于代码层实质推进状态（合并/关闭 PR 总计 110+ 条），但其中**仅 1 个项目（Moltis）完成版本发布**，其余全部处于"代码在合、版本未发"的中间态。社区关注焦点高度趋同——**安全治理（凭证/记忆/工具调用）、多渠道适配、本地 LLM 体验、可观测性、架构收敛**成为跨项目的共同主线；同时，**P0/P1 级 Bug 与发布滞后**几乎成为每个项目的常态负担，提示生态正从"功能扩张期"切换至"质量巩固期"。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 今日 Release | 合并 PR | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 348 (232 活跃/116 关闭) | 500 (353 待/147 关) | ❌ | 9 | 🟡 中等偏紧 | 高吞吐回归修复期 |
| **ZeroClaw** | 33 (30 活跃/3 关闭) | 50 (48 待/2 合) | ❌ | 2 | 🟢 治理+核心修复双线 | 0.8.x 收尾 / 0.9.0 规划 |
| **IronClaw** | 5 (5 新开) | 50 (19 待/31 合) | ❌ | 31 | 🟢 高活跃收敛态 | Reborn 架构主线推进 |
| **Hermes Agent** | 50 (44 活跃/6 关闭) | 50 (43 待/7 合) | ❌ | 7 | 🟡 中等 | 安全收口 + 状态治理 |
| **NanoBot** | 6 (1 活跃/5 关闭) | 31 (22 待/9 合) | ❌ | 9 | 🟢 优秀 | 架构收尾 + Provider 接入 |
| **NanoClaw** | 2 (2 新开) | 30 (15 待/15 关) | ❌ | 大量集中关闭 | 🟡 中等 | 收敛态 + 远程 MCP |
| **CoPaw** | 11 (11 活跃) | 7 (7 待) | ❌（2.0.1b1 在途） | 0 | 🟡 中等偏紧 | 待合并积压扩张 |
| **Moltis** | 1 | 1 | ✅ `20260719.01` | 0 | 🟢 中等偏上 | 低强度迭代 |
| **PicoClaw** | 3 (2 活跃/1 关) | 3 (3 待) | ❌ | 0 | 🟡 中等偏低 | 低强度维护 |
| **LobsterAI** | 3 | 3 | ❌ | 0 | 🔴 停滞 | 维护静默期（全部 stale） |
| **NullClaw** | — | — | ❌ | — | ⚪ 无活动 | — |
| **TinyClaw** | — | — | ❌ | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | ❌ | — | ⚪ 无活动 | — |

**关键观察**：
- **绝对活跃度排名**：OpenClaw > ZeroClaw ≈ IronClaw ≈ Hermes > NanoBot > NanoClaw > CoPaw > PicoClaw > Moltis > LobsterAI
- **相对产出效率**（合并/总 PR）：IronClaw 62% > NanoBot 29% > Hermes 14% > ZeroClaw 4% > OpenClaw 2%
- **OpenClaw 仍是体量最大的项目**，但合并速率相对较低，提示**审查吞吐瓶颈**。

---

## 3. OpenClaw 在生态中的定位

### 优势
| 维度 | OpenClaw 表现 |
|---|---|
| **规模与生态广度** | 348 条 Issue、500 条 PR——约为第二梯队（ZeroClaw/IronClaw/Hermes）的 7-10 倍，社区覆盖 macOS/iOS/Android |
| **议题多样性** | 覆盖投递链路、安全、平台兼容、UX、模型适配、渠道跟进等全栈议题 |
| **维护者活跃度** | steipete 等核心维护者亲自推动 CLI/Onboard/UI/架构统一多线工作 |
| **路线图清晰度** | "Everything is a cron"（#110950）显示维护层对架构演进方向有 owner 视角 |

### 劣势与风险
- **P1 积压明显**：10+ 个 P1 未修复，至少 5 个关联消息丢失 / 会话状态损毁（#109490、#92076、#70024、#102006、#99910）
- **2026.7.1 回归修复**仍是当前主战场，节奏被锁在"修补"而非"前瞻"
- **平台覆盖缺口**：Linux/Windows 桌面端仍是社区最大公约数诉求（#75，114 评论），与 ZeroClaw（已开始 Windows CI #7461）形成对比

### 与同类对比
| 对比维度 | OpenClaw | ZeroClaw / IronClaw | NanoBot / NanoClaw | Hermes |
|---|---|---|---|---|
| **架构成熟度** | 中（多渠道 + 会话状态治理并存） | 高（Reborn / OTel 等 RFC 驱动） | 中（插件化推进中） | 中（状态机治理进行中） |
| **可观测性** | 弱（#11955 才被提出） | **领先**（ZeroClaw OTel turn-level trace #6641） | 弱 | 弱 |
| **协议/标准兼容** | IM 平台为主 | **领先**（ACP/MCP 双向资源 blob #9178/#9179） | MCP 远程化（#2847/#3092） | 中 |
| **桌面端覆盖** | 仅 macOS/iOS/Android | ZeroClaw 已有桌面规划 | 弱 | 有但 Windows 出问题 |
| **审查吞吐** | 🔴 瓶颈明显 | 🟢 集中式快速合并 | 🟢 当日响应 | 🟡 50 条 PR 7 合并 |

**总体定位**：OpenClaw 是当前生态的**规模龙头**与**事实标准候选**，但在**架构清晰度、可观测性、协议开放性**上正被 ZeroClaw、IronClaw 等"治理优先"项目追赶。

---

## 4. 共同关注的技术方向

### 4.1 安全治理（最高密度共识）
| 诉求 | 涉及项目 | 具体诉求 |
|---|---|---|
| **凭据脱敏 / 反 Prompt Injection** | OpenClaw（#10659 Masked Secrets）、NanoBot（WebUI secure launch #4997）、LobsterAI（IM 凭据校验漏洞 #1287） | 凭据"可用不可见"、HttpOnly cookie、连通性测试合法性校验 |
| **记忆污染防御** | OpenClaw（#7707 Memory Trust Tagging）、ZeroClaw（#8891/#9048/#6850 三联 RFC）、Moltis（#1158 Zvec 后端） | 记忆按来源打信任等级、解耦生命周期与存储 |
| **Confused Deputy / 工具越权** | ZeroClaw（#7947 execute_pipeline 越权 S0）、OpenClaw（#13583 Pre-response Enforcement Hooks） | 子工具步骤需继承调用方 ToolAccessPolicy；高风险场景硬门禁 |
| **上下文注入防御** | Hermes（#14471 AGENTS.md 注入 P1，已修） | 工具路径发现需收敛 |

### 4.2 多渠道 / IM 适配
| 诉求 | 涉及项目 |
|---|---|
| **Telegram 投递稳定性** | OpenClaw（#89954 IPv6→IPv4 fallback、#111519 DM stale）、ZeroClaw（#8505 bot 不响应 S1） |
| **远程 MCP / 工具生态扩展** | NanoClaw（#2847/#3092 远程 Streamable HTTP）、ZeroClaw（#9178/#9179 ACP/MCP 资源 blob） |
| **WhatsApp LID 群组兼容** | NanoClaw（4 条竞品 PR 集中关闭 #2688/#2870/#3008/#3038） |
| **国内 IM 渠道（Weixin/Feishu）** | OpenClaw（Feishu 投递修复）、PicoClaw（Weixin 多模态 #3266） |

### 4.3 本地 LLM 体验
| 诉求 | 涉及项目 |
|---|---|
| **Prompt caching / KV cache 命中** | NanoBot（#4867 Ollama +60s 延迟）、OpenClaw（#108238 cacheRead 误算） |
| **Llama.cpp / 本地引擎兼容** | OpenClaw（#108580 cron schema GBNF）、ZeroClaw（#7539 llama.cpp 路由器、#9177 Qwen3.6 JIT） |
| **Provider 矩阵化** | NanoBot（Atlas #4996 / ModelScope #4965 / Nimble #4951）、ZeroClaw（Provider fallback #7881/#7883） |

### 4.4 可观测性
| 诉求 | 涉及项目 |
|---|---|
| **Turn-level / 嵌套 span trace** | ZeroClaw（#6641 OTel RFC，8 评论）、OpenClaw（#11955 上下文可观测） |
| **会话状态漂移诊断** | Hermes（#67012 流式握手、#64789 Desktop 三类会话身份、#67798 生命周期钩子 RFC） |
| **执行可见性** | LobsterAI（#1350 skills 生成阻塞无中间态） |

### 4.5 架构收敛
| 诉求 | 涉及项目 |
|---|---|
| **统一调度原语** | OpenClaw（#110950 "Everything is a cron"）、NanoBot（Turn 状态机统一 #4993） |
| **Channel 插件化** | NanoBot（#4908/#4995 自包含 channel）、NanoClaw（#3091 hosthooks） |
| **部署形态统一** | IronClaw（#6279 DeploymentConfig 接管所有部署维度） |
| **KeySource / 凭证抽象** | ZeroClaw（#9127 trait 抽象，影响 152 个字段） |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构关键词 |
|---|---|---|---|
| **OpenClaw** | 全平台个人 AI 助手 + 多渠道网关 | 终端用户 + 二次开发者 | 会话状态机 + 多渠道适配 + 工具生态 |
| **ZeroClaw** | 工程严谨的自托管 Agent runtime | 工程师 / 运维 / 企业自部署 | OTel 可观测性 + 凭据治理 + 协议开放（ACP） |
| **IronClaw** | 架构收敛期的 Rust 重写 | 关注长期架构的开发者 | Reborn 架构 + Facade + Resolution collapse + 混沌测试 |
| **Hermes Agent** | Desktop + Cloud 双形态 Agent | 桌面端用户 + 多 provider 用户 | Desktop Electron + MCP + 流式传输 |
| **NanoBot** | 轻量级、可插件化 Agent 框架 | 研究者 / 自部署用户 | Channel 插件化 + 多 Provider + WebUI |
| **NanoClaw** | 多渠道 + 工具生态的扩展型 Agent | 多 IM 用户 / 工具集成方 | 远程 MCP + 内嵌媒体工具 + 权限粒度细化 |
| **CoPaw** | 重度生产级 / 工作流编排 | 企业 / 复杂场景用户 | MCP 驱动 + 工作流编排 + Tauri 桌面 |
| **PicoClaw** | 轻量多 provider 桥接 | 国内 IM 用户 / LLM 接入方 | Provider 路由 + 国内 IM 适配 |
| **Moltis** | 极简记忆增强型 Agent | 偏好自托管 + 向量记忆的用户 | Rust + Zvec 向量后端 |
| **LobsterAI** | 教育 / 国内场景的 Agent | 教育 / 中文用户 | 异步流程 + IM 集成 + 长代码块渲染 |

**关键差异点**：
- **OpenClaw vs ZeroClaw**：体量 vs 工程严谨度的典型对比。OpenClaw 靠功能广度，ZeroClaw 靠 RFC 驱动的架构深度。
- **IronClaw 的独特价值**：是唯一公开"Reborn 架构简化设计文档 + 混沌测试 + ADR 治理"的项目，方法论领先。
- **NanoBot / NanoClaw**：同源（HKUDS / qwibitai

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-20

## 1. 今日速览

NanoBot 项目今日呈现**高活跃、低版本号**的特征：过去 24 小时处理了 6 条 Issue（5 条关闭）和 31 条 PR（9 条关闭/合并），其中 P1 优先级 PR 占比显著，但仍处于**大量 PR 待合并、零正式 Release** 的状态。Bug 修复效率较高，多个 P1 重构（#4908、#4993、#4995）和安全相关 PR（#4997）已合并进主干，反映项目处于持续推进 0.2.x 后期重构与新版本前的代码基线整合阶段。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共 **9 条 PR 关闭/合并**，以下为最具结构性影响的几项：

- **[#4908](https://github.com/HKUDS/nanobot/pull/4908) `refactor(channels): make built-in channels self-contained`**（P1）— 将内置 Channel 拆分为自包含的 `nanobot/channels/<channel>/` 包，移除中心化的 Channel 发现/加载/i18n/测试耦合。这是自 #4855 后的关键重构收尾，奠定了后续 Channel 插件化架构基础。
- **[#4993](https://github.com/HKUDS/nanobot/pull/4993) `refactor(agent): unify internal turn lifecycle`**（P1）— 合并 `_process_system_message` 中的 mini-loop，复用 `TurnContext` 状态机，消除恢复、压缩、Prompt 构建、执行、持久化等环节的重复路径。
- **[#4995](https://github.com/HKUDS/nanobot/pull/4995) `fix(channels): complete dependency manifest migration`**（P1）— 完成 #4908 的后续工作：引入 `nanobot plugins install <name>` 与 `--all-channels`，并把 Docker 安装迁移到可写的 `/app/.venv`，为 CI/CD 与镜像构建铺平道路。
- **[#4990](https://github.com/HKUDS/nanobot/pull/4990) `fix(triggers): reject deliveries to disabled channels`**（P1，regression）— 关闭 [#4991](https://github.com/HKUDS/nanobot/issues/4991)，修复本地 trigger 在 channel 被禁用后仍提交 agent turn 的问题（详见 Bug 章节）。
- **[#4994](https://github.com/HKUDS/nanobot/pull/4994) `fix(webui): resolve Windows package manager shims`** — 修复 Windows 下 `shutil.which("bun")` 解析 `bun.cmd` 失败导致 WebUI 构建失败的回归。
- 其他 4 条关闭 PR 未在 20 条高评论列表中显示，但反映了小型修复与清理工作的持续推进。

**整体评价**：今日主线 PR 重点是**架构收尾**（Channel 插件化、Agent 状态机统一、依赖清单迁移），这些工作让主干更接近一个稳定的 0.3.x 基线。

---

## 4. 社区热点

**评论最多/最具争议的 Issue**：

- **[#4867](https://github.com/HKUDS/nanobot/issues/4867) `[CLOSED] Preserve exact prompt prefix to enable caching in Ollama and others`**（9 条评论）— 这是 [#2463](https://github.com/HKUDS/nanobot/issues/2463) 的后续。**痛点**：使用 Ollama + 本地 32GB VRAM 模型时，每个 turn 额外增加 60 秒延迟，原因是 Prompt prefix 不稳定导致 KV cache miss。Issue 已关闭，暗示修复已并入主干或被 PR 接住（值得 PR 列表交叉验证）。
- **[#1459](https://github.com/HKUDS/nanobot/issues/1459) `nanobot with codex-5.3-codex is lazy and doesn't actually execute`**（6 条评论，2 👍）— 长期未解决：模型声称要读文件但实际不调用工具。属于"模型行为偏差"类问题，跟 base model 行为相关，难以纯靠 Nanobot 修复。
- **[#4823](https://github.com/HKUDS/nanobot/issues/4823) `[CLOSED] whatsapp groups regression`**（4 条评论）— WhatsApp group 回复从 0.2.2 起会广播到用户所在的所有 group。已关闭，意味着已修复。

**诉求分析**：社区最强烈的需求集中在 **(1) 本地 LLM 推理性能**（缓存、token 效率）、(2) Channel 行为正确性（group、白名单、reconnect）、(3) 模型与 Channel 的兼容边界（codex 模型在 Nanobot 内的行为偏差）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P1 | [#4991](https://github.com/HKUDS/nanobot/issues/4991) | 本地 trigger 在 channel 被禁用后仍消耗模型调用并误报成功 | ✅ [#4990](https://github.com/HKUDS/nanobot/pull/4990) 已合并 |
| 🔴 P1（regression） | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp group 回复跨群广播 | ✅ 已关闭，PR 待确认 |
| 🟠 P2 | [#4982](https://github.com/HKUDS/nanobot/pull/4982) | Feishu `_fallback_text_chunks` 在 `limit<=0` 时死循环 | ✅ 修复 PR 待合并 |
| 🟠 P2 | [#4981](https://github.com/HKUDS/nanobot/pull/4981) | Telegram `_split_telegram_markdown` 在 `max_len<=0` 时死循环 | ✅ 修复 PR 待合并 |
| 🟡 中 | [#4980](https://github.com/HKUDS/nanobot/issues/4980) | `GitStore` 在 workspace ≠ cwd 时初始化失败（Dulwich 相对路径 bug） | ⚠️ Issue 已关闭但未在 PR 列表中显式看到对应修复 |
| 🟡 中 | [#4975](https://github.com/HKUDS/nanobot/issues/4975) | Windows 非 UTF-8 locale 下 CliAppManager `subprocess.run(text=True)` 触发 UnicodeDecodeError | ⚠️ Issue 已关闭，修复待追踪 |
| 🟠 性能 | [#4867](https://github.com/HKUDS/nanobot/issues/4867) | Ollama 等本地模型每个 turn +60s 延迟（prompt prefix 不稳定） | ✅ 已关闭 |

**稳定性评估**：今日 Bug 修复响应速度良好，#4991 → #4990 的"Issue 提交当天合 fix PR"是健康的协作信号。两个 **Channel 文本分片死循环** 修复（#4981、#4982）属于同模式 bug，santhreal 集中处理值得肯定。

---

## 6. 功能请求与路线图信号

正在打开的新功能/Provider（带 PR 跟进，极有可能进入下一版本）：

- **[#4996](https://github.com/HKUDS/nanobot/pull/4996) `Add Atlas Cloud provider support`**（P1）— 新增 Atlas Cloud 作为 OpenAI 兼容 provider，含 API key 默认 base URL 与精选模型。
- **[#4965](https://github.com/HKUDS/nanobot/pull/4965) `Feat/modelscope provider support`**（P1）— 接入 ModelScope `https://api-inference.modelscope.cn/v1`，覆盖 Qwen、DeepSeek、Kimi、GLM、MiniMax 等开源模型，并支持图像生成。
- **[#4951](https://github.com/HKUDS/nanobot/pull/4951) `feat(web): add Nimble search provider`** — 新增 Nimble 作为 `web_search` 选项。
- **[#4866](https://github.com/HKUDS/nanobot/pull/4866) `feat(agent): bind model presets to sessions`**（P1）— 模型预设绑定到 session 元数据，捕获不可变 LLM runtime，subagent 与 SDK 调用同步传播配置。`/model` 改为 session-scoped。
- **[#4919](https://github.com/HKUDS/nanobot/pull/4919) `feat(telegram): support custom Bot API base URL and extra headers`**（P2）— 解决自建 Bot API / 企业网关场景。
- **[#4964](https://github.com/HKUDS/nanobot/pull/4964) `feat(image): apply generation settings live`** — WebUI 中图像生成 provider/model/凭据/enabled state 热生效。
- **[#4997](https://github.com/HKUDS/nanobot/pull/4997) `feat(webui): add secure browser companion launch`**（P1，security）— HttpOnly + SameSite cookie + 仅 localhost 状态端点，避免长期 bootstrap secret 泄露。

**路线图信号**：项目正朝着 **(a) 多 Provider 矩阵化**（Atlas、ModelScope、Nimble）、**(b) Channel 插件化与可定制性**（Telegram 自建网关、QQ 退避）、**(c) WebUI 安全与可用性**（companion 安全、图像设置热生效） 三条主线前进。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实声音：

- **本地 LLM 用户受困**：[#4867](https://github.com/HKUDS/nanobot/issues/4867) 的作者直言 "**totally unusable with Ollama and 32 GB of VRAM**"，说明本地推理用户对 Prompt caching 的需求是"非可选"的——一旦 KV cache 失效，硬件投资几乎归零。
- **回归敏感**：[#4823](https://github.com/HKUDS/nanobot/issues/4823) 的 mxnbf 注意到 0.2.2 后 WhatsApp group allow 行为被破坏，措辞克制（"i try not go into detail, because i can see where this is heading"），透露出社区对 Channel 白名单设计的担忧——group 隔离与回复路径耦合过深易引发信息泄露。
- **模型行为偏差**：[#1459](https://github.com/HKUDS/nanobot/issues/1459) 描述 nanobot + codex-5.3-codex 的"伪执行"现象（声称读取但实际未调工具），影响用户对 agent 行为的信任。
- **跨平台细节**：[#4975](https://github.com/HKUDS/nanobot/issues/4975) 暴露了 Windows CP936/GBK locale 下的隐式编码问题，反映出项目在国际化（尤其非英文 Windows 用户）上的覆盖度仍需加强。

**整体满意度信号**：Bug 提交流程顺畅、维护者当日闭环，**协作机制健康**；但零 Release 与持续累积的 P1 待合并 PR，暗示用户在等待一个稳定的 0.3.0 快照。

---

## 8. 待处理积压

需要维护者特别关注的长期/重要项：

- **[#1459](https://github.com/HKUDS/nanobot/issues/1459) `nanobot with codex-5.3-codex is lazy`**（创建于 2026-03-03）— **已存续 4 个多月**，2 👍，仍未关闭。属于 base model 行为偏差，但若长期不响应可能影响 NanBot 对第三方模型的兼容性口碑。建议维护者至少给出说明性回复或归类为 `wontfix / external`。
- **[#4965](https://github.com/HKUDS/nanobot/pull/4965) `ModelScope provider support`**（P1，conflict）— Provider 集成，涉及图像生成能力扩展，已与其他 PR 冲突，需要维护者合并策略与冲突仲裁。
- **[#4866](https://github.com/HKUDS/nanobot/pull/4866) `bind model presets to sessions`**（P1，conflict）— 跨 agent/consolidation/SDK/subagent 的核心架构改动，是 0.3.x 的关键能力，需要 review 资源投入。
- **[#4768](https://github.com/HKUDS/nanobot/pull/4768) `fix(qq): exponential backoff`** 与 **[#4838](https://github.com/HKUDS/nanobot/pull/4838) `fix(qq): exponential reconnect backoff`** — **两 PR 解决同一问题**，建议维护者协调合并避免重复。
- **[#4300](https://github.com/HKUDS/nanobot/pull/4300) `Check skill type requirements`**（conflict）— 涉及技能系统扩展，已存续较久，标记 conflict 需要 reviewer 介入。

**提醒**：今日新开 P1 PR（#4993、#4995、#4996、#4997）均为 chengyongru 或 Re-bin 等少数核心贡献者产出，**维护者人力集中度偏高**，建议扩展 reviewer 池以避免单点瓶颈。

---

### 📊 项目健康度总评

| 维度 | 评估 |
|---|---|
| Issue 响应速度 | 🟢 优秀（5/6 当日关闭） |
| PR 合并节奏 | 🟢 良好（9 条合并，含 3 条 P1 架构重构） |
| 架构演进 | 🟢 Channel 插件化、Agent 状态机统一推进中 |
| 发布节奏 | 🟡 需关注（持续无新 Release，P1 PR 大量待合并） |
| 社区多样性 | 🟡 核心贡献者集中，reviewer 池待扩充 |
| 跨平台/本地化 | 🟡 Windows 编码、Channel 白名单等细节反复出现 |

> **一句话总结**：NanoBot 今日在**架构收尾与新 Provider 接入**双线推进，工程活跃度优秀；最大风险是 **P1 PR 合并与正式 Release 节奏脱节**，建议尽快合并主干并切出 0.3.0 候选版本。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报
**日期：2026-07-20**
**数据来源：github.com/nousresearch/hermes-agent**

---

## 一、今日速览

Hermes Agent 在过去 24 小时继续保持高度活跃：共出现 **50 条 Issue 更新**（44 新开/活跃、6 关闭）和 **50 条 PR 更新**（43 待合并、7 已合并/关闭），但 **无新版本发布**。从结构看，社区讨论高度集中在三个方向——**Desktop 客户端的会话/路由状态管理缺陷**、**Cloudflare/OpenRouter 等第三方边缘网络的流式传输兼容性**，以及 **Windows 平台特定问题**。值得关注的是，长期未解决的 P1 级别安全相关 Issue（#14471、#44585）今日双双关闭，体现核心维护团队在安全收口上的执行力；与此同时，P2/P3 级别的 Desktop 会话状态漂移、文件树自动展开等问题已形成明显集群，存在系统性根因的可能。

---

## 二、版本发布

**无新版本发布。** 上一稳定版仍为 v0.18.2（f96b2e6e），未见最新 release tag。鉴于多日累计的 bug 修复与性能优化（特别是 PR #67788 关于请求大小估算的优化、PR #67814 的依赖安全升级、PR #47122 的 ssh_pwsh 后端），社区有理由期待维护者近期打一个 patch 版本（如 v0.18.3 或 v0.19.0）。

---

## 三、项目进展（今日合并/关闭）

虽然今日无版本发布，但代码仓库层面仍有实质性推进：

| 编号 | 类型 | 标题 | 影响 |
|---|---|---|---|
| [PR #67788](https://github.com/NousResearch/hermes-agent/pull/67788) | perf | drop per-call base64 re-serialization from request-size estimate | **关键路径性能优化**——每次 API 调用消除 base64 重序列化，TTFT（首 token 时间）显著改善，适用于所有调用 |
| [Issue #14471](https://github.com/NousResearch/hermes-agent/issues/14471) | bug | Hermes 注入无关 AGENTS.md/CLAUDE.md/.cursorrules 到 agent 上下文 | **P1 安全修复关闭**——收敛了工具路径发现导致的二次上下文注入风险 |
| [Issue #44585](https://github.com/NousResearch/hermes-agent/issues/44585) | bug | Cron 暂停期间仍调用付费 provider | **P1 计费安全修复关闭**——修复了 cron worker 在暂停后仍继承临时付费 provider 状态的问题 |
| [Issue #65650](https://github.com/NousResearch/hermes-agent/issues/65650) | perf | `/model` 选择器在 custom_providers 启用时 ~5s 慢 | P2 性能优化关闭 |

**进展评估：** 项目整体持续向"收敛态"过渡——2 个 P1 安全/计费类问题关闭、1 个跨所有调用的性能优化落地；与此同时，仍有 43 个 PR 处于待审状态，代码审查吞吐成为短期内可观察的关键瓶颈。

---

## 四、社区热点（评论数 Top）

### 1. [Issue #67012](https://github.com/NousResearch/hermes-agent/issues/67012)（7 评论）⭐
**Cloudflare/OpenRouter 流式传输 keepalive_expiry=20s 兼容性崩溃**
- 提交 `8324dd19c`（2026-06-28）将自定义 socket transport 替换为 `httpx.Limits(keepalive_expiry=20.0)`，导致 Cloudflare 后端（OpenRouter GRU/São Paulo 边缘）流式传输中断
- 体现了上游依赖升级与边缘网络握手时序之间的微妙耦合

### 2. [Issue #46593](https://github.com/NousResearch/hermes-agent/issues/46593)（6 评论）⭐
**kanban worker 提前退出导致 'protocol violation'**
- boto3 `converse_stream` 等前置失败导致 worker 在未调用 `kanban_complete` / `kanban_block` 时以 rc=0 退出，触发 dispatcher 误判
- 用户诉求：错误信息应当透出真实根因而非泛化的协议违规

### 3. [Issue #67187](https://github.com/NousResearch/hermes-agent/issues/67187)（5 评论）
**MCP parked server 复活后未重新注册工具**
- Streamable HTTP MCP 服务器被 park 后自我探测成功重连并协商新会话，但其工具未恢复至 Hermes 工具注册表

### 4. [Issue #49920](https://github.com/NousResearch/hermes-agent/issues/49920)（4 评论）
**Windows Desktop 更新后卡在 CONNECTING 界面**
- `hermes-setup.exe --update` 完成后桌面端 Electron 主进程超时连不上 dashboard 后端，根因是 Hermes 注入 `NODE_ENV=production` 使 `npm install` 跳过 devDependencies

### 5. [Issue #64789](https://github.com/NousResearch/hermes-agent/issues/64789)（4 评论）
**Desktop `prompt.submit` 在三类会话身份分裂时目标错误**
- render/runtime session = A、stored session = B、route token = B，导致 submit 漂移到陈旧 runtime

### 6. [Issue #53771](https://github.com/NousResearch/hermes-agent/issues/53771)（4 评论）
**大 session 在 OpenAI 兼容 provider 返回 Cloudflare 502 而不触发压缩**
- 上游返回通用 502 `origin_bad_gateway` 被归为可重试服务端错误，导致超大 session 在应当压缩时持续重试同一溢出请求

**诉求分析：** 排在前面的热点几乎全部围绕**边缘情况下的状态机正确性**——流式传输握手、cron/kanban 协议、MCP 会话恢复、Desktop 会话身份一致性。社区用户已经自发把这些归类为"系统性会话状态治理"问题（参见 [Issue #67798](https://github.com/NousResearch/hermes-agent/issues/67798) 关于统一生命周期钩子的 feature 请求）。

---

## 五、Bug 与稳定性（按严重程度排列）

### 🔴 P1（已关闭，今日安全收口）
- [Issue #14471](https://github.com/NousResearch/hermes-agent/issues/14471) — 工具路径发现注入无关 AGENTS.md/CLAUDE.md ✅ 已关闭
- [Issue #44585](https://github.com/NousResearch/hermes-agent/issues/44585) — Cron 暂停期间意外付费调用 ✅ 已关闭

### 🟠 P2（活跃且有修复 PR 跟进）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#67012](https://github.com/NousResearch/hermes-agent/issues/67012) | Cloudflare/OpenRouter keepalive 流式中断 | 暂无 PR |
| [#67187](https://github.com/NousResearch/hermes-agent/issues/67187) | MCP server 复活工具未重新注册 | 暂无 PR |
| [#49920](https://github.com/NousResearch/hermes-agent/issues/49920) | Windows Desktop 更新后 CONNECTING 卡死 | 暂无 PR |
| [#64789](https://github.com/NousResearch/hermes-agent/issues/64789) | Desktop 三类会话身份漂移 | 暂无独立 PR（[PR #67812](https://github.com/NousResearch/hermes-agent/pull/67812) 修复相关 route-flush 竞态） |
| [#53771](https://github.com/NousResearch/hermes-agent/issues/53771) | 大 session 触发 Cloudflare 502 而非压缩 | 暂无 PR |
| [#63754](https://github.com/NousResearch/hermes-agent/issues/63754) | TUI chat `ERR_INVALID_ARG_TYPE` 崩溃 | 暂无 PR |
| [#66750](https://github.com/NousResearch/hermes-agent/issues/66750) | 自定义 Cline API 端点返回嵌套 envelope | 暂无 PR |
| [#67200](https://github.com/NousResearch/hermes-agent/issues/67200) | 后台 terminal 加载交互式别名 | 暂无 PR |
| [#67783](https://github.com/NousResearch/hermes-agent/issues/67783) | computer_use 与 cua-driver 0.9.0 不对齐 | [PR #67813](https://github.com/NousResearch/hermes-agent/pull/67813) ✅ |
| [#67781](https://github.com/NousResearch/hermes-agent/issues/67781) | Telegram 4AM `session_reset` 被陈旧路由恢复 | 暂无 PR |
| [#67815](https://github.com/NousResearch/hermes-agent/issues/67815) | Desktop Anthropic 模型选择器缺 claude-sonnet-5 | 暂无 PR |
| [#39136](https://github.com/NousResearch/hermes-agent/issues/39136) | 陈旧 `dashboard --tui` 进程无法清理（唯一 👍=1） | 暂无 PR |

### 🟡 P3（积压中，影响较轻但密度大）
- [#46593](https://github

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-07-20
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**报告人**：开源项目分析师

---

## 1. 今日速览

PicoClaw 项目今日呈现**低活跃度但持续维护**的状态：过去 24 小时内无新版本发布，无 PR 合入或关闭，Issue/PR 更新均为小幅增量。社区层面共产生 3 条 Issue 更新（含 1 条已关闭）和 3 条 PR 更新（全部待合并），其中 1 条 Issue 与 1 条 PR 已标记为 **stale（停滞）**，提示维护团队需要清理长期未处理的积压项。整体来看，项目处于**稳定迭代期**，但响应节奏略有放缓，建议关注 stale 状态的清理与新 PR 的审阅。

- 📊 活跃度评分：**★ ★ ★ ☆ ☆**（中等偏低）
- 🐛 新 Bug 报告：2
- 🔧 待合并 PR：3
- 🧹 已关闭 Issue：1

---

## 2. 版本发布

⚠️ **过去 24 小时内无新版本发布**。跳过此节。

---

## 3. 项目进展

今日**无 PR 合入或关闭**，项目代码主干无明显推进。但有 3 条 PR 处于待审阅状态，代表潜在的下一次合入方向：

| PR | 标题 | 作者 | 创建时间 | 状态 |
|----|------|------|----------|------|
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | fix scope bug for refresh agy token | sarff | 07-19 | 🟡 待合并 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | fix(routing): strip leading/trailing underscores in ID normalization | Osamaali313 | 07-01 | 🟡 待合并（已开 19 天） |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | fix(providers): capture the prompt cache token usage in Anthropic providers | hydrogenbond007 | 07-12 | 🟡 待合并（已标记 stale） |

**分析**：
- PR #3267 修复了 antigravity 通道在 token 刷新时 scope 参数传递错误的 `PERMISSION_DENIED` 问题，属于关键鉴权 Bug 修复，**应优先审阅合入**。
- PR #3202 修复 `NormalizeAgentID` / `NormalizeAccountID` 与文档约束正则不一致的边界 case，已搁置 19 天未审，建议维护者介入。
- PR #3251 补齐 Anthropic provider 的 prompt cache token 用量采集能力，对运营观测有较大价值，但已被自动标记 stale。

---

## 4. 社区热点

今日 Issues 整体讨论密度较低（最高评论数仅 1 条），但有几条聚焦**LLM 接入稳定性**与**工具调用 UX**的问题值得关注：

🔥 **最值得关注的 Issue**：

- **[#3268 - exec tool action 参数应默认为 "run"](https://github.com/sipeed/picoclaw/issues/3268)**（MrTreasure，今日新开）
  - 讨论点：当 LLM 调用 `exec` 工具时省略 `action: "run"`（这是绝大多数场景），因参数被标记为必填而失败。属于典型的 LLM 工具调用健壮性问题，呼吁将 `action` 设为带默认值的可选参数。

- **[#3252 - splitKnownProviderModel 误剥离 provider 前缀](https://github.com/sipeed/picoclaw/issues/3252)**（v2up-32mb，已 stale）
  - 讨论点：模型 ID 本身包含已知 provider 别名时（如 `claude-sonnet-...`），函数会错误剥离前缀。评论 1 条但已 7 天无 maintainer 回应。

**诉求分析**：社区对 **LLM 接入层的健壮性**与**工具调用的容错性**高度关注，反映出 PicoClaw 在多 provider / 多通道场景下的稳定性仍存在提升空间。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 鉴权类（影响生产可用性）

| 严重度 | Bug | 链接 | 是否有 Fix PR |
|--------|-----|------|---------------|
| 🔴 P0 | antigravity 通道 token 刷新 scope 错误，导致 `PERMISSION_DENIED` | [#3267 (PR)](https://github.com/sipeed/picoclaw/pull/3267) | ✅ 已有 Fix PR（#3267） |

### 🟠 P1 - 功能可用性

| 严重度 | Bug | 链接 | 是否有 Fix PR |
|--------|-----|------|---------------|
| 🟠 P1 | Weixin 通道将图片直接传给非视觉模型，导致错误先于文件处理抛出 | [#3266](https://github.com/sipeed/picoclaw/issues/3266) | ❌ Issue 已关闭但未见对应 PR |
| 🟠 P1 | `splitKnownProviderModel` 误剥离 provider 前缀，导致模型路由错误 | [#3252](https://github.com/sipeed/picoclaw/issues/3252) | ❌ 暂未见 Fix PR（已 stale） |

### 🟡 P2 - UX 改进

| 严重度 | Bug | 链接 | 是否有 Fix PR |
|--------|-----|------|---------------|
| 🟡 P2 | `exec` tool 的 `action` 必填参数设计不合理，导致 AI agent 调用失败 | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | ❌ 暂无 Fix PR |

**稳定性观察**：今日没有关于**崩溃（crash）**或**数据丢失**的报告，主要 Bug 都集中在**集成层（providers / channels）**与**工具契约设计**，体现项目当前痛点并非核心运行时，而是**外围适配层**的鲁棒性。

---

## 6. 功能请求与路线图信号

今日明确的功能请求：

| 类型 | 描述 | 来源 | 评估 |
|------|------|------|------|
| 🛠 UX 改进 | `exec` 工具 `action` 参数应默认 `"run"` 并设为可选 | [#3268](https://github.com/sipeed/picoclaw/issues/3268) | **极可能纳入下版本**，改动小、收益大 |
| 📊 可观测性 | Anthropic provider 需要采集 prompt cache token 用量 | [#3251](https://github.com/sipeed/picoclaw/pull/3251) | **有望纳入**，已有完整 PR 实现 |
| 🐛 Bug 修复（隐含功能改进） | Weixin 通道需在传给 LLM 前先保存图片文件 | [#3266](https://github.com/sipeed/picoclaw/issues/3266) | Issue 已关闭但 fix 未落地，**需补 PR** |

**路线图信号**：社区对**多通道适配**（尤其是国内 IM 通道如微信）与**Anthropic 生态深度集成**（cache 观测）有明显诉求，建议下个迭代优先纳入。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数普遍较低（最高仅 1 条），用户反馈较为稀疏，但仍可提炼以下要点：

### ✅ 已关闭 Issue 的反馈闭环

- **Issue [#3266](https://github.com/sipeed/picoclaw/issues/3266)** - Weixin + 非视觉模型（如 DeepSeek V4 Flash）联动问题已被快速关闭，表明维护者响应及时，但**未见对应 fix commit**，建议作者确认是否需跟进 PR。

### 😟 真实用户痛点

1. **AI agent 工具调用脆弱性**：用户 MrTreasure 在 [#3268](https://github.com/sipeed/picoclaw/issues/3268) 指出，将 `action` 设为必填参数会导致 LLM 调用失败，**"你几乎永远不会显式传 `run`"** —— 反映出 LLM 行为不确定性下，工具 schema 应当**宽容优先（permissive-first）**而非严格优先。

2. **多 provider 模型 ID 解析歧义**：用户 v2up-32mb 在 [#3252](https://github.com/sipeed/picoclaw/issues/3252) 揭示了模型 ID 与 provider 别名耦合时的边界 case，体现用户对**复杂路由配置**场景的深度使用。

3. **Antigravity 鉴权稳定性**：PR [#3267](https://github.com/sipeed/picoclaw/pull/3267) 反映出 antigravity 通道在 token 刷新阶段存在 scope 传递问题，影响长期运行的稳定性。

---

## 8. 待处理积压

⚠️ **以下 Issue/PR 已长时间未响应，建议维护者重点关注**：

| 类型 | 编号 | 标题 | 创建时间 | 等待天数 | 链接 |
|------|------|------|----------|----------|------|
| 🟡 Stale PR | [#3251](https://github.com/sipeed/picoclaw/pull/3251) | fix(providers): capture the prompt cache token usage in Anthropic providers | 07-12 | 8 天 | [查看](https://github.com/sipeed/picoclaw/pull/3251) |
| 🟡 Stale Issue | [#3252](https://github.com/sipeed/picoclaw/issues/3252) | splitKnownProviderModel strips provider prefix | 07-12 | 8 天 | [查看](https://github.com/sipeed/picoclaw/issues/3252) |
| 🟠 长期未合并 PR | [#3202](https://github.com/sipeed/picoclaw/pull/3202) | fix(routing): strip leading/trailing underscores in ID normalization | 07-01 | 19 天 | [查看](https://github.com/sipeed/picoclaw/pull/3202) |

**维护者建议**：
1. **优先审阅 PR #3267**（P0 鉴权 Bug，已 ready for review）；
2. **清理 stale 标记**：评估 PR #3251 与 Issue #3252 是否仍有效，给社区明确反馈；
3. **关注 PR #3202**：已 19 天未合入，建议给出 review 意见或关闭。

---

## 📌 总结

PicoClaw 今日处于**低强度维护**状态，无新发布、无合入，但 Issue/PR 通道活跃。健康度整体可控，但需警惕 **stale 项目积压**对社区贡献者积极性的负面影响。建议下个迭代聚焦：**多通道适配稳定性（Weixin / Antigravity）+ 工具调用容错（exec action 默认值）+ 长期 PR 清理**。

---

*本报告基于 GitHub 公开数据自动生成，数据截止 2026-07-20。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期**：2026-07-20
**仓库**：github.com/qwibitai/nanoclaw
**数据窗口**：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日延续高活跃态势，过去 24 小时共产生 **30 条 PR 更新**（15 待合并 / 15 已关闭）与 **2 条新 Issue**，但**无新版本发布**。从流量结构看，今日并非"爆发日"，更像是一个**集中清理与规范化日**：维护者集中关闭了一批长期积压、互为竞品的 PR（尤其是 WhatsApp LID 群组消息卡死的同类修复），同时核心团队成员 **amit-shafnir** 集中提交了 4 条针对 Telegram、聊天输入态、模板与远程 MCP 的修复/增强。社区侧的两条新 Issue 均围绕"插件化扩展"与"自主技能学习"两大长期愿景，目前 0 评论、0 👍，尚处早期讨论阶段。项目整体处于**功能收敛、稳定性打磨**的阶段。

---

## 2. 版本发布

无新版本发布。维护者近一周的合并动作集中在 PR 层面，未触发新的 tag/release 流程。社区如有升级预期，建议等待下一轮 batch 合并后可能出现的版本号变动。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 3.1 WhatsApp LID 群组消息卡死——长期难题集中收口

过去 24 小时内，**4 条针对同一 Bug 的 PR 被集中关闭**，构成今日最重要进展：

| PR | 作者 | 创建日期 | 关闭日期 |
|---|---|---|---|
| [#2688](https://github.com/qwibitai/nanoclaw/pull/2688) | mcaldas | 2026-06-04 | 2026-07-19 |
| [#2870](https://github.com/qwibitai/nanoclaw/pull/2870) | elancode | 2026-06-26 | 2026-07-19 |
| [#3008](https://github.com/qwibitai/nanoclaw/pull/3008) | gfnord | 2026-07-10 | 2026-07-19 |
| [#3038](https://github.com/qwibitai/nanoclaw/pull/3038) | caburi00 | 2026-07-14 | 2026-07-19 |

**问题本质**：WhatsApp 将群组成员标识从手机号 JID（`@s.whatsapp.net`）迁移到 LID 后，`getNormalizedGroupMetadata()` 将参与者翻译回 phone 形式，导致 sender-key 分发失败，群组内 bot 消息对成员不可见（DMs 不受影响）。日志显示"已送达"但实际 ack error 421。

**意义**：4 条独立修复同时关闭，说明维护者倾向**只保留一条 canonical 修复**而非 4 个并存版本，仓库进入"少而精"的收敛节奏。建议关注最终被采纳的版本以学习群组加密相关的正确做法。

### 3.2 远程 MCP 服务器支持落地

[#2847](https://github.com/qwibitai/nanoclaw/pull/2847)（grantland，2026-06-24 → 2026-07-19 关闭）正式合并：在 `McpServerConfig` 中加入可选 `url` 字段，使 `command` 成为可选，agent 现可经 HTTP/SSE 连接远程 MCP 服务器。叠加今日仍待合并的 [#3092](https://github.com/qwibitai/nanoclaw/pull/3092)（amit-shafnir 的"支持远程 Streamable HTTP MCP 服务器"），标志着 NanoClaw **从本地 stdio-only MCP 走向混合拓扑**，对扩展第三方工具生态具有结构性意义。

### 3.3 多渠道矩阵持续扩充

今日关闭了一批大型渠道集成 PR，渠道版图进一步完整：

- **Discord**：[#1517](https://github.com/qwibitai/nanoclaw/pull/1517)（misterclarity）—— 加入图片附件下载、resize 到 1024×1024 并作为多模态内容块送入 agent。
- **Microsoft Teams**：[#1648](https://github.com/qwibitai/nanoclaw/pull/1648)（Aswinmcw）—— Bot Framework webhook + `/add-msteams` 引导技能。
- **WeChat / Weixin**：[#1594](https://github.com/qwibitai/nanoclaw/pull/1594)（grzhx）与 [#1921](https://github.com/qwibitai/nanoclaw/pull/1921)（Clapeysron）—— 通过腾讯 iLink Bot 协议接入。

### 3.4 内嵌 MCP 媒体工具

- [#2306](https://github.com/qwibitai/nanoclaw/pull/2306)（CrAzyScreamx）：内嵌 yt-dlp MCP 服务器 + `/add-ytdlp` 安装器。
- [#2261](https://github.com/qwibitai/nanoclaw/pull/2261)（CrAzyScreamx）：`/add-ffmpeg` —— ffmpeg/ffprobe MCP 服务用于媒体转码。

### 3.5 权限粒度细化

[#2278](https://github.com/qwibitai/nanoclaw/pull/2278)（CrAzyScreamx）：引入 per-wiring 渠道权限（`read | write | read+write`），为多渠道环境下的最小权限原则打基础。

### 3.6 渠道桥接容错

[#2276](https://github.com/qwibitai/nanoclaw/pull/2276)（CrAzyScreamx）：修复 bridge 在 adapter 省略 `fetchData` 时缺失 URL 回退的故障，提升新渠道适配器的接入鲁棒性。

### 3.7 核心团队集中修复

maintainer **amit-shafnir** 今日集中提交 4 条修复（均 OPEN，尚未合并）：

- [#3094](https://github.com/qwibitai/nanoclaw/pull/3094) — `fix(telegram)`：瞬态 bot 身份查询增加重试
- [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) — `fix(chat)`：处理回合保持 typing 指示
- [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) — `fix(templates)`：顶层上下文 Markdown 文件统一前置
- [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) — `feat`：支持远程 Streamable HTTP MCP

另：[#3088](https://github.com/qwibitai/nanoclaw/pull/3088)（moshe-nanoco）将 unknown-sender holds 折入 `ncl approvals list`，CLI 可视化与处置流程补完。

---

## 4. 社区热点

> **注**：今日数据快照中所有 PR 评论字段均为 `undefined`、Issue 评论均为 0，因此按"主题聚类 + 跨 PR 协同"判定热度，而非评论数。

### 4.1 WhatsApp LID 群组断裂 —— 最热门议题

4 条独立修复 PR + 长期多人讨论，构成过去一个月最强的单一热点。详见 §3.1。

### 4.2 插件化扩展的两条新 Issue

- **#3091 [ZappoMan]** —— [标准化可组合的宿主扩展钩子（hosthooks）](https://github.com/qwibitai/nanoclaw/issues/3091)
  诉求：当前社区技能多通过 string-patch 修改 NanoClaw 源码（router/delivery/container-runner/Claude provider/poll loop），单技能可用，多技能同点改造会**冲突**且**随上游重构断裂**。呼吁引入正式的扩展点。
- **#3089 [cy83rc0llect0r]** —— [让 NanoClaw 自学习技能](https://github.com/qwibitai/nanoclaw/issues/3089)
  诉求：当前技能均为手工编写投放，希望 agent 能识别反复出现的任务模式并自动生成新技能文件。

两条都不讨论热度但**话题信号极强**：#3091 指向架构层补完（与今日 #2276 / #2278 权限粒度化的方向一致），#3089 指向 AI 元能力层，是 NanoClaw 走向"自托管个人助手"愿景的关键卡点。

### 4.3 远程 MCP 生态开放

[#3092](https://github.com/qwibitai/nanoclaw/pull/3092) + 已合并的 [#2847](https://github.com/qwibitai/nanoclaw/pull/2847) 形成"通用远程 MCP 接入"的主线，叠加 yt-dlp / ffmpeg 内嵌 MCP，社区对**让 NanoClaw 能调用一切 HTTP 工具**的兴趣浓厚。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 现象 | 状态 | 链接 |
|---|---|---|---|
| 🔴 高 | **WhatsApp 群组消息对成员不可见**（DMs OK），Baileys ack error 421，LID 模式 sender-key 分发失败 | 多 PR 并行；今日 4 条竞品全部关闭，**仍待确认哪条被采纳为最终修复** | [#2688](https://github.com/qwibitai/nanoclaw/pull/2688) / [#2870](https://github.com/qwibitai/nanoclaw/pull/2870) / [#3008](https://github.com/qwibitai/nanoclaw/pull/3008) / [#3038](https://github.com/qwibitai/nanoclaw/pull/3038) |
| 🟡 中 | **Telegram 瞬态 bot 身份查询失败**（bot 重启或首次冷启动时） | 已有 fix PR [#3094](https://github.com/qwibitai/nanoclaw/pull/3094) OPEN，未合并 | — |
| 🟡 中 | **聊天回合中 typing 指示消失**（长任务下体验下降） | 已有 fix PR [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) OPEN | — |
| 🟢 低 | **bridge 缺失 fetchData 时无 URL 回退** | 已合并 [#2276](https://github.com/qwibitai/nanoclaw/pull/2276) | — |

**健康度结论**：今日**无全新严重崩溃报告**，重点 Bug 是已有问题的合流收口；典型 stale-closed 模式（同一问题 4 个 PR）反映仓库在协作规范上仍有改进空间，未来可能需要 maintainer 更早锁定"该问题已有人在修"的信号。

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 现状 | 进入下版本概率 |
|---|---|---|---|
| 标准化宿主扩展钩子（hosthooks） | [#3091](https://github.com/qwibitai/nanoclaw/issues/3091) ZappoMan | 新开，无竞品 PR | ⭐⭐⭐（高）—— 与权限粒度（#2278）、bridge 容错（#2276）方向一致，是架构演进的逻辑下一步 |
| 远程 Streamable HTTP MCP | [#3092](https://github.com/qwibitai/nanoclaw/pull/3092) amit-shafnir | OPEN | ⭐⭐⭐⭐（极高）—— 已有 [#2847](https://github.com/qwibitai/nanoclaw/pull/2847) 落地，core-team 跟进补强 |
| Agent 自主技能学习 | [#3089](https://github.com/qwibitai/nanoclaw/issues/3089) cy83rc0llect0r | 新开 | ⭐⭐（中）—— 愿景宏大，短期实现门槛高，需要先解决评估/沙箱/可逆性 |
| `/add-ytdlp` 内嵌 MCP | [#2306](https://github.com/qwibitai/nanoclaw/pull/2306) CrAzyScreamx | 已关闭（待确认是否合并） | ✅ 高 |
| `/add-ffmpeg` 内嵌 MCP | [#2261](https://github.com/qwibitai/nanoclaw/pull/2261) CrAzyScreamx | 已关闭 | ✅ 高 |
| Microsoft Teams 渠道 | [#1648](https://github.com/qwibitai/nanoclaw/pull/1648) Aswinmcw | 已关闭 | ✅ |
| Discord 渠道（图多模态） | [#1517](https://github.com/qwibitai/nanoclaw/pull/1517) misterclarity | 已关闭 | ✅ |
| WeChat / Weixin 渠道 | [#1594](https://github.com/qwibitai/nanoclaw/pull/1594) / [#1921](https://github.com/qwibitai/nanoclaw/pull/1921) | 均已关闭 | ✅ |
| `ncl approvals list` 暴露 unknown-sender holds | [#3088](https://github.com/qwibitai/nanoclaw/pull/3088) moshe-nanoco | OPEN | ⭐⭐⭐⭐ |
| 模板顶层上下文 Markdown 前置 | [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) amit-shafnir | OPEN | ⭐⭐⭐⭐ |

---

## 7. 用户反馈摘要

由于数据快照中 Issues 评论与 PR 反应数均缺乏显式数值，以下分析基于**问题摘要文本**直接提取的真实诉求：

- **技能开发者痛点**（#3091）：当前 nanoclaw 技能以"打补丁源码"方式接入，单技能可用、多技能冲突、上游重构即破坏。期望**正式插件协议**。
- **AI 自学习诉求**（#3089）：用户希望 NanoClaw 能识别重复任务模式并自动生成技能文件，摆脱纯手工编写。
- **WhatsApp 群组失效**（#2688/#2870/#3008/#3038）：多名用户在生产场景中遭遇"日志显示送达但群内成员看不见"，已影响 bot 的实际可用性，属于"静默失败"类最不受欢迎的故障模式。
- **Telegram / Chat 体验**（#3094/#3093）：用户期望**冷启动稳定性**与**长任务期间的 typing 反馈**。
- **远程 MCP 需求**（#3092/#2847）：社区希望打通本地 + 远程 MCP，扩展第三方工具生态。
- **CLI 审批体验**（#3088）：unknown-sender holds 当前被藏在独立表，CLI 看不见，希望统一入口。

**满意面**：从 Discord/Telegram/Microsoft Teams/WeChat 多个渠道 PR 的并行存在看，社区对**多渠道接入**的整体方向满意，多人愿意投入维护。

---

## 8. 待处理积压

维护者需关注的"沉默资产"：

| 类型 | 编号 | 标题 | 风险点 |
|---|---|---|---|
| 🟠 长期积压 PR | [#352](https://github.com/qwibitai/n

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-20

> 数据窗口：2026-07-19 ~ 2026-07-20
> 数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 继续保持 **"Reborn" 架构简化主线的密集推进节奏**：过去 24 小时共 5 个新 Issue 开启、50 个 PR 刷新，其中 **31 个 PR 已合并/关闭、19 个仍待合并**，新版本正式发布 **0 个**，但有一条版本发布 PR 已挂起多日等待合并。活跃度评估为 **极高**——核心维护者 `ilblackdragon` 单人贡献了大部分 XL 级别的架构重构 PR，叠加 `loopstring` 的本地 onboarding 系列、`dependabot[bot]` 的依赖刷新，以及 `serrrrfirat`、`italic-jinxin` 提出的目标型/迁移类 Issue，呈现出"主干重构 + 用户体验 + 依赖卫生"三线并进的局面。

---

## 2. 版本发布

> 📌 **无新版本发布。**

但有一条 **版本发布 PR 处于长期挂起状态**，需维护者关注：

- **#5598 — chore: release**（创建于 2026-07-03，已开放 ~17 天，OPEN）
  - 链接：https://github.com/nearai/ironclaw/pull/5598
  - 计划发布内容：
    | Crate | 版本 | 兼容性 |
    | --- | --- | --- |
    | `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠ **API breaking** |
    | `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ 兼容 |
    | `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠ **API breaking** |
    | `ironclaw` | 0.24.0 → 0.29.1 | 多次小版本跳号 |

  - **迁移注意事项**：消费方需评估 `ironclaw_common` 的构造/类型签名变化以及 `ironclaw_skills` 的接口升级。
  - **健康度提示**：与最新主分支已隔 17 天，期间 Reborn 主线又有大量 commit 落地，建议尽快 rebase/合并，避免 release 落后于代码现状。

---

## 3. 项目进展（已合并/关闭 PR）

### 🏛 Reborn 架构主线（§5.2 / §5.3 / §4.4）

| PR | 级别 | 摘要 |
| --- | --- | --- |
| [#6295](https://github.com/nearai/ironclaw/pull/6295) | L | **崩溃一致性混沌测试套件** + 修复 2 个真实崩溃恢复缺陷（联动 #6263、#6284） |
| [#6293](https://github.com/nearai/ironclaw/pull/6293) | XL | §5.3 **Stage 2b 完成**：所有 capability producer 直接 emit `Resolution`，删除 `CapabilityOutcome` |
| [#6292](https://github.com/nearai/ironclaw/pull/6292) | XS | 冻结 `RebornServicesApi` facade 方法集（§5.2.5） |
| [#6291](https://github.com/nearai/ironclaw/pull/6291) | XS | 设计文档 r8：将 #6284 错误可恢复性契约并入 |
| [#6287](https://github.com/nearai/ironclaw/pull/6287) | XL | §5.3 Stage 2 **atomic flip**：loop-facing 结果统一为 `host_api::Resolution` |
| [#6279](https://github.com/nearai/ironclaw/pull/6279) | XL | DeploymentConfig 接管所有部署维度，移除模式分支（§4.4/§5.6/§5.11 Phase 2） |

→ **评估**：架构简化设计文档的 §5.2 (facade) 与 §5.3 (Resolution collapse) **主体已完成**，§4.4 DeploymentConfig 已收口；项目在"抽象统一"方向上迈出了一大步。

### 🎨 本地 onboarding / UX 体验

| PR | 级别 | 摘要 |
| --- | --- | --- |
| [#6285](https://github.com/nearai/ironclaw/pull/6285) | XL | 本地开发一键 onboarding：REPL 模型向导、onboard 启动器（loopstring） |
| [#6294](https://github.com/nearai/ironclaw/pull/6294) | XS | 缩短 onboarding quick start 文档（BenKurrek） |

→ **评估**：首次运行体验是从 Slack 反馈转化而来的明确痛点，本批获得显著改进。

### 🔧 依赖与工具链

| PR | 摘要 |
| --- | --- |
| [#6286](https://github.com/nearai/ironclaw/pull/6286) | `serde` 1.0.228 → 1.0.229 |
| [#6288](https://github.com/nearai/ironclaw/pull/6288) | everything-else 依赖组批量 32 项更新（dependabot） |

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 链接 | 焦点 |
| --- | --- | ---

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-20** | **数据来源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日整体活跃度**较低**，处于"维护静默期"。过去 24 小时内共记录 3 条 Issue 更新与 3 条 PR 更新，**无新版本发布**，且所有涉及条目均被标记为 `[stale]`（停滞），显示社区反馈与维护者响应均不活跃。Issue 关闭率 33%（1/3）、PR 关闭率 33%（1/3），合并吞吐量为零。当日没有实质性的功能推进或代码合入，项目活跃信号弱，建议关注积压问题的处理节奏。

---

## 2. 版本发布

**今日无新版本发布。** 仓库目前未产出可分发的 Release 资产。

---

## 3. 项目进展

今日 **无 PR 被合并**。实质性进展仅限于一条 PR 关闭：

- **#1350 [CLOSED]**（[链接](https://github.com/netease-youdao/LobsterAI/pull/1350)）：用户 `jimmy-xz` 提出"skills 文件长时间生成阻塞无感知、中间态无展示"的 Bug 报告被关闭。该 PR 并非代码合入，更接近一份**带截图的问题反馈**，最终以关闭处理（未明确为已修复）。这意味着用户报告的 **技能生成阻塞与模型理解偏差** 两大问题当前**尚未有公开的修复落地**，需关注后续是否有 fix PR 跟进。

整体而言，项目今日**未向前推进任何功能或修复**，仍处于停滞状态。

---

## 4. 社区热点

按评论数与议题影响力排序：

| 排名 | 议题 | 评论数 | 状态 | 链接 |
|------|------|--------|------|------|
| 1 | #1352 任务运行中附件无法上传 | 2 | CLOSED | [链接](https://github.com/netease-youdao/LobsterAI/issues/1352) |
| 2 | #1287 IM 机器人连通性测试绕过 | 1 | OPEN | [链接](https://github.com/netease-youdao/LobsterAI/issues/1287) |
| 3 | #1289 长代码块折叠/展开功能 | 1 | OPEN | [链接](https://github.com/netease-youdao/LobsterAI/issues/1289) |

**诉求分析**：
- **#1352** 反映出**任务执行期间 UI 状态机管理缺陷**——一旦任务运行，附件上传交互被锁死，影响用户在工作流中追加资料的能力。
- **#1287** 属于**安全/校验逻辑漏洞**——IM 机器人的连通性测试未对 appKey/appSecret/AES Key 做基本合法性校验，存在测试通过但生产失败的隐患。
- **#1289** 是**阅读体验优化诉求**——已有 200 行/20000 字符的降级机制，但 15–200 行区间缺乏折叠能力，是高频 AI 长输出场景下的实际痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 状态 | 是否有 Fix PR |
|--------|------|------|------|---------------|
| 🔴 高 | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | IM 机器人 PoPo 连通性测试：appKey/appSecret/AES Key 全部填 `1` 也能通过验证 | OPEN, stale | ❌ 无 |
| 🟠 中 | [#1350](https://github.com/netease-youdao/LobsterAI/pull/1350) | skills 文件生成阻塞、过程态缺失、跨模型理解偏差 | CLOSED（未确认修复） | ❌ 无公开 fix |
| 🟡 低 | [#1352](https://github.com/netease-youdao/LobsterAI/issues/1352) | 任务运行中附件上传点击无响应 | CLOSED | ❌ 无 fix PR |

**稳定性结论**：高严重度安全校验类 Bug（#1287）仍开放且无修复方案，是当前最值得维护者优先处理的事项。任务运行态交互缺陷（#1352、#1350）虽已关闭但缺乏修复证据，存在回归风险。

---

## 6. 功能请求与路线图信号

唯一明确的新功能请求：

- **#1289 [OPEN]**（[链接](https://github.com/netease-youdao/LobsterAI/issues/1289)）：用户 `MaoQianTu` 提出为长代码块添加**自动折叠/展开**功能。
  - 已有上下文：现有 `CodeBlock` 组件（位于 `MarkdownContent.tsx`）已具备 `CODE_BLOCK_LINE_LIMIT=200` 与 `CODE_BLOCK_CHAR_LIMIT=20000` 的硬降级机制。
  - 缺口：15–200 行区间缺乏渐进式折叠。
  - 路线图概率评估：**中等**。该需求技术边界清晰、改动局部（单组件），且能直接改善 AI 长输出场景体验，符合产品演进方向。**目前无对应 PR**，属于"低门槛高收益"的可纳入候选。

依赖更新方面，两条 dependabot PR（#1285、#1286）暗示前端工具链存在升级空间（concurrently 8→9、tailwindcss 3.4→4.2），其中 tailwindcss 4.x 属于**重大版本升级**，若合并将带来一定的迁移成本。

---

## 7. 用户反馈摘要

从 Issues 与 PR 评论中可提炼出三类真实痛点：

1. **执行可见性差**：用户在 `skills` 生成、长任务运行等场景下"看不到 AI 在做什么"，既无中间态也无错误提示，体感像"卡死"（见 #1350）。这反映出**异步流程的可观测性**设计不足。

2. **交互状态机不完善**：任务运行期间附件上传被锁死（#1352），说明**任务态 vs 输入态的并发模型**尚未处理好，用户无法在长任务中补充上下文。

3. **输入校验与安全提示缺失**：IM 机器人连通性测试对错误凭证无任何拒绝（#1287），用户很容易误判集成已成功，生产环境踩坑概率高。

满意方面：暂无新增正面反馈；本次数据中所有活跃议题均为问题或改进诉求。

---

## 8. 待处理积压（维护者提醒）

以下条目均为 `[stale]` 状态，长期未获维护者响应，**建议优先处理**：

| 类型 | 编号 | 标题 | 停滞时长 | 风险等级 |
|------|------|------|----------|----------|
| Issue | [#1287](https://github.com/netease-youdao/LobsterAI/issues/1287) | IM 机器人 PoPo 连通性测试绕过 | 3+ 月 | 🔴 高 |
| Issue | [#1289](https://github.com/netease-youdao/LobsterAI/issues/1289) | 长代码块折叠/展开功能 | 3+ 月 | 🟢 低 |
| PR | [#1285](https://github.com/netease-youdao/LobsterAI/pull/1285) | concurrently 8.2.2 → 9.2.1 | 3+ 月 | 🟡 中（安全补丁潜在） |
| PR | [#1286](https://github.com/netease-youdao/LobsterAI/pull/1286) | tailwindcss 3.4.19 → 4.2.2 | 3+ 月 | 🟠 中（主版本升级） |

**维护建议**：
1. 优先 triage #1287，确认是否构成安全缺陷并分配 owner；
2. 对 #1285/#1286 两条 dependabot PR 给出合并/拒绝决策，避免依赖升级无限堆积；
3. 对所有 stale 条目补充官方状态说明（won't fix / planned / needs-info），降低社区等待成本。

---

## 健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐☆☆☆☆ | 当日仅 6 条记录变更，无实质推进 |
| 响应及时性 | ⭐☆☆☆☆ | 全部活跃条目均为 stale |
| 稳定性 | ⭐⭐☆☆☆ | 高严重度 Bug 长期开放 |
| 路线图可见性 | ⭐⭐☆☆☆ | 缺乏版本节奏与公开规划 |

> 📌 **结论**：LobsterAI 今日进入低活跃维护状态，建议维护者对积压的 stale 条目做一次集中清理，并发布下阶段路线图，以恢复社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-07-20**

---

## 1. 今日速览

Moltis 项目今日活跃度偏低，过去 24 小时内仅记录到 1 条 Issue 更新和 1 条 PR 更新，且均处于开放状态，未出现合并或关闭动作。项目同日发布了新版本 `20260719.01`，显示维护团队仍在持续交付节奏内。整体来看，项目处于**低强度迭代期**：无重大合并事件，但社区仍有持续的功能探讨与实验性贡献流入。

---

## 2. 版本发布

### 📦 Release `20260719.01`

- **发布时间**：2026-07-19
- **链接**：[Release 20260719.01](https://github.com/moltis-org/moltis/releases/tag/20260719.01)

> ⚠️ 备注：当前数据未提供该版本的详细 changelog。从版本号命名规则（日期格式 `YYYYMMDD.NN`）推测，这应为一个常规的日期化构建发布。建议关注仓库 Release 页面以获取完整的 commit 列表与变更说明。

---

## 3. 项目进展

⚠️ **今日无 PR 合并或关闭记录**。

唯一更新的 PR #1158 仍处于 OPEN 状态，因此今日的项目代码主线**未发生实质性推进**。建议关注以下待合并贡献以评估其纳入下一版本的可能性：

- [PR #1158 — feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)

---

## 4. 社区热点

### 🔥 Issue #574 — [Feature]: Model Routing Per topic

- **作者**：azharkov78
- **创建时间**：2026-04-06（已开放约 3.5 个月）
- **今日更新**：2026-07-19
- **互动数据**：💬 4 条评论 ｜ 👍 1 个 reaction
- **链接**：[Issue #574](https://github.com/moltis-org/moltis/issues/574)

**诉求分析**：该 Issue 提出按"主题（topic）"进行模型路由（Model Routing）的功能请求，属于系统级增强。社区已就此展开 4 轮讨论，表明该需求具备一定关注度，可能与用户在多领域对话场景下希望按主题自动调度不同模型（如专用模型 vs 通用模型）的实际诉求相关。👍 反应数虽为 1，但评论数较多，说明**讨论深度高于点赞热度**，维护者应关注其后续走向。

---

## 5. Bug 与稳定性

✅ **今日无 Bug 报告、崩溃问题或回归性问题记录**。

项目稳定性方面今日未观察到负面信号。这是一个良好的健康度指标，但样本量极低（仅 1 条 Issue），不宜过度解读。

---

## 6. 功能请求与路线图信号

### 📌 信号一：按主题的模型路由（已纳入社区议程）
- [Issue #574](https://github.com/moltis-org/moltis/issues/574) 已被标注为 `enhancement`，且讨论已持续 3.5 个月，表明社区对此功能有真实且持续的需求。建议维护者评估是否在路线图中正式排期。

### 📌 信号二：Zvec 向量数据库作为 memory 后端（实验性 PR）
- [PR #1158](https://github.com/moltis-org/moltis/pull/1158) 由社区贡献者 demyanrogozhin 提交，尝试引入基于 Zvec + redb 的向量记忆后端，并已通过 cargo feature flag 进行门控。
- 该 PR 描述为"Just as experiment I vibe-coded"，属于**实验性贡献**，合并概率与维护者对 Zvec 生态的战略判断相关。
- 由于 `zvec` feature 默认在 `full` 模式下启用，若合并将扩展项目的 memory backend 选择空间，对生态多样性具有积极意义。

---

## 7. 用户反馈摘要

### 💬 来自 Issue #574 的用户声音
- **使用场景**：用户期望在同一会话或跨会话中，根据不同主题（topic）自动路由到不同的 LLM 模型。
- **痛点**：当前架构下模型路由粒度较粗，可能无法满足多领域专业场景下的精细化调度需求。
- **建议**：用户已在 Issue 中完成了预检查清单（preflight checklist），说明社区贡献者具备较高的协作素养，需求描述较为规范。

### 💬 来自 PR #1158 的用户声音
- **使用场景**：贡献者描述了"独立部署的 llama-cpp embedding server + Zvec 向量数据库"的本地化部署方案，反映出**部分用户偏好自托管、轻量化的全栈配置**。
- **满意度信号**：贡献者主动将自身方案回流为 PR，体现用户对项目生态的**正向参与意愿**。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 持续时长 | 风险点 |
|------|------|------|----------|----------|--------|
| Issue | [#574](https://github.com/moltis-org/moltis/issues/574) | Model Routing Per topic | 2026-04-06 | **约 105 天** | 🟡 长期开放但有讨论，建议维护者给出明确表态 |
| PR | [#1158](https://github.com/moltis-org/moltis/pull/1158) | feat(memory): add zvec vector database memory backend | 2026-07-17 | 3 天 | 🟢 较新，暂无 review 反馈 |

### 🚨 关注提醒

- **Issue #574 已开放超过 3 个月**，尽管有 4 条评论和 1 个 reaction，但仍处于 OPEN 状态未进入实施阶段。建议维护者**正式响应并给出路线图判断**（接受/拒绝/延后），以维持社区贡献者的参与热情。
- **PR #1158 目前 0 评论、0 reaction**，建议维护者尽快进行**首次 review 反馈**，即使是简单的 LGTM 或变更请求，避免贡献者流失。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐ | 今日无合并事件 |
| 社区参与度 | ⭐⭐⭐ | 存在活跃讨论与外部 PR 贡献 |
| 响应及时性 | ⭐⭐ | 存在长期未决 Issue |
| 版本发布节奏 | ⭐⭐⭐⭐ | 保持日期化版本迭代 |
| 整体健康度 | **中等偏上** | 生态运转正常，但需关注积压与响应速度 |

---

*报告生成时间：2026-07-20 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：2026-07-20**
**项目：agentscope-ai/CoPaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

CoPaw 今日整体活跃度处于**中等偏高**水平：过去 24 小时内新增/活跃 Issues 11 条、待合并 PR 7 条，0 个版本发布、0 个 PR 合并/关闭。社区主要在围绕**性能瓶颈（MCP 驱动并行化）、功能增强（工作流编排、记忆画像、托盘最小化）与 Bug 修复（OpenAI token、缩放、离线预览）**三类议题展开讨论。值得注意的是，PR #6266 正在将版本号向 2.0.1b1 推进，暗示下一次 beta 版本即将开放，团队正进入合并窗口前的最后冲刺阶段。

---

## 2. 版本发布

**今日无新版本发布。**

但 PR #6266（[chore: bump version to 2.0.1b1](https://github.com/agentscope-ai/QwenPaw/pull/6266)）已提交，表明 2.0.1 首个 beta 版本正在准备中，预计将整合当前 Pending 的若干 feature 与 bug fix。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，但有若干值得关注的推进信号：

| PR | 标题 | 状态信号 |
|---|---|---|
| [#6195](https://github.com/agentscope-ai/QwenPaw/pull/6195) | Refactor context usage ring → chat console | 标记 `[ready-for-human-review]`，接近可合并 |
| [#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796) | ACP 模块解耦 slash command | 标记 `[Under Review]`，长期重构进入评审阶段 |
| [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | Agent 配置一键复制 | 新增功能 PR 已开放，等待评审 |
| [#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) | No-auth host 白名单支持 CIDR | 首次贡献者提交 |
| [#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256) | 沙箱不可用 fallback 可配置 | 首次贡献者提交，修复 #6250 |
| [#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237) | Scroll 历史召回改进 | 已多次更新，进入细节打磨期 |

整体而言，**项目处于"待合并积压扩张"状态**——功能 PR 持续涌入但合并速度放缓，建议维护者关注积压风险。

---

## 4. 社区热点

按评论数与讨论热度排序：

### 🔥 [#6193 [Performance] MCP drivers start sequentially instead of in parallel](https://github.com/agentscope-ai/QwenPaw/issues/6193)
- 作者：zsrmoyanzsr | 评论：4 | 👍：0
- **诉求**：MCP 驱动从串行改并行，8 客户端场景由 40s → 5s（**8 倍加速**），定位明确指向 `src/qwenpaw/drivers/manager.py` 的 `build_drivers()`。
- **背景**：用户对启动延迟极为敏感，性能优化能直接放大多 MCP 场景的体验。

### 🔥 [#6163 [Feature] Reusable Workflow Orchestration with Audit Trail](https://github.com/agentscope-ai/QwenPaw/issues/6163)
- 作者：hhhzyd-cloud | 评论：3
- **诉求**：在 `chat_with_agent`、`spawn_subagent`、`qwenpaw cron` 之上，**定义可复用的多步骤工作流**并附审计轨迹，反映出企业级/复杂场景对编排能力的渴求。

### 🔥 [#6257 [Bug] Multiple tool calls produce identical thinking output](https://github.com/agentscope-ai/QwenPaw/issues/6257)
- 作者：ShenWesley | 评论：2
- **诉求**：单轮多次工具调用时，各次调用的思考内容**完全相同**，缺乏独立推理；影响多工具协作的可观测性与可信度。

### 🔥 [#6249 [Question] TUI 一直处于 warming 状态](https://github.com/agentscope-ai/QwenPaw/issues/6249)
- 作者：MojinXkl | 评论：2
- **诉求**：源码 `uv pip install -e .` 安装后启动 TUI 卡在 warming，日志无明显错误。

### 👍 [#6260 [Feature] 在结果呈现上需要提升](https://github.com/agentscope-ai/QwenPaw/issues/6260)
- 作者：azear | 评论：1 | **👍：1**（今日唯一点赞 Issue）
- **诉求**：思考与工具调用占满屏幕、结果被淹没，建议**折叠中间过程、突出最终交付结果**。

**诉求分析**：今日社区关注点集中在"**性能（启动慢）+ 可观测性（多工具思维混乱）+ UX（结果被淹没）**"三条主线，反映 CoPaw 在向"重度/生产级"用户渗透时面临的典型痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🟠 **中-高** | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | 多工具调用共享同一段 thinking，影响多步推理可观测性 | ❌ 暂无 |
| 🟠 **中** | [#6261](https://github.com/agentscope-ai/QwenPaw/issues/6261) | 离线环境 code 模式无法预览文件（依赖在线资源） | ❌ 暂无；曾有 [#5781](https://github.com/agentscope-ai/QwenPaw/issues/5781) 修复但**未彻底解决**（v2.0.0.post3 仍存在） |
| 🟠 **中** | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI 模型最大输出 token 不生效（v2.0.0.post3 + agentscope 2.0.4.post1） | ❌ 暂无 |
| 🟠 **中** | [#6255](https://github.com/agentscope-ai/QwenPaw/issues/6255) | 对话中途 `openai.BadRequestError: 400 invalid_parameter_error`（v2.0.0.post3） | ❌ 暂无 |
| 🟡 **低-中** | [#6252](https://github.com/agentscope-ai/QwenPaw/issues/6252) | Linux Desktop (Tauri) 模式下 Ctrl +/- 与 Ctrl+滚轮缩放无效 | ❌ 暂无 |
| 🟡 **低** | [#6249](https://github.com/agentscope-ai/QwenPaw/issues/6249) | TUI 启动卡 warming（无错误日志） | ❌ 暂无（标记为 question，待复现） |

**稳定性观察**：
- 今日所有 Bug 均**无对应 fix PR**，维护者压力较大；
- OpenAI 兼容性 Bug（#6255、#6258）在同一版本集中暴露，建议作为 2.0.1 优先修复项；
- 离线场景 #6261 是**历史回归**（#5781 已修复过），需排查修复完整度。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有 PR？ | 进入下一版本可能性评估 |
|---|---|---|---|
| MCP 驱动并行初始化 | [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | ❌ | ⭐⭐⭐⭐⭐ 改动局部、收益显著，极可能进入 2.0.1 |
| 可复用工作流编排 + 审计 | [#6163](https://github.com/agentscope-ai/QwenPaw/issues/6163) | ❌ | ⭐⭐⭐ 涉及架构，短期难落地，可纳入 2.x 路线图 |
| 最小化到系统托盘 | [#6264](https://github.com/agentscope-ai/QwenPaw/issues/6264) | ❌ | ⭐⭐⭐ 桌面端体验增强，匹配 desktop (Tauri) 战略 |
| Per-agent 自动记忆画像 | [#6263](https://github.com/agentscope-ai/QwenPaw/issues/6263) | ❌ | ⭐⭐⭐ 与 ReMe 体系契合，技术改动可控 |
| 结果呈现折叠 | [#6260](https://github.com/agentscope-ai/QwenPaw/issues/6260) | ❌ | ⭐⭐⭐⭐ UX 改进，UI 层即可实现，强烈建议 2.0.1 |

**已进入 PR 通道的功能**：
- 一键复制 Agent 配置（[#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262)）
- Scroll 历史召回日期感知（[#6237](https://github.com/agentscope-ai/QwenPaw/pull/6237)）
- CIDR 白名单（[#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259)）
- 沙箱 fallback 可配置（[#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256)）

---

## 7. 用户反馈摘要

### 真实痛点
1. **启动太慢**（#6193）：8 个 MCP 客户端需 40 秒——重度用户对延迟容忍度低，性能已影响可用性。
2. **离线/内网体验缺失**（#6261）：code 模式预览仍依赖在线资源，纯内网用户场景未真正闭环。
3. **OpenAI 兼容性缺陷**（#6255、#6258）：v2.0.0.post3 与 agentscope 2.0.4.post1 组合下出现参数错误与 token 限制不生效，使用 OpenAI 兼容协议的用户体验受影响。
4. **多工具调用缺乏独立推理**（#6257）：用户感觉 Agent"在重复一句话"，对工具协作可解释性产生怀疑。
5. **结果呈现淹没**（#6260）：用户更关心 Agent 交付的最终结果，而非中间过程；当前 UI 让"卖力干活"的痕迹盖过结果本身。
6. **Linux 桌面端缩放失效**（#6252）：Tauri 跨平台一致性不足。

### 满意/正面信号
- 首次贡献者 PR（[#6259](https://github.com/agentscope-ai/QwenPaw/pull/6259)、[#6256](https://github.com/agentscope-ai/QwenPaw/pull/6256)）持续出现，社区吸纳新人的机制运转良好。

---

## 8. 待处理积压提醒

下列 Issue/PR **创建时间已超过 2 周**，建议维护者优先关注：

| 类型 | 编号 | 标题 | 创建日期 |
|---|---|---|---|
| PR | [#5796](https://github.com/agentscope-ai/QwenPaw/pull/5796) | refactor(acp): decouple slash commands… | **2026-07-06（已 14 天）** |

PR #5796 是 ACP 模块的重大重构，标记 `[Under Review]` 已两周，建议加速指派 reviewer；否则容易与新功能 PR 产生合并冲突。

---

## 📊 项目健康度速评

| 维度 | 评分 | 评语 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | Issues + PRs 持续流入，社区参与度健康 |
| 响应速度 | ⭐⭐ | **当日 11 个 Issue 0 关闭、7 个 PR 0 合并**，积压趋势显现 |
| 代码质量 | ⭐⭐⭐⭐ | 多个 first-time contributor 与重构 PR，体现工程治理能力 |
| 稳定性 | ⭐⭐⭐ | OpenAI 兼容性 Bug 集中暴露，需优先修复 |
| 路线图清晰度 | ⭐⭐⭐⭐ | 2.0.1b1 版本号 bump 已提交，节奏可控 |

**核心建议**：建议维护者本周聚焦（1）合并 #6195 / #6237 / #6266 推动 2.0.1b1 发布；（2）针对 OpenAI 兼容性 Bug（#6255、#6258）给出修复承诺；（3）关注首次贡献者 PR（#6259、#6256）的评审反馈，保持社区活力。

---

*报告生成时间：2026-07-20 | 数据来源：GitHub REST API*
*备注：数据中所有链接路径显示为 `agentscope-ai/QwenPaw`，与本报告对象 `CoPaw` 同源，属同一组织下相关项目。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-20

## 1. 今日速览

ZeroClaw 今日继续保持高活跃度的开发态势，**过去 24 小时共有 33 条 Issue 与 50 条 PR 更新**（其中 30 条新开/活跃 Issue、48 条待合并 PR），是典型的"治理 + 核心修复"双线推进日。讨论热度集中在**持久记忆（Memory）架构重构**、**OpenTelemetry 可观测性**、**KeySource 凭证抽象**以及 **ZeroCode / 多 Agent 边界**四大主题，RFC 与 Tracker 占比明显偏高，说明项目正处在 0.8.x 收尾与 0.9.0 规划的关键窗口期。当日**无新版本发布**，仅 2 个小型硬件层 PR（#8499、#8514）被合并，3 条 Issue 关闭，但**没有任何大型功能 PR 落地**，仓库仍处于"代码在合、版本未发"的中间状态。

## 2. 版本发布

⚠️ **今日无新版本发布。**

当前最新里程碑为 v0.8.3 的多个功能冻结 Trackers（#8357 v0.8.4 maintenance train 目标 2026-07-31），以及 v0.9.0 的认证 / 安全 / Gateway 破坏性变更队列（#7432）。

## 3. 项目进展

### 已合并/关闭 PR（2 个）
| PR | 类型 | 摘要 |
|---|---|---|
| [#8499](https://github.com/zeroclaw-labs/zeroclaw/pull/8499) | bug fix (XS) | 修复 `serial.rs` 与 `uno_q_bridge.rs` 中 `tokio::time::timeout` 丢弃内部 `Elapsed` 错误的问题 |
| [#8514](https://github.com/zeroclaw-labs/zeroclaw/pull/8514) | bug fix (XS) | 将 `AardvarkError::LibraryNotFound` 改造为携带底层 `libloading` 错误文本，保留 dlopen 失败根因 |

> 评价：均为硬件桥接层的小型可观测性改进（Size: XS），并不直接推动功能向前，但增强了错误诊断能力。

### 已关闭 Issue（3 个）
| Issue | 主题 |
|---|---|
| [#8363](https://github.com/zeroclaw-labs/zeroclaw/issues/8363) | **v0.8.3 config-driven runtime policy 跟踪器关闭** —— 标志着 v0.8.3 配置驱动策略工作基本收尾 |
| [#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) | **ACP agent 选择 ?agent= 查询参数** —— 已通过 Thunderbird Thunderbolt 客户端验证，关闭转 PR |
| [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) | `--config-dir` 在 CLI 语言检测阶段被忽略 bug，已修复关闭 |

### 整体推进度
- **v0.8.3** 路线图（#8363）正式关闭，团队重心已完全转入 v0.8.4 维护列车（#8357，7 月 31 日目标）。
- **多 Agent V3 边界**（#6398）通过 ADR-011（#9167）正式追溯记录为接受决策，治理文档化进度加快。

## 4. 社区热点

### 讨论最活跃的 Issue（按评论数）

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 14 | **RFC: Work Lanes, Board Automation, and Label Cleanup** —— 治理 RFC，已 Rev.18，进入 0.8.0-beta-1 → 0.8.3 滚动部署阶段 |
| 2 | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | 8 | **Turn-level OTel trace 关联**：在单次 turn trace 下嵌套 `llm.call / tool.call / memory.*` spans，跟进 #6009 / #6190 |
| 3 | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | 7 | **持久记忆 Tracker**：协调多 PR 推进 ZeroClaw 跨会话记忆子系统对标成熟 Agent runtime |
| 3 | [#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) | 7 | **KeySource trait 抽象**：将主密钥按来源/部署形态分类，已被 `#[secret]` 标注的 93 个字段、`#[credential_class]` 分类的 59 个字段受其影响 |
| 5 | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | 6 | **Telegram 频道无法配置**：S1 严重级别，bot 完全不响应 |
| 5 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | 6 | **RFC: 分离会话历史与 Agent 长记忆** |
| 5 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) | 6 | **RFC: 引入 `MemoryStrategy` trait 解耦记忆生命周期与存储后端** |

### 诉求分析
- **可观测性需求强烈**（OTel）：[#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 反映出社区/企业用户对生产级 trace 的迫切需求；
- **记忆架构重构**是当前最大工程议题：[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)、[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)、[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) 形成三联 RFC；
- **凭证/密钥治理**正在规范化：[#9127](https://github.com/zeroclaw-labs/zeroclaw/issues/9127) 的 `KeySource` trait 是 v0.9.0 安全路线图核心。

## 5. Bug 与稳定性

### 高严重度 Bug（按优先级）

| 严重度 | Issue / PR | 描述 | 是否有 Fix |
|---|---|---|---|
| **S0** 数据丢失/安全风险 | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) **[P1]** | `execute_pipeline` 仅凭全局 `[pipeline].allowed_tools` 授权子工具步骤，绕过调用 agent 的 `ToolAccessPolicy`（confused deputy 漏洞） | ❌ 暂无 PR |
| **S1** 工作流阻塞 | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) **[P1]** | Telegram 频道即便通过 quickstart/zerocode 配置后，`channels doctor` 仍报告未配置，bot 不响应 | ❌ 暂无 PR |
| **S2** 行为降级 | [#9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177) | JIT 加载 Qwen3.6-35B-A3B 失败 "Engine protocol startup was aborted"，手动加载正常 | ❌ 暂无 PR |
| **S2** 行为降级 | [#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) **[P2]** | CLI 在粘贴密钥后无任何反馈提示，用户无法确认输入是否成功 | ❌ 暂无 PR |
| **S3** 小问题 | [#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) **[P1]** | ZeroCode 在 Windows 下未设置 `ZEROCLAW_SOCKET` 环境变量时无法启动（10s 超时后报 daemon 未就绪） | ❌ 暂无 PR |

### 已修复但尚未合并的稳定性 PR
- [#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105) **memory Lucid ARM 冷启动超时** —— 将 Lucid recall timeout 从 500ms 提升至 3s、store timeout 从 800ms 提升至 3s，解决 AArch64 健康冷启动约 1.4–1.6s 被旧默认杀掉的回归
- [#8935](https://github.com/zeroclaw-labs/zeroclaw/pull/8935) **Gemini 多轮工具签名丢失** —— 保留 `ToolCall.extra_content`，修复 Gemini 在多轮工具调用后拒绝后续请求的 bug
- [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) **[P1]** **provider 出站 tool-call 参数清洗** —— 防止 OpenRouter 上游（Cohere / OpenInference / Nvidia）小模型返回畸形 arguments 触发整次 400
- [#8324](https://github.com/zeroclaw-labs/zeroclaw/pull/8324) **whitespace-only model_provider 调度异常** —— 修复 `.is_empty()` 与 `.trim().is_empty()` 不一致导致的调度错乱

## 6. 功能请求与路线图信号

### 可能进入 v0.8.4（7 月 31 日）的功能

| Issue | 主题 | 已有 PR 支撑 |
|---|---|---|
| [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) | 后端无关的 Realtime 语音宿主频道（CrispASR 参考、Wyoming 对齐） | ❌ 暂无 PR |
| [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) | llama.cpp 模型路由器（quickstart） | ❌ 暂无 PR |
| [#7881](https://github.com/zeroclaw-labs/zeroclaw/issues/7881) | Provider fallback 熔断器 | ❌ 暂无 PR |
| [#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) | 同 provider 家族内 fallback 提示 | ❌ 暂无 PR |
| [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) | CI 测试矩阵扩展到 Windows / macOS | ❌ 暂无 PR |
| [#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158) | Signal 频道处理 "Note to Self" | ❌ 暂无 PR |

### 可能进入 v0.9.0（破坏性变更版本）的功能
- [#7897](https://github.com/zeroclaw-labs/zeroclaw/issues/7897) 热重载安全策略与频道配置（对应 ADR-012 提案 [#9168](https://github.com/zeroclaw-labs/zeroclaw/pull/9168)）
- [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) 可选频道/工具从编译期特性切换为运行时 WASM 插件（架构性变更）
- [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.9.0 auth / security / gateway 队列 Tracker

### Gateway 扩展（重点 PR）
- [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) **[XL, High risk]** 新增 OpenAI Chat Completions 端点，使 LangChain / OpenAI SDK / Continue.dev / Aider 等可直接对接

### ZeroCode / Operator UX 路线图
- [#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) 将剩余 web dashboard 操作面带入 zerocode TUI
- [#9010](https://github.com/zeroclaw-labs/zeroclaw/issues/9010) ZeroCode Consolidation & Hardening Tracker
- [#9009](https://github.com/zeroclaw-labs/zeroclaw/issues/9009) Operator UX Onboarding、Pairing、Self-Service Tracker

### ACP 协议演进（外部生态对接）
- [#9178](https://github.com/zeroclaw-labs/zeroclaw/issues/9178) ACP 嵌入式 resource blob + deliver_file（cite 友好 URI）
- [#9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179) MCP 嵌入式 resource blob 摄取
- 上述两者意在让 ZeroClaw 与 Thunderbolt（Thunderbird ACP 客户端）生态打通

## 7. 用户反馈摘要

从 Issue 摘要与描述中可提炼以下真实痛点：

### 痛点
1. **CLI 粘性差**：[#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808) 用户在粘贴 API key 后无视觉反馈，常误以为输入失败而重复操作 —— 反映出**密钥输入 UX 已落后于现代 CLI 习惯**。
2. **Windows 平台支持薄弱**：[#9117](https://github.com/zeroclaw-labs/zeroclaw/issues/9117) ZeroCode 必须手动设置 `ZEROCLAW_SOCKET` 才能启动；[#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) 整个测试套件只在 Linux CI 上运行 —— 用户对**Windows 一等公民体验**的诉求强烈。
3. **Telegram 集成事实上不可用**：[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) 用户按 quickstart 和 zerocode 配置后，`channels doctor` 仍报告未配置，CLI 内 agent 正常回复但 Telegram bot 不响应 —— 这是**首屏用户最容易遇到的硬阻塞**，对项目口碑影响较大。
4. **JIT 模型加载特定模型崩溃**：[#9177](https://github.com/zeroclaw-labs/zeroclaw/issues/9177) Qwen3.6-35B-A3B 出现 "Engine protocol startup was aborted"，手动加载正常 —— 暗示 **JIT 与引擎握手协议存在兼容性盲点**。
5. **本地小模型用户体验**：[#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539) 用户希望为 llama.cpp 增加模型路由器以快速切换模型，反映**本地推理场景**已是重要使用面。
6. **配置错误诊断不友好**：[#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) 已修复关闭；CLI 在 clap 解析前读 locale 会忽略 `--config-dir`，这类**早期阶段参数优先级 bug**影响自定义部署用户。

### 满意面（隐含信号）
- [#8958](https://github.com/zeroclaw-labs/zeroclaw/issues/8958) 作者已成功用 Thunderbolt 客户端通过 `ws://.../acp` 连接自托管 ZeroClaw 网关，**外部 ACP 客户端集成验证成功**，说明协议层稳定性良好。
- [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 用户在评论中明确感谢维护者对 #6009 / #6190 PR 的快速响应，社区维护响应度较佳。

## 8. 待处理积压（提醒维护者关注）

> 以下 Issue/PR 创建时间较早或 P1/S0 风险但尚无明确推进，需维护者优先处理。

| Issue / PR | 创建日期 | 状态 | 关注理由 |
|---|---|---|---|
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | 2026-06-18 | OPEN, **S0** | `execute_pipeline` confused deputy 安全漏洞，2026-07-19 仍仅

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*