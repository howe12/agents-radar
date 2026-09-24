# AI CLI 工具社区动态日报 2026-09-24

> 生成时间: 2026-09-24 02:40 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告
**报告日期：2026-09-24**

---

## 一、生态全景

当前 AI CLI 工具赛道已进入 **"GPT-6 时代 + 多 Agent 平台化"双主线并行** 的成熟期：一方面，GPT-6 Sol/Luna/Flash 系列模型在 24 小时内被 Codex、Copilot CLI、Gemini CLI 三家同步接入，模型选型已成基础设施级竞争；另一方面，Qwen Code、DeepSeek TUI、Gemini CLI 均在加速从"单进程 CLI"向"分布式多 Agent 协作平台"演进（A2A、Shared Thread、Mesh）。与此同时，**权限安全、Auto-Memory 可观测性、MCP 协议可靠性**正在成为跨工具的共性短板，社区反馈高频集中在 YOLO 模式误删数据、记忆不可见、MCP 误判断连等具体事件上。整体而言，工具差异化已从"能不能用"过渡到"可控、可观测、可治理"。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | 今日 Issues 关注 | 今日 PR 更新 | 整体活跃度 | 关键特征 |
|------|---------|----------------|-------------|-----------|---------|
| **Claude Code** | v2.1.281 | 10 条 | 5 条 | 🟡 中 | 稳定迭代，PR 数偏低，重在企业网关 |
| **OpenAI Codex** | v0.156.1 + 6 个 alpha | 10 条 | 10 条 | 🟢 高 | 双轨并行：稳定热修 + 密集 alpha 预发布 |
| **Gemini CLI** | v0.61.0 / preview / nightly 共 4 个 | 10 条 | 10 条 | 🟢 高 | 一日 4 版本，发布节奏最快 |
| **GitHub Copilot CLI** | v1.0.89-1 | 10 条 | 1 条 | 🟡 中（仅 PR 偏少） | 模型驱动型，社区活跃但 PR 维护式 |
| **Kimi Code CLI** | 无 | 2 条 | 0 条 | 🔴 低 | 沉寂期，但安全事件 #2596 重要 |
| **Pi** | 无 | 12 条 | 12 条 | 🟢 高 | 维护者主导，扩展 API 治理密集 |
| **Qwen Code** | v0.24.4-nightly | 10 条 | 10 条 | 🟢 高 | 架构级 PR 集中，体现平台化野心 |
| **DeepSeek TUI** | 无新版本（0.10.1 收尾） | 10+ 条 | 10+ 条 | 🟢 极高 | 维护者单日铺出 13 张路线图 Issue |

> **数据说明**：活跃度综合考虑 Issue/PR 数量、版本发布节奏、维护者参与度。DeepSeek TUI 的 Issue/PR 几乎全部由维护者 Hmbown 单人产出，是"集中规划型"活跃的典型。

---

## 三、共同关注的功能方向

以下需求在多个工具的社区中同时出现，反映行业共性痛点：

### 3.1 🧠 Auto-Memory 可观测性
- **Claude Code** #82056：memory 加载状态不可见（54 评论）
- **Gemini CLI** #26516/#26522/#26523/#26525 系列：脱敏、敏感字段、重试行为需要确定性
- **共识**：当 Auto-Memory 成为 CLI 的核心卖点时，"是否真的加载了"必须可观测

### 3.2 🪟 Windows 桌面/集成稳定性
- **Claude Code** #7618（VS Code 抢焦点）、#93782（WSL2 粘贴回归）、#90872-#90877（Desktop 自动更新群组）
- **OpenAI Codex** #46986（发送按钮卡死）、#46744（插件加载失败）、#47695（沙箱凭证）
- **Qwen Code** #11848（NTFS 64-bit inode）、#12270（bwrap sandbox）
- **Pi** #9361（shellPath 竞态）、#9497（CJK IME）
- **共识**：跨平台体验中，**Windows 是几乎所有工具的共同短板**

### 3.3 🔌 MCP 协议可靠性
- **OpenAI Codex** #45317（API Key 认证）、Browser 集成相关
- **Qwen Code** #12496（-32601 误判断连）、#12531（权限规则绕过）、#12258（大 App 支持）
- **GitHub Copilot CLI** #4901（OAuth 注册回环）
- **共识**：MCP 正在从"加分项"变为"事实标准"，但协议层错误处理、权限边界仍是反复踩坑点

### 3.4 🛡️ 权限与安全护栏
- **Kimi Code CLI** #2596：YOLO 模式下 Agent 误删用户数据（P1 级别数据丢失事件）
- **DeepSeek TUI** #6473（Full Access 默认 per-session）、#6481（统一审批存储）
- **Claude Code** #96434（评审上下文越权读 secrets）
- **Qwen Code** #12514（session-commit 注册覆盖）、#11198（遥测未脱敏）
- **共识**：当 Agent 拥有真实文件系统权限时，**"危险路径"护栏** 成为差异化竞争力

### 3.5 🤖 子代理/多 Agent 体系
- **Gemini CLI** #22323（MAX_TURNS 误报 success）、#21409（generalist 挂死）、#21968（不愿调度 sub-agent）
- **Qwen Code** #12582（A2A 跨机器）、#11206（Mesh 共享线程）
- **DeepSeek TUI** #6488（六个模型视角差距评估）
- **共识**：从"Sub-agent 可用"到"Sub-agent 可控可观测"是新一轮攻坚

### 3.6 ⌨️ TUI/终端体验细节
- **Claude Code** #22073（多行粘贴丢换行）、#92959（日文 IME）
- **OpenAI Codex** #44561（Astra 星效动画 95+ 👍，被吐槽"屏幕坏了"）、#17793（Backspace 多删）
- **Gemini CLI** #21924（Ink resize 闪烁）、#29358（Ctrl+R 高亮错位）
- **共识**：开发者对 TUI 的审美与稳定性要求极高，"默认炫技"几乎一定会被反对

### 3.7 💰 Prompt Cache 与成本可控性
- **Claude Code** #88444（Fork 必 cache miss）、#90018（`totalTokensReminder` 强制打破 cache）
- **Pi** #9210（1h 缓存按 5m 计费）、#9075（compaction 思考继承导致截断）
- **共识**：Prompt cache 是降本核心，但**任何无关开关都可能让命中率归零**——开发者急需"成本确定性"

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异化 |
|------|---------|---------|--------------|
| **Claude Code** | 企业级 AI 工程平台 | 大型组织、Bedrock/Enterprise 用户 | 强化 Gateway + Bedrock `assume_role`、Desktop 策略块，企业安全优先 |
| **OpenAI Codex** | 模型最丰富的桌面 AI | 全栈开发者、模型尝鲜者 | TUI + Desktop 双端，模型选择器为核心入口，Astra/视觉装饰激进 |
| **Gemini CLI** | 面向 Gemini 3 模型的 Agent Harness | 重度 Agent 工作流用户 | 强推 sub-agent 调度、Browser Agent、AST 感知代码理解；3.x Flash 模型生态完善 |
| **GitHub Copilot CLI** | GitHub 原生 Copilot 入口 | GitHub 深度用户、PR-centric 团队 | 与 GitHub Actions / MCP / OAuth 深度集成，企业 manage-settings 为主线 |
| **Kimi Code CLI** | 轻量级 Coding CLI | 中文开发者、长上下文需求者 | YOLO 模式激进（也带来安全问题），目前更新节奏慢 |
| **Pi** | 扩展优先的 AI Coding CLI | 高级用户、扩展作者 | 扩展 API 作为一等公民，`#9901/#9948` 架构重构显示要走"可扩展多模态"路线 |
| **Qwen Code** | 分布式多 Agent 平台 | 企业研发团队、Agent 编排需求 | A2A / Mesh / Managed Runtime attestation 路线清晰，Java SDK + Web Shell 双轨 |
| **DeepSeek TUI** | 安全与权限优先的 TUI Harness | 对权限敏感的个人/团队 | Full Access 重设计、Auto-Review Guardian、Engine-owned 审批存储——把"安全 UX"当核心卖点 |

> **关键洞察**：传统工具靠"模型能力"竞争，新一代工具（Qwen Code、DeepSeek TUI、Pi）开始靠"**架构治理能力**"（多 Agent 编排、权限可控、扩展生态）竞争。

---

## 五、社区热度与成熟度

### 🟢 高活跃 / 快速迭代期
- **DeepSeek TUI（Codewhale）**：单日 42 Issues + 41 PRs，维护者一次性铺出 0.10.2 + 0.11 共 13 张路线图 Issue，处于 **"集中规划期"**，未来 1-2 个季度会快速收敛。
- **Qwen Code**：PR 集中度高（#12582 A2A、#11206 Mesh），架构级别变更密集，**正在从 CLI 工具进化为 Agent 平台**。
- **OpenAI Codex**：0.158 通道连发 5 个 alpha、GPT-6 三模型接入，**迭代节奏在所有工具中最快**。
- **Gemini CLI**：一日 4 版本，sub-agent / Browser Agent / AST 三大主线齐头并进。
- **Pi**：维护者密度高、PR 数量稳定，扩展 API 治理是当前核心议程。

### 🟡 中活跃 / 稳定维护期
- **Claude Code**：PR 数量偏低（5 条），但每条都是企业级修复，**走"少而精"路线**。
- **GitHub Copilot CLI**：社区反馈（17 Issue 集中关闭）显示处于**清理老问题 + 接入新模型**的稳态。

### 🔴 低活跃 / 潜在风险
- **Kimi Code CLI**：仅 2 条 Issue、0 PR，且 #2596 数据丢失事件尚未见修复公告。**活跃度与潜在风险呈反向关系**——这是开发者最需要警惕的工具之一。

### 📊 成熟度梯队
1. **第一梯队（生态成熟）**：Claude Code、OpenAI Codex、GitHub Copilot CLI —— 模型多、文档全、企业用户沉淀
2. **第二梯队（平台化攻坚）**：Gemini CLI、Qwen Code、Pi —— 在扩展性/Agent 化方向做架构投入
3. **第三梯队（差异化突围）**：DeepSeek TUI、Kimi Code CLI —— 在权限安全或垂直场景寻找突破口

---

## 六、值得关注的趋势信号

### 📡 信号 1：GPT-6 三模型分层已成事实标准
24 小时内 **Sol / Luna / Flash** 同步登陆 Codex、Copilot CLI，Claude Opus-5-5 也在 Pi 接入讨论中（#9978）。**模型分层（旗舰 / 平衡 / 极速）正在取代"单一最强模型"叙事**，开发者应关注三层模型在 Prompt 缓存、工具调用、限流策略上的差异。

### 📡 信号 2：Auto-Memory 是下一代 CLI 的分水岭
Claude Code、Gemini CLI、Qwen Code 都把 Auto-Memory 作为核心卖点，但社区反馈集中在 **"记忆不可观测"**。率先解决"用户能知道模型记住了什么、何时被截断、敏感字段如何处理"的工具将建立显著护城河。

### 📡 信号 3：MCP 协议已从实验进入生产攻坚
不到一天就有 Codex / Qwen / Copilot 三家暴露 MCP 相关 Issue。MCP 的"连接可靠性 + 权限边界 + OAuth 注册"三大问题一旦解决，将成为整个生态的协议级标准；建议开发者**优先选择 MCP 兼容性已验证的工具链**。

### 📡 信号 4：Agent 权限安全是"沉默的杀手"
Kimi Code #2596 的误删数据事件、Claude Code #96434 的评审越权读 secrets、Qwen Code #11198 的遥测未脱敏——**当 Agent 拥有真实写权限时，安全事故的代价比传统软件更高**。开发者应主动配置沙箱、避免长期 YOLO 模式、保留关键路径白名单。

### 📡 信号 5：多 Agent 协作从 demo 走向工程化
Qwen Code 的 Mesh + A2A、Gemini CLI 的 sub-agent 重设计、DeepSeek TUI 的 Agent 视角评估——**多 Agent 不再是 PPT 概念**，而是具体的"共享线程 / 远端注册 / 信任边界"工程问题。提前理解 Agent-to-Agent 协议栈的开发者将在 6-12 个月内获得显著优势。

### 📡 信号 6：Windows 平台的"二等公民"问题在加剧
从 Claude Code 的 Desktop 自动更新、Codex 的发送按钮卡死、Qwen Code 的 NTFS inode、Pi 的 shellPath 竞态——**几乎所有工具的 Windows 体验都明显落后于 macOS/Linux**。如果你的开发环境以 Windows 为主，建议优先选择 Windows 投入度高的工具（如 Copilot CLI），或主动配置 WSL2。

### 📡 信号 7：开发者开始用"配置即代码"思维看待 CLI
Qwen Code #12466（按 prompt 查工具调用）、Pi #9880（JSON Schema）、Claude Code #79150（code-review README 同步）——**开发者越来越要求 CLI 配置可审计、可版本化、可在 IDE 内补全**，这与 IaC 趋势一脉相承。

---

## 七、给技术决策者的建议

| 场景 | 推荐工具 | 核心理由 |
|------|---------|---------|
| **大型企业 / Bedrock 用户** | Claude Code | Gateway + IAM 角色代理 + Desktop 策略块 |
| **模型尝鲜 / 多模型对比** | OpenAI Codex | 模型选择器最丰富，TUI/Desktop 双端 |
| **Agent 重度工作流** | Gemini CLI | sub-agent + Browser Agent 体系最完整 |
| **GitHub-centric 团队** | GitHub Copilot CLI | Actions/MCP/OAuth 深度集成 |
| **高级扩展作者** | Pi | 扩展 API 是核心

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据范围：anthropics/skills 仓库，截至 2026-09-24
> 说明：PR 列表按评论数排序（实际评论数在数据中显示为 `undefined`，以下分析基于排序位次 + 最近更新时间 + 关联 Issue 综合判断）；50 条 Issues 中前 15 条评论数明确。

---

## 一、热门 Skills 排行（Top PRs）

按关注度排序，重点梳理功能独特或讨论链最长的 PR：

| # | Skill | 核心功能 | 社区焦点 | 状态 |
|---|-------|---------|---------|------|
| 1 | **#1703 md2video-audio** | Markdown → MP4 视频（带 AI 配音） | 零成本内容生产工作流，扩展 Claude 输出形态 | [OPEN] |
| 2 | **#525 pyxel** | Python 复古游戏开发、调试与验证 | 让 Claude 掌握无文档小众框架，补充长尾用例 | [OPEN] |
| 3 | **#514 document-typography** | 文档排版质量控制（孤行/寡行/编号错位） | 解决"AI 生成的文档排版总是别扭"的痛点 | [OPEN] |
| 4 | **#822 AWT (AI Watch Tester)** | 视觉 + 浏览器控制的零代码 E2E 测试 | 测试自动化的新范式，替代传统录制回放 | [OPEN] |
| 5 | **#486 ODT** | OpenDocument 创建、模板填充、HTML 解析 | 填补 LibreOffice / ODF 生态空白，与 docx 形成对照 | [OPEN] |
| 6 | **#1615 scnet-hpc** | SCNet HPC 集群的 SSH + Slurm 工作流 | 国家级超算场景，企业级垂直落地 | [OPEN] |
| 7 | **#1771 proofcore-contract-auditor** | Solidity/Rust 合约静态分析 + TON 链上存证 | Web3 审计场景，触及加密经济基础设施 | [OPEN] |
| 8 | **#1776 blast-radius** | 批量/破坏性写操作前的检查清单 | 在"数据查得对"与"批量操作后果"之间补一道闸 | [OPEN] |

🔗 链接（按上表顺序）：
- https://github.com/anthropics/skills/pull/1703
- https://github.com/anthropics/skills/pull/525
- https://github.com/anthropics/skills/pull/514
- https://github.com/anthropics/skills/pull/822
- https://github.com/anthropics/skills/pull/486
- https://github.com/anthropics/skills/pull/1615
- https://github.com/anthropics/skills/pull/1771
- https://github.com/anthropics/skills/pull/1776

> 隐藏线索：**Top 20 中有 5 条是 docx 相关 fix**（#538/#541/#1734/#1790/#1792），说明 docx 是当前最高频被使用、且最需要工程加固的 Skill。

---

## 二、社区需求趋势（Issues 提炼）

按 Issue 评论数排序，提炼社区诉求：

### 🔒 1. 信任与命名空间安全（最高优先级）
- **#492**（43 评论）— 社区 Skill 以 `anthropic/` 命名空间分发，冒充官方，存在信任边界风险。
  https://github.com/anthropics/skills/issues/492

### 🏢 2. 企业级 Skill 分发
- **#228**（16 评论，👍8）— Claude.ai 组织内 Skill 一键共享，避免 .skill 文件人工流转。
  https://github.com/anthropics/skills/issues/228

### 🛠 3. Skill 评估基础设施的可靠性
- **#556**（12 评论，👍7）— `run_eval.py` 触发率恒为 0%，导致优化失真。
- **#1487**（4 评论）— `claude-api` skill 单次注入 156k tokens，挤爆上下文。
- **#1390**（4 评论）— `mcp-builder/evaluation.py` 对真实 MCP 服务器恒得 0/N 分。
  https://github.com/anthropics/skills/issues/556 | https://github.com/anthropics/skills/issues/1487 | https://github.com/anthropics/skills/issues/1390

### 🧠 4. 元能力与新型 Skill 提案
- **#1329**（10 评论）— `compact-memory`：用符号化表示压缩 agent 长程记忆。
- **#1385**（4 评论）— 三段式质量门控：校准 → 对抗审查 → 交付验证。
- **#412**（CLOSED，6 评论）— `agent-governance`：policy / 威胁检测 / 审计。
  https://github.com/anthropics/skills/issues/1329 | https://github.com/anthropics/skills/issues/1385 | https://github.com/anthropics/skills/issues/412

### 📦 5. 打包、安装与可移植性
- **#189**（6 评论，👍9）— `document-skills` 与 `example-skills` 重复安装同一批 Skill。
- **#1362**（3 评论）— `web-artifacts-builder` 在 pnpm ≥10.1 上失败。
  https://github.com/anthropics/skills/issues/189 | https://github.com/anthropics/skills/issues/1362

### 🌐 6. 平台与协议互操作
- **#29**（4 评论）— 在 AWS Bedrock 上使用 Skills。
- **#16**（4 评论）— 把 Skill 暴露为 MCP Server，统一信令层。
  https://github.com/anthropics/skills/issues/29 | https://github.com/anthropics/skills/issues/16

**趋势归纳**：社区当前最热的诉求集中在 *「可信分发」*（命名空间+企业共享）、*「可观测」*（评估器真实有效）和 *「元能力」*（治理、记忆、质量门）三个维度，单纯"再多一个工具类 Skill"的边际收益在下降。

---

## 三、高潜力待合并 Skills（活跃但尚未合入）

按"最近更新时间 ≤ 7 天 + 仍 OPEN"筛选，这些

---

# Claude Code 社区动态日报

**日期：2026-09-24** | 数据来源：github.com/anthropics/claude-code

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.281**，核心更新集中在 **Claude apps gateway**（新增对新版 Claude Desktop 密钥策略块的支持以及 Bedrock `assume_role` IAM 角色代理）。社区层面，**插件系统、Auto-memory 透明度、VS Code / WSL2 回归、Prompt 缓存命中率** 这几个方向是开发者反馈最集中的议题；其中"为 Plugins 增加 rules 支持"功能请求（#14200）获得 **108 👍**，成为本月最受关注的 Enhancement。

---

## 🚀 版本发布

### v2.1.281（2026-09-24）

**Claude apps gateway 增强（`desktop` 策略块）**
- 新增 `blockReadsOutsideWorkingDirectories`：限制 Claude 仅能读取工作目录内的文件
- 新增 `disableBypassPermissionsMode`：强制关闭"绕过权限"模式

**Bedrock 上游 IAM 角色代理**
- 网关新增 `assume_role` 配置：调用方以 IAM 角色身份调用 Bedrock，便于企业按角色做权限隔离和审计

🔗 [Release v2.1.281](https://github.com/anthropics/claude-code/releases/tag/v2.1.281)

> 此外，PR #96487 同步更新了 telemetry 模块，从 `$.session.version()` 中读取 `version / base / builtAt`，确保自定义构建也能上报引擎版本。

---

## 🔥 社区热点 Issues

按 **互动量（评论 + 👍）× 时效性** 排序，精选 10 条：

| # | Issue | 关注理由 |
|---|-------|---------|
| 1 | **[#14200]** [FEATURE] Add rules support to Plugins | 👍 **108** · 💬 36 — 社区呼声最高的增强请求，希望 Plugins 能像 CLAUDE.md 一样加载规则文件；目前开放已久仍未合并 |
| 2 | **[#82056]** Auto-memory index 加载状态不可见 | 💬 **54** — 会话内无法判断 memory 索引是"完整加载 / 截断 / 未加载"，影响依赖 memory 的工作流可信度 |
| 3 | **[#22073]** [BUG] TUI 终端复制粘贴丢失换行 | 👍 **79** · 💬 19 — 经典体验型 bug，多行粘贴只保留首行，high-diff 标签下长期未修 |
| 4 | **[#22931]** [BUG] Cowork 归档聊天丢失 | 👍 **38** · 💬 42 — 归档后聊天无法找回，已有 8 个月仍未解决 |
| 5 | **[#7618]** [BUG] /ide 启动时 VS Code 抢焦点 | 👍 **38** · 💬 22 — 即使没打开终端，外接 Claude Code 也会把焦点劫持到 VS Code |
| 6 | **[#93782]** [REGRESSION] 2.1.269 后 WSL2 集成终端粘贴失效 | 💬 15 — Wispr Flow 等听写工具在 VS Code + WSL2 下无法插入文本，**2.1.268 正常**，是确认的回退 |
| 7 | **[#88444]** [BUG] Fork 会话丢失 Prompt Cache | 💬 8 — 恢复 fork 后必然 cache miss，前缀仍存活却被迫全量重写，对成本影响显著 |
| 8 | **[#90018]** [BUG] `totalTokensReminder` 强制打破 cache | 💬 4 · 👍 2 — 关掉该提醒后增量命中恢复，定位明确但未修复 |
| 9 | **[#87930]** [CLOSED] 2.1.228 Bedrock 流式回退非流式 | 💬 3 — 已关闭，但揭示了网关流式检测的脆弱性；吞吐腰斩 |
| 10 | **[#96566]** Model 拒绝所有网络安全相关任务 | 💬 0（24h 新建） — 用户报告 4 月起所有 cyber 主题都被拒，需 Anthropic 评估过保守策略 |

🔗 完整列表](https://github.com/anthropics/claude-code/issues)

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时仅 **5 个 PR 更新**，全部 OPEN，以下为完整列表：

| # | PR | 关键内容 |
|---|----|---------|
| 1 | **[#96487]** telemetry 行携带引擎版本 | 自定义构建/外部构建的 telemetry 行此前缺失 `version / base / builtAt`；改为从 `$.session.version()` 读取，依赖 2.1.281+ |
| 2 | **[#96434]** security-guidance：拒绝/含密文件不进入评审上下文 | 修复 #96276：Stop-hook、commit/push 评审通过 `git diff`/`git show` 拼装 prompt，可能把会话权限规则不允许读的 `secrets.yaml` 等文件带入模型 |
| 3 | **[#96363]** `git diff` 增加 `--no-color` | 仓库或个人 git 配置 `color.ui=always` 时，diff 体被 ANSI 转义清空，仅 shortstat/numstat 正常；强制关色可恢复 |
| 4 | **[#96364]** 嵌套 `AGENTS.md` 自动分页 Read 不再算"已送达" | 修复 Read 工具对超过 token 上限的大文件自动分页后，模型只看到第一页却误以为已加载整文件、后续 Read 不再附加的逻辑漏洞 |
| 5 | **[#79150]** 文档：让 code-review README 对齐当前实现 | README 仍描述已废弃的"blame/history 代理 + 0-100 评分 + 80 阈值"流程，需改为基于 validation 的命令 |

🔗 [查看 PR](https://github.com/anthropics/claude-code/pulls)

---

## 📈 功能需求趋势

从 50 条近期 Issue 中提炼的**社区最关注方向**（含粗略热度）：

1. **🧩 Plugins / Skills 体系完善**（高）
   - #14200 规则支持（108 👍）、#92031 Web/Desktop 端插件同步差异，是本月最热的扩展性议题

2. **🧠 Auto-Memory 透明度**（高）
   - #82056（54 💬）反映出开发者需要明确 memory 是被截断还是完整加载，避免基于幻觉做决策

3. **🪟 Desktop App 体验**（高 · 多平台）
   - 会话侧边栏分组不稳定 (#92179)、Artifacts 缩放劫持 (#91377)、自动更新重启打断会话（#90872-#90877）、MSIX Squirrel 上报 (#96389) 等集中在 Windows MSIX / 自动更新链路

4. **🖥 IDE 集成 / 终端交互**（中高）
   - VS Code 焦点劫持 (#7618)、WSL2 粘贴回归 (#93782)、日文 IME 候选窗 (#92959)、VS Code 历史会话渲染丢尾部消息 (#95656)

5. **💰 成本 / Quota / Plan**（中）
   - #92137 提议推出 50x/100x Max 档位（解释为何用户走多账号绕路）；#94694 周用量 banner 在 54% 误触发；#88444 / #90018 cache miss 直接推高成本

6. **🔐 跨账号会话与权限**（中）
   - #92135 跨账号会话消息、#96566 安全相关任务被整体拒绝，暴露出企业/个人多账号用法与模型策略之间的摩擦

7. **🌐 Bedrock / Gateway 集成**（中低 · 企业侧）
   - #87930 流式回归、#96434 评审上下文越权，与 v2.1.281 新增的 `assume_role` 一起构成企业部署主线

---

## 🧑‍💻 开发者关注点

**最痛的 5 个高频反馈：**

1. **🪲 Desktop 自动更新 = 静默中断会话**（#90872-#90877 群组）
   单根因引发 8+ 缺陷：本地会话被云端 Remote Control 自动注册、session card 在进程死后仍显示活跃、更新窗口早于 `autoUpdaterEnforcementHours` 触发、`disableAutoUpdates` 同时隐藏手动检查入口等。**用户被迫反复重建会话**。

2. **🎯 Prompt Cache 命中率不可控**（#88444、#90018）
   Fork 恢复、token 余量提醒这类**看似无关的功能开关**会导致 cache 强制 miss、上下文重写，开发者无法预测成本。提示 token 工程的确定性在下降。

3. **🧩 Plugins 不一致**（#14200 + #92031）
   Skills 在账号级可同步，Plugins 在 Claude Code on the web 上 `plugins_sync=0`，CLI/Desktop 之间无统一语义。"扩展"的边界尚未稳定，开发者不愿深度投入。

4. **🖱 TUI/终端体验细节长期未修**（#22073、#7618、#92959）
   复制粘贴、焦点劫持、IME 候选窗——这些**高频但低成本修复**的问题，从 2025 年拖到 2026 年仍在影响日常可用性。

5. **🧠 Auto-memory 不可观测**（#82056）
   54 条评论的根源是：memory 是 Claude Code 的"长期记忆"卖点，但会话内**没有任何信号**告诉模型"我现在用的是完整记忆还是残片"，这直接削弱了 memory 的可信度。

---

*日报由社区 Issue/PR 数据自动汇总生成；观点仅基于公开 GitHub 讨论，不代表 Anthropic 官方立场。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-09-24**

---

## 📌 今日速览

GPT-6 系列模型正式落地 Codex 桌面端，rust-v0.156.1 热修将 **GPT-6 Sol** 与 **GPT-6 Luna** 纳入模型选择器，限流切换默认推荐 Luna。与此同时，社区对 **Astra 模型的"星效"动画**反馈强烈（累计 77+ 赞同），要求默认关闭的呼声压倒性领先；Windows 桌面端的多个长期 Bug（发送按钮卡死、插件加载失败、浏览器崩溃）持续发酵，0.158 alpha 通道连发 5 个预发布版本进行密集修复。

---

## 🚀 版本发布

### rust-v0.156.1（稳定版热修）
- 模型选择器新增 **GPT-6 Sol** 与 **GPT-6 Luna**
- 限流切换提示默认推荐 **GPT-6 Luna**
- 关联 PR：#47405
- 📎 [https://github.com/openai/codex/releases/tag/rust-v0.156.1](https://github.com/openai/codex/releases/tag/rust-v0.156.1)

### Alpha 通道（预发布）
| 版本 | 说明 |
|------|------|
| rust-v0.158.0-alpha.6 | 0.158 通道第 6 个预发布 |
| rust-v0.158.0-alpha.5 | 0.158 通道第 5 个预发布 |
| rust-v0.158.0-alpha.4 | 0.158 通道第 4 个预发布 |
| rust-v0.158.0-alpha.3 | 0.158 通道第 3 个预发布 |
| rust-v0.158.0-alpha.2 | 0.158 通道第 2 个预发布 |
| rust-v0.157.0-alpha.11 | 0.157 通道预发布 |
| rust-v0.155.0-alpha.16.4 / 16.3 | 0.155 通道维护更新 |

> 0.158 通道短时间连续迭代 5 个 alpha 版本，节奏明显加快，预计近期会发布稳定版。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [要求默认关闭 Astra "星效"动画 #44561](https://github.com/openai/codex/issues/44561)
- **作者**：EdenGottlieb · **评论 33 · 👍 77**
- 开发者普遍认为星效（whimsy / sparkle）干扰 TUI 状态判断，"看起来屏幕出错了"。**77 个👍** 是近期 Issue 中最高，热度模型升级是开发者对默认开启的视觉装饰强烈不满的集中体现。

### 2. [Windows Desktop 缺少 GPT-6 Astra 模型 #42853](https://github.com/openai/codex/issues/42853)
- **作者**：optimikelabs · **评论 36 · 👍 5**
- Pro 订阅用户在 Windows 桌面端找不到 Astra。今日发布的 v0.156.1 修复了 Sol/Luna，但 Astra 在桌面端的可见性问题仍在等待闭环。

### 3. [GPT-6 Astra 误判 prompt 违规 #43058](https://github.com/openai/codex/issues/43058)
- **作者**：maxiloEmmmm · **评论 21**
- Astra 模型将无害 prompt 标记为 `invalid_prompt`，触发 usage policy 警告。开发者普遍担忧误判影响自动化工作流。

### 4. [Backspace 一次删除多字符 #17793](https://github.com/openai/codex/issues/17793)
- **作者**：tokuchan · **评论 21 · 👍 5**
- 跨多版本长期存在的 TUI 输入问题（最早追溯到 0.120.0），影响 prompt 编辑体验。

### 5. [Chrome 浏览器集成拒绝 API Key 认证 #45317](https://github.com/openai/codex/issues/45317)
- **作者**：seaworld008 · **评论 17**
- Codex 浏览器扩展发现正常后，调任何 Chrome tab 都报 `unsupported Codex auth method: apikey`，影响基于 API key 的自动化场景。

### 6. [模型容量满无法切换 #46172](https://github.com/openai/codex/issues/46172)
- **作者**：Banishglory · **评论 17 · 👍 3**
- ChatGPT Plus 用户在 Windows 上持续遇到 `Selected model is at capacity`，结合今日限流切换默认推荐 Luna 的发布，反映当前模型容量供应紧张。

### 7. [Windows 发送按钮卡死 #46986](https://github.com/openai/codex/issues/46986)
- **作者**：siqi47-a · **评论 9**
- 26.915.4065.0 中 composer-state bug，与 #45885、#45626、#45307 等历史 bug 同源，至今未根治。

### 8. [macOS Codex Desktop 崩溃 SIGTRAP #30824](https://github.com/openai/codex/issues/30824)
- **作者**：kerimala · **评论 9 · 👍 2**
- FSEvents 关闭时崩溃，留下残留 helper 进程，自 26.623 版本起长期存在。

### 9. [Windows 26.915 插件加载失败 #46744](https://github.com/openai/codex/issues/46744)
- **作者**：UoA-Bryan · **评论 6**
- openai-bundled plugins 加载失败，导致 Browser / Computer Use / Image Gen 三大核心功能不可用。

### 10. [macOS 浏览器控制启动失败 #45950](https://github.com/openai/codex/issues/45950)
- **作者**：Svensonnn09 · **评论 5 · 👍 3**
- `node_repl` 退出码 65，`sandbox-exec: unbound variable: TIOCSTI`，macOS 沙箱与浏览器扩展协同问题。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#47717 修复模型选择器递归事件分发](https://github.com/openai/codex/pull/47717)
- 确认 Astra 模型选择时在 TUI 线程栈上递归 poll 大事件分发器。先 unwrap `AstraSelectedFromModelPicker` 再触发星效动画，**直接回应 #44561 星效问题**。

### 2. [#47714 选择性保留工具结果元数据](https://github.com/openai/codex/pull/47714)
- 超出元数据预算时不再一刀切替换为占位符，减少小结果被丢弃的情况，并保留资源访问证据。

### 3. [#47712 原子化统一 exec 输出缓冲区](https://github.com/openai/codex/pull/47712)
- 完成 transcript 与 pending 缓冲区共享 mutex，消除取消中断导致的 chunk update 不一致。

### 4. [#47709 / #47701 WebSocket 会话预热重构](https://github.com/openai/codex/pull/47709)
- 预热会话复用 client 缓存，支持空闲线程主动修复连接（`CodexThread::prewarm()`），减少每次 turn 的重复预热。

### 5. [#47703 保留 ChatGPT 后端账户网络策略](https://github.com/openai/codex/pull/47703)
- 修复 ChatGPT 后端请求绕过网络策略的漏洞，捕获凭证的请求也保留对应账户策略以支持吊销。

### 6. [#47686 / #47688 / #47689 / #47690 Guardian 上下文重构（系列）](https://github.com/openai/codex/pull/47686)
- 弃用 `features.guardianv2.thread_context`，默认使用线程拥有的 retained context；移除 legacy 授权证据路径与 `request_user_input` answer buffer。**4 个 PR 联动**，是近期最大的内部架构调整。

### 7. [#47683 执行器能力发现 V2 基础设施](https://github.com/openai/codex/pull/47683)
- 定义 `capabilities/discoverV2` 协议与 inventory 类型；服务启动时预热已安装插件与全局 skill，扫描失败问题也是非致命的。

### 8. [#47680 exec-server RPC 时序与进程启动追踪](https://github.com/openai/codex/pull/47680)
- 区分请求处理阶段与完整 span 生命周期，便于诊断 detached work 导致 span 悬挂。

### 9. [#47679 模型请求与响应流扩展钩子](https://github.com/openai/codex/pull/47679)
- 新增 `ModelRequestContributor` 与 `ModelResponseInterceptor`，扩展可在保留字段的前提下注入 `client_metadata`，并按请求粒度创建拦截器。**为第三方扩展接入 Codex 核心打开通道**。

### 10. [#47695 修复 Windows 沙箱凭证拒收](https://github.com/openai/codex/pull/47695)
- 注册的 Windows 沙箱账号密码被 Windows 拒绝时 setup 后还能显示完成；新增账号标志检查，**对 Windows 桌面稳定性是关键修复**。

---

## 📈 功能需求趋势

从今日 50 条活跃 Issue 归纳，社区诉求集中在五个方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **TUI 视觉与可用性** | #44561、#44640、#17793 | ⭐⭐⭐⭐⭐（Astra 星效 95+ 👍） |
| **Windows 桌面稳定性** | #46986、#46744、#45340、#47699、#47724 | ⭐⭐⭐⭐⭐（占比最高） |
| **GPT-6 系列模型体验** | #42853、#43058、#47041、#47420、#47656 | ⭐⭐⭐⭐ |
| **Browser / Computer Use 集成** | #45317、#45950、#42679、#45340 | ⭐⭐⭐⭐ |
| **跨平台扩展性** | #47357（VS Code Server）、#35248（移动端 Codex Live）、#46601（macOS Remote Control） | ⭐⭐⭐ |

---

## 💡 开发者关注点

1. **Astra 视觉装饰是头号痛点**：星效/闪烁动画默认开启被吐槽"屏幕坏了"（#44561 +#44640 累计 **95 个赞同**），官方需在产品决策上明确"开发者 ≠ 普通用户"的审美取舍。

2. **Windows 桌面是 Bug 重灾区**：50 条活跃 Issue 中带 `windows-os` 标签的超过 **1/3**，涵盖发送按钮、插件加载、浏览器启动、Computer Use 凭证等多个互不相关的问题，**桌面版质量明显落后于 CLI**。

3. **GPT-6 模型能力

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-24**
**数据源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

今天 Gemini CLI 仓库进入密集发布期，一天之内同时推进了 **v0.61.0 正式版**、**v0.61.0-preview.1**、**v0.62.0-preview.0** 以及两个 nightly 版本，节奏明显加快。同时最受社区关注的是 **PR #29443 合入了 Gemini 3.8 Flash / 3.5 Flash Lite 模型支持**，标志着最新一代 Flash 系列模型正式进入 CLI。Issue 方面，subagent 体系的稳定性、Auto Memory 系统的数据安全问题、以及 Browser Agent 在多场景下的兼容性问题仍是社区讨论主线。

---

## 🚀 版本发布

过去 24 小时内仓库发布了 4 个版本，发布节奏紧凑：

| 版本 | 类型 | 关键变更 |
|------|------|---------|
| **v0.61.0** | 正式版 | 整合 v0.60 / v0.59 系列变更日志，正式 GA |
| **v0.61.0-preview.1** | Preview 修复版 | cherry-pick #29443 (Gemini 3.x Flash 模型相关) 补丁 |
| **v0.62.0-preview.0** | Preview | a2a-server 在 unsupported store 上提前返回（[#29334](https://github.com/google-gemini/gemini-cli/pull/29334)） |
| **v0.62.0-nightly.20260924** | Nightly | VS Code 集成测试存在性检查、重连时显示重试进度指示器 |

🔗 [v0.61.0 Release](https://github.com/google-gemini/gemini-cli/releases) · [v0.62.0-preview.0](https://github.com/google-gemini/gemini-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — Subagent 触发 MAX_TURNS 后仍报告为 GOAL success（P1 / 13 评论）
   `codebase_investigator` 子代理在达到最大轮次前并未完成分析却向上层返回 `"success"` / `"GOAL"`，会隐藏真实中断原因。涉及子代理状态契约的正确性。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — Generalist Agent 挂死（P1 / 8 评论 / 👍8）
   当模型委派给 generalist agent 时，CLI 会无限挂起（最长等待 1 小时才被人工取消）。显式禁用 sub-agent 才能绕过。👍 票数最高，影响面广。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — 利用 Gemini 3 模型的"bash 直觉"做零依赖 OS 沙箱 + 后置意图路由（P2 / 9 评论）
   让模型以其原生方式（POSIX 工具链）工作的同时引入零依赖沙箱，是 Gemini 3 系列模型架构层面的核心优化方向。

4. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — Auto Memory 缺乏确定性脱敏（P2 / 5 评论 / 安全）
   自动记忆读取本地 transcript 后送给后台抽取模型，但敏感信息在进入上下文后才被 redact，存在日志外泄风险。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — Gemini 几乎不使用自定义 skills 和 sub-agent（P2 / 6 评论）
   模型即使在适合的场景下也默认不调度用户自定义技能，与设计预期偏差较大。影响"代理能力"落地的体验。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)** — Browser Agent 忽略 `settings.json` 覆盖配置（P2 / 4 评论）
   `maxTurns` 等配置在初始化时虽被读取但未真正生效，配置文件优先级问题。

7. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — Browser Agent 缺乏自动会话接管与锁恢复（P3 / 4 评论）
   persistent session 遇到锁时直接 fail-fast，需要更鲁棒的恢复策略。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — Browser sub-agent 在 Wayland 下失败（P1 / 4 评论）
   终止原因显示为 GOAL 但实际未完成，Wayland 桌面环境的 browser 子代理是当下兼容性短板。

9. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** — `~/.gemini/agents/*.md` 为 symlink 时不被识别为 agent（P2 / 4 评论）
   常见的 dotfiles 管理方式被打破，影响使用 GNU Stow / chezmoi 等工具的用户。

10. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — 评估 AST 感知的文件读取 / 搜索 / 代码库映射的价值（P2 / 7 评论）
    将工具从"正则+行号"升级为 AST 感知，从而减少读取偏差、控制 token 噪声，是当前 platform 团队重点 roadmap 项目。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#29443](https://github.com/google-gemini/gemini-cli/pull/29443) ✅ 已合并** — **新增 Gemini 3.8 Flash 与 Gemini 3.5 Flash Lite 模型支持**
   在 Flash 与 Flash Lite 层级推动新一代 GA 模型。是当周最重要的能力性变更，已 cherry-pick 进 v0.61.0-preview.1。

2. **[#29451](https://github.com/google-gemini/gemini-cli/pull/29451)** — 限制工具输出体积并优化长循环代理的内存生命周期（XL）
   解决 build/test 脚本类工具调用量大的多轮 agent 流程中 process memory 持续增长的问题。

3. **[#29468](https://github.com/google-gemini/gemini-cli/pull/29468) ✅ 已合并** — 连接恢复期间显示重试进度指示器
   修复 429/503 重试时 UI 一直卡在 "Thinking..." 的体验问题，已合入 v0.62.0-nightly。

4. **[#29359](https://github.com/google-gemini/gemini-cli/pull/29359)** — 修复 `web_fetch` 丢失表格行/列
   `html-to-text` 默认不渲染 `<table>`，导致模型收到被压平的字符串。补一个 `table` 选择器以保留结构化信息。

5. **[#29354](https://github.com/google-gemini/gemini-cli/pull/29354)** — 为 rootless podman 沙箱加上 `--userns=keep-id`
   解决 host UID/GID 映射带来的 `node-gyp` 重建失败和 EACCES。

6. **[#29358](https://github.com/google-gemini/gemini-cli/pull/29358)** — 修复 Ctrl+R 反向搜索高亮与原文不对齐
   `İ` 这类字符的小写偏移回写问题，加了回归测试。

7. **[#29265](https://github.com/google-gemini/gemini-cli/pull/29265) 🚪 已关闭** — 防止 turn 中断后污染会话上下文
   针对 SIGINT / timeout / 工具被 abort 后聊天历史被破坏的高严重度修复。

8. **[#29470](https://github.com/google-gemini/gemini-cli/pull/29470)** — v0.62.0-preview.0 自动 changelog
9. **[#29469](https://github.com/google-gemini/gemini-cli/pull/29469) 🚪 已关闭** — v0.61.0-preview.1 自动 changelog
10. **[#29352](https://github.com/google-gemini/gemini-cli/pull/29352)** — 完善 hooks 文档，补充 `ask` / `approve` 决策值说明（[#28977](https://github.com/google-gemini/gemini-cli/issues/28977)）

附：**[#19013](https://github.com/google-gemini/gemini-cli/pull/19013)** — 修复 Windows 平台更新扩展时的 `EBUSY` 文件锁错误（`#18884`），属于长期遗留的跨平台稳定性修复。

---

## 📈 功能需求趋势

从活跃 Issue 中提炼出当前社区最关注的几个方向：

- **🧠 Sub-agent 体系成熟化**：MAX_TURNS 状态契约、子代理调度意愿、bug 报告上下文补全（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），以及 Browser Agent 在 settings / Wayland / 锁恢复上的鲁棒性问题，构成最大的议题簇。
- **🛡 沙箱与安全边界**：[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 的零依赖 OS 沙箱方向 + [#29354](https://github.com/google-gemini/gemini-cli/pull/29354) 的 rootless podman 适配 + [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 的 Auto Memory 数据泄露面，反映出对企业级 / 多用户部署的安全焦虑。
- **🧬 新模型适配**：Gemini 3.8 Flash / 3.5 Flash Lite 落地后，sub-agent 和工具调用层面的 prompt 与上下文策略需要重新校准。
- **🧰 工具调用开销与精度**：>128 个工具触发 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）、临时脚本满天飞（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）、读取"消防水管"问题（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）都指向工具规模扩张后急需的"外科手术式"读取与执行策略。
- **🌳 AST 感知的代码理解**：codebase_investigator 升级（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）是 platform 团队正在评估的 roadmap 主题。
- **🗂 持久化任务追踪**：用文件替代 in-context todo 的方向（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#21000](https://github.com/google-gemini/gemini-cli/issues/21000)）契合上下文压缩与跨会话恢复需求。

---

## 💬 开发者关注点

汇总社区反馈中重复出现的痛点：

- **子代理调用不可控**：用户既希望 sub-agent 更聪明，又常被 generalist 挂死、"GOAL" 误报等破坏体验。Issue 中反复出现的是"模型自己不愿调度 sub-agent 和 skills"——这是产品设计层而非单纯 bug 的问题。
- **配置生效链薄弱**：`settings.json` 覆盖在 Browser Agent 上无效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、`/compress` 不跨会话持久化（[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)）等，反映配置 / 状态层抽象仍有缺口。
- **Auto Memory 链路需要可观测性**：SandyTao520 一连提了 4 个相关 Issue（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)），要求对低信号会话重试、无效 patch、敏感字段脱敏等做出确定性行为。
- **跨平台与终端体验**：Wayland、rootless podman、Windows 文件锁、Ink 渲染时 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）——跨平台细节持续拖慢稳定性。
- **Agent 自我认知**：[#21432](https://github.com/google-gemini/gemini-cli/issues/21432) 希望 CLI 能准确地说出自己的 flag / hotkey / 行为，反映出"AI 当自己用户文档"的体验仍未达标。

---

*🤖 由 AI 技术分析师自动整理 | 数据时间窗口：过去 24 小时*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**📅 日期：2026-09-24**
**📦 数据源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 1. 今日速览 🔥

今日 Copilot CLI 发布了 **v1.0.89-1** 版本，正式引入 **GPT-6 Sol** 与 **GPT-6 Luna** 双模型支持。同时，社区争议焦点集中在 **HTTP/2 GOAWAY 级联重试故障**（#2421，👍19）和 **DeepSeek API 接入**（#2995）两大长期未解的高赞议题。本日有 17 个老 Issue 集中关闭，PR 端仅有一条依赖 pin 更新，活跃度集中在模型生态与稳定性修复。

---

## 2. 版本发布 🚀

### v1.0.89-1（2026-09-23）

**🆕 新增（Added）**
- 模型选择器中新增 **GPT-6 Sol** 与 **GPT-6 Luna**（当服务可用时可见）

**🔧 修复（Fixed）**
- **View 工具**：当 provider 发送扁平的 `view_range` 参数时，正确按行范围渲染
- **本地会话输入体验**：空聊天输入框中按 `↑` 现可恢复待发送消息，已排队的 prompt 仍会保留在队列中

> 📎 详情：[Release Notes](https://github.com/github/copilot-cli/releases/tag/v1.0.89-1)

---

## 3. 社区热点 Issues 📋

以下按评论数与社区关注度精选 10 个最具价值的 Issue：

### 1. [Issue #2421] HTTP/2 GOAWAY 级联重试导致静默浪费 premium 配额 ⭐19 (CLOSED)
- **重要性**：高赞核心稳定性 Bug。undici HTTP/2 连接池在处理 server-sent GOAWAY 帧时存在竞态，导致已发出的请求被无谓重试并计费，且合并了 #1743/#1754/#2050/#2101/#2189 五份相关报告
- **链接**：[github/copilot-cli#2421](https://github.com/github/copilot-cli/issues/2421)

### 2. [Issue #2995] 无法使用 DeepSeek API ⭐9 (CLOSED)
- **重要性**：高呼声第三方模型接入需求，社区反复反馈通过 `COPILOT_PROVIDER_*` 环境变量无法驱动 deepseek-v4-pro
- **链接**：[github/copilot-cli#2995](https://github.com/github/copilot-cli/issues/2995)

### 3. [Issue #4535] `store_memory` 在 v1.0.81 prerelease 中失败 💬10 (CLOSED)
- **重要性**：记忆系统关键回归，由 GPT-5.6 Sol agent 完整记录，关系到 agent 长时记忆能力
- **链接**：[github/copilot-cli#4535](https://github.com/github/copilot-cli/issues/4535)

### 4. [Issue #2827] 改进所有类型速率限制的 UI ⭐9 (CLOSED)
- **重要性**：用户长期痛点，当前仅在 75%/90% 周限额时弹一次警告，缺乏实时可见的用量面板
- **链接**：[github/copilot-cli#2827](https://github.com/github/copilot-cli/issues/2827)

### 5. [Issue #1063] Zsh 补全与文档链接失效 ⭐7 (CLOSED)
- **重要性**：影响所有使用 `gh copilot` shell 集成的用户，文档页面迁移造成 `~/.zshrc` 初始化脚本中断
- **链接**：[github/copilot-cli#1063](https://github.com/github/copilot-cli/issues/1063)

### 6. [Issue #2682] 后台长耗时 shell 命令缺少实时输出视图 ⭐5 (OPEN)
- **重要性**：呼声较高的体验改进，5 分钟以上 `dotnet test` 等命令期间界面失联，主线程像是“卡死”
- **链接**：[github/copilot-cli#2682](https://github.com/github/copilot-cli/issues/2682)

### 7. [Issue #4521] Sandbox 配置显示禁用但实际仍启用 💬4 (CLOSED)
- **重要性**：权限/沙箱状态不一致，导致用户对行为预期错判，是 trust & safety 关键问题
- **链接**：[github/copilot-cli#4521](https://github.com/github/copilot-cli/issues/4521)

### 8. [Issue #4847] Managed-settings 自动刷新破坏 IDE MCP 重载（OPEN）
- **重要性**：长会话场景下托管策略刷新失败，进而 disable `/allow-all` 与 MCP server，对企业用户尤其关键
- **链接**：[github/copilot-cli#4847](https://github.com/github/copilot-cli/issues/4847)

### 9. [Issue #4003] CLI 支持自定义模型端点（类 VS Code）（OPEN）
- **重要性**：低星但高战略价值——是开源/本地推理与企业私有化部署的入口级能力需求
- **链接**：[github/copilot-cli#4003](https://github.com/github/copilot-cli/issues/4003)

### 10. [Issue #3331] 插件市场增加启动自动更新 flag 💬4 (CLOSED)
- **重要性**：面向企业插件分发方——缺少“marketplace 标记即自动更新”保证，使用方可能停留在旧版本
- **链接**：[github/copilot-cli#3331](https://github.com/github/copilot-cli/issues/3331)

---

## 4. 重要 PR 进展 🔀

> ⚠️ **说明**：今日过去 24 小时更新的 PR 仅有 **1 条**，且为自动化维护性变更。下文汇总本月值得回顾的近期 PR 主题，并标注今日唯一更新。

### 今日唯一 PR
- **[PR #4948]** *Update github-script action pin*（OPEN）
  - 将 `actions/github-script` 依赖更新至当前 v9.0.0 提交，纯维护性变更，无 runtime 影响
  - 📎 [github/copilot-cli#4948](https://github.com/github/copilot-cli/pull/4948)

### 本月热点 PR 主题速览（基于近期仓库活跃度）
虽然今日无新代码 PR，但社区讨论中频繁引用的方向包括：

| 方向 | 相关讨论 |
|---|---|
| 模型选择器扩展（GPT-6 双模型） | v1.0.89-1 已合入 |
| HTTP/2 重试链路修复 | #2421 |
| `--yolo` / `--allow-all` 启动时序修复 | #4844（OPEN） |
| Auth token 进程内自刷新 | #4929（OPEN） |
| MCP OAuth v2 注册回环修复 | #4901（OPEN） |

---

## 5. 功能需求趋势 📈

从近 24 小时活跃的 50 条 Issue 提炼，社区最关心的方向如下（按热度排序）：

1. **🧠 新一代模型生态接入**
   - GPT-6 Sol/Luna（今日 release ✅）
   - DeepSeek、Claude、自定义 OpenAI 兼容端点（#2995、#4003）
   - 自定义/本地模型直连——呼声与日俱增

2. **🛡️ 企业级安全与策略可控**
   - Sandbox 状态显示与实际行为一致（#4521）
   - Managed-settings / fail-closed 边界（#4847、#4844）
   - 本地 stdio MCP 在策略拉取失败时仍可用（#4512）
   - 进程本地 auth token 失效与重启恢复（#4929）

3. **🔌 MCP 生态与第三方 OAuth**
   - Atlassian MCP v2 OAuth 注册问题（#4901）
   - IDE MCP 重载与 `/allow-all` 联动（#4847）

4. **🎙️ Voice / 多模态运行时**
   - Foundry Local NuGet feed 401（#4667、#4814）——安装链路认证问题反复出现

5. **🧩 Agent / 自定义工具能力**
   - `web`/`search` 别名对自定义 agent 不生效（#4594）
   - `fleet.start()` 忽略 customAgents（#2261）
   - 后台 worker agent 可视化面板（#1783）

6. **⌨️ 会话与终端体验**
   - 后台长任务实时输出（#2682）
   - 终端主题色适配（#4843）
   - Session 切换快捷键（#3779）
   - 焦点失焦时键事件丢失（#4213）

7. **🔧 配置与可观测性**
   - 日志级别 crash（#4297）
   - 速率限制 UI（#2827，本次关闭）
   - 自动更新 pre-release 算法问题（#4605）
   - `--config-dir` 行为（#2197）

---

## 6. 开发者关注点 💡

综合 50 条更新 Issue，可以归纳出开发者当前最集中的几个痛点：

- **🔁 长会话稳定性**：HTTP/2 GOAWAY、auth token 不刷新、compaction 失败无限重试（#4663）——都会以“沉默”的方式消耗配额或丢失工作
- **🪟 配置与 UI 一致性**：Sandbox 状态、自动更新、终端主题、日志级别等“应该能改”的开关存在 hidden crash 或状态漂移，开发者最在意“可预期”
- **🤖 自定义 agent 的工具声明**：自定义 agent 的 `tools: web/search` 等别名静默无效（#4594），导致使用方完全无感——这是高级用户最多踩的暗坑
- **🔐 OAuth 与 MCP 注册回环**：Atlassian MCP v2 报 `redirect_uri not registered`（#4901），是较大企业开发者当前卡点
- **🌐 多模型互联**：DeepSeek、私有 OpenAI 兼容端点等接入需求没有官方答案，社区已反复提出
- **🎙️ Voice 安装链路**：Foundry Local NuGet 401 是近期的高频 crash，开发者难以自行绕过

> 一句话总结：**新模型（GPT-6）已就位，稳定性、可控性与第三方接入仍是 CLI 跨越“玩具到生产”那道坎的核心功课。**

---

*本日报由社区动态自动汇总生成，数据采样窗口为 2026-09-23 ~ 2026-09-24 UTC*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-24**

---

## 1. 今日速览

过去 24 小时内，Kimi Code CLI 仓库活跃度较低，**无新版本发布、无 PR 更新**。社区关注主要集中在两条 Issue 上，其中一条涉及 **Agent 在 YOLO 权限模式下误删用户数据的安全事件**，反映出社区对权限边界与沙箱机制的高度关注；另一条已关闭的 Issue 则是关于会话中途反复出现的鉴权失败问题。

---

## 2. 版本发布

⚠️ **无新版本发布**。过去 24 小时内未检测到任何 Release 活动。

---

## 3. 社区热点 Issues

> ⚠️ **说明**：过去 24 小时内仅 2 条 Issue 有更新，远少于常规的 10 条。以下呈现全部可用条目：

### 🔴 Issue #2596 — Agent 误删用户数据（严重安全问题）
- **状态**：OPEN | **评论**：1 | **👍**：0
- **作者**：iMaxTomas | **更新**：2026-09-23
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2596
- **重要性**：⭐⭐⭐⭐⭐
  - 在 YOLO 权限模式下，Agent 被指示清理 `~/.pi/agent/sessions` 中的 symlink，但因 `ln -sfn` 失败未察觉，随后执行 `rm -rf` 时波及用户真实数据目录，**直接删除用户会话数据**。
  - 暴露了 Kimi CLI 在**危险命令拦截、symlink 解析、YOLO 模式安全护栏**方面的潜在缺陷。
  - 该类问题可能引发数据丢失风险，是企业用户和重度开发者最关切的议题之一。

### ✅ Issue #1547 — 会话中途鉴权失败（已关闭）
- **状态**：CLOSED | **评论**：0 | **👍**：0
- **作者**：Philipp-Pfeiffer | **更新**：2026-09-23
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1547
- **重要性**：⭐⭐
  - 用户在使用 `kimi-for-coding` 模型（v1.24.0 / Linux）时，会话中途反复抛出 *"Authorization failed, please check your login status"* 错误。
  - 该问题已被标记关闭，**推测官方已发布修复或合并了相关补丁**，但社区对长会话 Token 过期与续期机制仍存疑虑。

---

## 4. 重要 PR 进展

⚠️ **无 PR 更新**。过去 24 小时内未检测到任何 Pull Request 活动。

---

## 5. 功能需求趋势

由于数据样本有限（仅 2 条 Issue），趋势分析基于全部历史 Issue 上下文与今日新增动态综合提炼：

| 趋势方向 | 描述 |
|---------|------|
| 🛡️ **Agent 安全与沙箱隔离** | 今日 Issue #2596 集中反映了社区对 Agent 在文件系统操作（尤其是 `rm -rf` 类危险命令）上缺乏二次确认与路径校验的担忧。**YOLO 模式的安全护栏** 是当前最迫切的功能改进方向。 |
| 🔐 **会话鉴权稳定性** | Issue #1547 揭示了长会话中的 Token 续签/鉴权异常，影响使用连续性，社区期望更稳健的登录状态管理与错误恢复机制。 |
| ⚙️ **执行结果校验** | Agent 应能更早察觉 symlink 创建失败等中间步骤异常，避免基于错误前提执行后续操作——这指向 **"失败可见性"与"状态回滚"机制** 的需求。 |

---

## 6. 开发者关注点

综合今日动态，开发者社区的核心反馈聚焦以下方面：

1. **数据安全红线**：`rm -rf` 类操作必须在执行前明确工作区边界，尤其是 YOLO 模式下需要引入**强制二次确认**或**白名单路径校验**。
2. **Agent 自省能力**：当中间命令失败时，Agent 应主动回溯并向用户报告，而不是"沉默地"继续后续步骤。
3. **鉴权与会话连续性**：长任务下的 Token 过期问题影响生产可用性，需要更细粒度的鉴权刷新策略与更友好的错误提示。
4. **跨平台稳定性**：Issue #1547 涉及 Linux 平台，提示团队在多平台兼容性测试上仍有提升空间。

---

> 📊 **数据小结**：今日仓库活跃度偏低（仅 2 条 Issue 更新，无 PR 与 Release），但 #2596 涉及的安全议题具有较高优先级，建议关注官方后续是否发布补丁或在 YOLO 模式中引入路径安全策略。
>
> 📌 报告由 AI 自动汇总，建议结合 GitHub 原页面查看最新进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-24

## 📌 今日速览

今日 Pi 仓库无新版本发布，活跃度集中在 **扩展 API 健壮性修复** 与 **跨平台兼容性打磨** 上：多个高优先级 Issue/PR 围绕扩展生命周期、`before_agent_start` 钩子、工具队列管理展开；Windows 与 X11 上的 CJK 输入、剪贴板粘贴等历史问题持续被细化。同时，#9948 合并的「图像/分类器模型基础设施统一」为 Pi 引入非聊天模型打开了大门，是架构层面最值得关注的进展。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 为何值得关注 |
|---|---|---|---|---|
| [#7885](https://github.com/earendil-works/pi-mono/issues/7885) | npm search 未索引新发布的 pi-packages | CLOSED | 14 | 暴露生态分发链路的核心障碍——新包自 8 月 4 日起无法被 npm 检索到，pi.dev/packages 画廊由此"冻结"。影响所有包作者，14 条评论是本周之最 |
| [#9361](https://github.com/earendil-works/pi-mono/issues/9361) | Windows：`shellPath` 在加载扩展时被非确定性忽略 | OPEN | 10 | 揭示扩展加载顺序与 PATH 回退逻辑的隐蔽竞态，直接把 bash 工具解析推到 WSL `bash.exe`，存在安全/正确性双重风险 |
| [#5294](https://github.com/earendil-works/pi-mono/issues/5294) | llama.cpp 后端"Request timed out"错误 | CLOSED | 9 | `httpTimeout = false` 仍超时，触及本地大模型推理的真实可用性问题，对自托管用户影响广泛 |
| [#9688](https://github.com/earendil-works/pi-mono/issues/9688) | 剪贴板复制回归 | CLOSED | 8 | 上一个修复的副作用——容器/无 SSH 会话场景下 OSC 52 回退被误删，是典型的"修一处坏一处"案例 |
| [#5581](https://github.com/earendil-works/pi-mono/issues/5581) | `pi.sendMessage(triggerTurn: true)` 绕过 `before_agent_start` | OPEN | 7 | 扩展 API 长期设计缺陷：自定义消息可直接驱动 agent loop，破坏事件链一致性；3 个 👍 |
| [#9674](https://github.com/earendil-works/pi-mono/issues/9674) | Mistral 对话：空 `content` 增量触发空白文本块 | OPEN | 6 | GLM 5.x 在 zai 后端上 400 报错根因；关系到 Mistral 原生 prompt cache 的可用性 |
| [#9098](https://github.com/earendil-works/pi-mono/issues/9098) | 在 RPC 响应中暴露 prompt disposition | OPEN | 5 | 让扩展/CLI 区分"已处理/已排队/已开始"，是 RPC 接口可观测性的关键补全 |
| [#9210](https://github.com/earendil-works/pi-mono/issues/9210) | Anthropic 1h 缓存写入按 5m 计费 | CLOSED | 5 | Vercel AI Gateway 下 `cacheWrite1h` 被错误清零，导致长保留缓存按 1.25× 价格被低估，财务影响显著 |
| [#9036](https://github.com/earendil-works/pi-mono/issues/9036) | openai-codex SSE 解析器整段缓冲导致堆 OOM | CLOSED | 5 | Node V8 致命堆溢出，macOS + Node 26.7.0 + Codex 流式响应；属于必须修复的稳定性 P0 |
| [#9784](https://github.com/earendil-works/pi-mono/issues/9784) | 元问题：扩展访问响应体中的厂商特定字段 | CLOSED | 5 | `AssistantMessage` 字段封闭导致扩展拿不到思考内容/工具原始数据，已由 PR #9901 解决 |
| [#9886](https://github.com/earendil-works/pi-mono/issues/9886) | `clearQueue()` 静默销毁扩展自定义消息 | OPEN | 4 | `clear + replay` 模式下消息丢失，影响"编辑已排队消息"这类高级扩展模式 |
| [#9075](https://github.com/earendil-works/pi-mono/issues/9075) | 压缩摘要继承会话思考等级导致输出截断 | OPEN | 4 | Anthropic adaptive 模型下思考 token 计入 `max_tokens`，高 effort 下确定性触顶；3 个 👍 |

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#9948](https://github.com/earendil-works/pi-mono/pull/9948) | feat(ai,coding-agent):统一图像与分类器模型基础设施 | CLOSED | 把模型系统从"仅聊天"扩展到支持图像生成/分类等异构模型，是面向多模态 Agent 的架构级重构 |
| [#6881](https://github.com/earendil-works/pi-mono/pull/6881) | feat(ai):优先使用响应中 provider 上报的成本 | OPEN | `openai-completions` 支持 `usage.cost` + Vercel Gateway 的 `cost_details.upstream_inference_cost`；目录价 fallback 保持不变 |
| [#8398](https://github.com/earendil-works/pi-mono/pull/8398) | feat:引入颜色值与主题样式系统 | OPEN | 重构 TUI 主题层暴露颜色 API，为后续非终端 UI（如 Web/Electron）铺路；保留旧 API 兼容 |
| [#9901](https://github.com/earendil-works/pi-mono/pull/9901) | feat:向扩展暴露 provider 流事件 | CLOSED | 通过 `onProviderStreamEvent` 将 `provider_stream_event` 注入扩展 API，关闭厂商字段访问受限的元 Issue |
| [#9459](https://github.com/earendil-works/pi-mono/pull/9459) | fix(coding-agent):恢复会话时优先采用已记录的 model_change | CLOSED | 基于 #9243 诊断修复：让 `model_change` 覆盖"最后一条 assistant 消息回显名"，恢复模型更可靠 |
| [#9941](https://github.com/earendil-works/pi-mono/pull/9941) | fix(coding-agent):abort unwind 期间的 steer 转为新 prompt | CLOSED | Esc 中断后立刻 Enter 的"丢消息"场景修复，避免 steer 进入未释放的队列导致丢失 |
| [#9956](https://github.com/earendil-works/pi-mono/pull/9956) | fix(tui):Enter 后立即绘制用户消息气泡 | CLOSED | 解决 Enter→气泡显示的延迟感：preflight 阶段就先绘制乐观气泡 + requestRender |
| [#9937](https://github.com/earendil-works/pi-mono/pull/9937) | Render startup extensions in a responsive grid | CLOSED | 启动扩展列表按宽度自适应栅格化，resize 时回流 |
| [#7948](https://github.com/earendil-works/pi-mono/pull/7948) | feat(coding-agent):延迟扩展运行时重载 | OPEN | `ctx.reload()` → `ctx.requestReload()`；合并多次重载、延后到 compaction/branch 后再替换 runtime，关闭 #8222 风格的不安全直重载 |
| [#9880](https://github.com/earendil-works/pi-mono/pull/9880) | feat(coding-agent):发布配置 JSON Schema | OPEN | 为 `models.json`/`settings.json`/`keybindings.json`/主题生成 schema，提升编辑器智能提示与配置验证 |
| [#9889](https://github.com/earendil-works/pi-mono/pull/9889) | fix(coding-agent):对齐清单资源发现 | OPEN | 修复包清单 `dot-relative` 模式匹配与扩展清单 glob/exclude 的对齐问题（156 个测试通过） |
| [#9957](https://github.com/earendil-works/pi-mono/pull/9957) | fix(tui):对 Kitty 协议图像行做四舍五入 | OPEN | 用 `Math.round()` 处理 Kitty 协议图像高度计算，部分场景下改善渲染毛刺 |

---

## 📈 功能需求趋势

1. **扩展 API 治理与稳定性（最热方向）**  
   `#5581` / `#9098` / `#9784` / `#9886` / `#9932` / `#9889` / `#7948` / `#9222` 共同指向扩展生命周期的多个薄弱点：事件链一致性（`before_agent_start`）、队列可观测性（prompt disposition / clearQueue）、重载并发安全、清单匹配一致性。`#9901` 与 `#[9784]` 已合并一项，趋势明确——扩展已从"加分项"演变为 Pi 的核心组件。

2. **跨平台与本地化**  
   `#9361`（shellPath/Win）、`#9497`（CJK IME/Win）、`#9786`（X11 剪贴板 `image/png` 探测）、`#9688`（OSC 52 回归）显示 Windows + 中文用户与 X11 桌面环境的体验差距仍在被逐项修补。

3. **模型生态扩张**  
   `#9978`（claude-opus-5-5）、`#9981`（Ollama `max` 思考）、`#9964`（GPT-6 上下文上限）、`#9674`（Mistral/GLM 5.x）、`#9506`（`samplingParams` 透传）——新模型接入、参数透传与思考分级仍是高频需求。

4. **成本与计费准确性**  
   `#9210`（1h 缓存错算）、`#6881`（provider 上报成本）、`#9757`（`parseChunkUsage` 字段裁剪）说明开发者越来越关注 token 计费透明度与扩展的二次计费能力。

5. **配置可验证性**  
   `#9880`（JSON Schema）与 `#9977`（storage conformance）反映配置即代码的需求上升，开发者希望 IDE 内补全 + 跨 runner 测试。

---

## 💬 开发者关注点

- **扩展真的能"信任"吗？** 多个 Issue 揭示 `sendMessage` / `clearQueue` / `setActiveTools` / `reload` 等扩展入口存在状态破坏风险，开发者呼吁建立更严格的扩展契约（#5581、#9886、#9932、#7948）。
- **"修了反而丢功能"的回归恐惧** —— #9688 剪贴板、#9243 模型恢复、#9036 OOM 都说明在流式/缓存/事件链复杂栈中，每次重构都需更细粒度的回归测试。
- **本地与自托管用户的体验短板** —— 超大模型超时（#5294）、compaction 思考继承（#9075）、Ollama `max` 静默回退到 `high`（#9981）暴露出自适应/本地模型路径下策略覆盖不全。
- **画廊/分发链路** —— npm 搜索不索引新包（#7885）直接抑制生态增长，是需要立刻协调 npm 侧解决的问题。
- **UI/输入流畅度的细节优化** —— Enter→气泡延迟（#9956 已修）、CJK 输入卡顿（#9497）、Kitty 图像渲染（#9957）表明 TUI 体验正成为下一阶段竞争焦点。

---

*日报数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（issue/PR 抓取时间窗口：2026-09-23 ~ 2026-09-24）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-24**

---

## 📌 今日速览

Qwen Code 发布了 v0.24.4 nightly 版本，重点修复了 deferred-tool bridge 在 prompt cache 保留场景下的失效问题。今日社区最活跃的话题集中在 **Windows 文件系统安全**（NTFS 64-bit inode 比较漏洞的连环 follow-up）、**MCP 协议可靠性**（-32601 误判、Server 权限规则绕过）以及 **Web Shell 多代理协作**（A2A、共享线程 Session、轨迹缩放）。整体方向显示项目正在从"单用户 CLI 工具"快速演化为"分布式多 Agent 平台"。

---

## 🚀 版本发布

### v0.24.4-nightly.20260923.d0cd622a68
夜间构建版本，主要变更：
- **fix(core,docs)**: 修正 deferred-tool bridge 中变陈旧或未测试的部分（#12355）
- **cua-driver-rs v0.20.11**: 内置 Qwen CUA Driver 预编译二进制
  - macOS：代码签名 + 公证 + 通用二进制 + `QwenCuaDriver.app`
  - Linux：x86_64 + arm64（glibc ≥ 2.31），未签名
  - Windows：x86_64 + arm64，UIAccess worker + 原生 SDK payload

链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.24.4-nightly.20260923.d0cd622a68

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#12061](https://github.com/QwenLM/qwen-code/issues/12061) — `useReactToolScheduler` 回调变更替换活动调度器（已关闭）
**优先级 P2 | 8 条评论**
核心 React Hook 在 `useLlmStream` 传入 inline 异步回调时，会因身份变化重渲染并替换掉仍持有活动批次的 `CoreToolScheduler`。生产环境实际触发可能丢失工具状态。该 Issue 已关闭（推测已修复），值得回看其修复方案以避免类似回调闭包问题。

### 2. [#12185](https://github.com/QwenLM/qwen-code/issues/12185) — web-shell 包发布带不可解析 `@/` 类型导入与缺失的运行时依赖（开放）
**优先级 P1 | 7 条评论**
`@qwen-code/web-shell` 被发布管线纳入后（#12178），其自身打包存在三处缺陷会原样下放到 npm 消费者。**P1 优先级**意味着这是阻断性问题，社区等待修复。

### 3. [#8835](https://github.com/QwenLM/qwen-code/issues/8835) — 2026-W33 仓库卫生审计报告（8 项问题）
7 条评论，包含 acpAgent 的 `..` 前缀越权路径等 8 项安全/卫生问题。属于持续推进的 repo-hygiene 治理，展示了项目对代码质量的自律。

### 4. [#11633](https://github.com/QwenLM/qwen-code/issues/11633) — ECS Runner 集群更新失败（已关闭）
6 条评论，目标版本 `0.23.3` 升级时两个池（ecs-update-hk-1, ecs-update-...）被遗留为旧版本。CI 基础设施类问题，修复后已关闭。

### 5. [#12514](https://github.com/QwenLM/qwen-code/issues/12514) — Session-commit 注册未覆盖所有提交通径（开放）
**P2 | 5 条评论**
源自 #12463 评审中明确"不在该 PR 修"的两个 review thread。意味着存在误判"非本会话提交"的 amend 拦截场景。安全相关的精确性 bug。

### 6. [#11848](https://github.com/QwenLM/qwen-code/issues/11848) — Windows 64-bit NTFS 文件 ID 使 `isSameFile` 失效（开放）
**P2 | 5 条评论**
两个文件身份比较器在 stat 时未传 `{ bigint: true }`，且 CLI 的可验证性谓词是 safe-integer 检查 → 在 2^53 以上文件 ID 上 fail open。这是 Windows 端的安全/正确性问题，今日 #12574、#12578 都是其衍生 follow-up。

### 7. [#12326](https://github.com/QwenLM/qwen-code/issues/12326) — `tools.eager` 是手工维护的静态列表（开放）
**P2 | 5 条评论 | roadmap/context-performance**
想取代当前 hand-maintained 的 eager tool 集合，由算法自动挑选 resident 工具集且不破坏 prompt prefix 缓存。配套 #12119 提供的测量尺。长期 context 性能优化的关键议题。

### 8. [#12272](https://github.com/QwenLM/qwen-code/issues/12272) — "agent" 函数描述过长（约 2000 token）（已关闭）
**P3 | 5 条评论**
每轮都发送的长描述浪费 token 预算。社区反馈强烈，已关闭表明有修复 PR 落地。

### 9. [#11198](https://github.com/QwenLM/qwen-code/issues/11198) — 默认开启的使用统计遥测上传未脱敏的 shell 命令（已关闭）
**P1 | 4 条评论**
**安全/隐私**问题：RUM 端点接收到原始 tool-error 文本，含 shell 命令行。比 #10916 影响的字段更广。P1 高优先级表明这是隐私事故级修复。

### 10. [#12496](https://github.com/QwenLM/qwen-code/issues/12496) — MCP 客户端将 tools-only 服务误标为断连
**P2 | 4 条评论**
当 MCP 服务器对 `prompts/list` / `resources/list` 返回 `-32601` 时被误识别为传输错误，导致正常的纯工具服务器被认为断开。**MCP 生态的关键稳定性问题**。

> 备选值得关注：[#12530](https://github.com/QwenLM/qwen-code/issues/12530)（Qwen Live 统一走 Web Shell 端点）、[#11937](https://github.com/QwenLM/qwen-code/issues/11937)（CI gh shim ESM 加载）、[#8666](https://github.com/QwenLM/qwen-code/issues/8666)（长轮询时排队消息指示器消失）。

---

## 🛠 重要 PR 进展（精选 10 条）

### 1. [#12582](https://github.com/QwenLM/qwen-code/pull/12582) — 让 Agent 跨机器运行并通过 A2A 共享
**作者：yiliang114 | 今日更新**
基于 #11206 的栈式 PR，新增"远端计算机运行 Agent"以及"工作区外通过 A2A 共享 Agent"。Agent 页面可发出一次性 join token 注册 Runtime。**项目迈向分布式 Agent 平台的标志 PR**。

### 2. [#12583](https://github.com/QwenLM/qwen-code/pull/12583) — Java Runtime Broker 在 dispatch lease 失效后仍能完成取消
**作者：wenshao | 今日新开**
通过新增 `invocations` 集合追踪 in-flight 调用，让 cancel 真正抵达 broker 进程内的调用，对应 #12584 的 bug 修复。

### 3. [#12492](https://github.com/QwenLM/qwen-code/pull/12492) — Agent 准备的 Batch API 工作流（`/batch-api`）
**作者：yiliang114**
承载 #11874 的 `qwen batch submit|status|fetch|cancel` 传输并构建 agent-prepared workflow。Agent 判断任务是否适合批处理 → 生成 manifest → 提交。降低用户使用成本。

### 4. [#12539](https://github.com/QwenLM/qwen-code/pull/12539) — 让 deferred-tool bridge 两个半边在同一个工具上解析
**作者：yiliang114**
修复 #11321 中 #10410 评审推迟的两个发现，使 `tool_search` 和 `tool_call` 用同一方式解析工具名。Prompt cache 保留链路的正确性回归。

### 5. [#12258](https://github.com/QwenLM/qwen-code/pull/12258) — MCP 支持更大 App、范围化工具调用、隔离 origin
**作者：samuelhsin | 今日更新**
远程 HTTPS 渲染器在 `d6d532eb8b` 已通过实际隔离 fixture 验证。**MCP 生态成熟度的关键里程碑**。

### 6. [#12531](https://github.com/QwenLM/qwen-code/pull/12531) — 阻止 MCP server 规则授权冲突服务
**作者：yiliang114**
`matchesMcpPattern()` 不再经过有损的 `sanitizeToolNameForProvider()`，直接对比字面前缀，关闭 MCP 权限绕过的潜在漏洞。

### 7. [#12552](https://github.com/QwenLM/qwen-code/pull/12552) — Java SDK：Managed Runtime 在 attestation 后才被采用
**作者：doudouOUC**
Broker 启动 worker → attest → 才记录 lease 为 ready。复用 ready 绑定会再次 attest；session-scoped 动词检查已采用进程。**Java SDK 安全姿态提升**。

### 8. [#11206](https://github.com/QwenLM/qwen-code/pull/11206) — Mesh：持久的共享线程 Agent 协作
**作者：yiliang114 | 今日更新**
Agent 持久身份 + 共享线程 + 任务路由/插话/取消/解决阻塞。#12582 即为该 PR 衍生的远程扩展。

### 9. [#12557](https://github.com/QwenLM/qwen-code/pull/12557) — Web Shell 轨迹概览支持缩放和平移
**作者：qqqys**
滚轮围绕指针缩放，按住空格拖拽平移。改善长 session 的可视化体验。

### 10. [#12466](https://github.com/QwenLM/qwen-code/pull/12466) — Web Shell：按 prompt 检查会话工具调用
**作者：ytahdn | 今日更新**
从用户消息打开会话级 Tool calls 面板，预选 prompt、行内 JSON 参数、MCP badge、状态/计时。**增强 Agent 运行可审计性**。

> 备选值得关注：[#12183](https://github.com/QwenLM/qwen-code/pull/12183)（从目录加载部署托管扩展）、[#12559](https://github.com/QwenLM/qwen-code/pull/12559)（OpenTUI 弹窗几何与补全截断对齐 ink）、[#9050](https://github.com/QwenLM/qwen-code/pull/9050)（多 workspace 会话恢复）、[#12542](https://github.com/QwenLM/qwen-code/pull/12542)（serve.channels 恢复失败上报）。

---

## 📈 功能需求趋势

从所有 Issues 中提炼出以下几条主线方向：

| 方向 | 代表 Issue | 关注点 |
|---|---|---|
| **多 Agent 协作 / A2A** | #12582 #11206 #12558 | 跨机器运行、共享线程、MemoryChanged 事件通知 |
| **会话管理 & 可发现性** | #12576 #6824 #12466 | 计划任务 Session 出现在列表、对话历史关键词搜索、按 prompt 查工具调用 |
| **Web Shell 体验增强** | #12557 #12575 #12185 | 轨迹缩放、Desktop 更新检查、构建产物修复 |
| **MCP 生态可靠性** | #12496 #12290 #12531 | -32601 误判、inline media 边界、权限规则绕过 |
| **Context 性能优化** | #12326 #12272 #12579 | eager tool 自动挑选、agent 描述精简、复用历史 |
| **桌面/平台分发** | #12575 #12530 #12258 | 更新检查、Web Shell 统一入口、远程 App |
| **安全与隐私** | #11848 #12574 #12578 #11198 | Windows 64-bit inode、telemetry 脱敏、commit 注册覆盖 |
| **Hooks & 扩展性** | #12558 #12183 | MemoryChanged、托管扩展目录 |
| **批处理 / 成本优化** | #12492 | Batch API workflow |
| **长期记忆** | #12579 | 减少 Agent 重复调查的 token 浪费 |

---

## 💬 开发者关注点

1. **安全漏洞持续曝光且处理迅速**：今日多个 P1/P2 安全类 Issue 被关闭（#11198、#12290、#11764、#11937）。社区评审文化严格，PR 中明确指出"不在本 PR 修"的项会被自动记录为 follow-up（#12514 即典型范例）。

2. **Windows 端是短板重灾区**：NTFS 64-bit inode（#11848）、bwrap sandbox（#12270）等多条历史问题延续到今天，并持续产生衍生 Issue（#12574、#12578）。Windows 用户体验仍是优先投资项。

3. **Token 预算敏感度高**：#12272（agent 描述 2000 token）、#12326（eager tool）、#12579（重复调查）三条 Issue 集中体现了对长上下文 / 本地 LLM 场景下成本控制的强烈诉求。

4. **MCP 正成为生态核心**：不到一天就有 #12258、#12496、#12531、#12290、#12355 等多条 MCP 相关 PR/Issue，bug 密度高但修复速度也快，框架正在快速收敛。

5. **架构从 CLI 走向分布式**：#11206（mesh）、#12582（A2A）、#12552（Managed Runtime attestation）、#12530（统一 Web Shell 入口）共同勾勒出"本地工具 → 工作区协作 → 跨组织 Agent 网络"的演进蓝图。

6. **开发者体验细节被重视**：#12557（轨迹缩放）、#12559（OpenTUI 弹窗几何对齐）、#8666（排队消息指示器）等 UI 微交互 Issue 表明项目对真实使用场景的反馈保持高度敏感。

---

*报告基于 GitHub 公开数据自动整理。日报覆盖 2026-09-23 ~ 2026-09-24 期间更新的 Issues / PRs。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-24** ｜ **数据来源：github.com/Hmbown/DeepSeek-TUI**

> ⚠️ **命名说明**：仓库仍以 `DeepSeek-TUI` 公开，但 Issues / PR 实际均以 **"Codewhale"** 为产品命名（含 DSH = DeepSeek Harness Bundle）。本日报沿用项目内部命名。

---

## 1. 今日速览

社区在过去 24 小时异常活跃，42 条 Issue 与 41 条 PR 更新均由维护者 Hmbown 集中产出，重点围绕 **0.10.1 发布收尾**、**0.10.2 / 0.11 路线图一次性铺开**（含 Full Access 重设计、Auto-Review Guardian、审批授权统一存储）。多个 Windows / 多代理场景的稳定性回归正在被密集修复，DSH 插件的原生导入通道（[#6451](https://github.com/Hmbown/Codewhale/pull/6451)）已完成并进入审查。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。当前主线聚焦于：

- **0.10.1**：发布准备中，多个 release-readiness PR 已合入（[#6423](https://github.com/Hmbown/Codewhale/pull/6423)、[#6424](https://github.com/Hmbown/Codewhale/pull/6424)、[#6428](https://github.com/Hmbown/Codewhale/pull/6428)、[#6430](https://github.com/Hmbown/Codewhale/pull/6430)、[#6422](https://github.com/Hmbown/Codewhale/pull/6422)、[#6429](https://github.com/Hmbown/Codewhale/pull/6429)、[#6431](https://github.com/Hmbown/Codewhale/pull/6431)、[#6461](https://github.com/Hmbown/Codewhale/pull/6461)），并由 PR [#6463](https://github.com/Hmbown/Codewhale/pull/6463) / [#6462](https://github.com/Hmbown/Codewhale/pull/6462) 修复 CI 中的 change-detection 与 tag-fixture 缺陷。
- **0.10.2**：路线图已铺开（详见热点 Issues）。
- **0.11**：权限与子代理授权重构路线图已铺开（详见热点 Issues）。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标题 | 为什么重要 |
|---|---|---|---|
| 1 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition** | 29 评论的伞形 Issue，是 TUI crate 拆解的官方执行入口，绑定 Linear 上的 C03–C10 任务 |
| 2 | [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | **ACP follow-up: empty terminal responses & Full Access discovery** | 10 评论的历史跟进 Issue，ACP 配置 / 权限姿态问题已在 0.10.0 修复，进入 v0.10.0 收尾阶段 |
| 3 | [#6427](https://github.com/Hmbown/Codewhale/issues/6427) | **0.10.0 regression: Windows Terminal multiline paste 自提交** | 由 [#5981](https://github.com/Hmbown/Codewhale/issues/5981) 修复后又复发，影响 Windows 用户 |
| 4 | [#6421](https://github.com/Hmbown/Codewhale/issues/6421) | **DeepSeek-Flash 在 0.10.0 报 "can't support image input"** | 离线 catalog 把 `deepseek-flash` / `deepseek-v4-flash` 标为 text-only，已 [#6424](https://github.com/Hmbown/Codewhale/pull/6424) 部分修复 |
| 5 | [#6418](https://github.com/Hmbown/Codewhale/issues/6418) | **无法恢复会话（saved Runtime store 归属不匹配）** | 会话持久化路径的回归，影响所有 resume 场景 |
| 6 | [#6488](https://github.com/Hmbown/Codewhale/issues/6488) | **Agent affordances: 六个模型视角的差距** | 战略级评估文档，从模型视角审视 harness 的歧义/沉默/丢失，对应后续 6 张子工单 |
| 7 | [#6473](https://github.com/Hmbown/Codewhale/issues/6473) | **0.10.2 M1+M2: 进入 Full Access 必须确认；默认 per-session** | 权限 UX 重设计，关闭 Shift+Tab 直通的"危险路径" |
| 8 | [#6481](https://github.com/Hmbown/Codewhale/issues/6481) | **0.11 A1: 统一 Engine 拥有的审批授权存储** | 当前 TUI / runtime / network 三套存储互不兼容，安全架构层面合并 |
| 9 | [#6476](https://github.com/Hmbown/Codewhale/issues/6476) | **0.10.2 G2: Auto-Review 通过信任边界观察会话** | Guardian（Auto-Review）系统的核心信任边界设计，新增 `guardian_context.rs` |
| 10 | [#6486](https://github.com/Hmbown/Codewhale/issues/6486) | **将 Codewhale review 沉淀为可复用 action.yml** | 0.10.1 之后的生态扩展，让其他仓库可 `uses: Hmbown/Codewhale-action` |

**社区反应**：今日 Issue 普遍处于"刚开 / 待合并"状态（多数 0 评论），但内容密度极高；维护者 Hmbown 单日一次性铺出 0.10.2（M×3 / G×6 / R×3）与 0.11（A×4）共 13 张路线图 Issue，显示团队正在为下一个季度做集中规划。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|---|---|
| 1 | [#6463](https://github.com/Hmbown/Codewhale/pull/6463) | **ci: 强制更新 change-detection 的 base ref** — 修复 `--depth=1` fetch 在 main 前移后无法 fast-forward 导致 [#6417](https://github.com/Hmbown/Codewhale/pull/6417) change detection 失败的问题 |
| 2 | [#6462](https://github.com/Hmbown/Codewhale/pull/6462) | **test(release): 阻止 auto-maintenance 与 tag fixture cleanup 抢跑** — 修复 `Version drift` 在 #6431/#6443/#6456 上的 `Directory not empty` 失败（EXIT trap 问题） |
| 3 | [#6483](https://github.com/Hmbown/Codewhale/pull/6483) | **fix(tui): Undo 能回滚其所属 turn 的文件** — 修复 VS Code 客户端保存的会话因快照归属不匹配导致 `patch-undo` 静默 fork 的问题（贡献者：gaord） |
| 4 | [#6440](https://github.com/Hmbown/Codewhale/pull/6440) | **build: 单一机器级 Cargo build 锁** — 多 agent 共享 checkout 时协调不同 target dir 并行构建 |
| 5 | [#6439](https://github.com/Hmbown/Codewhale/pull/6439) | **fix(goals): 用户再次输入时恢复 runtime-stopped 的 goal** — 0.10.1 dogfood 发现的"目标被永久 Blocked"恢复路径 |
| 6 | [#6438](https://github.com/Hmbown/Codewhale/pull/6438) | **feat(fleet): 已批准的替换路由处理被拒首请** — 当 reviewer pin 模型返回 "out of credits" 时可路由到替换模型而非整体失败 |
| 7 | [#6437](https://github.com/Hmbown/Codewhale/pull/6437) | **feat(tools): 首次调用 deferred tool 直接执行** — 与 [#6494](https://github.com/Hmbown/Codewhale/issues/6494) 对应，省去一次"先返回 schema 再重试"的往返 |
| 8 | [#6408](https://github.com/Hmbown/Codewhale/pull/6408) | **feat(providers): 新增 Yolo-Auto 兼容主机** — 数据驱动的 Chat Completions 网关描述符，无需新增 `ProviderKind` 变体（贡献者：harryvgiunta） |
| 9 | [#6451](https://github.com/Hmbown/Codewhale/pull/6451) | **feat(plugins): 原生 DSH bundle 导入（含 review）** — DSH 插件从仓库 Python 脚本转入桌面 app / CLI 产品流程，是 [#5362](https://github.com/Hmbown/Codewhale/issues/5362) 路线

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*