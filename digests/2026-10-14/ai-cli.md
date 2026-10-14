# AI CLI 工具社区动态日报 2026-10-14

> 生成时间: 2026-10-14 03:05 UTC | 覆盖工具: 9 个

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

# 2026-10-14 AI CLI 工具生态横向对比分析报告

---

## 1. 生态全景

AI CLI 工具已进入**多代理化、平台化、Provider 多元化**三线并进的成熟阶段：主流工具围绕 **Agent 协议与共享记忆**重构协作模型，围绕 **Compaction / 长上下文治理**解决 200K+ token 的工程难题，同时向 **BYOK 自定义 Provider** 全面开放以避免锁定；Windows 稳定性、安全分类器误报、配置/会话可观测性成为贯穿所有项目的共性痛点；基础设施级 PR（Daemon 治理、压缩、MCP 协议、供应链）显著增多，说明生态正从"功能竞赛"过渡到"运行时韧性"竞赛。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 热点 Issue 数 | 重要 PR 数 | 社区状态 |
|---|---|---|---|---|
| **Claude Code** | v2.1.299 | 10（最高 49 评论 / 👍31） | 2（已关闭） | 高活跃，**多代理方向热度第一** |
| **OpenAI Codex** | alpha.8 / .9 / .10（**一日三更**） | 10（最高 79 评论 / 👍39） | 10（多数自动合入） | **当日最热**，Windows CUA 故障集群 |
| **Gemini CLI** | v0.64.0 / v0.65.0-preview / nightly | 10（最高 13 评论 / 👍8） | 10 | 高活跃，subagent 为核心矛盾 |
| **GitHub Copilot CLI** | v1.0.98-0 / .98-1 | 34 条新 Issue（最高 👍13） | 0 | 中速，BYOK + ACP 改进期 |
| **Kimi Code CLI** | 无 | 0 | 0 | **静默期** |
| **OpenCode** | 无 | 50 条（最高 👍9） | 50 条 | 中速，**V2 稳定性修复期** |
| **Pi** | 无 | 50 条（最高 25 评论） | 14 | 中速密集，模型适配驱动 |
| **Qwen Code** | v0.25.2-preview / nightly | 10+（最高 20 评论） | 10 | 高活跃，Managed Agent 主线 |
| **DeepSeek TUI** | 无（v0.10.2 RC） | 10（最高 11 评论） | 10 | 中速密集，**Windows 是主要瓶颈** |

> 注：热度判断综合考虑 Issue 评论数、👍 数、PR 合入频率与版本节奏。Codex 单日 α 三更 + Claude Code 单 issue 👍31 是当日最显著的两个数据点。

---

## 3. 共同关注的功能方向

### 3.1 多代理 / 子代理生态（**最高频共识**）

| 工具 | 具体诉求 |
|---|---|
| Claude Code | 跨机 A2A 协议（#28300, 49 评论）、Shared Team Memory（#38536, 10 👍） |
| Gemini CLI | Generalist agent 挂死（#21409）、MAX_TURNS 误报 GOAL（#22323）、不主动调用 subagent（#21968） |
| Qwen Code | Managed Agent 平台 Stage D/F 推进、Broker / Workflow 取消、Harness 崩溃后 Session 恢复（#13847, #14116） |
| OpenCode | 并行/共享内存子代理（#18287, #22598） |
| Pi | Session resume 时工具/上下文丢失（#10785） |

### 3.2 Compaction 与长上下文治理

| 工具 | 当前状态 |
|---|---|
| Claude Code | **Idle Compaction 静默丢弃上下文引发强烈反弹**（#98747, 👍31） |
| Codex | 后台 compaction 接入 turn 生命周期（PR #53800）、跨 prompt 内容溯源（#53831） |
| Pi | Compaction 复用 session thinking level 击穿 output cap（#9075） |
| OpenCode | 通过纯文本 compaction 恢复不透明 400 溢出（PR #55286） |

### 3.3 Windows 稳定性（**绝对痛点**）

几乎每个项目都至少 2 条 Windows-only 故障：

- **Claude Code**：MCP OAuth `.well-known` 失败（#96792）、VS Code 扩展主机 OOM（#101901）
- **Codex**：CUA MXC `HRESULT 0x80070003`（#52407, 79 评论）、FrameArrived 死锁（#35446）
- **GitHub Copilot CLI**：通知红点不消失（#4381）、OAuth 死循环（#5134）
- **Gemini CLI**：CRLF 误报（#29559）、Wayland 失败（#21983）
- **DeepSeek TUI**：junction 路径、shell approval `&` 误判、runtime floor 拦截只读管道（#6963）—— **每个 release 几乎必带 Windows bug**

### 3.4 MCP 生态可靠性

- Claude Code：OAuth、ToolSearch 缓存、远程 HTTP MCP 超时（#83756, #99014）
- Qwen Code：ACP 不广播延迟 MCP 工具（#14114, P1，已修 #14130）、stdio 长任务取消致服务器死亡（#11272）
- OpenCode：MCP SDK GHSA-6prh-2h8m-c8cw 跨域重定向（#55166，**已发 PR #55292 修复**）
- Gemini CLI：Browser agent 忽略 settings（#22267）、Wayland 下崩溃

### 3.5 自定义 Provider / BYOK

- **GitHub Copilot CLI** 最集中：贪婪采样致推理模型失效（#4950）、内置 agent 默默使用会话模型（#5126）、短模型名解析（#5127）
- **OpenCode**：插件 `provider.models()` hook 回归（#25630, 👍7）、LLM 响应头被丢无法代理路由（#26091）、Zen sticky routing 抖动（#35402, 👍9）
- **Qwen Code**：vLLM/SGLang 100% 400 错误（#14112）、诊断信息缺失（#14115, #14096-97）
- **Pi**：多 gateway 暴露同一 id 时凭据错配（#10913）

### 3.6 错误可观测性

几乎所有项目的"开发者关注点"都列出此项：

- Codex：`x-request-id` / daemon 诊断不足（#53805 仅脱敏原因）
- Qwen Code：缺 x-request-id、原始 response headers（#14115）
- OpenCode：不透明 400 死锁（#54690）
- Claude Code：Idle Compaction 标记为 "manual" 而非 "auto"

### 3.7 TUI / 终端 UX

- Claude Code：编辑器迁移 Web GUI（#101910）、终端标签页状态（#71369）、通知音区分（#73384）
- Codex：TUI keymap 支持 Super/Cmd（#53754）、Option+Space 恢复（#31925, 👍39）
- Gemini CLI：spinner 与 tmux 闪烁（#29725）、滚动条边框（#29742）
- Pi：Home/End 行为回退（#10314, 25 评论）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线关键点 |
|---|---|---|---|
| **Claude Code** | 企业级 Agent 编排 + 长会话治理 | 复杂工程团队 | 200K 上下文 + Idle Compaction + A2A 协议规划 |
| **OpenAI Codex** | OpenAI 生态一体化 + 浏览器/桌面 Agent | OpenAI 重度用户、Remote 开发者 | app-server daemon + Guardian + Background Compaction + CUA |
| **Gemini CLI** | 长上下文原生 Bash + AST 化代码理解 | 重 token 用户、大仓开发者 | Gemini 3 原生 bash、Zero-Dependency 沙箱、AST 工具探索 |
| **GitHub Copilot CLI** | VS Code / GitHub 原生 + BYOK 完整链路 | 企业合规、IDE 重度用户 | ACP 协议、agent hooks、声明式 BYOK |
| **OpenCode** | 多 Provider 编排 + 插件生态 + 安全敏感 | 多模型路由者、安全合规团队 | managed config 最高优先级、GUI 插件模型、SDK 安全公告响应 |
| **Pi** | 极简 TUI + 模型适配前沿 | 模型爱好者、嵌入开发者 | 轻量 CLI、provider capability 抽象、Per-locale i18n |
| **Qwen Code** | **Managed Agent 平台**（Broker / Workflow /

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-14 | 数据源：anthropics/skills 仓库**

---

## 一、热门 Skills 排行（Top PRs）

> 说明：以下 PR 按社区关注度（综合评论、活跃时间、维护频率）排序，状态均为 [OPEN]。

### 🥇 #1298 — `skill-creator`：隔离 trigger 评估 + Windows/运行时失败处理
- 🔗 https://github.com/anthropics/skills/pull/1298
- **功能**：修复 skill-creator 在触发评估中的"假阴性"问题——子进程 pipe 的 `select()` 在 Windows 上失败、不相关工具会中断扫描、运行时失败被误判为"非触发"。
- **讨论热点**：作为官方元技能（meta skill），skill-creator 的健壮性决定了下游所有 Skills 的质量基准。社区对"评估结果可信度"高度敏感。
- **状态**：OPEN（创建于 2026-06-10，多次更新仍待合并，长期 open 暴露了核心基建不稳定）

### 🥈 #1961 — `skill-creator`：硬化 eval viewer（脚本逃逸 / DNS Rebinding / XSS）
- 🔗 https://github.com/anthropics/skills/pull/1961
- **功能**：加固 eval viewer 的三个安全缺口——脚本逃逸、DNS 重绑、跨站 POST，以及 HTML 转义不一致。
- **讨论热点**：eval viewer 渲染的是模型输出（不可信），本地 HTTP 服务接收反馈。安全审计类 PR 是近期社区最高优诉求之一（呼应 Issue #492、#1394）。
- **状态**：OPEN（更新于 2026-10-11，近期提交）

### 🥉 #1742 — `mcp-builder`：兼容 `mcp>=2` 的 `streamable_http_client` 与自定义请求头
- 🔗 https://github.com/anthropics/skills/pull/1742
- **功能**：适配 MCP SDK 2.0+ 的 API 变更（`streamablehttp_client` → `streamable_http_client`），并通过 `create_mcp_http_client` 注入自定义 header。
- **讨论热点**：MCP 生态正处于 1.x → 2.x 升级期，社区大量依赖 mcp-builder 构建外部工具集成，迁移阻塞直接影响可用性。
- **状态**：OPEN（修复 Issue #1668）

### 4️⃣ #1771 — `proofcore-contract-auditor`：智能合约静态分析 + TON 区块链存证
- 🔗 https://github.com/anthropics/skills/pull/1771
- **功能**：对 Solidity / Rust 智能合约做自动化静态分析，并将审计"密码学证明"锚定到 TON 区块链。
- **讨论热点**：Web3 + AI 的代表方向；展示了 Skills 作为"垂直行业审计交付物"的潜力。

### 5️⃣ #1703 — `md2video-audio`：Markdown → MP4 视频（带 AI 配音）
- 🔗 https://github.com/anthropics/skills/pull/1703
- **功能**：通过 Marp 把 Markdown 渲染为幻灯片，再合成带"拟人化"配音的 MP4 视频。
- **讨论热点**：零成本文档→视频工作流，是社区"内容创作自动化"诉求的典型样本。

### 6️⃣ #1245 — `notion-spec-to-implementation` + `quantitative-resume-auditor`
- 🔗 https://github.com/anthropics/skills/pull/1245
- **功能**：把产品/技术 spec 拆解为可在 Claude Code 落地的 Notion 任务；以及简历量化审计器。
- **讨论热点**："Notion 作为协作中枢 + 量化型简历"代表了两类高频请求：研发流程自动化 + 个人求职场景。

### 7️⃣ #822 — `AWT (AI Watch Tester)`：AI 视觉驱动的 E2E 测试
- 🔗 https://github.com/anthropics/skills/pull/822
- **功能**：给 Claude 视觉 + 浏览器控制，零代码生成 E2E 测试。
- **讨论热点**：测试自动化是社区呼声极高的方向，PR 长期 open 暴露了"AI Agent 自主测试"的工程化难度。

### 8️⃣ #83 — `skill-quality-analyzer` + `skill-security-analyzer`
- 🔗 https://github.com/anthropics/skills/pull/83
- **功能**：从 5 个维度评估 Skill 质量；以及一个独立的安全审计工具。
- **讨论热点**：对应 Issue #492（信任边界滥用）的官方级"自审"能力诉求，被认为是生态长期健康的关键。

---

## 二、社区需求趋势（Issues 透出的方向）

| 方向 | 代表 Issue | 关注度 | 解读 |
|---|---|---|---|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（46 条评论，TOP 1） | 极高 | 社区技能冒充官方 `anthropic/` 命名空间，构成信任边界滥用；这是当前**最高优先级**社区诉求 |
| **🏢 企业级协作分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 条评论，8 👍） | 高 | 期望 Claude.ai 支持组织内 Skills 共享库，避免手动分发 `.skill` 文件 |
| **🧪 评估系统可信度** | [#556](https://github.com/anthropics/skills/issues/556)（12 条评论）、[#1352](https://github.com/anthropics/skills/issues/1352)、[#1390](https://github.com/anthropics/skills/issues/1390) | 高 | `run_eval.py` 0% 触发率、并行 worker 串扰、mcp-builder 评分 0/N——评估基础设施存在系统性失真 |
| **🛡️ Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412)（已 CLOSED） | 中 | 提案 agent-governance：策略执行、威胁检测、信任评分、审计追溯 |
| **📚 上下文压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 中 | `compact-memory`：用符号化表示压缩长期 Agent 状态，降低 context 占用 |
| **✅ 推理质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385) | 中 | 提议"预校准 → 对抗评审 → 交付验证"三段式质量门 |
| **📄 文档生态（SharePoint/ODT）** | [#1175](https://github.com/anthropics/skills/issues/1175)、PR [#486](https://github.com/anthropics/skills/pull/486) | 中 | 企业文档（SPO、ODT）场景的安全与上下文窗口问题 |
| **🪪 排重 / 命名空间治理** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论，9 👍） | 中 | `document-skills` 与 `example-skills` 安装后内容重复，污染 session |
| **⚠️ Skills 消失 / 状态丢失** | [#62](https://github.com/anthropics/skills/issues/62) | 中 | 用户 Skills 静默丢失，缺乏持久化与恢复机制 |

**核心趋势词**：**"评估可信度 + 安全边界 + 组织分发"** 三件大事主导近半年讨论。

---

## 三、高潜力待合并 Skills（即将落地）

> 这些 PR 处于"高讨论活跃度 + 长期 open + 解决明确痛点"的窗口期，最可能在近期合并。

| PR | 关键信号 | 落地概率 |
|---|---|---|
| **[#1742 mcp-builder 兼容 MCP 2.x](https://github.com/anthropics/skills/pull/1742)** | 修复阻塞性问题（#1668），长期 open，与 MCP 生态升级强绑定 | ⭐⭐⭐⭐⭐ |
| **[#1961 skill-creator eval viewer 加固](https://github.com/anthropics/skills/pull/1961)** | 直接回应 Issue #492 安全主线，2026-10-11 最新更新 | ⭐⭐⭐⭐⭐ |
| **[#1298 skill-creator 触发评估隔离](https://github.com/anthropics/skills/pull/1298)** | 回应 #556/#1352 评估失真系列，9 月仍在更新 | ⭐⭐⭐⭐ |
| **[#1792 docx LibreOffice 超时报错](https://github.com/anthropics/skills/pull/1792)** | 明确修复路径（小范围改动），社区文档生态刚需 | ⭐⭐⭐⭐ |
| **[#1730 claude-api 死链替换](https://github.com/anthropics/skills/pull/1730)** | 文档级、低风险 | ⭐⭐⭐⭐⭐ |
| **[#1681 skill-creator 包脚本直执行](https://github.com/anthropics/skills/pull/1681)** | 工程体验痛点，影响所有贡献者 | ⭐⭐⭐⭐ |
| **[#538 #538 pdf 大小写引用](https://github.com/anthropics/skills/pull/538)** | 跨平台（Linux）必修 | ⭐⭐⭐⭐⭐ |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是：在 Skills 数量爆发（mcp-builder、skill-creator、文档/测试/AI 视觉/区块链等百花齐放）的背景下，必须先解决"评估可信度（run_eval 0% 触发）+ 安全边界（命名空间冒充、eval viewer XSS）+ 持久化分发（消失/重复/手动分享）"这三条地基级问题——否则再多的新 Skill 也难以在企业场景被信任地规模化使用。**

---

**附录：报告看点**
- 🔥 **Issue #492**（46 comments）是当前生态"安全焦虑"的绝对锚点，所有硬化类 PR（#1961、#1394、#1980、#1997）都应被放在这一语境下评估。
- ⚠️ **PR 长期 OPEN 现象显著**：#83（2025-11 至今近 1 年未合并）、#210、#514、#822 均超过 6 个月仍未合并，提示官方审核带宽可能是当前生态的瓶颈。
- 🧭 **官方回应方向已现端倪**：#202（skill-creator 改写为最佳实践）、#412（agent-governance）已 CLOSED，说明官方在内部推进"元能力升级"，但社区贡献者的合并节奏明显滞后。

---

# Claude Code 社区动态日报
**日期：2026-10-14**

---

## 今日速览

v2.1.299 正式发布，新增 `CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量与终端空闲自动压缩（Idle Compaction）机制；与此同时，社区对**多代理跨机协作（Agent-to-Agent 协议）** 和**团队共享记忆**两项特性的呼声持续升温，过去 24 小时内出现多起 Windows / VS Code 平台相关的 OOM、MCP 连接与安全分类器误报问题。

---

## 版本发布

### v2.1.299（2026-10-14）

本次发布包含两项重要变更：

1. **`CLAUDE_CODE_DISABLE_FILE_MENTIONS` 环境变量**  
   启用后，`@` 文件提及仅向 Claude 提供文件路径而非完整内容，由其自行通过文件工具读取 —— 对大型文件或敏感上下文更友好，可降低 prompt 体积与 token 消耗。

2. **终端空闲自动压缩（Idle Compaction）**  
   当一段 200K+ token 的会话空闲约 54 分钟后，系统会在 prompt cache 过期前自动压缩上下文。

> ⚠️ **注意**：该机制自 2.1.286 引入后引发争议，#98747 等多个 issue 报告称其会静默丢弃工作上下文，且无 opt-out 选项、仅标记为 "manual"，已于今日关闭但讨论仍在持续。

🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.299

---

## 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 重点 |
|---|-------|------|------|------|
| 1 | **[#28300](https://github.com/anthropics/claude-code/issues/28300)** Multi-agent collaboration across machines (Agent-to-Agent protocol) | OPEN | 49 | 热度最高的增强请求，提议跨机器代理间协作协议；社区普遍认为是 Claude Code 进入多代理生态的关键一步 |
| 2 | **[#38536](https://github.com/anthropics/claude-code/issues/38536)** Shared Team Memory for Claude Code | OPEN | 29 | 团队协作场景下的共享记忆需求，👍 10，呼吁打破当前"个人 only"的记忆模型 |
| 3 | **[#98747](https://github.com/anthropics/claude-code/issues/98747)** Idle compaction silently discards working context in long sessions | CLOSED | 23 | 与今日 v2.1.299 发布特性直接相关，👍 31，反映用户对自动压缩机制的强烈担忧 |
| 4 | **[#101910](https://github.com/anthropics/claude-code/issues/101910)** Convert Plugins/Marketplace/MCP editors in TUI to Web GUI | OPEN | 4 | 提议 TUI 中笨拙的编辑器迁移到 Web GUI，今日新建即高活跃 |
| 5 | **[#73384](https://github.com/anthropics/claude-code/issues/73384)** Built-in distinct notification sounds for "needs input" vs "done" | OPEN | 8 | 区分"需要输入"与"完成"两种状态的提示音，长时间后台运行场景刚需 |
| 6 | **[#71369](https://github.com/anthropics/claude-code/issues/71369)** Terminal tab title reflecting agent state for terminal/tmux users | OPEN | 7 | TUI 用户痛点：tmux / 终端标签页无法区分会话活跃状态 |
| 7 | **[#96792](https://github.com/anthropics/claude-code/issues/96792)** MCP OAuth discovery (.well-known) fails on Windows | OPEN | 4 | Windows 平台 MCP OAuth 发现的稳定 bug，影响多个 MCP server |
| 8 | **[#101901](https://github.com/anthropics/claude-code/issues/101901)** Extension host OOM-crashes with 2+ parallel background subagents (Windows) | OPEN | 3 | VS Code 扩展主机在启动 2 个并行后台代理后即 OOM 崩溃，资源消耗问题严重 |
| 9 | **[#101241](https://github.com/anthropics/claude-code/issues/101241)** Agent ran `docker rm` under "restart without asking" grant destroying logs | OPEN | 2 | 模型在"无需询问"权限下销毁数据，data-loss 标签，权限粒度问题值得关注 |
| 10 | **[#101932](https://github.com/anthropics/claude-code/issues/101932)** Safety classifier stops defensive sandboxing work (seccomp/Landlock) | OPEN | 1 | 安全分类器对合法安全研究工作的误报，今日新增，与 sworrl 系列问题同源 |

---

## 重要 PR 进展

过去 24 小时活跃 PR 较少，仅 2 条：

- **[#44393](https://github.com/anthropics/claude-code/pull/44393)** fix: respect `DAYS_BACK` env var in backfill-duplicate-comments script（已关闭）  
  修复维护脚本忽略 workflow 传入的 `DAYS_BACK` 环境变量问题，改为按日期过滤并支持提前终止分页，提升脚本效率。

- **[#1](https://github.com/anthropics/claude-code/pull/1)** Create SECURITY.md（已关闭）  
  仓库安全策略文件。

> 💡 PR 量稀少且均为基础设施类，说明本周开发活动主要在 issue 反馈与版本问题修复上。

---

## 功能需求趋势

综合近 24 小时与近期高活跃 issue，社区最关注的功能方向如下：

1. **多代理协作体系（最高优先级）**  
   - 跨机器 Agent-to-Agent 协议（#28300，49 评论）
   - 团队共享记忆（#38536，29 评论，10 👍）
   - 共享/分发 Team Memory 是当前呼声最强的方向

2. **TUI / 桌面体验升级**  
   - TUI 编辑器迁移到 Web GUI（#101910）
   - 终端标签页状态提示（#71369）
   - 提示音区分（#73384）

3. **MCP 生态稳定性**  
   - Windows OAuth 发现失败（#96792）
   - `ToolSearch` 大批次缓存失效（#83756）
   - 远程 HTTP MCP 连接超时（#99014）

4. **性能与资源管理**  
   - 并行子代理导致扩展主机 OOM（#101901）
   - 200K+ 上下文空闲压缩机制优化（#98747）

5. **权限与数据安全**  
   - 危险命令如 `docker rm` 在"自动放行"权限下被误用（#101241，data-loss）

6. **安全分类器误报（持续高发）**  
   - 用户 sworrl 在 7–8 月集中提交的多条 [Bug][cyber] 误报 issue 已陆续关闭，但今日仍有同类新增（#101932、#101925），反编译、逆向、SELinux 等合法场景仍被拦截。

---

## 开发者关注点

1. **空闲压缩的"静默"行为**  
   自动压缩机制对长会话工作上下文的破坏引发强烈不满（👍 31），开发者要求：① 提前告警；② 提供 opt-out；③ 日志应如实标注"自动"而非"manual"。

2. **安全分类器误报阻断合法工作**  
   用户报告自己在做无人机鉴权协议逆向、内存分析、固件包解析、Android 设备检查等工作时，会话被 `[cyber]` / `[REDACTED]` 分类器直接中断，且无明确申诉通道。已形成相当数量的重复 issue。

3. **多代理场景下的资源失控**  
   仅 2 个并行后台子代理即可让 VS Code 扩展主机 OOM，反映 Agent 进程的内存隔离与生命周期管理仍是短板。

4. **权限粒度不足导致数据丢失**  
   "restart without asking" 一类的批量授权被模型泛化为"可执行任意 `docker` 子命令"，催生 data-loss 风险；开发者呼吁引入更细的命令级权限。

5. **Windows + MCP 生态稳定性**  
   OAuth、HTTP MCP 连接超时等仍频发；与 macOS 表现不一致，影响跨平台团队协作。

6. **团队级上下文流转缺失**  
   个人记忆模型限制 Claude Code 在团队场景下的能力上限，"Shared Team Memory" 成为仅次于多代理协作的第二大需求。

---

*日报生成时间：2026-10-14 | 数据源：GitHub `anthropics/claude-code`*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-14** · 数据源：github.com/openai/codex

---

## 📌 今日速览

今日 Codex 0.163.0 版本线密集迭代，单日内连发 **alpha.8 / alpha.9 / alpha.10** 三个预发布版本，Rust CLI 内核进入新一轮功能收尾。社区侧最显著的痛点集中在 **Windows 桌面端的 CUA（Computer Use）/ Dots MXC 启动器故障** 与 **GPT-6.1 Sol 模型全量"at capacity"** 事件上，多个高互动 Issue 形成明确的故障集群；与此同时，一批面向 app-server、Guardian 评审、后台 compaction 与键映射的 PR 被自动化合入主线。

---

## 🚀 版本发布

| 版本 | 发布时间 | 备注 |
|---|---|---|
| `rust-v0.163.0-alpha.8` | 2026-10-14 | 0.163.0 alpha 线 |
| `rust-v0.163.0-alpha.9` | 2026-10-14 | 0.163.0 alpha 线 |
| `rust-v0.163.0-alpha.10` | 2026-10-14 | 0.163.0 alpha 线 |

> 一日三更的节奏说明 0.163.0 仍在密集合入，来自 PR 流可以推断本轮迭代重点包括：app-server daemon 治理、WinGet 安装链路、Guardian 评审刷新、后台 compaction 接入 turn 生命周期、TUI 键映射扩展（Super/Cmd 修饰键）等。
> Release 列表：[Releases](https://github.com/openai/codex/releases)

---

## 🔥 社区热点 Issues（Top 10）

### 1. #52407 — Windows Dots: CUA MXC 启动器 `HRESULT 0x80070003` 失败
- **互动**：79 评论 / 👍10
- **影响**：Windows 25H2 + Codex Desktop `26.1002.x`，Computer Use + Dots 集成启动链路直接挂掉
- **看点**：评论数远超其他 Issue，已成为本轮 Windows CUA 故障的事实"主单"
- 🔗 https://github.com/openai/codex/issues/52407

### 2. #35446 — Windows 10 Computer Use 在 `FrameArrived` 中死锁
- **互动**：28 评论
- **影响**：Win10 22H2 / 19045 上 `SoftwareBitmap` 转换阻塞 CUA 主循环
- **看点**：自 2026-07 长期未结案，与 #52407、#53188 共同暴露 Windows CUA 链路不稳
- 🔗 https://github.com/openai/codex/issues/35446

### 3. #40125 — Codex Desktop `create_thread` 间歇降级子会话权限
- **互动**：24 评论 / 👍5
- **影响**：Full Access worktree 子线程被悄悄回退到 managed approval 模式，权限模型不可预测
- **看点**：涉及安全边界，开发者对"静默降权"反响强烈
- 🔗 https://github.com/openai/codex/issues/40125

### 4. #53188 — Windows 浏览器工具无法初始化：`MXC launcher HRESULT 0x80070003`
- **互动**：23 评论
- **影响**：Pro 5X 用户在 Win11 26300 上 browser/computer-use 工具直接不可用
- **看点**：与 #52407 同根，疑似 CUA 启动器公共组件回归
- 🔗 https://github.com/openai/codex/issues/53188

### 5. #31925 — 恢复 macOS 上的 Option+Space 快速聊天
- **互动**：16 评论 / 👍39（**本批 Issue 最高赞**）
- **影响**：ChatGPT/Codex 桌面统一后丢失 Option+Space 快捷入口
- **看点**：👍39 远超评论数，说明用户层呼声高、改动看似小但使用频次高
- 🔗 https://github.com/openai/codex/issues/31925

### 6. #26951 — VS Code Remote-SSH 下 Codex 扩展卡在加载
- **互动**：18 评论 / 👍3
- **影响**：本地 Win + 远端 Ubuntu 场景下，扩展无响应，CLI 正常
- **看点**：跨平台 IDE 远程开发的经典痛点，长期未根治
- 🔗 https://github.com/openai/codex/issues/26951

### 7. #52747 — Windows Desktop 出现未知的 `code_mode_tool_description_first` 注入
- **互动**：19 评论 / 👍1
- **影响**：配置层出现来源不明的 tool description 注入 + opaque "forced-cleanup denial"
- **看点**：触及**安全审计**红线，社区要求明确注入源
- 🔗 https://github.com/openai/codex/issues/52747

### 8. #49862 — Windows Dots 缺少本地会话读写工具
- **互动**：16 评论 / 👍2
- **影响**：自定义 dot 任务无法读取/续接已有本地 Codex 会话
- **看点**：Dots 生态的关键能力缺口，影响第三方工作流搭建
- 🔗 https://github.com/openai/codex/issues/49862

### 9. #24648 — `thread/list` 省略 `modelProviders` 被当作"仅当前 provider"过滤
- **互动**：13 评论 / 👍4
- **影响**：第三方 app 不传 `modelProviders` 时，跨 provider 的线程被吞掉
- **看点**：app-server API 行为契约问题，与 #48358 形成重复报告
- 🔗 https://github.com/openai/codex/issues/24648

### 10. #53559 — GPT-6.1 Sol 全模型持续 503（94% 配额剩余）
- **互动**：5 评论
- **影响**：2026-10-12 起 Windows 端 7 个模型全部 `at capacity`，25 小时未恢复
- **看点**：用户**配额没满却拿不到服务**，与 #52812 / #53407 / #53648 / #53843 形成同一波容量事故的多点报告
- 🔗 https://github.com/openai/codex/issues/53559

---

## 🛠️ 重要 PR 进展（Top 10）

> 注：今日合入的 PR 主要由 `copyberry[bot]` 自动化生成并合并，节奏密集。

### 1. #53845 — 修复 Unix 下 daemon updater 套接字绑定与启动就绪检查
- 解决 `CODEX_HOME` 下 socket 路径超长、以及"socket 未 ready 但报告 success"问题
- 🔗 https://github.com/openai/codex/pull/53845

### 2. #53831 — 跨 prompt 组装与压缩传递内容溯源（content provenance）
- 在消息层标记每个 context part 的来源方，溯源信息**经过 compaction 后仍可保留**
- 🔗 https://github.com/openai/codex/pull/53831

### 3. #53827 — 安全裁剪未使用的 app-server daemon 历史版本
- 用 `selection-history` 记录当前/前一次 daemon 选择，绑定 selection link identity，升级后自动回收
- 🔗 https://github.com/openai/codex/pull/53827

### 4. #53816 — CLI 交互式 resume 时拒绝 Guardian 评审线程
- 防止用户在 TUI 中误把 Guardian review 线程当成可继续的会话
- 🔗 https://github.com/openai/codex/pull/53816

### 5. #53811 — 支持从 Windows WinGet 包安装 daemon
- 适配 WinGet 归档将 CLI/code-mode-host 放在**包根目录**而非 `bin/` 的布局
- 🔗 https://github.com/openai/codex/pull/53811

### 6. #53805 — workspace routing 配置错误加上安全诊断信息
- 仅暴露**脱敏原因**，避免把含密钥的原始错误直接吐给用户
- 🔗 https://github.com/openai/codex/pull/53805

### 7. #53800 — 将后台 compaction 接入 turn 生命周期
- 在 pre/mid/post-turn 检查点启动后台 compaction，捕获 world state 与 client routing state
- 🔗 https://github.com/openai/codex/pull/53800

### 8. #53797 — 评审上下文变化时刷新 Guardian 评审
- 之前是**直接 abort**，现在改为基于最新证据重新评估
- 🔗 https://github.com/openai/codex/pull/53797

### 9. #53790 — 修复 macOS 用户验证弹窗的取消逻辑
- 解决 Keychain 签名自建认证上下文、调用方取消不生效的问题
- 🔗 https://github.com/openai/codex/pull/53790

### 10. #53754 — TUI keymap 支持 Command/Super 修饰键
- 归一化 `cmd`/`command` → `super`，并预置 `super-left/right/backspace` 编辑绑定
- 🔗 https://github.com/openai/codex/pull/53754

---

## 📈 功能需求趋势

从 24 小时更新的 50 条 Issue 中可归纳出以下高频方向：

1. **Windows CUA / Dots 稳定性（最热）**
   - MXC launcher `HRESULT 0x80070003`、FrameArrived 死锁、browser tools 初始化失败等问题高度同源，集中在 Windows 25H2 / Win11 / Win10。

2. **App-Server API 契约一致性**
   - `thread/list` 的 `modelProviders` 默认行为（#24648 / #48358）、`CODEX_APP_SERVER_USE_LOCAL_DAEMON` 被覆盖（#41014）、Guardian thread 误恢复（→ #53816 已修）等，反映第三方/自托管集成方对 **稳定 API 语义** 的强烈诉求。

3. **跨端会话同步与可见性**
   - iOS / Web / Desktop / Android Remote 之间会话列表缺失、跨设备状态陈旧（#48490、#37142、#24780、#53848），Dots 与本地 CLI 的会话互相不可见（#49862、#50800）。

4. **模型容量与服务可用性**
   - GPT-6.1 Sol "at capacity" 在 10/12-10/14 形成多 Issue 报告（#53559、#53648、#53843），与配额剩余 94% 不符，开发者关注**侧信道**的服务降级。

5. **性能与资源占用**
   - macOS Desktop 出现 73.9 GB 内存占用（#53842）、Windows 上 `gitDiffToRemote` 对未跟踪文件无界 fan-out（#53847）。

6. **自定义模型提供方（custom provider）体验**
   - 多平台（macOS / Windows / Android Remote）下自定义 provider 的线程被吞、被错挂到 `openai` 命名空间，影响第三方接入（#24648、#24780、#48358、#53848）。

7. **桌面 UX 细节**
   - Option+Space 快速聊天丢失（#31925，👍39）、缩放后最小化按钮失效（#31397）、副屏 Profile 菜单无法打开（#49639）等"小但恼人"问题持续累积。

---

## 👨‍💻 开发者关注点

- **可观察性不足**：当 daemon、compaction、app-server 出现失败时，社区普遍反映**没有可读的诊断信息**（#53805 已在做"安全脱敏诊断"的方向性回应）。
- **静默权限变更**：Full Access → managed approval 的"自动降权"是开发者最不能接受的体验之一（#40125）。
- **配置即代码的可重复性**：Linux sandbox 在 WSL2 + Ubuntu 26.04 上因 root-owned SSH config 直接挂掉（#49340），开发者希望 sandbox 默认更"宽容 + 可配置"。
- **Dots 工作流的"双向通道"诉求**：用户希望在 dot / cloud computer 中既能启动 Codex，也能**回连本机已存在的会话与工具**（#49862、#50800）。
- **IDE 远程场景的可靠性**：VS Code Remote-SSH / WSL / Devcontainer 下 WebView 401、扩展卡加载（#26951、#53840），仍是阻碍"远程开发 + Codex"组合落地的关键障碍。

---

*日报基于 openai/codex 仓库过去 24 小时公开数据自动整理；如需深度分析某一类问题或具体 PR 影响范围，可进一步追溯关联 Issue。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-14** | **数据源：github.com/google-gemini/gemini-cli**

---

## 今日速览

今日 Gemini CLI 同步推进 v0.64.0 稳定版、v0.65.0-preview.0 预览版与 v0.65.0-nightly 三个版本线，社区焦点高度集中在**子智能体（subagent）稳定性**上——包括 Generalist agent 挂死、Browser agent 配置不生效、MAX_TURNS 异常上报为 GOAL 等多个 P1 问题被集中讨论。同时，IDE 重连、shell 重定向安全策略、终端渲染闪烁等核心工程问题也获得持续修复。

---

## 版本发布

### 🚀 v0.64.0（稳定版）
首个正式发版候选，关键变更：
- `a2a-server`：实现 V1 → V2 settings 迁移逻辑（[#29450](https://github.com/google-gemini/gemini-cli/pull/29450)）
- `acp`：桥接 `PromptResponse.usage` 并发出 `usage_update` 通知（[#29389](https://github.com/google-gemini/gemini-cli/pull/29389)）

### 🧪 v0.65.0-preview.0
预览版，主要修复：
- `cli`：在 untrusted 文件夹中强制只读 workspace 设置（[#29583](https://github.com/google-gemini/gemini-cli/pull/29583)）
- `core`：恢复会话时避免重复的 tool response turn（[#29583](https://github.com/google-gemini/gemini-cli/pull/29583)）

### 🌙 v0.65.0-nightly.20261014.g42c518220
夜间构建，关键修复：
- `cli`：修正扩展 Unicode 字符的反向搜索高亮索引（[#29699](https://github.com/google-gemini/gemini-cli/pull/29699)）
- `core`：将只含空白的 UTF-16/UTF-32 文件识别为空文件

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 重要性 |
|---|-------|--------|------|--------|
| 1 | [Subagent 触发 MAX_TURNS 后仍上报 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 | 13 | **关键**：子智能体中断被掩盖为成功，影响可观测性与成本控制 |
| 2 | [基于 Zero-Dependency OS 沙箱的 Bash 亲和路由](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 | 9 | **战略**：充分利用 Gemini 3 的原生 bash 能力，平衡安全与 UX |
| 3 | [Generalist agent 无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 | 8 (👍8) | **关键阻塞**：defer 到 generalist 后会卡住，简单任务也受影响，社区痛感最强 |
| 4 | [AST 感知文件读取 / 搜索 / 映射的价值评估](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 | 7 | **效率**：探索以 AST 工具降低 token 消耗与误读率 |
| 5 | [Gemini 几乎不会主动调用 skills / sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 | 7 | **可用性**：自定义能力未被模型自发利用，需显式指令 |
| 6 | [Browser Agent 忽略 settings.json 覆盖](https://github.com/google-gemini/gemini-cli/issues/22267) | P2 | 4 | **配置**：配置层与运行层解耦失效，影响可调参性 |
| 7 | [Browser Agent 会话接管与锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 | 4 | **鲁棒性**：fail-fast 策略需演进为自动恢复 |
| 8 | [browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 | 4 | **平台兼容**：Linux 桌面用户阻塞 |
| 9 | [用原生文件工具维护任务跟踪器](https://github.com/google-gemini/gemini-cli/issues/21000) | P3 | 4 | **架构演进**：脱离纯 in-context todo 限制 |
| 10 | [agents 目录下的 symlink 无法被识别](https://github.com/google-gemini/gemini-cli/issues/20079) | P2 | 4 | **配置管理**：影响 dotfiles 用户与团队共享 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#29648](https://github.com/google-gemini/gemini-cli/pull/29648) YOLO/AUTO_EDIT 模式对 shell 重定向降级 | OPEN | **P1 安全**：修复 `>`, `<`, `2>&1`, heredoc 等绕过 ASK_USER 降级的漏洞 |
| 2 | [#29725](https://github.com/google-gemini/gemini-cli/pull/29725) 同步输出与 spinner 隔离 | OPEN | 在 `tmux` 等多路复用器中消除 UI 闪烁 |
| 3 | [#29744](https://github.com/google-gemini/gemini-cli/pull/29744) `/ide enable` 在 IDE 重启后重连 | OPEN | 修复 VS Code Reload Window 后 CLI 无法恢复 IDE 连接 |
| 4 | [#29735](https://github.com/google-gemini/gemini-cli/pull/29735) 扩展下载流错误处理 | OPEN | 修复 `downloadFile` 在 HTTP/写流失败时仅依赖 `finish` 事件的问题 |
| 5 | [#29742](https://github.com/google-gemini/gemini-cli/pull/29742) 滚动工具容器右边框渲染 | OPEN | 修复嵌套垂直滚动条导致边框溢出的 UI bug |
| 6 | [#29553](https://github.com/google-gemini/gemini-cli/pull/29553) 月度配额封顶识别为终止错误 | CLOSED | 修复 429 重试循环，正确显示终端配额提示 |
| 7 | [#29564](https://github.com/google-gemini/gemini-cli/pull/29564) 保留 settings 迁移中的 env 占位符 | CLOSED | 防止 `${VAR}` 被错误展开 |
| 8 | [#29559](https://github.com/google-gemini/gemini-cli/pull/29559) diff 上下文片段的 CRLF 归一化 | CLOSED | 修复 Windows 仓库误报全部行变更 |
| 9 | [#29563](https://github.com/google-gemini/gemini-cli/pull/29563) 截断时保留行终止符 | CLOSED | `truncateString` 不再静默删除 `\n` |
| 10 | [#29551](https://github.com/google-gemini/gemini-cli/pull/29551) `core.sshCommand` 指向 `ssh` | CLOSED | 修复空 SSH 二进制导致的 `unable to fork` |

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **子智能体生态成熟化** | #22323, #21409, #21968, #21763 | ⭐⭐⭐⭐⭐ |
| **AST 感知代码理解** | #22745, #22746, #22747 | ⭐⭐⭐⭐ |
| **IDE / 终端集成稳定性** | #29744, #21924, #22267 | ⭐⭐⭐⭐ |
| **Token 效率与"外科手术式"读取** | #19561, #22745 | ⭐⭐⭐⭐ |
| **沙箱与安全策略** | #19873, #29648, #22672 | ⭐⭐⭐⭐ |
| **任务跟踪持久化** | #21000, #18836 | ⭐⭐⭐ |
| **跨平台兼容（Wayland / Windows）** | #21983, #29559, #29647 | ⭐⭐⭐ |
| **并行 / 共享内存子智能体** | #18287, #22598 | ⭐⭐ |

---

## 🧑‍💻 开发者关注点

1. **子智能体是当前最大痛点**
   多达 6 个 P1/P2 Issue 聚焦 subagent：挂死、状态上报失真、忽略配置、不主动调度、Wayland 崩溃、bug 报告缺失上下文。**这是 Gemini CLI 当前最需要工程投入的领域。**

2. **"工具过多"成为新瓶颈**
   [#24246](https://github.com/gemini/gemini-cli/issues/24246) 揭示工具数 > 128 即触发 400 错误，需要智能裁剪作用域。

3. **大上下文浪费严重**
   [#19561](https://github.com/google-gemini/gemini-cli/issues/19561) 指出每轮约 36.6k token 的基线，文件读取常出现 +15k 的"消防水龙带"现象，呼唤分层搜索 / 读取策略。

4. **配置层不可靠**
   symlink 不识别（#20079）、settings 迁移展开 env（#29564）、Browser Agent 忽略 settings（#22267）——配置语义在不同模块间不一致。

5. **跨平台细节反复出现**
   CRLF、Wayland、Windows PowerShell 缺失、容器 registry 带端口——边缘场景的工程债持续累积。

6. **安全策略需更细粒度**
   YOLO / AUTO_EDIT 模式对 shell 重定向的降级缺陷（#29310/#29648）反映出**模型原生 bash 能力越强，安全护栏越需要精细化**。

---

*📌 提示：v0.65.0-preview.0 changelog PR（[#29739](https://github.com/google-gemini/gemini-cli/pull/29739)）已自动生成并等待 review，下一预览版或将聚焦 subagent 稳定性与 IDE 重连修复。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**📅 2026-10-14**

---

## 1. 今日速览

今日 Copilot CLI 连续发布 **v1.0.98-0** 与 **v1.0.98-1** 两个版本，正式引入对 **Gemini 4 Argon** 模型的支持，并修复了 MCP 状态同步、会话恢复权限处理等关键问题。社区讨论热度集中在 BYOK 自定义提供商相关问题、ACP 模式下的会话管理缺陷，以及跨平台（尤其是 Windows）稳定性问题上，过去 24 小时内共更新 34 条 Issue 但无新 PR 合入。

---

## 2. 版本发布

### 🚀 v1.0.98-1（最新）
**新增**
- 支持 **Gemini 4 Argon** 模型

**修复**
- 分屏视图切换会话后，MCP 状态与 `/mcp` 命令保持与当前会话同步
- 恢复会话时正确处理已放弃的待处理权限请求，仅恢复活动权限请求
- 输入过程中保持普通字符正确显示

### 🔧 v1.0.98-0
- 修复与小调整

### 📦 v1.0.97（2026-10-13 主版本）
**新增**
- 为自定义代理（custom agents）提供 **agent-scoped 声明式 hooks**
- 远程插件市场与插件拉取在 HTTPS 认证失败时，使用已登录的 GitHub Token 重试一次

**修复**
- 通过 TLS 拦截代理时的流式响应能正常完成（即使省略 `close_notify`）
- 修复 GitHub SCP 风格远程仓库路径解析问题

🔗 [Releases 页面](https://github.com/github/copilot-cli/releases)

---

## 3. 社区热点 Issues

| # | Issue | 重要程度 | 关键看点 |
|---|-------|---------|---------|
| 1 | **[#5115](https://github.com/github/copilot-cli/issues/5115)** ACP `/rename` 报告成功但未真正重命名（5 评论） | ⭐⭐⭐⭐⭐ | 影响 ACP 集成用户的核心会话管理能力，5 条评论仍在追踪根因 |
| 2 | **[#4082](https://github.com/github/copilot-cli/issues/4082)** CLI 与 Desktop App 跨应用会话同步（👍13） | ⭐⭐⭐⭐⭐ | 高赞需求，开发者普遍希望在 CLI 和桌面端共享会话上下文 |
| 3 | **[#1724](https://github.com/github/copilot-cli/issues/1724)** 显示当前 TODO 状态（👍12） | ⭐⭐⭐⭐⭐ | 长期被关注的 UX 改进需求，期望参考 opencode 侧边栏体验 |
| 4 | **[#4950](https://github.com/github/copilot-cli/issues/4950)** BYOK 强制贪婪采样致推理模型失效 | ⭐⭐⭐⭐⭐ | 影响自部署模型（vLLM 等）的稳定性，社区反复反馈 |
| 5 | **[#4358](https://github.com/github/copilot-cli/issues/4358)** BYOK `/model` 选择器从 provider `/models` 端点拉取（👍9） | ⭐⭐⭐⭐ | 完善 BYOK 用户体验的关键增强 |
| 6 | **[#285](https://github.com/github/copilot-cli/issues/285)** 限制 write 工具仅能写入指定文件（👍7） | ⭐⭐⭐⭐ | 企业安全合规场景的高赞长期需求，现已关闭（建议持续关注落地方案） |
| 7 | **[#5126](https://github.com/github/copilot-cli/issues/5126)** BYOK 下内置 agent 默默使用会话模型 | ⭐⭐⭐⭐ | 内置 agent 失效，影响多 agent 工作流的稳定性 |
| 8 | **[#5127](https://github.com/github/copilot-cli/issues/5127)** SDK + BYOK 短模型名无法匹配 | ⭐⭐⭐⭐ | SDK 集成中暴露的隐式配置陷阱，错误信息误导 |
| 9 | **[#5133](https://github.com/github/copilot-cli/issues/5133)** ACP 模式下 `includeCoAuthoredBy: false` 被忽略 | ⭐⭐⭐ | 跨模式行为不一致，违反用户明确意图 |
| 10 | **[#4381](https://github.com/github/copilot-cli/issues/4381)** Windows 通知红点清除后不消失 | ⭐⭐⭐ | Windows 桌面端 UX 缺陷，影响专业用户对产品成熟度的信任 |

**其他值得追踪：**
- [#5137](https://github.com/github/copilot-cli/issues/5137) 思维链默认展开的设置选项（最新 UX 反馈）
- [#5134](https://github.com/github/copilot-cli/issues/5134) Windows MCP OAuth 死循环
- [#5129](https://github.com/github/copilot-cli/issues/5129) 企业级 Windows 全局安装器
- [#5131](https://github.com/github/copilot-cli/issues/5131) 打字时禁止打断（"Make copilot shut up and wait"）

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无新 PR 更新。** 建议关注已合并到 v1.0.97 / v1.0.98 的修复（agent hooks、SCP 解析、TLS 流式响应）是否在仓库的 [Commits 视图](https://github.com/github/copilot-cli/commits) 中开放 review。

---

## 5. 功能需求趋势

从近 24 小时 Issue 中提炼出社区重点关注方向：

### 🔑 BYOK & 自定义提供商（最热）
至少 5 个相关 Issue 集中爆发：模型选择器（#4358）、采样参数（#4950）、内置 agent 模型回退（#5126）、短模型名匹配（#5127）、凭据管理（#4936）。表明 BYOK 已从"能用"迈向"易用"阶段。

### 🪟 跨平台稳定性
Windows 端问题集中：通知红点（#4381）、MCP OAuth 死循环（#5134）、企业级安装器（#5129）、终端安全拒绝后的死锁（#5123）。

### 🧠 Agent 体验升级
TODO 状态显示（#1724，👍12）、代理选择竞态（#5124）、agent hooks 正式落地（v1.0.97 已发布）。

### 🔄 会话管理
会话命名/重命名（#5115、#5128、#5132）、跨应用同步（#4082，👍13）、/exit 行为（#5135）、会话恢复时权限处理（v1.0.98-1 已修复）。

### 🤖 模型生态扩张
Gemini 4 Argon 接入（v1.0.98-1），同时对 OpenAI 兼容协议的自托管模型支持成为长期议题。

---

## 6. 开发者关注点

**核心痛点：**
1. **BYOK 仍未"开箱即用"** — 短模型名解析、采样参数、模型选择器、内置 agent 兼容性等问题环环相扣，使自部署 LLM 的体验明显劣于托管模型。
2. **跨模式行为不一致** — ACP 模式（`--acp`）下 `/rename`、`includeCoAuthoredBy` 等行为与交互模式或 `copilot -p` 不一致，给 IDE/工具集成方带来不确定性。
3. **Windows 体验落后** — 通知、OAuth、终端集成、权限恢复等问题在 Windows 上尤为突出。
4. **会话生命周期管理薄弱** — 重命名、跨应用同步、退出行为等基础能力仍是高频需求，提示会话是用户工作流的核心单位。
5. **Agent 透明性不足** — 开发者希望能看到 TODO、思维链（#5137）、prompt 执行耗时（#5125），强调"可观察性"对 agent 调试的重要性。
6. **企业部署与安全** — 文件写入范围限制（#285，👍7）、系统级安装器（#5129）反映企业用户对合规与管控的强烈诉求。

---

*📊 报告生成基于 github.com/github/copilot-cli 公开数据，覆盖 2026-10-13 至 2026-10-14 24 小时窗口。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-10-14** | 数据来源：github.com/anomalyco/opencode

---

## 一、今日速览

今日社区动态以 **V2 稳定性修复** 和 **安全加固** 为主线：核心团队同日提交并合入了针对 MCP SDK 跨域重定向安全公告（GHSA-6prh-2h8m-c8cw）的修复 PR，同时推进了若干长会话上下文溢出、桌面端 SQLite 膨胀、托管配置优先级等问题的修复。多位社区成员集中反馈 V1 → V2 升级过程中的数据迁移、provider 配置、桌面端 UX 回归等问题。

---

## 二、版本发布

**过去 24 小时内无新版本发布。**

---

## 三、社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 重要性 |
|---|------|------|------|-----|--------|
| [#25630](https://github.com/anomalyco/opencode/issues/25630) | 回归：插件 `provider.models()` hook 无法填充自定义 provider（自 #25167 起） | CLOSED | 17 | 7 | 🔥 影响所有通过插件动态注册 provider 的用户，是 v1.14.x 引入的明显回归 |
| [#51109](https://github.com/anomalyco/opencode/issues/51109) | 支持按 agent / provider / model 配置 prompt-cache TTL | OPEN | 7 | 0 | 💰 长会话中 Anthropic 5 分钟 ephemeral cache 是主要成本来源，亟需可调 TTL |
| [#31791](https://github.com/anomalyco/opencode/issues/31791) | 特性：`question` 工具支持图片拖拽 / 粘贴 | CLOSED | 7 | 2 | 🖼️ 主聊天已支持，question UI 缺失会显著降低多模态问题排查效率 |
| [#42501](https://github.com/anomalyco/opencode/issues/42501) | VS Code 集成终端中 TUI 滚轮失灵（xterm.js 导致） | CLOSED | 6 | 0 | 🐛 虽非 opencode 根因，但用户体验强烈，建议文档明确受影响版本 |
| [#54690](https://github.com/anomalyco/opencode/issues/54690) | 长会话因图片 / 文件未被计入上下文而 400 死锁 | CLOSED | 5 | 0 | ⚠️ base64 图片未做 token 折算，导致 session 死锁且无自动恢复 |
| [#26091](https://github.com/anomalyco/opencode/issues/26091) | LLM 响应头被丢弃，插件无法读取代理路由元数据 | CLOSED | 5 | 0 | 🔌 LiteLLM 等代理的 smart-routing 失效，限制了复杂多 provider 编排 |
| [#55288](https://github.com/anomalyco/opencode/issues/55288) | TUI model picker 缺少集成连接时不显示 provider 分组 | CLOSED | 4 | 0 | 🎨 自定义 gateway 用户无法在 picker 中看到分组与名称 |
| [#54990](https://github.com/anomalyco/opencode/issues/54990) | V2 Desktop 缩放等级每次重启重置为 1（Windows） | CLOSED | 4 | 0 | 🖥️ 持久化缺失的典型 UX 回归 |
| [#42434](https://github.com/anomalyco/opencode/issues/42434) | 🔒 安全：`opencode upgrade` 使用 `curl\|bash` 且无完整性校验 | CLOSED | 4 | 0 | 🛡️ 供应链 / TOCTOU 中危风险，curl 安装路径全部受影响 |
| [#35402](https://github.com/anomalyco/opencode/issues/35402) | Zen `glm-5.2` 多源路由无 sticky，导致冷缓存抖动 | CLOSED | 3 | 9 | ⭐ 单 issue 👍 数最高，重复相同请求偶尔命中冷缓存 → 全量重计费，社区痛点显著 |
| [#42437](https://github.com/anomalyco/opencode/issues/42437) | 🔒 安全：上下文裁剪静默丢弃系统指令 / 约束类内容 | CLOSED | 3 | 0 | 🛡️ 中高危：完整性问题而非纯成本问题，可被利用绕过约束 |
| [#55166](https://github.com/anomalyco/opencode/issues/55166) | v2 MCP OAuth 跨源重定向携带请求体（GHSA-6prh-2h8m-c8cw） | OPEN | 3 | 0 | 🚨 已被对应 PR #55292 修复，pin 的 `@modelcontextprotocol/client@2.0.0` 受影响 |

---

## 四、重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#55292](https://github.com/anomalyco/opencode/pull/55292) | fix(core): 升级 `@modelcontextprotocol/client` 至 2.3.0 修复 GHSA-6prh-2h8m-c8cw | CLOSED | 🔒 关键安全修复，关闭 #55166，建议 V2.0.28 之后立即跟进 |
| [#55267](https://github.com/anomalyco/opencode/pull/55267) | fix(core): 托管配置（managed config）调整为最高优先级 | CLOSED | 🏢 修复企业 / MDM 部署场景下托管配置被本地配置覆盖的问题 |
| [#55286](https://github.com/anomalyco/opencode/pull/55286) | fix(core): 通过纯文本 compaction 恢复未分类的 400 溢出错误 | OPEN | 🧩 解决 #54690 / #46564 复现：代理返回不透明 400 时的死锁场景 |
| [#55277](https://github.com/anomalyco/opencode/pull/55277) | fix(drafts): `InvalidStateError` 时重开 IDB 连接，吸收 teardown flush 错误 | OPEN | 💾 浏览器端草稿存储在 document 卸载 / 存储回收时的竞态修复 |
| [#54023](https://github.com/anomalyco/opencode/pull/54023) | fix(core): 跨 location 协调凭据刷新 | OPEN | 🔐 通过 `credentials.lock(id, operation)` 让多 location 共享一次刷新，避免抖动和雪崩 |
| [#52000](https://github.com/anomalyco/opencode/pull/52000) | feat(tui): 增加 per-locale i18n 基础并接入 UI 字符串 | OPEN | 🌍 关闭 #37216，桌面端 todowrite 等 i18n 缺失（#55000）的根因修复 |
| [#55246](https://github.com/anomalyco/opencode/pull/55246) | feat(desktop): 通过 `./gui` 导出方式打包 GUI 插件 | OPEN | 🧩 桌面插件模型统一为「一个 plugin 三个导出」，内置功能即内置插件 |
| [#53366](https://github.com/anomalyco/opencode/pull/53366) | fix(core): 删除 location 最后一个 session 时停止 stdio MCP server | OPEN | 🛠️ 共享后台服务下 stdio MCP server 长期挂起的资源泄漏 |
| [#55198](https://github.com/anomalyco/opencode/pull/55198) | fix(install): 不再通过 curl trace 解析获取下载进度 | OPEN | 🛠️ 修复 #53702，去掉 trace-ascii + fifo 的脆弱进度条实现 |
| [#54517](https://github.com/anomalyco/opencode/pull/54517) | feat(tui): 嵌入式终端面板支持透明背景 | OPEN | 🎨 主题 `background.raised.base` 全透明时终端通过 SGR 49 合成背景 |
| [#53676](https://github.com/anomalyco/opencode/pull/53676) | fix(gui-extensions): 修正 WSL 发行版 radio 对齐 | OPEN | 🐛 通用 radio 规则覆盖了 WSL 样式导致的 padding 丢失 |
| [#55278](https://github.com/anomalyco/opencode/pull/55278) | fix(ci): 为 repo agent 安装 V2 CLI | OPEN | 🤖 V2 升级后 `triage` 在新 issue 上持续失败，所有自 V2 晋升后新开 issue 均受影响 |

---

## 五、功能需求趋势

从近 24 小时活跃的 50 条 Issue 中提炼出的高频方向：

1. **V1 → V2 迁移平滑性** 🔄
   - V1 session 未导入 V2（#41217）、SQLite `session_v2` schema 分离、桌面 2.0 持久化丢失（#54990）等，是当前最大集中投诉。

2. **Provider / 模型路由的可控性** 🛰️
   - 自定义 provider 渲染（#55288、#55289）、Zen 多源 sticky 路由（#35402）、代理响应头透传（#26091）、Opaque 400 恢复（#46564）反映出多 provider 编排需求强烈。

3. **缓存与成本控制** 💰
   - 可配置 cache TTL（#51109）、subagent 强制 parent model（#54997）显示长会话 / 多 agent 编排下成本是核心痛点。

4. **桌面端体验与稳定** 🖥️
   - 缩放持久化（#54990）、WSL sidecar（#37718）、todowrite 本地化崩溃（#55000）、drafts SQLite 膨胀（#55282）。

5. **插件生态与 GUI 插件模型** 🧩
   - permission hook 未触发（#47495、#47674）、GUI 插件统一（#55246）、dynamic custom providers（#54944/#55279）。

6. **安全 / 供应链** 🔒
   - `curl|bash` 安装链（#42434）、context pruning 完整性（#42437）、MCP SDK 跨源重定向（#55166 / #55292）。

7. **新模型 / 接入文档** 📚
   - MCP GitHub Copilot 文档补全（#42484、#55285）、Prime Inference 团队计费（#54953）、Zen 文档。

---

## 六、开发者关注点

社区反馈集中暴露以下痛点：

- **回归检测不足**：#25630、#42501、#54990、#55288 等多个回归集中在 V1.14.x 与 V2.0.2x 节点，提示 CI 缺少对「自定义 provider 注入」「TUI picker 视觉」「桌面持久化」等场景的覆盖。
- **不透明错误处理**：#54690、#46564、#54996 表明代理 / 网关返回的 generic 400 没有分类恢复路径，session 容易死锁。
- **i18n / 本地化缺位**：#52000 长期未推进，导致桌面端 #55000 等区域语言下崩溃的根因迟迟无法收敛。
- **安全卫生基线**：`curl|bash` 升级、context pruning 完整性、MCP SDK 升级 —— 三类问题同周浮现，提示需要建立安全公告响应 SLA。
- **迁移体验**：V1 → V2 的 session / 配置 / 桌面 UI 三个层面均出现「无声丢失」型问题（会话不可见、缩放丢失、env 未注入），开发者升级信心受损。
- **资源治理**：SQLite 单 cell 膨胀 77%（#55282）、drafts 99.5% 空闲页（#55282）、stdio MCP 长期挂起（#53366），长生命周期场景下的资源回收机制需要制度化。

---

*日报生成基于 2026-10-14 过去 24 小时的 GitHub 公开数据，共统计 50 条 Issue 与 50 条 PR。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-14

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（仓库 `earendil-works/pi`）

---

## 一、今日速览

今天 Pi 仓库无新版本发布，活跃度集中在 **1.2.0 后续修复** 和 **新模型适配**：GPT-6 的 cache-preserving reasoning effort 已合入，Gemini 4 的 `thinkingLevel` 适配完成两个 PR（#10899 / #10902），NVIDIA 默认模型切换到 Nemotron 3.5 Super VL。Issue 侧最热话题是 TUI/Home-End 行为回退（#10314，25 条评论），多个 v1.2.0 的边缘 bug（光标、StdinBuffer、tmux 图片等）已陆续关闭。

---

## 二、版本发布

⚠️ 过去 24 小时 **无新 Release**。当前仓库最新稳定版本仍为 **v1.2.0**，社区正在密集修复 v1.2.0 引入的回归问题。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 关键看点 |
|---|---|---|---|---|
| [#10314](https://github.com/earendil-works/pi/issues/10314) | Reconsider Home/End defaults in fullscreen mode? | CLOSED | 25 | **今日最热**。1.2.0 全屏 TUI 下 Home/End 从"行首/行尾"变成"滚动到顶/底"，破坏用户肌肉记忆，讨论度高 |
| [#4180](https://github.com/earendil-works/pi/issues/4180) | Links not clickable anymore (alt term mode) | CLOSED | 20 | 切到 alternate screen 后 URL/markdown 链接失去可点击能力，已随大重构关闭 |
| [#10300](https://github.com/earendil-works/pi/issues/10300) | ChatGPT OAuth ID token 未持久化 | OPEN | 15 | 影响扩展访问账号身份；`credentialFromTokenResponse` 漏掉了 `id_token` 字段 |
| [#5916](https://github.com/earendil-works/pi/issues/5916) | Provider 扩展模型别名与搜索 | OPEN | 14 | OpenRouter 等通过 `models.json` `modelOverrides` 注册的别名无法在搜索中被发现 |
| [#9075](https://github.com/earendil-works/pi/issues/9075) | Compaction 复用 session thinking level 导致 Opus/Sonnet 高思考档击穿 output cap | OPEN | 10 | 自适应思考模型下 compaction 持续触发 token 上限，影响长会话 |
| [#10853](https://github.com/earendil-works/pi/issues/10853) | `[prio:p0]` GPT-6 reasoning effort 切换破坏 cache | OPEN | 5 | 直接相关 PR #10886 已合并，问题闭环在即 |
| [#10862](https://github.com/earendil-works/pi/issues/10862) | 硬件光标在鼠标选区中跳列（1.2.0） | CLOSED | 7 | 零宽 marker 在选区激活时位置计算错误 |
| [#10870](https://github.com/earendil-works/pi/issues/10870) | Radius 改变 `/share` 行为，建议 `PI_SHARE_USE_RADIUS` 开关 | CLOSED | 7 | radius 作为 provider 时无法直接保存 session 到 gist |
| [#10909](https://github.com/earendil-works/pi/issues/10909) | 升级 Anthropic / OpenAI / Google / Bedrock / TypeBox SDK | CLOSED | 3 | 维护性批量升级 PR |
| [#10881](https://github.com/earendil-works/pi/issues/10881) | Nix 构建 v1.2.0 失败：`Cannot find module 'esbuild'` | CLOSED | 3 | `installCheckPhase` 缺依赖，影响 NixOS 用户 |

> 完整 50 条可在仓库 Issues 页查看。另值得关注：#10898（Gemini 4 `thinkingBudget` 被拒，已通过 #10899/#10902 修复）、#10916（`MiniMax-M3.1-Flash-Preview` 未进入生成的 catalog）、#10299（GLM 经 OpenRouter 返回空 tool_call 导致会话死锁）。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|---|---|---|
| [#10914](https://github.com/earendil-works/pi/pull/10914) | docs: 文档迁至仓库根 `docs/` | OPEN | 文档不再局限于 coding-agent，覆盖 pi-ai / pi-durable 等包；构建期拷贝到包内 |
| [#10913](https://github.com/earendil-works/pi/pull/10913) | fix: `--model provider/id` 统一 provider 选择策略（fixes #10160） | OPEN | 解决多 gateway 暴露同一 id 时忽略凭据错选首个 gateway 的问题 |
| [#10910](https://github.com/earendil-works/pi/pull/10910) | feat: NVIDIA 默认模型改为 Nemotron 3.5 Super VL | OPEN | 替换过时的 Nemotron 3 Ultra 550B；supersede #10906 |
| [#10902](https://github.com/earendil-works/pi/pull/10902) | fix(ai): Gemini 4 使用 thinking levels | CLOSED | 修复 `gemini-4-argon` 等被 Vertex 400 拒绝的 bug |
| [#10899](https://github.com/earendil-works/pi/pull/10899) | fix(ai): `gemini-4*` 走 `thinkingLevel` 线路（fixes #10898） | CLOSED | 扩展 `usesGoogleThinkingLevel()` 匹配规则 |
| [#10887](https://github.com/earendil-works/pi/pull/10887) | fix: session resume 恢复动态激活的工具（fixes #10785） | CLOSED | SDK 默认工具 + `--tools +name/-name` 逻辑全部对齐 transcript |
| [#10886](https://github.com/earendil-works/pi/pull/10886) | feat(ai): GPT-6 effort 切换改用 `configuration_update`（closes #10853） | CLOSED | 保留 request 级首次 effort，后续变更走 input item，保 cache + WebSocket 续连 |
| [#10795](https://github.com/earendil-works/pi/pull/10795) | fix(ai): 从 Anthropic error tool results 中丢弃图片（fixes #10794） | CLOSED | 防止 image block 污染错误回包 |
| [#10718](https://github.com/earendil-works/pi/pull/10718) | fix(coding-agent): `--export` HTML 包含 system prompt | OPEN | 补齐与 `/export` 的行为差异 |
| [#10872](https://github.com/earendil-works/pi/pull/10872) | fix(tui): rxvt-unicode 下避免 wheel 重复步进（fixes #10824） | CLOSED | 终端兼容回归修复 |

---

## 五、功能需求趋势

从 50 条活跃 Issue + 14 条 PR 提炼出社区最关注的方向：

1. **新模型适配与默认切换** — GPT-6 cache-aware reasoning、Gemini 4 `thinkingLevel`、Nemotron 3.5 Super VL、`MiniMax-M3.1-Flash-Preview` 入库等，模型更新节奏快。
2. **Provider / Gateway 选择策略** — 多 provider 暴露同一 id 时的凭据感知路由、别名搜索、Radius 行为可配置（#5916、#10913、#10870）。
3. **TUI 与终端兼容** — tmux 内联图片、rxvt-unicode 滚轮、alternate screen 下链接可点击、Home/End 行为等（#10314、#10878、#4180、#10824）。
4. **Session / Compaction 可靠性** — resume 时工具/上下文丢失、长会话内存累积、system baseline 漂移（#10785、#10642、#10904、#9075）。
5. **Token 预算与缓存** — thinking token 占 `max_tokens`、compaction 击穿 output cap、GPT-6 cache miss（#9075、#10853）。
6. **安全与系统级配置** — `/etc/pi/models.json` 最高优先级、MCP User-Agent 标识、OAuth ID token 持久化（#10895、#10883、#10300）。
7. **SDK 嵌入体验** — Bun 编译二进制注册、codemode 中止/桥接内存、export HTML 完整度（#10458、#10748、#10718）。
8. **打包与构建** — Nix flake 修复、TypeBox/provider SDK 批量升级（#10881、#10909、#10528）。

---

## 六、开发者关注点（高频痛点）

- **TUI 行为回归**：1.2.0 引入 alternate screen 后，多个既有快捷键/链接/光标表现出现退化，社区期待"行为可配 + 默认值回归"双管齐下。
- **模型差异处理碎片化**：同一家族（Gemini 3 vs 4、GPT-5 vs 6）参数语义不同步，亟需统一的 provider capability 抽象而非散点修复。
- **Tool-call 解析鲁棒性**：`\url` 等非法 JSON 转义（#10868）、空 tool_call（#10299）、本地 `$ref` schema（#10521）三类问题反复出现，集中在 `parseStreamingJson` / `repairJson` / `validateToolArguments`。
- **会话生命周期**：resume 丢工具、长会话内存不回收、export HTML 缺 system prompt 等问题对生产嵌入用户影响明显。
- **打包 / 分发**：Nix、esbuild、bun runtime shim 等"安装即报错"问题分散用户精力，呼吁统一发布流水线。
- **可观测性**：MCP `User-Agent` 误设为 `undici`（#10883）反映出 SDK 标识缺位，运维侧难以定位流量来源。

---

*日报基于过去 24 小时 GitHub 数据自动生成。如需关注特定方向（SDK / TUI / Provider），可在日报基础上扩展过滤维度。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-14**

---

## 📌 今日速览

Qwen Code 进入 0.25.2 预览版的迭代阶段，**Managed Agent 平台**依然是当前开发的最核心焦点——围绕 Hosted Session、Broker、Workflow 任务的 Stage D/F 收尾工作持续推进。同时，社区集中暴露了多个 **OpenAI 兼容 Provider（vLLM/SGLang/TheHive）400 错误**和 **MCP 工具发现延迟**等 P1 级问题，CLI/UI 层的细节修复也在同步进行。

---

## 🚀 版本发布

| 版本 | 类型 | 关键变化 |
|---|---|---|
| [v0.25.2-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.2-preview.0) | 预览版 | managed-agent：connector 和 broker 鲁棒性修复（#12692 R2 评审）|
| [v0.25.1-nightly.20261013.6212189f1f](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-nightly.20261013.6212189f1f) | Nightly | 同上 managed-agent 修复同步发布 |

两个版本均合入了来自 PR #13330 的 connector/broker 鲁棒性改进，标志着 #12692 第二轮评审反馈已被消化。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关注点 |
|---|---|---|---|
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | Daily dependency CVE audit failed | — | 自动化依赖漏洞扫描连续失败，需关注供应链安全（20 评论）|
| [#12333](https://github.com/QwenLM/qwen-code/issues/12333) | eval: 验证 tool-loading 成本与任务质量 | P2 | 工具加载策略 A/B 评估的关键证据（16 评论）|
| [#13847](https://github.com/QwenLM/qwen-code/issues/13847) | Harness 崩溃导致 Session 阻塞 | — | 多 Agent 场景下后台调用无 checkpoint 的致命问题（8 评论）|
| [#13787](https://github.com/QwenLM/qwen-code/issues/13787) | XML 恢复在大响应中重复前缀扫描 | P3 | 性能问题，影响多工具调用延迟（6 评论）|
| [#14114](https://github.com/QwenLM/qwen-code/issues/14114) | ACP session 不广播 MCP 延迟发现的工具 | **P1** | 影响 ACP 模式下 MCP 工具可用性（4 评论）|
| [#14116](https://github.com/QwenLM/qwen-code/issues/14116) | Managed Agent wake input 在 Harness 崩溃后丢失 | **P1** | 守护进程场景下唤醒输入未被执行（3 评论）|
| [#14112](https://github.com/QwenLM/qwen-code/issues/14112) | vLLM 后端 100% 400 错误 | P2 | 缺 `parameters` 字段 + 不支持 `tool_choice:"required"`（3 评论）|
| [#14115](https://github.com/QwenLM/qwen-code/issues/14115) | Bodyless 400 错误无诊断信息 | P2 | 错误日志缺失 `x-request-id`，排障困难（4 评论）|
| [#14062](https://github.com/QwenLM/qwen-code/issues/14062) | Hosted send_message 大小溢出致整 Turn 失败 | P2 | 模型拿不到可重试的拒绝信号（4 评论）|
| [#14063](https://github.com/QwenLM/qwen-code/issues/14063) | session_command 超时提示错误导致消息重复 | P2 | 误导用户重发，引发消息重复（4 评论）|

**社区反应：** P1 级 bug（#14114、#14116）反映出 ACP/MCP 集成与 Managed Agent 守护进程稳定性仍是当下最紧迫的痛点；OpenAI 兼容 Provider 生态问题（#14112、#14115、#14096、#14097）形成集群，开发者强烈要求改善错误诊断信息。

---

## 🛠 重要 PR 进展

| PR | 内容 | 意义 |
|---|---|---|
| [#14076](https://github.com/QwenLM/qwen-code/pull/14076) | feat(managed-agent): H4f 工作流任务公开取消 | 补全 F1 任务取消 API 最后一类（workflow）|
| [#14130](https://github.com/QwenLM/qwen-code/pull/14130) | fix(acp): drain late MCP reminders | 直接修复 #14114，ACP 启动后发现的 MCP 工具能被通知到模型 |
| [#14073](https://github.com/QwenLM/qwen-code/pull/14073) | feat(providers): QwenCloud 作为 /auth 首项 | 认证入口扩展，与 ModelStudio 共存，符合 #14025 产品决议 |
| [#14021](https://github.com/QwenLM/qwen-code/pull/14021) | fix(managed-agent): 结算未启动的后台派发 | Broker 端确定性证明无进程后立即收敛 child task |
| [#13219](https://github.com/QwenLM/qwen-code/pull/13219) | fix(managed-agent): 重试循环设终态 | 异步重试链增加预算/终态，避免永久卡死 |
| [#13816](https://github.com/QwenLM/qwen-code/pull/13816) | fix(managed-agent): 工具 Turn recovery-blocked 时归还 Workspace 挂载 | 细粒度 broker 内部释放 `managed_workspace_execution_lease` |
| [#14124](https://github.com/QwenLM/qwen-code/pull/14124) | fix(managed-agent): OSS 捕获预算接入 Hosted sessions | 给 Hosted 链路加运行成本护栏 |
| [#13642](https://github.com/QwenLM/qwen-code/pull/13642) | feat(runtime-broker): 终端 JDBC 历史有界保留 | 在 32 表基线上加可选清理，避免长期膨胀 |
| [#13713](https://github.com/QwenLM/qwen-code/pull/13713) | fix(cli): 工作区只能关闭自动更新 | 安全收紧，`enableAutoUpdate` 工作区写权限收敛 |
| [#14071](https://github.com/QwenLM/qwen-code/pull/14071) | feat(web-shell): 显示实时 trajectory 执行 | Web Shell 中轨迹面板可折叠、可识别 live/recorded 执行 |

---

## 📈 功能需求趋势

从近期 feature-request 类型 Issue 提炼出社区最关注的几个方向：

1. **Managed Agent 多 Agent 平台能力**（占比最高）
   - Stage D7（#14122）、Stage F FG8-FG10 故障门禁（#14054）
   - 多进程故障注入、Broker 提供者变更测试（#13103）
   - Workflow 任务取消（#14076 已落地）

2. **OpenAI 兼容 Provider 生态完善**
   - vLLM/SGLang 上下文溢出识别（#14096、#14097）
   - 参数序列化兼容性、错误诊断（#14112、#14115）

3. **MCP 工具发现与会话管理**
   - ACP 延迟 MCP 工具广播（#14114，已修 #14130）
   - MCP stdio 长任务取消导致服务器死亡（#11272）
   - 文档完善：SerpApi 加入 Web Search MCP 列表（#13092）

4. **Web Shell 与 UI 体验增强**
   - 上下文用量详情面板（#14051，已关闭合并）
   - 实时 trajectory 执行展示（#14071 进行中）
   - 静态模式断字/换行边界处理（#14075）

5. **Token / 上下文管理**
   - SGLang/vLLM 溢出识别（#14096、#14097）
   - 工具加载成本 A/B（#12333）
   - Memory 自动回写去重（#14089）

6. **认证与 Provider 扩展**
   - QwenCloud 作为新认证入口（#14073）
   - Ink 7.0.3 类型导出回归（#14110）

---

## 💡 开发者关注点

通过聚类分析 Issue 与 PR 反馈，开发者最集中的诉求是：

- **错误可观测性**：多次出现"错误信息只有一行，没法定位"的抱怨（#14115、#14096、#14097、#14097），希望暴露 `x-request-id`、原始 response headers、OpenAI `errorResponse`，让上游 400 错误可被诊断和重试。
- **Managed Agent 守护进程韧性**：Hosted Harness 在跨进程崩溃/重启场景下，session 重连、wake input 不丢失、takeover 409 不浪费退避预算（#13847、#14116、#14070、#13838），是开发者最关心的"生产可用性"指标。
- **MCP 工具链路可靠性**：长任务取消、ACP 延迟发现、Channel 模式下不可恢复——开发者呼吁 stdio server 进程独立保护和 ACP 提醒机制（#11272、#14114）。
- **小细节被放大**：#14075 静态模式行尾丢字符、#11562 one-shot 提示回显给用户、#9305 VP 模式底部对齐——说明 CLI 终端体验的细节质量直接影响开发者日常使用。
- **构建/CI 透明度**：Ink 类型回归（#14110）、CVE 审计失败（#13078）、SDK Java CI 失败（#14126、#14072）反映出社区对**主分支稳定性**与**自动修复工单**流转效率的期待。
- **"Deferred 评审"模式常态化**：#14095、#14089、#14127 等 issue 来自 PR 评审的延期项，已成团队 review 节奏的可见副产品。

---

*数据范围：2026-10-13 ~ 2026-10-14，来源 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-14**

---

## 📌 今日速览

今日社区最核心的动态是 **v0.10.2 发布候选 PR #6968** 持续推进（端点作用域目录、分层定价、Claude 登录、Windows 兼容修复等），同时 0.10.2 的 Windows/macOS 发布关卡仍待最后合入。Windows 兼容性、DeepSeek/Claude 等多 provider 体验、TUI 长期运行性能是开发者讨论最密集的主题。

---

## 🚀 版本发布

过去 24 小时无新版本发布。**v0.10.2** 仍处于候选阶段，最新候选 PR 为 [#6968](https://github.com/Hmbown/Codewhale/pull/6968)（endpoint-scoped catalog + tiered pricing + 多项 Windows 修复）；发布进度可关注追踪 Issue [#6094](https://github.com/codewhale-hq/Codewhale/issues/6094)。

---

## 🔥 社区热点 Issues

| # | Issue | 关注点 | 链接 |
|---|---|---|---|
| 1 | **#5316** EPIC-005: CodeWhale TUI Crate Decomposition (umbrella) | TUI crate 大规模拆分重构，对应 FEAT-027 已交付 draft PR #6832，是当前最大的架构级工作 | [#5316](https://github.com/codewhale-hq/Codewhale/issues/5316) |
| 2 | **#6094** v0.10.2 patch release intake | 今日仍由 maintainer Hmbown 更新，0.10.2 未发布；Ubuntu/Windows/Lint 通过，macOS 与 Windows owner 恢复待完成 | [#6094](https://github.com/codewhale-hq/Codewhale/issues/6094) |
| 3 | **#6652** TUI 长时间运行后滚动卡顿（"果冻感"） | 复现简单（约 3 分钟），属用户感知极强的体验 bug，11 条评论追踪中 | [#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) |
| 4 | **#2323** 中文输入法未适配 | 早期 issue 但仍高频出现，影响中文用户体验（拼音泄漏、提示词未隐藏），相关修复列入 v0.10.2 候选 | [#2323](https://github.com/codewhale-hq/Codewhale/issues/2323) |
| 5 | **#6923** Gemini 429 错误应自动等待并重试 | 多 provider 容错需求，非简单 bug 而是改进请求 | [#6923](https://github.com/codewhale-hq/Codewhale/issues/6923) |
| 6 | **#6963** Windows runtime floor 拦截只读管道命令 | 0.10.2 发布前需解决的 Windows 权限策略问题，是 #6827 的后续 | [#6963](https://github.com/codewhale-hq/Codewhale/issues/6963) |
| 7 | **#6970** `/undo` 命令：文件已回滚但对话未撤销 | 重试多次仍失败，属严重可靠性缺陷 | [#6970](https://github.com/codewhale-hq/Codewhale/issues/6970) |
| 8 | **#6955** 超过 8 MiB 的会话无法恢复/分叉 | journal 撑爆 transport bound，错误信息未给出修复指引，UX 体验不佳 | [#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) |
| 9 | **#6972** DeepSeek key 在非激活 provider 下读回缺失 | root vs `[providers.deepseek]` 的 `auth_mode` marker 不一致，社区高度关注的 provider bug | [#6972](https://github.com/codewhale-hq/Codewhale/issues/6972) |
| 10 | **#6910** crates.io 10 MiB tarball 上限守卫 | 0.10.1 上传 HTTP 413 阻断 tui/cli 发布；今日已确认 29 个 crate 在 [6e72400](https://github.com/codewhale-hq/Codewhale/commit/6e72400bbb5182473e6971abcd18bd8953c2f4cc) 通过严格预检 | [#6910](https://github.com/codewhale-hq/Codewhale/issues/6910) |

---

## 🛠 重要 PR 进展

| # | PR | 说明 | 链接 |
|---|---|---|---|
| 1 | **#6968** 0.10.2 candidate: endpoint-scoped catalog + tiered pricing | **今日头号 PR**，囊括端点作用域目录、分层定价、Windows shell approval、模态输入、wheel capture、junction 处理、Claude 登录、限流措辞、巨型会话对话框、DeepSeek root key 修正 | [#6968](https://github.com/Hmbown/Codewhale/pull/6968) |
| 2 | **#6973** refactor(commands): portable config shapes (FEAT-028) | #5316 umbrella 下的关键一环，去除 `config` Slash Command Group 对 App/TUI 的具体依赖 | [#6973](https://github.com/Hmbown/Codewhale/pull/6973) |
| 3 | **#6959** feat(api): Runtime API 读写 workspace trust | 让非 TUI 客户端（VS Code 扩展）也能管理项目信任，是 IDE/扩展集成的关键能力 | [#6959](https://github.com/Hmbown/Codewhale/pull/6959) |
| 4 | **#6974** fix(config): DeepSeek root key 写入 api-key marker | 直接修复 #6972，使 DeepSeek key 持久化与其他 provider 行为一致 | [#6974](https://github.com/Hmbown/Codewhale/pull/6974) |
| 5 | **#6943** chore(tui): drop blanket `dead_code` allow in 5 modules | 对 #5587 的切片清理，让 `cargo check` 暴露真实代码状况（`worker_profile.rs` 中 allow 是陈旧残留） | [#6943](https://github.com/Hmbown/Codewhale/pull/6943) |
| 6 | **#6958** test(sessions): picker search 不再依赖 TempDir 名称 | 解决 macOS 上 session picker 测试偶发失败的稳定性问题 | [#6958](https://github.com/Hmbown/Codewhale/pull/6958) |
| 7 | **#6956** test(subagent): git worktree 移除失败不再视为测试失败 | 子代理测试稳定性修复，已 merge（独立 PR bbae5043） | [#6956](https://github.com/Hmbown/Codewhale/pull/6956) |
| 8 | **#6966** test(subagent): 三个短审批 bound 放宽到 30 s | Windows CI 上 `registry.execute` 多次超过 250 ms 的稳定性兜底 | [#6966](https://github.com/Hmbown/Codewhale/pull/6966) |
| 9 | **#6975** test(tui): 15 个 loopback fixture 避开 ambient proxy | 继 #6971 之后覆盖剩余被本地代理影响的 MCP/TUI 测试 | [#6975](https://github.com/Hmbown/Codewhale/pull/6975) |
| 10 | **#6949** fix(subagent): state-path 检查在 state root 重定位时重定根 | 修复 `.codewhale` 作为 junction（跨卷保存 state）时子代理在 step 0 即失败的 Windows 关键路径问题 | [#6949](https://github.com/Hmbown/Codewhale/pull/6949) |

---

## 📈 功能需求趋势

从过去 24 小时活跃的 Issue 中可提炼出以下方向：

1. **多 Provider 体验完善**  
   Claude OAuth 登录（#6932）、DeepSeek key 持久化（#6972）、Gemini 429 容错（#6923），跨 provider 一致性成为最显著的诉求。

2. **Windows 兼容性收敛**  
   Windows 10 1607 加载失败（#6953 → #6962 修复 + 后续守卫）、runtime floor 误拦截只读命令（#6963）、junction state 路径（#6949 修复）、shell approval 中的 `&` 误判（#6929 修复）。

3. **IDE/外部客户端集成**  
   Runtime API 暴露 workspace trust（#6959），指向 VS Code 等外部扩展对 TUI 能力的复用诉求。

4. **会话/恢复可靠性**  
   >8 MiB 会话无法 resume（#6955）、含 sub-agent handoff 的会话拒绝 resume（#6954）、`/undo` 仅回滚文件不回滚对话（#6970）。

5. **经济性/性能调优**  
   Deferred-toolbox 驱逐在 prompt cache 下的成本盲区（#6969），属于较深度的 provider 经济学讨论。

6. **本地化与多语言 AGENTS**  
   中文输入法适配（#2323）、`codewhale init` 按当前语言生成 AGENTS.md（#6964）。

---

## 💬 开发者关注点

- **Windows 是当前最大痛点集中区**：从基础 ABI 兼容性（`DeriveCapabilitySidsFromName`）、shell 解析（`&` 误判）、权限面（runtime floor），到 junction 路径，几乎每个大版本都有 Windows-only bug 涌入；社区已通过 #6962 提议建立 release gate。
- **CI 稳定性 vs 严格测试**：维护者 Lstarsky0 连续提交 #6956/#6966/#6967/#6971/#6975，集中处理 windows-latest、ambient proxy、Mac TempDir 等环境敏感性 flake，表明 CI 已成为工程师反馈密度最高的话题。
- **Provider 行为差异的"看起来像别的问题"的失败模式**：#6889 由 AICraft 提出，列出了三种典型被误诊的故障——冷启动慢、429/限流、错位 URL 模板，呼吁更可读的诊断输出。
- **v0.10.2 发布通道阻塞感明显**：#6094 由 Hmbown 自己每日跟踪，多个 gating item（macOS、crates.io 容量、Windows owner recovery）尚未合拢，社区对该版本的关注度持续高位。

---

*数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（实际工程仓库为 codewhale-hq/Codewhale），采集窗口 2026-10-13 ~ 2026-10-14 UTC。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*