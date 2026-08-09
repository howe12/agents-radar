# OpenClaw 生态日报 2026-08-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-09 01:12 UTC

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

**日期**: 2026-08-09  
**数据周期**: 过去 24 小时  
**项目仓库**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时内呈现**高强度维护状态**:Issues 更新 500 条(活跃 449、关闭 51),PR 更新 500 条(待合并 317、合并/关闭 183),并连续发布两个补丁版本(v2026.6.33、v2026.6.34),节奏紧凑。从代码侧看,维护者 steipete 单日提交了 7 个 XL 级 PR,集中在 Cloud Worker、Gateway、UI 交互层重构,显示项目正在加速推进平台化能力;从用户侧看,**Gateway 内存泄漏(#91588)、2026.7.1 启动失败回归(#108435 / #112395)、Subagent 结果丢失(#44925)** 等 P0/P1 问题持续累积,反映 7.x 升级路径仍存在稳定性风险。整体健康度评估:**活跃但承压** —— 提交量与社区参与度维持高位,但"消息丢失 / 会话状态损坏 / 进程崩溃"类严重缺陷在 7.x 系列呈聚集态势,需维护者集中处理。

---

## 2. 版本发布

### 📦 v2026.6.34(今日发布)
链接: openclaw/openclaw Release v2026.6.34

**主题**:**Safer browser and network boundaries**(浏览器与网络边界加固)

- 沙盒化浏览器路由(sandboxed browser routes)拒绝不安全访问路径
- 受信任 DNS 目标(trusted DNS targets)校验
- 自定义浏览器来源(custom browser origins)限制
- Loopback provider endpoints 拒绝未授权访问

涉及 PR: #97958, #38290, #103075, #110693

致谢: @eleqtrizit, @brunowowk, @mosidevv, @pgondhi987

**破坏性变更**:本次变更以"拒绝不安全路径"为核心,部分原本可用的非标准访问方式将被拦截。  
**迁移建议**:使用自定义 origin / loopback provider 的运维人员需在升级前核对配置是否命中安全策略;若出现访问被拒,需按官方文档重新声明可信源。

---

### 📦 v2026.6.33(今日发布)
链接: openclaw/openclaw Release v2026.6.33

**主题**:**Safer network and secret boundaries**(网络与密钥边界加固)

- Provider 流式响应、Discord REST 响应、浏览器 fetch、OAuth 路径、日志均设置响应大小上限,抵御恶意大体积响应
- Telegram 凭据不再出现在诊断日志中,降低密钥泄漏面

涉及 PR: #96989, #95412, #99428

致谢: @wangmiao0668000666, @Alix-007 等

**迁移建议**:依赖 Telegram 凭据出现在日志中做调试的脚本需要改用专门的诊断命令;若客户端依赖大体积流式响应,需确认未触发新上限。

> 两个版本合并主题高度一致 —— 都聚焦在**"对抗性输入/输出边界"**,说明项目目前正把安全加固作为 6.x 末期与 7.x 衔接期的重点。

---

## 3. 项目进展

虽然 24 小时内合并的 PR 数量较高(183 条),但以下 PR 在功能深度、跨模块影响或战略意义上尤其值得关注:

### 已合并/关闭的重要 PR

- **[#120343] fix(agents): apply per-agent contextTokens cap to embedded run context budget** — 修复"embedded run 忽略 agent 级别 contextTokens 上限,回落到 defaults"的长期偏差,使 prompt 预检、压缩、会话元数据与运维配置保持一致。已关闭。
- **[#120239] fix(googlechat): reject invalid UTF-8 in API JSON responses** — Google Chat API 响应中无效 UTF-8 字节此前被替换字符静默吞掉,导致 `name` 标识符被后续 API 调用误用(可能被用于身份混淆)。关闭安全边界漏洞。
- **[#120797] fix(discord): deduplicate directory peers across guilds** — Discord 用户 ID 全局唯一,但 peer directory 按 guild 重复追加,导致结果限额被吃满、真实用户被隐藏。同一个用户可能成为"模糊目标"。
- **[#120798] fix(test): gate long-context live shard by opt-in** — 修复 release gateway-profiles shard 因环境变量未开启而误选昂贵 live 测试导致 CI 失败的问题。
- **[#120700] ci: extend watchdog for cold migration proofs** — 冷启动 GitHub runner 上 SQLite 会话迁移 / Doctor 插件索引迁移的 300 秒 watchdog 超时问题修复。
- **[#119520] fix(cron): remove deleted job sessions** — 删除 cron 作业后,`agent:<agent>:cron:<jobId>` 基础会话仍在管理界面残留,现已随定义删除一并清理。关闭 #46369。
- **[#119511] fix(sessions): archive cron-run transcripts pruned by tasks maintenance** — `openclaw tasks maintenance --apply` 此前会硬删除 SQLite 行而不写 `.deleted` 归档,导致自动化执行记录不可追溯。
- **[#120717] fix(cloud-workers): preserve accepted workspace after SSH loss** — Cloud Worker 在远程 apply 期间 SSH 断开时,Gateway 立刻启动 rollback 但原 apply 仍可能成功,导致已接受 workspace 状态不可知。已修复。
- **[#120715] fix(cloud-workers): preserve cleanup across fallback disconnects** — SSH failover 后 Cloud Worker 清理逻辑与生命周期状态可能错位的修复。
- **[#120227] fix: scope embedded-run session ownership by derived agent** — 插件调用 `runEmbeddedAgent()` 时若仅以 session key 识别,会报 `Cannot resolve SQLite session scope without an agent id`,现已按派生 agent 限定作用域。关闭 #120178。
- **[#119879] fix(cron): reject blank --agent/--session-key on cron edit** — cron edit 不再接受空白 agent/session-key,关闭 #119878。
- **[#119777] fix(health): report resolved SQLite session store path** — `openclaw health` 不再报告环境展开前的占位路径,运维排障更准确。关闭 #119755。

### 待合并但已通过 maintainer look 的高价值 PR

- **[#120723] fix(ios): keyboard unavailable after tapping chat composer** — iOS 用户点击聊天框后立即丢失焦点、键盘不弹起的体验修复,带截图证据。
- **[#120716] refactor: one code path behind doctor legacy-state migrations** — Doctor 此前对同一任务维护了两套并行机制,本次统一为单一代码路径,涉及几乎所有 channel 插件与多个 extension。
- **[#119249] fix(ui): key ClawHub skill verdicts by canonical slug** — Control UI Skills 页对已链接的 ClawHub 技能错误显示 "Unavailable" 安全徽章的回归修复。
- **[#120790] fix(ui): rank slash command results by relevance** — 斜杠命令选择器排序与默认选中逻辑的修复,避免弱描述匹配覆盖精确命令名。
- **[#120332] fix(config): config validate rejects a replacement plugin's own channel config keys** — 替换插件声明 `preferOver` 时,`config validate` 错误拒绝插件自身 key 的修复。关闭 #92884。

> **整体判断**:本日项目在**会话生命周期修复**(cron / cloud worker / embedded run)、**安全边界强化**(UTF-8 校验、Discord 去重、Codex redaction 对齐)、**UX 修补**(iOS 键盘、UI 排序、health 报告)三条线并行推进,**向前迈进显著**。Cloud Worker 体系经过 steipete 一系列 PR 已接近"清理/回滚/SSH 丢失"全链路收敛。

---

## 4. 社区热点

按评论数排序的 Issues 显示出社区当前关注的核心痛点:

### 🥇 #116277 [CLOSED] — DeepSeek v4 Flash silent reply failure(179 条评论)
链接: Issue #116277  
**社区诉求**:DeepSeek v4 Flash 模型对 Telegram 群消息静默失败,只产出"No reply was generated for this message"通用兜底,**179 条评论**说明多用户稳定复现。已关闭,表明已找到 root cause 或合并了修复 PR。

### 🥈 #7707 — Feature Request: Memory Trust Tagging by Source(31 条评论)
链接: Issue #7707  
**社区诉求**:为 agent 记忆条目按来源(用户指令、网页抓取、第三方技能)打信任等级标签,防止**记忆投毒攻击**。讨论跨越 6 个月,持续有维护者关注但尚未有 PR 关联。

### 🥉 #44925 — Subagent completion silently lost — no retry, no notification(24 条评论)
链接: Issue #44925  
**社区诉求**:在 Telegram forum 模式下,Subagent 任务编排存在 E31/E42/E45 等多种失败模式,结果静默丢失且无重试 / 无通知 / 无自动重启。属于消息丢失类高危缺陷。

### 4️⃣ #91588 — Critical: Gateway Memory Leak — RSS 350MB → 15.5GB(22 条评论,P0)
链接: Issue #91588  
**社区诉求**:Gateway 进程在 2-3 天正常使用后 RSS 从 350MB 增长到 15.5GB,被 OOM Killer 杀掉后触发 `launchd-handoff` 反复重启。**P0 严重度,平台级稳定性问题**。

### 5️⃣ #80319 — QA tool-defaults suite conflates Codex-native tools(17 条评论)
链接: Issue #80319  
**社区诉求**:用户自纠了原先"Codex 默认工具大量掉线"的过度声明,确认是 QA harness / mock-provider 自身问题,而非 Codex runtime。但正确架构与现行工具对等状态需要明确。

### 6️⃣ #96834 — WhatsApp 1:1 inbound image wedges main lane ~3min(14 条评论)
链接: Issue #96834  
**社区诉求**:WhatsApp 1:1 通道下发送图片会把主消息队列阻塞约 3 分钟,期间产生 `active_reply_work` / `queued_work_without_active_run` 的悬挂状态。可在 2026.6.10 上稳定复现(post-#95039)。

### 7️⃣(并列) #108435 — 升级到 2026.7.1:gateway fails to start(13 条评论,P0)
链接: Issue #108435  
**社区诉求**:升级到 2026.7.1 后 systemd、ollama、手动启动三种方式均失败,3 个 👍 反应表明多人命中。属于 7.x 升级阻塞。

### 7️⃣(并列) #74586 — AM embedded run aborts memory_search tool calls(13 条评论)
链接: Issue #74586  
**社区诉求**:active-memory 插件下,embedded run 把 memory_search 工具调用错误归类为 timeout,即便模型已完成响应。

### 7️⃣(并列) #38327 — "Cannot convert undefined or null to object" with Vertex Gemini 3.1 Pro(13 条评论)
链接: Issue #38327  
**社区诉求**:2026.3.2 升级后,`google-vertex/gemini-3.1-pro-preview` 任何消息都报此错,3 个 👍 说明用户面较广。

### 🔟 #116022 [CLOSED] — beta.5 /new reuses stable session ID(12 条评论)
链接: Issue #116022  
已关闭。`2026.7.2-beta.5 (ee929db)` 中 `/new` 不能恢复 Codex binding 的 retired tombstone,导致主会话永久不可用。

---

## 5. Bug 与稳定性

按严重程度排序今日仍在 **OPEN** 状态的缺陷:

### 🔴 P0 — 平台崩溃 / 不可启动

| Issue | 标题 | 修复 PR | 状态 |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway Memory Leak: RSS 350MB → 15.5GB,反复 OOM | ❌ 无 | 待修复 |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 升级到 2026.7.1 gateway fails to start | ❌ 无 | 升级阻塞 |
| [#112395](https://github.com/openclaw/openclaw/issues/112395) | 6.11 → 7.1 startup migration preflight blocks gateway | ❌ 无 | 升级阻塞 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | Loop detection blocks exec but does not terminate stuck agent run | ❌ 无 | 资源燃烧 |

### 🟠 P1 — 会话 / 消息丢失 / 鉴权

| Issue | 标题 | 修复 PR | 状态 |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion silently lost | ❌ 无 | 高危 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 inbound image wedges main lane ~3min | ❌ 无 | 高复现 |
| [#74586](https://github.com/openclaw/openclaw/issues/74586) | AM embedded run aborts memory_search as timeout | ❌ 无 | 插件层 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | "Cannot convert undefined or null to object" Vertex Gemini | ❌ 无 | 模型兼容性 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth refresh failures wedge agent for hours | ❌ 无 | 鉴权层 |
| [#84583](https://github.com/openclaw/openclaw/issues/84583) | cron announce triggers EmbeddedAttemptSessionTakeoverError | ❌ 无 | cron 边界 |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server startup retries can exhaust before replacement ready | ❌ 无 | 启动链 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex app-server client closes mid-turn with large logs_2.sqlite | ❌ 无 | 启动链 |
| [#94536](https://github.com/openclaw/openclaw/issues/94536) | PR #92231 fix incomplete — commitment 'sent' but never delivered | ❌ 无 | 二次失败 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 558MB → 1073MB+ at idle on macOS, cron silently fails | ❌ 无 | macOS |
| [#92076](https://github.com/openclaw/openclaw/issues/92076) | Subagent completion delivery fails when requester run is inactive | ❌ 无 | Feishu |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport no auto-reconnect after gateway restart | ❌ 无 | MCP |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | Foreground reply fence cancels delivery of earlier concurrent replies | ❌ 无 | WhatsApp group |
| [#103231](https://github.com/openclaw/openclaw/issues/103231) | claude-cli backend `ownsNativeCompaction: true` is false — sessions grow 200%+ | ❌ 无 | 后端契约 |
| [#45224](https://

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**数据周期**：2026-08-09（过去 24 小时）  
**覆盖项目**：10 个活跃项目（NullClaw / TinyClaw / ZeptoClaw 因 24 小时无活动未纳入横向分析）  
**核心参照**：OpenClaw

---

## 1. 生态全景

2026 年 8 月，个人 AI 助手与自主智能体开源生态呈现 **"高活跃、强分层、风险敞口扩大"** 三重特征：以 OpenClaw、ZeroClaw、IronClaw、CoPaw/QwenPaw 为代表的旗舰项目日均 PR/Issue 处理量均在 50 条量级，进入"周级版本发布 + 日级热修复"节奏；但与此同时，**安全配置语义失效**（ZeroClaw #9815/#9390/#9387）、**会话/上下文丢失**（OpenClaw #44925/#91588、CoPaw #6820）与 **Desktop 客户端软死锁**（Hermes #63047/#75778）三类系统性缺陷在多项目同步暴露，说明生态正从"功能扩张期"切入"质量收敛期"。MCP（Model Context Protocol）成为事实标准（远程化、OAuth 化），Token 经济性可观测性从加分项变为基线要求。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 代码净推进 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（449 活跃 / 51 关闭） | 500（317 待合 / 183 合入关闭） | **2 个**（v2026.6.33, v2026.6.34） | 🟢 高 | 活跃但承压，P0 缺陷累积 |
| **ZeroClaw** | 50 | 50 | 无 | 🟡 中 | 高活跃，安全债突出 |
| **IronClaw** | 24（关闭率 80%） | 32（合并率 64%） | 无 | 🟢 高（集中清理） | Reborn 架构收敛期 |
| **CoPaw / QwenPaw** | 19 | 50（3 合入，47 待审） | 无 | 🟡 中 | v2.1.0-beta.2 磨合期 |
| **Hermes Agent** | 50（38 活跃 / 12 关闭） | 50（42 待合 / 8 合入） | 无 | 🟡 中 | Desktop 稳定性敞口大 |
| **NanoBot** | 5 | 9（4 合入，含 3 条同日合并） | 无 | 🟢 高（按需响应） | 4.0/5，稳健螺旋上升 |
| **NanoClaw** | 8 | 6（3 关闭，2 项重磅） | 无 | 🟢 高（功能扩张） | 健康，但跨平台一致性存疑 |
| **PicoClaw** | 3 | 4（**0 合入**） | 无 | 🔴 零 | 维护者响应停滞 |
| **Moltis** | 2（1 新开 / 1 关闭） | 1（关闭） | 无 | 🟡 闭环为主 | 沙箱兼容性修补 |
| **LobsterAI** | 1 | 3（1 关闭未合入） | 无 | 🔴 极低 | 低速维护期，积压 130 天+ |

**关键观察**：
- 仅 OpenClaw 当日完成 2 个正式版本发布，体现"平台化"节奏；
- PicoClaw 与 LobsterAI 在过去 24 小时内 **代码净推进量为 0** 且分别存在 P0 / P1 缺陷无修复；
- IronClaw 关闭率最高（80%/64%），与 Reborn 架构收敛节奏吻合。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw 表现 | 同类项目对照 |
|---|---|---|
| **社区规模** | 24h Issue 处理 500 条，规模约为第二梯队（ZeroClaw/Hermes）的 10× | 远超 NanoBot / PicoClaw / NanoClaw |
| **维护节奏** | 单日双版本（v2026.6.33 + v2026.6.34），发布频率最快 | 仅 OpenClaw 当日发布，CoPaw 卡在 beta.2，IronClaw 处于架构迁移期 |
| **战略主线** | "对抗性输入/输出边界"安全加固 + 平台化能力（Cloud Worker / Gateway / UI） | IronClaw 侧重架构迁移，ZeroClaw 侧重策略可观测，NanoBot 侧重 UX |
| **技术差异点** | 7.x 升级路径稳定性风险（#91588 P0 内存泄漏、#108435/#112395 启动失败回归） + Subagent 编排 | Hermes 主攻 Desktop 客户端；CoPaw 主打国产模型覆盖；NanoClaw 主攻 MCP 生态 |
| **生态价值** | 是其他项目的"事实参照"——IronClaw 主动提供 Hermes/Openclaw → IronClaw 迁移工具（#6939） | 说明 OpenClaw 已建立事实标准 |

**定位判断**：OpenClaw 处于"**平台型旗舰 + 风险信号源**"的双重角色——其版本号、Issue 模式被其他项目当作行业风向标；但 7.x 系列 P0/P1 缺陷聚集（Gateway OOM、Subagent 消息丢失、启动回归）使其成为生态最大的"系统性风险敞口"。

---

## 4. 共同关注的技术方向

下表汇总多项目共同涌现的诉求（出现 ≥2 个项目的方向）：

| 技术方向 | 涉及项目 | 代表性 Issue / PR | 核心诉求 |
|---|---|---|---|
| **Token 消耗可观测性** | NanoBot（#5266 → #5293 已合）、OpenClaw（#120343 contextTokens cap）、ZeroClaw（#9816 cost_usd=0）、IronClaw（#6989 token 估算口径错） | 4 | 用户对 Agent 隐藏行为的成本不可控感到焦虑，需每次调用的 input/output/cached token 可见 |
| **MCP 协议标准化** | NanoBot（#5297 OAuth）、NanoClaw（#2776 远程 HTTP/SSE 已合）、PicoClaw（#3302 OAuth 2.1）、ZeroClaw（#9179 tools/call 内嵌资源） | 4 | MCP 从 stdio 单机走向"远程 + OAuth + 资源 blob"，本地客户端缺乏回调承载能力 |
| **容器 / 沙箱多后端兼容** | Moltis（#1096 Docker 已闭环 / #1185 Apple Container 新增）、ZeroClaw（#9035 Docker Compose 绑 loopback、#9202 AppImage 误判）、NanoClaw（#3177 SQLite 在 VirtioFS 锁竞争） | 3 | 需统一的"沙箱状态探测 + 文件操作路由"抽象层 |
| **记忆 / 上下文安全** | OpenClaw（#7707 Memory Trust Tagging）、ZeroClaw（#8424 forbidden paths + .zeroclawignore、#9825 公链地址误脱敏、#9387 任意成员审批） | 3 | "文档承诺 = 配置文件写法 ≠ 实际生效"的信任落差 |
| **Provider 多源化与 fallback** | OpenClaw（DeepSeek/Vertex 多 issue）、CoPaw（#6490 火山引擎 / 小米 MiMo、#6812 Gemini `$schema` 拒绝）、ZeroClaw（Anthropic #9265–#9272 回退栈）、Hermes（#78807 DeepSeek 死循环） | 4 | 模型层从"单一默认"走向"多源 + 自动 fallback + 冷却机制" |
| **会话压缩与人类可读历史** | OpenClaw（#119511 cron transcript 归档）、Hermes（#70846 压缩清空人类可见历史、#73624 reasoning 预算浪费）、CoPaw（#6820 不实时显示） | 3 | agent-side 与 human-side 语义边界：压缩不应剥夺回溯能力 |
| **多通道接入** | OpenClaw（Discord/WhatsApp/Telegram/Feishu）、NanoClaw（Mattermost #3199 已合并、Signal #2528 83 天未解）、PicoClaw（IRC 长消息 #3287、Simplex #3193）、ZeroClaw（Telegram 媒体组批处理 #5514） | 4 | 跨渠道一致性 / 协议层透明化 / 附件可达性是共性痛点 |
| **Desktop 客户端稳定性** | Hermes（#63047 macOS 冻结、#75778/#62171 更新破坏）、CoPaw（#6814 macOS SQLite WAL 崩溃、#6831 ffmpeg 找不到） | 2 | "无错误、无退出"的软死锁是 AI Agent 客户端最难调试的故障类型 |
| **Per-agent 上下文预算** | OpenClaw（#120343）、NanoBot（#5298 MCP schema 预算）、Hermes（#73624 reasoning 占用 19-24%） | 3 | tool schema 占用膨胀 + 多 agent 公平分配 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能平台：Cloud Worker / Gateway / 多通道 / 7.x 迁移 | 企业级 + 重度个人用户 | SQLite + Cloud Worker + 多入口会话作用域 |
| **NanoBot** | 轻量级 Agent + WebUI + Token 透明 | 个人开发者、研究者 | HKUDS 学术系，模块化、单一职责 |
| **Hermes Agent** | Desktop 优先 + ACP 协议 + Compaction | macOS/Windows/Linux Desktop 用户 | Tauri/Codux 客户端 + ACP prompt 流 |
| **PicoClaw** | 多通道网关 + 前缀缓存性能 | 性能敏感型用户 | Go + whatsmeow，关注 token 重复计算成本 |
| **NanoClaw** | MCP 生态扩张（远程 / OAuth / Strava 等官方集成） | MCP 重度用户 | Mattermost / Signal / Google Chat 多渠道 + Skill 体系 |
| **IronClaw** | "Reborn" 架构迁移 + 多智能体 owner/actor 分离 | 架构演进型用户 | ProductAdapter 契约 + TurnCoordinator + Durable CAS |
| **LobsterAI** | 桌面助手 + 工具默认配置 | 桌面配置可定制用户 | Electron / sql.js 全内存（性能待修复 #1193） |
| **Moltis** | 沙箱隔离 + 文件工具回退 | 容器化部署用户 | Docker / Apple Container 沙箱状态探测 |
| **CoPaw / QwenPaw** | 国产模型深度集成（Qwen / 火山引擎 / MiMo）+ Tauri Desktop | 中文市场、国产化诉求 | Tauri 桌面 + MCP + Scroll 摘要 |
| **ZeroClaw** | 策略可观测性 + SOP 调度 + 安全语义 | 安全敏感型企业用户 | SOP headless run + Anthropic fallback + 7 类安全 P1 待治理 |

**架构关键差异**：OpenClaw 与 IronClaw 都走"平台化"路线，但前者侧重**功能广度**，后者侧重**架构纯度**；NanoBot 与 PicoClaw 走"轻量级"路线，前者侧重 UX/可观测性，后者侧重多通道与缓存性能；CoPaw 是唯一深度绑定国产模型生态的项目；ZeroClaw 是当前最聚焦"安全语义完备性"的项目。

---

## 6. 社区热度与成熟度

### 活跃度分层

| 层级 | 项目 | 特征 | 阶段判断 |
|---|---|---|---|
| **T1 - 快速迭代** | OpenClaw、ZeroClaw、IronClaw、CoPaw/QwenPaw、Hermes Agent | 日处理 50+ Issue/PR，发布/合并节奏密集 | **架构迁移 / 平台扩张期**，风险敞口同步扩大 |
| **T2 - 稳健迭代** | NanoBot、NanoClaw、Moltis | 5-10 条 Issue/PR，按需响应，闭环率高 | **质量巩固期**，按需吸纳新需求 |
| **T3 - 低速维护** | PicoClaw、LobsterAI | 24h 推进近 0，积压 30-130 天 | **维护静默期**，需警惕失去贡献者信心 |
| **T4 - 静默** | NullClaw、TinyClaw、ZeptoClaw | 24h 无活动 | **未明确状态**（归档 / 私有 fork / 暂停） |

### 成熟度信号

- **T1 风险指标**：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-08-09**
**项目：HKUDS/NanoBot**

---

## 1. 今日速览

NanoBot 今日呈现 **中等偏高的协作活跃度**：过去 24 小时内社区与维护者共贡献 5 条新 Issue 和 9 条 PR，其中 4 条 PR 已成功合并（含 3 条当日提交、当日合并），反映维护团队对 WebUI 体验、Token 可观测性等议题响应迅速。最热门话题是 **Token 消耗不透明** —— 由 #5266 引发的相关讨论已衍生出 2 条 PR（#5293、#5299），形成"用户提需 → 开发者解需"的快速闭环。整体来看，项目处于 **稳健迭代阶段**，未发生影响面较大的新版本发布或重大缺陷。

---

## 2. 版本发布

**今日无新版本发布**。当前处于功能增强密集期，版本号相对稳定。

---

## 3. 项目进展

今日共合并/关闭 4 条 PR，项目在多个方向上取得实质进展：

| PR | 主题 | 推进方向 |
|---|---|---|
| [#5252](https://github.com/HKUDS/nanobot/pull/5252) | **WebUI 临时聊天模式** | 用户体验：新增"开聊天页面后才有会话"的临时对话模式，多轮但不持久化，降低误操作产生历史记录的成本 |
| [#5293](https://github.com/HKUDS/nanobot/pull/5293) | **每轮迭代 Token 诊断日志** | 可观测性：直接在 AgentRunner 层记录每次执行的 input/output/cached token，定位"烧 token 黑洞"——直接回应 [#5266](https://github.com/HKUDS/nanobot/issues/5266) |
| [#5296](https://github.com/HKUDS/nanobot/pull/5296) | **移除已验证的死代码** | 代码卫生：清理 30 个仓库内、仅测试可达或生产触达的冗余单元，减少维护负担；保留 6 个需兼容性决策的 API 敏感单元 |
| [#5294](https://github.com/HKUDS/nanobot/pull/5294) | **修复 WebUI 图像悬停裁剪** | UI 细节：移除 hover 缩放与环形，避免容器裁剪隐藏图像边缘，保留放大光标与键盘焦点 |

**整体判断**：项目向前迈进了"一小步清晰路"——重点发力在 **WebUI 体验打磨** 与 **Token 运营可观测性** 两个方向，属于内功扎实型迭代。

---

## 4. 社区热点

### 🔥 热度榜首：#5266 — Token 消耗日志诉求
- **链接**：[HKUDS/nanobot#5266](https://github.com/HKUDS/nanobot/issues/5266)
- **评论数**：13（今日最高）
- **核心诉求**：用户反馈 nanobot 在 2 小时内无故消耗上百万 Token，希望记录每次调用的 token 消耗以便追踪。

**生态反应**：该 Issue 催生 2 条 PR 多端响应：
- 后端诊断层：#5293（已合并）
- 前端展示层：#5299（待合并）

**诉求分析**：这是 AI Agent 类工具的 **普遍痛点**——当任务后台长时运行时，用户对成本无感知。社区对"可解释、可追溯的成本结构"有强烈需求，预期会成为后续版本重点打磨方向。

### 🥈 次热：#5297 — MCP 增加 OAuth 网页授权
- **链接**：[HKUDS/nanobot#5297](https://github.com/HKUDS/nanobot/issues/5297)
- **评论数**：2
- **核心诉求**：需要网页授权的 MCP（如 xmind.com/api/mcp）目前无法配置，建议通过 gateway 远程获取授权。

**诉求分析**：反映 MCP 生态正在向 **OAuth 2.0 标准化** 演进，本地客户端缺乏回调承载能力是典型工程瓶颈。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **P0 高危** | [#5300](https://github.com/HKUDS/nanobot/issues/5300) | MCP 连接失败未隔离 + anyio cancel scope 跨任务崩溃：远程 MCP 返回 HTTP 530 时，事件循环空转，CPU 飙升到异常高，进程卡死/崩溃 | ❌ **无**，需紧急关注 |
| 🟠 **严重** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署失败：`/usr/local/bin/entrypoint.sh: Permission denied` | ❌ 无，但属于镜像/挂载权限配置问题，修复门槛低 |
| 🟡 **P0（已有 PR）** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | Stale 后台任务覆盖 Session 数据：用户运行 `/new` 时若后台任务仍在写，会覆盖新会话 | ✅ PR 开放中（标记 `conflict`） |
| 🟢 **P2（已有 PR）** | [#5206](https://github.com/HKUDS/nanobot/pull/5206) | 流式响应被双重记录日志 | ✅ PR 开放中（标记 `conflict`） |

**总体稳定性评估**：⚠️ **存在 1 个需紧急介入的 P0 隐患**（#5300），主要表现为异步任务边界处理不当，可能导致网关崩溃。建议优先 review #5271 的 session 竞态修复。

---

## 6. 功能请求与路线图信号

| 需求 | 链路 | 落地概率 |
|---|---|---|
| **Token 消耗可视化** | #5266 → #5293（已合并）+ #5299（待合并） | 🟢 极高，下个版本大概率可见 |
| **MCP OAuth 网页授权** | #5297 | 🟡 中等，需改造 gateway 架构 |
| **MCP schema 预算控制** | [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 🟡 中等，是工具集规模化的痛点 |
| **计算机使用工具（computer_use + browser）** | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 🟠 待定，已开放 2 个月未合入，可能需要维护者立项决议 |
| **WebUI 临时聊天模式** | #5252 | ✅ 已合并 |
| **Matrix 房间级回复关联** | [#5292](https://github.com/HKUDS/nanobot/pull/5292) | 🟢 高，PR 待 review |

**路线图信号**：Token 经济性（计费透明度 + 上下文预算）正在成为下一阶段重点能力。

---

## 7. 用户反馈摘要

- **痛点 1：Token 黑洞**（来自 #5266 评论区）—— 用户反映"无明显操作时 2 小时消耗百万 Token"，对 Agent 隐蔽行为的成本不可控感到焦虑。属于 **可解释性 / 可观测性** 抱怨。
- **痛点 2：MCP 集成门槛**（来自 #5297）—— 需要浏览器登录的 MCP（如 xmind、Notion）目前无法使用，用户期待"一次配置、长效代理"。
- **场景 3：Docker 部署体验**（来自 #5295）—— 文档与实际镜像存在权限不匹配，建议增加部署后健康检查指引。
- **场景 4：模型上下文成本**（来自 #5298）—— 当 MCP 工具集膨胀时，tool schema 占用大量上下文窗口，是 **Agent 平台规模化** 的典型挑战。

---

## 8. 待处理积压

提醒维护者关注以下长期未响应项：

| 编号 | 标题 | 状态 | 积压时长 |
|---|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | computer_use + browser 工具 | PR 开放 | **60 天**（自 2026-06-10） |
| [#5206](https://github.com/HKUDS/nanobot/pull/5206) | 流式响应重复日志 | PR 开放 + conflict | 8 天 |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务覆盖 Session | PR 开放 + conflict | 3 天（P0） |

**建议**：#4276 属重大功能增强，建议维护者明确是否纳入路线图；#5271 标记 conflict，建议优先 rebase 解决，避免 session 竞态风险持续在线上。

---

## 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 多 Issue/PR 持续涌入 |
| 响应速度 | ⭐⭐⭐⭐ | 当日 Issue 衍生当日合并 PR |
| 稳定性 | ⭐⭐⭐ | 存在 1 个 P0 异步崩溃隐患 |
| 社区氛围 | ⭐⭐⭐⭐ | 需求描述清晰，开发者快速跟进 |
| 代码卫生 | ⭐⭐⭐⭐⭐ | #5296 移除 30 个死代码单元 |

**总评**：🌟 **4.0/5** —— NanoBot 处于健康的螺旋上升期，Token 可观测性这条主线值得在 changelog 中重点突出。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-09

## 📋 今日速览

Hermes Agent 仓库过去 24 小时保持高强度开发节奏：共 **50 条 Issues** 更新（38 新开/活跃、12 已关闭）和 **50 条 PR** 更新（42 待合并、8 已合并/关闭），但无新版本发布。讨论热点集中在 **Desktop 应用稳定性**（macOS 冻结、Windows 安装失败）、**会话压缩/上下文管理缺陷** 以及 **ACP 协议响应挂起** 等 P0/P1 级别问题。整体看，项目处于"密集修复+持续重构"阶段，没有发布阻断性回归，但 Desktop 端的用户体验投诉正在累积，需要维护者重点关注。

---

## 🚀 版本发布

今日无新 Release 发布。

---

## 📈 项目进展

今日共有 **8 条 PR** 进入合并/关闭状态，涵盖安全修复、性能优化、UI 改进：

| PR | 类型 | 说明 |
|---|---|---|
| [#78911](https://github.com/NousResearch/hermes-agent/pull/78911) | bugfix | OTLP span exporter 现在继承配置的 `resource_attributes`，修复 #78897（指标和日志此前已正确应用） |
| [#72337](https://github.com/NousResearch/hermes-agent/issues/72337) | feature | Cron 投递方式由单选下拉改为多选 checkbox（可同时 local + origin） |
| [#14859](https://github.com/NousResearch/hermes-agent/issues/14859) | feature | CLI/TUI 状态栏显示当前 session 标题 |
| [#73624](https://github.com/NousResearch/hermes-agent/issues/73624) | bugfix | `_estimate_msg_budget_tokens` 不再把失效的 reasoning 内容算入压缩尾预算（节省 19-24%） |
| [#57240](https://github.com/NousResearch/hermes-agent/issues/57240) | bugfix | fork 会话不再双重编码 reasoning 列 |
| [#72641](https://github.com/NousResearch/hermes-agent/issues/72641) | bugfix | Windows `/diff` 工具不再因 cp932 解码非 ASCII 文件名崩溃 |

**整体评估**：今日合入的修复集中在"压缩语义正确性"、"跨平台兼容性"和"可观测性"，属于稳定性硬化而非新功能推进。项目整体向前推进了一个小台阶，但 PR 待合并队列仍有 42 条堆积，Review 速度可能成为瓶颈。

---

## 🔥 社区热点

**今日评论数最高的 Issues：**

1. **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)（18 条评论）** — Desktop 在 macOS 27 beta 上对话约 5 轮后整个 UI 完全冻结，包括 Settings（齿轮图标/⌘,）。用户反馈唯一恢复方式是"等待偶尔的解冻"——这是今日最严重、最持续的痛点。

2. **[#78515](https://github.com/NousResearch/hermes-agent/issues/78515)（6 条评论）** — 安全议题：`background_review` 写入的 skills 默认绕过内容扫描（`guard_agent_created` 默认关闭），并被注入到每一次会话的 system prompt 中。报告者按 `SECURITY.md §3.2` 提交，符合"纵深防御"基调。

3. **[#40801](https://github.com/NousResearch/hermes-agent/issues/40801)（6 条评论）** — Cron 调度器拒绝来自 profile-scoped 任务、但脚本路径指向默认 profile（`~/.hermes/scripts/`）的合法调用，是 #32091 的反向版本。

4. **[#81969](https://github.com/NousResearch/hermes-agent/issues/81969)（6 条评论）** — 用户强烈抱怨更新频繁破坏现有配置："every other update breaks everything... not giving me confidence in the product"——情绪激烈，措辞直接点名"reputation"。

5. **[#75778](https://github.com/NousResearch/hermes-agent/issues/75778)（6 条评论）** — Desktop 更新流程同时启动两个 `hermes-setup` 进程，失败窗口掩盖了真正仍在运行的更新，用户体验"卡死"假象。

6. **[#70846](https://github.com/NousResearch/hermes-agent/issues/70846)（5 条评论，👍1）** — 为 agent 服务的 compaction 同时清空了人类可见的消息历史，导致长会话无法回溯做文档。

**诉求分析**：今日热点折射出三个核心诉求——**Desktop 稳定性**（卡死/冻结类问题扎堆）、**更新可信赖性**（用户对自动更新已经产生焦虑）、**会话/上下文完整性**（压缩与历史回看互相打架）。这与"工具型 AI 助手走向长会话使用场景"的趋势相吻合。

---

## 🐛 Bug 与稳定性

按严重程度排序：

### 🔴 P0 / P1 严重

| Issue | 组件 | 描述 | Fix PR |
|---|---|---|---|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop / macOS | macOS 27 beta 上 Desktop 约 5 轮消息后完全冻结（包括 Settings） | **无**（[#82128](https://github.com/NousResearch/hermes-agent/pull/82128) 仅 clamp virtualizer 行数，疑似相关但不完整） |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | Desktop / Windows | 更新频繁破坏现有配置，用户信心受损 | [#82118](https://github.com/NousResearch/hermes-agent/pull/82118) 修复 Windows install script（部分） |
| [#75778](https://github.com/NousResearch/hermes-agent/issues/75778) | Desktop / macOS | 更新点击触发两个 `hermes-setup`，失败窗口遮盖真实进度 | **无明确 PR** |
| [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | Desktop / Linux | npm 12 默认策略破坏 Linux 桌面更新 | **无** |

### 🟡 P2 中等

| Issue | 组件 | 描述 | Fix PR |
|---|---|---|---|
| [#70846](https://github.com/NousResearch/hermes-agent/issues/70846) | agent/CLI/TUI/Desktop | 压缩让人类用户也看不到历史消息 | **无** |
| [#81322](https://github.com/NousResearch/hermes-agent/issues/81322) | cron/terminal | `lifecycle_guard` 对 ELF 二进制路径误抛 `embedded null byte` | **无** |
| [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) | ACP | `usage_update` 挂起导致 `prompt()` 不返回 `PromptResponse` | [#82133](https://github.com/NousResearch/hermes-agent/pull/82133)、[#51498](https://github.com/NousResearch/hermes-agent/pull/51498) |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | cron | profile-scoped 任务的脚本路径守卫误拒 | **无** |
| [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | agent | 压缩后 flush 未采用 live continuation，错误提示误导"磁盘满" | **无** |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | agent/CLI/gateway | macOS 上 `state.db` FTS 索引损坏 | **无** |
| [#66978](https://github.com/NousResearch/hermes-agent/issues/66978) | CLI/TUI | `_tui_need_npm_install` 每次启动都重装 | **无** |
| [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) | tools/docker | Podman + SELinux 下挂载的 skills 目录无法访问 | **无** |
| [#81995](https://github.com/NousResearch/hermes-agent/issues/81995) | MCP | stdio MCP 冷启动挂起，in-flight 调用等满 300s | **无** |
| [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) | gateway/TTS | 慢 TTS 后端让语音回复阻塞文本响应 | **无** |
| [#81430](https://github.com/NousResearch/hermes-agent/issues/81430) | agent/memory | Telegram 内存写入成功但磁盘未持久化 | **无** |

### 🟢 P3 较低

- [#78807](https://github.com/NousResearch/hermes-agent/issues/78807) DeepSeek V4 Flash 0731 推理死循环
- [#43997](https://github.com/NousResearch/hermes-agent/issues/43997) `hermes update` 触发的 npm 11 allowScripts 警告
- [#81846](https://github.com/NousResearch/hermes-agent/issues/81846) Desktop "Branch into new chat" 按钮间歇性缺失
- [#81012](https://github.com/NousResearch/hermes-agent/issues/81012) ANSI 转义序列绕过 secret 屏蔽

**评估**：P0/P1 主要集中在 Desktop 桌面端（4 条），且只有 1 条有部分修复在跟（#82118 仅解决 Windows 子集）。macOS 上的 #63047 与 #75778 互相独立但都未被合入任何 PR，这是当前最危险的敞口。

---

## 💡 功能请求与路线图信号

| Issue | 类型 | 提议 | 已被 PR 实现？ |
|---|---|---|---|
| [#78307](https://github.com/NousResearch/hermes-agent/issues/78307) | memory | 内置 bounded memory store 的生命周期管理（inspect/health/dedup/consolidate） | 暂无 PR，但 `comp/plugins` 路径下 #82130 正在做 Honcho 写入隔离 |
| [#35573](https://github.com/NousResearch/hermes-agent/issues/35573) | agent | RFC：`ToolCallStormBreaker` 抑制重复 tool-call 循环 | 暂无 PR，但 [#82049](https://github.com/NousResearch/hermes-agent/pull/82049) 的 P0 缓存 PR 体现了类似关注 |
| [#57752](https://github.com/NousResearch/hermes-agent/issues/57752) | sessions | `sessions.auto_prune`+VACUUM 默认关闭且无操作员警告，建议默认开 + 提示 | 暂无 PR |
| [#49103](https://github.com/NousResearch/hermes-agent/issues/49103) | TUI | Cmd+K 统一搜索 files/sessions/skills | 暂无 PR |

**已合并的功能类 Issue**：今日 #14859（状态栏 session 标题）、#72337（Cron 多选投递）已成功落地，体现维护者对**会话可观测性**与**Cron UX** 的持续投入。

**路线图信号**：`memory` 生命周期（#78307）与"重复调用抑制"（#35573）是呼声较高的方向，但都尚未进入实现阶段，预计在下个迭代优先级排序时会得到关注。

---

## 🗣️ 用户反馈摘要

**痛点集中表达：**

- **更新焦虑（来自 #81969）**：用户明确写道"scared to update because every other update bricks everything"，并提及"losing everything and have to reconfigure everything"。这种情绪表达比 bug 描述本身更值得警惕——它意味着**信任损耗**，且往往领先于技术问题的实际严重度。

- **Desktop 不可恢复（来自 #63047）**：用户在 macOS 上使用 Hermes Desktop 时，5 轮对话后 UI 冻结连 Settings 都被锁住。"唯一恢复方式是偶尔等它解冻"——这种"无错误、无退出"的软死锁是 AI Agent 客户端最难调试的故障类型。

- **压缩与可见性的冲突（来自 #70846）**：长会话用户希望压缩是为了让 agent 更聪明，但当前实现把人类可见的历史也一起擦掉，用户无法"回去读自己做了什么"。这是一个**agent-side 与 human-side 语义边界**问题。

- **上下文窗口预算被偷偷消耗（来自 #73624）**：19-24% 的预算被永远不会被 adapter 重放的 reasoning 块吃掉——这是技术性 bug 但带来实质资源浪费。

- **MCP cold-spawn 静默挂起（来自 #81995）**：300 秒才超时，期间用户看到的只是"模型卡住"。这种延迟对交互体验影响极大。

**满意侧 / 建设性建议侧：**

- [#14859](https://github.com/NousResearch/hermes-agent/issues/14859)（已合并）用户提交的就是高质量 RFC，含现状/期望/验收标准。
- [#78515](https://github.com/NousResearch/hermes-agent/issues/78515) 报告者主动引用 `SECURITY.md §3.2`，说明项目吸引了会读 CONTRIBUTING/SECURITY 的高质量贡献者。
- [#82049](https://github.com/NousResearch/hermes-agent/pull/82049) 的描述极具技术深度（builder-declared stable/volatile boundary），开发者社区技术水位较高。

---

## 📦 待处理积压（提醒维护者关注）

| Issue/PR | 标题 | 积压时长 | 建议 |
|---|---|---|---|
| [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop 在 macOS 27 beta ~5 轮后冻结 | ~28 天 | 18 条评论无人给出明确修复路径，**最高优先级** |
| [#62171](https://github.com/NousResearch/hermes-agent/issues/62171) | npm 12 破坏 Linux Desktop 更新 | ~30 天 | 与 #81969 同源问题，npm 11 → 12 的策略变化已正式发布 1 个月仍未有完整修复 |
| [#81969](https://github.com/NousResearch/hermes-agent/issues/81969) | 更新频繁破坏现有配置 | 1 天 | 用户情绪激烈，建议 24h 内回应并给出沟通计划 |
| [#39245](https://github.com/NousResearch/hermes-agent/issues/39245) | ACP prompt 在 usage_update 挂起时不返回 | ~66 天 | 已有 [#51498](https://github.com/NousResearch/hermes-agent/pull/51498) 和 [#82133](https://github.com/NousResearch/hermes-agent/pull/82133) 两个 PR 在跟，**应尽快合并其中一个** |
| [#63386](https://github.com/NousResearch/hermes-agent/issues/63386) | macOS `state.db` FTS 索引损坏 | ~28 天 | 影响 session 搜索、handoff 状态、gateway peer，沉默但严重的稳定性问题 |
| [#40801](https://github.com/NousResearch/hermes-agent/issues/40801) | Cron profile-scoped 脚本路径守卫反向 bug | ~64 天 | 已有 6 条讨论但无 PR，需维护者下决策 |
| [#82074](https://github.com/NousResearch/hermes-agent/issues/82074) | Podman + SELinux 自动挂载 skills 目录 | 1 天 | 已在 PR 队列但需要标记 duplicate 处理 |
| [#81162](https://github.com/NousResearch/hermes-agent/issues/81162) | 慢 TTS 后端阻塞文本响应 | 2 天 | P2 但体验影响大，建议改为异步 fire-and-forget |

**整体观察**：42 条待合并 PR + 38 条活跃 Issue 的配比对一个中型项目而言并不算健康积压，但 **P0/P1 Desktop 修复缺位**与 **ACP prompt 挂起双 PR 并行**两个信号值得维护者注意——后者说明优先级存在分歧，需要 maintainer 主导决策。

---

## 📊 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 50/50 双高活跃度 |
| 响应及时性 | ⭐⭐⭐ | 多个 P0 超过 28 天无修复 |
| 跨平台稳定性 | ⭐⭐ | Desktop macOS/Windows/Linux 三个平台都有阻塞性 bug |
| 安全姿态 | ⭐⭐⭐⭐ | 主动引入纵深防御议题（#78515）并修复 ANSI 绕过（#81012） |
| 文档/PR 质量 | ⭐⭐⭐⭐ | 多份 PR 含详细根因分析与回归测试计划 |
| 用户信任度 | ⭐⭐ | 更新破坏性 bug 正在累积情绪 |

---

> 报告生成时间：2026-08-09 · 数据来源：GitHub API · 仓库：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-08-09
**数据范围**：过去 24 小时（截至 2026-08-08 更新窗口）

---

## 一、今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏缓**水平：3 条 Issue 更新、4 条 PR 更新，但**无新增 Release、零 PR 合并/关闭**，项目推进节奏出现阶段性停滞。值得关注的亮点是社区贡献者 `grrowl` 集中提交了 2 条关键修复 PR（WhatsApp 405 协议阻断、前缀缓存位置优化），均直击生产环境回归问题；另有 1 条 Issue 因 stale 自动关闭。维护者亟需对积压 PR 做出处理，尤其针对 WhatsApp 通道已失效这一紧急阻塞问题。

---

## 二、版本发布

**本期无新版本发布。** 建议关注下一次版本节奏，特别是 #3320（WhatsApp 修复）若被合并，可能触发 0.3.2 紧急补丁。

---

## 三、项目进展

**过去 24 小时 PR 合并/关闭情况：0 条。** 项目代码层面无任何向前推进动作。

尽管如此，待合并池中存在两条由 `grrowl` 提交、极具价值但尚未评审通过的修复：

| PR | 主题 | 影响 |
|---|---|---|
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | bump whatsmeow 解除 WhatsApp 405 阻断 | **P0 级回归修复**：当前 pin 版本的 `go.mau.fi/whatsmeow` 被 WhatsApp 服务端判定为过期，握手后约 5 秒被强制断开，且无重连机制，导致原生 WhatsApp 通道完全失效 |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | 调整动态上下文位置以保留 prefix caching | **P1 级性能修复**：将 per-request 动态上下文（时间、Runtime、Session、Sender）从 system message 头部移至历史之后，避免位置敏感的前缀缓存被整段失效，可显著降低 token 重复计算成本 |

**整体进度评估**：净推进量为 **0**，但仓库中潜藏两条高价值修复等待绿灯。建议维护者尽快评审并合并 #3320 以恢复 WhatsApp 通道可用性。

---

## 四、社区热点

按评论数与议题影响力排序：

1. **[#3287 — Better support long messages in IRC](https://github.com/sipeed/picoclaw/issues/3287)**（4 条评论）
   需求核心：IRCv3 协议默认单帧上限 512 字节，超长消息会被客户端自动拆分并以换行符呈现为多条独立消息，破坏语义连续性。用户希望 PicoClaw 识别并聚合被拆分的长消息，保持上下文完整性。**状态**：OPEN + stale，已逾 16 天无维护者响应。

2. **[#3302 — Support OAuth 2.1 for MCP servers（参照 #2546）](https://github.com/sipeed/picoclaw/issues/3302)**（2 条评论）
   诉求：为 MCP 服务器接入 OAuth 2.1 鉴权流，与历史 Issue #2546 提到的能力诉求保持一致。该议题被作者自评为 "Nice-to-Have / Enhancement"，但反映了 MCP 生态对标准鉴权协议的强需求。

3. **[#3292 — 聊天界面输入框聚焦时 CPU 占用过高](https://github.com/sipeed/picoclaw/issues/3292)**（2 条评论，已关闭）
   环境：PicoClaw 0.3.1 / Go 1.26 / deepseek-v4-flash / Debian Linux x64 / Firefox Web 通道。**状态**：CLOSED + stale（疑似被机器人自动归档），是否真正修复未在评论中确认。

**诉求分析**：社区关注点集中在**多通道适配**（IRC 长消息、MCP 鉴权）与**前端性能**（Web 聊天输入框），三类需求均反映了 PicoClaw 在多通道接入与 Web UI 体验上仍有打磨空间。

---

## 五、Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 标题 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| 🔴 P0-紧急 | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | WhatsApp 通道因 `client outdated (405)` 完全失效，无重连 | PR OPEN（待合并） | ✅ **是**（#3320）|
| 🟠 P1-高 | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | 动态上下文放置位置破坏 prefix caching，性能下降 | PR OPEN（待合并） | ✅ **是**（#3321）|
| 🟡 P2-中 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | Web 聊天界面聚焦输入框时 CPU 占用异常偏高 | Issue CLOSED（stale）| ❌ 否（关闭原因不明）|

**关键观察**：
- #3320 是当前最严重的可用性事故，WhatsApp 通道在用户侧已不可用，且无任何规避方案。
- #3292 关闭方式存疑：仅 2 条评论、被标记 stale 后关闭，社区应确认是否真正修复，避免误导后续遇到同类问题的用户。

---

## 六、功能请求与路线图信号

| 需求 | 关联 Issue/PR | 可能的下一版本走向 |
|---|---|---|
| IRC 长消息语义聚合 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 概率中等：实现成本可控，但需维护者确认 IRCv3 扩展支持范围 |
| MCP 服务器 OAuth 2.1 | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 概率高：与 MCP 生态演进趋势一致，且呼应 #2546 历史诉求 |
| 新增 Simplex 通道类型 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | 概率待定：PR 已挂起 40+ 天，仍为 stale 状态，需维护者评估 |
| DeltaChat 重构（-200 LOC）| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 概率中等：纯重构，删除遗留特性与硬编码列表，长期价值显著但短期无新功能可见 |

**信号总结**：MCP 鉴权标准化是当前最清晰的路线图信号，建议纳入近期 milestone；新增通道（Simplex、IRC 增强）则受限于维护者带宽。

---

## 七、用户反馈摘要

从活跃 Issue 评论中提炼的真实用户痛点：

- **IRC 用户**：希望工具层屏蔽底层协议拆分细节，保持长消息对话流的语义连续性 → 反映 PicoClaw 对协议层透明化处理能力不足。
- **WhatsApp 用户（#3320 隐含反馈）**：原生通道稳定运行时，突然遭遇 405 协议级阻断且无重连 → 缺乏上游依赖版本监控与运行时回退机制是核心痛点。
- **Web UI 用户（#3292）**：使用 Firefox + PicoClaw 0.3.1 时，单纯聚焦输入框即触发高 CPU → 前端存在聚焦事件绑定或渲染循环异常，修复路径不透明。
- **MCP 集成用户（#3302）**：当前 MCP 接入方式在鉴权标准上落后于生态 → 影响 PicoClaw 作为企业级 AI 智能体网关的可扩展性。

**总体满意度**：偏低。多数反馈集中在"功能有但不完善""回归未及时修复"，维护者响应速度是社区满意度的主要拖累项。

---

## 八、待处理积压

⚠️ 以下条目长期挂起、已标记 stale，维护者应优先关注：

| 编号 | 类型 | 标题 | 开置时长 | 优先级建议 |
|---|---|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | PR | Added simplex channel type | **~43 天**（2026-06-27 起）| 中：评审后决定合并/关闭 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat): cleanup -200LOC | **~37 天**（2026-07-03 起）| 中：低风险重构，建议合并 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | Better support long messages in IRC | **~18 天**（2026-07-22 起）| 中：需维护者首次响应 |
| [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Issue | Support OAuth 2.1 for MCP | **~10 天**（2026-07-30 起）| 中-高：与生态方向契合 |
| [#3320](https://github.com/sipeed/picoclaw/pull/3320) | PR | fix WhatsApp "client outdated (405)" | < 24 小时 | **🔴 最高**：合并后立即发布 |
| [#3321](https://github.com/sipeed/picoclaw/pull/3321) | PR | fix prefix caching invalidation | < 24 小时 | **🟠 高**：影响所有调用性能 |

---

## 附录：项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码推进 | ⭐⭐☆☆☆ | 24h 零合并，节奏偏慢 |
| 社区响应 | ⭐⭐☆☆☆ | 多条 Issue/PR 已 stale，缺乏维护者反馈 |
| 稳定性 | ⭐⭐☆☆☆ | 存在 P0 级 WhatsApp 阻断未修复 |
| 功能演进 | ⭐⭐⭐☆☆ | 路线图信号清晰（OAuth 2.1、多通道扩展）|
| 贡献者活跃度 | ⭐⭐⭐⭐☆ | `grrowl` 等外部贡献者持续输出高质量 PR |

**综合健康度**：⚠️ **需关注**。建议维护者在下一工作日优先处理 #3320、#3321，并就 #3193/#3222 给出明确合并或关闭意见。

---

*报告生成依据：GitHub Issues / Pull Requests 公开数据。如需深入分析某一议题或趋势对比，请提供历史时间窗口数据。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-08-09**
**数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日继续保持中等活跃的开发节奏，过去 24 小时内共处理 **14 条工单更新**（8 个 Issue + 6 个 PR），其中 **6 条已关闭**，**8 条仍处于 Open 状态**。值得关注的是今日关闭的 3 个 PR 中包含两项重磅功能落地：**远程 HTTP/SSE MCP 服务器支持**（[#2776](https://github.com/qwibitai/nanoclaw/pull/2776)）和 **官方 Strava MCP 集成**（[#2777](https://github.com/qwibitai/nanoclaw/pull/2777)），标志着项目在 MCP 生态扩展上的实质性突破。同时 Discord 审批按钮的严重缺陷（[#3201](https://github.com/qwibitai/nanoclaw/issue/3201)）已在当天闭环修复。项目整体健康度良好，新功能交付与 Bug 修复并行推进。

---

## 2. 版本发布

**无新版本发布。** 今日合并的 PR 尚未触发新的 Release tag，建议关注维护者是否将打包下一批累计改动为版本。

---

## 3. 项目进展

今日共有 **3 个 PR 完成闭环**，对项目能力提升显著：

| PR | 影响范围 | 价值评估 |
|---|---|---|
| [#2776](https://github.com/qwibitai/nanoclaw/pull/2776) feat: 支持远程 HTTP/SSE MCP 服务器 | **架构级扩展** —— `McpServerConfig` 升级为 union 类型，新增 `McpServerRemoteConfig`，CLI 命令 `ncl groups config add-mcp-server` 同步增加 `--type/--url/--header` 参数 | ⭐⭐⭐⭐⭐ 打破了 MCP 仅支持 stdio 的限制，大幅扩展第三方集成边界 |
| [#2777](https://github.com/qwibitai/nanoclaw/pull/2777) feat: 新增 `/add-strava` 技能 | 集成官方 Strava MCP (`https://mcp.strava.com/mcp`)，附带主机端 OAuth 流程与 token 自动刷新模块 | ⭐⭐⭐⭐ 为运动/健身场景的 agent 用例提供开箱即用能力 |
| [#3199](https://github.com/qwibitai/nanoclaw/pull/3199) Add Mattermost 渠道集成 (v2 ChannelAdapter) | 替代陈旧的 pre-v2 架构 PR #546，基于新的 `ChannelAdapter`/`channel-registry.ts` 契约实现 | ⭐⭐⭐ 渠道矩阵再添一员，但随即被新版 [#3202](https://github.com/qwibitai/nanoclaw/pull/3202) 取代 |

> **进展评估：** 项目在 MCP 远程化与第三方渠道接入两条主线上均取得阶段性里程碑，整体向前推进明显。

---

## 4. 社区热点

按评论数与互动度排序：

- **🥇 [#3201](https://github.com/qwibitai/nanoclaw/issue/3201) — Discord 审批按钮点击无效**（2 条评论）
  真实用户痛点：管理员点击 Discord 上的 Approve 按钮后系统仍记录为拒绝，导致配置更新请求被驳回。已与 PR [#3185](https://github.com/qwibitai/nanoclaw/pull/3185)（修复 webhook 路径下 `custom_id` 的 `\n` 分隔符解析问题）形成 Issue→Fix 闭环。

- **🥈 [#3200](https://github.com/qwibitai/nanoclaw/issue/3200) — "Cartographer" persona prompt**（1 条评论）
  内容为系统级 prompt 注入尝试（非真实 Bug 报告），已关闭。此类 issue 反映出项目需要加强垃圾工单过滤机制。

- **🥉 [#3177](https://github.com/qwibitai/nanoclaw/issue/3177) — Docker 跨挂载文件系统上的 session 数据库锁竞争**（1 条评论）
  高质量技术报告：定位到 SQLite DELETE journal 模式无法跨 Docker mount (VirtioFS) 传播，导致 29,000+ readonly 错误。已关闭，预期修复已合入。

> **诉求分析：** 社区当前的关注重心集中在 **跨渠道一致性**（Discord/Signal/Google Chat）与 **多用户权限治理**（审批、密钥分配）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#3201](https://github.com/qwibitai/nanoclaw/issue/3201) | Discord 审批按钮完全失效，所有审批被错误驳回 | ✅ [#3185](https://github.com/qwibitai/nanoclaw/pull/3185) |
| 🔴 高 | [#3177](https://github.com/qwibitai/nanoclaw/issue/3177) | SQLite journal 模式在 VirtioFS 下引发严重锁竞争，2.9 万+ readonly 错误 | ✅ 已关闭（修复合入） |
| 🟠 中 | [#3206](https://github.com/qwibitai/nanoclaw/issue/3206) | Google Chat 等 messageId 含路径分隔符的渠道上附件被静默丢弃 | ❌ 待修复 |
| 🟠 中 | [#3203](https://github.com/qwibitai/nanoclaw/issue/3203) | codex provider 发出未声明的 `file` ProviderEvent，导致 `/add-codex` typecheck 失败，生成的图像被丢弃 | ❌ 待修复 |
| 🟠 中 | [#3204](https://github.com/qwibitai/nanoclaw/issue/3204) | `add-opencode` SKILL.md 仍指引编辑 Dockerfile ARG+RUN（已被 `cli-tools.json` 重构移除），自带的 guard 测试断言旧形态 | ❌ 待修复 |
| 🟡 低（持续） | [#2528](https://github.com/qwibitai/nanoclaw/issue/2528) | Signal 渠道的图像/PDF 附件 agent 容器无法访问 | ❌ 已挂起 80+ 天 |

> **稳定性观察：** 今日高危 Bug 均已闭环；但 mshirel 集中报告的 `codex` 与 `add-opencode` 一组技术债问题需要规划集中修复。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 已有相关 PR | 纳入下版本的可能性 |
|---|---|---|---|
| Mattermost 渠道集成 | [#1379](https://github.com/qwibitai/nanoclaw/issue/1379) | ✅ [#3199](https://github.com/qwibitai/nanoclaw/pull/3199)（已关闭）→ [#3202](https://github.com/qwibitai/nanoclaw/pull/3202)（最新提交） | 🟢 极高 |
| 远程 HTTP/SSE MCP 服务器 | — | ✅ [#2776](https://github.com/qwibitai/nanoclaw/pull/2776)（已合并） | 🟢 已落地 |
| Strava 官方 MCP 集成 | — | ✅ [#2777](https://github.com/qwibitai/nanoclaw/pull/2777)（已合并） | 🟢 已落地 |
| Telegram 原生富文本渲染（Bot API 10.1 sendRichMessage） | — | � [#2877](https://github.com/qwibitai/nanoclaw/pull/2877)（Open，6/28 创建） | 🟡 中等（PR 停滞超 40 天） |
| 持久化 group 级 OneCLI 密钥分配（解决两种互斥设计方向） | [#3205](https://github.com/qwibitai/nanoclaw/issue/3205) | ❌ 无 | 🟠 需先收敛设计分叉 |

---

## 7. 用户反馈摘要

- **Discord 用户（churchcrm-hazel）**：在多用户/多管理员场景下，审批流程完全不可用 —— 点击 Approve 后卡片仍显示 "0 by [user]"，请求被自动驳回。反映出 **渠道交互层与权限系统的耦合脆弱性**。
- **macOS / Linux Docker 用户（DawoudIO）**：VirtioFS 挂载下的 SQLite 行为不一致是基础设施级痛点，影响所有依赖 session 持久化的功能（消息收发、状态恢复等）。
- **Signal 用户（brentkearney）**：附件可达性长期未解决，agent "看不见"图片意味着 Signal 渠道的视觉能力实际为零。
- **Google Chat 潜在用户（codybuell）**：发现一个 **跨渠道一致性陷阱** —— 同样的代码路径在 Discord/Slack 上工作正常，但 messageId 含 `/` 时直接被 `isSafeAttachmentName` 拒收，无任何告警。
- **多租户架构师视角（chiptoe-svg）**：当前 OneCLI 密钥分配存在 **未收敛的设计分叉**，无持久化模型，企业场景下不可用。

> **总体满意度：** 用户对核心 agent 能力认可度较高，但对 **渠道一致性**、**多用户治理**、**跨平台基础设施兼容** 三类边缘场景满意度偏低。

---

## 8. 待处理积压

维护者需关注的长期挂起项：

| 类型 | 编号 | 标题 | 挂起天数 | 优先级建议 |
|---|---|---|---|---|
| 🐛 Bug | [#2528](https://github.com/qwibitai/nanoclaw/issue/2528) | Signal 渠道附件不可达 | **83 天**（自 5/18 创建） | 🔴 应立即评估 |
| 🔧 PR | [#2877](https://github.com/qwibitai/nanoclaw/pull/2877) | Telegram 原生富文本渲染 | **42 天** | 🟠 需 reviewer 跟进 |
| ✨ Feature | [#3205](https://github.com/qwibitai/nanoclaw/issue/3205) | OneCLI 持久化 group 密钥 | 1 天（设计分叉阻塞） | 🟡 需 RFC 决策 |
| � Bug | [#3206](https://github.com/qwibitai/nanoclaw/issue/3206) | Google Chat 附件被静默丢弃 | 1 天 | 🟠 涉及安全/数据丢失风险 |
| 🐛 Bug | [#3203](https://github.com/qwibitai/nanoclaw/issue/3203) | codex `file` ProviderEvent 类型未声明 | 1 天 | 🟠 阻塞 typecheck |
| 🐛 Bug | [#3204](https://github.com/qwibitai/nanoclaw/issue/3204) | add-opencode skill 文档与重构后代码不同步 | 1 天 | 🟡 自带 guard 测试可指导修复 |

---

## 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 功能交付节奏 | ⭐⭐⭐⭐ | 单日两个重量级 MCP 功能合并 |
| Bug 响应速度 | ⭐⭐⭐⭐⭐ | 高危 Discord Bug 当日闭环 |
| 长期积压治理 | ⭐⭐ | Signal 渠道附件问题已挂起 83 天 |
| 跨渠道一致性 | ⭐⭐ | Google Chat/Signal 等渠道边缘 case 频发 |
| 社区治理 | ⭐⭐⭐ | 出现 prompt injection 类垃圾工单，需过滤机制 |

**结论：** NanoClaw 当前处于 **功能扩张期**，MCP 生态布局快速推进；但 **跨平台一致性** 与 **长期挂起 Bug** 是下一阶段需要重点关注的健康度风险点。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-09

> 数据周期：过去 24 小时｜仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今天延续了"Reborn"架构迁移的密集推进节奏，**24 小时内 24 个 Issue 关闭 + 32 个 PR 合入/关闭，关闭率分别高达 80% 与 64%**，呈现典型的"清理与落地"特征。闭项集中于"Reborn"模块（M1-WebUI、M2-Inbound、M3-AgentLoop、M5-Events 等），意味着第二阶段的产品面迁移已接近完成大半。同时，开源贡献者（`BenKurrek`、`theredspoon`、`italic-jinxin`）持续在通道、CI、Inspector 等领域提交 XL 级 PR，显示社区共建活跃度较高。**风险点**：`#7391` 暴露了安全层（`SafetyLayer`）在生产 Reborn turn 路径上**完全无调用方**，与官方安全文档宣传不符，需密切关注。

---

## 2. 版本发布

⚪ **无新版本发布。** 当前 24 小时内未发布任何 Release。

---

## 3. 项目进展

合并/关闭的关键 PR 显著推进了以下方向：

### 🏗️ "Reborn" 架构继续落地
- **[#7377](https://github.com/nearai/ironclaw/pull/7377)** （XL, 关闭/合入）："Run 即其调用者"——统一了 owner ≠ actor 的多智能体身份语义，解决了 #7157 遗留下来的三处分裂。
- **[#7029](https://github.com/nearai/ironclaw/pull/7029)** （XL, 关闭/合入）：恢复 durable 的 `Prepared → Sending` CAS，使 vendor-egress ownership 在重启后保持稳定（依赖 #7028）。
- **[#7382](https://github.com/nearai/ironclaw/pull/7382)** （XL, 关闭/合入）：Phase 1 压力脚本——mock LLM 驱动 deterministic builtin/memory 工具调用序列，并验证 production 路径上的 durable write 回读 [#7360](https://github.com/nearai/ironclaw/issues/7360)。
- **[#7389](https://github.com/nearai/ironclaw/pull/7389)** （XL, 关闭/合入）：live-qa 通道回归——通过双车道契约验证 triggered Slack 投递，修复自 #7157 以来一直失败的 `qa_3d/8d/9b/9d` 用例。
- **[#7393](https://github.com/nearai/ironclaw/pull/7393)** （S, 关闭/合入）：披露基准新增 `outbound_deliver` / `outbound_delivery_targets_list` 两个 Core 工具的测量。
- **[#6938](https://github.com/nearai/ironclaw/pull/6938)** （XL, 关闭/合入）：技能激活范式转变——**由模型而非关键词打分器选择技能**，关闭了一条原本不留下任何调用痕迹的隐藏路径。

### 📐 架构治理
- **[#7373](https://github.com/nearai/ironclaw/pull/7373)** （L, OPEN）：门控与 ratchet 全量审计——37 个架构测试门、5 个模块章程门、~80 个 CI 脚本，并产出了 `docs/internal/gate-audit-2026-08.md`。同时武装 5 处 fail-open、删除死门。

### 🧹 Issue 清理与 Epic 收敛
- 关闭的 Reborn 系列 Issue 包括 **#3280、#3288、#4118、#4059、#3577、#3582、#3287、#3286、#3285、#3279、#4539、#4470、#3410、#3284、#3484、#4091、#4088、#3905、#3571、#4120** 等 20+ 个，覆盖 ProductWorkflow、CLI 登录、错误富化、WeChat 通道、记忆迁移、Agent 命令、扩展生命周期等多条产品面。**"Reborn Contributor Runway" Epic #3484 已实质完成**，并行端口门户已具备。

### 📊 总体推进度评估
**向前推进约 1 个产品面迁移周期。** 重点通道（WeChat、Slack、Telegram）已完成 v1→Reborn 端口，ProductAdapter 契约与 TurnCoordinator 已具备接受测试；下一阶段将进入"运营强化"窗口（CI 门控、压测、安全审计）。

---

## 4. 社区热点

| 排名 | 条目 | 评论数 | 👍 | 关注点 |
|---|---|---|---|---|
| 🥇 | [#3280 ProductWorkflow / InboundTurnService facade](https://github.com/nearai/ironclaw/issues/3280) | 7 | 0 | Reborn 产品面 facade 设计 |
| 🥈 | [#6989 Token accounting hybrid estimate bug](https://github.com/nearai/ironclaw/issues/6989) | 5 | 0 | token 计费口径错误 |
| 🥉 | [#7360 Expand stress coverage](https://github.com/nearai/ironclaw/issues/7360) | 2 | 0 | nightly 压测盲区 |
| 4 | [#6939 Migration tool: legacy agent → IronClaw](https://github.com/nearai/ironclaw/issues/6939) | 2 | 0 | 存量用户迁移 |
| 5 | [#3288 Capability lifecycle admin parity](https://github.com/nearai/ironclaw/issues/3288) | 2 | 0 | 扩展/技能/MCP 生命周期 |

**诉求分析**：
- **架构抽象（#3280、#3288）**：社区密切关注 Reborn facade 的产品面覆盖范围，这是后续多通道/多租户的基石。
- **经济/可观测性（#6989）**：token 计费直接影响成本核算，参考 pi-agent-deep-dive 文档的混合 provider-usage + 尾部估算方案。
- **存量兼容（#6939）**：Hermes/Openclaw 老用户的迁移成本问题被显性化，社区希望提供"setup + memory"的一键迁移工具。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 编号 | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **高 (P1)** | [#6989](https://github.com/nearai/ironclaw/issues/6989) | `ModelWorkRequest::for_assistant` 从 **content reference 字符串长度**而非引用内容估算 token | OPEN | 未关联 |
| 🔴 **高 (P1)** | [#7391](https://github.com/nearai/ironclaw/issues/7391) | `SafetyLayer::validate_input` / `scan_inbound_for_secrets` 在生产 Reborn turn 路径上**无调用方**，与 docs.ironclaw.com/security 描述的数据流不符 | OPEN | 无 |
| 🟡 **中 (P2)** | [#7395](https://github.com/nearai/ironclaw/pull/7395) | Send-claim TOCTOU + 失败行无法重开 | OPEN (Fix PR 已就位) | #7395 |
| 🟡 **中 (P2)** | [#7352](https://github.com/nearai/ironclaw/pull/7352) | 同一 run 的同类 gate 投影 id 冲突，导致 durable delivery 身份不唯一 | OPEN (Fix PR 已就位) | #7352 |
| 🟢 **低** | [#7394](https://github.com/nearai/ironclaw/pull/7394) | `SANDBOX_DOCKER_EXACT_PATHS` 在 CI 中硬编码 crate 前缀 | OPEN (Fix PR 已就位) | #7394 |
| 🟢 **低** | [#7341](https://github.com/nearai/ironclaw/pull/7341) | WebUI v2 Playwright 与 SSE 传输回归，附件读取丢失作用域 | OPEN (Fix PR 已就位) | #7341 |

**⚠️ 重点关注**：#6989 与 #7391 均影响计费正确性与安全承诺，是必须在下个版本前修复的 P1 项目，建议维护者优先 assign。

---

## 6. 功能请求与路线图信号

### 🆕 新开/活跃 Feature 请求
- **[#7392](https://github.com/nearai/ironclaw/issues/7392)**（2026-08-08 新开，Epic）：**用锁定的 `oh-my-pi` 编码工具替换 IronClaw 第一方 coding 工具**。这意味着 IronClaw 将采用上游 omp 工具表面，预计会显著影响 skill/工具生态。
- **[#6939](https://github.com/nearai/ironclaw/issues/6939)**（07-31 开）：**Hermes/Openclaw → IronClaw 一键迁移工具**——直击存量用户冷启动痛点。
- **[#7218](https://github.com/nearai/ironclaw/issues/7218)**（08-05 开，Epic）：**Web Debug Inspector**——通过 `?debug=true` 启用的运维专属诊断面板（Prompt / Activity / Stats 三视图）。[#7291](https://github.com/nearai/ironclaw/pull/7291) 已在路上补全统计/导航/i18n。

### 📡 路线图信号
- **v1.1.0 候选**：Web Debug Inspector + LLM 配置重置（[#7343](https://github.com/nearai/ironclaw/pull/7343)）+ 渐进式预览（[#7396](https://github.com/nearai/ironclaw/pull/7396) Slack）+ Push 通知（[#7398](https://github.com/nearai/ironclaw/pull/7398) PWA）。
- **多智能体协作层**：`#7397` presence-based shared conversations（Slack/Telegram）+ `#7377` acting-identity ladder 已合并，社区对 owner/actor 分离语义持续讨论。
- **生态收敛**：#7392 提示 IronClaw 未来将主动对齐 `oh-my-pi` 工具合约，这可能反过来影响 skill 作者的迁移方向。

---

## 7. 用户反馈摘要

> 来自今日活跃/新开 Issue 的真实声音

- **🔁 迁移摩擦大（#6939）**："老 Hermes/Openclaw 用户面临较高切换成本，因为无法携带原有 setup、配置和 memory"。多名用户不愿从零开始，可能直接放弃迁移。
- **💸 计费/成本可见性差（#6989）**：参考 `docs/research/pi-agent-deep-dive.md §7.3`，当前 token 估算混用了 provider usage 与尾部估算，且存在从引用字符串长度估算的根本错误——直接影响计费与限额。
- **🛡️ 安全承诺与实现脱节（#7391）**：官方文档描述了 user → Validate/Sanitize/Detect Leaks → LLM 的数据流，但 `SafetyLayer::validate_input` 在生产路径上**完全没有调用方**。这意味着文档中的承诺尚未在代码中兑现，对企业用户是 blocker。
- **🧪 测试覆盖盲区（#7360）**：nightly API 容量负载的 mock 模型不返回工具调用，导致 builtin 写入路径回归可能未经演练即上线。
- **🔎 运维可观测性诉求（#7218）**：社区明确希望从 WebUI 直接调试 prompt 构造、实时 agent 活动、模型用量与工具执行——这条 Epic 落地后会大幅降低二次开发门槛。

---

## 8. 待处理积压

需要维护者重点关注的长期/未响应项：

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| 🔴 安全 | [#7391](https://github.com/nearai/ironclaw/issues/7391) | SafetyLayer 在生产 Reborn turn 上无调用方 | 文档承诺 vs 实现脱节 |
| 🔴 准确性 | [#6989](https://github.com/nearai/ironclaw/issues/6989) | Token 估算口径错误（用 ref 字符串长度） | P1，计费影响 |
| 🟡 大型 XL PR | [#7398](https://github.com/nearai/ironclaw/pull/7398) | Web Push + PWA | 待合并，规模 XL |
| 🟡 大型 XL PR | [#7171](https://github.com/nearai/ironclaw/pull/7171) | 技能单一 DB-backed 树 | 解决"装完即丢"问题，关闭 #7168 |
| 🟡 大型 XL PR | [#7397](https://github.com/nearai/ironclaw/pull/7397) | Slack/Telegram presence-based shared conversations | 紧接 #7377 落地 |
| 🟡 大型 XL PR | [#7048](https://github.com/nearai/ironclaw/pull/7048) | WASM 客机日志脱敏后追踪 | 依赖 #7063，先合堆叠 |
| 🟡 大型 XL PR | [#7291](https://github.com/nearai/ironclaw/pull/7291) | Inspector 完整化（统计/导航/i18n） | Inspector Epic 最后一公里 |
| 🟡 大型 XL PR | [#7343](https://github.com/nearai/ironclaw/pull/7343) | LLM 配置一键重置 | 用户日常操作刚需 |

**维护者建议**：
1. 48h 内为 **#7391、#6989** 指派 owner 并发布修复时间线；
2. 评估 **#7392 (oh-my-pi 工具替换 Epic)** 与现有 Reborn ProductAdapter 契约的对齐影响，提前公告 skill 作者；
3. 优先 review 三件套（#7398 / #7171 / #7291）——均为社区高频需求且风险低。

---

*报告基于近 24 小时 GitHub 数据自动生成，覆盖 30 个 Issue、50 个 PR。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-09 | 数据来源：GitHub (netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内活跃度较低，共记录 1 条 Issue 更新与 3 条 PR 更新，无新版本发布。从内容分布看，今日并无新提交，所有动态均来自历史 Issue/PR 的状态刷新，且大部分条目已被标记为 **[stale]**（停滞）状态，表明维护团队对存量积压进行了批量清理或自动化检测。唯一实质性变化是 PR #2193（LiteLLM 网关集成）被关闭，未合并进入主干。整体而言，项目当前处于维护静默期，需关注长期未响应项的处置。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### ✅ 已关闭 PR（未合并）

**PR #2193 [CLOSED]** — *feat: add LiteLLM as AI gateway provider*
- 作者：RheagalFire
- 链接：https://github.com/netease-youdao/LobsterAI/pull/2193
- 内容摘要：新增 LiteLLM 作为 AI 网关提供商，复用现有 `chatWithOpenAICompatible` 处理器，无新增依赖。
- 影响范围：`area: renderer`, `area: main`, `area: openclaw`
- **评估**：虽然 PR 已关闭，但其提出的"统一网关接入多家 LLM 提供商"的方向具有较高价值。若社区对多模型路由有强需求，建议维护者评估重新开放或由官方自行实现该集成。

**今日推进度**：整体推进 **有限**，无新功能或修复进入主线。

---

## 4. 社区热点

今日无新增评论或点赞数变化，所有条目互动量均为 0–1，热度极低。**最值得关注**的仍是 4 月份提出的存量 Issue：

**Issue #1192** — *自定义已有工具的默认配置*
- 作者：duzhen1996 | 评论数：1 | 👍：0
- 链接：https://github.com/netease-youdao/LobsterAI/issues/1192
- **诉求分析**：用户希望能为内置工具（如浏览器工具）设置硬编码默认配置（典型场景：无头浏览器模式）。原因是当前只能通过记忆提示让大模型遵循配置，但模型指令跟随不稳定，导致行为不可预测。该诉求反映出 **"硬配置 vs. 软提示"** 的可配置性问题，属于合理的产品需求。

---

## 5. Bug 与稳定性

⚠️ **重要性能修复 PR 待处理**

**PR #1193 [OPEN] [stale]** — *perf(sqlite): eliminate write amplification with debounce + batch transactions*
- 作者：Housum | 链接：https://github.com/netease-youdao/LobsterAI/pull/1193
- **严重程度**：高（性能问题，影响所有持久化操作）
- **问题根因**：`sql.js` 全内存数据库 + `SqliteStore.save()` 在每次行变更时执行 `db.export()` + `fs.writeFileSync()`，导致写入放大严重。
- **建议方案**：防抖（debounce） + 批量事务提交。
- **当前状态**：自 2026-04-01 提出后已停滞 4 个月，无评审反馈。**强烈建议维护者优先评审此 PR**，因其直接关系到所有依赖 SQLite 存储功能的性能表现。

---

## 6. 功能请求与路线图信号

| 需求来源 | 需求描述 | 状态 | 纳入可能性 |
|---------|---------|------|-----------|
| Issue #1192 | 工具默认配置硬编码（无头浏览器等场景） | 停滞 4 个月 | 中 — 属于配置系统扩展，需求合理 |
| PR #2193 | LiteLLM 网关集成（统一访问 100+ LLM） | 已关闭 | 中 — 方向正确，关闭原因不明，建议重新评估 |
| PR #2294 | 添加 TakoAPI 目录徽章（文档/曝光） | 待合并 | 高 — 改动极小，仅 README 徽章 |

**PR #2294** [OPEN] [stale] — *docs: add TakoAPI directory badge*
- 作者：oratis | 链接：https://github.com/netease-youdao/LobsterAI/pull/2294
- 性质：纯文档改动（README 徽章），无代码风险。**几乎无理由拒绝，建议快速合并以提升项目曝光度。**

---

## 7. 用户反馈摘要

从 Issue #1192 的评论中可提炼以下用户痛点：

- **痛点 A：软提示不可靠** — 用户反映通过"记忆"方式让大模型执行特定工具配置（如浏览器无头模式），但模型指令跟随能力不稳定，造成重复性操作失败。
- **痛点 B：缺乏工具级默认配置入口** — 用户期望像传统软件一样有"设置"或配置文件，可以覆盖工具默认行为，而不是完全依赖自然语言交互。
- **使用场景**：自动化任务（不希望被弹窗打扰）、CI/批处理环境（需要无头模式）、低交互频次的开发者工作流。

**满意度**：未发现明确的正面反馈或负面投诉，主要反映的是 **"想要但做不到"** 的配置缺失感。

---

## 8. 待处理积压（提醒维护者关注）

下表列出过去 24 小时内被刷新但长期未处理的关键条目，按停滞时长排序：

| 类型 | 编号 | 标题 | 创建时间 | 停滞天数 | 严重性 |
|------|------|------|----------|----------|--------|
| PR | #1193 | perf(sqlite): debounce + batch transactions | 2026-04-01 | ~130 天 | 🔴 高（性能） |
| Issue | #1192 | 自定义已有工具的默认配置 | 2026-04-01 | ~130 天 | 🟡 中（功能） |
| PR | #2294 | docs: add TakoAPI directory badge | 2026-07-08 | ~32 天 | 🟢 低（文档） |
| PR | #2193 | feat: add LiteLLM as AI gateway provider | 2026-06-23 | 已关闭 | ⚪ — |

**维护建议**：
1. **优先处理 PR #1193**：该性能修复影响所有 SQLite 持久化路径，是基础设施级改进，停滞时间过长存在代码合并冲突风险。
2. **快速合并 PR #2294**：纯文档徽章改动，零风险，有助于项目生态曝光。
3. **回复 Issue #1192**：即使暂不实现，也应给出明确的设计方向说明（如"已列入 roadmap"或"暂时通过 XX 方式绕过"）。
4. **澄清 PR #2193 关闭原因**：是设计冲突、维护策略调整，还是需要重构？给社区明确信号。

---

## 📊 项目健康度总览

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐☆☆☆☆ | 当日无新提交，仅存量刷新 |
| 社区响应速度 | ⭐⭐☆☆☆ | 多项条目停滞超过 100 天 |
| 代码评审周转 | ⭐☆☆☆☆ | PR #1193 已 4 个月无评审反馈 |
| 版本发布节奏 | — | 当日无版本发布 |
| 文档/曝光维护 | ⭐⭐⭐☆☆ | 有 PR 主动补充徽章，等待合并 |

**综合判断**：项目处于 **低速维护期**，核心代码库相对稳定，但社区交互信号减弱。建议维护者集中清理积压项、明确关闭/合并策略，以维持贡献者信心。

---

*报告生成时间：2026-08-09 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-08-09**

---

## 1. 今日速览

Moltis 项目今日整体活跃度较低，但呈现出**"问题闭环 + 新问题上报"**的良性节奏。过去 24 小时内共处理 2 条 Issue（1 新开 / 1 关闭）和 1 条 PR（已关闭），无新版本发布。值得注意的是，关于 Docker 沙箱文件系统工具失效的长期遗留 Bug（[#1096](https://github.com/moltis-org/moltis/issues/1096)）伴随着修复 PR（[#1105](https://github.com/moltis-org/moltis/pull/1105)）的关闭同步关闭，显示该问题已进入收尾阶段。但同期新增的 Apple Container 1.x 沙箱识别 Bug（[#1185](https://github.com/moltis-org/moltis/issues/1185)）暴露出沙箱兼容矩阵可能正在扩大，项目需关注容器化部署的多平台覆盖度。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日推进的最重要工作是 **Docker 沙箱文件系统工具的回退机制修复**。

- **[#1105 Fix Docker sandbox filesystem tool fallback](https://github.com/moltis-org/moltis/pull/1105)（已关闭）** 由社区贡献者 *penso* 提交，于 6 月 5 日创建后长期保持开放，今日正式关闭。该 PR 包含三项关键改动：
  1. 为沙箱化的 Read / Write / Edit / MultiEdit 操作在 `/home/sandbox` 与 workspace/data 路径上补充**回归测试覆盖**；
  2. 当网关进程无法访问 Docker 主机挂载时，从"翻译后的主机路径"**回退到容器内操作**；
  3. 保留直接主机端的 missing-list 语义，确保主路径与回退路径行为一致。

这意味着 Moltis 在容器化部署场景下的文件操作鲁棒性显著增强，**项目整体在沙箱隔离能力方向上向前迈进了一步**。

---

## 4. 社区热点

今日社区互动量整体偏低，所有 Issue / PR 的评论数均为 0，未出现明显的高热度讨论。但从议题本身的影响力看，**沙箱兼容性问题**是当前社区关注的核心焦点：

- [#1185 Apple Container 1.x sandbox starts but Moltis treats it as not running](https://github.com/moltis-org/moltis/issues/1185)（新建）— 反映 macOS Apple Silicon 用户在新型容器运行时下的可用性诉求。
- [#1096 Read/Write/Edit tools don't work in Docker](https://github.com/moltis-org/moltis/issues/1096)（已关闭）— 体现容器化部署用户对基础文件工具链完整性的强需求。

两条议题都指向同一个潜在线索：**Moltis 正在被打包成更复杂的沙箱化运行时交付**，但对各沙箱后端（Docker、Apple Container 等）的适配深度仍参差不齐。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高 — Apple Container 1.x 沙箱识别失效（无修复 PR）
- **[#1185](https://github.com/moltis-org/moltis/issues/1185)**（OPEN）
- **现象**：Apple Container 1.x 沙箱已正常启动，但 Moltis 仍判定其未运行，导致后续流程中断。
- **影响面**：直接影响 macOS Apple Silicon 用户，是新增的兼容性问题。
- **修复状态**：⚠️ **暂无对应 PR**。建议维护者优先排查 Moltis 对 Apple Container 运行时状态的探测逻辑。

### 🟡 中 — Docker 沙箱下文件工具不可用（已闭环）
- **[#1096](https://github.com/moltis-org/moltis/issues/1096)**（CLOSED）
- **现象**：Docker 沙箱模式下 Read / Write / Edit 工具失效。
- **修复状态**：✅ 由 [#1105](https://github.com/moltis-org/moltis/pull/1105) 提供修复方案，二者同步关闭，问题已闭环。

整体看，**沙箱相关 Bug 仍是当前稳定性短板**，建议在路线图中增设跨容器后端的兼容性测试矩阵。

---

## 6. 功能请求与路线图信号

今日未收到明确的新功能请求（Feature Request），但从已关闭的 [#1105](https://github.com/moltis-org/moltis/pull/1105) 与新开的 [#1185](https://github.com/moltis-org/moltis/issues/1185) 可归纳出两条**隐含的路线图信号**：

1. **多沙箱后端统一抽象层**：Moltis 正在引入 Docker、Apple Container 等不同运行时，需要一个统一的"沙箱状态探测 + 文件操作路由"抽象层，以避免每接入一个新后端都需重复打补丁。
2. **沙箱根路径的回退策略标准化**：[#1105](https://github.com/moltis-org/moltis/pull/1105) 提出的"主机路径 → 容器内操作"回退机制，有望被推广为通用策略，写入项目架构文档。

由于 #1105 已关闭，下一版本预计将自然承接这些改进。

---

## 7. 用户反馈摘要

由于今日所有 Issue 的评论数均为 0，缺乏用户间的深度讨论，但根据已沉淀的 Issue 描述可提炼以下用户痛点与场景：

- **真实使用场景**：Moltis 正被用户在 Docker 容器、macOS Apple Container 等隔离环境中运行，用于 LLM Agent 的工具调用（文件读写、编辑）。
- **核心痛点**：
  - **沙箱启动成功 ≠ 工具可用**：用户期望"沙箱起来就能用"，但 Moltis 当前的探测逻辑与文件路由策略在跨平台场景下仍存在盲区。
  - **回归测试覆盖不足**：[#1105](https://github.com/moltis-org/moltis/pull/1105) 主动补齐回归测试，说明社区已意识到此类问题容易在版本迭代中复现。
- **用户满意度信号**：暂无直接的正面/负面反馈，需关注后续评论。

---

## 8. 待处理积压

以下事项提醒维护者关注：

| 事项 | 类型 | 创建时间 | 持续天数 | 优先级 |
|---|---|---|---|---|
| [#1185](https://github.com/moltis-org/moltis/issues/1185) Apple Container 沙箱识别 Bug | Bug | 2026-08-08 | 1 天 | 🔴 高（新增且无修复） |
| ~~[#1096](https://github.com/moltis-org/moltis/issues/1096)~~ Docker 文件工具 Bug | Bug | 2026-06-03 | 已关闭 | ✅ 已闭环 |
| ~~[#1105](https://github.com/moltis-org/moltis/pull/1105) Docker 沙箱回退修复~~ | PR | 2026-06-05 | 已关闭 | ✅ 已闭环 |

**维护者建议**：
- 重点响应 [#1185](https://github.com/moltis-org/moltis/issues/1185)，鉴于 Apple Container 是 macOS 上 Docker Desktop 的替代方案，受众面较广；
- 考虑将 [#1105](https://github.com/moltis-org/moltis/pull/1105) 中沉淀的回退策略与回归测试模板抽离为内部规范，以便快速应对未来同类问题。

---

> **报告说明**：本日报基于 GitHub 公开数据生成，仅反映 2026-08-09 前后 24 小时的仓库动态。如需更长期的趋势分析，请结合历史数据综合判断。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报
**日期：2026-08-09**

> 📌 **说明**：用户提供的数据均来自 `agentscope-ai/QwenPaw` 仓库（与 `CoPaw` 同源），本期日报基于该仓库过去 24 小时的实际 GitHub 活动生成。

---

## 1. 今日速览

QwenPaw 仓库今日保持**高强度迭代节奏**，Issues 与 PRs 合计更新 69 条（19 Issues + 50 PRs），但**未发布任何新版本**，社区仍处于 `v2.1.0-beta.2` 的内测磨合期。Bug 报告密度显著上升，尤其集中在 **macOS Desktop（Tauri）**、**MCP 协议可靠性**、**Windows 安装/升级流程**以及 **Gemini / DeepSeek 等第三方 Provider 兼容性**四大方向。整体健康度评估：**中等偏紧**——缺陷数量多但维护者响应迅速，已有多个 Bug 配套修复 PR 进入合并通道。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。

当前最新公开版本仍为近期迭代中的 `v2.1.0-beta.2`（见 [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811)、[#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814)、[#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) 等多份报告所引用版本）。建议关注未来 1–2 周内是否合并累积修复后发布 `v2.1.0-beta.3` 或 RC。

---

## 3. 项目进展

今日仅有 3 个 PR 进入**已合并/已关闭**通道（其余 47 个 PR 仍 OPEN），其中 2 个为问题修复，1 个为长期 CPU 占用报告的归档关闭：

| PR | 状态 | 影响范围 | 链接 |
|---|---|---|---|
| [#6836](https://github.com/agentscope-ai/QwenPaw/pull/6836) **fix(mcp): wire read_timeout_seconds into MCP SDK ClientSession** | CLOSED（合并） | 修复 MCP 流读取超时未真正生效的问题，对应社区报告 [#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822) 中"MCP 连接瞬断导致会话永久阻塞"的根因之一 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6836) |
| [#6835](https://github.com/agentscope-ai/QwenPaw/pull/6835) **fix(llm): resolve KeyError '__aiter__' during auto-title generation** | CLOSED（合并） | 修复非流式 Provider（如 Gemini）返回 `dict` 字符串导致 `consume_model_response` 抛 `KeyError`，使 Chat 自动标题生成恢复可用；对应 [#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813) | [→](https://github.com/agentscope-ai/QwenPaw/pull/6835) |
| [#4558](https://github.com/agentscope-ai/QwenPaw/issues/4558) **Bug: Abnormally high CPU usage during long text output** | CLOSED（Issue 归档） | 该 Issue 自 2026-05-20 提出，今日被关闭。鉴于 [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) 仍报告 Console 空闲 ~20% CPU（无限 CSS 动画问题），推测已通过 [#6834](https://github.com/agentscope-ai/QwenPaw/pull/6834) 的 IntersectionObserver 方案覆盖 | [→](https://github.com/agentscope-ai/QwenPaw/issues/4558) |

**总体进度**：MCP 稳定性与 LLM 适配层获得实质修复，前端渲染性能问题进入 PR 阶段。下一步关注 47 个 OPEN PR 的合并节奏。

---

## 4. 社区热点

按评论数与互动量排序，最受关注的 Issue 集中在 **Docker 部署可用性**、**Provider 兼容性** 与 **Session 状态机正确性**：

| 排名 | Issue / PR | 评论数 | 关注点 |
|---|---|---|---|
| 🥇 | [#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782) **2.0.1 Docker 版本插件/应用市场始终提示维护中** | 9 | Docker 用户**核心功能不可用**，影响范围广（Docker 部署是生产化最常用方式） |
| 🥈 | [#6811](https://github.com/agentscope-ai/QwenPaw/issues/6811) **OpenAI Responses 续接摘要忽略 `disable_thinking`** | 5 | Scroll 摘要路径在 OpenAI Responses 上同时存在功能性与错误处理两类缺陷 |
| 🥉 | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) **请求加入火山引擎 Agent Plan 与小米 MiMo Standard API** | 5 | 反映**国产模型生态整合诉求** |
| 4 | [#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820) **前端 UI 不实时显示模型输出/工具调用/思考过程** | 4 | 用户体验痛点，疑似流式渲染链路问题 |
| 5 | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) **macOS 上 SQLite WAL 打开崩溃 SIGBUS** | 3 | 严重崩溃，影响 macOS 本地历史数据可访问性 |

**诉求洞察**：用户对**流式体验完整性**（#6820）、**国产模型与平台覆盖**（#6490）以及**云端镜像可用性**（#6782）呼声最高，前两者直接关系留存与转化。

---

## 5. Bug 与稳定性

按严重程度排序，并标注是否已有对应修复 PR：

### 🔴 P0 - 崩溃 / 数据不可用
- **[#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814)** macOS 上打开 Scroll `history.db`（WAL 模式）触发 `SIGBUS (FS pagein 22)`。  
  状态：**无对应 PR**。需维护者排查 SQLite WAL 头读取在 macOS 14+ 上的兼容性。
- **[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)** Docker 2.0.1 插件/应用市场功能不可用。  
  状态：**无对应 PR**。疑似容器内网络或签名校验路径异常。

### 🟠 P1 - 严重功能缺陷
- **[#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820)** 前端不实时显示模型输出，全部结束后才出现。  
  状态：**无对应 PR**，但与 [#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828) 共享前端渲染链路。
- **[#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822)** streamable HTTP MCP 瞬断后自动重连失败，会话永久阻塞。  
  状态：**已部分修复** —— [#6836](https://github.com/agentscope-ai/QwenPaw/pull/6836) 修复了 timeout 未传递至 ClientSession 的根因；[#6825](https://github.com/agentscope-ai/QwenPaw/pull/6825) 进一步补充超时配置接入。
- **[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)** Windows 升级未终止占用安装目录的进程（NM host 锁文件等），导致 `python.exe`/`VCRUNTIME140.dll` 写入失败。  
  状态：**无对应 PR**。
- **[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)** 对话中助手消息结束时间显示异常（实际 2min 显示为几秒）。  
  状态：**无对应 PR**。

### 🟡 P2 - 一般缺陷
- **[#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828)** Console 空闲时 CSS 动画持续重绘，CPU ~20%。  
  状态：**已修复 PR 开放中** —— [#6834](https://github.com/agentscope-ai/QwenPaw/pull/6834) `fix(console): pause offscreen infinite animations`。
- **[#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831)** macOS Desktop 本地 Whisper 找不到 Homebrew ffmpeg（PATH 不含 `/opt/homebrew/bin`）。  
  状态：**无对应 PR**。
- **[#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)** Gemini Provider 发送带 `$schema` 的工具 schema 触发 Google API 拒绝。  
  状态：**无对应 PR**。
- **[#6821](https://github.com/agentscope-ai/QwenPaw/issues/6821)** thinking-mode 模型（DeepSeek V4）多轮对话 `reasoning_content` 未回传，400 错误。  
  状态：**无对应 PR**。
- **[#6813](https://github.com/agentscope-ai/QwenPaw/issues/6813)** `consume_model_response` 抛 `KeyError: '__aiter__'`（chat 自动标题失败）。  
  状态：**已修复** —— [#6835](https://github.com/agentscope-ai/QwenPaw/pull/6835)。
- **[#6756](https://github.com/agentscope-ai/QwenPaw/issues/6756)** `run_tool_batch` 报 `No toolkit available in current context`。  
  状态：**已关闭**（修复已合入或关闭原因待核实）。
- **[#6819](https://github.com/agentscope-ai/QwenPaw/issues/6819)** Channel 工具在需要审批时未提示。  
  状态：**已部分修复 PR 开放中** —— [#6833](https://github.com/agentscope-ai/QwenPaw/pull/6833) `fix(approvals): pass channel routing fields in driver gate`。
- **[#6838](https://github.com/agentscope-ai/QwenPaw/issues/6838)** 子代理无法自动切换模型 + 共享 workspace 致 web 端配置混乱。  
  状态：**无对应 PR**。
- **[#6569](https://github.com/agentscope-ai/QwenPaw/pull/6569)** Detached TTY 下 `print()` 抛 EIO/EPIPE。  
  状态：**修复 PR 开放中**（[PR #6569](https://github.com/agentscope-ai/QwenPaw/pull/6569)）。

**稳定性观察**：Bug 修复链路响应良好，约 35% 的今日 Bug 已对应到在审 PR；macOS Desktop 与 MCP 仍是**最大风险面**。

---

## 6. 功能请求与路线图信号

| 请求 | 提议者 | 对应 PR / 可行性 | 链接 |
|---|---|---|---|
| **新增火山引擎 Agent Plan & 小米 MiMo Standard API 为内置 Provider** | TinyBai | 高可行性，符合"国产模型覆盖"路线 | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| **AI 审批时附带一句审批用途描述**（便于用户判断） | wwth8819 | 中等，UX 改进，与现有 approval gate 兼容 | [#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) |
| **删除对话时可选清理 agent 产生的临时文件** | gy23rm | 中等，需补充 `write_file/edit_file` 的产物追踪 | [#6827](https://github.com/agentscope-ai/QwenPaw/issues/6827) |
| **模型自动 fallback + 冷却机制**（rate limit / timeout / 服务异常） | 社区 | **已有 PR** [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659)，高优先级合并候选 | [#2199](https://github.com/agentscope-ai/QwenPaw/issues/2199) / [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) / [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089) |
| **OpenAI Responses prompt caching 支持**（GPT-5.6+） | wananing | **已有 PR** [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668)，对齐官方 Responses API 能力 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6668) |
| **SSE 结构化 run outcome（自动化 API 集成）** | hehuang139 | **已有 PR** [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930)，面向 Java/外部服务驱动场景 | [→](https://github.com/agentscope-ai/QwenPaw/pull/5930) |
| **替换 Tavily 为 AnySearch 作为内置 Web Search** | anysearch-ai | **已有 PR** [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817)，需评估供应商资质 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6817) |

**路线图信号**：模型 Provider **多源化 + fallback 韧性** 与 **第三方生态整合** 是当前最清晰的方向；UX 层的"审批描述化"与"对话级临时文件清理"呼声也较高。

---

## 7. 用户反馈摘要

从 Issues/PR 摘要中提炼真实用户场景：

- **😣 Docker 部署用户最受伤**（[#6782](https://github.com/agentscope-ai/QwenPaw/issues/6782)）：插件/应用市场持续"维护中"，意味着**容器化生产部署几乎不可用**，直接影响团队级落地。
- **😣 流式体验退化**（[#6820](https://github.com/agentscope-ai/QwenPaw/issues/6820)）：用户期望"边生成边展示"，实际"全部完成才出现"，对工具调用与思考过程的可见性是核心 UX 期待。
- **😣 macOS 桌面版双痛点**（[#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814)、[#6828](https://github.com/agentscope-ai/QwenPaw/issues/6828)、[#6831](https://github.com/agentscope-ai/QwenPaw/issues/6831)）：SQLite WAL 崩溃 + 空闲 CPU 飙高 + ffmpeg 找不到，反映**桌面端打包对 macOS 系统特性适配粗糙**。
- **😣 Windows 升级体验**（[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)）：浏览器扩展 NM host 等进程锁文件导致 NSIS 安装器连续报错 4+ 项，**安装健壮性**需加强。
- **😊 国产模型生态呼声高**（[#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490)）：用户主动贡献 Provider 接入方案，体现社区**共建意愿**。
- **😐 MCP 自动化用户**（[#6822](https://github.com/agentscope-ai/QwenPaw/issues/6822)）：依赖 streamable HTTP MCP 做工具扩展，瞬断重连失败导致会话卡死，说明**长连接鲁棒性**是 Agent 平台的关键质量指标。

---

## 8. 待处理积压

| 项 | 类型 | 创建时间 | 现状 | 链接 |
|---|---|---|---|---|
| [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) **火山引擎 Agent Plan + 小米 MiMo Provider** | Feature | 2026-07-27 | 已 13 天，仅 5 条评论，**无 PR 进展**，但与国产化路线强相关 | [→](https://github.com/agentscope-ai/QwenPaw/issues/6490) |
| [#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) **SSE 结构化 run outcome** | PR | 2026-07-10 | 已 30 天未合并，关联 Java 等外部服务调用

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-08-09**

---

## 一、今日速览

ZeroClaw 今日保持高度活跃，过去 24 小时内共产生 50 条 Issues 更新与 50 条 PR 更新，整体节奏未见明显放缓。安全、通道（channels）与运行时（runtime）相关议题占据主要流量，反映出项目当前仍处于多线并进的工程化收尾阶段。本日没有新版本发布，但 RFC 流程优化、硬件 crate 合并、Anthropic 服务端回退识别等数项重要工作取得了实质性进展。需关注的是，多个安全相关 P1 Bug（如 `forbidden_paths` 失效、应急停止状态文件不可达）集中暴露，提示当前代码在策略执行层面存在系统性的"声明与实现脱节"问题。整体来看项目健康度尚可，但安全债与可观测性短板需要维护者重点分配精力。

---

## 二、版本发布

本周期内**无新版本发布**。

最近一次相关构建工作集中在 CI 演练（#9785 scoop、#9787 aur）与 RFC 流程精简（#9496），尚未形成可发布的稳定快照。鉴于目前主线同时存在 `anthropic` provider 计费为 0（#9816）等数据可靠性问题，发布应谨慎推进。

---

## 三、项目进展

今日 PR 合并/关闭数较低（2 条关闭），但其中关键节点对项目方向影响显著：

- **[#9494 关闭]** `fix(sop): drive cron-started headless runs` — 由 @Lusitaniae 起草、@pedrogomesyoo 接力维护。该 PR 解决了 cron 触发的无头 SOP 运行被卡在 `ExecuteStep` 状态的长期缺陷，是 SOP 调度闭环的关键一步。  
  👉 <https://github.com/zeroclaw-labs/zeroclaw/issues/9494>

- **[#9841 开启]** `fix(sop): drive headless SOP runs, and close the five defects found reviewing #9494` — 由 @JordanTheJet 在 #9494 公开交接后做的继续性分支，已就地修复 #9494 评审中发现的 5 个新缺陷。这是当日的"焦点接力" PR。  
  👉 <https://github.com/zeroclaw-labs/zeroclaw/issues/9841>

- **[#9798 关闭]** `docs(sop): document which agent executes SOP steps` — 已被 #9841 取代，但其内容已并入后续修复。  
  👉 <https://github.com/zeroclaw-labs/zeroclaw/issues/9798>

整体判断：项目在 SOP 调度、Anthropic 服务端回退识别（#9265/#9266/#9268/#9272 栈）、webhook 鉴权网关（#9744）等方向均有稳步推进，处于"多 PR 串联落地"阶段，提交者集中度高（@JordanTheJet、@IftekharUddin 承担了多数高质量 PR），存在维护者集中风险。

---

## 四、社区热点

按评论数排序的活跃议题：

| 排名 | 编号 | 标题 | 评论数 | 类别 |
|------|------|------|--------|------|
| 1 | [#8043](https://github.com/zeroclaw-labs/zeroclaw/issues/8043) | RFC: Retire the standalone aardvark-sys crate | 11 | RFC（已关闭） |
| 2 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: Workspace-relative forbidden path patterns + .zeroclawignore | 11 | RFC（高风险） |
| 3 | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | System prompt tool-availability mismatch across entry points | 10 | P1 Bug |
| 4 | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | Batch Telegram media groups into one multimodal turn | 6 | P2 Bug |
| 5 | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | Add OpenAI-compatible chat completions endpoint | 6 | Feature |

**诉求解读：**
- **基础设施精简化（#8043、#9803、#9853）**：社区希望剥离低价值的独立硬件 crate，以便 crates.io 发布并降低维护面；#9853（删除 `aardvark-sys` 与 `zeroclaw-robot-kit`）已进入 PR 阶段。
- **安全语义完备（#8424、#9815、#9486、#9825）**：用户对 `forbidden_paths` 失效、误删 Solana 公开地址、误屏蔽公链地址的强烈反馈，说明当前策略存在"配置可写、运行不可信"的信任落差。
- **互操作性（#8550）**：缺少 OpenAI 兼容端点让 Open WebUI、LobeChat 等客户端难以接入，是显著生态壁垒。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 S0 / 数据安全风险
- **[#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855)** Matrix 通道跳过 `.well-known/matrix/client` 委派解析，可能导致 homeserver 错连与中间人风险。**暂无 fix PR**，今日新开。

### 🔴 S1 / 工作流阻塞
- **[#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559)** Web 仪表盘聊天窗口失焦时 agent 任务被判定为中断、循环停止。**暂无 fix PR**。
- **[#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035)** Docker Compose 网关在端口已发布的情况下仍仅绑定 loopback，"Connection refused"。**暂无 fix PR**。

### 🟠 S2 / 行为退化
- **[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054)**（P1, in-progress）系统提示中"工具可用性"在多入口（channels / gateway / WebSocket / multimodal / /think）与 per-turn 实际工具集不一致。**已识别为 #7756/#8053 后续**，需多入口共同修复。
- **[#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731)**（P1, in-progress）stdio MCP 子进程未被正确回收，逐步演化为僵尸进程。
- **[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)**（P1, in-progress）`high_entropy_tokens=false` 仍无法在 channel 路径阻止 Solana 地址被脱敏。
- **[#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)**（P1, in-progress）`emergency stop` 仅存在于 CLI 状态文件，所有运行时路径都未读取，存在"应急停止假象"的安全债务。
- **[#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387)**（P1, in-progress）交互式审批在 Telegram/Slack/Lark/Matrix 接受任意成员响应，存在提权风险。
- **[#9815](https://github.com/zeroclaw-labs/zeroclaw/issues/9815)**（P1, accepted）`forbidden_paths` 在 `allowed_roots` 与工作区路径下完全不可达。
- **[#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816)**（P1, accepted）`anthropic` provider 上报 `cost_usd = 0`，日/月预算上限永远无法触发。
- **[#9573](https://github.com/zeroclaw-labs/zeroclaw/issues/9573)**（P1, accepted）同一 provider 的多个别名时成本定价查询失败。
- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)**（P1, in-progress）CLI 创建的 cron 任务输出始终为 `delivery.mode = "none"`，且 `ok` 状态掩盖丢失。
- **[#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)**（P1, accepted）外发泄露检测把公开区块链地址当作高熵凭据，造成支付 URL 不可达。

### 🟡 S3 / 轻微问题
- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)**（P2, in-progress）Telegram 媒体组被分散成多次 LLM 调用。
- **[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410)**（P2, accepted）channel 任务缺少一等公民的"故意不回复"结果。
- **[#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)**（P2, in-progress）Telegram "正在输入" 状态在审批等待期间持续显示。
- **[#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202)**（P2, in-progress）Linux 上 `zeroclaw desktop` 误判 AppImage 未安装。
- **[#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834)**（P1, accepted）`zeroclaw-runtime` 测试因共享进程全局状态间歇性失败。

**整体观察**：P1 安全/可观测性相关 Bug 占当日焦点约 60%，多数尚未配套 fix PR（尤其是 #9815、#9816、#9825、#9855），需要维护者本周内集中审阅。

---

## 六、功能请求与路线图信号

| 请求 | 编号 | 已对应 PR？ | 路线图概率评估 |
|------|------|-----------|---------------|
| OpenAI 兼容 chat completions 端点 | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) | 暂无 | 高（生态壁垒明显，社区呼声高） |
| Telegram 每回合独立消息 | [#8445](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) | 暂无 | 中 |
| Telegram 组群共享会话（`per_user_session` toggle） | [#9772](https://github.com/zeroclaw-labs/zeroclaw/issues/9772) | **已开 PR** | 高 |
| Telegram 流式 draft 中展示工具调用进度 | [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | 暂无 | 中 |
| MCP `tools/call` 内嵌资源 blob 接入 | [#9179](https://github.com/zeroclaw-labs/zeroclaw/issues/9179) | 暂无 | 中 |
| 简化默认 Web 工具面（`web_fetch` + `web_research` + `http_request`） | [#9824](https://github.com/zeroclaw-labs/zeroclaw/issues/9824) | 暂无 | 中高（已有 tracker 标识） |
| `zeroclaw status` 走 CLI i18n | [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) | 暂无 | 低 |
| RFC 流程精简 | [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496) | 暂无 | 中（治理改进） |
| Workspace 相对 `forbidden_paths` + `.zeroclawignore` | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 暂无 | 中高 |

已有明确 PR 配套的：Telegram 组群共享会话（#9772）、Anthropic 服务端回退全链路（#9265–#9272）、agent 自助配置（#9828）、SOP 闭环（#9841）。

---

## 七、用户反馈摘要

通过 Issue 评论可提炼的真实痛点：

1. **配置语义与运行时不一致**：多位用户（@bitsbyritik、@belumume、@koshak01）反映"文档承诺 = 配置文件写法 ≠ 实际生效"，尤其是 `forbidden_paths`、`high_entropy_tokens`、应急停止等安全相关配置，信任损耗明显。

2. **多入口体验分裂**：#8054 反映出 channels / gateway / WebSocket / multimodal / `/think` 多个入口的工具可用性与系统提示不一致，是 agent 使用体验的最大摩擦点。

3. **生态接入门槛**：Open WebUI、LobeChat、Herdr（#8337）等第三方客户端难以接入或需要专门适配；用户希望"少写胶水、多用现有生态"。

4. **可观测性与失败可见性**：cron 输出默认丢弃（#9340）、cost 显示 $0（#9816）、MCP 僵尸进程（#8731）等问题让用户"看到的都是成功，背后却已经失败"——这是项目当前最大的可用性短板。

5. **审批 / 安全操作缺乏 UX 细节**：#9387 任意成员可响应审批、#9656 等待审批期间误导用户、#8410 无显式"故意不回复"结果，反映安全 UX 与业务 UX 未充分解耦。

---

## 八、待处理积压

以下议题/请求长时间未关闭，建议维护者优先评估：

| 编号 | 创建日 | 状态 | 关注点 |
|------|--------|------|--------|
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 2026-04-08 | in-progress | Telegram 媒体批处理已超过 4 个月 |
| [#6663](https://github.com/zeroclaw-labs/zeroclaw/issues/6663) | 2026-05-14 | in-progress | 流式 draft 工具调用进度展示逾 2 个月 |
| [#7099](https://github.com/zeroclaw-labs/zeroclaw/issues/7099) | 2026-06-02 | in-progress | i18n 化 status 输出，等待 2 个月余 |
| [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 2026-06-28 | needs-author-action | RFC 高风险，已 aardvark-sys 关闭但等价提案未动 |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 2026-07-28 | in-progress | Solana 误脱敏已有 12 天，仍未合并修复 |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | 2026-07-26 | in-progress | 应急停止 14 天未落地 |
| [#9035](https://github.com/zeroclaw-labs/zeroclaw/issues/9035) | 2026-07-13 | in-progress | Docker Compose 绑定回环逾 27 天 |

**集中提示**：P1 安全债（#9815、#9816、#9825、#9855、#9486、#9390、#9387）合计 7 项本日仍未配套 fix PR，建议本周内启动一个"安全周"集中清理。

---

> 报告生成于 2026-08-09，基于 ZeroClaw GitHub 仓库公开数据。如需进一步聚焦某一主题（如安全债专题、SOP 调度栈进度），可继续追踪。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*