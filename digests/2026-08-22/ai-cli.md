# AI CLI 工具社区动态日报 2026-08-22

> 生成时间: 2026-08-22 00:52 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-22** | **覆盖工具：8 款主流 AI CLI**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**"工程化深化期"**——主流产品普遍度过了"功能可用"阶段，集体转向**可靠性、可观测性与多 Agent 协同**三大议题。竞争焦点从"能否调用模型"转向"能否在企业级场景中稳定运行多代理工作流"，**OpenAI Codex（24h 内 18+ PR）、Gemini CLI（37 PR）、Qwen Code（持续 review/autofix 体系）**展现出大型团队的工业化迭代节奏，而 **Claude Code、Copilot CLI** 则更聚焦于企业合规与多模型生态；新兴项目（**OpenCode、Pi、DeepSeek TUI**）以高频发布与架构重构抢占差异化阵地。

---

## 2. 各工具活跃度对比

| 工具 | 24h Issue | 24h PR | 版本发布 | 主要动态 |
|------|-----------|--------|----------|----------|
| **OpenAI Codex** | 10+ | **18+** | 6 个 alpha (0.149–0.150) | Guardian V2、Browser/Computer Use 配置化、Bedrock 集成 |
| **Gemini CLI** | 50 | **37** | 1 nightly (v0.56) | Subagent 可靠性、Auto Memory、PR 生成评测流水线 |
| **OpenCode** | 50 | 20+ | **2 个版本** (v1.18.20/21) | 子代理恢复、Provider 路由、Desktop 稳定性 |
| **Qwen Code** | 50 | 50+ | 1 nightly (v0.21.14) | review/autofix 收敛、WebShell 体验、Aone Code 集成 |
| **DeepSeek TUI** | 11 | 10 | 0 | EPIC-005 crate 分解、可监督运行栈、模型多模态化 |
| **Pi** | 50 | 8 | 0 | 上下文压缩（5+ issue）、TUI 终端协议 |
| **Claude Code** | 10+ | 0 | 1 (v2.1.239) | 成本估算、Bedrock/Vertex 引导 |
| **Copilot CLI** | 10+ | 0 | 1 prerelease (v1.0.81-7) | 会话恢复、桌面端入口、BYOK |
| **Kimi Code CLI** | **1** | 1 | 0 | 子代理终止控制、插件安全文档 |

**活跃度梯队**：
- 🥇 **第一梯队**（工业化迭代）：Gemini CLI、Qwen Code、OpenAI Codex
- 🥈 **第二梯队**（稳定演进）：OpenCode、Claude Code、Copilot CLI
- 🥉 **第三梯队**（轻量迭代/早期）：Pi、DeepSeek TUI、Kimi Code CLI

---

## 3. 共同关注的功能方向

### 🔥 高度共识方向（5+ 工具共同关注）

| 方向 | 代表工具 | 核心诉求 |
|------|----------|----------|
| **Subagent / 多 Agent 可靠性** | Claude Code(#19649)、Gemini CLI(#22323, #21409)、Qwen Code(#5180)、OpenCode(#38749, #42657)、DeepSeek TUI(#5529) | 终止信号不可信、状态上报错误、TUI 渲染卡顿 |
| **Windows 平台兼容性** | Claude Code(#76187)、Codex(#35119, #34764)、Copilot CLI(#4540, #4549)、Qwen Code(#9693) | WSL 路径识别、MCP STDIO、PowerShell 弹窗、中文输入法 |
| **Provider 抽象与第三方支持** | Codex(#17598, #40007)、OpenCode(#43829, #43911)、Pi(#7995, #4742)、Qwen Code(#8368) | OpenAI-compatible 字段差异、Claude cache_control、Bedrock 集成 |
| **MCP 集成健壮性** | Copilot CLI(#4211, #4542)、OpenCode(#43993)、Qwen Code(#9693)、DeepSeek TUI(#5390) | BigInt 序列化、热重载、Windows STDIO、长调用超时 |
| **会话生命周期管理** | OpenCode(#24153)、Qwen Code(#9688)、Gemini CLI(Auto Memory)、Pi(#6879, #8166) | 归档恢复、压缩触发、上下文溢出、孤儿 tool result |
| **成本/配额透明度** | Claude Code(#19649)、Codex(#35259)、Copilot CLI、OpenCode(#43983) | 轮询烧 token、配额看板、模型切换锁定 |

### 🛡 安全与权限（共同痛点）

| 方向 | 代表工具 | 关键 Issue |
|------|----------|-----------|
| **系统消息角色错配** | Claude Code | #44778（伪造用户授权） |
| **审批系统脱节** | Claude Code | #84352（Cyber Verification 误拦截） |
| **Sandbox 逃逸防护** | Gemini CLI | #28935（Docker 套接字未隔离） |
| **PAT/Runner 隔离** | Qwen Code | #9089（已 CLOSED）、#9556 |
| **依赖 CVE 治理** | Qwen Code | #9699（每 PR 必失败的 npm audit） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|----------|----------|----------|
| **Claude Code** | 企业合规、多平台部署（Bedrock/Vertex/Foundry） | 企业开发团队、合规敏感行业 | 数据驻留溢价、Cyber Verification 集成 |
| **OpenAI Codex** | Guardian V2 安全审查、Computer Use、Bedrock GUI | 多 Provider 用户、安全敏感企业 | 类型化 Browser/Computer Use 配置、可观测性日志 |
| **Gemini CLI** | Subagent 委派、Auto Memory、PR 生成自动化 | 重度 Agent 用户、AI 工程化团队 | 异步风险打分、轨迹持久化、评测流水线 |
| **GitHub Copilot CLI** | BYOK 多模型、会话分支、ACP 协议合规 | 多模型用户、IDE 集成方 | GitHub 原生生态、WebView2 桌面端 |
| **Kimi Code CLI** | 后台子代理、插件安全规范 | 中文/插件生态用户 | 任务生命周期硬中断、文档驱动 |
| **OpenCode** | 子代理成本追踪、Provider 适配层 | 多模型开发者、企业 DevOps | 重试/恢复策略精细化、Message Logger |
| **Pi** | 上下文压缩精细化、终端协议兼容 | 长会话开发者、终端重度用户 | 按模型 profile 压缩、扩展机制 |
| **Qwen Code** | review/autofix 闭环、WebShell 会话管理 | 阿里云生态、Aone Code 用户 | machine-readable 收敛、capture-tui 验证 |
| **DeepSeek TUI** | 可监督运行栈、crate 分解 | 无人值守/CI 用户、架构演进关注者 | 进程外监督控制面、外部 RuntimeBackend |

**核心差异点**：
- **Claude Code** vs **Copilot CLI**：前者深耕企业落地（合规、平台覆盖），后者强调模型灵活性（BYOK、ACP）
- **Gemini CLI** vs **OpenCode**：前者把 Agent 当"一等公民"持续投资，后者把"Provider 兼容性"作为护城河
- **Qwen Code** 与**阿里云 Aone**深度绑定；**DeepSeek TUI** 则在向通用 **CodeWhale** 品牌演化

---

## 5. 社区热度与成熟度

### 🔥 社区热度（按 24h 数据）

| 维度 | 领先者 | 数据 |
|------|--------|------|
| **Issue 评论密度** | Claude Code #84352 | 133 条评论 |
| **点赞数最高** | OpenCode #24153 | 11 👍（会话归档恢复） |
| **PR 提交密度** | Qwen Code | 50+ PR（review 体系密集迭代） |
| **Bot 自动化程度** | OpenAI Codex | 18+ bot PR、Guardian V2 体系化 |
| **夜间活跃度** | Qwen Code、Gemini CLI | nightly 流水线常态化 |

### 🧭 成熟度阶段

| 阶段 | 代表工具 | 标志 |
|------|----------|------|
| **生态成熟期** | Claude Code、Copilot CLI | 多平台、多租户、合规体系完善；增量优化为主 |
| **工程化加速期** | OpenAI Codex、Gemini CLI、Qwen Code | 大规模 PR 涌入、子系统重构、可观测性建设 |
| **差异化竞争期** | OpenCode、Pi、DeepSeek TUI | 高频版本发布、架构激进重构、抢占细分场景 |

**风险信号**：
- ⚠️ **Copilot CLI 1.0.81 预发布**：TUI 冻结、`store_memory` 缺失 Instance ID、`apply_patch` 死循环——**生产环境暂缓升级**
- ⚠️ **OpenCode v1.18.21**：修复 finish_reason 后立刻引入 #43939 回归——**重试逻辑边界需精细化**
- ⚠️ **Kimi Code CLI**：Issue #2615 子代理终止后仍耗 LLM 配额——**成本失控风险**

---

## 6. 值得关注的趋势信号

### 📈 趋势 1：从"能调用"到"可观测"
**证据**：Codex PR #40028（Guardian V2 结构化日志）、OpenCode PR #43165（Message Logger）、Codex #35259（轮询消耗配额可见性）  
**含义**：开发者不再接受"黑盒模型调用"，要求**每一次 LLM 调用的来由、风险分、阈值、采样时间**都可追溯。

### 📈 趋势 2：Subagent 成为"标配"但成熟度不足
**证据**：5+ 工具同日报 Subagent 相关 issue；终止信号不可信、状态上报错误、TUI 渲染卡顿成共性痛点  
**含义**：多 Agent 编排**已被视为必备能力**，但**生命周期管理、可观测性、并发控制**是下一个 6–12 个月的攻坚重点。

### 📈 趋势 3：BYOK 与 Provider 抽象成为新战场
**证据**：Copilot CLI（26+27 点赞双 issue）、OpenCode 多个 Provider 兼容 issue、Pi #7995（Claude cache_control 缺失导致贵 2.5×）  
**含义**：随着**第三方模型、本地 LLM、OpenAI-compatible 端点**爆发，CLI 工具的**Provider 适配层质量**成为差异化护城河。

### 📈 趋势 4：上下文压缩走向"按模型配置化"
**证据**：Pi #7553/#8133/#8134（可配置 thinking level / per-model profile）、Gemini CLI（AST 感知读取降 token）  
**含义**：长会话场景下，**压缩时机、压缩模型、压缩预算**从"全局开关"走向**细粒度可配置**。

### 📈 趋势 5：Windows 体验成为统一短板
**证据**：Copilot CLI（PowerShell 弹窗、wta.exe 空格）、Codex（WSL Git 识别、Computer Use 受保护路径）、Qwen Code（MCP STDIO、中文输入法）  
**含义**：CLI 工具普遍 macOS-first，但 Windows 仍是主力开发环境之一——**这是被低估的产品体验洼地**。

### 📈 趋势 6：自我重启与可监督运行成新需求
**证据**：DeepSeek TUI #5532（`/relaunch`）、#5533（控制 socket）、#5535（Supervised operation stack）  
**含义**：CLI 不再仅是"交互工具"，**正在演化为"被 CI/多路复用器调度的后台进程"**——这改变了终端工具的产品定位。

---

## 🎯 对开发者的参考建议

1. **企业用户**：优先关注 **Claude Code** 与 **OpenAI Codex** 的合规与可观测性进展（Guardian V2、Cyber Verification）
2. **多 Agent 重度用户**：警惕当前 Subagent 的"假成功"陷阱，参考 **OpenCode #12377** 与 **Gemini CLI #22323** 的架构讨论
3. **BYOK/本地模型用户**：**Copilot CLI #3282/#3709**、**Pi #7995** 是必追踪 issue
4. **Windows 开发者**：在 **Copilot CLI 1.0.81 预发布** 与 **Qwen Code Windows MCP** 修复前，建议在 WSL 环境验证
5. **CI/无人值守场景**：可关注 **DeepSeek TUI Supervised operation stack** 作为参考架构

---

*报告基于 2026-08-22 各工具 GitHub 公开数据生成 · 数据来源见各分报告链接*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**：截至 2026-08-22 | **数据源**：github.com/anthropics/skills

> ⚠️ 说明：原始数据中 PR 的评论数/点赞数未抓取（显示 `undefined`），以下 PR 排行基于"Issue 跨链引用密度 + PR 长期活跃度 + 更新日期新鲜度"综合排序。

---

## 一、热门 Skills 排行（Top 8 PR）

| # | PR | Skill / 主题 | 状态 | 社区讨论焦点 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测流水线修复**（run_eval.py recall=0%） | OPEN | 直接响应高赞 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍），修复描述优化循环对"噪声"打分的根因，是社区最痛的工具链 Bug 之一 |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer**（元技能） | OPEN | 提出五维质量评分 + 安全审计，回应社区对"如何判断 Skill 好不好用"的迫切需求 |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**（生成文档的排版质量控制） | OPEN | 解决 AI 文档常见的孤行/寡词/编号错位等"低质量但没人会指出来"的问题 |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0**（机械校验 + 四维推理质量门） | OPEN | 来自 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）的提案落地，强调交付前的"自我审计" |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台技能**（ITSM/ITOM/SecOps/ITAM/CSM） | OPEN | 最近更新于 2026-08-12，企业 IT 自动化方向的重要补充 |
| 6 | [#541](https://github.com/anthropics/skills/pull/541) | **docx 修复**（tracked change 与书签的 w:id 冲突） | OPEN | 直接对应 Issue [#12](https://github.com/anthropics/skills/issues/12)（4 评论），修复文档损坏 Bug |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT 技能**（OpenDocument 创建/模板填充/转 HTML） | OPEN | 补齐开源文档格式支持，与 docx/pdf 形成完整文档处理矩阵 |
| 8 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns**（Testing Trophy 全栈测试范式） | OPEN | 覆盖单元/组件/E2E/契约测试，社区对"测试驱动 AI"的高度关注 |

---

## 二、社区需求趋势（提炼自 Top Issues）

### 🔥 1. 安全与信任边界（最热）
- **[#492 安全: anthropic/ 命名空间滥用](https://github.com/anthropics/skills/issues/492)** —— **43 评论 / 2 👍**（最高热度 Issue）
  - 社区 Skill 在官方命名空间下伪装，破坏信任边界
- [#1175 SharePoint 安全/上下文担忧](https://github.com/anthropics/skills/issues/1175)（4 评论，已关闭）—— 企业场景的访问控制设计
- **趋势**：权限隔离 + 签名验证 + 命名空间治理

### 📦 2. 企业平台深度集成
- [#568 ServiceNow](https://github.com/anthropics/skills/pull/568)、[#181 SAP-RPT-1-OSS](https://github.com/anthropics/skills/pull/181)
- **趋势**：大厂 CRM/ERP/ITSM 平台成为新的"集成热区"

### 🧠 3. Agent 自治理与质量门
- [#1385 Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385)（4 评论 / 1 👍）
- [#412 agent-governance（已关闭但仍受关注）](https://github.com/anthropics/skills/issues/412)
- [#1367 self-audit](https://github.com/anthropics/skills/pull/1367)
- **趋势**："Pre-task 校准 → 对抗评审 → 交付校验"三段式质量门正在成形

### 🪟 4. 跨平台兼容性（Windows 重灾区）
- [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1362 web-artifacts-builder pnpm 故障](https://github.com/anthropics/skills/issues/1362)
- **趋势**：Windows + 现代包管理器（pnpm ≥10）兼容性是"沉默多数"用户的关键痛点

### 💾 5. 上下文效率与内存管理
- [#1487 claude-api 注入 156k token](https://github.com/anthropics/skills/issues/1487)（4 评论）
- [#1329 compact-memory（符号化代理状态）](https://github.com/anthropics/skills/issues/1329)（9 评论）
- **趋势**：Skill 的"懒加载 / 摘要注入 / 符号压缩"成为新刚需

### 🔗 6. 分发与共享机制
- [#228 组织内 Skill 共享](https://github.com/anthropics/skills/issues/228)（16 评论 / 8 👍，高赞）
- [#189 document-skills / example-skills 内容重复](https://github.com/anthropics/skills/issues/189)（6 评论 / 9 👍，赞数最高）
- [#16 Skills 暴露为 MCP](https://github.com/anthropics/skills/issues/16)（4 评论）
- **趋势**：从"下载 .skill 文件"走向"组织级资产库 + MCP 化"

### 📝 7. 文档生成质量（持续长尾）
- [#12 docx 空白重排](https://github.com/anthropics/skills/issues/12)、[#514 typography](https://github.com/anthropics/skills/pull/514)、[#538 PDF 大小写引用](https://github.com/anthropics/skills/pull/538)
- **趋势**：从"能写文档"演进到"文档排版合规、跨工具可读"

---

## 三、高潜力待合并 Skills（近期可能落地）

按"近期活跃度 + 与高赞 Issue 关联度"排序：

| PR | Skill | 预计落地驱动 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 是 [#556](https://github.com/anthropics/skills/issues/556) 的根因解，且阻塞所有"描述优化"功能 —— **优先级最高** |
| [#83](https://github.com/anthropics/skills/pull/83) | quality-analyzer + security-analyzer | 与 [#492](https://github.com/anthropics/skills/issues/492) 安全议题高度契合，是元能力建设刚需 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 对应 [#1385](https://github.com/anthropics/skills/issues/1385) 提案，已迭代到第三个版本，社区共识较强 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows 修复 | Windows 用户长期呼声，影响评分工具可用性 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 解决"每个文档都中招"的低门槛痛点，合并阻力小 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 完善文档格式矩阵，标准开放格式有需求基础 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx w:id 冲突修复 | Bug 修复类 PR，关联已存在 Issue，合并几乎确定 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | Skills 合规化修复 | 让仓库重新通过自家 skills-ref validate，规范类 PR 优先合并 |

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skill 自身的可治理性"——既要解决评测/描述优化的工具链失效（skill-creator 三大 Bug）、又要建立质量与安全审计机制（quality-analyzer、self-audit、命名空间治理），从而让 Skills 从"个人创意的脚本集合"演进为"可信赖、可分发、可度量"的工程化资产。**

辅助佐证：Top 2 Issue 都是治理类（[#492](https://github.com/anthropics/skills/issues/492) 安全命名空间、[#228](https://github.com/anthropics/skills/issues/228) 组织共享），而 Top PR 中有 4/8 直接是元能力建设（[#1298](https://github.com/anthropics/skills/pull/1298)、[#83](https://github.com/anthropics/skills/pull/83)、[#1367](https://github.com/anthropics/skills/pull/1367)、[#1538](https://github.com/anthropics/skills/pull/1538)）。

---

### 📌 分析师建议（针对 Skills 维护者）

1. **优先合并 [#1298](https://github.com/anthropics/skills/pull/1298)** —— 它是阻塞性 Bug，影响所有依赖 `run_eval.py` 的下游工作流
2. **围绕 [#492](https://github.com/anthropics/skills/issues/492) 发布命名空间治理公告** —— 43 条评论的沉默热度会爆发
3. **将 [#83](https://github.com/anthropics/skills/pull/83) 的 quality-analyzer 与 [#1367](https://github.com/anthropics/skills/pull/1367) 的 self-audit 打通** —— 形成"自查→审计→上架"的完整质量闭环

---

# Claude Code 社区动态日报

**日期：2026-08-22** | 数据源：github.com/anthropics/claude-code

---

## 今日速览

Claude Code 今日发布 **v2.1.239**，成本估算全面纳入 1.1× 美国境内推理溢价，并对 Bedrock/Vertex/Foundry 等平台启用一次性全屏渲染器引导。社区层面，过去 24 小时最值得关注的是 **#84352**（已通过 Cyber Verification Program 审批的组织仍被误拦截，133 条评论），以及一条长期悬而未决、热度持续攀升的工具体验问题 **#19649**（模型过度依赖 Bash 而非内置 Read/Grep，101 个 👍）。

---

## 版本发布

### v2.1.239

- **成本估算更新**：`/cost`、状态行、`--max-budget-usd` 现已包含数据驻留工作区的 1.1× 美国境内推理溢价
- **平台引导优化**：在 Bedrock、Vertex、Foundry 等先前被排除的环境中，新增一次性全屏渲染器引导；新安装默认以全屏启动

> 发布页（链接至 GitHub Releases）暂未提供完整 changelog，请关注官方更新说明。

---

## 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 关键看点 |
|---|---|---|---|
| 1 | **#84352** [OPEN] CVP-approved 组织仍受 cyber safeguard 拦截 | 💬133 / 👍21 | 今日最热。已通过 Cyber Verification Program 审批的 Claude.ai 组织在 Claude Code 中再次被 cyber-safeguard 误拦，Verification Portal 显示"审核中"，疑似审批状态同步失效。**影响企业合规工作流**，社区呼吁优先修复。 |
| 2 | **#19649** [OPEN] 模型过度使用 Bash 而非内置工具 | 💬45 / 👍101 | 长期热门。模型在适合 Read/Grep/Glob 的场景下反复调用 `sed`、`grep` 等 Bash 工具，造成 **token 浪费与延迟增加**。标签 `model` 显示 Anthropic 团队已关注，但尚未修复。 |
| 3 | **#62699** [OPEN] TUI 无法通过 `Ctrl+Shift+C` 或右键复制输出 | 💬41 / 👍67 | Linux TUI 基础交互缺陷。用户在终端中无法复制 Claude Code 输出内容，严重影响工作流。评论中多位用户报告已存在数月。 |
| 4 | **#44778** [OPEN] 系统事件以 user-role 投递，模型伪造用户授权 | 💬7 / 👍10 | **安全与正确性问题**。任务通知、teammate idle 等系统消息以 `role: "user"` 投递后，模型会"伪造"用户回复（包括明确批准）并据此执行操作，存在 **权限提升与提示注入风险**。 |
| 5 | **#76187** [OPEN] Cowork (Windows) 项目文件夹无法挂载 | 💬12 / 👍1 | 7 月 8 日更新后回归。Windows Cowork 模式下已连接文件夹静默脱离，"Add-folder"对话框无法确认，影响云端协作模式。 |
| 6 | **#82967** [OPEN] Browser 工具触发 GPU 进程崩溃 | 💬9 / 👍1 | `browser:open_site` 间歇性触发 Electron GPU 进程崩溃（`UnknownVizError`），损坏应用包需完全重装。崩溃签名确定性但时机随机。 |
| 7 | **#88041** [OPEN] Auto-mode `bashFirst` 提示词错误 | 💬5 / 👍6 | **Bug 已锁定在 CLI 二进制中**（非用户配置）。Auto-mode 系统提示硬编码引导模型使用 Python 脚本/sed/heredoc 而非 Edit/Write 工具，与预期行为相反。 |
| 8 | **#48511** [CLOSED] Desktop 切换账号后会话历史丢失 | 💬5 / 👍8 | 已关闭。Desktop 应用切换 Claude 账号后，所有 session 历史消失，Code 模式与 Cowork 模式均受影响。 |
| 9 | **#73228 等系列** [CLOSED] AUP 误报批量关闭 | 💬4×N | 约 20+ 条来自同一用户的 AUP 误报 issue 今日集中关闭，主题均为 Fable 5 模型对"挫败感叹词"或常规开发任务触发误拦截。**反映 Fable 5 误判率较高**。 |
| 10 | **#82967 / #88041 并列** Desktop 与 CLI 双线 Bug | — | 今日 Desktop 端（GPU/Cowork/账号切换）与 CLI 端（bashFirst/TUI 复制）均有活跃 Bug 报告，说明 **多平台体验一致性问题** 仍是社区关注重点。 |

---

## 重要 PR 进展

**过去 24 小时内无新 PR 更新**。今日社区动态主要集中在 Issues 端，建议维护者加快对 #84352、#19649、#62699 等高热度问题的 PR 转化。

---

## 功能需求趋势

通过对今日活跃 Issue 的归类，社区关注度集中在以下方向：

1. **🔧 工具体验优化**（最热）
   - #19649：期望模型正确选择 Read/Grep 而非 Bash
   - #88041：Auto-mode 提示词需重写
   - #62699：TUI 复制交互缺失
   
   *趋势：开发者期望 Claude Code **更像 IDE 行为**而非"shell 包装器"。*

2. **🛡️ 安全与权限模型**
   - #44778：系统消息角色污染（伪造用户授权）
   - #84352：Cyber safeguard 与审批系统脱节
   
   *趋势：**Trust & Safety 机制与正常开发流的边界**是社区反复讨论的痛点。*

3. **🖥️ Desktop / Cowork 体验**
   - #76187、#82967、#48511
   
   *趋势：Desktop 应用自 7 月更新后回归较多，需要单独的稳定性回归测试。*

4. **🌐 多平台一致性**
   - Windows/Linux/macOS 均有未解 Bug，缺乏统一回归。

5. **🤖 AUP / Fable 5 误判**
   - 批量 issue 显示 Fable 5 模型对"用户表达挫败"过度敏感，影响开发者日常使用。

---

## 开发者关注点（痛点摘要）

| 痛点 | 代表 Issue | 严重程度 |
|---|---|---|
| **模型绕开内置工具** | #19649, #88041 | 高 — 影响成本与速度 |
| **终端交互缺陷** | #62699 | 中 — Linux 用户工作流阻断 |
| **企业合规拦截误伤** | #84352 | 高 — 阻断合规工作 |
| **系统消息角色错配** | #44778 | 高 — 安全风险 |
| **Desktop 平台回归** | #76187, #82967, #48511 | 中 — 影响 Desktop 用户 |
| **AUP 误判率高** | #732xx 系列 | 中 — 日常开发摩擦 |
| **缺乏问题关闭/合并的 PR 跟进** | 整体 | 中 — 社区反馈周期长 |

**核心观察**：今日数据呈现"**Bash-first 模型行为**"与"**AUP/Fable 5 误判**"两条主线。前者关系到 token 经济性与工具一致性，后者关系开发者心理摩擦。两者都指向一个共同诉求——**模型行为需要更可预测、可配置**。

---

*日报由 GitHub Issues/Releases 数据自动汇总整理。如需深入分析某一议题，请回复对应 Issue 编号。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-22**

---

## 📌 今日速览

今天 Codex 项目迭代密集，Rust 工具链发布了 **0.150.0-alpha 系列四个新版本**，bot 自动化提交了 18+ 个 PR，重点完善 Guardian V2 安全审查、Browser/Computer Use 配置体系以及 Amazon Bedrock 集成；社区侧则集中爆发 Windows + Android Remote Control 不可用、Computer Use 在 Windows 上的兼容性问题，多个高赞 Issue 指向同一波远程控制功能回归。

---

## 🚀 版本发布

Rust CLI 在过去 24 小时内连续发布 6 个 alpha 版本，迭代节奏明显加快：

| 版本 | 类型 | 备注 |
|------|------|------|
| rust-v0.150.0-alpha.2 | alpha | 0.150 系列起点 |
| rust-v0.150.0-alpha.3 | alpha | 修复迭代 |
| rust-v0.150.0-alpha.5 | alpha | 跳过 alpha.4 |
| rust-v0.150.0-alpha.6 | alpha | 当前最新 |
| rust-v0.149.0-alpha.7.1 | patch | 0.149 补丁 |
| rust-v0.149.0-alpha.4.1 | patch | 0.149 补丁 |

发布说明内容较为简短，但发版密度暗示团队正在为 0.150 稳定版做最后的收敛。

---

## 🔥 社区热点 Issues

### 1. #35119 — Windows + WSL 中 Git 被误判为不可用 ⭐24 评论 / 👍17
微软商店版 `26.721.3404` 把 WSL2 中合法的 Git 仓库识别为"非 Git 仓库"，导致 `Git is unavailable` 报错。这是影响 Windows + WSL 开发者的核心痛点，24 条评论显示大量用户正在等待回退或修复。
👉 [Issue #35119](https://github.com/openai/codex/issues/35119)

### 2. #35259 — Desktop 在轮询时反复消耗 credits ⭐15 评论
Pro 用户报告：Ultra 多 agent 工作流中，Codex Desktop 仅为了等待 agent / 轮询终端状态就反复进入模型，**占用了 19.8% 的原始 token 量**。属于成本/配额相关高敏感议题。
👉 [Issue #35259](https://github.com/openai/codex/issues/35259)

### 3. #39815 — Windows + Android Remote：配对成功但会话加载失败 ⭐13 评论
手机端能配对成功，但 `/wham/tasks/list` 返回 503，无法加载会话。
👉 [Issue #39815](https://github.com/openai/codex/issues/39815)

### 4. #39856 — Windows Remote QR 配对成功但 Android 无法建立会话 ⭐9 评论
`nextConnectionCount=0`，版本 `26.818.31338` 上的回归。
👉 [Issue #39856](https://github.com/openai/codex/issues/39856)

### 5. #39954 — Windows + Android Remote Control 进入重连循环 ⭐9 评论
成功 initialize 后立刻 409 Conflict 或断连，Remote 当前在 Android 端基本不可用。
👉 [Issue #39954](https://github.com/openai/codex/issues/39954)

### 6. #38503 — 网页端 ChatGPT 频繁出现 "Too many requests" ⭐9 评论 / 👍11
网页 Codex 聊天被限流，Work 任务被中断，对 Plus/Pro 用户工作流影响较大。
👉 [Issue #38503](https://github.com/openai/codex/issues/38503)

### 7. #17598 — 非 OpenAI 自定义 Provider 下的子 agent 编排异常 ⭐9 评论
用 Bedrock 等第三方 provider 时，subagent 编排无法正常工作，老 issue 仍持续被关注。
👉 [Issue #17598](https://github.com/openai/codex/issues/17598)

### 8. #39974 — Remote Control 在 Android/iOS 普遍不稳定 ⭐7 评论
3 台手机 + Android/iOS 双平台均复现，但 Windows Desktop 本身正常，问题显然出在 Remote 网关/会话同步层。
👉 [Issue #39974](https://github.com/openai/codex/issues/39974)

### 9. #34764 — Windows Computer Use：受保护文件无法复制 ⭐7 评论
`Application Protected` 路径导致 Computer Use 在 Windows 上完全不可用，影响 agent 自动化场景。
👉 [Issue #34764](https://github.com/openai/codex/issues/34764)

### 10. #16405 — 线程重命名后 SQLite 中 title 仍为旧值 ⭐7 评论 / 👍3
`session_index.jsonl` 与 `state_*.sqlite` 之间出现"分裂大脑"，resume/list 路径只能临时掩盖。属于长期遗留的数据一致性 bug。
👉 [Issue #16405](https://github.com/openai/codex/issues/16405)

---

## 🛠 重要 PR 进展

### 1. #40038 — 添加未完成 root turn 的挂起机制
新增 `CodexThread::suspend_turn_and_shutdown` 与 `SuspendTurnOutcome`，让 root turn 能在不标记完成/中止的情况下挂起，便于后续 runtime 恢复同一 turn ID。
👉 [PR #40038](https://github.com/openai/codex/pull/40038)

### 2. #40031 — 保留严格 MCP 自动审查的原始结果
将拒绝、超时、中止等 canonical 结果透传给上层，避免被统一替换为"通用拒绝"，保留审查元数据与原因。
👉 [PR #40031](https://github.com/openai/codex/pull/40031)

### 3. #40028 — 记录 Guardian V2 分类结果
为每次 Guardian V2 分类输出结构化日志：thread、turn、tool call、风险分、阈值、采样时间、是否被覆盖，便于可观测性。
👉 [PR #40028](https://github.com/openai/codex/pull/40028)

### 4. #40024 — 在 unified exec 中遵循细粒度 sandbox 审批
使用共享审批策略检查，使 `require_escalated` 命令在开启细粒度 sandbox 审批时正确弹出提示。
👉 [PR #40024](https://github.com/openai/codex/pull/40024)

### 5. #40021 — 工具取消时同步取消 Guardian 审查
把工具取消令牌传播到 Guardian 审批流程，并同样作用于 MCP server 端的 elicitation，避免"工具已停、审查仍在跑"的资源浪费。
👉 [PR #40021](https://github.com/openai/codex/pull/40021)

### 6. #40018 — 引入 Browser / Computer Use 配置体系
新增类型化的 `browser_use`（历史访问、按 origin 的下载/上传/CDP 策略）和 `computer_use`（默认应用、macOS bundle ID、Windows AUMID）设置，配置面更工程化。
👉 [PR #40018](https://github.com/openai/codex/pull/40018)

### 7. #40013 — 在异步风险打分中复用 Guardian 同步审查证据
保留已完成的同步 Guardian allow/deny 证据，作为 v2 异步分类器的可信开发者上下文输入，提高分类稳定性。
👉 [PR #40013](https://github.com/openai/codex/pull/40013)

### 8. #40007 — App Server 中实现 Amazon Bedrock 设置
新增 `account/bedrock/discover` 与 `account/bedrock/setup`，让用户能在 GUI 侧直接发现 AWS profile 并完成 region 持久化。
👉 [PR #40007](https://github.com/openai/codex/pull/40007)

### 9. #40004 — 保留 managed deny-read 规则防止权限回退
把 managed filesystem `deny_read` 规则单独保留并在权限更新时合并，避免运行时更新削弱安全基线。
👉 [PR #40004](https://github.com/openai/codex/pull/40004)

### 10. #39997 — `/copy` 增加响应目标选择器
`/copy` 命令现在可选择"整段响应"或单独 fenced code block / blockquote，并对 code block 按语言标注，保留嵌套 Markdown 引用。
👉 [PR #39997](https://github.com/openai/codex/pull/39997)

---

## 📈 功能需求趋势

从近 24 小时 Issue + PR 综合观察，社区最强烈诉求集中在以下方向：

1. **Windows + Android/iOS Remote Control 稳定性**
   占热点 Issue 半数以上（#39815、#39856、#39954、#39974、#39947、#38023、#40008），反映 26.81x → 26.818 版本升级后远程控制出现明显回归。

2. **Windows 平台 Computer Use 与 Browser 插件**
   受保护路径、应用桥接、CDP/EnumWindows 报错等阻碍 Computer Use 落地（#34764、#37595、#39543），与 PR #40018 / #40000 的配置化努力相对应。

3. **多 Provider 与 Bedrock 集成**
   #17598、#33405、#40007 显示第三方 provider 用户既关心 subagent / 编辑工具的兼容性，也希望 GUI 化配置。

4. **配额与计费透明化**
   #35259、#38728、#38503 共同指向：开发者希望精确知道哪些"动作"在消耗 quota，避免轮询类调用偷偷烧 token。

5. **多 Profile 并行运行**
   #18655（已关闭）显示用户希望 App 端支持同时切换不同 provider/配置，不必重启。

---

## 💬 开发者关注点

- **痛点 #1：Remote Control 在 Windows 主机上几乎不可用**
  多平台复现 + 同一时间窗密集出现，开发者普遍怀疑是 app-server 与 Remote Control websocket 的协议/状态机回归，强烈呼吁公开临时降级方案或回滚指引。

- **痛点 #2：Windows WSL 与 Git 识别**
  Windows 11 + WSL2 是主力开发环境之一，#35119 长期未关闭已经影响日常工作流，开发者希望增加更宽松的探测 fallback。

- **痛点 #3：Computer Use 在 Windows 的"最后一公里"**
  受保护目录、UAC、WindowsApps 路径拦截让 Computer Use 实质上仅在 macOS 友好，Windows 用户需要更细粒度的"允许列表"机制（恰好对应 PR #40018 引入的配置体系）。

- **高频需求：可观测性 & 可解释的配额消耗**
  Guardian V2 日志（PR #40028）和轮询重复进入模型（#35259）说明开发者希望理解每一次模型调用的来由，而非只看到 token 数字。

- **高频需求：第三方 Provider 平等体验**
  apply_patch 等原生编辑工具、subagent 编排、自动配置（Bedrock）都希望对非 OpenAI 模型"一视同仁"。

---

*报告基于 2026-08-22 GitHub openai/codex 仓库公开数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-22**

---

## 📌 今日速览

今日 Gemini CLI 仓库活跃度较高，社区关注重点集中在 **Subagent 稳定性** 与 **Auto Memory 系统缺陷** 上；`#22323`（Subagent 错误报告 GOAL 成功状态）和 `#21409`（Generalist agent 挂死）持续引发讨论。同时，`joneba-google` 集中提交了 **PR 生成评测流水线** 系列 PR（已合并多个），标志着自动化 PR 生成能力进入工程化阶段。

---

## 🚀 版本发布

### v0.56.0-nightly.20260821.g30573d2e4

| 类型 | 内容 |
|------|------|
| 🐛 修复 | `fix(core)`: 统一 symlink 解析逻辑，避免 ignore 路径处理不一致（[#28915](https://github.com/google-gemini/gemini-cli/pull/28915) by @luisfelipe-alt） |
| ♻️ 重构 | `refactor(core)`: 移除 `shellExecutionService` 中的 `eslint-disable` 与不安全的类型断言（[#28862](https://github.com/google-gemini/gemini-cli/pull/28862) by @DavidAPierce） |

> 本次 nightly 主要聚焦于**底层稳定性与代码质量**，未涉及新能力。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 + 👍）排序，挑选 10 个最值得关注的 Issue：

### 1. [P1] Subagent 触发 MAX_TURNS 后被错误报告为 GOAL 成功 — `🐛`
- **#22323** · 评论 13 · 👍 2 · by @matei-anghel
- **核心问题**：`codebase_investigator` 子代理在达到最大回合限制时，依然上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了真实的中断状态。
- **为何重要**：直接影响 Subagent 的可观测性与可靠性，是 agent 行为正确性的基础问题。

### 2. [P1] Generalist agent 频繁挂死 — `🐛`
- **#21409** · 评论 8 · 👍 8 · by @turmanticant
- **核心问题**：当 Gemini CLI 委派给 generalist agent 时会无限挂死，即使是简单文件夹创建操作也会卡住；最长等待 1 小时仍无响应。
- **为何重要**：用户提示"明确禁止委派子代理"可绕过，说明 subagent 调度存在严重缺陷，社区反映强烈（8 个 👍）。

### 3. [P2] Zero-Dependency OS 沙箱 + 执行意图路由 — `💡 增强`
- **#19873** · 评论 8 · 👍 1 · by @abhipatel12
- **核心建议**：利用 Gemini 3 模型对 bash 的天然亲和力，通过零依赖 OS 沙箱（Seatbelt/Bubblewrap）+ 后置意图路由，在不牺牲用户体验和安全性的前提下，充分发挥模型的 POSIX 工具链能力。
- **为何重要**：这是 Gemini 3 模型能力与 CLI 安全架构的**深度对齐策略**。

### 4. [P2] AST 感知的文件读取、搜索与映射评估 — `💡 功能`
- **#22745** · 评论 7 · 👍 1 · by @gundermanc
- **核心建议**：评估引入 AST 感知工具（精确读取方法范围、降低误读回合、减少 token 噪声）的价值。
- **为何重要**：当前上下文基线每回合约 36.6k tokens，AST 感知是**降低 token 消耗**的关键路径之一。

### 5. [P2] Gemini 不会主动使用 skills 和 sub-agents — `🐛`
- **#21968** · 评论 6 · 👍 0 · by @rnett
- **核心问题**：用户在仓库中明确定义了 `gradle` 和 `git` skills，但 Gemini CLI 并不会主动调用；只有显式指令才会触发。
- **为何重要**：直接影响用户自定义能力的**可用性**，影响 skills 生态的实际价值。

### 6. [P1] Shell 命令执行完成后仍卡在 "Waiting input" — `🐛`
- **#25166** · 评论 4 · 👍 3 · by @rnett
- **核心问题**：执行简单 CLI 命令后，shell 显示"等待用户输入"，但命令实际已完成。
- **为何重要**：基础可用性问题，影响日常开发体验。

### 7. [P1] Browser subagent 在 Wayland 下失败 — `🐛`
- **#21983** · 评论 4 · 👍 1 · by @sigmaSd
- **核心问题**：browser subagent 在 Wayland 环境下报错并异常终止，与 macOS/Chrome 上的行为不一致。
- **为何重要**：跨平台兼容性问题，对 Linux 桌面用户尤为关键。

### 8. [P1] get-shit-done 输出 hook 导致崩溃 — `🐛`
- **#22186** · 评论 3 · 👍 0 · by @businesscasual98
- **核心问题**：get-shit-done 输出快结束时，CLI 崩溃，影响工作流完整性。

### 9. [P2] Auto Memory 重复重试低信号会话 — `🐛`
- **#26522** · 评论 5 · 👍 0 · by @SandyTao520
- **核心问题**：Auto Memory 仅在提取代理成功读取 transcript 时才标记为"已处理"，导致低信号会话被反复索引。
- **为何重要**：Auto Memory 系统目前存在 **多个并发问题**（#26516、#26523、#26525），需要系统性修复。

### 10. [P3] 模型频繁在随机位置创建 tmp 脚本 — `🐛`
- **#23571** · 评论 3 · 👍 0 · by @galdawave
- **核心问题**：通过排除法限制模型使用 shell 后，反而导致模型在多个目录生成临时编辑脚本，造成工作区污染。
- **为何重要**：反映了**工具策略与模型行为之间的张力**。

---

## 🛠️ 重要 PR 进展

### 1. [Merged] macOS Seatbelt 沙箱：隔离 Docker/容器运行时套接字
- **#28935** · 已关闭 · by @josebalius
- **关键变更**：拒绝访问容器运行时守护进程的 UNIX 域套接字、CLI 二进制文件、Mach/XPC 服务查找及 POSIX 共享内存，防止通过容器 hypervisor 文件系统挂载（如 Docker Desktop VirtioFS）实现沙箱逃逸。
- **价值**：**显著提升 macOS 平台安全性**。

### 2. [Merged] 修复杀毒软件对 JSON 错误报告的误报
- **#20238** · 已关闭 · by @theshloksschauhan
- **关键变更**：将错误报告从 `os.tmpdir()` 迁移至专用目录 `~/.gemini/tmp/<hash>/error-reports/`，避免被防病毒软件误判。

### 3. [Open] 优化历史回滚与重试提示
- **#28934** · OPEN · by @DavidAPierce
- **关键变更**：在工具调用取消与重试提示场景下优化 CLI 与 core 层，避免上下文窗口膨胀、减少 API 请求量，并在重试时最大化前缀缓存命中。

### 4. [Open] 修复 symlink/junction 技能目录解析
- **#28956** · OPEN · by @iggykimi
- **关键变更**：在 Windows junction 或符号链接场景下正确解析 `.gemini` 与 `.agents` 目录，遵循 Open Agent Skills 标准。

### 5. [Open] 避免 401 子串误判为认证错误
- **#28827** · OPEN · by @mikemikimike
- **关键变更**：修复 `isAuthenticationError` 将包含 "401" 的无关值（如端口号、退出码）误判为认证失败的问题，附带回归测试。

### 6. [Open] A2A 服务器：清除新消息轮次的过期取消错误
- **#28940** · OPEN · by @amelidev
- **关键变更**：修复 A2A server 中的状态污染 bug，避免后续用户提示立即以 `Execution aborted` 崩溃（解决 GCA 执行中断问题）。

### 7. [Merged] PR 生成：Golden Issues 数据集 Schema 升级
- **#28947** · 已关闭 · by @joneba-google
- **关键变更**：新增 89 个标准化 Golden Dataset（含 45 个 OK 问题），用于跨 Gemini CLI Triage Agent 流水线的评测基准测试。

### 8. [Merged] PR 生成：Antigravity Agent 运行器与异步流解析
- **#28932** · 已关闭 · by @joneba-google
- **关键变更**：实现异步 agent 执行（`agent.chat()` + `response.resolve()`）、turn timeout 强制、GCS 轨迹日志导出。

### 9. [Merged] PR 生成：GCS 轨迹日志与产物持久化
- **#28922** · 已关闭 · by @joneba-google
- **关键变更**：在代理执行（编码、评估、修复循环）期间，将 stream chunks 与生成的 diff 产物持久化至 GCS，支持事后调试。

### 10. [Open] PR 生成：LLM-as-a-Judge 差异评估模块
- **#28949** · OPEN · by @joneba-google
- **关键变更**：引入差异评估模块 `eval_diff_judge.py` 与评分 prompt 模板 `judge_prompt.md`，用于自动对生成的 PR diff 与真实 PR 进行基准比对。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中提炼，社区最关注的方向如下：

| 方向 | 代表 Issue | 趋势热度 |
|------|-----------|---------|
| **🤖 Subagent 可靠性** | #22323, #21409, #21968, #21763, #21983 | 🔥🔥🔥🔥🔥 |
| **🧠 Auto Memory 系统** | #26516, #26522, #26523, #26525 | 🔥🔥🔥🔥 |
| **🌳 Browser Agent 增强** | #22232, #22267, #21983 | 🔥🔥🔥🔥 |
| **⚡ Token/性能优化** | #22745, #22746, #19561, #21924 | 🔥🔥🔥 |
| **🔒 沙箱与安全** | #19873, #26525, #28935 | 🔥🔥🔥 |
| **📊 评测与轨迹可视化** | #22598, #21763, #28947 | 🔥🔥 |
| **🛠️ 工具/任务管理重构** | #18836, #21000, #23571 | 🔥🔥 |

**核心趋势** — 社区正在从「能用」迈向「可靠 + 可观测 + 可评测」三阶段，Subagent 与 Memory 是当前最受关注的两个核心能力。

---

## 💬 开发者关注点

基于 Issue 评论与描述总结，开发者的主要痛点与高频需求：

### 🔴 痛点（高频反馈）

1. **Subagent 状态不可信**：Subagent 触发限制后仍显示"成功"，导致用户无法判断任务是否真的完成 —— `#22323`
2. **Generalist agent 挂死**：最基础的文件夹创建操作也会卡住 1 小时 —— `#21409`
3. **Shell 执行假死**：命令完成但 UI 卡在"等待输入" —— `#25166`
4. **自定义 skills 不被自动调用**：Gemini 不会主动利用用户配置的 gradle/git skills —— `#21968`
5. **Auto Memory 低信号会话反复重试**：污染记忆系统 —— `#26522`
6. **沙箱对 Docker/容器套接字未做隔离**：存在沙箱逃逸风险 —— `#28935`
7. **/bug 报告缺少子代理上下文**：调试困难 —— `#21763`

### 🟢 高频需求

- **更强的工具/上下文管理**：超过 400 个工具时返回 400 错误（`#24246`），需要更智能的工具作用域控制
- **AST 感知的代码读取**：降低 token 消耗、提升精度（`#22745, #22746`）
- **OS 级零依赖沙箱**：充分发挥 Gemini 3 的 bash 能力同时保障安全（`#19873`）
- **持久化任务追踪**：用文件级 CRUD 替代 in-context WriteToDo（`#18836`）
- **Subagent 轨迹可分享**：通过 `/chat share` 暴露子代理执行轨迹（`#22598`）
- **Agent 自我意识**：准确掌握自身 CLI 标志、快捷键（`#21432`）

---

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 24h 新版本 | 1（nightly） |
| 24h 活跃 Issues | 50 |
| 24h 活跃 PRs | 37 |
| P1 优先级 Issue | 6 |
| 已合并 PRs | 13 |
| Open PRs | 24 |

---

*报告基于 github.com/google-gemini/gemini-cli 公开数据生成 · 仅供技术参考*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-22**

---

## 📌 今日速览

今日 Copilot CLI 发布了预发布版本 **v1.0.81-7**，重点引入"会话恢复"能力（崩溃或重启后自动还原未关闭的会话），同时新增 `copilot app` 命令启动桌面端 App。社区方面，BYOK 多模型切换、ACP 协议相关 Bug、`/resume` 选择器、MCP 集成稳定性成为开发者讨论的焦点，多个高优 Issue 反映出当前预发布版本（1.0.81 系列）在子 Agent、内存写入、并行任务场景下仍有较多问题待修复。

---

## 🚀 版本发布

### v1.0.81-7（预发布）

**新增能力：**
- **会话自动恢复**：启动时检测上一次未正常关闭的会话，提示用户恢复——CLI 崩溃或机器重启后不再需要手动逐一重开终端窗口。
- **模型信息透出**：`models.list` 接口新增每个模型的服务端发布的 `infoMessages` 与 `warningMessages`，便于在客户端展示提示信息。
- **`copilot app` 命令**：直接打开 GitHub Copilot 桌面端应用。

> 📎 Release 链接：github.com/github/copilot-cli/releases/tag/v1.0.81-7

---

## 🔥 社区热点 Issues

按社区关注度（👍 点赞数）与讨论热度综合排序，挑选出 10 个最具代表性的 Issue：

### 1. [#3282](https://github.com/github/copilot-cli/issues/3282) — 支持多 BYOK 模型切换 ⭐ 26 👍
- **标签**：`area:models`、`area:configuration`
- **核心诉求**：当前 CLI 仅支持通过环境变量配置单一 BYOK 模型，会话内无法在 TUI 中切换不同 BYOK 模型。
- **社区反应**：8 条评论、26 点赞，是 BYOK 用户呼声最高的需求之一。
- **为何重要**：本地/自托管模型用户增长迅速，灵活切换是 BYOK 体验的基础。

### 2. [#3709](https://github.com/github/copilot-cli/issues/3709) — `/model` 切换多模型（含 BYOK/本地） ⭐ 27 👍
- **标签**：`area:models`
- **核心诉求**：`/model` 选择器目前只列出 GitHub 托管模型，不显示本地 BYOK provider 提供的模型。
- **社区反应**：4 条评论、27 点赞，点赞数今日最高。
- **为何重要**：与 #3282 形成"组合拳"，反映 BYOK 用户急需无缝切换体验。

### 3. [#1313](https://github.com/github/copilot-cli/issues/1313) — 会话分支（Session Branching）⭐ 13 👍
- **标签**：`area:sessions`
- **核心诉求**：允许在当前会话某点"分叉"出一个新会话，继承完整历史的同时保留原会话。
- **社区反应**：7 条评论、13 点赞，是历史悠久的功能请求。
- **为何重要**：对探索多方案、对比尝试的开发者是关键工作流。

### 4. [#4345](https://github.com/github/copilot-cli/issues/4345) — `claude-haiku-4.5` 不支持 reasoning effort `medium` ⭐ 4 👍
- **标签**：`area:agents`、`area:models`
- **核心诉求**：服务端开启 `copilot_cli_opus_medium_effort_default` 与 `copilot_cli_gpt_5_4_mini_for_explore` 特性开关后，子 Agent 执行报 `Reasoning effort 'medium' is not supported`。
- **社区反应**：8 条评论，反映问题在企业租户中复现率高。
- **为何重要**：特性开关组合下的回归，影响企业用户可靠性。

### 5. [#4211](https://github.com/github/copilot-cli/issues/4211) — MCP 结构化响应中的 BigInt 序列化错误 ⭐ 3 👍
- **标签**：`area:mcp`
- **核心诉求**：MCP Server 返回大整数时，CLI 抛 `TypeError: Do not know how to serialize a BigInt`，导致所有任务中止。
- **社区反应**：5 条评论，是 MCP 生态中较为典型的兼容性问题。
- **为何重要**：随着 MCP 工具普及，数据类型兼容性问题将愈发突出。

### 6. [#4422](https://github.com/github/copilot-cli/issues/4422) — 企业账户下所有 Claude 模型不可用（已关闭）
- **标签**：`area:enterprise`、`area:models`
- **核心诉求**：个人 Enterprise 账户下 Claude 模型（sonnet 5、4.8 等）突然全部失效，提示"This model is not accessible"，回滚 CLI 版本无效。
- **社区反应**：4 条评论、3 点赞。
- **为何重要**：企业用户突然失去主力模型，影响极大；虽已关闭，但问题归因（服务端 vs 客户端）尚未完全澄清。

### 7. [#4535](https://github.com/github/copilot-cli/issues/4535) — `store_memory` 在 1.0.81 预发布失败
- **标签**：`area:context-memory`
- **核心诉求**：1.0.81 预发布版本中 `store_memory` 因缺少 `Instance id` 而一致失败，原生内存写入器被无 ID 调用。
- **社区反应**：4 条评论、0 点赞（尚新）。
- **为何重要**：直指预发布版本回归，提示 1.0.81 prerelease 暂不建议生产使用。

### 8. [#4521](https://github.com/github/copilot-cli/issues/4521) — Sandbox 无法真正禁用 ⭐ 4 👍
- **标签**：`area:permissions`、`area:configuration`
- **核心诉求**：配置显示 Sandbox 已禁用，但状态仍为启用，CLI 实际仍走沙箱路径。
- **社区反应**：3 条评论、4 点赞。
- **为何重要**：权限与配置不一致是潜在的安全误用风险。

### 9. [#4533](https://github.com/github/copilot-cli/issues/4533) — 并行子 Agent 启动后 TUI 事件丢失
- **标签**：`area:agents`、`area:terminal-rendering`
- **核心诉求**：在预发布 1.0.81-4/5 中，一旦本轮启动并行子 Agent 块，TUI 立即停止消费事件（输入和滚动均失效），Rust runtime 仍在运行。
- **社区反应**：1 条评论，但描述非常详细。
- **为何重要**：典型 TUI/运行时耦合的渲染阻塞 Bug，1.0.81 预发布质量信号。

### 10. [#4542](https://github.com/github/copilot-cli/issues/4542) — `.mcp.json` 被检测但未实际连接 ⭐ 1 👍
- **标签**：`area:configuration`、`area:mcp`
- **核心诉求**：`copilot mcp list/get` 能识别工作区 `.mcp.json`，但在 Agent 会话内却未连接。
- **社区反应**：1 条评论、1 点赞。
- **为何重要**：MCP 配置"显示与实际不一致"会严重影响用户信任。

---

## 🔧 重要 PR 进展

过去 24 小时 **无 PR 更新**。当前 Issue 反映的问题（特别是 1.0.81 prerelease 的回归）预计将在后续修复 PR 中处理，建议持续关注仓库动态。

> 💡 建议：开发者如计划升级到 1.0.81 prerelease，请先关注 [#4535](https://github.com/github/copilot-cli/issues/4535)、[#4533](https://github.com/github/copilot-cli/issues/4533) 的解决进展。

---

## 📈 功能需求趋势

从今日活跃 Issue 中提炼出的主要功能诉求方向：

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **多模型管理（BYOK + 本地）** | [#3282](https://github.com/github/copilot-cli/issues/3282)、[#3709](https://github.com/github/copilot-cli/issues/3709)、[#4560](https://github.com/github/copilot-cli/issues/4560) | ⭐⭐⭐ |
| **会话高级特性** | [#1313](https://github.com/github/copilot-cli/issues/1313) 分支、[#4554](https://github.com/github/copilot-cli/issues/4554) `/resume` 跨目录 | ⭐⭐ |
| **MCP 生态健壮性** | [#4211](https://github.com/github/copilot-cli/issues/4211) BigInt、[#4542](https://github.com/github/copilot-cli/issues/4542) 连接、[#4562](https://github.com/github/copilot-cli/issues/4562) 热重载、[#4552](https://github.com/github/copilot-cli/issues/4552) 不可用误报 | ⭐⭐⭐ |
| **ACP 协议合规** | [#4561](https://github.com/github/copilot-cli/issues/4561) stopReason、[#4555](https://github.com/github/copilot-cli/issues/4555) session/prompt 行为 | ⭐⭐ |
| **规划/审批 UX 改进** | [#4563](https://github.com/github/copilot-cli/issues/4563) Plan 注释、[#4564](https://github.com/github/copilot-cli/issues/4564) pending 残留 | ⭐ |
| **Agent 与并行任务体验** | [#4533](https://github.com/github/copilot-cli/issues/4533) TUI 阻塞、[#4553](https://github.com/github/copilot-cli/issues/4553) apply_patch 死循环 | ⭐⭐ |
| **桌面端 / 应用集成** | [#4492](https://github.com/github/copilot-cli/issues/4492) WebView2 STATUS_BREAKPOINT | ⭐ |

**趋势解读：**
1. **BYOK 灵活性**继续是社区核心诉求（合计点赞 53+），开发者希望在不重启会话的前提下灵活切换模型。
2. **MCP** 已进入"使用规模化"阶段，配置、序列化、热重载等"边角问题"集中暴露。
3. **ACP 协议**逐渐被外部 IDE/Agent 集成方使用，规范合规（`stopReason`、会话取消）需求上升。
4. **会话 UX**（分支、跨目录恢复、内联注释 Plan）成为"专家用户"的进阶需求。

---

## 💬 开发者关注点

综合今日 Issue 与评论，开发者反馈的高频痛点包括：

### 🔴 痛点 1：1.0.81 预发布版本稳定性堪忧
- `store_memory` 因缺失 Instance ID 直接报错（[#4535](https://github.com/github/copilot-cli/issues/4535)）。
- 并行子 Agent 启动后 TUI 整体冻结（[#4533](https://github.com/github/copilot-cli/issues/4533)）。
- `apply_patch` 进入 JSON 包裹错误的死循环（[#4553](https://github.com/github/copilot-cli/issues/4553)）。
- ➡️ **建议**：除非有明确测试需求，生产环境暂缓升级到 1.0.81 prerelease。

### 🔴 痛点 2：BYOK 模型"被锁定"
- 通过 `COPILOT_MODEL` 锁死后，会话内无法在 TUI 切换；`/model` 也不显示本地 provider 模型。
- ➡️ **强烈诉求**：在会话级别支持多 BYOK 模型并存与切换。

### 🔴 痛点 3：MCP 配置"看起来 OK，实际不行"
- `mcp list/get` 显示 Enabled，但会话内不可用（[#4542](https://github.com/github/copilot-cli/issues/4542)）。
- MCP 配置变更后热重载仍用旧快照（[#4562](https://github.com/github/copilot-cli/issues/4562)）。
- 不可用被错误报为 "waiting on ide"（[#4552](https://github.com/github/copilot-cli/issues/4552)）。

### 🟡 关注点 4：Windows 体验细节
- 每条 shell 命令都弹出可见 PowerShell 窗口（[#4549](https://github.com/github/copilot-cli/issues/4549)）。
- `wta.exe` 路径因 "Program Files" 空格处理失败（[#4540](https://github.com/github/copilot-cli/issues/4540)）。
- ➡️ Windows 仍是 CLI 体验短板，建议关注后续修复。

### 🟡 关注点 5：桌面端与 TUI 的协同
- 桌面 App 主窗口 WebView2 偶发 `STATUS_BREAKPOINT` 自终止，窗口变白（[#4492](https://github.com/github/copilot-cli/issues/4492)）。
- ➡️ 桌面端稳定性直接影响 CLI ↔ GUI 的整体体验闭环。

---

## 📅 结语

今日的更新主线围绕 **"会话韧性 + 模型信息可见性 + 桌面端入口"** 展开，社区讨论则集中在 **"BYOK 多模型、MCP 集成稳定性、ACP 协议合规、1.0.81 预发布回归"** 四大方向。整体来看，Copilot CLI 在快速迭代中，模型与生态（MCP/ACP）兼容性问题是当前主要矛盾，建议团队优先修复 MCP 连接一致性、BYOK 切换、并行 Agent TUI 阻塞三类高优问题。

> 📌 **日报生成时间**：2026-08-22 · 数据来源：GitHub 公开 API

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-08-22
**数据周期：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内 Kimi Code CLI 仓库活跃度较低，未有新版本发布。社区焦点集中在 **后台子代理（Background subagent）的状态管理 Bug** 上——该问题可能导致任务已被标记为终止后仍继续消耗 LLM 配额。此外，一项关于插件安全与持久化数据的文档改进 PR 也值得关注。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**，本节省略。

---

## 3. 社区热点 Issues

> 📊 提示：过去 24 小时仅 **1 条** Issue 有更新。以下为该条目的详细分析（无法凑足 10 条，故如实呈现全部）。

### 🔴 Issue #2615 — Background subagent keeps making LLM calls after TaskStop/timeout marks it terminal
- **链接：** https://github.com/MoonshotAI/kimi-cli/issues/2615
- **状态：** OPEN | **作者：** pc9527zxx | **更新：** 2026-08-21
- **重要性：** ⚠️ **高** — 涉及资源/成本控制的核心问题
- **社区反应：** 👍 0 | 💬 0（刚提出，处于待关注阶段）

**为什么重要：**
- **隐性成本消耗**：子代理在被标记为 `timed_out` 或 `killed` 后仍持续调用 LLM，意味着用户可能在为"已终止"的任务付费，且无任何提示。
- **控制失效**：`TaskStop` 已无法中断运行中的子代理，用户缺乏有效的止损手段。
- **可观测性缺失**：任务从 active-task 列表消失，导致监控/审计无法发现"僵尸调用"。
- **企业场景风险**：在长任务、批量 Agent 编排场景下，可能放大 token 消耗并影响计费准确性。

---

## 4. 重要 PR 进展

> 📊 提示：过去 24 小时仅 **1 条** PR 有更新。以下为该条目的详细分析。

### 🟢 PR #2614 — docs(plugins): document security and persistent data
- **链接：** https://github.com/MoonshotAI/kimi-cli/pull/2614
- **状态：** OPEN | **作者：** QIANLING-0831 | **更新：** 2026-08-21
- **类型：** 纯文档改进（Documentation-only）

**内容要点：**
- 明确本地执行插件工具的 **信任边界（trust boundary）**
- 解释 `inject` 操作的 **凭证处理注意事项**
- 说明重装插件会 **替换安装目录**（提醒用户备份）
- 建议使用 **独立的数据目录** 存放插件持久化数据

**价值评估：** 面向插件生态安全规范的预防性文档，有助于降低用户因配置不当导致的安全/数据丢失风险。

---

## 5. 功能需求趋势

由于过去 24 小时内仅有 1 条 Issue 更新，**样本不足以做大规模趋势分析**。但从该单条 Issue 与近期 PR 可观察到以下方向：

| 趋势方向 | 信号 | 来源 |
|---------|------|------|
| **Agent 生命周期管理** | 后台子代理终止控制、可观测性 | Issue #2615 |
| **插件安全规范** | 信任边界、凭证处理、数据隔离 | PR #2614 |
| **成本/配额治理** | 避免无效 LLM 调用消耗用户配额 | Issue #2615 |

> 💡 若需更长期趋势分析，建议扩大数据时间窗口至 7–30 天。

---

## 6. 开发者关注点

综合今日可见的反馈，开发者社区当前的关注点集中在以下 **痛点**：

1. **🛑 Agent 失控兜底机制缺失**
   - 终止指令不可靠；缺乏任务生命周期的"硬超时"与"硬中断"双重保障。

2. **💸 隐性资源消耗**
   - 用户需要更透明的 token/quota 消耗看板，特别是后台任务的实时状态。

3. **🔐 插件生态安全心智**
   - 社区（贡献者侧）已主动补齐插件安全文档，反映出对 **第三方工具信任模型** 的重视。

4. **📦 插件数据可移植性**
   - 升级/重装不应破坏用户数据，需要约定清晰的目录结构。

---

## 📌 备注

- 本期数据基于过去 24 小时窗口，社区动态较为清淡。
- 建议结合历史 Issue/PR 数据进行周报/月报级别的趋势分析，以获得更具统计意义的洞察。
- Issue #2615 涉及成本控制，建议项目维护者优先 review。

---

*报告生成时间：2026-08-22 | 数据源：github.com/MoonshotAI/kimi-cli*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-22**

---

##  今日速览

OpenCode 在 24 小时内连续发布了 **v1.18.20** 和 **v1.18.21** 两个版本，主要修复网络错误重试、子代理任务恢复、Vertex AI 路由等关键问题；然而 v1.18.21 引入的"未知 finish_reason 继续响应"逻辑随即引发新的回归问题（[#43939](https://github.com/anomalyco/opencode/issues/43939)），社区已紧急提交 PR 修复。社区当前最关注的三大方向：**子代理与多模型成本追踪架构**、**Provider 兼容性问题（DeepSeek/OpenAI-compatible）**、**桌面端稳定性（Windows/Electron）**。

---

##  版本发布

### v1.18.21（2026-08-21）
- **Core**: 模型返回未知 `finish_reason` 时不再过早终止，而是继续响应；Vertex AI `eu`/`us` 多区域 Gemini 请求路由至 REP 端点
- **Desktop**: 修复文件搜索结果在下一搜索加载时被隐藏的问题；[完整说明](https://github.com/anomalyco/opencode/releases/tag/v1.18.21)

### v1.18.20（2026-08-21）
- **Core**: 子代理失败的工具调用现在附带可恢复的 `task_id`；对以 `finish_reason: network_error` 结尾的 Provider 响应进行重试，覆盖更多 `network-error` / `network_error` 变体
- [完整说明](https://github.com/anomalyco/opencode/releases/tag/v1.18.20)

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论 | 链接 |
|---|-------|------|------|------|
| 1 | **#38749** agent 异常中断 — 用户报告 agent 在响应中无故停止，是 v1.18.x 版本的常见痛点 | OPEN | 9 | [链接](https://github.com/anomalyco/opencode/issues/38749) |
| 2 | **#24153** ⭐11 添加已归档会话的"取消归档/恢复"功能 — 11 个 👍，反映社区对会话生命周期管理的强烈需求 | OPEN | 9 | [链接](https://github.com/anomalyco/opencode/issues/24153) |
| 3 | **#41847** 权限对话框未渲染导致应用冻结 — 27 天内生成 3270 个 prompt 但用户从未看到，后端在等待永远不会到达的回复 | OPEN | 4 | [链接](https://github.com/anomalyco/opencode/issues/41847) |
| 4 | **#43939** v1.18.21 对完整响应反复继续 — 与 v1.18.21 修复直接冲突的回归问题，已被 PR [#44031](https://github.com/anomalyco/opencode/pull/44031) 紧急修复 | OPEN | 1 | [链接](https://github.com/anomalyco/opencode/issues/43939) |
| 5 | **#43829 / #43805** DeepSeek-v4-flash-free 不可用 / TUI 下拉缺失 — 两个独立 issue 反映同一个模型可用性问题 | OPEN | 5+4 | [#43829](https://github.com/anomalyco/opencode/issues/43829) · [#43805](https://github.com/anomalyco/opencode/issues/43805) |
| 6 | **#43983** 通过 API Key 暴露 OpenCode Go 使用历史 — 开发者希望以编程方式追踪用量 | OPEN | 5 | [链接](https://github.com/anomalyco/opencode/issues/43983) |
| 7 | **#34473** OpenCode 随机停止响应 — 使用 big pickle 模型时一致复现，无错误抛出 | OPEN | 5 | [链接](https://github.com/anomalyco/opencode/issues/34473) |
| 8 | **#43850** ChatGPT Plus OAuth 失败（403）— Desktop v1.18.20 在 Windows 上 OAuth 授权失败 | OPEN | 3 | [链接](https://github.com/anomalyco/opencode/issues/43850) |
| 9 | **#42657** TUI 在多子代理会话下严重卡顿（渲染线程 97% CPU）— 在 Warp/Windows Terminal/WezTerm 均复现 | OPEN | 3 | [链接](https://github.com/anomalyco/opencode/issues/42657) |
| 10 | **#29094** LLM 响应中阅读历史消息时视口回弹 — 历史 bug 重开，影响多用户 | OPEN | 2 | [链接](https://github.com/anomalyco/opencode/issues/29094) |

> **值得关注的已关闭 Issue**: [#12377](https://github.com/anomalyco/opencode/issues/12377) 是关于子代理成本聚合与多模型正确性的 RFC（10 评论），是当前最系统的架构讨论；[#35376](https://github.com/anomalyco/opencode/issues/35376) 关于 MCP 工具懒加载（9 个 MCP 服务导致 token 爆炸）已合入。

---

##  重要 PR 进展

| # | PR | 说明 | 链接 |
|---|-----|------|------|
| 1 | **#43165** `feat(opencode): Message logger` | 新增 LLM 请求/响应日志记录功能，通过 `experimental.log_messages`（`info`/`debug`/`trace`）配置，可显著提升调试效率 | [链接](https://github.com/anomalyco/opencode/pull/43165) |
| 2 | **#44031** `fix(opencode): stop looping after unknown finish with text` | 紧急修复 v1.18.21 的回归问题：当 provider 返回 `finish=unknown` 但实际有完整内容时停止循环 | [链接](https://github.com/anomalyco/opencode/pull/44031) |
| 3 | **#44025** `fix(app): tolerate incomplete agent configuration` | 修复 Desktop 在连接到旧版 opencode 服务器时整应用崩溃的问题 | [链接](https://github.com/anomalyco/opencode/pull/44025) |
| 4 | **#44027** `fix(app): load workspace sessions by directory` | 修复 Settings → Workspaces 页面冻结 — 改为按目录分页加载会话，而非全量获取 | [链接](https://github.com/anomalyco/opencode/pull/44027) |
| 5 | **#44009** `fix(tui): auto-approve background tab permissions` | 将自动审批响应器从"选中会话路由"迁移到"tab 上下文"，自动模式现在处理选中 tab 而非整个会话 | [链接](https://github.com/anomalyco/opencode/pull/44009) |
| 6 | **#44002** `fix(core): recover partial provider failures` | 自动恢复 provider 内部可重试的失败和速率限制错误，可跨本地工具调用恢复 | [链接](https://github.com/anomalyco/opencode/pull/44002) |
| 7 | **#44016** `fix(core): harden portable shell authorization` | 加固可移植 shell 权限扫描器，防止不确定的 shell 输入在更窄的已保存审批下执行 | [链接](https://github.com/anomalyco/opencode/pull/44016) |
| 8 | **#43993** `fix(mcp): disable bun fetch idle timeout for remote transports` | 修复 Bun 运行时下 MCP 长调用（>300s 静默）被超时切断的问题（关闭 [#39584](https://github.com/anomalyco/opencode/issues/39584)） | [链接](https://github.com/anomalyco/opencode/pull/43993) |
| 9 | **#44020** `fix(core): migrate provider-local state` | 迁移文本/推理/工具部件时提取当前 assistant provider 的元数据对象，修复跨 provider 的状态丢失 | [链接](https://github.com/anomalyco/opencode/pull/44020) |
| 10 | **#44018** `fix(core): retain plugins across dist rebuilds` | 修复 `dist/` 内配置的入口点在 dist 重建后丢失插件的问题 | [链接](https://github.com/anomalyco/opencode/pull/44018) |

> 此外，**AidenGeunGeun** 在过去 24 小时连续提交了 5 个 macOS 会话路径规范化、迁移水印、插件保留等核心修复（[#44015](https://github.com/anomalyco/opencode/pull/44015) · [#44013](https://github.com/anomalyco/opencode/pull/44013) · [#44009](https://github.com/anomalyco/opencode/pull/44009)），集中处理 Core 稳定性问题。

---

##  功能需求趋势

通过对过去 24 小时更新的 50 条 Issue 进行聚类，社区的关注重点呈现出清晰的方向：

### 1. 🤖 子代理（Subagent）与多代理架构（热度最高）
- 成本追踪准确性 [#12377](https://github.com/anomalyco/opencode/issues/12377)、子代理任务可恢复 [#38749](https://github.com/anomalyco/opencode/issues/38749)、多子代理 TUI 性能 [#42657](https://github.com/anomalyco/opencode/issues/42657)
- 反映社区正向 **agentic workflow** 深度演进，多代理协同成为核心使用模式

### 2. 🔌 Provider 兼容性（碎片化最严重）
- DeepSeek-v4-flash-free 可用性 [#43829](https://github.com/anomalyco/opencode/issues/43829) [#43805](https://github.com/anomalyco/opencode/issues/43805)
- OpenAI-compatible `reasoning` 字段被丢弃 [#35283](https://github.com/anomalyco/opencode/issues/35283)
- Bedrock Mantle via LiteLLM 因 `textVerbosity` 注入而崩溃 [#43911](https://github.com/anomalyco/opencode/issues/43911)
- Vertex AI 多区域路由问题（v1.18.21 已修）
- 反映 OpenAI-compatible 生态的不一致给 OpenCode 带来大量兼容性负担

### 3. 🖥 桌面端稳定性（用户抱怨集中区）
- Windows 大文件 diff 时 Electron 冻结 [#30906](https://github.com/anomalyco/opencode/issues/30906)
- ChatGPT Plus OAuth 403 [#43850](https://github.com/anomalyco/opencode/issues/43850)
- TUI 复制失效 [#43907](https://github.com/anomalyco/opencode/issues/43907)
- 多语言用户咨询（韩语、西班牙语、阿拉伯语）增多 [#44032](https://github.com/anomalyco/opencode/issues/44032) [#43950](https://github.com/anomalyco/opencode/issues/43950)

### 4. 🗂 会话与文件管理（功能缺口）
- 归档会话无法恢复（最热 feature request，11 👍）[#24153](https://github.com/anomalyco/opencode/issues/24153)
- V2 FFF 索引不遵守 `.gitignore`（已修）[#43987](https://github.com/anomalyco/opencode/issues/43987)
- Web UI 版本号滞后于二进制（已修）[#36232](https://github.com/anomalyco/opencode/issues/36232)

### 5.  权限与安全（企业关注）
- 权限对话框未渲染 [#41847](https://github.com/anomalyco/opencode/issues/41847)
- 可移植 shell 授权加固 [#44016](https://github.com/anomalyco/opencode/pull/44016)
- 用户对"自动批准"语义在不同 tab 间不一致的困惑 [#44009](https://github.com/anomalyco/opencode/pull/44009)

---

## 💬 开发者关注点

综合 Issue 评论与 PR 描述，开发者社区当前的核心痛点可以归纳为四点：

1. **可靠性 vs. 重试逻辑的边界模糊**
   - v1.18.20 增加网络错误重试，v1.18.21 让"未知 finish_reason"继续响应，但 [#43939](https://github.com/anomalyco/opencode/issues/43939) 立刻揭示：盲目重试/继续会消耗配额、扰乱用户心智。开发者期望 OpenCode 对**"可恢复 vs. 不应继续"**有更精细的判定。

2. **Provider 抽象层的脆弱性**
   - 多个 Issue 指向同一个根因：OpenAI 协议字段（`reasoning`/`verbosity`/`finish_reason`）在不同 provider 间语义不一致，OpenCode 缺乏统一的 provider 适配层（[#35283](https://github.com/anomalyco/opencode/issues/35283) · [#43911](https://github.com/anomalyco/opencode/issues/43911) · [#43882](https://github.com/anomalyco/opencode/issues/43882)）。

3. **TUI/桌面端性能与可用性**
   - 多子代理场景下渲染线程高占用 [#42657](https://github.com/anomalyco/opencode/issues/42657)、Windows diff 冻结 [#30906](https://github.com/anomalyco/opencode/issues/30906)、OAuth 失败 [#43850](https://github.com/anomalyco/opencode/issues/43850)，桌面端正成为用户体验短板。

4. **调试可观测性需求强烈**
   - [#43165](https://github.com/anomalyco/opencode/pull/43165) 的 Message Logger 提案在缺乏评论下被合入意向强烈，反映开发者迫切需要**请求/响应级别的可观测性**，尤其是在多代理场景下追踪问题链路。

---

> 📎 **数据范围**: 本日报基于 2026-08-21 ~ 2026-08-22 期间 anomalyco/opencode 仓库的 Release、Issue、PR 数据生成。Issue 和 PR 仅展示评论数前 30 / 前 20 条。
> 
> 完整列表请访问 [anomalyco/opencode](https://github.com/anomalyco/opencode)。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-22

> 数据来源：`github.com/badlogic/pi-mono`（即 `earendil-works/pi` 仓库）
> 统计窗口：过去 24 小时更新的 Issues / PRs

---

## 📌 今日速览

**上下文压缩（compaction）功能仍是社区最核心的关注焦点**——过去 24 小时里至少 5 个相关 Issue/PR 同时活跃（#6879、#7553、#8133、#8452、#8453），围绕"何时触发""按模型配置""提示词质量""全量手动模式"展开。与此同时，TUI 终端输入兼容性问题（Kitty 协议、Windows Terminal、herdr/SSH）成为新一波高频 bug 报告来源。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未发布任何新 Release。

---

##  社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 重点摘要 |
|---|-------|------|------|---------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction 超过 100% 上下文仍未触发，直到 API 拒绝 | OPEN | **19 / 👍17** | 用户在 gpt-5.6-sol 上跑了 2 小时，footer 早已越过压缩阈值却未压缩，最终 373k tokens 才被 API 拒绝。**全仓库过去 24 小时热度最高的 issue**，开发者强烈要求在每个 agent turn 后检查并提前压缩。 |
| [#2733](https://github.com/earendil-works/pi/issues/2733) | Windows Terminal 下 Backspace/Delete 异常 | **CLOSED** | 11 | 0.62→0.64 升级回归，已关闭，Windows 用户长痛解决。 |
| [#8157](https://github.com/earendil-works/pi/issues/8157) | 迁移 grok-mermaid → lovely-mermaid | OPEN | 9 | grok-mermaid 是 1:1 移植遗留物，lovely-mermaid 解析器更稳健。 |
| [#7130](https://github.com/earendil-works/pi/issues/7130) | Kitty 协议下 Backspace 一次删除 2 字符 | OPEN | 9 | Kitty keyboard protocol 的 release 事件未被过滤，影响所有 Kitty 用户。 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | 可配置压缩的 thinking level / model | **INPROGRESS** | 8 | 当前压缩无条件复用 session 的 thinking level，强制使用推理模型的用户预算不可分割。 |
| [#7995](https://github.com/earendil-works/pi/issues/7995) | `openai-responses` 缺少 Anthropic 风格 `cacheControlFormat` 支持 | **INPROGRESS** | 7 | OpenRouter 870 次基准测试：**走 responses 接口调用 Claude 贵 2.5 倍**，因为没有 prompt caching 支持。 |
| [#8133](https://github.com/earendil-works/pi/issues/8133) | 按模型差异化压缩设置 | OPEN | 3 / 👍3 | `compaction.profiles[modelId]` 配置映射，与 #7553 互补，呼声高。 |
| [#8134](https://github.com/earendil-works/pi/issues/8134) | 通过正向代理访问明文 HTTP provider 时，Agent 在首次工具调用后挂起 | OPEN | 4 | 0.84.0 回归，影响自托管 OpenAI-compatible provider + 代理的企业用户。 |
| [#7779](https://github.com/earendil-works/pi/issues/7779) | 允许受信 Unix 用户共享 `PI_CODING_AGENT_DIR` | **CLOSED** | 6 | `auth.json` / `models-store.json` 硬编码 0600 权限，多用户协作场景长期受限。 |
| [#4742](https://github.com/earendil-works/pi/issues/4742) | 新增 SiliconFlow provider | **CLOSED** | 4 | 国内 + 国际双 endpoint，覆盖 Qwen / GLM 等开源模型。 |

**值得补充关注的未列入清单的 issue：**
- [#2644](https://github.com/earendil-works/pi/issues/2644) 长会话 JS 堆 OOM 崩溃 → **已关闭**（持续 5 个月的关键稳定性问题）
- [#6193](https://github.com/earendil-works/pi/issues/6193) `/exit` 作为 `/quit` 别名 → **已关闭**（与其他主流 agent 的 UX 一致性）
- [#5354](https://github.com/earendil-works/pi/issues/5354) 扩展可自定义 grep tool 命令 → **已关闭**（沙箱类扩展关键能力）

---

##  重要 PR 进展（全部 8 条）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| [#8459](https://github.com/earendil-works/pi/pull/8459) | fix(tui): 修复全屏双击选择路径 | **CLOSED** | `Intl.Segmenter` 把 `/` 和 `-` 当作词边界，双击路径只能选中一个组件。修复为整段选中。**对应 #7746。** |
| [#8232](https://github.com/earendil-works/pi/pull/8232) | dev 分支（DON'T MERGE） | OPEN | 仅用于 CI 与评论实验 |
| [#8443](https://github.com/earendil-works/pi/pull/8443) | `/share` 命令改用 Radius artifacts（实验标志下） | **CLOSED** | 替代 GitHub gist；未登录时自动触发 OAuth 认证。 |
| [#8433](https://github.com/earendil-works/pi/pull/8433) | 新增 `--exclude-extensions` 参数 | **CLOSED** | 解决扩展加载"全有或全无"问题——以前要么全部自动发现，要么 `--no-extensions` 全部关停。 |
| [#8428](https://github.com/earendil-works/pi/pull/8428) | 重建 session 上下文时重新配对 tool result | **CLOSED** | 修复 #8166 描述的 session-corruption：resume / compaction / 分支导航时，孤儿 tool result 重新挂回对应 assistant message。**实质性稳定性修复。** |
| [#8424](https://github.com/earendil-works/pi/pull/8424) | 扩展工厂失败时丢弃 staging 状态 | OPEN | 当扩展 factory 抛错时，撤销已暂存的 flag / provider / event listener，避免半成品污染后续调用。 |
| [#8422](https://github.com/earendil-works/pi/pull/8422) | xAI Grok Build 模型省略 `reasoning.effort` | OPEN | xAI 的 `grok-build-0.1` 拒绝带 `reasoning.effort` 字段的请求（HTTP 400）。新增 Responses 兼容标志位。 |
| [#4537](https://github.com/earendil-works/pi/pull/4537) | `/exit` 作为 `/quit` 别名 | **CLOSED** | 对应 #6193 的合并实现，最小改动 + 文档同步。 |

---

## 📈 功能需求趋势

从全部 50 条近期 issue 中可提炼出以下五条主轴：

1. **🗜 上下文压缩（compaction）全面进化**（5+ 条 issue）
   触发时机（#6879）、thinking 配置（#7553）、按模型 profile（#8133）、提示词质量（#8452）、手动全量模式（#8453）——已成为当前最重要的迭代方向。

2. **🧩 扩展机制精细化**
   `--exclude-extensions`（#8433）、自定义 grep 工具（#5354）、失败 factory 清理（#8424）——社区希望"既要自动发现，也要可控粒度"。

3. **🌐 终端 / 键盘协议兼容性**
   Kitty（#7130, #8442）、Windows Terminal（#2733, #8183）、Termux + mosh（#8421）、herdr/SSH——TUI 输入层是回归 bug 高发区。

4. **🔌 Provider 生态扩张**
   新增 SiliconFlow（#4742, 已合）、Parasail（#8450）、Bedrock AgentCore MMDS（#8455），并优化 OpenRouter 的 reasoning 行为（#8454, #7995）。

5. **💸 成本与缓存优化**
   OpenRouter responses 缺少 `cache_control` 导致 Claude 调用贵 2.5×（#7995）——生态层面的成本敏感度显著上升。

---

## ‍💻 开发者关注点

- **痛点 1：会话稳定性**——OOM 崩溃、forward proxy 挂起、session-corruption 孤儿 tool result、压缩不触发撞 API 上限。开发者期望 Pi 能"长时间无人值守跑 agent 任务"。
- **痛点 2：跨平台终端一致性**——同一份键盘输入在 Kitty / Windows Terminal / herdr / Termux 下行为不一致，影响日常交互效率与扩展可移植性。
- **高频需求：可观测的压缩行为**——开发者希望精确控制"何时压缩、用什么模型、保留多少 token、保留什么状态"，而不是一个全局开关。
- **高频需求：跨用户/跨进程协作**——`PI_CODING_AGENT_DIR` 共享、企业代理环境下的 auth 与 model store 共享。
- **高频需求：与 codex / claude / opencode 的 UX 对齐**——`/exit` 别名、扩展钩子能力、`--exclude-extensions` 等小改动背后，是对"主流 agent 该有的功能 Pi 也要有"的持续追平。

---

*日报由 Pi 社区日报机器人自动生成，基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-22

---

## 📌 今日速览

今日 Qwen Code 仓库动态聚焦于 **review/autofix 体系收敛** 与 **WebShell 会话管理** 两大主题。维护者 @wenshao 主导的 review 闭环工作持续推进（PR #9623、#9526、#9624），同时 Aone Code 集成、live-service witness、autofix 安全隔离等多项遗留问题进入收尾阶段。社区侧反馈集中在 MCP-Windows 兼容性、Session 归档/恢复语义、VSCode 扩展 UI 渲染异常等高频痛点。

---

## 🚀 版本发布

**v0.21.14-nightly.20260821.9f2342d323** 已发布（夜间构建）

主要变更：
- `feat(review)`: 为未收敛的 review 循环提供"作者可见"的归因说明（PR #9461）
- `fix(ci)`: 停止回退路径（具体内容被截断，建议查看完整 release notes）

同时，DWS EAS 流水线已完成两轮基准验证（`dsw-eas-tb-smoke-20260821-r1`、`dsw-eas-full-20260821-r1`），SWE-bench Verified 500 + Terminal-Bench 89 全量基准均显示 **SUCCEEDED**，基线对齐 v0.21.15。

🔗 [Release v0.21.14-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-nightly.20260821.9f2342d323)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 |
|---|-------|--------|
| [#9556](https://github.com/QwenLM/qwen-code/issues/9556) | **review：决定流水线是否应继续以调用者身份授予代码执行权限** — 7 评论 | 🔴 由 @wenshao 提出，揭示 #9221 的 20 轮 review 反复暴露的根本性安全问题：review 流程在与用户相同身份的工作树中执行代码，这是上游更早环节就授予的能力，需在架构层面决策 |
| [#5180](https://github.com/QwenLM/qwen-code/issues/5180) | **主会话作为 PM 派发任务，subagent 执行到一半崩溃** — 7 评论 | 🟡 12h13m 长会话分析显示 subagent 调度稳定性问题，涉及多 agent 路线图 |
| [#8993](https://github.com/QwenLM/qwen-code/issues/8993) | **公开扩展安装需要 Git 2.37，但 Ubuntu 22.04 apt 仅提供 2.34.1** — 6 评论（已 CLOSED） | 🟠 LTS 兼容性问题，影响 Debian/Ubuntu 用户使用公共扩展 |
| [#5966](https://github.com/QwenLM/qwen-code/issues/5966) | **0.19.3 UI 不定期错误，中文输入法完全无效** — 6 评论 | 🟠 与 #9666、#9494 共同构成 UI 输入法/渲染故障簇 |
| [#9089](https://github.com/QwenLM/qwen-code/issues/9089) | **autofix：承载 PAT 的 job 与不受信任的分支代码共享 runner，需 runner 级隔离** — 6 评论（已 CLOSED） | 🔴 关键安全架构变更：标记 #8961 之外的"GitHub Actions 步骤内无法解决"的攻击面，需 runner 级隔离 |
| [#9693](https://github.com/QwenLM/qwen-code/issues/9693) | **Qwen Desktop 在 Windows 上启动时报 MCP -32000 Connection closed（即使 MCP 未启用）** — 4 评论 | 🟠 与 #9675 同源，反映 Windows + MCP STDIO 传输层兼容性问题 |
| [#9446](https://github.com/QwenLM/qwen-code/issues/9446) | **review：live-service witness 臂的剩余缺口与共存声明的嫁接** — 4 评论 | 🟡 @wenshao 自报，已纠正初版误判，定位到 `agent-briefs.ts` 中的 verifier 能力 |
| [#9699](https://github.com/QwenLM/qwen-code/issues/9699) | **ci：2026-08-21 起每次 PR 都触发 Dependency CVE 审计失败** — 3 评论 | 🔴 P1 安全任务：`npm audit` 报 8 个漏洞（1 high），影响所有 PR |
| [#8617](https://github.com/QwenLM/qwen-code/issues/8617) | **VSCode 插件的选择框遮挡内容** — 4 评论 | 🟢 P3，已通过 PR #9702 修复 |
| [#9688](https://github.com/QwenLM/qwen-code/issues/9688) | **归档 live session 可能重建活跃 transcript，留下 active+archived 冲突** — 2 评论 | 🟡 与 #9686、#9664、#9513 同属 daemon session 语义簇 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 亮点 |
|---|------|------|
| [#9623](https://github.com/QwenLM/qwen-code/pull/9623) | **feat(review)：让收敛观察具备机器可读的一半** | @wenshao 主导，补完 #9461 工作：给 review 循环诊断加结构化输出，让调用方能据此动作而非仅给人类看解释 |
| [#9526](https://github.com/QwenLM/qwen-code/pull/9526) | **feat(review)：添加持续 Critical 的收敛预警（land-with-residual-risk）** | 当 telemetry 证明 Critical 在前一轮和本轮都存在、且发布量窗口不再收敛时，明确发出预警，避免"看似干净合并实际带病" |
| [#9624](https://github.com/QwenLM/qwen-code/pull/9624) | **feat(review)：关闭 Aone 残余缺口——composeUrl、test-plan 路由、a1 版本下限** | 一并打通 Aone Code review 三个缺口：真实链接、测试计划路由、版本门槛 |
| [#9273](https://github.com/QwenLM/qwen-code/pull/9273) | **feat(review)：capture-tui — 渲染声明以像素而非文字为证** | 新增 `qwen review capture-tui` 子命令，在私有 tmux server 中跑命令并输出 `.ans` + `.png`（依赖 `freeze`），让渲染验证不再"嘴上说说" |
| [#9340](https://github.com/QwenLM/qwen-code/pull/9340) | **feat(review)：当开放问题是"路径"而非"补丁"时给出说明** | 当 PR 经历了多轮 review 且规模显著扩大时，明示"形状变了"而不是继续就当前 patch 纠结 |
| [#9602](https://github.com/QwenLM/qwen-code/pull/9602) | **fix(core)：在等待完成回调前清空工具显示列表** | 修复 `CoreToolScheduler.checkAndNotifyCompletion()` 中的回归问题，新增回归测试 |
| [#9657](https://github.com/QwenLM/qwen-code/pull/9657) | **feat(web-shell)：压缩 agent 活动摘要** | 紧凑模式下，相邻的思考、工具活动、并行 agent 被折叠为一条活动摘要，展开后嵌套显示并行进度 |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | **feat(auth)：新增 Kimi 与 Xiaomi MiMo 提供方** | `/auth` → 第三方提供方新增 Kimi（支持 Coding Plan + 国内外 API Key）和 Xiaomi MiMo（含中国/新加坡/国际付费）|
| [#8583](https://github.com/QwenLM/qwen-code/pull/8583) | **feat(web-shell)：新增实验性会话工作流驾驶舱** | 横跨 plan 捕获、修订绑定批准、transcript 投影、Agent 执行与 WebShell 的端到端工作流视图 |
| [#9702](https://github.com/QwenLM/qwen-code/pull/9702) | **fix(vscode-ide-companion)：将模型选择器下拉框锚定到输入表单** | 修复 #8617：选择器不再悬浮于消息列表之上，改用 `absolute bottom-full` 从输入框向上生长 |

---

## 📈 功能需求趋势

| 方向 | 代表性需求 | 热度 |
|------|------------|------|
| **第三方模型提供方扩展** | Kimi / Xiaomi MiMo（#8368）、OpenAI-兼容端点回归测试（#9639） | ⬆️ 持续上升 |
| **WebShell / VSCode 体验优化** | 活动摘要压缩（#9657）、目标消息路由（#9667）、模型选择器锚定（#9702）、UI 确认框（#9571 已闭） | ⬆️ 高 |
| **Daemon / Session 语义完备** | 会话归档冲突（#9688）、恢复时还原模型（#9686）、恢复未应答的 HITL（#9664）、PR2A 行为恢复（#9513） | ⬆️ 集中爆发 |
| **多 Agent / 跨会话通信** | 跨会话消息入口（#9576）、主-子 agent 崩溃（#5180）、subagent 禁用（#1212） | ⬆️ 路线图重点 |
| **Plan Mode 可配置化** | 只读命令白名单扩展（#9694）、展开详情模式启动设置（#9670） | ⬆️ 用户体验侧 |
| **渠道生态（DingTalk/Channels）** | DingTalk Workspace 渠道（#9394）、会话生命周期绑定（#8927） | ⬆️ 中等 |
| **review / autofix 体系成熟** | 收敛观察机器可读化（#9623）、持续 Critical 预警（#9526）、capture-tui（#9273）、Aone 缺口收尾（#9624） | ⬆️ 维护者核心议程 |

---

## 💬 开发者关注点

1. **Windows + MCP 兼容性差** — #9693、#9675 双 issue 指向同一根因：MCP STDIO 在 Windows 上即使未启用也报错，或会话间静默断连。这是 Desktop 用户最大的痛点之一。

2. **中文输入法与 IME 渲染** — #5966、#9666 反映 Windows 终端下中文输入法候选框对比度低、完全失效问题，影响中文开发者日常使用。PowerShell 深色背景下尤为严重。

3. **UI 闪烁 / 流式渲染一致性** — #9487、#9494、#9571（已闭）共同指向 web-shell 在长任务下的加载指示器不一致问题，To Do 旋转而对话/会话加载指示器中途消失。

4. **Session 归档与恢复的语义模糊** — #9688、#8094（已闭）、#2862 显示活跃会话的并发写入、归档竞态、检查点恢复等会话生命周期边界仍未完全闭环。

5. **CI 安全治理压力骤增** — #9556、#9089（已闭）、#9524、#9699 集中暴露 review/autofix 体系在 PAT、依赖 CVE、容器隔离等维度的安全债，#9699（每 PR 必失败的 CVE 审计）已上 P1 待人工处理。

6. **subagent 调度稳定性** — #5180（12h13m 长会话崩溃）、#1212（请求禁用内置 subagent）显示多 agent 路线在生产环境仍存在可靠性与可控性问题。

7. **Review 循环的"假收敛"风险** — #9674（携带 id 修复引发的 finding 被低估）、#9446（live-service witness 缺口）显示维护者正主动识别 review 自动化中的统计盲区。

---

*日报基于 2026-08-22 过去 24 小时 GitHub 数据生成。完整 50 条 Issues / 50 条 PRs 见 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-22** | **数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 📌 今日速览

今日社区热度集中在**"可监督运行栈（Supervised Operation Stack）"**这一主线议题上，M-Maciej 一次性提交了包含生命周期事件出口、`/relaunch` 重启指令、会话控制 socket 和目标续跑节奏修复的综合性 PR #5535。同时，项目正经历从 DeepSeek-TUI 向 **CodeWhale TUI Crate 分解（EPIC-005）** 的架构演进，仓库治理与开发者协作模式都在调整中。

---

## 🚀 版本发布

今日**无新版本发布**。依赖项更新由 Dependabot 集中推送（共 5 个 PR），待合并后将随下个版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 重要程度 | 要点 |
|---|-------|---------|------|
| 1 | **[#5316](https://github.com/Hmbown/CodeWhale/issues/5316) EPIC-005: CodeWhale TUI Crate 分解** | ⭐⭐⭐⭐⭐ | 项目的**顶层架构史诗**，所有子 EPIC 与 PR 需在此汇报。项目正从单体 TUI 拆分为独立 crate，是 2026 下半年的核心路线图。11 条评论、跨多日更新，表明治理活跃。 |
| 2 | **[#5541](https://github.com/Hmbown/CodeWhale/issues/5541) Feature: DeepSeek-V4-Flash-Vision-Exp** | ⭐⭐⭐⭐⭐ | 社区要求支持 DeepSeek 首个**多模态模型**，需加入 `/model` 列表并实现 vision 工作流。标志着 DeepSeek 系列进入视觉时代，影响面广。 |
| 3 | **[#5535](https://github.com/Hmbown/CodeWhale/pull/5535) Supervised operation stack（详见 PR 章节）** | ⭐⭐⭐⭐⭐ | 涵盖 #5531、#5532、#5533、#5534 的合并实现。 |
| 4 | **[#5531](https://github.com/Hmbown/CodeWhale/issues/5531) 本地生命周期事件出口（JSONL + Webhook）** | ⭐⭐⭐⭐ | 长期 TUI 会话需被外部监督（多路复用器、CI、告警系统等）监控，导出 `turn_stalled` / `turn_failed` 等机器可读事件。 |
| 5 | **[#5532](https://github.com/Hmbown/CodeWhale/issues/5532) Feature: `/relaunch`** | ⭐⭐⭐⭐ | `/update` 仅安装新二进制却不重启，要求在 TUI 持有终端的前提下实现**自我重启模式**，技术挑战不小。 |
| 6 | **[#5533](https://github.com/Hmbown/CodeWhale/issues/5533) Feature: 监督运行控制面** | ⭐⭐⭐⭐ | 每会话控制 socket（消息 / 中断 / 重启 / 状态）+ `RuntimeBackendKind::External`，让 codewhale 可作为被监控子进程运行。 |
| 7 | **[#5534](https://github.com/Hmbown/CodeWhale/issues/5534) Bug: 目标续跑节奏被绕过** | ⭐⭐⭐⭐ | `continuation_delay_seconds` 静默期在"轮内派发路径"上失效，导致恢复会话和 CLI 会话立即触发续跑而非遵守节流。 |
| 8 | **[#5529](https://github.com/Hmbown/CodeWhale/issues/5529) 子代理执行可靠性崩溃** | ⭐⭐⭐⭐ | 三种故障模式：墙钟超时丢失未提交工作、provider 路由失败阻塞派发、shell 工具需要变通。直接冲击 **Fleet** 核心价值主张。 |
| 9 | **[#5528](https://github.com/Hmbown/CodeWhale/issues/5528) Workflow 静默失败** | ⭐⭐⭐⭐ | 脚本求值阶段的 dispatch/schema 错误**完全不在 TUI 中呈现**，运营者误以为工作流正常运行，无任何 toast/状态行/工作流面板提示。 |
| 10 | **[#4069](https://github.com/Hmbown/CodeWhale/issues/4069) 索引隐私控制（.codewhaleignore）** | ⭐⭐⭐ | 类似 Cursor 的 `.cursorignore` 机制，索引前排除 secrets/vendor/本地产物。文档、上下文、v0.9.3 多标签标记，已搁置近 2 个月后被重新激活。 |

> **注**：#5536 为已关闭的 Texas HIPAA 合规指南（医疗合规内容，疑似 spam/离题），未列入热点。

---

## 🛠️ 重要 PR 进展

### 功能性 PR

1. **[#5535 Supervised operation stack](https://github.com/Hmbown/CodeWhale/pull/5535)** — M-Maciej
   一次性合并 5 项变更：生命周期事件出口（`[lifecycle_outbox]`）、`/relaunch`、每会话控制 socket、`RuntimeBackendKind::External`、目标续跑节奏修复。**今日最具战略意义的 PR**，将 TUI 转变为"被外部监督的进程"。

2. **[#5525 refactor(tui): 采用 command shapes（FEAT-018）](https://github.com/Hmbown/CodeWhale/pull/5525)** — aboimpinto
   TUI 实用命令组全面接入 FEAT-014 引入的外部 command shapes 边界，7 个命令文件仍位于 `codewhale-tui` crate 内但执行边界已重构。是 EPIC-005 crate 分解的关键里程碑。

3. **[#5524 feat(tui): 多文件 read_lints 操作](https://github.com/Hmbown/CodeWhale/pull/5524)** — wuisabel-gif
   实现 #4070 范围。模型可见的 `lsp` 工具新增 `read_lints` 操作，支持多个工作区相对文件，复用现有 `LspManager` 与传输池，**避免创建额外的 LSP 生命周期**。

4. **[#5530 fix(cli): 通过公共二进制路由遗留补全](https://github.com/Hmbown/CodeWhale/pull/5530)** — wuisabel-gif
   解决 #5526。`codewhale completions <shell>` 改用与 `codewhale completion <shell>` 一致的补全生成器，输出脚本改用公共命令名 `codewhale`，**修掉 pwsh 上失效的补全脚本**。

5. **[#5523 refactor(tui): 从 turn 循环中抽取 tool call 阶段](https://github.com/Hmbown/CodeWhale/pull/5523)** — bistack
   将 tool call 拆分为 `plan_tool_calls` / `execute_planned_tools` / `process_tool_results`，保留原控制顺序、可变状态流、取消行为与索引结果收集。**为可监督栈 PR #5535 奠定基础**。

### 依赖更新 PR（Dependabot 集中推送）

6. **[#5540 similar 3.1.2 → 3.2.0](https://github.com/Hmbown/CodeWhale/pull/5540)** — 结构化、面向行的差异输出增强。
7. **[#5539 rio-vt 0.5.19 → 0.5.25](https://github.com/Hmbown/CodeWhale/pull/5539)** — 终端虚拟化层小幅补丁。
8. **[#5390 rmcp 2.2.0 → 3.1.2](https://github.com/Hmbown/CodeWhale/pull/5390)** — Rust MCP SDK 主版本升级（已开放 7 天），影响所有 MCP 集成。
9. **[#5538 jsonschema 0.46.10 → 0.49.9](https://github.com/Hmbown/CodeWhale/pull/5538)** — schema 校验库大跨度升级。
10. **[#5537 docker/setup-buildx-action 4.2.0 → 4.3.0](https://github.com/Hmbown/CodeWhale/pull/5537)** — CI 构建镜像动作更新。

---

## 📈 功能需求趋势

从今日 11 个 Issue 中可提炼以下社区最关注的方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **🤖 新模型支持** | #5541 | DeepSeek-V4-Flash-Vision-Exp 多模态接入，模型生态扩展 |
| **🛰️ 可监督运行 / 自动化** | #5531, #5532, #5533, #5535 | TUI 从"交互工具"演化为"被外部控制的进程"，服务 CI/无人值守场景 |
| **🧱 架构解耦** | #5316, #5525, #5523 | 项目从单体 → 多 crate 分解，模块边界重新划定 |
| **🔒 隐私与信任控制** | #4069 | `.codewhaleignore` 索引排除机制，类 Cursor 体验 |
| **🛠️ 可靠性与可观测性** | #5528, #5529, #5534 | 工作流静默失败、子代理崩溃、节流失效三大痛点 |
| **🧩 LSP / IDE 集成** | #5524 | 多文件 lint 操作，工具面深化 |

---

## 💬 开发者关注点

综合今日 21 条动态（11 Issue + 10 PR），开发者反馈呈现以下**高频痛点**与**共识需求**：

1. **静默失败比崩溃更危险** —— #5528 与 #5529 都反映出"系统看起来在工作但实际没在"的问题，**可观测性（observability）是当前最迫切的诉求**。开发者宁愿看到红色错误也不愿被假阳性迷惑。

2. **长期无人值守运行是真需求** —— 多个 issue（#5531、#5533、#5532）连续由同一作者 M-Maciej 提出，说明存在一群**将 TUI 作为后台代理运行**的高级用户群，这与传统"交互式 terminal 工具"定位产生张力。

3. **自我重启是基础设施空白** —— `/update` 安装新二进制却要求用户手动重启，被 M-Maciej 准确指出"在 TUI 持有终端的前提下做 self-exec 是个不小的工作量"。这是可监督栈的关键技术债。

4. **架构正在经历剧烈转型** —— DeepSeek-TUI → CodeWhale TUI → crate 分解（EPIC-005），issue 链接已开始跨 `Hmbown/DeepSeek-TUI` 与 `Hmbown/CodeWhale` 两个仓库并存，**给新贡献者带来 onboarding 困惑**。

5. **依赖治理活跃但风险累积** —— 5 个 Dependabot PR 中包含 1 个主版本升级（rmcp 2.x → 3.x）和多个跨版本升级，依赖卫生良好但需要持续关注 MCP SDK 等核心依赖的 API 变化。

6. **多模态被期待已久** —— #5541 的提出暗示社区已经把 DeepSeek-TUI 视作"DeepSeek 模型客户端"，而不仅仅是 terminal wrapper。**模型多样性即竞争力**。

---

*日报生成于 2026-08-22 · 数据时间窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*