# AI CLI 工具社区动态日报 2026-09-10

> 生成时间: 2026-09-10 02:36 UTC | 覆盖工具: 9 个

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

**分析时间**：2026-09-10 · **覆盖工具**：9 款主流 AI CLI

---

## 1. 生态全景

当前 AI CLI 工具生态正处在"**能力扩展与质量债并存**"的关键转折期：一方面，新旗舰模型（GPT-6-Astra、gemini-3.8-flash）与新架构（Agent Teams、ACP 多平台 subagent、UI Intent Channel）密集上线；另一方面，**Agent 可靠性**（子代理沉默失败、compaction 数据丢失）、**Windows 平台一致性**、**认证/计费透明度** 三类问题已从单点 bug 演变为跨工具的共性危机。生态成熟度开始分化——Claude Code / OpenAI Codex / Copilot CLI 进入"企业功能深水区"，Gemini / Qwen / OpenCode 在快速迭代中暴露 Agent 体系底层债，而 Pi 与 Codewhale（DeepSeek TUI）等小众工具则代表了"插件优先"和"分析基建优先"两条差异化的演进路径。

---

## 2. 各工具活跃度对比

> ⚠️ 注：Issue 数为日报中重点追踪的"热点"条数（并非仓库全部更新），PR 数为当日活跃 PR 总数。活跃度综合参考 Issue 更新量、PR 量、版本发布节奏。

| 工具 | 当日版本 | 热点 Issue | 活跃 PR | 总更新量 | 节奏判断 |
|------|---------|-----------|---------|---------|---------|
| **Pi** | 无 | 10（自 50 条更新中精选） | 7 | **~57** | 高活跃、低发布，重在扩展 API 一致性 |
| **GitHub Copilot CLI** | 无 | 10（自 48 条更新中精选） | 1 | ~49 | 高 Issue / 低 PR，平台一致性是主战场 |
| **DeepSeek TUI / Codewhale** | 无（0.9.13 在集成中） | 10（自 22 条更新中精选） | 2 | ~24 | 架构治理 + 分析基建双主线 |
| **OpenCode** | v1.18.30 | 10 | 11 | ~21+ | 稳定发版 + Provider 收尾 |
| **Qwen Code** | v0.23.2 + cua-driver-rs v0.20.5 | 10 | 12+ | ~22+ | 高速迭代，ACP/Web Shell 双线推进 |
| **Gemini CLI** | v0.61.0-nightly | 10 | 11 | ~21 | 夜间构建持续，Agent 修复密集 |
| **Claude Code** | v2.1.267 | 10 | 3 | ~13+ | 稳定发版，焦点在 Cowork Windows 稳定性 |
| **OpenAI Codex** | v0.154.0 + 3 alpha | 10（自 50 条更新中精选） | 10 | ~60+ | **总活跃度最高**，模型驱动 + 多版本并行 |
| **Kimi Code CLI** | 无 | 4 | 1 | ~5 | 社区规模较小，问题响应偏慢（平均 5–6 个月） |

**关键观察**：
- **OpenAI Codex 与 Pi 的总活跃度最高**，但 Pi 的 PR/Issue 比例更健康（0.14），Codex 处于"功能密度"超载期。
- **Gemini / Qwen / OpenCode** 三家保持高频发版（nightly + alpha 并行），属于"快速迭代"梯队。
- **Copilot CLI** PR 量极低（仅 1 条文案修订），但 Issue 高企，是"高需求低投入"的典型信号。
- **Kimi Code CLI** 社区规模小，更新节奏明显慢于其他工具。

---

## 3. 共同关注的功能方向

下列方向在 **3 个及以上工具**的社区中同时出现高频诉求：

### 3.1 Agent / Subagent 可靠性
| 工具 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| Gemini CLI | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | 子代理 MAX_TURNS 后误报 GOAL success |
| Gemini CLI | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 长时间挂死 |
| OpenCode | [#12711](https://github.com/anomalyco/opencode/issues/12711) | Agent Teams 多 Agent 协作架构 |
| Qwen Code | [#11512](https://github.com/QwenLM/qwen-code/issues/11512), [#11513](https://github.com/QwenLM/qwen-code/issues/11513) | Windows + mid-turn input 的 ACP subagent 扩展 |
| OpenAI Codex | [#42311](https://github.com/openai/codex/issues/42311), [#44363](https://github.com/openai/codex/issues/44363) | Compaction 数据丢失、原地覆盖 |
| Pi | [#9306](https://github.com/earendil-works/pi/issues/9306) | 异常终止后 toolCall 块残留 |

**共识诉求**：统一的子代理终止语义、compaction 原子化与可回滚、错误上下文向上透传。

### 3.2 Windows / 跨平台一致性
| 工具 | 代表 Issue | 痛点 |
|------|-----------|------|
| Claude Code | Cowork #92984/#92977/#92921/#93238 | Plan9、VM 运行时、sandbox、首条消息四连发 |
| OpenAI Codex | #25178/#25271/#42501 | Computer Use 截图、Chrome URL、UI 启动 |
| OpenCode | [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64 OpenTUI 初始化失败 |
| Qwen Code | [#11303](https://github.com/QwenLM/qwen-code/issues/11303), [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | ConPTY 进程泄漏（12h 347 进程 / 2.8GB） |
| GitHub Copilot CLI | #4756/#3700/#3858 | 会话创建失败、WSL2 CPU 100% |
| Gemini CLI | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Wayland 下 browser subagent 失败 |
| Kimi Code | [#2639](https://github.com/MoonshotAI/kimi-cli/issues/2639) | Windows Terminal 下 RTL 反转 |

**共识诉求**：Windows 已成为**质量分化的主战场**，macOS/Linux 与 Windows 的体验差距是各团队共同的 P1 级问题。

### 3.3 IDE / 桌面端 UI 可配置性
| 工具 | 代表 Issue | 诉求 |
|------|-----------|------|
| Claude Code | #34196（VSCode 字体 87 👍） | 字体大小、面板行为 |
| GitHub Copilot CLI | #135（浅色主题 12 👍）、#3773 | 主题/对比度 |
| Kimi Code | #1270 | VSCode `@` 提及排序 |
| OpenCode | [#43295](https://github.com/anomalyco/opencode/issues/43295) | 窄屏 Web UI 控件重叠 |

**共识诉求**：终端/IDE 内 UI 的最小可定制性已成为落后竞品的"沉默痛点"。

### 3.4 认证 / 计费 / 订阅透明度
| 工具 | 代表 Issue | 痛点 |
|------|-----------|------|
| Claude Code | #88583（OAuth 清空）、#82700/#93068/#93100/#93243 | 限额显示与实际不符、计费信任危机 |
| OpenAI Codex | [#44210](https://github.com/openai/codex/issues/44210) | 周用量从 60% 跳到 97% |
| GitHub Copilot CLI | #4757 | `--yolo` 在自管账号上被误阻断 |
| Kimi Code | [#2638](https://github.com/MoonshotAI/kimi-cli/issues/2638) | `/login` 设备授权 HTTP 500 |

**共识诉求**：UI 计费显示与后端逻辑对齐、并发会话的 credential 原子写入、企业自管账号的策略可解释性。

### 3.5 插件 / 扩展生态治理
| 工具 | 代表动作 | 方向 |
|------|---------|------|
| Claude Code | PR [#93215](https://github.com/anthropics/claude-code/pull/93215) | 首次将 `mods/sec-default`、`diff`、`telemetry` 三个内建钩子以插件源码开源 |
| Gemini CLI | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | skills/sub-agents 自动调用率、Auto Memory 脱敏 |
| OpenCode | [#6330](https://github.com/anomalyco/opencode/issues/6330), [#48212](https://github.com/anomalyco/opencode/pull/48212) | UI Intent Channel 协议、session 钩子 |
| Pi | [#9381](https://github.com/earendil-works/pi/issues/9381) | pi-safe-compact 恶意包举报（社区治理） |
| OpenAI Codex | #44318/#44346/#44359 | MCP 协议独立开关、OAuth 状态可见性 |
| GitHub Copilot CLI | #4769/#4795 | MCP/OAuth 回调端口、issuer 校验 |
| Qwen Code | [#11281](https://github.com/QwenLM/qwen-code/pull/11281) | Daemon 本地枚举扩展 Skills |

**共识诉求**：插件生态从"可用"走向"可审计、可治理、可扩展"，**官方钩子开源化** 与 **MCP 协议精细化** 是两条并行路线。

### 3.6 TUI 体验打磨
| 工具 | 代表 PR/Issue | 方向 |
|------|--------------|------|
| OpenAI Codex | [#21653](https://github.com/openai/codex/issues/21653)（83 👍）、#44360/#44344/#44354 | 多行状态栏、焦点管理、Esc 行为 |
| Gemini CLI | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) | 终端 resize 闪烁 |
| Pi | [#9382](https://github.com/earendil-works/pi/pull/9382) | 历史导航光标定位 |
| GitHub Copilot CLI | [#2199](https://github.com/github/copilot-cli/issues/2199) | Ctrl+Backspace 整词删除 |

**共识诉求**：CLI 正从"能用"过渡到"好用"，键盘

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-10 | 数据来源：anthropics/skills**

---

## 一、热门 Skills 排行（按社区关注度）

| 排名 | Skill / PR | 状态 | 关注理由 |
|---|---|---|---|
| 🥇 | **#1298 skill-creator 评估管线修复**<br>`run_eval.py` 始终报 0% recall | OPEN | 关联 Issue #556（12 评论 / 7 👍），10+ 独立复现。评估管线"在噪声上做优化"，是技能开发的核心基础设施级 Bug |
| 🥈 | **#514 document-typography**<br>AI 生成文档的排版质量控制 | OPEN | 解决孤儿/寡单词、页眉悬空等所有 Claude 文档通病，通用性强 |
| 🥉 | **#1615 scnet-hpc**<br>SCNet HPC 集群 SSH + Slurm 运维 | OPEN | 填补 HPC 高性能计算场景的空白，面向科研/学术用户 |
| 4 | **#486 ODT skill**<br>OpenDocument 读写与 HTML 转换 | OPEN | 与 DOCX/PDF 互补，补齐开源办公格式支持 |
| 5 | **#1628 Hivemind**<br>零成本多 Agent 编排（headless opencode） | OPEN | 把机械任务分发给免费模型，主模型专注规划/评审，资源调度创新思路 |
| 6 | **#723 testing-patterns**<br>全栈测试模式（Testing Trophy + React 测试库） | OPEN | 工程实践标准化需求强烈 |
| 7 | **#83 skill-quality-analyzer + skill-security-analyzer**<br>技能质量/安全分析元工具 | OPEN | 呼应 Issue #492 的安全焦虑，提供 Skill 自审能力 |
| 8 | **#1627 buffer-api**<br>Buffer GraphQL 社媒调度通用 Agent Skill | OPEN | 跨客户端（Claude/Cursor/Codex/n8n）可移植的典型案例 |

🔗 https://github.com/anthropics/skills/pull/1298 · https://github.com/anthropics/skills/pull/514 · https://github.com/anthropics/skills/pull/1628

---

## 二、社区需求趋势（来自 Issues Top 15）

### 🔐 1. 安全与命名空间治理（**最热，43 评论**）
**#492** — 社区 Skills 假冒 `anthropic/` 官方命名空间，构成信任边界滥用风险。已上升为生态级讨论。

### 🏢 2. 组织级 Skills 共享（16 评论 / 8 👍）
**#228** — 希望 Claude.ai 支持企业内 Skill 库与一键分享，省去手动分发 `.skill` 文件的流程。

### 🐛 3. skill-creator 评估管线系统性失效（12 评论）
**#556** — `claude -p` 无法触发任何 skill/command，触发率恒为 0%。直接催生 PR #1298、#1099、#1050 三条修复。

### 🧠 4. 长期 Agent 状态压缩（9 评论）
**#1329** — `compact-memory`：用符号化符号记法压缩 agent 自我笔记的上下文占用。

### 🛡️ 5. Agent 治理与合规（6 评论）
**#412** — 提案 `agent-governance` skill：策略执行、威胁检测、信任评分、审计追踪。

### 🔁 6. Skills ↔ MCP 双向互通（4 评论）
**#16** — 把 Skill 暴露为 MCP 服务，统一 AI 工具协议。

### 📦 7. 插件去重与 Context 膨胀（6 评论 / 9 👍）
**#189** — `document-skills` 与 `example-skills` 内容重复；**#1487** — `claude-api` skill 单次注入 ~156k tokens 撑爆上下文窗口。

### 🤖 8. 多 Agent 质量门控（4 评论）
**#1385** — 提案"预校准 → 对抗评审 → 交付验证"三段式推理质量门禁（已落地为 PR #1367）。

**趋势词云**：🔐 安全 > 🏢 企业分享 > 🧠 上下文管理 > 🤖 多 Agent > 📄 文档/排版 > ☁️ 跨平台兼容

---

## 三、高潜力待合并 PR（最可能近期落地）

| PR | 主题 | 为何高潜力 |
|---|---|---|
| **#1298** | skill-creator run_eval.py 全面修复（Windows + 触发检测） | 阻塞整个描述优化循环，11+ 月悬而未决，是 #556 的根因方案 |
| **#1628** | Hivemind 多 Agent 编排 | 零成本降本思路契合社区对上下文经济的焦虑 |
| **#723** | testing-patterns 全栈测试 | 工程团队刚需 |
| **#1627** | buffer-api 通用 Agent Skill | 跨平台协议化范本 |
| **#1602** | evaluation 序列化/编码/稳定性综合修复 | 解决 PR #1298 之外的剩余评估缺陷 |
| **#1724** | mcp-builder 升级至 claude-sonnet-5 | 模型换代刚需 |
| **#1607** | 标记 claude-api 四个退役模型 | 与 #1487 上下文问题协同治理 |
| **#83** | skill-quality-analyzer + skill-security-analyzer | 直接呼应 Issue #492 的安全诉求 |

🔗 https://github.com/anthropics/skills/pulls?q=is%3Apr+is%3aopen

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"让 Skills 既可信又可规模化"**——一手抓**安全治理**（假冒命名空间、上下文注入、文档安全），一手抓**基础设施可靠性**（评估管线、跨平台兼容、组织级共享），两条主线之外，多 Agent 协作与长期上下文压缩是正在萌芽的下一代焦点。

---

### 📌 给 Skill 作者的 3 条建议
1. **提交前自查**：跑一遍 PR #83 提议的 skill-quality-analyzer 五维评估，能显著降低被拒概率。
2. **跨平台验证**：Windows + Linux 双环境测试（参考 #1099、#1050 的教训）。
3. **关注上下文体积**：避免像 #1487 那样单次注入 156k tokens，按需懒加载资源文件。

---

# Claude Code 社区动态日报
**日期：2026-09-10**

---

## 📌 今日速览

Claude Code 发布 v2.1.267，新增 `maxEffortLevel` 全局/按模型上限设置（覆盖 Bedrock、Vertex、Foundry 等所有 provider）以及 `--system-prompt-snapshot off` 开关。当日社区焦点集中在 **Cowork Windows 版稳定性的连续崩塌**（KB 补丁、Plan9 挂载、VM 运行时下载、首条消息卡死四类问题同时爆发）、**认证/OAuth 链路脆弱性**（keychain 清空、refresh token 竞态）以及 **计费限额显示与实际不符** 等用户信任问题。PR 方面，由 Anthropic 工程师推进的「mods：sec-default、diff、telemetry」三个内建钩子模块已以源码形式开源。

---

## 🚀 版本发布

### v2.1.267

| 改动 | 说明 |
|---|---|
| `maxEffortLevel` 设置 | 可在顶层或 `modelSettings` 下按模型配置，覆盖 Bedrock / Vertex / Foundry 等所有 provider 的 effort 上限；用户仍可手动选择更低的 effort 等级。 |
| `--system-prompt-snapshot off` | 关闭 system prompt 快照，每次请求都重新渲染，提升跨会话一致性。 |

> 评估：`maxEffortLevel` 是企业用户长期呼吁的成本/可控性关键能力，尤其在 Bedrock 与 Vertex 多模型路由场景下。system prompt snapshot 关闭选项面向高级用户调试 prompt 漂移问题。

---

## 🔥 社区热点 Issues（按关注度排序）

### 1. [#85891](https://github.com/anthropics/claude-code/issues/85891) — Claude Desktop Windows 11 窗口始终置顶且无设置项
- **评论 93 / 👍 225**（当日最高赞）
- Windows 桌面端主窗口始终位于所有应用之上，无法关闭。该问题与 macOS 的 #66516 是同一行为的平台对应版本。**标记为 invalid**，但社区反响强烈，开发者与终端用户的核心体验期待未被产品满足。

### 2. [#92984](https://github.com/anthropics/claude-code/issues/92984) — Cowork (Windows)：KB5124008 补丁后 Plan9 共享全部失败
- **评论 31 / 👍 14**
- Windows 更新 KB5124008 (26200.9445) 后所有 Plan9 共享返回 `Plan9 mount failed: invalid argument`，**卸载该 KB 即恢复**。属于第三方系统更新对 Cowork VM 兼容性的回退问题，**应在 KB 推进前主动告警**。

### 3. [#27957](https://github.com/anthropics/claude-code/issues/27957) — 关闭"命令含引号字符"警告
- **评论 27 / 👍 74**
- 每次 `git commit -m "msg"` 等正常命令都触发权限确认，对老用户极不友好。高 👍 数（74）说明**安全策略噪音是高频痛点**，需要分级或"记住选择"机制。

### 4. [#34196](https://github.com/anthropics/claude-code/issues/34196) — VSCode 扩展：聊天面板字体大小设置
- **评论 14 / 👍 87**（高赞）
- 长期未解决的功能请求，👍 数高于评论数说明**沉默的多数**都受此困扰。VSCode 扩展的 UI 可配置性已成为 IDE 集成短板。

### 5. [#44380](https://github.com/anthropics/claude-code/issues/44380) — Channel 消息不唤醒空闲 session
- **评论 13 / 👍 6**
- `--channels plugin:telegram@...` 模式下入站消息仅打印到终端，REPL 不会中断 prompt 处理。对**长时运行的 agent 后台化场景**造成功能失效。

### 6. [#29415](https://github.com/anthropics/claude-code/issues/29415) — GitHub 连接器在 MCP 列表中消失
- **评论 12 / 👍 14**
- `/mcp` 命令下 GitHub 连接器完全缺失，但 `claude.ai/settings/connectors` 中正常显示；19 个其他连接器同步正常。**MCP 同步链路存在选择性丢弃问题**。

### 7. [#92977](https://github.com/anthropics/claude-code/issues/92977) — Cowork 本地沙箱在 1.49585.0.0 后无法挂载
- **评论 9 / 👍 1**
- Windows 桌面端 1.49585.0.0 升级后 Cowork 沙箱挂载失败，与 #92984 同期出现，**指向 Cowork 整个 Windows 子系统的回归**。

### 8. [#88583](https://github.com/anthropics/claude-code/issues/88583) — 并发会话竞态清空 keychain OAuth
- **评论 7 / 👍 3**
- 并发 Desktop 会话竞争 single-use refresh token，失败方覆盖获胜方凭据。MCP 凭据类似竞态曾于 v2.1.136 修复（#43392），但 OAuth 路径未跟进。**并发会话的凭据写入缺乏锁机制**。

### 9. [#92007](https://github.com/anthropics/claude-code/issues/92007) — `/model opusplan` 突然报 "Unsupported model"
- **评论 4 / 👍 7**
- 2.1.260 版本后用户连续数月可用的 `/model opusplan` 命令失效。**模型路由表或 alias 注册回归**，影响付费用户核心能力。

### 10. #92921 / #93238 / #93246 — Cowork Windows 故障群
- [#92921](https://github.com/anthropics/claude-code/issues/92921) 首条消息后挂起（与 #26805/#26921/#44776/#59532 同源集群）
- [#93238](https://github.com/anthropics/claude-code/issues/93238) VM 运行时下载残留 `.partial`，SDK 未验证且重装不解决
- [#93246](https://github.com/anthropics/claude-code/issues/93246) 内建浏览器无法完成 HTTP Basic Auth（401 循环、无凭据弹窗）
- 三起新发 issue 进一步坐实 **Cowork 在 Windows 端进入"多线作战"故障期**，建议平台团队本周聚焦。

---

## 🛠 重要 PR 进展

### [#93244](https://github.com/anthropics/claude-code/pull/93244) — `mods`：API 重命名与遥测修复
- 作者：`poteat`（Anthropic）
- 跟随插件 API 的命名规范（`isFocused`、`tool`），收紧遥测：行级独立计算、每行读取 analytics 开关、第三方 provider 不发送任何遥测。
- **关注度**：体现 Anthropic 对**遥测透明度**与**第三方插件隐私隔离**的产品立场。

### [#93215](https://github.com/anthropics/claude-code/pull/93215) — 新增 `mods`：sec-default、diff、telemetry（已 CLOSED）
- 作者：`poteat`
- 将 Claude Code 内置的三个钩子模块以**完整插件源码**形式开源：sec-default（组织级默认最外层插件）、`/diff`、`$.telemetry`。
- 仅在 function hooks 启用的环境下加载。
- **关注度**：Anthropic **首次将内部安全/遥测/diff 模块以插件形式开源**，是平台策略透明化的标志性动作。

### [#89404](https://github.com/anthropics/claude-code/pull/89404) — `validate-agent.sh` 不再首个 warning 即终止
- 作者：`bcherny`（Anthropic）
- 修复 #83803：`((x++))` 在 `set -e` 下触发非零返回致脚本中止，误将合法 agent 标为非法。
- **关注度**：影响 plugin-dev 生态每一位开发者，修复后插件校验流程鲁棒性提升。

---

## 📈 功能需求趋势

| 趋势 | 代表 Issue | 社区信号 |
|---|---|---|
| **IDE / 桌面 UI 可配置性** | #34196（VSCode 字体）、#88502（多拼写语言）、#91815（远程 session 启动）、#87996（背景 session git 规则优先级） | 👍 累计 > 90，多为静默高频需求 |
| **平台一致性 / 跨设备工作流** | #91815（手机远程启动 desktop session）、#76841（Routines 在移动端丢失入口）、#92773（Routines 列表空 + 推送不到达） | 移动端与桌面端的功能对齐成新焦点 |
| **认证与订阅透明度** | #82700（Pro 订阅被锁）、#88583（OAuth 清空）、#91641（ODC 兼容）、#93068、#93100、#93243（限额显示与实际不符） | 评论累计 > 20，**计费信任危机**正在累积 |
| **Skills / 插件机制成熟度** | #91871（YAML frontmatter 解析失败）、#80902（子 agent 默认模型）、#92436（code-review --level 无效） | 体现官方插件生态仍处"可用但脆弱"阶段 |
| **Cowork 稳定性** | #92921 / #92977 / #92984 / #93238 | Windows 端一个工作日内连发 4 起，优先级最高 |
| **Agent / 后台任务模型治理** | #87996、#80902、#44380 | 子 agent 与背景 session 的行为边界需要显式配置 |

---

## 🧑‍💻 开发者关注点

1. **Cowork on Windows 全面不稳** — Plan9、VM 运行时、sandbox 挂载、首条消息卡死四类问题同周爆发，叠加 KB 兼容性回退，是当下最大的**生产可用性风险**。
2. **认证链路脆弱** — OAuth keychain 被并发清空、ODC 兼容问题、单次 refresh token 竞态，提示 **credential 写入缺少原子性保证**。
3. **限额显示与实际不符** — "日限额伪装为月限额"、"5 小时窗口几分钟即耗尽" 等投诉直接打击付费意愿，**计费 UI 与后端计费逻辑需对齐**。
4. **安全策略噪音** — `git commit -m` 等日常命令反复弹权限框，#27957 长期未解决，**需要分级或"per-command 记忆"**。
5. **VSCode 扩展可配置性差** — 字体大小、面板行为等基本项缺失，与 Cursor 等竞品形成落差。
6. **内建插件源码开源** — `mods/` 目录以插件形式发布，是 Anthropic **首次将内部钩子以可审计形式公开**，值得持续跟进其治理模式。
7. **mobile ↔ desktop 工作流** — 远程启动 session、设备选择器、Routines 跨端同步等需求涌现，**移动端从"查看"向"控制"演进**。

---

*本日报基于 github.com/anthropics/claude-code 过去 24 小时数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-10** | 数据窗口：过去 24 小时

---

## 📌 今日速览

今日 Codex 项目迎来了 **v0.154.0 正式版**，核心亮点是 **GPT-6-Astra 模型正式接入模型选择器与 Amazon Bedrock**，以及**实验性的 worktree 隔离会话支持**。与此同时，社区 Issue 大量集中在三大痛点：**Windows 桌面端的 Computer Use / Chrome 控制稳定性**、**GPT-6-Astra 模型容量（"at capacity"）错误**、以及**上下文压缩（compaction）后对话历史丢失**。PR 端则由 `copyberry[bot]` 持续推进 MCP 协议增强、TUI 体验优化与线程生命周期管理。

---

## 🚀 版本发布

### rust-v0.154.0（正式版）

**核心新特性：**

1. **GPT-6-Astra 模型上线**
   - 已在模型选择器与 Amazon Bedrock 目录中可用（[#42879](https://github.com/openai/codex/issues/42879)、[#42619](https://github.com/openai/codex/issues/42619)）
   - 注意：社区反馈 Linux 上 Astra 模型可见性不可靠（[#42868](https://github.com/openai/codex/issues/42868)，已关闭），macOS 同样存在缺失问题（[#44375](https://github.com/openai/codex/issues/44375)，已关闭）

2. **实验性 Worktree 支持**
   - 支持通过 `--worktree` 或 `/worktree` 命令创建隔离的 checkout，用于新会话或 fork 会话
   - 可浏览与恢复 worktree 会话（[#42652](https://github.com/openai/codex/issues/42652)、[#43069](https://github.com/openai/codex/issues/43069)、[#43120](https://github.com/openai/codex/issues/43120)、[#43335](https://github.com/openai/codex/issues/43335)）

### 同日发布的预发布版本
- `rust-v0.154.0-alpha.6.1`
- `rust-v0.154.0-alpha.10.2`
- `rust-v0.154.0-alpha.11`

> 📦 这表明 0.154.0 系列仍在快速迭代，alpha 版本与正式版本并行发布，建议关注生产环境用户的兼容性反馈。

---

## 🔥 社区热点 Issues

以下按社区关注度（评论数 + 👍）排序，挑选 10 个最值得追踪的 Issue：

### 1. [#25178](https://github.com/openai/codex/issues/25178) — Windows Computer Use 截图调用失败
- **评论 54 / 👍 23**（今日最高热度）
- Windows 10 22H2 上 `get_window_state` 请求截图时抛出 `SetIsBorderRequired failed: 不支持此接口 (0x80004002)`
- **重要性**：直接阻塞 Windows 端 Computer Use 的核心能力，影响所有依赖屏幕截图的工作流
- **社区反应**：讨论密集，可能与 Windows API 兼容性边界相关

### 2. [#21653](https://github.com/openai/codex/issues/21653) — TUI 多行状态行支持
- **评论 20 / 👍 83**（👍 数最高，强烈社区诉求）
- 状态栏配置项多时无换行导致截断，希望支持多行
- **重要性**：体现 TUI 用户对**可定制信息密度**的强烈需求，长期被关注（5 月创建至今仍持续互动）

### 3. [#25271](https://github.com/openai/codex/issues/25271) — Windows Chrome URL 无法识别
- **评论 35 / 👍 9**
- Computer Use 在 Windows 上无法确定 Chrome 当前 URL，包括 `chrome://newtab/`
- **重要性**：与 #25178 一同构成 Windows Computer Use 的系统性短板

### 4. [#43375](https://github.com/openai/codex/issues/43375) — GPT-5/GPT-6 容量错误跨模型
- **评论 15 / 👍 5**
- 多个 GPT-5 与 GPT-6 模型同时返回 "Selected model is at capacity"
- **重要性**：反映 GPT-6-Astra 上线后的**服务容量调度问题**，直接影响 Pro/Plus 订阅体验

### 5. [#42501](https://github.com/openai/codex/issues/42501) — Windows 应用无法启动 UI
- **评论 14 / 👍 2**
- 版本 `26.901.1978.0` 后 `cua_node` staging 阶段无法复制 `node_repl.exe`，导致 `MainWindowHandle` 为 0
- **重要性**：典型升级回归 bug，影响所有 Microsoft Store 用户

### 6. [#41399](https://github.com/openai/codex/issues/41399) — macOS 删除会话仍残留侧边栏
- **评论 13 / 👍 14**
- macOS Desktop 本地 profile 完全重置后，已删除的 ChatGPT 对话仍存在
- **重要性**：数据生命周期与本地/云同步一致性问题

### 7. [#44210](https://github.com/openai/codex/issues/44210) — Windows Pro 20x 周用量显示跳变
- **评论 9 / 👍 0**
- 周用量显示从 60% 跳到 97%，同时重置时间戳变化
- **重要性**：涉及订阅计费透明度，可能影响 Pro 用户信任

### 8. [#42311](https://github.com/openai/codex/issues/42311) — 上下文压缩后对话消失
- **评论 10 / 👍 1**
- 配合 #44363 形成**重要趋势**：compaction 流程存在系统性数据丢失风险
- **重要性**：核心功能可靠性问题，开发者重度使用场景受影响

### 9. [#44363](https://github.com/openai/codex/issues/44363) — Context compaction 原地重写 rollout 永久破坏转录
- **评论 2（新增，话题严重）**
- compaction 流程直接覆盖存储 rollout，未保留原版本
- **重要性**：与 #42311 关联，表明 compaction 设计缺少原子性/可回滚保障

### 10. [#44355](https://github.com/openai/codex/issues/44355) — Safety 误判永久禁用 CI 线程
- **评论 3（新增）**
- `misalignment_policy_violation` 误判导致 10M token 的 CI 线程无法恢复，仅显示 "start a new chat"
- **重要性**：暴露**安全策略与用户工作流冲突**的设计空白，缺少申诉/恢复通道

---

## 🛠️ 重要 PR 进展

今日 PR 均由 `copyberry[bot]` 提交且状态多为 **CLOSED**（说明合并节奏快、提交即合入）。以下是功能/修复层面的精选：

### 1. [#44346](https://github.com/openai/codex/pull/44346) — MCP 工具续传支持原生验证
- 为 MCP `2026-07-28` 协议下 OpenAI 表单 elicitation 与原生用户验证提供显式处理
- 解决了 RMCP 标准输入请求 union 不覆盖自定义方法的问题

### 2. [#44359](https://github.com/openai/codex/pull/44359) — MCP 状态快照报告 OAuth 失败
- 修复状态发现路径下 OAuth 状态虚假保留的问题
- 关键的安全可观测性修复

### 3. [#44349](https://github.com/openai/codex/pull/44349) — 区分 fork 会话与 resume 会话
- 为 session-start hooks 增加 `fork` 状态，避免 startup 钩子在 fork/reuse 时重复运行

### 4. [#44350](https://github.com/openai/codex/pull/44350) — 线程附件操作与协调删除
- 新增幂等的附件创建/分页列出操作，确保删除线程时元数据被一并清理

### 5. [#44331](https://github.com/openai/codex/pull/44331) — 语音对话作为实验性功能暴露
- `realtime_conversation` 标记为实验性，在 `/experimental` 中以 "Voice conversations" 显示
- 引导用户启用、重启并使用 `/voice` 命令

### 6. [#44341](https://github.com/openai/codex/pull/44341) — Remote Control 会话绑定认证所有者
- 修复多用户切换场景下 relay 状态串号的问题；同身份 token 刷新应保持连接

### 7. [#44327](https://github.com/openai/codex/pull/44327) — 阻止 Windows 沙箱中的文件系统根目录读拒绝
- 在 elevated setup 前校验 root 读访问，避免策略冲突导致服务不可用

### 8. [#44320](https://github.com/openai/codex/pull/44320) — 三次空自动续答后阻塞目标
- 防止自动续答陷入空响应死循环，三次连续空 final 答案且无其他活动时标记 goal 为 `blocked`

### 9. [#44332](https://github.com/openai/codex/pull/44332) — 在线程设置中持久化禁用插件 ID
- 新增 `disabled_plugin_ids` 字段，覆盖启动选项、settings override、快照与持久化回合上下文

### 10. [#44318](https://github.com/openai/codex/pull/44318) — Hosted Codex Apps 独立 MCP 协议开关
- 新增 `features.codex_apps_mcp_2026_07_28`，允许宿主型 Codex Apps 独立选择 MCP 协议版本

---

## 📈 功能需求趋势

从 50 条活跃 Issue 中提炼出的社区关注方向：

| 方向 | 热度信号 | 代表 Issue |
|---|---|---|
| **GPT-6-Astra 模型稳定性** | 容量错误、跨平台可见性差异 | [#43375](https://github.com/openai/codex/issues/43375)、[#42868](https://github.com/openai/codex/issues/42868)、[#44375](https://github.com/openai/codex/issues/44375) |
| **Computer Use / 浏览器控制** | Windows Chrome 控制、截图、URL 识别 | [#25178](https://github.com/openai/codex/issues/25178)、[#25271](https://github.com/openai/codex/issues/25271)、[#44135](https://github.com/openai/codex/issues/44135) |
| **上下文管理 / Compaction** | 历史丢失、原地覆盖、误判安全 | [#42311](https://github.com/openai/codex/issues/42311)、[#44363](https://github.com/openai/codex/issues/44363)、[#44355](https://github.com/openai/codex/issues/44355) |
| **TUI 可定制性** | 多行状态栏、键盘交互、焦点管理 | [#21653](https://github.com/openai/codex/issues/21653)、[#44360](https://github.com/openai/codex/pull/44360)、[#44344](https://github.com/openai/codex/pull/44344) |
| **桌面端稳定性** | 升级回归、内存泄漏、UI 不渲染 | [#42501](https://github.com/openai/codex/issues/42501)、[#29079](https://github.com/openai/codex/issues/29079)、[#41752](https://github.com/openai/codex/issues/41752) |
| **图像生成能力** | 模型选择器、参考图编辑失败 | [#43965](https://github.com/openai/codex/issues/43965)、[#33379](https://github.com/openai/codex/issues/33379) |
| **会话生命周期** | 删除残留、附件清理、fork 区分 | [#41399](https://github.com/openai/codex/issues/41399)、[#41661](https://github.com/openai/codex/issues/41661)、[#44350](https://github.com/openai/codex/pull/44350) |
| **订阅与配额** | 周用量跳变、Ultra 预算、5h 限额诉求 | [#44210](https://github.com/openai/codex/issues/44210)、[#34822](https://github.com/openai/codex/issues/34822) |

---

## 💡 开发者关注点

综合 Issue 与 PR 内容，开发者社区当前聚焦的痛点与高频需求：

1. **新模型交付伴随容量波动** — GPT-6-Astra 上线首日即出现跨模型 "at capacity" 错误（[#43375](https://github.com/openai/codex/issues/43375)、[#44382](https://github.com/openai/codex/issues/44382)），建议短期内备用 GPT-5.x 模型。

2. **Compaction 数据安全** — compaction 流程目前**原地重写 rollout 且无可回滚**（[#44363](https://github.com/openai/codex/issues/44363)），多个开发者反馈长会话历史永久丢失。这是一个**优先级应高于功能迭代的可靠性问题**。

3. **Windows 桌面端是质量短板** — Computer Use、Chrome 控制、UI 启动失败、内存泄漏等大量 Issue 集中在 Windows。Mac/Linux 用户受影响相对较小，但 Windows Pro/Plus 用户体验承压。

4. **安全策略缺乏申诉通道** — `misalignment_policy_violation` 误判（[#44355](https://github.com/openai/codex/issues/44355)）与内容过滤误报（[#43969](https://github.com/openai/codex/issues/43969)、[#44380](https://github.com/openai/codex/issues/44380)）直接导致长任务不可恢复，社区呼吁引入**可申诉/可重试的安全回路**。

6. **TUI 体验打磨进入深水区** — PR 中出现大量焦点行为、Esc 行为、键盘绑定、状态栏换行等细节优化（[#44360](https://github.com/openai/codex/pull/44360)、[#44344](https://github.com/openai/codex/pull/44344)、[#44354](https://github.com/openai/codex/pull/44354)、[#21653](https://github.com/openai/codex/issues/21653)），表明 Codex CLI 正从"能用"过渡到"好用"阶段。

7. **MCP 协议进入精细化阶段** — PR 涉及协议独立开关、OAuth 状态可见性、Tool result 元数据边界等（[#44318](https://github.com/openai/codex/pull/44318)、[#44359](https://github.com/openai/codex/pull/44359)、[#44336](https://github.com/openai/codex/pull/44336)），MCP 生态正在从"可用"走向"可控"。

8. **语音/多模态前瞻** — 语音对话以实验特性身份引入（[#44331](https://github.com/openai/codex/pull/44331)），暗示后续可能成为正式功能；图像模型选择器诉求（[#43965](https://github.com/openai/codex/issues/43965)）说明多模态透明度也是开发者关注重点。

---

> 📊 **日报小结**：今天整体属于"**模型扩展 + 稳定性债暴露**"的一天。GPT-6-Astra 与 worktree 等新能力令人期待，但 compaction 数据丢失、Windows Computer Use 稳定性、安全误判等问题提醒我们，**功能扩展速度已显著超过质量保障能力**。建议关注 0.154.0 后续 alpha 版本的修复节奏，以及 compaction 流程是否会引入原子化/可回滚机制。

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 统计周期：2026-09-09 → 2026-09-10*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-09-10
**数据源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布了 `v0.61.0-nightly` 夜间版本，社区关注的焦点集中在 **Agent 体系的稳定性**：多个 P1 级 bug 报告了子代理（subagent）在 MAX_TURNS 后错误报告 GOAL 成功、通用 Agent 长时间挂死、Shell 执行后卡在"等待输入"等问题。PR 方面亮点显著：夜间版本正式将 **`gemini-3.8-flash`** 设为默认 flash 模型，同时沙箱边界加固与提示词注入防护（P29250 / P29214）持续推进。

---

## 🚀 版本发布

### v0.61.0-nightly.20260910.ged2ac40df

- **类型**：夜间构建（nightly）
- **完整变更日志**：[compare link](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20250909...v0.61.0-nightly.20260910.ged2ac40df)
- 同步提交 [PR #29268](https://github.com/google-gemini/gemini-cli/pull/29268) 完成自动版本号升级。建议生产环境继续使用 stable 渠道。

---

## 🔥 社区热点 Issues

> 选取评论数最多或优先级最高的 10 条 Issue

| # | 标题 | 优先级 | 评论 | 关键点 |
|---|------|--------|------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent recovery after MAX_TURNS** 被错误报告为 GOAL 成功 | 🔴 P1 | 13 | 子代理在达到最大轮次后仍上报 success，掩盖了中断事实，状态标签混乱（维护者标记 `need-retesting`） |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 长时间挂死** | 🔴 P1 | 8 | 委派给 generalist agent 后即便创建文件夹也无限挂起；显式禁用子代理后可绕过，社区反馈强烈（👍8） |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙箱 + 执行后意图路由** | 🟡 P2 | 9 | 利用 Gemini 3 的原生 bash 亲和性，构建无依赖沙箱与执行后意图分发，被视为"增强 Agent 核心能力"的大型 enhancement |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware 文件读取/搜索/映射的可行性评估** | 🟡 P2 | 7 | Epic 级议题，调研用 AST 替代文本搜索以减少误读和 token 噪声 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不主动调用自定义 skills/sub-agents** | 🟡 P2 | 6 | 即便技能描述完备，模型也只在显式提示时使用，社区认为是 prompt 与工具路由问题 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 命令结束后仍卡在"Waiting input"** | 🔴 P1 | 4 | 简单的 CLI 命令完成后，UI 仍将其视为活跃状态，反复出现，影响体感 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 增加确定性脱敏并降低日志量** | 🟡 P2 / Security | 5 | 修补记忆系统在读取本地 transcript 时的潜在密钥泄露面 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 反复重试低价值会话** | 🟡 P2 | 4 | 索引中"被跳过"的会话永远不会被标记为已处理，造成无意义的反复抽取 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **browser subagent 在 Wayland 下失败** | 🔴 P1 | 4 | Termination Reason: GOAL，但实际未执行；Linux Wayland 用户受影响 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **browser_agent 锁恢复与会话接管** | 🟢 P3 | 4 | BrowserManager 当前 fail-fast 策略过于激进，需要持久会话的自动接管能力 |

**趋势观察**：超过 70% 的热点 Issue 集中在 **agent / subagent 领域**，暴露出当前 Agent 体系在错误传播、状态汇报、并发隔离与外部工具集成（浏览器）方面的薄弱环节。

---

## 🛠 重要 PR 进展

| PR | 标题 | 状态 | 重点 |
|----|------|------|------|
| [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) | **feat(core): 将 gemini-3.8-flash 设为默认 flash 模型** | 🟢 OPEN | 同时注册 `3.5/3.6/3.7/3.8-flash` 系列到 `VALID_GEMINI_MODELS`，并配置别名与解析；模型侧一次重要升级 |
| [#29250](https://github.com/google-gemini/gemini-cli/pull/29250) | **fix(core): 阻断通过 build 文件修改与非可信 flag 的间接提示词注入** | 🟢 OPEN（XL） | 重构 `shell / edit / write_file` 内置路径，强化 restricted-workspace 下的边界校验，安全相关 |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | **fix(sandbox): 加固文件系统边界并隔离运行时状态** | 🟢 OPEN（L） | 用 realpath 解析做路径敏感性检查，将沙箱运行时状态与宿主机配置目录隔离 |
| [#29265](https://github.com/google-gemini/gemini-cli/pull/29265) | **fix(agent): 防止中断轮次污染会话上下文** | 🟢 OPEN | 解决 SIGINT / 超时 / 中止工具执行导致历史损坏、后续 prompt 失败的问题（对应 #22323 现象） |
| [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) | **fix(extensions): 更新前备份扩展目录以便回滚** | 🟢 OPEN | 修复 `updateExtension` 实际未拷贝原始目录就尝试回滚的逻辑缺陷 |
| [#29248](https://github.com/google-gemini/gemini-cli/pull/29248) | **fix(cli): 避免确认后产生重复历史与遥测** | 🟢 OPEN | `/resume save <tag>` 等场景下抑制重复插入 |
| [#29093](https://github.com/google-gemini/gemini-cli/pull/29093) | **Gitignore 性能优化：内存缓存 + 子树剪枝** | 🔴 CLOSED | 修复 #29077，对同一路径重复模式匹配加缓存，并对被忽略目录整树跳过，性能显著提升 |
| [#29098](https://github.com/google-gemini/gemini-cli/pull/29098) | **fix(cli): 保持 useInputHistoryStore state updater 纯净** | 🔴 CLOSED | React state updater 不能调用副作用函数，避免 Strict Mode 双调用导致的 bug |
| [#29094](https://github.com/google-gemini/gemini-cli/pull/29094) | **fix: 升级 simple-git 至 3.32.3（CVE-2026-28292，CRITICAL）** | 🔴 CLOSED | 关键安全依赖升级 |
| [#29095](https://github.com/google-gemini/gemini-cli/pull/29095) | **fix: 升级 shell-quote 至 1.8.4（CVE-2026-9277，CRITICAL）** | 🔴 CLOSED | 另一个 CRITICAL 级别依赖升级 |
| [#29097](https://github.com/google-gemini/gemini-cli/pull/29097) | **fix(extensions): 只剥离尾部 `.git` 后缀** | 🔴 CLOSED | 修复 `blog.github.io` 被错误解析为 `hub.io` 的边界 bug |

---

## 📈 功能需求趋势

从过去 24 小时活跃的 Issue 看，社区最集中的诉求集中在以下几个方向：

1. **🧠 Agent 体系可靠性**（P1 集中区）
   - 错误状态汇报（MAX_TURNS / 工具失败被掩盖）
   - 通用 Agent 的死锁与无限挂起
   - 会话恢复 / `/compress` 的持久化（[#21335](https://github.com/google-gemini/gemini-cli/issues/21335)）

2. **🤖 模型与工具路由**
   - Skills / sub-agents 的自动调用率（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
   - 工具数量 > 128 时 400 错误（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）
   - 基于复杂度的路由不应覆盖用户手动选择的模型（已被 PR #29266 修复）

3. **🔐 安全与沙箱**
   - Zero-dependency OS 沙箱 + 意图路由（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）
   - Auto Memory 的密钥脱敏 / 日志治理（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）
   - 间接提示词注入防护（PR #29250）

4. **🖥️ IDE / 终端 UX**
   - 终端 resize 闪烁与渲染性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）
   - Wayland / 多平台浏览器代理支持（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) / [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）

5. **📊 代码理解智能化**
   - AST-aware 阅读 / 搜索（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) / [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
   - Tactful Extraction 节流读取（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）
   - 用本地文件替换 in-context Todo（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836) / [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)）

---

## 🧑‍💻 开发者关注点

综合今日活跃 Issue，开发者反馈的**高频痛点**可以归纳为以下几条：

1. **子代理"沉默失败"是头号痛点**
   多个 P1 issue 都指向同一个模式：子代理在真实失败（MAX_TURNS、Wayland 异常）下仍返回 `success / GOAL`，让主代理和用户都被误导。[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) / [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) / [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
   > 急需 **统一的子代理终止语义** 与 **错误上下文向上透传** 机制。

2. **Shell 与交互式 CLI 的边界处理**
   即使是 `vite create` 这种纯命令，CLI 仍会被卡在交互提示中（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)），或命令结束后 UI 状态错位（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）。开发者期望：要么自动选择非交互参数，要么明确暴露给用户。

3. **Auto Memory 既是亮点也是雷区**
   `SandyTao520` 一口气开了 4 个 issue（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)），覆盖密钥泄露、重试风暴、无效补丁的隔离与质量治理。说明记忆系统的设计已经进入 **生产可用性打磨阶段**。

4. **扩展与依赖的供应链安全被重视**
   本批次合并了 **simple-git CRITICAL CVE** 与 **shell-quote CRITICAL CVE** 两项升级，反映出团队将依赖扫描纳入常态流程。

5. **Skills / Sub-agents "不会被自动用"**
   社区普遍反映：哪怕 skill 描述写得清晰，模型也几乎不会自动调用，必须显式指令。这是 Prompt 设计层的问题，结合即将推出的 gemini-3.8-flash（PR #29172），下一轮 prompt 调优值得期待。

6. **大上下文与小读取的平衡**
   单轮 ~36.6k token 的基线被认为过高，开发者呼吁引入 `grep → 边界读取 → AST` 的"外科手术式"读取层次（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) / [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)）。

---

> 📊 **日报小结**：今天的 Gemini CLI 是"夜间版本 + Agent 稳定化 + 安全加固"的三条主线交织。如果只能关注一件事，**PR #29172（默认 gemini-3.8-flash）+ Issue #22323（子代理失败语义）** 是接下来一周最值得追踪的方向。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期**：2026-09-10

---

## 📌 今日速览

过去 24 小时内，Copilot CLI 仓库无新版本发布，但社区活跃度较高，共有 **48 条 Issue 更新**，集中在 **Windows 平台兼容、主题/无障碍、MCP 鉴权与会话管理** 等方向。其中 **#4756（19 👍）、#135（12 👍）、#2199（7 👍）、#3858（6 👍）** 等高赞 Issue 显示跨平台一致性、权限与会话体验仍是社区最关注的痛点。

---

## 🚀 版本发布

**今日无新版本发布。** 当前主线版本为 Copilot CLI 1.0.84 预发布序列（#4773），Windows 桌面捆绑版本为 1.1.15（#4756）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 分类 | 关键点 | 社区反应 |
|---|-------|------|--------|----------|
| 1 | [#4756](https://github.com/github/copilot-cli/issues/4756) Windows app 启动新会话需先归档所有空闲项目 | sessions / platform-windows | 1.1.15 桌面端在每个项目上创建 Local Session 都报 "Failed to create session: invalid argument" | **7 评论 / 19 👍** |
| 2 | [#135](https://github.com/github/copilot-cli/issues/135) 浅色主题不生效 | theming | 自 2025-09-30 起报告至今未修复，0.0.330 仍异常 | **12 评论 / 12 👍** |
| 3 | [#4535](https://github.com/github/copilot-cli/issues/4535) `store_memory` 在 v1.0.81 预发布失败 | context-memory | 原生 memory writer 缺少必要 `instance id`，导致 store_memory 流程中断 | 8 评论 / 1 👍 |
| 4 | [#3773](https://github.com/github/copilot-cli/issues/3773) 浅色主题提示框黑底 + 选区对比度不足 | theming-accessibility | 影响用户提示符与高亮选择的可读性 | 4 评论 / 4 👍 |
| 5 | [#2147](https://github.com/github/copilot-cli/issues/2147) CAIP 400：input item ID 不属于此连接 | protocol | GPT-5.4 (xhigh) 下 websocket 报错，已 **CLOSED** | 6 评论 / 1 👍 |
| 6 | [#4757](https://github.com/github/copilot-cli/issues/4757) `--yolo` / `--allow-all` 在无托管策略账号上仍被 fail-closed 阻断 | permissions / enterprise | 全会话锁定、无法解除，严重影响企业自管账号体验 | 3 评论 / 0 👍，已 **CLOSED** |
| 7 | [#3700](https://github.com/github/copilot-cli/issues/3700) **High severity**：1.0.60 WSL2 回归：MainThread 空闲时 ~215% CPU、TUI 输出冻结 | platform-windows / terminal-rendering | 高严重度，每次冷启动即复现，回归 #2208 | 3 评论 / 2 👍 |
| 8 | [#2199](https://github.com/github/copilot-cli/issues/2199) 新增 `Ctrl+Backspace` 删除整词快捷键 | input-keyboard | 与主流编辑器/Web 行为对齐 | 3 评论 / 7 👍 |
| 9 | [#3976](https://github.com/github/copilot-cli/issues/3976) 原生 `tgrep` 索引器在大 monorepo 上 OOM 杀主机 | tools | 实验开关 `copilot_cli_tgrep` 下索引守护进程无内存上限 | 3 评论 / 0 👍 |
| 10 | [#4775](https://github.com/github/copilot-cli/issues/4775) Mission Control 仪表盘链接 404 | triage | 路径 `/copilot/tasks/<uuid>` 不存在，应为 `/agents/tasks/<uuid>` | 3 评论 / 0 👍 |

**补充关注**：[#367 多账号切换](https://github.com/github/copilot-cli/issues/367)（已 CLOSED）、[#1467 恢复上次会话](https://github.com/github/copilot-cli/issues/1467)、[#4551 远程 SSH 剪贴板失效](https://github.com/github/copilot-cli/issues/4551)、[#4735 工具调用前文本被吞为 "Thought"](https://github.com/github/copilot-cli/issues/4735)、[#3589 多 hook `additionalContext` 仅最后一条生效](https://github.com/github/copilot-cli/issues/3589)。

---

## 📥 重要 PR 进展

> 过去 24 小时仅 1 条 PR 更新，提交量极少。

- **[#4786](https://github.com/github/copilot-cli/pull/4786)** — Revise notice regarding third-party services（nkasuku）
  仅更新第三方服务条款的访问要求与说明文案，无功能改动。

---

## 📈 功能需求趋势

从近 48 条 Issue 中可归纳出 **6 类高频方向**：

1. **🎨 主题与无障碍（theming-accessibility）**
   - 浅色主题长期失效（#135、#3773），社区呼吁支持固定主题而非跟随 OS（#4620）。
2. **🪟 Windows / WSL2 平台一致性**
   - 会话创建（#4756）、任务栏卡片状态（#4771）、`Ctrl+Backspace`（#3858）、CPU 100%（#3700）密集出现，桌面与 CLI 在 Windows 上的体验差距是主要矛盾。
3. **🔌 MCP 鉴权与发现**
   - OAuth 元数据重定向失败（#4769）、Atlassian 回调端口不一致（#4795、#4793）、重复发现报 0 工具（#4773）—— MCP 集成是企业落地的最大障碍。
4. **🔐 权限模型与企业策略**
   - `fail-closed` 误伤自管账号（#4757）、docker 沙箱跳过审批（#4609）、`/permissions assisted` 一小时后失效（#4764），权限边界与可见性需要重做。
5. **📂 会话持久化与多账号**
   - 默认恢复上次会话（#1467）、多 GitHub 账号切换（#367）、切账号后会话不可恢复（#4791），反映出"会话作为一等公民"的产品诉求。
6. **⚙️ 插件/技能生态**
   - marketplace 插件依赖解析（#4487）、`sessionStart`/`subagentStart` hook 多 `additionalContext` 注入丢失（#3589）、转向中的 `turn_index` 冲突（#4792），生态能力正在向"可编排"演进。

---

## 🛠️ 开发者关注点

综合社区反馈，开发者最强烈的 **高频痛点** 可归纳为：

- **跨平台体验不一致**：Windows/WSL2 上是重灾区，从快捷键到任务栏状态再到进程资源占用，问题密度远高于 macOS/Linux。
- **主题与可读性**：浅色主题与对比度问题已横跨多个版本未修复，对长时使用 CLI 的开发者影响显著。
- **MCP / OAuth 工作流不稳定**：回调端口、issuer 校验、metadata 重定向在多个 MCP 服务器上接连失败，影响 Atlassian 等主流工具接入。
- **权限审批"过度"或"不足"并存**：一方面 `--yolo` 被策略误阻断，另一方面 docker 沙箱完全跳过审批——企业用户对"可解释、可恢复"的权限模型有强烈需求。
- **会话与多账号的连续性**：重启后无法定位上次会话、切账号后报错不可恢复（#4791）、任务栏 spin 卡死（#4771），反映出"长任务/跨设备会话"仍是薄弱环节。
- **工具稳定性回退**：原生 `tgrep` 在大仓库 OOM（#3976）、store_memory 缺 instance id（#4535），表明实验性工具接入尚缺乏内存与状态守护。

> 📎 完整 Issue/PR 列表可前往 [github/copilot-cli](https://github.com/github/copilot-cli) 仓库查看。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-10** | **数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区活跃度较低，但出现两个值得高度关注的 **生产环境 Bug**：`/login` 设备授权在 macOS（CLI v0.42.0）上浏览器批准后返回 HTTP 500，影响所有免费计划用户；Windows Terminal 下阿拉伯语（RTL）字符输入与回显存在镜像反转问题。此外，VSCode 扩展的 `@` 文件提及排序建议已关闭合并，`FetchURL` 中 Trafilatura 重复评论内容提取问题被修复。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。本节略。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时仅有 **4 条** Issue 更新，以下全部列出。

### 1. [#2638](https://github.com/MoonshotAI/kimi-cli/issues/2638) `/login` 设备授权登录失败（HTTP 500）
- **状态**：OPEN | **作者**：milesbuckton | **优先级**：🔥 极高
- **环境**：CLI v0.42.0 / macOS / 免费计划（Adagio）/ VSCode 扩展同样复现
- **为何重要**：直接影响新用户和现有用户的登录流程，是阻塞性 Bug；浏览器端已成功批准却仍返回 500，说明服务端校验链路存在不一致，疑似设备码校验或会话绑定环节异常。
- **社区反应**：刚提交 0 评论 0 👍，但鉴于登录为关键路径，预计会快速升温。

### 2. [#2639](https://github.com/MoonshotAI/kimi-cli/issues/2639) Windows Terminal 下阿拉伯语（RTL）字符反转
- **状态**：OPEN | **作者**：lyesmke-png | **优先级**：🔥 高
- **为何重要**：RTL 语言（阿拉伯语、希伯来语等）用户在 Windows Terminal 下既无法正常输入也无法正常阅读模型回复中的混合文本，属核心交互可用性问题；影响 Kimi 的国际化覆盖度。
- **社区反应**：0 评论 0 👍，新提交，等待关注。

### 3. [#1270](https://github.com/MoonshotAI/kimi-cli/issues/1270) VSCode 扩展：`@` 提及应优先展示已打开文件
- **状态**：CLOSED | **作者**：ljyfree | **版本**：v0.4.3
- **为何重要**：典型的 IDE 工作流优化诉求，`@` 文件选择是 VSCode 扩展最高频操作之一；该 Issue 提交于 2026-02-27，今日关闭，说明社区反馈已进入产品迭代路线。
- **社区反应**：1 评论 0 👍，但周期长（~6 个月），反映此类体验改进类需求响应较慢。

### 4. [#2601](https://github.com/MoonshotAI/kimi-cli/issues/2601) Kimi Web：引用并回复 AI 回复的任意片段
- **状态**：CLOSED | **作者**：topit | **类型**：Feature Request
- **为何重要**：提出"对话锚定（quote-and-reply）"交互范式，允许用户选中 AI 回复中的任一段落/代码块/计划步骤并附加追问，是当前主流 AI IDE/Web 助手的产品基线能力；此次关闭暗示该能力可能已在路线图中或被纳入后续 Web 版本。
- **社区反应**：0 评论 0 👍，但需求方向具备较强产品力。

---

## 🛠 重要 PR 进展

> 说明：过去 24 小时仅有 **1 条** PR 更新。

### [#1863](https://github.com/MoonshotAI/kimi-cli/pull/1863) `fix(fetch)`：抑制重复提取的评论文本
- **状态**：CLOSED ✅ | **作者**：SherlockShemol
- **修改内容**：
  - 将 `FetchURL` 的 HTML 抽取路径切换为分别检查 Trafilatura 的正文与评论
  - 当抽取的评论规范化后与正文相同时予以抑制
  - 新增 GitHub Issue 抽取输出重复的回归测试
- **意义**：解决了从 GitHub Issue/Discussion 等页面抓取时，模型上下文中常见"正文 + 评论区"内容冗余的问题，可降低 token 消耗与上下文噪声，对长文/多评论页面效果尤为明显。
- **质量提示**：提交于 2026-04-13，今日关闭，周期约 5 个月，合并节奏偏慢。

---

## 📈 功能需求趋势

基于本期活跃 Issues，可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|------------|----------|
| **IDE 集成体验** | #1270 | VSCode 扩展的 `@` 提及排序等细节体验持续被关注 |
| **国际化（i18n / RTL）** | #2639 | 多语言用户群扩张带来新的可用性诉求，RTL 支持为短板 |
| **Web UI 交互深化** | #2601 | 引用-回复、对话锚定等精细化交互成为下一阶段差异化点 |
| **认证与登录链路稳定性** | #2638 | 设备码登录流程需要更严格的端到端验证 |
| **抓取与上下文质量** | #1863 | 网页抽取的去重/清洗直接影响模型输出可靠性 |

---

## 💡 开发者关注点

从本期数据中提炼的高频痛点与共性需求：

1. **关键路径的可靠性**：登录、认证等阻塞性流程出现 Bug 时影响面大，建议在 release 前增加设备码登录的端到端测试覆盖。
2. **跨平台 / 多语言一致性**：Windows Terminal 的 RTL 处理提示团队需建立跨终端（Windows Terminal、iTerm2、GNOME Terminal 等）的字符渲染矩阵。
3. **IDE 上下文智能化**：`@` 提及等高频操作应根据用户当前工作空间（已打开文件、近期编辑、当前 Git 变更）做优先级排序，而非简单全文件列表。
4. **Web 体验的"评论级"对话粒度**：用户期望能在 AI 回复的任意片段上锚定追问，这是从"轮次对话"走向"片段对话"的产品演进信号。
5. **抓取工具链的可观测性**：Trafilatura 等抽取器的输出噪声是隐性 token 成本来源，建议暴露抽取/清洗过程的调试信息供高级用户诊断。

---

> 📊 **数据说明**：本期日报基于过去 24 小时内更新的 4 条 Issue 与 1 条 PR 生成；如需更长时间窗口的趋势分析，可补充 7 日 / 30 日数据。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-09-10**

---

## 1. 今日速览

今天 OpenCode 发布了 **v1.18.30 版本**，正式引入 GPT-6 模型的 Astra 系统提示，同时修复了 Bedrock DeepSeek 模型 ID 解析和 Azure / OpenAI Provider SDK 的兼容性问题。社区方面，**Windows ARM64 平台 TUI 初始化失败**(#19130) 仍是讨论最热烈的痛点，而 **Agent Teams 多人协作模型**(#12711) 与 **UI Intent Channel 插件协议**(#6330) 持续吸引架构层面的关注。新提交的 PR 集中在 Provider 路由修复与 codemode 引擎一致性改进上，核心稳定性工作正在加速推进。

---

## 2. 版本发布

### v1.18.30

**Core**
- ✨ **新增**：为 GPT-6 模型添加 Astra 系统提示
- 🐛 **修复**：保留 Bedrock DeepSeek 模型 ID（含 ARN 格式），使其正确解析（@YeEmrick 贡献）
- 🐛 **修复**：升级 Azure Provider SDK，引入兼容性修复
- 🐛 **修复**：升级 OpenAI Provider SDK（详情被截断）

> 该版本侧重于多 Provider 的兼容性收尾工作，是面向 GPT-6 接入的最后一块拼图。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论 | 👍 | 重要性 |
|---|------|------|------|------|--------|
| [#19130](https://github.com/anomalyco/opencode/issues/19130) | Windows ARM64 原生 OpenTUI 初始化失败（bun:ffi dlopen TinyCC 错误） | OPEN | 23 | 13 | 🔴 影响 ARM64 Windows 用户无法使用 TUI，仅 CLI 可用，是平台兼容性关键阻塞 |
| [#6330](https://github.com/anomalyco/opencode/issues/6330) | FEATURE：通用 UI Intent Channel 用于跨客户端插件 UX | OPEN | 21 | 9 | 🟡 定义 server-client 协议扩展点，决定 OpenCode 插件生态长期架构走向 |
| [#8816](https://github.com/anomalyco/opencode/issues/8816) | FEATURE：提供 llms.txt 和 Markdown 格式文档 | CLOSED | 17 | 36 | 🟢 已关闭，👍 数反映文档可机器化的强烈呼声 |
| [#12711](https://github.com/anomalyco/opencode/issues/12711) | DESIGN：Agent Teams —— 平面化团队 + 命名消息 + 多模型 + TUI 集成 | OPEN | 15 | 23 | 🔴 突破当前 task 工具单 agent 串行限制，是多 agent 协作路线的核心设计 |
| [#43277](https://github.com/anomalyco/opencode/issues/43277) | 会话在正常使用中永久卡死，跨重启无法恢复 | OPEN | 9 | 1 | 🔴 严重稳定性问题，会话状态恢复机制存在数据一致性问题 |
| [#18151](https://github.com/anomalyco/opencode/issues/18151) | 无法写入文件（Write Failed: Tool execution aborted） | CLOSED | 8 | 1 | 🟡 文件写入可靠性问题，影响日常编码工作流 |
| [#43295](https://github.com/anomalyco/opencode/issues/43295) | Web UI V2 提示控件在窄屏上覆盖发送按钮 | OPEN | 7 | 1 | 🟡 V2 Web UI 响应式布局缺陷，移动端/窄屏体验受损 |
| [#1906](https://github.com/anomalyco/opencode/issues/1906) | 若存在 CLAUDE.md，`/init` 应修改它而非新建 AGENTS.md | CLOSED | 7 | 0 | 🟢 反映与 Claude Code 兼容性的细节诉求，已关闭 |
| [#28289](https://github.com/anomalyco/opencode/issues/28289) | kotlin-ls 在大型 Android 项目初始化超时 | CLOSED | 7 | 0 | 🟢 LSP 超时配置对大项目不够友好，已关闭 |
| [#38854](https://github.com/anomalyco/opencode/issues/38854) | macOS 上 OpenCode 无法连接局域网 Ollama（curl 可用） | OPEN | 3 | 1 | 🟡 本地 LLM 工作流受阻，可能涉及网络栈或 TLS 配置 |

**社区反应解读**：
- 👍 数最高的 #8816（36 👍）说明 **文档可机器化（llms.txt）** 是被广泛认可但未满足的需求。
- 评论最密集的 #19130 与 #6330 分别代表**平台兼容性**与**插件协议**两个长期战线。
- #12711 Agent Teams 提案获 23 👍，是当前最受期待的架构升级。

---

## 4. 重要 PR 进展

| # | 标题 | 作者 | 状态 | 要点 |
|---|------|------|------|------|
| [#48251](https://github.com/anomalyco/opencode/pull/48251) | fix(core): 将 Mantle GPT-OSS 模型路由到 Chat 接口 | rekram1-node | CLOSED | Mantle 的 gpt-oss 模型 ID 之前未走 Chat Completions 通道，已修正路由 |
| [#48268](https://github.com/anomalyco/opencode/pull/48268) | fix(provider): 解析无点号 GPT 主版本号 | marcusrbrown | OPEN | 修复 `transform.ts` 中 `/gpt-(\d+)\.(\d+)/` 不匹配 `gpt-6-...` 这类无 minor 版本 |
| [#48267](https://github.com/anomalyco/opencode/pull/48267) | fix(provider): 为 OpenAI-native 路径显式锚定缓存 | marcusrbrown | OPEN | 修复 `applyCaching()` 缓存逻辑未覆盖 `@ai-sdk/openai` 模型的问题 |
| [#41640](https://github.com/anomalyco/opencode/pull/41640) | feat(app): 新增 background subagents 命令 | romirr | CLOSED | 在 App 端引入后台运行 subagent 的能力，有意不绑定快捷键以避免与 #36520 冲突 |
| [#48257](https://github.com/anomalyco/opencode/pull/48257) | fix(codemode): 像 JS ToObject 一样强制转换枚举源 | rekram1-node | OPEN | 修正 `Object.keys/values/entries/hasOwn/assign`、spread、`for...in` 对非纯对象/数组的错误拒绝 |
| [#48212](https://github.com/anomalyco/opencode/pull/48212) | feat(plugin): 新增 session.compaction 与 generate 钩子 | rekram1-node | CLOSED | 让插件可区分四种请求流：context / compaction / generate，compaction 可设置 `result` 跳过默认摘要 |
| [#48262](https://github.com/anomalyco/opencode/pull/48262) | fix(app): 将压缩状态移至摘要下方 | opencode-agent[bot] | OPEN | 修复 UI 中 "Compacting" 状态与流式摘要的视觉顺序 |
| [#48002](https://github.com/anomalyco/opencode/pull/48002) | fix(core): models.dev 不可达时回退到空目录 | Luan-Fuzi | OPEN | 首运行无缓存时若 models.dev 拉取失败，会 `Effect.orDie` 崩溃，现改为回退空目录 |
| [#43165](https://github.com/anomalyco/opencode/pull/43165) | feat(opencode): 消息日志记录器 | bornmw | OPEN | 新增 `experimental.log_messages`（info/debug/trace）配置，可调试 LLM 请求/响应 |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) | feat(tui): 新增 linux_clipboard_selection 配置 | bornmw | OPEN | 支持 Linux 主选择缓冲区（PRIMARY/BOTH 模式），并修复 wl-copy MIME 类型 |

**整体观察**：今天的 PR 集中在三大主题——**Provider 路由正确性**（#48251、#48268、#48267）、**codemode 引擎 JS 语义一致性**（#48257、#48233）以及**插件可扩展性增强**（#48212、#43165）。

---

## 5. 功能需求趋势

通过对今日 Issues 梳理，社区最关注的方向如下：

1. **🤖 多 Agent 协作架构** — #12711 Agent Teams 是热度最高的架构提案，反映当前单 agent 串行模型不足以应对复杂任务（多文件重构、研究+实施并行）。
2. **🔌 插件与协议扩展** — #6330 UI Intent Channel、#48212 session hooks、#43165 message logger，体现社区希望把 OpenCode 打造为可深度扩展的**插件平台**。
3. **📄 文档可机器化（LLM-friendly）** — #8816（36 👍）虽然已关闭，但需求强度极高，需要 llms.txt、Markdown 文档地图，便于其他 LLM 直接消费。
4. **🌐 跨平台兼容性** — #19130（ARM64 Windows）、#38854（macOS Ollama 局域网）、#36344（桌面同名项目）共同指向**桌面端跨平台一致性**仍欠打磨。
5. **🖥️ Desktop 体验** — #43295（窄屏布局）、#29807（项目图标不渲染）、#36416（权限规则失效）、#48264（Windows .msixbundle 安装包）说明 Desktop V2 仍在快速迭代期。
6. **🛠️ 本地 LLM 与私有部署** — #38854（Ollama 局域网）、#35303（匿名数据共享）反映**本地/隐私部署**需求明确。
7. **📚 LSP / 工具链稳定性** — #28289（kotlin-ls）、#34966（TUI bash 输出流式）、#36428（流式验证器）均为工具调用可靠性问题。

---

## 6. 开发者关注点

**高频痛点：**

- **⚠️ 会话状态管理脆弱**：#43277 会话永久卡死且无法恢复，是当前最严重的稳定性反馈之一，涉及 session/persistence 子系统重设计。
- **⚠️ 文件写入失败**：#18151 "Write Failed" 错误在大改动时频繁出现，降低编码信任度。
- **⚠️ UI 元素重叠**：#43295 窄屏下发送按钮被控件覆盖，是 Web V2 的明显回归。
- **⚠️ 工具流式输出缺失**：#34966 TUI bash 工具不流式 stdout，仅显示 spinner，长任务体验差。
- **⚠️ 权限系统不生效**：#36416 Desktop 忽略 `~/.config/opencode/opencode.jsonc` 的 permission 规则，与 CLI 行为不一致。

**高频需求：**

- **多 Agent 并行**：不只是子代理串行返回，而是需要命名消息、共享状态、TUI 集成。
- **更强的可观测性**：#43165 的消息日志、#48262 的压缩状态可视化、#46593 的 Copilot thinking 显示都属于"想要看见内部发生了什么"。
- **与 Claude Code / Copilot 兼容**：`/init` 对 `CLAUDE.md` 的处理（#1906）、GitHub PR 中 `/s/` 分享 URL 兼容（#36395）说明很多用户同时混用多个工具。
- **桌面端生产力细节**：项目图标、桌面权限、同名项目并行打开、Windows 安装包格式等小问题累积。

---

*报告生成时间：2026-09-10 · 数据来源：github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-10

## 今日速览

过去 24 小时内 Pi 仓库无新版本发布，但社区活跃度保持高位：50 个 Issue 被更新，7 个 PR 完成合并。核心关注点集中在**多 Provider 兼容性回归**（OpenRouter、Anthropic、Bedrock、OpenAI-Codex、Grok、Mistral）和**扩展 API 一致性**，多个高评论 Issue 已被关闭或进入 inprogress 状态。

---

## 版本发布

无新版本发布（过去 24 小时内）。

---

## 社区热点 Issues

| # | Issue | 评论 | 状态 | 重要性 |
|---|-------|-----|------|--------|
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Sessions hang on "working" with Anthropic subscription | 10 | CLOSED | 🔴 高 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | Parallel startup "No API key found" 持续 ~48s | 6 | OPEN/inprogress | 🔴 高 |
| [#5105](https://github.com/earendil-works/pi/issues/5105) | Compaction summarization 忽略 transport 配置 | 6 | CLOSED | 🟡 中 |
| [#8760](https://github.com/earendil-works/pi/issues/8760) | OpenRouter `:free` 模型 400 错误（max_tokens 超限） | 5 | OPEN/inprogress | 🔴 高 |
| [#9381](https://github.com/earendil-works/pi/issues/9381) | Package Report: pi-safe-compact（恶意行为） | 5 | CLOSED | 🟠 安全 |
| [#9290](https://github.com/earendil-works/pi/issues/9290) | modelRegistry.complete() 缺失 x-opencode-session header | 5 | CLOSED/no-action | 🟡 中 |
| [#9294](https://github.com/earendil-works/pi/issues/9294) | claude-fable-5 fallback 列表包含已废弃模型 | 4 | OPEN | 🟡 中 |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | 扩展注册 Provider 启动时忽略默认配置 | 4 | OPEN | 🟡 中 |
| [#9311](https://github.com/earendil-works/pi/issues/9311) | Fullscreen 选区状态在切换会话后残留 | 4 | OPEN | 🟢 低 |
| [#9306](https://github.com/earendil-works/pi/issues/9306) | 异常终止 turn 后遗留 toolCall 块导致下一轮被拒 | 3 | OPEN | 🟡 中 |

### 重点解读

- **#5291 / #8928 / #8760**：三大 Provider 兼容性问题，反映 Pi 在多 provider / 多进程场景下的稳定性仍是痛点。Anthropic 订阅会话卡死的报告虽已关闭，但 OpenRouter `:free` 与并行启动 OAuth 错误仍属未根治问题。
- **#9381**：`pi-safe-compact` 被举报存在恶意行为，社区 package-report 机制被触发，提示生态扩展安全审查已成常态化议题。
- **#8810 / #9290**：扩展 API 的两处契约违反——默认配置不生效、opencode-go 新增的 `x-opencode-session` 校验未跟进，影响所有使用扩展注册 provider 的开发者。

---

## 重要 PR 进展

| PR | 标题 | 影响范围 |
|----|------|---------|
| [#9404](https://github.com/earendil-works/pi/pull/9404) | feat(examples): model-preference-guard with multi-select picker | 新增扩展示例（多选 + 输入守卫） |
| [#9382](https://github.com/earendil-works/pi/pull/9382) | Always place cursor at the end while navigating history | TUI 输入体验 |
| [#9376](https://github.com/earendil-works/pi/pull/9376) | fix(ai): use reasoning_effort for Mistral-hosted GLM | Mistral GLM-5.2 推理参数修复 |
| [#9374](https://github.com/earendil-works/pi/pull/9374) | fix(coding-agent): reject reload during active session | RPC 模式下避免 runner 失效 |
| [#9380](https://github.com/earendil-works/pi/pull/9380) | docs: validate documentation navigation and reachability | 文档站 CI 校验 |
| [#9370](https://github.com/earendil-works/pi/pull/9370) | docs: extract interactive testing and release guidance into skills | 贡献流程结构化 |
| [#9368](https://github.com/earendil-works/pi/pull/9368) | (accidental pr) | 无效 PR，已关闭 |

### 重点解读

- **#9374** 解决了 RPC 模式下重载竞争导致的 runner 失效问题，是面向扩展作者的重要稳定性修复。
- **#9376** 是 Mistral hosted GLM-5.2 推理行为与官方文档对齐的小型但关键的 provider 修复。
- **#9382** 修复了历史消息导航光标位置不一致的问题，体现项目对 TUI 细节的持续打磨。
- **#9404** 为扩展作者补齐了多选 + 输入守卫的参考实现（[#9405](https://github.com/earendil-works/pi/issues/9405) 配套的需求 issue 同步关闭）。

---

## 功能需求趋势

从今日活跃 Issue 中可提炼出以下社区诉求方向：

1. **Provider / 模型兼容性回归**：Anthropic、OpenRouter、OpenAI-Codex、Bedrock、Grok、Mistral 均有相关 Issue，反映多 provider 支持的维护成本上升。
2. **扩展 API 一致性**：`registerProvider`、`modelRegistry.complete()`、RPC `set_model` 等接口的契约边界正在被重新协商。
3. **TUI / 全屏交互**：滚动速度、Alt 乘数、选区持久化、光标行为等"小但烦"的体验问题集中涌现。
4. **生态安全与可信分发**：pi-safe-compact 报告、LongCat 等新模型贡献请求，显示社区对扩展商店治理与新模型接入流程的关注。
5. **性能与长会话优化**：加载旋转器随 transcript 长度线性吃 CPU（[#9399](https://github.com/earendil-works/pi/issues/9399)），长上下文场景下的资源治理成为新热点。
6. **跨平台与运行时兼容性**：tmux、Node.js v20 globSync、Windows 路径分隔符等环境差异持续需要维护。

---

## 开发者关注点

基于今日 Issue / PR 反馈，开发者最集中的痛点包括：

- **Provider 默认值与 fallback 模型不同步**：API 升级 / 模型下线后，Pi 内置的 `allowedFallbackModels`、catalog 未及时同步（#9294、#9394），直接导致 400 错误。
- **扩展与核心 runner 生命周期耦合**：reload / background spawn 时的状态继承（#9403、#9374）尚未形成稳定约定。
- **错误信息归因错误**：Grok 403 被报告为 OpenAI 计费错误（#9298），`auth.json` 过期导致 active provider 被误指（#8928），调试体验较差。
- **工具调用与上下文的原子性**：`stopReason: error/aborted` 后残留 `toolCall` 块（#9306）、`isError` 字段被 `openai-completions` 丢弃（#9395），影响 hook/permission-gate 扩展的可靠性。
- **Node.js v20 兼容性**：`globSync` 命名导入问题（#9400、#9402）影响最低支持版本，开发者呼吁明确 Node 版本支持矩阵。

---

*数据来源：github.com/badlogic/pi-mono（earendil-works/pi） · 报告生成时间：2026-09-10*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-10

## 📌 今日速览

今天 v0.23.2 正式版与 SDK TypeScript v0.1.11 同步发布，伴随一批 Web Shell / Daemon 的功能增强 PR 合入；社区焦点高度集中在 **Windows ConPTY 进程泄漏**、**VS Code Companion 会话/历史兼容**，以及 **subagent / ACP 执行器的多平台扩展**三条主线，前两类已多次进入 P1 阻塞状态。

---

## 🚀 版本发布

### v0.23.2（最新正式版）
- **Web Shell 改进**：拆分视图会话导航优化（[#11250](https://github.com/QwenLM/qwen-code/pull/11250)）
- **Goal 修复**：claim 预算超支的 checkpoint 改为重试而非 stall（[#11365](https://github.com/QwenLM/qwen-code/pull/11365)）
- 同步发布 nightly: `v0.23.2-nightly.20250909.2e212144d3`
- 兼容 SDK TypeScript v0.1.11（bundled CLI 0.23.2）
- 无已知 Breaking Changes

### cua-driver-rs v0.20.5
- macOS 通用二进制已签名 + 公证；Linux（x86_64/arm64，glibc ≥ 2.31）；Windows UIAccess worker（x86_64/arm64）

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 关注度 | 为什么重要 |
|---|-------|------|--------|-----------|
| [#11303](https://github.com/QwenLM/qwen-code/issues/11303) | Windows VS Code Companion 泄漏 conhost.exe（12h 后 347 进程 / 2.8 GB） | OPEN · P1 | 💬12 | **Top1 痛点**，直接影响 Windows 平台长会话稳定性 |
| [#11119](https://github.com/QwenLM/qwen-code/issues/11119) | Daemon 回收后后台 shell 输出与唤醒通知被静默丢弃 | OPEN · P1 | 💬10 | `qwen serve` Web Shell 长期 session 被 wedging 的核心问题 |
| [#11489](https://github.com/QwenLM/qwen-code/issues/11489) | v0.21→v0.23 升级后所有对话历史消失（state.vscdb 仍在） | OPEN · P1 | 💬4 | 升级路径的数据迁移问题，IDE 用户风险面广 |
| [#11352](https://github.com/QwenLM/qwen-code/issues/11352) | node-pty 在 shell 自然退出时泄漏 ConPTY host（上游 Pin 不可修） | OPEN · P1 | 💬4 | 与 #11303 是同一根因的另一半，揭示依赖边界 |
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI 在多个后台 agent 同时完成时静默退出（React #185） | OPEN · P1 | 💬3 | Ink useBoxMetrics 的 setState 循环，进程无错退出 |
| [#11186](https://github.com/QwenLM/qwen-code/issues/11186) | `qwen serve` home 目录绑定时 workspace 设置归属错误 | OPEN · P2 | 💬4 | 涉及 channel ownership 模型设计，需讨论 |
| [#11433](https://github.com/QwenLM/qwen-code/issues/11433) | 用 SQLite 做 Session/Prompt 索引与持久化的设计讨论 | OPEN · P2 | 💬3 | 长会话、大量 session 场景的扩展性方向 |
| [#11503](https://github.com/QwenLM/qwen-code/issues/11503) | Daemon guard 拒绝 `.git` 是 junction/symlink 的工作区 | OPEN · P2 | 💬3 | Windows + 安全模型的冲突 |
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI 在多 agent 完成时崩溃 | OPEN · P1 | 💬3 | 同上 |
| [#11512](https://github.com/QwenLM/qwen-code/issues/11512) | Windows 不支持 external ACP subagent spawn | OPEN · P2 | 💬2 | subagent 跨平台完整性的关键缺口 |
| [#11513](https://github.com/QwenLM/qwen-code/issues/11513) | 外部 ACP subagent 的 mid-turn input 注入（`SubagentExecutor`） | OPEN · P2 | 💬2 | 与 #11003 PR 配套，扩展 steer 能力 |

> 已关闭但值得追踪：#9452（Responses 模型切换导致 session 不可用）、#8260（thoughtSignature 多 episode 丢弃，PR #8260 已合并修复）、#8169（OpenAI Responses API provider 已落地）。

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 内容摘要 |
|---|----|---------|
| [#11488](https://github.com/QwenLM/qwen-code/pull/11488) | **ACP 注册 daemon 会话到 session registry** —— 可被 `qwen sessions ps` 列出、按名寻址、可向其他 session `send_message` |
| [#11515](https://github.com/QwenLM/qwen-code/pull/11515) | **serve 默认支持 256 workspaces**（从 25 提升），新增 `QWEN_SERVE_MAX_WORKSPACES` 环境变量 |
| [#11516](https://github.com/QwenLM/qwen-code/pull/11516) | **autofix 自我 A/B 对抗 review** —— address-review 提交前先做一次有界 self-review |
| [#11447](https://github.com/QwenLM/qwen-code/pull/11447) | **Web Shell 浏览器通知增强** —— 携带 session 标题、prompt/回复摘要、点击定位到原 session |
| [#11387](https://github.com/QwenLM/qwen-code/pull/11387) | **DWS 完成响应重试** —— 持久化后异步推送，5 分钟指数退避，同 UUID 幂等 |
| [#11169](https://github.com/QwenLM/qwen-code/pull/11169) | **本地文件桥 trust-gate 与 bystander 修复** —— workspace 路由增加 "still resolving" 状态、补齐 4 个遗留 review 修复 |
| [#11360](https://github.com/QwenLM/qwen-code/pull/11360) | **Web Shell Goal 提案在所属 turn 结束后启动** —— Allow/Reject 面板的批准延后到自然边界执行 |
| [#11424](https://github.com/QwenLM/qwen-code/pull/11424) | **RUM sink 凭证脱敏** —— 所有日志经单点脱敏后再入队上传（复用 URL 脱敏逻辑） |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | **自动重试 transient EOF** —— 把被包裹的 4xx 网络错误归类为可重试 transport 错误 |
| [#11281](https://github.com/QwenLM/qwen-code/pull/11281) | **Daemon 本地枚举已安装扩展 Skills** —— 解决复制扩展 ID 冲突导致的 owner lookup 失败 |
| [#11506](https://github.com/QwenLM/qwen-code/pull/11506) | **LSP 文档与当前行为对齐** —— 更新配置、信任、超时、sandbox、诊断与文档同步 |

> 其他活跃工作：#10938（Session Workflow 可导航）、#11094（/compress E2E deflake）、#11001（PTY 清理等待）、#11134（macOS E2E 单次重试）、#9305（短内容底部对齐）。

---

## 📈 功能需求趋势

按热度归类，过去 24h 社区诉求集中在以下方向：

1. **🖥️ VS Code / IDE 集成深化** —— #11303、#11489、#11514、#9187、#11510、#11511 全部围绕 Companion 的稳定性与一致性。历史数据迁移（#11489）与 UI 扩展（#11514 加 Max thinking）是高频新诉求。
2. **🌐 Web Shell & Daemon 体验** —— #11465、#11453、#11100、#11142、#11385、#11447、#11262、#11281 等持续打磨：会话导航、渲染确定性、视觉防抖、通知增强、Skills 枚举。
3. **🔌 ACP / Subagent 多平台扩展** —— #11512（Windows）、#11513（mid-turn input）、#11488（session registry）是继 #11003 之后的延伸路线，主线是"外部可执行、跨平台、可被寻址"。
4. **🧠 模型与多 Provider 支持** —— #889（OpenAI Responses API）、#9452/9453/8258（模型切换的 reasoning 元数据/历史污染）、#11514（Max thinking）。
5. **🗄️ 大会话持久化与索引** —— #11433（SQLite 讨论）、#9452（切换模型后 session 不可用）指向同一类需求：会话历史/索引的工程化。
6. **🪟 Windows 兼容性** —— #11303、#11352、#11503、#11512 形成窗口平台"四件套"主题。

---

## 🧑‍💻 开发者关注点

- **P1 阻塞已集中在 Windows**：ConPTY 进程泄漏（#11303/#11352）、会话历史丢失（#11489）、TUI 静默崩溃（#11500）是当前最影响生产可用性的问题；维护者已在 #11313 修复 conout-worker 半边，但 conhost 半边被 `@lydell/node-pty` 上游 Pin 锁定，需评估 fork / 替换策略。
- **测试稳定性是隐性成本**：#11465（视觉 1.31% 像素抖动）、#11094（/compress E2E 评分抖动）、#11001（PTY 清理）、#11134（macOS E2E shard 死亡）都属同类问题，自动修复 bot 正在批量产出有界修复（带 `autofix/needs-human` 标签待评审）。
- **Provider / 模型切换的元数据隔离**是设计层短板：#9452、#9453、#8258 三条交叉，提示 `Part.thoughtSignature` 缺少 origin 标记是结构性问题，PR #8260 已落地历史 consolidation 修复，剩余的 session 维度仍待统一治理。
- **权限模型需要更细粒度**：#11405 反馈 deny pattern 表达过严导致模型放弃整类工具，反映配置语义需要在"模式拒绝"和"完全禁用"之间增加更明确的提示。
- **远程 / 多 workspace 是新需求曲线**：#11475 提议把 `qwen serve` 升级为支持远程主机工作区，#11515 已先把单机上限抬到 256，显示团队正在为远程开发形态铺路。
- **自我对抗 review 流程起步**：#11516 引入 A/B 测量的 bounded self-review，叠加 `autofix/takeover` 与 `autofix/needs-human` 标签的工作流，可以看到项目在把"代码修改→评审"流程工程化。

---

*日报基于 QwenLM/qwen-code 在 2026-09-09 ~ 2026-09-10 的 Issues / PRs / Releases 整理*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**📅 日期**：2026-09-10
**📊 数据源**：github.com/Hmbown/DeepSeek-TUI（实际活跃仓库已迁移至 `Hmbown/Codewhale`）
**📈 今日活跃度**：22 个 Issue 更新 + 2 个 PR 更新，无新版本发布

---

## 1️⃣ 今日速览

今日社区呈现"**架构治理 + 数据分析基建**"双主线：项目维护者（Hmbown）发起了一组围绕 **ClickHouse 分析层**的新议题（#6019–#6024），规划使用、成本、可靠性等遥测数据的入库与上报；同时 **EPIC-005 crate 拆分**与 v0.9.12 巨型文件拆解（lib.rs 18.7k）持续推进。此外，外部用户 **ronohara** 通报 DeepSeek 官方将于 **9 月 14 日北京时间 12:00 下线 V4 Pro**，流量将被切至 V4.1 Flash 计价——这是一个需要立即响应的供应链信号。

---

## 2️⃣ 版本发布

⛔ 过去 24 小时内无新 Release。建议关注仍在集成中的 **Codewhale 0.9.13**（PR #6002），预计将包含 provider 目录分页、OpenRouter 厂商选择、输出限额与定价校验等贡献者修复。

---

## 3️⃣ 社区热点 Issues（Top 10）

| # | Issue | 标题 | 为何重要 | 社区反应 |
|---|-------|------|---------|---------|
| 1 | [#6025](https://github.com/Hmbown/Codewhale/issues/6025) | ⚠️ **DeepSeek V4 Pro 将于 9/14 北京时间 12:00 下线** | 时间敏感的供应方变更，所有 Pro 请求将切到 V4.1 Flash 按 Flash 计价。需立即评估对模型路由和定价逻辑的影响 | 🔴 2 评论，新开 |
| 2 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005：CodeWhale TUI Crate 拆分（Umbrella）** | 架构级里程碑，统一管理 C03–C10 的执行顺序、所有权和依赖关系；Linear 是当前执行权威源 | 🟡 22 评论，0 👍，高活跃 |
| 3 | [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | **[v0.9.12] 拆解巨型文件**（lib.rs 18.7k / config.rs 12.3k / client.rs 11.1k / runtime_threads.rs 9.3k） | 直接关乎 0.9.12 版本质量，解决长期的可维护性债务 | 🟡 6 评论，关联 C09 |
| 4 | [#5976](https://github.com/Hmbown/Codewhale/issues/5976) | 🐛 **[bug] Concentrate 显示 cost=unknown，provider 计费覆盖不完整且无护栏** | 创始人现场报告的 bug，反映 cataloged provider 的定价元数据系统性缺失；可能影响其他 provider | 🟡 3 评论 |
| 5 | [#6019](https://github.com/Hmbown/Codewhale/issues/6019) | **新增 ClickHouse 用于模型使用、成本与可靠性报表** | 开启分析基建：**增量式**接入而非迁移，保留现有运行时 | 🆕 0 评论，新开 |
| 6 | [#6020–#6024](https://github.com/Hmbown/Codewhale/issues/6024) | **ClickHouse 分析簇（5 个关联议题）**：导出→schema/保留→认证报表→Postgres 复制方案选型→Langfuse vs 自建 trace | 一日内开 5 个相关议题，体现完整规划：稳定 ID + 重试去重、保留策略、组织级鉴权、可观测决策 | 🆕 全部 0 评论，新开 |
| 7 | [#6016](https://github.com/Hmbown/Codewhale/issues/6016) | 🐛 **恢复会话看不到/切换不到会话后新增的 provider/model** | 模型选择器隐藏非活跃自定义路由，C13 已接纳，需要先调和 picker/route-refresh 实现 | 🟡 2 评论 |
| 8 | [#6018](https://github.com/Hmbown/Codewhale/issues/6018) | 🐛 **[bug] 全新安装时 Google Gemini 不可用** | 影响 onboarding 体验的入门级阻塞；关联 C22 | 🟡 2 评论 |
| 9 | [#5479](https://github.com/Hmbown/Codewhale/issues/5479) | **[v0.9.12] Fleet/agents：TUI 一级子代理和工作流管理**（agents bottom view：实时列表、状态/计时/Token、聚焦、消息、停止、历史） | TUI 核心 UX 升级，关联 C01 | 🟡 1 评论，长期追踪 |
| 10 | [#6017](https://github.com/Hmbown/Codewhale/issues/6017) | **Codewhale 是否能支持跨会话的持久化记忆？** | 来自 MemCode CEO Vivek Gupta 的**外部集成提案**，看好作为可扩展终端编码代理的"记忆层" | 🟢 1 评论，合作机会 |

---

## 4️⃣ 重要 PR 进展

> ⚠️ 过去 24 小时仅有 2 个 PR 更新，全部列出：

### 🔧 [#6012 — fix(session): skip runtime handoffs when deriving the auto title](https://github.com/Hmbown/Codewhale/pull/6012)
**作者**：SparkofSpike
- **问题**：会话自动标题生成时，把内部 runtime 信封（如 `<codewhale:runtime_event kind="operate_contract" ...>`）当成 prompt 展示，污染标题
- **修复**：在标题派生时跳过 runtime-owned 控制流量（子代理交接、完成、压缩等）
- **意义**：提升 Chat 模板兼容性下的 UX 一致性

### 📦 [#6002 — Integrate Codewhale 0.9.13 contributor fixes and release verification](https://github.com/Hmbown/Codewhale/pull/6002)
**作者**：Hmbown
- **范围**：集成 0.9.13 贡献者工作，并修复测试组合 CLI / TUI / Runtime API / 捆绑 Computer Use 时发现的问题
- **关键修复**：provider 目录分页与精确路由、OpenRouter 厂商选择、输出限额与定价校验
- **状态**：集成型 PR，是 0.9.13 候选版本的关键合并点

---

## 5️⃣ 功能需求趋势

通过对 22 条活跃 Issue 的聚类分析，社区当前关注方向呈"**三横一纵**"格局：

### 📐 横向一：架构治理与模块化
- **Crate 拆分（EPIC-005）**：lib.rs/config.rs/client.rs/runtime_threads.rs 等巨型文件拆解（C03–C10）
- **统一 ModelRegistry 与 RouteResolver（C04，#4166）**
- **One worker system：废弃 Keychain 路径（C07，#5718）**

### 📊 横向二：分析基建与可观测性（新增）
- **ClickHouse 分析栈（#6019–#6024）**：覆盖导出、schema/保留、报表端点、复制方案、自研 vs Langfuse 选型
- **TUI 使用与工具诊断（#6011）**：按组件/模型的 token 计量、缓存命中率、按工具的 sink、压缩成本
- **Goal gates 独立验证（#6013）**：complete/blocked/needs_input/deferred/stalled 状态机

### 🖥️ 横向三：TUI 体验增强
- **Fleet/agents 一级管理（#5479）**
- **自适应 anti-stall + 更宽只读 shell 语法（#6015）**
- **Prompt 组装 + 角色层级（#5263，C06）**

### 🧠 纵向：模型/Provider 生态
- **DeepSeek V4 Pro 下线应对（#6025）**：路由/定价迁移
- **Ollama 实时目录默认值（#5848）**
- **Engine 与 App 统一从 live catalog 解析模型（#5849）**
- **Concentrate 等 provider 计费覆盖（#5976）**
- **外部集成意向**：MemCode 持久化记忆层（#6017）

---

## 6️⃣ 开发者关注点

### 🔥 高频痛点
1. **巨型文件维护性恶化**：单文件超过 18k 行（lib.rs），亟需 crate 化拆分
2. **Provider 计费/定价元数据缺口**：cataloged 但计费未知（如 Concentrate），缺少运行时护栏
3. **会话状态漂移**：恢复会话后看不到新加入的 provider/model，picker 实现需调和
4. **冷启动安装问题**：Google Gemini 在全新环境下报错，影响 onboarding
5. **Runtime 控制流量泄漏到 UX**：自动标题被 `<runtime_event>` 污染（已在 #6012 修复）

### 🛠️ 隐性需求
- **可观测性空白**：缺乏"哪个模型花了多少、跑多快、多常失败"的低成本查询路径——ClickHouse 议题簇正是补位
- **决策可追溯**：维护者倾向于把架构选型（Langfuse vs 自建、ClickPipes vs 自研）显式写为 issue 并附对比维度，形成 ADR-like 决策记录
- **执行权威单一化**：所有 Core 范围问题都回链到同一个 Linear 执行计划，避免分散决策

---

## 📎 元信息

- **日报生成时间**：2026-09-10
- **活跃 Issue 总数（更新）**：22
- **活跃 PR 总数（更新）**：2
- **新开 Issue**：6 个（#6019–#6024 集群 + #6025）
- **外部信号**：1 条供应方下线通知（DeepSeek V4 Pro）、1 条外部集成提案（MemCode）

> 💡 **行动建议**：项目方需在 9/14 前完成 DeepSeek V4 Pro → V4.1 Flash 的路由与定价切换验证；密切关注 PR #6002 的合并状态以推动 0.9.13 发版。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*