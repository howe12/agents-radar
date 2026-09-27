# AI CLI 工具社区动态日报 2026-09-27

> 生成时间: 2026-09-27 03:05 UTC | 覆盖工具: 9 个

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

**报告日期：** 2026-09-27
**样本范围：** 9 个主流 AI CLI 工具的社区动态
**数据维度：** Issues、PR、Release、社区关注度

---

## 一、生态全景

当前 AI CLI 工具生态已从"功能堆叠期"全面进入"稳定性收敛与精细化打磨期"——9 个被监测工具中有 7 个当日无正式 Release，但 OpenAI Codex 单日连发 6 个 Rust alpha 版本形成鲜明对比，说明该赛道**头部项目迭代节奏分化明显**。社区反馈高度聚焦于**三大共性痛点**：长会话/恢复的鲁棒性、跨平台（尤其是 Windows）稳定性、MCP 协议生态成熟度。与此同时，子代理治理、Provider 兼容性、Trust & Credentials 等议题正成为新一代工具的差异化竞争点。

---

## 二、各工具活跃度对比

| 工具 | Issues 数 | PR 数 | Release 情况 | 整体活跃度 |
|------|-----------|-------|--------------|------------|
| **OpenAI Codex** | ~50（精选 10） | **23** | **6 个 alpha 版本**（0.158/0.159 双线并行） | 🔥🔥🔥🔥🔥 极高 |
| **Qwen Code** | ~50（精选 10） | 10+ | 1 个 nightly（v0.24.6） | 🔥🔥🔥🔥 高 |
| **OpenCode** | ~50（精选 10） | 10+（均 OPEN） | 无 | 🔥🔥🔥🔥 高 |
| **DeepSeek TUI (Codewhale)** | 34（精选 10） | **20+** | 无（0.10.1 冲刺期） | 🔥🔥🔥🔥 高 |
| **Pi** | ~30（精选 10） | 10+ | 无 | 🔥🔥🔥 中高 |
| **Claude Code** | 30（精选 10） | 2 | 无 | 🔥🔥🔥 中高 |
| **Gemini CLI** | ~25（精选 10） | 10+ | 无 | 🔥🔥🔥 中高 |
| **GitHub Copilot CLI** | ~30（精选 10） | **0** | 无 | 🔥🔥 中 |
| **Kimi Code CLI** | **0** | **0** | 无 | ⚪ 静默 |

**关键观察：**
- OpenAI Codex 的 Release 密度（24h 内 6 个 alpha）显著高于其他工具，进入高频快速迭代窗口
- DeepSeek TUI 与 OpenCode 的 PR/Issue 比均偏高（PR>20、Issue<50），反映**维护者主动收敛 backlog**
- GitHub Copilot CLI 与 Kimi Code CLI 当日几乎无活动，社区动能明显减弱

---

## 三、共同关注的功能方向

### 3.1 🔌 MCP 协议生态成熟化（6/9 工具关注）

| 工具 | 具体诉求 |
|------|----------|
| Claude Code | Roblox Studio MCP 字段校验失败（#97319）、双 content 返回格式兼容（#79944） |
| OpenCode | 子进程孤儿（#50363）、stderr 黑洞（#35719）、Schema 净化（#47542）、env 静默丢失（#36434） |
| Gemini CLI | Browser Agent settings.json 覆盖失效（#22267） |
| Pi | Anthropic strict tool use 校验关键字（#9953） |
| Qwen Code | MCP server 规则授权碰撞（#12531）、Apps 范围化调用（#12258） |
| GitHub Copilot CLI | FastMCP 兼容性问题（#4370）、MCP 连接超时缩短（#4753） |

**共识信号**：MCP 已从"能否跑通"演进到"可配置、可恢复、可调试"的工程化深水区。

### 3.2 🪟 Windows 平台稳定性（5/9 工具关注）

| 工具 | 核心痛点 |
|------|----------|
| OpenAI Codex | 子进程控制台闪烁（50 👍）、首轮后无法发送跟进（#45626）、白屏（#48313） |
| Claude Code | PowerShell here-string 误报（#73882）、FreeBSD 版本锁死（#97063） |
| Pi | Windows 运行路径优先级未定型（#7547，68 评论） |
| DeepSeek TUI | 0.10.0 多行粘贴回归（#6427） |
| Qwen Code | `/update` 升级静默失败（#12727）、陈旧标记阻塞（#12802） |

**共识信号**：Windows 仍是 AI CLI 工具的"质量洼地"，从 PowerShell 转义、终端协议、升级链路到子系统启动全链条均有缺陷。

### 3.3 🧠 长会话/恢复鲁棒性（5/9 工具关注）

| 工具 | 核心痛点 |
|------|----------|
| GitHub Copilot CLI | V8 OOM 崩溃（#4664/#4725）、断电导致会话文件损坏（#1864） |
| OpenCode | 60 分钟不活动硬性截断（#51573）、WebSocket 空闲超时（#50565） |
| Pi | 缺 `cost` 字段导致 Footer 崩溃（#10092）、空 toolCallId 中毒死循环 |
| Gemini CLI | state.json 非原子写入（#29402 修复中） |
| Claude Code | `/goal` Stop hook 无限重触发（#94041） |

**共识信号**：会话持久化的"写盘一致性 + 恢复健壮性"成为新的可靠性基准。

### 3.4 🛡️ 安全分类器精度（4/9 工具关注）

| 工具 | 核心痛点 |
|------|----------|
| Claude Code | Opus 5.5 对 "hi" 类空输入即误判（#97560/#97557） |
| GitHub Copilot CLI | 计划模式对只读命令误拦截（#4160） |
| Gemini CLI | 缺乏对 `git reset --force` 类破坏性命令的抑制（#22672） |
| DeepSeek TUI | Computer-use 工具跨终端安全事件（#6298） |

**共识信号**："基于关键字的启发式安全分类器"已无法满足企业级场景，需向"意图理解 + 上下文感知"演进。

### 3.5 🤖 子代理（Subagent）治理（4/9 工具关注）

| 工具 | 核心痛点 |
|------|----------|
| Gemini CLI | MAX_TURNS 后仍上报成功（#22323）、无限挂起（#21409）、扩展不被自动调用（#21968） |
| Claude Code | Connector 多账户场景未被支持（#27302，392 👍） |
| Qwen Code | 子代理 headless 调用能力缺失（#12803） |
| DeepSeek TUI | 后台 shell 父进程死亡清理、session_id 重生（#6654/#6659） |

**共识信号**：单代理 → 多代理编排的过渡中，"状态可信度"和"取消/中断信号传播"是工程化最大短板。

### 3.6 🌐 Provider 兼容性（3/9 工具关注）

| 工具 | 核心痛点 |
|------|----------|
| Pi | Mistral/GLM reasoning_effort 丢失（#9678）、Anthropic strict tool use（#9953）、OpenRouter 价格偏差（#9980） |
| OpenAI Codex | Computer Use SIGTRAP 仍 OPEN（#43573） |
| Qwen Code | 多 API Key 模型选择异常（#12760） |

**共识信号**：BYOK（自带密钥）与第三方 Provider 接入正从"能用"转向"算费透明 + 协议严格正确"。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | Connector 生态、企业级安全 | 跨组织开发者、企业团队 | 强 Connector + 严格安全分类器，但分类器误判成新痛点 |
| **OpenAI Codex** | 高频迭代、Windows/Linux 桌面端 | 桌面重度用户、Power User | Rust 重写、TUI 优先、快速 alpha 节奏，26.924 系列稳定性挑战 |
| **Gemini CLI** | 子代理编排、Auto Memory | Agent 开发者、研究型用户 | P1 Issue 半数 maintainer-only、Google 内部深度参与 |
| **GitHub Copilot CLI** | GitHub 工作流集成、BYOK | GitHub 生态重度用户、企业内开发 | 会话管理 + MCP 集成为主线，但迭代节奏放缓 |
| **OpenCode** | Desktop 体验、多模型工作流 | 多模型工作流开发者 | v2 重构期，批量关闭历史 Issue，社区维护高效 |
| **Pi** | Provider 兼容、扩展性、Codemode | 扩展作者、追求"边缘协议正确性"的开发者 | 大型特性 PR 集中评审（#10040）、可观测性投入 |
| **Qwen Code** | Managed Agent 双引擎架构、CI/CD | 自动化场景、企业级托管部署 | Stage B→D 分阶段切片、Web Shell + ACP Bridge |
| **DeepSeek TUI (Codewhale)** | 信任/凭证、会话权威性、跨表面宠物 | 重度交互用户、研究/创意场景 | 单日 20+ PR 集中推送、0.10.1 冲刺节奏 |
| **Kimi Code CLI** | （当日无信号） | — | — |

**关键差异点：**
- **迭代策略**：OpenAI Codex 走"高频 alpha"路线；OpenCode/DeepSeek TUI 走"批量修复 + 集中合并"路线；Claude Code/GitHub Copilot CLI 走"慢迭代 + 长期沉淀"路线
- **架构演进**：Qwen Code（双引擎）、OpenCode（v2 重构）、Pi（Codemode+MCP）都在进行架构级升级
- **企业级取向**：Claude Code、Qwen Code、GitHub Copilot CLI 关注合规与多账户；OpenCode、Pi 更贴近多模型/扩展生态

---

## 五、社区热度与成熟度评估

### 🔥 第一梯队：高度活跃 + 快速迭代
- **OpenAI Codex**：24h 内 6 个 alpha + 23 PR，社区讨论聚焦 26.924 系列回归。处于**功能扩张与稳定性震荡并存**的关键期。
- **DeepSeek TUI**：20+ PR 单日推送，0.10.1 进入合并密集期。**维护者响应速度极快**，但 0.10.0 回归风险提示快速节奏下的 QA 压力。
- **Qwen Code**：Managed Agent 多切片并行推进，CI 基础设施持续加固。**架构演进最系统化**。

### 🔥 第二梯队：活跃收敛期
- **OpenCode**：28 个长期 Issue 单日批量关闭，v2 重构路径清晰。**社区维护高效但 PR 全部 OPEN**，反映评审资源吃紧。
- **Claude Code**：无 Release 但 PR 集中在 diff 面板一致性，**进入精细化打磨阶段**。
- **Gemini CLI**：Auto Memory + 子代理两大方向并行，P1 维护者主导。**核心团队介入深**。
- **Pi**：本期最重磅 PR（Codemode + MCP）进入评审，Provider 兼容性讨论密集。**扩展生态活跃**。

### 📉 第三梯队：动能减弱
- **GitHub Copilot CLI**：当日 0 PR、Issue 多为已关闭历史项。**关键稳定性问题（#4725 OOM、#2644 文本选择）仍 OPEN**。
- **Kimi Code CLI**：完全静默。需关注是否进入维护暂停或战略调整。

---

## 六、值得关注的趋势信号

### 📊 趋势 1：从"模型能力竞赛"转向"基础设施可靠性竞赛"
几乎所有工具的最热门 Issue 都集中在崩溃、卡死、OOM、会话损坏等**基础设施问题**，而非模型输出质量问题。这预示着 AI CLI 已度过"尝鲜期"，进入"生产可用性"决胜阶段。

**对开发者的参考价值：** 选型时应优先评估**会话持久化机制、崩溃恢复能力、跨平台稳定性**，而非单纯对比模型基准分。

### 📊 趋势 2：MCP 协议从"技术亮点"变成"工程债"
6/9 工具在 MCP 上遇到具体问题（Schema 拒收、子进程孤儿、双 content 格式兼容），反映 MCP 生态的"严格规范 vs 互操作性"张力。

**对开发者的参考价值：** 自研 MCP server 时应关注 Anthropic root combinator 限制、双返回格式兼容、stderr 透传等"边界规范"。

### 📊 趋势 3：架构级重构成为头部工具的共同选择
OpenCode（v2 重构）、Qwen Code（双引擎）、Pi（Codemode+MCP）都在进行**架构级升级**，单点修复已无法满足需求。

**对开发者的参考价值：** 关注这些项目的重构边界与迁移成本，决定是否在生产环境跟进。

### 📊 趋势 4："会话权威性"成为新的产品差异化点
DeepSeek TUI（#6144 系列 Session 文档唯一权威）、OpenCode（流式保持活跃 PR #51573）、Pi（缺 cost 字段崩溃修复）都在围绕"会话生命周期"做深度文章。

**对开发者的参考价值：** 长时间运行/跨设备的 AI CLI 工作流越来越重要，会话迁移、断点续传、跨端同步将成为标配。

### 📊 趋势 5：Trust & Credentials 议题崛起
DeepSeek TUI 单日推送的"凭证静态掩码、诚实审批超时、工作区信任"（#6601）以及 Qwen Code 的多 API Key 选择问题（#12760），反映**企业级采用对凭证管理的硬性要求**。

**对开发者的参考价值：** 构建企业内部 AI CLI 工具时，应将凭证脱敏、mid-session 输入、多 Provider 路由视为一等公民功能。

### 📊 趋势 6：TUI 体验的"反过度改造"呼声
OpenAI Codex 的"TUI 复制语义回归"、Pi 的"扩展 console.error 破坏渲染"、DeepSeek TUI 的"果冻感"滚动问题，共同指向**用户希望保留终端原生交互，而非被 AI CLI 完全接管**。

**对开发者的参考价值：** 在 AI CLI 设计中应提供"原生模式开关"（如 `copy_on_select` 可配置），尊重用户既有终端习惯。

---

## 📌 总结与建议

| 角色 | 建议 |
|------|------|
| **技术决策者** | 关注 OpenCode、Qwen Code 的架构演进，评估其长期可持续性；OpenAI Codex 适合愿意跟随高频迭代的团队；Claude Code 与 GitHub Copilot CLI 适合追求稳定的企业环境 |
| **AI CLI 开发者** | 优先攻克**会话持久化原子性**、**MCP Schema 兼容性**、**Windows 子进程控制台抑制**三大共性痛点，任何一项都具备跨项目复用价值 |
| **扩展作者** | Pi 的 Codemode+MCP（#10040）值得密切跟踪；`setMessageDecorator`、`before_agent_start` 等钩子设计是行业参考方向 |
| **企业用户** | 关注 Claude Code（#27302 Connector 多账户）、Qwen Code（Managed Agent）的企业级能力成熟度；短期建议先评估 GitHub Copilot CLI 的会话稳定性再决定是否升级 |

> **生态健康度总评：** ⭐⭐⭐⭐（4/5）—— 头部项目迭代稳健、长尾工具出现分化、整体从"功能堆叠"转入"精细化与可靠性"的关键阶段。

---

*报告基于 9 个 AI CLI 工具在 2026-09-27 的公开社区动态汇总生成，建议结合各项目具体 PR diff 与 Issue 时间线持续追踪。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-09-27 | **样本**：50 条 PR + 50 条 Issue

> ⚠️ **数据说明**：本次拉取的 PR 评论数均显示为 undefined，因此排行综合采用「PR 存活时长 × 更新活跃度 × 功能影响力 × 解决关键痛点」四维度加权评估。

---

## 一、热门 Skills 排行

| # | PR | Skill / 主题 | 状态 | 关注度信号 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复**（Windows 兼容、运行时失败处理） | OPEN | 存活 3.5 个月，多次迭代 |
| 2 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** —— Python 复古游戏开发 | OPEN | 存活 6.5 个月，覆盖 headless 测试+帧检视 |
| 3 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** —— 视觉驱动 E2E 测试 | OPEN | 存活近 6 个月，零代码测试生成 |
| 4 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** —— 生成文档的排版质量控制 | OPEN | 解决孤儿/寡妇字等通用痛点 |
| 5 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | OPEN | 元能力（meta-skill），五维质量评估 |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** —— 全栈测试方法论 | OPEN | 存活 6 个月，覆盖 Trophy 模型 |
| 7 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder** MCP≥2 兼容修复 | OPEN | 近期高频更新（9/26），生态关键 |
| 8 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** —— 智能合约审计+TON 区块链存证 | OPEN | Web3 新场景 |

### 重点解读

🥇 **#1298 skill-creator 修复** 是最被低估的关键 PR。它直击 skill 开发者痛点：Windows `select()` 失败、子进程探针互踩、运行时失败误判为「非触发」。一条 PR 同时解决 3 个平台兼容性问题，说明 **skill 工具链的成熟度成为社区最大瓶颈**。

🥈 **#525 / #822** 长期悬而未决，反映官方审查偏保守——长期存活 = 反复打磨但迟迟未合，社区实际上在等这些「场景化 Skill」落地。

---

## 二、社区需求趋势（Issues 分析）

### 🔐 安全与信任（最热议题）
- **[#492](https://github.com/anthropics/skills/issues/492)** Community skills 冒充 `anthropic/` 命名空间 → **43 评论（最热 Issue）**
- **[#1394](https://github.com/anthropics/skills/issues/1394)** eval-viewer `escapeHtml` XSS 漏洞
- **[#1175](https://github.com/anthropics/skills/issues/1175)** SharePoint 文档的权限上下文注入风险

### 🏢 企业级协作与分发
- **[#228](https://github.com/anthropics/skills/issues/228)** 组织内 Skill 共享 → **16 评论 / 8 👍（高赞）**
- **[#189](https://github.com/anthropics/skills/issues/189)** `document-skills` 与 `example-skills` 插件内容重复 → **9 👍**

### 🧪 评估与可观测性
- **[#556](https://github.com/anthropics/skills/issues/556)** `run_eval.py` 触发率 0% → **12 评论 / 7 👍**
- **[#1390](https://github.com/anthropics/skills/issues/1390)** mcp-builder 评估永远 0/N

### 🛠️ 工具链工程化
- **[#202 (CLOSED)](https://github.com/anthropics/skills/issues/202)** skill-creator 应更新到最佳实践 → 8 评论
- **[#1487](https://github.com/anthropics/skills/issues/1487)** `claude-api` skill 单次注入 156k token 撑爆上下文

### 🧠 新方向提案
- **[#1329](https://github.com/anthropics/skills/issues/1329)** compact-memory（符号化压缩 Agent 状态）→ 9 评论
- **[#412 (CLOSED)](https://github.com/anthropics/skills/issues/412)** agent-governance（治理模式）→ 6 评论
- **[#1385](https://github.com/anthropics/skills/issues/1385)** 推理质量门

---

# Claude Code 社区动态日报

**日期：2026-09-27**
**数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)**

---

## 📌 今日速览

今日社区焦点集中在 **Opus 5.5 模型回归问题** 与 **多 Connector 账户支持**两大议题。最热门 Issue #27302（多 Connector 账户支持）以 257 条评论和 392 次点赞持续领跑；与此同时，多位开发者集中反馈 Opus 5.5 出现"过度安全分类器拦截"与"任务焦点丢失"问题，安全过滤器误判已成为社区核心痛点。无新版本发布，但 diff 面板相关 PR 取得进展。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 关键信息 | 社区反应 |
|---|-------|----------|----------|
| 1 | **[#27302](https://github.com/anthropics/claude-code/issues/27302)** — 支持同一 Connector 的多账户切换 | 用户希望 claude.ai/code 能同时配置同一连接器（如 GitHub）的多个账户，便于在不同组织/工作空间间切换 | 💬 257 / 👍 392（热度榜首）|
| 2 | **[#65961](https://github.com/anthropics/claude-code/issues/65961)** — Claude 默认输出过度啰嗦的代码注释 | 即使明确指示停止，模型仍持续生成 verbose 注释，干扰代码可读性 | 💬 38 / 👍 247 |
| 3 | **[#61682](https://github.com/anthropics/claude-code/issues/61682)** — GitHub 连接器在 Windows Cowork 中显示"已连接"但无工具 | GitHub connector 在 Cowork (Win11) 下"connected"状态不暴露任何 MCP 工具，影响核心功能 | 💬 33 / 👍 25 |
| 4 | **[#97319](https://github.com/anthropics/claude-code/issues/97319)** — MCP 客户端对 Roblox Studio MCP 响应严格校验失败 | 因 `ttlMs/cacheScope` 字段非标准导致合法 `tools/list` 被拒，暴露出 MCP 协议兼容性短板 | 💬 7 / 👍 4 |
| 5 | **[#97117](https://github.com/anthropics/claude-code/issues/97117)** — Opus 5.5 严重 scope creep 与任务焦点退化 | 从 Opus 4.6 切到 5.5 后出现明显范围蔓延，需回退 4.6 修复 | 💬 5 / 👍 0 |
| 6 | **[#80576](https://github.com/anthropics/claude-code/issues/80576)** — VS Code 扩展 AskUserQuestion 组件遮挡前置文本 | 交互式问题组件出现时直接覆盖了 Claude 的解释性文本，UX 体验受损 | 💬 3 / 👍 8 |
| 7 | **[#79944](https://github.com/anthropics/claude-code/issues/79944)** — MCP 工具同时返回 structuredContent 与文本时文本被静默丢弃 | MCP 协议双返回格式下，文本块被丢弃，仅展示元数据 | 💬 3 / 👍 3 |
| 8 | **[#94041](https://github.com/anthropics/claude-code/issues/94041)** — `/goal` Stop hook 无限重触发且无法确认 | 原生 hook 在达成条件后仍持续 fire，仅靠内置重复块防护终止 | 💬 3 / 👍 1 |
| 9 | **[#73882](https://github.com/anthropics/claude-code/issues/73882)** — PowerShell 安全守卫对 here-string 误报 | 含 `/requirements.txt` 等路径的 here-string 被误判为 `Remove-Item` 危险命令 | 💬 3 / 👍 0 |
| 10 | **[#97063](https://github.com/anthropics/claude-code/issues/97063)** — FreeBSD 上 2.1.278+ 版本锁死 | 任何高于 2.1.278 的版本在 FreeBSD 启动即卡住，BSD 用户被阻断在更新 | 💬 3 / 👍 0 |

> **补充关注：** #97560、#97557、#94086 三条均在 24 小时内创建，均为 Opus 5.5 / Opus 4.8 安全分类器对正常输入误判（"hi" 即触发），呈现明显的趋势性问题。

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | **[#95587](https://github.com/anthropics/claude-code/pull/95587)** — diff 面板与内置面板行为对齐 | 修复三类差异：恢复/继续会话的首次编辑立即打开面板；`/clear` 后保留面板；会话行起始读取由引擎派发统一 | ✅ 已合并（CLOSED）|
| 2 | **[#94847](https://github.com/anthropics/claude-code/pull/94847)** — diff 面板智能自动打开 | 仅在首个 edit 有真实文件可列时才打开面板，避免工作树外、忽略文件等场景出现空面板 | 🔓 待合并（OPEN）|

> 今日 PR 数量较少（2 条），但均聚焦于 diff 面板一致性体验，开发者对终端编辑器与 diff 面板的 UX 联动关注度提升。

---

## 📈 功能需求趋势

从今日活跃 Issues 提炼社区关注方向：

| 方向 | 热度 | 代表性 Issue |
|------|------|--------------|
| **🔌 Connector / 集成能力** | ⭐⭐⭐⭐⭐ | #27302、#61682、#97556、#97555、#97558 |
| **🛡 安全分类器精度** | ⭐⭐⭐⭐⭐ | #97560、#97557、#94086、#97559 |
| **🤖 模型能力与一致性** | ⭐⭐⭐⭐ | #97117、#65961、#97560 |
| **🧩 MCP 协议兼容** | ⭐⭐⭐⭐ | #97319、#79944 |
| **💻 VS Code 扩展体验** | ⭐⭐⭐ | #80576、#88114、#93827、#97561 |
| **🖥 Desktop 应用稳定性** | ⭐⭐⭐ | #97530、#97255 |
| **⚙️ 沙箱与权限系统** | ⭐⭐⭐ | #84563、#97266、#90519、#75330 |
| **💰 成本与配额可见性** | ⭐⭐ | #95938、#89865 |
| **🪟 跨平台支持** | ⭐⭐ | #97063（FreeBSD）、#73882（PowerShell） |

---

## 💬 开发者关注点

**1. 安全分类器成为首要痛点**
Opus 5.5/4.8 上线后，安全过滤器对合法操作（甚至 "hi" 这类空输入）的误判集中爆发。开发者明确指出：这种"过度防御"直接阻断了授权工作的执行，**session-halted** 级别问题严重消耗生产力。这是当前最迫切需要 Anthropic 回应的方向。

**2. Connector 多账户场景被忽视**
GitHub 等连接器目前仅支持单账户绑定，对于跨组织开发者是结构性限制。Issue #27302 的 392 点赞反映了企业用户对该功能的强烈刚需。

**3. MCP 协议实现存在兼容盲点**
Roblox Studio、自研 MCP server 等三方实现因字段命名（如 `ttlMs`）或双 content 返回格式与 Claude Code MCP 客户端冲突，提示 Anthropic 在协议严格性 vs 互操作性之间需更明确策略。

**4. Windows / 桌面端仍是质量洼地**
今日更新的 Issue 中 Windows 相关条目最多（桌面应用崩溃、VS Code 扩展问题、PowerShell 误报、WSL2 沙箱），平台稳定性优先级需提升。

**5. diff/会话恢复 UX 细节逐步完善**
虽关注度不如功能需求，但 PR #95587、#94847 显示团队在持续打磨 diff 面板与会话生命周期一致性，反映项目进入精细化阶段。

**6. 成本透明度诉求**
#89865（Opus agent 355 次意外展开）、#95938（精确会话重置计时）显示开发者希望对算力消耗有更细粒度控制。

---

*报告生成时间：2026-09-27｜数据窗口：过去 24 小时｜统计样本：30 条高活跃 Issues + 2 条 PR*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-27 · 数据来源：github.com/openai/codex**

---

## 📌 今日速览

今日 Codex 仓库进入高频迭代窗口，24 小时内连发 6 个 Rust alpha 版本（0.158.0 / 0.159.0 双线并行），社区反馈高度集中在 **Windows 与 Linux 桌面端的稳定性问题**——特别是新版 26.924 系列引发的"任务卡死"、"控制台窗口闪烁"、"白屏"等连锁回归；同时 TUI 交互、Markdown/Mermaid 渲染、剪贴板与终端滚动行为成为开发者最集中的吐槽点。

---

## 🚀 版本发布

过去 24 小时发布了 **6 个 Rust alpha 版本**，节奏明显加快：

| 版本 | 类型 | 备注 |
|---|---|---|
| `rust-v0.159.0-alpha.7` | alpha | 0.159 收尾迭代 |
| `rust-v0.159.0-alpha.6` | alpha | 同上 |
| `rust-v0.159.0-alpha.5` | alpha | 同上 |
| `rust-v0.159.0-alpha.4` | alpha | 同上 |
| `rust-v0.158.0-alpha.2.1` | alpha | 补丁 |
| `rust-v0.158.0-alpha.15.2` | alpha | 补丁 |

> 说明：所有 release notes 均为简短占位（"Release 0.159.0-alpha.7" 等），建议结合下文的 PR diff 推断变更内容，重点修复集中在 Windows 子进程控制台抑制、TUI 拷贝、签名在线重试等。

---

## 🔥 社区热点 Issues（精选 10 条）

> 入选标准：评论活跃度 + 👍数，反映社区真实痛点与共识程度。

### 1. [#45626](https://github.com/openai/codex/issues/45626) Windows 桌面端首轮后无法发送跟进消息
- **平台/标签**：Windows Desktop 26.908.70816 · bug · app/app-server
- **热度**：💬 33 / 👍 6
- **摘要**：完成第一轮对话后，发送按钮永久变灰，新旧会话均受影响；CLI 不受影响。
- **为何重要**：高频回归 + 影响 Windows 全量用户，疑似 app-server 状态机未正确释放 turn。

### 2. [#48074](https://github.com/openai/codex/issues/48074) 安装 Codex 守护进程后终端窗口反复闪烁
- **平台/标签**：Windows 11 · codex-cli 0.157.0 · bug · CLI/app-server
- **热度**：💬 29 / 👍 **50**（今日最高）
- **摘要**：每次请求都会弹出可见控制台窗口。
- **为何重要**：50 个 👍 说明大量 Windows 用户在升级后被同一现象困扰，与多条相关 issue 形成"控制台闪烁"集群。

### 3. [#48208](https://github.com/openai/codex/issues/48208) Linux 桌面端更新后 UI 永久卡加载
- **平台/标签**：Ubuntu 24.04 · Linux Desktop · bug · app/app-server
- **热度**：💬 22 / 👍 15
- **摘要**：`thread_hydration` 在 120s 超时，app-server 自身仍存活。
- **为何重要**：与 #48189 / #48419 一起构成 Linux 26.924 系列回归三连击。

### 4. [#48189](https://github.com/openai/codex/issues/48189) Linux 26.924.20706 永久卡在 "Starting your task"
- **平台/标签**：Linux Mint X11 · Linux Desktop · bug · app/app-server
- **热度**：💬 16 / 👍 30
- **摘要**：从 26.917.71314 升级到 26.924.20706 后，本地任务无法启动。
- **为何重要**：已有回滚路径（rollback 到 26.917.71314），社区可短期自救。

### 5. [#48313](https://github.com/openai/codex/issues/48313) Windows 26.924.1866.0 启动后永久白屏
- **平台/标签**：Windows · MSIX · bug · app
- **热度**：💬 12 / 👍 1
- **摘要**：原生窗口框架存在但客户区空白，疑似渲染层未初始化。
- **为何重要**：与 #48463、#48592 共同构成 26.924 桌面端"加载失败"族。

### 6. [#48277](https://github.com/openai/codex/issues/48277) CLI 更新后持续弹出约 20 个终端窗口
- **平台/标签**：Windows · CLI · bug
- **热度**：💬 11 / 👍 3
- **摘要**：用户手动关闭时新窗口仍在生成。
- **为何重要**：暴露守护进程未正确抑制 detached 子进程的 console，与 PR #48483 修复直接相关。

### 7. [#47996](https://github.com/openai/codex/issues/47996) macOS CLI 0.157.0 在 iTerm2 中 ⌘C 无法复制选中文本
- **平台/标签**：macOS · CLI 0.157.0 · TUI · bug
- **热度**：💬 10 / 👍 8
- **摘要**：选区复制失效，疑似 TUI 自定义拷贝优先级抢占系统快捷键。
- **为何重要**：与 #48139、#48542、#48549 等多条拷贝/滚动回归形成"TUI 体验倒退"主线。

### 8. [#48422](https://github.com/openai/codex/issues/48422) Windows shell 子进程每次都闪出可见控制台
- **平台/标签**：Windows · codex-cli 0.157.1 · bug · CLI/app-server
- **热度**：💬 9 / 👍 4
- **摘要**：shell 子进程未携带 `CREATE_NO_WINDOW`。
- **为何重要**：是 PR #48483 "Prevent console windows for piped Windows child processes" 直接修复的目标。

### 9. [#45596](https://github.com/openai/codex/issues/45596) Work helpers 占用镜像目录后 ChatGPT 项目镜像同步失败
- **平台/标签**：Windows · Codex Desktop 26.908.9136.0 · bug · app
- **热度**：💬 10 / 👍 0
- **摘要**：Work helpers 进程长期持有目录锁。
- **为何重要**：影响 ChatGPT ↔ 本地 Codex 同步闭环，是少数"深度集成类"issue。

### 10. [#47577](https://github.com/openai/codex/issues/47577) @codex review 静默忽略来自 fork 的 PR
- **平台/标签**：GitHub · code-review · codex-web · bug
- **热度**：💬 4 / 👍 13
- **摘要**：2026-09-20 之前 fork PR 可被评审，之后被忽略；同仓库分支 PR 正常。
- **为何重要**：影响外部贡献者与开源协作流程，争议性高。

---

## 🛠 重要 PR 进展（精选 10 条）

> 所有 PR 均由 `copyberry[bot]`（推测为 OpenAI 内部自动化账号）合入，所有 PR 状态均为 CLOSED，表明节奏紧、合并快。

| # | PR | 主要内容 |
|---|---|---|
| 1 | [#48575](https://github.com/openai/codex/pull/48575) | **让 provisioned executor 上线有更多时间**：`environment_offline` 重试由普通路径切到专用通道，避免初次注册限流误杀尚未就绪的 executor |
| 2 | [#48574](https://github.com/openai/codex/pull/48574) | **保留 deferred tool 命名空间名称**：4 KiB summary 预算先预留所有 namespace 名，改善工具发现 |
| 3 | [#48568](https://github.com/openai/codex/pull/48568) | **`exec-server` 支持代理私有 IP**：新增 `--proxy-private-ips-via-upstream`，让 VPN 上游代理可访问内网 |
| 4 | [#48565](https://github.com/openai/codex/pull/48565) | **macOS Seatbelt 放行 TLS 信任评估**：允许 `mach-lookup com.apple.TrustEvaluationAgent`，修复 libcurl 网络受限 profile 下的 TLS 失败 |
| 5 | [#48562](https://github.com/openai/codex/pull/48562) | **TUI 会话头统一样式**：resume / fork / clear-screen 共用紧凑标题 + 目录布局，移除旧 box 模型行 |
| 6 | [#48560](https://github.com/openai/codex/pull/48560) | **working tips 不再随鼠标选区抖动**：选中文本时保持可见，避免 transcript 抖动 |
| 7 | [#48549](https://github.com/openai/codex/pull/48549) | **复制 TUI 响应保留 Markdown 表格与空白**：避免表格被降级为代码块，保留硬换行 |
| 8 | [#48531](https://github.com/openai/codex/pull/48531) | **Windows sandbox runtime 注册错误补充上下文**：使用 `anyhow::Context` 保留根因 |
| 9 | [#48508](https://github.com/openai/codex/pull/48508) | **steering 转向时保留 WebSocket continuation**：drain 旧 response 后通过 `previous_response_id` 续传，减少上下文重发 |
| 10 | [#48483](https://github.com/openai/codex/pull/48483) | **Windows piped 子进程默认 `CREATE_NO_WINDOW`**：直接对应社区"控制台闪烁"集中反馈 |

---

## 📈 功能需求趋势

从本周 50 条 issue 与 23 条 PR 提炼：

1. **桌面端稳定性优先（最强烈）**  
   Windows/Linux 26.924 系列回归集中在 **任务启动卡死、控制台闪烁、白屏、app-server 状态机错乱**。稳定性 > 新功能。

2. **TUI 体验精细化**  
   - 复制/粘贴语义回归（macOS iTerm2、Debian、PowerShell）  
   - tmux 原生滚动被破坏（#48315、#48542）  
   - Markdown 表格、Mermaid、数学公式渲染保真（#48548、#48549、#48551、#48489）  
   - "不希望被强制改造成 TUI 应用"的反 TUI 化呼声上升。

3. **安全/沙箱/网络代理能力扩展**  
   - macOS Seatbelt TLS 放行（#48565）  
   - exec-server 上游代理内网（#48568）  
   - 沙箱进程控制台抑制（#48483、#48531）  
   - SIGCHLD 信号与 libuv 冲突（#48554，Linux）。

4. **登录 / Onboarding 体验**  
   本地 app-server 的 ChatGPT 浏览器登录修复（#48502）、登录链接易复制（#48544）。

5. **代码评审（GitHub @codex）**  
   fork PR 被静默忽略（#47577）成为协作摩擦点。

6. **远程执行 / Provisioned Executor 弹性**  
   executor 上线宽容度（#48575）、skill catalog 稳定性（#48353）。

---

## 👨‍💻 开发者关注点

**Top 痛点：**
- 🥇 **Windows 子进程控制台闪烁**（涉及 #48074、#48277、#48422、#48498、#48540），已被 PR #48483 一次解决，社区强烈共鸣。
- 🥈 **26.924 桌面端"启动/任务卡死"连锁回归**（#48189、#48208、#48313、#48419、#48463、#48592、#48554），需发布端整体回滚/热修。
- 🥉 **TUI 复制/滚动语义回归**：用户明确希望保留终端原生交互，对"被强行接管"表示不满。

**高频需求：**
1. **可回滚的稳定通道**：用户希望官方提供"已知可用"的稳定 build，而非每次更新都需手动降级。
2. **更细致的 TUI 开关**：`copy_on_select`、`native scroll` 等行为希望可显式配置，而非 `auto` 黑盒（参见 PR #48469）。
3. **跨平台 fork / 远程执行能力**：exec-server 代理内网 + executor 弹性上线，是企业/私有网络部署刚需。
4. **Computer Use 健壮性**：#43573 SIGTRAP 仍在 OPEN 状态，CUA 稳定性是关键体验瓶颈。

---

*日报由 openai/codex 公开数据自动汇总，建议结合具体 PR diff 与 issue 时间线持续追踪。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-27**

---

## 📌 今日速览

今日社区焦点集中在 **子代理（Subagent）可靠性** 与 **Auto Memory 系统稳定性** 两大方向：多条 P1 级 Issue 反映子代理在回合耗尽、Wayland 浏览器调用、generalist 委派等场景下出现挂起或误报成功状态；同时，Auto Memory 相关的 4 个 Issue (#26522/#26523/#26525/#26516) 由同一作者集中提交，揭示了补丁处理、脱敏与重试逻辑的系列缺陷。PR 端则以**性能线性化**和**持久化原子写入**为优化主线。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 👍 | 为什么值得关注 |
|---|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **子代理达到 MAX_TURNS 后仍上报 GOAL 成功** | P1 🔒 | 13 | 2 | 严重影响结果可信度：实际未完成分析却以"成功"结束，会让上层 agent 误判任务状态。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist 子代理无限挂起** | P1 🔒 | 8 | **8** | 讨论热度高、点赞居首——简单"新建文件夹"操作都可能卡一小时，严重影响可用性。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 + 意图路由** | P2 🔒 | 9 | 1 | 战略性提案：让 Gemini 3 模型以原生 bash 形式运行 POSIX 工具链，是 Agent 形态的重要演进。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知的文件读取/搜索/映射评估** | P2 🔒 | 7 | 1 | 一次性读取精确函数边界、降低误读造成的多轮浪费，直接对标 token 效率。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 几乎不主动调用自定义 skills/sub-agents** | P2 🔒 | 6 | 0 | 揭示了"扩展能力存在但模型不会用"的产品化短板。 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 增加确定性脱敏并降低日志** | P2 🔒 | 5 | 0 | **安全级**问题：内容进入模型上下文后才脱敏，且技能文件存在残留风险。 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **浏览器子代理在 Wayland 下失败** | P1 🔒 | 4 | 1 | 影响 Linux 桌面用户；与 #22267/#22232 形成"Browser Agent 集群问题"。 |
| 8 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent 忽略 settings.json 覆盖** | P2 🔒 | 4 | 0 | 配置层 bug：maxTurns 等关键参数被无视，导致用户无法约束行为。 |
| 9 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) **agents 目录下的 symlink 文件不被识别** | P2 🔒 | 4 | 0 | 阻碍 dotfiles 化管理子代理配置的工作流。 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) **Agent 应抑制破坏性命令** | P2 🔒 | 3 | 1 | 模型偶发使用 `git reset --force` 等高危操作，社区呼吁增强引导与安全护栏。 |

> **观察**：近一半热点 Issue 标记为 🔒 maintainer only，说明核心团队正在主导多个关键修复的归档与协调。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 核心改动 |
|---|---|---|---|
| 1 | [#29520](https://github.com/google-gemini/gemini-cli/pull/29520) **保留滚动位置 + 分区待渲染高度** | 🟢 OPEN | 解决流式输出/工具确认时视口回弹问题，P1 级体验修复。 |
| 2 | [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) **将取消信号传播到 shell 注入命令** | 🟢 OPEN | `!{...}` 自定义命令此前使用全新 AbortController，调用方的取消永远传不进去。 |
| 3 | [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) **持久化状态写入故障安全** | 🟢 OPEN | temp + fsync + 原子 rename，杜绝中断写入把 state.json 截断清空。 |
| 4 | [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) **新增 `gemini models list` 子命令（支持 JSON）** | 🟢 OPEN | 解决集成方硬编码模型 ID 易过期的问题。 |
| 5 | [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) **`--resume` 改为按最近活动而非启动时间** | 🟢 OPEN | 修复"长会话+新分支场景下错恢复到新 spike"的体验缺陷。 |
| 6 | [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) **限制工具输出大小 + 优化长时 agent 循环内存** | 🔴 CLOSED | 关注高被合入后是否被重新打开——可能需要跟进。 |
| 7 | [#29294](https://github.com/google-gemini/gemini-cli/pull/29294) **修复后台命令导致终端闪烁** | 🔴 CLOSED | 解决 stdout 抢占与光标焦点引发的 tearing。 |
| 8 | [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) **JSON 序列化保留共享引用** | 🟢 OPEN | 将全局 WeakSet 改为活动路径追踪，OpenTelemetry 重复数组不再误标 `[Circular]`。 |
| 9 | [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) **向重启的子进程转发终止信号** | 🟢 OPEN | SIGTERM/SIGHUP/SIGINT 等现在能穿透 bootstrap 父进程，监督式部署更可靠。 |
| 10 | [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) **加固 Windows 子进程参数引号、阻止命令注入** | 🟢 OPEN | 引入 `quoteCmdArg`，消除 `shell: true` 下的命令注入面。 |

> **额外亮点**：#29512 / #29515 / #29516 / #29517 是一组**数组操作线性化优化**——把 `unshift` 改为 `push` + 反转、用 `Set` 替换 `indexOf`，本地基准中部分路径提升 20–30×，对 Auto Memory 与聊天压缩场景收益显著。

---

## 📈 功能需求趋势

综合今日活跃 Issue，可归纳出 6 条社区最强烈的演进方向：

1. **🤖 子代理治理（Subagent Orchestration）** — 状态上报正确性 (#22323)、委派防卡死 (#21409)、自动调用激励 (#21968)、上下文共享 (#21763)、trajectory 可观测 (#22598) 形成完整闭环诉求。
2. **🧠 上下文/Token 效率** — AST 工具 (#22745/#22746)、外科手术式读取 (#19561)、工具数量上限 (#24246)、持久化任务跟踪取代 WriteToDo (#18836/#21000) 共同指向"更聪明地消费 token"。
3. **💾 Auto Memory 体系成熟** — 4 个相关 Issue (#26516/#26522/#26523/#26525) 集中暴露了**重试、脱敏、补丁校验、聚合清理**四大缺口。
4. **🌐 Browser Agent 健壮性** — Wayland 兼容 (#21983)、settings.json 覆盖 (#22267)、会话接管 (#22232) 表明这是下一阶段重点打磨面。
5. **🖥 终端体验** — 闪烁 (#29294)、滚动复位 (#29520)、resize 性能 (#21924)、`\n` 转义 (#22466)、交互提示挂起 (#22465) 几乎覆盖所有 Ink 渲染痛点。
6. **🛡 安全与防破坏** — 零依赖沙箱 (#19873)、破坏性命令抑制 (#22672)、Windows 命令注入 (#29510)、Auto Memory 脱敏 (#26525) 反映企业级采用门槛。

---

## 🧑‍💻 开发者关注点（痛点 / 高频需求）

| 类别 | 代表声音 | 核心痛点 |
|---|---|---|
| **结果可信度** | #22323 / #21763 | 子代理失败被吞、bug report 缺少子代理上下文，调试几乎不可能。 |
| **Wayland/Linux 兼容** | #21983 | 浏览器子代理在 Wayland 失败，桌面 Linux 用户被边缘化。 |
| **配置不生效** | #22267 | Browser Agent 静默忽略 settings.json，挫败高级用户。 |
| **扩展"装而不用"** | #21968 | 自定义 skills/sub-agents 需要显式提示才被调用，扩展性空转。 |
| **持久化数据丢失** | #29402（修复中） | state.json 写入非原子，一次崩溃即清空状态。 |
| **取消信号断裂** | #29459（修复中） | 自定义命令里的 `!{...}` 永远无法被取消，僵尸子进程问题。 |
| **Windows 平台安全** | #29510（修复中） | diff 工具 `shell: true` 拼接存在命令注入面。 |
| **大文件/大工具集** | #24246 / #19561 | 工具数 >128 触发 400 错误；读取大文件会"消防水龙头式"灌入上下文。 |

---

> 📎 **日报小结**：今日画面可概括为"**三稳两提**"——稳子代理、稳 Auto Memory、稳终端体验；提 token 效率、提安全基线。PR 侧已就闪烁、原子写入、取消传播、Windows 注入等多项 P1 痛点提交修复，建议关注 #29402、#29459、#29520 的合入节奏。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-09-27
**数据源：** [github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

过去 24 小时内社区最为活跃的话题集中在**会话稳定性**与**MCP 集成**两大方向：长时间会话的 JavaScript 堆内存溢出（OOM）问题持续发酵，涉及 #4664、#4725 两条高关注度 Issue；同时 MCP 相关 issue 频繁更新，反映出 v1.0.83 在会话恢复时取消 MCP 连接（#4753）的回归问题。值得注意的是，DeepSeek API 接入（#2995）和 Windows ARM64 原生模块（#3306）等问题均已关闭，但会话恢复、模型名称一致性等核心场景仍存在多个未关闭的 Open Issue。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

按评论数与社区关注度筛选的 10 个最具代表性的 Issue：

### 1. [#2995](https://github.com/github/copilot-cli/issues/2995) - 无法使用 DeepSeek API（已关闭）
**领域：** models, configuration | 💬 14 评论 | 👍 9
社区对通过 `COPILOT_PROVIDER_*` 环境变量接入 DeepSeek 等第三方 OpenAI 兼容模型的需求强烈，是 BYOK（自带密钥）系列问题中最受关注的讨论之一。

### 2. [#4664](https://github.com/github/copilot-cli/issues/4664) - 恢复长会话时 JavaScript 堆内存溢出（已关闭）
**领域：** sessions, context-memory | 💬 9 评论 | 👍 2
Node.js V8 引擎在恢复大型历史会话时直接崩溃，无法继续工作。该问题与 #4725 共同指向会话存档/加载机制存在严重的内存效率缺陷。

### 3. [#4725](https://github.com/github/copilot-cli/issues/4725) - 高频 JavaScript 堆内存溢出（OPEN）
**领域：** platform-linux | 💬 7 评论 | 👍 1
Linux 平台上每隔几分钟崩溃一次，堆内存占用接近 4GB。仍处于 OPEN 状态，是当前最值得追踪的稳定性问题。

### 4. [#4753](https://github.com/github/copilot-cli/issues/4753) - v1.0.83 会话恢复时取消 MCP 连接（已关闭）
**领域：** sessions, mcp | 💬 5 评论 | 👍 2
从 v1.0.82 的约 16 秒超时缩短至 v1.0.83 的约 1 秒，导致仍在初始化的 stdio MCP 服务器被静默丢弃，属于明确的回归缺陷。

### 5. [#4370](https://github.com/github/copilot-cli/issues/4370) - FastMCP 兼容性问题（已关闭）
**领域：** mcp | 💬 4 评论 | 👍 3
Copilot CLI 1.0.79-1 在 MCP 初始化前调用 `server/discover`，而 FastMCP 返回 `-32602` 导致整个连接失败，影响生态兼容性。

### 6. [#4160](https://github.com/github/copilot-cli/issues/4160) - 计划模式过度拦截只读命令（已关闭）
**领域：** permissions, tools | 💬 4 评论 | 👍 2
基于关键字的启发式分类器误判明显只读的 shell 命令，影响计划模式下的可用性。

### 7. [#2644](https://github.com/github/copilot-cli/issues/2644) - 请求支持 Shift+Arrow 与 Ctrl+A 文本选择（OPEN）
**领域：** input-keyboard | 💬 4 评论 | 👍 2
当前 CLI 提示符缺乏标准 GUI 文本选择快捷键，是开发者日常使用中的明显痛点，**目前仍未关闭**。

### 8. [#1752](https://github.com/github/copilot-cli/issues/1752) - CLI 与 VS Code 模型名称解析不一致（已关闭）
**领域：** models | 💬 3 评论 | 👍 2
自定义代理模型名（如 `"GPT-5.3-Codex (copilot)"`）在 VS Code 中可识别但 CLI 中失败，跨端一致性问题典型案例。

### 9. [#1864](https://github.com/github/copilot-cli/issues/1864) - 断电导致会话文件损坏无法恢复（已关闭）
**领域：** sessions | 💬 2 评论 | 👍 8
**👍 数量在列表中最高**，显示用户对会话鲁棒性的强烈诉求；当前无任何恢复机制。

### 10. [#3712](https://github.com/github/copilot-cli/issues/3712) - Windows ReFS / Dev Drive 本地沙箱限制（已关闭）
**领域：** permissions, platform-windows | 💬 3 评论 | 👍 4
本地沙箱在 ReFS/Dev Drive 上的已知限制，期望补充官方文档说明。

**其他值得关注的 Open Issues：**
- [#4930](https://github.com/github/copilot-cli/issues/4930) - 云端代理在 GHEC 租户上查看任意图片即崩溃
- [#4260](https://github.com/github/copilot-cli/issues/4260) - 桌面应用忽略 `askUser: false` 设置
- [#4975](https://github.com/github/copilot-cli/issues/4975) - 实验模式下无法启用 Hydrafusion 模型

---

## 🛠 重要 PR 进展

过去 24 小时内无新增或更新的 Pull Request。

---

## 📈 功能需求趋势

通过对全部 Issue 的领域标签归类，社区关注方向呈现以下分布：

| 主题 | 占比 | 代表 Issue |
|------|------|------------|
| **会话管理（sessions）** | 约 30% | #4664、#4725、#4753、#3754、#1864、#3054、#3362、#4608、#1360 |
| **MCP 生态集成** | 约 15% | #4753、#4370、#4076 |
| **模型与多供应商支持** | 约 15% | #2995、#1752、#3656、#4975、#4300 |
| **权限与计划模式** | 约 12% | #4160、#3712、#2298 |
| **平台兼容性（Win/Linux）** | 约 12% | #3306、#4384、#2844、#4725 |
| **输入与终端体验** | 约 10% | #2644、#2508 |
| **代理 / Agent 行为** | 约 6% | #4076、#2270、#2172 |

**主要趋势结论：**
1. **会话生命周期管理**是当下最大痛点（恢复、损坏、checkpoint、插件钩子、并发会话）
2. **多模型供应商接入**正在成为 BYOK 主线：DeepSeek、bearerToken 认证、实验模型等需求集中爆发
3. **MCP 生态深化**：从"能跑通"走向"可配置、可恢复、跨客户端一致"
4. **企业 / 合规场景**：企业策略、Auth Broker、按命令授权等成为新增长点

---

## 💬 开发者关注点

综合 Issue 反馈，社区当前的**核心痛点**可归纳为以下几类：

### ⚠️ 稳定性与性能
- 长会话场景下反复触发 V8 OOM 崩溃（#4664、#4725）
- 会话文件损坏后无任何恢复路径（#1864，8 赞）
- 会话恢复时 MCP 连接被过早取消（#4753）

### 🔌 接入与生态
- 接入 DeepSeek 等第三方 OpenAI 兼容模型仍有摩擦（#2995）
- 模型名称在 CLI 与 VS Code 间不一致（#1752）
- 实验性模型（Hydrafusion）开关不明确（#4975）
- 企业内 Bearer Token 认证能力缺失（#4300）

### 🪟 平台兼容性
- Windows ARM64 原生模块加载失败（#3306）
- Linux 下 chalk level 0 导致光标不可见（#2844）
- 非 Windows Terminal 下终端标题被覆盖（#4384）

### 🛡️ 权限与安全
- 计划模式关键字匹配误拦截只读命令（#4160）
- 缺乏"按命令粒度授权"的中间态（#2298）

### ⌨️ 交互体验
- 缺少 Shift+Arrow/Ctrl+A 等基础文本选择快捷键（#2644，OPEN）
- ESC 误触取消频繁发生，期望可配置（#2508）

### 🤖 代理协作
- `/fleet`、研究代理、压缩代理的边界控制不足（#2270、#4076、#2172）
- 内置研究代理无法使用用户自定义 MCP 工具（#4076）

---

> 📊 **日报小结：** Copilot CLI 当前处于"功能扩张期向稳定性收敛期"过渡阶段——大量历史 Issue 已关闭，但 Open 状态的关键稳定性与体验问题（OOM 崩溃、文本选择、云代理图片处理）仍是开发者日常使用中的主要障碍。建议关注 #4725、#4930、#2644 等仍 OPEN 的高优 Issue 进展。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-27**

---

## 一、今日速览

今日 OpenCode 仓库活动以**问题集中关闭**为主旋律——过去 24 小时内有 28 个长期挂起的 Issue 被批量关闭（多数创建于 7 月），社区维护节奏明显加快。**核心改动聚焦三大方向**：Desktop 应用体验完善（worktree 选择器、自定义 Provider）、MCP 生态稳定性（进程清理、stderr 转发、Anthropic Schema 兼容），以及长会话/流式推理场景下的稳定性修复（WebSocket 空闲超时、60 分钟不活动截断）。所有 Issue 已全部进入 v2 版本开发线。

---

## 二、版本发布

⚠️ **过去 24 小时无新 Release**。当前主线版本为 **v2.0.12（Desktop）/ CLI 1.18.x 过渡期**，v2 分支正在持续合入。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 | 状态 | 重要性 |
|---|-------|------|------|--------|
| [#9541](https://github.com/anomalyco/opencode/issues/9541) | **[FEATURE]** Desktop 直接编辑文件 & 体验改进 | 13 | CLOSED | ⭐ 社区最热议的 Desktop QOL 诉求 |
| [#34184](https://github.com/anomalyco/opencode/issues/34184) | **Bug** Go 订阅自动续费后配额未重置（需等 1 天） | 9 | CLOSED | 付费用户核心痛点 |
| [#37056](https://github.com/anomalyco/opencode/issues/37056) | **Bug** opencode-go 代理返回 400/401/500 频发 | 8 | CLOSED | Go 用户系统性失败 |
| [#17873](https://github.com/anomalyco/opencode/issues/17873) | **[FEATURE]** 每个会话保留独立模型选择（👍2） | 6 | CLOSED | 多模型工作流高频需求 |
| [#36434](https://github.com/anomalyco/opencode/issues/36434) | **Bug** v1.17.16 丢弃 `mcp.*.env` 配置 | 5 | CLOSED | MCP 环境变量静默丢失 |
| [#25553](https://github.com/anomalyco/opencode/issues/25553) | **Bug** Web UI @mention 子代理不转发图片 | 5 | CLOSED | 多模态代理链路缺陷 |
| [#50650](https://github.com/anomalyco/opencode/issues/50650) | **Bug** Desktop 自定义 Provider 保存必抛 `unavailable` | 4 | 🔓 **OPEN** | Desktop Provider 流程完全不可用 |
| [#39251](https://github.com/anomalyco/opencode/issues/39251) | **Bug** Windows Desktop 严重卡顿（含 Go 用户） | 4 | CLOSED | Windows 平台性能瓶颈 |
| [#38667](https://github.com/anomalyco/opencode/issues/38667) | **Bug** ACP `usage_update` 把所有货币标成 USD | 4 | CLOSED | 多币种计费展示错误 |
| [#35719](https://github.com/anomalyco/opencode/issues/35719) | **Bug** MCP stderr 全部被静默丢弃 | 4 | CLOSED | MCP 调试可用性 |

**值得关注**：除 #50650 外，今日热榜 Issue 几乎全部为 CLOSED 状态，反映团队正系统性地清理 backlog；唯一 OPEN 的 Desktop 自定义 Provider 问题需要持续跟进。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 核心改动 | 状态 |
|---|----|---------|------|
| [#51575](https://github.com/anomalyco/opencode/pull/51575) | **feat(app)** 新会话视图增加 worktree 选择器 | 让用户直接看到/选择 git worktree 目录 | 🔓 OPEN |
| [#51271](https://github.com/anomalyco/opencode/pull/51271) | **feat(core)** 输出上限自适应上下文窗口（含压缩预留空间） | 修复上下文压缩后输出被强行截断问题 | 🔓 OPEN |
| [#51573](https://github.com/anomalyco/opencode/pull/51573) | **fix(core)** 流式会话保持活跃 | 修复 60 分钟不活动硬性终止长推理流的问题 | 🔓 OPEN |
| [#50565](https://github.com/anomalyco/opencode/pull/50565) | **fix(core)** WebSocket 空闲超时上调并可配置（默认 5 分钟） | 解决长 reasoning 中途断连 | 🔓 OPEN |
| [#51571](https://github.com/anomalyco/opencode/pull/51571) | **feat(tui)** 新会话启动时 logo 径向点亮动画 | 视觉体验增强 | 🔓 OPEN |
| [#47542](https://github.com/anomalyco/opencode/pull/47542) | **fix(opencode)** 净化 MCP 工具 Schema 以兼容 Anthropic 根 combinator | Anthropic 拒绝 root 级 `anyOf` 的已知缺陷 | 🔓 OPEN |
| [#50844](https://github.com/anomalyco/opencode/pull/50844) | **fix** GitLab Duo 自托管实例工作流 | 使用配置的实例 base URL 而非硬编码 | 🔓 OPEN |
| [#51559](https://github.com/anomalyco/opencode/pull/51559) | **fix(ai)** DigitalOcean 推理支持 prompt caching | 避免降级到 `openai-compatible` 路径 | 🔓 OPEN |
| [#48431](https://github.com/anomalyco/opencode/pull/48431) | **fix(tui)** 合并 `message.part.delta` store 写入 | 配合 markdown-live-relex 彻底消除流式 O(n²) 卡顿 | 🔓 OPEN |
| [#50595](https://github.com/anomalyco/opencode/pull/50595) | **fix(permission)** ESC/Abort 时发布 replied 事件 | 修复权限询问被中断后 UI 残留 | 🔓 OPEN |

**亮点**：所有今日更新的活跃 PR 均处于 OPEN 状态，反映 v2 分支处于密集合入阶段；流式会话稳定性（#51573、#50565）和 MCP 健壮性（#47542、#50363 相关）是本批主线工作。

---

## 五、功能需求趋势

从 50 条 Issue 提炼出的社区诉求分布：

### 1. 🥇 Desktop 体验升级（占比最高）
- 直接文件编辑入口、worktree 目录选择（[#51575](https://github.com/anomalyco/opencode/pull/51575)）
- 自定义 Provider UI 修复（[#50650](https://github.com/anomalyco/opencode/issues/50650)）
- 会话归档浏览器（[#36963](https://github.com/anomalyco/opencode/issues/36963)）
- 多 Provider 连接链接设计

### 2. 🥈 MCP 协议深度完善
- 子进程清理 / stderr 透出 / Schema 净化 / 类型强转修复
- 孤立进程问题仍是 OPEN（[#50363](https://github.com/anomalyco/opencode/issues/50363)）

### 3. 🥉 多模型工作流
- 每会话保留模型选择（[#17873](https://github.com/anomalyco/opencode/issues/17873)）
- Bedrock 多账户/非默认 Provider 走 Mantle（[#39325](https://github.com/anomalyco/opencode/issues/39325)）
- 通过 ACP 配置 Agent，类比 Zed 模式（[#35550](https://github.com/anomalyco/opencode/issues/35550)）

### 4. 长会话与上下文管理
- 上下文自适应输出上限（[#51271](https://github.com/anomalyco/opencode/pull/51271)）
- WebSocket 空闲可配置超时（[#50565](https://github.com/anomalyco/opencode/pull/50565)）
- 流式保持活跃（[#51573](https://github.com/anomalyco/opencode/pull/51573)）

### 5. 可观测性 / 状态可见
- OpenCode Go 服务状态页（[#39394](https://github.com/anomalyco/opencode/issues/39394)，👍4 为今日最高赞）
- Web UI 事件流健康监测

---

## 六、开发者关注点（高频痛点）

| 痛点类别 | 典型表现 | 代表 Issue |
|---------|---------|-----------|
| **MCP 生态"边界 bug"** | 进程孤儿、stderr 黑洞、Schema 拒收、参数类型串化、env 静默丢失 | #50363 / #35719 / #47542 / #39334 / #36434 |
| **流式/长会话断流** | 60 分钟不活动被踢、WebSocket 5 分钟空闲关闭、SSE chunk 不到达 | #51573 / #50565 / #39357 |
| **Web UI 假死** | event stream 静默死亡只剩 spinner，需刷新；"New Session" 按钮永久置灰 | #39352 / #39330 |
| **多代理/多模态路由缺陷** | @mention 子代理收不到附件；父代理误消费图像 | #25553 / #36020 |
| **平台性能不均衡** | Windows Desktop 严重卡顿（Go 用户也受影响）；TUI Tree-sitter 高亮冗余 | #39251 / #39342 |
| **付费/计费一致性** | Go 自动续费 quota 未重置；ACP 把所有币种标 USD | #34184 / #38667 |
| **资源清理缺失** | `tool-output` spill 文件可堆积至 63G | #29694 |

> **社区共识信号**：维护者正以"批量关闭 + v2 重构"的方式集中解决历史欠账，但 **MCP 子进程管理**（#50363 仍 OPEN）和 **Windows Desktop 性能**（#39251）这两类问题需要持续观察后续版本是否真正根治。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode) | 报告生成时间：2026-09-27*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-27

> 数据来源：`github.com/badlogic/pi-mono`（earendil-works/pi 仓库）
> 统计窗口：过去 24 小时更新的 Issues 与 PRs

---

## 一、今日速览

今天社区的焦点集中在**连接可靠性、Provider 兼容性与会话恢复稳健性**三大主题。最受关注的是持续发酵的 OpenAI Codex `gpt-5.5` 连接卡死问题（80 条评论，34 👍），与此同时 Mistral GLM、Anthropic 严格工具、Kimi-coding、本地 OpenAI 兼容网关等多家 Provider 的"边界情况"被集中曝光。功能侧，**Codemode + MCP** 大型 PR 进入 Open 状态评审，标志着 Pi 在沙箱与工具协议上的重要扩展。

---

## 二、版本发布

**无新版本发布。** 过去 24 小时仓库无新增 Release 标签。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 关注点 |
|---|-------|------|------|--------|
| [#4945](https://github.com/badlogic/pi-mono/issues/4945) | openai-codex / gpt-5.5 连接可靠性问题 | OPEN / inprogress | 80 / 👍34 | **本期最热**：TUI 卡在 `Working...`，无流式输出、无工具调用、无错误，只能 Esc 终止。已持续多日，影响 Codex 用户核心体验。 |
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | Windows 上的 Pi 使用体验调研 | OPEN | 68 / 👍2 | 维护者主导的需求收集帖：希望厘清 Windows 上的运行路径优先级（WSL、WSL2、原生、容器等），避免资源分散。 |
| [#5581](https://github.com/badlogic/pi-mono/issues/5581) | `pi.sendMessage({triggerTurn:true})` 绕过 `before_agent_start` | OPEN / inprogress | 8 / 👍3 | 扩展作者关心的 Agent 钩子一致性 bug：`triggerTurn` 直调 `_runAgentPrompt` 跳过关键生命周期事件，影响拦截与中间件扩展。 |
| [#9980](https://github.com/badlogic/pi-mono/issues/9980) | OpenRouter 主流开源模型费用计算偏差 2-3 倍 | OPEN | 5 | OpenRouter 目录取"最便宜 provider"定价，导致用户实际账单与 Pi 显示严重不符，影响 z-ai/glm-5.3-flash 等热门模型。 |
| [#9678](https://github.com/badlogic/pi-mono/issues/9678) | Mistral Convers. 托管的 GLM 推理 `reasoning_effort` 丢失 | OPEN | 4 / 👍1 | Mistral 已可服务 zai-glm-5-3/zai-glm-5/zai-glm-latest，但 Pi 目录仅 5-2，且 `reasoning_effort` 未透传，浪费模型能力。 |
| [#9953](https://github.com/badlogic/pi-mono/issues/9953) | Anthropic 严格工具：保留 `min/max` 后 400 全量拒绝 | OPEN | 3 / 👍1 | `makeStrictJsonSchema()` 保留了 Anthropic strict tool use 拒绝的校验关键字，导致任何带数值约束的工具即报错。 |
| [#10002](https://github.com/badlogic/pi-mono/issues/10002) | 扩展 `console.error()` 破坏 TUI 布局 | OPEN | 3 | 诊断输出绕过 TUI 渲染层，造成屏幕错乱直到重绘——扩展可观察性问题。 |
| [#10061](https://github.com/badlogic/pi-mono/issues/10061) | `pi install` 将大写 HTTPS Git URL 误判为本地路径 | CLOSED | 3 | `PackageManager.parseSource()` 大小写敏感的 scheme 比较。补丁已合并，议题关闭。 |
| [#8891](https://github.com/badlogic/pi-mono/issues/8891) | `clearQueue()` 仍发出压缩后的 steering 消息 | CLOSED | 3 | `clearQueue` 报告已清空但消息仍写入 transcript 并在压缩后发送，与认知不符。 |
| [#10092](https://github.com/badlogic/pi-mono/issues/10092) | 压缩时持久化 usage 缺 `cost` → 恢复时 Footer 崩溃 | CLOSED | 1 | **高危 crash-on-resume**：缺 `cost` 字段的 provider usage 透传落盘，恢复会话渲染 Footer 直接崩 TUI。已修补。 |

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 要点 |
|---|----|------|------|
| [#10040](https://github.com/badlogic/pi-mono/pull/10040) | `feat(coding-agent): Codemode and MCP` | OPEN | **本期最重磅 PR**：mitsuhiko 主理的大型特性合集，为 Pi 引入 Codemode 与 MCP，使 Jev 等模型能在受控沙箱中工作，同时扩展工具协议栈。 |
| [#10067](https://github.com/badlogic/pi-mono/pull/10067) | `feat: System theme（OKHSL + 终端配色查询）` | CLOSED | 引入基于终端颜色查询的默认主题（@dgtlntv 提供），并新增 OKHSL 色彩空间支持；改用"对比背景色"取代单看 LIGHT/DARK 标记，更稳。 |
| [#10091](https://github.com/badlogic/pi-mono/pull/10091) | `Expose message decoration hook for user/assistant text` | CLOSED | 新增 `ctx.ui.setMessageDecorator((role, content, theme) => component)`，允许扩展对普通用户与助手文本进行装饰（流式与回放均生效），并补渲染测试与 TUI 文档。 |
| [#10085](https://github.com/badlogic/pi-mono/pull/10085) | `feat(agent,coding-agent): emit pi.ai.request spans` | CLOSED | 兑现提案 #10084：在经典 Agent 路径接入 `AI_TELEMETRY_SCHEMA`，让生产请求真正写入 `pi.ai.request` span（此前被 `NOOP` 默默吞掉）。 |
| [#10087](https://github.com/badlogic/pi-mono/pull/10087) | `fix(ai): Mistral tools 不再带 strict；zai-glm 走 reasoning_effort` | CLOSED | 修复 #10086：去 mistral-conversations 上的 `strict` 字段；将 `zai-glm-*` 接入 `reasoning_effort`。 |
| [#10081](https://github.com/badlogic/pi-mono/pull/10081) | `fix(ai): 合并碎片化 thinking 为单个 leading Mistral ThinkChunk` | CLOSED | 修复 #10080：Mistral Convers. 仅允许一个 leading ThinkChunk；现在回放时合并 GLM 分散的思考块，避免 400 永久毁掉会话。 |
| [#10066](https://github.com/badlogic/pi-mono/pull/10066) | `fix(tui,coding-agent): 剪贴板优先取文件路径而非图标` | CLOSED | 修复 macOS Ctrl+V 在 Finder 复制文件时贴出 1024×1024 图标的 Bug（#9999）。 |
| [#9948](https://github.com/badlogic/pi-mono/pull/9948) | `feat: 统一 image 与 classifier 模型基础设施` | CLOSED | 重构模型系统，使非聊天模型（图像、分类器）能与 chat 模型同构管理。 |
| [#9776](https://github.com/badlogic/pi-mono/pull/9776) | `Per thinking sampling parameters` | OPEN | 由 mrexodia 提出：不同开源模型对 thinking / 非 thinking 模式推荐不同采样参数，新增 `samplingParamsByThinkingLevel` 取代旧的单一 `samplingParams`。 |
| [#10071](https://github.com/badlogic/pi-mono/pull/10071) | `fix: 加载时拒绝畸形扩展命令` | CLOSED | 扩展注册命令时缺/非字符串 name 或缺 handler 时，加载期直接拒绝，避免 `/` 自动补全崩溃编辑器。 |

---

## 五、功能需求趋势

通过对近 24 小时活跃 Issue 的归纳，社区对以下方向表达出明显兴趣：

1. **Provider 兼容性与"边缘协议"正确性**
   - Mistral Convers. 上的 GLM（strict、reasoning_effort、ThinkChunk 合并）
   - Anthropic strict tool use（保留的 schema 关键字）
   - Kimi-coding 的 SDK ambient credential 探测
   - OpenRouter 目录价格归一化
   - vLLM 字段重命名后的 `reasoning` 回放字段
2. **可靠性与会话恢复（crash-on-resume）**
   - 缺 `cost` 字段的 usage 持久化导致 footer 崩溃
   - 空 `toolCallId` 的 toolResult 中毒后上游 400 死循环
3. **可扩展性 / 扩展 API 强化**
   - `before_agent_start` 一致性
   - 工具渲染错误暴露
   - `setMessageDecorator` 装饰钩子
   - Telemetry spans 接入 Agent 路径
4. **平台与终端体验**
   - Windows 路径与运行方式收敛
   - macOS 剪贴板 / Kitty OSC 5522 协议
   - 全屏聚焦时行误激活
5. **沙箱与工具协议**
   - Codemode + MCP（#10040 大 PR 进入评审）
   - Image / Classifier 模型统一接入
6. **可观测性与控制**
   - Telemetry 上下文在 chat invocation 上透传（#10093）
   - Per-model `max_tokens` 控制（#10070）
7. **可视化与主题**
   - OKHSL + 系统主题（#10067）
   - 自定义主题 truecolor 优先级（#10039）
   - HTML 导出隐藏消息按钮（#10020）

---

## 六、开发者关注点（高频痛点）

- **"会话被毒"系列**：空 toolCallId、缺 cost usage、GLM 多 leading ThinkChunk——这些都让 Pi 在 resume 时进入 400 死循环或 Footer 崩溃。修复路径集中在**会话写盘前的归一化与校验**。
- **Provider 行为差异成为扩展作者的"税"**：Mistral / Anthropic / Kimi / OpenRouter 各有协议怪癖，扩展作者难以写出"通用代码"。
- **TUI 输出与扩展 console 的边界**：`console.error` 破坏渲染（#10002）、工具 `renderCall/Result` 抛错被吞（#10073），均说明 Pi 在"扩展输出可视化 + 错误传播"上仍欠设计。
- **OpenAI Codex 体验不稳定**：本期头号热点反映用户对旗舰模型的连通性缺乏信心，影响留存。
- **Windows 仍是"次等公民"**：用户希望 Pi 在 Windows 上有明确官方支持路径（原生 / WSL / 容器）的取舍说明，而不是"自己挑"。
- **剪贴板与本地文件交互**：macOS Finder 粘贴图标、Kitty 协议、SSH 场景——所有"图片进 Pi"的入口都还在打磨。

---

> 📌 建议关注的合并后落地事项：#10066、#10067、#10081、#10085、#10087、#10091、#10092、#10071——它们大多在 24 小时内合并，将在下一版 Release 中集中体现改进。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-27**

---

## 📌 今日速览

今日 Qwen Code 社区活动围绕 **Managed Agent 双引擎架构**持续推进，#12380 主提案下的 Stage B（#12737）和 Stage D（#12793）切片持续推进中；同时 **`/update` 与 standalone-update 在 Windows 平台的可靠性问题**集中爆发，多位开发者反馈升级失败与陈旧标记阻塞；CI 基础设施的稳定性（CI 重试、yamllint 回退、helper-tests）也成为本轮开发重点。

---

## 🚀 版本发布

- **[v0.24.6-nightly.20260926.d6f414190a](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.6-nightly.20260926.d6f414190a)**
  - 测试侧补齐 `managed-context/1` 遗留 fixture 缺口（[#12712](https://github.com/QwenLM/qwen-code/pull/12712)）
  - 修复 MCP 注册器相关问题

---

## 🔥 社区热点 Issues

1. **[#12380 - Managed Agent 双路径架构与分阶段交付提案](https://github.com/QwenLM/qwen-code/issues/12380)**（💬 32）
   - 当前最热议题，定义 Managed Agent 的双路径架构（保留现有 TS agent loop + 独立于工具环境的模型推理）。关联 Session 持久所有权、Workspace 绑定、可恢复工具执行、WebSocket 稳定性等核心议题。

2. **[#3579 - DeepSeek API 400 错误：reasoning_content 必须回传](https://github.com/QwenLM/qwen-code/issues/3579)**（💬 12 · 已关闭）
   - 使用 DeepSeek 的 `deepseek-v4-flash` 模型时，思考模式下 reasoning_content 必须回传 API 的间歇性 400 错误，已修复关闭。

3. **[#12737 - ACP Bridge Stage B：Legacy 与 Managed 引擎的 host 集成](https://github.com/QwenLM/qwen-code/issues/12737)**（💬 8）
   - #12380 主提案下的 Stage B 落地，让普通 `qwen serve` host 真正用上 #12698 提供的双引擎 ACP Bridge。

4. **[#11908 - serve/acp：超大 `available_commands_update` 触发 MAX_JSON_NODES 撕裂通道](https://github.com/QwenLM/qwen-code/issues/11908)**（💬 6 · 已关闭）
   - Session 启动通知超 10,000 节点时通道 fail-closed，所有后续请求 404，已修复。

5. **[#12727 - Windows PowerShell 中 `/update` 命令异常](https://github.com/QwenLM/qwen-code/issues/12727)**（💬 6 · 已关闭）
   - 更新下载后 `qwen` 退出，但再次启动仍提示新版本。开发者 `@hantsy` 反映升级链路在 Windows 下的可见性问题。

6. **[#12802 - 陈旧 `.deferred` 标记永久阻塞更新](https://github.com/QwenLM/qwen-code/issues/12802)**（💬 5）
   - PR #12787 仅修复了 "impossible PID" 一半，另一半关于 `rollbackStandaloneUpdate` 锁活跃方向未定，已拆分跟踪。

7. **[#12793 - Stage D 公共 API 契约、生成 DTO、Session 查询与事件回放](https://github.com/QwenLM/qwen-code/issues/12793)**（💬 5）
   - 将审阅过的 OpenAPI 作为仓内契约落库，是 Managed Agent 公共接口的收口环节。

8. **[#12792 - EditTool 在 CRLF/LF 混合文件上整体重排行尾](https://github.com/QwenLM/qwen-code/issues/12792)**（💬 5）
   - 单行编辑导致 `git diff` 显示整文件改动，跨平台开发痛点。

9. **[#12760 - 配置多 API Key 时模型选择异常](https://github.com/QwenLM/qwen-code/issues/12760)**（💬 5）
   - `/model` 与 `/model --fast` 在多 provider 场景下命中错误的 endpoint。#12773 已在 PR 侧修复（见下文）。

10. **[#12453 - Web Shell 左侧栏收起后"新建任务"图标未垂直对齐](https://github.com/QwenLM/qwen-code/issues/12453)**（💬 5 · 已关闭）
    - Web Shell UI 细节修复，欢迎 PR 合并通道典型案例。

---

## 🛠 重要 PR 进展

1. **[#12780 - fix(ci): helper-tests 步骤对池竞争重试一次](https://github.com/QwenLM/qwen-code/pull/12780)**
   - Lint & Static job 中的 helper battery 失败时重试一次，并通过 `::warning::` 注释保持可见。

2. **[#12773 - fix(cli): 将 fast model 钉到所选 provider endpoint](https://github.com/QwenLM/qwen-code/pull/12773)**
   - 同一 model id 跨多个 provider 注册时，picker 现在持久化端点选择，避免命中错误 endpoint，直接对应 #12760。

3. **[#12415 - fix(cli): 已保存 workflow 斜杠命令的完成回报](https://github.com/QwenLM/qwen-code/pull/12415)**
   - 完成后展示 run ID / 状态 / 失败详情，并将通知注入模型上下文，刷新取消状态。

4. **[#12771 - docs(design): B2d 双引擎 host 接线设计（英中双语）](https://github.com/QwenLM/qwen-code/pull/12771)**
   - 文档 PR，固化 #12737 在 B2d 切片上的选择与范围规则。

5. **[#12258 - fix(mcp): 支持更大 Apps、范围化 tool 调用与隔离 origin](https://github.com/QwenLM/qwen-code/pull/12258)**
   - 已在远端 HTTPS 实例上验证（`d6d532eb8b`），MCP 集成面继续扩大。

6. **[#11799 - feat(computer-use): 远程 session 通过 node_repl 中继使用本地桌面](https://github.com/QwenLM/qwen-code/pull/11799)**
   - 无头 Linux 服务器上的 Qwen Code session 可借用 Mac 的 CUA SDK 与内嵌驱动，已通过既有反向 client-MCP 通道。

7. **[#11816 - feat(web-shell): 分支会话支持可选 worktree](https://github.com/QwenLM/qwen-code/pull/11816)**
   - Web Shell 可为每个分支会话启用独立 worktree，避免污染主目录。

8. **[#11651 - fix(core): 重附图片前保留 DashScope 缓存前缀](https://github.com/QwenLM/qwen-code/pull/11651)**
   - 自动重附图片移到请求尾部时，断点前置以维持缓存复用。

9. **[#12650 - fix(ci): yamllint 在 runner image 失效时回退到 pinned 版本](https://github.com/QwenLM/qwen-code/pull/12650)**
   - 强化 #12647，yamllint 现在做版本探测而非仅存活探测。

10. **[#12531 - fix(core): 阻止 MCP server 规则授权碰撞的 server](https://github.com/QwenLM/qwen-code/pull/12531)**
    - `matchesMcpPattern()` 不再经 `sanitizeToolNameForProvider()` 压缩后再比对，直接按字面前缀对账。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issue 中可观察到以下方向：

| 方向 | 代表议题 | 热度 |
|------|----------|------|
| **Managed Agent 双引擎架构** | #12380、#12737、#12793 | 🔥🔥🔥 |
| **更新与升级链路可靠性**（尤其 Windows） | #12727、#12802、#12735 | 🔥🔥 |
| **MCP 集成深化** | #12496、#12258、#12531 | 🔥🔥 |
| **Web Shell / UI 体验** | #12453、#12306、#11816 | 🔥🔥 |
| **子代理与工具约束** | #12803、#12809、#12790 | 🔥 |
| **平台分发扩展** | #12806（Linux aarch64 Desktop） | 🔥 |
| **CI 基础设施健壮性** | #10490、#12780、#12650、#12563 | 🔥 |

最显著的信号是 **Managed Agent 路线图的多切片并行推进**，从 host 集成（Stage B）到公共 API 契约（Stage D）形成完整链路；同时 **更新器** 在 Windows 平台集中暴露问题，提示该路径缺乏跨平台一致性回归。

---

## 💬 开发者关注点

1. **升级链路不可靠** — Windows 上 `/update` 静默失败（#12727）、`.deferred` 标记永久阻塞（#12802）、standalone-update 锁活跃方向未定（#12802）。开发者对"自动升级"的信任度下降，倾向手动管理。

2. **多 provider 模型选择混乱** — 当同一 model id 跨多个 endpoint 注册时，picker 行为不可预期（#12760），已在 #12773 修复但暴露更深层的注册顺序耦合问题。

3. **CI 抖动与池竞争** — `Test (ubuntu)` 非确定性失败（#10490 长期 open）、helper-tests 池竞争（#12780）、yamllint image 漂移（#12650），反映共享 runner 的稳定性是当前主要工程债。

4. **MCP 工具语义模糊** — `-32601` 被当传输错误（#12496）、server 级与通配符权限比对经有损压缩（#12531），表明 MCP 命名空间在多 provider 协议下存在隐患。

5. **行尾与跨平台编辑** — EditTool 在 CRLF/LF 混合文件上整体改写行尾（#12792），对 Windows 用户与 `git diff` 工作流影响明显。

6. **skills 默认禁用需求**（#12790）— 开发者希望新项目默认关闭所有 skills、按需启用，提示当前 skills 默认加载策略偏激进。

7. **Desktop Linux ARM64**（#12806）— 现有 release feed 缺 `linux-aarch64` 的 AppImage/deb，ARM64 Linux 用户被迫自维护安装脚本。

8. **子代理 headless 调用**（#12803）— 期望 `qwen --agent <name> "..." --output-format json --json-schema @schema.json` 一键运行，呼应 CI/自动化场景下对声明式工具约束的需求。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 报告生成时间 2026-09-27*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-09-27
**数据源**：github.com/Hmbown/DeepSeek-TUI

---

## 📌 今日速览

今天是 **0.10.1 收尾冲刺日**——主线围绕"信任/凭证"、"会话权威性"、"目录修正"、"工具输出预算"四条主线合并落地，由 Hmbown 集中推送了超过 20 个 PR；同期用户侧反馈集中在 TUI 渲染性能（焦点丢失、长时滚动卡顿）与键盘快捷键一致性上，需警惕 0.10.0 残留回归。

---

## 🚀 版本发布

过去 24 小时无新 Release 发布。当前主线推进 0.10.1 修复与改进批次，多个 PR 已合并或处于评审中（详见下文）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 重要性 |
|---|-------|------|------|--------|
| 1 | [#6184](https://github.com/Hmbown/Codewhale/issues/6184) | Engine 静默冻结：用户消息被持久化但不响应，无错误无日志 | 8 | ⚠️ **P0 级别** —— 在长工具调用过程中无征兆卡死，破坏核心对话体验 |
| 2 | [#5856](https://github.com/Hmbown/Codewhale/issues/5856) | Computer-use 插件：实时安装回执 + 首轮 look-act 闭环 | 6 | 增强关键插件的安装可验证性与首次可用性，依赖 0.10.x 内置捆绑 |
| 3 | [#6427](https://github.com/Hmbown/Codewhale/issues/6427) | 0.10.0 回归：Windows Terminal 多行粘贴按行自提交（#5981 二次破裂）| 3 | 影响 Windows 用户的高频操作路径，与 0.10.0 升级强相关 |
| 4 | [#5581](https://github.com/Hmbown/Codewhale/issues/5581) | 事件粒度审计：仅在 `TurnComplete` 才更新的界面在多步调用时卡顿 | 3 | 揭示了一批"按回合刷新"的 UI 表面需要下沉到按 step 刷新 |
| 5 | [#6035](https://github.com/Hmbown/Codewhale/issues/6035) | 模型 ID 钉死在 6+ 处，厂商下线后 fleet/agent 仍持有退役 ID | 3 | 影响真实用户配置（DeepSeek V4.1 Flash 替换 `deepseek-v4-flash`） |
| 6 | [#6298](https://github.com/Hmbown/Codewhale/issues/6298) | Fleet 重写：停止用命令语法判定只读，统一授权模型 | 2 | 源于一次安全事件（验证子代理用 computer-use 工具跨终端输入）|
| 7 | [#5625](https://github.com/Hmbown/Codewhale/issues/5625) | 中途引导：把队列中的用户输入作为 steer 在下一个 checkpoint 投递 | 2 | 中途交互模型的精细化升级，对长任务人工协同有显著价值 |
| 8 | [#6109](https://github.com/Hmbown/Codewhale/issues/6109) | 跨 Codewhale 表面的确定性音视频宠物 | 2 | 旗舰级品牌特性，需统一浏览器 / TUI / 原生端的物理世界模型 |
| 9 | [#6155](https://github.com/Hmbown/Codewhale/issues/6155) | /pet 栖息地：终端实测 + TUI/桌面共享 Owner | 2 | #6109 的子任务，承接 0.9.13 /pet 上线后的验收补齐 |
| 10 | [#6651](https://github.com/Hmbown/Codewhale/issues/6651) | TUI 在失焦时无法实时刷新 | 1 | 用户体验硬伤：窗口被遮挡 ≠ 最小化，渲染逻辑需修正 |

> 另：[#6657](https://github.com/Hmbown/Codewhale/issues/6657) 为明显的垃圾广告（"Medical Billing Services"），已被关闭，建议仓库开启 Issue 模板门槛。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 标题 | 说明 |
|---|----|----|------|
| 1 | [#6601](https://github.com/Hmbown/Codewhale/pull/6601) | **fix(trust)**: 凭证静态掩码、诚实审批超时、工作区信任 | 0.10.1 信任线扫荡；B1/B3 + 信任缺口一次性收口 |
| 2 | [#6591](https://github.com/Hmbown/Codewhale/pull/6591) | **feat(receipts)**: 从会话已有记录列出本次操作 | 为会话级"我刚才做了什么"提供权威凭证 |
| 3 | [#6611](https://github.com/Hmbown/Codewhale/pull/6611) | **refactor(rlm)**: 删除 #6511 死代码入口 | 清扫 RLM 旧入口；超时边界作为独立决定留给 founder |
| 4 | [#6613](https://github.com/Hmbown/Codewhale/pull/6613) | **web**: 保留新视觉 + 还原老站点优势 + 真实 PTY 截图 | 合并 codewhale.net 站点计划，主页改用真 PTY 文本替代 PNG |
| 5 | [#6619](https://github.com/Hmbown/Codewhale/pull/6619) | **fix(tools)**: 工具输出的统一可恢复体积预算（#6508）| 替代 #6607；4000 字符硬截断删除，答案不再被腰斩 |
| 6 | [#6620](https://github.com/Hmbown/Codewhale/pull/6620) | **fix(catalog)**: Codewhale 目录修正同时在线生效 | #6396 系列；离线 seed 不再是唯一事实来源 |
| 7 | [#6612](https://github.com/Hmbown/Codewhale/pull/6612) | **feat(catalog)**: 从审过的 spec 生成离线 seed 并锁定 | #6396 slice B，叠加在 #6620 上 |
| 8 | [#6622](https://github.com/Hmbown/Codewhale/pull/6622) | **fix(compaction)**: 用自己的话写 handoff 笔记 | 替换 Codex 模板；不再告诉模型"另一个语言模型"做过前序工作 |
| 9 | [#6635](https://github.com/Hmbown/Codewhale/pull/6635) | **fix(tui)**: 后台任务结束时告知用户 | #6565 二次跟进；显式终结通知 + 空闲状态保留 |
| 10 | [#6636](https://github.com/Hmbown/Codewhale/pull/6636) | **fix(tui)**: 坞站的 GIT/FILES/NIEWS 视图由统一 git probe 驱动 | #6565 第三次跟进；用单一 probe 替代三个解析器，徽章/Git 视图/模型回合行一致 |

> 另：[#6658](https://github.com/Hmbown/Codewhale/pull/6658) — `web/lib/changelog.generated.ts` 不再入库（衍生产物在构建期生成），同日已合并两次 race 导致 main 变红，强烈建议立刻合入。

---

## 📈 功能需求趋势

从过去 24 小时的 34 条更新 Issue 中可清晰识别出五大方向：

1. **🛡️ 信任与凭证管理** — 静态凭证掩码、mid-session 凭证输入（#6263）、诚实审批超时（#6601）。是 0.10.1 信任线的核心。

2. **🧱 会话与运行时权威性** — Session 文档作为唯一权威（#6144/#6639/#6640/#6621/#6645）、孤儿会话修复、HTTP 线程绑定快照、undo 路径化（#6644）。这一系列 PR 一次性重写了 session 身份与文件快照的关系。

3. **📚 模型目录与厂商生命周期** — 模型 ID 退役传播（#6035）、目录修正同步（#6620/#6612/#6643）、AICraft 描述符补全（#6616/#6304）。反映社区对"模型下线/迁移"的强烈担忧。

4. **🐳 跨表面宠物（Pet）** — #6109/#6155 持续推进浏览器 / TUI / 原生端的共享 owner、确定性世界与回放模型。

5. **⚙️ 后台与子代理治理** — background shell 父进程死亡清理（#6654）、session_id 在每次 spawn 重生（#6659）、Decision Gate 加速例行决策（#6603）、子代理只读命令识别（#6637）。

---

## 💢 开发者关注点

- **🔴 TUI 渲染一致性**
  - [#6651](https://github.com/Hmbown/Codewhale/issues/6651) 失焦时不刷新
  - [#6652](https://github.com/Hmbown/Codewhale/issues/6652) 长时运行后滚动呈"果冻感"——内容滚动不同步，提示可能存在重绘节流/帧缓冲的累积问题
  - 这两项均为 [luestr](https://github.com/luestr) 提交，复现门槛低，影响所有长任务用户

- **⌨️ 键盘快捷键可靠性**
  - [#6650](https://github.com/Hmbown/Codewhale/issues/6650) Ctrl+T 切换思考强度需按 3 次才响应——键位重复事件被合并或节流，与"果冻感"可能同源

- **🪟 Windows 终端回归**
  - [#6427](https://github.com/Hmbown/Codewhale/issues/6427) 0.10.0 多行粘贴行为破坏——bracketed paste / paste burst 检测与 `composer_multiline_mode=false` 组合下的协议边界需要更明确

- **🧊 静默引擎冻结**
  - [#6184](https://github.com/Hmbown/Codewhale/issues/6184) 长工具回合中途模型停止输出但**无错误、无日志、无崩溃条目**——这是当前最高优先级的基础设施级反馈；社区建议至少在 engine 层加入"无输出心跳检测 + 可观察信号"

- **🪦 厂商模型 ID 退役**
  - [#6035](https://github.com/Hmbown/Codewhale/issues/6035) 真实用户在 `deepseek-v4-flash` → `deepseek-flash` 后经历 fleet/agent profile 仍指向旧 ID 的连锁问题；说明跨配置的 ID 迁移尚未建立

---

> *本日报由 GitHub Issues/PR 数据自动汇总生成。0.10.1 已进入合并密集期，建议关注 0.10.1 milestone 的关闭节奏，以及 [luestr](https://github.com/luestr) 提交的三项 TUI 渲染相关 Issue 是否能在 0.10.2 优先处理。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*