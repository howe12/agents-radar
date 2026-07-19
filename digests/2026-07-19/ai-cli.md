# AI CLI 工具社区动态日报 2026-07-19

> 生成时间: 2026-07-19 02:05 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具横向对比分析报告
**数据截止：2026-07-19**

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"多极并立 + 协议收敛"** 的中期阶段：Anthropic（Claude Code）、OpenAI（Codex）、Google（Gemini CLI）、GitHub（Copilot CLI）、Moonshot（Kimi）、开源阵营（OpenCode、Pi、Qwen Code、DeepSeek TUI）九大玩家在终端侧展开正面竞争，但已显现两条共同演进主线——**Agent Communication Protocol（ACP）事实标准化** 与 **多 Provider 适配能力建设**。与此同时，**Subagent 治理、Windows 桌面稳定性、成本/计费透明度** 三大共性痛点在所有仓库被同步暴露，反映行业从"模型可用"快速迈向"工程化生产可用"的关键拐点。

---

## 二、各工具活跃度对比

| 工具 | Issues（活跃） | PRs | 当日 Release | 核心发布线 |
|---|---|---|---|---|
| **Claude Code** | 10+（含 #78979/#78980/#78966 等） | 2 | ❌ | 无新版本 |
| **OpenAI Codex** | 10 | 10 | ✅ 2 | `rust-v0.144.6`（稳定）+ `rust-v0.145.0-alpha.24` |
| **Gemini CLI** | 10 | 6 | ✅ 1 | `v0.52.0-nightly.20260719` |
| **GitHub Copilot CLI** | 27（含 10 重点） | 0 | ❌ | 仍为 `v1.0.71` |
| **Kimi Code CLI** | 2 | 2 | ❌ | `0.27.0` 仍是主线 |
| **OpenCode** | 10 | 10+ | ❌ | 无新版本 |
| **Pi** | 27（含 10 重点） | 9 | ❌ | 无新版本 |
| **Qwen Code** | 10 | 10 | ✅ 3 | `v0.19.12` + preview + nightly |
| **DeepSeek TUI** | 10 | 14 | ❌ | `v0.9.1` 收尾中 |

**观察**：
- **发版节奏**：Codex 与 Qwen Code 保持稳定发版，Gemini CLI 走 nightly 快速迭代；Claude Code、Copilot CLI、Pi、OpenCode 处于"问题消化期"或"修复合入窗口"。
- **PR 通道活跃度**：DeepSeek TUI、Codex、OpenCode、Qwen Code 的 PR 流量显著高于 Copilot CLI（后者更依赖直接 commit）。
- **Issue→PR 闭环效率**：Kimi（#2501→#2509）和 Pi（#6647→#6775）展示了同日闭环能力，体现小团队/单一维护者的响应优势。

---

## 三、共同关注的功能方向

| 共同方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Subagent 可靠性** | Claude Code、**Gemini CLI**、Qwen Code、DeepSeek TUI | MAX_TURNS 误报 GOAL（#22323）、子代理静默污染主会话模型（#7156）、generalist agent 挂起（#21409）、Agent 偏离 constitution（#4032）——多 Agent 协同的状态机治理成为系统性问题 |
| **Windows 桌面稳定性** | Claude Code、Codex、Copilot CLI、OpenCode | Wof.sys BSOD（#32870）、AppHang + WMI 高 CPU（#33884/#29499）、`--resume` 冷启动卡死（#4165）、Desktop state JSON 损坏（#37353）——平台碎片化是**最大共性短板** |
| **Reasoning/Thinking Effort 可控性** | Claude Code、Codex、Copilot CLI、Kimi、Pi | `/effort` 快捷命令（Kimi #2509）、1M context（Copilot #2785）、fable-5 advisor 超限（#67609）、Opus 4.8 权限绕过——推理深度成为新一轮参数化主战场 |
| **成本/计费透明度** | Claude Code、Codex、Copilot CLI、Pi | WSL 显示 0% 却触发 limit（#77582）、5 小时限流永久化诉求（#34035）、Copilot cacheWrite 未计入（#6725）、headless 模式后台耗额度（#78966） |
| **MCP 兼容性与协议扩展** | Claude Code、Codex、Gemini CLI、Qwen Code、DeepSeek TUI | ENABLE_TOOL_SEARCH 致 Grep 丢失（#52121）、MCP 进程重复（#33875）、MCP 工具名规范化（#6976）、ACP registry 接入（#3192） |
| **会话/内存管理** | Claude Code、Codex、OpenCode、Qwen Code | Memory Megathread（OpenCode #20695）、JSONL transcript 撕裂（Qwen #7164）、会话日志膨胀至 2GB（Codex #24948）、worktree 共享 settings（Claude #78874） |
| **权限/沙箱治理** | Gemini CLI、DeepSeek TUI、Kimi | `$VAR` 变量扩展绕过（Gemini #28403）、a2a-server 路径遍历（#28353）、typed persistent permission rules（DeepSeek #1186）、deny/allow 规则语义不一致（Kimi #2508） |
| **多 Provider 适配** | OpenCode、Pi、DeepSeek TUI、Codex | LM Studio 列表不刷新（OpenCode #2047）、Anthropic Vertex（Pi #5262）、OpenRouter OAuth（Pi #6814）、Kimi adaptive thinking（OpenCode #37696） |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 通用最强 Agent CLI，企业工作流标杆 | 全栈开发者 + 企业团队 | 深度 Anthropic 绑定、Hook/Plugin 生态完善、VS Code 深度集成 |
| **OpenAI Codex** | 多 Agent + GPT-5.6 一等公民 | 多模型实验者、Multi-Agent 高级用户 | Multi-Agent V2、可配置模型元数据、Audio 模态扩展（#34080） |
| **Gemini CLI** | Google 模型 + AST 感知工具链 | 看重代码语义、长上下文用户 | Gemini 3 bash 亲和、`tilth/glyph` AST 替换探索、Auto Memory 系统 |
| **Copilot CLI** | GitHub 生态集成、IDE 优先 | GitHub 深度用户、企业客户 | IDE Companion、ACP 服务器、可观测性（OTEL）、BYOK |
| **Kimi Code CLI** | 轻量、Moonshot 推理模型专属 | 国内开发者、注重 thinking 可控 | `reasoning_effort` 多轮迭代（#318/#2499/#2509）、极简交互 |
| **OpenCode** | 开源、多 Provider、Desktop+CLI 双端 | OSS 偏好者、多模型切换重度用户 | 双向分页、malformed tool input 容错、cache read 内显（#23111） |
| **Pi** | 本地优先、隐私友好、多 Provider | 隐私敏感开发者、扩展作者 | RPC 协议外延、`bun build` 极致冷启动、共享 auth 文件 |
| **Qwen Code** | Alibaba 生态、Channel 后台自动化 | 国内团队、定时任务场景 | daemon-as-hub、WebShell ChatRecord、进程级 lease 持久化 |
| **DeepSeek TUI** | DeepSeek 模型专属、Work Graph 结构化执行 | TUI 重度用户、模型研究者 | Work Graph reducer、AgentRunSnapshot、ACP registry 接入 |

**关键差异化判断**：
- **"通用 Agent 平台"路线**：Claude Code、Codex、Copilot CLI 三足鼎立；
- **"开源多 Provider 中立"路线**：OpenCode、Pi、DeepSeek TUI 形成集群，对应不同细分偏好（OSS vs 隐私 vs 模型深度）；
- **"模型厂商自带 CLI"路线**：Gemini CLI、Qwen Code、Kimi 深度绑定自家模型，依赖差异化模型能力建立护城河。

---

## 五、社区热度与成熟度

**🔥 高活跃度 / 快速迭代期**：
- **Codex**（10 PR + 2 Release）+ **Qwen Code**（10 PR + 3 Release）：稳定的"日更"节奏，issue 列表呈现高吞吐消化。
- **OpenCode**（10+ PR，Megathread 113 评论）：核心维护者亲驻内存基础设施议题，OSS 社区动员力强。
- **DeepSeek TUI**（14 PR 合并）：v0.9.1 收尾 + v0.9.2 重构并行，工程推进密度最大。
- **Pi**（27 Issues + 9 PR）：社区 triage 极快（同日关单率高），治理节奏收紧。

**📉 问题消化期**：
- **Claude Code**：连续 24 小时无 Release，Windows 平台与模型稳定性累积形成"长尾 Issue 簇"。
- **Copilot CLI**：仅 1.0.71 一个稳定版本线，大量高 👍 Issue 当日关闭（#2785、#1979、#2052），标志一轮功能收尾。

**🌱 早期 / 小团队**：
- **Kimi Code CLI**：当日仅 2 Issues / 2 PR，但 issue→PR 闭环极快（#2501→#2509 同日），维护者响应敏锐。
- **DeepSeek TUI**：依赖单一核心维护者，release-blocker 风险集中（#4410 阻塞 v0.9.1）。

**成熟度梯队判断**：
1. **第一梯队（功能完整 + 高迭代）**：Codex、Claude Code、Qwen Code
2. **第二梯队（快速演进中）**：OpenCode、Pi、DeepSeek TUI
3. **第三梯队（差异化路径明确）**：Gemini CLI、Copilot CLI
4. **第四梯队（精简专注）**：Kimi

---

## 六、值得关注的趋势信号

### 1️⃣ **Subagent 状态机成为新一代核心战场**
9 个工具中 5 个（Claude Code、Gemini、Qwen、DeepSeek、Codex）同步暴露子代理相关缺陷：**污染主会话、误报成功、模型静默切换、constitution 不遵守**。这表明 Multi-Agent 体系正从"能跑"迈向"可信"，**子代理隔离性、可观测性、错误传播** 将成为下个版本的核心评价维度。

### 2️⃣ **成本可解释性从"加分项"变为"刚需"**
Copilot 计费偏差、Codex 后台耗额度、Claude Code weekly limit 异常、Kimi 思考消耗等议题密集出现。开发者对**实时 cost 维度、subagent cost 归因、按文件/工具的 cost 拆解** 的需求显著上升。**模型 vs 工程** 的成本博弈正在重塑产品设计。

### 3️⃣ **ACP（Agent Client Protocol）事实标准化**
从 Codex、Qwen Code、Gemini、DeepSeek TUI、OpenCode 的多线推进看，ACP 正快速成为 IDE / 客户端接入的默认协议。**对开发者含义**：构建自定义 Agent 客户端时应优先支持 ACP 而非私有协议，以获得跨工具互操作能力。

### 4️⃣ **Provider 适配从"支持列表"走向"质量矩阵"**
OpenCode 的 LM Studio、Ollama、Nemotron 流式失败，Pi 的 Copilot 计费模型、Copilot Enterprise 压缩失败，DeepSeek TUI 的 xAI schema 校验——表明**"接入了 ≠ 可用"**，Provider 适配正在从"能用"进入"好用"阶段。**OpenRouter OAuth、Anthropic Vertex** 等中间层 OAuth 接入成为新的接入标准。

### 5️⃣ **Windows 桌面从"次要平台"变为"主战场"**
BSOD、AppHang、WMI/Defender CPU 飙高、state JSON 损坏、Path 大小写敏感——Windows 平台稳定性已不是"补丁级"问题，而是**决定企业部署可行性的核心契约**。建议跟踪各工具的 Windows CI 矩阵透明度作为选型指标。

### 6️⃣ **Memory / 会话管理进入"工程化深水区"**
OpenCode Memory Megathread（113 评论）、Gemini Auto Memory 脱敏、Qwen Channel 持久化

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：截至 2026-07-19**

> ⚠️ **数据说明**：本次数据中 PR 评论数显示为 undefined，分析时综合采用 Issues 评论数（真实数据）、PR/Issue 编号热度、近期活跃度及关联议题数量作为关注度指标。

---

## 1. 热门 Skills 排行（PR）

按社区关注度（关联 Issue 数 + 近期活跃度）综合排序：

### 🥇 #1298 — skill-creator 评估管线修复
- **作者**：MartinCajiao | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1298)
- **功能**：修复 `run_eval.py` 始终报告 `recall=0%` 的核心 bug，包含 Windows 流读取、触发检测、并行 worker 三类问题
- **关注热点**：直接关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍）和 [#1169](https://github.com/anthropics/skills/issues/1169)（3 评论），有 10+ 独立复现报告——这是社区目前最痛的技术债
- **影响面**：修复后 `run_loop.py` 和 `improve_description.py` 的描述优化循环才能真正发挥作用

### 🥈 #514 — document-typography（文档排版质量控制）
- **作者**：PGTBoos | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/514)
- **功能**：防止 AI 生成文档的孤儿行/寡夫段落/编号错位等排版问题
- **关注热点**：解决"AI 文档看起来粗糙"的普遍痛点，适用范围极广

### 🥉 #486 — ODT Skill（OpenDocument 全套支持）
- **作者**：GitHubNewbie0 | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/486)
- **功能**：创建/填充/解析 `.odt`、`.ods` 文件及 LibreOffice 模板
- **关注热点**：补齐开源办公格式短板，与 PDF/DOCX 形成完整文档三件套

### #210 — frontend-design 可执行性强化
- **作者**：justinwetch | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/210)
- **功能**：将 frontend-design 技能改写为"Claude 一次会话内可执行"的指令集
- **关注热点**：回应 Issue #202（skill-creator 自身需要按最佳实践重构）的延伸诉求

### #83 — skill-quality-analyzer + skill-security-analyzer（元技能）
- **作者**：eovidiu | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/83)
- **功能**：从 5 个维度评估 Skill 质量、结构化安全审计
- **关注热点**：直接呼应 Issue [#492](https://github.com/anthropics/skills/issues/492)（安全信任边界，34 评论），是社区最迫切的安全基础设施需求

### #1367 — self-audit（自审计质量门）
- **作者**：YuhaoLin2005 | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1367)
- **功能**：交付前的机械验证 + 四维推理审计（v1.3.0）
- **关注热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提案形成完整"推理质量门"体系

### #1302 — color-expert（色彩专家）
- **作者**：meodai | **状态**：OPEN | [链接](https://github.com/anthropics/skills/pull/1302)
- **功能**：覆盖 ISCC-NBS、Munsell、OKLCH 等色彩命名与空间知识
- **关注热点**：设计领域垂直深度的代表 Skill

### #525 — pyxel（复古游戏开发）
- **作者**：kitao | **状态**：OPEN（最近更新 2026-07-15）| [链接](https://github.com/anthropics/skills/pull/525)
- **功能**：基于 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 的像素/8-bit 游戏开发
- **关注热点**：创意类 Skill 的标杆，MCP 集成的范例

---

## 2. 社区需求趋势（Issues 提炼）

| 排名 | 需求方向 | 代表 Issue | 评论数 | 核心诉求 |
|---|---|---|---|---|
| 1 | **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | 34 | 社区 Skill 借用 `anthropic/` 命名空间造成信任滥用 |
| 2 | **企业级共享分发** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | 团队/组织内 Skill 共享库，避免手动上传 |
| 3 | **协议标准化（MCP 化）** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 将 Skill 暴露为 MCP，统一软件 API 协议 |
| 4 | **Skill 重复安装** | [#189](https://github.com/anthropics/skills/issues/189) | 6（9 👍） | `document-skills` 与 `example-skills` 内容重复污染上下文 |
| 5 | **智能体记忆管理** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | `compact-memory`：长任务符号化压缩 Agent 状态 |
| 6 | **智能体治理/安全模式** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | Agent 系统的策略执行、威胁检测、审计追踪 |
| 7 | **输出质量门** | [#1385](https://github.com/anthropics/skills/issues/1385) | 3 | Pre-task 校准 → 对抗性评审 → 交付验证三段管线 |
| 8 | **跨平台兼容** | [#556](https://github.com/anthropics/skills/issues/556) / [#1061](https://github.com/anthropics/skills/issues/1061) / [#29](https://github.com/anthropics/skills/issues/29) | 12/3/4 | Windows 子进程/编码、AWS Bedrock 兼容性 |

**趋势总结**：社区需求正从"补齐领域 Skill"转向"**Skill 基础设施层**"——安全审计、共享分发、协议互通、质量门控成为最集中的呼声。

---

## 3. 高潜力待合并 Skills（高关注 OPEN PR）

按落地优先级排序（影响面 × 解决痛点程度）：

| PR | Skill | 预期落地价值 | 关键阻碍 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评估管线修复 | **解锁整个描述优化闭环**，是 5+ 个相关 PR/Issue 的根因修复 | 涉及 `run_eval.py` 整体重构，测试覆盖需补全 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接对应 #492 安全议题，是社区第一诉求的官方回应 | 需与官方 Skill 准入流程打通 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 与 #1385 提案形成完整质量体系 | 通用性强，需明确边界避免误报 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 高频痛点（每个文档场景都受益） | 启发式规则需大量样例验证 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 全套支持 | 完善开源文档生态 | 模板填充与解析复杂度高 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | MCP 集成的成熟范本 | 创意类 Skill 优先级较低 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区已从"争相贡献新 Skill"过渡到"呼吁 Skill 生态的基础设施化"——最集中的诉求是建立可信的发布/分发/质量审计体系，让 Skill 不再是孤立的脚本，而是可被企业级安全采用的标准化能力单元。**

---

### 📌 附加观察

- **Windows 兼容性是隐性高优项**：至少 4 个 PR/Issue（#1050、#1099、#1061、#362）独立提交 Unix-first 假设导致的 bug，说明大量潜在用户被挡在门外
- **skill-creator 自身质量成为瓶颈**：#202（CLOSED）、#1298、#1323、#1169 都指向"造 Skill 的工具比 Skill 本身问题更多"的反常现状
- **"Skill as MCP" 愿景**：Issue #16 提出的 MCP 化方向与 pyxel 等 MCP-based Skill 形成共振，可能是下一阶段官方架构演进方向

---

# Claude Code 社区动态日报
**2026-07-19 · 星期六**

---

## 一、今日速览

过去 24 小时 claude-code 仓库无新版本发布，但社区 Issue 活跃度持续高位运行，重点围绕 **Windows 平台兼容性**（驱动器盘符大小写、TUI 渲染、BSOD）和 **工具/模型调用稳定性**（fable-5 advisor 超限、Grep/Glob 工具丢失）两大类问题展开。多个长期悬而未决的诉求（如 `AGENTS.md` 原生支持、VS Code `useTerminal` 配置项失效）再次以"重复 Issue"形式被翻出，反映出社区维护节奏与开发者诉求之间仍存在一定落差。

---

## 二、版本发布

无（过去 24 小时无新 Release）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 关键内容 | 评论 | 👍 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#32870](https://github.com/anthropics/claude-code/issues/32870) | `claude.exe` 在 `NtQueryDirectoryFileEx` 触发 **Wof.sys BSOD** | 28 | 0 | **P0 级**：直接蓝屏，影响 Windows 用户可用性 |
| 2 | [#67609](https://github.com/anthropics/claude-code/issues/67609) | `claude-fable-5` 在 transcript >100K token 时 advisor 工具返回 `unavailable` | 25 | **45** | 关注度最高，疑似模型端能力缺失 |
| 3 | [#52121](https://github.com/anthropics/claude-code/issues/52121) | `ENABLE_TOOL_SEARCH=true` 时 Grep/Glob 工具从注册表整体消失 | 16 | 18 | 直接破坏核心搜索能力，影响所有 MCP 用户 |
| 4 | [#62288](https://github.com/anthropics/claude-code/issues/62288) | Windows VS Code 扩展因 cwd 盘符大小写不一致**静默隐藏会话** | 10 | 2 | 与 #75855 互为关联，是磁盘大小写问题的 IDE 表现 |
| 5 | [#68250](https://github.com/anthropics/claude-code/issues/68250) | `ccRemoteControlDefaultEnabled:true` 重启后被重置为 OFF | 5 | 3 | Desktop 偏好持久化 bug，每次重启需手动开启 |
| 6 | [#77582](https://github.com/anthropics/claude-code/issues/77582) | 会话限额告警未传达给 Agent，后台 workflow 持续耗尽额度 | 3 | 0 | 涉及 `/effort ultracode` 等高阶用法，存在隐性扣费风险 |
| 7 | [#75855](https://github.com/anthropics/claude-code/issues/75855) | Windows 盘符大小写未规范化，导致 `.claude.json` 重复、VS Code trust 丢失 | 3 | 0 | 与 #62288、#68465 形成 Windows 路径一致性"问题簇" |
| 8 | [#78465](https://github.com/anthropics/claude-code/issues/78465) | claude.ai 端提示注入约 **4.8M token** 大块内容导致全平台不可用（关联 #62175） | 2 | 0 | 服务端严重故障，影响整个账户的可用性 |
| 9 | [#72680](https://github.com/anthropics/claude-code/issues/72680) | 5 小时重置循环、零活动下 100% 额度耗尽 | 2 | 0 | 计费/限额系统疑似存在严重逻辑缺陷 |
| 10 | [#78874](https://github.com/anthropics/claude-code/issues/78874) | `CLAUDE_CODE_TASK_LIST_ID` 在 .claude/settings.json 中**跨所有 worktree 共享**，无独立 opt-out | 1 | 0 | 影响 2.1.63 以来多 worktree 并行工作流 |

> 说明：除上述 10 条外，#78979（/clear 后 cost 未重置）、#78980（stale worktree 静默回退到父仓库）、#78966（headless `-p` 模式在 idle keep-alive 上挂死）等也具有较高工程价值，建议优先跟踪。

---

## 四、重要 PR 进展

> 过去 24 小时仅有 **2 条** PR 更新，数量较少，列出全部：

| # | PR | 内容摘要 |
|---|---|---|
| 1 | [#41611](https://github.com/anthropics/claude-code/pull/41611) | "add the missing source to claude code"——诉求补充缺失源码（社区长期呼吁开源透明度，PR 自 3 月起 open，进展缓慢） |
| 2 | [#78963](https://github.com/anthropics/claude-code/pull/78963) | **fix(hookify)**：修复插件以版本号目录安装时，hook 脚本因 `sys.path` 解析失败而崩溃——影响所有通过 marketplace 安装的 hookify 用户 |

---

## 五、功能需求趋势（基于 Issue 文本聚类）

| 方向 | 代表 Issue | 社区呼声 |
|---|---|---|
| **IDE / VS Code 集成** | #62288, #75855, #78976, #9741/#38642/#40925 系列 | Windows 下 `claudeCode.useTerminal` 自 2.1.214 仍未生效，多个关联 Issue 被 close+lock 后被重新开案，反映**长期未解决** |
| **Worktree / 多副本隔离** | #78874, #78980, #78978 | 自 2.1.63 共享 settings 后，worktree 隔离能力被削弱，社区强烈要求 per-worktree opt-out |
| **原生 `AGENTS.md` 支持** | #78977（重复 #6235） | 用户以"故意重复"方式累积 Issue，凸显官方对跨工具互通的忽视 |
| **子 Agent 精细化控制** | #78974 | 希望在 frontmatter 中跳过 CLAUDE.md/git status 注入，以降低 token 浪费 |
| **配额 / 计费透明度** | #77582, #72680, #78982 | 多地区用户报告限额告警失灵、计数器异常、WSL/CLI 与 Web 用量不一致 |
| **网络/连接层稳健性** | #78966 | headless `-p` 模式 keep-alive 重用服务端已关闭连接导致永久挂起，无超时无重试 |
| **模型行为校准** | #67609, #78544, #78971, #78972, #78983 | 围绕 fable-5、Opus 4.8 的 advisor 失败、保护分支越权、误拒/误判等问题密集出现 |

---

## 六、开发者关注点总结

1. **Windows 平台已成"重灾区"**：盘符大小写敏感性导致会话/JSON/信任标记多套机制紊乱，并连带引发 BSOD、TUI ANSI 转义丢失（#68465）、VS Code 会话隐藏等问题。开发者呼吁优先处理 **Windows 路径规范化**这一基础契约。

2. **工具注册层（Tool Registry）行为不一致**：`ENABLE_TOOL_SEARCH` 等开关对内置工具的影响未在文档说明，DevTools 用户反馈 "看不懂当前到底注册了哪些工具"，建议官方补充工具可见性调试接口。

3. **新模型上线节奏与稳定性矛盾**：`claude-fable-5` advisor、Opus 4.8 权限绕过等问题集中在 model 标签下，开发者关心"是否提供内部灰度/回滚通道"，避免生产工作流被新模型一夜打断。

4. **限额/计费透明度不足**：WSL 显示 0% 却触发 weekly limit、headless 模式后台持续耗额度等情形造成信任损耗，开发者建议暴露每个 subagent 的实时 cost 维度。

5. **Hook/插件生态边界模糊**：#78963 揭示版本号目录安装会破坏 hookify 脚本，建议官方提供**插件安装路径规范化**与 **hook 启动错误日志**机制，否则第三方插件作者很难自证 bug 归属。

6. **跨工具互通的"沉默诉求"**：`AGENTS.md`、sub-agent frontmatter、worktree 隔离——这些诉求存在已久，社区以反复开案的方式表达不满，提示官方需对长期挂起 Issue 给出明确 roadmap。

---

*日报基于 anthropics/claude-code 仓库过去 24 小时公开数据生成，仅供开发者参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-07-19

---

## 📌 今日速览

今日 Codex 生态最核心的动态聚焦在 **GPT-5.6 系列模型元数据的回溯修复**：稳定版 `rust-v0.144.6` 将 GPT-5.6 Sol/Terra/Luna 三个变体的上下文窗口统一修正为 272K tokens，并撤回了先前 PR #33972 中引入的非相关模型目录变更。与此同时，社区热度最高的需求是 **要求将 7 月 12 日起临时取消的 5 小时使用限制永久化**（Issue #34035 获 64 👍，居当日榜首）。Windows 平台的多个性能问题（AppHang、Defender/WMI 高 CPU、MCP 进程重复）以及 macOS 桌面端磁盘空间失控（最高达 55 GB）成为最突出的痛点。

---

## 🚢 版本发布

### rust-v0.144.6（稳定版）
- **Bug Fixes**: 刷新 GPT-5.6 Sol/Terra/Luna 的内置指令；将三者上下文窗口统一修正为 **272,000 tokens**（PR #34009、#33972）。
- 本质为窄化热修复，仅保留与 GPT-5.6 prompt/上下文相关的改动，回滚其他模型目录变更。

### rust-v0.145.0-alpha.24（Alpha）
- 进入 0.145 系列的快速迭代通道，未列出具体变更项。
- 完整对比：<https://github.com/openai/codex/compare/rust-v0.144.5...rust-v0.144.6>

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 关键信息 | 链接 |
|---|------|--------|------|
| 1 | **#34035** 将 5 小时使用限制的临时取消永久化 | 👍 64 / 💬 9，社区呼声最高的 Feature Request，面向 Plus/Pro/Business 计划 | [🔗](https://github.com/openai/codex/issues/34035) |
| 2 | **#32925** Codex Desktop 26.707.71524 浏览器与 Chrome 插件报错 `Cannot redefine property: process` | 👍 33 / 💬 56（当日评论最多），已关闭 | [🔗](https://github.com/openai/codex/issues/32925) |
| 3 | **#32530** VS Code Codex 面板在 Linux 上间歇性卡加载（webview 资源 `net::ERR_FAILED`） | 👍 12 / 💬 8，影响 Ubuntu 26.04 用户 | [🔗](https://github.com/openai/codex/issues/32530) |
| 4 | **#33314** Multi-Agent V2 全配置应用与生命周期连续性跟进 | 👍 8 / 💬 5，跟进 #32782，关注自定义 Agent 可观测性 | [🔗](https://github.com/openai/codex/issues/33314) |
| 5 | **#29499** Windows 启动后 WMI Provider Host CPU 飙高 | 👍 6 / 💬 6，多人复现 | [🔗](https://github.com/openai/codex/issues/29499) |
| 6 | **#33884** Windows Codex 26.715 进入 ~15s AppHang / ~10s 响应周期 | 💬 9，Windows 11 稳定复现 | [🔗](https://github.com/openai/codex/issues/33884) |
| 7 | **#34061** Subagent 导致 Codex 磁盘占用暴涨 | 💬 5，最新 CLI 0.144.6 即出现 | [🔗](https://github.com/openai/codex/issues/34061) |
| 8 | **#24948** Codex 会话日志膨胀至 700MB–2GB（压缩历史 + 原始工具输出） | 💬 13，长期未解的 TUI 性能/存储问题 | [🔗](https://github.com/openai/codex/issues/24948) |
| 9 | **#21839** 已存在的 full-access 会话突然需要再次授权 | 💬 13，跨多版本仍存在，影响 Pro 用户 | [🔗](https://github.com/openai/codex/issues/21839) |
| 10 | **#33582** macOS ChatGPT/Codex 内存/缓存膨胀至 55 GB 并冻结系统 | 💬 2，影响 26.707.91948，危害等级高 | [🔗](https://github.com/openai/codex/issues/33582) |

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 功能/修复要点 | 链接 |
|---|----|------------|------|
| 1 | **#34009** 将 0.144 热修复窄化为仅 GPT-5.6 prompt 与上下文 | 撤回了 #33972 中无关的模型目录变更，避免污染 release line | [🔗](https://github.com/openai/codex/pull/34009) |
| 2 | **#33972** 回溯刷新 GPT-5.6 内置模型元数据至 0.144 | Sol/Terra/Luna context window、reasoning-summary、skills/permissions 目录同步 | [🔗](https://github.com/openai/codex/pull/33972) |
| 3 | **#34080** 为动态工具与 code mode 增加音频输出支持 | 新增 `inputAudio` content items、`audio()` code-mode 辅助函数 | [🔗](https://github.com/openai/codex/pull/34080) |
| 4 | **#34049** 避免 TUI 在流式渲染时的冗余重绘 | 仅在完成的行影响可见尾部时重绘；缓存首个 reasoning header | [🔗](https://github.com/openai/codex/pull/34049) |
| 5 | **#34045** 流式 Markdown 增量渲染 | 复用已完成的顶层 block 渲染结果，显著降低 CPU 占用 | [🔗](https://github.com/openai/codex/pull/34045) |
| 6 | **#33938** 集中管理 SQLite 连接配置 | 统一 WAL、同步、auto-vacuum、busy-timeout、连接池等设置 | [🔗](https://github.com/openai/codex/pull/33938) |
| 7 | **#33944** 在 world state 中跟踪权限指令 | 基于开发者消息渲染哈希的稳定 key，避免重复注入 | [🔗](https://github.com/openai/codex/pull/33944) |
| 8 | **#33950** 允许用户为 resume 会话记住工作目录 | 新增 `tui.resume_cwd`（`current` / `session` 两种模式） | [🔗](https://github.com/openai/codex/pull/33950) |
| 9 | **#33982** 按模型输入模态门控音频历史 | 协议层新增 `audio` 输入模态；不支持模型以 omission marker 替代 | [🔗](https://github.com/openai/codex/pull/33982) |
| 10 | **#31781**（仍 OPEN）限制执行器侧 HTTP 响应缓冲 | 防御远程 exec-server 投毒导致 app-server 大量驻留数据的安全加固 | [🔗](https://github.com/openai/codex/pull/31781) |

---

## 📈 功能需求趋势

从今日 Issue/PR 中可提炼出以下社区关注方向：

1. **🧠 模型能力扩展**：GPT-5.6 各变体（Sol/Terra/Luna）的 metadata 统一、reasoning-summary、音频输入/输出模态（#34080、#33982、#34009）。
2. **⚡ 性能与资源治理**：TUI 渲染优化（#34049、#34045）、会话日志/缓存膨胀（#24948、#33582）、Subagent 磁盘占用（#34061）、macOS Git 轮询（#32986）。
3. **🖥️ Windows 桌面稳定性**：AppHang、WMI/Defender 高 CPU、MCP 进程重复、UGREEN USB 切换器卡顿（#33884、#29499、#33875、#33946、#33924、#34097）。
4. **🔌 第三方集成体验**：VS Code 扩展 Linux 兼容（#32530）、Browser/Chrome 插件（#32925）、MCP 工具发现退化（#32101）。
5. **🤖 Multi-Agent 体系**：自定义 Agent 全配置应用与生命周期可观测性（#33314 跟进 #32782）。
6. **💰 订阅与计费**：将 5 小时限流临时取消永久化（#34035）、周配额重置时间异常（#30816）、免费 reset 后仍被扣减（#33970）。
7. **🌐 国际化**：中文 UI 支持（#34078）。
8. **🔐 安全/沙箱**：Windows 受限沙箱下 `apply_patch` 失败（#34088）、HTTP 响应缓冲上界（#31781）。
9. **🧩 UX 细节**：粘贴代码被强制 Markdown 化（#34004、#33307）、聊天 handoff 卡死（#33360）、会话续期丢失本地项目注册（#34076）。

---

## 🧑‍💻 开发者关注点（痛点与高频需求）

1. **桌面端资源管理失控**：会话日志 700MB–2GB、缓存 55 GB、Subagent 写入无收敛——开发者担忧长期使用的存储成本与系统稳定性，期望更激进的压缩/裁剪策略与配置项。
2. **Windows 平台体验短板**：AppHang、Defender/WMI 高 CPU、MCP 进程重复、UGREEN 切换器兼容问题反复出现，反映 Codex 桌面在 Windows 上的进程生命周期与外设兼容性还需系统性优化。
3. **粘贴与 Markdown 行为破坏工作流**：diff、代码片段被自动转 rich text 影响 Code Review 场景，是近期呼声最高的 UX 缺陷之一。
4. **会话/权限状态不连贯**：已存在的 full-access 会话突然需要审批、续期后丢失本地项目注册——开发者希望会话状态变更具备更强的可预测性和迁移保障。
5. **GPT-5.6 元数据透明度**：当 context window、reasoning effort 等模型参数发生变更时，开发者希望版本说明与迁移指南更加明确，避免在多分支版本间出现行为漂移。
6. **多 Agent 可观测性**：随着 Multi-Agent V2 推进，自定义 Agent 的全配置应用、生命周期连续性成为高级用户的核心诉求。
7. **安全沙箱与远程执行信任边界**：Windows 受限沙箱下 `apply_patch` 限制、远程 exec-server 的 HTTP 帧缓冲暴露内存压力，开发者期望更细粒度的策略表达与防御能力。

---

*日报基于 github.com/openai/codex 过去 24 小时更新数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-19**

---

## 📌 今日速览

Gemini CLI 今日发布了 `v0.52.0-nightly.20260719.gacae7124b` 版本，日常节奏稳步推进。社区焦点集中在 **Subagent 可靠性**（generalist agent 挂起、MAX_TURNS 误报 GOAL 成功等高优先级 Bug）以及 **Auto Memory 系统的安全与稳定性**（多条相关 Issue 同步推进）。安全侧亦值得关注：`$VAR` / `${VAR}` 变量扩展绕过漏洞的修复 PR 已进入待审阶段。

---

## 🚀 版本发布

**v0.52.0-nightly.20260719.gacae7124b** 已发布
- 对比基线：`v0.52.0-nightly.20260718.gacae7124b`
- 自动版本号递增（机器人驱动）
- 完整变更对比：[Compare Link](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260718.gacae7124b...v0.52.0-nightly.20260719.gacae7124b)

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 / 类型 | 关注度 | 为什么重要 |
|---|------|-------------|--------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后仍报告 GOAL success | **P1 Bug** | 11 评论 | 隐藏了子代理中断事实，影响 Agent 行为评估的可信度，是 subagent 治理的关键缺陷 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁挂起 | **P1 Bug** | 7 评论 / 8 👍 | 用户反馈最强烈的问题之一，简单任务（如建文件夹）可挂起长达 1 小时 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS Sandboxing & 后执行意图路由 | **P2 Enhancement** | 8 评论 | 充分利用 Gemini 3 模型的 bash 亲和力，是「本地 subagent」路线的战略提案 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | Robust component-level evaluations | **P1** | 7 评论 | 已有 76 个行为评估测试在 6 个 Gemini 模型上运行，是质量基础设施核心 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware file reads/search/mapping 影响评估 | **P2** | 7 评论 / 1 👍 | 探索以 AST 替换部分文本读取，潜在可显著降低 token 噪声与轮次消耗 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 很少主动调用 skills 与 sub-agents | **P2 Bug** | 6 评论 | 反映 agent 自主性不足，需要更智能的「技能/子代理选用」决策 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | **P2 Bug** | 5 评论 | 内存索引逻辑缺陷，低信号会话反复被 surfacing，浪费提取资源 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令结束后卡在 "Waiting input" | **P1 Bug** | 4 评论 / 3 👍 | 影响所有命令行工作流，体感强烈的可用性问题 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 失败 | **P1 Bug** | 4 评论 | Linux 用户群体关键阻塞点，跨桌面环境兼容性 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 增加确定性脱敏与日志降噪 | **P2 安全** | 3 评论 | 当前模型上下文已含敏感内容后再脱敏属「补救式」，存在泄露窗口 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 关键内容 |
|----|------|---------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | OPEN · P1 安全 | 修复 `detectBashSubstitution` / `detectPowerShellSubstitution` 的不完整检查，阻止 `$VAR` 与 `${VAR}` 变量扩展绕过 **GHSA-wpqr-6v78-jr5g**；同时加固 `gemini-automated-issue-dedup.yml` 流程 |
| [#28441](https://github.com/google-gemini/gemini-cli/pull/28441) | OPEN | 例行 bump 版本到 `0.52.0-nightly.20260719.gacae7124b` |
| [#28353](https://github.com/google-gemini/gemini-cli/pull/28353) | OPEN · 安全 | `a2a-server` restore 命令路径遍历修复：未对 `selectedFile` 做归一化与目录包含检查，`../../../etc/passwd` 类输入可逃逸 `checkpointDir` |
| [#28348](https://github.com/google-gemini/gemini-cli/pull/28348) | OPEN | 一并修复 **#28313** MaxListenersExceededWarning + API 重试死循环，以及 **#28341** Windows OAuth 成功后无限鉴权循环 |
| [#28438](https://github.com/google-gemini/gemini-cli/pull/28438) | OPEN · size/xs | 在脚本工具注册表查找前先 trim 外层空白，避免带空格的工具名解析失败 |
| [#28248](https://github.com/google-gemini/gemini-cli/pull/28248) | **CLOSED** · 文档 | 补充 MCP `mcpServers` 路径/环境变量展开规则文档（`$VAR` / `${VAR:-fallback}` / Windows `%VAR%`），并显式声明 `{{VAR}}` / `${env:VAR}` / `~` 不支持 |
| [#28247](https://github.com/google-gemini/gemini-cli/pull/28247) | **CLOSED** | `ls` ignore glob 改为基于 picomatch 与 workspace 相对路径匹配，修复 `**` 失效问题；保留 `*.log` 类 basename 行为 |

---

## 📈 功能需求趋势

从今日活跃 Issue 中可清晰识别出几条主线：

1. **🧠 AST 感知的代码库工具链**（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745), [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
   社区希望用 `tilth` / `glyph` 等 AST 工具替换部分文本读取与代码库映射，以减少 token 浪费与误对齐读取。

2. **🤖 Subagent 治理与自主性**
   - 可靠性：MAX_TURNS 误报 GOAL（#22323）、generalist 挂起（#21409）
   - 可见性：`/bug` 报告缺失子代理上下文（#21763）、`/chat share` 暴露子代理轨迹（#22598）
   - 自主性：主动选用 skills/sub-agents（#21968）、自我认知 CLI flags（#21432）

3. **🛡 沙箱与安全**（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873), [#28403](https://github.com/google-gemini/gemini-cli/pull/28403), [#28353](https://github.com/google-gemini/gemini-cli/pull/28353), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   零依赖 OS 沙箱、shell 替换检查强化、路径遍历修复、Auto Memory 脱敏构成完整安全闭环。

4. **🧩 浏览器代理韧性**（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983), [#22267](https://github.com/google-gemini/gemini-cli/issues/22267), [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）
   Wayland 兼容、`settings.json` 覆盖、锁会话自动接管成为子方向。

5. **🧪 评测基础设施**（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353), [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）
   行为评估已规模化（76 测试 × 6 模型），下一步聚焦组件级评估与 AST 工具评估。

---

## 💬 开发者关注点

汇总今日 Issue/PR 反馈中的高频痛点：

| 痛点 | 代表性反馈 |
|------|-----------|
| **Agent 卡死 / 误判成功** | 「子代理打到 MAX_TURNS 还显示成功」「generalist 建文件夹都能挂一小时」「shell 命令结束还卡 'Awaiting input'」 |
| **Skill / Sub-agent 自主选用率低** | 「用户必须显式指示才用 gradle/git 技能」，反映 prompt 与路由层策略缺陷 |
| **Auto Memory 反复处理低信号会话** | inbox 中无效 patch 被静默跳过，但 pending summary 仍会反复读它；日志敏感信息先入模型上下文再脱敏 |
| **工具数量 / 文件乱写** | 工具 > 128 个即 400 错误；模型习惯在任意目录生成 tmp 脚本 |
| **Browser Agent 配置不生效** | `settings.json` 中的 `maxTurns` 被忽略，Wayland 下完全失败 |
| **符号链接 / glob 不友好** | `~/.gemini/agents/*.md` 不接受 symlink；`ls` ignore 的 `**` 模式失效 |
| **安全漏洞已修复但需广泛公告** | `GHSA-wpqr-6v78-jr5g` 变量扩展绕过、a2a-server 路径遍历，建议在 Release Notes 中明确披露 |

---

> 📎 数据口径：基于 GitHub Issues/PRs 过去 24 小时内更新记录，按评论数与优先级综合排序。完整数据请查阅 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-19**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 仓库活跃度依然以 Issue 为主，无新 Release 与 PR 合并。社区焦点集中在 **大上下文窗口（Opus 1M Context）落地**、**Plan/Autopilot 模式行为异常**（尤其是新 GPT-5.6 模型下的退出可靠性）以及 **多平台兼容性问题**（Windows 恢复会话挂起、Linux ASLR 关闭场景 SIGSEGV、僵尸进程未回收）。同时，多个高呼声功能（远程会话、Token 用量指示器、每模式默认模型）正式关闭，标志着一轮迭代收尾。

---

## 🚀 版本发布

**无新版本发布。** 近期最新版本仍为 **v1.0.71**（社区中多个 Issue 仍在引用该版本的问题）。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#2785 支持 Claude Opus 4.7 的 1M 上下文窗口（与 Claude Code 对齐）](https://github.com/github/copilot-cli/issues/2785)
- 状态：✅ CLOSED | 👍 62 | 💬 1
- **意义**：呼声最高的需求之一（62 👍），Claude Code 早已将 Opus 4.7 + 1M Context 设为默认推荐模型，Copilot CLI 终于追平了功能对等，标志着产品竞争力提升的关键里程碑。

### 2. [#1979 Copilot CLI 远程会话支持（移动端/浏览器接入）](https://github.com/github/copilot-cli/issues/1979)
- 状态：✅ CLOSED | 👍 53 | 💬 4
- **意义**：高度关注的功能请求（53 👍），对标 Claude Code 的远程会话能力，本次关闭意味着该项能力已进入规划/实现路径。

### 3. [#1477 模型完成后仍提示"Continuing autonomously (3 premium requests)"](https://github.com/github/copilot-cli/issues/1477)
- 状态：✅ CLOSED | 👍 18 | 💬 11
- **意义**：讨论充分（11 条评论），涉及付费请求计费的正确性，属于用户体验与商业透明度问题，已修复关闭。

### 4. [#2052 持久的 Token / 上下文用量指示器](https://github.com/github/copilot-cli/issues/2052)
- 状态：✅ CLOSED | 👍 19 | 💬 3
- **意义**：长期呼声（19 👍），开发者希望在 TUI 状态栏持续显示"45% 上下文已用"等指标，便于管理长会话。

### 5. [#1610 为 Opus 4.6 添加 1M 上下文](https://github.com/github/copilot-cli/issues/1610)
- 状态：✅ CLOSED | 👍 18 | 💬 1
- **意义**：与 #2785 同一诉求线（曾被声明支持后又回退），本次正式关闭，呼应了上下文扩展的迭代完成。

### 6. [#2958 支持按模式（Plan / Autopilot）配置默认模型](https://github.com/github/copilot-cli/issues/2958)
- 状态：🟢 OPEN | 👍 16 | 💬 3
- **意义**：体现"不同任务用不同模型"的精细化诉求，是 Copilot CLI 向"多模型工作流"演化的代表性 Feature Request。

### 7. [#1487 Codex 5.3 缺失推理/思考输出](https://github.com/github/copilot-cli/issues/1487)
- 状态：✅ CLOSED | 👍 15 | 💬 1
- **意义**：影响开发者对 Codex 模型的调试与可观测性，多用户复现，关闭表明已恢复 reasoning 透出。

### 8. [#3767 超过 CAPI 5MB 限制的附件导致会话永久卡死（无法恢复）](https://github.com/github/copilot-cli/issues/3767)
- 状态：✅ CLOSED | 💬 11
- **意义**：涉及"会话不可恢复"的严重稳定性问题，影响多附件协作场景，11 条讨论反映其严重性。

### 9. [#4163 Linux 下 copilot CLI 1.0.71 不回收子进程（僵尸进程累积）](https://github.com/github/copilot-cli/issues/4163)
- 状态：🟢 OPEN | 💬 1
- **意义**：每会话独立泄漏约 2 进程/分钟，长时间运行会显著积累，属于资源管理/可靠性问题，企业场景中尤为敏感。

### 10. [#4171 Linux 上 ASLR 禁用（kernel.randomize_va_space=0）时 CLI 启动即 SIGSEGV](https://github.com/github/copilot-cli/issues/4171)
- 状态：🟢 OPEN | 💬 0
- **意义**：影响 SLES、RHEL 等企业加固基线（禁用 ASLR）的部署环境，直接关系到企业用户的可用性。

**其他值得关注**：
- [#4160 Plan 模式误拦截只读 shell 命令（关键词误判）](https://github.com/github/copilot-cli/issues/4160)（🟢 OPEN）
- [#4172 新 GPT-5.6 模型退出 Plan 模式不可靠](https://github.com/github/copilot-cli/issues/4172)（🟢 OPEN）
- [#4174 ACP 服务器（`copilot --acp`）未在协议消息中暴露 Token/上下文用量](https://github.com/github/copilot-cli/issues/4174)（🟢 OPEN）
- [#4165 Windows 下 `copilot --resume` 冷启动卡在 "Resuming session"](https://github.com/github/copilot-cli/issues/4165)（🟢 OPEN）

---

## 🔧 重要 PR 进展

**过去 24 小时无 Pull Request 更新。**

> 说明：Copilot CLI 近期主要通过 Issue 跟踪和直接 commit 推进迭代，PR 通道活跃度较低。开发者通常通过 [官方 CHANGELOG](https://github.com/github/copilot-cli/releases) 关注功能落地。

---

## 📈 功能需求趋势

从过去 24 小时的 27 条 Issue 中可提炼出以下社区最关注的方向：

| 方向 | 代表性 Issue | 社区热度 |
|------|-------------|---------|
| **大上下文窗口支持** | #2785 (62👍), #1610 (18👍) | 🔥🔥🔥 |
| **会话远程访问与可观测性** | #1979 (53👍), #2052 (19👍), #4174 | 🔥🔥🔥 |
| **多模式（Plan/Autopilot）行为一致性** | #2958, #4160, #4172, #4173 | 🔥🔥🔥 |
| **本地/自定义模型（BYOK）与配置灵活性** | #3891, #4167, #4168, #4166 | 🔥🔥 |
| **企业 / 多账户管理** | #4166 (默认 user 切换) | 🔥 |
| **可观测性与遥测（OTEL）** | #4169 (`-p` 不上报遥测) | 🔥 |
| **多平台稳定性** | #4171 (Linux SIGSEGV), #4163 (僵尸进程), #4165 (Windows resume) | 🔥🔥 |
| **编辑器 / TUX 交互体验** | #1069 (Readline 快捷键) | 🔥 |

---

## 💡 开发者关注点与高频痛点

通过对 Issue 文本的语义聚类，开发者反馈主要聚焦于以下几点：

1. **大上下文是刚需**：Opus 1M Context 的呼声（合计 **80+ 👍**）是当前最强烈诉求，体现长会话、长代码库分析场景的普遍需求。

2. **Plan / Autopilot 模式的状态管理脆弱**：
   - 退出 Plan 模式不可靠（#4172）
   - 模式切换后 `task_complete` 工具不可用（#4161，疑似回归）
   - 后台写任务保留过期的 Plan 写门控（#4173）
   - Plan 模式对只读命令的误拦截（#4160）
   - 这反映出**模式状态机**仍是当前实现的高复杂度区域。

3. **多平台与企业部署兼容性短板**：
   - Windows `--resume` 冷启动挂起
   - Linux 僵尸进程 / ASLR 关闭下的 SIGSEGV
   - winget 安装失败（#4149）
   - 这些问题在个人开发者场景中不显著，但在企业部署、CI 集成中成为阻碍。

4. **可观测性不足**：
   - ACP 服务器不暴露 Token 用量
   - `copilot -p` 不上报 OTEL
   - 缺乏持久上下文用量指示
   - 这表明 CLI 在**面向生产环境的可观测能力**上仍待加强。

5. **BYOK / 自定义 Provider 的边界问题**：
   - 子 agent 的 `model:` 覆盖在 BYOK 下被静默丢弃（#3891）
   - 本地模型下无法将 `-max-ai-credits=0`（#4167）
   - 自定义模型配额告警机制僵化（#4168）
   - 反映出**扩展性边界未与"免费模型支持"场景充分对齐**。

6. **附件与会话韧性**：超大附件永久卡死会话（#3767），重复告警（#4164）—— 提示 **错误降级（graceful degradation）** 路径仍需完善。

---

> 📊 **日报小结**：本日 Copilot CLI 仓库整体处于"问题消化期"，大量高 👍 的功能/模型支持 Issue 完成关闭，新 Issue 则聚焦在 **GPT-5.6 模型下的模式行为、跨平台稳定性、可观测性** 三大方向。建议持续关注上述 7 个 OPEN Issue，尤其是 #4160、#4163、#4171、#4172 这四个与稳定性强相关的问题。

*数据截至 2026-07-18 GitHub 同步时间，统计窗口为过去 24 小时。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-19**

---

## 1. 今日速览

今日社区活跃度适中，共 2 个 Issue 和 2 个 PR 出现更新。最显著的事件是 PR #2509 直接响应了 Issue #2501 的功能请求，提出可配置 thinking effort 和 `/effort` 命令方案，实现 Issue 与 PR 的快速闭环。此外，权限规则匹配顺序的文档-行为不一致问题（#2508）和 ACP 模式下 QuestionRequest 误返回空字典的修复（#2507）也是今日值得关注的修复方向。

---

## 2. 版本发布

**过去 24 小时内无新版本发布。** 社区当前主要版本为 **0.27.0**（见 Issue #2508）。

---

## 3. 社区热点 Issues

今日仅有 2 个 Issue 在过去 24 小时内有更新，以下为完整列表：

### #2501 ⭐ [OPEN] [enhancement] 支持在 TUI 主界面直接快捷切换 Reasoning Level / Thinking Effort
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2501
- **作者**：remacheybn408-boop ｜ **创建**：2026-07-16 ｜ **更新**：2026-07-18
- **关注理由**：用户体验层面的高频痛点——目前切换思考强度需要进入 `/model` 二级菜单，操作流程繁琐，打断工作心流。该 Issue 直接对比了 Codex 在 VS Code 中的下拉式切换体验，提出至少三种实现方案（斜杠命令 `/thin`、`/`、`/thick`、键盘快捷键如 Ctrl+T）。目前已有 1 条评论，且 PR #2509 已宣布采纳此方案。
- **社区反应**：👍 0 ｜ 💬 1 ｜ 已被 PR #2509 Resolve

### #2508 ⚠️ [OPEN] [Permission rules] deny 规则覆盖 allow 规则，与文档"首条匹配规则生效"描述矛盾
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2508
- **作者**：Julzilla ｜ **创建**：2026-07-18 ｜ **更新**：2026-07-18
- **关注理由**：这是一个潜在的安全相关 bug。Issue 指出实际行为中 deny 规则总会覆盖 allow 规则（无论顺序），与官方文档声称的"first matching rule takes effect"语义不一致。这种文档与实现不一致的问题会影响用户对权限系统行为的正确预期，特别是在多规则组合场景下。
- **社区反应**：👍 0 ｜ 💬 0 ｜ 报告时附带了 v0.27.0、k3 模型、Kimi Code membership + API Key 等详细环境信息，便于复现

---

## 4. 重要 PR 进展

### #2509 [OPEN] feat(kimi): 可配置 thinking effort 与 /effort 命令
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2509
- **作者**：n-WN ｜ **创建**：2026-07-18 ｜ **更新**：2026-07-18
- **关联 Issue**：Resolve #2501 ｜ Related: #318（已关闭的 reasoning_effort 支持）、#2499
- **内容概要**：该 PR 实现了 Issue #2501 提出的功能需求，提供了可配置的 thinking effort 机制以及 `/effort` 快捷命令入口。该实现基于 #2499 中的显式 legacy `reasoning_effort` passthrough 之上构建，整体方案在 #2501 的评论中已提前预告。属于用户体验优化方向。
- **状态**：👍 0 ｜ 评审中

### #2507 [OPEN] fix(acp): 返回 QuestionNotSupported 信号而非空答案
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2507
- **作者**：ayaangazali ｜ **创建**：2026-07-18 ｜ **更新**：2026-07-18
- **关联 Issue**：Resolve #2495
- **内容概要**：修复 ACP（Agent Communication Protocol）服务器模式下 `QuestionRequest` 的处理逻辑。原实现 `src/kimi_cli/acp/session.py:211` 总是将请求解析为空字典，与"用户主动关闭问题"无法区分，导致模型收到误导性反馈。修改后改为发出 `QuestionNotSupported` 信号，使模型行为更可预测。
- **状态**：👍 0 ｜ 评审中

---

## 5. 功能需求趋势

从今日有限的 Issue 样本来看，社区关注的方向集中在以下两个层面：

| 趋势方向 | 代表 Issue | 关注点 |
|---------|-----------|--------|
| **TUI 交互体验优化** | #2501 | 减少深层级菜单嵌套、提供快捷键/斜杠命令切换模型参数，提升工作流连续性。对标 Codex 在 VS Code 中的体验。 |
| **权限系统正确性与文档一致性** | #2508 | 规则匹配语义的明确化、文档与实现行为对齐，确保安全相关配置的预期一致。 |

**补充观察**：结合 PR #2509 的关联历史（#318、#2499）可以看出，社区与维护者围绕 reasoning_effort / thinking effort 这一参数的能力建设已持续多轮迭代，说明 **模型推理参数的可控性** 是近期的持续热点。

---

## 6. 开发者关注点

基于今日 Issue 与 PR 反馈，开发者社区呈现以下高频关注点：

1. **工作流不被打断的需求**：开发者普遍倾向于在主交互界面直接调整关键参数（#2501），减少跳转式操作。
2. **权限系统行为的可预测性**：安全相关功能需要文档与实现严格一致（#2508），模糊语义会增加配置风险。
3. **Agent 通信协议的可靠性**：PR #2507 反映出开发者对 ACP 模式下信号语义准确性的关注，避免模型因错误信号产生不当行为。
4. **Issue → PR 的快速响应**：从功能请求到实现 PR 在同一日窗口内出现（#2501 → #2509），显示维护者对用户体验反馈的响应效率较高。

---

**日报小结**：今日整体活动量较小，但问题-解决方案的闭环效率突出。`reasoning_effort` 相关能力建设仍是当前主线，建议持续关注 PR #2509 的评审进展与 #2508 的后续修复动态。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期**：2026-07-19  
**数据来源**：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，活跃度集中在 **稳定性修复与 Desktop 端体验优化** 上。围绕 Memory Megathread (#20695)、Claude 模型 step-cap prefill 兼容 (#32548/#37685)、V2 会话压缩死循环 (#30443) 的讨论持续升温；同时 Desktop 客户端的归档会话、内置浏览器、布局亮度等 UI 类提案获得较多关注。PR 侧聚焦于 **工具调用容错（malformed tool input）**、**会话双向分页**、**缓存用量内联显示** 等长期遗留问题的推进。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

> 选取标准：评论数 + 👍 数 + 对核心功能的影响

### 1. [Memory Megathread #20695](https://github.com/anomalyco/opencode/issues/20695)
- **作者**：thdxr | **评论**：113 | **👍**：90 | 状态：OPEN
- 项目维护者亲自挂帅的集中式 bug 跟踪帖，专门收集 OpenCode 内存问题。官方要求社区提供 **heap snapshot** 以辅助诊断，并明确禁止用 LLM 提建议。热度长期居高不下，是当前最关键的基础设施议题。

### 2. [[FEATURE] view archived sessions on desktop #6680](https://github.com/anomalyco/opencode/issues/6680)
- **作者**：0xajka | **评论**：39 | **👍**：24 | 状态：OPEN
- 提议在 Desktop 侧边栏 `...` 菜单中增加"归档会话"入口，配合模态框浏览。属于高频 UX 改进请求，长生命周期仍持续被关注。

### 3. [LM Studio Failure to refresh models #2047](https://github.com/anomalyco/opencode/issues/2047)
- **作者**：blankenshipz | **评论**：22 | 状态：OPEN
- 用户在 LM Studio 中增减模型后，OpenCode 的模型列表不会刷新，`auth logout/login` 也无法解决。本地 Provider 集成的一处长期未修补缺陷。

### 4. [[FEATURE] Integrated browser for desktop #26772](https://github.com/anomalyco/opencode/issues/26772)
- **作者**：AlexDelgado20 | **评论**：15 | 状态：OPEN
- 提议 Desktop 客户端内置浏览器工作区，便于用户在 AI 编程时直接查看/交互外部页面，被视为下一代 IDE 体验的关键拼图。

### 5. [Model selection silently reverts after answering a question #34207](https://github.com/anomalyco/opencode/issues/34207)
- **作者**：geril07 | **评论**：8 | 状态：OPEN
- Agent 工作中途切换模型后，一旦用户回答 Agent 的提问，模型选择会被静默回滚到原值。属于典型的状态管理 bug，影响多模型工作流体验。

### 6. [Infinite "Session compacted" loop #30443](https://github.com/anomalyco/opencode/issues/30443)
- **作者**：CXZYZ | **评论**：4 | 状态：OPEN
- 在 DeepSeek V4、MiMo V2.5、MiniMax M3 等模型上，Desktop v1.15.13 在新会话输入 "abc" 即触发 "Session compacted" 无限循环，App 完全不可用。

### 7. [Step-cap assistant message causes 400 on Claude with thinking #32548](https://github.com/anomalyco/opencode/issues/32548)
- **作者**：kevinfaveri | **评论**：4 | 状态：OPEN
- Agent 触达 step 上限时，回包被附加为 assistant 消息，Anthropic 视作 prefill 直接 400 拒绝。**#37685** 重复上报同一问题，反映该缺陷影响所有 Claude 启用 thinking 的用户。

### 8. [Desktop white screens & send failures from corrupted global state JSON #37353](https://github.com/anomalyco/opencode/issues/37353)
- **评论**：2 | 状态：OPEN
- Desktop 1.18.3 + WSL sidecar 场景下，全局状态 JSON 损坏、`session.path` 陈旧、悬挂的 server 引用导致白屏与消息发送失败。

### 9. [[2.0] tui: "Toggle MCPs" command has no effect when pressing spacebar #36482](https://github.com/anomalyco/opencode/issues/36482)
- **评论**：4 | 状态：OPEN
- V2 TUI 中通过 `Ctrl+P → Toggle MCPs → Space` 切换 MCP 失败，服务器 enabled 状态不变，命令行与 UI 行为不一致。

### 10. [[FEATURE] Teach Mode for Learning-by-Doing #36521](https://github.com/anomalyco/opencode/issues/36521)
- **作者**：ThibaultGH | **评论**：3 | 状态：OPEN
- 提出 "Teach Mode"，让 Agent 引导而非直接给出答案，是教育/学习场景下的重要产品方向。此前在 #12675 因 90 天无活动被自动关闭，本次复提。

---

## 🛠️ 重要 PR 进展

### 1. [[contributor] fix(core): safely recover malformed tool input #37698](https://github.com/anomalyco/opencode/pull/37698)
- 模型输出畸形 JSON 工具调用时，标记为 `executed: false`、记录失败并保留原始输入；V2 可基于最新历史投影发起一次修复 Step。这是当前工具调用容错的核心修复（合并入口）。

### 2. [[contributor] fix(simulation): render screenshot symbol glyphs #37691](https://github.com/anomalyco/opencode/pull/37691)
- 修复 V2 模拟 PNG 截图中 `△ ✱ ⇆` 与 braille spinner 帧渲染为 missing-glyph 的问题，提升自动化测试与回放体验。

### 3. [feat(opencode): use adaptive thinking effort for kimi family on anthropic #37696](https://github.com/anomalyco/opencode/pull/37696)
- 为 Kimi/Moonshot 的 Anthropic 兼容端点启用 `thinking.type="adaptive"` 契约，扩展 Anthropic 协议族厂商覆盖。

### 4. [feat(opencode): display cached token count inline in TUI #23111](https://github.com/anomalyco/opencode/pull/23111)
- 在侧边栏上下文面板、prompt footer、subagent footer 中显示 `(N cached)`，仅当 `cache.read + cache.write > 0` 时出现。透明化缓存收益。

### 5. [feat(session): bi-directional cursor-based pagination #8535](https://github.com/anomalyco/opencode/pull/8535)
- 在 server / app / TUI / experimental HTTP 路径中统一引入双向游标分页，关掉 #6548、#28257、#30587，长会话加载性能与一致性显著改善。

### 6. [feat: add agent default variant handling in TUI and desktop #7156](https://github.com/anomalyco/opencode/pull/7156)
- 在 TUI 与 Desktop 中尊重 agent 配置的 model variant，当前模型支持时自动应用。

### 7. [feat(usage): unified usage tracking with auth refresh #9545](https://github.com/anomalyco/opencode/pull/9545)
- 为四种 OAuth-auth 提供商加入内置用量追踪，并支持 token 过期后自动刷新。整合 #6905 / #7837，替代方案 #9301。

### 8. [fix(app): handle desktop deep links in new layout #35223](https://github.com/anomalyco/opencode/pull/35223)
- 修复新布局下 `opencode://open-project?...` 与 `opencode://new-session?...` 深链接被 Electron 接收但未被 App 处理的回归问题。

### 9. [[contributor] fix(core): authorize relative external paths #37689](https://github.com/anomalyco/opencode/pull/37689)
- 恢复 V1 兼容行为：`../sibling/file.ts` 这类相对路径不再提前拒绝，而是走 `external_directory` 授权流程。

### 10. [[contributor] fix(core): refresh stale plugin cache #37688](https://github.com/anomalyco/opencode/pull/37688) / [#35777](https://github.com/anomalyco/opencode/pull/35777)
- 双 PR 同源修复：`Npm.add` 在 `node_modules/{name}` 已存在时短路，导致 `@latest` 浮动版本被钉死。该问题在 #25293 中被报告，今日连续收到两版实现，合并指日可待。

> 另有关注价值的 PR：`feat(provider): add --model free #34794`（`opencode run` 与 TUI 增加随机零成本模型入口）、`fix(tui): export full session transcript #32894`（导出全量 transcript 修复）、`fix(config): normalize Windows env paths #32906`（Windows 路径归一化）。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 Issue 文本中提炼出以下高频方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Desktop 体验完善** | #6680 归档会话、#26772 内置浏览器、#37428 亮度、#37353 白屏 | ⭐⭐⭐ |
| **多模型/多 Provider 兼容性** | #2047 LM Studio、#2784 agentrouter、#18428 Ollama、#37696 Kimi adaptive thinking | ⭐⭐⭐ |
| **Claude + Thinking 协议适配** | #32548 / #37685 prefill 400 | ⭐⭐⭐ |
| **会话与上下文管理** | #30443 压缩死循环、#34207 模型切换回滚、#8535 双向分页 | ⭐⭐ |
| **学习/教学场景** | #36521 Teach Mode（#12675 复提） | ⭐⭐ |
| **i18n / 本地化** | #37658 placeholder 硬编码英文、#37642 原生菜单未本地化 | ⭐⭐ |
| **插件生态** | #25293 @latest 缓存、#37690 office 插件入册 | ⭐ |
| **错误恢复与容错** | #37698 / #37669 malformed tool input | ⭐⭐ |

---

## 💡 开发者关注点

从今日活跃讨论中，可归纳出以下开发者群体的高频痛点：

1. **内存与稳定性仍是头号议题** — #20695 Megathread 由核心维护者亲自挂帅，已累计 113 条评论、90 👍，说明长会话/大型项目的内存泄漏在多平台上普遍存在。

2. **Anthropic thinking 模型被拒预填** — 当 Agent 触达 step 上限，OpenCode 自动追加的 assistant message 被 Claude 视作 prefill 直接返回 400。多个 Issue (#32548、#37685) 指向同一根因，**亟需一个围绕 step-cap 收尾逻辑的协议安全设计**。

3. **Desktop 1.18.x 状态损坏** — Windows + WSL sidecar 场景下全局 state JSON 损坏、`session.path` 陈旧导致白屏；叠加新布局下深链接丢失 (#35223)，Desktop 端稳定性需要专项梳理。

4. **Provider 兼容矩阵碎片化** — Ollama 60-90s 响应 (#18428)、LM Studio 列表不刷新 (#2047)、Kimi 缺 adaptive thinking (#37696)、Nemotron 3 Ultra 流式失败 (#37638)，表明多 Provider 适配仍是社区高优先级方向。

5. **V2 TUI/CLI 体验回归** — `default_agent` 启动被忽略 (#37225)、Toggle MCPs 失效 (#36482)、headless 命令加载 OpenTUI 并泄漏 13.1 MiB 的 `libopentui.so` (#37671)，V2 收敛期暴露多个体验退化点。

6. **付费用户体验与支持渠道** — #37680 (OpenCode Zen 付费用户被限流) 与 #32482 (OpenCode-Go 误入 Zen 套餐) 集中暴露**付费流程与客服通道的缺位**，社区情绪偏负面。

7. **i18n 反复绕过** — placeholder、native menu 等多处仍硬编码英文 (#37658、#37642)，已存在的中文翻译键未被消费，体现出 i18n 体系与新布局/新组件的协同脱节。

8. **工具调用容错机制缺失** — 模型偶发输出畸形 JSON 工具调用时，OpenCode 缺少结构化降级路径，今日双 PR (#37669 / #37698) 集中修补，预示该方向将是下个版本重点。

---

*日报由 AI 辅助整理，数据截至 2026-07-19 GitHub API 抓取时刻。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-19

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) （Issue 镜像至 earendil-works/pi 组织）

---

## 1. 今日速览

过去 24 小时社区异常活跃，共 27 条 Issue 与 9 条 PR 更新，但绝大多数 Issue 在当天即被关闭或分流（Triage 极快）。**值得关注的两大主线**：①AI 流式响应与重试机制的稳健性问题密集爆发（Responses 协议尾部 EOF、Compaction 不重试、退避指数无上限等），多个核心 bug 已修复；②企业级集成与新模型适配成为新焦点（Copilot Enterprise 压缩、Anthropic Vertex Provider、DeepSeek-V4、OpenRouter OAuth）。另外值得留意的是，作者 @badlogic 多次关闭了"误投"与"未走 LGTM 流程"的 PR，社区治理节奏明显收紧。

---

## 2. 版本发布

⏸ **过去 24 小时内无新版本发布**。本节省略。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 重要原因 |
|---|---|---|---|
| 1 | [#6725](https://github.com/earendil-works/pi/issues/6725) Copilot pricing for GPT-5.6 models is incorrect | 🟢 OPEN · inprogress | Pi 统计的 OpenAI Copilot 调用成本与实际账单不符（差约 $1.67 vs 真实费用），**cacheWrite 未计入**，影响所有 Copilot 用户的计费信任。 |
| 2 | [#6647](https://github.com/earendil-works/pi/issues/6647) Compaction fails on a single transient stream drop (no retry) | 🟢 OPEN · inprogress | 上下文压缩时一次中途断流就整体失败，而普通 assistant turn 会重试同类错误；**健壮性 bug**，PR #6775 正在修复。 |
| 3 | [#6167](https://github.com/earendil-works/pi/issues/6167) `transformMessages` + thinking block normalization 与 `requiresReasoningContentOnAssistantMessages` 冲突 | 🟢 OPEN · inprogress | 跨模型切换时 thinking block 规范化路径在兼容标志下行为不一致，**影响多 provider 互操作**。 |
| 4 | [#6675](https://github.com/earendil-works/pi/issues/6675) `pi update --self` 单次瞬时网络失败即放弃 | 🟢 OPEN | 自更新只请求一次 `pi.dev/api/latest-version`，缺乏重试；**CLI 升级体验差**，亟待补齐重试。 |
| 5 | [#6303](https://github.com/earendil-works/pi/issues/6303) 指数退避没有上限 | 🔴 CLOSED · 👍1 | `getRetrySettings()` 漏返 `maxDelayMs`，第 7 次重试等待约 4 分钟；**已被修复**。 |
| 6 | [#6792](https://github.com/earendil-works/pi/issues/6792) 编辑 500+ 行大文件时 CPU 100% | 🔴 CLOSED | 大文件写入导致单核打满，并附带 CPU profile 附件，**性能热点已定位修复**。 |
| 7 | [#6768](https://github.com/earendil-works/pi/issues/6768) Copilot Enterprise 下无法 Compaction | 🔴 CLOSED · 👍2 | OpenAI 返 421 Misdirected Request、Anthropic 报错；**企业许可证的关键路径回归**。 |
| 8 | [#6801](https://github.com/earendil-works/pi/issues/6801) OpenAI Responses 退化输出可自我放大并无限流 | 🔴 CLOSED | 模型把序列化响应包当作文本输出后被持久化并递归嵌套，**潜在上下文污染/安全风险**。 |
| 9 | [#6814](https://github.com/earendil-works/pi/issues/6814) 新增 OpenRouter 原生 OAuth 支持 | 🔴 CLOSED | 社区高频请求——OpenRouter 支持浏览器 OAuth 换取 API Key，**降低接入门槛**。 |
| 10 | [#6796](https://github.com/earendil-works/pi/issues/6796) 切换至 `deepseek/deepseek-v4-pro` 时 `tool_call_id` 重复 | 🔴 CLOSED | 跨模型切换触发 HTTP 400，**新模型兼容性回归**已被处理。 |

> 💡 备注：#6794（启动因模型目录刷新变慢）、#6782（印地语字符重绘错乱）、#6784（iTerm2 渲染异常）也均在当日关闭，体现社区对**性能 & 国际化 & 终端兼容性**的快速响应。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|---|---|---|
| 1 | [#6775](https://github.com/earendil-works/pi/pull/6775) retry on compaction/branch summarization retryable failures | 🟢 OPEN | **修复 #6647**：为压缩与分支摘要加上 `isRetryableAssistantError` 重试；作者已向 @badlogic 询问是否需要在 UI 上提示重试。 |
| 2 | [#5262](https://github.com/earendil-works/pi/pull/5262) feat(ai): add Anthropic Vertex provider | 🟢 OPEN | 新增内置 `anthropic-vertex` provider，复用 Anthropic Messages 流式路径，**企业上云关键能力**。 |
| 3 | [#1762](https://github.com/earendil-works/pi/pull/1762) Expose session and tree browsing/editing to RPC protocol | 🔴 CLOSED | 把会话发现 / 树形导航 / 编辑能力开放给 RPC，**TUI 外接客户端（如 Web/IDE 插件）的基础设施**。 |
| 4 | [#6807](https://github.com/earendil-works/pi/pull/6807) fix(ai): stop Responses streams at terminal event | 🔴 CLOSED | **修复 #6808**：OpenAI Responses 在 `response.completed` 后不再傻等 HTTP EOF，单次响应延迟降低最多 ~4 秒。 |
| 5 | [#6813](https://github.com/earendil-works/pi/pull/6813) feat(coding-agent): support shared auth file | 🔴 CLOSED | 新增 `PI_CODING_AGENT_AUTH_FILE` 环境变量，让 CLI 鉴权 / OAuth 刷新 / 模型目录刷新走独立凭据文件，**支持多 Profile 隔离**。 |
| 6 | [#6802](https://github.com/earendil-works/pi/pull/6802) fix(coding-agent): show actual extended context size in footer | 🔴 CLOSED | Footer 中的 `[1M]` 不再硬编码，渲染模型真实的 `extendedContextWindow`（如 GPT-5.4/5.5/5.6 的 1,050,000）。 |
| 7 | [#6804](https://github.com/earendil-works/pi/pull/6804) fix(coding-agent): allow removing scoped models whose provider/model no longer resolves | 🔴 CLOSED | **修复 #6806**：provider 被 `/logout` 后无法在 UI 中移除的孤儿 scoped model 终于可清理。 |
| 8 | [#6812](https://github.com/earendil-works/pi/pull/6812) Remove "./" from pi-ai bin path so lockfiles stop flip-flopping | 🔴 CLOSED | **修复 #6811**：`package.json` 去掉 `./dist/cli.js` 前缀的 `./`，避免 npm registry 与本地 lockfile 来回漂移。 |
| 9 | [#6795](https://github.com/earendil-works/pi/pull/6795) Add exit cmd | 🔴 CLOSED | 新增 `/exit` 命令，告别键盘组合键退出会话。 |
| 10 | [#6809](https://github.com/earendil-works/pi/issues/6809) Improve extension startup time (请忽略) | 🔴 CLOSED | 作者贴出的实验数据：用 `bun build` 把 pi-readseek 扩展启动从 ~2s 降到 **34ms**，作为他山之石供其他扩展作者参考。 |

---

## 5. 功能需求趋势

综合 27 条 Issue 与 9 条 PR 的主题聚类：

| 趋势 | 代表性 Issue / PR | 解读 |
|---|---|---|
| 🤖 **新模型 / 新 Provider 适配** | #5262 Vertex、#6814 OpenRouter OAuth、#6796 DeepSeek-V4 | Claude on Vertex、OpenRouter 一键登录、DeepSeek 新版本成为接入热点，**多 provider 一等公民**仍是核心战略。 |
| 🛡️ **重试 & 流式鲁棒性** | #6303、#6647、#6675、#6801、#6808、#6810 | 长链路 AI 调用对**瞬时故障、EOF 等待、退避上限、手动重试**的诉求集中爆发。 |
| ⚡ **性能 / 启动 / 大文件** | #6792、#6793、#6794、#6809 | 大文件写入、SessionManager 重复 IO、模型目录刷新阻塞启动；扩展冷启动成为新议题。 |
| 🧩 **扩展 / RPC 生态** | #1762、#6809、#6813 | RPC 协议补全"会话浏览 + 树形导航"、独立 auth 文件、扩展 Bun 编译加速——**生态外延持续扩展**。 |
| 🖥️ **终端 / 国际化体验** | #6774、#6782、#6784 | Devanagari 重绘、iTerm2 闪烁、Crowded tmpdir 等"边缘体验"被认真对待。 |
| 🧮 **计费 / 成本透明** | #6725、#6799 | Copilot 计费口径不一致、`auth.json` 中 ENV section 优先级；**开发者对成本可解释性的需求上升**。 |

---

## 6. 开发者关注点

从今天的反馈中可归纳出几条**高频痛点**：

1. **"网络抖动 = 任务死亡"**——`pi update --self`、Compaction、Stream EOF 等多处在第一次失败时缺乏重试，开发者期待与普通 assistant turn 同等的 `isRetryableAssistantError` 保护（[#6675](https://github.com/earendil-works/pi/issues/6675) / [#6647](https://github.com/earendil-works/pi/issues/6647)）。
2. **"成本数字对不上账单"**——Copilot 用户普遍发现 Pi 估算偏低，主因是 cacheWrite 未计入；开发者希望计费模型默认严格对齐 API 实际费用（[#6725](https://github.com/earendil-works/pi/issues/6725)）。
3. **"模型目录刷新拖慢启动"**——冷启动等待过长影响交互节奏，社区开始用 `bun build` 把扩展压到 30ms 级（[#6794](https://github.com/earendil-works/pi/issues/6794) / [#6809](https://github.com/earendil-works/pi/issues/6809)）。
4. **"OpenRouter 仍需手贴 Key"**——OAuth 一键登录呼声高，OpenRouter 已支持浏览器授权，社区期待 Pi 原生跟进（[#6814](https://github.com/earendil-works/pi/issues/6814)）。
5. **"lockfile 漂移 / 包路径不一致"**——`pi-ai` 的 `./` 前缀导致 npm metadata 与本地来回切换，开发者希望发布管线更严格（[#6811](https://github.com/earendil-works/pi/issues/6811) / [#6812](https://github.com/earendil-works/pi/pull/6812)）。
6. **"跨模型切换的 thinking block 互操作"**——切换 provider 时 thinking content 的规范化策略需要更显式的兼容位（[#6167](https://github.com/earendil-works/pi/issues/6167)）。
7. **"治理节奏"**——同日多个 PR 因未走 LGTM 而被关闭，提示贡献者**先在 CONTRIBUTING.md 走预审流程**，避免被秒关。

---

> 📌 **编辑建议**：若你正在使用 Pi 升级 / 多 provider 工作流，可重点关注 [#6775](https://github.com/earendil-works/pi/pull/6775)（压缩重试）与 [#5262](https://github.com/earendil-works/pi/pull/5262)（Vertex 支持）两条 OPEN PR，它们一旦合入将显著改善体验。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-07-19**

---

## 1. 今日速览

v0.19.12 正式版、预览版与 nightly 三条发布线同步推进，配套多条 CI/Review 基础设施 PR 进入合入窗口；与此同时，社区暴露出三起 P1 级核心缺陷（子代理污染主会话模型、并发写者撕裂会话历史、`/goal` 锁死输入），DAE 与 ACP 团队的修复 PR 已基本就位。MCP 兼容性、Channel 后台自动化与会话工作区隔离仍是当前迭代的主轴。

---

## 2. 版本发布

| 版本 | 状态 | 要点 |
|---|---|---|
| [v0.19.12](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12) | 稳定版 | 包含 daemon 冷启动追踪、ACP shell 命令安全路由等特性，**无已知破坏性变更** |
| [v0.19.12-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-preview.0) | 预览版 | 沉淀 `feat(daemon): Trace cold first-session startup` (#6907) 与 `serve` 多工作区所有权硬化 |
| [v0.19.12-nightly.20260719.86ad532de](https://github.com/QwenLM/qwen-code/releases/tag/v0.19.12-nightly.20260719.86ad532de) | Nightly | 同步 VSCode IDE companion 第三方声明、抑制未来漂移 |

> 建议：生产环境锁定 v0.19.12 正式版；想提前验证性能与 Channels 功能的用户可试用 preview。

---

## 3. 社区热点 Issues

> 选取标准：优先级、评论活跃度、影响面、修复进度。链接均指向 `QwenLM/qwen-code` 仓库。

1. **#7156 [P1] 子代理静默污染主会话模型** — [#7156](https://github.com/QwenLM/qwen-code/issues/7156)
   #7119 已修复一类路径，但子代理执行仍会让主会话悄悄切换模型并触发 400 错误。9 条评论，作者 @Aleks-0 持续追踪，影响所有多 agent 工作流。

2. **#7164 [P1] 并发写者可撕裂 JSONL transcript** — [#7164](https://github.com/QwenLM/qwen-code/issues/7164)
   两个 Qwen 进程恢复同一会话时，尾部节点分叉、出现多重父链，重启后只能恢复部分响应。属于数据完整性事故级问题，PR #7166 已对位修复。

3. **#7181 [P1] `/goal` 循环阻塞用户输入** — [#7181](https://github.com/QwenLM/qwen-code/issues/7181)
   Stop hook 持续 `block` 时，`/goal clear`、新条件与普通文本都被压入下一轮，只能 Ctrl+C 终止。hooks-events 主线上的关键 UX 缺陷。

4. **#4748 [性能] daemon 冷启动与 serve 快路径优化** — [#4748](https://github.com/QwenLM/qwen-code/issues/4748)
   由 @doudouOUC 维护的长线跟踪：DAE 首次会话冷启动从 2.5s 进一步压缩，已并入 #6907 的追踪能力。

5. **#7148 [Bug] Gemma 4 因通用 tool_call 示例而停摆** — [#7148](https://github.com/QwenLM/qwen-code/issues/7148)
   默认系统提示里的 `[tool_call: ...]` 覆盖了 Gemma 的原生 QAT 工具调用，导致小模型（E4B/12B）输出无效 XML。PR #7177 已修复（已关闭）。

6. **#7159 [Bug] `MaxListenersExceededWarning` 致崩溃** — [#7159](https://github.com/QwenLM/qwen-code/issues/7159)
   WriteStream 累积 11 个 resize 监听器触发 Node 警告后崩溃。影响 VSCode/CLI 用户。PR #7186 通过共享单例监听器对位修复。

7. **#7147 [Bug] MCP server 工具/资源列表拉取超时** — [#7147](https://github.com/QwenLM/qwen-code/issues/7147)
   Fastmail MCP 等第三方服务认证通过但工具枚举超时，反映 MCP 握手阶段仍存在稳定性问题。

8. **#6992 [Bug] 链式 MCP 调用在 Windows 上静默失败** — [#6992](https://github.com/QwenLM/qwen-code/issues/6992)
   同一回合需要多个本地权限类 MCP 时，第二个会报"Server configuration not found"，权限 UI 也卡死。已关闭但回退路径需关注。

9. **#6970 [Bug] 含点号的 MCP 工具名被严格 provider 拒绝** — [#6970](https://github.com/QwenLM/qwen-code/issues/6970)
   `literature.search_pubmed` 这类名称在 OpenAI/Anthropic 兼容端被拒。PR #6976 引入规范化方案并已合入。

10. **#6824 [Feature] 会话历史关键字搜索** — [#6824](https://github.com/QwenLM/qwen-code/issues/6824)
    CLI 与 VSCode 扩展均无法跨会话定位历史消息，是被多名开发者反复提出的高频需求。

> 此外，`#7192`（source_test 元数据契约错位）、`#6949`（ACP Plan 模式误拦截只读 shell）、`#7151`（v0.19.10→0.19.11 升级报错）值得持续跟进。

---

## 4. 重要 PR 进展

1. **#7166 强制单写者会话持久化** — [#7166](https://github.com/QwenLM/qwen-code/pull/7166)  
   为 `(runtimeBase, sessionId)` 引入进程级 lease，附 append 时校验 owner token + UTF-8 字节长度，从根源上解决 #7164 的并发撕裂问题。

2. **#7172 Plan-mode shell 按安全等级路由** — [#7172](https://github.com/QwenLM/qwen-code/pull/7172)  
   对应 #6949：把 shell 命令按风险分级路由，避免泛分类器一刀切阻塞只读操作并绕过退出确认。

3. **#7177 为 Gemma 4 注入原生 tool calling schema** — [#7177](https://github.com/QwenLM/qwen-code/pull/7177)  
   移除污染 Gemma 4 上下文的通用示例，恢复模型原生 `<|tool_call>` 行为。已关闭合入。

4. **#7165 Autofix 标签驱动接管** — [#7165](https://github.com/QwenLM/qwen-code/pull/7165)  
   给 PR 加 `autofix/takeover` 即可召唤修复循环，并修复了之前 forced dispatch 变成 green no-op 的潜在 bug。

5. **#7190 / #7191 Review 披露规则统一硬化** — [#7190](https://github.com/QwenLM/qwen-code/pull/7190) · [#7191](https://github.com/QwenLM/qwen-code/pull/7191)  
   同一主题只披露一次"未审"项；未经验证的 Critical 不再成为公开阻断；进一步收紧 Request changes 触发条件。

6. **#7182 延迟 TUI 运行时加载（ACP 启动性能）** — [#7182](https://github.com/QwenLM/qwen-code/pull/7182)  
   将 TUI 依赖从 ACP 启动关键路径中剥离，进一步压低首次会话时延。

7. **#6999 WebShell 重放 ChatRecord 历史** — [#6999](https://github.com/QwenLM/qwen-code/pull/6999)  
   把持久化 ChatRecord 转回 daemon transcript 块，支持选择活跃父链、聚合流式片段、对齐工具调用与结果。

8. **#7186 共享 `process.stdout` resize 监听器** — [#7186](https://github.com/QwenLM/qwen-code/pull/7186)  
   模块级单例 + 订阅者集合，对位解决 #7159 的监听器泄漏。

9. **#7153 调度任务结果投递到指定 Channel** — [#7153](https://github.com/QwenLM/qwen-code/pull/7153)  
   在 #7103/#7109 之上补齐"完成运行 → 指定聊天投递"的最后一段链路。

10. **#6976 MCP 工具名规范化** — [#6976](https://github.com/QwenLM/qwen-code/pull/6976)  
    将名字归一化为 Gemini/OpenAI/Anthropic 通用子集，超长或含非法字符时做确定性映射，已合入。

> 其他值得关注的 PR：`#7180` 整合 issue triage 归属、`#7184` PR 确定性 intake、`#7162` 收紧 `list_sessions` 分页参数、`#6606` 清理 daemon 子进程环境变量中的内部密钥。

---

## 5. 功能需求趋势

- **Channel / 后台自动化深化**：观察到的联系人 (#7103)、群名 (#7154)、调度任务投递 (#7152/#7153)、活跃记忆 (#6360) 共同构成"daemon-as-hub"的演进图。
- **会话工作区隔离**：SDK 显示名 (#7170)、JSONL 导入 (#7178)、pairing/allowlist 按工作区分桶 (#7017) 表明工作区边界正在成为一等概念。
- **多 Provider / 多模型兼容**：Gemma 4 适配 (#7148/#7177)、OpenAI 兼容错误根因暴露 (#7010)、MCP 工具名规范化 (#6976) 显示兼容性矩阵在快速扩张。
- **本地体验与可发现性**：会话关键字搜索 (#6824)、内联 `/model` 切换 (#5967)、文件清单而非计数 (#681

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-07-19

> 数据来源：`github.com/Hmbown/DeepSeek-TUI` · 关联仓库 `Hmbown/CodeWhale`

---

## 一、今日速览

**v0.9.1 发布进入收尾阶段**：今日合并了 14 个 PR，集中在 xAI 兼容修复、TUI 体验打磨、Work Graph 重构以及 Kimi Code K3 接入三条主线；同时仍有 xAI device-code OAuth 登录（#4410）等阻塞性 bug 待修。社区侧讨论最热的话题是「Codewhale 不遵守 constitution」（#4032，39 条评论）以及「接入 OpenCode Go/Zen 提供 DeepSeek-V4」的 provider 扩展诉求（#1481）。

---

## 二、版本发布

⚠️ 过去 24 小时无新 Release。当前主分支聚焦 **v0.9.1** 的发布阻塞修复与公共面打磨（README、官网、npm 文案统一），同步推进 **v0.9.2** 的 TUI 信息架构重构。

---

## 三、社区热点 Issues（按讨论热度）

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|----------|
| 1 | **#4032** [bug] Codewhale not following the constitution | Agent 反复自行生成临时脚本而非使用用户已有脚本，需要更严格的"宪法"约束 | 🔥 39 评论 · 长期未解决 |
| 2 | **#3192** [enhancement] 注册到 agentclientprotocol/registry | 接入 ACP registry，可被 Zed 等编辑器一键安装 | 13 评论 · 整合意愿高 |
| 3 | **#1186** [enhancement] typed persistent permission rules | 为 execpolicy 增加按工具名/命令前缀/路径模式+决策（allow/deny/ask）的类型化规则 | 12 评论 · 安全基础设施级 |
| 4 | **#1481** [enhancement] 支持 OpenCode Go/Zen（提供 DeepSeek-V4） | 廉价 DeepSeek-V4 接入通道，扩展 provider 矩阵 | 10 评论 · 👍1 |
| 5 | **#4410** [bug, release-blocker] xAI device-code OAuth 登录失效 | 硬编码路径与官方 Grok CLI 不一致，需切换至 `/oauth2/device` | 6 评论 · v0.9.1 阻塞项 |
| 6 | **#4542** [docs] 验证 Claude issue worker 端到端 | 维护者对 #4537 合并的 worker 流程进行闭环验证 | 5 评论 · 自动化治理 |
| 7 | **#998** [enhancement] 文案展示不全 | 鼠标 hover 期望能补全省略内容 | 8 评论 · 中文社区高频 UX 反馈 |
| 8 | **#4022** [docs/enhancement] CLI/TUI 在 subagent 与 runtime 控制面需 parity | 防止 TUI 控制面被锁死，影响未来云端/远程形态 | 4 评论 · 架构性议题 |
| 9 | **#2886** [enhancement] 工具生命周期的 Gherkin 验收 E2E 覆盖 | 在命令重构分批落地前补齐行为级回归测试 | 4 评论 · 测试左移 |
| 10 | **#4085** [bug] macOS Dropbox CloudStorage 路径下无法读写 | 非沙箱问题，怀疑 ad-hoc 签名/权限或路径规范化导致 | 3 评论 · 真实用户痛点 |

---

## 四、重要 PR 进展

| # | PR | 内容摘要 |
|---|----|---------|
| 1 | **#4546** fix(xai): 扁平化根 oneOf tool schema | 修复 grok-4.5 真实会话首工具调用被 xAI 拒 400 的 release-blocker；为符合 xAI 校验，需将 root schema 强制为 object。 |
| 2 | **#4410** restore xAI device-code OAuth | 修复 device authorization 路径；并让诊断命令真实上报运行时生效的凭据路由。 |
| 3 | **#4554** fix(config): 根 DeepSeek 默认不泄漏到 vendor-locked 路由 | 修复 xai 会话被错误启动为 `deepseek-v4-pro` 的狗粮问题——`Config::default_model()` 隔离各 provider。 |
| 4 | **#4555/#4556/#4557** Kimi Code K3 三段式 stacked train | K3 路由真相 + context-window 来源可观测 + 会员订阅 onboarding 与缺 key 恢复 UX；统一推理 effort 别名表。 |
| 5 | **#4559** feat(protocol): 依赖中立的 run 读模型 | 新增可序列化的 `AgentRunSnapshot`，为 O1 切片做准备（不虚构不可得字段）。 |
| 6 | **#4558** feat(persistence): per-session crash checkpoint + flush 上报 | 崩溃检查点由全局单槽改为每会话文件；持久化 actor 改为回报写入结果（替代丢弃）。 |
| 7 | **#4553** feat(work-graph): core model + reducer + 校验 | 单会话权威工作账本的纯函数 reducer + 不变量校验；尚不接入应用层。 |
| 8 | **#4550** perf(tui): 合并 provider 目录快照记忆化 | `/model` 打开由 ~3.1s 降至一次性 merge 后缓存读取；显著提升 picker 响应。 |
| 9 | **#4551** fix(tui): Responses 推理 summary 之间插入边界 | 修复 SSE 多段推理文本拼接成 run-together 段落的问题。 |
| 10 | **#4540/#4541/#4545** 0.9.1 公共面 PR1+PR2 | 删除 unreleased 的 web/ 链接；统一 README/官网/npm 的 Strunk 风格与 0.9.1 版本真相。 |

---

## 五、功能需求趋势

从近 24 小时活跃 Issue 提炼，社区关注度集中在以下方向：

1. **🔌 Provider 生态扩张** —— OpenCode Go/Zen（#1481）、Kimi Code K3（#4555–4557）、nVidia nim（#1482）、ACP registry（#3192）。多 provider 接入与一致性诊断已成主线。
2. **🛡️ 安全与权限治理** —— 类型化持久权限规则（#1186）、只读 doctor（#4544）、凭据路由透明化（#4538）。企业级信任链建设。
3. **🧱 TUI 架构重构（v0.9.2）** —— App god object 拆分（#3314）、mcp.rs / runtime_threads / history 子模块化（#3310/#3313/#3308）、CLI↔TUI parity（#4022）。为长期可维护性铺路。
4. **🌐 本地化与多语言** —— 日/越网站对齐（#3091）、韩/西/葡新增（#3093）、中文乱码修复（#1675）。i18n 已成必选项。
5. **🪟 跨平台体验** —— Windows Terminal 默认启动（#1854）、AI 自动选择 shell/language（#1754）、macOS Dropbox 路径（#4085）。平台碎片化痛点显性化。
6. **🤖 Workflow Runtime & Work Graph** —— 模型侧 workflow tool 接线（#2974）、Work Graph 核心模型落地（#4553/#4558）。从 prompt-only 向结构化执行演进。
7. **✨ 中文社区 UX 微创新** —— 文案展示补全（#998）、白底步骤看不清（#1564）、思考预览改善（#1682）、`/help` 工具补齐（#1708）、多技能组合加载（#2117）。

---

## 六、开发者关注点

**高频痛点**：

- **"宪法"与行为一致性**：#4032（39 评论）是当前热度断层第一，反映用户对 Agent 偏离既定流程的强烈不满，期望类似 system-prompt 强约束 + 违规审计机制。
- **真实环境兼容**：macOS 云盘路径（#4085）、Windows shell 适配（#1754）、xAI schema 校验（#4546）—— 边缘平台/边缘 provider 仍频繁踩坑。
- **TUI 长会话体验**：#1425（300 万字小说分析触发 `agent_wait` 超时）、#3480（多 agent 视图信息密度不足）显示 TUI 在真实重负载下仍欠打磨。
- **认证与凭据透明度**：xAI device-code（#4410）+ 自定义端点凭据优先级（#4538）说明 auth 子系统需要"运行时所见即所得"的诊断能力。

**高频诉求**：

- **更丰富的 provider 一等公民支持**（DeepSeek-V4 通过 OpenCode/Kimi/官方多路接入）
- **端到端可观测性**（crash checkpoint 落地、context-window 来源可追溯、xAI 路由真相）
- **结构化权限模型**（typed execpolicy 取代字符串拼接）
- **TUI 控制面的 CLI 对等**（防止控制面被 TUI 锁死）

---

*日报生成于 2026-07-19 · 数据窗口：过去 24 小时 GitHub 活动 · 由 AI 分析师整理*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*