# AI CLI 工具社区动态日报 2026-10-13

> 生成时间: 2026-10-13 04:58 UTC | 覆盖工具: 9 个

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
**报告日期：2026-10-13** ｜ 数据来源：各工具 GitHub 仓库公开动态

---

## 1. 生态全景

当前 AI CLI 工具生态已进入 **"协议化 + 多智能体 + 工程化深水区"** 三线并进的成熟阶段。**MCP（Model Context Protocol）** 已从"加分项"变为事实标准，但随之而来的 stdio 句柄泄漏、进程生命周期管理成为新的系统性瓶颈；**多 Agent 架构**正从概念走向公共协议层（Qwen Code #13785、Gemini CLI subagent 可靠性）；**桌面端与 Windows 平台**的稳定性短板集中爆发，成为各家最显性的工程债。在商业模式上，BYOK（自带密钥）成为企业落地核心路径，而"模型 Fallback + 跨 Provider 路由"则是开发者侧的下一个统一诉求。整体上，社区关注点正从"能不能用"转向"能不能跑稳"。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 24h Issue 更新 | 24h PR 更新 | 整体节奏 |
|---|---|---|---|---|
| **Claude Code** | 0 | ~30+（Top 10 列举） | 0 | 平稳，无新合入 |
| **OpenAI Codex** | 0 | 10+（Top 10 列举） | **25**（合并/关闭） | 密集稳定性扫尾 |
| **Gemini CLI** | 1（v0.65.0-nightly） | 10（Top 10） | 10（Top 10） | 质量改进加速 |
| **Copilot CLI** | **4**（v1.0.96 + v1.0.97-0/1/2） | 10（Top 10） | 0 | 预发布高频迭代 |
| **Kimi Code CLI** | 0 | 0 | 0 | 24h 无活动 |
| **OpenCode** | 0 | 10（Top 10） | 10（Top 10） | V2 迁移阵痛 |
| **Pi** | **1**（v1.2.0） | **50** | 15 | 高频次高强度 |
| **Qwen Code** | 1（v0.25.1-nightly） | 10（Top 10） | 10（Top 10） | 架构主线推进 |
| **DeepSeek TUI** | 0 | 1 | 6 | 极小流量，CI 扫尾 |

**关键观察**：
- **迭代强度第一梯队**：Pi（65 项变更）、OpenAI Codex（25 个 PR）、Copilot CLI（4 个版本）。
- **沉寂型**：Kimi Code CLI 24 小时无任何动态，建议观察是否进入维护期或战略转向。
- **平衡型**：Claude Code、Qwen Code、Gemini CLI 处于"稳态演进"。

---

## 3. 共同关注的功能方向

### 3.1 🔌 MCP 生命周期治理（最高共性，4 家关注）
- **OpenAI Codex**：#26984（stdio pipe fd 泄漏 + 孤儿进程 → EMFILE，27 评论）、#21984（per-session 全量启动）、#7155（Windows stderr Transport closed）
- **OpenCode**：#50363（npx 启动的本地 MCP Server 孤儿进程）
- **Claude Code**：#63251（懒启动 MCP server）、#99831
- **Pi**：扩展生态标准化中"--tools 静默丢弃 direct-exposure MCP 工具"

**核心诉求**：懒启动 + scoped fd cleanup + 跨平台 stderr 背压。

### 3.2 🪟 Windows 平台稳定性（4 家共痛）
- **OpenAI Codex**：启动崩溃（#30339）、并发超时（#50923）、browser control 失败（#52857）、高 CPU（#53178）
- **Copilot CLI**：MCP Entra 登录失败（#5068）、插件卸载 Access Denied（#5119）
- **OpenCode**：`cmd.exe` 闪烁抢焦点（#52281）、缩放重置（#50168）
- **Pi**：WSL OAuth 流挂起（#6187，已闭环）、`shellPath` 非确定性（#9361）
- **Gemini CLI**：Browser subagent 在 Wayland 下失败（#21983）

**核心诉求**：从"次要平台"上升为一等公民，desktop/mobile/WSL/Windows 全栈覆盖。

### 3.3 🤖 Subagent / Multi-Agent 可靠性（3 家聚焦）
- **Gemini CLI**：#22323（MAX_TURNS 后误报 success）、#21409（Generalist agent 挂死）、#21968（skills 不自动调用）
- **Qwen Code**：#12380（Managed Agent 双路径架构，56 评论，主线议题）、#13785（agent 身份公共契约）
- **OpenCode**：#54713（子代理 error 状态被误报为成功）

**核心诉求**：状态机可观测、deferred exposure、agent 身份进入公共协议层。

### 3.4 🔑 BYOK / 模型路由（2 家共议）
- **Copilot CLI**：#5126/#5127/#5103 三联——短模型名匹配、子代理跨家族 API 不兼容
- **OpenCode**：#7602（Native Model Fallback，**120 👍 当日全榜最高**）

**核心诉求**：跨 Provider 路由、错误信息可解释、备用模型自动 failover。

### 3.5 🛡️ 沙箱 / 权限边界（3 家）
- **Claude Code**：worktree 隔离误拒合法 Bash（#95122，3 天累计 75 次拒绝）
- **Gemini CLI**：#19873（Zero-Dependency OS 沙箱）
- **Copilot CLI**：macOS sandbox 阻断 Gradle loopback（#5105）、preToolUse ask 决策被忽略（v1.0.97 已修）

### 3.6 🔄 V1→V2 迁移完整性（OpenCode 集中爆发）
- **OpenCode**：#54736（消息 ID schema 失败）、#54879（OAuth token 未迁移）、#54679、#53074、#51107——5 个相关 Issue 同日活跃

**核心诉求**：迁移器需要 schema-strict + user-realistic 双轨。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | Desktop 体验 + Auto mode 分类器 + Mods 插件生态 | Anthropic 深度用户、Desktop-first 团队 | Closed生态，强调会话内 Mods + TCC 权限 |
| **OpenAI Codex** | MCP 生态 + Windows Desktop + 多用户/HPC | 重度 MCP 用户、企业/科研 | Rust + Guardian 鉴权，强调 enterprise 部署 |
| **Gemini CLI** | Agent 子系统 + Browser Agent + AST 工具链 | 探索型开发者、Agent 重度用户 | 夜间频道高频迭代，P1/P2 并行 |
| **Copilot CLI** | BYOK + Custom Agents + GitHub 生态集成 | 企业混合模型部署、GitHub 深度用户 | 预发布节奏快，hooks/ACP 模式扩展 |
| **Kimi Code CLI** | — | — | 24h 无活动，定位待观察 |
| **OpenCode** | 模型无关 + V2 架构 + 跨 Provider | 多模型切换需求、独立开发者 | V1→V2 强制迁移，Drizzle 持久化 |
| **Pi** | 轻量 + 长会话 + SSH/远程 + 模型中间件 | 远程开发、CLI 极简主义者 | monorepo + extension 模型 |
| **Qwen Code** | Managed Agent 双路径 + SDK-Java + CSI 授权 | 企业级部署、Java 生态 | 双路径架构：TS agent loop + Workspace 解耦 |
| **DeepSeek TUI** | TUI 终端优化 + DeepSeek 模型 | 小众深度用户 | Rust TUI，CI 治理为主 |

---

## 5. 社区热度与成熟度

### 🟢 高热度 + 成熟期
- **OpenAI Codex**：25 个 PR 单日清理，但 Top Issue 评论数 27 是当日前列；典型"工程收尾期"
- **Claude Code**：Top Issue #16550 拥有 40 评论 / 78 👍，是当日 **单 Issue 点赞最高**，反映用户对核心能力的长期期待

### 🟡 快速迭代期
- **Pi**：50 Issues + 15 PR + 1 Release，是当日 **最活跃仓库**；v1.2.0 落地 OpenRouter per-key 模型，扩展性高速演进
- **Copilot CLI**：24h 内 4 个版本，节奏最激进；BYOK 议题三连爆发，处于企业能力补齐窗口
- **Gemini CLI**：夜间版本 + 10 个 PR + P1/P2 并行；Agent 子系统进入"攻坚期"
- **OpenCode**：#7602（120 👍）已关闭，意味 Failover 进入实现阶段；V2 迁移阵痛同步暴露

### 🔵 战略架构期
- **Qwen Code**：#12380（56 评论）成为社区共识级主线，Managed Agent 双路径架构是行业级参考样本
- **OpenCode**：V2 架构与 #47742（统一 .agents/ manifest）指向"跨厂商生态标准化"野心

### ⚪ 静默期
- **Kimi Code CLI**：24h 完全无活动，需关注是否进入维护阶段
- **DeepSeek TUI**：6 个 PR 全为 CI/依赖治理，Issue 仅 1 条，流量极小

---

## 6. 值得关注的趋势信号

### 📈 趋势 1：MCP 从"协议层"进入"工程化深水区"
4 家头部工具的 Top Issue 都指向同一根因：**MCP 的进程/句柄/日志治理已超越协议设计本身，成为稳定性瓶颈**。开发者应关注"懒启动 + scoped cleanup + 跨平台 stderr"三大工程实践，预计下季度将集中出现 MCP 进程管理 PR。

### 📈 趋势 2：BYOK + 模型 Fallback 成为企业落地标配
OpenCode #7602（120 👍）+ Copilot CLI BYOK 三连——开发者用真金白银的点赞票选出"跨 Provider 自动路由 + 凭据切换"为下一个统一诉求。**对企业架构师的参考**：单一模型锁定策略已不可持续，需要在 SDK 层设计 Provider 抽象与 Fallback 链。

### 📈 趋势 3：Subagent 状态机进入"公共契约"阶段
Gemini CLI 的 P1 双连（#22323 + #21409）、OpenCode #54713、Qwen Code #13785+13902——共同指向：**Agent 身份、状态、终止语义必须从"实现细节"上升为"公共协议"。** Qwen Code 的 `_meta.agent_id` 投射到 ACP/daemon 是行业首个落地样本。

### 📈 趋势 4：Windows/Desktop 平台差距成为显性竞争力
4 家工具的 Top Issue 中有 ≥3 个 Windows 相关。这反映在 2026 年，**"跨平台一致性"已从加分项变为决胜项**。开发者选型时需将 Windows CI 健康度、Tauri/Electron 桌面端稳定性作为关键评估维度。

### 📈 趋势 5：V1→V2 迁移是普遍工程债
OpenCode 单日 5 个迁移相关 Issue 集中爆发，揭示一个被低估的风险：**重大架构升级的迁移器需要"schema 严格性 + 用户现实数据"双轨保障**。任何计划做大版本切换的 CLI 工具，都应将"迁移器健壮性"列为 P0。

### 📈 趋势 6：AST 感知工具链是下一个性能优化方向
Gemini CLI 的 EPIC #22745（+ #22746/#22747/#19561）是当前社区最系统的优化议题。**对 IDE/编辑器厂商的参考**：基于 AST 的方法级代码读取、grep、map 是减少 token 噪声与误读取的关键路径，预计将在 2027 年成为 CLI 工具的标配能力。

### 📈 趋势 7：长会话可靠性（Durable）成为 Agent 演进硬约束
Pi 的 #10785（恢复会话丢失动态激活的工具）、Claude Code #100913（无 click 新会话 handoff）、Qwen Code #13502（cancelReason 语义细化）共同表明：**"会话即状态机"成为长时 Agent 的新合约**。开发者应关注 SDK 是否暴露清晰的"会话生命周期 + 可恢复单位"。

---

## 📌 决策建议

| 场景 | 推荐工具 | 关键理由 |
|---|---|---|
| **企业级 BYOK 多模型部署** | Copilot CLI / OpenCode | BYOK 生态最完整；OpenCode #7602 已进入实现 |
| **MCP 重度开发** | OpenAI Codex | MCP 治理文档化最深，PR 节奏最快 |
| **远程/SSH 开发** | Pi | 轻量 + OSC 52 + OpenRouter 适配最完整 |
| **多 Agent 架构探索** | Qwen Code | Managed Agent 双路径 + 公共协议投射是行业参考 |
| **Desktop 一等体验** | Claude Code / Gemini CLI | Mods 插件 + Browser Agent 双方向投入 |
| **避免选择** | Kimi Code CLI（24h 无活动

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-10-13）

---

## 一、热门 Skills / PR 排行

### 🥇 #1961 — skill-creator 评测查看器安全加固
- **作者**：Joncik91 | **状态**：OPEN
- **核心改进**：修复 eval-viewer 中的脚本逃逸、DNS 重绑定、跨站 POST、字符转义等三类高危漏洞（`generate_review.py` + `viewer.html`）
- **热度解读**：与社区最热 Issue **#1394**（XSS 缺陷，4 评论/2 👍）直接呼应，同期还有 **#1383**、**#1352** 等 skill-creator 相关问题持续发酵，是官方对"创作工具自身安全"的系统性回应
- 🔗 https://github.com/anthropics/skills/pull/1961

### 🥈 #1298 — skill-creator 触发评估健壮性修复
- **作者**：MartinCajiao | **状态**：OPEN
- **核心改进**：隔离触发评估、修复 Windows 下 `select()` 失败、剔除无关工具干扰，使 negative example 不再误判通过
- **热度解读**：解决"skill 是否真的会被调用"这一最核心痛点，直接关联 Issue **#556**（12 评论/7 👍，触发率为 0%）与 **#1352**（并行 worker 跨匹配导致假阴性）
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥉 #1742 — mcp-builder 适配 mcp>=2
- **作者**：Kuldeeep18 | **状态**：OPEN
- **核心改进**：跟进 `streamablehttp_client` → `streamable_http_client` 命名变更，重构自定义 header 的注入方式（走 `create_mcp_http_client`）
- **热度解读**：呼应 Issue **#1390**（mcp-builder 评估打分 0/N，4 评论），是 MCP 生态升级中社区最迫切的"链路配套"
- 🔗 https://github.com/anthropics/skills/pull/1742

### 4️⃣ #822 — AWT (AI Watch Tester) E2E 测试 Skill
- **作者**：ksgisang | **状态**：OPEN（横跨 2026-03 至 09 持续维护）
- **核心能力**：零代码 E2E 用例生成，给 Claude 视觉 + 浏览器控制能力做自动回归测试
- **热度解读**：测试自动化是社区长尾需求；长期未合并是因为属于"接入第三方大型框架"，需要合规与依赖审查
- 🔗 https://github.com/anthropics/skills/pull/822

### 5️⃣ #514 — document-typography 文档排版质检
- **作者**：PGTBoos | **状态**：OPEN（自 2026-03 持续至今）
- **核心能力**：预防孤儿词、寡头段落、编号错位等 AI 生成文档"通病"
- **热度解读**：定位"所有 Claude 出文都受益"的横切能力，社区认知度高，但归类与触发条件尚未与官方一致
- 🔗 https://github.com/anthropics/skills/pull/514

### 6️⃣ #1771 — proofcore-contract-auditor
- **作者**：ProofCore-Protocol | **状态**：OPEN
- **核心能力**：Solidity/Rust 智能合约静态分析 + 用零存储 Merkle 协议在 TON 链上锚定审计证明
- **热度解读**：Web3 合规审计场景首次以 Skill 形式落地，契合近期 agent-governance（**Issue #412**）方向
- 🔗 https://github.com/anthropics/skills/pull/1771

### 7️⃣ #1245 — Notion Spec → Implementation + 简历量化审查
- **作者**：mrdesouzaphd-cmyk | **状态**：OPEN
- **核心能力**：将产品/技术规格拆解为带验收标准的 Notion 任务；定量审查简历的可量化成果
- **热度解读**：打通了"规格→实现"与"求职文档"两条高价值链路
- 🔗 https://github.com/anthropics/skills/pull/1245

### 8️⃣ #1980 — webapp-testing 移除 `shell=True`
- **作者**：Pcmhacker-piro | **状态**：OPEN
- **核心改进**：消除 CWE-78 命令注入风险，改用参数化进程调用
- **热度解读**：与 #1961 一同构成"安全硬化双响"，反映社区对 skill 脚本安全基线的要求升级
- 🔗 https://github.com/anthropics/skills/pull/1980

---

## 二、社区需求趋势（来自高评论 Issues）

| 方向 | 代表 Issue | 关注度 | 诉求概要 |
|---|---|---|---|
| 🔒 **信任边界与命名空间安全** | **#492**（46 评论 / 2 👍） | 极高 | 社区 Skill 借 `anthropic/` 命名空间冒名官方，构成信任滥用；用户期望更严格的来源标识 |
| 🏢 **企业级分发与共享** | **#228**（16 评论 / 8 👍） | 高 | Claude.ai 缺少组织内共享 Skill 库，仍停留在手动下载/上传 |
| 🧪 **评估管线可信度** | **#556** / **#1383** / **#1352** / **#1390** / **#1394** | 高 | `run_eval.py` 触发率 0%、Windows 兼容、XSS、转义不一致；评测结果"假阴性/假阳性"误导优化 |
| 🧠 **记忆压缩与长会话状态** | **#1329**（9 评论） | 中 | 提议 *compact-memory*：用符号化记号替代散文笔记，节省上下文 |
| 🛡 **AI Agent 治理模式** | **#412**（6 评论，已 CLOSED） | 中 | 引入 policy enforcement、trust scoring、audit trail 等安全模式 |
| 🧱 **插件去重与上下文体积** | **#189**（6 评论 / 9 👍） | 中 | `document-skills` 与 `example-skills` 重复安装，挤占上下文 |
| 🚦 **Reasoning 三门质量闸** | **#1385**（5 评论） | 中 | Pre-task Calibration → Adversarial Review → Delivery Verification |
| 📉 **Skill 自身体积爆炸** | **#1487**（4 评论） | 中 | `claude-api` 单次工具调用注入 ~156k token，吞掉上下文 |

---

## 三、高潜力待合并 Skills

按"问题热度 + PR 完成度 + 评审障碍"综合排序，最可能近期落地：

1. **#1961 skill-creator eval-viewer 安全硬化** —— 与 #1394 高度对齐，被指"必须修"级别，合并概率最高
   https://github.com/anthropics/skills/pull/1961
2. **#1298 skill-creator 触发评估可靠性修复** —— 直击 #556 / #1383 长期抱怨
   https://github.com/anthropics/skills/pull/1298
3. **#1742 mcp-builder 升级到 mcp>=2** —— 上游协议版本已发布，阻塞后续 MCP skill
   https://github.com/anthropics/skills/pull/1742
4. **#1681 skill-creator `package_skill.py` 可直接执行** —— 小型 UX 修复，阻力最小
   https://github.com/anthropics/skills/pull/1681
5. **#1730 claude-api / academy-guide 死链替换** —— 文档级修复，零行为变更
   https://github.com/anthropics/skills/pull/1730
6. **#1792 docx LibreOffice 超时报错与产物校验** —— 与 #1734 (#orphaned comments) 同期推进文档处理鲁棒性
   https://github.com/anthropics/skills/pull/1792
7. **#1977 algorithmic-art wrapAround 修正** + **#1976 webapp-testing textarea/select 修复** —— 体积小、关联明确，适合作为"快赢"批量合并
   https://github.com/anthropics/skills/pull/1977 · https://github.com/anthropics/skills/pull/1976

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"把 Skill 的创作—评估—分发三条链路都变得可信"：** 既要解决 `skill-creator` 自身的安全与可重复性漏洞（XSS / Windows 兼容 / 触发率假阳/假阴），又要划清官方与社区 Skill 的信任边界（Issue #492），还要补齐组织内共享与上下文体积治理，最后才轮到功能性新 Skill 的合并节奏。

---

# Claude Code 社区动态日报
**日期：2026-10-13**

---

## 📌 今日速览

今日 Claude Code 仓库整体节奏平稳，**无新版本发布、无新 PR 合入**。社区讨论集中在两类问题：一是 Desktop 应用在多账户、TCC 权限、Mods（插件）系统上的体验缺陷；二是 worktree 隔离沙箱对 Bash 合法命令的误拒（连续多版本复现）。呼声最高的长期 feature 仍是 #16550"允许 Claude 写/更新项目文件"，今日仍以 40 条评论、78 个 👍 领跑。

---

## 🚀 版本发布

> 过去 24 小时无新 Release。建议关注 GitHub Releases 页面获取最新动态。

---

## 🔥 社区热点 Issues（Top 10）

### 1. #16550 [FEATURE] Allow Claude to Write/Update Project Files
- **状态**：OPEN | **评论 40 / 👍 78** | 创建于 2026-01-07
- **为什么重要**：长期呼声最高的 issue，要求 Claude 直接写/改项目文件而非仅给建议。👍 数远超其他 issue，反映开发者对"动手"能力的强烈需求。
- **链接**：https://github.com/anthropics/claude-code/issues/16550

### 2. #78160 Hard block on typing passwords breaks legitimate dev/test workflows
- **状态**：OPEN | **评论 15 / 👍 23** | 创建于 2026-07-16
- **为什么重要**：开发者要求提供"自有开发环境"下的密码输入开关，以支持本地测试账号登录。安全 vs 体验的张力，社区讨论激烈。
- **链接**：https://github.com/anthropics/claude-code/issues/78160

### 3. #74662 Claude Desktop: allow opening/resuming local sessions not present in the account's sidebar
- **状态**：OPEN | **评论 12 / 👍 9** | 创建于 2026-07-06
- **为什么重要**：使用同一桌面端多账号切换时，旧账号下的本地会话丢失。多账户场景下的会话持久化诉求。
- **链接**：https://github.com/anthropics/claude-code/issues/74662

### 4. #78263 [Feature Request] Add API fallback mechanism for auto-mode classifier
- **状态**：OPEN | **评论 5 / 👍 4** | 创建于 2026-07-16
- **为什么重要**：Sonnet 5 1m 分类器宕机直接导致任务停止运行，希望在 auto mode 下提供模型 fallback。
- **链接**：https://github.com/anthropics/claude-code/issues/78263

### 5. #69002 [FEATURE] Allow configuring a separate model for auto mode classifier via environment variable
- **状态**：OPEN | **评论 4 / 👍 26** | 创建于 2026-06-17
- **为什么重要**：希望为分类器单独指定模型以省成本/降延迟，👍 比例极高（评论少但赞同多），体现成本敏感型用户诉求。
- **链接**：https://github.com/anthropics/claude-code/issues/69002

### 6. #63251 Feature request: Lazy/on-demand MCP server connections
- **状态**：OPEN | **评论 4 / 👍 2** | 创建于 2026-05-28
- **为什么重要**：所有 MCP server 启动时全量连接造成内存浪费，是大规模 MCP 用户的核心痛点。
- **链接**：https://github.com/anthropics/claude-code/issues/63251

### 7. #95922 Claude Docs artifact: export fails on a personal Max plan
- **状态**：OPEN（bug） | **评论 4 / 👍 3** | 创建于 2026-09-21
- **为什么重要**：个人 Max 订阅下 Docs artifact PDF 导出报错，权限策略误判，影响日常产出。
- **链接**：https://github.com/anthropics/claude-code/issues/95922

### 8. #95122 Worktree isolation refuses git-free Bash on 2.1.272/2.1.273
- **状态**：OPEN（bug, has repro） | **评论 3 / 👍 1** | 创建于 2026-09-17
- **为什么重要**：worktree 隔离模式误拒变量赋值、`$()`、heredoc 等纯 Bash 调用，3 天累计 75 次拒绝，影响开发流。
- **链接**：https://github.com/anthropics/claude-code/issues/95122

### 9. #91103 Ctrl+Shift+Tab is partially intercepted by Claude Code
- **状态**：OPEN（duplicate） | **评论 4 / 👍 2** | 创建于 2026-09-01
- **为什么重要**：VS Code 中常用快捷键被 Claude Code 拦截并触发模式切换，属高频 IDE 冲突问题。
- **链接**：https://github.com/anthropics/claude-code/issues/91103

### 10. #100913 Desktop: let a Code session start a normal new session with no click
- **状态**：OPEN | **评论 3 / 👍 1** | 创建于 2026-10-09
- **为什么重要**：长会话 token 浪费问题，开发者要求"保存状态→新会话继续"的无缝 handoff，呼应终端体验。
- **链接**：https://github.com/anthropics/claude-code/issues/100913

---

## 📝 重要 PR 进展

> 过去 24 小时无新 PR 更新。建议关注仓库 `anthropics/claude-code/pulls` 实时动态。

---

## 📈 功能需求趋势

从今日活跃的 30 条 issue 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **🧩 Mods / 插件生态** | #101377, #101679, #99425, #99691 | 桌面端插件系统处于早期，需要扩展工具调用钩子、启动器、图标槽等基础设施 |
| **🖥️ Desktop 体验** | #74662, #100913, #95922, #88744, #101680, #101677 | 桌面端 UI/权限/会话管理细节缺陷集中爆发，是当前最不稳定的面 |
| **🛡️ Auto mode 与沙箱** | #78263, #69002, #95122, #100385, #101678 | 分类器与 worktree 隔离的边界判定仍是反复出现的高频问题 |
| **🔌 MCP 性能** | #63251, #99831 | 多个 MCP server 启动时全量连接 + 每会话复制进程，资源浪费严重 |
| **🔑 权限粒度** | #78160, #101680, #101654 | Mac TCC、Windows 凭据输入、Chrome 扩展授权，跨平台权限 UX 不一致 |
| **🧠 模型与成本** | #78263, #69002, #72619 | subagent 递归调用耗尽额度，开发者要求更细粒度的模型与成本控制 |
| **🆕 长期未实现** | #16550 | "让 Claude 直接写文件"始终是社区 top-1 诉求 |

---

## 💬 开发者关注点

综合今日讨论，开发者反馈中反复出现的痛点可归纳为：

1. **桌面端细节粗糙**：多账号会话丢失、TCC 权限一刀切、pane 拖拽热区仅 1px、Mods 斜杠命令菜单缺失——大量 issue 集中在桌面端 UI 打磨，反映 Desktop 应用发布后进入"可用但不可靠"的阶段。
2. **worktree 隔离沙箱"过度严格"**：连续多个版本（2.1.272/273）误拒合法 Bash 调用，且 PreToolUse hook 的 `allow` 决定无法覆盖该守卫（#100385），造成 75+ 次拒绝。
3. **MCP 资源消耗**：stdio MCP 在桌面端每个会话单独启动，10 个会话≈10 GB 进程；启动期全量连接导致 RAM 与启动延迟。
4. **auto mode 分类器脆弱**：单一模型宕机即阻塞整个会话；社区普遍要求 fallback 与可配置模型（成本/可用性双重诉求）。
5. **快捷键与 IDE 集成冲突**：VS Code 中 Ctrl+Shift+Tab 等热键被截获、扩展宿主重启后 Claude 面板失联（#94743），影响长期开发效率。
6. **跨平台权限 UX 不一致**：Mac TCC、Windows 密码输入、Chrome 扩展授权，三类问题都在同一天被提出，说明权限模型需要一次系统性梳理。

---

*本日报由 GitHub 公开 issue 数据自动生成，建议读者结合原 issue 评论与维护者回应进一步评估优先级。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-13**

---

## 一、今日速览

过去 24 小时 Codex 仓库讨论热度集中在 **MCP（Model Context Protocol）服务器稳定性** 与 **Windows Desktop 应用回归问题** 两大方向：MCP stdio 服务器累积句柄泄漏导致的 `EMFILE` 问题（#26984）仍是社区关注焦点，与 MCP 会话生命周期管理（#21984）形成"泄露+误启"的双重诉求。同时，**GPT-6.1 Sol 模型在 ChatGPT 登录模式下被错误判定为不支持**（#49396）和**新版本升级路径不顺畅**的问题也持续发酵。PR 侧则呈现密集的稳定性收尾节奏，单日内 25 个 PR 已合并或关闭，覆盖网络代理、TUI、Guardian 鉴权等模块。

---

## 二、版本发布

**过去 24 小时无新版本发布。**

（最近 alpha 分支活动：`codex-cli 0.162.0-alpha.17.2`、`Codex Desktop 26.1007.2314.0`、`app-server 0.160.0` 仍为现行最新。）

---

## 三、社区热点 Issues

| # | Issue | 重要性与社区反应 |
|---|------|--------------|
| 1 | **[#26984] MCP stdio servers leak pipe fds + orphan child processes → EMFILE** | 评论数 27、👍8，是当前 MCP 生态最受关注的"长会话资源泄漏"问题。在 `codex-cli 0.137.0` 及长期运行的 0.12x 版本上都能复现，影响所有重度使用自定义 MCP 服务器的用户。👀 [链接](https://github.com/openai/codex/issues/26984) |
| 2 | **[#21984] MCP servers eagerly start per session, causing headed browser MCP processes to accumulate** | 评论 17、👍5。指出每次 session/resume 都全量拉起 MCP 服务器，对 headed 浏览器类 MCP 造成进程残留，与 #26984 形成"启动策略 + 资源回收"的耦合诉求。🔗 [链接](https://github.com/openai/codex/issues/21984) |
| 3 | **[#49396] gpt-6.1-sol unsupported with ChatGPT sign-in without explaining eligibility** | 评论 11、👍7。用户反映无法升级到 0.159.1、且当前 0.156.1 上 gpt-6.1-sol 报"不支持"，但缺乏资格说明，**升级焦虑明显**。🔗 [链接](https://github.com/openai/codex/issues/49396) |
| 4 | **[#32972] Banked reset announced for all accounts is missing from my account** | 评论 8、👍9（👍数偏高，**用户情绪最强**）。官方 X 公告承诺的"补充周额度"功能在用户账户不可见，疑似生效策略与订阅绑定条件不透明。🔗 [链接](https://github.com/openai/codex/issues/32972) |
| 5 | **[#30339] [已关闭] Windows Desktop App fails to start: app-server websocket closed (code=3221225501)** | 评论 8。Windows 桌面端启动即崩，涉及 plugin marketplace 同步与无效配置键，**对 Plus 用户首次安装体验影响显著**。🔗 [链接](https://github.com/openai/codex/issues/30339) |
| 6 | **[#53178] [macOS Desktop] Persistent access-denied background hydration retries, high renderer CPU** | 评论 6。重启不解决，新版本（desktop build 20156 / Framework 155.0.8059.40）连续出现，疑似权限/水合逻辑回归。🔗 [链接](https://github.com/openai/codex/issues/53178) |
| 7 | **[#7155] Windows: MCP servers with heavy stderr output fail with "Transport closed"** | 评论 6、👍4。老问题但仍 open，对 stderr 输出较大的 MCP（如大型 LSP/工具服务器）在 Windows 上**长期无法稳定运行**。🔗 [链接](https://github.com/openai/codex/issues/7155) |
| 8 | **[#50923] Windows Desktop 26.930.3930: concurrent turns end in workspace-routing timeouts** | 评论 5。Windows 端多并发会话下 MCP 发现与队列堵塞同时出现，凸显**桌面端并发能力不足**。🔗 [链接](https://github.com/openai/codex/issues/50923) |
| 9 | **[#52857] Windows browser control fails with MXC platform directory HRESULT 0x80070003** | 评论 5。Windows desktop `26.1007.2314.0` 上浏览器控制无法定位用户数据目录，computer-use 链路阻断。🔗 [链接](https://github.com/openai/codex/issues/52857) |
| 10 | **[#53407] GPT-6.1 Sol xhigh returns at-capacity on text-only turn; long tasks also lose response stream (Oct 10–12)** | 评论 3。**服务端容量问题**在最近三日内被多次复现，配合 #52812 反映 Codex Web + Windows App 偶发 `server_overloaded`，影响 Pro 用户的连续工作流。🔗 [链接](https://github.com/openai/codex/issues/53407) |

> 备注：#20425（TUI 在 `screen` 下重复跳动）、#26159、#30339、#29588、#30162、#29250、#26350、#27314、#26761、#26485、#25309 等在 24h 内集中 **关闭**，主要涉及历史积压 bug 的清算。

---

## 四、重要 PR 进展

| # | PR | 价值与功能/修复说明 |
|---|----|------------------|
| 1 | **[#53556] Deduplicate TUI modifier handling and terminal color caching** | 复用 `custom_terminal::ModifierDiff`，并把 Unix/Windows 颜色探测逻辑统一 —— **降低 TUI 维护成本**。🔗 [链接](https://github.com/openai/codex/pull/53556) |
| 2 | **[#53451] Treat incomplete responses as terminal errors** | 引入 `ResponseIncomplete`，把 `max_output_tokens` 等"输出上限"从流式错误中拆出，避免**超出限额后仍触发重试/compaction fallback**。🔗 [链接](https://github.com/openai/codex/pull/53451) |
| 3 | **[#53506] Reject duplicate Host headers in the network proxy** | 在 policy 与上游解析前直接 400 拒绝重复 `Host`，避免策略不一致选取。🔗 [链接](https://github.com/openai/codex/pull/53506) |
| 4 | **[#53436] Route TUI request replies to their originating connection and thread** | 给"回复/解析通知"加连接+线程归属，防止**不同会话复用同一 request id 时出现的串扰**。🔗 [链接](https://github.com/openai/codex/pull/53436) |
| 5 | **[#53429] Apply configuration toggles live and improve settings navigation** | 配置变更实时生效，且支持跨组搜索、窄屏不被截断 —— **显著改善配置 UX**。🔗 [链接](https://github.com/openai/codex/pull/53429) |
| 6 | **[#53419] Restore saved thread permissions during configuration loading** | 网络代理按保存的线程权限而非当前 `:danger-full-access` 默认值启动，修复**只读线程恢复后还能联网的退化**。🔗 [链接](https://github.com/openai/codex/pull/53419) |
| 7 | **[#53444] Suppress repeated turn diffs in `codex exec` human output** | 仅在 diff 与上次不同时打印，避免无关命令后**重复刷新同一文件变更**。🔗 [链接](https://github.com/openai/codex/pull/53444) |
| 8 | **[#53453] Prefer the Windows clipboard and bound copy attempts on WSL** | WSLg 剪贴板卡死时优先走 Windows 端，避免 TUI 复制**永久阻塞**。🔗 [链接](https://github.com/openai/codex/pull/53453) |
| 9 | **[#53424] Add regression coverage for network grants on cold thread resume** | 配合 #53419 锁定"冷启动 + 权限变更"场景下网络授权仍生效，避免回归。🔗 [链接](https://github.com/openai/codex/pull/53424) |
| 10 | **[#53389] Use cached login credentials for Guardian decisions** | Guardian 模块切换到 `AuthManager` 的缓存鉴权，避免与最新登录态错位。🔗 [链接](https://github.com/openai/codex/pull/53389) |

> 此外，#53485 升级 `quinn-proto` 到 0.11.18（依赖 `rand 0.10.1` / `getrandom 0.4.2`）、#53443 改用本地 MSVC 工具链、#53412 给 arg0 helper 目录按 OS 隔离、#53393 区分 Guardian 父-压缩失败原因等 PR 也同步完成提交，呈现明显的**质量+稳定性扫尾**节奏。

---

## 五、功能需求趋势（聚合自全部 Issues）

1. **MCP 生命周期治理**（**最高优先级**）
   - 资源回收：pipe fds 泄漏、僵尸子进程 → #26984
   - 懒启动：仅在 tool 被调用时才 spawn 服务 → #21984
   - 跨平台兼容：Windows stderr "Transport closed" → #7155
2. **Windows Desktop 稳定性与可观测性**
   - 启动崩溃（#30339、#29250、#25309）、并发死锁（#50923）、browser control 失败（#52857、#53053）、高 CPU/内存（#53178、#53427）
3. **多用户/共享主机（HPC）场景支持**
   - `/tmp/codex-ipc` 跨用户冲突 → #26761、#26485、#27650
   - arg0 helper 目录跨平台隔离 → PR #53412 直接回应此问题
4. **新模型（GPT-6.1 Sol）与升级路径**
   - 资格判定缺失（#49396）、ChatGPT 登录模式下不识别模型
   - 服务侧容量波动（#53407、#52812、#52912 类）
5. **限额/计费透明度**
   - Banked reset 在账户侧不可见（#32972）；#53309 alpha 中"历史推理"双重计入触发过早压缩
6. **资源/日志治理**
   - app-server `logs_N.sqlite` 无界增长（#26374）、`target=log` TRACE 高频写入（#29588、#30162）—— `RUST_LOG` 等环境变量不能稳定生效
7. **IDE 扩展与远程/无头环境**
   - 远程服务器（vscode-server + HPC）鉴权/可移植性 → #27650

---

## 六、开发者关注点与痛点

- **🔧 MCP 工程化心智负担**：dev 不再只是"配 JSON"——必须额外关注 fds、孤儿进程、日志体积、stderr 背压，#26984 直接动摇了"长期 run Codex CLI"的可靠性预期。
- **🪟 Windows Desktop 不再是次要平台**：从 0.16x 起大量回归集中在 Windows（启动崩溃、并发超时、浏览器控制、HPC 集成），已成为 bug 密度最高的平台，目标用户群已开始承受显著的成本损失。
- **📦 版本升级路径**：升级到 0.159/0.162 时遭遇 ChatGPT 登录兼容性 + 模型资格 + alpha 旧线程压缩失败 —— 用户既**升级受阻**也**降级受阻**（#49396、#53309）。
- **🪙 限额/对账机制透明度不足**：#32972 👍9 反映用户对"承诺却不可见功能"敏感度极高，需要把"资格 + 触发 + 计费回路"做成可解释链路。
- **📈 后端服务过载频次上升**：GPT-6.1 Sol（xhigh）+ 长上下文场景在 10/10–10/12 出现明显的 at-capacity / server_overloaded → 影响"周末长任务" 体验。
- **🧪 共享基础设施友好性**：HPC / 多用户登录节点的 IPC 路径（`/tmp/codex-ipc`、arg0 helper）尚未命名空间化，是企业/科研用户落地的硬阻碍。

> 📌 建议关注：近期 #26984 + #21984 形成 MCP 双联诉求，下一步 PR 走向可能集中在 **MCP lazy start + scoped fd cleanup**；同时 PR #53412/#53419 已为多用户 + 只读线程恢复铺路，可观察后续是否会延伸到 MCP 进程作用域。

---

*日报数据来源：github.com/openai/codex 仓库 24h 内的 Issues 与 PRs 摘要（截至 2026-10-13 UTC）。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-13** ｜ **数据源：google-gemini/gemini-cli**

---

## 一、今日速览

今日发布了 nightly 版本 v0.65.0-nightly.20261013.g51617c1bc，主要修复了扩展 allowlist 校验失败时阻断其他扩展加载的问题。社区讨论焦点高度集中于 **Agent 子系统**与 **Browser Agent**：子智能体在 MAX_TURNS 后的状态误报、Generalist Agent 挂死、Browser Agent 忽略 settings.json 等 P1 级问题持续发酵；同时一批针对终端 UI、文件 I/O、沙箱安全的 PR 进入合并通道，质量改进节奏明显加快。

---

## 二、版本发布

### 🔖 v0.65.0-nightly.20261013.g51617c1bc

**修复内容**

| 类型 | 说明 |
|------|------|
| fix(cli) | 当某个扩展 allowlist 检查失败时，继续加载其他扩展（[#29720](https://github.com/google-gemini/gemini-cli/pull/29720)）。此前单个扩展校验失败会阻断全部扩展加载，影响扩展生态可用性。 |

**评估**：这是一次针对扩展健壮性的关键修复，避免"一损俱损"的级联失败问题，开发者现在可以使用更激进的 allowlist 策略而不必担心整个扩展栈被阻塞。

---

## 三、社区热点 Issues（Top 10）

### 1. [#22323 - Subagent recovery after MAX_TURNS 被错误标记为 GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级 P1 · Bug · 13 评论 · 👍2**
`codebase_investigator` 子智能体在达到最大轮次限制后仍返回 `status: success` 与 `Termination Reason: GOAL`，掩盖了任务被中断的事实。属于隐蔽性极高的可靠性缺陷，可能导致用户以为任务已完成而实际未完成。

### 2. [#19873 - 利用 Zero-Dependency OS 沙箱与 Post-Execution Intent Routing 释放模型的 bash 能力](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级 P2 · Enhancement · 9 评论 · 👍1**
提议通过操作系统级沙箱（如 landlock/bubblewrap）让 Gemini 3 模型原生使用 POSIX 工具链（grep/cat/sed/awk），在保证安全的前提下最大化模型训练能力。社区对"模型原生 bash 操作"路径反响积极。

### 3. [#21409 - Generalist agent 挂死](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级 P1 · Bug · 8 评论 · 👍8**
每次委派给 Generalist Agent 都会无限挂起，简单任务（如创建文件夹）需等 1 小时以上才能取消。显式禁用子智能体委派后可正常工作。该 Issue 👍8 是当日最高赞同，反映用户实际痛点严重。

### 4. [#22745 - EPIC: 评估 AST-aware 文件读取/搜索/映射的价值](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级 P2 · Feature · 7 评论 · 👍1**
系统化探讨基于 AST 的代码读取（精确到方法边界）与搜索是否能减少误读取、降低 token 噪声。是当前社区最系统的性能优化方向之一，并衍生出 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747) 两个跟进 Issue。

### 5. [#21968 - Gemini 未能主动使用 skills 和 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级 P2 · Bug · 7 评论 · 👍0**
即使存在与任务高度匹配的 Gradle/Git 自定义 skill，模型仍不会自动调用，必须显式提示。这暴露了模型对工具描述与上下文匹配的弱感知能力，影响开箱即用体验。

### 6. [#22267 - Browser Agent 完全忽略 settings.json 配置覆盖](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级 P1 · Bug · 4 评论 · 👍0**
尽管 `AgentRegistry` 在初始化时正确读取 `maxTurns` 等 settings，Browser Agent 运行时仍忽略这些覆盖，导致用户无法控制资源消耗或限制执行深度。

### 7. [#22232 - Browser Agent 的会话接管与锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232)
**优先级 P3 · Feature · 4 评论**
建议 Browser Agent 在遇到持久模式下的浏览器锁时自动接管/恢复当前会话，而非直接失败。当前"fail-fast"策略在多任务并行场景下友好度较差。

### 8. [#21983 - browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级 P1 · Bug · 4 评论 · 👍1**
Linux Wayland 显示协议下的浏览器子智能体启动失败，体现了跨桌面环境的兼容性短板，对 Linux 用户群体影响明显。

### 9. [#21000 - 用原生文件工具试验 task tracker 的持久化](https://github.com/google-gemini/gemini-cli/issues/21000)
**优先级 P3 · Feature · 4 评论**
提议放弃仅在上下文中维护的 WriteToDo，改用基于文件系统的任务跟踪，呼应 [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) 关于 context rot 的讨论。

### 10. [#20079 - `~/.gemini/agents/*.md` 不识别 symlink](https://github.com/google-gemini/gemini-cli/issues/20079)
**优先级 P2 · Bug · 4 评论 · status/need-information**
用户使用符号链接管理 agent 配置时，CLI 不将其识别为子智能体。该问题阻碍 dotfiles 化和多机同步的常见开发工作流。

> **趋势观察**：P1 级 Bug 几乎全部集中在 **subagent 可靠性** 与 **Browser Agent 配置/兼容性**，说明 Agent 体系已从"能用"过渡到"好用"的攻坚期。

---

## 四、重要 PR 进展（Top 10）

### 1. [#29728 - 修复快速 Ctrl+C 双击导致的会话中毒竞态](https://github.com/google-gemini/gemini-cli/pull/29728)
**P1 · area/core · size/l · OPEN**
针对工具执行或流式输出期间用户连按两次 Ctrl+C 时，第一次 `cancelOngoingRequest()` 是未等待的 detached 操作，第二次立即触发 `/quit`，会留下脏状态污染后续会话。该修复对长任务用户极有意义。👤 villahernandez-coder

### 2. [#29722 - 将仅含空白字符的 UTF-16/UTF-32 文件视为空](https://github.com/google-gemini/gemini-cli/pull/29722)
**area/core · size/m · OPEN**
`isEmpty()` 移除 BOM 后总按 UTF-8 解码，而 UTF-16/UTF-32 的空白字符宽度为 2/4 字节，导致 NUL 残留使 `trim()` 失效。修复后含 BOM 的中文/日文空白文件可被正确识别为空。👤 jesussamuel-byte

### 3. [#29644 - 恢复终端宽度变化时的 debounced 静态 UI 刷新](https://github.com/google-gemini/gemini-cli/pull/29644)
**P1 · area/cli · size/m · OPEN**
通过 100ms debounce 恢复 `refreshStatic()` 效果，解决水平 resize 时画面撕裂/闪烁问题，是对 [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) 的直接回应。👤 jvargassanchez-dot

### 4. [#29638 - 移除 VS Code 启动时的 Marketplace 更新检查](https://github.com/google-gemini/gemini-cli/pull/29638)
**area/core · size/l · OPEN**
`vscode-ide-companion` 每次激活都发起 HTTPS 网络请求，移除后启动更快、隐私更友好。Fixes [#29555](https://github.com/google-gemini/gemini-cli/issues/29555)。👤 Sandeep332005

### 5. [#29695 - 修复 Debug Console 高度计算与 terminalBuffer 闪烁](https://github.com/google-gemini/gemini-cli/pull/29695)
**P2 · area/core · size/l · OPEN · 🔒 maintainer only**
F12 调试面板的布局算法被重写，并启用增量渲染与 memo 化处理，显著提升 `terminalBuffer` 模式下历史项渲染稳定性。👤 ugorla-dev

### 6. [#29703 - 原子写入临时文件名收敛到 NAME_MAX](https://github.com/google-gemini/gemini-cli/pull/29703)
**area/agent · size/m · OPEN**
写 215-255 字节长文件时，`.<uuid>.tmp` 后缀会超出 NAME_MAX(255) 导致 ENAMETOOLONG。修复后原子写入覆盖更长文件名。👤 CheerathAniketh

### 7. [#29536 - 修复 grep 命令行参数注入（安全加固）](https://github.com/google-gemini/gemini-cli/pull/29536)
**P2 · area/security · size/m · CLOSED**
通过强制 `-e` 显式分隔符防止模式被解释为选项（防御 CWE-88）。这是夜间频道上重要的安全修复。👤 zainnadeem786

### 8. [#29699 - 修复反向搜索中扩展 Unicode 字符的高亮偏移](https://github.com/google-gemini/gemini-cli/pull/29699)
**area/core · size/m · OPEN**
`Ctrl+R` 历史搜索遇到 `İ`/`U+0130` 等小写化扩长字符时的高亮定位错误，含完整的 unit test 覆盖。👤 diegogodinezr

### 9. [#29725 - 终端同步输出与 spinner 渲染隔离](https://github.com/google-gemini/gemini-cli/pull/29725)
**P2 · area/core · size/xl · OPEN · 🔒 maintainer only**
在 tmux 等 multiplexer 下实现同步输出流封装并隔离 spinner 状态，彻底解决长时间观察下的画面闪烁。👤 diegogodinezr

### 10. [#29723 - 更新 ROADMAP.md 不再引用已完成的 2025 路线图](https://github.com/google-gemini/gemini-cli/pull/29723)
**size/xs · OPEN**
小但重要的文档维护：原引用的追踪 Issue 已完成多数里程碑，避免新贡献者被过期文档误导。👤 DavidAPierce

---

## 五、功能需求趋势

综合过去 24 小时活跃 Issues，可以提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **🌳 AST 感知工具链** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) [#22747](https://github.com/google-gemini/gemini-cli/issues/22747) [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | 极高（形成 EPIC 集群） |
| **🤝 Subagent 协作与共享内存** | [#18287](https://github.com/google-gemini/gemini-cli/issues/18287) [#18285](https://github.com/google-gemini/gemini-cli/issues/18285) [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) [#21763](https://github.com/google-gemini/gemini-cli/issues/21763) | 高 |
| **🌐 Browser Agent 工程化** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 高（P1/P2 居多） |
| **📋 持久化任务追踪** | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) [#18836](https://github.com/google-gemini/gemini-cli/issues/18836) | 中（趋势性） |
| **🛡 沙箱与安全模型** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) [#29726 PR](https://github.com/google-gemini/gemini-cli/pull/29726) | 中 |
| **🖥 终端 UI 性能** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) [#29695 PR](https://github.com/google-gemini/gemini-cli/pull/29695) [#29644 PR](https://github.com/google-gemini/gemini-cli/pull/29644) [#29725 PR](https://github.com/google-gemini/gemini-cli/pull/29725) | 高（PR 集中落地） |
| **🧠 模型自我认知** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432) | 中 |
| **🔧 工具规模治理** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) (>128/400 tools 400 错误) | 中（系统性约束） |

---

## 六、开发者关注点（高频痛点）

1. **Subagent 状态机不可靠**：[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) 与 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 同时暴露了子智能体在中断/委派场景下行为不可预测——该问题容易被误判为"模型能力不足"，但根因在 CLI 的状态管理与子智能体协议层面。

2. **Skill/Subagent 自动调用弱**：[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 反映出模型对工具描述（description）的匹配权重偏低，导致高度相关的 skill 不会被自动触发，开发者必须显式 hint，影响"开箱即用

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**2026-10-13**

---

## 📌 今日速览

v1.0.97 系列预发布版本集中落地，重点引入 **agent-scoped 声明式 hooks** 与内联图片渲染默认开启，同时修复了 macOS Homebrew 安装链路的 Gatekeeper 拦截问题。社区焦点集中在 **BYOK（自带密钥）场景下的模型匹配与子代理行为**，以及 Windows 平台 MCP/Entra 身份验证的稳定性问题。

---

## 🚀 版本发布

过去 24 小时内连续推送 **3 个预发布版本 + 1 个正式版本**，迭代节奏显著加快：

### v1.0.97-2（Latest 预发布）
- **Fixed**：即使仓库中定义超过 100 个或深度嵌套的自定义代理文件，也能完整发现所有 custom agents。

### v1.0.97-1（预发布）
- 通用修复与调整（详细 changelog 未列出）。

### v1.0.97-0（预发布）
- **Added**：为自定义代理引入 agent-scoped 声明式 hooks，可在代理级别定义生命周期事件。
- **Improved**：支持的终端默认渲染内联图片，无需开启 experimental 模式；可通过 `/settings inlineImages false` 关闭。
- **Fixed**：Autopilot 现在正确拒绝 preToolUse hook 的 "ask" 决策（而非允许执行）。

### v1.0.96（正式版，2026-10-12）
- 交互式沙盒设置现在会推荐可能的环境变量 secret，并允许在保存前添加 masking hosts。
- `/model` 与 `/config model` 中的模型 ID 大小写不敏感，保存时统一为规范 ID。
- 启动阶段企业策略尚未解析完成时，仍可使用 `/allow-all`。
- （`/a` 后文截断，推测涉及 ACP 模式相关改进。）

---

## 🔥 社区热点 Issues

### 高关注度 / 高交互

| # | Issue | 状态 | 热度 | 核心问题 |
|---|-------|------|------|----------|
| [#970](https://github.com/github/copilot-cli/issues/970) | Copilot app 被 macOS Gatekeeper 拦截（企业安全策略） | OPEN | 👍22 💬8 | Homebrew 升级后频繁触发 "Apple could not verify" 提示，企业用户需手动放权 |
| [#5068](https://github.com/github/copilot-cli/issues/5068) | Windows: MCP Entra 登录失败（作用域验证错误） | OPEN | 👍12 💬3 | `mcp.dev.azure.com` 类 HTTP MCP 服务首次登录始终失败 |
| [#3808](https://github.com/github/copilot-cli/issues/3808) | 为 Claude Sonnet 增加 prompt caching 以降低延迟与成本 | OPEN | 👍8 💬3 | 大量重复上下文场景下缺乏 Anthropic cache 优化 |
| [#5114](https://github.com/github/copilot-cli/issues/5114) | 触及会话上限后等待 5 小时 "continue" 仍不恢复 | OPEN | 💬3 | 429 cap 残留状态阻断会话恢复 |
| [#4960](https://github.com/github/copilot-cli/issues/4960) | 企业托管的自定义模型在 `/model` 中显示但无法选中 | CLOSED | 💬3 | OpenAI 兼容提供方配置后 picker 无法生效 |
| [#5079](https://github.com/github/copilot-cli/issues/5079) | Copilot 在 2026-07-28 协议上发送 `ping` 并复用已轮换的 refresh token | CLOSED | 👍1 💬2 | MCP 会话握手与 OAuth token 生命周期问题 |
| [#5101](https://github.com/github/copilot-cli/issues/5101) | `--add-github-mcp-tool issue_write` 导致整个 MCP 无可用工具 | CLOSED | 💬2 | 工具注册后 session 级工具集被清空 |
| [#5105](https://github.com/github/copilot-cli/issues/5105) | macOS 沙盒阻止 Gradle daemon 连接（即使放行本地网络） | OPEN | 💬2 | 本地 loopback 仍无法访问 |

### BYOK 系列（新出现，已形成聚类）

| # | Issue | 摘要 |
|---|-------|------|
| [#5126](https://github.com/github/copilot-cli/issues/5126) | 内置代理（explore/task/research）始终使用 session 模型，忽略自身声明 |
| [#5127](https://github.com/github/copilot-cli/issues/5127) | SDK BYOK 模式下短模型名无法匹配到提供方，自定义代理直接失败 |
| [#5103](https://github.com/github/copilot-cli/issues/5103) | BYOK 子代理共用 session 的 wire API，跨家族模型触发 400 |

**为什么重要**：BYOK 是企业级采用的关键路径，三个 Issue 集中暴露了 SDK 在多提供方/多模型场景下的解析与路由缺陷，且自定义代理失败时错误信息易误导（如显示 "No GitHub OAuth token"）。

---

## 📥 重要 PR 进展

**过去 24 小时内无新增或更新的 PR。** 这是近期罕见的的情况，可能与团队集中处理 v1.0.97 预发布版本相关；建议关注 PR 通道的恢复节奏。

---

## 📈 功能需求趋势

从近期 Issues 提炼出社区诉求最强的方向：

1. **BYOK 体验完善度** 🔑
   涵盖多提供方配置、短模型名解析、子代理 wire API 隔离、自定义代理默认模型丢失等。已成为当前社区头号议题。

2. **MCP 协议与认证兼容性** 🔌
   Entra/Dataverse/Atlassian Rovo/2026-07-28 协议 MRTR 等多方向请求，反映 MCP 生态正快速演进，Copilot CLI 兼容性跟进压力大。

3. **提示词缓存与成本优化** 💰
   Claude Sonnet prompt caching（#3808）等请求指向长上下文下的 token 经济性。

4. **自定义代理（Custom Agents）扩展性** 🧩
   100+ 文件深度发现（已修）、agent-scoped hooks、ACP 模式启动（#5030 已关）——代理生态持续丰富。

5. **企业合规与策略可恢复性** 🏢
   managed policy 刷新失败（#5109）、enterprise 自定义模型选择（#4960）等。

6. **终端与可观测性改进** 🖥
   终端模式恢复（#5120）、prompt 执行耗时跟踪（#5125）、TUI 粘贴兼容性（#4597）。

---

## 👨‍💻 开发者关注点

| 痛点类别 | 典型反馈 |
|----------|----------|
| **BYOK 模型路由错误** | 短模型名匹配失败、子代理跨家族 API 不兼容、错误信息误导（"No GitHub OAuth token"）——影响自定义代理与多提供方场景 |
| **Windows 平台稳定性** | MCP 首次 Entrap broker 登录 0xc0000005 崩溃（#5088）、插件卸载 Access Denied（#5119）、MCP Entra scope 校验失败（#5068）——Windows 用户体验显著劣于 macOS |
| **MCP OAuth 与协议兼容性** | RFC 8414 issuer 校验过严（#5082）、新协议 ping 与 token 轮换（#5079）、MRTR 不支持（#4834 已关） |
| **沙盒与权限边界** | macOS sandbox 阻断 Gradle loopback（#5105）、preToolUse ask 决策被忽略（v1.0.97 已修） |
| **会话恢复与生命周期** | session host 120s ack 超时导致永久不可用（#5100）、会话上限后状态不清理（#5114） |
| **终端/TUI 残留状态** | 崩溃后鼠标追踪/focus reporting 未还原（#5120）、粘粘贴丢失内容（#4597） |
| **可观测性诉求** | prompt 执行耗时跟踪（#5125）——开发者希望在终端直接判断性能瓶颈 |

---

*日报基于 github.com/github/copilot-cli 过去 24 小时公开数据整理。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 — 2026-10-13

## 📌 今日速览

今日无新版本发布，但社区活跃度持续走高，多条高价值议题推动项目演进。最显著的变化是 **#7602「Native Model Fallback / Failover Support」正式关闭**（32 条评论、120 👍），意味着跨模型故障转移即将进入实现阶段；同时 **V1 → V2 迁移遗留问题集中爆发**（OAuth 凭据、消息 ID schema、Session 可见性、Managed Config 路径），开发者高频踩坑。kitlangton 单日有 5+ 个 PR 集中打磨桌面 App（粘贴、TUI、编辑器、Review 面板）交互细节。

---

## 📦 版本发布

今日无新版本发布。最近的版本动作为 2.0.27 范围内的累计修复（涉及日志、迁移、Desktop 行为修正）。

---

## 🔥 社区热点 Issues

按热度与影响排序，挑出 10 条最具代表性的讨论：

1. **[CLOSED] #7602 [FEATURE]: Native Model Fallback / Failover Support** — 32 评论 / 120 👍
   社区对「跨模型自动故障转移」呼声极高：希望在主模型 rate-limit 或报错时自动切换到备用模型（provider 间、不同 model ID 间均可）。该 Issue 关闭意味着 RFC/实现即将进入主线。  
   👉 https://github.com/anomalyco/opencode/issues/7602

2. **[CLOSED] #14212 [FEATURE]: Support more DBMS' for OpenCode state storage** — 15 评论 / 24 👍
   Drizzle 改造让多数据库后端成为可能，社区要求扩展 PostgreSQL 等支持。此条目关闭意味着后端持久化层正式规划中。  
   👉 https://github.com/anomalyco/opencode/issues/14212

3. **[OPEN] #50363 mcp: orphaned local MCP server processes accumulate after sessions end**
   通过 `npx` 启动的本地 MCP Server 在会话结束后未被回收，长时间累积成为 PID 1 的孤儿进程。稳定与资源泄漏问题，影响所有通过 npx 注册 MCP 的用户。  
   👉 https://github.com/anomalyco/opencode/issues/50363

4. **[OPEN] #52281 Windows: child `cmd.exe` flashes a visible console and steals focus despite `windowsHide`**
   Win11 下 `opencode-cli` 派生 `cmd.exe`（git 探测、MCP spawn）会闪烁控制台窗口并抢焦点。即便设置 `windowsHide` 也无效，严重影响 Windows 桌面体验。  
   👉 https://github.com/anomalyco/opencode/issues/52281

5. **[OPEN] #50168 Desktop zoom resets to 100% after restarting the app**
   `v2` 中 `wireZoom()` 强制将缩放因子重置为 1，多用户反馈后失去自定义缩放。当前合入进度慢，开发者需要补丁。  
   👉 https://github.com/anomalyco/opencode/issues/50168

6. **[CLOSED] #42135 deepseek-v4-pro on opencode-go /responses fails on any multi-turn request**
   走 `opencode-go/responses` 通道的 deepseek-v4-pro 在第二回合开始必失败，而 `flash` 变体与官方 API 正常。已关闭——很可能已在 2.0.27 修复。  
   👉 https://github.com/anomalyco/opencode/issues/42135

7. **[OPEN] #47742 [FEATURE]: Shared `.agents/` Directory and Manifest-Based Discovery**
   多代理工具堆叠造成仓库根目录混乱（`.github/agents`、`.claude/agents`、`.codex/agents` 等），社区呼吁建立统一 manifest 与发现协议。  
   👉 https://github.com/anomalyco/opencode/issues/47742

8. **[OPEN] #51209 [FEATURE]: Expose the V2 TUI composer to plugins**
   V1 插件可通过 `client.tui.appendPrompt` 向 TUI composer 追加文本，V2 该能力被移除，迁移到 V2 的插件作者被卡住。  
   👉 https://github.com/anomalyco/opencode/issues/51209

9. **[OPEN/REPRO] #54736 migrate: V1 migration aborts on legacy message ID failing schema**
   从 V1 1.18.x 升级到 2.0.27 时，旧 `msg_*` 不符合 `Session.Message.ID` schema（必须 `msg_` 前缀），迁移直接中止。这是阻塞型迁移 bug。  
   👉 https://github.com/anomalyco/opencode/issues/54736

10. **[OPEN] #54879 migrate-v1: remote MCP OAuth tokens are not migrated**
    V1 → V2 迁移不携带 `mcp-auth.json` 的离线刷新令牌，所有 OAuth 远程 MCP 都需要重新授权，对用户极不友好。  
    👉 https://github.com/anomalyco/opencode/issues/54879

---

## 🛠 重要 PR 进展

聚焦社区反馈的痛点，挑选 10 条关键 PR：

1. **#55003 fix(util): preserve shared log objects**（合并中）
   修复 `flatten()` 误把 DAG 中「共享但非祖先」的对象标记为 `[Circular]` 的问题，避免日志信息丢失。  
   👉 https://github.com/anomalyco/opencode/pull/55003

2. **#55030 / #55031 fix(util): repeat shared objects in file logs**（#55031 已关闭；同时出现 #55030 平行提交）
   同一修复的两次尝试，针对 issue #55001，最终方案由 #55003 合并。  
   👉 https://github.com/anomalyco/opencode/pull/55030 · https://github.com/anomalyco/opencode/pull/55031

3. **#54838 fix(tui): open local file links with OS handler**
   在 TUI 中新增 `openHref`/`resolveOpenTarget`：http(s) 走浏览器，绝对路径 / `file://` 走系统文件管理器，比旧版更可预测。  
   👉 https://github.com/anomalyco/opencode/pull/54838

4. **#54482 fix: include attached images in btw side questions**
   `/btw` 侧问现在可以跟随会话中已附加的图片，问题情境不再「只看文字」。Desktop 与 TUI 均适用。  
   👉 https://github.com/anomalyco/opencode/pull/54482

5. **#54590 feat(file): trackpad zoom and pan to image previews**
   右侧图片预览支持捏合缩放（围绕手势点）与双指平移，弥补了点击只能 fit/original 的单一交互。  
   👉 https://github.com/anomalyco/opencode/pull/54590

6. **#55020 fix(app): paste into unfocused composer and guard terminal ⌘V**
   修复 macOS `⌘V` 在失焦 composer 中插入 `"v"` 字面量、嵌入式终端中命令组合键被吞的问题。  
   👉 https://github.com/anomalyco/opencode/pull/55020

7. **#54633 fix(app): show known palette sessions immediately**
   命令面板中已知名称的会话不再受 100ms debounce 影响，键盘选择实时可用。  
   👉 https://github.com/anomalyco/opencode/pull/54633

8. **#54713 fix(core): project error finish as terminal assistant failure (#52378)**
   子代理流式结束于 `error`（如 Gemini `MALFORMED_FUNCTION_CALL`）时，原来被上报为成功；本 PR 将其修正为失败，让父任务正确收敛。  
   👉 https://github.com/anomalyco/opencode/pull/54713

9. **#52797 feat(plugin): expose `credential.activate` to server plugins**
   服务端插件可列出已保存账号但无法切换激活；本 PR 暴露切换能力，匹配订阅/配额回退场景。  
   👉 https://github.com/anomalyco/opencode/pull/52797

10. **#55018 fix(app): retain raw media bytes up to 256 MiB for artifact previews**
    把媒体文件预览上限从 25 MiB 提升至 256 MiB，使 38MB 等中等体积录像/二进制构件可在媒体查看器内播放而非降级成占位符。  
    👉 https://github.com/anomalyco/opencode/pull/55018

---

## 📈 功能需求趋势

从过去 24 小时高活跃度的 Issues 中提炼，社区重点诉求集中在以下方向：

- **模型路由与故障转移**（#7602、#51410）：跨厂商、跨 model ID 的自动 Failover + 凭据切换，是 #1 高赞议题。
- **持久化与可观测**（#14212）：扩展 DBMS 支持（Postgres）、session/状态可迁移、可观测。
- **多代理生态治理**（#47742、#51209）：统一 `.agents/` manifest、插件可编程 TUI/Composer。
- **V1→V2 迁移完整性**（#54736、#54879、#54679、#53074、#51107）：OAuth tokens、消息 ID、session 可见性、managed config 路径全面同步——这是当前最大的开发者痛点。
- **桌面体验**（#50168、#54990、#54991、#52281、#54985）：Windows 缩放持久化、缺失图像提示、CJK 字体、进程派生行为。
- **新模型/服务端**（#55028/#55029「Cat Jam Free」、#55026「ai&」、#54675 模型下线）：Provider 接入与下线操作频繁。
- **官方 SDK**（#54300）：Python 客户端呼声再起，但相关历史 issue 多次被关闭，需要新策略。

---

## 🧩 开发者关注点

从 PR 评论与 Issue 反馈中识别的高频痛点：

1. **V1 → V2 数据迁移不完整**：迁移器只对「schema 严格字段」生效，但忽略了用户级别的现实数据——OAuth 凭据、legacy 消息 ID、自定义 cwd scope——任何错过都会让用户重做成本。  
2. **Windows 桌面细节缺失**：控制台闪烁、缩放重置、文件预览崩溃、`/etc/opencode` 与 `%ProgramData%\opencode` 不被识别——管理员部署、企业策略场景明显缺位。  
3. **MCP Server 生命周期**：孤儿 npx 进程 + V1→V2 OAuth 丢失，让用户每次升级都要重新授权。  
4. **工具边界稳定性**：模型偶发「空 input 工具调用」导致会话永久挂起，没有降级或超时保护，需要 provider 侧的兜底。  
5. **日志可观测性**：V2 file logger 的 `flatten()` 把 DAG 中的共享对象误判为循环引用，关键调试字段丢失。  
6. **本地插件加载行为变化**：自 #46105 起，配置为绝对文件路径的本地插件被静默丢弃（仅 WARN）而文档未同步，多个 Issue 在重复报告（#49608、#46551）。

---

> 报告生成时间：2026-10-13 · 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-13

## 📌 今日速览

今日 Pi 生态迎来里程碑更新 **v1.2.0**，核心亮点是基于 OpenRouter API Key 的模型权限过滤能力正式落地（`#10672` → `#10569` → release）。与此同时，社区在 24 小时内迎来 50 个 Issue 更新、15 个 PR 更新，其中 Windows/WSL 兼容性问题（如 OAuth 设备流阻塞、`shellPath` 解析非确定性）成为开发者反馈最密集的方向，多个 P0/P1 级别的稳健性 bug 已合并修复。

---

## 🚀 版本发布

### v1.2.0（earendil-works/pi）

**核心新特性：Per-key OpenRouter 模型列表**
- 配置 OpenRouter Key 后，Pi 仅展示该 Key 可用的模型
- 自动继承 Key 的上下文长度、最大输出和价格配置
- 支持 `models.json` 中配置的地域性 endpoint

👉 这是 PR [#10672](https://github.com/earendil-works/pi/pull/10672) 与 [#10569](https://github.com/earendil-works/pi/pull/10569) 合并后的正式发布，关闭了 [#10353](https://github.com/earendil-works/pi/issues/10353) 的长期讨论。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关键点 |
|---|-------|------|--------|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | WSL 中 Pi 登录挂起（GitHub Copilot 设备授权已完成但客户端未检测到） | CLOSED | 💬 28 条评论，是今日最热 Issue，已闭环 |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | alternate term 模式下链接不可点击 | CLOSED | 💬 17 条评论，影响日常交互体验 |
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows `shellPath` 非确定性忽略，PATH fallback 命中 WSL System32 `bash.exe` | OPEN | 💬 14 条评论，安全风险高，影响扩展加载 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | OSC 52 剪贴板复制失效（回归 bug） | CLOSED | 💬 10 条评论，👍2，影响容器/Tmux 环境 |
| [#10840](https://github.com/earendil-works/pi/issues/10840) | openai-codex GPT-6.1 Sol 仍用 272K context（未跟随 500K 默认） | CLOSED | 💬 8 条评论，与 OpenAI 最新公告同步 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | compaction 后旧的签名 thinking block 每轮重放 | CLOSED | 💬 7 条评论，Anthropic 长期连接问题 |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | Bun 编译下 `resizeImage` 返回 null，所有图像附件丢失 | OPEN | 💬 7 条评论，影响 0.87.x 起的图片工具 |
| [#10864](https://github.com/earendil-works/pi/issues/10864) | Session 跨 release 更新后丢失未加载 provider 模块 | CLOSED | 💬 3 条评论，prune 策略问题 |
| [#10785](https://github.com/earendil-works/pi/issues/10785) | ⚠️ **P0** 恢复会话时丢失动态激活的工具 | OPEN | 💬 3 条评论，影响 deferred exposure 工具 |
| [#10628](https://github.com/earendil-works/pi/issues/10628) | tmux 下 OSC 52 复制被吞，无 passthrough wrap | OPEN | 💬 3 条评论，👍3，SSH/无显示器用户痛点 |

**观察**：今日 Issues 集中在三个高频痛点——**Windows/WSL 环境兼容性**、**剪贴板/Tmux 终端集成**、**long-running session 的状态一致性**，反映出 Pi 正在从早期工具快速向生产级 CLI 演进。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 |
|---|----|----|
| [#10672](https://github.com/earendil-works/pi/pull/10672) | 🔥 **OpenRouter per-key 模型过滤** — 合并到 v1.2.0 |
| [#10569](https://github.com/earendil-works/pi/pull/10569) | OpenRouter `GET /models/user` 鉴权过滤，配合 [#10672] 落地 |
| [#10528](https://github.com/earendil-works/pi/pull/10528) | Nix 包管理重构，使用 `makeBinaryWrapper`，清理 sourcemap/d.ts |
| [#10694](https://github.com/earendil-works/pi/pull/10694) | OAuth 设备流轮询在收到 `slow_down` 后自适应延长间隔（缓解 WSL/Ubuntu 时钟漂移问题） |
| [#10830](https://github.com/earendil-works/pi/pull/10830) | 修复重试预算被成功 `toolUse` 重置的 bug，避免重试无限循环 |
| [#10834](https://github.com/earendil-works/pi/pull/10834) | Bun 编译下 image worker 返回 null 时回退到主线程（修 [#10645]） |
| [#10855](https://github.com/earendil-works/pi/pull/10855) | Xiaomi MiMo 模型 `--thinking minimal` 映射为 `low`（修 [#10818]） |
| [#10833](https://github.com/earendil-works/pi/pull/10833) *(议题)* | `--mode json` 的 message 事件缺 session entry id |
| [#10847](https://github.com/earendil-works/pi/pull/10847) | 保留旧版本 model catalog 路由，避免发布时回退到 `0.80.x` |
| [#10533](https://github.com/earendil-works/pi/pull/10533) | 拒绝闭环 waits，防止 durable 任务死锁（修 [#10411]） |

---

## 📈 功能需求趋势

从 50 条活跃 Issue 中提炼出社区最关注的 5 大方向：

1. **🪟 Windows / WSL 一等公民体验**
   - Git Bash 自动检测、WSL OAuth 流、shell 解析确定性、`node --watch` 兼容
   - 多个 P0/P1 Issue，直指 Pi 在 Windows 上"能用但不够稳"

2. **🤖 模型生态动态化**
   - OpenRouter per-key 模型（**v1.2.0** 落地）
   - OpenAI Codex 500K context 同步、Anthropic 签名 thinking、MiMo thinking level
   - 反映社区对新模型/新版本敏感度高，期望 Pi 作为模型层"中间件"快速适配上游变更

3. **📺 终端 UI 与剪贴板健壮性**
   - OSC 52 在 Tmux/SSH/容器中的兼容
   - 链接可点击、overlay 在图片上的 z-order
   - 表明 Pi 越来越被用于重度 SSH/远程开发场景

4. **♻️ 长会话可靠性（Durable）**
   - 跨 release 升级时的 provider 模块加载
   - `agent_settled` 后已 deferred 的延续执行
   - compact 后 thinking block 错配
   - 反映 Pi 正在向"长时 agent"演进，对 session state 完整性提出高要求

5. **🔌 扩展生态标准化**
   - `--tools` 静默丢弃 direct-exposure MCP 工具
   - Prompt template 空参数位置偏移
   - 模型发现忽略仅通过 env 启用的 provider
   - 社区希望通过更精细的设置项让扩展可控

---

## 💬 开发者关注点

1. **轻量级授权体验** — 用户期望 OAuth 设备流在 WSL 这种"半虚拟化"环境中开箱即用，而不是要手动 hack clock（[#10694](https://github.com/earendil-works/pi/pull/10694) 直面此痛点）。

2. **退路（fallback）必须可观测** — `#10645`、`#9361`、`#10798` 都指向同一种失败模式：**fallback 静默执行了一个次优路径，但用户感知不到配置被忽略**。开发者正倒逼团队加 manifest/log 输出。

3. **协议兼容性 > 版本号** — `#10865`、`#10869` 显示 Pi 1.2.x 与 1.0.x/1.1.x 的兼容问题导致下游（pi-web、codemode）整体崩溃。SemVer 在 monorepo+extension 场景下的边界正在被重新审视。

4. **"会话即状态机"** —— `agent_settled` 之后的 `continuation`、compaction 后的 thinking replay、resume 后的 tool 丢失，共同指向一个诉求： **Pi 需要向 SDK 用户暴露更清晰的"会话生命周期 + 可恢复单位"**，这也是 `pi-durable` 包快速演进的背景。

5. **强健字段校验** — `#10867`（prompt 模板空参数）、`#10868`（无效 `\u` 转义丢失字段）说明在 LLM 输入侧，**解释器应像 LLM 一样宽容地修复 schema 错误**，并对"静默丢字段"零容忍。

---

📅 报告生成时间：2026-10-13 · 数据源：GitHub `badlogic/pi-mono` (earendil-works/pi)
📊 当日数据：1 个 Release · 50 个活跃 Issue · 15 个活跃 PR

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-10-13
**数据来源**: github.com/QwenLM/qwen-code

---

## 一、今日速览

社区今日最核心的动态集中在 **Managed Agent 双路径架构落地** 与 **多 Agent 协同协议标准化** 两个方向——Issue #12380（56 条评论）已推进至 ready-for-agent 阶段，PR #13902 与 #13955 同步推进 ACP/daemon 线上的 agent identity 与成员间消息通道。与此同时，**夜间版本 v0.25.1 发布** 修复了托管代理 connector 与 broker 在 #12692 R2 评审中暴露的稳定性问题。CI 侧的运行器复用故障（#13951）与依赖 CVE 审计（#13078）仍是当前最棘手的基础设施痛点。

---

## 二、版本发布

### v0.25.1-nightly.20261012.18f80f5666 🆕

夜间快照版本，主要变更：

- **fix(managed-agent)**：合并 PR #13330，修复 R2 review 中发现的 connector 与 broker 健壮性问题。
- **feat(managed-agent)**：相关托管代理能力增强（完整内容待补充）。

🔗 https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261012.18f80f5666

---

## 三、社区热点 Issues（按评论数排序 Top 10）

### 1. [#12380](https://github.com/QwenLM/qwen-code/issues/12380) ⭐ Managed Agent 双路径架构与分阶段交付（56 条评论）
作者 doudouOUC 提出在保留现有 TypeScript agent loop 的前提下，将模型推理与工具环境供给解耦，使 Session 拥有持久所有权、Workspace 绑定、可恢复工具执行与稳定 WebSocket。这一提案已升级为 roadmap 主线，直接驱动 H4 工作流子运行时（#13858）、SDK-Java CSI 授权（#13996）等多个 PR。**是当前最受社区关注的架构总纲。**

### 2. [#13078](https://github.com/QwenLM/qwen-code/issues/13078) 每日依赖 CVE 审计失败（19 条评论）
GitHub Actions 机器人自动开出，调度任务 `runs/36661572770` 检测到新增高危漏洞或 npm audit 端点异常。**反映供应链安全的常态化监督压力。**

### 3. [#13395](https://github.com/QwenLM/qwen-code/issues/13395) Kubernetes 工具运行时进度追踪（19 条评论）
作者 doudouOUC 维护的进度追踪看板，以 `main @ 21b78c55d5a` 为基线持续同步交付门禁状态。**作为跨平台交付的协同枢纽长期活跃。**

### 4. [#13492](https://github.com/QwenLM/qwen-code/issues/13492) XML 工具调用恢复会丢弃含引号的外层调用（11 条评论）
作者 yiliang114 报告：PR #13515 已合并阻止引号内的工具标记被误派发，但 PR #13579 的外层恢复尚未合入。**该问题自 PR #13515 合并后被部分修复。**

### 5. [#13785](https://github.com/QwenLM/qwen-code/issues/13785) Multi-Agent API：把 agent 身份作为公共契约的一维（7 条评论）
作者 yiliang114 主张在现有公开协议上表达多智能体执行的可归属、树形、可中断性。**已被 PR #13902 实质性推进。**

### 6. [#10700](https://github.com/QwenLM/qwen-code/issues/10700) XML 恢复只匹配平衡成对调用，孤儿闭合标签泄漏（6 条评论）
基于 `1aba19c87889` 验证，仍然可被受控流式 provider 复现。**长期顽固问题，需要外层调用恢复机制（与 #13492/#13579 共同推进）。**

### 7. [#13502](https://github.com/QwenLM/qwen-code/issues/13502) 取消操作的来源：#13436 中延后的五项决策（6 条评论）
作者 yiliang114 跟踪 PR #13436 的遗留项，新终端记录已采用显式 `cancelReason` 与有限时间戳，遗留兼容性由 #13436 在 `624900a45e6` 维护。**作为 session-management 的语义细化议题。**

### 8. [#13951](https://github.com/QwenLM/qwen-code/issues/13951) CI 集成测试在 Checkout 阶段失败（5 条评论）
作者 wenshao 报告 PR #13815 的 `Integration Tests (no-AK, No Sandbox)` 在 `fatal: pack has 1 unresolved delta` 处崩溃。**与 PR #14017 的 runner 修复直接关联。**

### 9. [#14011](https://github.com/QwenLM/qwen-code/issues/14011) Harness SWE：exercise qwen code 自身特性的 benchmark（👍 1, 5 条评论）
作者 yiliang114 提出构造专门覆盖 todo tracking、plan mode、skills/workflows、subagent 等特性的测试任务集。**社区首个点赞的优质需求提案。**

### 10. [#13898](https://github.com/QwenLM/qwen-code/issues/13898) Web Shell 显示后台 subagent 实时状态（5 条评论）
作者 4ekuct25 希望在会话窗口中持续展示后台 Agent 的运行/完成/失败状态、耗时与剩余数量。**与桌面端 UI 体验改进诉求紧密相关。**

---

## 四、重要 PR 进展

### 1. [#13579](https://github.com/QwenLM/qwen-code/pull/13579) fix(core): 恢复含引号内容的外层 XML 调用
针对 #13492/#10700，当文档化的参数屏蔽与独立围栏归属冲突时，恢复完整的外层 XML 调用并保持其中引号调用惰性。

### 2. [#13878](https://github.com/QwenLM/qwen-code/pull/13878) feat(web-shell): 工作区文件浏览器与预览
Web Shell 右侧面板新增 Files 操作：渲染 Markdown/HTML/图片与 `.xlsx` 工作簿、支持只读源码检查、可调整与隐藏面板。

### 3. [#13996](https://github.com/QwenLM/qwen-code/pull/13996) feat(sdk-java): 私有 CSI Session 与原生 SQL 授权
移植 #13526 的会话授权区块：显式 Session 创建与请求固定、原作者写入与首次激活、本地日志/资源证明、不可变 SQL 执行授权。

### 4. [#13816](https://github.com/QwenLM/qwen-code/pull/13816) fix(managed-agent): 恢复阻塞时归还 Workspace 挂载
新增窄域 broker 内部接口 `POST /tool-sessions/{runtimeSessionId}:release-mount`，仅释放托管 Workspace 会话持有的执行挂载，不触及其他持久化。

### 5. [#9305](https://github.com/QwenLM/qwen-code/pull/9305) fix(ui): VP 模式短内容底端对齐
修复 `useTerminalBuffer` 下对话内容顶部对齐导致的空白在底部的问题（issue #9300），改为底部对齐。

### 6. [#13931](https://github.com/QwenLM/qwen-code/pull/13931) feat(managed-agent): L4 Shell 与 MCP Session 生命周期
为 `hosted-workspace-shell/1` 与 `hosted-workspace-mcp/1` profile 加入持久关闭/删除流程。

### 7. [#13973](https://github.com/QwenLM/qwen-code/pull/13973) feat(web-shell): Managed Agent 复用标准 UI
托管代理的创建与对话复用标准欢迎页、合成器、消息布局以及原生 Workspace/模型控件。

### 8. [#14017](https://github.com/QwenLM/qwen-code/pull/14017) fix(ci): 恢复复用的 runner checkout 与 Java 锁等待
在常规 Linux CI、SDK Java、Autofix、Triage 等任务中以 runner 本地全新 Git metadata 启动 checkout，修复 #13951 等 unresolved deltas 故障。

### 9. [#14018](https://github.com/QwenLM/qwen-code/pull/14018) test(managed-agent): 探针失败后清理恢复 fixtures
基于 #14017 的合并提交，仅包含 4 个恢复测试/文档文件。

### 10. [#13902](https://github.com/QwenLM/qwen-code/pull/13902) feat: 将 agent 身份与 Agent Team 投射到 ACP/daemon 线（引用 #13785）
所有 projected subagent 帧携带 `_meta.agent_id`，让多智能体执行真正进入可归属、可中断、可树形化的公共协议层。

---

## 五、功能需求趋势

| 方向 | 热度信号 | 代表 Issue |
|------|---------|-----------|
| **Managed Agent 多智能体架构** | 🔥🔥🔥 | #12380、#13785、#13395、#13502 |
| **Web Shell / Desktop UI 体验** | 🔥🔥 | #13898、#13837（RTL/LTR）、#14019（智能 UI）、#13967（i18n） |
| **SDK-Java / CSI / SQL 授权** | 🔥🔥 | #13996、#13546 |
| **XML 工具调用解析健壮性** | 🔥🔥 | #10700、#13492 |
| **benchmark / 评测体系** | 🔥 | #14011（harness SWE） |
| **CI/CD 与供应链安全** | 🔥 | #13078、#13951、#13925（release notes 重复） |
| **国际化与无障碍** | ↑ | #13837（双向文本）、#13870（OSC 7501）、#13967（VS Code 本地化） |
| **MCP 生态集成** | ↑ | #13987（You.com MCP）、#14009（disable-mcp-server 标志丢失） |

---

## 六、开发者关注点

1. **CI/构建稳定性频发**：#13951 复用的 self-hosted runner checkout 报 `unresolved deltas`、#13078 依赖 CVE 审计失败、#13925 生成的 release notes 重复列出已发布 PR——都是工程效率的"日耗子药"。PR #14017/#14018 已着手 runner 隔离与 fixture 清理。

2. **托管代理的多租户隔离边界**：#13937、#13838、#13992 集中反映宿主层面 InnoDB 锁冲突、409 重接冲突、retention 后释放凭证丢失等问题，是 managed-agent 落地的核心难题。

3. **XML tool-call 解析的边界条件**：含引号的外层调用（#13492）、孤儿闭合标签（#10700）已横跨多个月份，证明仅靠正则匹配的恢复策略难以收敛。社区正在重新设计围栏归属与冲突优先级。

4. **CLI / MCP 配置副作用**：#14009 揭示 `--disable-mcp-server` 在 settings.json 重新计算时被丢弃，反映运行时配置与持久化配置两套来源的同步失序。

5. **UX/本地化呼声上升**：希伯来语 RTL/LTR 混排（#13837）、VS Code IDE 伴生 UI 本地化（#13967）、交互式 TUI 的 OSC 7501 Program Status（#13870）表明产品已迈向国际化。

6. **协议层 vs 内部实现的张力**：#13785、#13902 反复强调多智能体身份必须成为公共契约的一等公民，而非实现细节，这是社区对协议可演进性的根本诉求。

---

*日报由技术分析师基于 GitHub 公开数据自动汇总。点 👍 或评论可影响明日榜单纯化方向，欢迎在 [Issues 区域](https://github.com/QwenLM/qwen-code/issues) 反馈。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-10-13

> 数据来源：`Hmbown/DeepSeek-TUI` · 仓库实际工程条目归属 `codewhale-hq/Codewhale`（TUI 子项目为 `codewhale-tui`）

---

## 📌 今日速览

今日社区整体节奏平稳，无新版本发布，但合入线推进有序。**0.10.2 版本正式进入 ready-to-tag 阶段**（PR #6968），核心交付 endpoint-scoped catalog 与 tiered pricing 落地；同时两位贡献者集中发力 **Windows CI 稳定性治理**（PR #6966、#6967），针对 `steer_turn` 与 `child_permission_gate` 的超时偶发问题给出收敛方案。TUI 侧，PR #6943 继续推进 `#![allow(dead_code)]` 清理，揭开了历史技术债的一角。

---

## 🚀 版本发布

过去 24 小时**无新 Release**。

但 **PR #6968**（[链接](https://github.com/codewhale-hq/Codewhale/pull/6968)）正在将 0.10.2 handoff 分支（`wip/0.10.2-6396-handoff-20261012`，WIP commit `8324b60d8`）推到 ready-to-tag 状态，主要承载 **#6396 endpoint-scoped catalog + exact tiered pricing**。维护者明确标注：**不要从该 PR 直接打 tag**，需 maintainer 走发布流程。

---

## 🔥 社区热点 Issues

> ⚠️ 过去 24 小时仅 1 条 Issue 更新，无法凑齐 10 条，全部呈现如下：

### #6650 · [CLOSED] The shortcut key for switching thinking intensity is abnormal
- 作者：luestr · 创建 2026-09-26 · 更新 2026-10-12 · 评论 3 · 👍 0
- 链接：[codewhale-hq/Codewhale#6650](https://github.com/codewhale-hq/Codewhale/issues/6650)

**为什么值得看：** TUI 核心交互回归。用户报告使用 `Ctrl+T` 全循环切换 thinking intensity 档位时，连续按 3 次不会换挡，仅第 4 次才生效。该 bug 直接关系 TUI 高频快捷键体验，且已收到 3 条讨论但点赞为 0，说明复现/修复路径仍有讨论空间。标签为 `[CLOSED]`，但仍建议跟踪是否回归或迁移到新 Issue。

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时共 6 条 PR 更新，全部列出如下：

### #6968 · 0.10.2: endpoint-scoped catalog + tiered pricing (#6396)
- 作者：Hmbown · 状态 OPEN · 标签：release-prep
- 链接：[codewhale-hq/Codewhale#6968](https://github.com/codewhale-hq/Codewhale/pull/6968)
- **要点：** 接手 #6396 长期 handoff 工作，目标是让 endpoint-scoped catalog + exact tiered pricing 落地。WIP commit 已就位，分支本身不再做功能性新增，仅做"ready-to-tag"扫尾。

### #6967 · test(runtime): steer tests no longer require the two-second in-band receipt
- 作者：Lstarsky0 · 状态 OPEN · 标签：contribution-gate, windows-ci
- 链接：[codewhale-hq/Codewhale#6967](https://github.com/codewhale-hq/Codewhale/pull/6967)
- **要点：** `steer_turn` 之前硬等 `STEER_SETTLE_WAIT=2s`，否则返回 `Queued`（`steer_count=0`），两个测试断言 `steer_count==1` 在 settle 超过 2s 时必挂。本 PR 移除对 2s 内带 receipt 的依赖，规避 windows-latest 上的偶发失败。

### #6966 · test(subagent): widen three short approval bounds to 30 s
- 作者：Lstarsky0 · 状态 OPEN · 标签：contribution-gate, windows-ci
- 链接：[codewhale-hq/Codewhale#6966](https://github.com/codewhale-hq/Codewhale/pull/6966)
- **要点：** `child_permission_gate::ask_without_a_durable_receipt_store_fails_closed_before_prompting` 给 `registry.execute` 只留 250ms 决断窗口，10-11 起在 windows-latest 上 4 次超时（其中 3 次发生在 main）。本次将相关审批边界放宽到 30s，先解决"过严"误报。

### #6943 · chore(tui): drop the blanket dead_code allow in five modules
- 作者：Lstarsky0 · 状态 OPEN · 标签：contribution-gate, tui, tech-debt
- 链接：[codewhale-hq/Codewhale#6943](https://github.com/codewhale-hq/Codewhale/pull/6943)
- **要点：** 来自 #5587 的子集。去掉 5 个 TUI 模块的 `#![allow(dead_code)]`，让 `cargo check -p codewhale-tui --all-targets` 暴露真实未用项：
  - `worker_profile.rs`：allow 是 stale 的，无未用项；
  - `model_profile.rs`：`FactProvenance::LegacyModelHeuristics` 等历史路径已无人调用；
  - 其余模块同样存在待清理枚举/方法。
- **影响：** 后续必然产出新的清理 PR，是 TUI 重构的"前置测绘"。

### #6811 · web: pair React and React DOM 19.3
- 作者：dependabot[bot] · 状态 **CLOSED** · 标签：dependencies, javascript, bot-authored
- 链接：[codewhale-hq/Codewhale#6811](https://github.com/codewhale-hq/Codewhale/pull/6811)
- **要点：** 此前 React 升级到 19.3 但 react-dom 仍停留在 19.2.8，Web 端无法构建。本 PR 将两者统一到 19.3.0，同步 `@types/react` 与 `scheduler 0.28.0`，闭合依赖漂移。

### #6959 · feat(api): read and write a workspace's project trust over the Runtime API
- 作者：gaord · 状态 OPEN · 标签：api, ecosystem
- 链接：[codewhale-hq/Code

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*