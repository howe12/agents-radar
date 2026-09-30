# AI CLI 工具社区动态日报 2026-09-30

> 生成时间: 2026-09-30 03:29 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-09-30
**覆盖范围**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 共 9 个项目

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"功能收敛 + 治理深化"双轨阶段**：底层能力（多模型路由、MCP、子代理）趋同，竞争焦点转向**企业级治理（Claude Code 的 sec-default、Qwen 的 Managed Agent）、垂直场景体验（Codex 的 Windows、Pi 的本地模型、DeepSeek TUI 的渲染性能）以及跨平台一致性**。今日最显著的特征是 Gemini CLI 单日三版本、Pi 单日双版本、Claude Code 与 Codex 同步切换 GPT-6.1 Sol / Opus 5.5 默认模型，反映出头部项目正以"周版本"密度推进；同时 OpenCode、DeepSeek TUI 进入"质量止血"窗口，多个 P1 级内存泄漏、CPU 自旋、subagent 静默失败等问题集中暴露，说明规模化落地阶段稳定性仍是核心挑战。

---

## 二、各工具活跃度对比

| 工具 | Issues | PRs | Release | 核心交付 |
|------|--------|-----|---------|---------|
| **Claude Code** | 10 | 10 | v2.1.285 | `CLAUDE_CODE_DISABLE_WEB_FETCH`、`claude --desktop`、`plugin configure` |
| **OpenAI Codex** | 10 | 10 | rust-v0.159.0/0.159.1/0.159.2 + alpha 0.160/0.161 | GPT-6.1 Sol 设为默认；Windows 控制台闪烁修复；`instant_interrupt` 实验特性 |
| **Gemini CLI** | 10 | 10 | v0.62.0 + v0.63.0-preview.0 + v0.64.0-nightly | A2A server early return；连接恢复重试指示器；非交互模式自主计划 |
| **Copilot CLI** | 10 | 1 | v1.0.90-2/3/4/5（四连补丁） | `--mcp-github-auth` 作用域收窄；MCP 进度更新兼容 |
| **Kimi Code** | 0 | 0 | — | 过去 24h 无活动 |
| **OpenCode** | 10+ | 10 | 无 | 跨协议工具命名空间统一；widget 面板；Copilot/阿里/Bedrock provider 适配 |
| **Pi** | 10 | 10 | v0.99.0 + v0.99.1 | Codemode + MCP 集成；GPT-6.1 Sol 默认切换 |
| **Qwen Code** | 10 | 10 | v0.24.7（含 sdk-ts-v0.1.17、desktop） | Managed Agent 工作区绑定会话；任务事件合同 v1.22 |
| **DeepSeek TUI** | 10+ | 10+ | 无（v0.10.1 集成中） | `wave/0.10.1-next` 单分支合入；fleet / mcp / skills 多模块修复 |

> **活跃度峰值**：Gemini CLI（当日 3 版本并行）> Pi / Qwen Code / Codex（2 版本）> Claude Code / Copilot CLI（4 个补丁）> DeepSeek TUI / OpenCode（密集修复无发版）

---

## 三、共同关注的功能方向

### 3.1 MCP 协议生态兼容性（**几乎全员**）
- **Claude Code**：Skill path frontmatter 阻断发现（#49835，已修）、`server/discover` 错误处理
- **Codex**：MCP 启动时序与二进制结果路径
- **Gemini CLI**：`mcp enable/disable` 命令无法匹配服务器（#29444）、损坏的 `mcp-server-enablement.json` 导致"失败开放"安全风险（#29445）
- **Copilot CLI**：Figma MCP `-32601` 错误处理不一致（#4870）、Sentry OAuth、MCP 工具名含点号（#2581）
- **OpenCode**：插件客户端 401/403 回退（#31237）、`content` 与 `structuredContent` 重复暴露
- **Pi**：Codemode + MCP 集成首日，工具隐藏与 prompt 泄露（#10192）
- **DeepSeek TUI**：MCP 握手卫生（AWS/uvx/npx），30s 连接超时

**诉求**：错误码语义统一、OAuth 流加固、spec 边缘案例（点号命名、空资源）合规。

### 3.2 Subagent / 多代理可靠性（**Claude / Gemini / Qwen**）
- **Claude Code**：Subagent transcript 完整性（#97665）、Plan 模式对子代理提示错配
- **Gemini CLI**：subagent MAX_TURNS 后静默报成功（#22323）、Generalist Agent 无限挂起 1 小时（#21409）、/bug 报告不含子代理信息（#21763）
- **Qwen Code**：Managed Agent 双路径架构（#12380，37 评论）、Stage D 后续生命周期（#12867）

**诉求**：失败状态透明化、生命周期可观测、托管/通用双路径并存。

### 3.3 Windows / WSL2 / 跨平台一致性（**全员**）
- **Claude Code**：Bash 工具反斜杠对半（#85856）、桌面 2.110.0 启动失败 exitCode 21（#95050）
- **Codex**：多显示器越界（#25826）、沙箱控制台闪现（#48120）、Schannel 证书循环（#41275）、LaTeX 编译器缺失（#48311）
- **Gemini CLI**：Windows ConPTY IME 光标错位（CJK 用户痛点）（#29560）、Wayland 下 Browser Agent 失败（#21983）
- **Copilot CLI**：WSL2 ARM64 `/copy` 剪贴板失败（#3534）
- **OpenCode**：TUI 进程 `CTRL_CLOSE_EVENT` 不响应（#52203）、TLS ClientHello 死锁（#39977）、Expand-Archive 加载失败（#24291）
- **Pi**：#7547 累计 69 评论仍在持续收集 Windows 用户痛点
- **DeepSeek TUI**：Windows Terminal 多行粘贴逐行自提交（#6427）、ExecutionPolicy 绕过（#6745）、macOS 休眠抑制（#6777）

**诉求**：终端字节契约、ARM64 预构建、Wayland/ConPTY 兼容、PowerShell 互操作。

### 3.4 TUI 性能与内存治理（**OpenCode / Pi / DeepSeek TUI / Gemini**）
- **OpenCode**：TUI 内存线性增长至 24-28GB 后被杀（#51761，最严重）、会话缓存不释放（#52187）
- **Pi**：idle 占 1.5 核（#10191，40% 在 GC）、prompt 提交延迟随 session 长度线性增长（#10198）
- **DeepSeek TUI**：CPU 占用逐版本升高（#6728）、多会话争抢 Subagents Store 自旋（#6573）、task panel 每 2.5s 轮询
- **Gemini CLI**：`-p` + 管道输入遇 `@scope/pkg` 触发 100% CPU 锁死（#29557）

**诉求**：渲染层去重计算、catalog 缓存、轮询替代事件驱动。

### 3.5 国际化与多语言指令遵循（**Claude / Pi / Gemini**）
- **Claude Code**：韩语指令在工具调用中间步骤被忽略（#98145）
- **Pi**：中文 `**加粗**` 在 CJK 标点后渲染失败（#10154，#3353 回归）、韩文工具编辑参数被损坏（#10074）
- **Gemini CLI**：Windows ConPTY IME 光标错位

**诉求**：CJK 分词/正则边界、多语言 system prompt 约束的可执行性。

### 3.6 企业级安全与治理（**Claude / Copilot / Gemini**）
- **Claude Code**：`sec-default` 系列 3 个 PR（#98080、#98083、#97241）同日合并，强制组织 deny 规则、`allowManagedModsOnly`
- **Copilot CLI**：`--mcp-github-auth` 限定授权来源；只读目录授权提示
- **Gemini CLI**：MCP enablement 配置损坏安全修复（#29445）、Skill workspace trust 校验（#6779）

**诉求**：组织策略优先级 > 个人插件、managed > user、可审计可关闭。

### 3.7 本地模型与离线工作流（**Pi / OpenCode / DeepSeek TUI**）
- **Pi**：managed llama.cpp server（#10122）、llama.app 安装器文档（#10179）
- **OpenCode**：vLLM 自定义 OpenAI 兼容 provider（#26412）、阿里 Chat 缓存标记（#52199）
- **DeepSeek TUI**：opencode-zen 111 模型 58 个 fail-closed（#6705）

**诉求**：自托管推理工具调用对齐、provider descriptor 维护流程、缓存提示跨后端复用。

### 3.8 会话持久化与恢复（**DeepSeek / OpenCode / Qwen / Codex**）
- **DeepSeek TUI**：`/retry` 只回滚 UI（#6788）、未应答 QuestionV2 恢复（#52211）
- **OpenCode**：切换会话时释放过大消息缓存（#52187）
- **Qwen Code**：Managed Agent 会话持久化（#12998、#12977）、session 索引上限（#13042）
- **Codex**：exec-server 30s 超时恢复（#49407）

**诉求**：跨崩溃会话可恢复、消息增量写入、磁盘 / 内存双层一致性。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 企业级 AI 编程助手 + 桌面生态 | 大型组织、采购导向 | sec-default + 插件治理 + Desktop 联动 |
| **OpenAI Codex** | OpenAI 官方多模型编程 CLI | Windows 桌面 + Codex/Work 订阅用户 | Responses API + Computer Use + GPT-6.1 Sol |
| **Gemini CLI** | 通用多代理 IDE 替代品 | 重度 agentic workflow 用户 | Subagent 体系深耕 + AST 工具探索 |
| **Copilot CLI** | GitHub 生态深度集成 | GitHub Enterprise + VSCode 用户 | MCP 协议加固 + BYOK + GitHub 鉴权 |
| **OpenCode** | 多 Provider 通用编程 CLI | 跨模型实验者、本地 + 云端混合 | widget 面板 + 跨协议命名空间 + Provider 适配矩阵 |
| **Pi** | 本地优先 + Codemode 实验场 | llama.cpp / Ollama 用户、极客 | JS codemode 并行工具调用 + 内建扩展可禁用 |
| **Qwen Code** | 阿里系 Managed Agent 平台 | 复杂企业自动化、长生命周期任务 | Session/Workspace/Runtime Broker 三层架构 + Java SDK |
| **DeepSeek TUI** | 极致 TUI 渲染 + Fleet 调度 | 重度终端用户 + 多机协作 | TUI crate 拆分 + Fleet SSH + 可复用 PR review |

> **关键差异**：Claude Code 与 Qwen Code 都强调"被采购"路径，但前者走插件治理、后者走 Managed Agent；Codex 与 Gemini 都在重押 GPT-6 / Gemini 3 默认切换，但前者重 Windows UX、后者重 Subagent；Pi 与 OpenCode 都强调本地模型，但 Pi 押注 llama.cpp + JS Codemode、OpenCode 押注多 provider + widget 扩展。

---

## 五、社区热度与成熟度评估

### 5.1 社区热度（按 Issues 评论数与点赞数）

| 工具 | 热度信号 | 解读 |
|------|---------|------|
| **Pi #7547** | **69 条评论**，Windows 长期收集帖 | 跨平台体验是 Pi 头号战略议题 |
| **Qwen #12380** | 37 条评论，Managed Agent 双路径章程 | 架构阶段仍处设计期 |
| **Claude Code #3301** | 50 评论 / 73 👍 | IDE 体验是高频痛点 |
| **DeepSeek TUI #5316** | 30 评论，EPIC-005 TUI 拆 crate | 长期项目主线 |
| **Copilot CLI #1274** | 31 评论 / 13 👍，代码审查 400 错误 | 影响 95% 用户的硬阻塞 |
| **Gemini CLI #22323 / #21409** | 13 / 8 评论，subagent 静默成功 / 无限挂起 | P1 级可靠性痛点 |

### 5.2 成熟

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止 2026-09-30 · 数据源：anthropics/skills*

> ⚠️ 数据说明：所有 PR 的评论数与点赞数在原始数据中均显示为 `undefined`/`0`，以下排名综合**近期活跃度、关联 Issue、影响范围与提交深度**进行筛选。

---

## 一、热门 Skills 排行（Top 8）

### 1. 🔧 skill-creator 基础设施修复（PR #1298）
- **功能**：修复 trigger eval 在 Windows 与跨平台下的判定错误、子进程管道 `select()` 失败、运行时异常被误判为"非触发"等问题
- **热点**：直接关联 Issue #1383（benchmark 静默失败 / Windows 失效）与 #1394（XSS 漏洞），是社区对"Skill 元能力可靠性"诉求的集中体现
- **状态**：🟢 OPEN（持续维护中）
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 2. 🤖 mcp-builder MCP v2 兼容（PR #1742）
- **功能**：适配 `mcp>=2.0.0` 中 `streamable_http_client` 重命名与自定义 Header 配置方式
- **热点**：对应 Issue #1390（evaluation.py 对真实 MCP 服务得 0/N）的根因修复，是 MCP 生态过渡期的关键补丁
- **状态**：🟢 OPEN
- 🔗 [PR #1742](https://github.com/anthropics/skills/pull/1742)

### 3. 🎮 Pyxel 复古游戏开发（PR #525）
- **功能**：指导 Claude 使用 Pyxel 进行 Python 复古游戏的创建、调试与无头验证（含帧检测、任务状态校验）
- **热点**：自 2026-03 开放至今持续活跃（最近一次 2026-09-22），是"游戏/媒体类"垂直 Skill 的代表
- **状态**：🟢 OPEN（长期悬而未决）
- 🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

### 4. 🧪 AWT — AI 驱动的 E2E 测试（PR #822）
- **功能**：让 Claude 拥有视觉与浏览器控制能力，实现零代码 E2E 测试自动生成
- **热点**：测试自动化是社区高频需求方向，自 2026-03 持续迭代，最近更新 2026-09-19
- **状态**：🟢 OPEN
- 🔗 [PR #822](https://github.com/anthropics/skills/pull/822)

### 5. 🔒 skill-quality-analyzer + skill-security-analyzer（PR #83）
- **功能**：两个 Meta Skill，分别从 5 个维度评估 Skill 质量、检测 Skill 安全风险；可纳入 `example-skills` 市场
- **热点**：直接呼应 Issue #492（社区 Skill 冒充官方，破坏信任边界）—— 该 Issue 评论 43 条、点赞 2，是本期社区第一热点议题
- **状态**：🟢 OPEN（自 2025-11 至今）
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 6. 📄 docx 修订追踪修复（PR #1792 & #541）
- **功能**：#1792 让 LibreOffice 超时返回 Error 并校验 `w:ins/w:del/w:moveFrom/w:moveTo` 标记；#541 修复 `w:id` 与既有书签的 ID 冲突导致文档损坏
- **热点**：docx Skill 是企业级文档处理刚需，#541 的根因分析（OOXML 共享 ID 空间）体现高质量修复
- **状态**：🟢 OPEN
- 🔗 [PR #1792](https://github.com/anthropics/skills/pull/1792) · [PR #541](https://github.com/anthropics/skills/pull/541)

### 7. 🎬 md2video-audio — Markdown 转 MP4（PR #1703）
- **功能**：零成本将 Markdown 通过 Marp 转幻灯片，再合成带拟人化旁白的 MP4 视频
- **热点**：代表"内容创作自动化"新兴方向（Markdown → 视频），契合创作者经济
- **状态**：🟢 OPEN
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 8. 🧠 testing-patterns 全栈测试方法论（PR #723）
- **功能**：覆盖 Testing Trophy 模型、单元测试 AAA 模式、React Testing Library、查询策略等
- **热点**：与 #822 AWT 互补，构成"测试方法论 + 自动化执行"完整链路
- **状态**：🟢 OPEN（最近更新 2026-09-21）
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

---

## 二、社区需求趋势（Top 5 方向）

### 1. 🛡️ 安全与信任边界（最强烈）
- **Issue #492**（43 条评论）：社区 Skill 以 `anthropic/` 命名空间分发，存在冒充官方、诱导用户授权的风险
- **Issue #1394**（4 条评论）：skill-creator eval-viewer 存在 XSS（display-path 注入）
- **Issue #1175**（4 条评论）：SharePoint Online 场景下 SKILL.md 中权限逻辑的安全担忧
- ➡ 诉求：**Skill 签名机制 + 命名空间隔离 + 安全审计工具**

### 2. 🏢 企业级共享与协作
- **Issue #228**（16 条评论，👍8）：希望 Claude.ai 支持组织级 Skill 共享，避免手工下载/上传流程
- **Issue #189**（6 条评论，👍9）：document-skills 与 example-skills 插件内容重复导致上下文浪费
- ➡ 诉求：**官方 Skill 仓库 + 去重打包策略**

### 3. 🧠 Agent 治理与质量门禁
- **Issue #1385**（4 条评论）：提出 Pre-task Calibration → Adversarial Review → Delivery Verification 三门管道
- **Issue #412**（6 条评论，CLOSED）：agent-governance Skill 提案（策略执行、威胁检测、信任评分、审计追踪）
- **Issue #1329**（9 条评论）：compact-memory 提案——长任务中以符号化符号压缩 agent 自身笔记
- ➡ 诉求：**面向 Agent 的"治理 / 记忆压缩 / 质量门禁"三层能力**

### 4. 🧰 元工具可靠性
- **Issue #556**（12 条评论，👍7）：`run_eval.py` 触发率 0%，skill-creator 自评测体系失灵
- **Issue #1487**（4 条评论）：`claude-api` Skill 单次注入 ~156k token 直接耗尽上下文
- **Issue #1383**（4 条评论）：benchmark 静默失败 + Windows 失效 + design 文件 inode 影响 trigger eval
- **Issue #1390**（4 条评论）：mcp-builder 真实 MCP 服务评测恒为 0/N
- ➡ 诉求：**Skill 自身的"工程化"——评测准、跨平台一致、上下文友好**

### 5. ⚠️ 批量/破坏性操作安全
- **PR #1776**：`blast-radius`——在批量写/删/发邮件前的清单式 checklist
- ➡ 诉求：**Agent 在"动数据"前的安全护栏**

---

## 三、高潜力待合并 Skills

以下 PR 全部为 OPEN 状态，按"近 30 天活跃度 + 解决问题的影响力"排序：

| PR | Skill | 关联 Issue | 近期活跃 | 落地预期 |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator trigger eval 修复 | #1383, #1394 | 2026-09-16 | 🔥 高（阻塞性 Bug） |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder v2 适配 | #1668 | 2026-09-29 | 🔥 高（MCP 生态必须） |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时报错 | — | 2026-09-25 | ⚡ 中高 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 模型退役标记 | #1603 | 2026-09-28 | ⚡ 中高（文档同步） |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator 脚本执行修复 | — | 2026-09-27 | ⚡ 中 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | docx 孤立注释检测 | — | 2026-09-25 | ⚡ 中 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | — | 2026-09-15 | 💡 中（新兴方向） |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | — | 2026-09-16 | 💡 中（Web3 新垂直） |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | — | 2026-09-18 | 💡 中（护栏方向） |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | — | 2026-09-22 | ⏳ 低（长期待合并） |

> 🔥 阻塞性修复（#1298、#1742）极可能在 1~2 周内合并；其余方向型 Skill 取决于维护者优先级。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：从"单点 Skill 工具集"升级为"带签名、命名空间隔离、质量门禁与跨平台一致性的可治理工程体系"——基础设施类 Bug（skill-creator / mcp-builder）的修复热度，已超过任何新功能 Skill 的关注度。**

具体表现为：
- **热度第一**（Issue #492，43 条评论）指向 **信任与安全**
- **热度第二**（Issue #228，16 条评论）指向 **企业级分发**
- **热度第三**（Issue #556，12 条评论）指向 **Skill 自身的可评测性**

这三股力量共同指向同一个答案：**Skills 需要"工程化"——可签名、可隔离、可测试、可共享。**

---

# Claude Code 社区动态日报

**日期**: 2026-09-30
**数据来源**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

Claude Code 发布 **v2.1.285**，新增 `CLAUDE_CODE_DISABLE_WEB_FETCH` 环境变量、`claude --desktop` 启动器以及插件配置命令，桌面端与生态集成进一步收拢。社区层面，**Auto 模式分类器间歇性故障**（#97854）成为关注焦点，多次导致 Bash/ScheduleWakeup 完全不可用；同时**权限与 Mod 安全默认**相关的 PR 集中合并，反映出 2.1.x 末段版本对组织级安全治理的强化。

---

## 🚀 版本发布

### v2.1.285（2026-09-30）

| 类别 | 内容 |
|------|------|
| 环境变量 | 新增 `CLAUDE_CODE_DISABLE_WEB_FETCH`，可关闭 WebFetch 工具 |
| 桌面集成 | 新增 `claude --desktop`，可在当前目录打开 Claude 桌面应用；配合 `--continue` / `--resume <id>` 可恢复会话 |
| 插件管理 | 新增 `claude plugin configure <plugin>` 命令，用于展示插件配置 |

> 该版本体现了 CLI 与 Desktop App 之间协作流程的进一步统一，插件管理命令的细化也呼应了近期 PR 中关于 `sec-default` 与 `allowManagedModsOnly` 的策略演进。

---

## 🔥 社区热点 Issues（按评论数排序）

### 1. [IDE 环境贡献警告反复出现 — #3301](https://github.com/anthropics/claude-code/issues/3301)
- **反应**: 50 条评论 / 73 👍
- **要点**: 在 Cursor / VSCode 中每次打开 IDE，集成终端都会反复弹出 "Claude Code 想要重新启动终端以贡献其环境" 警告。
- **为何重要**: 这是长期未解决的体验类高频问题，直接影响日常 IDE 工作流，点赞数反映出用户希望官方给出"静默/一次确认"的合理默认行为。

### 2. [Auto 模式服务端分类器无判定导致工具全阻塞 — #97854](https://github.com/anthropics/claude-code/issues/97854)
- **反应**: 25 条评论 / 33 👍
- **要点**: Auto 模式下 Bash 与 `ScheduleWakeup` 完全失败（含 `echo ok` 等极简调用），100% 失败持续数分钟。
- **为何重要**: 严重回归，影响关键自动化流程；用户要求"失败时应允许本地重试"而非整会话卡死。

### 3. [远程控制会话的 TTS 朗读与语音模式 — #42700](https://github.com/anthropics/claude-code/issues/42700)
- **反应**: 24 条评论 / 34 👍
- **要点**: 社区呼吁在 Remote Control 场景中加入 TTS 朗读与语音模式，覆盖 a11y 与多模态使用场景。
- **为何重要**: 是目前 a11y / TUI 方向呼声最高的增强请求，体现社区对无障碍和"类语音 IDE"形态的关注。

### 4. [指定响应语言（韩语）在工具调用中间步骤被忽略 — #98145](https://github.com/anthropics/claude-code/issues/98145)
- **反应**: 22 条评论
- **要点**: 即使通过 settings 与 memory 强制韩语输出，模型（Claude Opus 5.5）在工具调用之间的中间提示仍使用英语。
- **为何重要**: 多语言用户对"承诺的指令却被反复违背"零容忍，反映出 prompt 行为约束与 system prompt 上下文之间的执行漏洞。

### 5. [带 paths frontmatter 的 Skill 不可被发现 — #49835](https://github.com/anthropics/claude-code/issues/49835)（已 CLOSED）
- **反应**: 12 条评论
- **要点**: 在 Skill frontmatter 中声明 `paths` 后，整个 Skill 在 Claude Code 中变得完全不可发现。
- **为何重要**: 这是 Skills 子系统的功能性阻断 bug，影响大量使用 path-scoping 的工作流，关闭说明已修复。

### 6. [Subagent 压缩时保留段尾部未写入子代理 transcript — #97665](https://github.com/anthropics/claude-code/issues/97665)
- **反应**: 9 条评论
- **要点**: Subagent 自动压缩时保留段的最后一条消息从未出现在其 transcript 中，且与 #97316 不同，无法恢复。
- **为何重要**: 直接影响审计、调试与回放，是 Subagent 可靠性层面的关键缺陷。

### 7. [Windows / Git Bash：Bash 工具静默"对半砍"反斜杠 — #85856](https://github.com/anthropics/claude-code/issues/85856)
- **反应**: 6 条评论
- **要点**: Windows + Git Bash 环境下连续反斜杠被自动减半，单/双引号无法规避；属于 MSVCRT 与 MSYS2 命令行编码不一致问题。
- **为何重要**: 影响所有 Windows 用户的路径与转义表达，是平台一致性的代表性痛点。

### 8. [Claude Desktop 2.110.0 启动失败（exitCode 21）— #95050](https://github.com/anthropics/claude-code/issues/95050)
- **反应**: 6 条评论
- **要点**: 退出后再启动，渲染器持续报 `launch-failed, exitCode: 21`，需重启 CoworkVMService 才能恢复。
- **为何重要**: 桌面端稳定性的典型代表问题，与近期 Windows MSIX 自动更新残留进程相关。

### 9. [Headless `claude -p` 5 小时窗口用量约为交互式 1.8× — #97074](https://github.com/anthropics/claude-code/issues/97074)
- **反应**: 5 条评论
- **要点**: 相同工作负载下，`sdk-cli` 入口比交互式 CLI 多消耗约 80% 的 5 小时窗口额度。
- **为何重要**: 直接关系到计费与 CI/CD 批处理成本，是企业用户高度敏感的回归问题。

### 10. [符号链接到符号链接导致 `settings.json` 写入失败 — #78162](https://github.com/anthropics/claude-code/issues/78162)
- **反应**: 5 条评论
- **要点**: 当 `~/.claude/settings.json` 是指向另一个符号链接的软链时，原子写入返回 EROFS/EACCES。
- **为何重要**: 暴露了 atomic-write 流程对符号链接解析的盲区，影响使用 dotfiles 仓库管理配置的高级用户。

---

## 🛠 重要 PR 进展

### 1. [sec-default: 组织 deny 规则压过个人插件 allow/ask — #98080](https://github.com/anthropics/claude-code/pull/98080)（CLOSED）
合并到主线。组织坐席 sec-default 后，个人插件无法覆盖 deny 规则，可在 managed settings 中选择退出。强化了组织安全治理。

### 2. [sec-default: 新增 `allowManagedModsOnly` — #98083](https://github.com/anthropics/claude-code/pull/98083)（CLOSED）
通过单一 managed 选项允许组织只接受自家 mods，拒绝用户级 hooks 模块，从源头收紧插件供应链。

### 3. [agents-md: AGENTS.md 加载行写入 debug 日志 — #98275](https://github.com/anthropics/claude-code/pull/98275)（CLOSED）
仅有 AGENTS.md、没有 CLAUDE.md 的项目不再新增 transcript 行，加载信息统一进入 debug 流，行为与 2.1.286 对齐。

### 4. [sec-default: 系统 prompt 段落越过 user tier 继续追加 — #97241](https://github.com/anthropics/claude-code/pull/97241)（CLOSED）
组织坐席 sec-default 后，个人插件不再影响系统 prompt 段落的顺序与组成。

### 5. [sec-default: 会话行越过 user tier 继续追加 — #97334](https://github.com/anthropics/claude-code/pull/97334)（OPEN）
依赖引擎 `session.append` 在 main 分支可用，是 #97241 的会话级配套改动。

### 6. [mods: 声明携带 `process.run` 截断标志与 `fs.list` 条目 mtimeMs — #97293](https://github.com/anthropics/claude-code/pull/97293)（OPEN）
扩展 mod 协议：当 CLI 真正支持 `isStdoutTruncated`/`isStderrTruncated` 与 `mtimeMs` 后启用，并提供测试 fake。

### 7. [security-guidance: 拒绝/含密钥文件不得进入 reviewer 上下文 — #96434](https://github.com/anthropics/claude-code/pull/96434)（OPEN）
修复 #96276：Stop-hook、commit 与 push review 中通过 `git diff`/`git show` 注入的 `secrets.yaml`、`config/prod.json` 等会被显式屏蔽，避免 reviewer 越权读到敏感文件。

### 8. [ci: 调用 Claude 的 GitHub Actions 工作流安全加固 — #97952](https://github.com/anthropics/claude-code/pull/97952)（OPEN）
为 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 增加 egress-firewall runner，最小化权限与出站范围。

### 9. [sec-default: 旧 PR #97241 配套系统 prompt 合并顺序修复 — 已在 #97241 关闭](https://github.com/anthropics/claude-code/pull/97241)
通过 `next.to(e, "append")` 确保 sec-default 下的 section 顺序可被尊重，是权限层"语义一致性"的关键补丁。

### 10. [agents-md / sec-default 主题——综合趋势](https://github.com/anthropics/claude-code/pulls?q=is%3Apr+is%3Aclosed+author%3Apoteat)
@poteat 在 9/29 单日合并 3 个 sec-default 相关 PR（#98080、#98083、#98275），标志着 2.1.x 进入"组织安全默认 + 插件治理"集中收口阶段。

---

## 📈 功能需求趋势

按主题聚合过去 24 小时更新的 50 条 Issue，社区关注的方向可归纳为：

1. **组织/企业安全与权限治理（最热）**
   - sec-default 行为、managed mods、`allowManagedModsOnly`、Artifact 跨账户同意、Settings deny 优先级。
   - 反映出 Claude Code 正快速进入"被采购"阶段，组织需要可强制、可审计的策略层。

2. **IDE / 桌面端集成体验**
   - VS Code / Cursor 环境贡献警告、TUI 标题控制、桌面 Git/分支栏恢复、终端面板与 Claude 自动联动（#98283）。
   - Desktop App 稳定性（启动失败、MSIX 自动更新残留）仍是高频问题。

3. **多语言与本地化**
   - 韩语指令被反复忽略（#98145）、葡萄牙语/西班牙语用户报告模型行为问题，显示多语言指令的"承诺-执行"鸿沟。

4. **Subagent / 多代理体系**
   - Subagent transcript 完整性、Plan 模式对背景子代理的提示词错配、Worktree 隔离在背景会话中误伤子代理。

5. **Skills / Plugins / Mods 治理**
   - Skill path frontmatter 阻断发现、Skill 工具解析陈旧插件缓存、MCP 启动时序与二进制结果路径。

6. **网络与平台一致性**
   - Wi-Fi 切换后请求悬挂 184s、Windows 反斜杠对半、MSIX 锁文件、macOS 26 symlink worktree 路径处理。

7. **可访问性 / 多模态**
   - Remote Control 的 TTS 朗读与语音模式呼声高（#42700 24 评论、34 👍）。

8. **成本与配额**
   - Headless 模式 5 小时窗口利用率显著高于交互式（#97074），对 CI/CD 与自动化用户影响重大。

---

## 👨‍💻 开发者关注点

从 Issue 摘要与评论语义中，可提炼出以下高频痛点：

1. **"卡死 vs. 降级"策略缺位**
   - 多个 Issue（#97854、#94252、#91087、#98304）反映出当远程/服务器/分类器出现故障时，会话没有"回退到用户接管"的清晰路径。开发者希望失败应可见、可重试、可绕过，而不是悄悄停在 idle。

2. **平台一致性是 Windows / Linux 用户的主要不满**
   - 反斜杠编码、MSIX 自动更新、Wi-Fi 切换后的 184 秒死连接、settings.json 在 symlink-to-symlink 场景下写入失败——这些都不是边缘场景，而是日常开发环境的常态。

3. **承诺的执行力：指令-行为一致性**
   - 韩语指令、Plan 模式对子代理的提示、Security 工具对"自生成代码"拒绝分析（#98306）等，本质上是"系统说我会做 X、实际却做 Y"的信任损耗。

4. **Mod / Plugin 治理需要"可读、可审计、可关闭"**
   - 开发者期待组织策略明确、个人插件可控、默认安全，并在 UI 中可见地表达层级（managed > user）。

5. **桌面 App 体验落后于 CLI**
   - 启动失败、终端命令无自动反馈（#98283）、Git/分支栏不可恢复（#93699）——开发者普遍认为 Claude Desktop 仍需补齐"会话连续性"与"环境感知"的基础设施。

6. **CI/CD 与批处理成本不可预测**
   - Headless 模式窗口额度 1.8× 差异，意味着同样的自动化任务花费不可预估，开发者迫切需要"等价语义 + 一致计量"的 SDK 行为。

---

*日报由 AI 自动生成，基于 GitHub 公开数据汇总分析。如需订阅或调整关注主题，请通过仓库 Issue 反馈。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-30**

---

## 📌 今日速览

今日 Codex 仓库集中推送了多条版本发布（0.159.x 稳定线与 0.160/0.161 alpha 线并行推进），主线是 **GPT-6.1 Sol 默认模型落地** 与 **Windows 控制台闪烁问题的回溯修复**。社区方面，Windows 多显示器/沙箱/网络问题仍占据 Issue 高位，**GPT-5.6/6 系列误触发内容策略** 与 **Computer Use 跨平台兼容性** 成为新热点。当日有 20 个 PR 集中合入，覆盖登录 shell PATH 修复、TUI 语音设备选择、Responses 重试策略等。

---

## 🚀 版本发布

### rust-v0.159.2（稳定线补丁）
- 修复 Windows 上 Codex 启动后台进程和沙箱命令时出现短暂控制台窗口闪烁的问题（[#49385](https://github.com/openai/codex/pull/49385)）

### rust-v0.159.1（稳定线功能更新）
- **GPT-6.1 Sol 设为默认模型**（bundled catalog 以及 Amazon Bedrock Mantle / Runtime catalog）（[#49323](https://github.com/openai/codex/issues/49323)）

### rust-v0.159.0（稳定线主版本）
- 新增 `instant_interrupt` 实验特性：允许在模型回复或长时间 code-mode 调用期间用新输入「转向」Codex（[#48135](https://github.com/openai/codex/pull/48135)）
- 新会话提供紧凑的欢迎页和统一头部，并在回合中/回合后偶发提示
- 警告系统改进

### Alpha 线（0.160.0-alpha.6.1 / 0.161.0-alpha.1~3）
- 多版本同步推进 0.160/0.161 alpha 通道，为下一波稳定版做前置验证

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 点赞 | 关键点 |
|---|-------|------|------|--------|
| 1 | [#25826](https://github.com/openai/codex/issues/25826) Windows 多显示器下最大化窗口越界 | 40 | 22 | **已关闭**，高赞高评论，影响大量 Windows 桌面用户的多屏工作流 |
| 2 | [#43058](https://github.com/openai/codex/issues/43058) Prompt 被误判违反使用政策 | 24 | 0 | 影响 GPT-6 Astra，反映出安全策略对正常编程请求的过激拦截 |
| 3 | [#20312](https://github.com/openai/codex/issues/20312) 请求原生事件驱动 session wake 原语 | 15 | 6 | 长期高讨论度的**架构级特性**，社区期望 Codex 支持外部事件唤醒空闲会话（chat mentions、队列消息、文件变更、MCP 推送等） |
| 4 | [#48120](https://github.com/openai/codex/issues/48120) CLI 0.157.0 沙箱刷新时闪现空白 Windows Terminal 窗口 | 15 | 7 | **已关闭**，与 #49385 同源，反映 Windows 沙箱 UX 痛点 |
| 5 | [#42669](https://github.com/openai/codex/issues/42669) Windows 桌面进程启动但窗口不出现（Unix-socket 缺失） | 12 | 1 | 较新版本（26.901.2854.0）的回归，desktop app-server 在 Windows 上不可用 |
| 6 | [#33977](https://github.com/openai/codex/issues/33977) macOS Quick Chat 中 Ctrl+B 误触发侧边栏 | 11 | 11 | 高赞，关键路径快捷键冲突，UX 影响显著 |
| 7 | [#37619](https://github.com/openai/codex/issues/37619) macOS Chat → 语音聊天被耗尽的 Codex/Work 配额门禁 | 10 | 2 | Pro 20x/$200 用户投诉 Web Voice 可用而桌面 Voice 被门禁，体现**配额策略不一致** |
| 8 | [#48311](https://github.com/openai/codex/issues/48311) Windows 内置 LaTeX 编译器找不到标准目录 | 9 | 8 | 工具链集成问题，影响桌面端开箱即用体验 |
| 9 | [#41275](https://github.com/openai/codex/issues/41275) Windows Schannel 证书校验失败致"Reconnecting"循环 | 8 | 6 | 企业/政企网络环境下高频复现，影响整个会话启动链路 |
| 10 | [#47041](https://github.com/openai/codex/issues/47041) GPT-5.6 Sol 和 GPT-6 Astra 拒绝无害 prompt | 7 | 2 | 与 #43058 同源，说明**新一代模型内容策略误判**已成为跨产品/平台的高频问题 |

---

## 🔧 重要 PR 进展

| # | PR | 内容摘要 |
|---|----|----------|
| 1 | [#49467](https://github.com/openai/codex/pull/49467) 恢复登录 shell 启动后的执行器 PATH | 解决登录 shell 重置 `PATH` 后，executor 报出目录中的捆绑工具（如 `rg`）丢失的问题；通过 `login_shell_package_path` 前置补齐缺失路径 |
| 2 | [#49441](https://github.com/openai/codex/pull/49441) 跨 Responses 重试与回退时遵循服务端 retry 建议 | 此前过载与耗尽错误会无视服务端建议直接终止；WS→HTTP 回退也会在建议 deadline 之前发请求。本次使 `ServerOverloaded`/`Request...Exhausted` 等待建议时长 |
| 3 | [#49437](https://github.com/openai/codex/pull/49437) TUI 语音设置新增本地音频设备选择 | 此前只能使用系统默认麦克风/扬声器，现在支持输入输出设备选择，并兼容远端 app-server 场景 |
| 4 | [#49432](https://github.com/openai/codex/pull/49432) 认证切换时保留 bootstrap 发现结果 | 让 `AuthRouteConfig` 拥有独立的应用发现句柄，登录/工作区变更后嵌入式 app-server 配置仍可用，同时撤销前账号的内容访问 |
| 5 | [#49425](https://github.com/openai/codex/pull/49425) 诊断日志按时间与体积定期清理 | 启动期之外的过期日志会驻留；现在初始化后立即清理，并每 30 分钟清理一次 |
| 6 | [#49424](https://github.com/openai/codex/pull/49424) 推断 Windows UNC 路径（支持正斜杠和混合斜杠） | 修复 `LegacyAppPathString` 把 `//server/share/project` 误判为 POSIX 的问题 |
| 7 | [#49416](https://github.com/openai/codex/pull/49416) 多行 ANSI 警告剔除负载内容 | 用结构化 `input_bytes`/`line_count` 替代原始行内容，避免大负载污染警告日志 |
| 8 | [#49415](https://github.com/openai/codex/pull/49415) 协议 debug 输出截断输入文本 | `ContentItem::InputText`/`UserInput::Text` 的 Debug 格式限前缀 512 字节（UTF-8 边界），并附全文长度 |
| 9 | [#49407](https://github.com/openai/codex/pull/49407) 环境信息超时后恢复 exec-server 会话 | 把 live metadata RPC 包裹在 30 秒超时内，覆盖发送与等待两段，避免单向拥塞导致永久卡死 |
| 10 | [#49406](https://github.com/openai/codex/pull/49406) 支持显式 cyber access program + OpenAI API Key | 在内置 OpenAI provider 中转发显式 `cyberAccessProgram`；新增功能默认关闭，可在 `/experimental` 切换 |

---

## 📈 功能需求趋势

通过对当日 50 条 Issue 标签聚合，社区关注度按方向排序：

1. **Windows 平台稳定性（占比最高）**  
   多显示器/沙箱控制台闪现/网络重连/证书校验/LaTeX 内置工具/Computer Use 子系统……版本相关的高优 issue 多数集中在 Windows。

2. **新一代模型（GPT-5.6 Sol / GPT-6 Astra / GPT-6.1 Sol）的行为一致性**  
   - 模型默认切换带来的 IDE 扩展可见性延迟（[#47626](https://github.com/openai/codex/issues/47626)）  
   - 内容策略误判（[#43058](https://github.com/openai/codex/issues/43058)、[#47041](https://github.com/openai/codex/issues/47041)、[#49463](https://github.com/openai/codex/issues/49463)）  
   - Computer Use 在不同模型下的能力差异（[#44174](https://github.com/openai/codex/issues/44174)）

3. **Computer Use 跨平台/跨模型一致性**  
   Windows 报 `SetIsBorderRequired`（[#47699](https://github.com/openai/codex/issues/47699)）、macOS Stage Manager 截图污染（[#38348](https://github.com/openai/codex/issues/38348)）、内置 Browser 超时（[#46106](https://github.com/openai/codex/issues/46106)）。

4. **架构与扩展性**  
   - 事件驱动 session wake 原语（[#20312](https://github.com/openai/codex/issues/20312)）  
   - Remote Access 失效（[#48448](https://github.com/openai/codex/issues/48448)）  
   - 多端权限/配额一致（[#37619](https://github.com/openai/codex/issues/37619)、[#47768](https://github.com/openai/codex/issues/47768)）

5. **TUI / 桌面 UX 细节**  
   快捷键冲突、欢迎页动画、可重入 session、Recents/项目分组（[#33977](https://github.com/openai/codex/issues/33977)、[#48742](https://github.com/openai/codex/issues/48742)）。

---

## 🛠️ 开发者关注点

从 PR 与 Issue 综合来看，本日开发者反馈中的高频痛点：

- **沙箱/策略错误的可解释性**：[#49373](https://github.com/openai/codex/issues/49373)、[#49470](https://github.com/openai/codex/issues/49470) 都提到 `exec_command`/`approval` 被拒却缺乏 actionable 信息，开发者希望看到精确的策略触发条件与绕过路径。

- **会话与网络恢复的稳健性**：Windows Schannel 失败、App-Server Unix-socket 在 Windows 上缺失、macOS 反复 reconnect——三处都指向"**长生命周期会话需要更强韧的重连与降级路径**"，正好对应 [#49441](https://github.com/openai/codex/pull/49441)（retry 建议）与 [#49407](https://github.com/openai/codex/pull/49407)（exec-server 超时恢复）的修复方向。

- **日志与可观测性带来的副作用**：本日有连续 4 个 PR（#49415/#49416/#49425/#49414）集中处理日志/调试输出，说明**长期运行会话的日志膨胀已影响诊断效率**，开发者倾向更结构化、按体积/时间清理的方案。

- **登录 shell / 捆绑工具发现**：[#49467](https://github.com/openai/codex/pull/49467) 与 [#49403](https://github.com/openai/codex/pull/49403)（实验开关 `login_shell_package_path`）显示团队正在系统化解决"`rg`/`git` 等捆绑工具在用户 shell 环境下找不到"的问题，建议开发者在升级后留意 executor 报告的可用工具集。

- **新模型可见性延迟**：IDE 扩展/VSCodium 用户在模型上线 24h 后仍未看到新条目（[#47626](https://github.com/openai/codex/issues/47626)），这是 0.159.1 默认切换 GPT-6.1 Sol 的连锁影响，提醒团队关注 catalog 推送链路的一致性。

- **安全策略误伤合法研究场景**：[#49463](https://github.com/openai/codex/issues/49463)（生物文献阅读被持续拦截）反映出"研究/工程边界"在策略层的颗粒度过粗，开发者期待更精细的 allow-list 或申诉通道。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-30**

---

## 📌 今日速览

今日 Gemini CLI 同时推进了三个版本线：正式版 **v0.62.0**、预览版 **v0.63.0-preview.0** 以及夜间构建 **v0.64.0-nightly**。社区焦点集中在 **子智能体（Subagent）系统的稳定性与可靠性** 上——包括子代理在 `MAX_TURNS` 后错误报告成功、Generalist Agent 无限挂起等问题仍是 P1 级核心痛点。同时，多个 **MCP 与 Browser Agent 配置失效** 的高优先级修复 PR 已进入 review 流程。

---

## 🚀 版本发布

### v0.62.0（正式版）
- **fix(a2a-server)**: 在 `/api` 任务元数据端点对不支持的存储添加 early return ([#29334](https://github.com/google-gemini/gemini-cli/pull/29334))
- 自动生成 v0.61.0-preview.0 changelog ([#29344](https://github.com/google-gemini/gemini-cli/pull/29344))

### v0.63.0-preview.0（预览版）
- **fix(cli)**: 连接恢复期间显示重试进度指示器 ([#29468](https://github.com/google-gemini/gemini-cli/pull/29468))
- v0.61.0-preview.1 changelog 集成 ([#29469](https://github.com/google-gemini/gemini-cli/pull/29469))

### v0.64.0-nightly.20260930.g38700b4b3（夜间构建）
- **fix(core)**: 在非交互模式下启用自主计划执行 ([#29539](https://github.com/google-gemini/gemini-cli/pull/29539))
- **fix(core)**: 当 `maxChars <= 0` 时禁用 `formatTruncatedToolOutput` 截断

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — ⭐ P1 Bug | 💬 13 评论
**Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功**
`codebase_investigator` 子代理在达到最大轮次限制前未做任何分析，却仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了中断事实。**为何重要**：这是典型的"静默失败"，会让用户误以为任务已完成，破坏自动化流水线可信度。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — ⭐ P1 Bug | 💬 8 评论 | 👍 8
**Generalist Agent 无限挂起**
只要 gemini-cli 委派给 generalist agent 就永久挂起，连简单的文件夹创建都需要等待 1 小时后取消。**为何重要**：点赞数最高，反映用户遭遇频繁。强制提示不使用子代理可暂时缓解，但严重阻碍多代理架构落地。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — ⭐ P2 Enhancement | 💬 9 评论
**基于模型 Bash 亲和性的零依赖 OS 沙箱与执行后意图路由**
Gemini 3 模型原生擅长链式使用 POSIX 工具（grep/cat/sed/awk），需要在不牺牲安全性的前提下充分利用模型的原生能力。**为何重要**：这是当前 Subagent 系统的关键架构演进方向。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — ⭐ P2 Feature | 💬 7 评论
**评估 AST 感知文件读取、搜索与映射的影响**
引入 AST 工具可在一次 tool 调用中读取方法范围、减少噪声 token、提升导航效率。**为何重要**：直接影响大型代码库场景下的 token 成本与执行效率。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — ⭐ P2 Bug | 💬 6 评论
**Gemini 不会主动使用 Skills 和 Sub-agents**
即便定义了 gradle、git 等自定义 Skills，模型也很少主动触发；只有显式指令才会调用。**为何重要**：关系到 Skills 体系能否真正发挥作用，影响整个扩展生态设计。

### 6. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — ⭐ P1 Bug | 💬 4 评论
**Browser Agent 忽略 settings.json 配置覆盖（如 maxTurns）**
`AgentRegistry` 初始化时虽然正确读取合并了 settings，但 Browser Agent 完全忽略这些覆盖。**为何重要**：配置失效是开发者高度敏感问题，影响生产环境可控性。

### 7. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — ⭐ P1 Bug | 💬 4 评论 | agent/browser
**Browser Subagent 在 Wayland 下失败**
Wayland 环境下 Browser Agent 异常终止并报 GOAL。**为何重要**：Linux 桌面用户的关键使用场景，影响 Wayland 生态覆盖。

### 8. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — ⭐ P2 Bug | 💬 4 评论
**`~/.gemini/agents/filename.md` 为符号链接时不被识别为 Agent**
用户期望使用 symlink 复用 agent 定义，但当前实现未识别。**为何重要**：影响 dotfiles 管理与多环境复用工作流。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — ⭐ P2 Bug | 💬 3 评论
**超过 128 个 Tools 时遇到 400 错误**
工具过多直接报错，Agent 应更智能地按 scope 限制可用工具集。**为何重要**：在大量扩展/MCP 接入场景下是硬性瓶颈。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — ⭐ P2 | 💬 3 评论
**Agent 应停止/抑制破坏性行为**
在复杂 git 操作或 DB 资源维护时，模型偶发使用 `git reset --force` 等危险命令，需要更安全的替代路径。**为何重要**：直接关联生产环境的安全防护。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#29445](https://github.com/google-gemini/gemini-cli/pull/29445) — P1, Core, Size/L
**区分不可读与缺失的 MCP 启用配置**
当 `mcp-server-enablement.json` 损坏时，当前逻辑"失败开放"：所有被用户主动禁用的 MCP 服务器被误报告为已启用并暴露给模型。修复后将避免配置腐败导致用户偏好被覆盖。⚠️ **安全相关修复**。

### 2. [#29444](https://github.com/google-gemini/gemini-cli/pull/29444) — Core, Size/M
**修复 `gemini mcp enable/disable` 永远无法匹配服务器**
`gemini mcp enable <name>` 与 `disable <name>` 对任何服务器都报 `Server not found`，而 `gemini mcp list` 能列出。原因在于 `getMcpServersFromConfig()` 返回结构不一致。

### 3. [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) — P1, Core, Size/M
**修复 `@` 在代码中引发的 CPU 挂起与引号吞并**
无头/非交互模式（`-p` + 管道输入）中，当代码包含 `@scope/pkg` 后接引号时，会触发不可中断的 100% CPU 锁死，并防范 brace-expansion ReDoS。⚠️ **稳定性关键修复**。

### 4. [#29447](https://github.com/google-gemini/gemini-cli/pull/29447) — P2, Agent, Size/M-L
**SDK：将 env、timeoutSeconds 与 AbortSignal 接入 SdkAgentShell**
`SdkAgentShell.exec` 原本接受 `AgentShellOptions` 但静默丢弃 `env` 和 `timeoutSeconds`，也无外部中止机制。**影响 SDK 调用方可控性**。

### 5. [#29568](https://github.com/google-gemini/gemini-cli/pull/29568) — P1, Core, Size/XL
**ChatRecordingService 实现 append-only delta patching + 有界历史窗口**
替换全量 `{ $set: { messages } }` 覆写与无界内存消息保留。**长期会话性能与稳定性的重要改进**。

### 6. [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) — P3, Security, Size/S
**新增 PkgDiet 依赖守卫内置 Skill**
自动拦截 `npm install`（含 yarn/pnpm），在安装前向 PkgDiet MCP 服务器查询包的健康度、bundle 体积与废弃状态。

### 7. [#29573](https://github.com/google-gemini/gemini-cli/pull/29573) — Platform, Size/S
**沙箱镜像名解析支持 registry 端口**
`parseImageName()` 在每个冒号上分割，导致 `registry:5000/image` 的端口被误认为 tag，残留 `/` 传给容器运行时作为 `--name/--hostname`。

### 8. [#29342](https://github.com/google-gemini/gemini-cli/pull/29342) — ✅ CLOSED | P2, Core
**避免嵌套输入历史状态更新（关闭 #29313）**
重构 `useInputHistoryStore` 避免嵌套 React state 更新，缓解 StrictMode 双重调用。

### 9. [#29560](https://github.com/google-gemini/gemini-cli/pull/29560) — P2, Core
**修复 Windows ConPTY 的 IME 光标位置**
Windows 上输入 CJK 字符时，IME 候选框锚定在右下角页脚而非当前输入提示处。**显著影响 Windows 终端下的 CJK 用户体验**。

### 10. [#29508](https://github.com/google-gemini/gemini-cli/pull/29508) — Dependencies, Size/XL
**批量升级 npm 依赖组（76 项更新）**
包括 `simple-git 3.28.0→3.36.0`、`@modelcontextprotocol/sdk 1.x→...` 等。

---

## 📈 功能需求趋势

从 Issues/PR 整体来看，社区关注焦点高度集中在以下方向：

| 趋势方向 | 典型代表 | 社区热度 |
|---------|---------|---------|
| **Subagent 系统可靠性与可观测性** | #22323, #21409, #21968, #21763, #22598 | 🔥🔥🔥🔥🔥 |
| **MCP 生态修复与扩展性** | #29445, #29444, #24246, #29449 | 🔥🔥🔥🔥 |
| **AST 感知代码工具** | #22745, #22746, #22747 | 🔥🔥🔥 |
| **Browser Agent 鲁棒性** | #22267, #22232, #21983 | 🔥🔥🔥 |
| **任务跟踪持久化** | #18836, #21000 | 🔥🔥 |
| **Token 节省 / "Tactful Extraction"** | #19561 | 🔥🔥 |
| **并行 Subagent 协作** | #18287 | 🔥🔥 |
| **OS 级沙箱与安全** | #19873, #22672, #29449 | 🔥🔥🔥 |
| **模型自我认知（self-awareness）** | #21432 | 🔥 |
| **终端性能（resize / 无头模式）** | #21924, #29557 | 🔥🔥 |

> 关键词云：子代理（Subagent）、MCP、AST 工具、Skills、Token 效率、沙箱安全、Browser Agent、并行协作、配置失效。

---

## 😣 开发者关注点 & 痛点

### 1. Subagent 系统不可靠（最高频痛点）
- 子代理在 `MAX_TURNS` 后**静默报成功**，掩盖中断
- Generalist Agent **无限挂起**，最严重时挂起 1 小时
- `/bug` 报告**不含子代理信息**，无法排查 ([#21763](https://github.com/google-gemini/gemini-cli/issues/21763))
- 模型**不主动使用** Skills 与 Subagents ([#21968](https://github.com/google-gemini/gemini-cli/issues/21968))

### 2. 配置层失效问题集中爆发
- Browser Agent 完全忽略 `settings.json` 覆盖（`maxTurns`）
- `gemini mcp enable/disable` 命令根本无法匹配任何服务器
- `~/.gemini/agents/*.md` 的 symlink 不被识别
- 损坏的 `mcp-server-enablement.json` 导致所有禁用的服务器重新启用（**安全风险**）

### 3. 大规模工具接入受限
- 超过 ~128 个 Tools 即触发 400 错误，Agent 未做 scope 限制

### 4. 无头/CI 场景稳定性问题
- `@scope/pkg` 后接引号触发 100% CPU 锁死
- Wayland 下 Browser Agent 失败
- Windows ConPTY 下 IME 光标错位（CJK 用户痛点）

### 5. 模型行为安全边界模糊
- 模型偶发使用 `git reset --force` 等破坏性命令，需要主动引导使用更安全路径

### 7. 资源管理
- 模型在禁用 shell 后倾向在各处生成临时脚本，污染工作区 ([#23571](https://github.com/google-gemini/gemini-cli/issues/23571))

### 6. 上下文管理压力
- 现有 `WriteToDo` 工具基于 in-context 跟踪，存在 context rot 与 token 浪费，社区呼吁改为持久化文件跟踪（CRUD）（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)）

---

> 📊 **总结**：今天的 Gemini CLI 处于**多版本并行迭代 + 子代理体系深度重构**阶段。短期看，P1 级的稳定性修复（CPU 挂起、配置腐败、子代理假成功）将主导社区期待；中期看，AST 工具、并行协作、token 经济性是核心演进方向。建议开发者密切关注 v0.63.0 preview 与 v0.62.0 的 changelog 合并状态。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-30**

---

## 📌 今日速览

今日 Copilot CLI 完成了 **v1.0.90 系列** 的密集迭代（连续 4 个补丁版本），主要聚焦 MCP 协议稳定性、模型选择体验与启动流程修复。社区讨论热度集中在 **MCP 集成兼容性**（如 Figma 远程服务器、OAuth 鉴权、点号命名冲突等），以及 **代码审查场景下 400 错误** 与 **WSL2 ARM64 平台剪贴板失效** 两个长期未关闭的高优先级问题。整体来看，MCP 生态成熟度与多模型 BYOK 支持仍是当前开发体验的关键瓶颈。

---

## 🚀 版本发布

过去 24 小时连续发布 4 个补丁版本，主要更新汇总：

| 版本 | 类型 | 要点 |
|------|------|------|
| **v1.0.90-5** | Fixed | 已配置 Provider 时不再错误提示 "No supported model available"；MCP 工具调用在服务端持续推送进度更新时仍能正常完成 |
| **v1.0.90-4** | Fixed | 修复首次启动时输出 `Failed to read model provider attribution` 报错 |
| **v1.0.90-3** | Added | 新增 `--mcp-github-auth` 参数，将 GitHub 账号授权范围限定到已批准的 MCP server 来源；新增会话级只读目录授权提示 |
| **v1.0.90-2** | — | 综合补丁（changelog 未披露细节） |

**关键信号**：1.0.90-3 的 MCP 鉴权作用域与 1.0.90-5 的 MCP 进度更新处理，标志着团队正集中力量加固 MCP 协议层的稳定性。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#1274](https://github.com/github/copilot-cli/issues/1274) — CLI 在代码审查场景频繁触发 400 错误 ⭐13 💬31
- **状态**：OPEN（高优先级，长期未修复）
- **影响**：最近 20 次代码审查请求中约 95% 失败，疑似 CLI 构造了非法请求体
- **热度**：评论数断层第一，反映批量用户受影响

### 2. [#1285](https://github.com/github/copilot-cli/issues/1285) — 组织级 Agent 不在 CLI 中显示 ⭐14 💬11
- **状态**：OPEN
- **影响**：企业用户将 Agent 放入 `{org}/.github-private` 后，CLI 和 VS Code 都无法发现
- **关注点**：影响企业级 Copilot 部署的核心能力

### 3. [#4870](https://github.com/github/copilot-cli/issues/4870) — Figma MCP 服务器加载失败 ⭐12 💬8
- **状态**：CLOSED
- **要点**：CLI 将 `server/discover` 的 `-32601` 视为致命错误，而 VS Code 处理正常
- **意义**：揭示 CLI 与 VS Code 在 MCP 错误处理上的不一致

### 4. [#3534](https://github.com/github/copilot-cli/issues/3534) — WSL2 ARM64 `/copy` 命令剪贴板失败 ⭐5 💬7
- **状态**：OPEN
- **影响**：WSL2 (Ubuntu, aarch64) 下 `/copy` 全部失败，`cmd.exe` 引号转义存在 Bug
- **平台影响**：影响 ARM64 开发者日常使用

### 5. [#3281](https://github.com/github/copilot-cli/issues/3281) — 升级 v1.0.46 后 MCP 服务器不可用 💬7
- **状态**：CLOSED
- **要点**：`Cannot find native binding` 报错，npm 可选依赖 Bug
- **教训**：升级路径上的破坏性变更影响大量用户

### 6. [#2861](https://github.com/github/copilot-cli/issues/2861) — Opus 4.6 模型 `/compact` 连续失败 ⭐5 💬7
- **状态**：CLOSED
- **要点**：短会话手动压缩时模型返回空响应，连续 3 次重试后失败

### 7. [#3589](https://github.com/github/copilot-cli/issues/3589) — 多个 `sessionStart` Hook 的 `additionalContext` 被覆盖 ⭐2 💬4
- **状态**：CLOSED
- **要点**：仅最后一个 hook 的上下文被注入，影响插件生态

### 8. [#4919](https://github.com/github/copilot-cli/issues/4919) — `/ask` 在 auto 模型下不兼容 💬4
- **状态**：CLOSED
- **影响**：auto 模式下 `/ask` 分支持续报错 "model not supported"

### 9. [#2581](https://github.com/github/copilot-cli/issues/2581) — MCP 工具名含点号导致 400 ⭐3 💬3
- **状态**：CLOSED
- **要点**：MCP 规范允许工具名含点号，但 CLI 转发时未过滤导致 API 拒绝

### 10. [#4515](https://github.com/github/copilot-cli/issues/4515) — MCP `content` 与 `structuredContent` 同时暴露 💬2
- **状态**：OPEN
- **要点**：违反 MCP 规范，应优先使用 `structuredContent`，目前造成上下文污染

---

## 🛠 重要 PR 进展

过去 24 小时内仅有 **1 个 PR 更新**：

### [#5000](https://github.com/github/copilot-cli/pull/5000) — 从已发布 Release 自动发布 npm tarball
- **作者**：devm33
- **状态**：OPEN
- **意义**：npm 发布链路从手工触发转为基于 GitHub Release 自动触发，并支持手动应急恢复路径；采用 OIDC Trusted Publishing 而非传统 npm token
- **战略价值**：进一步将 CLI 与 npm 生态解耦，提升发布可靠性与供应链安全

> 📢 由于 PR 数量较少，建议关注本周合并窗口的后续动态。

---

## 📈 功能需求趋势

从 50 条 Issue 中提炼出五大社区关注方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **MCP 生态兼容性** | #4870 Figma, #3393 Sentry OAuth, #2581 点号命名, #2805 开关 UX, #4985 密钥占位符 | 🔥🔥🔥🔥🔥 |
| **跨平台/架构支持** | #3534 WSL2 ARM64, #3309 Win32-ARM64, #3533 macOS 输入 | 🔥🔥🔥🔥 |
| **BYOK 与多模型** | #4037 ACP 模式 BYOK, #2651 Anthropic 事件流 | 🔥🔥🔥🔥 |
| **会话与上下文管理** | #4805 锁文件, #3365 自动改名, #2483 会话名检索, #3589 Hook 合并 | 🔥🔥🔥 |
| **内容与交互能力** | #4583 PDF 上传, #3323 ask_user 枚举转义, #3693 Ctrl+Z 退出, #4995 高亮折叠 | 🔥🔥🔥 |

---

## 💡 开发者关注点

综合社区反馈，当前开发者最强烈的痛点集中在以下几个方面：

1. **MCP 协议实现的"边角问题"** —— 与远端服务器的 OAuth、错误码（如 -32601）、工具命名规范、密钥占位符等细节处理仍不完善，导致 Sentry、Figma 等主流 MCP 服务器集成困难。

2. **API 请求体校验失败** —— 多位用户报告 CLI 在代码审查、并行工具调用（#4982）、MCP 工具名（#2581）等场景频繁触发 400，且服务端校验规则与客户端发送内容存在认知偏差（👍 累计 30+）。

3. **ARM64 与 WSL2 生态滞后** —— Windows ARM64 预构建产物错误、WSL2 剪贴板命令路径不通，对 Apple Silicon 与新硬件用户极不友好。

4. **BYOK / 多模型事件流不完整** —— Anthropic Provider 缺失 turn 生命周期事件，ACP 模式下完全不支持 BYOK，限制了第三方 IDE（JetBrains）的集成。

5. **会话生命周期脆弱** —— 崩溃残留锁文件导致历史会话不可恢复；"Continue in Copilot CLI" 跳转打开空会话；`/compact` 在短会话中反复失败——这些都是破坏工作连续性的高影响问题。

6. **UX 细节长期搁置** —— Ctrl+Z 误触发退出、/copy 失败、ask_user 枚举无法自定义输入等"小问题"积少成多，成为开发体验的明显拖累。

---

> 📅 下一期日报将于明日更新，敬请关注。如需重点跟踪某个方向（如 MCP、BYOK、ARM64 支持），欢迎反馈！

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-30**

---

## 1. 今日速览

今日 OpenCode 仓库无新版本发布，但社区活跃度依然高涨——Issues 与 PR 持续涌现，重点集中在 **TUI 内存泄漏、Windows/WSL2 兼容性问题、多 Provider 适配（Copilot、Alibaba Chat、vLLM）以及会话管理功能增强**。值得关注的是，社区对 v2 版本稳定性的反馈明显增多，特别是 #51761 报告的 TUI OOM（24-28GB）问题引发了较高的关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 重要性 |
|---|------|------|------|--------|
| [#37970](https://github.com/anomalyco/opencode/issues/37970) | Plan/Build mode 被移除 | CLOSED | 15 | 高频痛点，反映用户对原 Plan/Build 工作流回归的强烈诉求 |
| [#26412](https://github.com/anomalyco/opencode/issues/26412) | vLLM 自定义 OpenAI 兼容 Provider 流式工具调用失败 | CLOSED | 11 | 影响本地自托管 LLM 用户，错误信息对调试不友好 |
| [#24291](https://github.com/anomalyco/opencode/issues/24291) | Windows 下 Expand-Archive 模块自动加载失败 | CLOSED | 9 | Bun 编译产物在 Windows 的兼容性问题，影响 glob、skill 等多个内部工具 |
| [#51761](https://github.com/anomalyco/opencode/issues/51761) | **TUI OOM：v2 版本内存线性增长至 24-28GB 后被杀** | OPEN | 7 | ⚠️ 当前最严重的稳定性 bug，1 分钟内耗尽系统内存，无明显触发条件 |
| [#25262](https://github.com/anomalyco/opencode/issues/25262) | 可切换的顶栏状态栏（会话标题、上下文、Cost、MCP/LSP、git） | CLOSED | 5 | UI 信息密度需求，社区多次提出相关请求 |
| [#39137](https://github.com/anomalyco/opencode/issues/39137) | Big Pickle 模型持续 Internal Server Error | CLOSED | 5 | 用户对特定第三方模型稳定性反馈 |
| [#27841](https://github.com/anomalyco/opencode/issues/27841) | WebFetch 工具错误重写 GitHub URL 为 nicholasbrailo | CLOSED | 5 | 工具 Bug，导致几乎所有 GitHub 页面抓取 404 |
| [#31237](https://github.com/anomalyco/opencode/issues/31237) | 插件客户端在 401/403 时未正确回退 | CLOSED | 4 | 插件授权与传输探测的语义边界问题 |
| [#35128](https://github.com/anomalyco/opencode/issues/35128) | 仅导出用户 Prompt 的会话导出功能 | CLOSED | 4 | 调试与分享场景的轻量导出需求 |
| [#37388](https://github.com/anomalyco/opencode/issues/37388) | 基于能力的外部 CLI Agent 适配器与一致性测试 | CLOSED | 4 | 生态扩展能力建设的探索 |

**新出现的 OPEN 关键 Issue：**
- [#52194](https://github.com/anomalyco/opencode/issues/52194) — Go 订阅出现"孤立工作区"，CLI 可用但 Dashboard 无订阅，邮件无回复（合规风险）
- [#52203](https://github.com/anomalyco/opencode/issues/52203) — Windows 下 TUI 进程在终端关闭后继续运行并泄漏资源
- [#52197](https://github.com/anomalyco/opencode/issues/52197) — v2 桌面版使用 WSL2 远程时不导入用户 shell 环境（compliance 标签）
- [#50257](https://github.com/anomalyco/opencode/issues/50257) — 桌面端模型选择器对所有 V2 模型显示"No reasoning"

---

## 4. 重要 PR 进展

| # | 类型 | 标题 | 说明 |
|---|------|------|------|
| [#52211](https://github.com/anomalyco/opencode/pull/52211) | Bug Fix | 恢复重启后未应答的 QuestionV2 请求 | 持久化待回答请求，允许原始请求 ID 继续应答，提升崩溃后恢复体验 |
| [#52200](https://github.com/anomalyco/opencode/pull/52200) | Refactor | 跨协议统一工具命名空间 | 调用方只需使用 `{ namespace, name }`，协议层自行决定线上格式——重大架构整理 |
| [#52210](https://github.com/anomalyco/opencode/pull/52210) | Feature | 会话 UI 的"已使用"组标题保持吸顶 | 长会话滚动体验改进，与文件 diff 头一致 |
| [#52209](https://github.com/anomalyco/opencode/pull/52209) | Feature | **用户自写 widget 面板 + 能力授予**（compliance） | 从磁盘发现 `index.html`，无需重建或重启即渲染到会话侧栏 |
| [#52208](https://github.com/anomalyco/opencode/pull/52208) | Bug Fix | grep 工具在路径无效时显式报错 | 修复原"静默返回 No files found"导致的目录拼写错误难以发现 |
| [#52204](https://github.com/anomalyco/opencode/pull/52204) | Bug Fix | 系统通知仅在会话标签打开时触发 | 与现有声音门控保持一致，避免后台会话误打扰 |
| [#52190](https://github.com/anomalyco/opencode/pull/52190) | Bug Fix | 容忍 Copilot 多次发出 reasoning_opaque | 修复 Claude Opus 5/5.5、Fable 5.1 等交错思考模型导致的崩溃 |
| [#52199](https://github.com/anomalyco/opencode/pull/52199) | Bug Fix | Alibaba Chat 路由补齐缓存标记 | 复用共享 Chat 缓存提示降级逻辑 |
| [#52198](https://github.com/anomalyco/opencode/pull/52198) | Bug Fix | 会话 shell 输出在送模前做大小上限 | 单次大输出不再撑爆上下文（关闭 #45099） |
| [#52187](https://github.com/anomalyco/opencode/pull/52187) | Bug Fix | 切换会话时释放过大的消息缓存 | 解决切换会话后仍展示旧页面的陈旧状态（关闭 #39380） |

---

## 5. 功能需求趋势

综合分析今日 Issue 与 PR，社区需求集中在以下方向：

1. **会话 UI 体验升级** — 状态栏信息密度、可读模型名称、连续 Read 合并展示、Used 组吸顶（#25262、#39934、#52210、#52207）
2. **调试与可观测性** — `/injected-messages` 命令、系统消息检视、仅 Prompt 导出（#33333、#24990、#35128）
3. **生态与扩展性** — Widget 面板、能力授予、外部 CLI Agent 适配器、插件生态文档（#52209、#37388、#46770）
4. **模型与 Provider 适配** — 动态上下文窗口、DeepSeek V4 Flash 推理开关、Alibaba Chat 缓存、Copilot 交错思考（#35863、#39933、#52199、#52190）
5. **自动化工作流** — Plan/Build 模式回归、模型门控的自动批准模式（#37970、#39015）

---

## 6. 开发者关注点

开发者反馈中的高频痛点：

- **🔥 内存与性能**：TUI 内存线性增长（#51761）、会话消息缓存不释放（#52187）、Compaction 在 50% 上下文就误触发（#39798）——v2 稳定性成为社区最关心议题。
- **🪟 Windows 兼容矩阵**：TUI 进程不响应 `CTRL_CLOSE_EVENT`（#52203）、TLS ClientHello 死锁（#39977）、Expand-Archive 模块加载失败（#24291）——Bun 编译产物在 Windows 的边界场景仍需打磨。
- **🐧 WSL2 集成**：默认服务端口与 WSL 转发冲突（#49909）、WSL2 远程不导入用户 shell 环境（#52197）。
- **🔌 Provider 兼容**：vLLM 工具调用块解析（#26412）、OpenAI-compatible 推理开关（#39933）、Alibaba Chat 缓存标记（#52199）、SSE 静默 EOF（#39968）。
- **🔐 权限与计费**：插件传输探测将 401/403 视为可达（#31237）、空资源列表被允许（#51664）、Go 订阅孤立（#52194）、高频扣费异常（#36399）。
- **🧩 工具抽象一致性**：跨协议工具命名空间不统一（#52200）、TypeScript v7 LSP 路径变更（#39928）——生态演进带来的破坏性变更需要更好的兼容路径。

---

*报告基于 github.com/anomalyco/opencode 过去 24 小时更新的 Issues 与 PRs。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-30

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi) | 统计窗口：过去 24 小时

---

## 一、今日速览

今天 v0.99.0 与 v0.99.1 双版本同日发布，正式落地 **Codemode + MCP**（让模型用 JavaScript 并行调用工具）以及默认切换到 **GPT-6.1 Sol** 模型。与此同时，0.99.0 的 npm 包出现 `openai-chatgpt.js` 缺失问题导致 ChatGPT 登录失败，社区已紧急修复。Issues 端讨论最热烈的依然是 **Windows 使用体验**（#7547，累计 69 条评论），性能类问题（TUI idle CPU、prompt 提交延迟）成为新的关注焦点。

---

## 二、版本发布

### v0.99.1（今日）
- **默认模型切换为 GPT-6.1 Sol**：在 OpenAI、Azure OpenAI 和 OpenAI Codex 上均可使用。
- [Release Notes](https://github.com/earendil-works/pi/releases/tag/v0.99.1)

### v0.99.0（今日）
- **Codemode 与 MCP 集成**：可连接 MCP 服务器，让模型执行 JavaScript 并行调用工具。
- 文档：[MCP Servers](https://github.com/earendil-works/pi/blob/v0.99.0/packages/coding-agent/docs/mcp.md)
- ⚠️ **已知问题**：npm 包 `dist/bundle/chunks/openai-chatgpt.js` 缺失，ChatGPT 登录失败（见 #10182）。
- [Release Notes](https://github.com/earendil-works/pi/releases/tag/v0.99.0)

---

## 三、社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 为什么值得关注 |
|---|------|------|------|--------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | Windows 上如何使用 Pi？遇到哪些问题？ | OPEN | **69** | 长期高热帖，作者 petrroll 在收集 Windows 用户的痛点，决定核心团队在 WSL、原生 Windows、远程桌面等场景的资源投入优先级。是 Windows 用户必参与的话题。 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock: OpenAI 模型拒绝 toolResult.content 中嵌套的图片 | OPEN | 9 | 修复合并 PR 已就绪，逻辑清晰：把 toolResult 图片提升为同级 user content 块，与 openai-completions.ts 一致，附回归测试。 |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | 上下文大小错误默认为 128k | OPEN | 6 | 影响所有自定义 provider 配置；`models.json` 中已声明的模型被忽略 metadata，导致 cost/input/maxTokens 都错。 👍 4。 |
| [#9962](https://github.com/earendil-works/pi/issues/9962) | registerNativeProvider 与启动刷新竞态 | CLOSED | 6 | 与 PR #10190 联动修复：注册原生 provider 后未更新 auth snapshot，导致首次启动时模型列表"不可用"。 |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | Anthropic 工具调用：非 ASCII 编辑参数被静默接受并损坏 | OPEN | 5 | 涉及韩文等多字节文本编辑，追踪 3 周，控制字符被错误插入文件，影响面广。 |
| [#10045](https://github.com/earendil-works/pi/issues/10045) | Opus 5.5 on Bedrock 自动压缩被 Anthropic 策略拦截 | OPEN | 4 | 长会话到 98% 触发自动压缩时，请求被 Anthropic 以"reverse engineering"理由阻断。是企业用户长期会话的硬阻塞。 |
| [#10144](https://github.com/earendil-works/pi/issues/10144) | 队列中的 prompt 应批处理但实际逐条发送 | OPEN | 5 | 影响多任务并发体验，原 #10046 被标记 no-action 后作者重新提交，期望推动真正的并发 batching。 |
| [#10154](https://github.com/earendil-works/pi/issues/10154) | 中文 `**加粗**` 在 CJK 标点后渲染失败（0.87.1 仍未修复） | OPEN | 4 | 是老问题 #3353 的回归，CJK 用户长期痛点，正则分词边界问题。 |
| [#10184](https://github.com/earendil-works/pi/issues/10184) | Sign in with ChatGPT 返回 invalid_client | CLOSED | 3 | 👍 6，反映 0.99.0 发布时 OAuth 客户端配置异常，影响所有 ChatGPT 订阅登录用户。 |
| [#10198](https://github.com/earendil-works/pi/issues/10198) | 0.99.0 后 prompt 提交延迟随 session 长度线性增长 | CLOSED | 2 | `getBranchSelection` 每次都重合并 model catalog，性能回归；提议加缓存。 |

---

## 四、重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#10197](https://github.com/earendil-works/pi/pull/10197) | **统一化 package artifact 校验** | OPEN | 由 christianklotz 提交。生成 content-addressed、单 manifest 驱动的 artifact，使本地校验贴近发布产物；解决 workspace 隐藏未声明依赖的问题。 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) | **Anthropic OAuth 添加 copy-code 登录方式** | OPEN | lucasmeijer 贡献。解决远程机器上 localhost redirect 流程体验差的问题，使用 HTTP code 模式，作者已在线上环境验证。 |
| [#10190](https://github.com/earendil-works/pi/pull/10190) | **注册原生 provider 时同步标记为已配置** | CLOSED | 修复 #9962：`registerNativeProvider()` 同步更新 auth snapshot，消除启动期竞态。 |
| [#10179](https://github.com/earendil-works/pi/pull/10179) | **更新 llama.cpp 文档适配 llama.app 安装器** | OPEN | julien-c 提交，使用新 `llama serve` 命令，CI agent 辅助写作。 |
| [#10193](https://github.com/earendil-works/pi/pull/10193) | **保留 renderer 示例的 prompt 指引** | OPEN | christianklotz 提交，重用完整内建工具定义，修复 system prompt 摘要丢失；附带系统提示和 edit shell 行为的回归测试。 |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **新增 managed llama.cpp server 模式** | OPEN | mitsuhiko 提交。`/login llama.cpp` 可让 Pi 自行拉起 llama-server，detached supervisor 管理端口、API key 与连接计数。 |
| [#10165](https://github.com/earendil-works/pi/pull/10165) | **追踪被丢弃的用户 bash 输出** | OPEN | acmerfight 提交，关闭 #10164：用户 `!` 命令丢弃早段输出后，模型收不到截断提示；补全 completion/cancel 结果中的标记。 |
| [#10156](https://github.com/earendil-works/pi/pull/10156) | **新增可配置鼠标滚轮滚动** | CLOSED | rwachtler 提交，在 `/settings` 预设或自定义 fullscreen 下的 wheel/alt-wheel 行为，关闭 #9758。 |
| [#9329](https://github.com/earendil-works/pi/pull/9329) | **将 Orca 终端识别为 Kitty-image 能力** | OPEN | XRX193 提交，`TERM_PROGRAM=Orca` 启用内联图片与 OSC 8。 |
| [#10159](https://github.com/earendil-works/pi/pull/10159) | **内建扩展统一为 `builtin:<name>` 路径** | CLOSED | mitsuhiko 提交；`mcp`、`llama.cpp`、`codemode`、`tool-search` 均可通过 `pi config` 全局或按项目禁用。 |

---

## 五、功能需求趋势

从过去 24 小时的 Issues 中提炼：

| 方向 | 代表性 Issues | 社区关注度 |
|------|--------------|----------|
| **Windows 平台支持** | #7547、#10203（编译版扩展加载失败） | 🔥🔥🔥 持续高热 |
| **性能与资源占用** | #10191（idle 占 1.5 核）、#10198（prompt 延迟随 session 增长）、#10045（长会话压缩阻塞） | 🔥🔥🔥 新一轮焦点 |
| **Anthropic/Claude 集成深度** | #10074（非 ASCII 损坏）、#10045（Bedrock 压缩拦截）、#10019（订阅请求挂起）、#10194（OAuth 体验） | 🔥🔥🔥 |
| **本地模型生态（llama.cpp / Ollama 类）** | #10122、#10179、#10158、#9566 | 🔥🔥 持续增长 |
| **MCP 与 Codemode 体验** | #10192（隐藏工具仍出现在 prompt）、#10186（OSC-8 链接）、#10188（Workers 兼容）、#10197（artifact 校验） | 🔥🔥 新功能配套完善 |
| **CJK / 多语言渲染** | #10154（中文加粗回归）、#10074（韩文损坏） | 🔥🔥 中文/日韩用户长期痛点 |
| **扩展与包管理** | #10202（`pi remove` 改 lockfile）、#9817（npm `main/exports` 解析）、#10206（skills frontmatter 规范） | 🔥 零碎但高频 |
| **认证与登录流** | #10184、#10182、#10194、#10186 | 🔥 0.99.0 发布期集中反馈 |

---

## 六、开发者关注点

**1. 0.99.0 发布期阵痛集中**  
ChatGPT 登录失败（#10182、#10184）和 npm 包缺文件问题，让一部分用户在升级后立刻受阻。维护者响应迅速，相关 PR 已在同日合并或关闭，提示用户升级到 v0.99.1。

**2. TUI 性能回归成为新痛点**  
v0.99.0 之后出现两类性能回退：idle 时 CPU 不释放（#10191，约 40% 时间在 GC）、prompt 提交延迟随 session 长度线性增长（#10198）。两者都指向"渲染层每帧重计算"的共同根因，建议关注后续重构 PR。

**3. Anthropic 长会话 + Bedrock 工作流急需加固**  
#10045（自动压缩被拦截）、#10074（非 ASCII 编辑参数）、#10019（订阅请求挂起）三连，说明在 Anthropic 路径上仍存在稳定性与策略适配的盲区，特别是 Bedrock 通道。

**4. Windows 仍是最大未解决战场**  
#7547 的讨论已经持续近两个月，社区在等待官方对原生 Windows 体验（终端渲染、扩展加载、PowerShell 兼容性）的明确表态。

**5. 本地模型工作流在快速成熟**  
mitsuhiko 主导的 managed llama.cpp server（#10122）+ 内建扩展可禁用化（#10159）+ 缓存修复（#10158）形成闭环，使 Pi 越来越接近"零配置本地 LLM 工作台"。

**6. CJK 渲染是被低估的国际化债务**  
#10154 揭示了中文加粗在特定标点边界下的渲染 bug 是 #3353 的回归；#10074 的韩文损坏问题跨越 3 周。两个问题影响所有非英文用户的日常体验，应作为 v0.100 的优先修复目标。

---

> 📌 **维护者提示**：建议在下一个 patch 版本（v0.99.2）中重点验证：① ChatGPT 登录（#10182 已闭合并需回归）、② CJK 渲染（#10154）、③ TUI idle CPU（#10191），以恢复 0.99.x 系列的稳定性口碑。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-30**

---

## 📌 今日速览

今日 Qwen Code 完成 **v0.24.7** 全栈同步发布（CLI、Desktop、TypeScript SDK），核心新增 Managed Agent 的工作区绑定会话接纳能力，并修复 Code Mode 文本与懒式工具发现的对齐问题。社区讨论高度聚焦于 **Managed Agent 双路径架构**（#12380，37 条评论）和 **非对话上下文 Token 治理**（#12028，15 条评论）两大主题，多个 Runtime Broker 边界场景的 Bug 正在被集中修复。

---

## 🚀 版本发布

### v0.24.7（主版本）
- **特性**：`feat(managed-agent)` 接纳无执行的工作区绑定会话（#12709）
- **同步发布**：
  - `sdk-typescript-v0.1.17`：绑定 CLI v0.24.7
  - `desktop-v0.24.7`：保留 session 创建失败诊断信息（#12331），新增 SDK Java 受控运行时

### v0.24.7-nightly.20260929
- **修复**：将 Code Mode 文本与懒式工具发现对齐（#12990 by @tanzhenxin），`fix(permissions)` 启用已批准的权限

📦 [Release 详情](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7)

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 主题 | 重要性 |
|---|-------|------|--------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Managed Agent 双路径架构提案 | 37 评论，是 Stage D/H 的总章程，定义 Session 持久化、Workspace 绑定、可恢复工具执行与 WebShell 契约 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | 非对话上下文 Token 治理 | 15 评论，关注系统提示词、内置工具 schema、`QWEN.md` 带来的隐性成本 |
| [#13030](https://github.com/QwenLM/qwen-code/issues/13030) | Hosted Workspace 增加只读搜索工具 | 7 评论，将 `list_directory` / `glob` / `grep_search` 加入 Hosted Harness 工具配置 |
| [#12333](https://github.com/QwenLM/qwen-code/issues/12333) | Token 改动缺乏回溯门控（Blocked） | 7 评论，主张让现有基准对比两种配置，防止"省 Token 损质量" |
| [#12867](https://github.com/QwenLM/qwen-code/issues/12867) | Stage D 后续：持久生命周期 / Turns / Actions | 5 评论，承接 #12380 的 D1–D3 之后剩余工作 |
| [#13016](https://github.com/QwenLM/qwen-code/issues/13016) | SDK abort 后 CLI 子进程泄漏（**P1**） | 5 评论，TypeScript SDK SIGTERM/SIGKILL 无法关闭 supervisor 重启的子进程 |
| [#12889](https://github.com/QwenLM/qwen-code/issues/12889) | 延迟 `tool_call` 允许空参数 | 5 评论，v0.24.6 出现的 schema 校验缺陷，影响 `tool_search` 调用 |
| [#13004](https://github.com/QwenLM/qwen-code/issues/13004) | 受管自动记忆的冷却策略 | 5 评论，连续无操作后停止 fork 提取器，避免每轮空转 |
| [#13073](https://github.com/QwenLM/qwen-code/issues/13073) | 重试计数器键基于错误文本（#12970 后续） | 4 评论，多调用轮次会错误丢弃成功调用 |
| [#13068](https://github.com/QwenLM/qwen-code/issues/13068) | Ctrl+方向键发送 C0 字节给 pty | 4 评论，shell 模式下 Ctrl+导航键误触发 EOF |

**社区反应**：讨论深度集中于**架构正确性**与**长时运行可靠性**两个维度，Runtime Broker 系列的 Issue 多数被 `wenshao` 自报告并快速进入 PR 修复通道，治理效率较高。

---

## 🛠️ 重要 PR 进展（TOP 10）

| # | PR | 主题 | 类型 |
|---|-----|------|------|
| [#12894](https://github.com/QwenLM/qwen-code/pull/12894) | O2 远端 Shell 结果投递 | Managed Agent | 新增有界原始 stdout/stderr 发布、不可变对象存储、版本化读取与 Hosted 恢复 |
| [#12946](https://github.com/QwenLM/qwen-code/pull/12946) | H1 私有 Hosted MCP 运行时 | Managed Agent | 新增 `hosted-workspace-mcp/1` profile，Runtime 持有 stdio/HTTP/SSE 连接与凭据 |
| [#13071](https://github.com/QwenLM/qwen-code/pull/13071) | D6a Hosted 工具审批 | Managed Agent | 在 Session 审批模式之外引入"信任决策"路由 |
| [#12998](https://github.com/QwenLM/qwen-code/pull/12998) | 任务事件与取消语义 A1–A8 | Managed Agent | 合同 v1.22.0：定义持久保留下限、提交前缀与已归档输出可发现 |
| [#12977](https://github.com/QwenLM/qwen-code/pull/12977) | SDK Java 审计式 Hosted Workspace 操作员恢复 | SDK | 离线 `workspace-recovery inspect\|prepare\|complete` 流程 |
| [#13079](https://github.com/QwenLM/qwen-code/pull/13079) | 工具重试计数器键改为 (tool, cause-class) | Bug 修复 | 修复 #13073，多调用轮次不再丢成功调用 |
| [#12901](https://github.com/QwenLM/qwen-code/pull/12901) | 桥接 `tool_call` 参数预校验 | Bug 修复 | 必需字段/类型错误携带目标工具名，含顶部多余键强制 |
| [#13067](https://github.com/QwenLM/qwen-code/pull/13067) | Ctrl + 命名键不再发送 C0 字节 | Bug 修复 | 修复 #13068，shell 模式 Ctrl+方向键/Del/Home 等行为一致 |
| [#13006](https://github.com/QwenLM/qwen-code/pull/13006) | Hook 上下文注入模型 | Hook 增强 | PreToolUse 与 ACP PostToolUseFailure 的 `additionalContext` 现在送达模型 |
| [#13080](https://github.com/QwenLM/qwen-code/pull/13080) | `/stats` 在短终端可滚动 | UI 修复 | ink 裁剪至弹窗高度，OpenTUI 用 `<scrollbox>` 包裹，修复 #13074 |

---

## 📈 功能需求趋势

通过对 50 条 Issues 聚类，社区最关注的演进方向如下：

### 1. Managed Agent 全栈交付（占比 ≈ 40%）
- 双路径架构落地（#12380）→ Stage D（#12867）→ Stage H MCP（#13030, #12946）→ 任务事件合同 v1.22（#12998）
- 围绕 Session / Workspace / Runtime Broker 的多 Agent 编排已成为路线图主线

### 2. Token 与上下文性能治理（≈ 12%）
- 非对话上下文透明度（#12028）、基准回溯门控（#12333）、自动记忆冷却（#13004）、事件驱动记忆召回（#13063）
- 与"省 Token 不损质量"挂钩，配套 CI 评估体系被反复强调

### 3. Runtime / Broker 健壮性（≈ 18%）
- 调度对账（#13059/#13060 已关闭）、重复取消熔断（#13040）、Session 索引上限（#13042）、协议校验对齐（#13041）
- 重点解决长生命周期下的内存增长与跨语言一致性问题

### 4. CLI / 交互体验细节（≈ 12%）
- `/stats` 可滚动（#13074/#13080）、Ctrl 键处理（#13067/#13068）、spawn 失败报错（#13077）

### 5. IDE 与桌面分发（≈ 8%）
- VSCode Companion v0.24.7 发布失败（#13028 已关闭）、Desktop 同步跟进、CLI OAuth 模型下架提示（#12594）

### 6. Hook 体系扩展（≈ 5%）
- 失败上下文注入模型（#13006）、记忆变更通知（#12561）、Workflow 脚本安全（#13012）

### 7. 工具调用桥与 schema 一致性（≈ 5%）
- `tool_call` 桥间歇拒绝（#13070）、声明 schema 层未自洽（#12999）、工具结果取消分类（#13043）

---

## 💬 开发者关注点

| 痛点 / 需求 | 代表 Issue / PR | 现状 |
|------------|----------------|------|
| **SDK 终止语义不可靠**：父进程被 kill 后 supervisor 重启的子进程仍存活 | #13016（**P1**） | 已分配修复轨道，PR 尚未开启 |
| **跨语言（TS ↔ Java）协议字段边界不一致** | #13041 | 已识别差异，等待统一 PR |
| **长时运行进程的 Session 索引无限增长** | #13042 | 已识别，需 bound 设计 |
| **自动记忆空转**：每轮 user turn 都触发新 fork | #13004 | 提案阶段，提议 cooldown 策略 |
| **CI / 基准缺位**：Token 节省没有对应工具召回/任务成功率指标 | #12333（Blocked） | 治理与工程优先级分歧中 |
| **测试抖动**：turn-claim 与后台恢复扫描器竞争 | #13017、#13031 | E2E 间歇失败，已开启去抖 PR #13013 |
| **PTY 键映射与终端尺寸**：Shell 模式下的 Ctrl 组合与 `/stats` 渲染 | #13068/#13067、#13074/#13080 | 今日两个 PR 已合并，节奏快 |
| **废弃 Qwen OAuth 模型选择**：UI/CLI 不一致易误导 | #12594 | 修复在路上 |
| **远程结果投递的 CANDIDATE 过期恢复** | #13019 | 提案阶段，需确定安全恢复策略 |
| **媒体投递走 Provider Worker** | #13039 | 提案阶段，对齐多模态能力 |

---

**编辑注**：今日发布的 v0.24.7 主要解决 Managed Agent 工作区接纳与 Session 持久化第一阶段落地，但 #13016（SDK 子进程泄漏，**P1**）仍是阻塞性问题，建议在下一次补丁中优先处置。Token 治理（#12028）与基准门控（#12333）的耦合关系，是下一阶段性能路线图的关键决策点。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-09-30**
**数据源：github.com/Hmbown/DeepSeek-TUI（CodeWhale 项目）**

---

## 📌 今日速览

今日最重磅的事件是 **v0.10.1 集成分支 `wave/0.10.1-next`（PR #6782）正式开启**，"单分支集中合入"模式取代了此前按切片开 PR 的做法，预示着一个密集的修复周期。与此同时，多个 0.10.0 引入的回归（Linux Full Access 失效、Windows 多行粘贴、`/retry` 仅回滚 UI、CPU 占用逐版本攀升等）正被集中修复——一个明显的"质量止血"窗口期。依赖更新与 dependabot 同步推进，生态层也在稳步收敛。

---

## 🚀 版本发布

过去 24 小时内无新 Release。但社区与维护者正密集为 v0.10.1 做准备：

- **集成策略切换**：PR #6782 启用 `wave/0.10.1-next` 单分支模式，所有 agent 切片提交到同一分支、逐 commit 携带证据，避免 PR 数量爆炸。
- **质量闸口**：Issue #6458 维护 v0.10.1 集成 PR 队列（按依赖顺序合入，保留贡献者 PR #6431 独立）。
- **可复用 Action 配套**：PR #6486、#6780、#6781 推进"可复用 PR review Action"，跟随 v0.10.1 一起发布（安装带 checksum 校验的 CLI）。

参考：[#6458](https://github.com/Hmbown/Codewhale/issues/6458) ｜ [#6486](https://github.com/Hmbown/Codewhale/issues/6486) ｜ [#6782](https://github.com/Hmbown/Codewhale/pull/6782)

---

## 🔥 社区热点 Issues

按社区关注度与重要性排序，精选 10 条：

| # | Issue | 状态 | 摘要 | 为什么重要 |
|---|-------|------|------|----------|
| 1 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) **EPIC-005: TUI Crate Decomposition** | OPEN（30 评论） | FEAT-029（14 个 debug 命令）已合并 `main` | 持续最高热度 umbrella issue；debug 子系统已完成可移植化，是 TUI 拆 crate 的关键里程碑 |
| 2 | [#6787](https://github.com/Hmbown/Codewhale/issues/6787) **Linux: Full Access 无法下放给子 agent** | OPEN | 0.10.0 中 Auto-Review guardian 在 90s 后 fail-closed，用户被迫降级到 0.9.x | 维护者本人提报，影响最大权限场景，定位 v0.10.1 必修 |
| 3 | [#6728](https://github.com/Hmbown/Codewhale/issues/6728) **CPU 占用逐版本回归** | OPEN | v0.9.12 idle → v0.9.13 moderate → v0.10.0 heavy（FreeBSD 15 ELF 测量） | 提供实测数据，量化性能问题，便于回归追踪 |
| 4 | [#6788](https://github.com/Hmbown/Codewhale/issues/6788) **`/retry` 只回滚 UI 层** | OPEN | 撤销的消息仍留在模型上下文与磁盘会话；`/undo` 同病 | 严重语义偏离——`/retry` 承诺的"重发上一条用户消息"实际导致模型收到重复 N 条 |
| 5 | [#6427](https://github.com/Hmbown/Codewhale/issues/6427) **Windows Terminal 多行粘贴逐行自提交** | CLOSED | 0.10.0 回归，#5981 在 Windows Terminal 上被重新打破 | 已关闭，说明已修复；但揭示 Windows 终端兼容的脆弱性 |
| 6 | [#6699](https://github.com/Hmbown/Codewhale/issues/6699) **SSE 首字节前断流无重试** | CLOSED | 打开响应流阶段的网络失败，任意一层都未消耗 retry budget；其他路径都有 | 影响所有 SSE 调用方，揭示重试策略不一致的设计漏洞 |
| 7 | [#6573](https://github.com/Hmbown/Codewhale/issues/6573) **多 TUI 会话争抢 Subagents Store → CPU 自旋** | OPEN | 多个空闲进程各自 spin，#6677 修了 worker，task panel 仍每 2.5s 轮询 | 与 #6728 同一根因方向，是性能止血的重要切片 |
| 8 | [#6651](https://github.com/Hmbown/Codewhale/issues/6651) **TUI 失焦后无法实时刷新** | CLOSED | 窗口被遮挡（非最小化）时界面不更新 | 影响多窗口/切换任务工作流，TUI 的核心体验问题 |
| 9 | [#6705](https://github.com/Hmbown/Codewhale/issues/6705) **opencode-zen 111 模型中 58 个 fail-closed** | CLOSED | 编译期内置模型清单过时，未识别端点被判 "unproven" | 揭示 provider descriptor 维护流程问题，影响新模型上架速度 |
| 10 | [#5482](https://github.com/Hmbown/Codewhale/issues/5482) **EPIC(docs): 全量中文本地化** | CLOSED | 中文用户基数大，机翻错误多，部分源文档已过期 | 已关闭，说明文档本地化专项已落地 |

> 💡 **趋势观察**：今日 Open 的"高优先级"Issue 多与 0.10.0 的 Linux/Windows/性能回归相关，Closed 的则多为跨平台体验和文档——这是一个清晰的"质量回归 + 生态完善"双向节奏。

---

## 🛠 重要 PR 进展

按影响面与优先级精选 10 条：

| # | PR | 关键改动 |
|---|----|----------|
| 1 | [#6782](https://github.com/Hmbown/Codewhale/pull/6782) **v0.10.1 集成分支 wave/0.10.1-next** | 集中合入、逐 commit 携带证据；是 v0.10.1 的 release train |
| 2 | [#6774](https://github.com/Hmbown/Codewhale/pull/6774) **fix(cli,npm): 退出码、隐藏密钥提示、wrapper 信号** | CLI 失败被误报为成功、残留凭据、wrapper 子进程残留/挂死问题 |
| 3 | [#6789](https://github.com/Hmbown/Codewhale/pull/6789) **fix(mcp): 握手卫生（AWS/uvx/npx）** | 客户端 capabilities 置 `{}`、接受 2025-11-25 协议、30s 连接超时、AWS login 恢复 |
| 4 | [#6778](https://github.com/Hmbown/Codewhale/pull/6778) **fix(tasks): 空闲任务列表改读内存** | 关掉 TUI task panel 每 2.5s 的 `list_tasks_for_owner` 轮询，配合 #6677 修完两条 spin 链路 |
| 5 | [#6754](https://github.com/Hmbown/Codewhale/pull/6754) **fix(fleet): SSH 目标校验 / 时间墙 / 策略 prompt / worker env** | fleet 子系统的多个 host/manager/store/worker 修复 |
| 6 | [#6779](https://github.com/Hmbown/Codewhale/pull/6779) **fix(skills): 解析与配置目录绑定 workspace trust** | 关闭"未信任 workspace 仍能加载 skill"的两条绕过路径 |
| 7 | [#6777](https://github.com/Hmbown/Codewhale/pull/6777) **fix: pager 空白 / 迭代 /tree / macOS 休眠抑制** | 渲染与运行时修复集，覆盖会话树与能量管理 |
| 8 | [#6780](https://github.com/Hmbown/Codewhale/pull/6780) **可复用 PR review Action + 诚实失败报告** | 替换旧 workflow：安装带 checksum 的 CLI、复用 reviewer、缺凭据时不假装成功 |
| 9 | [#6786](https://github.com/Hmbown/Codewhale/pull/6786) **fix(web): 单段路径非 locale 时返回 404** | `/foo.txt`、`/llms-full.txt` 等之前被错误返回 200 |
| 10 | [#6727](https://github.com/Hmbown/Codewhale/pull/6727) **fix: v0.10.1 密钥/凭据/便携包正确性** | 5 项 secrets / credentials / bundle 修复，每条独立 commit 与回归测试 |

> 📦 其他已合并质量闸口：#6749（web 遥测/cron/语言/locale 404）、#6748（社区 agent digest 审核门）、#6770（apply_patch / 搜索 / arg repair）、#6726（config set 校验 / 凭据回显防护）、#6763（Unicode identity / 命名空间保留）。

---

## 📈 功能需求趋势

从近 24h 的 Issue / PR 中归纳出的社区焦点：

1. **🖥️ 跨平台兼容性**（最热）
   - Windows：多行粘贴（#6427）、ExecutionPolicy 绕过（#6745）、ConPTY 字节契约（#6160）
   - macOS：休眠抑制寿命（#6777）、GUI 授权链路（#6230）
   - Linux：Full Access 失效（#6787）
   - FreeBSD：CPU 自旋（#6573、#6728）

2. **⚡ TUI 性能与渲染**
   - CPU 占用逐版本升高（#6728）
   - 多会话争抢 shared store 自旋（#6573 → #6778/#6677）
   - 失焦刷新、文本背景异常（#6651、#6704）

3. **🔌 模型/Provider 生态**
   - 新 provider 接入：Yolo-Auto（#6408）、Tsubasa 描述符（#6695）、opencode-zen 清单刷新（#6705）
   - 检索回退链：DuckDuckGo 不可达时链上 Bing（#6746）

4. **🧱 安全与 workspace trust

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*