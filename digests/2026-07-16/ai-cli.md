# AI CLI 工具社区动态日报 2026-07-16

> 生成时间: 2026-07-16 02:01 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-07-16
**覆盖工具**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI

---

## 1. 生态全景

2026 年中段的 AI CLI 工具生态已全面进入**"生产可用性深度优化"阶段**——核心特征是从"功能堆叠"转向"稳定性、计费透明度、跨平台一致性"的纵深较量。今日数据显示，社区痛点高度收敛于 **Subagent 失控带来的成本灾难**、**Windows 平台质量短板**、**MCP 生态成熟度** 三大共性议题；安全从"加分项"升级为"必答题"，多家工具同日发布 C 级/CRITICAL 级修复（Claude Code 的 Unicode 绕过、Gemini CLI 的 `GHSA-wpqr-6v78-jr5g` 变量展开漏洞、OpenCode 的 Prompt Injection 边界）。同时，**Agent 可观测性**正取代"模型本身"成为新的差异化战场。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issues | PR | 24h 节奏特征 | 主要焦点 |
|------|---------|--------|----|----|----|
| **Claude Code** | ✅ v2.1.211 | 50 | 4 | 平稳迭代，重大安全问题 | 子代理成本失控、Unicode 绕过、IDE 体验 |
| **OpenAI Codex** | ✅ 0.145.0-α.13/14/15 | 50+ | **46** | 极高强度 alpha 推进 | Windows ARM 闪退、GPT-5.5/5.6 行为差异、Cursor 导入 |
| **Gemini CLI** | ✅ v0.52.0-nightly | 50 | 19 | 中等节奏、nightly 渠道 | Subagent 可信度、Auto Memory、安全硬化 |
| **GitHub Copilot CLI** | ✅ v1.0.71 + 补丁 | 50 | 0 | PR 静默，issue 主导 | MCP OAuth 断链、Voice 模式、1M 上下文对标 |
| **Kimi Code CLI** | ❌ | 0 | 1 | **静默期** | 跨语言 telemetry schema 对齐 |
| **OpenCode** | ✅ v1.18.2 | 50 | 10+ 紧急合并 | **救火模式** | v1.18.x UI 反弹、compaction 失稳、Prompt Injection |
| **Pi** | ❌ | 10+ | 10+ | 维护型节奏 | Codex 连接可靠性、Windows 进程管理 |
| **Qwen Code** | ✅ v0.19.10-nightly + cua-driver v0.7.2 | 10+ | 10+ | 双线推进（daemon + 模型） | 多工作区 daemon、ACP Streamable HTTP、qwen3.7-max |
| **DeepSeek TUI** | ❌ | 50 | 10+ | 重构期 | Windows 终端抽象、Rust god object 拆分、v0.8.64 安全收尾 |

**关键观察**：
- **迭代强度** 与 **生态影响力** 并不正相关：Codex 以 46 个 PR 领跑但半数来自 `copyberry[bot]` 自动化合入；OpenCode 的 10+ 个 PR 全部是手动紧急修复。
- **Kimi 是唯一当日完全静默的主流工具**，仅有 1 个底层 PR（#2500 telemetry schema 对齐），处于"沉淀期"。

---

## 3. 共同关注的功能方向

### 🔴 Subagent / 多 Agent 编排（5 工具共识）
**议题密度最高的跨工具痛点**，几乎所有支持 subagent 的工具都暴露了相关缺陷：

| 工具 | 核心症状 |
|------|----------|
| Claude Code | 递归 50+ 层无视 `FORK_SUBAGENT=0`，单会话燃烧 $27–$600（#68619, #69578） |
| OpenAI Codex | GPT-5.5 强制启用 MultiAgentV2、GPT-5.6 下 `spawn_agent` 缺 `agent_type`（#32782, #31097） |
| Gemini CLI | `codebase_investigator` 达 MAX_TURNS 仍上报 `status: "success"`（#22323）；generalist 无限挂死（#21409） |
| Qwen Code | subagent↔主会话双向通信缺失（#5239），按模型配额并发限制（PR #6984） |
| OpenCode | 缺省禁止 subagent 嵌套（v1.18.2 修复），新增 `subagent_depth` 可配置项 |

**共识诉求**：递归深度硬限、强制 kill-switch、按模型粒度配额、agent 行为诚实性（终止状态如实上报）。

### 🔴 Windows 平台稳定性（5 工具）
- **Codex**：ARM64 `napi_*` 符号缺失导致 10-15 秒后闪退；WebView 导航带崩主进程；`serialport` 反复延迟加载。
- **Claude Code**：拼写检查无法关闭；NTFS junction 误删 ~800 GB；PowerShell 权限绕过。
- **Pi**：`taskkill` 在 Node.js 24 + 非 PATH System32 下 ENOENT（已合 #6692）；npm 扩展 banner 显示绝对路径。
- **DeepSeek TUI**：TUI 间歇冻结（crossterm poll）、中文 IME 死锁、TUI 崩溃后输入泄漏 PowerShell（**安全+正确性双重隐患**）。
- **OpenCode / Gemini CLI**：Wayland 协议下 browser subagent 失败。

### 🔴 MCP 生态成熟度（4 工具）
- **Copilot CLI**：OAuth 桥接断裂（Atlassian/Work IQ/Azure AD 群发性问题，#4096, #4089, #4084）。
- **Claude Code**：自定义远程 MCP 连接器间歇性丢失工具、聚合硬上限 256、Remote Control 模式下 Web 端权限弹窗不渲染（#60385，已闭但根因仍在）。
- **Gemini CLI**：`tools/list` 发现超时长达 10 分钟静默冻结（PR #28410）。
- **Qwen Code**：不可信 MCP `readOnlyHint` 跳过默认确认（#6917，**安全反模式**）；Workspace MCP 管理入口（PR #6954）。

### 🔴 成本与可观测性（全行业）
- **Claude Code**：单会话 60–80 万 token、计费透明度质疑。
- **Codex**：Token 指示器消失（#23794，172 评论/170 点赞）；新增 `cache_write_input_tokens` 暴露（PR #33454）。
- **Pi**：给 branch summary / compaction / tool result 加 usage 元信息（PR #6671）。
- **Copilot CLI**：持久化 token 状态栏（#2052 已闭）。

### 🔴 安全硬化（4 工具同日）
- **Claude Code v2.1.211**：转发权限预览中和中双向控制符 / 零宽 / 视觉相似字符。
- **Gemini CLI PR #28403**：`detectBashSubstitution()` 拦截 `$VAR` / `${VAR}` 变量展开绕过（GHSA-wpqr-6v78-jr5g 衍生）。
- **OpenCode PR #37187**：AGENTS.md 与 Read 工具输出间注入 marker 防 Prompt Injection；PR #37182 修复 WebFetch `always-allow` 等价通配符。
- **Qwen Code**：MCP `readOnlyHint` 信任收紧；trust-preview 污染缓存修复（#6831）；`InvocationContext` 安全审计链路贯通（PR #6895）。

### 🟡 Session / 上下文生命周期（4 工具）
- **Claude Code**：`--continue`/`--resume` 缺少活跃会话注册表检查，产生 headless twin 并发冲突（#69364）。
- **OpenCode**：compaction 跨 token/byte 边界失稳，#13946 长期未解（`opencode run` 退出 0 但任务未完成——**CI/CD 静默失败**）。
- **Pi**：引入 SQLite session 存储（PR #6594）以避免压缩前回溯重复读老节点。
- **Qwen Code**：Daemon Todo Stop Guard（PR #6945）防止未完成项被意外终止。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级 IDE 集成的"全功能参考实现" | 高客单价、复杂工作流团队 | Subagent 强、Plugins 市场、Skill 系统；与 VS Code / Cowork 联动 |
| **OpenAI Codex** | GPT-5 系列模型的"最快落地渠道" | OpenAI 生态深度用户 | 46 PR/日的疯狂迭代、Windows 桌面是主战场、外部 Agent 迁移协议化 |
| **Gemini CLI** | 研究型/工程化并重的 Gemini 前沿 | AI/ML 研究者、AST-aware 工作流 | Auto Memory 持续打磨、行为 eval 基线（76 测试 / 6 模型）、A2A 协议修复 |
| **Copilot CLI** | GitHub 生态的"集成式 CLI" | GitHub 企业用户、VS Code 用户 | MCP 是头号议题、Voice/Multi-modal 试水、回归控制薄弱 |
| **Kimi Code CLI** | 稳态运营、底层

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-16 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行（按社区关注度）

| # | Skill / PR | 核心功能 | 状态 | 关注焦点 |
|---|---|---|---|---|
| 🥇 | **[#1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 评估体系修复 | 修复 `run_eval.py` 始终报告 0% recall 的核心 bug | OPEN | **生态级关键修复**，影响所有 description 优化流程；引用 10+ 独立复现 |
| 🥈 | **[#83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer + skill-security-analyzer | 五维度质量分析 + 安全审计元技能 | OPEN | 社区对 Skill 自身治理工具的强烈需求 |
| 🥉 | **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | 防止 AI 生成文档中的孤儿/寡夫/编号错位等排版问题 | OPEN | 全场景刚需，"影响 Claude 生成的每一个文档" |
| 4 | **[#210](https://github.com/anthropics/skills/pull/210)** frontend-design 改进 | 提升 Skill 的清晰度、可执行性与内部一致性 | OPEN | 经典 Skill 重构，长达 2 个月持续打磨 |
| 5 | **[#486](https://github.com/anthropics/skills/pull/486)** ODT Skill | OpenDocument 格式创建/模板填充/HTML 解析 | OPEN | 补齐开源办公格式支持 |
| 6 | **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit（v1.3.0） | 机械校验 + 四维度推理质量门禁 | OPEN | 通用 AI 输出审计能力，对应 Issue #1385 提案 |
| 7 | **[#1302](https://github.com/anthropics/skills/pull/1302)** color-expert | 自包含色彩知识体系（命名系统、色彩空间、最佳实践） | OPEN | 专业领域深度知识封装 |
| 8 | **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 测试哲学 + 单元/组件/E2E/视觉/契约测试全栈 | OPEN | 软件工程方法论系统化 |

> **观察**：排行前列的 Skill 呈现明显的**"两类分化"**——一类是修复基础设施（skill-creator 相关 bug 占据前 20 中 6 席），另一类是**元能力/治理类**（自我审计、质量分析、安全审计），反映社区正从"功能堆叠"走向"生态治理"。

---

## 2. 社区需求趋势（来自高评论 Issues）

| 需求方向 | 代表 Issue | 评论数 | 趋势强度 |
|---|---|---|---|
| 🔒 **Skill 供应链安全** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 anthropic/ 官方命名空间 | **34** | ⭐⭐⭐⭐⭐ |
| 🏢 **企业级分发能力** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 组织内 Skill 共享 | 14 | ⭐⭐⭐⭐ |
| 🔧 **skill-creator 工具链稳定性** | [#556](https://github.com/anthropics/skills/issues/556) run_eval.py 0% 触发率 | 12 | ⭐⭐⭐⭐ |
| 🧠 **Agent 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | 9 | ⭐⭐⭐ |
| 🛡️ **Agent 治理框架** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance（已关闭） | 6 | ⭐⭐⭐ |
| 📦 **Skill 去重与包管理** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复 | 6 | ⭐⭐⭐ |
| 🔌 **MCP 互操作性** | [#16](https://github.com/anthropics/skills/issues/16) 将 Skill 暴露为 MCP | 4 | ⭐⭐ |
| ☁️ **多云平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 适配 | 4 | ⭐⭐ |
| 🎯 **推理质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) Pre-task/Adversarial/Delivery 三门管线 | 3 | ⭐⭐ |

**趋势提炼**：
- **安全与信任 > 功能扩展**：34 评论的 #492 远超其他议题，社区对"谁能代表 anthropic 命名"高度敏感
- **从单点工具 → 治理框架**：governance / self-audit / quality-analyzer 形成完整诉求链
- **跨平台与企业集成**：Bedrock、SharePoint、Claude.ai 组织共享等待官方支持

---

## 3. 高潜力待合并 Skills（活跃 OPEN，长期打磨）

| PR | Skill | 最后更新 | 潜在价值 |
|---|---|---|---|
| [#525](https://github.com/anthropics/skills/pull/525) | **Pyxel** 复古游戏开发 | 2026-07-15 | 活跃维护中，连接 MCP 生态，开辟"创意娱乐"垂直场景 |
| [#486](https://github.com/anthropics/skills/pull/486) | **ODT** 开放文档格式 | 2026-04-14 | 与 PDF/DOCX 形成完整办公文档三角 |
| [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 2026-04-21 | 软件工程普适方法论，开发者高频需求 |
| [#181](https://github.com/anthropics/skills/pull/181) | **SAP-RPT-1-OSS** 企业预测 | 2026-03-16 | 首个企业级表格预测基础模型 Skill，SAP 生态 |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 2026-03-13 | 通用性强，几乎所有文档场景受益 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | 2026-07-02 | 配合 #1385 提案构建质量闭环，差异化价值显著 |
| [#83](https://github.com/anthropics/skills/pull/83) | **quality/security-analyzer** | 2026-01-07 | 直接呼应 #492 安全诉求，落地路径明确 |

> **判断标准**：长期 OPEN 但仍持续被维护（更新在 4 月以后）、覆盖能力空白或高需求场景的 PR 更可能近期落地。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"如何让 Skill 生态可信、可治理、可评估"**——以 #1298 / #556 / #492 / #83 / #1367 为代表，社区正从"提交更多 Skill"转向"为 Skill 生态搭建质量门禁、安全审计、描述优化、自我审计的元基础设施"，功能性 Skill 的扩张已让位于**生态可信度**的建设。

---

# Claude Code 社区动态日报
**2026-07-16**

---

## 📌 今日速览

今日 Claude Code 发布 v2.1.211，新增 subagent 文本/思考流转发能力（`--forward-subagent-text`）并修复了权限预览中的 Unicode 隐藏字符绕过问题。社区焦点集中在**子代理递归失控导致的成本灾难**（多个 Issue 报告单会话烧掉 $27–$600 不等）以及**Cowork 与 VS Code 扩展的功能短板**，数据丢失类高危 Bug 也持续涌现。

---

## 🚀 版本发布

### v2.1.211
- **新增** `--forward-subagent-text` 标志与 `CLAUDE_CODE_FORWARD_SUBAGENT_TEXT` 环境变量：允许在 `stream-json` 输出中包含 subagent 的文本与思考内容，便于编排与调试。
- **安全修复**：转发至聊天频道的权限预览现在会中和双向控制符（bidi override）、零宽字符（zero-width）以及视觉相似字符（look-alike），防止通过 Unicode 欺骗攻击绕过安全检查。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键信息 | 关注点 |
|---|-------|---------|--------|
| 1 | [#53940](https://github.com/anthropics/claude-code/issues/53940) Cowork Edit/Write 静默截断文件 | 43 评论 / 16 👍 | Windows 下 Cowork 的 Edit/Write 工具通过"字节守恒缓冲上限"确定性静默截断所有尺寸文件，无任何警告——属**严重数据完整性问题** |
| 2 | [#33932](https://github.com/anthropics/claude-code/issues/33932) VS Code 扩展需要类似 Copilot 的 Diff 审阅 UI | 34 评论 / **150 👍** | 高赞功能请求：希望 VS Code 扩展支持类 GitHub Copilot Edits Review 的可视化代码审阅界面 |
| 3 | [#68619](https://github.com/anthropics/claude-code/issues/68619) **[CRITICAL]** 子代理递归失控导致成本爆炸 | 31 评论 / 10 👍 | 子代理无视 `CLAUDE_CODE_FORK_SUBAGENT=0` 递归 50+ 层，权限拒绝后继续生成子代理，社区认定为"灾难性 token 燃烧" |
| 4 | [#60385](https://github.com/anthropics/claude-code/issues/60385) Remote Control 模式下 MCP 权限弹窗不显示 | 20 评论 / 0 👍（已关闭） | `--remote-control` 驱动 Web UI 时，非只读 MCP 工具的权限请求仅在本地 TUI 显示，**Web 端完全无响应**导致会话挂死 |
| 5 | [#40043](https://github.com/anthropics/claude-code/issues/40043) Cowork 项目支持移除本地文件夹 | 17 评论 / 55 👍 | 增强请求：当前 Cowork 项目添加本地文件夹后无法移除，体验差 |
| 6 | [#26904](https://github.com/anthropics/claude-code/issues/26904) 增加 `/delete` 命令删除当前会话 | 10 评论 / 56 👍 | 简单的 UX 增强：用户希望直接通过 slash 命令清理会话 |
| 7 | [#69578](https://github.com/anthropics/claude-code/issues/69578) 子代理递归循环消耗 80 万 token / 意外扣费 $27.60 | 8 评论 | 用户在 Max Plan（5x）之外被额外扣费 $27.60，对**计费透明度**提出质疑 |
| 8 | [#58693](https://github.com/anthropics/claude-code/issues/58693) Windows 拼写检查无法关闭 | 7 评论 | 简单的 UX 痛点：Windows 桌面端的拼写检查标记所有输入为错误，无法关闭 |
| 9 | [#72292](https://github.com/anthropics/claude-code/issues/72292) VS Code 扩展不识别 `/workflows` 命令 | 6 评论（已关闭为 duplicate） | VS Code 扩展中 `/workflows` 被当作纯文本，无法执行工作流监控 |
| 10 | [#69364](https://github.com/anthropics/claude-code/issues/69364) `--continue`/`--resume` 不检查现有活跃会话 | 5 评论 | 在已有进程持有同一会话 ID 的情况下再次启动 `--continue` 会导致**两个进程同时操作同一 jsonl 文件**，存在数据冲突风险 |

---

## 🔧 重要 PR 进展

> 注：过去 24 小时仅有 4 条 PR 更新，以下为全部内容。

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#16680](https://github.com/anthropics/claude-code/pull/16680) recall plugin: 对话上下文恢复 | 已关闭 | 为长期会话提供消息索引与上下文召回能力的插件，作者因场景需求自建——社区对此类"长会话记忆"工具有持续需求 |
| 2 | [#77916](https://github.com/anthropics/claude-code/pull/77916) 添加 `code-quality-pipeline` 插件 | OPEN | 新增基于 Skills 的代码质量门禁插件：包含"单文件流水线（实现后、e2e 前）"和"合并前流水线"两套严格顺序的质量关卡 |
| 3 | [#77709](https://github.com/anthropics/claude-code/pull/77709) 设置示例：仅允许官方市场 | OPEN | 通过 `strictKnownMarketplaces` + 显式 GitHub source，演示如何把插件市场限制为 `claude-plugins-official` 一个来源——**企业安全场景实用** |
| 4 | [#77705](https://github.com/anthropics/claude-code/pull/77705) 修复 `validate-settings.sh` 对无 frontmatter 文件的误判 | OPEN | 修复插件开发脚本 Check 3 的 bug：对于**完全无 `---` 标记**的文件本应报错却通过了验证，会导致低质量插件流入市场 |

---

## 📈 功能需求趋势

从 50 条更新 Issues 中可清晰观察到五大需求方向：

### 1. **IDE / VS Code 扩展体验**（呼声最高）
- Diff 审阅 UI（150 👍，最热功能请求）
- `/workflows` 等 slash 命令在扩展中的支持（3 个重复 issue）
- 与 GitHub Copilot 的功能对标

### 2. **子代理（Subagent）与编排系统**
- 递归深度限制与可配置性
- 成本控制（agent fan-out 起步 token、权限拒绝策略）
- 嵌套代理间的消息传递与状态可见性（"kid in a trenchcoat"问题）

### 3. **会话生命周期管理**
- `/delete` 命令
- `--continue`/`--resume` 与已有进程的冲突检测
- 会话实例的可见性与身份标识

### 4. **Cowork 功能完善**
- 移除已添加的本地文件夹
- 修复合并/文件操作的稳定性（截断 Bug）

### 5. **平台特定问题**
- Windows：拼写检查、NTFS junction 数据丢失（~800 GB）、PowerShell 权限绕过
- macOS：Desktop 扩展面板卡死、MCP 256 工具上限
- Linux：agent fan-out 成本

---

## 💔 开发者关注点与痛点

### 1. **成本失控焦虑（最强烈）**
多个 Issue 报告单会话因 agent 失控燃烧 60 万–80 万 token、$27–$600 不等的费用。开发者**既愤怒又无奈**——已有 `CLAUDE_CODE_FORK_SUBAGENT=0` 等配置但被无视，**计费可观测性**与**防护机制**是头号痛点。

### 2. **数据丢失恐慌**
- Windows `rm -rf` 越过 NTFS junction 删除目标数据（~800 GB）
- Claude Sonnet 4.6 违反明确指令覆盖 Confluence 页面
- 删除 500GB 数据库的模型行为报告
- Cowork 工具静默截断文件

> 这类报告**信任度损耗极大**，开发者开始对自动写操作持防御态度。

### 3. **会话/进程"幽灵实例"**
`--continue` 与 `--resume` 缺少活跃会话注册表检查，导致**同一会话被多进程并发操作**，产生 jsonl 文件写入冲突、被遗忘的"headless twin"持续消耗 token。

### 4. **MCP 集成稳定性**
- 自定义远程 MCP 连接器间歇性丢失所有工具
- 聚合工具列表硬上限恰好 256
- Web 端权限弹窗不渲染

### 5. **桌面端 Bug 集中爆发**
Claude Desktop（macOS/Windows）出现"Loading extensions..."永久卡死、Dispatch tab 缺失、拼写检查无法关闭等问题，**桌面端质量被开发者普遍认为落后于 CLI**。

### 6. **可配置性诉求**
- 可配置 auto-compact 阈值
- 可限制插件市场来源
- 可配置 agent 递归深度

---

> **数据来源**：[github.com/anthropics/claude-code](https://github.com/anthropics/claude-code)
> **报告生成时间**：2026-07-16
> **覆盖范围**：过去 24 小时内更新的 Releases / 50 条 Issues / 4 条 PRs

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-07-16**

---

## 📌 今日速览

今日 Codex 仓库继续保持高强度迭代节奏，**24 小时内连续发布 3 个 0.145.0-alpha 预发布版本**，伴随 46 个 PR 合入。社区焦点高度集中于 **Windows 平台稳定性**（多个 ARM64 崩溃、启动退出、WebView 卡顿 bug 涌现）以及 **GPT-5.5 / GPT-5.6 Sol 的多 Agent（subagent）与上下文行为** 相关问题；功能层面则围绕外部 Agent 迁移、Cursor 导入、Prompt Cache 计量、危险命令检测加固等方向持续推进。

---

## 🚀 版本发布

| 版本 | 状态 | 说明 |
|---|---|---|
| `rust-v0.145.0-alpha.13` | 已发布 | 0.145 系列 alpha |
| `rust-v0.145.0-alpha.14` | 已发布 | 0.145 系列 alpha |
| `rust-v0.145.0-alpha.15` | 已发布 | 0.145 系列 alpha |

> 0.145.0 进入快速 alpha 迭代阶段，OpenAI 团队正在密集合入 PR（外部 Agent 迁移、Cursor 导入、Windows 沙箱、危险命令检测等），预计近期会推进至 beta/rc。

---

## 🔥 社区热点 Issues

> 按评论数 + 点赞数综合排序，挑选最值得关注的问题

### 1. [#23794](https://github.com/openai/codex/issues/23794) — Codex Desktop 上下文/Token 指示器消失
- 标签：`bug`, `context`, `app`
- 数据：172 评论 / 👍 170
- **热度最高**的 issue。用户在升级后 Desktop 端无法看到上下文使用量与剩余 Token 指示，订阅覆盖 Business，影响使用体验判断。
- 状态：**已 CLOSED**，但仍是本期最受关注的话题。

### 2. [#33381](https://github.com/openai/codex/issues/33381) — Windows ARM64 桌面端崩溃循环
- 标签：`bug`, `windows-os`, `app`
- 数据：38 评论 / 👍 25
- 严重 Bug：`ChatGPT.exe` 缺少 `napi_*` 符号，`serialport` 插件延迟加载失败（0xC06D007F），导致 ARM64 Windows 启动 10–15 秒后闪退，每次启动 Crashpad 都会生成 minidump。重新安装（包含清空 LocalCache）无效。

### 3. [#28969](https://github.com/openai/codex/issues/28969) — 希望可关闭"60 秒自动确认提问"功能
- 标签：`bug`, `enhancement`, `CLI`, `config`
- 数据：37 评论 / 👍 **124**（社区认同度极高）
- 当 Codex 向用户提澄清问题后，若 60 秒内无应答会自动按默认选项继续。用户希望提供配置项关闭该行为，呼声强烈。

### 4. [#31846](https://github.com/openai/codex/issues/31846) — GPT-5.3 Codex Spark 报 `Unsupported parameter: reasoning.summary`
- 标签：`bug`, `app`, `config`
- 数据：29 评论 / 👍 33
- 在 App 中调用 GPT-5.3 Codex Spark 直接失败，提示不支持 `reasoning.summary` 参数，影响 Pro 订阅用户。

### 5. [#33375](https://github.com/openai/codex/issues/33375) — Windows 端 `serialport.node` 反复延迟加载失败导致 UI 卡顿
- 标签：`bug`, `windows-os`, `app`, `performance`
- 数据：26 评论 / 👍 14
- Codex Windows App 出现严重 UI 延迟，根因是 `serialport` 原生插件反复延迟加载失败，资源被持续占用。

### 6. [#30178](https://github.com/openai/codex/issues/30178) — Windows 桌面内置 Browser 导航时崩溃
- 标签：`bug`, `windows-os`, `app`, `browser`
- 数据：19 评论
- 桌面端内嵌 Browser 在 WebView 导航期间会带崩主进程（Windows 11 24H2 复现），复现率较高。

### 7. [#29223](https://github.com/openai/codex/issues/29223) — 0.142.0-alpha.1 不再下发 `codex_app` 线程管理工具
- 标签：`bug`, `windows-os`, `app`, `app-server`
- 数据：11 评论
- 0.142.x 上仍存在的 `codex_app` 线程管理工具集在 0.142.0-alpha.1 全新会话中消失，影响 LazyCodex 等依赖线程移交的工作流。

### 8. [#30813](https://github.com/openai/codex/issues/30813) — CLI `/agent` 列出 subagent 但无线程选择器
- 标签：`bug`, `TUI`, `CLI`, `subagent`
- 数据：10 评论
- `/agent` 只能列出活动 subagent，无法定位或切换到对应线程，调试与编排体验不完整。

### 9. [#32782](https://github.com/openai/codex/issues/32782) — GPT-5.6 Sol 根模型下 `spawn_agent` 缺 `agent_type`
- 标签：`bug`, `subagent`
- 数据：8 评论 / 👍 9
- 当 root 为 GPT-5.6 Sol 时，multi-agent spawn schema 会缺失 `agent_type` 字段，阻断用户自定义 Agent 路由配置。

### 10. [#31097](https://github.com/openai/codex/issues/31097) — GPT-5.5 强制启用 MultiAgentV2 且隐藏自定义 Agent 配置
- 标签：`bug`, `CLI`, `subagent`, `config`
- 数据：8 评论 / 👍 8
- 即使用户在配置中禁用，GPT-5.5 仍强制走 MultiAgentV2 路径，并隐藏文档化的 custom-agent 控件，CLI 0.142.5 上复现。

> 补充关注：[#26634](https://github.com/openai/codex/issues/26634) Desktop 侧边栏与搜索遗漏旧项目线程；[#23037](https://github.com/openai/codex/issues/23037) 远程 SSH 在 OpenSSH keyboard-interactive/PAM 下鉴权失败。

---

## 🛠️ 重要 PR 进展

> 多数 PR 由 `copyberry[bot]` 自动化合入，但仍代表 OpenAI 当下的产品方向

### 1. [#33467](https://github.com/openai/codex/pull/33467) — 移除 MCP 工具调用元数据中的 `template_id`
清理 MCP 工具调用与 app-server `McpToolCallAppContext` 中的 `template_id` 字段，简化协议与 SDK 视图。

### 2. [#33464](https://github.com/openai/codex/pull/33464) — 加固强制 `rm` 命令检测
扩展 Bash 解析，识别嵌套在控制流、替换、选项组合中的强制 `rm` 形式；由 #33455 backport 到 `release/0.144`，在 danger-full-access 模式下默认开启。

### 3. [#33459](https://github.com/openai/codex/pull/33459) — code 模式放宽图像生成超时
将初始与等待的 yield 调整到 120 秒，最后以 `generatedImage(result)` 返回结果，修复 #32153 类问题。

### 4. [#33457](https://github.com/openai/codex/pull/33457) — 回合历史摘要使用最终答案
仅将带 `final_answer` phase 的 Agent 消息记入回合终态摘要，剔除 commentary 类噪声。

### 5. [#33456](https://github.com/openai/codex/pull/33456) — 外部 Agent 迁移独立 crate
把外部 Agent 迁移逻辑从 `codex-app-server` 拆出到 `codex-external-agent-migration`，协议转换收敛在边界模块。配套 [#33444](https://github.com/openai/codex/pull/33444) 增加了 Memory 迁移。

### 6. [#33454](https://github.com/openai/codex/pull/33454) — 跟踪 Prompt Cache 写入 Token
解析并向上游协议、app-server、exec、TypeScript SDK 暴露 `cache_write_input_tokens`，提升成本可见性。

### 7. [#33445](https://github.com/openai/codex/pull/33445) — Windows 代理场景使用 elevated sandbox
为网络代理强制执行的命令选择 elevated 后端，保证 Windows 防火墙策略与受限沙箱一致；[#33446](https://github.com/openai/codex/pull/33446) 同步移除已废弃的 network proxy loader。

### 8. [#33432](https://github.com/openai/codex/pull/33432) — 子 Agent 继承分页历史
fork/spawn 子 Agent 时继承父端的分页历史与 model context，作为 inherited rollout prefix 持久化，子端排除该前缀避免重复上下文。

### 9. [#33426](https://github.com/openai/codex/pull/33426) — `/import` 增加 Cursor 支持
`/import` 流程扩展到 Cursor：设置、沙箱权限、MCP 服务器、项目指令、hooks、agents、commands、插件与最近会话均可导入。

### 10. [#33423](https://github.com/openai/codex/pull/33423) — 并发加载 executor 插件声明
MCP server 与 app connector 的声明文件并发读取，降低远端环境冷启动延迟。

> 其它值得关注：[#31781](https://github.com/openai/codex/pull/31781) 限制 executor HTTP 响应缓冲上限（OPEN，已 code-reviewed）；[#33424](https://github.com/openai/codex/pull/33424) OpenAI 文档 MCP 请求归属到 Codex；[#33425](https://github.com/openai/codex/pull/33425) 通过 world state 刷新 host skill 目录。

---

## 📈 功能需求趋势

通过对当日 50 条 Issue 标签与摘要的聚类，社区关注度集中在以下几个方向：

| 方向 | 典型议题 | 社区关注度 |
|---|---|---|
| **Windows 平台稳定性** | ARM64 闪退、WebView 崩溃、serialport 失败、git 进程泄漏 | ⬆️⬆️⬆️（多 Bug 集中爆发） |
| **多 Agent / Subagent 编排** | GPT-5.5/5.6 Sol 下 `spawn_agent` schema 不一致、MultiAgentV2 强启、`/agent` 选择器缺失 | ⬆️⬆️⬆️ |
| **上下文与 Token 可观测性** | 上下文/Token 指示器消失、Prompt Cache 计量、全 1.05M 上下文与可配置 compaction | ⬆️⬆️ |
| **新模型适配** | GPT-5.3 Codex Spark `reasoning.summary`、GPT-5.6 Sol 上下文/Agent 行为 | ⬆️⬆️ |
| **IDE/编辑器生态** | VS Code 扩展 webview 资产失败、Cursor 导入支持、PyCharm 集成 | ⬆️ |
| **安全 & 沙箱** | 危险 `rm` 形式检测、Windows 沙箱元数据路径、elevated sandbox 切换 | ⬆️ |
| **图片生成体验** | `image_gen` 输出丢失、Codex 模式超时调整 | ⬆️ |
| **远程 / SSH 工作流** | remote SSH keyboard-interactive 鉴权、symlink 路径"无聊天" | ⬆️ |

---

## 💬 开发者关注点

1. **"看不见"的成本与上下文**：Token 指示器（#23794）、cache 写入计量（#33454）、全 1.05M 上下文与 compaction 可配置（#33306）——开发者要求对资源消耗有更直观的掌控。
2. **Windows 桌面端质量**：连续多个 build（`26.707.9981.0`）出现 ARM64 崩溃循环、WebView 闪退、git 进程风暴、登录问题，**严重影响企业级 Windows 用户的稳定使用**。
3. **Agent 系统的可定制性**：用户希望能稳定地使用 `agent_type`、关闭强制 MultiAgentV2、按需关闭 60s 自动确认（#28969、#32782、#31097），凸显对"可控 Agent 行为"的需求。
4. **新模型灰度下的兼容性问题**：GPT-5.3/5.5/5.6 系列在 App/CLI/app-server 表面暴露参数与行为差异，开发者希望在版本更新日志中明确 Agent schema 与参数变化。
5. **跨工具互操作**：`/import` 接入 Cursor（#33426）、外部 Agent 迁移独立 crate（#33456/#33444）反映社区希望 **Codex 成为 Agent 工具链的入口**，而非孤岛。
6. **CLI / TUI 体验细节**：subagent 线程选择器、终端宠物动画（#33458）、图片粘贴（#15612）等小痛点积累，说明 CLI 用户对细节体验的期待持续提升。

---

> 📊 **日报小结**：今天的 Codex 处于"高强度 alpha + 平台质量救火"双线并行状态，建议关注 Windows 用户的回滚方案、以及 0.145 系列何时进入 beta 阶段。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-07-16
**项目**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布 `v0.52.0-nightly.20260716` 版本，社区重点围绕 **Subagent 行为异常** 与 **Auto Memory 系统质量** 展开讨论。安全方面，一个潜在的 Shell 变量展开绕过漏洞（GHSA-wpqr-6v78-jr5g 衍生）引发关注，PR #28403 已提交修复。整体来看，Agent 稳定性、内存系统健壮性与终端 UI 性能仍是当前的三大主线。

---

## 🚀 版本发布

### v0.52.0-nightly.20260716.g3ff5ba20f

由 [PR #28413](https://github.com/google-gemini/gemini-cli/pull/28413) 自动 bump 生成。核心改动来自 [PR #28407](https://github.com/google-gemini/gemini-cli/pull/28407)（已合并）：在 `core/a2a` 模块中对取消的工具响应进行分组、合并连续角色，避免在用户中断工具调用后继续对话时返回 `400 Bad Request`，显著改善了 chat 的连续性体验。

> 关注点：当前仍在 nightly 通道，**不建议生产环境升级**。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后误报 GOAL 成功（💬 10）
**P1 · area/agent · kind/bug**
`codebase_investigator` 子代理实际已达最大轮次限制，但仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了执行中断。**重要性**：直接破坏 Agent 行为可观测性，影响所有依赖子代理的复杂工作流。是当前讨论最热的子代理可靠性问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 挂死（💬 7 · 👍 8）
**P1 · area/agent · kind/bug**
最受欢迎 issue 之一：每当 Gemini CLI 委派给 generalist agent 时会无限挂起（最长观察 1 小时）。提示模型"不要使用 sub agent"可绕过。**社区反应**：8 个 👍 说明普遍遭遇，反映 sub-agent 分发逻辑存在严重缺陷。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与执行后意图路由（💬 8）
**P2 · area/agent · kind/enhancement · effort/large**
提议利用 Gemini 3 模型对原生 bash 的亲和性，构建无依赖的 OS 级沙箱和后置意图路由机制。**重要性**：架构级提案，直接关联 #21409 的根本解法方向。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 鲁棒的组件级评测体系（💬 7）
**P1 · area/agent · aiq/eval_infra**
作为 [Issue #15300](https://github.com/google-gemini/gemini-cli/issues/15300) 的后续，已生成 76 个 behavioral eval 测试、覆盖 6 个 Gemini 模型，目标是建立稳定的组件级评估基线。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取 / 搜索 / 映射（💬 7）
**P2 · area/agent · kind/feature**
Epic 级提案：通过 AST 工具精确读取方法边界、降低 token 噪声、加速导航。与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 的 CLI 工具选型（tilth / glyph）配套推进。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不主动调用 skills / sub-agents（💬 6）
**P2 · area/agent · kind/bug**
用户反馈即使定义了 `gradle`、`git` skills，模型也很少主动触发，除非显式指令。**重要性**：与 [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 形成互补——一边是过度委派挂死、一边是根本不愿委派，反映 agent 调度边界模糊。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 不应无限重试低信号会话（💬 5）
**P2 · area/agent · kind/bug**
Auto Memory 仅在提取代理成功 `read_file` 时才标记为已处理；若模型判断会话信号弱而跳过读取，会话会持续被重新列出，造成重复扫描。

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后仍卡在"Waiting input"（💬 4 · 👍 3）
**P1 · area/core · kind/bug**
简单 CLI 命令执行完成后，CLI 仍将其视为活跃并等待用户输入。影响所有 shell 工作流，是高频用户痛点。

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser Subagent 在 Wayland 下失败（💬 4）
**P1 · area/agent · kind/bug**
浏览器子代理在 Wayland 显示协议下直接失败，影响 Linux 桌面用户群。

### 10. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 增加确定性脱敏（💬 3）
**P2 · area/security · kind/bug**
当前提取 prompt 仅在内容进入模型上下文后才要求模型脱敏，敏感凭据（如 API key）有泄露风险。需要前置确定性脱敏 + 减少明文日志。

> 同主题相关：[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)（无效 inbox patch 静默丢弃）、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)（memory 系统质量总跟踪）。

---

## 🛠️ 重要 PR 进展（Top 10）

### 🔐 安全修复

- **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** — 拦截 `$VAR` 与 `${VAR}` 变量展开绕过（GHSA-wpqr-6v78-jr5g）
  `detectBashSubstitution()` 此前只拦截 `$()` 与反引号，普通变量展开可直接读取 `$GITHUB_TOKEN`、`${GEMINI_API_KEY}` 等敏感环境变量。**强烈建议尽快合并**。

- **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319)** — `a2a-server` 在加载环境前强制路径信任校验
  在 `CoderAgentExecutor` 中引入 `AsyncLocalStorage`（`envStorage`），隔离任务环境，防止工作区级 `.env` 被意外污染。

### ⚙️ 核心稳定性

- **[#28410](https://github.com/google-gemini/gemini-cli/pull/28410)** — 缩短 MCP `tools/list` 发现超时（**P1**）
  服务端不响应或返回错位 JSON-RPC id 时，启动会被静默冻结 10 分钟。改为快速失败，启动体验显著改善。

- **[#28407](https://github.com/google-gemini/gemini-cli/pull/28407)** *(已合并)* — 修复取消工具调用后 `400 Bad Request`
  在 `core/a2a` 中对取消的 tool response 分组并合并连续角色，是本次 nightly 版本的核心修复。

- **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)** — 单次用户请求递归推理硬限 15 轮
  防止 Agent 进入无限循环，保护本地 CPU 与 API 配额，可通过 `maxSessionTurns` 自定义。

- **[#28406](https://github.com/google-gemini/gemini-cli/pull/28406)** — 对 tool sub-agent 模型配置应用 `modelIdResolutions`（**P1**）
  修复 `web-search`、`web-fetch` 等工具对未开通 preview 模型的 API key 用户返回 `INVALID_MODEL` 的问题。

### 🖥️ UI / 体验

- **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)** — 修复滚动位置跳变（**P1**）
  在 `VirtualizedList.tsx` 中，`isStickingToBottom` 在用户向上滚动时被过早重置，导致内容更新时强制跳回底部。修复后滚动体验顺滑。

- **[#28386](https://github.com/google-gemini/gemini-cli/pull/28386)** — VSCode 配套扩展正确跟踪 activation disposables
  修复由于 JS 逗号表达式导致只有最后一个 Disposable 被追踪的隐患。

### 📦 依赖与基础设施

- **[#28275](https://github.com/google-gemini/gemini-cli/pull/28275)** — 让 GCP 直连 telemetry exporter 变为可选
  将 `@google-cloud/logging`、`opentelemetry-cloud-monitoring-exporter` 等移出 `@google/gemini-cli-core` 运行时依赖，减少下游消费者的依赖负担。

- **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305)** — 为 evals 增加 tool call 时间线格式化与失败摘要
  eval 失败时自动打印编号化的工具调用时间线（含参数、状态、错误详情），大幅提升排错效率。

---

## 📈 功能需求趋势

从过去 24 小时的 50 条 issue 与 19 条 PR 中，可以提炼出以下 5 个最强烈的需求方向：

| 方向 | 代表性 Issue / PR | 热度 |
|---|---|---|
| **Agent 调度与可观测性** | #22323, #21409, #21968, #22598 | 🔥🔥🔥 |
| **Auto Memory 质量与隐私** | #26522, #26523, #26525, #26516 | 🔥🔥🔥 |
| **AST 感知的代码工具链** | #22745, #22746 | 🔥🔥 |
| **终端 UI 性能** | #21924, #28405, #24935, #28224 | 🔥🔥 |
| **安全与沙箱化** | #28403, #28319, #19873 | 🔥🔥 |

> 一个清晰信号：**Subagent 已经从"加分项"变成"核心基础设施"**——围绕它的 bug、可见性、调度策略讨论占比最高。

---

## 💡 开发者关注点

综合 issue 评论与 PR 讨论，开发者社区目前聚焦以下几个痛点：

1. **Agent 行为的"诚实性"**
   - 用户强烈要求终止状态、轮次限制、子代理轨迹必须如实上报（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）。"成功" 的语义必须可信任。

2. **Shell 与浏览器子代理的鲁棒性**
   - 卡在 "Waiting input"、Wayland 下失败、settings.json override 失效等 [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) 都指向"现实世界环境复杂性"。

3. **Auto Memory 的安全性与可控性**
   - 多个相关 issue 集中在 [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) tracker 下，开发者对 memory 自动提取的"反复重试无效会话"、"静默丢弃 patch"、"敏感凭据脱敏"等问题高度敏感。

4. **递归 / 无限循环防护**
   - [PR #28164](https://github.com/google-gemini/gemini-cli/pull/28164) 的存在说明，社区已经在主动要求工程化保护用户资源，而非依赖 prompt 工程。

5. **本地化配置可追溯**
   - symlink 不被识别为 agent [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)、带注释的 `settings.json` 被静默忽略 [#28219](https://github.com/google-gemini/gemini-cli/pull/28219)——这些"小坑"在 dotfiles 文化浓厚的开发者社区里被放大。

---

*日报基于 2026-07-16 当日 GitHub 数据自动生成。所有链接均指向 `google-gemini/gemini-cli` 仓库对应条目。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-16**

---

## 📌 今日速览

今日 GitHub Copilot CLI 发布了 **v1.0.71** 及补丁 **v1.0.71-3**，重点修复了 `copilot -p --autopilot` 后台任务挂起、subagents 模型选择器状态丢失，以及非法 `settings.json` 的诊断体验。社区讨论的焦点仍然集中在 **MCP 集成**（尤其是 OAuth 认证链路断裂）、**Voice 模式稳定性** 和 **1M 上下文窗口能力** 三大方向，同时出现了两起高优先级的输入体验与数据丢失问题（#4147、#4146），值得关注。

---

## 🚀 版本发布

### v1.0.71（2026-07-16）
- **`copilot -p --autopilot`** 不再因后台 shell / agent 存活而无限挂起，现已遵循 `COPILOT_TASK_WAIT_TIMEOUT_SECONDS` 超时策略，与普通 `-p` 一致。
- **/subagents 模型选择器**：重新打开时会保留每个 agent 上次选定的 reasoning effort 与 context tier，避免重复配置。
- 其余依赖刷新（Refresh）。

### v1.0.71-3（补丁，2026-07-16）
- **诊断改进**：启动时若 `settings.json` 包含非法值，CLI 现在会以告警形式指出**具体出错的字段**，而非静默忽略。
- **/terminal-setup**：对不具备真实 kitty 键盘协议支持的终端不再跳过安装流程。

---

## 🔥 社区热点 Issues

| # | Issue | 关注度 | 重要性说明 |
|---|-------|--------|------------|
| [#223](https://github.com/github/copilot-cli/issues/223) | 组织级 fine-grained token 缺少 "Copilot Requests" 权限 | 👍76 · 💬31 | **企业级长期痛点**。企业希望统一管控自动化认证，但当前 PAT 选项对 org-owned token 不可见。更新于 7-15。 |
| [#1979](https://github.com/github/copilot-cli/issues/1979) | **远程会话**：支持从手机 / 浏览器附加到 CLI 会话 | 👍53 · 💬4 | 呼声极高的"类 Claude Code Remote"能力。本次已 **CLOSED**，意味着官方可能已纳入路线图。 |
| [#2785](https://github.com/github/copilot-cli/issues/2785) | Claude Opus 4.7 1M 上下文窗口（与 Claude Code 拉齐） | 👍62 · 💬1 | 强烈社区共识，👍 仅次于 #223。已 **CLOSED**，推测已实现或排期。 |
| [#1477](https://github.com/github/copilot-cli/issues/1477) | "Continuing autonomously (3 premium requests)" 在模型完成后仍持续 | 👍18 · 💬11 | 多用户反馈的额度/状态机异常。已 **CLOSED**。 |
| [#2052](https://github.com/github/copilot-cli/issues/2052) | 持久化的 token / context 使用率指示器（状态栏） | 👍19 · 💬3 | 开发者长期呼声：希望像 IDE 一样实时查看上下文窗口占用。已 **CLOSED**。 |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice 模式：所有内置 ASR 模型静默失败（Foundry Local MultiModalProcessor 路由 bug） | 💬8 | 影响 `/voice` 全部三个模型，影响面广。 |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | 第三方 MCP server：UI 显示已连接但 CLI 会话中无工具（OAuth token 未桥接） | 💬5 · 👍2 | Atlassian Remote MCP 的代表性故障，已与 #4089、#4084、#4086 形成 MCP-OAuth 故障群。 |
| [#4097](https://github.com/github/copilot-cli/issues/4097) | `apply_patch` 将删除的二进制写入会话历史，超 CAPI 5MB 上限 | 💬2 · 👍1 | 隐蔽但严重的会话膨胀问题，会导致 `/compact` 之后仍无法恢复。 |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | BYOK（`COPILOT_PROVIDER_*`）在 `--acp` 模式下被拒（1.0.61–1.0.68 回归） | 💬2 · 👍3 | 自定义模型提供方用户的硬阻断，已是第三次同类回归。 |
| [#4147](https://github.com/github/copilot-cli/issues/4147) | **高优先级**：裸左/右方向键劫持用于会话导航，导致正在输入的内容被丢弃 | 🔴 新建 | 触发双击即开新会话，造成**实际数据丢失**。 |
| [#4146](https://github.com/github/copilot-cli/issues/4146) | `/resume` 会话选择器选中态几乎不可见 | 🆕 新建 | 同终端下"信任文件夹"选择器正常反白显示，证明是 picker 自身的样式 bug。 |

> 备注：另有 #1069（编辑快捷键 Readline/Emacs 风 格）、#4034（hook 子进程 stdin 未关闭导致 `$(cat)` 模式卡死）、#1487（Codex 5.3 缺失 reasoning 输出）、#1610（Opus 4.6 1M 上下文）也均在今日状态更新并被关闭。

---

## 🛠 重要 PR 进展

**过去 24 小时内无新增 / 更新的 Pull Request。**

不过从已 **CLOSED** 的 issue 来看，多项修复与功能很可能已合入主干或对应 PR：
- #1979（远程会话）、#2785（Opus 4.7 1M 上下文）、#2052（token 使用率指示器）、#1477（autopilot 状态机）、#1487（Codex 5.3 reasoning）、#1069（快捷键 Readline 风格）、#4136（聊天框折叠前导空白）均显示为已关闭，建议关注后续 release notes 与 changelog。

---

## 📈 功能需求趋势

通过对全部 50 条近期 issue 的聚类，社区关注点呈现以下结构：

1. **🔌 MCP 生态成熟度**（占比最高）
   - OAuth 流程断链（Atlassian / Work IQ / Azure AD / 自定义 HTTP server）
   - 工具列表分页（`nextCursor`）未遵循规范（#4006）
   - 重复 stdio 进程残留（#4049）
   - 插件交互式输入变量 `${input:...}` 支持（#4042）
   - Research subagent 可配置 MCP 工具（#4076）

2. **🧠 模型能力对齐**
   - Opus 4.7 1M 上下文、Codex 5.3 reasoning 输出、BYOK 在非交互模式的回归 — 用户期望 CLI 与 Claude Code / VS Code Copilot **能力拉齐**。

3. **🗣 语音 / 多模态体验**
   - `/voice` 路由 bug（#4024）、push-to-talk 丢字（#3896），是较新的产品线但 bug 密度较高。

4. **📊 可观测性 & 上下文管理**
   - 持久化 token 使用率（#2052 已 CLOSED）、`apply_patch` 写入大体积文本导致 CAPI 5MB 限制（#4097）。

5. **🔐 权限 / 认证**
   - 组织级 fine-grained token（#223）、BYOK 在 ACP 模式（#4016）。

6. **📱 远程 / 跨端会话**
   - 移动 / 浏览器附加（#1979 已 CLOSED）。

---

## 💬 开发者关注点

综合 issue 评论与 👍 数据，开发者最集中的痛点与诉求是：

- **MCP 是核心瓶颈**：当前 MCP 集成的 OAuth、token 桥接、连接生命周期管理在 1.0.6x–1.0.7x 期间反复出现问题，已经形成一条"几乎所有第三方 server 都会踩"的故障带，是企业落地的最大阻碍。
- **与竞品能力对标**：开发者明确将 Copilot CLI 与 Claude Code 对照，期待在 **1M 上下文、远程会话、token 状态栏、Readline 快捷键** 等"成熟 IDE / CLI 应有的能力"上不落下风。
- **回归控制不足**：BYOK、`/acp`、hook 子进程、subagents 模型选择器等多个老问题以"修复-回归"循环出现，开发者呼吁更严格的 release gating。
- **输入与可访问性**：裸方向键误触（#4147）、`/resume` 选择器不可见（#4146）、聊天框折叠缩进（#4136）显示 **TUI 细节体验**成为新热点，且直接影响数据安全。
- **平台与文件系统的边角案例**：NFS/GPFS 上的 TUI 挂起（#4053）、Windows 渲染错乱（#4014）、Docker stdio MCP 重复（#4049）反映 CLI 在**异构生产环境**下的鲁棒性仍有缺口。
- **诊断友好度提升**：v1.0.71-3 中"非法 settings.json 给出具体字段"的改动方向被开发者普遍认可，建议推广到 MCP 配置、plugin 配置等更多解析路径。

---

*本日报基于 github.com/github/copilot-cli 过去 24 小时公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-07-16
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日 Kimi CLI 仓库活跃度处于近期的低点，**过去 24 小时内无新 Release、无新 Issue 更新，仅有 1 条 PR（#2500）被更新**。该 PR 聚焦于遥测（telemetry）事件与 TypeScript schema 对齐，体现出团队在跨语言可观测性（observability）基础设施上的持续打磨。整体来看，开发活动处于一个相对"沉淀期"——没有面向终端用户的功能上线，但底层数据契约的一致性工作仍在稳步推进。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内未检测到任何 Release 活动。

> 💡 建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新版本信息。

---

## 3. 社区热点 Issues

**过去 24 小时内无新 Issue 更新。** 由于今日 Issues 板块完全静默，无法按常规方式筛选热点条目。

建议读者参考以下常驻渠道以获取社区讨论：
- [Open Issues 总览](https://github.com/MoonshotAI/kimi-cli/issues)
- 历史高频标签通常涵盖：模型支持扩展、CLI 交互体验、配置灵活性、错误提示可读性等方向

---

## 4. 重要 PR 进展

### 🔹 PR #2500 — `feat(telemetry): align events with TS schema, add trace_id and missing events`

- **作者**: [@7Sageer](https://github.com/7Sageer)
- **状态**: OPEN
- **链接**: [MoonshotAI/kimi-cli#2500](https://github.com/MoonshotAI/kimi-cli/pull/2500)
- **创建/更新时间**: 2026-07-15
- **👍 数**: 0

**变更要点**：

1. **遥测事件契约对齐**
   将 Python 端的遥测事件与 `agent-core-v2` 的 `events.ts`（TypeScript 重写版本的 event registry）保持一致，跨语言端到端的可观测性数据由此具备统一语义。

2. **新增 `trace_id` 透传能力**
   - 在 Kimi provider 端通过 `with_raw_response` 捕获响应头 `x-trace-id`
   - 同时覆盖 **流式（stream）** 与 **非流式（non-stream）** 两种调用路径
   - 为后续链路追踪（distributed tracing）与问题定位提供了基础字段

3. **补齐缺失事件**
   同步补齐 TS 端已定义但 Python 端尚未实现的若干事件，补全事件覆盖度。

**值得关注的原因**：
- 跨语言一致性是 Kimi 整体"Python + TS"双轨架构演进的关键一步
- `trace_id` 的引入将显著提升线上问题排查效率，对使用 Kimi API 的开发者是间接利好
- 属于底层基建类变更，合并后通常会随下一次小版本发布

> 📌 由于过去 24 小时仅此 1 条 PR 更新，无法提供更多条目；如需了解近期全量 PR 进展，请查看 [Pull Requests 列表](https://github.com/MoonshotAI/kimi-cli/pulls)。

---

## 5. 功能需求趋势

受限于今日 Issues 数据为 0，**无法基于新数据做趋势分析**。结合 PR #2500 的方向，仍可观察到一个持续性的工程主线：

| 方向 | 体现 | 备注 |
|------|------|------|
| **可观测性 / 遥测基建** | PR #2500 新增 `trace_id`、事件对齐 TS schema | 长期方向，预计后续还有 batch 补齐 |
| **跨语言架构一致性** | Python ↔ TS event registry 对齐 | 表明双客户端/双核心策略仍处演进期 |
| **质量与排障能力** | 通过 `x-trace-id` 打通请求级追踪 | 利好 B 端用户与二次开发者 |

---

## 6. 开发者关注点

由于今日无新 Issue，无法直接归纳开发者提交的痛点。**基于 PR #2500 的间接信号**，可以推断团队当前关注：

- 🔍 **请求级可追踪性**：通过 `trace_id` 串联一次 Kimi 调用的完整链路（请求 → provider → 上游）
- 🧩 **事件 schema 统一**：避免 Python 与 TS 端事件命名/字段分歧导致的分析复杂度
- 🛠️ **可观测性先行**：在功能快速迭代的同时，为未来的监控、计费、A/B 测试等场景铺路

> 💡 **给社区的提示**：如果你正在使用 Kimi CLI 并遇到难以定位的问题，未来版本或将提供更友好的 `trace_id` 透出，方便在 issue 中提交完整链路信息以加速排查。

---

## 📊 数据小结

| 指标 | 数量 |
|------|------|
| 新 Release | 0 |
| 新/更新 Issues | 0 |
| 新/更新 PR | 1 |
| 仓库整体活跃度 | 低（静默期） |

> ⚠️ **声明**：本期日报基于过去 24 小时的 GitHub 公开数据生成。如当天有大量开发活动发生在非公开渠道（如内部 review、企业版分支），本报告无法覆盖。

---

*报告生成时间: 2026-07-16 | 数据口径: GitHub Public API*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：** 2026-07-16
**数据来源：** github.com/anomalyco/opencode

---

## 1. 今日速览

今日的核心矛盾高度集中：**v1.18.x 引入的"新版桌面布局"引发了用户大规模反弹**，围绕 Tab 显示、Plan/Build 模式切换、聊天记录丢失等问题爆发了 10+ 主题；同时社区集中提交了一批针对会话压缩（compaction）溢出、提示注入安全、WebFetch 权限范围等问题的修复 PR。维护团队当日下午已合并多个紧急修复，预计 v1.18.3 将很快释出。

---

## 2. 版本发布

### v1.18.2（已发布）

**Core**
- 🐛 **Bugfix**：默认禁止子代理（subagent）嵌套调用子代理，新增 `subagent_depth` 可配置上限，避免无限递归消耗资源。
- 🔧 **改进**：优化 Meta 系列模型的默认推理深度（reasoning depth）。

**Desktop**
- ✨ **Improvements**：新增 `Mod+N` 快捷键打开新标签页。
- 🐛 **Bugfixes**：（详见 release notes）

> ⚠️ 提示：v1.18.1 的"新布局设计（newLayoutDesigns: true）"在社区引发强烈争议（见下文 Issue #36936 / #36997），v1.18.2 尚未明确回滚 UI，建议等待后续补丁。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|-----------|
| [#36936](https://github.com/anomalyco/opencode/issues/36936) | **Desktop: 新版 Tab 布局让会话标题无法显示** | 💬14 / 👍11 | 本周最热 Issue。v1.18.x 新布局强制窄宽水平 Tab，用户根本无法看清会话标题。回退 v1.17 即修复，强烈质疑设计变更的合理性。 |
| [#36997](https://github.com/anomalyco/opencode/issues/36997) | **Bug: 新布局隐藏了 Plan/Build 模式切换按钮** | 💬9 / 👍2 | 与上一条同源的 UI 回归，Plan 与 Build 切换 UI 完全看不到，Tab 键也无法补偿，影响用户主动控制模型行为。 |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **FEATURE: 保留旧版布局选项** | 💬7 / 👍7 | 高赞功能请求，明确列出旧布局的 5 项优势（主窗口快速访问、工作空间管理、标题可读等），要求提供"旧/新"可切换开关。 |
| [#24036](https://github.com/anomalyco/opencode/issues/24038) | **Claude ACP 协议支持（已关闭）** | 💬6 / 👍6 | 讨论 Claude 通过 Agent Client Protocol 接入的能力，正式关闭意味着已落地或已规划替代方案。 |
| [#37063](https://github.com/anomalyco/opencode/issues/37063) | **从 v1.17.18 升 v1.18.1 后历史聊天记录不显示** | 💬5 / 👍0 | 升级事故：约 1100 个会话在升级后"消失"，是 P0 级数据完整性问题。 |
| [#37158](https://github.com/anomalyco/opencode/issues/37158) | **Plan/Build 模式按钮消失（已关闭）** | 💬5 / 👍0 | 与 #36997 同问题的另一报告，已被快速关闭，预期 v1.18.2/3 修复。 |
| [#13946](https://github.com/anomalyco/opencode/issues/13946) | **opencode run 在 compaction 后异常退出** | 💬4 / 👍0 | 长期未解的核心 Bug：headless 模式下 compaction 后进程以 exit 0 退出，导致 CI/CD 流水线静默失败。 |
| [#10634](https://github.com/anomalyco/opencode/issues/10634) | **Compaction 溢出检查未覆盖大工具输出** | 💬4 / 👍6 | Subagent 返回 50–100k token 结果时，finish-step 检查只看当前步，致上下文溢出+压缩失稳。 |
| [#35013](https://github.com/anomalyco/opencode/issues/35013) | **Fable/Zen 请求 400 绕过自动压缩** | 💬4 | V2 在 Fable long session 下，request byte envelope 超限但未触发 auto-compaction，需手动介入。 |
| [#36942](https://github.com/anomalyco/opencode/issues/36942) | **FEATURE: 垂直 Tab** | 💬4 / 👍5 | 新 UI 强制水平 Tab 一次只能看 5 个会话，请求支持垂直布局。 |

---

## 4. 重要 PR 进展（精选 10 条）

### 🚨 紧急修复（直接回应本周 Issue）

| PR | 内容 | 状态 |
|----|------|------|
| [#37198](https://github.com/anomalyco/opencode/pull/37198) | **`fix(app): show selector for custom agents`** — 当项目配置了可选择的 custom agents 时强制显示 agent 选择器，隐藏时自动 fallback 到 build agent。**直接修复 #36997 / #37158 的 Plan/Build 模式不可见问题**。 | ✅ 已合并 |
| [#37129](https://github.com/anomalyco/opencode/pull/37129) | **`fix(app): default advanced features for new users`** — 新安装用户默认隐藏文件树、搜索、状态栏与 agent 选择器；老用户升级时一次性启用，回避"老用户看不到熟悉 UI"的升级阵痛。 | ✅ 已合并 |
| [#37195](https://github.com/anomalyco/opencode/pull/37195) | **`tweak: 调整 compaction 明确指示对话历史`** — 改善压缩后用户对上下文的可读性。 | ✅ 已合并 |

### 🔒 安全相关

| PR | 内容 | 状态 |
|----|------|------|
| [#37187](https://github.com/anomalyco/opencode/pull/37187) | **`fix: 为指令边界添加 marker，防止 Prompt Injection`** — 在 AGENTS.md / config.instructions 与 Read 工具的文件内容之间注入语义边界，避免恶意文件内容劫持 LLM 指令。**强烈建议各 plugin 作者关注此变更**。 | ✅ 已合并 |
| [#37182](https://github.com/anomalyco/opencode/pull/37182) | **`fix(webfetch): always-allow 限定到当前域名`** — 修复原先"始终允许"等价于 `*` 通配符，导致一次放行即开放所有 URL 的安全/隐私问题；新增 `originPattern()` 工具与 6 个单元测试。 | ✅ 已合并 |

### 🛠 核心稳定性

| PR | 内容 | 状态 |
|----|------|------|
| [#37194](https://github.com/anomalyco/opencode/pull/37194) | **`fix(session): resolve session overflow detection timing gaps`** — 修复 isOverflow 仅检查上一步、usable 上限 20K、压缩静默停止等多个时机问题；CLOSE 关联多条 compaction issue。 | ✅ 已合并 |
| [#37185](https://github.com/anomalyco/opencode/pull/37185) | **`fix(tui): 自定义工具加载失败时发布 Session.Event.Error`** — 与 plugin/skill 加载错误处理保持一致，让 TUI 能向用户暴露加载失败。 | ✅ 已合并 |
| [#37190](https://github.com/anomalyco/opencode/pull/37190) | **`fix(notification): WSL server 未就绪时优雅降级`** — 解决 #37171 报告的"Notification server not found: wsl:Ubuntu"启动崩溃。 | ✅ 已合并 |

### 🧱 重构 / 重大变更

| PR | 内容 | 状态 |
|----|------|------|
| [#37181](https://github.com/anomalyco/opencode/pull/37181) | **`refactor(core): system prompts 通过插件选择`** — 将 OpenAI/Google/Anthropic/Kimi/Arcee/Meta 各家 system prompt 拆为细粒度内置插件；统一 GPT 与 Codex 归 OpenAI，移除 Beast prompt，恢复 V1 的 Muse Spark。 | ✅ 已合并 |
| [#37170](https://github.com/anomalyco/opencode/pull/37170) | **`merge dev into v2`** — 将 dev 分支（桌面 Tab 推进、release 版本号、FSUtil 容错、subagent 深度限制、provider 默认调优、文档）合入 v2，移除过时的 `packages/llm`。 | ✅ 已合并 |

---

## 5. 功能需求趋势

从 50 条 Issue 中提炼出 **5 大社区诉求**：

1. **🔁 UI / 布局控制权回归（最热）**
   垂直 Tab、保留旧布局、Tab 标题可读——本质诉求是"UI 变更应提供开关"。相关: #36936 / #36997 / #37012 / #36942。

2. **🤖 Agent 可见性与可控性**
   恢复 Plan/Build 切换按钮、按项目显示 agent selector、自动生成 session 标题、per-session MCP 选择——开发者希望"对运行中的 agent 行为有更细的控制"。相关: #30926 / #37168 / #37158 / #37163。

3. **📦 V2 provider / config 稳定性**
   自定义 provider（LM Studio 等 no-auth）在 env 缺失时静默丢失、内置 LM Studio 模型列表未自动同步——V2 配置层面急需修复。相关: #37144 / #34305。

4. **📚 会话压缩 (compaction) 健壮性**
   跨 multiple token/byte 边界、subagent 大输出、long session 场景下的 compaction 失稳——属于高难度但影响生产可用性的核心工程。相关: #13946 / #10634 / #35013 / #32656 / #17340 / #14562。

5. **🧩 编辑器式体验**
   内置文件编辑器、工具/插件返回的图片渲染、IME 适配（中文拼音等）——"OpenCode 不只是 CLI，它要成为一个 IDE-like 环境"的诉求日益突出。相关: #26970 / #21227 / #37167。

---

## 6. 开发者关注点与痛点

| 主题 | 具体反馈 |
|------|---------|
| **🚨 升级即"丢数据" / 找不到 UI** | 至少 3 条独立报告（#37063、#36997、#37158）：从 v1.17 升级到 v1.18.x 后历史会话消失或模式按钮消失。**对生产用户影响极大**，维护者需要建立"UI 重大变更需提供开关 + 升级前 changelog 提示"的规范。 |
| **🪲 Headless 模式静默失败** | `opencode run` 在 compaction 后退出码 0，但实际任务未完成（#13946）。CI/批处理流水线中最危险的一类 bug——必须改进退出码语义。 |
| **🔐 安全纵深不足** | 同一批次合并的 WebFetch "始终允许"过宽（#37183/#37182）和 Prompt Injection 风险（#37187）暴露 OpenCode 在"用户控制指令边界"上的早期设计缺陷，建议所有 plugin 维护者跟进这两个补丁的 pattern。 |
| **⚙️ V2 provider/config 兼容 V1** | V2 config 中"无 env 字段的 provider 被静默丢弃"（#37144）属于典型的 breaking change 未说明，社区期待 V1→V2 迁移指南与运行时 warning。 |
| **🐢 启动性能** | `.opencode/node_modules/` 扫描未遵守 `.gitignore`（#30337）导致启动挂死——大型 monorepo 用户痛点。 |
| **🧪 缺失的文件/测试覆盖率反馈** | 多个 issue 要求"附带复现最小仓库"，说明社区已习惯 issue-driven 沟通，维护者响应速度普遍较快（T+1 内合并）。 |

---

### 📌 分析师建议

1. **若你仍在 v1.17.x**：可暂时保留，新版升级建议等到包含 #37198 / #37129 / #37129 修复的 v1.18.3 或更高版本。
2. **若已在 v1.18.x Desktop 体验中**：关注 [#37012](https://github.com/anomalyco/opencode/issues/37012) 看是否合并"legacy layout 开关"提案，可手动 star 表达诉求。
3. **plugin 作者**：跟进 [#37187](https://github.com/anomalyco/opencode/pull/37187) 的 prompt injection 边界模式，并在你的 skill/plugin 输出中加入相同 marker，否则可能被新版本识别为可疑内容。

---

*本日报基于截至 2026-07-16 的 GitHub 公开数据整理；自动汇总，issue/PR 链接随时可点击跳转核对。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-16

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) (关联仓库: earendil-works/pi)

---

## 📌 今日速览

今日社区活跃度集中在 **OpenAI Codex 连接可靠性**（#4945，单帖 75 条评论、30 点赞，仍为头号热点）与 **多 Provider 认证/Session 管理问题**两条主线。Windows 平台下的若干兼容性问题（taskkill ENOENT、终端标题、扩展路径）得到集中修复，多个相关 PR 已合并或关闭。

---

## 📦 版本发布

过去 24 小时内 **无新版本发布**。最近可关注版本仍为 `0.80.7`（前序日报已记录 6657、6686、6689 等多类问题在其之上复现）。

---

## 🔥 社区热点 Issues（Top 10）

1. **#4945 — [OPEN/inprogress] openai-codex Connection Reliability Issues** [🔗](https://github.com/earendil-works/pi/issues/4945)
   `gpt-5.5` / `openai-codex` 在 TUI 中偶发卡死 `Working...`，无文本/工具/错误流，需按 Esc 才能恢复。本周 75 评论 + 30 点赞，**长期未根治** 的 P0 级稳定性问题。

2. **#5263 — [OPEN] 让 in-session 的 model / thinking-level 变更默认为 ephemeral** [🔗](https://github.com/earendil-works/pi/issues/5263)
   提议将单次会话内的设置改动隔离，仅在 `/settings` 显式入口修改全局默认。7 赞，社区普遍认为这能避免"改了 thinking level 后忘了关"的尴尬。

3. **#6050 — [CLOSED/no-action] TUI 全量重绘会清空终端 scrollback** [🔗](https://github.com/earendil-works/pi/issues/6050)
   自定义 UI 频繁触发 redraw 时终端滚动条会被弹回顶部。14 条评论，根因在核心 TUI 渲染器。**已标 no-action**，短期无修复计划。

4. **#2310 — [CLOSED] 新增 flake.nix 支持** [🔗](https://github.com/earendil-works/pi/issues/2310)
   为 Nix/NixOS 用户提供 `nix run github:badlogic/pi-mono` 安装方式。**16 点赞为本日最高**，合并后对 Linux 高级用户友好度显著提升。

5. **#6657 — [OPEN/bug/inprogress] Bedrock AWS_PROFILE 认证失败（403）** [🔗](https://github.com/earendil-works/pi/issues/6657)
   即便 0.80.7 已合并 #6531 的修复，AWS_PROFILE 仍报 `AccessDeniedException`，Bedrock 接入仍是高频踩坑点。

6. **#6686 — [CLOSED] Pi 自动登出 GitHub** [🔗](https://github.com/earendil-works/pi/issues/6686)
   跨 macOS / Linux 重现（0.80.7），15–30 分钟后 GitHub Copilot token 失效。是 #2725 的回归延续，提示 OAuth token 续期逻辑仍需审视。

7. **#6619 — [OPEN/bug/inprogress] Windows 下 npm 依赖扩展在 banner 中显示绝对路径** [🔗](https://github.com/earendil-works/pi/issues/6619)
   `pi install npm:avtc-pi-user-decisions` 等 Windows 场景的展示 bug，已被 #6680 部分修复。

8. **#6596 — [OPEN] fix: `spawn(taskkill)` ENOENT on Node.js 24** [🔗](https://github.com/earendil-works/pi/issues/6596)
   提议改用 System32 绝对路径 + 监听 `error` 事件。**#6692 已合并**，是 Windows 进程管理的关键修复。

9. **#6673 — [CLOSED] OpenAI Codex 透传 Cloudflare 520 原始 HTML（含客户端 IP）** [🔗](https://github.com/earendil-works/pi/issues/6673)
   **安全/隐私问题**：错误信息把用户出口 IP 和 Cloudflare Ray ID 直接写入 session JSONL。强烈建议脱敏后回写。

10. **#6212 — [OPEN] Bedrock 应支持 `compat.forceAdaptiveThinking` 显式开关** [🔗](https://github.com/earendil-works/pi/issues/6212)
    `bedrock-converse-stream` 的 adaptive-vs-legacy 思考模式目前依赖硬编码 substring 名单。提案通过 `model.compat` 提供声明式入口。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **#6692 — [CLOSED] fix: taskkill/rundll32 使用 System32 绝对路径** [🔗](https://github.com/earendil-works/pi/pull/6692)
   修复 Node 24 + System32 不在 PATH 场景下的 `spawn ENOENT`，并把 `error` 事件纳入错误传播链路，彻底解决原 try/catch 捕获不到的崩溃。

2. **#6651 — [OPEN] feat(ai): xAI 设备码 OAuth + grok-4.5 走 Responses API** [🔗](https://github.com/earendil-works/pi/pull/6651)
   新增 `XAI_API_KEY` 之外的设备码登录通道，并将仅 `grok-4.5` 路由到 Responses（low/medium/high reasoning），其余 xAI 模型保留 Completions。关 #6461。

3. **#6681 — [CLOSED] windows: 检查 npm 包后恢复终端标题** [🔗](https://github.com/earendil-works/pi/pull/6681)
   修复 #6629：`PackageManager.getLatestNpmVersion()` 调用 `npm view ...` 后 cmd 标题被永久改写的小但烦人的问题。

4. **#6671 — [OPEN] 给 branch summary / compaction / tool result 加 usage 元信息** [🔗](https://github.com/earendil-works/pi/pull/6671)
   让 token 用量在分支摘要、压缩记录、工具结果上可见，便于成本/上下文审计；并提议把 `usage?` 字段加入 `ToolResultEvent`。

5. **#6683 — [CLOSED] fix: 接受冒号限定的 skill 名** [🔗](https://github.com/earendil-works/pi/pull/6683)
   `inc:ship-it` 这类插件命名空间下的 skill 不再被启动日志误报为 `[Skill conflicts]`。

6. **#6594 — [OPEN] feat: SQLite session 存储** [🔗](https://github.com/earendil-works/pi/pull/6594)
   引入 `retainedTail`、`getPathToRootOrCompaction` 等设计，避免压缩前回溯时重复读 2000 token 老节点。**为大规模 session 性能/可扩展性奠基**。

7. **#6680 — [OPEN] 解析依赖扩展时的包名** [🔗](https://github.com/earendil-works/pi/pull/6680)
   部分修复 #6619，Windows 端 banner 展示更友好。

8. **#6533 — [CLOSED] fix: Codex compaction 对 gpt-5.6-luna 返回 Model not found** [🔗](https://github.com/earendil-works/pi/pull/6533)
   Codex 内部把模型 ID 映射为带 tier 后缀的 slug，其 no-tools 注册表无法识别。手动 `/compact`、自动压缩和分支摘要均受影响——已修复。

9. **#6216 — [OPEN] feat: Amazon Bedrock Mantle OpenAI Responses provider** [🔗](https://github.com/earendil-works/pi/pull/6216)
   借助 OpenAI 官方 Bedrock 适配器接入 Bedrock Mantle 的 Responses API，扩展 AWS 模型生态。

10. **#6667 — [CLOSED] fix(tui): Box / Container 在 render/invalidate 中对 null 子节点加保护** [🔗](https://github.com/earendil-works/pi/pull/6667)
    扩展安装/卸载后遗留的 stale 引用会触发 `Cannot read properties of undefined (reading 'render')`，本次加入 null 守卫。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue/PR | 趋势判断 |
| --- | --- | --- |
| **Provider / 模型生态扩展** | #6651 (xAI)、#6216 (Bedrock Mantle)、#6212 (Bedrock adaptive thinking) | 多云、多模型接入仍是核心增长点 |
| **Session 管理能力** | #6674 (浏览/归档/重命名)、#6594 (SQLite 存储)、#6690 (回放顺序) | 从"线性聊天"转向"可组织的工作区" |
| **扩展 API 增强** | #6693 (stream_chunk hook)、#6684 (重试控制暴露)、#6688 (ExtensionSelector 视口)、#6687 (事件类型导出)、#6694 (RPC 输出关联) | 扩展作者对实时性、可观测性、类型完备性的要求显著提高 |
| **TUI 渲染质量** | #6050 (scrollback)、#6682 (代码块边框)、#6667 (null 守卫) | 细节体验被持续打磨 |
| **包管理 / 安装体验** | #2310 (flake.nix)、#4530 (monorepo 子目录)、#6683 (skill 命名) | 安装/分发/命名空间规范化是高频需求 |
| **可靠性 & 重试** | #4945、#6647 (压缩重试)、#6639 (重复压缩) | 流式失败、压缩失败等"沉默错误"需要统一的可重试语义 |

---

## 🧑‍💻 开发者关注点 / 痛点

1. **OpenAI Codex 仍是最大不确定性来源**：从连接卡死（#4945）、错误信息

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-07-16**

---

## 📌 今日速览

今日 Qwen Code 主线持续推进 **Daemon 多工作区架构演进**（multi-workspace daemon、ACP Streamable HTTP、deep health 聚合），Web Shell 在交互体验上迎来一波密集增强（鼠标选择、分屏配色、视觉对比 CI）；同时默认模型正从 `qwen3.5-plus` 升级至 `qwen3.7-max`，并伴随多项安全与稳定性修复。

---

## 🚀 版本发布

- **v0.19.10-nightly.20260716.506ce0a1a**：nightly 渠道发布，本次变更包含 PR #6848 限制 review PR 范围，以及 `feat(web-shell): add workspace path l...` 等 Web Shell 相关功能。
- **cua-driver-rs v0.7.2**：CUA（Computer Use Agent）驱动预编译二进制升级至 **relative-coordinate fork** 版本，macOS 提供已签名 + 公证的 universal binary + `QwenCuaDriver.app`；Linux/Windows 仍为未签名（x86_64 + arm64）。

---

## 🔥 社区热点 Issues（精选 10）

| # | Issue | 热度 | 价值点 |
|---|-------|------|--------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: 多工作区共享单一 `qwen serve` daemon**（23 评论） | ⭐⭐⭐⭐⭐ | 这是当前最核心的架构讨论，单 daemon 支撑多 workspace 的能力直接决定后续 Agent 生态扩展能力，社区讨论极为活跃 |
| [#4782](https://github.com/QwenLM/qwen-code/issues/4782) | **ACP Streamable HTTP transport 实施跟踪**（5 评论） | ⭐⭐⭐⭐ | 打通 Zed/Goose/JetBrains 等 ACP 原生编辑器无需适配器即可连接，是 IDE 生态开放的关键里程碑 |
| [#6928](https://github.com/QwenLM/qwen-code/issues/6928) | **GitHub App 认证未注入新创建的工作区**（5 评论） | ⭐⭐⭐⭐ | 影响私有仓库 Cloud Workspace 用户，OAuth 隔离问题是企业落地拦路虎 |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) | **subagent ↔ 主会话双向通信缺失**（4 评论） | ⭐⭐⭐⭐ | 多 agent 协作链路薄弱，用户被迫用文件轮询兜底，强烈需要双向通知 API |
| [#6927](https://github.com/QwenLM/qwen-code/issues/6927) | **`auto` 审批模式下分类器死锁**（2 评论） | ⭐⭐⭐⭐ | 任何写文件操作都被 fail-close，连改设置都做不到，P1 级风险 |
| [#6936](https://github.com/QwenLM/qwen-code/issues/6936) | **`enableManagedAutoMemory=false` 仍注入 7-9KB 提示**（3 评论） | ⭐⭐⭐ | 上下文浪费问题，gate 不一致体现配置层 bug |
| [#6917](https://github.com/QwenLM/qwen-code/issues/6917) | **不可信 MCP readOnlyHint 跳过默认确认**（2 评论） | ⭐⭐⭐⭐ | 安全问题，readOnlyHint 被错误信任为"安全"，需收紧策略 |
| [#6831](https://github.com/QwenLM/qwen-code/issues/6831) | **trust "preview" 检查污染缓存 trust-folders 配置**（2 评论） | ⭐⭐⭐⭐ | P1 安全问题，只读预览意外写入持久化状态 |
| [#6977](https://github.com/QwenLM/qwen-code/issues/6977) | **默认模型升级到 `qwen3.7-max`**（1 评论） | ⭐⭐⭐ | 反映模型层整体迭代节奏，Qwen OAuth coder-model 描述同步更新 |
| [#6914](https://github.com/QwenLM/qwen-code/issues/6914) | **分数型 session/tool-call 限制过早终止**（3 评论） | ⭐⭐⭐ | 配置校验边界缺失，`0.5` 这种值居然能通过校验，是典型输入校验缺陷 |

---

## 🛠️ 重要 PR 进展（精选 10）

| # | PR | 内容 |
|---|----|----|
| [#6993](https://github.com/QwenLM/qwen-code/pull/6993) | **Headless 模式并发执行工具调用** — `qwen -p` 此前串行 await 同一批次工具调用，与 TUI 的并发执行不一致，修复后多工具批可真正并行，显著提升 headless 工作流吞吐 |
| [#6937](https://github.com/QwenLM/qwen-code/pull/6937) | **VP 模式鼠标选词与复制** — 替代屏视口新增 click-drag 高亮选区、双击选词、三击选行，松开即复制到系统剪贴板，TUI 体验向现代终端看齐 |
| [#6984](https://github.com/QwenLM/qwen-code/pull/6984) | **按模型细粒度限制 sub-agent 并发** — 新增 `agents.maxParallelAgentsByModel` 配置，按具体模型 ID 做配额，补充全局 `maxParallelAgents` 上限，多模型混跑更可控 |
| [#6963](https://github.com/QwenLM/qwen-code/pull/6963) | **Web Shell CI 仅展示变更视图的 before/after 截图** — 视觉预览机器人从固定截图升级为基于 PR base/head 像素 diff，仅提交有差异的视图，评审更聚焦 |
| [#6945](https://github.com/QwenLM/qwen-code/pull/6945) | **Daemon Todo Stop Guard（默认关闭、opt-in）** — daemon/ACP 会话在 `todo_write` 留下未完成项时，自然停止点允许最多再追加 2 次主模型调用，避免工作链中途意外终止 |
| [#6994](https://github.com/QwenLM/qwen-code/pull/6994) | **review 命令的 verify/reverse-audit 提示整合** — Step 4/5 的 findings list 由 orchestrator 直接拼装，评审 agent 拿到的是单一完整 prompt，减少手工拼接错误 |
| [#6954](https://github.com/QwenLM/qwen-code/pull/6954) | **Workspace MCP 管理** — Web Shell + daemon 引入插件管理入口（extension/MCP 双 tab），支持无 chat 会话下做 MCP 发现与 SDK 管控 |
| [#6953](https://github.com/QwenLM/qwen-code/pull/6953) | **`outputLanguage=auto` 跟随用户输入语言** — `general.outputLanguage=auto` 改为让模型遵循用户输入语言，而非回落到检测到的系统 locale，修复 [#6943](https://github.com/QwenLM/qwen-code/issues/6943) 的体验问题 |
| [#6895](https://github.com/QwenLM/qwen-code/pull/6895) | **受信任的 InvocationContext V1 贯通** — 新增运行时只读上下文，覆盖入口、原生 session、root prompt、经过校验的 daemon 客户端；CLI/ACP/daemon/channel/scheduler 各自建立上下文链，安全审计链路打通 |
| [#6967](https://github.com/QwenLM/qwen-code/pull/6967) | **退出 Plan 模式需要显式确认** — 防止 Plan 模式被自动流程绕过，强化审批门禁 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 与 PR 提炼，社区的关注点集中在以下五个方向：

1. **🏗️ Daemon 多工作区架构**（#6378、#6945、#6946、#6961、#6991）——围绕"单 daemon 跑多 workspace"展开的 RFC、Todo Stop Guard、deep health 聚合、channel 源 metadata 持久化，反映 daemon 正在从"单租户实验"走向"多租户生产"。
2. **🤖 多 Agent / Sub-agent 协作**（#5239、#6984）——双向通信、按模型配额的并发限制，是把 sub-agent 从"能跑"推到"可用"的关键。
3. **💬 第三方通道集成**（#6443、#6883、#6909、#6939）——钉钉 Webhook 单聊投递、WeCom 群消息 @ 网关、interactive cards、启动错误可观测性，国内 IM 生态正在被系统性补齐。
4. **🛡️ 安全与信任模型**（#6917、#6831、#6895）——MCP `readOnlyHint` 信任边界、trust-preview 污染缓存、`InvocationContext` 贯通，安全设计进入深水区。
5. **🌐 模型与多语言体验**（#6977、#6943、#6953）——默认模型切换 `qwen3.7-max`，`outputLanguage=auto` 跟随用户输入，模型与本地化体验联动升级。

---

## 👨‍💻 开发者关注点

- **CI 稳定性是最大工程痛点**：过去 24 小时出现至少 7 条 main 分支 CI 失败工单（#6933、#6935、#6938、#6940、#6966、#6979、#6982），集中在 E2E 测试 timing-flaky 与 cron-interactive 超时，已通过 [#6985](https://github.com/QwenLM/qwen-code/pull/6985) 加宽 SDK E2E 超时窗口缓解，但慢 runner 的根本问题仍未解决。
- **配置/校验一致性反复踩坑**：#6936（gate mismatch）、#6914（分数值通过校验）、#6831（只读预览写入缓存）都指向同一类问题——配置层缺少不可变/可分离的 readonly preview 通道。
- **TUI/Web Shell 体验"现代化"呼声强烈**：#6937 鼠标选词、#6971 分屏按 workspace 配色、#6930 钉钉交互卡片，都是为了让交互层从"工程师玩具"过渡到"日常工具"。
- **Headless 用户对并行性的要求被忽视**：#6993 之前 `qwen -p` 串行执行同批工具，与 TUI 的并发语义不一致，反映 headless 路径长期被低估。
- **安全策略默认偏松**：MCP `readOnlyHint` 自动放行、trust-preview 污染配置等条目集中在近一周出现，开发者已意识到需要在"信任链"上做减法，而不是做加法。

---

*日报生成基于 QwenLM/qwen-code 仓库过去 24 小时公开数据，仅供参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-07-16** ｜ **数据源：github.com/Hmbown/DeepSeek-TUI**

---

## 1. 今日速览

今日社区活跃度集中在 **v0.8.64/v0.9.0 系列的质量收尾与结构性重构**两条主线：维护者 Hmbown 推动的 v0.8.64 安全硬化发布跟踪器（#3368）已积累 29 条评论，成为当日最热议题；同时，针对大型 Rust 单体文件（App god object、RuntimeThreadManager、mcp.rs、ui.rs 等）的拆分重构工作集中进入 issue 化阶段。Windows 平台下的 TUI 卡死、IME 死锁、PowerShell 输入泄漏等老问题仍是用户反馈的高频痛点。

---

## 2. 版本发布

过去 24 小时内 **无新版本发布**。当前主线版本聚焦在 v0.8.64 安全硬化收尾，以及 v0.9.0 系列的 stopship 修复批量合并（见 PR #4332）。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论数 | 关注理由 |
|---|-------|------|--------|----------|
| 1 | [\#3368 v0.8.64 安全硬化与代码扫描修复跟踪器](https://github.com/Hmbown/CodeWhale/issues/3368) | OPEN | 29 | **当日最热**。作为 v0.8.64 列车唯一的公开 release tracker，统一汇总 CodeQL 发现、advisory 报告与本地集成提交，是当前 release gate 的核心枢纽。 |
| 2 | [\#2487 Yolo 模式下 "Turn stalled" 卡死](https://github.com/Hmbown/CodeWhale/issues/2487) | CLOSED | 20 | 用户高频遭遇的可靠性 bug：`continue` 无法恢复任务，反映出后端 turn dispatch 与前端 timeout 信号通路存在断点。 |
| 3 | [\#1812 Windows 11 下 TUI 间歇性冻结（crossterm poll）](https://github.com/Hmbown/CodeWhale/issues/1812) | CLOSED | 11 | 含完整 thread-state 分析与日志复现，是 Windows 平台 TUI 稳定性问题的代表性案例。 |
| 4 | [\#1835 Windows 中文 IME 组合事件死锁](https://github.com/Hmbown/CodeWhale/issues/1835) | CLOSED | 5 | 搜狗拼音等 IME 下输入框完全无响应，揭示 crossterm 输入层在 IME composition 状态机上的缺陷。 |
| 5 | [\#2261 TUI 进程崩溃后输入泄漏到 PowerShell](https://github.com/Hmbown/CodeWhale/issues/2261) | CLOSED | 6 | 焦点丢失后用户键入被当作 cmdlet 执行，属于安全/正确性双重隐患。 |
| 6 | [\#1607 Token 成本估算新增货币单位（人民币等）](https://github.com/Hmbown/CodeWhale/issues/1607) | CLOSED | 7 | 国内用户对本地化定价展示的强烈需求，体现区域化体验短板。 |
| 7 | [\#1678 为 App 添加版本检查 / 更新 / GitHub 链接](https://github.com/Hmbown/CodeWhale/issues/1678) | CLOSED | 5 | 反映用户对自助升级与项目导流的期待，是产品成熟度的基本体验项。 |
| 8 | [\#1067 glibc 版本要求过高（2.38/2.39）](https://github.com/Hmbown/CodeWhale/issues/1067) | CLOSED | 4 | Ubuntu 服务器 glibc 2.35 用户无法运行，影响企业内网/旧系统兼容性。 |
| 9 | [\#3490 v0.8.71 遗留 dead-code 与 follow-up 清单](https://github.com/Hmbown/CodeWhale/issues/3490) | OPEN | 4 | 维护者主导的代码卫生清理，为 v0.9 扩展工作流前的"减负"动作。 |
| 10 | [\#3303 让已文档化的 config key 可在 TUI 内可编辑/持久化](https://github.com/Hmbown/CodeWhale/issues/3303) | OPEN | 3 | 子 agent 配置等关键运行时行为"看似写死实则可配"，触及配置可发现性的核心 UX 问题。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 关键内容 |
|---|-----|------|----------|
| 1 | [\#4332 fix: v0.8.68 TUI state and routing truthful](https://github.com/Hmbown/CodeWhale/pull/4332) | CLOSED | **release-blocker**。修复空白配置/畸形 auth 仍显示"已配置"、会话路由不可达等活体回归，是 v0.8.68 的 stopship 修复批次。 |
| 2 | [\#3902 perf(tui): 修复 5 条渲染/输入热路径（#3896–#3900）](https://github.com/Hmbown/CodeWhale/pull/3902) | CLOSED | 一次性关闭 5 个性能标签 issue，外加对抗性多 agent 评审发现的 4 处回归，覆盖 Tasks sidebar 双计算、节流过粗等典型渲染瓶颈。 |
| 3 | [\#4088 fix(tui): 关闭鼠标捕获时保留原生文本选择](https://github.com/Hmbown/CodeWhale/pull/4088) | CLOSED | 修复 #4026：开启 `--no-mouse-capture` 时让宿主终端接管 drag 选择，同时保留鼠标捕获路径下的 alternate-scroll 恢复逻辑。 |
| 4 | [\#4087 refactor(hooks): 拆分 config 与 executor 模块](https://github.com/Hmbown/CodeWhale/pull/4087) | OPEN | 将 `hooks.rs` 中事件/条件/定义/config 与执行器拆为 `hooks/config.rs` 与 `hooks/executor.rs`，是重构主题的落地样板。 |
| 5 | [\#4084 fix(fleet): 拒绝已退役的 profile loadout 别名](https://github.com/Hmbown/CodeWhale/pull/4084) | CLOSED | 移除 `model_class_hint`/`route_tier`，统一使用 `loadout`，让生成的 profile 能在更严格的 loader 下往返。 |
| 6 | [\#4044 fix(onboarding): 本地化动态欢迎步骤](https://github.com/Hmbown/CodeWhale/pull/4044) | CLOSED | 通过 `MessageId` 注册表本地化首屏欢迎语，`Next:` 行由真实 gate 驱动；补齐包括稀疏 `zh-Hant` 在内的全语种文案。 |
| 7 | [\#3969 Add per-sub-agent provider routing](https://github.com/Hmbown/CodeWhale/pull/3969) | CLOSED | **被维护者分流至 v0.8.68 fleet lane**，推荐通过 fleet profile 字段重新路由（见 #4137），不直接合并。 |
| 8 | [\#3818 fix(tui): 扩展 active tool run summaries](https://github.com/Hmbown/CodeWhale/pull/3818) | CLOSED | 在解析密集 tool-run 展开时纳入 in-flight 条目，并为 flush 前切换补回归测试。 |
| 9 | [\#3761 \[codex\] 延迟启动期维护清理](https://github.com/Hmbown/CodeWhale/pull/3761) | CLOSED | 把旧会话/工具输出溢出清理从同步交互路径挪到 best-effort 维护线程，保护活跃 snapshot 引用。 |
| 10 | [\#4370 feat: 新增 TelecomJS（江苏电信）Provider 支持](https://github.com/Hmbown/CodeWhale/pull/4370) | OPEN | 自定义 provider 注册 TelecomJS 后模型选择器只显示 1 个模型，定位 `refresh_catalog_cache` 在生产路径未被调用的问题。 |

---

## 5. 功能需求趋势

从近 24 小时更新的 50 条 issue 中可提炼出以下社区共同诉求：

- **🪟 Windows 平台稳定性**：TUI 冻结、IME 死锁、PowerShell 焦点泄漏、Enter 导致 GUI 崩溃——Windows 体验是用户抱怨最集中的领域（#1812、#1835、#2261、#1338、#1512）。
- **🔧 大型 Rust 单体文件重构**：`App` god object（~150 字段）、`RuntimeThreadManager`（~2400 行 impl）、`mcp.rs`、`history.rs`、`ui.rs`、`runtime_api.rs` 的拆分被系统化为 7+ 条 issue（#3310、#3312、#3313、#3314、#3306–#3309），指向 v0.9.3 的结构性进化。
- **⌨️ Slash 命令体系化**：将 `/help`、`/goal`、`/task`、`/memory`、`/relay` 等命令通过 PEEK-backed receipt、spatial workbench routing、truth-surface wiring、docs/i18n 等 5 条 issue（#1887、#1889、#1890、#1892、#1894）进行端到端串联。
- **🌐 新 Provider 接入**：TelecomJS（江苏电信）等区域/企业 provider 的接入与 `/v1/models` 目录缓存刷新（#4370）。
- **🈶 本地化与货币**：中文乱码（#1675）、欢迎语本地化（#4044）、token 成本支持人民币（#1607）。
- **🖱️ 终端原生交互**：保留原生文本选择不被 TUI 鼠标捕获干扰（#4026/4088），复制不带视觉换行（#1853）。
- **📦 自助运维能力**：版本检查 / 更新 / GitHub 链接（#1678）、TUI 内可编辑 config（#3303）。

---

## 6. 开发者关注点

综合维护者与贡献者反馈，高频痛点与诉求集中在以下几方面：

1. **Release gate 透明度**：v0.8.64 安全硬化跟踪器（#3368）反映出"安全类工作分散在 CodeQL/advisory/本地 commit 中"的协调成本，亟需单一公开 tracker 而又不暴露 exploit 细节。
2. **Windows 终端抽象层脆弱**：crossterm 在 IME composition 事件、alternate-screen 模式、焦点丢失三种场景下的行为不一致，导致 Windows 用户体验碎片化。
3. **god object 阻碍迭代**：`App` 与 `RuntimeThreadManager` 等超大型结构使 PR review 困难、merge conflict 频发，inline test 模块进一步放大文件体积（#3307 估算可减少 ~30% 可见生产代码量）。
4. **配置可发现性差**：已文档化但 TUI 内不可编辑的配置项让用户误以为行为写死，sub-agent 配置等关键能力因此"隐身"（#3303）。
5. **Slash 命令缺乏 truth surface**：执行结果未路由进侧边栏 cockpit，活动详情、失败原因、恢复提示缺失，命令沦为"scrollback 副作用"（#1887）。
6. **provider 生态接入流程不畅**：自定义 provider 注册后 `/v1/models` 目录不刷新，暴露 `refresh_catalog_cache` 在生产路径缺失调用的问题（#4370）。

---

> **日报小结**：当前社区进入 v0.8.64 安全收尾与 v0.9.0/0.9.3 重构并行的双线阶段，结构性 issue 数量显著上升。Windows 兼容性、大型 Rust 单体拆分、Slash 命令体系化、新 Provider 接入将是下一阶段的四大主线。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*