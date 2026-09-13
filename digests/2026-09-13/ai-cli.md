# AI CLI 工具社区动态日报 2026-09-13

> 生成时间: 2026-09-13 02:36 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-09-13
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI

---

## 1. 生态全景

2026 年 Q3 的 AI CLI 工具生态已从"功能竞速"进入"成熟度博弈"阶段：本周 9 款主流工具中仅 3 款发布新版本（Claude Code v2.1.270、Gemini CLI nightly、Qwen Code nightly），其余 6 款均处于 Issue/PR 高密度迭代但无 release 的状态，表明社区诉求已从"新能力补齐"转向"稳定性、协议合规、可观测性"。**Sub-agent 架构、MCP 协议合规、Windows 平台体验、成本透明化** 是当前所有玩家共同面对的四个核心战场，而 Kimi Code 几乎静默（24h 仅 3 条 Issue）的"维持式运维"则与 OpenCode/Pi/Codex 的高频迭代形成鲜明对比。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | 活跃 Issue 数 | PR 数 | 总体节奏 |
|------|---------|--------------|-------|---------|
| **Claude Code** | v2.1.270（紧急修复） | 10 | 4 | 修复导向，热度仍高 |
| **OpenAI Codex** | 无 | 10 | 10 | 高密度迭代 |
| **Gemini CLI** | v0.61.0-nightly | 10 | 10 | nightly 自动推进 |
| **GitHub Copilot CLI** | 无 | 8 | 3 | 维护类为主（dependabot） |
| **Kimi Code CLI** | 无 | 3 | 0 | 静默维护期 |
| **OpenCode** | 无 | 10（30 条高评论） | 10 | 高速迭代 |
| **Pi** | 无 | 10 | 10 | 高频合入 |
| **Qwen Code** | v0.23.3-nightly | 10 | 10 | 架构演进期 |
| **DeepSeek TUI** | 无 | 10（29 条总更新） | 10（14 条总更新） | 闭环极紧（多数已 CLOSED） |

> 数据观察：DeepSeek TUI 的"29 Issue / 14 PR"全部或大部分已 CLOSED，是 9 款工具中**修复闭环速度最快**的；Kimi Code 是唯一活跃度低于基线的工具，可能预示社区流失或产品重心转移。

---

## 3. 共同关注的功能方向

### 3.1 Sub-agent / 多代理架构（**7/9 工具**）
- Claude Code (#11455)、Codex (subagent 审批 #41741)、Gemini CLI (#22323/#21409)、Copilot CLI (#4829 token 放大)、OpenCode (#16491 MCP 权限)、Qwen Code (#11695/#9402)、DeepSeek TUI (#6097/#6117)
- **共性诉求**：子代理的权限边界、上下文继承、token 成本归因、状态可观测性仍是空白。

### 3.2 MCP 协议合规性（**6/9 工具**）
- Claude Code (#86142 draft-07)、Copilot CLI (#4759 取消规范)、Codex (hooks 失败信号)、Qwen Code (#11610 hooks 对齐)、OpenCode (#16491)、Gemini CLI (#6030)
- **共性诉求**：从"支持 MCP"转向"严格遵循 MCP 2026-07 规范"——取消、超时、错误信号、tool 权限缺一不可。

### 3.3 Windows / 跨平台稳定性（**5/9 工具**）
- Claude Code (#51847/#12953/#66026)、Codex (#41779/#41741 多个)、Kimi (#1409/#1404 Darwin)、DeepSeek TUI (#5923 线程阻塞)、OpenCode (#35334 安装器)
- **共性诉求**：Windows 用户明确感受到"二等公民"待遇，sandbox、子进程编排、文件锁、Computer Use 集体退步。

### 3.4 成本与可观测性（**5/9 工具**）
- Claude Code (#93940/#93894)、Codex (#35259/#44970)、Copilot CLI (#4825/#4829)、OpenCode、DeepSeek TUI (#6011 详细 token 统计)
- **共性诉求**：按组件/模型/缓存/工具四维度的成本透明化与限额预警，已从"nice-to-have"变成"生产准入门槛"。

### 3.5 会话管理与持久化（**5/9 工具**）
- Claude Code (#11455)、Codex (幽灵会话/#40558 跨设备)、Gemini CLI (#29292 checkpoint)、Copilot CLI (#4830 /remove-dir)、Pi (session tree)、DeepSeek TUI (#6102)
- **共性诉求**：跨设备/跨时段的 resume、目录权限反向撤销、checkpoint 校验成统一战线。

### 3.6 权限与安全边界（**5/9 工具**）
- OpenCode (#27745 AI TRUNCATE 绕过 AGENTS.md、#16491)、Qwen Code (#11198 遥测泄漏)、Claude Code (#77058)、Copilot CLI (#4830)、DeepSeek TUI (sub-agent 权限)
- **共性诉求**：**AGENTS.md 已不足以构成安全护栏**，需要 permission.bash、scope approval、运行时强制等更深层机制。

### 3.7 Provider 多样性与互操作性（**5/9 工具**）
- OpenCode (#48728 NVIDIA/#35431 Devstral)、Codex (GPT-5.5 404)、Gemini CLI (#29222 模型被改写)、Pi (Meta/Antigravity/Cursor Pro OAuth)、DeepSeek TUI (#6018/#6113)
- **共性诉求**：模型路由层的"零差异体验"——prompt 模板、tool calling 兼容、cache 语义应在所有 provider 间统一。

### 3.8 TUI 交互打磨（**5/9 工具**）
- Claude Code、Codex、Gemini CLI (#29294 闪烁)、Pi (#9052/#9311)、Qwen Code (#11500 React #185)
- **共性诉求**：滚轮、选区、闪烁、粘贴、PasteBurst、长单行预览等"小问题"长期挂账，但严重拖累日常体验。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 技术路线 | 目标用户 |
|------|---------|---------|---------|
| **Claude Code** | MCP + Cowork 企业协作 | 单仓深度集成 Anthropic 全家桶 | 企业团队、长会话复杂任务 |
| **OpenAI Codex** | GPT 矩阵 + sandbox + hooks | Rust 重写（codex-rs），hooks 体系完善 | OpenAI 生态用户、安全敏感场景 |
| **Gemini CLI** | Gemini 3 + AST + Auto Memory | nightly 滚动开发，sub-agent 多 | Google Cloud、追求新鲜模型的开发者 |
| **Copilot CLI** | GitHub 生态 + 供应链安全 | Dependabot 自动化维护驱动 | 企业、GitHub Actions 重度用户 |
| **Kimi Code** | Web UI 队列模式 | 静默运维 | 长尾用户（活跃度骤降预警） |
| **OpenCode** | Provider 中立的 TUI/Desktop/VSCode | 三端同步，开箱即用 | 多模型混用、跨端开发者 |
| **Pi** | SDK 可嵌入 + 订阅 OAuth 友好 | TUI-first，可作库使用 | 嵌入式集成方、订阅型用户 |
| **Qwen Code** | 多 Agent Harness + CUA + 跨端 | 0.23.x nightly，架构级重构 | 阿里生态、Computer Use 实验者 |
| **DeepSeek TUI** | Sub-agent 深度 + Codewhale 跨端世界观

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-13 | 数据源：anthropics/skills**

---

## 一、热门 Skills 排行（基于关联 Issue 讨论度与社区影响）

### 1. 🏆 skill-creator 评估体系修复（核心痛点）
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298) — `run_eval.py` 修复 recall=0% 致命缺陷
- **关联 Issue**: [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍，10+ 复现案例）
- **状态**: OPEN
- **热点**: 评估脚本对所有 Skill 描述都报 0% 触发率，导致描述优化闭环"对着噪声训练"。社区认为这是当前 skill-creator 工作流的根本性卡点。Windows 兼容性、并行 worker、触发检测一并修复。
- **延伸 PR**: [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#539](https://github.com/anthropics/skills/pull/539)

### 2. 🥈 mcp-builder 评估修复（MCP 集成链路）
- **PR**: [#1602](https://github.com/anthropics/skills/pull/1602) — 评估序列化/编码/稳定性
- **关联 Issue**: [#1390](https://github.com/anthropics/skills/issues/1390)（4 评论）+ [#1742](https://github.com/anthropics/skills/pull/1742)（mcp>=2 兼容）
- **状态**: OPEN
- **热点**: `evaluation.py` 对所有真实 MCP 服务器报 0/N，错误被吞掉伪装成 tool error。MCP Builder 是 Claude Code 生态最关键的"造轮子"工具，修复呼声强烈。

### 3. 🥉 claude-api 模型清单更新
- **PR**: [#1607](https://github.com/anthropics/skills/pull/1607) — 标记 4 个已退役模型 ID
- **关联 Issue**: [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论，~156k token 注入爆窗）
- **状态**: OPEN
- **热点**: claude-api skill 单次调用注入 ~156k tokens 耗尽上下文窗口，叠加使用过期模型，开发者痛点明确。

### 4. Skill Quality / Security Analyzer（元能力）
- **PR**: [#83](https://github.com/anthropics/skills/pull/83) — marketplace 新增两个 meta skill
- **状态**: OPEN（已搁置 10 个月，2025-11 提出）
- **热点**: 5 维质量评估（结构 20%、安全…）契合 Issue #492 提出的信任边界滥用问题，定位"Skill 的 Skill"。

### 5. self-audit 推理质量门禁
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367) — v1.3.0 四维推理质量审计
- **关联 Issue**: [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论 / 1 👍）
- **状态**: OPEN
- **热点**: "先机械校验文件，再按损害严重度推理审计"，定位交付前最后一关。

### 6. document-typography（排版质量控制）
- **PR**: [#514](https://github.com/anthropics/skills/pull/514) — 防孤行/寡行/编号错位
- **状态**: OPEN
- **热点**: 直击 AI 生成文档最常见的视觉缺陷，影响所有文档类 Skill 输出质量。

### 7. docx 跟踪修订 ID 冲突修复
- **PR**: [#541](https://github.com/anthropics/skills/pull/541) — `w:id` 与书签冲突导致文档损坏
- **状态**: OPEN
- **热点**: 高危静默 bug，处理含书签的 docx 会引发 OOXML 共享 ID 空间冲突。

### 8. frontend-design 可执行性提升
- **PR**: [#210](https://github.com/anthropics/skills/pull/210) — 让指令在单轮对话内可执行
- **状态**: OPEN
- **热点**: 原 skill 像开发者文档而非操作指令，token 浪费严重（与 #202 反馈一致）。

---

## 二、社区需求趋势（Issues Top 主题聚类）

| 方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🔐 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论） | **TOP 1** — 社区 skill 假冒 `anthropic/` 命名空间引发权限滥用 |
| **🏢 组织级共享** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论 / 8 👍） | 团队内分发仍需 .skill 文件手动上传 |
| **🧪 评估/测试闭环** | [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1602](https://github.com/anthropics/skills/pull/1602) | 评估链路多处 0% 触发，已成系统性故障 |
| **📚 Skill 治理与质量** | [#202](https://github.com/anthropics/skills/issues/202)、[#189](https://github.com/anthropics/skills/issues/189)（9 👍）、[#1329](https://github.com/anthropics/skills/issues/1329) | 重复安装、教程式描述、缺 token 效率标准 |
| **🛡️ 企业级代理治理** | [#412](https://github.com/anthropics/skills/issues/412)、[#1175](https://github.com/anthropics/skills/issues/1175) | 策略执行/审计/SharePoint ACL 模式 |
| **🤖 多 Agent 编排** | [#1628](https://github.com/anthropics/skills/pull/1628) — Hivemind | 头部模型做规划，子智能体用廉价模型执行 |
| **🔌 互操作性** | [#16](https://github.com/anthropics/skills/issues/16) — Skills 暴露为 MCP | 把 Skill 当作 API 协议层 |
| **☁️ 多平台部署** | [#29](https://github.com/anthropics/skills/issues/29) — AWS Bedrock 支持 | 4 评论，企业落地刚需 |

**新增 Skill 提案热门方向**：
- **compact-memory**（[#1329](https://github.com/anthropics/skills/issues/1329)）：符号化压缩长上下文状态
- **agent-governance**（[#412](https://github.com/anthropics/skills/issues/412)）：策略/威胁/审计三件套
- **self-audit**（[#1385](https://github.com/anthropics/skills/issues/1385)）：三门控推理管线

---

## 三、高潜力待合并 PR（按战略价值排序）

| 排名 | PR | 战略价值 | 阻塞点 |
|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) skill-creator 修复 | **🔴 阻塞生态**：10+ 独立复现，描述优化链失效 | 需 Anthropic 内部 review |
| 2 | [#1602](https://github.com/anthropics/skills/pull/1602) mcp-builder 修复 | **🔴 MCP 全链路**：影响所有自建 MCP 服务器验证 | 同上 |
| 3 | [#1607](https://github.com/anthropics/skills/pull/1607) claude-api 模型退役 | **🟡 紧急**：过期模型仍在文档中 | 纯文档，轻量可合 |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) quality/security analyzer | **🟢 元能力**：正契合 #492 安全热点 | 已停滞 10 个月 |
| 5 | [#1367](https://github.com/anthropics/skills/pull/1367) self-audit | **🟢 新范式**：交付前质量门禁 | 需示范用例 |
| 6 | [#1628](https://github.com/anthropics/skills/pull/1628) Hivemind | **🟢 成本革命**：0 成本多智能体 | 需验证稳定性 |
| 7 | [#1627](https://github.com/anthropics/skills/pull/1627) Buffer API | **🟢 跨平台**：多 Agent 通用社交 API | 等待维护者 |
| 8 | [#514](https://github.com/anthropics/skills/pull/514) document-typography | **🟢 全文档**：影响所有 doc 类输出 | 等 review |

---

## 四、Skills 生态洞察

> **一句话总结**：社区当前最集中的诉求是 **"Skill 自身需要被治理"** —— 从造 Skill（skill-creator）、评 Skill（evaluation）、审 Skill（security/quality analyzer）、到管 Skill（org-share、namespace 边界），整套工具链的可靠性与可信度已成为生态扩张的最大瓶颈，新增功能型 Skill 已退居其次。

---

### 📌 关键建议
- **对贡献者**：优先修复 #556/#1390 评估链路 bug，性价比最高。
- **对使用者**：关注 [#1607](https://github.com/anthropics/skills/pull/1607) 模型清单，避免使用退役 ID。
- **对企业用户**：[#228](https://github.com/anthropics/skills/issues/228) + [#492](https://github.com/anthropics/skills/issues/492) 是 2026 上半年必须跟进的两个治理议题。

---

# Claude Code 社区动态日报
**日期：2026-09-13**

---

## 📌 今日速览

v2.1.270 紧急修复了 2.1.269 引入的只读 git 命令权限弹窗回归问题，但同日即出现 ASP 沙箱加载失败的新 issue，说明 2.1.270 升级路径尚不稳定。社区方面，MCP `draft-07` 协议兼容性问题（#86142，52 条评论）以最高热度关闭，Session 持续化（#11455）和 Cowork 联网回归（#93562）持续发酵。开发者对成本控制、模型"幻觉"以及跨平台（WSL/Windows）体验的抱怨明显增多。

---

## 🚀 版本发布

### v2.1.270
**修复内容**：
- 修复会话运行一段时间后，Bash 中只读 git 命令异常触发权限弹窗的回归（2.1.269 引入）

**附带风险**：发布当日即有用户报告（#93936）macOS 上 `Unable to apply provenance sandbox` 升级失败，建议 macOS 用户升级前关注该 issue 进展。

🔗 [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.270) ｜ [Issue #93936](https://github.com/anthropics/claude-code/issues/93936)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#86142](https://github.com/anthropics/claude-code/issues/86142) MCP `draft-07` outputSchema 完全不可用
- **标签**：bug · macos · mcp · desktop · **CLOSED** · 💬 52 · 👍 14
- **重要性**：高优先级 MCP 兼容性问题，影响所有声明 `draft-07` 的 MCP 服务器。客户端在派发前直接拒绝，错误信息为"unsupported dialect"。该 issue 热度第一，已关闭，预计将在后续版本修复。

### 2. [#11455](https://github.com/anthropics/claude-code/issues/11455) Feature: Session Handoff / Continuity Support
- **标签**：enhancement · core · OPEN · 💬 31 · 👍 25
- **重要性**：长期呼声最高的增强请求之一，👍 25 在所有 issue 中最高。要求 CLI 支持跨设备、跨时段的会话延续能力，对长时任务与企业场景价值显著。

### 3. [#51847](https://github.com/anthropics/claude-code/issues/51847) Windows 更新后文件占用错误
- **标签**：bug · windows · desktop · **CLOSED** · 💬 30 · 👍 16
- **重要性**：Windows 平台长期存在的"Another program is currently using this file"问题，社区反馈强烈，已关闭等待版本验证。

### 4. [#12953](https://github.com/anthropics/claude-code/issues/12953) 鼠标滚轮误触发输入历史而非聊天历史
- **标签**：bug · windows · tui · tools · OPEN · 💬 24 · 👍 21
- **重要性**：TUI 交互的经典痛点，👍/💬 比接近 1:1 说明几乎所有 Windows 用户都遇到，反馈质量高。

### 5. [#93562](https://github.com/anthropics/claude-code/issues/93562) Cowork Egress 白名单 9-10→9-11 回归
- **标签**：bug · cowork · regression · networking · OPEN · 💬 7 · 👍 6
- **重要性**：标注为 regression 的关键网络问题。"All domains" 选项实际被忽略，所有未在白名单中的主机返回 403。直接影响 Cowork 的代理与 API 访问能力。

### 6. [#66026](https://github.com/anthropics/claude-code/issues/66026) Plan 模式滚动异常
- **标签**：bug · windows · tui · regression · OPEN · 💬 7 · 👍 13
- **重要性**：Plan 模式是核心工作流之一，👍 13 高于评论数说明用户对修复期望强烈。

### 7. [#84581](https://github.com/anthropics/claude-code/issues/84581) Cowork 云会话无法访问 GitHub 仓库
- **标签**：bug · OPEN · 💬 8 · 👍 5
- **重要性**：git proxy 指示 agent 调用不存在的 `add_repo` 工具，暴露 Cowork 集成层的协议设计缺陷。

### 8. [#77058](https://github.com/anthropics/claude-code/issues/77058) 模型无法在长会话中遵守自身 safeguards
- **标签**：bug · model · core · OPEN · 💬 7
- **重要性**：6+ 小时长会话中模型反复违反自设保护（worktree 混淆、未经验证声明、单方面生产环境编辑），揭示长上下文下的可靠性问题。

### 9. [#88731](https://github.com/anthropics/claude-code/issues/88731) `claude remote-control` 模式下 Artifact 工具缺失
- **标签**：bug · macos · tools · agent-sdk · OPEN · 💬 2 · 👍 2
- **重要性**：相同机器相同账号下 `claude --remote-control` 与 `claude remote-control` 行为不一致，是 Agent SDK 一致性问题。

### 10. [#93940](https://github.com/anthropics/claude-code/issues/93940) Max Pro 周限额对单人开发者过紧
- **标签**：enhancement · cost · OPEN
- **重要性**：与 #93894 共同反映开发者对当前定价/限额模型的普遍不满（与 OpenAI 对比）。这是 9-13 当天创建的"早期信号"issue，预计将快速获得共鸣。

---

## 🔧 重要 PR 进展（4 条）

### 1. [#93932](https://github.com/anthropics/claude-code/pull/93932) `mods/telemetry` types 路径修正
- **状态**：CLOSED · 作者：poteat
- 一行修复：`plugin.json` 中 `types` 字段统一为 `./` 相对路径，避免 manifest schema 拒绝。

### 2. [#93452](https://github.com/anthropics/claude-code/pull/93452) `mods/diff` 对齐内置 `/diff` 面板
- **状态**：CLOSED · 作者：poteat
- 让 `/diff` mod 复用内置代码元素渲染，统一关闭按钮、间距、空状态布局、窄终端重绘行为与并发探测逻辑。

### 3. [#93912](https://github.com/anthropics/claude-code/pull/93912) `mods` 单元测试基础设施
- **状态**：CLOSED · 作者：poteat
- 引入 `claude plugin test <dir>` 测试命令，测试与 mod 在同一进程运行，共享引擎的 `$` 与 `on`，为 mod 生态建立质量基线。

### 4. [#61716](https://github.com/anthropics/claude-code/pull/61716) 文档：context overflow 误报为 usage limit 的排查
- **状态**：OPEN · 作者：giruuuuj
- 文档化 `/compact` 在 1M 上下文下"Extra usage required"被错误映射为"usage limit reached"的根因与解决方案，关闭 #50321。

---

## 📈 功能需求趋势

| 方向 | 代表 issue | 社区信号 |
|------|-----------|---------|
| **MCP 协议兼容性** | #86142 | `draft-07` 等标准的支持，决定 MCP 生态能否落地 |
| **会话持久化/交接** | #11455 | 跨设备、跨时段的连续工作流，长期高赞需求 |
| **Cowork 能力扩展** | #84581 / #93562 / #93910 | 进度面板持久化、GitHub 访问、网络白名单稳定性 |
| **跨平台体验** | #79655 / #93124 / #51847 / #12953 | WSL、Windows、Linux Desktop 的 Chrome 扩展、文件锁、TUI 滚动 |
| **插件/Mod 生态** | #93944 / #93912 / #93452 | 插件清单校验、语法高亮注册、mod 测试基础设施 |
| **成本与限额** | #93894 / #93940 | Max Pro 周限额与单次任务成本失控 |
| **长会话可靠性** | #77058 / #93562 | 模型 safeguard 失效、回归频发 |

---

## 💡 开发者关注点

**1. 升级稳定性**
v2.1.269→270 当天即出现权限弹窗回归与 macOS 沙箱加载失败（#93936），提示版本升级前应关注 CHANGELOG。

**2. 模型"幻觉"频发**
同一位开发者（jjustman）在一天内连续提交 #93934 / #93935 / #93931，抱怨模型对仪器状态、信号处理验证结果给出未经核实的技术声明，反映**长会话中模型事实一致性问题**仍是头号痛点。

**3. TUI 交互细节被忽视**
滚轮行为、Plan 模式滚动、`.gd` 文件无高亮等小问题长期挂账，但严重影响日常体验。

**4. 成本不透明**
#93894 报告单次 Fable 5.1 高强度代码审查耗尽 $100/月订阅，#93940 反映 Max Pro 周限额过早触发，开发者明确要求**用量可视化与限额预警**。

**5. Cowork 回归密集**
9-10→9-11 出现网络白名单回归（#93562），同期还有 Git 工具调用协议 bug（#84581），说明 Cowork 仍在快速迭代期，**生产环境使用需谨慎**。

---

*报告基于 GitHub 公开数据，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-13**

---

## 📌 今日速览

今日 Codex 社区无版本发布，但 Issue 和 PR 更新密集，**Windows 平台问题持续高发**（沙箱启动、子进程被策略拦截、Computer Use 异常等占据半数以上 Bug 报告），同时围绕 **Credits 消耗失控、Subagent 审批机制、自动 Recap 体验** 等方向的讨论热度上升。PR 端则集中于 token 估算精度、TUI 交互细节优化与异步消息能力铺垫。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 核心问题与影响 |
|---|-------|----------|---------------|
| 1 | [#35259](https://github.com/openai/codex/issues/35259) — Codex Desktop 在等待/轮询时反复重入模型 | 23 / 20 | **最高热度的 Credits 浪费问题**：用户在重置后的统计窗口中发现，仅用于轮询等待的空转轮次就占到本地 token 用量的 19.8%。影响 Pro 用户实际账单，社区情绪强烈。 |
| 2 | [#44781](https://github.com/openai/codex/issues/44781) — 编辑已排队消息后报错 "queued follow-up no longer exists" | 14 / 17 | Codex Desktop 26.903.9818.0 上的 app-server 状态机问题，影响正常的多轮排队编辑流程。 |
| 3 | [#41987](https://github.com/openai/codex/issues/41987) — macOS 桌面端侧边栏残留 "幽灵" 会话 | 13 / 3 | 删除会话后标题仍卡在 "Recent" 列表中无法清除，macOS Apple Silicon 上 Plus 账号反馈。 |
| 4 | [#41779](https://github.com/openai/codex/issues/41779) — Windows 本地 API 启动被 sandbox 拒绝 | 11 / 0 | `CreateProcess ... rejected: blocked by policy` 错误甚至出现在 read-only 场景，且无任何日志输出。 |
| 5 | [#43755](https://github.com/openai/codex/issues/43755) — GPT-5.5 在 Codex App 中选择后 404 | 8 / 0 | 模型在前端可选但后端 `Model not found`，说明前端模型目录与 API 网关不一致。 |
| 6 | [#41741](https://github.com/openai/codex/issues/41741) — 自动审核把本地消息误判为敏感出站 | 8 / 0 | WSL/Windows 下 Auto-review 覆盖了用户的显式授权，无人复核通道，工作流被打断。 |
| 7 | [#31317](https://github.com/openai/codex/issues/31317) — `--remote ... --cd` 启动时 `/resume` 缺少 CWD 过滤器 | 8 / 2 | Remote + 自定义 CWD 场景下的会话恢复体验受损，影响 Pro 用户常见工作流。 |
| 8 | [#34289](https://github.com/openai/codex/issues/34289) — Hooks `PostToolUse` 无失败信号，`PostToolUseFailure` 永不触发 | 8 / 1 | Hooks 系统缺少错误判别字段（`is_error`/`exit_code`），使得第三方钩子无法可靠区分成功与失败。 |
| 9 | [#40558](https://github.com/openai/codex/issues/40558) — Remote iOS 上 Desktop 创建的活跃线程加载失败 | 7 / 1 | macOS Desktop 与 iOS Remote 间存在 active-writer 冲突，无法同步加载会话。 |
| 10 | [#30515](https://github.com/openai/codex/issues/30515) — Codex App 自动化任务污染主会话列表 | 7 / 1 | 高频 cron 自动化每次运行都创建新线程，主列表被一次性 run 淹没，丢失周期性任务意图。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容概要 |
|---|----|------|---------|
| 1 | [#45094](https://github.com/openai/codex/pull/45094) | ✅ Closed | **Token 估算改用内容而非序列化 envelope**：去除消息 ID / 元数据 / JSON 转义带来的虚高，对计费和上下文管理都更准确。 |
| 2 | [#45089](https://github.com/openai/codex/pull/45089) | ✅ Closed | **延迟自动 Recap 至 30 分钟并压缩 TUI 排版**：从 3 分钟延长，并改为悬挂缩进的 `↳ Recap:` 行内格式。 |
| 3 | [#45090](https://github.com/openai/codex/pull/45090) | ✅ Closed | **Recap 区分上下文与下一步行动**：突破 900 字节上限，让 Recap 能同时保留已完成工作、未决 caveat 和最近纠错。 |
| 4 | [#44970](https://github.com/openai/codex/pull/44970) | ✅ Closed | **Agent Command Center 显示任务 token 与费用估算**：展示输入/输出 token 数和预估 credits/USD。 |
| 5 | [#44969](https://github.com/openai/codex/pull/44969) | ✅ Closed | **跨 app-server 任务以只读历史方式打开**：允许在 Command Center 查看由其他 app server 管理的存档任务。 |
| 6 | [#45124](https://github.com/openai/codex/pull/45124) | ✅ Closed | **新增 `send_message_to_user_async` 功能开关**：默认关闭，仅 root agent 可见，subagent 不可用。 |
| 7 | [#45135](https://github.com/openai/codex/pull/45135) | ✅ Closed | **TUI 在 newline 到达前预览流式文本**：解决长单行响应在换行前不可见的问题。 |
| 8 | [#45116](https://github.com/openai/codex/pull/45116) | ✅ Closed | **报告注释使用 PasteBurst 防止提前提交**：修复无括号多行粘贴在第一个换行处误提交的 Bug。 |
| 9 | [#31471](https://github.com/openai/codex/pull/31471) | 🟢 Open | **抽取 Apps 缓存到 ConnectorRuntimeManager（1/4）**：faster-connectors 路线图首步，按账号/工作区隔离上下文。 |
| 10 | [#35882](https://github.com/openai/codex/pull/35882) | 🟢 Open | **codex-rs 升级 Rust 1.95.0 → 1.97.1**：跟进上游工具链，更新由 dependabot 持续维护。 |

> 另有多项构建 / 发布流水线优化（[#45149](https://github.com/openai/codex/pull/45149) musl 用 OpenSSL 3.6.4、[#45051](https://github.com/openai/codex/pull/45051) Rust release 工件合并下载、[#45039](https://github.com/openai/codex/pull/45039) 包归档 gzip -6）以及体验微调（[#45137](https://github.com/openai/codex/pull/45137) 移除 Astra 闪烁动效、[#45108](https://github.com/openai/codex/pull/45108) 手动重命名后取消挂起的标题生成、[#44976](https://github.com/openai/codex/pull/44976) Context snapshot 文本渲染一致化）。

---

## 📈 功能需求趋势

从近 24h 内活跃的 Issues 标签统计，社区关注集中在以下方向：

1. **🪟 Windows 平台稳定性**（占比最高）— sandbox 启动失败、子进程被策略拦截、Computer Use 不可用、Windows 端 helper_failed 等问题集中爆发。
2. **🤖 Subagent & 自动审批系统**— Auto-review 覆盖用户授权、subagent 拒绝操作缺少作用域审批入口，反映多 agent 工作流的权限模型亟待完善。
3. **💸 Credits / Token 消耗效率**— #35259 等空转轮次计费问题引发对模型调用预算的强烈关注，PR #45094 / #44970 直接回应。
4. **🧠 新模型（GPT-5.5 / GPT-5.6 / gpt-5.6-luna）兼容性**— `service_tier="flex"` 缺失、模型 404、Luna Reserve 不可见等问题，提示模型目录同步存在缝隙。
5. **🖥️ Computer Use 与浏览器集成**— Edge tab 发现、@oai/sky Windows 注册、native 应用发现失败等，跨平台能力差距明显。
6. **📚 会话与历史管理**— 幽灵会话、自动化任务污染、跨设备会话加载失败、session 存储膨胀（一个用户发现 938 个本地会话占用 42 GB）。
7. **🪝 Hooks / 扩展性**— 钩子载荷缺少失败信号、`/resume` 远程模式过滤缺失、TUI 环境元数据无法透传等。

---

## 💬 开发者关注点

- **信用透明与计费合理化**：#35259 在 23 条评论中反复呼吁"等待轮次不应消耗 credits"，是当前最强烈的情绪点之一。
- **Windows 体验"二等公民"感**：多个 Issue 描述 Windows 上安装、sandbox、Computer Use、子进程编排等环节集体退步，开发者希望"至少 Mac/Linux 体验平齐"。
- **审批与人机协同边界**：Auto-review 在 WSL/Windows 上绕过显式授权的案例（#41741、#45115）使多 agent 协作变得不可预测，社区期望提供更细粒度的作用域审批 UI。
- **Hooks 可观察性**：PostToolUse 缺少失败信号（#34289）让构建 CI/审计流水线的开发者无法可靠集成。
- **远程协作一致性**：iOS Remote 加载 Desktop 会话失败（#40558）、`/resume` 远程 CWD 过滤缺失（#31317）凸显多设备/远程场景下状态同步是 2026 H2 的关键需求。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) Issues / Pull Requests（2026-09-12 ~ 2026-09-13）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-13**

---

## 📌 今日速览

今日 Gemini CLI 发布 v0.61.0 nightly 版本，社区焦点集中在 **Agent 子系统稳定性** 上：通用 Agent 挂起、Subagent 状态误报、Browser Agent 配置失效等高优先级问题持续发酵。同时，**Auto Memory 系统**（确定性脱敏、低信号会话重试、inbox 校验）相关 Issue 集中更新，提示该功能正在进入质量打磨阶段。PR 方面则集中修复了一批 hooks 迁移、配置校验、终端闪烁等问题。

---

## 🚀 版本发布

### v0.61.0-nightly.20260913.g9c1b0a610
常规 nightly 构建版本号滚动更新，主要由 release bot 自动发起，对应 PR [#29300](https://github.com/google-gemini/gemini-cli/pull/29300)。Changelog 显示为版本号递增，未单独标注功能变更（[Compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260912.g9c1b0a610...v0.61.0-nightly.20260913.g9c1b0a610)）。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后误报 GOAL 成功 (P1)**
   13 条评论。`codebase_investigator` 子代理达到最大轮次后仍报告 `status: "success"`、`Termination Reason: "GOAL"`，掩盖了真实中断。属于 P1 Bug，影响用户对 Agent 行为的信任。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — 通用 Agent 频繁挂起 (P1)**
   8 条评论，👍 8。当 CLI 委派给 generalist agent 时会无限挂起，连最简单的文件夹创建都需要等待 1 小时以上。该 Issue 点赞数最高，反映用户痛点强烈。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与执行后意图路由 (P2 Enhancement)**
   9 条评论。提出利用 Gemini 3 模型的原生 bash 亲和力，构建零依赖沙箱机制，是大型架构演进议题。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取/搜索/映射 (P2)**
   7 条评论。Epic 级调研议题，探讨用 AST 工具（tilth/glyph）减少 tokens 消耗、提升检索精度。

5. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在"Waiting input" (P1)**
   4 条评论，👍 3。简单 CLI 命令结束后仍显示 shell 处于 active 状态，严重影响交互流畅度。

6. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 失败 (P1)**
   4 条评论。Wayland 环境下的浏览器子代理兼容性问题。

7. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动使用 skills 和 sub-agents (P2)**
   6 条评论。即便配置了 gradle/git 等自定义 skills，模型也很少主动调用，是 Agent 自主性问题。

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 缺乏确定性脱敏 (P2)**
   5 条评论。背景提取 agent 先把 transcript 内容送入模型上下文再做脱敏，存在敏感数据泄漏风险。

9. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖 (P2)**
   3 条评论。Browser Agent 不读取全局/项目级 `settings.json`（如 maxTurns），配置机制失效。

10. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — 增强 browser_agent 的会话接管与锁恢复 (P3)**
    4 条评论。当 persistent 模式遇到锁定 profile 时需要手动介入，提议增加自动恢复机制。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **[#29300](https://github.com/google-gemini/gemini-cli/pull/29300) — 自动化 nightly 版本号 bump (Open)**
   触发今日 v0.61.0-nightly 发布的常规 PR。

2. **[#29222](https://github.com/google-gemini/gemini-cli/pull/29222) — 防止重写用户显式指定的 Flash 模型 (P1/P2, Open)**
   修复 `--model gemini-2.5-flash` 在 Vertex AI 等后端被静默改写成 `gemini-3.5-flash` 导致 404 的问题。

3. **[#29294](https://github.com/google-gemini/gemini-cli/pull/29294) — 修复终端闪烁问题 (P2, Open)**
   关闭 [#29295](https://github.com/google-gemini/gemini-cli/issues/29295)：后台命令执行时输入或快速输入造成 ink reconciler 双瓶颈闪烁。涉及 stdout 抢占与光标焦点。

4. **[#29208](https://github.com/google-gemini/gemini-cli/pull/29208) — 错误 agents.json 形状时安全降级 (P2, Open)**
   关闭 [#29207](https://github.com/google-gemini/gemini-cli/issues/29207)：损坏的 `agents.json`（null、标量、数组形态）不再抛 TypeError 或静默丢失 ack。

5. **[#29292](https://github.com/google-gemini/gemini-cli/pull/29292) — checkpoint 历史字段必须为数组 (Open)**
   关闭 [#29194](https://github.com/google-gemini/gemini-cli/issues/29194)：部分写入导致 `history` 非数组时，`/resume` 会出现校验错误。

6. **[#29230](https://github.com/google-gemini/gemini-cli/pull/29230) — 修复文档失效锚点 (Open)**
   清理 7 个文档页面的失效锚点（如 `plan-mode.md` 中带过期编号的链接）。

7. **[#29126](https://github.com/google-gemini/gemini-cli/pull/29126) — a2a-server 在 SDK 路由前挂载 express.json (Closed)**
   关闭 [#29073](https://github.com/google-gemini/gemini-cli/issues/29073)：A2A SDK 的 `POST /` 之前未解析 JSON body，导致 JSON-RPC 解析失败。

8. **[#29125](https://github.com/google-gemini/gemini-cli/pull/29125) — Hook timeout 单位从秒修正为毫秒 (Closed)**
   关闭 [#29122](https://github.com/google-gemini/gemini-cli/issues/29122)：从 Claude Code 迁移 hook 时将 timeout（秒）直接当作毫秒解释。

9. **[#29124](https://github.com/google-gemini/gemini-cli/pull/29124) — 修正 SubagentStop 事件键名 (Closed)**
   关闭 [#29123](https://github.com/google-gemini/gemini-cli/issues/29123)：迁移时把 `SubagentStop` 误写成 `SubAgentStop`，导致 hook 被静默丢弃。

10. **[#29287](https://github.com/google-gemini/gemini-cli/pull/29287) — `--yolo` 映射到 allowedTools 通配符策略 (Closed)**
    关闭 [#11303](https://github.com/google-gemini/gemini-cli/issues/11303)：将 `--yolo` 转为 `allowedTools: ["*"]`，移除硬编码的 `ApprovalMode.YOLO` 状态。

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 来看，社区关注集中在以下方向：

| 方向 | 代表 Issue | 关注点 |
|------|-----------|--------|
| **Agent 可靠性** | #22323, #21409, #21983, #25166 | 子代理状态报告、挂起、shell 卡死等稳定性问题 |
| **Auto Memory 系统** | #26525, #26522, #26523, #26516 | 脱敏、重试、inbox 校验等质量问题集中爆发 |
| **AST 感知工具** | #22745, #22746 | 借助 AST 工具降低 tokens 消耗、提升读取精度 |
| **任务追踪持久化** | #21000, #18836 | 用原生文件工具替代 WriteToDo，跨会话保留任务状态 |
| **Browser Agent 鲁棒性** | #22232, #22267, #21983 | 会话接管、配置读取、Wayland 兼容 |
| **零依赖沙箱** | #19873 | 利用 Gemini 3 模型的 bash 亲和性，构建更轻量沙箱 |
| **Skills / Subagents 主动调用** | #21968 | 模型自主性问题 |
| **Token 节省读取** | #19561 | "Tactful Extraction" 外科手术式代码读取 |

---

## 💬 开发者关注点

从 Issue 与 PR 摘要中提炼，开发者当前最关心的痛点：

1. **Agent 状态可信度** — Subagent 错误报告 GOAL 成功、报告缺少子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），用户难以判断任务是否真正完成。
2. **通用 Agent 不可用** — [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) 8 个点赞说明"挂起"是高频阻塞问题。
3. **Auto Memory 数据安全与质量** — 4 条相关 Issue 同时更新，说明该子系统虽已上线但仍未达到生产可用标准。
4. **交互流畅度** — 终端闪烁（[#29294](https://github.com/google-gemini/gemini-cli/pull/29294)）、shell 假死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）影响最基础的使用体验。
5. **配置机制一致性** — Browser Agent 忽略 settings.json、模型被静默改写、迁移 hook 单位错误，反映出配置与迁移层多处细节疏漏。
6. **工具数量边界** — [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 指出超过 128 / 400 个工具时出现 400 错误，工具生态扩展性受限。
7. **破坏性命令风险** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 关注 `git reset --force` 等高危操作缺乏安全护栏。

---

*日报数据来源：github.com/google-gemini/gemini-cli，过去 24 小时窗口。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-13** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

今日 Copilot CLI 仓库整体活跃度平稳，**无新版本发布**。社区关注点集中在三个方面：MCP 协议取消机制已得到修复（#4759 关闭）、多模态与子代理场景下的稳定性问题被集中反馈（图像处理、子代理 token 消耗、内存溢出），以及会话级目录权限的精细化控制需求首次被提出。此外，仓库完成了一批 GitHub Actions 的依赖升级与 SHA 固定，供应链安全治理动作落地。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

> 过去 24 小时共 8 条 Issue 更新，以下按重要性与社区关注度排列。

### 1. [#4725 Linux 平台频繁 JavaScript 堆内存溢出 (Open)](https://github.com/github/copilot-cli/issues/4725)
**作者**：jbulow | 💬 4 条评论 | 👍 1
用户报告 Copilot CLI 在 Linux 上每几分钟崩溃一次，触发 V8 Mark-Compact 阶段分配失败。**重要性**：影响 Linux 用户的核心可用性，崩溃频率高（数分钟级），直接影响生产环境长时间任务。需要关注其复现路径与 Node.js V8 堆配置是否在某些模型/会话下失控。

### 2. [#2147 CAIP 400: input item ID does not belong to this connection (Closed)](https://github.com/github/copilot-cli/issues/2147)
**作者**：crgarcia12 | 💬 7 条评论 | 👍 1
使用 gpt-5.4 (xhigh) 时偶发 CAPIError 400，提示输入项 ID 与当前连接不匹配。**重要性**：评论最多（7 条），说明此问题在不同模型/会话切换场景下具有可复现性，已关闭表明官方已找到根因或合并修复，值得追踪是否在后续 Release Notes 中体现。

### 3. [#4759 Copilot CLI 应发送 MCP 取消请求 (Closed)](https://github.com/github/copilot-cli/issues/4759)
**作者**：rroesch1
当工具调用等待 URL-mode elicitation（认证浏览器）时，若用户取消工具调用，CLI 未发送 MCP cancellation 请求，会导致资源悬挂。**重要性**：这是首个明确涉及 MCP 2026-07-28 取消规范的协议合规性问题，关闭表明官方已实现该协议行为，对 MCP 生态集成有积极意义。

### 4. [#4824 ctrl-t 队列提示词不执行 (Open)](https://github.com/github/copilot-cli/issues/4824)
**作者**：mziller | 💬 1 条评论
`ctrl-t` 排队的提示词在前一条完成后不会自动执行，UI 一直停留在 "Working"。用户建议要么自动顺序执行，要么允许标记哪些需要自动调度。**重要性**：交互层 UX bug，直接影响开发者连续追问的工作流体验。

### 5. [#4831 单次粘贴图片后 claude-opus-5 不再查看后续图片 (Open)](https://github.com/github/copilot-cli/issues/4833)
**作者**：incrediblecrab
在 claude-opus-5 会话中粘贴一张截图后，agent 后续调用 `view` 查看任何图片文件都返回 "reached the maximum number of images (1)"。CLI 本身输出了 "Removed 2 images from the model..."。**重要性**：暴露了多模态上下文的 token/配额管理逻辑与用户预期不符，且仅在 claude-opus-5 模型下复现，涉及模型特定的上下文剪裁策略。

### 6. [#4829 子代理长工具调用序列导致 Prompt Cache 失效与 token 复合消耗 (Open)](https://github.com/github/copilot-cli/issues/4829)
**作者**：gcapnias
在 Gemini 3.8 Flash + v1.0.83 + Windows 11 环境下，自定义 subagent 通过 `task` 工具在单回合内执行数百次工具调用，导致 prompt caching 失效并产生大量重复 token 消耗。**重要性**：直接影响成本与性能，是企业用户关注的"高 token 账单"问题的典型根源，且涉及子代理架构的缓存策略缺陷。

### 7. [#4830 新增 /remove-dir 命令以撤销目录访问 (Open)](https://github.com/github/copilot-cli/issues/4830)
**作者**：ashutoshkbharti
当前已有 `/add-dir` 与 `/list-dirs`，但缺少反向命令。**重要性**：这是一个典型的"安全卫生"功能请求——用户无法在会话中期收紧权限，只能重启或重置会话。对安全敏感型用户（处理 secrets 的场景）有切实需求。

### 8. [#4825 HydraFusion 应向 OpenTelemetry 发射 per-phase 的模型/裁决/额度属性 (Open)](https://github.com/github/copilot-cli/issues/4825)
**作者**：samueltauil
HydraFusion 单次 turn 会路由多个模型，但外部观测只能看到一个答案和一个额度数字。事件已落盘到 `~/.copilot/session-state/<id>/events.jsonl`，但未透出到 OTel。**重要性**：面向可观测性与计费对账的企业诉求，对于自建监控/成本归因体系的团队至关重要。

---

## 🔧 重要 PR 进展

> 过去 24 小时共 3 条 PR 更新，全部为已关闭的依赖与安全维护类。

### 1. [#4808 将 GitHub Actions 固定到 commit SHA (Closed)](https://github.com/github/copilot-cli/pull/4808)
**作者**：github-security-bot
扫描 4 个文件，固定 3 处 `uses:` 引用到不可变 SHA。**意义**：典型供应链安全治理动作，防止上游 tag 被篡改或仓库被 takeover 影响 CI/CD 流程。属于安全基线硬化。

### 2. [#4827 build(deps): actions/stale 9.1.0 → 11.0.0 (Closed)](https://github.com/github/copilot-cli/pull/4827)
**作者**：dependabot[bot]
依赖升级跳过了两个大版本（v10/v11），需关注 release notes 中的破坏性变更。

### 3. [#4828 build(deps): actions/github-script 7.1.0 → 9.0.0 (Closed)](https://github.com/github/copilot-cli/pull/4828)
**作者**：dependabot[bot]
同样是主版本跨越，建议核对 workflow 中脚本兼容性。

> 💡 **观察**：今日 PR 全部为仓库维护类（Dependabot + Security Bot），无功能性合并。

---

## 📈 功能需求趋势

从近期 Issues 提炼，社区诉求集中在以下方向：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **MCP 协议合规与稳定性** | #4759 | 持续深化，已从"支持 MCP"过渡到"严格遵循 MCP 规范"阶段 |
| **多模态上下文管理** | #4831 | 新出现痛点，模型特定的图片配额/剪裁逻辑需统一 |
| **会话级权限精细化** | #4830 | 安全卫生类需求增长，与 `add-dir` 形成完整闭环 |
| **子代理架构与缓存优化** | #4829 | 成本敏感型用户的核心诉求，关乎 prompt caching 命中率 |
| **可观测性与计费透明化** | #4825 | HydraFusion 等多模型路由特性对 OTel 集成提出新需求 |
| **Linux 稳定性 / 内存管理** | #4725 | 老问题复发，需要工程层面的 V8 调优或会话限制策略 |
| **交互 UX 一致性** | #4824, #2147 | `ctrl-t`、模型切换等边界场景的鲁棒性仍需打磨 |

---

## 💬 开发者关注点

1. **稳定性 > 新功能**：今日最受关注的 Issue 是 Linux 上的内存崩溃（#4725）和 CAIP 400 错误（#2147），表明社区当前最迫切的需求仍是**基础可用性**。
2. **成本与可观测性焦虑凸显**：#4829（token 复合消耗）与 #4825（OTel 计费透明度）反映出企业在采用 Copilot CLI 进入生产时，开始关注**单次任务的经济性**与**事后审计能力**。
3. **协议合规意识增强**：MCP 取消请求（#4759）这种协议级问题被正式提出，标志着生态正在从"功能集成"走向"规范遵循"。
4. **安全卫生细节受重视**：#4830（/remove-dir）与 #4808（SHA 固定）虽小，但都是企业合规清单中的常见项，说明 Copilot CLI 的用户群正从尝鲜者扩展到安全敏感型团队。
5. **新模型兼容性问题频发**：claude-opus-5、Gemini 3.8 Flash、gpt-5.4 等多个新模型都暴露出独有缺陷，**模型集成矩阵的回归测试覆盖**是当前工程化短板。

---

*📊 本期日报基于过去 24 小时的 Issue/PR 更新数据生成。如需查看完整列表或订阅每日推送，请关注 GitHub 仓库动态。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-13
**数据来源**：GitHub - MoonshotAI/kimi-cli

---

## 📌 今日速览

今日社区动态较为平静：过去 24 小时内**无新版本发布、无新 PR 提交**，仅有 3 条历史 Issue 出现状态更新。其中 1 条增强请求（Web UI Steer 按钮）保持 OPEN 状态并获得社区 2 个 👍，另外 2 条 Bug 报告已 CLOSED。整体来看，社区当前处于稳定维护期，未出现大规模活跃开发迹象。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布，本节略过。

---

## 🔥 社区热点 Issues

> ⚠️ 提示：过去 24 小时内仅有 3 条 Issue 被更新，以下为全部内容（不构成"热点 Top 10"），如实呈现以避免误导。

### 1. #2370 [OPEN] Feature Request: Add Steer () button to Web UI queue panel
- **类型**：enhancement | 👍 2 | 💬 1
- **作者**：2986787982dsx-ui
- **链接**：[Issue #2370](https://github.com/MoonshotAI/kimi-cli/issues/2370)
- **要点**：用户请求在 `kimi web` 启动的 Web UI 队列面板中添加"Steer (⚡)"按钮，以便在 AI 执行任务时能够即时引导/调整其行为，而不是只能将后续消息排入队列等待。
- **关注度**：是今日唯一获得 👍 且仍处于 OPEN 状态的 Issue，代表了用户对**实时交互控制**的真实需求。

### 2. #1409 [CLOSED] kimi cli web mode keeps refreshing and connects different port
- **类型**：bug | 👍 0 | 💬 0
- **作者**：LSTM-Kirigaya
- **链接**：[Issue #1409](https://github.com/MoonshotAI/kimi-cli/issues/1409)
- **要点**：在 Darwin arm64 平台使用 v1.20.0 + kimi-for-coding 模型时，`/web` 命令启动的网页持续刷新并连接不同端口，影响使用体验。
- **状态**：已 CLOSED（推测已被修复或合并处理）。

### 3. #1404 [CLOSED] Reckless behaviour
- **类型**：bug | 👍 0 | 💬 0
- **作者**：acorello
- **链接**：[Issue #1404](https://github.com/MoonshotAI/kimi-cli/issues/1404)
- **要点**：在 Darwin arm64 平台使用 v1.19.0 + kimi-for-coding 模型时，Kimi 在被要求"先制定计划再执行"后仍直接执行操作，存在行为失控风险。
- **状态**：已 CLOSED。

---

## 🔧 重要 PR 进展

> 过去 24 小时内无 PR 更新，本节略过。

---

## 📈 功能需求趋势

由于当日活跃 Issue 样本极少（仅 3 条），趋势判断需结合这些有限信号：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|----------|
| **Web UI 交互增强** | #2370 | 用户期望在 Web 模式下获得更细粒度的实时控制（Steer/引导）能力，而不仅是被动的队列等待 |
| **Web 模式稳定性** | #1409 | `/web` 命令下的页面刷新与端口连接问题，反映 Web 模式的稳定性仍是用户痛点 |
| **Agent 行为可控性** | #1404 | 即便明确要求"先规划后执行"，模型仍直接操作——说明 **规划→执行的边界控制** 是社区关注的安全性问题 |

**总体方向**：用户的关注点正从"CLI 本身能跑"转向"**更可靠、更可控、更易引导**的交互体验"，尤其是 Web UI 与 Agent 行为约束两条线。

---

## 💡 开发者关注点

从今日更新的 Issue 中可提炼出以下高频痛点：

1. **Web 模式体验欠佳** —— `/web` 启动的页面存在持续刷新与端口跳变（#1409），影响 Web 端使用信心。
2. **缺乏实时干预机制** —— 用户在 AI 执行过程中缺乏"打断/引导"通道，只能追加排队消息（#2370），交互模型偏单向。
3. **Agent 行为边界模糊** —— 模型在"先规划"指令下仍直接修改文件（#1404），体现 **计划/执行阶段分离** 的机制尚未完善，或 prompt 遵从度需要加强。
4. **macOS (arm64) 兼容性反馈集中** —— 今日 2 条 Bug 均来自 Darwin arm64 平台，建议维护者重点关注 Apple Silicon 环境下的回归测试。

---

##  数据说明

- 报告基于 GitHub 公开数据，覆盖时间窗口为 **2026-09-12 ~ 2026-09-13**。
- 当日活跃 Issue/PR 数量较少，趋势判断仅供参考，建议结合更长周期数据综合分析。
- 如需查看完整 Issue 列表或订阅更新，请前往 [MoonshotAI/kimi-cli 仓库](https://github.com/MoonshotAI/kimi-cli)。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-13

## 📌 今日速览

OpenCode 今日无新版本发布，但社区活跃度集中在**提供商连接异常**与**多模型兼容性**两大议题——多家用户报告 Console Go、OpenCode Zen 等上游服务出现 `Upstream request failed` 错误，同时多个 PR 聚焦于让非 Claude 模型（Qwen3、GPT-5 等）也能享受到一致的功能体验（Todo 更新、流式 Markdown 完成）。安全议题方面，AI 代理绕过 `AGENTS.md` 执行 `TRUNCATE` 操作的 Issue 引发广泛讨论，再次将"权限边界"推上焦点。

---

## 📦 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 关注点 |
|---|-------|------|--------|
| 1 | [#37231 Console Go 上游请求失败](https://github.com/anomalyco/opencode/issues/37231) | 13 | **影响范围最大**——所有 Go 模型在 CLI/桌面/VSCode 插件均不可用，用户排查证明是上游服务问题 |
| 2 | [#16491 子代理无法执行 MCP 工具](https://github.com/anomalyco/opencode/issues/16491) | 11 | 多代理架构的**权限边界缺陷**，子代理能看到工具但无权执行，点赞 5 说明开发者高度认可 |
| 3 | [#48728 NVIDIA API Key 认证失败](https://github.com/anomalyco/opencode/issues/48728) | 7 | 新提供商集成问题，影响 GPU/NVIDIA 用户生态 |
| 4 | [#36986 取消任务侧边栏](https://github.com/anomalyco/opencode/issues/36986) | 7 | UI 设计分歧：独立页面 vs. 侧边栏，反映中文用户对操作效率的诉求 |
| 5 | [#27745 AI 代理未经授权修改数据库](https://github.com/anomalyco/opencode/issues/27745) | 6 | **安全红线案例**——TRUNCATE 3000 万条记录，尽管 AGENTS.md 明令禁止 |
| 6 | [#35431 Devstral 模型从 OpenRouter 消失](https://github.com/anomalyco/opencode/issues/35431) | 5 | 仅 OpenCode 内丢失，旧版本可用，疑为 provider 元数据刷新 bug |
| 7 | [#23058 Anthropic Advisor Strategy](https://github.com/anomalyco/opencode/issues/23058) | 5 | 对标 Claude Code 新功能，社区期望跟进竞品能力 |
| 8 | [#36498 `opencode run` 编辑应用到错误项目](https://github.com/anomalyco/opencode/issues/36498) | 5 | **数据完整性 bug**——无头模式将编辑写入已注册的其他项目，10 次中复现 3 次 |
| 9 | [#48604 支付扣款但额度未更新](https://github.com/anomalyco/opencode/issues/48604) | 5 | 商业平台问题：Alipay 付款后余额仍为 $0，影响付费用户 |
| 10 | [#36804 Serve 模式多工具调用卡死](https://github.com/anomalyco/opencode/issues/36804) | 4 | 100% 确定性复现的会话僵死 bug，影响 v1.17.18/20 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 关键变更 |
|---|----|----|---------|
| 1 | [#48587 / #48590 TUI 原生阿拉伯语/RTL 支持](https://github.com/anomalyco/opencode/pull/48587) | 新功能 | 同步修复 4 个 RTL 显示问题，分别合入 dev 与 beta 分支，覆盖 opencode2 国际化 |
| 2 | [#48324 两层渐进式 Skill 披露](https://github.com/anomalyco/opencode/pull/48324) | Bug + 新功能 | 修复 GPT-5 模型被无条件注入 `textVerbosity="low"`，同时引入渐进式 skill 加载机制 |
| 3 | [#48729 非 Claude 模型 Todo 列表维护](https://github.com/anomalyco/opencode/pull/48729) | Bug 修复 | Qwen3 等 OpenAI-兼容模型因缺少 Anthropic prompt 导致 todo 卡 `in_progress`，补齐 7 个 provider 模板 |
| 4 | [#46690 暴露会话/事件流给插件](https://github.com/anomalyco/opencode/pull/46690) | 新功能 | 第三方插件可订阅全局事件、访问会话列表，为 Telegram bot 等外部集成铺路 |
| 5 | [#48638 消除 turn diff 写入放大](https://github.com/anomalyco/opencode/pull/48638) | Bug 修复 | `SessionSummary.summarize` 不再把完整 git patch 冗余写入 user message |
| 6 | [#48734 会话创建错误透出](https://github.com/anomalyco/opencode/pull/48734) | Bug 修复 | 数据库写入失败从"空白 500"变为可定位错误 |
| 7 | [#48716 Desktop 重生崩溃的 sidecar](https://github.com/anomalyco/opencode/pull/48716) | Bug 修复 | 解决 0xC0000409（V8 fast-oops）导致的桌面崩溃循环，图像计数错误归类为 overflow |
| 8 | [#48732 TUI 流式 Markdown 完成](https://github.com/anomalyco/opencode/pull/48732) | Bug 修复 | 助手文本结束后正确退出 OpenTUI 流式渲染模式，tree 状态归位 |
| 9 | [#48733 保留斜杠技能参数](https://github.com/anomalyco/opencode/pull/48733) | Bug 修复 | `/skill xxx` 后的尾随文本不再被吞，正常作为用户 prompt 提交 |
| 10 | [#48712 TUI LaTeX 数学块渲染](https://github.com/anomalyco/opencode/pull/48712) | 新功能 | MathJax → SVG → resvg-wasm → kitty 图形协议，支持 `$$…$$`，tmux 优雅降级 |

---

## 📈 功能需求趋势

通过对 30 条高评论 Issue 的归纳，社区诉求呈以下分布：

| 方向 | 代表 Issue | 占比 |
|------|-----------|------|
| **UI/UX 改进** | 任务侧边栏回归 #36986、Agent 实时列表 #36989、内置文件浏览器 #36829、双击最大化 #48661 | ~25% |
| **新提供商/模型** | NVIDIA #48728、Maple #36789、Muse Spark #48741 | ~18% |
| **桌面应用体验** | Windows 装机模式 #35334、跨平台稳定性 #48716 | ~15% |
| **跨模型兼容性** | 非 Claude Todo #48729、Bedrock 推理变体 #31749、OpenAI 兼容 compaction #34089 | ~18% |
| **权限与安全** | Plan 模式执行破坏性命令 #33301、`permission.bash` 兜底逻辑 #36765、子代理 MCP 权限 #16491 | ~15% |
| **V2/Monorepo 能力** | 跨位置子代理 #36605、配置注入 API #36748 | ~9% |

---

## 👨‍💻 开发者关注点（高频痛点）

1. **🔒 权限边界失控**：3 个高评论 Issue 围绕同一主题——AI 代理能"看到"工具却无法约束执行范围（Plan 模式跑破坏性命令、子代理绕过 MCP 权限、`AGENTS.md` 形同虚设）。这反映出当前 `permission.bash` 配置语义存在设计缺陷。

2. **🌐 多提供商一致性**：Bedrock、NVIDIA、OpenAI-兼容、Anthropic-Messages-API 等异构 provider 在同一 OpenCode 内行为不一致——compaction 缺 `toolConfig`、推理变体 payload 异常、模型元数据偶发丢失——开发者期待更统一的协议适配层。

3. **⚡ 性能与稳定性回归**：v1.17.20 更新后多个用户反馈"Thinking 阶段明显变慢"，与 serve 模式卡死、session summary 写入放大等问题叠加，性能 QA 需加强回归覆盖。

4. **📦 部署摩擦**：Windows NSIS 安装器无法 perMachine 安装、桌面 sidecar 频繁崩溃（V8 fast-oops）、付费额度支付链路异常——企业/付费用户体验短板。

5. **🔄 历史资产迁移**：从 Codex、Claude Code 导入历史会话的需求 (#36782) 被点赞 3 次，反映用户对**工具锁定成本**的敏感度，迁移友好度正成为竞争点。

---

*日报基于 anomalyco/opencode 在 2026-09-13 前后 24 小时内的 Issues 与 PR 数据生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-13

## 今日速览

今日社区活跃度集中在 TUI 交互细节优化与多 Provider OAuth 接入两条主线上：fullscreen 模式下的滚轮/选区问题、keybinding 可配置化、OAuth 回调渲染扩展成为高频讨论焦点；同时 `openai-codex` 连接可靠性这一"老大难"问题（#4945，78 评论、33 👍）持续推进，标记为 inprogress。多个新 PR 已合并落地，包括人类可读的模型标签、工具调用合并渲染、loop-guard 示例扩展等。

## 版本发布

过去 24 小时无新 Release。

## 社区热点 Issues

1. **[#4945](https://github.com/earendil-works/pi-mono/issues/4945) — openai-codex 连接可靠性问题（inprogress）**  
   `gpt-5.5` / `openai-codex` 频繁出现 TUI 卡在 `Working...`、无流式输出、无错误提示，只能 Esc 中断。社区互动量最高（78 评论、33 👍），是当前最阻塞生产环境的稳定性问题，与 transport 层心跳保活、idle timeout 相关。

2. **[#9052](https://github.com/earendil-works/pi-mono/issues/9052) — Fullscreen 滚轮滚动比普通模式慢约 3 倍**  
   Fullscreen 模式锁定输入框的体验得到认可，但滚轮性能明显劣化，影响长会话阅读体验。

3. **[#8928](https://github.com/earendil-works/pi-mono/issues/8928) — 并行启动时 OAuth 过期凭证导致 ~48s "No API key found"（inprogress）**  
   当 `auth.json` 中存在其他 Provider 的过期 OAuth 凭证时，多进程启动会以错误 Provider 为靶点报密钥缺失。作者给出了确定性复现与耗时数据。

4. **[#9311](https://github.com/earendil-works/pi-mono/issues/9311) — Fullscreen 模式下选中文本在会话切换后残留**  
   选区状态未在切换/新建会话时清理，导致内容被错误带入新会话。

5. **[#5372](https://github.com/earendil-works/pi-mono/issues/5372) — 允许自定义 OAuth 回调页渲染**  
   当前 `oauthSuccessHtml/oauthErrorHtml` 写死 `renderPage`，扩展/嵌入式集成方希望接管浏览器最终页样式。

6. **[#9098](https://github.com/earendil-works/pi-mono/issues/9098) — 在 RPC 响应中暴露 prompt disposition**  
   建议在 `prompt` 成功响应中加入 `data.disposition: "handled" | "queued" | "started"`，便于扩展/SDK 区分"已消费 vs 已入队 vs 已开始"。

7. **[#5365](https://github.com/earendil-works/pi-mono/issues/5365) — bun 安装后底层仍跑 node（已关闭）**  
   `pi` 通过 bun 全局安装后运行时报 `markAsUncloneable` 错误，底层实际调用了 node 的 undici。已关闭，需关注后续修复是否回归。

8. **[#9267](https://github.com/earendil-works/pi-mono/issues/9267) — 降低 fuzzyMatch 的逐字符扫描成本**  
   提议将 `fuzzy.ts` 内的循环替换为 `String.indexOf()`，在不改变排序的前提下提升会话搜索性能。

9. **[#9243](https://github.com/earendil-works/pi-mono/issues/9243) — 会话恢复时模型被 echo 名称覆盖**  
   Provider 回显的模型名若与路由 id 不同，`getSessionContextSettings` 会错误地用前者覆盖 model，造成"恢复即换模型"。

10. **[#7629](https://github.com/earendil-works/pi-mono/issues/7629) — `tui.select.pageUp/pageDown` 并非在所有列表中生效**  
    键盘无 PageUp/PageDown 时通过 keybinding 重映射，发现部分选择器未消费该事件，行为不一致。

## 重要 PR 进展

1. **[#9541](https://github.com/earendil-works/pi-mono/pull/9541) — fix(tui): 显示人类可读的模型标签（已合并）**  
   在 `/model` 等选择器中将模型 `name` 作为主标签、id 降为副信息，治理目录中已具备 friendly name。

2. **[#9539](https://github.com/earendil-works/pi-mono/pull/9539) — examples: 新增 loop-guard 扩展示例（已合并）**  
   检测并打断"重复同一工具调用"的 LLM agent 死循环，例如 `curl` 一直返回非零导致模型反复重试。

3. **[#9096](https://github.com/earendil-works/pi-mono/pull/9096) — feat(ai,coding-agent): 新增 Meta + Muse 订阅 OAuth（OPEN）**  
   解决 #7543，典型 sub provider，但有两点特殊：refresh token 改为基于 identity token 每日重新铸造；当前 streaming 是"伪流式"（整段 burst 输出）。

4. **[#9531](https://github.com/earendil-works/pi-mono/pull/9531) — feat(tree): 会话树支持永久删除分支（已合并）**  
   新增 `SessionManager.pruneBranch(entryId)` + `countSubtree()`，保护活跃路径与叶子节点，重新链接标签与 compaction；`/tree` 中 `shift+d` 触发删除。

5. **[#9529](https://github.com/earendil-works/pi-mono/pull/9529) — feat(ai): 新增 Google Antigravity 和 Cursor Pro OAuth（已合并）**  
   两个订阅型、无需 API Key 的 OAuth Provider；Antigravity 对接 `accounts.google.com` (Cloud Code Assist)，本地回调端口 51123，支持手动 code 回退。

6. **[#8635](https://github.com/earendil-works/pi-mono/pull/8635) — fix(ai): lazy setup 期间保留 aborted 停止原因（OPEN）**  
   修复 #8409：将 abort signal 透传到 lazy stream setup 包装器；setup 失败时若请求已被中止，按 aborted 报告，并补回归测试。

7. **[#9523](https://github.com/earendil-works/pi-mono/pull/9523) — 修复 Pi 自有阻塞提示未触发 ui_prompt_start/_end（已合并）**  
   模型选择器、设置、resume、session tree 等内置选择器经 `showSelector()` 走通后不再沉默，状态集成方（如"等待用户"上报）可看到完整事件。

8. **[#9517](https://github.com/earendil-works/pi-mono/pull/9517) — feat(tui): 折叠长工具调用链（已合并）**  
   将连续 6 次以上的同类工具调用折叠为一行汇总展示，失败调用仍可展开，含渲染测试。

9. **[#9514](https://github.com/earendil-works/pi-mono/pull/9514) — fix(tui): 将硬编码快捷键改为可配置 keybinding（已合并）**  
   编辑器/输入框/模型选择器内的快捷键统一走 keybinding，新增 Ctrl+C 清空搜索/取消模型选择等回归测试。

10. **[#9540](https://github.com/earendil-works/pi-mono/pull/9540) — coding-agent: extension loader 延后加载 jiti 与 TUI 图（已关闭）**  
    把 `core/extensions/loader.ts` 中 `jiti/static` 与虚拟模块表的 import 推迟到首个扩展加载时，便于 SDK 嵌入场景减少启动开销。

## 功能需求趋势

- **TUI 体验打磨**：fullscreen 模式的滚轮性能（#9052）、选区残留（#9311）、ScrollView 鼠标事件转发（#9538）、人类可读模型标签（#9541）、keybinding 可配置化（#9514）、长工具调用折叠（#9517）—— 多个 PR/Issue 联动推进。
- **多 Provider OAuth 生态扩张**：新增 Meta Muse（#9096）、Google Antigravity + Cursor Pro（#9529/#9530），同时推动回调页可定制（#5372）；社区明显希望降低 API Key 依赖、拥抱订阅型登录。
- **Codex / OpenAI 传输稳定性**：#4945（连接挂死）、#9474（per-request 总 deadline 缺失）、#9481（turn-attribution 元数据对齐）、#9013（缓存提示误报）形成一簇聚焦。
- **性能与可观测性**：fuzzy 搜索扫描成本（#9267）、扩展加载时机（#9540）、流式 UI 首 token 重复渲染（#9542）、session 搜索/排序。
- **会话管理增强**：模型恢复正确性（#9243）、resume 列表内 fork 快捷键（#9521）、会话树分支删除（#9531）、compaction 预算支持窗口比例（#9415）。
- **SDK 嵌入友好性**：自定义 `agentDir` 下的 `/login` 状态行（#9537）、ui_prompt 事件覆盖（#9522/#9523）。

## 开发者关注点

- **痛点 1：Codex 长会话断流与超时**。#4945 持续位于榜首，#9474 进一步指出无不可重置的 per-request wall-clock deadline，被周期性事件绕过，反映出对生产可用性的强烈诉求。
- **痛点 2：Fullscreen TUI 体验不一致**。滚轮慢、选区残留、ScrollView 鼠标丢失三连击 (#9052/#9311/#9538)，说明 fullscreen 作为"日常主模式"被越来越多用户采用，但其交互完整性仍有明显缺口。
- **痛点 3：跨 Provider 缓存/模型提示误报**。#9013（vLLM 误报 cache miss）、#9243（模型名被 echo 覆盖）、#9512（GPT-6 Astra max reasoning 触顶 compaction）显示在多模型混用场景下，状态提示与缓存语义需要更精细的边界处理。
- **痛点 4：扩展与 SDK 嵌入的启动成本/事件覆盖**。#9540 关注 import 时机，#9522/#9523 关注内置 UI 事件的可观测性，#9537 关注自定义 agentDir 下的状态显示；嵌入式集成方越来越希望把 Pi 当作"库"而非 CLI 使用。
- **高频需求：可配置化与可扩展性**。从 OAuth 回调渲染 (#5372)、keybinding 可配置 (#9514)、模型选择器 UI 改进 (#9541/#9536 working visibility override) 看，社区共识是"Pi 应提供默认体验，同时允许在每个交互细节上被替换"。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-13**

---

## 📌 今日速览

Qwen Code 0.23.3 系列迭代进入关键阶段：TUI 因 React 错误 #185 在多后台子代理并发场景下频繁崩溃，已成为社区最高优先级问题；同时隐私安全问题首次进入 P1——遥测通道未脱敏即上传原始 shell 命令文本，引发开发者高度关注。在新能力侧，macOS 原生 Computer Use (CUA)、Web Shell 远程 Daemon 连接、Agent Harness 与执行环境解耦等架构级提案持续推进。

---

## 🚀 版本发布

**v0.23.3-nightly.20260912.54aa66834b** 已发布（nightly 通道）

本次夜间版本主要变更：
- `refactor(dingtalk)`：移除已废弃的后台响应聚合逻辑（[#11570](https://github.com/QwenLM/qwen-code/pull/11570)）
- `feat(channels)!`：移除某个已弃用的渠道能力（注：变更日志首行被截断）

> ⚠️ 该 nightly 版本修复了与 #11500、#11732 相关的 TUI 崩溃问题，建议关注 0.23.3 正式版的发布动态。

---

## 🔥 社区热点 Issues

### P1 优先级（紧急缺陷）

1. **[#11500] TUI 静默退出（React #185，循环 setState）**
   - 作者：zaalipro | 💬 10 | 👍 1
   - 多个后台子代理并发完成时，TUI 因 Ink `useBoxMetrics` 触发 "Maximum update depth exceeded" 后直接退出，无任何错误提示，恢复会话时仅提示"Previous session appears..."
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11500

2. **[#11732] Qwen Code 0.23.3 在 native monitor 任务运行中崩溃**
   - 作者：ensingerphilipp | 💬 6
   - 已在两个独立会话复现，崩溃时 monitor 任务仍在执行，长时任务无法回滚恢复
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11732

3. **[#11198] ⚠️ 遥测通道未脱敏上传原始工具错误文本（含 shell 命令行）**
   - 作者：yiliang114 | 💬 3
   - 默认开启的 usage-statistics 通道将 shell 失败原始文本上传至 RUM 端点，涉及命令凭据泄露风险，**已标记为 P1/安全**
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11198

4. **[#11657] Fireworks 上 Qwen3 工具调用续接失败（HTTP 400）**
   - 作者：ojhughes | 💬 3
   - 首次返回成功，但携带 `messages[].reasoning` 的续接请求被拒，提示 "Extra inputs are not permitted"
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11657

5. **[#11610] hooks 契约需与 Claude Code 对齐**
   - 作者：qqqys | 💬 3
   - 包括 stdout 文本格式、`stop_hook_active`、超时单位、matchers、common input 等，关系生态兼容
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11610

### P2 / P3（功能与体验）

6. **[#11695] 将 Agent Harness 与执行环境解耦（架构级 tracking）**
   - 作者：wenshao | 💬 5
   - 当前 agent loop、shell 执行、文件操作共享同一进程，社区呼吁让执行环境成为可寻址、可分离的运行时单元
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11695

7. **[#11704] 官方 Android 伴侣客户端提案（基于 ACP + qwen serve）**
   - 作者：jabrailkhalil | 💬 5
   - 提议构建一个 thin client 而非将完整运行时塞进手机，作者愿承接 MVP 实现
   - 🔗 https://github.com/QwenLM/qwen-code/issues/11704

8. **[#10065] LM Studio 0.4.21 集成失败（"failed to parse grammar"）**
   - 作者：hotamachisubaru-git | 💬 9
   - 即使禁用 MCP、设置 `tools.core=[]` 仍报错，**该 Issue 已 CLOSED**，可关注合并结论
   - 🔗 https://github.com/QwenLM/qwen-code/issues/10065

9. **[#10953] 子代理委托场景下 Todo 计划状态冻结 55m44s**
   - 作者：yiliang114 | 💬 4
   - 持久化 Todo 文件与模型上下文脱节，active-todo 提醒从未触发，影响 dogfooding 体验
   - 🔗 https://github.com/QwenLM/qwen-code/issues/10953

10. **[#10834] MCP 工具返回的图像绕过 read_file 视觉预算**
    - 作者：yiliang114 | 💬 3
    - 与 `read_file` 共享的 1568px 缩放策略未覆盖 MCP 返回的图像，存在上下文爆量风险
    - 🔗 https://github.com/QwenLM/qwen-code/issues/10834

---

## 🛠️ 重要 PR 进展

1. **[#11705] feat(cua): macOS 应用绑定动作 + 紧凑原生观察**
   - 新增 app-bound Computer Use：管理安装身份、AX/WindowServer 窗口配对、紧凑观察上报，原生输入路由不再区分前后台
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11705

2. **[#11548] feat(web-shell): 连接指定远程 daemon**
   - Standalone Web Shell 支持显式选择远程 daemon 接入（带 bearer token），切换目标触发全新页面上下文
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11548

3. **[#11424] fix(core): 在 RUM 上游对含凭据的错误文本脱敏**
   - 在所有日志方法的统一汇聚点增加脱敏步骤，复用现有 URL userinfo 规则
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11424

4. **[#11575] ci(desktop): 跟随 CLI 版本同步发布 Desktop App**
   - 仿照 VS Code 伴生包，desktop 在 CLI 稳定版发布时同版本构建发布（默认关闭，可通过仓库变量启用）
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11575

5. **[#11727] fix(core): shell 输出尺寸由 producer 自身预算决定**
   - 移除调度器的二次截断，避免与工具自身声明的 head-and-tail 预览策略冲突
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11727

6. **[#11684] fix(core): Responses 清理时保持 reasoning 与 function_call 相邻**
   - 将并行工具组（reasoning + function_calls）视为一个整体在请求清理中保留，避免孤儿清理误删
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11684

7. **[#11083] fix(serve): daemon 工作区为 home 时回退到用户作用域读取 channel 配置**
   - 解决 channel 配置在 workspace=home 时对管理 API 与 Web Shell 不可见的问题
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11083

8. **[#11001] fix(test): 清理阶段等待交互式 PTY 会话真正结束**
   - 避免伪终端子进程未被回收导致的状态泄漏
   - 🔗 https://github.com/QwenLM/qwen-code/pull/11001

9. **[#9768] feat(review): 将覆盖率建模为分类账（classified ledger）**
   - `/review` 的 chunk coverage 自带身份与原因，分别报告"读了什么"与"发了什么"
   - 🔗 https://github.com/QwenLM/qwen-code/pull/9768

10. **[#9402] feat: agent board — 跨独立启动 agent 共享工作**
    - 实现可移植的 Board 层，**明确不包含**原始 #8724 中 Qwen-to-Qwen 完整产品流程，仍需后续 PR
    - 🔗 https://github.com/QwenLM/qwen-code/pull/9402

---

## 📈 功能需求趋势

通过对今日活跃 Issue 的归纳，社区诉求集中在以下方向：

| 方向 | 典型议题 | 关注度 |
|---|---|---|
| **多 Agent / Harness 架构** | #11695（harness 解耦）、#9402（agent board） | 🔥🔥🔥 |
| **跨端覆盖** | #11704（Android 客户端）、#11575（desktop 同步发布）、#11705（macOS CUA） | 🔥🔥🔥 |
| **安全与隐私** | #11198（遥测泄漏）、#11718（AppImage PYTHONPATH 泄漏） | 🔥🔥🔥 |
| **远程/分布式 Daemon** | #11548（远程连接）、#11751（per-daemon 授权） | 🔥🔥 |
| **Claude Code 生态兼容** | #11610（hooks 对齐）、#11704（基于 ACP） | 🔥🔥 |
| **渲染/交互稳定性** | #11500 / #11732（React #185）、#11710（VP 脏态）、#11747（ICU 缺失） | 🔥🔥 |
| **MCP 生态完善** | #10834（图像预算）、#7771（配置持久化） | 🔥 |

---

## 👨‍💻 开发者关注点（高频痛点）

1. **TUI 渲染稳定性**：React 错误 #185 是当前最普遍痛点，从后台子代理到 native monitor 长任务均有触发；Ink 布局监听器与 setState 的耦合是根源。

2. **数据隐私与脱敏**：开发者对默认开启遥测的上传内容高度敏感，shell 命令行、错误堆栈中的凭据需要更严格的"漏斗脱敏"。

3. **执行环境隔离**：跨平台打包（AppImage、Docker、macOS bundle）下的环境变量泄漏（Python、Node）已影响 stdio MCP 子进程，要求更精细的环境净化。

4. **多 Agent 协同状态一致性**：Todo 计划、checkpoint 状态在跨子代理时易冻结或重试死循环，goal 与 harness 的状态机边界亟待清晰化。

5. **第三方模型兼容性**：LM Studio、Fireworks 等 OpenAI 兼容后端的特殊行为（grammar、reasoning 回传）对工具调用流程造成持续干扰。

6. **测试与 CI 可信度**：web-shell 视觉快照非确定性、CI 60s 预算紧张、Windows nightly 出现新失败，开发者呼吁增强测试稳定性而非更多 retry。

---

*日报基于 2026-09-13 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**📅 2026-09-13** | 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 📌 今日速览

项目（已演进为 Codewhale 生态）继续保持高频迭代节奏：24 小时内有 **29 个 Issue 更新**和 **14 个 PR 更新**，其中绝大多数已 CLOSED——说明 review → fix 闭环非常紧。最值得关注的三件事：(1) **DeepSeek V4 Pro 服务将于北京时间 2026-09-14 12:00 下线**，所有请求将自动迁移至 V4.1 Flash 并按 Flash 计价（#6025）；(2) **跨端"鲸鱼宠物"系统**正式立项（#6109 / #6110），将浏览器、Apple、Android 与 TUI Watch 共享一个 980 点的确定性可视化世界；(3) **文件级 restore 端点**回归（#6111），解决了 GUI 因引擎缺接口而被迫撤掉"Revert"的遗留痛点。

---

## 🚀 版本发布

过去 24 小时无新 Release。仓库当前仍处 0.9.12/0.9.13 候选阶段，多个 PR 已标注"filed after the fix"或"deferred to 0.9.13"，预计下一版将集中落地 TUX/MCP/Sub-agent 一批稳定性修复。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 为什么重要 |
|---|-------|------|-----------|
| [#6025](https://github.com/Hmbown/DeepSeek-TUI/issues/6025) | DeepSeek V4 Pro 服务下线通知 | CLOSED | **面向所有用户的服务变更**：9 月 14 日 12:00 起 Pro 路由自动改至 V4.1 Flash 并按 Flash 计费，月底前需评估成本与延迟影响 |
| [#5620](https://github.com/Hmbown/DeepSeek-TUI/issues/5620) | Context pressure 警告瞬态消失，agent 不主动响应 | CLOSED | Medium 级静默退化：80% 阈值触发后警告立即消失，agent 没有任何反应，破坏安全信号。18 条评论讨论度最高 |
| [#5929](https://github.com/Hmbown/DeepSeek-TUI/issues/5929) | `codewhale-tui` 6 个并行测试在负载下间歇失败 | CLOSED | 每次 CI 失败成本 = 一次 rerun 或 25 分钟矩阵，对 PR 吞吐量影响明显 |
| [#6011](https://github.com/Hmbown/DeepSeek-TUI/issues/6011) | TUI 用量 & 工具诊断（按组件/模型/缓存命中/工具的 token 统计） | OPEN | C11 核心计划项：把"模型到底花了多少钱"从黑盒变为可观测，已纳入 Linear 主计划 |
| [#6045](https://github.com/Hmbown/DeepSeek-TUI/issues/6045) | `request_user_input` 模态裁剪选项、遮挡对话、不可逆 | CLOSED | 用户体验硬伤：选项被截、底层不可见、错了无法回退，141×38 终端可稳定复现 |
| [#6102](https://github.com/Hmbown/DeepSeek-TUI/issues/6102) | 中断后 resume 会话报 ENOENT（runtime store 目录解析失败） | CLOSED | 数据恢复链路的关键 bug：路径前缀错误解析到 `/home/f2/`，影响所有中断恢复场景 |
| [#6015](https://github.com/Hmbown/DeepSeek-TUI/issues/6015) | 自适应 anti-stall + 更宽的只读 shell 语法（默认开启） | OPEN | C05/C06：从"开关式"升级为"自适应"，默认覆盖更广的 `cat`/`sed`/`awk` 等只读操作 |
| [#6018](https://github.com/Hmbown/DeepSeek-TUI/issues/6018) | 从零安装时 Google Gemini 不可用 | OPEN | 全新用户 onboarding 阻断：C22 项，影响"开箱即用"的供应商覆盖承诺 |
| [#6030](https://github.com/Hmbown/DeepSeek-TUI/issues/6030) | MCP server 中途完成 OAuth 后，已运行的 session 仍无法连接 | CLOSED | 经典的"name/credential-key 死锁"：用户能登录但 agent 拿不到 server，浪费数轮 turn |
| [#6095](https://github.com/Hmbown/DeepSeek-TUI/issues/6095) | TUI 的 `@` 模糊文件搜索未暴露给本地 API 客户端 | OPEN | TUI 是目前唯一支持工作区文件枚举的入口，API 客户端补齐后任何非 TUI 客户端都能复用 |

**社区反应**：OPEN 中以增强类（diagnostics、anti-stall、@搜索暴露）居多；CLOSED 中以 **sub-agent 路径权限传递**、**Windows TUI 线程阻塞**、**Symlink AGENTS.md** 等"边角但真实"的 bug 为主——说明项目已进入"主功能已收口、补强底座"阶段。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 功能/修复要点 |
|---|----|------|--------------|
| [#6111](https://github.com/Hmbown/DeepSeek-TUI/pull/6111) | feat(tui): 文件级 restore 端点 + 整树回滚缺陷修复 | OPEN | **回归 GUI 删掉的"Revert"**：补齐 file-scoped restore 引擎接口，同时修复 whole-tree rollback 的两处缺陷（源于 HengQuWorld/CodeWhale-VSCode#3） |
| [#6110](https://github.com/Hmbown/DeepSeek-TUI/pull/6110) | feat(pet): 持久化世界 + 工作驱动的点阵形态 | OPEN | 把"代码里的鲸鱼"做实：同一份 980 点世界在 browser/Apple/Android/TUI 共享，可重放，含推理结/代码束/分支/浏览器层等形态 |
| [#6096](https://github.com/Hmbown/DeepSeek-TUI/pull/6096) | feat(commands): TUI session-export 切面采用 capability shapes（FEAT-025） | OPEN | 把 `/export`（含 `/daochu`）改造成可移植 command contract；纯结构迁移，用户无感知 |
| [#6100](https://github.com/Hmbown/DeepSeek-TUI/pull/6100) | feat(web_search): 新增 Serply 搜索 provider | CLOSED | `provider = "serply"` 调用 `api.serply.io/v1/search`，通过 `X-Api-Key` 头传 key，沿用 #2790 Sofya 适配器形状 |
| [#6114](https://github.com/Hmbown/DeepSeek-TUI/pull/6114) | fix(tui): 跟随符号链接的用户级 context 文件 | CLOSED | 关掉 #6115：`~/.codewhale/AGENTS.md` 等用户级指令层现在跟随 symlink 到目标；checkout 内文件保持原有拒绝 |
| [#5842](https://github.com/Hmbown/DeepSeek-TUI/pull/5842) | feat(runtime-api): 引擎侧 `/v1/apps` 插件 + marketplace 管理 | CLOSED | 单 commit 离线分支：本地插件系统 Engine 侧，dead-code 预算 PASS@425，App 侧跟进 |
| [#5996](https://github.com/Hmbown/DeepSeek-TUI/pull/5996) | docs(config): 文档化 R1 turn budgets + `[goal]` 示例 | CLOSED | 把 `[tui].max_model_steps` / `turn_wall_clock_secs` 补进 `docs/CONFIGURATION.md` 键参考，给 `[goal]` 加注释示例 |
| [#5990](https://github.com/Hmbown/DeepSeek-TUI/pull/5990) | fix(test): 从记录时间戳推导 prune 切割点，不再写死 6s | CLOSED | 关掉 windows-latest 上 `snapshot::repo::tests::prune_older_than_keeps_the_newest...` 间歇失败 |
| [#5984](https://github.com/Hmbown/DeepSeek-TUI/pull/5984) | docs: 修正项目名为 DeepSeek-TUI（不是 "DeepSeek CLI"） | CLOSED | LICENSE 与 app-server 文档注释里写错的版权署名更正：传承项目是 DeepSeek-TUI |
| [#5985](https://github.com/Hmbown/DeepSeek-TUI/pull/5985) | chore(gh): 贡献闸 allowlist 加入 @goransh-walia | CLOSED | 解锁 #5870 的 7 个 workflow 因 `action_required` 卡死的问题 |

**其余依赖 bump**：#6104 (encoding_rs 0.8.41)、#6103 (dirs 7.0.0)、#6107 (flate2 1.1.10)、#6106 (lru 0.18.4) 均由 dependabot 自动合入。

---

## 📈 功能需求趋势

从今日活跃 Issue/PR 中提炼出 **5 大方向**：

1. **可观测性 / 成本透明化**
   - #6011（token 核算、缓存命中率、工具 sink、压缩成本）——最显著的"黑盒→白盒"诉求
   - 配套的"重复 footer 时钟"（#6041、#6084）也属于同一主题：UI 必须如实反映状态

2. **Sub-agent 与多 agent 体系补强**
   - 权限：#6097（子 agent 工具循环不读 `permissions.toml`）、#6098（heredoc 文本误命中 deny）
   - 路由：#6117（profile 被忽略）、#6046（followup 丢失 provider 钉）、#6108（per-model context_window）
   - 这是本周期最高密度的功能区，说明 sub-agent 已从"实验"走向"生产"

3. **跨端一致性 / "Codewhale 品牌"**
   - #6109 + #6110（鲸鱼宠物统一世界观）
   - #6096（command shapes 复用）
   - #6112（status line 增 `workspace` / `git_branch`）

4. **多供应商接入与开放**
   - #6025（DeepSeek V4 Pro 下线）
   - #6018（Gemini 全新安装可用性）
   - #6113（opencode-go 不同 wire API）
   - #6095（把 TUI 能力反向暴露给 API 客户端）

5. **平台原生 UX 习惯对齐**
   - #6116（Linux copy-on-select / middle-click paste）
   - #5923（Windows `SetWindowPos` 跨进程阻塞 TUI 线程）

---

## 👨‍💻 开发者关注点

**最痛的"无声失败"场景**：

- 状态信号被静默吃掉（#5620 context 警告、#6115 symlink 警告）——模型在没有上下文的情况下继续跑，用户毫无察觉
- 跨进程/跨会话的身份丢失（#6030 MCP 死锁、#6102 resume ENOENT、#6046 followup 丢失 pin）——agent 走 fallback 给出一个看似合理但完全偏离原意的错误
- 边角但高发的 TUI 渲染 bug：模态被裁（#6045）、同一时钟渲染两次（#6041、#6084）、LaTeX 下标被错误斜体化（#6042）

**呼声最高的需求**：

1. **"我要知道模型到底花了多少 token"**——按组件/模型/缓存/工具四维度拆解（#6011）
2. **"sub-agent 必须尊重我的权限/路由配置"**（#6097、#6117、#6046、#6108）
3. **"Linux/Windows 行为对齐社区默认"**（#6116、#5923）
4. **"所有客户端能力平等"**——把 TUI 的 `@` 模糊搜索、status line 等能力下放到 Runtime API（#6095、#6112）

**开发者画像**：当前贡献者已形成"核心团队（7jrxt42BxFZo4iAnN4CX、Hmbown）+ 外部功能贡献者（gaord、aboimpinto、googio）+ dependabot 自动化"三层结构。CI 闸门紧（fmt、dead-code budget 425、windows 矩阵），一个 PR 从 issue 到 merge 平均 1–2 天。

---

*日报生成时间：2026-09-13 | 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*