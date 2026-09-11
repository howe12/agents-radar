# AI CLI 工具社区动态日报 2026-09-11

> 生成时间: 2026-09-11 02:29 UTC | 覆盖工具: 9 个

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

**日期**：2026-09-11
**覆盖范围**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 共 9 个工具

---

## 一、生态全景

AI CLI 工具生态已从"功能可用性竞赛"全面进入"行为正确性与成本精度"阶段。**可靠性 > 新功能**成为本期普遍共识：无限循环、Token 失控燃烧、内存泄漏、Windows 平台稳定性是横跨 6 个以上工具的头号痛点。同时，MCP 协议、Provider 抽象、长上下文治理、Bedrock/OpenRouter 等多模型适配成为新基础设施战场，社区驱动的开放工具（OpenCode/Pi/DeepSeek TUI）在治理细节上甚至超越部分官方产品。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release 数 | 综合活跃度 |
|------|-----------|---------|-----------|-----------|
| **OpenAI Codex** | 50 | 50（20 已闭） | 6（Python 0.154.0 + Rust 3 alpha + 2 其它） | 🔥🔥🔥🔥🔥 |
| **Qwen Code** | 50 | 50 | 3（CLI 0.23.3 + Desktop 0.3.0 + SDK 0.1.12） | 🔥🔥🔥🔥🔥 |
| **Claude Code** | 50 | 2 | 1（v2.1.268） | 🔥🔥🔥🔥 |
| **Gemini CLI** | ~50 | ~10+ | 1（nightly） | 🔥🔥🔥🔥 |
| **OpenCode** | ~25 | 10 | 0 | 🔥🔥🔥🔥 |
| **DeepSeek TUI** | 48 | 8 | 0（0.9.13 候选待发） | 🔥🔥🔥🔥 |
| **Pi** | 30 | 20 | 0 | 🔥🔥🔥 |
| **GitHub Copilot CLI** | 34 | 2 | 1（v1.0.84-4） | 🔥🔥🔥 |
| **Kimi Code CLI** | 1 | 0 | 0 | 🔥 |

**观察**：PR/Issue 比例反映**工程化深度**——Codex 与 Qwen 1:1 配比显示极高的工程吞吐；Claude Code 50:2 显示当日以维护/Issue 跟进为主；Copilot CLI 同样 PR 稀疏，暗示资源向 IDE 端倾斜。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🔁 Loop Protection / Token 燃烧防护** | OpenCode (#45442, #3743)、Gemini (#22323, #21409)、Claude Code (#65961) | 重复工具调用硬性熔断、子代理状态可信度、模型指令遵循 |
| **🔌 MCP 生态集成** | Copilot (#4795/4731/4809)、Qwen (#9693/#9675)、DeepSeek TUI (#6030/6031)、Codex | OAuth/TLS/握手协议合规、跨平台兼容、Windows 重连机制 |
| **🪟 Windows / WSL 平台稳定性** | Claude Code (#91870, #92984)、Codex (#41290, #41463)、Copilot (#4095/3260)、Qwen (#9693) | 文件锁、WSL 路径序列化、剪贴板、桌面版启动失败 |
| **💸 成本与计费透明度** | Codex (#41220)、Pi (#8752/#9210/#9457)、OpenCode (#48330) | DevDay 配额事故、Bedrock 缓存归一化、单 prompt 配额消耗 |
| **⚙️ 配置可观测性** | Codex (#44691/#44693)、Copilot (#4067/#4252)、OpenCode (#36250) | 静默覆盖告警、被忽略字段警告、agent.model 实际生效 |
| **🖥️ TUI 渲染质量** | Pi (#9052/#9257/#9441)、Gemini (#25166)、OpenCode (#48353)、Claude Code (#12953) | 全屏模式 marker 泄漏、光标/滚动回归、命令完成后状态卡死 |
| **📚 长上下文治理** | Pi (#8061/#8133)、Codex (#23868)、DeepSeek TUI (#6008/#6047) | 1M 上下文 maxTokens 预留、按模型差异化压缩策略 |
| **🔧 插件/扩展 API 增强** | Claude Code (#91870 Function Hooks)、Codex (#44701 ThreadInstructions)、Pi (#9434 systemPromptAppend) | 函数级钩子、多层级指令系统、扩展契约明确化 |
| **🛡️ 安全沙箱加固** | Gemini (#29184/#29192/#29250 P1)、Codex (#44639/#44670) | git 参数注入、间接 prompt injection、checkpoint 路径穿越 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级 Agent 桌面 + 插件生态 | 受控企业 Windows / Cowork 用户 | Plugins 体系（Function Hooks 即将交付）、Managed Settings |
| **OpenAI Codex** | 全平台 AI 编程入口 | ChatGPT Pro / Pro 20x 订阅者、SDK 集成商 | Python + Rust 双 SDK、`max`/`ultra` 推理档位、Managed Policy |
| **Gemini CLI** | 子代理 + 沙箱优先的实验场 | 偏好 Gemini 3 + 注重安全的开发者 | OS 原生沙箱、Auto Memory、AST 工具链探索 |
| **GitHub Copilot CLI** | GitHub 原生 + MCP-first 客户端 | GitHub Enterprise 用户 | plugin/instruction/lsp 子命令体系、SEA 打包 |
| **Kimi Code CLI** | 国内 Moonshot 体系入口 | 国内免费/Adagio tier 用户 | Device Authorization Grant 认证流 |
| **OpenCode** | Provider 无关的开源协议中枢 | 多模型 + 自托管用户 | OpenAI Responses、Bedrock、OpenRouter 多协议网关 |
| **Pi** | 计费精度 + 扩展契约严格的工程派 | 关注成本/缓存一致性的高级用户 | bedrock-converse 归一化、APC 光标 marker 模型 |
| **Qwen Code** | Daemon + 桌面 + IDE 全栈 | 国内企业、Qwen 模型用户 | Electron→Tauri 迁移、Workspace 作用域扩展 |
| **DeepSeek TUI** | DeepSeek 模型专用 + 测试基建立标杆 | 测试驱动开发者、Codewhale 用户 | nextest 隔离、Hook 系统、Test fixture 沙箱化 |

---

## 五、社区热度与成熟度

### 高度成熟 / 资源充沛
- **OpenAI Codex**：单日 50+50 工程吞吐，20 个 PR 由 `copyberry[bot]` 自动生成并已合并，**自动化产线节奏**领先
- **Qwen Code**：50+50，社区已推动 Electron→Tauri 战略迁移并产出官方提案（#8596）

### 活跃迭代 / 工程冲刺
- **Claude Code**：维护者 poteat 亲撰设计文档（Function Hooks #91870），**官方路线图透明度最高**
- **Gemini CLI**：安全类 P1 PR 集中评审（#29184/#29192/#29186），**安全工程密度最高**

### 快速成长 / 质量收敛期
- **OpenCode**：v2.0 进入"质量冲刺"模式，10 个 PR 集中修复 loop protection、Termux/Android、多 provider 兼容
- **DeepSeek TUI**：0.9.13 候选合并，测试基础设施成为核心议题，**工程治理深度突出**
- **Pi**：30+20 节奏稳定，TUI 与 Bedrock 适配正确性为主线

### 平台迁移期
- **GitHub Copilot CLI**：plugin/instruction/lsp 命令重构（v1.0.84-4），向 MCP-first 客户端演进

### 当日低活跃
- **Kimi Code CLI**：仅 1 条 Issue 更新（#2638 登录 500），无版本发布，需关注运维响应节奏

---

## 六、值得关注的趋势信号

### 1. 🛑 Loop Protection 成为 Agent Runtime 标配
OpenCode #45442（364 次 grep 调用锁死 50 分钟）、Gemini #22323（GOAL 状态掩盖真实中断）、Claude Code #65961（注释指令被忽略 217 👍）共同指向：**缺少重复调用熔断的 Agent 框架已不可生产化**。开发者应优先选用具备硬性熔断 + 用户可视化告警的工具。

### 2. 💰 成本可观测性从"加分项"升级为"准入门槛"
Codex 配额争议（#41220 Meta 追踪）、Pi Bedrock 缓存归一化（#8752/#9210）、OpenCode 单 prompt 烧光配额（#48330）——**企业开发者将按计费精度选择工具**，而非按模型能力。

### 3. 🔌 MCP 已成"事实标准"但实现参差不齐
Atlassian OAuth 端口不一致（Copilot #4795）、Windows STDIO -32000（Qwen #9693）、OAuth 注销无法切换 workspace（DeepSeek TUI #6040）显示 **MCP 协议合规性仍是大坑**。选型时需评估目标工具的 MCP 客户端实现成熟度，而非仅看 SDK 支持声明。

### 4. 🪟 Windows 是全行业的隐性技术债
横跨 Claude Code、Codex、Copilot、Qwen 四家头部工具的高优 Issue，超过 60% 与 Windows/WSL 强相关（文件锁、路径序列化、剪贴板、桌面启动）。**对于 Windows 重度用户，平台稳定性比模型能力更影响日常生产力**。

### 5. 🧪 测试基础设施进入"工程化深水区"
DeepSeek TUI 的 libtest ABBA 死锁（#6049）、Gemini 的并行 flaky（#5929）、Codex 的 SDK 早期通知竞态（#41078）反映：**当 CLI 工具跨越 0.x 版本号后，测试可靠性将决定迭代速度上限**。

### 6. 🪟 Desktop 客户端技术栈收敛
Qwen 正式冻结 Electron 转向 Tauri（#8596），Claude Code Cowork/Desktop 持续承压——**Rust-based TUI/Tauri 正在替代 Electron 成为 AI 客户端的事实选择**，开发者参与贡献时应优先关注该技术栈。

### 7. 🔧 扩展 API 从"能用"走向"契约化"
Claude Code Function Hooks（即将交付）、Codex ThreadInstructionsProvider、Pi systemPromptAppend——**扩展系统的设计质量正在成为工具生态健康度的关键指标**，类似 VS Code 早期 Extension API 演进路径。

---

> 📊 **数据基线**：本期共统计 9 个仓库、约 **350+ 条 Issue**、**150+ 条 PR**、**13 个 Release**。
> **决策建议**：生产环境优先选择 Issue/PR 比例接近 1:1 且具备显式 loop protection 与计费归一化的工具（OpenAI Codex、Qwen Code、OpenCode、Pi）；MCP 集成需逐工具验证 Windows 兼容性；面向多模型/自托管场景重点评估 OpenCode 与 Pi 的 provider 抽象层。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-11 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

> ⚠️ **数据说明**：本次拉取的 50 条热门 PR 中评论数字段均显示为 `undefined`，故以下 PR 排名综合考量了 Issue 交叉引用密度、PR 影响面、更新活跃度与功能价值。

---

## 一、热门 Skills 排行（Top 8 PRs）

| # | PR | Skill 主题 | 状态 | 关注焦点 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测体系修复** | OPEN | 修复 `run_eval.py` 始终报告 `recall=0%` 的根因（含 Windows 子进程、触发检测、并行 worker），关联热 Issue [#556](https://github.com/anthropics/skills/issues/556)（10+ 复现） |
| 2 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography 文档排版质量控制** | OPEN | 解决孤儿词、寡头段落、编号错位等"每个 AI 生成文档都存在的痛点" |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer 元技能** | OPEN | 五维度质量审计 + 安全审计，覆盖 Skills 自身的评测与安全评估（呼应热 Issue [#492](https://github.com/anthropics/skills/issues/492) 的信任边界担忧） |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit 输出质量门禁（v1.3.0）** | OPEN | 投递前自动校验：先机械文件核查，再按损伤严重度执行四维推理审计；关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门禁提案 |
| 5 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind 多 Agent 编排（零成本）** | OPEN | 将机械任务下放至 headless opencode worker，主 Agent 仅做规划与评审，凸显"上下文即稀缺资源"理念 |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT / ODS / ODF 文档技能** | OPEN | 补齐 OpenDocument 生态（创建/模板填充/转 HTML），覆盖 ISO 开放文档格式用户 |
| 7 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc 高性能计算技能** | OPEN | 针对 SCNet HPC 集群：profile 化 SSH/Slurm 工作流、模块/加速器/分区自动发现 |
| 8 | [#1724](https://github.com/anthropics/skills/pull/1724) | **mcp-builder 评测模型升级到 Sonnet 5** | OPEN | 默认模型从 `claude-3-7-sonnet` 切至 `claude-sonnet-5`，与官方模型生命周期对齐 |

---

## 二、社区需求趋势（Issues 提炼）

按议题热度（评论数 + 👍）归纳出 **7 大需求方向**：

### 1. 🔒 安全与信任边界（最强烈诉求）
- **[#492](https://github.com/anthropics/skills/issues/492)**（43 评论，2 👍）：社区 Skill 借 `anthropic/` 命名空间冒充官方 Skill，存在权限提升风险。
- 反映出 **Skill 供应链信任体系** 是生态第一痛点。

### 2. 🏢 企业级组织能力
- **[#228](https://github.com/anthropics/skills/issues/228)**（16 评论，8 👍，👍/评论比最高）：要求 Claude.ai 支持组织级 Skill 共享库，避免 Slack 传文件 + 手动上传的低效流程。

### 3. 🧪 评测与可靠性
- **[#556](https://github.com/anthropics/skills/issues/556)**（12 评论，7 👍）：`run_eval.py` 触发率 0%，整套描述优化链路失效。
- **[#1487](https://github.com/anthropics/skills/issues/1487)**：`claude-api` 单次注入 ~156k tokens 撑爆上下文。
- **[#1390](https://github.com/anthropics/skills/issues/1390)**：mcp-builder 评测永远 0/N（TextContent 不可 JSON 序列化）。
- 核心诉求：**评测信号必须可信、可序列化、不假报**。

### 4. 🧠 记忆与状态管理
- **[#1329](https://github.com/anthropics/skills/issues/1329)**（9 评论）：`compact-memory` 用符号化记法压缩长程 Agent 状态，减少 prose 式自我笔记的 token 消耗。

### 5. 🛡️ 治理与质量门禁
- **[#412](https://github.com/anthropics/skills/issues/412)**（CLOSED）：`agent-governance`——策略执行、威胁检测、信任评分、审计轨迹。
- **[#1385](https://github.com/anthropics/skills/issues/1385)**：推理质量三闸门管线（预校准 → 对抗审查 → 投递校验）。
- **[#202](https://github.com/anthropics/skills/issues/202)**（CLOSED）：skill-creator 自身需从"开发文档"转译为"可执行指令"。

### 6. 🪟 跨平台兼容性
- **[#29](https://github.com/anthropics/skills/issues/29)**：AWS Bedrock 集成路径缺失。
- **#1050 / #1099**：skill-creator 在 Windows 上 `subprocess` + 编码全面崩溃（多次修复未根治）。

### 7. 🔌 协议化与互操作
- **[#16](https://github.com/anthropics/skills/issues/16)**：建议将 Skill 暴露为 MCP，统一 AI 工具调用接口。
- **[#189](https://github.com/anthropics/skills/issues/189)**（6 评论，9 👍）：`document-skills` 与 `example-skills` 内容重复，污染上下文窗口。

---

## 三、高潜力待合并 PR

以下 PR 当前均为 **OPEN**，但具有较高落地概率（功能独立 + 痛点明确 + Issue 强关联）：

| PR | Skill | 合并概率评估 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测体系修复 | ⭐⭐⭐⭐⭐ — 直接闭环热 Issue #556，是评测子系统的关键补丁 |
| [#83](https://github.com/anthropics/skills/pull/83) | Skill 质量/安全审计器 | ⭐⭐⭐⭐⭐ — 命中 #492 安全信任诉求，且补齐元能力 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 质量门禁 | ⭐⭐⭐⭐ — 完整实现 #1385 提案，跨模型/技术栈通用 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | mcp-builder 切 Sonnet 5 | ⭐⭐⭐⭐ — 模型生命周期同步，单行改动风险低 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp>=2 兼容性 | ⭐⭐⭐⭐ — 闭环 Issue #1668，影响面广 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ⭐⭐⭐ — 通用价值高但与现有 docx/pdf 体系有重叠风险 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT/ODF 文档 | ⭐⭐⭐ — 补齐开放格式，与 docx/pdf 形成完整文档矩阵 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent 编排 | ⭐⭐⭐ — 概念新颖但涉及 opencode 外部依赖，落地需评审 |

---

## 四、Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"建立 Skills 自身的可信基础设施"——围绕评测准确性（#556/#1390/#1487）、安全审计（#492/#83）、质量门禁（#1367/#1385）、跨平台兼容（Windows/Bedrock）和组织级共享（#228）五条主线，呼唤一套"Skill 评测 Skill、安全审查 Skill、质量验证 Skill"的自我强化型生态底座，从"能用的 Skill 集合"演进为"可信的 Skill 供应链"。**

---

# Claude Code 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

今日社区焦点集中在 **Cowork (Windows)** 平台稳定性上——多个高评论量 Issue 涉及 Plan9 共享、VM 运行时下载、网络白名单失效等回归问题。与此同时，核心维护者 poteat 正式宣布 **Function Hooks** 进入"数周内交付"阶段（Issue #91870），这是 Plugins 体系的一次重大能力升级，将重塑扩展开发范式。

---

## 🚀 版本发布

### v2.1.268（今日发布）
- **Gateway 定价联动**：当 `gateway.yaml` 中配置 `pricing` 字段后，登录态的 Claude Code 客户端将通过 Managed Settings 自动获取相同费率，`/cost` 与遥测数据与计费账单对齐。
- **Gateway 启动警告**：当 `access_control.allow_cidrs` 为空时，将发出启动警告（配置缺失提示）。

> 📎 Release：[v2.1.268](https://github.com/anthropics/claude-code/releases/tag/v2.1.268)

---

## 🔥 社区热点 Issues

### 1. [#91870] Function Hooks — 让插件能力提升 10 倍 ⭐ 最重要
- **作者**：poteat（核心维护者）
- **社区反应**：158 评论 / 92 👍
- **为什么重要**：维护者本人在 Issue 内发布正式设计更新（Sep 9, 2026 Community Update），明确承诺在 **数周内** 交付 Function Hooks。这意味着 Plugins 将获得函数级钩子，可拦截/修改工具调用、会话事件，远超当前的字符串匹配机制。社区反馈被官方公开认可为"实质塑造了设计"。

### 2. [#42776] Windows Desktop 重启失败（孤儿进程文件锁）
- **社区反应**：173 评论 / 82 👍
- **为什么重要**：标记 `[invalid]`，但仍是评论数最高的 Issue，反映 Windows 平台升级体验长期未根治。大量开发者在更新后遭遇"Another program is using this file"导致 Claude Desktop 无法重装或重启。

### 3. [#65961] Claude 默认输出冗长代码注释，忽略停止指令 🚨 最高赞
- **社区反应**：33 评论 / **217 👍**
- **为什么重要**：尽管评论数不高，217 个 👍 是本期所有 Issue 之最。问题在于 Claude 在收到明确"不要写注释"指令后仍持续输出 verbose 注释，属于**模型行为层问题**，影响所有用户的代码审美与可维护性体验。

### 4. [#92984] Cowork (Windows) — KB5124008 更新后 Plan9 共享全部失败
- **社区反应**：83 评论 / 41 👍
- **为什么重要**：高优先级回归。一个特定的 Windows KB 累积更新会让 Cowork 的 Plan9 挂载全部报 `Plan9 mount failed: invalid argument`，卸载 KB 才能恢复。对企业内受控 Windows 环境的影响显著。

### 5. [#30112] Cowork 网络出口白名单不生效（403 blocked-by-allowlist）
- **社区反应**：57 评论 / 54 👍
- **为什么重要**：自定义域名被错误拦截，与用户配置的 allowlist 不一致。这是 Cowork 网络隔离机制的**功能可用性核心问题**。

### 6. [#91870] 与 [#38984] Cowork 自定义允许域名不生效（macOS）
- **社区反应**：12 评论 / 27 👍
- **为什么重要**：与 #30112 形成跨平台同源问题集合，反映 Cowork 的网络策略层在多平台存在一致性缺陷。

### 7. [#92249] Desktop 自动更新后 `ListAgents` / `SendMessage` 工具消失
- **社区反应**：8 评论 / 已定位版本 bisect
- **为什么重要**：清晰的回归 Issue——从 Desktop `1.44121.4` → `1.46388.1` 自动更新后，调度任务和 Remote Control 会话中跨会话消息工具被从工具注册表移除。bisect 信息完整，便于快速修复。

### 8. [#76694] Cowork 新项目"选择文件夹"入口被 Chat 风格上传菜单替换
- **社区反应**：22 评论 / 21 👍
- **为什么重要**：Chat/Cowork 合并带来的 UX 回归，Cowork 失去了"Choose a folder"创建项目上下文的能力，被替换为仅支持上传的知识菜单，破坏了 Cowork 的核心工作流。

### 9. [#12953] 鼠标滚轮滚动历史消息时错误地滚动输入历史
- **社区反应**：22 评论 / 21 👍
- **为什么重要**：创建于 2025-12-03，长期未修复的 TUI 体验问题，已积累 22 条讨论仍未解决。

### 10. [#14353] MCP 工具自 v2.0.71 起被串行执行而非并行
- **社区反应**：8 评论 / 10 👍
- **为什么重要**：性能回归。在同一消息中调用多个 MCP 工具时变为串行执行，显著拖慢工作流；建议关注是否有官方性能修复时间表。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅有 **2 条 PR 更新**，均由 poteat 提交，聚焦 **mods 插件系统**。

### 1. [#93452] `mods/diff`：对齐内置 /diff 面板外观
- **状态**：OPEN
- **内容**：将 `/diff` 模组的渲染层切换至引擎的 code element，对齐内置 diff 面板的关闭按钮、行间距、空状态布局、窄终端 resize 处理，并限制只允许一个仓库探测并发。
- **意义**：提升 mods 体系与内置功能的视觉/交互一致性。

### 2. [#93244] `mods`：API 重命名、遥测修复、diff 后端解耦
- **状态**：CLOSED（已合并）
- **内容**：跟进插件 API 重命名（`isFocused`、`tool`）；收紧遥测（行严格顺序、每次读 analytics 开关、第三方 provider 不发送数据）；为 diff 模组引入后端抽象层，git 作为内置实现。
- **意义**：为 mods 体系建立版本控制后端可插拔架构，未来接入其他 VCS 系统成为可能。

---

## 📈 功能需求趋势

从本期 50 条 Issue 中提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **🔌 插件体系增强** | #91870 | 极高（官方承诺数周内交付） |
| **🌐 网络/沙箱精细化** | #30112, #38984, #34690, #93512 | 高（allowlist 反复失效） |
| **🖥️ Desktop 体验回归** | #42776, #76694, #92249, #92276, #93238 | 高（Windows 平台集中爆发） |
| **⚡ 性能优化** | #14353（MCP 串行）, #93499（CLAUDE.md 缓存） | 中 |
| **🌍 多语言本地化** | #87367（思维摘要语言跟随） | 中 |
| **🔧 IDE 集成可配置** | #93036（上下文阈值）, #91884（模型选择） | 中 |
| **🤖 模型行为调优** | #65961（代码注释冗长） | 高（👍 217） |

---

## 💬 开发者关注点与高频痛点

1. **Cowork/Desktop 的稳定性持续承压** — 至少 6 条高优先级 Issue 集中在 Windows + Cowork 组合，覆盖 Plan9 共享、VM 运行时、网络策略、文件锁。**企业 Windows 用户受影响最严重**，建议关注后续 hotfix 节奏。

2. **Function Hooks 是社区最期待的官方能力** — Issue #91870 不仅评论/点赞高，且维护者亲自下场写设计文档、给出时间表，是当前 plugins 生态最具确定性的里程碑。

3. **模型"过度注释"成为普遍抱怨** — 217 个 👍 表明这是横跨所有开发者工作流的痛点，模型指令遵循度的微调诉求上升。

4. **网络出口策略实现存在跨平台缺陷** — 多个 Issue 指向同一根因（allowlist 在不同会话/平台下表现不一致），可能是 Cowork/Desktop/Web 会话共享的代理层 JWT 解析逻辑问题。

5. **CLI 体验细节长期未修复** — 例如鼠标滚轮滚动行为（TUI）从 2025 年延续至今仍未处理，影响开发者日常使用耐心。

6. **LSP 插件开箱即用破损** — 官方 typescript-lsp、jdtls-lsp 安装后 `Total LSP servers loaded: 0`，属于插件首次安装体验的关键问题。

---

> 📊 报告基于 anthropics/claude-code 仓库过去 24 小时数据，共统计 50 条 Issue 更新、2 条 PR 更新、1 个 Release。建议开发者优先关注 v2.1.268 gateway 升级与 Function Hooks 设计文档（Issue #91870）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-09-11**

---

## 📌 今日速览

今天 Codex 社区的核心动态围绕三大主题展开：**GPT-6 Astra 发布后的容量与配额问题持续发酵**（#41220、#43738、#44382 多线追踪）、**Windows/WSL 平台稳定性问题集中爆发**（多项 Issue 跻身热榜），以及 **Python SDK 0.154.0 与多个 Rust 0.155.0-alpha 预发布**带来 `max`/`ultra` 推理强度档位。同时，copyberry[bot] 集中提交并关闭了 20+ 个 PR，覆盖 Windows 沙箱、配置系统、线程级指令等基础设施层重构。

---

## 🚀 版本发布

### Python SDK 0.154.0（正式版）
- 安装：`pip install --upgrade openai-codex==0.154.0`（需 Python 3.10+）
- 同步发布 `openai-codex-cli-bin==0.154.0` 运行时
- **核心变更**：
  - 新增 `max` 和 `ultra` 推理强度档位（[#39662](https://github.com/openai/codex/pull/39662)）
  - 同步 API 路径新增 `ExternalMessage`

### Rust 预发布链
- `rust-v0.155.0-alpha.1` → `alpha.2` → `alpha.2.3` 三个连续 alpha
- `rust-v0.154.0-alpha.6.2`（v0.154 系列的最后一个 alpha）

### Cygwin 语音构建产物
- `voice-cygwin-108b38cf67cbb731`：仅用于 CI 离线构建，**不包含在 Codex 用户包中**

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#41290](https://github.com/openai/codex/issues/41290) Windows+WSL 项目创建/删除失败 | 55 | 43 | ⭐⭐⭐ **最热**。切换 Agent Environment 至 WSL 后 Codex Desktop 项目元数据无法写入，评论区开发者指出根因疑似 `AbsolutePathBuf` 反序列化丢失 base path |
| 2 | [#41463](https://github.com/openai/codex/issues/41463) Windows+WSL：`AbsolutePathBuf` deserialized without base path | 47 | 30 | 与 #41290 **疑似同源**，需合并修复 |
| 3 | [#41220](https://github.com/openai/codex/issues/41220) 【Meta】配额消耗异常与计账不一致 | 37 | 14 | 跨报告追踪器，整合了 Sep 8 DevDay 后大量"配额/信用消耗远高于本地 token 证据"的反馈 |
| 4 | [#34499](https://github.com/openai/codex/issues/34499) Windows 桌面版无法在 ChatGPT Project 内创建本地 Work chat | 24 | 16 | 已存在近两个月的持久化问题 |
| 5 | [#42683](https://github.com/openai/codex/issues/42683) **Alt+P 快捷键导致应用崩溃闪退** | 16 | 5 | **已关闭**——关键快捷键回归，影响 Windows 26.901.22334 |
| 6 | [#43410](https://github.com/openai/codex/issues/43410) Windows Edge 浏览器控制在 API-key 鉴权下失败 | 15 | 9 | `unsupported Codex auth method: apikey` 错误，鉴权分支未覆盖 |
| 7 | [#41078](https://github.com/openai/codex/issues/41078) Python SDK 早期 `turn/completed` 通知被丢弃 | 15 | 1 | SDK 竞态：服务器在 `turn/start` 响应前发送 `turn/*` 通知会被静默丢弃 |
| 8 | [#44382](https://github.com/openai/codex/issues/44382) 反复 "Selected model is at capacity" 导致 Codex 不可用 | 12 | 5 | gpt-6-astra ultra fast 容量不足，Linux 0.154.0 |
| 9 | [#35005](https://github.com/openai/codex/issues/35005) **增强请求**：编辑历史提示时可选原地编辑而非分叉 | 11 | **28** | 👍/评论比最高（2.5x），是 TUI/CLI 工作流的高呼声改进 |
| 10 | [#43015](https://github.com/openai/codex/issues/43015) 严重 CLI 可靠性问题：63.8 MB 图像历史 + WebSocket 回落 | 9 | 0 | 单次请求 63MB 累积、回落 HTTPS 后仍走全量、长时间停顿，影响 Windows |

**补充热点**：
- [#43738](https://github.com/openai/codex/issues/43738) Sep 8 DevDay 后的容量事故多用户聚合（7 评论）
- [#37421](https://github.com/openai/codex/issues/37421) CLI 0.147.0 Esc-Esc 回溯在持久化线程中失效（已关闭，10 评论 44 👍）
- [#44561](https://github.com/openai/codex/issues/44561) 默认关闭 Astra "whimsy stars" 动画（6 评论）

---

## 🛠 重要 PR 进展

| PR | 内容 | 关注点 |
|----|------|--------|
| [#44701](https://github.com/openai/codex/pull/44701) 新增线程级指令 Provider | 暴露 `ThreadInstructionsProvider`，在启动与模型请求边界加载快照，组合顺序为 global → thread → repo | 长期呼声的多层级指令系统 |
| [#44694](https://github.com/openai/codex/pull/44694) Windows 沙箱服务加入发布产物 | x86_64 + ARM64 全部注册到 DotSlash | 修复 #42412 系列启动失败问题 |
| [#44693](https://github.com/openai/codex/pull/44693) 保留用户显式选中的 profile 配置 | 修复 managed new-thread 默认值覆盖用户 profile 的问题 | 对应 Issue #44275 |
| [#44691](https://github.com/openai/codex/pull/44691) 对被忽略的配置项发出警告 | 检测拼写错误与已废弃字段 | 提升配置可观测性 |
| [#44676](https://github.com/openai/codex/pull/44676) 权限配置解析携带执行宿主的路径上下文 | 解决 WSL/容器环境路径语义混乱 | 直接缓解 #41463 系列 |
| [#44675](https://github.com/openai/codex/pull/44675) 在模型请求边界刷新 global 指令 | 根线程 `AGENTS.md` 编辑后无需重启 | 显著改善开发循环 |
| [#44670](https://github.com/openai/codex/pull/44670) 限制登录重定向到已知平台来源 | 修复 ID token 通过 `platform_url` 查询参数泄露漏洞 | **安全相关**，值得升级 |
| [#44666](https://github.com/openai/codex/pull/44666) TUI 尊重系统的"减少动效"无障碍偏好 | macOS/Windows/Linux 启动时读取，运行时变更需重启 | 对应 #44561 系列 |
| [#44658](https://github.com/openai/codex/pull/44658) Windows 沙箱私有桌面在 helper 退出后保持存活 | 由调用方进程持有桌面，解决多 helper 复用 | 减少 #44425 系列 sandbox 刷新错误 |
| [#44639](https://github.com/openai/codex/pull/44639) Windows 离线沙箱阻断非回环入站流量 | 补齐入站防火墙规则，与原有出站规则对称 | 沙箱安全加固 |

**注**：所有 20 个 PR 均由 `copyberry[bot]` 自动生成并已关闭，节奏明显加快，疑似 OpenAI 内部 CI/release-train 自动化产线在迭代。

---

## 📈 功能需求趋势

从 Issue 标签与内容聚合，社区当前最关注的方向：

1. **🪟 Windows/WSL 平台体验**（热度最高）
   - WSL 路径序列化、Project 生命周期、桌面版启动可靠性、Alt+P 崩溃
   - 桌面版 `config.toml` 非原子写入导致掉电数据丢失（#26421）
2. **🤖 新模型与推理档位适配**
   - gpt-6-astra 上线后的容量（#43738、#44382、#43663）
   - `max` / `ultra` 推理档位（#39662）
3. **💸 配额/计账透明度**（#41220 meta 追踪）
   - 用户对订阅信用消耗速率与本地 token 证据不符的投诉激增
4. **🎨 TUI/CLI 工作流增强**
   - 原地编辑历史提示（#35005，👍 28）
   - 关闭动画/装饰（#44561）
   - 活动摘要默认展开（#23868）
5. **🌐 浏览器控制 + 鉴权分支**
   - Edge/Chrome 在 API-key、Pro 等不同鉴权下的兼容性矩阵
6. **🔌 Python SDK 可靠性**
   - 早期通知丢弃竞态（#41078）

---

## 💬 开发者关注点

通过评论与点赞情绪分析，当前开发者社区反馈的**痛点**与**高频需求**：

### 🔴 主要痛点
- **DevDay 容量事故**仍是首要不满来源——多个 "is at capacity" 报告使 ChatGPT Pro/Pro 20x 用户**数小时无法使用** Codex
- **Windows 桌面版自动更新回归**——`cua_node` 重定位导致启动失败（#42412），影响 MSIX 分发用户
- **WSL 项目不可用**成为 Windows 开发者的**阻塞性问题**，影响范围与情绪最重
- **macOS 任务同步丢失**（#43276、#44409）——本地 Work 任务期间 New Chat 不再同步，开发者工作流被打断
- **网络/证书问题**——Windows Schannel 证书校验失败导致永久 reconnect 循环（#41275）

### 🟢 高频需求
- **更稳定的鉴权与浏览器控制路径**（API-key、ChatGPT、企业账户）
- **线程级指令覆盖**（已在 PR #44701 实现）
- **配置系统的可观测性**——未知/被忽略字段需要告警（已在 #44691 实现）
- **沙箱安全加固**（#44639、#44670 已落地）
- **TUI 无障碍支持**（减少动效，默认关闭装饰动画）

### 🟡 兼容性警示
- 多份报告指出 **0.147.0 的 Esc-Esc 回溯存在持久化回归**（#37421）
- **Windows 11 21H2 + PowerShell 7.6.4 CET** 兼容性（#39843）
- 强烈建议生产用户在升级至 0.155.0-alpha 前等待 0.154.x 稳定补丁

---

> 📊 **数据摘要**：今日 Issues 50 条（30 条评论最多），PR 50 条（20 条评论最多/关闭），版本发布 6 个。Windows 平台相关 issue 占据热榜半壁江山，建议 OpenAI 团队优先协调 #41290 / #41463 的合并修复与发布通告。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-11 | **数据来源**: google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 发布 nightly 版本 `v0.61.0-nightly.20260911.ged2ac40df`，社区活跃度集中在 **子代理（subagent）行为可靠性** 与 **安全沙箱加固** 两大方向。Issues 端高优 Bug 集中在子代理误判终止状态、Generalist Agent 死循环、Shell 工具卡死等问题；PR 端则有大量 P1 级安全修复（Windows git 参数校验、路径穿越、间接提示注入防护）集中进入评审，社区对生产可用性的关注度显著提升。

---

## 🚀 版本发布

- **[v0.61.0-nightly.20260911.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260911.ged2ac40df)** 已发布，由机器人自动 bump。完整 Changelog 见 [对比页](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260910.ged2ac40df...v0.61.0-nightly.20260911.ged2ac40df)。

---

## 🔥 社区热点 Issues

> 按评论数与社区反应综合排序

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 达到 MAX_TURNS 后被错误报告为 GOAL 成功 ⭐P1
子代理在达到最大轮次前实际未完成任何分析，但状态仍被报告为 `success` / `Termination Reason: GOAL`，掩盖了真实中断。13 条评论、P1 优先级，影响用户对任务失败的可观察性。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 长时间挂起 ⭐P1
任何委托给 generalist agent 的简单任务（如创建目录）会无限挂起，需 1 小时以上才被人工取消。8 条评论、8 个 👍 是今日情绪最强烈的 issue，提示 sub-agent 分发逻辑存在严重问题。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用 Gemini 3 原生 Bash 亲和性的零依赖 OS 沙箱 ⭐P2
Epic 级提案：放弃工具白名单策略，转向 OS 原生沙箱 + 执行后意图路由，让模型自由组合 POSIX 工具而不损害安全。9 条评论，体现团队对模型原生能力利用路线的系统级思考。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索/映射的价值 ⭐P2
通过 AST 工具精确读取方法边界、降低误读轮次与 token 噪声。7 条评论，关联 #22746（CLI 工具选型），是性能优化方向的重点探索。

### 5. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input" ⭐P1
简单 CLI 命令执行完毕后，UI 仍将其标记为活跃并等待用户输入。4 条评论、3 个 👍，属于高频复发问题，影响日常使用流畅度。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不主动调用 skills 与 sub-agents ⭐P2
模型很少自主选择用户自定义的 skills/sub-agents，必须显式提示才会调用。反映工具选择 prompt 与描述工程需要优化。

### 7. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 确定性脱敏与日志削减 ⭐P2 安全
当前依赖 LLM 在上下文中脱敏，敏感信息已先进入模型上下文。需前置确定性脱敏，是 Auto Memory 系统的关键信任问题。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 ⭐P1
Linux Wayland 用户使用 browser sub-agent 直接失败，限制了在 GNOME/KDE 现代桌面环境下的可用性。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 符号链接 agent 不被识别 ⭐P2
`~/.gemini/agents/filename.md` 若为 symlink 则不会被加载，影响 dotfiles 同步与多设备共享工作流。

### 10. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 自动会话接管与锁恢复 ⭐P3
当前 BrowserManager 对锁定 profile 采取"快速失败"策略，需增强自动接管与孤儿子进程清理，提升长会话稳定性。

---

## 🛠️ 重要 PR 进展

> 集中在安全加固与稳定性修复

### 1. [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) — Windows 沙箱内 git 参数校验 ⭐P1 安全
阻止 `git diff --output=<path>` 在默认（非 YOLO）模式下静默执行——该 flag 会截断目标文件而绕过只读检查，是 Windows 平台上的高危绕过路径。

### 2. [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) — 防止构建文件与不可信参数引发的间接 Prompt 注入 ⭐XL
重构 shell/edit/write_file 等内置执行路径，在受限 workspace 模式下校验配置文件与外部命令参数，是对抗间接注入的关键防御层。

### 3. [#29283](https://github.com/google-gemini/gemini-cli/pull/29283) / [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) — 沙箱文件系统边界强化与运行时状态隔离 ⭐L/XL
为 Docker/Podman/runsc/LXC/macOS Seatbelt 提供只读配置访问、临时运行时状态隔离，使用 realpath 解析并对不存在路径做兜底。系列性硬化工作。

### 4. [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) — `/chat delete <tag>` 路径穿越修复 ⭐P1 安全
legacy raw tag 回退逻辑直接把未校验 tag 拼入 `path.join`，`../` 可逃逸到 checkpoints 目录之外，删除任意文件。

### 5. [#29188](https://github.com/google-gemini/gemini-cli/pull/29188) — `read-many-files` include 模式精确匹配 ⭐P1
原实现用 `String.includes()` 判断"显式请求"，导致目录名片段误匹配二进制资产（图片/PDF/音频），可能加载未预期的二进制文件。

### 6. [#29186](https://github.com/google-gemini/gemini-cli/pull/29186) — 修正 exitCode null 检查 ⭐P1 安全
修复 ShellToolInvocation 沙箱拒绝检测中 `exitCode` 类型为 `number | null` 但仅检查 `!== undefined` 的缺陷，关闭 #29043。

### 7. [#29187](https://github.com/google-gemini/gemini-cli/pull/29187) — 模板占位符安全替换 ⭐P2 安全
`String.prototype.replace` 的 `$&`/`$1` 等序列在替换串中有特殊语义，用户控制值直接进入替换位置会造成 prompt 内容异常，关闭 #29044。

### 8. [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) — OAuth 凭据登录后立即持久化 ⭐P2 安全
修复了之前只在 OAuth client `tokens` 回调中持久化的设计缺陷，避免下次启动再次要求 Google 登录。

### 9. [#29180](https://github.com/google-gemini/gemini-cli/pull/29180) — `tildeifyPath` 不再误折叠兄弟 home 路径 ⭐P2
使用平台 `path.relative` 强制段级包含判断，避免 `/home/alice2` 被错认为 `/home/alice` 的子路径。

### 10. [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) — Checkpoint 文件非数组 history 优雅降级 ⭐P2
合法 JSON 但 `history` 字段不是数组时，`/resume resume` 不再抛 `TypeError`，而是降级为空 checkpoint。

### 11. [#29190](https://github.com/google-gemini/gemini-cli/pull/29190) — VSCode 扩展 activate() 资源全部订阅化 ⭐P2
修复 `(disposableA, disposableB)` 逗号运算符 bug，避免 `gemini.diff.accept` 等命令在 deactivate 后"command already registered"。

---

## 📈 功能需求趋势

从今日 50 条 issue 中提炼，社区最关注的方向按热度排序：

| 方向 | 代表 issue | 关注度 |
|---|---|---|
| **子代理可靠性** | #22323 #21409 #21983 #21763 #21968 | 极高 |
| **安全与沙箱** | #26525 #19873 + 多个 P1 安全 PR | 极高 |
| **Auto Memory 系统** | #26525 #26522 #26523 #26516 | 高（4 条集中 issue） |
| **性能与 token 经济** | #22745 #22746 #19561 #21924 | 高 |
| **Browser Agent 韧性** | #22232 #22267 #21983 | 中 |
| **AST 工具链** | #22745 #22746 | 中 |
| **任务追踪持久化** | #21000 #18836 | 中 |
| **CLI 自描述能力** | #21432 | 中 |
| **平台适配** | #21983 (Wayland) #20079 (symlink) | 中 |

---

## 💡 开发者关注点

1. **🪫 Subagent 状态可信度是头号痛点**：`GOAL` 状态被滥用掩盖实际中断，bugreport 不含子代理上下文（#21763）让排障接近黑盒。

2. **🧠 模型自主调用能力不足**：开发者希望模型能"无提示"地选用合适的 skills/sub-agents（#21968），背后是工具描述与选择 prompt 的工程债。

3. **🔐 安全边界仍是最大风险面**：今天进入评审的 P1 PR 几乎全部是安全类（git 参数、路径穿越、prompt 注入、NTFS 8.3、OAuth、checkpoint 穿越），显示团队在"AI agent + 本地 shell"这一攻击面上的持续投入。

4. **💾 Auto Memory 系统集中爆发**：`#26516` 作为 tracking issue 串联出 4 个子问题（脱敏、重试风暴、inbox patch 校验、整体质量），说明该功能进入生产前最后一公里。

5. **🖥️ 跨平台兼容性被低估**：Wayland 失败、NTFS 8.3 短路路径、tildeifyPath 段级误判、VSCode 扩展 dispose 泄漏——非 macOS/Linux 主线上的边缘问题正逐步浮现。

6. **⚡ Token 经济性要求越来越高**：Tactful Extraction、AST 边界读取、Auto Memory 检索/重试机制都在向"用更少 token 完成更准任务"收敛。

---

*日报生成于 2026-09-11，仅基于 GitHub 公开数据汇总。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

今天 Copilot CLI 发布了 **v1.0.84-4** 版本，重点强化了 plugin/instruction/lsp 子命令的可观测性（新增 `--json` 与 `enable`/`disable`）。社区层面，多个长期悬而未决的 **内存泄漏 / OOM 崩溃** 议题持续发酵（#4686、#4725、#4699、#4780），同时 **MCP 生态的兼容性问题**（OAuth、握手协议、TLS）成为新的热点，说明 Copilot CLI 正在从单一 CLI 工具向"Agent 运行时+MCP 客户端"快速演进过程中暴露出稳定性短板。

---

## 🚀 版本发布

### v1.0.84-4（今日发布）

**Added**
- 新增 `copilot instruction list` 与 `copilot lsp list`，取代 `copilot plugins list --kind instruction` 与 `--kind lsp`，命令结构更清晰。
- 为 `copilot plugin list`、`copilot plugin marketplace list`、`copilot plugin marketplace browse` 添加 `--json` 输出，便于脚本化与自动化。
- 为 `copilot plugin` 增加 `enable` / `disable` 指令，强化插件生命周期管理。

> 🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.84-4

---

## 🔥 社区热点 Issues

### 1. [#13] CLI 应支持 Vi/Vim 输入模式 — `CLOSED`
- **状态**：12 评论 / 76 👍（点赞数最高）
- **要点**：长期呼声最高的特性之一，要求 CLI 交互层支持 Vim 模式编辑。Issue 被关闭可能意味着将在后续版本以全新方案实现。
- 🔗 https://github.com/github/copilot-cli/issues/13

### 2. [#4742] Desktop 1.1.15：同一项目无法创建第二个 Local 分支会话
- **状态**：11 评论
- **要点**：Desktop 1.1.15 升级后出现 "This project already has an active Local workspace" 错误，影响多任务并行工作流，官方已介入 triage。
- 🔗 https://github.com/github/copilot-cli/issues/4742

### 3. [#1285] Organization 级别的 Agent 在 CLI 中不可见
- **状态**：9 评论 / 11 👍
- **要点**：`.github-private` 仓库中的 Agent 配置对 CLI/VS Code 不可见，影响企业用户管理共享 Agent 的体验。
- 🔗 https://github.com/github/copilot-cli/issues/1285

### 4. [#4095] Windows 上 `copilot plugin update` 失败：Access is denied (os error 5)
- **状态**：3 评论 / 21 👍（同类点赞最高）
- **要点**：VS Code 持有文件 watcher 句柄导致 CLI 插件更新失败，是 Windows 平台阻塞性问题，跨桌面端与 CLI。
- 🔗 https://github.com/github/copilot-cli/issues/4095

### 5. [#3260] SSH+tmux → Windows Server 2025 场景下复制/粘贴失效
- **状态**：7 评论
- **要点**：1.0.47 升级后远程 Windows 环境下剪贴板功能破坏，影响跨平台远程开发体验。
-  https://github.com/github/copilot-cli/issues/3260

### 6. [#4686] Node.js OOM 崩溃：37 分钟泄漏 31,965 个 libuv 句柄
- **状态**：3 评论
- **要点**：长时间会话触发 SEA 运行时句柄泄漏，揭示底层 Node.js 运行时治理缺失。
- 🔗 https://github.com/github/copilot-cli/issues/4686

### 7. [#4725] JS Heap Out of Memory 频繁崩溃
- **状态**：3 评论
- **要点**：与 #4686、#4699、#4780 形成"OOM 集群"，反映 v1.0.82+ 内存管理存在系统性问题。
- 🔗 https://github.com/github/copilot-cli/issues/4725

### 8. [#4795] Atlassian MCP OAuth 失败：回调端口与注册不一致
- **状态**：2 评论
- **要点**：OAuth 回调使用随机端口而非注册端口 33418，典型 MCP 集成兼容性问题。
- 🔗 https://github.com/github/copilot-cli/issues/4795

### 9. [#2199] 增加 Ctrl+Backspace 删除整词快捷键
- **状态**：4 评论 / 7 👍
- **要点**：基础编辑器交互补齐请求，体现开发者对 CLI 输入层细节体验的关注。
- 🔗 https://github.com/github/copilot-cli/issues/2199

### 10. [#4764] Assisted Permissions 模式约 1 小时后失效
- **状态**：3 评论
- **要点**：权限辅助模式存在"计时器/会话生命周期"问题，与 #4802 的 PRU 配额被消耗问题可能存在关联。
- 🔗 https://github.com/github/copilot-cli/issues/4764

> 此外值得关注：`#4780`（会话压缩 OOM 进入不可恢复循环）、`#4807`（空闲进程 FileWatch 风暴写入 33GB 日志）、`#4809`（本地 MCP 客户端违反规范发送 `server/discover`，已 CLOSED）。

---

##  重要 PR 进展

> 过去 24 小时仅 2 条 PR 活动，相对清淡：

### 1. [#4808] [OPEN] 将 GitHub Actions 固定到 Commit SHA
- **来源**：`github-security-bot` 自动发起
- **要点**：将 4 个 workflow 文件中的 3 处 `uses:` 引用固定到不可变 SHA，提升供应链安全。
- 🔗 https://github.com/github/copilot-cli/pull/4808

### 2. [#4786] [CLOSED] 修订第三方服务声明
- **作者**：`nkasuku`
- **要点**：更新文档中关于第三方服务访问要求与条款的说明，已合并。
- 🔗 https://github.com/github/copilot-cli/pull/4786

---

## 📈 功能需求趋势

从 34 条活跃 Issue 中提炼出社区当前最关注的 5 大方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **MCP 生态集成** | #4795、#4731、#4809、#4801、#4796 | 🔥🔥🔥🔥🔥 |
| **内存稳定 / 长会话可靠性** | #4686、#4725、#4699、#4780 | 🔥🔥🔥🔥🔥 |
| **Windows / WSL 平台兼容** | #3260、#3534、#4095 | 🔥🔥🔥🔥 |
| **编辑器交互体验（键盘 / 输入模式）** | #13、#2199、#4803 | 🔥🔥🔥 |
| **Settings / Agent / Plugin 配置** | #4067、#4252、#4806、#1285、#4799 | 🔥🔥 |

**趋势洞察**：
- **MCP 已成为 CLI 的核心战场**：从 OAuth、握手规范、TLS 到超时重试，开发者正在用 Copilot CLI 接入真实企业系统（如 Atlassian），但周边生态尚不成熟。
- **稳定性诉求高于新功能**：本期点赞数最高的 #13 是 Vim 模式需求，但 OOM/崩溃类 Issue 数量更多，表明 **生产环境可用性** 比"理想功能"更迫切。
- **"配置静默失败"成为新痛点**：#4067、#4252、#4804 都指向配置文件中的值未被正确读取或被旧会话覆盖，亟需配置层的可观测性。

---

## 💬 开发者关注点

汇总本期高频反馈，可归纳出以下 4 类核心痛点：

### 1.  运行时稳定性差（最强烈）
> "37 分钟泄漏 3 万句柄"、"每几分钟崩溃"、"4GB 上限 OOM"
- 多个 Issue 显示 v1.0.82+ 的 SEA 打包版本在长会话场景下几乎不可用，**官方需引入更严格的 libuv 句柄审计与堆上限配置（`NODE_OPTIONS` 当前被 SEA 忽略，见 #4686）**。

### 2. 🔌 MCP 集成"半成品"感强
> Atlassian OAuth 端口不一致、握手违反规范、TLS 校验硬失败、超时后工具列表被永久剥离
- 开发者期望 CLI 能成为 **MCP-first 客户端**，但当前实现对协议规范的遵循与错误恢复策略仍显粗糙。

### 3. 🪟 Windows 平台长期欠账
> 剪贴板在 tmux/SSH 下失效、WSL2 `/copy` 引号错误、插件更新被 VS Code 锁阻塞
- 跨平台质量与 macOS/Linux 相比仍有差距，建议建立 **Windows 专项测试矩阵**。

### 4. ⚙️ 配置层缺乏可观测性
> `settings.json` 中 `model` 字段不生效、会话退出时静默回写旧值、沙箱内 `GH_TOKEN` 来源不明
- 开发者需要 **"我配置了什么、为什么没生效、是谁覆盖了谁"** 的明确反馈，而非"静默回退到默认"。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 统计窗口：2026-09-10 → 2026-09-11*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-11  
**数据来源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日 Kimi CLI 仓库活跃度较低，**无新版本发布，无 PR 活动**，仅有一条 Issue 被更新（#2638），报告 `/login` 设备授权流程在 CLI v0.42.0（macOS）上出现 HTTP 500 错误。该问题同时也在 VS Code 扩展中被复现，提示故障可能位于服务端或共享认证组件，需重点关注。

---

##  版本发布

*过去 24 小时内无新版本发布，本节省略。*

建议关注仓库 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 🔥 社区热点 Issues

> ⚠️ 今日仅有 **1 条** Issue 在过去 24 小时内有更新，远少于常规热点数量。以下完整呈现该 Issue 的内容与影响分析。

### #2638 — `/login` 设备授权在浏览器批准后返回 HTTP 500

- **链接**：[MoonshotAI/kimi-cli#2638](https://github.com/MoonshotAI/kimi-cli/issues/2638)
- **状态**：OPEN
- **作者**：milesbuckton
- **创建/更新**：2026-09-09 / 2026-09-10
- **评论数**：1 | **👍**：0

**问题摘要**：

| 环境项 | 值 |
|---|---|
| CLI 版本 | 0.42.0 |
| 操作系统 | macOS |
| 账户类型 | Free plan (Adagio tier) |
| 复现路径 | CLI `/login` 与 VS Code 扩展均可复现 |

**复现步骤**：
1. 在 CLI 中执行 `/login`
2. 浏览器自动打开并展示设备码（如 `WGBT-C3BW`、`QLE2-MYVL`）
3. 在浏览器中完成登录审批
4. CLI 端收到 **HTTP 500** 错误，登录流程中断

**为什么值得关注**：
- **登录是入口级功能**：该故障直接阻塞用户首次使用流程，影响所有新用户的 onboarding 体验。
- **跨产品复现**：CLI 与 VS Code 扩展同时报错，说明问题大概率不在客户端本地逻辑，而是位于后端 `/device` 授权接口或共享 SDK，需要服务端介入排查。
- **影响免费用户**：Adagio tier 是面向大众的体验档位，故障会直接影响拉新转化。

**社区反应**：评论与点赞数暂为 1/0，处于早期反馈阶段；但鉴于其阻塞性与跨平台影响，预计会快速升温，建议运维侧优先响应。

---

## 🛠 重要 PR 进展

*过去 24 小时内无 PR 更新，本节省略。*

---

## 📈 功能需求趋势

由于今日 Issue 数据量极少（仅 1 条），无法进行统计意义上的趋势分析。但从该唯一 Issue 可以观察到：

1. **认证/登录稳定性**：设备授权（Device Authorization Grant）流程的健壮性是当前社区痛点，提示 Kimi CLI 的账户体系正逐步从单一 Token 模式转向更现代的 OAuth Device Flow。
2. **跨端一致性**：CLI 与 VS Code 扩展共享认证后端，社区期望两端登录体验保持一致。

---

## 💬 开发者关注点

综合本轮数据，开发者反馈聚焦于以下几点：

- **登录可靠性**：免费用户在 macOS 上的 `/login` 命令出现 500 错误，希望快速修复以避免首次使用即"劝退"。
- **环境信息透明度**：开发者习惯在 Issue 中提供 CLI 版本、OS、账户类型等元数据，建议官方在 Issue 模板中固化这些字段，便于高效排查。
- **跨产品协同**：CLI 报错往往与 VS Code 扩展共享根因，社区期待维护者在处理客户端 Bug 时同步排查扩展端是否复现。

---

*本日报基于 GitHub 公开数据自动生成。如需更详尽的长期趋势分析，建议结合近 7/30 日数据进行回顾。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-11**

---

## 📌 今日速览

过去 24 小时内 OpenCode 仓库无新版本发布，但社区活跃度持续攀升：开发者焦点集中在 **v2.0 分支的稳定性打磨**（子智能体无限循环、shell 工具卡死、配置被忽略等问题集中爆发），同时 OpenAI Responses 流式协议、Anthropic Bedrock 兼容性、Termux/Android 平台支持等成为新一批 PR 的攻坚方向。`infinite loop`（无限循环）与 `token 失控燃烧` 相关讨论占据 Issue 热度榜首，凸显出 loop protection（循环保护）机制的迫切性。

---

## 🚀 版本发布

**今日无新版本发布。**

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论 | 重要性 |
|---|-------|------|------|--------|
| [#3743](https://github.com/anomalyco/opencode/issues/3743) | **Loop in certain models**（KIMI K2、GLM 4.6 等模型陷入重复工具调用循环） | 已关闭 | 27 | ⭐⭐⭐⭐⭐ |
| [#1880](https://github.com/anomalyco/opencode/issues/1880) | **[model-problem] GLM 4.5 String issue**（`AI_InvalidResponseDataError: Expected 'id' to be a string`） | 已关闭 | 19 | ⭐⭐⭐⭐⭐ |
| [#4232](https://github.com/anomalyco/opencode/issues/4232) | **LM Studio 未配置模型仍被显示**（配置清理后仍残留旧模型） | 已关闭 | 12 | ⭐⭐⭐⭐ |
| [#34730](https://github.com/anomalyco/opencode/issues/34730) | **TUI 被 models.dev 自动抓取错误日志污染** | 已关闭 | 10 | ⭐⭐⭐⭐ |
| [#45442](https://github.com/anomalyco/opencode/issues/45442) | **[2.0] subagent 无限循环 50 分钟无防护，364 次相同 grep 调用** | **开放** | 7 | ⭐⭐⭐⭐⭐ |
| [#28618](https://github.com/anomalyco/opencode/issues/28618) | **runLoop 因客户端/服务器时钟偏移触发伪二次 LLM 调用** | 已关闭 | 5 | ⭐⭐⭐⭐ |
| [#47350](https://github.com/anomalyco/opencode/issues/47350) | **Shell 工具在子进程持有 stdio 时永不返回** | **开放** | 4 | ⭐⭐⭐⭐ |
| [#35706](https://github.com/anomalyco/opencode/issues/35706) | **Go 套餐突然无响应**（Windows + WSL 双端复现） | 已关闭 | 4 | ⭐⭐⭐ |
| [#48330](https://github.com/anomalyco/opencode/issues/48330) | **[2.0] Copilot Legacy 配额被单条 prompt 耗尽** | **开放** | 3 | ⭐⭐⭐⭐ |
| [#36250](https://github.com/anomalyco/opencode/issues/36250) | **agent.model / agent.variant 在 handleSubtask 中被忽略** | 已关闭 | 3 | ⭐⭐⭐⭐ |

**为什么重要：**
- **#3743 与 #45442**：揭示了 OpenCode 当前最大的可靠性盲区——缺乏对重复工具调用的硬性熔断，导致真实用户被**锁死数十分钟、token 失控燃烧**。
- **#1880 / #4232**：反映 OpenCode 与国产/本地模型（GLM、KIMI、LM Studio）的协议兼容性问题集中爆发。
- **#34730**：在受限网络环境中，`models.dev` 后台轮询不断产生 ERROR 日志，TUI 终端被刷爆。

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 亮点 |
|---|----|----|------|
| [#48417](https://github.com/anomalyco/opencode/pull/48417) | fix(app): preserve reasoning capability | Bug Fix | 修复 V2 模型目录集成时所有模型被错误报告为无 reasoning 能力的问题 |
| [#48399](https://github.com/anomalyco/opencode/pull/48399) | refactor(tui): project production subgroups through tree engine | Refactor | TUI 历史会话的递归分组树引擎接入生产路径 |
| [#48412](https://github.com/anomalyco/opencode/pull/48412) | feat(core): add GPT delegation plugin with Ultra mode | Feature | 新增 `opencode.gpt-delegation`，Ultra 模式复用 `max` variant |
| [#48158](https://github.com/anomalyco/opencode/pull/48158) | fix(ai): honor chunkTimeout on HTTP SSE streams | Bug Fix | `chunkTimeout` 配置终于在原生 HTTP 路径上真正生效（修复 #46692） |
| [#48194](https://github.com/anomalyco/opencode/pull/48194) | fix(opencode): match absolute permission rules against worktree-relative patterns | Bug Fix | 权限规则匹配从工作树相对路径改为绝对路径（修复 #48193） |
| [#48405](https://github.com/anomalyco/opencode/pull/48405) | fix: add Android/Termux support to postinstall.mjs | Bug Fix | v2 CLI 在 Termux/Android 上 `os.platform()` 返回 `"android"` 导致安装失败的修复 |
| [#48353](https://github.com/anomalyco/opencode/pull/48353) | fix(tui): avoid default theme flash during startup | Bug Fix | 首帧渲染不再等待主题检测，消除启动白屏闪烁 |
| [#48324](https://github.com/anomalyco/opencode/pull/48324) | feat(skill): implement two-tier progressive skill disclosure | Feature | 双层渐进式技能披露 + OpenAI Responses API 网关兼容 |
| [#48117](https://github.com/anomalyco/opencode/pull/48117) | fix(provider): resolve OpenRouter route-modifier suffixes in model IDs | Bug Fix | 支持 `:floor` / `:nitro` / `:exacto` / `:online` 等路由后缀 |
| [#48403](https://github.com/anomalyco/opencode/pull/48403) | feat(core): enforce managed provider policies | Feature | Console 组织策略在目录读取时强制执行 |

---

## 📈 功能需求趋势

从过去 24 小时的高活跃 Issues 与 PR 中，可以提炼出社区最集中的诉求：

### 1. **🛡️ Loop Protection（循环保护机制）** — 最迫切
- 多个高赞 Issue（#3743、#45442、#28618）直指"模型/子代理重复调用同一工具"导致 token 失控燃烧
- 需求：硬性最大重复次数熔断 + 用户可视化告警

### 2. **🌐 多模型兼容与协议适配**
- GLM 4.5/4.6、KIMI K2、DeepSeek、Claude Bedrock、OpenRouter、Workers AI、OpenAI Responses
- 国产模型 + 边缘模型 + 自托管（LM Studio）的接入稳定性
- 路由后缀、缓存断点、AWS Profile 凭据等细节协议问题

### 3. **🪟 桌面端 / GUI 体验**
- Session Context 的 Token 计数回归（#36515）
- 侧边栏启动阻塞（#35514）
- 项目图标丢失（#36562）
- "thinking" 卡死（#35986）

### 4. **⚙️ 配置语义一致性**
- 子代理不读取 `agent.<name>.model`
- `opencode run --continue` 横幅显示错误的 agent 名
- `hiddenFromCycle` 等 agent 元数据字段缺失

### 5. **📱 平台拓展**
- Android/Termux 安装支持（已合并）
- Windows 自定义安装目录被 auto-update 忽略
- 终端光标闪烁未恢复

---

## 💡 开发者关注点

总结开发者反馈中的**高频痛点**：

1. **可靠性 > 功能**：v2.0 当前最受诟病的不是缺少能力，而是"不可预测的失控"——无限循环、Token 燃烧、Shell 工具卡死、SQLite 写入失败（#48416）等问题让生产环境部署受阻。

2. **跨时钟/跨进程的状态机脆弱性**：`#28618`（客户端时钟超前触发伪 round-trip）、`#47350`（后台进程持有 stdio）、`#48414`（bash 工具残留 EOF 等待）—— 三类"看似边缘场景"实则高频触发。

3. **错误信息可操作性差**：#36590 直接点出"unknown certificate verification error"对终端用户不友好，需要提供 VPN/代理故障的可执行指引。

4. **平台特定 Bug**：TUI 在 ImDisk RAM 盘上加载 DLL 失败（#36502）、RTL 排版破坏路径前缀（#36489）、Windows 用户级 vs 全局安装冲突（#36527）—— 显示出**跨平台矩阵测试覆盖不足**。

5. **API 配额计费透明度**：#48330（Copilot 单条 prompt 烧光整月配额）暴露 v2 的 token/request 计算与 v1 行为不一致，社区呼吁 OpenCode 在 UI 中明示请求级消耗。

6. **进程隔离与可恢复性**：#36564（误触快捷键归档当前会话后无法找回）、#35986（GUI 因 SQLite 错误永久卡死）—— 用户对"撤销/恢复"机制的呼声持续高涨。

---

> 📊 **日报小结**：今日社区整体节奏属于"v2.0 质量冲刺"模式，开发者诉求从"加功能"转向"求稳定"。loop protection、跨平台可靠性、错误可观测性是下一阶段最值得关注的三大主线。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-11

> 数据来源：github.com/badlogic/pi-mono (earendil-works/pi)

---

## 1. 今日速览

过去 24 小时 Pi 仓库没有新版本发布，但社区活动密集：TUI 光标泄漏与全屏模式渲染问题持续走高（涉及多份 PR），`bedrock-converse` 的缓存与计费规范化成为热点（usage.input 归一化、1h 缓存写入计费），同时多条关键 PR 已合入（OpenAI 兼容网关 prompt cache key、Fable 5 失效 fallback 清理、DeepSeek V4.1 Flash 上线）。整体看，社区关注重点正从"功能可用"转向"行为正确性与成本精度"。

---

## 2. 版本发布

过去 24 小时无新 Release。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 重要性 |
|---|-------|------|------|--------|
| [#9323](https://github.com/earendil-works/pi/issues/9323) | Improve fireworks-specific config | CLOSED | 14 | Fireworks provider 配置精细化，是本月讨论最热烈的方向 |
| [#8061](https://github.com/earendil-works/pi/issues/8061) | Context budget 忽略 maxTokens 预留，重试失败 | OPEN | 8 | 影响 Gemini 等 1M token 长上下文模型，自动 compact-retry 链路断裂 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | 全屏模式滚轮比常规模式慢 3 倍 | OPEN | 8 | 全屏体验回归明显，👍 4，反映用户对 TUI 体验敏感 |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | Per-model compaction settings | CLOSED | 6 | 引入 `compaction.profiles` 按模型差异化配置，👍 5，已落地 |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | 扩展注册 provider 时偶发忽略 defaultProvider/defaultModel | OPEN | 5 | 扩展系统稳定性问题，影响所有自定义 provider 用户 |
| [#9294](https://github.com/earendil-works/pi/issues/9294) | claude-fable-5 内置 fallback 仍含已被 API 拒绝的 opus-4-8 | OPEN | 5 | 模型目录卫生问题，PR #9297 已跟进修复 |
| [#8752](https://github.com/earendil-works/pi/issues/8752) | bedrock-converse: usage.input 未按模型族归一化 | OPEN | 4 | 引发误报 cache miss 与输入成本翻倍，👍 5 |
| [#9257](https://github.com/earendil-works/pi/issues/9257) | `extractCursorPosition` 多 marker 未清理 | OPEN | 5 | TUI 显示污染源，PR #9441 已尝试根治 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) / [#9332](https://github.com/earendil-works/pi/issues/9332) | 全屏拖选光标行导致 marker 泄漏 | OPEN | 3 | 与 #9257 同根，多份报告印证 |
| [#9268](https://github.com/earendil-works/pi/issues/9268) | 空 alt 文本远程图片在 TUI 中不可见 | OPEN | 5 | Markdown 渲染边界条件，影响用户消息可读性 |

**社区反应观察**：长上下文与缓存计费类问题（#8061、#8752、#9294、#9457）持续获得高赞，开发者对**实际账单准确性**的关注超过单纯的功能新增。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 关键内容 |
|---|-----|------|---------|
| [#9461](https://github.com/earendil-works/pi/pull/9461) | fix(ai): 延后流式 tool 参数解析 | OPEN | 修复 #9265 的 O(n²) 问题，仅在访问 `.arguments` 时重解析（带版本缓存），避免嵌入运行时事件循环冻结 |
| [#9442](https://github.com/earendil-works/pi/pull/9442) | fix(ai): 兼容代理的 prompt cache key 支持 | OPEN | 新增 `compat.supportsPromptCacheKey` 选项，让 OpenAI 兼容代理可在短保留期下接收 session key |
| [#9297](https://github.com/earendil-works/pi/pull/9297) | fix(ai): 移除无效的 Fable 5 fallback | CLOSED | 清理 opus-4-8 失效 fallback，统一生成 fallback 元数据；同步在 models.dev 提议模型化 |
| [#9443](https://github.com/earendil-works/pi/pull/9443) | fix(ai): 捕获并回放 Gemini thoughtSignature | CLOSED | openai-completions 流式路径不再丢失 Gemini 思维签名，工具调用多轮一致性提升 |
| [#9441](https://github.com/earendil-works/pi/pull/9441) | fix(tui): 阻止光标 marker 泄漏 | OPEN | 将 APC 光标 marker 视为位置元数据而非样式，修复 #9257、#9332 |
| [#9459](https://github.com/earendil-works/pi/pull/9459) | fix(coding-agent): resume 时优先采用记录的模型变更 | OPEN | 基于 `@pwguler` 诊断，优先 `model_change` 事件而非常规 message 模型，修复跨模型续聊失忆 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): 允许扩展向 session 系统提示追加 | OPEN | 扩展可声明 `systemPromptAppend`，按 handler 顺序收集、含元数据/裁剪/快照合并 |
| [#9425](https://github.com/earendil-works/pi/pull/9425) | feat(ai): 新增 DeepSeek V4.1 Flash | CLOSED | 同步官方 `deepseek-flash` 与 models.dev id `deepseek-v4.1-flash`，并启用 Flash 思维档位 |
| [#9431](https://github.com/earendil-works/pi/pull/9431) | feat(agent): 所有 tool call 默认 3 分钟超时 | CLOSED | 配合 #9460 bash 工具挂死场景，避免 agent 因单个工具永久阻塞 |
| [#9435](https://github.com/earendil-works/pi/pull/9435) | 为 provider baseUrl 添加值解析 | CLOSED | 为 #9422 提供草稿解决思路，支持 `${ENV_VAR}` 风格的 provider baseUrl |

---

## 5. 功能需求趋势

从近 24h 更新以及仍在开放的 Issue 中提炼，社区关注集中在以下方向：

| 方向 | 代表 Issue / PR | 关注度 |
|------|----------------|--------|
| **TUI 全屏模式可用性** | #9052, #9332, #9257, #9441, #8744, #9438 | 🔥🔥🔥 滚轮/光标/覆盖层一连串回归 |
| **Bedrock 适配器正确性** | #8752, #9331, #9457, #9210 | 🔥🔥🔥 计费/推理努力/缓存归一化全部出问题 |
| **长上下文与自动压缩** | #8061, #8133 | 🔥🔥 1M token 窗口与 per-model 压缩档位 |
| **工具鲁棒性（超时 / OOM）** | #9276, #9460, #9431, #8682 | 🔥🔥 真实运行场景下的稳定性 |
| **扩展 API 能力扩展** | #8810, #9434, #9462, #9301 | 🔥 notify/系统提示/会话亲和等扩展诉求 |
| **模型目录卫生与新模型支持** | #9294, #9394, #9425, #9437, #9297 | 🔥 opus 移除、DeepSeek 加入、opencode-go 头 |
| **Windows / 跨平台一致性** | #9361, #9464 | 🔥 shellPath 解析与 TUI 行重复 |
| **CLI 输入校验** | #9045 | 单点但具脚本化价值 |

---

## 6. 开发者关注点

综合 30 条热门 Issue 与 20 条 PR 的反馈，开发者社区的**高频痛点**与诉求可归纳为四点：

1. **账单与缓存计数必须精确**  
   `bedrock-converse` 与 Vercel AI Gateway 的 `cacheWrite1h` 长期被错误计为 5m 价（#9210、#9457）；不同模型族 `usage.input` 定义不同导致成本翻倍（#8752）。开发者要求 `calculateCost` 与 token 归一化统一而非逐个 provider 特判。

2. **长上下文模型的容错链**  
   接近 1M 窗口下，#8061 揭示出"预留 400 token + 自动重试"链路会双重失败；GPT 5.6 的 prompt cache 早失效（#8463）以及 DeepSeek 的 400/413 误判为上下文溢出（#8682），都反映出**错误分类与重试策略**仍是痛点。

3. **TUI 渲染正确性回归**  
   全屏模式（#9052、#9332）、光标 marker（#9257、#9441）、overlays 不覆盖图像（#9438）、Windows conhost 行重复（#9464）——TUI 的边界条件正成批浮现。社区希望底层渲染从"文本流"升级到"对象层切片"。

4. **扩展系统需要更明确的契约**  
   `ctx.ui.notify` 的 last-wins 语义被多位扩展作者吐槽（#9462），`session_start` 不能追加系统提示（#9432 → #9434），provider 注册的 default 偶发失效（#8810）。社区期待**显式的扩展 API 表面**而非隐式行为。

5. **超时与资源护栏缺位**  
   bash 工具无默认超时让会话被挂死的子进程拖垮（#9460 → #9431），grep 带 context 行导致 OOM（#9276）——开发者呼吁为所有工具加上**默认安全护栏**。

---

> 📌 **编辑备注**：今日修复类 PR 节奏密集（多围绕 Bedrock/TUI/OAI-compat），与社区反馈高度同步；建议关注 PR #9461、#9441 的合并节奏，它们分别针对事件循环冻结与全屏 marker 泄漏两个反复出现的体验回归。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-09-11**

---

## 📌 今日速览

今日 Qwen Code 发布了 **v0.23.3** 版本，核心变化是扩展了 Kimi、Qwen 与 DeepSeek 的推理预设（reasoning presets）。社区讨论焦点集中在三大方向：**VS Code 扩展的会话历史兼容性**（多个高优先级 P1/P2 Bug）、**Daemon 性能瓶颈**（workspace 注册上限、git status 轮询延迟），以及**Desktop 客户端技术栈迁移**（Electron → Tauri 的正式提案）。

---

## 🚀 版本发布

### v0.23.3（CLI 主版本）
- **核心变更**：扩展 Kimi、Qwen 与 DeepSeek 的推理预设 ([#11349](https://github.com/QwenLM/qwen-code/pull/11349))
- **Breaking Changes**：无
- 同步发布 nightly 版本 `v0.23.3-nightly.20260910.c46cb85cf2`

### Desktop v0.3.0
- 新增定时执行桌面打包的 CI 任务 ([#11519](https://github.com/QwenLM/qwen-code/pull/11519))
- 修复 bridge 模块挂起的权限/队列问题

### SDK TypeScript v0.1.12
- 捆绑 CLI 版本 0.23.3 / 0.23.2，从源码构建

> 📎 [完整 Release 列表](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#8102](https://github.com/QwenLM/qwen-code/issues/8102) — 确定性工具执行边界的可信 Agent Runtime 提案
- **作者**: chiga0 |  18 评论 | ️ P3 / feature-request / need-discussion
- **重要性**：这是近期讨论最热烈的设计级提案，提出将 LLM 置于"信任边界之外"，让 Runtime 确定性约束、授权和评估模型行为。社区已就此展开深度架构讨论，是 Agent Runtime 演进路线的方向性议题。

### 2. [#8182](https://github.com/QwenLM/qwen-code/issues/8182) — Daemon 内存授权未按子进程数分配
- **作者**: doudouOUC | 💬 7 评论 | ️ P2 / bug / performance
- **重要性**：`qwen serve` 给每个 ACP 子进程分配主机 50% 的 V8 old-space 但未按子进程数分摊，多工作空间部署存在 OOM 风险。

### 3. [#7771](https://github.com/QwenLM/qwen-code/issues/7771) — Desktop 持久化 MCP 配置未在启动时加载到主进程代理
- **作者**: rishavkumar-thecoder |  7 评论 | 🏷️ bug / MCP（已关闭待回归）
- **重要性**：影响 Qwen Desktop 的 MCP Server 重启恢复能力。

### 4. [#8596](https://github.com/QwenLM/qwen-code/issues/8596) — 弃用 Electron Desktop，将 Tauri desktop-shell 重命名为 desktop
- **作者**: pomelo-nwu |  6 评论 | 🏷️ P2 / need-discussion / roadmap
- **重要性**：明确了 **Tauri 才是未来桌面端的方向**，决定冻结旧 Electron 包、收回 desktop 命名权。这是平台技术栈层面的战略变更。

### 5. [#11386](https://github.com/QwenLM/qwen-code/issues/11386) — Daemon 工作空间上限 25 的扩展方案
- **作者**: doudouOUC | 💬 5 评论 | ️ P2 / daemon
- **重要性**：基于实测数据修订建议——采用注册与运行时解耦的 LRU 方案，使工作空间突破 25 上限。

### 6. [#11574](https://github.com/QwenLM/qwen-code/issues/11574) — VS Code 扩展历史对话框硬编码 sourceType，旧会话全部消失
- **作者**: Luolingli | 💬 5 评论 | ️ P2 / VS Code / session-management
- **重要性**：升级到 0.23.x 后老会话不可见的兼容性 Bug，影响大量用户的历史会话查询。

### 7. [#11489](https://github.com/QwenLM/qwen-code/issues/11489) — VS Code 扩展升级丢历史（v0.21.x → v0.23.x）
- **作者**: alper-cevik | 💬 5 评论 | ️ P1 / bug
- **重要性**：P1 级，影响从旧版升级的所有 VS Code 用户，会话数据迁移存在隐患。

### 8. [#11359](https://github.com/QwenLM/qwen-code/issues/11359) — Daemon REST/SSE API 文档整合
- **作者**: pomelo-nwu | 💬 5 评论 | 🏷️ P3 / documentation / need-discussion
- **重要性**：面向集成商的 API 索引需求，将影响第三方集成的易用性。

### 9. [#9693](https://github.com/QwenLM/qwen-code/issues/9693) — Qwen Desktop Windows 启动时 MCP -32000 连接关闭
- **作者**: Gui8092 | 💬 5 评论 | ️ P2 / MCP / Windows
- **重要性**：STDIO 传输的 MCP Server 在 Windows 平台连接问题，跨平台兼容性关键。

### 10. [#11577](https://github.com/QwenLM/qwen-code/issues/11577) — Goal 检查点失败时重试同一请求导致 Goal 终止
- **作者**: qqqys |  3 评论 | 🏷️ P2 / core / ready-for-human
- **重要性**：当证据窗口溢出时，checkpoint 不会变更策略，导致 stall breaker 误停，Goal 状态机稳健性问题。

---

## ️ 重要 PR 进展（Top 10）

### 1. [#11594](https://github.com/QwenLM/qwen-code/pull/11594) — feat(workflow): 支持通过原生工具执行预制流程
- 允许应用预制 task-flow 脚本并通过原生 Workflow 工具让当前 agent 执行，包含可选的步骤 ID 关联与快照恢复能力。

### 2. [#11086](https://github.com/QwenLM/qwen-code/pull/11086) — feat(serve): 扩展按 Workspace 运行时作用域划分
- 把全局扩展目录接入每个 workspace 的运行时，更新扩展管理、`@` 菜单与 SDK 接口。

### 3. [#11584](https://github.com/QwenLM/qwen-code/pull/11584) — fix(vscode): 列出 panel 历史中所有 workspace 会话
- 移除 `sourceType` 过滤，恢复 VS Code、终端、Web Shell 及旧客户端会话的统一展示，**直接对应 #11574 的用户反馈**。

### 4. [#11521](https://github.com/QwenLM/qwen-code/pull/11521) — feat(core): 支持外部模型推理 Profile
- 为 provider 模型声明类型化推理 profile、effort 子集与默认值，统一 Chat Completions、Responses、Anthropic、Gemini 与 UI 控件。

### 5. [#11241](https://github.com/QwenLM/qwen-code/pull/11241) — feat(browser-use): 基于 Playwright 的 Browser SDK
- 在持久 Node REPL 中提供类型化 Browser SDK，控制现有 Chrome 会话。语义化 Playwright locator、DOM snapshot ref、视觉坐标三路寻址。

### 6. [#11592](https://github.com/QwenLM/qwen-code/pull/11592) — docs(daemon): 发布 REST API 参考文档
- 推出 OpenAPI 3.1 权威文档与人读参考，扩充协议说明与集成示例，**对应 #11359 的需求**。

### 7. [#11606](https://github.com/QwenLM/qwen-code/pull/11606) — fix(dashscope): 仅对 qwen 系列模型发送请求 metadata
- 解决 DashScope OpenAI 兼容网关聚合转发时，非 Qwen 模型（如 GLM-5.3-Flash）因 metadata 字段反序列化失败返回 400 的问题。**直接修复 #11590**。

### 8. [#11562](https://github.com/QwenLM/qwen-code/pull/11562) — fix(cli): 一次性系统提醒不再回显到用户消息
- 交互终端折叠到 prompt 开头的一次性提醒，不再写入 transcript、↑-recall 历史或取消后的 composer 文本。

### 9. [#11578](https://github.com/QwenLM/qwen-code/pull/11578) — fix(goal): 剥离代码块围栏并重试验证器
- checkpoint 验证器从更多不可用答复中恢复，对 markdown 围栏包裹的回复做线性扫描剥离，**配合 #11577 的修复**。

### 10. [#11567](https://github.com/QwenLM/qwen-code/pull/11567) — fix(core): 让 Responses 推理重放数据止于原生协议
- 给 `Part.thoughtSignature` 增加 OpenAI Responses 重放 payload 形态识别器，避免跨 provider 误解析。

---

## 📈 功能需求趋势

| 方向 | 热度 | 代表性 Issue |
|---|---|---|
| **VS Code 扩展 IDE 集成** | 🔥🔥 | #11574、#11489、#11556、#11558、#11511、#11514 |
| **Daemon 性能与可扩展性** | 🔥🔥🔥 | #8182、#11386、#11591、#9316 |
| **MCP 跨平台稳定性** | 🔥🔥 | #9693、#9675、#11460、#10056 |
| **桌面端技术栈迁移（Electron → Tauri）** | 🔥🔥 | #8596 |
| **Web Shell / Daemon API 文档化** | 🔥 | #11359、#11592 |
| **新模型 / 推理 Profile 支持** | 🔥 | #11521、#11590 |
| **跨 Provider 兼容（DashScope 等聚合网关）** |  | #11590、#11606 |
| **运行时替代（Bun）评估** | 🌱 | #11607 |

---

## 💡 开发者关注点

### 痛点高频词

1. **会话/历史兼容性**：VS Code 扩展升级后大量用户的会话历史无法查看（多个 P1/P2 Issue），需统一 metadata schema。
2. **Daemon 资源分配与轮询开销**：内存授权粒度、git status 反复刷新、provider 接口重复拉取等性能问题密集出现。
3. **MCP on Windows**：STDIO 传输的连接关闭、SSE 聊天挂起、Filesystem MCP 首次交互后卡死等问题在 Windows 平台集中爆发。
4. **多 Provider 兼容性**：DashScope 聚合网关对 `metadata` 字段的强校验暴露了"为单一厂商优化的请求头对其他厂商反噬"的问题。
5. **Goal 状态机鲁棒性**：Checkpoint 在异常窗口下的同请求重试策略需具备形态识别能力。

### 社区呼吁

- **统一会话元数据 schema**，跨 VS Code / Web Shell / 终端 CLI / Desktop。
- **Daemon 暴露更多可调旋钮**（如 `QWEN_SERVE_MAX_WORKSPACES`），将硬编码常量转为环境变量。
- **MCP 在 Windows 上的诊断与重连机制**需从随机走向系统化。
- **Desktop 路线图明朗化**：Electron 冻结、Tauri desktop-shell 接棒已是社区共识，期待 PR #8596 推进。

---

> 📅 本日报基于 GitHub `QwenLM/qwen-code` 仓库过去 24 小时数据自动生成。共监测 **50 条** Issue 与 **50 条** PR 更新，筛选展示高互动量与高优先级条目。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-11** | 数据源：github.com/Hmbown/DeepSeek-TUI

---

## 一、今日速览

今日社区聚焦两大主线：**模型迁移与测试稳定性**。一方面，DeepSeek 官方宣布将于 9 月 14 日下架 V4 Pro 服务并切换至 V4.1 Flash，引发社区对默认模型解析、推理流泄漏等问题的高度关注；另一方面，`codewhale-tui` lib 套件密集爆发出并行测试 flaky、栈溢出、ABBA 死锁、配置隔离泄漏等多起测试基础设施问题，0.9.13 集成 PR #6002 已收尾但仍待清理。整体节奏显示项目正从"功能叠加"进入"质量收敛"阶段。

---

## 二、版本发布

过去 24 小时内无新版本发布。但需重点关注即将到来的版本压力：

- **0.9.13 候选已就绪**：PR #6002 整合了本次发布周期内的贡献者修复与验证工作，集成内容涉及 Provider 目录分页、OpenRouter vendor 选择、输出限制与定价校验等。
- **DeepSeek V4 Pro 即将下线**：9 月 14 日 12:00（北京时间）后，所有 Pro 请求将被路由至 V4.1 Flash 并按 Flash 价格计费。Issue #6025 / #6043 / #6044 涉及该迁移的若干边界。

---

## 三、社区热点 Issues

以下按重要性与社区关注度排序：

### 1. [#6025 DeepSeek V4 Pro 服务下线公告](https://github.com/Hmbown/Codewhale/issues/6025)（3 评论 · OPEN）
社区意义重大：DeepSeek 官方将于 9 月 14 日下架 V4 Pro 并切换至 V4.1 Flash。直接影响所有默认模型解析、计费策略、用户配置路径，需在 3 天内完成所有客户端侧的默认路由与文档更新。

### 2. [#5929 并行执行 flaky 测试追踪（6 个失败用例）](https://github.com/Hmbown/Codewhale/issues/5929)（5 评论 · OPEN）
6 个 lib 测试在高负载下各失败一次，隔离通过、重跑通过。`RUST_MIN_STACK=16777216` 下完整矩阵重跑成本高达 25 分钟，是当前 CI 最大的成本与噪音源。

### 3. [#6011 增强：TUI 使用与工具诊断（按组件/模型 token 统计、缓存命中率、压缩成本）](https://github.com/Hmbown/Codewhale/issues/6011)（4 评论 · OPEN）
属于 C11 核心执行计划的一部分。社区对"按 sink 拆分的工具调用成本"与"压缩成本可视化"反馈积极，是 TUI 可观测性的重要拼图。

### 4. [#5988 测试栈溢出：2 MiB libtest 线程栈不足](https://github.com/Hmbown/Codewhale/issues/5988)（4 评论 · CLOSED）
`nextest` 的 per-process 隔离隐藏了该问题，导致 CI 与本地 cargo test 行为不一致。已 CLOSED，解决方案需配合 #5929 一并落地。

### 5. [#6004 Hook 无法观察会话状态（idle / fatal-error / waiting-for-user）](https://github.com/Hmbown/Codewhale/issues/6004)（4 评论 · CLOSED）
现有 11 个 hook 事件缺少会话级状态钩子，限制了自动化工作流对 TUI 行为的可观测性。已 CLOSED，预计纳入 0.9.14 候选。

### 6. [#6045 用户输入弹窗裁剪与不可逆问题](https://github.com/Hmbown/Codewhale/issues/6045)（3 评论 · OPEN）
141×38 终端下选项被截断、底层对话不可见、操作不可回退。属于真实终端下的可用性缺陷，影响所有 `request_user_input` 调用。

### 7. [#6018 Google Gemini "从零安装"故障](https://github.com/Hmbown/Codewhale/issues/6018)（3 评论 · OPEN）
属于 C22 计划。同时催生了 #6048（Google thought-signature 在非官方路由下的 400 错误）。

### 8. [#5932 测试隔离泄漏：onboarding 测试污染真实 `~/.codewhale/setup_state.json`](https://github.com/Hmbown/Codewhale/issues/5932)（3 评论 · CLOSED）
严重等级高：测试 fixture 写入了真实配置文件。已修复，但反映出测试沙箱体系的根本性缺陷。

### 9. [#6007 OpenRouter 原生 vendor 选择](https://github.com/Hmbown/Codewhale/issues/6007)（3 评论 · CLOSED）
增强类需求，已 CLOSED，预计随 0.9.13 一并发布。

### 10. [#6016 恢复会话看不到新建的 provider/model](https://github.com/Hmbown/Codewhale/issues/6016)（3 评论 · CLOSED）
属于 C13 计划，已 CLOSED。需要刷新模型选择器与路由刷新逻辑。

### 值得额外关注的新开 Issue
- [#6049 libtest 全量死锁：env barrier × workshop guard ABBA](https://github.com/Hmbown/Codewhale/issues/6049)（0 评论 · OPEN）—— 5285/12390 处冻结，14 个 worker 全部 park，CPU 归零
- [#6043 deepseek-flash 已声明为默认但未注册到 deepseek provider](https://github.com/Hmbown/Codewhale/issues/6043)（1 评论 · OPEN）—— `codewhale model resolve deepseek-flash` 直接失败
- [#6044 deepseek-flash 推理仍泄漏到 prose：stream decoder 按子串判断](https://github.com/Hmbown/Codewhale/issues/6044)（0 评论 · OPEN）—— 推翻了 `10aa19570` 的修复
- [#6036 "Fleet" 与 "agent" 概念重复存储](https://github.com/Hmbown/Codewhale/issues/6036)（1 评论 · OPEN）—— 创始人亲自点名的概念混乱

---

## 四、重要 PR 进展

### 1. [#6002 整合 Codewhale 0.9.13 贡献者修复与发布验证](https://github.com/Hmbown/Codewhale/pull/6002)（CLOSED · 9-10）
本周期最大合并。涵盖 Provider 目录分页与精确路由、OpenRouter vendor 选择、输出限制与定价校验、bundled Computer Use 等。

### 2. [#5973 feat(tui)：bottom chrome 的 compact / hidden 预设](https://github.com/Hmbown/Codewhale/pull/5973)（CLOSED · 9-10）
关闭 #5950。`[tui].posture_bar` 与 `[tui].metrics_line` 接受 `full | compact | hidden`，可通过 `/config` 实时切换并 `--save` 持久化。

### 3. [#5726 feat(tui)：checkpoint live provider 目录与路由用量](https://github.com/Hmbown/Codewhale/pull/5726)（CLOSED · 9-10）
集成 checkpoint 分支。包含 Baseten、live catalog plumbing、provider-scoped route identity。仅剩 CodeQL dismissal 待处理。

### 4. [#6012 fix(session)：自动标题生成跳过 runtime handoff 信封](https://github.com/Hmbown/Codewhale/pull/6012)（CLOSED · 9-10）
修复会话标题中出现 `<codewhale:runtime_event ...>` 而非真实 prompt 的问题。

### 5. [#5859 文案优化：错误、选择器、启动界面更清晰简练](https://github.com/Hmbown/Codewhale/pull/5859)（CLOSED · 9-10）
15 个语言包未触动，仅 `en.json` 值变更；117/117 locale + golden 测试通过，vocab 脚本无警告。

### 6. [#5982 feat(tui)：model_bound 凭证脱敏的明确 opt-out](https://github.com/Hmbown/Codewhale/pull/5982)（CLOSED · 9-10）
解决开发场景下"必须看到自己生成的 API key"的痛点，新增 `[redaction] model_bound` 确认开关。

### 7. [#5946 feat(fleet)：通过 summary 与 saved-session reply 暴露交付物](https://github.com/Hmbown/Codewhale/pull/5946)（CLOSED · 9-10）
`codewhale exec` 元数据新增 `visible_final_answer_excerpt`，便于子代理完成后展示有意义的回执。

### 8. [#6027 / #6026 chore(deps)：dependabot 升级 js-yaml 与 @vitest/mocker](https://github.com/Hmbown/Codewhale/pull/6027)（OPEN · 9-10）
常规依赖升级：`@vitest/mocker` 4.1.9 → 5.0.0；`js-yaml` 4.3.1 → 4.3.2。

---

## 五、功能需求趋势

通过对过去 24 小时 48 条 Issue 的聚类，社区诉求呈现以下五条主线：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **TUI 可用性与可视化** | #6045（弹窗裁剪）、#5950（bottom chrome 配置，已闭）、#6041（footer 重复计时）、#6042（Markdown 下划线误伤 LaTeX） | ⭐⭐⭐⭐⭐ |
| **Provider / 模型治理** | #6025（V4 Pro 下线）、#6043（deepseek-flash 未注册）、#6044（流式解码器误判）、#6018 / #6048（Google）、#6007 / #6016（OpenRouter / 路由刷新） | ⭐⭐⭐⭐⭐ |
| **测试基础设施** | #5929、#5988、#5932、#6049 | ⭐⭐⭐⭐ |
| **会话状态可观测性 / Hook** | #6004（会话状态事件）、#6011（token 诊断）、#6047（auto-compact 触发条件） | ⭐⭐⭐⭐ |
| **MCP / 插件稳定性** | #6030（MCP 中途认证失效）、#6031（插件提示无法永久关闭）、#5974（重认证冻结 TUI）、#6040（OAuth 注销无效） | ⭐⭐⭐ |

隐藏主线：**上下文与压缩管理**——#6008（/purge 增加 offload）、#6047（auto-compact 触发时机错误）显示出社区对"长会话内存治理"的持续关注。

---

## 六、开发者关注点

综合创始人直接反馈（#6025、#5932、#6031、#6036、#6041、#6042、#5974、#6040）与高频 Issue，可归纳出当前开发者最痛的 5 个点：

1. **默认模型解析的"声明—实现"不一致**：`codewhale models` 列出 deepseek-flash 为默认，但 `model resolve` 失败；`deepseek-flash` 已在 catalog 中注册 reasoning 能力却仍在 prose 中泄漏推理。详见 [#6043](https://github.com/Hmbown/Codewhale/issues/6043) 与 [#6044](https://github.com/Hmbown/Codewhale/issues/6044)。

2. **测试基础设施不可信**：libtest 栈溢出、ABBA 死锁、fixture 污染真实 home 目录，导致 CI 与本地行为分歧，矩阵重跑成本不可接受。详见 [#5929](https://github.com/Hmbown/Codewhale/issues/5929) / [#6049](https://github.com/Hmbown/Codewhale/issues/6049) / [#5932](https://github.com/Hmbown/Codewhale/issues/5932)。

3. **概念与数据模型冗余**："Fleet" 与 "agent" 同义却双份存储，scout 在两个 store 中并存；配置隔离、namespace 与 session-resume 之间的关系不清。详见 [#6036](https://github.com/Hmbown/Codewhale/issues/6036)。

4. **会话中断与恢复的可靠性**：resume 后看不到新 provider/model、agent followup 丢失 profile 的 provider pin、OAuth 注销无法切换 workspace。详见 [#6016](https://github.com/Hmbown/Codewhale/issues/6016) / [#6046](https://github.com/Hmbown/Codewhale/issues/6046) / [#6040](https://github.com/Hmbown/Codewhale/issues/6040)。

5. **交互层的"不可逆"陷阱**：用户输入弹窗不可滚动、不可回退、不可关闭（22 行硬上限）；插件安装提示"dismiss"仅本次有效，每次新会话都重新询问。详见 [#6045](https://github.com/Hmbown/Codewhale/issues/6045) / [#6031](https://github.com/Hmbown/Codewhale/issues/6031)。

---

*日报生成基于 GitHub Issues/PRs 公开数据。如需订阅特定方向的 Issue 追踪，可关注对应 label（如 `bug`、`enhancement`）或参与对应 Core Execution Packet（C11 / C13 / C22 等）。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*