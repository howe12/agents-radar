# AI CLI 工具社区动态日报 2026-07-18

> 生成时间: 2026-07-18 01:53 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告
**数据日期：2026-07-18 ｜ 覆盖工具：8 款主流 AI CLI**

---

## 一、生态全景

2026 年中，AI CLI 工具已进入**"功能扩张期"向"工程收敛期"过渡**的关键阶段：本周最显著的信号是 Anthropic、OpenAI、Google 三家头部产品同时强化**权限系统与安全加固**（Claude Code 修复 Win PS5.1 权限绕过、Gemini 修复 `$VAR` 变量扩展 CVE、OpenAI Codex 强化 hook 转义）。行业整体呈现出两条并行主线——**旗舰工具深耕企业级场景**（多 Provider 路由、OAuth、Docker 灰度）与**新兴工具依托差异化策略突围**（OpenCode 强调"可编排基础设施"、DeepSeek TUI 押注 Termux/ARM 移动端）。与此同时，**Subagent/Agent 自治边界的失控**成为跨产品共性焦虑，反映出在模型能力快速迭代的过程中，"可预测、可约束、可问责"已取代"更强智能"成为下一阶段的核心竞争点。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | 今日活跃 Issues | Issues 热度峰值（👍） | PR 活跃度 | 所处阶段 |
|------|-------------|----------------|---------------------|-----------|----------|
| **Claude Code** | ✅ v2.1.214（安全补丁） | 50+ | 56 👍（#40043）| 10 项 PR（多为安全/防递归） | 旗舰成熟期，热点集中于权限修补 |
| **OpenAI Codex** | ✅ rust-v0.145.0-α.20/.22/.23 三连发 | 热点 10+，Windows 故障密集 | 56 👍（#28161 用量额度）| 10 项 PR（含音频输入等重磅能力）| 密集迭代，桌面端稳定性是首要痛点 |
| **Gemini CLI** | ✅ v0.52.0-nightly | P1+P2 多线推进 | 8 👍（#21409）| 15+ 项 PR（含 5 项 SSR 自动化基建）| 安全收口 + 自治流水线启动 |
| **GitHub Copilot CLI** | ✅ v1.0.72-1 | 10+ | 14 👍（#1826）、23 👍（#28919）| 24h 无 PR | 插件生态补齐阶段 |
| **Kimi Code CLI** | ❌ 无 | 仅 3 条 | 13 评论（#1925）| 1 项 PR | 社区反馈偏弱，依赖 Moonshot 自身节奏 |
| **OpenCode** | ❌ 无 | 10+ | **182 👍**（#6231，跨工具最高）| 10 项 PR（含 Epic #36441 事件流改造）| **跨端/多 Provider 需求最强烈**，v2 架构改造期 |
| **Pi** | ❌ 无 | 50（24h 更新）| 较低但闭环率高 | 10 项 PR（多数 CLOSED） | 性能打磨与扩展 API 补齐阶段 |
| **Qwen Code** | ✅ v0.19.11-nightly | 10+ | 29 评论（#6378，架构级 RFC）| 10 项 PR（Fleet Shepherd 等自动化）| Daemon 多租户架构演进关键期 |
| **DeepSeek TUI** | ❌ 备战 v0.9.1 | 10+，3 项新增 | 35 评论（#4032）| 10+ 项 PR（含 release-blocker 集群）| v0.9.1 清理冲刺，Windows/Termux 双线作战 |

**关键观察**：
- 单日发行最活跃：**OpenAI Codex**（3 个 alpha）+ **Gemini CLI**（nightly + 多 PR 落地）
- 社区单一议题最热：**OpenCode #6231**（182 👍，遥遥领先）
- 架构讨论最深入：**Qwen Code #6378**（29 评论，daemon 多 workspace RFC）+ **Gemini 自治流水线**（5 项 XL 级 PR）
- 当日闭环率最高：**Pi**（多数 PR 同日 CLOSED）

---

## 三、共同关注的功能方向

下表汇总了**至少 3 个工具共同关注**的需求方向：

### 3.1 权限与安全加固 🔥🔥🔥（横跨 5+ 工具）

| 诉求 | 涉及工具 |
|------|----------|
| **破坏性命令的权限分类器误判** | Copilot #4156（`git branch -D` 不触发权限） |
| **Shell 变量扩展与转义绕过** | Claude Code #78715 hookify、Gemini #28403（`$VAR` 绕过 CVE）、Codex #33926 |
| **TOCTOU / 文件竞争** | Gemini #28330（IDE 鉴权 token 原子化） |
| **Subagent 递归调用/无限循环** | Claude Code（#78371 ralph-wiggum、#77427 leaf agent）、Gemini #28429（ReAct 15 轮限制） |
| **会话/进程资源清理** | Copilot #4163（僵尸进程）、DeepSeek TUI #4489（Hook 泄漏） |
| **端到端安全审计与 Eval** | Gemini #24353（76 个 behavioral eval）、Qwen Fleet Shepherd |

> **共同诉求**：从"功能可用"转向"行为可控"，权限系统的"语义理解"（而非关键词匹配）正在成为分水岭。

### 3.2 Windows 平台稳定性 🔥🔥🔥（横跨 6+ 工具）

| 平台 | 代表性问题 |
|------|----------|
| Claude Code | v2.1.214 紧急修补 PS 5.1 权限绕过；#50674 ARM64 Snapdragon X 长期不可用 |
| Codex | #33780 HID 阻塞启动卡死、#33438 0xC06D007F 异常 |
| Copilot | #4151 plugin install 100% 失败、`--resume` 冷启动挂起 |
| Gemini | #21983 Browser subagent Wayland 故障 |
| Qwen Code | #6992 Windows MCP 链式调用静默失败 + 权限 UI 卡死 |
| DeepSeek TUI | #4489 Hook 进程泄漏 + #4100 `0x7FFFFFFF` 灾难退出 |

> **共同诉求**：Windows 已是付费用户主力平台，但其体验短板**从"功能缺失"升级为"回归性故障"**，灰度发布与平台分级 CI 成为共识。

### 3.3 Subagent/Agent 行为治理 🔥🔥

- **状态机失真**：Gemini #22323（MAX_TURNS 仍报 GOAL success）、Claude Code（多次出现递归子代理）
- **挂起/死循环**：Gemini #21409（简单任务 hang 1 小时）、OpenCode #33028（subagent 挂起）
- **过度自治**：DeepSeek TUI #4032、#3275（拒绝遵守宪法约束，擅自生成临时脚本）
- **可观测性**：Copilot #4158（队列状态）、DeepSeek TUI #4405（Auto 路由 receipt）

> 几乎所有工具都在尝试用 **turn 上限 + receipts + 回路检测** 三件套解决，但当前实现仍碎片化。

### 3.4 多 Provider / 模型路由 🔥🔥

- **自动发现**：OpenCode #6231（182 👍，跨工具最受关注的 feature request）
- **企业 OAuth**：Claude Code #26675（Azure AD/Entra ID 兼容，31 👍）
- **BYOK 头注入**：Copilot #3399（8 👍，自托管网关刚需）
- **按 Agent 路由**：Claude Code #38698（40 👍）
- **模型版本切换**：Kimi #1925（13 评论，要求 K2.5 回退）
- **Thinking Level 补齐**：Pi #6786 / #6770（Kimi K3 全档推理）

### 3.5 TUI / 终端体验细节 🔥

- 渲染一致性（Copilot #4116、DeepSeek #4479、Claude Code #75899）
- 键位/快捷键冲突（Pi #3790 反向快捷键、Qwen #6776 Ctrl+C 退出乱码）
- CJK/Markdown 兼容性（Kimi #2379、Qwen #6809 diff 乱码）

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | "企业级+安全优先"的旗舰 CLI | 付费 Pro/团队 + 安全敏感企业 | 单一模型/Anthropic 深度集成；插件 + Hook 体系完备；Cowork 探索多端协同 |
| **OpenAI Codex** | "OpenAI 完整生态的多端入口" | ChatGPT Pro/Plus 重度用户、跨端协同需求者 | 音频/视觉/桌面/移动全形态覆盖；Responses API 一等公民；Compactions 服务端压缩 |
| **Gemini CLI** | "Google AI 能力的工程化外壳" | Google Cloud 用户、Agent 重度探索者 | Firestore + Cloud Run + Antigravity 自治流水线；**"Issue-to-PR"自动化闭环领先**；Seatbelt sandbox 对齐 |
| **Copilot CLI** | "GitHub 原生、与 IDE/Repo 共生" | 已订阅 Copilot 的 GitHub 用户 | 插件 marketplace；GitHub Actions/Issues/PR 深度耦合；权限 UI 走 IDE 路线 |
| **Kimi Code CLI** | "中文场景与长上下文专注" | 中文用户、长文档/金融数据场景 | 与 Moonshot AI 模型（K2/K3）强绑定；`kosong` 内部库外溢为开源贡献 |
| **OpenCode** | "可编排的 AI CLI 基础设施" | 多 Provider 偏好者、定制化需求企业、本地模型用户 | 提供 SDK 风格 API；事件流订阅模型（#36441 epic）；Model-as-Provider 角色面向 VSCode Copilot 等下游 |
| **Pi (earendil-works)** | "轻量、扩展优先的实验场" | 喜欢 hack 的开发者、模型路由研究者 | TUI 性能极致打磨；扩展 API 持续开放（Markdown 渲染 hook、freeform tool calls） |
| **Qwen Code** | "Daemon 化的生产级多租户" | 团队/企业级部署、Web/桌面协同 | `qwen serve` 演进为核心；Workspace 多租户架构；Fleet Shepherd 自动化工程 |
| **DeepSeek TUI** | "极致跨端覆盖+廉价 DeepSeek 模型" | 移动/边缘端开发者、价格敏感用户 | Termux/Android + Win ARM64 + OpenHarmony 多线突破；Kimi/xAI 多 Provider 接入 |

> **关键差异点**：旗舰三家（Claude、Codex、Gemini）已形成"能力-生态-安全"的相似维度竞争；OpenCode 与 Pi 在"可编排+扩展 API"上找到差异化路径；Qwen Code 与 DeepSeek TUI 则分别在"多租户架构"与"跨端覆盖"上建立鲜明标签。

---

## 五、社区热度与成熟度

### 热度分层

| 层级 | 工具 | 特征 |
|------|------|------|
| **超高热度** | Claude Code、OpenAI Codex | 每日 issue/PR 体量大，单议题能聚集 50-80 👍 与数十条讨论 |
| **高热度** | Gemini CLI、OpenCode、Qwen Code | 议题结构化（P1/P2 分级），PR 节奏快并出现"XL 级"集群 |
| **中等热度** | Copilot CLI、DeepSeek TUI | 10 个左右热点，issue 偏运行时细节 |
| **偏冷** | Kimi Code、Pi | 当日仅 1-3 条更新，但 PR 闭环率高、单 issue 评论深 |

### 成熟度信号

| 指标 | 解读 |
|------|------|
| **单版本 PR/Issue 比** | Claude Code ≈ 0.2（成熟期），Gemini ≈ 0.5+（高速迭代），DeepSeek TUI ≈ 1+（冲刺期） |
| **CLOSED 比例** | Pi 当日多数 PR 已 CLOSED（响应敏捷），旗舰三家"OPEN 为主"（仍待消解） |
| **架构级 RFC** | Qwen #6378（29 评论）、Gemini "Issue-to-PR"（5 项 PR）—— 这是进入下一阶段的明确信号 |
| **用户付费摩擦点** | Codex #28161（额度过期不显示，56 👍）、Claude Code #55982（支付失败）—— 商业化体验反推产品力 |

---

## 六、值得关注的趋势信号

### 趋势 1：权限系统从"关键词匹配"走向"语义理解"
**信号**：Copilot #4156（git branch -D 误放行）、Gemini #28403（变量扩展 CVE）、Claude Code 多项 hookify 算子补齐。  
**对开发者的参考**：在选型时，应将"权限分类器的可解释性与可审计性"列为关键评估项；构建自有 agent 时，**显式声明破坏性操作的预算上限**比依赖启发式拦截更可靠。

### 趋势 2："自治流水线"成为大型项目的标准工程实践
**信号**：Gemini 一次性提交 5 项 XL PR 构建 "Issue-to-PR" 自动化（Cloud Run + Firestore + Antigravity Agent）、Qwen 推出 Fleet Shepherd 每 15 分钟自动解阻 bot-PR。  
**对开发者的参考**：未来 12 个月，**"AI 维护者"作为新角色**可能出现；对中等规模项目，可借鉴"事件触发 + 双锁去重 + 失败隔离"的 SSR 模式。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-18 | 数据源：anthropics/skills**

> ⚠️ **数据说明**：本期 PR 列表的评论数字段（`评论: undefined`）未返回，无法按评论数严格排序 Top PR。下文"热门 Skills 排行"以 **跨议题关联度 + 议题解决影响力 + 功能价值** 为综合排序依据；Issues 排名则按真实评论数。

---

## 1. 热门 Skills 排行（Top 8 PR）

| 排名 | PR | Skill 名称 | 状态 | 核心价值 | 链接 |
|---|---|---|---|---|---|
| 🥇 1 | #1298 | **skill-creator 召回率修复** | 🟢 OPEN | 修复 `run_eval.py` 永远返回 `recall=0%` 的致命缺陷——直接关系到 #556（12 评论）、#1169（3 评论）、#1323 等多个高热议题，影响所有 skill 的 description 自动化优化闭环 | [→](https://github.com/anthropics/skills/pull/1298) |
| 🥈 2 | #514 | **document-typography** | 🟢 OPEN | AI 生成文档的版式质量控制（孤行/寡行/编号错位），覆盖全场景高频痛点 | [→](https://github.com/anthropics/skills/pull/514) |
| 🥉 3 | #486 | **ODT（OpenDocument）Skill** | 🟢 OPEN | 补齐 LibreOffice / ODF 开放文档格式的读写与模板填充能力，与 #538、#541 同属文档生态扩张 | [→](https://github.com/anthropics/skills/pull/486) |
| 4 | #1367 | **self-audit v1.3.0** | 🟢 OPEN | AI 输出交付前的自审计（机械验证 + 四维推理质量门），呼应 #1385 "Reasoning Quality Gate Pipeline" 提议 | [→](https://github.com/anthropics/skills/pull/1367) |
| 5 | #83 | **skill-quality-analyzer / skill-security-analyzer** | 🟢 OPEN | 元技能——评估其它 Skill 的质量与安全性，直接对应 #492 安全信任边界议题（34 评论，Top 1） | [→](https://github.com/anthropics/skills/pull/83) |
| 6 | #210 | **frontend-design 改进** | 🟢 OPEN | 提升前端设计 Skill 的可执行性与清晰度，单次会话内可落地 | [→](https://github.com/anthropics/skills/pull/210) |
| 7 | #1302 | **color-expert** | 🟢 OPEN | 涵盖 ISCC-NBS / Munsell / OKLCH 等色彩命名与色空间体系，垂直深度专家型 Skill | [→](https://github.com/anthropics/skills/pull/1302) |
| 8 | #723 | **testing-patterns** | 🟢 OPEN | Testing Trophy + 单元测试 + React 组件测试 + 质量门禁，开发者向高需求 | [→](https://github.com/anthropics/skills/pull/723) |

**讨论热点小结**：本期热度高度集中在 **"Skill 自身基础设施可靠性"**（#1298 召回率、#1050/#1099 Windows 兼容、#361/#362 UTF-8 & YAML 校验）以及 **"文档/设计类生产力 Skill 扩张"**（typography / ODT / frontend-design / color-expert）两条主线。

---

## 2. 社区需求趋势（Issues 提炼）

按真实评论数排序的 Top 议题揭示了以下 **四大需求方向**：

### 🔐 A. 安全与信任（最强烈呼声）
- **#492（34 评论，👍2）** — `anthropic/` 命名空间被滥用，社区 Skill 冒充官方 Skill，存在权限提升风险 → [→](https://github.com/anthropics/skills/issues/492)
- **#1175（4 评论，CLOSED）** — SharePoint 文档经由 Skill 处理时的权限与上下文窗口顾虑 → [→](https://github.com/anthropics/skills/issues/1175)

### 🏢 B. 企业级共享与平台化
- **#228（14 评论，👍7）** — Claude.ai 组织级 Skill 共享，目前需手动导出 .skill 文件 → [→](https://github.com/anthropics/skills/issues/228)
- **#29（4 评论）** — Skills 与 AWS Bedrock 集成的官方路径缺失 → [→](https://github.com/anthropics/skills/issues/29)
- **#189（6 评论，👍9）** — `document-skills` 与 `example-skills` 插件内容重复 → [→](https://github.com/anthropics/skills/issues/189)

### 🧠 C. 新兴 Skill 方向提案
- **#1329（9 评论）** — `compact-memory`：用符号化表示压缩 Agent 持久化状态 → [→](https://github.com/anthropics/skills/issues/1329)
- **#412（6 评论，CLOSED）** — `agent-governance`：AI Agent 系统的治理模式 → [→](https://github.com/anthropics/skills/issues/412)
- **#1385（3 评论）** — Reasoning Quality Gate Pipeline：前置校准 → 对抗评审 → 交付验证 三段式质量门 → [→](https://github.com/anthropics/skills/issues/1385)

### 🔌 D. 协议化与互操作
- **#16（4 评论）** — 将 Skills 暴露为 MCP，标准化对外 API → [→](https://github.com/anthropics/skills/issues/16)
- **#202（8 评论，CLOSED）** — skill-creator 自身需要按最佳实践重写 → [→](https://github.com/anthropics/skills/issues/202)

**趋势归纳**：文档/设计/办公生产力 Skill 是供给侧主流；需求侧则在向 **安全治理、企业分发、Agent 状态压缩、Skill-as-MCP 协议化** 四个方向快速迁移。

---

## 3. 高潜力待合并 Skills（Open & 高影响）

以下 PR 尚未合并，但已通过关联议题或议题量级证明落地价值：

| PR | Skill | 关联高评论议题 | 落地建议 |
|---|---|---|---|
| #1298 | skill-creator 召回率核心修复 | #556 (12)、#1169 (3)、#1323 | 🚨 **最高优先级**，阻塞整条 description 自优化闭环 |
| #1367 | self-audit v1.3.0 | #1385 (3) | 与质量门控生态强协同 |
| #83 | skill-quality/security-analyzer | #492 (34) | 回应命名空间信任危机 |
| #514 | document-typography | — | 通用高频痛点，零争议 |
| #486 | ODT | — | 文档格式生态拼图 |
| #1302 | color-expert | — | 垂直专家型，差异化价值 |
| #723 | testing-patterns | — | 开发者侧高频需求 |
| #538 / #541 / #361 / #362 / #539 | 各类稳定性和正确性修复 | — | 批量合并的低风险补丁 |

完整链接：
- [#1298](https://github.com/anthropics/skills/pull/1298) · [#1367](https://github.com/anthropics/skills/pull/1367) · [#83](https://github.com/anthropics/skills/pull/83) · [#514](https://github.com/anthropics/skills/pull/514) · [#486](https://github.com/anthropics/skills/pull/486) · [#1302](https://github.com/anthropics/skills/pull/1302) · [#723](https://github.com/anthropics/skills/pull/723) · [#538](https://github.com/anthropics/skills/pull/538) · [#541](https://github.com/anthropics/skills/pull/541) · [#361](https://github.com/anthropics/skills/pull/361) · [#362](https://github.com/anthropics/skills/pull/362) · [#539](https://github.com/anthropics/skills/pull/539)

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是：把 Skills 从"个人/单机的能力外挂"升级为"可治理、可共享、可信、可被协议化调用"的 Agent 原生基础设施——其中以官方命名空间安全（#492）和 skill-creator 评测闭环可靠性（#1298/#556）为最紧迫的两条主线。**

---

# Claude Code 社区动态日报

**日期**：2026-07-18
**数据源**：github.com/anthropics/claude-code

---

## 一、今日速览

今日社区重点集中在 **Cowork 平台兼容性与权限/安全修复**：v2.1.214 版本修复了 Windows PowerShell 5.1 的权限绕过漏洞以及 `dir/**` 通配规则越权问题；同时，长期未解决的 ARM64（Snapdragon X）与 Windows 11 上 Cowork 不可用问题持续收到大量用户反馈，凸显跨平台支持的紧迫性。

---

## 二、版本发布

### v2.1.214（今日发布）

| 类别 | 修复内容 |
|------|---------|
| 权限规则 | 修复单段 `dir/**` 形式的 allow 规则（如 `Edit(src/**)`）错误地对树中任意位置的嵌套 `dir/` 目录生效——仅应作用于 `<cwd>/dir` |
| 安全 | 修复 Windows PowerShell 5.1 会话中命令执行的权限检查绕过漏洞 |
| Bash | Bash 权限相关修复（变更日志截断） |

> 该版本为安全补丁版本，强烈建议所有 Windows 用户升级。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 热度 | 关键信息 |
|---|-------|------|---------|
| 1 | [#55982](https://github.com/anthropics/claude-code/issues/55982) 套餐升级支付失败 | 💬 76 / 👍 25 | `PaymentIntent` 被 `void_invoice` 在 confirm 前撤销；标记为 invalid，但社区讨论热度最高 |
| 2 | [#50674](https://github.com/anthropics/claude-code/issues/50674) Cowork 在 ARM64 (Snapdragon X) 上失败 | 💬 40 / 👍 1 | 通过就绪检查但仍无法运行，ARM 设备用户关注度高 |
| 3 | [#47327](https://github.com/anthropics/claude-code/issues/47327) Windows 11 Pro x64 Cowork tab 禁用 | 💬 21 / 👍 3 | 自 2026 年 3 月起 yukonSilver 显示"unsupported"，长期未解决 |
| 4 | [#40043](https://github.com/anthropics/claude-code/issues/40043) Cowork 项目支持移除本地文件夹 | 💬 19 / 👍 **56** | 👍 数为今日最高，社区对 Cowork 上下文管理诉求强烈 |
| 5 | [#26675](https://github.com/anthropics/claude-code/issues/26675) 支持预配置 OAuth 客户端凭证（免 DCR） | 💬 17 / 👍 31 | 企业用户痛点：Azure AD / Entra ID 与现有 OAuth 不兼容 |
| 6 | [#66020](https://github.com/anthropics/claude-code/issues/66020) macOS 26.5.1 内核区内存泄漏 | 💬 16 / 👍 2 | `data.kalloc.1024` 泄漏速率随 agent 负载从 21→1027/秒，claude.exe 在 ~20GB 时 panic |
| 7 | [#38698](https://github.com/anthropics/claude-code/issues/38698) 按 agent 路由模型提供商 | 💬 10 / 👍 **40** | 允许子 agent 用本地 Ollama、orchestrator 用 Anthropic，热门 feature request |
| 8 | [#66504](https://github.com/anthropics/claude-code/issues/66504) commit / PR 默认追加 Session URL 改为 opt-in | 💬 8 / 👍 33 | 隐私与可审计性问题，社区希望默认关闭 |
| 9 | [#75899](https://github.com/anthropics/claude-code/issues/75899) 左方向键误跳转 agents 视图 | 💬 7 / 👍 9 | TUI 键位无法重新绑定，返回主会话时易破坏视图 |
| 10 | [#77327](https://github.com/anthropics/claude-code/issues/77327) 非交互 system prompt 被注入到交互会话 | 💬 7 / 👍 1 | 影响 VSCode 扩展行为，可能污染交互式上下文 |

**社区反应总结**：支付类问题虽被标记 invalid 仍持续发酵；Cowork 跨平台兼容性、Windows 权限绕过、企业 OAuth 集成构成三大最迫切需求。

---

## 四、重要 PR 进展（Top 10）

| PR | 状态 | 内容摘要 |
|----|------|---------|
| [#78715](https://github.com/anthropics/claude-code/pull/78715) hookify 新增 `regex_not_match` / `not_regex_match` 算子 | 🟢 OPEN | 补齐 hookify 规则引擎的反向匹配能力，避免 unknown-operator 分支误命中 |
| [#78532](https://github.com/anthropics/claude-code/pull/78532) GCP gateway Terraform 修复 | 🟢 OPEN | 修复 PG16 默认 ENTERPRISE_PLUS 拒绝 shared-core 层的初始化失败；新增可选 internal ALB |
| [#76581](https://github.com/anthropics/claude-code/pull/76581) 插件脚本安全加固 | 🟢 OPEN | 防御 YAML frontmatter breakout、路径穿越与 symlink 凭据覆写（涉及 `ralph-wiggum` 等） |
| [#78446](https://github.com/anthropics/claude-code/pull/78446) 补齐 `plugin-dev` 的 manifest 文件 | 🟢 OPEN | `plugins/plugin-dev/` 是仓库内唯一缺失 `.claude-plugin/plugin.json` 的插件 |
| [#78445](https://github.com/anthropics/claude-code/pull/78445) 修正插件文档与实际行为不一致 | 🟢 OPEN | 修正 `security-guidance` 钩子事件类型与模式数量等三处矛盾 |
| [#78441](https://github.com/anthropics/claude-code/pull/78441) devcontainer 脚本检测原生命令失败 | 🟢 OPEN | PowerShell 非终止错误导致 try/catch 失效，改用 `$LASTEXITCODE` 判断 |
| [#78425](https://github.com/anthropics/claude-code/pull/78425) code-review 改为手动调用 | 🟢 OPEN | 加 `disable-model-invocation: true`，防止模型/子 agent 程序化重入多 agent 审查流程 |
| [#77427](https://github.com/anthropics/claude-code/pull/77427) pr-review-toolkit code-reviewer 设为 leaf agent | 🟢 OPEN | 限制其只能使用仓库检查工具，阻止递归调用其他 agent/workflow |
| [#78371](https://github.com/anthropics/claude-code/pull/78371) ralph-wiggum 安全加固 | 🟢 OPEN | 限制迭代次数、加入 push/publish 守卫与 stop-hook 修复，防止无人值守时推送半成品 |
| [#29460](https://github.com/anthropics/claude-code/pull/29460) 改进 oncall triage 候选筛选 | ⚫ CLOSED | 解决 `gh issue list` 默认排序与 oncall triage 假设不一致的问题 |

**整体观察**：今日 PR 主题集中在 **插件安全加固**（YAML、symlink、无限循环）与 **code-review 工作流收敛**（防止递归调用），反映出对 agent 自主行为边界控制的需求显著上升。

---

## 五、功能需求趋势

从近 24 小时更新的 50 个 Issue 中提炼：

| 方向 | 代表 Issue | 社区诉求 |
|------|------------|---------|
| **IDE 集成增强** | [#65858](https://github.com/anthropics/claude-code/issues/65858)、[#72601](https://github.com/anthropics/claude-code/issues/72601)、[#72005](https://github.com/anthropics/claude-code/issues/72005) | VSCode 扩展补齐 Ctrl+F 会话内搜索、修复自动补全 Enter 误提交、搜索结果跳转定位 |
| **Cowork 体验完善** | [#40043](https://github.com/anthropics/claude-code/issues/40043)、[#50674](https://github.com/anthropics/claude-code/issues/50674)、[#47327](https://github.com/anthropics/claude-code/issues/47327) | 上下文管理（移除文件夹）、ARM64/Windows 兼容、tab 启用 |
| **多 Provider / 多 Agent 路由** | [#38698](https://github.com/anthropics/claude-code/issues/38698)、[#26675](https://github.com/anthropics/claude-code/issues/26675) | 按 agent 分配 provider、企业 OAuth 无 DCR 接入 |
| **权限与安全** | [#74949](https://github.com/anthropics/claude-code/issues/74949)、[#77599](https://github.com/anthropics/claude-code/issues/77599) | auto-mode 分类器降级、子 agent 会话隔离 |
| **性能与内存** | [#66020](https://github.com/anthropics/claude-code/issues/66020)、[#67021](https://github.com/anthropics/claude-code/issues/67021)、[#78700](https://github.com/anthropics/claude-code/issues/78700) | macOS 内核泄漏、内嵌 ugrep OOM、复合命令内存膨胀 |
| **Skills / Plugins 可控性** | [#76156](https://github.com/anthropics/claude-code/issues/76156)、[#77294](https://github.com/anthropics/claude-code/issues/77294) | plugin 提供的 skill 支持 override、旧版本自动清理 |
| **TUI / UX 微调** | [#75899](https://github.com/anthropics/claude-code/issues/75899)、[#78110](https://github.com/anthropics/claude-code/issues/78110)、[#66504](https://github.com/anthropics/claude-code/issues/66504) | 键位可重绑、自动补全行为、commit 默认行为 |

---

## 六、开发者关注点

1. **跨平台可用性是首要痛点**：Cowork 在 ARM64 与 Windows 11 上的长期不可用已引发大量重复 issue，开发者希望官方提供明确的平台支持矩阵与解决时间表。

2. **agent 自治边界亟需明确**：今日 PR 集群（`code-review`、`pr-review-toolkit`、`ralph-wiggum`）共同指向同一问题——防止 agent/插件失控地递归调用、无限循环或自动推送，社区希望默认采取"最小权限"姿态。

3. **权限系统的稳定性比新功能更受关注**：Windows PowerShell 权限绕过（v2.1.214 修复）、auto-mode 分类器 fail-closed、`skillOverrides` 被静默忽略等案例说明，权限/安全相关 issue 的优先级正在上升。

4. **企业集成场景被低估**：OAuth DCR 与 Azure AD 的兼容性问题已存在近 5 个月仍未合并，叠加按 agent 路由 provider 的需求（👍 40），表明企业级部署正在成为下一个增长点。

5. **性能/内存问题存在系统性风险**：macOS 内核泄漏、内嵌 ugrep OOM 等问题一旦在高负载 agent 会话中触发，影响面巨大，开发者呼吁将性能回归测试纳入发布门槛。

---

*报告基于 GitHub 公开数据整理，仅反映社区讨论热度与方向，不构成官方表态。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-18**

---

## 📌 今日速览

今日 Codex 项目进入密集迭代期，Rust 核心组件在 24 小时内连续发布 **3 个 alpha 版本**（v0.145.0-alpha.20/.22/.23），聚焦音频输入、线程分页、反向搜索与实时路由等底层能力。同时，**Windows 桌面端的稳定性问题集中爆发**——多次更新后出现启动卡死、进程崩溃、WMI Provider Host CPU 占用飙升等严重问题，相关 Issue 占据今日热点榜单半壁江山。

---

## 🚀 版本发布

| 版本 | 说明 |
|------|------|
| [rust-v0.145.0-alpha.23](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.23) | 最新 alpha 迭代 |
| [rust-v0.145.0-alpha.22](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.22) | 持续稳定性改进 |
| [rust-v0.145.0-alpha.20](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.20) | 早期迭代版本 |

> 💡 三个 alpha 版本快速发布，反映团队正以高节奏打磨 0.145 正式版的各项能力。

---

## 🔥 社区热点 Issues

### 1. [#33780](https://github.com/openai/codex/issues/33780) — Windows 桌面端启动卡死（HID 设备枚举阻塞）
启动后主进程在 HID 设备枚举中永久阻塞，导致应用无响应。**评论数：19**。当前问题版本为 26.715.2305.0，影响 ChatGPT Pro + Windows 11 用户。

### 2. [#28919](https://github.com/openai/codex/issues/28919) — Windows 设置中缺失「控制其他设备」标签
影响远程控制 Codex CLI 的核心入口。**👍23 个赞同**，社区持续追踪 1 个月未解。

### 3. [#27915](https://github.com/openai/codex/issues/27915) — Linux 用户无法访问 banked usage resets
新额度重置机制仅在 Desktop App 可用，**Linux 用户被排除**。已 CLOSED（社区侧），**👍41 个赞同**——本批 Issue 中热度最高。

### 4. [#22773](https://github.com/openai/codex/issues/22773) — iOS/macOS Remote Control 桌面更新后失效
主机在线但移动端显示 403/offline/过期 Plan 状态，跨端协同断链。

### 5. [#26633](https://github.com/openai/codex/issues/26633) — Desktop 自动化忽略 RRULE 时区
界面显示本地时间，但下次执行按 UTC 计算，多时区用户频繁踩坑。

### 6. [#20851](https://github.com/openai/codex/issues/20851) — Computer Use 缺乏 CLI 一等公民支持
当前只能作为 Desktop 插件使用，社区希望 CLI 直接支持。**👍16 个赞同**。

### 7. [#33438](https://github.com/openai/codex/issues/33438) — Windows 频繁触发 0xC06D007F 异常
打开新任务时出现 2-3 秒输入延迟，疑似与硬件驱动兼容性相关。

### 8. [#28161](https://github.com/openai/codex/issues/28161) — 使用额度重置缺少过期时间显示
**👍56 个赞同**，本批 Issue 中赞同数最高，反映用户对额度透明度的高需求。

### 9. [#33171](https://github.com/openai/codex/issues/33171) — Remote-compaction 容量错误导致持续任务被终止
单个失败导致整个 `/goal` 任务终止，而其他任务仍正常——错误传播机制存疑。

### 10. [#33050](https://github.com/openai/codex/issues/33050) — image_gen 同提示词结果耗时差异巨大
相同 byte-identical 提示词耗时从 26 秒到 265 秒不等，存在隐性超时或重试逻辑。

---

## 🛠️ 重要 PR 进展

### 1. [#33932](https://github.com/openai/codex/pull/33932) — Forward audio inputs to Responses API 🔊
将音频数据 URL 序列化为 `input_audio` 内容，支持本地 wav/mp3 上传，**填补了 Responses API 音频输入的空白**。

### 2. [#33930](https://github.com/openai/codex/pull/33930) — Track inherited paginated rollout prefixes
引入 `HistoryPosition` 与 `history_base` 元数据，支持线程继承其他线程的分页前缀。

### 3. [#33926](https://github.com/openai/codex/pull/33926) — Fix quoted hook commands on Windows 🪟
修复 Windows 下路径含空格的 hook 命令在外层引号转义时的解析失败问题。

### 4. [#33925](https://github.com/openai/codex/pull/33925) — Render inline visualization links in the TUI
识别 `::codex-inline-vis{}` 指令并在终端渲染为可点击的浏览器链接。

### 5. [#33907](https://github.com/openai/codex/pull/33907) — Add occurrence search for paginated threads 🔍
新增实验性 `thread/searchOccurrences` 方法，**无需重放线程即可跨消息做大小写不敏感的字面量搜索**。

### 6. [#33906](https://github.com/openai/codex/pull/33906) — Launch managed network proxies on remote executors
为远程执行器添加代理监听能力，使 loopback 代理对被启动进程可达。

### 7. [#33905](https://github.com/openai/codex/pull/33905) — Batch persistent history reads during reverse search
反向搜索时改为批量拉取历史，**显著降低深度搜索的延迟**。

### 8. [#33903](https://github.com/openai/codex/pull/33903) — Route realtime V3 handoffs by response channel
为 V3 实时会话添加 `codexResponseHandoffMode`，支持 thinking/commentary/bemTags 三种路由模式。

### 9. [#33901](https://github.com/openai/codex/pull/33901) — Support ChatGPT-branded Desktop app builds
桌面端支持 Codex/ChatGPT 双品牌构建，CLI 发现与 TUI 移交不再依赖单一显示名。

### 10. [#33895](https://github.com/openai/codex/pull/33895) — Add SessionEnd hooks for thread teardown
新增 `SessionEnd` 钩子事件，覆盖 app-server 归档、删除、空闲卸载、优雅关停全流程。

---

## 📈 功能需求趋势

从 Issue 标签与讨论密度提炼，社区最关注的方向包括：

| 方向 | 代表 Issue | 趋势说明 |
|------|-----------|---------|
| **🪟 Windows 稳定性** | #33780、#33438、#33873、#33909、#33119、#33711、#33776 | 7+ 条相关 Issue，涉及启动崩溃、WMI 风暴、Defender 占用 |
| **🌐 跨端协同（Remote）** | #28919、#22773、#26846、#27597 | Desktop ↔ Mobile ↔ Remote-SSH 链路多处断裂 |
| **💰 额度与计费透明度** | #27915、#28161、#32791、#32707 | 用户强烈要求看清 5h/weekly bucket 与重置到期时间 |
| **🎙️ 多模态输入** | #20851（Computer Use CLI）、音频系列 PR | Computer Use 与音频能力向 CLI 一等公民推进 |
| **🧮 TUI 增强** | #18906（LaTeX 渲染）、#33925（可视化链接） | 终端体验持续完善，向 IDE 级渲染靠拢 |
| **⏰ 自动化调度** | #26633（时区） | RRULE 调度语义需严格遵循用户本地时间 |

---

## 💡 开发者关注点

通过 Issues 与 PR 综合分析，开发者社区当前的**核心痛点**集中在以下三点：

1. **Windows 桌面端的「更新即崩溃」体验**
   从 26.707 系列到 26.715 系列，连续多个版本引入启动失败、任务卡死、进程泄漏等问题。多个 Issue 描述 WMI Provider Host、`taskkill.exe`、`conhost.exe` 异常拉起，**严重影响 Pro/Plus 付费用户信心**。建议团队在 Windows 发布通道引入灰度机制。

2. **跨平台能力不对等**
   Linux 用户无法使用 banked resets，Remote-SSH 下 IDE 扩展无法加载，macOS/Windows 远程控制互相失效——**生态覆盖广但深度不足**，需建立跨平台一致性基线。

3. **额度与状态的可见性**
   多条高赞同 Issue 都指向「用户不知道还剩多少/何时重置」。从产品视角，**展示「下次重置时间」与「过期时间」是低成本高收益**的改进。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 统计窗口：2026-07-17 ~ 2026-07-18*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-07-18
**项目**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 发布 v0.52.0 nightly 版本，核心推进了三件事：**安全加固**（修复 $VAR 变量扩展绕过漏洞 GHSA-wpqr-6v78-jr5g、ReAct 无限循环 DoS 防护、IDE 鉴权文件 TOCTOU 窗口）、**macOS 安全沙箱对齐**（Seatbelt profiles 改为 deny-default 模型）、以及正式启动 **"Issue-to-PR" 自动化 SSR 流水线**（基于 Firestore + Cloud Run + Antigravity Agent 的迭代 Bug 修复系统）。

---

## 🚀 版本发布

### v0.52.0-nightly.20260718.gacae7124b

主要变更：

- **feat(caretaker-triage)**：实现 LLM triage 协调器与 Cloud Run Job 容器构建（[#28345](https://github.com/google-gemini/gemini-cli/pull/28345)，@chadd28）
- **refactor(cli)**：将 macOS Seatbelt 的 permissive 配置对齐到 deny-default 模型（[#28424](https://github.com/google-gemini/gemini-cli/pull/28424)，@ompatel-aiml）

---

## 🔥 社区热点 Issues

### P1 级高优先级问题

| # | Issue | 评论 | 👍 | 核心问题 |
|---|---|---|---|---|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后仍报告 GOAL success，掩盖中断 | 11 | 2 | **状态机逻辑缺陷**，`codebase_investigator` 触发最大轮次限制但仍上报 success，丢失真实的中断信号 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁 hang 死 | 7 | **8** | **点赞最高的 P1**，简单任务（如建文件夹）即可触发长时间 hang，需明确指示模型不用 subagent 才能绕过 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在 "Waiting input" | 4 | 3 | **核心 Shell 缺陷**，简单命令也触发，影响交互体验 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估体系建设 | 7 | 0 | 跟进 #15300，已积累 76 个 behavioral eval，覆盖 6 个 Gemini 模型 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | 4 | 1 | Linux 桌面环境兼容性问题 |
| [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) | get-shit-done 输出 hook 引发崩溃 | 3 | 0 | 用户输出链路的不稳定 bug |

### P2 级功能/改进

- **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 利用 Gemini 3 模型原生 bash 亲和力，提出"零依赖 OS 沙箱 + 后置意图路由"（8 评论）— **战略性提案**，目标是在不牺牲安全性的前提下释放模型原生工具调用能力
- **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST-aware 文件读取/搜索/映射的价值（7 评论）— **性能优化方向**，可显著降低误读带来的 token 噪声
- **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 几乎不主动调用自定义 skills/sub-agents（6 评论）— **可用性痛点**，模型对工具调用的"惰性"问题
- **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** — Agent 应阻止/劝阻破坏性命令如 `git reset --force`（3 评论）— **安全伦理方向**

---

## 🛠 重要 PR 进展

### 安全修复（本周 P1 重头戏）

- **[#28429](https://github.com/google-gemini/gemini-cli/pull/28429)** `CLOSED` — **修复无限 ReAct 循环 / Prompt Injection 循环 DoS**（@amelidev）。设定会话级默认 15 轮 turn 限制，引入简化的工具调用环路检测
- **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)** `CLOSED` — **限制单次用户请求的递归推理轮次为 15 轮**，可由 `maxSessionTurns` 自定义，保护本地 CPU 与 API 配额
- **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** `OPEN` — **修复 `$VAR`/`${VAR}` 变量扩展绕过漏洞**（GHSA-wpqr-6v78-jr5g），加固 `detectBashSubstitution()` 和 `detectPowerShellSubstitution()`
- **[#28346](https://github.com/google-gemini/gemini-cli/pull/28346)** `OPEN` — **修复可执行 hook 的信任对话框展示**（修复 #27901），确保不被扁平化非法条目欺骗
- **[#28330](https://github.com/google-gemini/gemini-cli/pull/28330)** `OPEN` — **IDE companion 鉴权 token 文件原子模式设置**，关闭 TOCTOU 时间窗口

### 平台与基础设施

- **[#28424](https://github.com/google-gemini/gemini-cli/pull/28424)** `CLOSED` — **macOS Seatbelt permissive profiles 对齐 deny-default**（@ompatel-aiml），与 restrictive-/strict- 配置一致
- **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319)** `OPEN` — **a2a-server 路径信任检查前置 + 任务环境隔离**，使用 `AsyncLocalStorage` 防止工作区 env 加载顺序绕过
- **[#28275](https://github.com/google-gemini/gemini-cli/pull/28275)** `CLOSED` — **将 GCP 直连 telemetry 导出器改为可选依赖**，核心包体积与依赖显著减少

### 新功能与体验改进

- **[#28240](https://github.com/google-gemini/gemini-cli/pull/28240)** `CLOSED` — **默认支持 `AGENTS.md` 上下文文件**，无需用户手动配置 `memoryTool`
- **[#28345](https://github.com/google-gemini/gemini-cli/pull/28345)** `CLOSED` — 实现 LLM triage 协调器与 Cloud Run Job 容器构建，结构化 GCS debug 日志

### "Issue-to-PR" 自动化 SSR 流水线（新项目 gcli-intern-project-2026）

@jonena-google 一口气提交了 5 个 XL 级 PR，搭建从 Issue 到 PR 的全自动生成系统：

- **[#28431](https://github.com/google-gemini/gemini-cli/pull/28431)** — Cloud Run Job / Eventarc / Dockerfile 基础设施
- **[#28432](https://github.com/google-gemini/gemini-cli/pull/28432)** — Firestore 并发双锁 + 测试数据接入
- **[#28433](https://github.com/google-gemini/gemini-cli/pull/28433)** — 迭代式 Bug 修复状态机 + 容器 worker 入口
- **[#28434](https://github.com/google-gemini/gemini-cli/pull/28434)** — Antigravity Agent 运行器 + 提示模板
- **[#28435](https://github.com/google-gemini/gemini-cli/pull/28435)** — 环境配置解析、命令执行、GitHub v3 REST 客户端、ANSI 输出过滤

> 这是 Gemini CLI 在 **"AI 自治开发闭环"** 上的重要一步，对未来 issue 处理节奏影响深远。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 个 Issue 中，可识别出社区的五大关注方向：

1. **Subagent 体系可靠性** 🔥🔥🔥
   占比最高（>40% area/agent issues），涉及：hang 死、错误状态报告、maxTurns 配置忽略、settings.json 覆盖失效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、symlink 不识别（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）、子代理上下文未包含在 `/bug` 报告中（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。

2. **Auto Memory 内存系统治理**
   SandyTao520 一人提交 4 个相关 bug（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)），集中在：低信号会话重试、patch 隔离/检疫、日志脱敏。**Auto Memory 正进入打磨期**。

3. **Browser Agent 弹性**
   多个 P2 issue 关注 lock 恢复、Wayland 兼容、settings.json 覆盖等问题。

4. **AST-aware 工具链探索**
   [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) + [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) + [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（>128/400 tools 触发 400 错误），社区正在推动从字符串级工具升级到语义级工具。

5. **Shell/终端 UX 优化**
   包括 hang 问题、终端 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、外部编辑器退出后 corruption（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）等"老牌痛点"。

---

## 💬 开发者关注点

汇总 Issue/PR 评论与摘要后，开发者社区的高频反馈集中于以下五类：

| 痛点 | 代表 Issue | 现象 |
|---|---|---|
| **Agent 频繁 hang 死** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | 简单任务可触发 1 小时以上 hang，模型默认委派 subagent 反而拖慢 |
| **Shell 退出状态混乱** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#22465](https://github.com/google-gemini/gemini-cli/issues/22465) | 命令已结束但 UI 仍显示 "Awaiting user input"；交互式 prompt 卡死 |
| **工具数量爆炸触发 400** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 启用 128+ 工具即触发服务端 400，缺乏工具范围智能收敛 |
| **模型"惰性"调用 skills/sub-agents** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | 即便已配置相关 skill，模型也不会主动用 |
| **临时脚本污染工作区** | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 排除式 shell 策略导致模型到处写临时脚本，清理成本高 |

与此同时，**对更高鲁棒性的需求**也在升温：
- 安全侧：变量扩展绕过（[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)）、TOCTOU（[#28330](https://github.com/google-gemini/gemini-cli/pull/28330)）、可执行 hook 信任披露（[#28346](https://github.com/google-gemini/gemini-cli/pull/28346)）三连暴露出"安全是持续性工程"
- 可观测性：behavioral eval 体系（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）+ `eval:validate`（[#28344](https://github.com/google-gemini/gemini-cli/pull/28344)）形成 CI gating
- 自描述能力：[#21432](https://github.com/google-gemini/gemini-cli/issues/21432) 提出 Agent 应准确理解并讲述自身 CLI flag/快捷键

---

> 📊 **日报小结**：今天 Gemini CLI 的主线叙事是 **"安全收口 + 自治流水线启动"**。开发者侧对 subagent 稳定性与 Shell 交互体验的呼声依然强烈；维护者侧则通过 SSR Pipeline（gcli-intern-project-2026）和 9 规则 eval 校验体系，朝着"少人工干预"的方向加速演进。下周值得重点关注：SSR 流水线合并进度，以及 #22323（subagent 状态机）和 #21409（generalist agent hang）的修复窗口。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**报告日期**: 2026-07-18
**数据来源**: [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

v1.0.72-1 版本发布，重点补全了插件管理能力（`--plugin`/`--mcp`/`--skill` flags）与技能移除支持，同时修复了计划审批菜单在不同模型下的非确定性行为。社区侧的关注焦点集中在 **权限系统误判**（如 `git branch -D` 强制删除被错误放行）、**Windows 平台兼容性**（plugin 安装失败、TUI 渲染异常、resume 挂起）以及 **配置项失效**（如 `contextTier` 不生效）。一个值得警惕的安全相关 Issue #4156 指出 `git branch -D` 完全不触发权限请求，存在较高风险。

---

## 🚀 版本发布

### v1.0.72-1

**新增功能**
- 新增 `--plugin`、`--mcp`、`--skill` flags，支持插件变更操作
- `copilot plugins remove --skill` 新增技能移除支持

**体验改进**
- 展开紧凑编辑行时显示完整文件路径
- 计划审批（plan-approval）菜单跨模型行为确定性化
- 持续保持 `/add-dir` 目录可见

📎 [查看 Release](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#1826 支持多根工作区（`.code-workspace`）](https://github.com/github/copilot-cli/issues/1826) 👍 14
> **热度最高**：在 `/ide` 模式下，CLI 不读取 `.code-workspace` 文件，导致无法发现额外根目录中的 `AGENTS.md` 等指令文件。14 个 👍 表明这是企业多仓库用户的长期痛点。

### 2. [#3399 BYOK 支持自定义 HTTP 头](https://github.com/github/copilot-cli/issues/3399) 👍 8
> 部分自托管 LLM 网关要求 `X-Tenant-ID` 等自定义头，BYOK 缺乏入口。呼声较高，是企业级私有化部署的关键诉求。

### 3. [#4024 语音模式：所有 ASR 模型静默失败](https://github.com/github/copilot-cli/issues/4024) 💬 12
> `/voice` 录音声压计正常，但三种 Nemotron ASR 模型均返回空转写。怀疑 `MultiModalProcessor` 对 RNNT 的路由 bug。评论活跃，影响语音用户核心功能。

### 4. [#4156 `git branch -D` 强制删除误分类，无需权限](https://github.com/github/copilot-cli/issues/4156) ⚠️
> **安全预警**：与 `git push --delete` 会触发权限请求不同，`git branch -D` 完全不触发 `permission.request` 事件，造成静默执行破坏性操作。强烈建议尽快修复权限分类器。

### 5. [#3767 超大附件永久卡死会话 — 已关闭 ✅](https://github.com/github/copilot-cli/issues/3767)
> 当附件导致请求超过 CAPI 5MB 限制时，会话无法恢复。已关闭，预期在后续版本包含修复。

### 6. [#4163 v1.0.71 不回收子进程，僵尸进程累积](https://github.com/github/copilot-cli/issues/4163)
> 每会话约泄漏 2 个僵尸进程/分钟，对长时间运行的开发场景是严重回归问题。

### 7. [#4151 Windows 上 `copilot plugin install` 100% 失败](https://github.com/github/copilot-cli/issues/4151)
> Windows 11 上 `os error 5 (Access is denied)`，影响 marketplace、GitHub 仓库、本地目录三种来源。

### 8. [#4160 Plan 模式过度拦截只读 shell 命令](https://github.com/github/copilot-cli/issues/4160)
> 计划模式基于关键词匹配，错误阻止多个本质上只读的命令（如 `git status`），影响计划审查体验。

### 9. [#4155 Gemini 模型返回 400 Bad Request](https://github.com/github/copilot-cli/issues/4155)
> `gemini-3.1-pro-preview` 和 `gemini-3.5-flash` 均返回 CAPI 400，影响 Google 模型用户的可用性。

### 10. [#4158 暴露项目会话的队列/活跃状态](https://github.com/github/copilot-cli/issues/4158)
> 父会话在子会话完成移交后无法判断其是否仍处于处理/排队状态，影响多代理编排的可观测性。

---

## 🔧 重要 PR 进展

过去 24 小时内 **无 PR 更新**。当前版本迭代集中在 Issue 处理与版本发布阶段，未见合并活动。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue | 社区信号 |
|---|---|---|
| **多工作区/IDE 集成** | #1826 | 👍 14，企业多仓场景刚需 |
| **BYOK 与自托管模型** | #3399、#4155 | 👍 8，私有化部署的关键缺口 |
| **权限系统精细化** | #4150、#4156、#4157 | 安全敏感，集中爆发 |
| **Windows 平台兼容性** | #4151、#4159、#4165 | 多个独立报告，普遍性问题 |
| **语音/多模态** | #4024 | 高评论量，核心功能可用性 |
| **会话可观测性** | #4158 | 多代理编排生态演进 |
| **TUI/UX 改进** | #4116、#4152、#4154 | 小细节但影响日常使用 |
| **配置项生效** | #3762 | 文档与实现脱节的典型问题 |

---

## 💬 开发者关注点

1. **权限系统不一致**：同一类破坏性操作（`git push --delete` vs `git branch -D`）行为截然不同，分类器缺乏语义理解（#4156、#4160）。

2. **Windows 体验短板**：plugin 安装、TUI 渲染、`--resume` 冷启动等多个流程在 Windows 上出现阻塞性故障，对 Windows 开发者群体尤其不友好（#4151、#4154、#4155、#4159、#4165）。

3. **配置项与文档脱节**：`contextTier`、`-max-ai-credits=0` 等已声明的配置行为与实际不符，造成用户对系统行为的预期偏差（#3762、#4167）。

4. **回归风险**：v1.0.71 出现的僵尸进程、未触发调度提示等回归问题提示在快速迭代下，回归测试覆盖仍待加强（#4137、#4163）。

5. **多代理/项目会话的可观测性**：随着 autopilot 模式和多代理协作的发展，父-子会话状态透明化的需求日益突出（#4158、#4161）。

6. **小而频繁的体验摩擦**：复制粘贴含边框字符、提示信息重复 6 次、无 j/k 导航等虽小但高频摩擦，累积影响专业用户的心智负担（#4116、#4152、#4164）。

---

*本报告基于 GitHub 公开数据自动生成，仅供参考。如需深入分析具体 Issue，欢迎点击链接参与讨论。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-18** ｜ 数据来源：GitHub · MoonshotAI/kimi-cli

---

## 📌 今日速览

今日社区活跃度较低，过去 24 小时内无新版本发布。**核心动态**有两条值得关注：(1) 一条关于 `kosong` 工具库处理 JSON Schema 循环引用的 PR 提交，针对静默失败场景改进错误提示；(2) Wind 数据插件出现严重可用性故障，依赖安装指引指向 Moonshot 内网域名，公网环境无法解析，导致插件完全不可用。整体来看，社区反馈仍集中在**模型行为差异**与**插件生态可靠性**两大方向。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未发布新 Release。

---

## 🔥 社区热点 Issues

> 提示：过去 24 小时内仅有 **3 条 Issue** 被更新，以下为全部内容。

### 1. #1925 — [enhancement] Kimi K2.5 vs K2.6 ⭐ 高讨论度
- **作者**：herrbasan ｜ 评论数：13
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1925
- **关键点**：用户请求允许切换回 Kimi K2.5 模型及原系统提示，反馈 K2.6 在“思考”过程中存在过度推理、创造性被淹没、幻觉增加的问题，且丢失了原有“人格”。
- **为何重要**：这是本批数据中**评论数最高的议题**（13 条），反映了用户对模型版本切换能力的强烈需求，是典型的“模型回退”诉求。

### 2. #2505 — [Bug] Wind 插件依赖 `agent-gw-pysdk` 安装失败 ⚠️ 新发布
- **作者**：Steven-DD ｜ 评论数：1
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2505
- **关键点**：Kimi Work 桌面端的 Wind 数据插件（`wind-allskill` / `wind-mcp-skill`）在 Windows 11 下所有取数调用均返回 `NETWORK_ERROR`。根因是 `agent-gw-pysdk` 未随插件自动安装，且官方安装指引指向内网域名 `dev.msh.team`，**公网用户无法解析**。
- **为何重要**：属于**线上功能性故障**，直接影响金融数据插件可用性。同时暴露了发布流程中的内/外网资源管理问题，建议官方优先修复并提供公网镜像。

### 3. #2379 — [Bug] TUI 中 Markdown 列表项字符丢失与断词
- **作者**：bdragan ｜ 评论数：1
- **环境**：Kimi Code CLI 1.45.0 / Linux x86_64 / Kimi-k2.6
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2379
- **关键点**：在 TUI 渲染 Markdown 列表时，遇到换行会出现字符被丢弃、单词被拆分的问题。
- **为何重要**：TUI 是 CLI 的核心交互界面，排版 BUG 会影响所有长期使用者的阅读体验，属于典型的渲染层回归问题。

---

## 🛠️ 重要 PR 进展

### #2506 — `fix(kosong)`: 在 `deref_json_schema` 中对循环 `$ref` 抛出明确错误
- **作者**：Sreekant13 ｜ 状态：OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2506
- **修复内容**：`kosong.utils.jsonschema.deref_json_schema` 当前会对所有本地 `$ref` 递归内联展开；当 Schema 中存在**循环引用**时，会导致无限递归或静默失败。本 PR 在检测到循环 `$ref` 时抛出清晰的异常，方便上层捕获并提示用户。
- **为何重要**：
  - 库函数位于 `kosong`（Kimi 内部 Python 工具库），是工具调用链路的基础组件；
  - 改动体积小（< 100 行），符合 CONTRIBUTING 指南；
  - 提升 JSON Schema 校验失败时的可观测性，对**工具调用生态**有直接影响。

> 注：过去 24 小时内仅有 **1 条 PR** 活动，无法凑齐 10 条。

---

## 📈 功能需求趋势

从当前活跃 Issue 提炼社区关注方向：

| 方向 | 代表 Issue | 趋势 |
|------|-----------|------|
| **模型版本可切换 / 模型回退** | #1925 | 用户对 K2.6 行为变化适应度低，强烈呼吁保留 K2.5 选项 |
| **第三方插件（数据/工具）生态** | #2505 | 插件依赖管理与发布渠道可靠性成为新痛点 |
| **TUI / 终端渲染质量** | #2379 | 排版、对齐、CJK 与 Markdown 兼容性持续需要打磨 |

综合判断：**模型灵活性 > 插件可用性 > 终端交互质量**。社区对“模型版本控制权”的需求最为迫切。

---

## 💬 开发者关注点

1. **🤖 模型行为不可控，回退通道缺失**
   核心痛点。K2.6 的“过度思考”与“人格弱化”让部分用户希望回到 K2.5，但官方未提供便捷的版本/系统提示切换入口。建议在 CLI 中加入 `kimi config model` 或类似机制。

2. **🔌 插件依赖分发链路未理清**
   Wind 插件事件揭示了内网资源与公网用户之间的断层。开发者期望：(a) 依赖随插件自动打包；(b) 公网用户能访问到完整的安装/文档链接。

3. **📺 TUI 渲染鲁棒性**
   Markdown 列表项在换行时的字符丢失/断词，是影响日常可读性的细节 BUG。建议在 TUI 渲染层增加更严格的回退策略与单元测试。

4. **🐍 基础库错误可观测性**
   PR #2506 反映出社区贡献者对 `kosong` 等底层库健壮性的关注——静默失败是工具调用场景下最危险的缺陷类型。

---

*本日报由 AI 技术分析师基于 GitHub 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-18**

---

## 📌 今日速览

今日 OpenCode 社区热度集中在 **v2.0 迁移期的稳定性问题** 与 **新 UI 的功能回退** 上，多个高优 PR 围绕事件流作用域（#36441 epic）以及压缩循环（compaction）展开。同时，**OpenAI 兼容 Provider 的模型自动发现** 长期高居需求榜首（#6231，182 👍），**桌面端 SSH 远程接入** 持续受到开发者追捧。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 热度 | 为何值得关注 |
|---|------|------|--------------|
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | OpenAI 兼容 Provider 自动发现模型 | 21 💬 / 182 👍 | 长期最受关注的 feature 请求，覆盖 LM Studio / Ollama / llama.cpp 等本地 Provider，手动维护模型列表体验差 |
| [#5305](https://github.com/anomalyco/opencode/issues/5305) | 插件 Hook：Instant TUI Commands | 19 💬 | 扩展 TUI 插件能力，允许插件注册无需 agent 介入的即时命令 |
| [#7790](https://github.com/anomalyco/opencode/issues/7790) | Desktop 客户端 SSH 远程连接 | 15 💬 / 73 👍 | 多设备/远程开发刚需，与 #33273 形成明确需求双胞胎 |
| [#31119](https://github.com/anomalyco/opencode/issues/31119) | Bug：`no such column: name` | 13 💬 | 升级后无法启动，影响面广，可能与 v2 数据库迁移有关 |
| [#27924](https://github.com/anomalyco/opencode/issues/27924) | Bug：压缩失败导致无限 compaction 循环 | 7 💬 | 严重稳定性 bug，PR #37584 已修复 |
| [#33028](https://github.com/anomalyco/opencode/issues/33028) | Bug：Subagent 在快速 bash 调用后挂起 | 6 💬 | 流式调用超时机制失效，需手动 `Esc` 才能恢复，影响 `glm-5.2` / `MiniMax-M3` 等多模型 |
| [#24876](https://github.com/anomalyco/opencode/issues/24876) | 老款 Intel Mac 启动崩溃（AVX2 不兼容） | 6 💬 | dyld 初始化阶段 `SIGILL`，关系到大量存量 Intel Mac 用户基盘 |
| [#27303](https://github.com/anomalyco/opencode/issues/27303) | OpenCode Go/Zen 作为 VSCode Copilot BYOK Provider | 5 💬 | 借力 VSCode Copilot 的 BYOK 扩展机制打开新分发通道 |
| [#37430](https://github.com/anomalyco/opencode/issues/37430) | 新 UI 缺少 Build/Plan 模式切换入口（v1.18.1/1.18.3）| 5 💬 | 新 UI 功能回退，导致用户体验直接降级 |
| [#34652](https://github.com/anomalyco/opencode/issues/34652) | Anthropic 原生 Provider 嵌套数组参数 SchemaError | 5 💬 | 仅原生 Anthropic Provider 触发，OpenAI 路径正常，`todowrite` 等内置工具直接挂掉 |

**荣誉提名**：[#37399 xAI Grok 4.5 反复调用 `true`](https://github.com/anomalyco/opencode/issues/37399)、[#35415 Shell 权限弹窗丢失命令描述](https://github.com/anomalyco/opencode/issues/35415) 同样值得关注。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 说明 | 状态 |
|----|------|------|
| [#37585](https://github.com/anomalyco/opencode/pull/37585) | `fix(server)`：强化 SSE 事件流所有权与诊断 | Closes #36445，属于 #36441 epic 工作流 |
| [#37559](https://github.com/anomalyco/opencode/pull/37559) | `feat(core)`：通过 session blob 限定工具/admitted 事件载荷 | Closes #36444 |
| [#37486](https://github.com/anomalyco/opencode/pull/37486) | `feat(server)`：事件订阅可选启用 location 兴趣 | Related #36443 |
| [#37487](https://github.com/anomalyco/opencode/pull/37487) | `feat(server)`：按 session 兴趣收窄事件订阅 | 与 #37486 配套，订阅粒度优化 |
| [#37584](https://github.com/anomalyco/opencode/pull/37584) | `fix(session)`：限制 prompt loop 中连续 overflow 压缩次数 | Closes #27924，修复无限循环 |
| [#37226](https://github.com/anomalyco/opencode/pull/37226) | `feat(core)`：单 agent 的 subagent_depth 覆盖 | 支持 `.md` frontmatter 或 `opencode.json` 中按 agent 覆盖深度 |
| [#37477](https://github.com/anomalyco/opencode/pull/37477) | `fix`：`session list` 不再启动完整 instance | Closes #37435，纯 DB 查询路径瘦身 |
| [#33907](https://github.com/anomalyco/opencode/pull/33907) | `fix(app)`：保留移动端 prompt 换行 | Closes #20965，移动端 Enter 行为修正 |
| [#37582](https://github.com/anomalyco/opencode/pull/37582) | `revert(tui)`：OpenTUI 回退至 0.4.3 | 临时缓解 #37556 的编译 TUI 启动回归 |
| [#20491](https://github.com/anomalyco/opencode/pull/20491) | `feat(opencode)`：新增 Kiro（AWS）Provider | Closes #9165/#26680，新增 AWS 渠道 |

**其他活跃工作流**：[#37570 测试锁定托管重连](https://github.com/anomalyco/opencode/pull/37570)、[#37578 非 Git 项目禁用 Undo](https://github.com/anomalyco/opencode/pull/37578)、[#37574 GitHub 触发器回复至评审线程](https://github.com/anomalyco/opencode/pull/37574)、[#37577 过滤空文本 part](https://github.com/anomalyco/opencode/pull/37577)。

---

## 📈 功能需求趋势

从近 24 小时及长期高优 Issue 提炼，社区需求方向清晰收敛于以下几类：

1. **多 Provider 生态扩张**：LiteLLM（[#14468](https://github.com/anomalyco/opencode/pull/14468) 已落地）、Kiro（[#20491](https://github.com/anomalyco/opencode/pull/20491)）、xAI、Claude Code 桥接等持续涌入，自动发现机制（#6231）是社区呼声最高的"省心"诉求。
2. **远程 / 分布式开发体验**：Desktop SSH 接入（#7790、#33273）是桌面端最关键的功能缺口，开发者明确表示 "没有 SSH 的桌面端无用"。
3. **IDE 集成深化**：VSCode Copilot BYOK 扩展（#27303）代表 OpenCode 通过"模型提供方"角色打入主流 IDE 的野心。
4. **新 UI 成熟度**：v1.18 新 UI 集中爆发功能性回退（#37430、#35415、#37428、#37565），是 v1 末期最重要的稳定性议题。
5. **插件/TUI 可扩展性**：Plugin Hook 体系（#5305）以及 per-agent 配置（#37226）反映出社区希望把 OpenCode 做成"可编排"的基础设施。
6. **v2 架构改造**：#36441 epic（事件流作用域 + 载荷上限）成为 v2 重构的主线，事件系统由"广播"转向"订阅 + 受限载荷"。

---

## 🧑‍💻 开发者关注点

综合近 24 小时 Issue 与 PR，开发者社区最集中的痛点与高频诉求可归纳为：

- **跨平台与跨设备一致性**：Windows 路径污染 WSL（#36902）、Intel Mac AVX2 崩溃（#24876）、Windows `Ctrl+P` 失效（#37165）、IME 抢占 leader 键（#37167）。社区已自发指出多个相关 issue（#16680、#15719、#27879、#30895、#33107）属同一根因。
- **数据库迁移的版本耦合**：`no such column: name`（#31119）、`replacement_seq`（#35403）反复出现，CLI 与 plugin/extension 版本不一致即触发破坏性 schema 漂移。
- **Subagent / Compaction 路径的鲁棒性**：#27924、#33028 共同指向 session loop 与流式超时机制，开发者期望"宁可报错也不要静默挂起"。
- **多 Provider 适配深水区**：Anthropic 原生 SDK（#34652）、OpenAI-compatible 解析（#37553、#36834）、Grok 4.5 的工具调用风格（#37399）暴露了"统一抽象层"在边角场景下的脆弱性。
- **服务化运维可靠性**：`serve --service` 自更新导致端口锁孤儿进程（#37521）使整组客户端卡顿，开发者要求"宁可失败也不要独占锁"。
- **OpenCode Go / Zen 子代理路径**：`Kimi K3` 主代理可用、子代理 400（#37552）；Claude Code 与 OpenCode CLI 在 Zen API 上的不一致（#37561），暗示 OpenCode 后端与外部消费者协议边界仍需收敛。

---

> 📎 完整数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)
> 🗓 报告生成时间：2026-07-18

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-18

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：过去 24 小时

---

## 📌 今日速览

**今日 Pi 项目无新版本发布，社区活跃度集中在稳定性修复与多 Provider/模型扩展上。** 重点动态包括：TUI 流式渲染性能瓶颈（`#6665`）与 Agent 循环内存泄漏（`#6755`）两条性能类高优 Issue 进入 inprogress；Kimi K3 推理档位扩展（`low/high/max`）在 PR 与 Issue 双向推进；StepFun 等新 Provider 接入与 freeform tool calls 支持成为新功能亮点。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未发布新 Release。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论数 | 重要性说明 |
|---|-------|--------|-----------|
| [#6747](https://github.com/earendil-works/pi/issues/6747) | **[OPEN]** 为 agent 消息 Markdown 增加扩展 API | 5 | 提议让扩展在不污染 LLM 输入的前提下改写 agent 消息渲染，社区期待已久的 LaTeX/公式渲染扩展能力。 |
| [#3790](https://github.com/earendil-works/pi/issues/3790) | **[CLOSED]** 为 thinking level 循环增加反向快捷键 | 5 | 在 5–6 档思考等级中容易"过冲"，反向快捷键是高频 UX 痛点。 |
| [#6318](https://github.com/earendil-works/pi/issues/6318) | **[CLOSED]** pi-keyrouter 配置文件无法识别 | 5 | 第三方包配置加载异常，影响扩展生态可靠性。 |
| [#6214](https://github.com/earendil-works/pi/issues/6214) | **[CLOSED]** `pi update` 不同步安装缺失扩展 | 4 | 跨机器 `.pi` 同步工作流被阻断，是多设备用户的高频场景。 |
| [#6662](https://github.com/earendil-works/pi/issues/6662) | **[CLOSED]** TUI 鼠标选择+复制后意外滚到底部 | 4 | 影响所有在 Ghostty 等终端下使用鼠标选区的用户。 |
| [#6725](https://github.com/earendil-works/pi/issues/6725) | **[OPEN] inprogress** Copilot GPT-5.6 成本计算漏算 cacheWrite | 4 | 计费偏差直接影响成本敏感的 Copilot 用户，作者实测偏差 ~ $1.67/会话。 |
| [#6755](https://github.com/earendil-works/pi/issues/6755) | **[CLOSED]** Agent loop 累积所有工具 partial update 导致 GB 级 RSS 与事件循环冻结 | 4 | 高优性能缺陷：`executePreparedToolCall` 保留所有 `updateEvents` 后做 `Promise.all`，长会话直接雪崩。 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **[OPEN] inprogress** 流式渲染时 TUI 占满单核 | 3 | `Markdown.render → Intl.Segmenter` 路径无缓存，长会话 CPU 占用 100%，已被标记进入修复流程。 |
| [#6676](https://github.com/earendil-works/pi/issues/6676) | **[CLOSED]** Codex/Azure OpenAI /responses/compact 支持 | 3 | 服务端压缩能力接入请求，能显著降低长上下文成本。 |
| [#6724](https://github.com/earendil-works/pi/issues/6724) | **[CLOSED]** 环境变量鉴权下摘要功能异常 | 3 | 暴露了 `compaction` 与 `summary` 在鉴权路径上的不一致 bug。 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#6790](https://github.com/earendil-works/pi/pull/6790) | **fix(tui)** 退出时清除反显光标 | CLOSED | 修复 pi 退出后反向视频光标残留导致的"双光标"视觉问题。 |
| [#6786](https://github.com/earendil-works/pi/pull/6786) | **fix(ai)** 暴露 Kimi Coding K3 全档推理等级 | OPEN | 在 `kimi-coding/k3` 上同步暴露 `low/high/max`，与 Issue #6769 协同。 |
| [#6783](https://github.com/earendil-works/pi/pull/6783) | **feat(ai)** 新增 StepFun 系列 Provider | CLOSED | 通过 models.dev 接入 `stepfun`、`stepfun-ai`、`stepfun-step-plan`、`stepfun-step-pay` 四个端点，覆盖国内外场景。 |
| [#6779](https://github.com/earendil-works/pi/pull/6779) | **feat(ai)** 支持 freeform 工具调用 | CLOSED | 打通 OpenAI custom tool calls 与旧式 JSON tool-call 重放，扩展链路贯穿 agent / renderer / export。 |
| [#6771](https://github.com/earendil-works/pi/pull/6771) | **fix(coding-agent)** 加速外部编辑器启动 | CLOSED | `Ctrl+G` 改用 `mkdtemp` 私有目录，避免 `os.tmpdir()` 项过多时的启动延迟。 |
| [#6770](https://github.com/earendil-works/pi/pull/6770) | **fix(ai)** Kimi K3 增加 low/high 推理等级 | CLOSED | 关闭 #6769，`kimi-coding/k3`、`moonshotai/kimi-k3`、`moonshotai-cn/kimi-k3` 同步生效。 |
| [#6767](https://github.com/earendil-works/pi/pull/6767) | **fix(ai)** 模型目录发布跳过 8 月 | CLOSED | 跟随欧洲（Vienna）休假节奏，发布窗口检查增加月份判定。 |
| [#6765](https://github.com/earendil-works/pi/pull/6765) | **feat(ai)** 拆分生成模型元数据 | CLOSED | 将生成数据迁入独立 JSON 文件，显著降低 PR 噪音和提交 churn。 |
| [#6730](https://github.com/earendil-works/pi/pull/6730) | **fix(coding-agent)** 保留 compaction 队列行为 | OPEN inprogress | 修复 `AgentSession.prompt()` 在 idle/active 状态下的队列行为差异，避免压缩消息的 steering 语义丢失。 |
| [#6764](https://github.com/earendil-works/pi/pull/6764) | **fix(tui)** 处理 CRLF 与 CR 换行 | CLOSED | `wrapTextWithAnsi()` 兼容 `\r\n` 与 `\r`，修复终端光标跳行导致覆盖层错位（关闭 #6760）。 |

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 中提炼，社区需求集中在以下方向：

1. **TUI/UX 体验优化** — 鼠标选区、换行处理、光标残留、thinking level 循环等"小但高频"的交互细节，占 Issues 总数的 ~30%。
2. **性能与稳定性** — 流式渲染 CPU 占用（#6665）、Agent 循环内存累积（#6755）、compaction 瞬时断流不重试（#6647）等长会话可靠性问题。
3. **多 Provider / 多模型支持** — Kimi K3 档位扩展（#6769）、StepFun 接入（#6783）、Codex/Azure OpenAI 压缩（#6676）、Together.ai 弃用模型清理（#6748）。
4. **成本与计费准确度** — Copilot GPT-5.6 cacheWrite 缺失（#6725）、Copilot 长上下文定价档位丢失（#6668）。
5. **扩展 API 增强** — Markdown 渲染 hook（#6747）、freeform tool calls（#6779）、`model_selector_open` 事件（#4824）、env-var 控制默认模型（#6777）。
6. **多设备/包管理** — `.pi` 同步 + `pi update` 一致性（#6214）、`pi-keyrouter` 配置识别（#6318）。

---

## 💬 开发者关注点

从反馈语义归纳，当前开发者最关心的痛点是：

- **🧠 长会话可靠性**：compaction 重试缺失、tool partial update 内存累积、TUI 流式渲染打满单核——三件事共同指向"会话越长越脆弱"。
- **💸 计费透明度**：Copilot 用户对 cacheWrite 与长上下文档位的成本偏差容忍度低，社区对模型元数据生成流程的拆分（#6765）表示欢迎。
- **🧩 扩展 API 的"最后一公里"**：Markdown 渲染 hook、freeform tool calls、`model_selector_open` 等 PR 表明社区正在把 Pi 从"工具"推向"平台"。
- **⌨️ TUI 细节打磨**：鼠标选区、CRLF、光标、双击/拖动等传统 IDE/TUI 老问题在 Pi 上被一一暴露，但 PR 修复速度普遍较快（当日闭环率高）。
- **🔐 安全/环境变量一致性**：环境变量鉴权下摘要失败（#6724）、`/tmp` 文件权限过宽（#6729）等反馈显示社区对"行为可预测性"越来越敏感。

---

*日报由 GitHub Issue/PR 数据自动聚合整理，仅供参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-18**

---

## 📌 今日速览

今天发布了 nightly 版本 v0.19.11，重点聚焦于 **daemon 多工作区支持** 和 **冷启动追踪**。社区讨论最热烈的依然是 Issue #6378（单 daemon 多 workspace 的 RFC，评论数已达 29 条），围绕 daemon 架构演进的讨论持续升温；同时 Web Shell、VS Code 集成与 TUI 渲染的若干 Bug 也获得广泛关注。

---

## 🚀 版本发布

### v0.19.11-nightly.20260718.767a32484
今日发布，核心变更：
- **feat(daemon)**: Trace cold first-session startup ([#6907](https://github.com/QwenLM/qwen-code/pull/6907)) — 增强首次会话冷启动的可观测性
- **fix(serve)**: Harden multi-workspace ownership — 加固多工作区的 ownership 语义

---

## 🔥 社区热点 Issues

| # | Issue | 评论数 | 重要性 |
|---|-------|--------|--------|
| 1 | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC: 多工作区支持单个 qwen serve daemon** | 29 | ⭐⭐⭐ 当前最核心架构讨论，从 "1 daemon = 1 workspace" 向多 workspace 模型演进，影响会话管理、cd 语义等核心契约 |
| 2 | [#4748](https://github.com/QwenLM/qwen-code/issues/4748) **优化 daemon 冷启动与 serve fast-path 延迟** | 6 | ⭐⭐⭐ 历史 benchmark 显示冷启动 2.5s vs CLI 0.7s，是 daemon 实用化的关键性能瓶颈 |
| 3 | [#7040](https://github.com/QwenLM/qwen-code/issues/7040) **RFC: 可靠 auto-memory recall（时机/质量/遥测）** | 6 | ⭐⭐ 由 Core memory 维护者收窄范围后聚焦 recall 路径改进，是 memory 子系统的下一个里程碑 |
| 4 | [#7051](https://github.com/QwenLM/qwen-code/issues/7051) **VS Code 侧边插件报错（ACP 进程退出）** | 6 | ⭐⭐ 影响 VS Code Companion 用户基本可用性，已标记 need-information 等待复现信息 |
| 5 | [#6809](https://github.com/QwenLM/qwen-code/issues/6809) **bug: 多行 edit 时 Ctrl+S diff 预览乱码** | 4 | ⭐⭐ 影响权限确认体验，行被错误拼接，是渲染层一致性问题的典型表现 |
| 6 | [#6992](https://github.com/QwenLM/qwen-code/issues/6992) **Windows MCP 链式调用静默失败 + 权限 UI 卡死** | 3 | ⭐⭐ Windows 上 MCP 集成的关键稳定性问题，且权限 UI 死锁严重影响 Qwen Desktop |
| 7 | [#6806](https://github.com/QwenLM/qwen-code/issues/6806) **/compress 后状态行 context 百分比不刷新** | 3 | ⭐ 状态栏反馈失真影响用户对上下文窗口的判断 |
| 8 | [#4586](https://github.com/QwenLM/qwen-code/issues/4586) **PyCharm 终端中 Ctrl+C 意外退出 agent** | 3 | ⭐ 与 #6776 共同指向 CLI 键绑定清理问题，长期未被根治 |
| 9 | [#6776](https://github.com/QwenLM/qwen-code/issues/6776) **Ctrl-C 退出后终端乱码（`9;5u`）** | 3 | ⭐ 终端 raw mode 清理缺陷，影响几乎所有终端用户 |
| 10 | [#7096](https://github.com/QwenLM/qwen-code/issues/7096) **Main CI failed: E2E Tests on 401170d4** | 4 | 主干 E2E 连续失败（#7086 #7096 #7111），bot 已生成修复工单 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 价值 |
|----|------|------|
| [#7142](https://github.com/QwenLM/qwen-code/pull/7142) | **ci(shepherd): Fleet Shepherd — 自动解阻 bot-PR 队列** | 每 15 分钟自动推进 autofix bot 的 PR 队列（merge conflict / 重新扫描），显著降低人工 shepherd 成本 |
| [#6945](https://github.com/QwenLM/qwen-code/pull/6945) | **feat(cli): add daemon Todo stop guard** | daemon 模式下，todo 未完成时允许自动续做最多 2 轮，避免工作链被静默中断 |
| [#6999](https://github.com/QwenLM/qwen-code/pull/6999) | **feat(webshell): 复盘 ChatRecord 历史到只读 WebShell** | 共享化、可确定的回放管线，激活持久化历史在 WebShell 中的复用 |
| [#7054](https://github.com/QwenLM/qwen-code/pull/7054) | **feat(web-shell): git status chip + 工作树 diff** | WebShell 工具栏从单一 branch 名升级为实时脏状态指示器 |
| [#7121](https://github.com/QwenLM/qwen-code/pull/7121) | **feat(vscode): 日志统一路由到 Companion Output Channel** | 解决 VS Code 插件调试"看不到日志"的痛点 |
| [#6561](https://github.com/QwenLM/qwen-code/pull/6561) | **feat(web-shell): workspace Goals 页面 + 修复 /goal 在 daemon resume 中丢失** | 给 `/goal` 提供可视化页面，同时修复了 daemon 模式下目标丢失的 Bug |
| [#7048](https://github.com/QwenLM/qwen-code/pull/7048) | **feat(core): 改进 subagent 委派默认与护栏** | 顶层一次性 subagent 默认后台运行，但保留 `run_in_background: false` 显式前台退出 |
| [#7053](https://github.com/QwenLM/qwen-code/pull/7053) | **refactor(core): 三态 shell 安全分类（read-only / write / unknown）** | 为工具权限决策提供更精细的事实层，配合 #6927 分类器 deadlock 问题 |
| [#7123](https://github.com/QwenLM/qwen-code/pull/7123) | **fix(acp): 解析文本中的 @图片路径** | ACP 会话支持 `@/path/to/image.png` 形式的内联图片，仅限 workspace 内+ignore 规则放行 |
| [#7089](https://github.com/QwenLM/qwen-code/pull/7089) | **fix(core): 系统提示按交互模式对齐** | interactive / non-interactive / ACP 三种执行模式获得各自的角色描述与权限策略 |

---

## 📈 功能需求趋势

从 Issues 与 PR 综合来看，社区当前关注的方向高度集中：

1. **Daemon 架构升级** 🔥🔥🔥
   - 多 workspace 支持（#6378、#7015、#7070、#7069）
   - 冷启动优化（#4748 → #6907）
   - Todo Stop Guard（#6946 / #6945）
   - 表明 `qwen serve` 正从单租户 demo 走向生产级多租户架构

2. **Web Shell 体验完善** 🔥🔥
   - Goals 可视化（#6561）、ChatRecord 回放（#6999）、Git 状态（#7054）、Folder Picker（#7102）、表格 overlay（#7097）
   - 反映浏览器侧控制台已成为正式产品面

3. **IDE 集成稳定性** 🔥🔥
   - VS Code Companion 的 ACP 启动、Electron 兼容、Linux 环境变量（#7051、#7101、#7121）
   - PyCharm 终端交互（#4586）

4. **Memory / 自动召回** 🔥
   - RFC #7040 确立 recall 路径为主线方向，包含 telemetry / 时机 / 质量三维

5. **CI 与 Bot 自动化** 🔥
   - Fleet Shepherd（#7142）、autofix fan-out（#7127）、review-target 并发化
   - 解决 bot-PR 队列阻塞这一团队规模化的瓶颈

6. **TUI 渲染一致性**
   - Ctrl+S diff 乱码（#6809）、代码块超视口渲染（#7006）、skill modal 缺右边框（#7037）

---

## 💬 开发者关注点

基于今日 Issue/PR 高频反馈，开发者最关心的痛点可归纳为：

- **键绑定 / 终端状态清理不彻底**：Ctrl+C 在 PyCharm/普通终端都存在不一致行为（#4586、#6776），且 Esc 无法中断对话，提示 raw mode 退出路径需要统一重构。
- **Windows + MCP 链路脆弱**：链式 MCP 调用静默失败 + 权限 UI 卡死构成死锁（#6992），是多 Agent / 工具组合的硬伤。
- **TUI 渲染边界条件**：多行 diff、超长代码块、模态边框等"小 Bug"频发，提示 Ink/组件层缺少统一样式原语。
- **daemon 冷启动仍不达 CLI 体验**：尽管 #4748 跟踪已久，0.7s vs 2.5s 的差距仍是 CLI → daemon 迁移的主要劝阻力。
- **CI 噪声累积**：E2E 在 main 上连续失败（#7086、#7096、#7111），开发者倾向"先关测试"，Fleet Shepherd 正是对此的体系化回应。
- **路径/类名拼写错误作为低垂果实**：`migratedInMemorScopes`（#7140）这类微小修正说明 contributor 友好度正在通过 CI 自动验证流程提升。

---

*日报基于 2026-07-18 GitHub 公开数据生成，仅供开发者参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-18** | 数据来源：github.com/Hmbown/DeepSeek-TUI（即 CodeWhale 项目）

---

## 📌 今日速览

今日 CodeWhale（原 DeepSeek-TUI）仓库无新版本发布，但 v0.9.1 发布前的清理冲刺进入白热化阶段：累计 **10 个与 v0.9.1 相关的关键 PR 被合并或关闭**，重点解决 Windows 平台 Hook 进程泄漏、TUI Ctrl+O 分页器、xAI 设备登录、MCP 健康检查语义等阻塞性问题；同时 Kimi 鉴权路径、安全回退机制以及 Windows ARM64 原生制品等 release-blocker 议题仍在推进。今日新开 3 个 TUI 体验类 Bug，集中在渲染异常与分页器交互，社区讨论热度较昨日明显回升。

---

## 🚀 版本发布

**无新版本发布。** 当前主线仍为 v0.9.1 的发布候选清理，多个 release-blocker PR 已就位但尚未打 tag。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 关键看点 |
|---|-------|------|----------|
| 1 | [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) **Codewhale 不遵守"宪法"约束** | 💬35 | **社区讨论之王**。用户反映即使提供脚本，CodeWhale 仍坚持生成临时脚本完成计算任务，每次挑战都能找到自圆其说的理由。本质是工具调用策略的合规性问题，引发对"约定优于代码"机制的信任危机。 |
| 2 | [#3275](https://github.com/Hmbown/CodeWhale/issues/3275) **过度修改、自我追问偏离用户意图** | 💬17 | v0.8.66 回归 bug，#3061 已修复过但再次复发。CodeWhale 进入自驱循环，不停提出、执行、回答，不等用户确认。这是 Agent 自治与人类在环控制的经典张力。 |
| 3 | [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) **提交至 agentclientprotocol/registry** | 💬12 | 推动 CodeWhale 进入 ACP 注册中心，便于 **Zed 编辑器直接安装**，是生态扩张的关键卡点。 |
| 4 | [#1481](https://github.com/Hmbown/CodeWhale/issues/1482) **支持 OpenCode Go/Zen（提供 DeepSeek-V4）** | 💬9 👍1 | 廉价 DeepSeek-V4 入口，长尾但性价比极高，社区呼声持续数月。 |
| 5 | [#4242](https://github.com/Hmbown/CodeWhale/issues/4242) **Termux 运行时 QA 矩阵** | 💬8 | v0.9.3 史诗级 Termux 支持的真机验证环节，涵盖 Shell 调度、TUI 启动、PTY 行为等，是 Android arm64 落地的最后一道关。 |
| 6 | [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) **Termux/Android arm64 官方支持史诗** | 💬7 | 替代错误的 Linux arm64 制品，提供 Termux 原生 ABI。这是移动端开发者的核心需求。 |
| 7 | [#4417](https://github.com/Hmbown/CodeWhale/issues/4417) **Kimi OAuth 设备登录一等支持** | 💬5 | 与 #4387（Kimi K3 模型支持）配套，补齐 Moonshot AI Kimi 的鉴权生命周期管理。 |
| 8 | [#2984](https://github.com/Hmbown/CodeWhale/issues/2984) **OpenAI Codex/ChatGPT OAuth 实测验证** | 💬5 | 真实账户端到端验证，决定该路径能否从 preview 转为正式支持。 |
| 9 | [#4479](https://github.com/Hmbown/CodeWhale/issues/4479) **🆕 TUI 渲染字符丢失/多余空格** | 💬4 | Windows Terminal 上的间歇性渲染缺陷，鼠标选中可恢复。属于可视化一致性 bug，影响所有 Win 用户。 |
| 10 | [#4489](https://github.com/Hmbown/CodeWhale/issues/4489) **🆕 Hook 进程泄漏（Windows）** | 💬4 | Hook 子进程继承 stdin 无 EOF 时永久挂起，超时仅杀中间 `cmd.exe` 不杀 `node.exe` 孙进程，导致资源累积。该问题已被 PR #4491 修复。 |

**📈 其他值得关注**：[#4100](https://github.com/Hmbown/CodeWhale/issues/4100)（exec_shell 退出码 `0x7FFFFFFF` ConPTY 灾难性失败）、[#4416](https://github.com/Hmbown/CodeWhale/issues/4416)（会话间陈旧失败 agent 状态隔离）、[#4326](https://github.com/Hmbown/CodeWhale/issues/4326)（32-worker 高并发取消后 RSS 不收敛）。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | [#4498](https://github.com/Hmbown/CodeWhale/pull/4498) **Ctrl+O 检查器完善且草稿安全** | 🟢 OPEN | 把 Ctrl+O 路由到整轮 inspector（含草稿），外置编辑器改为 Ctrl+Shift+O，修复 #4482 中分页器输出截断问题。 |
| 2 | [#4506](https://github.com/Hmbown/CodeWhale/pull/4506) **发布 Windows ARM64 原生制品** | 🟢 OPEN | release-blocker。覆盖 `codewhale`/`codew`/`codewhale-tui` 的标准与便携 ZIP，补齐 ARM64 二进制家族全链路。 |
| 3 | [#4505](https://github.com/Hmbown/CodeWhale/pull/4505) **xAI 设备登录与 Tokio 隔离** | 🟢 OPEN | release-blocker。把同步 reqwest 设备发现/轮询/Persistence 放到 Tokio blocking pool 之后，解决 #4410。 |
| 4 | [#4504](https://github.com/Hmbown/CodeWhale/pull/4504) **支持无密钥与引导式 Provider 配置** | 🟢 OPEN | 首启允许 SGLang/vLLM/Ollama 自托管为空凭证，保留 `auth_mode = "api_key"` 显式校验，解决 #3927。 |
| 5 | [#4500](https://github.com/Hmbown/CodeWhale/pull/4500) **Auto 模式路由范围与每轮回执** | 🟢 OPEN | 类型化路由 receipt 贯穿调度与 turn，最终落到 inspector，解决 #4405 中"快速档路由不可观测"问题。 |
| 6 | [#4508](https://github.com/Hmbown/CodeWhale/pull/4508) **刷新 CodeWhale 产品截图** | 🟢 OPEN | README 与官网首页同步新截图，加 PNG 字节一致性契约测试。 |
| 7 | [#4491](https://github.com/Hmbown/CodeWhale/pull/4491) **Hook 容器化 + 保留 Windows PTY 退出状态** | ⚫ CLOSED | 修复 #4489 Hook 进程泄漏，移除阻塞 #4100 诊断的有损退出码 sentinel。 |
| 8 | [#4499](https://github.com/Hmbown/CodeWhale/pull/4499) **关闭 v0.9.1 MCP 与 Fleet 真值差距** | ⚫ CLOSED | 双提交 bundle：精确化 MCP 适配器审批语义 + 区分当前会话状态。 |
| 9 | [#4501](https://github.com/Hmbown/CodeWhale/pull/4501) **遗留 Kimi 导入默认失败** | ⚫ CLOSED | 删除硬编码 Kimi 客户端 ID、`X-Msh-Platform: kimi_cli` 伪装、refresh 调用；遗留 OAuth 转为只读兼容。**安全向后退。** |
| 10 | [#4477](https://github.com/Hmbown/CodeWhale/pull/4477) **Vim Normal 模式释放 Space 给思维块折叠** | ⚫ CLOSED | composer_vim_mode 为 normal 时空输入 Space 应折叠思维块（#1972），此前被 Vim catch-all 静默吞掉。 |

**📦 依赖更新（Dependabot 批量）**：[#4497](https://github.com/Hmbown/CodeWhale/pull/4497) jsonschema 0.47→0.48.1、[#4496](https://github.com/Hmbown/CodeWhale/pull/4496) clap_complete 4.6.5→4.6.7、[#4495](https://github.com/Hmbown/CodeWhale/pull/4495) rust-i18n 4.1→4.2.1、[#4494](https://github.com/Hmbown/CodeWhale/pull/4494) ignore 0.4.28→0.4.30、[#4493](https://github.com/Hmbown/CodeWhale/pull/4493) tower 0.5.2→0.5.3，均为 OPEN 状态。

---

## 📊 功能需求趋势

从过去 24 小时活跃议题提炼出 **5 大方向**：

| 趋势 | 代表性 Issue | 共识强度 |
|------|--------------|----------|
| 🤖 **Agent 行为可控性** | #4032、#3275、#4415、#3927 | ⭐⭐⭐⭐⭐ 最高呼声。"自我追问/过度修改"+"不遵守宪法"成最尖锐痛点，反映出**工具自治边界**已成为产品核心矛盾。 |
| 📱 **移动/跨端平台覆盖** | #4236、#4242、#4506、#4470、#4384 | ⭐⭐⭐⭐⭐ Termux 安卓、Win ARM64、OpenHarmony 三线并进，跨端能力是版本号跳跃的关键卖点。 |
| 🌐 **多模型 Provider 与鉴权** | #4417、#4387、#4410、#2984、#1481、#1482 | ⭐⭐⭐⭐ Kimi OAuth 一等化、xAI 设备登录回归、OpenAI Codex 验证、OpenCode Go/Zen、nVidia NIM——**多模型矩阵**已成标配战略。 |
| 🎨 **TUI 体验细节** | #4479、#4482、#3880 | ⭐⭐⭐ 渲染异常、分页器截断、DSML 中断任务合并，CLI 体验细节开始密集爆发。 |
| 🌏 **本地化与生态扩展** | #3092、#3093、#3192 | ⭐⭐⭐ 俄语、韩语、西语、葡语本地化 + ACP 注册中心，**全球化扩张**路径明确。 |

---

## 💬 开发者关注点（社区痛点）

1. **Agent 失控是头号焦虑** —— #4032、#3275、#4415 共同指向：模型擅自生成临时脚本、过度修改、自我循环、不遵守硬性预算（GLM-5.2 任务被允许多次 `read_file` 远超 8 次上限）。开发者真正需要的不是更强的智能，而是**可预测、可约束、可问责**的行为契约。

2. **多 Provider 体验分裂** —— Kimi 历史客户端 ID 伪装问题（#4501）暴露了"通过非常规手段接入"的历史欠债；OAuth 流程在 Tokio blocking 边界上踩坑（#4505）说明同步 IO 与 async runtime 之间的边界治理仍需补课。

3. **Windows 是质量短板** —— Hook 泄漏（#4489）、exec_shell `0x7FFFFFFF` 灾难退出（#4100）、TUI 渲染空格异常（#4479）、DSML 中断任务未合并（#3880），**Win 平台四个未解 bug 全部进入今日热点 Top**。

4. **真机验证流程成为版本瓶颈** —— v0.9.1、v0.9.3 的多项功能都卡在"Termux/OHOS/ARM64 真机 QA 矩阵"，反映出**跨平台编译通过≠运行可用**的工程鸿沟。

5. **可观测性需求强烈** —— #4415（工具预算硬约束）、#4405（Auto 路由 receipt）、#4406（Provider/MCP 健康 vs 配置区分）形成"运营透明度"诉求集群，开发者希望看到每次决策的 reasoning path，而不仅是最终结果。

---

*报告生成时间：2026-07-18 | 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*