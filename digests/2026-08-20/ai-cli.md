# AI CLI 工具社区动态日报 2026-08-20

> 生成时间: 2026-08-20 00:52 UTC | 覆盖工具: 9 个

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
**数据日期：2026-08-20 | 涵盖工具：9 款**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**"工程化深水区"**：从早期拼模型能力转向拼**可靠性、可观测性与跨平台一致性**。Claude Code、Qwen Code、OpenAI Codex 等成熟产品日均活跃 Issue/PR 已稳定在 10+ 量级，Kimi Code CLI、OpenCode 等仍在快速成长期的工具则呈现明显的"高频小步快跑"特征。**多 Agent 协作、AGENTS.md 标准化、计费透明度、Windows 平台稳定性**是当前社区最集中的四个焦点，反映出行业正在从"功能堆叠"过渡到"基础设施成熟度"竞争阶段。值得关注的是，安全相关 PR（Git 命令沙箱化、Guardian 重构、扩展授权）在多个仓库集中合并，预示着 2026 下半年的安全基线将成为差异化关键。

---

## 2. 各工具活跃度对比

| 工具 | Issues 活跃 | PR 推进 | Release 情况 | 综合热度 |
|---|---|---|---|---|
| **Claude Code** | ~50 条（Top10 4663 👍 最高） | 1 条 OPEN | v2.1.236 正式版 | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | 10 条 Top | 10 条合并/推进 | rust-v0.149.0-alpha.1/2 | 🔥🔥🔥🔥 |
| **Gemini CLI** | 10 条 Top | 10 条合并/推进 | v0.57.0-preview.0 + v0.56.0 稳定 | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 10 条 Top | 0 条新 PR | v1.0.81-2/-3/-4/-5（4 个预发布） | 🔥🔥🔥 |
| **Kimi Code CLI** | 1 条 | 0 条 | 无新版本 | 🔒 |
| **OpenCode** | 10 条 Top | 10 条推进 | 无 | 🔥🔥🔥🔥 |
| **Pi** | 30+ 条 | 20+ 条合并 | 无 | 🔥🔥🔥🔥🔥 |
| **Qwen Code** | 10 条 Top | 10+ 条合并 | v0.21.14 正式版 | 🔥🔥🔥🔥 |
| **DeepSeek TUI** | 10 条 Top | 10 条合并 | v0.9.10 RC（集成中） | 🔥🔥🔥 |

**关键观察**：
- **版本迭代速度**：Copilot CLI 单日 4 个预发布版本最快，Kimi Code CLI 24h 零版本最慢
- **PR/Issue 比**：Pi（≈0.67）、Qwen Code（≈1.0）、Gemini CLI（≈1.0）健康度高；Copilot CLI（0.0）出现"修复空窗"
- **历史最高赞 Issue**：Claude Code #6235（AGENTS.md）4663 👍，远超其他工具单 Issue 热度

---

## 3. 共同关注的功能方向

### 🔥 第一梯队：跨工具共识

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Windows 平台稳定性** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Pi, DeepSeek TUI | 崩溃循环、Ctrl-C、TUI 渲染、终端键位冲突、CI 矩阵缺失 |
| **多 Agent / 子代理可靠性** | Claude Code, Gemini CLI, OpenCode, Qwen Code | 静默失败、错误信号丢失、循环检测误判、速率限制、跨会话通信 |
| **MCP / OAuth 协议健壮性** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | Issuer 校验、Python SDK 兼容性、扩展授权绕过、stdio 服务泄漏 |
| **会话/压缩可靠性** | Qwen Code, DeepSeek TUI, OpenCode | 摘要幻觉、压缩阈值不一致、compaction 后卡死 |
| **安全沙箱与权限边界** | Claude Code, OpenAI Codex, GitHub Copilot CLI, Gemini CLI | 配置覆盖、deny 规则绕过、UI 权限同步、Git 命令安全模型 |

### 🔥 第二梯队：多点发酵

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **模型目录/Provider 适配漂移** | Pi, OpenCode, Qwen Code | reasoning_effort 误发、模型路由错误、目录滞后于 models.dev |
| **计费透明度与配额预警** | OpenCode（最集中）, Claude Code（agent-hours 计量空白） | dashboard 与本地成本表不一致、cache-read 计费不显示 |
| **TUI/输入层抽象** | Claude Code, Copilot CLI, Pi, DeepSeek TUI | 大输出渲染、粘贴失败、键位冲突、内存驻留 |
| **扩展 API 可观测性** | Pi（最成熟）, Claude Code, Gemini CLI, Qwen Code | input 事件、UI prompt 事件、sub-agent 上下文透出 |
| **AGENTS.md 标准化** | Claude Code（已落地）, 间接影响其他工具 | Codex、Amp、Cursor 等跨工具互操作 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线关键差异 |
|---|---|---|---|
| **Claude Code** | 多 Agent 编排、企业合规、跨会话工作流 | 企业研发团队、专业 Agent builder | ANTHROPIC_DEFAULT_MODEL + notify_when_idle 双向通信原语；AGENTS.md 率先落地 |
| **OpenAI Codex** | Computer Use / Browser 自动化、跨平台 | macOS + Windows 桌面 AI 用户、安全研究人员 | Rust CLI 重写（alpha 阶段）；Guardian 安全子系统；26.x 版本节奏 |
| **Gemini CLI** | 模型矩阵丰富（Gemini 3.x Flash）、Auto Memory | 谷歌云生态用户、研究型 agent 实验者 | AST 感知工具探索；GCS trajectory 日志；零依赖沙箱设想 |
| **GitHub Copilot CLI** | GitHub 生态深度集成、Enterprise 数据驻留 | GitHub Enterprise（GHEC）付费用户 | sandbox 三角色切换；managed setting 与 CLI 优先级冲突 |
| **Kimi Code CLI** | ACP 协议、IDE 内嵌 Agent | 国内 IDE 用户、Zed 等轻量编辑器用户 | 通过 `kimi acp` 接入；Grep/Glob 受限暴露 |
| **OpenCode** | V2 架构重构、热重载、Skills | OpenCode Go 订阅用户、独立开发者 | OPENCODE_EXPERIMENTAL_HOT_RELOAD；prompt 乐观提交 + 客户端 ID 铸造 |
| **Pi** | 多 Provider 中立、扩展 API 成熟度 | 多模型混用开发者、扩展作者 | session-scoped 模型切换（防污染）；Bedrock Mantle 双路由 |
| **Qwen Code** | 多 Agent 团队协作、国产办公集成 | 国内企业研发、钉钉/Aone 用户 | `qwen sessions ps` 实时会话注册；Aone 评审写入；钉钉 Workspace channel |
| **DeepSeek TUI** | DeepSeek V4 路线适配、国际化 | DeepSeek 模型用户、中文社区 | 字典主干 i18n 迁移；durable approvals（执行前落盘 fail-closed） |

**关键差异点**：
- **闭源 vs 开源生态**：Claude Code / Copilot CLI 偏向闭源+生态绑定；Pi / OpenCode / Qwen Code 强调扩展/插件开放性
- **企业 vs 个人**：Copilot CLI（企业数据驻留）、Claude Code（agent-hours）vs Kimi Code CLI（个人 IDE 集成）
- **西方 vs 东方**：Qwen Code（钉钉/Aone）、DeepSeek TUI（中文文档）vs 主流西方工具的英文优先

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 高成熟度
- **Claude Code**：单日 50+ Issue，1 个 Issue 4663 👍 历史级热度，v2.1.236 稳定迭代——**绝对头部**
- **Pi**：30+ Issue 更新 + 20+ PR 合并，无版本发布但"修复日"密度极高——**工程质量导向**

### 🟡 高活跃 + 快速迭代
- **Qwen Code**：v0.21.14 + 10+ PR 集中合并，覆盖 `/review`、多 Agent、安全加固——**工业化推进**
- **OpenAI Codex**：26.814 回归 + 安全 PR 重构——**安全基线重塑期**
- **Gemini CLI**：v0.57.0-preview + Gemini 3.7/3.6 Flash 模型接入——**模型驱动型迭代**

### 🟠 中活跃 + 集中攻坚
- **OpenCode**：Go 套餐计费危机驱动——**信任修复期**
- **GitHub Copilot CLI**：4 个预发布但 PR 空窗——**修复节奏与代码提交脱节**
- **DeepSeek TUI**：v0.9.10 RC 集成 + i18n 双线推进——**架构重构期**

### 🔴 低活跃
- **Kimi Code CLI**：24h 仅 1 Issue、0 PR、0 Release——**ACP 生态化关键节点**

---

## 6. 值得关注的趋势信号

### 📈 趋势一：**"AGENTS.md" 成为跨工具互操作的事实标准**
- **证据**：Claude Code #6235（4663 👍，已 CLOSED）合并/替代落地；Codex、Amp、Cursor 已采用
- **开发者参考**：构建自定义 Agent 时优先遵循 agents.md 规范，避免被工具绑定

### 📈 趋势二：**安全架构成为新差异化护城河**
- **证据**：OpenAI Codex 单日合并 Git 命令沙箱化、Guardian 重构、Bedrock 凭证刷新 4 条安全 PR；Gemini CLI 加固扩展授权与子进程安全
- **开发者参考**：评估 AI CLI 时，安全模型（沙箱边界、命令白名单、凭证生命周期）权重应提升到与模型能力并列

### 📈 趋势三：**多 Agent 编排从"能用"进入"敢用"阶段**
- **证据**：Claude Code `notify_when_idle` 跨会话原语、Qwen Code `task_list` 循环检测修复、Gemini CLI MAX_TURNS 误报修复、OpenCode 热重载——围绕**可观测性、错误可见性、状态一致性**的密集修复
- **开发者参考**：生产环境部署多 Agent 工作流前，优先选择**暴露 sub-agent 上下文、提供失败语义、跨会话通信**的工具

### 📈 趋势四：**Windows 平台从"次要支持"升级为"战略优先级"**
- **证据**：Pi 发起 petrroll 平台战略盘点（31 评论）；Claude Code 单日 5+ Windows Bug；OpenAI Codex Windows 浏览器插件回归；DeepSeek TUI Windows Terminal 渲染回归
- **开发者参考**：若企业环境以 Windows 为主，应优先选择**已建立 Windows CI 矩阵、有 nightly 通道**的工具（如 Copilot CLI、Pi）

### 📈 趋势五：**计费透明度成为付费工具的生命线**
- **证据**：OpenCode Go 套餐爆发**信任危机**（6 天耗尽 $60 配额、4 小时消耗 42%、dashboard 与本地成本表不一致）
- **开发者参考**：选择订阅型 AI CLI 时，**优先验证 token 明细拆分的可审计性**，避免被 cache-read 等隐藏计费项"偷袭"

### 📈 趋势六：**国产 AI CLI 形成独立生态**
- **证据**：Qwen Code 钉钉 Workspace channel + Aone Code 评审写入；DeepSeek TUI 字典主干 i18n + 中文文档本地化 EPIC；Kimi Code CLI ACP + 国内 IDE
- **开发者参考**：国内场景下，应关注**与办公协作平台（钉钉/飞书/Aone）的集成深度**作为选型关键指标

---

## 📌

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据范围**：anthropics/skills 仓库，PR × 20 / Issue × 50（截止 2026-08-20）

> ⚠️ **数据说明**：原始数据中 PR 的评论数字段均显示为 `undefined`，因此本报告的 PR 热度排序综合了 **关联 Issue 活跃度、近期更新频次、跨平台影响面、问题严重程度** 四个维度进行推断。Issue 端的评论数完整可读，热点判断更可靠。

---

## 1. 热门 Skills 排行（Top 8 PRs）

| 排名 | PR | Skill 名称 | 核心功能 | 热度信号 | 状态 |
|---|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复** | 修复 `run_eval.py` 永远 0% recall 的 Bug，附带 Windows 子进程管道读取、触发判定、并发 worker 三处修复 | 直接修复 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论，10+ 复现），是社区"评测信号失效"的核心痛点 | OPEN |
| 🥈 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 5 维度质量评估 + 安全分析两个 meta-skill，覆盖 SKILL.md 结构、示例、引用一致性 | 对应 [#492 安全命名空间问题](https://github.com/anthropics/skills/issues/492)（43 评论，社区 Top 1 Issue） | OPEN |
| 🥉 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (v1.3.0)** | 机械文件验证 + 四维推理质量门（按损伤严重度排序），跨栈通用 | 与 [#1385 推理质量门提案](https://github.com/anthropics/skills/issues/1385)（4 评论）形成完整闭环 | OPEN |
| 4 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 防止 AI 生成文档的孤儿行/寡妇段/编号错位 | 解决"每个 Claude 生成的文档都受影响"的普适性问题 | OPEN |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **odt (OpenDocument)** | 创建/填充/解析 ODT、ODS 文件，支持 ISO 开放标准 | 与 #538、#541 同属"文档处理套件"扩展 | OPEN |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 完整测试栈：Testing Trophy + 单元测试 + React 组件测试 | 长期被社区请求补齐"测试生成"方向 | OPEN |
| 7 | [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** | 覆盖 ITSM/ITOM/FSM/HRSD/SecOps/CSDM 等的企业平台助手 | 2026-08-12 仍在迭代，企业集成是 [Issue #228](https://github.com/anthropics/skills/issues/228)（16 评论）诉求的重点场景 | OPEN |
| 8 | [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design 重构** | 提升指令的可执行性，确保每条规则单轮可执行 | 回应 [Issue #202](https://github.com/anthropics/skills/issues/202) 关于 skill-creator 风格的反思（8 评论） | OPEN |

**社区讨论热点提炼**：
- 🔥 **skill-creator 自身质量**（#202 + #556 + #1298 + #1099 + #1050）—— 形成一条贯穿 6 个月的核心议程：用户认为"描述优化循环在对抗噪声运行"
- 🔒 **信任边界**（#492 + #83）—— 安全是当前最高优先级议题
- 📄 **文档工程化**（#514 + #486 + #538 + #541）—— 从 DOCX/PDF 到 ODT/排版质量，文档域成为新热点

---

## 2. 社区需求趋势（基于 Issues）

按讨论热度归并，社区诉求可划分为 **5 大方向**：

### 2.1 🚨 安全与信任（最热）
- [#492](https://github.com/anthropics/skills/issues/492) **社区 skill 在 anthropic 命名空间下滥用信任边界**（43 评论）—— 单条 Issue 占总评论数的近 1/3
- [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 文档访问控制设计顾虑（4 评论）

### 2.2 🏢 企业级集成与共享
- [#228](https://github.com/anthropics/skills/issues/228) **Claude.ai 组织级 skill 共享**（16 评论，👍8）—— 得分最高的诉求
- [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 兼容（4 评论）
- [#16](https://github.com/anthropics/skills/issues/16) Skill 暴露为 MCP（4 评论）

### 2.3 🧠 上下文与记忆管理
- [#1487](https://github.com/anthropics/skills/issues/1487) **claude-api skill 单次注入 ~156k token 撑爆上下文**（4 评论）
- [#1329](https://github.com/anthropics/skills/issues/1329) **compact-memory** —— 长时 agent 状态的符号化紧凑表示（9 评论）

### 2.4 ✅ 质量与治理
- [#1385](https://github.com/anthropics/skills/issues/1385) **Reasoning Quality Gate Pipeline**（4 评论）—— 三门质量控制
- [#412](https://github.com/anthropics/skills/issues/412) **agent-governance** —— policy enforcement / threat detection（6 评论）
- [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 插件重复内容（6 评论，👍9）

### 2.5 🛠️ 工具链稳定性
- [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0%（12 评论）
- [#12](https://github.com/anthropics/skills/issues/12) docx/ooxml 空白字符导致文件不可读（4 评论）
- [#1362](https://github.com/anthropics/skills/issues/1362) web-artifacts-builder 在 pnpm ≥10.1 失败（3 评论）

> 📌 **趋势洞察**：从单纯的"加新 Skill"转向"让 Skill 生态可信、可控、可度量"。安全、共享、内存三大主题首次超过纯功能扩展成为讨论中心。

---

## 3. 高潜力待合并 PR（活跃但未落地）

按 **最近更新日期 + 影响范围** 排序：

| PR | 标题 | 最近更新 | 落地概率评估 |
|---|---|---|---|
| [#1595](https://github.com/anthropics/skills/pull/1595) | docs: UIZZE 加入 partner skills | 2026-08-17 | ⭐⭐⭐⭐⭐ 仅文档改动，几乎必定合并 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | 修复两个 Skill 违反 Agent Skills 规范 | 2026-08-12 | ⭐⭐⭐⭐⭐ 规范一致性修复，无争议 |
| [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow 平台 skill | 2026-08-12 | ⭐⭐⭐⭐ 4 个月内仍活跃，企业用户刚需 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel 复古游戏 skill | 2026-07-15 | ⭐⭐⭐⭐ MCP server + 明确触发词 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator run_eval 全面修复 | 2026-06-23 | ⭐⭐⭐⭐⭐ 阻塞 #556（12 评论），优先级最高 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 2026-07-02 | ⭐⭐⭐⭐ 与 #1385 提案强对齐 |

> 💡 **观察**：[#1528](https://github.com/anthropics/skills/pull/1528)（标题"FIX"，正文仅 `@CLAUDE RESOLVE`）虽 8 月仍在更新，但属于低质量提交，社区需警惕此类占位 PR。

---

## 4. Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skill 生态的可信化"——即在持续扩张 skill 数量与覆盖面的同时，必须先解决信任边界滥用（#492）、评测信号失效（#556）、上下文爆炸（#1487）这三类底层基础设施问题，否则任何上层 skill 的增量都将建立在沙土之上。**

---

### 📎 附录：报告方法论
- **PR 排序代理变量**：当评论数缺失时，按"关联 Issue 评论数 × 最近 30 天活跃度 × 跨平台影响"加权
- **热度信号采集**：评论数 + 👍 反应数 + 关联 Issue 数 + 最近更新日期
- **未覆盖范围**：PR #1528 等低质量提交未纳入趋势分析；500+ PR 历史数据未做时间序列回归

---

# Claude Code 社区动态日报
**日期：2026-08-20**

---

## 📌 今日速览

今日发布 **v2.1.236**，引入 `ANTHROPIC_DEFAULT_MODEL` 环境变量与跨会话 `SendMessage` 的 `notify_when_idle` 能力，强化模型与多 Agent 工作流的可控性。社区侧，最大焦点仍是 **AGENTS.md 标准支持**（Issue #6235 已关闭，4663 👍，360 条评论），围绕多账户切换、Windows 平台稳定性、Auto-mode 系统提示行为异常的讨论热度持续攀升。

---

## 🚀 版本发布

### v2.1.236（2026-08-20）

**What's changed**

1. **新增 `ANTHROPIC_DEFAULT_MODEL` 环境变量**
   - 设置新会话启动时的默认模型。
   - 与 `ANTHROPIC_MODEL` 的关键区别：用户的 `/model` 选择**会**覆盖该变量，且**持久化**于重启后的会话。
   - 解决了之前 `ANTHROPIC_MODEL` 强制覆盖用户偏好、无法跨重启保留的痛点。

2. **新增跨会话 `SendMessage` 的 `notify_when_idle` 选项**
   - 允许一个 Claude Code 会话向另一个会话发起"空闲时通知"型消息。
   - 为多 Agent 协作编排（如主 Agent 调度子 Agent 完成后回执）提供了基础原语。

📦 [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.236)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 重要性 |
|---|-------|------|-----------|--------|
| 1 | **#6235** [Feature] 支持 AGENTS.md 标准 | ✅ CLOSED | 360 / **4663** | ⭐⭐⭐⭐⭐ |
| 2 | **#36151** Mobile 多账户切换（无需共享邮箱） | 🟢 OPEN | 160 / 610 | ⭐⭐⭐⭐⭐ |
| 3 | **#32479** GitHub Connector 已连接但 Claude 不识别 | 🟢 OPEN | 89 / 140 | ⭐⭐⭐⭐ |
| 4 | **#39636** Cowork VM 在 Snapdragon X Plus (ARM64) 上无法启动 | ✅ CLOSED | 40 / 10 | ⭐⭐⭐⭐ |
| 5 | **#80988** `heron_brook` 提示静默覆盖 AgentTool 委派策略 | 🟢 OPEN | 30 / 57 | ⭐⭐⭐⭐ |
| 6 | **#77136** Opus 5 模型输出语言质量/连贯性问题 | 🟢 OPEN | 30 / 196 | ⭐⭐⭐⭐ |
| 7 | **#29017** VSCode 扩展对话历史丢失 | 🟢 OPEN | 30 / 20 | ⭐⭐⭐⭐ |
| 8 | **#85199** Claude Desktop Windows 反复崩溃需 Repair | 🟢 OPEN | 29 / 4 | ⭐⭐⭐ |
| 9 | **#87575** Auto-mode 下 `/rewind` 对 Bash 编辑文件静默失效 | 🟢 OPEN | 7 / 3 | ⭐⭐⭐ |
| 10 | **#62426** 多 Agent 工作流受速率限制阻断 | ✅ CLOSED | 6 / 0 | ⭐⭐⭐ |

**逐条解读**

- **[#6235](https://github.com/anthropics/claude-code/issues/6235) AGENTS.md 标准支持（CLOSED）**
  Codex、Amp、Cursor 等正在以 [agents.md](https://agents.md/) 为统一规范编码智能体的"项目说明书"。CLAUDE.md 过于工具特定，跨工具协作时无法复用。以 **4663 👍** 登顶仓库历史热度，意味着社区已通过某种形式的合并/替代方案达成共识。

- **[#36151](https://github.com/anthropics/claude-code/issues/36151) Mobile 多账户切换**
  标签 `invalid` 表明官方认为该请求应在其他渠道提出，但 160 条评论 + 610 👍 显示企业用户（咨询、轮岗、测试账号）在移动端的多账号体验仍是空白。

- **[#32479](https://github.com/anthropics/claude-code/issues/32479) GitHub Connector 识别失败**
  Desktop 端连接正常，Claude 主端却无法发现该连接——典型的连接器状态同步 Bug，影响需要把仓库上下文注入 Claude 的用户。

- **[#39636](https://github.com/anthropics/claude-code/issues/39636) Cowork VM ARM64 启动失败（CLOSED）**
  高通 Snapdragon X Plus 用户无法启动 Cowork 虚拟机，timeout 复现稳定。已关闭，暗示已通过配置/兼容性补丁修复。

- **[#80988](https://github.com/anthropics/claude-code/issues/80988) `heron_brook` 提示覆盖策略**
  v2.1.219 引入的内部 prompt 段在 Opus 5 上强制注入"Do not call AgentTool"，**且无 opt-out**。这是少有的"用户配置被静默改写"类问题，直接关系用户对 Agent 行为的可控性。

- **[#77136](https://github.com/anthropics/claude-code/issues/77136) Opus 5 语言质量**
  Opus 4.8"语气令人不适"，而 Opus 5.0 的"不连贯性已达新高度"——196 👍 表明这不是孤例。模型迭代中的语言风格与稳定性，是企业采纳的关键门槛。

- **[#29017](https://github.com/anthropics/claude-code/issues/29017) VSCode 对话历史丢失**
  影响 VSCode 扩展用户长期工作流——会话上下文丢失意味着重启/切换后无法继续任务。

- **[#85199](https://github.com/anthropics/claude-code/issues/85199) Windows 崩溃循环**
  用户只能通过"Advanced Options → Repair"恢复，破坏日常使用节奏，与今日 #88097 的 Ctrl-C 退出 Bug 共同反映 **Windows 平台的稳定性短板**。

- **[#87575](https://github.com/anthropics/claude-code/issues/87575) Auto-mode + `/rewind` 冲突**
  Auto-mode 系统提示诱导模型用 Bash 编辑文件，而 `/rewind` 对此静默失效——典型"功能间相互破坏"问题。

- **[#62426](https://github.com/anthropics/claude-code/issues/62426) 多 Agent 速率限制（CLOSED）**
  5–6 个并发 Agent 在最高付费档仍频繁被限流，反映多 Agent 用量模型与计费/限流架构错配。

---

## 📥 重要 PR 进展

> ⚠️ 过去 24 小时仓库内仅有 1 条活跃 PR 更新。详情如下：

- **[#77977](https://github.com/anthropics/claude-code/pull/77977) `docs(plugin-dev)`：文档化 `skipLfs` marketplace source 选项**（OPEN）
  - 为 `github` 和 `git` 类型的 marketplace source 对象补充 `skipLfs` 选项说明。
  - 添加 GitHub shorthand 与通用 Git URL source 跳过 Git LFS 下载的示例。
  - 关联 #63035。文档类变更，尚未合并。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中可提炼出以下**社区最关注的方向**：

1. **🤝 跨工具生态标准化（AGENTS.md）** — 单议题即占据 4663 👍，反映"工具互操作"已成第一诉求。
2. **👥 多账户 / 多 Agent 工作流**
   - Mobile 多账户切换 (#36151)
   - 跨会话 `SendMessage`（v2.1.236 已落地）
   - 命名会话 `--session <name>` (#69836, 已关闭)
   - "agent-hours" 团队级计量 (#88085)
3. **🪟 Windows 平台稳定性**
   - 崩溃循环 (#85199)、Ctrl-C 退出 (#88097)、终端渲染错乱 (#79025)、安装失败横幅不清除 (#65093)、桌面窗口 always-on-top (#88093)。
4. **🔐 沙箱与权限一致性**
   - macOS `allowedDomains` 未生效 (#77045)
   - `Read` 工具无视 `permissions.deny` (#84634)
   - 调度任务忽略 UI 权限/模型配置 (#79782)
   - AskUserQuestion 在 Windows 持续被打断 (#74797)
6. **🤖 模型行为透明度**
   - Opus 5 语言/连贯性 (#77136)
   - `heron_brook` 静默覆盖 (#80988)
   - Auto-mode bashFirst 提示 (#88041)
7. **🌐 Remote / Cowork 能力扩展**
   - Remote SSH 出站连接 (#84967)
   - Cowork ARM64 (#39636)
8. **🛡️ 数据安全与"破坏性操作"防护**
   - robocopy /MOVE 误删 650 个 skill 文件夹 (#80660, 已关闭)
   - Shell redirection 在 manual 模式下绕过编辑流程 (#81667)

---

## 🧑‍💻 开发者关注点

综合评论与高频反馈，开发者当前最集中的**痛点**与诉求可归纳为四点：

1. **"我配置的东西被静默改写了"**
   典型案例如 `heron_brook` 注入、Auto-mode bashFirst、Read 工具无视 deny 规则。社区对**行为可预测性**与**配置优先级透明度**要求极高，建议 Anthropic 提供 `--no-auto-prompt-override` 或类似显式 opt-out 机制。

2. **"Windows 是二等公民"**
   同一日涌现至少 5 条 Windows 原生 Bug（崩溃、Ctrl-C、TUI、桌面窗口、install_failed 横幅），开发者建议优先建立 Windows CI 矩阵与 nightly 通道。

3. **"Auto-mode 与高级功能冲突"**
   `/rewind`、Edit 工具、`permissions.deny` 在 Auto-mode 下均出现退化。提示注入是新型冲突来源，需要**功能之间的兼容性测试**。

4. **"多 Agent 是趋势，但平台未准备好"**
   限流、计量、跨会话通信——三者都不完善。`notify_when_idle` 的引入是积极信号，但 `agent-hours` 等计量维度仍是空白。

---

*日报由社区数据自动汇总，欢迎在 Issue 中反馈改进建议。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-20**

---

## 📌 今日速览

今日 Codex 社区动态主要围绕 **Windows 平台兼容性**与 **Computer Use / Browser 插件稳定性**展开。最受关注的 Issue 是 Codex 内置浏览器插件初始化失败（78 条评论，41 个 👍），反映了近期 26.814 版本在 Windows 上的多项回归问题。PR 方面出现了一波密集合并，集中在 Git 命令安全沙箱化、Guardian 安全子系统重构以及 Bedrock 凭证自动刷新等方向，显示出团队在安全与基础设施层的持续投入。

---

## 🚀 版本发布

过去 24 小时内发布了 **两个 Rust CLI alpha 预发布版本**：

- **rust-v0.149.0-alpha.1** — Release 0.149.0-alpha.1
- **rust-v0.149.0-alpha.2** — Release 0.149.0-alpha.2

> 建议关注 alpha 渠道的开发者查阅 release notes 以了解 CLI 行为变更。

---

## 🔥 社区热点 Issues

| # | Issue | 评论数 / 👍 | 重要性 |
|---|-------|------------|--------|
| [#39136](https://github.com/openai/codex/issues/39136) | **Windows：内置浏览器插件初始化失败**（Trusted RPC 路径不受信任） | 78 / 41 | ⭐⭐⭐ |
| [#38455](https://github.com/openai/codex/issues/38455) | **macOS：ChatGPT Desktop 26.810 反复派生出 Computer Use 子进程并触发 V8 OOM** | 30 / 12 | ⭐⭐⭐ |
| [#25178](https://github.com/openai/codex/issues/25178) | **Windows 10 22H2：Computer Use 截图调用 SetIsBorderRequired 失败** | 28 / 15 | ⭐⭐ |
| [#38350](https://github.com/openai/codex/issues/38350) | **Recurring scheduled tasks 成功执行后自动禁用**（无用户授权） | 20 / 0 | ⭐⭐ |
| [#25744](https://github.com/openai/codex/issues/25744) | **macOS：Computer Use / MCP 子进程累积为僵尸进程，导致 HID 延迟** | 20 / 3 | ⭐⭐ |
| [#39239](https://github.com/openai/codex/issues/39239) | **Windows：`thread/archive` 因 verbatim path 失败** | 17 / 0 | ⭐⭐ |
| [#33493](https://github.com/openai/codex/issues/33493) | **Local compaction v2 无限保留 input_image，触发反复 auto-compaction** | 17 / 4 | ⭐⭐ |
| [#34301](https://github.com/openai/codex/issues/34301) | **GPT Sol / Terra 无法 spawn Luna 子代理**（Luna Multi Agent 版本冲突） | 10 / 34 | ⭐⭐ |
| [#38754](https://github.com/openai/codex/issues/38754) | **Windows：本地 stdio MCP 服务重复派生且未回收** | 10 / 2 | ⭐⭐ |
| [#39552](https://github.com/openai/codex/issues/39552) | **macOS：恢复已登录的 Google 标签页后渲染进程锁死 100% CPU** | 3 / 0 | ⭐ |

### 重点解读

- **#39136（Windows Browser 插件）**：今日热度最高的 Issue，反映出新版 Codex 在 Windows 平台对浏览器扩展的安全路径校验逻辑存在回归，影响所有使用内置浏览器功能的 Windows 用户。
- **#38455 + #25744**：两条 macOS 上的 Computer Use 相关问题都涉及 **子进程/Worker 资源泄漏**，揭示了 Computer Use 后端在长会话场景下的进程管理存在系统性缺陷。
- **#34301**：虽然评论数不算最多，但获得 **34 个 👍**——社区强烈呼吁修复 Luna 多代理体系下的版本兼容问题，是模型协同场景的痛点。

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 说明 |
|----|------|------|
| [#39524](https://github.com/openai/codex/pull/39524) | **Stop treating Git commands as inherently safe** | 从已知安全命令分类中移除 Git 命令，因仓库配置可让只读 Git 触发 helper 脚本，**强化安全模型** |
| [#39520](https://github.com/openai/codex/pull/39520) | **Isolate automatic plugin Git operations** | 后台插件/市场刷新操作隔离仓库本地与命令级 Git 配置，**防止远端被恶意重定向** |
| [#39523](https://github.com/openai/codex/pull/39523) | **Persist thread section moves before the first turn** | 修复新建线程被移入 section 后可能从列表中"消失"的问题，**改进线程管理 UX** |
| [#39474](https://github.com/openai/codex/pull/39474) | **Consolidate Guardian extensions into `codex-guardian-v2`** | 将 Guardian 生命周期与风险评分合并到统一扩展点，**重构安全子系统** |
| [#39452](https://github.com/openai/codex/pull/39452) | **Remove the feature gate for async user messages** | 当模型支持时向 root agent 暴露 `send_user_message_async`，**解锁异步人机交互** |
| [#39410](https://github.com/openai/codex/pull/39410) | **Refresh expired AWS credentials for Bedrock** | 新增 `aws.auth_refresh` provider 配置，**修复 Bedrock 长会话凭证过期问题** |
| [#39404](https://github.com/openai/codex/pull/39404) | **Support FD mounts with older system Bubblewrap** | 旧版 Bubblewrap 不含 `--ro-bind-fd` 时回退到普通绑定，**提升 Linux 沙箱兼容性** |
| [#39510](https://github.com/openai/codex/pull/39510) | **Track built-in control tool calls in analytics** | 为 `request_user_input`、`update_plan` 等内置工具新增埋点，**增强可观测性** |
| [#39515](https://github.com/openai/codex/pull/39515) | **Use `mem::take` to drain unified exec output buffers** | 简化 unified exec 输出缓冲的 drain 逻辑，**降低维护成本** |
| [#39493](https://github.com/openai/codex/pull/39493) | **Make head-tail buffer capacity const generic** | 将 `HeadTailBuffer` 参数化为 const generic，**提升类型系统表达力** |

---

## 📈 功能需求趋势

从过去 24 小时更新的 Issue 标签与主题看，社区关注点集中在以下方向：

### 1. 🪟 **Windows 平台兼容性**（占比最高）
- 浏览器插件/扩展安装与初始化（#39136、#28950、#39531）
- 文件路径 verbatim 处理（`\\?\`）问题（#39239）
- 鼠标输入延迟（#39450）
- ChatGPT 鉴权丢失（#39170）
- MCP stdio 服务泄漏（#38754）

### 2. 🖥️ **Computer Use 稳定性**
- macOS V8 OOM 与进程泄漏（#38455、#25744）
- Windows 10 截图 API 失败（#25178）

### 3. 🔌 **Browser / Remote Control**
- 内置浏览器渲染卡死（#39552）
- 移动端/桌面端配对失效（#23112、#35855、#35351、#36450）

### 4. 📅 **Automation / Scheduling**
- 定时任务被无故禁用（#38350、#34794）
- 共享 workspace 插件更新 404（#36929）

### 5. 🧠 **性能与上下文管理**
- Local compaction v2 图像泄漏（#33493）
- 统一桌面 WebSocket 回归（#36059）
- Luna 多代理版本冲突（#34301）

### 6. 🔐 **MCP / OAuth 增强**
- Meta MCP OAuth issuer 校验失败，希望支持 per-server override（#38944）

---

## 💬 开发者关注点

通过梳理 Issue 与 PR 描述，可归纳出开发者社区当前最强烈的几个反馈：

1. **进程/资源管理是头号痛点**——macOS 与 Windows 都出现"反复派生且未回收"的子进程模式（Computer Use worker、stdio MCP server），导致 OOM、HID 延迟、WindowServer/TCC 阻塞。开发者期望更严格的 **生命周期与 reaping 机制**。

2. **跨平台路径与权限处理需要加固**——Windows verbatim path（`\\?\`）、Chrome Native Messaging Host 注册、企业 workspace 上传 URL 等问题反映出 Windows 平台上的 **权限/路径规范化** 仍是高频踩坑点。

3. **桌面应用回归频繁**——26.810 / 26.721 / 26.814 三个版本均带来不同程度的回归（V8 OOM、远程控制失效、auth 丢失）。社区呼吁加强 **回归测试矩阵**，尤其是 macOS 与 Windows 双平台。

4. **Computer Use 与 Browser 自动化是核心使用场景，但稳定性欠佳**——多平台同时出现截图、点击、Tab 恢复等基础功能失败，开发者普遍认为这些基础能力应优先稳定。

5. **安全性 PR 集中合并**——今天的 PR 高度聚焦于 Git 命令不再被默认视为安全、插件后台 Git 操作隔离等。开发者欢迎这一方向，但同时也希望 **官方文档同步更新**，例如 #36068 指出的 `AGENTS.md` 中 MCP 路径指引已失效。

6. **Bedrock / AWS 集成改进**——#39410 引入的凭证自动刷新是社区期待已久的功能，反映出 **企业用户对长任务场景下凭证生命周期管理** 的强烈需求。

---

*报告基于 GitHub 上 openai/codex 仓库 2026-08-19 ~ 2026-08-20 公开数据整理。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-08-20

## 今日速览

今日 Gemini CLI 完成 **v0.56.0 稳定版发布**并同时推出 **v0.57.0-preview.0** 预览版，社区聚焦于 **Subagent 稳定性与可靠性问题**（多个 P1 级 bug 集中更新）。新模型支持（Gemini 3.7 / 3.6 Flash）已通过 PR 落地，Auto Memory、Whisper 转录、沙箱安全等模块迎来集中修复。

---

## 版本发布

| 版本 | 类型 | 关键变化 |
|---|---|---|
| **v0.57.0-preview.0** | 预览 | 修复 Cloud Workstations OAuth 代理重定向 URI 动态解析（#28688）；解决 IDE 连接中目录不匹配被吞掉的 Bug（@amelidev） |
| **v0.56.0** | 稳定 | 完整更新日志见 [Compare](https://github.com/google-gemini/gemini-cli/compare/v0.55.1...v0.56.0) |
| **v0.56.0-nightly.20260819** | 夜间构建 | SSR Agent 修复：Vertex AI locations 文档链接、禁用 Agents 模式时阻止子代理运行 |

⚠️ 文档页已更新支持状态说明：Gemini CLI 仍受支持，部分订阅场景建议迁移至 Antigravity CLI（PR #28906 已合并）。

---

## 社区热点 Issues（按评论数与优先级筛选 Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后误报 GOAL 成功 ⭐P1
- **评论 12 / 👍 2** | 作者：matei-anghel
- `codebase_investigator` 子代理实际已触达最大回合限制，却仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，**掩盖了中断真相**，对调试与评估产生误导。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 永久挂起 ⭐P1
- **评论 8 / 👍 8（点赞最高）** | 作者：turmanticant
- 一旦 `gemini-cli` 委派给 generalist agent 就会**无限挂起**，连"创建文件夹"这种简单操作也无法完成，需等一小时手动取消。提示模型禁用 sub-agent 后问题消失。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与执行后意图路由 ⭐P2
- **评论 8** | 作者：abhipatel12
- Gemini 3 模型本身擅长 POSIX 工具链串联，建议引入 **Zero-Dependency 沙箱 + 后执行意图路由**，在不牺牲安全性的前提下充分发挥模型原生能力。

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评估体系（Robust Component Evals）⭐P1
- **评论 7** | 作者：gundermanc
- 在已生成的 76 个 behavioral eval 基础上，建立**组件级鲁棒性评估体系**，覆盖 6 个支持的 Gemini 模型，是质量基础设施的核心 EPIC。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取/搜索/映射 ⭐P2
- **评论 7** | 作者：gundermanc
- 探索 **AST 感知工具**是否能更精确地读取方法边界、降低 token 噪声、加快导航速度，被视为减少误读回合的关键路径。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动使用 Skills 和 Sub-agents ⭐P2
- **评论 6** | 作者：rnett
- 即便用户配置了 "gradle"/"git" skills，Gemini 也**几乎不会主动调用**，除非显式提示。这是 agent 自主性的核心问题。

### 7. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话 ⭐P2
- **评论 5** | 作者：SandyTao520
- Auto Memory 仅当提取 agent 通过 `read_file` 成功读取时才会标记为已处理；**低信号会话可能反复出现在 index 中**，需要状态机层面的修复。

### 8. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡 "Waiting input" ⭐P1
- **评论 4 / 👍 3** | 作者：rnett
- 简单 CLI 命令结束后，shell 仍被标记为活动状态并显示 "Awaiting user input"，**严重阻塞工作流**，复现率高。

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser Subagent 在 Wayland 下失败 ⭐P1
- **评论 4** | 作者：sigmaSd
- 浏览器子代理在 Wayland 环境下以 `Termination Reason: GOAL` 直接失败，**Linux 桌面用户被广泛影响**。

### 10. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — Symlink 不被识别为 Agent ⭐P2
- **评论 4** | 作者：wtanaka
- `~/.gemini/agents/filename.md` 为符号链接时**无法被识别为 sub-agent**，限制了 dotfiles 仓库共享配置的常见模式。

---

## 重要 PR 进展

### 1. [#28922](https://github.com/google-gemini/gemini-cli/pull/28922) — GCS 轨迹日志与产物持久化（OPEN · Large）
- 为 agent 执行、评估与修复循环新增 **GCS trajectory logger**，将流式 chunk 与生成的 diff 持久化到 Google Cloud Storage，便于事后调试。

### 2. [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) — 加固 PR 生成器子进程安全（OPEN）
- 防止敏感认证 token 泄露到非受信工具执行环境；**加固子进程编排、配置加载与 GitHub API 交互**，是安全基线的重要更新。

### 3. [#28910](https://github.com/google-gemini/gemini-cli/pull/28910) — Gemini 3.7 / 3.6 / 3.5 Flash-Lite 模型支持 ✅ 已合并
- 新增 **Gemini 3.7 Flash、3.6 Flash、3.5 Flash-Lite** 完整模型定义与解析配置，覆盖 `packages/core` 与 `packages/cli`。

### 4. [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) — 扩展环境变量变更需用户授权（OPEN）
- 修复扩展更新可能**绕过用户同意检查**并注入未授权环境变量到 MCP 服务器进程的安全漏洞。

### 5. [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) — 重试提示注入到 contents 末尾以保留前缀缓存（OPEN）
- 把 on-retry nudge 从 `systemInstruction` 移到 `contents` 数组末尾，**保留静态前缀缓存并确保模型立即感知恢复提示**，显著降低 token 成本。

### 6. [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) — 向 UI 透传 InvalidStreamError 详情 ✅ 已合并
- 将 `InvalidStreamError` 的 `type`/`message` 上传至 UI，CLI 可提示用户使用 `/compress` 等具体修复建议，**显著改善空响应场景的用户体验**。

### 7. [#28655](https://github.com/google-gemini/gemini-cli/pull/28655) — Whisper 模型下载原子化 ✅ 已合并
- `downloadModel()` 改为写入临时文件后原子重命名，**避免网络中断导致损坏模型残留在最终路径**。

### 8. [#28915](https://github.com/google-gemini/gemini-cli/pull/28915) — 忽略路径中的符号链接一致性求值（OPEN）
- `.geminiignore` 与 `.gitignore` 规则同时对**字面路径和规范路径**求值，消除符号链接下的工具行为漂移（呼应 Issue #20079）。

### 9. [#28907](https://github.com/google-gemini/gemini-cli/pull/28907) — `/chat rename` 重命名当前会话 ✅ 已合并
- 新增 `/chat rename <title>` 与 `/resume rename <title>`，复用现有 `ChatRecordingService.saveSummary()` 路径，**无需新存储格式**。

### 10. [#28888](https://github.com/google-gemini/gemini-cli/pull/28888) — A2a 启动器工作区支持 home 之外（OPEN）
- 默认约束根改为启动器提供的 `CODER_AGENT_WORKSPACE_PATH`，保留显式 `CODER_AGENT_ALLOWED_ROOT` 覆盖，**支持容器化部署**。

---

## 功能需求趋势

从今日活跃 Issue 提炼的社区最关注方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Agent 可靠性与可观测性** | #22323、#21409、#21968、#21763 | 🔥🔥🔥 |
| **AST 感知与上下文效率** | #22745、#22746、#19561 | 🔥🔥🔥 |
| **新模型适配**（Gemini 3.x Flash） | #28910（已落地） | 🔥🔥 |
| **Auto Memory 体系完善** | #26522、#26525、#26523、#26516 | 🔥🔥 |
| **Browser Agent 健壮性** | #22232、#21983、#22267 | 🔥🔥 |
| **沙箱与执行安全** | #19873、#28863、#28888 | 🔥🔥 |
| **语音/Whisper 转录修复** | #28655、#28916、#28917 | 🔥 |

**核心趋势**：社区正从"功能可用"迈向"工程鲁棒"——Agent 的可观测性（trajectory、bug report 上下文）、状态一致性（MAX_TURNS 恢复、low-signal 重试）、以及安全边界（扩展授权、沙箱配置、敏感数据流）是三大主轴。

---

## 开发者关注点

通过 Issue 摘要与评论观察到的**高频痛点**：

1. **Agent 静默失败最令人沮丧**
   - MAX_TURNS 误报 GOAL（#22323）、generalist agent 挂起（#21409）、shell "Waiting input" 卡死（#25166）——失败信号被吞掉是开发者无法容忍的体验黑洞。

2. **Sub-agent 缺少上下文与可见性**
   - Bug 报告不含 sub-agent 上下文（#21763）；sub-agent 轨迹难分享（#22598）；模型不主动调用 sub-agent（#21968）。**可观测性是 agent 系统的硬需求**。

3. **Auto Memory 数据安全与生命周期**
   - #26525 指出 transcript 可能在模型上下文中已经"先到达后脱敏"；#26522/#26523 涉及状态机与无效 patch 隔离。**隐私与一致性需要确定性机制而非依赖 LLM 自觉**。

4. **工具数量与上下文预算**
   - #24246：> 128 个工具触发 400 错误；#23571：模型在多处乱建 tmp 脚本。社区呼吁更智能的工具筛选与执行边界。

5. **配置覆盖与可移植性**
   - Symlink agent 不识别（#

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 · 2026-08-20

## 今日速览

过去 24 小时，Copilot CLI 主线连续发布了 **v1.0.81-2 ~ -5** 四个预发布版本，聚焦修复 agent 交互中遗留的 UI/MCP 握手小回归。社区热度集中在 **v1.0.81 强制沙箱、MCP OAuth (RFC 8414 §3.3) 校验策略、子 agent 并行启动后 TUI 失联** 这三大类回归；企业用户则集中反馈 GHEC 数据驻留场景下 `copilot -p` 走错鉴权域导致 401。

---

## 版本发布

- **v1.0.81-5**：修复 agent 处理任务时，用户在 transcript 中再发提示会留下"pending"副本残留的问题。
- **v1.0.81-4 / -3 / -2**：常规修复与调整，详细 changelog 官方尚未展开。

> 💡 这四条版本节奏很快，对应社区反馈的 #4532 "pending 行永久残留"——说明维护团队正在快速迭代修复 UI 回归。

---

## 社区热点 Issues（10 条精选）

| # | Issue | 链接 | 关键看点 |
|---|-------|------|---------|
| 1 | **#2082** Linux 下 `Ctrl+Shift+C` 不再复制到剪贴板（24 评论 / 12 👍） | [Issue](https://github.com/github/copilot-cli/issues/2082) | 自 v1.0.4 起回归，影响 Ubuntu 24.04 大部分终端用户，长达数月未解决 |
| 2 | **#4390** 企业组织启用的 Claude Sonnet 5 / Opus 5 / Kimi K3 缺失（已关闭，15 评论 / 7 👍） | [Issue](https://github.com/github/copilot-cli/issues/4390) | 模型目录不可见导致 Anthropic 全系不可用，已关闭说明修复已在推进 |
| 3 | **#4480** Atlassian MCP OAuth 在 1.0.79 失败（6 评论 / 6 👍） | [Issue](https://github.com/github/copilot-cli/issues/4480) | 1.0.71 → 1.0.79 之间的回归，"issuer 必须匹配元数据 URL" 校验破坏 Atlassian Remote MCP |
| 4 | **#4522** 1.0.81 在 MDM 策略未确定时强制开启沙箱（2 评论 / 7 👍） | [Issue](https://github.com/github/copilot-cli/issues/4522) | 用户显式设 `sandbox.enabled=false` 仍被覆盖；企业策略边界模糊 |
| 5 | **#4521** 沙箱无法被禁用（2 评论 / 4 👍） | [Issue](https://github.com/github/copilot-cli/issues/4521) | 状态显示"已禁用"但运行仍受沙箱约束，与 #4522 同源 |
| 6 | **#4525** 1.0.81-1 MCP 双重 `initialize` 触发 -32022（1 评论） | [Issue](https://github.com/github/copilot-cli/issues/4525) | `server/discover` 之后又发旧版 `initialize`，对 Python MCP SDK 2.0.0 dual-era runner 不兼容 |
| 7 | **#4533** 并行子 agent 启动后 TUI 死锁（0 评论但为 1.0.81-4/-5 关键回归） | [Issue](https://github.com/github/copilot-cli/issues/4533) | Rust runtime 仍在工作，输入/滚动失效，影响所有使用并行 subagent 的用户 |
| 8 | **#4527** `copilot -p` 在 GHEC 数据驻留租户下 401 | [Issue](https://github.com/github/copilot-cli/issues/4527) | prompt 模式走 `api.githubcopilot.com` 而非 tenant 端点，interactive 正常——**企业高危** |
| 9 | **#4528** 非交互模式绕过 `disableBypassPermissionsMode` | [Issue](https://github.com/github/copilot-cli/issues/4528) | `--allow-all` / `--yolo` 与 managed setting 优先级未定义，合规盲区 |
| 10 | **#4532** 输入回复后 pending 行永久残留 | [Issue](https://github.com/github/copilot-cli/issues/4532) | 与 v1.0.81-5 修复方向一致，可能尚未完全解决 |

---

## 重要 PR 进展

> ⚠️ 过去 24 小时内 `github/copilot-cli` **没有新的 PR 合并或更新**。
> 在 #4522、#4525、#4533、#4534 等多个高度具体的回归报告集中在主线的情况下，社区期待尽快看到对应的修复 PR 上线，建议持续关注 default branch 的提交。

---

## 功能需求趋势

1. **沙箱策略可观测性与可控性**
   多条 Issue 指向同一个事实：1.0.81 引入了"先强制启用、待策略返回后再降级"的过渡行为，导致配置不可信。社区呼吁提供显式的 `sandbox: "off" | "auto" | "force"` 三角色切换和更明确的状态指示。

2. **MCP / OAuth 健壮性**
   - RFC 8414 §3.3 issuer 校验在多供应商场景下需要白名单或宽松开关（#4480 / #4490）
   - `prompt=select_account` 对非 Microsoft OAuth 被无条件追加（#4526）
   - Modern `server/discover` 与 Legacy `initialize` 共存的协议路径需要排他（#4525）

3. **上下文与配置的持久化**
   - #4441：多次 compaction 造成早期决策信息衰减，需要"耐用上下文"分层
   - #4530：希望 `/config reasoning_effort` 与 `/config model` 一样跨会话持久

4. **插件市场可发现性**
   #4523 提议为 `copilot plugin marketplace browse` 加交互式搜索/过滤，是当前最直接的产品 UX 改进。

5. **IDE ↔ CLI 一致性**
   - VS Code Remote-SSH 重连后 transcript 空白（#4529）
   - 从 CLI 启动 `code .` 注入空 `GIT_CONFIG_VALUE_*` 污染 Git 发现（#4531）

---

## 开发者关注点

- **🪟 沙箱与配置漂移**：配置层显示状态与运行时实际行为不一致（#4521、#4522、#4524）是最集中的痛点，三条合并看几乎是同一个底层 bug。
- **🧵 TUI 与 Rust runtime 脱钩**：#4533 与 #3698（已关闭）一脉相承，提示事件通道存在背压或子进程未被回收；多数 agent 多任务用户都会踩到。
- **🔄 升级通道不再受控**：#4534 揭示 prerrlease 缓存劫持了 npm 稳定版的 `autoUpdate:false`，属于"看似无关却致命"的运维级问题。
- **🔐 权限策略的层级不透明**：managed setting 在 `-p` / `--yolo` 下被绕过（#4528），企业合规方最关心但缺乏优先级文档。
- **⌨️ TUI 输入抽象层薄弱**：#2082、#4447（Backspace 按词删除）、#4213（unfocused 终端丢键）共同指向输入层对宿主终端 / PTY 兼容性的覆盖不足。
- **🏢 企业数据边界**：#4527（GHEC 数据驻留走错域）和 #4390（组织级启用模型不可见）都属于**只在企业订阅下暴露**的严重问题，对个人开发者不可见但对 adoption 决策影响极大。

---

> 📌 **一句话总结**：今天是一个被版本号洪水掩盖的"修复日"，主线节奏快但沙箱 / MCP OAuth / TUI 三个核心面仍处于回归余波中，下一周值得重点关注对应的修复 PR 是否会跟版。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-08-20
**数据周期**：过去 24 小时
**仓库**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 今日速览

过去 24 小时内 Kimi Code CLI 仓库活跃度较低，**无新版本发布，无新 PR 提交，仅有 1 条 Issue 被更新**。该 Issue 聚焦于 ACP（Agent Client Protocol）模式下内置 `Grep`/`Glob` 工具被拦截以及 `Bash` 工具的终端能力异常问题，反映出 Kimi CLI 与外部 IDE（如 Zed）集成时仍存在兼容性与工具可用性方面的缺陷。

---

## 版本发布

⚠️ **过去 24 小时内无新 Release。** 当前最新版本仍为社区报告中所提到的 `kimi-code CLI 0.37.1`。

---

## 社区热点 Issues

> 注：过去 24 小时内仓库仅更新了 1 条 Issue，因此本节仅收录该条目。

### 🔥 #2609 — [CLOSED] ACP 模式下 Grep/Glob 被拦截，Bash 终端能力间歇性失效

- **作者**：[SolomonFang](https://github.com/SolomonFang)
- **状态**：已关闭（CLOSED）
- **链接**：[Issue #2609](https://github.com/MoonshotAI/kimi-cli/issues/2609)
- **环境**：kimi-code CLI 0.37.1 · macOS · ACP 客户端 Zed（通过 `kimi acp` 启动）

**问题摘要**：

1. 在 ACP 会话中，内置工具 `Grep` 和 `Glob` **始终失败**，错误信息为：
   > `ACP runtime only supports interactive Bash tool processes`
2. `Read` 工具可正常工作（推测未走受限工具路径）。
3. `Bash` 工具间歇性报出：
   > `ACP terminal capability is unavailable`

**为什么值得关注**：

- 这是一个 **ACP 集成链路上的功能性缺陷**，直接影响 Kimi CLI 作为 IDE 内嵌 Agent 的可用性。
- Grep/Glob 是 Agent 在大型代码库中检索的关键工具，被强制下线意味着 ACP 用户只能降级到 `Bash` 执行 grep/find，效率与可控性显著下降。
- 涉及"interactive Bash only" 这一**安全策略与工具能力之间的权衡**，是 ACP 类协议设计的经典矛盾点，社区后续若有类似集成需求，会反复遇到同类问题。
- Issue 已被 **直接关闭**（而非合并修复），社区需要关注：是被更高优先级修复吸收、还是有后续 PR 跟进——目前 PR 端无新增提交，需要在后续日报中持续追踪。

---

## 重要 PR 进展

⚠️ **过去 24 小时内无任何 PR 更新。** 

建议关注：
- 该 Issue 已关闭但无对应 PR 提交，可能修复还未进入代码评审阶段，或在内部仓库消化。
- 明日可重点检索 PR 中是否出现与 ACP / Grep / Glob capability 相关的关键字。

---

## 功能需求趋势

虽然只有单条 Issue 数据，但可从中提炼出明确的趋势信号：

| 趋势方向 | 信号强度 | 证据 |
| --- | --- | --- |
| **ACP / IDE 生态集成** | ⭐⭐⭐ | 唯一活跃 Issue 直接针对 ACP 会话下的工具可用性，且在 Zed 中触发；说明社区正大量尝试 Kimi CLI 作为 IDE Agent |
| **内置工具在受限运行时下的兼容能力** | ⭐⭐⭐ | `Grep`/`Glob` 被"only interactive Bash" 策略误伤，反映非交互进程的工具注册机制仍需完善 |
| **终端能力探测与降级** | ⭐⭐ | `Bash` 间歇性报 `terminal capability unavailable`，说明 ACP 客户端侧的 PTY/termcap 探测不够稳健 |

**结论**：当下社区的最强诉求集中在 **"Kimi CLI 与外部 ACP 客户端的端到端能力对齐"**，这是 Kimi 走向生态化（多编辑器、多 Agent 框架）必须解决的问题。

---

## 开发者关注点

从今天仅有的反馈中可以归纳出以下高频痛点：

1. **🔌 协议层工具白名单过严**
   Grep/Glob 等只读检索工具被一并拦截，开发者希望在 ACP 模式下保留这些**低风险工具**，仅对写入类或副作用类工具做限制。

2. **🖥️ 终端能力探测不稳定**
   Bash 工具"有时能用、有时不能"的间歇性错误，提示 ACP 客户端能力上报（capability negotiation）需要更明确的契约与日志。

3. **🐛 修复链路透明度不足**
   Issue 被直接关闭但无 PR 关联，对外部用户而言缺少"问题 → 修复 → 验证"的闭环信息，期望官方在关闭 Issue 时备注修复版本或 commit。

4. **📦 版本节奏**
   报告时为 0.37.1，过去 24 小时无新版本释出，开发者在等待 ACP 兼容性问题随下个版本修复。

---

> 📌 **明日看点**：建议优先追踪 `#2609` 是否在后续 PR 中得到修复、是否有新的 ACP / IDE 集成类 Issue 出现，以及下个版本（如 0.38.x）的 release notes。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-20** | 数据来源：github.com/anomalyco/opencode

---

## 📌 今日速览

今日社区焦点高度集中在 **OpenCode Go 订阅计费透明性问题** 上——多名付费用户反映 dashboard 显示的配额消耗与本地客户端记录严重不符（部分用户在 6 天内用完全月配额但本地仅记录 $14.80）。与此同时，**V2 架构下的稳定性修复与体验优化** 持续推进，多个 PR 围绕 Session 状态重构、Skills 热重载和 Prompt 乐观提交等关键路径展开。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#37852](https://github.com/anomalyco/opencode/issues/37852) — Aborted provider stream 被记录为"正常停止"
- **关注度**：👍 56 | 💬 19 | 状态：OPEN
- 流中断时 `finish=unknown`、零 token、零文本，子代理静默返回空结果。涉及 subagent 行为的可靠性问题，是本周获得点赞最高的 issue。

### 2. [#43416](https://github.com/anomalyco/opencode/issues/43416) — 订阅用量计费与实际使用不符
- 用户 8/17 订阅，3 天仅使用约 $9，但订阅额度仅剩 $20。直指 **Zen/Go 计费模型与 dashboard 显示差异** 问题。

### 3. [#41976](https://github.com/anomalyco/opencode/issues/41976) — Go 套餐 $60 配额 6 天耗尽，本地仅 $14.80
- **核心矛盾**：cache-read 计费在 dashboard 上扣费但本地成本表不显示。计费透明度问题，关乎用户信任。

### 4. [#43409](https://github.com/anomalyco/opencode/issues/43409) — OpenCode Go 信用消耗异常（4 小时 42%）
- 又一例 Go 套餐早期用户遭遇配额过快扣减，反映计费系统可能存在系统性 bug。

### 5. [#43424](https://github.com/anomalyco/opencode/issues/43424) — 周配额错误耗尽（新订阅 Aug 18）
- 新用户在两天仅用 ~$11 时配额已显示耗尽，与上述案例形成集群。

### 6. [#13626](https://github.com/anomalyco/opencode/issues/13626) — [FEATURE] Web UI 项目自动同步
- 👍 15 | 💬 12 | 在新设备/浏览器打开 Web 端时自动从服务端拉取项目列表。呼声较高的 UX 改进。

### 7. [#3028](https://github.com/anomalyco/opencode/issues/3028) — 切换模型同时作用于所有 agent
- 状态：**CLOSED** | 长期社区诉求，用户经常忘记在 PLAN/BUILD 模式间分别切换模型，已关闭说明功能已落地。

### 8. [#39876](https://github.com/anomalyco/opencode/issues/39876) — TUI 临时文件消耗 207 GiB
- 状态：CLOSED | macOS 下 OpenTUI 在 `$TMPDIR` 留下 58,935 个 `libopentui.dylib` 副本，几乎填满磁盘。严重资源泄露。

### 9. [#43367](https://github.com/anomalyco/opencode/issues/43367) — Subagent gpt-5.6-sol-fast 注入 prompt_cache_retention 失败
- 👍 10 | OpenCode 向 OpenAI 发送了模型不支持的 `prompt_cache_retention` 参数，导致 review 子代理集体失败。

### 10. [#37047](https://github.com/anomalyco/opencode/issues/37047) — Compaction 后会话摘要完全幻觉
- 升级到 1.18.0 后，compaction 生成的会话总结与原会话完全无关，涉及本地会话的数据完整性。

---

## 🛠️ 重要 PR 进展

### 1. [#43542](https://github.com/anomalyco/opencode/pull/43542) — 用 Schema ID 替代手写编码器
- 作者：kitlangton | 删除 web app 手写的 ID 生成器（6 字节 hex 时间戳 + base62 随机 + `msg_` 前缀），统一采用 schema identifier。

### 2. [#43541](https://github.com/anomalyco/opencode/pull/43541) — 默认未知模型的 token 限制
- 作者：opencode-agent[bot] | 未列入目录的模型默认 200k 上下文 / 32k 输出，同时保留显式配置覆盖。

### 3. [#43520](https://github.com/anomalyco/opencode/pull/43520) — Prompt 乐观提交 + 客户端铸造 ID
- 作者：kitlangton | Prompt 发送变得幂等，按 Enter 即时渲染，使用客户端铸造的 inbox ID 与服务端 `session.inbox.enqueued` 对账。

### 4. [#42810](https://github.com/anomalyco/opencode/pull/42810) — 简化中断续传状态机
- 作者：kitlangton | 用三行 post-cleanup 检查替代 run coordinator 的 continuation 状态机（`continuation {request, when, signaled}`）。

### 5. [#43538](https://github.com/anomalyco/opencode/pull/43538) — 技能/命令/Agent 配置热重载
- 作者：mccaffrey-jonathan | 通过 `OPENCODE_EXPERIMENTAL_HOT_RELOAD=true` 开启，文件系统监听器订阅配置目录，无需重启。

### 6. [#43537](https://github.com/anomalyco/opencode/pull/43537) — TUI 斜杠补全显示技能
- 作者：mccaffrey-jonathan | 输入 `/<skillName>` 可触发技能补全，`/skills` 面板按来源分组。

### 7. [#43536](https://github.com/anomalyco/opencode/pull/43536) — 引入全局能力偏好抽象
- 作者：neriousy | 把可变用户偏好从 `Skill.Info` 中抽离出来，能力偏好统一管理。

### 8. [#43282](https://github.com/anomalyco/opencode/pull/43282) — 暴露 subagent 工具的有效 agent ID
- 作者：argszero | `subagent` 工具的 `agent` 字段不再只描述"专业代理类型"，而是列出可选值。

### 9. [#43460](https://github.com/anomalyco/opencode/pull/43460) — 用 schema 自身实例解码插件工具输入
- 作者：argszero | 修复 config plugin 与 server 使用的 `effect` 版本不一致时全部 tool input 解码失败的问题。

### 10. [#43498](https://github.com/anomalyco/opencode/pull/43498) — Vertex Anthropic 工具续传保留
- 作者：major | 修复 Vertex Claude 工具续传以本地 tool result 结尾、随后的原生 system 消息触发 HTTP 404 的问题。

---

## 📈 功能需求趋势

从今日活跃 issue 提炼出以下社区关注方向：

1. **🔋 订阅计费透明度（最热门）**
   - #43416, #41976, #43409, #43424, #43500, #43540
   - 用户强烈要求 dashboard 显示明细（特别是 cache-read token 单独计费的部分），并与本地成本表对齐。

2. **🖥️ Web/Desktop UX 改进**
   - #13626（项目自动同步）、#43295（窄屏控件重叠）、#41742（桌面快捷键切换 agent）、#43493（agent 等待通知音）。

3. **🤖 V2 子代理与模型兼容性**
   - #43367（gpt-5.6-sol-fast 参数不兼容）、#9296（plan→build 切换模型）、#43282（暴露有效 subagent ID）。

4. **🧠 Compaction 与会话完整性**
   - #37047（摘要幻觉）、#36604（detach/reattach 后会话卡死）—— 长会话可靠性问题。

5. **🔌 插件与 MCP 生态**
   - #41530、#43530（V2 MCP idle 后限流）、#42485（SEA 二进制插件加载）。

6. **⚙️ Skills 与配置工作流**
   - #43538（热重载）、#43537（斜杠补全）—— 开发体验提升。

---

## 💡 开发者关注点

总结开发者的高频痛点与诉求：

- **💸 计费信任危机**：OpenCode Go 用户对"配额耗尽速度"普遍不满。开发者希望：**（a）dashboard 显示 token 明细拆分**（cache-read vs input vs output），**（b）本地成本表与 dashboard 数字必须一致**，**（c）提供 rate-limit 预警**。这是当前最影响付费用户留存的痛点。

- **🔇 静默失败模式**：#37852 的子代理静默空返回、#36604 的 detach 后 prompt 丢失、#43531 的连接失败无友好提示——开发者普遍希望 OpenCode 在 **不可恢复错误** 和 **可恢复错误** 之间提供更清晰的状态区分。

- **⏪ 跨平台稳定性**：#39876（macOS 磁盘占满 207 GiB）、#43518（WSL 硬冻结）、#43516（V2 TUI 无法粘贴）—— 平台特定 bug 仍是 release blocker。

- **🔄 配置热重载**：PR #43538 反映出开发者希望迭代配置/skill 时 **不必重启服务**，"实验性 hot-reload" 是呼声较高的开发体验需求。

- **📦 V2 GA 前的关键修复**：被 `[2.0]` / `[v2]` 标记的 PR/issue 集中爆发——`prompt_cache_retention` 注入、插件 effect 版本冲突、SEA 二进制加载、本地插件发现——表明 V2 正在快速逼近，但仍有不少生产环境问题待解。

---

*日报生成时间：2026-08-20 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-20

> 数据来源：[earendil-works/pi](https://github.com/badlogic/pi-mono) · 统计周期：过去 24 小时

---

## 📌 今日速览

**今天是修复日而非发布日**——过去 24 小时内无新版本发布，但社区非常活跃：30+ 个 Issue 被更新、20+ 个 PR 合并或推进。今日主线围绕三大主题：**Windows 平台兼容性系统性梳理**（开启了 petrroll 的 [Issue #7547](https://github.com/earendil-works/pi/issues/7547) 大讨论 + 多个 Windows 终端 Bug）、**多模型 Provider 适配与目录刷新**（OpenCode Go / ZAI / X.AI / Bedrock 等），以及 **session-scoped 模型配置重构**落地（[#5263](https://github.com/earendil-works/pi/issues/5263) 的 PR [#8356](https://github.com/earendil-works/pi/pull/8356) 终于合并）。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

按讨论深度与影响力筛选（排除 `no-action`/`untriaged`/`last-read` 等低信号标签）：

### 1. [#7547](https://github.com/earendil-works/pi/issues/7547) ⭐ Windows 平台使用 Pi 的体验盘点
- **状态**：OPEN · 💬 31
- **为什么重要**：发起者 petrroll 明确这是**平台战略级讨论**，号召社区报告在 Windows（WSL / 原生 / Git Bash / Windows Terminal）下的运行方式、痛点与改进方向。这是 Pi 触达"百万 Windows 开发者"的起点，会决定后续核心团队投入资源的优先级。
- **社区反应**：引发多个 Windows 衍生 Issue（[#8183](https://github.com/earendil-works/pi/issues/8183)、[#8372](https://github.com/earendil-works/pi/issues/8372)），与 [#7829](https://github.com/earendil-works/pi/issues/7829)（Git Bash bash not found 误报错）形成"Windows 三角"，共识是需要更稳健的 settings.json 解析与终端键位文档。

### 2. [#5263](https://github.com/earendil-works/pi/issues/5263) ⭐⭐ 让会话内模型/思考级别变更默认为临时
- **状态**：CLOSED · 👍 13 · 💬 11
- **为什么重要**：是**获得 13 个 👍 的高赞提案**，解决"误改全局默认值"这一长期 UX 痛点——`/model` 或循环切换模型会污染未来启动配置。已通过 PR [#8356](https://github.com/earendil-works/pi/pull/8356) 落地（见下方 PR 章节）。
- **社区反应**：维持者 cristinaponcela 立即提交 PR 并当天合并，是"高信号 issue → 当天 ship"的范例。

### 3. [#5895](https://github.com/earendil-works/pi/issues/5895) — Agent steering message 支持 opt-out 唤醒
- **状态**：CLOSED · 💬 6
- **为什么重要**：解决了扩展作者一个隐蔽控制问题——如何在 turn 结束后插入 steering 消息但**不**强制再起一次 LLM 调用。对构建"惰性恢复"型扩展（仅写日志、改 UI 状态）很关键。

### 4. [#7829](https://github.com/earendil-works/pi/issues/7829) — 无效 settings.json 静默忽略 + Windows 误导性 "bash not found"
- **状态**：CLOSED · 💬 6
- **为什么重要**：用户配置 JSON 中未转义反斜杠（Windows 路径常见问题），Pi 不报错却退化为"bash not found"，诊断链路完全断裂。属于**Windows 体验的关键回归点**。

### 5. [#8206](https://github.com/earendil-works/pi/issues/8206) — opencode-go 目录中 qwen3.6-plus / minimax-m2.7 路由错误
- **状态**：OPEN · 💬 4（标记 inprogress）
- **为什么重要**：模型被错误地归类为 `openai-completions`，但 opencode.ai/zen/go 实际只通过 Anthropic Messages 端点提供。属于**模型目录生成器的系统性偏差**，影响所有 opencode-go 用户。

### 6. [#8183](https://github.com/earendil-works/pi/issues/8183) — Windows Terminal Ctrl+Shift+F 与全屏 transcript 搜索冲突
- **状态**：OPEN · 💬 4
- **为什么重要**：文档缺口类问题，体现 Windows 终端生态（Windows Terminal 自身快捷键）与 Pi TUI 的键位冲突亟需正式登记与说明。

### 7. [#3966](https://github.com/earendil-works/pi/issues/3966) — 内置 `--profile` 隔离 Pi 状态
- **状态**：CLOSED · 💬 4
- **为什么重要**：解决工作/个人/本地 LLM 多环境交叉污染，是多账户、多项目开发者的刚需。

### 8. [#7994](https://github.com/earendil-works/pi/issues/7994) — openai-completions `reasoning_details` round-trip 缺陷
- **状态**：CLOSED · 💬 3
- **为什么重要**：OpenRouter 870 次基准测试发现，只能 round-trip 加密 reasoning 条目，签名文本无法回放，导致 forked 会话丢失推理上下文。已由 PR [#8246](https://github.com/earendil-works/pi/pull/8246) 修复。

### 9. [#8206 系列 + #8336 + #8341](https://github.com/earendil-works/pi/issues/8336) — 模型目录漂移问题集中爆发
- **状态**：CLOSED
- **为什么重要**：24 小时内出现至少 3 个 catalog 相关 issue（ZAI glm-5.3 思考等级失效、qwen-token-plan 缺失新模型、llama.cpp 路径），说明 **pi-ai 的目录同步流水线**与 `models.dev` 存在系统性滞后。

### 10. [#8328](https://github.com/earendil-works/pi/issues/8328) — 零 usage Provider 触发不了阈值压缩
- **状态**：CLOSED · 💬 3
- **为什么重要**：OpenAI 兼容 Provider 不返回 usage 时，`_checkCompaction` 直接 bail，导致长会话**永远不压缩**直到 OOM。属于潜在的生产可用性问题。

---

## 🛠 重要 PR 进展

### 1. [#8356](https://github.com/earendil-works/pi/pull/8356) ✅ — 修复会话内模型/思考级别误改全局默认
由 cristinaponcela 当天合并，关闭了高赞 issue [#5263](https://github.com/earendil-works/pi/issues/5263)。改动非常克制：只允许通过 `/settings` 显式写入全局，会话内切换完全 ephemeral。

### 2. [#8246](https://github.com/earendil-works/pi/pull/8246) ✅ — OpenAI completions 推理细节 round-trip
保留 assistant-message 级别的 `reasoning.text`/`reasoning.summary`，修复了 OpenRouter fork 会话丢失推理上下文的问题（[#7994](https://github.com/earendil-works/pi/issues/7994)）。

### 3. [#8374](https://github.com/earendil-works/pi/pull/8374) ✅ — fork 前中止正在运行的 agent
解决"用户连按两次 Esc / fork 时与在飞 retry 竞态"这一隐蔽 race，是会话一致性的重要补丁。

### 4. [#8377](https://github.com/earendil-works/pi/pull/8377) ✅ — `getLatestNpmVersion` 尊重 `min-release-age`
修复"Package Updates Available" 横幅报告的版本号是 npm 实际不会安装的——之前直接查 `latest` dist-tag 忽略了 `min-release-age` 过滤。

### 5. [#8314](https://github.com/earendil-works/pi/pull/8314) ✅ — Bedrock Converse redacted reasoning 往返
支持 AWS 文档化的 `reasoningContent.redactedContent`，对齐 OpenAI/Anthropic 同类能力。

### 6. [#8361](https://github.com/earendil-works/pi/pull/8361) ✅ — 为 7 个 API adapter 添加 Pi User-Agent
覆盖 openai-responses / openai-completions / anthropic-messages / azure-openai-responses / google-generative-ai / google-vertex / mistral-conversations。关闭 [#8305](https://github.com/earendil-works/pi/issues/8305)，便于服务端识别 Pi 流量。

### 7. [#8066](https://github.com/earendil-works/pi/pull/8066) 🟡 — TUI visual lines 缓存
修复大输出重新计算浪费，缓存按 width/text 失效。配合 [#7772](https://github.com/earendil-works/pi/issues/7772) Reduce Memory Usage 主线。

### 8. [#8363](https://github.com/earendil-works/pi/pull/8363) 🟡 — 修复 wrapped 表格的链接颜色泄漏
带测试用例的视频证据，针对 [#8335](https://github.com/earendil-works/pi/issues/8335)。

### 9. [#8302](https://github.com/earendil-works/pi/pull/8302) 🟡 — Amazon Bedrock Mantle 支持
新增 Mantle 端点的 OpenAI Responses provider（WIP），补充现有 Converse 路由，触及 [#5363](https://github.com/earendil-works/pi/issues/5363)。

### 10. [#8365](https://github.com/earendil-works/pi/pull/8365) + [#8366](https://github.com/earendil-works/pi/pull/8366) ✅ — 内置斜杠命令触发 `input` 事件
解决扩展"看不见 `/share`、`/export` 等内置命令"的盲区。两次提交，去重后合并，对扩展可观测性是显著改进。

### 11. [#8355](https://github.com/earendil-works/pi/pull/8355) 🟡 — 扩展 UI 提示事件
新增 `ui_prompt_start` / `ui_prompt_end`，让客户端可显示"等待用户输入"而非笼统的"Agent working"。

### 12. [#7784](https://github.com/earendil-works/pi/pull/7784) ✅ — Agent 恢复状态改用记录查询派生
移除 SQLite 专用索引与查询 API，用有界 `findRecords()` 推导恢复状态，是 agent-loop 内部的较大重构。

---

## 📈 功能需求趋势

| 方向 | 信号强度 | 代表性 Issue |
|------|---------|--------------|
| **Windows 平台一等公民** | 🔥🔥🔥 极热 | [#7547](https://github.com/earendil-works/pi/issues/7547)、[#7829](https://github.com/earendil-works/pi/issues/7829)、[#8183](https://github.com/earendil-works/pi/issues/8183)、[#8372](https://github.com/earendil-works/pi/issues/8372) |
| **多 Provider/模型目录保鲜** | 🔥🔥🔥 | [#8206](https://github.com/earendil-works/pi/issues/8206)、[#8336](https://github.com/earendil-works/pi/issues/8336)、[#8341](https://github.com/earendil-works/pi/issues/8341)、[#8358](https://github.com/earendil-works/pi/issues/8358) |
| **会话状态/作用域精细化** | 🔥🔥 | [#5263](https://github.com/earendil-works/pi/issues/5263)、[#3966](https://github.com/earendil-works/pi/issues/3966)、[#8376](https://github.com/earendil-works/pi/issues/8376) |
| **扩展 API 可观测性** | 🔥🔥 | [#8349](https://github.com/earendil-works/pi/issues/8349)、[#8364](https://github.com/earendil-works/pi/issues/8364)、[#8379](https://github.com/earendil-works/pi/issues/8379) |
| **TUI 体验/性能** | 🔥 | [#7772](https://github.com/earendil-works/pi/issues/7772)（mitsuhiko 亲自 track）、[#8344](https://github.com/earendil-works/pi/issues/8344)、[#8369](https://github.com/earendil-works/pi/pull/8369) |
| **模型推理细节 round-trip** | 🔥 | [#7994](https://github.com/earendil-works/pi/issues/7994)、[#8314](https://github.com/earendil-works/pi/pull/8314)、[#8359](https://github.com/earendil-works/pi/pull/8359) |
| **Per-model 配置/压缩** | 🔥 | [#8133](https://github.com/earendil-works/pi/issues/8133) |

---

## 🧑‍💻 开发者关注点

**1. Windows 是最大未解决战场**  
过去 24 小时至少 4 个 Windows 相关 Issue 同时活跃，覆盖设置解析、终端键位冲突、SSH + CJK 输入渲染（[#8382](https://github.com/earendil-works/pi/issues/8382)）、bash 路径诊断。维护者 petrroll 主动发起平台盘点 thread，意味着 Pi 接下来会集中投入 Windows 适配——对 Windows 开发者是明确利好。

**2. 模型目录流水线是隐藏的"运维债"**  
Qwen / DeepSeek / GLM / Grok / OpenCode-Go / Bedrock Mantle 等多家目录在 24 小时内密集出现漂移问题。这反映出 `pi-ai` 的 `models.dev` 同步机制、catalog JSON 与 live endpoint 表的一致性需要一次工程化重构（类似 [#8358](https://github.com/earendil-works/pi/issues/8358) 揭示的"bundled catalog 滞后于 models.dev"问题）。

**3. Provider 适配进入"深水区"**  
不再是"接一个新模型"那么简单，而是要处理：
- 跨 Provider 的 reasoning 编码/签名回放（[#7994](https://github.com/earendil-works/pi/issues/7994)、[#8314](https://github.com/earendil-works/pi/pull/8314)）
- 代理/网关下的模型识别（[#8359](https://github.com/earendil-works/pi/pull/8359)）
- reasoning_effort 在不支持的模型上误发（[#8381](https://github.com/earendil-works/pi/issues/8381)）
- 流式超时与零 usage 兜底（[#8321](https://github.com/earendil-works/pi/issues/8321)、[#8322](https://github.com/earendil-works/pi/issues/8322)、[#8323](https://github.com/earendil-works/pi/issues/8323)、[#8328](https://github.com/earendil-works/pi/issues/8328)）

**4. 扩展 API 走向"事件化"**  
24 小时内至少 4 个 PR/Issue 与扩展事件相关（`input` 事件、`ui_prompt_*`、队列化检测、工具默认不激活

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**📅 2026-08-20**

---

## ⚡ 今日速览

今日 Qwen Code 发布 **v0.21.14** 正式版本，核心亮点是新增 `qwen sessions ps` 命令和实时会话注册中心（live-session registry），可对运行中的会话进行 JSON 输出的列举与管理。社区方面，**3 个 P1 级别 Bug** 集中暴露在 effort 控制、模型切换 token 计数和 CI 鲁棒性上，多 Agent 协调场景下的 `task_list` 重复检测误判与 Agent 工具启动失败被错误标记为成功成为高频痛点；`/review` 子系统的发布时收敛建议（publish-time convergence advisory）设计讨论热度持续上升。

---

## 🚀 版本发布

### v0.21.14（2026-08-19）

- **新增** `qwen sessions ps` 命令 + 实时会话注册中心，支持 JSON 输出列举与管理正在运行的交互式会话（[#8969](https://github.com/QwenLM/qwen-code/pull/8969)、[#9261](https://github.com/QwenLM/qwen-code/pull/9261)、[#9366](https://github.com/QwenLM/qwen-code/pull/9366)）。
- **夜间构建**：v0.21.11-nightly.20260819.d87b272aec（[#8969](https://github.com/QwenLM/qwen-code/pull/8969)）
- **DSW EAS 全链路验证**（基于 v0.21.14）：
  - `dsw-eas-full-20260820-r1`：SWE-bench Verified 500 + Release writeback + Terminal-Bench 2.0 89 ✅
  - `dsw-eas-full-20260819-r1`：同上流程 ✅
  - `dsw-eas-net-smoke-20260819-r1`：DSW EAS 网络 + watchdog smoke ✅

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论数 | 重要性 |
|---|-------|--------|--------|--------|
| 1 | [#5267](https://github.com/QwenLM/qwen-code/issues/5267) `context.fileName` 在设置文件中不生效 | Bug（已关闭） | 12 | 长期未根治的配置问题，影响上下文加载 |
| 2 | [#9194](https://github.com/QwenLM/qwen-code/issues/9194) PR #9096 评审发现的突变测试钉死漏洞（round 5-6） | P3 | 11 | 揭示自动评审流程的测试鲁棒性盲区 |
| 3 | [#9278](https://github.com/QwenLM/qwen-code/issues/9278) `/review` 发布时收敛建议设计文档 | P2 进行中 | 7 | 围绕"失控回路"（review→finding→fix→diff 膨胀）的系统性反思 |
| 4 | [#9459](https://github.com/QwenLM/qwen-code/issues/9459) `/effort max` 在 OpenAI 兼容 Provider 上直接卡死会话 | **P1** | 4 | UI 提供选项但服务端拒绝，导致后续 400，必须换 tier 才能恢复 |
| 5 | [#9309](https://github.com/QwenLM/qwen-code/issues/9309) `/compress-fast` 与 `/compress` 串联上下文压缩异常 | P3 | 5 | 压缩结果在 170k→7k 之后再次压缩时不符合预期 |
| 6 | [#9454](https://github.com/QwenLM/qwen-code/issues/9454) `/model` 切换后复用上一路由的 prompt/output token 计数 | **P1** | 3 | 跨 Provider 切换时统计失真，影响成本与限额感知 |
| 7 | [#9480](https://github.com/QwenLM/qwen-code/issues/9480) CI 加固的 wipe guard 在 symlink 工作区下导致 runner 卡死 | **P1** | 3 | fail-closed 设计引发的副作用，已知环境兼容性问题 |
| 8 | [#9450](https://github.com/QwenLM/qwen-code/issues/9450) `task_list` 错误触发"重复工具调用循环检测" | P2 welcome-pr | 4 | Agent Team 协调时被错误判定为 stuck teammate |
| 9 | [#9509](https://github.com/QwenLM/qwen-code/issues/9509) Agent 工具启动失败被错误报告为成功工具调用 | P2 | 3 | 缺失 `error` 字段，调度器无法识别失败，影响后续行为 |
| 10 | [#9494](https://github.com/QwenLM/qwen-code/issues/9494) 流式响应时斜杠命令菜单选中态跳回首项 | P3 | 3 | UI 高频痛点，TUI 交互体验明显降级 |

> **加分关注**：[#6542](https://github.com/QwenLM/qwen-code/issues/6542)（Advisor 反馈环）与 [#9036](https://github.com/QwenLM/qwen-code/issues/9036)（对齐 Claude Code 的原生 Advisor 工具）是社区呼声最高的两项长期能力建设方向。

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 关联 Issue |
|---|----|------|------------|
| 1 | [#9491](https://github.com/QwenLM/qwen-code/pull/9491) | **`/review` Aone Code 写入路径**：将评论通过 a1 CLI 真正投递到 Aone 评审系统 | 终结 "not supported yet" 状态 |
| 2 | [#9517](https://github.com/QwenLM/qwen-code/pull/9517) | **`qwen-autofix.yml` 超 500KB 导致 GitHub 静默拒绝运行** —— 修复 | 配套 [#9480](https://github.com/QwenLM/qwen-code/issues/9480) |
| 3 | [#9518](https://github.com/QwenLM/qwen-code/pull/9518) | **停止把"卡在队列" 的运行计入 in-flight**：修复 shepherd 死锁 | 直接消除 #9517 的二次伤害 |
| 4 | [#9519](https://github.com/QwenLM/qwen-code/pull/9519) | **`fix(core)`**：为 Agent 工具启动失败路径补上 `error` 字段，遵循 `buildSpawnBlockedResult` 模式 | 修复 [#9509](https://github.com/QwenLM/qwen-code/issues/9509) |
| 5 | [#9520](https://github.com/QwenLM/qwen-code/pull/9520) | **Agent 编排契约文档**：覆盖 6 条启动路径（in-process 子 Agent、forks、命名 teammate、workflow、Cursor SDK、Cursor CLI） | 长期基础能力建设 |
| 6 | [#9394](https://github.com/QwenLM/qwen-code/pull/9394) | **新增钉钉（DingTalk）Workspace 渠道**：DM、@提及、环境群、文档提及、原生 todo、源作用域会话 | 国内办公场景扩展 |
| 7 | [#9392](https://github.com/QwenLM/qwen-code/pull/9392) | **支持 channel workers 连接 TLS 守护进程**：`--tls-cert/--tls-key` 时下发 `https://` loopback URL | 安全部署场景必需 |
| 8 | [#9502](https://github.com/QwenLM/qwen-code/pull/9502) | **Homebrew 模式下从 brew metadata 取版本再判断更新**，避免每次启动误报 | 修复 [#9493](https://github.com/QwenLM/qwen-code/issues/9493) |
| 9 | [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | **`refactor`**：以稳定的 prompt identity 作为可见 user turn、模型历史、持久化会话、ACP rewind、有界 fork 的唯一锚点 | 重构基础设施 |
| 10 | [#9492](https://github.com/QwenLM/qwen-code/pull/9492) | **`fix(core)`**：`task_list` 类有状态读取工具的循环检测改为结果感知 | 修复 [#9450](https://github.com/QwenLM/qwen-code/issues/9450) |

> **其他值得关注**：[#9094](https://github.com/QwenLM/qwen-code/pull/9094)（Gemini 2.5 使用 `thinkingBudget` 而非 `thinkingLevel`）、[#9421](https://github.com/QwenLM/qwen-code/pull/9421)（TUI 重复 in-flight tool_group）、[#9305](https://github.com/QwenLM/qwen-code/pull/9305)（短内容底对齐）。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue/PR 文本中可以提炼出以下社区关注焦点：

1. **多 Agent / 团队协作鲁棒性** — `task_list` 误判（[#9450](https://github.com/QwenLM/qwen-code/issues/9450)）、Agent 启动失败语义丢失（[#9509](https://github.com/QwenLM/qwen-code/issues/9509)）、subagent/worktree 协调需求明显上升。
2. **`/review` 子系统工业化** — 从"评审-发现-修复"回路收敛性、写入路径（[#9491](https://github.com/QwenLM/qwen-code/pull/9491)）、轻量化审查（[#7411](https://github.com/QwenLM/qwen-code/issues/7411)）到发布时收敛建议（[#9278](https://github.com/QwenLM/qwen-code/issues/9278)），全链路正在被严肃重构。
3. **跨 Provider 一致性** — OpenAI 兼容 Provider 上的 effort clamping（[#9459](https://github.com/QwenLM/qwen-code/issues/9459)）、Gemini 2.5 thinking 配置（[#9094](https://github.com/QwenLM/qwen-code/pull/9094)）、OpenAI Response API 支持（[#889](https://github.com/QwenLM/qwen-code/issues/889)）持续推动多后端体验对齐。
4. **桌面/Shell 形态统一** — 弃用 Electron 桌面、让 Tauri `desktop-shell` 接管 `desktop` 命名（[#8596](https://github.com/QwenLM/qwen-code/issues/8596)）、Web Shell 体验打磨（[#9260](https://github.com/QwenLM/qwen-code/pull/9260)、[#9406](https://github.com/QwenLM/qwen-code/pull/9406)）。
5. **国产办公生态集成** — 钉钉 Workspace channel（[#9394](https://github.com/QwenLM/qwen-code/pull/9394)）、Aone Code 评审写入（[#9491](https://github.com/QwenLM/qwen-code/pull/9491)）成为新增长点。
6. **Advisor 能力对标 Claude Code** — 长期特性提案 [#6542](https://github.com/QwenLM/qwen-code/issues/6542) 与对齐原生 Advisor 的 [#9036](https://github.com/QwenLM/qwen-code/issues/9036) 双线并行。
7. **会话/技能系统升级** — Live-session registry、自动抽取 skill 提升到 user scope（[#9515](https://github.com/QwenLM/qwen-code/issues/9515)）、prompt identity 锚定 rewind（[#9466](https://github.com/QwenLM/qwen-code/pull/9466)）。

---

## 💢 开发者关注点

从 Issue 反馈与讨论热度看，开发者当前最强烈的痛点集中在以下五个方向：

1. **🚨 P1 失败模式静默化**：`/effort max` 直接让整会话 400、模型切换后 token 计数复用、Agent 启动失败被吞掉错误字段 —— 错误信号丢失让用户在没有明显反馈的情况下"以为成功了"。
2. **🪫 上下文/压缩语义不稳**：`/compress-fast` 与 `/compress` 串联行为不一致（[#9309](https://github.com/QwenLM/qwen-code/issues/9309)）、`/compress` 看似在转圈但实际不压缩（[#4098](https://github.com/QwenLM/qwen-code/issues/4098)、[#4141](https://github.com/QwenLM/qwen-code/issues/4141)）是过去 24h 内仍在被复现的老问题。
3. **📦 安装/更新体验**：Homebrew 安装每次启动都被"更新可用"骚扰（[#9493](https://github.com/QwenLM/qwen-code/issues/9493)）；CI 工作流超大静默失败（[#9517](https://github.com/QwenLM/qwen-code/pull/9517)）反映自动化工具体系自身的鲁棒性短板。
4. **🧭 多 Agent 协调的"语义误判"**：在 Agent Team 场景里，状态读取类工具被循环检测器一刀切当成"卡住"，导致本应顺利协作的 teammate 被强制中断 —— 急需 result-aware 检测（[#9492](https://github.com/QwenLM/qwen-code/pull/9492) 是当前最佳回应）。
5. **🪟 UI 微交互细节**：斜杠命令菜单跳回首项（[#9494](https://github.com/QwenLM/qwen-code/issues/9494)）、短内容底部留白（[#9305](https://github.com/QwenLM/qwen-code/pull/9305)）、`ask_user_question` 静默回写"User declined"（[#9011](https://github.com/QwenLM/qwen-code/issues/9011)） —— TUI 体验小但高频，直接影响日常使用体感。

> 综合来看，社区当前最迫切的需求是 **"让失败可见、让静默发声"** —— 在多模型、多 Agent、自动化 CI 三股力量交织的版本里，错误的可见性与跨上下文的语义一致性，正在成为 Qwen Code 走向成熟的关键工程化命题。

---

*日报基于 QwenLM/qwen-code 仓库 2026-08-19 至 2026-08-20 的公开数据生成*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-20** | **数据源：Hmbown/CodeWhale**

> 注：仓库主仓库标识为 Hmbown/CodeWhale（原 DeepSeek TUI 品牌），本日报沿用社区惯用名称。

---

## 📌 今日速览

今天最核心的动态是 **v0.9.10 发布列车正式进入集成阶段**（PR #5513，76 个 commit 的完整 release lane），聚焦"内存保留、身份持久化、首次运行、版本加固"四个方向；与此同时，**v0.9.9 引发两起严重的用户级回归**——Header 状态指示器从 0.9.7 起静默失效（#5512）、HTTP 400 `max_tokens=384000` 超限（#5516），均在 24h 内被新开 issue 捕获。社区侧，**中文文档本地化、i18n 字典主干（dictionary spine）迁移** 仍在持续推进，今日 Lstarsky0 的 #5337 系列与 SparkofSpike 的 #5482 文档本地化 EPIC 都有新进展。

---

## 🚢 版本发布

过去 24 小时无正式 Release 标签发布，但 **v0.9.10 RC 集成 PR #5513** 已开启，承载 76 个 commit 的完整研发线，主要覆盖：

- **内存保留策略**：关闭 v0.9.9 暴露的 1h stdout/stderr 全量驻留（#5472）
- **身份与会话持久化**：审批结果（approval outcomes）执行前落盘并 fail-closed（#5360 / #5491）
- **首次运行体验** 与 **release 硬化**

预计 v0.9.10 将在集成完成后进入 tag 阶段。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#5518 Emergency compaction 在 ~85K–105K tokens 触发](https://github.com/Hmbown/CodeWhale/issues/5518) — OPEN
使用 vLLM 部署的 DeepSeek-V4-Flash 路线（context_window=327680，`auto_compact=false`）仍过早触发紧急压缩。怀疑是输出头预算过大或 handoff 状态污染。**重要性**：直接影响 DeepSeek V4 / V4-Flash 新模型路线的可用性。**反应**：3 条评论，热度上升中。

### 2. [#5516 升级 v0.9.9 后 HTTP 400 `max_tokens=384000` 超过模型 262144 上限](https://github.com/Hmbown/CodeWhale/issues/5516) — OPEN
用户未做任何手动配置，升级即触发每个请求失败。**重要性**：典型"升级即坏"回归，影响所有从 0.9.8 升级到 0.9.9 的用户；与 v0.9.10 release lane 强相关。

### 3. [#5512 Header 状态指示器（cw/whale/dots）自 0.9.7 起不再渲染](https://github.com/Hmbown/CodeWhale/issues/5512) — OPEN
Windows 11 / Windows Terminal 1.20+ / PowerShell 7.6 上 0.9.8 与 0.9.9 复现，0.8.64 时代正常。**重要性**：UI 静默回归，状态指示器对长任务体验关键。

### 4. [#5337 Web：完成 #4934 字典主干——下线所有 isZh 分支并内联 {en, zh} 模块](https://github.com/Hmbown/CodeWhale/issues/5337) — OPEN
chrome + home 路由已统一到 `getChrome(locale)` / `getHome(locale)`，但页面主体仍残留大量 `isZh` 分支。**重要性**：架构级 i18n 重构，决定后续多语言扩展的可持续性。**反应**：6 条评论，多个 PR 已落地。

### 5. [#5519 Web：isZh 迁移正在"失地"——加单向天花板让它收敛](https://github.com/Hmbown/CodeWhale/issues/5519) — OPEN
近 30 天 isZh 分支净增 10 个、净减 6 个，过去 90 天从 12 → 31 个。**重要性**：暴露了 #5337 缺乏防御性约束；社区已开始为迁移期引入 CI 闸口。

### 6. [#5482 EPIC：审阅、部分重构、并完整将文档本地化为中文](https://github.com/Hmbown/CodeWhale/issues/5482) — OPEN
docs/ 下大量英文文档对中文用户构成硬门槛，机翻引入错误且部分源文档已过时。**重要性**：增长中的中文用户群体的核心基础设施；今日 #5507 已交付 Tier 1。

### 7. [#5056 测试可靠性：verifier 后台用例 flaky + /workspace 敏感 fixture + 12 个未分流 `#[ignore]` 测试](https://github.com/Hmbown/CodeWhale/issues/5056) — CLOSED
`run_verifiers_background_advertises_detached_start` 等用例在全量并行下仍 flaky。**重要性**：阻塞 CI 绿色；与 #5403 "main 红"形成关联。

### 8. [#5403 main 在 macOS / Windows 双平台连续四次构建全红](https://github.com/Hmbown/CodeWhale/issues/5403) — CLOSED
`#5395` 修复了 CI 互相取消后，所有完成运行都暴露失败：`plugin_e2e_acceptance` (macOS) + NSIS provisioning (Windows)。**重要性**：首次揭示"信号 vs. 噪声"问题——新增信息而非新增故障。

### 9. [#1425 大文本处理工程后会话中断卡死](https://github.com/Hmbown/CodeWhale/issues/1425) — CLOSED
300 万字小说切片 → 10 个子 agent 并行主 agent `agent_wait` 超时；会话并非真死，而是被中断。**重要性**：长上下文 + 多 agent 编排的代表性 user pain point。

### 10. [#5472 TUI 内存保留：每次 Bash 调用的完整 stdout/stderr（额外多个保留者）驻留 1 小时](https://github.com/Hmbown/CodeWhale/issues/5472) — CLOSED
2026-08-16 一次 v0.9.9 dogfood 主机 swap 飙到 11 GB，审计发现 in-process 保留策略存在复合放大。**重要性**：直接驱动 v0.9.10 "retention" 主题。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#5513 release: Codewhale v0.9.10 — retention, identity, durable approvals](https://github.com/Hmbown/CodeWhale/pull/5513) — OPEN
76 个 commit 的完整 release lane rebase 到 `main` + 社区已接受改动。**意义**：v0.9.10 集成主线。

### 2. [#5514 refactor(tui): extract stream processing from turn loop](https://github.com/Hmbown/CodeWhale/pull/5514) — OPEN
把 `handle_deepseek_turn` 中的响应流状态机抽到 `process_stream`，仅通过 `StreamOutcome` 回流；保留请求计时、透明重试与输出限制。**意义**：降低 turn loop 复杂度，提升可测性。

### 3. [#5515 fix(tui): forward MCP image results as typed content](https://github.com/Hmbown/CodeWhale/pull/5515) — OPEN
将标准 MCP `image` content 转为 Provider-neutral rich tool-result，去掉 text receipt 内的 inline base64，复用 5 MiB / 单图 / 校验管线。**意义**：MCP 图像通道正式合规。

### 4. [#5517 feat(web): move docs/constitution 和 docs/runtime-api 到字典主干](https://github.com/Hmbown/CodeWhale/pull/5517) — OPEN
#5337 系列第二阶段：两个页面各有 14 个 isZh 分支，全部归零。**意义**：与 #5519 单向天花板配套。

### 5. [#5509 fix(tui): restore /title as an independent terminal window title](https://github.com/Hmbown/CodeWhale/pull/5509) — OPEN
撤销 `24c7dee46` 中 `/title` 与 `/rename` 的合并，恢复 `/title` 仅控制终端窗口标题、避免污染会话内显示。**意义**：修复历史 UX 合并带来的语义混淆。

### 6. [#5491 fix(tui): persist approval outcomes before execution](https://github.com/Hmbown/CodeWhale/pull/5491) — CLOSED
执行前落盘审批请求与终态结果；持久化失败 → fail-closed、过期决策 → 拒绝；会话恢复时重建中断态。**意义**：关闭 #5360，durable approvals 落地。

### 7. [#5506 feat(tui): command context adapters and migration gate (FEAT-015)](https://github.com/Hmbown/CodeWhale/pull/5506) — CLOSED
TUI 端命令依赖注入 + 迁移闸口基础设施，但**不迁移任何生产命令组**。**意义**：为后续 slash-command 重构铺路。

### 8. [#5504 feat(web): move docs/hooks 和 docs/troubleshooting 到字典主干](https://github.com/Hmbown/CodeWhale/pull/5504) — CLOSED
两个最小页面（各 12 个 isZh 分支）归零；16 处部分本地化已统一。**意义**：#5337 #5504 → #5517 的阶段里程碑。

### 9. [#5511 feat(tui): show repository context in git chrome](https://github.com/Hmbown/CodeWhale/pull/5511) — CLOSED
TUI header 显示：`repo · branch*` / `repo/worktree · branch*`，长路径截断，ahead/behind 仍可见。**意义**：实现 #5437 中"仓库与 worktree 状态"审批切片。

### 10. [#5507 docs(i18n): complete Tier 1 of Chinese docs localization (#5482)](https://github.com/Hmbown/CodeWhale/pull/5507) — CLOSED
重排 docs 树，把已有中文翻译迁移到 `docs/zh_hans/`。**意义**：#5482 EPIC 第一个里程碑达成。

---

## 📈 功能需求趋势

| 方向 | 信号 | 代表 Issue / PR |
|---|---|---|
| **DeepSeek V4 / V4-Flash 适配** | 路线上下文与压缩阈值不匹配；max_tokens 升级默认值过大 | #5518, #5516 |
| **国际化（i18n）/ 中文支持** | 字典主干迁移、中文文档本地化、Agent 输出中文乱码 | #5337, #5519, #5482, #1675, #5504, #5507, #5517 |
| **IDE / 终端集成** | VS Code 崩溃、SSH 沙箱 TCP 22 出站阻断、Terminal 标题 | #1651, #1829, #5509 |
| **性能 / 长会话** | 内存驻留 1h、大文本并行 agent 卡死、慢合并报告 | #5472, #1425, #1732 |
| **MCP 协议兼容** | 图像结果需 typed content、rmcp 升级 | #5515, #5390 |
| **CI / 测试

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*