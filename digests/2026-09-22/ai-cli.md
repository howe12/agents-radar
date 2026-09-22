# AI CLI 工具社区动态日报 2026-09-22

> 生成时间: 2026-09-22 02:49 UTC | 覆盖工具: 9 个

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

**报告日期：2026-09-22**
**数据范围：过去 24 小时（2026-09-21 ~ 2026-09-22）**

---

## 1. 生态全景

当前 AI CLI 生态进入"**平台化深水区**"，各工具已从单纯的命令行界面演变为可扩展的智能体运行环境，扩展钩子（Hooks/Mods/Skills）成为下一阶段竞争焦点。**多代理编排、长会话稳定性、Windows 跨平台质量**是横跨所有工具的三大共性挑战。版本迭代节奏两极分化——OpenAI Codex 单日发布 7 个 alpha、Qwen Code 同步更新 4 类产物，而 Kimi Code 则已正式归档并将接力棒交给原生二进制新版本，标志着 Python 时代的 AI CLI 正在让位于 Rust/原生架构。与此同时，**标准化生态协议（AGENTS.md、MCP）** 持续渗透，社区对供应商锁定与配置迁移成本的敏感度显著上升。

---

## 2. 各工具活跃度对比

| 工具 | Issues (24h) | PRs (24h) | Release 状态 | 核心信号 |
|------|-------------|-----------|---------------|----------|
| **Claude Code** | 50 | 2 | 无新版本 | Mods/Hooks 进入发布倒计时 |
| **OpenAI Codex** | 10+ | 10+ | **7 个 alpha**（0.155 / 0.156 / 0.157 三轨） | 高频多轨迭代，配额问题成头号痛点 |
| **Gemini CLI** | 10+ | 10+ | 1 nightly（v0.62.0） | v0.62 进入稳定性收敛阶段 |
| **Copilot CLI** | ~50 | 2 | **3 个版本**（v1.0.87 / 88-0 / 88-1） | 版本节奏密，PR 端偏低 |
| **Kimi Code CLI** | 2 | 3 | **v1.51.0 归档最终版** | 仓库正式归档，迁向 Kimi Code |
| **OpenCode** | ~50 | ~50 | v1.18.32 补丁 | 大量历史 Issue 批量关闭，V2 架构升温 |
| **Pi** | 10+ | 10+ | **v0.87.0**（ContextEditEntry） | 扩展边界契约正式定义 |
| **Qwen Code** | 44 | 50 | v0.24.3 + SDK + Desktop + Nightly | 多产物同步发布，但发布链断裂（v0.24.2 Windows 包缺失） |
| **DeepSeek TUI** | — | — | 无数据 | — |

**热度概览**：
- 🔥 **迭代最密集**：OpenAI Codex（单日 7 alpha）、Qwen Code（4 类产物同步）
- 🔥 **互动量最高 Issue**：Claude Code #91870（207 💬）、Codex #41220（51 💬）、Qwen Code #11872（13 💬）
- 🔥 **点赞最高 Issue**：Claude Code #31005（379 👍，已 CLOSED）、Codex #44561（69 👍，Astra 星空特效）

---

## 3. 共同关注的功能方向

| 共同诉求 | 涉及工具 | 具体表现 |
|----------|---------|----------|
| **扩展/钩子机制** | Claude Code（Mods/Hooks）、Copilot CLI（skills）、Gemini CLI（subagents/skills）、Pi（ContextEditEntry）、Qwen Code（managed extensions）、OpenCode（chat.model hook） | 6/7 工具均在投入"插件式扩展"——Claude Code 即将上线函数钩子；Pi 已通过 v0.87 规范化 ContextEditEntry；OpenCode 新增插件级 chat.model hook |
| **Windows 平台稳定性** | Claude Code（Cowork VM 内存泄漏 / MSIX 升级）、Codex（Desktop 发送按钮置灰 / 沙箱失败）、OpenCode（端口不释放 / PowerShell 子进程残留）、Pi（WezTerm fullscreen 图像 / Windows 10 conhost）、Qwen Code（Desktop 包整体缺失） | **几乎全军覆没**，且多涉及内核驱动、Plan9 挂载、PowerShell 兼容等系统级问题 |
| **MCP 协议生态** | Claude Code（elicitation）、Codex（Guardian v2 / MITM CA）、Copilot CLI（OAuth / BigInt / 双协议握手）、Qwen Code（MCP App / Tableau 集成） | MCP 从"能用"走向"企业可生产"——OAuth redirect、BigInt 序列化、双协议握手等细节集中暴雷 |
| **多代理 / Subagent 编排** | Claude Code（`send_message` 不投递）、Gemini CLI（subagent 假成功 / 无限挂起）、Copilot CLI（session branching / subagent 模型组合）、Qwen Code（Managed Agent 双路径架构） | 子代理可靠性成为共识性短板——Gemini CLI 三个 P1 Issue 全部关乎此 |
| **AGENTS.md 与标准化配置** | Claude Code #31005（379 👍）、Gemini CLI（`.gemini/agents/*.md` 软链不识别）、Qwen Code（managed extensions）、OpenCode（hashline 编辑模式） | 标准化规范已成事实标准，缺位即形成生态摩擦 |
| **长会话性能与稳定性** | Pi（macOS 长会话 100% CPU / Windows fullscreen 重绘）、Codex（700MB–2GB 会话日志膨胀）、Copilot CLI（V8 4GiB OOM）、OpenCode（V8 OOM / ResizeObserver 崩溃） | 普遍现象，根因多为 V8 堆上限 + 全量重绘 + 内存泄漏 |
| **多模型动态路由** | Copilot CLI（Auto 模式模型池，#4218 16👍）、OpenCode（chat.model hook #50448）、Pi（Grok 4.7 + Bedrock 目录清理 + canonical turn attribution） | "按任务动态选模型"从特性诉求走向基础设施 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------|----------|----------|
| **Claude Code** | **平台化扩展（Mods）+ Cowork 跨端协同** | 企业协作、跨平台桌面用户 | CLI 主线 + Cowork VM（Windows/macOS）、AGENTS.md 标准化推进者 |
| **OpenAI Codex** | **多轨高频迭代 + 企业级配额透明化** | 多订阅档用户、Windows Desktop 依赖者、Guardian 审查链路用户 | 多分支 alpha 并行 + Guardian v2 安全层 + Codex Web/App 多端 |
| **Gemini CLI** | **子代理可观测性 + AST 感知工具链** | 学术/技术研究者、多代理实验者 | 0.62 系列快速收敛、Auto Memory、Browser Agent 强化 |
| **Copilot CLI** | **GitHub 原生集成 + 企业 managed-settings** | GitHub 生态企业用户、BYOK 接入者 | v1.0.88 系列、managed-settings + 严格模式、OSC 777 终端通知 |
| **Kimi Code CLI** | **已归档，迁向原生二进制** | 历史 Python 版用户（需迁移） | 转向 Rust + 原生二进制重构（Kimi Code CLI） |
| **OpenCode** | **多模型路由（Zen）+ 嵌入式集成** | 多模型爱好者、第三方应用嵌入方 | V2 服务架构、多 MCP 进程、嵌入式 SDK 标识 |
| **Pi** | **规范化扩展边界 + Provider 抽象标准化** | 扩展开发者、Provider 集成者 | ContextEditEntry + canonical turn attribution + disposition 三态 |
| **Qwen Code** | **Web Shell + Managed Agent 平台化** | Web/移动端用户、多 Agent 平台构建者 | Harness → Java 控制平面 → Runtime Broker 三层架构 |

**关键差异点**：
- **扩展机制成熟度**：Pi > Claude Code（即将上线）> Copilot CLI > Gemini CLI > Qwen Code > OpenCode
- **多代理编排投入**：Qwen Code（Managed Agent 端到端预览）> Gemini CLI（subagent 状态机）> Claude Code（多会话协议）
- **跨平台投入**：Copilot CLI（managed-settings 跨平台一致性）> Claude Code（Cowork 三端）> 其他
- **标准化领导力**：Claude Code（AGENTS.md）、OpenCode（hashline）、Qwen Code（worktree 管理）

---

## 5. 社区热度与成熟度

### 🟢 高度成熟（生态完整、平台化领先）
- **Claude Code**：Mods/Hooks 进入发布倒计时，平台化战略清晰；Issue #91870 互动量进入历史前 5
- **Copilot CLI**：v1.0.88 节奏稳定，BYOK / OAuth / 终端通知等基础设施持续完善

### 🟡 快速迭代期（功能丰富、稳定收敛中）
- **OpenAI Codex**：7 个 alpha 单日发布，但 Windows Desktop 与配额透明度仍是硬伤
- **Gemini CLI**：v0.62 nightly 进入稳定性收敛，安全/状态机 PR 占比显著上升
- **Pi**：v0.87.0 通过 ContextEditEntry 标志扩展生态进入分水岭

### 🟠 平台化转型期（架构演进、痛点密集）
- **OpenCode**：V2 服务架构引发新讨论（多 MCP 进程、Bash 管道数据完整性），Desktop Electron 资源失控成焦点
- **Qwen Code**：Managed Agent 双路径架构提案 + Web Shell 体验完善，多产物发布链脆弱

### 🔴 归档 / 过渡期
- **Kimi Code CLI**：v1.51.0 归档最终版，移交至原生二进制 Kimi Code CLI

---

## 6. 值得关注的趋势信号

### 📌 趋势 1：**"扩展钩子"成为下一代竞争核心**

Claude Code 即将上线的函数钩子、Pi 的 ContextEditEntry、OpenCode 的 chat.model hook、Qwen Code 的 managed extensions——**所有头部工具都在投入"插件式扩展能力"**。这意味着 CLI 工具正从"对话界面"演变为"Agent 运行时"，**可观测、可拦截、可定制**成为新基准。

> **对开发者的参考价值**：现在开始投资自己工具的"扩展生态契约"（类似 OpenAPI 的 Extension API），将在下一阶段获得显著的网络效应红利。

### 📌 趋势 2：**Windows 平台成为系统性瓶颈**

Cowork VM 内存泄漏（Claude Code）、Desktop 发送按钮置灰（Codex）、端口不释放（OpenCode）、fullscreen 图像渲染（Pi）、Desktop 包整体缺失（Qwen Code）——**几乎没有一个工具能完整覆盖 Windows**。这不是个别 bug，而是 AI CLI 工具在系统级 API（PowerShell、ConPTY、Seatbelt、MSIX、Plan9）上的普遍欠债。

> **对开发者的参考价值**：Windows 用户的体验落差是 2-3 年级别的历史欠债，跨平台投入产出比将持续走高；任何针对 Windows 稳定性的专门投入都将形成差异化优势。

### 📌 趋势 3：**MCP 从"能用"走向"企业可生产"**

Guardian v2 分类器（Codex）、BigInt 序列化（Copilot CLI）、双协议握手（Copilot CLI）、Atlassian OAuth redirect（Copilot CLI）、Tableau App 集成（Qwen Code）——**MCP 的边界用例正在快速扩张**，但细节（OAuth scope、序列化、协议一致性）大量崩塌。

> **对开发者的参考价值**：MCP 工具开发者应优先关注**协议边界 + 错误可读性 + OAuth 体验**这三件事，而非单纯增加功能。

### 📌 趋势 4：**AGENTS.md 标准化已成不可逆趋势**

Claude Code #31005 累计 379 👍、被官方纳入路线图但仍关闭（duplicate），Gemini CLI 的软链 agent 不被识别，OpenCode 的 hashline 编辑模式——**标准化配置规范正在穿透所有工具**，缺位者将面临生态摩擦。

> **对开发者的参考价值**：如果你的工具尚未支持 AGENTS.md / `.agents/skills/`，应进入路线图优先级前列。

### 📌 趋势 5：**多代理编排的"假成功"成为 P1 级共识痛点**

Gemini CLI 子代理回合耗尽仍报 GOAL 成功（#22323）、Claude Code `send_message` 不投递（#86279）、Copilot CLI Auto 模式不可控（#4218）——**多代理系统的状态机可观测性**远未成熟，"

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：2025-10 ~ 2026-09 ｜ 数据源：anthropics/skills 仓库**

---

## 一、热门 Skills（PR）排行

> 注：PR 评论数数据存在缺失，按仓库热度与社区响应排序筛选。

### 1. 🥇 skill-creator 可靠性修复（PR #1298）
- **功能**：修复 `skill-creator` 的触发评估逻辑，处理 Windows 兼容与运行时失败
- **讨论热点**：触发评估（trigger eval）长期报告虚假 miss 与无效评分；`select()` 在 Windows 子进程管道上失败；负样本被错误归类
- **状态**：OPEN ｜ 最近活跃 2026-09-16
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 2. 🥈 proofcore-contract-auditor（PR #1771）
- **功能**：Web3 智能合约审计 Skill，支持 Solidity / Rust 静态分析，并将审计证明锚定到 TON 区块链
- **讨论热点**：零存储 Merkle 协议实现，是首个进入官方仓库的链上审计 Skill
- **状态**：OPEN ｜ 创建于 2026-09-15
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 3. 🥉 mcp-builder 兼容性修复（PR #1742）
- **功能**：适配 `mcp>=2.0` 中 `streamable_http_client` 改名及自定义 Header 机制
- **讨论热点**：直接影响所有依赖 MCP 的下游 Skill，社区修复意愿高
- **状态**：OPEN ｜ 关联 Issue #1668
- 🔗 [PR #1742](https://github.com/anthropics/skills/pull/1742)

### 4. md2video-audio（PR #1703）
- **功能**：将 Markdown 文档零成本转换为带 AI 配音的演示级 MP4 视频（基于 Marp）
- **讨论热点**：内容生产自动化场景典型用例，近期更新频繁
- **状态**：OPEN
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 5. pyxel 复古游戏开发（PR #525）
- **功能**：用 Python + Pyxel 引擎引导 Claude 创建、调试、验证复古游戏，支持无头确定性运行
- **讨论热点**：跨长期 PR（半年以上），说明社区对"非生产向 / 学习向"Skill 也有明确需求
- **状态**：OPEN ｜ 长尾活跃
- 🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

### 6. document-typography（PR #514）
- **功能**：防止 AI 生成文档的排版问题——孤词换行、寡妇段落、编号错位
- **讨论热点**：暴露了"AI 生成文档默认质量"这一长期痛点；评论密度最高的功能型 PR 之一
- **状态**：OPEN
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 7. scnet-hpc（PR #1615）
- **功能**：通过 Profile 化 SSH + Slurm 工作流操作 SCNet 高性能计算集群
- **讨论热点**：垂直领域基础设施接入，反映企业 / 科研用户对接 HPC 的真实诉求
- **状态**：OPEN
- 🔗 [PR #1615](https://github.com/anthropics/skills/pull/1615)

### 8. AWT - AI Watch Tester（PR #822）
- **功能**：让 Claude 拥有视觉与浏览器控制能力，运行零代码 E2E 测试
- **讨论热点**：测试自动化的高优先级方向；近半年持续被关注
- **状态**：OPEN
- 🔗 [PR #822](https://github.com/anthropics/skills/pull/822)

---

## 二、社区需求趋势（Issues 提炼）

| 优先级 | 需求方向 | 代表 Issue | 讨论强度 |
|--------|---------|-----------|---------|
| 🔴 极高 | **Skills 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 `anthropic/` 命名空间 | 43 评论 |
| 🟠 高 | **企业级协作与共享** | [#228](https://github.com/anthropics/skills/issues/228) 组织内 Skill 一键共享 | 16 评论 |
| 🟠 高 | **Skill 触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% | 12 评论 |
| 🟡 中 | **Skills 持久化与找回** | [#62](https://github.com/anthropics/skills/issues/62) 用户 Skill 莫名丢失 | 10 评论 |
| 🟡 中 | **上下文压缩与记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | 9 评论 |
| 🟡 中 | **Skill 元能力治理** | [#83](https://github.com/anthropics/skills/pull/83) quality / security analyzer | 8 评论 |
| 🟡 中 | **插件去重与打包** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复 | 6 评论 |
| 🟢 中 | **AI Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance（已关闭） | 6 评论 |
| 🟢 中 | **Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) 将 Skills 暴露为 MCP | 4 评论 |
| 🟢 中 | **多云 / 多平台支持** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 兼容 | 4 评论 |
| 🟢 中 | **推理质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量门 | 4 评论 |
| 🟢 低 | **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次注入 156k tokens | 4 评论 |

**趋势小结**：社区诉求已从"创建更多 Skill"明显转向 **质量、安全、可靠性与可治理性** 四个维度。

---

## 三、高潜力待合并 Skills（近期可落地）

| Skill | 关键能力 | 推荐优先级 | 链接 |
|-------|---------|----------|------|
| **blast-radius** | 批量 / 破坏性写入前的"爆炸半径"检查清单 | ⭐⭐⭐⭐⭐ | [PR #1776](https://github.com/anthropics/skills/pull/1776) |
| **testing-patterns** | 完整测试方法论（Testing Trophy + React 组件测试 + 覆盖率哲学） | ⭐⭐⭐⭐⭐ | [PR #723](https://github.com/anthropics/skills/pull/723) |
| **proofcore-contract-auditor** | 智能合约自动化审计 + 链上公证 | ⭐⭐⭐⭐ | [PR #1771](https://github.com/anthropics/skills/pull/1771) |
| **md2video-audio** | Markdown → 配音 MP4 零成本内容生产 | ⭐⭐⭐⭐ | [PR #1703](https://github.com/anthropics/skills/pull/1703) |
| **AWT (AI Watch Tester)** | 视觉驱动零代码 E2E 测试 | ⭐⭐⭐⭐ | [PR #822](https://github.com/anthropics/skills/pull/822) |
| **document-typography** | AI 生成文档排版质量自动校正 | ⭐⭐⭐⭐ | [PR #514](https://github.com/anthropics/skills/pull/514) |
| **ODT Skill** | OpenDocument 创建 / 模板填充 / HTML 解析 | ⭐⭐⭐ | [PR #486](https://github.com/anthropics/skills/pull/486) |
| **pyxel 复古游戏开发** | Python 复古游戏开发 + 无头验证 | ⭐⭐⭐ | [PR #525](https://github.com/anthropics/skills/pull/525) |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 更可靠、更安全、更企业化」—— 元工具治理（skill-creator / analyzer）、命名空间与权限边界、组织级共享与上下文控制，正在取代「新增功能 Skill」成为下一阶段的核心议题。**

**关键拐点信号**：
- 评论量最高的 Issue #492 直接质疑社区 Skill 的**信任根**——生态已从"能不能用"迈入"敢不敢用"
- 高呼声 PR 集中在 `skill-creator` 的修复（#1298、#1769、#539），反映**对元工具质量的高度敏感**
- 多条 Issue（#1487、#62、#189）指向**上下文窗口、持久化、插件去重**——基础设施类问题正在上升

---

*报告生成时间：2026-09-22 ｜ 基于 anthropics/skills 公开数据*

---

# Claude Code 社区动态日报

**📅 2026-09-22**

---

## 1. 今日速览

今日社区最重大的事件是 **Mods / Function Hooks 扩展机制即将落地**——官方在 #91870 正式表态将在数周内（而非数天）发布函数钩子能力，标志着 Claude Code 平台化战略的关键一步。同时，呼声最高的 **AGENTS.md / `.agents/skills/` 支持**因官方已在路线图中被标记为重复而关闭（#31005，累计 379 👍）。Bug 侧则集中在 Windows Cowork VM 服务的多个严重问题以及 macOS 沙箱的兼容性问题。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 #91870 Mods — 让 Claude 扩展性提升 10 倍
- **作者**: poteat | 💬 207 | 👍 124 | 状态: OPEN
- **为什么重要**: 官方在该 Issue 正式发布社区更新，确认**函数钩子（function hooks）将在数周内发布**，而非数天。这是 Claude Code 从 CLI 工具迈向可扩展平台的标志性事件。设计大量吸收了社区高信号反馈。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/91870)

### ⭐ #31005 支持 AGENTS.md 与 `.agents/skills/` 规范
- **作者**: kvnwolf | 💬 29 | 👍 379 | 状态: CLOSED (duplicate)
- **为什么重要**: 自 2025 年 8 月起社区持续呼吁，已被官方在路线图中覆盖因而关闭。379 个 👍 是所有同类请求中票数最高的，反映了社区对**标准化智能体配置规范**的强烈共识。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/31005)

### 🐛 #45297 [Bug] Cowork 不支持 Windows UNC 路径
- **作者**: mrsilva | 💬 29 | 👍 30 | 状态: OPEN
- **为什么重要**: 影响企业用户在企业网盘/共享路径下使用 Cowork 的能力，是 Windows 平台核心功能缺失。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/45297)

### 🐛 #87500 [Bug] API Connection dropped (ECONNRESET) 高频报错
- **作者**: iampandiyan | 💬 14 | 状态: CLOSED
- **为什么重要**: 5 小时内持续断连事件，影响所有依赖 Claude Code 的工作流，已自动转交支持处理。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/87500)

### 🐛 #73468 [Bug] macOS 沙箱在多 Git Worktree 下完全不可用
- **作者**: ehsan | 💬 11 | 👍 6 | 状态: CLOSED
- **为什么重要**: 由于 Seatbelt profile 经 `sandbox-exec -p` 传递时超过 `ARG_MAX`，导致**所有**沙箱化 Bash 命令失败（包括 `printf ok`）。2.1.197 版本已修复。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/73468)

### 🐛 #66269 [Bug] macOS 全屏渲染器下复制 CJK 文本乱码
- **作者**: reggiechan74 | 💬 9 | 状态: CLOSED
- **为什么重要**: 屏幕显示正常但剪贴板内容乱码，影响所有中文/日文/韩文用户。切换至 `tui: default` 模式可临时规避。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/66269)

### 🐛 #93071 [Bug] Windows Cowork 沙箱助手 Plan9 驱动挂载失败
- **作者**: hector751 | 💬 7 | 状态: OPEN
- **为什么重要**: 自 9 月 8 日起 `device_bash` 完全失效，重启和升级均无法恢复，影响 Windows Cowork 核心交互。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/93071)

### 🐛 #79174 [Bug] VSCode 中 MCP elicitation 能力被自动拒绝
- **作者**: hjmurmur | 💬 7 | 👍 3 | 状态: CLOSED
- **为什么重要**: 在声明 `elicitation` 能力的同时自动拒绝所有 `elicitation/create` 请求，导致 MCP 协议能力在交互式会话中完全失效。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/79174)

### 🐛 #94198 [Bug] Windows CoworkVMService 非分页池内存泄漏
- **作者**: RocastroM | 💬 6 | 👍 1 | 状态: OPEN
- **为什么重要**: 内核态 `NtFC/ntfs.sys` 泄漏，必须完整重启 PC 才能清空，Shutdown 不可恢复——属于系统稳定性严重问题。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/94198)

### 🐛 #86279 [Bug] 跨会话 `send_message` 永不投递
- **作者**: nourcosarl | 💬 6 | 状态: CLOSED
- **为什么重要**: 多会话编排能力的核心接口失灵，目标会话挂起在空轮次，破坏 `mcp__ccd_session_mgmt` 协议。
- [查看 Issue](https://github.com/anthropics/claude-code/issues/86279)

---

## 4. 重要 PR 进展（Top 10）

> ⚠️ 过去 24 小时仅 2 个 PR 被更新，均无评论，以下为全部内容：

### 📝 #95932 为 claude.ai GitHub 连接问题添加 Issue 模板
- **作者**: dicksontsai | 状态: CLOSED
- **内容**: 新增 GitHub 连接问题的 issue 表单，自动应用 `github-integration` 标签并收集截图、操作意图与诊断信息，提升 GitHub 集成问题分类效率。
- [查看 PR](https://github.com/anthropics/claude-code/pull/95932)

### ⚙️ #95423 diff mod：只读 shell 命令不再触发重新拉取
- **作者**: poteat | 状态: OPEN
- **内容**: 修复了 `diff` Mod 在每次 Bash/PowerShell 调用后都重新拉取差异的问题。现在仅当命令可能修改文件时才刷新；`ls`、`git status`、`cat`、`grep` 等只读命令会被跳过，显著减少网络与渲染开销。
- [查看 PR](https://github.com/anthropics/claude-code/pull/95423)

---

## 5. 功能需求趋势

综合 50 条更新 Issue，可归纳出以下五大方向：

| 趋势 | 代表 Issue | 热度信号 |
|------|-----------|---------|
| **平台扩展性（Mods / Hooks）** | #91870（207 💬，124 👍） | 官方确认数周内发布函数钩子 |
| **智能体配置标准化** | #31005（379 👍） | 社区呼吁 13 个月+，官方已纳入路线图 |
| **Cowork / Desktop 跨平台质量** | #45297, #93071, #94198, #94432, #95697 | Windows Cowork VM、macOS 桌面 UI 多个严重缺陷 |
| **TUI / 交互体验打磨** | #66269（CJK）、#87631（Esc 误删）、#87790（Markdown 重编号）、#95733（quote-reply） | 大量小而具体的可用性问题 |
| **MCP 协议与企业集成** | #79174、#91063（DesignSync 无头模式）、#87876（代理下订阅失效） | 协议边界与企业级用例的成熟需求 |

---

## 6. 开发者关注点

**核心痛点（按频次归纳）：**

1. **Windows 平台稳定性成为头号瓶颈** —— Cowork VM 服务的多个严重 Bug（内存泄漏、MSIX 升级失败、Plan9 驱动失效、阻止自更新）使 Windows 用户频繁需要重启 PC。MSIX 隐身升级的 `0xEXT0007X20` 错误被确认为多起"看似不相关"故障的共同根因。

2. **Mods/Hooks 即将上线，开发范式将变** —— 官方确认函数钩子进入发布倒计时，社区已围绕"在哪些钩子上提供拦截能力"展开深度讨论（#91870 是平台历史上互动量最高的 Issue 之一）。

3. **标准化生态协议诉求强烈** —— `AGENTS.md` / `.agents/skills/` 在众多同类工具中已成为事实标准，Claude Code 的缺位正在形成生态摩擦。

4. **macOS 沙箱与国际化细节** —— 多 Git Worktree 触发 `ARG_MAX`、CJK 文本复制乱码等问题反映出平台对非英语用户与复杂仓库结构的支持仍有欠缺。

5. **多会话 / 多 Agent 协同仍是早期阶段** —— `send_message` 不投递、DesignSync 无 TTY 授权路径等，提示企业级 Agent 编排仍需大量基础工作。

---

*日报基于 2026-09-22 过去 24 小时内 anthropics/claude-code 仓库的 50 条 Issue 与 2 条 PR 更新生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-22 | 数据来源：github.com/openai/codex**

---

## 📌 今日速览

今日 Codex 仓库进入 **高频迭代节奏**，单日内连续发布 7 个 Rust CLI alpha 版本（覆盖 0.155 / 0.156 / 0.157 三个分支），与此同时社区反馈继续聚焦于三大长期未解的痛点：**配额消耗异常、Windows Desktop 稳定性、以及会话/线程管理的一致性问题**。PR 端的工作则集中在 **Guardian v2 分类器、OAuth/MITM 安全加固、Code Mode 工具消息** 等基础设施层面的改进。

---

## 🚀 版本发布

过去 24 小时内共发布 **7 个 Rust CLI alpha 版本**，节奏明显加速，提示团队正在进行主线合并前的密集回归：

| 版本 | 性质 | 备注 |
|------|------|------|
| [rust-v0.157.0-alpha.3](https://github.com/openai/codex/releases) | alpha | 主线最新 |
| [rust-v0.157.0-alpha.2](https://github.com/openai/codex/releases) | alpha | 主线 |
| [rust-v0.157.0-alpha.1](https://github.com/openai/codex/releases) | alpha | 主线首个 alpha |
| [rust-v0.156.0-alpha.17](https://github.com/openai/codex/releases) | alpha | 0.156 收尾 |
| [rust-v0.156.0-alpha.16](https://github.com/openai/codex/releases) | alpha | 0.156 收尾 |
| [rust-v0.156.0-alpha.14](https://github.com/openai/codex/releases) | alpha | 0.156 收尾 |
| [rust-v0.155.0-alpha.16.1](https://github.com/openai/codex/releases) | alpha | 0.155 维护分支 |

> **观察**：0.155 / 0.156 / 0.157 三个分支并行维护表明，Codex CLI 当前采用多轨 alpha 流水线策略，可能与多模型/多客户端（CLI、App Desktop、Codex Web）的差异化发布节奏有关。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#41220 — Codex 配额异常消耗与计账不一致（Meta 汇总）](https://github.com/openai/codex/issues/41220)
- **关注度**：💬 51 | 👍 17
- **为什么重要**：这是当前最重要的"汇总型"Issue，跨报告追踪同一症状族——用户的订阅额度/购买额度在远低于历史基线的情况下被快速耗尽。截至今日已有 **51 条评论**，被官方用作集中讨论入口。
- **社区反应**：多家独立复现，怀疑涉及后端使用量计算口径问题（Windows 端尤其严重）。

### 2. [#25220 — Windows 捆绑插件（Computer Use / Browser / LaTeX）在 EFS 加密环境下不可用](https://github.com/openai/codex/issues/25220)
- **关注度**：💬 43 | 👍 4
- **为什么重要**：影响 Microsoft Store 安装渠道下 Windows 11 China 用户的基础功能可用性，原因是 `copyfile` 在 EFS 加密的 WindowsApps 目录失败。Issue 跨越两个版本（26.527.3686.0 / 26.519.11010.0）仍未修复。

### 3. [#44561 — 默认关闭 Astra "星光" 装饰特效（whimsy effect）](https://github.com/openai/codex/issues/44561)
- **关注度**：💬 26 | 👍 69
- **为什么重要**：👍 数高达 69，是今日**点赞最高的 Issue**。用户在 0.154.0 上需要手动写 `[tui] whimsy = false` 才能关闭 Astra 主题的星空特效，多次被误判为屏幕故障。属于典型的"低改造成本、高满意度"UX 改进。

### 4. [#24948 — Codex 会话日志膨胀至 700MB–2GB](https://github.com/openai/codex/issues/24948)
- **关注度**：💬 31 | 👍 4
- **为什么重要**：根因是 remote compaction 反复写入原始工具输出与历史快照，长期会话很快撑爆磁盘。用户已升级到 0.118.0 + Pro 订阅，问题依然存在。

### 5. [#45626 — Windows Desktop 首轮对话后无法发送后续消息](https://github.com/openai/codex/issues/45626)
- **关注度**：💬 20 | 👍 3
- **为什么重要**：影响 Windows 26.908.70816 桌面版**所有**会话（新建和现有），CLI 端不受影响。Send 按钮在完成首轮后持续置灰，社区已多次复现。

### 6. [#45835 / #46172 / #46780 / #47144 / #47146 — "Selected model is at capacity" 高频复现](https://github.com/openai/codex/issues/45835)
- **关注度**：💬 各 20/15/8/2/3
- **为什么重要**：同一错误在 App 与 CLI 上对 GPT-5.6 Sol、Luna、GPT-6 Astra 多模型复现，**Plus / Pro / Pro Lite / Pro 20x 多档订阅都中招**。错误信息本身缺乏诊断价值（部分工单甚至把报错文字填到了版本号字段），已成为 Windows 用户最常见的痛点之一。

### 7. [#40880 — Codex 5 小时用量窗口消耗速度异常](https://github.com/openai/codex/issues/40880)
- **关注度**：💬 11 | 👍 3
- **为什么重要**：用户报告在 0.149.1 + gpt-5.6-sol medium 场景下，5 小时限额被"显著更快"消耗，与 #41220 形成相互佐证。

### 8. [#46114 — Windows Desktop 沙箱初始化失败](https://github.com/openai/codex/issues/46114)
- **关注度**：💬 10 | 👍 3
- **为什么重要**：错误为 `failed to load AGENTS.md instructions for environment local`，所有新会话和恢复的旧会话都失败。提升/非提升、管理员重装、App Repair / Reset 全部无效，已上升为阻塞性问题。

### 9. [#40258 — GPT-5.6 Sol 模型目录按 `originator` 区分 272K / 872K 上下文窗口 [CLOSED]](https://github.com/openai/codex/issues/40258)
- **关注度**：💬 8 | 👍 0
- **为什么重要**：揭示了 `/backend-api/codex/models` 在同一账号下根据 HTTP header 返回不同上下文窗口的"双轨"问题。今日已关闭，建议跟进修复是否进入后端。

### 10. [#39421 — Marketplace 升级阶段目录泄漏 559GB / 4,972 个孤儿目录](https://github.com/openai/codex/issues/39421)
- **关注度**：💬 6 | 👍 1
- **为什么重要**：41 天内 `~/.codex/.tmp/marketplaces/.staging/` 累积出 559GB 垃圾（此前最高 277GB 记录）。curated clone 有 janitor 清理，市场插件却缺乏对应机制。属于"Linux 平台才暴露"的隐性资源耗损。

---

## 🛠️ 重要 PR 进展（精选 10 条）

> 今日 PR 几乎全部由 `copyberry[bot]` 提交，呈现高度自动化的合并节奏，可见仓库已建立较强的 bot-driven 提交流水线。

### 1. [#47162 — Guardian v2 分类器请求应用 workspace 路由](https://github.com/openai/codex/pull/47162)
保障分类器请求沿用所属线程的 workspace 路由与账号绑定，包括复用连接池与认证变更后的重试路径，对安全链路一致性意义重大。

### 2. [#47159 — MCP server status 暴露 HTTP origin](https://github.com/openai/codex/pull/47159)
新增可空字段 `httpOrigin`（仅返回 origin，剥离凭据/路径/查询/片段）。便于调试与策略审计。

### 3. [#47158 — Gateway OAuth 凭据持久化与错误脱敏加固](https://github.com/openai/codex/pull/47158)
修复了凭据 I/O 阻塞 async worker、取消的浏览器登录在写入未完成时释放锁、错误回显 authorization URL 中的密钥三类问题。

### 4. [#47155 — 恢复线程后忽略过期的 thread-close 通知](https://github.com/openai/codex/pull/47155)
旧运行时排队的关闭通知可能在 resume 后到达，因 thread ID 跨 reload 存活，错误处理会导致 TUI 异常退出或切换。

### 5. [#47143 — `codex exec-server` CLI 启动抽取为独立模块](https://github.com/openai/codex/pull/47143)
把参数定义、传输校验、配置加载、认证与关停编排从 `codex-rs/cli/src/main.rs` 抽离到 `exec_server_command.rs`，降低主线 main 的复杂度。

### 6. [#47142 — 独立 web search 走系统代理](https://github.com/openai/codex/pull/47142)
修复 `respect_system_proxy` 启用但 standalone web search 绕过代理的 bug，对企业内网用户影响显著。

### 7. [#47137 — 阻止 transcript 横向选择触发 autoscroll](https://github.com/openai/codex/pull/47137)
拖选顶/底行时原本会带动自动滚动，要求首次按下后产生纵向位移才激活滚动，UX 细节改进。

### 8. [#47132 — 网络代理支持调用方注入的 MITM CA](https://github.com/openai/codex/pull/47132)
新增 `network.mitm_ca` 配置（`certificate_file` / `private_key_file`），未提供时沿用自动生成 CA，企业级 HTTPS 解密场景更可控。

### 9. [#47130 — 移除 `gpt-5.6-sol` 的 `ultrafast` 服务等级](https://github.com/openai/codex/pull/47130)
`gpt-5.6-sol` 现仅保留 `priority`（Fast）。同步更新 multi-agent 工具定义的 scenario snapshot，提示后台流量调度策略有所调整。

### 10. [#47108 — Windows 文件系统 helper 保留关键运行时变量](https://github.com/openai/codex/pull/47108)
恢复被环境过滤器误删的 `SystemDrive` 与 `LOCALAPPDATA`，修复 MXC 在 Windows 上解析平台目录与创建沙箱 helper 进程失败的连锁问题。

> 备选关注：[#47122 — 文件 blob 上传超时 60s→5min](https://github.com/openai/codex/pull/47122)、[#47125 — Guardian reviews 增加 extra policy](https://github.com/openai/codex/pull/47125)、[#47113 — rollout/SQLite 持久化线程创建者身份](https://github.com/openai/codex/pull/47113)，分别对应大附件可靠性、安全审查可追溯性、跨端线程归属审计三条改进线。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 趋势特征 |
|------|----------------|----------|
| **配额与用量透明度** | #41220、#40880、#39398、#47144 等 | **热度最高**，覆盖 Plus / Pro / Pro Lite 多档订阅，是社区情绪最集中的方向 |
| **Windows Desktop 稳定性** | #45626、#46114、#45835、#46772、#45986、#47138 | Windows 端连续出现"会话不可用 / 沙箱失败 / 网络被拦截"等连锁问题，已成为最大跨平台短板 |
| **TUI 与交互细节** | #44561（69👍）、#47098、#47137、#47112 | "whimsy 特效关闭"、"有序列表标记渲染空白"、"横向选择误触滚动"等小问题密集出现，提示 TUI 正处于快速打磨期 |
| **模型目录与服务等级** | #40258、#47152、#47130 | GPT-5.6 Sol / Luna / GPT-6 Astra 在不同订阅、不同 originator 下的能力差异引发争议，后端目录策略需更透明的沟通 |
| **会话/线程生命周期** | #24191、#42628、#47155、#47114、#47113 | 远程 compaction 损坏会话、桌面端目录陈旧、resume 收到过期通知、线程创建者身份缺失等共同构成"会话可靠性"话题 |
| **安全审查与 Guardian** | #47163、#45881、#47125、#47162 | 用户对安全误报（cybersecurity 误判）与 Guardian 审查策略可配置化的诉求上升 |
| **插件 / Marketplace 生态** | #25220、#39421、#47132、#47159 | 插件分发（含 EFS 兼容、staging 清理、MITM CA）正成为下一步重点 |
| **可访问性 / 跨端一致性** | #46701、#39343 | 语音听写是否计费、Android 端缺失 `/compact /side /fork` 等

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-22** ｜ **数据来源：google-gemini/gemini-cli**

---

## 一、今日速览

今日 Gemini CLI 发布了 `v0.62.0-nightly.20260922.gd5b3e3acc` nightly 版本，重点修复了 proxy-agent 在 esbuild 下的互操作问题以及 ACP 模式下工具调用的更新顺序。与此同时，Issues/PR 数量依然活跃，社区关注的核心议题集中在 **子代理（subagent）可靠性**、**Auto Memory 安全与质量**、**浏览器代理（Browser Agent）兼容与稳定性**三大方向，整体修复 PR 中安全/沙箱/状态机类占比显著上升，显示出 0.62 系列正进入稳定性收敛阶段。

---

## 二、版本发布

### v0.62.0-nightly.20260922.gd5b3e3acc

本次 nightly 主要变更：

- **fix(core): normalize proxy-agent esbuild interop** — 统一 `https-proxy-agent` 与 `http-proxy-agent` 在 esbuild 打包下的 CJS/ESM 互操作，确保各类导入方式下的代理构造器解析一致 ([#29401](https://github.com/google-gemini/gemini-cli/pull/29401))
- **fix(cli): emit tool_call update prior to request_permission in ACP mode** — 修复 Agent-Client Protocol 模式下，工具需要在请求权限前先发出 `tool_call (pending)` 更新的问题 ([#29439](https://github.com/google-gemini/gemini-cli/pull/29439))

完整发版自动化由 [#29441](https://github.com/google-gemini/gemini-cli/pull/29441) 完成。

---

## 三、社区热点 Issues（按评论数排序，Top 10）

1. **[#22323] 子代理命中回合上限后仍报告 GOAL 成功**（P1，2 👍，13 评论）
   `codebase_investigator` 在达到 `MAX_TURNS` 后仍以 `status: "success"` 和 `Termination Reason: "GOAL"` 收尾，掩盖了真实中断。该 Bug 直接破坏子代理的可观测性与回滚判断，属 P1 级。
   👉 https://github.com/google-gemini/gemini-cli/issues/22323

2. **[#19873] 利用模型 Bash 亲和性的零依赖 OS 沙箱与执行后意图路由**（P2，9 评论）
   针对 Gemini 3 模型天然擅长链式调用 POSIX 工具的特性，提出零依赖沙箱与"post-execution intent routing"机制，对效率与安全双赢意义重大。
   👉 https://github.com/google-gemini/gemini-cli/issues/19873

3. **[#21409] Generalist agent 调用后永久挂起**（P1，8 👍，8 评论）
   高赞 P1 缺陷：一旦 CLI 委派给 generalist agent（包括最简单的创建目录）即会无限挂起，关闭子代理委派后可恢复，社区影响面广。
   👉 https://github.com/google-gemini/gemini-cli/issues/21409

4. **[#22745] 评估 AST 感知的文件读取/搜索/映射**（P2，7 评论）
   Epic 级议题：探索通过 AST 工具实现精确方法级读取、减回合/省 token、辅助 `codebase_investigator`，是 token 经济与上下文效率的关键探索方向。
   👉 https://github.com/google-gemini/gemini-cli/issues/22745

5. **[#21968] Gemini 不会主动使用 skills 和 sub-agents**（P2，6 评论）
   用户经验性反馈：模型在缺少显式指令时几乎不会主动调用自定义 skills 或子代理；描述再充分也不会自动触发。
   👉 https://github.com/google-gemini/gemini-cli/issues/21968

6. **[#26525] 为 Auto Memory 增加确定性脱敏并降低日志量**（P2，5 评论）
   安全相关：Auto Memory 把转录内容交给后端提取模型后才脱敏，存在敏感信息已入上下文的窗口期；skill 描述也可能被服务日志原样持久化。
   👉 https://github.com/google-gemini/gemini-cli/issues/26525

7. **[#22232] browser_agent 韧性增强：自动接管与锁恢复**（P3，4 评论）
   当前 `BrowserManager` 在持久化 profile 被锁时采取"快速失败"，需改进为自动接管/会话恢复，避免手动介入。
   👉 https://github.com/google-gemini/gemini-cli/issues/22232

8. **[#21983] browser 子代理在 Wayland 下失败**（P1，agent/browser，4 评论）
   在 Wayland 环境下 Browser 子代理 `Termination Reason: GOAL` 但实际失败，Linux 桌面用户受到直接影响。
   👉 https://github.com/google-gemini/gemini-cli/issues/21983

9. **[#20079] 软链形式的 agent 文件不被识别**（P2，4 评论）
   `~/.gemini/agents/filename.md` 若为符号链接则不被识别为子代理，限制了配置复用与跨设备同步。
   👉 https://github.com/google-gemini/gemini-cli/issues/20079

10. **[#24246] 工具数量 >128 时遭遇 400 错误**（P2，3 评论）
    当可用工具总数超过 400（原文为 400，可能笔误，但议题明确为大量工具场景）会触发 400，agent 需更智能地按作用域裁剪工具集。
    👉 https://github.com/google-gemini/gemini-cli/issues/24246

---

## 四、重要 PR 进展（Top 10）

1. **[#29336] 修复非系统策略目录的写权限校验**（enterprise，size/l）
   把 `isDirectorySecure` 校验从仅系统目录扩展到所有层级，并支持 POSIX/Windows 下的"当前用户拥有"语义，关闭 [#29311](https://github.com/google-gemini/gemini-cli/issues/29311)，是 v0.62 安全基线的重要组成。
   👉 https://github.com/google-gemini/gemini-cli/pull/29336

2. **[#29328] 修复 a2a-server 日志凭据泄露**（security，p1，size/l）
   解决两件事：1) `LOG_LEVEL` 被 `allowedServerKeys` 白名单传入却被硬编码 `info`；2) 日志输出携带凭据信息。属于 P1 安全修复。
   👉 https://github.com/google-gemini/gemini-cli/pull/29328

3. **[#29244] 工具写入原子化与同路径串行化**（core，p1，size/l）
   并行执行两个对同一路径的 `replace` 会导致静默丢写且均上报成功。本 PR 将其改为原子写+同路径串行，避免 race condition 破坏用户文件。
   👉 https://github.com/google-gemini/gemini-cli/pull/29244

4. **[#29332] 限制沙箱扩展递归深度**（core，p2，size/m）
   `sandbox_expansion_required` 反复返回时 `_execute` 无限递归触发 OOM。本 PR 引入递归深度上限。
   👉 https://github.com/google-gemini/gemini-cli/pull/29332

5. **[#29242] 修复 `isAuthenticationError` 把 `401` 当子串匹配**（core，p2，size/s）
   修复端口号 `4012` 等场景下被误判为认证错误而触发虚假重新登录的问题。
   👉 https://github.com/google-gemini/gemini-cli/pull/29242

6. **[#29333] 对按约定发现的策略目录进行权限校验**（enterprise，p2，size/m）
   解决用户目录与工作区目录"被读取即信任"的安全隐患，补齐 [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) 的姊妹变更。
   👉 https://github.com/google-gemini/gemini-cli/pull/29333

7. **[#29440] web-fetch 引用改用 UTF-8 字节偏移**（agent，size/m）
   解决非 ASCII（含 emoji、乱序引用）场景下 `web-fetch` 引用错位问题，对齐 `web-search` 已有的 UTF-8 处理逻辑。
   👉 https://github.com/google-gemini/gemini-cli/pull/29440

8. **[#29437] 后台 Shell 退出时清理临时目录**（core，p1，size/l）
   修复 `gemini-shell-*` 临时目录在命令进入后台后未随进程退出而清理的"孤儿文件"问题。
   👉 https://github.com/google-gemini/gemini-cli/pull/29437

9. **[#29327] 让 SDK `AgentShell` 真正支持 `env` 与 `timeoutSeconds`**（agent/sdk，p2，size/m）
   现有实现仅识别 `AgentShellOptions` 的一个字段，导致 `exec('sleep 30', { timeoutSeconds: 1 })` 仍跑满 30 秒。
   👉 https://github.com/google-gemini/gemini-cli/pull/29327

10. **[#29330] 在 logger 答复前保留已键入输入并只读一次**（cli，p2，size/m）
    修复 React StrictMode 下 `setPastSessionMessages` 在 `setCurrentSessionMessages` updater 内被调用的纯净性违规，并消除两个实际回归。
    👉 https://github.com/google-gemini/gemini-cli/pull/29330

**已合并/关闭的 PR：**
- [#29439](https://github.com/google-gemini/gemini-cli/pull/29439) — ACP 模式下 `tool_call (pending)` 先于 `request_permission` 发出（已进入 v0.62.0-nightly）
- [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) — proxy-agent esbuild 互操作规范化（已进入 v0.62.0-nightly）
- [#29237](https://github.com/google-gemini/gemini-cli/pull/29237) — `list_background_processes` 不再打印 `(Exit Code: null)`
- [#29438](https://github.com/google-gemini/gemini-cli/pull/29438) — CLA 配置测试

---

## 五、功能需求趋势

通过对当日活跃 Issues 的归类，社区诉求呈现以下聚类：

| 方向 | 代表议题 | 社区关注度 |
|---|---|---|
| **AST 感知工具链** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | 高（探索 token 节省与精确读取） |
| **Agent 自感知 / 可观测性** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) | 中（自描述、热键、`/bug` 报告包含子代理上下文） |
| **Auto Memory 系统加固** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | 高（脱敏、重试、inbox 校验） |
| **本地子代理 / Skills 体系** | [#20195](https://github.com/google-gemini/gemini-cli/issues/20195)、[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | 中（Sprint 1 持续推进） |
| **零依赖 OS 沙箱** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 中高（与 Gemini 3 bash 训练契合） |
| **任务跟踪持久化** | [#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | 中（替代 WriteToDo） |
| **Browser Agent 韧性** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 中（多场景下不一致） |
| **安全合规 / 凭据保护** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#29328](https://github.com/google-gemini/gemini-cli/pull/29328)、[#29336](https://github.com/google-gemini/gemini-cli/pull/29336) | 高（已成为 PR 主线） |

---

## 六、开发者关注点

综合 Issues 与 PR 评论，开发者当前反馈最集中的痛点与高频需求如下：

1. **子代理"假成功"与不可控挂起** — [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
   子代理在回合耗尽、被死锁时仍上报 GOAL 成功，导致用户对中断无感、无法介入。**子代理状态机的可观测性**是 P1 痛点之首。

2. **Agent 缺乏主动调用 skills / sub-agents 的倾向** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)
   即便 skill 描述完善，模型也不会自动调用，需要用户反复"提醒"，削弱了 agent 编排价值。

3. **Auto Memory 的安全与质量债** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 等
   上下文已上传后才脱敏、无效 patch 静默丢弃、低信号会话无限重试 —— 涉及**敏感数据 + 系统资源 + 用户信任**。

4. **写入竞态与文件操作鲁棒性** — [#29244](https://github.com/google-gemini/gemini-cli/pull/29244)
   并行工具调用对同一路径写入会静默丢改且双方均报成功，是用户最担心的"我的文件去哪儿了"类问题。

5. **沙箱扩展/认证/凭据等系统性安全缺陷** — [#29332](https://github.com/google-gemini/gemini-cli/pull/29332)、[#29242](https://github.com/google-gemini/gemini-cli/pull/29242)、[#29328](https://github.com/google-gemini/gemini-cli/pull/29328)、[#29336](https://

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-09-22
**数据范围**：过去 24 小时
**数据源**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 一、今日速览

过去 24 小时内，Copilot CLI 在版本层面接连推送 **v1.0.87、v1.0.88-0、v1.0.88-1** 三个版本，重点修复了沙盒网络拒绝、`/allow-all` 策略状态丢失以及代理隧道失败等问题，并引入了 OSC 777 终端通知与 Auto 路由层级的组织策略。社区层面，MCP 集成、长会话稳定性与 BYOK 自定义配置仍是讨论焦点，其中 **#4218（Auto 模式模型池配置）** 以 16 个 👍 位居热度榜首。

---

## 二、版本发布

### 🚀 v1.0.88-1（最新）
- **Fixed**
  - 在 managed-settings 刷新失败时保留 `/allow-all`，并对缺失路径的精确会话审批进行记忆，但不会放行其父目录
  - 精确授权在 `/list-dirs` 中可见，可通过 `/reset-allowed-tools` 清除
  - 修复由代理隧道失败引起的沙盒网络拒绝

### 🚀 v1.0.88-0
- **Added**
  - 为直连的 Ghostty 与 WezTerm 会话新增 OSC 777 终端通知（可选）
- **Improved**
  - 支持命名空间化的自定义 skill 与被忽略的 skill 目录
  - MCP 与插件视图展示服务器显示名称与插件描述，状态更清晰
- **Resumi...**（说明文档截断）

### 🚀 v1.0.87（2026-09-21）
- 新增 Auto 路由层级的用户与 managed 启动默认值（含严格模式与组织级用户可覆盖策略）
- 同模式下的连续 steering 提示合并为一条待发消息；按 ↑ 可在空输入框中取回编辑（含粘贴文本）

> 版本节奏紧密，建议升级前先在沙盒环境验证 BYOK 与 managed-settings 相关配置。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 标题 | 👍 | 评论 | 状态 | 关注理由 |
|---|-------|------|----|------|------|----------|
| 1 | [#4218](https://github.com/github/copilot-cli/issues/4218) | 允许用户配置 Auto 模式使用的模型池 | **16** | 2 | OPEN | **本周最高赞**。Auto 模式当前会从用户计划下所有可用模型中随机选择，无法限制成本与行为，社区强烈期待可控的模型白名单。 |
| 2 | [#3399](https://github.com/github/copilot-cli/issues/3399) | 允许为 BYOK 设置自定义 HTTP Header | **14** | 6 | CLOSED | 多租户 LLM 服务商通常要求 `X-Tenant-ID` 等头字段，需求面广，已关闭说明已落地。 |
| 3 | [#1313](https://github.com/github/copilot-cli/issues/1313) | 会话分支（Session Branching） | **13** | 8 | CLOSED | 希望从当前会话派生新分支会话并保留完整历史，类 Git 体验，是呼声最高的长期需求之一。 |
| 4 | [#3385](https://github.com/github/copilot-cli/issues/3385) | 升级后在 WSL 上无法运行 CLI 1.0.49 | 9 | **14** | CLOSED | WSL 安装/启动类问题关注度最高（评论数最多），影响 Windows 开发者主力群体。 |
| 5 | [#3749](https://github.com/github/copilot-cli/issues/3749) | 终端流式渲染器输出损坏 | 8 | 6 | CLOSED | 字符重复、行截断，直接破坏 CLI 使用体验，8 个 👍 显示影响面广。 |
| 6 | [#4699](https://github.com/github/copilot-cli/issues/4699) | 长 `--resume` 会话触发 V8 OOM 崩溃 | 6 | 6 | OPEN | **仍开放的关键稳定性问题**：4 GiB 堆上限反复崩溃，且诊断报告被写入 cwd，存在污染风险。 |
| 7 | [#2486](https://github.com/github/copilot-cli/issues/2486) | MCP 服务器被策略阻断 | 0 | 8 | CLOSED | 个人 Pro+ 账户长期可用的 MCP 突然被 block，反映策略更新对开发者工作流的隐性影响。 |
| 8 | [#4211](https://github.com/github/copilot-cli/issues/4211) | CLI 无法处理 MCP 结构化响应中的 BigInt | 3 | 6 | CLOSED | 涉及 JSON 序列化兼容性的底层 bug，`TypeError: Do not know how to serialize a BigInt` 会导致整个会话被中止。 |
| 9 | [#4844](https://github.com/github/copilot-cli/issues/4844) | `--yolo` 在预认证阶段被 fail-closed 吞掉 | 0 | 2 | OPEN | 策略生效窗口与用户启动标志的优先级冲突，影响自动化脚本与 CI 使用。 |
| 10 | [#4837](https://github.com/github/copilot-cli/issues/4837) | 策略驱动启用插件后持久化为 `enabled: false` | 1 | 2 | OPEN | 插件安装成功但永远不激活，企业 MDM/设备管理场景下的关键缺陷。 |

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时仅有 **2 条** PR 更新，远少于日常节奏，可能与版本发布周期重叠有关。

### 1. [#4739 — docs: propose terminal-owned macOS notifications](https://github.com/github/copilot-cli/pull/4739)
- **作者**：anujb-msft｜**状态**：OPEN
- 提出 macOS 通知点击问题的文档方案，并附带 MIT 许可的便携式终端通知示例与回归测试。本仓库不暴露 CLI 应用实现，因此作为**参考提案**而非代码改动。

### 2. [#4770 — Document the WebSocket responses opt-out](https://github.com/github/copilot-cli/pull/4770)
- **作者**：1fanwang｜**状态**：OPEN
- 模型默认走 WebSocket responses 端点，在网络阻断或出现 `400 input item ID does not belong to this connection` 错误时缺乏文档化的回退路径。补充该 opt-out 文档可显著降低用户排障成本。

---

## 五、功能需求趋势

从过去 24 小时的 50 条 Issue 中可提炼出以下社区重点方向：

### 🔌 1. MCP 生态完善（最热）
- 策略阻断（#2486）、BigInt 序列化（#4211）、双协议握手（#4888）、Atlassian OAuth redirect 端口（#4926）……MCP 集成是当前问题面最广的领域，**协议兼容性 + 错误提示 + OAuth 体验**三方都需要持续打磨。

### ⚙️ 2. BYOK 与模型路由配置
- 自定义 Header（#3399）、Auto 模式模型池（#4218）、BYOK + GPT-5.5 `--effort` 回落（#3119）。开发者对**精细化模型路由、可预测成本**的需求强烈。

### 🛡️ 3. 企业策略与权限治理
- 工具级粒度策略（#1971）、策略驱动的插件启用（#4837）、`--yolo` 被吞（#4844）。**managed-settings 与 fail-closed 行为**成为企业部署的核心痛点。

### 💾 4. 会话稳定性与内存管理
- 长 resume 会话 OOM（#4699）、队列提示卡死（#4705）、会话 hook payload 缺失 session id（#1425）。长任务与持久化场景对 CLI 的健壮性提出更高要求。

### 🖥️ 5. 终端渲染与本地化
- 流式渲染字符损坏（#3749）、RTL 语言（希伯来文/阿拉伯文）显示反向（#3704）、大仓库 @mention 卡顿（#3469）。**终端层仍是高频踩坑区**。

### 🌿 6. 工作流增强
- 会话分支（#1313）、Plan Mode 越权写代码（#1663）、subagent 模型组合（#3875）。围绕**多代理协作 + 可控修改**的诉求在增长。

---

## 六、开发者关注点

综合 Issue 与 PR 反馈，当前开发者社区最集中的痛点为：

1. **🔁 MCP 协议栈稳定性**：双协议握手、BigInt 序列化、OAuth 回调地址不匹配等问题频发，使用第三方 MCP 服务时极易踩坑。
2. **📉 长会话资源占用**：4 GiB 堆上限的 OOM 崩溃 + 诊断报告写入 cwd，是生产环境使用的硬伤。
3. **🧭 Auto 模式不可控**：模型选择范围过大、不可配置，导致成本与行为不可预测（#4218 拿到 16 👍 即是明证）。
4. **🔒 企业策略边界模糊**：managed-settings 的 fail-closed 行为与 `--yolo`、插件启用等用户标志存在优先级冲突，缺乏明确文档与排错指南。
5. **⌨️ 终端体验细节**：流式输出损坏、RTL 文本反向、大仓库文件 @mention 延迟等问题影响日常使用体感。
6. **📚 文档缺口**：WebSocket responses opt-out（#4770）、沙盒主机拒绝 namespace 时的环境变量（#4853）、`.copilot/` 软链行为（#3264）均需要补充官方说明。

---

> 💡 **建议关注**：若你在企业内推进 Copilot CLI 落地，优先跟踪 **#4699（OOM）**、**#4844（yolo 标志）**、**#4837（插件启用）** 三条仍 OPEN 的 Issue，以及 **v1.0.88** 系列在 managed-settings 刷新路径上的变更是否影响你的现有策略。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**📅 2026-09-22** | 数据来源: github.com/MoonshotAI/kimi-cli

---

## 1. 今日速览

🔴 **重大变更：kimi-cli 正式停止维护并归档**，1.51.0 作为最终版本发布，项目已迁移至下一代终端 AI Agent **[Kimi Code CLI](https://github.com/MoonshotAI/kimi-code)**（原生二进制重构）。这是 MoonshotAI 在终端 AI 工具上的重要战略转型节点，所有后续开发活动将转至新仓库。

---

## 2. 版本发布

### 🎯 v1.51.0 — 归档前最终版本

作为 kimi-cli 仓库的最后一个版本，本次更新具有里程碑意义：

- **归档准备**：完成仓库归档前的内容整理（README、文档站点、安全/贡献策略、PyPI 元数据）
- **版本同步**：`packages/kimi-code` stub 版本同步至 1.51.0（不再依赖 kimi-cli）
- **发布说明迁移**：将当前 release notes 归入 1.51.0 下（CHANGELOG、breaking changes 等中英文版本）

🔗 [Full Changelog](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.51.0) | [PR #2660](https://github.com/MoonshotAI/kimi-cli/pull/2660) | [PR #2659](https://github.com/MoonshotAI/kimi-cli/pull/2659)

---

## 3. 社区热点 Issues

> ⚠️ 过去 24 小时仅更新 2 条 Issue，反映仓库已进入归档阶段，社区活动已转向新仓库。

### 🔥 Issue #2661 — [官方公告] Kimi CLI 停止维护
- **状态**: OPEN | 👍 0 | 💬 0
- **作者**: @RealKai42
- **创建/更新**: 2026-09-21
- **为什么重要**：这是官方发布的迁移公告。明确 kimi-cli 仓库将被归档，后续维护与开发全部移交至 [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code)。所有用户必须迁移至基于原生二进制构建的新版本。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2661

### 🐛 Issue #1534 — 终端界面乱序与自动重复
- **状态**: CLOSED | 👍 0 | 💬 0
- **作者**: @YeemingJeen
- **创建**: 2026-03-20 | **更新**: 2026-09-21
- **为什么重要**：长期未解决的 UI 渲染 bug。用户在启动 kimi-cli 后手动调整终端窗口时，界面出现错乱与自动重复。该 Issue 已随仓库归档而关闭，预计将由 Kimi Code CLI 的新架构彻底解决。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1534

---

## 4. 重要 PR 进展

> 过去 24 小时共更新 3 条 PR，全部由 @RealKai42 主导，与归档流程紧密相关。

### ✅ PR #2659 — chore: archive kimi-cli and point users to Kimi Code CLI 【已合并】
- 归档前的最终内容准备：更新 README、文档站点、安全策略、贡献指南、PyPI 元数据，全部指向新仓库 [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code)
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2659

### ✅ PR #2660 — chore(release): bump kimi-cli to 1.51.0 【已合并】
- 发布 1.51.0 归档前最终版本；同步 release notes 与 stub 包版本
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2660

### 🟡 PR #1625 — feat(mcp): add --scope option for OAuth and fix upstream auth flow issues 【开放中】
- **状态**: OPEN | 👍 0
- **作者**: @4riel | 创建 2026-03-28
- **摘要**：为 MCP server 配置新增可重复的 OAuth scope 支持，修复上游认证流程问题。基于 `origin/main` `86f13642`（Kimi CLI 1.50.0）+ FastMCP 3.2.4 / MCP SDK 1.27.1
- **值得注意**：尽管 kimi-cli 已归档，该 OAuth scope 增强 PR 仍处于开放状态，未来工作是否会回迁或在新仓库重启尚待观察
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/1625

---

## 5. 功能需求趋势

由于 kimi-cli 仓库已归档，过去 24 小时内 Issues 数量极少（仅 2 条），无法形成有效的趋势统计。但从仓库生命周期可观察到：

| 方向 | 状态 | 说明 |
|---|---|---|
| **MCP / OAuth 增强** | 🟡 待跟进 | PR #1625 显示社区对 MCP 协议的 OAuth scope 管理有明确需求 |
| **终端渲染稳定性** | ✅ 移交 | UI 错乱/重复问题（#1534）将随原生二进制新架构解决 |
| **原生二进制重构** | 🚀 已交付 | 由 Kimi Code CLI 接手，性能与可分发性显著提升 |
| **Python → 二进制迁移** | ⚠️ 用户必修 | 所有 Python 版用户须迁移至新版本 |

📌 **建议**：后续社区动态分析应转向 [MoonshotAI/kimi-code](https://github.com/MoonshotAI/kimi-code) 仓库。

---

## 6. 开发者关注点

1. **迁移成本与兼容性**：用户最关心的实际问题是「Kimi Code CLI 与原 kimi-cli 是否兼容」「配置/插件/脚本如何平滑迁移」。官方公告 Issue #2661 是首要 FAQ 入口。

2. **终端环境稳定性**：Issue #1534 反映出终端窗口 resize / 渲染问题在 TUI 类 AI 工具中长期是高频痛点，开发者期待新版本采用更现代的渲染栈（如 Rust + Ratatui）。

3. **MCP 协议企业级能力**：PR #1625 显示开发者对 OAuth scope、细粒度权限控制的需求，反映出 MCP 正在从「能用」走向「可生产部署」阶段。

4. **维护连续性**：社区对老 Issue 是否在新仓库重启跟进保持关注，特别是涉及 OAuth/认证相关的 PR #1625。

---

> 📌 **本期小结**：本期日报为 kimi-cli 仓库的末班动态，关键事件是 v1.51.0 的归档发布。后续日报建议主跟踪 [Kimi Code CLI](https://github.com/MoonshotAI/kimi-code) 新仓库。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-22

> 数据来源：github.com/anomalyco/opencode（过去 24 小时）

---

## 📌 今日速览

OpenCode 今日发布了 **v1.18.32 补丁版本**，集中修复 Bedrock 图像附件路由与 Together AI 流式用量上报问题；社区侧，多个长期存在的 Desktop / TUI / Windows 兼容性问题被批量关闭，同时 V2 服务架构（多 MCP 进程、shell 后台化、Bash 管道数据完整性）相关讨论升温，成为新的关注焦点。

---

## 🚀 版本发布

### v1.18.32（已发布）

**Core Bugfixes**
- 修复 Bedrock 图像附件问题：仅对 Claude、Nova、Llama 4 模型进行附件 hoisting，避免错误地把图像推送给不支持视觉的模型。
- 修复 Together AI 流式场景下的 usage 上报异常。

**社区贡献**
- @dc85：
  - docs: add DeepSeek V4.1 Flash to Zen (#49897)
  - feat: add Grok 4.7 to Zen a...

---

## 🔥 社区热点 Issues

以下 10 个 Issue 是过去 24 小时内评论数最多、社区反响最强的话题，覆盖渲染、桌面稳定性、跨平台兼容与计费公平性等核心痛点。

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#37326 math equations not rendered](https://github.com/anomalyco/opencode/issues/37326) | CLOSED | 8 👍4 | 数学公式渲染问题长期影响学术/技术用户的可读性，已积累多轮讨论并正式关闭 |
| 2 | [#32932 opencode serve 不释放端口（Windows）](https://github.com/anomalyco/opencode/issues/32932) | CLOSED | 7 👍2 | 退出后遗留僵尸 loopback 连接锁住 LISTENING socket，是 Windows 嵌入场景的硬阻塞问题 |
| 3 | [#29216 非视觉模型无法向 MCP 视觉工具传图](https://github.com/anomalyco/opencode/issues/29216) | CLOSED | 7 👍6 | 揭示了"模型能力 vs. 工具能力"的路由缺陷，影响 multi-agent 工具编排策略 |
| 4 | [#26266 在 UI 中显示 subagent 推理等级](https://github.com/anomalyco/opencode/issues/26266) | CLOSED | 6 👍8 | 高赞特性请求，体现社区对子代理可观测性、调试体验的强烈诉求 |
| 5 | [#36081 OpenCode 在 Termux 上无法运行](https://github.com/anomalyco/opencode/issues/36081) | **OPEN** | 5 👍0 | 移动端 Android 用户长期受阻；与 #50203（V2 Termux 原生支持）形成对照，进展值得追踪 |
| 6 | [#36028 VS Code 扩展无法按文档安装](https://github.com/anomalyco/opencode/issues/36028) | CLOSED | 5 👍0 | 文档-实现不一致导致 IDE 集成入门路径断裂，对新用户首因体验影响很大 |
| 7 | [#13393 hashline 编辑模式（特性）](https://github.com/anomalyco/opencode/issues/13393) | CLOSED | 5 👍37 | 👍数最高的特性之一，反映社区对 oh-my-pi 等创新编辑协议的强烈兴趣 |
| 8 | [#21264 新增 OPENCODE_DISABLE_GLOBAL_CONFIG](https://github.com/anomalyco/opencode/issues/21264) | CLOSED | 5 👍0 | 嵌入式/Electron 集成方的关键需求，避免全局配置污染 |
| 9 | [#35643 内容过滤仍对用户计费](https://github.com/anomalyco/opencode/issues/35643) | CLOSED | 4 👍0 | 计费公平性问题，用户未收到输出却承担完整生成费用 |
| 10 | [#33712 Desktop ResizeObserver 反馈循环致渲染崩溃](https://github.com/anomalyco/opencode/issues/33712) | CLOSED | 4 👍1 | 旧/新布局同时受影响的稳定性缺陷（与 #37997 关联） |

**额外关注（OPEN）**：[#50458 Bash 工具 stdout/stderr 管道损坏多字节/长输出](https://github.com/anomalyco/opencode/issues/50458)、[#43845 V2 服务为每个项目目录启动一对 MCP 进程](https://github.com/anomalyco/opencode/issues/43845) — 这两个仍处于 OPEN 状态的高优先级问题直接影响数据完整性与启动性能。

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 |
|---|---|---|
| 1 | [#50484 wrap mobile project controls responsively](https://github.com/anomalyco/opencode/pull/50484) | 移动端项目与 Git 控件自适应换行，并附回归测试 |
| 2 | [#50479 fix(codemode): coerce any value to a property key](https://github.com/anomalyco/opencode/pull/50479) | 修复 category 为 null/undefined 时 codemode 抛 TypeError 的问题 |
| 3 | [#50482 persist custom project icon for projects without server record](https://github.com/anomalyco/opencode/pull/50482) | 关闭 #37345，让无 server 项目也能持久化自定义图标 |
| 4 | [#45158 feat(tui): add sticky prompt](https://github.com/anomalyco/opencode/pull/45158) | 为 TUI 会话视图新增紧凑型 sticky 用户提示，关闭 #28035 |
| 5 | [#50472 identify embedded session requests](https://github.com/anomalyco/opencode/pull/50472) | SDK 嵌入主机请求自动携带 `opencode/latest/<version>/sdk` 标识，便于服务端遥测区分 |
| 6 | [#50475 restore sidebar onboarding](https://github.com/anomalyco/opencode/pull/50475) | 恢复 V2 session 侧栏的"Getting started"卡片，并在 <22 行时自动隐藏 |
| 7 | [#50462 preserve service startup failures](https://github.com/anomalyco/opencode/pull/50462) | 保留端口竞争场景下"第一次失败"的错误信息，便于用户定位 |
| 8 | [#50473 remove first-month Go pricing](https://github.com/anomalyco/opencode/pull/50473) | 下线首月 5 折优惠，Go 订阅统一为 $10/月，涉及落地页、checkout、文档与多语言文案 |
| 9 | [#50071 surface drain failures + check @mention skill permissions](https://github.com/anomalyco/opencode/pull/50071) | 修复 `terminal()` 在中断+失败并发时错误标记为成功的问题（关闭 #49740） |
| 10 | [#50270 delete legacy V1 session rows when removed](https://github.com/anomalyco/opencode/pull/50270) | 清理 V1→V2 迁移遗留的孤儿 session 行（关闭 #50260） |

**额外亮点**：
- [#50267 在桌面端通过浏览器登录 OpenCode Go / Console](https://github.com/anomalyco/opencode/pull/50267) — 改善 onboarding 体验。
- [#50448 feat: chat.model hook](https://github.com/anomalyco/opencode/pull/50448) — 新增插件级 hook，允许在每次 provider turn 前动态选择模型，是 multi-model routing 的关键基础设施。
- [#50471 防止 shell tool 在进程快速退出时挂起](https://github.com/anomalyco/opencode/pull/50471) — 用 Latch 协调 drain fiber 与 exit race。
- [#50276 后台化长时运行的 shell 命令](https://github.com/anomalyco/opencode/pull/50276) — 修复前台启动 Uvicorn 等服务时 agent 无限等待的问题。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 数据中可以提炼出以下社区最强烈的功能方向：

1. **IDE / 编辑器集成** — VS Code 扩展安装（#36028）、hashline 编辑模式（#13393 👍37）等，反映 IDE 一等公民体验仍是最大短板。
2. **桌面应用稳定性** — ResizeObserver 崩溃（#33712/#37997）、V8 OOM（#38362）、1.18.4 连接丢失（#38419）、UI 冻结（#38548）等密集出现，**Desktop 1.18.x 的资源管理与渲染稳定性**成为最集中诉求。
3. **新模型与路由能力** — DeepSeek V4.1 Flash、Grok 4.7 接入 Zen（v1.18.32 changelog），chat.model hook（#50448）、intent-based routing（#50468 引用 #34370）表明社区正推动 **按任务动态选模型**。
4. **可观测性 / UX** — Subagent 推理等级（#26266）、session 历史侧栏（#35426）、Plan/Build 切换（#38589）、TUI sticky prompt（#45158），**会话状态与子代理调试可见性**呼声强烈。
5. **嵌入式 / 自动化集成** — `OPENCODE_DISABLE_GLOBAL_CONFIG`（#21264）、embedded SDK 标识（#50472）、浏览器登录（#50267），OpenCode 正被打造成更易嵌入第三方应用的基础设施。
6. **跨平台覆盖** — Termux（#36081、#50203）、Windows 端口释放（#32932）、PowerShell 子进程清理（#38564），**Windows / Android 长尾场景**仍需补齐。
7. **计费透明** — 内容过滤仍计费（#35643）、Go 订阅余额为 0（#38208），付费体验公平性是新浮现的诉求。

---

## 🧑‍💻 开发者关注点

通过对 Issue 描述与 PR 摘要的聚类分析，当前开发者社区反馈中最集中的痛点包括：

- **桌面 Electron 应用的资源失控**：V8 OOM、ResizeObserver 反馈循环、请求挂起，根源疑似渲染层频繁触发 diff/snapshot 计算（#38362、#33712、#38548）。
- **Windows 平台的进程生命周期缺陷**：`opencode serve` 不释放端口、PowerShell 子进程在 subagent 终止后继续运行，导致端口锁死与磁盘滥用（#32932、#38564）。
- **数据完整性风险**：Bash 工具在 Windows PowerShell + ConPTY 下损坏多字节 / 长输出（#50458），仍是 OPEN 状态，需重点关注。
- **V2 服务架构的副作用**：每个项目目录都启动一对本地 MCP 进程（#43845），在多项目目录下资源开销线性增长。
- **TUI 细节体验缺失**：滚动只作用在对话面板（#33032）、`--mini` 模式在 resize 时清屏重放（#37971）、Ctrl+S 与编辑器快捷键冲突（#35426）。
- **多模型能力路由**：非视觉模型不能向视觉 MCP 工具传图（#29216）、custom model 无法设置 reasoning/context size（#38593），提示 **"模型能力"和"工具能力"的分层路由**还需更细粒度。
- **嵌入式集成可控性**：缺少全局配置开关、缺乏 SDK 来源标识、shell tool 在快速退出时存在 race，社区希望 OpenCode 在被作为子进程调用时更"可预测、可观测、可约束"。

---

*日报由 AI 自动生成，基于 50 条 Issues + 50 条 PRs 数据归纳整理。如需对某一议题做更深入的追踪分析，欢迎在评论区留言。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-22

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) (earendil-works/pi)
> 统计周期：过去 24 小时

---

## 📌 今日速览

**v0.87.0 正式发布**，核心引入"规范化会话上下文与扩展边界"机制（`ContextEditEntry`），允许扩展在不重写历史的前提下编辑模型上下文，并暴露完整生命周期钩子。同步合并了大量修复：Mistral 空 content delta、Google 429 退避、Codex 工具调用泄露、AWS Bedrock 目录清理等，TUI 性能与 Windows 渲染问题也得到集中治理。

---

## 🚀 版本发布

### [v0.87.0](https://github.com/earendil-works/pi/blob/v0.87.0/packages/coding-agent/docs/session-format.md#contexteditentry)

**亮点：**
- **Canonical session context & extension boundaries** — 新增 `ContextEditEntry`，扩展可对模型上下文进行原地编辑而非重写历史；提供 action 可触发生命周期钩子（session/turn/tool 级别）。
- 配套文档更新至 `session-format.md`，定义了清晰的扩展边界契约。
- 底层 session 模型进一步规范化，为后续 SDK 与第三方集成铺路。

> 注：完整 changelog 见 [GitHub Releases](https://github.com/earendil-works/pi/releases/tag/v0.87.0)

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 重要性 |
|---|------|------|---------|--------|
| [#7730](https://github.com/earendil-works/pi/issues/7730) | High CPU usage on Mac OS with long session | OPEN | 17 / 👍10 | 🔴 **长会话性能顽疾**，社区反馈集中在 0.85+ 版本后 100%+ CPU 占用，与会话长度强相关，亟需根治。 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | `PI_OFFLINE` silently disables all provider model discovery | OPEN | 12 / 👍0 | 🟠 **文档与实现不一致**，`PI_OFFLINE` 本意只禁用启动 housekeeping，实际却禁用了整个 provider 模型发现，违反最小权限原则。 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | 0.86.0 regression: RPC steer 无法与 extension 处理的输入关联 | OPEN | 9 / 👍0 | 🟠 **0.86 回归**，影响 RPC 客户端可靠性，扩展消费 steer A 后排队 steer B，无法判定成功属于哪条输入。 |
| [#5105](https://github.com/earendil-works/pi/issues/5105) | Compaction summarization ignores configured transport | CLOSED | 7 / 👍0 | 🟡 **已修复**，影响 `openai-codex-responses` 用户的 transport 选择行为。 |
| [#9737](https://github.com/earendil-works/pi/issues/9737) | opencode-go catalog 缺少 deepseek-v4.1-flash | CLOSED | 6 / 👍0 | 🟡 已确认无需操作，OpenCode Go 端模型同步问题，非 pi 侧。 |
| [#9169](https://github.com/earendil-works/pi/issues/9169) | Fullscreen TUI 模式图像渲染错误（Windows 11/WezTerm） | CLOSED | 6 / 👍1 | 🟡 **Windows fullscreen 模式老问题**（回归自 #4883），已 last-read。 |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | Compaction 可能包含先前被省略的 thinking 消息导致溢出 | OPEN | 6 / 👍0 | 🟠 **长会话数据完整性**，影响本地 Qwen3.8 + llama.cpp 场景，可能引发上下文溢出。 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | Fullscreen 大 transcript 每帧全量重绘（单核饱和） | OPEN | 6 / 👍0 | 🔴 **Windows 2 核环境下渲染灾难**，长 transcript + resize 触发整 transcript 重新发射。 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 在 summarization/compaction 中不触发 | OPEN | 5 / 👍0 | 🟠 **扩展 API 契约违反**，文档承诺会触发但实际未触发，第三方扩展无法介入 compaction 请求。 |
| [#9822](https://github.com/earendil-works/pi/issues/9822) | 0.86.x: compaction 后 Codex 工具调用泄露为 harmony 文本 | CLOSED | 5 / 👍0 | 🟡 **已修复**（PR #9846），`gpt-5.6-luna` 用户受影响。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 标题 | 作者 | 状态 | 影响 |
|---|------|------|------|------|
| [#9846](https://github.com/earendil-works/pi/pull/9846) | fix(coding-agent): 跨 context handler 保留 prompt 与工具状态 | mitsuhiko | ✅ CLOSED | 🔴 **修复 #9822 根因**，自 0.86 起 context handler 可能剥离 prompt/工具声明，导致请求不带内置工具，Codex 退化为原始 harmony 文本。 |
| [#9832](https://github.com/earendil-works/pi/pull/9832) | RPC 输入 disposition 与排队消息关联 | cfal | ✅ CLOSED | 🟠 **修复 #9803**，引入 `handled`/`queued`/`accepted` 三态并对齐 `queue_update` ID，RPC 客户端可精确关联每个输入的命运。 |
| [#9859](https://github.com/earendil-works/pi/pull/9859) | feat(ai,coding-agent): 新增 Grok 4.7 支持 | SASUKE40 | ✅ CLOSED | 🟢 **500k 上下文 + reasoning levels**，image input，$2/$0.50/$6 定价，长上下文场景性价比突出。 |
| [#9861](https://github.com/earendil-works/pi/pull/9861) | fix(ai,coding-agent): 尊重 Google 429 的 retry delay | beantownbytes | ✅ CLOSED | 🟠 Google per-minute 配额超限不再立即失败，按响应头退避重试，提升稳定性。 |
| [#9869](https://github.com/earendil-works/pi/pull/9869) | fix(ai): 跳过 Mistral 空 content delta | ShangGuan2613 | ✅ CLOSED | 🟢 **修复 #9674**，避免 GLM 5.x 因空 `content: ""` 打开空文本块导致 400 重放错误，保留 Mistral 原生 prompt cache。 |
| [#9866](https://github.com/earendil-works/pi/pull/9866) | fix(agent): replay 工具前校验持久化参数 | YxinMiracle | ✅ CLOSED | 🟠 解决 schema 演进后的工具执行问题（如 `Type.String → Type.Literal` 仍用旧 args 执行的"幽灵工具"）。 |
| [#9851](https://github.com/earendil-works/pi/pull/9851) | fix(ai): 清理 Bedrock 目录中的裸 Anthropic 模型 ID | jubingainwell | ✅ CLOSED | 🟢 移除 11 个 AWS 已不再支持 on-demand 的 `anthropic.claude-*`，扩展 `BEDROCK_INFERENCE_PROFILE_ONLY_MODEL_IDS` 全量覆盖。 |
| [#9848](https://github.com/earendil-works/pi/pull/9848) | docs(tui): 文档化 `Component.invalidate()` 为必需 | Frank-zhu0404 | ✅ CLOSED | 🟡 **修复 #9358**，README 与真实接口对齐，避免自定义组件开发陷阱。 |
| [#9842](https://github.com/earendil-works/pi/pull/9842) | fix(tui): 防止 scrollbar 隐藏时 jump-to-end 标签抖动 | rwachtler | ✅ CLOSED | 🟡 **修复 #9136**，标签居中不受 scrollbar 可见性影响。 |
| [#9830](https://github.com/earendil-works/pi/pull/9830) | fix(coding-agent): 报告非法 prompt frontmatter | christianklotz | ✅ CLOSED | 🟢 **修复 #9354**，与 skills 一致，非法 YAML 不再静默丢弃，纳入 resources 诊断通道。 |

**其他值得关注：**
- [#9488](https://github.com/earendil-works/pi/pull/9488) — Codex canonical turn attribution（provider 中立的 `requestIdentity`）
- [#9850](https://github.com/earendil-works/pi/pull/9850) — Ollama 原生 provider（WIP）
- [#9833](https://github.com/earendil-works/pi/pull/9833) — Windows 10 conhost 全屏重绘修复
- [#9831](https://github.com/earendil-works/pi/pull/9831) — Packages 文档新增 "External packages" 章节
- [#9763](https://github.com/earendil-works/pi/pull/9763) — pi.dev 兼容性检查与跨仓库 dispatch（OPEN，待评审）

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue / PR | 趋势判断 |
|------|------------------|---------|
| **新模型支持** | Grok 4.7 (#9859)、GLM 5.x (#9674/#9678)、Ollama 原生 (#9850)、deepseek-v4.1-flash (#9737) | 🔥 **持续高热**：模型目录维护成为常规工作量，长上下文（500k+）+ 多档 reasoning 成为新模型标配。 |
| **Provider 健壮性** | Codex (#9488/#9822/#9845)、Bedrock (#9851)、Google 429 (#9861)、LiteLLM (#9843)、Mistral (#9869) | 🔥 **质量拐点**：从"能跑"走向"与 proxy/edge case 正确交互"，canonical turn attribution 等抽象正在沉淀。 |
| **TUI / 全屏性能** | #9549、#9255、#9136/#9842、#9833、#9169、#9870 | 🔥 **Windows 是重灾区**：长 transcript 重绘、scrollbar 联动、Windows 10 conhost 历史遗留问题集中爆发。 |
| **扩展 API 完善** | `before_provider_request` (#9773)、vendor-specific fields (#9784)、context 边界 (v0.87)、disposition (#9832) | 🔥 **生态化信号**：v0.87 的 `ContextEditEntry` 是分水岭，社区正倒逼 Provider/Extension 接口标准化。 |
| **Session 管理** | `/resume` 子会话筛选 (#9847)、`SessionManager.create()` 持久化时机 (#9792) | 🟡 中等热度，但直接影响日常 UX。 |
| **离线/可观测性** | `PI_OFFLINE` 行为收敛 (#8684/#9841)、bug 报告离线导出 (#9841) | 🟡 面向受限网络用户的可用性提升。 |
| **认证/OAuth** | Kimi Code OAuth 域迁移 (#9819) | 🟢 小范围但明确。 |

---

## 💬 开发者关注点（高频痛点）

1. **长会话的"看不见的成本"** — CPU 占用、TUI 重绘、上下文溢出三类问题在 #7730、#9549、#9602 反复出现。社区呼吁引入更激进的增量渲染与 viewport-aware invalidate，参见 [#9870](https://github.com/earendil-works/pi/issues/9870) 提出的 ASCII 快路径优化。

2. **扩展 API 的"承诺与现实"差距** — `before_provider_request` 不触发、vendor-specific fields 缺失（"Procrustean bed"）、disposition 不透明，开发者多次复提同一个 meta-issue（#9784）。v0.87 的 context 边界是回应，但完整契约尚未形成。

3. **0.86 系列的连锁回归** — compaction 路径的 prompt/工具声明剥离引发 Codex 工具调用泄露（#9822）；extension 输入与 RPC steer 关联丢失（#9803）；LiteLLM mid-stream 错误（#9843）。需要更严格的回归测试覆盖 compaction × extension 交叉场景。

4. **Windows 平台的"二等公民"** — WezTerm fullscreen 图像、Windows 10 conhost 重绘、路径分隔符导致包边界测试误报（#9835），均指向 Windows 兼容性投入不足。

5. **文档与实现的漂移** — `Component.invalidate()`（#9358）、`PI_OFFLINE` 范围（#8684）、prompt frontmatter 错误处理（#9354），三起问题本质都是"代码先于文档"，社区呼吁 docs-as-code 与接口同步发布。

6. **Provider 抽象的标准化诉求** — [#9488](https://github.com/earendil-works/pi/pull/9488) 的 `requestIdentity` 折射出更深层需求：tool continuation、retry、steering、compaction recovery 共享一套可追踪的请求身份，而非各自为政。

---

*日报生成时间：2026-09-22 · 数据范围：2026-09-21 ~ 2026-09-22*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-09-22
**数据范围**: 过去 24 小时

---

## 一、今日速览

今日 Qwen Code 仓库节奏密集，**v0.24.3 正式版与配套 SDK、桌面端、Web Shell 同步发布**，主打 Web Shell 的结构化 shell 结果与移动端导航优化。但发布链路并不平顺：**v0.24.2 桌面端的 Windows 包因 CI 在 pwsh 中误跑 bash 安装脚本而整体缺失**（#12414），v0.24.2 两个 nightly 也因 quality job 失败而中断（#12382、#12401），暴露出 release 流水线对操作系统差异的健壮性短板。社区讨论焦点仍集中在 **macOS Web Terminal 的 PTY 缺失**（#11872，13 条评论）与 **Managed Agent 双路径架构提案**（#12380），两者均需平台级决策。

---

## 二、版本发布

### v0.24.3（正式版）— Web Shell 与移动端为主

- **Web Shell**: 引入结构化的 shell 执行结果、可选的轨迹指标（trajectory metrics）、host 设置白名单，以及移动端导航修复。
- **无破坏性变更**（No known breaking changes）。
- 链接: [Release v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3)

### v0.24.3-nightly.20260921.2800e9bb4f

- 同步包含 `feat(core): add monitor tool to system prompt guidance`（#12408）与 `feat(daemon): Add batched workspac...` 等提交。
- 链接: [Release v0.24.3-nightly](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.3-nightly.20260921.2800e9bb4f)

### SDK TypeScript v0.1.14

- 捆绑 CLI 版本: **0.24.3**；**0.24.1** 同步推送。
- 注意：#12433 报告打包后的 daemon 声明文件引用了私有或未导出的模块，消费方类型检查失败。
- 链接: [SDK TypeScript Release v0.1.14](https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.14)

### Desktop v0.24.3

- 包含 `fix(cli): scope the ACP permission queue to the session`（#11802）和 `feat(channels): add shared output modes`。
- **Windows 桌面包**因 #12414 所述 CI 问题在 v0.24.2 缺失，本版本需关注是否同步修复。
- 链接: [Qwen Code Desktop v0.24.3](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.24.3)

---

## 三、社区热点 Issues（10 条）

### P0 / 高优先级 Bug

1. **#11872 — Web Terminal 显示 "PTY not available"**（13 条评论，P1，macOS）
   - `@lydell/node-pty` 已在依赖中声明但未被打包；macOS 本地 prebuild 又因代码签名被拦截。
   - 这是 Web Shell 终端能力的根本性阻塞，已存在一周以上。([链接](https://github.com/QwenLM/qwen-code/issues/11872))

2. **#12416 — Remote-SSH 下 `POST /session` 全部 EPIPE 失败**（7 条评论，P1）
   - Companion 0.24.2 + VS Code Remote-SSH 场景下伴随进程报 `BridgeChannelClosedError`，但独立 CLI 工作正常。
   - 影响所有 Remote-SSH 用户创建会话的能力。([链接](https://github.com/QwenLM/qwen-code/issues/12416))

3. **#12414 — Desktop v0.24.2 Windows 包整体未发布**（6 条评论，P1，CLOSED）
   - Windows 构建 job 在 pwsh 下错误运行了 bash 安装步骤。
   - 已定位，需关注 v0.24.3 是否同步修复。([链接](https://github.com/QwenLM/qwen-code/issues/12414))

### 架构与多会话

4. **#12303 — Cross-session gate: settling、capping 与多 session 命名**（8 条评论，P2）
   - 三个问题都难以在 gateway 单点解决，触及**多 agent 主机**的核心抽象。([链接](https://github.com/QwenLM/qwen-code/issues/12303))

5. **#12380 — Managed Agent 双路径架构与分阶段交付**（5 条评论，P2）
   - 提议让 Managed Agent 保持现有 TS agent loop，但模型推理与工具环境供给解耦。会话需要持久所有权、工作区绑定、可恢复的工具执行。
   - 是 #12358（PR）落地的总纲。([链接](https://github.com/QwenLM/qwen-code/issues/12380))

6. **#12287 — Workflow retry-from-history 强化子任务拆分**（10 条评论，P2）
   - 主 PR (#12190) 从 ~1000 行膨胀到 ~1900 行后被拆分，便于分别 review。([链接](https://github.com/QwenLM/qwen-code/issues/12287))

### Web Shell 会话模型缺陷

7. **#11847 — Session recap 始终生成英文，无视对话语言**（8 条评论，P3）
   - 侧查询使用硬编码英文 system prompt，影响中文用户体验。([链接](https://github.com/QwenLM/qwen-code/issues/11847))

8. **#11878 — Session Overview 不展示无工作区会话**（6 条评论，P2）
   - 即便加入展示，行点击上下文也会错误路由。([链接](https://github.com/QwenLM/qwen-code/issues/11878))

9. **#12237 — 启动恢复/延迟重载把 standalone session 路由到 workspace 端点**（4 条评论，P2）
   - 两个自动路径（启动恢复 + 延迟重载）把 standalone session 错误路由至 `POST /session/:id/load`（404）。([链接](https://github.com/QwenLM/qwen-code/issues/12237))

### 安全与守护进程

10. **#12375 — Windows daemon 拒绝合法 PowerShell 显式调用**（4 条评论，P3）
    - 包括 `pwsh -NoProfile -Command "Get-Date -Format o"` 这类良性命令被前置拦截。([链接](https://github.com/QwenLM/qwen-code/issues/12375))

11. **#12417 — CLI 工具执行沙箱设置硬化跟进**（5 条评论，P2）
    - 跟进 PR #12267（把 bwrap 从 CLI 整体隔离下沉到工具执行）的剩余审核项。([链接](https://github.com/QwenLM/qwen-code/issues/12417))

### SDK 与集成

12. **#12433 — sdk-typescript 打包声明引用私有/缺失模块**（3 条评论，P2）
    - 影响 SDK v0.1.14 的类型检查完整性。([链接](https://github.com/QwenLM/qwen-code/issues/12433))

13. **#12381 — HTTP gateway 超时后 session-create 结果恢复**（6 条评论，P2）
    - 网关超时但后端创建成功的会话在客户端丢失 ID，无法安全重试。([链接](https://github.com/QwenLM/qwen-code/issues/12381))

### 已关闭（今日）

- **#12351** Web Shell publish-artifact verifier 沉默断言在 npm 警告下崩溃（3 条评论）— 由 #12367 修复并合并。
- **#12420** Notebook 读取拒绝 null 分页并给出冲突恢复提示（3 条评论）。
- **#12373** Debug 日志不被后台 housekeeping 清理（3 条评论）。
- **#12382 / #12401** v0.24.2 两个 nightly release workflow 失败（quality job）。

---

## 四、重要 PR 进展（10 条）

1. **#12358 — feat(managed-agent): Add standalone managed agent stack**（doudouOUC）
   - Managed Agents 架构端到端预览：从驻留 Harness → Java 控制平面 → session-scoped Tool Runtimes，含 Managed Session 持久记录、Hosted Harness、Runtime Broker 契约。
   - 状态: OPEN，draf。
   - ([链接](https://github.com/QwenLM/qwen-code/pull/12358))

2. **#12258 — fix(mcp): Support larger Apps, scoped tool calls and isolated origins**（samuelhsin）
   - 修复 MCP App 三大集成失败：每服务器资源加载有界、App 主动发起的服务器工具、不透明 iframe origin。官方 Tableau App 现可在 Qwen Code 中渲染 Cloud 图表并支持 Region 过滤。
   - 状态: OPEN，需人工跟进。
   - ([链接](https://github.com/QwenLM/qwen-code/pull/12258))

3. **#12355 — fix(core,docs): correct what the deferred-tool bridge made stale or untested**（yiliang114）
   - 把 #10410 留下的 4 项整改合并到一个 PR，涵盖 `tool_call` 豁免的回归测试缺口。([链接](https://github.com/QwenLM/qwen-code/pull/12355))

4. **#12154 — feat(web-shell): manage the repository's worktrees from the git dialog**（wenshao）
   - Web Shell 的 git 对话框新增第四个标签 "Worktrees"，列出所有 worktree、main/current/lock/missing 标记、branch 与 short HEAD。
   - 状态: OPEN，autofix/takeover。
   - ([链接](https://github.com/QwenLM/qwen-code/pull/12154))

5. **#12183 — feat(extensions): load deployment-managed extensions from a directory**（jkxiao）
   - 新增 `--managed-extensions <root>` CLI 与 daemon 参数；部署方控制包内容，用户首次安装即可生效。([链接](https://github.com/QwenLM/qwen-code/pull/12183))

6. **#12396 — feat(serve): restore serve.channels once for a workspace registered after boot**（qqqys）
   - 守护进程启动后通过 API 注册的可信非主工作区在激活时恢复其 `serve.channels`，并按需通过 `setChannelWorker` 补齐。([链接](https://github.com/QwenLM/qwen-code/pull/12396))

7. **#12323 — perf(core): move the Agent tool's prompt-writing guidance into a bundled skill**（yiliang114）
   - 把 Agent 工具 prompt 编写指引搬到捆绑的 `agent-delegation` skill，工具描述从长段缩减为 192 字符的指针。
   - 同时被 #12425（关键词桥接命名隐藏工具的问题）跟踪。([链接](https://github.com/QwenLM/qwen-code/pull/12323))

8. **#12397 — fix(live): spend JPEG quality, not pixels, when a shared screen will not fit**（qqqys）
   - 在 1080p glyph 密集屏幕上，原编码阶梯给出 871×490@49% 预算，改后给出 1407×792 同等预算；只花质量，不丢像素。
   - 跟进 #12378。([链接](https://github.com/QwenLM/qwen-code/pull/12397))

9. **#12345 — feat(web-shell): add host controls for model management**（Lilian0122）
   - 嵌入式 WebShell 实例支持 `modelManagement={{ allowAdd, allowDelete }}`，宿主可隐藏增删但保留切换、列表与 `/model`。([链接](https://github.com/QwenLM/qwen-code/pull/12345))

10. **#12322 — feat(web-shell): enable expiring QR pairing on non-loopback listeners**（wenshao）
    - 已认证非回环监听器默认开启移动端 QR 配对；单次邀请 60s 过期，弹窗 45s 刷新。([链接](https://github.com/QwenLM/qwen-code/pull/12322))

### 其它值得关注

- **#12404** — preserve reference tags across reloads（web-shell，OPEN）
- **#12434** — page back through earlier records in the trajectory table（OPEN，新增"加载更早记录"控件）
- **#12431** — expose markdown message completion state（OPEN）
- **#12412** — browse remote workspace folders without page refresh（OPEN，新增 daemon-side proxy 路由）
- **#12360** — fix(core): Simplify system prompts and remove conflicting examples（OPEN）
- **#12309** — close the remaining OpenTUI parity gaps against ink（OPEN）
- **#12130** — save Blob exports through system document picker（Android 阶段 2，OPEN）
- **#12255** — SSH workspaces without a remote daemon（CLOSED，feat(serve)）
- **#12367** — isolate npm pack diagnostics from verifier output（CLOSED，修复 #12351）

---

## 五、功能需求趋势

从 44 条活跃 issue 与 50 条 PR 中可以提炼出以下社区最关心的方向：

1. **多 Agent / Managed Agent 平台化**（最热）
   - #12380（架构提案）、#12303（多 session 网关语义）、#12358（端到端预览）、#12424（subagent 工具策略可见性）、#12287（workflow 重试硬化）。
   - 趋势：从单进程 agent loop 向「durable Managed Session + Hosted Harness + Runtime Broker」演进。

2. **Web Shell 体验完善**
   - 结构化 shell 结果（#12311）、轨迹指标与历史分页（#12434）、Markdown 完成态（#12431）、引用标签持久化（#12404）、worktree 管理（#12154）、远程目录无刷新浏览（#12412）、QR 配对安全化（#12322）、无工作区 session 列表支持（#11878、#12237、#12249、#12287）。

3. **远程执行与平台机制**
   - Remote-SSH 通道稳定性（#12416）、SSH 工作区无远程 daemon 模式（#12255 CLOSED）、跨会话消息网关与 settling（#12303、#12292）。

4. **集成通道（Channels）**
   - Feishu 富消息丢失媒体与代码上下文（#11554）；channels 共享输出模式（desktop v0.24.3 内含）；serve.channels 启动后恢复（#12396）。

5. **沙箱与安全**
   - Linux bwrap 从 CLI 整体下沉到工具执行（#12267 跟进的 #12417）；Windows daemon PowerShell 误拦（#12375）；CLI sandbox settings 硬化。

6. **SDK 与外部消费方**
   - TypeScript SDK 打包声明完整性（#12433）；managed extensions 由部署方控制（#12183）；MCP App 集成修复（#12258）。

7. **性能**
   - one-shot headless 启动延迟与内存基线（#12405、#12340）；共享屏幕 JPEG 质量而非像素（#12397）；debug 日志后台清理（#12373 已关闭）。

8. **桌面端可用性**
   - Desktop UI 字体不可调（#12406）；ACP 权限队列作用域修复（#11802，已合入 desktop v0.24.3）。

---

## 六、开发者关注点（痛点 & 高频需求）

| 痛点 / 需求 | 证据 |
|---|---|
| **发布流水线脆弱** | v0.24.2 Windows 包整体缺失（#12414）；同一日两个 nightly release workflow 失败（#12382、#12401）。Windows 桌面 + CI 跨 shell 是系统性风险点。 |
| **Web Terminal 在 macOS / Remote-SSH 不可用** | #11872（13 评论）与 #12416（7 评论），分别阻塞本地与远程 SSH 用户的核心能力。 |
| **SDK 类型完整性** | #12433 直接影响下游消费方 typecheck；SDK 是 v0.1.14 阶段的关键交付质量。 |
| **多 session / 多 agent 抽象** | #12303、#12380、#12358 持续讨论，主机同时持有多个会话时的命名、settling、capping 没有统一答案。 |
| **无 workspace（standalone）session 的边角缺陷** | 三个相关 issue（#11878、#12237、#12249）共同反映该模型仍未在 UI/API 上完全打通。 |
| **Subagent 工具策略可见性** | #12424 揭示 `resolveBundledReferenceRoute` 在 per-agent

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*