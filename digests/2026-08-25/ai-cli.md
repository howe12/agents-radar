# AI CLI 工具社区动态日报 2026-08-25

> 生成时间: 2026-08-25 00:54 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比报告
**报告日期：2026-08-25** ｜ 数据窗口：各工具近 24 小时社区动态

---

## 1. 生态全景

2026 年 8 月底，主流 AI CLI 工具集体进入"功能快速推进 + 回归控制承压"的双重阶段：**头部商业产品（Claude Code、Codex）** 在版本迭代速度与平台兼容性之间剧烈拉扯，**新兴力量（Pi、OpenCode）** 通过多 Provider 中立化与本地模型集成打开差异化空间，**国内系（Qwen、Kimi、DeepSeek TUI）** 则在 IM 生态对接、Computer Use 路线图与中文文档体验上加速布局。**"Subagent 治理、Token 成本可观测性、MCP/OAuth 企业落地"** 成为跨工具共同焦点，而 macOS arm64 与 Windows 平台则成为各团队普遍低估、却持续暴露问题的"高风险平台"。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 24h Release | 关键活跃信号 |
|------|:-----------:|:-------:|:-----------:|--------------|
| **Claude Code** | 10（Top 10） | 3 | ✅ v2.1.243 | 4 个 Linux 段错误工单高度相关 |
| **OpenAI Codex** | 50+（含累计） | 18（其中 10 项 bot PR） | ✅ rust-v0.150.0-alpha.8 | bot 合入节奏主导；macOS auth 高热 |
| **Gemini CLI** | 10（Top 10） | 10 | ✅ v0.57.0-preview.1 | P1 子代理 / 挂起问题密集 |
| **GitHub Copilot CLI** | **40** | **1** | ✅ v1.0.81-9 | 活跃度最高但 PR 极少，沉淀期 |
| **Kimi Code** | **1** | **1** | ❌ 无 | 社区样本极小，#1994 已挂 4 个月 |
| **OpenCode** | 10+（Top 10） | 10 | ✅ v1.18.22 | TUI 侧边栏回归 + Ox Alpha 大面积故障 |
| **Pi** | 10+（Top 10） | 10 | ✅ v0.84.3 | 协议细节与 Windows 双线收尾 |
| **Qwen Code** | 10（Top 10） | 10 | ✅ v0.22.0-nightly + cua-driver-rs v0.20.0 | Computer Use 第三阶段铺路 |
| **DeepSeek TUI** | **28** | **17** | ❌ 无（v0.9.12 待发） | "监督式运行栈"系列 PR 一次性合并 |

**观察**：活跃度呈两极分化——Codex / Copilot CLI / DeepSeek TUI 的 issue 与 PR 数量显著领先，但 PR 多由内部 bot（如 `copyberry[bot]`）推动；Kimi Code 几乎处于"低维护"状态；Claude Code / Pi / Qwen 维持稳定高质量产出。

---

## 3. 共同关注的功能方向

### 🔴 跨工具高度共识的"高优先级议题"

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|----------|
| **Subagent / 多 Agent 治理** | Claude Code、Codex、Gemini CLI、Qwen Code、DeepSeek TUI | 线程回收（Codex #39694）、状态误报（Gemini #22323：MAX_TURNS 后仍报 success）、跨终端同步错乱（Claude #88017）、team shutdown 通道挤压普通汇报（Qwen #9510）、turn-owned 子代理静默销毁（DeepSeek #5596，347k tokens 付诸东流） |
| **会话 / 持久记忆质量** | Claude Code、Gemini CLI、DeepSeek TUI | 自动记忆可观测性（Claude #82056）、MEMORY.md 不可配置（#79217）、Auto Memory 低信号会话无限重试（Gemini #26522）、跨会话记忆整体缺位（DeepSeek #2492） |
| **Token 成本可观测性** | Claude Code、OpenAI Codex、GitHub Copilot CLI、DeepSeek TUI、Kimi Code | `/usage` Loops 拆分（Claude v2.1.243 已落地）、OTEL turn 级 cost_microusd 计数器（Codex #40488）、Subagent OTel 缺少计费属性（Copilot #4224，AI Credits 被低估）、context inspector 展示 tool/MCP 成本（DeepSeek #5553）、K2.6 长 CoT 与 CLI 高频调用结构性矛盾（Kimi #1994） |
| **MCP / OAuth 企业落地** | Claude Code、OpenAI Codex、GitHub Copilot CLI、DeepSeek TUI、Qwen Code | Drive MCP 大文件截断（Claude #50358）、MCP `tools/list_changed` 不触发缓存失效（Codex #33266）、Atlassian/Entra ID OAuth 回归（Copilot #4490/#4582）、MCP OAuth 2.1（DeepSeek #1409）、HTTP transport 重连假阳性（Qwen #9944） |
| **Windows / 平台兼容性** | Claude Code、OpenAI Codex、GitHub Copilot CLI、Pi | 桌面 Dispatch 入口丢失（Claude #87253）、WSL 集成终端静默失败（Codex #37104）、归档 worktree 失败 os error 32（Copilot #4593）、PowerShell 工具与 Alpine musl 支持（Pi #7547 / #8512 / #8591） |
| **长会话压缩策略精细化** | Claude Code、OpenAI Codex、Pi | /resume 缓存失效（Claude #87137，Bash 工具描述塞入会话 URL 导致全量重读）、compaction 暴露给 agent（Codex #21777）、100% 上下文才触发（Pi #6879，2 小时会话直到 373k tokens 才压缩）、per-model 配置（Pi #8592 已合） |
| **多 Provider / 中立化** | OpenCode、DeepSeek TUI、Pi | Provider 中立化审计发现 18 处 DeepSeek 专属门禁（DeepSeek #5588）、OpenAI 兼容提供商 `textVerbosity` 误发（OpenCode v1.18.22）、Gemini thought_signature 透传（Pi #8590）、DeepSeek 400 on tool 相邻性（Pi #8166） |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 商业旗舰 / 通用代理 | 严肃生产用户、企业工程团队 | 功能广度领先（Loops、Auto Memory、Agent View），但回归控制挑战最大；2.1.242/2.1.243 在 Linux 触发确定性 SIGSEGV |
| **OpenAI Codex** | 商业前沿实验场 | OpenAI 生态重度用户、alpha 早期采用者 | rust 主线激进推进；bot PR 主导（18 项内部硬化），外部贡献者门槛升高；macOS arm64 当前最高风险平台 |
| **Gemini CLI** | GA 前夕的稳定化产品 | Google Cloud / Gemini API 用户 | v0.57 进入"修边角"阶段；Auto Memory 与 Browser Agent 是 P1/P2 重灾区 |
| **GitHub Copilot CLI** | 企业落地的合规入口 | 企业 SSO / MCP 集成用户、计费敏感团队 | MCP/OAuth 是拦路虎（#4490、#4582），权限模型是社区投票焦点（#1973 👍27）；Windows 仍是短板 |
| **Kimi Code** | 中文长 CoT 模型载体 | Moonshot 生态用户 | K2.6 长思维链与 CLI 高频调用结构性矛盾；社区维护活跃度低 |
| **OpenCode** | 多 Provider 开放终端 | 跨模型开发者、本地与云端混合用户 | TUI 体验优化（#30877 14 👍）+ 新模型接入诉求强烈（DeepSeek、Qwen3.8 Max、GLM-5.3） |
| **Pi** | 协议与平台细节派 | 跨 Provider、本地模型、Windows 开发者 | "协议细节与 Windows 体验"双线收尾；per-model compaction、Gemini 透传、Codex thread-id 亲和体现"硬核打磨"路线 |
| **Qwen Code** | 国内 IM 集成 + Computer Use 路线图 | 国内团队、DingTalk 用户、Computer Use 早期采用者 | cua-driver-rs 预编译二进制（macOS/Linux/Win + Node.js 单文件）；/review 技能执行化（多个 PR 并行） |
| **DeepSeek TUI** | Provider 中立化 + 监督式运行 | DeepSeek 模型重度用户、机器可读监督需求方 | 一次性合并"控制 socket + 生命周期 outbox + /relaunch"监督栈；架构大文件（lib.rs 18.7k）待拆解 |

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 高产出（成熟期震荡）
- **OpenAI Codex**：50+ issues + 18 PRs，但 bot PR 占主导——内部硬化节奏强，但**外部贡献者门槛实际升高**。
- **GitHub Copilot CLI**：40 issues 居首，但仅 1 PR——处于**典型"沉淀期"**，代码侧产能与社区反馈严重不匹配。

### 🟡 高活跃 + 中产出（功能快速迭代）
- **Claude Code**：4 个相关段错误工单集中爆发，反映**版本号推进速度已超过质量验证带宽**。
- **Gemini CLI**：v0.57 preview 周期进入"修边角"，但 Auto Memory 与 Browser Agent 仍是 P1 重灾区。
- **DeepSeek TUI**：28 issues + 17 PRs，单日合并"监督式运行栈"四个系列 PR——**产能爆发但架构债务明显**（lib.rs 18.7k 行）。

### 🟢 中活跃 + 高产出（健康打磨）
- **Pi**：10+10 平衡，且 PR 多直接关闭 Issue——**"PR → Issue 闭环率"最高的工具**。
- **OpenCode**：10+10，关键修复 PR（#44796、#44811）直接闭环社区呼声最高的两个 Issue。

### 🟡 低活跃 + 中产出（路线图阶段）
- **Qwen Code**：nightly 节奏稳定，但社区诉求集中在"WebShell 切流后的 UX 债务回填"。

### 🔴 低活跃 + 低产出（值得关注）
- **Kimi Code**：仅 1 issue / 1 PR，#1994 已挂 4 个月未关闭——**商业模型与产品体验的结构性矛盾若不解决，社区可能进一步流失**。

---

## 6. 值得关注的趋势信号

### 📡 信号一：Subagent 治理成为"系统性短板"
**5 个工具同时报告**——这不是孤立 bug，而是当前架构下"长生命周期 + 多 Agent"模式的共同脆弱点。建议开发者：**生产化部署前手动验证子代理回收路径，避免 turn-owned 资源静默销毁**。

### 📡 信号二：Token 成本可观测性从"加分项"变"刚需"
OTEL 成本指标、context inspector、Subagent 计费属性、/usage Loops 拆分——**跨工具共同诉求指向同一件事：让"花在哪里"看得见**。趋势：成本可观测性将成为企业采购决策的硬指标。

### 📡 信号三：MCP 进入"OAuth 2.1 时代"
API Key 模式正被 OAuth 2.1 替代（DeepSeek #1409、Copilot #4490/#4582 Entra ID）。**若你正在为 MCP server 添加鉴权，建议直接按 OAuth 2.1 / RFC 8414 §3.3 设计**，避免后续协议迁移成本。

### 📡 信号四：Provider 中立化是"第二曲线"
OpenCode、DeepSeek TUI、Pi 都在不同程度上朝多 Provider 方向演进，且都遇到"中立概念但实际专属行为"的问题（DeepSeek #5588 审计 18 处门禁）。**对工具选型者：选择中立化程度更高的工具，可降低未来模型切换成本**。

### 📡 信号五：macOS arm64 与 Windows 是"被低估的高风险平台"
- **macOS arm64**：Codex 多版本 auth 回归、Claude Code Drive MCP 截断、Kimi Code Windows 体验
- **Windows**：Codex WSL/PTY/Computer Use、Copilot CLI 归档锁、Claude Code Dispatch、Pi PowerShell 模式

**建议**：跨平台项目必须在 CI 中加入 macOS arm64 + Windows 验证矩阵，否则生产事故会持续暴露。

### 📡 信号六：内部硬化 vs 外部贡献的失衡
Codex 单日 18 个 bot PR 合并，外部贡献空间被挤压；Claude Code PR 数量明显偏低；Kimi Code 几乎停滞。**趋势：头部商业工具的"外部贡献者友好度"正在下降**，中长期可能影响工具生态的多样性。

### 📡 信号七：Auto Memory 从"有无"到"质量"
Claude Code、Gemini CLI、DeepSeek TUI 同时面临

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-25 | 数据来源：anthropics/skills**

> ⚠️ **数据说明**：PR 列表中评论数与点赞数均显示为 `undefined`，因此本报告的 PR 热度基于"关联 Issue 评论数 / 修复关键 Bug / 问题覆盖面 / 近期活跃度"综合推断，非直接评论排序。Issues 数据完整可用。

---

## 一、热门 Skills 排行（PR Top 8）

### 1. 🏆 skill-creator 评测体系修复（PR #1298, #1099, #1050, #539, #1602）
- **状态**：OPEN（多 PR 并行修复中）
- **功能**：修复 `run_eval.py` 始终返回 `recall=0%` 的核心 Bug，使 description 优化循环能真正工作
- **社区热点**：直接对应 **Issue #556（12 条评论，7 👍）**——有 10+ 独立复现者，是社区最高优先级的"基础设施级"问题。同时影响 Windows 兼容性、YAML 解析、MCP 序列化等
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298) | [PR #1099](https://github.com/anthropics/skills/pull/1099) | [PR #1050](https://github.com/anthropics/skills/pull/1050) | [Issue #556](https://github.com/anthropics/skills/issues/556)

### 2. 🥈 skill-quality-analyzer & skill-security-analyzer（PR #83）
- **状态**：OPEN（创建于 2025-11-06，仍未合并）
- **功能**：元技能——为其他 Skills 提供五维度质量分析和安全审计
- **社区热点**：精准命中 **Issue #492（43 条评论，2 👍）**——社区对"Anthropic 命名空间信任边界滥用"的高度担忧。该 Skill 是社区自主提出的安全治理答案
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83) | [Issue #492](https://github.com/anthropics/skills/issues/492)

### 3. 🥉 self-audit — 推理质量门控（PR #1367）
- **状态**：OPEN（v1.3.0）
- **功能**：交付前 AI 输出审计，先做机械文件校验，再做四维度推理质量检查
- **社区热点**：与 **Issue #1385（4 条评论）** "Reasoning Quality Gate Pipeline"提案同源，是质量保证类技能的代表作
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367) | [Issue #1385](https://github.com/anthropics/skills/issues/1385)

### 4. Hivemind 多 Agent 编排（PR #1628）
- **状态**：OPEN（2026-08-21 最新）
- **功能**：用免费开源模型（opencode）做 headless worker，让 Claude Code 专注规划与评审，实现零成本多 Agent
- **社区热点**：解决"贵模型上下文稀缺"问题，是 AGI 工作流层面的创新尝试
- **链接**：[PR #1628](https://github.com/anthropics/skills/pull/1628)

### 5. document-typography 排版质量控制（PR #514）
- **状态**：OPEN（创建于 2026-03-04）
- **功能**：防止 AI 生成文档中的孤行、寡行、编号错位等排版缺陷
- **社区热点**：定位"每个 Claude 生成文档都受影响"的普遍痛点
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

### 6. ServiceNow 平台技能（PR #568）
- **状态**：OPEN（更新于 2026-08-12，仍活跃）
- **功能**：覆盖 ITSM/ITOM/ITAM/FSM/SPM/CSDM/IntegrationHub 的企业级 ServiceNow 助手
- **社区热点**：回应企业 IT 自动化对 Claude 的需求，是 B2B 落地的代表性 Skill
- **链接**：[PR #568](https://github.com/anthropics/skills/pull/568)

### 7. testing-patterns 测试模式（PR #723）
- **状态**：OPEN
- **功能**：完整测试栈指南——Testing Trophy 哲学、AAA 模式、React 组件测试、Mock 策略等
- **社区热点**：填补社区在"AI 生成测试代码"领域的最佳实践空白
- **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

### 8. frontend-design 改进（PR #210）
- **状态**：OPEN（2026-01-05 起，多次更新）
- **功能**：提升前端设计 Skill 的清晰度、可执行性与内部一致性
- **社区热点**：长期优化型 PR，反映社区对现有 Skill 质量的持续打磨
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

---

## 二、社区需求趋势（来自 Issues Top 15）

| 需求方向 | 代表 Issue | 评论数 | 共识度 |
|---------|-----------|-------|-------|
| 🔒 **安全与信任治理** | [#492](https://github.com/anthropics/skills/issues/492) 命名空间信任滥用 | **43** | ⭐⭐⭐⭐⭐ |
| 🏢 **企业级共享/分发** | [#228](https://github.com/anthropics/skills/issues/228) Org 级 Skill 共享 | **16** | ⭐⭐⭐⭐⭐ |
| 🧠 **Agent 记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 符号化笔记 | **9** | ⭐⭐⭐⭐ |
| 🛡️ **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance | **6** | ⭐⭐⭐⭐ |
| 📦 **插件去重/打包规范** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复 | **6** | ⭐⭐⭐⭐ |
| ⚡ **Skill 体积/上下文管理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次注入 156k tokens | **4** | ⭐⭐⭐⭐ |
| 🔌 **Skills → MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs | **4** | ⭐⭐⭐ |
| ☁️ **云平台集成** | [#29](https://github.com/anthropics/skills/issues/29) Bedrock 兼容 | **4** | ⭐⭐⭐ |
| 📄 **企业文档协作** | [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint + 安全 | **4** | ⭐⭐⭐ |

**趋势提炼**：
1. **信任与安全（Trust & Security）**——热度断层式领先，#492 单一 Issue 占总讨论量的近 30%
2. **企业分发与协作**——Org 级共享成为企业落地的核心瓶颈
3. **Skills 工程化**——评测、审计、质量门控、上下文管理是社区自发形成的"基础设施层"需求
4. **Agent 协议互操作**——Skills 与 MCP、Agent Memory 的边界讨论持续升温

---

## 三、高潜力待合并 Skills（即将落地）

以下 PR 处于"问题明确、影响面大、解法已就绪"的窗口期，预期近期合并：

| PR | 关键 Skill | 合并催化剂 |
|---|---|---|
| [PR #1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 关联 #556（12 评论），多位独立复现 |
| [PR #1050](https://github.com/anthropics/skills/pull/1050) / [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 兼容性修复 | 阻塞 Windows 用户使用 skill-creator |
| [PR #83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接回应 #492 最热门安全议题 |
| [PR #539](https://github.com/anthropics/skills/pull/539) | YAML 特殊字符警告 | 低风险、高价值的鲁棒性改进 |
| [PR #538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) | PDF/DOCX 引用与 ID 冲突修复 | 案例敏感与 w:id 冲突导致真实文档损坏 |
| [PR #1602](https://github.com/anthropics/skills/pull/1602) | 评测序列化与脚本稳定性 | 范围明确，影响 mcp-builder 等核心 Skill |
| [PR #1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 与 #1385 提案形成闭环 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是："让 Skills 本身值得被信任"——即围绕评测准确性（#556）、命名空间安全（#492）、Org 级分发（#228）、上下文预算（#1487）四大基础设施议题，建设一个可审计、可治理、可规模化的 Skills 工程体系；垂直领域 Skills（ServiceNow / SAP / HPC / Pyxel / ODT）虽百花齐放，但社区真正投票的方向是"Skills 的 Skills"——质量门控、记忆压缩、多 Agent 编排等元能力。**

---

# Claude Code 社区动态日报
**2026-08-25 · 主编：AI 工具观察**

---

## 📌 今日速览

v2.1.243 发布引入了 `/usage` 的 Loops 拆分视图与 `modelPicker` 配置项，但同日被多名 Linux 用户反馈存在 **glibc 启动段错误**（mimalloc 符号导出冲突导致 `free(NULL)` 崩溃），2.1.242/2.1.243 在 CachyOS、glibc 2.44 等环境下出现确定性 SIGSEGV，建议暂时回滚至 2.1.241。社区讨论度最高的议题集中在 **自动记忆系统的可见性** 与 **后台 Agent 会话的状态管理**。

---

## 🚀 版本发布

### v2.1.243（2026-08-24 发布）

**新增功能**

- **`/usage` 的 Loops 拆分**：新增按循环拆分的运行次数、token 总量、单次均值、最近运行时间等指标，方便定位 `/loop` 中的"失控"任务。
- **`modelPicker` 设置**：可通过配置项定义 `/model` 选择器的有序、命名模型列表（支持任意 id 拼写）。

**已知问题**

- ⚠️ 多个 Linux 发行版（CachyOS、glibc 2.44）报告原生安装版启动即崩溃，包括 `claude --version`。建议回退 2.1.241：[#89360](https://github.com/anthropics/claude-code/issues/89360)、[#89371](https://github.com/anthropics/claude-code/issues/89371)、[#89370](https://github.com/anthropics/claude-code/issues/89370)、[#89366](https://github.com/anthropics/claude-code/issues/89366)。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 重要性 |
|---|------|------|-----|--------|
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | 会话无法判断自动记忆索引是完整、截断还是未加载 | 25 | 1 | ⭐⭐⭐⭐⭐ |
| [#89360](https://github.com/anthropics/claude-code/issues/89360) | **v2.1.243 Linux 段错误**（regression） | 16 | 4 | ⭐⭐⭐⭐⭐ |
| [#50358](https://github.com/anthropics/claude-code/issues/50358) | Drive MCP `create_file` 大文件静默截断（>10K base64） | 10 | 4 | ⭐⭐⭐⭐ |
| [#89334](https://github.com/anthropics/claude-code/issues/89334) | **v2.1.242 全版本启动段错误**（mimalloc free 无 NULL 检查） | 6 | 5 | ⭐⭐⭐⭐⭐ |
| [#79217](https://github.com/anthropics/claude-code/issues/79217) | 自动记忆 MEMORY.md 索引 200 行/25KB 限制应可配置 | 4 | 2 | ⭐⭐⭐⭐ |
| [#89370](https://github.com/anthropics/claude-code/issues/89370) | claude 与 install.sh 均段错误 | 3 | 6 | ⭐⭐⭐⭐ |
| [#89366](https://github.com/anthropics/claude-code/issues/89366) | Claude CLI 启动确定性 SIGSEGV（free/__newlocale/pthread_once） | 3 | 1 | ⭐⭐⭐⭐ |
| [#88489](https://github.com/anthropics/claude-code/issues/88489) | 模型"自作主张"按时段缩减任务范围（先前报告被自动关闭） | 3 | 0 | ⭐⭐⭐ |
| [#87137](https://github.com/anthropics/claude-code/issues/87137) | Bash 工具描述内嵌会话 URL，导致每次 `/resume` 全量失效 prompt 缓存 | 3 | 0 | ⭐⭐⭐⭐ |
| [#85888](https://github.com/anthropics/claude-code/issues/85888) | 跨会话待审批消息无审批 UI（永久挂起） | 2 | 1 | ⭐⭐⭐ |

**选评**

- **#82056**：自动记忆是 Claude Code 长期演进的重要能力，但会话内"不知道自己加载了多少"是治理与可信度问题，25 条评论集中讨论状态 API 设计。
- **#89360 / #89334 / #89370 / #89366**：四个高度相关的"Linux 启动崩溃"工单，本地化到 glibc + mimalloc 版本符号冲突，根因清晰，社区强烈期待热修复或回滚指导。
- **#87137**：精确指出 `Bash` 工具描述里塞入的会话 URL 会让前缀缓存从第一个字节开始失效，每次 `/resume` 全量重读，成本影响巨大，对 token 经济性敏感的用户反响强烈。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时 PR 数量极少（3 条），且活跃度低；以下为主要动向。

| # | 标题 | 状态 | 简介 |
|---|------|------|------|
| [#79898](https://github.com/anthropics/claude-code/pull/79898) | 新增 Claude Apps Gateway on AWS 部署示例 | **CLOSED** | 对应 GCP 示例的 AWS 姊妹篇，含 Amazon Bedrock 部署模板（issues 中已关闭，但内容已上线文档）。 |
| [#75252](https://github.com/anthropics/claude-code/pull/75252) | docs：澄清 Plugin MCP 配置的作用域 | **CLOSED** | 区分 Plugin 自带的 `mcpServers` 定义与用户级 `~/.claude.json` 的 MCP allow/deny 列表。 |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | 新增 pylint.yml | **OPEN** | 为仓库引入 Pylint 配置，建议项目维护者跟进是否合并。 |

**注**：本期 PR 数量明显偏低，可能与版本热修复集中（多项 Linux 崩溃回归）相关，社区贡献暂未集中在新功能上。

---

## 📈 功能需求趋势

从本期与近期活跃 Issue 中提炼的社区诉求方向：

1. **🐧 Linux 兼容性与打包质量（最紧急）**
   2.1.242 起 mimalloc 导出符号冲突引发段错误，已成为近一周最高优先级回归。
2. **🧠 自动记忆系统的可观测性 & 可配置性**
   - 加载状态暴露（#82056）
   - MEMORY.md 大小上限可配置（#79217）
   - 长期记忆策略整体反思（#88579：第三方 91k-star 替代品的出现说明官方体验尚未满足）
3. **🧮 性能与成本**
   - `/resume` 缓存失效（#87137）
   - `/usage` 增加 Loops 拆分（v2.1.243 已部分回应）
4. **🖥️ Agent View / 后台会话一致性**
   多终端同会话滚动同步错乱（#88017）、会话无法判断后台 subagent 健康度（#86764）、上下文丢失（#86688）。
5. **🧰 模型选择器精细化**
   `modelPicker` 设置（v2.1.243）已落地，但 Issue #89316 等仍反映子代理出现意外模型。
6. **🔐 沙箱与权限 Bug**
   `sandbox.network.strictAllowlist` 不生效（#87163 已关闭，但信任问题仍在）；commit 钩子越权执行（#83127）。
7. **🪟 桌面/Cowork 体验**
   Windows Dispatch 入口丢失（#87253）、桌面网桥工具缺失（#89120）。

---

## 👨‍💻 开发者关注点（高频痛点）

1. **回归阻断升级路径**：v2.1.242 / 2.1.243 在主流 Linux 发行版上直接无法启动，影响 CI 与本地开发，强烈呼吁官方提供 **热修复小版本 + 升级前检测**。
2. **内存系统"半成品"感**：官方持久记忆虽然内置，但既不可观测、也不可配置、且容易在多项目上下文被截断，迫使大量用户转向第三方插件（91k star 量级），社区呼吁官方给出"完整说明 + 路线图"。
3. **Prompt 缓存浪费**：工具描述内嵌运行时 URL 等"动态但前置"的字段，会让前缀缓存命中率归零，开发者希望官方将"会话元数据"从工具描述中剥离。
4. **Agent View 与后台会话模型混乱**：跨会话状态泄漏、僵尸进程泄漏（#87891：6 周累积 64 进程 / 7.1 GB）、远程会话重复创建（#89316），开发者反馈"难以在生产中信任后台 Agent"。
5. **MCP 集成的可靠性**：Drive MCP 大文件截断（#50358）暴露了 MCP server 与宿主二进制在体积限制上的不一致，需要统一约束。
6. **模型"越权"行为**：模型根据时段擅自收窄任务范围或劝停工作（#88489），开发者担心自治代理的可预测性。

---

## 🧭 一句话总结

**今日 Claude Code 社区的核心矛盾是"功能快速推进"与"回归控制质量"的拉扯**：v2.1.243 的 Loops 拆解与 `modelPicker` 值得点赞，但 Linux 启动崩溃与内存/Agent 视图的"半成品感"仍是阻碍广泛生产化部署的最大障碍。

> 📎 数据窗口：2026-08-24 24h 内 GitHub 活动 ｜ 整理：AI 工具观察

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-25** · 数据来源：github.com/openai/codex

---

## 今日速览

今日发布 `rust-v0.150.0-alpha.8` 版本，未公开具体变更。社区层面最值得关注的是 **macOS 认证与会话稳定性出现聚集性故障**（#39162、#40267），以及 **subagent 线程回收机制存在多版本未修复的回归**（#39694、#35209、#32353）。PR 侧则由自动化机器人账号 `copyberry[bot]` 在 24 小时内合入约 18 项改动，集中在 TUI 体验、可观测性（OTEL）、凭据管理与代码架构重构四个方向，整体节奏偏"内部硬化 + 小幅打磨"。

---

## 版本发布

- **[rust-v0.150.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.150.0-alpha.8)** — 今日发布，未提供 changelog 详情。属于主线 alpha 推进版本，建议关注后续 alpha.9 的 diff 以确认是否包含 #39162（macOS auth 失效）或 #39694（subagent 线程泄漏）的修复。

---

## 社区热点 Issues

按议题影响面与社区反馈强度排序：

### 🔥 高优先级 / 高互动

1. **[#39162](https://github.com/openai/codex/issues/39162) — macOS 打开既有会话即触发 ChatGPT 登出（51 评论 · 31 👍）**
   26.814.41407 版本起，打开已有会话会破坏 auth 流程并跳转登录页。**这是今天热度最高的 issue**，社区中有大量 macOS arm64 用户复现，直接影响日常使用。建议立即回滚到此前的 26.810.52044 验证版本。

2. **[#35097](https://github.com/openai/codex/issues/35097) — `gpt-5.6-luna` 被错误标记为 MultiAgent V1，V2 `spawn_agent` 拒绝（29 评论 · 51 👍）**
   模型注册表中的 capability 标记与多代理协议不一致，导致该模型无法在新版 spawn_agent 流程中使用。👍 数高于评论数，说明社区普遍认同应当支持该模型。

3. **[#35746](https://github.com/openai/codex/issues/35746) — 分页历史丢弃合法 rollout 记录并复用序号（25 评论）**
   0.146.0-alpha.10.1 起出现，影响 Linux CLI 用户。涉及 `RolloutLine` 解码逻辑，属于数据完整性问题，修复前不应合入 stable。

4. **[#37104](https://github.com/openai/codex/issues/37104) — Windows WSL 集成终端静默失败（19 评论 · 9 👍）**
   26.730.8199.0 起，PTY/WSL 启动前即崩溃，侧边栏与底部面板均无法打开。属于"Papercuts 2026"分类，意味着官方已经注意到但尚未处理。

5. **[#39903](https://github.com/openai/codex/issues/39903) — 请求增加"始终展开已执行命令"选项（21 评论 · 36 👍）**
   现阶段 TUI 默认折叠"Ran N commands"，开发者难以审计 agent 真实行为。👍/评论比例显示这是一个被广泛支持的体验改进请求。

### ⚠️ 中优先级 / 已存在多版本

6. **[#21777](https://github.com/openai/codex/issues/21777) — 自动 compaction 应暴露给 agent（9 评论 · 9 👍）**
   增强请求：在上下文窗口填满前主动触发压缩，而非等读完文件后再被动触发。

7. **[#40267](https://github.com/openai/codex/issues/40267) — 26.818.41705 macOS 恢复线程即登出（7 评论）**
   与 #39162 高度相关，但聚焦 OAuth refresh_token 的持久化缺陷。两次登入会话新 token 同样在 76 秒内失效，疑为服务端 + 客户端双向 bug。

8. **[#17354](https://github.com/openai/codex/issues/17354) — App 内近期线程历史被清空（14 评论）**
   一个跨多个月仍存在的旧 bug，App 内最近 2-3 个月历史消失，但 CLI 中仍可见。仅在 macOS 上报告。

9. **[#39694](https://github.com/openai/codex/issues/39694) — 已完成的 subagent 线程未被回收（5 评论）**
   长期任务中即便只显示 1 Active / 12 Done 也会误报"agent thread limit reached"。这是 #35209、#32353 的同族问题。

10. **[#40339](https://github.com/openai/codex/issues/40339) — config.toml 迁移破坏 `--strict-config`，网络访问被静默忽略（5 评论）**
    `npm update` 后自动写入的 `default_permissions` 块导致严格模式解析失败；沙箱写入的 `network_access` 在静态配置中被忽略。属于配置迁移回归。

### 补充观察

- **[#33266](https://github.com/openai/codex/issues/33266)** MCP `tools/list_changed` 不触发工具缓存失效（5 评论）
- **[#34289](https://github.com/openai/codex/issues/34289)** Hooks `PostToolUse` 不携带失败信号（6 评论）
- **[#40394](https://github.com/openai/codex/issues/40394)** Computer Use 与 Chrome 控制突然失效
- **[#40476](https://github.com/openai/codex/issues/40476)** Windows 远程控制持续多个版本不可用

---

## 重要 PR 进展

⚠️ 需要说明：今日最活跃的 PR 作者是 **`copyberry[bot]`**——这是 Codex 自身的项目内自动化机器人，并非外部开发者。所有该作者 PR 均已 CLOSED（合并）。下表挑选的是对开发者实际有影响的合并项。

1. **[#40498](https://github.com/openai/codex/pull/40498) — 调整 app-server 后台模型刷新间隔（3 min → 4 min 30 s）**
   降低高频刷新对带宽与请求配额的占用。属于平衡性能 vs 实时性的取舍。

2. **[#40495](https://github.com/openai/codex/pull/40495) — `/rename` 自动建议基于上下文的线程标题**
   打开重命名面板时，根据最近用户/助手消息预填可编辑的建议标题。

3. **[#40492](https://github.com/openai/codex/pull/40492) — 未命名 TUI 线程自动生成描述性标题**
   首条用户消息立刻生成临时标题，后台异步替换为规范化标题；保留用户手动改名。

4. **[#40488](https://github.com/openai/codex/pull/40488) — 导出 `codex.turn.cost_microusd` 为 OTEL 计数器**
   新增 turn 级成本指标，含会话、是否打断、速度、推理强度等维度。是企业成本分析的重要基建。

5. **[#40487](https://github.com/openai/codex/pull/40487) — 将 agent role 加载抽离到 `codex-agent-roles` crate**
   拆分角色配置的解析、发现、校验与分层加载，减轻 `codex-core` 体积。

6. **[#40497](https://github.com/openai/codex/pull/40497) — 强化内部 Guardian 会话隔离**
   Guardian 复核会话与父会话保持独立，但尊重托管执行与环境限制。安全相关，必要改进。

7. **[#40490](https://github.com/openai/codex/pull/40490) — 凭据代理期间硬化项目配置**
   在凭据代理生效时，项目配置不再影响凭据 provider 环境变量与 shell 启动行为。修复潜在凭据泄露路径。

8. **[#40484](https://github.com/openai/codex/pull/40484) — 子环境中代理凭据别名**
   即使父级的标准 provider 环境变量被过滤，仍能发现并替换子环境中的凭据。

9. **[#40502](https://github.com/openai/codex/pull/40502) — `/status` 中将 home 路径折叠为 `~`**
   改善 `/status` 输出可读性，项目内/上级路径仍保留相对路径。

10. **[#40491](https://github.com/openai/codex/pull/40491) — `skills.read` 分页尊重调用预算**
    按当前调用的 response budget 序列化分页，避免超限。修复潜在的 skills API 截断问题。

> 以下非 bot PR 也已合并：**[#30621](https://github.com/openai/codex/pull/30621)** 启动期 WebSocket prewarm 链路追踪、**[#30690](https://github.com/openai/codex/pull/30690)** 压缩请求失败时无压缩重试一次、**[#30765](https://github.com/openai/codex/pull/30765)** 为 fallback 模型启用 tool_search。

---

## 功能需求趋势

从 50 条 issue 中提炼出当前社区最关注的 6 个方向：

| 方向 | 典型 issue | 关注度 |
|---|---|---|
| **🔐 认证与 OAuth 稳定性** | #39162、#40267 | 极高（macOS 主线回归） |
| **🤖 Subagent / 多代理线程治理** | #39694、#35209、#32353 | 高（涉及 V1/V2 模型协议与线程资源回收） |
| **🪟 Windows / WSL 沙箱与终端** | #37104、#39841、#39933、#34928、#32773、#40119、#40476、#38768 | 高（几乎每个 Windows 版本都有新报告） |
| **🧩 MCP 与 Hooks 系统语义完整性** | #33266、#34289、#39858 | 中（缺失败信号、缓存失效、与子命令钩子失败-开行为） |
| **🧠 自动压缩与上下文管理** | #21777 | 中（agent 应自主触发 compaction 而非被动触发） |
| **🖥️ IDE / 桌面端多视图与体验** | #36873（VS Code 多视图）、#39903（命令折叠）、#17354（历史丢失）、#40492（自动标题） | 中 |

---

## 开发者关注点

从 issue 正文与回复中可识别出 5 个高频痛点：

1. **「升级 = 引入新 bug」的模式已成为社区担忧的核心**
   多条 issue 标题前缀含具体版本号（如 `26.814.41407`、`26.818.41705`），开发者实际上在做 per-version 回归追踪。建议在升级前查阅 [CHANGELOG](https://github.com/openai/codex/releases) 并考虑在生产环境锁定 alpha 通道版本。

2. **macOS arm64 成为最新高风险平台**
   连续多个 auth/session 相关 issue 仅在 Darwin arm64 上复现，且 reproducible 到具体 build 号。建议 macOS 用户暂时留在 26.810.52044 之前的版本。

3. **Subagent 资源回收仍未根治**
   "Done" 状态线程仍占用 residency slot，导致长任务后期无法 spawn 新 agent。开发者建议引入显式 `cleanup_subagents` API 或在 CLI 暴露手动回收命令。

4. **Windows 仍然是平台兼容性短板**
   包含 PTY 失败、WSL 集成、sandbox setup、kernel crash、Computer Use 异常等多类问题。Windows Insider 用户尤其受影响（#40119 直接触发蓝屏）。

5. **开发者渴望"可观测性 + 可控性"**
   呼声集中在：暴露 compaction 给 agent、OTEL 成本指标、disable 命令折叠、显示 hook 失败信号、避免静默退出（#40010 的 mid-turn exit 0）。这些请求指向同一个诉求：**别让 Codex 变成黑盒**。

---

> 📌 **TL;DR**：今日更新节奏偏内部硬化（bot 合入 18 项），但社区端 macOS auth（#39162 / #40267）与 subagent 线程回收（#39694）已构成明确回归风险；如你正在使用 0.149.x 或 26.81x 系列，建议关注后续 alpha 修复提交。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-25** | 数据来源：github.com/google-gemini/gemini-cli

---

## 1. 今日速览

今日社区聚焦于 **Auto Memory 系统稳定性**与 **Agent 行为可靠性**两大主题。Google 发布了 **v0.57.0-preview.1** 补丁版本，回滚并优化了工具调用取消与重试提示逻辑以减少上下文窗口膨胀。Issues 区域中，子代理（Subagent）状态误报、Auto Memory 重试循环、Shell 执行挂起等 P1 级 Bug 持续得到维护者关注，体现出 v0.57 版本在走向 GA 前仍有若干关键问题需要收尾。

---

## 2. 版本发布

### 📦 v0.57.0-preview.1（2026-08-24）

预览分支上的第一个补丁版本，由 [`@gemini-cli-robot` 自动 cherry-pick PR #28934](https://github.com/google-gemini/gemini-cli/pull/29024) 生成。

**核心改动（来自被回滚的 PR #28934）：**

- **工具调用取消的回滚机制优化**：不再追加合成响应，而是直接回滚到工具调用前状态，避免上下文窗口膨胀与 API 请求放大。
- **重试提示注入位置优化**：将提示信息从 `systemInstruction` 移至 `contents` 数组末尾，保留前缀缓存命中率。
- **目标**：降低 API 调用量、最大化前缀缓存复用、提升 retry nudge 的有效性。

### 📦 v0.56.0-nightly.20260824.g5411f113c

常规 nightly 构建（commit `5411f113c`），无显著变更说明。

---

## 3. 社区热点 Issues

| # | Issue | 优先级 | 评论数 | 重要性 |
|---|-------|--------|--------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reports as GOAL success | p1 / bug | 13 | **状态误报严重性最高**：子代理达到最大轮次限制后仍上报"success/GOAL"，掩盖中断事实，直接影响自动化流程可信度 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | p1 / bug | 8（👍8） | **最高赞数 P1**：通用代理委派后永久挂起，连"创建文件夹"这类基础操作都无法完成，社区情绪强烈 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | p2 / enhancement | 8 | **架构级提案**：呼吁利用 Gemini 3 模型的原生 bash 能力，通过 OS 层零依赖沙盒兼顾安全与效率 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) Assess AST-aware file reads, search, mapping | p2 / feature | 7 | **EPIC 级别**：评估 AST 感知工具对 token 消耗与定位精度的影响，是当前性能优化方向的核心议题 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough | p2 / bug | 6 | **生态可用性痛点**：用户自定义 skill 与子代理未被主动调用，削弱扩展机制价值 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory retrying low-signal sessions | p2 / bug | 5 | Auto Memory 群组 Bug 之一：低信号会话被无限重试，可能造成后台资源浪费 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command stuck "Waiting input" | p1 / bug | 4（👍3） | 简单 CLI 命令完成后仍显示等待用户输入，Shell 执行管线存在死锁风险 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent fails in wayland | p1 / bug | 4 | **平台兼容性**：浏览器子代理在 Wayland 下失败，排除 X11 后用户群体受影响 |
| 9 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent ignores settings.json overrides | p2 / bug | 3 | `BrowserManager` 完全忽略 `maxTurns` 等配置，覆盖机制失效，影响定制化使用 |
| 10 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) ~/.gemini/agents/ symlink not recognized | p2 / bug | 4 | 通过符号链接共享 agent 配置的开发者无法生效，限制 dotfiles 跨设备同步场景 |

---

## 4. 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| 1 | [#28934](https://github.com/google-gemini/gemini-cli/pull/28934) History rollback & retry nudge optimizations | size/L, **已合并** | 今日发版核心：工具取消时回滚到调用前状态，重试提示注入 `contents` 末尾保前缀缓存 |
| 2 | [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) Inject on-retry nudge into conversation contents | p1, size/L | 与 #28934 同源方案，独立 PR 形式延续前缀缓存修复（Fixes #28909）|
| 3 | [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) Avoid persisting interrupted response placeholder | p1, size/L | 解决中断后 `[The previous response was interrupted...]` 占位符被持久化并被模型复读的问题（Fixes #28927）|
| 4 | [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) Keep GIT_CONFIG_* env triplets consistent | p1, size/L | 防止 Git 环境变量被消毒后变成不可解析的残缺键值对，避免 git 命令异常 |
| 5 | [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) Prompt consent + sanitize MCP env vars | size/M | **安全增强**：扩展更新时对环境变量变更进行用户授权检查，防止 MCP 进程注入未授权配置 |
| 6 | [#29019](https://github.com/google-gemini/gemini-cli/pull/29019) `eval:from-log` reviewable eval drafts | p3, size/XL, help wanted | **新功能**：从真实会话日志一键生成可评审的行为评估草稿，降低贡献者编写 eval 的门槛 |
| 7 | [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) Retain ask_user question in text history | size/L | 新增 `ui.keepAskUserQuestionsInHistory` 选项，让 ask_user 的问答内容在历史/恢复会话时可见 |
| 8 | [#28961](https://github.com/google-gemini/gemini-cli/pull/28961) Declare top-level safety checkers in write policy | size/M | 修正 `write.toml` 中 `[[safety_checker]]` 数组定义层级，确保 `AllowedPathChecker` 正确注册 |
| 9 | [#29018](https://github.com/google-gemini/gemini-cli/pull/29018) Remove misleading security schemes in a2a-server | size/XS | 移除 a2a-server 中本地开发不应存在的安全方案声明与硬编码凭据（Fixes #29001）|
| 10 | [#29009](https://github.com/google-gemini/gemini-cli/pull/29009) Correct env var redaction setting keys | p2, size/S | 修正配置文档中两个错误的 redaction 键名，补齐缺失的真实键名 |

---

## 5. 功能需求趋势

根据近 24 小时活跃 Issue/PR 综合归纳，社区关注点呈现以下主线：

### 🧠 智能体可靠性（Agent Reliability）— 最热
- **子代理状态语义**：MAX_TURNS 后的 `GOAL/success` 误报（#22323）、bug report 缺子代理上下文（#21763）、trajectory 难以分享（#22598）。
- **浏览器子代理硬化**：session takeover、Wayland 兼容、配置覆盖失效（#21983/#22232/#22267）。
- **破坏性行为抑制**：复杂 Git 操作时模型倾向 `--force`/`reset`，呼吁加入更安全的默认值（#22672）。

### 🗂️ Auto Memory 系统质量
- **4 个相关 Issue**（#26516/#26522/#26523/#26525）同时打开，覆盖：低信号会话重试循环、确定性脱敏、无效 patch 隔离、整体质量追踪。这是 v0.57 周期内的高密度补丁目标。

### ⚡ 性能与上下文管理
- **Tactful Extraction**：分层读取策略，单 turn 从 36.6k token 起步降低 firehose 现象（#19561）。
- **AST-aware 工具**：精准读取方法边界，减少噪声 token（#22745/#22746）。
- **重试/取消路径**：前缀缓存保留、占位符不持久化（#28914/#28939）。

### 🔒 安全与权限
- **OS 层沙盒**：`Zero-Dependency OS Sandboxing` 提案（#19873）试图利用 Gemini 3 的原生 bash 倾向。
- **扩展/MCP 注入防护**：环境变量消毒 + 显式同意（#28863/#26525/#29018）。

### 📚 文档与 CLI 易用性
- **文档批量修正**：`harshil-mistry` 连续提交 3 个 PR（#29013/#29011/#29009）补齐并修正 CLI flags、ACP 缩写、redaction 键名——体现 v0.57 收尾阶段对完整性的诉求。

### 🛠️ 可观测性与评估（Eval）
- **`eval:from-log`**（#29019）让会话日志成为 eval 草稿起点，是面向外部贡献者放低门槛的关键举措。
- **steering eval** 稳定性（#23313）也在维护者 backlog 中。

---

## 6. 开发者关注点

通过 Issues 与 PR 文本提炼，开发者集中反馈的痛点与期待如下：

1. **"假成功"是最危险的 Bug**：MAX_TURNS 后的 `success/GOAL` 误报（#22323）让自动化流水线无法区分真完成与中断，社区要求尽快修复状态语义。

2. **挂起（Hang）类问题普遍**：通用代理挂起（#21409）、Shell 等待输入假死（#25166）、Wayland 浏览器子代理失败（#21983）——三类不同入口的同一类症状，开发者认为 CLI 在超时/取消传播上存在系统性短板。

3. **Auto Memory 既"过度"又"不安全"**：后台提取器对低信号会话无限重试（#26522），同时又把本地转写内容发到模型再依赖模型自己脱敏（#26525），开发者呼吁**确定性、可审计**的处理流程，而非 LLM 兜底。

4. **Shell/文件系统污染**：`Model creates tmp scripts in random spots`（#23571）反映出"限制 shell 后模型转向生成临时脚本"的退化行为；`GIT_CONFIG_*` 消毒后残缺（#28938）说明现有 envvar sanitization 不够鲁棒。

5. **扩展/符号链接生态断裂**：`~/.gemini/agents/` 与 `skills/` 目录对符号链接/junction 不友好（#20079/#29017），限制了 dotfiles 跨机同步和 Open Agent Skills 标准互通。

6. **配置覆盖"形同虚设"**：Browser Agent 完全忽略 `settings.json`（#22267），开发者对配置层失去信任，期待统一的覆盖合并机制。

7. **贡献者门槛降低诉求**：`eval:from-log`（#29019）与 `help wanted` 标签的 PR 增加明显，团队正在主动从外部社区引入测试用例与文档修补。

---

> 📌 **观察**：v0.57 周期已进入"修边角"阶段，但 Auto Memory 与 Browser Agent 这两个**新近引入的能力**仍是 P1/P2 的重灾区，建议关注 [Issue #26516](https://github.com/google-gemini/gemini-cli/issues/26516)（Memory tracking）与 [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)（Browser Agent 配置覆盖）作为该周期的关键质量信号。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-25** ｜ 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

社区今日活跃度较高，过去 24 小时共有 **40 个 Issues 更新**，但 **PR 提交极少（仅 1 条）**，反映出代码侧处于"沉淀期"。热点高度集中在 **MCP/OAuth 身份验证、交互模式权限模型、Token 计费透明度** 三大方向；同时 Windows 平台、Worktree 会话、并发工具调用等多个 P0/P1 级 bug 被密集上报，建议使用者关注 1.0.81 系列预发布版的修复情况。

---

## 🚀 版本发布

### v1.0.81-9（预发布）
- **改进**：`/model` 选择器中显示模型数据保留（data retention）警告及外链
- 发布地址：未单独列出，建议通过 `copilot --version` 或 releases 页跟踪

> 注：上一被报告较多问题的版本为 **1.0.80**（多见于 MCP OAuth、OTel 计费、后台压缩等场景的回归报告），建议短期内继续观察 1.0.81 的稳定性。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|------|------|------|
| 1 | **[#1274](https://github.com/github/copilot-cli/issues/1274)** CLI 频繁返回 400 Invalid request body | 💬27 👍11 | 长期未解决的 P1 级工具调用故障，约 95% 的代码审查请求触发，影响核心工作流，跨多模型出现 |
| 2 | **[#1973](https://github.com/github/copilot-cli/issues/1973)** 交互模式工具白名单（Feature） | 💬12 👍27 | 👍数最高，开发者强烈要求在 `/allow-all` 与"每次手动确认"之间增加"只读工具自动放行"档位 |
| 3 | **[#4490](https://github.com/github/copilot-cli/issues/4490)** Atlassian MCP OAuth 在 1.0.80 回归（RFC 8414 §3.3） | 💬5 | 已 Close，影响所有接入 Atlassian 远程 MCP 的企业用户，揭示 OAuth 元数据校验逻辑变更未充分测试 |
| 4 | **[#4224](https://github.com/github/copilot-cli/issues/4224)** Subagent OTel span 缺少计费属性 | 💬3 | 关系到企业级成本核算的准确性，subagent 调用实际消耗 AI Credits 但 span 中无 `nano_aiu`/`cost`，外部计费系统严重低估 |
| 5 | **[#4582](https://github.com/github/copilot-cli/issues/4582)** MCP OAuth 对 Entra ID 缺少 `scope` 参数 | 💬2 | 新报 AADSTS900144，与 #4490 同源，Entra ID + 静态 oauthClientId 场景全军覆没 |
| 6 | **[#4421](https://github.com/github/copilot-cli/issues/4421)** MCP `initialize` 固定 60s 超时且无重试 | 💬2 | `npx` 启动的 stdio server ~29% 会话直接失败且不可恢复，硬编码预算暴露架构短板 |
| 7 | **[#4577](https://github.com/github/copilot-cli/issues/4577)** `/ask` 支持多轮对话（已 Close） | 💬2 | 维护者 rogerbarreto 同步在 #4538 提重复 issue，体现出对此功能的方向性确认 |
| 8 | **[#4566](https://github.com/github/copilot-cli/issues/4566)** Agent"空转"：确认动作但不执行工具 | 💬2 | gpt-5.3-codex 模型下表现明显，工具调用可靠性问题，直接影响任务完成率 |
| 9 | **[#4593](https://github.com/github/copilot-cli/issues/4593)** Windows 归档 worktree 会话失败 (os error 32) | 💬1 | Windows 平台 file lock 竞争，未先停止会话进程树；属于典型的平台兼容性 bug |
| 10 | **[#4568](https://github.com/github/copilot-cli/issues/4568)** `--cloud` 多症状：所有者选择器挂起/重连崩溃/轮询 429 | 💬1 | 三个相互关联的云任务链路问题，集合报告有助于一次性定位云端 provisioning 路径问题 |

**补充关注（👍或语义重要）：**
- **[#4588](https://github.com/github/copilot-cli/issues/4588)** MCP 工具搜索（deferral）仅对 Anthropic 模型启用，**空 prompt 占用 21k vs 47k tokens**，暴露跨提供商的成本不对称设计。
- **[#4414](https://github.com/github/copilot-cli/issues/4414)** BYOK 自定义 Provider 在到达上游前就被本地 403 拦截（已 Close）。
- **[#4570](https://github.com/github/copilot-cli/issues/4570)** Windows: VS Code 运行期间 `plugin install/update` 报 `os error 5`。

---

## 🛠 重要 PR 进展

⚠️ **过去 24 小时内仅 1 条 PR 更新**，活跃度明显偏低：

| PR | 描述 | 状态 |
|---|---|---|
| **[#4573](https://github.com/github/copilot-cli/pull/4573)** Rename `README.md` to `README.mdmain` | 无描述提交，社区反应冷淡（👍0），疑似误操作 PR | OPEN |

> 📎 **建议**：此 PR 内容明显异常（重命名后缀 `mdmain` 为典型非语义化改动），维护者若无意合并可建议作者关闭，避免给搜索与文档链接带来困扰。

由于 PR 数据不足，下面补充几条与"今日活跃 Issues"对应的**可参考合并方向**（基于社区描述推测，非官方路线图）：
- MCP OAuth 元数据/Scope 校验修复（关联 #4490 / #4582 / #4584）
- MCP `initialize` 端点可配置超时与重试（关联 #4421）
- 交互模式只读工具白名单（关联 #1973）
- 后台压缩保留并行 GPT 工具结果（关联 #4572）
- Windows 工作树停止语义 + plugin install 互斥（关联 #4593 / #4570）

---

## 📈 功能需求趋势

按出现频次归纳今日 Issues 中社区诉求最强的方向：

1. **🛡 细粒度权限模型（高频）** — [#1973](https://github.com/github/copilot-cli/issues/1973) 工具白名单呼声最高（👍27），体现"安全 ≠ 每次确认"的中间地带诉求。
2. **🔐 MCP / OAuth 企业身份互通** — 至少 5 条相关 issue（#4490、#4582、#4584、#4408、#4421），集中在 Entra ID / Atlassian / RFC 8414 合规，是企业落地最大阻力。
3. **📊 透明度与成本可视化** — OTel 计费属性（#4224）、状态行原始 token 数（#4589）、多模型 token 差异（#4588），开发者越来越希望直接看到消耗。
4. **🧩 多媒体/富文件输入** — PDF 上传（#4583）、图像生成用于资产（#4581），扩展 CLI 作为创作工具的边界。
5. **💻 终端与会话体验** — `/ask` 多轮（#4577/#4538）、`/fork` 多终端（#4580）、footer 截断方向（#4591），打磨交互细节。
6. **🪟 Windows 平台一致性** — 归档失败（#4593）、plugin 与 VS Code 互斥（#4570），Windows 用户的工程化短板。

---

## 👨‍💻 开发者关注点

综合今日的 Issues 与讨论，开发者反馈呈现以下**高频痛点**与共识性需求：

- **"工具调用可靠性"是当前头号问题**：从 #1274、#4566、#4572 都能看到——请求被拒、Agent"空转"、压缩丢失工具结果，会让 CLI 在关键场景下"看着在工作，实际没干活"。
- **"企业身份"是 MCP 落地的拦路虎**：连续多条 issue 集中在 OAuth/Entra ID，意味着若是企业用户，目前 MCP 还远未达到"开箱即用"。
- **"看不见的成本"令人焦虑**：Subagent 不上报 token、跨模型 token 量级差 2x+，都在侵蚀用户对计费系统的信任。
- **"Windows ≠ 一等公民"**：归档锁、plugin 写冲突等问题都集中在 Windows，企业内 Windows 开发机占比并不低，这一短板会被持续放大。
- **"安全 UX"需要更智能的默认值**：开发者不愿在 `grep / cat / git status` 上反复点同意，但 `/allow-all` 又过于粗暴，#1973 点赞数最高本身就是一种社区投票。

> 🔔 **给使用者的建议**：如依赖 MCP（尤其 Entra ID / Atlassian）请暂时固定在 **1.0.78**；如使用 subagent 进行成本核算，请预留外部计费的修正项；日常 prompt 尽量避免长上下文触发后台压缩。

---

*本报告由 AI 助手基于公开 GitHub 数据自动生成，观点不代表 GitHub 官方立场。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-25** | **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

今日社区活跃度较低，过去 24 小时内仅 1 个 Issue 和 1 个 PR 有更新。社区关注焦点集中在 **KimiCode 套餐用量计费机制** 上，有用户反馈实际消耗与官方说明存在较大出入，引发 8 条讨论和 7 次点赞。代码侧有一项关于 **StrReplaceFile 工具对非 UTF-8 文件处理逻辑的修复** 进入待审阅状态。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

由于今日仅 1 个 Issue 有更新，无法凑足 10 条。以下是该 Issue 的详细分析：

### 🔥 #1994 — kimiCode 用量计算问题（7👍 / 8 条评论）

- **链接**：[MoonshotAI/kimi-cli#1994](https://github.com/MoonshotAI/kimi-cli/issues/1994)
- **作者**：wanghonghust | 创建于 2026-04-22，最新更新 2026-08-24
- **重要性**：⭐⭐⭐⭐⭐
- **为什么重要**：
  - 触及**核心商业信任问题**——用户付费订阅后发现 2 小时仅能完成 2 个任务，认为体验"有点搞笑"，情绪表达强烈
  - 涉及**官方文档与实际行为不一致**：官方说明强调"每 5 小时 300-1200 次 API 请求"，但计费实际按 token 计算，K2.6 模型过长的思维链（CoT）导致 token 迅速耗尽
  - 反映出 **K2.6 思维链成本**与 CLI 场景下高频调用模式之间的结构性矛盾
- **社区反应**：8 条评论表明讨论较为活跃，7 次点赞说明有较多用户存在共鸣；该 Issue 创建至今已 4 个月仍未关闭，说明官方尚未给出令用户满意的解决方案

---

## 4. 重要 PR 进展

今日仅 1 个 PR 有更新，以下为详细分析：

### 🔧 #2595 — fix(StrReplaceFile): 拒绝编辑非合法 UTF-8 文件（0👍）

- **链接**：[MoonshotAI/kimi-cli#2595](https://github.com/MoonshotAI/kimi-cli/pull/2595)
- **作者**：shoemoney | 创建于 2026-08-06，最新更新 2026-08-24
- **重要性**：⭐⭐⭐
- **修复内容**：
  - **关联 Issue**：#2591
  - **Bug 描述**：`StrReplaceFile` 工具在读取文件时使用 `errors="replace"` 解码，对文件做局部编辑后整文件写回。如果文件中存在非合法 UTF-8 字节（即使这些字节远离编辑区域），回写后会变成 `U+FFFD`（�），导致**未编辑区域的数据被静默损坏**
  - **修复方向**：拒绝编辑非合法 UTF-8 文件，避免静默数据损坏
- **评审状态**：尚未获得任何点赞或评论，尚未合入主干

> 📌 **数据提示**：今日 PR 活跃度极低，建议关注后续是否有更多维护者参与 review。

---

## 5. 功能需求趋势

由于今日仅 1 个 Issue 有更新，趋势样本量有限，但可从 #1994 提炼以下方向：

| 趋势方向 | 描述 | 证据 |
|---------|------|------|
| 📊 **用量透明化** | 用户希望用量计算方式与官方承诺一致 | #1994 中"按 API 请求次数 vs 按 token 计算"的争议 |
| 💰 **套餐性价比** | 高 CoT 模型（如 K2.6）在 CLI 高频场景下的成本控制 | #1994 反映 2 小时仅能完成 2 次任务 |
| 🛡️ **文件操作安全** | 工具需避免对文件做隐式破坏性修改 | #2595 修复 StrReplaceFile 的 UTF-8 静默损坏问题 |

---

## 6. 开发者关注点

基于今日有限的数据，提炼以下关键信号：

### 🚨 高频痛点

1. **用量计费预期不符**
   - 开发者以"任务次数"为心智模型购买订阅，但实际按 token 计费
   - 长思维链模型放大了这一矛盾，使 CLI 场景下的单位任务成本激增
   - 建议官方在 CLI 中增加 **实时 token 消耗预估** 与 **单次任务成本可视化**

2. **文件编辑工具的数据安全**
   - 编码容错策略可能掩盖数据损坏，开发者期望"fail-fast"而非静默破坏
   - 建议为 StrReplaceFile 等工具增加**编码校验前置检查**

### 💡 高频需求

- 更清晰的计费公式与文档说明（按 token 还是按请求？）
- 在 K2.6 等长 CoT 模型下提供 **精简思维链模式** 或 **CLI 专用轻量模型**
- 文件工具的边界行为更明确（拒绝而非猜测式修复）

---

> 📝 **日报备注**：今日社区动态较为稀疏（1 Issue / 1 PR），以上分析基于有限样本。建议结合多日数据观察长期趋势。如需了解更全面的历史 Issue/PR 分布，请告知我可扩展数据采集范围。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-25**

---

## 📌 今日速览

今日 OpenCode 发布 **v1.18.22** 维护版本，主要修复了设备登录链接与 OpenAI 兼容提供商的兼容性问题。社区焦点高度集中在两大问题：**TUI 侧边栏"已修改文件"区域自 v1.16.0 起失效**（多个高赞 Issue 持续讨论），以及 **Ox Alpha Free / Go 免费层提供商大规模出现 `network_error`**。多个关键修复 PR 已提交，预计 v1.18.x 后续版本将逐步收敛这些问题。

---

## 🚀 版本发布

### v1.18.22
**核心 Bug 修复：**
- 移除已过时的 OpenCode Go 首月折扣文案与定价信息
- 修复设备登录链接在服务器返回相对验证 URL 或包含 base path 时的解析问题
- 修复 `textVerbosity` 参数被错误发送给不支持该字段的 OpenAI 兼容提供商（[@j...](https://github.com/anomalyco/opencode/releases/tag/v1.18.22)）

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 重要程度 |
|---|-------|------|-----|---------|
| 1 | [#4489](https://github.com/anomalyco/opencode/issues/4489) — **【特性】为 `opencode run` 增加临时一次性会话**（作者愿自行实现） | 14 | 15 | ⭐⭐⭐ |
| 2 | [#30877](https://github.com/anomalyco/opencode/issues/30877) — **【Bug】v1.16.0 起 TUI 侧边栏"已修改文件"区域完全消失** | 11 | 14 | ⭐⭐⭐ |
| 3 | [#43619](https://github.com/anomalyco/opencode/issues/43619) — **【2.0】subagent 必填 sessionID 阻止首个子会话创建** | 10 | 0 | ⭐⭐⭐ |
| 4 | [#6310](https://github.com/anomalyco/opencode/issues/6310) — **会话因大型 LSP 诊断（Lua 等）变得不可用** | 9 | 0 | ⭐⭐⭐ |
| 5 | [#44300](https://github.com/anomalyco/opencode/issues/44300) — **Zen API: ox-alpha-free/x-preview-f-free 含 tools 的请求全部失败** | 7 | 1 | ⭐⭐ |
| 6 | [#44328](https://github.com/anomalyco/opencode/issues/44328) / [#44379](https://github.com/anomalyco/opencode/issues/44379) — **Ox Alpha Free 大面积 `network_error`** | 7+6 | - | ⭐⭐⭐ |
| 7 | [#17797](https://github.com/anomalyco/opencode/issues/17797) — **TUI 不再显示已修改文件** | 6 | 1 | ⭐⭐ |
| 8 | [#37823](https://github.com/anomalyco/opencode/issues/37823) — **GitHub Action 在 2026-07-15 后创建的仓库上失败（OIDC sub 格式变更）** | 6 | 11 | ⭐⭐⭐ |
| 9 | [#32852](https://github.com/anomalyco/opencode/issues/32852) — **TUI 侧边栏"已修改文件"区域不显示会话 diff** | 5 | 3 | ⭐⭐ |
| 10 | [#44812](https://github.com/anomalyco/opencode/issues/44812) — **【2.0】cli.json 缺少 JSON schema 声明** | 3 | 0 | ⭐⭐ |

**热点评析：** TUI 侧边栏"已修改文件"区域失效堪称"本月最严重 UX 回退"——从 [#30877](https://github.com/anomalyco/opencode/issues/30877) (14 👍) 到 [#17797](https://github.com/anomalyco/opencode/issues/17797) 再到 [#34620](https://github.com/anomalyco/opencode/issues/34620)，多个独立用户跨数月反复报告，体现 v1.16.0 引入的回归影响面之广。Ox Alpha 相关网络错误则在 8 月 23 日集中爆发，形成了本日报中数量最多的一类故障报告。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容摘要 |
|---|----|------|
| 1 | [#44796](https://github.com/anomalyco/opencode/pull/44796) — `fix(tui): restore TUI sidebar modified-files diff` | **直接闭环 #30877**，还原 v1.16.0 之前侧边栏 diff 显示行为 |
| 2 | [#44683](https://github.com/anomalyco/opencode/pull/44683) — `feat(app): queue and steer follow-up prompts` | 实现 Figma 设计稿"队列/引导后续提示"功能，含拖拽排序、内联编辑、热键提示 |
| 3 | [#44818](https://github.com/anomalyco/opencode/pull/44818) — `refactor(core): normalize tool input errors` | 统一 Effect、Standard Schema、JSON Schema 的验证错误格式，提供字段路径与重试指引 |
| 4 | [#44825](https://github.com/anomalyco/opencode/pull/44825) — `fix(core): route filesystem through location environment` | 闭环 [#44568](https://github.com/anomalyco/opencode/issues/44568)，将 FileSystem 路径规范化路由到 Location 环境 |
| 5 | [#44817](https://github.com/anomalyco/opencode/pull/44817) — `fix(ai): ignore unknown Anthropic stream variants` | Anthropic 流式解码容错：延迟分发、忽略未知变体、严格校验已知负载 |
| 6 | [#44813](https://github.com/anomalyco/opencode/pull/44813) — `fix(core): make registry reads observe pending reloads` | registry 读取立即观察 pending 重载，保持 500 ms 防抖 API |
| 7 | [#44811](https://github.com/anomalyco/opencode/pull/44811) — `tool: trim persisted LSP diagnostics in edit/write metadata` | **直接闭环 #6310**，裁剪持久化的全工作区 LSP 诊断数据 |
| 8 | [#44806](https://github.com/anomalyco/opencode/pull/44806) — `fix(core): recover missing assistant responses` | 闭环 [#42677](https://github.com/anomalyco/opencode/issues/42677)，恢复仅以 `stop` 结束但无内容的助手响应 |
| 9 | [#44810](https://github.com/anomalyco/opencode/pull/44810) — `fix(opencode): resume queued prompts after interrupt` | 闭环 [#40955](https://github.com/anomalyco/opencode/issues/40955)，中断后恢复已入队提示 |
| 10 | [#44757](https://github.com/anomalyco/opencode/pull/44757) — `feat(opencode): enable lsp tool by default` | 移除 `experimentalLspTool` 守卫，默认开启 LSP 工具 |

**亮点：** [#44796](https://github.com/anomalyco/opencode/pull/44796) 与 [#44811](https://github.com/anomalyco/opencode/pull/44811) 分别解决了本月最热的两个 Issue，是社区期待度最高的合并候选。

---

## 📈 功能需求趋势

通过过去 24 小时更新及近期高活跃 Issue 分析，社区关注方向可归纳为：

1. **TUI/IDE 体验优化**——"已修改文件" diff 区域回归是当下最大呼声 ([#30877](https://github.com/anomalyco/opencode/issues/30877), [#17797](https://github.com/anomalyco/opencode/issues/17797), [#32852](https://github.com/anomalyco/opencode/issues/32852))；CLI 配置需要 JSON Schema 提示 ([#44812](https://github.com/anomalyco/opencode/issues/44812))。
2. **临时/会话管理灵活性**——[#4489](https://github.com/anomalyco/opencode/issues/4489) 提出"一次性会话"诉求，反映开发者对**轻量级无状态运行模式**的明确需求。
3. **新模型与提供商支持**——中文开发者要求补充 DeepSeek、Qwen3.8 Max、GLM-5.3 等模型 ([#44577](https://github.com/anomalyco/opencode/issues/44577))；Go 订阅退款诉求 ([#44775](https://github.com/anomalyco/opencode/issues/44775)) 暴露模型承诺与实际可用性的落差。
4. **核心 2.0 架构**——subagent 子会话创建 ([#43619](https://github.com/anomalyco/opencode/issues/43619))、插件事件订阅 ([#44788](https://github.com/anomalyco/opencode/issues/44788))、会话上下文超限 ([#44798](https://github.com/anomalyco/opencode/issues/44798)) 等多个问题指向 **OpenCode 2.0 插件/会话子系统**的早期成熟度问题。
5. **跨平台覆盖**——[#44783](https://github.com/anomalyco/opencode/issues/44783) 请求 AARCH32/ARM32 支持，体现嵌入式/IoT 场景的潜在用户群。

---

## 💡 开发者关注点

综合评论与 👍 数，社区当前最尖锐的痛点集中在以下几点：

- **🔴 提供商稳定性是头号痛点**：Ox Alpha Free / Go 免费层在 8 月 23 日之后频繁出现 `network_error` 和 `Endpoint is unavailable`，且 `tools` 参数场景下完全不可用（[#44300](https://github.com/anomalyco/opencode/issues/44300)、[#44379](https://github.com/anomalyco/opencode/issues/44379)）。开发者缺乏可靠回退，只能开新会话绕过，**严重影响了生产可用性**。
- **🟠 UI 回归影响持久 TUI 用户**：v1.16.0 后侧边栏 diff 消失 ([#30877](https://github.com/anomalyco/opencode/issues/30877))，跨越 2 个多月仍未修复，迫使不少用户在 [#34620](https://github.com/anomalyco/opencode/issues/34620) 中要求"降级指南"。
- **🟡 大型仓库 LSP 性能**：Lua/TS 等语言服务端返回**全工作区诊断**，被逐字持久化到会话元数据 ([#6310](https://github.com/anomalyco/opencode/issues/6310))，成为会话膨胀的隐形元凶。
- **🟢 GitHub Actions 集成受 OIDC 变更影响**：2026-07-15 后创建的新仓库触发 `p.rest` 错误 ([#37823](https://github.com/anomalyco/opencode/issues/37823))，CI/CD 用户被阻断，威胁自动化工作流。
- **🔵 中文用户体验**：连续出现中文 Issue 反映 DeepSeek 配置、新模型矩阵、Action JSON 解析错误 ([#44577](https://github.com/anomalyco/opencode/issues/44577), [#39441](https://github.com/anomalyco/opencode/issues/39441))，海外社区支持中文文档/错误信息的诉求日益突出。

---

*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) · 报告生成时间：2026-08-25*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-25

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi 仓库）

---

## 一、今日速览

今天 Pi 发布 **v0.84.3**，正式引入 Windows 原生 PowerShell 工具与更安全的"分阶段—验证—原子激活"更新机制。社区层面，**自动压缩（auto-compaction）触发时机过晚**与 **Gemini 3.x 在 OpenAI 兼容端点上 thought_signature 丢失**两大长期 bug 出现明确修复 PR；同时 Windows 体验、llama.cpp 模型选择、Per-Model 配置粒度成为开发者集中反馈的三大方向。

---

## 二、版本发布

### 📦 v0.84.3（已发布）

**新特性**
- **PowerShell 工具**（Windows）：新增可选的原生 PowerShell 命令执行支持，避免 Git Bash 在 Windows 上的路径处理问题。详见 [Windows 文档](https://github.com/earendil-works/pi/blob/v0.84.3/packages/coding-agent/docs/windows.md#powershell-tool)。
- **更安全的托管更新**：更新流程改为"暂存 → 验证 → 原子激活"三阶段，旧版本在升级失败时可安全回滚。

🔗 [Release 链接](https://github.com/earendil-works/pi/releases/tag/v0.84.3) ｜ 实现 PR：[#8512](https://github.com/earendil-works/pi/pull/8512)

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | **[#7547] Windows 使用经验征集** | 44 | 2 | 官方主动发起的 Windows 体验调研贴，反映团队正在系统性补齐 Windows 支持。 |
| 2 | **[#6879] auto-compaction 在 >100% 上下文才触发** | 22 | **19** | 真实事故：在 2 小时长会话中直到 API 373k tokens 报错才压缩。👍 数最高，说明普遍痛点。 |
| 3 | **[#6922] llama.cpp 作为默认 Provider 启动即报错** | 11 | **14** | 已关闭，本地模型用户主要入口问题，14 赞体现强需求。 |
| 4 | **[#8167] llama.cpp router 模式下模型不可选** | 11 | 0 | 与 #6922 同源，已合并 #8558/#8479 修复，预示 llama.cpp 集成进入收尾阶段。 |
| 5 | **[#7444] Codex WebSocket 重试只覆盖两类错误** | 9 | 0 | 影响 Codex 长会话稳定性，揭示错误分类机制仍偏脆弱。 |
| 6 | **[#7885] npm search 不索引新发布的 pi-packages** | 8 | 0 | 扩展生态发现性问题：自 8/4 起新包未进入 pi.dev/packages 画廊。 |
| 7 | **[#7048] 压缩摘要被截断（stopReason=length 未处理）** | 7 | 1 | 数据完整性问题：摘要可能以半个词持久化，影响后续会话恢复质量。 |
| 8 | **[#8166] 中间注入消息破坏 tool_calls 邻接性（DeepSeek 400）** | 7 | 0 | 扩展 API 副作用；DeepSeek 等 provider 严格校验消息序列。 |
| 9 | **[#6996] Gemini 3.x 工具调用因缺 thought_signature 失败** | 6 | 0 | Gemini 模型可用性关键 bug，今日 #8590 PR 已修复。 |
| 10 | **[#8133] Per-Model 压缩设置** | 4 | 3 | 200K ↔ 1M 上下文切换需求明确，今日 #8592 PR 直接关闭。 |

补充关注：[#8017] Anthropic 拒答服务端回退（已被关闭 → 修复落地）、[#8409] 0.84.2 中断轮次 stopReason 回归为 "error"。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| 1 | **[#8592] Per-Model 压缩配置** | ✅ 已合 | 新增 `compaction.profiles`，按 model id 覆盖 `reserveTokens`，解决大小模型切换时的过度压缩问题。关闭 #8133。 |
| 2 | **[#8590] Gemini thought_signature 透传** | ✅ 已合 | `openai-completions` 适配器回传 `extra_content.google.thought_signature`，使 Gemini 3.x 经 OpenRouter/Copilot 等网关时工具调用不再 400。关闭 #6996。 |
| 3 | **[#8585] OpenAI 流立即响应 abort** | ✅ 已合 | 修复 Responses/Completions 流式读取未检查 abort signal 的回归，对齐 Anthropic 路径。 |
| 4 | **[#8580] 精简工具行垂直内边距** | ✅ 已合 | 每个工具调用节省 2-3 行空白，转录更紧凑。 |
| 5 | **[#8572 / #8573] Amazon Bedrock Mantle 支持** | 🔄 进行中 | 解决 Mantle API（GPT-5.x 等新模型）走错 Converse 端点导致的 Validation error；#8573 为 Anthropic Messages 路由层。 |
| 6 | **[#8575] Session JSONL torn-append 重放丢失修复** | ✅ 已合 | 一个物理行同时包含残缺前缀+完整后续条目时，仅跳过一行导致双条目静默丢失；新增检测与边界。 |
| 7 | **[#8570] Codex thread-id 亲和头** | ✅ 已合 | 为 Codex Responses 请求补齐 `thread-id` 头，匹配上游官方客户端亲和行为。 |
| 8 | **[#8559] 剪贴板图片作为原子标记** | 🔄 进行中 | 粘贴图片不再暴露临时路径，而是以 attachment 形式呈现，区分实际图像与纯文本输入。 |
| 9 | **[#8558] llama.cpp autoload 预设可见** | ✅ 已合 | `/model` 列出 `source: "preset"` 条目，配合 router autoload 即可按需加载。 |
| 10 | **[#8547] 点击移动编辑器光标** | 🔄 进行中 | 主按钮点击可直接定位光标，减少键盘回跳——终端鼠标交互体验补全。 |

---

## 五、功能需求趋势

从过去 24 小时讨论提炼出 **5 大方向**：

1. **🪟 Windows 一等公民体验** — PowerShell 工具（已发布）、Alpine musl 构建 [#8591]、交互模式仍走 PowerShell 5.1 [#8582]、编辑器带空格路径解析 [#7875]。官方通过 #7547 主动收集团队信号，Windows 进入系统化打磨期。

2. **🧠 压缩（Compaction）策略精细化** — 触发时机 [#6879]、按模型配置 [#8133/✅#8592]、摘要截断 [#7048]、扩展自定义渲染 [#8589]。压缩正从"一个全局开关"演化为可分层配置的能力。

3. **🦙 llama.cpp / 本地模型深度集成** — 预设在 `/model` 中可见 [#8558/✅]、router 模式选模 [#8167/✅]、未加载预设暴露 [#8479]。本地推理用户从"能用"进入"好用"。

4. **🌐 新 Provider 与模型目录扩容** — SiliconFlow [#4742]、Eden AI [#6403]、Parasail.io [#8450]、Merge Gateway [#5986]、DeepSeek V4 Flash Vision [#8546/#8491]、Bedrock Mantle GPT-5.x [#8572/#8573]。社区在帮 Pi 拓展边界，审核/拒绝率也较高（多数标 `no-action/untriaged`），需官方明确准入标准。

5. **🧰 跨平台工具链可靠性** — 流中断 [#8585]、JSONL 完整性 [#8575]、WebSocket 重试分类 [#7444]、扩展副作用 [#8166]。底层"长会话稳定 + 数据可恢复"仍是核心工程主线。

---

## 六、开发者关注点与高频痛点

| 类别 | 代表性反馈 | 状态 |
|---|---|---|
| **长会话稳定性** | 压缩触发过晚；JSONL torn-append 静默丢条目；流中断 stopReason 误标 | #6879 / #8575 / #8585 已修 |
| **跨 Provider 协议细节** | Gemini thought_signature、DeepSeek tool 相邻性、Codex thread-id 亲和 | #8590 / #8570 已修 |
| **本地模型体验** | llama.cpp 预设/默认模型不可选 | #8558 / #8479 / #6922 已修 |
| **Windows 体验** | PowerShell 模式选择、外部编辑器路径解析、Alpine/musl 支持 | #8582 待修，#8512 / #8591 处理中 |
| **扩展生态** | npm 搜索未索引新包 [#7885]；扩展渲染钩子缺失 [#8589]；剪贴板图片语义 [#8559] | 持续讨论 |
| **UX 微调** | TUI 工具行多余内边距、光标点击定位、全屏覆盖选择策略 | #8580 / #8547 / #8475 |

**整体信号**：v0.84 周期已进入"协议细节与 Windows 体验"双线收尾阶段；社区诉求正从"能不能跑"转向"跨模型/跨平台的一致性与可恢复性"。建议关注 v0.84.4 是否合并 Bedrock Mantle（#8572/#8573）与 Codex 重试分类（#8138）两个仍未关闭的 PR。

---

*日报生成时间：2026-08-25 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-08-25**

---

## 📌 今日速览

今日 Qwen Code 主线持续围绕 **v0.22.0-nightly** 滚动发布，仓库同时下发了 **cua-driver-rs v0.20.0** 预编译二进制（覆盖 macOS / Linux / Windows + Node.js 单文件），为 Computer Use 第三阶段铺路。社区焦点集中在三条主线：**WebShell / VS Code 迁移后遗留交互缺失**、**多 Agent 协作中的状态一致性**（团队消息通道、令牌缓存、目标刷新）以及 **`/review` 技能的执行化升级**。

---

## 🚀 版本发布

### v0.22.0-nightly.20260825.22bb5e8b9f
持续集成日常 nightly 构建，主变更仍为 `@wenshao` 的 [PR #9730](https://github.com/QwenLM/qwen-code/pull/9730)：修复 WebShell 从 Overview 面板打开会话时未透传工作区 cwd 的问题。

### v0.22.0-nightly.20260824.3a1f86d805
与上一 nightly 同源修复，作为对比基线。

### cua-driver-rs v0.20.0
Qwen CUA Driver 预编译二进制（`packages/cua-driver` 下属）：
- **macOS**：代码签名 + 公证 + 通用二进制（`QwenCuaDriver.app`）
- **Linux**：未签名（x86_64 + arm64，最低 glibc 2.31）
- **Windows**：未签名（x86_64 + arm64）
- **Node.js**：通过同一 workflow 发布单文件可执行

关联 [Issue #9334](https://github.com/QwenLM/qwen-code/issues/9334)（cua-driver 改造 + JS SDK）和 [Issue #9335](https://github.com/QwenLM/qwen-code/issues/9335)（通过 Node REPL 调用 SDK）。

---

## 🔥 社区热点 Issues

1. **[#5975](https://github.com/QwenLM/qwen-code/issues/5975) — API Error: No stream activity for 120000ms after 19 chunks** *(P2, 12 评论)*
   长期挂账的流式断流 BUG，自 v0.19.3 起高频出现，表现为模型 "思考 2s" 后长时间无输出。**为什么重要**：直接影响所有长时间任务的用户体验，是当前最热的性能投诉。

2. **[#4063](https://github.com/QwenLM/qwen-code/issues/4063) — core + cli 架构 Review：14 项结构性问题清单** *(in-progress, 9 评论)*
   社区贡献者 `pomelo-nwu` 提交的全量架构审查，最严重问题是 `ContentGenerator` 接口被 `@google/genai` 类型绑架（136 个文件直接 import）。**为什么重要**：决定了未来是否要做"模型无关化"重构，对长期可维护性影响巨大。

3. **[#8083](https://github.com/QwenLM/qwen-code/issues/8083) — design(core): make derived Config context ownership explicit** *(P1, 6 评论)*
   提议将 `Config` 派生实例的状态所有权显式化，替代 `Object.create(base)` 的临时原型委托。涉及 subagent、scoped memory、approval-mode override 等多处生产路径。**为什么重要**：与 #4063 的"去 Google 化"目标协同。

4. **[#9944](https://github.com/QwenLM/qwen-code/issues/9944) — qwen mcp reconnect 报告成功但工具仍不可用 (HTTP transport)** *(P2, 4 评论)*
   MCP 重连后服务器生成新 `mcp-session-id`，但旧会话 ID 仍被缓存，导致 `qwen mcp reconnect --all` 假阳性。**为什么重要**：MCP 是当前生态扩展的核心，重连静默失败会污染所有 HTTP 传输的服务器。

5. **[#9942](https://github.com/QwenLM/qwen-code/issues/9942) — Hide skill commands from top-level slash completion** *(P3, 4 评论)*
   大量 skill 安装后，`/` 自动补全菜单过于拥挤，提议将 skill 移出顶层菜单。**为什么重要**：交互体验类高频反馈，与 #8662 的 OpenTUI 迁移目标一致。

6. **[#9927](https://github.com/QwenLM/qwen-code/issues/9927) — Artifact updatedAt 在内容变更时不更新** *(P2, 4 评论)*
   Session artifact 的 `updatedAt` 仅随注册字段变化，而 `write_file` 等中间产物重写不触发更新。**为什么重要**：与 WebShell 切流直接相关，影响审计与缓存。

7. **[#9005](https://github.com/QwenLM/qwen-code/issues/9005) — Anthropic wire 缺少 OpenAI wire 已有的 stream-safety 保护** *(P1, 4 评论)*
   `anthropicContentGenerator` 缺少与 OpenAI 实现对等的流式安全保护层。**为什么重要**：多模型路由架构下，任何一条路径缺失都会引发跨模型一致性回归。

8. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — TUI 从 ink 迁移到 OpenTUI（无闪烁、原生鼠标）** *(P3, 4 评论, roadmap/terminal-ux)*
   当前 ink 7 + React 19 渲染层带 1037 行 patch，已无法根除闪烁 / 重绘问题。**为什么重要**：长期路线图级议题，决定后续所有 TUI UX 的天花板。

9. **[#9928](https://github.com/QwenLM/qwen-code/issues/9928) — Pinned tasks cannot be assigned to project groups** *(P2)*
   Qwen Code Desktop 中被 pin 的任务无法被分入项目分组。**为什么重要**：桌面端核心交互断裂。

10. **[#9940 / #9911](https://github.com/QwenLM/qwen-code/issues/9911) — Restore VS Code message edit and rewind after WebShell cutover** *(P2)*
    WebShell 切流（#9811）后遗留的 VS Code 消息编辑 / 回滚交互被刻意未还原。**为什么重要**：直接影响 VS Code 用户的"消息可改"心智。

---

## 🛠️ 重要 PR 进展

1. **[#9389](https://github.com/QwenLM/qwen-code/pull/9389) — feat(providers): setup wizard 实时拉取模型列表**
   Provider 配置向导不再使用发布期冻结的"推荐模型"，而是向 OpenAI 兼容端点请求 `/models` 获取当前可用列表。**降低用户配置门槛**。

2. **[#9659](https://github.com/QwenLM/qwen-code/pull/9659) — feat(review): 内容锚定的增量 review-fix 循环**
   `#9190` 的二次落地（原 PR 已无法 rebase），为本地 review-fix 提供"内容锚定"的增量轮次。**解决 review 流程中断后的恢复能力**。

3. **[#9394](https://github.com/QwenLM/qwen-code/pull/9394) — feat(channels): 新增 DingTalk Workspace 通道**
   基于已有 DWS CLI profile，支持 DM、@ 提醒、环境群组、文档 mention 通知、scope 会话隔离、原生 todo 变更。**国内 IM 集成扩张**。

4. **[#9871](https://github.com/QwenLM/qwen-code/pull/9871) — fix(ci): 中和 autofix stdout 中的 legacy `##[command]`**
   同时中和 `::name::` 与 `##[name]` 两种 Actions 语法，消除被注入运行器命令的风险。**CI 安全加固**。

5. **[#9305](https://github.com/QwenLM/qwen-code/pull/9305) — fix(ui): VP 模式下短内容底部对齐**
   修复 VP 模式下空会话时的视觉空隙（顶部对齐 → 底部对齐），关联 [Issue #9300](https://github.com/QwenLM/qwen-code/issues/9300)。

6. **[#9829](https://github.com/QwenLM/qwen-code/pull/9829) — fix(core): `permissions.allow` 真正收紧发往模型的工具 schema**
   当 `settings.permissions.allow` 配置非空时，未被允许的内置工具不再注册，从 `/tools` 列表与模型可见工具面同时消失。**安全语义兑现文档承诺**。

7. **[#9862](https://github.com/QwenLM/qwen-code/pull/9862) — fix(acp): route-scope 会话令牌限额缓存**
   通过 `Config.getModelRouteIdentity()` 给 token cache 打路由标签，模型切换时主动失效，避免旧路由计数误触发 session-token-limit gate。

8. **[#9638](https://github.com/QwenLM/qwen-code/pull/9638) — fix(cli): 在 tool-round 边界投递 teammate 消息**
   Agent Team 中队友→队长的消息不再等整个任务结束，而是在每个工具调用轮次之间推送。**解决 [Issue #9510](https://github.com/QwenLM/qwen-code/issues/9510) 的"普通汇报被拒"症状**。

9. **[#9741](https://github.com/QwenLM/qwen-code/pull/9741) — fix(review): 在 probe tree 恢复前先过滤内容**
   替换 #9566 原 commit，rebase 到当前 main。让 `scratch-tree` 在本地 config 定义 content filter 时拒绝创建/重置 tree，避免 `filter.<name>.smudge` 在 checkout 时被执行。

10. **[#9492](https://github.com/QwenLM/qwen-code/pull/9492) — fix(core): `task_list` 类有状态读工具的循环检测变为结果感知**
    由于 `task_list` 同样入参可能返回不同结果（其他 teammate 会改 board），循环检测器不再简单按"相同入参 = 相同结果"短路。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **WebShell / IDE 集成重构** | #9911, #9927, #9928, #9942 | ⬆️⬆️⬆️ |
| **多模型 provider / 模型路由安全** | #9005, #9389, #9862 | ⬆️⬆️ |
| **Computer Use 路线图** | #9333, #9334, #9335, #9336, cua-driver-rs v0.20.0 | ⬆️⬆️ |
| **/review 技能执行化** | #9740, #9741, #8943, #9761, #9659, #9788 | ⬆️⬆️ |
| **MCP / 外部上下文协议** | #9944, #9951, #9964, #9934 | ⬆️ |
| **TUI 渲染层迁移（OpenTUI）** | #8662, #9966, #9305 | ⬆️ |
| **DingTalk 通道能力扩展** | #9394, #9350, #9922 | ⬆️ |
| **Memory / ACP 一致性** | #9378, #9895, #9534, #9953 | 稳定 |

---

## 💬 开发者关注点

**1. 流式稳定性是首要痛点**
[#5975](https://github.com/QwenLM/qwen-code/issues/5975) 自 v0.19.3 起的 12 条评论几乎全是失败现场汇报，"思考 2s → 长时间无输出 → 120s 断流"已成高频投诉；叠加 [Issue #9026](https://github.com/QwenLM/qwen-code/issues/9026) 的 `NO_TOOL_RESULT_PROGRESS` headless 失败，社区对**长任务 / 无头场景的鲁棒性**诉求强烈。

**2. 多 Agent 协作的状态泄漏**
Team shutdown 消息通道挤压普通汇报（#9510）、token-limit 缓存串路由（#9862）、goal 刷新不及时（#9135）、ACP debug 日志跨会话（#9534）——同一类问题反复出现，反映**当前并发隔离仍依赖人工约定而非显式所有权**，与 [Issue #8083](https://github.com/QwenLM/qwen-code/issues/8083) 的"Config 所有权显式化"诉求一脉相承。

**3. WebShell 切流的 UX 债务**
切流（#9811）一次性移除了多条 VS Code 交互（消息编辑、rewind、pinned task 分配），现通过 #9911 / #9927 / #9928 分 issue 拆解回填。**节奏上看，社区倾向于"先切再补"接受度较高**，但补的速度决定 VS Code 老用户的留存。

**4. /review 技能的"执行化"压力**
Review 流程从"贴建议"演化为"能执行验证"是近一周最密集的 PR 主题（#9740 ab-drive、#9741 filter 顺序、#8943 workflow 派发、#9761 延迟建议可恢复、#9659 内容锚定增量轮）。**社区希望 review 不只是评论，还能形成可审计的执行证据**。

**5. cua-driver + Node REPL 路线图临近交付**
cua-driver-rs v

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-08-25  
**数据来源**：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（注：底层仓库为 Hmbown/CodeWhale）  
**统计周期**：过去 24 小时

---

## 📌 今日速览

v0.9.12 发布周期进入关键冲刺阶段——`codex/v0912-integration-20260823` 分支已完成 72 个提交的代码整合，多个 must-fix 阻塞项落地。M-Maciej 主导的"**监督式运行**"系列（控制 socket、生命周期 outbox、`/relaunch` 自重启）一次性提交 4 个 PR 形成完整闭环。同时社区对**多 Provider 中立化**、**跨会话记忆**和 **MCP OAuth 2.1** 的呼声持续走高。

---

## 🚀 版本发布

过去 24 小时无新 Release。**当前进行中**：`v0.9.12` 集成分支（[PR #5576](https://github.com/Hmbown/CodeWhale/pull/5576)），代码已完成，等待版本号 bump + changelog/RC 门禁。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [5588](https://github.com/Hmbown/CodeWhale/issues/5588) | **Provider 中立化审计**：发现 18 处 DeepSeek 专属行为门禁 | OPEN | ⭐⭐⭐⭐⭐ |
| [5601](https://github.com/Hmbown/CodeWhale/issues/5601) | 新装环境首次配置 MiniMax/Xiaomi 模型返回 404 | OPEN | ⭐⭐⭐⭐ |
| [5586](https://github.com/Hmbown/CodeWhale/issues/5586) | 拆解超大文件（lib.rs 18.7k、config.rs 12.3k） | OPEN | ⭐⭐⭐⭐ |
| [2492](https://github.com/Hmbown/CodeWhale/issues/2492) | **不具备跨会话记忆**：重启即遗忘，强制写入也不会主动读取 | CLOSED | ⭐⭐⭐⭐⭐ |
| [5589](https://github.com/Hmbown/CodeWhale/issues/5589) | Fleet 配置视图 Enter 循环、模型切换埋得太深 | OPEN | ⭐⭐⭐⭐ |
| [1409](https://github.com/Hmbown/CodeWhale/issues/1409) | **MCP 协议需要 OAuth 2.1 支持**（当前仅 API Key） | CLOSED | ⭐⭐⭐⭐ |
| [5597](https://github.com/Hmbown/CodeWhale/issues/5597) | `detached=true` 子代理的使用量不进会话成本统计 | OPEN | ⭐⭐⭐ |
| [5585](https://github.com/Hmbown/CodeWhale/issues/5585) | `setup_confirm_toast_names_*` 测试栈溢出 | OPEN | ⭐⭐⭐ |
| [5596](https://github.com/Hmbown/CodeWhale/issues/5596) | **Turn 结束时静默销毁 turn-owned 子代理**（347k tokens 付诸东流） | CLOSED | ⭐⭐⭐⭐ |
| [5553](https://github.com/Hmbown/CodeWhale/issues/5553) | `/context` 应展示 tool 定义和 MCP 服务器的 token 成本 | OPEN | ⭐⭐⭐ |

### 重点解读

- **#5588（Provider 中立化）**：审计覆盖 2,281 行 / 279 文件，识别出 18 处"概念上中立、行为上却 DeepSeek 专属"的门禁——这是 v0.9.12 的核心架构议题，决定项目能否真正成为"DeepSeek TUI"以外的通用终端。
- **#2492（跨会话记忆）**：长期悬而未决的体验痛点，6 条评论、归类为影响用户留存的核心缺陷，但目前 closed 状态缺乏清晰修复路径。
- **#1409（OAuth 2.1）**：随着 MCP 生态从 API Key 向 OAuth 2.1 迁移（如 tinyfish），这是能否接入更多第三方 MCP 服务的关键。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [5535](https://github.com/Hmbown/CodeWhale/pull/5535) | **监督式运行栈**（lifecycle outbox + `/relaunch` + 控制 socket + 目标持续静默期修复） | CLOSED ✅ | 本日最具战略价值的合并，五个变更同缝统一落地 |
| [5606](https://github.com/Hmbown/CodeWhale/pull/5606) | 0.9.12 中继集成：托管 Chat 接入原生 runtime threads | CLOSED ✅ | 含 R2 审批修复（MCP 工具按 kind 审查）与 `doctor --fix`（带同意） |
| [5576](https://github.com/Hmbown/CodeWhale/pull/5576) | **v0.9.12 集成分支**：72 commits，release blockers 已 code-complete | OPEN | 等版本号 bump + changelog/RC 门禁通过即可合并 |
| [5594](https://github.com/Hmbown/CodeWhale/pull/5594) | **控制 socket（Part D · 最终部分）** | OPEN | Unix-only、按会话绑定、新行分隔 JSON-RPC |
| [5593](https://github.com/Hmbown/CodeWhale/pull/5593) | **`/relaunch` 命令（Part C）** | OPEN | `/update` 后一键自重启到当前 binary |
| [5592](https://github.com/Hmbown/CodeWhale/pull/5592) | **生命周期 outbox（Part B）** | OPEN | opt-in JSONL + webhook，覆盖 TUI 和 headless `exec` |
| [5602](https://github.com/Hmbown/CodeWhale/pull/5602) | 修复 Windows shell 输出解码（UTF-8 / ACP 双路径） | OPEN | 跨进程读字符拆分下的可靠性修复 |
| [5604](https://github.com/Hmbown/CodeWhale/pull/5604) | Fleet 名单编辑可发现性（`m` 键 + `[edit]` 标识） | OPEN | 落实 #5589 已批准切片 |
| [5603](https://github.com/Hmbown/CodeWhale/pull/5603) | context inspector 展示 tool / MCP schema 成本 | OPEN | 落实 #5553 已批准切片（仅显示，不动缓存策略） |
| [5584](https://github.com/Hmbown/CodeWhale/pull/5584) | 子代理审批回执持久化（Closes #5543） | OPEN | Asked 提交先于 prompt 暴露、终止态先于关闭持久化 |

---

## 📈 功能需求趋势

按热度排序，从今日 Issues 提炼：

1. **🔌 多 Provider / 中立化（最热）**
   - Provider 中立化审计（#5588）
   - 多模型配置 404 错误（#5601）
   - NVIDIA NIM 适配（#1482 已修复）
   - 反映社区对"不被 DeepSeek 绑定"的强烈诉求。

2. **🧠 持久化与上下文**
   - 跨会话记忆（#2492）
   - `/context` token 成本细化到 tool/MCP（#5553）
   - 请求间 prefix 连续性断言（#5571）

3. **🤖 子代理 / Fleet 管理**
   - Fleet 配置 UX（#5589 / #5604）
   - 子代理角色姿态 SSOT（#5575）
   - 死代码扫描（#5587）

4. **🔐 MCP 生态**
   - OAuth 2.1 支持（#1409）
   - 子代理 MCP 工具 kind 分类审批（#5606）

5. **🖥️ TUI 体验细节**
   - 焦点块动作（#5551：y/Y/Enter/r）
   - 光标强调色 OSC 12（#5554 已落地）

---

## 💬 开发者关注点

- **跨会话记忆缺位**：被用户标记为"使用效果不好但响应快"——说明 DeepSeek 模型本身表现尚可，**状态持续性的短板正成为留存瓶颈**。
- **新装即报错（#5601）**：URL 内置错误导致首次配置即失败，部分用户被迫回退到 v0.6。**首装体验是采用漏斗的最大杀手**。
- **CI 可靠性**：Linux 工作区测试在非镜像 PR 分支上跑空（#5547 已修）、full-suite 下 flaky 测试（#5605）、harvested-credit gate 误判（#5598 已修）——**发布链路的工具链仍处于修补期**。
- **Token 成本可见性**：社区希望"花在哪里看得见"——context inspector、MCP 工具价格、turn-owned 子代理使用量归集（#5597）共同指向**可观测性诉求**。
- **监督 / 自动化运行**：M-Maciej 一日内合并的"控制 socket + outbox + relaunch"组合，反映出**长生命周期会话的机器可读监督**正从可选变为刚需。

---

*日报生成依据：Hmbown/DeepSeek-TUI 仓库 24 小时内 28 条 Issue 更新 + 17 条 PR 更新。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*