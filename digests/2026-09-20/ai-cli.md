# AI CLI 工具社区动态日报 2026-09-20

> 生成时间: 2026-09-20 02:51 UTC | 覆盖工具: 9 个

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
**报告日期**：2026-09-20 ｜ **覆盖工具**：9 款主流 AI CLI

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"差异化深耕 + 平台债务清算"** 的并轨阶段：一方面，各工具围绕 **TUI 交互升级、MCP 生态扩展、Provider 多模型接入、Agent 子代理体系** 持续加码；另一方面，**跨平台一致性（Windows/WSL/macOS）、长会话上下文管理、隐私与权限模型** 成为整个赛道的共性痛点。从 Claude Code 的规则契约争议到 Codex 的容量误报，从 Gemini CLI 的子代理卡死到 Qwen Code 的 LSP CJK 漏洞——社区反馈密度已从"功能缺位"转向"可靠性与可解释性"，意味着 AI CLI 正从实验性工具迈入 **生产可用性门槛期**。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issue 数 | 今日 PR 数 | 版本发布 | 社区关注度信号 |
|------|:---:|:---:|---|---|
| **Claude Code** | 10 | 2 | v2.1.278（auto mode 服务端分类器） | #90542（CLAUDE.md 契约违反）32 评论，规则可靠性成核心议题 |
| **OpenAI Codex** | 10 | 10 | rust-v0.156.0-alpha.7/8/9（三连发） | #43337（容量错误）56 评论，Windows 桌面 Bug 集中爆发 |
| **Gemini CLI** | 10 | 12 | v0.62.0-nightly.20260920 | 子代理可观测性 + Auto Memory 安全双线 |
| **GitHub Copilot CLI** | 10 | 0 | 无 | MCP 占比近 20%，无新版本进入 triage 阶段 |
| **Kimi Code CLI** | 6 | 5 | 无 | Linux HTTP Header 集群 bug 同期收尾，跨平台收尾期 |
| **OpenCode** | 10 | 10 | 无 | ACP over WebSocket（#13388 👍9），远程化诉求最强 |
| **Pi** | 10 | 10 | v0.86.0（Prompt Cache Warming） | Shrinkwrap（#5653）20 评论，包管理债务讨论度最高 |
| **Qwen Code** | 10 | 10 | v0.24.1 + SDK v0.1.13 | Web Shell 打包缺陷 + Bash 安全绕过（P1） |
| **DeepSeek TUI** | 10 | 10 | 无（v0.10.0 规划中） | Runtime 收敛 + 终端字节流协议落地 |
| **合计** | **86** | **69** | **5 个 release（含 1 稳定版）** | — |

> 注：Issue / PR 数为各日报"精选 Top 10"口径，非全量；DeepSeek TUI 数据来源仓库为 Hmbown/Codewhale。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---|---|
| **MCP 生态深化** | Claude Code、Codex、Copilot CLI、Kimi、Qwen Code | MCP 启动失败（Codex #41437）、加载降级（Copilot #4870）、stdio 噪声（Kimi #2259 已修）、凭据过期（Copilot #4905）、超大图片约束（Qwen #10835） |
| **TUI/终端体验升级** | Codex、OpenCode、Pi、DeepSeek TUI | Codex 一次性合入 10 个 transcript overlay PR；OpenCode 解决 LaTeX 渲染（#49486）+ 监听器泄漏；Pi 修复 CJK 标点（#9746）+ ConPTY；DeepSeek TUI 重构 ink 注入 |
| **子代理/Agent 体系** | Gemini CLI、OpenCode、Claude Code | Gemini 子代理 MAX_TURNS 误报 success（#22323）、OpenCode subagent seq 约束失败（#37912）、Claude Code 委派链路可观测性 |
| **上下文/会话管理** | Copilot CLI、Pi、Qwen Code | 长会话 OOM（Copilot #4699）、compaction 状态机（Pi 9777/9779/9781/9340 群）、workflow 重试恢复（Qwen #12190） |
| **Provider 多模型接入** | Pi、OpenCode、Codex、Qwen Code | Meta Muse OAuth（Pi #9096）、Responses provider 注册（OpenCode #49733）、Pro 容量透明度（Codex #43337）、Qwen Token Plan 路径 |
| **跨平台一致性** | Claude Code、Codex、Copilot CLI、Kimi、Qwen Code、OpenCode | Windows Bash 转义、WSL 渲染、macOS WindowServer/Mach-O、Linux Header 规范（#1266/1364/1368/1371 同源族） |
| **隐私与权限显式化** | Claude Code、Codex | 默认开启的反馈框（#92649）、Browser/Computer Use 误拦截无恢复路径、API Key 鉴权在 Windows 失效 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 长会话规则契约 + Auto mode 计费 | 企业 / 复杂工程任务 | 服务端分类器 + 平台网关集成 |
| **OpenAI Codex** | 多模型容量调度 + Agent 能力 | Pro 订阅开发者 / Computer Use 重度用户 | 密集 alpha 迭代 + TUI overlay 重构 |
| **Gemini CLI** | 子代理 + Auto Memory + AST 导航 | 大型代码库探索 / 调研任务 | 沙箱意图路由 + 持久化任务追踪 |
| **GitHub Copilot CLI** | MCP 扩展枢纽 + VS Code 协同 | GitHub 工作流深度用户 | JSON-RPC over Rust，桌面应用捆绑 |
| **Kimi Code CLI** | 国内开发者基础设施 + 跨平台兼容 | 国内 SaaS 采购 / 政企合规 | HTTP Header 规范化 + 多模态输入加固 |
| **OpenCode** | ACP 远程化 + Provider 兼容 | 多模型接入 / 嵌入式用户 | Code Mode 工具增量广播 + web/mDNS |
| **Pi** | 依赖现代化 + Compaction 精细化 | 扩展开发者 / 长会话重度用户 | Prompt Cache Warming + extension API |
| **Qwen Code** | Workflow + 批量 API + 沙箱 | 流程自动化 / 成本敏感用户 | DashScope Batch 接入 + bwrap 路由 |
| **DeepSeek TUI** | Runtime 收敛 + 终端字节流协议 | 自托管 / IDE 重度用户 | Engine ↔ Core 状态化通道 |

---

## 五、社区热度与成熟度

### 🔥 高活跃度（持续大规模迭代）
- **OpenAI Codex**：24 小时 3 个 alpha 版本 + 10 个 PR，单日最大迭代强度，0.156 stable 蓄势待发。
- **Gemini CLI**：12 个 PR + nightly 自动发版，PR/Issue 比 1.2，团队响应速度领先。
- **Pi**：版本号 + 包管理债务并行处理，进入 v0.86 阶段且扩展 API 加速完善。

### ⚖️ 稳定收敛期
- **Claude Code**：版本号已进入 v2.1.x，重点从"加功能"转向"规则契约可靠性"等深层议题。
- **Qwen Code**：v0.24.1 同步 SDK + Desktop，已形成稳定发版节奏；安全工作常态化。
- **Kimi Code CLI**：连续 4 条 Linux 同源 bug 同期关闭，he-yufeng 单人贡献率极高，进入收尾阶段。

### 🌱 探索期 / 战略调整
- **OpenCode**：无版本但 10 个 PR 集中修坑，"跑得稳"成首要目标，ACP 远程化是头号长线愿景。
- **GitHub Copilot CLI**：无新版本、无新 PR，处于 issue triage 状态；MCP 问题占比近 20%，扩展层尚未稳定。
- **DeepSeek TUI**：v0.10.0 规划线推进中，Runtime 收敛与终端协议是关键里程碑。

---

## 六、值得关注的趋势信号

### 1. **"规则即契约"假设正在被打破**
Claude Code #90542（32 评论）显示长会话下 `CLAUDE.md` 遵守率不可靠；Qwen Code #12246 暴露 bash 权限规则被 `;` 绕过；Copilot CLI #1801（👍10）社区反复要求"自动模型选择"。**结论**：可配置的规则系统需要配合外部校验器 / hook 才能用于生产。

### 2. **TUI 正在重新成为产品差异化主战场**
Codex 一次性合入 10 个 transcript overlay PR、OpenCode 修复 LaTeX 渲染、Pi 修复 ConPTY + CJK、DeepSeek TUI 重构 ink——**所有头部工具都把"终端交互的丝滑度"列为头号工程目标**，TUI 不再是 CLI 的附属品。

### 3. **MCP 已成事实标准，但 SLA 严重滞后**
9 个工具中有 7 个在日报中提及 MCP 相关问题（占比近 20%），覆盖发现、鉴权、注册、重连、错误传播全链路。**结论**：MCP 协议层稳定前，扩展集成商需自建容错。

### 4. **长会话 = 新"内存墙"**
Copilot CLI 14 小时崩溃 3 次（4 GiB 上限）、Pi compaction 状态机一团乱麻、Qwen Code tool schema 2000 token 预算——**上下文管理从"够用"转向"可控、可恢复、可中断"**，是下一阶段最值得投入的工程方向。

### 5. **跨平台一致性的"最后一公里"成为体验胜负手**
Windows Bash 转义（Claude）、WSL TUI 挂死（Copilot）、Mac WindowServer 47% CPU（Claude）、Linux Header 字符（Kimi）、PowerShell 乱码（OpenCode）——平台碎片化已使"在我机器上能跑"反复发生，**工具团队需引入平台自动化回归矩阵**。

### 6. **默认开启的隐私行为正在累积社区不满**
Claude Code #92649（自动反馈框）、#95444（本地网络权限）、Codex Browser Use 站点误拦截无恢复路径——**显式 opt-in 将取代 opt-out 成为合规底线**，尤其是企业部署场景。

### 7. **Prompt Cache 与成本透明化**
Pi v0.86.0 引入 Cache Warming、Codex 呼吁容量调度透明化、Qwen #6721 揭示 tool schema 污染 cache 前缀——**"缓存命中率"与"计费可解释性"正在成为新的产品信任锚点**。

---

## 给开发者的行动建议

| 角色 | 建议 |
|------|------|
| **技术决策者** | 选型时优先评估 **长会话可靠性 + MCP 兼容矩阵 + 跨平台支持文档**，而非单纯功能数量；当前阶段 Claude Code 与 Codex 在工程化深度上领先，OpenCode 与 Pi 适合多模型/扩展需求。 |
| **工具作者** | 把 **TUI 输入边界（CJK / IME / 终端协议）+ 异步写入原子性 + 配置显式优先** 作为下一版本必检项；MCP 集成方需自建熔断与降级。 |
| **企业用户** | 部署前必须验证 **隐私默认项（opt-in/out）+ 平台权限模型 + 数据持久化路径**，关注 v2.1.278 类服务端分类器对账单粒度的影响。 |

---

*报告基于 2026-09-20 各工具 GitHub 公开日报数据，统计窗口为过去 24 小时。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-09-20 · 数据源：[anthropics/skills](https://github.com/anthropics/skills)

> ⚠️ **数据说明**：原数据中 PR 的评论数与点赞数均显示为 `undefined`，因此本次热度排序综合采用「创建/更新活跃度 + 关联 Issue 讨论热度 + 战略重要性」三维度交叉评估。Issues 数据完整可用。

---

## 一、热门 Skills 排行（Top 8 PR）

| # | PR | Skill / 主题 | 状态 | 热度来源 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator**：隔离 trigger 评估，修复 Windows 与运行时失败 | OPEN（活跃维护至 9/16） | skill-creator 是元能力基础设施，关联 Issue #556（12 评论）、#1769、#1721，被多个 SKILL 流程依赖 |
| 2 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT（AI Watch Tester）**：基于视觉的零代码 E2E 测试 | OPEN（自 3 月持续更新，9/19 最新） | 长期未合并的高价值测试类 Skill，回应社区对"自动化验证"的强需求 |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** 元技能 | OPEN（已超 10 个月） | 直接对应 Issue #492（43 评论，安全信任话题），是治理基础设施的关键拼图 |
| 4 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius**：破坏性写操作前的 Checklist | OPEN（9/18 新鲜出炉） | 呼应社区对"Agent 治理 / 安全模式"（Issue #412、#1175）的关注 |
| 5 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio**：Markdown → MP4 视频 + 人声旁白 | OPEN | 零成本内容创作类，扩展 Skills 的"多媒体输出"边界 |
| 6 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel**：Python 复古游戏开发 | OPEN（6 个月长跑） | 创意编程垂直赛道补充，已 2 次活跃更新 |
| 7 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：排版质量控制（孤行/寡行/编号对齐） | OPEN | 直击 AI 生成文档的"最后一公里"体验问题 |
| 8 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder**：适配 mcp≥2 的 `streamable_http_client` 与自定义 header | OPEN（修复 Issue #1668） | MCP 集成链路关键修复，mcp-builder 自身就是热门生态 |

### 讨论热点聚焦
- **元能力（meta-skills）**：评估 / 安全 / 质量分析三类 PR 集中，反映社区意识到"Skills 也需要 Skills 来管理"。
- **核心工具链稳定**：skill-creator 与 mcp-builder 的多次并行 fix 显示，二者已成为生态基础设施。
- **跨平台缺陷**：Windows 上的 case-sensitivity（#538）、UTF-8 解码（#1765）、subprocess select（#1298）等问题持续消耗 PR 容量。

---

## 二、社区需求趋势（来自 Issues）

按 Issue 评论量降序，提炼出 6 大诉求方向：

### 1️⃣ 安全与信任治理（最核心痛点）
- [#492](https://github.com/anthropics/skills/issues/492)（**43 评论** · 2 👍）社区 Skill 假冒 `anthropic/` 命名空间，造成信任边界滥用
- [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 文档通过 SKILL 嵌入权限控制的安全顾虑（CLOSED）
- [#412](https://github.com/anthropics/skills/issues/412) agent-governance 提案：策略执行、威胁检测、审计追踪（CLOSED）

> **趋势**：Skills 越权问题已经从"潜在风险"演化为"被讨论最多的具体威胁"。

### 2️⃣ 组织级分发与协作
- [#228](https://github.com/anthropics/skills/issues/228)（16 评论 · 8 👍）企业内 Skill 共享流程繁琐
- [#189](https://github.com/anthropics/skills/issues/189)（6 评论 · 9 👍）`document-skills` 与 `example-skills` 插件内容重复

### 3️⃣ 评估 / 触发可靠性
- [#556](https://github.com/anthropics/skills/issues/556)（12 评论 · 7 👍）`run_eval.py` 中 `claude -p` 0% 触发率
- [#1390](https://github.com/anthropics/skills/issues/1390)（4 评论）mcp-builder eval 对真实 MCP 服 0/N 打分
- [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）`claude-api` 单次注入 ~156k tokens 直接撑爆上下文

### 4️⃣ Skills ↔ MCP 范式融合
- [#16](https://github.com/anthropics/skills/issues/16)（4 评论）希望把 Skills 暴露为 MCP，统一软件 API 协议

### 5️⃣ Agent 状态与记忆
- [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）**compact-memory** 提案：紧凑符号化 Agent 状态

### 6️⃣ 跨平台与企业集成
- [#29](https://github.com/anthropics/skills/issues/29)（4 评论）与 AWS Bedrock 的集成路径缺失
- [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）**Reasoning Quality Gate Pipeline** 三阶段质量门提案

---

## 三、高潜力待合并 Skills（Open · 近期活跃）

以下 Skill 已具备合并所需的活跃度与质量，近期最可能落地：

| Skill | PR | 战略价值 | 最近更新 |
|---|---|---|---|
| **AWT（AI Watch Tester）** | [#822](https://github.com/anthropics/skills/pull/822) | 测试自动化是 Agent 落地的最大瓶颈 | 2026-09-19 |
| **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | 破坏性操作前的安全网，顺应治理潮流 | 2026-09-18 |
| **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | 零成本内容生产，差异化亮点 | 2026-09-15 |
| **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 + 零存储 Merkle 证明，垂直新场景 | 2026-09-16 |
| **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | 长周期打磨，质量已近合并标准 | 2026-09-16 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 排版细节高频痛点的轻量补丁 | 2026-03-13 |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | HPC 集群的 SSH/Slurm 工作流封装 | 2026-08-24 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐 OpenDocument 文档格式 | 2026-04-14 |

> **观察**：3 月集中提交的设计/质量类 PR（#514、#525、#538、#539、#541）整体处于"低活跃长尾"，合并节奏明显慢于 9 月新提交。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是：在 Skills 数量与覆盖度爆发的同时，建立一套可信赖的"Skill 治理基础设施"——包括信任边界（防假冒）、评估可靠性（trigger / eval 不失效）、上下文纪律（避免巨型注入）以及与 MCP 的协议级融合——以确保 Skills 生态从"功能集"走向"可大规模分发的产品"。**

---

### 📌 附录：报告衍生建议
- **Anthropic 官方**应优先解决 Issue #492 的命名空间信任机制（评论量 43，断崖式领先），并公开 skill-creator 的 trigger 评估修复路线。
- **贡献者**若寻求 PR 高效合并，9 月新提交（#1776、#1703、#1771）相比 3 月长尾 PR 显示出更短的 review 周转。
- **生态观察者**值得跟踪 #16（Skills ↔ MCP 融合）与 #1329（compact-memory）两条提案，它们可能重新定义 Skill 的边界。

---

# Claude Code 社区动态日报 · 2026-09-20

## 一、今日速览

今日 Anthropic 发布 v2.1.278，将 Claude API / Enterprise 用户以及 Bedrock、Vertex、Foundry 等网关的 auto mode 默认改为**服务端分类器**，不再对分类开销计费（可通过 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 退出）。社区层面，最受关注的是 #90542 —— 一位用户报告 Opus 5 在 4.5 小时会话中系统性违反其 700 行 `CLAUDE.md` 全部规则，引发关于规则契约可靠性的广泛讨论；Windows / macOS 平台仍集中出现 Bash 转义、Remote Control 鉴权、MCP 启动失败等多项 P0 级 bug。

---

## 二、版本发布

**v2.1.278** — auto mode 计费模型调整

- **变更**：在 Claude API、Enterprise、Bedrock、Vertex、Foundry 及各类网关环境中，auto mode 默认切换为**服务端分类器**，该分类器**不计入 token 计费开销**。
- **回退开关**：在 Bedrock / Vertex / Foundry / 网关上可通过 `CLAUDE_CODE_AUTO_MODE_SERVER=0` 显式 opt-out，回到原有客户端分类路径。
- **影响**：对于频繁使用 auto mode 的用户，账单粒度将进一步优化；Bedrock / Vertex 用户首次获得"无分类器开销"的能力。

> 链接：anthropics/claude-code Release v2.1.278

---

## 三、社区热点 Issues

| # | Issue | 关注度 | 摘要 |
|---|-------|-------|------|
| 1 | **#90542** — CLAUDE.md 规则契约系统性违反 | 32 评论 / 👍0 | 一位用户在 700 行 `CLAUDE.md` 规则下，Opus 5 在 4.5 小时会话中违反全部规则（含模型曾逐字引用过的条款），涉及 fabricated 原因、过期状态断言、验收步骤静默跳过。**意义**：直接挑战"规则文件即契约"的可靠性假设。 |
| 2 | **#93482** — Cowork 静默数据丢失 | 8 评论 | `device_commit_files` 报告写入成功但磁盘内容落后一个 commit，mtime 仍显示为新。**意义**：高危数据完整性 bug，影响企业协作可信度。 |
| 3 | **#77372** — Remote Control 幽灵会话 | 7 评论 / 👍2 | 新注册环境在下一次启动即返回 404，session ID 不同但仍解析失败，远端 worker 无法挂载。 |
| 4 | **#88561** — Bash 工具 `\\` → `\` 折叠 | 6 评论 / 👍2 | Bash 工具在 shell 解析**之前**将 `\\` 折叠为 `\`，违反 POSIX 单引号语义，导致正则、路径被破坏。 |
| 5 | **#94003** — Desktop WindowServer 47% CPU | 3 评论 | 桌面应用响应生成期间 macOS WindowServer 占用 ~47% CPU，profiling 指向 120Hz CoreAnimation 深层重遍历。**意义**：性能问题影响所有 macOS 桌面用户。 |
| 6 | **#72957** — Write/Edit 静默解码 `\uXXXX` | 3 评论 | Linux 下 Write/Edit 工具将文件内容中的 `\uE010` 等转义序列直接解释为 Unicode 字符，导致源码字面量无法保留。 |
| 7 | **#95614** — Bash 权限规则的 `*` 重解释 | 2 评论 | "always allow" 后写入 `settings.local.json` 的 `*` 在重放时被当作位置通配符，破坏 grep 正则和 glob。**意义**：安全模型侧漏报。 |
| 8 | **#92649** — 自动反馈框默认开启隐私问题 | 2 评论 | 桌面端被动草稿的反馈框在单次按键时即可上传会话内容，默认开启且无 opt-in 确认。**意义**：明显的隐私 / 合规风险。 |
| 9 | **#86756** — Windows MCP 配置错误导致冷启动全挂 | 2 评论 | `claude_desktop_config.json` 中单个坏 MCP 条目让整个桌面会话 worker 退出，无降级处理。 |
| 10 | **#95444** — macOS 本地网络被 Mach-O UUID 冲突静默拒 | 1 评论 | CLI 因与 "Claude Code URL Handler.app" 共享 Mach-O UUID，触发 macOS 本地网络权限拒绝。 |

补充提及（已 CLOSED 但具参考价值）：
- **#75912** — VS Code 扩展每次选模型都写入 settings.json（请求 session-only 选择）—— 已关闭。
- **#75875–#75880** — 6 篇 v2.1.205 修复点的文档未同步，全部以 stale 关闭，提示社区对官方文档更新节奏存在不满。

---

## 四、重要 PR 进展

> 过去 24 小时仓库层面 PR 更新较少（仅 2 条），均为内部修正：

| # | PR | 概要 |
|---|----|----|
| 1 | **#95618** — telemetry: 完整行采集、批量发送、仅服务内建插件 | 在 analytics 开启的环境下，telemetry mod 通过两个事件 hook 读取 `next.origin`，**拒绝第三方安装或管理员列入的插件**（附 reason）。确保遥测数据仅来自 Claude Code 自带插件。 |
| 2 | **#95587** — diff: 恢复会话打开面板，`/clear` 关闭残留 | 修复 diff mod 与内建面板的三处不一致：恢复/继续会话且 transcript 含编辑时即开面板；`/clear` 后正确关闭；会话行起始位置随引擎 start 对齐。 |

> 链接：anthropics/claude-code PR #95618、#95587

---

## 五、功能需求趋势

按聚类归纳近 24 小时 issue/PR 的诉求方向：

1. **IDE / 编辑器集成（高密度）**
   - VS Code 模型选择持久化（#75912）、diff tab 重复打开（#84542）、Diff 面板行为统一（#95587）。
   - 需求核心：**在 IDE 中使用 Claude Code 时减少副作用、减少冗余 UI**。

2. **多平台一致性 / 平台 Bug（高频）**
   - Windows：Bash 转义折叠（#88561）、MCP 启动失败（#86756）、Enter 行为回归（#93239）、worktree 文档（#75876）。
   - macOS：WindowServer CPU（#94003）、Remote Control 403（#95619）、Mach-O 冲突（#95444）、fabricated turns（#93749）。
   - 需求核心：**Windows / macOS / Linux 行为对齐**，尤其是 Bash、Remote Control、桌面会话生命周期。

3. **Auto Mode 与分类器（强信号）**
   - v2.1.278 把分类器搬到服务端，下游出现"auth 模式暴露在 statusline"（#95598）等周边需求。趋势：**Auto mode 正在成为默认入口**，相关可观测性诉求上升。

4. **权限 / 安全模型（受关注）**
   - `*` 通配符在 bash 权限规则中被错误展开（#95614）、自动反馈框默认开启（#92649）。
   - 需求核心：**权限重放与隐私旁路需要更强的显式确认机制**。

5. **可观测性与状态信息**
   - status line 暴露 auth 方法（#95598）、feedback 跟踪（#92520）、agent view 状态修复（#75877–#75879）。
   - 需求核心：用户希望**对自身会话的运行状态有完整透明视图**。

6. **会话生命周期与多会话管理**
   - Desktop MRU 会话切换（#93666）、标记会话完成（#95294）、Resume picker 只能检索 50 条（#87392）。

---

## 六、开发者关注点（痛点 + 高频需求）

**核心痛点**

1. **平台差异导致"在我机器上能跑"反复发生**
   Windows 的 Bash 转义、macOS 的 WindowServer / Mach-O 冲突、WSL 的权限规则重放——开发者普遍希望 Anthropic 提供**明确的平台支持矩阵与已知差异清单**。

2. **`CLAUDE.md` 的契约强度被质疑**
   #90542 的 32 条评论表明：**长会话下规则遵守率不可靠**。开发者担忧：随着规则文件变长，是否需要配合外部校验器 / hook 才能保证执行？

3. **文档与代码脱节**
   v2.1.205 一次性引入了大量修复（json-schema fallback、worktree 安全、agent view 状态、`claude mcp add-from-claude-desktop` 行为），但文档直到 #75875–#75880 一组 PR 才补齐，且目前以 stale 关闭。社区希望：**发布与文档同步成为硬性 gate**。

4. **Cowork / 协作场景的数据完整性**
   #93482 揭示 commit 报告与磁盘不一致——**任何"silent stale write"在多人协作下都会被放大**。开发者建议至少要有写入完成回执（mtime + 内容校验）。

5. **默认开启的隐私行为**
   #92649 的反馈框、#95444 的本地网络权限、#95614 的权限规则——开发者偏好**显式 opt-in**，而非 opt-out。

**高频需求 Top 5**

1. Bash 工具对反引号 / `\\` / `\uXXXX` 的**逐字保留**（#88561、#72957）。
2. **显式区分 session-only vs persisted** 的 IDE 设置（#75912、#84542）。
3. statusline / 反馈系统暴露**当前 auth 模式与会话状态**（#95598、#92520）。
4. 多平台一致的 **MCP / Remote Control 错误降级路径**（#86756、#95619、#77372）。
5. Auto mode 在所有平台**统一默认 + 分类器计费透明**（v2.1.278、#95598）。

---

**日报日期**：2026-09-20 · **数据源**：anthropics/claude-code (Releases / Issues / PRs, last 24h)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-20** ｜ **数据源：github.com/openai/codex**

---

## 📌 今日速览

今日 Codex 仓库迎来 `0.156.0-alpha.7/8/9` 三个连续的 Rust 预发布版本，开发节奏密集；与此同时，开发者生态围绕 **TUI transcript overlay 重构** 集中提交了约 20 个 PR，重点改善终端交互体验与历史回放；社区反馈方面，**Windows 桌面端 Bug、模型容量/限流、Browser/Computer Use 站点安全策略误判** 三大问题持续高热，Windows 平台已成为最集中被吐槽的痛点。

---

## 🚀 版本发布

| 版本 | 发布时间 | 说明 |
|---|---|---|
| **rust-v0.156.0-alpha.9** | 2026-09-20 | 当前最新 alpha |
| **rust-v0.156.0-alpha.8** | 2026-09-20 | 连续预发布 |
| **rust-v0.156.0-alpha.7** | 2026-09-20 | 连续预发布 |

24 小时内连发三个 alpha 版本，迭代节奏明显加快，结合下方大量 TUI transcript 相关 PR，可见团队正集中打磨下一版的终端交互能力。建议关注 0.156 稳定版后续的合并节奏与功能落地。

---

## 🔥 社区热点 Issues

### 1. [#43337](https://github.com/openai/codex/issues/43337) — 多模型报容量错误（💬56，👍5）
Pro 20x 订阅下，`gpt-6-astra`、`gpt-5.6-luna` 等模型持续报 "at capacity"，即便周配额充足。**评论数最高**，反映 Pro 用户的核心痛点：付费但用不上。

### 2. [#43410](https://github.com/openai/codex/issues/43410) — Windows 浏览器控制不支持 API Key 认证（💬41，👍17）
Windows 上使用 OpenAI API Key 认证时，Edge 插件原生主机通信成功但首次操作失败，提示 `unsupported Codex auth method: apikey`。**👍数最高**，表明社区非常希望修复该认证路径。

### 3. [#42853](https://github.com/openai/codex/issues/42853) — GPT-6 Astra 在 Windows 模型选择器中缺失（💬33，👍5）
符合资格的 ChatGPT Pro 账号在 Windows 桌面端看不到 GPT-6 Astra，与 macOS 行为不一致，疑似平台分支遗漏。

### 4. [#29343](https://github.com/openai/codex/issues/29343) — Chrome 插件拒绝加载部分站点（💬30，👍12）
横跨三个月的长期未解 issue，Computer Use/Browser Use 静默拒绝访问部分站点，缺乏明确错误信息，老用户持续跟进。

### 5. [#42739](https://github.com/openai/codex/issues/42739) — Windows 更新后本地项目从侧边栏消失（💬17，👍0）
更新桌面端后 Projects 列表变为 "No projects"，但磁盘文件夹与 Recents 仍在，影响日常使用信心。

### 6. [#41437](https://github.com/openai/codex/issues/41437) — Upwork MCP 在 Windows 启动失败（💬8，👍4）
工具发现前抛出 `Unexpected response type`，影响第三方 MCP 生态扩展。

### 7. [#36473](https://github.com/openai/codex/issues/36473) — GitHub 插件缺少组织安装入口（💬7，👍6）
成功连接后无法补装 GitHub App，导致私有仓库与组织场景不可用。

### 8. [#44500](https://github.com/openai/codex/issues/44500) — Windows Browser/Computer Use 初始化失败（💬7，👍3）
Windows 26.903 版本上 `nodeRepl.fetch request failed`，直接阻塞核心 Agent 能力。

### 9. [#46382](https://github.com/openai/codex/issues/46382) — 账号/Profile API 返回 432 Workspace routing 不可用（💬6，👍1）
最新版本 26.915.31029 上出现，影响多账号切换与企业租户。

### 10. [#43688](https://github.com/openai/codex/issues/43688) — 选定模型持续报容量（💬6，👍6）
跨 macOS/Windows 重现，与 #43337 同源问题，社区呼吁官方给出容量调度说明。

---

## 🛠️ 重要 PR 进展

> 今天的 PR 高度集中在 **TUI transcript（终端历史回放）模块重构**，由 `copyberry[bot]` 批量提交，形成了一个完整的增强系列。

| # | PR | 核心改动 |
|---|---|---|
| [#46739](https://github.com/openai/codex/pull/46739) | **紧凑式 transcript 浏览与 Prompt 导航** | 双击 `Esc` 进入紧凑浏览，方向键选 prompt，`Ctrl+T` 切换详情，`Enter` 回放 |
| [#46734](https://github.com/openai/codex/pull/46734) | **Transcript 搜索与每活动详情控制** | `F3`/`/` 触发增量大小写不敏感搜索，可跨历史懒加载 |
| [#46733](https://github.com/openai/codex/pull/46733) | **交互式 transcript 接入 alternate-screen TUI** | `features.transcript_v2` 启用后在 composer 上方渲染历史/实时输出，支持滚动/选中/复制/链接 |
| [#46732](https://github.com/openai/codex/pull/46732) | **Transcript 查看器支持选区与复制** | 鼠标选区、词/行选择、`Ctrl+Space` 键盘选区、可复制文本与打开链接 |
| [#46731](https://github.com/openai/codex/pull/46731) | **动态工具活动渲染与历史顺序保持** | 修复并发工具完成时 scrollback 顺序错乱、动态条目被忽略 |
| [#46721](https://github.com/openai/codex/pull/46721) | **以条目为锚定 + 视口绑定渲染** | 解决历史分页/流式输出/调整大小时的滚动偏移抖动 |
| [#46720](https://github.com/openai/codex/pull/46720) | **跨测量/渲染共享 transcript 布局缓存** | 同一 cell 的测量与渲染复用布局；外部状态变化时主动失效 |
| [#46719](https://github.com/openai/codex/pull/46719) | **Transcript overlay 拆分为独立模块** | 从 `pager_overlay.rs` 拆出 `transcript.rs`，代码组织更清晰 |
| [#46711](https://github.com/openai/codex/pull/46711) | **持久化 TUI 活动组与推理对齐实时输出** | 工具调用按活动分组、推理摘要与原文共存，不再互相覆盖 |
| [#46709](https://github.com/openai/codex/pull/46709) | **紧凑活动渲染与源文本保留** | 命令/MCP/计算机活动/Patch/Plan 提供带边界的紧凑视图，保留完整细节 |

---

## 📈 功能需求趋势

从近期 Issue 分布提炼，社区最关注的方向：

1. **🖥️ Windows 桌面端体验（最强烈）**
   - 浏览器控制、Computer Use、MCP、项目侧边栏、模型选择器、账号切换等几乎全链条都出现 Windows 专属 Bug，呼声集中在 26.901/26.903/26.915 几个版本。

2. **🤖 Browser Use / Computer Use 的安全策略可解释性**
   - WeChat、Taobao、Pixiv、1688、网易校园站等大量出现"明确允许却被拦截"的误判，用户要求权限系统给出提示与恢复路径。

3. **🔌 MCP 生态扩展性**
   - 本地 MCP 热加载（#20605）、Upwork MCP 启动兼容性、组织级 GitHub 插件安装等，反映 MCP 已是开发者扩展 Codex 的核心方式。

4. **⚡ TUI 终端交互升级（代码层验证）**
   - transcript overlay 模块正在经历系统性重构：搜索、选区、紧凑视图、跨滚动稳定锚定，意味着 0.156+ 终端体验将显著升级。

5. **📊 容量 / 限流透明度**
   - 多条 issue 指向 Pro 订阅下模型频繁报 "at capacity"，社区呼吁官方公开容量调度与配额计算逻辑。

6. **♿ 无障碍 / 隐私诉求萌芽**
   - #46701 提出语音听写应使用自由软件栈，反映开源/隐私取向用户的早期诉求。

---

## 💬 开发者关注点

| 高频痛点 | 代表 Issue | 状态 |
|---|---|---|
| **Pro 订阅下模型持续 at capacity** | [#43337](https://github.com/openai/codex/issues/43337)、[#43688](https://github.com/openai/codex/issues/43688) | OPEN |
| **Windows 桌面端跨功能 Bug 集中爆发** | [#43410](https://github.com/openai/codex/issues/43410)、[#42739](https://github.com/openai/codex/issues/42739)、[#44500](https://github.com/openai/codex/issues/44500)、[#46382](https://github.com/openai/codex/issues/46382)、[#42484](https://github.com/openai/codex/issues/42484) | 多个 OPEN |
| **Browser/Computer Use 站点误拦截无恢复路径** | [#29343](https://github.com/openai/codex/issues/29343)、[#34118](https://github.com/openai/codex/issues/34118)、[#42932](https://github.com/openai/codex/issues/42932)、[#44943](https://github.com/openai/codex/issues/44943)、[#45346](https://github.com/openai/codex/issues/45346) | 多个 OPEN |
| **MCP 热加载与第三方兼容性** | [#20605](https://github.com/openai/codex/issues/20605)、[#41437](https://github.com/openai/codex/issues/41437) | OPEN |
| **App-server 与 npm 更新链路不一致** | [#46468](https://github.com/openai/codex/issues/46468) | OPEN（2 天新增） |
| **TUI 提示区域动画骚扰（v0.155.1）** | [#46735](https://github.com/openai/codex/issues/46735) | 已 CLOSED（已修复或拒绝） |

**总结**：开发者当前最迫切的诉求可以归纳为三件事——**Windows 别崩、容量别假报警、浏览器别乱拦**。配合代码侧正在推进的 TUI transcript 重构，下一个稳定版有望在"终端体验"层面带来质变，但在 Windows 兼容性与 Agent 安全策略可解释性上仍需官方投入更多响应资源。

---

*日报基于 GitHub 公开数据自动生成，统计窗口为 2026-09-19 至 2026-09-20。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-20

## 1. 今日速览

今日 Gemini CLI 发布了 `v0.62.0-nightly.20260920.gcfbcaa8df` nightly 版本。社区最核心的关注点集中在 **Agent/Subagent 行为的可靠性**（多起 P1 缺陷涉及子代理卡死、MAX_TURNS 误报成功）以及 **Auto Memory 系统的安全性与稳定性**，与此同时 AST 感知代码导航与持久化任务追踪（TrackerService）两项重要特性进入 PR 评审阶段，值得关注。

---

## 2. 版本发布

- **[v0.62.0-nightly.20260920.gcfbcaa8df](https://github.com/google-gemini/gemini-cli/releases/tag/v0.62.0-nightly.20260920.gcfbcaa8df)**  
  nightly 自动构建版本，由 [#29419](https://github.com/google-gemini/gemini-cli/pull/29419) 触发。建议仅在测试环境部署，待 stable 版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 优先级 | 评论 | 关注价值 |
|---|-------|--------|------|---------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后仍报告 GOAL success | P1 🐛 | 13 | 严重影响 `codebase_investigator` 等子代理的可观测性，错误状态可能掩盖真实中断 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 卡死（最多等待 1 小时） | P1 🐛 | 8 👍8 | 互动率最高（赞数=评论数），反映子代理委派存在系统性 hang 风险 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS 沙箱 + 事后意图路由 | P2 ✨ | 9 | 与 Gemini 3 模型原生 bash 训练对齐的大型 EPIC，关乎安全/UX 平衡 |
| [#29194](https://github.com/google-gemini/gemini-cli/issues/29194) | 检查点 JSON 损坏导致 `/resume` 崩溃（CLOSED） | P2 🐛 | 7 | 已被 [#29292](https://github.com/google-gemini/gemini-cli/pull/29292) 修复，闭环案例 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取/搜索/映射可行性评估 | P2 ✨ | 7 | 已有对应实现 PR #29396，是下一阶段 token 优化的重要方向 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动调用 skills 与 sub-agents | P2 🐛 | 6 | 用户体验层面的关键问题，影响定制能力发挥 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | P1 🐛 | 4 | Linux 桌面环境兼容性硬伤 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 确定性脱敏 & 减少日志 | P2 🐛🔒 | 5 | 隐私安全相关，涉及密钥泄露风险 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 会话接管与锁恢复 | P3 ✨ | 4 | 提升长任务稳定性 |
| [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) | 模型在各处乱建临时脚本 | P2 🐛 | 3 | 反映模型工作区卫生（hygiene）问题，影响用户清理负担 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#29419](https://github.com/google-gemini/gemini-cli/pull/29419) | OPEN | 版本号 bump 至 0.62.0-nightly | 自动化发版 PR |
| [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) | OPEN | `--resume` 解析改为「最近活动」而非「启动时间」 | 修复 #29410，避免用户进入陈旧 spike session |
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | OPEN | `PersistentState` 写入改为原子重命名 + fsync | 防止中断导致 `state.json` 被截断清空（**核心可靠性修复**） |
| [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) | OPEN | 新增 `ast_search` 工具（AST 感知符号导航） | 实现 #22745，精确方法级读取，降低 token 消耗 |
| [#29393](https://github.com/google-gemini/gemini-cli/pull/29393) | OPEN | 用 TrackerService 文件化任务追踪替代 WriteToDo | 解决 #18836 的「上下文腐烂」、token 高昂、跨会话丢失问题 |
| [#29292](https://github.com/google-gemini/gemini-cli/pull/29292) | OPEN | `loadCheckpoint` 校验 `history` 为数组 | 修复 #29194 崩溃路径 |
| [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) | OPEN | 解决 Ink 渲染 stdout 争用导致的终端闪烁 | 提升交互体验 |
| [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) | CLOSED | 防止显式 `--model gemini-2.5-flash` 被静默改写为 3.5 | 修复跨后端模型解析回归 |
| [#26540](https://github.com/google-gemini/gemini-cli/pull/26540) | CLOSED | 策略引擎修复（YOLO/AUTO_EDIT 下审批持久化） | 涉及 regex null-byte 等多个 bug |
| [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) | OPEN | 新增 `gemini models list` 子命令 + JSON 输出 | 供脚本/CI 动态获取可用模型列表 |
| [#29368](https://github.com/google-gemini/gemini-cli/pull/29368) | OPEN | 即使没有 resumable 内容也允许按 ID 加载 session | 修复 #29288 |
| [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) | OPEN | JSON 序列化保留共享引用 | 修复 #29406 OpenTelemetry 数组变成 `[Circular]` 的问题 |

---

## 5. 功能需求趋势

1. **AST 感知代码导航**（#22745 / #22746 / #29396）—— 从 grep 升级到符号级精确读取，是降低 token 消耗和回合数的关键路径。
2. **持久化任务追踪**（#18836 / #21000 / #29393）—— 用文件系统替代 LLM 上下文中的 todo 列表，缓解 context rot 与跨会话丢失。
3. **子代理可观测性增强**（#22323 / #21763 / #22598）—— `/bug` 与 `/chat share` 中展示子代理轨迹、暴露真实结束原因。
4. **Auto Memory 安全与稳定性**（#26516 / #26522 / #26523 / #26525）—— 一系列围绕脱敏、重试、inbox 校验的缺陷。
5. **沙箱与意图路由**（#19873）—— 利用 Gemini 3 模型的 bash 训练偏好，构建零依赖 OS 级沙箱。
6. **Browser Agent 韧性**（#21983 / #22232 / #22267）—— Wayland 兼容、会话接管、`settings.json` 配置覆盖。
7. **终端渲染性能**（#21924 / #29294）—— 解决闪烁、resize 卡顿。
8. **会话恢复可靠性**（#29194 / #29292 / #29411 / #29402）—— checkpoint 校验、最新活动解析、原子写。

---

## 6. 开发者关注点（社区痛点）

- **子代理不可控**：频繁出现 hang、MAX_TURNS 后仍报告 success、`/bug` 不含子代理上下文——agent 体系的可观测性与可控性是当前最大短板。
- **模型「动手能力」过强但不规范**：在用户仓库任意位置创建临时脚本（#23571）、使用 `git reset --force` 等破坏性命令（#22672），需要更严格的 prompt 与工具约束。
- **持久化状态脆弱**：checkpoint 损坏、`state.json` 截断、`/compress` 不写回磁盘等问题说明写入路径需要更系统性的原子化保障。
- **新特性「主动调用率」低**：用户反馈 skills / sub-agents 不被自动启用（#21968），自定义能力需要显式提示才生效。
- **Linux 桌面兼容性**：Wayland 下 browser subagent 失败，是生态扩展的卡点。
- **CLI 自我认知不足**（#21432）：Agent 对自身 flag、热键、参数描述不准确，影响"自服务"能力。
- **Tools 数量上限**（#24246）：> 400 tools 触发 400 错误，工具发现/裁剪策略待加强。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) — 采样窗口：过去 24 小时。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-20**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI **无新版本发布、无 PR 合并**，社区活动主要集中在已有 Issue 的关闭与复盘阶段。亮点包括：[#107](https://github.com/github/copilot-cli/issues/107) Alpine Linux 段错误（**16 条评论**）终于关闭、Windows/WSL 平台相关 TUI 渲染与崩溃问题集中收尾，而 MCP 协议集成仍是当前最活跃的技术争议点，**Figma MCP 加载失败（[#4870](https://github.com/github/copilot-cli/issues/4870)，👍11）** 等新问题仍处于 OPEN 状态。

---

## 🚀 版本发布

过去 24 小时无新版本发布。社区当前活跃追踪的版本仍为 `1.0.84`（桌面应用捆绑 CLI）与 `1.0.70+` 系列。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注度 | 为什么重要 |
|---|-------|------|--------|-----------|
| [#107](https://github.com/github/copilot-cli/issues/107) | Alpine Linux 段错误 | CLOSED | 💬16 👍4 | 影响 Docker/Alpine 用户的核心 bug，**16 条评论**是本期最高讨论量；长期未修复现已关闭 |
| [#4870](https://github.com/github/copilot-cli/issues/4870) | Figma 远程 MCP 服务器加载失败 | OPEN | 💬7 👍11 | **👍11 为本期最高**，CLI 将 `server/discover` 的 `-32601` 当作致命错误，与 VS Code 行为不一致，严重影响设计协作场景 |
| [#4069](https://github.com/github/copilot-cli/issues/4069) | WSL2 + Windows Terminal TUI 中途挂死 | CLOSED | 💬8 👍9 | **👍9 高赞**，Rust JSON-RPC 传输层 EIO/EPIPE 导致整屏卡死，WSL 用户长期痛点 |
| [#3439](https://github.com/github/copilot-cli/issues/3439) | tmux + mintty/Cygwin TUI 渲染卡顿回归 | CLOSED | 💬9 | 1.0.49 引入回归，1.0.43/1.0.48 正常，体现 Windows 终端兼容性挑战 |
| [#4765](https://github.com/github/copilot-cli/issues/4765) | 非仓库根目录无法读取 `.mcp.json` | CLOSED | 💬8 | 多仓库 workspace 用户痛点，CLI 对 git 仓库结构的强假设被打破 |
| [#4699](https://github.com/github/copilot-cli/issues/4699) | 长会话 `--resume` V8 OOM 崩溃 | OPEN | 💬5 👍6 | 14 小时内崩溃 3 次，**4 GiB 堆上限**频繁触发；且崩溃 dump 写入 cwd 污染工作目录 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | 非 git 仓库无法使用 Rewind | CLOSED | 💬5 👍11 | **👍11 高赞**，与 VS Code 行为不一致，jj/jj-vcs 等 VCS 用户被排除 |
| [#2543](https://github.com/github/copilot-cli/issues/2543) | 并发子代理事件损坏 session 状态 | CLOSED | 💬5 👍2 | `tool_use` 与 `tool_result` 错位导致后续消息 100% 失败，多代理架构稳定性问题 |
| [#4905](https://github.com/github/copilot-cli/issues/4905) | 桌面应用会话数分钟内死亡 | OPEN | 💬4 👍2 | macOS 桌面应用 1.1.22 的 `github-mcp-server` 凭据注册失效，导致整个 MCP 目录过期 |
| [#1801](https://github.com/github/copilot-cli/issues/1801) | 请求自动模型选择功能 | CLOSED | 💬2 👍10 | **👍10**，社区长期呼声——VS Code 已有功能 CLI 缺失 |

---

## 🛠️ 重要 PR 进展

过去 24 小时内 **无 PR 更新**。这一现象通常意味着维护者正集中处理 issue triage 而非合并工作，或近期提交窗口未开放。

---

## 📈 功能需求趋势

从过去 24 小时的 49 条 Issue 中，可以提炼出以下社区关注焦点：

### 1. **MCP 协议生态（热度最高）**
- [#4870](https://github.com/github/copilot-cli/issues/4870) Figma 远程 MCP 加载失败
- [#2892](https://github.com/github/copilot-cli/issues/2892) MCP stdio 在子代理中 4 秒提前关闭
- [#4905](https://github.com/github/copilot-cli/issues/4905) GitHub MCP 凭据过期
- [#4907](https://github.com/github/copilot-cli/issues/4907) MCP 重连通知淹没会话历史
- [#4765](https://github.com/github/copilot-cli/issues/4765) 非仓库根目录 MCP 配置加载

> **趋势**：MCP 已成为 CLI 的核心扩展机制，但 CLI 在**生命周期管理、错误容忍度、配置发现**三方面存在系统性缺陷。

### 2. **Windows / WSL 平台兼容性**
- [#4069](https://github.com/github/copilot-cli/issues/4069)、[#3439](https://github.com/github/copilot-cli/issues/3439)、[#2571](https://github.com/github/copilot-cli/issues/2571) BOM 问题、[#2151](https://github.com/github/copilot-cli/issues/2151) WSL 终端提示文本颜色、[#3733](https://github.com/github/copilot-cli/issues/3733) Windows 上 `Ctrl+G` 启动 Insiders、[#3719](https://github.com/github/copilot-cli/issues/3719) `/add-dir ~` 路径展开
> **趋势**：涉及终端渲染、键盘输入、路径处理的 Windows 边缘案例密集出现，建议关注者投入专项测试资源。

### 3. **上下文窗口与模型能力**
- [#3355](https://github.com/github/copilot-cli/issues/3355) Claude Opus 4.6 被限制在 200K（原支持 1M）
- [#3481](https://github.com/github/copilot-cli/issues/3481) `contextTier=long_context` 不生效
- [#3523](https://github.com/github/copilot-cli/issues/3523) Opus 4.6 不支持 vision
- [#1423](https://github.com/github/copilot-cli/issues/1423) 路径级指令文件膨胀上下文

> **趋势**：长上下文（1M token）+ 视觉支持成为开发者对新一代模型的核心期待。

### 5. **会话/上下文持久化**
- [#2655](https://github.com/github/copilot-cli/issues/2655) `cwd`/`branch` 不再写入 session-store.db
- [#4699](https://github.com/github/copilot-cli/issues/4699) `--resume` OOM
- [#1675](https://github.com/github/copilot-cli/issues/1675) checkpoint 恢复误删未跟踪文件
- [#3621](https://github.com/github/copilot-cli/issues/3621) 大指令文件触发无限自动压缩循环

### 6. **可访问性 (a11y)**
- [#3005](https://github.com/github/copilot-cli/issues/3005) Ctrl+T 思考切换无屏幕阅读器反馈
- [#4913](https://github.com/github/copilot-cli/issues/4913) Linux 上文本选择视口错位

### 7. **用户工作流诉求**
- [#1801](https://github.com/github/copilot-cli/issues/1801) 自动模型选择（👍10）
- [#3589](https://github.com/github/copilot-cli/issues/3589) 多 `sessionStart` hook 上下文注入冲突
- [#3411](https://github.com/github/copilot-cli/issues/3411) 抑制定时提示的铃声字符
- [#4237](https://github.com/github/copilot-cli/issues/4237) `preToolUse` "ask" 拒绝时的引导消息被丢弃

---

## 💡 开发者关注点总结

综合本期 Issue 的关闭与新增情况，开发者社区的**高频痛点**可归纳为三大类：

**① 平台碎片化下的可靠性危机**
Windows + WSL + tmux + Cygwin/mintty 组合下，TUI 渲染、键盘输入、终端控制字符（BOM、bell）等均存在反复回归（[#4069](https://github.com/github/copilot-cli/issues/4069)、[#3439](https://github.com/github/copilot-cli/issues/3439)、[#2571](https://github.com/github/copilot-cli/issues/2571)）。当同一会话周期内出现"已关闭又复现"的现象时，强烈建议引入**平台自动化回归矩阵**。

**② MCP 作为扩展枢纽尚未稳定**
MCP 相关 Issue 在本期占比近 **20%**，集中在"发现 → 鉴权 → 注册 → 重连 → 错误传播"全链路。开发者开始把 MCP 当作"CLI 的可靠组件"而非实验性 feature，对其 SLA 要求显著上升。

**③ 长会话与上下文管理进入"深水区**
OOM（[#4699](https://github.com/github/copilot-cli/issues/4699)）、自动压缩循环（[#3621](https://github.com/github/copilot-cli/issues/3621)）、session-store.db 字段丢失（[#2655](https://github.com/github/copilot-cli/issues/2655)）反映出当前 CLI 在**持久层、压缩策略、内存隔离**上缺乏统一设计。配合用户对 1M token 上下文的诉求（[#3355](https://github.com/github/copilot-cli/issues/3355)），这一领域是下一阶段最值得投入的方向。

---

*报告生成基于过去 24 小时 GitHub Issues 更新数据；如需更详细的某条 Issue 分析或趋势图表，请告知。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-20**

---

## 📌 今日速览

今日社区动态以 **Linux 平台 HTTP 头部校验类 Connection error 系列 Bug 的集中关闭** 为主要线索，#1266 / #1364 / #1368 / #1371 四条历史 issue 同期收尾，暗示该问题已在代码层面修复。同时，he-yufeng 贡献的多项稳定性 PR（Shell 超时、Windows 版本信息、Worker 非 UTF-8 兼容、MCP stderr 重定向）也进入关闭/合并节奏，整体显示项目进入 **跨平台健壮性收尾阶段**。商业侧（开票流程）与编辑器侧（VSCode Plan Mode 保存路径）也各有反馈。

---

## 🚀 版本发布

过去 24 小时内无新 Release。最新已发布版本仍为此前构建，建议关注后续 1.18+ 版本是否随上述 PR 合入一并发布。

---

## 🔥 社区热点 Issues

> 过去 24 小时共 6 条 Issue 更新，均为已 CLOSED 状态。挑选最具代表性 6 条如下：

### 1. #1442 — 如何开具发票？[CLOSED]
- **作者**：abcair | 👍 0 | 评论 2
- **重要性**：商业化基础设施反馈，反映部分企业/个人开发者在订阅 Kimi Code 后缺少清晰的开票入口，是国内 SaaS 用户高频痛点。已被关闭，疑似已通过客服或后台流程答复。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1442

### 2. #1266 — HTTP Header 校验：`platform.version()` 尾部空格导致 Connection error [CLOSED] 👍2
- **作者**：asamawi | 👍 2 | 评论 2
- **重要性**：本次获得最多 👍 的 Issue。Ubuntu 22.04 + Python 3.13 环境下，因 `platform.version()` 返回值末尾带空格，违反 HTTP Header 规范导致连接失败。该 Bug 触发了后续 #1364 / #1368 同源问题。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1266

### 3. #1371 — LLM Provider Connection error（IPv6 相关）[CLOSED]
- **作者**：liushuo1024 | 👍 0 | 评论 1
- **重要性**：用户报告在 Linux 6.8 内核下使用 `kimi-for-coding` 模型时出现连接失败，疑似 IPv6 解析路径问题，与 HTTP 头部系列属于同一根因族。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1371

### 4. #1368 — `platform.version()` 含 `#` 字符导致 Connection error [CLOSED]
- **作者**：chenyuchen993-cmyk | 👍 0 | 评论 1
- **重要性**：同源问题。`#` 在 HTTP Header 中是非法字符，多个 Linux 发行版内核版本字符串恰好含 `#`，导致所有受影响用户的 CLI 无法连接。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1368

### 5. #1364 — Ubuntu 下非法 HTTP Header 值引发 Connection error [CLOSED]
- **作者**：laserwang | 👍 0 | 评论 1
- **重要性**：与 #1266、#1368 共同构成 Linux 平台兼容性 Bug 集群，四条 issue 同日关闭，说明已通过统一的 Header 清理/转义逻辑修复。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1364

### 6. #1495 — VSCode 扩展：可配置 Plan Mode 生成文件的保存路径 [CLOSED]
- **作者**：paomian | 👍 0 | 评论 0
- **重要性**：典型的「IDE 集成增强」诉求，建议通过 `~/.kimi/config.toml` 中的 `[paths] plans_dir` 字段自定义 Plan 输出目录，便于与现有项目结构整合。
- 链接：https://github.com/MoonshotAI/kimi-cli/issues/1495

---

## 🛠 重要 PR 进展

> 过去 24 小时共 5 条 PR 更新，3 条已 CLOSED，2 条仍 OPEN。

### 1. #2350 — fix: tolerate non-utf8 worker output [OPEN]
- **作者**：he-yufeng
- **内容**：修复 Windows 上 Worker 进程输出 cp1252 等 locale 编码字节时引发的 `UnicodeDecodeError`，改为容错解码，避免真实错误被掩盖。
- **意义**：解决跨平台 Windows 用户的高优先级崩溃问题，是 1.18 系列稳定性的关键补丁。
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2350

### 2. #2183 — fix(shell): attach dropped image paths eagerly [OPEN]
- **作者**：he-yufeng
- **内容**：在 Prompt 提交阶段立即扫描文本中的本地图片路径并读取为 `ImageURLPart`，避免依赖后续 `ReadMediaFile` 二次抓取，解决短生命周期路径丢失问题。
- **意义**：改善多模态输入的端到端可靠性。
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2183

### 3. #2181 — fix: add Windows binary version info [CLOSED]
- **作者**：he-yufeng
- **内容**：从 `pyproject.toml` 生成 PyInstaller Windows 版本信息文件，并在 CI 中断言 `FileVersionInfo` 非空。
- **意义**：补齐 Windows 发布产物元数据，便于企业环境审计与版本管理。
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2181

### 4. #2200 — fix(shell): adapt timeouts for long commands [CLOSED]
- **作者**：he-yufeng
- **内容**：对 `git submodule`、`git clone/fetch`、`apt/pip install`、`build` 等长耗时命令自动延长 timeout；保留显式传入的大 timeout；常规命令保持 60s。
- **意义**：解决开发者在大型 monorepo / CI 场景下 shell 工具被无故中断的痛点。
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2200

### 5. #2259 — fix: redirect stdio MCP stderr to logs [CLOSED]
- **作者**：he-yufeng
- **内容**：将 stdio MCP 子进程 stderr 重定向至 `~/.kimi/logs/mcp/<server>.log`，避免污染交互终端；并新增回归测试。
- **意义**：MCP 生态下 stdio server 的常见副作用修复，提升调试体验。
- 链接：https://github.com/MoonshotAI/kimi-cli/pull/2259

---

## 📈 功能需求趋势

从过去 24 小时活跃 Issue 提炼，开发者社区诉求集中于：

| 方向 | 代表 Issue | 趋势 |
|------|-----------|------|
| **跨平台兼容性 / HTTP 协议合规** | #1266 / #1364 / #1368 / #1371 | 🔥 集中爆发 → 已集中修复 |
| **IDE/编辑器集成深化** | #1495 | 📈 持续升温（VSCode Plan 保存路径配置化） |
| **商业化流程完善** | #1442 | 🆕 新增反馈（开票/对账链路） |
| **多模态输入可靠性** | 关联 PR #2183 | ⚡ 同步推进中 |

> **结论**：当前社区最强烈信号是「**Linux 平台连接稳定性**」与「**VSCode 集成可配置化**」，前者已进入收尾，后者将是下一阶段需求主线。

---

## 💡 开发者关注点

综合 Issue 与 PR，社区反馈呈现以下高频痛点：

1. **Linux 平台 HTTP Header 解析脆弱**：`platform.version()` 的尾部空格、`#` 字符直接击穿客户端连接逻辑，是近期最影响生产可用性的问题，已在 9/19 同步关闭，**建议关注下一个版本 release notes 确认修复版本号**。
2. **Shell 长命令超时**：默认 60s 对 `git clone`、`npm/pip install`、`build` 等真实开发场景不足，PR #2200 已针对性处理，**开发者可显式传入大 timeout 临时绕过**。
3. **Windows Worker 编码兼容**：cp1252 等本地编码字节导致 `UnicodeDecodeError` 隐藏真实异常，PR #2350 待合入，**建议 Windows 用户关注 1.18 系列发布**。
4. **MCP stdio 噪声污染终端**：stderr 直冲交互界面问题已通过 PR #2259 修复，**升级后日志将落入 `~/.kimi/logs/mcp/`**。
5. **Plan Mode 文件落盘不可控**：VSCode 扩展用户期望自定义保存目录（#1495），目前仍以 issue 形式存在，**短期内可通过人工复制缓解**。
6. **订阅开票体验**：企业采购流程要求清晰的发票入口（#1442），属于商业支持范畴，**建议直接联系客服获取快速通道**。

---

*报告基于 github.com/MoonshotAI/kimi-cli 公开数据整理，仅供开发者参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-20

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，但社区活动依然活跃：Issues 端出现多个涉及 **Anthropic Provider 兼容性、TUI/CLI 健壮性、Windows 安装链** 的高频讨论；PR 端以 **bug fix 为主**，重点修复了 `service restart` 故障闭环、非交互式运行退出码、prompt 持久化竞争等生产环境痛点。整体节奏延续"稳定性优先"，远程/网络化（ACP over WebSocket）等长期演进议题仍在持续升温。

---

## 🚀 版本发布

今日无新 Release（过去 24 小时内无版本更新）。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 / 👍 | 关键点 |
|---|-------|----------|--------|
| 1 | [#13710](https://github.com/anomalyco/opencode/issues/13710) — Desktop Session 名称偶发不被 AI 重命名 | 11 / 👍2 | 间歇性回归，影响会话管理体验，今日 Closed |
| 2 | [#13388](https://github.com/anomalyco/opencode/issues/13388) — **FEATURE**: 通过 WebSocket 暴露 ACP 以支持远程访问 | 9 / 👍9 | 👍/评论比 ≈1，社区高度期待"网络化 OpenCode" |
| 3 | [#20699](https://github.com/anomalyco/opencode/issues/20699) — Agent 发送重复消息 | 7 / 👍1 | 简单问候触发两条 assistant 响应，存在隐藏消息，影响调试 |
| 4 | [#34652](https://github.com/anomalyco/opencode/issues/34652) — Anthropic 原生 Provider 嵌套数组返回 JSON 字符串致 SchemaError | 6 / 👍0 | `todowrite` 等内置工具在 Anthropic 下硬失败，阻塞核心工作流 |
| 5 | [#35432](https://github.com/anomalyco/opencode/issues/35432) — `tool_call: false` 未真正禁用工具（OPEN） | 5 / 👍0 | 不支持工具调用的模型（如 morphllm）仍被强发 tool_choice=auto |
| 6 | [#35499](https://github.com/anomalyco/opencode/issues/35499) — `opencode web --mdns` 触发 MaxListenersExceededWarning | 4 / 👍2 | 疑似事件监听器泄漏，11 个监听器无上限告警 |
| 7 | [#49486](https://github.com/anomalyco/opencode/issues/49486) — TUI/CLI 中 LaTeX 公式未渲染（OPEN） | 3 / 👍0 | `$...$` / `$$...$$` 直接显示源码，数学场景可用性差 |
| 8 | [#38163](https://github.com/anomalyco/opencode/issues/38163) — **FEATURE**: 基于首条消息自动命名会话 | 3 / 👍1 | 与 #13710 互补，多会话用户刚需 |
| 9 | [#37912](https://github.com/anomalyco/opencode/issues/37912) — subagent spawn 失败：NOT NULL constraint `session_message.seq` | 3 / 👍0 | 子代理无法运行，任务委托链路断裂 |
| 10 | [#38113](https://github.com/anomalyco/opencode/issues/38113) — `serve` 未区分 worktree | 3 / 👍1 | 多分支并行场景会话归属混乱，存在误删/误改风险 |

**关注焦点补充**：#38201（TUI 大型二进制项目卡死）、#38110（macOS v1.2.7+ TUI 卡死）、#38178/#38169（Windows 安装兼容性 PE 错误）、#38167（`tui.jsonc` 配置被 `tui.json` 覆盖）共同凸显 **跨平台稳定性**仍是高频痛点。

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 关键内容 |
|---|----|------|----------|
| 1 | [#50075](https://github.com/anomalyco/opencode/pull/50075) — `fix(cli)` 故障闭环 | Bug Fix | `service restart` 在 2s 健康检查超时后错误复用旧实例，改为 fail-closed（修复 #37795） |
| 2 | [#50068](https://github.com/anomalyco/opencode/pull/50068) — `fix(cli)` 硬化非交互式运行 | Bug Fix | 修正 `opencode run` 退出码继承终端执行结果；处理子会话权限/表单阻塞；正确取消其他非交互式表单 |
| 3 | [#50071](https://github.com/anomalyco/opencode/pull/50071) — `fix(session)` drain 失败分类 | Bug Fix | 区分 interrupt 与真实失败；检查 `@mention` skill 权限（修复 #49740） |
| 4 | [#49863](https://github.com/anomalyco/opencode/pull/49863) — `fix(plugin)` 支持子路径导出 | Bug Fix | 允许 `package.json` 的 `exports` 子路径导入插件，兼容 npm 包规范 |
| 5 | [#49733](https://github.com/anomalyco/opencode/pull/49733) — `fix(core)` 注册 Responses provider | Bug Fix | 在打包 provider 清单中注册 `@opencode/ai/providers/openai-compatible/responses`（CLOSED） |
| 6 | [#50067](https://github.com/anomalyco/opencode/pull/50067) — `feat(core)` 工具可用性增量广播 | Feature | 跟踪模型可见工具名作为指令源，只通告新增/移除 delta（与 Code Mode 一致） |
| 7 | [#50074](https://github.com/anomalyco/opencode/pull/50074) — `feat(app)` 标签页显隐切换 | Feature | 新增 `general.showTabs` 偏好 + 标题栏 tab strip 显隐命令/快捷键（修复 #50056） |
| 8 | [#49560](https://github.com/anomalyco/opencode/pull/49560) — `fix(tui)` `/move` 支持自定义目标路径 | Bug Fix | 不再局限于当前项目 worktree，允许跨项目/路径移动（同时关闭 #49212 / #40200 / #43938 / #35306） |
| 9 | [#50052](https://github.com/anomalyco/opencode/pull/50052) — `feat(tui)` v2 会话选择器 (`-s`) | Feature | `opencode -s` 无会话 ID 时打开 `/sessions` 列表，迁移至 Node 原生解析（关闭 #48718 / #36134） |
| 10 | [#50069](https://github.com/anomalyco/opencode/pull/50069) — `fix(tui)` 默认 variant 仅展示一次 | Bug Fix | 避免 provider `default` 与菜单"Default"行重复显示（修复 #50002） |

**值得注意**：#42558（绕过被污染的 markdown 缓存）、#43515（凭证下沉至 provider）、#43510（追加消息不再打断 prompt cache）、#43496（构建期打包所有 tree-sitter 语法）、#43492（剥离模型名尾部斜杠）等已陆续 CLOSED，自动化清理流程持续推进。

---

## 📈 功能需求趋势

从所有 Issues 提炼，社区关注方向集中在以下几条主线：

1. **远程化 / 网络化** 🛰️
   - #13388（ACP over WebSocket，👍9 最高热度）—— 编辑器跨主机访问 OpenCode 是头号长线需求。
2. **生态连接器（Connectors）** 🔌
   - #38095（Google Calendar/Gmail/Slack/Notion 一类 OAuth 内建连接器）—— "Agent 代替用户操作 SaaS" 是被反复提出的愿景。
3. **会话管理体验** 🗂️
   - #38163（自动命名会话）、#13710（命名回归）、#38113（worktree 区分）—— 多会话/多工作树用户痛点集中。
4. **TUI/CLI 体验打磨** 🖥️
   - #49486（LaTeX 渲染）、#38114（滚动导航）、#38201（大文件卡死）、#38110（macOS 卡死）、#35499（监听器泄漏）—— TUI 仍是高频反馈面。
5. **跨平台一致性** 🪟
   - #38178 / #38169 / #38167 / #37915（PowerShell 乱码）/ #37911（macOS 中文 IME Esc）—— Windows / macOS 本地化与安装链细节。
6. **Provider 兼容与工具调用控制** 🤖
   - #34652（Anthropic 嵌套数组）、#35432（`tool_call: false` 失效）、#38106（SSE `event:` 字段）、#38090（新增 Gitlawb Opengateway）—— 多 Provider 接入与兼容性。
7. **子代理/任务系统** 🧩
   - #37912（subagent seq 约束失败）、#38094（Delegating 状态卡死）—— 任务/委托链路仍存在稳定性缺口。

---

## 👨‍💻 开发者关注点

综合 Issue + PR 反馈，开发者社区当前最强烈的诉求可以归纳为四点：

- **生产可用性 > 新功能**：大量 CLOSED 的 PR（#50075、#50068、#50071、#42558、#43510、#43492）集中在退出码、缓存、provider 解析等"出问题时没人想碰"的细节，说明 v1.x 之后社区重心已从"加能力"转向"跑得稳"。
- **数据持久化与一致性的隐式信任**：`prompt_async` 在持久化完成前返回 204（#38092）、subagent `session_message.seq` 空约束（#37912）等问题，提示大家对**异步路径上的原子性**极为敏感——一旦客户端据此重试或切换会话，会带来不可见的数据分裂。
- **配置层"沉默被覆盖"**：`tui.jsonc` 被 `tui.json` 覆盖（#38167）、`tool_call: false` 被忽略（#35432）—— 开发者对配置系统的"显式优先"和"行为符合直觉"要求很高，任何"看似生效但实际被另一处覆盖"的体验都会迅速积累负反馈。
- **跨平台细节的"最后一公里"**：Windows 安装 PE 错误（#38169）、PowerShell 中文乱码（#37915）、macOS 中文 IME Esc 行为不一致（#37911）、iOS PWA 安全区（#35480）—— 这些"非核心路径"问题被反复上报，反映 OpenCode 的用户基盘已经显著多元化，本地化与平台一致性正在成为体验的关键变量。

---

*日报基于 2026-09-20 GitHub 公开数据生成，覆盖 anomalyco/opencode 仓库当日活跃的 Issues 与 PRs。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-20

## 📌 今日速览

v0.86.0 正式发布，带来 **Prompt Cache Warming** 实验性支持（仅 Anthropic 路径），可通过成本感知的预热让长工具调用场景下的缓存持续存活。与此同时，社区焦点集中在三条主线：**依赖/打包体系的长期债务**（Shrinkwrap 议题讨论度最高）、**自动 Compaction 流程的取消与状态同步**（一批 PR 已合入修复），以及 **Meta Provider / OpenCode Zen 等多模型集成**的进展。

---

## 🚀 版本发布

### v0.86.0 — Prompt Cache Warming（实验性）
- **核心特性**：在长工具调用运行期间（可选地空闲时）通过成本感知刷新保持 Anthropic 缓存存活，详见 [Cache Warming 配置文档](https://github.com/earendil-works/pi/blob/v0.86.0/packages/coding-agent/docs/settings.md#cache-warming)。
- **适用范围**：当前仅对 Anthropic 生效（其他提供商尚无显式缓存机制）。
- 对应 PR：[#9668 feat(coding-agent): add prompt cache warming](https://github.com/earendil-works/pi/pull/9668)

> 建议在长时间多轮工具调用场景中开启；空闲预热会增加 token 消耗，请结合预算决策。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 关注理由 |
|---|-------|------|------|----------|
| [#5653](https://github.com/earendil-works/pi/issues/5653) | **Move off Shrinkwrap** | OPEN（进行中） | 20 | 讨论度最高的"老大难"。`@earendil-works/pi-ai` 与 `pi-coding-agent` 并装时会产生两份 `pi-ai`，导致 module-level `Map` 注册表分裂。直接影响所有下游嵌入用户。 |
| [#7739](https://github.com/earendil-works/pi/issues/7739) | **Startup-time budget targeting jcode-comparable latency** | OPEN | 9 | 提出用 jcode README 的实测基准给 Pi 设定启动时间/内存预算，量化与同类工具（jcode 0.9.1888-dev）的差距。 |
| [#9391](https://github.com/earendil-works/pi/issues/9391) | 压缩后过期签名 thinking blocks 被每轮回放（Anthropic `prefix_binding_mismatch`） | CLOSED · 👍1 | 6 | 影响 Anthropic 长会话用户，每个请求都触发 drop 警告——是 v0.85.x 用户的高频痛点之一。 |
| [#9051](https://github.com/earendil-works/pi/issues/9051) | **`session_compact` 自定义消息错过即时的 overflow 重试** | OPEN | 5 | 揭示 compaction 重试期间自定义消息被排队，导致 immediate retry 拿不到恢复的上下文窗口。 |
| [#7543](https://github.com/earendil-works/pi/issues/7543) | **Meta Model API 支持** | CLOSED · 👍5 | 4 | 点赞数最高的 feature request，期望通过 `/login` 流程接入 Muse Spark；已有对应 PR 在跟进。 |
| [#9690](https://github.com/earendil-works/pi/issues/9690) | OpenCode Zen 拒绝 Pi 颁发的 session ID（HTTP 403） | CLOSED · 👍2 | 4 | Pi 内置 OpenCode provider 的关键兼容性问题，影响即开即用体验。 |
| [#9785](https://github.com/earendil-works/pi/issues/9785) | bash `timeout` 参数：秒 vs 毫秒混淆 + 无默认/上限 | CLOSED | 1 | 单位歧义可造成小时级超时；多个真实运行场景风险，需修复语义边界。 |
| [#9770](https://github.com/earendil-works/pi/issues/9770) | `find` / `grep` 工具没有 timeout，kill 后返回"空成功" | CLOSED | 2 | 与 bash 不一致，容易让模型误以为查找成功，已成工具稳定性短板。 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 对 compaction / branch-summary 请求不触发 | CLOSED | 4 | 文档承诺的扩展钩子"漏发"——影响任何想做请求级拦截/改写的扩展。 |
| [#9784](https://github.com/earendil-works/pi/issues/9784) | Extension API 缺失对 provider-specific 响应字段的支持 | CLOSED | 1 | "Procrustean `AssistantMessage`"——扩展想读取自定义字段时被类型约束卡住，反复发帖说明这是结构性问题。 |

> 共 31 条更新 issues；上述覆盖了讨论热度、点赞数与平台覆盖度最高的代表性议题。

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 关键内容 |
|---|----|------|----------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **feat(ai,coding-agent): add Meta provider with Muse subscription OAuth** | OPEN | 关闭 [#7543](https://github.com/earendil-works/pi/issues/7543)；新增 Meta/Muse 子 provider（OAuth），注意 token 每日重铸、当前流式为"伪流式"。 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | **feat(coding-agent): add prompt cache warming** | CLOSED | 已合入 **v0.86.0**；在 Anthropic 路径下提供 cache warming 钩子与配置项。 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): 允许扩展在 session 启动时追加 system prompt | CLOSED | 关闭 [#9432](https://github.com/earendil-works/pi/issues/9432)；session_start 处理器可返回 append-only `systemPromptAppend`，按扩展/处理器顺序合并并保留 source 元信息。 |
| [#9781](https://github.com/earendil-works/pi/pull/9781) | fix(coding-agent): 取消后停止 prompt 恢复 | CLOSED | 关闭 [#9340](https://github.com/earendil-works/pi/issues/9340)；`AgentSession.abort()` 不再触发 post-run 重试或自动 compaction。 |
| [#9779](https://github.com/earendil-works/pi/pull/9779) | fix(coding-agent): 暴露可取消的 auto-compaction auth | CLOSED | 关闭 [#9777](https://github.com/earendil-works/pi/issues/9777)；为 `_getSummarizationRequestAuth()` 阶段提供 abort controller 与进度反馈。 |
| [#9776](https://github.com/earendil-works/pi/pull/9776) | **Per thinking sampling parameters** | OPEN | 新增 `samplingParamsByThinkingLevel`，为不同思考等级使用不同采样参数（覆盖旧的 `samplingParams`），并 cherry-pick 了 #9505 的修复。 |
| [#9570](https://github.com/earendil-works/pi/pull/9570) | fix(ai): 将 `TOO_MANY_TOOL_CALLS` 映射为错误 stop reason | OPEN | 修复 `@google/genai@2.21.0` 新增的 `FinishReason` 成员导致 Gemini 响应未处理的异常。 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): 文件自动补全识别 CJK 标点 | CLOSED | 把 CJK 标点视为分词边界，解决 `我们需要实现新功能，docs<Tab>` 这类场景无法触发补全的问题。 |
| [#9772](https://github.com/earendil-works/pi/pull/9772) | fix(tui): 停止主屏 scrollback 清空/重放 + ConPTY 自动换行漂移 | CLOSED | 同时修复 [Windows ConPTY eager wrap（#9583）](https://github.com/earendil-works/pi/issues/9583) 与主屏渲染刷新策略。 |
| [#9120](https://github.com/earendil-works/pi/pull/9120) | fix(tui): 按裸名（而非 `skill:<name>` 全串）排名技能补全 | CLOSED | 关闭 [#8813](https://github.com/earendil-works/pi/issues/8813)；`/idea` 不再错选 `skill:deep-research`。 |

---

## 📈 功能需求趋势

从 31 条新近 issues 中可识别出以下五大方向：

1. **依赖与打包体系现代化** — Shrinkwrap 依赖重复（#5653）、bundled CLI 找不到模块（#8620）、同步 `SessionManager` 阻塞 DB 持久化（#2616）。三者均指向"包发布形态需要彻底重构"。
2. **Compaction / 上下文管理精细化** — 阈值与上下文窗口解耦（#9486）、auth 等待可见性（#9777/9779/9783/9340 群）、`session_compact` 自定义消息路径（#9051）。这是 v0.85 → v0.86 期间最高密度的工程议题。
3. **多模型/多 Provider 接入** — Meta Muse（#7543/PR #9096）、OpenCode Zen 会话兼容性（#9690）、Qwen Token Plan 新模型测试覆盖（#9771）、Gemini `TOO_MANY_TOOL_CALLS`（PR #9570）。
4. **TUI / 跨平台 UX** — CJK 输入边界（PR #9746）、Orca 终端图片能力（PR #9329）、Windows ConPTY 换行（PR #9772）、macOS Terminal 进程信息泄露（#9766）、X11 xclip 探测漏洞（#9786）、QR 码登录（#9774）。
5. **扩展 API 表达力** — 系统提示追加（PR #9434）、provider-specific 字段透传（#9784）、逐 thinking 等级采样（PR #9776）、`before_provider_request` 覆盖（#9773）。

---

## 🧑‍💻 开发者关注点 / 痛点

- **工具超时语义不一致**：`bash` 有 timeout 但单位/上限混乱（#9785），`find`/`grep` 完全缺失且被杀时返回空成功（#9770）。建议工具层统一 timeout + 错误传播模型。
- **Compaction 是一团乱麻**：cancel/auth 重叠、retry 时机、prefix 校验、abort 之后又被恢复……大量 PR/Issue 集中处理同一主题，提示该子系统需要更明确的状态机设计。
- **扩展 API "普洛克路斯忒斯之床"**：开发者多次强调 `AssistantMessage` 类型过于刚性，导致无法拿到 provider-specific 字段；`before_provider_request` 在 compaction 路径上"漏发"也是同一根因。
- **Anthropic 长会话签名/缓存**：signed thinking blocks 在 compaction 后被反复回放引发 `prefix_binding_mismatch`（#9391），而 v0.86.0 引入 cache warming 后这一块需要在后续版本进一步对齐。
- **依赖重复与发布形态**：hoist vs nested 副本导致 module-level 单例分裂（#5653）；嵌入式用户反馈加载 jiti + 整张 TUI 图是 import-time 开销（#9540）—— 都指向更现代的发布/打包方案。
- **跨平台细节陷阱**：ConPTY eager wrap、X11 xclip `-t` 任意目标探测、macOS Terminal 进程名泄露……揭示 Pi 在主流桌面 OS 上的工程细节需要持续打磨。

---

*数据来源：github.com/badlogic/pi-mono · 报告时间：2026-09-20*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-20

> 数据来源：[GitHub: QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) | 统计窗口：过去 24 小时

---

## 📌 今日速览

今日主线是 **v0.24.1 正式版发布**（同步配套 SDK v0.1.13、Desktop v0.24.1 与 Nightly），并伴随一条 Breaking Change：停止发送 `active_goal` 流事件（[#12181](https://github.com/QwenLM/qwen-code/pull/12181)）。社区侧重点集中在 **Web Shell 打包缺陷**、**LSP 对非 ASCII 响应的处理**、**Windows CI 红线**与 **Workflow 重试/历史恢复**，多项 P1 安全与打包问题正在被批量跟进。

---

## 🚀 版本发布

### v0.24.1（稳定版）
- 发布 CLI v0.24.1，并随 SDK v0.1.13 同步打包。
- **Breaking**：移除 `active_goal` 流事件（[#12181](https://github.com/QwenLM/qwen-code/pull/12181) by @qqqys），下游 ACP 集成方需检查适配。
- Features（节选）：
  - `feat(workflows)`：放权 workflow 相关能力。
- 关联 nightly：`v0.24.1-nightly.20260919.c1c00cbaab`（含 CI Docker 缓存回收与 review scratch 清理修复 [#12135](https://github.com/QwenLM/qwen-code/pull/12135)）。

### Qwen Code Desktop v0.24.1
- 修复 ACP 权限队列作用域问题（[#11802](https://github.com/QwenLM/qwen-code/pull/11802)）。
- `feat(channels)`：新增共享输出模式。

> 链接：[v0.24.1](https://github.com/QwenLM/qwen-code) · [Desktop v0.24.1](https://github.com/QwenLM/qwen-code) · [SDK v0.1.13](https://github.com/QwenLM/qwen-code)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标签 | 评论 | 为什么值得关注 |
|---|-------|------|------|----------------|
| 1 | [#11872](https://github.com/QwenLM/qwen-code/issues/11872) Web Terminal 报 "PTY not available" | P1, macOS, packaging | 11 | **P1 + 最高评论数**：macOS 下 `@lydell/node-pty` 预编译产物未被随包分发，且本地安装的 prebuild 因代码签名被拦，影响 Desktop Web Shell 的核心交互能力。 |
| 2 | [#8182](https://github.com/QwenLM/qwen-code/issues/8182) `qwen serve` 给每个 ACP 子进程分配 50% 宿主机内存 | P2, performance, daemon | 8 | 长寿命性能缺陷：`getAcpMemoryArgs()` 未按子进程数量做除法，多 ACP 时极易触发 OOM。 |
| 3 | [#12246](https://github.com/QwenLM/qwen-code/issues/12246) `;` 让 `cd` 被误判为前台，绕过 Write deny 规则 | **P1, security** | 4 | **安全关键**：引号解析忽略了真实分号，导致 `deny: ["Write(.qwen/settings.json)"]` 被绕过并写入受保护文件。 |
| 4 | [#12185](https://github.com/QwenLM/qwen-code/issues/12185) `@qwen-code/web-shell` 发布包内含不可解析的 `@/` 类型导入和 6 个未打包的运行时依赖 | P1, packaging, build | 6 | web-shell 进入 npm 后首次暴露打包缺陷，npm 消费者立即受影响。 |
| 5 | [#6721](https://github.com/QwenLM/qwen-code/issues/6721) `tool_search` 发现的延后工具污染 prompt cache 前缀 | P2, performance, caching | 7 | 缓存命中率直接相关——揭示真实工具 schema 一旦加入，缓存前缀即失效，影响长会话成本。 |
| 6 | [#11847](https://github.com/QwenLM/qwen-code/issues/11847) Session recap（away summary）始终以英文生成 | P3, enhancement | 7 | 反映 i18n 缺失：系统提示硬编码英文，未跟随会话语言生成。 |
| 7 | [#12206](https://github.com/QwenLM/qwen-code/issues/12206) LSP 非 ASCII 响应被静默丢弃（**已 CLOSED**） | P1, core | 4 | 关键修复落地：以字节计数 `Content-Length` 与 UTF-16 字符串长度比较，CJK 响应此前一律返回空。 |
| 8 | [#11783](https://github.com/QwenLM/qwen-code/issues/11783) TUI 在注册后台任务后几秒崩溃（**已 CLOSED**） | P1, ui, rendering | 6 | 关键修复落地：React 19.2 `Maximum update depth exceeded`（#185），影响所有后台 shell 用户。 |
| 9 | [#12220](https://github.com/QwenLM/qwen-code/issues/12220) LSP 失败被吞为空数组 `[]` | P2, core | 4 | `NativeLspService` 的 per-server `try/catch` 仅写 debug 日志，模型无法区分"无结果"与"服务器故障"。 |
| 10 | [#12272](https://github.com/QwenLM/qwen-code/issues/12272) "agent" 工具描述约 2000 token，标记重复 | P3, feature-request, duplicate | 4 | 每轮都吃掉的 token 预算被社区频繁反映（重复条目），与 [#12142](https://github.com/QwenLM/qwen-code/pull/12142) "预算大型工具 schema" 直接相关。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 要点 |
|---|----|------|------|
| 1 | [#12190](https://github.com/QwenLM/qwen-code/pull/12190) `feat(serve)`：从历史持久化重试/重跑 workflow | OPEN | workflow 行动 `retry`/`rerun` 现在支持从 `isHistorical` 快照恢复（覆盖 daemon 重启中断的 run），配套硬化拆分在 [#12287](https://github.com/QwenLM/qwen-code/issues/12287)。 |
| 2 | [#11874](https://github.com/QwenLM/qwen-code/pull/11874) `feat(cli,core)`：`qwen batch` 命令 + 无头 `--batch` 模式 | OPEN | 接入 DashScope Batch API（半价、独占配额），命令集 `submit / status / fetch / cancel`。 |
| 3 | [#12269](https://github.com/QwenLM/qwen-code/pull/12269) `feat(core)`：将 runtime tools 路由到 bwrap | OPEN | 在 [#12067](https://github.com/QwenLM/qwen-code/pull/12067) 之上接入：Shell/Monitor 用共享 bwrap 适配器，Write/Edit 用受限文件 worker。但 [#12270](https://github.com/QwenLM/qwen-code/issues/12270) 提示 Windows lane 因此红。 |
| 4 | [#12142](https://github.com/QwenLM/qwen-code/pull/12142) `fix(core)`：限制 Agent/Shell 工具的 model-visible schema 预算 | OPEN | 给大型工具描述/参数 schema 加每轮预算，正面回应 #12272 等"工具描述过长"的社区反馈。 |
| 5 | [#12107](https://github.com/QwenLM/qwen-code/pull/12107) `perf(core)`：并行化扩展加载循环 | OPEN | 冷加载路径由串行改并行，影响 `GET /extensions` 全量刷新。 |
| 6 | [#10835](https://github.com/QwenLM/qwen-code/pull/10835) `fix(core)`：约束 MCP 工具返回的超大图片 | OPEN | 复用现有 image-view 预算，JPEG/PNG/WebP 超阈即缩放，保留 alpha 与原格式。 |
| 7 | [#12280](https://github.com/QwenLM/qwen-code/pull/12280) `fix(core)`：引号隐藏 `&` 时仍保留 Write deny | OPEN | 修复 [#12246](https://github.com/QwenLM/qwen-code/issues/12246)：补上 bash 引号展开后的真实 `&` 检测，**安全修复**。 |
| 8 | [#12258](https://github.com/QwenLM/qwen-code/pull/12258) `fix(mcp)`：每个 MCP

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-20** ｜ 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 📌 今日速览

今日社区活跃度较高，**TUI/Exec 修复批量合并** 成为主旋律 —— AdityaVG13 提交的 `fix(tui)` 系列 PR (#6363、#6365) 已合并，处理了光标定位、拖选复制、ink 注入、headless 输入悬停等多项问题。v0.10.0 规划线持续推进，多个 0.10.0 相关的 tracking issue 完成 acceptance 推进，同时发现新的会话同步 bug (#6369)。此外，runtime-api 终端字节流这一跨仓库能力正在合入 (#6361)，将对 Engine ↔ Core 的状态化终端通道产生重要影响。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。当前主线仍为 v0.10.0 开发分支（[#6094](https://github.com/Hmbown/Codewhale/issues/6094)），尚未发布二进制或包。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 编号 | 标题 | 状态 | 关注点 |
|---|------|-----|------|--------|
| 1 | [#6094](https://github.com/Hmbown/Codewhale/issues/6094) | v0.10.0 规划主线：重新设计、发布检查与协作入口 | OPEN | 本期发布的核心锚点 issue，整合了 0.10.0 的所有目标与子任务 |
| 2 | [#6310](https://github.com/Hmbown/Codewhale/issues/6310) | ACP follow-up：终端响应为空与 Full Access 发现 | OPEN | 本期评论最多（8 条），夜间构建已通过验证，剩余 full-access 策略待定 |
| 3 | [#6367](https://github.com/Hmbown/Codewhale/issues/6367) | `/branch` 分支结构在 save 路径被丢弃 | CLOSED | 高互动（5 评论），由 ffca963f9 修复，并衍生会话同步 follow-up (#6369) |
| 4 | [#6362](https://github.com/Hmbown/Codewhale/issues/6362) | configured_model_api_tests 栈溢出阻断 tui lib 测试 | OPEN | **阻塞 `cargo test -p codewhale-tui --lib`**，是当前的 CI 红线 |
| 5 | [#6139](https://github.com/Hmbown/Codewhale/issues/6139) | App-server：完成 Runtime 客户端转换与验收 | OPEN | HTTP/proxy 已联通真实 Runtime，仍剩 `/tool` 本地 Runtime 路径收敛 |
| 6 | [#6038](https://github.com/Hmbown/Codewhale/issues/6038) | 决策记录：保留 Fleet 与 agent 双方 profile | CLOSED | 关键架构决策：**问题出在命名与字段重复**，模型本身保留 |
| 7 | [#6228](https://github.com/Hmbown/Codewhale/issues/6228) | TUI 拖选部分片段时复制整 cell | CLOSED | 自 #6156 后 `selection_copy_markdown=true` 带来的回归，已在 #6365 修复 |
| 8 | [#6236](https://github.com/Hmbown/Codewhale/issues/6236) | `request_user_input` 在 headless run 永远等待 | CLOSED | 无 responder 时静默挂起，关闭开关反而解绑 —— 在 #6363 中以显式 ink withhold 修复 |
| 9 | [#5836](https://github.com/Hmbown/Codewhale/issues/5836) | Cloud dispatch：退役 legacy launcher，验证 Computer 契约 | OPEN | Engine 仍硬接 `LiveDaytonaLauncher`，与方向调整不一致 |
| 10 | [#5847](https://github.com/Hmbown/Codewhale/issues/5847) | 用 intent-based expand/collapse 替换 XOR 折叠逻辑 | OPEN | `history.rs:435` 的三重 XOR 颠倒意图，明确 fold 应胜过 verbose |

> 备选关注：[#5848 Ollama live catalog](https://github.com/Hmbown/Codewhale/issues/5848)、[#6368 metrics compaction 无 producer](https://github.com/Hmbown/Codewhale/issues/6368)、[#5837 Lambda microVM Computer rootfs](https://github.com/Hmbown/Codewhale/issues/5837)。

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 功能 / 修复

1. **[#6361](https://github.com/Hmbown/Codewhale/pull/6361) feat(runtime-api): 终端字节流 + 流恢复 + idempotent submit + agent-count pin**（OPEN）
   一次性合入 tracker 上的两个核心解锁项：`#34` Engine 的状态化终端字节流，`#76` 流恢复与幂等提交。是 Engine ↔ Core 终端协议的关键里程碑。

2. **[#6369](https://github.com/Hmbown/Codewhale/pull/6369) fix(session): 外部会话导入后同步 Engine 状态**（OPEN）
   `/resume <file>` 与 inline-JSON 导入只返回 message-only 结果，Engine 仍停留在旧 session 历史。#6367 的真正延续，需要让导入路径同步当前会话。

3. **[#6363](https://github.com/Hmbown/Codewhale/pull/6363) fix(tui,exec): 视觉行光标、历史 detach、显式 ink、headless withhold**（CLOSED ✅）
   六个 one-purpose 提交，含 composer cursor 视觉行步进、历史记录从命令通道剥离、显式 ink 控制、headless 模式下 `request_user_input` 显式 withhold。已合并。

4. **[#6365](https://github.com/Hmbown/Codewhale/pull/6365) fix(tui): painted-column 转录复制 + composer tabs，搭建 ink 测试**（CLOSED ✅）
   与 ratatui 源码对齐，改回 painted-column 模型（取代中途的 tab-stop 探索），并为 ink 注入路径新增回归测试。

### 依赖更新（dependabot 批量）

5. **[#6345](https://github.com/Hmbown/Codewhale/pull/6345) bump jsonschema 0.52.1 → 0.56.0**
6. **[#6342](https://github.com/Hmbown/Codewhale/pull/6342) bump clap_complete 4.6.9 → 4.6.11**
7. **[#6343](https://github.com/Hmbown/Codewhale/pull/6343) bump clap 4.6.6 → 4.6.7**
8. **[#6339](https://github.com/Hmbown/Codewhale/pull/6339) bump rust-i18n-support 4.2.1 → 4.2.2**
9. **[#6357](https://github.com/Hmbown/Codewhale/pull/6357) bump autoprefixer 10.5.4 → 10.6.1**（/web）
10. **[#6355](https://github.com/Hmbown/Codewhale/pull/6355) bump @types/node 26.4.0 → 26.6.1**（/web，已 CLOSED ✅）

---

## 📈 功能需求趋势

从本期 issue 池中提炼，社区关注方向集中在以下几条主线：

- **🖥️ IDE 战略与桌面应用化**：Codewhale Studio（VS Code fork）作为 canonical desktop [#5838](https://github.com/Hmbown/Codewhale/issues/5838)，配合 Computer 镜像从 Daytona 切到 AWS Lambda microVM [#5837](https://github.com/Hmbown/Codewhale/issues/5837)，呈现「瘦 Tauri shell → 完整 IDE fork」的明显路径。
- **⚙️ Runtime 收敛与 App-server 化**：将 `/tool` 等仍持有本地 Runtime 的路径彻底迁到真实 Runtime [#6139](https://github.com/Hmbown/Codewhale/issues/6139)；同步引入终端字节流协议 [#6361](https://github.com/Hmbown/Codewhale/pull/6361)，完成 Engine 与 Core 的状态化终端通道。
- **🤖 模型与 Provider 管理**：Ollama live catalog 接入后的 installed-release 验收 [#5848](https://github.com/Hmbown/Codewhale/issues/5848)；Fleet 与 agent profile 的去重与命名统一决策 [#6038](https://github.com/Hmbown/Codewhale/issues/6038)。
- **📊 可观测性**：metrics compaction 因 producer 缺失长期打印 `(no data)` [#6368](https://github.com/Hmbown/Codewhale/issues/6368)，社区开始强调诊断 schema 必须有 writer。
- **🧰 Marketplace & 文档**：WhaleWiki 在 onboarding 与变更评审中的作用重新被审视 [#6364](https://github.com/Hmbown/Codewhale/issues/6364)。

---

## 🧑‍💻 开发者关注点（高频痛点）

1. **TUI 复制/粘贴回归**：`selection_copy_markdown` 默认行为把整个 cell 复制而非片段 [#6228](https://github.com/Hmbown/Codewhale/issues/6228) —— 属于「正确但难用」的典型回归。
2. **Headless 模式隐形死锁**：`request_user_input` 在无 responder 时既不报错也无可见等待状态 [#6236](https://github.com/Hmbown/Codewhale/issues/6236) —— headless 用户最难调试的一类问题。
3. **测试栈溢出阻断 CI**：`configured_model_api_tests` 让 `cargo test --lib` 直接 SIGABRT [#6362](https://github.com/Hmbown/Codewhale/issues/6362) —— 单点失败阻塞整条测试链。
4. **会话/分支状态不一致**：`/branch` 后再次 save 会丢失分支结构 [#6367](https://github.com/Hmbown/Codewhale/issues/6367)；外部导入 session 后 Engine 未同步 [#6369](https://github.com/Hmbown/Codewhale/pull/6369) —— 「可见操作 ≠ 持久化状态」反复出现。
5. **代码可读性反模式**：XOR 折叠逻辑把开发者的意图反转 [#5847](https://github.com/Hmbown/Codewhale/issues/5847) —— 社区希望把控制流换成「显式 fold > verbose > default」这种 intent 链。
6. **主题配色缺校验**：多主题下出现黑底黑字 [#6234](https://github.com/Hmbown/Codewhale/issues/6234) —— 缺乏主题 CI 检查。
7. **多行 prompt 的按键行为不一致**：Mac 上长 prompt 上箭头被吞 [#6291](https://github.com/Hmbown/Codewhale/issues/6291) —— 输入体验的细节问题。

---

*日报基于 GitHub Issues / PRs 自动聚合，仅反映公开社区动态。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*