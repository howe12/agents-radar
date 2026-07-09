# AI CLI 工具社区动态日报 2026-07-09

> 生成时间: 2026-07-09 05:53 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具社区动态横向对比报告
**日期：2026-07-09** ｜ 数据来源：8 个仓库公开 GitHub 数据

---

## 1. 生态全景

2026 年 7 月的 AI CLI 工具生态已进入 **"基础设施收敛 + 体验差异化"** 阶段：一方面，OpenTelemetry 追踪（Codex 大集群 PR）、SQLite 会话持久化（Codex #30131）、原子化安全补丁（Gemini 三个 RCE 修复）等**底层工程基线**正在各工具间趋同；另一方面，AGENTS.md 标准化（Claude Code #6235, OpenCode #14862）、多 Agent 编排（Pi #5700, Qwen #6378, DeepSeek Fleet）等**上层能力路线**开始分化。GPT-5.5 上线触发的"速率限制+工具调用回归"集群（Codex #31611 系列）和 Gemini 子代理"挂起/状态失真"问题（#21409/#22323），暴露出**新模型发布与多平台 CLI 稳定性之间的工程化矛盾**仍是行业级痛点。

---

## 2. 各工具活跃度对比

| 工具 | 新 Release | 热门 Issues 数 | PR 更新数 | 今日状态特征 |
|------|-----------|--------------|----------|-------------|
| **Claude Code** | ✅ v2.1.205 | 10（Top 👍 4337） | 4 | 安全加固为主，AGENTS.md 议题长期霸榜 |
| **OpenAI Codex** | ✅ 0.144.0-alpha ×3 | 10（Top 👍 708） | 10 | OTEL 大重构 + GPT-5.5 回归修复双线 |
| **Gemini CLI** | ✅ v0.50.0 + v0.51.0-preview | 10（Top 👍 8） | 10 | v0.52.0 nightly 失败；3 个 RCE 修复集中合入 |
| **Copilot CLI** | ❌ | 10（Top 👍 99） | 0 | 自定义 slash 命令 #618 终于 CLOSED |
| **Kimi Code CLI** | ❌ | 2 | 2 | 仓库最安静，仅企业 SSL 与配额问题 |
| **OpenCode** | ❌ | 10 | 10 | Bun canary 升级 + 桌面/Provider 文档双线 |
| **Pi** | ❌ | **43** ⭐ | 9 | 今日 Issue 量冠军，compact 与 Provider 适配集中爆发 |
| **Qwen Code** | ✅ v0.19.8 | 10 | 10 | 多 Workspace RFC（#6378）引发 19 评论热议 |
| **DeepSeek TUI** | ❌ | 10 | 10 | v0.8.68 收束日，Android arm64 与 xAI provider 同日落地 |

> **观察**：Pi 以 43 条 Issue 显著领先，主要源于同一位提交者集中提交 compaction 系列（#6424-6429）。若排除该批量化提交，多数工具的有效新 Issue 量在 8–15 条区间。

---

## 3. 共同关注的功能方向

### 3.1 跨工具的 Agent 配置标准化（AGENTS.md）
- **Claude Code** #6235（👍 4337，全榜最高）倡议支持 AGENTS.md
- **OpenCode** #14862：Big Pickle 不遵守 AGENTS.md 已被标记 CLOSED
- **行业含义**：Codex、Amp、Cursor 已在向 AGENTS.md 收敛，"开放 vs 封闭"成为 Claude Code 用户最大诉求。

### 3.2 自动压缩（Auto-compaction）脆弱性
- **Copilot CLI** #3144–#3158（13 条批量 CLOSED）：217 轮零产出的死循环
- **Pi** #6424/#6425/#6426/#6429：阈值压缩留尾巴、分块失败无 backoff、降级链路缺失
- **行业含义**：长会话场景普及后，"压缩后续会话恢复的可靠性"已成基础设施级挑战。

### 3.3 子代理/Sub-agent 可靠性
- **Gemini** #22323（命中 MAX_TURNS 仍报 GOAL）、#21409（generalist 永久挂起）
- **Qwen Code** #6505/#6569（LoopDetection 不覆盖子代理）
- **DeepSeek TUI** #4042（`--disallowed-tools` 仅 session 级生效）
- **行业含义**：从"能不能调子代理"到"能不能信任子代理状态汇报"，是 2026 下半年的共性工程焦点。

### 3.4 多 Provider / 模型成本透明度
- **Claude Code** #38335（Max 额度异常，791 评论）
- **Codex** #28879（Plus 5h 配额成本涨 10–20 倍，353 👍）、#14593（token 消耗过快）
- **Kimi** #2318（TPD 限流计算质疑）
- **行业含义**：订阅经济下"配额计算逻辑不透明"普遍侵蚀用户信任。

### 3.5 桌面端 / 跨平台稳定性
- **Codex** #11023（Linux Desktop，708 👍 全仓库历史前列）
- **OpenCode** #32473（renderer 崩溃）、#26180（Windows 挂起）
- **Gemini** #21983（Wayland 浏览器子代理失败）
- **DeepSeek TUI** #4236（Termux/Android 史诗级 epic）
- **行业含义**：桌面端的"长尾平台"（Wayland/NFS/CentOS 7/Termux）是差异化体验的关键战场。

### 3.6 可观测性（OTEL/Cache 追踪）
- **Codex** 一次性 10+ 个 PR 重构 exec-server/app-server 的 RPC span
- **Pi** PR #6427（核心维护者 mitsuhiko 亲自提交）引入 **prompt cache miss 追踪**
- **DeepSeek** PR #4271（workflow 记录类型化 UI 事件）
- **行业含义**：开发者从"能用"走向"可诊断、可调优"，可观测性已是新一代 CLI 的标配诉求。

### 3.7 安全 RCE / 供应链修复
- **Gemini** #28319（a2a-server workspace trust）、#28232（CI supply chain RCE）、#28330（IDE Companion TOCTOU）
- **Codex** #31732（Guardian 自审 + 自定义 provider）
- **DeepSeek** #4272（新增 RustSec cargo-audit/deny）
- **行业含义**：Agent 工具获得本地执行权限后，安全边界成为一等公民议题。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | Anthropic 生态深度集成 | Max 付费开发者、企业用户 | 单生态深耕，对外开放性弱 |
| **OpenAI Codex** | GPT-5 模型 + 完整桌面应用 | 全栈开发者、订阅用户 | Rust 实现，OTEL/SQLite 等企业级基建领先 |
| **Gemini CLI** | Agent + Auto Memory | 研究型/实验型用户 | 评估驱动（76 项 behavior eval），子代理为中心 |
| **Copilot CLI** | GitHub 生态 + IDE 对齐 | GitHub 全栈用户、企业 | 追求与 VS Code 扩展的能力对等 |
| **Kimi Code CLI** | 中文市场 + 长上下文 | 中文开发者 | 维护节奏平稳，企业场景待加强 |
| **OpenCode** | 多 Provider + 桌面 GUI | 跨模型爱好者 | Bun 运行时，AI SDK 抽象层 |
| **Pi** | 极简 TUI + 多 Runtime | 个人极客开发者 | Node/Bun 双 runtime，可观测性见长 |
| **Qwen Code** | 渠道集成 + 多 Workspace | 阿里云生态、企业团队 | Channel（WeCom/DingTalk）+ Daemon 架构 |
| **DeepSeek TUI** | Fleet 多 Agent + Android | 多 Agent 重度用户 | AgentProfile 统一抽象，Termux 一级支持 |

**关键差异化信号**：
- **企业级基建深度**：Codex > Qwen > Gemini > 其他
- **多 Provider 开放度**：OpenCode/DeepSeek/Pi > Copilot/Claude Code
- **桌面/GUI 投入**：Codex > OpenCode > Copilot > 其他
- **中国市场本地化**：Qwen Code（渠道）> Kimi > 其他（Kimi 仅 2 条 Issue）

---

## 5. 社区热度与成熟度

### 5.1 热度梯队

| 梯队 | 工具 | 判定依据 |
|------|------|---------|
| **T1 超高活跃** | Claude Code、Codex、Gemini | 均有 400+ 赞的长期议题、持续 PR 流量、版本节奏稳定 |
| **T2 高活跃** | Pi、Qwen Code、OpenCode | Issue/PR 体量充足（10+/10+），架构演进活跃 |
| **T3 中活跃** | Copilot CLI、DeepSeek TUI | 议题分散，多为体验型而非架构型 |
| **T4 维护期** | Kimi Code CLI | 仅 2 条 Issue，节奏偏慢，可能处于稳定期或资源收缩 |

### 5.2 成熟度信号

- **最成熟的工程体系**：Codex（OTEL 大集群、SQLite 迁移、alpha→stable 流水线）
- **最激进的架构演进**：Qwen Code（多 Workspace RFC #6378）、DeepSeek（Fleet/AgentProfile 合并）
- **最多遗留 TUI 痛点**：Claude Code（#826 跨 14 个月未修复）
- **最快 bug 闭环**：Gemini（3 个 RCE 同日合入）、Copilot（auto-compaction 13 条批量关单）

---

## 6. 值得关注的趋势信号

### 6.1 行业级三大趋势

**① 新模型上线后的"工具调用回归"成为新常态**
GPT-5.5 上线触发的 Codex v0.143.0 跨平台崩溃（`unsupported call: exec_commandexec_command` 重复 namespace）说明：模型能力跃迁与工具协议的兼容性矛盾，将在每一次旗舰模型迭代中重演。**对开发者的参考**：关注自家 CLI 是否锁定特定模型的 tool schema，以及是否能在模型切换时优雅降级。

**② 可观测性从"加分项"变为"准入门槛"**
Codex 一次性提交 10+ 个 OTEL PR、Pi 引入 cache miss 追踪、DeepSeek 引入 WorkflowUiEvent——三家不同体量的项目同日强化可观测性，反映**"Agent 系统的非功能性需求"已与功能需求并列**。**对开发者的参考**：评估 AI CLI 工具时，tracing/logging 完整度应进入选型 checklist。

**③ 跨工具互操作协议成为下一战场**
AGENTS.md（Claude Code #6235、OpenCode #14862）、Agent-to-Agent 协议（Claude Code #28300）、Fleet/AgentProfile 抽象（DeepSeek）——这三者指向同一方向：**单生态工具的天花板已被触及，跨工具协作协议是 2027 年的关键变量**。

### 6.2 给技术决策者的具体建议

| 场景 | 推荐关注 | 理由 |
|------|---------|

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据来源**：`github.com/anthropics/skills` · 截止日期：2026-07-09

---

## 一、热门 Skills 排行（按社区关注度）

> 注：原始数据 PR 评论数显示为 `undefined`，以下排序综合 PR 关联 Issue 评论数、👍 数及交叉讨论热度综合评估。

### 1. 🛠️ skill-creator 修复集群（#1298 / #1323 / #1261 / #1099 / #1050）
- **功能**：Claude Code 官方"创建 Skill"的工具集，本批 PR 集中修复 `run_eval.py` 触发检测失效（recall 永远 0%）、Windows 子进程崩溃、UTF-8 越界、并发隔离等核心 Bug
- **社区热点**：直接对应 Issue #556（12 评论 👍7）、#1169、#1061，是整个仓库评论数最高的技术债集群——描述优化循环目前"在优化噪声"
- **状态**：全部 OPEN
- 链接：[#1298](https://github.com/anthropics/skills/pull/1298) · [#1323](https://github.com/anthropics/skills/pull/1323) · [#1261](https://github.com/anthropics/skills/pull/1261) · [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050)

### 2. 📄 document-typography（#514）
- **功能**：检测/修复 AI 生成文档中的孤词换行（orphan）、寡行段落（widow）、编号错位等排版问题
- **社区热点**：解决"几乎每份 Claude 生成的文档都中招"的痛点，覆盖 PDF/DOCX/PPTX 三大文档 Skill
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/514

### 3. 📝 ODT Skill（#486）
- **功能**：OpenDocument 格式（.odt/.ods/ODF）创建、模板填充及 ODT→HTML 转换
- **社区热点**：补齐 LibreOffice/开源 ISO 文档格式支持，与既有 PDF/DOCX/PPTX 形成完整覆盖
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/486

### 4. 🧪 testing-patterns（#723）
- **功能**：覆盖完整测试栈的工程实践 Skill——Testing Trophy 模型、AAA 模式、React Testing Library、契约测试、性能/E2E
- **社区热点**：呼应社区对"工程类 Skills"日益增长的需求
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/723

### 5. 🎨 color-expert（#1302）
- **功能**：通用色彩知识 Skill，覆盖 ISCC-NBS/Munsell/XKCD/RAL 等命名系统、OKLCH/OKLAB/CAM16 色彩空间决策表
- **社区热点**：作者 meodai 是知名色彩工具开发者，社区期待"小而专"的高质量垂直 Skill
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1302

### 6. ✅ self-audit（#1367，v1.3.0）
- **功能**：交付前的自审 Skill——先做机械文件核验，再做四维度（损坏严重度优先）推理质量门禁
- **社区热点**：跨技术栈/跨模型的"通用质量守门员"，契合社区对 Skill 输出可靠性的诉求
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1367

### 7. 🔍 skill-quality-analyzer + skill-security-analyzer（#83）
- **功能**：五维度质量分析（结构 20% + 其他维度）+ Skill 安全分析
- **社区热点**：与 Issue #492（安全/命名空间滥用，34 评论）形成直接呼应
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/83

### 8. 🖼️ frontend-design 改进（#210）
- **功能**：重构 frontend-design Skill 的可执行性与内部一致性
- **社区热点**：解决"指令不可被 Claude 在单次会话内执行"的问题
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/210

---

## 二、社区需求趋势（来自 Issues）

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| 🔐 **Skill 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 滥用 `anthropic/` 命名空间 | **34 评论** · 单 Issue 最高热度 |
| 🏢 **企业级组织共享** | [#228](https://github.com/anthropics/skills/issues/228) Org-wide 共享 Skill 库 | 14 评论 👍7 |
| 🧠 **代理状态压缩/记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案（符号化压缩 agent 自身记忆） | 9 评论 |
| 🛡️ **Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance（策略执行/威胁检测/审计） | 6 评论（已 CLOSED） |
| 🧩 **Skill↔MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) 把 Skill 暴露为 MCP | 4 评论 |
| ☁️ **多平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 接入、#1061 Windows 兼容 | 4+3 评论 |
| 🩹 **稳定性与去重** | [#189](https://github.com/anthropics/skills/issues/189) document-skills/example-skills 内容重复 | 6 评论 👍9 |
| 📦 **Skill 创作最佳实践** | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 应转向 operational 而非教学风格 | 8 评论（已 CLOSED） |

**趋势关键词**：`安全信任 > 协作共享 > 代理自治理 > 跨平台兼容 > 创作工具链`

---

## 三、高潜力待合并 PR（活跃 + 未合）

| PR | Skill | 亮点 | 链接 |
|---|---|---|---|
| **#1298** | skill-creator 全面修复 | 解决 recall=0% 系统性 Bug，10+ 复现；影响所有 Skill 描述优化 | [🔗](https://github.com/anthropics/skills/pull/1298) |
| **#1261** | trigger-eval 隔离 | 修复并发评测污染用户项目 `.claude/commands/` 的安全/正确性问题 | [🔗](https://github.com/anthropics/skills/pull/1261) |
| **#1367** | self-audit v1.3.0 | 跨栈通用质量门禁，破坏性更新 | [🔗](https://github.com/anthropics/skills/pull/1367) |
| **#514** | document-typography | 覆盖面广，痛点明确 | [🔗](https://github.com/anthropics/skills/pull/514) |
| **#83** | skill-quality/security-analyzer | 与 #492 安全议题直接配套 | [🔗](https://github.com/anthropics/skills/pull/83) |
| **#486** | ODT | 补齐开源文档格式，呼声持续 | [🔗](https://github.com/anthropics/skills/pull/486) |
| **#723** | testing-patterns | 工程化 Skill 标杆候选 | [🔗](https://github.com/anthropics/skills/pull/723) |
| **#1302** | color-expert | 垂直深度 Skill 典型 | [🔗](https://github.com/anthropics/skills/pull/1302) |

---

## 四、Skills 生态洞察

> **社区当前最集中的诉求是：在 "能写出 Skill" 之前，先解决 "能放心跑 Skill" 的问题——** 即从单纯堆功能转向 **评测可信度（recall=0% 修复）、跨平台兼容（Windows/Windows 编码）、安全命名空间（Issue #492）、组织级共享（Issue #228）** 四位一体的基础设施治理；skill-creator 本身的 Bug 修复集群占据 PR 榜近半数，正是这一转向的最直接信号。

---

*本报告基于公开 PR/Issue 标题、摘要、评论数、👍 数及交叉引用综合分析，评论数为 0 仅指 PR 维度；关联 Issue 的高互动已作为热度代理指标纳入。*

---

# Claude Code 社区动态日报 · 2026-07-09

---

## 📌 今日速览

Claude Code 今日发布 **v2.1.205**，新增 session transcript 防篡改规则并修复 `--json-schema` 的若干静默缺陷；社区层面，**AGENTS.md 标准化支持**（#6235）持续占据最高呼声（👍4337），而 `/buddy` 命令在 v2.1.97 静默移除后引发用户集体请愿（#45596，👍1149），付费 Max 用户的会话额度异常耗尽问题（#38335，791 评论）仍未得到官方响应。

---

## 🚀 版本发布

### v2.1.205（今日发布）

| 类别 | 变更 |
|---|---|
| 🔒 安全 | 新增 auto mode 规则，阻止对 session transcript 文件的篡改操作 |
| 🐛 修复 | `--json-schema` 在 schema 无效时不再静默输出非结构化结果 |
| 🐛 修复 | 使用 `format` 关键字的 schema 不再被无理由拒绝 |
| 🐛 修复 | 修复了 Claude 在工作期间用户发送的消息丢失（changelog 截断） |

> 变更日志文本存在截断，建议关注 [完整 Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.205)

---

## 🔥 社区热点 Issues

以下按"评论活跃度 × 社区赞同度 × 行业代表性"综合排序：

### 1. [#38335 Max 计划会话额度自 2026-03-23 起异常耗尽](https://github.com/anthropics/claude-code/issues/38335)
💬 791 · 👍 468 · 标签：`BUG invalid`
大量 Max 5x 订阅用户反馈 CLI 用量极低情况下仍被判定额度耗尽。该 bug 跨版本无法复现规律，影响付费体验，评论区反复要求官方给出 quota 计算逻辑说明，至今未获官方明确修复表态。

### 2. [#6235 支持 AGENTS.md 标准化协议](https://github.com/anthropics/claude-code/issues/6235) ⭐
💬 333 · 👍 **4337** · 标签：`enhancement memory`
全榜 👍 最高的 issue。Codex、Amp、Cursor 已在向 AGENTS.md 收敛，作者倡议 Claude Code 走出 `CLAUDE.md` 单生态封闭，引入跨 agent 的 Markdown 配置文件。是开发者最关心的"开放性"诉求。

### 3. [#45596 Bring Back Buddy — 社区集体请愿](https://github.com/anthropics/claude-code/issues/45596) ⭐
💬 262 · 👍 **1149** · 标签：`enhancement skills TUI`
v2.1.97 静默移除 `/buddy` 命令，无 changelog 说明，开发者对"无声 break change"表达强烈不满。代表了一种产品向 vs. 工程师文化的冲突。

### 4. [#826 Console 在 Claude 输出文本时自动滚动到顶部](https://github.com/anthropics/claude-code/issues/826)
💬 352 · 👍 **688** · 标签：`BUG platform:macos`
跨度近 14 个月的 macOS 终端长期 bug，iTerm2 下复现率高，长期未进入 Sprint 修复，是 TUI 体验积累的"陈年痛点"。

### 5. [#769 In-progress 工具调用导致 TUI 屏幕闪烁](https://github.com/anthropics/claude-code/issues/769)
💬 305 · 👍 299 · 标签：`BUG TUI tools`
与 #826、#1913 同属 TUI 渲染层问题，Windows Terminal 与 Ubuntu 均受影响，多个 thread 标记为 duplicate 后仍有人回帖补充。

### 6. [#27302 支持同一 Connector 多个账户](https://github.com/anthropics/claude-code/issues/27302)
💬 210 · 👍 299 · 标签：`enhancement`
企业用户在 Claude 与 claude.ai/code 频繁切换个人 / 团队 / 客户工作区时被强制登出登入，影响多账号开发者体验。

### 7. [#17432 印度本地化（INR）定价计划](https://github.com/anthropics/claude-code/issues/17432)
💬 205 · 👍 469 · 标签：`enhancement cost`
OpenAI / Google 都已提供 INR 方案，Claude 仍是单一 USD，导致印度开发者面临支付、税务与汇率三重摩擦。

### 8. [#15942 添加 Visual Studio 2026 集成](https://github.com/anthropics/claude-code/issues/15942)
💬 138 · 👍 **386** · 标签：`enhancement IDE`
要求官方提供 Visual Studio（区别于 VS Code）扩展，承诺 Windows 上 LTSC 用户仍占据的庞大市场。

### 9. [#28300 跨机器多 Agent 协作（Agent-to-Agent 协议）](https://github.com/anthropics/claude-code/issues/28300)
💬 32 · 👍 0 · 标签：`enhancement MCP agents`
作为 MCP 衍生的"协议层"愿景性问题，要求 Anthropic 提供跨主机 Agent 发现、握手与任务分发规范，是 #6235 的"上层建筑"。

### 10. [#24055 BUG: 输出超过 32000 tokens 时静默失败](https://github.com/anthropics/claude-code/issues/24055)
💬 136 · 👍 85 · 标签：`BUG TUI API oncall`
长输出任务（文档生成、批量重构）在此处断流，且没有任何 fallback 拆分逻辑。代表一类"沉默失败 + 难以排查"的工程化痛点。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时 PR 活跃度较低，仅 4 条更新，但涵盖运维、协议与插件三条主线：

| # | 标题 | 价值方向 |
|---|---|---|
| [#75938 fix(sweep): unstarve markStale via search API](https://github.com/anthropics/claude-code/pull/75938) | 用 GitHub Search API 重写"陈旧 issue 打标"逻辑，避免遍历 10×100 列表时的 starvation |
| [#41447 feat: open source claude code ✨](https://github.com/anthropics/claude-code/pull/41447) | 社区长期要求开源的"重复 issue"合集 PR（链接 #59、#456、#2846、#22002、#41434） |
| [#75541 fix(sweep): paginate issue events](https://github.com/anthropics/claude-code/pull/75541) | 修

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-09

> 数据来源：github.com/openai/codex ｜ 统计窗口：过去 24 小时

---

## 📌 今日速览

今日 Codex 进入 **0.144.0 alpha 迭代周期**（24h 内连发三个 alpha 版本），社区焦点高度集中在两件事：**GPT-5.5 模型上线后引发的"工具调用 + 速率限制"双重故障**（多个高赞 issue + v0.143.0 CLI 回归），以及 **OpenAI 团队对 OTEL 分布式追踪基础设施的大规模重构**（10 余个 PR 集中处理 exec-server / app-server 的 tracing）。与此同时，用户对 **Linux 桌面应用**的需求持续保持高热度（708 👍）。

---

## 🚀 版本发布

**rust-v0.144.0-alpha.4 / alpha.2 / alpha.1**（24 小时内连续发布）——OpenAI 已开启 0.144 大版本的 alpha 预发布通道。鉴于 alpha 节奏紧凑（一个晚上三个版本），推测本轮主要是修复 0.143.0 引入的 `exec_command` / `shell_command` 工具调用回归问题（见下方 Issue #31611、#31639、#31665、#31697、#31702、#31715、#31727），仍处于内测阶段，**不建议生产环境升级**。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关注理由 |
|---|-------|------|---------|
| 1 | [**#14593**](https://github.com/openai/codex/issues/14593) Token 消耗过快（627 评论 · 279 👍）| ⭐⭐⭐ | 开源区"长寿"高赞 bug，自 3 月延续至今，反映 **Codex 商业订阅下 token 计费模型**长期未解决的痛点。 |
| 2 | [**#28879**](https://github.com/openai/codex/issues/28879) Plus 订阅 5h 预算被快速耗尽（202 评论 · **353 👍**）| ⭐⭐⭐ | 自 6 月 16 日起 `gpt-5.5` 速率限制成本暴增 10–20 倍，点赞数在近期 issue 中最高，**直接关系到订阅用户留存**。 |
| 3 | [**#30364**](https://github.com/openai/codex/issues/30364) GPT-5.5 推理 token 聚簇（163 评论 · 270 👍）| ⭐⭐⭐ | 揭示 `reasoning_output_tokens` 在 516/1034/1552 的固定边界聚集现象，**疑似触发模型降级**，技术深度较高。 |
| 4 | [**#11023**](https://github.com/openai/codex/issues/11023) Linux 版 Codex Desktop 应用（152 评论 · **708 👍**）| ⭐⭐⭐ | 历史最受欢迎的 enhancement 之一，长期未合并，反映官方在 **跨平台桌面版支持上的优先级错配**。 |
| 5 | [**#29072**](https://github.com/openai/codex/issues/29072) Windows 沙盒启动路径错误（41 评论 · 23 👍）| ⭐⭐ | 与 **#31708**（同源问题新报告）形成集群，Windows 沙盒的 `codex-windows-sandbox-setup.exe` 定位 bug。 |
| 6 | [**#31665 / #31611 / #31697 / #31702 / #31715 / #31727**](https://github.com/openai/codex/issues/31665) **v0.143.0 工具调用回归集群** | ⭐⭐⭐ | 多平台（macOS / Linux / Windows / Amazon Linux）同时报告 `unsupported call: exec_commandexec_command`、`shell_commandshell_command` 等错误，**疑似 GPT-5.5 把工具 namespace 重复附加**，已在多个渠道确认，回归面广。 |
| 7 | [**#18553**](https://github.com/openai/codex/issues/18553) Codex Desktop 终端字体渲染异常（15 评论 · 29 👍）| ⭐⭐ | 自 4 月延续至今未修复，影响桌面端可用性，**与 Linux 版缺失共同构成桌面端体验短板**。 |
| 8 | [**#18993**](https://github.com/openai/codex/issues/18993) VS Code 扩展无法打开历史会话（47 评论 · 53 👍）| ⭐⭐ | **已于今晨关闭**，意味着 0.143 系列已发布修复。 |
| 9 | [**#31520**](https://github.com/openai/codex/issues/31520) CLI 更新脚本解析失败（12 评论 · 25 👍）| ⭐ | 已关闭，且对应修复已合入 [**#31667**](https://github.com/openai/codex/pull/31667) — 标准的"issue → PR"闭环案例。 |
| 10 | [**#20851**](https://github.com/openai/codex/issues/20851) CLI 一等公民支持 Computer Use（9 评论 · 12 👍）| ⭐⭐ | Computer Use 当前仅以 Desktop App 插件形式存在，**将之纳入 CLI 是关键的扩展边界**。 |

---

## 🛠 重要 PR 进展

| # | PR | 方向 | 说明 |
|---|----|----|------|
| 1 | [**#31667**](https://github.com/openai/codex/pull/31667) 修复 installer JSON 解析 | 🔧 修复 | 解决 #31520 — 处理 GitHub 最新版接口可能返回单行紧凑 JSON 的边界情况。 |
| 2 | [**#31566**](https://github.com/openai/codex/pull/31566) 复用技能清单加载 | ⚡ 性能 | 远端环境启动时 **避免对 exec-server 发送成百上千次目录/元数据请求**，对高延迟连接体验改善明显。 |
| 3 | [**#28307**](https://github.com/openai/codex/pull/28307) TUI follow-up 队列下放 app-server | ✨ 功能 | User Message Queue 队列从 TUI 内存迁移至 app-server，**跨进程存活**，与其他客户端共享同一 idle 队列。 |
| 4 | [**#31176**](https://github.com/openai/codex/pull/31176) 模型容量错误后重试目标 | ✨ 功能 | 区分"容量错误"与"普通失败"，对前者自动重试以减少对用户 token 的误消耗。 |
| 5 | [**#30131 / #31731**](https://github.com/openai/codex/pull/30131) thread_history SQLite 迁移 | 🏗 架构 | 分页式本地会话历史的 schema 奠基 + fork base 关系接入，**未来 Codex Desktop 的会话管理将基于 SQLite**，对历史读取/分页/fork 的改动构成底座。 |
| 6 | [**#31728**](https://github.com/openai/codex/pull/31728) 步骤状态移入 StepContext | 🏗 架构 | 解耦 reasoning effort / MCP 状态 / 已加载 instructions 与 Turn 的绑定，**使多 step 同一 turn 成为可靠模型**。 |
| 7 | [**#31428 / #31295 / #31429**](https://github.com/openai/codex/pull/31428) Bazel e2e 基准测试 | ⚡ 性能基建 | 引入 `codex_e2e_benchmark` 宏 + `just bench-e2e` + CI 烟雾测试，**为 codex --help 级别的端到端性能监控奠基**。 |
| 8 | [**#30213**](https://github.com/openai/codex/pull/30213) 通过进程 host 演练 code-mode | ✅ 测试 | code-mode 集成测试可选择独立构建的 standalone host，覆盖输出帧、notify 注入、并行嵌套等场景。 |
| 9 | [**#31690 / #31687 / #31707 / #31729 / #31730 / #31687 / #31723 / #31724 / #31725 / #31726**](https://github.com/openai/codex/pull/31687) **OTEL 追踪体系大规模重构集群** | 🏗 可观测性 | OpenAI 团队本轮一次性提交 10+ PR，**统一 exec-server 与 app-server 的 RPC span 字段**（`rpc.system`/`rpc.method`/`rpc.request_id`），覆盖 detached 工作流、客户端反向 RPC、文件系统监听、模糊搜索、进程 exec、线程生命周期等关键表面。是本轮最重要的工程进展。 |
| 10 | [**#31732**](https://github.com/openai/codex/pull/31732) Guardian 自审与自定义 provider 失败闭合 | 🔒 安全 | 已关闭 — 修复自定义 model provider（如 Azure）下 `auto_review` 误选不可服务模型导致 deny 的问题。 |

---

## 📈 功能需求趋势

从 Issues 标签与文本提炼出的社区最关注方向：

1. **🔴 模型相关故障（最高频）**
   - GPT-5.5 上线后引发 **速率限制成本暴涨**（#28879）和 **工具调用 schema 异常**（#31665 系列）。
   - 模型 `reasoning_output_tokens` 在固定边界聚簇（#30364），影响复杂任务质量。

2. **🖥️ 桌面端体验短板**
   - **Linux Desktop 应用**（#11023，708 👍）仍是呼声最高的 enhancement。
   - 桌面端存在 **字体渲染**（#18553）、**Windows 沙盒**（#29072、#31708）、**Computer Use macOS 误杀**（#31251）、**macOS 27 兼容性**（#31364）等多重问题。

3. **⚡ 性能与基础设施**
   - 远端 CCA 启动时技能扫描的 RPC 抖动（#31566）。
   - 跨进程状态/队列改造（#28307、#30131）。

4. **🔧 CLI 工具化深化**
   - Computer Use 的 CLI 一等公民支持（#20851）。
   - Skills 启用/禁用 UI 在 TUI 下的截断缺陷（#31541）。

5. **🔌 IDE 集成**
   - VS Code 扩展白屏（#9615）、历史会话无法打开（#18993 已修）。
   - Web extension（Chrome plugin）句柄丢失（#31706）。

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 Issue |
|------|-----------|
| **GPT-5.5 推理成本失控**：Plus 订阅下 5h 配额仅够 2–3 次提示 | #28879, #30364 |
| **CLI v0.143.0 全平台工具调用崩溃**：`unsupported call: …<tool>…` 重复 namespace | #31611, #31639, #31665, #31697, #31702, #31715, #31727 |
| **Windows 沙盒与 apply_patch 不可用** | #29072, #31708 |
| **桌面端跨平台空缺 / 体验瑕疵** | #11023, #18553, #31364, #31251 |
| **安装器兼容性回退** | #31520 → #31667 已闭环 |
| **缺少 CLI 内置 Computer Use** | #20851 |
| **会话历史持久化与 fork 缺位**（驱动 #30131、#31731 的 schema 演进） | #23268, #23895 |

> **小结**：本轮社区的核心矛盾集中在 **GPT-5.5 模型行为变化驱动的多平台回归**。OpenAI 在产品侧（alpha 快速迭代）与基础设施侧（OTEL tracing 大集群 PR）都展现了较强的响应投入，但桌面端 Linux 支持、Windows 沙盒稳定性、以及 token 计费透明度，仍是用户感知最强的未解决问题。

---

*日报生成时间：2026-07-09 ｜ 数据窗口：UTC-24h*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-09** ｜ 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日仓库释放了 **v0.50.0 正式版** 与 **v0.51.0-preview.0** 双版本，但同日的 **v0.52.0 nightly 构建失败**，需要关注 release 流水线稳定性。安全议题尤为突出：连续合入针对 **CI 供应链 RCE、a2a-server 工作区 RCE、IDE Companion TOCTOU 窗口** 三个高危漏洞的修复 PR。社区讨论焦点仍集中在 **Sub-agent 死循环与状态汇报失真**、**Auto Memory 系统的可靠性与隐私泄漏**。

---

## 🚀 版本发布

| 版本 | 状态 | 主要变更 |
|------|------|---------|
| **v0.50.0**（[#28322](https://github.com/google-gemini/gemini-cli/pull/28322)） | 已发布 | Changelog 入库；修复 `npm ci` 在 verify release 流程中的 ignore scripts 问题；解决工作区二进制 shadowing；引入 **Feat/tool registry** 相关改动 |
| **v0.51.0-preview.0**（[#28320](https://github.com/google-gemini/gemini-cli/pull/28320)） | 已发布 | bump 至 `0.51.0-nightly.20260625`；修复 `no_proxy` 测试 |
| **v0.52.0-nightly.20260709**（[#28326](https://github.com/google-gemini/gemini-cli/issues/28326)） | ❌ 构建失败 | Nightly release workflow `run 28985792674` 失败，等待 manual triage |

> ⚠️ **建议**：升级到 v0.50.0 前确认本地工具链兼容；从 nightly 通道获取预览版时关注今日构建中断是否影响后续版本节奏。

---

## 🔥 社区热点 Issues（Top 10）

1. **[BUG] Subagent 命中 MAX_TURNS 后仍报告 GOAL success** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) ⭐2 · 💬10 · **p1**
   `codebase_investigator` 子代理在触达最大轮数前未做任何分析，但最终汇报仍为 `status: "success"` + `Termination Reason: "GOAL"`，造成"中断被掩盖"。是当前讨论度最高的 P1 问题，已被多次复现。

2. **[BUG] Generalist agent 永久挂起** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) ⭐8 · 💬7 · **p1**
   简单指令（如新建文件夹）经 generalist 子代理委派后会卡死超过 1 小时，禁用子代理后可恢复。👍 8 是今日所有 issue 中最高的，反映出阻塞性体验严重。

3. **[EPIC] Robust component level evaluations** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 💬7 · **p1**
   评估基础设施的父级 EPIC：迄今已生成 76 项行为评估并覆盖 6 个模型版本，是项目走向 systematic quality 的关键工程。

4. **[Feature] AST-aware 文件读/搜索/映射** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 💬7 · **p2**
   探索通过 AST 感知工具（tilth / glyph）减少误读、节约 token。配合 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 形成完整规划。

5. **[BUG] Gemini 几乎不会主动调用自定义 skills 和 sub-agents** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 💬6 · **p2**
   用户反馈：除非显式提示，模型几乎忽略已注入的 `gradle` / `git` skills。涉及模型对工具描述的理解与默认路由策略。

6. **[BUG] Auto Memory 无限重试低信号会话** — [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) 💬5 · **p2**
   后台 extractor 仅在成功 `read_file` 后才登记会话，未读取的"低信号"会话会被无限弹出。

7. **[BUG] Shell 命令结束后陷入 "Waiting input"** — [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) ⭐3 · 💬4 · **p1**
   即便是无交互的命令，CLI 也卡在 "Awaiting user input"。直接影响开发者每日高频操作。

8. **[BUG] Browser subagent 在 Wayland 下失败** — [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) 💬4 · **p1**
   Wayland 环境下 browser subagent 直接 FAILED，Termination Reason 仍显示 GOAL。是 Linux 桌面平台兼容性问题。

9. **[BUG] 工具数 >128 触发 400 错误** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 💬3 · **p2**（注：正文描述为 400，与标题 128 不一致）
   当启用工具过多时请求被 API 拒绝，期望模型能在上下文范围内智能裁剪工具集。

10. **[BUG] `get-shit-done` 输出 hook 导致 CLI 崩溃** — [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) 💬3 · **p1**
    在打印用户摘要阶段崩溃，且需要更多 issue 信息（status/need-information）。

> 另见：Site 用户反馈 [#28332](https://github.com/google-gemini/gemini-cli/issues/28332)、Gemini 3.1 Pro Preview **429 限流** [#28329](https://github.com/google-gemini/gemini-cli/issues/28329)。

---

## 🛠 重要 PR 进展（Top 10）

1. **[Security] a2a-server：加载环境时强制 workspace trust（RCE 防御）** — [#28319](https://github.com/google-gemini/gemini-cli/pull/28319)
   解决 `b-519269096` 高危：未信任 workspace 下可零点击 RCE + 环境污染；重构启动序列。**建议立即 review 合入。**

2. **[Security] CI eval workflow：拆分 `pull_request` + `workflow_run` 切断供应链 RCE** — [#28232](https://github.com/google-gemini/gemini-cli/pull/28232)
   `.github/workflows/eval-pr.yml` 此前以 `pull_request_target` 触发，fork 代码可窃取 `GEMINI_API_KEY` / `GITHUB_TOKEN`。修复后权限模型规范化。

3. **[Security] ide-companion：token 文件以原子方式设置 mode（关闭 TOCTOU）** — [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) (fixes #28278)
   旧实现 `writeFile → chmod` 异步顺序导致 token 文件在窗口期内对其他用户可读；改为原子写入。

4. **[Core] `a2a-server` 任务取消时确保终止执行循环（修复"幽灵执行"）** — [#28316](https://github.com/google-gemini/gemini-cli/pull/28316)
   同时修复了多处在 code review 中发现的 race condition、内存泄漏、未授权命令执行。

5. **[Core] 引入 conscious stagnation detection（停滞感知回路断路器）** — [#28333](https://github.com/google-gemini/gemini-cli/pull/28333) / [#28331](https://github.com/google-gemini/gemini-cli/pull/28331)
   修复 `/rewind` 后或模型输出纯文本（无 tool call）导致 agentic loop 提前结束的 bug。引入 **Guided Recovery** 与 **Stagnation Circuit Breaker**。
   ⚠️ 同一作者今日提交了 #28331 和 #28333（账号 `software-0ficial` ↔ `softwareoficial`，疑似 typo 重提交），需维护者确认保留哪一个。

6. **[Core] 限制单次用户请求的递归推理轮次** — [#28164](https://github.com/google-gemini/gemini-cli/pull/28164)
   在默认 `maxSessionTurns` 未配置时强制 15 轮上限，保护本地 CPU 与 API 配额，防止无限循环。配合 Issue #21409 的"agent 挂起"现象。

7. **[Core] `isAuthenticationError` 不再误判 `401` 子串** — [#28328](https://github.com/google-gemini/gemini-cli/pull/28328)
   `localhost:4012` / `exit status 4010` / `error at line 401` 等都被错判为认证失败，触发额外 OAuth 流程；改为更精确的语义判断。

8. **[Core] `resolveToRealPath` 仅对 `file://` URL 做 percent-decode** — [#28327](https://github.com/google-gemini/gemini-cli/pull/28327) (fixes #28276)
   此前对所有路径都 `decodeURIComponent`，导致 `report%202026.txt`、`100%_complete` 等合法文件名被破坏。

9. **[Core] 为 JSON / IPYNB 绕过 LLM correction 直写** — [#28223](https://github.com/google-gemini/gemini-cli/pull/28223)
   解决 `write_file` / `replace` 在 `.json` 与 `.ipynb` 文件上的破坏性问题，surgical 修复避免回归。

10. **[UX] 多行 edit snippet 末尾追加省略号** — [#28126](https://github.com/google-gemini/gemini-cli/pull/28126)（已关闭，status/pr-nudge-sent）
    `EditToolInvocation` 在隐藏内容时显示 `...`，让用户对单行 vs 多行编辑的视觉区分更明确。

> 另见：修复 Antigravity URL 末尾点 [#28310](https://github.com/google-gemini/gemini-cli/pull/28310)。

---

## 📈 功能需求趋势

将近期 Issues 按主题聚合，可清晰看出社区的**三大主轴**：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **Sub-agent 可靠性与可观测性** | #22323, #21409, #21763, #21968, #22598, #21000 | 🔥🔥🔥 |
| **Auto Memory 系统**（隐私、去重、错误处理、性能） | #26522, #26523, #26525, #26516 | 🔥🔥🔥 |
| **工具系统与 AST 感知**（registry、AST、tool 数量上限、文件路径解码） | #24246, #22745, #22746, #22466, #28327 | 🔥🔥 |
| **Browser Agent 平台兼容与韧性** | #21983, #22267, #22232 | 🔥🔥 |
| **评估 / Behavioral eval 基础设施** | #24353, #21000, #22746 | 🔥 |
| **模型行为引导**（破坏性命令抑制、避免散落 tmp 脚本） | #22672, #23571 | 🔥 |

> **趋势小结**：从"工具数量增长"到"行为稳定性"，社区已进入 v0.5x 阶段：**扩张式 feature 增长 → 系统可靠性与评估体系建设**。Auto Memory 系列 Issue 几乎由同一作者（SandyTao520）集中提交，反映出该模块在后台长期运行中存在结构性隐患，建议维护者集中响应。

---

## ⚠️ 开发者关注点

汇总今日 Issue 描述中的高频痛点：

1. **代理"无限循环 / 静默挂起"** — Generalist agent 死锁、recursive reasoning 不收敛、Auto Memory 重试风暴，集中指向缺少"轮次-信号-退出"的三段式治理（呼应 PR #28164 与 #28333/#28331）。
2. **状态汇报与真实行为不一致** — 子代理在中断或失败时报 `GOAL`，导致外部 `codebase_investigator` 等工作流不可信（#22323, #21983, #21763）。
3. **权限与安全边界模糊** — `#22093` 反映 v0.33.0 起子代理绕过配置默认启动；多项 a2a-server / CI / TOCTOU 漏洞说明 **default-trust** 模型过激进。
4. **平台与终端兼容性** — Wayland 浏览器子代理失败、terminal resize 闪烁、外部编辑器退出后 Ink buffer 损坏（#21983, #21924, #24935）。
5. **隐私 / 本地数据外泄担忧** — Auto Memory 提取器把本地会话送入模型前缺乏确定性脱敏（#26525），反映用户对"默认打开后台数据流"的疑虑。
6. **CLI 自身的"自描述"能力** — #21432 提出 agent 应能准确说明自己的 CLI flags 与 hotkey，是开发者文档智能化的诉求。
7. **模型 429 限流与认证错误** — GeminiCLI.com 反馈中出现 "Gemini 3.1 Pro Preview 429" 与授权失败报错（#28329, #28332），需关注免费层的限流策略与 OAuth 提示稳定性。

---

### 📎 附：今日新开 Issue 速查
- [#28332](https://github.com/google-gemini/gemini-cli/issues/

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-09** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

今日 Copilot CLI 仓库动态以 **Issue 关闭与新需求提案** 为主线。最受关注的当属讨论已久、自 2025 年底悬而未决的 [#618](https://github.com/github/copilot-cli/issues/618)「自定义斜杠命令」特性请求终于标记为 CLOSED，预示 VS Code 端成熟的能力正在向 CLI 端对齐。与此同时，Akhi-microsoft 集中提报的十余个 Plan→Compact→Re-Plan 死循环 bug 被批量关闭，说明 1.0.6x 版本中 auto-compaction 的关键缺陷已得到根治。社区新议题则聚焦在 **模型灵活性**、**会话恢复** 与 **企业插件同步** 等方向。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。最新稳定版本仍为社区讨论中频繁提及的 **1.0.69**（[Issue #4059](https://github.com/github/copilot-cli/issues/4059) 报告的当前版本）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 为什么值得关注 |
|---|-------|------|-----------|----------------|
| 1 | [#618](https://github.com/github/copilot-cli/issues/618) 自定义斜杠命令（来自 .github/prompts/） | 🟢 CLOSED | 32 / 99 | 社区呼声最高的特性请求（99 👍），CLOSED 状态暗示功能已落地或转入实现阶段。Claude Code 用户早已依赖该机制，VS Code 扩展也早已支持——这是 CLI 体验「追平同类工具」的标志性 PR |
| 2 | [#970](https://github.com/github/copilot-cli/issues/970) macOS Gatekeeper 在企业策略下拦截 Copilot | 🟡 OPEN | 6 / 21 | 企业用户升级 Homebrew 后必遇的「Apple could not verify」提示，已影响数月，反映 macOS 签名/公证流程的合规问题 |
| 3 | [#2792](https://github.com/github/copilot-cli/issues/2792) 计划与执行阶段自动切换模型 | 🟡 OPEN | 4 / 14 | 探讨「用小模型规划 + 大模型执行」的混合策略，对 **成本优化** 与 **响应速度** 有显著价值，反映用户对模型选型粒度的精细需求 |
| 4 | [#3158](https://github.com/github/copilot-cli/issues/3158) Plan→Compact→Re-Plan 死循环（217 轮零产出） | 🟢 CLOSED | 4 / 0 | 严重缺陷：auto-compaction 后 agent 反复重读摘要、零文件编辑。今日与同类议题（#3144–#3157 共 13 条）批量关闭，说明 1.0.6x 后期已修复 |
| 5 | [#2729](https://github.com/github/copilot-cli/issues/2729) `/delegate` 忽略指定源分支 | 🟢 CLOSED | 4 / 2 | 影响多代理协作工作流的核心命令；修复后 `/delegate` 可正确基于指定分支创建 worktree |
| 6 | [#4016](https://github.com/github/copilot-cli/issues/4016) BYOK（COPILOT_PROVIDER_*）在 `--acp` 模式被拒 | 🟡 OPEN | 1 / 2 | 自定义提供者在 `--acp --stdio` 下要求 GitHub 登录（-32000），是 #3048 的回归。BYOK 链路稳定性是企业落地关键 |
| 7 | [#2112](https://github.com/github/copilot-cli/issues/2112) 过期 keytar 条目导致每次启动弹出 OAuth | 🟡 OPEN | 1 / 1 | HTTP MCP 服务器配置下，OS Keychain 中的过期 token 优先于文件缓存中的有效 token，引发 OAuth 弹窗风暴 |
| 8 | [#4053](https://github.com/github/copilot-cli/issues/4053) TUI 在 NFS/GPFS 上因 SIGCHLD 竞争挂起 | 🟡 OPEN | 1 / 0 | Linux + 并行文件系统环境下，TUI 卡在「Loading: N skills」永不响应；根因是 Tokio 30+ 线程并发 spawn `which gh` 子进程 |
| 9 | [#4054](https://github.com/github/copilot-cli/issues/4054) `/resume` 在非 git 会话下不可用 | 🟡 OPEN | 1 / 0 | Catch-22 缺陷：非 git 目录创建的会话被存入 `repository = '/'`，导致 resume 选单无法选中 |
| 10 | [#3586](https://github.com/github/copilot-cli/issues/3586) 自 1.0.49 起复制失效（Linux） | 🟢 CLOSED | 2 / 1 | 显式回归 bug，影响 Linux 平台日常使用，1.0.48 之前版本正常 |

### 🆕 今日新提案

- [#4068](https://github.com/github/copilot-cli/issues/4068) 允许使用模型**族名**（如 `opus`、`sonnet`）自动解析最新稳定版，免去手动跟踪版本号
- [#4067](https://github.com/github/copilot-cli/issues/4067) `settings.json` 顶层的 `model` 字段启动时不生效，回退到默认 `claude-sonnet-5`
- [#4066](https://github.com/github/copilot-cli/issues/4066) 退出提示中的 `--resume=` 可配置显示会话 ID 或可读名称
- [#4065](https://github.com/github/copilot-cli/issues/4065) Copilot exfiltration 防护过于激进，误伤合法 spec 内容（含 `${env.AUTH_TOKEN}` 的合法 YAML）

---

## 🔧 重要 PR 进展

过去 24 小时内无 PR 更新。建议关注以下由 CLOSED Issue 间接反映的合并活动：

- 与 #618 关闭相关的「自定义 slash 命令」实现 PR（需在仓库搜索 `prompts` 关键词确认）
- 与 #3144–#3158 批量关闭相关的 auto-compaction 行为修复 PR
- 与 #3586 相关的 Linux 复制/剪贴板回归修复

---

## 📈 功能需求趋势

综合 43 条 Issue 数据，社区诉求集中在六大方向：

| 方向 | 代表 Issue | 热度指标 |
|------|-----------|---------|
| **自定义工作流** | #618、#4066 | 99 👍，32 评论 |
| **模型灵活性** | #2792、#4068、#4067 | 14 👍 + 多议题集中出现 |
| **macOS 安装体验** | #970、#1624 | 21 👍，影响企业部署 |
| **MCP 与认证稳定性** | #2112、#4016 | BYOK 与 OAuth 链路持续痛点 |
| **Linux/企业基础设施兼容** | #4053、#3586、#4039 | NFS、剪贴板、企业托管插件同步 |
| **安全与防护平衡** | #4065 | exfiltration 策略误报 |

---

## 🛠️ 开发者关注点

1. **CLI 与 VS Code 扩展的体验差距**：自定义 slash commands（#618）等 VS Code 端早已成熟的能力，CLI 端补齐呼声极高——开发者期望 CLI 能成为与 IDE **同等能力的 AI 入口**，而非简化版。

2. **Agent 行为的可靠性**：auto-compaction 引发的死循环（#3144–#3158）是过去两个月最严重的功能性缺陷，217 轮零产出会直接烧光整个会话的 token 预算。批量关闭意味着该路径已稳定，但暴露出 agent 状态机中「计划 vs 执行」过渡的设计脆弱性。

3. **模型成本精细化管理**：从 #2792 的「分阶段切模型」到 #4068 的「族名解析」，开发者希望摆脱对具体版本号的硬编码，转向 **策略级**（族、能力档）与 **场景级**（规划、执行、评审）的模型编排。

4. **BYOK 与企业集成摩擦**：#4016 与 #2112 共同反映出 **自定义提供方 + MCP + ACP** 三角的认证一致性问题——非默认登录态在特定命令路径下仍被静默拒绝。

5. **存储与清理**：#1624 指出旧版本残留占用约 2GB——在版本迭代频繁的 CLI 工具上，缺乏自动清理策略是普遍摩擦。

6. **平台边界条件**：#4053 的 NFS/GPFS 挂起与 #970 的企业 Gatekeeper 提示说明，**开发机异构环境**（并行文件系统、MDM 管控、签名校验）仍是 CLI 类工具落地的盲区。

---

*日报基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-09**
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日 Kimi Code CLI 社区动态相对平淡，无新版本发布。过去 24 小时内仅有 2 条 Issue 被更新、2 条 PR 被刷新，社区整体处于问题修复与讨论期。值得关注的是，Contributor **Ricardo-M-L** 持续推进两条修复 PR，体现出维护者对工具稳定性细节的打磨；与此同时，一条关于企业网环境下 SSL 证书拦截的 enhancement 请求再次被作者更新，提醒团队关注企业级部署场景的兼容性。

---

## 🚀 版本发布

**今日无新版本发布。** 最近 24 小时内 Release 频道无活动。

---

## 🔥 社区热点 Issues

由于过去 24 小时仅有 2 条 Issue 被更新，以下为完整列表（按关注度排序）：

### 1. #2458 — [enhancement] Add option to ignore ssl certificate
- **作者**：dmorsin | **状态**：OPEN | **更新**：2026-07-08
- **为什么重要**：该需求来自企业用户，其 PC 受组织统一管控，杀毒软件通过 MITM 方式重打包 SSL 流量并注入自签名证书，导致 CLI 登录时 SSL 校验失败。这是一个**典型的企业部署兼容性场景**，并非个例——很多大型企业的内网代理、终端安全产品都会带来类似问题。
- **社区反应**：👍 0 | 💬 2 条评论。讨论度不高但代表了**长尾企业用户**的痛点。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2458

### 2. #2318 — [bug] request reached organization TPD rate limit, current: 1505241
- **作者**：globalvideos272-lab | **状态**：OPEN | **更新**：2026-07-09
- **为什么重要**：用户反馈在使用 `kimi 2.6` 模型时遭遇了组织级 TPD（Tokens Per Day）限流，且报告者认为存在**统计计算错误**——可能并非真正超过配额。这是一类直接影响用户日常工作流的严重 Bug，且容易引发对计费/限额准确性的信任问题。
- **社区反应**：👍 1 | 💬 1 条评论。👍 数偏低但属于核心可用性问题。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2318

---

## 🛠 重要 PR 进展

过去 24 小时内有 2 条 PR 被刷新，以下为详情（按更新顺序）：

### 1. #2324 — fix(web): handle BrokenPipeError in SessionProcess.send_message
- **作者**：Ricardo-M-L | **状态**：OPEN | **更新**：2026-07-09
- **修复内容**：在 `src/kimi_cli/web/runner/process.py` 的 `SessionProcess.send_message` 中，对 `process.stdin` 的写入与 `drain()` 缺少对子进程已退出的防护。当 `start()` 调用后子进程已退出，再次写入会导致 `BrokenPipeError`。该 PR 通过 guard 逻辑解决了进程生命周期与 I/O 时序的竞态。
- **意义**：这是 Web 模式下的稳定性修复，能有效降低用户在高并发或异常退出场景下的崩溃概率。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2324

### 2. #2449 — fix(string): strip newlines in shorten_middle before the length check
- **作者**：Ricardo-M-L | **状态**：OPEN | **更新**：2026-07-09
- **修复内容**：`shorten_middle(text, width, remove_newline=True)` 在短输入时会在**折叠换行之前**提前 return，导致多行文本即使超过了 `width=50` 的限制也无法被正确截断为单行摘要。该 PR 调整了执行顺序——先去除换行再做长度判断，从而让 `extract_key_argument` 渲染的工具调用参数摘要始终为单行。
- **意义**：影响 CLI 输出可读性，是面向用户视觉体验的细节优化。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2449

---

## 📈 功能需求趋势

由于今日 Issue 数据量有限，无法进行大规模的趋势统计。基于现有样本可观察到以下方向：

| 方向 | 信号 | 说明 |
|------|------|------|
| **企业环境兼容性** | #2458 | 越来越多用户处于受控企业网络，SSL/代理/证书类配置需求上升 |
| **限额与计费透明度** | #2318 | 用户对 TPD 等配额指标的计算准确性高度敏感 |
| **稳定性与边缘场景处理** | #2324 | Web 模式进程生命周期、I/O 竞态等长尾问题开始浮出水面 |
| **CLI 输出可读性** | #2449 | 工具调用摘要、终端渲染等"细节体验"持续受维护者关注 |

> 📊 **说明**：单日样本不足以刻画长期趋势，建议结合周报/月报数据交叉分析。

---

## 👨‍💻 开发者关注点

从今天的 Issue / PR 中可归纳出两个明显的开发者关切：

1. **企业级可用性仍是短板**
   SSL 信任链、配额准确性、网络代理兼容性等"非功能性"问题在个人开发者中不显著，但在企业用户中成为阻塞项。社区建议：优先提供 `ignore_ssl_certificate` 之类的开关，或在文档中明确企业部署最佳实践。

2. **底层鲁棒性与人机交互细节并重**
   维护者 Ricardo-M-L 同日刷新两条 PR，一条修 Web 模式的进程竞态，一条改字符串摘要的换行处理。这种"既深又细"的维护风格说明项目正在打磨成熟期质量——从"能不能用"迈向"用得稳不好看"。

> 💡 **建议**：对于关注本项目的开发者，可订阅 Ricardo-M-L 的 PR 列表，他是近期最活跃的贡献者；对于企业用户，建议跟催 #2458，并监控 #2318 的复现条件。

---

*日报由 AI 自动汇总，仅基于过去 24 小时公开数据生成。如需更深度的趋势分析，建议扩大时间窗口。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-09**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，社区活跃度依然围绕**桌面端稳定性**与**本地引擎兼容性**两条主线展开。重点 PR `#36023` 推动 Bun 运行时升级以修复 NAPI 退出崩溃，影响全平台用户；同时本地 vLLM 引擎触发死循环（#36009）的高频反馈持续引发关注。Z.AI provider 文档完善（#36010、#36013、#36024）成为新的集中需求点。

---

## 🚀 版本发布

今日无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 评论数 | 状态 | 重要性 |
|---|------|--------|------|--------|
| [#28656](https://github.com/anomalyco/opencode/issues/28656) | Code parts are blank in TUI on Centos 7 | 11 | OPEN | TUI 输出代码块在 CentOS 7 下渲染空白，影响 Linux 老版本企业用户 |
| [#25848](https://github.com/anomalyco/opencode/issues/25848) | [FEATURE] add session renaming | 10 | OPEN | 会话重命名呼声高，社区希望支持 `/rename` 命令或会话管理 UI |
| [#6548](https://github.com/anomalyco/opencode/issues/6548) | [FEATURE] Paginated message loading for long sessions | 10 | OPEN | 7 👍 长期高赞需求，长会话分页加载可显著降低内存与启动延迟 |
| [#14465](https://github.com/anomalyco/opencode/issues/14465) | Workspace name/icon etc. not saved | 8 | CLOSED | Desktop 工作区元数据未持久化，重启后丢失 |
| [#14862](https://github.com/anomalyco/opencode/issues/14862) | Big Pickle fails to respect AGENTS.md | 7 | CLOSED | Big Pickle 不遵守 AGENTS.md 规则，导致代码污染 |
| [#15758](https://github.com/anomalyco/opencode/issues/15758) | Desktop command not found errors | 7 | CLOSED | macOS Desktop 找不到 npm、bun、ripgrep 等系统命令 |
| [#32473](https://github.com/anomalyco/opencode/issues/32473) | Desktop renderer fatally crashes (404 NotFoundError) | 6 | OPEN | 桌面端渲染器因陈旧 `lastProjectSession` 引用导致窗口崩溃 |
| [#25790](https://github.com/anomalyco/opencode/issues/25790) | opencode can't start up, 400 empty response | 6 | CLOSED | 启动时收到 400 空响应，provider 路由异常 |
| [#26180](https://github.com/anomalyco/opencode/issues/26180) | Windows desktop hangs on exact-file tasks | 6 | CLOSED | Windows 桌面端在精确文件任务上挂起，undici 异常终止 |
| [#36010](https://github.com/anomalyco/opencode/issues/36010) | Z.AI provider docs gap (MCP/vision/cost) | 4 | CLOSED | Z.AI 文档缺失 MCP、视觉路由、成本保护等高级配置 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 说明 |
|---|------|------|
| [#36023](https://github.com/anomalyco/opencode/pull/36023) | **fix(runtime): upgrade Bun to canary** | 🔑 关键修复，升级 Bun canary 版本解决全平台退出时 NAPI 崩溃，影响 Windows/macOS/Linux |
| [#34610](https://github.com/anomalyco/opencode/pull/34610) | fix(app): wait for settings persistence | 修复 `newLayoutDesigns().toString()` 导致的渲染门控漏洞，避免应用树在持久化未就绪时渲染 |
| [#34611](https://github.com/anomalyco/opencode/pull/34611) | fix(app): model selection persistence | 修复 LocalProvider 持久化 store `init.ready` 被解构丢弃导致的会话 UI 闪烁 |
| [#34606](https://github.com/anomalyco/opencode/pull/34606) | fix(app): macOS titlebar drag | 在 Electron 环境下启用 `-webkit-app-region: drag`，修复 macOS 标题栏无法拖动 |
| [#34603](https://github.com/anomalyco/opencode/pull/34603) | fix(llm): inject _noop tool for all providers | 为所有 provider 在含工具历史时注入 `_noop` 工具，满足 AI SDK 非空工具列表要求 |
| [#34590](https://github.com/anomalyco/opencode/pull/34590) | fix(llm): forward bedrock.thinking | 将 `bedrock.thinking` 转发至 Bedrock Converse 的 `reasoning_config` |
| [#34605](https://github.com/anomalyco/opencode/pull/34605) | fix(patch): normalize Unicode NFC/NFD | 规范化 apply_patch 中的 Unicode 差异，解决 macOS NFD 文本 patch 失败 |
| [#34604](https://github.com/anomalyco/opencode/pull/34604) | fix(cli): write error message to stderr | 修复未知参数时静默只显示帮助的 CLI 体验缺陷 |
| [#35731](https://github.com/anomalyco/opencode/pull/35731) | feat(desktop): reveal projects in file manager | 新增桌面端项目在 Finder/Explorer 中显示功能 |
| [#35711](https://github.com/anomalyco/opencode/pull/35711) | feat(app): add composer add menu | 新增 composer "+" 按钮菜单，符合 Q3 2026 设计规范且保留草稿 |

---

## 📈 功能需求趋势

从近期 Issues 提炼，社区最关注的功能方向包括：

1. **会话管理增强** —— 会话重命名（#25848）、分页加载（#6548）、跨服务器会话隔离（#25131），反映长会话场景普及带来的 UX 需求。
2. **Provider 生态扩张** —— Z.AI（#36010/#36013/#36024）、Omniroute（#25947）、DeepSeek 兼容性（#26498）等请求密集，国产/小众 provider 集成是当下热点。
3. **多 LLM 协作能力** —— Multi-LLM 团队辩论（#25766）、运行时模型切换（#17595）体现用户希望突破单一模型的限制。
4. **本地引擎稳定性** —— vLLM 死循环（#36009）反映本地部署用户对工具调用鲁棒性的强烈诉求。
5. **跨平台一致性** —— Windows（#26180/#36007）、CentOS 7（#28656）、WSL UNC（#26481）、Safari（#26501）等平台碎片化仍是痛点。
6. **桌面端会话持久化** —— 工作区元数据丢失（#14465）、陈旧 session 崩溃（#32473/#25131）等提示桌面端状态管理需全面加固。

---

## 👨‍💻 开发者关注点

- **本地引擎死循环顽疾**：v1.15.13 之后版本搭配本地 vLLM + Qwen3.6 27B/35B 模型频繁触发死循环，线上 API 几乎不出现。开发者期望官方对工具调用状态机与回退机制做更彻底的重构（#36009）。
- **订阅与配额透明度不足**：OpenCode Go 自动续费后配额未及时重置（#34184），开发者对订阅状态机信心受损。
- **运行时升级风险与收益的博弈**：Bun 升级至 canary 以解决 NAPI 崩溃（PR #36023），开发者既期待稳定性提升，也担忧 canari 版本引入新风险。
- **Provider 文档质量参差**：Z.AI 等新兴 provider 文档缺失 MCP、视觉、成本控制等内容（#36010/#36013），与 Amazon Bedrock、GitLab Duo 形成对比，开发者呼吁统一文档规范。
- **CLI 与 Desktop 行为不一致**：`opencode run` 对无效模型返回退出码 0（#26509）、Desktop 命令找不到（#15758）等问题反映出 CLI 与 GUI 路径未充分对齐。
- **`/undo` 语义不完整**：跨仓库修改时只回滚对话不还原文件（#26488），开发者期望 undo 操作覆盖全副作用。

---

*日报基于 GitHub 数据自动生成，覆盖 Issues、PR 与社区讨论。点击标题链接即可跳转详情页。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期：2026-07-09** · 数据来源：github.com/badlogic/pi-mono（原 earendil-works/pi）

---

## 1. 今日速览

今日社区高度活跃，过去 24 小时共更新 43 条 Issue 与 9 条 PR，整体呈现"快进快出"特征——大量 Issue 在一天之内被关闭（CLOSE）处理，反映出维护者正在快速消化上一轮积压。核心关注点集中在 **会话（Session）生命周期管理**、**模型/Provider 适配**与 **多会话并发能力**三大方向，其中"多 Agent 会话切换"提案以 9 条评论位居榜首，暗示 TUI 多任务化是下一阶段最受期待的演进方向。

---

## 2. 版本发布

**无新版本发布。** 社区仍处于 0.80.3 之后的迭代磨合期，今日合并的多个 PR（编译修复、上下文窗口更新等）预计将在下一版本中整合。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| **#5700** | Support multiple live agent sessions with TUI switching | 9 | 0 | 🔥🔥🔥 多 Agent 并发切换，是当前社区呼声最高的体验级需求；现有 `switchSession` 会销毁当前会话，限制了后台 agent 调度 |
| **#5263** | Make in-session model and thinking-level changes ephemeral by default | 5 | **6** | 👍 最高！要求把 in-session 模型切换默认改为临时，避免污染全局默认设置；提议在 `/settings` 增加 "Default model" 入口 |
| **#6204** | mimo-v2-omni 是三个小米 MiMo 区域的"幽灵模型" | 7 | 0 | 模型目录列出但 API 返回 400，反映 **模型元数据校验机制缺失** 的系统性问题 |
| **#5886** | AgentSession settlement/continuation 与 assistant-tail 生命周期 bug | 4 | 2 | 元 issue：post-run 逻辑尝试从已失效的 transcript 继续 agent，反复出现的回归风险 |
| **#6434** | Fix empty reasoning content TUI render for OpenAI models | 3 | 1 | OpenAI Responses 的 reasoning 副本未剥离，TUI 出现空白思考块；已合并修复（PR #6436） |
| **#6414** | streamProxy drops ToolCall.thoughtSignature — Gemini 多轮工具调用 400 | 3 | 0 | Proxy 流经 `streamSimple` 后丢失 thoughtSignature，Gemini 第二轮工具调用直接 400 |
| **#6429** | OpenAI Responses 在压缩后发送 max_output_tokens=1 | 2 | 0 | 自动压缩长会话后下一次请求即失败；与 #5886 共同暴露**压缩后续会话恢复的脆弱性** |
| **#6421** | Anthropic OAuth 需要 Claude Agent 计费标识 | 2 | 0 | OAuth 配 Claude Max 账户报 "out of extra usage"，账单归属问题；影响付费用户工作流 |
| **#6321** | /fork 在 fork 运行期间每次 Enter 多生成一个 session | 2 | 0 | 已合并修复（PR #6430），但揭示了 selector 异步处理与 runtimeHost.fork 同步等待的耦合问题 |
| **#6416** | find tool：路径限定 glob `dir/**/*.ext` 无结果 | 2 | 0 | 基础工具可用性回归，影响日常文件检索体验 |

📌 **观察**：除 #5263 外，今日大部分热门 Issue 已关闭。Issue 状态标签如 `untriaged`/`no-action`/`bug` 大量出现，说明仓库采用了**结构化分类 + 快速关单**的维护节奏。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 作者 | 状态 | 功能/修复要点 |
|---|----|------|------|--------------|
| **#6427** | feat(coding-agent): add prompt cache miss tracking | mitsuhiko | 🟢 OPEN | 核心维护者亲自动手！**按 turn 检测 prompt cache miss**，在 transcript 中以 warning 色标记，与 idle gap、模型切换关联。给 `/session` 增加可见性 |
| **#6441** | Refresh MiniMax M3 parameters | octo-patch | ✅ CLOSED | 刷新 MiniMax M3 的定价与 anthropic base URL（缓存读取 $0.12/M），更新生成器元数据 |
| **#6440** | fix: reload keybindings before creating custom editor | IstPlayer | ✅ CLOSED | 修复自定义 editor 组件（pi-powerline-footer 等）在首次启动时 `keybindings.json` 不生效，必须 `/reload` 才能加载的问题 |
| **#6437** | fix(ai): update Copilot extended context windows | tim-hub | ✅ CLOSED | 把支持 GitHub 百万级上下文的 Copilot 模型 `contextWindow` 统一置为 1,000,000（呼应 6 月 4 日 GitHub Changelog）|
| **#6436** | fix(ai): hide responses reasoning comment markers | AlexanderDzhoganov | ✅ CLOSED | 隐藏 OpenAI Responses reasoning 中的 `<!-- -->` 分隔符，保留原始已签 reasoning 项用于回放，并新增回归测试 |
| **#6430** | fix fork menu allowing user to double select an entry | davidbrai | ✅ CLOSED | 修复 fork 选择器在扩展拖慢 teardown 时被多次触发的问题；修复 #6321 |
| **#6418** | Fix native clipboard in bun release | davidbrai | ✅ CLOSED | 修复 Bun release 二进制下 Ctrl+V 图片粘贴（Linux/X11）；包含 .node 资源打包 + xclip fallback，修复 #6250 |
| **#6417** | feat(agent): support custom metadata in jsonl session headers | ArcadiaLin | ✅ CLOSED | 在 v3 JSONL session header 增加可选 `metadata?: Record<string, unknown>`，为上层存储扩展提供入口 |
| **#6413** | feat(coding-agent): show git info in local version | xl0 | ✅ CLOSED | 本地版本（`@dev`/`file:` 协议）显示所在分支、最近 commit 等 git 信息，便于开发期定位 |
| **#6442**（隐含：#6439 被 PR 关闭）| — | — | — | Copilot 上下文窗口更新的 issue 被 #6437 同步关闭 |

---

## 5. 功能需求趋势

从今日 43 条 Issue 中聚合，可识别出六大社区诉求方向：

### 🔹 A. 会话与多任务能力
- **多会话并发**（#5700）—— 呼声最高
- **Fork 行为修正**（#6321 → PR #6430）
- **内存中 session 存储导出**（#6435）—— 生态扩展诉求
- **自定义元数据头**（#6402 → PR #6417）

### 🔹 B. 大上下文 / 自动压缩工程化
触发一波**关于 compaction 的连续 issue 群**（#6424 / #6425 / #6426 / #6429），全部来自同一位提交者（Blue-B），反映出长会话场景下的真实痛点：
- 阈值自动压缩会"留下未完成工作"
- 大压缩需要分块 + 失败 backoff
- 模型降级到小上下文时需要 pre-compact
- 压缩后 OpenAI Responses 的 max_output_tokens 退化

### 🔹 C. Provider / 模型生态
今日涉及 **MiniMax M3、MiMo、Copilot、Novita AI、Fable、DeepSeek V4、Anthropic OAuth** 等多 Provider 同时出现兼容性问题，反映 Pi 正在被推向**多模型、多计费体系**的真实生产场景，模型元数据生成器的健壮性成为瓶颈。

### 🔹 D. IDE 体验 / 系统集成
- Linux X11 下 Ctrl+V 剪贴板图片粘贴（#6250 → PR #6418）
- 远程模型下剪贴板图片发送（#6373）
- `find` 工具 glob 行为回归（#6416）

### 🔹 E. 可靠性与重试
- 指数 backoff 缺上限（#6303 👍1）
- Bun fetch socket drop 未归类为可重试（#6431）
- 压缩后上下文边界（#6429）

### 🔹 F. 可观测性
- PR #6427 引入 **prompt cache miss 追踪**，把 LLM 缓存命中情况暴露到 `/session` 与 transcript 中，是首次在 Pi 中引入面向开发者的可视化运维能力。

---

## 6. 开发者关注点 & 痛点

1. **"会话状态难以管理"** —— 是今日最集中的开发反馈。多位开发者从不同角度（compaction、fork、ephemeral changes、multi-session）抱怨：当前的 session 模型在边界场景下既不清晰也不健壮。

2. **"压缩是脆弱环节"** —— #6424/25/26/29 的提交者明确表示"我自己打了好几个本地补丁"。压缩看似已完成核心实现，但在**大上下文、分块、重试、降级链路**上的工程化不足，亟需抽象成 first-class API。

3. **"Provider 适配是持续熵源"** —— 几乎每个模型供应商（OpenAI / Anthropic / Gemini / Copilot / MiMo / DeepSeek / Fable）今天都有至少一条相关 issue。开发者期望更严格的**模型元数据 schema 校验**和**参数约束传播**机制。

4. **"Linux 桌面体验是被遗忘的角落"** —— X11 剪贴板、native binding 在 Bun 打包后失效等问题反复出现，Bun release 的资源打包策略需要更透明的诊断路径。

5. **"Runtime 假设不一致"** —— Node vs Bun 的行为差异（如 socket drop 分类、native binding 解析）暴露了 Pi 在**双 runtime 兼容**层面的隐性技术债。

6. **"可观测性诉求"** —— PR #6427 是今日唯一开放 PR，且由项目维护者 mitsuhiko 亲自提交，标志着社区期待从"能用"走向"可诊断、可调优"。开发者希望 Pi 像一个**可观测系统**而非黑盒 CLI。

---

### 📎 链接索引
- 仓库：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（原 [earendil-works/pi](https://github.com/earendil-works/pi)）
- 多会话需求：#5700 · 临时化模型切换：#5263 · Cache 追踪：PR #6427 · 会话元数据：PR #6417

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-09**

---

## 📌 今日速览

今日 qwen-code 正式发布 **v0.19.8**，重点引入 serve 环境的隔离与总准入控制（total admission），并补充了 WeCom 渠道文档。社区层面，**多 Workspace 单 Daemon** 的 RFC（#6378）与 **图片/文档拖拽上传回归**（#6560）成为讨论最热烈的两大议题；同时围绕 Subagent 可观测性、Hook 体系扩展与 WebShell UI 的 PR 持续涌入。夜间 nightly 版本发布流水线出现质量问题（#6554），已通过格式化修复 PR #6555 跟进。

---

## 🚀 版本发布

### v0.19.8
- **feat(cli)**: 新增 serve 环境隔离与总准入（total admission）控制，由 @doudouOUC 提交，为后续多 Workspace 能力铺路。
- **docs(channels)**: 在渠道总览中新增 WeCom（企业微信）说明，由 @DragonnZhang 在 #6490 提交。

> ⚠️ 注意：同日 nightly 版本（v0.19.8-nightly.20260709）因 `quality` 任务失败（#6554），后续通过 PR #6555 的 Prettier 全量格式化修复。

---

## 🔥 社区热点 Issues

| # | 标题 | 关键点 |
|---|------|--------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: 多 Workspace 单 Daemon 支持**（💬19） | doudouOUC 提出的核心 RFC，旨在打破「1 daemon = 1 workspace」的隐式约束，是本周最重要的架构讨论。涉及会话路由、信任网关、向后兼容等多方面。 |
| [#6560](https://github.com/QwenLM/qwen-code/issues/6560) | **对话中图片/文档上传功能回归**（💬18） | 用户反馈 Ctrl+V 粘贴截图与拖拽文件功能失效，重装亦无法恢复。社区反应强烈，是用户体验类最高优先级问题之一。 |
| [#6570](https://github.com/QwenLM/qwen-code/issues/6570) | **main 分支测试失败：process-env-guard**（💬3） | `cdp-mcp-command.ts` 缺少 allowlist 配置导致单测失败，与 PR #6472 关联，已在 #6555 中通过格式化解决。 |
| [#6565](https://github.com/QwenLM/qwen-code/issues/6565) | **Qwen Coder 连接 Internal Error**（💬3） | 多语言报错（中/日）报告连接错误，需补充客户端版本与服务端日志进一步诊断。 |
| [#6505](https://github.com/QwenLM/qwen-code/issues/6505) | **Subagent 重复工具调用死循环**（💬4，已关闭） | 主代理 LoopDetectionService 不覆盖子代理，导致子代理可无限重复同参数调用同类工具。涉及 multi-agent 稳定性。 |
| [#6246](https://github.com/QwenLM/qwen-code/issues/6246) | **qwen_code 无法识别自身进程**（💬3，已关闭） | 用户用 qwen_code 启动 Node 进程后，再要求其停止时会把自身也杀掉。属 shell 进程匹配逻辑缺陷。 |
| [#6529](https://github.com/QwenLM/qwen-code/issues/6529) | **Hook 注入后台任务与 cron 状态**（💬3，已关闭） | 希望在 Stop/SubagentStop Hook payload 中注入后台任务进度，便于脚本感知异步工作。 |
| [#6553](https://github.com/QwenLM/qwen-code/issues/6553) | **qwen-code-action Triage 吞掉 stderr**（💬2，已关闭） | CI triage 步骤丢弃 stderr，模型静默失败时无可见线索，影响自动化质量。 |
| [#6569](https://github.com/QwenLM/qwen-code/issues/6569) | **Subagent 可观测性增强**（💬2） | 社区请求实时查看子代理执行轨迹并支持人工介入，目前执行过于凝练，难以及时纠偏。 |
| [#6507](https://github.com/QwenLM/qwen-code/issues/6507) | **延迟 IDE 启动显示陈旧失败状态**（💬2） | IDE 连接超时后即使后续连接成功，UI 仍可能展示失败状态，连接 Promise 未被取消。 |

---

## 🛠 重要 PR 进展

| PR | 标题 | 简介 |
|----|------|------|
| [#6572](https://github.com/QwenLM/qwen-code/pull/6572) | **WebShell 对话框背景 z-index 可配置** | 通过 CSS 自定义属性 `--web-shell-dialog-backdrop-z-index` 解耦样式层级，便于宿主应用集成。 |
| [#6571](https://github.com/QwenLM/qwen-code/pull/6571) | **MCP prompt 无声明参数时透传用户输入** | 修复当 MCP server prompt 未声明 `arguments` 时 `/prompt_name xxx` 中 `xxx` 被静默丢弃的问题（对应 #6563）。 |
| [#6567](https://github.com/QwenLM/qwen-code/pull/6567) | **工作区限定的 core REST 路由** | doudouOUC 推进 Phase 3，新增 `/workspaces/:workspace/...` 命名空间，兼容 POSIX/Windows/UNC 路径，保留旧路由。 |
| [#6561](https://github.com/QwenLM/qwen-code/pull/6561) | **WebShell 工作区 Goals 页面** | 为 `/goal` 提供可视化界面，并修复 daemon resume 时 `/goal` 丢失的潜在 bug。 |
| [#6558](https://github.com/QwenLM/qwen-code/pull/6558) | **可信工作区持久化会话列表** | 让非主工作区的会话列表返回该工作区下持久化会话，并合并实时会话摘要去重。 |
| [#6557](https://github.com/QwenLM/qwen-code/pull/6557) | **Daemon 会话工件持久化** | 替换旧 PR #6259，实现 V2 daemon 会话工件元数据在重启与回放间的可恢复性。 |
| [#6556](https://github.com/QwenLM/qwen-code/pull/6556) | **max_tokens 钳制到上下文窗口** | 撤回旧的输出预留策略，按窗口剩余空间动态请求输出 token，提升长上下文利用率。 |
| [#6535](https://github.com/QwenLM/qwen-code/pull/6535) | **定时任务独立运行模式（create_sub_session）** | daemon 内新增独立子会话工具，定时任务每次触发都在全新上下文中运行，避免历史累积。 |
| [#6526](https://github.com/QwenLM/qwen-code/pull/6526) | **长会话时间线滚动修复** | Web Shell 多轮对话时间线保持视口居中、隐藏原生滚动条，并确保当前标记可见而不影响聊天内容。 |
| [#6495](https://github.com/QwenLM/qwen-code/pull/6495) | **Webhook 触发的渠道任务** | 允许外部 Webhook POST 事件到 `qwen serve`，由 Qwen 生成响应并由渠道 worker 主动推送。 |

---

## 📈 功能需求趋势

通过对近 24 小时 Issues / PR 的归类，社区关注点集中在以下方向：

1. **多 Workspace / 多租户架构** — #6378 RFC 与 #6567/#6558 等 PR 共同推进，是当前最核心的架构演进方向，涉及会话路由、信任隔离与 REST 命名空间。
2. **渠道（Channels）集成深化** — WeCom、DingTalk、Feishu 文档与功能持续完善（#6490、#6495、#6538），并扩展 dmPolicy、Webhook 触发等运维能力。
3. **Subagent 可观测与可控** — #6505/#6569 揭示了子代理循环与缺乏实时干预的痛点，配合 Hook 体系（#6489、#6529）构建更强的多 Agent 治理工具链。
4. **Memory 系统精细化** — Worktree 会话记忆隔离（#6449）、AutoMemory 超时可配置（#6308）、`/remember` 后即时刷新（#6497）等显示出对长期上下文管理的精细诉求。
5. **WebShell 与 IDE 集成打磨** — Goals 页面（#6561）、长会话时间线（#6526）、@ 引用 chip 渲染（#6536）、z-index 可配置（#6572）等 UX 改进密集出现。
6. **CLI 命令扩展** — `/learn`（#6440）、`/model --compaction`（#6019）、Fleet View 重写（#6451）共同丰富交互能力。
7. **模型兼容性** — Anthropic Claude 4.8+ 移除 temperature 的兼容性修复（#6519）反映多模型适配的工作量。
8. **CI / 发布流水线稳定性** — #6554、#6476 等多次发布失败提示需进一步加固质量门禁。

---

## 🧑‍💻 开发者关注点

从 Issues 中的高频反馈看，开发者当前最关心的痛点包括：

- **回归问题响应慢**：图片拖拽上传（#6560）、`/new` 偶发失败（#5949）等长期影响日常使用的体验问题需要更明确的修复排期。
- **多 Agent 调试透明度不足**：Subagent 行为不可见、循环调用难以察觉（#6505/#6569），缺乏细粒度的 trace 与干预接口。
- **平台兼容与认证问题**：Windows 平台下的 extensions 安装（#6334）、curl 安装失败（#3039）、IDE 连接陈旧状态（#6507）等跨平台场景仍较脆弱。
- **CI/夜间版本可信度**：nightly 发布失败导致用户对 preview 版本信心下降，建议增加预发布 smoke test。
- **MCP 生态细节**：未声明参数的 prompt 静默丢参（#6563/#6571）等问题提醒 MCP 集成需更全面的兼容性测试。
- **认证与连接稳定性**：#6565 中出现的 Internal Error 多语言报告，需统一错误链路与本地化文案。

---

*数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub 仓库*
*报告生成时间：2026-07-09*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**报告日期**：2026-07-09
**数据来源**：`github.com/Hmbown/DeepSeek-TUI`（注：本期活跃议题与 PR 主要关联同作者的 `Hmbown/CodeWhale` 仓库，已按原始链接呈现）

---

## 1. 今日速览

今日是 **v0.8.68 里程碑收束日**：围绕主执行板 #4092，多个 lane（fleet、catalog、copy、perf、setup、termux）在 24 小时内批量 Close，累计合并或推进 15+ PR，社区进入"集中攻关 + 验收"阶段。两大用户侧议题尤为突出：① 中文用户反馈**流式输出渲染严重延迟**（#4270，时速不稳定且末尾"砰"地一次性补齐），② **Termux/Android arm64 官方支持**进入多 PR 并行落地阶段（构建矩阵、上传器、本地 QA 已齐备）。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。当前活跃分支为 `work/v0.9.0-cutover`（在 v0.8.68 基础上推进）。

---

## 3. 社区热点 Issues

按评论数与战略权重综合排序：

| # | Issue | 主题 | 评论 | 关键看点 |
|---|---|---|---|---|
| 1 | [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 整体执行板（主控看板）** | 56 | 全项目唯一入口，所有开放 v0.8.68 子任务带 `lane-*` 标签，可按 lane 编排 agent，是项目当前最权威的协作协议。 |
| 2 | [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | **子代理环境级工具沙箱（`--disallowed-tools` 强制执行）** | 12 | 跨 session / sub-agent / Fleet worker / MCP 全链路强制工具限制，是 v0.8.68 安全主线，已有 PR #4096 实现 Phase 1。 |
| 3 | [#4270](https://github.com/Hmbown/CodeWhale/issues/4270) | **流式文本显示过慢（用户中文反馈）** | 3 | 终端打字速度跟不上 DeepSeek-V3-Flash 输出节奏，且末尾突然"咻"地补齐输出，疑似渲染/帧节流问题，与 lane-perf 直接相关。 |
| 4 | [#3965](https://github.com/Hmbown/CodeWhale/issues/3965) | **每个子代理显式 provider 路由 + LM Studio 支持** | 7 | 多 provider 场景下的关键痛点，让 AgentProfile 成为路由契约；PR #4262 已采用 Fleet 优先的合并方案。 |
| 5 | [#4111](https://github.com/Hmbown/CodeWhale/issues/4111) | **Fleet profile 应完全继承 AgentProfile** | 4 | 杜绝 Fleet 出现"平行路由/装备系统"，统一用 AgentProfile 管理 roster，是 Fleet 设计走向成熟的标志。 |
| 6 | [#3488](https://github.com/Hmbown/CodeWhale/issues/3488) | **CJK / Unicode / 终端宽度渲染 QA** | 4 | 中文/混合宽度终端长期可读性问题，列为 lane-copy 后的独立 QA lane，对中文/日韩用户至关重要。 |
| 7 | [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) | **Epic：官方 Termux / Android arm64 支持** | 2 | 用户长期诉求（#1135 累计反馈），目前已派生出构建、上传器、文档、QA 四个子任务（#4240/4241/4242/4258），几乎同日全部推进。 |
| 8 | [#4257](https://github.com/Hmbown/CodeWhale/issues/4257) | **xAI (Grok) 作为一级 provider（API key + OAuth 路径）** | 2 | 当前仅有模型族启发式而无实际联通，PR #4266 已补齐 OpenAI 兼容路由；OAuth 路径仍待跟进。 |
| 9 | [#4184](https://github.com/Hmbown/CodeWhale/issues/4184) | **以 Models.dev 作为 provider/model 元数据唯一真相源** | 3 | 模仿 OpenCode 路径，停止维护手工并行元数据，已落地为 #4185/4186/4187 与 PR #4255 自动化脚本。 |
| 10 | [#3757](https://github.com/Hmbown/CodeWhale/issues/3757) | **启动/启动性能优化** | 3 | 持续反馈启动"明显慢"；已并入 lane-perf，与 PR #4264（命令/正则缓存、FastHashMap）协同解决。 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 内容要点 |
|---|---|---|---|
| 1 | [#4277](https://github.com/Hmbown/CodeWhale/pull/4277) | OPEN | **Act / Plan / Operate 词汇统一**（#4273–#4276）——picker、header、footer、hotbar、help 全栈换词，Multitask→Operate，YOLO→隐式 Act+Full Access。 |
| 2 | [#4280](https://github.com/Hmbown/CodeWhale/pull/4280) | CLOSED | **WorkflowPanel 统一活动面**（#4121）——workflow / 直接 sub-agent 进度移出聊天流，统一在 composer 上方呈现。 |
| 3 | [#4279](https://github.com/Hmbown/CodeWhale/pull/4279) | CLOSED | **工具/MCP/技能/插件就绪状态盘点**（#3407）——新增 `setup/tools_mcp.rs`，对五大来源做 healthy / need-config / off 三态分类。 |
| 4 | [#4278](https://github.com/Hmbown/CodeWhale/pull/4278) | CLOSED | **workflow-js 沙箱失效-关闭回归测试**（#4129）——白名单主机全局、禁止模块/fs/net/env，启动后剥离临时 `__workflow_*`。 |
| 5 | [#4272](https://github.com/Hmbown/CodeWhale/pull/4272) | OPEN | **新增 RustSec `cargo-audit` 与 `cargo-deny` CI 检查**——供应链安全审查首次进入流水线。 |
| 6 | [#4271](https://github.com/Hmbown/CodeWhale/pull/4271) | CLOSED | **workflow 记录类型化 UI 事件**——新增 `WorkflowUiEvent`，贯穿快照与 JSONL 日志重放，sub-agent spawn 元数据透传。 |
| 7 | [#4269](https://github.com/Hmbown/CodeWhale/pull/4269) | CLOSED | **Release 工作流新增 `aarch64-linux-android`**（#4240）——用 NDK clang/llvm-ar 工具链，Linux DBus/pkg-config 不污染 Android 行。 |
| 8 | [#4268](https://github.com/Hmbown/CodeWhale/pull/4268) | CLOSED | **provider 设置先校验 key 再保存**（#3875）——先调 `/models` 验真，失败重开 picker 并展示真实错误，不持久化废 key。 |
| 9 | [#4266](https://github.com/Hmbown/CodeWhale/pull/4266) | CLOSED | **新增 xAI/Grok OpenAI 兼容路由**（#4257）——`XAI_API_KEY`/`BASE_URL`/`MODEL` 全套支持，CLI 别名、keyring、文档、示例齐备；OAuth 通道仍占位。 |
| 10 | [#4264](https://github.com/Hmbown/CodeWhale/pull/4264) | CLOSED | **命令构建与正则缓存**（v0.8.68 perf）——进程级静态缓存命令组/registry，工具搜索 + 替换正则引入 LRU，新引入 `FastHashMap/FastHashSet`（关 #4154/#4155）。 |

**附加关注**：
- [#4263](https://github.com/Hmbown/CodeWhale/pull/4263) 四 lane 合一里程碑批次（Android updater + Termux 文档 + perf 常量 + 子代理沙箱）。
- [#4255](https://github.com/Hmbown/CodeWhale/pull/4255) Models.dev 刷新/快照脚本（validate only 安全模式）。
- [#4096](https://github.com/Hmbown/CodeWhale/pull/4096) 子代理工具范围（sandbox）Phase 1 + 配套三份文档。

---

## 5. 功能需求趋势

按 24h Issue/PR 标签分布提炼：

| 方向 | 占比/热度 | 代表议题 |
|---|---|---|
| **🤖 Fleet / AgentProfile 规范化** | 🔥🔥🔥🔥🔥 | #4111、#4136、#4137、#4259、#4260、#4262、#4261 |
| **📱 Android / Termux 一级支持** | 🔥🔥🔥🔥 | #4236（Epic）、#4240、#4241、#4242、#4258、#4269 |
| **🧰 新 Provider 集成**（xAI、LM Studio、Models.dev） | 🔥🔥🔥🔥 | #4257、#3965、#4184、#4187、#4186、#4266 |
| **⚡ TUI/渲染性能 & 启动速度** | 🔥🔥🔥🔥 | #3757、#4113、#4264、#4155、#4154 |
| **🛡️ 子代理沙箱与安全审计** | 🔥🔥🔥 | #4042、#4096、#4272、#4278 |
| **🌐 多语言/本地化（尤其 CJK）** | 🔥🔥🔥 | #3488、#4225（提取硬编码到 locales）|
| **🧭 设置向导易用化** | 🔥🔥🔥 | #3407、#3875、#4268 |

---

## 6. 开发者关注点

**反复出现的痛点：**

1. **流式终端输出掉帧与"末端爆冲"**（#4270）——本次唯一明确来自中文用户的性能投诉，模型吞吐正常但终端节流导致大量字符延迟到达，建议优先复现并测量 `Instant::now()` → `Diff::count` 帧间隔与 flush 粒度，**短期可合并 lane-perf 缓存 PR 后重测**。

2. **Fleet 长期存在"平行配置系统"造成的认知负担**——`AgentProfile` 与 `FleetProfile` 字段重叠且语义不一致（#4111、#4136、#4261），社区与维护者均认为应消灭 Fleet-only 的 route/loadout 概念，集中落到 AgentProfile。

3. **Android 错装 Linux 资产**——之前 `linux-arm64` 资产被误用为 Termux 二进制（#1135 沉淀），现在独立 `android-arm64` 通道已建立，但**首次运行体验、PTY 行为、provider 配置引导**仍需真实设备 QA 闭环（#4242）。

4. **手工维护模型目录的脆弱性**——`provider_lake` 与 Models.dev 不一致风险（#4184），自动化刷新脚本 #4255 只能 validate/dry-run，**写入路径尚未启用**，后续需要把缓存 hash 与失败回退策略走通。

5. **子代理工具限制未贯穿所有执行面**（#4042）——`--disallowed-tools` 已可用但仅在 session 级生效，Fleet worker / MCP server / sub-agent 三处仍未强制；Phase 1 在 PR #4096 完成，需继续推进 Phase 2/3。

6. **CJK / Unicode 在窄终端的可读性**（#3488）——宽字符与混排终端下，selector 列表、对齐、首字母 wrap 经常错位，影响中文/日韩用户体验，与 #4270 的迟滞感叠加放大"终端就不好用"的印象。

7. **启动速度肉眼可感**（#3757）——本地重建后反复进/退 TUI 时尤为明显，PR #4264 把命令注册表与正则做了进程级缓存，**实测需关注首次冷启动改善与功能正确性回归**。

---

> 📎 **建议跟踪**：明日重点观察 PR #4277（词汇统一）能否在不破翻译键的前提下合并；PR #4272（安全审计）的 CI 阻断策略与误报抑制；#4270（流式延迟）是否被确认复现并进入 lane-perf 修复队列。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*