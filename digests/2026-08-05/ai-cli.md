# AI CLI 工具社区动态日报 2026-08-05

> 生成时间: 2026-08-05 01:55 UTC | 覆盖工具: 9 个

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

# 2026-08-05 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

当前 AI CLI 工具生态已从"模型驱动的聊天终端"演化为**多供应商、多运行时、多协议的多极战场**。8 款主流工具在 24 小时内共推进了 **9 个版本/集成列车**、**80+ 条 Issues** 与 **70+ 条 PR**，呈现出三大共性张力：**Agent 可靠性遭遇长上下文天花板**（Kimi 500K、Claude、DeepSeek 1M 128K 压缩、Codex 进程雪崩）、**安全漏洞集中爆发**（Gemini shell 注入 GHSA-wpqr-6v78-jr5g、Claude worktree 隔离、Qwen 凭据净化器反成泄漏器）、**协议层趋于收敛但实现各异**（MCP/ACP 在 Codex、Gemini、Copilot、Qwen、Kimi、DeepSeek 同时推进）。与此同时，**供应商解耦**已从"加分项"变为"生存线"——SGLang/本地 OpenAI 端点（Gemini）、Bedrock 远程压缩（Codex）、BYOK（Copilot）、Kimi/MiMo 接入（Qwen）、OpenRouter 风格网关（Pi）共同印证了同一趋势。

---

## 2. 各工具活跃度对比

| 工具 | Releases | 热点 Issues | 重要 PRs | 头部 Issue 关注度 | 当日定位 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.222（安全加固） | 10 | 10 | #62466 ⭐20 / 💬30 | 安全/稳定性修复日 |
| **OpenAI Codex** | 4 个 alpha（v0.147.0 系列） | 10 | 10 | #11023 ⭐**917** / 💬198 | **单日最高社区热度** |
| **Gemini CLI** | 无 | 10 | 10 | #22323（P1，💬12） | 安全加固 + Agent 可靠性 |
| **GitHub Copilot CLI** | v1.0.79-1（含 BREAKING） | 10 | 2 | #1504 💬8 / 👍23 | 破坏性迁移 + 长尾需求 |
| **Kimi Code CLI** | 无 | 6 | 3 | #1282 👍**24** / 💬12 | ACP 协议 + 长会话 |
| **OpenCode** | v1.18.13 | 10 | 10 | #16017 👍**126** / 💬29 | **单日最高点赞数** |
| **Pi** | 无 | 10 | 10 | #6768 👍18 / 💬19 | 架构升级（Harness v2） |
| **Qwen Code** | v0.21.5 + v0.21.6-preview.0 | 10 | 10 | #8102 💬17（架构提案） | 可信 Agent 运行时提案 |
| **DeepSeek TUI** | v0.9.4 集成列车中 | 10 | 10 | #5249（Epic，4 子议题） | 构建性能 + Runtime API 化 |

> **观察**：Codex 与 OpenCode 的头部 issue 互动量（917⭐、126👍）显著高于其他工具，但 PR 活跃度上 Qwen/Codex/Pi/DeepSeek TUI 并列第一梯队，反映"开发者主导型"工具与"用户主导型"工具的分野。

---

## 3. 共同关注的功能方向

### 3.1 Windows / WSL2 / TUI 平台稳定性（覆盖 7/8 工具）

| 工具 | 代表性问题 |
|---|---|
| Claude Code | #81275 Desktop Browser pane 必崩（GPU 0x60C201E）|
| Codex | #33776 / #25453 等 6+ 个 issue 集中报告 PowerShell/WMI 进程雪崩 |
| Copilot CLI | #4328 Ctrl+H 在 WSL2 下被误识别；#4026 Windows 持续崩溃 |
| Kimi Code | #2584 Thai/IME 字符重复；#2587 Windows 异常退出 |
| Pi | #7547 维护者主动征集 Windows 痛点；#6817 find 路径通配失效 |
| Qwen Code | #8519 tmux 闪屏（11 评论）；#8538 Windows 复制按钮失效 |
| DeepSeek TUI | #5229 专门新增 Windows 中文新手指南 |

**共识**：Windows 已从"次要平台"升级为"必须正面解决的体验债"，Codex 团队甚至被建议引入"按需/节流/白名单"采样策略。

### 3.2 Agent / Subagent 可靠性与可观测性（覆盖 6/8 工具）

| 工具 | 关键议题 |
|---|---|
| Kimi Code | #2586 长会话 500K tokens 后重复动作循环（当日关闭） |
| Gemini CLI | #22323 Subagent MAX_TURNS 误报 GOAL；#21409 generalist 挂起 1 小时 |
| Claude Code | #64706 Agent tool 忽略子 agent `effort:` frontmatter |
| OpenAI Codex | #28719 / #34591 / #34700 子 agent 模型继承与面板权限三连击 |
| Qwen Code | #8102 可信 Agent 运行时提案（17 评论，纲领性议题） |
| DeepSeek TUI | #5242 Subagent 中断后通过 followup checkpoint 恢复 |

**共识**：当 Agent 拥有真实写文件能力后，"终止语义、超时回滚、子代理上下文隔离"成为新的可靠性红线。

### 3.3 安全加固（覆盖 5/8 工具，今日高密度）

| 工具 | 关键 CVE / 议题 |
|---|---|
| Claude Code | v2.1.222 修复 worktree 隔离绕过 + PreToolUse hook 绕过 |
| Gemini CLI | GHSA-wpqr-6v78-jr5g shell 变量注入 + A2A OpenID Connect + OAuth 回调泄漏 |
| Copilot CLI | v1.0.79-1 BREAKING 命名变更后旧 key **静默忽略**，从 false 回退到默认开启 |
| Qwen Code | #8136 凭据净化器把含 `@` 的真实密码直接泄漏到 `/status` |
| Pi | #7628 shrinkwrap 锁住 undici/brace-expansion 已知漏洞；#7605 OAuth 错误信息不再泄漏响应体 |

**共识**：维护者已普遍意识到 shell-injection、凭据净化、OAuth 资源泄漏是 P0 风险，但 Copilot 的"静默回退"模式被开发者批评为反模式。

### 3.4 模型供应商解耦 / BYOK（覆盖 6/8 工具）

| 工具 | 解耦路径 |
|---|---|
| Gemini CLI | #28681 支持 SGLang / 本地 OpenAI 兼容端点（P1 PR） |
| Codex | #36981 Bedrock 远程压缩；#36992 ModelsCache 可注入 |
| Copilot CLI | #4196 BYOK 流式 `reasoning_content` 处理 |
| Qwen Code | #8368 新增 Kimi Coding Plan + 小米 MiMo provider |
| Pi | #7610 新增 OpenRouter 风格 LLM Gateway + DevPass provider |
| DeepSeek TUI | 公共 MCP Registry 优先（#5238） |

**共识**：单模型绑定已成竞争劣势，"开箱即用多 provider + 用户可注入缓存"成为新标配。

### 3.5 ACP / MCP 协议层完善（覆盖 6/8 工具）

| 协议 | 代表性推进 |
|---|---|
| **ACP** | Kimi #2364/#2583 模型发现与权限切换；Qwen #8544 JetBrains 任务列表对齐；DeepSeek TUI #5225 ACP server 暴露真实工具调用 |
| **MCP** | Codex #19425/#30408 工具发现层 + 进程泄漏；Gemini #28664 同意提示覆盖 env/cwd/headers；DeepSeek TUI #5238 Registry-first 工具选择 |

**共识**：MCP 已成"暴露层事实标准"，ACP 则成为"IDE/移动端集成层事实标准"，两者分别承载"工具发现"与"会话协议"两条演进线。

### 3.6 跨会话记忆 / Session 管理（覆盖 5/8 工具）

| 工具 | 关键诉求 |
|---|---|
| Kimi Code | #1283 记忆系统（17 条评论，5 个月长尾高活跃） |
| Copilot CLI | #1697 Session Forking（👍**25**，头部旧 issue）；#1947 跨设备同步 |
| Codex | #21079 CLI ↔ Desktop 会话统一 |
| Qwen Code | #8356 abort 后回合不入 transcript；#8493 取消语义不达边界 |
| Pi | #7396 持久化 PiServer backend + JSONL 跨进程锁（架构级 PR） |

**共识**：用户从"功能有无"升级到"行为可治理"，分叉、跨设备同步、abort 语义、checkpoint 恢复成为新刚需。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 多 agent 编排 + Worktree 并行开发 | 企业级开发者、深度 Agent 用户 | 安全边界最严（hook/worktree/PreToolUse 三层防护）；Anthropic 生态绑定 |
| **OpenAI Codex** | 跨平台桌面端 + 多 Provider 接入 | 跨平台重度用户、Pro/Plus 订阅者 | **最高频迭代**（24h 4 个 alpha）；Rust CLI 重写中；Electron-sampler 暴露 Windows 架构缺陷 |
| **Gemini CLI** | 安全优先 + 模型解耦 | 企业 IT、Google Cloud 用户 | 多模型供应商（正在脱绑）；评估基础设施最完善（76 个行为评估、6 个模型版本） |
| **GitHub Copilot CLI** | GitHub 生态 + 企业集成 | GitHub Enterprise 用户、组织级 Agent 采用者 | 与 GitHub Actions/MCP Server 深度绑定；维护节奏保守（24h 仅 2 PR） |
| **Kimi Code CLI** | 超长会话 + ACP 协议扩展 | 长流程 Agent 用户、第三方 IDE 集成方 | **当日即关闭关键长上下文 bug**（响应速度最快）；ACP 模型发现能力领先 |
| **OpenCode** | Provider 无关 + 工具调用语义归一化 | 多供应商切换、跨语言用户 | xAI OAuth RFC 8628 Device Flow 重构；多 Provider `finish reason` 归一化 |
| **Pi** | 轻量 + Harness v2 + Copilot 网关 | 个人开发者、嵌入式场景 | SQLite + JSONL 跨进程锁；OpenRouter 风格 DevPass provider；安全债务清晰（npm audit 缺位） |
| **Qwen Code** | 可信 Agent 运行时 + 多语种本地化 | 国内开发者 + 东亚扩展市场 | 唯一提出"LLM 在信任边界外"架构纲领；韩语/中文 README 同步推进 |
| **DeepSeek TUI** | 大型 Rust workspace + Runtime API 化 | Fleet 托管方、企业级部署 | **架构野心最大**：一次性补齐 memory/MCP/skill/goal/verifier 五大 Runtime API；构建性能已成主要瓶颈 |

---

## 5. 社区热度与成熟度

### 热度梯度

| 梯队 | 工具 | 信号 |
|---|---|---|
| **T1 超高热度** | Codex、OpenCode | 单 issue ⭐900+/👍100+；社区自发达成诉求共识 |
| **T2 高活跃** | Claude Code、Qwen Code、Pi | 10 个热点 issue 持续推进；架构级 PR 频繁 |
| **T3 中等活跃** | Gemini CLI、Copilot CLI、DeepSeek TUI | 议题深度高但单条互动量较低 |
| **T4 早期但响应快** | Kimi Code | 头部 issue 互动中等（👍24），但**当日响应速度最快**（500K bug 当日关闭） |

### 成熟度信号

- **最成熟**：Claude Code（hook/worktree 三层防护体系）+ Qwen Code（trusted agent runtime 提案显示已进入架构自觉阶段）
- **快速迭代**：Codex（24h 4 alpha）+ DeepSeek TUI（v0.9.4 列车冲刺

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**：anthropics/skills 仓库（截止 2026-08-05）  
**样本**：50 条热门 PR + 50 条热门 Issue

---

## 一、热门 Skills 排行

按社区关注度、功能普适性、问题交叉引用综合排序：

| 排名 | PR | Skill 主题 | 热度信号 | 当前状态 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 核心修复** — `run_eval.py` 修复 recall=0%、Windows 流读取、并行 worker | 直接回应 Issue #556（12 评论、7 👍）+ #1169 + #1061，整个 skill 优化闭环目前在对噪声优化 | OPEN |
| 2 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** — 元技能，5 维度质量评分 + 安全审计 | 回应 Issue #492（43 评论，全榜最高）的信任边界焦虑 | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — 排版质量控制（孤行、寡行、编号对齐） | 触及"每个 Claude 生成的文档都受影响"的普遍痛点 | OPEN |
| 4 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 可执行性改进** — 把"开发文档式"指令重写为"单轮可执行"指令 | 经典的"Skill 应当说人话还是说机话"之争的典型样本 | OPEN |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — 机械文件校验 + 4 维推理质量门（v1.3.0） | 与 Issue #1385（推理质量门提案）形成闭环 | OPEN |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** — Testing Trophy、AAA、React 组件测试、Mock 策略 | 开发者最稳定的需求类别之一 | OPEN |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill** — OpenDocument 创建/模板填充/HTML 转换 | 补齐开源/ISO 文档格式最后一公里 | OPEN |
| 8 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** — ISCC-NBS、Munsell、OKLCH/OKLAB/CAM16 色彩空间决策表 | 设计向 Skill 中罕见的"知识型"贡献，覆盖完整色彩体系 | OPEN |

> **观察**：所有 8 个 PR 均为 OPEN 状态，反映 Skills 仓库**合并节奏明显慢于提交节奏**——许多有价值的贡献长期滞留 review。

---

## 二、社区需求趋势

从高评论 Issue 提炼出的需求方向（按热度排序）：

| 议题 | Issue | 评论数 | 需求本质 |
|---|---|---|---|
| **🛡️ 安全信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 社区 Skill 被发布在 `anthropic/` 命名空间下冒充官方 Skill，威胁权限模型 |
| **🏢 组织级共享** | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 企业内 .skill 文件分发链路（下载→Slack→Settings）应简化为直接共享链接 |
| **🧠 长时记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | **9** | `compact-memory`：用符号化表示压缩 agent 持久化笔记，节省上下文 |
| **🔍 推理质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385) | **4** | 三门管线：预任务校准 → 对抗性评审 → 交付验证 |
| **🔌 Skill → MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) | **4** | 将 Skill 暴露为 MCP，让任意客户端通过协议调用（如 `generateAlgorithmArt({...})`） |
| **🪟 Windows / Bedrock 兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) / [#29](https://github.com/anthropics/skills/issues/29) | 3 + 4 | skill-creator 脚本 Unix-first 假设；Skills 在 AWS Bedrock 上的运行路径 |
| **📦 上下文窗口爆炸** | [#1487](https://github.com/anthropics/skills/issues/1487) | **4** | `claude-api` Skill 一次性注入 ~156k tokens，单次工具调用耗尽 context |
| **🤖 Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | **6**（已关闭） | 策略执行、威胁检测、信任评分、审计轨迹等安全模式（已 CLOSED，需另寻路径） |

**趋势归纳**：社区已从"补功能型 Skill 贡献"逐步走向"基础设施型诉求"——**安全、共享、互操作、上下文治理**四大方向取代单一任务型 Skill 成为新焦点。

---

## 三、高潜力待合并 Skills

以下 PR 尚未合并，但因其技术成熟度、与高评论 Issue 的对齐度，落地概率高：

| PR | Skill | 落地价值 |
|---|---|---|
| [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** — 规划工件生命周期管理 | 直接回应 Issue #1417，框架化解决"规划文件只增不减"的积压问题，由 Palo Alto AI Research Lab 提交，具备产品化基础 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 整体修复** | 阻塞性 bug，影响所有后续 Skill 的优化循环，一旦合并将释放大量依赖该管道的贡献 |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 与最高评论 Issue #492 直接呼应，是回应"信任边界"焦虑的最具体解 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit（v1.3.0）** | 与 Issue #1385 提案同源，提供"机械 + 推理"双层质量门，是 AI 输出可信化的关键拼图 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 影响面最广（每个文档生成场景都受益），社区呼声基础大 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | **skill-creator 文件隔离** | 修复并行 eval 污染用户项目的严重缺陷，对多 worker 用户体验影响大 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：在"信任基础设施"（Skill 安全/质量审计、命名空间治理）与"分发互操作"（组织级共享、MCP 化暴露、跨平台兼容）两侧补齐缺口——单一功能型 Skill 已不再是热点，社区正在把 Skills 从"任务附件"重构为"可治理的企业级资产"。**

---

*附注：原数据中 PR 评论数显示为 `undefined`，本报告的"热度"排序综合了 PR 与高评论 Issue 的交叉引用、PR 内容覆盖广度、提交者活跃度与最新更新时间。如需精确 PR 评论数据，建议补充 `gh api` 调用 `pulls.list?sort=comments` 接口。*

---

# Claude Code 社区动态日报
**2026-08-05**

---

## 📌 今日速览

Claude Code 发布 v2.1.222，修复了两个重要的安全/权限相关问题（worktree 隔离绕过、PreToolUse hook 绕过），值得立即升级。同时，社区高频反馈集中在三类问题：**Windows 桌面应用稳定性**（GPU 进程崩溃、WebGPU/MSIX 缺陷连环触发）、**会话与上下文可靠性**（文本块静默丢失、内存泄漏、自动压缩失效）以及**PDF/文档处理的可发现性**（未声明的 poppler 依赖、错误识别加密 PDF）。开发者社区对 Anthropic 的 "稳定性边界" 表达出越来越明显的焦虑。

---

## 🚀 版本发布

### v2.1.222（推荐升级）

本次为安全加固版本：

- **Worktree 隔离修复**：此前 worktree 隔离会话及其子 agent 可以对主 checkout 执行破坏性 git 命令，现已将隔离策略应用于所有会话类型的文件编辑和 Bash 调用。
- **Hook 权限修复**：PreToolUse 的 `auto-allow` hook 在后台 agent 任务中可以绕过工具限制，现已修复。

两个修复都直接关系到"多 agent 工作流的数据安全"，对于依赖 worktree 并行开发的团队建议优先验证。

---

## 🔥 社区热点 Issues

按影响力（评论 + 👍）+ 议题重要性筛选 10 条：

### 1. [#62466 — "Image couldn't be processed" 错误消耗 usage 配额](https://github.com/anthropics/claude-code/issues/62466)
⭐ 30 评论 / 👍 20 — **OPEN**
图片 API 反复失败但仍然消耗用户的 usage limit，影响计费。评论最多，意味着用户对"静默计费"高度敏感。这是本批数据中最受关注的议题之一。

### 2. [#74260 — Assistant 文本块在同一轮内被 thinking 块挤掉](https://github.com/anthropics/claude-code/issues/74260)
⭐ 24 评论 / 👍 15 — **OPEN** ｜ **data-loss** 标签
在使用 adaptive thinking 模型（claude-fable-5）时，文本块后接续的 thinking 会让前面的 assistant text **永不渲染**，且不会写入 transcript JSONL。属于"用户看不到、历史记录也没有"的数据丢失类问题，跨平台复现。

### 3. [#13378 — 2-space 缩进 + 80 列硬换行破坏复制粘贴](https://github.com/anthropics/claude-code/issues/13378)
⭐ 15 评论 / 👍 **72** — **OPEN**
本批数据中 👍 数最高。TUI 输出格式不可配置，给复制粘贴带来极大困扰。该 issue 已存在 8 个月仍 OPEN，反映出"终端输出格式"是长期未解决的 UX 债。

### 4. [#23704 — Read 工具的 PDF 支持依赖未文档化的 poppler-utils](https://github.com/anthropics/claude-code/issues/23704)
⭐ 15 评论 / 👍 19 — **OPEN** ｜ area:packaging
Read 工具声称"可读取 PDF"，实际依赖 `pdftoppm`，但安装后没有自动检测。容器环境（node:22-bookworm 等）默认缺失，触发静默失败。属于"文档与实现不一致"的典型问题。

### 5. [#81275 — Claude Desktop (Windows MSIX) 打开 Browser pane 必崩](https://github.com/anthropics/claude-code/issues/81275)
⭐ 11 评论 / 👍 0 — **OPEN**
GPU 进程稳定退出码 `0x60C201E`，Intel/NVIDIA/WARP 软件渲染下均复现，是 Windows 桌面端最严重的稳定性缺陷。

### 6. [#21378 — 严重内存泄漏：20+ 分钟后冻结，吃满 15GB RAM](https://github.com/anthropics/claude-code/issues/21378)
⭐ 8 评论 / 👍 12 — **OPEN** ｜ perf:memory
WSL2 + Linux 下长时间会话触发，长任务用户受影响明显。已存在超过半年，说明内存管理是底层而非表层问题。

### 7. [#21108 — Claude 在启动时即访问 git origin](https://github.com/anthropics/claude-code/issues/21108)
⭐ 13 评论 / 👍 15 — **OPEN** ｜ area:security
在没有发出任何命令前就向外网发送请求，对离线/隔离环境用户来说是隐私和合规问题。安全标签的存在表明这是正式认可的威胁面。

### 8. [#82536 — `--continue` 无法恢复 `-p` 创建的会话](https://github.com/anthropics/claude-code/issues/82536)
⭐ 7 评论 — **OPEN**
交互式恢复失败是工作流断点，影响 CI/批处理与交互模式混合使用的场景。

### 9. [#64706 — Agent tool 忽略子 agent 的 `effort:` frontmatter](https://github.com/anthropics/claude-code/issues/64706)
⭐ 5 评论 / 👍 5 — **OPEN** ｜ area:agents
子 agent 的 effort 设置被全局 `effortLevel` 覆盖，frontmatter 形同虚设。破坏了 agent 配置的封装性，影响多 agent 编排成本控制。

### 10. [#72248 — Workflow 工具将 JSON args 作为字符串传递](https://github.com/anthropics/claude-code/issues/72248)
⭐ 9 评论 — **OPEN** ｜ platform:macos
违背文档中"verbatim"契约，把对象/数组转成 JSON 字符串后再传给脚本，与官方承诺不一致。

> **社区信号观察**：👉 高赞 issue（#13378, #62466）多围绕"用户可见但被忽视"的问题；👉 高评论但低赞（#81275）则集中在 Windows 平台缺陷，开发者群体已形成共识但修复优先级不高。

---

## 🔧 重要 PR 进展

本批 10 个 PR 整体偏向**仓库维护脚本与插件开发工具链**的小型修复，暂无重大功能合入。

### 脚本与 gh wrapper 修复（来自 RerankerGuo 的集中提交）

- [#83999 — 校验 `gh` wrapper 中带值 flag 的参数完整性](https://github.com/anthropics/claude-code/pull/83999)
- [#83995 — 校验 `--add-label` / `--remove-label` 的值存在性](https://github.com/anthropics/claude-code/pull/83995)
- [#83993 — 阻止 `comment-on-duplicates.sh` 自我重复推荐](https://github.com/anthropics/claude-code/pull/83993)
- [#84003 — 让 duplicate 维护脚本向上传递失败状态](https://github.com/anthropics/claude-code/pull/84003)

### 插件开发工具修复

- [#84004 — 限制 frontmatter 仅解析开头的 YAML 块](https://github.com/anthropics/claude-code/pull/84004)
- [#83992 — `test-hook.sh` 支持断言 hook 期望决策（allow/deny/ask）](https://github.com/anthropics/claude-code/pull/83992)
- [#83990 — 在 `test-hook.sh` 首次使用前检测 `jq` 依赖](https://github.com/anthropics/claude-code/pull/83990)

### 文档与安装

- [#83374 — 文档化 `MessageDisplay` 流式语义](https://github.com/anthropics/claude-code/pull/83374)
- [#83738 — 修复 `claude install` 在 Linux 下创建指向 `%h` 字面量的破损符号链接](https://github.com/anthropics/claude-code/pull/83738)
- [#83890 — 新增 pylint CI workflow](https://github.com/anthropics/claude-code/pull/83890)

> 这些修复反映仓库维护者（RerankerGuo）在清理 issue triage 工具链，反映出 **issue/PR 自动化基础设施正在稳步加固**。

---

## 📈 功能需求趋势

从议题聚类提炼出社区最关注的方向：

| 方向 | 代表性

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-05**

---

## 📌 今日速览

今日 Codex 仓库继续保持高频迭代节奏，Rust CLI 在 24 小时内连续推送 **4 个 alpha 预发布版本**（v0.147.0-alpha.7 / alpha.6.4 / alpha.6.3 / alpha.6.1），主要聚焦内部能力建设。与此同时，**Windows 平台性能问题持续成为社区焦点**——大量 Issue 集中报告 Codex Desktop 在 Windows 上因频繁 PowerShell/WMI 进程快照导致的高 CPU、鼠标卡顿和 WMI Provider Host 飙升，甚至衍生出"系统级输入延迟"的共性问题。PR 侧则集中在**插件/Skill 缓存、工具搜索、MCP 鉴权、ChatGPT 路由**等底层基础设施的优化与重构。

---

## 🚀 版本发布

过去 24 小时发布了 4 个 Rust CLI alpha 版本：

| 版本 | 链接 |
|------|------|
| rust-v0.147.0-alpha.7 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.7) |
| rust-v0.147.0-alpha.6.4 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.4) |
| rust-v0.147.0-alpha.6.3 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.3) |
| rust-v0.147.0-alpha.6.1 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.6.1) |

> 说明：本次提供的 Release Notes 字段为空，详细 changelog 待官方补充。从相邻 PR 推断，本轮 alpha 主要涉及工具搜索、自定义工具延迟加载、并发 exec-server 调度等内部改造。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#11023] Codex Desktop for Linux ⭐917 · 💬198
[Issue #11023](https://github.com/openai/codex/issues/11023)
**为什么重要**：长期呼声最高的 issue，用户要求官方发布 Linux 桌面版以规避 macOS 端的稳定性问题。👍 数遥遥领先，社区态度鲜明，是 Codex Desktop 平台扩展的核心诉求。

### 2. [#25719] macOS `syspolicyd` / `trustd` CPU 与内存失控 ⭐387 · 💬80
[Issue #25719](https://github.com/openai/codex/issues/25719)
**为什么重要**：Codex Desktop 在 macOS 上反复触发 `syspolicyd`/`trustd` 进程雪崩，影响极大；属于"App + 计算机使用"链路的稳定性问题，对 macOS 用户影响面广。

### 3. [#9203] 请恢复 `/undo` 命令 ⭐372 · 💬68
[Issue #9203](https://github.com/openai/codex/issues/9203)
**为什么重要**：用户多次遭遇 Codex 误删/误改未纳入 Git 的文件，强烈呼吁 CLI/TUI 恢复 `/undo`。代表了开发者对**安全回滚能力**的普遍焦虑。

### 4. [#16857] App "思考中" 动画导致高 GPU 占用 ⭐46 · 💬38
[Issue #16857](https://github.com/openai/codex/issues/16857)
**为什么重要**：看似小问题，但揭示了桌面应用未做"轻量空闲态"的能耗优化，对笔记本用户续航有直接影响。

### 5. [#30009] Windows 沙箱下 `apply_patch` 失败 ⭐10 · 💬30
[Issue #30009](https://github.com/openai/codex/issues/30009)
**为什么重要**：Windows 上基础文件编辑功能在沙箱模式下崩溃，是阻塞 Pro 用户的核心 bug，影响正常工作流。

### 6. [#33776] Windows 进程雪崩：`taskkill.exe` / `conhost.exe` 累积上百个 ⭐26 · 💬29
[Issue #33776](https://github.com/openai/codex/issues/33776)
**为什么重要**：典型的进程生命周期管理缺陷，单次会话即可泄漏 287 个子进程，造成 WMI 风暴和 DWM 退化。

### 7. [#19425] 自定义 stdio MCP 服在 Desktop 线程中不暴露工具 ⭐5 · 💬28
[Issue #19425](https://github.com/openai/codex/issues/19425)
**为什么重要**：MCP 是 Codex 的关键扩展机制，发现却无法调用属于**回归级暴露层 bug**，对依赖 MCP 工作流的开发者是阻断性问题。

### 8. [#25453] Windows 每秒 spawn 一个 powershell.exe 进行全进程轮询 ⭐6 · 💬23
[Issue #25453](https://github.com/openai/codex/issues/25453)
**为什么重要**：与 #33776、#29499、#32562、#36025、#36176 同根——是 Windows 端"高频进程轮询"问题的代表性 issue，反映了**遥测/采样策略在 Windows 上缺乏降级机制**。

### 9. [#30408] MCP 进程泄漏：每线程 spawn 后永不清理（9GB+ RSS）⭐6 · 💬22
[Issue #30408](https://github.com/openai/codex/issues/30408)
**为什么重要**：长期运行下 MCP 进程无界累积，属于**资源管理严重缺陷**，桌面端长时间使用必现。

### 10. [#26764] Windows OAuth 登录失败：`auth.openai.com/oauth/token` ⭐0 · 💬18
[Issue #26764](https://github.com/openai/codex/issues/26764)
**为什么重要**：Plus 用户连基础登录都无法完成，是阻断性最强的入门级故障。

> 📎 **共性问题**：#29499、#32562、#34158、#36025、#22912、#36176 均报告 Windows 上 WMI / PowerShell 高频轮询导致系统级卡顿，反映出 Codex Desktop 在 Windows 平台的**遥测与采样实现存在架构性缺陷**，建议 OpenAI 团队统一处理。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#37000] 跨插件加载保持共享 Skill 缓存新鲜度
[PR #37000](https://github.com/openai/codex/pull/37000)
按文件系统和插件快照身份对缓存键进行区分，避免兼容配置间复用陈旧插件数据，并合并并发加载。**有效降低 Skill 冷启动开销**。

### 2. [#36998] 工具搜索支持延迟加载的自定义工具
[PR #36998](https://github.com/openai/codex/pull/36998)
将顶层 freeform 工具纳入 tool-search 索引并标记为延迟加载，序列化为 Responses API `custom` 工具，**直接对应 #19425 暴露的工具发现层缺陷**。

### 3. [#36993] 分页线程支持 `includeTurns` 读取
[PR #36993](https://github.com/openai/codex/pull/36993)
为 `thread/read` 兼容旧式全量历史视图，修复使用分页存储时的客户端回归。

### 4. [#36992] 允许注入模型目录缓存
[PR #36992](https://github.com/openai/codex/pull/36992)
新增公开的异步 `ModelsCache` 契约，允许调用方注入缓存实现，**便于企业级部署和多 Provider 场景做模型元数据管理**。

### 5. [#36990] 移除遗留协作模式变体
[PR #36990](https://github.com/openai/codex/pull/36990)
删除隐藏的 `PairProgramming` 与 `Execute` 模式，简化模式处理仅保留 `Default` 与 `Plan`，**降低提示模板维护成本**。

### 6. [#36987] exec-server 增加并发请求调度（opt-in）
[PR #36987](https://github.com/openai/codex/pull/36987)
新增 `--concurrent-requests <COUNT>`，解决长任务阻塞健康检查与清理的问题。

### 7. [#36986] 为 ChatGPT 请求添加进程级 PSP 路由
[PR #36986](https://github.com/openai/codex/pull/36986)
通过隐藏的 `--psp` 全局开关，将 `oai-chat-psp=true` cookie 附加到 first-party ChatGPT 请求，**为 ChatGPT 服务端实验分流提供可控入口**。

### 8. [#36984] HTTP 客户端支持配置的 ChatGPT Cookie
[PR #36984](https://github.com/openai/codex/pull/36984)
让 `HttpClientFactory` 携带额外 ChatGPT Cookie，并在路由感知客户端间共享。

### 9. [#36981] 为 Amazon Bedrock 启用远程压缩
[PR #36981](https://github.com/openai/codex/pull/36981)
为 Bedrock 启用 provider-owned 远程压缩能力（v1 协议），**为 AWS 用户上下文压缩的稳定性兜底**。

### 10. [#36963] 在 PR 描述中链接 Codex 署名
[PR #36963](https://github.com/openai/codex/pull/36963)
将 PR 署名统一改为 `Generated with Codex`，避免历史未链接署名造成的重复。

> 此外值得关注：**#36989**（保留共享 bundled Skill 缓存）、**#36983**（为可信 staging MCP 服务器保留 ChatGPT 鉴权）、**#36976**（尊重 explicit-only 编排技能）、**#36966**（允许禁用内置图片查看器）都反映出 Codex 在多 Provider、多客户端集成场景下的逐步细化。

---

## 📈 功能需求趋势

从本周高赞 Issue 与高赞 PR 综合提炼，社区关注的方向呈现以下分布：

| 需求方向 | 代表 Issue / PR | 社区声量 |
|----------|----------------|----------|
| **跨平台桌面客户端**（Linux 缺口） | #11023 | ⭐917，极高 |
| **核心交互回滚/安全机制**（`/undo`） | #9203 | ⭐372 |
| **桌面端能耗与渲染优化** | #16857、#23520、#31903 | 持续 |
| **MCP 生态完善**（发现、隔离、鉴权） | #19425、#30408、#36983、#36998 | 高 |
| **多 Provider 支持**（Bedrock、自定义模型） | #31625、#36981、#36992 | 中 |
| **会话/项目历史统一**（CLI ↔ Desktop） | #21079、#36964、#36977 | 中 |
| **多 Agent / Subagent 行为可控** | #28719、#34591、#34700 | 中 |
| **远程协作与 Cookie/路由控制** | #36984、#36986 | 中 |
| **安全与可审计性**（Fence 审计、PSP 路由） | #36979、#36986 | 新增关注 |

> 🔎 **关键洞察**：社区诉求从"能用"逐步过渡到"可控、可治理、可扩展"，**平台支持广度（Linux）、Agent 安全边界（MCP/Subagent）、多云 Provider 一致性**成为下一阶段的主旋律。

---

## 💡 开发者关注点

### 1. Windows 平台稳定性已是当务之急
围绕 PowerShell/WMI 进程轮询，至少 **6 个独立 issue**（#22912、#25453、#29499、#32562、#33776、#34158、#36025、#36176）指向同一根因：Electron-sampler 全进程轮询缺乏降级机制，导致 WMI Provider Host 100% CPU、系统级鼠标卡顿甚至 DWM 退化。建议引入**按需/节流/白名单**采样策略。

### 2. MCP 既是亮点也是痛点
MCP 的进程生命周期管理（#30408）与工具暴露层（#19425）暴露了**资源回收和会话间隔离**的不足；与此同时，#36983（保留 staging MCP 鉴权）、#36998（延迟加载自定义工具）说明团队正在系统化补齐。

### 3. macOS 端的"幽灵进程"问题
#25719 报告 `syspolicyd`/`trustd` 被反复触发，叠加 #10432 引用，**macOS 桌面版可用性仍是付费 Plus 用户的核心痛点**，与 Linux 桌面诉求互为印证。

### 4. 安全回滚成为高频刚需
#9203 `/undo` 的 372 颗 👍 提示：**当 Agent 拥有真实写文件能力后，"撤销/确认/差异预览" 将成为标配**，而非可选项。

### 5. Subagent 的可控性争议
#28719、#34591、#34700 三连击：**子 Agent 不继承父线程模型/推理设置、面板无法打开可写子会话、`spawn_agent` 在 `multi_agent_v2` 下拒收部分模型**——开发者希望"多 Agent ≠ 失控"。

### 6. 跨端历史与外部会话迁移
#21079、#36964、#36977 显示开发者正在把 Codex CLI 与 Cursor 等工具的工作流融合，**会话/项目上下文互通**已从 nice-to-have 变为基本期待。

---

*本日报基于 GitHub `openai/codex` 仓库过去 24 小时的公开数据生成，数据时间为 2026-08-05。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-08-05
**数据来源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日社区聚焦两大主线：**安全性加固** 与 **Agent 可靠性**。多份 PR 针对 GHSA-wpqr-6v78-jr5g 安全漏洞（shell 变量注入绕过）发起修复，同时高优 Issue 显示 Agent 在 MAX_TURNS 后误报"成功"、子代理无限挂起等长期可靠性问题仍是最大痛点。开发者生态侧，**SGLang 与本地 OpenAI 兼容端点支持**正式提上 PR，预示模型供应商解耦正在加速。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|----|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 MAX_TURNS 后误报 GOAL 成功 | 12 | 2 | **P1**：`codebase_investigator` 命中 turn 上限却报告 `status: success` 与 `Termination Reason: GOAL`，掩盖中断事实，影响自动化流水线判断 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无响应挂起 | 8 | 8 | **P1**：默认 generalist 子代理会令整个 CLI 卡死超过 1 小时（点赞 8 次，社区反馈强烈） |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评估健壮性 EPIC | 7 | 0 | **P1**：项目累计 76 个行为评估，覆盖 6 个模型版本；呼唤更细粒度、可追溯的组件级 benchmark |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取 / 搜索 / 代码库映射评估 | 7 | 1 | **P2**：探讨引入 AST 工具降低误读造成的"碎片化读取"与 token 噪声，可能优化 `codebase_investigator` |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills 与 sub-agents | 6 | 0 | **P2**：模型在用户未显式指令时几乎不触发自定义技能，关联触发率需调整 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完成后卡在 "Waiting input" | 4 | 3 | **P1**：核心体验问题，shell 完成却仍显示等待，破坏 trust |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) `browser_agent` 失败恢复与锁释放 | 4 | 0 | **P3**：当前 `fail-fast` 策略在 `sessionMode:'persistent'` 锁定时直接崩溃，需自动接管与锁回收 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Wayland 下 browser subagent 失败 | 4 | 1 | **P1**：Linux 桌面用户受阻，社区需要 Wayland 兼容修复 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 反复重试低价值会话 | 5 | 0 | **P2**：未成功读取的会话会被无限回捞，需要会话状态/TTL |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) `~/.gemini/agents/` 中的 symlink 不被识别为子代理 | 4 | 0 | **P2**：dotfile 管理工作流受损，建议支持符号链接解析 |

> 加分关注：**[#28418](https://github.com/google-gemini/gemini-cli/issues/28418)**（GHSA-wpqr-6v78-jr5g 安全绕过，P1）—— 见下方 PR 进展。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|----|------|
| 1 | [#28691](https://github.com/google-gemini/gemini-cli/pull/28691) 阻断 `$VAR` / `${VAR}` 变量扩展绕过 | OPEN | 修补 `detectBashSubstitution` 与 `detectPowerShellSubstitution` 的不完整检查；为 issue 去重 workflow 加固。修复 [#28418](https://github.com/google-gemini/gemini-cli/issues/28418) |
| 2 | [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) 解包并解析 `gaxios` 流式嵌套错误 | OPEN | 处理 `error.cause.message` 内嵌的 Google API 错误，确保 rate limit / capacity 信号能上抛 |
| 3 | [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) 支持 SGLang 与本地 OpenAI 兼容端点 | OPEN (P1) | **重大里程碑**：CLI 不再绑定 Google 模型，可对接 SGLang/vLLM/其他 OpenAI 兼容服务 |
| 4 | [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) Cloud Workstations 动态 OAuth 重定向 URI | OPEN (P3, security) | OAuth 在 Cloud Workstations VM 内不再 hardcode `localhost`，自动跟随代理地址 |
| 5 | [#28680](https://github.com/google-gemini/gemini-cli/pull/28680) 校验期拒绝 A2A `openIdConnect` 认证 | OPEN (security) | 修复早期阶段未拦截的可疑 A2A OpenID Connect 配置；修复 [#28651](https://github.com/google-gemini/gemini-cli/issues/28651) |
| 6 | [#28678](https://github.com/google-gemini/gemini-cli/pull/28678) 防止 OAuth 回调超时资源泄漏 | OPEN (security) | 集中化 OAuth 回调服务器的资源回收与清理；修复 [#28652](https://github.com/google-gemini/gemini-cli/issues/28652) |
| 7 | [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) MCP 扩展同意提示展示完整服务器配置 | OPEN | 同意/更新比较覆盖 `env` / `cwd` / `headers`，杜绝"静默扩展新权限" |
| 8 | [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) 上下文损坏与配额回退工具响应丢失 | OPEN | 修复 quota fallback / 用户 ESC 中断引发的"历史记录续写"错乱 |
| 9 | [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) `/compress` 重载与配额回退后工具响应丢失 | OPEN (help wanted) | 双重修复：`Failed to load resumed session data` 错误，以及配额触发后的工具响应被吞 |
| 10 | [#28641](https://github.com/google-gemini/gemini-cli/pull/28641) 窄宽度下 ghost text 无限循环修复 | OPEN (help wanted) | 修复 `InputPrompt.tsx` 在 CJK/emoji 终端宽度下死循环；修复 [#19985](https://github.com/google-gemini/gemini-cli/issues/19985) |

**额外关注**：
- [#28690](https://github.com/google-gemini/gemini-cli/pull/28690)（已关闭）：Caretaker Agent 新增 `issue_comment.created` webhook 与 `/caretaker triage` 重新分诊流程。
- [#28530](https://github.com/google-gemini/gemini-cli/pull/28530)：为 Caretaker Agent 引入 LLM-as-a-Judge 评估框架与 Git Worktree 并行 runner。
- [#28677](https://github.com/google-gemini/gemini-cli/pull/28677)（help wanted）：`IdeClient.getInstance()` 加 3 秒超时兜底，避免裸终端 TUI 永远卡在 "Initializing..."。
- [#28639](https://github.com/google-gemini/gemini-cli/pull/28639)：`formatTruncatedToolOutput` 在 `maxChars ≤ 0` 时返回原内容而非错误地用 `String.slice` 负索引膨胀输出。

---

## 📈 功能需求趋势

按 Issue / PR 标签与描述归纳：

1. **🔐 安全加固（高密度）**
   - Shell 命令注入（GHSA-wpqr-6v78-jr5g）、A2A OpenID Connect、OAuth 回调资源泄漏、Cloud Workstations OAuth、Vertex AI 凭据混淆——**本周安全主题集中爆发**。

2. **🧠 Agent 可靠性与可控性**
   - MAX_TURNS 误报、generalist 挂起、subagent 权限回退（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）、symlink 加载、`browser_agent` 锁恢复 —— 围绕 *Agent 可观测性与终止语义* 的呼声最强烈。

3. **🧬 Auto Memory 系统质量**
   - [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) / [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 形成 Memory 系 EPIC：redaction、低信号回退、inbox 校验、日志噪音。

4. **🌐 模型供应商解耦**
   - [#28681](https://github.com/google-gemini/gemini-cli/pull/28681) SGLang/本地 OpenAI 端点 —— 与"避免凭据捆绑"的呼声一致，企业自托管场景正式获官方路径。

5. **🖥️ 终端体验与性能**
   - ghost text 无限循环、终端 resize 闪烁、`terminalBuffer` 编辑器退出损坏 —— 大型命令历史下的渲染瓶颈。

6. **🧰 AST 感知的代码库工具**
   - [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) / [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 推进 `codebase_investigator` 升级方向。

7. **🤖 评估基础设施**
   - [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) + [#28530](https://github.com/google-gemini/gemini-cli/pull/28530)，Caretaker Agent 自身也在引入 LLM-as-a-Judge。

---

## 💬 开发者关注点

整理今日 Issue / PR 文本中重复出现的关键词与诉求：

- **"子代理不可控"**：MAX_TURNS 静默成功、generalist 挂起、browser 子代理在 Wayland 失败、`/bug` 不包含子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）、`/chat share` 看不到子代理轨迹（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）—— 一句话："agent 内部不透明"。
- **"shell / 工具边界需要更严格的安全门"**：GHSA-wpqr-6v78-jr5g 以及后续 A2A / OAuth 系列补丁表明 maintainer 与社区都意识到 shell-injection 是 P0 风险。
- **"Auto Memory 不要自作主张"**：无限回捞低信号会话、缺乏确定性的 secret redaction —— 用户既要"主动记忆"，又要"可审计、可回滚"。
- **"终端基础体验破碎"**：shell 卡死、ghost text 死循环、resize 闪烁、外部编辑器退出后内容损坏 —— 体感级 P1。
- **"技能与子代理不能自动启用"**：用户希望 CLI 在没有显式 `-c agents....` 的情况下也能在合适任务里调用 skills/sub-agents（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。
- **"供应商锁定焦虑"**：Google 服务异常时体验断崖式下降（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)），驱动 SGLang / 本地 OpenAI 端点的需求。
- **"AST 工具是否能省 turn"**：开发者关心"读取整个 2000 行文件 → 失败 → 重新读取特定函数"这类反复拉锯。

---

*本期日报基于 2026-08-04 ~ 2026-08-05 的 Issue / PR 更新生成；如需查看完整 50 条 Issue 与 24 条 PR，请访问 [GitHub 仓库](https://github.com/google-gemini/gemini-cli)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-05**

---

## 📌 今日速览

GitHub Copilot CLI 今日发布 **v1.0.79-1**，引入破坏性变更：沙盒配置项 `allowDevToolCaches` 重命名为 `allowDevToolAccess`（语义更准确，旧键将被静默忽略），用户需注意更新配置。社区层面，**MCP 协议兼容性**（如 FastMCP 的 `server/discover` 返回 `-32602`）、**Windows/WSL2 终端行为异常**以及**自定义主题、Session 跨设备同步等长期需求**持续占据讨论焦点，多个高赞旧 Issue（自定义主题 #1504、Session Forking #1697、插件自动更新 #1709）仍然 OPEN。

---

## 🚀 版本发布

### v1.0.79-1（2026-08-04）

**Improved / BREAKING**

- 沙盒配置键 `allowDevToolCaches` 重命名为 `allowDevToolAccess`，因为该选项实际控制的不仅是缓存，还包括 dev-tool 配置和注册表。
- ⚠️ **迁移注意**：旧 key 不再被读取且会被静默忽略，这意味着原先显式设置 `false`（关闭）来拒绝访问的用户，在升级后会**回退到默认开启状态**。请检查你的 `settings.json`，将 `allowDevToolCaches` 改为 `allowDevToolAccess` 并重新设置你期望的开关。

🔗 [Release 链接](#) · [#4370 MCP 兼容性 Issue](https://github.com/github/copilot-cli/issues/4370)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 关注理由 |
|---|-------|------|-----------|----------|
| 1 | [#1504 Add custom theme support](https://github.com/github/copilot-cli/issues/1504) | OPEN | 8 / 23 👍 | 用户希望支持自定义主题（JSON 共享），是社区呼声最高的 UI 个性化诉求。已存在 5 个月仍未合入。 |
| 2 | [#1285 Organisation level Agent not showing up](https://github.com/github/copilot-cli/issues/1285) | OPEN | 7 / 9 👍 | 组织级 `.github-private` 仓库中的 Agent 在 CLI 与 VS Code 中无法发现，影响企业用户采用自定义 Agent。 |
| 3 | [#2692 Web Search tool - github-mcp-server error](https://github.com/github/copilot-cli/issues/2692) | CLOSED | 6 / 2 👍 | MCP Streamable HTTP POST 端点错误，影响代理调用 Web Search 工具能力。 |
| 4 | [#4328 Ctrl+H misinterpreted as Ctrl+Backspace under WSL2](https://github.com/github/copilot-cli/issues/4328) | OPEN | 5 / 0 👍 | WSL2 + Windows Terminal 环境下 `WT_SESSION` 泄漏导致快捷键行为错乱，体现跨平台终端兼容性难题。 |
| 5 | [#4005 Copilot billing entity isn't selected](https://github.com/github/copilot-cli/issues/4005) | OPEN | 4 / 3 👍 | 企业版用户在保存 Memory 时遇到计费实体未选择错误，破坏上下文持久化核心功能。 |
| 6 | [#4202 Built-in view reports Path does not exist](https://github.com/github/copilot-cli/issues/4202) | OPEN | 4 / 1 👍 | 1.0.72 起 `view` 工具对已存在文件报"Path does not exist"，1.0.71 正常——典型的回归问题。 |
| 7 | [#1947 Cloud-synced sessions for cross-device continuity](https://github.com/github/copilot-cli/issues/1947) | CLOSED | 4 / 6 👍 | 跨设备 Session 同步功能请求，揭示当前会话仅本地存储的局限。 |
| 8 | [#1697 Session forking — branch a conversation](https://github.com/github/copilot-cli/issues/1697) | OPEN | 3 / **25 👍** | 极高赞数！用户希望从当前会话分叉出并行分支共享上下文，避免"非此即彼"的两难。 |
| 9 | [#4196 BYOK completions wire API fails with reasoning_content](https://github.com/github/copilot-cli/issues/4196) | OPEN | 2 / 0 👍 | 自带 Key（BYOK）提供商在流式响应中含 `reasoning_content` 字段时触发 5 次重试后失败，阻塞自定义模型接入。 |
| 10 | [#3859 Subconscious sidekick spawns even with memory off](https://github.com/github/copilot-cli/issues/3859) | CLOSED | 2 / 0 👍 | 即使用户显式禁用 Memory，per-prompt "Subconscious" 后台 agent 仍在运行——设置不生效，影响性能与可预期性。 |

**Honorable Mentions**：[#4370 MCP `-32602` 初始化失败](https://github.com/github/copilot-cli/issues/4370)（v1.0.79-1 直接受影响）、[#4026 Windows 持续崩溃](https://github.com/github/copilot-cli/issues/4026)（自 2026-05 起跨版本未解决）、[#1709 插件自动更新](https://github.com/github/copilot-cli/issues/1709)（29 👍，高需求）。

---

## 🛠 重要 PR 进展

> 过去 24 小时内仅更新了 2 条 PR，活跃度较低，以下完整列出：

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#4366 ACTION REQUIRED: Fundamental security findings resolution for copilot-cli](https://github.com/github/copilot-cli/pull/4366) | OPEN | 由 `vault-chatops[bot]` 自动创建，用于解决 Vault 对 copilot-cli 在 `ci, production` 的安全检测发现；需替换所有 `<UPDATE_ME>` 占位符后合并。 |
| 2 | [#4355 Merge](https://github.com/github/copilot-cli/pull/4355) | OPEN | 由 `XavierMP14` 创建，标题/摘要为空，疑似未完成或误提交，建议关注其后续更新。 |

> ⚠️ **观察**：PR 通道在 24 小时窗口内较为沉寂，与 Issue 端的活跃讨论形成反差，可能意味着维护者正在内部处理 v1.0.79-1 的兼容性问题。

---

## 📈 功能需求趋势

通过对今日 43 条更新 Issue 的领域标签聚合，社区关注的功能方向呈现以下趋势：

| 趋势方向 | 代表 Issue | 热度信号 |
|----------|-----------|----------|
| 🎨 **UI / 主题定制** | #1504、#3898、#4267 | 自定义主题、颜色对比度、终端渲染修复 |
| 🔀 **Session 管理增强** | #1697、#1947、#2019、#1343、#4334 | 分叉、跨设备同步、删除、远程心跳、stash 保留 |
| 🧩 **MCP & 工具生态** | #2692、#4048、#4370、#4349、#4361 | 协议兼容、Skill 调用回归、企业策略校验失败 |
| 🤖 **Agent 体系** | #1285、#2745、#3859 | 组织级 Agent 发现、创建挂起、Subconscious 失控 |
| 🔌 **插件 / Skill** | #1709、#4048、#4361、#4365 | 自动更新、slash command 兼容性、Hook 触发条件 |
| 🧠 **Memory / 上下文** | #4005、#3859、#2532、#4174 | 计费实体、Subconscious、持久化 context bar、ACP 协议用量暴露 |
| 🪟 **Windows / 终端兼容** | #4328、#4026、#4267 | WSL2 快捷键、原生 Windows 崩溃、zellij DA1 序列 |
| 🔓 **BYOK / 自定义模型** | #4196、#4139 | 流式 `reasoning_content` 处理、第三方 LLM 接入 |

---

## 💬 开发者关注点

综合 Issue 反馈，开发者群体当前的**痛点**与**高频需求**可归纳为四条主线：

1. **🧱 平台稳定性问题严重，特别是 Windows 原生与 WSL2 混合场景**
   - 多条 Issue（#4328、#4026、#4267）反映 Windows Terminal、WSL2、zellij 等真实环境下快捷键、输入框、崩溃行为异常。
   - 跨平台 TUI 兼容性仍是 CLI 的薄弱环节。

2. **🔌 协议层（MCP / ACP）回归频发，破坏性变更需要更平滑的迁移路径**
   - v1.0.79-1 引入 BREAKING 命名变更却"静默忽略旧 key"，对已有 `false` 配置用户造成**静默回退到默认值**的安全隐患（#4370、#4349）。
   - 开发者呼吁更明确的 deprecation 策略与版本提示。

3. **🧠 Memory / Session / Agent 三件套的"可控性"诉求强烈**
   - 用户希望精细控制 Subconscious 后台 agent（#3859）、Memory 开关（#4005）、Session 分叉与跨设备同步（#1697 / #1947）。
   - 反映出社区从"功能有无"转向"行为可预期、可治理"。

4. **🎨 个性化与可扩展性需求上升**
   - 自定义主题（#1504，23 👍）、插件自动更新（#1709，29 👍）、BYOK 自定义模型（#4139）等需求长期高赞，但维护进展缓慢，开发者期待更强的扩展点。

---

*日报基于 `github.com/github/copilot-cli` 仓库 2026-08-04 至 2026-08-05 数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-05** ｜ **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区整体活跃度中等偏低，但出现两项不容忽视的信号：其一，**Agent 在约 500K tokens 上下文时出现可靠性断崖**这一关键缺陷被官方迅速关闭处理（#2586），暗示团队已关注该长会话稳定性问题；其二，ACP 协议层在客户端集成（Happy Coder、Zed 等）方面的多项增强 PR 同步推进，提示外部 IDE/客户端生态适配正在成为下一个开发重点。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，跳过此章节。*

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时共更新 6 条 Issues，以下按"重要性 × 社区关注度"排序呈现。

### 1. [#2586 Agent 可靠性在高上下文窗口下急剧下降](https://github.com/MoonshotAI/kimi-cli/issues/2586) ⭐ 关键缺陷
- **标签**：bug · **状态**：已关闭（当日创建即关闭）
- **作者**：GrokBuildMJW
- **摘要**：跨多个长任务 Agent 会话观察显示，当会话上下文填充超过 ~500K tokens 时，出现重复动作循环、缺乏升级机制、指令漂移等问题。
- **重要性**：这是面向 Agent 自动化场景的核心稳定性问题，直接影响生产级长流程任务的可用性。当日即关闭，表明团队已响应或正在评估。
- **社区反应**：反应尚在初始阶段，但议题已触及产品关键能力上限。

### 2. [#1282 Feature Request: Remote Control（远程控制）](https://github.com/MoonshotAI/kimi-cli/issues/1282) 💡 高呼声
- **标签**：enhancement · **状态**：OPEN
- **作者**：CatKang
- **摘要**：请求支持从手机/平板/任意浏览器继续本地 CLI 会话，保留完整本地环境。
- **重要性**：截至当前已有 **24 个 👍 与 12 条评论**，是社区呼声最高的特性之一，反映"本地优先 + 跨设备接力"已成为开发者刚需。
- **社区反应**：高情感共鸣，常见评论表达"希望能边通勤边修复未完成的 PR"。

### 3. [#1283 Feature Request: Memory System（记忆系统）](https://github.com/MoonshotAI/kimi-cli/issues/1283) 💡 长期热门
- **标签**：enhancement · **状态**：OPEN
- **作者**：CatKang · **17 条评论**
- **摘要**：希望 CLI 能跨会话记忆项目模式、用户偏好，分自动（AI 笔记）与手动（用户指令）两类。
- **重要性**：作为已经开放约 5 个月的高活跃议题，长尾讨论度高，是社区对"个性化、上下文持续性"的代表性期待。

### 4. [#2587 kimi cli 在正常推进会话时异常退出](https://github.com/MoonshotAI/kimi-cli/issues/2587) 🐞 新上报
- **标签**：bug · **状态**：OPEN
- **作者**：Sdongmaker
- **摘要**：Windows 平台、Kimi Code v0.29.2 / K3 high 模型下，常规推进会话时进程异常退出。
- **重要性**：明确版本号 + 平台信息，复现路径清晰，便于官方定位。
- **社区反应**：新发，关注尚在积累。

### 5. [#2584 Thai 等 IME 字符在 Windows 提示符中重复输入](https://github.com/MoonshotAI/kimi-cli/issues/2584) 🐞 跨平台体验
- **标签**：bug · **状态**：OPEN
- **作者**：mgprona · **版本**：v0.31.1 · **平台**：Windows 11
- **重要性**：直接影响非英语母语开发者的输入体验，属于典型的输入栈兼容问题。

### 6. [#2583 feat(acp): advertise available models and support mid-session model switching](https://github.com/MoonshotAI/kimi-cli/issues/2583) 💡 ACP 生态增强
- **标签**：enhancement · **状态**：OPEN
- **作者**：tizerluo
- **摘要**：ACP 客户端（如 Happy Coder、Zed）目前无法发现可用模型或中途切换模型，请求 `kimi acp` 在 `session/new` 时声明模型清单，并提供 `current_model_update` 等通知能力。
- **重要性**：是 ACP 协议层成熟度的关键一步，是第三方 IDE/Mobile 客户端深度集成的前置条件。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时共 3 条 PR 活跃，覆盖 Shell 超时、CLI 进程标识、ACP 权限模式切换。

### 1. [#2200 fix(shell): adapt timeouts for long commands](https://github.com/MoonshotAI/kimi-cli/pull/2200) 🔧 体验修复
- **作者**：he-yufeng
- **内容**：智能识别 git submodule 清理、clone/fetch、依赖安装、构建等已知慢命令，自动延长 shell 超时；常规命令保留默认 60s；显式传入超时将被尊重。
- **意义**：解决长命令被误中断的开发者"踩坑"场景，提升 CLI 自适应能力。

### 2. [#2585 feat(cli): set AI_AGENT for subprocesses](https://github.com/MoonshotAI/kimi-cli/pull/2585) 🌱 新提交
- **作者**：complynx
- **内容**：在 pip/uv 与独立二进制两个入口点统一暴露 `AI_AGENT=kimi`，给所有子进程；保留上层显式覆盖；覆盖缺失/空值/显式标记三种行为。
- **意义**：让下游工具能可靠识别"被 AI 操作"场景，便于构建可审计、可限定的自动化链路。

### 3. [#2364 feat(acp): support permission mode switching](https://github.com/MoonshotAI/kimi-cli/pull/2364) 🔐 协议能力
- **作者**：huntharo · **关联**：#1414 · 叠加于 #2363
- **内容**：在 ACP 协议层加入 Kimi 会话权限模式（如 default）切换能力，分层提交以便逐 PR 审查。
- **意义**：是 ACP 生态体验由"能跑"走向"可配、可控"的关键一环，与 #2583 形成 ACP 主线演进组合。

---

## 📈 功能需求趋势

从当日活跃议题可提炼如下趋势方向：

| 方向 | 代表 Issues | 趋势强度 |
|---|---|---|
| **跨会话记忆与个性化** | #1283 | ⬆ 持续高位 |
| **多设备 / 远程控制** | #1282 | ⬆ 持续高位 |
| **ACP 协议完善（模型发现、权限切换）** | #2583、#2364 | ⬆ 显著加速 |
| **超长上下文稳定运行** | #2586 | ⬆ 新焦点 |
| **Windows 平台兼容性 / IME 输入** | #2584、#2587 | ➡ 长期阵痛 |
| **Shell 与子进程集成语义** | #2200、#2585 | ➡ 渐进增强 |

**总结**：社区关注点正从"基础 CLI 可用性"转向"长会话可靠性 + 协议生态（ACP）+ 多端/跨设备体验"三大轴线。其中 ACP 协议相关议题今日集中度提升，配合 #2364、#2583、#2585 同窗口期推进，明显指向**外部 IDE/Mobile 客户端集成**将是下一阶段产品化的重心。

---

## 💬 开发者关注点（痛点与高频需求）

1. **超长 Agent 会话的可靠性天花板**：当上下文进入约 500K tokens 后出现重复动作循环与指令漂移，缺少自动升级/纠正机制，是当前最尖锐的痛点。
2. **Windows 平台中文/泰文等 IME 输入兼容性**：字符重复、程序异常退出两类问题集中爆发，影响多语种开发者日常使用。
3. **跨设备连续性**："本地开发 + 远程接管"普遍被视为除 IDE 集成之外的第二大期望能力。
4. **会话间的"记忆"**：项目惯例、用户偏好不能持久化，每次启动都要重新交代上下文，是高频抱怨点。
5. **ACP 客户端可发现/可切换**：第三方客户端对模型清单与会话中模型切换存在强依赖，是协议落地的最后一公里。
6. **Shell 长命令被默认超时打断**：当前 60s 默认在依赖安装、构建等场景频繁误判，需要更智能的策略。

---

> 📎 **备注**：本期仅涵盖过去 24 小时活跃内容。如需关注长期 backlog，请结合 2 月以来持续 OPEN 的 #1282、#1283 等长尾议题。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-05** | 数据来源：github.com/anomalyco/opencode

---

## 📌 今日速览

今日 OpenCode 发布 **v1.18.13**，重点修复了桌面端的 RTL（从右到左）布局问题与 TUI 中 GitHub PR 评审的上下文显示。社区层面，**DeepSeek V4 Flash 模型在多端出现大面积服务异常**（Windows 桌面端返回空白、opencode-go 接口 403、实际返回 V3.2 模型），引发多语言用户集中反馈；与此同时，多个针对 **xAI OAuth 改造（RFC 8628 Device Flow）** 与 **AI Provider 工具调用语义归一化** 的 PR 被合并/关闭，社区进入一次密集的底层清理窗口。

---

## 🚀 版本发布

### v1.18.13

- **TUI**：修复 GitHub Pull Request 评审上下文缺失 PR 编号与 URL 的问题。
- **Desktop**：修复多项 RTL 布局缺陷，涵盖 Tabs、Drawers、Resize、Titlebar 交互以及方向性图标行为。

🔗 https://github.com/anomalyco/opencode/releases/tag/v1.18.13

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|---|---|---|
| 1 | [#16017](https://github.com/anomalyco/opencode/issues/16017) **Go Plan 用量/余额 API 端点（rolling/weekly/monthly）** | 💬29 / 👍126 | 社区呼声最高的特性请求之一，希望将 Go 订阅面板数据暴露为 API，便于自建监控与成本可视化。 |
| 2 | [#39845](https://github.com/anomalyco/opencode/issues/39845) **DeepSeek V4 Flash 突然要求开启"中国托管"** | 💬15 / 👍22 | OpenCode Go 订阅用户遭遇会话级中断，影响面广。 |
| 3 | [#22235](https://github.com/anomalyco/opencode/issues/22235) **VSCode 扩展 Context Awareness 不生效** | 💬12 / 👍7 | IDE 集成的核心能力，用户期望对齐 Claude Code 的"自动携带选中行/文件"行为。 |
| 4 | [#8456](https://github.com/anomalyco/opencode/issues/8456) **按任务类型自动切换模型** | 💬10 / 👍44 | 头部 agentic 工具的标配能力，长期高赞。 |
| 5 | [#34498](https://github.com/anomalyco/opencode/issues/34498) **SKILL.md frontmatter 需支持 `disable-model-invocation: true`** | 💬9 / 👍48 | 与 Claude Code / Cursor 生态对齐，是 SKILL 体系补全的关键。 |
| 6 | [#40483](https://github.com/anomalyco/opencode/issues/40483) **DeepSeek v4 Flash Free 在 Windows 11 桌面端返回空白** | 💬7 | 桌面端体验与 Thinking 状态卡死一致，需要明确是 provider 端还是 UI 端缺陷。 |
| 7 | [#40485](https://github.com/anomalyco/opencode/issues/40485) **`deepseek-v4-flash` 经 opencode-go 返回 403 / 挂起** | 💬6 / 👍6 | 仅 Flash 异常，pro 与 m3 正常，是定位 provider 路由的关键证据。 |
| 8 | [#40409](https://github.com/anomalyco/opencode/issues/40409) **`deepseek-v4-flash` 实际返回 V3.2（知识截止 2025-05）** | 💬5 | 高严重度问题——存在**计费/模型不匹配**风险，关系到账单公平性。 |
| 9 | [#40171](https://github.com/anomalyco/opencode/issues/40171) **Go 服务 `/v1/responses` SSE 流不完整，破坏 Codex 风格客户端** | 💬3 / 👍2 | Responses API 兼容性问题，影响 Codex-style 客户端接入。 |
| 10 | [#36646](https://github.com/anomalyco/opencode/issues/36646) **Tmux/Kitty 下 Copy-on-Select 失败** | 💬4 | 历史问题复现，长期影响 TUI 用户在终端复用中的核心体验。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 影响范围 | 摘要 |
|---|---|---|---|
| 1 | [#40542](https://github.com/anomalyco/opencode/pull/40542) **fix(core): report missing shell workdir** | core | shell 工具的 `NotFound` 失败被正确转化为 `ToolFailure`，并新增回归测试。 |
| 2 | [#40552](https://github.com/anomalyco/opencode/pull/40552) **fix(core): avoid eager directory snapshots** | core/search | ripgrep 索引期间不再重复重建目录快照，大仓库搜索性能显著优化。 |
| 3 | [#40538](https://github.com/anomalyco/opencode/pull/40538) / [#40537](https://github.com/anomalyco/opencode/pull/40537) **xAI OAuth 改为 RFC 8628 Device Flow** | opencode/core | 删除 loopback server/PKCE/CORS，远程与本地均可用单一 SuperGrok 订阅方法。 |
| 4 | [#40547](https://github.com/anomalyco/opencode/pull/40547) **fix(ai): derive Anthropic tool finish reason** | ai/anthropic | 客户端工具调用场景下，`end_turn`/`stop_sequence`/空 reason 归一为 `tool-calls`。 |
| 5 | [#40546](https://github.com/anomalyco/opencode/pull/40546) **fix(ai): preserve Gemini tool finish semantics** | ai/gemini | 解析到客户端工具调用时归一为 `tool-calls`，保留 native raw reason，不臆造。 |
| 6 | [#40553](https://github.com/anomalyco/opencode/pull/40553) **fix(ai): restore Responses tool input semantics** | ai/responses | 恢复畸形函数调用作为 `tool-calls` 的 finish 边界。 |
| 7 | [#40549](https://github.com/anomalyco/opencode/pull/40549) **fix(ai): classify malformed Responses tool calls** | ai/responses | 区分成功解码 vs 畸形客户端工具输入，后者归一为 `error`。 |
| 8 | [#40545](https://github.com/anomalyco/opencode/pull/40545) **fix(opencode): add model attribution to `run --format json`** | opencode | 为 step_start/step_finish 注入 model 字段，便于 headless 调用方归因 token 与成本。 |
| 9 | [#40551](https://github.com/anomalyco/opencode/pull/40551) **feat(tui): streamline tab navigation shortcuts** | tui | 引入 Slack/Mattermost 风格的 `Option+↑/↓`、`Ctrl+Tab` 会话/未读 Tab 切换。 |
| 10 | [#40427](https://github.com/anomalyco/opencode/pull/40427) **[beta] experimental perf improvements** | app | 初始渲染器入口从 7.45 MB → 1.82 MB（-75.5%），多项 renderer 性能改进进入 beta 通道。 |

> 另有 [#40543](https://github.com/anomalyco/opencode/pull/40543) `docs: add RTL development skill` 与 v1.18.13 的 RTL 修复形成闭环；[#40556](https://github.com/anomalyco/opencode/pull/40556) 强化了 e2e 测试的同步可靠性。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布看，社区关注点集中在以下方向：

1. **DeepSeek V4 Flash 模型端到端可用性** — Windows 桌面端返回空白、opencode-go 403、实际响应 V3.2，是单日最高频主题。
2. **按任务/上下文自动调度模型**（[#8456](https://github.com/anomalyco/opencode/issues/8456)） — 头部 agentic 工具的标配。
3. **SKILL.md / frontmatter 语义对齐**（[#34498](https://github.com/anomalyco/opencode/issues/34498)） — 与 Claude Code、Cursor 生态互通。
4. **VSCode 扩展的上下文感知与选区感知**（[#22235](https://github.com/anomalyco/opencode/issues/22235)、[#40540](https://github.com/anomalyco/opencode/issues/40540)） — IDE 集成仍是高频痛点。
5. **Go 订阅的可观测性**（[#16017](https://github.com/anomalyco/opencode/issues/16017)） — 用量/余额 API、按时间窗聚合。
6. **响应协议兼容性** — `/v1/responses` 的 SSE 完整性与 OpenAI 兼容代理（如 LiteLLM）的 usage 字段解析（[#40171](https://github.com/anomalyco/opencode/issues/40171)、[#40541](https://github.com/anomalyco/opencode/pull/40541)）。
7. **桌面端的运行稳定性** — 自 v1.18.5 起 provider/model/MCP 启动加载回归（[#40516](https://github.com/anomalyco/opencode/issues/40516)），影响企业内多用户。
8. **打包与发行** — Flatpak 自动更新门控（[#39670](https://github.com/anomalyco/opencode/issues/39670)）。

---

## 🧑‍💻 开发者关注点 / 高频痛点

- **Provider 模型路由错误**：DeepSeek v4 Flash 在 opencode-go 通道下被识别为"中国托管"或被错误路由，存在**计费与质量双重风险**。
- **桌面端启动回归（v1.18.5 → v1.18.13）**：provider/model/MCP 在 ~80% 启动中加载失败，回退 v1.18.4 可用。
- **VSCode 扩展上下文感知缺失**：选区/激活 Tab 无法进入 LLM 上下文，削弱 IDE 集成核心卖点。
- **`opencode run` 间歇性挂起**（[#38723](https://github.com/anomalyco/opencode/issues/38723)）：无 stdout、无错误，需外部超时，CI 集成风险高。
- **TUI 复制粘贴在 Tmux/Kitty 下的兼容性问题**长期未根治。
- **多语言/多地区用户反馈集中**：本日西、土、中、阿语区用户大量提交同类"无响应/空白响应"工单，提示**国际化用户支持**与**provider 退化路径**需要更明确的兜底文案。
- **合规与废弃工单激增**：单日内多条 `needs:compliance` / `废弃` 工单关闭（[#40533](https://github.com/anomalyco/opencode/issues/40533)、[#40532](https://github.com/anomalyco/opencode/issues/40532)、[#40530](https://github.com/anomalyco/opencode/issues/40530) 等），可能涉及政策或品牌层面动作。

---

*本日报基于公开 GitHub 数据自动整理，仅反映过去 24 小时的社区动态切片。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-05

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 报告周期：过去 24 小时

---

## 📌 今日速览

今日 Pi 仓库活跃度持续高位运行，单日更新 **50 个 Issues** 与 **32 个 PRs**，但无新版本发布。社区焦点高度集中在 **GitHub Copilot 兼容性**（compact、OAuth 刷新、模型列表）、**Windows 平台体验**、**TUI 渲染与快捷键冲突** 三大方向；同时基础设施层出现重要进展 —— `server` 后端重构、SQLite 存储改造与 Harness v2 草案陆续进入评审。

---

## 🚀 版本发布

无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 关键看点 |
|---|-------|------|----------|
| 1 | [#6768](https://github.com/badlogic/pi-mono/issues/6768) `[CLOSED] Copilot Enterprise compact 失败` | 19 | 👍18，**今日最热**。OpenAI 421 / Anthropic 端点在 Copilot 企业席位下 compact 链路彻底失败，社区等待修复。 |
| 2 | [#7547](https://github.com/badlogic/pi-mono/issues/7547) `[OPEN] Windows 使用方式调研` | 12 | 维护者主动征集 Windows 用户痛点，**预示官方将把 Windows 支持列为核心优先级**。 |
| 3 | [#5023](https://github.com/badlogic/pi-mono/issues/5023) `[CLOSED] terminal 异常滚动到顶部` | 11 | 长期存在的 TUI 渲染抖动问题终于关闭，跨版本顽疾告一段落。 |
| 4 | [#7161](https://github.com/badlogic/pi-mono/issues/7161) `[CLOSED] Anthropic 不发送 x-client-request-id` | 10 | 影响网关 session affinity 路由的关键 Header 缺失已修复。 |
| 5 | [#7465](https://github.com/badlogic/pi-mono/issues/7465) `[OPEN] iTerm2 inline image 缺 size 参数` | 7 | 关联 PR [#7612](https://github.com/badlogic/pi-mono/pull/7612) 已提，xterm.js 兼容性即将落地。 |
| 6 | [#7413](https://github.com/badlogic/pi-mono/issues/7413) `[OPEN] Copilot GHE.com compact 失败` | 6 | 与 #6768 / #7579 同源，企业版用户的 compact 噩梦仍在持续。 |
| 7 | [#7244](https://github.com/badlogic/pi-mono/issues/7244) `[OPEN] version 显示 runtime` | 6 | 把 bun/node/deno 信息纳入 `/version`，**显著降低 issue 排查摩擦**。 |
| 8 | [#7553](https://github.com/badlogic/pi-mono/issues/7553) `[OPEN] compact 可配置 thinking/model` | 6 | 已被 PR [#7602](https://github.com/badlogic/pi-mono/pull/7602) 实现，社区即将获得「摘要专用模型」。 |
| 9 | [#6817](https://github.com/badlogic/pi-mono/issues/6817) `[OPEN] Windows find 工具路径通配失效` | 5 | Windows 下 `src/**/*.ts` 类模式直接空结果，属核心工具功能性 bug。 |
| 10 | [#7628](https://github.com/badlogic/pi-mono/issues/7628) `[CLOSED] 0.83.0 shrinkwrap 锁住漏洞依赖` | 1 | **安全告警**：undici 8.5.0、brace-expansion 5.0.7 已知漏洞，建议尽快升级 shrinkwrap。 |

> **其他值得关注**：[#7574](https://github.com/badlogic/pi-mono/issues/7574)（fullscreen 模式下 Home/End 被劫持）、[#7594](https://github.com/badlogic/pi-mono/issues/7594)（release binary 缺失 `node:sqlite`）、[#7395](https://github.com/badlogic/pi-mono/issues/7395)（JSON mode 二次序列化导致 O(n²) 输出）。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#7597](https://github.com/badlogic/pi-mono/pull/7597) `扩展选择器支持长 diff 滚动` | OPEN | 解决 fullscreen 下大 diff 无法滚动 + yes/no 被遮挡的体验问题。 |
| 2 | [#7632](https://github.com/badlogic/pi-mono/pull/7632) `管理类 HTTP 请求自动重试` | OPEN | 修复 pi.dev / gh releases 等幂等请求无重试导致的中途卡顿。 |
| 3 | [#7624](https://github.com/badlogic/pi-mono/pull/7624) `内置 Mermaid 渲染` | OPEN | 关闭 [#7623](https://github.com/badlogic/pi-mono/issues/7623)，Markdown 图表支持进入主分支。 |
| 4 | [#7610](https://github.com/badlogic/pi-mono/pull/7610) `内置 LLM Gateway & DevPass provider` | OPEN | 新增 OpenRouter 风格的统一网关 provider。 |
| 5 | [#7612](https://github.com/badlogic/pi-mono/pull/7612) `iTerm2 OSC 1337 补 size 参数` | OPEN | 解决 [#7465](https://github.com/badlogic/pi-mono/issues/7465)，让图片在 xterm.js 终端正常显示。 |
| 6 | [#7619](https://github.com/badlogic/pi-mono/pull/7619) `/tree 中可重试失败轮次` | OPEN | 断网等错误后用户可在历史中选中并重试该 assistant turn。 |
| 7 | [#7602](https://github.com/badlogic/pi-mono/pull/7602) `可配置摘要模型 / thinking` | OPEN | 关闭 [#7553](https://github.com/badlogic/pi-mono/issues/7553)，compact 与分支摘要支持独立模型与思考预算。 |
| 8 | [#7614](https://github.com/badlogic/pi-mono/pull/7614) `移除遗留 server 实现` | CLOSED | 清理实验性旧 server，#7396 持久化后端成为唯一路径。 |
| 9 | [#7396](https://github.com/badlogic/pi-mono/pull/7396) `新增 server session backend` | CLOSED | **架构级变更**：引入持久化 `PiServer`、JSONL 跨进程锁、崩溃恢复。 |
| 10 | [#7591](https://github.com/badlogic/pi-mono/pull/7591) `SQLite 改造以适配 v2 harness` | CLOSED | lane-aware 会话存储，奠定 Harness v2 数据层。 |

> **安全相关合集**：[#7605](https://github.com/badlogic/pi-mono/pull/7605)（OAuth 错误信息不再泄漏响应体）、[#7606](https://github.com/badlogic/pi-mono/pull/7606)（Codex 显式 `chatgpt-account-id` 覆盖 JWT）、[#7604](https://github.com/badlogic/pi-mono/pull/7604)（Anthropic 非严格 schema 保留 `$defs`）。

---

## 📈 功能需求趋势

综合过去 24 小时 Issues / PRs，社区最强烈的需求集中在 **五个方向**：

1. **GitHub Copilot 企业场景稳定性**  
   compact、OAuth 刷新、模型列表、token lock 四大问题交织 [#6768](https://github.com/badlogic/pi-mono/issues/6768) [#7413](https://github.com/badlogic/pi-mono/issues/7413) [#7508](https://github.com/badlogic/pi-mono/issues/7508) [#7560](https://github.com/badlogic/pi-mono/issues/7560) [#7579](https://github.com/badlogic/pi-mono/issues/7579)，是企业级用户的核心痛点。

2. **Windows 一等公民体验**  
   维护者发起的 [#7547](https://github.com/badlogic/pi-mono/issues/7547) + 多项工具路径 bug [#6817](https://github.com/badlogic/pi-mono/issues/6817) [#7427](https://github.com/badlogic/pi-mono/issues/7427) 表明 Windows 已从「能用」进入「要好用」阶段。

3. **TUI / 编辑器交互细节打磨**  
   fullscreen 快捷键劫持 [#7574](https://github.com/badlogic/pi-mono/issues/7574)、TUI 超宽行崩溃 [#7528](https://github.com/badlogic/pi-mono/issues/7528)、pageUp/pageDown 漏配 [#7629](https://github.com/badlogic/pi-mono/issues/7629) 等密集反馈，反映 TUI 体验正在被精细化。

4. **新模型 / 新 Provider 接入**  
   Cortecs ([#7571](https://github.com/badlogic/pi-mono/pull/7571))、LLM Gateway ([#7610](https://github.com/badlogic/pi-mono/pull/7610))、Qwen Token Plan Individual ([#7631](https://github.com/badlogic/pi-mono/issues/7631)) 接连入驻，模型生态持续扩张。

5. **Compact / 摘要链路可控化**  
   可配置 thinking/model [#7553](https://github.com/badlogic/pi-mono/issues/7553)、上下文窗口选项 [#5064](https://github.com/badlogic/pi-mono/issues/5064) —— 用户越来越希望「摘要」和「对话」使用不同资源策略。

---

## 💬 开发者关注点

从 issue 描述与 PR 摘要中提炼出 **6 类高频反馈**：

- **🚨 安全与依赖卫生**：0.83.0 shrinkwrap 锁定已知漏洞依赖 [#7628](https://github.com/badlogic/pi-mono/issues/7628)，社区呼吁 CI 接入 `npm audit` 阻断。
- **🧱 透明可调试**：`/version` 暴露 runtime [#7244](https://github.com/badlogic/pi-mono/issues/7244) 反映出开发者期望「贴 issue 模板一键完整排错」。
- **⏱️ 抗网络抖动**：OAuth 刷新 5 分钟冻结 [#7508](https://github.com/badlogic/pi-mono/issues/7508)、管理接口无重试 [#7632](https://github.com/badlogic/pi-mono/pull/7632) 表明在弱网 / 企业代理场景下稳定性仍是首要指标。
- **🪟 Windows 工具链对齐**：路径分隔符、`node:sqlite` 内置 [#7594](https://github.com/badlogic/pi-mono/issues/7594)、递归 skill 目录 [#7427](https://github.com/badlogic/pi-mono/issues/7427) —— Windows 工具差异被集中曝光。
- **🧠 摘要资源隔离**：用户希望 compact 不再抢占主会话的 reasoning budget [#7553](https://github.com/badlogic/pi-mono/issues/7553)。
- **🧩 协议化扩展**：RPC 暴露 provider auth [#7590](https://github.com/badlogic/pi-mono/issues/7590)、RPC over sockets [#7599](https://github.com/badlogic/pi-mono/pull/7599)、argument completions [#7621](https://github.com/badlogic/pi-mono/pull/7621) 三件套印证 **「embedded / web UI 化」是社区正在自发推进的方向**。

---

*📅 数据截止 2026-08-05 · 报告由 AI 自动生成，仅供参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-05**

---

## 📌 今日速览

今日 Qwen Code 同步发布了 **v0.21.5 稳定版** 与 **v0.21.6-preview.0 预览版**，其中 v0.21.5 为 macOS 用户引入了从 Electron 桌面端向新 Tauri 外壳迁移的一次性更新桥接，是本期最重要的版本里程碑。社区讨论热度集中于三个方向：**Agent 运行时的可信执行边界**（#8102）、**`qwen serve` 多工作区守护进程的资源治理**，以及 **ACP / JetBrains 等 IDE 集成的协议对齐**。

---

## 🚀 版本发布

### v0.21.5（稳定版）
[#8392](https://github.com/QwenLM/qwen-code/pull/8392) macOS 用户可选的一次性更新桥接：自动从旧版 Electron 桌面应用迁移至新的 Tauri 外壳；并引入了**工具调用按执行类型（成功/失败/取消/超时）的细粒度结果追踪**，为后续可信 Agent 运行时打基础。
> 备注：v0.21.5 首次 release workflow 失败（#8476），已在后续重发中修复。

### v0.21.6-preview.0
[#6739](https://github.com/QwenLM/qwen-code/pull/6739) 为浏览器扩展增加 alpha 就绪诊断；同时配套 `headless Goal workflows` 文档。

### v0.21.5-nightly.20260805 / v0.21.4-nightly.20260804
滚动 nightly 构建，主要吸收上述 PR 与 web-shell 修复（table dialog 防穿帮等）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 为什么值得关注 |
|---|---|---|---|
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | **proposal: deterministic tool-execution boundaries for a trustworthy agent runtime** | 17 | 由 `chiga0` 提出的核心架构提案：将 LLM 置于信任边界之外，让运行时**确定性约束、授权、观测、评估**模型产生的动作。讨论度最高，是接下来可信 Agent 路线的纲领性议题。 |
| [#8519](https://github.com/QwenLM/qwen-code/issues/8519) | **tmux 中严重闪屏（已关闭）** | 11 | 实际使用中影响极广的环境兼容性 bug，反映出 Qwen Code 在终端渲染层与常见多路复用器（tmux/VP 模式）协同上的成熟度短板。 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | **tracking(serve): Bound multi-workspace daemon resource usage** | 9 | `qwen serve` 多工作区守护进程目前**只限制数量而非资源总量**，对请求体、WS 装配缓冲、输出历史等"字节"维度无界，是后续 daemon 走向生产可用必须解决的硬约束。 |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | **Provider warning sanitizer 误删端口、泄漏密码中的 `@`** | 6 | 一个典型的"凭据净化器"安全 bug：`sanitizeProviderWarningSegment` 在解析 URL 时将带端口的端口段误识别为密码，从而**把含 `@` 的真实密码直接泄漏**进 `/status` 负载。 |
| [#8493](https://github.com/QwenLM/qwen-code/issues/8493) | **bug: cancelled file tools can still mutate files** | 5 | `write_file` / `edit` 在调用被取消后仍可能写入文件系统，是**工具原子性与可中断性的安全红线**问题，影响所有自动化场景。 |
| [#8532](https://github.com/QwenLM/qwen-code/issues/8532) | **CI 日志把 mock 的 "disk full" 输出渲染成 runner ENOSPC** | 5 | 影响 CI 可观测性与诊断速度，也暴露出"测试故意抛错 vs 生产日志"的边界管理问题，已被 [#8549](https://github.com/QwenLM/qwen-code/pull/8549) 跟进。 |
| [#8356](https://github.com/QwenLM/qwen-code/issues/8356) | **`APIUserAbortError` 之后回合不再写入会话 transcript** | 5 | 在 OpenAI 兼容端点 + ACP/Web bridge 场景下，会话持久化丢失，直接影响 `--resume` 体验。 |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | **`qwen mcp list` 在不发送 `endpoint` 的 SSE 服务上无限挂起** | 4 | MCP 子命令在异常上游面前的**超时/兜底缺失**，是 MCP 集成稳健性的代表性问题。 |
| [#8533](https://github.com/QwenLM/qwen-code/issues/8533) | **Content[]/Part[] 无法安全编码 per-provider reasoning-replay 契约** | 4 | 与 #8535 共同构成"思考轨迹持久化"议题：当前内容结构无法承载不同 provider 的推理回放协议，是后续 reasoning effort、resume 安全的基础设施级问题。 |
| [#8544](https://github.com/QwenLM/qwen-code/issues/8544) | **[ACP] JetBrains 不渲染任务列表（计划更新）** | 3 | 与 Claude Code / Codex 在同一 JetBrains ACP UI 中行为不一致，影响 IDE 集成的对标竞争力。 |

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 模块 | 说明 |
|---|---|---|---|
| [#7925](https://github.com/QwenLM/qwen-code/pull/7925) | **fix(core): sweep stale worktree project snapshots on startup** | core / session | 修复 #7906：临时 worktree 路径下注册的 `.qwen/projects/...` 快照无人清理，导致磁盘泄漏。 |
| [#8482](https://github.com/QwenLM/qwen-code/pull/8482) | **fix(core): a never-delivered MCP call is a first delivery, not a replay** | core / MCP | 主线长期为红的 MCP 测试用例的精准定位与修复，恢复 #8387 replay-safety gate 后的回归。 |
| [#8414](https://github.com/QwenLM/qwen-code/pull/8414) | **fix(webui): recover complete turns after live journal truncation** | webui | 让 10,000 事件 / 8 MiB live journal 截断后的回合可以被精确恢复，SDK 同时收到经过校验的 scope/limit 元数据。 |
| [#8305](https://github.com/QwenLM/qwen-code/pull/8305) | **feat(cli): render inline terminal images** | cli | 把 #8217 的终端图像基础设施从工作区文件预览扩展到模型与工具的 `inlineData`，并保留多模态顺序。 |
| [#8459](https://github.com/QwenLM/qwen-code/pull/8459) | **fix(review): admit evidence images by content, not by name — magic-byte sniffing** | review | `publish-assets` 改用 magic-byte 嗅探判定 PNG/JPEG/GIF/WEBP，杜绝扩展名伪造。 |
| [#8471](https://github.com/QwenLM/qwen-code/pull/8471) | **feat(review): a cost ledger from the records already on disk** | review | 把"为什么 0.21.4 变慢"这种 forensics 转化为可重放的 cost ledger：用磁盘上既有记录还原评审成本。 |
| [#8498](https://github.com/QwenLM/qwen-code/pull/8498) | **perf(review): retire dry chunks and pipeline verification in the reverse audit** | review / perf | 叠加在 #8468 上，砍掉反向审计空跑块并流水线化校验，大幅压缩大 PR 评审耗时。 |
| [#8552](https://github.com/QwenLM/qwen-code/pull/8552) | **docs: add Korean to the README language bar** | docs | 在 README 加入 `한국어` 入口（仍为 Draft，待 docs 站发布 `/ko/`）。对应 issue #8551。 |
| [#8368](https://github.com/QwenLM/qwen-code/pull/8368) | **feat(auth): add Kimi and Xiaomi MiMo providers** | auth | `/auth` → 第三方供应商新增 **Kimi（Kimi Coding Plan + 国内/国际 API Key）** 与 **小米 MiMo（按量 + 多区域）**，与内置 provider 平级。 |
| [#8548](https://github.com/QwenLM/qwen-code/pull/8548) | **perf(autofix): build the review CLI bundle once per scan and fan it out to legs** | autofix | 把 `review-address` 每个腿重复做的 `npm ci/build/bundle` 提取为一个 `build-cli` job，单次构建多腿复用，显著降低 autofix 阶段总耗时。 |

> 同期值得一并关注的：[#8455](https://github.com/QwenLM/qwen-code/pull/8455)（VP 模式下 quit 屏幕提示丢失修复）、[#8443](https://github.com/QwenLM/qwen-code/pull/8443)（思考块 streaming 期间也可点击展开）、[#8496](https://github.com/QwenLM/qwen-code/pull/8496)（Web Shell 中 streaming 期间立即执行 `/stats` `/about` `/context`）。

---

## 📈 功能需求趋势

从过去 24 小时更新的 42 个 Issue 中，社区诉求高度集中于以下几条主线：

1. **ACP / IDE 集成对齐（JetBrains 为代表）**
   任务列表渲染（#8544）、context usage 推送（#8513）、reasoning effort 透出（#8514）连续提单，方向明确：**让 Qwen Code 在 JetBrains/Codex/Claude Code 同场竞争时具备对等的协议能力**。

2. **`qwen serve` 多工作区守护进程的"硬治理"**
   #8051（资源用量有界）、#8182（每个 ACP 子进程被授予宿主机 50% 内存，从不按子进程数均分）、#8515（DingTalk `interactiveCards` 未在管理 API 暴露）—— 守护进程正从"功能可用"过渡到"生产可托管"阶段。

3. **新模型 / 新供应商接入**
   Kimi（含 Coding Plan）、Xiaomi MiMo 多区域接入（#8368）；本月底前第三方 provider 版图明显扩张。

4. **多语言与本地化**
   韩语 docs / README（#8551 / #8552）标志着官方多语种支持向东亚扩展。

5. **可信 Agent 运行时与执行边界**
   #8102 的 17 条评论使其成为短期最热架构议题；#8533 / #8535 / #8493 / #8356 共同构成"思考持久化 + 工具原子性 + transcript 完整性"的子议题群。

6. **Web Shell 体验增强**
   立即执行只读命令（#8496）、daemon 鉴权下的 session refresh（#8445）、本地 `gh` 凭据复用（#8461）—— Web Shell 正成为日常用量的主入口之一。

---

## 🧑‍💻 开发者关注点（高频痛点）

- **凭据安全**：#8136 的 `@` 误识别为密码把净化器反向变成泄漏器，开发者对"调试信息中夹带凭据"零容忍。
- **取消语义不达边界**：`write_file` / `edit` 被取消后仍写盘（#8493）、shell 命令被信号终止后仍报成功（#8491），暴露**取消传播（abort propagation）在工具与子进程层面的覆盖盲区**。
- **会话可恢复性**：#8356（abort 后回合不入 transcript）、#8535（`--resume` 重建 PR #8260 修复的 dangling unsigned thought 风险），让"会话恢复"成为 0.21.x 后期的可靠性核心战场。
- **守护进程可观测性**：#8051 / #8182 反映出 `qwen serve` 仍缺乏"按工作区/按子进程"维度的资源视图与限制，托管场景下的 OOM 风险被开发者持续关注。
- **MCP 子命令韧性**：#8550（永久挂起）反映 MCP transport 在异常上游面前的**超时/重试策略缺位**，需要系统性补齐。
- **终端/桌面 UI 兼容**：tmux 闪屏（#8519）、Windows 桌面端复制按钮失效（#8538），开发者期望在主流 shell/平台上获得一致体验。
- **CI 日志可诊断性**：#8532 — 测试刻意构造的 "disk full" 出现在 CI stderr 中污染运维视图，对 release 与日常 triage 都是噪音。

---

*日报基于 `QwenLM/qwen-code` 仓库过去 24 小时的 Releases / Issues / PRs 数据生成；评论数为抓取时刻快照。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-05**
**数据来源：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 📌 今日速览

今日社区活动围绕两大主线展开：**v0.9.4 版本列车冲刺**（PR #5135 已开放整合 77 个 commit）和 **v0.9.5 构建性能优化 Epic 启动**（Issue #5249 牵头 5 个子议题，目标拆解 68 万行 tui crate 的单体重编译瓶颈）。同时，Runtime API 集中补齐了 memory / MCP / skill / goal / verifier 五大资源端点，社区可观测性显著提升。

---

## 🚀 版本发布

**无新版本发布。** v0.9.4 集成列车（PR #5135）正在整合中，包含 18 个 train commit 与 77 个增量 commit，预计近日合并。Issue #5244 提到 "0.9.4 already mitigates" 部分遗留问题，说明版本已进入收尾验证阶段。

---

## 🔥 社区热点 Issues

> 按重要性与影响力排序，挑选 10 条。

### 1. [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) 🏗 Epic: v0.9.5 构建性能优化主轴
由 Hmbown 本人发起的元议题，明确指出 `codewhale-tui` crate（68 万行、620 文件）占工作区 86%，每次编辑-编译-测试-发布都需全量重建。这是 v0.9.5 的核心 roadmap，下挂 #5245/#5246/#5247/#5248 四个子议题。

### 2. [#5248](https://github.com/Hmbown/CodeWhale/issues/5248) 📦 依赖瘦身：708 包构建图去重
工作区共 708 个 crate，其中 95 个运行 build.rs、52 个 proc-macro，10+ 依赖存在多版本共存。建议去重 + 裁剪 feature + 删除冗余栈，对冷启动构建时间影响巨大。

### 3. [#5245](https://github.com/Hmbown/CodeWhale/issues/5245) 🔗 Git commit 触发 tui/cli 全量重建
build.rs 监听 git branch ref 以嵌入 SHA，但每次本地 commit 都会使 `codewhale-tui` 和 `codewhale-cli` 完全重编译——即使没有任何源码变更。需要将 SHA 提取从编译依赖解耦。

### 4. [#5247](https://github.com/Hmbown/CodeWhale/issues/5247) 🧪 25 个集成测试二进制整合
`crates/tui/tests/` 有 25 个 root `.rs` 文件，每次 `cargo test` 触发 25 次大链接作业，耗时严重。建议合并 harness。

### 5. [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) ⚡ 拆分 dist 与本地 release profile
当前 `lto=true / codegen-units=1` 是为发布产物调优的，但 `AGENTS.md` 强制要求 pre-push 走 `--release`，让每个贡献者承担 fat LTO 代价。需分离 ship 与 dev profile。

### 6. [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) ⚠️ 未知模型 ID 静默降级到 128K
`context_window_for_model` 找不到模型时，**悄无声息**回退到 `LEGACY_DEEPSEEK_CONTEXT_WINDOW_TOKENS`（128,000），导致 1M 窗口模型在 128K 就触发压缩。需在 UI 层显式提示 fallback。

### 7. [#5239](https://github.com/Hmbown/CodeWhale/issues/5239) 🪟 1M 上下文却 128K 压缩
社区用户 hardy922 发现模型支持 1M 上下文，但工具仍在 128K 触发 context compression，与 #5244 同源。该问题用户可见、影响体感。

### 8. [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) 🐛 OpenModel 兼容 Anthropic 协议报错
使用 `providers.openmodel` 时频繁报 `'type' must be in ["enabled", "disabled", "auto"]`，重试偶发通过。属于 provider 适配层 bug，已有 6 条评论。

### 9. [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) 🐛 File edit 工具接受错误参数并伪造成功
当传入 `new_str` 而非正确的 `replace` 时，工具**不报错反而返回成功**——导致每个编辑位置需重做 3-5 次。是 prompt 工程与运行时校验的严重不一致问题。

### 10. [#5243](https://github.com/Hmbown/CodeWhale/issues/5243) 🔐 OAuth 登录需再次访问 provider picker
xAI 设备登录成功后，session 仍无凭证；必须回到 provider 选择窗口按 `e` 才能真正使用存储的 token。属于 live dogfood 中暴露的 UX 缺陷。

> 备选关注：[#4955](https://github.com/Hmbown/CodeWhale/issues/4955) `--no-sandbox` 本地开发模式请求（👍1）、[#5241](https://github.com/Hmbown/CodeWhale/issues/5241) 定价端点 503 全部会话 `unverified_live_pricing`、[#4991](https://github.com/Hmbown/CodeWhale/issues/4991) 编译时间社区讨论。

---

## 📥 重要 PR 进展

### 1. [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) 🚂 v0.9.4 release train
整合列车，77 commits ahead of main，包含 18 个 train commit 与候选源。**这是当前最关键的合并目标**，决定了 0.9.4 的实际发布内容。

### 2. [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) ♻️ Subagent 中断后通过 followup 恢复
`agents/followup` 之前对 `interrupted_continuable` 子代理会丢入死信——checkpoint 保留但无法 resume。长任务（文档审阅、多步搜索）中断后必须重新派发。修复后可直接从 checkpoint 续跑。

### 3. [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) 🔌 ACP server 暴露 file/search/git/patch/shell 工具
`session/prompt` 此前只流式输出模型文本，**从不执行工具调用**，导致通过 ACP 接入的编辑器（Zed、第三方 acp-deepseek-adapter）只是聊天代理。修复后可真正驱动代码编辑。

### 4. [#5228](https://github.com/Hmbown/CodeWhale/pull/5228) ✅ (CLOSED) TUI rail 统一栈
12 个 commit 的面板统一栈 rebase 到 release train，已合并。属于大型重构落地。

### 5. [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) 🌐 MCP Registry 发现 + Registry-first 工具选择
模型在写 `exec_shell` / 自定义代码前，会**优先查询公共 MCP Registry**，找到零环境 stdio server 直接复用。新增 `registry_sync` 同步流程。

### 6. [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) 🎯 持久化 goal-loop 状态与完成控制
新增 `GET /v1/threads/{id}/goal` 等端点，让托管客户端能读取活跃目标状态并通过标准 runtime 边界驱动生命周期。是 Fleet 治理的关键拼图。

### 7. [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) 📜 Verifier receipts 与证据暴露
之前 Fleet 只有 `verifier_failed` 计数，无法定位失败任务、原因或是否重试。新增 `/v1/fleet/runs/{run_id}/receipts` 等端点，提升可观测性。

### 8. [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) 🧠 Runtime API memory 端点
新增 `/v1/memory` 一组端点，支持限定范围检查与生命周期控制。托管客户端不再需要第二个 memory store。

### 9. [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) 🔧 MCP server 配置与生命周期管理
Runtime API 此前只有只读 MCP inventory。新增 POST/PATCH/DELETE `/v1/apps/mcp/servers` 完整 CRUD。

### 10. [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) 🛠 Skill 生命周期端点
补齐 install / update / uninstall / trust / audit 全套 HTTP 接口，与 TUI 操作对齐。

> 备选关注：[#5240](https://github.com/Hmbown/CodeWhale/pull/5240) Bash wait 工具展示真实耗时（解决模型忙轮询短 wait）、[#5234](https://github.com/Hmbown/CodeWhale/pull/5234) 修复鼠标捕获期间 alternate scroll 错乱、[#5229](https://github.com/Hmbown/CodeWhale/pull/5229) Windows 新手指南中文版（已 Win10 实测验证）、[#5095](https://github.com/Hmbown/CodeWhale/pull/5095) OHOS 含空格路径链接器参数修复。

---

## 📈 功能需求趋势

从 13 条活跃 Issue 与 29 条 PR 中提炼，社区当前最关注的五大方向：

| 方向 | 代表性 Issue / PR | 信号强度 |
|------|------|------|
| **构建性能优化** | #5249 / #5245 / #5246 / #5247 / #5248 | 🔥🔥🔥🔥🔥 v0.9.5 全部 epic |
| **Runtime API 完善** | #5131/#5132/#5133/#5130/#5129 | 🔥🔥🔥🔥 五大资源一次性补齐 |
| **上下文窗口正确性** | #5239 / #5244 | 🔥🔥🔥🔥 用户可见 bug |
| **MCP / ACP 生态集成** | #5238 / #5225 | 🔥🔥🔥 Registry + 工具暴露 |
| **Provider / 计费可靠性** | #4978 / #5241 / #5233(CLOSED) | 🔥🔥🔥 多 provider 适配稳定性 |
| **本地开发体验** | #4955 / #5095 | 🔥🔥 sandbox 与交叉编译 |
| **长任务可恢复性** | #5242 | 🔥🔥 checkpoint followup |

---

## 👨‍💻 开发者关注点

1. **"单体重编译税"是最痛的痛点**
   单 crate 68 万行、95 个 build.rs、52 个 proc-macro 的串行编译链路，已经到了吞噬每个 edit-commit-test-release 循环的程度。Hmbown 亲自下场开 Epic，说明这是项目进入"性能瓶颈期"的标志。

2. **Runtime API 的"可托管化"是关键里程碑**
   连续 5 个 PR（#5129–#5133）一次性补齐 memory / MCP / skill / goal / verifier 五大资源，说明产品正在从"单机 TUI"向"可被 Fleet 托管的运行时"演进——这是商业化与多客户端接入的前置条件。

3. **模型能力与运行时假设脱节**
   1M 上下文却按 128K 压缩，是典型的"模型演进速度 > 工具假设更新速度"问题。开发者要求 UI 层显式标注 fallback（#5244），而非静默行为。

4. **工具契约与 prompt 文档必须一致**
   #5209（参数错名仍报成功）+ #5221（已 CLOSED 的提示词对齐 PR）说明，社区对**"工具真实行为 ≠ 文档承诺"**这一类问题容忍度极低。

5. **多 provider / OAuth 体验仍粗糙**
   xAI 设备登录后无法直接用、定价端点 503 全军覆没、OpenModel 协议兼容报错——三类问题指向同一根因：**多 provider 适配层缺乏回归测试覆盖**。

6. **中文与 Windows 生态在补齐**
   PR #5229 新增 Windows 中文新手指南（已在 Win10 实测），说明非英语 / 非 macOS 用户群正在被认真对待。

---

*日报基于 GitHub Issues & Pull Requests 公开数据自动生成，仅供参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*