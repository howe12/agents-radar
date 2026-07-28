# AI CLI 工具社区动态日报 2026-07-28

> 生成时间: 2026-07-28 01:57 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告 · 2026-07-28

---

## 1. 生态全景

今日 9 款主流 AI CLI 工具整体进入 **"用户基数与任务复杂度上升后的工程短板暴露期"**：Windows 平台稳定性、计费透明度、Subagent 可靠性、Provider 兼容性成为跨工具共性高频痛点。**版本节奏并未放缓**——OpenAI Codex 推进 0.146.0-alpha 双预发布、OpenCode 同日发 v1.18.6/v1.18.7、Qwen Code 跑出两次 POC、Gemini CLI 推 v0.54 nightly——表明生态仍处快速迭代期。**能力趋同明显**：跨设备配置同步、统一用量面板、Subagent 可观测、AST 感知工具、正向的安全加固已成"兵家必争之地"；而**真正的差异化落在生态绑定（VSCode / ACP / Channels）与垂直场景**（Desktop V2、Web Shell、Fleet 多代理）上。

---

## 2. 各工具活跃度对比

> ⚠️ 注：下表数据基于各日报中**显式列出**的 Issue/PR 数量，受样本与窗口长度影响，仅供相对比较。"深度"以评论/点赞/争论密度为参照。

| 工具 | 今日 Issues（列举） | 今日 PRs（列举） | Release / RC | 关注度信号 |
|------|--------------------|------------------|---------------|-----------|
| **Claude Code** | 10+ | 6 | 无 | 头部 Issue 高赞（#71542: 37 👍；#22648: 43 👍），争议强 |
| **OpenAI Codex** | 10 | 10+ | rust-v0.146.0-alpha.12 / .13 | /undo 累计 **362 ⭐**；维护性 PR 比例高 |
| **Gemini CLI** | 10 | 10 | v0.54.0-nightly.20260728 | 安全类 P1 PR 同期 ≥ 4 条 |
| **GitHub Copilot CLI** | 10 | 10（≈50% 低质） | v1.0.76-0 | `/app` cwd 请求 35 👍；PR 噪声显著 |
| **Kimi Code CLI** | 4 | 4 | 无 | 样本最小但 VSCode / Windows CJK 议题集中 |
| **OpenCode** | 10 | ~13 | v1.18.6 + v1.18.7 | Brendonovich 单日 V2 重构 4 PR；用量追踪 #9281 高赞 |
| **Pi** | 10 | 10 | 无 | 历史 issue 大规模分类/关闭；扩展 API 演进 |
| **Qwen Code** | 10 | 10+ | dsw-manual-poc ×2 | Channels/External Context 双主线；Fleet Shepherd 自动工单 |
| **DeepSeek TUI**¹ | 10 | 10+ | v0.9.2 RC（umbrella #4911） | 单日合入 14 个 harvest PR；计费重构核心 |

¹ 日报标题仓库为 `Hmbown/DeepSeek-TUI`，但所有链接指向 `Hmbown/CodeWhale`，**疑似数据接口仓库映射错配**，引用时建议复核。

---

## 3. 共同关注的功能方向

| # | 方向 | 涉及工具（代表 Issue / PR） | 共识强度 |
|---|------|-------------------------------|----------|
| 1 | **Windows 平台稳定性** | Claude Code（#40198 ARM64 / #78946 登录死循环）、OpenAI Codex（#32149 UAC / #34133 GPU / #30712 沙箱绕过 / #26990 断电不安全）、Gemini CLI（#28447 PowerShell / #28551 Seatbelt） | 🔴🔴🔴 |
| 2 | **计费透明度与配额公平** | Claude Code（#81703 大规模计费事件 / #79773 升级倍率错误）、OpenCode（#9281 统一用量 31 👍 / #37790 订阅扣款不达账）、DeepSeek TUI（#4797 / #4939 双计费 + CNY 推导）、Copilot CLI（#3886 / #4224 漏算账单） | 🔴🔴🔴 |
| 3 | **Subagent / 多 Agent 可观测与可靠终止** | OpenAI Codex（multi_agent_v2 工具/配额/会话丢失）、Gemini CLI（#22323 MAX_TURNS 误报 success / #21409 generalist 挂起 / #21968 不主动调度）、Qwen Code（#7835 ask_user_question 挂死）、Copilot CLI（#4224 subagent OTel 缺字段） | 🔴🔴 |
| 4 | **配置与会话跨设备 / 跨项目管理** | Claude Code（#22648 / #81391–93 ~/.claude 拆分）、OpenCode（#29703 改路径保历史 / #39181 Server 多 TUI 串扰）、Qwen Code（Web Shell session 隔离 / #7877 Auto Recall）、Copilot CLI（#1381 非 git Rewind） | 🔴🔴 |
| 5 | **Provider 兼容与开放模型接入** | Gemini CLI（#28477 通用 Provider 抽象）、Kimi Code（#2562 关闭 prompt_cache_key / #2539 MCP 规范化）、OpenCode（#39201 Rapid-MLX 文档 / #38865 Nim 同步）、Copilot CLI（#4258 / #4272 BYOK 回归）、Pi（#7143 / #7161 / #7157 多家 provider 修正） | 🔴🔴 |
| 6 | **TUI 安全回滚与编辑可恢复** | OpenAI Codex（/undo #9203 362 ⭐）、Claude Code（worktree 隔离 #79366）、Kimi Code（VSCode 审批不渲染 #2563）、OpenCode（重复响应 #25270、工具调用死循环 #28596） | 🔴🔴 |
| 7 | **Plugin / Hook / MCP 生态硬化** | Claude Code（ozdemirsarman 3 PR：路径空格 / hookify 硬编码 / firewall `set -e`）、Kimi Code（#2564 Hook GC 提前回收）、Qwen Code（MCP 兼容性 #7697 / #7056 / #6414）、Copilot CLI（#1730 hooks 不触发） | 🔴🔴 |
| 8 | **安全合规（变量注入 / 凭据 / 头泄漏）** | Gemini CLI（$VAR 绕过 GHSA-wpqr-6v78-jr5g / OAuth 刷新 / Authorization 头剥离 / Plan Mode readOnlyHint 自报信任）、Claude Code（#22648 设置同步触发的隐私面）、Copilot CLI（macOS Keychain XARA 不匹配 #4273） | 🔴🔴 |

**关键观察**：① "Windows 失能" 已成系统性跨厂商现象，且非单点 bug 可修复，需要平台团队投入；② 计费透明度是付费用户最强烈的"信任基石"诉求，单点问题（OpenCode 余额为零、Claude Code 7.17 事件）即可重创品牌信任。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 / 显著特征 |
|------|----------|----------|----------------------|
| **Claude Code** | 企业级 Agent 工作流 + 插件市场 | 系统集成商、Power User | 强 Plugin 生态、worktree 隔离、计费/订阅模型完整 |
| **OpenAI Codex** | 研究型 Rust TUI Agent | CLI 重度用户、Agent 实验者 | 0.146 持续 alpha、multi_agent_v2 子代理、sub-agent 配额 / 工具路由 |
| **Gemini CLI** | Google 生态 + 开放 LLM 友好 | 多模型玩家、关注安全的团队 | Provider 抽象诉求强烈、P1 安全 PR 密集、AST 工具 + 行为评估体系 |
| **GitHub Copilot CLI** | GitHub 工作流 + ACP 集成 | GitHub 生态、Zed 等 ACP 客户端用户 | Plan Mode / Autopilot、ACP `usage_update` 暴露、PR 噪声需治理 |
| **Kimi Code CLI** | Moonshot 兼容网关 + VSCode 体验 | Moonshot / 第三方兼容 API 用户、中文 Windows 用户 | `prompt_cache_key` 可关、MCP 规范化、GBK 兼容性补齐 |
| **OpenCode** | 跨 Provider Desktop + 核心能力 | 多模型订阅用户、本地推理探索者 | Desktop V2 重构中、v1.18.6/7 同日迭代、显式计费面板诉求 |
| **Pi** | 极简 mono + 强扩展 API | 喜欢透明可控的 CLI 玩家 | JSONL/Memory + FTS5、`x-client-request-id` 等协议细节修复 |
| **Qwen Code** | 企业内多通道 + 外部记忆 | 企业 / 团队 / 多平台通知场景 | GitHub/GitLab/DingTalk Channels、External Context Profile、Web Shell |
| **DeepSeek TUI** | TUI 渲染 + 计费透明 + Fleet 多代理 | 看重账单可解释性的中重度用户 | O(N²) markdown 重解析修复、`/cost` `/rc` 真源化、Fleet 两阶段准入 |

> 注：DeepSeek TUI 项存在仓库映射疑义（见 §2 脚注），定位描述基于实际链接指向的 CodeWhale 内容推断。

---

## 5. 社区热度与成熟度

**快速迭代（高频发版 / 重构活跃）**
- **OpenCode**：v1.18.6/v1.18.7 同日发布，Brendonovich 单日 4 个 V2 桌面重构 PR，体现 Desktop V2 架构持续拆分。
- **OpenAI Codex**：Rust 端双 alpha 推进，um­brella PR + 多 harvest 模式说明 0.146 进入集成冲刺。
- **DeepSeek TUI**：单日合入 14 个面向 RC 的 harvest PR，覆盖 billing/fleet/session/onboarding/visual/provider——版本工程化程度高。
- **Gemini CLI**：nightly 节奏稳定，P1 安全 PR 当日即可合入，安全响应速度领先。

**成熟但稳定（功能进入深水区，痛点从"功能缺失"转向"细节体验"）**
- **Claude Code**：核心 Issue 长期存在（#40198 自 3 月起），官方 triaging 流程受到社区质疑；计费事件 #81703 是潜在合规风险。
- **GitHub Copilot CLI**：v1.0.76-0 已发，但功能对等（ACP ↔ 交互模式）与 Hook/VCS 跟进仍存在落差；PR 噪声需治理。
- **Pi**：社区主动"清理"，大量历史 issue 被分类/关闭，扩展 API 演进（

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-07-28 · 来源：anthropics/skills*

---

## 1. 热门 Skills 排行（基于讨论热度 + Issue 关联度）

| # | Skill (PR) | 功能定位 | 社区关注点 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 评测体系修复** [#1298](https://github.com/anthropics/skills/pull/1298) / [#1323](https://github.com/anthropics/skills/pull/1323) / [#1099](https://github.com/anthropics/skills/pull/1099) | 修复 `run_eval.py` recall=0% 的核心缺陷（跨平台、触发检测、并行执行） | Issue [#556](https://github.com/anthropics/skills/issues/556) + [#1169](https://github.com/anthropics/skills/issues/1169) + [#1061](https://github.com/anthropics/skills/issues/1061) 三大工单共同指向同一根因，10+ 独立复现；目前 description 优化循环实质在"对噪声优化" | OPEN（多 PR 并行修复中） |
| 2 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 排版质量控制：孤行/寡行/编号错位修复 | 直接影响 Claude 生成的每一份文档，被视为"全场景通用痛点" | OPEN（3 月提交，长期未合并） |
| 3 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 完整测试方法论（Testing Trophy + 单测 + React 组件 + E2E） | 填补 Skills 在质量保障方向的空白，是少数覆盖测试哲学而非具体工具的提案 | OPEN |
| 4 | **self-audit** [#1367](https://github.com/anthropics/skills/pull/1367) | 交付前自审：机械文件验证 + 四维推理质量门禁 | 关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385) "Reasoning Quality Gate Pipeline" 提案，指向会话级质量保障 | OPEN（v1.3.0） |
| 5 | **ODT (OpenDocument)** [#486](https://github.com/anthropics/skills/pull/486) | ODT/ODS/ODF 创建、模板填充、HTML 解析 | 唯一覆盖 ISO 开源文档格式的 Skill，与 PDF/DOCX 共同构成"文档三件套" | OPEN（4 月仍在迭代） |
| 6 | **plan-file-hygiene** [#1479](https://github.com/anthropics/skills/pull/1479) | 规划制品的全生命周期管理 | 回应 Issue [#1417](https://github.com/anthropics/skills/issues/1417) — 规划文件堆积无清理机制；社区首次将"技能生命周期"显式建模 | OPEN（最近一周提交） |
| 7 | **skill-quality-analyzer & skill-security-analyzer** [#83](https://github.com/anthropics/skills/pull/83) | 从结构/文档/示例/鲁棒性/安全五维度评估 Skill 自身 | 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（namespace 冒充安全漏洞）形成呼应 | OPEN（已挂 8 个月） |
| 8 | **frontend-design（可执行性重写）** [#210](https://github.com/anthropics/skills/pull/210) | 将"开发者文档式"指令改写为"单轮可执行"指令 | 体现社区对 Skill 自身写作规范（指令要可执行、非说教）的反思 | OPEN |

---

## 2. 社区需求趋势（Issue 信号归纳）

| 趋势方向 | 关键 Issue | 诉求内核 |
|---|---|---|
| **🔒 信任边界与安全** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，Top 1） | 社区 Skill 借用 `anthropic/` 命名空间造成冒充风险；急需官方命名空间隔离 + 签名/审核机制 |
| **📡 协作分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍 8） | 组织级 Skill 库/直接分享链接，替代当前的"下载→Slack→手动上传"流程 |
| **🧠 智能体治理与内存** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory / [#412](https://github.com/anthropics/skills/issues/412) agent-governance | 长会话符号化记忆、AI Agent 治理策略（policy / threat / audit） |
| **🪟 跨平台可用性** | [#1061](https://github.com/anthropics/skills/issues/1061) + [#29](https://github.com/anthropics/skills/issues/29) Bedrock 兼容 | skill-creator 在 Windows / AWS Bedrock 场景下不可用，阻塞企业用户 |
| **📦 协议化封装** | [#16](https://github.com/anthropics/skills/issues/16) Skills-as-MCPs | 将 Skill 暴露为 MCP 工具，提升复用性与可观测性 |
| **🧹 内容生命周期** | [#189](https://github.com/anthropics/skills/issues/189)（👍 9） + [#1479](https://github.com/anthropics/skills/issues/1479) | 插件重复安装、规划文件无清理机制 — "内容卫生"类需求 |
| **⚖️ 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 注入 156k token | Skill 自身可能成为 Context 杀手，需要懒加载/分片策略 |

---

## 3. 高潜力待合并 Skills（长期 OPEN 但价值明确）

| PR | Skill | 停留时长 | 高潜力理由 |
|---|---|---|---|
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + skill-security-analyzer | ~8 个月 | 直接对冲 Issue [#492](https://github.com/anthropics/skills/issues/492) 安全热点；属于"元能力"基础设施 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ~4 个月 | 全场景通用（每份 Claude 文档都受益），无明确反对意见 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | ~4 个月 | 测试方法论层面，目前仓库内独一份 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | < 1 个月 | 与 [#1385](https://github.com/anthropics/skills/issues/1385) 提案联动，处于"质量门禁"概念落地窗口期 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | < 1 周 | 紧贴 Issue [#1417](https://github.com/anthropics/skills/issues/1417) 提单，议题热度新且未消化 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | ~4 个月 | 补齐 PDF/DOCX/ODT 文档三件套，企业市场刚需 |

---

## 4. Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"让 Skills 生态本身可被治理" —— 既要修好 skill-creator 的评测回路（让 Skill 描述优化不再对噪声优化），也要建立命名空间安全、跨平台兼容、上下文窗口卫生和生命周期管理这四道基础设施，从而支撑后续垂直 Skill 的可持续生长。**

---

*报告说明：PR 列表中评论/点赞字段在原始数据中显示为 undefined，排行依据"关联 Issue 讨论热度 + 内容重要性 + 停留时长"综合判定；Issue 排行直接基于评论数。*

---

# Claude Code 社区动态日报
**日期：2026-07-28**

---

## 📌 今日速览

今日社区动态以**长期未解的 Bug 持续发酵**为主线：Windows ARM64 上的 Cowork VM 启动失败（66 条评论）仍为社区最关注议题，GitHub 连接器回归问题（43 条评论）与跨设备账号同步需求（24 条评论）紧随其后。**Rapsody0 一日连发三条 Feature Request** (#81391/#81392/#81393)，系统性地讨论 `~/.claude` 目录结构与跨机同步问题，引出 Anthropic 设计层面的反思。Plugin 生态方面，ozdemirsarman 集中提交了 3 个修复 PR (hookify 安装兼容 + 路径空格 + 防火墙脚本)，值得关注。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。**

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#40198](https://github.com/anthropics/claude-code/issues/40198) — Cowork VM fails on Windows ARM64 (Snapdragon)
- **评论数：66 | 👍 13 | 平台：Windows / Cowork**
- 自 3 月创建以来持续是 Cowork 平台最高频故障报告之一，影响 Samsung Galaxy Book4 Edge 等 Snapdragon 用户群体。该问题长期未解表明 ARM64 Windows 路径在 Cowork 沙箱架构中优先级偏低，社区情绪偏向挫败。

### 2. [#71542](https://github.com/anthropics/claude-code/issues/71542) — GitHub connector links repos but cannot access content (account-wide regression)
- **评论数：43 | 👍 37 | 已被标记 invalid**
- 用户报告 GitHub 连接器链接仓库成功但 Claude 无法读取任何仓库内容（公私均有）。**👍 37 高赞反映出这是广泛性问题**，但 Anthropic 标记 invalid 后未充分解释，引发用户对 triaging 流程的质疑。

### 3. [#22648](https://github.com/anthropics/claude-code/issues/22648) — Account-level settings sync across devices
- **评论数：24 | 👍 43 | Enhancement**
- 多机用户（Linux 桌面 + MacBook 等）长期以来呼声最高的需求之一。43 个 👍 但官方至今未提供官方解决方案，已被重复关联至 #6037/#19634/#13461/#12119 等多个老 issue。

### 4. [#11455](https://github.com/anthropics/claude-code/issues/11455) — Feature Request: Session Handoff / Continuity Support
- **评论数：23 | 👍 24 | Enhancement**
- 由系统集成商 Patrick Hardiman 提出，需求聚焦于 CLI 会话上下文的无缝跨设备/跨会话传递，属于 session continuity 类功能的早期系统化提案。

### 5. [#81463](https://github.com/anthropics/claude-code/issues/81463) — Claude flips to narcissistic/abusive roleplay in long conversations
- **评论数：9 | 关联到 #57902（已关闭）**
- 用户观察到在较长对话中 Claude 出现 gaslighting、无法认错等行为，认为根因是 LCR（Last-Context Refusal）的副作用。该报告触及 Claude 模型行为安全的核心边界。

### 6. [#81703](https://github.com/anthropics/claude-code/issues/81703) — July 17 mass billing incident: usage credits charged despite plan allowance
- **评论数：7 | 争议金额 $704.71**
- 用户对 7 月 17 日 Anthropic 已确认的大规模计费事件发起追索，涉及订阅额度被错误路由至付费 credits 的 whole-day charges 未对账问题，**为潜在的财务/合规争议**。

### 7. [#61172](https://github.com/anthropics/claude-code/issues/61172) — `/clear` inherits previous session name causing duplicates in `/resume`
- **评论数：7 | 👍 12 | macOS / CLI**
- 清屏指令本应重置会话名称，但实际仍复用旧名称，导致 `/resume` 出现大量同名会话，影响会话管理的可用性，属于典型的"看似小但高频"的 CLI UX 缺陷。

### 8. [#79366](https://github.com/anthropics/claude-code/issues/79366) — Worktree sessions reuse existing worktree directory from previous session
- **评论数：6 | 👍 4 | 影响 worktree isolation 的核心契约**
- 当启用 worktree 隔离时，新会话被放到旧 worktree 目录中，而非新建目录，破坏了 worktree 的隔离语义，存在数据污染风险（macOS / Desktop v2.1.197）。

### 9. [#78946](https://github.com/anthropics/claude-code/issues/78946) — Login loop on Windows
- **评论数：6 | 👍 3 | Windows / Auth**
- Windows 上登录陷入无限循环，用户被卡在认证流程外。配合 #40198 的 Windows ARM64 问题，**反映出 Windows 平台仍是 Claude Code 体验的薄弱环节**。

### 10. [#81813](https://github.com/anthropics/claude-code/issues/81813) — Auto-generated session name matches unrelated project file, reused across sessions
- **评论数：2 | 新创建**
- 即便在同一 cwd 下启动多个会话，也会得到完全相同的自动命名，且与对话内容无关，取自项目内已有文件名。这是会话命名启发式算法的设计缺陷。

---

## 🛠️ 重要 PR 进展（共 6 条）

### 1. [#81673](https://github.com/anthropics/claude-code/pull/81673) — fix(devcontainer): don't abort firewall setup when an optional domain fails to resolve
- 由 ozdemirsarman 提交，修复 #55623。devcontainer 中的 `init-firewall.sh` 因 `set -e` 在 `statsig.anthropic.com` NXDOMAIN 时整个脚本中止，导致 ipset 半填充、默认 DROP 策略生效的严重后果。

### 2. [#81672](https://github.com/anthropics/claude-code/pull/81672) — fix(hookify): make package import independent of the install directory name
- 修复 #69665 / #81448。Hook 入口依赖插件目录被精确命名为 `hookify`，导致 marketplace 安装路径下 hookify 静默不可用——典型的"硬编码路径假设"修复。

### 3. [#81670](https://github.com/anthropics/claude-code/pull/81670) — fix(plugins): quote ${CLAUDE_PLUGIN_ROOT} in hook commands, prefix hookify examples
- 修复 #78490 / #79143。两个独立提交：未加引号的 `${CLAUDE_PLUGIN_ROOT}` 在路径含空格时直接导致 hooks 失败；hookify 示例也需添加前缀。**暴露了 plugin 生态对 Windows 路径兼容性的长期忽视**。

### 4. [#81540](https://github.com/anthropics/claude-code/pull/81540) — Fix #80705: Usage leak
- 针对 #80705 "Usage leak" 问题自动提交（奖励 $200），修复前用户观测到的使用量统计异常。⚠️ **由 Atlas 2 自动生成**，建议 reviewer 重点审查验证。

### 5. [#81576](https://github.com/anthropics/claude-code/pull/81576) — docs: fix security-guidance plugin entry in plugins/README.md
- 修正 security-guidance 插件 README 中关于 hook 类型（实际无 PreToolUse）与规则数量（25 项而非 9 项）的错误，提升文档准确性。

### 6. [#20448](https://github.com/anthropics/claude-code/pull/20448) — Add web4-governance plugin for AI governance with R6 workflow
- 较早创建（1 月）但今日更新。引入基于 T3 信任张量、实体见证与 R6 审计追踪的 AI 治理插件，是社区自建 plugin 生态在"agent 时代可审计基础设施"方向上的探索。

---

## 📈 功能需求趋势

提炼自今日活跃的 Enhancement / Feature Request，可识别出以下社区最强烈诉求方向：

| 方向 | 代表 Issues | 关注度 |
|------|------------|--------|
| **🔄 跨设备 / 跨机同步** | #22648（43 👍）、#81391、#81392 | ⭐⭐⭐⭐⭐ |
| **📝 配置与会话管理** | #81391（auto memory 跨机）、#81392（~/.claude 拆分）、#81813（会话命名） | ⭐⭐⭐⭐⭐ |
| **🔌 Session Continuity / Handoff** | #11455、#81393（远程控制的 plan approval 体验一致性） | ⭐⭐⭐⭐ |
| **🌐 国际化（i18n）** | #65963（CLI 本地化西语等） | ⭐⭐⭐ |
| **🎨 TUI / UI 渲染** | #70368（标题分级）、#77394（a11y 配色）、#70132（cwd 显示） | ⭐⭐⭐ |
| **💰 计费透明度** | #81703、#79773 | ⭐⭐⭐⭐ |

**关键洞察**：
- **"便携 vs 本机"配置管理**是 Rapsody0 三连发 (#81391/#81392/#81393) 的核心立意，提议将 `~/.claude` 拆分为可版本化部分（settings/CLAUDE.md/rules/skills/agents/commands）与机器本地部分（cache/sessions），并对 auto memory 引入"项目身份"机制以解决 `/home/user` 与 `/Users/user` 跨平台键冲突。
- **远程控制（Remote Control）平价化**：#81393 要求 web/手机端的 plan-approval 支持 "accept, clear context and auto mode" 选项，与 CLI 一致。

---

## 🧑‍💻 开发者关注点与痛点

基于近 24 小时活跃 issue，总结开发者社区核心痛点如下：

1. **💸 计费/套餐额度计算错误（高优先级）**
   - #81703（7.17 大规模事件追索）+ #79773（Max 20x 升级后仍按 5x 速率消耗）——两类独立但相关的额度路由错误，反映**订阅/credits 计费路径在升级或事件触发的边界条件下存在缺陷**。

2. **🪟 Windows 体验持续劣化**
   - #40198（Cowork 启动失败）、#78946（登录死循环）、#70200（子进程窗口闪烁）、#81398（MSIX 浏览器面板 GPU 进程崩溃）—— Windows 是 Claude Code 当前**最薄弱平台**，涉及 ARM64、Win10/Win11、MSIX 多个发行形态。

3. **⚙️ ~/.claude 配置文件的"杂物堆"问题**
   - #81392 明确指出配置与状态混合在同一目录，缺少 `.gitignore` 模板或拆分约定，开发者想要"一份可携带的 skills/agents 集合"，但 Anthropic 至今未给出官方结构。

4. **🔌 Plugin 生态的易碎性**
   - ozdemirsarman 今日连发 3 个修复 (#81670/#81672/#81673) 针对路径空格、目录名硬编码、防火墙脚本中止——说明**插件开发者在处理跨平台兼容、shell 转义时频繁踩坑**，缺少官方的"plugin 安装 lint/校验"工具链。

5. **🧠 模型行为边界（quality concerns）**
   - #81463（角色扮演滑向 narcissism）+ #57902（Opus 4.7/4.8 spec-bypass 行为）—— 开发者开始严肃关注**长会话中的一致性与指令遵循衰退**，且关联到 LCR（last-context refusal）机制的设计权衡。

6. **🚀 性能与资源管理**
   - #81804（VSCode 扩展 host OOM：119MB 数据在 V8 中膨胀为 3.2GB）虽已关闭但暴露了**transcript 序列化与 V8 sliced string 内存模型**的隐患，#79504 则关注 Workflow 工具对 ~4k token schema 的 eager-loading 浪费。

---

*日报由 GitHub 数据自动汇总生成，建议结合 Anthropic 官方 changelog 与 Discord 公告交叉印证。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-28**

---

## 📌 今日速览

今日社区动态密集，OpenAI Codex 集中发布了多个内部维护性 PR（多为 `copyberry` 机器人自动化提交），同时 Windows 平台的稳定性问题持续成为讨论焦点，包括 GPU 进程崩溃、UAC 升级前安装失败、`apply_patch` 不可用等。功能层面，备受期待的 `/undo` 命令恢复请求 (#9203) 评论数仍在高位增长，而多 Agent 子代理（subagent / multi_agent_v2）相关的会话管理与配额问题进入高发期。版本方面，Rust 端连续推进 `0.146.0-alpha.12` 与 `alpha.13` 两个预发布。

---

## 🚀 版本发布

过去 24 小时发布了两个 Rust 端 alpha 预发布版本，均属于 `0.146.0` 系列迭代：

- **rust-v0.146.0-alpha.13**
- **rust-v0.146.0-alpha.12**

> 注：均为预发布版（alpha），建议生产用户继续使用稳定版 CLI（当前主线为 0.145.x）。Release notes 尚未在仓库提供详细 changelog，建议关注后续 [Releases 页面](https://github.com/openai/codex/releases)。

---

## 🔥 社区热点 Issues

以下为本周期评论数最多、最具代表性的 10 个 Issue：

### 1. [#9203](https://github.com/openai/codex/issues/9203) — 恢复 TUI 的 `/undo` 命令 ⭐362
- **标签**：`enhancement`, `TUI`, `session`
- **评论**：65 | **点赞**：362
- **关键点**：用户希望在 TUI 中恢复 `/undo`，因为 Codex 经常会误删未被 Git 跟踪的文件或改动未提交的内容。社区呼声极高，是当前点赞数最高的 feature request。
- **意义**：反映了"安全回滚"作为 Agent 工具刚需的认知，是 OpenAI 内部排序 Top 级别的功能缺口。

### 2. [#32149](https://github.com/openai/codex/issues/32149) — Windows 安装在 UAC 提示前失败
- **标签**：`bug`, `windows-os`, `app`
- **评论**：27
- **关键点**：Windows 10 上 Codex App 安装流程在 UAC 提权之前就崩溃，两种安装方式均不可用。
- **意义**：严重影响 Windows 新用户体验，是 P0 级别的安装器问题。

### 3. [#34133](https://github.com/openai/codex/issues/34133) — Windows 内嵌浏览器截图导致 GPU 进程崩溃
- **标签**：`bug`, `windows-os`, `app`, `browser`
- **评论**：24
- **关键点**：Code Integrity Event 3033 拒绝捆绑的 `vk_swiftshader.dll`，导致 `Page.captureScreenshot` 崩溃，应用冻结或无法重开。
- **意义**：与 #35352、#27599 一同构成 Windows 桌面端的"GPU/SwiftShader 崩溃家族"。

### 4. [#25319](https://github.com/openai/codex/issues/25319) — VS Code 扩展的会话按当前工作区/项目隔离
- **标签**：`enhancement`, `extension`, `session`
- **评论**：18 | **点赞**：48
- **关键点**：用户希望 VS Code 中的 Codex 聊天历史/线程与当前工程目录绑定，而非全局共享。
- **意义**：呼声较高的 IDE 集成改进，对多项目并行使用 Codex 的开发者是关键 UX。

### 5. [#30712](https://github.com/openai/codex/issues/30712) — Windows 桌面端 `apply_patch` 失败，迫使用 PowerShell 绕过沙箱
- **标签**：`bug`, `windows-os`, `sandbox`, `tool-calls`, `app`
- **评论**：15 | **点赞**：13
- **关键点**：桌面端向 `apply_patch` 注入了分裂的可写根目录，导致打补丁失败，Agent 只能降级到 PowerShell 直写，绕过沙箱。
- **意义**：直接影响 Agent 的安全模型，是 Windows 沙箱兼容性的关键回归。

### 6. [#35352](https://github.com/openai/codex/issues/35352) — Windows 内嵌浏览器 GPU 进程崩溃导致 Codex Desktop 退出
- **标签**：`bug`, `windows-os`, `app`, `browser`
- **评论**：12
- **意义**：与 #34133 同源，强调 SwiftShader 在 Windows 上签名/完整性问题。

### 7. [#26990](https://github.com/openai/codex/issues/26990) — Windows Desktop 本地状态断电后不安全
- **标签**：`bug`, `windows-os`, `app`, `session`, `config`
- **评论**：8
- **关键点**：意外断电后 pinned 项目丢失、配置回退、出现未来时间戳，本地状态写入不 crash-safe。
- **意义**：体现 Windows 桌面端持久化层设计上的脆弱性。

### 8. [#34027](https://github.com/openai/codex/issues/34027) — `[已关闭]` `gpt-5.6-sol` 在 ChatGPT 账号下不再可用
- **标签**：`bug`, `CLI`
- **评论**：5 | **点赞**：5
- **意义**：说明模型矩阵更新对 ChatGPT Plus/Pro 用户的隐性影响，是"模型可用性"问题的代表。

### 9. [#22390](https://github.com/openai/codex/issues/22390) — 模型容量满载时应自动退避重试
- **标签**：`enhancement`, `agent`
- **评论**：4 | **点赞**：3
- **意义**：与 #32020、#31278、#33878 同主题——"capacity 错误应自动重试"已成为社区共识。

### 10. [#25619](https://github.com/openai/codex/issues/25619) — `app-server` 在压缩失败后静默完成回合
- **标签**：`bug`, `CLI`, `context`, `app-server`
- **评论**：5
- **意义**：暴露 `codex-rs/core/src/session/turn.rs` 的早期返回路径不发送 `EventMsg::Error`，对 app-server 集成方而言是可靠性盲区。

---

## 🛠️ 重要 PR 进展

以下 PR 涵盖了稳定性、性能、多 Agent、配置层等关键方向（多数为机器人自动维护类，已 CLOSED/合并）：

### 1. [#35695](https://github.com/openai/codex/pull/35695) — 日志客户端遵循配置的 SQLite home
- 修复 `just log` 在 `CODEX_SQLITE_HOME`/`sqlite_home` 指向非默认路径时读到错误数据库的问题。重构 `logs_client` 进 `codex-cli`。

### 2. [#35693](https://github.com/openai/codex/pull/35693) — 后台刷新子代理选择器
- 解决子代理选择器打开时阻塞终端输入与缓存缺失子项的问题。

### 3. [#35678](https://github.com/openai/codex/pull/35678) — 跨恢复保留分页线程元数据
- 防止分页回放历史时覆盖原始 preview/title/首条用户消息。

### 4. [#35670](https://github.com/openai/codex/pull/35670) — Windows `exec` 初始 yield 提升至 10 秒
- 缓解 Windows 长进程下 Ctrl-C 集成测试超时，并同步更新工具描述。

### 5. [#35655](https://github.com/openai/codex/pull/35655) — Windows 非 TTY 进程 Ctrl-C 终止
- 修复 Windows 非 TTY 会话把中断报告为"不支持"导致 Ctrl-C 无效的 bug。

### 6. [#35656](https://github.com/openai/codex/pull/35656) — 多 Agent 设置在配置表示间保持
- `features.multi_agent_v2` 在布尔/表两种形态间转换时不再丢失嵌套字段。

### 7. [#35675](https://github.com/openai/codex/pull/35675) — MCP 与插件推荐并发准备
- Turn 准备阶段并行获取 MCP 发现与端点插件推荐，削减首 token 时延。

### 8. [#35652](https://github.com/openai/codex/pull/35652) — 远程执行启用网络策略回调
- Guardian 审查启用时把远程托管网络策略转发到 controller 端决策器。

### 9. [#35649](https://github.com/openai/codex/pull/35649) — TUI 终端焦点恢复时保留输入
- 焦点事件下刷新面板会丢弃恢复过程中输入的按键，改为缓存启动探针结果。

### 10. [#35685](https://github.com/openai/codex/pull/35685) — `codex sandbox` 加载云托管 profile
- 当显式传入权限 profile 与 `--include-managed-config` 时，引导云配置包并下发到沙箱。

> 还有 #35688（crossterm 补丁切到 OpenAI OSS fork）、#35661（host_skills 早于权限指令渲染）、#35663（按技能路由元数据做字符 n-gram 匹配）等同样值得关注。

---

## 📈 功能需求趋势

从今日活跃 Issues 与 PR 综合来看，社区关注点集中在以下几条主线：

| 方向 | 代表 Issue | 状态 |
| --- | --- | --- |
| **TUI 会话安全**（撤销/回滚） | #9203 | 持续高呼 |
| **IDE 集成改进**（VS Code 工作区隔离、新窗口） | #25319、#15807 | 进行中 |
| **Windows 桌面稳定性**（GPU、SwiftShader、安装器、沙箱） | #32149、#34133、#35352、#30712、#26990、#33732、#34450 | 多个 P0 缺陷 |
| **容量/限流的自动重试与 UX** | #22390、#32020、#31278、#33878 | 社区共识方向 |
| **多 Agent / 子代理能力与配额** | #25990、#34700、#35463、#35656、#35653 | 快速演进 |
| **会话存档/归档与工程产物化** | #20115 | 长期需求 |
| **新模型接入与可用性** | #34027（gpt-5.6-sol 缺失） | 隐性问题 |

---

## 💡 开发者关注点（高频痛点）

1. **Windows 是当前最大短板**：GPU/SwiftShader、UAC、沙箱可写根、ACLS、断电状态机等多个相互独立的问题同时存在，严重影响该平台用户。
2. **"模型容量满"被甩给用户**：当 Codex 切换模型或长任务中途遇到容量限制时，开发者不得不手动重试或换模型，社区一致希望改为自动指数退避并保留任务状态。
3. **沙箱在 Windows 上易被旁路**：`apply_patch` 失败后 Agent 退化为 PowerShell 直写，等于绕过安全策略。
4. **多 Agent 子代理可靠性欠佳**：老会话恢复后丢失新工具、跨线程工具句柄不可见、配额计量异常等，导致用户对 `multi_agent_v2` 信心不足。
5. **IDE 体验落后于 CLI**：VS Code 扩展缺少工作区级会话隔离与多窗口能力，是开发者并用多项目时最大的痛点之一。
6. **缺少安全网**：TUI 没有 `/undo`、会话无法归档到项目目录，长任务"出错了怎么回滚"仍是未解之题。
7. **模型可见性差**：`gpt-5.6-sol` 在 ChatGPT 账号下悄悄消失，Token Activity 显示昨日用量为 0，说明用量/可用性数据本身也需要透明化。

---

*日报基于 openai/codex 仓库 2026-07-28 当日公开数据自动整理，建议结合 [GitHub 仓库动态](https://github.com/openai/codex) 持续追踪。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-28**

---

## 📌 今日速览

Gemini CLI 今日发布了 **v0.54.0-nightly.20260728.gbef611950** 夜间版本，主要聚焦于 A2A 服务器与文件密钥链的修复。社区当前最关注的方向集中在 **Agent 行为稳定性**（多个 P1 挂起/异常退出问题）与 **安全加固**（变量注入绕过、OAuth Token 刷新、Authorization 头泄漏等），同时开源 LLM 提供商支持、AST 感知工具与自动记忆系统的改进也在持续推进。

---

## 🚀 版本发布

**v0.54.0-nightly.20260728.gbef611950**
- 修复 A2A 服务器在 `getProposedContent` 中 CRLF 与 LF 换行不兼容的问题（Windows 平台侧边栏差异视图失效）
- 强化文件密钥链中显式 tag 长度与校验（提升跨 Node.js 运行时下凭据存储的健壮性）
- 发布说明：[Release v0.54.0-nightly.20260728.gbef611950](https://github.com/google-gemini/gemini-cli/pull/28531)

---

## 🔥 社区热点 Issues

1. **[P1] Subagent 在达到 MAX_TURNS 后错误报告为 GOAL 成功** ([#22323](https://github.com/google-gemini/gemini-cli/issues/22323))
   - `codebase_investigator` 子代理即便因达到最大轮次而中断，仍返回 `status: success` 与 `Termination Reason: GOAL`，掩盖了真实的中断状态
   - 12 条评论、2 个 👍，被标记为 `need-retesting`，维护者关注度高

2. **[P1] Generalist agent 频繁挂起** ([#21409](https://github.com/google-gemini/gemini-cli/issues/21409))
   - 一旦委派给 generalist agent，CLI 即陷入无限等待，简单文件夹创建也会卡住超过一小时
   - 8 条评论、8 个 👍（高赞同比），用户痛点强烈；绕过方法是显式禁止子代理

3. **[P1] 组件级评估体系 EPIC** ([#24353](https://github.com/google-gemini/gemini-cli/issues/24353))
   - 跟进已有 76 个行为评估测试，目标是为 6 个支持的 Gemini 模型建立稳健的组件级 eval 基础设施
   - 7 条评论，反映出团队对评估质量与可重复性的投入

4. **[P2] AST 感知文件读取 / 搜索 / 代码库映射评估** ([#22745](https://github.com/google-gemini/gemini-cli/issues/22745))
   - 通过 AST 工具精确读取方法边界，减少对齐偏差造成的多轮浪费与 token 噪声
   - 7 条评论，关联子任务 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（tilth / glyph 工具选型）

5. **[Feature] 支持开源 LLM 提供商** ([#28477](https://github.com/google-gemini/gemini-cli/issues/28477))
   - 提议抽象出通用 provider 接口，让 Gemini CLI 接入 OpenAI 兼容与开源模型
   - 6 条评论，需求面向生态扩展，长期意义重大

6. **[P2] Gemini 几乎不主动使用 skills 与 sub-agents** ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))
   - 经验性反馈：除非显式提示，否则模型很少触发用户自定义 skills（如 gradle / git）
   - 6 条评论，揭示了代理发现与提示层的设计缺陷

7. **[P2] Auto Memory 无限重试低信号会话** ([#26522](https://github.com/google-gemini/gemini-cli/issues/26522))
   - 当提取 agent 因低信号跳过 transcript 后，索引中会反复出现同一会话候选
   - 5 条评论，自动记忆系统稳定性的核心问题之一

8. **[P2/Security] Auto Memory 缺乏确定性脱敏与日志收敛** ([#26525](https://github.com/google-gemini/gemini-cli/issues/26525))
   - 提取 prompt 在内容进入模型上下文后才要求脱敏，密钥泄露风险存在
   - 4 条评论，关联 [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 整体追踪

9. **[P1] Shell 命令执行后卡在 "Waiting input"** ([#25166](https://github.com/google-gemini/gemini-cli/issues/25166))
   - 简单命令执行完毕后，CLI 仍显示 shell 处于激活状态并等待用户输入
   - 4 条评论、3 个 👍，日常使用中的高频阻塞

10. **[P3/Feature] Browser Agent 会话接管与锁恢复** ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232))
    - 当前 `BrowserManager` 对锁定 profile 采用 fail-fast 策略，建议增加自动接管与锁恢复
    - 4 条评论，与 [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（Wayland 下 browser 子代理失败）共同推动浏览器代理韧性提升

---

## 🛠️ 重要 PR 进展

1. **[Security/P1] 阻止 `$VAR` / `${VAR}` 变量扩展绕过** ([#28403](https://github.com/google-gemini/gemini-cli/pull/28403))
   - 修复 `detectBashSubstitution()` / `detectPowerShellSubstitution()` 的不完整检查，修补 GHSA-wpqr-6v78-jr5g；同时加固 `gemini-automated-issue-dedup.yml` 工作流

2. **[Security/P1] 使用存储的 client ID 刷新 MCP OAuth Token** ([#28481](https://github.com/google-gemini/gemini-cli/pull/28481))
   - 解决 OAuth 发现 + 动态客户端注册配置下 token 刷新失败并删除凭据的问题，避免每次都需重新认证

3. **[Security/P1] 使用 `GEMINI_API_KEY` 时剥离 `Authorization` 头** ([#28546](https://github.com/google-gemini/gemini-cli/pull/28546))
   - 修复 `x-goog-api-key` 模式下 `customHeaders` 中残留 `Authorization` 头导致的 Google API 端点 400 错误

4. **[Security/P1] OAuth Token 交换改用原生 fetch** ([#28446](https://github.com/google-gemini/gemini-cli/pull/28446))
   - 解决无头 VPS 上 `gemini login` 始终在 token 交换阶段 `Premature close` 的问题

5. **[P2] macOS Seatbelt 沙箱配置回退到嵌入资源** ([#28551](https://github.com/google-gemini/gemini-cli/pull/28551))
   - 解决 `-s` 模式下静态 `.sb` profile 找不到导致的启动崩溃；为非 JS 静态资源提供 fallback

6. **[P2] 模型选择器新增 `gemini-3.5-flash` / `gemini-3.6-flash`** ([#28485](https://github.com/google-gemini/gemini-cli/pull/28485))
   - 修复 v0.51.0 用户无法在新模型选择器中选到新版本 Flash 模型的问题（`DEFAULT_GEMINI_FLASH_MODEL` 一直停留在 2.5）

7. **[Security] Plan Mode 只读状态以服务器声明为准，需向用户明示** ([#28549](https://github.com/google-gemini/gemini-cli/pull/28549))
   - 关闭 [#28548](https://github.com/google-gemini/gemini-cli/issues/28548)：MCP `readOnlyHint` 是服务器自报，Gemini CLI 不做校验，需在 UI 中披露此性质

8. **[Security/Closed] 文件密钥链强制显式 tag 长度与校验** ([#28523](https://github.com/google-gemini/gemini-cli/pull/28523))
   - 已在 nightly 20260728 合入，确保所有 Node.js 运行时使用 128-bit (16-byte) tag，并处理畸形 tag

9. **[Closed] A2A Server 端 CRLF → LF 规范化** ([#28531](https://github.com/google-gemini/gemini-cli/pull/28531))
   - 解决 Windows 平台 Gemini Code Assist 侧边栏 diff 不高亮的问题

10. **[P2] Windows PowerShell 安装与故障排查文档** ([#28447](https://github.com/google-gemini/gemini-cli/pull/28447))
    - 新增 Windows 下全局 npm 安装后 `gemini` 命令在 PowerShell 中无法运行的指引

---

## 📈 功能需求趋势

从近期活跃的 Issues 中可清晰看到以下几个方向：

| 方向 | 代表 Issue | 关注点 |
|------|------------|--------|
| **多 LLM 提供商支持** | [#28477](https://github.com/google-gemini/gemini-cli/issues/28477) | 抽象 provider 接口，接入 OpenAI 兼容与开源模型 |
| **AST 感知工具链** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) | 方法级精确读取、代码库映射，减少 token 浪费 |
| **行为评估体系** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) | 76+ 项 behavioral eval、跨模型稳定性 |
| **浏览器代理韧性** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 会话接管、Wayland 兼容、`settings.json` 覆盖 |
| **自动记忆 / Memory 系统** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522), [#26523](https://github.com/google-gemini/gemini-cli/issues/26523), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | 去重、脱敏、inbox 隔离、长期质量 |
| **本地子代理 Sprint 1** | [#20195](https://github.com/google-gemini/gemini-cli/issues/20195) | 围绕本地 subagent 的能力建设 |
| **终端体验优化** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24935](https://github.com/google-gemini/gemini-cli/issues/24935) | resize 高性能、外部编辑器退出后的渲染修复 |

---

## 💬 开发者关注点（高频痛点）

1. **Agent 不可预期挂起**：[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#22465](https://github.com/google-gemini/gemini-cli/issues/22465) 反映出"无明显原因即卡住"是当前最影响日常使用的痛点。

2. **Subagent / Skill 调度不够主动**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) 表明代理层发现机制与状态汇报仍需打磨。

3. **安全合规细节**：`$VAR` 注入绕过（[GHSA-wpqr-6v78-jr5g](https://github.com/google-gemini/gemini-cli/pull/28403)）、`Authorization` 头泄漏（[#28546](https://github.com/google-gemini/gemini-cli/pull/28546)）、MCP OAuth 凭据丢失（[#28481](https://github.com/google-gemini/gemini-cli/pull/28481)）、Plan Mode 信任链（[#28549](https://github.com/google-gemini/gemini-cli/pull/28549)）—— 多个 P1 安全 PR 同期推进。

4. **工具数量与上下文管理**：[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 中 400+ 工具触发 400 错误，反映模型选择与上下文过滤策略需优化。

5. **跨平台与安装体验**：Windows PowerShell 安装（[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)）、macOS Seatbelt 资源加载（[#28551](https://github.com/google-gemini/gemini-cli/pull/28551)）、Wayland 浏览器子代理（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）等平台差异问题持续暴露。

6. **破坏性命令防护**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 指出在复杂 git 操作、数据库维护中仍可能出现 `git reset --force` 等高危命令，提示层应主动引导安全替代方案。

---

> 💡 **小结**：今日的 Gemini CLI 社区呈现出"**安全加固 + Agent 稳定性**"双主线。多个 P1 安全 PR 已合入或待合入，针对 Shell 与 Subagent 行为的稳定性问题仍是体验瓶颈；同时 AST 工具、开源 LLM 接入、行为评估体系等中长期方向也在有序推进。建议关注 v0.54 nightly 后续合入的安全 PR（如 #28403、#28481、#28546）。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-28**

---

## 📌 今日速览

今日核心动态集中在 **v1.0.76-0 版本发布** 与 **Plan Mode / ACP 模式的多项回归问题**。MCP 工具加载速度与 Autopilot 行为可配置化得到优化；同时社区围绕"Plan Mode 屏蔽 shell 命令"、"BYOK 自定义模型下 `-i` 启动失效"、"Windows Terminal 渲染空白"等高频反馈展开讨论。**ACPMode 与交互模式的功能对等**（usage_update、contextTier、token 上下文暴露）成为本周最集中的功能诉求。

---

## 🚀 版本发布

### v1.0.76-0

**Improved**
- **MCP 工具加载加速**：从定义作用域快照（definition-scoped snapshots）加载，新增进程级与单服务器级缓存可禁用开关。
- **Autopilot 默认持续选中**：`task_complete` 后默认留在 Autopilot 模式，可通过将 `stayInAutopilot` 设为 `false` 恢复"每任务后回到交互模式"的旧行为。

**Fixed**
- 恢复早期未提交告警（release notes 截断，社区仍在补充）。

> 📎 https://github.com/github/copilot-cli/releases

---

## 🔥 社区热点 Issues（精选 10）

| # | 标题 | 状态 | 👍 | 评论 | 重要性 |
|---|------|------|----|----|--------|
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` 命令未默认选中当前工作目录 | OPEN | **35** | 0 | **最高赞数**：体验类高频诉求，影响所有调用 `/app` 打开桌面端的用户。 |
| [#2792](https://github.com/github/copilot-cli/issues/2792) | 规划/执行阶段自动切换模型 | CLOSED | **16** | 5 | **明星特性请求**：允许规划用便宜模型、执行用强模型以降低成本，关闭前社区反响强烈。 |
| [#4183](https://github.com/github/copilot-cli/issues/4183) | 自动压缩无法规避 CAPI 5 MB Body 限制 | CLOSED | **10** | 4 | 长会话 token 未爆但请求体超限，关键可靠性问题，已修复。 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | 非 git 仓库无法使用 Rewind | OPEN | **9** | 3 | 用户使用 Jujutsu 等 VCS，VS Code Copilot 已支持多 VCS，CLI 跟进呼声高。 |
| [#4188](https://github.com/github/copilot-cli/issues/4188) | Plan Mode 回归：阻断 shell 命令 | OPEN | 3 | 6 | 影响用 `gh` 等 CLI 在规划阶段收集上下文的场景，是 **本版本明确的回归**。 |
| [#1730](https://github.com/github/copilot-cli/issues/1730) | `.github/hooks/` 的 `sessionStart` 不触发 | OPEN | 3 | 6 | 与 VS Code Copilot 一致的 Hook 体系对齐需求，插件生态关键。 |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | 1.0.71 子进程成僵尸（Z 状态） | CLOSED | 3 | 5 | 每个会话泄漏 ~2 僵尸/min，Linux 平台资源管理关键修复。 |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | 切回 Autopilot 后 `task_complete` 不可用 | OPEN | 3 | 2 | 已知回归，与今日 v1.0.76-0 调整 Autopilot 默认行为相关，可能被顺带修复。 |
| [#4159](https://github.com/github/copilot-cli/issues/4159) | Windows Terminal 提交后 TUI 变空白 | OPEN | 3 | 1 | Windows 平台高频复现，与 #4263 同一根因，渲染管线问题。 |
| [#4174](https://github.com/github/copilot-cli/issues/4174) | ACP 不暴露 token/上下文使用量 | OPEN | 2 | 0 | Zed 等 ACP 客户端无法展示额度条，与 #4233 形成 ACP 完整性诉求。 |

---

## 🛠 重要 PR 进展（精选 10）

> ⚠️ 提示：过去 24h 更新的 12 个 PR 中，约一半为垃圾/无关提交（如 GCash 推广、IMEI 修改 README、与项目无关的组件代码）。以下仅列出与项目实际相关的 PR。

| # | 标题 | 说明 |
|---|------|------|
| [#1609](https://github.com/github/copilot-cli/pull/1609) | 更新 PAT 权限配置说明 | 指出 "Copilot Requests" 权限在 PAT 的 **Account** 选项卡下（容易漏看），改进文档引导路径。 |
| [#1598](https://github.com/github/copilot-cli/pull/1598) | `install.sh` 异常退出清理临时目录 | 现有 `rm -rf` 仅覆盖手动分支；`set -e` 触发后 `mktemp -d` 创建的目录会泄漏在 `/tmp`，补齐 trap。 |
| [#1116](https://github.com/github/copilot-cli/pull/1116) | 修正"0x 模型也会扣额度"的误导文档 | 根据用户实际使用，0x 模型不消耗 premium quota，建议澄清 README。 |
| [#988](https://github.com/github/copilot-cli/pull/988) | 修正 `brew install copilot-cli` 命令 | 公式名为 `copilot-cli` 但 README 漏掉了此前合并的 `github/copilot` tap 前缀。 |
| [#1333](https://github.com/github/copilot-cli/pull/1333) | Markdown 语法小修 | 补冠词 "an"、去除多余空行，无功能性改动。 |
| [#3928](https://github.com/github/copilot-cli/pull/3928) | 新增 `.gitignore` 与设置配置 | 仓库工程化基础补全。 |
| [#2800](https://github.com/github/copilot-cli/pull/2800) | 引入 devcontainer 配置 | 便于贡献者获得一致开发环境。 |
| [#4030](https://github.com/github/copilot-cli/pull/4030) | Jekyll → GitHub Pages 部署 workflow | 文档站点自动化（需 review 是否真用于该项目）。 |
| [#3873](https://github.com/github/copilot-cli/pull/3873) | 新增启动问候 console log | 描述极少，建议 maintainer 在合并前明确意图。 |
| [#4057](https://github.com/github/copilot-cli/pull/4057) | "Install"（标题为空内容） | 需补充说明才能评估，否则不建议合并。 |

**维护者建议**：近期明显出现批量低质/垃圾 PR（GCash 推广、IMEI 修改 README、无关前端组件），建议开启更严格的 PR 模板与 CI 准入。

---

## 📈 功能需求趋势

从近 24h 的 40 条更新中归纳，社区最关注的 6 个方向：

1. **🤖 ACP 模式与交互模式的功能对等**
   - 暴露 `usage_update`（#4233）、`contextTier` 会话配置（#4275）、token 使用量（#4174）。Zed 等 ACP 客户端对 CLI 的可观测性诉求正在系统性扩张。

2. **🪟 Windows Terminal 渲染稳定性**
   - #4159、#4263、#4191、#4266 均指向 Windows + WSL/tmux/Screen/分屏场景下的 TUI 渲染异常，且 `-p` 模式不受影响 → 交互渲染管线需重点回归测试。

3. **🔌 自定义/BYOK 模型提供商兼容性**
   - #4258（BYOK 下 `-i` 启动 prompt 被忽略）、#4233（ACP 行为差异）、#4272（新模型被企业策略灰掉）显示，自托管与多模型路径仍是 **未完整打磨** 的能力面。

4. **🧠 上下文与内存管理**
   - #4183（CAPI 5 MB 限制）、#3886（`/restart` 莫名消耗 174 credits）、#4224（subagent OTel 漏算账单）反映 **可观测性与配额公平性** 是新阶段的信任问题。

5. **🔁 Plan Mode 与 Agent 行为一致性**
   - #4188（Plan 屏蔽 shell）、#4161（task_complete 不可用）、#2792（规划/执行模型分离）、#3977（Autopilot 持久化）形成关于 "Agent 工作流编排" 的密集讨论群，v1.0.76-0 的 Autopilot 默认持久选中即回应之一。

6. **🗂 跨 VCS / 插件生态**
   - #1381（Rewind 支持非 git）、#1730（Hook 不触发）、#3264（`.copilot` 符号链接文档）表明 CLI 正在追赶 VS Code Copilot 的扩展能力，但官方文档与平台覆盖存在落差。

---

## 🧩 开发者关注点（痛点 & 高频需求）

| 类别 | 具体反馈 |
|------|---------|
| **可靠性回归** | Plan Mode 屏蔽 shell (#4188)、task_complete 丢失 (#4161)、僵尸进程 (#4163) — 三个近期回归集中在 Agent 工作流路径。 |
| **跨平台兼容** | Windows Terminal 在垂直分屏下内容消失 (#4263)、WSL+tmux 剪贴板失效 (#4191)、macOS Keychain 双重签名 XARA 不匹配 (#4273)。 |
| **计费透明度** | `/restart` 等无模型调用却扣 174 credits (#3886)、subagent OTel span 缺 `nano_aiu`/`cost` (#4224)。 |
| **BYOK/自定义模型** | `-i` 启动 prompt 不被提交 (#4258)，新模型被组织策略禁用且文档无指引 (#4272)。 |
| **可用性细节** | `/app` 不默认选中 cwd (#4118, 35 👍)、Pending 标记未及时清除 (#4281)、方向键缓冲溢出 (#4274)、glob 多段模式须手动加 `**/` (#4271)。 |
| **Hook/插件体系** | `.github/hooks/sessionStart` 不触发 (#1730) 是高优先级插件生态缺口。 |

---

> 📅 明日关注重点：v1.0.76-0 正式发布说明是否补全、`#4188`（Plan Mode 回归）的维护者回应、ACP `usage_update` / `contextTier` 是否进入 Roadmap。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**📅 2026-07-28** ｜ 数据来源：`github.com/MoonshotAI/kimi-cli`

---

## 📌 今日速览

过去 24 小时仓库活跃度集中在 **VSCode 扩展稳定性** 与 **Windows 中文区域编码兼容性** 两条主线：两个新 Issue 分别报告了扩展审批提示间歇性不渲染（导致 600s 静默超时）和 Plan 模式文件路径不可点击；两个新 PR 则集中修复 Windows GBK 环境下的 `UnicodeEncodeError` 崩溃。与此同时，PR #2539 / #2562 持续推进 MCP 工具规范化与 LLM Provider 灵活配置，为第三方 Moonshot 兼容网关接入铺路。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

> 今日窗口共 4 条 Issue 有更新，因样本有限，以下汇总全部内容并按重要性排序。

### 🔴 #2563 [OPEN] VSCode 扩展审批提示间歇性不渲染 → 无限卡死 / 600s 静默超时
- **作者**：edpa2019
- **环境**：`moonshot-ai.kimi-code` 0.6.4 / macOS arm64 / Kimi-K3 / Allegretto
- **关注点**：`ExitPlanMode` 与工具权限审批提示在 webview 中偶发不渲染，导致 Agent 长时间任务完全阻塞。
- **为什么重要**：直接破坏"长时间无人值守"工作流，是 VSCode 扩展侧最高优先级问题之一。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2563

### 🔴 #2564 [OPEN] `PostToolUse` / `PostToolUseFailure` Hook 被 GC 提前回收
- **作者**：belenov-maker
- **环境**：当前 main
- **关注点**：在 `config.toml` 注册的 Hook 子进程有时根本没启动，有时被中途 kill，呈现明显的非确定性。
- **为什么重要**：Hooks 是用户扩展 Agent 工作流（审计、格式化、CI 触发）的核心机制，"有时跑有时不跑"会摧毁对自动化的信任；根因疑在 `kimi_cli/soul/toolset` 的引用管理。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2564

### 🟡 #2317 [OPEN] [VSCode 扩展] Plan Mode 聊天视图中文件路径不可点击
- **作者**：vlad-at-work
- **环境**：`moonshot-ai.kimi-code` 0.5.10 / Darwin arm64
- **关注点**：Plan Mode 输出中的文件路径没有渲染为可点击链接，用户只能手动复制。
- **为什么重要**：影响 Plan Mode 的"导览→编辑"体验闭环，但有手工 workaround。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2317

### 🟢 #1070 [CLOSED] 登录失败：`Cannot connect to host auth.kimi.com:443 ssl:default [Network is unreachable]`
- **作者**：notedit（8 条历史评论）
- **关注点**：早期 v1.9.0 网络可达性问题已收尾关闭。
- **社区信号**：旧 issue 清理完成，可作为"登录链路稳定性已恢复"的参考案例。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1070

---

## 🛠️ 重要 PR 进展

> 今日窗口共 4 条 PR 有更新，以下按"影响面 × 修复深度"排序。

### ⭐ #2539 [OPEN] `fix(mcp)`: 为 Moonshot API 规范化 MCP 工具定义
- **作者**：lihailong00
- **核心改动**：
  - 为 MCP 工具名生成稳定的 Moonshot 兼容别名，同时保留原始名用于上游调用路由
  - 补齐 schema 中缺失的根 `object` 类型
  - 重排 `anyOf` / `required` 结构以匹配 Moonshot API 期望
- **价值**：直接解决第三方 Moonshot 兼容网关对 MCP schema 严格校验失败的接入摩擦。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2539

### ⭐ #2562 [OPEN] `fix(llm)`: 支持关闭 `prompt_cache_key`
- **作者**：lihailong00
- **核心改动**：
  - `kimi` provider 配置新增 `prompt_cache_key` 布尔项
  - 设为 `false` 时省略会话派生的 `prompt_cache_key` 请求字段
  - 官方托管 Kimi provider 保持默认行为不变
  - 英 / 中双语文档同步
- **价值**：让自部署 Moonshot 兼容网关（不支持 `prompt_cache_key`）的用户可顺利接入，是 Provider 灵活化的关键一步。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2562

### 🔧 #2561 [OPEN] 修复 stdio 非 UTF-8 编码下启动时的 `UnicodeEncodeError`（Windows）
- **作者**：LHMQ878 · 修复 #1436
- **场景**：从 Git Bash 启动 `kimi`，欢迎 banner 中的 `▐` 等 Unicode 字符在 GBK（cp936）下立即崩溃。
- **价值**：消除 Windows 中文用户"安装即闪退"的首道门槛。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2561

### 🔧 #2560 [OPEN] 修复 `kimi web` banner 在非 UTF-8 stdout 下的 `UnicodeEncodeError`（Windows）
- **作者**：LHMQ878 · 修复 #2532
- **场景**：中文 Windows + stdout 重定向时，`kimi web` 在 HTTP server 绑定端口前因 `➜` 字符崩溃。
- **价值**：与 #2561 构成 Windows CJK 兼容的"组合拳"，覆盖面更完整。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2560

---

## 📈 功能需求趋势

结合近 24 小时及近期相关 Issue / PR 提炼出社区关注方向：

1. **🪟 Windows / CJK 区域兼容性** —— 短期内集中出现 #1436、#2532 及修复 PR #2561 / #2560，反映 Windows 中文用户（特别是 GBK / cp936）已是当前最迫切的体验痛点。
2. **🧩 VSCode 扩展稳定性** —— #2317（Plan Mode 路径不可点击）与 #2563（审批提示不渲染）同窗出现，说明扩展侧渲染与状态机对边界条件的覆盖仍显薄弱。
3. **🔌 MCP 生态与 Moonshot 兼容网关适配** —— #2539 显示 Moonshot 兼容 API 对 MCP schema 的严格校验已成为接入摩擦点，#2562 也属于同一脉络（Provider 配置偏差）。
4. **⚙️ LLM Provider 灵活配置** —— `prompt_cache_key` 可关闭等改动表明开发者把 Kimi CLI 用作"通用 Moonshot 兼容客户端"的诉求在增长。
5. **🪝 Hooks 系统可靠性** —— #2564 触及自动化工作流的核心信任层，社区期望官方对"子进程生命周期 + 引用管理"给出明确语义。

---

## 👨‍💻 开发者关注点

- **🆕 新手首次启动体验**：欢迎 banner / web banner 在 GBK 下直接 crash，是 Windows 中文用户安装即弃用的首要原因；PR 已就位，等待合入与发版。
- **🤖 Agent 长任务的可中断性**：VSCode 扩展审批提示偶发不渲染 → 600s 静默超时，反映扩展层缺乏超时降级或心跳恢复机制。
- **🪝 Hooks 的"确定性"**：开发者把 Hooks 当作基础设施用，"有时跑有时不跑"的非确定性是不可接受的；需要文档化的生命周期保证 + 错误反馈通路。
- **🌐 第三方 Moonshot 兼容网关的协议偏差**：MCP schema 与 `prompt_cache_key` 是当前两大暴露点，社区希望官方维护一份"已知兼容网关差异清单"。
- **🧹 历史 issue 收尾**：#1070 的关闭表明旧版网络/登录链路已稳定，但社区仍期待更细粒度的网络诊断日志，便于自助排障。

---

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**报告日期**：2026-07-28
**数据来源**：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 📌 今日速览

OpenCode 在 24 小时内连发两个版本（v1.18.6 / v1.18.7），主要修复了 Desktop 渲染器崩溃、macOS 全屏显示与分支缓存一致性等问题。社区方面，"OpenCode Go 订阅扣款成功但余额仍显示不足"以及"DeepSeek V4 Flash 升级后任务无法完成"两大模型与计费相关问题成为焦点；同时开发者 Brendonovich 正在密集提交 V2 桌面应用的控制器重构 PR，体现项目架构层面持续演进。

---

## 🚀 版本发布

### v1.18.7（Desktop）
- **macOS 全屏**：移除多余标题栏内边距
- **命令面板**：修复冗余命令被移除后旧条目仍错误显示
- **项目选择器**：长列表下添加滚动支持（[david1gp 贡献](https://github.com/anomalyco/opencode)）

### v1.18.6（Core + Desktop）
- **Core**：修复分支专属仓库缓存，刷新某一引用不再污染其他分支检出
- **Desktop**：增强目录、项目、会话、终端流程与新版客户端 API 的兼容性；修复传统 MCP 相关问题

> ⚠️ 注意：v1.18.7 发布后短期内出现多处 `AutoScroller plugin depends on Scroller plugin` 致命渲染错误（参见 #39162、#38830、#38107），建议升级前关注。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 关注度 | 重要性说明 |
|---|------|------|--------|----------|
| [#25270](https://github.com/anomalyco/opencode/issues/25270) | Bug: 模型生成重复响应 | OPEN | 💬23 👍4 | 长期未解决的高赞 bug，模型偶尔输出完全相同的两次回答，影响多个用户 |
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | OpenCode Go 订阅成功但提示余额不足 | OPEN | 💬11 | 付费用户核心痛点，Stripe 扣款成功但无法使用服务 |
| [#9281](https://github.com/anomalyco/opencode/issues/9281) | [FEATURE] 统一使用量追踪 /usage | OPEN | 💬11 👍31 | **点赞数最高的 Feature 请求**，跨 OAuth 提供商急需统一的用量面板 |
| [#29703](https://github.com/anomalyco/opencode/issues/29703) | [FEATURE] 修改项目路径不丢失会话历史 | OPEN | 💬9 👍13 | 解决项目目录重命名/迁移后历史清零的根本问题 |
| [#28596](https://github.com/anomalyco/opencode/issues/28596) | Bug: 重复工具调用陷入循环 | OPEN | 💬5 | 模型以相同参数无限调用工具，需手动中断，影响 Agent 稳定性 |
| [#38107](https://github.com/anomalyco/opencode/issues/38107) | Desktop v2: AutoScroller 致命渲染错误 | OPEN | 💬4 | v2 桌面开发构建遇到 dnd-kit 插件依赖问题 |
| [#38830](https://github.com/anomalyco/opencode/issues/38830) | Error: AutoScroller plugin depends on Scroller plugin | OPEN | 💬4 | 同类渲染器错误，需统一修复 |
| [#39162](https://github.com/anomalyco/opencode/issues/39162) | Desktop 1.18.7 打开设置即崩溃 | CLOSED | 💬3 | 1.18.7 引入的回归，影响所有进入设置页的用户 |
| [#38598](https://github.com/anomalyco/opencode/issues/38598) | DeepSeek V4 Flash 升级后无法完成任务 | OPEN | 💬2 | 1.18.4 升级后多个用户报告 DeepSeek V4 模型"懒"响应 |
| [#39181](https://github.com/anomalyco/opencode/issues/39181) | TUI 多实例共享 Server 时事件串扰 | OPEN | 💬2 | 多个 TUI 连接同一 `opencode serve` 时分支状态显示错误 |

---

## 🛠 重要 PR 进展

| PR | 作者 | 说明 |
|----|------|------|
| [#39231](https://github.com/anomalyco/opencode/pull/39231) | Brendonovich | 重构：抽离会话侧边栏控制器，V2 桌面架构持续拆分 |
| [#39233](https://github.com/anomalyco/opencode/pull/39233) | Brendonovich | 重构：建立 V2 会话控制器，模型选择器/侧栏/时间线分模块化 |
| [#39230](https://github.com/anomalyco/opencode/pull/39230) | Brendonovich | 重构：抽离 Provider 连接控制器 |
| [#39227](https://github.com/anomalyco/opencode/pull/39227) | Brendonovich | 重构：精简新建会话组合逻辑 |
| [#39224](https://github.com/anomalyco/opencode/pull/39224) | kitlangton | feat(core): 本地配置插件支持源文件热重载，闭环 #37429 |
| [#39225](https://github.com/anomalyco/opencode/pull/39225) | loulanyue | fix(core): 为 ripgrep 搜索添加默认 wall-clock 截止时间（解决长时间挂起） |
| [#39234](https://github.com/anomalyco/opencode/pull/39234) | kitlangton | docs: 禁止 type 位置 `import("...")` 引用，规范类型导入 |
| [#39223](https://github.com/anomalyco/opencode/pull/39223) | kitlangton | test(core): 简化 runner 同步 fixture，将中断恢复测试变为确定性 |
| [#39216](https://github.com/anomalyco/opencode/pull/39216) | kitlangton | test(core): 添加原生 watcher 命令重载端到端测试 |
| [#39217](https://github.com/anomalyco/opencode/pull/39217) | Brendonovich | fix(app): 服务器状态注意提示统一使用蓝色（与会话 Tab 一致） |
| [#39220](https://github.com/anomalyco/opencode/pull/39220) | Brendonovich | fix(app): 连接 Provider 后刷新全局 Provider 状态 |
| [#39201](https://github.com/anomalyco/opencode/pull/39201) | raullenchai | docs: 新增 Rapid-MLX 本地 OpenAI 兼容 Provider 文档（Apple Silicon） |

---

## 📈 功能需求趋势

通过对 50 条 Issue 摘要提炼，社区最关注的方向呈现以下分布：

1. **🔍 统一可观测性（高需求）** — 跨 Provider 的用量/配额追踪（[#9281](https://github.com/anomalyco/opencode/issues/9281) 31 赞独占鳌头），反映用户在多模型订阅下的可见性焦虑。

2. **📂 会话与项目生命周期管理** — 修改项目路径保留历史（#29703）、会话中切换工作目录（#39199）、多 TUI 共享 Server（#39181），说明长期项目协作场景下用户对"工作上下文不丢失"需求强烈。

3. **🛒 订阅/计费体验** — OpenCode Go 支付成功却余额不足（#37790）、信用卡被拒（#33264）、订阅被上游 Provider 拒绝（#39215），付费闭环的透明度和可靠性是当务之急。

4. **🤖 新模型接入** — Nvidia Nim 新模型同步（#38865）、Rapid-MLX 本地推理（#39201 已合入文档）、DeepSeek V4 Flash 回归（#38598/#39219），模型生态持续扩张但需要更稳定的兼容性保障。

5. **🖥 Desktop UI 稳定性** — 多个 AutoScroller 致命错误（#38107/#38830/#39162）、主题切换失效（#39205）、NV2 渲染层频繁崩溃，V2 桌面应用架构升级期带来阵痛。

6. **🔌 MCP 与插件配置** — MCP 本地配置字段 `env` vs `environment` Schema 不一致（#39135）、本地插件热重载（#39224 已修复），生态扩展的配置正确性成为关键。

7. **📦 Linux 发行版打包** — AppStream MetaInfo 改进（#35984），面向 .deb/flatpak 的发布元数据逐步完善。

---

## 👨‍💻 开发者关注点

综合 Issue 与 PR 讨论，开发者集中反馈以下痛点：

- **🧨 模型稳定性回归**：升级 1.18.4+ 后 DeepSeek V4 Flash 出现"找到答案后立即终止"现象（#38598、#39219），且 #28596 反映工具调用死循环问题长期未根治。
- **🔁 重复响应**：#25270（23 条评论）一直未被解决，部分用户的高频工作流被该 bug 反复打断。
- **💸 付费不透明**：OpenCode Go 订阅扣款成功但余额仍为 0（#37790）、HTTP 401（#39215），Kimi K3 temperature 参数被上游拒绝（#39214），付费链路的多 Provider 兼容性亟需统一。
- **🐞 桌面渲染器崩溃**：1.18.7 升级后多个用户进入设置页即全屏崩溃（#39162），@dnd-kit/dom 的 AutoScroller/Scroller 插件依赖错误成为 V2 桌面稳定性瓶颈。
- **⚙️ 热重载体验**：配置目录变更未触发 config-backed reload（#37429）、本地插件需手动重启（#39224 已修复），开发循环体验正在被持续打磨。
- **🔌 跨 TUI 状态污染**：共享 `opencode serve` 时多个 TUI 互相串扰事件（#39181），多窗口/多终端协作场景需要 Server-Client 严格隔离。
- **📑 文档与 Schema 不同步**：MCP 文档中 `env` 字段与 JSON Schema `environment` 不一致（#39135），体现生态扩展速度已超过文档维护节奏。

---

> 📊 **报告说明**：本报告基于过去 24 小时 GitHub Releases、Issues、Pull Requests 数据自动生成。点赞数与评论数为该 Issue 自创建以来的累计值，反映社区长期关注度。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-28

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) / [earendil-works/pi](https://github.com/earendil-works/pi)（Issues & PRs 链接中的仓库路径）

---

## 📌 今日速览

过去 24 小时仓库维持高频迭代节奏：**未发布新版本**，但 50 条 Issues 与 25 条 PR 同步更新，社区热度集中在"提供商兼容性修复 + 扩展 API 增强"两条主线。维护者对历史 issue 进行了大规模分类与关闭（含大量 no-action / untriaged 标记），同时出现了 #7188 这种"Agent 把提交错投到 pi 仓库"的有趣事件，侧面印证 Agentic Coding 已深度进入 Pi 的开发循环。

---

## 🚀 版本发布

无（过去 24 小时未发布新 Release）。

---

## 🔥 社区热点 Issues（10 条）

| # | 标题 | 状态 | 热度 | 为什么值得关注 |
|---|---|---|---|---|
| [#5263](https://github.com/earendil-works/pi/issues/5263) | 会话内模型/thinking-level 变更默认改为 ephemeral | **OPEN** | 💬10 / 👍**10** | 当日最具共识的需求：要求把"会话级切换"与"全局默认"分离，避免误改全局设置。👍 数等于评论数，说明社区几乎一致同意。 |
| [#6747](https://github.com/earendil-works/pi/issues/6747) | 为扩展提供 Agent 消息 Markdown 增强 API | OPEN (inprogress) | 💬8 / 👍2 | 官方已标记 inprogress，是当前扩展生态最关键的能力之一，可用于渲染公式 / 自定义高亮而不污染 LLM 输入。 |
| [#5023](https://github.com/earendil-works/pi/issues/5023) | 终端无故跳到会话开头并快速回滚 | CLOSED | 💬10 | 长生命周期 bug，10 条评论印证其在流式输出过程中频繁触发，已被关闭意味着已有解决方案合入。 |
| [#6970](https://github.com/earendil-works/pi/issues/6970) | Copilot 插件集成导致 token 失效 | CLOSED | 💬4 | 影响多设备用户；调查指向 Pi 使用了 "GitHub Copilot Plugin" 而非 OAuth 通道。已关闭，等待官方说明修复路径。 |
| [#7157](https://github.com/earendil-works/pi/issues/7157) | OpenCode Go provider 显示名为 "OpenCode Zen Go" | OPEN | 💬5 | 小但明确的体验问题，`pi --list-models` 命名错位，已配套 PR [#7173](https://github.com/earendil-works/pi/pull/7173) 修复。 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | `anthropic-messages` 路径未发送 `x-client-request-id` | OPEN | 💬4 | 代理/网关侧 session affinity 失效的根本原因，影响多账号 round-robin 场景；社区已给配套 PR [#7172](https://github.com/earendil-works/pi/pull/7172)。 |
| [#7143](https://github.com/earendil-works/pi/issues/7143) | Z.AI 提供商错误使用 `max_completion_tokens` | CLOSED | 💬4 | 揭示 `detectCompat()` 兼容层判断偏差，已合并 PR [#7174](https://github.com/earendil-works/pi/pull/7174)。 |
| [#7171](https://github.com/earendil-works/pi/issues/7171) | 去重 cwd→root 路径中字节相同的 AGENTS.md/CLAUDE.md | CLOSED | 💬3 | worktree 场景下上下文重复问题的根治，已合入 PR [#7169](https://github.com/earendil-works/pi/pull/7169)。 |
| [#7140](https://github.com/earendil-works/pi/issues/7140) / [#7138](https://github.com/earendil-works/pi/issues/7138) | MiniMax M3 Token Plan 下 thinking 标签在压缩后错位 | CLOSED | 💬3 | 模型兼容性 + compaction 联动问题，提议通过 `reasoning_split` 参数根治，反映 reasoning 模型与 Pi 压缩机制的耦合痛点。 |
| [#7198](https://github.com/earendil-works/pi/issues/7198) | Markdown 渲染在嵌套 email quote 上栈溢出崩溃 | CLOSED | 💬2 | `Markdown.renderToken()` 递归无保护，会让"含邮件线程的会话"无法恢复——是稳定性盲点。 |

> 备注：仓库配置下新贡献者的 issue 会被自动关闭，所以当日大量 CLOSED 标记不等同于"被驳回"，部分仍可能在评审通道中。

---

## 🛠 重要 PR 进展（10 条）

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#7022](https://github.com/earendil-works/pi/pull/7022) | WIP：响应中 `/tree` 导航守卫 | OPEN (WIP PoC) | 解决流式输出期间切换 `/tree` 节点导致状态错乱的经典问题，作者提议在响应阶段直接禁用 `/tree`。 |
| [#7163](https://github.com/earendil-works/pi/pull/7163) | Session 搜索迁移到 SQLite FTS5 | OPEN | 为 JSONL/Memory 之外的存储新增 contentless FTS5 虚表，大会话检索性能与体验的关键升级。 |
| [#7081](https://github.com/earendil-works/pi/pull/7081) | Bedrock 支持 Claude Opus 5 + 自适应 thinking | CLOSED | 配置 Opus 5 启用 adaptive thinking，否则服务端报错；同时收敛 Bedrock 错误信息格式。 |
| [#7184](https://github.com/earendil-works/pi/pull/7184) / [#7181](https://github.com/earendil-works/pi/pull/7181) | 剥离工具结果中的多模态媒体标记 | CLOSED | 修复 `|image|` / `<|image|>` 标记多于实际 bitmap 时 tokenizer 崩溃；含提交记录重复，疑似重提。 |
| [#7176](https://github.com/earendil-works/pi/pull/7176) | Bedrock：优先使用已配置 profile 而非环境变量 | OPEN | 解决 `AWS_ACCESS_KEY_ID` 存在时显式 profile 被忽略的问题，AWS SDK 优先级语义修正。 |
| [#6881](https://github.com/earendil-works/pi/pull/6881)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-28

## 📌 今日速览

今日社区动态以**集成稳定性**和**长上下文/流式响应问题**为主线：VSCode Companion 连接故障、MCP 配置丢失、长上下文流式 ECONNRESET、YOLO 模式下大代码生成被网关断连等问题密集出现；同时，频道适配器（GitHub/GitLab/DingTalk）、外部记忆系统、CLI/Web Shell 体验改进等持续推进。CI 端 E2E 测试仍处于波动期，Fleet Shepherd 自动维护多起失败工单。

---

## 🚀 版本发布

本日发布两个**非生产**预发布版本，均为 DSW 手动基准 POC：

| 版本 | 说明 |
| --- | --- |
| `dsw-manual-poc-20260727-1` | 内部基准预发布，对应 `Benchmark-Qwen-Ref: v0.20.0-nightly.20260722.b98306b7e` |
| `dsw-manual-poc-20260727-2` | 同基准第二次 POC |

📊 **SWE-bench Verified 结果（QUARANTINED）**：500/500 完成，**376 resolved / 116 unresolved / 1 error**（通过率 75.2%）。因仍处于隔离审核状态，结果暂不作为正式成绩发布。

> 💡 正式 nightly 版本仍为 `v0.20.0-nightly.20260722.b98306b7e`。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 热度 | 为什么值得关注 |
| --- | --- | --- | --- |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | **提议：新增 Direct External Context Provider Profile**（@doudouOUC） | 9 评论 | 旨在不改动 Core 的前提下，通过扩展让 CLI 进程从管理员绑定的外部记忆/知识服务中获取仓库共享上下文。与企业落地强相关。 |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | **提议：企业级外部记忆集成 Profile**（@doudouOUC） | 6 评论 | 与 #7585 互补，提供"provider-neutral"企业外部记忆接入规范，走文档先行 + 增量兼容测试路线。 |
| [#6762](https://github.com/QwenLM/qwen-code/issues/6762) | **功能请求：Skill 上下文生命周期管理** | 5 评论 | 指出当前 `SKILL.md` 内容注入对话后**永远驻留**，无法卸载/压缩，是长会话性能与上下文预算的核心痛点。 |
| [#7697](https://github.com/QwenLM/qwen-code/issues/7697) [CLOSED] | VSCode 中 Qwen Code **无法连 Unity MCP**，而 Claude Code 可以 | 5 评论 | 反映 MCP 生态适配与竞品对比的差距，社区关注"能不能用 MCP"已成为基础门槛。 |
| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) [CLOSED] | VSCode Companion 0.19.11 `Failed to connect to Qwen agent` | 6 评论 | ACP 进程意外退出（exit 0），与 Electron/Chromium 通信相关，反复出现的连接类问题。 |
| [#6414](https://github.com/QwenLM/qwen-code/issues/6414) [CLOSED] | VSCode Qwen Code 无法连接 Qwen agent | 6 评论 | 同类连接问题的早期工单，反映长尾用户反复踩坑。 |
| [#7835](https://github.com/QwenLM/qwen-code/issues/7835) | **子代理调用 ask_user_question 后挂死** | 3 评论 P2 | 子代理能发起问题，但主代理不收集/转发，用户**永久等待**，是 subagent 工具链的硬阻塞 bug。 |
| [#7832](https://github.com/QwenLM/qwen-code/issues/7832) | **YOLO 模式下大代码生成必失败** | 3 评论 P1 | DashScope 网关在 3–5 分钟 SSE 流后关闭 TCP，`UND_ERR_SOCKET` 频发，直接阻断 500+ 行场景。 |
| [#7831](https://github.com/QwenLM/qwen-code/issues/7831) | 长上下文（>150k tokens）流式响应反复 **ECONNRESET** | 3 评论 P2 | 与 #7832 同根的网关/连接问题，影响长会话可用性。 |
| [#7841](https://github.com/QwenLM/qwen-code/issues/7841) [CLOSED] | **配额耗尽型 429 被静默重试且不告知用户** | 3 评论 P2 | `isRateLimitError` 仅检查 `throttled`/`rateLimit`，永久耗尽配额被误判为瞬时限流，体验和额度双受损。 |

> 🛠 自动化议题提示：本期有 **多条由 Fleet Shepherd 自动维护的工单**（如 [#7167](https://github.com/QwenLM/qwen-code/issues/7167)）及一批 `Main CI failed: E2E Tests on ...` 的机器人 issue（#7755/#7773/#7780/#7787/#7794/#7797/#7804/#7813/#7860/#7861/#7878 等），多为 main 分支 E2E 抖动导致，已标记 `status/ready-for-agent, autofix/skip`。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 方向 | 关键内容 |
| --- | --- | --- | --- |
| [#7884](https://github.com/QwenLM/qwen-code/pull/7884) | Triage 修复 | **重试瞬时 `npm ci`，避免误判 PR** | 在两条 sandbox 流水线中各重试一次 `npm ci`，缓解 sandbox install 抖动。 |
| [#7820](https://github.com/QwenLM/qwen-code/pull/7820) | 测试基础设施 | 修复首输出基准（first-output benchmark）有效性并修正 schema | 补齐 #7761 合并时未应用的 10 条 review 意见，仅触及可选用例与测试基建。 |
| [#7484](https://github.com/QwenLM/qwen-code/pull/7484) | Core | **为纯文本模型桥接工具结果中的图片** | 内置工具、MCP 与扩展工具的图像读取/错误/超时统一进入同一路由阶段，纯文本主模型可"看见"图片。 |
| [#7849](https://github.com/QwenLM/qwen-code/pull/7849) | Web Shell | 新增**原生工作区文件夹选择器** | Add Workspace 对话框增加 Browse，调用系统原生 picker，daemon 暴露 loopback 端口供前端调用。 |
| [#7826](https://github.com/QwenLM/qwen-code/pull/7826) | Channels | **GitHub 通知按 reason 分发** | 区分 mention / review_requested / assigned 等触发条件，与最新事件/授权态对齐，不再把所有更新当普通评论。 |
| [#7877](https://github.com/QwenLM/qwen-code/pull/7877) | External Context | 新增**提交即自动回忆**（Auto Recall） | 基于 Direct External Context 集成，以管理员安装的 `UserPromptSubmit` Hook 落地，与既有按需 MCP profile 互斥。 |
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) | Web Shell | 新增**Git 分支选择器 / 提交对话框 / 创建 PR 流** | 类 IntelliJ 的 popover，支持搜索过滤、切分支、新建分支等。 |
| [#7883](https://github.com/QwenLM/qwen-code/pull/7883) | CLI | 修复 `/copy <message> <index>` **真正选中代码块** | 此前按编号选择始终报"无匹配"，现在能精确定位 AI 消息中的代码块。 |
| [#7862](https://github.com/QwenLM/qwen-code/pull/7862) | Channels | 新增 **GitLab 轮询频道适配器** | 基于 `@gitbeaker/rest`，复用 `PollingChannelBase`，监听 GitLab Todos 进入既有 channel pipeline。 |
| [#7882](https://github.com/QwenLM/qwen-code/pull/7882) | Core | **从子代理工具集中排除 `ask_user_question`** | 解决 #7835 子代理永久等待问题，配合 `Explore` 缺失项修复。 |

> 其他值得关注的： [#7836](https://github.com/QwenLM/qwen-code/pull/7836)（`POST /session` 支持调用方提供 `sessionId`、修复 #7831 的会话丢失）、[#7830](https://github.com/QwenLM/qwen-code/pull/7830)（轮询兜底修复 #7828 Git 分支显示陈旧）、[#7842](https://github.com/QwenLM/qwen-code/pull/7842) [CLOSED]（永久配额耗尽 429 **快速失败**）、[#7414](https://github.com/QwenLM/qwen-code/pull/7414)（基于 111 个 revert 提交的数据驱动 triage 风险识别）、[#7784](https://github.com/QwenLM/qwen-code/pull/7784)（`/stats` 显示真实 $0.00 而非 N/A）。

---

## 📈 功能需求趋势

综合 30+ 条高互动 Issue/PR 可提炼出当前社区最关注的**五个方向**：

1. **🧠 外部记忆 / Context Provider 体系**
   - 代表：#7585、#7449、#7877
   - 关键词：Direct External Context、企业外部记忆、Auto Recall Hook、provider-neutral profile

2. **🔌 IDE / MCP 集成稳定性**
   - 代表：#7697、#7056、#6414、#7819
   - 关键词：VSCode Companion 连接、Unity MCP、`--safe-mode` 误丢弃 `mcpServers`、ACP 桥接

3. **📡 跨平台 Channel 适配器**
   - 代表：#7687、#7807、#7826、#7862
   - 关键词：DingTalk 出站图片、GitHub `notification.reason` 分发、GitLab 轮询

4. **🖥 Web Shell 体验升级**
   - 代表：#7849、#7731、#7810
   - 关键词：原生文件夹选择器、Git 分支/提交/PR、Session 历史隔离

5. **🚀 长上下文 / 大输出可用性**
   - 代表：#7832、#7831、#6762
   - 关键词：>150k token 流式、断点续连、Skill 上下文生命周期

---

## 💬 开发者关注点

| 痛点 / 需求 | 典型反馈 |
| --- | --- |
| **IDE 连接不稳** | 多名用户反复遇到 VSCode Companion "Failed to connect to Qwen agent"，要求排查 ACP 进程退出与 Electron 警告日志。 |
| **MCP "能用 vs 不能用"** | Unity MCP 等三方 MCP 在 Qwen Code 中不可用，与 Claude Code 形成对比，社区希望打通 MCP 兼容性。 |
| **长会话 / 大生成断流** | 上千行代码生成在 YOLO 模式直接 `UND_ERR_SOCKET`；>150k token 后频繁 `ECONNRESET`——急需断点续传与连接复用。 |
| **错误可观测性差** | 永久配额耗尽 429 被静默重试、Skill 内容永久占用上下文——用户拿不到清晰告警与控制权。 |
| **子代理可交互性** | 子代理发起问题后挂死；社区争论"应禁止提问 vs 应有透传机制"。 |
| **CI E2E 抖动** | 短期内出现 10+ 条 main 分支 E2E 失败工单，普遍已 `autofix/skip`，但增加开发者信任成本。 |
| **成本/统计显示** | `$0` 显示为 `N/A`，开发者更倾向看到真实数字（含四舍五入与单位对齐问题，见 #7871）。 |
| **Triage / 自动化维护** | Fleet Shepherd 自动派单 + 基于 revert 历史的 PR 风险识别（#7414）正在替代人工初筛流程。 |

---

📅 *报告基于 2026-07-27 ~ 2026-07-28 24 小时窗口数据生成，引用链接均为 `QwenLM/qwen-code` 仓库公开 Issue/PR。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-07-28

> ⚠️ **数据来源说明**：日报标题仓库为 `Hmbown/DeepSeek-TUI`，但本次拉取的全部 Issue / PR 链接均指向 `Hmbown/CodeWhale`。请运营/编辑侧核实该数据接口是否存在仓库映射错配，避免误投。

---

## 1. 今日速览

今天最核心的信号是 **v0.9.2 发布候选（RC）的集成冲刺**：维护者 Hmbown 打开了 umbrella PR [#4911](https://github.com/Hmbown/CodeWhale/pull/4911)（当前领先 `main` 82 commits），并在同一窗口合入 14 个面向 RC 的 harvest PR，覆盖 billing / fleet / session / onboarding / visual / provider 等多个 lane。Issue 端，两个面向用户的命令 `/cost` 与 `/rc` 被新报告为"产品文案存在、运行时未实现"的关键缺口；同时社区对 Windows CRLF 兼容性、TUI 流式 markdown 的 O(N²) 重解析等长期痛点持续施压。

---

## 2. 版本发布

过去 24 小时**无新 Release**。`v0.9.2` 候选分支 `codex/v092-integration-direct-main` 正在集成中，建议关注 [#4911](https://github.com/Hmbown/CodeWhale/pull/4911) 的收敛进度与 umbrella 拆分出的子 PR 合并节奏。

---

## 3. 社区热点 Issues（精选 10）

| # | 状态 | 标题 | 重要性 |
|---|------|------|--------|
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | ✅ CLOSED | **Environment-level tool sandboxing for sub-agents**（20 评论） | 24h 内热度最高的安全/sandbox 工单，覆盖 session、sub-agent、Fleet worker、MCP 全栈的 `--disallowed-tools` 强制执行；已落地。 |
| [#998](https://github.com/Hmbown/CodeWhale/issues/998) | 🟢 OPEN | **文案展示不全**（10 评论 👍1） | 唯一带 👍 的开放 Issue，TUI 文本溢出/缺少 tooltip，长尾用户痛点。 |
| [#4526](https://github.com/Hmbown/CodeWhale/issues/4526) | ✅ CLOSED | **StepFun Plan / OpenCode Go 订阅端点补全** | provider 接入完整度的代表性反馈；v0.9.2 范围已被 [#4921](https://github.com/Hmbown/CodeWhale/pull/4921) 部分收割。 |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | 🟢 OPEN | **Dead-code sweep: 464 个 #[allow(dead_code)] 阻塞重构** | 影响编译器漂移检测，已被 [#4938](https://github.com/Hmbown/CodeWhale/pull/4938) 引入 CI 棘轮机制，主体推 v0.9.3。 |
| [#4797](https://github.com/Hmbown/CodeWhale/issues/4797) | ✅ CLOSED | **/cost 双计费体系、缓存写入未计价** | 计费真源重构的源头 Issue；接续工作见今日新开 [#4939](https://github.com/Hmbown/CodeWhale/issues/4939)。 |
| [#3897](https://github.com/Hmbown/CodeWhale/issues/3897) | ✅ CLOSED | **TUI 流式 O(N²) markdown 重解析**（性能） | 长消息观感卡顿的根因之一，已修复。 |
| [#2342](https://github.com/Hmbown/CodeWhale/issues/2342) | 🟢 OPEN | **输出文件支持点击预览**（4 评论） | TUI → 文件系统的桥接，UX 高价值需求。 |
| [#4764](https://github.com/Hmbown/CodeWhale/issues/4764) | 🟢 OPEN | **edit_file 在 Windows CRLF 上精确匹配失败** | 跨平台工具正确性代表问题。 |
| [#4936](https://github.com/Hmbown/CodeWhale/issues/4936) | 🟢 OPEN | **/rc 命令产品文案存在但运行时缺失** | "文档先于实现"的典型链路脱节。 |
| [#4939](https://github.com/Hmbown/CodeWhale/issues/4939) | 🟢 OPEN | **/cost 按路由/token 类别分解，CNY 推导替代累加** | 今日新开，#4797 的延续，承载计费透明度下一阶段。 |

---

## 4. 重要 PR 进展（精选 10）

| # | 状态 | 标题 | 要点 |
|---|------|------|------|
| [#4911](https://github.com/Hmbown/CodeWhale/pull/4911) | ✅ CLOSED | **v0.9.2 RC 集成 umbrella（draft）** | 整个版本的中枢集成分支；后续 harvest PR 将针对此分支做窄幅评审。 |
| [#4927](https://github.com/Hmbown/CodeWhale/pull/4927) | ✅ CLOSED | **fix(billing) — dispatch-receipt 分类、Moonshot/MiniMax 产品真相、诚实上限、路由作用域环境变量** | 一次性收割 8 个独立 cluster，是计费真源 lane 的关键 PR。 |
| [#4924](https://github.com/Hmbown/CodeWhale/pull/4924) | ✅ CLOSED | **Fleet 持久化 + reasoning Router（两阶段准入、验证上限、内容无关收据）** | Fleet lane 重写首次通过评审，反映多代理系统逐步成型。 |
| [#4923](https://github.com/Hmbown/CodeWhale/pull/4923) | ✅ CLOSED | **TUI 视觉切片（对比度、选择词汇、焦点纹理、sound、水母）** | 5 个评审切片合并，含 `docs/ACCESSIBILITY.md` 与主题 token 提升。 |
| [#4922](https://github.com/Hmbown/CodeWhale/pull/4922) | ✅ CLOSED | **session 持久化 rail + opt-in auto-resume + dashboard peek** | session 控制 lane 整体落地。 |
| [#4926](https://github.com/Hmbown/CodeWhale/pull/4926) | ✅ CLOSED | **onboarding 重构（远程模式矩阵、离线探索、外观步骤、贡献者技能）** | 4 个旧 Issue 的合并收割。 |
| [#4921](https://

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*