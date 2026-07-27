# AI CLI 工具社区动态日报 2026-07-27

> 生成时间: 2026-07-27 02:22 UTC | 覆盖工具: 9 个

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
**数据周期：2026-07-26 ~ 2026-07-27**

---

## 一、生态全景

当前 AI CLI 工具已从「单一命令行入口」快速演进为「**Agent Runtime + Desktop Surface + Provider Router**」的三层架构。从本次盘点可见三大共性信号：(1) **桌面端与多 Session 编排**成为最强诉求（Claude Code、OpenCode、Pi、DeepSeek TUI 均出现专项投入）；(2) **安全与凭据管理**正在成为悬于所有头部项目头顶的紧迫议题（MCP OAuth、IPC 权限、变量扩展绕过、空串 CORS 等高危问题集中爆发）；(3) **上下文压缩（Compact）与扩展生命周期**正取代「模型本身」成为新一轮工程债的主战场，Pi 0.82 系列回归即是典型样本。

---

## 二、各工具活跃度对比

| 工具 | 仓库 | 今日 Issue 更新 | 今日 PR 更新 | Release | 综合热度 |
|------|------|----------------|--------------|---------|----------|
| **DeepSeek TUI** | `Hmbown/CodeWhale` | 50 | 50 | 无 | 🔥🔥🔥🔥🔥 |
| **Pi** | `badlogic/pi-mono` | 35 | 10 | 无 | 🔥🔥🔥🔥 |
| **Claude Code** | `anthropics/claude-code` | ~11（top 表内） | 7 | 无 | 🔥🔥🔥🔥 |
| **OpenAI Codex** | `openai/codex` | ~16（top 10 + 散点） | 16 | 无 | 🔥🔥🔥🔥 |
| **OpenCode** | `anomalyco/opencode` | ~10（top 10） | ~20+（含 AAliKKhan 清道夫 PR） | 无 | 🔥🔥🔥🔥 |
| **Gemini CLI** | `google-gemini/gemini-cli` | ~10 | 10 | ✅ nightly | 🔥🔥🔥 |
| **Qwen Code** | `QwenLM/qwen-code` | ~10 | ~12+ | ✅ nightly | 🔥🔥🔥 |
| **GitHub Copilot CLI** | `github/copilot-cli` | 17 | 0 | 无 | 🔥🔥 |
| **Kimi Code CLI** | `MoonshotAI/kimi-cli` | 1 | 0 | 无 | 🔥 |

> 📌 **数据说明**：部分仓库（Claude Code、OpenAI Codex、OpenCode、Qwen Code）的日报未给出当日完整数字，表中数据为基于「精选 Top 10」与文中明示条数的估算。

---

## 三、共同关注的功能方向

### 1. 🔐 MCP OAuth / 凭据刷新链路的鲁棒性
- **OpenAI Codex**：当日一次性闭合 8 个相关 PR（#30295/#30296/#30294/#30416 + 前置），属于专项攻坚
- **GitHub Copilot CLI**：#4203 违反 RFC 6749 §6 的 refresh_token 流程，强制交互式重登
- **Gemini CLI**：#28446 修复 headless VPS 上 OAuth "Premature close"
- **Qwen Code**：#7768 Desktop IPC 桥缺授权、#7771 持久化 mcp_config 加载失败
- **共识**：MCP 集成已从「能跑」进入「要稳」，是 CLI 工具生态化的最大瓶颈

### 2. 🪟 跨平台体验（尤其 Windows）
- **OpenAI Codex**：5+ Issue 集中于 Windows（#34260 WMI 风暴、#34133 GPU 崩溃、#32094 Code Integrity 拦截）
- **Claude Code**：#81306 MSIX 卡死、#81484 claude.exe 挂死、#80087 非 ASCII 路径
- **Gemini CLI**：Windows Git Bash only、Alpine aarch64 崩溃
- **OpenCode**：#38455 Windows cmd 不可粘贴、#38789 v1.18.5 `UnsupportedContentType`
- **Copilot CLI**：#4263 Windows Terminal 分屏、#4217 libuv `uv_async_send` 崩溃
- **共识**：Windows 已超越 macOS 成为最大短板，所有头部项目均背负相关技术债

### 3. 🧠 Compact / 上下文压缩生命周期
- **Pi**：0.82.x 集中爆发 5+ 相关 Issue（#7150 RPC 静默丢消息、#7154 extension runtime 失效、#7138 reasoning 断裂）
- **Claude Code**：#80716 Plan mode Auto-mode 权限反复回退
- **共识**：compact 从「优化项」升格为「可靠性红线」，社区强烈要求**暴露生命周期 hook**

### 4. 💰 成本与缓存优化
- **GitHub Copilot CLI**：#4256 提议 Anthropic `cache_control` 断点
- **OpenAI Codex**：#35050 GPT-5.6 缺乏自动批处理，用户自助批处理可省 27–45% weighted usage
- **OpenCode**：#39008 修复 OpenRouter 路由未透传 cache_control
- **DeepSeek TUI**：#3738 → #4902 修复 DeepSeek 缓存命中率回退
- **共识**：prompt caching 与 batching 已成「必选项」，未做的项目会在用户账单上失分

### 5. 🧩 Subagent / 多 Session 可观测性
- **OpenCode**：#39010 新增 Subagents 面板（状态 + 成本）
- **DeepSeek TUI**：#3983 checklist_*/update_plan 升级为模型可见上下文
- **Pi**：#7148 mitsuhiko 提交 `/loadout` 草案
- **Claude Code**：#80798/#74386/#74116/#81505 多个跨 session 数据一致性问题
- **共识**：subagent 从「单 agent 内的循环」变为「跨 session 的协作」，可观测性成为新刚需

### 6. 🌍 国际化（i18n）爆发
- **DeepSeek TUI**：单日扩展至 9+ 语言（日韩俄法德印尼加泰罗尼亚等）
- **Claude Code**：#69078 俄语 UI 本地化
- **OpenCode**：#38280 中文本地化首次出现
- **共识**：用户基数的国际化先于官方规划

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | Claude 模型的最佳载体 + 桌面一体化 | Anthropic 订阅用户、企业 | 多 Session 编排、Plan Mode、Desktop ↔ CLI 同步 |
| **OpenAI Codex** | GPT-5.6 系模型的 IDE/桌面伴侣 | OpenAI 付费用户、Windows 桌面开发者 | Code Integrity 安全、MCP OAuth、in_app_updates |
| **Gemini CLI** | Gemini 模型的 Agent 化入口 | Google AI Pro/Vertex 企业用户 | 行为评估（Behavioral Evals）、Shell 沙箱加固 |
| **Copilot CLI** | GitHub 生态的官方 CLI | GitHub 订阅用户、BYOK 企业 | `.agents` 协议化、Anthropic 缓存复用 |
| **Kimi Code CLI** | Web 端多模态入口 | 月之暗面/Web 用户 | 多模态贴图链路（当前活跃度低） |
| **OpenCode** | 多 Provider / 多模型路由的中立客户端 | 第三方模型重度用户（DeepSeek/GLM/Ollama） | 跨 Provider 路由、Subagent 面板、本地化脚本 |
| **Pi** | 极简 + 强可扩展性的开发者工具 | CLI 进阶用户、扩展作者 | Compact lifecycle、loadout 扩展体系、minimal runtime |
| **Qwen Code** | Qwen 桌面 + Web Shell 一体化 | 通义千问用户、桌面 IDE 场景 | Desktop MCP 安全、类 IntelliJ Web Shell、git 可视化 |
| **DeepSeek TUI** | DeepSeek 模型的 TUI 客户端 + 开源协议实验场 | DeepSeek 用户、开源贡献者 | Onboarding 重塑、O(N²) 性能优化、model-aware routing |

**关键差异点**：
- **闭源派 vs 开源派**：Claude Code / Codex / Copilot 偏闭源打磨体验；Pi / OpenCode / DeepSeek TUI 走开源扩展路线
- **桌面化深度**：Claude Code / Codex / Qwen Code 在 Desktop 投入最重；OpenCode / Pi / Gemini CLI 仍以 CLI/TUI 为主
- **Provider 绑定 vs 中立**：Claude Code / Gemini CLI / Qwen Code 强绑定自家模型；OpenCode / Pi / DeepSeek TUI 是中立 Provider 路由器

---

## 五、社区热度与成熟度

### 🔥 高速迭代期（活跃但欠稳定）
- **DeepSeek TUI**：50 Issue + 50 PR，单日吞吐接近头部商业项目，但提示 macOS 兼容性、贡献者 onboarding 短板
- **Pi**：35 Issue 更新揭示 0.82.x 系列集中回归，扩展体系正从「装饰」转向「核心」，社区在「逼官方暴露 lifecycle」
- **OpenCode**：靠 AAliKKhan 等贡献者批量清理代码卫生债，同时高频修复桌面端回归，处于「快糙猛但向好」阶段

### 🟢 成熟稳态期
- **Claude Code**：Issue 多围绕配额回归 / Windows 体验，进入「打磨期」
- **OpenAI Codex**：MCP OAuth 栈一次性闭环，反映 OpenAI 已有专门的子团队在维护稳定性
- **Gemini CLI**：nightly 节奏稳定，安全与 evals 是两条主线

### 🟡 待激活期
- **GitHub Copilot CLI**：当日 17 条 Issue 但 0 PR，需要警惕维护响应
- **Kimi Code CLI**：1 Issue / 0 PR 的极端静默，需持续观察是否进入维护模式

---

## 六、值得关注的趋势信号

### 📈 信号 1：Agent Runtime 正在被重新定义
从本次数据看，**compact、subagent lifecycle、session resume、跨 session 一致性**已成为所有头部项目的共同技术债。这不再是「模型能力」问题，而是 **Agent Runtime 工程问题**。对开发者的启示：如果你正在自建 agent 框架，**先把 lifecycle hook 与跨 session 状态机设计好**，否则 compact 上线即翻车。

### 📈 信号 2：Desktop 权限边界是下一个 OWASP Top 10
Qwen Desktop IPC 桥绕过授权、MCP 工具拒绝被新 SSE 会话绕过、Claude Code devcontainer IPv6 旁路、空 Origin 串绕过 CORS——这些不是孤立 bug，而是 **desktop agent 范式下的系统性漏洞**。建议所有桌面端 agent 项目立刻进行权限边界审计。

### 📈 信号 3：成本可观测性成为产品差异点
GPT-5.6 批处理节省 27–45%、DeepSeek 缓存命中率回退、OpenCode 透传 cache_control——开发者已经用 **量化数据** 倒逼官方优化。对产品决策者的启示：**自研 CLI/Agent 时必须内置 token 成本面板**，否则会被竞品用账单打动。

### 📈 信号 4：Provider 中立化是开源工具的最大机会窗口
OpenCode（DeepSeek/GLM/Ollama）、Pi（多 provider 适配）、DeepSeek TUI（model-aware routing）的活跃度印证：**当闭源巨头绑定自家模型时，用户对中立路由器的需求反而上升**。这是商业 CLI 工具的差异化护城河。

### 📈 信号 5：扩展体系（Extension / Plugin / Loadout）是产品演化的下一站
Pi 的 `/loadout` 草案、OpenCode 的 Subagent 面板、Claude Code 的 web4-governance 插件、DeepSeek TUI 的 Skill/workflow——「让用户改造 agent 自身」正在从概念走向实装。这是 agent 工具从「软件」变成「平台」的关键拐点。

### 📈 信号 6：夜间版本（nightly）成为新交付节奏
Gemini CLI 与 Qwen Code 均采用 nightly 自动 bump，且 deps 批量更新（Qwen 单次 75 项、@google/genai 跨大版本）已成常态。**主版本语义正在被持续交付取代**，对企业的兼容性治理提出新挑战。

---

> 📌 **报告小结**：2026 年中的 AI CLI 生态已进入「**Runtime + Surface + Router**」三层竞速阶段。闭源派以 Claude Code / Codex 为代表在「Surface」层抢跑；开源派以 OpenCode / Pi / DeepSeek TUI 为代表在「Router」层分化；中型项目（Qwen / Gemini / Copilot）则在「Runtime 稳定性」上集中补课。**未来 6 个月决定胜负的关键变量**不再是模型本身，而是 (1) Desktop 权限边界的工程成熟度、(2) Compact/Subagent lifecycle 的开放性、(3) 跨 Provider 路由的成本可观测性。

---

*报告基于 2026-07-27 各工具 GitHub 公开数据生成，仅供技术决策参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-07-27 · 来源：anthropics/skills*

---

## 1. 热门 Skills 排行（PR）

> 注：原始 PR 评论数均为 undefined，以下排序综合了**关联 Issue 关注度、近期活跃度、功能覆盖广度**三个维度。

| 排名 | PR / Skill | 核心功能 | 社区热度来源 | 状态 |
|---|---|---|---|---|
| 🥇 | **[#1298 fix(skill-creator): run_eval.py 0% recall](https://github.com/anthropics/skills/pull/1298)** | 修复 `run_eval.py` 在所有 skill 描述上都误报 0% 召回率的根因——包括 Windows 流读取、触发检测和并行 worker | 关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论）+ [Issue #1169](https://github.com/anthropics/skills/issues/1169)（3 评论）+ 多个复现 PR | OPEN |
| 🥈 | **[#514 document-typography skill](https://github.com/anthropics/skills/pull/514)** | 检测 AI 生成文档中的孤行、寡行、编号错位等排版问题 | 解决 Claude 输出文档的"通病"，具有普适价值 | OPEN |
| 🥉 | **[#486 ODT skill](https://github.com/anthropics/skills/pull/486)** | 创建/填充/解析 OpenDocument 格式（.odt/.ods） | 补齐开源文档格式生态，对接 LibreOffice 用户群 | OPEN |
| 4 | **[#210 Improve frontend-design skill](https://github.com/anthropics/skills/pull/210)** | 提升 frontend-design skill 的清晰度与可执行性 | 让 Claude 在单次会话内真正能遵循的设计规范 | OPEN |
| 5 | **[#83 skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** | Meta 级技能：5 维度质量审计 + 安全分析 | 与 [#492 安全议题](https://github.com/anthropics/skills/issues/492)（43 评论，社区 #1）形成直接呼应 | OPEN |
| 6 | **[#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367)** | 输出前的机械校验 + 四维度推理质量门控 | 与 [#1385 推理质量门控提案](https://github.com/anthropics/skills/issues/1385) 形成体系化趋势 | OPEN |
| 7 | **[#723 testing-patterns skill](https://github.com/anthropics/skills/pull/723)** | Testing Trophy 哲学 + 单元测试/组件/E2E 全栈 | 工程化团队高频诉求 | OPEN |
| 8 | **[#1302 color-expert skill](https://github.com/anthropics/skills/pull/1302)** | 覆盖命名系统、色彩空间、CAM16 等专业知识 | 颜色任务领域首个系统化 skill | OPEN |

---

## 2. 社区需求趋势（Issues）

按社区诉求密度提炼，呈现四个清晰方向：

### 🔒 方向 A：安全与信任治理（最高优先级）
- **[#492 社区 skill 假冒 anthropic/ 命名空间 → 信任边界滥用](https://github.com/anthropics/skills/issues/492)** ⭐43 评论 社区 TOP 1
- **[#1175 SharePoint Online 场景下 SKILL.md 的权限/上下文顾虑](https://github.com/anthropics/skills/issues/1175)**
- **[#16 把 Skills 暴露为 MCP 以统一协议](https://github.com/anthropics/skills/issues/16)**

**信号**：当社区贡献 skill 借用 `anthropic/` 命名空间时，用户会误授高权限——这是当下最尖锐的生态问题。

### 🏢 方向 B：企业级工作流
- **[#228 组织内 Skill 共享](https://github.com/anthropics/skills/issues/228)** ⭐16 评论 / 👍8
  - 当前流程：下载 .skill 文件 → Slack/Teams 传递 → 手动上传，极其笨重
- **[#29 Skills 与 AWS Bedrock 的集成](https://github.com/anthropics/skills/issues/29)** ⭐4 评论
- **[#189 document-skills 与 example-skills 重复安装](https://github.com/anthropics/skills/issues/189)** ⭐6 评论 / 👍9

**信号**：从"个人技巧"走向"团队/组织资产"的需求已经成型，但基础设施尚未跟上。

### 🛠️ 方向 C：skill-creator 自身的可靠性危机
- **[#556 run_eval.py 触发率永远 0%](https://github.com/anthropics/skills/issues/556)** ⭐12 评论 / 👍7
- **[#1169 字面 slash-command 查询也 recall=0%](https://github.com/anthropics/skills/issues/1169)**
- **[#1061 Windows 多重兼容性问题](https://github.com/anthropics/skills/issues/1061)**（subprocess PATHEXT / cp1252 / select on pipes）
- **[#202 skill-creator 应该按 best practice 改造](https://github.com/anthropics/skills/issues/202)** ⭐8 评论（CLOSED 但议题仍持续）

**信号**：描述优化循环目前是在"对噪声做优化"，已经至少有 6 个 PR 在试图修复——这是基础设施层面的断裂。

### 🎯 方向 D：新领域 skill 提案
- **[#1329 compact-memory（agent 紧凑状态符号化）](https://github.com/anthropics/skills/issues/1329)** ⭐9 评论
- **[#412 agent-governance（AI agent 系统安全模式）](https://github.com/anthropics/skills/issues/412)**
- **[#1385 推理质量门控三阶段管线](https://github.com/anthropics/skills/issues/1385)**

**信号**：从"工具型 skill"向"元能力型 skill"演进——记忆压缩、治理、质量门控。

---

## 3. 高潜力待合并 Skills

以下 PR **全部 OPEN、议题反馈积极、与社区痛点强对齐**，预计近期落地：

| Skill | 关键价值 | 关联 Issue/PR |
|---|---|---|
| **[#1298](https://github.com/anthropics/skills/pull/1298) skill-creator eval 修复（核心）** | 不修这个，`improve_description.py` 完全失效——基础设施级 blocker | #556、#1169、#1061 |
| **[#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer + security-analyzer** | 直接响应社区 #1 关切（#492 安全议题） | #492 |
| **[#514](https://github.com/anthropics/skills/pull/514) document-typography** | 所有文档任务受益，零外部依赖 | — |
| **[#486](https://github.com/anthropics/skills/pull/486) ODT** | 补齐开源文档格式 | — |
| **[#210](https://github.com/anthropics/skills/pull/210) frontend-design 改进** | 现有 skill 体验升级 | — |
| **[#1367](https://github.com/anthropics/skills/pull/1367) self-audit v1.3.0** | 通用质量门控，与企业需求共振 | #1385 |
| **[#723](https://github.com/anthropics/skills/pull/723) testing-patterns** | 工程团队刚需 | — |
| **[#1302](https://github.com/anthropics/skills/pull/1302) color-expert** | 填补垂直空白 | — |

---

## 4. Skills 生态洞察（一句话）

> **社区最集中的诉求是"先把基础设施修对"——skill-creator 的评估回路（recall 永久 0%）和命名空间信任机制是当下两条断层线，所有新 Skill 提案与改进都在等这条地基被夯实。**

---

### 附录：跨平台/工程化问题（隐性热点）

- **Windows 兼容**：[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#362](https://github.com/anthropics/skills/pull/362)（UTF-8 panic）、[#361](https://github.com/anthropics/skills/pull/361)（YAML 特殊字符）、[#539](https://github.com/anthropics/skills/pull/539)、[#1061](https://github.com/anthropics/skills/issues/1061)——6 个 PR/Issue 集中爆发，表明 Windows 用户已被系统性边缘化。
- **DOCX/PDF 工程缺陷**：[#538](https://github.com/anthropics/skills/pull/538)（大小写引用）、[#541](https://github.com/anthropics/skills/pull/541)（`w:id` 冲突导致文档损坏）——文档类 skill 的鲁棒性问题正在被严肃对待。

---

# Claude Code 社区动态日报
**2026-07-27 · GitHub: anthropics/claude-code**

---

## 📌 今日速览

过去 24 小时内仓库无新版本发布，Issue/PR 活动主要集中在 **桌面端体验**、**多 Session/Agent 编排** 与 **订阅配额** 三大方向。社区关注度最高的仍是 #28791 的 CLI↔桌面端会话同步需求（107 👍），同时多个围绕 Max/Pro 配额异常、Windows 安装/防火墙、Bedrock 503 等线上故障的反馈集中爆发。

---

## 🚀 版本发布

**无新版本**（过去 24 小时无 Release 活动）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 关注度 | 要点 |
|---|------|------|--------|------|
| [#28791](https://github.com/anthropics/claude-code/issues/28791) | CLI 与桌面端会话历史同步 | OPEN | 27 评论 / 107 👍 | **本周最强需求**。用户希望 CLI 与 Claude Code Desktop 双向同步会话，提升跨设备连续性。 |
| [#44380](https://github.com/anthropics/claude-code/issues/44380) | `--channels plugin` 消息无法唤醒空闲 Session | OPEN | 11 评论 | Telegram channel 消息仅打印不触发处理，REPL 卡在输入态；属 stale，MCP/Channel 用户痛点。 |
| [#41015](https://github.com/anthropics/claude-code/issues/41015) | 允许配置/禁用 URL Handler 安装路径 | OPEN | 9 评论 / 34 👍 | 默认硬编码到 `~/Applications/` 对企业用户不友好，需要可配置。 |
| [#80716](https://github.com/anthropics/claude-code/issues/80716) | Plan 模式 Auto-mode 误判权限变化反复回退 | OPEN | 7 评论 / 15 👍 | v2.1.218 中只读工具被反复要求手动确认，严重影响体验。 |
| [#72027](https://github.com/anthropics/claude-code/issues/72027) | Pro 订阅者被错判为「organization disabled」 | OPEN | 6 评论 | 鉴权同步 bug，Pro 用户被强制要求升级到 Max，社区争议较大。 |
| [#80199](https://github.com/anthropics/claude-code/issues/80199) | Max X5 升级后配额瞬间 100% | OPEN | 5 评论 | 软件更新触发配额计数异常，影响付费用户体验。 |
| [#80705](https://github.com/anthropics/claude-code/issues/80705) | 配额泄漏 (Usage leak) | OPEN | 5 评论 | 与 #80199 同类反馈，进一步证明配额计算近期存在回归。 |
| [#64479](https://github.com/anthropics/claude-code/issues/64479) | Edit 工具在 Unicode 字面/转义混合行失败 | OPEN | 5 评论 | #52813 的长期遗留 bug，整串回退策略仍不稳定。 |
| [#71500](https://github.com/anthropics/claude-code/issues/71500) | VS Code 扩展 2.1.187–2.1.191 Sessions 侧栏回归 | OPEN | 4 评论 | 外部创建的 transcript 文件不再显示，影响 VS Code 工作流。 |
| [#81306](https://github.com/anthropics/claude-code/issues/81306) | Windows 桌面崩溃导致 MSIX 包卡死 | OPEN | 3 评论 | 需手动卸载包恢复，过程中本地数据（Code-tab 组、crash dump）丢失。 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 修复/特性 |
|----|------|----------|
| [#81500](https://github.com/anthropics/claude-code/pull/81500) | 修复 AWS gateway 示例中失效的 walkthrough 链接 | 修正 7 处指向 `code.claude.com` 的 404 文档链接 |
| [#81426](https://github.com/anthropics/claude-code/pull/81426) | `security-guidance` 支持 Windows venv 布局 | 让 agentic reviewer 在 Windows 上也能运行（解决 `SKIP_WIN32`） |
| [#81423](https://github.com/anthropics/claude-code/pull/81423) | devcontainer 防火墙增加 IPv6 出站阻断 | 修复双栈网络下 IPv6 完全绕过 `iptables` allowlist 的高危漏洞 |
| [#81421](https://github.com/anthropics/claude-code/pull/81421) | `settings-bash-sandbox.json` 在沙箱不可用时 fail-closed | 防止「沙箱不可用却仍以普通权限执行」的降级风险 |
| [#38167](https://github.com/anthropics/claude-code/pull/38167) | devcontainer 防火墙脚本支持 `GH_TOKEN` 认证请求 | 缓解多用户共享 IP 下 GitHub API 限流导致初始化失败 |
| [#68693](https://github.com/anthropics/claude-code/pull/68693) | `closeIssueAsDuplicate` 改用增量加 label | 修复 PATCH 替换 label 集导致平台/区域 label 被静默删除 |
| [#20448](https://github.com/anthropics/claude-code/pull/20448) | 新增 web4-governance 插件 | 引入 T3 trust tensors、entity witnessing、R6 audit trails 的 AI 治理能力 |

> 来自 mholovetskyi 的三个 PR（#81426 / #81423 / #81421）均聚焦 **沙箱与 Windows 兼容性**，是近期安全加固的重点。

---

## 📈 功能需求趋势

从 Issues 标签分布看，社区需求正快速向以下方向集中：

1. **桌面端一体化体验**（最热）
   - CLI ↔ Desktop 会话同步 #28791
   - 可配置安装路径 #41015
   - UI 本地化（俄语等）#69078
   - macOS 上箭头历史覆盖草稿 #81517

2. **多 Session / Agent 编排**
   - 提升/降级 Subagent 跨层级控制 #80798
   - Worktree 跨 session 数据丢失 #74386
   - 后台 agent 误报未退出 #74116
   - 跨 session git worktree 误提交 #81505

3. **可靠性与故障可见性**
   - Hook 启动失败完全静默 #81458
   - LSP 冷启动竞态返回不完整结果 #76870
   - Bedrock 503 永久中断会话 #74514

4. **订阅与配额治理**
   - Max/Pro 配额计算回归 #80199 / #80705 / #70758
   - Pro 鉴权错配 #72027

5. **新模型/能力诉求**
   - 社区开始在 long-running session 中报告 `claude-opus-5` / `claude-fable-5` 的行为偏差（#81474、#81505）。

---

## 🧑‍💻 开发者关注点（高频痛点）

| 痛点 | 出现频率 | 代表 Issue |
|------|----------|-----------|
| **静默失败 / 不可见信号** | 高 | #81458（hook exit 127 静默）、#76870（LSP 不完整）、#74514（Bedrock 503 无重试）— 开发者要求至少可见、可观测 |
| **跨 Session 边界的数据一致性** | 高 | #74386（worktree 误清理）、#81505（跨 worktree 误提交）、#74116（agent 状态错误）— 多 session 是新常态但缺乏隔离/协商机制 |
| **Windows 平台体验断层** | 中 | #81306（MSIX 崩溃恢复）、#81484（`claude.exe` 自 v2.1.58 后挂死）、#80087（非 ASCII 用户名路径探测）、#71500（VS Code sessions 回归） |
| **配额/订阅信任危机** | 中 | 多个 Max/Pro 异常报告均带 0 👍，说明并非小众问题，用户对升级后立刻耗尽配额普遍不满 |
| **沙箱与安全降级路径** | 中 | #81421、#81423、#81426、#79973（项目信任对话框被跳过）— 安全特性覆盖不全，存在 fail-open 风险 |
| **Hook / 插件可观测性** | 新增 | #80693（PreToolUse ask 决策渲染缺失）、#79973（项目级插件静默不加载）— 生态工具逐步增多后，调试能力跟不上 |

---

## ✅ TL;DR

- **桌面端体验与多 Session 协作** 成为本周最强诉求；
- **订阅/配额回归** 集中爆发，Anthropic 需尽快释出修复版本；
- **Windows + 沙箱安全** 是 mholovetskyi 等贡献者重点攻坚方向，相关 PR 值得追踪；
- 开发者反复呼吁「**故障必须可见**」，静默失败正在消耗社区信任。

> 📎 完整数据：[anthropics/claude-code Issues](https://github.com/anthropics/claude-code/issues) · [Pull Requests](https://github.com/anthropics/claude-code/pulls)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-07-27** | 数据来源：[github.com/openai/codex](https://github.com/openai/codex)

---

## 一、今日速览

- **Linux 桌面版诉求持续霸榜**：呼声最高的 #11023（获 852 赞 / 187 评论）继续领跑社区热度，反映跨平台支持的迫切需求。
- **Windows 平台成为 Bug 重灾区**：过去 24 小时更新的 Issue 中，超过半数涉及 Windows 桌面端，集中在 GPU 进程崩溃、WSL 集成、Code Integrity 拦截等系统性问题上。
- **MCP OAuth 系列重构接近收尾**：开发者 `stevenlee-oai` 提交的 OAuth 栈（PR #30295/#30296/#30294/#30416）当日全部 CLOSED，叠加今日已关闭的前置 PR，OAuth 凭据序列化与恢复链路整体收敛。

---

## 二、版本发布

**今日无新版本发布。**

注意：PR #31817 是 GitHub Actions 自动发起的 `models.json` 更新，意味着 OpenAI 后端模型注册表有变更但未单独发包。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关键看点 | 链接 |
|---|---|---|---|
| **1** | **#11023** — Codex 桌面版 Linux 支持 | 社区最强诉求：852 👍 / 187 评论。因 macOS 上性能问题（#10432）迫使大量用户在 Linux 桌面寻求替代方案，对应请求量极大。 | [#11023](https://github.com/openai/codex/issues/11023) |
| **2** | **#34260** — Windows `taskkill.exe`/`conhost.exe` 清理风暴耗尽 WMI | 影响 Windows 桌面端稳定性的高危 bug：清理进程进入死循环，反复查询 `Win32_Process` 最终导致 WMI provider 配额耗尽。 | [#34260](https://github.com/openai/codex/issues/34260) |
| **3** | **#17320** — SQLite WAL 因忽略 `RUST_LOG` 的 TRACE 日志疯狂写入 | 性能/磁盘损耗问题，与 #35092 高度相关。社区呼吁正确处理日志级别过滤。 | [#17320](https://github.com/openai/codex/issues/17320) |
| **4** | **#31573** — OAuth 在 issuer 校验阶段失败 | 影响 CLI 0.143.0 用户登录，直接关系到 MCP 工具链可用性，与今日多笔 OAuth PR 形成需求端验证。 | [#31573](https://github.com/openai/codex/issues/31573) |
| **5** | **#24948** — Session 日志膨胀至 700MB–2GB | 会话长期使用后日志文件巨大，源自 compaction 历史与原始工具输出未截断，磁盘与同步压力骤增。 | [#24948](https://github.com/openai/codex/issues/24948) |
| **6** | **#34133** — Windows 截图触发 GPU 进程崩溃 | Code Integrity Event 3033 拒绝内置 `vk_swiftshader.dll`，导致 in-app Browser 截图后 GPU 进程整体崩溃。 | [#34133](https://github.com/openai/codex/issues/34133) |
| **7** | **#26562** — Windows 端 Computer Use 插件不可用 | Pro 订阅用户无法在 Windows 桌面调用 Computer Use，与 macOS 形成功能差异。 | [#26562](https://github.com/openai/codex/issues/26562) |
| **8** | **#30712** — Windows 注入拆分的 writable roots，导致 `apply_patch` 失败 | 安全沙箱路径分裂迫使模型回退到 PowerShell 直接写文件，削弱沙箱保护意义。 | [#30712](https://github.com/openai/codex/issues/30712) |
| **9** | **#32094** — 嵌入式浏览器打开 WebCodecs/Canvas 页面时崩溃 | GPU / Code Integrity 链路的另一处表现，与 #34133、#27828、#35352 共享根因，被 BRWPLAT-293 跟踪。 | [#32094](https://github.com/openai/codex/issues/32094) |
| **10** | **#35050** — GPT-5.6 串行化独立 Code Mode 调用 | 模型行为缺陷：缺乏自动批处理。用户通过显式批处理可省 27–45% weighted usage，反映对成本控制的关注。 | [#35050](https://github.com/openai/codex/issues/35050) |

---

## 四、重要 PR 进展（Top 10）

> **注**：当日更新的 16 个 PR 中大多数已被合并/关闭，重点如下。

| # | PR | 关键内容 | 链接 |
|---|---|---|---|
| **1** | **#35537** [CLOSED] — 增加应用内更新托管策略 | 新增默认开启的 `in_app_updates` feature，管理员可通过 `requirements.toml` 关闭并通过 `configRequirements/read` 暴露策略。 | [#35537](https://github.com/openai/codex/pull/35537) |
| **2** | **#35530** [CLOSED] — 在 world state 中追踪 model 与 personality | 持久化模型与人格快照，模型切换与人格指令通过 world-state diff 生成（含回放推断）。 | [#35530](https://github.com/openai/codex/pull/35530) |
| **3** | **#35525** [CLOSED] — 跳过无待处理用户交互的非活跃 TUI 线程 | 只从存在待处理输入/审批的事件存储收集请求，避免多线程上下文互相干扰。 | [#35525](https://github.com/openai/codex/pull/35525) |
| **4** | **#35524** [CLOSED] — 在重放历史中保留 terminal turn 错误 | 修复从 rollout 重建线程时丢失 turn completion 事件中嵌入的错误，避免模型过载告警被静默吞掉。 | [#35524](https://github.com/openai/codex/pull/35524) |
| **5** | **#35523** [CLOSED] — 显式关闭进程内 outbound router | 分离的处理器会保留 outgoing sender，导致关闭时等待 channel 关闭无法真正终止 app-server outbound router。 | [#35523](https://github.com/openai/codex/pull/35523) |
| **6** | **#30295** [CLOSED] — 序列化 MCP OAuth login/logout | OAuth 栈第一层：保证登录登出操作互斥，避免共享 store 写竞争。 | [#30295](https://github.com/openai/codex/pull/30295) |
| **7** | **#30296** [CLOSED] — 上报 MCP OAuth Auto store 漂移 | 自动检测 / 报告 OAuth Auto store 与真实凭据的不一致，提升调试能力。 | [#30296](https://github.com/openai/codex/pull/30296) |
| **8** | **#30294** [CLOSED] — 把 MCP OAuth 恢复流路由到 Codex 内部 | 替代依赖外部 rmcp-client 的恢复路径，统一错误处理入口。 | [#30294](https://github.com/openai/codex/pull/30294) |
| **9** | **#30416** [CLOSED] — 序列化权威 MCP OAuth 刷新事务 | OAuth 栈第二层：保证 OAuth refresh 在事务级别串行，避免并发刷新导致的凭据失效。 | [#30416](https://github.com/openai/codex/pull/30416) |
| **10** | **#30985** [OPEN] — App-server 允许空闲自动挂载线程卸载 | 区分隐式 observer 挂载与显式 retain 订阅，空闲 30 分钟后可走现有线程卸载生命周期，避免长跑内存泄漏。 | [#30985](https://github.com/openai/codex/pull/30985) |

> 多个早期 OAuth PR（#29017–#29021、#30089）在同一日被批量关闭并标注为「已被 MCP OAuth stack #30292 替代」，意味着 OpenAI 已在内部完成了对旧方案的全面替换。

---

## 五、功能需求趋势

| 方向 | 证据 | 链接 |
|---|---|---|
| **Linux 桌面/跨平台支持** | #11023 持续占据热度榜第一，获 852 👍 与近 200 评论。 | [#11023](https://github.com/openai/codex/issues/11023) |
| **GPT-5.6 上下文窗口恢复/可配置** | #34619 要求恢复 Sol 模型 372k 上下文或开放 opt-in 开关。 | [#34619](https://github.com/openai/codex/issues/34619) |
| **模型成本与行为优化** | #35050 指出 GPT-5.6 缺乏自动批处理导致浪费，用户自助批处理可省 27–45%。 | [#35050](https://github.com/openai/codex/issues/35050) |
| **In-app updates 管控** | PR #35537 新增 `in_app_updates` 特性与管理员策略，满足企业级更新控制需求。 | [#35537](https://github.com/openai/codex/pull/35537) |
| **持久化 world state（人格/模型）** | PR #35530 把模型与人格纳入持久化 world state，反映多模型/多人格切换的产品演进。 | [#35530](https://github.com/openai/codex/pull/35530) |
| **MCP OAuth 健壮性** | 一次性闭环了 8 个相关 PR，社区明显在推动 MCP 集成稳定性。 | 多 PR |

---

## 六、开发者关注点（社区痛点提炼）

1. **跨平台 Bug 高度集中在 Windows**：#34260、#34133、#32094、#27828、#35352、#31989、#35119 等高频 issue 指向 Code Integrity 拦截 `vk_swiftshader.dll`、WSL 路径未翻译、GPU 进程崩溃三大共性根因，被标签 `BRWPLAT-293` 集中追踪。
2. **磁盘与日志膨胀顽疾未根治**：#24948（700MB–2GB 会话日志）、#17320 + #35092（SQLite TRACE 日志高频写入）、#34061（Subagent 磁盘占用异常），均反映日志与持久化层缺乏节流机制。
3. **沙箱安全工作流被破坏**：`apply_patch` 在 Windows 拆分 writable root 下失败 → #30712，导致代理回退到 PowerShell 直写文件，削弱沙箱意义。
4. **macOS 性能/稳定性反复**：#11023 中用户因 macOS 体验问题转向 Linux；#16866 出现 Apple Silicon 上 macOS kernel panic；#32055 报道 macOS 屏幕闪烁。
5. **OAuth & MCP 集成仍是开发体验焦点**：#31573 校验失败 + 当日 8 个 MCP OAuth PR，体现 OpenAI 团队正以 PR 批量修复形式提升 OAuth 鲁棒性。
6. **iOS 端回归与远程控制连通性**：#34676（Projects 侧边栏被移除）、#31786（Windows→Android 远控卡在 connecting），移动端体验持续让用户失望。
7. **成本敏感度上升**：#35050 显示开发者开始用量化的 token 成本证据向官方反馈模型行为问题。

---

### 📌 编辑评论
今天最值得跟踪的两条线：(1) **MCP OAuth 栈的合并落地**，建议关注 #30292 系列底层的连续 merge；(2) **Windows 桌面端的 GPU/Code Integrity 链式故障** 是否在官方 next release 中给出系统性修复公告。同时，Linux 桌面需求（#11023）虽已久挂，但 OpenAI 尚无明确排期，社区耐心正在消耗。

---

*报告生成时间：2026-07-27 ｜ 基于 GitHub Issues & PRs 公开数据*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-07-27
**数据来源**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日社区活动以**性能稳定性**和**安全加固**为主线。Issue #22141（小型代码编辑任务卡顿/超时）继续以 218 条评论位居热度榜首，反映出 Agent 循环性能问题仍是用户最大的痛点；同时，安全团队推进了多项关键修复，包括 Shell 变量扩展绕过漏洞（GHSA-wpqr-6v78-jr5g）、文件密钥库认证标签强化及 OAuth 在 headless VPS 上的"Premature close"问题。每日 nightly 版本如期发布，依赖批量更新同步落地。

---

## 🚀 版本发布

- **v0.54.0-nightly.20260727.g3818efbbf** 已发布
  - 🔗 [查看完整变更](https://github.com/google-gemini/gemini-cli/compare/v0.54.0-nightly.20260726.g3818efbbf...v0.54.0-nightly.20260727.g3818efbbf)
  - 📦 由 PR #28544 自动触发版本号 bump

---

## 🔥 社区热点 Issues

### 1. [#22141](https://github.com/google-gemini/gemini-cli/issues/22141) ⭐164 💬218 — [性能] 小型代码编辑任务卡顿 1+ 小时
**优先级**: P2 | **状态**: OPEN（Stale）
用户报告即使仅编辑 1–3 个文件，CLI 也会在编辑完成后卡住数分钟；个别情况下回答一个简单问题需要 13–14 分钟。是当前**社区最高热度、最多人点赞**的 Issue，反映 Agent loop 与模型响应延迟的普遍性。

### 2. [#25868](https://github.com/google-gemini/gemini-cli/issues/25868) — [Bug] 多次连续编辑同一文件，只有最后一次生效
**优先级**: P1 | **状态**: CLOSED
此前 PR #8513 的"序列化变更函数调用"修复未完全生效，仍存在多次连续 edit 丢失中间结果的问题。今日已关闭，但需关注后续是否真正修复。

### 3. [#26864](https://github.com/google-gemini/gemini-cli/issues/26864) — [文档] 教 Gemini 模型了解 gemini-cli 配置
**优先级**: P2 | **状态**: CLOSED
用户反馈 Gemini 模型不认识 MCP 服务器配置，会幻觉出错误的配置文件名。这是**模型-工具一致性**的关键问题，影响首次使用体验。

### 4. [#19894](https://github.com/google-gemini/gemini-cli/issues/19894) — [P1 Bug] 不正常的循环调用
**优先级**: P1 | **状态**: CLOSED
Agent 在任务中陷入巨大循环；与 #22141、#23182 共同构成"Agent 失控循环"问题群，是稳定性核心痛点。

### 5. [#23182](https://github.com/google-gemini/gemini-cli/issues/23182) — [P1 Bug] 无法选择工具读文件时无限消耗 Token
**优先级**: P1 | **状态**: CLOSED
Agent 在 read_file 工具选择失败时仍持续循环调用，**直接造成 Token 浪费**，是成本与体验的双重问题。

### 6. [#22225](https://github.com/google-gemini/gemini-cli/issues/22225) — [Security] API Key 泄露与凭证脱敏失败
**优先级**: P1 | **状态**: CLOSED
Agent 在系统检查时打印了 `MISTRAL_API_KEY`、`OPENAI_API_KEY` 全文。**安全团队需重点关注**，与 PR #28403 的变量扩展修复密切相关。

### 7. [#27475](https://github.com/google-gemini/gemini-cli/issues/27475) — [P1 Security] Vertex 认证 invalid_grant
**优先级**: P1 | **状态**: OPEN
Vertex 用户次日重新加载会话时频繁遇到 `invalid_rapt` 错误，影响企业用户日常使用。

### 8. [#26596](https://github.com/google-gemini/gemini-cli/issues/26596) — [P1 Bug] 执行 shell 命令时崩溃
**优先级**: P1 | **状态**: CLOSED
v0.41.0/0.41.1 在 Alpine aarch64 VM 中执行 shell 命令稳定 crash，跨平台兼容性隐患。

### 9. [#26972](https://github.com/google-gemini/gemini-cli/issues/26972) — Google AI Pro 订阅仅有 200/日 配额？
**优先级**: P2 | **状态**: CLOSED
关于付费计划配额的政策性提问，体现**订阅制用户对透明计费的诉求**。

### 10. [#26849](https://github.com/google-gemini/gemini-cli/issues/26849) / [#26575](https://github.com/google-gemini/gemini-cli/issues/26575) — Plan Mode 无法写入计划文件
**优先级**: P2 / P1 | **状态**: CLOSED
`write_file` 工具在 Plan Mode 下被策略拒绝，用户无法退出 Plan Mode。属于 Plan Mode 工作流的**关键可用性 Bug**。

---

## 🛠️ 重要 PR 进展

### 1. [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) — fix(core): 阻断 $VAR / ${VAR} 变量扩展绕过 [P1 Security]
修复 `detectBashSubstitution()` / `detectPowerShellSubstitution()` 中 GHSA-wpqr-6v78-jr5g 的不完整检查；并对 `gemini-automated-issue-dedup.yml` 工作流做纵深防御。**今日最重要的安全修复**。

### 2. [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) — fix(auth): OAuth token exchange 改用原生 fetch [P1 Security]
修复 headless VPS 上 `Invalid response body... Premature close` 问题；修复 #28440。解决企业/云端部署痛点。

### 3. [#28523](https://github.com/google-gemini/gemini-cli/pull/28523) — fix(core): 强化文件密钥库的认证标签长度与校验
显式强制 128-bit (16-byte) 标签长度，统一跨 Node.js 运行时行为，兼容畸形/截断标签。

### 4. [#28364](https://github.com/google-gemini/gemini-cli/pull/28364) — fix(core): 用户 modelConfig 深度合并覆盖默认值
修复 `Config` 构造函数对 `DEFAULT_MODEL_CONFIGS` 的浅层合并缺陷，避免嵌套配置被默认覆盖。

### 5. [#28363](https://github.com/google-gemini/gemini-cli/pull/28363) — fix(core): 防止 ShellExecutionService 中 AbortSignal 监听器泄漏
修复 #28280，长会话下避免内存泄漏。

### 6. [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) — feat(evals): 新增本地报告命令与开发者文档
开发者可通过 `npm run eval:report` 聚合 Vitest `report.json` 的模型通过率，配套行为评估指南。

### 7. [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) — docs(get-started): 补充 Windows PowerShell 故障排查
针对 Windows 全局 npm 安装后 `gemini` 命令在 PowerShell 失效问题补齐文档。

### 8. [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) — fix(vscode): 追踪 activation disposables [P2]
修复 VS Code 配套扩展中因 JS 逗号表达式导致 Disposable 未被注册到 `context.subscriptions` 的 Bug（修复 #27790）。

### 9. [#28450](https://github.com/google-gemini/gemini-cli/pull/28450) — chore(deps): GitHub Actions 依赖批量更新
`lycheeverse/lychee-action` 等 3 项 Actions 依赖升级。

### 10. [#28539](https://github.com/google-gemini/gemini-cli/pull/28539) — chore(deps): npm 依赖组批量更新 75 项
含 `simple-git`、`@modelcontextprotocol/sdk` 等重要 SDK 升级；同日另有 `@google/genai` 1.30.0→2.12.0、 `execa` 9.6.1→10.0.0 等独立 PR（#28543、#28541）。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中可归纳出五大方向：

| 方向 | 代表 Issue | 社区热度 |
|---|---|---|
| 🤖 **Agent 稳定性与可控性** | #22141, #19894, #23182, #22571（sub-agent 实时观测） | 🔥🔥🔥🔥🔥 |
| 🔐 **安全与凭据管理** | #22225（Key 泄露）, #27475（Vertex auth）, #26567（Windows shell 策略） | 🔥🔥🔥🔥 |
| 📋 **Plan Mode 工作流完善** | #26575, #26849, #26276（跨会话串扰） | 🔥🔥🔥 |
| 🌐 **多平台 / 企业部署** | #26567（Git Bash only）, #26687（SSH TTY）, #26596（Alpine） | 🔥🔥🔥 |
| 🧠 **企业 / Managed Agent** | #27392, #26972（计费） | 🔥🔥 |

**最被期待的方向**：
- **Sub-agent 实时观测与控制**（#22571 提出的"Delegation Control Gap"架构性问题）
- **Managed Agent 企业支持**（呼应 Google 博客发布的 Gemini API Managed Agents）
- **行为评估体系（Behavioral Evals）**——维护者在 #24353 提出要构建 76+ 行为评估测试覆盖 6 个 Gemini 模型

---

## 💬 开发者关注点

综合 Issue 与 PR 评论，开发者社区的高频痛点如下：

1. **🕐 Agent 循环性能与响应延迟** — 排名第一的痛点。即使是 1–3 文件的小任务也会卡顿数分钟到数十分钟，严重影响日常开发节奏。

2. **🔁 Agent 失控循环 / Token 浪费** — 工具选择失败时仍持续调用，直接抬高使用成本。

3. **🔒 凭证泄露与脱敏失败** — Agent 直接打印环境变量中的 API Key，安全红线问题。

4. **🪟 跨平台兼容性断层** — Windows Git Bash only、SSH TTY 挂起、Alpine aarch64 崩溃，企业部署频繁踩坑。

5. **📝 文档与模型知识不一致** — Gemini 模型对自身 CLI 配置/MCP 缺乏认识，会幻觉配置项，新用户体验差。

6. **🧭 Sub-agent 可观测性缺失** — 开发者无法实时查看、干预下层子 Agent 的行为，调试困难。

7. **💰 订阅配额透明度** — 付费用户对每日 200 quota 的合理性存疑。

---

> 📎 **日报由 GitHub Issues/PR 数据自动生成**，基于评论数、点赞数、优先级、模块影响力综合筛选。如需追踪特定议题，欢迎在评论区留言。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-27**

---

## 📌 今日速览

过去 24 小时内 **Copilot CLI 仓库无新版本发布**，仓库主要动态集中于 Issue 端的持续讨论与维护方分诊（triage）。在 17 条有更新的 Issue 中，一条高赞的 Linux 子进程僵尸化问题（#4163）已被关闭并修复；多条 Windows 终端、MCP 认证、BYOK 提供方与会话恢复相关问题被新增或被维护方纳入分诊。

---

## 🚀 版本发布

无。过去 24 小时内 `github/copilot-cli` 未发布新 Release。

---

## 🔥 社区热点 Issues（精选 10 条）

> 排序综合考量：👍 数、所在区域（area）、问题影响面、维护方分诊状态。

### 1. #4163 [CLOSED] copilot CLI 1.0.71 不会回收子进程，导致僵尸进程累积
- **为什么重要**：这是一个影响所有 Linux 用户的资源泄漏问题，每个会话约泄漏 2 个僵尸进程。该 Issue 获得 3 个 👍 和 4 条评论，是本周期内反馈最积极的有效 Issue，已被关闭表明修复已落地或被纳入后续版本。
- **关键标签**：`area:platform-linux` `area:tools`
- 🔗 https://github.com/github/copilot-cli/issues/4163

### 2. #4053 [OPEN] NFS/GPFS 下 TUI 停在 "Loading: N skills"，Tokio 并发触发 SIGCHLD 竞态
- **为什么重要**：在企业常见的高性能/网络文件系统（NFS/GPFS）家目录下，CLI 完全无法启动（连 MCP 未配置时也会卡死），属于阻塞型严重故障。已被 `triaged` 处理。
- **关键标签**：`area:platform-linux` `area:mcp`
- 🔗 https://github.com/github/copilot-cli/issues/4053

### 3. #4263 [OPEN] Windows Terminal 垂直分屏下提交提示后响应消失
- **为什么重要**：Windows Terminal 是 Copilot CLI 在 Windows 上最常用的终端之一，滚动/分屏均受影响，直接破坏 TUI 可用性。
- 🔗 https://github.com/github/copilot-cli/issues/4263

### 4. #4258 [OPEN] 使用 BYOK/自定义提供方时 `-i/--interactive` 启动提示被忽略
- **为什么重要**：BYOK 是企业用户的核心场景，标准提供方能自动提交 `-i` 但 BYOK 不能，反映出多提供方路径上的回归/差异处理不完善。
- 🔗 https://github.com/github/copilot-cli/issues/4258

### 5. #4202 [OPEN] 内置 `view` 工具在 1.0.73 对已存在文件报 "Path does not exist"，1.0.71 正常
- **为什么重要**：明确的版本回归（自 1.0.72 起），用户已做出受控对照实验证明问题范围，可定位到具体版本。
- 🔗 https://github.com/github/copilot-cli/issues/4202

### 6. #4264 [OPEN] 扩展 slash 命令被重复触发多次
- **为什么重要**：自定义扩展是 Copilot CLI 生态扩展的核心机制，单次输入触发 3–5 次同命令会引发并发副作用和不可预期状态。
- 🔗 https://github.com/github/copilot-cli/issues/4264

### 7. #4260 [OPEN] 桌面应用忽略 `settings.json` 中的 `askUser: false`，且无对应开关
- **为什么重要**：CLI 与桌面应用作为同一产品矩阵，理应共享配置；当前桌面应用读取不到 `askUser` 设置，暴露了"双宿主"配置同源性问题。
- 🔗 https://github.com/github/copilot-cli/issues/4260

### 8. #4259 [OPEN] `--resume` 重放未配对的 `permission.requested` 事件
- **为什么重要**：会话恢复是日常高频操作；从崩溃/中断会话恢复后反复弹出权限提示，会让用户无法使用，是数据一致性问题。
- 🔗 https://github.com/github/copilot-cli/issues/4259

### 9. #4203 [OPEN] Remote MCP（OAuth）：访问令牌过期时未走刷新令牌流程，强制交互式重登
- **为什么重要**：违反 RFC 6749 §6 的标准 OAuth 刷新流程，会让所有带缓存 refresh token 的远程 MCP 工具在每个会话起点丢失，对自动化场景尤为致命。
- **关键标签**：`area:authentication` `area:mcp`
- 🔗 https://github.com/github/copilot-cli/issues/4203

### 10. #4204 [OPEN] [功能] 在任意打开的目录中扩展 `.agents` 发现机制，覆盖 instructions / agents / hooks
- **为什么重要**：`.agents/skills` 已被广泛使用，扩展到 instructions/agents/hooks 后，能在非 Git 仓库中实现统一的 Copilot 个性化分层，是呼声较高的"协议化配置"诉求。
- **关键标签**：`area:agents` `area:configuration`
- 🔗 https://github.com/github/copilot-cli/issues/4204

> 📝 另有两条值得关注的开放问题，将在"趋势"部分展开：
> - #4217（Windows x64 退出崩溃 `FAST_FAIL_FATAL_APP_EXIT`，libuv `uv_async_send` on closing handle）🔗 https://github.com/github/copilot-cli/issues/4217
> - #4256 [功能] 为 Anthropic 请求添加 `cache_control` 断点以复用昂贵上下文 🔗 https://github.com/github/copilot-cli/issues/4256

---

## 🛠️ 重要 PR 进展

无。过去 24 小时仓库无 PR 更新。

---

## 📈 功能需求趋势

从近期 Issue 文本中可归纳出三大主线需求：

### 1. Anthropic 提示缓存与成本优化
- **#4256**：[功能] 为 Claude/Anthropic 后端请求添加 `cache_control` 断点，避免 system prompt / tool defs / 长上下文每轮全量重算。👉 https://github.com/github/copilot-cli/issues/4256
- 反映出社区对 Anthropic 旗舰模型在使用成本上的关注点。

### 2. `.agents` 协议化扩展
- **#4204**：[功能] 将 `.agents/skills` 模式扩展到 instructions / agents / hooks，覆盖任意目录，不限于 Git 仓库。👉 https://github.com/github/copilot-cli/issues/4204
- 与企业内部"统一 Copilot 个性化目录"诉求一致。

### 3. MCP 认证与注册表体系成熟化
- **#4203**：OAuth `refresh_token` 自动刷新取代交互式重登。👉 https://github.com/github/copilot-cli/issues/4203
- **#4205**：允许 MCP 注册表 Allowlist 下，运行时再追加必需的认证头。👉 https://github.com/github/copilot-cli/issues/4205
- 共同指向："企业注册表 ⇄ 远端 MCP ⇄ 本地工具"链路上的认证/策略统一化。

---

## 💡 开发者关注点

从近 24 小时社区反馈可提炼出以下高频痛点：

1. **跨平台一致性短板**
   - Windows：进程退出崩溃（#4217）、Windows Terminal 内容消失（#4263）
   - Linux：NFS/GPFS 文件系统下 TUI 挂起（#4053）、子进程僵尸化（#4163，已修）
   - TTY 下 BYOK 与 `-i` 行为分叉（#4258）

2. **MCP 生态"最后一公里"**
   - OAuth 刷新令牌不生效（#4203）、注册表与本地运行时头冲突（#4205）；工具可见性反复因认证问题掉落。

3. **会话生命周期与权限状态的一致性**
   - `--resume` 重放未完成事件（#4259）、扩展 slash 命令重复触发（#4264）；对中断恢复与扩展机制的状态机鲁棒性提出要求。

4. **CLI 与 Desktop 双宿主配置不同步**
   - `askUser` 桌面应用不识别（#4260），开发者期望同一份 `settings.json` 跨端生效。

5. **版本回归控制**
   - `view` 工具 1.0.72 起回归（#4202），社区已做出受控对照实验，社区期待更严格的版本质量门禁与回归测试。

---

> 📎 数据范围：2026-07-26 ~ 2026-07-27 期间 `github/copilot-cli` 仓库公开活动。报告中所有链接均为官方仓库路径，便于点击追溯原始讨论。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-27** ｜ **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日 Kimi Code CLI 仓库活跃度较低，过去 24 小时内无新版本发布、无 PR 更新，仅有 1 条历史 Issue 被关闭（#2559，关于 Web 端贴图丢失的 Bug 报告）。社区整体处于相对平静的维护期，无重大功能变更或热点讨论。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内无 Release 更新。

---

## 🔥 社区热点 Issues

> ⚠️ **说明**：过去 24 小时内仅 1 条 Issue 有更新，远少于常规活跃度。以下为全部更新内容。

### #2559 ⭐ [CLOSED] Web 端贴图间歇性丢失

- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2559
- **作者**：nothankyouzzz
- **状态**：已关闭
- **重要性**：该 Bug 直接影响 Kimi Code Web 的多模态交互核心体验——用户粘贴图片后，模型仅收到占位文本 `[image omitted for provider compatibility; re-read the file to view it or get conversion guidance]`，导致图片信息完全丢失，属于影响生产环境可用性的功能性缺陷。
- **社区反应**：1 条评论，👍 0 次。讨论热度不高，但问题本身具有代表性，反映了 Web 端在多模态数据传递链路上的不稳定。
- **关键细节**：Bug 表现为**间歇性**触发（同一会话中部分图片成功、部分失败），增加了排查难度；Issue 已被快速关闭，暗示维护者可能已有修复方案或定位到了根因。

> 📊 由于当日仅此 1 条 Issue 更新，无法凑足 10 条进行分析，建议持续关注后续动态。

---

## 🔧 重要 PR 进展

**无 PR 更新。** 过去 24 小时内 Pull Request 区域无任何活动。

---

## 📈 功能需求趋势

由于当日 Issue 数据样本极少（仅 1 条），以下趋势判断基于历史数据与该单条 Issue 的综合推断：

| 趋势方向 | 观察依据 | 关注度 |
|---------|---------|--------|
| **多模态稳定性** | #2559 反映 Web 端图片传递链路不可靠 | 🔥 高 |
| **Provider 兼容性** | 占位符文本提示存在"provider compatibility"限制 | 🔥 高 |
| **Web 端体验优化** | Bug 出现在 Web 端，CLI 端未受影响 | 中 |

> 💡 **核心洞察**：单条 Issue 揭示了一个潜在的系统性问题——Kimi Code 在与上游 Provider 的多模态数据对接上存在兼容层缺陷，开发者社区可能更关注**跨 Provider 一致性**和**Web 端产品成熟度**。

---

## 👨‍💻 开发者关注点

基于有限的当日数据，开发者社区反馈呈现以下特征：

1. **多模态输入可靠性**：#2559 的核心痛点是图片数据"静默丢失"——用户无法直观判断图片是否真正传达到模型，只能从回复内容推断，这对调试和工作流造成严重困扰。

2. **错误提示可操作性不足**：当前的占位符文本虽然告知了问题存在，但未提供明确的解决路径（如重试、格式转换指引），开发者期望更具**可操作性的错误反馈**。

3. **间歇性 Bug 的排查成本**：同一会话内表现不一致的问题，开发者通常需要额外日志或重现步骤才能上报，增加了社区贡献门槛。

4. **响应速度值得肯定**：Issue 从创建到关闭在 24 小时内完成，体现维护团队对 Bug 报告的响应效率较高。

---

> 📝 **日报小结**：今日为典型的"低活跃日"，无版本迭代与代码合并。建议关注 #2559 的修复是否随下次 Release 一同发布，以及 Web 端多模态处理管道的整体优化进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-27**

---

## 📌 今日速览

OpenCode 社区今日最热门话题围绕 **订阅定价调整** 与 **Desktop v1.18.5 升级回归** 两大主题：呼声最高的 #28846（DeepSeek V4 Pro 降价后调整 Go 用量上限）已正式关闭，确认价格变动将传导至订阅权益；同时，v1.18.5 在多个平台的启动失败（`UnsupportedContentType`）引发集中反馈，多条相关 Issues 已被修复或正在处理。代码层面则以 `AAliKKhan` 提交的大量"清道夫"式小 PR（清理未用 import、注释死代码、收紧类型安全）为主，另有 subagent 面板、OpenRouter Anthropic 缓存、移动端 SSE 重连等几个值得关注的功能 PR 进展。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内仓库未发布新版本。

---

## 🔥 社区热点 Issues

按评论数与社区反响挑选 10 条：

1. **[#28846](https://github.com/anomalyco/opencode/issues/28846) — 已关闭 ✅ Adjust Go usage limits after DeepSeek V4 Pro 75% price reduction**
   社区强烈要求将上游 DeepSeek V4 Pro 永久降价 75% 的红利传导至 OpenCode Go 订阅的用量上限，**95 条评论、83 👍**，是当周讨论度最高的 feature request，现已关闭（应意味着已被采纳或合并）。

2. **[#38789](https://github.com/anomalyco/opencode/issues/38789) — 开启 🐛 Desktop v1.18.5 项目重载 `UnsupportedContentType` 错误**
   Windows 用户升级到 Desktop v1.18.5 后启动弹错 `无法重新加载test`。经分析定位到 `packages/client` 生成的 SDK，与下方的 #39035、#38810、#39017 属同一根因簇。

3. **[#36506](https://github.com/anomalyco/opencode/issues/36506) — 开启 ⚠️ 所有付费 Zen 模型 `Upstream request failed`**
   `opencode/MiniMax-M3`、`opencode/deepseek-v4-flash` 等付费模型全部报上游失败，但免费 Zen 模型和 Go 模型正常，说明上游路由存在区域性或供应商级故障，影响范围广。

4. **[#38801](https://github.com/anomalyco/opencode/issues/38801) — 开启 🔁 TUI `exiting loop` 循环退出**
   用户在多 OpenAI API 场景下反复遭遇 "exiting loop"，被迫将 step 调到 80 才勉强可用，影响体验深度。

5. **[#34184](https://github.com/anomalyco/opencode/issues/34184) — 开启 💳 Go 订阅自动续费后配额未重置**
   支付已成功但系统显示"还需等待 1 天"，对刚付费的用户体验不友好，疑似计费/配额同步时区问题。

6. **[#37762](https://github.com/anomalyco/opencode/issues/37762) — 开启 🦙 Ollama + Responses 接口异常**
   64GB RAM / 4GB VRAM 的 Windows 11 用户使用本地 Ollama 调用 Responses 时遇到限速与异常，希望 OpenCode Desktop 改善本地模型体验。

7. **[#15789](https://github.com/anomalyco/opencode/issues/15789) — 开启 📜 便携式 wrapper 脚本（无需全局安装）**
   呼吁官方提供便携运行脚本，让用户无需 `npm i -g` 也能运行 OpenCode，便于企业受限环境与 CI 中使用。

8. **[#38990](https://github.com/anomalyco/opencode/issues/38990) — 已关闭 🤖 DeepSeek 模型忽略用户 Prompt**
   DeepSeek 模型频繁无视用户指令并生成完全无关的内容，疑似 prompt template 或 system prompt 在新模型上的兼容问题。

9. **[#34398](https://github.com/anomalyco/opencode/issues/34398) — 开启 🗂️ workspace 多仓 snapshot / `/undo` 静默失败**
   提出"每个子仓独立 snapshot"的需求，以解决多仓 session 中 `/undo` 静默失败的根因，与 #30065 互为补充。

10. **[#38455](https://github.com/anomalyco/opencode/issues/38455) — 开启 ⌨️ TUI 在 Windows cmd 下无法 `Ctrl+V` 粘贴**
    npm 安装的 TUI 在 Windows 10 cmd 中无法触发粘贴操作，影响日常命令输入效率。

---

## 🛠️ 重要 PR 进展

按影响力挑选 10 条：

1. **[#39010](https://github.com/anomalyco/opencode/pull/39010) — feat(session)：新增 Subagents 面板（状态 + 成本）**
   关闭 #37267。会在 Session 侧栏新增 "Subagents" 选项卡，展示子会话列表、状态图标与累计成本，缓解"主 agent 日志淹没子 agent 输出"的痛点。

2. **[#39015](https://github.com/anomalyco/opencode/pull/39015) — feat：模型门控的 auto-approve 模式**
   关闭 #37564。在不改变 agent 选择与切换逻辑的前提下，新增"按模型自动放行"的开关，搭配分类器与 TUI 模式循环。

3. **[#39008](https://github.com/anomalyco/opencode/pull/39008) — fix(llm)：在 OpenRouter 路由上启用 Anthropic prompt caching**
   关闭 #39009。修复 `applyCacheControl` 未对 OpenRouter 透传 `cache_control`，导致每个 turn 按完整 input 计费的问题，可显著降低 Anthropic 模型成本。

4. **[#39028](https://github.com/anomalyco/opencode/issues/39028) — fix(web)：移动端 tab 切回时重连 SSE**
   修复 `opencode serve`/`opencode web` 在 Chrome Android 上切后台后聊天冻结，必须手动刷新才能恢复的问题。

5. **[#39027](https://github.com/anomalyco/opencode/pull/39027) — fix(ui)：修复 Kobalte 重复触发导致 select 关闭**
   关闭 #39026。修复 Windows 上"修改 Shell/Theme 后 select 无法再次打开"的回归。

6. **[#39016](https://github.com/anomalyco/opencode/pull/39016) — fix(app)：项目选择器下拉框支持滚动**
   关闭 #37149。项目很多时下拉框无法滚动，给 `DropdownMenu.Content` 加上滚动容器。

7. **[#39021](https://github.com/anomalyco/opencode/pull/39021) — fix(server)：CORS 校验区分 undefined 与空字符串**
   修复 `Origin: `（空串）可绕过 CORS 检查的潜在安全问题，改用 `=== undefined` 判断缺失。

8. **[#39023](https://github.com/anomalyco/opencode/pull/39023) — fix(schema)：解开 Prompt 的循环类型引用**
   修复 `Prompt extends Schema.Schema.Type<typeof Prompt>` 导致的 TS7022 implicit any，下游消费者能恢复类型安全。

9. **[#39019](https://github.com/anomalyco/opencode/pull/39019) — fix(core)：按包名而非首个 entry 解析 npm edge**
   修复 `Map` 插入顺序导致 `Npm.add()` 在含 peer deps 时返回错误路径/包名的问题。

10. **[#38999](https://github.com/anomalyco/opencode/pull/38999) — fix(core)：统一 grep 行为与说明**
    要求外部目录走显式审批；正则非法时给出 actionable 错误；与 Glob 的 formatter 命名对齐。

> 备注：来自 `AAliKKhan` 的多条小 PR（#39007、#38998、#39000、#39002、#39006、#38996、#39011、#39014、#39020）集中清理未使用 import、注释残留和 `catch (e: any)`，体现仓库对类型安全与代码卫生的持续投入。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issues 提炼出社区最关心的方向：

- **💰 订阅/计费透明度**：Go 配额、自动续费、DeepSeek 降价传导（#28846、#34184、#39032）—— 用户对"付了钱但体验不符预期"非常敏感。
- **🖥️ Desktop 稳定性**：v1.18.5 集中爆发 `UnsupportedContentType` 回归（#38789、#38810、#39017、#39035），反映自动升级在多平台的回归测试仍有盲区。
- **🗂️ 多仓 / 多根 workspace 体验**：`/undo` 静默失败、缺失独立 snapshot（#34398、#38984）说明 multi-repo 已是高优场景。
- **🤖 Subagent 可观测性**：独立面板、状态/成本展示（#37267 → #39010）成为呼声最高的 UI 改进。
- **🌐 移动端 + Web 体验**：SSE 重连、SPA 路由误返回 HTML（#39028、#39017、#39030、#39036）显示 Web/Mobile 场景需要专门的回归套件。
- **🈶 国际化**：中文等本地化诉求（#38280）开始出现，用户基数在扩大。
- **🧰 部署灵活性**：便携 wrapper 脚本（#15789）、`opencode` 模式切换（#39024）等"非标但刚需"的能力。
- **🧠 模型路由稳定性**：付费 Zen 全线失败（#36506）、Ollama Responses 异常（#37762）、GLM 大文件写工具失败（#38978）—— 上游模型质量与 Provider 路由质量成为用户痛点源头。

---

## 🧑‍💻 开发者关注点

1. **升级回归 vs 修复节奏**：v1.18.5 的多个关键问题在 24-48h 内才陆续被定位到根因（`UnsupportedContentType`），开发者希望加强 desktop 端的灰度/兼容性策略。
2. **安全细节**：CORS 校验把 `Origin:` 空串当作缺失（#39021），暴露出 input validation 仍需 case-by-case 审计。
3. **类型与卫生债**：`AAliKKhan` 一连串 PR 显示核心包仍有较多未使用 import、注释死代码与 `catch (e: any)`，社区愿意以"小步快跑"方式持续清理。
4. **CLI/TUI 跨平台体验**：Windows cmd 粘贴（#38455）、SSH 滚动翻历史（#39029）、Mobile 浏览器 SSE（#39030）共同指向 TUI/Web 端的输入与滚动模型在不同 OS / 容器下的兼容性挑战。
5. **模型质量回退信号**：DeepSeek 忽略 Prompt（#38990）、GLM 大文件写工具缺失（#38978）表明第三方模型在新版本 OpenCode 下的 prompt 与工具协议需要更系统的兼容性测试。
6. **订阅账户生命周期**：邮箱注销、跨账号迁移 Go 订阅（#39032、#39025）说明订阅系统需要更友好的"账户迁移/合并"路径。

---

> 📎 数据口径：基于 `anomalyco/opencode` 仓库 2026-07-26 → 2026-07-27 的 Issues/PRs 变更。所有链接均为 `https://github.com/anomalyco/opencode/...` 形式。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-27

> 数据源：`github.com/badlogic/pi-mono`（earendil-works/pi 仓库）｜时间窗口：过去 24 小时

---

## 📌 今日速览

过去 24 小时内 Pi 仓库活动密集：**35 条 Issue 更新 + 10 个 PR 提交**，但**无新版本发布**。社区关注点高度集中在三件事：(1) `0.82.x` 版本 compact 流程暴露出的一系列稳定性与扩展性回归；(2) TUI 流式渲染在长会话下吃掉整颗 CPU 的性能瓶颈；(3) 多个新模型（MiniMax-M3 / OpenAI 5.6 Pro / Z.AI / OpenCode Go）的接入兼容性收尾。

---

## 🚀 版本发布

无新版本发布。

> ⚠️ 多个 Issue 仍标记为发生在 `0.82.1` 上（如 #7150、#7154、#7155），下一版（0.82.2 或 0.83.0）大概率会是一波 compact / provider / TUI 路径的修复合集。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|-------|------|------|----------------|
| **#4877** | [Session folder collision](https://github.com/earendil-works/pi/issues/4877) | ✅ CLOSED | 21 | 长期存在的经典 bug：不同路径 `/a/b/c/d` 与 `/a-b/c-d` 会生成相同的 session 文件夹名。讨论热度最高，今天终于关闭。 |
| **#6665** | [TUI pins a full core while streaming](https://github.com/earendil-works/pi/issues/6665) | 🔧 IN PROGRESS | 8 | 性能热点：流式输出时 TUI 单核 100%，spindump 指向 `Markdown.render` + 未缓存的 `Intl.Segmenter`。这是直接影响所有长会话用户体验的性能问题。 |
| **#7090** | [Regenerate 0.82.x shrinkwrap — CVE-2026-14257](https://github.com/earendil-works/pi/issues/7090) | ✅ CLOSED | 5 | 安全必修：`brace-expansion@5.0.7` 的 `expand()` 函数存在 fatal memory-exhaustion DoS，0.82.0 的 shrinkwrap 仍锁定旧版本，必须重生成。 |
| **#7064** | [WSL absolute Windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064) | 🟢 OPEN | 5 | WSL2 跨平台路径处理 bug：agent 的 `read/write/edit` 工具经常失败，被迫回退到命令行整文件替换。影响所有 Windows + WSL 用户。 |
| **#1086** | [Add structured output (JSON schema) support](https://github.com/earendil-works/pi/issues/1086) | ✅ CLOSED | 4 | 呼声较高的功能：自动化场景需要确定性 JSON 输出，目前 pi-ai 只能校验 tool args。合并后将带来 `pi-coding-agent` CLI flag。 |
| **#7049** | [Upgrade Undici to 8.8.0 — plain-HTTP proxy forwarding](https://github.com/earendil-works/pi/issues/7049) | 🟢 OPEN | 3 | 0.81.1 锁定的 Undici 8.5.0 默认 `proxyTunnel: true`，导致通过 `HTTP_PROXY` 访问明文 HTTP 目标时错误地走 CONNECT 隧道。 |
| **#7138** | [MiniMax-M3 Token Plan: messy thinking output, compaction breaks reasoning](https://github.com/earendil-works/pi/issues/7138) | ✅ CLOSED（untriaged） | 3 | MiniMax-M3 经 Token Plan 调用时，compact 后推理链断裂，并暴露了缺失的 `reasoning_split` 参数设计。 |
| **#7152** | [Add read-only provider/model auth preflight command](https://github.com/earendil-works/pi/issues/7152) | ✅ CLOSED | 2 | 提议 `pi auth check --provider ... --model ... --json --no-refresh` 这类只读预检，避免 CI / 自动化场景误触发凭证刷新。 |
| **#7143** | [Z.AI ignores `max_completion_tokens`](https://github.com/earendil-works/pi/issues/7143) | ✅ CLOSED | 2 | `detectCompat()` 给 Z.AI 系列 provider 设错了 maxTokens 字段，Z.AI 仅识别 `max_tokens`，导致输出长度不受控。 |
| **#7132** | [Set `AI_AGENT=pi` for child process attribution](https://github.com/earendil-works/pi/issues/7132) | ✅ CLOSED | 2 | 与 Claude Code / Vercel 等生态对齐通用 agent 标识变量，配套 PR #7131 已同步提出。 |

> 同样值得关注但热度稍低的：**#7127**（durable compaction strategy 生命周期）、**#7155**（MiniMax-M3 thinking 内容泄漏到正文，0.82.1 仍未修）、**#7154**（compact 让 extension runtime 永久失效，无进程内恢复）、**#7150**（RPC compact 中的 prompt ACKed 后静默丢失）。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| **#7156** | [fix(ai): rename OpenCode Zen Go → OpenCode Go](https://github.com/earendil-works/pi/pull/7156) | ✅ CLOSED | 修复 #7157：`pi --list-models` 中显示名错误。 |
| **#7151** | [feat(ai): expose pending stop reason while streaming](https://github.com/earendil-works/pi/pull/7151) | 🟢 OPEN | 暴露 Response API 的 `phase: "final_answer"`，让消费方尽早知道这一条流式消息将是终态。 |
| **#7148** | [feat(coding-agent): Experimental loadout management](https://github.com/earendil-works/pi/pull/7148) | 🟢 OPEN | 由 **mitsuhiko**（Armin Ronacher）提交的新草案：会话中途通过 `/loadout` 启停扩展，并随 session 持久化以恢复。这是 Pi 扩展体系下一步的关键演进。 |
| **#7131** | [Set `AI_AGENT=pi`](https://github.com/earendil-works/pi/pull/7131) | ✅ CLOSED | 与 #7132 配对的实装 PR。 |
| **#7129** | [tui: `visibleWidth` cache 4096 entries + LRU](https://github.com/earendil-works/pi/pull/7129) | ✅ CLOSED | 直接缓解 #6665 的 TUI 卡顿：之前 512 条 FIFO 在 agent 转写本下逐帧失效，热点 powerline 片段反复重算。 |
| **#7124** | [fix: footer path separator normalize](https://github.com/earendil-works/pi/pull/7124) | ✅ CLOSED | Windows footer 显示 `~\project`，改为统一使用 `/` 显示。 |
| **#7122** | [fix(tools): 三个独立 bug 修复合集](https://github.com/earendil-works/pi/pull/7122) | ✅ CLOSED | (1) `write` 工具用 `content.length`（UTF-16）冒充 UTF-8 字节数；(2) `find` 的 "false limit" 警告；(3) `truncateLine` 对 surrogate pair 处理。 |
| **#7120** | [feat: show SYSTEM.md / APPEND_SYSTEM.md in startup banner](https://github.com/earendil-works/pi/pull/7120) | ✅ CLOSED | 这两个文件会静默改写 system prompt 但用户看不见，本 PR 让它们出现在启动 `[Context]` 横幅中。 |
| **#7112** | [fix: `formatCwdForFooter` 跨平台路径](https://github.com/earendil-works/pi/pull/7112) | ✅ CLOSED | 与 #7124 同一问题的早期版本，已并入。 |
| **#7145** | [Dev](https://github.com/earendil-works/pi/pull/7145) | ✅ CLOSED | 内容空，跳过。 |

---

## 📈 功能需求趋势

从过去 24h 的 35 条 Issue 提炼出社区强烈关注的功能方向：

1. **🧠 Compact（上下文压缩）相关 — 占比最高**
   - 涉及扩展 runtime 失效（#7154）、RPC 静默丢消息（#7150）、reasoning 链断裂（#7138、#7140）、durable strategy 生命周期缺失（#7127）。
   - **共识**：compact 是 0.82 系列最大回归源，社区要求的不只是"修 bug"，而是给出公开的、可被扩展拦截的 lifecycle。

2. **🤖 新模型接入**
   - MiniMax-M3 Token Plan（#7138、#7140、#7155）、OpenAI 5.6 Pro modes（#7135）、Z.AI 字段兼容（#7143）、Anthropic 拒绝信号细化（#7133）。
   - **共识**：provider 适配层需要更清晰的"该字段 / 该 stopReason 如何映射"约定。

3. **🖥️ TUI 性能与可扩展性**
   - 主线瓶颈仍是 ICU `Intl.Segmenter`（#6665）、`visibleWidth` 缓存（#7129 PR）、Kitty 协议按键事件（#7130）。
   - 同时出现一批"让扩展能构建更丰富 UI"的需求：overlay 位置查询 / 鼠标点击 API（#7144）、编辑器光标配色 theme 化（#7141）、响应前 hook（#7137）。

4. **🔌 扩展体系**
   - `/loadout` 动态启停（PR #7148）、`pre_response` hook（#7137）、CLI 布尔 flag 位置敏感性（#7139）、compaction 生命周期扩展点（#7127）。
   - **共识**：扩展正从"装饰"变成"核心"，API 缺口越来越大。

5. **🔐 安全与网络栈**
   - `brace-expansion` CVE（#7090）、Undici proxy tunnel（#7049），均涉及 npm 依赖治理。

6. **🌐 跨平台**
   - WSL 路径（#7064）、Windows footer（#7124/#7112）、linux-x64 老 CPU SIGILL（#7149）。

---

## 👨‍💻 开发者关注点（高频痛点）

- **Compact 是定时炸弹**：开发者不只是怕它出错，更是怕它**不可拦截**。多个 issue 表达同一个诉求——compact 必须暴露生命周期 hook，并且不能"成功 ACK 后静默丢数据"。
- **provider 适配"默契"不够**：Z.AI / OpenCode Go / Anthropic 等各有"我以为你懂"的字段名差异，开发者呼吁**更明确的兼容层文档或 schema**。
- **扩展不是 first-class**：从 flag 解析、CLI hook、UI overlay 查询、compaction 拦截到 loadout 切换，多个 issue 都在喊同一个词：**"expose it"**。mitsuhiko 的 #7148 是这一波诉求的总回应。
- **性能透明度**：TUI 单核 100% 现象（#6665）让用户在长会话里质疑"agent 在工作还是在死锁"，社区希望未来能在 TUI 给出 streaming 状态指示。
- **依赖治理回归**：一条 CVE 仍在 0.82.0 的 shrinkwrap 里，社区呼吁 `npm-shrinkwrap.json` 进入 CI 自动审计。

---

*日报由 GitHub 公开数据生成 · 链接均为 `github.com/earendil-works/pi/...`*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-27**

---

## 📌 今日速览

今日社区焦点集中在**Qwen Desktop 的安全加固**：由 rishavkumar-thecoder 集中提交了 4 个 P0/P1 安全 Issue，涵盖 MCP 工具拒绝绕过、Desktop IPC 权限缺失、Electron `webPreferences` 不安全配置以及 sandbox 在公网 MCP 代理下的逃逸风险。同时，主分支 E2E 测试连续在多个 commit 上失败（至少 5 条 CI 失败 Issue 飘红），CI 稳定性成为当晚最值得跟踪的信号。功能侧，Web Shell 继续由 wenshao 推进「类 IntelliJ」的 git 工作流增强，侧栏可拖拽宽度、shell 命令免 session 执行等多项改进正在合入。

---

## 🚀 版本发布

**v0.21.0-nightly.20260727.c003e1718** 已发布（nightly 通道）。

- **fix(cli)**: 全链路统一以本地时区度量「洞察（insight）」的天/小时显示，避免跨时区下数据解读偏差（[#7670](https://github.com/QwenLM/qwen-code/pull/7670)）。
- **refactor(autofix)**: 自动修复工作流内部重构（详情被 release notes 截断）。

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 状态 | 关注度 | 为什么重要 |
|---|------|--------|------|--------|------------|
| [#7769](https://github.com/QwenLM/qwen-code/issues/7769) | **安全**：MCP 工具拒绝在新建 SSE 会话后被绕过 | P1 | CLOSED | 6 条讨论 | 用户拒绝某 MCP 工具调用后，AI 在新 SSE 会话里可重试该工具——典型的会话边界权限失效，**P1 安全级** |
| [#7768](https://github.com/QwenLM/qwen-code/issues/7768) | **安全**：Desktop IPC 桥 `mcp_client_tool_call` 缺少用户授权 | P1 | CLOSED | 6 条讨论 | 渲染进程可直接经 `window.electronAPI` 触发 MCP 调用，绕过授权检查 |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | 提议：增加「直连外部上下文提供方」Profile | P3 | OPEN | 8 条讨论 | 社区最高评论数，方向是在不改动 Core 的前提下让单 CLI 进程接入共享外部知识/记忆服务 |
| [#7750](https://github.com/QwenLM/qwen-code/issues/7750) | 选型：qwen-code-sdk 与 qoder-agent-sdk 哪个是正统？ | — | CLOSED | 6 条讨论 | 反映用户对两条产品线功能重叠、未来去留的困惑，**官方答复内容有助于路线图理解** |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) | ACP 子进程冷启动懒加载剩余候选 | P2 | CLOSED | 6 条讨论 | 基于 esbuild metafile 审计，定位可进一步懒加载的模块簇，持续压低冷启动开销 |
| [#7684](https://github.com/QwenLM/qwen-code/issues/7684) | Command 模式多行 statusline 下输入法候选框漂移 | P2 | CLOSED | 5 条讨论 | macOS 中文/日文输入法用户的实际痛点，已被标记为 `welcome-pr`，适合社区贡献者参与 |
| [#7770](https://github.com/QwenLM/qwen-code/issues/7770) | **安全**：MCP 代理暴露公网时 sandbox 可写宿主 | P2 | OPEN | 4 条讨论 | 代码解释器 sandbox 无法触达 localhost，但有出网能力，存在组合风险 |
| [#7771](https://github.com/QwenLM/qwen-code/issues/7771) | 持久化的 `mcp_config` 未被主进程 MCP 代理加载 | — | OPEN | 4 条讨论 | 桌面重启后 MCP 配置丢失的回归问题，需要复测 |
| [#7772](https://github.com/QwenLM/qwen-code/issues/7772) | **安全**：Qwen Desktop `BrowserWindow` 不安全的 Electron `webPreferences` | P3 | CLOSED | 4 条讨论 | `sandbox: false` 等弱配置项被点名，与 [#7768](https://github.com/QwenLM/qwen-code/issues/7768)/[#7769](https://github.com/QwenLM/qwen-code/issues/7769) 形成 Desktop 安全集群 |
| [#7685](https://github.com/QwenLM/qwen-code/issues/7685) | Subagent 生成时支持模型档位选择 | P3 | CLOSED | 4 条讨论 | 提议在 `agent` 工具上新增 `model` 参数（small/medium/high/super），用户可在 `settings.json` 自定义档位映射 |

---

## 🛠️ 重要 PR 进展

| # | 类型 | 标题 | 作者 | 要点 |
|---|------|------|------|------|
| [#7731](https://github.com/QwenLM/qwen-code/pull/7731) | feature | Web Shell 增加 git 分支选择、commit 弹窗、创建 PR 流程 | wenshao | 类 IntelliJ 体验：搜索过滤的分支列表（local / remote / tag / recent）、checkout、新建分支 |
| [#7778](https://github.com/QwenLM/qwen-code/pull/7778) | feature | Web Shell 侧栏可拖拽至窗口一半宽度 | wenshao | 取消固定上限，改为视窗自适应（原上限仍作最小回退） |
| [#7724](https://github.com/QwenLM/qwen-code/pull/7724) | fix | Web Shell 新任务支持 `!` shell 命令 | wenshao | 无 session 时输入 `!` 走 `ensureSessionForPrompt()` 懒创建路径，消除「No active session yet」错误 |
| [#5738](https://github.com/QwenLM/qwen-code/pull/5738) | fix | CLI 默认启用虚拟化终端历史 | ZevGit | 新用户与未配置用户直接获得应用内可滚动历史视口；偏好宿主 scrollback 的用户可用 `ui.useTerminalBuffer=false` 关闭 |
| [#7749](https://github.com/QwenLM/qwen-code/pull/7749) | feature | `script-lint`：对 diff 中可执行脚本跑 linter | wenshao | 把「diff 的 shell 也是代码」纳入 review 必需步骤；本 PR 已被合并闭合（但 [#7751](https://github.com/QwenLM/qwen-code/pull/7751) 跟进指出架构需重构为确定性 gate） |
| [#7751](https://github.com/QwenLM/qwen-code/pull/7751) | feature | `script-lint` 升级为确定性 gate | wenshao | 不再依赖 agent 自报家门，由 compose-review 直接消费 lint 报告，避免「模型自评」隐患 |
| [#7782](https://github.com/QwenLM/qwen-code/pull/7782) | fix | `toOpenAPI30` 保留 Draft 4 boolean 排他边界 | chinesepowered | 修复一处把已经是 boolean 形式的 `exclusiveMinimum/Maximum` 误丢的 OpenAPI 转换 bug |
| [#7776](https://github.com/QwenLM/qwen-code/pull/7776) | fix | 超时判定限定到错误对象中的具体片段 | chinesepowered | 修复 `getContextLengthExceededInfo` 把「是否超时」与「是否超上下文」混判的问题 |
| [#7774](https://github.com/QwenLM/qwen-code/pull/7774) | fix | stash reflog 从 common git dir 读取 | chinesepowered | 修复 `git worktree` 场景下 stash 计数为 0 的回归 |
| [#3439](https://github.com/QwenLM/qwen-code/pull/3439) | feature | CLI Markdown 渲染 LaTeX 数学公式 | reidliu41 | 将 `$...$` / `$$...$$` / `\(...\)` / `\[...\]` 等常见行内/行间公式转成终端可读字符，开放已久，正在被持续打磨（与 [#7740](https://github.com/QwenLM/qwen-code/issues/7740) 转义修复联动） |

> 旁注：chinesepowered 单日连续提交了多条 `fix(core)` 小粒度修补（[#7764](https://github.com/QwenLM/qwen-code/pull/7764)、[#7765](https://github.com/QwenLM/qwen-code/pull/7765)、[#7766](https://github.com/QwenLM/qwen-code/pull/7766)、[#7775](https://github.com/QwenLM/qwen-code/pull/7775)），全部围绕 gitignore / sed / 模型 id 规范化等真实使用场景的边界 bug，质量扎实。

---

## 📈 功能需求趋势

从过去 24 小时活跃议题提炼出的方向：

1. **桌面端 / MCP 安全（最高优先级）** — 4 条 P0/P1 安全 Issue 全部围绕 Qwen Desktop 的 MCP 权限边界和 Electron 配置，社区强烈期待系统化的 Desktop 安全加固。
2. **Web Shell 体验完善** — git 可视化操作（分支选择 → commit → PR）、侧栏自适应宽度

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-27**

> 数据来源：GitHub Issues & Pull Requests（项目代号 **CodeWhale**，归属仓库 `Hmbown/CodeWhale`）

---

## 一、今日速览

过去 24 小时内社区异常活跃：**50 条 Issue 被更新、50 个 PR 推进**，核心主线是 **v0.9.2 Setup/Workflow/Subagent 三大泳道（lane）** 的密集合龙。性能与体验两条战线均有实质进展：TUI 流式渲染的 O(N²) Markdown 解析已被分片拆解（#3897 → #4903 / #4892），DeepSeek 提示缓存命中率回退问题也已定位并修复（#3738 → #4902）。

---

## 二、版本发布

⚠️ 过去 24 小时无新 Release。但从合入节奏判断，**v0.9.1 收尾与 v0.9.2 准备并行**：基础技能包（#4695 已 ship）、Kimi Code 接入（#4893）、剪贴板事件循环重构（#4896）、xAI OAuth 引导修复（#4765）等多项 CLOSED PR 均已落地，可预期近期会出现新的 RC 或 patch 标签。

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 评论数 | 为什么值得关注 |
|---|---|---|---|
| [#3793](https://github.com/Hmbown/CodeWhale/issues/3793) | **v0.9.2 Setup：引导式本地化宪法编辑器**（替换空白的 prompt 编辑器） | 17 | v0.9.2 Setup 泳道的"灵魂 PR"，把首运行体验从"改配置"升级为"语言优先 + 引导画布"，且首次明确**宪法不得直接翻转运行时安全设置**这一红线 |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | **feat: 为新贡献者制作 CodeWhale 入门 Skill/workflow** | 13 | 项目日均 10+ PR，维护者 JayBeest 主动请求一个能拉 main、rebuild、对齐最新协议的"小白入门包"，反映项目高速迭代带来的**贡献者门槛问题** |
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | **侧边栏会话面板 + 自动恢复 + 历史浏览** | 10 | TUI 用户长期痛点：当前只能靠 `Ctrl+R` 弹窗切会话，sidebar 化是体验跃迁的关键一步 |
| [#3792](https://github.com/Hmbown/CodeWhale/issues/3792) | **首运行"开始 CodeWhale"而非"改配置"的体验重塑** | 9 | Setup 泳道另一支柱，提出 0→5 的清晰引导脊柱（语言优先 / 配置文件分层 / 角色面板），与 #3793 配套 |
| [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) | **macOS + iTerm2 用户问题汇总**（已 CLOSED） | 6 | 中文用户提交的硬核反馈：快捷键 macOS 适配、多行粘贴误触发、`Ctrl+C` 无法终止问答等 6 大问题，作者因解决无果被迫停用 TUI，**值得 TUI 维护团队重点消化** |
| [#1004](https://github.com/Hmbown/CodeWhale/issues/1004) | **/dryrun：预览下一次 chat completion 而不发请求** | 5 | DeepSeek V4 Pro 用户的长上下文场景痛点：在不实际消耗 token 的前提下检查 system prompt、缓存、@mentions、thinking 配置 |
| [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **CLI/TUI 子代理与运行时控制面 parity** | 5 | 防止 TUI 侧栏变成"功能孤岛"，确保云端/远程工作台能复用同一控制面，是多端战略的基础 |
| [#3983](https://github.com/Hmbown/CodeWhale/issues/3983) | **运行时 Work 状态在父轮次中模型可见** | 4 | 把 `checklist_*` / `update_plan` 从 UI 装饰升级为**模型可消费的上下文**，让子代理与父代理能基于真实 ledger 协调 |
| [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) | **Onboarding 增加 provider-independent 离线路径** | 4 | 配套 #3960（Esc 回归）和 #4504（keyless Ollama/SGLang/vLLM）后的**纯探索模式**，让用户无 API key 也能先逛逛 |
| [#3738](https://github.com/Hmbown/CodeWhale/issues/3738) | **DeepSeek prompt-cache 命中率回退调查**（已 CLOSED） | 2 | 用户成本上升的核心根因（`<turn_meta>` 中 `append_resource_metadata_lines` 每轮变化 bust 掉缓存前缀），**已由 PR #4902 修复** |

---

## 四、重要 PR 进展（Top 10）

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#4902](https://github.com/Hmbown/CodeWhale/pull/4902) | **test(engine): 跨轮固定缓存前缀** | 🟢 CLOSED | 解决 #3738：用规划系统替换每轮变化的 `<turn_meta>` 注入，恢复 DeepSeek 缓存命中 |
| [#4903](https://github.com/Hmbown/CodeWhale/pull/4903) | **perf(tui): 流式时停止重解析已提交 Markdown** | 🟢 CLOSED | #3897 第一刀：去除 streaming 的 O(N²) 重解析（解析层完成，渲染层后续） |
| [#4892](https://github.com/Hmbown/CodeWhale/pull/4892) | **perf(tui): 复用实时转写快照与扁平化行** | 🟢 CLOSED | 关闭 #3904：按 cell revision + width + mode 缓存，streaming 仅失效变更尾部 |
| [#4894](https://github.com/Hmbown/CodeWhale/pull/4894) | **feat(shell): 把追踪完成交付给等待轮次** | 🟢 CLOSED | #3874 核心交付片：完成通道 + 下轮 drain + `running_owner_agent_ids` → `touch` 隔离 |
| [#4901](https://github.com/Hmbown/CodeWhale/pull/4901) | **test(shell): 闭合后台完成验收缺口** | 🟢 CLOSED | 对 #4894 落地后做 main 分支的全量验收审计 |
| [#4899](https://github.com/Hmbown/CodeWhale/pull/4899) | **feat(composer): @git 与 @diff mentions** | 🟢 CLOSED | 关闭 #4067：让 `@` 提及系统支持 git 上下文，免去模型来回跑 `git_diff` / shell |
| [#4900](https://github.com/Hmbown/CodeWhale/pull/4900) | **feat(engine): 让策略收窄可观测** | 🟢 CLOSED | 关闭 #3947：把运行时 policy 收窄从 UI 文本升级为**模型可见输入**，避免模型在已收窄 prompt 上做错误判断 |
| [#4905](https://github.com/Hmbown/CodeWhale/pull/4905) | **fix(tui): 停止向非终端写入控制字节** | 🟢 CLOSED | #4847 部分修复：OSC 9;4 / OSC 0 不再无条件写入 stdout，.app 包归属问题另议 |
| [#4898](https://github.com/Hmbown/CodeWhale/pull/4898) | **fix(lint): 清理 stable Rust 1.97 的 clippy 失败** | 🟢 CLOSED | CI 基础设施修复：解除所有 open PR 的 lint gate 阻塞 |
| [#4467](https://github.com/Hmbown/CodeWhale/pull/4467) | **feat: OpenCode Zen provider** | 🟡 OPEN | 新增 model-aware provider，跨 Responses / Anthropic / Chat Completions 路由 Zen 模型；Claude 走 `x-api-key` |

> 备选亮点：**[#4904](https://github.com/Hmbown/CodeWhale/pull/4904)**（修 #4899 回归的菜单上限）、**[#4893](https://github.com/Hmbown/CodeWhale/pull/4893)**（Kimi Code 上下文窗口选择）、**[#4896](https://github.com/Hmbown/CodeWhale/pull/4896)**（OSC 52 剪贴板从事件循环剥离）、**[#4765](https://github.com/Hmbown/CodeWhale/pull/4765)**（xAI OAuth 引导可导航可退出）、**[#4805](https://github.com/Hmbown/CodeWhale/pull/4805)**（中文翻译同步 en.json 17 个 key）。

---

## 五、功能需求趋势

从 50 条活跃 Issue 中可清晰看到**五条主线**：

1. **🚀 性能与可扩展性**
   TUI 流式渲染（#3897 → #4903/#4892）、实时转写快照（#3904 → #4892）、Shell 后台完成调度（#3874 → #4894/#4901）三连击，**O(N²) 与事件循环热点**是当前最优先的工程债。

2. **🌍 本地化（i18n）爆发**
   单日更新集中了 [#3091 日越网页 parity](https://github.com/Hmbown/CodeWhale/issues/3091)、[#3093 韩/西/葡](https://github.com/Hmbown/CodeWhale/issues/3093)、[#3092 俄文](https://github.com/Hmbown/CodeWhale/issues/3092)、[#4788 法/德/加泰罗尼亚](https://github.com/Hmbown/CodeWhale/issues/4788)、[#4789 印尼](https://github.com/Hmbown/CodeWhale/issues/4789)。**矩阵已扩至 9+ 语言**，下一波将覆盖西欧与东南亚。

3. **🤖 多代理与控制面**
   v0.9.2 把 subagent / workflow / multi-session dashboard（#2974、#3983、#4397、#4022、#4411）作为头号泳道，目标是把"侧栏 + runtime API + 多 session 仪表盘"打通为统一控制面。

4. **⚙️ Provider 矩阵扩张**
   OpenCode Zen（#4467）、Kimi Code（#4893）、xAI OAuth（#4765）、OpenRouter/Ollama/SGLang/vLLM（#3927）齐头并进。**Model-aware 路由**成为新基线。

5. **🧭 首运行体验（Onboarding）重塑**
   从"配置编辑器"转向"引导画布"：#3792、#3793、#3927、#3937、#3928 共同构成 v0.9.2 的 5 步脊柱——语言 → 宪法 → 离线模式 → 外观 → 远程接入。

---

## 六、开发者关注点

1. **🔧 macOS 是被忽视的平台**
   [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) 用户明确因快捷键不一致、多行换行误提交、`Ctrl+C` 失效等问题放弃 TUI。**建议维护者把 macOS 兼容性列入 v0.9.2 验收清单**。

2. **💸 DeepSeek 成本敏感性**
   #3738 用户报告 DeepSeek 账单上涨，归因于缓存前缀被 bust。修复（#4902）虽已落地，但揭示了一个普遍模式：**任何"每轮都变化的元数据注入"都会摧毁缓存**——未来 PR 评审需建立相应 checklist。

3. **🤝 贡献者 onboarding 瓶颈**
   日均 10+ PR 引发 #4227，新人难以跟踪协议变更。需要一份"自动跟随 main + 重建 + 协议同步"的 Skill/workflow。

4. **🪟 TUI 健壮性细节**
   - 终端控制字节泄漏到非终端（#4905）
   - 剪贴板 I/O 卡事件循环（#4896 → #4159）
   - Hotbar `Alt-number` 终端差异（#3758）
   - 上下文菜单 hover 命中测试（#4897）
   
   这些"看不见的体验债"集中爆发，提示 TUI 子系统已到需要专项 hardening 的阶段。

5. **🔐 安全边界需持续澄清**
   #3793 明确：宪法文本**不得直接翻转 runtime security settings**。这条边界会贯穿后续 auto mode（#3832）、policy 收窄（#4900）、跨 provider 路由（#4411）等多个特性的设计。

---

> 📌 **维护

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*