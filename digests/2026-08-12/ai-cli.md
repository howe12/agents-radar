# AI CLI 工具社区动态日报 2026-08-12

> 生成时间: 2026-08-12 01:20 UTC | 覆盖工具: 9 个

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
**报告日期：2026-08-12 · 覆盖工具：9 款主流 AI CLI**

---

## 1. 生态全景

当前 AI CLI 工具已从"单兵作战的代码补全"演进为"多 Agent 协作的工程化平台"，呈现**三梯队分化**：

- **第一梯队（成熟 + 高强度迭代）**：Claude Code、Codex、Qwen Code 单日发布节奏稳定（GA / Preview / Nightly 三通道并行），围绕 MCP、ACP、Subagent 等核心抽象展开协议级竞争；
- **第二梯队（活跃但治理优先）**：Gemini CLI、Copilot CLI、OpenCode 处于"修 Bug + 跨版本回归管理"阶段，平台兼容性与多 Agent 协调是焦点；
- **第三梯队（聚焦长尾诉求）**：Kimi CLI、Pi、DeepSeek TUI 围绕记忆系统、TUI 细节、ACP 工具下沉等单点深耕。

整体节奏表明：**Subagent 编排、跨会话记忆、Windows 兼容、计费透明度** 已成为 2026 年下半年最普适的工程化诉求。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 关键更新 Issues | 重要 PR | 单日合并/合入节奏 | 社区热度信号 |
|------|------------|---------------|--------|------------------|------------|
| **Claude Code** | v2.1.228 | 10（Top 10）| 7 | 中等（修 1 + 文档 6）| 消息队列 191 👍 |
| **OpenAI Codex** | rust-v0.148.0-alpha.7/8 | 50 | 20+ | **极高**（20+ 单日合并） | Linux 桌面 950 👍（已 CLOSED）|
| **Gemini CLI** | nightly + preview.1 + 0.55.1 | 10 | 10 | 高（含 2 个 CRITICAL CVE 修复）| Subagent MAX_TURNS P1 |
| **GitHub Copilot CLI** | 无 | **41** | 2 | **Issue 爆量 / PR 极少** | Windows 插件 Access Denied (👍14) |
| **Kimi CLI** | 无 | 5 | 8 | 低（多为历史 PR 集中 CLOSE）| 记忆系统 34 评论（历史最高）|
| **OpenCode** | 无 | 10 | 10+ | 高（kitlangton 单日 10+）| Plan Usage API 137 👍 |
| **Pi** | 无（最新 0.84.1）| 10 | 10 | 中等 | Mac CPU 100% (👍8) |
| **Qwen Code** | **v0.21.10 + preview.0 + nightly + live-host** | 10 | 10+ | **极高**（4 通道并行）| tmux 闪屏 3 独立报告 |
| **DeepSeek TUI** | 无 | 2 | 6 | 低（仅 2 Issue）| ACP 工具暴露已合并 |

**关键观察**：Copilot CLI 出现 "Issue 41 vs PR 2" 的严重失衡；Codex 与 Qwen Code 是当日开发密度最高的两个项目。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 核心诉求 |
|---------|---------|---------|
| **🧠 Subagent / 多 Agent 编排** | Claude Code、Codex、Gemini、OpenCode、Qwen Code、DeepSeek TUI | 跨会话协调（Claude #76727）、子代理状态语义（Gemini #22323）、Plan Mode 失效（OpenCode #40474）、工具真实落地（DeepSeek #5225）、并行 token 浪费（Claude #67636）|
| **📨 跨会话记忆 / 持久化上下文** | Kimi（#1283 / 34 评论）、Claude Code、OpenCode、Qwen Code | Kimi 呼声最高但功能空缺；Claude 急需"消息队列 + 跨会话协调"原语；OpenCode 已落地会话标签系统 |
| **🪟 Windows / WSL 平台稳定性** | Claude Code、Codex、Copilot CLI、Kimi、Pi | Claude ugrep→V8 OOM（#54394）、Copilot Access Denied（#4095/4151）、Codex 内存 8.8GB（#38059）、Kimi PWD 解析（#2600）|
| **🔌 MCP 生态深化** | Claude Code、Codex、Copilot CLI | 多账号支持（Claude #36024）、OAuth CIMD（Codex #38089）、BigInt 序列化（Copilot #4211）|
| **💰 计费透明度** | Claude Code、OpenCode、Copilot CLI | Claude 7/17 $604 事件、OpenCode OpenRouter 隐性调用（#10272）、Copilot 静默委派 Opus（#4377）|
| **🎨 TUI / 终端体验打磨** | 几乎全部 | tmux/iTerm 闪屏（Qwen 3 条）、剪贴板 OSC 52（Pi #7972）、宽屏截断（DeepSeek #5322）、权限弹窗误触（Claude #71539）|
| **🛡 供应链安全** | Gemini（2 CRITICAL CVE）、Copilot CLI（adm-zip High）| 主动升级依赖 + 社区审计已成标准动作 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | Hook/MCP 生态、企业级 Agent 编排 | 重度专业开发者、企业团队 | 协议开放、配置驱动（CLAUDE.md / .claude/）、强文档治理 |
| **OpenAI Codex** | gRPC code-mode、world-state 性能 | 高频自动化用户、平台集成方 | 状态化会话、多通道 Provider 兼容、激进合并节奏 |
| **Gemini CLI** | Subagent 透明度、评估基建（76 个行为评估）| 研究型用户、平台依赖 Google Cloud 的团队 | AST 感知、组件级 eval、零依赖 OS 沙箱愿景 |
| **Copilot CLI** | GitHub 生态、模型多选 | GitHub 重度用户、企业 | Skills/Agents 机制完善中、Windows 用户长期被忽视 |
| **Kimi CLI** | 中文场景、本地化 | 中文母语开发者 | 强调 reasoning effort 可控、记忆系统尚待补齐 |
| **OpenCode** | 多客户端架构、TUI/Desktop/CLI 三端 | 高级用户、多 workspace 团队 | V2 迁移期、Plan/Subagent 模式、Experiments 灰度 |
| **Pi** | 小模型适配、TUI 极致体验 | 终端工具控、本地模型用户 | 流式协议鲁棒性、跨终端（tmux/Kitty/iTerm）兼容 |
| **Qwen Code** | ACP 协议、守护进程、Web Shell | 企业部署、远程协作团队 | `qwen serve` 多 workspace 路由、推理强度 5 档 |
| **DeepSeek TUI** | 轻量 IDE 替代、ACP 工具下沉 | 编辑器集成方（Zed 等）| Crate 模块化、第三方模型网关（OrcaRouter）接入 |

---

## 5. 社区热度与成熟度

### 🔥 社区热度排行（综合 👍、评论数、Issue 量）
1. **OpenAI Codex** — Linux 桌面 950 👍，单日 20+ PR 合并，最具规模化势能
2. **Claude Code** — 消息队列 191 👍，hook/agent 体系最深
3. **OpenCode** — Plan Usage API 137 👍，TUI 体验受高级用户追捧
4. **Copilot CLI** — 单日 41 Issues 更新，社区活跃但响应滞后
5. **Gemini CLI** — P1 Subagent 系列 + 2 个 CRITICAL CVE 同步治理
6. **Qwen Code** — 4 通道并行发布，tmux 闪屏话题集中爆发
7. **Kimi CLI** — 5 Issues 但记忆系统诉求历史最热（34 评论）
8. **Pi** — 稳定小步快跑，Mac/WSL 体验细节受关注
9. **DeepSeek TUI** — 2 Issues，专注架构治理（EPIC-005 Crate 拆分）

### 📊 成熟度评估
- **已收敛 / 平台化**：Claude Code、Codex（已形成协议/治理闭环）
- **快速迭代期**：Qwen Code（4 通道发布）、OpenCode（V2 迁移期）
- **稳健补漏期**：Gemini CLI、Copilot CLI、Pi
- **长尾深耕期**：Kimi CLI、DeepSeek TUI

---

## 6. 值得关注的趋势信号

### 📡 信号 1：**Subagent 编排进入"工程化深水区"**
- Claude Code 暴露"跨会话协调无第一方原语"
- Gemini CLI 出现"MAX_TURNS 误报 success"的语义级 Bug
- OpenCode Plan Mode 失效暴露"agent 切换对模型不可见"
- **对开发者的参考**：选型时需评估工具是否提供 Subagent 上下文隔离、状态可观测、失败语义清晰的原语，而不仅是"能派多个 agent"。

### 📡 信号 2：**"持久化记忆"成为下一代 CLI 标配**
- Kimi CLI（#1283）、OpenCode（会话标签）、Claude Code（消息队列）共同指向"会话不再是孤岛"
- 用户已开始自建 `MEMORY.md` 工作流（Kimi #1478），反向证明官方能力的空白
- **对开发者的参考**：大项目协作场景下，工具是否支持跨会话上下文已成为关键选型指标。

### 📡 信号 3：**Windows 平台支持从"加分项"变为"必答题"**
- 单日出现：Claude Code ugrep OOM、Copilot CLI Access Denied、Codex 8.8GB 内存泄漏、Kimi PWD 解析、Pi `settings.json` 反斜杠
- **对开发者的参考**：跨平台项目应建立 Windows CI 门禁；选型时需特别关注 Windows / WSL2 的 issue 历史。

### 📡 信号 4：**MCP 协议已成事实标准，但配套治理未跟上**
- Claude Code、Codex、Copilot CLI 全面接入
- BigInt 序列化、OAuth 兼容性、多账号隔离等"协议层"细节成为高频 bug 源
- **对开发者的参考**：MCP 集成方需关注客户端版本兼容性、Auth Provider 适配；Server 方需严格遵守 schema。

### 📡 信号 5：**计费透明度与"模型路由"成为信任基石**
- Claude Code 7/17 $604 事件、OpenCode OpenRouter 隐性调用、Copilot GPT-5.6→Opus 静默委派
- **对开发者的参考**：生产环境部署前应建立"模型调用白盒"——CLI 是否暴露每条请求的模型、token、计费明细，将直接影响长期成本可控性。

### 📡 信号 6：**ACP 协议正在 Qwen / DeepSeek 体系内崛起**
- Qwen Code v0.21.10 落地 5 档推理强度；DeepSeek TUI #5225 合并 ACP 工具暴露
- 与 MCP 形成"对话层 vs 工具层"分工
- **对开发者的参考**：若项目涉及多 IDE 集成（Zed 等）或需要推理强度细粒度控制，可重点评估 ACP 兼容工具。

### 📡 信号 7：**TUI 体验进入"毫厘必争"阶段**
- Pi 修复 OSC 52 剪贴板"已复制但实际未复制"误导
- Qwen Code tmux 闪屏 3 独立报告
- DeepSeek TUI 宽屏截断回归
- Claude Code 鼠标点击误触权限弹窗
- **对开发者的参考**：终端用户的容忍度持续下降，工具的 TUI 鲁棒性是日常使用质感的核心。

---

## 总结

2026 年 8 月的 AI CLI 生态已进入"**协议竞争 + 平台稳定性 + 体验精修**"的成熟期。对开发者的核心建议：

1. **生产环境选型**：优先关注 Windows 兼容性、Subagent 语义清晰度、计费透明性，而非"功能数量"
2. **跨工具使用**：注意 Copilot CLI 与 Claude Code 的 agent 命名空间冲突（#4437），规则文件需治理
3. **关注协议演进**：MCP 工具兼容性、ACP 推理强度配置正在成为新的差异化能力
4. **警惕版本回归**：Claude Code v2.1.117 ugrep 替换、Copilot CLI v1.0.74 session OOM、Qwen Code 0.21.x VP 模式闪屏——升级前务必阅读 changelog 与近期 issue

> 📅 **数据窗口**：2026-08-12（过去 24 小时）  
> 📝 **分析视角**：MiniMax-M3 技术分析师 · 面向技术决策者与开发者

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：`anthropics/skills` 仓库 · 截至 2026-08-12
> 样本：50 条热门 PR（按评论数排序） + 50 条热门 Issues

---

## 一、热门 Skills 排行（Top 8）

### 1. 🏆 skill-creator 评估引擎修复（PR #1298）
- **核心问题**：`run_eval.py` 对所有 Skill 描述报告 `recall=0%`，导致 `run_loop.py` / `improve_description.py` 优化循环在"噪声"上训练；已收到 10+ 独立复现报告。
- **修复要点**：将 eval artifact 安装为真实 Skill、修复 Windows 流读取、触发检测、并行 worker。
- **社区热度**：是当前 #556、#1169、#1323 等多个 Issue 的共同根因，属于"基础设施级"问题。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #1298](https://github.com/anthropics/skills/pull/1298)

### 2. document-typography（PR #514）
- **功能**：防止 AI 生成文档中的排版缺陷——孤立单词换行、寡妇段落、编号错位。
- **讨论热点**："用户极少主动要求好的排版，但每份 Claude 生成的文档都受影响"，定位为通用质量 Skill。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #514](https://github.com/anthropics/skills/pull/514)

### 3. ODT Skill（PR #486）
- **功能**：OpenDocument 格式（.odt/.ods）的创建、模板填充与 HTML 解析。
- **讨论热点**：补齐开源/ISO 标准文档格式，与 DOCX、PDF Skill 形成完整文档格式矩阵。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #486](https://github.com/anthropics/skills/pull/486)

### 4. self-audit v1.3.0（PR #1367）
- **功能**：交付前的输出审计——先机械校验文件存在性，再按损害严重度顺序进行四维度推理质量门禁。
- **讨论热点**：作者同时在 Issue #1385 提出"推理质量门控管线"提案，与该 PR 互为支撑；定位为通用、与技术栈无关的质量基础设施。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #1367](https://github.com/anthropics/skills/pull/1367)

### 5. skill-quality-analyzer & skill-security-analyzer（PR #83）
- **功能**：元 Skills——从 5 维度评估 Skill 质量（结构 20% + 4 项其他），另提供安全分析。
- **讨论热点**：呼应 Issue #492 中关于社区 Skill 信任边界滥用的问题，被视为"Skills 治理工具集"的开端。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #83](https://github.com/anthropics/skills/pull/83)

### 6. testing-patterns（PR #723）
- **功能**：覆盖完整测试栈——Testing Trophy 模型、AAA 模式、React 组件测试、覆盖率策略、E2E。
- **讨论热点**：是少数进入主流视野的"测试生成/工程实践"类 Skill，与 Issue #556 反映的"Skill 描述优化困难"形成对照（工程 Skill 本身也需要工程方法论）。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #723](https://github.com/anthropics/skills/pull/723)

### 7. frontend-design 清晰度改进（PR #210）
- **功能**：重构 frontend-design Skill 的指令，使其在单次对话内可执行、不依赖外部资源。
- **讨论热点**：典型的"老 Skill 维护性升级"，针对的可执行性问题在 Issue #202（skill-creator 自身冗长）也被批评。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #210](https://github.com/anthropics/skills/pull/210)

### 8. color-expert（PR #1302）
- **功能**：自包含的色彩专业知识——ISCC-NBS/Munsell/XKCD 等命名体系、OKLCH/OKLAB/CAM16 色彩空间选择指南。
- **讨论热点**：在生成式 AI 普遍"配色拙劣"的背景下，定位为可跨任务调用的领域专家 Skill。
- **状态**：OPEN
- 🔗 [anthropics/skills PR #1302](https://github.com/anthropics/skills/pull/1302)

---

## 二、社区需求趋势（从 Issues 提炼）

| 趋势方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| 🔒 **Skills 安全与命名空间治理** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论 · 热度最高） | 社区 Skill 借 `anthropic/` 命名空间冒充官方，破坏信任边界；呼吁明确的命名规则与审核机制 |
| 🤝 **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论 · 8 👍） | 替代"下载→ Slack 传输→ 手动上传"流程；诉求企业内共享库或直链 |
| 🛠 **Skill 生命周期管理** | [#62](https://github.com/anthropics/skills/issues/62)（10 评论）<br>[#1479 PR](https://github.com/anthropics/skills/pull/1479) | Skill 缺乏可见性、归档与清理机制；plan-file-hygiene Skill 直接回应此痛点 |
| 🧠 **元 Skills / 智能体治理** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭但 6 评论）<br>[#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）<br>[#83 PR](https://github.com/anthropics/skills/pull/83) | 社区呼吁 agent-governance、compact-memory、quality/security analyzer 等"管 Skill 的 Skill" |
| 🧪 **质量门控与推理审计** | [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）<br>[#1367 PR](https://github.com/anthropics/skills/pull/1367) | 交付前的三段式质量管线（预校准 → 对抗评审 → 交付验证） |
| 📦 **插件重复与打包** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论 · 9 👍） | `document-skills` 与 `example-skills` 内容重叠，污染上下文窗口 |
| 🔌 **Skills 与 MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论） | 将 Skill 包装为 MCP，统一"AI 软件"的对外协议 |
| ☁️ **跨平台与企业集成** | [#29](https://github.com/anthropics/skills/issues/29)（4 评论 · Bedrock）<br>[#1487](https://github.com/anthropics/skills/issues/1487)（156k token 注入） | Skills 在 AWS Bedrock 等非官方环境的使用、claude-api Skill 的上下文爆炸 |

> **趋势归纳**：社区关注已从"做出更多 Skill"转向"**管好 Skill**"——治理、安全、质量、生命周期成为下一阶段的主战场。

---

## 三、高潜力待合并 Skills

以下 PR 评论活跃、解决了真实痛点、但目前仍为 OPEN，具备近期落地潜力：

| PR | Skill | 落地潜力依据 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估修复 | 阻塞 `run_loop.py`/`improve_description.py` 全链路；与 #556、#1169、#1323 形成修复集群 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 通用、与技术栈无关，作者持续迭代并配套提案 #1385 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality/security analyzer | 直接呼应 #492 安全议题，是治理工具链起点 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 适用面极广，所有文档生成场景受益 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 补齐开源文档格式，与 DOCX/PDF 形成闭环 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 覆盖完整测试金字塔，工程刚需 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 解决 Issue #1417 提出的规划工件生命周期问题 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 领域专家 Skill 的标杆，可被其他 Skill 复用 |

> 同时存在多个**平台兼容性修补**（[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#538](https://github.com/anthropics/skills/pull/538)、[#541](https://github.com/anthropics/skills/pull/541)、[#539](https://github.com/anthropics/skills/pull/539)），共同表明 Skill-creator 在 Windows 与 YAML 边界场景下仍脆弱。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是：建立可信赖的 Skill 治理体系——既包括命名空间/安全防伪（Issue #492），也涵盖 Skill 自身的质量门禁（PR #83/#1367）、生命周期管理（#1479/#62）与跨平台/打包一致性（#189/#1487）；在此基础上，元 Skills（meta-skills）正在取代领域 Skills，成为下一波创新的主赛道。**

---

# Claude Code 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.228**，主要修复了 Windows 下 Git 检测及 TUI 渲染异常等稳定性问题。社区方面，**消息队列模式**（Message Queue Mode）功能请求以 191 个 👍 持续领跑增强类诉求；同时多个高优 Bug 被持续跟进——WSL2 下 `ugrep` 包装导致的 V8 OOM、Windows 控制台闪烁、Desktop 应用会话筛选器回归等。计费争议（#81703）也再次浮出水面，涉及 7 月 17 日大规模错误扣费事件。

---

## 🚀 版本发布

### v2.1.228（最新发布）

本次更新聚焦在**交互稳定性与 Windows 兼容性**：

- ✅ **修复交互会话渲染挂起**：罕见的内部布局错误可能导致进程仍在运行但 TUI 完全停止重绘
- ✅ **修复 Windows 下 Git/Git Bash 路径检测**：当 Claude Code 从 Git 安装目录的父文件夹启动时，无法找到 `git`
- ✅ **修复 `/tui` 回滚问题**（描述截断）

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.228

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#50246](https://github.com/anthropics/claude-code/issues/50246) — 消息队列模式（Feature Request）
- **标签**：`enhancement`, `area:tui`
- **反应**：💬 53 | 👍 **191**
- **为何重要**：当前 Claude 正在执行任务时，用户若想追加新指令只能选择打断任务——这极易破坏当前工作流。该提议希望在"打断"之外增加**消息队列模式**，允许将后续指令排队等待任务完成。这是本期最受欢迎的增强类请求，几乎是压倒性呼声。

### 2. [#14828](https://github.com/anthropics/claude-code/issues/14828) — Windows 控制台闪烁（Bug）
- **标签**：`bug`, `has repro`, `platform:windows`, `area:tools`
- **反应**：💬 60 | 👍 36
- **为何重要**：执行工具时终端窗口持续闪烁，是长期未解决的 Windows 端痛点。评论数最高，影响 Windows 平台所有用户的日常使用体验。

### 3. [#54394](https://github.com/anthropics/claude-code/issues/54394) — WSL2 下 ugrep 包装导致 V8 堆 OOM（严重 Bug）
- **标签**：`bug`, `has repro`, `perf:memory`, `area:bash`, `platform:wsl`
- **反应**：💬 27 | 👍 4
- **为何重要**：v2.1.117 将 `Grep` 替换为内嵌 `ugrep`，但在 WSL2 上每条 `grep` 都会通过 `claude.exe` 重新执行，正则回溯从 grep-OOM 放大为 **8 GB V8 堆 OOM**，导致主机冻结。属于高严重度的性能回归。

### 4. [#36024](https://github.com/anthropics/claude-code/issues/36024) — MCP 集成支持多个 Gmail 账号（Feature Request）
- **标签**：`enhancement`, `area:mcp`
- **反应**：💬 25 | 👍 77
- **为何重要**：许多用户同时拥有个人 + 工作 Gmail 账号，当前 MCP 仅支持单一账号，限制了实际生产力场景。

### 5. [#76727](https://github.com/anthropics/claude-code/issues/76727) — 跨会话协调机制（Feature Request）
- **标签**：`enhancement`, `area:hooks`, `area:agents`
- **反应**：💬 14 | 👍 0
- **为何重要**：重度用户在同一个仓库中同时启动多个 Claude Code 会话时，**缺乏第一方协调机制**——只能靠 `PreToolUse deny` 钩子自建，且存在静默漏洞。社区亟需官方原语支持。

### 6. [#81703](https://github.com/anthropics/claude-code/issues/81703) — 7 月 17 日大规模计费事件（争议 Bug）
- **标签**：`bug`
- **反应**：💬 12
- **为何重要**：Anthropic 已承认 7 月 17 日事件，但用户报告当日仍有 $604.71 的自动充值被错误收取且未对账。涉及订阅信用与付费信用的路由错误，财务影响显著。

### 7. [#84841](https://github.com/anthropics/claude-code/issues/84841) — MSIX 写入重定向被误判为攻击 ✅ 已关闭
- **标签**：`bug`, `has repro`, `platform:windows`
- **反应**：💬 6 | 👍 2
- **为何重要**：Windows 下 Cowork VM SDK 安装因 MSIX 写入重定向被错误标记为 junction-planting 攻击，导致每次更新都失败。已被关闭，**说明该问题已在修复通道**。

### 8. [#78775](https://github.com/anthropics/claude-code/issues/78775) — Desktop 应用会话时间筛选器回归（Bug）
- **标签**：`bug`, `platform:windows,macos`, `regression`, `area:ui`, `area:desktop`
- **反应**：💬 8 | 👍 28
- **为何重要**：Desktop 端的会话时间范围筛选器仅在"按 State 分组"时显示，是影响桌面用户核心筛选功能的回归。

### 9. [#71539](https://github.com/anthropics/claude-code/issues/71539) — 鼠标点击触发意外权限弹窗（Bug）
- **标签**：`bug`, `platform:linux`, `area:tui`, `area:permissions`
- **反应**：💬 10 | 👍 22
- **为何重要**：Linux TUI 下，鼠标点击终端以重新聚焦时会**误触发权限确认弹窗**——对依赖鼠标操作的重度用户极具干扰性。

### 10. [#67636](https://github.com/anthropics/claude-code/issues/67636) — 并行 Agent 派发消耗过量 Token（Bug）
- **标签**：`bug`, `platform:linux`, `area:cost`, `area:model`, `area:agents`
- **反应**：💬 6
- **为何重要**：单次会话中 Claude 派发了 10 个 agent，先做大量读操作再崩溃/触限，**数百万 token 被浪费**。属于 Agent 编排成本控制问题。

---

## 🔨 重要 PR 进展（Top 7）

### 1. [#85716](https://github.com/anthropics/claude-code/pull/85716) — 修复 hookify 跨祖先目录加载规则（安全修复）
- **作者**：alifakbxr
- **亮点**：修复 hookify 插件的**静默绕过漏洞**——之前从 `.claude` 子目录运行时，无法加载祖先目录中的安全规则。该 PR 通过修改 `config_loader.py` 实现沿目录树向上加载规则，**封堵安全盲点**。

### 2. [#85834](https://github.com/anthropics/claude-code/pull/85834) — 修复 HackerOne Bug Bounty 访问问题
- **作者**：JoTalbot
- **亮点**：调整 `devcontainer.json` 以确保 hookify 插件正确安装，从而打通 HackerOne 漏洞赏金计划的提交通道。

### 3. [#85925](https://github.com/anthropics/claude-code/pull/85925) — 文档过期链接清理（第二批）
- **作者**：AliAltivate
- **亮点**：将残留的 `docs.claude.com` 链接替换为规范的 `code.claude.com` 目标，覆盖 plugins、plugin skills/agents/commands 等模块。

### 4. [#85822](https://github.com/anthropics/claude-code/pull/85822) — 文档链接与 README 漂移修复
- **作者**：AliAltivate
- **亮点**：修正 hooks 示例、plugins README 中的文档链接漂移问题，所有改动均经活链接验证。

### 5. [#85806](https://github.com/anthropics/claude-code/pull/85806) — 安全指引跳过文档中的 XSS 误报
- **作者**：yxlphobe-pixel
- **亮点**：复用 `_DOC_EXTS` 路径过滤器，让四条 XSS 子串规则在文档/散文上下文中不再触发，保留对可执行源文件的检测，并补充回归测试。

### 6. [#85243](https://github.com/anthropics/claude-code/pull/85243) — 修正 plugin-dev 与 hookify skills 的命名规范
- **作者**：bechor25
- **亮点**：8 个内嵌 skill 的 `name` 字段使用了含空格的 Title-Case，违反规范——批量修正为符合规范的命名。

### 7. [#70173](https://github.com/anthropics/claude-code/pull/70173) — `/clean_gone` 修复 `[gone]` 分支检测 ✅ 已合并
- **作者**：AndrewDongminYoo
- **亮点**：根因分析清晰——`git branch -v` 在终端宽度不够时会折叠 `[gone]` 标记，导致 grep 失效。改用 `git branch -vv` 解决长期存在的 `/clean_gone` 失效问题。

---

## 📈 功能需求趋势

从本期活跃 Issues 提炼出社区最关注的方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **🤖 Agent 编排与并行控制** | #76727 跨会话协调、#67636 并行 agent 浪费、#85949 team-lead 孤儿邮箱 | 🔥🔥🔥 |
| **📨 多账户/多会话支持** | #36024 多 Gmail 账号、#76727 跨会话协调 | 🔥🔥 |
| **⚡ TUI/UX 体验优化** | #50246 消息队列（👍191）、#61675 `/goal` 长提示折叠、#71539 鼠标聚焦 | 🔥🔥🔥 |
| **🪟 Windows 兼容与稳定性** | #14828 控制台闪烁、#84841 MSIX 误判（已关）、#78775 Desktop 回归 | 🔥🔥🔥 |
| **💰 计费透明度** | #81703（$604）、#83062（$995） | 🔥🔥 |
| **🔌 MCP 生态扩展** | #36024 多 Gmail、其它 MCP 增强 | 🔥 |

**核心洞察**：本期社区诉求集中在 **Agent 编排的工程化能力**（跨会话、消息队列、成本控制）以及 **平台兼容性回归**（Windows / WSL / Desktop），这两类问题已对生产环境用户造成实际损失。

---

## 🛠️ 开发者关注点

总结开发者反馈的高频痛点：

1. **🔧 Agent 行为的可控性**
   - 工具"声称已审阅"却未实际读取（#72061）
   - 项目指令被读取后忽略（#85677）
   - 并行 agent 派发浪费 token（#67636）
   - 消息队列缺失迫使频繁打断（#50246）

2. **🪟 Windows / WSL 平台 Bug 集中爆发**
   - 控制台闪烁（#14828）
   - `ugrep` 导致 V8 OOM（#54394）
   - MSIX 误判（#84841 已修复）
   - Desktop 端筛选器回归（#78775）

3. **💸 计费与信任危机**
   - 7 月 17 日事件后续争议（#81703、$604.71）
   - 8 月 1 日新增事件（#83062、$995.67）
   - 订阅额度与付费信用的路由逻辑需要更透明

4. **🔐 安全的"静默失败"**
   - hookify 加载祖先目录规则（#85716 已修复）
   - team-lead 消息返回 `success:true` 但实际丢弃（#85949）
   - CVP 误报阻断正常使用（#85222）

5. **📚 文档与生态一致性**
   - 多 PR 在清理 `docs.claude.com → code.claude.com` 链接漂移
   - 内嵌 skill 命名规范违规（#85243）
   - 安全规则在文档上下文的误报（#85806）

---

> 📅 **数据来源**：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 统计窗口：过去 24 小时
> 📝 **日报生成**：MiniMax-M3 · 技术分析师视角

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-12**

---

## 1. 今日速览

今天 Codex 项目主线持续高频迭代，单日合并了超过 20 个 PR，主要聚焦于 Windows 沙盒修复、MCP（Model Context Protocol）OAuth 与审批模型升级、gRPC code-mode 会话治理以及世界状态（world-state）的性能优化。与此同时，`rust-v0.148.0-alpha.7/8` 两个 alpha 版本接连发布，意味着 0.148.0 进入发布前最后冲刺。社区诉求方面，**Linux 桌面客户端**依旧以 950 👍 稳居需求榜首，Windows 端稳定性与多 agent/子代理状态管理仍是高频痛点。

---

## 2. 版本发布

| 版本 | 链接 | 说明 |
|---|---|---|
| rust-v0.148.0-alpha.7 | [#release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.7) | 0.148.0 第 7 个 alpha，继续面向桌/CLI/应用服务器整合 gRPC code-mode 路径 |
| rust-v0.148.0-alpha.8 | [#release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.8) | 第 8 个 alpha，距离 GA 仅有一步之遥，未公布详细 changelog，建议关注 Nightly 构建说明 |

> 提示：两次 alpha 之间通常会带入今天的批量 PR（Windows sandbox、MCP OAuth、沙盒可执行目录等），建议升级前核对对应 PR 是否覆盖你使用的功能。

---

## 3. 社区热点 Issues

1. **[#11023] Codex desktop app for Linux** — 207 评论 / 950 👍 [🔗链接](https://github.com/openai/codex/issues/11023)
   *为什么重要*：以 👍 计算是仓库最具人气的诉求。Issue 已被关闭，意味着官方很快会有正式表态或路线图更新，建议密切跟进后续 release notes。

2. **[#11023 联动 #37403] macOS 桌面无法恢复 Remote Control / CLI 会话：`already has an active writer`** — 9 评论 [🔗链接](https://github.com/openai/codex/issues/37403)
   *为什么重要*：发生于 8 月 7 日的桌面端更新，是典型回归 bug，对移动端远程协作场景影响显著。

3. **[#20880] Codex 桌面每次启动静默创建空 `~/Documents/Codex` 目录** — 22 评论 [🔗链接](https://github.com/openai/codex/issues/20880)
   *为什么重要*：长期未修，存在一年以上，反映桌面端文件系统副作用仍有遗漏。

4. **[#23930] 子代理卡片关闭后仍可见/卡死** — 16 评论 [🔗链接](https://github.com/openai/codex/issues/23930)
   *为什么重要*：暴露 UI 状态与底层 agent 句柄读写不同步，关系到 multi-agent 工作流的可靠性。

5. **[#19143] 在 Codex CLI 中直接粘贴图片** — 11 评论 [🔗链接](https://github.com/openai/codex/issues/19143)
   *为什么重要*：前端调试、扩展开发等场景的强需求，涉及 TUI 层的剪贴板协议，已搁置数月。

6. **[#31376] `codex exec` 在死连接上无限挂起，缺少 SSE 读超时与重试** — 8 评论 [🔗链接](https://github.com/openai/codex/issues/31376)
   *为什么重要*：自动化流水线核心 API 的可靠性问题，跨 Windows/Linux，影响非交互式用户。

7. **[#6150] 在 Ubuntu 24.04 RISC-V (riscv64) 上支持 Codex** — 9 评论 [🔗链接](https://github.com/openai/codex/issues/6150)
   *为什么重要*：架构中立性象征，社区希望官方能补齐 RISC-V 预编译。

8. **[#24648] `thread/list` 将缺失 `modelProviders` 字段解读为当前 provider 过滤** — 7 评论 [🔗链接](https://github.com/openai/codex/issues/24648)
   *为什么重要*：第三方集成（app-server 嵌入方）API 兼容性 bug，破坏"全 provider"语义。

9. **[#36115] 文件编辑权限弹窗中「Allow once」按钮无响应** — 5 评论 [🔗链接](https://github.com/openai/codex/issues/36115)
   *为什么重要*：普通用户的"不可用"体验，是 26.721 系列桌面端的明显回归。

10. **[#38059] Windows 桌面端空载时内存涨至 8.8 GB，发几条消息后 UI 卡死** — 3 评论 [🔗链接](https://github.com/openai/codex/issues/38059)
    *为什么重要*：刚出现的桌面端严重性能/内存泄漏，平台为 Windows 11 + Ryzen，AMD 集显栈，建议关注官方补丁节奏。

> 其它值得关注： [#37421](https://github.com/openai/codex/issues/37421)（0.147.0 Esc-Esc backtrack 回归，已关闭）、[#36307](https://github.com/openai/codex/issues/36307)（用量限额跳变，引起 Plus 用户广泛不满）、[#35470](https://github.com/openai/codex/issues/35470)（Windows 上 Codex 复制同一图像 15 万次占满 400 GiB，令人咋舌的资源滥用 bug）。

---

## 4. 重要 PR 进展

> 今天 PR 数量多、范围广，多数 PR 由自动化 copyberry 机器人提交并在合并后立即关闭，因此合并到 `main` 后通常以"已合并已关闭"状态出现。

1. **[#38092] Simplify queued user message admission** — 取消 rollout 持久化与 hook 依赖，简化入队逻辑 [🔗链接](https://github.com/openai/codex/pull/38092)
2. **[#38094] Test Guardian context for code mode commands** — 为 Guardian 增加 outer code mode `exec` 源覆盖 [🔗链接](https://github.com/openai/codex/pull/38094)
3. **[#38089] MCP OAuth 注册引入 CIMD（Client ID Metadata Document）支持** — 在支持公钥客户端的授权服务器上优先 CIMD，回落到 Dynamic Client Registration [🔗链接](https://github.com/openai/codex/pull/38089)
4. **[#38081] `ReviewDecision` 统一 MCP 工具审批** — 引入 `ApprovedMcpPolicyAmendment`，将 MCP 审批复用到通用 `ReviewDecision` 类型 [🔗链接](https://github.com/openai/codex/pull/38081)
5. **[#38087] gRPC code-mode 会话走共享 HTTP 客户端** — 对接代理与自定义 CA 配置 [🔗链接](https://github.com/openai/codex/pull/38087)
6. **[#38086] 在解析 cloud config 时支持 execution-host context** — `AbsolutePathBufGuard::with_home_directory` 显式 home 解析 [🔗链接](https://github.com/openai/codex/pull/38086)
7. **[#38080] Windows sandbox 允许嵌套 Git 仓库** — 解决以 sandbox 用户运行时嵌套 repo 的 git 信任问题 [🔗链接](https://github.com/openai/codex/pull/38080)
8. **[#38078] 削减 world-state 合并时的克隆开销** — 原地构建/应用 patch，显著降低序列化往返 [🔗链接](https://github.com/openai/codex/pull/38078)
9. **[#38075] TUI 历史渲染按终端宽度自适应** — 修正 ambient-pet 预留与 diff-summary 文本截断行为 [🔗链接](https://github.com/openai/codex/pull/38075)
10. **[#38060] 关闭 Azure Responses 请求的 `store`** — 全量设置为 `store:false`，同步统一 Responses 请求构造 [🔗链接](https://github.com/openai/codex/pull/38060)

> 其它亮点 PR： [#38074](https://github.com/openai/codex/pull/38074)（追踪隐式 executor skill 调用）、[#38072](https://github.com/openai/codex/pull/38072)（gRPC code-mode 回调转发到会话代理）、[#38067](https://github.com/openai/codex/pull/38067)（将环境就绪配置 scope 到 thread attachment，避免串扰）、[#38058](https://github.com/openai/codex/pull/38058)（压缩历史中保留 harness 元数据）。模型侧 [#31817](https://github.com/openai/codex/pull/31817) `Update models.json` 为例行自动化，新模型可能即将落地。

---

## 5. 功能需求趋势

从今日 50 条 issue 提炼出主要诉求方向：

| 方向 | 代表 issue | 现状信号 |
|---|---|---|
| **Linux 桌面客户端** | [#11023](https://github.com/openai/codex/issues/11023) | 历史最热需求，已关闭，需官方 roadmap 跟进 |
| **多模态 / 图像工作流** | [#19143](https://github.com/openai/codex/issues/19143) | TUI 剪贴板需补齐，桌面/CLI 体验一致性 |
| **多 agent / Subagent 治理** | [#23930](https://github.com/openai/codex/issues/23930)、[#37858](https://github.com/openai/codex/issues/37858) | 状态、生命周期、自定义 provider 多 agent 兼容性都还在打磨 |
| **Windows 平台稳定性** | [#38059](https://github.com/openai/codex/issues/38059)、[#35470](https://github.com/openai/codex/issues/35470)、[#34549](https://github.com/openai/codex/issues/34549)、[#32525](https://github.com/openai/codex/issues/32525) | 沙盒 ACL、apply_patch 卡顿、内存泄漏集中爆发 |
| **MCP 生态深化** | [#37567](https://github.com/openai/codex/issues/37567)、[#37417](https://github.com/openai/codex/issues/37417)、[#31354](https://github.com/openai/codex/issues/31354)、[#38089 PR](https://github.com/openai/codex/pull/38089) | OAuth（CIMD）、会话中 tool-list 热更新、Responses API 自定义 provider 兼容 |
| **远程控制 / 跨设备会话** | [#37403](https://github.com/openai/codex/issues/37403)、[#36404](https://github.com/openai/codex/issues/36404) | 移动-桌面代理路由、与 Voice/Realtime 的衔接 |
| **自定义模型 Provider（API Key）** | [#24648](https://github.com/openai/codex/issues/24648)、[#37379](https://github.com/openai/codex/issues/37379)、[#37858](https://github.com/openai/codex/issues/37858) | 桌面隐藏自定义模型、multi-agent 不工作 |
| **存档/历史刷新 UX** | [#11907](https://github.com/openai/codex/issues/11907)、[#35030](https://github.com/openai/codex/issues/35030) | 自动同步、手动刷新、调度调用差异需统一 |
| **用量/限速可观测性** | [#36307](https://github.com/openai/codex/issues/36307) | 用户对限额、周期、reset 时间不稳定有明显意见 |
| **技能（Skills）/ 插件稳定性** | [#20946](https://github.com/openai/codex/issues/20946)、[#30993](https://github.com/openai/codex/issues/30993)、[#38074 PR](https://github.com/openai/codex/pull/38074)、[#38066 PR](https://github.com/openai/codex/pull/38066) | 技能调用追踪与缓存失效需要闭环 |

---

## 6. 开发者关注点（高频痛点）

1. **Windows 沙盒 ACL 与 apply_patch 性能**
   apply_patch 在 NTFS + sandbox user 下出现"Access is denied"长尾卡顿（[#34549](https://github.com/openai/codex/issues/34549)、[#32525](https://github.com/openai/codex/issues/32525)），Patch 的 deny-read ACL 也会阻断既有文件更新。今天 [#38080](https://github.com/openai/codex/pull/38080) / [#38064](https://github.com/openai/codex/pull/38064) 给了官方回复，下一版本有望缓解。

2. **桌面端内存 / UI 冻结**
   [#38059](https://github.com/openai/codex/issues/38059) 显示 Windows 桌面空载 8.8 GB，伴随 UI 卡死。开发者呼吁加内存上限、回归测试覆盖更多构建号（26.803.8161→10989）。

3. **MCP 工具发现 / 鉴权**
   - 会话中 MCP tool-list 变更不会被现有会话捕获 ([#37417](https://github.com/openai/codex/issues/37417))
   - 自定义 Responses provider + MCP 组合报 `unsupported call: mcp__…` ([#31354](https://github.com/openai/codex/issues/31354))
   - 0.147.0 引入 Qonto MCP 启动回归 ([#37567](https://github.com/openai/codex/issues/37567))

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

今日 Gemini CLI 发布了 **v0.56.0-nightly** 与 **v0.56.0-preview.1** 双版本，核心修复了"模型容量耗尽"的误报问题（#28730）以及客户端配额查找映射错误。安全方面，社区紧急升级了 `shell-quote` 与 `simple-git` 以修复两个 **CRITICAL 级别 CVE**。同时，Auto Memory 子系统的多个 Bug 集中爆发（#26522/#26523/#26525），子代理（Subagent）在 MAX_TURNS 与 Wayland 浏览器场景下的异常行为仍是 P1 级热点。

---

## 🚀 版本发布

### v0.56.0-nightly.20260812.g5024443c7（今日构建）
- 修复 `core`/`cli` 中误报的模型容量耗尽错误，修正配额查找映射（#28730）
- `evals` 新增本地报告命令及开发者文档（#28369）

### v0.56.0-preview.1
- 包含 v0.55.0-preview.1 的 changelog 与版本号自动 bump
- 自动生成版本变更日志

### v0.55.1（稳定版补丁）
- 修复 release 验证时 `npm ci` 忽略脚本的问题（#28116）
- 修复 release 验证中工作区二进制 shadowing 问题（#28132）

### v0.55.0-preview.3
- 从 PR #28730 cherry-pick 188e255 至 preview 分支

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 |
|---|-------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1** Subagent 在 MAX_TURNS 后错误报告为 GOAL success，掩盖中断事实（12 评论） | 子代理状态语义问题，影响调试与可靠性 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1** Generalist agent 无限挂起（8 评论，👍 8） | 用户等待 1 小时仍卡死，需禁用 defer 才可绕过 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **P2** 零依赖 OS 沙箱 + 后执行意图路由（8 评论） | 充分利用 Gemini 3 的 bash 原生能力，安全与 UX 兼顾的架构级提案 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **P1** 健壮的组件级评估体系（7 评论） | 76 个行为评估 + 6 个模型，评估基建的关键 EPIC |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2** AST 感知的文件读取/搜索/映射评估（7 评论） | 通过 AST 减少 turn 数与 token 噪声，提升效率 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2** Gemini 几乎不主动使用 skills 与 sub-agents（6 评论） | 自定义技能/子代理调用率低的体验问题 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2** Auto Memory 对低信号会话无限重试（5 评论） | 会话可能反复出现，需引入上限机制 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1** Shell 命令完成后卡在"等待输入"（4 评论，👍 3） | 影响所有用户的最常见交互体验 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **P1** Browser subagent 在 Wayland 下失败（4 评论） | Linux 桌面用户的关键路径 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **P3** browser_agent 自动会话接管与锁恢复（4 评论） | "Fail-fast" 策略改为更稳健的恢复机制 |

---

## 🛠 重要 PR 进展

| PR | 内容 |
|----|------|
| [#28780](https://github.com/google-gemini/gemini-cli/pull/28780) | **安全** `shell-quote` 升级至 1.8.4 修复 **CVE-2026-9277**（CRITICAL） |
| [#28778](https://github.com/google-gemini/gemini-cli/pull/28778) | **安全** `simple-git` 升级至 3.32.3 修复 **CVE-2026-28292**（CRITICAL） |
| [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) | 修复 CLI 中误报的模型容量耗尽错误，修正配额模型映射 ✅ 已合并 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | 动态解析 Cloud Workstations 代理重定向 URI，修复 OAuth 流程 ✅ 已合并 |
| [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) | 修复 IDE 连接时目录不匹配被吞错（Cider / 远程工作区）✅ 已合并 |
| [#28716](https://github.com/google-gemini/gemini-cli/pull/28716) | 将容量耗尽与积分不足分类为终态错误，触发立即回退 ✅ 已合并 |
| [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) | 新增 `npm run eval:report` 本地评估报告工具，含开发者文档 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | 评估失败时输出工具调用时间线与失败摘要，便于诊断 |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | Vertex AI 401 错误信息优化：明确告知用户应使用 Google Cloud 凭证 |
| [#28768](https://github.com/google-gemini/gemini-cli/pull/28768) | 修复 Wombat 静态标签 403 DELETE 错误与 ripgrep 解析 |
| [#28581](https://github.com/google-gemini/gemini-cli/pull/28581) | `@` 引用处理时跳过 diff hunk 标记，避免大 diff 下的内存暴涨 |

---

## 📈 功能需求趋势

从今日活跃 Issue 中可提炼出五大社区关注方向：

1. **🧠 子代理（Subagent）健壮性**：MAX_TURNS 处理、状态语义、Wayland 兼容、Generalist 挂起、Bug Report 上下文——是当前最高频话题。
2. **💾 Auto Memory 子系统**：5 个相关 Issue（#26522/#26523/#26525/#26516/#26523）集中在 5 月创建，今日集中被讨论，标志该功能进入稳定化阶段。
3. **🔬 评估基建（Evals）**：行为评估已达 76 个，向 AST 感知、组件级评估演进。
4. **🛡 安全与沙箱**：CVE 主动响应及时，OS 沙箱与零依赖执行成为大型增强方向。
5. **🖥 IDE 集成与 OAuth**：Cider/远程工作区目录解析、Cloud Workstations OAuth 重定向 UX 优化。

---

## 👨‍💻 开发者关注点

1. **配额/容量错误体验差**：误报容量耗尽会触发不必要的回退链，是当前最影响日常使用的痛点（#28730/#28599/#28716 已陆续修复）。
2. **Shell 卡死问题普遍**：即便是最简单命令也会出现 "Waiting input"（#25166），开发者强烈希望加超时与强制退出。
3. **子代理透明度不足**：用户无法查看子代理上下文（#21763）、子代理轨迹分享不便（#22598），是评估与调试的关键缺口。
4. **大输入性能**：`@` 处理在包含大 diff 时会触发 glob 递归，造成内存增长（#28581 修复）。
5. **跨平台兼容性**：Wayland 浏览器子代理失败（#21983）暴露 Linux 桌面路径仍未充分覆盖。
6. **自定义技能未被自动调用**（#21968）：社区期望更智能的 skill/sub-agent 选择启发式，而非完全依赖用户指令。

---

> 💡 **编辑提示**：建议关注 PR #28730 与 #28716 的修复链路——它们共同解决了"误报容量耗尽导致重试挂起"这一高频痛点；下一窗口可重点跟踪 Auto Memory 系列 Issue 的修复进展。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

过去 24 小时 Copilot CLI 仓库无新版本发布，但社区活跃度极高——涌现出 **41 条更新 Issue** 和 **2 条 PR**。最值得关注的焦点集中在三大方向：**Windows 平台插件安装/更新的"Access is denied"顽疾**（[#4151](https://github.com/github/copilot-cli/issues/4151)、[#4095](https://github.com/github/copilot-cli/issues/4095)，后者累计 👍14）、**Claude 系列模型在企业账户下被莫名禁用**（[#4422](https://github.com/github/copilot-cli/issues/4422)）、以及 **v1.0.74 引入的 session resume 内存回归**（[#4251](https://github.com/github/copilot-cli/issues/4251)）。同时，多个关于 skills、agents、模型路由的机制性问题被集中曝光，提示 1.0.79 版本可能存在尚未收敛的设计缺陷。

---

## 🚀 版本发布

过去 24 小时无新 Release。建议关注最近的稳定版本：**v1.0.74（已知存在 session resume 回归）** 和 **v1.0.79**（当前社区反馈最集中的版本，多个新 bug 围绕其展开）。

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 重要性 | 链接 |
|---|------|------|--------|------|
| 1 | [#4095](https://github.com/github/copilot-cli/issues/4095) | Windows: plugin update fails with "Access is denied (os error 5)" while VS Code is running | ⭐⭐⭐ | 累计 👍14，是本期热度最高的 Issue。VS Code Copilot 扩展占用 watcher 句柄导致 CLI 无法更新插件，影响所有 Windows 用户。 |
| 2 | [#4422](https://github.com/github/copilot-cli/issues/4422) | All Claude models disabled under CLI model selection | ⭐⭐⭐ | 企业用户昨日仍可使用 Claude 系列模型，今晨全部失效，回滚版本无法解决，影响面广。 |
| 3 | [#4151](https://github.com/github/copilot-cli/issues/4151) | plugin install fails with Access is denied on Windows | ⭐⭐⭐ | 与 #4095 同源问题，100% 复现于 Windows 11，涵盖 marketplace、GitHub、本地三种来源。 |
| 4 | [#4251](https://github.com/github/copilot-cli/issues/4251) | Resume of a large session OOMs in 1.0.74 (regression) | ⭐⭐⭐ | 经 A/B 验证确认从 1.0.73 到 1.0.74 出现的回归，峰值内存 ~3-4 倍，单核 70 分钟卡死。 |
| 5 | [#4431](https://github.com/github/copilot-cli/issues/4431) | `/config model` wipes all settings | ⭐⭐ | v1.0.79 严重数据丢失 bug，已 CLOSED，预计即将修复。 |
| 6 | [#4211](https://github.com/github/copilot-cli/issues/4211) | BigInt in structured MCP response 致命错误 | ⭐⭐ | 任何返回大整数的 MCP 服务器将导致 CLI 全部任务中止，破坏整个会话。 |
| 7 | [#4380](https://github.com/github/copilot-cli/issues/4380) | Rubber Duck 复用主会话模型族 | ⭐⭐ | 削弱了 adversarial review 的设计初衷，影响代码审查质量。 |
| 8 | [#3976](https://github.com/github/copilot-cli/issues/3976) | tgrep 索引器在大 monorepo 上 OOM | ⭐⭐ | 原生 Rust 索引器无内存上限保护，可直接 kill 主机。 |
| 9 | [#4405](https://github.com/github/copilot-cli/issues/4405) | Copilot Free in Codespaces: "No model available" | ⭐⭐ | 影响所有 Codespaces 上的 Copilot Free 用户，需重新登录仍未解决。 |
| 10 | [#4377](https://github.com/github/copilot-cli/issues/4377) | GPT-5.6 Terra 静默委派 Opus 子代理 | ⭐⭐ | 用户配置 gpt-5.6-terra 却产生 Opus 计费，可能涉及模型路由透明性问题。 |

**补充关注**：[#4451](https://github.com/github/copilot-cli/issues/4451)（Slash skill 重复加载，👍2）、[#4439](https://github.com/github/copilot-cli/issues/4439)（GitLab MCP OAuth RFC 8414 不匹配）、[#3750](https://github.com/github/copilot-cli/issues/3750)（Light 主题硬编码颜色 bug）。

---

## 🔧 重要 PR 进展

| # | 编号 | 标题 | 内容概述 | 链接 |
|---|------|------|----------|------|
| 1 | [#4449](https://github.com/github/copilot-cli/pull/4449) | Migrate pull request automation away from `pull_request_target` | 🛡️ **安全加固**：移除 `pull_request_target` 触发器，将不受信 PR 内容限制在低权限 `pull_request` 工作流中，仓库写操作走独立受信任流程。 | [查看](https://github.com/github/copilot-cli/pull/4449) |
| 2 | [#4428](https://github.com/github/copilot-cli/pull/4428) | Add initial devcontainer configuration | 🧰 **DX 改进**：新增官方 devcontainer 配置，方便贡献者一键搭建标准化开发环境。 | [查看](https://github.com/github/copilot-cli/pull/4428) |

> 📊 **注**：过去 24 小时仅有 2 条 PR 更新，且均为基础设施层面（安全/CI/DevContainer），未见功能合并。建议密切关注后续 review 进度。

---

## 📈 功能需求趋势

从本期 Issues 中可提炼出以下五大需求方向：

### 1. 🪟 **Windows 平台稳定性**（最高优先级）
- 插件 install/update 权限错误（#4151、#4095）
- 主题硬编码破坏 Light 主题（#3750）
- 反映 Windows 用户长期被忽视

### 2. 🤖 **Skills / Agents 机制完善**
- Skill 重复加载（#4430、#4451）
- `disable-model-invocation` 行为不符合预期（#4438）
- Rubber Duck 模型族覆盖问题（#4380、#4432）
- 用户级模型不生效（#4434）

### 3. 🔌 **MCP 生态兼容**
- BigInt 序列化失败（#4211）
- GitLab OAuth RFC 8414 issuer 不匹配（#4439）

### 4. 🎛️ **企业治理与权限**
- Auto-allow permissions（#3877）
- Sandbox 强制策略（#4446）
- 权限提示区分读/写（#4443）
- Claude 模型企业级可用性（#4422）

### 5. 🧠 **上下文与性能**
- Compaction 递归损失（#4441）
- 大 session 内存回归（#4251）
- tgrep OOM（#3976）

---

## 💬 开发者关注点

从本期反馈中可观察到以下高频痛点：

1. **🔴 版本质量焦虑**：v1.0.74 引入内存回归、v1.0.79 出现 `/config model` 清空设置、自动模式挑选到不可用 reasoning 模型（#4445），开发者对升级普遍持谨慎态度。

2. **🪟 Windows 体验割裂**：Windows 上的 plugin 系统因文件句柄/权限问题几乎"不可用"，但官方响应相对滞后，社区情绪偏负面。

3. **🤖 模型路由不透明**：GPT-5.6 → Opus（#4377）、auto 模式挑错 reasoning（#4445）、rubber-duck 模型覆盖（#4432），开发者希望 CLI 能明确"谁在用什么模型、花了多少"。

4. **📦 Skills 系统边界模糊**：从 #4430、#4438、#4451 看，skill 在仓库/插件/用户级之间的优先级、`disable-model-invocation` 语义、显式 vs 模型调用路径仍需明确文档与设计。

5. **🛡️ 供应链安全**：[#4442](https://github.com/github/copilot-cli/issues/4442) 报告 v1.0.79 二进制仍包含 `adm-zip@0.5.17`（CVE-2026-39244 High），企业用户对依赖审计有刚性需求。

6. **🔁 跨工具互操作**：[#4440](https://github.com/github/copilot-cli/issues/4440)（支持 `.claude/rules`）、[#4437](https://github.com/github/copilot-cli/issues/4437)（Claude-Code agents 字段污染 Copilot agents）显示越来越多团队同时使用 Claude Code 与 Copilot CLI，规则与 agent 命名空间冲突需要治理。

---

> 📎 **日报生成时间**：2026-08-12 ｜ **数据源**：[github/copilot-cli](https://github.com/github/copilot-cli)
> 如需追踪特定 Issue 的进展，可在链接后追加 `?subscription` 开启订阅通知。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-12** | 数据来源：GitHub `MoonshotAI/kimi-cli`

---

## 📌 今日速览

今日社区动态整体偏"修补 + 长期诉求"两条主线：一方面 `hobostay` 集中合入 5 个历史 PR，涵盖 ACP 异常处理、WireFile TOCTOU 竞态、`assert` 替换为受控异常、PyInstaller 打包等多个稳定性修复；另一方面社区对**记忆系统（Memory System）**的呼声持续走高，Issue #1283（34 条评论）依然是讨论最热的议题，并带动 #1478 等跟进诉求。功能侧，PR #2509 推进可配置的"思考力度"（thinking effort）控制，距离合并进入主干仅一步之遥。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

> 过去 24 小时仅 5 条 Issue 更新，列表展示全部 5 条。

### 1. [#1283 — Feature Request: Memory System](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **类型**：enhancement | **状态**：OPEN
- **作者**：CatKang | **更新**：2026-08-11 | **评论数**：34
- **为什么重要**：这是 Kimi CLI 历史上评论数最多的功能请求之一（34 条），要求建立跨会话的持久化记忆机制（自动记忆 + 用户自定义指令）。目前对话上下文随会话结束而丢失，是大项目协作的最大痛点。

### 2. [#1478 — 能否优化记忆层？参考文档也没提记忆相关内容？](https://github.com/MoonshotAI/kimi-cli/issues/1478)
- **类型**：enhancement | **状态**：OPEN
- **作者**：hahy36 | **更新**：2026-08-11 | **评论数**：1
- **为什么重要**：从独立开发者视角再次印证 #1283 的诉求，并指出文档缺失（仅 `agent.md`）。用户已自行搭建 `MEMORY.md` + 每日记忆的工作流，说明社区有强烈的"自造轮子"动机，反向证明官方能力的空白。

### 3. [#2601 — Quote & Reply: comment on any selected part of an AI response](https://github.com/MoonshotAI/kimi-cli/issues/2601)
- **类型**：Feature Request | **状态**：OPEN
- **作者**：topit | **更新**：2026-08-11 | **评论数**：0
- **为什么重要**：针对 Kimi Web 提出"对 AI 回复任意片段进行引用并追问"的交互模式，类比 GitHub PR Review 体验。该能力一旦落地，将显著降低多轮修订时复制粘贴上下文的心智成本。

### 4. [#2600 — Windows PowerShell7 默认 D 盘启动，kimi code 找不到路径](https://github.com/MoonshotAI/kimi-cli/issues/2600)
- **类型**：bug | **状态**：OPEN
- **作者**：RooKichenn | **更新**：2026-08-11 | **评论数**：0
- **为什么重要**：v0.33 在非系统盘（默认工作目录非 `C:\`）启动时路径解析失败，反映 CLI 对当前工作目录（PWD）的依赖假设过于脆弱。Windows 用户的合理自定义工作流遭遇 break，是典型的跨平台兼容性问题。

### 5. [#2599 — cli 规划任务出现"验尸"。。。好吓人](https://github.com/MoonshotAI/kimi-cli/issues/2599)
- **类型**：bug | **状态**：OPEN
- **作者**：KING0177 | **更新**：2026-08-11 | **评论数**：0
- **为什么重要**：v0.34.0 在 todo 列表中出现了"验尸"（疑似 post-mortem 直译）这类语意不当的措辞，反映模型提示词在中文场景下的本地化校验缺失。虽然不影响功能，但影响专业感与品牌信任。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时 8 条 PR 更新。PR #2509 仍 OPEN，其余 7 条均为已 CLOSED 的历史 PR 集中落地。

### 1. [#2509 — feat(kimi): configurable thinking effort and /effort command](https://github.com/MoonshotAI/kimi-cli/pull/2509)
- **状态**：OPEN | **作者**：n-WN | **更新**：2026-08-11
- **内容**：解决 #2501，新增 `/effort` 命令以调节模型"思考力度"，并保留对旧 `reasoning_effort` 参数的透传。
- **意义**：让用户按任务复杂度精细控制推理成本，与 OpenAI / Anthropic 客户端的 effort 调节对齐，是面向"专业开发者用户"的重要交互增强。

### 2. [#2057 — fix(acp): replace assert with proper RuntimeError exceptions](https://github.com/MoonshotAI/kimi-cli/pull/2057)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：将 `acp/session.py` 中 5 处 `assert` 改为 `RuntimeError`，避免 `python -O` 优化模式下断言被剥离导致不变量失效。

### 3. [#2056 — fix(wire): eliminate TOCTOU race in WireFile.append_record](https://github.com/MoonshotAI/kimi-cli/pull/2056)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：修复 `WireFile.append_record` 中"先 `exists()` 后 `stat()`"的 TOCTOU 竞态，改用异常驱动的写法。

### 4. [#2055 — fix(agentspec): replace assert with proper AgentSpecError](https://github.com/MoonshotAI/kimi-cli/pull/2055)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：将 `agentspec.py` 中 `assert agent_spec.extend is None` 替换为受控异常 `AgentSpecError`，与 #2057 同一安全治理思路。

### 5. [#1393 — fix(acp): route shell commands through terminal args](https://github.com/MoonshotAI/kimi-cli/pull/1393)
- **状态**：CLOSED | **作者**：hanhan3344 | **更新**：2026-08-11
- **内容**：修复 ACP Shell 终端执行：将 shell 可执行文件放 `command`、调用字符串放 `args`，并对齐 ACP SDK 当前的 `terminal_id` 响应结构，新增 bash 与 PowerShell 回归测试。

### 6. [#1328 — Fix minor bugs in file tools and UI feedback](https://github.com/MoonshotAI/kimi-cli/pull/1328)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：三处小修复——`StrReplaceFile` 累计替换计数、`file` 工具中的 UI 反馈细节、以及一处其他文件逻辑修正。

### 7. [#1082 — fix(pyinstaller): filter non-existent dateparser cache files](https://github.com/MoonshotAI/kimi-cli/pull/1082)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：解决 PyInstaller 打包 `dateparser` 时 `dateparser_tz_cache.pkl` 懒生成导致的新装环境缺失问题。

### 8. [#1077 — fix: remove redundant mode validation in WriteFile tool](https://github.com/MoonshotAI/kimi-cli/pull/1077)
- **状态**：CLOSED | **作者**：hobostay | **更新**：2026-08-11
- **内容**：移除 `WriteFile` 中冗余的 `mode` 参数运行时校验（与类型注解重复），降低维护成本。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 提炼出三大社区诉求方向：

| 方向 | 代表 Issue | 热度 | 核心痛点 |
|------|-----------|------|---------|
| **跨会话记忆 / 长期上下文** | #1283、#1478 | 🔥🔥🔥（34 条评论） | 大项目协作中上下文丢失；用户已开始自建 `MEMORY.md` 工作流 |
| **跨平台兼容性（Windows）** | #2600 | 🔥🔥 | PowerShell7 非默认盘启动失败，PWD 解析耦合过深 |
| **精细化交互（思考强度 + 引用回复）** | #2509（PR）、#2601 | 🔥 | 缺乏对模型推理强度的运行时控制；缺乏对 AI 回复的局部追问能力 |

补充观察：#2599（"验尸"本地化）虽属轻微 bug，但折射出 **国际化/i18n 自动化校验缺失** 这一系统性问题，建议团队纳入提示词工程的回归测试套件。

---

## 🧑‍💻 开发者关注点

1. **持久化记忆是首要诉求**  
   #1283（34 评论）与 #1478 共同指向同一个核心矛盾：当前 CLI 仅在单次会话内有效，无法承载"持续数周的大型项目协作"。这与 Claude Code、MCP 生态已有方案形成体验差距。

2. **CLI 在 Windows 上的"路径与目录"假设过强**  
   #2600 显示开发者常把工作目录放在非系统盘（`D:`），而 CLI 在解析默认 `agent.md` / 配置文件时仍假设系统盘路径。优先级应高于普通 bug。

3. **对模型推理强度的可调性需求强烈**  
   PR #2509 引入 `/effort` 命令恰好响应了社区对"轻量任务不应消耗重度推理"的需求——既关乎成本，也关乎响应延迟。

4. **提示词与本地化质量下降引发负面情绪**  
   #2599 的"验尸"翻译虽小，但出现在 todo 列表这种显眼位置会让用户产生"产品粗糙"的印象，对开发者群体尤其敏感。

5. **底层稳定性正在被系统性治理**  
   `hobostay` 一日内 5 个 PR 合入（assert → exception、TOCTOU、PyInstaller 打包、文件工具），说明团队正围绕"Python -O 优化模式下的安全退化"做集中整治，长期看是积极信号。

---

*日报生成时间：2026-08-12 · 数据窗口：过去 24 小时 · 数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-12

## 📰 今日速览

过去 24 小时 OpenCode 仓库活跃度集中在 **V2（opencode2）** 主线：大量 Issue 围绕 V1→V2 迁移兼容性、多 TUI 共享服务器的状态污染、Plan Mode 行为失效等展开；PR 端则集中在 TUI 体验打磨（标签栏、自动补全、Shell 输出对齐）和一个隐藏的实验功能。**无新版本发布**，社区进入"V2 稳定化"密集修复阶段。贡献者 kitlangton 单日提交 10+ 个 PR，是当日最活跃开发者。

---

## 🚀 版本发布

过去 24 小时无新 Release。建议关注 dev / next 通道的具体提交（详见下方 PR）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 👍 | 关注理由 |
|---|---|---|---|---|---|
| [#16017](https://github.com/anomalyco/opencode/issues/16017) | Go plan usage/balance API endpoint | **CLOSED** | 33 | **137** | 热度最高的长期 feature 请求，137 👍 反映社区对订阅数据透明化的强烈诉求，已落地 |
| [#10272](https://github.com/anomalyco/opencode/issues/10272) | Hidden calls Haiku（静默调用未选模型） | **CLOSED** | 10 | 5 | 揭示 OpenRouter 通道存在"隐性计费"问题，触及成本与可信度红线 |
| [#28191](https://github.com/anomalyco/opencode/issues/28191) | TUI 权限提示面板高度/展开态可配置 | OPEN | 9 | 0 | 大 diff 场景下当前 hardcode 的 15 行限制严重影响可用性 |
| [#18134](https://github.com/anomalyco/opencode/issues/18134) | Desktop 关闭按钮应最小化到托盘 | **CLOSED** | 8 | 2 | Windows 用户高频痛点，已修复 |
| [#13033](https://github.com/anomalyco/opencode/issues/13033) | 后台压缩时不向终端流式输出摘要 | **CLOSED** | 5 | 5 | 自动 compaction 流程 UX 改进 |
| [#39831](https://github.com/anomalyco/opencode/issues/39831) | Zen：gpt-5.6-luna/terra 上游 403 失败 | OPEN | 5 | 1 | 涉及 Zen 渠道的多个新模型不可用，影响生产稳定性 |
| [#12548](https://github.com/anomalyco/opencode/issues/12548) | TUI Chrome 式多标签会话系统 | **CLOSED** | 5 | 10 | 多会话并行工作流的核心需求，已合入 |
| [#17838](https://github.com/anomalyco/opencode/issues/17838) | Session & Subagent Tabs | **CLOSED** | 4 | 6 | 与上方形成组合拳，进一步强化 subagent 编排可视性 |
| [#39181](https://github.com/anomalyco/opencode/issues/39181) | 多 TUI 共用 server 时事件跨目录串扰 | OPEN | 4 | 0 | 多 workspace 并行的高级用户场景，与 [#41839](https://github.com/anomalyco/opencode/issues/41839) 同源，状态栏被"投毒" |
| [#39936](https://github.com/anomalyco/opencode/issues/39936) | VS Code 通知（agent 完成/需关注时） | OPEN | 4 | 1 | 填补 IDE 集成最后一块拼图，已有 TUI/Desktop/CLI 通知但缺 VS Code |

**值得另外关注的 V2 关键 Bug：**
- [#41763](https://github.com/anomalyco/opencode/issues/41763) TUI 上 ALSA 错误刷屏破坏终端显示（OPEN）
- [#41777](https://github.com/anomalyco/opencode/issues/41777) V2 Code Mode 中 `webfetch` 回归返回 null（CLOSED）
- [#41869](https://github.com/anomalyco/opencode/issues/41869) V1→V2 迁移在含撇号的数据上 SQL 语法错误（CLOSED）
- [#40474](https://github.com/anomalyco/opencode/issues/40474) V2 agent/mode 切换对模型不可见 — plan agent 无 system prompt（CLOSED）
- [#28986](https://github.com/anomalyco/opencode/issues/28986) Agent 循环自回复 bug（2.8% 会话命中）（CLOSED）

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 作者 | 内容 |
|---|---|---|---|
| [#41895](https://github.com/anomalyco/opencode/pull/41895) | fix(llm)：完成时收尾 OpenAI Responses 待处理工具调用 | patil2001 | 修复流式响应在 `output_item.added` 出现但未匹配 `done` 事件时，工具调用永久悬挂的问题 |
| [#41887](https://github.com/anomalyco/opencode/pull/41887) | TUI 会话标签栏新增 `+` 按钮 | kitlangton | 浏览器式新建标签体验，与 #12548 标签系统配套 |
| [#41884](https://github.com/anomalyco/opencode/pull/41884) | core：在初始 MCP 注册后才快照工具列表 | kitlangton | 修复冷启动恢复会话时 MCP 工具注册竞态导致的"工具目录误导模型" |
| [#41883](https://github.com/anomalyco/opencode/pull/41883) | TUI：write 工具完成后展示语法高亮内容 | kitlangton | V2 write 渲染端口，从被遗忘的 `v2-migration` 分支 cherry-pick |
| [#41880](https://github.com/anomalyco/opencode/pull/41880) | TUI：让运行中和完成态的 Shell 卡片对齐 | kitlangton | 流式输出避免完成瞬间"跳跃"两列 |
| [#31658](https://github.com/anomalyco/opencode/pull/31658) | Windows 默认 UTF-8 编码用于 spawn 子进程 | Thalynor | 关闭 5 个中文 Windows 编码相关 issue（#23636 #31187 #30205 #31830 #26882） |
| [#41894](https://github.com/anomalyco/opencode/pull/41894) | Desktop：Open With 改用 Sublime CLI | nanami7777777 | 修复 #41694，Windows/Linux 使用 `subl` CLI，菜单项保持不变 |
| [#41889](https://github.com/anomalyco/opencode/pull/41889) | Desktop：本地开发身份对齐 | Hona | 统一 Electron 与本地 CLI 的 2.0.0-local 时间戳，便于 dev 流 |
| [#40845](https://github.com/anomalyco/opencode/pull/40845) | App：非模态设置页重新设计 | Hona | 拆分 Appearance / Notifications，新增 Projects 与 Extensions 视图（基于真实 MCP 状态） |
| [#41838](https://github.com/anomalyco/opencode/pull/41838) | core：嵌入 models.dev snapshot 而非编译期 define | kitlangton | 静态导入模型目录，开发体验与构建产物更稳 |

**当日 CLOSED 高价值 PR：**
- [#41888](https://github.com/anomalyco/opencode/pull/41888) session interrupt 新增 `continue=true` 参数，中断后可恢复待执行工作（核心 API 增强）
- [#41870](https://github.com/anomalyco/opencode/pull/41870) `/cd` 改用目录补全（shell 风格 ~ / ../ 绝对路径），持久化项目级 recents
- [#41862](https://github.com/anomalyco/opencode/pull/41862) TUI 隐藏的 **Experiments** 面板（输入 `/baldbeard` 开启）— 实验功能灰度新机制，其中含每标签的 prompt draft 缓存
- [#41892](https://github.com/anomalyco/opencode/pull/41892) effect patch 瘦身 -57 行，OpenAPI 组件用上游规范命名
- [#41879](https://github.com/anomalyco/opencode/pull/41879) Client 服务生命周期测试从 **72.6s 加速到 4.5s**（-93.8%）

---

## 📈 功能需求趋势

从近 24 小时 Issue 提炼的社区关注方向：

1. **TUI/IDE 体验深水区** — 标签系统（#12548 #17838）、权限提示可配置（#28191）、`/cd` 补全（已交付）、自动完成跨平台化（#41893）成为共识焦点
2. **V2 稳定性与回归修复** — 大量 "regression between versions" 类 issue 涌向 V2（`webfetch` 失效、Plan Mode 不生效、agent 切换对模型不可见、SQL 迁移失败）
3. **多客户端/多 Server 模型** — `opencode serve` + 多 TUI 共享场景的状态污染成为高级用户的明确诉求
4. **新模型与套餐覆盖** — Grok 4.5 (#41886)、Zen gpt-5.6-luna/terra (#39831)、AgentRouter OpenAI 兼容层 (#41873) 等供应商接入问题
5. **扩展生态** — 申请加入官方 ecosystem 的插件（如 [#41857](https://github.com/anomalyco/opencode/issues/41857) `opencode-pr-tracker`、[#41822](https://github.com/anomalyco/opencode/issues/41822) Lumify MCP）持续出现
6. **编码与跨平台细节** — Windows 系统级安装（#9995）、zh-CN 默认编码（#31658 已合并）、CRLF 行尾保留（#37090）、GBK 等非 UTF-8 编码（#37602）
7. **桌面应用 UX** — 托盘行为、本地开发与生产身份区分、设置面板重构

---

## 🧩 开发者关注点（痛点 & 高频需求）

> 基于 V2 阶段 issue/PR 的回复与讨论提炼。

- **V2 迁移回归令人疲惫**：`webfetch` null、Plan Mode 失效、migration SQL 报错、APOSTrophe 转义等连续出现，旧项目升级路径不平稳。
- **Plan Mode 失效是 V2 最严重的功能性退化**：Plan agent 没有 system prompt、`agent-switched` part 被静默丢弃，模型不清楚自己处在哪个模式，多次复现 (#40474 #40778 #41476)。
- **多 TUI × 单 server 状态串扰**已成为企业/团队使用方式的"硬墙"：状态栏显示其他 workspace 的 git 分支、新消息事件被错误分派。
- **跨平台细节被反复敲门**：Linux ALSA 噪音污染 TUI、Windows 默认编码吞噬中文输出、`apply_patch` 改写行尾 / 静默覆盖现有文件。
- **透明计费呼声高**：OpenRouter 隐性调用未选中模型（#10272）、订阅用量 API（#16017）说明开发者对成本可追溯的诉求强烈。
- **生态外溢**：第三方客户端（Rust TUI #41828）、VS Code 插件（#39936）、MCP 文档示例（#41822）显示 OpenCode 正在从 CLI 工具扩展成多端平台，官方文档与生态认证机制需要同步建设。

---

*数据时间窗：2026-08-11 ~ 2026-08-12（UTC）。Issues/PRs 各取评论数前 30 / 20。报告中所有链接均指向 `github.com/anomalyco/opencode`。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期**：2026-08-12  
**数据来源**：[badlogic/pi-mono](https://github.com/badlogic/pi-mono)  
**统计周期**：过去 24 小时

---

## 📌 今日速览

过去 24 小时内 Pi 仓库无新版本发布，社区活跃度集中在 **Bug 修复与跨平台兼容性** 上：多个高评论 Issue（如 Mac 高 CPU、WSL 登录挂起、Copilot 429 限流）已陆续关闭；同时一批针对性修复 PR（编辑工具归一化、TUI 翻页键、剪贴板 OSC 52 路由）合入主干。`message_update` 流式事件丢失 `usage` 字段的问题 (#7911) 已由 PR #7982 给出修复方案，回归通道基本畅通。

---

## 🚀 版本发布

无。过去 24 小时内未发布新版本，最新稳定版仍为 **0.84.1**。

---

## 🔥 社区热点 Issues

| # | Issue | 标题 | 状态 | 评论 | 👍 | 链接 |
|---|-------|------|------|------|----|------|
| 1 | #6187 | [bug] Pi login hangs in WSL after browser-based GitHub Copilot device authorization | CLOSED | 25 | 0 | [→](https://github.com/earendil-works/pi/issues/6187) |
| 2 | #7730 | [bug] High CPU usage on Mac OS with long session | OPEN | 10 | **8** | [→](https://github.com/earendil-works/pi/issues/7730) |
| 3 | #7846 | [bug] Unable to start 0.84.0, 0.84.1 with bun runtime | CLOSED | 10 | 1 | [→](https://github.com/earendil-works/pi/issues/7846) |
| 4 | #7553 | Configurable thinking level/model for compaction | OPEN | 8 | 0 | [→](https://github.com/earendil-works/pi/issues/7553) |
| 5 | #7444 | WebSocket retry only handles two error codes | CLOSED | 8 | 0 | [→](https://github.com/earendil-works/pi/issues/7444) |
| 6 | #7850 | [bug] GitHub Copilot login fails with 429 (organizations with many models) | CLOSED | 7 | **7** | [→](https://github.com/earendil-works/pi/issues/7850) |
| 7 | #7836 | Edit fuzzy match misses lines with differences in whitespace length | OPEN | 6 | 1 | [→](https://github.com/earendil-works/pi/issues/7836) |
| 8 | #7829 | Invalid settings.json silently ignored; misleading 'bash not found' error on Windows | OPEN | 3 | 0 | [→](https://github.com/earendil-works/pi/issues/7829) |
| 9 | #7911 | [bug] 0.84.0's delta-only `message_update` removed `usage` on the wire protocol | OPEN | 2 | 0 | [→](https://github.com/earendil-works/pi/issues/7911) |
| 10 | #7987 | Package remains absent from gallery after republish despite valid metadata | CLOSED | 2 | 0 | [→](https://github.com/earendil-works/pi/issues/7987) |

**关键洞察：**

- **#7730（Mac 高 CPU）** 👍 数最高，社区反馈集中于"长会话 + 大上下文"场景下 CPU 飙至 100%+、内存 600–800MB，是当前最受用户关注的未解性能问题。
- **#7850（Copilot 429）** 与 #7428 同源，针对大型组织（20+ 模型）的限流问题，虽被标记 `no-action` 但 👍=7 显示社区呼声强烈。
- **#7911（usage 字段丢失）** 是 0.84.0 修复 #7290 时引入的回归，PR #7982 已提交方案，闭环节奏快。
- **#7987（包仓库收录延迟）** 与 #7444（重试机制残缺）反映出 0.84.x 在网络层与分发层的鲁棒性仍有短板。

---

## 🛠 重要 PR 进展

| # | PR | 标题 | 状态 | 说明 |
|---|----|------|------|------|
| 1 | [#7989](https://github.com/earendil-works/pi/pull/7989) | feat(ai): add Qwen Token Plan Individual CN provider | OPEN | 新增 Qwen 中国区 Token Plan 独立订阅目录，镜像 #7659，关闭 #7847。 |
| 2 | [#7982](https://github.com/earendil-works/pi/pull/7982) | fix(coding-agent): preserve usage in streaming events | OPEN | 在 JSON/RPC `message_update` 中保留累计 usage，修复 #7911 回归，并附回归测试。 |
| 3 | [#7981](https://github.com/earendil-works/pi/pull/7981) | fix(ai): map models.dev cost tiers for every provider | OPEN | 将 models.dev 的分段计费映射从单一 GitHub Copilot 扩展到所有 provider，修复 #7912。 |
| 4 | [#7984](https://github.com/earendil-works/pi/pull/7984) | fix(coding-agent): update grok-mermaid to 0.2.3 | OPEN | 升级 grok-mermaid 以解决 #7832 的渲染问题。 |
| 5 | [#7978](https://github.com/earendil-works/pi/pull/7978) | fix(edit): normalize single-object edits argument and collapse whitespace in fuzzy match | CLOSED | 同时解决 #7836 与 #7944，单对象 edits 归一化 + 模糊匹配空白折叠。 |
| 6 | [#7972](https://github.com/earendil-works/pi/pull/7972) | fix(tui): route selection copy through host clipboard so "Copied!" is truthful | CLOSED | 将全屏选区复制改为走宿主剪贴板（OSC 52 + 探测回退），终结 macOS Terminal.app / GNOME Terminal 上"显示已复制但实际未复制"的误导。 |
| 7 | [#7970](https://github.com/earendil-works/pi/pull/7970) | feat(coding-agent): Show when the fullscreen transcript is scrolled up | OPEN | 全屏 transcript 滚回顶部时显示 `↓` 指示，回到底部自动清除。 |
| 8 | [#7968](https://github.com/earendil-works/pi/pull/7968) | feat: intercom (live session-to-session messaging) + ask_predecessor ghost responder | CLOSED | 新增 Intercom 扩展与 `ask_predecessor` 幽灵响应器，支持多会话实时通信与上下文交接。 |
| 9 | [#7967](https://github.com/earendil-works/pi/pull/7967) | feat(coding-agent): add VS Code support to notify example | CLOSED | notify 示例扩展适配 VS Code 集成终端的 OSC 99 桌面通知。 |
| 10 | [#7901](https://github.com/earendil-works/pi/pull/7901) | feat(ai): AI Gateway transport over the Cloudflare AI binding | CLOSED | 新增 Cloudflare Workers AI Gateway 传输通道，实现跨 provider 统一计费/路由 (#7838)。 |

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 与 PR 的归类，社区诉求呈现以下几条主线：

1. **新模型/Provider 接入**：Qwen 中国区独立订阅 (#7989)、Anthropic via OpenRouter (#7938)、Cloudflare AI Gateway (#7901)、models.dev 分段计费统一 (#7981)——**模型生态扩张 + 跨 provider 计费统一** 是当前最热的扩展方向。
2. **性能与流式协议**：Mac 长会话 CPU 飙升 (#7730)、启动时间预算对标 jcode (#7739)、`message_update` 缺失 `usage` (#7911/#7982)——**流式协议鲁棒性 + 启动/运行性能** 进入社区视野。
3. **TUI 与终端兼容**：copyOnSelect (#7866)、pageUp/pageDown (#7865)、OSC 52 剪贴板路由 (#7972)、tmux Kitty DCS 透传 (#7936)、滚动指示器 (#7970)——**跨终端/跨 tmux 的交互一致性** 持续打磨。
4. **编辑工具鲁棒性**：单对象 edits 归一化 (#7904/#7978)、空白折叠 (#7836)、`prepareEditArguments` 不可达分支 (#7944)——**小模型适配与 edit 工具的稳健性** 是隐性高频痛点。
5. **会话与可观测性**：JSONL v3/v4 版本不一致 (#7937)、`/resume` 计数口径分歧 (#7931/#7960)、扩展暴露 off-transcript 流 (#7986)——**会话一致性与扩展可观测性** 成为新焦点。
6. **跨平台中文/Windows 体验**：CMD 重复输出 + 内存泄漏 (#7947)、Windows `settings.json` 反斜杠未转义 (#7829)、VSCode CJK 单字空白 (#7923)——**Windows + 中文输入** 的边缘情况仍有较多工单。

---

## 👨‍💻 开发者关注点

综合开发者反馈，当前最集中的痛点与诉求可归纳为：

- **小模型友好度不足**：edit 工具的 schema 过严、模糊匹配空白敏感、`prepareEditArguments` 的 JSON 字符串分支在 schema 校验之后才触发，导致 qwen3.6、small local models 等场景下频繁报错（#7836、#7944、#7947）。
- **0.84.x 回归面偏大**：单版本内集中出现 `message_update` 丢 `usage` (#7911)、fallback 渲染器忽略 expand (#7979)、session JSONL 版本不一致 (#7937)、bun 启动崩溃 (#7846) 等多条回归，社区期望下一个小版本（0.84.2 或 0.85.0）尽快收口。
- **Copilot 集成的网络鲁棒性**：WSL 设备流挂起 (#6187) + 大型组织 429 (#7850/#7428) + WebSocket 重试仅覆盖两个错误码 (#7444) 三条主线，显示 **OAuth + 流式响应 + 限流** 的组合在生产环境仍有脆弱面。
- **可观测性与协议文档缺失**：`message_update` 协议字段在版本迭代中无明确文档约束，导致 #7911 这种"修一个丢一个"的回归；社区通过 #7982 同步补文档是正确方向。
- **打包与分发的灰色地带**：包仓库 (#7987)、npm 关键字、gallery 收录链路缺乏端到端校验，作者需手动复核，工具链尚不闭环。

---

*日报由社区数据自动聚合生成，如有疏漏欢迎在评论区指正。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-12**

---

## 📌 今日速览

Qwen Code 今天集中发布了 v0.21.10 稳定版及 v0.21.11-preview.0 预览版，正式落地 ACP 协议下 5 档推理强度配置（Default→Max）和 Web Shell 图片预览能力。社区方面，**tmux/iTerm 终端闪屏问题持续发酵**（3 条相关 Issue 集中在 24 小时内），同时 `qwen serve` 守护进程相关的会话可靠性议题持续推进，多个 P1/P2 修复 PR 进入待合并状态。

---

## 🚀 版本发布

### v0.21.10（稳定版）
- **ACP 推理强度配置**：新增支持 Default→Max 共 5 档会话级推理强度切换（[#8526](https://github.com/QwenLM/qwen-code/pull/8526)）
- **Web Shell 图片预览**：点击已上传或粘贴的图片可在 artifact 中查看预览
- 关联变更：Web Shell 会话导航的 prompt-safe 强制化（[#8931](https://github.com/QwenLM/qwen-code/pull/8931)）

### v0.21.11-preview.0（预览版）
- 同步包含 v0.21.10 主要修复，重点在 `qwen serve` 会话恢复路径的健壮性改进

### v0.21.10-nightly.20260812.a64d1291d2（Nightly）
- 镜像 preview/nightly 通道，用于 E2E 验证

### live-host-v0.1.1
- 修复 CLI sandbox runtime 探测逻辑（[#7734](https://github.com/QwenLM/qwen-code/pull/7734)）
- 修复 autofix 的 scan-and-pick 序列化问题

> ⚠️ 注意：主分支 CI 在 commit `a64d1291d2` 上 E2E 测试失败（[#8959](https://github.com/QwenLM/qwen-code/issues/8959)），需关注后续修复。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关键点 |
|---|-------|--------|--------|
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | 守护进程下大恢复超时时保留当前会话 | **P1** | 会话管理核心议题，PR1 已合并 [#8691](https://github.com/QwenLM/qwen-code/pull/8691)，仍有后续工作，**7 条评论**为全榜最高 |
| [#8562](https://github.com/QwenLM/qwen-code/issues/8562) | Mac+iTerm2+SSH+Ubuntu+tmux 闪屏 | P2 | 用户使用 Qwen 3.8 Max 自行排查后定位到 Qwen Code 渲染问题，**中文反馈**，跨平台兼容性问题 |
| [#8901](https://github.com/QwenLM/qwen-code/issues/8901) | mac iTerm 询问是否执行命令时闪屏 | P2 | 与 #8562 同源，每次回车必闪，**重复性高、影响面大** |
| [#8962](https://github.com/QwenLM/qwen-code/issues/8962) | tmux 下无法使用 qwen，闪屏严重 | P2 | 用户反馈"能闪瞎人眼睛"，缩小窗口至 400x300 才勉强可用 |
| [#8897](https://github.com/QwenLM/qwen-code/issues/8897) | `--approval-mode` 和 `--auth-type` 不在 `qwen --help` 输出中 | P2 | 已注册且校验通过但未文档化，CLI 一致性问题 |
| [#8920](https://github.com/QwenLM/qwen-code/issues/8920) | Headless 模式下 OpenAI API 错误以 success 退出码 0 返回 | P2 | `--output-format stream-json` 时严重影响自动化集成 |
| [#8644](https://github.com/QwenLM/qwen-code/issues/8644) | Windows 文件链接冒号被 URL 编码导致无法打开 | P2 | Windows 平台问题，影响 VS Code 集成 |
| [#8182](https://github.com/QwenLM/qwen-code/issues/8182) | 守护进程将宿主内存 50% 授权给每个 ACP 子进程 | P2 | **内存泄漏 / 多进程资源争抢**核心问题，由 doudouOUC 持续跟进 |
| [#8948](https://github.com/QwenLM/qwen-code/issues/8948) | Provider 更新提示承诺了不再执行的模型切换 | P2 | 升级后 UI 文案与实际行为不一致，影响信任 |
| [#8944](https://github.com/QwenLM/qwen-code/issues/8944) | 自 0.21.0 起 `npm update` 出现 2 个 high 严重性漏洞 | P2 | **安全合规问题**，依赖治理需关注 |

> 社区反应：tmux 闪屏话题集中爆发（3 条独立报告），表明这是 v0.21.x 渲染层的回归；守护进程相关议题由 doudouOUC、wenshao 两位核心维护者持续跟踪，体现出 `qwen serve` 重构是当前主线。

---

## 🛠️ 重要 PR 进展

| # | PR | 类别 | 要点 |
|---|----|------|------|
| [#8874](https://github.com/QwenLM/qwen-code/pull/8874) | **Web Shell 工作区文件上传** | 新功能 | 支持拖拽与 `@` 文件面板顺序上传、进度显示、取消、冲突重命名，**autofix/takeover** |
| [#8925](https://github.com/QwenLM/qwen-code/pull/8925) | **CLI 结构化输出在 API 错误时正确失败** | Bugfix | 直接关联 #8920，修复 stream-json 等格式下 provider 错误仍返回 success 的关键问题 |
| [#8687](https://github.com/QwenLM/qwen-code/pull/8687) | **守护进程守护跨 worktree Git 变更** | 安全 | 识别 `-C`/`--work-tree`/`--git-dir` 路径逃逸，阻止模型越权修改外部 Git 仓库 |
| [#8169](https://github.com/QwenLM/qwen-code/pull/8169) | **新增 OpenAI Responses API 内容生成器** | 新功能 | 拓展多模型支持，匹配行业新接口规范 |
| [#8675](https://github.com/QwenLM/qwen-code/pull/8675) | **Web Shell 模型级推理控制** | 新功能 | 注册中心统一管理 Thinking/Effort，首个注册项 `qwen3.8`，端到端打通 Core/ACP/SDK/WebShell |
| [#8937](https://github.com/QwenLM/qwen-code/pull/8937) | **新增钉钉 Workspace 渠道** | 新功能 | 与现有钉钉 Bot 渠道并存，使用本地 `dws` CLI 配置文件，支持 @ 消息与群/直发 |
| [#8467](https://github.com/QwenLM/qwen-code/pull/8467) | **Web Shell Git diff 来源与分支切换** | 新功能 | 涵盖 Uncommitted/Unstaged/Staged/Committed/Branch 对比，可搜索可滚动 |
| [#8905](https://github.com/QwenLM/qwen-code/pull/8905) | **守护进程 live-journal 容量自适应扩容** | 性能 | 在截断旧条目前优先翻倍扩容，按 entries/bytes 等比扩展 |
| [#8585](https://github.com/QwenLM/qwen-code/pull/8585) | **支持点分次版本号 Claude 别名** | Bugfix | 兼容 LiteLLL/Vertex/Bedrock 的 `claude-opus-4.8` 风格命名，同步加入 Opus 5 token 上限 |
| [#8260](https://github.com/QwenLM/qwen-code/pull/8260) | **保留每个推理回合的 thoughtSignature** | Bugfix | 修复 Anthropic/Google 多并行工具调用时签名丢失导致上下文断裂 |

> 维护者动态：wenshao 主导的 CI/Review/Autofix 三层基础设施持续加固（#8956, #8960, #8961, #8903, #8778, #8777, #8958），反映出项目已建立成熟的 Agent 自审自修流水线。

---

## 📈 功能需求趋势

1. **🖥️ 终端渲染质量**（最紧迫）
   tmux / iTerm / 跨 SSH 场景下的闪烁、画面撕裂、VP 模式 Ctrl+S 不展开（[#8634](https://github.com/QwenLM/qwen-code/issues/8634)）、CJK 标点吞入超链接（[#8750](https://github.com/QwenLM/qwen-code/issues/8750)）等问题在 0.21.x 版本集中暴露，已成为近一周最高频反馈。

2. **🛰️ 守护进程与多工作区会话模型**（战略级）
   `qwen serve` 的内存分配（#8182）、多 workspace 路由（#8909）、ACP 计划任务持久化（#8837）、独立无工作区会话（#8908）、以及资源保护拆分（#8091）构成一条完整的演进主线，doudouOUC 的 #8678 是这一系列的总跟踪。

3. **🤖 ACP 协议与企业渠道扩展**
   ACP 推理强度 5 档配置已落地（[#8514](https://github.com/QwenLM/qwen-code/issues/8514)），钉钉 Workspace 渠道（#8937）正在落地，渠道生态从单点工具向"多入口协作"演进。

4. **🧠 推理与多模型互操作**
   OpenAI Responses API（#8169）、Claude 点分版本（#8585）、Anthropic reasoning signature 保留（#8260）、Qwen 3.x 模型级 thinking/effort 控制（#8675）共同勾勒出"多模型推理正确性"主题。

5. **🖼️ Web Shell / Inline 图片体验**
   文件上传（#8874）、Git 视图（#8467）、图片预览（v0.21.10 新功能）、行内图片性能（#8608）、背景代理 footer 延迟（#8787）共同构成 Web Shell 体验闭环。

6. **🛡️ 安全与供应链**
   跨 worktree Git 防护（#8687）、npm 漏洞治理（#8944）、保留字符 subagent id（#8717）显示安全治理进入常态化。

7. **⚙️ CI/Review 自动化**
   自审自修（#8960、#8958、#8961）、增量评审（#8946）、3B 分块评审（#8903）、Maven 多模块验证（#8777）反映"AI 维护 AI 代码"流水线日趋成熟。

---

## 👨‍💻 开发者关注点

**高频痛点（按反馈密度排序）：**

- 🎯 **tmux/iTerm 渲染回归**：v0.21.x 推出 VP 模式后，多位 mac+SSH+tmux 用户报告持续闪屏，已有 3 条独立 Issue 提交，影响重度远程开发场景。
- ⚠️ **Headless 模式错误语义错乱**：stream-json 等结构化输出本应作为自动化管道接口，但 #8920 暴露的"API 错误返回 exit 0 + success result"会直接破坏 CI 流水线告警逻辑。
- 📉 **守护进程多进程资源争抢**：#8182 的 50% 宿主内存分配 bug 在多子进程场景下易触发 OOM，是企业级部署的关键障碍。
- 📄 **`--help` 与真实参数不一致**：#8897 揭示 CLI 文档与实现脱节，会让脚本编写者在首次使用时踩坑。
- 🪟 **Windows 平台细节**：#8644 反映文件链接冒号编码问题在 Windows 上直接影响 VS Code 集成。
- 🔁 **Provider/模型切换 UX 误导**：#8504（closed）与 #8948 共同说明，provider 更新流程中的文案/状态机同步是体验短板。

**高频需求：**

- 想在 tmux/远程/小窗口下稳定使用（多项 #8562、#8901、#8962 共同诉求）
- 想让守护进程支持更细粒度的资源隔离与无工作区独立会话（#8091、#8908）
- 想在 ACP/SDK/CLI/IDE 各入口统一推理强度配置（#8514、#8675）
- 想得到更可靠的自动化评审与错误信号（#8946、#8920）

---

> 📊 **日报小结**：今天 Qwen Code 处于"主线版本稳态、基础设施深耕、UX 反馈爆发"的

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**📅 2026-08-12**

---

## 1. 今日速览

今日社区活跃度集中在 **架构重构** 与 **TUI 体验修复** 两大主线：aboimpinto 推进的 **CodeWhale TUI Crate 分解 EPIC** 引发治理讨论，而 M-Maciej 报告的 **宽屏终端输出区域被截断回归**（v0.8 → v0.9）成为最受关注的体验问题。PR 侧，ACP 工具暴露能力（#5225）合并落地，OrcaRouter 第三方模型网关接入、Windows 终端画中画等多项功能并行推进。

---

## 2. 版本发布

过去 24 小时内无新版本发布。近期仍处于 **v0.9.x** 迭代周期，建议关注 #5322 宽屏回归修复的下版本纳入。

---

## 3. 社区热点 Issues

> 今日仅有 2 条活跃 Issue，全部列出如下：

| # | 标题 | 状态 | 关注理由 |
|---|------|------|----------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate 分解（Umbrella）** | OPEN | 这是仓库级架构治理的"伞形 EPIC"，所有子 EPIC 与 FEAT 完成后需回报至此处。涉及模块边界、crate 拆分、依赖解耦，是后续多人协作与发布节奏的基础工程。 |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **[Bug] 回归：输出区域无法填充宽屏终端（v0.8.65 曾正常）** | OPEN | 明确的回归性问题，影响宽屏用户（如 4K 显示器、外接显示器开发者）。问题描述清晰并附有复现步骤，社区反应迅速（已 1 条讨论），优先级应较高。 |

📌 *提示：今日 Issue 数量较少，建议结合 PR 动态评估整体工作节奏。*

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 要点 |
|---|------|------|------|------|
| [#5318](https://github.com/Hmbown/CodeWhale/pull/5318) | **feat(tui): 将宿主终端窗口固定为画中画迷你窗口** | SparkofSpike | OPEN | Windows 平台新增"缩放并置顶"（PiP）能力：右键菜单或 `/pin` 命令将终端窗口缩为 640×400 并置顶，再触发恢复原尺寸与最大化状态。提升多任务场景下的可观察性。 |
| [#5321](https://github.com/Hmbown/CodeWhale/pull/5321) | **feat: 注册 OrcaRouter 为命名 provider** | XiaoHuo888-hue | OPEN | 新增 OrcaRouter（OpenAI 兼容网关）作为官方 provider，凭 `ORCAROUTER_API_KEY`（`sk-orca-` 前缀）即可解锁 150+ 模型。模型选择器、配置参考、文档同步更新。 |
| [#5320](https://github.com/Hmbown/CodeWhale/pull/5320) | **fix(session): 分离快照读取与崩溃恢复** | h3c-hexin | OPEN | 新增无副作用的 `load_session_snapshot`，并通过 `recover_session_for_resume` 暴露修复统计，使嵌入宿主仅在已知进程/引擎重启后恢复，并在自有 transcript 锁下持久化。提升会话可靠性与并发安全。 |
| [#5319](https://github.com/Hmbown/CodeWhale/pull/5319) | **fix(tui): 复制消息时去除视觉导轨** | XhesicaFrost | OPEN | 修复 User/Assistant 单元格的"复制消息"功能：复制规范化源内容而非渲染后的 Ratatui 行；Tool/Thinking/System 等复杂单元格仍走完整路径，避免完整输出与语义降级。附回归测试。 |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | **feat(acp): 通过 session/prompt 暴露 file/search/git/patch/shell 工具** | rafaelcavalheri | ✅ **MERGED** | 关键能力升级：ACP server 之前仅流式返回模型文本，从未执行模型请求的工具调用。合并后 Zed、第三方 `acp-deepseek-adapter` 等集成可获得真正具备代码编辑能力的 Agent，而非仅聊天能力。 |
| [#5277](https://github.com/Hmbown/CodeWhale/pull/5277) | **build(deps): 升级 docker/login-action 4.5.2 → 4.6.0** | dependabot | OPEN | GitHub Actions 依赖维护升级，4.6.0 包含硬化（hardening）改进，建议尽快合并以维持 CI 供应链安全。 |

---

## 5. 功能需求趋势

从今日更新可提炼出以下社区关注方向：

🔹 **架构治理与模块化**：EPIC-005 (#5316) 表明项目正在从单体 crate 走向多 crate 分解，预示后续可扩展性、发布独立性、贡献门槛降低。

🔹 **多 Provider / 模型生态扩展**：OrcaRouter (#5321) 的接入说明第三方模型网关成为新方向，未来或涌现更多 OpenAI 兼容网关统一接入。

🔹 **会话可靠性与可恢复性**：#5320 将快照读取与崩溃恢复解耦，反映社区对长会话、嵌入式宿主场景下数据一致性的重视。

🔹 **终端体验打磨**：宽屏回归 (#5322)、复制消息视觉导轨 (#5319)、Windows PiP 置顶 (#5318) 三项改动均聚焦 TUI 交互细节，开发者对"日常使用质感"要求持续提升。

🔹 **Agent / 工具调用能力下沉**：#5225 将文件、搜索、Git、Patch、Shell 工具暴露至 ACP 协议，使 TUI 不再是"只读聊天窗口"，而是真正的 Agent 宿主。

---

## 6. 开发者关注点

综合 Issues 与 PR 反馈，社区痛点与高频需求集中于：

- ⚠️ **回归问题被严苛对待**：v0.8 → v0.9 升级中的宽屏截断被视为严重体验下降，社区期望版本间兼容性测试与回归门禁。
- 🛡 **崩溃恢复与并发安全**：嵌入式宿主对"快照只读 vs 恢复写"的边界明确化，反映出对数据完整性、协作式会话场景的深度诉求。
- 🧩 **复制/导出内容的"语义保真"**：复制消息时去除 Ratatui 渲染行、保留原始 markdown 结构，是开发者常被忽视但高频触发的需求。
- 🌐 **模型生态开放性**：越来越多 OpenAI 兼容网关被纳入，体现"多模型可插拔"而非"绑定单一供应商"的偏好。
- 🔧 **Agent 工具的真实落地**：仅流式文本已无法满足需求，外部编辑器（Zed、社区适配器）需要完整工具链才能让 TUI 成为生产级 Agent。
- 🪟 **跨平台终端细节**：Windows 窗口置顶 / PiP 等 OS 级集成需求浮现，意味着 TUI 正在向"轻量 IDE 替代品"演进。

---

*📊 报告生成时间：2026-08-12 ｜ 数据来源：GitHub Issues & Pull Requests API*
*🔗 仓库：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*