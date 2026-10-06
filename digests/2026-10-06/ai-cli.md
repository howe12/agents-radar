# AI CLI 工具社区动态日报 2026-10-06

> 生成时间: 2026-10-06 04:19 UTC | 覆盖工具: 9 个

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

# 2026-10-06 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具已从"单一对话界面"演化为"模型+协议+平台"的三层栈：以 **MCP 协议**为生态枢纽、以**多代理协作（Subagent）**为新范式、以**企业级可观测性 / 凭据管理**为成熟度分水岭。今日八款主流工具（Kimi Code 静默）整体处于 **v1.0+ 密集打磨期**：头部工具（Claude Code、Codex、Copilot CLI）通过多版本同日迭代推进能力纵深，中部工具（Qwen Code、DeepSeek TUI、OpenCode、Pi）则围绕架构解耦与平台化展开工程化升级。**Windows 平台一致性**、**Provider 边界条件**、**会话生命周期可控性**是当前最具共性的三大质量洼地。

---

## 2. 各工具活跃度对比

| 工具 | Issues（活跃热点） | PR（今日进展） | Release（今日） | 综合活跃度 |
|------|:---:|:---:|:---:|:---:|
| **Claude Code** | 10 | 0 | **2**（v2.1.290 / v2.1.291） | 🟠 高（版本驱动） |
| **OpenAI Codex** | 10 | **46** | **2**（rust-v0.160.1 + 2 alpha） | 🔴 极高（PR 集中合并期） |
| **Gemini CLI** | 10 | 10 | **1**（nightly bump） | 🟠 高 |
| **GitHub Copilot CLI** | 10 | 1 | **4**（v1.0.92 / 92-5 / 93-0 / 93-1） | 🟠 高（版本密度最大） |
| **Kimi Code CLI** | — | — | — | ⚪ 静默 |
| **OpenCode** | 10 | 10 | 0 | 🟡 中（PR 修复驱动） |
| **Pi** | 10 | 10 | **2**（v1.0.3 / v1.0.4） | 🟠 高 |
| **Qwen Code** | 10 | 10+ | **1**（v0.25.0） | 🟠 高 |
| **DeepSeek TUI** | 10 | 10 | 0 | 🟡 中（架构重构期） |

> **观察**：**OpenAI Codex** 以 46 个合入 PR 一骑绝尘；**GitHub Copilot CLI** 以 4 个 Release 体现"小步快跑"策略；**Claude Code** 与 **DeepSeek TUI** 出现"PR 静默 / 修复集中"的反差，提示两种不同的工程节奏。

---

## 3. 共同关注的功能方向

### 🔴 Tier 1：高频共识痛点（≥4 个工具关注）

| 方向 | 涉及工具 | 核心诉求 |
|------|---------|---------|
| **Windows 平台兼容性** | Claude Code、OpenAI Codex、Pi、DeepSeek TUI、Qwen Code | Shift+Enter 失效、MSIX 虚拟化、PowerShell 受限语言模式、libuv 修饰键丢失、shellPath 静默覆盖 |
| **MCP 协议稳定性** | Claude Code、OpenAI Codex、OpenCode、Copilot CLI | MCP 2026-07-28 协议升级导致 `outputSchema` / `cache hints` 必填、OAuth 续期失败、provider 兼容矩阵不全 |
| **会话上下文管理（Compaction）** | Claude Code、OpenCode、Pi | 自动压缩静默丢失上下文、循环注入 "Continue..." 引发死循环、thinking tokens 计入预算导致溢出 |

### 🟠 Tier 2：新兴热点方向（2-3 个工具关注）

| 方向 | 涉及工具 | 核心诉求 |
|------|---------|---------|
| **Subagent / 多代理协作** | Gemini CLI、Qwen Code、Claude Code | 状态汇报失真、子代理挂起、@-mention 内联协作、可观测性缺口 |
| **Provider / 多模型适配** | Pi、OpenAI Codex、OpenCode、DeepSeek TUI | Azure Foundry、NVIDIA NIM `$ref` schema、DeepSeek V4 快照 ID、OpenRouter 真实账单 |
| **凭据 / OAuth / 企业管控** | Copilot CLI、Claude Code、OpenAI Codex | Entra scope 校验、403 access grant 循环、Cloudflare MCP OAuth 状态机异常 |
| **可观测性 / 遥测** | Qwen Code、OpenAI Codex、OpenCode | MCP 工具目录原始大小度量、OTLP 自定义 Header、子代理 trace 关联 |

### 🟡 Tier 3：差异化前沿探索

- **真实成本核算**：Pi (#9980 / PR #10286)、OpenAI Codex（partial_answer 阶段化）探索用上游账单替代静态目录
- **零依赖 OS 沙箱**：Gemini CLI (#19873) 提议利用 Gemini 3 原生 bash 能力 + OS 级沙箱
- **AST 感知工具**：Gemini CLI (#22745) 主张用语法树替代文本 grep，提升 token 效率

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | Hook 扩展生态 + MCP/LSP 深度集成 | 重度 mod 开发者、企业集成方 | Hook 优先、Server Tool Use 可观测、agentId 权限隔离 |
| **OpenAI Codex** | 长任务无人值守 + 工具生态安全 | AI Agent 工程化团队、CI/CD 集成方 | Bubblewrap PATH 过滤、BM25 工具搜索、partial_answer 消息阶段化 |
| **Gemini CLI** | Subagent 体系 + 模型自主调用 | 研究型开发者、需要任务自动化的团队 | 子代理可观测、AST 工具、危险命令拦截 |
| **GitHub Copilot CLI** | BYOK 多模型网关 + Entra 企业集成 | 企业 GitHub 用户、多模型切换场景 | Ctrl+E 环境切换、copilot config 子命令、模型策略覆盖 |
| **OpenCode** | 跨 Provider 抽象层 + V2 Web/Desktop | 跨模型开发者、隐私敏感用户 | V2 重写期、capability detection、Galician i18n |
| **Pi** | 工具精细过滤 + 真实计费透明度 | 成本敏感型开发者、多模型编排者 | `--tools` / `--no-mcp` 开关、Azure Foundry Chat |
| **Qwen Code** | Managed Agent 平台化 + 多 Agent 协作 | 企业级托管部署、Kubernetes 用户 | Workspace/Session 绑定、幂等重放、可恢复执行 |
| **DeepSeek TUI** | 架构解耦与硬化 | Rust 底层贡献者、Provider 集成方 | EPIC-005 巨型 crate 拆解、Runtime API 透出、静态审计 backlog |

> **关键差异**：Claude Code / Copilot CLI 走"插件生态"路线，OpenAI Codex / Qwen Code 走"Agent 平台"路线，Gemini CLI / Pi 走"工具精细化"路线，OpenCode / DeepSeek TUI 走"Provider 矩阵"路线。

---

## 5. 社区热度与成熟度

### 🔥 高热度社区（评论量 + 👍 双高）

| 工具 | 代表 Issue | 👍 / 评论 | 成熟度阶段 |
|------|-----------|:---:|---|
| OpenAI Codex | #28931（自动续跑） | **42** / 8 | 成熟期（功能饱和，质量修复期） |
| OpenCode | #39875（隐私条款） | **49** / — | 转型期（V1 → V2 阵痛） |
| Claude Code | #15148（LSP 失效） | **73** / 24 | 成熟期（生态集成回归） |
| OpenAI Codex | #41463（WSL 创建项目） | **34** / 63 | 成熟期（长期未根治） |
| Pi | #4945（openai-codex 卡死） | **34** / 81 | 适配期（v1.0 打磨） |

### 📊 成熟度分层

- **🟢 稳定成熟**：Claude Code、Copilot CLI、OpenAI Codex —— 多版本同日迭代，关注点转向回归修复与生态兼容
- **🟡 快速迭代**：Gemini CLI、Pi、Qwen Code —— nightly/alpha 频发，关注点为能力扩展与边缘场景
- **🟠 架构转型**：OpenCode（V1→V2）、DeepSeek TUI（巨型 crate 拆解）—— 大量重构型 PR，活跃但不直接可见功能增量
- **⚪ 静默期**：Kimi Code CLI —— 24 小时无活动

---

## 6. 值得关注的趋势信号

### 📈 信号 1：MCP 从"协议"升级为"生态枢纽"

Claude Code、Codex、Copilot CLI、OpenCode 集中暴露 MCP 2026-07-28 协议升级引发的连锁兼容问题，提示 MCP 已从可选项变为**强制集成项**。`outputSchema` / `cache hints` 等"可选字段被拒"反映出**协议严格化 vs 生态包容性**的张力。

> **开发者参考价值**：构建 MCP Server 时应主动订阅上游协议变更；第三方集成方需建立协议版本检测层。

### 📈 信号 2：Subagent / 多代理从"特性"升级为"主线"

Gemini CLI 的 Subagent EPIC、Qwen Code 的 Managed Agent 双路径架构（#12380，46 评论）、Claude Code 的 `agentId` 字段引入，三者同步指向：**多代理协作已成为下一代 CLI 的核心架构**，而非可选增强。

> **开发者参考价值**：单一 Agent 的 prompt 工程正在让位于 Agent 编排工程；可观测性、状态归属、取消语义是新的必答题。

### 📈 信号 3：Compaction / 上下文管理成为"工程化瓶颈"

Claude Code（#98747 静默丢弃）、OpenCode（#15533 死循环）、Pi（#9075 thinking 溢出）三连命中同一类问题——**长会话的自动压缩从"AI 能力"变成"可靠性风险"**。社区诉求从"压缩得更聪明"转向"**给我开关 + 给我日志**"。

> **开发者参考价值**：在产品中提供 compaction opt-out、上限、可见化是当前的硬性要求。

### 📈 信号 4：Provider 抽象层的"边界条件"集中暴露

OpenCode（OpenAI 503、GitHub Copilot 模型同步失败）、Pi（NVIDIA NIM `$ref`、Anthropic strict mode）、DeepSeek TUI（V4 快照 ID）反映出：**多模型支持正在从"能不能用"进入"用得稳不稳"阶段**。`unknown` finish_reason、thinking 缓存点位置等细节成为稳定性主战场。

> **开发者参考价值**：抽象层需把"provider 特有字段"显式建模，否则每个新模型上线即翻车。

### 📈 信号 5：真实成本 / 计费透明度成为付费用户底线

Pi #9980（2-3 倍低估）、OpenCode #39875（49 👍 隐私争议）、Copilot CLI #3282（多 BYOK）共同指向：**从"目录估算"切换到"上游实际账单"已不可逆**。同时，**隐私条款的静默变更**在付费群体中触发信任危机。

> **开发者参考价值**：构建计费模块时优先接入 provider 实际账单 API；隐私变更需建立公告机制。

### 📈 信号 6：Windows 平台 QA 覆盖系统性缺失

Claude Code 40% 新 Issue、Windows 相关；OpenAI Codex 50%+；DeepSeek TUI Windows 安全闸门连发。**几乎所有工具的"Windows 是体验洼地"已成结构性事实**，而非偶发。

> **开发者参考价值**：跨平台测试矩阵中 Windows 应获得与 macOS 同等优先级；MSIX / libuv / PowerShell 受限语言模式是必检路径。

### 📈 信号 7：企业级需求从"能不能用"升级到"管控粒度"

Copilot CLI（Entra scope、Enterprise 模型策略）、Qwen Code（per-agent budget、Memory Agent 凭据隔离）、OpenAI Codex（沙箱审计可观测性）共同表明：**大客户已不再满足功能可用，要求策略可追溯、凭据可隔离、行为可审计**。

> **开发者参考价值**：产品路线图上，"管理面 API + 审计日志 + 策略引擎"的优先级需要前置。

---

## 📌 总结

2026-10-06 的 AI CLI 生态呈现**"协议收紧、能力外延、质量承压"**的三重特征：

- **协议层面**：MCP 严格化、partial_answer 阶段化、BM25 工具排序等机制正在重塑 Agent 工程基础
- **能力层面**：Subagent 协作、Provider 矩阵、Managed Agent 平台化是下一阶段竞争焦点
- **质量层面**：Windows 一致性、Compaction 可靠性、Provider 边界条件是普遍且紧迫的工程债

**对技术决策者**：建议将"协议版本检测 + Windows 跨平台测试 + Compaction 可控性"列为采购/自研的三大验收项。
**对开发者**：下一阶段高价值投入方向为 **MCP Server 开发**、**Subagent 编排框架**、**Provider 适配层精细化**、**真实计费集成**。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-10-06 | 数据源：anthropics/skills*

---

## 1. 热门 Skills 排行

> 注：原数据中 PR 评论数为 `undefined`，以下排行综合 **PR 更新活跃度、关联 Issue 讨论量、变更重要性** 三个维度筛选。

| # | Skill (PR) | 功能 | 状态 |
|---|---|---|---|
| 🥇 | **#1742 fix(mcp-builder)** | 适配 MCP v2 的 `streamable_http_client` 重命名及自定义 Header 配置；修复 Python 客户端在 `mcp>=2.0.0` 下的导入与连接失败。 | 🔓 OPEN（更新于 09-29）|
| 🥈 | **#1298 fix(skill-creator)** | 隔离 trigger evals 探测、修复 Windows 下 `select()` 子进程管道失败、避免无关工具中断扫描。 | 🔓 OPEN（更新于 09-16，长达 3 个月活跃）|
| 🥉 | **#1771 proofcore-contract-auditor** | Web3 Skill：对 Solidity/Rust 智能合约做静态分析，并将审计证明通过零存储 Merkle 协议锚定到 TON 区块链。 | 🔓 OPEN（NEW）|
| 4 | **#1703 md2video-audio** | 零成本 Skill：Markdown → Marp 幻灯片 → MP4 视频，自动配拟人化语音旁白。 | 🔓 OPEN（NEW）|
| 5 | **#822 AWT (AI Watch Tester)** | 零代码 E2E 测试生成器；赋予 Claude 视觉+浏览器控制能力，自动跑前端测试。 | 🔓 OPEN（更新于 09-19）|
| 6 | **#525 pyxel** | Python 复古游戏开发 Skill，涵盖实现、无头运行、帧级验证与发布检查。 | 🔓 OPEN（更新于 09-22，已等半年）|
| 7 | **#514 document-typography** | 文档排版质量控制：自动防止孤词换行、寡头段落、编号错位。 | 🔓 OPEN（等 7 个月）|
| 8 | **#486 ODT Skill** | OpenDocument（.odt/.ods）创建、模板填充、HTML 解析全套能力。 | 🔓 OPEN（等 7 个月）|

**讨论热点**：底层基础设施修复（mcp-builder / skill-creator）占据榜首，反映社区对"Skill 自身稳定性"的高度关注；新兴方向则集中在 **Web3、可视化内容生成、E2E 测试自动化**。

---

## 2. 社区需求趋势（按 Issue 评论数）

| 优先级 | 议题 | 评论数 | 提炼出的需求方向 |
|---|---|:-:|---|
| 🔴 信任与安全 | [#492](https://github.com/anthropics/skills/issues/492) Community Skills 借 `anthropic/` 命名空间冒充官方 → 信任边界滥用 | **43** | **安全**：建立官方/社区 Skill 的命名与签名区分机制 |
| 🟠 团队协作 | [#228](https://github.com/anthropics/skills/issues/228) 企业内 Skill 共享 | 16 | **分发**：组织级 Skill 库/直链分享，免去手动上传 |
| 🟡 评测体系 | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% / [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 评测 0/N | 12+4 | **测试基础设施**：trigger eval、benchmark 完整失效 |
| 🟡 用户体验 | [#62](https://github.com/anthropics/skills/issues/62) Skills 莫名消失 | 10 | **持久化**：Skill 文件管理/迁移的可靠性 |
| 🟢 新能力 | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory（符号化压缩 agent 状态） | 9 | **长任务管理**：节省上下文、状态压缩 |
| 🟢 平台兼容 | [#29](https://github.com/anthropics/skills/issues/29) Bedrock 支持 / [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 接入 | 4+4 | **多云/企业系统**：Bedrock、SPO 等环境适配 |
| 🟢 治理 | [#412](https://github.com/anthropics/skills/issues/412) agent-governance / [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate | 6+4 | **质量治理**：策略执行、威胁检测、输出审计 |
| 🟡 上下文 | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 单次注入 156k tokens | 4 | **懒加载**：避免 eager 注入拖爆 context window |

**趋势画像**：社区已从"提交新 Skill"转向"Skill 体系的工业化"——**安全、评测、分发、上下文管理** 是四大刚需。

---

## 3. 高潜力待合并 Skills（近期可落地）

按"活跃度 × 主题价值"排序：

| PR | Skill | 潜力理由 | 最近活跃 |
|---|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容性修复 | 阻塞所有 MCP v2 用户；issue [#1668](https://github.com/anthropics/skills/issues/1668) 已驱动 | 09-29 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator trigger eval 修复 | 直接回应社区 0% 触发率痛点（#556） | 09-16 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | Web3 + 区块链审计，新垂类首例 | 09-16 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | Markdown → 视频，零成本卖点吸睛 | 09-15 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation / quantitative-resume-auditor | 工作流自动化方向，受企业用户欢迎 | 09-30 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时错误处理 | 修复 docx skill 静默失败的可靠性 bug | 09-25 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E 测试 | 6 个月长跑，社区测试需求强劲 | 09-19 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"Skills 的工业化基座"——即在 Skill 数量爆发后，亟需解决安全信任边界、评测/触发可靠性、组织级分发与上下文懒加载这四大基础设施短板，使 Skill 体系从"实验性 prompt 集合"迈向"可治理的开发者生态"。**

---

# Claude Code 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今日 Claude Code 在 24 小时内连续发布 v2.1.290 与 v2.1.291 两个版本，迭代节奏明显加快——v2.1.291 主要修复了前两个版本引入的回归问题（云会话答复丢失、退出时消息截断）。社区层面则集中爆发了与 **MCP/LSP 插件、Windows 桌面端、VS Code 扩展** 相关的大量新 Issue，反映出本次版本在生态集成侧的兼容性问题较多。

---

## 🚀 版本发布

### v2.1.290（今日发布）
- **新增 Hook 字段 `serverToolUses`**：`mod` 的 `turn.step` hook 现在能拿到 API 自身调用的工具（即 advisor 的工具调用），含 id、name、input、起止时间。
- **新增 `agentId` 字段**：`tool.check` 事件中现在携带 `agentId`，便于插件 hook 区分主 agent 与子 agent 的权限检查。
- 链接：[Release v2.1.290](#)

### v2.1.291（今日发布，紧随修复）
- **修复**：v2.1.290 引入的回归——云会话可能丢失对权限提示的答复。
- **修复**：v2.1.288 引入的回归——退出时会话的最后若干条消息丢失。
- 链接：[Release v2.1.291](#)

> 💡 **观察**：连续两版出现 regression 表明近期对 Hook / Session 系统的改动较深，集成方（尤其是 mod 开发者）建议先观望再升级。

---

## 🔥 社区热点 Issues（按关注度精选）

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|----:|----:|--------|
| 1 | [#15148](https://github.com/anthropics/claude-code/issues/15148) LSP 插件 `lspServers` 配置从 marketplace.json 未生效 | 24 | 73 | ⭐⭐⭐ |
| 2 | [#74558](https://github.com/anthropics/claude-code/issues/74558) Fable 5：中途 assistant 文本被误打包为 thinking block（回合看似静默） | 20 | 16 | ⭐⭐⭐ |
| 3 | [#66010](https://github.com/anthropics/claude-code/issues/66010) **隐私问题**——GMail MCP 将 URL 重写为 Google 追踪链接 | 17 | 7 | ⭐⭐⭐ |
| 4 | [#98747](https://github.com/anthropics/claude-code/issues/98747) v2.1.286 后 idle compaction 静默丢弃工作上下文，无 opt-out | 14 | 11 | ⭐⭐⭐ |
| 5 | [#78160](https://github.com/anthropics/claude-code/issues/78160) 硬性禁止输入密码破坏本地开发/测试工作流 | 12 | 20 | ⭐⭐ |
| 6 | [#85209](https://github.com/anthropics/claude-code/issues/85209) 重装 Desktop 后项目/会话侧边栏为空 | 9 | 2 | ⭐⭐ |
| 7 | [#87633](https://github.com/anthropics/claude-code/issues/87633) Windows MSIX 1.32352：本地 filesystem MCP server 在 Cowork 中不可用 | 6 | 0 | ⭐⭐ |
| 8 | [#88128](https://github.com/anthropics/claude-code/issues/88128) MCP `tools/list`/`resources/list` 因可选 cache hints 被拒（MCP 协议 2026-07-28） | 5 | 0 | ⭐⭐ |
| 9 | [#92771](https://github.com/anthropics/claude-code/issues/92771) Windows：Shift+Enter 与 Enter 无法区分（libuv 丢弃修饰键） | 5 | 2 | ⭐⭐ |
| 10 | [#99837](https://github.com/anthropics/claude-code/issues/99837) 403 "needs access grant" 即使 `/login` 后仍持续出现 | 1 | 0 | ⭐ |

**简要点评：**
- **#15148** 关注度远超第二名——LSP 插件（typescript-lsp / pyright-lsp / gopls-lsp）安装后无法启用，社区已自发 workaround，73 个 👍 表明这是阻塞性问题。
- **#66010** 涉及**隐私与追踪**：GMail MCP 静默改写链接为 Google 跟踪 URL，触及用户信任红线。
- **#98747** 直指 v2.1.286 起的 compaction 策略倒退：长会话上下文被静默丢弃并标记为"manual"，被开发者视为 silent data loss。
- **#74558** 影响 Fable 5 模型的可观测性：assistant 文本混入 thinking 块，导致 `--output-format stream-json` 消费者渲染异常。
- **#78160** 揭示安全与可用性的张力：密码硬阻断使得本地测试登录流程无法进行，社区普遍倾向引入 permission-gated opt-in。

---

## 📥 重要 PR 进展

> ⚠️ 过去 24 小时内 **无** 新 PR 提交或更新。PR 通道今日处于静默期。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布来看：

| 趋势方向 | 占比 | 代表 Issue |
|---------|----:|-----------|
| **MCP / LSP 生态兼容** | 高 | #15148, #88128, #87633 |
| **Windows 桌面/CLI 兼容** | 高 | #92771, #99192, #99751, #99851, #95009 |
| **会话与上下文管理** | 中高 | #98747, #80941, #85209 |
| **认证 / 订阅 / 访问授权** | 中 | #99837, #99849, #99852 |
| **新模型（Fable 5）行为** | 中 | #74558 |
| **桌面 App UX 改进** | 中 | #99449（mod 面板独立滚动区）、#98568、#99827 |
| **隐私 / 安全策略** | 中 | #66010、#78160、#99408 |
| **IDE 集成（VS Code）** | 中 | #97044、#96683 |
| **Bash 工具可靠性** | 中 | #95009、#99846 |

**核心方向提炼：**
1. **生态协议稳定性** —— MCP 2026-07-28 协议升级引发连锁兼容问题，多个 Issue 显示协议字段变更（如 `cache hints`、`outputSchema`、`draft-07`）使第三方 MCP 实现大面积不可用。
2. **Windows 平台 QA** —— 今日更新 Issue 中 **Windows 相关占比近 40%**（Shift+Enter、MSIX、PowerShell 集成、ECONNREFUSED、git.exe 多实例等），Windows 是当前最大短板。
3. **会话生命周期可控性** —— Compaction / Session / TCC 三方面都在暴露"用户失去了对上下文的掌控"，社区诉求从"AI 更聪明"转向"我能关闭某些自动行为"。
4. **安全默认值的边界** —— 密码硬阻断、URL 重写、隐私弹窗反复出现，反映出默认安全策略过紧或行为不透明。

---

## 👨‍💻 开发者关注点

综合社区反馈，开发者当前最关心的痛点：

1. **🔴 上下文静默丢失**：v2.1.286 起的 idle compaction 让长会话"无征兆操作破坏"，且没有开关 (#98747)。多位开发者要求恢复旧行为或提供 opt-out。
2. **🔴 MCP 协议变更破坏第三方 server**：MCP 2026-07-28 协议要求更明确，`outputSchema`、`ttlMs/cacheScope` 等可选字段不填即被拒 (#88128)。建议把可选字段真的"可选"。
3. **🔴 Windows 是体验洼地**：MSIX 虚拟化导致 `%APPDATA%` 与真实路径错位 (#99192、#87633)；libuv 修饰键丢失 (#92771)；空闲执行问题 (#99851)；VS Code 扩展 OOM (#97044)。
4. **🟡 安全策略过于刚性**：密码输入被一刀切阻断 (#78160)，本地测试场景无解；GMail MCP 重写链接 (#66010) 引发隐私担忧。
5. **🟡 订阅/认证链路**：403 "access grant" 即使已登录仍报错 (#99837、#99852、#99849)——多次出现 OAuth 在 DarkWake 后被清状态保留的循环。
6. **🟡 Hook 可观测性**：v2.1.290 新增的 `serverToolUses` 和 `agentId` 受到欢迎 (正反馈)，但 v2.1.290/291 的 session 丢失 regression 让人对新版本持谨慎态度。
7. **🟢 桌面 mod 体验**：社区开始基于新 hook 构建更复杂的 UI 组件（diff viewer + 文件树）(#99449)，说明 **2.1.290 的 hook 扩展为生态打开了新空间**。

---

*日报基于 anthropics/claude-code 仓库过去 24 小时公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-10-06**
**数据来源：github.com/openai/codex**

---

## 一、今日速览

今日 Codex 仓库进入密集合入期，过去 24 小时内合并/关闭 PR 达 46 个，重点围绕 **partial_answer 消息阶段重构**、**Windows 沙箱与 PowerShell 安装链路修复**、以及 **JavaScript 代码模式的 BM25 工具搜索**。社区侧，Windows/WSL 兼容性问题仍是热点，#41463（WSL 项目创建失败）以 63 条评论稳居榜首；同时 `gpt-5.6-sol` 与 Dots 云端计算器相关问题持续涌现，反映新模型/新产品仍在稳定性打磨期。

---

## 二、版本发布

### rust-v0.160.1（稳定版）
修复了远程 stdio MCP 服务在显式配置远程环境变量时丢失 `SYSTEMROOT`、`TEMP`、`TMP` 的问题，确保 Unix 主机仍能继承 Windows 执行器的启动环境。
🔗 [PR #51121](https://github.com/openai/codex/pull/51121)

### rust-v0.162.0-alpha.16 / alpha.15（Alpha 通道）
两个连续 alpha 预发布版本，未提供详细变更说明（pre-release 版本号推进通常表示内部修复与小功能预热）。
🔗 [Release 0.162.0-alpha.16](https://github.com/openai/codex) ｜ [Release 0.162.0-alpha.15](https://github.com/openai/codex)

---

## 三、社区热点 Issues

| # | Issue | 亮点 | 链接 |
|---|-------|------|------|
| 1 | **#41463** Windows + WSL 无法创建项目（AbsolutePathBuf 反序列化缺失 base path） | 63 评论 / 👍34，长期未解，影响 WSL2 用户核心工作流 | [#41463](https://github.com/openai/codex/issues/41463) |
| 2 | **#49618** Windows ↔ Android Remote 配对死循环（已 CLOSED） | 26 评论 / 👍16，已修复，跨设备配对流程稳定性问题 | [#49618](https://github.com/openai/codex/issues/49618) |
| 3 | **#47429** WSL2 `codex sandbox` 因 `/mnt/wslg/distro` 被识别为非法 host mount 而崩溃 | 11 评论 / 👍22，**赞同比远超评论比**，沙箱与 WSLg 集成是开发者共识痛点 | [#47429](https://github.com/openai/codex/issues/47429) |
| 4 | **#44503** Windows app-server 守护进程在 Modern Standby 系统上因 Job Object 报错启动失败 | 18 评论 / 👍10，影响长时间挂起的笔记本用户 | [#44503](https://github.com/openai/codex/issues/44503) |
| 5 | **#49682** Dots 云电脑文件无故丢失，重启后无法复现 | 22 评论 / 👍6，Dots 数据持久化可靠性存疑 | [#49682](https://github.com/openai/codex/issues/49682) |
| 6 | **#50127** Dots 任务创建出现 UNKNOWN 状态、过期断连通知、Schema 失败 | 15 评论，反映 Dots 任务生命周期状态机存在缺陷 | [#50127](https://github.com/openai/codex/issues/50127) |
| 7 | **#32714** Windows Desktop `gpt-5.6-sol` 工具调用成功后 turn 永久挂起 | 12 评论 / 👍2，新模型在 Windows 上的特殊兼容性问题 | [#32714](https://github.com/openai/codex/issues/32714) |
| 8 | **#16994** Windows/WSL Desktop 自动化创建 run 但无 rollout 生成，resume 报"no rollout found" | 14 评论 / 👍5，**创建于 2026-04**，长期未根治 | [#16994](https://github.com/openai/codex/issues/16994) |
| 9 | **#28931** 增强需求：达到 5h/周限额后自动续跑 Goal | 8 评论 / 👍42，**本日赞数最高的 issue**，开发者对自动恢复工作流呼声极高 | [#28931](https://github.com/openai/codex/issues/28931) |
| 10 | **#44044** macOS 持久化 Desktop 任务丢失线程管理工具 | 9 评论 / 👍2，CLI fallback 可读但 Desktop UI 失效 | [#44044](https://github.com/openai/codex/issues/44044) |

---

## 四、重要 PR 进展

1. **#51260 处理 partial answer 在实时路由与线程搜索中的呈现**
   区分 `partial_answer` 与终态消息，避免部分回复被误判为最终答案。
   🔗 [#51260](https://github.com/openai/codex/pull/51260)

2. **#51257 修复 Windows PowerShell 下安装包校验和验证失败**
   原生启动器向 Windows PowerShell 传递了 PowerShell 7 模块路径，导致 `Get-FileHash` 无法加载，影响安装链路。
   🔗 [#51257](https://github.com/openai/codex/pull/51257)

3. **#51256 在已注册的 Core 启动过程中拉起 Windows 沙箱服务**
   解决已停止的 provisioning service 被连接路径误判为不可用，导致沙箱无法供给。
   🔗 [#51256](https://github.com/openai/codex/pull/51256)

4. **#51253 独立强制 Fast 与 Ultra Fast 策略**
   新增 `features.ultrafast_mode` 默认启用，与 `features.fast_mode` 解耦，允许策略单独开关两者。
   🔗 [#51253](https://github.com/openai/codex/pull/51253)

5. **#51241 新增 partial answer 消息阶段**
   引入 `MessagePhase::PartialAnswer`，让调用方区分"还在输出的回复"与"终态 final_answer"。
   🔗 [#51241](https://github.com/openai/codex/pull/51241)

6. **#51215 在遥测中度量 MCP 工具目录原始大小**
   记录 `codex.mcp.binding_catalog.raw_definition_json_bytes` 直方图与 `mcp.binding_catalog` trace 事件，便于分析 MCP 上下文膨胀。
   🔗 [#51215](https://github.com/openai/codex/pull/51215)

7. **#51211 拒绝来自 PATH 的可写 bubblewrap 可执行文件**
   强化沙箱：bubblewrap 发现阶段过滤所有可写路径候选，防止沙箱外逃逸。
   🔗 [#51211](https://github.com/openai/codex/pull/51211)

8. **#51209 为 JavaScript 代码模式引入 BM25 工具排序发现**
   新增 `features.code_mode_tool_search`（默认关闭），允许 `await tools.tool_search({query, limit})` 返回 BM25 排序的延迟工具。
   🔗 [#51209](https://github.com/openai/codex/pull/51209)

9. **#51207 将 CLI Daybreak 控制与自动选择门控于 opt-in 特性**
   新增 `features.cli_daybreak`（默认关闭），TUI 与 `codex exec` 中的 Daybreak 行为需显式开启。
   🔗 [#51207](https://github.com/openai/codex/pull/51207)

10. **#51203 `apply_patch` 无条件保留原文件行尾**
    此前更新 CRLF 文件会被规范化为 LF，现默认保留原行尾，跨平台协作体验改善。
    🔗 [#51203](https://github.com/openai/codex/pull/51203)

---

## 五、功能需求趋势

通过对今日 Issues 与近期合入 PR 的归类，社区关注的功能方向集中在以下六个层面：

| 方向 | 代表性 Issue / PR | 信号强度 |
|------|-------------------|----------|
| **Windows / WSL 兼容性** | #41463、#44503、#47429、#16994、#32714、#50901、#51245、#51257、#51256 | 🔴 极强（占今日 Issue 50%+） |
| **自动续跑 / 配额管理 UX** | #28931（👍42）、#46907、#46023 | 🟠 高（高赞表明强烈共识） |
| **MCP 与工具生态** | #51215、#51211、#51209、#51202 | 🟠 高（沙箱安全 + 工具发现是新热点） |
| **Dots 云电脑可靠性** | #49682、#50127、#50119、#50057、#50440 | 🟡 中（新功能尚在打磨） |
| **会话生命周期 / 状态机** | #50231、#44044、#47023、#45442、#46232、#51230、#51249 | 🟡 中（线程/任务恢复链路） |
| **可观测性与遥测** | #51220、#51215、#51206 | 🟢 渐进（基础设施演进） |

---

## 六、开发者关注点

1. **Windows 桌面是当前最大质量洼地**
   50 条置顶 Issue 中近半与 Windows 相关，覆盖 WSL2 项目创建、Modern Standby、Job Object、Computer Use 抓取超时、PNG 附件导致全局状态膨胀（140–191 MB）等。Windows 几乎是每个新功能回归测试的"重灾区"。

2. **限流后的工作流连续性是高频痛点**
   #28931 以 **👍42 / 评论 8** 的高赞评论比凸显：开发者不反对限流本身，但强烈希望 Codex 在限额重置后自动恢复 Goal/长任务——这反映出"AI Agent 长时间无人值守"已成为主流使用模式。

3. **Dots / Subagent 状态机可信度不足**
   多个 Issue 指向"任务创建为 UNKNOWN"、"过期断连通知"、"显式授权未被 delegated executor 接受"——说明 Codex 在分布式委派场景下的事务一致性仍需加强，#51206 也开始补齐子代理的初始化遥测。

4. **新模型 `gpt-5.6-sol` 的 Windows 适配存疑**
   #32714 揭示 GPT-5.6 Sol 在 Windows Desktop + ultra 推理档下，工具结果返回后 turn 永久挂起——新模型在边缘平台的兜底逻辑需要更完善的超时/恢复机制。

5. **沙箱与可执行文件安全成为新焦点**
   #51211（bubblewrap PATH 过滤）与 #50979（Windows execpolicy 缺乏诊断信息）表明社区对"Agent 在主机上执行任意代码"的风险意识在上升，期望更精细的审计日志与可观测性。

6. **BM25 工具搜索与 partial answer 标志着 Agent 工程化进阶**
   PR 端两条主线（#51209 工具排序、#51241/#51249/#51260 partial answer 三连）显示 Codex 正在解决"工具过多导致上下文爆炸"和"流式输出与最终回复混淆"两个 Agent 工程核心难题。

---

*日报生成基于 GitHub 公开数据，重点关注过去 24 小时内活跃的 Issues / PRs / Releases。如需追踪特定方向（如 Windows 修复进展或 Dots 稳定性），可在评论中指定，下期日报将做专题深读。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今日 Gemini CLI 发布了 `v0.64.0-nightly` 版本，社区讨论仍高度聚焦于 **Subagent（子代理）稳定性** 与 **Agent 行为可靠性**。多个高优先级 Issue 揭示了子代理在 `MAX_TURNS` 后错误报告成功、Generalist Agent 挂起等核心问题。同时，**AST 感知工具**、**零依赖 OS 沙箱** 等前瞻性议题引发积极讨论，体现出社区对智能体效率与安全的双重关注。

---

## 🚀 版本发布

**v0.64.0-nightly.20261006.gfb972b2f8** 已发布（机器人自动版本号 bump）。
详细变更对比：https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261005.gfb972b2f8...v0.64.0-nightly.20261006.gfb972b2f8

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关键价值 |
|---|-------|--------|---------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS 误报 GOAL 成功 | P1 🔴 | **状态欺骗问题**：子代理未完成分析却上报成功，掩盖了真实中断，13 条评论热议 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 🔴 | **8 👍 高赞**：调用 generalist 子代理时无限挂起，简单建文件夹操作都受影响 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 & 后执行意图路由 | P2 | **战略级提案**：利用 Gemini 3 原生 bash 能力，通过 OS 级沙箱释放模型潜能 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射影响评估 | P2 | **EPIC 议题**：通过 AST 工具提升单次调用精度，减少 tokens 浪费 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不会主动调用 skills 和 sub-agents | P2 | **模型自主性问题**：用户反馈模型很少主动调用自定义能力 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json | P2 | 配置覆盖在 Browser Agent 上完全失效，影响企业级部署 |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser Agent 锁恢复与接管 | P3 | 持久会话模式下 fail-fast 策略过于严苛，需自动恢复 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | P1 | Linux Wayland 用户无法使用 browser 子代理，跨平台兼容性痛点 |
| 9 | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) 用原生文件工具维护 task tracker | P3 | 探索更原生的任务跟踪方案 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) symlink 不被识别为 agent | P2 | 影响使用 dotfiles 管理配置的开发者工作流 |

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 关键内容 |
|---|----|----|---------|
| 1 | [#29635](https://github.com/google-gemini/gemini-cli/pull/29635) mock isHeadlessMode in test | 测试修复 | 修复非 TTY 环境（如 CI、后台进程）下 `FatalUntrustedWorkspaceError` 崩溃 |
| 2 | [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) 防止会话退出时进程挂起 | Bug 修复 | stdin 清理 + MCP transport 关闭，解决 Node 事件循环无法退出问题 |
| 3 | [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) 修复引号内 @ 引起的 100% CPU | Bug 修复 | 修复粘贴带 `@scope/pkg` 的 import 语句导致正则匹配死循环 |
| 4 | [#29536](https://github.com/google-gemini/gemini-cli/pull/29536) grep 命令行选项注入防护 | 🔒 安全加固 | 通过 `-e` 显式分隔防止 CWE-88 命令注入 |
| 5 | [#29535](https://github.com/google-gemini/gemini-cli/pull/29535) 修复 allowed onboarding tier 回退 | 认证修复 | Code Assist API 未标记 default tier 时误回退到 legacy |
| 6 | [#29641](https://github.com/google-gemini/gemini-cli/pull/29641) Telemetry 自定义 OTLP headers | 企业功能 | 支持 Grafana Cloud、Honeycomb、Datadog 等认证 OTLP 端点 |
| 7 | [#29644](https://github.com/google-gemini/gemini-cli/pull/29644) 恢复终端宽度变化时的去抖刷新 | UI 修复 | 修复水平 resize 抖动问题 |
| 8 | [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) 强制 terminal user turn 不变量 | 核心修复 | `/rewind` 等操作导致请求格式违反协议约束 |
| 9 | [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) resume 时避免工具响应重复 | Bug 修复 | `-r` 会话恢复时工具结果被回放两次 |
| 10 | [#29488](https://github.com/google-gemini/gemini-cli/pull/29488) RFC 9207 iss 缺失拒绝逻辑 | 🔒 MCP 安全 | `/mcp auth` 对部分授权服务器的兼容性问题 |

---

## 📈 功能需求趋势

综合过去 24 小时 Issue 活跃度，社区关注的功能方向呈现出以下清晰脉络：

1. **🤖 Subagent 体系成熟化**（热度最高）
   - 状态汇报准确性（#22323、#21763）
   - 后台运行支持 Ctrl+B（#22741）
   - 轨迹可观测与分享（#22598）
   - 共享内存 / 并行子代理（#18287）

2. **🛡 安全与沙箱化执行**
   - 零依赖 OS 沙箱（#19873）
   - 危险操作防护（#22672，禁用 git reset --force）
   - MCP OAuth RFC 9207 合规（#29488）

3. **⚡ 性能与 Token 效率**
   - AST 感知工具减少读取噪声（#22745、#22747、#22746）
   - 外科手术式精确读取 Tactful Extraction（#19561）
   - 400+ 工具时的智能裁剪（#24246）

4. **🌐 Browser Agent 健壮性**
   - Wayland 兼容性（#21983）
   - 配置覆盖生效（#22267）
   - 会话锁恢复（#22232）

5. **📋 任务跟踪范式转移**
   - 从内存型 WriteToDo 转向持久化文件 CRUD（#18836、#21000）

6. **🖥 终端渲染体验**
   - Resize 去抖与无闪烁（#21924、#29644）

---

## 💬 开发者关注点

从 Issue 评论与 PR 反馈中，提炼出以下高频痛点与需求：

### 痛点
- **Agent "自我感知" 缺失**：模型对自身能力、CLI flag、快捷键不熟悉（#21432），无法作为有效的"自向导"
- **Subagent 黑盒化**：bug 报告不含子代理上下文（#21763），诊断困难
- **临时文件污染**：模型倾向于在随机目录创建 tmp 脚本（#23571），破坏 clean commit
- **设置不生效**：自定义 skills、sub-agents 几乎不会被自动调用（#21968）

### 需求
- **跨平台一致性**：尤其 Linux Wayland 浏览器代理支持
- **企业级可观测性**：自定义 OTLP headers、Tactful token 节省
- **MCP 生态成熟**：OAuth 流程标准化、授权服务器兼容性
- **配置灵活性**：symlink、per-workspace policy（#18397）支持

### 安全红线
社区特别关注**模型执行破坏性操作的风险**（#22672），建议增加危险命令拦截或确认机制，反映出 AI Agent 进入生产环境时对**可信赖执行**的强烈诉求。

---

*报告生成基于 GitHub Issues/PRs 公开数据，分析维度：优先级、评论活跃度、社区点赞数与技术趋势外溢。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-06**

---

## 一、今日速览

过去 24 小时 Copilot CLI 节奏密集：**v1.0.92、v1.0.92-5、v1.0.93-0、v1.0.93-1 四个版本相继发布**，围绕 MCP（Model Context Protocol）凭据续期、`copilot config` 子命令、Ctrl+E 环境切换等能力快速迭代。社区层面，BYOK（自带模型密钥）多模型管理、MCP 协议完整性、Entra OAuth/MCP 集成、Enterprise 模型策略等话题持续发酵，其中 `#3282`（多 BYOK 模型）与 `#1803`（MCP resources/read）获得最高 👍。

---

## 二、版本发布

| 版本 | 时间 | 关键变化 |
|---|---|---|
| **v1.0.93-1** | 今日 | 缺陷修复（fixes and changes） |
| **v1.0.93-0** | 今日 | 修复沙箱关闭时语言服务器跨 LSP 请求保活；点击截断的 compact shell 命令可展开 |
| **v1.0.92** | 2026-10-05 | 新增 `copilot config` 列表/读取/设置/删除子命令；新增 Ctrl+E 预对话环境切换（local vs cloud）；Entra 保护 MCP 服务器可静默续期仅 access-token 凭据；下线 Legacy HTTP+SSE MCP 连接 |
| **v1.0.92-5** | 2026-10-05 | Microsoft Entra 登录后可选择账号；`/logout` 退出 OAuth 会话；Entra 保护 MCP access-token-only 凭据可静默续期 |

> 📌 重点关注：v1.0.92 引入的 `copilot config` 与 Ctrl+E 环境切换是面向 CLI 运维与混合云场景的重要能力；Entra 凭据续期修复解决了之前 OAuth 中断的常见痛点。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 评论 | 关键看点 |
|---|---|---|---|---|---|
| 1 | [#3282](https://github.com/github/copilot-cli/issues/3282) 多 BYOK 模型能力 | **CLOSED** | 31 | 13 | 单 BYOK 切换需重启会话是长期痛点，本期已关闭，意味着官方可能已给出替代方案或路线 |
| 2 | [#4998](https://github.com/github/copilot-cli/issues/4998) macOS 更新后 `.mcp-writer.binding` 缓存陈旧设备 ID | OPEN | 9 | 9 | macOS 安全更新+重启后整 CLI 不可用，影响所有会话，恢复路径缺失 |
| 3 | [#3399](https://github.com/github/copilot-cli/issues/3399) BYOK 自定义 HTTP Header | **CLOSED** | 14 | 7 | 满足多租户 LLM 服务（X-Tenant-ID、Org ID）场景，关闭意味着已实现或合并 |
| 4 | [#1803](https://github.com/github/copilot-cli/issues/1803) 支持 MCP `resources/read` 原语 | OPEN | 13 | 2 | 仅支持 tools 不支持 resources，会丢失 MCP 服务端暴露的数据 |
| 5 | [#3074](https://github.com/github/copilot-cli/issues/3074) `/effort` 命令快速切换推理强度 | **CLOSED** | 12 | 4 | 简化 `/model` 切换步骤，仍 OPEN 关注实现细节 |
| 6 | [#4775](https://github.com/github/copilot-cli/issues/4775) Mission Control 链接 404 | OPEN | 2 | 9 | `/copilot/tasks/<uuid>` 路径不存在，正确路径为 `/agents/tasks/<uuid>`，影响 dashboard 体验 |
| 7 | [#4505](https://github.com/github/copilot-cli/issues/4505) Resumed 会话保留陈旧 connection item ID | **CLOSED** | 3 | 6 | 续期会话后 400 `input item ID does not belong to this connection`，`/fork` 也无法绕过 |
| 8 | [#4991](https://github.com/github/copilot-cli/issues/4991) Cloudflare MCP OAuth 成功后报订阅限制 | OPEN | 0 | 3 | OAuth 成功但被 `-32603` 拒绝，UI 又回到"需要认证"，状态机异常 |
| 9 | [#3595](https://github.com/github/copilot-cli/issues/3595) AutoPilot 模式应在用户决策点暂停 | OPEN | 2 | 3 | 自动挑选修复方案不符合 Code Review 工作流，需要人审介入 |
| 10 | [#2790](https://github.com/github/copilot-cli/issues/2790) Figma Desktop MCP 显示为 SSE 且 400 | OPEN | 2 | 2 | type:http 应识别为 streamable HTTP，错误识别导致连接失败 |

---

## 四、重要 PR 进展

过去 24 小时仓库**仅有 1 条 PR 更新**：

- [#5046](https://github.com/github/copilot-cli/pull/5046) **OPEN** — "Initial commit"（无描述、0 👍，疑似外部试探性提交）

> ⚠️ PR 活跃度处于近期低位。本期 Issue 中的 `#3282`、`#3399`、`#3074`、`#4505` 等多个高关注条目均已 CLOSED，相应 PR 大概率已在主干或前置版本中合入（如 v1.0.92 的 `copilot config`、MCP 凭据续期）。建议读者直接查阅 [release notes 与 merged PR 列表](https://github.com/github/copilot-cli/pulls?q=is%3Apr+is%3Amerged) 获取细节。

---

## 五、功能需求趋势

从近 24 小时更新的 39 条 Issue 提炼，社区需求呈现以下聚类：

1. **BYOK / 自定义模型管理（热度最高）**
   - 多模型并存（#3282）、自定义 HTTP Header（#3399）、Entra `api://` scope 校验（#5061）、Enterprise managed `model` 实际生效（#4959、#4960）。
   - 表明 Copilot CLI 正从"单一 GitHub 模型"向"可插拔多源模型网关"演进。

2. **MCP 协议完整性 & 集成质量**
   - `resources/read` 原语（#1803）、OAuth 续期与 protocol 版本协商（#4991、#5039）、`.mcp-writer.binding` 平台兼容性（#4998）、Figma/Cloudflare 等具体 provider 兼容（#2790、#4991）。
   - MCP 已成为 CLI 生态最大增长点，但子能力与稳定性仍是短板。

3. **会话（Session）/非交互（Non-interactive）可靠性**
   - resumed session 陈旧 ID（#4505）、ACP `session/cancel` 返回 `end_turn` 而非 `cancelled`（#4561）、`copilot -p` 不发射 OTEL 遥测（#4169）、20 分钟超时（#5051）。
   - 体现 CLI 作为 CI/Agent 运行时底座的可靠性诉求。

4. **企业管控与安全**
   - 阻止内置 Agent Plugin Marketplace（#4715）、Enterprise 模型策略被覆盖（#4959）、可观测性/OTEL 与父-子 subagent hook 关联（#4967、#5059）。
   - 大客户越来越要求精细化的策略与可追溯性。

5. **跨平台 & 无障碍体验**
   - Windows 主题跟随 OS 而非终端（#4961）、PowerShell 变量语法污染 URL 导致崩溃（#2195）。

6. **AutoPilot 行为安全**
   - 自动模式需在关键决策点暂停（#3595）。

---

## 六、开发者关注点

> 综合 Issue 评论与点赞数据，开发者社区聚焦在以下痛点：

- **🔌 模型可替换性不足**：单 BYOK、模型切换需重启、Entra scope 校验过严、自定义 Header 缺失，是企业用户首要阻力。
- **🧩 MCP 仍是"半成品"**：核心 tools 已通，但 resources 原语、provider 兼容性、OAuth 状态机、Bearer-only 凭据续期都存在已知缺陷。
- **⏱️ 长任务稳定性**：resumed session 报 400、本地 provider 20 分钟超时、ACP 取消未被尊重——都指向"会话状态机与上游协议对齐"是当务之急。
- **🪟 平台细节**：macOS 设备 ID 缓存、Windows 主题检测、PowerShell URL 解析这些"边角"问题反复出现，说明 QA 覆盖尚未跨平台拉齐。
- **🛡️ AutoPilot 安全护栏**：开发者愿意授权自动化，但要求在关键决策点保留人工确认（code review 场景尤其强烈）。
- **🧭 Dashboard/Resume 路径不一致**：Mission Control 的 404 提示 CLI 与 Web UI 之间的 URL 契约需要统一，影响跨端体验。

---

*数据来源：[github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成时间：2026-10-06*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

今天 OpenCode 仓库无新版本发布，但社区活跃度依旧——Issues 与 PR 总更新量近 100 条。**最值得关注的热点是关于 `SessionCompaction` 的连环 Bug**（#15533、#39291、#40614）以及**关于 Go 订阅隐私条款变更的争议**（#39875 收获 49 👍）。此外，多个针对 V2 Web UI 滚动体验、Provider 兼容性、Git 工具链的修复 PR 已陆续合入，V2 版本生态正在快速收敛。

---

## 🚀 版本发布

过去 24 小时无新 Release。上一稳定版本仍为 OpenCode 2.0.x 系列（最近 PR 提及 v2.0.18–v2.0.23），建议关注后续 v2.0.24 是否合并 #53449（VCS diff 性能修复）。

---

## 🔥 社区热点 Issues

| # | Issue | 关键信息 | 链接 |
|---|-------|---------|------|
| 1 | **#15533** Auto-compaction 无限循环 | 当 assistant 自然结束回合（`finish === "stop"`）时，`SessionCompaction.process()` 仍注入合成 "Continue..." 消息，导致死循环。26 评论 / 12 👍，是当日讨论量最高的 Issue。 | [查看](https://github.com/anomalyco/opencode/issues/15533) |
| 2 | **#39875** 隐私条款与遥测归属（Go 订阅者） | Go 付费用户在两周内发现两条 commit 移除了隐私文案与 provider 归属，要求恢复并加入遥测/留存说明。**49 👍**——当日最高赞，反映商业化信任危机。 | [查看](https://github.com/anomalyco/opencode/issues/39875) |
| 3 | **#26195** MCP OAuth 浏览器无法打开 | `opencode mcp auth gdrive` 提示成功但实际未触发浏览器 OAuth，多用户受影响，Google Drive MCP 无法认证。 | [查看](https://github.com/anomalyco/opencode/issues/26195) |
| 4 | **#52269** OpenAI Provider 间歇性 503 | "upstream connect error" 跨模型跨 session 偶发，自动重试机制放大问题，影响生产稳定性。 | [查看](https://github.com/anomalyco/opencode/issues/52269) |
| 5 | **#21737** 自定义 Anthropic Provider 丢 API Key | `opencode.json` 能加载自定义 baseURL，但运行时 API Key 被丢弃（Windows 1.4.2）。已 CLOSED。 | [查看](https://github.com/anomalyco/opencode/issues/21737) |
| 6 | **#40502** Web 界面消息不实时刷新 | 新消息需手动刷新页面才能看到，影响多端协作。已 CLOSED。 | [查看](https://github.com/anomalyco/opencode/issues/40502) |
| 7 | **#49414** Agent 步骤循环无法终止 | finish_reason 为 `unknown` 且无 tool calls 时，`SessionPrompt.run` 触发请求风暴，无上限。 | [查看](https://github.com/anomalyco/opencode/issues/49414) |
| 8 | **#51928** GitHub Copilot 模型同步失败 | OAuth 登录成功但 `/models` 列表为空，post-login sync 从未触发。 | [查看](https://github.com/anomalyco/opencode/issues/51928) |
| 9 | **#53426** Kimi K3 (NVIDIA NIM) 卡死在 `!!!!!!` | 通过 NVIDIA NIM 调用 Kimi K3 思考阶段输出感叹号后完全停止，桌面/CLI/Cache 清理均无效。 | [查看](https://github.com/anomalyco/opencode/issues/53426) |
| 10 | **#52953** Snapshot 在 Git < 2.45 失败 | 使用了 2.45 才引入的 `git add --sparse`，老版 Git 用户完全无法 checkpoint。 | [查看](https://github.com/anomalyco/opencode/issues/52953) |

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 链接 |
|---|----|----|------|
| 1 | **#53241** 共享注册服务决策 | 重构 `client` 模块，将 `matchesVersion / compatible / state` 检查抽成统一函数，消除 #50825 必须双写的重复代码。 | [查看](https://github.com/anomalyco/opencode/pull/53241) |
| 2 | **#52734** Proxy 认证（Negotiate / NTLM / Basic） | 支持代理 407 质询，企业内网用户重大利好。 | [查看](https://github.com/anomalyco/opencode/pull/52734) |
| 3 | **#53449** VCS diff 批量优化 | 把"每个未跟踪文件启 2 个 git 进程"改为批量，单次请求从 60s+ 超时降至秒级，解决 #53449 自描述的 page-load 卡死。 | [查看](https://github.com/anomalyco/opencode/pull/53449) |
| 4 | **#53474** V2 Web UI 长按滚轮修复 | 修复按住 PageUp/PageDown 时 scrollBy 几乎不动的问题（closes #49928）。 | [查看](https://github.com/anomalyco/opencode/pull/53474) |
| 5 | **#16069** Windows pwsh/PowerShell 一等公民 | 使用 `tree-sitter-powershell` 解析 cmdlet、`FileSystem::`、`${env:...}` 等语法；优先于 Git Bash 作为默认 shell。已 CLOSED。 | [查看](https://github.com/anomalyco/opencode/pull/16069) |
| 6 | **#53475** 项目重命名后 worktree 迁移 | `Project.fromDirectory` 重命名后未更新 pinned worktree，修复项目 ID 不一致导致找不到会话。 | [查看](https://github.com/anomalyco/opencode/pull/53475) |
| 7 | **#53460** ACP 暴露 `/compact` 命令 | 修复 Zed 等 ACP 客户端 `/compact` 被拒的问题（修复 #37229、#45500 未合并遗案）。 | [查看](https://github.com/anomalyco/opencode/pull/53460) |
| 8 | **#52327** V1 thinking block 绑定迁移 | 将 `blockBinding: false` 行为迁移到 V2，规避 Anthropic 思考块被改写引发的 400 死循环。 | [查看](https://github.com/anomalyco/opencode/pull/52327) |
| 9 | **#51337** 加载托管配置 & macOS 偏好 | 恢复 V1 的 `/Library/Application Support/opencode`、`/etc/opencode` 加载逻辑，补齐 macOS MDM 支持。 | [查看](https://github.com/anomalyco/opencode/pull/51337) |
| 10 | **#49394** Galician（加利西亚语）本地化 | 为 desktop/ui 增加 `gl` 翻译，22+19 个 key，扩 i18n 覆盖。 | [查看](https://github.com/anomalyco/opencode/pull/49394) |

---

## 📈 功能需求趋势

从近 24 小时活跃 Issues 中提炼的社区关注方向：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **🧠 Compaction（上下文压缩）可靠性** | #15533、#39291、#40614、#49414 | V2 `SessionV2.compact` 当前为 stub；auto/manual 模式均存在"误判 finish_reason → 死循环/重试风暴"风险，是当前头号稳定性痛点。 |
| **🤖 多 Provider 兼容** | #51928、#52269、#53426、#48180、#45359 | OpenAI / GitHub Copilot / Kimi K3 / DeepSeek / Gemini 均出现边缘 case，provider 适配矩阵仍不完整。 |
| **🔐 企业 / 安全 / 合规** | #39875、#40945、#52734 | 隐私条款、deny 规则匹配、代理认证是企业用户最关心的三件事。 |
| **🪟 Web / Mobile UX** | #40502、#49928、#52883、#53474 | 实时刷新、滚动性能、移动端列表滚动——V2 Web 体验打磨进入密集期。 |
| **🛠 工具链 & Git 集成** | #52953、#52953、#40945、#33749 | snapshot、permission.path 匹配、子命令误触发 `npm install` 等工具链细节问题。 |
| **🌐 生态 & 文档** | #38973、#40649、#40709、#49394 | 会话搜索、CPU 统计、插件目录、本地化——"可观察性 + 可发现性"诉求强烈。 |

---

## 👨‍💻 开发者关注点

1. **死循环 / 请求风暴是最严重的稳定性类痛点** — 多个 Issue（#15533、#39291、#49414、#49042）都聚焦在"agent 步骤无法终止"上。开发者普遍要求：**显式的 step 上限、可观测的 finish_reason 映射日志、以及 fail-closed 的退避策略**，而不是无限注入 `Continue...`。
2. **Provider 边界条件覆盖不足** — `unknown` finish_reason、DeepSeek `reasoning_content` 与 `reasoning_effort` 互斥、Anthropic extended thinking 缓存点位置等细节表明：**抽象层需要把"provider 特有字段"显式建模**，否则不同模型上线即翻车。
3. **隐私与可观察性是付费用户底线** — #39875 49 👍 体现付费群体对"静默修改隐私文案/移除 provider 归属"高度敏感。建议官方建立**隐私变更公告 + CHANGELOG 必填项**机制。
4. **V2 Web UI 体验仍是阻塞项** — 滚动、刷新、移动端兼容性问题集中爆发；多数 PR 来自社区贡献者（kitlangton、opencode-agent[bot]、ykakade），说明官方对 V2 UI 投入不足。
5. **跨平台 / 工具链假设过强** — Git < 2.45、Windows PowerShell、macOS managed config 三件事提示：**对运行环境做 capability detection，而非版本号硬编码**是下一阶段必修课。
6. **生态文档 & 插件可发现性** — 多条 #40xxx 的 PR 反复申请加入"生态插件列表"，说明缺乏**自动收录/分类机制**，社区贡献门槛偏高。

---

> 📊 **数据说明**：本期日报基于 2026-10-06 过去 24 小时内更新的 50 条 Issue、50 条 PR 提炼；评论数与点赞数为 GitHub 当前累计值，非当日新增。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-06

> 数据源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)｜采样窗口：过去 24 小时

---

## 📌 今日速览

**v1.0.4 与 v1.0.3 双版本同日发布**：v1.0.4 引入更灵活的 `--tools`/`--exclude-tools` 模式匹配与 `--no-mcp` 开关，v1.0.3 则补齐 Azure Foundry Chat Completions（含 DeepSeek V4 Pro）支持。社区问题主要集中在 **Provider 兼容性、Token/成本核算精度、Windows 与终端稳定性** 三个方向，整体仍处于 v1.0 适配期的密集修复阶段。

---

## 🚀 版本发布

### v1.0.4 — Tool 过滤与 MCP 控制增强
- `--tools` / `--exclude-tools` 支持 `*` 通配符，可精准按服务器筛选 MCP 工具，例如 `--tools read,codemode,'mcp__radius__*'`
- `--tools` 默认保留 MCP 工具，除非显式以 `mcp__` 开头过滤
- 新增 `--no-mcp`，可单次运行关闭 MCP

### v1.0.3 — Azure Provider 扩展
- `azure` 提供方（原 `azure-openai-responses`）新增 Foundry Chat Completions 支持，首个模型为 `azure/deepseek-v4-pro`
- [更新日志详情](https://github.com/badlogic/pi-mono/blob/v1.0.3/packages/coding-agent)

---

## 🔥 社区热点 Issues（Top 10）

1. **[#4945] openai-codex 连接可靠性问题** — 81 评论 / 👍34
   `gpt-5.5` 在 TUI 中常驻 `Working...`、无任何流式输出与错误信息，唯一恢复方式是 ESC。已在过去数天内反复出现，是当前热度最高的 issue。
   👉 [earendil-works/pi#4945](https://github.com/badlogic/pi-mono/issues/4945)

2. **[#10031] ESC 停止 thinking 后卡在 "Working..."** — 20 评论
   自 v0.84.0 起在不同机器上稳定复现，必须 `CTRL+c` 退出后用 `pi -c` 恢复，疑似与流中断清理路径相关。
   👉 [#10031](https://github.com/badlogic/pi-mono/issues/10031)

3. **[#9361] Windows 下 `settings.shellPath` 被忽略** — 13 评论
   加载任何扩展后 `~/.pi/agent/settings.json` 的 `shellPath` 静默失效，回退到 WSL `System32\bash.exe`，属于跨平台一致性问题。
   👉 [#9361](https://github.com/badlogic/pi-mono/issues/9361)（已在 PR #10538 中修复）

4. **[#9075] Compactor 在高 thinking effort 下必撞输出上限** — 8 评论 / 👍4
   Adaptive Anthropic 模型上 compaction summary 继承会话 thinking level，thinking tokens 计入 `max_tokens`，输出预算 0.8 × reserveTokens ≈ 13k 必然溢出。
   👉 [#9075](https://github.com/badlogic/pi-mono/issues/9075)

5. **[#10074] Anthropic 编辑工具吃掉非 ASCII 字符** — 7 评论
   包含韩文等非 ASCII 文件时，`edit` 调用频繁失败或静默损坏文件（`\uXXXX` 退化为 `\b`/`\f`），已观察三周，涉及 UTF-8 解析鲁棒性。
   👉 [#10074](https://github.com/badlogic/pi-mono/issues/10074)

6. **[#10267] `before_agent_start` 贡献的 prompt 被丢弃并重计费** — 6 评论
   后台通知、plan-mode continue、retry、resume 等无人用户提示的运行都会丢失扩展注入的 `systemPrompt`，且整段 prompt 被重新计费。
   👉 [#10267](https://github.com/badlogic/pi-mono/issues/10267)

7. **[#9980] OpenRouter 成本估算偏差 2-3 倍** — 5 评论
   模型目录始终使用最便宜 provider 的定价，导致 `z-ai/glm-5.3-flash` 等热门开源模型费用严重低估。
   👉 [#9980](https://github.com/badlogic/pi-mono/issues/9980)

8. **[#10470] RPC 会话切换事件重复** — 3 评论
   `new_session` / `switch_session` / `fork` / `clone` 均会向扩展发出两次 `session_start`，会破坏扩展对会话生命周期的假设。
   👉 [#10470](https://github.com/badlogic/pi-mono/issues/10470)

9. **[#10519] Nix 包强制 Node 22 覆盖 PATH** — 2 评论
   `pi` 的 Node 22 路径被加到最前，导致 bash 工具子 shell 中 `node`/`npm`/`npx`/`corepack` 全部被劫持。
   👉 [#10519](https://github.com/badlogic/pi-mono/issues/10519)

10. **[#10272] `read EIO` 被记为崩溃** — 3 评论
    关闭终端/Sleep 后 `process.stdin` 因无 `'error'` 监听，`read EIO` 直接进入 `uncaughtException`，影响稳定退出路径。
    👉 [#10272](https://github.com/badlogic/pi-mono/issues/10272)（PR #10443 已修复）

---

## 🛠 重要 PR 进展（Top 10）

1. **[#10538] 扩展 bash 工具继承会话 shell 设置** — 修复 #9361，跨平台解决 `shellPath`/`shellCommandPrefix` 丢失问题，并跳过 Windows bash 发现中的 WSL 启动器。
   👉 [PR #10538](https://github.com/badlogic/pi-mono/pull/10538)

2. **[#9714] 支持 Azure Foundry Chat Completions** — 已合入 v1.0.3，让 `deepseek-v4-pro` 等 Foundry Chat 部署可在 `azure` provider 下使用。
   👉 [PR #9714](https://github.com/badlogic/pi-mono/pull/9714)

3. **[#10286] 使用 OpenRouter 真实账单成本** — 改用 OpenRouter 在 Usage Accounting 中报告的实际计费金额，解决 #9980 的 2-3 倍偏差。
   👉 [PR #10286](https://github.com/badlogic/pi-mono/pull/10286)

4. **[#10521] 为 NVIDIA NIM 内联 `$ref` 工具 schema** — 修复 `nemotron-3.5-super-vl-preview` / `qwen3.8-flash-next` 在 `validateToolArguments` 中被拒绝的问题。
   👉 [PR #10521](https://github.com/badlogic/pi-mono/pull/10521)

5. **[#10443] 将 stdin 死终端错误路由至 `emergencyTerminalExit`** — 解决 #10272，避免 `read EIO` 被误判为崩溃。
   👉 [PR #10443](https://github.com/badlogic/pi-mono/pull/10443)

6. **[#10530] 系统提示中标注工具搜索函数需 await** — codemode 的 `searchTools` 常因 LLM 漏写 `await` 返回空，导致后续遍历 `ALL_TOOLS` 浪费 token。
   👉 [PR #10530](https://github.com/badlogic/pi-mono/pull/10530)

7. **[#10503] 跨用户 bash 输出块保留 ANSI 状态** — `ESC[0m` 被分块切断时不再退化为文本 `m`，同时影响流式与持久化结果。
   👉 [PR #10503](https://github.com/badlogic/pi-mono/pull/10503)

8. **[#10495] 消费 mintty OSC 4 应答** — 修复 mintty 在缺 OSC 引导符时 palette 字节与 BEL 串入编辑输入的问题，补全解析器与 stdin 缓冲回归测试。
   👉 [PR #10495](https://github.com/badlogic/pi-mono/pull/10495)

9. **[#10533] `pi-durable` 拒绝成环等待** — 修复 #10411，让成环的 wait 在闭合环的那一步直接报错，避免永久挂起。
   👉 [PR #10533](https://github.com/badlogic/pi-mono/pull/10533)

10. **[#10410] 暴露 thinking budget 与 websocket 超时配置** — 在 `pi-durable` 的 `ConversationStreamOptions` 中补齐缺失的 `thinkingBudgets` / `websocketConnectTimeoutMs`，对齐旧 SDK 行为。
    👉 [PR #10410](https://github.com/badlogic/pi-mono/pull/10410)

---

## 📈 功能需求趋势

| 方向 | 代表性讨论 | 关注度 |
| --- | --- | --- |
| **Provider / 多模型适配** | Azure Foundry Chat、Anthropic OAuth effort level、NVIDIA NIM `$ref` schema、OpenRouter 真实成本、Gemini 3.7 Flash thinking level | 🔥🔥🔥🔥 |
| **Windows 与终端兼容性** | shellPath 丢失、mintty OSC、ANSI 切分、Windows skill 大小写冲突、Nix 包 PATH 覆盖 | 🔥🔥🔥🔥 |
| **流式 / 取消 / 错误恢复** | "Working..." 卡死、stdin EIO、abort 测试覆盖、RPC session_start 重复 | 🔥🔥🔥 |
| **MCP 与扩展系统** | 内置 MCP shutdown 时机、工具模式匹配、`before_agent_start` prompt 注入丢失、`systemPromptOptions.forceSystemPrompt` 提升缓存失效率 | 🔥🔥🔥 |
| **`pi-durable` 框架增强** | 等待环检测、thinking budget 暴露、entry cutoff、progress commit 可配置 | 🔥🔥 |
| **可观测性与配置管理** | 配置 schema 发布（#9880）、工件校验统一（#10197）、managed installs 剪枝 | 🔥🔥 |
| **TUI / 编辑体验** | 多行语法高亮、ANSI 状态保留、codemode 工具描述完善 | 🔥 |

---

## 💬 开发者关注点

- **真实成本与计费透明度**：#9980 与 PR #10286 显示，社区强烈要求用上游返回的实际账单替换静态目录估算，OpenRouter/Multi-provider 场景尤为迫切。
- **非 ASCII / Unicode 鲁棒性**：韩文文件名场景下 `edit` 工具的参数解析问题已持续三周，被多位开发者反复提及，需要更高优先级的修复。
- **v1.0 适配期的回归控制**：v1.0.3 引入 `strict: true` 触发 Anthropic `tools.0.custom.strict: Extra inputs are not permitted`（#10502），`forceSystemPrompt` 投射把 `toolsAdded` 抬到请求前缀导致 prompt-cache miss（#10489），说明 v1.0 仍处于密集打磨期。
- **跨平台一致性**：Windows / WSL / mintty / Nix / zsh 等多平台细节持续暴露问题，扩展系统对会话 shell 设置的传递（#9361 → #10538）成为共识性改进。
- **测试与 fixture 卫生**：近期出现多起 `untriaged` 关闭的测试夹具缺陷（zsh login-shell、host-key 并发、文件监视帧超限、abort helper 提前返回等），提示 v1.0 周边测试基础设施需要同步加固。
- **AI 辅助贡献的可追溯性**：PR #10470 明确标注由编码代理起草、作者复核，呼应仓库 `CONTRIBUTING.md` 中的 AI 辅助贡献规范，社区对过程透明度要求在提升。

---

*日报基于 GitHub 公开数据自动汇总，仅供参考。详细讨论请前往各 Issue / PR 评论区。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-06**

---

## 📌 今日速览

Qwen Code v0.25.0 正式发布，重点引入本地 workspace-agent 协作能力并同步推出 Desktop 客户端更新；社区当前最热的讨论仍围绕 **Managed Agent 双路径架构**（#12380，46 条评论）与 **Kubernetes 工具运行时**交付门禁（#13395），同时多个内存代理（Memory Agent）的预算与凭据相关 P1/P2 问题集中浮现，Web Shell 的会话取消恢复与计划审批渲染也进入密集修复窗口。

---

## 🚀 版本发布

### v0.25.0 已发布
- **CLI v0.25.0**
  - ✨ 新增功能：`feat(agents): add local workspace-agent collaboration`（#11206），在普通聊天会话中通过 `@-mention` 即可让子 Agent 内联作答，对应 PR #13467 已落地会话中心多 Agent 协作
  - ⚙️ SDK TypeScript v0.1.18 同步随 CLI v0.25.0 发布
  - ✅ 无破坏性变更

- **Desktop v0.25.0**
  - 🛠 修复：`fix(serve): preserve session creation failure diagnostics`（#12331）
  - ✨ 新增：`feat(sdk-java): Add managed runtime`
  - ⚠️ 注意：v0.25.0 中微信集成被报告回归（#13480，提示 "please upgrade WeChat interface version in OpenClaw"）

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 关键看点 |
|---|-------|------|---------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) Managed Agent 双路径架构提案 | 46 | 当前最高热度提案，定义 Managed Agent 阶段化交付，关联会话持久所有权、Workspace 绑定与可恢复工具执行 |
| 2 | [#13395](https://github.com/QwenLM/qwen-code/issues/13395) Kubernetes 工具运行时跟踪 | 14 | 跟进 PR #13289，记录 K8s 运行时的剩余实现、跨平台与验收门禁 |
| 3 | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) 依赖 CVE 审计失败 | 10 | GitHub Actions 计划任务失败，需关注供应链安全 |
| 4 | [#8097](https://github.com/QwenLM/qwen-code/issues/8097) 后台 Agent 协作缺陷 | 10 | 并发 Explore 子 Agent 重复工作、`send_message` 非交互异常 |
| 5 | [#11587](https://github.com/QwenLM/qwen-code/issues/11587) PR #11562 延期评审项 | 8 | 自动修复循环将跨域问题延后跟踪 |
| 6 | [#13111](https://github.com/QwenLM/qwen-code/issues/13111) Android Phase 2 跟进 | 7 | 麦克风/可访问性/下载相关回归覆盖与导出 UX |
| 7 | [#6710](https://github.com/QwenLM/qwen-code/issues/6710) ACP 取消与异常中断区分 | 6 | 恢复后无法区分用户主动取消与进程异常，P1 优先级 |
| 8 | [#10692](https://github.com/QwenLM/qwen-code/issues/10692) XML 工具调用方言泄漏 | 6 | `<tool_call>` 方言未被识别回退，与系统提示教导的格式直接冲突 |
| 9 | [#13458](https://github.com/QwenLM/qwen-code/issues/13458) `memory.agentMaxTurns` 被硬编码 | 5 | 用户作用域 dream 忽略配置（硬编码 8），与项目作用域行为不一致；已衍生 #13465/#13477/#13490 |
| 10 | [#12424](https://github.com/QwenLM/qwen-code/issues/12424) 子 Agent 工具策略不可见 | 5 | `resolveBundledReferenceRoute` 仅看会话级输入，denied 子 Agent 拿到无法解析的指针 |

**其他值得关注：**
- [#13480](https://github.com/QwenLM/qwen-code/issues/13480) 微信集成在 v0.25.0 回归（P1）
- [#13477](https://github.com/QwenLM/qwen-code/issues/13477) 仓库 `.qwen/settings.json` 可篡改 memory 代理预算（安全）
- [#13487](https://github.com/QwenLM/qwen-code/issues/13487) 已取消的 tool-profile 回合重新进入后续模型上下文

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 关键内容 |
|---|----|---------|
| 1 | [#13467](https://github.com/QwenLM/qwen-code/pull/13467) `feat(agents): session-centric multi-agent collaboration` | 用会话中心多 Agent 协作取代旧的 thread/ticket 模型，@-mention 触发内联回答，关联 #11206 |
| 2 | [#13291](https://github.com/QwenLM/qwen-code/pull/13291) `feat(managed-agent): 本地 Runtime 工具结果持久化 (M5b)` | 所有本地 Managed 会话的 Runtime 工具结果持久化到会话同一权威源，支持幂等重放 |
| 3 | [#13354](https://github.com/QwenLM/qwen-code/pull/13354) `feat(managed-agent): 可靠删除 ACTIVE Workspace (L3)` | 在 WebShell 公开路由上提供 idle ACTIVE 会话的可恢复删除，SessionEnd/Delete 强校验 |
| 4 | [#13166](https://github.com/QwenLM/qwen-code/pull/13166) `feat(managed-agent): hosted-workspace /2 profile 支持 glob` | 通过 `hosted-workspace-files/2` 与 `hosted-workspace-shell/2` 接入只读文件发现；profile 切换被 `409` 拒绝 |
| 5 | [#13247](https://github.com/QwenLM/qwen-code/pull/13247) `feat(managed-agent): W2 工作目录可控变更` | 创建者可在同一 Workspace 内对已绑定 Session 的相对目录执行幂等迁移 |
| 6 | [#13260](https://github.com/QwenLM/qwen-code/pull/13260) `feat(managed-agent): W1c 离线 Workspace 迁移` | 在受信 Linux 主机上完成 W1b 私有离线迁移并条件提升挂载版本 |
| 7 | [#13219](https://github.com/QwenLM/qwen-code/pull/13219) `fix(managed-agent): 异步重试回路终态化` | 所有 managed-agent 异步重试回路设上限并终态化，避免永久卡死 |
| 8 | [#13462](https://github.com/QwenLM/qwen-code/pull/13462) `fix(core): honor memory.agentMaxTurns in user-scoped dream` | 修复 #13458，将 `config.getMemoryAgentMaxTurns()` 透传到用户作用域 dream |
| 9 | [#13466](https://github.com/QwenLM/qwen-code/pull/13466) `fix(memory): 暴露背景内存代理停止原因` | 将 "Failed to process /dream: MAX_TURNS" 替换为人类可读错误（关联 #13465） |
| 10 | [#13293](https://github.com/QwenLM/qwen-code/pull/13293) `fix(cli): 设置文件原子替换时保留权限位` | 在严格 umask 下保留既有 POSIX 权限位，排除 setuid/setgid/sticky |

**其他实用修复：**
- [#13454](https://github.com/QwenLM/qwen-code/pull/13454)（已合并关闭）扩展 Git 客户端固定 `GIT_TERMINAL_PROMPT=0`，**修复 #13447 卡鉴权提示的体验问题**
- [#13488](https://github.com/QwenLM/qwen-code/pull/13488) Web Shell 取消未产生任何内容的 prompt 时把文本、图片、文件、标签全部退回编辑器
- [#13494](https://github.com/QwenLM/qwen-code/pull/13494) 关闭原生 LSP 客户端未实际支持的动态注册能力声明（修复 #13491）
- [#13065](https://github.com/QwenLM/qwen-code/pull/13065) Windows 独立更新器改用 core 的 `yauzl` 解压，规避 PowerShell 受限语言模式
- [#12960](https://github.com/QwenLM/qwen-code/pull/12960) OpenTUI 斜杠命令改用预派发空闲状态 + 实时 streaming 检测，避免自报 busy

---

## 📈 功能需求趋势

1. **Managed Agent 多代理协作成为主线**
   围绕 #12380 提案，配套 PR #13166/#13291/#13354/#13247/#13260/#13219 集中落地，标志 Qwen Code 正从单 CLI 工具演化为具备 Workspace/会话绑定、迁移、可恢复执行的 Agent 托管平台。

2. **Memory Agent 子系统被密集审计**
   #13458/#13465/#13477/#13490/#13462/#13466 形成一个小家族，主题包括：用户作用域与项目作用域行为不一致、错误信息暴露内部 token、Workspace 范围内设置可被仓库覆盖（安全隐患）、五个后台 Agent 共享单一 budget key。

3. **Web Shell / Desktop 体验细节打磨**
   计划审批 Markdown 渲染（#13340）、取消恢复后渲染异常（#13474/#13473 token 显示 `1000k` 而非 `1.0M`）、会话取消重放（#13488）、side tasks in secondary workspaces（#13468）形成 UI/UX 修复潮。

4. **LSP、XML 工具调用与扩展系统的可靠性**
   #10692/#13492 涉及 `<tool_call>` 方才解析；#13491/#13494 是 LSP 能力声明与实现不一致；#12183 引入 `--managed-extensions` 让部署方集中分发扩展。

5. **跨平台分发与运行时**
   Kubernetes 运行时进度（#13395）、Android Phase 2（#13111）、Windows 更新器去 PowerShell（#13065）三线并进。

---

## 👨‍💻 开发者关注点

1. **取消与恢复语义模糊** 是最高频痛点：#6710、#13463、#13487、#12664、#13478 都集中在「取消后状态归属不清」「session-busy 标记错位」「cancelled turn 被后续模型上下文误用」等问题。#13478 专门为此新增不变量固定测试，社区希望把"取消意图"做成 first-class 信号。

2. **安全/凭据边界正在被放大审视**
   - #13477 揭示克隆仓库可通过 `.qwen/settings.json` 解除内存代理的轮次与超时上限
   - #13122（已关闭）曾在自评审中暴露 agent host 重新注册留下旧凭据
   - #13078 提醒 CI 周期 CVE 审计失败需关注

3. **内存/会话/工具执行的可恢复性**
   M5b（#13291）、L3（#13354）、W1c/W2（#13260/#13247）等里程碑都强调「durable / idempotent / authoritative」三原则，开发者希望 Managed Agent 在崩溃后能精确恢复而非"尽量恢复"。

4. **配置粒度不足的反复呼声**
   #13490（per-agent budget keys）、#13458（配置被硬编码覆盖）、#13477（仓库覆盖用户设置）、#13432（服务端 context ceiling 被丢弃退回估算窗口）—— 社区对"配置在哪里生效、谁可以覆盖"提出更精细诉求。

5. **DX 小细节密集反馈**
   token 单位格式化（#13473/#13474）、JSONL 读取越界（#13485）、模糊编辑吃掉空行（#13483）、扩展 Git 客户端卡鉴权（#13447）、POSIX Shell 取消后僵尸进程（#13441）、Shell 模式并发回合（#12664）—— 大量"看似微小但高频"的体验问题反映开发者对 CLI/工具链稳定性的高期待。

---

> 📅 数据来源：GitHub `QwenLM/qwen-code` 仓库，时间窗口为 2026-10-05 至 2026-10-06。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期**：2026-10-06

> 📌 数据说明：本期数据汇总自 `Hmbown/DeepSeek-TUI` 关联仓库（约 50 条 Issue、42 条 PR 过去 24 小时更新）。

---

## 一、今日速览

今天最核心的进展是 **v0.10.1 收尾** 与 **TUI 巨型 crate 分解** 双线推进：Hmbown 合并了 0.10.1 集成 PR #6815，并开启 follow-up #6846 处理 Windows LPAC、截图拖拽、Shell 交接等遗留项；EPIC-005（CodeWhale TUI crate 分解）保持高位活跃，31 条评论持续推进。同时，社区 bot `7jrxt42BxFZo4iAnN4CX` 在昨日一次性抛出了一组基于 `main@384439634` 静态审计的 hardening backlog（#6553–#6561），形成一波"系统性体检"型讨论。

---

## 二、版本发布

过去 24 小时无新版本发布。**v0.10.0** 已于 09-22 发布，**v0.10.1** 处于规划/收尾阶段（见 #6094 / PR #6846）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 为什么重要 |
|---|---|---|---|---|
| 1 | [#5316](https://github.com/Hmbown/DeepSeek-TUI/issues/5316) | **EPIC-005: CodeWhale TUI Crate 分解（Umbrella）** | 31 | 当期热度最高的 umbrella issue，FEAT-027 已通过 Draft PR #6832 落地 `/permissions` 与 `/status` 的共享命令 Shape，是 TUI 单体 crate 解构的主线。 |
| 2 | [#5586](https://github.com/Hmbown/DeepSeek-TUI/issues/5586) | **分解巨型文件：lib.rs(18.7k) / config.rs(12.3k) / client.rs(11.1k) / runtime_threads.rs(9.3k)** | 8 | 与 EPIC-005 联动，明确 C09 拆分计划下的四个核心巨型文件，触及 Engine 核心路径。 |
| 3 | [#6094](https://github.com/Hmbown/DeepSeek-TUI/issues/6094) | **v0.10.1 — 收尾 0.10.0 未完成项** | 7 | 维护者亲自维护的发布规划帖，是 v0.10.1 一切 PR 的"调度面板"。 |
| 4 | [#6139](https://github.com/Hmbown/DeepSeek-TUI/issues/6139) | **App-server：完成 Runtime client 转换与验收** | 3 | 标记 `/tool` 路径下本地 Runtime/default 仍待清理，HTTP/proxy 路径已切到真实 Runtime。 |
| 5 | [#6145](https://github.com/Hmbown/DeepSeek-TUI/issues/6145) | **Command contract：完成 FEAT-02x 适配或折叠 crates/command-contract** | 3 | `commands/` (~61k) 与 `command-contract` (~6.5k) 的最后整合，关乎命令层是否真正"Shape-only"。 |
| 6 | [#6034](https://github.com/Hmbown/DeepSeek-TUI/issues/6034) | **TUI 分解卡在 `crate::config`：128 模块中 118 仍归一组件（约 72.7 万行）** | 2 | 用数据说话——TUI crate 在 0.9.13 减少了约 1.6 万行但仍巨大，揭示 config 仍是最大阻力点。 |
| 7 | [#4166](https://github.com/Hmbown/DeepSeek-TUI/issues/4166) | **架构 D-2：统一 ModelRegistry 与 RouteResolver** | 2 | 长期挂载的架构债，影响路由/解析/快照一致性。 |
| 8 | [#6827](https://github.com/Hmbown/DeepSeek-TUI/issues/6827) 🔒 | **Windows npm 安装：杀 `node.exe` 立即终止 Codewhale（无清理）** | 2 | 已关闭，但催生了 #6871 的安全闸门缺陷，是 Windows 体验的关键修复。 |
| 9 | [#6872](https://github.com/Hmbown/DeepSeek-TUI/issues/6872) 🆕 | **UI tool-hang 看门狗在 `request_user_input` 上 600s 后误杀 turn** | 0 | 今日新增，明确区分于 #6003 / #6275 / #6511（已闭），指向 UI ↔ Runtime 超时协商缺陷。 |
| 10 | [#6871](https://github.com/Hmbown/DeepSeek-TUI/issues/6871) 🆕 | **Windows 安全闸门误拒 `Stop-Process`，阻塞其推荐的所有权进程停止** | 0 | 今日新增，紧接 #6827 修复后的二次缺陷，安全策略颗粒度过粗。 |

**社区反应**：讨论集中于"清理与统一"——既要解巨型模块，又要让命令/权限/状态等关键路径走向"Shape 契约 + 派发分离"的双层架构。Windows 一类问题被多次串成因果链（#6827 → #6871 → #6846）。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 标题 | 状态 | 要点 |
|---|---|---|---|---|
| 1 | [#6815](https://github.com/Hmbown/DeepSeek-TUI/pull/6815) | **0.10.1 集成：Engine 收敛、TS 适配审阅、Ratatui UX** | 🔒 CLOSED | 本次最重要的"地基 PR"：单一 Rust Engine 接管执行、提供商身份、权限、事件、会话、存储、计费；ACP、子代理、递归 RLM 共用同一 turn 路径。 |
| 2 | [#6846](https://github.com/Hmbown/DeepSeek-TUI/pull/6846) | **0.10.1 follow-up：Windows LPAC、截图拖拽、Shell 交接、错误标签、plugin doctor** | 🟢 OPEN | v0.10.1 收尾面板，逐项验证的 checklist 式合并（canonical 路径对比、图像落地、handoff）。 |
| 3 | [#6817](https://github.com/Hmbown/DeepSeek-TUI/pull/6817) | **runtime-api：读取单次 tool 调用的真实变更（基于快照）** | 🟢 OPEN | 给客户端"这次 shell 命令改了哪些文件"的能力——补齐了 `metadata.mutation` 只覆盖文件工具的盲区。 |
| 4 | [#6869](https://github.com/Hmbown/DeepSeek-TUI/pull/6869) | **runtime-api：`GET /v1/skills/{name}` 提供技能正文** | 🟢 OPEN | 技能 = 它的 SKILL.md 正文。新路由补齐"TUI 能用、API 不能用"的缺口（`source` / `invocation` / `aliases` / `bundled_tier` / `enabled` 一并返回）。 |
| 5 | [#6849](https://github.com/Hmbown/DeepSeek-TUI/pull/6849) | **runtime-api：把动态取消通过 SSE 兼容流投出去** | 🔒 CLOSED | `approval.decided` + `cancelled:true` 区分"无人应答"与"拒绝"，解决中断态下的歧义。 |
| 6 | [#6850](https://github.com/Hmbown/DeepSeek-TUI/pull/6850) | **tools：在 schema 中披露 `agent wait` 的超时上限** | 🔒 CLOSED | 30s 默认、最多 120s，配合 `timed_out:true` 一起返回，避免 turn 在静默等待中堆积。 |
| 7 | [#6870](https://github.com/Hmbown/DeepSeek-TUI/pull/6870) | **models/tui：解析快照模型 id、探测自定义提供商目录** | 🔒 CLOSED | 在 DeepSeek V4 这类自定义 OpenAI 兼容网关上修复：`deepseek-v4-pro-0813` / `-flash-vision` 不再回退到 128K 未知 shape。 |
| 8 | [#6860](https://github.com/Hmbown/DeepSeek-TUI/pull/6860) | **search：Bing 与 DuckDuckGo 抓取尊重配置 locale** | 🟢 OPEN | 与 Firecrawl/Serply/SearXNG 行为对齐，避免地区化查询静默返回错误区域的结果。 |
| 9 | [#6867](https://github.com/Hmbown/DeepSeek-TUI/pull/6867) | **orcarouter：OAuth 2.0 + PKCE 接入 + 实时 chat 目录** | 🟢 OPEN | 给 OrcaRouter 用户第二种凭证入口（浏览器登录），并补齐实时模型目录。 |
| 10 | [#6863](https://github.com/Hmbown/DeepSeek-TUI/pull/6863) | **client：非流式模型请求用 retry-aware envelope 加总超时** | 🔒 CLOSED | 修了共享客户端无总超时的隐患：网关 429 + 长 `Retry-After` 不再无限挂住调用方。 |

> 另有多项 CLOSED PR 集中处理"超时/边界/收割"问题：#6855（chat-completions 代理超时）、#6854（pandoc 同步命令收割）、#6856（工具描述与实际审批/平台行为对齐）。

---

## 五、功能需求趋势

从近 24 小时 Issue/PR 看，社区关注的方向清晰收敛到以下六条：

1. **架构解耦与模块化（最热）**  
   - EPIC-005 巨型 crate 拆解、FEAT-02x 命令契约统一、ModelRegistry ↔ RouteResolver 合并，反映项目进入"硬化 + 瘦身"阶段。

2. **Runtime API 能力补齐**  
   - 单次 tool 变更归因（#6817）、技能正文暴露（#6869）、approval 取消语义（#6849）、agent wait 超时披露（#6850）——把 Engine 的真实状态向客户端透出。

3. **Windows 平台一致性**  
   - LPAC、截图拖拽、Shell 交接、Shell 安全闸门（#6827/#6871/#6846）——围绕 npm 安装与权限边界持续打磨。

4. **可靠性 / 安全 hardening 浪潮**  
   - 一次性提交的静态审计 issue（#6553 同步/阻塞、#6554 未限速读、#6555 持久化非原子、#6556 重放无幂等键、#6557 TOCTOU、#6558 子进程清理、#6559 吞错放行、#6560 资源限额）——系统级体检进入分项处理期。

5. **决策/性能优化**  
   - Decision Gate 加速例行决策（#6603）、Inline provider 错误帧绕开重试预算（#6795）——降低"小问题触发大模型"的成本与失败率。

6. **模型与提供商覆盖**  
   - DeepSeek V4 快照 id 解析（#6870）、OrcaRouter OAuth 2.0 + PKCE（#6867）、DeepSeek TUI 自身的第三方网关适配——Provider 矩阵正在横向扩展。

---

## 六、开发者关注点（痛点与高频需求）

- **巨型文件与"分解疲劳"**：`lib.rs` 18.7k、`config.rs` 12.3k、`client.rs` 11.1k、`runtime_threads.rs` 9.3k；`crate::config` 仍占 TUI crate 72.7 万行（#5586、#6034）。模块边界共识已成为下一阶段交付瓶颈。
- **超时/重试语义不统一**：`/v1/chat/completions`、pandoc、非流式模型调用等多个点都补"超时上限"或"重试预算"（#6855、#6854、#6863、#6795）。共享客户端缺乏统一 envelope，是反复出现的事故模式。
- **Windows 安全策略过粗**：#6827 的"杀掉 node.exe 即整体崩溃"靠 #6871 的安全闸门补救，但闸门颗粒度过粗反成新障碍，需要更细的"按 PID/所有权"判定（#6871 提议方向）。
- **UI 与 Runtime 超时未协商**：`request_user_input` 600s 看门狗误杀 turn（#6872），暴露 UI ↔ Engine 在长阻塞工具上的协议缺口。
- **审计 backlog 体量大**：#6553–#6561 一连串静态审计 issue 几乎覆盖所有子系统（同步 IO、持久化、并发、重试、生命周期、放行路径、限额、本地化）。开发者急需"可执行优先级 + 验收标准"。
- **诊断信号缺失**：#6603（Decision Gate 意图）、#6603/#6795（首帧错误）、#6872（误杀）都指向——"系统在做什么、为什么失败、还要等多久"对人和对模型都不透明。

---

*日报基于过去 24 小时 GitHub 动态生成。链接均为仓库内 issue/PR 直链。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*