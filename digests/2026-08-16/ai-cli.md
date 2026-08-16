# AI CLI 工具社区动态日报 2026-08-16

> 生成时间: 2026-08-16 00:55 UTC | 覆盖工具: 9 个

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
**数据日期**：2026-08-16 ｜ **覆盖工具**：9 款主流 AI CLI

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"功能扩张期向稳健性期过渡"** 的关键阶段：所有主流工具都在同步推进多 Provider 适配、长上下文管理、Agent 编排三大主线，但社区反馈的重心已从"能不能用"转向"用得稳不稳"。**Windows 桌面端稳定性**、**MCP/Hooks 生态可靠性**、**跨会话记忆/压缩机制** 是横跨所有工具的共性痛点；同时，**第三方模型矩阵扩张**（gpt-5.6-sol、DeepSeek V4、Grok 4.6、Sonnet 5、Claude 5/Codex 系等）正以前所未有的速度撕裂原本相对封闭的模型绑定，使得 **Provider 适配能力** 与 **BYOK 成本治理** 成为新的分水岭。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | 今日 Release | 整体热度 |
|---|---|---|---|---|
| **Claude Code** | 50 | 3 | ❌ | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | 50（Top 30）| 21（Top 20）| ✅ 2 个 alpha | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | 50 | ~10 | ✅ 1 个 nightly | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 17 | 2 | ❌ | 🔥🔥🔥 |
| **Kimi Code CLI** | 4 | 2 | ❌ | 🔥🔥 |
| **OpenCode** | 50 | 10+ | ❌ | 🔥🔥🔥🔥 |
| **Pi** | 38 | 10+ | ❌ | 🔥🔥🔥 |
| **Qwen Code** | Top 10+ | Top 10+ | ✅ 2 个（含 nightly）| 🔥🔥🔥🔥 |
| **DeepSeek TUI** | 16 | 11 | ❌ | 🔥🔥🔥 |

**关键观察**：
- **Codex 唯一呈现"高 Issue + 高 PR + 高 Release"的健康三角**，工程节奏最稳；
- **Claude Code** 出现"高 Issue + 低 PR + 无 Release"的失衡，提示官方可能在内部分支消化变更（PR #84600/#82981 仅为社区脚本化提交）；
- **Kimi Code** 活跃度最低，但其 #1283 记忆系统单 Issue 已积累 40 评论，呈现"少而热"的长尾形态；
- **DeepSeek TUI** 虽体量小，但单日 11 个 PR 全为维护者直推，迭代密度极高。

---

## 三、共同关注的功能方向

### 3.1 跨会话记忆与上下文管理（5/9 工具关注）
| 工具 | 代表诉求 | Issue 编号 |
|---|---|---|
| Claude Code | claude.ai ↔ Claude Code 记忆互通、YAML 损坏 | #87028/#87027/#76868 |
| Kimi Code | 持久化跨会话记忆（本月最热）| #1283 |
| Gemini CLI | Auto Memory 死循环与脱敏三件套 | #26522/#26525/#26523 |
| Pi | 压缩时机/边界/错误暴露系列 | #6879/#8153/#8164 |
| OpenCode | 会话压缩失败导致无限循环 | #27924 |

**共识**：长程 Agent 工作流已成主流，但"上下文连续性"仍是普遍短板。

### 3.2 MCP / Hooks 生态可靠性（4/9 工具关注）
| 工具 | 代表诉求 | Issue 编号 |
|---|---|---|
| Claude Code | Hooks 2.1.210 回归、silent disable | #78527/#76297/#75081 |
| Codex | MCP tool 钩子支持、Hooks 引擎扩展 | #38705/#38707 |
| Copilot CLI | Atlassian MCP OAuth 连续两版回归、60s 硬超时 | #4480/#4490/#4421 |
| Gemini CLI | Browser Agent 不读 settings.json | #22267/#22093 |

**共识**：MCP 协议已进入"生产可用性"打磨期，鉴权/握手/超时/配置同步任一环节失稳都会被放大。

### 3.3 Windows / 桌面端稳定性（4/9 工具关注）
| 工具 | 代表诉求 |
|---|---|
| Claude Code | GPU 进程崩溃、MSIX 包损坏、Cowork 状态机（#80444/#85199/#73852）|
| Codex | 8/15 `26.810.*` 版本引发全系统卡顿、Crashpad 5GB/日 dump（#20214/#25921）|
| Copilot CLI | NixOS 崩溃、Codespaces 内置 1.0.3 需 sudo（#3392/#4501）|
| Pi | bash `taskkill /F` 杀进程、Terminal 快捷键冲突（#8170/#8183）|

**共识**：Windows 是当前体验最薄弱平台，**桌面客户端的资源生命周期管理**（空闲循环、IO 风暴、Crashpad 累积）已成系统性问题。

### 3.4 第三方 Provider 适配（4/9 工具关注）
| 工具 | 适配动作 |
|---|---|
| Pi | gpt-5.6-sol strict 兼容、Grok 4.6 Responses API 迁移、DeepSeek V4 思考档位 |
| OpenCode | grok-4.5 503 集中爆发、Deepseek 过度计费（#32911）、Poe 集成（#42818）|
| DeepSeek TUI | 第三方 Provider 预制模板（#5406）、自托管长上下文可配置上限（#5405）|
| Qwen Code | Kimi + Xiaomi MiMo 第三方接入（#8368）|

**共识**：模型矩阵快速扩张，但每加一个 Provider 都伴随新回归，**标准化适配层** 尚未建立。

### 3.5 TUI / 终端体验细节（5/9 工具关注）
Claude Code（滚动条 #62929、消息队列 #50246）、Copilot CLI（ACP contextTier #4275）、Pi（光标闪烁 #8003、滚轮步进 #7765）、OpenCode（Kitty OSC 8 #35649、headless 临时文件 #37671）、DeepSeek TUI（终端宽度 #5322）。

### 3.6 可观测性 / 健康检查（3/9 工具关注）
Codex（`/healthz` #38806、`codex doctor` #38795）、Copilot CLI（OTLP Protobuf #2934）、Qwen Code（CI runner self-heal #9220）。

### 3.7 订阅透明化与成本治理（3/9 工具关注）
Kimi Code（配额计量异常 #2604、quota-aware compaction #2603）、OpenCode（per-session budget #42823、Go Pro 档位 #24879）、Codex（Bedrock cache-write 成本 #37674）。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业级多 Connector、TUI 成熟度 | 跨国企业 / DevOps 团队 | Anthropic 全栈 + Hooks 安全审查 |
| **OpenAI Codex** | 基础设施完备（gRPC、doctor、resume）| 大型工程团队 / 平台集成方 | Rust CLI + TypeScript SDK + MCP |
| **Gemini CLI** | Subagent 行为治理 + 评估基础设施 | AI 研究 / 评测驱动型团队 | 多 Agent 框架 + 行为评估（76 测试）|
| **GitHub Copilot CLI** | GitHub 生态深度集成 + ACP 协议 | GitHub 平台原生用户 | Codespaces / Actions / GHE 一体化 |
| **Kimi Code** | 跨会话记忆优先 | 中文长周期项目开发者 | OpenAI 兼容 Provider 矩阵 |
| **OpenCode** | Provider 无关 + 沙箱化执行 | 多模型切换 / 企业沙箱 | Docker/Incus blueprint workspace |
| **Pi** | 压缩稳健性 + 协议适配广度 | 极客 / 多模型玩家 | 开放 Harness 重构（#8076）|
| **Qwen Code** | `/review` 子系统 + Web Shell | 国内中大型团队 | EAS 端到端基准 + E2E CI |
| **DeepSeek TUI** | 自托管长上下文 + 第三方模板 | 自托管 / 私有化部署 | bwrap 沙箱 + 64KiB 工具结果预算 |

**关键差异**：
- **闭源 vs 开源**：Claude Code、Codex 闭源驱动；Gemini/Copilot/Qwen/OpenCode/Pi 倾向开源协作
- **桌面 vs 纯 CLI**：Claude Code 与 Codex 在桌面端投入大，Kimi/Pi/OpenCode 坚守纯 CLI
- **模型绑定度**：Qwen Code 绑定 Qwen 系列；Kimi Code 绑定 Moonshot；其余普遍向多 Provider 演进

---

## 五、社区热度与成熟度评估

### 高活跃 + 高成熟（迭代健康）
- **Codex**：50 Issues + 21 PRs + 2 Releases，唯一在"使用反馈-工程响应-版本发布"形成完整闭环
- **Gemini CLI**：50 Issues + 大量评估基础设施 PR，呈现"评测驱动开发"特征

### 高活跃 + 中成熟（功能扩张期）
- **Claude Code**：需求广度领先（多账号、记忆、TUI、安全），但 PR 节奏偏慢，疑似内部消化
- **OpenCode**：v2.0 刚发布即密集出现 UI 回归，提示仍在快速迭代
- **Qwen Code**：E2E CI 持续存在失败告警（#9248/#9159），自动化回滚机制是亮点

### 中活跃 + 高成熟（运维期）
- **Copilot CLI**：17 Issues / 2 PRs，社区进入"反馈密集期"，但维护者聚焦回归修复
- **Pi**：38 Issues 中含大量"已 CLOSED"的稳定性收尾，配合 #8076 harness 重构

### 中低活跃 + 早期阶段
- **Kimi Code**：4 Issues 但 1 个已积累 40 评论，反映"少而热"，处于关键特性蓄势期
- **DeepSeek TUI**：16 Issues / 11 PRs，体积小但维护者驱动密度极高，是单兵作战的典型

---

## 六、值得关注的趋势信号

### 6.1 🔴 桌面客户端成为可靠性瓶颈
Claude Code、Codex、Copilot CLI 三大工具的桌面端在 24 小时内集中爆发稳定性问题（GPU 崩溃、鼠标冻结、Crashpad 膨胀、MSIX 损坏），且均为"已经使用一段时间后回归"。**信号**：Electron/Chromium 桌面端在 AI Agent 场景下的资源管理是行业级未解难题，开发者部署生产工具时应优先考虑 CLI/Headless 形态。

### 6.2 🟡 MCP 协议进入"生产可用性"打磨期
鉴权回归（OAuth）、握手超时、注册表权限、配置同步——4 款工具几乎同时报告类似问题。**信号**：MCP 已从"协议设计期"转入"生态治理期"，短期内的破坏性变更是常态；选型时需关注 MCP server 的重试/降级/超时配置可控性。

### 6.3 🟢 "无限增长型"故障成为新病灶
Crashpad dumps、subagent JSONL、图片复制、压缩日志、session 索引——长期运行场景下磁盘失控是普遍模式。**信号**：CLI 工具正在从"任务执行器"演化为"长驻服务"，**Retention、配额、doctor 自检** 将成为基础能力（Codex #38795、OpenCode #42823 已在响应）。

### 6.4 🔵 模型矩阵扩张倒逼"适配标准化"
gpt-5.6-sol 的 `strict: null` 行为、Grok 切到 Responses API、DeepSeek V4 思考档位、Claude Sonnet 5 缓存同步——每个新模型都伴随新回归。**信号**：**模型元数据同步机制**（Copilot #4494/#4495）+ **SDK 配置透传**（Codex #38817 raw config override）正在成为差异化能力，抽象层与多 Provider SDK 是潜在新赛道。

### 6.5 🟣 评估基础设施（Evals Infra）成为工程新基线
Gemini CLI 一次推进 3 个 eval PR（#28823/#28824/#28822），Codex 把 `/healthz`、trace context 透传做齐。**信号**：AI 工具的可信度不再依赖"主观体感"，而要靠 **行为评估 + 可观测性 + 链路追踪** 三件套来证明，**这是从"工具"走向"平台"的关键拐点**。

### 6.6 ⚪ 订阅制经济模型与用户信任博弈
Kimi Code 配额 3-5× 缩量无公告、OpenCode 强制订阅与"100% 免费"宣传冲突、Codex BYOK 缓存失效导致重复计费——付费墙的透明度正成为用户流失的引爆点。**信号**：**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-08-16*

---

## 1. 热门 Skills 排行

基于 Issues 中被反复引用、近期活跃度高、与核心痛点强相关的 PR 综合排序：

### 🔥 #1298 — skill-creator 评估管线全面修复
**作者**：MartinCajiao | **状态**：OPEN | **创建**：2026-06-10
修复 `run_eval.py` 始终返回 `recall=0%` 的问题（关联 Issue #556，已有 10+ 独立复现），同时修复 Windows 流读取、触发检测与并行 worker。**这是当前最关键的"基础设施型"PR**——直接关系到 skill description 的自动化优化闭环能否正常工作。
🔗 https://github.com/anthropics/skills/pull/1298

### 🔧 #1099 / #1050 — skill-creator 的 Windows 兼容性
- **#1099**（joshuawowk, 2026-05-07）：修复 Windows 下读取子进程管道崩溃
- **#1050**（gstreet-ops, 2026-04-27）：修复 Windows 下 `claude.cmd` 不可执行与编码 bug
两者均 1 行修复，使 skill-creator 在 Windows 上完全可用。
🔗 https://github.com/anthropics/skills/pull/1099 · https://github.com/anthropics/skills/pull/1050

### 📐 #514 — document-typography Skill
**作者**：PGTBoos | **状态**：OPEN | **创建**：2026-03-04
为 AI 生成文档提供排版质量控制：避免孤词断行（orphan）、寡行段落（widow）、编号错位。覆盖所有 Claude 生成文档的痛点，**质量提升类 Skill 的代表**。
🔗 https://github.com/anthropics/skills/pull/514

### 📄 #486 — ODT（OpenDocument）Skill
**作者**：GitHubNewbie0 | **状态**：OPEN | **创建**：2026-03-01
支持 ODT/ODS 创建、模板填充与 HTML 转换，**填补了开源/ISO 标准文档格式的空白**。
🔗 https://github.com/anthropics/skills/pull/486

### 🎨 #210 — frontend-design Skill 改进
**作者**：justinwetch | **状态**：OPEN | **创建**：2026-01-05
重写 frontend-design 的指令，使其更具体、可执行，避免空泛建议。**持续高热度，已多次迭代**。
🔗 https://github.com/anthropics/skills/pull/210

### 🛡️ #83 — skill-quality-analyzer & skill-security-analyzer
**作者**：eovidiu | **状态**：OPEN | **创建**：2025-11-06
两个元 Skill：从 5 维度评估 Skill 质量、提供安全分析。**与 #492 信任边界议题高度呼应**，反映社区对 Skill 治理工具的迫切需求。
🔗 https://github.com/anthropics/skills/pull/83

### 🔍 #1367 — self-audit（输出自审）Skill
**作者**：YuhaoLin2005 | **状态**：OPEN | **创建**：2026-06-28
对 AI 输出进行机械验证 + 四维推理质量审计，通用性强。配套 Issue #1385 提出"推理质量门"管线（Pre-task Calibration → Adversarial Review → Delivery Verification）。
🔗 https://github.com/anthropics/skills/pull/1367 · https://github.com/anthropics/skills/issues/1385

### 🧪 #723 — testing-patterns Skill
**作者**：4444J99 | **状态**：OPEN | **创建**：2026-03-22
覆盖 Testing Trophy 模型、单元测试、React 组件测试、契约/端到端测试全栈。**测试方法论系统化的代表 PR**。
🔗 https://github.com/anthropics/skills/pull/723

---

## 2. 社区需求趋势

从高评论 Issues 提炼的核心诉求方向：

| 方向 | 代表 Issue | 关键信号 |
|---|---|---|
| **🔒 信任边界与安全** | [#492](https://github.com/anthropics/skills/issues/492) (43 💬) | 社区 Skill 滥用 `anthropic/` 命名空间冒充官方，最受关注的安全议题 |
| **🏢 企业级共享** | [#228](https://github.com/anthropics/skills/issues/228) (16 💬, 8 👍) | Claude.ai 组织内 Skill 一键共享（替代手动下载/上传） |
| **🛠 skill-creator 工具链** | [#556](https://github.com/anthropics/skills/issues/556) (12 💬), [#1169](https://github.com/anthropics/skills/issues/1169), [#202](https://github.com/anthropics/skills/issues/202) | 评估/优化循环全线失效，是当前最大的功能性痛点 |
| **📦 插件去重** | [#189](https://github.com/anthropics/skills/issues/189) (6 💬, 9 👍) | `document-skills` 与 `example-skills` 重复安装，吃掉上下文 |
| **🧠 长期记忆/状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) (9 💬) | compact-memory：用符号化表示压缩 agent 持续记忆 |
| **🪟 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` Skill 单次注入 ~156k token 导致爆窗 |
| **🔌 MCP 化暴露** | [#16](https://github.com/anthropics/skills/issues/16) | Skill 应作为 MCP 暴露 API（关注度虽旧但方向性强） |
| **☁️ 多平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) | AWS Bedrock 上使用 Skills 的可行性 |
| **🏛 企业平台集成** | [#568 PR](https://github.com/anthropics/skills/pull/568) | ServiceNow 全模块 Skill（ITSM/ITOM/SecOps/HRSD…） |

**趋势关键词**：*Skill 可信度 → 企业化部署 → 工具链自举 → 长期 Agent 能力*。

---

## 3. 高潜力待合并 Skills

以下 PR 仍为 OPEN 状态，但社区讨论度高或功能完备，最有可能近期落地：

| PR | Skill | 亮点 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 全面修复 | 阻塞多个下游 PR，是 release blocker |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 兼容性 | 1 行修复，阻力极小，跨平台刚需 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) / [#541](https://github.com/anthropics/skills/pull/541) | 文件引用 / YAML / OOXML ID 修复 | Lubrsy706 的"问题修复三件套"，高稳定性 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 修复 template Skill 违反规范 | 仓库作为参考实现应自合规 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 直接响应社区 Issue #1417，方案定位清晰 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | 社区健康分从 25% 提升，门槛极低 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 已 4 次迭代，配合 #1385 管线提案 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 与 #492 安全议题同向，时机成熟 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"Skill 生态的自举与治理"**——既要解决 skill-creator 工具链自身失灵（评估/优化/Windows 兼容）的问题，又要建立 Skill 的信任边界、质量审计、命名空间规范和长期维护机制，从而支撑企业级、可复制、可持续演进的 Skill 生态。

---

*本报告基于 anthropics/skills 仓库公开数据，仅供参考。*

---

# Claude Code 社区动态日报

**日期**: 2026-08-16  
**数据来源**: [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日社区讨论最为活跃的议题集中在 **多账号/多 Connector 支持**（Issue #27302 单日评论超 200 条，累计 👍 346）与 **Windows 桌面应用稳定性**（GPU 进程崩溃、MSIX 安装包损坏等多起报告）。此外，**消息队列模式**（#50246）和**会话限制后的接续能力**（#13354）作为 TUI 体验改进的高呼声需求，持续位居热度榜首。值得注意的是，2.1.210 版本引入的 **Hooks 回归问题** 仍在被多个用户交叉验证，影响工作流稳定性。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。**

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#27302](https://github.com/anthropics/claude-code/issues/27302) — 支持同一 Connector 的多账号绑定
- **标签**: `enhancement` · **评论**: 229 · **👍**: 346（Top 1）
- **重要性**: 累计互动量遥遥领先，反映企业用户多账号管理（如同时维护 dev/staging/prod GitHub、Jira、Slack 等）的强需求。当前实现不支持同一 Connector 下切换不同账户，严重限制多团队场景使用。
- **社区反应**: 极高呼声，被标记为 FEATURE Request 并持续被官方置顶关注。

### 2. [#13354](https://github.com/anthropics/claude-code/issues/13354) — 会话限制后能否继续对话？
- **标签**: `enhancement`, `area:tui` · **评论**: 78 · **👍**: 197
- **重要性**: 触及付费用户核心痛点——达到 5h/周限额后只能中断工作流，无法继续当前任务上下文，对长周期开发任务影响显著。
- **社区反应**: 长期高关注 issue，多次更新引发新一轮讨论。

### 3. [#50246](https://github.com/anthropics/claude-code/issues/50246) — 消息队列模式（Message Queue Mode）
- **标签**: `enhancement`, `area:tui` · **评论**: 56 · **👍**: 197
- **重要性**: 当前 Claude 在执行任务时，发送新消息只能中断（Interrupt）当前任务。用户希望在不影响当前任务的前提下排队补充指令，提升多轮交互效率。
- **社区反应**: 与 #13354 共同构成 TUI 交互改进的双核心诉求。

### 4. [#80444](https://github.com/anthropics/claude-code/issues/80444) — Windows 桌面应用 GPU 进程致命崩溃（0x060C201E）
- **标签**: `bug`, `Windows` · **评论**: 34 · **👍**: 5
- **重要性**: Desktop app 1.24012.1 在应用内 Browser 标签触发 GPU 崩溃，导致 MSIX 包进入不可启动状态（`appxState=2`），必须手动 Repair。该问题跨多个 NVIDIA 驱动版本可复现。
- **社区反应**: 已被 #85199 等多个 issue 关联描述，构成 Windows 端严重稳定性问题。

### 5. [#85199](https://github.com/anthropics/claude-code/issues/85199) — Claude Desktop Windows 反复崩溃需 Repair
- **标签**: `bug` · **评论**: 23 · **👍**: 4
- **重要性**: 与 #80444 同源问题，描述更具体（多次崩溃需 Advanced Options → Repair），暗示桌面端 release 流程存在质量门禁缺失。

### 6. [#80094](https://github.com/anthropics/claude-code/issues/80094) — macOS filesystem MCP server 不可用
- **标签**: `bug` · **评论**: 6
- **重要性**: 两代 macOS 包都存在 filesystem MCP schema 派发异常，新 schema 从未下发、旧 schema 在注册时被丢弃，使该 MCP server 完全不可用，直接影响 MCP 生态。

### 7. [#78527](https://github.com/anthropics/claude-code/issues/78527) — v2.1.210 Hooks 回归：PreToolUse 拒绝逻辑错误
- **标签**: `bug`, `regression`, `area:hooks` · **评论**: 5 · **👍**: 1
- **重要性**: 升级到 2.1.210/2.1.211 后，`prompt` 类型 PreToolUse hook 返回 `{ok:false}` 不再按文档约定产生"工具错误"，而是直接终止整个 turn（`hook_stopped_continuation`），破坏 LLM 安全审查工作流。
- **社区反应**: 已有官方文档契约背书，社区呼吁紧急修复。

### 8. [#86362](https://github.com/anthropics/claude-code/issues/86362) — Browser pane 阻止本地开发域同源子资源
- **标签**: `bug` · **评论**: 5 · **👍**: 4
- **重要性**: Browser pane 对通过 `/etc/hosts` 映射到 127.0.0.1 的本地 dev 域名（如 `myapp.local`）触发 `ERR_BLOCKED_BY_CLIENT`，页面空白，严重影响 Claude Code Web 端调试体验。

### 9. [#62929](https://github.com/anthropics/claude-code/issues/62929) — TUI 增加可视滚动条
- **标签**: `enhancement`, `area:tui` · **评论**: 4 · **👍**: 7
- **重要性**: 新版 flicker-free 渲染下，TUI 失去了滚动条指示，用户无法直观看到滚动位置或内容长度，缺乏精细滚动控制。

### 10. [#73852](https://github.com/anthropics/claude-code/issues/73852) — Cowork: 向进行中会话添加文件夹失败
- **标签**: `bug`, `platform:windows`, `area:cowork` · **评论**: 4 · **👍**: 1
- **重要性**: 错误信息 "overlaps a protected host location" 误导用户——同一文件夹创建新 workspace 却能成功。问题根源在于已进行会话的状态机校验与新建会话不一致。

---

## 🔧 重要 PR 进展

### 1. [#84600](https://github.com/anthropics/claude-code/pull/84600) — 在项目作用域启用 frontend-design 插件 ✅ 已关闭
- 在 `.claude/settings.json` 中注册官方 marketplace 并启用 frontend-design skill，使仓库用户自动加载。

### 2. [#82981](https://github.com/anthropics/claude-code/pull/82981) — 自动化库存管理（用户脚本）
- 社区提交的自动化脚本 PR，描述为空，可能为用户机器人生成内容。

### 3. [#86870](https://github.com/anthropics/claude-code/pull/86870) — 修复授权安全研究中的误报 CVP 状态变更 🟢 Open
- 在 `security-guidance/hooks/review_api.py` 中加入上下文校验机制，新增 `is_authorized_lab()` 标识以识别授权研究场景，避免合法安全工作被误判为违规。

> ℹ️ **PR 数量稀少（3 条）**，且多为社区贡献或脚本化提交，官方主线开发节奏未通过 PR 体现——很可能与官方鼓励通过内部分支/IDE 集成分发更新有关。

---

## 📈 功能需求趋势

从 50 条更新 issue 中提炼，可清晰看到以下五大方向：

| 方向 | 代表 Issue | 关键诉求 |
|---|---|---|
| **多账号 / 多 Connector 体系** | #27302 | 企业场景下同一 Connector 切换不同账号、跨账号权限隔离 |
| **TUI 交互升级** | #13354, #50246, #62929 | 会话连续性、消息队列、可视滚动条、状态行（statusline） |
| **跨端同步与记忆系统** | #87028, #87027, #87023 | claude.ai ↔ Claude Code 记忆互通；账号级配置/自动记忆同步；多 Agent 下的记忆一致性 |
| **Windows 桌面体验** | #80444, #85199, #86999, #87024, #73852 | GPU/Electron 稳定性、MSIX 安装升级路径、原生安装 PATH 注入、Cowork 状态机 |
| **Hooks 与 MCP 生态** | #78527, #76297, #76156, #75081, #80094, #74567 | Hook 回归/重复执行/silent disable、Plugin skill override、MCP schema 派发、`dontAsk` 权限粒度 |

---

## 🧑‍💻 开发者关注点（高频痛点）

基于 issue 摘要与社区反馈，开发者当前最集中的不满与诉求可归纳为：

1. **🔁 Hooks 行为不稳定且文档与实现脱节**
   - 多个 issue（#78527、#76297、#75081）揭示 hooks 在 2.1.x 多次版本中出现回归、去重失败、silent disable 等问题，对依赖 hook 做安全/审计的团队是阻塞级故障。

2. **💾 记忆/上下文系统缺乏端到端连贯性**
   - claude.ai 与 Claude Code 记忆完全隔离、跨设备不同步、YAML frontmatter 写入会破坏数据（#76868），严重影响长期项目协作。

3. **🖥️ Windows 是当前体验最薄弱平台**
   - 桌面应用反复崩溃、GPU 进程资源耗尽（#83453：24h 写 346 GB 日志）、MSIX 包升级路径缺失、原生安装不会写入 PATH——Windows 用户需要绕过的"坑"显著多于 macOS/Linux 用户。

4. **⚙️ 权限系统粒度不足**
   - `--permission-mode dontAsk` 对 Write/Edit 的拒绝与文档不符，且无 headless 场景下可用的 scoped-write 选项（#74567），限制了无人值守 agent 部署。

5. **🔌 Plugin / Skill 配置与运行时不一致**
   - `skillOverrides` 对插件提供的 skill 被运行时硬编码忽略（#76156），`/skills` UI 显示的状态与实际行为不符，破坏配置可观测性。

6. **🤖 多 Agent 部署下的记忆隔离与扩展性问题**
   - #87023 的 field report 指出多 Agent 部署下跨会话记忆机制存在根本设计缺陷，是企业大规模使用的拦路虎。

---

**📊 数据概览**: 过去 24h · Issues 更新 50 / PR 更新 3 / 新 Release 0  
**🔗 仓库**: [github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-08-16

## 📌 今日速览

今日 Codex 社区最突出的信号是 **Windows 桌面客户端性能问题集中爆发**——8 月 15 日发布的 `26.810.*` 版本引发大量关于系统级卡顿、鼠标光标冻结、Crashpad 无限生成 dump 文件的反馈，多个高赞 Issue 集中在同一现象。同时 `rust-v0.148.0-alpha.19` / `0.148.0-alpha.20` 连续推进 CLI 侧的功能修复，PR 流以基础设施与可观测性优化为主。

---

## 🚀 版本发布

- **[rust-v0.148.0-alpha.20](https://github.com/openai/codex/releases)** — 0.148.0-alpha.20
- **[rust-v0.148.0-alpha.19](https://github.com/openai/codex/releases)** — 0.148.0-alpha.19

两份为 Rust CLI 端的连续 alpha 推送（Changelog 未给出详细条目，建议关注后续 release notes 与 PR 合并记录）。

---

## 🔥 社区热点 Issues

1. **[#20214 — Codex App 频繁卡顿/冻结（Windows 11 Pro）](https://github.com/openai/codex/issues/20214)** — 💬 104 · 👍 85  
   长期高赞 Issue。报告者使用顶配硬件（Ryzen 5 5600 + 32GB）仍持续出现卡顿。是 Windows 桌面体验最被关注的代表性反馈。

2. **[#38546 — Windows 下 ChatGPT/Codex 桌面端非提权运行时引发系统级鼠标卡顿](https://github.com/openai/codex/issues/38546)** — 💬 25 · 👍 11  
   指向权限提升缺失与驱动交互问题，与 #20214 / #38719 形成现象集群，建议关联追踪。

3. **[#38750 — Codex 空闲时仍导致 Windows 全系统卡顿](https://github.com/openai/codex/issues/38750)** — 💬 9  
   "无活跃任务也会卡"，与 #20214 同源，明确指向后台进程而非任务执行本身。

4. **[#38719 — 8 月 15 日更新后 ChatGPT.exe 空闲循环触发系统级光标卡顿](https://github.com/openai/codex/issues/38719)** — 💬 7  
   精确定位至 8/15 的版本回归，社区怀疑是主进程死循环 / 高频轮询。

5. **[#38518 — 打开/切换会话触发 350–800 MiB/s 读盘循环](https://github.com/openai/codex/issues/38518)** — 💬 6  
   极端 IO 风暴级别，强烈暗示 session 状态/索引层设计缺陷，需要排查。

6. **[#37372 — Windows Desktop UI 进程空闲持续 90–102% CPU](https://github.com/openai/codex/issues/37372)** — 💬 3 · 👍 1  
   与上一条同根：UI 线程空转。

7. **[#25921 — Crashpad pending dumps 无限制累积（每天 +5GB / 5 万文件）](https://github.com/openai/codex/issues/25921)** — 💬 17 · 👍 8  
   macOS 端本地存储被 Crashpad 静默吃满，CI 级别未拦截，是典型的"用户侧磁盘炸弹"。

8. **[#3550 — Codex 会话按 VS Code 工程/工作区隔离](https://github.com/openai/codex/issues/3550)** — 💬 34 · 👍 79  
   已 **CLOSED**，是 VS Code 集成呼声最高的增强。值得在日报中作为"已落地的用户诉求"标记。

9. **[#38760 / #38769 / #38771 — macOS Computer Use spawn 风暴 + WindowServer watchdog kernel panic](https://github.com/openai/codex/issues/38760)** — 💬 4  
   `SkyComputerUseService` 以 5–8 进程/秒不断 spawn，触发 launchservicesd 耗尽与 OOM。三条 Issue 指向同一 26.810.52044 版本，macOS 端的"Codex 重启门"事件。

10. **[#30779 / #35470 — Subagent JSONL 历史与图像反复复制导致磁盘膨胀（最高 400 GiB）](https://github.com/openai/codex/issues/35470)** — 💬 5 + 5  
    长期运行场景下 `~/.codex` 失控膨胀，需要 Retention / 限额机制。

> 另请关注：[#35746 分页历史丢失 rollout 记录](https://github.com/openai/codex/issues/35746)、[#18629 内联 base64 图片污染会话导致 400 错误](https://github.com/openai/codex/issues/18629)、[#38706 远程 compact 任务 404](https://github.com/openai/codex/issues/38706)。

---

## 🛠 重要 PR 进展

1. **[#38817 — TypeScript SDK 新增 raw config overrides](https://github.com/openai/codex/pull/38817)** ✅ Closed  
   提供 `CodexOptions.configOverrides`，允许以 `--config key=value` 形式透传无法结构化表达的 TOML（如带字面路径键的权限表），扩展 SDK 表达力。

2. **[#31817 — 更新 models.json](https://github.com/openai/codex/pull/31817)** 🟡 Open  
   由 github-actions 自动维护，仍在追踪阶段。

3. **[#38806 — code-mode gRPC listener 新增 `/healthz`](https://github.com/openai/codex/pull/38806)** ✅ Closed  
   仅暴露 HTTP 健康检查，其余路径仍强制 HTTP/2，gRPC 接口不被降级到 HTTP/1.1。配套 TCP listener 集成测试。

4. **[#38800 — 执行器策略审计改为 log-only telemetry](https://github.com/openai/codex/pull/38800)** ✅ Closed  
   网络代理策略决策从持久化状态日志迁出，避免审计事件污染业务日志。

5. **[#38795 — `codex doctor` 加入存储诊断](https://github.com/openai/codex/pull/38795)** ✅ Closed  
   报告 `CODEX_HOME` 与当前 worktree 可用空间：< 5 GiB 警告 / < 1 GiB 失败；Windows 额外检测 Dev Drive 可信性。直接呼应 #25921 / #30779 / #35470。

6. **[#38788 — TUI 启动时显示 resume / fork 状态](https://github.com/openai/codex/pull/38788)** ✅ Closed  
   在 composer 上方显示灰显的 `Resuming session…` / `Forking session…`，提升大会话启动体验。

7. **[#38785 — 保持当轮模型设置稳定，避免中途被覆盖](https://github.com/openai/codex/pull/38785)** ✅ Closed  
   解决"线程设置在轮次中途变更导致模型不一致"问题，新设置应用到下一轮。

8. **[#38774 — `codex exec` 持久线程使用分页历史](https://github.com/openai/codex/pull/38774)** ✅ Closed  
   与 #35746 同源修复：分页失败时回退 legacy 历史。

9. **[#38705 — Hooks 引擎新增 MCP tool handler 支持](https://github.com/openai/codex/pull/38705)** ✅ Closed  
   支持同步 `mcp_tool` 钩子调用，支持嵌套占位符与 JSON 类型保留，扩展 hooks 可编程面。

10. **[#31471 — ConnectorRuntimeManager 抽取（faster-connectors 1/4）](https://github.com/openai/codex/pull/31471)** 🟡 Open  
    由 `mzeng-openai` 推进，将 Codex Apps 工具缓存封装为不可变快照，按账户/工作区上下文隔离。为后续性能与多端体验打基础。

> 其他值得留意的合并：[#38767 workload identity 转发](https://github.com/openai/codex/pull/38767)、[#38701 走 Guardian 共享审批](https://github.com/openai/codex/pull/38701)、[#38682 misalignment_policy_violation 转为类型化错误](https://github.com/openai/codex/pull/38682)、[#38684 pending environment attachment](https://github.com/openai/codex/pull/38684)。

---

## 📈 功能需求趋势

1. **Windows 桌面稳定性（最高优先级）**  
   8 月 15 日 `26.810.*` 系列释放后，关于卡顿、鼠标冻结、UI 占用、空闲读盘的反馈几乎主导了今日新开 Issue。开发者强烈诉求是"先别加功能，先把 Windows 桌面修稳"。

2. **磁盘/会话存储可观测性**  
   Crashpad dumps、subagent JSONL、图像反复复制共同指向"长期运行的本地存储失控"。`codex doctor` 的存储诊断与 `Pending environment attachment` 是回应的开端。

3. **VS Code 工作区隔离**  
   `#3550` 长期高赞（79👍 / 34💬），已 CLOSED，反映社区对"项目级上下文"是默认期望而非高级特性。

4. **macOS Computer Use 稳健化**  
   `SkyComputerUseService` spawn 风暴 + WindowServer watchdog 触发 kernel panic 是 macOS 端的新热点，需要进程生命周期治理。

5. **CLI / TUI 体验打磨**  
   TUI 启动状态可见性（resume/fork）、CRLF 粘贴归一化、活跃轮次模型锁定等合并体现"交互细节"成为当前迭代重心。

6. **可观测性与策略治理**  
   `/healthz`、trace context 透传、policy audit 改为 log-only telemetry——基础设施质量正在被系统性补齐。

7. **Bedrock / 第三方托管平台成本**  
   `#37674` 反映 GPT-5.6 Sol 缺乏显式缓存控制导致 Bedrock 用户 cache-write 成本上升，跨平台代理链路的成本/性能治理需求显现。

---

## 🧑‍💻 开发者关注点

- **跨平台一致性缺失**：Windows 与 macOS 各自的"进程生命周期/空闲循环"问题暴露出桌面客户端在不同 OS 上的质量差异显著，macOS 用 launchservicesd/WindowServer，Windows 用 dxgkrnl/Job Object，需要更统一的"App lifecycle + 资源管控"机制。
- **"无限增长"型故障难复现也难调**：Crashpad、JSONL、图片复制这三类都表现为"一天几 GB"量级累积，需要默认的 retention 与配额。
- **会话历史是核心资产但缺乏一致语义**：分页 rollout 的扁平化、状态库与文件的索引一致性、远程 compact 的可用性，已经成为多个 PR/Issue 协同修复的主题（#35746 + #38774 是典型 pair）。
- **SDK 表达力**：TS SDK 增加 raw config override，源于"结构化 dotted-key 表达不了真实配置"——SDK 在被更广泛集成时，配置透传是高频痛点。
- **MCP / Hooks 编程模型扩张**：`mcp_tool` 钩子、Guardian 共享审批、`elicitation` 在 remote streamable HTTP 下的修复（#38707）显示 MCP 生态已进入"生产可用性"打磨期。
- **可观测性成为新基线**：从 `/healthz` 到 traceparent 透传，再到 doctor 子命令，开发者的关注点正从"功能能不能用"转向"线上能不能看清"。

---

*数据范围：openai/codex 仓库 2026-08-15 ~ 2026-08-16 24h 窗口。Issues 共 50 条（展示 Top 30），PRs 共 21 条（展示 Top 20）。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-16**

---

## 📌 今日速览

今日 v0.56.0 nightly 版本发布，社区活跃度集中在 **Agent / Subagent 行为稳定性** 与 **Auto Memory 系统** 两大方向；多个高优先级 Issue 反映出 Subagent 状态汇报失真、generalist agent 死锁等问题已进入复测阶段。同时，安全侧迎来重要更新：`web-fetch` SSRF 漏洞修复 与 Node 22 沙箱升级均已提交 PR。

---

## 🚀 版本发布

### v0.56.0-nightly.20260815.g2a87e7be1
- **变更**：将 `a2a-server` 测试中 `process.env` 迁移至 `vi.stubEnv`（[#28811](https://github.com/google-gemini/gemini-cli/pull/28811)）
- **完整对比**：[v0.56.0-nightly.20260814 → v0.56.0](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260814.gc0d192452...v0.56.0)

> 仅为 nightly 构建版本，PR 内容以测试迁移为主，未涉及功能级变更。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关键看点 |
|---|-------|------|----------|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent recovery after MAX_TURNS 报告为 GOAL success | 💬12 / 👍2 | P1 Bug。`codebase_investigator` 子代理在触达最大轮次后仍上报 `success`，掩盖了中断事实。已进入 need-retesting 阶段。 |
| 2 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent hangs | 💬8 / 👍8 | P1 高关注。一旦委派给 generalist agent 即无限挂起（如创建文件夹等简单任务），用户体验破坏性极强。👍 数高说明复现面广。 |
| 3 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** Zero-Dependency OS 沙箱 + 后执行意图路由 | 💬8 | P2 增强方案。主张利用 Gemini 3 模型原生 bash 习惯，通过零依赖 OS 沙箱在保障安全的同时释放模型潜能。讨论度高，方向具有架构意义。 |
| 4 | **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)** Robust component level evaluations | 💬7 | P1 EPIC。继 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 后推动「行为评估」体系，已覆盖 76 个测试 + 6 个 Gemini 模型。 |
| 5 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** AST-aware 文件读取/搜索/映射 | 💬7 | P2 EPIC。探索通过 AST 感知的工具降低读取噪声、减少错位轮次，可能配合 `codebase_investigator` 使用。 |
| 6 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini 几乎不主动使用 skills 和子代理 | 💬6 | P2 Bug。即使用户配置了 gradle、git 等 skill，模型也很少主动调用，实用性打折。 |
| 7 | **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** Auto Memory 低信号会话无限重试 | 💬5 | P2 Bug。Auto Memory 未读取的低信号会话会被反复召回，索引中存在死循环风险。 |
| 8 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令完成后卡在 "Waiting input" | 💬4 / 👍3 | P1 Bug。命令已执行完毕但 CLI 仍显示等待输入，影响最基础的本地开发体验。 |
| 9 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** browser_agent 锁会话恢复与接管 | 💬4 | P3 需求。`BrowserManager` 当前 fail-fast 策略过于严格，需要自动接管锁定的 browser profile。 |
| 10 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** browser 子代理在 Wayland 下失败 | 💬4 | P1 Bug。Wayland 环境下 browser 子代理异常终止，影响 Linux 桌面用户。 |

---

## 🛠️ 重要 PR 进展

| PR | 概要 | 状态 |
|----|------|------|
| [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) | **fix(core)**: 用户无 preview 模型权限时发出警告 | OPEN · P1 · 修复静默替换模型（[issue #28825](https://github.com/google-gemini/gemini-cli/issues/28825)） |
| [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) | **fix(core)**: 避免误判含 "401" 的字符串为鉴权错误 | OPEN · P2 · 仅在状态码位置识别 401，避免端口号、退出码误报（修复 [#28203](https://github.com/google-gemini/gemini-cli/issues/28203)） |
| [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) | **fix(security)**: 修复 web-fetch SSRF 漏洞（CVSS 8.6） | OPEN · P1 · 通过自定义域名指向私有 IP（169.254.169.254）绕过 DNS 防护，修复 [#28555](https://github.com/google-gemini/gemini-cli/issues/28555) |
| [#28726](https://github.com/google-gemini/gemini-cli/pull/28726) | **fix(security)**: 沙箱 Dockerfile 升级 node:20-slim → node:22-slim | OPEN · P1 · Node 20 进入 EOL，统一所有 caretaker-agent cloudrun 镜像（修复 [#28584](https://github.com/google-gemini/gemini-cli/issues/28584)） |
| [#28823](https://github.com/google-gemini/gemini-cli/pull/28823) | **evals**: 新增任务图依赖/可视化/错误恢复行为评估 | OPEN · XL · 覆盖 `tracker_add_dependency`、`tracker_visualize`、文件 404 重试、Shell 失败重试 |
| [#28824](https://github.com/google-gemini/gemini-cli/pull/28824) | **evals**: 多工具链 / 大文件 / 安全边界行为评估 | OPEN · L · 新增 `multi_tool_chain.eval.ts`，强化敏感文件保护断言 |
| [#28822](https://github.com/google-gemini/gemini-cli/pull/28822) | **evals**: write_todos / complete_task / tracker 行为评估 | OPEN · XL · 三组针对任务规划与跟踪器的断言测试 |
| [#28679](https://github.com/google-gemini/gemini-cli/pull/28679) | **fix(auth)**: Vertex AI 标准 API key 配置下的 401 错误信息优化 | OPEN · P2 · 改善仅使用 Gemini API key 而非 Google Cloud 凭证时的开发者体验 |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | **fix(core)**: preview 模型 404 时回退到稳定模型 | CLOSED · P1 · 修复 [#28600](https://github.com/google-gemini/gemini-cli/issues/28600)；USE_GEMINI 鉴权路径下不再假设一定有 preview 权限 |
| [#28769](https://github.com/google-gemini/gemini-cli/pull/28769) | **chore**: `.opencode` 加入 `.gitignore` | OPEN · XS · 防止 OpenCode IDE 配置目录污染仓库 |

---

## 📈 功能需求趋势

从 50 条更新 Issue 中提炼的社区关注方向：

1. **🧠 Agent / Subagent 行为治理（最高频）** —— 几乎半数 Issue 涉及 Subagent，包括自动调用率低、状态汇报失真、设置覆盖不生效、Wayland 兼容性等。`generalist agent`、`codebase_investigator`、`browser_agent` 是焦点。
2. **💾 Auto Memory 系统重构** —— SandyTao520 提出的 [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523) 形成「重试 / 脱敏 / 隔离」三件套，指向后台提取代理的鲁棒性升级。
3. **🔬 评估基础设施（evals infra）** —— [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 提出的 Component-Level Evals 已成为新的工程重心，今日 3 个相关 PR 同时推进。
4. **🛡️ 安全与沙箱** —— SSRF（web-fetch）、Node 版本、Auto Memory 脱敏、阻止破坏性命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）构成近期主线。
5. **🧰 模型可用性与回退策略** —— preview 模型鉴权、404 回退、Vertex AI 401 信息等多 PR 围绕「模型请求失败时的可见性」展开。
6. **🌳 AST-aware 与符号级工具** —— `tilth`、`glyph` 等工具评估进入调研阶段，可能影响 `codebase_investigator` 路径。
7. **📺 终端渲染性能** —— [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) Ink `RenderStatic` 迁移、Resize 闪烁仍待解决。

---

## 🧑‍💻 开发者关注点与高频痛点

| 痛点 | 代表 Issue |
|------|-----------|
| **Subagent 不会主动调用** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 即使配了 gradle/git skill，模型也很少调用，影响 skills 体系价值 |
| **Agent 委派即挂起** | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — generalist agent 在简单任务上无限等待 |
| **Subagent 状态不可见** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763) — 中断被报为 GOAL 成功；`/bug` 不含子代理上下文 |
| **本地 Shell 交互卡死** | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — 简单命令后 UI 仍显示 "Awaiting user input" |
| **Preview 模型静默替换** | [#28825](https://github.com/google-gemini/gemini-cli/issues/28825) / [#28600](https://github.com/google-gemini/gemini-cli/issues/28600) — 无权限时悄悄改写为 auto-gemini-2.5，无任何提示 |
| **Auto Memory 死循环与脱敏** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — 后台代理可能反复处理低信号会话，敏感内容已进入模型上下文 |
| **浏览器子代理 Wayland 失效** | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Linux 桌面用户受影响 |
| **权限配置被忽略** | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — Browser Agent 不读 `settings.json`；v0.33.0 后子代理默认开启绕过配置 |
| **破坏性命令缺少护栏** | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — `git reset --force` 等需引入风险识别 |
| **临时脚本污染工作区** | [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) — 模型在随机位置生成临时脚本，清理成本高 |

---

*日报基于 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 仓库过去 24 小时数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-16**

---

## 📌 今日速览

过去 24 小时 **无新版本发布**，但社区讨论热度集中在 **1.0.79 / 1.0.80 版本带来的 MCP 生态回归问题** —— Atlassian MCP OAuth 认证失败（#4480、#4490）和 Actions 环境下的 MCP 注册表权限问题（#4346）成为焦点。同时，**MCP 初始化 60 秒硬超时无重试**（#4421）和 **Autopilot 模式下 V8 堆 OOM 崩溃**（#4499）等可靠性议题获得较多关注。整体趋势显示，社区对 **MCP 协议稳定性、模型元数据同步、跨平台兼容性** 的诉求最为强烈。

---

## 🚀 版本发布

今日无新版本发布。最近一次相关版本（1.0.79 / 1.0.80）的多项问题反馈仍在持续涌入，建议关注以下修复进展。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#3392](https://github.com/github/copilot-cli/issues/3392) Bash 工具在 NixOS 上 1.0.49+ 版本崩溃
- **标签**：`platform-linux` / `tools`
- **状态**：OPEN ｜ 👍 9 ｜ 💬 4
- **重要性**：影响所有 NixOS 用户执行任意命令，属于**核心功能不可用**级别问题。社区反响最高，strace 已定位到具体系统调用层面的失败原因。

### 2. [#4480](https://github.com/github/copilot-cli/issues/4480) Atlassian MCP OAuth 在 1.0.79 失败（RFC 8414 §3.3 回归）
- **标签**：`authentication` / `mcp`
- **状态**：CLOSED ｜ 👍 6 ｜ 💬 4
- **重要性**：明确的版本回归（1.0.78 工作正常），影响所有 Atlassian 远程 MCP 集成用户。虽已关闭，但衍生出新的 1.0.80 版本同类问题。

### 3. [#4490](https://github.com/github/copilot-cli/issues/4490) Atlassian MCP OAuth 在 1.0.80 再次回归
- **标签**：`authentication` / `mcp`
- **状态**：OPEN
- **重要性**：`#4480` 的"续集"——表明 OAuth 校验修复不彻底。同样的 RFC 8414 §3.3 报错再次出现，说明 MCP 鉴权链路稳定性需要重点审视。

### 4. [#2934](https://github.com/github/copilot-cli/issues/2934) 支持 Protobuf OTLP 导出（OTEL_EXPORTER_OTLP_PROTOCOL=http/protobuf）
- **标签**：`configuration`
- **状态**：CLOSED ｜ 👍 6
- **重要性**：OpenTelemetry 标准协议支持，企业级可观测性集成必备。原有 JSON 格式效率低下，Protobuf 支持是生产环境落地的硬需求。

### 5. [#4346](https://github.com/github/copilot-cli/issues/4346) Actions 中 GITHUB_TOKEN 拉取 MCP 注册表返回 403
- **标签**：`authentication` / `non-interactive` / `mcp`
- **状态**：CLOSED ｜ 👍 3
- **重要性**：阻塞 CI/CD 场景下使用**非默认** MCP 服务器，等于让无 PAT 自动化方案仅支持最小子集，对 CI 工作流影响重大。

### 6. [#4275](https://github.com/github/copilot-cli/issues/4275) ACP 暴露 contextTier 作为会话配置选项
- **标签**：`non-interactive` / `configuration`
- **状态**：OPEN
- **重要性**：交互式 `/model` 已支持运行时切换上下文窗口档位，但 ACP（非交互协议）客户端只能启动时设置，存在功能不对称。

### 7. [#4421](https://github.com/github/copilot-cli/issues/4421) MCP initialize 握手硬编码 60 秒且无重试
- **标签**：`mcp`
- **状态**：OPEN
- **重要性**：npx 启动的 stdio MCP 服务器 ~29% 会话失败且**永不重试**，对一次会话内的可靠性是致命缺陷。

### 8. [#4499](https://github.com/github/copilot-cli/issues/4499) v1.0.79 Autopilot OOM（V8 仅用 0.6/4.3 GB 即崩溃）
- **标签**：`non-interactive` / `platform-windows`
- **状态**：OPEN
- **重要性**：`Committing semi space failed` 发生在 V8 远未触顶时，指向**宿主内存提交失败**而非堆上限，Windows 长会话自动化场景下的可靠性风险。

### 9. [#4500](https://github.com/github/copilot-cli/issues/4500) BYOK Autopilot 重新序列化历史消息破坏 prompt 缓存
- **标签**：`non-interactive` / `models`
- **状态**：OPEN
- **重要性**：相同 tool call 在两次请求中字节不一致，导致 BYOK 路径下的**提示缓存失效**，直接影响成本与延迟，对重度 BYOK 用户影响显著。

### 10. [#4501](https://github.com/github/copilot-cli/issues/4501) Codespaces 内置 CLI 1.0.3 且 `copilot update` 必须 sudo
- **标签**：`platform-linux` / `installation`
- **状态**：OPEN
- **重要性**：全新 Codespace 安装的 CLI 与主版本相差近一年，而升级流程对非 root 用户不友好，Cloud 用户的"开箱即用"体验受损。

---

## 🛠️ 重要 PR 进展

过去 24 小时仅 2 个 PR 活跃，**单从数量看提交量偏低**，但两者均涉及安全与可维护性关键路径：

### 1. [#4497](https://github.com/github/copilot-cli/pull/4497) 处理 fork PR 在 invalid-label 写入器中的关联
- **状态**：OPEN
- **要点**：当 GitHub 未填充 fork PR 的 workflow run 关联时，写入器改为基于可信 workflow-run 元数据搜索，且要求**恰好一个**打开的 PR 才会执行失效标签写入。属于安全收紧，避免误关无关 PR。

### 2. [#4449](https://github.com/github/copilot-cli/pull/4449) 迁移 PR 自动化离开 `pull_request_target`
- **状态**：CLOSED
- **要点**：拆分 token 权限范围——issue 关闭用 issue-scoped 写 token；mergeable PR 用无权限 `pull_request` 信号触发提示；特权操作集中在受信任工作流中。降低 PR 自动化供应链攻击面。

> 📉 **PR 总数偏少**：可能反映近期维护者聚焦在 1.0.79/1.0.80 回归修复上，未对外暴露大规模新特性开发。

---

## 📈 功能需求趋势

从近期 Issue 分布看，社区诉求呈现以下清晰方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **MCP 生态稳定性** | #4480、#4490、#4346、#4421 | ⭐⭐⭐⭐⭐ 最高，OAuth + 注册表 + 握手超时三连击 |
| **新模型支持与缓存效率** | #4494 (Sonnet 5 缓存)、#4495 (GPT-5.6 reasoning.mode)、#4500 (BYOK 缓存) | ⭐⭐⭐⭐ 高，模型迭代速度要求 CLI 元数据快速同步 |
| **跨平台/容器兼容性** | #3392 (NixOS)、#4501 (Codespaces) | ⭐⭐⭐ 中高，阻碍 Linux 生态渗透 |
| **会话/Agent 管理 UX** | #4502 (撤销归档)、#4491 (`/spawn` 模板矛盾)、#4493 (`/restart` + `-w` 冲突) | ⭐⭐⭐ 中，长会话工作流痛点集中 |
| **可观测性** | #2934 (OTLP protobuf) | ⭐⭐ 中，企业落地刚需 |
| **Agent 子任务模型控制** | #3565 (Task 工具静默降级)、#4275 (ACP contextTier) | ⭐⭐ 中，自定义代理可控性 |

**关键洞察**：
- **MCP 已成 CLI 核心**——稳定性、鉴权、超时、重试任一环节都会放大为社区议题。
- **模型元数据同步机制**明显滞后于后端发布节奏（如 Sonnet 5、GPT-5.6），缓存/状态清除策略需要更主动。
- **BYOK 用户**开始深度关注提示缓存语义正确性，这是新兴的高价值需求方向。

---

## 💬 开发者关注点（痛点汇总）

1. **版本回归破坏 MCP 集成**：连续两版（1.0.79 → 1.0.80）均出现 Atlassian OAuth 校验报错，开发者难以安心升级。
2. **CI 自动化路径被掐断**：Actions GITHUB_TOKEN 拉 MCP 注册表 403，迫使 CI 用户回退到 PAT 方案或只能用默认 MCP。
3. **npx-stdio MCP 启动脆弱**：60 秒硬超时 + 一次性判定，npx 冷启动慢的 MCP 服务器直接被判"死亡"且无救济路径。
4. **会话恢复链路缺陷**：`/restart` 与 `-w` 选项冲突、`/spawn` 模板自相矛盾、归档无撤销——长会话/多代理工作流可用性欠佳。
5. **新模型同步滞后**：后端开启的模型在本地 CLI/VS Code 不可见，开发者不得不手动清缓存。
6. **BYOK 成本不可控**：Autopilot 重序列化历史消息破坏缓存，BYOK 用户在不知不觉中重复计费。
7. **跨平台/容器体验差**：NixOS bash 工具崩溃、Codespaces 内置版本陈旧且升级需 sudo，云开发场景摩擦高。
8. **Agent 子代理模型被静默降级**（#3565）：自定义代理声明的模型被强制替换为父会话模型，且无任何提示，破坏 Agent 可控性预期。

---

**日报小结**：本期 Issue 数量（17）活跃度高于 PR 数量（2），说明社区进入"使用反馈密集期"而新功能开发节奏偏慢。维护团队建议优先处理 **MCP OAuth 回归（#4490）** 与 **Autopilot OOM（#4499）** 这两类影响主流程稳定性的高优先级项。

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-08-16
**数据来源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 今日速览

今日社区活跃度中等，主要围绕**长期记忆系统**（#1283）这一高频讨论议题持续发酵（累计评论达 40 条），同时新增两条关于**订阅配额与上下文压缩策略**的反馈（#2604、#2603）。代码侧有两条小型修复 PR 合并/在审，重点是 `StrReplaceFile` 工具的替换计数准确性（#2524）和 JSON Schema 循环引用的错误处理（#2506）。过去 24 小时内**无新版本发布**。

---

## 版本发布

⚠️ 过去 24 小时内无新版本发布。最新版本信息请关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases)。

---

## 社区热点 Issues

> 提示：过去 24 小时内活跃更新的 Issue 共 **4 条**，以下按关注度排序完整列出。

### 1. [#1283 【Feature Request】Memory System — Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **作者**：CatKang | **状态**：OPEN | **评论**：40 条 | **更新**：2026-08-15
- **重要性**：⭐⭐⭐⭐⭐（本月最热议题）
- **核心诉求**：实现跨会话持久化记忆，包括 AI 自动记录的项目模式/上下文，以及用户通过配置文件定义的自定义指令。
- **社区反应**：评论数已达 40 条，说明这是长期高需求功能，反映出开发者在长周期项目中希望 Kimi 能"记住"项目惯例、用户偏好和过往决策的强烈痛点。

### 2. [#2604 Effective weekly allowance appears reduced ~3–5× without announcement](https://github.com/MoonshotAI/kimi-cli/issues/2604)
- **作者**：tobiu | **状态**：OPEN | **评论**：2 条
- **核心诉求**：Vivace 订阅用户通过自建 JSONL 监控脚本发现周配额实际可用量下降 3–5 倍，质疑是套餐变更还是计量回归。
- **重要性**：⭐⭐⭐⭐
- **社区反应**：付费用户对配额变化的透明度高度敏感，作者附带了详细的每日 token 计量数据，具备较强说服力，可能引发其他订阅用户共鸣。

### 3. [#2603 Quota-aware compaction — 基于 token 预算触发上下文压缩](https://github.com/MoonshotAI/kimi-cli/issues/2603)
- **作者**：salim4n | **状态**：OPEN | **评论**：0 条
- **核心诉求**：当前仅在接近模型最大上下文窗口（如 K3 的 1M）时才触发压缩，但实际上大多数 agentic 会话永远不会触及。提议基于订阅配额的 token 预算阈值触发压缩。
- **重要性**：⭐⭐⭐⭐
- **技术亮点**：该方案将"配额管理"与"上下文管理"打通，对订阅用户和重度使用场景意义重大。

### 4. [#1155 【CLOSED】openai_legacy provider drops reasoning content → APIEmptyResponseError](https://github.com/MoonshotAI/kimi-cli/issues/1155)
- **作者**：rongou | **状态**：CLOSED | **评论**：0 条
- **核心内容**：使用 sglang/vllm 等 OpenAI 兼容服务时，`reasoning_key` 未传递给 `OpenAILegacy` 构造函数导致推理内容被丢弃。**该 Issue 已关闭**，暗示已有修复方案在跟进。

---

## 重要 PR 进展

> 过去 24 小时内活跃更新的 PR 共 **2 条**。

### 1. [#2524 【OPEN】fix(tools): 修复 StrReplaceFile 链式替换计数错误](https://github.com/MoonshotAI/kimi-cli/pull/2524)
- **作者**：Sreekant13 | **状态**：OPEN
- **修复内容**：`StrReplaceFile` 工具按顺序应用编辑时，原先的替换计数是基于**原始文件内容**统计的，导致链式编辑（后续 `old` 由前一次编辑产生）的替换数被误报为 0。
- **影响**：提升文件编辑工具的可靠性，避免误报带来的调试困扰。

### 2. [#2506 【CLOSED】fix(kosong): 修复 deref_json_schema 中循环 $ref 的错误处理](https://github.com/MoonshotAI/kimi-cli/pull/2506)
- **作者**：Sreekant13 | **状态**：CLOSED ✅
- **修复内容**：`kosong.utils.jsonschema.deref_json_schema` 在内联本地 `$ref` 时若遇到循环引用会无限递归或产生混乱输出，现已抛出清晰错误。
- **影响**：增强 JSON Schema 处理在边界场景下的稳定性，避免潜在的栈溢出。

---

## 功能需求趋势

基于过去 24 小时的 Issues 活跃情况，结合社区长期讨论脉络，可以提炼出以下核心趋势：

| 趋势方向 | 代表议题 | 社区热度 |
|---------|---------|---------|
| 🧠 **跨会话持久记忆** | #1283 | 🔥🔥🔥🔥🔥（40+ 评论） |
| 💰 **订阅透明度与配额管理** | #2604、#2603 | 🔥🔥🔥🔥 |
| 🔌 **Provider 兼容性（OpenAI/第三方）** | #1155（已修） | 🔥🔥🔥 |
| 📉 **上下文压缩策略智能化** | #2603 | 🔥🔥🔥 |

**总体观察**：
1. **"长程代理"需求上升**：开发者在长会话、多会话协作场景下，对记忆与上下文管理的需求日益突出；
2. **订阅制经济模型受关注**：用户开始量化自身 token 使用情况，对配额变化的敏感度提升，催生配额感知型功能诉求；
3. **第三方/本地化部署需求**：通过 OpenAI 兼容服务运行 Kimi 的用户群体在增长，provider 兼容性问题值得持续投入。

---

## 开发者关注点

综合今日 Issues 与 PR 反馈，开发者社区的**高频痛点与需求**可归纳如下：

### 🔴 主要痛点
1. **缺乏跨会话上下文**（#1283）—— 项目惯例、用户偏好、过往决策无法在多次启动间延续，每次会话都需要"重新介绍"项目。
2. **配额不透明 / 计量异常**（#2604）—— 付费用户希望有更明确的用量展示与变更公告机制。
3. **压缩策略不智能**（#2603）—— 长会话中上下文浪费严重，但默认策略几乎不会触发压缩。

### 🟡 高频改进诉求
- **文件操作可靠性**：StrReplaceFile 链式编辑的计数准确性问题（#2524）；
- **错误处理鲁棒性**：JSON Schema 等工具库在边界场景下的优雅失败（#2506）；
- **第三方 API 兼容**：推理内容字段透传（#1155，已修复）。

### 🟢 积极信号
- 维护者对工具层的快速响应（#1155 关闭、#2506 合并）说明项目对开发者体验的持续投入；
- Issue #1283 长期保持高互动，说明社区对 Kimi CLI 长期愿景有较强认同。

---

*日报生成时间：2026-08-16 ｜ 数据周期：过去 24 小时｜ 数据源：GitHub API*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-16

## 今日速览

今日 OpenCode 仓库无新版本发布，但社区活跃度极高：**grok-4.5 模型在 OpenCode Go/Zen 渠道的稳定性问题**成为当天最集中的吐槽点，多个相关 Issue 同时被关闭或更新；同时 v2.0 CLI/TUI 的若干回归问题（如 headless 进程泄露、`OpenTUI.so` 临时文件残留、子代理行不可点击）正在被密集修复。值得关注的是，会话**预算上限**、Docker/Incus **沙箱工作区**等企业级特性已进入 PR 阶段，预示产品正向 "可控、可观测" 方向演进。

---

## 版本发布

> 过去 24 小时内无新 Release。最新版本仍为 v1.18.18。

---

## 社区热点 Issues

| # | Issue | 重要性 |
|---|-------|--------|
| [#37790](https://github.com/anomalyco/opencode/issues/37790) | **Go 订阅付款成功但余额仍显示 "Insufficient balance"**（14 评论） | 涉及 Stripe 支付链路与工作区余额同步失败的 **资金类高危问题**，已更新至 2026-08-15，影响已付费用户的核心使用体验。 |
| [#24879](https://github.com/anomalyco/opencode/issues/24879) | **Go Pro 档位（$20）& 首月优惠提案**（11 评论 / 11 👍） | 社区长期诉求的预算可控付费层级，👍 数与评论数双高，反映用户对 "固定预算替代按量计费" 的强烈需求。 |
| [#42143](https://github.com/anomalyco/opencode/issues/42143) | **官网宣称 100% 免费为何强制订阅**（10 评论） | 涉及产品对外宣传一致性，已升级为舆情风险点，回应不力可能引发更多退订投诉。 |
| [#7801](https://github.com/anomalyco/opencode/issues/7801) | **Plan Mode 自动切换到 Build Mode**（10 评论 / 31 👍） | 👍 数全榜最高，老牌高需求 Feature，体现 "LLM 自动判断意图" 的方向仍是社区共识。 |
| [#40206](https://github.com/anomalyco/opencode/issues/40206) | **grok-4.5 自 8 月 2 日起在 OpenCode Go 失效**（9 评论 / ✅ 已关闭） | 已关闭，但同类 #42802、#40886 仍在，说明 **grok-4.5 服务侧故障属于集中性事件**，并非个案。 |
| [#27924](https://github.com/anomalyco/opencode/issues/27924) | **会话压缩失败导致无限 compaction 循环**（8 评论） | 严重稳定性/性能 Bug，会卡死 session，触及 `prompt.ts` 核心逻辑，技术价值高。 |
| [#35649](https://github.com/anomalyco/opencode/issues/35649) | **Kitty 终端换行后链接不可点击**（5 评论） | TUI 渲染细节，影响 kitty+OSC 8 超链接生态用户，配合 #42805 形成同源议题簇。 |
| [#42799](https://github.com/anomalyco/opencode/issues/42799) | **OpenCode 服务端整体异常（workspace 500 / DB 资源耗尽）**（2 评论） | 官方服务可用性问题，`ResourceExhausted: transaction pool connection limit exceeded` 暴露后端数据库连接池瓶颈。 |
| [#32911](https://github.com/anomalyco/opencode/issues/32911) | **Deepseek API 在 1.17+ 版本中过度消耗 Token**（3 评论） | 第三方验证过的 **资损型 Bug**，用户实际被超额扣费，优先级应被提升。 |
| [#32787](https://github.com/anomalyco/opencode/issues/32787) | **Agent permission.rules 配置在运行时未生效**（2 评论） | 安全相关，"声明权限却没生效" 直接削弱 `permission.ask` 的用户信任。 |

---

## 重要 PR 进展

| PR | 内容 |
|----|------|
| [#42811](https://github.com/anomalyco/opencode/pull/42811) | **feat(session): 增加 viewed 状态**（@kitlangton） 把会话的"已读/未读"从 TUI 本地上移到 Session 域对象，解决多客户端状态不一致（参考上方摘要示例）。贡献者级别的关键 UX 改造。 |
| [#42836](https://github.com/anomalyco/opencode/pull/42836) | **fix(acp): ACP 新会话使用默认 Agent 而非全局默认模型** 修复 `session/new` 调用 `selectDefaultModel(snapshot)` 时忽略 agent 级 model 配置的问题，关 [#42835](https://github.com/anomalyco/opencode/issues/42835)。 |
| [#42833](https://github.com/anomalyco/opencode/pull/42833) | **fix(session-ui): 移动端 reasoning-effort 下拉与发送按钮重叠** 修复 320–390px 视口下 v2 prompt 输入区的布局 Bug，关 [#42834](https://github.com/anomalyco/opencode/issues/42834)。 |
| [#42823](https://github.com/anomalyco/opencode/pull/42823) | **feat(opencode): 增加每会话预算上限**（[已关闭]） DB schema 新增 `budget` 字段，`PATCH /session/:id` 支持动态设置与清空，会话总开销达阈值自动停止——这是 #24879 的工程化落地。 |
| [#42824](https://github.com/anomalyco/opencode/pull/42824) | **feat(app): 新增语音输入 & 会话预算 UI**（[已关闭]） 麦克风按钮 + 预算面板，基于现有 `getSpeechRecognitionCtor` 适配器，多端可用。 |
| [#42831](https://github.com/anomalyco/opencode/pull/42831) | **feat(core): Docker 蓝图工作区** 引入不可变快照式本地容器 provider，SDK Next 暴露 `workspace.fork`，子代理可被派生到隔离容器，空闲自动停止。 |
| [#42829](https://github.com/anomalyco/opencode/pull/42829) | **feat(core): Incus 工作区分支**（[已关闭]/needs:compliance） 同样思路的 Incus 实现（支持容器或 VM 蓝图），与 #42831 形成双后端方案。 |
| [#42832](https://github.com/anomalyco/opencode/pull/42832) | **fix(plugin): Promise 事件迭代器作用域隔离** 用子 Effect scope + scoped queue 替代原来的 `Stream.toAsyncIterable` 桥，避免 iterator 关闭后事件泄漏。 |
| [#42830](https://github.com/anomalyco/opencode/pull/42830) | **feat(plugin): 事件订阅选择** 新增 `ctx.event.subscribe(type)` 单事件订阅 API，配合 `EventManifest.Server` 走单订阅路径，Promise adapter 同步迁移。 |
| [#42826](https://github.com/anomalyco/opencode/pull/42826) | **fix(core): 流式会话增量批处理** 实测把每个 provider text/reasoning/tool-input 片段合并为较少的事件，降低 UI 抖动与网络压力，关 [#31942](https://github.com/anomalyco/opencode/issues/31942)（同 #42826 的近亲 #37110 "连续空工具循环停止"）。 |

---

## 功能需求趋势

通过对 50 条 Issue 的归纳，社区当前最强烈的诉求集中在以下方向：

1. **付费与预算可控化**
   Go Pro 档位、首月折扣、per-session budget、防超额计费——这是近两月最热的复合主题，关乎产品的"商业可持续 vs 用户信任"平衡。

2. **grok / Deepseek / GLM 等多模型 Provider 的兼容性**
   `#42818 Poe Provider`、 `#42793 reasoningToggle 对 openai-compatible 不生效`、 `#32911 Deepseek 过度计费`、 `#40886 grok-4.5 503` 表明 **第三方 Provider 矩阵**正在快速扩张，但每加一个新模型都伴随新的回归。

3. **v2.0 TUI / Web UI 的视觉与交互打磨**
   移动端布局、子代理行可点击性、项目选择器树形浏览（#42784）、目录选择器（#42820）—— v2 推出后 UI 层 bug 密度显著上升。

4. **沙箱化与隔离执行**
   Docker/Incus blueprint workspace、ACP 协议错误传递（#42827）、Agent 权限规则强制（#32787）—— 企业用户对"代理在可控边界内运行"的需求越来越具体。

5. **TUI 终端兼容性细节**
   Kitty OSC 8 超链接换行（#35649、#42805）、鼠标滚轮优先级（#35295）—— 边缘但高频，影响硬核终端用户体验。

---

## 开发者关注点（痛点 / 高频需求）

- **后端服务稳定性**：#42799、#42750、#42757、#40886 等多条 "Upstream request failed / Server 500 / HTTP 503" 在 24 小时内集中出现，提示 **opencode.ai 边缘服务或上游 provider**可能在某个时段发生过可用性事件，开发者建议建立 status page 与更明确的错误码。
- **真实计费偏差**：Deepseek 用户报告 1.17+ 版本存在 Token 计数异常（#32911），Reddit 已可复现，官方需给出透明对账机制。
- **v2 迁移成本**：v2 CLI headless 命令仍加载 OpenTUI 并在 `/tmp` 留下 13.1 MiB 重复文件（#37671），不打算用 TUI 的 CI 用户必须绕路。
- **权限声明的可信度**：开发者发现 `agent.permission` 在配置中生效、运行时却被忽略（#32787），这会让任何把它当安全边界使用的工作流失效。
- **模型切换的"试探"成本**：acp / config 默认模型解析路径不一致（#42836）说明配置层语义尚未统一，新手易踩坑。
- **功能可见性差**：Plan→Build 自动切换（#7801 👍31）已经等待 7 个月未被排期，会损害核心用户的留存。

---

*数据来源：[anomalyco/opencode GitHub Issues & Pull Requests](https://github.com/anomalyco/opencode)，统计窗口：2026-08-15 ~ 2026-08-16。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-16

## 今日速览

今天 Pi 仓库的活跃度集中在 **上下文压缩（compaction）健壮性** 与 **多模型 Provider 适配** 两条主线上：开源了一个 Dev Branch 的新 harness 重构（#8076），同时围绕 gpt-5.6-sol / DeepSeek V4 Flash / xAI Grok 4.6 出现了一波 Provider 兼容性修复潮。TUI 体验侧的多个老问题（光标闪烁、Thinking 块高度、滚轮步进）也有了可合并的修复或讨论。

---

## 版本发布

过去 24 小时内无新 Release。

---

## 社区热点 Issues

| # | 标题 | 状态 | 热度 | 关注理由 |
|---|---|---|---|---|
| [#6187](https://github.com/earendil-works/pi/issues/6187) | Pi login hangs in WSL after GitHub Copilot device authorization | 🟢 CLOSED | 💬 27 | **讨论量最高**。WSL 环境下浏览器完成 Copilot 设备授权后，终端 Pi 客户端无法检测完成事件而挂起。WSL 用户痛点突出。 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction never triggers until provider overflow | 🔴 OPEN | 💬 21 / 👍 17 | **最受关注（17 👍）+ 仍 OPEN**。Footer 越过压缩阈值后仍未触发，373k token 才被 API 拒绝。属于严重可用性 bug，多 Provider 风险面广。 |
| [#4776](https://github.com/earendil-works/pi/issues/4776) | feat(coding-agent): add shell completion script generator | 🟢 CLOSED | 💬 4 / 👍 5 | **最受赞 Feature**。提议 `pi completion bash/zsh/fish` 子命令，CLI 易用性补完。 |
| [#7855](https://github.com/earendil-works/pi/issues/7855) | Pi stops with "Response was truncated before completion." | 🟢 CLOSED | 💬 5 | OpenAI 兼容 API（如 VLLM）下的随机截断，用户需手动续接。影响长任务流。 |
| [#7765](https://github.com/earendil-works/pi/issues/7765) | Make fullscreen mouse wheel scroll step configurable | 🟢 CLOSED | 💬 5 / 👍 2 | 全屏 TUI 滚轮步进硬编码 1 行，浏览长 transcript 体验差。 |
| [#8105](https://github.com/earendil-works/pi/issues/8105) | Codex materializes optional tool parameters (gpt-5.6-sol) | 🟢 CLOSED | 💬 4 | `strict: null` 导致可选参数变必填，调用方被迫提交所有字段。Provider 适配典型问题。 |
| [#8058](https://github.com/earendil-works/pi/issues/8058) | Doc: how to stop current response and type a new prompt? | 🟢 CLOSED | 💬 3 | 来自 Hermes Agent 的用户对"中断当前响应"的快捷键文档存在困惑，文档缺口。 |
| [#8170](https://github.com/earendil-works/pi/issues/8170) | Windows: bash tool can kill its own host via `taskkill /F /IM node.exe` | 🟢 CLOSED | 💬 2 | **安全类问题**。模型生成的 `taskkill` 命令未确认就执行，可杀进程树。Windows 用户需警惕。 |
| [#8028](https://github.com/earendil-works/pi/issues/8028) | TUI `fullRender` crashes with `RangeError: Invalid string length` | 🔴 OPEN | 💬 2 | 视频/图像分析场景下渲染超 V8 字符串上限即崩溃。仍 OPEN，未见修复。 |
| [#8003](https://github.com/earendil-works/pi/issues/8003) | Cursor in input box flickers aggressively while streaming | 🔴 OPEN | 💬 2 / 👍 1 | 流式输出时输入框光标闪烁剧烈，叠加输入更明显。视觉体验问题，已在 PR #8155 中跟进。 |

---

## 重要 PR 进展

| PR | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#8076](https://github.com/earendil-works/pi/pull/8076) | DRAFT: dev branch with new harness | 🔴 OPEN | **架构级变更**：新 harness 的 dev 分支草案，是当前最值得跟踪的长期演进。 |
| [#8153](https://github.com/earendil-works/pi/pull/8153) | fix: compact at safe turn boundaries | 🟢 CLOSED | 在 Pi turn 边界间消费 run-scoped boundary-compaction 请求，原地重建上下文并保留最近尾部；与 #6879/#8164 系列问题同源。 |
| [#8164](https://github.com/earendil-works/pi/pull/8164) | fix(agent-session): never continue from trailing assistant message | 🟢 CLOSED | 修复静默溢出压缩后 `agent.continue()` 触发的 "Cannot continue from role: assistant" 崩溃——只在 `stopReason='error'` 时重试，否则直接跑下一次。 |
| [#8165](https://github.com/earendil-works/pi/pull/8165) | fix(coding-agent): `tokens.total` = billable only | 🟢 CLOSED | `tokens.total` 之前混入 cacheRead/cacheWrite（1/120 折价），导致压缩预算与状态统计失真；现 `total = input + output`，cache 单独列示。 |
| [#8151](https://github.com/earendil-works/pi/pull/8151) | fix(extensions): contain widget render failures & tear down ctx-owned widgets | 🟢 CLOSED | 修复 `pi-sub` 扩展在 `/reload` 时捕获 ctx 导致 widget 泄漏的运行崩溃问题。Extension 生命周期更稳。 |
| [#8124](https://github.com/earendil-works/pi/pull/8124) | feat(ai): route xAI models through Responses and default to Grok 4.6 | 🔴 OPEN | xAI 从 Completions API 切到 Responses API，默认模型升到 Grok 4.6，并补 User-Agent。 |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | feat(coding-agent): upgrade Mermaid terminal rendering | 🔴 OPEN | 关闭 #8157 / #7832，从 `grok-mermaid` 迁到 `lovely-mermaid`，渲染质量与解析器健壮性提升。 |
| [#8181](https://github.com/earendil-works/pi/pull/8181) | fix(ai): expose `low` thinking level for DeepSeek V4 Flash on opencode/opencode-go | 🟢 CLOSED | 把 `DEEPSEEK_V4_FLASH_THINKING_LEVEL_MAP` 同步到 opencode/opencode-go 通道。 |
| [#8174](https://github.com/earendil-works/pi/pull/8174) | fix(coding-agent): neutral wording for repeated ambiguous length stops | 🟢 CLOSED | Fix #8130：第二段可恢复 length stop 的报错措辞更准确。 |
| [#8155](https://github.com/earendil-works/pi/pull/8155) | fix(tui): avoid resetting cursor blink during renders | 🔴 OPEN | 在 `TuiBase` 中跟踪光标可见性，仅在状态切换时发出可见性指令——直接回应 #8003 的光标闪烁问题。 |

---

## 功能需求趋势

从过去 24 小时 38 条 Issue 提炼出以下方向（按热度递减）：

1. **🧠 上下文压缩（Compaction）成为头号议题**  
   #6879、#8153、#8164、#8168、#8175、#8176 全部围绕"压缩时机 / 边界 / 失败暴露 / 错误信息"。gpt-5.6-sol 等大上下文模型让该问题从边缘变核心。

2. **🤖 多 Provider 模型适配密集化**  
   DeepSeek V4 Flash（#8182、#8181、#8146 Baseten 384k 上限）、xAI Grok（#8124 切到 Responses + 默认 4.6）、LLMTR（#8178 内建）、llama.cpp router（#8167 选不到模型）。生态接入标准化是当务之急。

3. **🪟 Windows 兼容性**  
   bash 工具危险命令（#8170）、Terminal 快捷键冲突（#8183）、登录文档（#8058）三个问题集中爆发，Windows 体验仍欠打磨。

4. **🧩 扩展（Extension）系统走向成熟**  
   UI dialog 事件（#7147）、widget 生命周期（#8151）、ExtensionCommandContext 用于快捷键（#8180）、tool-result 裁剪/溢出示例（#8172、#8173）——形成完整 API 讨论链。

5. **🎨 TUI 体验细节**  
   思考块高度与折叠（#8171、#8154）、光标闪烁（#8003）、滚轮步进（#7765）、超长渲染崩溃（#8028）。属于用户感知强的"打磨层"。

6. **📊 Mermaid 渲染升级**  
   `grok-mermaid` → `lovely-mermaid` 迁移（#8157、#8158、#7984）正在推进。

---

## 开发者关注点

1. **可靠性胜过新功能**：#6879 高赞且仍 OPEN，说明社区最在意"模型没爆之前能不能稳住"——压缩时机、token

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-16

## 一、今日速览

今日 Qwen Code 主线发布了 **v0.21.12-preview.5** 预览版与夜间构建 **v0.21.11-nightly.20260816**，同时 DSW EAS 端到端基准链路（5 轮 smoke + 1 轮 SWE-bench Verified 500 + Terminal-Bench 2.0 89 全量）全部以 v0.21.12 为基线验证通过。社区讨论呈"三线齐发"格局：**`/review` 子系统的稳健性**（PR/Issue 占比最高）、**Web Shell 稳定性与 UX**（白屏、错误刷屏、会话命名丢失）、**CI runner 健壮性与安全隔离**。同时，首个第三方模型 Provider 集成（Kimi、Xiaomi MiMo）也迎来关键 PR。

---

## 二、版本发布

| 版本 | 类型 | 说明 |
|---|---|---|
| [v0.21.12-preview.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.5) | 预览 | 继 v0.21.12 后的增量预览版本 |
| [v0.21.11-nightly.20260816.5677823abb](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260816.5677823abb) | Nightly | 2026-08-16 夜间构建，含 `feat(autofix): deny-by-default footprint gate and positional window censuses`（[#9156](https://github.com/QwenLM/qwen-code/pull/9156)）等 |
| dsw-eas-tb-smoke-20260815-r1 → r5 | 基准 smoke | 端到端验证：Release → Action → DSW SWE-bench Verified 1 → Publisher → Terminal-Bench 2.0 1，5 轮全部 SUCCEEDED |
| dsw-eas-full-20260815-r1 | 全量基准 | SWE-bench Verified 500 + Terminal-Bench 2.0 89 串行调度，基线 v0.21.12 |

> 主线 E2E CI 仍存在连续失败告警（详见下文 #9248/#9159/#9241/#9239/#9237），多由变更面广的 review/serve/codec 提交触发，社区已开启自动回滚机制。

---

## 三、社区热点 Issues（Top 10）

1. **[#7427 — Web Shell artifact panel 反复弹"Load artifacts failed"](https://github.com/QwenLM/qwen-code/issues/7427)** · `welcome-pr` · P2
   持续最久的高热 issue（5 评论，更新于 8-15）。artifact panel 在 mount、`promptStatus→idle`、定时刷新等场景下反复抛出 `Failed to fetch` toast，对所有 `qwen serve` 用户可见。已沉淀测试 pin PR [#9227](https://github.com/QwenLM/qwen-code/pull/9227)。

2. **[#9089 — autofix: PAT-bearing jobs 与不可信分支代码共享 runner](https://github.com/QwenLM/qwen-code/issues/9089)** · P1 · 安全
   强调 PAT 凭据步骤与 fork PR 代码步骤运行在同一 runner 池的安全风险，需要 **runner 级别**的隔离（无法在 step 内修复）。是 `global-driver` 事件与四轮 `/review` 加固后的遗留深水区问题。

3. **[#5966 — 0.19.3 中文输入法完全失效](https://github.com/QwenLM/qwen-code/issues/5966)** · P2 · 4 评论
   长期困扰中文用户的高频 issue：UI 闪烁之外，中文输入法"不定期"失效，只能输入拼音且无报错、无日志。是反映 CLI 国际化短板与回归测试缺失的典型样本。

4. **[#9250 — `qwen serve` host writer 硬编码 0600 模式](https://github.com/QwenLM/qwen-code/issues/9250)** · P3 · daemon
   `write_file`/`edit`/`notebook_edit` 创建新文件时强制 0600，忽略 umask 且无任何配置入口。在多人协作/容器共享卷场景下会导致文件无法被同组用户读取，影响显著。

5. **[#9198 — Qwen 跑出 OOM 后 tmux 终端乱码](https://github.com/QwenLM/qwen-code/issues/9198)** · P2 · 性能/内存
   1T 内存服务器跑一个星期未退出后 OOM，且 tmux 窗口按键错乱、显示乱码。是长会话资源回收缺陷的典型表现，并暴露出前端错误边界缺失。

6. **[#9230 — Follow-up 侧查询击穿服务器前缀缓存](https://github.com/QwenLM/qwen-code/issues/9230)** · P2 · 性能
   自托管 llama.cpp 场景下，主会话因"后续建议"侧查询破坏 prefix 命中率，**几乎 0% 复用**且每次重新 prefill 整段上下文，对长任务成本影响巨大。

7. **[#9194 — PR #9096 第 5–6 轮 review 留下的 test-pin 加固 backlog](https://github.com/QwenLM/qwen-code/issues/9194)** · P3 · 测试
   `/review` review platform 子命令的 mutation-verified 测试加固任务。说明社区对 `/review` 子系统的健壮性投入已延伸到测试层级。

8. **[#9200 — 用户对 v0.21.12 过程体验的吐槽](https://github.com/QwenLM/qwen-code/issues/9200)** · 社区情绪信号
   用户贴出三段调用同模块的日志，认为"qwen code 连已停服的 iflow cli 都不如"。虽然带有主观色彩，但这是当日最显性的 **质量与一致性** 反馈，值得产品侧关注。

9. **[#9011 — `ask_user_question` 静默返回 "User declined"](https://github.com/QwenLM/qwen-code/issues/9011)** · P2 · UX
   工具在不显示问题、不暴露取消原因的情况下直接返回拒绝字符串，破坏 agent 上下文决策，是 interactive 流程中的高优先级 UX 缺陷。

10. **[#9209 — `/review` last-gate schema friction（4 处输入形状不匹配）](https://github.com/QwenLM/qwen-code/issues/9209)** · P2 · 功能
    round-4 高负载 review 中在 pipeline 末尾触发 4 类 schema 摩擦：`review findings` 拒收自家 source tags、`state` 字段类型、locations[] 形状、超长行 anchor。暴露 `/review` 端到端契约未闭环。

---

## 四、重要 PR 进展（Top 10）

1. **[#8368 — `feat(auth): add Kimi and Xiaomi MiMo providers](https://github.com/QwenLM/qwen-code/pull/8368)** · `autofix/needs-human`
   在 `/auth` → 第三方 Provider 中加入 Kimi（月之暗面）和 Xiaomi MiMo 的预设。Kimi 区分 Coding Plan / API Key（国内）/ API Key（国际）；MiMo 支持 pay-as-you-go 及中国/海外区域。是 v0.21 之后 **第三方模型生态扩展的标志性 PR**。

2. **[#9254 — `fix(web-shell): show a boot fallback instead of a white screen](https://github.com/QwenLM/qwen-code/pull/9254)** · `review/self-reported`
   为 Web Shell `index.html` 加入零依赖的 boot watchdog：脚本/样式加载失败时立即渲染"Web Shell 加载失败 / failed to load"双语文案与重载按钮。直击 [#9253](https://github.com/QwenLM/qwen-code/issues/9253) 的白屏问题。

3. **[#9235 — `fix(serve): redact skill bodies from Web Shell event surface](https://github.com/QwenLM/qwen-code/pull/9235)** · `review/self-reported`
   守护进程向浏览器事件面发送的会话快照中原本携带完整 SKILL.md 正文，本 PR 在前端事件面做脱敏（native 编辑客户端保留原文）。属于 **会话快照 → 事件面** 的最小权限重构。

4. **[#9220 — `fix(ci): self-heal failed checkouts on the reused review runners](https://github.com/QwenLM/qwen-code/pull/9220)** · `autofix/takeover`
   自托管 review runner 池中 base 分

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**2026-08-16** | 数据来源：Hmbown/CodeWhale

> ⚠️ **说明**：本期数据源标注为 `Hmbown/DeepSeek-TUI`，但实际抓取到的 Issue / PR 均归属 `Hmbown/CodeWhale` 仓库。以下日报内容据此生成，建议读者前往对应仓库核对。

---

## 📌 今日速览

今天是 **v0.9.8 收尾冲刺日**：维护者 Hmbown 合并了 11 个 PR（其中包括 5 个关键稳定性 / 安全修复），主线 `main` 在 macOS 与 Windows 双平台上从持续"假绿"恢复为真实红色，迫使团队集中清理 v0.9.8 遗留的回归与 CI 漂移。同时，中文社区关于 "Constitution" 译法的长期争论（**宪章** vs 宪法 vs 协作准则）以 **"宪章"** 落槌，PR #5397 / #5398 顺势收尾。本日无新版本发布。

---

## 🚀 版本发布

**无新版本发布**。当前主线仍锁定在 v0.9.8 收尾阶段，等待 PR #5407（v0.9.8 final cut）合入并完成 Homebrew tap 回收（PR #5357）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 价值点 |
|---|---|---|---|---|
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **Constitution 中文译法讨论**（宪法 / 协作准则 / 宪章） | ✅ CLOSED | 17 | 历经 3 周讨论，最终定为 **"宪章"**，直接触发 PR #5397 |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate 拆分（Umbrella）** | 🟢 OPEN | 7 | 仓库结构层面的大型重构伞状追踪 Issue，影响后续模块边界 |
| [#5374](https://github.com/Hmbown/CodeWhale/issues/5374) | **Bug: macOS 下 DeepSeek Flash 流式输出乱码** | 🟢 OPEN | 5 | SSE 在 HTTP/2 DATA 帧拆字导致 U+FFFD，已由 PR #5404 修复 |
| [#5322](https://github.com/Hmbown/CodeWhale/issues/5322) | **Bug: 0.9 宽终端输出区不再撑满**（回归 v0.8.65） | ✅ CLOSED | 4 | PR #5400 已将 `session_shell_area` 恢复为 identity |
| [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) | **增强: 第三方模型预制模板**（OpenCode Zen / Go / Agnes / SenseNova） | 🟢 OPEN | 3 | PR #5406 已落地，新手 1 分钟配置可期 |
| [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | **Web: 收尾字典骨架，移除 `isZh` 分支** | 🟢 OPEN | 3 | i18n 架构清理，消灭页面硬编码双语 |
| [#5367](https://github.com/Hmbown/CodeWhale/issues/5367) | **增强: 自托管长上下文模型可配置读 / 工具结果上限**（点名 DeepSeek V4） | 🟢 OPEN | 3 | PR #5405 已实现，64 KiB 文件减少 ~20 次额外读取 |
| [#5370](https://github.com/Hmbown/CodeWhale/issues/5370) | **P0: 公开 Web UI 视觉与功能全线破损** | 🟢 OPEN | 2 | 维护者亲自挂 P0，scope 划分 codewhale.net vs CWC 两条产品线 |
| [#5241](https://github.com/Hmbown/CodeWhale/issues/5241) | **needs-info: 定价接口 503，全场 `unverified_live_pricing`** | 🟢 OPEN | 2 | PR #5402 给出诚实降级路径，不再永远 "unpriced" |
| [#5410](https://github.com/Hmbown/CodeWhale/issues/5410) | **增强: bwrap 沙箱允许配置额外根目录**（Zig 开发链需求） | 🟢 OPEN | 1 | 反映沙箱策略对真实构建链过于严苛，开发者真实痛点 |

**社区反应小结**：讨论量集中在 i18n（#4949，17 条）与重构 / 拆 crate（#5316，7 条）；其余 v0.9.8 相关 Bug 报告多为单点反馈，已被 PR 直接接管。

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | 标题 | 作者 | 状态 | 要点 |
|---|---|---|---|---|
| [#5412](https://github.com/Hmbown/CodeWhale/pull/5412) | docs: 修正已验证套件计数与链接 | Hmbown | ✅ CLOSED | 收尾 #5397/#5398 后的文档漂移 |
| [#5398](https://github.com/Hmbown/CodeWhale/pull/5398) | fix(web): 为 v0.9.8 两个新 provider 重建 `facts.generated.ts` | Lstarsky0 | ✅ CLOSED | 修复 `check:facts` 让 Lint 与 Type Check 全绿 |
| [#5397](https://github.com/Hmbown/CodeWhale/pull/5397) | fix(web): 在官网将 constitution 译为 "宪章" | Lstarsky0 | ✅ CLOSED | 跟随 #4949 结论，与 TUI `宪章` 保持一致 |
| [#5407](https://github.com/Hmbown/CodeWhale/pull/5407) | **v0.9.8: 完成指定切线** | Hmbown | 🟢 OPEN | 把 `codex/v098-final-20260814` 合入 `main`，不打 tag |
| [#5406](https://github.com/Hmbown/CodeWhale/pull/5406) | **feat(tui): 第三方 provider 预制模板 + 测试连接** | Hmbown | 🟢 OPEN | 关闭 #5350：OpenCode Zen / Go / Agnes / SenseNova 仅需 API Key |
| [#5405](https://github.com/Hmbown/CodeWhale/pull/5405) | **feat(tui): 模型可见读 / 工具结果预算可配置** | Hmbown | 🟢 OPEN | 关闭 #5367：自托管 DeepSeek V4 用户可放大单次结果上限 |
| [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) | **fix(client): SSE UTF-8 在 HTTP/2 拆分下 fail-closed** | Hmbown | 🟢 OPEN | 关闭 #5374：`String::from_utf8_lossy` 替换为严格解码 |
| [#5402](https://github.com/Hmbown/CodeWhale/pull/5402) | **fix(tui): 不可验价时恢复会话成本显示** | Hmbown | 🟢 OPEN | 关闭 #5241：控制面 503 不再导致成本永远空白 |
| [#5401](https://github.com/Hmbown/CodeWhale/pull/5401) | **fix: CodeQL High (#107) + 准备 GHSA-8hp3 / GHSA-3mgh** | Hmbown | 🟢 OPEN | 安全合集：清密文日志路径、清理远程目录限制值 |
| [#5400](https://github.com/Hmbown/CodeWhale/pull/5400) | **fix(tui): 终端撑满 transcript 宽度** | Hmbown | ✅ CLOSED | 关闭 #5322，恢复 v0.8.65 几何 |
| [#5399](https://github.com/Hmbown/CodeWhale/pull/5399) | **fix(tui): v0.9.8 稳定化（turn 拥有 agent、压缩质量、Blue Stage web）** | Hmbown | ✅ CLOSED | 把 5393/5394/5395 之后仍缺失的 Rust 稳定化重建到 `main` |
| [#5396](https://github.com/Hmbown/CodeWhale/pull/5396) | fix(tui): 规范化 macOS `agy_credentials` 测试夹具 | Hmbown | ✅ CLOSED | 关闭 #5392：`/var → /private/var` 符号链接问题 |

---

## 📈 功能需求趋势

综合今日 16 条 Issue，可提炼出 **5 大方向**：

1. **🤖 自托管长上下文模型适配** — DeepSeek V4 等长上下文场景对 `read` / 工具结果默认上限（50 KiB / 12 000 chars）不满，要求可调（#5367 → #5405）。
2. **🧩 第三方模型接入门槛降低** — OpenCode Zen / Go、Agnes、Sensenova 等兼容协议方需要"键入 API Key 即用"的预制模板（#5350 → #5406）。
3. **🛡️ 安全与可观测性硬化** — CodeQL Highs（#107）、明文日志、GHSAs、定价接口故障降级（#5241、#5401、#5402）。
4. **🌐 跨平台体验一致** — macOS 符号链接、宽终端几何、HTTP/2 SSE 拆字三类回归在同日浮出（#5322 / #5374 / #5392）。
5. **📐 工程结构现代化** — TUI crate 拆分解耦（#5316）、Web i18n 字典骨架收口（#5337）、Web UI 全面重建（#5370）。

---

## 💬 开发者关注点

- **v0.9 升级回归是最大怨气** — 至少 3 条独立反馈（终端宽度、SSE 乱码、定价空白）都集中在 `0.8.67 → 0.9.x` 升级路径上，社区呼吁尽快回到 v0.8.65 的"开箱即用"手感。
- **沙箱策略过严阻碍真实开发** — #5410 暴露了 bwrap 默认拒绝 `/dev/null` 重定向与系统库链接，影响 Zig 等需要自定义工具链的栈。
- **CI "假绿"问题被社区发现并修复** — #5395 揭示了 `cancel-in-progress` 让后到的 push 取消先前 run，导致断言失败从未真正变红。Lstarsky0 的 PR #5403 进一步把四条已完成 run 标红，证明此前 main 处于隐性坏掉状态。
- **本地化与文化敏感性** — 17 条评论的 #4949 表明中文社区对官方文档翻译审慎，既要"基础权威感"也要避开政治色彩，最终 "宪章" 是务实折中。
- **官方 Web 与 TUI 体验割裂** — #5370 由维护者亲自分配 P0，意味着 codewhale.net 当前在视觉与功能完整性上已落后于 TUI 客户端，是 0.9.8 之后最值得关注的 UX 债。

---

*日报基于过去 24 小时 GitHub 数据自动汇总，链接均指向 `Hmbown/CodeWhale` 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*