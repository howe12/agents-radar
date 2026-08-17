# OpenClaw 生态日报 2026-08-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-17 00:53 UTC

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
**日期：2026-08-17** · **数据来源：GitHub (github.com/openclaw/openclaw)**

---

## 1. 今日速览

OpenClaw 仓库今日保持极高活跃度：过去 24 小时共发生 500 条 Issue 更新与 500 条 PR 更新，新创建/活跃 Issue 460 条、关闭仅 40 条（关闭率 **8%**），PR 合并/关闭 106 条（关闭率 **21.2%**）。Issue 关闭率显著低于 PR，表明**社区问题累积速度快于维护者处理速度**，尤其是多个 P1 严重度、标记为"diamond lobster"的事件循环与会话状态类 Bug 长期未被根治。今日无传统意义上的软件版本发布，唯一的新增"Release"实际上是一份 PR #124528 的 Gateway CPU Profile 证据归档，并非可部署的二进制发行版。维护者 `steipete` 今日集中提交 8+ 个 PR，覆盖安全、UI、Gateway 性能、消息投递等多个领域，是当前主要推动力。

---

## 2. 版本发布

**今日未发布新的软件版本。** 仓库仅新增了一个名为 `pr-124528-profiles` 的附件型 Release，内容为来自 PR [#124528](https://github.com/openclaw/openclaw/pull/124528) 的 bounded three-node / twelve-concurrent-turn Gateway 性能剖析文件（CPU before/after 快照），用于支持事件循环热点对比。该 Release 不能作为版本升级使用。

> 维护者建议：如需在生产环境获取最新可部署版本，请使用 `npm install -g openclaw@latest`，并关注正式 npm dist-tag。

---

## 3. 项目进展

### 3.1 今日已合并/关闭的关键 PR

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| #116489 | feat(security): 安装策略警告需显式确认 | 安全边界、可安装性 | [#116489](https://github.com/openclaw/openclaw/pull/116489) |
| #124837 | fix(channels): 目标缺失时 DM 回复回到发送者 | 频道通用、对端 Reef 路由 | [#124837](https://github.com/openclaw/openclaw/pull/124837) |
| #124838 | fix(media): 图片抓取缓冲上限绑定到 image cap | 资源边界、媒体优化路径 | [#124838](https://github.com/openclaw/openclaw/pull/124838) |
| #124787 | fix(gateway): worktree 命名与标题派发 | 控制面板、DX | [#124787](https://github.com/openclaw/openclaw/pull/124787) |
| #124823 | fix(ci): 仅渲染聚合 QA 证据 | CI、QA 流水线 | [#124823](https://github.com/openclaw/openclaw/pull/124823) |
| #124715 | chore(ui): 刷新 Control UI 语言包 | 国际化 | [#124715](https://github.com/openclaw/openclaw/pull/124715) |

### 3.2 重点新推进中的 PR

- **PR #124858** `fix(security): 防止已批准脚本在执行前被篡改` —— 直接修复 [#124738](https://github.com/openclaw/openclaw/issues/124738)，属安全敏感路径，必看。链接：[#124858](https://github.com/openclaw/openclaw/pull/124858)
- **PR #124891** `fix(gateway): 防止控制面轮询停滞` —— 解决多秒级 UI/RPC 暂停，已附带 🎥 视频证据。链接：[#124891](https://github.com/openclaw/openclaw/pull/124891)
- **PR #124773** `fix(reply): 终态投递结果统一上报一次` —— 跨 Discord/Matrix/MSTeams/Signal/Slack/Telegram/Zalo/Feishu 八大频道，覆盖 #87561 提出的"投递最终回执语义"诉求。链接：[#124773](https://github.com/openclaw/openclaw/pull/124773)
- **PR #124864** `feat: 云端 worker profiles 与机型选择` —— 给运营方带来 Operator UX 改进。链接：[#124864](https://github.com/openclaw/openclaw/pull/124864)
- **PR #124910** `fix: 跨 agent runtime 投递请求图片制品` —— 修复合 agent 中"完成回复但未附带图片"。链接：[#124910](https://github.com/openclaw/openclaw/pull/124910)
- **PR #124947** `fix: plugin tools 在 Codex 与受限 profile 中消失` —— 补齐 `preparedModelRuntime` 传递链。链接：[#124947](https://github.com/openclaw/openclaw/pull/124947)
- **PR #115138** `perf(sqlite): 在本地文件系统库启用 mmap` —— 性能改进，修复 [#112758](https://github.com/openclaw/openclaw/issues/112758)。链接：[#115138](https://github.com/openclaw/openclaw/pull/115138)
- **PR #106110** `feat(goals): 空闲时继续活动 session goals` —— 目标驱动行为持续化（L 规模变更）。链接：[#106110](https://github.com/openclaw/openclaw/pull/106110)

### 3.3 项目推进评估
- ✅ **安全姿势得到加强**：#116489 与 #124858 构成双层（安装期确认 + 运行时脚本完整性校验）。
- ✅ **跨频道一致性进展**：#124773 一次性覆盖了八个频道的"最终回执"语义。
- ✅ **DX/Cloud 体验**：#124864 给出 Profile & machine selection。
- ⚠️ **关闭/合并速率仍低于 Issue 涌入速率**，需关注。

---

## 4. 社区热点

> 今日 PR 评论数据缺失，故本节主要基于 Issue 评论数；前 5 名话题覆盖"静默失败"、"消息丢失"、"成本管控"、"会话引导"、"工具路由"五条主线索。

| 排名 | Issue | 评论 | 标签 | 摘要 |
|---|---|---|---|---|
| 1 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | **97**（已关闭） | P1, message-loss | "静默回复失败"在前序 #116277 关闭后继续复发，今日正式关闭 |
| 2 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 31 | P1, diamond lobster | Subagent 完成事件静默丢失——无重试、无通知、无超时重启 |
| 3 | [#42475](https://github.com/openclaw/openclaw/issues/42475) | 26 | P2, off-meta tidepool | 在网关层强制 per-agent 成本预算（每日/每月上限） |
| 4 | [#48003](https://github.com/openclaw/openclaw/issues/48003) | 21 | P1, diamond lobster | `messages.queue.mode: "steer"` 模式下消息无法 mid-turn 注入 |
| 5 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 19 | P2, off-meta tidepool | 分层 bootstrap 文件加载（控制上下文预算） |

**诉求共性提炼**：
1. **"静默失败"是头号痛点**：用户最关心"为什么我的消息发送出去没有回应"。#121058 (97)、#44925 (31)、#92433（已修）、#92433 是该线索的具象化。
2. **"Agent 编排可靠性"是第二大诉求**：#48003 steer 行为、#44925 subagent 丢失、#50165 提前报告完成，都反映对**多 agent 协作**确定性的需求。
3. **运营可观测与可控**：#42475 (成本)、#45565 (生命周期日志频道)、#87561 (投递最终回执) 均为运维侧诉求。

> 注：原数据中所有 PR 的 `评论数` 字段均为 undefined，本次日报无法基于 PR 互动排序，已在方法学上标注。

---

## 5. Bug 与稳定性

按严重度（lionfish rating：`🦞 diamond lobster` > `🐚 platinum hermit` > `🦪 silver shellfish` > `🦐 gold shrimp`）排列今日最值得关注的 Bug：

### 5.1 严重（diamond lobster）
| Issue | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent 完成消息静默丢失 | 长期开放 | ❌ 待修复 |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer 模式不能 mid-turn 注入 | 长期开放 | ❌ 待修复 |
| [#87561](https://github.com/openclaw/openclaw/issues/87561) | 跨频道最终回执投递语义缺失 | 长期开放 | ✅ [#124773](https://github.com/openclaw/openclaw/pull/124773) 推进中 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 会话投影重建 livelock | 开放 | ❌ |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 SQLite 转写清理阻塞事件循环 | 开放 | ❌ |
| [#45494](https://github.com/openclaw/openclaw/issues/45494) | LLM 长时间 500 应触发 fast-fail 而不是耗尽 timeout | 开放 | ❌ |
| [#46786](https://github.com/openclaw/openclaw/issues/46786) | `tools.elevated.enabled` 使所有 exec 走 gateway | 开放 | ❌ |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后旧 hash bundle 残留 | 开放 | ❌ |
| [#22438](https://github.com/openclaw/openclaw/issues/22438) | Tiered bootstrap 加载（off-meta） | 开放 | ❌ |
| [#90361](https://github.com/openclaw/openclaw/issues/90361) | `memory_search` 间歇性报 "index metadata is missing" | 开放（已 local hot-fix） | ❌ |

### 5.2 高（platinum hermit

---

## 横向生态对比

# 个人 AI 助手与智能体开源生态横向对比报告

**数据日期：2026-08-17 · 覆盖 14 个项目（10 活跃 + 3 沉寂 + 1 占位）**

---

## 一、生态全景

当前个人 AI 助手 / 自主智能体开源生态正处于"**安全底座补课 + 协议对等化**"的双轨过渡期：一方面，绝大多数项目已度过 0.x 早期功能爆发阶段，普遍面临消息静默丢失、插件越权、Token 失控等深层稳定性问题，安全加固类 PR 在多个项目集中涌现（PicoClaw、LobsterAI、Moltis、OpenClaw）；另一方面，社区讨论重心明显从"功能补齐"转向"协议 RFC 与生态兼容"——ZeroClaw 的 Chat Completions/Attachment RFC、CoPaw 的多 agent reasoning effort、PicoClaw 的 MCP OAuth 2.1 都是这一信号的具象化。整体呈现"头部项目负重迭代、长尾项目沉寂休眠"的 M 型活跃度分布，外部贡献者入口向"首次贡献者友好"项目集中。

---

## 二、各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 关闭/合并 | 新 Release | 健康度 | 阶段判断 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 460 活跃 / 40 关闭 | 500 更新 / 106 合并 | 146 总 | ❌ 仅归档 Release | 🟡 积压加重 | 巨型项目负重迭代 |
| **ZeroClaw** | 46 活跃 / 2 关闭 | 46 待合并 / 4 关闭 | 6 | ❌（基线 0.8.4） | 🟡 RFC 主导 | 协议标准化冲刺 |
| **NanoBot** | 11 开放 / 4 关闭 | 499 待合并 / 1 关闭 | 5 | ❌ | 🔴 治理堵塞 | PR 海啸型 |
| **Hermes Agent** | 50 活跃 / 0 关闭 | 47 待合并 / 3 关闭 | 3 | ✅ v0.20.2 (08-16) | 🟡 大版本刚发 | Desktop 打磨期 |
| **NanoClaw** | 1 关闭（误开）| 19 待合并 / 13 关闭 | 13 | ❌ | 🟢 单点冲刺 | 架构收敛期 |
| **CoPaw** | 9 更新 | 9 全部待合并 | 0 | ❌（基线 v2.1.0）| 🟡 评审滞后 | 首次贡献者涌入 |
| **LobsterAI** | 10（全部 stale）| 8 待合并 / 9 关闭 | 9 | ❌ | 🟡 清理期 | 安全集中加固 |
| **Moltis** | 2 新开 | 1 待合并 / 7 关闭 | 7 | ❌ | 🟢 修复日 | 工程加固期 |
| **PicoClaw** | 3 更新（多 stale）| 5 更新 | 1 | ❌ | 🔴 沟通低迷 | 功能维护期 |
| **IronClaw** | 1 新开 | 7 待合并 / 2 关闭 | 2 | ❌ | 🟢 稳定 | 例行维护+打磨 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | 0 | — | ⚫ 沉寂 | 占位 / 早期 |

**关键观察**：
- **真正的 Release 产出为 1 项**（Hermes Agent v0.20.2），14 个项目中有 13 个 24h 内无版本动作。
- **关闭/合并速率最高**：NanoClaw（13）、LobsterAI（9）、Moltis（7），三者均处于"内部集中冲刺"模式。
- **最严重的积压信号**：NanoBot 499 个待合并 PR、ZeroClaw 46 待合并 / 11 个 high-risk PR、CoPaw 9 个待合并中 8 个来自首次贡献者（合并动作为零）。

---

## 三、OpenClaw 在生态中的定位

### 与同类项目对比维度

| 维度 | OpenClaw | NanoBot | Hermes Agent | ZeroClaw |
|---|---|---|---|---|
| **每日 Issue 量级** | ~500 | ~15 | ~50 | ~48 |
| **每日 PR 量级** | ~500 | ~500（多为 rebase）| ~50 | ~50 |
| **核心维护者密度** | 极高（steipete 一人单日 8+ PR）| 低 | 中 | 中 |
| **频道覆盖广度** | 8 大频道（DM/Matrix/Discord/Slack 等）| Telegram/Matrix | 多平台 | Telegram 等 |
| **Issue 关闭率** | **8%**（明显低于 PR 的 21.2%）| 27% | **0%**（24h）| 4% |
| **版本节奏** | 无正式发版 | 无 | 日更级 | 0.8.4 长基线 |

### 优势与差异

1. **规模与覆盖度领先**：单日 500+ Issue/PR 量级是同类项目 10 倍量；八大频道一致性由 #124773 一次性收敛，体现"巨型项目"的工程组织能力。
2. **维护者单点驱动**：steipete 一日提交 8+ PR 覆盖安全、UI、Gateway、消息投递，**效率高但治理风险集中**——这与 NanoClaw 的 `gavrielc 单人主导 60%+` 模式形成两类典型"单点维护"代表。
3. **痛点最"产品化"**：#87561（跨频道最终回执）、#42475（成本预算网关）、#45565（生命周期日志）显示 OpenClaw 已进入"运营可观测与可控"阶段，比 ZeroClaw 的 RFC 阶段更靠近生产可用。
4. **劣势**：8% 的 Issue 关闭率是全表最低之一，说明**问题累积速度已超过维护者处理能力**，属"健康度红线"。

---

## 四、共同关注的技术方向

### 4.1 静默失败 / 消息丢失（最高频共性）
- **OpenClaw**：[#121058]（97 评论）、[#44925]、[#48003]
- **Hermes Agent**：[#53480]（更新打断会话）、[#87652]（Desktop 重复 WS）
- **NanoClaw**：[#3254]（上下文行挤掉任务行）、[#3255]（多 bot 归属歧义）
- **Moltis**：[#1205]（Heartbeat 忽略配置）

### 4.2 Token 经济性与可观测性
- **NanoBot**：[#2463]（prompt 缓存语义错位，4.5 个月）、[#5266]（百万级 token 无感消耗）
- **OpenClaw**：[#42475]（per-agent 成本预算网关）
- **Hermes Agent**：[#63009]（GPT-5.6 自动压缩阈值）

### 4.3 跨渠道 / 跨会话一致性
- **OpenClaw**：[#124773]（8 大频道终态回执统一）、[#124837]（DM 回退）
- **NanoClaw**：[#3284]（mid-turn 单一流式投递门）、[#3262]（DM app-context 规范化）
- **NanoBot**：[#5275]（Matrix reply in thread）
- **Moltis**：[#1147]（CalDAV RFC 4791 合规）

### 4.4 MCP / 插件生态深化
- **NanoBot**：[#5251] MCP Apps 主机、[#5298] schema 预算
- **PicoClaw**：[#3302] MCP OAuth 2.1
- **Moltis**：[#1204] MiniMax Code ACP agent 接入
- **ZeroClaw**：[#9126] 类型化配置校验、[#9582/#9584/#9137] 插件 egress 治理三连

### 4.5 安全纵深
- **PicoClaw**：SSRF 防御（#3322/#3323/#3324，5+ 渠道加固）
- **LobsterAI**：token 脱敏 + IPC 越权 + shell 协议白名单（#1831/#1832/#1833 同批落地）
- **Moltis**：[#1180] zip 路径穿越 + 模型路径硬编码
- **NanoBot**：[#5305] exec 白名单链式绕过（已修）
- **OpenClaw**：[#116489] 安装策略显式确认、[#124858] 脚本完整性校验

### 4.6 Cron / 调度器可靠性
- **NanoBot**：[#5373] 一次性失败即永久死亡（已修）
- **Hermes Agent**：[#87644] EMFILE 后 cron 永久停滞（P1 无修复）
- **CoPaw**：[#6471] APScheduler 空闲 misfire
- **OpenClaw**：[#124891] 控制面轮询停滞

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构选择 |
|---|---|---|---|
| **OpenClaw** | 全渠道 + 多 agent 编排的"全能助手" | 重度集成者、运营商 | 单体多频道、Gateway 中心化 |
| **NanoBot** | Token 高效 + Skill 平台 | 成本敏感型重度用户 | 强调 prompt caching 对齐 |
| **Hermes Agent** | Desktop-first 一体化体验 | 桌面端长期使用者 | 强 Desktop + Kanban 调度 |
| **NanoClaw** | 可插拔 Agent 框架 | 二次开发者、内部团队 | Hook / Interceptor 扩展点体系（A1-A8）|
| **ZeroClaw** | 协议对等 + 严格安全边界 | 企业 / 多租户场景 | WASM 插件 + 严格 egress 治理 |
| **CoPaw** | 跨 IDE 通用助手（含游戏开发场景） | 通用终端用户 + 插件方 | Provider 抽象 + 多 agent 路由 |
| **PicoClaw** | 轻量级多渠道桥接 | 嵌入式 / 资源受限场景 | 轻量、安全优先 |
| **LobsterAI** | 教育场景下的有道 AI 助手 | 国内 C 端用户 | IM 集成 + 中文场景优化 |
| **Moltis** | 自托管隐私优先的本地助手 | 隐私敏感个人用户 | Vault 加密 + CalDAV/RFC 合规 |
| **IronClaw** | 渠道 onboarding + 自动化触发 | 企业 Slack/Teams 用户 | 强渠道集成 + IronLoop 治理 |

---

## 六、社区热度与成熟度分层

### 🔥 高活跃迭代层（质量巩固期）
- **OpenClaw / Hermes Agent**：日更级 PR 量、v0.20.2 等正式版本仍在出，但**Issue 关闭率下行**（OpenClaw 8%、Hermes 0%），积压加剧
- **ZeroClaw**：治理型高活跃，46 Issue + 46 PR，RFC 占主导

### ⚡ 集中冲刺层
- **NanoClaw**：单日 13 个 PR 合并、gavrielc 主导的架构收敛期，**短期高产但单点风险**
- **Moltis**：典型"修复日"，7 PR 同日落地，安全/构建/Vault/CalDAV 多线并进

### 🟡 渐进改进层
- **NanoBot / LobsterAI / CoPaw**：安全加固与体验打磨为主，但**NanoBot 积压已达 6 个月量级**，CoPaw 首次贡献者 PR 等待风险高
- **PicoClaw / IronClaw**：低强度稳定维护，PR 流转依赖核心贡献者

### ⚫ 沉寂层
- **NullClaw / TinyClaw / ZeptoClaw**：24h 零活动，占位或早期阶段

---

## 七、值得关注的趋势信号

### 趋势 1：协议对等成为生态扩张瓶颈
**信号**：ZeroClaw Chat Completions RFC（22 评论）将 OpenAI 协议作为一等公民；OpenClaw #124773 统一 8 大频道回执语义；Moltis #1147 升级到 CalDAV RFC 4791；NanoBot 长期未合的 #1205 KV 缓存稳定化。
**启示**：智能体正在"协议标准化"阶段，未来 12 个月能提供 OpenAI-compatible / MCP / 标准化附件协议的助手将显著降低集成摩擦。

### 趋势 2：安全从"补漏"走向"默认安全架构"
**信号**：LobsterAI 一次性合并 3 个安全 PR（token 脱敏 / IPC 收窄 / shell 白名单）；ZeroClaw ADR-013 把 egress 策略作为插件安装前置；OpenClaw 双层（安装期确认 + 运行时完整性校验）；Moltis zip 路径穿越修复。
**启示**：对 AI 智能体开发者而言，**插件沙箱、出站策略、命令白名单应作为基础组件而非可选项**——这是"默认安全"理念在 Agent 领域的具象化。

### 趋势 3：可观测性与成本治理成为留存

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期：2026-08-17**

---

## 1. 今日速览

NanoBot 今日社区活动呈现"PR 大批量刷新、Issue 稳步推进"的特征：过去 24 小时内 PR 更新量高达 **500 条**（其中 499 条仍待合并，1 条已关闭），Issue 更新 15 条（11 条仍开放，4 条已关闭）。需要特别注意的是，绝大多数 PR 更新属于历史 PR 的 rebase/再激活，而非新增提案——其中多笔 PR 创建时间可追溯至 2026 年 2 月，但提交时间戳集中刷新至 8 月 16 日。整体而言，项目治理活跃度偏高，但**版本发布停滞**（无新 Release），反映出合入门槛或 CI 流水线可能存在瓶颈。社区对**Token 经济性、安全加固、MCP 生态扩展、Skills/Telegram 增强**四大方向关注最为集中。

---

## 2. 版本发布

⚠️ **无新版本发布。** 当前仓库 `main` 分支未在 24 小时内产出新 Tag 或 Release。建议维护者同步发版状态，尤其在已积累 499 个待合并 PR、且 #2463（架构级 prompt 一致性问题）讨论长达 4 个月的情况下。

---

## 3. 项目进展

### 3.1 今日关闭的 Issue（4 条）

| 编号 | 标题 | 类别 | 持续时长 |
|------|------|------|---------|
| [#2185](https://github.com/HKUDS/nanobot/issues/2185) | gemini-3-flash-preview 升级回归 | regression | ~5 个月 |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` 白名单绕过（安全） | Security | ~7 天 |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Matrix "reply in thread" 上下文 | channels/matrix | ~10 天 |
| [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron 调度器单次持久化失败后永久挂掉 | bug | ~3 天 |

### 3.2 今日关闭的 PR（1 条）

- [#4329](https://github.com/HKUDS/nanobot/pull/4329) — `feat(cli): add native TypeScript terminal UI` 被关闭，由 [#5406](https://github.com/HKUDS/nanobot/pull/5406) 替代并继承其提交历史。⚠️ **需关注 #5406 状态**：根据其说明，#4329 曾被"误标记为已合并"，`main` 分支被回滚，这意味着目前仓库内**并不存在该功能的实际代码**，需要等待 #5406 真正合入。

### 3.3 评估

- ✅ **安全响应迅速**：#5305（exec 允许列表绕过可链式执行 shell）从报告到关闭周期较短，社区对供应链安全重视度提升。
- ✅ **回归问题闭环**：#2185 跨 5 个月得到处理。
- ⚠️ **PR 流转效率偏低**：500 条 PR 中仅 1 条在 24 小时内流转至关闭状态，存量待合并 PR 数量处于历史高位。

---

## 4. 社区热点

### 4.1 评论数 Top 5 Issues

1. **[#2463](https://github.com/HKUDS/nanobot/issues/2463) — nanobot 不保留先前发送的精确 prompt 前缀**（15 评论，p2，开放 5 个月）
   - 用户 **ronny-rentner** 指出：nanobot 持久化的对话历史与实际发送给模型的 prompt 前缀不一致，与 OpenAI prompt caching 语义产生根本冲突。这是当前**最核心的架构争议**，直接关系到缓存命中率与成本。

2. **[#5266](https://github.com/HKUDS/nanobot/issues/5266) — Token 消耗过大且缺乏可观测性**（14 评论，开放 11 天）
   - 用户 **knoppix2** 反馈：2 小时内消耗百万级 token 但用户无感，强烈要求按调用维度记录 token 用量。

3. **[#2185](https://github.com/HKUDS/nanobot/issues/2185) — Gemini 升级回归**（9 评论，已关闭）

4. **[#4864](https://github.com/HKUDS/nanobot/issues/4864) — `complete_goal` 工具陷入死循环**（6 评论 +1 👍，开放近 1 个月）
   - 用户 **Asem-D** 报告：网关将 `recap` 参数解析为裸字符串而非 JSON 对象，疑似近期更新引入的工具参数序列化 bug。

5. **[#5305](https://github.com/HKUDS/nanobot/issues/5305) — exec 白名单绕过**（3 评论，已关闭）

### 4.2 社区核心诉求

- **Token 经济性**是当前最强呼声：#2463、#5266、#5402、#5377 均与 token 计数、合并、缓存相关。
- **可观测性**：用户希望了解"何时、哪次调用、消耗了多少 token"，反映目前日志粒度过粗。
- **MCP 生态深化**：#5251（MCP Apps 主机）、#5298（MCP schema 预算）双双进入热门视野。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 标题 | 状态 | 修复 PR |
|------|------|------|------|---------|
| 🔴 高 | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` 白名单绕过（可链式执行任意 shell） | **已关闭** | 已修复（社区贡献者 YLChen-007） |
| 🔴 高 | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | `complete_goal` 死循环 | OPEN | 暂无 |
| 🟠 中 | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | Prompt 前缀持久化与发送不一致（影响 KV 缓存） | OPEN | 暂无（架构性问题） |
| 🟠 中 | [#5402](https://github.com/HKUDS/nanobot/issues/5402) | Token 合并逻辑因估算偏低永不触发 | OPEN（2026-08-16 新开） | 暂无 |
| 🟠 中 | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | 合并器截断归档但指针推进过远，导致消息丢失 | OPEN | 暂无 |
| 🟡 低 | [#5373](https://github.com/HKUDS/nanobot/issues/5373) | Cron 调度器一次性持久化失败即永久死亡 | **已关闭** | 已修复 |
| 🟡 低 | [#2185](https://github.com/HKUDS/nanobot/issues/2185) | `gemini-3-flash-preview` 0.1.4post5 回归 | **已关闭** | 已修复 |

**评估**：
- ✅ 两条高危问题（安全绕过 + 死循环）已有处置或正在跟进。
- ⚠️ Token 合并相关 bug（#5402、#5377）形成"修复一个暴露另一个"的链式风险，需要从一致性视角统一处理。
- ⚠️ #2463 性质属架构层，影响所有依赖 OpenAI prompt caching 的用户，是潜在最大性能/成本隐患。

---

## 6. 功能请求与路线图信号

### 6.1 今日高价值新需求

| 编号 | 标题 | 已有对应 PR | 路线图可能性 |
|------|------|-------------|------------|
| [#5404](https://github.com/HKUDS/nanobot/issues/5404) | Skills 增加 `disable-model-invocation`（用户独占技能） | 暂无 | ⭐⭐⭐ 已有 PI/Cursor/ClaudeCode 同类实践，社区共识高 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | WebUI 增加 MCP Apps 主机支持 | 暂无 | ⭐⭐⭐ MCP 官方方向，重要性强 |
| [#5298](https://github.com/HKUDS/nanobot/issues/5298) | 大型 MCP 工具集下限制模型可见 schema 数量 | 暂无 | ⭐⭐⭐ 直接缓解 #5266（token 消耗） |
| [#5289](https://github.com/HKUDS/nanobot/issues/5289) | Telegram 支持贴纸与 agent 主动 reaction | [#1195](https://github.com/HKUDS/nanobot/pull/1195) forum threads 已在路上 | ⭐⭐ |
| [#4467](https://github.com/HKUDS/nanobot/issues/4467) | Dream 应更新已有 workspace skills 而非每次新建 | 暂无 | ⭐⭐ 体验类问题，影响日常用户 |

### 6.2 路线图合力点

- **MCP 体验升级** 是当下最热的合力方向：#5251 + #5298 表明 MCP 已从"接入"进入"精细化运营"阶段。
- **Token 治理** 系列提案（[#5266](https://github.com/HKUDS/nanobot/issues/5266) → [#5402](https://github.com/HKUDS/nanobot/issues/5402) → [#5298](https://github.com/HKUDS/nanobot/issues/5298)）正在形成"可观测 → 准确估算 → 模型侧预算"的完整链路，预计会进入下一个里程碑。

---

## 7. 用户反馈摘要

### 7.1 真实痛点

- **"Token 烧钱无声"**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）：用户 knoppix2 在 2 小时静默期内消耗百万级 token，呼吁按调用级别记录。评论中其他用户也表达了相似焦虑。
- **"prompt 缓存不命中"**（[#2463](https://github.com/HKUDS/nanobot/issues/2463)）：高级用户 ronny-rentner 深度分析指出持久化层与发送层语义错位，对成本敏感型工作流是致命缺陷。
- **"工具调用死循环"**（[#4864](https://github.com/HKUDS/nanobot/issues/4864)）：用户 Asem-D 在生产环境遭遇 `complete_goal` 反复失败，且怀疑是近期回归。
- **"Skills 越用越乱"**（[#4467](https://github.com/HKUDS/nanobot/issues/4467)）：用户 songsong-hui 每日使用自维护 skill，但 Dream 流程反复创建副本导致工作区膨胀。
- **"安全白名单形同虚设"**（[#5305](https://github.com/HKUDS/nanobot/issues/5305)）：通过 OpenAI 兼容 API 可借助链式 shell 命令绕过 `exec.allowPatterns`。

### 7.2 满意/正向反馈

- 安全类 issue（#5305）从披露到关闭周期短，社区信任感较强。
- 已关闭的回归问题（#2185）得到长期挂账用户认可。

### 7.3 场景信号

- 重度使用 Telegram 频道（含贴纸、reaction、forum 模式）已成为代表性使用场景，PR [#1147](https://github.com/HKUDS/nanobot/pull/1147)、[#1195](https://github.com/HKUDS/nanobot/pull/1195)、[#5289](https://github.com/HKUDS/nanobot/issues/5289) 形成需求簇。
- 多个用户在不同 issue 中引用 Cursor / Claude Code / PI 作为对照基准，反映出 NanoBot 用户对**现代 AI IDE 体验的期待水位**。

---

## 8. 待处理积压（提醒维护者关注）

### 8.1 长期未响应/讨论密集的重要 Issue

- **[#2463](https://github.com/HKUDS/nanobot/issues/2463)**（创建于 2026-03-25，至今 4.5 个月，15 评论）：架构性问题，关乎 KV 缓存正确性，是当前讨论深度最高、影响面最广的开放 issue。
- **[#4467](https://github.com/HKUDS/nanobot/issues/4467)**（创建于 2026-06-23，近 2 个月，1 👍）：Dream 流程与用户工作流冲突，影响日常用户。
- **[#5251](https://github.com/HKUDS/nanobot/issues/5251)**（创建于 2026-08-05，10 天）：MCP Apps 主机，路线图战略项。
- **[#5298](https://github.com/HKUDS/nanobot/issues/5298)**（创建于 2026-08-08，8 天）：MCP schema 预算，与 #5266 直接联动。
- **[#5161](https://github.com/HKUDS/nanobot/issues/5161)**（创建于 2026-07-29，18 天）：Pyright 严格化下文件级抑制收敛，技术债清理。

### 8.2 长期开放但缺乏评审动作的 PR

- **[#1306](https://github.com/HKUDS/nanobot/pull/1306)** Discord 语音/TTS（创建于 2026-02-28，**将近 6 个月**）
- **[#1205](https://github.com/HKUDS/nanobot/pull/1205)** KV 缓存稳定化（创建于 2026-02-25，6 个月）
- **[#1195](https://github.com/HKUDS/nanobot/pull/1195)** Telegram forum threads（创建于 2026-02-25，6 个月）
- **[#1149](https://github.com/HKUDS/nanobot/pull/1149)** PromptGuard 反提示注入（创建于 2026-02-25，6 个月）
- **[#1147](https://github.com/HKUDS/nanobot/pull/1147)** Telegram 群消息发送者前缀（创建于 2026-02-24，6 个月）
- **[#1073](https://github.com/HKUDS/nanobot/pull/1073)** 保留未知 config 键防止数据丢失（创建于 2026-02-23，6 个月）
- **[#1072](https://github.com/HKUDS/nanobot/pull/1072)** 捕获 `CancelledError` 防进程崩溃（创建于 2026-02-23，6 个月）
- **[#1026](https://github.com/HKUDS/nanobot/pull/1026)** 删除已处理媒体文件防止磁盘膨胀（创建于 2026-02-23，6 个月）
- **[#1024](https://github.com/HKUDS/nanobot/pull/1024)** Subagent profiles（创建于 2026-02-22，近 6 个月）
- **[#5406](https://github.com/HKUDS/nanobot/pull/5406)** 原生 TypeScript TUI（替代 #4329，关键功能，待关注）

### 8.3 治理建议

- **积压 PR 超过 6 个月且标为 `[conflict]`** 的数量众多（[#1073](https://github.com/HKUDS/nanobot/pull/1073)、[#1072](https://github.com/HKUDS/nanobot/pull/1072)、[#1026](https://github.com/HKUDS/nanobot/pull/1026) 等），建议维护者集中做一次 conflict 解决 sprint 或明确关闭/重开策略。
- 多个 PR 实质上修复同类问题（如 #1025 / #1073 都涉及 `extra="allow"` 与 config 保留），建议合并审查。
- #5406 的"误合并回滚"事件

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-17**

---

## 1. 今日速览

Hermes Agent 今日继续保持高强度开发节奏，**24 小时内活跃 Issues 与 PR 各达 50 条**，社区关注度处于较高水平。值得关注的是，v0.20.2 稳定版（v2026.8.16）刚刚发布，合并了自 v0.20.1 以来的约 397 个 PR，但新版本并未消化全部已知问题——尤其是 Desktop 多会话稳定性、跨 Profile 隔离、Windows 更新流程等长期痛点仍然活跃。当前问题池整体呈"开放多、关闭少"态势（50/0 的 Issues 比例），说明修复周期长于问题发现速度，**项目健康度处于"积极迭代但积压加重"的状态**。

---

## 2. 版本发布

### v2026.8.16 — Hermes Agent v0.20.2（Patch Release）
- **发布日期**：2026-08-16
- **类型**：补丁版本
- **变更范围**：自 v0.20.1 以来累计合并的约 **397 个 PR** 的稳定标签版本
- **适用场景**：面向 Docker 镜像、托管部署和全新安装的稳定快照

**迁移注意事项**：
- 该版本聚合了大规模变更，建议升级前**重点核对 Desktop、Gateway、Cron/Scheduler 相关行为变更**
- 由于 v0.20.1 与 v0.20.2 之间修复量较大，强烈建议参照官方升级文档评估影响面
- ⚠️ 今日 Issues 中仍出现以 v0.20.1 为基线报告的回归问题（如 #87652 Desktop 重复 WebSocket），升级至 v0.20.2 后需重新验证

---

## 3. 项目进展

今日共 3 个 PR 进入关闭/合并状态，47 个待合并 PR 持续推进。

### 已关闭 / 合并的 PR

| PR | 标题 | 贡献者 | 影响领域 |
|---|---|---|---|
| [#6410](https://github.com/NousResearch/hermes-agent/pull/6410) | feat(codex-chat): native multimodal vision, /fast mode, /contextlimit… | badaboommarketing | Agent/CLI/Gateway |
| [#88031](https://github.com/NousResearch/hermes-agent/pull/88031) | fix(tools): route openai-api through native vision and fail closed on vision refusals | SaucePackets | Agent/Vision |

**意义解读**：
- **#6410** 为 Codex Chat 引入原生多模态视觉能力、/fast 模式与 /contextlimit 等命令，是聊天端能力的实质性扩展。
- **#88031** 修复了 openai-api 提供商下 `vision_analyze` 被静默降级到文本模型的问题，对依赖 OpenAI 兼容接口做视觉分析的定时任务意义重大——属于"静默 bug 被终结"类型的修复。

### 重要待合并 PR（按主题归类）

**会话状态与消息保真度（yingliang-zhang 系列）**：
- [#63298](https://github.com/NousResearch/hermes-agent/pull/63298) — 保留队列中 prompt 边界端到端，修复 #45560（影响 agent/gateway/tui/cron/desktop）
- [#63292](https://github.com/NousResearch/hermes-agent/pull/63292) — Desktop 把中断完成视为 metadata
- [#63009](https://github.com/NousResearch/hermes-agent/pull/63009) — 为自定义 codex_responses 提供商扩展 GPT-5.6 自动压缩阈值
- [#60662](https://github.com/NousResearch/hermes-agent/pull/60662) — 可配置 max_tail_message_floor
- [#56034](https://github.com/NousResearch/hermes-agent/pull/56034) — TUI/CLI 预检路径加消息计数安全阀
- [#62587](https://github.com/NousResearch/hermes-agent/pull/62587) — cron 的 no_agent 运行记入会话历史
- [#57687](https://github.com/NousResearch/hermes-agent/pull/57687) — TUI 网关 WebSocket detach 时关闭 slash_worker，修复内存泄漏（每个 worker ~13MB）

**Kanban 调度加固（今日新增）**：
- [#88034](https://github.com/NousResearch/hermes-agent/pull/88034) — 在定时任务启动时清除继承的 delegate_task 谱系
- [#88035](https://github.com/NousResearch/hermes-agent/pull/88035) — Kanban 三项 fail-closed 保护：board 存在性、审核门控、对象保真度调度

**新功能**：
- [#88037](https://github.com/NousResearch/hermes-agent/pull/88037) — 新增跨 Profile 的 handoff 工具（GXTD-390）
- [#87785](https://github.com/NousResearch/hermes-agent/pull/87785) — 完成 Shift+letter 在 modifyOtherKeys 下正确输出大写字母
- [#87713](https://github.com/NousResearch/hermes-agent/pull/87713) — 隔离缓存的工具 schema，防止跨会话污染

**整体推进评估**：今日主要 PR 集中在**会话状态保真度、压缩策略、Kanban 调度安全、跨 Profile 隔离**四大主题，与昨日社区报出的热点高度对应，说明维护者响应迅速、闭环较快。

---

## 4. 社区热点

按评论数排名（24 小时内更新）：

| 排名 | Issue | 标题 | 评论数 | 创建日 |
|---|---|---|---|---|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 过期（degraded 29.8h） | **45** | 2026-07-18 |
| 2 | [#53480](https://github.com/NousResearch/hermes-agent/issues/53480) | 更新不应打断 Desktop 活动会话 | 5 | 2026-06-27 |
| 3 | [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 安装失败（uv.lock & npm） | 4 | 2026-08-15 |
| 4 | [#87652](https://github.com/NousResearch/hermes-agent/issues/87652) | Desktop 重复 `/api/audio/speak-stream` WebSocket | 3 | 2026-08-16 |
| 5 | [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | Vision 工具首次探测后消失 | 3 | 2026-08-16 |
| 6 | [#87692](https://github.com/NousResearch/hermes-agent/issues/87692) | Desktop renderer 构建失败（TS2307） | 3 | 2026-08-16 |
| 7 | [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) | Windows update 卡 11min（cua-driver UAC） | 3 | 2026-08-16 |
| 8 | [#70233](https://github.com/NousResearch/hermes-agent/issues/70233) | Groq reasoning_details 泄漏到下一请求 | 3 | 2026-07-23 |

**诉求分析**：
- **#66616 的 45 条评论值得关注**：虽然表面是自动化探针告警，但其根因指向 Skills Hub 索引生成工作流（6/18 UTC cron）的不稳定，反映出**文档与生态基础设施的可靠性问题**——这往往是开发者留存的关键。
- **桌面应用质量问题集中爆发**：#87652 / #87692 / #87703 / #87716 / #87759 等多条新开 Issue 指向 Desktop 的 TTS、WebSocket、构建、UI 同步，说明 **v0.20.x 的 Desktop 路径仍在打磨**。
- **跨 Profile 隔离焦虑**：tachyon-r 在 #87722、#87723、#87726 连续报出三项类似问题（共享 session DB、secret scope 逃逸、MCP 审批不同步），显示**多 Profile 安全模型存在系统性问题**。

---

## 5. Bug 与稳定性

按严重程度（P1 > P2 > P3）排序：

### P1 — 阻塞性问题
| Issue | 标题 | 是否有修复 PR |
|---|---|---|
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 安装 broken（uv.lock & npm install 失败） | ❌ 未见 |
| [#87644](https://github.com/NousResearch/hermes-agent/issues/87644) | gateway cron scheduler 在 EMFILE 后永久停滞（心跳仍正常） | ❌ 未见 |
| [#87694](https://github.com/NousResearch/hermes-agent/issues/87694) | autostash 产生孤立 commit，破坏后续所有 update | ❌ 未见 |

### P2 — 重要问题（部分摘录）
| Issue | 标题 | 是否有修复 PR |
|---|---|---|
| [#87652](https://github.com/NousResearch/hermes-agent/issues/87652) | Desktop 重复 WebSocket（TTS） | ❌ 未见 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | Vision 工具首次探测后消失 | ❌ 未见 |
| [#87692](https://github.com/NousResearch/hermes-agent/issues/87692) | Desktop renderer 构建失败 | ❌ 未见 |
| [#87703](https://github.com/NousResearch/hermes-agent/issues/87703) | Windows update 卡 11min | ❌ 未见 |
| [#70233](https://github.com/NousResearch/hermes-agent/issues/70233) | Groq reasoning_details 泄漏 | ❌ 未见 |
| [#87724](https://github.com/NousResearch/hermes-agent/issues/87724) | computer_use 在 headless 模式"fail open"（**安全相关**） | ❌ 未见 |
| [#85957](https://github.com/NousResearch/hermes-agent/issues/85957) | api_server 异步代理完成被当作用户回合 | ✅ [#86011](https://github.com/NousResearch/hermes-agent/pull/86011) |
| [#87689](https://github.com/NousResearch/hermes-agent/issues/87689) | `hermes config set` 方括号索引静默错误 | ❌ 未见 |
| [#87697](https://github.com/NousResearch/hermes-agent/issues/87697) | Ollama 本地流在 1.5s 后被取消 | ❌ 未见 |

### P3 — 一般问题
包括 #87716（Desktop 删除/归档 2-4s 延迟）、#87730（skill_manage 符号链接冲突检测失效）、#87759（Desktop sidebar 会话交替消失）、#87631（Cyrillic Shift+letter 仍泄漏 CSI）等。

**严重 Bug 总体状态**：
- **3 个 P1 全部无修复 PR**，尤其是 EMFILE 后 cron 永久停滞和 autostash 孤立 commit，会直接阻塞用户日常运维。
- **#87724（computer_use fail open）是今日唯一带 type/security 标签的 Issue**，影响所有 headless 部署，需要最高优先级响应。

---

## 6. 功能请求与路线图信号

| Issue / PR | 标题 | 类型 | 路线图信号 |
|---|---|---|---|
| [#53480](https://github.com/NousResearch/hermes-agent/issues/53480) | Updater 应守护活动 Desktop 会话 | feature | 🟢 已与 Windows 更新修复（#87772、#87703）联动 |
| [#47803](https://github.com/NousResearch/hermes-agent/issues/47803) | Desktop 会话标题 LLM 重新生成 | feature | 🟡 暂无 PR，建议纳入 v0.21 |
| [#82187](https://github.com/NousResearch/hermes-agent/pull/82187) | Desktop 将连接模式暴露给 skills/MCP/plugins | feature | 🟢 PR 已开，进展中 |
| [#80167](https://github.com/NousResearch/hermes-agent/pull/80167) | Kanban CLI 暴露每任务 reasoning effort | feature | 🟢 PR 已开 |
| [#80758](https://github.com/NousResearch/hermes-agent/pull/80758) | hashline-guard 内容寻址补丁锚点 | feature | 🟢 PR 已开 |
| [#88037](https://github.com/NousResearch/hermes-agent/pull/88037) | 跨 Profile handoff 工具 | feature | 🟢 今日新开 |
| [#87643](https://github.com/NousResearch/hermes-agent/issues/87643) | Discord free_response_channels 与 auto_thread 无法共存 | feature | 🔴 设计层缺陷，需 maintainer 决策 |
| [#31367](https://github.com/NousResearch/hermes-agent/issues/31367) | Feishu WebSocket 每 30min 断开导致全 gateway 重启 | feature/bug | 🟡 长期未解决（5/24 创建） |

**路线图判断**：
- **跨 Profile 工作流**正在成为新热点（#88037 handoff + 多条 tachyon-r 安全 Issue），可能成为下个版本重要主题。
- **Kanban 调度加固**已成共识，今日新增 #88034 / #88035 形成"双重 fail-closed"保护层。
- **Windows + Desktop 体验**优先级上升，但维护者侧投入仍显不足。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼的真实用户痛点：

### 🔥 高频痛点
1. **更新体验脆弱**：用户在 Debian / Windows 上分别遭遇 uv.lock 失败（#87093）和 cua-driver UAC 卡死（#87703、#87772），安装/升级路径几乎是"碰运气"。
2. **Desktop 同步性失真**：用户反馈 TTS 读两遍（#87652）、归档/删除 2-4 秒延迟（#87716）、会话交替消失（#87759），UI 与状态机的同步问题是 Desktop 的通病。
3. **多 Profile 安全模型不清晰**：tachyon-r 的三条 Issue 揭示用户对 secondary profile 的"secret scope / session DB / MCP approval"边界普遍困惑（#87722、#87723、#87726）。

### 💡 真实使用场景
- **跨模型路由**：#70233 反映用户同时使用 Groq 推理模型 + Groq 非推理模型时，reasoning_details 字段泄漏造成下游 400。
- **vision_analyze 用于定时图像策展**：#88031 的修复场景是"每周图像策展 cron"，说明视觉能力已被纳入自动化流水线。
- **本地 Ollama 推理**：#87697 反映用户在本地 LLM 推理时遇到 1.5s 取消，体验受损。

### ✅ 满意信号
- 用户 #47803 主动点赞（👍1）说明 Desktop 标题功能的小改进就能带来明显好感。
- 多名用户对 #86011、#63298 这类"修复深层数据模型"而非"打补丁"的 PR 表示欢迎。

---

## 8. 待处理积压

下列重要 Issue/PR 已创建多日但未关闭，建议维护者优先关注：

| 编号 | 标题 | 创建日 | 当前状态 | 风险 |
|---|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale（自动化探针持续告警） | 2026-07-18 | 已 30 天 | Skills Hub 文档失真 |
| [#31367](https://github.com/NousResearch/hermes-agent/issues/31367) | Feishu WebSocket 每 30min 重启 | 2026-05-24 | 已 **85 天** | Feishu 用户长期不可用 |
| [#53480](https://github.com/NousResearch/hermes-agent/issues/53480) | Updater 守护活动会话 | 2026-06-27 | 已 51 天 | 数据丢失风险 |
| [#70233](https://github.com/NousResearch/hermes-agent/issues/70233) | Groq reasoning_details 泄漏 | 2026-07-23 | 已 25 天 | 模型组合不可用 |
| [#63298](https://github.com/NousResearch/hermes-agent/pull/63298) | 保留 prompt 边界（yingliang-zhang） | 2026-07-12 | 待合并 36 天 | 涉及多组件的会话核心 PR |
| [#63292](https://github.com/NousResearch/hermes-agent/pull/63292) | Desktop 把中断完成视为 metadata | 2026-07-12 | 待合并 36 天 | 与 #63298 协同 |
| [#63009](https://github.com/NousResearch/hermes-agent/pull/63009) | 自定义 codex_responses 自动压缩 | 2026-07-12 | 待合并 36 天 | 涉及成本与稳定性 |
| [#47320](https://github.com/NousResearch/hermes-agent/pull/47320) | 跨 CLI/gateway 可移植 handoff 工作流 | 2026-06-16 | 待合并 **62 天** | 与 #88037 互补，需协调 |

**特别提醒**：yingliang-zhang 提交的多个 PR（#63298、#63292、#63009、#60662、#56034、#62587、#57687）已积压 36 天左右，覆盖会话状态、压缩、内存泄漏等核心领域，**建议

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

📅 **报告日期**：2026-08-17
📊 **数据范围**：过去 24 小时
🔗 **项目地址**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1️⃣ 今日速览

过去 24 小时 PicoClaw 项目活跃度**偏低**，无新版本发布，无 PR 被合并。今日共记录 3 条 Issue 更新和 5 条 PR 更新，但其中绝大多数条目均带有 `[stale]` 标记，表明社区沟通节奏放缓，多数议题处于"等待维护者响应"状态。今日唯一值得关注的实质性进展是**协调性的 SSRF 安全加固系列 PR**（#3322/#3323/#3324）持续保持活跃，以及一条**当日新开的 Slack 媒体上传功能性 Bug**（#3338）。整体而言，项目处于"功能维护期"，缺乏主线推进动力。

---

## 2️⃣ 版本发布

🚫 **无新版本发布**。过去 24 小时内未检测到任何 Release 标签。

---

## 3️⃣ 项目进展

今日仅 1 个 PR 进入关闭状态：

| PR | 状态 | 说明 |
|---|---|---|
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | **CLOSED**（[stale]） | *Added simplex channel type* — 由贡献者 `dim` 提出，新增 SimpleX 通道类型支持 |

⚠️ **注意**：PR #3193 被标记为 `[stale]` 后关闭，**未明确说明是合并还是放弃**。从 6 月 27 日创建至 8 月 16 日关闭，长达 50 天未推进，是一项完整的 SimpleX 通道实现。若被放弃，建议维护者在 PR 中补充明确原因，避免贡献者重复投入。

🔧 **持续推进中的安全加固系列**：维护者/贡献者 `SashaMIT` 的三个 PR 形成了一个协调性的 **SSRF 防御优化**：

- [#3322](https://github.com/sipeed/picoclaw/pull/3322) — *fix(channels): block private targets on inbound media downloads* — 为 QQ/Telegram/Discord/LINE/Slack 入站附件下载启用 `BlockPrivateTargets` SSRF 加固
- [#3323](https://github.com/sipeed/picoclaw/pull/3323) — *fix(wecom): use CreateSafeHTTPClient for media downloads* — 为 WeCom 渠道 `storeRemoteMedia` / `downloadRemoteMediaToTemp` 增加安全客户端
- [#3324](https://github.com/sipeed/picoclaw/pull/3324) — *fix(weixin): use CreateSafeHTTPClient for media downloads* — 为微信 CDN/远程媒体请求增加相同防护

这三个 PR 共同构成一次**安全纵深强化**，补齐了多个渠道对 loopback/私有网段的 SSRF 重定向风险，项目安全姿态向前迈进了一步。

---

## 4️⃣ 社区热点

按评论数与活跃度排序：

| 排名 | 编号 | 类型 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | Issue [#3302](https://github.com/sipeed/picoclaw/issues/3302) | Feature | 3 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3302) |
| 2 | Issue [#3325](https://github.com/sipeed/picoclaw/issues/3325) | Feature | 1 | 0 | [链接](https://github.com/sipeed/picoclaw/issues/3325) |

**分析**：
- **#3302（OAuth 2.1 for MCP servers）**：今日讨论最活跃的 Issue，与历史 Issue #2546 同源，反映社区对**企业级身份认证能力**的持续诉求。尽管需求被发起者自评为 "Nice-to-Have / Enhancement" 而非核心功能，但仍积累了 3 条评论，表明确实有用户在推动 MCP 生态的标准合规化。
- **#3325（Render Telegram tables with rich messages）**：单一评论聚焦，展示社区对 Telegram Bot API 10.1 新能力（原生表格 UI）的期望，希望 PicoClaw 在 Telegram 通道中从 MarkdownV2 文本渲染升级到富消息表格。

⚠️ **值得注意的是**：所有热点 Issues/PRs 的 👍 数均为 0，点赞数据无法反映真实支持度，建议社区运营后续介入收集更多反馈信号。

---

## 5️⃣ Bug 与稳定性

### 🔴 今日新增 Bug

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **🟠 High** | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | **Slack 不附加图片媒体内容** — `SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize` 字段，导致 slack-go SDK 在任何网络请求发起之前就以 `file.upload.v2: file size cannot be 0` 拒绝每一次上传 | ❌ 暂无 |

**严重度判定理由**：该 Bug 影响 **Slack 通道图像消息能力的全部场景**，对依赖图片消息的 Slack 用户而言是功能性完全失效。错误发生在握手阶段（请求未发出），属于确定性的硬错误，根因明确（缺失字段），修复成本低。建议维护者优先处理。

**环境信息**：报告者 `octavioturra` 使用 `picoclaw 0.3.x`，证明此 Bug 在最新版本上仍存在，影响所有 Slack 渠道用户。

### 🟡 历史遗留风险

PR #3322/#3323/#3324 已识别出 QQ/Telegram/Discord/LINE/Slack/WeCom 等多个通道的 **SSRF 重定向漏洞**，但目前 4 个 PR 均处于 `[stale]` 待审状态，等待维护者合并。安全类 PR 长期滞留属于**中高风险**，建议缩短评审周期。

---

## 6️⃣ 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 纳入下一版本可能性评估 |
|---|---|---|---|
| OAuth 2.1 for MCP servers | [#3302](https://github.com/sipeed/picoclaw/issues/3302) | 无 | 🟡 **中等** — 与历史 #2546 同源，但被自评为 Nice-to-Have，依赖于 MCP 生态路线图 |
| Telegram 富消息表格渲染 | [#3325](https://github.com/sipeed/picoclaw/issues/3325) | 无 | 🟢 **较高** — 需求紧贴 Telegram Bot API 10.1 新能力，实现路径清晰（替换 `sendMessage` 为 `sendMediaGroup` 或专用表格端点） |
| Exa 原生 Web Search Provider | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 🟢 **较高** — PR 已有，只需审阅合并 |
| SimpleX Channel 类型支持 | 历史 #3193 | [#3193](https://github.com/sipeed/picoclaw/pull/3193)（已关闭） | 🔴 **暂搁置** — 已关闭，需明确是否会被重新打开或重新提 PR |

**路线图信号**：社区对**协议层增强**（OAuth）、**通信渠道扩展**（SimpleX、多渠道表格渲染）和**检索能力增强**（Exa）三方面均有诉求，呈现"生态集成化"的扩展趋势。

---

## 7️⃣ 用户反馈摘要

由于所有 Issues 的点赞数均为 0，评论样本有限（总活跃评论 4 条），可提炼的核心信号如下：

- **🔐 认证标准化诉求**：#3302 的 3 条评论围绕 MCP 协议的 OAuth 2.1 标准合规展开，反映用户希望 PicoClaw 在多租户/企业场景中具备标准化身份验证能力。
- **📊 表格可视化诉求**：#3325 的评论指出当前 MarkdownV2 渲染路径下结构化表格退化为代码块，影响数据可视化的使用体验。
- **🐛 Slack 用户痛点**：#3338 报告者明确指出其使用 `picoclaw 0.3.x` 版本时 Slack 图片消息完全失效，未提供满意度评价，但语气表明**该 Bug 直接阻碍其工作流**。
- **⚠️ 社区互动低迷**：≥50% 的活跃议题被打上 `[stale]` 标签且 0 反应，说明用户在等待维护者反馈时缺少有效沟通渠道，长期可能影响贡献者积极性。

---

## 8️⃣ 待处理积压

🚨 **需维护者立即关注**：

| 类型 | 编号 | 滞留天数 | 状态 | 链接 |
|---|---|---|---|---|
| 🔴 安全加固 PR | [#3322](https://github.com/sipeed/picoclaw/pull/3322) | 8 天 | [stale] OPEN | 多渠道 SSRF 修复 |
| 🔴 安全加固 PR | [#3323](https://github.com/sipeed/picoclaw/pull/3323) | 8 天 | [stale] OPEN | WeCom 安全客户端 |
| 🔴 安全加固 PR | [#3324](https://github.com/sipeed/picoclaw/pull/3324) | 8 天 | [stale] OPEN | 微信安全客户端 |
| 🟡 功能 PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 22 天 | [stale] OPEN | Exa 搜索提供器 |
| 🟡 关闭未说明 | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | 50 天 | CLOSED [stale] | SimpleX 通道 |

**建议行动**：
1. **优先合并 SashaMIT 的三个 SSRF 加固 PR**（#3322/#3323/#3324），属于安全类，滞留将放大风险敞口；
2. **明确 PR #3193 的关闭原因**，避免贡献者困惑；
3. **回复 #3302 关于 MCP OAuth 的优先级判断**，引导社区预期；
4. **修复 #3338 的 Slack 图片上传 Bug**，该 Bug 修复成本极低但影响明确。

---

## 📈 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 活跃 PR/Issue 数偏低，大部分处于 stale 状态 |
| 响应及时性 | ⭐⭐☆☆☆ | 长期未合并的安全类 PR，存在积压 |
| 安全性 | ⭐⭐⭐☆☆ | 有 SSRF 加固 PR 待合并，方向正确但未落地 |
| 社区参与 | ⭐⭐☆☆☆ | 评论与点赞数据低迷，互动不足 |
| 版本节奏 | ⭐☆☆☆☆ | 今日无任何 Release 信号 |

**综合评估**：🔸 **需要主动干预**。建议项目维护者进行一次 Issue/PR 集中清理（Triage），重点处理安全类 PR 与新 Bug。

---

*本报告基于 2026-08-17 过去 24 小时的 GitHub 数据自动生成，所有链接均指向 sipeed/picocaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期：2026-08-17**
**数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日呈现**高强度内部迭代、低外部互动**的典型"集中冲刺"态势。过去 24 小时共更新 32 个 PR（19 待合并 / 13 已关闭），Issue 端仅 1 条误开问题被关闭，零社区反馈涌入，零版本发布。绝大多数 PR 由核心团队成员 `gavrielc` 单人集中提交（占活跃 PR 超 60%），主题高度收敛于**消息投递基础设施重构、跨会话上下文管理、DM/Channel 适配器能力扩展**三大方向，表明项目正处于一次较大规模的架构收敛期。整体活跃度高、协作密度低，建议维护者关注 PR 审查积压与外部贡献者引导。

---

## 2. 版本发布

**今日无新版本发布。**

考虑到单日内 32 个 PR 的合并/重开动作集中在 core-team 通道，建议在合并窗口收尾后发布 patch 版本（v2.1.x → v2.1.y）以整合本批改动。

---

## 3. 项目进展

今日关闭的 13 个 PR 中，多个直接触及核心数据通路与权限模型，属于**架构性推进**而非表面功能：

### 消息投递与上下文（核心架构）
- **[#3284](https://github.com/qwibitai/nanoclaw/pull/3284)**（gavrielc）**已合并**：定义 mid-turn 流式输出为单一投递入口（single content door），废弃 result-door 发送路径，从根本上消除 `<message>` 块的去重竞态。这是近几批 PR 中语义最重的改动之一。
- **[#3254](https://github.com/qwibitai/nanoclaw/pull/3254)**（gavrielc）**已合并**：修复容器两阶段入站批选 bug——之前上下文行（trigger=0）可能"挤掉"到期任务行，导致 wake 触发但工作流未触达 Agent。属隐性数据丢失风险。
- **[#3255](https://github.com/qwibitai/nanoclaw/pull/3255)**（gavrielc）**已合并**：出站投递现在解析发送方自身的 channel 行，而非任意 sibling 实例，修复多 bot 同房间时的归属歧义。
- **[#3256](https://github.com/qwibitai/nanoclaw/pull/3256)**（gavrielc）**已合并**：新增 `messaging_groups.detached_at` 列（migration 022），以软状态而非删除表达 bot 退出会话，保留 wiring/destination 行。

### 跨会话上下文与 DM 增强
- **[#3262](https://github.com/qwibitai/nanoclaw/pull/3262)**（gavrielc）**已合并**：Chat SDK bridge 扩展 Agent 模式 DM 表面，捕获 app-context、规范化 DM thread id、新增 dm-opened hook（覆盖 A8 + C4）。
- **[#3264](https://github.com/qwibitai/nanoclaw/pull/3264)**（gavrielc）**已合并**：注册 `registerDeliveryBatchPreview` hook，允许模块预检整个未投递出站批次，为预取昂贵附件等场景铺路（A2）。

### Channel 适配器能力扩展
- **[#3261](https://github.com/qwibibitai/nanoclaw/pull/3261)**（gavrielc）**已合并**：可选适配器能力——带状态的 `setTyping`、`setThreadTitle`、`setSuggestedPrompts`。
- **[#3263](https://github.com/qwibitai/nanoclaw/pull/3263)**（gavrielc）**已合并**：Channel registry 支持热启动已注册 adapter（A1），新注册 adapter 可即时生效而无需重启。
- **[#3259](https://github.com/qwibitai/nanoclaw/pull/3259)**（gavrielc）**已合并**：三连小修——skill-apply 标题序号剥离、无头浏览器 URL 透出、inherit-script 提取。

### 权限与 Agent 间协作
- **[#3260](https://github.com/qwibitai/nanoclaw/pull/3260)**（gavrielc）**已合并**：新增第四种未知发件人策略 `decline_notify`——礼貌回拒 + 单行通知 Owner，无需审批卡。
- **[#3265](https://github.com/qwibitai/nanoclaw/pull/3265)**（gavrielc）**已合并**：`CreateAgentOptions.suppressCreatedNotify` 标志，允许包装器抑制成功消息同时保留所有错误通知（A3）。
- **[#3266](https://github.com/qwibitai/nanoclaw/pull/3266)**（gavrielc）**已合并**：注册通道卡拦截器（`registerChannelCardInterceptor`），模块可在注册卡前接管升级流程（A4）。

**进展评估**：今日 NanoClaw 在**消息投递一致性、跨会话上下文完整性、Channel 适配器可扩展性**三个底层能力上同时推进，属于"打地基"型工作，短期内不可见收益，但对长跑稳定性至关重要。预计下一版本（v2.2.x 候选）的健壮性会有跃迁。

---

## 4. 社区热点

**今日社区互动近乎为零。**

- 唯一的 Issue [#3271](https://github.com/qwibitai/nanoclaw/issues/3271)（误开仓库，已立即关闭）评论数 0、👍 0。
- 所有 32 条 PR 评论数均显示为 `undefined`（即 0），无任何讨论热度。

**信号解读**：
- 集中合并的 PR 均带 `[core-team]` 标签且由 `gavrielc` 主导，符合"核心维护者内部协作"模式；
- 唯一的外部贡献者是 [#1251](https://github.com/qwibitai/nanoclaw/pull/1251)（`armandokun`）的 `/add-openmail` 技能 PR（创建于 2026-03-18，今日被关闭），周期长达近 5 个月，建议核查其关闭原因；
- [#3278](https://github.com/qwibitai/nanoclaw/pull/3278)（`adar666`）的 `save_document` MCP 工具也已关闭，属于外部贡献者 Story 1.1。

**建议**：核心团队冲刺后，建议主动发起 1-2 个 `good first issue` 或在 Discord/讨论区征求外部 reviewer，以恢复贡献者漏斗健康度。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重（数据一致性 / 投递路径）
1. **PR [#3254](https://github.com/qwibitai/nanoclaw/pull/3254)**：上下文行挤掉到期任务行 → 任务静默丢失。**已有 fix 且已合并。**
2. **PR [#3255](https://github.com/qwibitai/nanoclaw/pull/3255)**：多 bot 同房间时投递目标错位。**已有 fix 且已合并。**

### 🟡 中严重（功能不可用 / 工作流阻断）
3. **PR [#2752](https://github.com/qwibitai/nanoclaw/pull/2752)**（chubbicorn245，**仍 OPEN**）：Discord 入站附件（文本/图片）到达 Agent 时仅为 `[file: message.txt]` 占位符，无字节、无路径——Agent 实际无法读取附件。**已存在 fix PR 但仍未合并**，提交于 2026-06-12，等待 **2 个多月**，建议维护者优先处理。
4. **PR [#3280](https://github.com/qwibitai/nanoclaw/pull/3280)**（stumpjumper）：`ncl groups config update` 无法清空可空标量——`--model ""` 存为空串而非 NULL，被物化进 `container.json` 污染运行时。**已有 fix PR，OPEN。**

### 🟢 低严重（输入兼容 / 链接保留）
5. **PR [#3282](https://github.com/qwibitai/nanoclaw/pull/3282)**（amit-shafnir）：Telegram 配对码显示带空格，粘贴时被 `extractCode` 拒绝。**已有 fix PR，OPEN。**
6. **PR [#3283](https://github.com/qwibitai/nanoclaw/pull/3283)**（Koshkoshinsk）：Chat SDK 链接目标在显示文本缩短/重标记时丢失。**已关闭**（已合并类修复）。

### ⚠️ 历史回归类
7. **PR [#3281](https://github.com/qwibitai/nanoclaw/pull/3281)**（wakqasahmed）：修复 Agent-scoped `ncl tasks` 对 pre-2.1.54 legacy session 不可见的问题（关联 [#3233](https://github.com/qwibitai/nanoclaw/issues/3233)）。**OPEN**——属于升级路径回归，强烈建议随下一版本一并发布。

---

## 6. 功能请求与路线图信号

虽无显式 feature request 类 Issue，但**已合并 PR 中的新能力**勾勒出明确路线图方向：

| 方向 | 代表 PR | 状态 |
|---|---|---|
| 跨会话上下文（fan-out / DM 回填 / echo 剪枝） | [#3257](https://github.com/qwibitai/nanoclaw/pull/3257) | OPEN（核心团队） |
| 单一流式投递门 | [#3284](https://github.com/qwibitai/nanoclaw/pull/3284) | ✅ 已合并 |
| Channel 注册热启动 | [#3263](https://github.com/qwibitai/nanoclaw/pull/3263) | ✅ 已合并 |
| DM 状态策略精细化（decline_notify） | [#3260](https://github.com/qwibitai/nanoclaw/pull/3260) | ✅ 已合并 |
| Agent-to-agent 抑制通知粒度 | [#3265](https://github.com/qwibitai/nanoclaw/pull/3265) | ✅ 已合并 |
| 文档持久化到 Agent 记忆 | [#3278](https://github.com/qwibitai/nanoclaw/pull/3278) | 已关闭 |
| OpenMail 邮件通道技能 | [#1251](https://github.com/qwibitai/nanoclaw/pull/1251) | 已关闭 |

**路线图信号**：
- **A 系列 PR**（A1–A4、A8）显示出"模块化扩展点"的统一设计语言——hook、interceptor、options 标志成为标准做法，意味着 NanoClaw 正从单体走向**可插拔框架**。
- 仍 OPEN 的 [#3257](https://github.com/qwibitai/nanoclaw/pull/3257)（跨会话上下文 fan-out）若合并，将与 [#3284](https://github.com/qwibitai/nanoclaw/pull/3284) 共同构成下个版本的"上下文/投递双子星"，**强烈建议作为 v2.2 主线**。
- [#3278](https://github.com/qwibitai/nanoclaw/pull/3278) 的"Document Memory + Fill-In Editing"epic（Story 1.1）暗示**长期记忆**将进入路线图视野。

---

## 7. 用户反馈摘要

**今日无活跃用户讨论可供提炼。** 所有 PR 评论数均为 0，Issue 唯一一条为误开。

仅有可推断的用户痛点（从 PR 描述提取的"原始动机"）：
- **Discord 用户无法让 Agent 读取附件**（[#2752](https://github.com/qwibitai/nanoclaw/pull/2752)）——存在近 2 个月，反映"发现问题→提 PR→被遗忘"的反馈链断点。
- **升级后 legacy session 不可见**（[#3281](https://github.com/qwibitai/nanoclaw/pull/3281)）——版本升级的破坏性影响，是企业/长期用户最敏感的话题。
- **CLI 配置无法清空字段**（[#3280](https://github.com/qwibitai/nanoclaw/pull/3280)）——典型的"半成品 CLI 体验"，对 DevOps 自动化用户尤其不友好。

---

## 8. 待处理积压

按优先级提醒维护者：

### 🔥 高优先级（影响核心功能 / 长期未决）
- **[PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)** — Discord 附件 stage 修复，等待 **66 天**。
- **[PR #3257](https://github.com/qwibitai/nanoclaw/pull/3257)** — 跨会话上下文，核心团队 PR，需 code review 推动。
- **[PR #3256](https://github.com/qwibitai/nanoclaw/pull/3256)** — `detached_at` migration，迁移窗口相关，宜在版本发布前确认。

### 🟡 中优先级（用户可见问题）
- **[PR #3281](https://github.com/qwibitai/nanoclaw/pull/3281)** — 升级回归，与版本发布强耦合。
- **[PR #3280](https://github.com/qwibitai/nanoclaw/pull/3280)** — CLI 配置清理，影响 ops 工作流。
- **[PR #3282](https://github.com/qwibitai/nanoclaw/pull/3282)** — Telegram 配对码输入兼容。
- **[Issue #3233](https://github.com/qwibitai/nanoclaw/issues/3233)** — 上述 #3281 修复的根 issue，应随 PR 合并一同关闭。

### ⚠️ 长期观察项
- 外部贡献者 [#1251](https://github.com/qwibitai/nanoclaw/pull/1251)（OpenMail，5 个月）与 [#3278](https://github.com/qwibitai/nanoclaw/pull/3278)（Document Memory，关闭原因未明）需复盘关闭动因，避免挫伤外部贡献者。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐⭐⭐⭐ | 32 PR / 日，核心架构密集推进 |
| 外部协作 | ⭐⭐ | 0 社区反馈、0 Issue 讨论、长期外部 PR 积压 |
| 发布节奏 | ⭐⭐ | 无版本发布，PR 合并尚未形成 release-ready 批次 |
| Bug 响应 | ⭐⭐⭐ | 内部 bug 修复极快，外部 bug PR 长期搁置 |
| 架构清晰度 | ⭐⭐⭐⭐ | A1–A8 系列命名规范，可插拔方向明确 |

**总评**：项目处于**架构收敛期**，内部产出质量高，但需警惕"单点维护者风险"（gavrielc 占比过高）与"外部贡献者漏斗干涸"两项指标。

---

*报告生成时间：2026-08-17 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：2026-08-17**
**数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)**
**报告范围：过去 24 小时 (2026-08-16)**

---

## 1. 今日速览

IronClaw 今日活跃度处于**中等偏低水平**，整体呈现"例行维护 + 单点功能打磨"的态势。过去 24 小时共有 1 条新 Issue 与 9 条 PR 更新，**无新版本发布**。PR 中以 Dependabot 自动化依赖升级为主（共 6 条），但同时出现了两条值得关注的实质工作：一条是针对 Slack 未链接用户引导体验的端到端修复（[PR #7682](https://github.com/nearai/ironclaw/pull/7682)），另一条是针对 IronLoop 网络设置的清理（[PR #7683](https://github.com/nearai/ironclaw/pull/7683)）。社区互动指标（评论、👍）均为 0，说明当下没有形成公开讨论热度，但工程节奏稳定，未见积压告警。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日有 2 条 PR 关闭/合并，推进了基础设施清理与依赖更新：

### ✅ 已关闭：清理已退役的 IronLoop 网络设置 ([PR #7683](https://github.com/nearai/ironclaw/pull/7683))
- **作者**：hanakannzashi（core 贡献者）
- **规模**：XS，零风险
- **内容**：从可信 IronLoop 仓库配置中移除废弃的 `network_access` 字段，保留原有的 Implement / Tester / 自动 Review / 自动 Resolve 行为
- **价值**：表明 IronLoop 角色配置正在向 v1 schema 收敛，清理了历史遗留字段，是项目规范化的一次小但重要推进

### ✅ 已关闭：依赖批量升级 ([PR #7632](https://github.com/nearai/ironclaw/pull/7632))
- **作者**：dependabot[bot]
- **规模**：M，低风险
- **内容**：升级 everything-else 组的 4 个依赖（base64、toml、rstest、jsonschema）
- **价值**：常规依赖维护闭环

此外，**夜间定时任务**触发了知识图谱刷新 PR（[PR #7680](https://github.com/nearai/ironclaw/pull/7680)），属于 CI/基础设施例行动作，待人工 review 合入。

---

## 4. 社区热点

今日 **评论数与 👍 均为 0**，暂无公开讨论热度事件。但从内容关联度上看，以下两项工作形成了今日最显眼的"Issue–PR 闭环"：

### 🔥 关注焦点：Slack 未链接用户引导体验
- **Issue**：[#7681 – Slack: unlinked-user connect message is public and requires a manual round trip](https://github.com/nearai/ironclaw/issues/7681)
- **对应修复 PR**：[#7682 – fix(slack): deliver the unlinked-user connect nudge privately, with a one-click connect link](https://github.com/nearai/ironclaw/pull/7682)
- **标签**：enhancement / scope: channel / UX / Onboarding / epic
- **诉求分析**：用户希望在共享 Slack 频道中 @ 提及 IronClaw bot 时，未链接账户的引导消息应改为私聊投递，并附带一键连接链接，避免将"未连接"状态暴露给全频道并减少人工往返步骤。属于典型的"渠道集成 UX 优化 + onboarding 路径缩短"诉求。

### 📝 次要关注：[#7651 – automations 确定性无结果抑制](https://github.com/nearai/ironclaw/pull/7651)
- **作者**：serrrfirat（core）
- **规模**：XL，低风险，scope: docs
- **价值**：要求 `trigger_create` 必须提供由模型从用户措辞派生的 `result_delivery`，意图为 only-notify-on-match/change/result 时显式抑制输出；中性措辞时确定性回落到 `deliver`。这是对自动化触发器语义清晰度的一次重要升级。

---

## 5. Bug 与稳定性

严格意义上的崩溃 / 回归类 Bug **今日无新增**。最接近 Bug 报告的是上述 Slack 引导消息问题，但官方将其归类为 **enhancement**（含 UX / Onboarding / epic 标签）。

| 严重度 | 描述 | 状态 | Fix PR |
|---|---|---|---|
| 中（UX/隐私） | 未链接用户引导消息在共享频道公开投递，需多步手动往返 | OPEN | [PR #7682](https://github.com/nearai/ironclaw/pull/7682) 已就位，待 review |

**评估**：项目今日稳定性面平稳，无关键阻塞缺陷报告。

---

## 6. 功能请求与路线图信号

### 🎯 高置信度纳入下一迭代
- **Slack 未链接用户一键私聊连接**（[#7681](https://github.com/nearai/ironclaw/issues/7681) → [#7682](https://github.com/nearai/ironclaw/pull/7682)）
  - **信号强度**：极高。Issue 与 PR 同日由同一作者（sergeiest）提交并关联，PR 已自带 size: L / risk: low 的工程评估，属于"端到端闭环"的实战打磨，几乎肯定会并入下一个 patch/minor 版本。

### 🔭 中期路线信号
- **automations 触发器语义增强**（[#7651](https://github.com/nearai/ironclaw/pull/7651)）
  - **信号强度**：高。size: XL 但 risk: low，作者为 core 贡献者，且属于"功能确定性"级别的体验改进，符合 AI agent 类项目对自动化结果投递可靠性的追求。预计将与 Slack 修复一同进入下一窗口。

### 📦 依赖生态信号
- 一批 Dependabot 升级已堆叠就绪（[PR #7684](https://github.com/nearai/ironclaw/pull/7684)、[#7406](https://github.com/nearai/ironclaw/pull/7406)、[#7020](https://github.com/nearai/ironclaw/pull/7020)、[#7262](https://github.com/nearai/ironclaw/pull/7262)），其中 `tokio-tungstenite` 0.29 → 0.30 已开放两周有余，建议维护者集中 review，避免长期积压。

---

## 7. 用户反馈摘要

今日 Issue 评论为 0，但通过 [#7681](https://github.com/nearai/ironclaw/issues/7681) 的描述可以提炼出真实用户痛点：

- **痛点 A（隐私泄漏）**：未链接 Slack 用户在共享频道 @ bot 后，全频道都看到"请在 IronClaw 网页端连接后再回来"这种状态型回复，可能暴露用户的连接状态或行为意图。
- **痛点 B（流程断点）**：用户必须切换到 web 端完成连接，再切回 Slack 重发消息，**上下文无法在两次会话之间传递**，完成连接的"是什么/在哪/怎么连"信息全部丢失。
- **场景**：典型的企业 Slack 工作流，bot 在共享频道被首次使用时最易触发，属于 onboarding first-impression 场景。
- **满意度信号**：Issue 标题以"requires a manual round trip"表达明确不满；PR 描述中直接引用了原帖"what's the link to connect you?"，说明用户当时是带着挫败感向社区求助的。

总体来看，用户对 **bot 渠道侧的 onboarding 体验** 期待值较高，但当前实现与"零摩擦首次使用"的目标尚有明显差距。

---

## 8. 待处理积压

以下 PR 已开放多日，尚未合并，建议维护者关注：

| PR | 标题 | 开放天数（截至 2026-08-17） | 链接 |
|---|---|---|---|
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | chore(deps): bump tokio-tungstenite 0.29→0.30 | ~15 天 | Rust 异步栈升级 |
| [#7262](https://github.com/nearai/ironclaw/pull/7262) | chore(deps): bump wasm group (wit-component, wit-parser) | ~12 天 | WASM 工具链升级 |
| [#7406](https://github.com/nearai/ironclaw/pull/7406) | chore(deps): bump actions group (CI GitHub Actions) | ~8 天 | CI 基础设施升级 |

**风险提示**：上述三项均为低风险依赖升级，长期悬置可能导致：
1. 后续合并时与主干发生冲突；
2. 错过上游安全修复；
3. 与今天新开的 [#7684](https://github.com/nearai/ironclaw/pull/7684)（同类批升级）产生依赖图重叠。

建议维护者在下一个维护窗口对 Dependabot PR 进行批量 triage。

---

## 附录：今日完整数据清单

- **新开/活跃 Issue**：1（[列表](#)）
- **PR 总数**：9（OPEN: 7，CLOSED: 2）
- **新版本**：0
- **社区互动（评论 + 👍）**：0 / 0

> **整体健康度评估**：🟢 **健康**。代码节奏稳定，无关键 Bug 积压；UX 类诉求响应迅速（Issue 与 PR 同日联动）；依赖升级存在轻微积压但风险可控。建议关注 Dependabot 批量 review 与 Slack 引导体验 PR 的 review 进度。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-08-17** | **项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 在过去 24 小时呈现出**典型的「陈旧议题清理」模式**：所有 10 条发生更新的 Issue 均标记为 `[stale]`（4 月创建的旧议题），其中 3 条被关闭，7 条重新激活但仍标记陈旧；PR 端活跃度更高，17 条更新中 9 条已关闭（含一批 4 月积压的安全加固 PR 集中合并），8 条待合并。**当日无新版本发布**，所有 Issue 点赞数普遍偏低（最高 1），社区参与热度较弱。整体来看，项目处于「历史遗留清理 + 安全与体验优化」并行推进阶段，新功能交付节奏放缓。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 PR 共 9 条，覆盖**安全加固、UI 体验、Agent 功能扩展**三大方向，整体推进明显：

### 🔒 安全加固（重点）
维护者 `kayo5994` 提交的一组安全 PR 在同一天集中关闭，标志着一次较为系统的安全审计行动：
- **#1831** [已关闭] 脱敏主进程与 IM 模块中的敏感日志（Bearer token、第三方 API key、SSE 内容、auth code 等）→ [链接](https://github.com/netease-youdao/LobsterAI/pull/1831)
- **#1832** [已关闭] 限制 `store:*` IPC 越权访问 + 收窄通用 `ipcRenderer` 桥（防止 XSS/模型输出污染读取 `auth_tokens`、`github_copilot_github_token`）→ [链接](https://github.com/netease-youdao/LobsterAI/pull/1832)
- **#1833** [已关闭] `shell.openExternal` 增加 scheme 白名单（拒绝 `file://` / `javascript:` / `data:` 等危险协议）→ [链接](https://github.com/netease-youdao/LobsterAI/pull/1833)

### 🤖 Agent 功能增强
- **#1691** [已关闭] Agent 模板导入/导出（解决 Agent 配置无法跨设备共享）→ [链接](https://github.com/netease-youdao/LobsterAI/pull/1691)
- **#1760** [已关闭] Agent 头像支持图片上传，与 Emoji 共存 → [链接](https://github.com/netease-youdao/LobsterAI/pull/1760)
- **#1693** [已关闭] `ModelSelector` 无模型时一键跳转设置页 + 修复输入丢失 bug → [链接](https://github.com/netease-youdao/LobsterAI/pull/1693)

### 💬 IM & Cowork 体验
- **#1690** [已关闭] IM 设置删除实例二次确认弹窗（钉钉/飞书/QQ）→ [链接](https://github.com/netease-youdao/LobsterAI/pull/1690)
- **#1715** [已关闭] 修复 OpenClaw 服务端代理请求缺失 `session_id` → [链接](https://github.com/netease-youdao/LobsterAI/pull/1715)
- **#1835** [已关闭] 去除 `continueSession` 失败时重复推送的系统错误消息 → [链接](https://github.com/netease-youdao/LobsterAI/pull/1835)

**进展评估**：合并内容中 3 条安全 PR 同批落地是最大亮点，反映项目对供应链安全（XSS、token 泄漏、shell 协议劫持）的系统化应对；Agent 个性化与跨设备同步能力向前一步；IM 与 Cowork 的基础健壮性同步提升。**整体属于一次「看不见但很关键」的内功升级。**

---

## 4. 社区热点

由于所有活跃 Issue 均为 `[stale]` 陈旧议题，**当日无真正新发的高热度议题**。从评论数与历史点赞看：

| 排名 | 议题/标题 | 评论 | 👍 | 状态 |
|------|-----------|------|----|------|
| 1 | **#1813** [DeepSeek V4 无法使用 - provider rejected the request schema](https://github.com/netease-youdao/LobsterAI/issues/1813) | 8 | 0 | 已关闭 |
| 2 | **#1698** [启动状态下安装智企帝王蟹导致 gateway 端口冲突](https://github.com/netease-youdao/LobsterAI/issues/1698) | 3 | 0 | OPEN |
| 3 | **#1744** [Bug report（附件上传失败）](https://github.com/netease-youdao/LobsterAI/issues/1744) | 3 | 0 | OPEN |
| 4 | **#1796** [Write tool execution always fail](https://github.com/netease-youdao/LobsterAI/issues/1796) | 3 | 0 | 已关闭 |

**背后诉求分析**：
- 用户对 **DeepSeek V4 / 模型兼容** 问题反馈集中，但官方关闭时未给出迁移说明；
- **进程/端口互斥**（与同公司产品「智企帝王蟹」冲突）反映出多产品线间协调缺位；
- **Write/Edit 工具类失效** 与 **diff 渲染 bug** (#1783) 同时出现，提示近期前端工具体系存在回归风险。

---

## 5. Bug 与稳定性

按严重程度排列（结合关闭状态判断是否已有 fix）：

| 严重度 | 议题 | 描述 | 是否有 Fix |
|--------|------|------|-----------|
| 🔴 高 | [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | 编辑 diff 显示异常，用户已定位到 `extractDiffFromToolInput` 函数 bug | ❌ 无对应 PR |
| 🔴 高 | [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) | Write/Edit 工具一直失败（更新后仍存在） | ❌ 关闭时无 PR 关联 |
| 🔴 高 | [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) | DeepSeek V4 调用被 provider 拒绝 | ⚠️ 相关 PR [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 处理 slashed model id，但**未关闭该 Issue** |
| 🟠 中 | [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | 与「智企帝王蟹」gateway 端口冲突（必现） | ❌ 无 PR |
| 🟠 中 | [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 安装图标白色无效（大概率） | ❌ 无 PR |
| 🟡 低 | [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务通知文案错误 | ❌ 无 PR |

**判断**：编辑器核心工具（Write/Edit/diff）出现两次独立报错，可能存在**共同的底层回归**，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

| 需求 | 议题 | 对应/相关 PR | 是否可能进入下一版本 |
|------|------|--------------|---------------------|
| 对话批量删除 | [#1797](https://github.com/netease-youdao/LobsterAI/issues/1797) | 无 | ⚠️ 已关闭（👍 1），需观察是否被合入 |
| 动态调节 temperature | [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 无 | 🟡 长尾需求，关注度低 |
| 邮箱支持 OAuth2/新式认证 | [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | 无 | 🟡 应用密码废弃趋势下，需列入规划 |
| AI 回复朗读（TTS） | — | [#1682](https://github.com/netease-youdao/LobsterAI/pull/1682) | ✅ PR 仍 OPEN，UI Hook 已实现，最有可能进入 |
| 切换 Agent 清空草稿 | — | [#1707](https://github.com/netease-youdao/LobsterAI/pull/1707) | ✅ 逻辑明确，待合并 |
| Skills 导入 URL 校验 | — | [#1683](https://github.com/netease-youdao/LobsterAI/pull/1683) | ✅ 小修复，门槛低 |
| Skeleton 加载占位 | — | [#1769](https://github.com/netease-youdao/LobsterAI/pull/1769) | 🟢 体验优化 |
| 空状态插画 | — | [#1770](https://github.com/netease-youdao/LobsterAI/pull/1770) | 🟢 体验优化 |

**路线图信号**：TTS、AI 体验细节优化、空状态/Skeleton 等 UI 抛光类 PR 数量明显偏多，暗示**下个版本大概率以「体验打磨 + 安全底座」**为主题，而非大型新功能。

---

## 7. 用户反馈摘要

从 Issue 评论提炼的真实痛点：

- **模型生态压力**：用户尝试使用 DeepSeek V4 被 provider 拒绝 (#1813)，反映新模型接入流程对自定义路径支持不足。
- **企业产品协同问题**：与「智企帝王蟹」同时运行出现端口冲突 (#1698)，影响有道内部产品矩阵的共存体验。
- **核心工具可靠性**：Write/Edit 工具失败 + diff 不显示 (#1796, #1783) 是开发者最痛点，直接影响日常生产力。
- **平台兼容性盲区**：Win11 安装图标失效 (#1714)、macOS Tahoe 端口冲突 (#1698) 跨平台覆盖仍存盲点。
- **企业身份认证迁移滞后**：Outlook 强制 OAuth2 (#1745)，但客户端未跟进，用户被「卡」在连接阶段。
- **沟通缺位**：多个被关闭的 Issue（如 #1813、#1796、#1797）未在关闭时附解释说明，用户感知为「石沉大海」。

---

## 8. 待处理积压

> 以下均为 `[stale]` 标记、长期未获实质性响应的开放议题，建议维护者优先 review：

| 议题 | 标题 | 创建日期 | 等待时长 |
|------|------|----------|----------|
| [#1688](https://github.com/netease-youdao/LobsterAI/issues/1688) | 动态调整 temperature | 2026-04-15 | ~4 个月 |
| [#1698](https://github.com/netease-youdao/LobsterAI/issues/1698) | Gateway 端口冲突（必现） | 2026-04-15 | ~4 个月 |
| [#1714](https://github.com/netease-youdao/LobsterAI/issues/1714) | Win11 图标安装失败 | 2026-04-17 | ~4 个月 |
| [#1744](https://github.com/netease-youdao/LobsterAI/issues/1744) | 附件上传失败（无 PR） | 2026-04-19 | ~4 个月 |
| [#1745](https://github.com/netease-youdao/LobsterAI/issues/1745) | Outlook OAuth2 不支持 | 2026-04-19 | ~4 个月 |
| [#1751](https://github.com/netease-youdao/LobsterAI/issues/1751) | 定时任务通知文案错误 | 2026-04-20 | ~4 个月 |
| [#1783](https://github.com/netease-youdao/LobsterAI/issues/1783) | diff 渲染 bug（用户已给定位） | 2026-04-21 | ~4 个月 |

**提醒**：`#1783` 用户已附完整根因分析（指向 `extractDiffFromToolInput` 中 `edit` 分支的字段查找逻辑），维护成本极低，强烈建议优先合入或回应；`#1698` 为「必现」级别稳定性问题，影响企业用户。

---

### 📊 项目健康度快照

| 维度 | 状态 |
|------|------|
| 版本发布节奏 | 🟡 今日无发布 |
| 安全态势 | 🟢 当日集中加固 |
| Issue 响应速度 | 🔴 4 个月陈旧积压 |
| 社区互动 | 🔴 点赞/评论普遍低位 |
| PR 合并效率 | 🟢 9 条集中关闭 |
| Bug 闭环率 | 🔴 多条 high-severity 无 fix 即关闭 |

**结论**：项目当日在**安全与底层体验**层面有实质性推进，但**用户沟通**与**Bug 闭环**机制存在明显短板，建议在下一个迭代周期内重点清理陈旧 Issue 并补全关闭说明。

---

*报告基于 GitHub 公开数据生成，数据时间窗口：2026-08-16 → 2026-08-17*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-17

## 1. 今日速览

Moltis 项目今日呈现高强度的"修复日"特征：**过去 24 小时共有 7 个 PR 被合并/关闭，覆盖安全加固、构建修复、Vault 规范化、CalDAV 协议合规、依赖升级等多个方向**。社区活跃度良好，新开 2 个 Issue（其中 #1202 反映主线 CI 已红灯），新增 1 个待合并 PR（#1204，新增 MiniMax Code ACP agent）。整体而言，项目在主分支编译错误、测试不稳定、安全漏洞等方面进行了系统性修复，健康度正向提升。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日共有 **7 个 PR 被关闭/合并**，推进了多个关键模块：

| PR | 类型 | 影响 |
|---|---|---|
| [#1201](https://github.com/moltis-org/moltis/pull/1201) | 构建修复 | 修复 `moltis-gateway` 主分支无法编译的 `start_background_tasks` 缺失问题（commit 594ffaf1），是恢复主线可构建的关键前置 |
| [#1203](https://github.com/moltis-org/moltis/pull/1203) | 测试修复 | 在暂停时钟下运行 push fanout 测试，关闭 #1193 flaky 测试 |
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | 安全加固 | 修复 zip 解压路径穿越与模型路径硬编码漏洞，防止恶意 zip/HuggingFace 仓库覆盖用户信任文件 |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | 安全/兼容 | 在 `derive_recovery_kek` 之前规范化 recovery phrase（去短横线、转大写），使 vault 解封与存储哈希语义一致 |
| [#1147](https://github.com/moltis-org/moltis/pull/1147) | 功能修复 | CalDAV `list_events` 改用 RFC 4791 `calendar-query` REPORT，规范化 ISO 8601 至 UTC，保持严格的 RFC 重叠语义 |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | 功能增强 | 为通道回复目标新增 per-account/per-channel/per-user 的 `activity_log` 可见性设置（all / errors_only / off），用户级覆盖优先 |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | 依赖升级 | 升级 `postcss`（2 处）与 `js-yaml`（docs） |

**整体评估**：今日合并使项目在编译稳定性、测试可重复性、安全边界、Vault 兼容性、CalDAV 协议合规等维度均有实质性推进，工程质量显著提升。

---

## 4. 社区热点

今日 Issue/PR 评论数普遍为 0，但有 1 条 PR 引入了实质性新能力：

- **[#1204 feat: add MiniMax Code ACP agent](https://github.com/moltis-org/moltis/pull/1204)** — 新增名为 `acp-minimax-code` 的 external-agent，由 `mcode acp` 后端支持；同时加入 Moltis 默认可执行探测与 agent 注册；并文档化自动发现与手动 TOML 配置流程。这是今日唯一待合并的功能性 PR，可能反映社区对 MiniMax 系代理生态接入的诉求。

> 注：今日大多数条目评论为 0，缺乏热议；但 #1204 作为唯一新功能入口，建议维护者优先评审。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重（主线不可用）
- **[#1202 Format CI gate is red on main](https://github.com/moltis-org/moltis/issues/1202)** — `scripts/check-file-size.sh` 在主分支 594ffaf1 失败：`crates/memory-zvec/src/store.rs`（1799 行）与 `crates/gateway/src/methods/services/admin.rs`（1531 行）超出 1500 行限制，两文件均来自提交 9b47001a。**目前无对应 PR**，Format job 持续红灯，主线 CI 健康度受影响。
- **[#1201 fix(gateway): thread start_background_tasks into the memory runtime builder](https://github.com/moltis-org/moltis/pull/1201)** — 主分支 `moltis-gateway` 编译失败（`cannot find value start_background_tasks`）。**已修复并合并**。

### 🟠 行为 Bug
- **[#1205 Heartbeat ignores configured active hours and runs continuously](https://github.com/moltis-org/moltis/issues/1205)** — 用户报告 Heartbeat 忽略配置的活跃时段，持续运行。**目前无对应 PR**。

### 🟡 测试/稳定性
- **[#1193 Flaky test: push fanout timeout assertion races under full-suite load](https://github.com/moltis-org/moltis/issues/1193)** — `fanout_is_bounded_and_times_out_a_hung_endpoint` 在全套件运行时偶发失败。**已通过 #1203 修复**（使用暂停时钟）。

---

## 6. 功能请求与路线图信号

- **MiniMax Code ACP Agent 接入（#1204）**：作为今日唯一待合并功能 PR，揭示了用户希望将 MiniMax 系代理生态整合进 Moltis 注册表与配置流的诉求。鉴于该方向已自带实现与文档，预计在下个版本窗口可纳入。
- **Channel Activity Log 可见性（#1093 已合并）**：用户对"按账户/通道/用户细粒度控制活动日志"的诉求得到满足。
- **CalDAV 事件范围（#1147 已合并）**：从"全量拉取"转向"RFC 4791 calendar-query"，响应了对大日历性能与协议合规性的需求。

下一版本可能涵盖：MiniMax Code agent 内置支持、CalDAV 性能优化后的同步通道、Vault 助记词输入容错。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数据较少（多数为 0 条评论），可提炼的用户痛点主要来自 Issue 摘要本身：

- **可观察性问题（#1205）**：用户对"配置项不生效"的挫败感——明确设置了 active hours，但 Heartbeat 仍持续运行，期望配置被严格遵守。
- **CI 红线体验（#1202）**：维护者自身发现 Format 任务在主分支失败，反映出 1500 行文件大小限制与近期合并（9b47001a）之间缺乏预检，可能影响贡献者体验。
- **协议合规与性能（#1147）**：原 `list_events` 实现需拉取全部日历资源，性能与协议正确性均有改进空间，用户侧的反馈隐含"同步慢、范围不准"的痛点。

---

## 8. 待处理积压

| 项 | 类型 | 重要性 | 备注 |
|---|---|---|---|
| [#1205](https://github.com/moltis-org/moltis/issues/1205) | Bug | 高 | Heartbeat 忽略 active hours 配置，0 评论 0 👍，需维护者响应 |
| [#1202](https://github.com/moltis-org/moltis/issues/1202) | Bug/CI | 高 | 主分支 Format job 红灯且无对应修复 PR，阻塞合并 |
| [#1204](https://github.com/moltis-org/moltis/pull/1204) | Feature PR | 中 | 今日唯一待合并 PR，等待评审 |

建议维护者优先处理 #1202 与 #1201 关联的"提交体积预检"机制，避免再次发生 1500 行限制击穿；并尽快确认 #1205 的修复负责人。

---

*数据来源：Moltis GitHub 仓库过去 24 小时 Issues/PR 更新（截至 2026-08-17）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-08-17

> 数据来源：agentscope-ai/CoPaw GitHub Issues & Pull Requests（最近 24 小时）
> 报告生成时间：2026-08-17

---

## 1. 今日速览

CoPaw（仓库路径显示为 agentscope-ai/QwenPaw）过去 24 小时保持**中等偏高活跃度**：共 9 条 Issue 更新、9 条 PR 更新，全部 PR 仍处于待合并状态，无新 Release 发布。值得关注的结构性信号是——**9 条新提交的 PR 中有 8 条标注为 `[first-time-contributor]`**，其中贡献者 `suantea` 一人贡献 5 条修复，反映项目首次贡献者入场通道顺畅，外部参与意愿强；但维护者侧合并动作为零，存在 PR 积压与首次贡献者等待风险，需关注。

---

## 2. 版本发布

今日 **无新版本发布**。最新版本仍为用户在 Issue #7063、#7065 中提及的 **v2.1.0**。

---

## 3. 项目进展

今日 **无 PR 进入 main 分支**。但从待合并 PR 内容看，代码层面已提交一批"小而具体"的修复与功能增强，覆盖：

| 主题 | PR | 说明 |
|---|---|---|
| 控制台图像持久化 | [#7069](https://github.com/agentscope-ai/QwenPaw/pull/7069) | 修复重新打开会话后历史消息中 data-URL 图片缩略图丢失问题 |
| OAuth2 旋转 refresh_token 持久化 | [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | 修复远程 MCP 服务（XMind 等）的 access_token 刷新后旧 refresh_token 失效问题 |
| Cron 更新同步 | [#7064](https://github.com/agentscope-ai/QwenPaw/pull/7064) | `cron update --text` 后顶层级 `text` 字段未同步 |
| 控制台 URL 路由 | [#7067](https://github.com/agentscope-ai/QwenPaw/pull/7067) | 引入 `/chat/:agentId/:sessionId`，支持 deep-link 精确定位 agent |
| 视频内联上限可配置 | [#7071](https://github.com/agentscope-ai/QwenPaw/pull/7071) | 修复 `view_video` 硬编码 2MB 限制覆盖 provider 配置 |
| OpenAI Responses API 视频透传 | [#7070](https://github.com/agentscope-ai/QwenPaw/pull/7070) | 修复 Responses API 路径下 `view_video` 静默不传帧 |
| 后台任务列表 API | [#7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | 为多 agent 协调提供任务状态批量查询能力 |

整体看，项目在**会话与控制台的可用性细节**上有持续打磨，但缺少重量级功能落地或合并里程碑。

---

## 4. 社区热点

按评论数排序的活跃讨论：

- **#7063（3 评论，已关闭）** — [Bug: Agent 工具调用必现崩溃](https://github.com/agentscope-ai/QwenPaw/issues/7063)。`agentscope` 在 `_execute_tool_call` 中将 `await`-only 的 coroutine 当作 async generator 迭代，触发 `TypeError`。**关闭方式与是否合并修复 PR 不明确**，建议跟进确认是否真修复。
- **#7003（3 评论，已关闭）** — [外部提案：ViBo 记忆层](https://github.com/agentscope-ai/QwenPaw/issues/7003)。第三方推广自家产品，**建议识别为非社区诉求**，避免误纳入路线图。
- **#7052（2 评论，仍开放）** — [插件 API 增加 system_prompt 权限](https://github.com/agentscope-ai/QwenPaw/issues/7052)。来自 B 端插件集成方对"公司级提示词保密"的明确诉求。
- **#6471（2 评论，已关闭）** — [Cron 任务长空闲后 misfire](https://github.com/agentscope-ai/QwenPaw/issues/6471)。APScheduler AsyncIOScheduler 在 WSL2 + uvicorn 多 worker 下的已知坑，关闭前未观察到对应修复 PR。

社区诉求集中在两类：**对话/会话核心场景的稳定性** 与 **B 端/插件场景的权限与可定制性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 严重 | [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Agent 工具调用必现崩溃（async for 误用） | 已关闭 | ❓ 未见对应修复 PR，需复核 |
| 🔴 严重 | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | 运行时频繁崩溃，需刷新页面才能恢复 | **OPEN** | ❌ 无 |
| 🟠 中等 | [#7065](https://github.com/agentscope-ai/QwenPaw/issues/7065) | 多轮对话后无法查看历史消息（仅显示最近 3-4 条） | **OPEN** | ❌ 无 |
| 🟠 中等 | [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Cron 任务 misfire（AsyncIOScheduler 空闲后不触发） | 已关闭 | ❌ 未见对应修复 PR |
| 🟡 一般 | [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | workspace 与内置同名 skill 被重复加载 | **OPEN** | ❌ 无（仅以 issue 形式提出，待升级为 PR） |

**风险点**：两个"严重"级 Bug 中，#7063 关闭但缺乏可见修复 PR，存在"标记关闭但代码层未根治"的可能；#7074 反映线上崩溃频次高发，**需重点关注**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 与已有 PR 的对应关系 |
|---|---|---|
| 插件 API 增加 system_prompt 权限（B 端场景） | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | 无直接 PR，**进入下一版本可能性高**（B 端诉求清晰、门槛低） |
| 控制台文件查看器支持 C# / Shader 语言 | [#7068](https://github.com/agentscope-ai/QwenPaw/issues/7068) | 无 PR，**游戏开发场景的长尾需求**，维护者评估收益时可能延后 |
| per-agent / per-session 的 `reasoning_effort` 覆盖 | [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | 无 PR，但与 [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) "统一 provider 发现与路由"重构方向高度相关，**有望在下一波重构中一并支持** |
| skill 名称去重 | [#7073](https://github.com/agentscope-ai/QwenPaw/issues/7073) | 同作者已写好补丁逻辑描述，可快速转 PR |
| 后台任务列表 API | [#7056 → #7072](https://github.com/agentscope-ai/QwenPaw/pull/7072) | **最小可用部分已 PR 提交**，合并概率高 |
| DataPaw 原生分析应用运行时 | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 大型新应用 PR，待合并评审 |

---

## 7. 用户反馈摘要

从 Issue 评论与正文提炼：

- **崩溃是首要痛点** — #7074 用户明确反馈"正常运行崩溃，需要刷新页面才能重启，频次高发"，且附完整日志路径，反映**桌面端在普通用户路径下的稳定性仍不足**。
- **会话历史体验断裂** — #7065 用户反馈"7 轮对话后只能看到最近 3-4 条"，这是日常使用的高频路径，影响明显。
- **B 端插件方有保密诉求** — #7052 用户因"公司提示词被嵌入插件会话"担忧，明示需要 system_prompt 权限隔离；说明 CoPaw 已进入**企业级插件集成场景**。
- **多 agent 差异化需求浮现** — #7062 用户希望"快速问答助手"与"深度研究 agent"使用不同 `reasoning_effort`，反映**多角色编排已成趋势**。
- **游戏开发用户期待** — #7068 用户希望 IDE 类查看器支持 C#、shader、HLSL 等语言，**说明 CoPaw 正在被非典型 AI 受众（游戏开发者）采用**，可能打开新场景。

---

## 8. 待处理积压

| 项目 | 类型 | 创建时间 | 搁置天数 | 备注 |
|---|---|---|---|---|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | PR | 2026-07-21 | **约 27 天** | 重磅重构（provider 发现 / 路由 / 模型元数据统一），长期无评审响应，**建议维护者优先 review** |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | PR | 2026-08-12 | 约 5 天 | DataPaw 原生应用运行时大型 PR |
| [#7063](https://github.com/agentscope-ai/QwenPaw/issues/7063) | Issue | 2026-08-16 | 已关闭 | **关闭后未见修复 PR 跟进，存在"假关闭"风险** |
| [#6471](https://github.com/agentscope-ai/QwenPaw/issues/6471) | Issue | 2026-07-26 | 约 22 天 | APScheduler misfire 问题已关闭但未根治 |

**维护者侧建议**：
1. 对 8 条首次贡献者 PR 加快初步 review，避免贡献者流失；
2. 对 #6302 这类长周期重构 PR 给出阶段性反馈（即使未合并）；
3. 对"已关闭但无修复 PR"的 #7063、#6471 进行复核，确认根因是否真正解决。

---

*报告基于公开 GitHub 数据生成，所有链接均可直接访问验证。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-08-17

> 数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · 采样窗口：过去 24 小时

---

## 1. 今日速览

ZeroClaw 仓库在 24 小时内共出现 **48 条 Issue 更新**（46 条活跃 / 2 条关闭）和 **50 条 PR 更新**（46 条待合并 / 4 条已关闭），活跃度处于**高位运行**状态，治理节奏明显偏重 RFC 议程而非新功能落地。技术主线高度聚焦**安全边界收口**：插件 egress（出站流量）治理三条主线 PR（#9137 → #9582 → #9584）继续推进、OpenAI 代理被绕过问题被修复（#9606）、内置 HTTP 出站被强化（#9580 已关闭）。社区侧讨论最热烈的全部是**架构性 RFC**，仍以设计阶段为主，工程化实现尚未交付。整体来看，**0.8.4 → 下一版本的工程储备充沛，但治理负担较重**。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。最新已知基线仍为 **0.8.4**（见 [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) 中 "Current: 0.8.4" 标注）。

---

## 3. 项目进展

### ✅ 已关闭 / 已合并

| 类型 | 编号 | 标题 | 影响 |
|---|---|---|---|
| PR（已关闭） | [#9580](https://github.com/zeroclaw-labs/zeroclaw/pull/9580) | `fix(security): harden built-in HTTP egress on the shared network guard` | 关键安全基线：将网络分类原语迁入 `zeroclaw-infra::net_guard`，并强化内置 HTTP 出站策略（拒绝非全局 IPv4/IPv6、覆盖 redirect 边界等），为后续插件 egress 工作奠基。 |
| Issue（已关闭） | [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | `[Bug]: SOP step schema validation rejects a double-encoded output object` | SOP 自动模式中双重编码 JSON 被误判为无效，已修复。 |
| PR（已关闭） | [#9416](https://github.com/zeroclaw-labs/zeroclaw/pull/9416) | `docs(tools): document that AllToolsResult.tools is the pre-filter registry` | 修正工具语义歧义文档。 |

### 🚧 关键在途 PR（待合并）

| 编号 | 标题 | 评估 |
|---|---|---|
| [#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) | OpenAI Responses 走运行时代理 | **P1 安全修复**：修复 `model_provider.openai` 代理配置在 Responses API 路径被忽略的问题。 |
| [#9126](https://github.com/zeroclaw-labs/zeroclaw/pull/9126) | 校验类型化实例配置 | **XL**：要求 `config_read` manifest 声明封闭式 Draft 2020-12 schema，是插件配置安全的核心前置。 |
| [#9582](https://github.com/zeroclaw-labs/zeroclaw/pull/9582) + [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) + [#9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137) | 插件 wasi:http 主机拥有出站策略 + 安装时授权仪式 + 共享 egress 底座 | **P1 / XL**：ADR-013 方向的 Stage 2 & 3，#9582 明确要求 #9584 同步落地，否则不允许 merge。 |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | 网关：viewer 断连时保持 agent 仍在运行 | **P1 / XL**：把 Dashboard WebSocket 重新定位为观察者/控制器，修正在浏览器休眠/网络抖动时回话被错误终止。 |
| [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | knowledge 图谱加入 per-agent 归属与作用域 | **P1 / XL 安全修复**：关闭"任意代理可读写共享 SQLite 图谱"的跨代理数据泄露通道。 |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 原生 Hailo-Ollama 提供方 | **XL**：新增边缘端模型后端，进入 review 阶段。 |

### 📈 进展评估

合并/关闭面非常窄（仅 3 项），但都已落在**安全与稳定性**关键路径上；待合并的 46 条 PR 中有 11 条带 `risk:high` 且 4 条带 `priority:p1`，显示 backlog 压力集中在高风险项上。

---

## 4. 社区热点

评论数排序的 Top 议题，全部为**架构性 RFC**，反映社区当前关注的是"协议、边界、自动化"，而非具体功能：

| 排名 | 链接 | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#6808 RFC: Work Lanes / 看板自动化 / 标签清理](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | 23 | 项目治理 RFC + rollout tracker，已进入"批准 / 滚动发布"阶段。 |
| 2 | [#8603 RFC: ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | 22 | 把 OpenAI Chat Completions 协议作为一等公民暴露出去，直接对接 Open WebUI / LobeChat / Continue / Aider / LangChain。生态扩张的关键赌注。 |
| 3 | [#9488 RFC: Unified attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 17 | 统一 web chat 与多渠道的附件架构。 |
| 4 | [#6954 RFC: 内生 turn 的来源与回执契约](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | 14 | 内部发起 turn 的可追溯性，v2 修订于 08-05。 |
| 5 | [#6971 RFC: 安全态势、凭据边界与通用入口策略](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | 14 | 操作者可观测、可审计的安全总览。 |
| 5 | [#6165 RFC: 通过外部集成让核心更轻](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | 14 | 拆分非核心集成，降低维护负担。 |

**诉求观察**：社区讨论密集围绕"**协议对等**"（Chat Completions / 附件统一 / 协议成为一等公民）和"**安全可审计**"（出站策略、入站策略、凭据边界）两条轴线。前者关系生态兼容性，后者关系合规与多租户可用性，均为商业化前的关键卡点。

---

## 5. Bug 与稳定性

按优先级 / 风险降序，全部为 `priority:p1 / risk:high`，且集中在"测试门禁误报"和"网关/守护进程行为偏差"两类：

| 严重度 | 链接 | 摘要 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 P1 | [#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013) | Edge TTS 取消测试在并行负载下漏检伪造子进程 | ❌ 未发现 |
| 🔴 P1 | [#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006) | `endpoint_lock_is_held_through_guard_cleanup` 在 Parallel Runtime Test 下频繁抖动 | ❌ 未发现 |
| 🔴 P1 | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | Telegram 频道 token 无效时 `/health` 仍报 healthy | ❌ 未发现 |
| 🔴 P1 | [#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655) | 同一消息内的多张审批卡在点击前无法区分 | ❌ 未发现 |
| 🟢 已关闭 | [#9953](https://github.com/zeroclaw-labs/zeroclaw/issues/9953) | SOP 输出被双重编码后 schema 校验误拒 | ✅ 已修复 |
| 🟠 P2 | [#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020) | 独立 delegate 子循环未应用目标 thinking 策略 | ❌ 修复中（`status:in-progress`） |
| 🟠 P2 | [#10037](https://github.com/zeroclaw-labs/zeroclaw/issues/10037) | `POST /api/cron` 把非法 `session_target` 静默存为 `isolated` | ❌ 未发现 |

**健康度判断**：CI 闪烁（flakiness）问题占比偏高（#10013、#10006、#9965、#10011），且**这 4 个 Issue 都没有绑定的修复 PR**——意味着 master 上仍可能间歇性红。`/health` 报告偏差（#9811）属于运维可见性风险，建议在 0.8.x 补丁版优先处理。

---

## 6. 功能请求与路线图信号

按 RFC 接受度与已落地的 PR 综合判断：

### 高确定性候选（已有匹配 RFC + 在途 PR）

- **Chat Completions 协议面**（[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)）→ 0.8.x 或 0.9 显眼功能，预计影响 Open WebUI / LobeChat 等生态接入。
- **WASM 插件生命周期 Hook**（[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822)）→ 与 PR #9126（类型化配置校验）绑定，可能进入下一版本。
- **Schema 校验化记忆合并**（[#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998)）→ 解决 prompt 解析脆弱性，与 PR #9745（per-agent 归属）方向一致。
- **Provider fallback 熔断**（[#7881](https://github.com/zeroclaw-labs/zeroclaw/issues/7881)）→ 已在 accepted 状态，关联 `#7883`、`#7884`，近期可合并。

### 中期候选（仅 RFC 阶段）

- **Gemini Live 实时语音通道**（[#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)）→ v2 已重写为 broker 合同，13 条评论，工程化待启动。
- **分阶段可选的产品遥测**（[#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)）→ 取决于 Lucid / Qdrant 实际使用量调研结论。
- **Swarm 临时代理群与 crush 风格 TUI**（[#10025](https://github.com/zeroclaw-labs/zeroclaw/issues/10025)，今日新增，1 评论）→ 仍处于思想验证阶段。
- **日期范围条件调度**（[#7887](https://github.com/zeroclaw-labs/zeroclaw/issues/7887)）→ 与现有的 cron / Schedule 枚举需要一并升级。

---

## 7. 用户反馈摘要

从评论内容可提炼以下真实用户场景与痛点：

- **多代理协作中的数据隔离缺失**（[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)）：共享 SQLite 图谱让任意 agent 可读写彼此捕获的知识/客户端网络/交互日志，被明确列为"安全缺陷"，而非仅文档诉求。
- **Dashboard 误关闭会话**（[#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002)）：浏览器休眠或网络抖动会**取消正在进行的工作**，用户日常场景中体感强烈。
- **Telegram 集成观测性差**（[#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811)）：token 配置错误时 `/health` 显示 healthy，每 5 秒一次的 404 不可见，给运维造成误导。
- **代理审批体验不直观**（[#9655](https://github.com/zeroclaw-labs/zeroclaw/issues/9655)）：一条消息触发多张审批卡时，操作员在点击前无从分辨。
- **独立 delegate 思考策略被忽略**（[#10020](https://github.com/zeroclaw-labs/zeroclaw/issues/10020)）：调用方明确指定 thinking 配置但子循环未应用，**与用户预期不一致**。
- **OpenAI 兼容代理静默绕过**（[#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)）：用户已经显式配置 `model_provider.openai` 代理，但 Responses API 路径绕开——属于"合规性盲区"，对内网/审计场景尤其敏感。
- **编译 / 测试闪烁影响贡献者节奏**（[#10006](https://github.com/zeroclaw-labs/zeroclaw/issues/10006)、[#10013](https://github.com/zeroclaw-labs/zeroclaw/issues/10013)）：无关 PR 上出现红，会拖慢合入速度，影响外部贡献者体验。

总体社区情绪偏**理性、建设性**，没有出现明显的抱怨或负面反弹，Issue 评论普遍聚焦在设计与修复路径上。

---

## 8. 待处理积压

按"高优先级 + 高风险 + 长时间未见维护者动作"的标准挑选：

| 链接 | 主题 | 状态 | 距上次活动 |
|---|---|---|---|
| [#8692 Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | RFC 决策队列本身 | 13 评论，仍 OPEN | 8/4 起滚动 |
| [#8288 SOP milestone 5/5 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | 守护进程内置 SOP 控制面 | 仍在 accepted 跟踪 | 滚动中 |
| [#8691 ADR baseline 恢复追踪](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 文档基线 | OPEN，2 评论 | 7/4 起 |
| [#9621 分阶段遥测 RFC](https://github.com/zeroclaw-labs/zeroc

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*