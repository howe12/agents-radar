# AI CLI 工具社区动态日报 2026-09-08

> 生成时间: 2026-09-08 02:32 UTC | 覆盖工具: 9 个

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

# 2026-09-08 AI CLI 工具横向对比分析报告

## 1. 生态全景

2026 年 9 月的 AI CLI 工具生态已进入"基础设施深水区"——主流产品（Claude Code、Codex、Copilot CLI）的功能集趋于雷同，差异化战场从"能否跑通 Agent"转向"插件生态、Memory 系统、MCP 协议成熟度、跨平台稳定性"等深层工程问题；同时 Pi、Qwen Code、DeepSeek TUI 等新锐工具以更具野心的架构设计（系统消息重构、Web Shell 可视化、TUI 性能）切入垂直细分。社区反馈呈现高度一致的"五个老问题+两个新方向"格局：**Windows 体验、MCP 静默失败、会话恢复、Sandbox 安全、新模型产能**是横跨各工具的共同痛点；**Agent 自演化**与**多 Agent 后台协作**则代表了产品演进的下一站。

---

## 2. 各工具活跃度对比

| 工具 | 新 Release | Issue 更新 | PR 更新 | 最高热度 Issue | 整体活跃度 |
|------|-----------|-----------|---------|---------------|----------|
| **Claude Code** | 0 | ~50 | 2 | #91870（136 评论 / 82 👍）| 🔴🔥🔥🔥🔥 |
| **OpenAI Codex** | rust-v0.154.0-alpha.6 | ~10+ | 10+ | #37403（59 评论 / 37 👍）| 🔴🔥🔥🔥 |
| **Gemini CLI** | v0.60.0-nightly.20260908 | ~10 | 10 | #22323（13 评论）| 🔥🔥🔥 |
| **GitHub Copilot CLI** | 0 | 27 | 4 | #4756（9 👍）| 🔥🔥 |
| **Kimi Code CLI** | 0 | 4 | 1 | #1354（👍7，已关闭）| 🔥 |
| **Pi** | 0 | ~70（综合）| 10+ | #4945（77 评论 / 33 👍）| 🔴🔥🔥🔥🔥 |
| **Qwen Code** | v0.23.1-preview.2 + nightly | ~10 | 10 | #8662（32 评论）| 🟠🔥🔥🔥 |
| **DeepSeek TUI** | 0（v0.9.13 待发布）| ~10 | 10 | #5986（安全级）| 🔥🔥🔥 |
| **OpenCode** | 数据缺失 | – | – | – | ⚪ 未知 |

> **关键观察**：Pi 与 Claude Code 是当日"双高活跃度"代表；Codex 在 PR 端表现最强（10 条高质量进展），但受困于"产能焦虑"；Kimi 处于明显低活跃期；OpenCode 当日无有效数据。

---

## 3. 共同关注的功能方向

下表汇总了在 **3 个及以上工具**中出现的高频议题方向：

| 功能方向 | 涉及工具 | 核心诉求 |
|---------|---------|---------|
| ** Windows 平台稳定性** | Claude Code、Codex、Copilot CLI、Pi、Kimi、Qwen Code | IME 输入异常（Kimi）、ConPTY 进程泄漏（Qwen）、桌面端崩溃（Codex）、始终置顶（Claude）、TUI CPU 占用（Copilot）、图像/剪贴板渲染（Pi）—— **Windows 仍是全行业系统性短板** |
| **🔌 MCP 协议成熟度** | Claude Code、Copilot CLI、Qwen Code、Kimi CLI | OAuth 静默失败（Copilot）、stdio 取消杀 server（Qwen）、配置跨工具互通（Kimi）、plugin 安装失败（Claude）—— **MCP 已成事实标准但实现质量参差** |
| **🧠 Memory / 上下文管理** | Claude Code、Codex、Gemini CLI、DeepSeek TUI | 阈值不可控、压缩黑盒、隐私泄漏、技能自演化—— **记忆系统是当前最大共识需求** |
| **🔁 会话恢复/可移植性** | Claude Code、Codex、Copilot CLI、Pi | 静默清理（Claude）、连接 stale ID（Copilot）、Fork 不救（Copilot）、Resume 后行为漂移（Gemini）—— **Session 持久化语义尚未统一** |
| **🤖 Agent 子代理可靠性** | Gemini CLI、Codex、DeepSeek TUI、Pi | 异常被伪装成功（Gemini #22323）、长时间挂起（Gemini #21409）、retry 无上限（Pi #8826）、agent 间消息丢失（Claude #92016）—— **Agent 调度是新的可靠性瓶颈** |
| ** TUI 渲染性能/重构** | Gemini CLI、Qwen Code、DeepSeek TUI、Pi | VirtualizedList 优化、ink → OpenTUI 迁移（Qwen #8662，1037 行 patch）、picker 卡顿（DeepSeek #5975）—— **TUI 底层正在系统性换代** |
| ** 新模型快速适配** | Codex、Pi、DeepSeek TUI、Gemini CLI | GPT-5.6/6 Astra 路由错误、thought_signature 缺失、：free 模型 400—— **模型供给侧的快速演进考验适配层抽象能力** |
| **🛡 沙箱/安全加固** | Gemini CLI、DeepSeek TUI、Claude Code、Copilot CLI | GIT_* 泄漏、DEBUG truthiness、参数截断静默修复、fail-closed 误判—— **安全默认值正在被社区"零信任化"重审** |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 插件生态 + 桌面端 + Memory | 企业团队、长程开发 | Function Hooks 提案（Express/Koa 中间件风格），记忆系统作为一等公民 |
| **OpenAI Codex** | 新模型首发 + Remote + Voice | GPT 重度用户、跨端工作者 | app-server 守护进程架构、Guardian 安全审查重构、WebRTC 语音 |
| **Gemini CLI** | Auto Memory + AST 感知 + Sandbox | 大型代码库研究者、Google Cloud 用户 | 主动引入 Zero-Dependency OS 沙箱、Tactful Extraction 压缩（36.6k baseline） |
| **Copilot CLI** | 企业 MCP + 桌面会话 + Policy | GitHub Enterprise 用户 | managed policy 显式控制、Skill 子系统、与 VS Code/Desktop 深度联动 |
| **Kimi Code CLI** | 中文交互 + 计划模式（诉求）| 中文开发者、移动协作探索者 | 第三方手机遥控（gbr/1 协议）尝试；社区驱动 Plan Mode 需求强烈 |
| **Pi** | 多 Provider 适配 + TUI 编排 | 模型混用重度用户、SDK 集成方 | mitsuhiko 主导的系统消息架构重构（#9116/#9117），扩展点流式调用 |
| **Qwen Code** | Web Shell 工作流 + 多 Agent 后台 | 团队协作、Qwen 系列模型用户 | workspace-scoped 扩展、plan DAG 步骤可视化、共享线程协作 |
| **DeepSeek TUI** | IDE 集成 + 安全默认值 + CUA | 严格安全要求场景、IDE 嵌入式 | 一次性五缺陷修复模式、JetBrains ACP 严格合规、Computer-Use 插件 0.2.0 |
| **OpenCode** | 数据缺失（疑似低活跃或私有化）| – | – |

**关键差异化信号**：
- **Claude Code vs Codex**：前者押注插件生态扩展，后者押注新模型首发与多模态（Voice/Computer Use）；
- **Gemini CLI vs DeepSeek TUI**：前者主攻代码理解（AST/沙箱），后者主攻 IDE 集成与协议合规；
- **Pi vs Copilot CLI**：前者是"轻量 SDK + 多 Provider"路线，后者是"企业级 + 托管策略"路线；
- **Qwen Code 独特卡位**：唯一把"Web Shell + 持久化工作流"作为一等体验的工具。

---

## 5. 社区热度与成熟度

| 成熟度阶段 | 工具 | 特征 |
|----------|------|------|
| **大规模成熟期** 🔴 | Claude Code、OpenAI Codex、Copilot CLI | 用户基数大 → 暴露大量边缘场景（Windows/IME/Desktop/政策边界）；新功能首发常伴回归（Codex 2.1.258→2.1.260）；订阅用户对产能与计费的容忍度低 |
| **快速迭代期** 🟠 | Gemini CLI、Qwen Code、DeepSeek TUI | 每日 nightly/预览版本；架构性重构在路上（ink→OpenTUI、CodeWhale crate 拆分）；创始人/团队亲自下场报 bug |
| **高强度打磨期** 🟠 | Pi（earendil-works） | 多 Provider 适配是首要痛点；底层架构持续大改（系统消息拆分、XDG、Ollama Cloud）；社区贡献高度活跃 |
| **生态探索期** 🟡 | Kimi Code CLI | 社区规模较小但讨论质量高（Plan Mode 7 赞）；生态尝试（手机遥控）来自外部贡献者；数据量少可能临近周末或迭代间隙 |

**成熟度判断的关键指标**：
- **PR/Issue 比**：Codex（~1.0）、Gemini（~1.0）、DeepSeek（~1.0）> Claude Code（0.04）、Copilot（0.15）—— 前三者处于"有能力快速响应"阶段，后两者处于"积压严重"阶段；
- **架构性 PR 比例**：Pi（#9116/#9117）、Qwen（ink→OpenTUI #8662）、DeepSeek（EPIC-005 #5316）显示这三家仍在做底层重构，而 Claude Code/Codex/Copilot 已进入"功能堆叠"阶段。

---

## 6. 值得关注的趋势信号

### 🔥 信号一：**Agent 自演化成为下一代架构命题**
- Codex #40575（Self-Evolving Agents RFC）、DeepSeek #5860（从对话中自动生成 SKILL.md）、Gemini #26525（Auto Memory 隐私）
- **行业含义**：单轮 LLM 调用已不够，"指令蒸馏 + 规则代谢 + 长期记忆"成为 Agent 区分度的核心维度；为多周/多项目协作场景铺路。

### 🔥 信号二：**MCP 从"加分项"变为"事实标准"，但实现质量参差**
- 7 个工具的当日 Issue 直接涉及 MCP（Copilot 4 条、Claude 1 条、Qwen 1 条、Kimi 1 条）
- **行业含义**：MCP 已成为跨工具互操作的事实协议，但 OAuth、stdio 取消、认证流等子协议仍待标准化；这反过来推动 Kimi #1356 这样的"配置互通"诉求升温。

### 🔥 信号三：**后台 Agent 与多 Agent 协作进入主线**
- Qwen Code（#8586、#11270、#11206）、Claude Code（#92016 SendMessage 回归）、Gemini（#21968 子代理调度）
- **行业含义**：从"单 CLI 进程"到"Daemon + Web Shell + 多 Agent 协作"的演进已成共识；watchdog、busy 语义统一、child 进程管理成为新基建。

### 🔥 信号四：**会话可移植性（Session Portability）作为新兴话题**
- Claude Code #92734（web→local 移交丢历史）、Copilot #4505/#4670（恢复状态污染）、Codex #41566（thread 冻结）
- **行业含义**：用户期望在不同设备/入口间无缝切换，但当前各工具的状态机设计彼此不兼容；这是潜在的差异化机会，也是 Web Shell / Desktop App 等新入口必须直面的体验底线。

### 🔥 信号五：**TUI 性能与底层渲染正在换代**
- Qwen #8662（ink → OpenTUI，1037 行 patch）、DeepSeek #5975（picker 卡顿）、Gemini #27636（VirtualizedList）
- **行业含义**：React-based TUI 在大型项目下遭遇结构性瓶颈；Rust 原生渲染（OpenTUI、ratatui）成为下一代默认选择。

### 🟢 信号六：**"静默修复"被视为反模式**
- DeepSeek #5986（参数截断后补全）、Gemini #29242（401 子串误判）、Codex #9505（compaction 数据丢失）
- **行业含义**：社区对"默默成功"的容忍度持续下降，"显式失败 + 可见通知"成为新基线；这与 Copilot #4438 的 `disable-model-invocation` 语义争议同源。

### 📌 对开发者的参考价值

1. **选型时**：若重多模型混用选 Pi；重企业合规选 Copilot；重 Memory 选 Claude Code；重 IDE 集成选 DeepSeek TUI；重中文与社区驱动选 Kimi/Qwen。
2. **贡献时**：MCP 协议层、TUI 渲染层、Windows 体验三个方向的"系统性缺口"是最高 ROI 贡献点。
3. **关注时**：Agent 自演化 RFC（Codex #40575）、Function Hooks 提案（Claude #91870）、Pi 系统消息拆分（#9116/#9117）是接下来 3-6 个月可能改变生态格局的三个核心议题。

---

*报告生成时间：2026-09-08 | 数据基于各工具仓库过去 24 小时动态*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-09-08｜数据源：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行（PR Top 5~8）

> 说明：PR 端评论数据未公开（API 返回 undefined），故按"议题关联度 + 议题讨论热度 + 技能覆盖广度"综合排序。

### 🥇 1. PR #1298 — 修复 skill-creator 评测引擎（核心基础设施）
- **作者**：[MartinCajiao](https://github.com/anthropics/skills/pull/1298)｜2026-06-10
- **功能**：修复 `run_eval.py` 永远返回 `recall=0%` 的根本性 bug，含 Windows 流读取、子进程、并发 worker 三处问题
- **讨论热度**：⭐⭐⭐⭐⭐｜关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（**12 评论 / 7 赞**，社区十大热门）
- **状态**：OPEN｜**生态意义**：修复后整个 description 优化闭环才能真正工作，是 skill-creator 工具链的"心脏修复"

### 🥈 2. PR #1628 — Hivemind：零成本多 Agent 编排 Skill
- **作者**：[Hanishchow](https://github.com/anthropics/skills/pull/1628)｜2026-08-21
- **功能**：让 Claude Code 把机械工作委派给本地 headless [opencode](https://opencode.ai) workers（跑免费模型），主线程只做规划/审阅/合并
- **讨论热度**：⭐⭐⭐⭐⭐｜架构创新性高
- **状态**：OPEN｜**生态意义**：首次将"主-从多 Agent 协同"做成可复用 Skill，对成本敏感场景有强吸引力

### 🥉 3. PR #83 — skill-quality-analyzer + skill-security-analyzer（元 Skill）
- **作者**：[eovidiu](https://github.com/anthropics/skills/pull/83)｜2025-11-06
- **功能**：从结构/文档/示例/可执行性/安全 5 维度评估 Skill 质量；安全分析器检查注入风险
- **讨论热度**：⭐⭐⭐⭐⭐｜直接呼应社区最热 Issue [#492](https://github.com/anthropics/skills/issues/492)（**43 评论**，信任边界滥用）
- **状态**：OPEN（停留较久但价值极高）

### 4. PR #1367 — self-audit：AI 输出"机械验证 + 四维推理审计"
- **作者**：[YuhaoLin2005](https://github.com/anthropics/skills/pull/1367)｜2026-06-28
- **功能**：交付前先做 Step 0 机械核验（文件存在性），再做四维推理审计（按损坏严重度优先级）
- **讨论热度**：⭐⭐⭐⭐｜关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385) "Reasoning Quality Gate Pipeline" 提案
- **状态**：OPEN｜**生态意义**：通用、与模型无关，可作为 Skill 输出的强制门禁

### 5. PR #723 — testing-patterns（测试模式 Skill）
- **作者**：[4444J99](https://github.com/anthropics/skills/pull/723)｜2026-03-22
- **功能**：覆盖 Testing Trophy、AAA 单元测试、React Testing Library、契约测试、属性测试、E2E 等
- **讨论热度**：⭐⭐⭐⭐｜代码质量类 Skill 的代表性提案
- **状态**：OPEN

### 6. PR #514 — document-typography（文档排版质量控制）
- **作者**：[PGTBoos](https://github.com/anthropics/skills/pull/514)｜2026-03-04
- **功能**：修复孤儿词、寡头段落、编号错位等 AI 生成文档的常见排版问题
- **讨论热度**：⭐⭐⭐⭐｜影响"每一份 Claude 生成的文档"
- **状态**：OPEN

### 7. PR #210 — 改进 frontend-design Skill 的清晰度与可执行性
- **作者**：[justinwetch](https://github.com/anthropics/skills/pull/210)｜2026-01-05
- **功能**：让指令更具体可执行，确保单次会话内可完成
- **讨论热度**：⭐⭐⭐⭐
- **状态**：OPEN

### 8. PR #486 — ODT Skill（OpenDocument 读写）
- **作者**：[GitHubNewbie0](https://github.com/anthropics/skills/pull/486)｜2026-03-01
- **功能**：创建/填充/读取/转换 .odt 与 .ods，覆盖 ISO 标准的开源文档格式
- **讨论热度**：⭐⭐⭐
- **状态**：OPEN

---

## 二、社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🔒 信任边界 / 安全审计** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论）"社区 Skill 假冒 anthropic 命名空间" | 🔥🔥🔥 极高 |
| **🏢 企业级 Skill 共享分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论 / 8 赞）"Org-wide skill sharing in Claude.ai" | 🔥🔥🔥 极高 |
| **📉 评测与可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 赞）+ [#1390](https://github.com/anthropics/skills/issues/1390)（4 评论）"mcp-builder 评估永远 0/N" | 🔥🔥🔥 极高 |
| **🧠 长期记忆与紧凑表示** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）"compact-memory 符号化紧凑 Agent 状态" | 🔥🔥 高 |
| **📦 Skills 协议化（MCP 化）** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论）"Expose Skills as MCPs" | 🔥🔥 高 |
| **🛡 Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（6 评论，CLOSED）"agent-governance" | 🔥🔥 高 |
| **🪟 Context Window 优化** | [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）"claude-api 单次注入 156k tokens" | 🔥🔥 高 |
| **🛠 工具链平台兼容** | [#1362](https://github.com/anthropics/skills/issues/1362)（3 评论）"web-artifacts-builder pnpm≥10.1 失败" + [#29](https://github.com/anthropics/skills/issues/29)"Bedrock 集成" | 🔥 中 |
| **🧩 Reasoning Quality Gate** | [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）"Pre-task → Adversarial Review → Delivery 三门管道" | 🔥 中 |
| **📑 文档格式扩展（ODT 等）** | [#486](https://github.com/anthropics/skills/pull/486) PR + Issue 讨论 | 🔥 中 |

**整体趋势归纳**：
- **可信（Trustworthy）**：命名空间隔离、Skill 签名、安全分析是 #1 诉求
- **可评估（Evaluable）**：评测框架自身的正确性被反复质疑
- **可共享（Shareable）**：企业内分发、MCP 化暴露是组织级刚需
- **可治理（Governable）**：上下文占用、长期记忆、推理门禁成为新热点

---

## 三、高潜力待合并 Skills

> 筛选标准：议题关联度高 + 仍 OPEN + 解决的是"基础设施级"或"覆盖面广"问题 → 近期最可能落地。

| 优先级 | PR | 主题 | 落地概率 | 关键理由 |
|---|---|---|---|---|
| 🟢 极高 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测引擎修复 | ✅✅✅ | 阻塞整个 description 优化闭环，关联最热 bug |
| 🟢 极高 | [#1724](https://github.com/anthropics/skills/pull/1724) | mcp-builder 默认模型升级到 claude-sonnet-5 | ✅✅✅ | 1 行 default 改动，收益立即生效 |
| 🟢 高 | [#1099](https://github.com/anthropics/skills/pull/1099) | run_eval.py Windows 子进程修复 | ✅✅ | 与 #1298 同一根因，独立可合并 |
| 🟢 高 | [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows + 编码修复 | ✅✅ | 1 行 PATHEXT 修复，Windows 用户阻塞点 |
| 🟢 高 | [#1602](https://github.com/anthropics/skills/pull/1602) | evaluation 序列化/编码/稳定性综合修复 | ✅✅ | 解决 mcp-builder 0/N 评估 bug（#1390）|
| 🟡 中 | [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539) | pdf/docx/skill-creator 小修 | ✅ | 低风险，可批量合并 |
| 🟡 中 | [#1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个已下线模型 | ✅ | 文档级修复 |
| 🟡 中 | [#1627](https://github.com/anthropics/skills/pull/1627) | buffer-api Agent Skill | ✅ | 第三方 API 集成模板，社区常用 |

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"让 Skills 生态从'可写'走向'可信、可评、可共享、可治理'"——具体表现为：强烈呼吁官方建立命名空间与安全审查机制（#492），修复评测引擎自身可靠性（#556/#1390），并补齐企业级分发、Context Window 控制与多 Agent 编排等基础设施层能力。**

---

### 📌 分析师附注

1. **基础设施 Bug 集中爆发**：Top 议题里约一半涉及"评测/序列化/上下文"等底层问题，说明社区已从"造 Skill"转向"用 Skill、用好 Skill"。
2. **安全焦虑上升**：43 评论的 #492 是整个仓库热度最高的 Issue，远超技术 Bug 类议题，预示官方可能很快推出**官方 Skill 注册/签名机制**。
3. **多 Agent 编排正在产品化**：从 #1628 Hivemind 到 #1385 Reasoning Gate，社区开始把"Agent 协同"做成一等公民 Skill，而非临时脚本。
4. **文档/排版类 Skill 持续扩容**：typography (#514) + ODT (#486) + docx 修复 (#541/#1734) 表明"AI 写文档"已是 Claude 最高频用例，质量门槛在快速抬高。

---

# Claude Code 社区动态日报

**日期：2026-09-08** | 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

社区讨论热度集中于**插件系统增强**与**会话数据安全**两大方向：Function Hooks 提案（#91870）以 136 条评论、82 个 👍 成为近期最热议题；与此同时，多位用户报告会话记录被"静默清理"（#59248、#62476），引发对数据保留策略的强烈不满。跨平台桌面端问题（Windows/MSIX 崩溃、macOS Remote Control 中断）仍是开发者吐槽重灾区。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。**

---

## 🔥 社区热点 Issues

### 1. [#91870 - Function Hooks: make plugins 10x more powerful](https://github.com/anthropics/claude-code/issues/91870)
- **类型**：enhancement / hooks / plugins
- **评论数**：136 | **👍**：82
- **热度**：⭐⭐⭐⭐⭐
- **为什么重要**：提议通过参数化 `$` 对象 + 注册顺序的 `next` 延续模型（类似 Express/Koa 中间件）扩展 Hooks 能力，允许插件深度修改 CC 行为同时保证安全性。这是**目前社区呼声最高的扩展性提案**，可能是插件生态下一步演进的方向。

### 2. [#59248 - Silent retention cleanup deletes session transcripts](https://github.com/anthropics/claude-code/issues/59248)
- **类型**：bug / data-loss / core
- **评论数**：42 | **👍**：32
- **热度**：⭐⭐⭐⭐⭐
- **为什么重要**：用户在 Cursor 扩展下丢失了某工作区所有历史会话记录，且无任何提示或恢复路径。属于**严重数据丢失问题**，已加 `data-loss` 标签。

### 3. [#91188 - Configurable MEMORY.md compaction reminder threshold](https://github.com/anthropics/claude-code/issues/91188)
- **类型**：enhancement / memory
- **评论数**：35
- **热度**：⭐⭐⭐⭐
- **为什么重要**：自动记忆加载前 200 行 / 25KB 的硬编码阈值已无法满足大型项目需求，开发者强烈要求可配置甚至可单独抑制。

### 4. [#62476 - Claude Code silently deletes conversation transcripts after 30 days](https://github.com/anthropics/claude-code/issues/62476)
- **类型**：bug
- **评论数**：25 | **👍**：24
- **热度**：⭐⭐⭐⭐
- **为什么重要**：与 #59248 同源的"静默清理"问题，用户要求默认行为应当保留或提供明确的 opt-out 选项。

### 5. [#26951 - Plugin install fails with HTTP 404 on macOS](https://github.com/anthropics/claude-code/issues/26951)
- **类型**：bug / plugins / desktop
- **评论数**：22 | **👍**：16
- **热度**：⭐⭐⭐⭐
- **为什么重要**：`plugins.claude.ai` 域名无法解析，导致 Cowork 用户无法安装插件。直接阻断插件生态使用。

### 6. [#92016 - Desktop auto-denies CLI-native SendMessage](https://github.com/anthropics/claude-code/issues/92016)
- **类型**：bug / regression / desktop
- **评论数**：19
- **热度**：⭐⭐⭐
- **为什么重要**：Claude Desktop (macOS) 自动拒绝 CLI 原生 `SendMessage`，破坏了 subagent resumption 流程。**回归性问题**严重影响多会话协作。

### 7. [#89467 - Windows desktop app is always-on-top with no toggle](https://github.com/anthropics/claude-code/issues/89467)
- **类型**：bug / windows / desktop
- **评论数**：19 | **👍**：28
- **热度**：⭐⭐⭐⭐
- **为什么重要**：窗口强制置顶且无任何关闭选项，对 Windows 用户体验影响极大。👍/评论比 ≈1.47 显示**强烈共识**。

### 8. [#16600 - Memory traversal should respect git worktree boundaries](https://github.com/anthropics/claude-code/issues/16600)
- **类型**：enhancement / core / security / memory
- **评论数**：12 | **👍**：13
- **热度**：⭐⭐⭐
- **为什么重要**：在使用 git worktree 时，记忆系统会跨 worktree 泄漏上下文，引发安全和语义混乱。修复需要核心架构调整。

### 9. [#74902 - claude-in-chrome MCP can't distinguish two Chrome profiles](https://github.com/anthropics/claude-code/issues/74902)
- **类型**：bug / chrome
- **评论数**：7
- **热度**：⭐⭐⭐
- **为什么重要**：`list_connected_browsers` 仅返回"Browser 1/2"等不稳定名称，多配置文件用户面临误操作风险。

### 10. [#89831 - Pre-compaction notice + visible record of what compaction dropped](https://github.com/anthropics/claude-code/issues/89831)
- **类型**：feature / memory
- **评论数**：3
- **热度**：⭐⭐⭐
- **为什么重要**：与 #91188 形成 memory 系统改进的**双子议题**——用户既希望控制压缩阈值，也希望看到压缩过程本身。

> **补充关注**：[#48465 - Allow MCP servers to replace auto memory backend](https://github.com/anthropics/claude-code/issues/48465)、[#91763 - Windows git fsmonitor blocks relaunch (0x80070020)](https://github.com/anthropics/claude-code/issues/91763)、[#65577 - claudevm disk image grows unboundedly](https://github.com/anthropics/claude-code/issues/65577) 同样代表社区对**MCP 集成深度**与**桌面端稳定性**的持续关切。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅有 2 条 PR 更新，数量较少，以下为全部内容：

### 1. [#26175 - fix: replace broken native installer bootstrap script](https://github.com/anthropics/claude-code/pull/26175)
- **状态**：🟣 CLOSED | **作者**：rlueder | **更新时间**：2026-09-07
- **内容**：原 `curl ... | bash` 引导脚本静默失败，未创建 `~/.local/bin/claude`，反而删除了用户原有的 npm 全局安装。
- **意义**：修复安装路径完全断裂的严重问题，避免用户陷入"没有可用 `claude` 命令"的状态。

### 2. [#39043 - Remove "retro-futuristic" recommendation from Frontend Design Skill](https://github.com/anthropics/claude-code/pull/39043)
- **状态**：🟢 OPEN | **作者**：t3dotgg | **更新时间**：2026-09-07
- **内容**：删除 Frontend Design Skill 中的 "retro-futuristic" 推荐措辞。
- **意义**：精简内置 Skill 的语气与措辞（t3dotgg 原话："Trust me on this one."），属于**轻量但具有信号意义**的风格调整 PR。

---

## 📈 功能需求趋势

通过对当日活跃 Issue 的聚类分析，社区需求呈现以下五个高优方向：

| 方向 | 代表 Issue | 趋势强度 |
|------|-----------|---------|
| **🔌 插件/Hooks 扩展性** | #91870, #26951 | ⬆⬆⬆ 极强 |
| **🧠 Memory 系统深度定制** | #91188, #16600, #48465, #89831, #92742 | ⬆⬆⬆ 极强 |
| **🖥️ 桌面端跨平台稳定性** | #89467, #88323, #91763, #65577, #92010 | ⬆⬆ 强 |
| **📡 MCP / 会话间消息传递** | #74902, #83694, #92758, #92016, #92258, #84894 | ⬆⬆ 强 |
| **💰 订阅/计费灵活性** | #87063, #83302 | ⬆ 中等 |

> 补充：**Session portability / Teleport**（#92734 web→local 移交丢历史）开始出现，作为新兴话题值得持续观察。

---

## 💬 开发者关注点

综合 Issue 摘要与社区反馈，当前开发者最集中的痛点包括：

1. **数据丢失焦虑** 🔴
   会话与记忆被静默清理（30 天默认、缺失 opt-in、无恢复路径）是当前**最严重的信任问题**。#59248 + #62476 形成合并性需求：要么提供导出/备份，要么彻底改默认行为。

2. **桌面端体验倒退** 🟠
   Windows MSIX 包签名校验失败导致"变砖"（#88323）、强制 always-on-top（#89467）、子进程窗口闪烁（#66540）、VM 镜像无限增长（#65577）——**桌面端已进入"功能多但稳定性差"阶段**。

3. **多会话/子代理协作断裂** 🟠
   `SendMessage`/`ListAgents` 在 2.1.258→2.1.260（#92016、#92258）升级后回归，跨会话消息丢失。开发者已将其视为阻塞性问题。

4. **插件生态"半成品"状态** 🟡
   想要更深扩展（Function Hooks）的用户和想要稳定使用现有插件的用户都对当前状态不满——前者觉得能力不够，后者觉得基础设施（DNS、签名、平台兼容）不可靠。

5. **Memory 系统的"黑盒感"** 🟡
   自动压缩阈值不可控、压缩过程不可见、worktree 边界不尊重、与 MCP backend 不兼容——开发者希望 memory 像 git 一样**可观测、可控制、可恢复**。

6. **Fast Mode 计费争议** 🟢
   Max 订阅用户希望 Fast Mode 计入订阅额度而非额外 credits（#83302、#87063），属于商业策略诉求而非技术缺陷。

---

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 过去 24h 新 Release | 0 |
| 过去 24h 更新 Issues | 50（展示前 30） |
| 过去 24h 更新 PRs | 2 |
| 当日最热 Issue | #91870（136 评论 / 82 👍）|
| 关闭 Issues | 5（含 #88323、#83723、#83690、#79511 等）|

---

*日报由 GitHub 数据自动生成，链接均指向 anthropics/claude-code 仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日 Codex 社区围绕 **GPT-5.6 系列与 GPT-6 Astra 模型容量问题** 持续发酵，多个高赞 Issue 集中反映即使 Pro 20x 高额订阅也频繁遇到 "Selected model is at capacity" 错误；同时 **Windows 平台稳定性问题** 成为另一焦点，涵盖 Computer Use 截图失败、Pets 控件卡死、应用无头启动等多个 P0 级别回归。PR 侧则集中推进 TUI 实时语音通话、Guardian 安全审查架构重构以及 macOS Secure Enclave 用户验证等核心功能。

---

## 🚀 版本发布

### rust-v0.154.0-alpha.6
- 发布日期：2026-09-08
- 链接：https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.6
- 说明：alpha 通道的预发布版本，目前官方未公开详细 changelog，建议关注后续 stable 通道发布说明。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#37403](https://github.com/openai/codex/issues/37403) — macOS Desktop 无法恢复 Remote Control 会话
- **标签**：`bug` `app-server` `remote`
- **热度**：💬 59 评论 / 👍 37 赞
- **核心问题**：8 月 7 日 ChatGPT Desktop 更新后，用户通过移动端 Remote Control 恢复 Codex CLI thread 时报 `already has an active writer`，关键远程工作流被阻断。
- **为何重要**：高赞且持续发酵，影响跨设备生产工作流，是 macOS 用户的核心痛点。

### 2. [#28507](https://github.com/openai/codex/issues/28507) — 模型容量持续满载
- **标签**：`bug` `rate-limits`
- **热度**：💬 45 评论 / 👍 44 赞
- **核心问题**：Pro 5x 订阅用户在 Windows 端反复遇到 "Selected model is at capacity. Please try a different model."。
- **为何重要**：44 赞是今日 Issue 中最高之一，反映订阅权益与实际可用性之间的落差，关系到 OpenAI 商业信任。

### 3. [#25178](https://github.com/openai/codex/issues/25178) — Windows Computer Use 截图失败
- **标签**：`bug` `windows-os` `computer-use`
- **热度**：💬 49 评论 / 👍 22 赞
- **核心问题**：Windows 10 22H2 上 `get_window_state` 调用截图时报 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`，Computer Use 功能半残。
- **为何重要**：Computer Use 是 Codex 核心卖点，跨平台支持完整性直接影响企业落地。

### 4. [#43398](https://github.com/openai/codex/issues/43398) — 多款新一代模型集体容量满载
- **标签**：`bug` `CLI` `connectivity`
- **热度**：💬 15 评论 / 👍 5 赞
- **核心问题**：Pro 20x 用户在 Ubuntu 22.04 上发现 GPT-5.5、GPT-5.6-Sol、GPT-6 Astra 全部不可用，仅 5.4-mini 可用。
- **为何重要**：揭示新模型上线后产能爬坡不足，最高端订阅用户体验也受影响。

### 5. [#41513](https://github.com/openai/codex/issues/41513) — Windows Pets 控件穿透失效
- **标签**：`bug` `windows-os` `pets`
- **热度**：💬 30 评论 / 👍 13 赞
- **核心问题**：内置宠物 Codey 与自定义宠物均变为 click-through，无法拖拽或点击。
- **为何重要**：影响 Pets 新功能的可用性基线，是 Windows 用户的高频吐槽点。

### 6. [#43337](https://github.com/openai/codex/issues/43337) — 配额充足仍报账户级容量错误
- **标签**：`bug` `rate-limits` `CLI`
- **热度**：💬 14 评论
- **核心问题**：Pro 20x 用户的周配额完全可用，但 GPT-6 Astra 与 GPT-5.6 Luna 持续报账户级 capacity 错误。
- **为何重要**：与 #43398、#28507 形成证据链，指向后端计费/调度逻辑缺陷。

### 7. [#41566](https://github.com/openai/codex/issues/41566) — 分页推出导致 thread 历史永久冻结
- **标签**：`bug` `session`
- **热度**：💬 23 评论
- **核心问题**：未完成的回合触发重复 ordinal，使 thread 历史投影永久卡死。
- **为何重要**：数据完整性问题，可能导致用户历史对话永久丢失。

### 8. [#40575](https://github.com/openai/codex/issues/40575) — RFC: 自进化 Agent 与指令蒸馏机制
- **标签**：`enhancement` `CLI` `memory`
- **热度**：💬 13 评论
- **核心问题**：提出 `/learn` 交互式指令蒸馏与 `AGENTS.md` 规则代谢机制，让 Agent 在多周项目周期中持续自我演化。
- **为何重要**：本期最有深度的 RFC，直接触及 AGI 时代 Agent 记忆/学习的核心架构。

### 9. [#32164](https://github.com/openai/codex/issues/32164) — Windows Remote Control 注册无法完成
- **标签**：`bug` `windows-os` `connectivity` `remote`
- **热度**：💬 15 评论
- **核心问题**：Windows 11 上 Codex Remote Control enrollment 流程永远卡在中间环节。
- **为何重要**：与 #37403、#39915 共同构成 Remote 功能的"三连击"，反映该模块全平台质量问题。

### 10. [#37403 / #25178 / #41540] — Windows Desktop 无头启动失败
- **标签**：`bug` `windows-os`
- **热度**：💬 18 评论（#41540）
- **核心问题**：MSIX 包 `26.825.5331.0` 启动时因 `node_repl.exe` 重定位失败（0x80071770）导致 headless。
- **为何重要**：直接阻断应用启动，属于 P0 级别回归。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#43624](https://github.com/openai/codex/pull/43624) — macOS Secure Enclave 用户验证
- 启用原生生物识别凭证的创建/复用/删除与挑战签名，修复原 user-verification API 在 macOS 始终返回 unsupported provider 的问题。
- **意义**：补齐企业级本地身份验证能力。

### 2. [#43651](https://github.com/openai/codex/pull/43651) — 语音静音快捷键与录制指示器
- 新增 `Ctrl+X` 切换当前会话麦克风，并在终端标题区显示录制指示点。
- **意义**：完善实时语音 UX，与 #43581 WebRTC 语音形成配套。

### 3. [#43645](https://github.com/openai/codex/pull/43645) — 实时语音会话 TUI 回归测试覆盖
- 在无音频硬件环境下使用录制 app-server，覆盖语音启动/关闭/线程切换/语音投递/会话重试等关键路径。
- **意义**：为语音功能大规模发布提供质量保障。

### 4. [#43581](https://github.com/openai/codex/pull/43581) — TUI 实时 WebRTC 语音会话
- 新增 `/voice`、`/voice mute`、`/voice stop` 命令，支持本地 WebRTC 音频与 app-server 信令，含实时转写、麦克风/扬声器音量条。
- **意义**：TUI 端首次具备完整语音交互能力。

### 5. [#43595](https://github.com/openai/codex/pull/43595) — Guardian 审查证据集中化
- 将历史审查渲染与开发者消息构造迁移到 `codex_guardian_context`，通过专用 `PreviousReviews` context section 路由，并校验最多 8 条审查记录。
- **意义**：Guardian 安全审查模块架构重构的关键拼图。

### 6. [#43622](https://github.com/openai/codex/pull/43622) — 服务版本低于 CLI 时的告警
- 在启动与重连时检测 app-server 版本，若两者均为稳定版且 CLI 较新，则在会话历史/agents 概览显示提示。
- **意义**：解决"明明升级了 CLI 却仍报旧版 bug"的常见误判。

### 7. [#43562](https://github.com/openai/codex/pull/43562) — 显式 app-server daemon 更新命令
- 新增 `codex app-server daemon update`，即使禁用自动更新也可手动检查最新稳定版，要求安装器持有的 latest 通道独立安装。
- **意义**：赋予运维侧对守护进程版本的可控性。

### 8. [#43572](https://github.com/openai/codex/pull/43572) — 可配置托管 app-server 关停宽限期
- 在 daemon 设置中新增 `shutdownGraceSeconds`，允许用户调整关停前的等待时间（原固定 60 秒）。
- **意义**：解决长任务被强制中断的痛点。

### 9. [#43603](https://github.com/openai/codex/pull/43603) — 恢复丢失的 tmux 尺寸变更通知
- 在 Unix 上为 tmux 增加 500ms 一次的尺寸监控后台任务，将检测到的尺寸变更作为 resize 事件投递。
- **意义**：修复 TUI 在 tmux 环境下画面错位/残留的顽疾。

### 10. [#43576](https://github.com/openai/codex/pull/43576) — TUI 相邻 computer actions 聚合渲染
- 将连续的 `cua_repl` 调用合并为"Using computer"/"Used computer" 紧凑分组，展示动作/失败计数。
- **意义**：显著提升 Computer Use 长流程的可读性。

---

## 📈 功能需求趋势

通过对今日 Issue 标签聚类，社区关注度主要分布在以下方向：

| 方向 | 占比趋势 | 代表性 Issue |
|---|---|---|
| **🤖 新模型接入与可用性** | 🔥🔥🔥 | #28507, #43398, #43337, #41330（GPT-5.6、GPT-6 Astra 容量与计费问题） |
| **🖥️ Windows 平台稳定性** | 🔥🔥🔥 | #25178, #41513, #41540, #32164, #40853, #34695 |
| **📡 Remote Control 跨端体验** | 🔥🔥 | #37403, #32164, #39915 |
| **🧠 Agent 长期记忆与自演化** | 🔥🔥 | #40575（Self-Evolving Agents RFC） |
| **🗣️ 实时语音与多媒体** | 🔥 | #40052, #43581, #43651 |
| **📦 会话/上下文管理** | 🔥 | #9505, #42311, #41566（上下文压缩/会话持久化） |
| **🔒 安全与策略** | 🔥 | #41779（本地 API 策略拦截）、#42523（安全阻断后无法恢复） |
| **🧩 自定义 Agent / MCP** | 🔥 | #40130（subagent sandbox 失效） |
| **🎨 UI/UX 改进** | 持续 | #33730（持久化侧边栏任务）、#41513（Pets 交互） |

---

## 💡 开发者关注点

通过对 Issue 评论与摘要的归纳，开发者当前最集中的痛点与高频诉求包括：

### 1. **新模型产能严重不足**（最高频）
即使是 $200/月 Pro 20x 用户，GPT-5.6 系列与 GPT-6 Astra 也长期报 "at capacity"。社区呼吁 OpenAI 给出**透明的扩容时间线**或**降级回退策略**，避免开发者为不存在的容量买单。

### 2. **Windows 平台已成"重灾区"**
今日 Windows 相关 Issue 占据近 1/3，覆盖应用启动、Computer Use、Pets、Profile、CLI 路径解析等几乎所有子系统。开发者期望建立**Windows 专属 QA 流程**，并对 LTSC/老版 Windows 10 提供明确支持矩阵。

### 3. **Remote Control 模块全面失灵**
macOS/Windows/Android 三端 Remote 相关 Issue 集中爆发（#37403、#32164、#39915），且均与近期回归相关。开发者希望区分 **Beta 标记**，避免将未稳定功能混入生产工作流。

### 4. **上下文压缩与会话完整性风险**
#9505、#42311、#41566 共同揭示一个潜在风险：**长会话在 compaction 后的回放存在数据丢失风险**。开发者强烈建议加入 compaction 前的 diff 校验与"不可压缩锚点"机制。

### 5. **Agent 自演化能力**
#40575 的 RFC 引发较多讨论，开发者认同多周/多项目级 Agent 必须具备**指令蒸馏**与**规则代谢**能力，但担心安全审计（Guardian）链路尚未闭环，建议同步推进。

### 6. **Voice Mode 与工具可见性**
#40052 反映 Voice Mode 下工具被隐藏但切回文本即可见的"幽灵 bug"，开发者要求**模式切换时的工具状态可观测性**。

### 7. **计费透明度**
#43030、#43118、#41330 共同指向 **Work mode / Full reset credit 的不可见消耗**，开发者需要会话级的 token 与额度明细，呼吁开放更细粒度的 usage API。

---

> 📊 **日报小结**：今日 Codex 仓库呈现"新模型产能焦虑 + Windows 体验修复"双主线，技术债务集中体现在 Remote、Computer Use、Pets 三大新功能模块。开发者对 TUI 实时语音与 Guardian 架构重构保持高度期待，建议社区在下一次稳定版发布前优先关注模型可用性与 Windows 回归修复。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-08** | **数据来源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

今日社区活跃度较高，主要聚焦于 **Agent 子代理可靠性**（Subagent 挂起、错误状态上报）与 **Auto Memory 系统稳定性**两大主题。同时沙箱安全加固、Shell 命令卡死、CLI 文档补全等也获得较多关注。nightly 版本 `v0.60.0-nightly.20260908.g85aca163f` 已发布。

---

## 🚀 版本发布

**v0.60.0-nightly.20260908.g85aca163f** 已发布

- 属 nightly 自动发布版本（由 `gemini-cli-robot` 触发）
- 完整变更日志见：[Compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260907.g85aca163f...v0.60.0-nightly.20260908.g85aca163f)
- 对应 PR：#29243 ([chore/release](https://github.com/google-gemini/gemini-cli/pull/29243))

---

## 🔥 社区热点 Issues

| # | Issue | 重要程度 | 摘要 |
|---|-------|---------|------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | ⭐⭐⭐ P1 | **Subagent 在达到 MAX_TURNS 后错误上报为 GOAL 成功**，导致中断被掩盖，用户无感知。13 条评论，是今日讨论最热的 bug。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | ⭐⭐⭐ P1 | **Generalist agent 严重挂起**，甚至简单建文件夹操作都要等超过 1 小时。8 👍，影响核心交互体验。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | ⭐⭐⭐ P2 | 提议利用 Gemini 3 的 Bash 亲和性，引入 **Zero-Dependency OS 沙箱** + 后置 Intent 路由，兼顾安全与模型原生能力。 |
| 4 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | ⭐⭐ P2 | **Gemini 几乎不会主动调用自定义 skill 和子代理**，即使在明显相关的任务中也如此，需要显式指令。 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | ⭐⭐ P2 | Epic：评估 **AST 感知的文件读取、搜索与代码库映射**，潜在减少误读和 token 消耗。 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | ⭐⭐ P1 | **Shell 命令执行完成后仍卡在 "Waiting input"**，3 👍，影响自动化的稳定性。 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | ⭐⭐ P1 | **browser 子代理在 Wayland 下失败**，Linux 桌面用户受影响。 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | ⭐⭐ P2 | Auto Memory 当前依赖模型进行 secrets redact，存在 **内容已进入模型上下文的隐私风险**，需引入确定性脱敏。 |
| 9 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | ⭐⭐ P2 | Auto Memory 在低信号 session 上 **无限重试**，导致 inbox 索引污染。 |
| 10 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | ⭐ P3 | 增强 `browser_agent` 在锁冲突时的恢复能力，避免 fail-fast 带来的体验断裂。 |

**社区反应**：今日讨论集中在 Agent 行为正确性（#22323、#21409）和 Auto Memory 系统健壮性（#26525、#26522、#26523、#26516 形成系列），反映出随着 v0.60 nightly 推出 Memory 系统，相关质量问题开始集中暴露。

---

## 🛠 重要 PR 进展

| # | PR | 类别 | 内容 |
|---|----|----|------|
| 1 | [#29242](https://github.com/google-gemini/gemini-cli/pull/29242) | 🐛 core | **`isAuthenticationError` 不再把 "401" 当子串匹配**，避免误把端口号 `4012` 当作认证错误触发重新登录。 |
| 2 | [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) | 🔒 security | **`getSafeGitEnv` 剥离执行影响的 `GIT_*` 环境变量**，修复 #29003 中 `.env` 污染 git 行为的风险。 |
| 3 | [#29005](https://github.com/google-gemini/gemini-cli/pull/29005) | 🛡 sandbox | **规范 `DEBUG` 环境变量 truthiness**，防止 `"false"`/`"0"` 错误启用端口发布、`--inspect-brk` 等。 |
| 4 | [#29004](https://github.com/google-gemini/gemini-cli/pull/29004) | 🐛 core | 守护 `formatTruncatedToolOutput`，避免 **非正 maxChars 导致输出膨胀**（与 #28995 互补）。 |
| 5 | [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) | 🐛 core | 修复 `formatTruncatedToolOutput` 在 **负 maxChars 下 JavaScript slice 的负索引行为** 导致输出翻倍的问题。 |
| 6 | [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) | 🧩 extensions | **`updateExtension` 在更新前备份**，修复失败回滚实际没恢复原内容的 bug。 |
| 7 | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | 🛡 sandbox | **加固沙箱文件系统边界**：隔离运行时状态、替换主机目录挂载为只读配置、解析 symlink。 |
| 8 | [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) | 🧩 extensions | **去重符号链接/junction 的技能目录**，修复 Windows junction `mklink /J .gemini .agents` 场景下的重复发现。 |
| 9 | [#29239](https://github.com/google-gemini/gemini-cli/pull/29239) | 🐛 cli | 修复 **窄终端宽度下 ghost text 换行死循环**（#19985）。 |
| 10 | [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) | ✨ tool | 新增 `ui.keepAskUserQuestionsInHistory`，**在文本历史中保留 `ask_user` 的提问**，便于会话恢复后追溯决策。 |

> 同时，多个文档类 PR（#29013、#29011、#29009、#29015）已合并，补齐缺失 CLI flags、修正 ACP 标志与环境变量脱敏配置键、为缺失权限块的 workflow 显式声明 `permissions` 范围——反映出项目在文档与 CI 安全卫生上的持续投入。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区最关注的方向：

1. **🤖 Agent 子代理架构升级**
   - 子代理调度更智能（#21968）
   - 子代理状态/轨迹可观测（#22598 /chat share 可见子代理轨迹；#21763 /bug 报告缺失子代理上下文）
   - 子代理在 Wayland 等环境兼容性（#21983）
   - 子代理终止原因语义修正（#22323）

2. **🧠 Memory 系统成熟化**
   - Auto Memory 一系列稳定性与安全性 issue（#26516、#26522、#26523、#26525）形成 sprint
   - 关注 **隐私脱敏、低信号去重、非法 patch 隔离**

3. **📐 AST-aware 代码理解**
   - Epic #22745 探索基于 AST 的文件读取、搜索、codebase mapping
   - 与 #22746 的工具选型（tilth / glyph）联动

4. **📋 任务跟踪持久化**
   - #18836 提议用 **持久化文件任务跟踪** 替换 in-context WriteToDo，缓解 context rot
   - #21000 实验原生文件工具实现 task tracker

5. **🛡 沙箱与安全模型**
   - #19873 提出 Zero-Dependency OS 沙箱 + 后置 Intent 路由
   - 多 PR 落地：`GIT_*` 剥离、DEBUG 规范化、filesystem 边界硬化、401 子串误判修复

6. **⚡ 性能与终端体验**
   - #27636 VirtualizedList 性能优化
   - #21924 终端 resize 高性能无闪烁
   - #19561 Tactful Extraction 减少上下文 token（36.6k baseline）

7. **📚 文档与可发现性**
   - 多 PR 持续补全 flags、settings schema、ACP 说明

---

## 👨‍💻 开发者关注点

1. **Agent 行为可解释性差**：开发者希望子代理在异常时（如达到 MAX_TURNS、generalist 挂起）能给出**清晰的终止原因与状态**，而不是误报 GOAL 成功或无限等待（#22323、#21409）。

2. **Auto Memory 信任边界**：自动把本地 transcript 发给后台提取模型时，**敏感内容在脱敏前已进入模型上下文**，且存在重复处理、非法 patch 静默跳过等问题，社区希望引入**确定性脱敏 + 流程隔离**（#26525、#26523、#26522）。

3. **CLI 文档与 schema 失同步**：发现 `config.ts` 中注册了 6 个未文档化的 flag，`settings.json` 中 redaction 键名与代码不一致——开发者需要**配置即代码的一致性保障**。

4. **沙箱可观察性与可靠性**：DEBUG 字符串 truthiness、git 环境变量泄漏、扩展升级回滚失效等系列问题，开发者要求**安全边界做到确定性而非依赖字符串判断**。

5. **Wayland / 跨平台兼容**：browser 子代理在 Wayland 失败，说明 **Linux 桌面用户覆盖率**仍是 Gemini CLI 的薄弱区。

6. **会话持久化语义**：`/compress` 不写回 session 文件、ask_user 问题丢历史、shell 命令无故卡在 "Waiting input"——开发者希望 **session resume 后行为与中断前一致**。

---

*本日报由 AI 自动汇总生成，数据截至 2026-09-08 当日 24 小时窗口。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-08**

---

## 1. 今日速览

今日 Copilot CLI 仓库无新版本发布，但社区活跃度集中在 **MCP 协议集成缺陷** 与 **会话状态管理问题** 两类高频痛点上。桌面端 1.1.15 引发的 "无法创建第二个 Local 会话" 问题（#4756）以 9 个 👍 成为今日最受关注议题，与之相关的会话恢复、stdin MCP 取消、OAuth User-Agent 头缺失等子问题同步升温。开发者整体反馈显示，**会话生命周期** 与 **MCP 服务器交互稳定性** 是当前 CLI 最迫切需要修复的两条主线。

---

## 2. 版本发布

⛔ 过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 核心摘要 |
|---|-------|--------|----------|
| 1 | [#4756](https://github.com/github/copilot-cli/issues/4756) Windows 端创建新 Local 会话被锁死 | 💬 2 / 👍 **9** | 1.1.15 起 Windows app 要求先归档每一个空闲会话才能新建 Local session，否则报 "invalid argument"。与 #4742 疑似同根问题，影响工作流连续性。 |
| 2 | [#4438](https://github.com/github/copilot-cli/issues/4438) `disable-model-invocation: true` 让 Skill 不可达 | 💬 4 / 👍 **6** | 项目级 Skill 在 frontmatter 标记 `disable-model-invocation: true` 后，`skill()` 工具直接返回 "Skill not found"，连用户显式调用也被阻断，与文档语义不符。 |
| 3 | [#4505](https://github.com/github/copilot-cli/issues/4505) 会话恢复后保留陈旧 connection item ID |  1 / 👍 **3** | 恢复历史会话后每条 prompt 都以 `400 input item ID does not belong to this connection` 失败，retry / `/fork` 均无效。属于阻断性问题。 |
| 4 | [#4017](https://github.com/github/copilot-cli/issues/4017) 非首方 MCP HTTP 服务器 OAuth 静默失败 | 💬 3 / 👍 **3** | Desktop App 中 Atlassian、incident.io 等非首方 HTTP MCP 服务器，在开关切换时既无浏览器弹窗也无错误提示，用户完全无感知，影响远端 MCP 生态可用性。 |
| 5 | [#1999](https://github.com/github/copilot-cli/issues/1999) 德语键盘无法输入 `@`（AltGr+Q）✅ 已关闭 | 💬 **10** / 👍 2 | 长期 Bug，1.0.2 起即存在，阻塞德语用户使用 CLI（@ 是核心元字符）。本日报窗口期内已关闭，关注后续修复版本。 |
| 6 | [#4753](https://github.com/github/copilot-cli/issues/4753) v1.0.83 会话恢复取消 stdio MCP 连接 | 💬 2 / 👍 1 | MCP 连接超时从 1.0.82 的 ~16s 暴降至 ~1s，恢复会话时正在初始化的 MCP server 被静默丢弃，整局会话均不可用。 |
| 7 | [#4757](https://github.com/github/copilot-cli/issues/4757) `--yolo` 被误判为 fail-closed | 💬 3 / 👍 0 | 无托管策略的账号被错误应用 fail-closed 旁路权限限制，且整局会话无法解除，`--allow-all` 完全失效。 |
| 8 | [#4742](https://github.com/github/copilot-cli/issues/4742) Desktop 1.1.15：同项目不能并行两个 Local 会话 | 💬 7 / 👍 0 | 与 #4756 同根，但侧重 "已有 CLI 进程时无法创建新 session"，错误信息 "This project already has an active Local workspace"。 |
| 9 | [#3945](https://github.com/github/copilot-cli/issues/3945) 记忆在仓库之间泄漏 | 💬 3 / 👍 0 | 新建空仓库内 Copilot 仍引用其他仓库的 "facts stored in the memory"，隔离性存在严重隐患。 |
| 10 | [#4750](https://github.com/github/copilot-cli/issues/4750) TUI 空载仍持续吃 CPU | 💬 0 / 👍 0 | 启动后空载占 6–7% CPU ×1 核，执行 prompt 后多核被持续占用，体验与电量影响明显。 |

> 🔎 备选高潜力议题（未入榜但值得跟踪）：[#4755](https://github.com/github/copilot-cli/issues/4755) 会话永久 wedge / [#4749](https://github.com/github/copilot-cli/issues/4749) Azure MCP `learn=true` 180s 超时回归 / [#4759](https://github.com/github/copilot-cli/issues/4759) CLI 未发送 MCP 取消请求 / [#4738](https://github.com/github/copilot-cli/issues/4738) `ask_user` 表单回车导致输入丢失（数据丢失级）。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内仅 4 条 PR 更新，整体提交节奏偏冷，下面逐一列出：

| # | PR | 作者 | 内容摘要 |
|---|----|------|----------|
| 1 | [#4762](https://github.com/github/copilot-cli/pull/4762) install: report unsupported operating systems | devm33 | `install.sh` 在 FreeBSD 等非 macOS/Linux 平台被错误地归入 Windows 分支并提示 `winget not found`。新增明确的 unsupported platform 分支，避免误导信息。 |
| 2 | [#4761](https://github.com/github/copilot-cli/pull/4761) install: report unsupported operating systems | 1fanwang | 与 #4762 **完全重复**的修复尝试（不同作者同日提交同一改动），建议合并其中之一，关注审阅倾向。 |
| 3 | [#4746](https://github.com/github/copilot-cli/pull/4746) Add experimental next-action extension prototype | anujb-msft | 新增 `examples/next-best-action/` 实验性 SDK 扩展，复用 `joinSession()` + 无工具 `ui.environment`，用于演示模型推理的 next-action。明确 opt-in、不影响安装产物。 |
| 4 | [#4748](https://github.com/github/copilot-cli/pull/4748) Add joke cli | tnk7899xd-create | 描述为空的低质量 PR（俗称 "joke PR"），不建议合入主线，建议关闭以减少审阅噪声。 |

---

## 5. 功能需求趋势

通过对 27 条活跃 Issue 的领域标签归类，可提炼出以下社区最关注的功能方向：

| 方向 | 代表 Issue | 关注信号 |
|------|-----------|----------|
| 🔌 **MCP 协议成熟度** | #4017、#4681、#4749、#4753、#4759 | OAuth 流程、User-Agent 头、连接取消、子命令超时四大子系统同时被反馈；HTTP 与 stdio 双传输路径均存缺陷。 |
| ️ **会话生命周期管理** | #4505、#4670、#4693、#4754、#4755 | 恢复状态污染、删除后复活、永久 wedge、跨仓库过滤——会话存储与状态机正成为稳定性瓶颈。 |
|  **Agent / Skill 子系统** | #4438、#4670、#4752、#4760 | `disable-model-invocation` 语义错位、`--add-dir` 自定义 agent 不可发现、subagent 事件延迟，本月最频繁的 "可用性差" 类反馈。 |
|  **Desktop App 健壮性** | #4742、#4756、#4757 | 1.1.15 自动升级后多用户回归集中在 Local session 与 managed policy 路径。 |
| 🌍 **国际化与本地化** | #1999、#4738 | 非英语键盘/输入流缺陷仍零星出现，输入层鲁棒性需持续投入。 |
| ⚙️ **跨平台 & 安装体验** | #4761/#4762、#4740、#4750 | FreeBSD 报错、Voice server pid 死锁、TUI CPU 占用——非主流平台与资源管理成为新热点。 |

---

## 6. 开发者关注点（痛点与高频需求）

综合 issue 文本与评论，可归纳出开发者最集中的四类痛点：

1. **"会话一恢复就坏" 是最大信任危机**  
   #4505、#4670、#4753、#4755 都指向同一根因——恢复路径缺少幂等保护，导致 CAPIError、stale ID、悬空 MCP 连接、永久 wedge 等多种失败模式叠加，社区明确表达 "fork 也不救" 的失望。

2. **MCP 集成的"沉默失败"模式**  
   #4017（无弹窗）、#4749（超时后无明确错误）、#4759（取消请求缺失）形成共同的体验问题：MCP 子系统倾向于 **静默吞错**，开发者无法判断是网络、配置还是协议问题，调试成本高。

3. **managed-policy 边界模糊**  
   #4757 揭示在没有任何托管策略的账户上仍被施加 fail-closed 限制，且会话内不可解除。开发者期望策略解析有显式状态输出，并允许显式 override。

4. **"漂亮但不可用"的 UX 细节**  
   - #4738：表单 Enter 键直接吞掉用户长文本输入，属数据丢失级；
   - #1999：@ 字符无法输入让 CLI "不可用"；
   - #4750：TUI 静默吃 CPU 影响开发机续航；
   - #4693：会话列表缺乏仓库维度筛选，规模化的开发者难以管理。

> 💡 **建议跟踪的修复信号**：当 1.0.84 发布或 Desktop 1.1.16 推出时，重点验证上述 #1、#2 类问题的回归情况；如官方释出关于 MCP `initialize` 请求与 `User-Agent` 头的修复说明，将同时缓解 #4681 / #4017 / #4749 三条议题。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) Issues & PRs，时间窗口：过去 24 小时。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

过去 24 小时内仓库活跃度较低，**无新版本发布**。社区讨论焦点集中在 Windows 平台下的输入法兼容性问题（#2584）以及 Agent 在工具调用循环中卡死的新 Bug（#2637）。一个高赞的 Plan Mode 功能请求（#1354）被标记为关闭，值得关注其后续处理方式。此外，PR #2616 提出了通过手机 App 远程配对控制 CLI 会话的新方向。

---

## 🚀 版本发布

无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时内更新的 Issue 仅 4 条，以下为全部列出，按社区关注度排序。

### 1. [#1354 我想要一个 Plan Mode（已关闭，👍7）](https://github.com/MoonshotAI/kimi-cli/issues/1354)
- **创建于**：2026-03-06 | **更新于**：2026-09-07
- **重要性**：⭐⭐⭐⭐⭐
- **概要**：用户希望通过 Plan Mode 在执行前先与 AI 充分讨论规划，避免 Kimi Code 过早自主执行命令。
- **社区反应**：👍7，是近期讨论度最高的增强请求。中文用户呼声尤其强烈，曾尝试通过 Skills 自定义实现但效果不佳。
- **点评**：此 Issue 被关闭但仍处于高关注状态，可能已进入内部 Roadmap 或转向其他渠道跟进。

### 2. [#2584 Windows 下泰文及 IME 输入字符重复（OPEN，👍1）](https://github.com/MoonshotAI/kimi-cli/issues/2584)
- **创建于**：2026-08-04 | **更新于**：2026-09-07
- **重要性**：⭐⭐⭐⭐
- **概要**：在 Windows 11 上使用 v0.31.1 时，通过泰文或其他 IME 输入会出现字符重复问题。
- **社区反应**：👍1，评论 1 条。
- **点评**：典型跨平台兼容性问题，源于终端读取 IME 合成文本时的时序 bug，会显著影响非英文用户的体验。

### 3. [#2637 Agent 卡在 Read 工具循环无法发出 Edit（OPEN，新）](https://github.com/MoonshotAI/kimi-cli/issues/2637)
- **创建于**：2026-09-07 | **更新于**：2026-09-07
- **重要性**：⭐⭐⭐⭐
- **概要**：v0.41.0 中 Agent 反复调用 Read 工具，无法过渡到 Edit 操作，影响核心编码流程。
- **社区反应**：刚提交暂无互动。
- **点评**：这是影响核心使用流程的严重功能性 Bug，需优先排查模型输出解析或工具调度逻辑。

### 4. [#1356 MCP Skill 配置迁移增强请求（已关闭）](https://github.com/MoonshotAI/kimi-cli/issues/1356)
- **创建于**：2026-03-06 | **更新于**：2026-09-07
- **概要**：用户希望 Kimi CLI 能直接读取 Claude CLI、Cursor、Windsurf、Continue 等工具的 MCP 服务器配置，降低跨工具迁移成本。
- **社区反应**：👍0、评论 0，但反映出 MCP 生态互通的实际需求。
- **点评**：被关闭但功能价值显著，可能作为更大生态整合项目的一部分推进。

---

## 🔧 重要 PR 进展

> 说明：过去 24 小时内更新的 PR 仅 1 条。

### [#2616 Add Build Remote Agent phone pairing (gbr/1)](https://github.com/MoonshotAI/kimi-cli/pull/2616)
- **作者**：LinespottingPrivate | **创建于**：2026-08-23 | **更新于**：2026-09-07
- **概要**：将第三方付费 iOS/Android App **Build Remote Agent** 集成作为 Kimi CLI 桌面端的配对设备。手机端作为 spectator + veto 角色，通过 MIT 协议 `gbr-agent` 中间件实现对本地会话的旁观与指令注入。
- **重要性**：⭐⭐⭐⭐
- **点评**：这是一个有趣的"第三方移动遥控"集成尝试，体现了社区对 CLI 移动化、远程协作场景的探索方向。不过 PR 来自外部贡献者，协议采用 `gbr/1` 自定义协议，整合进官方主分支的可能性较低，但反映出社区生态的多样性。

---

## 📈 功能需求趋势

从近期 Issues 整体来看，社区关注的功能方向可归纳为以下几类：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **🤖 计划/审批模式（Plan Mode）** | #1354 | 🔥🔥🔥🔥🔥 |
| **🔌 MCP 生态互通** | #1356 | 🔥🔥🔥 |
| **📱 移动端/远程控制** | #2616（PR） | 🔥🔥🔥 |
| **🪟 跨平台兼容性（Windows IME）** | #2584 | 🔥🔥🔥 |
| **🛠️ Agent 调度可靠性** | #2637 | 🔥🔥🔥 |

**核心洞察**：
1. **Plan Mode 是社区呼声最高的需求**，反映用户对 AI Agent "自主权过大、缺乏人类审批节点"的不满。
2. **MCP 生态互通**表明 Kimi CLI 用户群体中相当比例同时使用多款 Agent 工具，互操作性是降低切换成本的关键。
3. **移动化遥控**虽是第三方尝试，但说明 CLI 工具正在向"多端协同"演进。

---

## 👨‍💻 开发者关注点

综合近期反馈，开发者社区的高频痛点与需求包括：

### 🔴 痛点
1. **Windows 平台体验欠佳**：IME 输入字符重复等问题降低了非英文 Windows 用户的使用门槛。
2. **Agent 行为不可控**：Plan Mode 缺失导致 AI 过早执行命令；Read 循环 Bug 又让 Agent 卡死无法推进——两种极端都说明工具调度策略需要更精细的控制粒度。
3. **生态碎片化**：MCP 配置在多个工具间重复维护，用户渴望"一次配置、多端复用"。

### 🟢 需求
1. **类 Claude Code 的交互审批机制**：在执行写操作前提供预览/确认步骤。
2. **更稳定的 Agent Loop**：在工具调用失败或异常时提供降级或重试策略。
3. **诊断信息增强**：Issue #2637 中提到用户无法确认会话所用模型，期望 CLI 提供更透明的运行时信息（如 `--debug`、`/status` 等命令）。

---

## 📊 数据概览

| 指标 | 数值 |
|------|------|
| 新版本发布 | 0 |
| Issue 更新 | 4（2 OPEN / 2 CLOSED） |
| PR 更新 | 1（OPEN） |
| 最高赞 Issue | #1354（👍7） |
| 新建 Issue | 1（#2637） |

> 📝 **备注**：今日数据量较小，可能临近周末或版本迭代间隙期，建议结合周报综合判断趋势。

---

*报告生成时间：2026-09-08 | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>



</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-08

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi)（原 badlogic/pi-mono）  
> 统计周期：过去 24 小时

---

## 📌 今日速览

过去 24 小时 Pi 仓库无新版本发布，但社区活跃度依然高涨：Issue 与 PR 合计更新近 80 条。当前最受关注的议题是 **openai-codex 在交互式 TUI 下频繁陷入 "Working..." 卡死**（77 条评论、33 👍，仍在处理中），同时多个 AI 提供商（GitHub Copilot、Gemini、OpenRouter、Grok、Claude）的兼容性问题密集出现，反映出 Pi 在多模型适配上的持续挑战。代码层面则聚焦于 **系统消息架构重构**（mitsuhiko 的 #9116/#9117 系列）与 **Ollama Cloud 等新提供商接入**。

---

## 🚀 版本发布

**今日无新版本发布**。当前已合并的最新稳定版本为 **0.85.x** 系列（参见近期 #9273 等 issue 提到的 0.85.1），社区热切期待修复多项高优先级 bug 后的下一版。

---

## 🔥 社区热点 Issues

### 1. [#4945](https://github.com/earendil-works/pi/issues/4945) — openai-codex 连接可靠性问题
- **状态**：OPEN · In Progress · 77 评论 · 33 👍
- **重要性**：本期热度第一。`gpt-5.5` 在交互式 TUI 中频繁出现"无流式文本、无工具调用、无可见错误"卡死，唯一恢复方式是按 Esc（会记录 abort 轮次）。这是直接影响日常使用体验的关键问题，且仍在持续发生。

### 2. [#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 平台使用情况调研
- **状态**：OPEN · 61 评论
- **重要性**：作者 @petrroll 主动发起的横截面调研，旨在梳理 Pi 在 Windows 上的运行方式（WSL、原生、容器等），明确后续投入方向。对 Windows 用户生态扩展具有战略意义。

### 3. [#6996](https://github.com/earendil-works/pi/issues/6996) — Gemini 3.x 工具调用失败（缺少 thought_signature）
- **状态**：CLOSED · 9 评论
- **重要性**：反映 Gemini 3.5/3.6 Flash 等新模型在工具调用历史中缺失 `thought_signature` 字段导致会话失败。该问题已关闭，说明社区对最新 Gemini 模型的支持正在快速跟进。

### 4. [#7010](https://github.com/earendil-works/pi/issues/7010) — OpenAI 兼容 Provider 工具 Schema 标准化
- **状态**：OPEN · 7 评论 · 今日更新
- **重要性**：`@earendil-works/pi-ai` 未对 OpenAI-compatible 适配器中对象 schema 的 `required` 字段做归一化，会导致部分 provider 报错。属于底层适配层缺陷，影响所有 OpenAI-compatible 用户。

### 5. [#8823](https://github.com/earendil-works/pi/issues/8823) — Esc 在流式传输中无法真正取消请求
- **状态**：OPEN · 7 评论 · 今日更新
- **重要性**：Esc 虽被注册为 abort，但底层 HTTP 请求未被中止，需等待 provider 自然结束。对交互体验和成本控制均有负面影响。

### 6. [#8684](https://github.com/earendil-works/pi/issues/8684) — `PI_OFFLINE` 静默禁用所有 provider 模型发现
- **状态**：OPEN · 6 评论 · 今日更新
- **重要性**：环境变量行为与其文档描述不符，超出预期地禁用了所有 provider 模型目录网络发现，导致离线模式下完全无法使用。

### 7. [#8760](https://github.com/earendil-works/pi/issues/8760) — OpenRouter `:free` 模型 400 错误
- **状态**：OPEN · In Progress · 5 评论
- **重要性**：Pi 把 `max_tokens` 设为模型目录中的 `maxOutputTokens`，超过 OpenRouter `:free` 模型的实际上限，影响免费模型可用性。

### 8. [#9209](https://github.com/earendil-works/pi/issues/9209) — GitHub Copilot GPT-6 Astra 路由错误
- **状态**：CLOSED · 5 评论
- **重要性**：Pi 把 `gpt-6-astra` 路由到 `/chat/completions`，Copilot 拒绝。已被 PR #9253 修复。

### 9. [#8928](https://github.com/earendil-works/pi/issues/8928) — 并行启动时 `auth.json` 含过期 OAuth 导致误报
- **状态**：OPEN · 4 评论 · 今日更新
- **重要性**：多进程场景下报"No API key found"约 48 秒，与已知的 #1871、#4919、#6880 系列相关，作者提供了确定性复现与时序数据。

### 10. [#8826](https://github.com/earendil-works/pi/issues/8826) — Agent 重试退避时间应设上限
- **状态**：OPEN · 4 评论
- **重要性**：在长期上游服务抖动（如 503）场景下，指数退避会无上限增长。提议加入可配置 cap，提升长时间运行 agent 的稳定性。

---

## 🛠️ 重要 PR 进展

### 1. [#9303](https://github.com/earendil-works/pi/pull/9303) — fix(interactive): 选择会话后再恢复会话
- **状态**：CLOSED · 修复 `/resume` 时选择器关闭早于会话恢复导致的"静默无反应"。

### 2. [#9301](https://github.com/earendil-works/pi/pull/9301) — confirm device-code 浏览器/剪贴板操作
- **状态**：OPEN · 修复 [#9282](https://github.com/earendil-works/pi/issues/9282)，恢复 device-code 登录时自动打开浏览器与复制用户码的能力（但增加确认提示）。

### 3. [#7742](https://github.com/earendil-works/pi/pull/7742) — Ollama Cloud Provider 支持
- **状态**：OPEN · 新增 Ollama Cloud 作为 provider，复用 `OLLAMA_API_KEY`，同时保留本地/云混合连接能力。

### 4. [#9297](https://github.com/earendil-works/pi/pull/9297) — 移除无效的 Fable 5 fallback 目标
- **状态**：OPEN · 修复 [#9294](https://github.com/earendil-works/pi/issues/9294)，把 Opus 5 设为唯一内置 fallback，覆盖 5.1 等变体。

### 5. [#9280](https://github.com/earendil-works/pi/pull/9280) — 实现级文档评估
- **状态**：CLOSED · 为 `packages/coding-agent/docs` 下每个 Markdown 页生成实现审计，确定性验证覆盖率/路径/重复。

### 6. [#8744](https://github.com/earendil-works/pi/pull/8744) — TUI overlay 选择排除
- **状态**：OPEN · 全屏模式下允许用户选择 overlay 是否纳入复制选区。

### 7. [#8615](https://github.com/earendil-works/pi/pull/8615) — 保留交错式用户内容
- **状态**：CLOSED · 在 `sendUserMessage()` 中保留原始文本/图片块顺序，扩展点不再破坏多模态交错。

### 8. [#9292](https://github.com/earendil-works/pi/pull/9292) — 手动重试 API/命令
- **状态**：CLOSED · 提供手动重试能力，覆盖自动重试放弃的场景（用户先提交了关联 issue #9293）。

### 9. [#9117](https://github.com/earendil-works/pi/pull/9117) — prompt/tool 变更作为系统消息 delta 投递
- **状态**：OPEN · 基于 #9116 的第二层拆分（系统角色拆分），让 coding agent 把 prompt 和工具组合变更以系统消息 delta 形式投递，避免重写顶层 prompt。

### 10. [#9116](https://github.com/earendil-works/pi/pull/9116) — 添加会话中途系统消息
- **状态**：OPEN · #8998 的第一层拆分，扩展 pi-ai 让 agent-core 与 coding-agent 透传新增的 system role，是会话中途扩展/工具变更的关键基础设施。

### 补充关注：
- [#256](https://github.com/earendil-works/pi/pull/256) — 实现 XDG Base Directory 规范并自动迁移（CLOSED）
- [#9253](https://github.com/earendil-works/pi/pull/9253) — Copilot GPT 模型改走 Responses endpoint，修复 astra（CLOSED，关闭 #9209）
- [#9272](https://github.com/earendil-works/pi/pull/9272) — 允许扩展从自定义 provider 流式调用（CLOSED，关闭 #8964）

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区诉求主要集中在以下几个方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **多 Provider 模型适配** | #4945、#6996、#8760、#9209、#9294、#9298 | 🔴 极高，新模型/路由变更频繁引发兼容性问题 |
| **跨平台体验（Windows）** | #7547、#9169 | 🟠 高，Windows 用户群亟待服务化 |
| **TUI 交互细节打磨** | #8823、#7629、#8744、#7973 | 🟠 高，Esc 取消、键位映射、全屏选区复制为高频反馈 |
| **性能与稳定性** | #9055、#7739、#8826、#8928、#9276、#8684 | 🟠 高，事件队列 O(n²)、启动延迟、并发竞态、内存溢出 |
| **Provider 接入与生态** | #7742、#9237、#9290 | 🟡 中，Ollama Cloud、opencode 桥接等新集成 |
| **DX / 编排能力** | #9258、#9273、#9289、#9116 | 🟡 中，模型注册表、环境变量、启动信息分级控制 |
| **文档与认证体验** | #9282、#9077、#9280 | 🟢 中，device-code 登录、Docker 沙箱文档 |

---

## 💡 开发者关注点

综合近 24 小时的反馈，可以归纳出开发者最关心的痛点与高频诉求：

1. **"PI 跟不上 Provider 演进"是头号痛点**  
   Copilot Gemini Grok Claude OpenRouter 几乎每天都有"新模型路由错误/fallback 失效/字段缺失"类 issue 出现。建议建立 provider 适配的回归矩阵与 CI 验证。

2. **交互式 TUI 的可靠性问题被低估**  
   openai-codex 卡死 (#4945)、Esc 取消不生效 (#8823)、session 选择器静默关闭 (#9303)——三个独立但同源的问题说明 abort/lifecycle 链路需要系统性梳理。

3. **Windows 体验仍是短板**  
   既缺统一文档，也缺开箱即用路径；图像渲染 (#9169)、clipboard (#7973) 等问题在 Windows 上反复出现。

4. **性能优化集中在"小颗粒度但高频"的路径**  
   `EventStream.shift()`、fuzzy match 字符级扫描、grep context 行导致的 OOM——开发者倾向于用 O(1) 队列、`indexOf()`、流式读取等小改动换取显著收益。

5. **扩展/编排生态正在崛起**  
   `x-opencode-session` 头强制 (#9290/#9237)、`models.json` `$ENV` 解析 (#9258)、启动信息分级 (#9289)、model 持久化回归 (#9273) 表明 Pi 作为"被编排"的 SDK/headless agent 用途增长迅速。

6. **基础设施级重构正在进行中**  
   mitsuhiko 主导的 #9116/#9117 系统消息拆分（基于 #8998）是 Pi 多回合上下文管理的根本性升级，值得长期关注。

---

> 📎 完整数据可在 [earendil-works/pi Issues](https://github.com/earendil-works/pi/issues) 与 [Pull Requests](https://github.com/earendil-works/pi/pulls) 查看。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-08** | 数据来源：GitHub QwenLM/qwen-code

---

## 📌 今日速览

今日 Qwen Code 仓库的核心动态围绕 **Web Shell 工作流可视化** 展开，发布了 `v0.23.1-preview.2` 预览版本，重点引入「动态工作流运行的可视化管理」与「Session Workflow 投影的性能优化」。同时，**后台 Agent 与 Daemon 会话管理** 成为社区最高优先级讨论方向（P1/P2 多议题集中），而 **ink → OpenTUI 的 TUI 渲染层迁移** 这项长期跟踪议题持续吸引讨论（32 条评论）。整体看，项目正从「单轮交互」向「多 Agent 协作 + 持久化工作流」演进。

---

## 🚀 版本发布

### v0.23.1-preview.2
- **核心更新**：Web Shell 中可视化并管理动态工作流运行（#10594 by @qqqys），并对 Session Workflow 投影进行了性能优化（`perf(web-shell): derive the session workflow project`）。
- 📦 同时发布的还有 `v0.23.0-nightly.20260907.f1ed3bc31a`（同源变更）以及 `cua-driver-rs v0.20.4`（CUA Driver 预构建二进制，覆盖 macOS / Linux / Windows）。
- 🔗 https://github.com/QwenLM/qwen-code/releases

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 评论数 | 关注理由 |
|---|------|--------|--------|----------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **Migrate TUI rendering layer from ink to OpenTUI** (tracking) | P3 | 32 | 长期跟踪议题。当前 ink 7 + React 19 架构存在闪烁、自定义 VP 模式等结构性问题，约 1037 行 patch 难以维护，社区对底层 TUI 演进方向关注度高。 |
| [#8586](https://github.com/QwenLM/qwen-code/issues/8586) | **Track `activeWork` & background Agent recovery** | P2 | 9 | 提出五层防护的深度守护健康与背景 Agent 恢复机制，是「后台自动化」路线的关键基础设施。 |
| [#11119](https://github.com/QwenLM/qwen-code/issues/11119) | **serve: 后台 shell 输出与唤醒通知在会话回收时静默丢失** | P1 | 8 | 高严重度 Daemon Bug。CI 轮询循环在 turn 结束后输出全部丢失，会话陷入 wedge 状态，直接影响 Web Shell 生产可用性。 |
| [#11303](https://github.com/QwenLM/qwen-code/issues/11303) | **[Windows] VS Code Companion qwen-cli 泄漏 conhost.exe ConPTY 进程** | P1 | 6 | 12 小时泄漏 347 个 conhost 进程 / ~2.8 GB 内存。Windows 平台稳定性严重问题，影响大量 VS Code 用户。 |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) | **400 Failed to initialize samplers in 0.22.3** | P2 | 6 | 自 0.22.3 引入的回归，导致 llama-server 后端（Qwen 3.6/3.8 模型）调用失败。涉及 grammar 解析，本地推理用户痛点。 |
| [#3361](https://github.com/QwenLM/qwen-code/issues/3361) | **Agent 将成功执行的 shell 输出误判为空** | – | 6 | OpenAI 兼容 API 下的长期 Bug，影响 `git` 等命令链的可靠性。 |
| [#10435](https://github.com/QwenLM/qwen-code/issues/10435) | **新版本在本地 llama-server 上崩溃推理** | P2 | 5 | 与 #10530 同源（grammar 解析），反映 Qwen Code 与其他 harness（Pi、OpenCode）的兼容性差距。 |
| [#10865](https://github.com/QwenLM/qwen-code/issues/10865) | **session workflow projection 每次渲染推导 3 次** | P2 | 5 | 性能议题，与 #10594 优化同方向，索引本应构建一次却被多次重建。 |
| [#11272](https://github.com/QwenLM/qwen-code/issues/11272) | **MCP: 取消长时 stdio 工具调用会杀死 MCP server 且永不恢复** | P2 | 3 | 钉钉 Channel 部署中真实生产事故。MCP 服务被杀后 Channel 下无法自愈。 |
| [#11205](https://github.com/QwenLM/qwen-code/issues/11205) | **filter screen 在 main 上丢失 6 项加固** | P2 | 3 | 安全相关，涉及 read order、EACCES、U+FFFD、spawn timeout、候选上限、保留策略。main 分支与 PR 分支合并冲突导致的安全回退。 |

> 💡 **社区反应观察**：P1/P2 议题集中在 **Daemon/Web Shell 可靠性** 与 **本地推理兼容性**；bot 自动维护的 CI 失败工单（#11226、#11268 等）占据大量更新但多为常规抖动。

---

## 🛠 重要 PR 进展

| # | 标题 | 关键内容 |
|---|------|---------|
| [#11153](https://github.com/QwenLM/qwen-code/pull/11153) | **fix(cli): 在 `/<skill>` 启动时运行 SKILL.md PreToolUse hooks** | 修复 #11067：slash-command 启动技能时注册 frontmatter 中的 hooks，使 Shell 安全门控等 hook 在用户触发路径下也生效。 |
| [#11295](https://github.com/QwenLM/qwen-code/pull/11295) | **feat: GPT-5 与 GPT-6 reasoning effort 配置** | @wenshao 为已知 GPT-5 模型与 GPT-6 Astra 加入模型专属 reasoning effort 配置，含 provider 前缀、路由标签、数字 patch 版本、日期快照归一化处理。 |
| [#11282](https://github.com/QwenLM/qwen-code/pull/11282) | **feat(core): 在 per-provider customHeaders 中展开 `${session_id}`** | 回应 #10995：让 `customHeaders` 支持 `${session_id}` 模板变量，为每个会话追踪、可观测性、计费隔离提供基础。 |
| [#11086](https://github.com/QwenLM/qwen-code/pull/11086) | **feat(serve): 将扩展作用域限定到 workspace runtime** | 全局扩展目录通过每个 workspace 选定的 runtime 暴露；extension 管理、composer add 菜单、`@` 提及均更新。 |
| [#10938](https://github.com/QwenLM/qwen-code/pull/10938) | **feat(web-shell): Session Workflow 依赖可导航 + 简化 chrome** | 关闭 #8583 后残留的导航/形状/文档空缺：plan DAG 以「步骤」而非「状态」领头，对 DAG 与 inspector chrome 做设计复盘。 |
| [#11270](https://github.com/QwenLM/qwen-code/pull/11270) | **fix(core): 超时停滞的后台 Agent** | 为后台 Agent turn（含新启动、恢复运行、常驻续接）加入 watchdog：模型/控制层 15 分钟无进度超时，执行中的工具各自 10 分钟进度截止。 |
| [#11206](https://github.com/QwenLM/qwen-code/pull/11206) | **feat(mesh): 持久化共享线程的 Agent 协作** | 工作区 Agent 身份持久化，共享线程上多人协作：创建/分配工作、@提及、运行中插入、归属结果、运行历史、取消、阻塞解决、审核标记。 |
| [#10999](https://github.com/QwenLM/qwen-code/pull/10999) | **feat(core): 配置模型 reasoning 能力** | 声明式 reasoning 能力贯穿 provider 模型定义、ACP、会话恢复、workspace 预览、TUI effort 控件、最终 OpenAI 兼容请求；`deepseek-v4-pro` 原生支持。 |
| [#11250](https://github.com/QwenLM/qwen-code/pull/11250) | **feat(web-shell): 改进 split-view 会话导航** | 标题复用侧栏 popover；最后交互面板增加细 header 指示器；工具栏按钮循环定位待审批面板。 |
| [#11302](https://github.com/QwenLM/qwen-code/pull/11302) | **fix(build): 从 prepare hook 移除重型 build/bundle** | 修复 #11301：`scripts/prepare.js` 仅运行 husky + `npm run generate`，移除 `npm run build` / `npm run bundle`，大幅加速本地安装。 |

> 📈 **趋势观察**：10 条中 5 条聚焦 **Web Shell 体验**，2 条涉及 **多 Agent / 后台守护**，1 条是 **模型兼容性**，1 条是 **性能修复**。本周 PR 关键词：「workflow projection」「background agent」「multi-agent collaboration」「GPT-5/6 effort」。

---

## 📊 功能需求趋势（基于 Issues 全量分析）

| 方向 | 代表议题 | 热度信号 |
|------|---------|---------|
| **多 Agent / 后台自动化** | #8586, #11119, #11270, #11206 | P1/P2 高优，多议题互相关联，是当前产品演进的「主战场」 |
| **Web Shell 工作流可视化** | #8662, #10865, #10938, #11250 | 每周持续迭代，UI/UX 与性能并重 |
| **本地推理兼容性** | #10530, #10435 | 跨版本回归，社区强烈关注 llama-server / 第三方后端 |
| **MCP 生态稳定性** | #11272 | 长时 stdio 工具取消导致 server 死亡，Channel 部署下不可恢复 |
| **模型扩展（新模型支持）** | #11295 (GPT-5/6), #10999 (reasoning 配置), #11227 (/effort 传播) | reasoning effort、customHeaders、模型特定参数成三大主题 |
| **记忆与语义检索** | #10684 | 提出本地 semantic memory MCP server 或 auto-memory 嵌入检索 |
| **TUI 底层重构** | #8662 | ink → OpenTUI 是中期路线图，社区期待值高 |
| **Windows 平台稳定性** | #11303 | ConPTY 进程泄漏，VS Code Companion 用户集中受影响 |

---

## 💬 开发者关注点

1. **后台守护的「忙碌」语义不一致**：#8586、#11119、#11118 三连揭示 `qwen serve` 在判断 session 是否可回收时，cron/goal/monitor/history mutation 的「忙碌」定义与 child 进程报告不一致，导致会话要么 wedge 要么永远不释放。开发者明确呼吁统一术语与五层防御架构。

2. **第三方 / 本地推理兼容性退化**：0.22.3 引入 grammar 解析回归，让 llama-server 上的 Qwen 3.6/3.8 模型报 400。开发者对比 Pi、OpenCode 均无此问题，希望 Qwen Code 在 OpenAI 兼容路径上保持「不破坏既有 harness 集成」。

3. **MCP 长时任务的取消语义**：Channel 部署中，取消 stdio MCP 工具调用直接把整个 MCP server 杀掉，且没有自愈路径。开发者希望引入「cancellation ≠ termination」的设计，并补充 server 自愈机制。

4. **会话级可观测性诉求**：#10995、#11282 的 `${session_id}` 模板提案背后是开发者对「每会话独立追踪、计费隔离、路由灰度」的强需求，这是配置可观测性栈（Datadog/Self-hosted）的基础。

5. **Web Shell 工作流可解释性**：#10938 与 #10865 共同指向一个诉求——**plan DAG 应该以「步骤」而非「状态」领头**，并且依赖关系应可导航、chrome 应简化。这是为多步 Agent 任务建立「人可理解」心智模型的关键。

6. **构建链路摩擦**：#11302 移除 prepare hook 中的 build/bundle，反映社区对 `npm install` 后等待长构建的强烈抱怨，开发体验（DX）正成为隐性的 high-frequency 反馈。

---

> 📎 **日报小结**：今日 Qwen Code 的工作重心非常清晰——**Web Shell 工作流可视化** 和 **后台多 Agent 守护**。从 PR 与 Issue 的协同看，#10594（web-shell 可视化）、#10938（依赖可导航）、#11270（后台 Agent 超时）、#11086（workspace-scoped 扩展）、#11206（多 Agent 协作）构成 v0.23.x 的主干特性集；TUI 迁移（#8662）与 OpenAI 兼容层修复（#10530/#10435）则是两个未解决的悬而未决的 community pain point。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-09-08**

---

## 📌 今日速览

今日社区最核心的动态是 **v0.9.13 版本进入发布准备阶段** —— 创始人 Hmbown 合并了 PR #6000 完成版本号、CHANGELOG 与多平台升级，同时通过 PR #5989/5982/5978 等一次性修复了五个 P0/P1 级缺陷（ACP 握手、队列数据丢失、metrics 路径、Fleet 角色、goal-loop 边界）。此外，TUI 性能与可用性问题持续涌现：模型选择器卡顿、插件页 MCP 重新认证导致 UI 冻结、token/s 指标异常等成为高优先级反馈焦点。

---

## 🚀 版本发布

**暂无新版本发布**，但 v0.9.13 准备 PR（#6000）已在主分支合并，等待正式 tag。  
本次版本主要修复了：
- 离线输入队列并发数据丢失（P0）
- ACP `initialize` 协议不符导致 JetBrains 等严格客户端连接失败
- 工具调用参数被截断后仍被静默执行（文件覆盖风险）
- 粘贴多行文本被拆成多条消息提交（v9.12 回归）
- `allow_insecure_http` 配置键在 v0.9.12 中失效

🔗 [PR #6000](https://github.com/Hmbown/Codewhale/pull/6000)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 |
|---|---|---|
| 1 | **[#5986]** 工具调用被截断后被静默修复为合法 JSON 并执行 | 🔴 **安全级缺陷**：模型在 `write` 工具参数生成中被截断时，会用启发式补全为合法 JSON 并实际写入文件，用户文件可能被覆盖。已被 #5983 修复。|
| 2 | **[#5969]** ACP `initialize` 响应违反 schema，JetBrains 客户端无法连接 | 🔴 **互操作性**：导致 JetBrains IDEA 等严格 ACP 客户端握手失败。已通过 PR #5978 修复（把 `list: true` 改为对象、把 `load` 提升为顶层能力）。|
| 3 | **[#5975]** 模型选择器严重卡顿 + 鼠标不工作 | 🟠 **性能/可用性**：在真实目录上移动选择与键入明显迟滞；需按列排序；鼠标点击无响应。这是创始人亲身反馈、影响日常使用的核心问题。|
| 4 | **[#5974]** 扩展页 MCP 重新认证冻结整个 TUI | 🟠 **可用性**：点击 re-auth 后 UI 锁死，Diagnose 按钮无响应。|
| 5 | **[#5977]** 会话指标的 tok/s 数值"看起来不对" | 🟡 **指标可信度**：分母与 token 来源需要审计，`session_metrics.rs:137` 的 `rate_output_tokens / rate_stream_time` 公式疑似有误。|
| 6 | **[#5981]** 多行粘贴被拆成多条消息提交（v9.12 回归） | 🟡 **输入体验**：Y-7 修复引入的回归，`9a1445fbd` 提交中 `!use_bracketed_paste` 条件错误禁用了粘贴突发检测。已通过 PR #5993 修复。|
| 7 | **[#6004]** Hooks 看不到会话状态事件（idle / fatal-error / waiting-for-user） | 🟡 **可扩展性**：现有 11 个 hook 事件缺少会话级状态变更，限制了自动化工作流。|
| 8 | **[#5991]** `allow_insecure_http` 配置键在 0.9.12 被静默移除 | 🟡 **配置破坏**：内网 / LAN 提供商（如 llama.cpp）用户必须改用环境变量；已通过 PR #5995 修复。|
| 9 | **[#5860]** 从对话中持续自学习（技能自动演化） | 🟢 **长期能力**：提议让 agent 自动从重复任务中抽取模式并生成 / 更新 `SKILL.md`，让静态技能库变成动态知识库。|
| 10 | **[#5316]** CodeWhale TUI Crate 分解 EPIC-005 | 🟢 **架构演进**：EpicStyle 跟踪 issue，记录 TUI crate 拆解为多个子 crate 的完整结构与 PR 进度。评论数 22，是本月最活跃的架构讨论。|

🔗 [Issue #5986](https://github.com/Hmbown/Codewhale/issues/5986) · [#5969](https://github.com/Hmbown/Codewhale/issues/5969) · [#5975](https://github.com/Hmbown/Codewhale/issues/5975) · [#5974](https://github.com/Hmbown/Codewhale/issues/5974) · [#5977](https://github.com/Hmbown/Codewhale/issues/5977) · [#5981](https://github.com/Hmbown/Codewhale/issues/5981) · [#6004](https://github.com/Hmbown/Codewhale/issues/6004) · [#5991](https://github.com/Hmbown/Codewhale/issues/5991) · [#5860](https://github.com/Hmbown/Codewhale/issues/5860) · [#5316](https://github.com/Hmbown/Codewhale/issues/5316)

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 说明 |
|---|---|---|
| [#5989] | **一次性修复五个记录缺陷** | 关闭 #5969。包含：离线队列并发数据丢失（P0）、ACP schema、metrics 路径、Fleet 角色、goal-loop 边界。每个缺陷独立修复后做对抗性审计合并验证。|
| [#5983] | **禁止派发参数被截断的工具调用** | 关闭 #5986。`arg_repair::repair` 不再静默成功：截断的工具调用必须被拒绝并要求模型重发，彻底杜绝部分 JSON 被写入文件的隐患。|
| [#5978] | **修复 ACP session list 能力声明** | 关闭 #5969。把 `list: true` 改为空对象（schema 要求 `SessionListCapabilities`），把 `load` 提升为顶层 `loadSession` 能力。|
| [#5993] | **重新武装粘贴突发启发式** | 关闭 #5981。修复 `!use_bracketed_paste` 误禁逻辑——终端即便应答 `EnableBracketedPaste` 仍可能逐键投递粘贴事件。|
| [#5995] | **恢复每个 provider 的 `allow_insecure_http`** | 关闭 #5991。v0.9.12 退化为只读全局环境变量，本次重新支持 `[providers.<name>]` 下的细粒度配置。|
| [#5987] | **VSCode 扩展 send 路径修复 + 安全加固** | 关闭 #5834。`startTurn` 之前只接受 HTTP 200/202，但 Runtime `start_thread_turn` 唯一成功码是 `201 Created`；扩展从未成功发起过 turn。本次一并修补了过程中的安全漏洞。|
| [#5998] | **Computer-Use 插件升级到 0.2.0** | 内置 macOS 原生 a11y 后端、桌面应用 socket 传输、ssh + HarmonyOS HDC 远程执行；是 0.9.13 的发布项之一。|
| [#5972] | **运行时存储失败变为可见通知** | 关闭 #5931。把 `load_thread`/`load_thread_or_init` 的失败从日志升级为 TUI 内可见的状态条，避免 session id 分歧与审批回执损坏被静默吞掉。|
| [#5996] | **文档补充 R1 turn budgets 与 `[goal]` 示例** | 把 `[tui].max_model_steps` 与 `turn_wall_clock_secs` 从示例注释迁入 `CONFIGURATION.md` 关键参考表；为 `[goal]` 增加示例块。|
| [#6002] | **集成 0.9.13 PR 并延后 ShannonNet 执行** | 主集成 PR，把 #5982（密钥屏蔽可选 opt-out）、#5973（底部 chrome 预设）、#5996（配置文档）、#5990（snapshot-prune fixture）合并到 0.9.13 发布准备分支，并解决冲突。|

🔗 [PR #5989](https://github.com/Hmbown/Codewhale/pull/5989) · [#5983](https://github.com/Hmbown/Codewhale/pull/5983) · [#5978](https://github.com/Hmbown/Codewhale/pull/5978) · [#5993](https://github.com/Hmbown/Codewhale/pull/5993) · [#5995](https://github.com/Hmbown/Codewhale/pull/5995) · [#5987](https://github.com/Hmbown/Codewhale/pull/5987) · [#5998](https://github.com/Hmbown/Codewhale/pull/5998) · [#5972](https://github.com/Hmbown/Codewhale/pull/5972) · [#5996](https://github.com/Hmbown/Codewhale/pull/5996) · [#6002](https://github.com/Hmbown/Codewhale/pull/6002)

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue / PR | 关注度 |
|---|---|---|
| **IDE / 编辑器集成** | #5834 → #5987（VSCode Runtime API 升级）| ⭐⭐⭐⭐ |
| **配置灵活化** | #5950 / #6003 / #6001（底部 chrome 可配置、超时可调、resume hint 含 session id）| ⭐⭐⭐⭐ |
| **多供应商路由 & OpenRouter** | #5848（Ollama live catalog）、#6007（OpenRouter vendor 选择）| ⭐⭐⭐ |
| **Computer-Use 插件** | #5856 / #5998 / #5997（macOS a11y、远程传输、embed 反漂移）| ⭐⭐⭐ |
| **记忆 / 上下文管理** | #5860（自动技能演化）、#6008（/purge 增加 offload/swap 语义）| ⭐⭐⭐ |
| **TUI 可用性 / 性能** | #5975（picker 卡顿）、#6006（↑ 调用斜杠命令）、#6004（session-state hook）| ⭐⭐⭐⭐ |
| **Fleet / 多 agent** | #5946（worker 交付物可见性）、#5989（fleet 角色）| ⭐⭐⭐ |
| **中文文档本地化** | #5482（EPIC(docs)）| ⭐⭐ |

---

## 👨‍💻 开发者关注点（社区反馈高频痛点）

1. **TUI 性能与稳定性是首要痛点**  
   模型选择器卡顿、扩展页 MCP 重认证冻结整屏、粘贴/并发场景下会话身份分歧（`#5975`、`#5974`、`#5931`、`#5999`）——这四个问题都由创始人本人触发报告，说明桌面端日常使用体验仍有显著缺口。

2. **"静默修复"被视为反模式**  
   无论是工具参数截断后被补全（#5986）、还是 runtime store 失败仅写日志（#5931），社区和创始人都强烈要求把这类"默默成功"变成显式失败 / 可见通知。这一原则也体现在 PR #5972 与 #5983 中。

3. **配置向后兼容被高度重视**  
   v0.9.12 静默移除 `allow_insecure_http`、引入新底部 chrome 让 `/statusline` 失效（#5950、#5991），引发用户反弹。后续 PR #5995、#5973 选择恢复旧键 + 新增预设两条腿走路。

4. **CI / 测试基础设施成为瓶颈**  
   `windows-latest` 上的 mcp_boot 增量启动测试在 10s node-fixture 截止时间上抖动（#5980）；PTY 启动断言在 Buildkite/Linux 上偶发失败（#5979）；两例都通过更智能的"等就绪"或"按记录时间戳推导截止"修复（#5990、#5979）。

5. **外部贡献者体验**  
   @goransh-walia 的 PR #5870 因 contribution gate 白名单缺失导致所有 CI run 卡在 `action_required`，被误判为停滞（#5985）——这暴露出维护者对外部 PR 的"信号噪声比"仍需优化。

6. **协议/标准合规成为发布门槛**  
   ACP schema 不符让 JetBrains 客户端全军覆没（#5969），团队已把"协议 strict 客户端握手通过"作为后续发布验收项。

---

*日报基于 2026-09-07 至 2026-09-08 的 GitHub 数据自动生成。所有链接均指向 `Hmbown/Codewhale` 仓库（项目前身 `DeepSeek-TUI`，已在 PR #5984 中修正版权归属）。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*