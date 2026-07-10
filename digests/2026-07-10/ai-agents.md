# OpenClaw 生态日报 2026-07-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-10 02:25 UTC

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

# OpenClaw 项目日报 · 2026-07-10

> 数据范围：过去 24 小时（基于 OpenClaw GitHub 仓库 `openclaw/openclaw` 公开数据）
> 报告生成时间：2026-07-10

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时维持高强度迭代节奏：Issues 侧有 319 条仍处于活跃或新增状态、181 条已关闭；PR 侧 296 条待合并、204 条已完成合并或关闭，**净增长 +92 个待审 PR**，合并/关闭比仍处健康区间。无新版本发布，社区工作集中在缺陷修复与多端一致性问题。维护者 `steipete` 仍是绝对主力（贡献了多条 XL 级 PR），但代码评审环节出现明显积压，多个 XL PR 在 `needs proof` / `waiting on author` 状态下停滞。**项目整体向前推进，但通道稳定性与可信度相关问题仍是用户主诉焦点**。

---

## 2. 版本发布

⚠️ **过去 24 小时内无新版本发布**。本节略。

---

## 3. 项目进展（已合并 / 已关闭 PR）

> 数据样本：过去 24 小时共 204 个 PR 进入"已完成"状态，以下为可识别出的代表性合并 / 关闭：

| 类型 | PR | 说明 |
|---|---|---|
| 平台稳定性 | [#103233](https://github.com/openclaw/openclaw/pull/103233) | `fix(doctor)`：抑制 clean-state 修复尾注，关闭 [#80435](https://github.com/openclaw/openclaw/issues/80435)（取代原 [#80455](https://github.com/openclaw/openclaw/pull/80455)） |
| 多通道抽象 | [#102272](https://github.com/openclaw/openclaw/pull/102272) | `refactor(channels)`：将 channel 状态输出与快照输入解耦，覆盖 Discord/Slack/Telegram/QQ/Mattermost 等 13 个通道（status: 👀 ready for maintainer look） |
| 通道能力扩展 | [#102635](https://github.com/openclaw/openclaw/pull/102635) | `feat(slack)`：从便携式演示文稿渲染原生 Slack 图表（XL，needs proof） |
| 安卓能力 | [#102997](https://github.com/openclaw/openclaw/pull/102997) | `feat(android)`：新增安全的 cron 作业管理（XL，needs proof，取代旧 PR） |
| 安卓能力 | [#103248](https://github.com/openclaw/openclaw/pull/103248) | `feat(android)`：用真实头像替代首字母徽章（L） |
| 安卓能力 | [#101864](https://github.com/openclaw/openclaw/pull/101864) | `feat(android)`：在设置中管理 skills（XL，含视频证明） |
| 实时通道 | [#103268](https://github.com/openclaw/openclaw/pull/103268) | `fix(talk)`：等待实时工具结果交付（XL） |
| macOS 入职 | [#102637](https://github.com/openclaw/openclaw/pull/102637) | `fix(macos)`：加固 macOS 新装 AI 入职流程，关闭 [#102614](https://github.com/openclaw/openclaw/issues/102614) |
| 性能 | [#102971](https://github.com/openclaw/openclaw/pull/102971) | `perf(gateway)`：避免聊天净化器的逐字符重建（关闭 [#102915](https://github.com/openclaw/openclaw/issues/102915)） |
| 模型目录 | [#103241](https://github.com/openclaw/openclaw/pull/103241) | `fix(deepseek)`：对齐 DeepSeek V4 目录与遗留别名（关闭 [#103192](https://github.com/openclaw/openclaw/issues/103192)） |
| 模型目录 | [#103260](https://github.com/openclaw/openclaw/pull/103260) | `fix(xai)`：对齐 xAI Grok 4.20 目录与已退役 Grok Fast 工具默认值（关闭 [#103242](https://github.com/openclaw/openclaw/issues/103242)） |
| 测试覆盖 | [#103204](https://github.com/openclaw/openclaw/pull/103204) | `fix(test)`：恢复 OpenRouter 与 Fireworks 实时网关覆盖（关闭 [#103189](https://github.com/openclaw/openclaw/issues/103189)） |
| 安全 | [#103267](https://github.com/openclaw/openclaw/pull/103267) | `fix(security)`：收紧 `include` 权限修复的边界（S） |
| 通道修复 | [#102171](https://github.com/openclaw/openclaw/pull/102171) | `fix(telegram)`：保留裸 URL 查询分隔符（关闭 [#102162](https://github.com/openclaw/openclaw/issues/102162)） |
| 资源管理 | [#103263](https://github.com/openclaw/openclaw/pull/103263) | `fix(agents)`：在 GC 强制删除会话 worktree 之前再次检查 owner 活跃度 |
| 浏览器 | [#103243](https://github.com/openclaw/openclaw/pull/103243) | `fix(browser)`：处理托管 Chrome spawn 时的异步错误事件 |
| 数据一致性 | [#99122](https://github.com/openclaw/openclaw/pull/99122) | 修复删除会话后其轨迹产物残留在磁盘的问题（关闭 [#89200](https://github.com/openclaw/openclaw/issues/89200)） |
| 协议容错 | [#102987](https://github.com/openclaw/openclaw/pull/102987) | `fix`：忽略无效 `Retry-After` HTTP 日期（例如 `31 Feb`） |
| iOS | [#103096](https://github.com/openclaw/openclaw/pull/103096) | `feat`：iOS 隐私屏的位置控件（修复 [#103013](https://github.com/openclaw/openclaw/issues/103013)，含截图证明） |
| CI | [#103264](https://github.com/openclaw/openclaw/pull/103264) | `fix(ci)`：固定 Kova 评测器的 timeout 信号契约 |
| 关闭（未合并） | [#102805](https://github.com/openclaw/openclaw/pull/102805) | `feat(telegram)`：通过 Telegram Mini App 打开控制台（XL，关闭） |
| 关闭（未合并） | [#102409](https://github.com/openclaw/openclaw/pull/102409) | `fix(proxy-capture)`：UTF-8 边界截断（diamond lobster 评级，关闭） |
| 关闭（未合并） | [#97448](https://github.com/openclaw/openclaw/pull/97448)、[#97308](https://github.com/openclaw/openclaw/pull/97308)、[#97275](https://github.com/openclaw/openclaw/pull/97275) | 媒体生成唤醒回退相关 PR 链，需要可观测证明 |

**整体判断**：今日合并/关闭流以**通道能力扩展 + 模型目录刷新 + 安全边界**三条主线推进，安卓客户端的能力面被显著补齐（cron / skills / 头像 / macOS 入职形成"全平台一致性"小战役），但通道架构改造尚未合入主干（#102272 仍在等评审），社区可见的可见性证明（visible proof）缺口仍在影响 P1 PR 的合并速度。

---

## 4. 社区热点

按评论数与点赞数综合排序，今日最受关注的议题与 PR：

### Issues 端

1. **[#44925](https://github.com/openclaw/openclaw/issues/44925)（💬 21，👍 1）** — *Bug: Subagent 完成结果在超时场景下静默丢失，无重试、无通知、无自动重启*。P1，钻石龙虾评级。`telegram forum` 场景下多次出现 E31 / E42 / E45 错误码，这是当前社区最关注的可靠性话题之一。
2. **[#63918](https://github.com/openclaw/openclaw/issues/63918)（💬 18，👍 1，已关闭）** — Cron `agentTurn` 向 `gpt-5-nano` 发送 `thinking=none`，触发 400 错误。已关闭说明已有 PR 落地。
3. **[#99241](https://github.com/openclaw/openclaw/issues/99241)（💬 15，👍 2）** — 长会话/ANSI 密集场景下，工具输出被折叠为 `(see attached image)` 图像占位符，模型无法读回原始 stdout。`P1`，正在等待产品决策。
4. **[#73148](https://github.com/openclaw/openclaw/issues/73148)（💬 15，👍 3，已关闭）** — `image` 工具在缺失 `sharp` 包时返回不透明的 `Failed to optimize image`，现已修复。
5. **[#45740](https://github.com/openclaw/openclaw/issues/45740)（💬 14，👍 1）** — `gh-issues` skill 直接把不受信任的 issue body 注入子智能体提示，存在提示注入风险（钻石龙虾 + 安全标记）。**需安全评审**。
6. **[#53628](https://github.com/openclaw/openclaw/issues/53628)（💬 13，👍 1）** — 安装 skill 时不解析 `${XDG_CONFIG_HOME}` 变量，导致 Docker 路径错位。
7. **[#63829](https://github.com/openclaw/openclaw/issues/63829)（💬 12，👍 10）** — *Feature: Per-agent memory-wiki vault 配置*。**点赞数全场最高**，说明多代理隔离的"知识金库"是社区强烈诉求。
8. **[#102175](https://github.com/openclaw/openclaw/issues/102175)（💬 12，👍 1）** — `room_event` 强制 `message_tool_only`，即便配置 `visibleReplies=automatic`，引发 prompt cache 抖动（回归）。

### PR 端

- **[#102637](https://github.com/openclaw/openclaw/pull/102637)** `fix(macos): harden fresh AI onboarding`（P0，金虾评级）——维护者署名、AI 辅助，对 macOS 新装入职的关键路径加固，是合并优先级最高的待审 PR 之一。
- **[#102635](https://github.com/openclaw/openclaw/pull/102635)** `feat(slack): render native charts` —— XL 级，影响 5+ 通道与

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-07-10  
**数据范围**：13 个开源项目 24 小时动态  
**分析视角**：活跃度、技术路线、社区健康度、行业趋势

---

## 1. 生态全景

2026 年 7 月 10 日的开源个人 AI 助手/智能体生态呈现**「头部高强度迭代 + 中尾部加速分化」**的格局：OpenClaw、ZeroClaw、CoPaw、IronClaw 四款产品占据绝对活跃度头部（24 小时 PR+Issue 总互动量均超 50），构成生态第一梯队；Hermes Agent、NanoBot、NanoClaw、LobsterAI 处于中高位活跃带，聚焦特定功能纵深（如长期目标、MCP 稳定性、调度系统、Cowork UX）；PicoClaw 处于稳健维护期；Moltis 处于极低活跃的"社区自发维护"状态；NullClaw、TinyClaw、ZeptoClaw 三项目 24 小时内完全无活动，**生态分化已显著**。当日仅 **CoPaw 发布了 v2.0.0-beta.5** 一个新版本，但 IronClaw 的 release draft（含 2 个 API breaking changes）与 ZeroClaw 的 0.8.3/0.9.0 tracker 显示版本节奏正在逼近。**整体判断**：生态从「功能广度竞赛」转入「可靠性 + 安全 + 协议一致性」的质量巩固期。

---

## 2. 各项目活跃度对比

| 项目 | Issue 活跃/关闭 | PR 待合并/已合 | 新版本 | 当日工作重心 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 319 / 181 | 296 / 204 | 无 | 多通道抽象、安卓一致性、安全边界 | 🟢 高活跃（PR 净增 +92，通道/模型/安全三线推进） |
| **ZeroClaw** | 35 / 11 | 50 / 11 | 无 | **SSRF 三部曲收尾**、MCP 注册表共享、ZeroCode TUI | 🟢 极高活跃（85 条工单级互动，安全里程碑） |
| **CoPaw (QwenPaw)** | 20 / — | 50 / 31 | **v2.0.0-beta.5** | Sprint 4.1 集成测试、MCP driver 审批、上下文压缩修复 | 🟢 高活跃（唯一版本发布，质量基线夯实） |
| **IronClaw** | 24 / 8 | 22 / 28 | 无（draft pending） | "default-backed builder setters"重构系列全合入、Slack 通道修复 | 🟢 高活跃（28 条合入含 9 条同一重构系列） |
| **Hermes Agent** | 35 / 15 | 47 / 3 | 无 | 凭据池调度、Gateway 适配器、Provider base_url 残留修复 | 🟡 高密度维护期（仅 3 合入但 P1 数据丢失风险持续暴露） |
| **NanoBot** | 12 / ~10 | 18 / 5 | 无 | **MCP 重连、沙箱路径防护、long-task 工具重做** | 🟢 良好（陈旧 Issue 集中清理，社区参与度上升） |
| **NanoClaw** | 9 / **0** | 18 / 3 | 无 | 计划任务列车 Part 2/5、启动韧性 | 🟠 高活跃中风险（**0 Issue 关闭**，安全 Issue #2762 积压 26 天） |
| **LobsterAI** | 4 / 1 | 14 / 11 | 无 | Cowork UX、OpenClaw 网关集成、本地化 | 🟢 高活跃（代码侧快，但社区 Issue 多 stale） |
| **PicoClaw** | 3 / — | 16 / 4 | 无 | LINE panic 防护、write_file 安全默认、依赖升级 | 🟡 中等（生产可靠性缺口：Matrix 无重连、QQ 无流式） |
| **Moltis** | 0 / 0 | 1 / 0 | 无 | 社区 PR：GPT-5.6 模型目录 | ⚪ 极低活跃（仅 1 条 PR 等待核心维护者 review） |
| **NullClaw** | 0 / 0 | 0 / 0 | 无 | — | ⚪ 停滞 |
| **TinyClaw** | 0 / 0 | 0 / 0 | 无 | — | ⚪ 停滞 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | 无 | — | ⚪ 停滞 |

**关键观察**：
- **PR 净增**：OpenClaw（+92）、IronClaw（约 +0 但 28 合入）显著；
- **Issue 关闭率**：OpenClaw（56.8%）、NanoBot（约 83%）、ZeroClaw（31%）vs NanoClaw（**0%**）——后者积压风险突出；
- **版本节奏**：13 个项目中 12 个当日无版本发布，**生态整体处于"合入但未切版本"的常态迭代期**。

---

## 3. OpenClaw 在生态中的定位

### 规模对比
- **Issue/PR 量级**：OpenClaw 319 活跃 Issue + 296 待合并 PR，单日 204 合入，是 ZeroClaw（85）、CoPaw（70）、IronClaw（72）的 **3-4 倍量级**，稳居生态头部。
- **合并吞吐量**：单日 204 合入 vs IronClaw 28、ZeroClaw 11、CoPaw 31，**OpenClaw 是当日唯一进入"高吞吐合并期"的项目**。

### 技术路线差异
| 维度 | OpenClaw | ZeroClaw | CoPaw | IronClaw | NanoBot |
|---|---|---|---|---|---|
| 架构核心 | **13 通道抽象 + 全平台一致性** | 安全审计优先 + 配置驱动 | Sprint-based QA（21 用例集成测试） | Reborn 模块化 builder setters | 长期目标 + MCP 网关 |
| 当日焦点 | channel 解耦 + 安卓/macOS 一致性 | **SSRF 三层防御** | MCP driver 审批 + 上下文压缩 | 配置层 + 错误处理规范化 | 沙箱 + 长期任务工具重做 |
| 安全策略 | `include` 权限边界收紧（#103267） | **DNS rebinding + 内网白名单** | Driver 审批 level 解耦 | workspace `unused_must_use` deny | 相对路径 symlink 越界防护 |
| 凭据/Provider | DeepSeek V4 / Grok 4.20 模型目录对齐 | 重点（Qwen3.5/Anthropic 405/429） | Auto Memory Search Beta | 租户级共享凭据（#5499 draft） | zhipu/Coding Plan 接入 |

### 社区规模对比
- **维护者集中度**：OpenClaw 高度依赖 `steipete`（单日署名多条 XL PR），与 Hermes Agent 依赖 Teknium 系维护者类似；
- **外部贡献活跃度**：OpenClaw、NanoBot、ZeroClaw 三者外部贡献占比明显高于 LobsterAI（单一贡献者 MaoQianTu 主导）；
- **PR 评审积压**：OpenClaw 多个 XL PR 处于 `needs proof` / `waiting on author`，与 PicoClaw 的 28 天 PR 积压、IronClaw 99 天 CLI secrets 未推进形成不同类型的"评审漏斗"。

### OpenClaw 的相对优势
1. **通道广度**：覆盖 Discord/Slack/Telegram/QQ/Mattermost 等 13+ 通道，是 PicoClaw、NanoClaw 等同类项目的 2-3 倍；
2. **全平台覆盖**：iOS/Android/macOS/Linux 全端推进，安卓 cron/skills/头像三件套补齐；
3. **协议适配速度**：DeepSeek V4 / xAI Grok 4.20 当日完成目录对齐，体现对前沿模型的快速跟进能力；
4. **工程节奏**：单日 204 PR 合入的吞吐量是当前生态无人能及的水平。

---

## 4. 共同关注的技术方向

下列方向在 **≥3 个项目**中同步出现，是当前生态的共同诉求焦点：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **🔐 安全/SSRF/审批治理** | ZeroClaw（SSRF 三部曲）、NanoClaw（MCP 审批卡走私 #2762/#2827）、Hermes Agent（凭据池级联污染）、IronClaw（审批通知消失 #5553） | 外部 URL/DNS rebinding 防御；MCP `add_mcp_server` 审批卡完整呈现；凭据池 per-key quota 隔离 |
| **🔄 通道可靠性 / 重连 / 流式输出** | PicoClaw（Matrix 静默死亡 #3203、QQ 无流式 #3201）、NanoBot（WhatsApp 群组外溢 #4823）、NanoClaw（Telegram allowed_updates 黑洞 #2989）、Hermes Agent（QQBot 死循环 #52914） | 通道断线自愈；流式输出对齐；群组隔离 |
| **🧠 上下文压缩 / 长期会话** | CoPaw（tool_use 永久丢失 #5856/#5858）、OpenClaw（stdout 折叠为占位符 #99241）、IronClaw（context compaction error #5838） | 压缩过程中保留 tool 链结构；stdout 可读回；OOM/compaction 错误恢复 |
| **⚙️ 多模型路由 / Per-task 模型配置** | NanoBot（任务专用模型 #912 + cron 模型预设 #4622）、OpenClaw（DeepSeek V4 + Grok 4.20 目录）、Moltis（GPT-5.6 目录 #1146） | 按任务类型（对话/工具调用/浏览器/Cron）分别指定模型；context window 精确区分 |
| **🛡️ MCP 稳定性与生命周期** | NanoBot（AsyncExitStack 过期清理 #4843）、ZeroClaw（MCP 注册表共享 #8866）、CoPaw（streamable_http 无重连 #5900）、Hermes Agent（gateway hygiene 永久删除） | MCP 重连、进程泄漏治理、会话生命周期 |
| **📊 可观测性 / 审计** | IronClaw（Daily failure taxonomy #5859）、NanoClaw（`/add-audit` PR #2987）、OpenClaw（doctor clean-state 抑制） | 失败分类机制；审计日志；调试日志降噪 |
| **🎨 Cowork / 长会话工作流闭环** | LobsterAI（时间戳 #1339、历史回溯 #1341、全文搜索 #1343、Markdown 导出 #1345）、OpenClaw（room_event 抖动 #102175） | 长会话可治理性；可检索；可导出 |
| **🤖 Agent 元能力/工具自发现** | ZeroClaw（agent 不知道 `zeroclaw cron` #5862）、CoPaw（Auto Memory Search Beta） | 工具自我描述能力；agent 对自身能力的元认知 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全平台客户端 + 多通道 IM 网关 | 重度 IM 用户、跨平台团队 | 13 通道抽象 + 全端覆盖（iOS/Android/macOS） + 实时通道（talk） |
| **ZeroClaw** | **安全优先** + 跨厂商协议兼容 | 企业安全敏感部署、API-first 用户 | SSRF 三层防御 + Daemon-owned agent 输出分离 + ZeroCode TUI |
| **CoPaw / QwenPaw** | v2.0 Beta 质量基线 + Sprint 化 QA | AgentScope 生态用户、生产部署者 | Sprint 4.1 集成测试 + MCP driver 审批 + Auto Memory Search |
| **IronClaw** | Reborn 架构重构 + 多渠道审批 | 企业内部自动化、Slack 重度用户 | "default-backed builder setters" + workspace `unused_must_use` deny + WASM 工具 |
| **Hermes Agent** | 多 provider 凭据池 + Desktop 客户端 | 多模型研究者、桌面端用户 | `credential_pool_strategies.zai: round_robin` + 远程/本地分离架构（在 #18715 中酝酿） |
| **NanoBot** | 长期目标 + 网关稳健化 | 个人/小团队自动化 | 长期任务门控（#4844）+ MCP AsyncExitStack 管理 + complete_goal 工具重做 |
| **NanoClaw** | **计划任务系统** + 安全治理架构 | 调度场景重度用户 | guarded-actions phase 2（#2986） + `ncl tasks` 控制平面 + iMessage skill 注册 |
| **PicoClaw** | 多通道扩展 + 轻量 daemon | 树莓派/边缘部署、IM 重度用户 | StreamingCapable 抽象 + 远程 WebSocket 模式 + ARMv7 支持 |
| **LobsterAI** | Cowork UX + OpenClaw 网关 | 知识工作者、自动化任务链构建者 | 子代理显示名同步 + steer 队列附件 + Windows 品牌化标题栏 |
| **Moltis** | 模型目录跟随 + 极简维护 | 极简主义者、轻度使用者 | 第三方贡献驱动的 GPT-5.6 目录 + 主目录+Codex 回退双层结构 |

**关键架构差异**：
- **网关 vs 单端**：ZeroClaw/CoPaw/Hermes 倾向 API 网关化；OpenClaw/PicoClaw 倾向多端覆盖；NanoBot/NanoClaw 倾向个人 daemon。
- **同步 vs 异步审批**：CoPaw 的 MCP driver approval level vs NanoClaw 的 `guarded-actions allow/hold/deny` 是两种治理哲学的分化。
- **配置驱动 vs UI 驱动**：IronClaw/NanoClaw 强调 CLI/config 治理；LobsterAI/CoPaw 强调 Cowork/TUI/UX。

---

## 6. 社区热度与成熟度

### 第一梯队 · 快速迭代期（活跃度极高 + 持续扩量）
- **OpenClaw、ZeroClaw、CoPaw、IronClaw**  
  当日互动 50-85 工单级别，PR 持续涌入，处于"功能列车"密集合龙阶段。共同特征是**核心团队 + 外部贡献双驱动**，但**PR 评审漏斗**成为瓶颈（OpenClaw 多 XL PR 在 `needs proof`，IronClaw release draft 待 7 天）。

### 第二梯队 · 质量巩固期

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-10

> 数据来源：github.com/HKUDS/nanobot ｜ 报告时间：2026-07-10

---

## 1. 今日速览

NanoBot 今日整体处于**中高度活跃**的开发节奏，过去 24 小时共产生 22 条 Issue 更新与 23 条 PR 更新，新开/活跃 12 条 Issue 与 18 条待合并 PR，处理量与近几天持平。维护者 chengyongru 继续承担主要代码贡献（涉及目标（goal）门控、MCP 重连、WebUI 重构、文档等多个 P1 议题），同时外部贡献者活跃提交了 MCP 修复、Docker 构建修复、Red Hat 证书支持等关键补丁。无新版本发布，但仓库内多个 P1 修复 PR 已进入或临近合并窗口，预计下一次发布将聚焦于长期目标（long-task / complete_goal）工具重新设计与 MCP 稳定性闭环。

整体健康度评估：**良好偏积极**。长期未响应的"陈旧（stale）"Issue 今日大量关闭，仓库似乎在集中清理积压；同时新开 Issue 质量较高（多含复现步骤与修复建议），反映社区参与度持续上升。

---

## 2. 版本发布

**无新版本发布**。近 24 小时内 Releases 列表无新增。预计下一版本将包含 P1 修复集合，候选 PR 已在合并窗口附近（详见第 3 节）。

---

## 3. 项目进展

今日明确的合并 / 关闭 PR 共 5 条，主要集中在沙箱安全、依赖修复与通道兼容性：

| PR | 主题 | 影响 | 链接 |
|---|---|---|---|
| #4843 (open→近合并) | **fix(mcp)** 重连期间延迟清理过期 `AsyncExitStack` | 修复 MCP 流式 HTTP 会话过期时的网关崩溃 | [#4843](https://github.com/HKUDS/nanobot/pull/4843) |
| #4859 (closed) | **fix(matrix)** 保留 `mxc://` Markdown 图像源 | 修复 mistune 3.3.3 重写 `mxc://` URL 导致的 Matrix 图像发送回归 | [#4859](https://github.com/HKUDS/nanobot/pull/4859) |
| #4629 (closed) | **fix(exec)** 阻止相对路径 symlink 越界 | 沙箱执行通道路径越界防护补全（与 #3958 闭环） | [#4629](https://github.com/HKUDS/nanobot/pull/4629) |
| #4857 (closed) | **Dockerfile ARG `NANOBOT_EXTRAS`** 允许构建时覆盖可选 Python 依赖 | 降低升级与容器化时的依赖冲突 | [#4857](https://github.com/HKUDS/nanobot/pull/4857) |
| #4863 (open, 高优先) | **fix(webui) 同步 `webui/package-lock.json`** | 修复 `npm ci` 阶段 Docker 构建失败（来自 issue #4843 关联） | [#4863](https://github.com/HKUDS/nanobot/pull/4863) |

整体进度判断：**项目向前迈进了大约一步“稳定性台阶”**。沙箱路径防护与 MCP 重连的两条安全 / 稳定性 PR 形成闭环，#4843 还触发了连锁工程任务（WebUI 包锁文件同步、AgentLoop 内 MCP 生命周期重构，见 #4858），说明维护者正在系统性收紧网关与沙箱层。

---

## 4. 社区热点

按评论数与点赞排序，今日最具讨论价值的话题：

- **[#912] 任务专用模型配置（3 👍, 5 评论）**  
  提议为 Conversational / Tool Use / Browser Use 等不同任务类型分别指定模型。开放性讨论意味着潜在的高价值功能，与 #4622（cron 模型预设）方向一致。  
  👉 [Issue #912](https://github.com/HKUDS/nanobot/issues/912)

- **[#1267] zhipu provider 不工作（6 评论，已关闭）**  
  智谱 Coding Plan 用户反馈余额不足异常，问题已关闭（疑似配置侧问题）。这一类问题反映中国地区 LLM 用户的接入路径仍有摩擦。  
  👉 [Issue #1267](https://github.com/HKUDS/nanobot/issues/1267)

- **[#4823] WhatsApp 群组响应回归（4 评论）**  
  自 0.2.2 起，群组允许列表失效，任何群组都会响应用户消息。属严重回归，今日已新开 #4864 形成“目标工具”侧的并行 bug。  
  👉 [Issue #4823](https://github.com/HKUDS/nanobot/issues/4823)

- **[#954] 进度流式输出泄露内部工具调用（4 评论, 1 👍, 已关闭-陈旧）**  
  v0.1.4 引入的 PR #802 把 `exec/read_file` 等内部调用广播给用户。该问题虽被标陈旧，但关乎隐私边界，影响仍存。  
  👉 [Issue #954](https://github.com/HKUDS/nanobot/issues/954)

**分析**：用户诉求集中在三件事——**多模型路由**（更精细化的策略控制）、**更强的群组隐私与权限隔离**（特别是 WhatsApp）、**通道扩展与稳定性**（Telegram/Discord 媒体清理、SimpleX Chat 等新通道）。这些都推动了今日多项 PR 工作。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue / PR | 状态 | 是否有修复 PR | 链接 |
|---|---|---|---|---|
| 🔴 **严重 · 回归** | #4823 WhatsApp 群组响应外溢到所有群组 | OPEN | ❌ 暂无 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) |
| 🔴 **严重 · 回归** | #4864 `complete_goal` 死循环（gateway 把 `recap` 解析为裸字符串而非 JSON） | OPEN | ⚠️ 相关 PR #4844（门控长期目标） | [#4864](https://github.com/HKUDS/nanobot/issues/4864) |
| 🟠 **高 · 入门体验** | #4860 `nanobot onboard` / `nanobot webui` 命令不存在 | OPEN（评论 2） | ❌ 暂无 | [#4860](https://github.com/HKUDS/nanobot/issues/4860) |
| 🟠 **高 · 沙箱隔离** | #940 Agent 无法访问宿主机文件系统 | OPEN | ⚠️ #4845（节点证书相关）、#4862（exec 会话隔离）部分相关 | [#940](https://github.com/HKUDS/nanobot/issues/940) |
| 🟡 **中 · 资源泄漏** | #896 Telegram/Discord 媒体文件永不清理 | OPEN | ❌ 暂无 | [#896](https://github.com/HKUDS/nanobot/issues/896) |
| 🟡 **中 · Cron 残留** | #1100 删除的 cron 任务被自动加回（已关闭） | CLOSED | ✅ | [#1100](https://github.com/HKUDS/nanobot/issues/1100) |
| 🟡 **中 · 沙箱配置** | #1138 启用 restrictToWorkspace 时内置 skill 不可用 | CLOSED | ✅ | [#1138](https://github.com/HKUDS/nanobot/issues/1138) |
| 🟢 **低 · 通道桥接** | #1159 bridge 链接 408 握手超时 | CLOSED | ✅ | [#1159](https://github.com/HKUDS/nanobot/issues/1159) |

**重点关注**：`#4823` 与 `#4864` 构成同一类型的回归面（群聊 / 长时间会话场景），与正在推进的 `#4844`（gate sustained goals）密切相关，建议维护者将三者纳入同一版本窗口。

---

## 6. 功能请求与路线图信号

| 请求 | 关联 PR | 近期落地概率 |
|---|---|---|
| 任务专用模型配置（#912） | #4622（cron 模型预设）正在落地，方向一致 | ⭐⭐⭐⭐ 高 |
| SimpleX Chat 通道（#240，3 👍） | 尚无对应 PR | ⭐⭐ 中 |
| 多租户网关（#936） | 无 | ⭐⭐ 中 |
| 0-Token 路由预处理钩子（#990） | 无 | ⭐⭐ 中 |
| 插件原生沙箱接口（#931） | 与 #4862（exec 隔离）方向一致 | ⭐⭐⭐ 中高 |
| 入口 Webhook HTTP 服务（#1118，已关闭） | 无 | ⭐ 低 |
| Eden AI 兼容提供商（#4861） | ✅ 已有 PR | ⭐⭐⭐⭐⭐ 已提交 |
| nano_timer 核心工具（#4853） | ✅ 已有 PR | ⭐⭐⭐⭐⭐ 已提交 |
| Channels 引导式配置（#4855） | ✅ 已有 PR | ⭐⭐⭐⭐⭐ 已提交 |

**路线图信号**：维护者今日同时推进 **#4865 自动化指南**、**#4855 通道引导流**、**#4861 新提供商**、**#4853 nano_timer 工具**等，明显朝着"降低运维门槛 + 拓展生态"的方向演进。配合 #4844 重新设计 `create_goal` / `update_goal` 工具集，可看出下一次版本主题或为 **"Long-horizon Goal 重做 + 网关稳健化 + 文档与可观测性补齐"**。

---

## 7. 用户反馈摘要

- **痛点 1：入门体验断层**  
  #4860 反映按官网文档安装后 `nanobot onboard` / `webui` 命令并不存在，文档与 CLI 实际能力不一致。建议维护者同步 README 与 CLI 注册，或回填文档说明迁移步骤。

- **痛点 2：WhatsApp / Telegram 在群组与媒体上失控**  
  #4823、#896、#1159 等表明消息通道上的"群组隔离 + 媒体清理 + 重连稳定性"是用户最深的稳定性焦虑。

- **痛点 3：LLM 选择与执行幻觉**  
  #937 反映用户对 `exec` 工具幻觉率失望，并因此停止评估 NanoBot 框架——这是 NanoBot 需长期努力的方向。

- **使用场景：多 Agent 协同**  
  #1010 提议把每个 Slack 频道的消息视为新会话、线程视作延续——场景贴合真实团队协作需求，已被关闭为陈旧但议题有吸引力。

- **满意面**：#4857（Dockerfile 参数化）、#4845（Red Hat / OpenEuler 证书）、#4145（天气 skill 示例）等小而专的 PR 在评论中获得隐性支持，体现出用户对**生态补全型**贡献的欢迎。

---

## 8. 待处理积压提醒

虽然 #1267、#954、#937、#1006、#240 等 Issue 已被自动标 stale 并关闭，但其中至少 3 条（#954 工具调用泄露、#937 exec 幻觉、#240 SimpleX 通道）反映了真实长期诉求，建议维护者重新评估是否需要在路线图中显式回应。

**长期开放且高价值**：

- [#912](https://github.com/HKUDS/nanobot/issues/912) 任务专用模型配置（5 评论 / 3 👍）
- [#896](https://github.com/HKUDS/nanobot/issues/896) Telegram/Discord 媒体文件无界增长
- [#4823](https://github.com/HKUDS/nanobot/issues/4823) WhatsApp 群组隔离回归
- [#4864](https://github.com/HKUDS/nanobot/issues/4864) `complete_goal` 死循环

**已陈旧但有信号意义的**：#240 SimpleX Chat 通道、#937 exec 幻觉、#954 进度流式输出泄露。

**长期 open PR**：#4622（cron 模型预设）和 PR #4816（缩小 BaseException 捕获范围）等待合并，但已积压约一周，建议在下次发布窗口前优先审阅。

---

### 📌 一句话结论

NanoBot 今日在 **网关稳健化**（MCP / Matrix）与 **长期目标工具重做**（PR #4844）两条主线上并行推进，沙箱与依赖侧修复已闭环；建议下一版本重点聚焦 `complete_goal` 回归、WhatsApp 群组隔离修复与文档/CLI 对齐，并将 #4622、#4861、#4855 等接近就绪的功能 PR 一起放量发布。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-10

> 数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) GitHub 仓库当日活动（基于 2026-07-10 UTC 截止）

---

## 1. 今日速览

Hermes Agent 今日维持**高强度、高密度的维护节奏**：过去 24 小时共 50 条 Issues 更新（35 条活跃 / 15 条关闭）和 50 条 PR 更新（47 条待合并 / 3 条已合并关闭），但**无新版本发布**。从议题分布看，社区关注度主要集中在 **Gateway 多平台适配器**（QQBot / Discord / WeCom）、**Provider 凭据池调度**（Anthropic / Z.AI / OpenRouter）和**会话状态/数据一致性**三大领域，P1 级数据丢失类风险持续暴露。综合活跃度与 P1 风险判断，项目处于**「大型修复密集期 + 安全加固集中落地」**的状态，距下一次稳定发布仍有 1-2 个冲刺窗口。

---

## 2. 版本发布

**今日无新版本发布。** 最近可参考版本为社区在 Issues 中提及的 `v0.18.1`（2026-07-07，commit `f9eca7e15f1c2bfe5194aae5aa489af53c0a1a23`）以及 `v0.17.0`（Hermes Desktop 当前基线）。考虑到本日报内 50 条 PR 中约 20 条为今日新增，建议关注 24-48 小时内是否有 patch 版本合入。

---

## 3. 项目进展

今日仅 3 条 PR 完成合并/关闭，整体推进以**已合并 PR 的存量修复**为主，新功能尚未跨过合并门槛。值得关注的进展包括：

- **[#61799](https://github.com/NousResearch/hermes-agent/pull/61799)** — `fix(stt/tts): null provider subsections no longer crash voice tools`：解决 `stt.local:` / `tts.edge:` 等空 provider 子段在语音转写时抛 `AttributeError` 的问题；作者 @teknium1 注明这是对旧 PR [#47334](https://github.com/NousResearch/hermes-agent/pull/47334) 的"修复接力"。
- **[#56886](https://github.com/NousResearch/hermes-agent/pull/56886)** — `fix: dashboard auth crash with NotImplementedError for password-only providers`：修复仅配置 `BasicAuthProvider`（无 OAuth IdP）时 Dashboard 任何未认证请求崩溃为 500 错误的问题，是 Dashboard 本地化部署的关键前置条件。
- **[#46279](https://github.com/NousResearch/hermes-agent/pull/46279)** — `fix(desktop): stop voice status leaking across session switch (#46194)`：修复 Hermes Desktop 切换 session 时上一个会话的语音监听状态泄漏到全局 `$voicePlayback` 的问题。

> 本日重大新功能分支（包括 [@iaendi 的 15 语言 i18n](https://github.com/NousResearch/hermes-agent/pull/38846)、[@TerminalSausage 的 clarify rich options / Discord modal](https://github.com/NousResearch/hermes-agent/pull/49154)、[@alanwilhelm 的 reasoning `max`/`ultra` 对齐](https://github.com/NousResearch/hermes-agent/pull/61648)）目前均处于 OPEN 状态，但保持活跃更新。

---

## 4. 社区热点

按评论数与点赞数综合排序：

| 议题 | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| [#52914](https://github.com/NousResearch/hermes-agent/issues/52914) | QQBot `adapter.connect()` 缺 `is_reconnect` 参数导致无限重试 | **17** | 6 | 已关闭 ✅ |
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | 支持"远端 Hermes + 本地工具执行"分离架构 | 8 | **20** | OPEN |
| [#61487](https://github.com/NousResearch/hermes-agent/issues/61487) | Z.AI 多 key 池一个 key 命中配额，全部被级联标为耗尽 | 5 | 0 | 已关闭 ✅ |
| [#61099](https://github.com/NousResearch/hermes-agent/issues/61099) | OpenRouter 日志中"App"字段间歇显示 Unknown | 4 | 0 | 已关闭 ✅ |
| [#60429](https://github.com/NousResearch/hermes-agent/issues/60429) | Agent 不遵守已保存到 memory/skill 的规则 | 4 | 0 | OPEN |

**诉求解读：**

- **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)**（20 赞，社区呼声最高）反映典型"家庭实验室"部署模式：用户在 A 机保留工作目录与本地工具执行权，在 B 机（更便宜的 VM）跑 Hermes Agent，并希望共享 skills / sessions / provider 配置。值得注意的是两个标记为 **duplicate** 的衍生请求 [#61329](https://github.com/NousResearch/hermes-agent/issues/61329) 与 [#35410](https://github.com/NousResearch/hermes-agent/issues/35410) 表明官方已在路线图上推进相关工作。
- **[#52914](https://github.com/NousResearch/hermes-agent/issues/52914)** QQBot 适配器回归问题升温明显，17 条评论已沉淀出 `is_reconnect` 缺失引发的死循环根因讨论。
- **[#60429](https://github.com/NousResearch/hermes-agent/issues/60429)** 揭示了 Agent "Memory/Skill" 信任机制缺陷：用户保存规则后，模型依然绕过，是 prompt context 加载链路或 retrieval 路径的潜在回归。

---

## 5. Bug 与稳定性

按严重程度排序（涵盖今日新开与处于活跃状态的 Issue）：

### 🔴 P1 — 数据丢失 / 不可逆风险

| Issue | 摘要 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#61768](https://github.com/NousResearch/hermes-agent/issues/61768) | **Desktop serve 后端 cron ticker 与 `_call_cron_for_profile` 全局 retarget 竞争，导致跨 profile `jobs.json` 被全量克隆覆盖（数据丢失）** | OPEN | ❌ 暂无 |
| [#61145](https://github.com/NousResearch/hermes-agent/issues/61145) | **Gateway session-hygiene 自动压缩永久删除 transcript 而非 soft-archive** | 已关闭 | ⚠️ 已被 fix 但关单确认较晚，需追溯是否回退 |
| [#60794](https://github.com/NousResearch/hermes-agent/issues/60794) | `build_channel_directory` 同步 SQLite 阻塞事件循环，Discord 心跳停滞 | 已关闭 | ✅ |

### 🟠 P2 — 主要功能受阻 / 影响生产部署

| Issue | 摘要 | 状态 |
|---|---|---|
| [#47828](https://github.com/NousResearch/hermes-agent/issues/47828) | `/mode` 原地切换模型后，**下一轮请求仍被 pinned 到旧 provider 的 `base_url` → 400** | 已关闭 |
| [#61451](https://github.com/NousResearch/hermes-agent/issues/61451) | `credential_pool` 中单模型 429（Fable/Mythos）触发整条 Anthropic 凭据被打为耗尽，屏蔽其他免费额度模型 | OPEN |
| [#61296](https://github.com/NousResearch/hermes-agent/issues/61296) | `switch_model()` 信任非空 stale `base_url`，将新 provider 的 key 接到旧 provider 端点 | 已关闭 |
| [#61661](https://github.com/NousResearch/hermes-agent/issues/61661) | `honcho_conclude` 工具发送空 API key → `AuthenticationError` | OPEN |
| [#61657](https://github.com/NousResearch/hermes-agent/issues/61657) | Windows Desktop 安装包在 `app/desktop` 构建步骤失败（exit 1） | OPEN |
| [#58572](https://github.com/NousResearch/hermes-agent/issues/58572) | Gateway 在 Nous Portal token 过期时直接僵死，无远程恢复路径 | OPEN |
| [#48877](https://github.com/NousResearch/hermes-agent/issues/48877) | `openclaw-imports/` 与 agent 创建的 skill 在 `hermes update` 后周期性消失（与 bootstrap 同步相关） | OPEN |
| [#60715](https://github.com/NousResearch/hermes-agent/issues/60715) | `inference-api.nousresearch.com` 完全不可达，所有模型超时（curl 也失败） | OPEN |
| [#61762](https://github.com/NousResearch/hermes-agent/issues/61762) | WeCom 机器人无法识别用户上传的图片，分析请求无文件落地 | OPEN |

### 🟡 P3 — 非阻塞性缺陷

- **CLI/Config** — [#58277](https://github.com/NousResearch/hermes-agent/issues/58277) 空 `terminal:` key 导致 `load_cli_config` TypeError；[#40834](https://github.com/NousResearch/hermes-agent/issues/40834) Gateway 配置反序列化器对错误标量段崩溃。
- **Memory/Plugins** — [#55503](https://github.com/NousResearch/hermes-agent/issues/55503) Holographic memory 写入死锁；[#61673](https://github.com/NousResearch/hermes-agent/issues/61673) 测试 fixture 写入用户 live `~/.hermes/cron/jobs.json`，实测已造成"真实 cron 任务反复触发"事故（用户 phestik 报告本机踩坑）。
- **Provider/App** — [#60583](https://github.com/NousResearch/hermes-agent/issues/60583) Desktop 状态栏 tokens/sec 对流式/本地 OpenAI-compatible 提供商不准；[#61243](https://github.com/NousResearch/hermes-agent/issues/61243) 自托管 OIDC 应支持 RP-initiated logout（已 duplicate）。

> **稳定性诊断**：今日 P1 中 [#61768](https://github.com/NousResearch/hermes-agent/issues/61768) 跨 profile `jobs.json` 克隆覆盖是当前**最严重未修复风险**——多 profile 部署用户可能一夜丢失全部定时任务。

---

## 6. 功能请求与路线图信号

### 高人气功能（社区共识强烈）

1. **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715) 远程 Agent + 本地工具执行（20 👍）** — 当前 PR 层面尚无直接对应实现，但 [#61329](https://github.com/NousResearch/hermes-agent/issues/61329) 的"Desktop-only / 瘦客户端安装包"是被证明的相邻议程。
2. **[#40306](https://github.com/NousResearch/hermes-agent/issues/40306) Auto reasoning mode（ChatGPT 风格）** — 与 [#61772](https://github.com/NousResearch/hermes-agent/pull/61772) / [#61648](https://github.com/NousResearch/hermes-agent/pull/61648) PR 中的 `max`/`ultra` reasoning effort 投影修复有强协同，下一版本高概率合并。
3. **[#23524](https://github.com/NousResearch/hermes-agent/issues/23524) Cron 任务粒度的 reasoning effort override** — 切入点合理，与 PR [#61791](https://github.com/NousResearch/hermes-agent/pull/61791)（cron 执行 ledger）路线契合。

### 中长期路线信号

- **[#35410](https://github.com/NousResearch/hermes-agent/issues/35410) / [#61243](https://github.com/NousResearch/hermes-agent/issues/61243) RP-Initiated Logout 标准化** — 已有重复 issue 标记，说明官方已纳入，后续 Dashboard 升级版本应包含。
- **[#53521](https://github.com/NousResearch/hermes-agent/issues/53521) Hermes Desktop 插件管理 UI** — 桌面端 v0.17.0 后悬而未决，社区呼声中等但解决路径较清晰。
- **[#49154](https://github.com/NousResearch/hermes-agent/pull/49154) `clarify` 富选项 + Discord modal + 鉴权策略** — 已存在 PR，跨平台统一交互层的重要拼图，建议作为下一 minor 版本特性候选。

---

## 7. 用户反馈摘要

从评论中提炼的真实痛点：

- **多 profile 工作流的不安全感**：参见 [#61768](https://github.com/NousResearch/hermes-agent/issues/61768)——"**多 profile install 用户的 jobs.json 会静默被覆盖**，且是全量克隆式破坏"。这一反馈指明 Project 目前的 profile 隔离设计仍存在共享全局状态的窗口。
- **凭据池调度的"误伤"**：用户在 [#61451](https://github.com/NousResearch/hermes-agent/issues/61451) 与 [#61487](https://github.com/NousResearch/hermes-agent/issues/61487) 中明确表达：单 key/单模型的失败不应级联污染同池其他 key/模型。当前 `credential_pool_strategies.zai: round_robin` 与 Anthropic 的策略都缺乏"per-key quota"维度的局部冷却机制。
- **凭据切换的"陈旧 base_url"陷阱**：多个 issue（[#47828](https://github.com/NousResearch/hermes-agent/issues/47828)、[#61296](https://github.com/NousResearch/hermes-agent/issues/61296)、[#47828 评论](https://github.com/NousResearch/hermes-agent/issues/47828)）集中暴露 `switch_model()` 与 `/mode` 间的端点残留 Bug。用户措辞："**模型名换了，base_url 没换**"，意味着修复必须系统性地下沉到 provider 解耦层。
- **Headless 部署的运维死局**：[#58572](https://github.com/NousResearch/hermes-agent/issues/58572) 用户明确"在家庭服务器上无头跑 Telegram/Discord 网关，**token 过期后唯一恢复方式是物理访问**"，对端到端 SSO 自动续期（refresh-on-401-then-replay）有强烈诉求。
- **测试隔离缺陷造成的事故级反馈**：[#61673](https://github.com/NousResearch/hermes-agent/issues/61673) 用户 phestik 直言"This bit me for real"——cron 测试 fixture 通过导入期常量在 `HERMES_HOME` monkeypatch 失效时写入 live store，并形成长期真实定时任务。**对 CI 的 hygiene 提出严肃批评**，值得在 PR review 中重点关注。
- **Desktop 体验持续打磨**：[#60583](https://github.com/NousResearch/hermes-agent/issues/60583) 状态栏 tokens/sec 流式不准确；[#61657](https://github.com/NousResearch/hermes-agent/issues/61657) Windows 安装包在 `app/desktop` 构建阶段失败；[#48269](https://github.com/NousResearch/hermes-agent/issues/48269) `vision_analyze` 忽略 `config.yaml` 的 baked-in env 默认值——三者共同表明 Desktop 主进程对配置生命周期管理仍偏静态。
- **跨语言适配的实用主义**：PR [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) 作者选择"JSON + TypeScript 混合 i18n"而非纯 TS，体现社区对**翻译者友好性**与**类型安全**权衡的真实考量，可视作国际化策略的范例。

---

## 8. 待处理积压（维护者请关注）

按"高影响 × 老龄化"交叉排序，提醒维护者优先响应：

| Issue/PR | 类型 | 创建日期 | 当前状况 | 提示 |
|---|---|---|---|---|
| [#47828](https://github.com/NousResearch/hermes-agent/issues/47828) `switch_model` 切换后 base_url 残留 | Bug P1 | 2026-06-17 | 今日关闭，但议题年龄近 1 个月才闭环 | 建议复盘为何 24 天才修复 |
| [#40794 / #48877](https://github.com/NousResearch/hermes-agent/issues/48877) `openclaw-imports` skill 周期性消失 | Bug P2 | 2026-06-19 | 仍 OPEN，关联 `hermes update` / bootstrap | 与 [#61768](https://github.com/NousResearch/hermes-agent/issues/61768) 同属"全局状态污染"问题族，可并行修复 |
| [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) 远程 Hermes + 本地工具 | Feature P3 | 2026-05-02 | OPEN，20 👍，社区呼声最高 | 建议官方置顶回应，给出路线图或指派 maintainer |
| [#35410](https://github.com/NousResearch/hermes-agent/issues/35410) Dashboard RP-Initiated Logout | Feature P3 | 2026-05-30 | OPEN + 已 duplicate [#61243](https://github.com/NousResearch/hermes-agent/issues/61243) | 建议合并被 duplicate 议题，集中讨论 |
| [#23524](https://github.com/NousResearch/hermes-agent/issues/23524) Cron per-job reasoning 覆盖 | Feature P3 | 2026-05-11 | 仍 OPEN | 与 PR [#61791](https://github.com/NousResearch/hermes-agent/pull/61791) cron ledger 时机契合，可顺势吸收 |
| [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) Auto reasoning mode | Feature P3 | 2026-06-06 | 仍 OPEN | PR [#61648](https://github.com/NousResearch/hermes-agent/pull/61648) 在落地 effort 投影层，建议作者主动同步 |
| [#38846](https://github.com/NousResearch/hermes-agent/pull/38846) 15 语言 i18n | PR Feature | 2026-06-04 | 长时间未合 | 大型 i

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-07-10**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

过去 24 小时 PicoClaw 仓库共产生 **3 条新/活跃 Issue** 与 **16 条 PR** 变动，整体维持中等活跃度。社区讨论集中在三个方向：QQ 频道流式输出对齐、v2→v3 配置迁移缺陷、Matrix 通道断线重连缺失。PR 侧继续保持高频，**依赖升级类 PR 占绝对主导**（约 7 条，由 Dependabot 自动推送），功能/缺陷类 PR 主要集中在多通道适配（LINE、QQ、Matrix、Bedrock、DeltaChat）与稳定性增强（CLI 工具调用、ID 规范化、文件写入拦截）。当日 **无新版本发布**，但有 4 条 PR 已关闭，且全部为依赖/小修复合，节奏健康但仍偏向维护。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 仓库当前未见任何 GitHub Release 变更。建议关注 Issue #3206 涉及的 v0.2.9 配置迁移问题是否会在下一版本中修复。

---

## 3. 项目进展

今日合并/关闭的 4 条 PR：

| PR | 类型 | 影响 |
|---|---|---|
| [#3171](https://github.com/sipeed/picoclaw/pull/3171) | LINE 通道 panic 防护 | 为 `sync.Map` 类型断言增加 `ok` 检查，**消除潜在运行时崩溃** ✅ |
| [#3226](https://github.com/sipeed/picoclaw/pull/3226) | 工具安全防护 | 阻止 `write_file` 默认覆盖已存在文件并将"replace"作为建议性指令，减少对模型的有害引导 ✅ |
| [#3207](https://github.com/sipeed/picoclaw/pull/3207) | 依赖升级 | `copilot-sdk/go` 0.2.0→1.0.5（已由 [#3236](https://github.com/sipeed/picoclaw/pull/3236) 1.0.6 取代） |
| [#3213](https://github.com/sipeed/picoclaw/pull/3213) | 依赖升级 | `aws-sdk-go-v2/config` 1.32.25→1.32.27（已由 [#3238](https://github.com/sipeed/picoclaw/pull/3238) 1.32.29 取代） |

**项目进展评估：** 关闭链条中，**两条属于实质性的稳定性与安全性提升**（LINE 类型断言、write_file 行为修正）。依赖链 PR 由 Dependabot 自动迭代，整体维护节奏向前推进，但未见特性合入。

---

## 4. 社区热点

按评论数与互动指标排序，今日讨论最热的 Issues：

| 排名 | Issue | 评论 | 👍 | 链接 | 关注点 |
|---|---|---|---|---|---|
| 🥇 | [#3201 - QQ 频道流式输出](https://github.com/sipeed/picoclaw/issues/3201) | 2 | 0 | [查看](https://github.com/sipeed/picoclaw/issues/3201) | 期望 QQ 通道对齐 Telegram / Pico WebSocket 的 `StreamingCapable` 行为 |
| 🥈 | [#3206 - v2→v3 配置迁移失败](https://github.com/sipeed/picoclaw/issues/3206) | 1 | 0 | [查看](https://github.com/sipeed/picoclaw/issues/3206) | 即便全新安装也触发"unknown field"，影响首次运行体验 |
| 🥉 | [#3203 - Matrix sync 静默死亡](https://github.com/sipeed/picoclaw/issues/3203) | 1 | 0 | [查看](https://github.com/sipeed/picoclaw/issues/3203) | 长轮询断开后无重连，systemd 无法重启，造成"假活" |

**背后诉求分析：** 三条热点都指向**生产可用性**——用户希望 PicoClaw 在多通道部署（QQ / Matrix）上达到与企业级 IM 一致的可靠性与体验一致性，特别是流式输出与断线自愈这两大短板。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 影响日常使用
- **[#3206](https://github.com/sipeed/picoclaw/issues/3206)** v2→v3 配置迁移触发 `unknown field(s): build_info, session.dm_scope` 错误，**在 v0.2.9 全新安装也会出现**。  
  → **尚无关联 fix PR**（参考字段名后,后续需清理迁移逻辑白名单）。

### 🟠 P1 - 影响特定通道可用性
- **[#3203](https://github.com/sipeed/picoclaw/issues/3203)** Matrix `/sync` 长轮询网络抖动或 homeserver 重启后**无重连逻辑**，且主进程存活导致 `systemd Restart=on-failure` 失效——属于典型"静默死亡"。  
  → **尚无 fix PR**，建议尽快安排。

### 🟡 P2 - 已修复或正在修复
- LINE 通道 panic 风险 → [#3171](https://github.com/sipeed/picoclaw/pull/3171) 已关闭 ✅
- `write_file` 危害性默认行为 → [#3226](https://github.com/sipeed/picoclaw/pull/3226) 已关闭 ✅
- 通用工具内 `data:` URL 误识别为媒体附件（**会话历史损坏**） → [#3115](https://github.com/sipeed/picoclaw/pull/3115) 仍 OPEN，建议优先合并
- `NormalizeAgentID` 未剥离首尾 `_`，可能导致路由匹配异常 → [#3202](https://github.com/sipeed/picoclaw/pull/3202) OPEN
- CLI 工具调用缺坏 JSON 校验导致整批丢弃 → [#3180](https://github.com/sipeed/picoclaw/pull/3180) OPEN

---

## 6. 功能请求与路线图信号

| 需求 | 是否已有 PR 支持 | 落地概率 |
|---|---|---|
| **QQ 频道流式输出** ([#3201](https://github.com/sipeed/picoclaw/issues/3201)) | ❌ 无 PR | 🔥 高，社区呼声明确，与现有 `StreamingCapable` 抽象契合 |
| **AWS Bedrock 提示缓存** ([#3163](https://github.com/sipeed/picoclaw/pull/3163)) | ✅ PR 已 OPEN | 🔥 高，可显著降低 Bedrock 用户成本 |
| **`picoclaw agent --remote` 远程 WebSocket 模式** ([#3118](https://github.com/sipeed/picoclaw/pull/3118)) | ✅ PR 已 OPEN | 🟢 高，扩展 CLI 用法，向"客户端-服务端"架构演化 |
| **Raspberry Pi 3 / ARMv7 构建支持** ([#3205](https://github.com/sipeed/picoclaw/pull/3205)) | ✅ PR 已 OPEN | 🟢 高，丰富部署形态 |
| **9router 网关兼容**（[PR #3205](https://github.com/sipeed/picoclaw/pull/3205)） | ✅ 同 PR | 🟡 中，等待 OpenAI 兼容层主仓审阅 |
| **DeltaChat 通道重构 -320 LOC** ([#3222](https://github.com/sipeed/picoclaw/pull/3222)) | ✅ PR 已 OPEN | 🟡 中，可读性与维护性显著提升，但破坏现有配置 |

**路线图信号：** `StreamingCapable` 抽象正在被多通道复制推广，远程模式 + WebSocket 的引入意味着 PicoClaw 准备从单进程 daemon 走向分布式部署形态。

---

## 7. 用户反馈摘要

- **QQ 部署用户（[#3201](https://github.com/sipeed/picoclaw/issues/3201)）：** 在腾讯侧 IM 生态下，只能拿到全量回复，**等待感明显**，期望与 Telegram 一致的 token-by-token 体验——潜台词是"流式不再是可选，而是默认"。

- **新装用户（[#3206](https://github.com/sipeed/picoclaw/issues/3206)）：** 在`v0.2.9` + 最新 git 上首次运行 `picoclaw status` 即失败，造成**"安装即坏"**的负面首因体验；提示词"unknown field"对普通用户极不友好。

- **Matrix 部署用户（[#3203](https://github.com/sipeed/picoclaw/issues/3203)）：** 提出 systemd `Restart=on-failure` 失效的设计盲区——这是**面向生产环境**的硬性需求，反映出相当一部分用户已将其作为长期运行的智能体运行。

- **Raspberry Pi 部署用户（[#3205](https://github.com/sipeed/picoclaw/pull/3205)）：** 因使用 9router 网关遇到解析失败，**已自行定位 + 提交 PR**——社区正向贡献力活跃。

---

## 8. 待处理积压

| 编号 | 创建日 | 类型 | 备注 |
|---|---|---|---|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 2026-06-12 | PR | 远程 WebSocket 模式，已 28 天待审 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 2026-06-12 | PR | `data:` URL 误识别，**会话历史损坏风险** |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | 2026-06-23 | PR | Bedrock 提示缓存，**降本关键特性** |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | 2026-06-26 | PR | CLI 工具调用健壮性 |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | 2026-07-02 | Issue | Matrix 重连缺失，**生产事故隐患** |
| [#3206](https://github.com/sipeed/picoclaw/issues/3206) | 2026-07-02 | Issue | v2→v3 迁移 bug，**影响新用户体验** |
| [#3201](https://github.com/sipeed/picoclaw/issues/3201) | 2026-07-01 | Issue | QQ 流式输出，**社区呼声明确** |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 2026-07-03 | PR | DeltaChat -320 LOC 重构 |

⚠️ **维护者关注提醒：** [#3115](https://github.com/sipeed/picoclaw/pull/3115) 涉及 **会话历史持久化损坏**，[#3203](https://github.com/sipeed/picoclaw/issues/3203) 涉及 **生产环境静默死亡**，建议本周优先 review。

---

### 📈 项目健康度小结

| 维度 | 评估 |
|---|---|
| 活跃度 | 🟢 中高（19 条变动/24h） |
| 新版本节奏 | 🟡 滞后（最近一次为 v0.2.9） |
| 缺陷响应 | 🟡 中等（部分 PR 长达 28 天未合） |
| 社区贡献 | 🟢 健康（外部用户主动提 PR、定位根因） |
| 文档/迁移友好度 | 🔴 需改进（v2→v3 迁移提示不友好） |
| 生产级可靠性 | 🔴 缺口（Matrix 无重连、QQ 无流式） |

> **一句话总结：** PicoClaw 在功能广度与多通道覆盖上持续扩展（QQ / Matrix / Bedrock / DeltaChat / 9router），但 **生产级可靠性短板（重连、迁移、PR 积压）** 已成为下一阶段需要重点补齐的方向。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-10

> 数据范围：2026-07-09 ~ 2026-07-10  
> 数据来源：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 过去 24 小时处于**高活跃、中风险**状态：18 个 PR 与 9 个 Issue 同时涌动，但**无任何 Issue 在 24 小时内被关闭**，问题积压节奏明显。讨论主题高度集中——**Telegram 适配器的三连 Bug**（#2989/#2990/#2991）、**计划任务（scheduled tasks）系列重构**（已合 PR #2981 后仍有 #2988/#2986/#2992/#2997 跟进）以及 **MCP `add_mcp_server` 审批流的安全漏洞**（#2827、#2762 仍 OPEN），构成今日三条主线。整体来看，项目处于一个"功能列车"密集推进的窗口期，但安全债与回归风险同步上升，建议维护者把上述 Issue 排序前置。

---

## 2. 版本发布

**无新版本发布。** 今日 0 个 Release，处于"功能合入但未切版本"的常态迭代期。

---

## 3. 项目进展

今日共 **3 个 PR 进入已关闭/已合并** 状态，其中 2 个对项目走向影响显著：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#2981](https://github.com/qwibitai/nanoclaw/pull/2981) | Scheduled tasks: `ncl tasks` 控制平面、隔离会话、脚本闸 | CLOSED | **计划任务列车第 2/5 部分**，取代 #2947，提供 create/update/run/append-log/独立 session/run history 等完整 `ncl tasks` 资源，是项目调度子系统重构的关键拼图 |
| [#2993](https://github.com/qwibitai/nanoclaw/pull/2993) | 让 NanoClaw 对容器运行时宕机具备韧性 | CLOSED | 修复 Docker Desktop 未运行时 `docker info` 失败直接 `process.exit(1)` 导致 Discord 掉线、计划任务停摆的启动期崩溃——可观测性提升 |
| [#2621](https://github.com/qwibitai/nanoclaw/pull/2621) | 添加 `.gitattributes` 强制 shell 脚本 LF 行尾 | CLOSED | 跨平台开发体验改进，规避 Windows 下 CRLF 引发的脚本执行问题 |

**推进评估**：今日合并节奏稳，调度子系统（计划任务列车 Part 1/2 已落地，Part 3 的 PR #2988 已 OPEN 待审）与启动韧性两条线均向前一步。但未关闭的 Issue 中 Telegram 适配器、opencode provider、`hasIdenticalSend` 误杀等**用户可感知的 Bug 均无 PR 对应修复**，详见第 5 节。

---

## 4. 社区热点

按评论与互动量排序，今日最值得关注的讨论：

| 排名 | 编号 | 标题 | 互动 | 分析 |
|---|---|---|---|---|
| 🥇 | [Issue #2989](https://github.com/qwibitai/nanoclaw/issues/2989) | Telegram 因历史 `allowed_updates` 被静默黑洞 | 💬1 | 暴露**适配器无状态假设**——假设 Telegram Bot API 状态可重置，但服务端按 token 持久化，是典型"接管的旧租户"陷阱 |
| 🥈 | [Issue #2985](https://github.com/qwibitai/nanoclaw/issues/2985) | opencode provider 长轮次静默无回复 | 💬1 | 反映多 provider 抽象**会话终态判定不一致**，用户核心痛点是"消息已发出但无回执" |
| 🥉 | [Issue #2827](https://github.com/qwibitai/nanoclaw/issues/2827) / [#2762](https://github.com/qwibitai/nanoclaw/issues/2762) | `add_mcp_server` 审批卡隐藏 `args`/`env`，可"审批走私" | 👍0 | **安全高危**：agent 可通过仅展示名称/基础字段诱骗审批人批准携带恶意运行时参数——社区反应为 0 反而更需要警惕 |

**背后诉求**：用户对**透明度与可控性**的诉求显著——审批卡要"完整呈现"，交付链路要"显式失败而非静默丢"，provider 要"有回执"。这三个方向恰好对应 PR #2998（完整渲染 MCP 载荷）、PR #2996（缺失适配器路由至重试路径）、未来对 opencode 的终态对齐。

---

## 5. Bug 与稳定性

按严重程度排序，今日新开 Bug 共 6 条（去除 2 条安全类）：

| 严重度 | 编号 | 标题 | 已有 Fix PR？ |
|---|---|---|---|
| 🔴 高 | [#2985](https://github.com/qwibitai/nanoclaw/issues/2985) | opencode provider 长轮次静默无回复（用户感知为"机器无视了我"） | ❌ 无 |
| 🔴 高 | [#2997](https://github.com/qwibitai/nanoclaw/issues/2997) | `hasIdenticalSend` 误判历史发送，导致固定文本周期提醒**仅首次投递** | ❌ 无 |
| 🔴 高 | [#2995](https://github.com/qwibitai/nanoclaw/issues/2995) | 离线通道适配器时，外发消息**未投递即标记为已送达**——状态机错位 | ✅ [PR #2996](https://github.com/qwibitai/nanoclaw/pull/2996)（核心团队）+ 历史 [PR #2226](https://github.com/qwibitai/nanoclaw/pull/2226) |
| 🟠 中 | [#2989](https://github.com/qwibitai/nanoclaw/issues/2989) | Telegram polling 缺少显式 `allowed_updates` 被服务端持久化"窄化" | ❌ 无 |
| 🟠 中 | [#2990](https://github.com/qwibitai/nanoclaw/issues/2990) | `my_chat_member` 更新被丢弃，机器人对被加入群/频道无反应 | ❌ 无 |
| 🟠 中 | [#2991](https://github.com/qwibitai/nanoclaw/issues/2991) | `sender_scope='known'` 在 Telegram 频道场景永不命中（频道无 `from`） | ❌ 无 |
| 🟡 低 | [#2992](https://github.com/qwibitai/nanoclaw/issues/2992) | 计划任务在多会话间不可见/不可管理 | ❌ 无（功能缺口而非崩溃） |

**统计**：6 个 Bug 中**仅 1 个已有匹配的 fix PR 进入评审**（且已有 5/3 提交日期的旧 PR #2226 同主题待合并——存在重复工作）。其余 5 个 Bug 均无对应 PR，**响应滞后比例达 83%**。

---

## 6. 功能请求与路线图信号

今日 OPEN 的功能类 PR 透露出清晰的路线图走向：

**🔹 渠道扩张**
- [PR #2999](https://github.com/qwibitai/nanoclaw/pull/2999) — 新增 **iMessage（via Photon）** 原生渠道，注册为 `/add-imessage-cloud` skill。延续"skill-installable channel"策略，与现有注册中心一致，**合并概率高**。

**🔹 安全/治理架构**
- [PR #2986](https://github.com/qwibitai/nanoclaw/pull/2986) — **guarded-actions phase 2**：所有特权动作统一过 `guard()` 决策函数（allow/hold/deny）。这是项目级安全基线升级，与今日两条 `add_mcp_server` 安全 Issue 直接呼应，**强烈预计被合入**。
- [PR #2987](https://github.com/qwibitai/nanoclaw/pull/2987) — `/add-audit` skill，本地审计日志（ncl 命令面）。与 #2986 形成"决策+留痕"闭环，**合并概率高**。
- [PR #2998](https://github.com/qwibitai/nanoclaw/pull/2998) — 修复 #2827/#2762，**完整渲染 MCP 载荷到审批卡**。直接对应安全漏洞，**应优先合入**。
- [PR #2802](https://github.com/qwibitai/nanoclaw/pull/2802) — `ncl` socket 加固（超时/容量上限）。安全加固类，**应优先合入**。

**🔹 计划任务列车**
- [PR #2988](https://github.com/qwibitai/nanoclaw/pull/2988) — **第 3/5 部分**：任务投递仅走 `send_message` 单门。延续今日刚合入的 #2981，**合并概率高**。
- [PR #2983](https://github.com/qwibitai/nanoclaw/pull/2983) — **per-group harness capability 开关**：新组瘦默认、已有组继承。把决策粒度下沉到组配置层，是**项目配置文件架构演进的信号**。

**🔹 飞书集成**
- [PR #2994](https://github.com/qwibitai/nanoclaw/pull/2994) — delegation 子群完成后直发飞书群通知。中文社区使用场景，**合并概率中等**（依赖飞书渠道是否已成型）。

**🔹 长期挂起项（>30 天未合入，详见第 8 节）**
- [PR #1598](https://github.com/qwibitai/nanoclaw/pull/1598) — `/add-remote-storage`（WebDAV/S3 via rclone + systemd）+ `ncl groups config add-mount`
- [PR #2618](https://github.com/qwibitai/nanoclaw/pull/2618) — 还原 v1 的多模态（图像/语音/PDF）+ `chat.onReaction`
- [PR #2544](https://github.com/qwibitai/nanoclaw/pull/2544) — Telegram 启用 `message_reaction` + `callback_query`
- [PR #2877](https://github.com/qwibitai/nanoclaw/pull/2877) — Telegram 原生富文本渲染（Bot API 10.1 `sendRichMessage`）

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论与摘要中提炼的真实痛点：

- **"消息消失而无回执"**（#2985、#2995）— 用户对**可观测性**极度敏感：宁可报错也不接受"看起来已送达但实际未发送"。
- **"周期提醒只响一次"**（#2997）— 反映出**幂等去重逻辑与人工预期不一致**——`hasIdenticalSend` 误把"相同内容"判为"重复"，但用户预期是"按时重复"。
- **"机器人入群不打招呼"**（#2990）— 用户期望开箱即用的群组入群欢迎/响应能力。
- **"多群组调度任务不可见"**（#2992）— 多会话部署的痛点：调度 MCP 工具按会话隔离，跨群协调失效。
- **"审批卡说一套、运行时做另一套"**（#2827、#2762）— 安全信任模型的核心痛点，**用户对审批流程的信任正在被消耗**。
- **"频道 wirings 永不生效"**（#2991）— 用户配置了 `sender_scope='known'` 却发现 Telegram 频道场景下永远不命中，反映文档/适配器假设/用户预期三方错位。

**总体反馈倾向**：用户在"调度"、"投递"、"审批"三条主路径上**满意度低于警戒线**，但对"渠道扩张"（iMessage）和"安全治理"（guarded-actions、audit）等新增能力**持欢迎态度**。

---

## 8. 待处理积压

**长期未响应的重要 Issue（OPEN 超过 30 天，无 PR 对应）：**

| 编号 | 标题 | 状态 | 备注 |
|---|---|---|---|
| [Issue #2762](https://github.com/qwibitai/nanoclaw/issues/2762) | `add_mcp_server` 审批可隐藏 `args`/`env` | OPEN 自 2026-06-14 | 🔴 **安全高危**，虽 PR #2998 已提交但 Issue 仍未关闭 |
| [Issue #2827](https://github.com/qwibitai/nanoclaw/issues/2827) | 同一漏洞的另一份报告（duplicate 嫌疑） | OPEN 自 2026-06-21 | 🔴 **安全高危**，建议与 #2762 合并跟进 |

**长期挂起的关键 PR（OPEN 超过 30 天）：**

| 编号 | 标题 | 提交日 | 等待天数 |
|---|---|---|---|
| [PR #1598](https://github.com/qwibitai/nanoclaw/pull/1598) | `/add-remote-storage` skill（WebDAV/S3） | 2026-04-02 | **99 天** |
| [PR #2226](https://github.com/qwibitai/nanoclaw/pull/2226) | 缺失通道适配器应抛错而非静默丢弃 | 2026-05-03 | 68 天 |
| [PR #2544](https://github.com/qwibitai/nanoclaw/pull/2544) | Telegram 启用 `message_reaction`/`callback_query` | 2026-05-18 | 53 天 |
| [PR #2618](https://github.com/qwibitai/nanoclaw/pull/2618) | 还原 v1 多模态与 `chat.onReaction` | 2026-05-25 | 46 天 |
| [PR #2802](https://github.com/qwibitai/nanoclaw/pull/2802) | `ncl` socket 加固 | 2026-06-17 | 23 天 |
| [PR #2877](https://github.com/qwibitai/nanoclaw/pull/2877) | Telegram 原生富文本（Bot API 10.1） | 2026-06-28 | 12 天 |

**维护者关注建议**：
1. **立即响应 #2762 / #2827**——安全漏洞已暴露超 26 天，即便 PR #2998 已在路上，也应同步关闭/标记 Issue 并通告。
2. **去重 PR #2226 与 PR #2996**——两个 PR 在解决同一问题（缺失通道适配器），建议维护者明示选用方案。
3. **PR #1598（99 天）** 是最长挂起项，需明确"接受/拒绝/改造"三选一，避免社区贡献者失信。
4. **Telegram 三连 Bug（#2989/#2990/#2991）** 互相独立但暴露同一适配器假设缺陷，建议合并为单一"epic issue"统一追踪，避免重复 PR。

---

*日报生成时间：2026-07-10 · 数据基于公开 GitHub 事件流*  
*下次更新：2026-07-11*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-07-10**

---

## 1. 今日速览

IronClaw 仓库 24 小时内保持高活跃度：32 条 Issue 更新（新开/活跃 24 条，已关闭 8 条）与 50 条 PR 更新（待合并 22 条，已合并/关闭 28 条）共同构成今天的开发脉搏。当前进入 **"bug_bash"集中修复期**，joe-rlo 一次性提交了多条 P1/P2/P3 级别缺陷（围绕 Slack 自动化、调度、通知面板），核心团队亦同步提交了一批高优先级修复 PR（#5898、#5899、#5902、#5904）。ilblackdragon 主导的 **"default-backed builder setters"重构系列 PR 已全部合入主干**，标志着 Reborn 架构在配置层与内存/事件层的一致性大幅提升。无新版本发布，但 PR #5598 中已包含一份待发布的 release draft，提示版本节奏即将推进。

---

## 2. 版本发布

**今日无新版本发布。**

但需关注 PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（`ironclaw-ci[bot]` 自动发起的 release 草稿，OPEN 状态），其内容显示下一轮版本将带来：
- `ironclaw_common`: 0.4.2 → **0.5.0**（⚠ API 破坏性变更）
- `ironclaw_safety`: 0.2.2 → 0.2.3（兼容）
- `ironclaw_skills`: 0.3.0 → **0.4.0**（⚠ API 破坏性变更）
- `ironclaw`: 0.24.0 → 0.29.1

维护者需在合并前 review 破坏性变更的迁移说明，下游使用者应提前评估升级路径。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

**A. 大规模重构完成 —— "default-backed builder setters"系列**
- [#5791](https://github.com/nearai/ironclaw/pull/5791) XL 合并：在 Reborn 各 crate 引入 `Type::default().set_*` 流式 API
- [#5799](https://github.com/nearai/ironclaw/pull/5799)、[#5800](https://github.com/nearai/ironclaw/pull/5800)、[#5798](https://github.com/nearai/ironclaw/pull/5798)：为 identity、Slack、budget、trigger poller、TurnRunnerSettings 等配置段添加默认 setter
- [#5811](https://github.com/nearai/ironclaw/pull/5811)、[#5812](https://github.com/nearai/ironclaw/pull/5812)、[#5793](https://github.com/nearai/ironclaw/pull/5793)、[#5794](https://github.com/nearai/ironclaw/pull/5794)：将 memory backend、event store 固定装置迁移到 setter 链
- [#5652](https://github.com/nearai/ironclaw/pull/5652)：将 `unused_must_use` 提升为 workspace 级别 deny，杜绝丢弃 `Result` 的编译路径

> **意义**：整套 PR 统一了 Reborn 各组件的配置写法，消除了稀疏字段字面量噪音，并为后续 CLI 清理奠定基础。

**B. 旧版本清理**
- [#5826](https://github.com/nearai/ironclaw/pull/5826)、[#5827](https://github.com/nearai/ironclaw/pull/5827)：删除 Reborn 已退役的 v1 coverage 测试二进制及其孤儿 trace 固定装置，降低 CI 维护成本。

**C. Agent 流程改进**
- [#5861](https://github.com/nearai/ironclaw/pull/5861)（hanakannzashi）：要求 IronLoop fix agents 在编辑前显式校验 issue 的可修复性，避免对"可能为预期行为"的反馈进行误改。

### 整体评估
合并的 PR 数量可观（28 条），但其中 9 条为同一重构系列，表明今日主要技术推进集中在**配置层与错误处理规范化**上。核心功能（Slack 自动化、调度器、本地开发工具）层面的修复仍处于 PR 待合并阶段，预计下一工作日有较大机会落地。

---

## 4. 社区热点

按评论数排序的活跃讨论：

| 排名 | 编号 | 标题 | 评论 | 状态 |
|---|---|---|---|---|
| 1 | [#5553](https://github.com/nearai/ironclaw/issues/5553) | Approval notifications disappear instead of remaining in history | 4 | OPEN (P2) |
| 2 | [#5747](https://github.com/nearai/ironclaw/issues/5747) | Reborn: No way to unpair Slack on built-in host-beta mount | 3 | OPEN |
| 3 | [#5701](https://github.com/nearai/ironclaw/issues/5701) | Activity panel hides tool details / doesn't update in real time | 3 | OPEN (P2) |
| 4 | [#5504](https://github.com/nearai/ironclaw/issues/5504) | Routine creation hangs without returning result or error | 2 | CLOSED (P1) |
| 5 | [#5706](https://github.com/nearai/ironclaw/issues/5706) | Sidebar shows raw thread ID when instance is lagging | 2 | CLOSED (P3) |
| 6 | [#5557](https://github.com/nearai/ironclaw/issues/5557) | Logs deep link requires opening twice | 2 | CLOSED (P3) |
| 7 | [#5705](https://github.com/nearai/ironclaw/pull/5705) | Terminal icon in chat UI has no disable option | 2 | CLOSED (P3) |
| 8 | [#5838](https://github.com/nearai/ironclaw/issues/5838) | Run fails with context compaction error despite successful tool execution | 1 | OPEN (P2) — 已有 fix PR #5902 |

**诉求分析**：
- **审批/通知可观测性** 是当前用户最关心的痛点（#5553、#5885、#5886），用户希望"已审批/待审批"事件有完整留痕，避免误操作。
- **Slack 集成的"清理/重置路径"** 长期缺失：#5747 反映无法解绑已配对 Slack，#5882 反映重复重连进入死锁状态，#5880/#5881 反映 Web UI 与 Slack 端授权状态不同步。这是 Slack 通道被定位为 GA 前的明显缺口。
- **日常 UX 细节**（#5701、#5705、#5706、#5557、#5888/9）反映出产品仍处于打磨期。

---

## 5. Bug 与稳定性

按严重程度排列（已在 24h 内关闭的不计入待修复区）：

### 🔴 P1（高严重）
- **[#5877](https://github.com/nearai/ironclaw/issues/5877) Slack notification delivered to the wrong user（OPEN）**  
  *可能将敏感工作流结果泄露给无关用户*，是今日最严重的隐私/正确性问题。**暂无对应 fix PR**，需立即响应。

### 🟠 P2（中高）
- **[#5838](https://github.com/nearai/ironclaw/issues/5838) Context compaction error discards successful tool execution** — ✅ 已有 fix：[#5902](https://github.com/nearai/ironclaw/pull/5902)（henrypark133，OPEN），引入 `builtin__result_read` 提供有界读取。
- **[#5886](https://github.com/nearai/ironclaw/issues/5886) Pending approval blocks subsequent scheduled automation runs** — 待修复
- **[#5887](https://github.com/nearai/ironclaw/issues/5887) Run hits max action limit (101) and discards accumulated progress** — 待修复
- **[#5878](https://github.com/nearai/ironclaw/issues/5878) Revoked GitHub token produces misleading errors** — 待修复
- **[#5885](https://github.com/nearai/ironclaw/issues/5885) Approval notification opens action but no approval card rendered** — 待修复
- **[#5884](https://github.com/nearai/ironclaw/issues/5884) Routine loses credentials after external token revocation** — 待修复
- **[#5883](https://github.com/nearai/ironclaw/issues/5883) "model output could not be used" after successful tool execution** — 待修复
- **[#5882](https://github.com/nearai/ironclaw/issues/5882) Slack repeated reconnect leaves auth flow broken** — 待修复
- **[#5881](https://github.com/nearai/ironclaw/issues/5881) Auth notification delivered to wrong Slack app** — 待修复
- **[#5880](https://github.com/nearai/ironclaw/issues/5880) Slack auth completed externally not reflected in Web UI** — 待修复
- **[#5879](https://github.com/nearai/ironclaw/issues/5879) Stale error banner persists after successful follow-up** — 待修复
- **[#5836](https://github.com/nearai/ironclaw/issues/5836) Routine fails on every scheduled run with "No thread attached"** — 待修复
- **[#5553](https://github.com/nearai/ironclaw/issues/5553) Approval notifications disappear** — 待修复

### 🟡 P3（低）
- [#5890](https://github.com/nearai/ironclaw/issues/5890) Slack inconsistent sender identity
- [#5891](https://github.com/nearai/ironclaw/issues/5891) "Last completed" displays active run timestamp
- [#5888](https://github.com/nearai/ironclaw/issues/5888) Cannot delete old threads
- [#5889](https://github.com/nearai/ironclaw/issues/5889) "Load older messages" button non-functional

**整体看**：Slack 集成相关 P2 问题呈"集群"状态（共 6 条），与 [PR #5898](https://github.com/nearai/ironclaw/pull/5898) 的修复方向（per-trigger delivery、ID→name enrichment、single-delivery contract）高度吻合，预期这些 issue 将在 #5898/#5904 合入后顺次关闭。

---

## 6. 功能请求与路线图信号

- **[#2601](https://github.com/nearai/ironclaw/issues/2601) Feature Proposal: CLI / TUI for Managing Secrets**（ek775，2026-04-18 创建，至今仍 OPEN）  
  用户长期呼吁 secrets 管理工具化，承认"文档对 secrets 流程描述不清"。**这与正在合并的 [#5499](https://github.com/nearai/ironclaw/pull/5499) "WASM tool install from zip + env-provisioned tenant-shared credentials"形成互补**——后者已开启租户级共享凭据的基础设施。建议维护者将 CLI secrets 管理纳入下一里程碑，参考 #5499 的配置体系。
- **[#5897](https://github.com/nearai/ironclaw/issues/5897) [TECH DEBT] Decompose first-party skill activation module**（serrrfirat，今日创建）  
  提议把 `crates/ironclaw_first_party_extension_ports/src/activation.rs` 中的描述符加载、setup-marker 抑制、候选缓存、选择、回归固定装置拆分到独立模块；动机源自 #5857 的 hot-path 缓存修改。与 [PR #5901](https://github.com/nearai/ironclaw/pull/5901) "W4: co-locate and name the Reborn runner control plane" 的整体重构方向一致。

---

## 7. 用户反馈摘要

由于大部分 bug_bash issues 仍处于 0 评论状态，可提取的明确痛点集中于：

1. **审批工作流缺少可追溯性**（#5553、#5885）—— 用户在自动化执行中需要"曾经发起的所有审批请求"历史，但当前通知中心仅在审批触发瞬间闪一下；且在 Web UI 上点击通知后只看到运行中的 action，看不到审批卡片。
2. **Slack 通道"只能进、不能出"**（#5747）—— 反映一旦配对成功，几乎没有回退/重置机制；这与 #5882 中"重连 4 次后必须卸载重装"结合，表明该通道尚未达到 GA 状态。
3. **错误信息误导**（#5878、#5883）—— 用户期望系统在底层检测到 revoked token / 模型输出不可用时给出可操作的提示，而不是含糊的"model provider temporarily unavailable"或"the tool input could not be encoded"，这破坏了排障效率。
4. **多渠道身份混淆**（#5890、#5881）—— 当工作流代表用户发送 Slack 通知时，bot 与用户身份被混用，造成收件人困惑。
5. **积极面**：[#5859](https://github.com/nearai/ironclaw/issues/5859) "Daily ironclaw failure taxonomy — 2026-07-09"（pranavraja99）展示团队已建立每日故障分类机制，覆盖 pinchbench 等基准，问题透明化建设取得进展。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 备注 |
|---|---|---|---|---|
| [#2601](https://github.com/nearai/ironclaw/issues/2601) | Feature | CLI/TUI for Managing Secrets | **2026-04-18** | 已近 3 个月无实质推进，优先级建议提升 |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | Release | Release draft（含 2 个 API breaking changes） | 2026-07-03 | OPEN 7 天，建议尽快处理以解锁下游升级 |
| [#5747](https://github.com/nearai/ironclaw/issues/5747) | Bug | No way to unpair Slack on built-in host-beta mount | 2026-07-07 | 评论热度持续上升，已影响 Reborn GA 评估 |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) | Feature | WASM tool install from zip + tenant-shared credentials | 2026-07-01 | XL 规模，OPEN 9 天，涉及 #5459 第一部分，建议核心 maintainer 提前对齐 review |

**提醒**：核心维护者应优先关注 [#5877](https://github.com/nearai/ironclaw/issues/5877)（Slack 通知误投用户）这一潜在的隐私/合规风险，分配 owner。

---

### 项目健康度总评

- 🟢 **代码治理**：连续多日推进的 builder setters 重构 + `unused_must_use` 硬性约束，表明工程质量持续向好。
- 🟡 **缺陷暴露率**：bug_bash 一次产出的 P1/P2 数量偏高，但伴随 [#5898](https://github.com/nearai/ironclaw/pull/5898)/[#5899](https://github.com/nearai/ironclaw/pull/5899)/[#5902](https://github.com/nearai/ironclaw/pull/5902)/[#5904](https://github.com/nearai/ironclaw/pull/5904) 的同步修复，整体处于"问题可见 + 修复同步"状态。
- 🔴 **风险点**：Slack 通道的多个 P2 集群（#5877、#5880/81/82/84/85/86）+ 无对应 fix PR 的 #5877 仍是最大隐患；release draft #5598 停留 7 天未合入可能阻塞下游。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：** 2026-07-10
**项目地址：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 在过去 24 小时内保持高强度开发节奏，共处理 14 个 PR（11 个已关闭/合并，3 个仍待评审）和 5 个 Issue（4 个活跃，1 个关闭），但**未发布新版本**。当日工作主要集中在 **Cowork 模块的 UI/UX 打磨**（提示模式、附件队列、Windows 标题栏）、**OpenClaw 网关集成**（子代理工具路由、记忆同步、群任务调度）以及**本地化修复**。值得注意的是，多个长期社区 Issue 与 PR 被标记为 `[stale]`，反映出项目活跃的代码层与社区响应之间存在一定的滞后，需要维护者关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 用户仍在等待包含上述 11 个 PR 改进的下一个正式版本。

---

## 3. 项目进展

当日有 **11 个 PR 合并/关闭**，项目整体在 Cowork 与 OpenClaw 集成方向上推进明显：

### 🚀 核心功能增强
| PR | 主题 | 影响面 |
|---|---|---|
| [#2304](https://github.com/netease-youdao/LobsterAI/pull/2304) | **feat(sidebar)** 任务分页加载 + 代理排序持久化 + dnd-kit 拖拽 | 提升侧边栏在长任务列表下的性能与可操作性 |
| [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) | **Windows 品牌化标题栏**（含 Logo/名称与原生窗口控制） | Windows 平台视觉与交互一致性提升 |
| [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) | **Steer 队列支持附件**（文件、拖拽、粘贴、图片） | 扩展运行中任务的中途交互能力 |
| [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) | 移除 Plan Mode 开关 + Goal/Steer 状态条样式重构 | 提示菜单精简，借鉴 Codex 视觉语言 |

### 🔧 OpenClaw 集成
| PR | 主题 |
|---|---|
| [#2305](https://github.com/netease-youdao/LobsterAI/pull/2305) | 子代理显示名同步至 OpenClaw 并统一使用共享 helper |
| [#2303](https://github.com/netease-youdao/LobsterAI/pull/2303) | 支持 Agent 作用域的本地工具（AskUserQuestion、媒体回调） |
| [#2301](https://github.com/netease-youdao/LobsterAI/pull/2301) | 显式禁用 `memory dreaming` 并清理过期 cron 任务 |
| [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) | 同步子代理网关历史解析，修复工具调用孤儿记录 |

### 🛠️ 稳定性与本地化
| PR | 主题 |
|---|---|
| [#2308](https://github.com/netease-youdao/LobsterAI/pull/2308) | 去除 prompt 中的 NULL 字节，避免 OpenClaw 网关拒绝（已关闭但需追溯合并状态） |
| [#1397](https://github.com/netease-youdao/LobsterAI/pull/1397) | 会话列表 compact 时间本地化（修复中文下英文硬编码） |
| [#1396](https://github.com/netease-youdao/LobsterAI/pull/1396) | 卸载体验对齐 EasyClaw（NSIS 清理 AppData、检测运行实例） |

**整体判断：** 24 小时内代码侧推进显著，尤其是 Cowork 与 OpenClaw 协同层面的健壮性提升，已为下一版本的功能完整性打下基础。

---

## 4. 社区热点

当日更新主要集中在同一贡献者 **MaoQianTu** 提出的 4 个 Cowork UX 增强类 Issue，反映了用户对**会话可回溯性、可检索性、可导出性**的系统性诉求：

| Issue | 主题 | 评论 | 👍 |
|---|---|---|---|
| [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | 消息气泡缺少时间戳 | 1 | 0 |
| [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | 输入框不支持方向键回溯历史 | 1 | 0 |
| [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | 搜索弹窗仅支持标题搜索 | 1 | 0 |
| [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | 会话详情缺少 Markdown 导出 | 1 | 0 |

**诉求分析：** 这 4 条 Issue 共同指向一个核心痛点——**用户希望对长会话拥有更完整的工作流闭环**（知道何时发的 → 能复用历史 → 能搜到关键词 → 能导出做笔记）。这是一个被广泛认同的"长会话可治理性"主题，但 0 👍 与仅有 1 条评论表明**社区曝光度有限**，需要维护者主动 review 对应的实现 PR（[#1340](https://github.com/netease-youdao/LobsterAI/pull/1340)、[#1342](https://github.com/netease-youdao/LobsterAI/pull/1342)）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#1394](https://github.com/netease-youdao/LobsterAI/issues/1394) | 定时任务选择"不重复执行"时，运行一次后被**自动永久删除** | ✅ **已关闭**（仅 1 评论待追溯结论） |
| 🔴 高 | [#2308](https://github.com/netease-youdao/LobsterAI/pull/2308) | OpenClaw 网关因 NULL 字节（U+0000）硬性拒绝 `chat.send`，且会通过 `continuity capsule` 与 `evidence bridges` 持续污染 outbound prompt | ⚠️ **PR 已 CLOSED**（需确认是否实际合并至主干） |
| 🟡 中 | [#2299](https://github.com/netease-youdao/LobsterAI/pull/2299) | 子代理工具历史不同步，导致 child session 页面工具调用/结果缺失，并出现孤儿工具结果 | ✅ 已合并 |
| 🟡 中 | [#2303](https://github.com/netease-youdao/LobsterAI/pull/2303) | OpenClaw AskUser/媒体回调未正确路由到本地 Cowork 会话，IM 绑定会话被错误放行 | ✅ 已合并 |
| 🟡 中 | [#2301](https://github.com/netease-youdao/LobsterAI/pull/2301) | 旧版 Dreaming 启用状态未显式写入配置，导致 OpenClaw 残留 managed dream cron 任务 | ✅ 已合并 |
| 🟢 低 | [#1397](https://github.com/netease-youdao/LobsterAI/pull/1397) | CoworkSessionItem compact 时间永远显示英文缩写 | ✅ 已合并 |

**关键风险提示：** PR #2308 描述的 NULL 字节污染问题影响所有"会话继续"与"steer"路径的出站 prompt，属于**跨会话持续性数据污染**，应优先核实其合并状态。

---

## 6. 功能请求与路线图信号

当日活跃的 4 条功能请求均来自 Cowork 会话体验，结合已存在的实现 PR 可评估纳入下一版本的可能性：

| 功能 | Issue | 实现 PR | 纳入评估 |
|---|---|---|---|
| 消息气泡时间戳 | [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | 🟢 **高概率** — PR 改动小且无破坏性 |
| Up/Down 方向键历史回溯 | [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | 🟢 **高概率** — 标准终端体验，实现清晰 |
| 消息内容全文搜索 | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | — | 🟡 **需设计** — 涉及异步加载、缓存策略与多源匹配排序 |
| 导出为 Markdown | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | — | 🟢 **高概率** — 可复用 `saveInlineFile` IPC |

**路线图信号：** 这 4 项共同构成"长会话工作流闭环"，若全部纳入将显著提升 LobsterAI 在重度用户中的留存率。

---

## 7. 用户反馈摘要

由于大量 Issue 被标记 `[stale]`，可直接采样的活跃反馈有限，但可提炼以下信号：

- **真实痛点（来自 Issue 描述）：**
  - 用户希望**复用已发送指令**进行迭代调试（#1341）—— 说明长流程任务的"上下文再注入"需求强烈。
  - 用户希望**按对话内关键词找回会话**（#1343）—— 标题命名在实践中不可靠，搜索的语义重要性高于分类。
  - 用户希望**导出文本用于二次编辑**（#1345）—— 截图导出被普遍认为"不够实用"。

- **使用场景：** Issue 中的描述语言（"任务节奏"、"二次编辑"、"笔记整理"）表明核心用户群体是**知识工作者 / 自动化任务链构建者**，而非临时用户。

- **满意度信号缺失：** 所有 5 个 Issue 的 👍 数为 0，且 PR 中 0 评论，意味着**社区的点赞/讨论机制未被有效激活**，可能与项目主要面向内部用户、外部贡献者参与门槛较高有关。

- **关闭的 Bug（#1394）：** 用户明确表达"虽然是不重复执行的任务，但任务是支持编辑的，这次跑过之后也许下次还需要用"—— 反映出"删除 vs 归档"的交互设计预期偏差。

---

## 8. 待处理积压

维护者需重点关注以下未响应项：

### 🔴 长期未评审的 PR（已 stale，3 个月+）
| PR | 主题 | 建议行动 |
|---|---|---|
| [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) | fix(scheduled-task): 修复 IM 群任务路由 | 优先评审，影响定时任务正确性 |
| [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | 用户消息气泡时间戳 | 改动小，建议快速合并 |
| [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | 输入框 Up/Down 历史回溯 | 改动小，建议快速合并 |

### 🟡 长期未响应的 Issue（已 stale）
- [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) 时间戳
- [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) 历史回溯
- [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) 全文搜索
- [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) Markdown 导出

### ⚪ 需追溯关闭结论的 PR
- [#2308](https://github.com/netease-youdao/LobsterAI/pull/2308) NULL 字节修复 — 标记 CLOSED 但描述涉及关键安全/稳定性问题，需确认是否实际并入主干或被替代方案取代。

**健康度总结：** 代码层活跃度高（11 PR 关闭/24h），但**社区响应链偏长**（多 Issue/PR stale 超 3 个月）。建议维护者建立周级别的 stale Issue 清理机制，并对上述 3 个待评审 PR 与对应 Issue 进行一次性 batch 处理，以释放积压并提振社区信心。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期**：2026-07-10  
**数据来源**：github.com/moltis-org/moltis  
**报告周期**：过去 24 小时

---

## 1. 今日速览

Moltis 项目今日活跃度**极低**，过去 24 小时内无任何 Issue 新增或关闭，也无新版本发布。唯一动态为 1 条处于待合并状态的 Pull Request（#1146），由社区贡献者 PeterDaveHello 提交，主题为新增 GPT-5.6 系列模型支持。整体来看，项目处于"例行维护+社区驱动小步迭代"状态，仓库健康度平稳但缺乏核心维护者的主动提交记录。

**活跃度评级**：⭐☆☆☆☆（低活跃）

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

过去 24 小时未检测到任何 GitHub Release / Tag 更新。建议关注上游发布节奏以判断发版周期是否正常。

---

## 3. 项目进展

### 🔀 已合并 / 关闭 PR
**无**。

### 📌 处于 Open 状态的 PR（1 条）

| PR | 标题 | 作者 | 创建时间 | 状态 |
|---|---|---|---|---|
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | Add GPT-5.6 model support | PeterDaveHello | 2026-07-09 | OPEN |

**PR #1146 详细进展分析**：

该 PR 由社区贡献者提交（非核心维护者），为 Moltis 引入 OpenAI 最新 GPT-5.6 系列的模型目录支持，具体包含：

- **新增模型**：GPT-5.6 Sol、GPT-5.6 Terra、GPT-5.6 Luna 三个变体
- **覆盖范围**：同时更新 OpenAI 主目录和 OpenAI Codex 回退目录
- **上下文窗口配置**：
  - OpenAI API：1.05M tokens（官方文档值）
  - ChatGPT/Codex 后端：372K tokens
  - 新增 `gpt-5.6` Sol 别名
- **附带更新**：OpenAI 配置模板与 provider-selection 文档

**项目推进度**：此 PR 一旦合并，可视为 Moltis 对 OpenAI 最新旗舰模型的**快速跟进**，体现项目对新模型生态的响应速度；但 PR 仍处于等待审核阶段，尚未得到维护者 LGTM。

---

## 4. 社区热点

由于今日无新开 Issue、无 PR 评论互动，唯一可关注的社区行为即 PR #1146 本身：

- **🔥 PR [#1146](https://github.com/moltis-org/moltis/pull/1146)** — *Add GPT-5.6 model support*（0 评论 / 0 👍）

**诉求分析**：用户对 LLM 客户端类项目的核心需求之一是**对前沿模型的及时支持**。Moltis 作为 AI Agent / 个人 AI 助手类工具，模型目录的更新频率直接影响其竞争力。PeterDaveHello 此次主动贡献，说明社区生态正在围绕 Moltis 自发形成"模型跟进"工作流。

---

## 5. Bug 与稳定性

⚠️ **今日无任何 Bug 报告或稳定性相关的 Issue 提交。**

无 crash、回归、性能问题记录。项目当前无可见稳定性风险信号，但同时也意味着**缺乏用户反馈输入**，无法判断真实使用情况。

---

## 6. 功能请求与路线图信号

### 6.1 来自 PR 的功能信号

**PR #1146** 间接反映了两条路线图信号：

1. **多 provider 模型目录自动化/模板化趋势**：OpenAI 主目录 + Codex 回退目录 + 模板配置三层联动，暗示项目正在构建更结构化的模型接入体系。
2. **上下文窗口精度需求**：开发者精确区分 API 上下文（1.05M）与 ChatGPT/Codex 后端限制（372K），说明终端用户对长上下文场景的诉求强烈。

### 6.2 无新功能 Issue

今日无新功能请求类 Issue，无法判断用户对其他方向（如工具调用、多模态、本地模型支持等）的需求。

---

## 7. 用户反馈摘要

⚠️ **今日无 Issue 评论数据可供分析。**

无新用户痛点、使用场景或满意度信号可提炼。建议维护者关注以下间接信号：

- PR #1146 的提交本身可视为"积极信号"——社区贡献者愿意主动扩展模型目录，表明对项目未来有信心。
- 但缺乏维护者的 review 回复（0 评论），可能暗示**核心维护者响应速度放缓**，需关注。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 等待时长 | 风险等级 |
|---|---|---|---|---|
| PR | [#1146](https://github.com/moltis-org/moltis/pull/1146) | Add GPT-5.6 model support | 1 天 | 🟡 中 |

**维护者关注提醒**：

- **PR #1146**：虽创建仅 1 天，但属于纯增量型更新（新增模型 + 配置文档），风险低、收益明确，建议优先 review 并合并，以免与上游 OpenAI 模型迭代节奏脱节。
- **历史积压评估**：本次数据快照未提供历史未响应 Issue 列表，但建议项目维护者定期清理超过 30 天未响应的 Issue，以维护社区信任度。

---

## 📊 项目健康度总结

| 维度 | 评估 | 说明 |
|---|---|---|
| 代码活跃度 | 🟢 正常 | 有社区 PR 提交 |
| 维护者响应 | 🟡 待观察 | 24h 内无维护者公开活动 |
| 版本节奏 | ⚪ 数据不足 | 无近期 release 对比基准 |
| 社区参与 | 🟢 正常 | 外部贡献者活跃 |
| 风险信号 | 🟢 低 | 无 Bug、无紧急 Issue |

**总评**：Moltis 处于**平稳低活跃期**，无异常波动；建议核心维护者尽快对 PR #1146 进行 code review，以保持模型目录的时效性优势。

---

*报告生成时间：2026-07-10 ｜ 数据来源：GitHub REST API 快照*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-07-10

> 数据来源：`agentscope-ai/QwenPaw`（CoPaw 的同源仓库，下文 Issues / PRs 编号均对应此仓库）
> 采样周期：过去 24 小时（截至 2026-07-10）

---

## 1. 今日速览

CoPaw / QwenPaw 今日整体保持**高活跃、强迭代**状态：过去 24 小时有 **20 条新开/活跃 Issues** 和 **50 条 PR 更新**，其中 31 条 PR 已合并或关闭，并伴随 **v2.0.0-beta.5** 一次新版本发布。社区讨论热情维持在较好水平，单条 Issue 评论峰值出现在长期开放的 Help Wanted 清单（#2291，64 条评论），其次是飞书通道失回复（#5757，13 条）与 Python 安装后启动报错（#5379，10 条）。聚焦 **v2.0 Beta** 的稳定化、上下文压缩、日志降噪、subagent 事件驱动与 MCP 协议适配是当前核心主线。

---

## 2. 版本发布

### 🆕 v2.0.0-beta.5（2026-07-10）

**变更摘要**（节选自 What's Changed）：

- `fix(scroll)`: 在驱逐索引（eviction index）中标注未被 headline 收纳的被驱逐片段 — 提升长会话滚动/检索的可观测性。([#5848](https://github.com/agentscope-ai/QwenPaw/pull/5848))
- `fix(scroll)`: 在驱逐索引中用「seam banner」锚定当前活跃 turn（@niceIrene）。([PR #58 摘要截断，编号疑似被截断，链接缺失]）

**破坏性变更**：作为 Beta 版本，存在架构性调整风险。建议仍处于 v1.1.12.post2/post3 的生产用户**暂不直接升级**，Beta 用户升级前请：

- 备份 `qwenpaw` 工作区与 `chat.json`（已观察到 #5858、#5856 等与历史会话相关的工具调用结构丢失问题）；
- 关注 Auto Memory Search（Beta）与 driver 审批策略组合下的行为变化；
- Windows 用户额外留意 [#5911](https://github.com/agentscope-ai/QwenPaw/issues/5911) 提到的 AppContainer 沙箱对 SHELL 配置的忽略。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### ✅ 已合并 / 关闭的关键 PR

| PR | 摘要 | 影响 |
|---|---|---|
| [#5895](https://github.com/agentscope-ai/QwenPaw/pull/5895) | Sprint 4.1 集成测试：21 用例覆盖 `/api/tool-calls/*` 7 路由 + `/api/console/chat/task` | **大幅提升** v2.0 tool-calls 生命周期与后台任务路由的回归保护 |
| [#5899](https://github.com/agentscope-ai/QwenPaw/pull/5899) | 同步更新 2.0 文档（@cuiyuebing） | 为 v2 GA 做文档准备 |
| [#5905](https://github.com/agentscope-ai/QwenPaw/pull/5905) | 修复 v2 Runtime envelope 中 `response.error` 由对象退化为字符串，导致前端 SDK `error.message` 为 undefined | 修复前后端错误契约回归 |
| [#5904](https://github.com/agentscope-ai/QwenPaw/pull/5904) | 修正 MCP 版本号 | 修复依赖锁定问题 |
| [#5864](https://github.com/agentscope-ai/QwenPaw/pull/5864) | MCP Driver 策略遵从运行时 approval level，不再写入 DriverCard | 关键策略/权限一致性修复 |
| [#5853](https://github.com/agentscope-ai/QwenPaw/pull/5853) | Driver 策略在 `approval_level=OFF` 时将所有 ASK 视为「不问」 | 关闭模式下静默通过 MCP `ask` 类调用 |
| [#5870](https://github.com/agentscope-ai/QwenPaw/pull/5870) | `preserve_thinking` 默认值由 `true` 改为 `false` | 缓解跨轮 reasoning 回灌导致的「reflux loop」 |
| [#5841](https://github.com/agentscope-ai/QwenPaw/pull/5841) | 恢复以空白前缀开头但正文合法的 tool-call JSON 参数 | 提升历史 tool-call 容错 |
| [#5892](https://github.com/agentscope-ai/QwenPaw/pull/5892) | TUI/ACP 审批流：携带 coding project 元数据并精化选项标签 | 终端交互体验优化 |
| [#5908](https://github.com/agentscope-ai/QwenPaw/pull/5908) | 降低 reasoning 对齐日志噪音（Fixes #5771） | 日志刷屏修复 |

**整体判断**：今日推进以**稳定性、合规性、SDK 兼容** 为主，**没有大规模新功能合入**，但伴随 Sprint 4.1 大型集成测试集中入库，v2.0 GA 的质量基线正快速夯实。

---

## 4. 社区热点

### 🔥 评论数最多的 Issues / PRs

1. [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Help Wanted: Open Tasks — Come Contribute!（**64 条评论**，P0-P2 任务榜，开放 3 个多月）  
   *诉求核心*：项目通过该 Issue 维持贡献者引导，长尾任务的认领、跟进状态需要维护者持续 enqueue/dequeue；本次已有新设计提案（#5909 Theme/Skin 模块）从中衍生出来。
2. [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) 飞书通道首次回复后失回复（**13 条评论**，v1.1.12.post2 / docker / AgentScope Platform 复现）  
   *诉求核心*：多端通用的通道稳定性，社区怀疑是 handshake / session 复用 bug。
3. [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) Python 安装后启动直接 Internal Server Error（**10 条评论，已关闭**）  
   *诉求核心*：`get_remote_addr(transport)` 路径，日志已附；说明首位用户可复现，关闭后修复应已并入。
4. [#5879](https://github.com/agentscope-ai/QwenPaw/issues/5879) 增加可关闭沙箱的功能（**6 条评论**，v2.0）  
   *诉求核心*：在受信设备上沙箱反而限制 agent 的真实工程能力（连 `pip install` 都不可用），需要显式开关或分级策略。
5. [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) 定时任务结果弹窗提醒应加用户开关（**6 条评论**）  
   *诉求核心*：反对「一刀切关闭」，要求 per-task 可选弹窗 + 停留时间配置。
6. [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) `model_factory.py` 调试日志误用 WARNING 导致刷屏（**4 条评论**）  
   *已被 [#5908](https://github.com/agentscope-ai/QwenPaw/pull/5908) 修复*。
7. [#5711](https://github.com/agentscope-ai/QwenPaw/issues/5711) QwenPaw 能力短板分析 / 竞品对比（**4 条评论，已关闭**）  
   *诉求核心*：归档性的架构路线图文档，作为后续迭代指导输入。
8. [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) 上下文压缩后 `tool_use`/`tool_result` 结构丢失 → 400 / 消息计数错位（**3 条评论**）  
   *与 [#5858](https://github.com/agentscope-ai/QwenPaw/issues/5858) 同源*。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 High（核心流程受阻 / 影响 v2 Beta 体验）

| Issue | 概述 | 是否已有 fix PR |
|---|---|---|
| [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) | v2.0.0b4 防重复误触发 Doom loop | ❌ 未见 |
| [#5896](https://github.com/agentscope-ai/QwenPaw/issues/5896) | v2.0.0b4 迭代次数限制计次起点错误，正常对话即触发 `Max iterations (100) reached` | ❌ 未见 |
| [#5872](https://github.com/agentscope-ai/QwenPaw/issues/5872) | Docker 容器内 `browser_use` 启动失败（dbus 错误导致 Chromium 退出） | ❌ 未见 |
| [#5910](https://github.com/agentscope-ai/QwenPaw/issues/5910) | v2.0.0b5 OpenAI Responses API + Auto Memory Search(Beta) → Cloudflare 502 | ❌ 未见 |
| [#5911](https://github.com/agentscope-ai/QwenPaw/issues/5911) | v2.0.0b5 Windows AppContainer 沙箱忽略配置的 SHELL，强制使用 cmd.exe | ❌ 未见 |
| [#5887](https://github.com/agentscope-ai/QwenPaw/issues/5887) | QQ 频道 `/new` 后台 ReMe 任务缺少 `session_id` 报错 | ❌ 未见 |

### 🟠 Medium（部分场景但可复现）

| Issue | 概述 | fix PR |
|---|---|---|
| [#5757](https://github.com/agentscope-ai/QwenPaw/issues/5757) | 飞书首条回复后失回复 | ❌ |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 上下文压缩过程中 `tool_use`/`tool_result` 永久丢失为纯文本 | ❌（与 #5858 同源） |
| [#5859](https://github.com/agentscope-ai/QwenPaw/issues/5859) | OpenCode 中 deepseek 模型在 auto_memory_search 注入消息缺少 `reasoning_content` | ❌ |
| [#5900](https://github.com/agentscope-ai/QwenPaw/issues/5900) | MCP `streamable_http` 会话断开后无自动重连，整次会话永久跳过该 client | ❌ |
| [#5898](https://github.com/agentscope-ai/QwenPaw/issues/5898) | OneBot channel 默认开启导致 watchdog 10s 重启循环（**已关闭**，修复进入版本） | ✅ |

### 🟢 Low / 已处理

| Issue | 概述 | fix PR |
|---|---|---|
| [#5379](https://github.com/agentscope-ai/QwenPaw/issues/5379) | Python 安装后 `Internal Server Error` | ✅ 已关闭 |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | >500KB 会话文件前端崩溃 | ✅ 已关闭 |
| [#5528](https://github.com/agentscope-ai/QwenPaw/issues/5528) | Linux IME-包装默认浏览器下 `browser_use` 超时 | ✅ 已关闭 |
| [#5863](https://github.com/agentscope-ai/QwenPaw/issues/5863) | Coding Session 中图片显示为二进制 | ✅ 已关闭 |
| [#5868](https://github.com/agentscope-ai/QwenPaw/issues/5868) | Matrix 频道 token 登录失败 | ✅ 已关闭 |
| [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | 同名模型跨 provider 前端压缩阈值错误 | ✅ 已关闭 |
| [#5893](https://github.com/agentscope-ai/QwenPaw/issues/5893) | 企业微信二维码正则贪婪匹配 → 改非贪婪 | ✅ 已关闭 |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | DingTalk DM 中 `/stop` 跨用户取消 | ✅ 已关闭 |

**稳定性观察**：v2.0 Beta 仍处于「**协议 / 沙箱 / 上下文压缩**」三大模块的高频回归期，Auto Memory Search(Beta) + OpenAI Responses API 组合是新的故障热点（#5910、#5859、#5906、#5887）。**好消息**：通道类问题（Matrix / OneBot / DingTalk / 企业微信）几乎已被当日关闭。

---

## 6

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 — 2026-07-10

> 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)
> 统计周期：过去 24 小时（2026-07-09 ~ 2026-07-10）

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时呈现**极高强度协作态势**：Issues 净增 13 条（35 条更新，关闭 11 条），PRs 更新 50 条（关闭/合并 11 条），合计 **85 条工单级互动**，是近一阶段最活跃的一天之一。今日产出一个清晰的"安全 + 协议统一 + 频道对齐"三线推进：SSRF 三部曲 PR（image_gen / DNS / file_download）密集合并/评审中，OpenAI 兼容 chat completions 端点（#8486）持续打磨，多个 tracker（v0.8.3 / v0.9.0 / 多用户隔离）同步刷新。无新版本发布，整体仍处于 0.8.x → 0.9.0 路线图密集合龙阶段。

- 🔥 活跃度：**极高**（Issues + PRs 双线爆量）
- 🛡 焦点：SSRF 安全审计收尾、跨厂商协议兼容、ZeroCode/TUI 体验打磨
- 🚧 阻塞项：4 条 P0/P1 bug 等待 author 响应（详见第 8 节）

---

## 2. 版本发布

🚫 **无新版本发布。**

最新主线仍为 0.8.2；多个 tracker（#8070、#8073、#8363、#7432）显示 0.8.3 收尾与 0.9.0 队列并行推进中，但本日未触发 tag 动作。

---

## 3. 项目进展

今日合并/关闭的 11 条 PR 推动力集中在三条主线：

### 🛡 3.1 SSRF 安全审计收尾（核心安全里程碑）
- **[#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** `fix(tools): gate image_gen download URL against SSRF` — 关闭 fal.ai 响应体服务器返回 URL 带来的 SSRF 攻击面（layers 1+2）。
- **[#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827)** `fix(tools): layer 3 resolved-IP DNS check for image_gen SSRF` — 补齐 DNS rebinding 检查，闭合 image_gen 的 SSRF 三部曲。
- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)** `fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate` — 为 file_download 增加内网主机白名单。

> 合并后 file_download / image_gen / outbound 三类外部 URL 入口全部具备 host 分类与 DNS 解析层防护，是 0.8.3 周期内最实质的安全进展。

### ⚙️ 3.2 Daemon / Channel 行为对齐
- **[#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)** `fix(daemon): share MCP registry across heartbeat ticks` — 解决 **[#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903)** 中报告的"每个心跳 tick 泄漏一个 stdio 子进程"问题。默认配置下每日约 48 个孤儿进程被消除。
- **[#7836](https://github.com/zeroclaw-labs/zeroclaw/pull/7836)** `fix(channels/orchestrator): use resolved agent config for strict_tool_parsing and parallel_tools` — 修复 **[#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809)** 频道编排器未读取 `AliasedAgentConfig.resolved` 的回归。
- **[#8921](https://github.com/zeroclaw-labs/zeroclaw/pull/8921)** `fix(runtime): thread agent_alias into agent_turn's ToolLoop` — 修复生命周期回调拿不到 alias 的潜在问题。
- **[#8760](https://github.com/zeroclaw-labs/zeroclaw/pull/8760)** `fix(runtime): keep daemon-owned agent output out of daemon stdout` — 分离 daemon 业务输出与 Code 面板输出，避免 stdout 污染。

### 🧹 3.3 配置 / ZeroCode / 测试收尾
- **[#8833](https://github.com/zeroclaw-labs/zeroclaw/pull/8833)** `fix(config): widen config-set alias auto-materialization past providers.*` — 修复 `config set` 对动态 map 段的自动 alias 创建。
- **[#8872](https://github.com/zeroclaw-labs/zeroclaw/pull/8872)** `fix(zerocode): use runtime profile max_context_tokens for context meter` — ZeroCode 上下文计量精度修正。
- **[#8873](https://github.com/zeroclaw-labs/zeroclaw/pull/8873)** `fix(cli): UTF-8-safe stdin cap in exit prompt + audit trail` — 跟进 #7828 长期 UTF-8 截断审计。
- **[#8884](https://github.com/zeroclaw-labs/zeroclaw/pull/8884)** `test(log): cover llm request UTF-8 truncation` — 补齐对应测试覆盖。
- **[#8881](https://github.com/zeroclaw-labs/zeroclaw/pull/8881)** `fix(cron): expose wechat, signal, email in cron delivery schema` — cron 投递通道枚举补全。
- **[#8652](https://github.com/zeroclaw-labs/zeroclaw/pull/8652)** `fix(zerocode): ZeroCode transcript highlight dismissal` — TUI 体验闭环。

### 📈 整体进度评估
24 小时内关闭 11 个工单中含 **2 条 P1 安全/稳定性修复 + 3 条 SSRF 防线 PR + 4 条 ZeroCode/TUI 打磨 + 2 条配置/测试**。**项目健康度评级：🟢 良好**——安全与稳定性问题得到有节奏消化，无新增 P0 紧急事件。

---

## 4. 社区热点

| 排名 | 编号 | 标题 | 评论 | 状态 |
|---|---|---|---|---|
| 1 | [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | zeroclaw does not know it can add cron | 13 | OPEN, blocked, stale-candidate |
| 2 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, Label Cleanup (Rev.14) | 13 | OPEN, accepted, in-progress |
| 3 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | tool_filter_groups is a no-op for real MCP tools | 9 | CLOSED |
| 4 | [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单/多轮对话丢失 user message | 8 | CLOSED |
| 5 | [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | Local-First Mode for Small Models（👍2） | 4 | OPEN, accepted |

**诉求解读：**

- **#5862 / #6808 并列第一**反映社区对"工作流可发现性"和"项目管理纪律"的双重关切。前者要求工具自我描述能力（即 agent 应当知道 `zeroclaw cron` 存在），属于 **agent 元能力闭环**；后者是治理型 RFC，关注标签噪音和看板自动化，是 maintainer 群体自驱的效率改进。
- **#6699** 揭示 MCP 工具路径与配置路径的语义不一致，导致 `tool_filter_groups` 在真实场景下静默失效——是 high-risk 配置-运行时语义错位典型。
- **#5287** 唯二获得 👍 的 issue，指向**小型本地模型用户群体**——他们要求紧凑 prompt + 严格解析 + 防止系统提示泄漏，反映 OLLAMA / 7B-13B 模型在 ZeroClaw 现有 prompt 工程下表现欠佳的痛点。
- **#8550 → PR #8486**（OpenAI 兼容端点）虽然 issue 评论不多但 PR 已进入实质开发，是潜在的"流量入口"型需求。

---

## 5. Bug 与稳定性

按严重度由高到低排列今日活跃/已修复的关键 Bug：

### 🚨 S0（数据丢失 / 安全风险）
| 编号 | 描述 | 状态 | Fix |
|---|---|---|---|
| [#6558](https://github.com/zeroclaw-labs/zeroclaw/issues/6558) | providers error（qwen3.5-plus 自定义 endpoint 405）| OPEN, blocked | ❌ 无 |
| [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) | `/model --agent` 缺发送者授权 | CLOSED ✅ | 含在 [#8044](https://github.com/zeroclaw-labs/zeroclaw/issues/8044) 内部修复合入 |

### 🔥 S1（工作流阻塞）
| 编号 | 描述 | 状态 | Fix |
|---|---|---|---|
| [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` 对真实 MCP 工具是 no-op + 不联动 `deferred_loading` | CLOSED ✅ | 待确认（PR 链待补） |
| [#6034](https://github.com/zeroclaw-labs/zeroclaw/issues/6034) | 单/多轮对话丢失 user message（Qwen3.5-35B 400）| CLOSED ✅ | 推测随 provider 重试路径修复 |
| [#5903](https://github.com/zeroclaw-labs/zeroclaw/issues/5903) | MCP stdio 子进程随 heartbeat 累积（默认 48/日）| CLOSED ✅ | **[#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866)** |
| [#8094](https://github.com/zeroclaw-labs/zeroclaw/issues/8094) | Quickstart 添加 Anthropic provider 后 chat 不可用 | CLOSED ✅ | 待关联 |

### ⚠️ S2（降级行为）
| 编号 | 描述 | 状态 | Fix |
|---|---|---|---|
| [#6672](https://github.com/zeroclaw-labs/zeroclaw/issues/6672) | `reasoning_content` 未回传到 mimo-v2.5 思维模式 agentic 循环 | OPEN, blocked | ❌ 无 |
| [#6517](https://github.com/zeroclaw-labs/zeroclaw/issues/6517) | Context Overflow 导致 Kimi/Discord 幻觉 | OPEN, blocked, stale-candidate | ❌ 无 |
| [#8762](https://github.com/zeroclaw-labs/zeroclaw/issues/8762) | Anthropic 长 turn 固定 120s 总超时 | OPEN, accepted | ❌ 无 |
| [#7809](https://github.com/zeroclaw-labs/zeroclaw/issues/7809) | Channel turns 忽略 runtime-profile 工具标志 | CLOSED ✅ | **[#7836](https://github.com/zeroclaw-labs/zeroclaw/pull/7836)** |
| [#8915](https://github.com/zeroclaw-labs/zeroclaw/issues/8915) | channel/process_message turn 不发 `agent_start/agent_end` | OPEN, in-progress | ❌ 无 |
| [#8875](https://github.com/zeroclaw-labs/zeroclaw/issues/8875) | config 降级段警告未带 parse error | CLOSED ✅ | 已合入 |
| [#8760](https://github.com/zeroclaw-labs/zeroclaw/issues/8760) | daemon-owned agent 输出混入 daemon stdout | CLOSED ✅ | **[#8760](https://github.com/zeroclaw-labs/zeroclaw/pull/8760)** |

### 🟢 S3（minor）
| 编号 | 描述 | 状态 | Fix |
|---|---|---|---|
| [#5862](https://github.com/zeroclaw-labs/zeroclaw/issues/5862) | agent 不识别自身可调用 `zeroclaw cron` | OPEN, blocked | ❌ 无 |
| [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram 文档示例错误 | OPEN, in-progress | ❌ 无 |
| [#8652](https://github.com/zeroclaw-labs/zeroclaw/issues/8652) | ZeroCode transcript 高亮未在空白处消失 | CLOSED ✅ | 已合入 |

**稳定性趋势**：今日关闭的 Bug 多为 high-risk 回归；2 个 P1 MCP/Provider 关键问题落地修复，但仍有 4 条 P0–P2 阻塞项等待 author 响应（详见第 8 节）。

---

## 6. 功能请求与路线图信号

| 需求 | 编号 / PR | 信号强度 | 路线图归属 |
|---|---|---|---|
| **OpenAI 兼容 chat completions 端点** | [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550) / [PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | 🔥 极强（XL 规模 PR 已开发中）| 0.8.3

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*