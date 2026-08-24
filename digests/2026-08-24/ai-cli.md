# AI CLI 工具社区动态日报 2026-08-24

> 生成时间: 2026-08-24 00:54 UTC | 覆盖工具: 9 个

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
**数据日期：2026-08-24**

---

## 1. 生态全景

当前 AI CLI 工具生态已进入**"稳定优先于扩张"的成熟期**。从今日数据看，多数工具（Claude Code、OpenCode、Pi、Qwen Code、Kimi）均无新版本发布，社区焦点从"新增功能"转向"打磨现有能力"——模型行为偏差、跨平台稳定性、Subagent 可靠性、记忆持久化成为共同主线。同时，各工具呈现明显**分工分层**：Anthropic/OpenAI 聚焦桌面端与 IDE 集成，Google/Moonshot 押注记忆系统与代理编排，Pi/OpenCode/CodeWhale 则在**本地模型、多 Provider 解耦、可观测性**等细分赛道抢占差异化机会。

---

## 2. 各工具活跃度对比

| 工具 | 新 Release | Issue 更新 | PR 更新 | 当日最热 Issue | 社区强度 |
|---|---|---|---|---|---|
| **Claude Code** | 0 | 50 | 1 | #77136（💬93 👍351） | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | 2（v0.149.1 稳定 + alpha.4.3） | 50+ | 10+ | #39392（💬39 👍37） | 🔥🔥🔥🔥 |
| **Gemini CLI** | 1（nightly） | 30+ | 76（Dependabot）+ 多项 | #22323（💬13 👍2，P1） | 🔥🔥🔥🔥 |
| **GitHub Copilot CLI** | 1（v1.0.81-8） | 多项 | 多项 | #2306（💬9 👍3） | 🔥🔥 |
| **Kimi Code CLI** | 0 | 3 | 2 | #1283（💬27） | 🔥 |
| **OpenCode** | 0 | 多项 | 多项（kitlangton 单人 7 个） | #1034（已关闭，💬31 👍16） | 🔥🔥🔥 |
| **Pi** | 0 | 48 | 16 | #7683（💬11，已关闭） | 🔥🔥🔥 |
| **Qwen Code** | 0 | 50 | **50** | #5975（💬11 👍1，P2） | 🔥🔥🔥🔥 |
| **DeepSeek TUI / CodeWhale** | 1（v0.9.11） | 50 | 24 | #3368（29） | 🔥🔥🔥 |

> **观察**：Qwen Code 与 Pi 体现了"PR 驱动型"开发节奏（前者 PR 数=Issue 数，后者 PR 16/Issue 48），是当前迭代最激进的两个项目；Kimi Code 活跃度明显偏低，需警惕社区冷却风险。

---

## 3. 共同关注的功能方向

### 3.1 跨会话持久化记忆
- **Claude Code** (#87834)、**Gemini CLI** (#26522/26523/26525/26516)、**Kimi Code** (#1283)
- 共性诉求：避免每次新会话从零开始，需要 AI 自动管理笔记与用户可配置指令两类能力。
- 行业事实标准正在从 Claude Code 的 "Memory" → Cursor Rules → Codex 项目级上下文方向收敛。

### 3.2 Subagent / 多代理可靠性
- **Gemini CLI** (#22323 子代理假装成功、#21409 generalist 挂起)
- **Qwen Code** (#8586 activeWork、#9793 嵌套审批挂死)
- **DeepSeek TUI** (#5535 监督运维栈、#5584 子代理审批持久化)
- 共同痛点：子代理状态不可信、审批传播失败、超时后错误地报告"成功"。

### 3.3 Windows 平台稳定性
- **Claude Code**（MSIX/GPU 进程崩溃，#81698/#85199）
- **OpenAI Codex**（沙箱/认证/浏览器全线 bug，#38290/#39850/#36674）
- **GitHub Copilot CLI**（插件安装与 VS Code 冲突，#4570）
- **Qwen Code**（中文 IME 渲染，#8625）
- Windows 已不再是"能用就行"，而是企业部署的硬性门槛。

### 3.4 Sandbox 与本地服务集成
- **Claude Code** (#28018 放行 localhost 出站，👍75)
- **OpenAI Codex**（沙箱与正常编辑冲突 #17525、#34294）
- **Gemini CLI** (#19873 OS 层沙箱架构提案)
- 共同趋势：开发者需要在沙箱内调用 Docker、DB、本地 API 进行集成测试，当前限制过严。

### 3.5 Provider 抽象与多模型兼容
- **DeepSeek TUI**（#5588 全面审计 DeepSeek-only 闸门、#5103/#5092 中性化命名）
- **Pi**（#8536 规范化 tool-result 给严格 OpenAI 兼容方）
- **Qwen Code**（#9832 DeepSeek vision 模型图片能力写死 hostname）
- 共性：随着本地模型（Ollama/llama.cpp）和多家云服务并存，"Provider 中立"成为差异化关键。

### 3.6 计费与配额可观测性
- **Kimi Code**（#2604 用户自建 JSONL 账本质疑 3-5 倍缩水）
- **OpenAI Codex**（#37445 后台静默消耗 6% 周限额、#39760 Banked 用量消失）
- 共性：重度付费用户已不满足于官方 dashboard，要求**token 级可审计**。

### 3.7 流式输出与会话压缩
- **OpenCode**（#44532 finish_reason 日志、#44536 空响应重试）
- **GitHub Copilot CLI**（#4572 后台压缩丢工具结果、#4571 50% 上下文即触发压缩）
- **Pi**（#7724 冷恢复重放溢出消息）
- 共性问题：长会话 compaction 后的数据完整性普遍欠缺。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 桌面应用 + IDE 集成、Sandbox 治理 | 企业开发者、SaaS 重度用户 | 闭源 + 桌面 MSIX/macOS 双端 |
| **OpenAI Codex** | ChatGPT 协同、多代理、Guardian 审查 | ChatGPT 订阅者、自动化工作流 | Rust 内核 + app-server 协议 |
| **Gemini CLI** | 长上下文、Subagent、Auto Memory | Gemini 3 模型用户、研究型工作 | TS + OS 层沙箱探索 |
| **GitHub Copilot CLI** | IDE 集成、ACP 协议、Grok/Codex 多模型 | GitHub 生态、企业 | VS Code 协议兼容 |
| **Kimi Code CLI** | 长上下文、付费订阅 | 国内 Moonshot 用户 | 早期阶段，插件合约刚文档化 |
| **OpenCode** | 本地优先、远程 Workspace、自托管 | 自托管/DevOps 用户 | Bun runtime + fff 原生索引 |
| **Pi** | TUI 交互、llama.cpp、多 Provider 兼容 | 终端原生主义者 | 模块化、扩展 API 完备 |
| **Qwen Code** | /review 工作流、企业 monorepo、CI 集成 | 国内企业、代码评审重度用户 | TS + 工作流引擎演进中 |
| **DeepSeek TUI / CodeWhale** | Provider 中立、可观测性、生命周期事件 | 长会话运维、SIEM 集成 | 重构中：拆 runtime/tool/config |

**关键差异点**：
- **生态绑定**：Claude Code / Codex / Copilot 强绑定自家模型与 SaaS；OpenCode / Pi / CodeWhale 强调中立与本地。
- **用户群体**：Kimi / Qwen Code 主打国内中文场景；Pi / OpenCode 主打终端/CLI 原生开发者。
- **架构成熟度**：Codex 推动 Content Annotations 全链路重构（最大手笔），CodeWhale 拆分 87% 集中代码（同体量）；Pi 通过高频 PR 闭环边角问题。

---

## 5. 社区热度与成熟度

### 高热度 + 高成熟度
- **Claude Code**：点赞 351 的头部 Issue 显示"模型行为类"问题成为公众议题，但单日仅 1 PR 表明进入**质量冲刺期**。
- **OpenAI Codex**：稳定 + Alpha 双轨并行，10+ 项 PR 集中在基础设施重构，是当前**架构演进最激进**的项目。
- **Qwen Code**：50 PR / 50 Issue 的对称结构说明工程团队编制最完整，**开发节奏最稳定**。

### 高热度 + 快速迭代
- **Pi**：48 Issue / 16 PR 的"Issue 驱动开发"模式，TUI 鼠标交互、Windows 兼容等能力密集交付。
- **DeepSeek TUI**：50 Issue / 24 PR，配合品牌升级（DeepSeek-TUI → CodeWhale）与 v0.9.12 集成分支，处于**架构重塑期**。

### 中等热度 + 生态扩展
- **Gemini CLI**：依赖升级 PR 占主导（76 项 Dependabot），Subagent 与 Memory 是工程痛点。
- **GitHub Copilot CLI**：v1.0.81 集中爆发的回归问题（memory、压缩、ACP）反映**预发布质量门**需要加强。
- **OpenCode**：单人（kitlangton）主导 Workspace 架构重构，社区反馈以 Big Pickle/Zen 限流为主。

### 低活跃度警示
- **Kimi Code CLI**：单日仅 3 Issue / 2 PR，**付费用户已通过自带账本质疑计量**，是社区信任度最先承压的项目。

---

## 6. 值得关注的趋势信号

### 📈 趋势 1：从"功能堆叠"到"模型行为治理"
Claude Code #77136（350+ 👍）反映即便提供明确风格指令，4.7/4.8/5.0/Fable 仍依赖 "It's important to note..." 等套话。这是**模型治理**首次成为用户级议题，预示未来 AI CLI 工具需要在"风格一致性"上提供更精细的可配置性。

### 📈 趋势 2：可观测性成为付费用户底线
Kimi Code #2604、OpenAI Codex #37445/#39760 共同指向：**开发者已从"接受配额"转向"质疑计量"**。Token 级别日志导出、按项目/按日看板、计费回放将很快成为企业级功能的入场券。

### 📈 趋势 3：架构向"可测试工作流"迁移
Qwen Code #8769、#9740（PR）将 `/review` 从"模型驱动执行"迁移到 `QWEN_CODE_ENABLE_WORKFLOWS` 工作流引擎；DeepSeek TUI 把 87% 代码拆模块。**声明式 workflow 引擎**正在替代隐式的 prompt chain，是 agent 可靠性的关键基础。

### 📈 趋势 4：Subagent 状态可信度成为新瓶颈
三个项目（Gemini CLI / Qwen Code / CodeWhale）同时遇到子代理"假装成功"问题，CodeWhale 通过 lifecycle outbox + 控制套接字 + 子代理审批持久化组合拳回应。这预示 **agent orchestration 层将出现"状态机保真度"专项工程**，类似数据库的 ACID 要求。

### 📈 趋势 5：本地模型与 Provider 中立性是开源/自托管路线的主战场
Pi 在 llama.cpp 集成上的密集交付（#8167/#8535/#8539）、OpenCode 对 Ollama 的兼容性迭代、DeepSeek TUI 的 Provider 中立化重构，三者合力表明：**不绑定单一云厂商**已成为开源 AI CLI 的护城河。

###  趋势 6：桌面端质量进入"军备竞赛"
Windows MSIX/GPU 进程崩溃、macOS Tahoe TCC 弹窗、Windows 中文 IME 渲染——5 个项目同时暴露桌面端问题。**桌面 AI 工具已不再是 CLI 的附属**，而是产品主战场。

---

##  对开发者与决策者的参考建议

1. **评估工具时关注"Subagent 状态契约"**——能否在超时时正确返回失败、能否在压缩后保持工具结果完整性，是判断 agent 编排成熟度的硬指标。
2. **企业部署优先选择有 Content Annotations / 工作流引擎的项目**——这意味着系统行为可审计、可回放，而非黑盒 prompt。
3. **避免锁定单一 Provider**——选择具备 OpenAI 兼容协议、llama.cpp/Ollama 集成、Provider 中立架构的工具，可降低未来模型切换成本。
4. **关注"模型行为治理"能力**——风格指令是否可强制生效、是否能限制模型使用 sed/heredoc 等退化路径（如 Claude Code Auto 模式 #87575/#88041）。
5. **桌面端部署需额外测试**——跨平台稳定性仍是当前最薄弱环节，建议对关键项目建立回归测试矩阵。

---

*报告基于 2026-08-24 各仓库公开 Issue/PR 数据综合整理，仅作技术参考。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-24 ｜ 数据源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行（按社区关注度）

| # | PR | Skill 名称 | 状态 | 核心价值 |
|---|---|---|---|---|
| 1 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** — 零成本多 Agent 编排 | OPEN | 调度 headless opencode worker 处理机械任务，让 Claude Code 专注规划/审核/合并，破解"昂贵模型上下文才是稀缺资源"的瓶颈 |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** — 自审计质量门禁 v1.3.0 | OPEN | 先机械验证文件存在性，再按损伤严重度做四维推理审计，通用型交付前质量门 |
| 3 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | OPEN | 双元 skill：对 Skills 做五维质量评分 + 安全分析，回应社区对 Skill 质量的元需求 |
| 4 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | OPEN | SCNet HPC 集群 + Slurm 工作流，覆盖 SSH、作业生成、加速器调度 |
| 5 | [#568](https://github.com/anthropics/skills/pull/568) | **servicenow** — ServiceNow 全平台助手 | OPEN | 覆盖 ITSM/ITOM/SecOps/FSM/SPM/CSDM/IntegrationHub，企业级宽度 |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** — 排版质量控制 | OPEN | 解决 AI 生成文档的孤行/寡行/编号错位等问题，覆盖每次生成的痛点 |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** — OpenDocument 创建/解析 | OPEN | 补齐 ISO 标准开放格式（.odt/.ods）的开箱即用支持 |
| 8 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测体系修复** | OPEN | `run_eval.py` 长期 0% recall 问题汇总修复（10+ 复现），修复描述优化回路 |

> **讨论热点**：#1298/#556/#1099/#1050 形成"skill-creator 修复簇"，反映社区对**Skill 评测基础设施可靠性**的强烈关注；新功能 Skill 中，**多 Agent 编排 + 自审计** 是当前最具想象力的方向。

---

## 二、社区需求趋势（来自高评论 Issues）

| 主题 | 代表 Issue | 评论数 | 核心诉求 |
|---|---|---|---|
| **Skill 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 社区 Skill 滥用 `anthropic/` 命名空间冒充官方，存在提权风险（最热） |
| **企业级 Skill 分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | Claude.ai 内置组织内 Skill 共享库，避免手动下载/上传 |
| **Skill 触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | `run_eval.py` 中 `claude -p` 触发率为 0%，整套评估体系失效 |
| **上下文窗口爆炸** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` 单次工具调用注入 ~156k token，直接打爆 context |
| **紧凑状态表达** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | `compact-memory` 提案：用符号化记法压缩长时 Agent 自身的记忆占用 |
| **Agent 治理 / 安全模式** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | 策略执行、威胁检测、信任评分、审计轨迹（已 CLOSED） |
| **Skill 即 MCP 协议** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 把 Skill 暴露为 MCP API，统一 AI 软件的协议形态 |
| **推理质量门禁管线** | [#1385](https://github.com/anthropics/skills/issues/1385) | 4 | Pre-task Calibration → Adversarial Review → Delivery Verification 三阶段 |
| **去重 / 打包一致性** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` 与 `example-skills` 内容重复，污染上下文 |
| **云平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | Skills 在 AWS Bedrock 上的可用性（长期悬而未决） |

**趋势归纳**：
- 🛡️ **安全/信任** 是绝对主线（命名空间冒充 + Agent 治理 + 权限控制）
- 🔁 **多 Agent / 编排 / 协议化** 是能力演进方向（Hivemind + Skills→MCP）
- 🧠 **上下文经济性** 成为痛点（compact-memory、context 爆炸、Skill 去重）
- 🏢 **企业集成** 持续扩张（ServiceNow、SAP、HPC、SharePoint）

---

## 三、高潜力待合并 Skills

按"新近活跃 + 填补重要生态位"筛选：

| PR | Skill | 亮点 | 最近更新 |
|---|---|---|---|
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | 多 Agent 编排范式升级 | 2026-08-23 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | HPC/Slurm 领域稀缺 | 2026-08-23 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | eval/编码修复合集 | 跨 Skill 稳定性补丁 | 2026-08-23 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 通用交付前审计 | 2026-07-02 |
| [#568](https://github.com/anthropics/skills/pull/568) | servicenow | 企业平台广覆盖 | 2026-08-12 |
| [#525](https://github.com/anthropics/skills/pull/525) | pyxel | 复古游戏 + MCP 范式 | 2026-07-15 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 高频痛点（每次生成都触发） | 2026-03-13 |
| [#486](https://github.com/anthropics/skills/pull/486) | odt | 开放格式补齐 | 2026-04-14 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 元 Skill，长期卡审 | 2026-01-07 |

> **观察**：所有 Top PR 均仍为 OPEN，反映仓库合入节奏慢、审稿较保守——这对生态扩张是潜在阻力。

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"让 Skills 生态可信、可治理、可度量"——从命名空间安全、评测回路可靠、上下文经济，到元层审计与多 Agent 编排，本质都在回答同一个问题：Skill 如何从"零散 prompt 集合"进化为可被企业级信任的生产力协议。**

---

*📎 数据说明：PR 的评论数字段在原始数据中未提供，本排行综合"主题热度、近期活跃度、生态位重要性、关联 Issue 评论数"加权生成；Issues 评论数完整可用。*

---

# Claude Code 社区动态日报
**2026-08-24**

---

## 📌 今日速览

今日仓库整体活跃度平稳，无新版本发布。社区关注焦点集中在 **Claude Desktop 桌面应用的稳定性**（Windows MSIX 安装崩溃、GPU 进程退出）和 **Auto 模式的副作用问题**（错误的系统提示导致工具选择异常）。在功能需求侧，**跨会话持久化记忆** 和 **MCP 工具数量上限** 的讨论热度持续走高。

---

## 🚀 版本发布

过去 24 小时内无新 Release 发布。

---

## 🔥 社区热点 Issues

| # | Issue | 主题 | 评论 | 👍 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#77136](https://github.com/anthropics/claude-code/issues/77136) | Claude 4.7/4.8/5.0/Fable 输出重复修辞、口头禅，风格指令失效 | 93 | 351 | 🔥🔥🔥 |
| 2 | [#81698](https://github.com/anthropics/claude-code/issues/81698) | Windows 桌面应用 GPU 进程崩溃（exit 101457950）致整个会话终止 | 54 | 5 | 🔥🔥 |
| 3 | [#85199](https://github.com/anthropics/claude-code/issues/85199) | Claude Desktop (Windows) 反复崩溃，需"高级选项→修复"恢复 | 34 | 4 | 🔥🔥 |
| 4 | [#7134](https://github.com/anthropics/claude-code/issues/7134) | Claude Code 不识别 Windows-1252 编码，破坏文件内容 | 27 | 23 | 🔥 |
| 5 | [#28018](https://github.com/anthropics/claude-code/issues/28018) | 【功能】Sandbox 允许对 localhost 的出站连接 | 8 | 75 | 🔥🔥 |
| 6 | [#87575](https://github.com/anthropics/claude-code/issues/87575) | Auto 模式系统提示导致 `/rewind` 对 Bash 编辑文件静默失败 | 11 | 18 | 🔥 |
| 7 | [#88041](https://github.com/anthropics/claude-code/issues/88041) | Auto 模式的 `bashFirst` 提示让模型用 sed/heredoc 而非 Edit/Write | 9 | 9 | 🔥 |
| 8 | [#74558](https://github.com/anthropics/claude-code/issues/74558) | Fable 5：中途助手文本块被当作 thinking 摘要，turn 看似静默 | 9 | 8 | 🔥 |
| 9 | [#77704](https://github.com/anthropics/claude-code/issues/77704) | 自定义远程 MCP 连接器间歇性丢失全部工具，聚合上限锁死在 256 | 4 | 0 | 🔥 |
| 10 | [#87966](https://github.com/anthropics/claude-code/issues/87966) | Prompt Cache 中途失效，9 天内触发 89 次全量重写，浪费约 5900 万 token | 7 | 0 | 🔥 |

### 重点解读

- **#77136 是当之无愧的头条**：350+ 点赞 + 93 条评论，是 Claude Code 仓库近期最具影响力的"模型行为"类 bug，反映出 4.7/4.8/5.0/Fable 多个版本存在过度依赖特定修辞模式的问题，即使有明确风格指令也难以纠正。
- **#81698 / #85199**：Windows 桌面端连续出现崩溃问题，且触发条件多样（GPU 进程、MSIX 安装包），严重影响日常可用性。
- **#28018**：高赞功能请求（👍75），反映开发者在沙箱内进行本地集成测试（Docker、DB、本地服务）的强烈需求，提议沙箱放行 localhost 出站。
- **#77704**：MCP 工具数量硬上限 256 是 7 月以来的回归，影响使用多个 MCP 服务的重度用户。
- **#87966**：缓存命中率异常导致 **成本飙升**，是少有的同时影响"功能+成本"的严重问题。

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时内仓库仅更新了 **1 个 PR**，活跃度较低。以下列出该 PR 及近期待关注的相关合并方向。

| # | PR | 内容 |
|---|---|---|
| 1 | [#83374](https://github.com/anthropics/claude-code/pull/83374) | **docs(plugin-dev)**: 在 Hook Development 技能中补全 `MessageDisplay` 事件的流式语义文档，纳入触发描述、事件指引与速查表 |

由于 PR 数量有限，下面是近期与上述热点 Issue 高度相关的合入/审查方向，供参考：

- **Auto 模式系统提示优化**（关联 #87575 / #88041）：社区已多次要求将硬编码的"bashFirst"指令调整为引导模型优先使用 Edit/Write 工具。
- **Windows MSIX 安装修复**（关联 #88323 / #69884）：涉及 Code Integrity 校验、`vk_swiftshader.dll` 拦截、Bun 二进制混淆安装等链路。
- **MCP 工具聚合上限解除**（关联 #77704）：回归发生在 ~mid-July，需要回滚或调整聚合策略。

---

## 📈 功能需求趋势

从过去 24 小时更新的 Issue 中，可提炼出以下 5 大社区关注方向：

1. **跨会话记忆与持久化身份** (#87834)
   开发者希望 Claude 拥有跨会话、跨项目的共享记忆，避免每次新会话都从零开始。已被标记为 enhancement。

2. **Sandbox 网络策略放宽** (#28018)
   当前沙箱屏蔽 localhost/127.0.0.1，即使是 `allowedDomains` 白名单也无法覆盖，制约本地服务集成测试。

3. **MCP 工具规模与稳定性** (#77704)
   - 256 工具聚合上限
   - 自定义远程 MCP 连接器间歇性丢工具
   - 期望支持更灵活的 connector 治理

4. **桌面端跨平台稳定性** (#81698, #85199, #88323, #79674)
   Windows MSIX、macOS Tahoe TCC 弹窗、GPU 进程崩溃等横跨多个 Issue，桌面端进入"质量冲刺"窗口。

5. **多语言/区域模型质量** (#88439)
   日语出现明显的语序/词汇断裂，问题模式与 #77136 的"风格偏离"有相通之处，暗示 base 模型在非英语场景的稳定性挑战。

---

## 💡 开发者关注点与高频痛点

### 🔧 稳定性类
- **桌面应用崩溃频发**：Windows MSIX 安装链路脆弱（Code Integrity、签名校验、Bun 二进制误装），macOS Tahoe TCC 权限弹窗重复。
- **Auto 模式"工具选择退化"**：硬编码系统提示诱导模型使用 sed/heredoc/Python 脚本，绕开 Edit/Write，导致 `/rewind` 失效、文件状态不可逆。

### 🧠 模型行为类
- **重复修辞与口头禅泛滥**：即使提供明确的负面示例，模型仍倾向使用 "It's important to note…"、"Let's dive in…" 等套话（#77136）。
- **流式输出"丢失"**：Fable 5 出现中途文本块被错误归类为 `thinking`，对话看似停顿。

### 💸 性能与成本类
- **缓存命中率异常** (#87966)：9 天内 89 次上下文重写，导致 ~59M excess cache_creation tokens。
- **WSL2 复制功能失效** (#89097)：#54695 之前的修复仅覆盖了 `platform=linux`，遗漏了 `platform=wsl`，导致 `/stats` Ctrl+S 截图始终拷贝失败。

### 📦 平台与协议兼容
- **文件编码识别缺失** (#7134)：未尊重源文件的 Windows-1252 编码，破坏二进制/拉丁字符文件。
- **Worktree 路径污染** (#88747)：worktree 创建时写入 `core.hooksPath` 的绝对路径，导致子 worktree 误用主 checkout 的 hooks。
- **跨平台 SendMessage 静默失败** (#87501)：macOS → Windows 跨会话消息"success: true"但实际未投递。

### 🧩 规则与内存系统
- **`.claude/rules/` 路径作用域失效** (#88945, #87217)：路径 glob 规则无法匹配项目根目录之外的文件，且 `paths:` frontmatter 在用户级规则上静默失效，使 auto-memory 目录形同虚设。

---

## 📊 数据小结

| 指标 | 数值 |
|---|---|
| 新 Release | 0 |
| 新增/更新 Issues | 50（展示 30） |
| 新增/更新 PRs | 1 |
| 评论最多 Issue | #77136（93 条） |
| 点赞最多 Issue | #77136（351 👍） |
| 跨多平台受影响 | Windows、macOS、Linux、WSL2 |

---

> 报告基于 2026-08-24 公开 Issue/PR 数据整理。如需深入分析某条 Issue 的技术细节或关注某条 PR 的评审进度，欢迎指定。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-24**

---

## 1. 今日速览

今日 Codex 社区发布了 **rust-v0.149.1** 稳定版及 **0.149.0-alpha.4.3** 测试版，重点修复了多项问题。Issue 端，Windows 平台沙箱/认证/浏览器相关 bug 持续发酵，同时 GPT-5.6 Sol 上下文窗口被"按客户端差异化分配"的问题引发社区广泛讨论。PR 方面，团队集中推进"内容注解（Content Annotations）"基础设施重构，覆盖上下文分片、压缩、模型切换回滚、子代理分叉等多个链路。

---

## 2. 版本发布

### 🟢 rust-v0.149.1（稳定版）
- 完整变更日志：<https://github.com/openai/codex/compare/rust-v0.149.0...rust-v0.149.1>

### 🟡 rust-v0.149.0-alpha.4.3（预发布版）
- 详情：<https://github.com/openai/codex/releases/tag/rust-v0.149.0-alpha.4.3>

> 备注：0.149.0 系列移除了 `approval_policy = "untrusted"`，导致存量配置直接拒绝启动，详见 Issue #39973。建议升级前检查 `~/.codex/config.toml`。

---

## 3. 社区热点 Issues

| # | Issue | 关注度 | 核心问题 | 为什么重要 |
|---|---|---|---|---|
| 1 | **#39392** Codex App 使用 gpt-5.6-sol 因 `unsupported prompt_cache_retention` 中止 | 💬39 👍37 | 桌面端 app-server 0.148.0-alpha.15 与 gpt-5.6-sol 不兼容 | 模型版本对齐问题，点赞数最高，影响所有使用 Sol 的桌面端用户 |
| 2 | **#38350** 周期性定时任务在成功后会自动禁用 | 💬35 👍0 | Web 端 Codex 定时任务无授权被自动暂停 | 影响自动化工作流可信度，多个用户复现 |
| 3 | **#25928** VS Code/Cursor 扩展：提交的 prompt 在进入队列前随机消失 | 💬28 👍18 | Windows + Cursor 下队列丢失 prompt | IDE 集成的稳定性长期痛点 |
| 4 | **#17525** Ubuntu 上每次普通编辑都需跳过沙箱 | 💬25 👍0 | Linux 沙箱与正常编辑流程冲突 | 已 CLOSED，但讨论揭示沙箱策略边界问题 |
| 5 | **#37445** 打开 ChatGPT 桌面端静默消耗 Codex 周限额（每次 6%） | 💬13 👍10 | 后台活动触发固定 6% 限额扣减 | 计费透明性问题，社区反应强烈 |
| 6 | **#39850** Windows 桌面端 401 错误导致 token 失效且不刷新 | 💬11 👍0 | Remote Control 仍可用但本地 token 失效 | 认证状态机一致性 bug |
| 7 | **#34619** 恢复 GPT-5.6 Sol 的 372K 上下文窗口或提供 opt-in 开关 | 💬6 👍23 | 模型目录返回 272K vs 872K 的差异 | 点赞最高，揭示后端按客户端差异化分配 |
| 8 | **#39973** 静默移除 `approval_policy = "untrusted"` 削弱了执行审批边界 | 💬4 👍9 | 没有 deprecation 警告直接报错 | 安全策略破坏性变更的治理讨论 |
| 9 | **#22316** Codex App 支持选择已有 worktree | 💬4 👍14 | 当前只能创建新 worktree | 高赞增强请求，开发者工作流关键能力 |
| 10 | **#40163** Windows ChatGPT/Codex 进程占用 50+ GB 并崩溃 | 💬4 👍0 | 内存泄漏导致 OOM | 严重性能/稳定性问题 |

📌 **延伸关注**：#40258（GPT-5.6 Sol originator 网关差异）、#39760（Banked 用量重置莫名消失）、#38290（Windows sandbox helper 创建失败）。

---

## 4. 重要 PR 进展

| # | PR | 功能/修复要点 |
|---|---|---|
| 1 | **#40302** 加固 bubblewrap 合成挂载注册表隔离 | 防止可写 bind 暴露 sandbox 注册表，关闭 symlink 重定向漏洞 |
| 2 | **#40297** 在子代理 fork 中保留开发者指令注解 | 为子代理上下文分片增加 `generic.developer_instructions` 内容种类 |
| 3 | **#40296** 为 Responses Lite 基础指令打注解 | 通过专用上下文分片注入 `model.base_instructions`，保持元数据一致 |
| 4 | **#40295** 将权限指令归类至 `permissions` 命名空间 | 将 `generic.permissions_instructions` 重命名为 `permissions.instructions` |
| 5 | **#40294** 按来源分类内部模型上下文 | `InternalModelContextFragment` 内容种类改为 `<source>.internal_context` |
| 6 | **#40292** 为打包 Codex 增加冒烟测试 | 跨平台 pytest 套件验证 CLI/app-server 包完整性和 `rg` 协同 |
| 7 | **#40280** 在远端压缩时对保留图片做预算控制 | 新增 `compaction_image_budget` feature，防止图片占用压垮上下文预算 |
| 8 | **#40275** 为额外生成的上下文分片打注解 | 压缩摘要、Guardian 审批动作、子代理通知均改为带类型的上下文分片 |
| 9 | **#40221** 区分 Guardian 审查线程与子代理 | 新增 `guardian_review` 线程源，便于持久化元数据和分析 |
| 10 | **#40257** 支持 `cua_repl` 作为 Node REPL 后端的 MCP 服务器 | 与 `node_repl` 并列处理 Guardian 审查证据与计算设备使用策略 |

> 🔍 **PR 主题观察**：今日合并的 PR 高度集中在**内容注解（Content Annotations）基础设施重构**，这是一项横跨模型上下文分片、压缩、fork、回滚的全链路工作，是当前代码库的最大架构演进方向。

---

## 5. 功能需求趋势

从今日活跃 Issues 提炼，社区最关注的方向按热度排序：

1. **🪟 Windows 平台稳定性** — 沙箱（#38290、#34294、#17525）、认证（#39850、#40242、#39218、#40226）、浏览器（#36674、#40118、#39543）三大子系统均有活跃 bug，呈现系统性挑战。

2. **🤖 GPT-5.6 Sol 模型体验** — 上下文窗口差异化（#34619、#40258）、prompt cache 兼容（#39392）、误报违规（#39742），模型相关问题占据头条。

3. **💸 计费与限额透明度** — 静默消耗（#37445）、Banked 用量消失（#39760），用户对后台行为不可见感到焦虑。

4. **🛠️ 开发者工作流增强** — Worktree 复用（#22316）、CLI 持久监控（#32993）、TUI 时间戳（#27203）。

5. **🔐 安全策略治理** — `approval_policy` 弃用引发争议（#39973），开发者希望保留执行审批边界。

6. **🔄 ChatGPT↔Codex 跨端协同** — #32519 提出共享项目上下文与双向任务交接。

7. **🧠 Multi-Agent 能力深化** — #40037 提出动态多代理图语义升级；#40299 报告子代理管理不稳。

---

## 6. 开发者关注点

**高频痛点**：
- **沙箱在 Windows 与 Linux 行为不一致**：从普通编辑（#17525）到 `apply_patch`（#34294）再到 helper 创建（#38290），开发者频繁需要绕过沙箱或修复配置。
- **认证状态机不稳定**：登录态被踢出（#39218、#40242、#39850）成为多用户复现问题，影响开发连续性。
- **后台资源消耗不透明**：限额静默扣减（#37445）、内存泄漏（#40163）让用户对应用信任度下降。
- **API 行为差异**：同账户不同客户端/不同 originator 拿到不同模型目录（#40258、#34619），破坏调试可重现性。

**关键诉求**：
1. **配置变更需提供 deprecation 路径**（参考 #39973），破坏性更新应至少保留一个 release 的告警期。
2. **跨端上下文无缝衔接**（#32519），ChatGPT 移动端讨论、Codex 桌面端执行的工作流需要打通。
3. **多代理可靠性**（#40299），主代理等待子代理完成的协议需要更稳健。
4. **基础设施可观测性**（#27203），CLI 输出加入本地时间戳，便于长任务调试。

---

*本日报基于 2026-08-24 过去 24 小时的 GitHub 数据自动整理。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-24**

---

## 📌 今日速览

Gemini CLI 今日发布了一个 nightly 构建版本（v0.56.0-nightly.20260823），社区焦点高度集中在 **Subagent 可靠性** 与 **Auto Memory 系统** 两类问题上。其中 Subagent 在达到 MAX_TURNS 上限后错误地报告为 GOAL 成功（#22323）是讨论热度最高的 P1 级缺陷；同日还出现了多个 Auto Memory 的连环 bug（#26522/26523/26525/26516）。PR 方面，dependabot 集中发起了 76 项 npm 依赖批量更新，另有若干关键修复（OAuth 回调超时、会话保留误删）已合并。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| [v0.56.0-nightly.20260823.g5411f113c](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260822.g5411f113c...v0.56.0-nightly.20260823.g5411f113c) | Nightly 构建版，与上一 nightly 相比主要变化未在 changelog 中展开说明 |

> 当前仅发布 nightly 快照，正式 stable 版本尚待跟进。

---

## 🔥 社区热点 Issues

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent 达到 MAX_TURNS 后仍报告 GOAL 成功（P1, bug）**  
   13 条评论、2 个 👍。`codebase_investigator` 子代理在到达最大轮次后仍报告 `status: "success"`，掩盖了中断事实。这会破坏调用方对子任务是否真正完成的判断。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent 频繁挂起（P1, bug）**  
   8 条评论、8 个 👍。一旦 defer 到 generalist agent，CLI 即陷入长时间无响应（最长观察 1 小时）。显式禁止使用子代理可绕过。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - Zero-Dependency OS 沙箱 & 执行后意图路由（P2, enhancement, large）**  
   8 条评论。利用 Gemini 3 模型对 POSIX 工具链的天然亲和力，以 OS 层沙箱替代部分应用层隔离，是面向下一代模型的架构性提案。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - AST 感知的文件读取/搜索/映射 EPIC（P2）**  
   7 条评论。评估 AST 感知工具（精确方法边界读取、降低 tokens 噪声）对 agent 工作流的影响，可能成为后续 codebase_investigator 的改造方向。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini 极少主动使用自定义 skill/sub-agent（P2, bug）**  
   6 条评论。用户反馈除非显式要求，模型基本不会调用自定义的 gradle/git skill 或子代理，反映出 skill 路由/描述权重策略不足。

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) - Auto Memory 无限重试低信号会话（P2, bug）**  
   5 条评论。提取 agent 拒绝读取的会话会一直被保留并重复出现在候选列表中。

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) - Shell 命令完成后仍卡在 "Waiting input"（P1, bug）**  
   4 条评论、3 个 👍。影响面广，常见 CLI 调用后即触发，造成工作流中断。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser subagent 在 Wayland 下失败（P1, bug）**  
   4 条评论。Linux Wayland 用户被排除在外，与 #22267（忽略 settings.json）叠加，Browser Agent 当前体验较差。

9. **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) - 任务追踪切换为原生文件工具（P3, feature）**  
   4 条评论。与 #18836 思路一致，希望把 WriteToDo 替换为持久化、CRUD 化的文件实现，缓解 context rot。

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - symlink 形式的 agent 文件无法被识别（P2, bug）**  
    4 条评论。`~/.gemini/agents/filename.md` 为软链接时不会作为子代理加载，对 dotfiles 用户不友好。

---

## 🛠 重要 PR 进展

1. **[#28985](https://github.com/google-gemini/gemini-cli/pull/28985) - google-auth-library 10.9.0 → 11.0.2（P0, OPEN）**  
   主要依赖大版本升级，涉及认证链路，标记 P0 等待评审。

2. **[#28986](https://github.com/google-gemini/gemini-cli/pull/28986) - puppeteer-core 24.0.0 → 25.7.0（OPEN）**  
   Browser Agent 底层依赖升级，关注其对浏览器自动化的兼容性影响。

3. **[#28984](https://github.com/google-gemini/gemini-cli/pull/28984) - npm-dependencies 批量更新 76 项（XL, OPEN）**  
   涵盖 simple-git、MCP SDK 等；需重点 review breaking changes。

4. **[#28983](https://github.com/google-gemini/gemini-cli/pull/28983) - 修正 CRLF 单匹配误判（P2, OPEN）**  
   `detectLineEnding()` 之前仅凭一处 `\r\n` 就将文件归类为 CRLF，本 PR 改为检测混合行尾。

5. **[#28982](https://github.com/google-gemini/gemini-cli/pull/28982) - Build Remote Agent 手机协同（gbr/1）示例扩展（OPEN）**  
   通过 QR + 8 位配对码实现桌面 Gemini CLI 与手机的观察协同，丰富扩展生态。

6. **[#28981](https://github.com/google-gemini/gemini-cli/pull/28981) - 修复 shortId 冲突导致误删他用户会话（CLOSED ✅）**  
   关键的数据丢失修复：会话保留清理按 8 位短 ID 归类时会把无关 session 一并删除，本 PR 已合并。

7. **[#28980](https://github.com/google-gemini/gemini-cli/pull/28980) - 关闭 OAuth 回调服务时清理超时定时器（CLOSED ✅）**  
   修复遗留的五分钟定时器在回调成功后未被 clear 的问题，避免后续误触发。

8. **[#28975](https://github.com/google-gemini/gemini-cli/pull/28975) - symlinked 工作区根下 glob 返回结果为空（P2, OPEN）**  
   macOS 用户将项目放在 `/tmp`（→ `/private/tmp` 软链）时 glob 报 "No files found"，影响范围较广。

9. **[#2677](https://github.com/google-gemini/gemini-cli/pull/2677) - 防止 symlink 路径遍历攻击（P0, CLOSED ✅）**  
   高危安全修复：所有路径在合法性校验前先 resolve 到真实路径。

10. **[#28450](https://github.com/google-gemini/gemini-cli/pull/28450) - actions 依赖组批量更新（OPEN）**  
    涉及 lychee-action、compressed-size-action、run-gemini-cli。

---

## 📈 功能需求趋势

从过去 24 小时的活跃 Issue 中可以归纳出几个社区最关注的方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Subagent 调度与可靠性** | #22323、#21409、#21968、#21763 | ⭐⭐⭐⭐⭐ |
| **Auto Memory / 持久化记忆系统** | #26522、#26523、#26525、#26516 | ⭐⭐⭐⭐ |
| **Browser Agent 健壮性** | #21983、#22232、#22267 | ⭐⭐⭐⭐ |
| **代码库感知工具（AST-aware）** | #22745、#22746、#19561 | ⭐⭐⭐ |
| **任务追踪持久化** | #21000、#18836 | ⭐⭐⭐ |
| **OS 层沙箱 & 安全模型** | #19873、#2677 | ⭐⭐⭐ |
| **终端渲染性能** | #21924 | ⭐⭐ |

整体趋势显示：社区正从「能不能用」过渡到「能不能稳定用」，**Subagent 治理** 与 **Memory 系统质量** 是当下两大工程痛点。

---

## 💬 开发者关注点

通过汇总活跃 Issue 和 PR 的反馈，开发者当前的痛点和诉求主要集中于：

1. **Subagent 状态可信度差** —— 多个 Issue 反馈子代理会"假装成功"（MAX_TURNS 后返回 GOAL）或长时间挂起，让上层编排变得不可靠。#22323 是这一类问题的典型。

2. **Skill / Subagent 自发现能力不足** —— 用户自定义的 gradle、git 等 skill 几乎不会被模型主动调用，#21968 的讨论反映出默认路由权重需要调整。

3. **Auto Memory 形成问题集群** —— 同一作者在 5 月 5 日集中创建了 #26516/#26522/#26523/#26525 共 4 个 Issue，涵盖低信号会话重试、密钥脱敏、补丁校验失败、聚合逻辑等一系列质量问题，说明该子系统上线后尚未稳态。

4. **Shell 与 Browser Agent 的边界场景** —— #25166（命令后卡 "Waiting input"）与 #21983（Wayland 失败）显示在多终端、多平台兼容性上仍有盲点。

5. **symlink 兼容性问题频发** —— 同时出现 #20079（agents 软链不可识别）、#28975（glob 软链工作区失败）、#2677（软链路径遍历攻击），社区对符号链接的处理存在多处遗漏。

6. **依赖治理压力上升** —— dependabot 在过去 24 小时发起了 10+ 个依赖 PR，包括 google-auth-library、puppeteer-core、@google/genai 等关键包的大版本升级（#28985、#28986、#28988、#28984），维护者需要平衡稳定性与安全更新。

---

*日报基于 2026-08-24 当日 GitHub 公开数据生成。如需追溯历史动态，可访问 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-24**

---

## 今日速览
Copilot CLI 今日发布 **v1.0.81-8** 预发布版，重点引入了对 **Grok 4.6 的 xhigh 推理档位**支持，并改进了本地插件市场的实时加载机制。社区方面，1.0.81 预发布版集中暴露了 memory 写入失败、后端压缩丢工具结果、`auto` 模式 reasoning effort 被强制清零等回归问题；Windows 平台插件与 VS Code 进程冲突、企业认证抖动、ACP 协议合规等长期议题也持续被关注。

---

## 版本发布
**v1.0.81-8**（预发布）

**新增**
- 为 **Grok 4.6** 添加 `xhigh` 推理档位（reasoning effort）支持

**改进**
- 本地目录源 marketplace 中的**路径型插件**现在从其真实目录实时加载——编辑后在 `/restart` 或新会话即可生效，无需再执行 `/plugin update`
- Skills 与自定义 agent 的可发现性优化（发布说明因截断不完整）

> 完整 Release 说明见仓库 Releases 页。

---

## 社区热点 Issues（按关注度排序）

1. **#2306 [OPEN]** — 间歇性"未授权使用 Copilot 功能"错误
   - 标签：`area:authentication`、`area:enterprise`
   - 现象：每周出现 2-3 次后自愈；`/context` 返回策略相关错误。**9 条评论、3 个 👍**，是当前关注度最高的长期痛点。
   - 链接：github/copilot-cli Issue #2306

2. **#4535 [OPEN]** — `store_memory` 在 v1.0.81 预发布版失败
   - 标签：`area:context-memory`
   - 现象：原生 memory writer 缺少 `Instance id` 参数，所有 memory 写入失败。已影响 GPT-5.6 Sol agent 工作流。**5 条评论**。
   - 链接：github/copilot-cli Issue #4535

3. **#4572 [OPEN]** — 后台压缩丢失并行工具结果导致 HTTP 400
   - 标签：`triage`
   - 现象：1.0.80 长上下文 `gpt-5.6-sol` 自动驾驶会话在自动压缩后立即中断（`CAPIError: 400 No tool output found for function call`）。属数据完整性级别问题。
   - 链接：github/copilot-cli Issue #4572

4. **#4570 [OPEN]** — Windows 上插件 install/update 与 VS Code 冲突
   - 标签：`triage`
   - 现象：VS Code 运行时执行 `copilot plugin install/update` 全部失败（`os error 5 Access is denied`），关闭 VS Code 后恢复。**影响所有插件**。
   - 链接：github/copilot-cli Issue #4570

5. **#4566 [OPEN]** — Agent 反复确认工作但未真正执行工具
   - 标签：`area:agents`、`area:tools`
   - 现象：使用 `gpt-5.3-codex` + v1.0.80 时出现"只应答、不调用工具"的空转。**1 👍**。
   - 链接：github/copilot-cli Issue #4566

6. **#4560 [OPEN]** — `auto` 模型模式下 reasoning effort 始终为 null
   - 标签：`area:models`、`area:configuration`
   - 现象：选择 `auto` 后会话 `reasoningEffort` 被强制置空，且外部配置被拒绝。直接与本次新增的 xhigh 档位体验形成落差。
   - 链接：github/copilot-cli Issue #4560

7. **#4571 [OPEN]** — GPT-5.6 Luna Max 在 50% 上下文即触发压缩
   - 标签：`triage`
   - 现象：阈值异常激进，小任务也触发 compaction，迫使会话截断。
   - 链接：github/copilot-cli Issue #4571

8. **#4561 [OPEN]** — ACP 模式下 `session/cancel` 返回错误 `end_turn`
   - 标签：`area:sessions`、`area:non-interactive`
   - 现象：`copilot --acp --stdio` 下取消的 turn 返回 `end_turn` 而非 ACP 规范要求的 `cancelled`，影响第三方编辑器协议合规。
   - 链接：github/copilot-cli Issue #4561

9. **#4562 [OPEN]** — MCP 重载仍使用启动时旧配置
   - 标签：`area:configuration`、`area:mcp`
   - 现象：会话内修改 `.github/mcp.json` 后，reload/restart MCP 仍读旧快照，修复无效。
   - 链接：github/copilot-cli Issue #4562

10. **#4568 [OPEN]** — `--cloud` 模式所有者选择器卡死、轮询触发 429
    - 标签：`area:sessions`、`area:networking`
    - 现象：无仓库上下文无限挂起；有上下文则任务卡在 `session.requested` 直至超时。
    - 链接：github/copilot-cli Issue #4568

**其他值得跟踪**：
- **#4569** [OPEN] — GitHub Mobile 远程会话一直停留在"Queued for Copilot"，不刷新 CLI 响应（多端

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期**：2026-08-24
**数据来源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

过去 24 小时内社区活跃度偏低，无新版本发布。**Issue 端**聚焦于"持久化记忆系统"的高呼声特性请求（#1283，27 条评论持续升温）以及一名付费会员（Vivace 订阅）对配额"隐性缩水"的质疑（#2604）。**PR 端**则呈现出两条不同方向的进展：第三方 iOS/Android 应用 `gbr-agent` 试图接入本地会话作为"观察+否决"配对设备（#2616），以及官方对插件安全与持久化数据的文档澄清（#2614）。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内）。建议关注上游 `main` 分支的提交记录以获取最新变更。

---

## 🔥 社区热点 Issues

> ⚠️ 过去 24 小时内仅有 3 条 Issue 更新，远少于"10 条"的常规挑选量。以下列出全部 3 条并按重要性排序。

### 1. [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) ⭐ 持续高热 — 持久化记忆系统特性请求
- **状态**：OPEN | **作者**：CatKang | **评论数**：27
- **核心诉求**：为 Kimi Code CLI 增加跨会话的 **Memory System**，包括 AI 自动管理笔记的"自动记忆"与用户通过配置定义指令的"手动记忆"。
- **为何重要**：这是社区长期呼声最高的特性之一，27 条评论表明用户希望 CLI 具备类似 Cursor / Claude Code 的项目级上下文持久化能力，能记住项目模式、用户偏好与历史决策，避免每次启动会话都要重复交代背景。
- **社区反应**：高，但 👍 为 0 较为反常，可能因评论者多为围观者而非投票者；讨论应已进入实质性方案阶段。

### 2. [#2604](https://github.com/MoonshotAI/kimi-cli/issues/2604) ⚠️ 信任类争议 — 周配额疑似缩水 3–5 倍
- **状态**：OPEN | **作者**：tobiu | **评论数**：3
- **核心诉求**：Vivace 订阅会员通过客户端自建 JSONL 账本（直接探测 API 调用），记录每日 raw token 量，发现在无任何公告的情况下**有效周配额减少约 3–5 倍**。
- **为何重要**：这是付费用户首次以"自带仪表"的方式质疑计费/计量变更的**可观测性问题**。如果属实，涉及订阅条款与定价公平性；若为计量回归，则影响所有重度 agentic 用户。属于必须由官方回应的类型。
- **社区反应**：评论数尚低（3 条），但议题性质敏感，预计会吸引更多订阅用户围观与补充数据。

### 3. [#2484](https://github.com/MoonshotAI/kimi-cli/issues/2484) 已关闭 — 标题与正文均为空的占位条目
- **状态**：CLOSED | **作者**：lin200083 | **评论数**：0
- **说明**：内容无实质信息（标题为"."），已关闭。仅作存档记录，无讨论价值。

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 2 条 PR 更新。以下按提交时间倒序排列。

### 1. [#2616](https://github.com/MoonshotAI/kimi-cli/pull/2616) — 新增 Build Remote Agent 手机配对（`gbr/1` 协议）
- **作者**：LinespottingPrivate | **状态**：OPEN
- **内容要点**：
  - 将付费 iOS/Android 应用 **Build Remote Agent** 作为桌面 Agent 的"配对设备"接入
  - 通过 MIT 协议的 `gbr-agent` 实现"观察 + 注入"本地会话
  - 协议版本 `gbr/1`，手机定位为 **spectator + veto（旁观+否决）而非指挥者**
- **评估**：属于第三方生态接入提案，方向新颖（手机作为人机协同的"否决权"终端），但需评估安全模型（本地会话被外部 App 注入的信任边界）和协议稳定性。值得关注但合并门槛较高。

### 2. [#2614](https://github.com/MoonshotAI/kimi-cli/pull/2614) — docs(plugins)：补充插件安全与持久化数据文档
- **作者**：QIANLING-0831 | **状态**：OPEN | **性质**：纯文档
- **内容要点**：
  - 澄清 `plugin.json`、command-based tools、`inject` 与 `~/.kimi/plugins/` 安装路径的合约
  - 明确"不涉及"其他独立协议，避免读者混淆
- **评估**：典型的契约/边界澄清型 PR，合并阻力小，对插件开发者有较大价值——明确安全姿态与持久化数据归属。建议社区 reviewer 重点检查措辞是否与现有插件实现一致。

---

## 📈 功能需求趋势

从过去 24 小时的活跃 Issue 提炼的方向如下：

| 方向 | 代表 Issue | 强度 |
|------|-----------|------|
| **持久化与跨会话记忆** | #1283 | 🔥🔥🔥（27 条评论、长期高热） |
| **配额/计费透明度** | #2604 | 🔥🔥（付费用户首次以数据驱动方式质疑） |
| **第三方生态/移动端协同** | 间接由 PR #2616 体现 | 🔥（社区/外部开发者正在主动构建周边） |

**趋势解读**：
1. **"会话即状态"的范式正在被质疑** —— #1283 直接挑战 CLI 默认无记忆的设计，与行业（Cursor Rules、Claude Memory、Codex 项目级上下文）方向一致。
2. **重度用户的"可观测性需求"浮现** —— #2604 不是抱怨配额不够，而是要求**计量方式可见、可审计**，这是企业级/团队级使用场景的前置条件。
3. **官方插件合约文档化** —— PR #2614 表明官方正在为插件生态建立更清晰的边界，未来可能出现更多社区插件。

---

## 💡 开发者关注点

基于上述数据，可观察到以下高频痛点与需求：

1. **"每次都要重新交代项目背景"的重复劳动** — #1283 的 27 条评论几乎是清一色的同质诉求，说明当前 CLI 在长生命周期项目协作中的体验短板已经显性化。

2. **订阅权益缺乏可观测性** — #2604 用户自建 token 账本进行反向工程，说明官方 dashboard 不足以支撑重度用户的成本核算需求。开发者期待"按日/按项目"的 token 看板与计费明细导出。

3. **插件安全边界不明** — PR #2614 的存在本身说明插件合约在安全（能做什么）与持久化（数据存哪里）方面**缺少清晰文档**，这对插件作者是直接障碍。

4. **生态接入"自下而上"** — PR #2616 来自外部团队而非官方，反映官方尚未主动定义移动端/远程协作的协议标准，社区正在用 `gbr/1` 这样的私有协议试错，长期来看需要官方牵头收敛。

---

## 📊 数据概览

| 指标 | 24h 数据 |
|------|---------|
| 新发布版本 | 0 |
| Issue 更新 | 3（2 OPEN / 1 CLOSED） |
| PR 更新 | 2（均 OPEN） |
| 最高评论 Issue | #1283（27 条） |
| 最敏感议题 | #2604（订阅计量争议） |

---

*日报生成时间：2026-08-24 | 数据切片：GitHub 过去 24 小时活动*
*备注：今日社区活跃度低于均值，建议结合周维度趋势观察。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-08-24**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，社区活跃度集中在 **Session 稳定性修复** 和 **Workspace 远程沙箱架构改进** 两大方向。贡献者 `kitlangton` 单日提交 7 个核心 PR，集中在修正 Workspace-backed Location 在本地文件系统中误用 `realPath`/`existsSync` 的问题；`savagelysubtle` 与 `gitRasheed` 则在 `run` 命令可靠性上做了三处关键修复（空响应自动重试、finish_reason 日志、跨进程 DB 锁竞争）。用户侧热点仍以 **Big Pickle / OpenCode Zen 限流**、**MCP `structuredContent` 被丢弃** 为代表。

---

##  版本发布

*过去 24 小时内无新版本发布。*

---

##  社区热点 Issues

| # | 标题 | 状态 | 评论数 | 链接 | 为什么值得关注 |
|---|---|---|---|---|---|
| #1034 | Local Ollama tool calling either not calling or failing outright | CLOSED | 31 👍16 | [→](https://github.com/anomalyco/opencode/issues/1034) | 历史最热的 Ollama 本地工具调用兼容性问题，长期困扰自托管用户，今日正式关闭 |
| #44528 | Bug Report, network error (Provider finish_reason: network_error) | OPEN | 7 | [→](https://github.com/anomalyco/opencode/issues/44528) | v1.18.21 升级后突发网络错误，影响 Big Pickle / Ollama Cloud，与 #44505、#44473、#44522 高度相关 |
| #32366 | UI stuck on 'thinking' indefinitely after stream error | OPEN | 7 👍1 | [→](https://github.com/anomalyco/opencode/issues/32366) | 流式错误后 UI 卡死、需重启才能恢复，影响桌面端稳定性 |
| #31137 | [Web UI] "Auto-accept permissions" button disabled in new layout | OPEN | 6 👍6 | [→](https://github.com/anomalyco/opencode/issues/31137) | 新版 UI 设计存在明显回归——关键权限按钮被禁用 |
| #33884 | TUI plugins referenced by npm package spec silently fail in 1.17.10 | OPEN | 6 👍1 | [→](https://github.com/anomalyco/opencode/issues/33884) | OpenTUI 0.4.2 双入口回归，影响 npm spec 形式的 TUI 插件加载 |
| #28322 | [FEATURE] Config option to show thinking blocks by default | CLOSED | 7 👍5 | [→](https://github.com/anomalyco/opencode/issues/28322) | 呼声较高的可配置性诉求：默认展开推理块，目前只能逐个点击 |
| #38498 | docs: wrong french translation (bash → frapper) | OPEN | 6 | [→](https://github.com/anomalyco/opencode/issues/38498) | 法语文档翻译质量问题，"bash" 被错误译为"击打" |
| #44556 | `run --session` hangs when model uses question tool on externally created session | OPEN | 2 | [→](https://github.com/anomalyco/opencode/issues/44556) | headless 模式权限规则绕过 + 无限等待，#44559 已修 |
| #44447 | Big Pickle Now Frustrating to Use (stops mid-thought) | OPEN | 2 | [→](https://github.com/anomalyco/opencode/issues/44447) | 主推免费模型频繁中断回复，用户需不断输入"继续" |
| #44300 | Zen API: ox-alpha-free fails with "Endpoint is unavailable" for any request containing tools | OPEN | 4 👍1 | [→](https://github.com/anomalyco/opencode/issues/44300) | Zen 预览模型带 tools 数组时全失败，影响工具调用场景 |

---

## ️ 重要 PR 进展

| PR | 标题 | 状态 | 链接 | 关键内容 |
|---|---|---|---|---|
| #44532 | feat(session): finish-reason logging and boot-time crash recovery | CLOSED | [→](https://github.com/anomalyco/opencode/pull/44532) | 新增 `finish_reason` 可观测日志 + 启动时崩溃恢复，便于诊断"切中途停下" |
| #44536 | feat(session): auto-retry empty stop responses | CLOSED | [→](https://github.com/anomalyco/opencode/pull/44536) | 第三方修复——Provider 偶发返回空响应 + `stop` 时自动重试 |
| #44559 | fix(run): apply non-interactive deny rules to resumed sessions | OPEN | [→](https://github.com/anomalyco/opencode/pull/44559) | 关闭 #44556：headless run 对外部创建会话补齐 deny question/plan |
| #44558 | fix(db): serialize database init across processes | OPEN | [→](https://github.com/anomalyco/opencode/pull/44558) | 关闭 #33320：6 个并发 `opencode run` 进程下 5 个在 15ms 内触发 "database is locked"，现加文件锁串行化 |
| #44565 | fix(codemode): package conditional transpilers | CLOSED | [→](https://github.com/anomalyco/opencode/pull/44565) | `@opencode-ai/codemode` 条件导入改写到 `dist`，并用隔离 npm consumer 校验产物 |
| #44564 | fix(core): skip host realpath canonicalization for workspace locations | CLOSED | [→](https://github.com/anomalyco/opencode/pull/44564) | Workspace-backed Location 不应再走 host realPath，启动崩溃修复 |
| #44563 | fix(core): never build fff index for workspace locations | OPEN | [→](https://github.com/anomalyco/opencode/pull/44563) | 远程沙箱目录不应在主机端建 fff 原生索引 |
| #44567 | fix(core): accept null as omitted for optional tool inputs | OPEN | [→](https://github.com/anomalyco/opencode/pull/44567) | 修复模型/SDK 发送 `null` 而 Effect schema 期望 `undefined` 的不匹配 |
| #44566 | fix(tui): show the effective default model | OPEN | [→](https://github.com/anomalyco/opencode/pull/44566) | API 创建会话时 `model:null` 不再误显示 "No provider selected" |
| #44545 | feat(tui): discoverable queue controls with terminal-safe keybinds | OPEN | [→](https://github.com/anomalyco/opencode/pull/44545) | 队列控件改用 leader-chord 快捷键，兼容 VS Code 集成终端 |

---

##  功能需求趋势

从近 24 小时及近期 Issues 提炼，社区关注方向集中在以下几类：

1. **Session / 运行可靠性** 🔧
   - 主流模型（Big Pickle、ox-alpha-free）中途停止响应、网络错误卡死等稳定性问题占据头部
   - 对应 PR #44532 / #44536 / #44558 已在落地

2. **UI / TUI 可配置性** 
   - 推理块默认展开 (#28322)、新 UI 设计回归 (#31137)、可发现的快捷键 (#44545)
   - 反映出社区对**降低认知负担**和**恢复旧行为**的双向诉求

3. **远程 Workspace / 沙箱架构** ☁️
   - kitlangton 的一组 PR (#44563/#44564/#44560/#44562/#44526) 表明团队正在重构 Location 服务，使其能正确处理 Modal 等远程沙箱
   - 涉及文件系统、搜索索引、shell 解析、权限边界等多处子系统

4. **MCP 生态兼容** 🔌
   - #38923 反映 `structuredContent` 被丢弃，导致严肃工具丢失结构化数据
   - MCP 是 OpenCode 扩展能力的核心，社区期待更完整的协议实现

5. **多语言与文档** 🌍
   - 法语翻译错误 (#38498) 暴露本地化流程缺失

6. **基础工程** ⚙️
   - Bun segfault (#31563)、GameGuard 兼容 (#44513)、DB 锁竞争 (#33320) 等底层问题逐步被解决

---

## 👨‍💻 开发者关注点

综合高评论 Issues 与已合并/在审 PR，开发者反馈的高频痛点：

- **"Big Pickle / Zen 免费模型限流和中断"** — 几乎所有非英文 Issue（#43404、#43480、#43627、#44207、#44447）都指向同一组现象，说明 **免费层配额、稳定性与透明度** 是当前最大社区怨气来源。
- **"工具调用 + 本地模型兼容性"** — Ollama (#1034)、OpenAI-compatible (#29142)、Anthropic thinking (#44544)、MCP structuredContent (#38923) 共同提示：**模型协议与 schema 校验**仍是健壮性的薄弱环节。
- **"升级即坏"焦虑** — #44528、#44347、#44473 显示 v1.18.21 升级后集中爆发的 network_error / Interrupted，让部分用户对自动升级产生顾虑。
- **"headless run 不一致"** — #44556、#42064 反映非交互场景下权限、stdin、会话恢复的行为不够稳定，是 CI/Agent 集成的关键障碍。
- **"会话与项目元数据"** — #37280（删除项目）、#44101（同 repo 多目录被合并）说明项目/会话生命周期管理仍偏黑盒。
- **"OS 平台兼容"** — macOS Apple Silicon (#31563)、Windows + GameGuard (#44513) 等平台特定崩溃提示**嵌入式 Bun runtime** 的兼容性仍是待解决的长尾问题。

---

*日报基于 anomalyco/opencode 在 2026-08-24 的 Issues / PRs 数据自动生成，仅供社区参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**日期**: 2026-08-24
**数据源**: [badlogic/pi-mono](https://github.com/badlogic/pi-mono) (earendil-works/pi)

---

## 📌 今日速览

过去 24 小时 Pi 仓库无新版本发布，但社区活跃度依然旺盛：48 条 Issue 更新、16 条 PR 推进。今日工作集中于 **llama.cpp 模型暴露修复**、**Windows 兼容性改善**、以及 **多 Provider 错误处理** 的稳定性增强——多个针对 OpenAI 兼容提供方（如 Kimi、Vertex AI、Nous Ox Alpha）的边角问题被快速闭环。

---

## 🚀 版本发布

**今日无新版本发布。** 上一版本为 Pi 0.84.2。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 状态 | 要点 |
|---|-------|------|------|------|
| [#7683](https://github.com/earendil-works/pi/issues/7683) | pi-tui: 让组件可接收自身区域的鼠标事件 | 11 | CLOSED | TUI 交互范式升级，组件可独立处理点击，已由 PR #8032 实现 |
| [#8167](https://github.com/earendil-works/pi/issues/8167) | 无法选择 llama.cpp 内置模型 | 10 | CLOSED | 路由模式下未加载模型不出现在 `/model`选择器，PR #8479、#8535 已修复 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm 不索引新发布的 pi-packages | 7 | CLOSED | 影响第三方扩展在 pi.dev/packages 展示，自 8 月 4 日起新包均未收录 |
| [#5932](https://github.com/earendil-works/pi/issues/5932) | 在 ExtensionContext 暴露 `navigateTree()` | 7 | OPEN | 扩展 API 不一致，阻碍自定义 `/goal` 等命令实现，仍在讨论 |
| [#8183](https://github.com/earendil-works/pi/issues/8183) | Windows Terminal `Ctrl+Shift+F` 冲突文档 | 6 | CLOSED | 文档补充全屏搜索快捷键与 WT 冲突说明 |
| [#8452](https://github.com/earendil-works/pi/issues/8452) | 改进默认压缩提示以保留续接状态 | 5 | CLOSED | 针对编码会话让 checkpoint 区分观察结果与意图 |
| [#8344](https://github.com/earendil-works/pi/issues/8344) | 全屏 TUI 中工具输出块独立折叠 | 5 | CLOSED | 长会话下细粒度控制单个工具块，已为 no-action |
| [#7724](https://github.com/earendil-works/pi/issues/7724) | 冷恢复重放被实时恢复移除的溢出消息 | 4 | OPEN | 上下文溢出后重启会重新加入失败/截断的回复 |
| [#8469](https://github.com/earendil-works/pi/issues/8469) | 在 DeepSeek 目录加入 `deepseek-v4-flash-vision-exp` | 4 | CLOSED | 新视觉模型支持（图像输入） |
| [#8372](https://github.com/earendil-works/pi/issues/8372) | Windows / WSL 终端按键绑定 | 3 | CLOSED | 整理 Pi 在 Windows 平台的键位冲突表 |

> **社区反应**：llama.cpp 集成、Windows 兼容性、扩展 API 三条线持续贡献最多讨论；TUI 鼠标交互是新出现的热度话题。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 修复/功能 |
|---|----|------|----------|
| [#8032](https://github.com/earendil-works/pi/pull/8032) | feat(tui): 组件可接收自身区域鼠标事件 | OPEN | 新增 `Component.onMouse(event)`，`TuiAltScreen` 按 LayoutBox 命中测试派发事件，闭合 #7683 |
| [#8535](https://github.com/earendil-works/pi/pull/8535) | feat(coding-agent): llama.cpp 也展示未加载模型 | CLOSED | 在 `/model` 列出 llama-server 的全部 preset，避免手动 `/llama` 加载 |
| [#8536](https://github.com/earendil-works/pi/pull/8536) | fix(ai): 规范化 tool-result 历史给严格 OpenAI 兼容提供方 | CLOSED | 解决 Kimi/Moonshot 400 错误（孤立 tool message、重复 tool_call_id） |
| [#8512](https://github.com/earendil-works/pi/pull/8512) | feat(coding-agent): 新增可选 PowerShell 工具 | OPEN | 放弃 git bash 在 Windows 的可行性，转向原生 PowerShell 工具 |
| [#8532](https://github.com/earendil-works/pi/pull/8532) | fix(coding-agent): 限制 grep/find 子进程输出 | CLOSED | readline 单行无上限导致 `RangeError`，修复一行打挂父进程问题 |
| [#8524](https://github.com/earendil-works/pi/pull/8524) | fix(coding-agent): 保留 "Working..." 状态至 settled | CLOSED | 外部观察者不再被误导为轮次提前结束 |
| [#8513](https://github.com/earendil-works/pi/pull/8513) | fix(coding-agent): 修复字符串化 edit 参数中的原始控制字符 | CLOSED | `#3370` 后续补丁：模型输出未转义换行/制表符时 `JSON.parse` 静默失败 |
| [#8424](https://github.com/earendil-works/pi/pull/8424) | fix(coding-agent): 丢弃失败的扩展工厂状态 | CLOSED | 防止扩展加载失败后污染后续调用与事件监听 |
| [#8505](https://github.com/earendil-works/pi/pull/8505) | fix(coding-agent): 限制 agent 重试退避上限 | CLOSED | 新增 `retry.maxAgentDelayMs`（默认 30s），指数退避不再无限增长 |
| [#8500](https://github.com/earendil-works/pi/pull/8500) | fix(plan-mode): 消除 plan 模式 bash 守卫的误判 | CLOSED | 路径含 `code` 误拦截、`isSafeCommand` 与 plan 提取器的文本欺骗漏洞 |
| [#8509](https://github.com/earendil-works/pi/pull/8509) | fix(ai): 暴露流式错误并支持无工具模型 | CLOSED | `native_finish_reason: "network_error"` 现作为异常抛出；纯文本模型不再崩溃 |

---

## 📈 功能需求趋势

从今日 Issue 分布看，社区关注点呈现以下方向：

1. **本地模型生态完善（llama.cpp）** — 集中爆发：`#8167`、`#8469`、`#8479`、`#8535`、`#8539`。开发者要求 llama-server 路由下未加载模型能直接选择，配合 pi.dev/packages 展示链路形成端到端本地体验。
2. **Windows 平台一等公民** — `#8183`（键位文档）、`#8372`（键位冲突）、`#8512`（PowerShell 工具）、`#8523`（盘符路径补全）。Windows 用户希望摆脱 unix-only 假设。
3. **多 Provider 兼容与错误可见性** — Kimi/Moonshot、Vertex AI、Nous Ox Alpha、Stealth 模型在请求/响应层面各有边角问题；开发者普遍要求"将 provider 错误原文/特定类型带到 UI 与 session JSONL"。
4. **TUI 交互体验** — 鼠标事件分发（#7683/#8032）、工具块独立折叠（#8344）、Elixir symbol 高亮（#8534）、粘贴保留尾随空格（#8528）反映 TUI 已成为产品差异化重点。
5. **扩展 API 扩展** — `navigateTree()` 暴露（#5932）、Skill 可见性 API（#8533）、新事件 `user_bash_complete`（#8530）、Skill 中段调用（#8457）说明生态作者希望更多控制点。

---

## 💡 开发者关注点

通过今日反馈，提炼出以下高频痛点：

- **"Provider 错误只是 `Error: ERROR`"**（#8541、#8526、#8509）：429、5xx 等上游错误常被吞成空字符串，session JSONL 中仅记录 `stopReason: "error"`，定位极困难。开发者要求**保留原始错误体与 provider 类型**。
- **"冷启动恢复的会话状态与运行时不一致"**（#7724、#8525）：溢出重试/Abort 后 `SessionManager` 持久化的 parentId 错位，重启回放会让模型再次失败。需要一致的会话树持久化语义。
- **"严格提供方的 tool history 校验"**（#8537/#8536）：DeepSeek、OpenAI 等宽松提供方不会触发，但 Moonshot/Kimi 会拒绝孤儿 tool message——开发者呼吁**默认规范化**而不仅是按 provider 区分。
- **"长输出 / 大文件让 readline 爆炸"**（#8532）：子进程工具的输出端缺乏行级上限是潜在 DoS 面。
- **"npm 索引滞后阻断新扩展被发现"**（#7885）：影响 pi-package 生态冷启动；社区希望增加官方镜像或绕过路径。

---

*日报由 GitHub 公开数据生成，仅反映 2026-08-23 ~ 2026-08-24 区间动态。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-24

---

## 📌 今日速览

过去 24 小时，Qwen Code 仓库无新版本发布，但 **PR 活跃度依旧高位运转**，共 50 条 PR 被更新，其中 `/review` 工作流的体验改进成为绝对主线（涉及 Agent 1a 拆分、Step 4 验证增强、git 身份验证修复等多个方向）；同时 Issue 端呈现出 **CI 安全、Windows 中文输入体验、后台子代理审批挂起** 三大痛点。建议开发者重点关注 #9821（Slash 命令间歇丢失）、#5975（API 流中断）和 #5975 系列 P2 阻塞类问题。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#5975](https://github.com/QwenLM/qwen-code/issues/5975) ‑ API Error: No stream activity for 120000ms after 19 chunks  ·  **OPEN · P2**
v0.19.3 升级后频繁触发 120s 无流活动超时，伴随 "Thought for 2s" 后无输出。属于核心性能/集成问题，已积累 11 条评论，1 个 👍，是当前阻塞日常使用的关键 bug。

### 2. [#9821](https://github.com/QwenLM/qwen-code/issues/9821) ‑ Native slash commands intermittently missing from the Skill-tool surface  ·  **OPEN · P2**
`commands/*.md` 派生的原生斜杠命令在 Skill 工具表面上注册成功率仅约 50%，表现为"非确定性"。横跨 0.21.8–0.21.x 多个版本，影响 skill 体系稳定性。

### 3. [#9827](https://github.com/QwenLM/qwen-code/issues/9827) ‑ permissions.allow 不会裁剪发给模型的工具 schema  ·  **OPEN · P2**
`permissions.allow` 全量允许列表虽然限制了 `/tools` 的展示，但**实际 API 请求仍发送完整工具集**——安全配置语义失真，是权限系统与模型交互层的接口不一致。

### 4. [#8625](https://github.com/QwenLM/qwen-code/issues/8625) ‑ Windows 终端输入中文时拼音看不清  ·  **OPEN · P2 · welcome-pr**
v0.21.5 在 Windows 终端输入中文时 IME 拼音显示模糊，TUI 渲染层对 IME overlay 的处理是症结，社区有 8 条讨论。

### 5. [#9219](https://github.com/QwenLM/qwen-code/issues/9219) ‑ /review 多行/语义重复评论被误判为无冲突  ·  **OPEN · P2**
预提交审查的重叠检测只看 `(path, line)` 完全相等，导致多行内联评论和语义重复均漏检，影响代码评审质量。

### 6. [#7585](https://github.com/QwenLM/qwen-code/issues/7585) ‑ Direct External Context Provider Profile  ·  **CLOSED · P3**
单次互动 Qwen CLI 进程从仓库共享上下文中按需/Auto Recall 双模式检索的提案，13 条评论的高密度讨论显示社区对**企业级私有 monorepo 集成**有较强诉求。

### 7. [#8586](https://github.com/QwenLM/qwen-code/issues/8586) ‑ activeWork 与后台 Agent 恢复跟踪  ·  **OPEN · P2 · daemon**
为深度守护健康增加 `activeWork` 事实，并建立前台 prompt 结束后存活的后台 Agent 的恢复路径，关联多层架构改动。

### 8. [#9832](https://github.com/QwenLM/qwen-code/issues/9832) ‑ deepseekv4flash-vision-exp 图片能力缺失  ·  **OPEN · P3 · welcome-pr**
用户反馈 qwen-code 后端对 DeepSeek 模型的图片处理路径**写死 hostname 而非能力探测**，导致 vision 实验模型无法使用——典型的**模型后端可扩展性**问题。

### 9. [#8769](https://github.com/QwenLM/qwen-code/issues/8769) ‑ 把 /review Step 3–5 重建到工作流引擎  ·  **OPEN · P2 · need-discussion**
将 agent fan-out、verification、reverse-audit 从模型驱动执行迁移到 `QWEN_CODE_ENABLE_WORKFLOWS` 工作流引擎，让 fan-out 结构和收敛变成立即可测试的代码。

### 10. [#8662](https://github.com/QwenLM/qwen-code/issues/8662) ‑ TUI 从 ink 迁移到 OpenTUI  ·  **OPEN · P3 · need-discussion**
现有 ink 7 + React 19 + 1037 行补丁的渲染层存在闪烁、IME 兼容、鼠标支持差等结构性问题；OpenTUI 提供 flicker-free、原生鼠标与更好的 IME 处理，长期值得关注。

---

## 🛠 重要 PR 进展（精选 10 条）

### 1. [#9793](https://github.com/QwenLM/qwen-code/pull/9793) ‑ 修复嵌套子代理审批在后台父代理下未触达 UI
解决 #9782：嵌套子代理（即由后台 agent 或 fork 启动）的需要用户确认的工具调用不再"挂死"等待 `TOOL_WAITING_APPROVAL`，是后台 agent 可靠性的关键修复。

### 2. [#9582](https://github.com/QwenLM/qwen-code/pull/9582) ‑ Telemetry 在 session swap 失败时回滚重放用量
`UiTelemetryService` 新增 `snapshotForReplay` / `restoreFromReplaySnapshot` 让遥测重放可撤销，避免切换失败造成指标虚高。

### 3. [#9824](https://github.com/QwenLM/qwen-code/pull/9824) ‑ Skill 工具参数校验改为实时读取 provider
`SkillTool.validateToolParams` 不再依赖构造期缓存的命令集，而是查询实时 provider 并应用基于文件的 skill 名 shadowing 规则——配合 #9821 的间歇丢失 bug 修复。

### 4. [#9740](https://github.com/QwenLM/qwen-code/pull/9740) ‑ /review Step 4 验证提升为执行级证据
新增子命令 `qwen review ab-drive`（单脚本对两棵树跑对比）+ Step 4 多重证据形式，让评审验证从模型口述变成可重放的脚本证据。

### 5. [#9769](https://github.com/QwenLM/qwen-code/pull/9769) ‑ Web Shell "Update Project" 处理 dirty working tree
原本遇脏工作树直接死锁的更新流程，现在 footer 切换为解决方案面板（stash / commit），显著提升 Web Shell 的可用性。

### 6. [#9771](https://github.com/QwenLM/qwen-code/pull/9771) ‑ Autofix 长轮询期间状态评论保持心跳
修复 PR 状态评论在 review-address 轮询开始后就冻结在"🔄 working"的问题：新增 detached 心跳循环，让健康轮询和卡死轮询可视化区分。

### 7. [#8927](https://github.com/QwenLM/qwen-code/pull/8927) ‑ 频道 session 生命周期按 sessionRotation 约束
为 channel connector 增加 `sessionRotation` 配置项（`maxTurns` / 时长），到期后下次消息开新 session，避免单一 session 无限累积。

### 8. [#9305](https://github.com/QwenLM/qwen-code/pull/9305) ‑ VP 模式下短内容底端对齐
修复 #9300：当对话内容短于视口高度时，原本顶部对齐造成的"末尾空白"问题，改为底部对齐。

### 9. [#9728](https://github.com/QwenLM/qwen-code/pull/9728) ‑ 修复 Windows/macOS 测试通道红
复活 #9370 的双平台 CI 通道，包含若干产品修复、测试夹具修复与 CI harness 修复。

### 10. [#9813](https://github.com/QwenLM/qwen-code/pull/9813) ‑ PR 按 changed-file 路径申请 area reviewer
与 #8668 的 issue 端区域分配配对：基于 diff 文件路径的纯函数映射，把 PR 自动派给对应区域 owner，提升 PR review 路由效率。

---

## 📈 功能需求趋势

通过对 50 条 Issue 的归纳，社区诉求集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **多 Agent / 后台 Agent 体系** | #8586, #9793(PR), #9832 | ★★★★★ |
| **/review 工作流工程化** | #9219, #8769, #9805(PR), #9740(PR) | ★★★★★ |
| **Web Shell / TUI 体验** | #8625, #8662, #9769(PR), #9743, #9305(PR) | ★★★★ |
| **企业 / 私有集成（External Context）** | #7585 | ★★★★ |
| **IDE / VS Code 集成** | #8743, #8752, #9743 | ★★★ |
| **新模型与多后端适配** | #9832, #9016, #9145 | ★★★ |
| **CI/CD 安全与自动化** | #9089, #9813(PR) | ★★★ |
| **Skill / Commands 一致性** | #9821, #9145, #9824(PR) | ★★★ |

---

## 💬 开发者关注点

1. **CI 安全是当前最严肃的工程议题** — [#9089](https://github.com/QwenLM/qwen-code/issues/9089) 指出 autofix 的 PAT-bearing 任务与不可信分支代码同主机，存在 PR-level 之外的横向风险，必须提升到 runner 级别隔离。

2. **后台 / 嵌套 Agent 的审批传播仍是痛点** — 多个 Issue 指向子代理与后台 agent 的 `TOOL_WAITING_APPROVAL` 无人监听导致挂死，#9793 给出首个修复，但更深层的活动状态可见性 (#8586) 还在路上。

3. **Web Shell / TUI 终端国际化与 IME 体验** — Windows 中文 IME (#8625) 和 CJK 强调渲染 (#9456) 表明 i18n 在 TUI 层仍是高频反馈来源，OpenTUI 迁移 (#8662) 可能一并解决。

4. **权限配置"看起来生效"≠ 实际生效** — #9827 揭示 `permissions.allow` 不裁剪 API 请求的工具集，是典型的**配置语义与运行时行为漂移**，影响企业部署信任度。

5. **跨多语言 / 多文件的配置值需要单一事实源** — #9145 指出 approval-mode 在 20 个文件、3 种语言里手抄，"两份已经写错"，是典型的代码演进欠债。

6. **模型后端可扩展性不足** — #9832 暴露了按 hostname 写死的反模式，开发者呼吁对**能力探测而非 hostname 探测**的抽象层。

7. **Slash 命令 / Skill 注册的非确定性** — #9821 的 50% 失败率提示 `async modelInvocableCommands` 存在竞态，开发者期待运行时一致保证。

---

*本日报基于 GitHub Issues / PRs 公开数据自动生成，仅供参考。链接均为 `QwenLM/qwen-code` 仓库原始 URL。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-24** | **数据源：github.com/Hmbown/DeepSeek-TUI**

> 📌 **重要说明**：DeepSeek-TUI 已正式品牌升级为 **CodeWhale**（Shannon Labs 旗下产品），旧版 `deepseek-tui` npm 包已弃用。本日仍按原仓库路径归集动态。

---

## 一、今日速览

今日社区聚焦于 **v0.9.12 集成冲刺** 与 **Provider 抽象清理**：维护者 Hmbown 推送了面向 0.9.12 的集成分支 (#5576)，并发布 v0.9.11 修复补丁；同期，多个面向长会话的"监督运维"特性 PR（控制套接字、`/relaunch` 命令、生命周期事件 outbox）集中合并，使该项目在多模型供应商、可观测性、安全护栏三条主线持续推进。

---

## 二、版本发布

### v0.9.11（今日发布）
- 项目正式以 **Codewhale** 名义发布，旧 `deepseek-tui` npm 包停止迭代。
- 同版本补丁 #5559 在打 tag 前关闭：模型绑定工具输出（read/shell 结果）走"凭据形态"脱敏策略 (#5546)，修复前序 tag 留下的真实性与工具输出缺口。
- 文档同步：#5565 增补"未发布 tag 的重新切割恢复流程"以及 crates.io / npm Trusted Publisher 的对外发布闸门说明。

---

## 三、社区热点 Issues（Top 10）

| # | 编号 | 主题 | 为何值得关注 |
|---|------|------|--------------|
| 1 | [#3368](https://github.com/Hmbown/DeepSeek-TUI/issues/3368) | v0.9.3：安全硬化与代码扫描修复的发布闸门 | 评论 29 条，跨多版本的核心安全追踪工单，汇集 CodeQL、advisory 与本地集成提交 |
| 2 | [#4326](https://github.com/Hmbown/DeepSeek-TUI/issues/4326) | 32-worker 风暴取消后 RSS 内存界定 | 评论 6 条，明确要把"分配器高水位"和真实泄漏区分开，直接影响高并发稳定性 |
| 3 | [#3957](https://github.com/Hmbown/DeepSeek-TUI/issues/3957) | 拆分共享模态基础设施与自有视图 | 评论 4 条，针对 TUI 模块化的关键重构 |
| 4 | [#3306](https://github.com/Hmbown/DeepSeek-TUI/issues/3306) | 收敛运行时所有权，删除重复代码，发布单一可执行 | 评论 4 条，v0.9.3 umbrella：约 87% 代码仍在 `codewhale-tui`，亟需拆仓 |
| 5 | [#5583](https://github.com/Hmbown/DeepSeek-TUI/issues/5583) | Workflow responseSchema 失败需有界修复与原始输出回执 | 评论 3 条，影响 0.9.12：拒绝静默吞错，引入可恢复路径 |
| 6 | [#5582](https://github.com/Hmbown/DeepSeek-TUI/issues/5582) | Workflow owner 快照把 Degraded 折叠为 Completed | 评论 3 条，状态机错误，会误导上层 UI/告警 |
| 7 | [#5547](https://github.com/Hmbown/DeepSeek-TUI/issues/5547) | CI：非镜像 PR 分支的 Linux 工作区测试 | 评论 3 条，可靠性基础设施：当前 ubuntu lane 是占位符 |
| 8 | [#5290](https://github.com/Hmbown/DeepSeek-TUI/issues/5290) | 非英文路由点击控件失效 | 评论 3 条，本地化交互回归，影响海外用户 |
| 9 | [#4394](https://github.com/Hmbown/DeepSeek-TUI/issues/4394) | Compaction：发布并强制执行结构化生存契约 | 评论 3 条，长会话压缩鲁棒性的契约化 |
| 10 | [#5573](https://github.com/Hmbown/DeepSeek-TUI/issues/5573) | v0.9.12：里程碑追踪起点 | 评论 2 条，0.9.12 周期官方拣单顺序入口，含 P0 must-fix 表 |

---

## 四、重要 PR 进展（Top 10）

| PR | 标题 | 要点 |
|----|------|------|
| [#5576](https://github.com/Hmbown/DeepSeek-TUI/pull/5576) | 0.9.12 集成：must-fix + UX 修复（WIP） | v0.9.12 集成分支，24 提交，已合入 R2 approval-scope / R3 Chat-Completions SSE 错误帧 / R4 等多项修复 |
| [#5535](https://github.com/Hmbown/DeepSeek-TUI/pull/5535) | 监督运维栈：lifecycle outbox + `/relaunch` + 每会话控制套接字 + goal-continuation 静默修复 | 长会话机器可读监督的统一组合提案 |
| [#5594](https://github.com/Hmbown/DeepSeek-TUI/pull/5594) | control socket - part d (final) | Unix-only、按换行分隔的 JSON-RPC 控制面，`[control_socket]` 默认关闭 |
| [#5593](https://github.com/Hmbown/DeepSeek-TUI/pull/5593) | `/relaunch` 命令 - part c | `/update` 后无需手动重启，一步切换到当前二进制 |
| [#5591](https://github.com/Hmbown/DeepSeek-TUI/pull/5591) | 目标续作节奏修复 - part a | `continuation_delay_seconds` 只接进了一半路径，引擎内 turn-loop 内 hook 补齐等待 |
| [#5592](https://github.com/Hmbown/DeepSeek-TUI/pull/5592) | lifecycle outbox - part b | 每生命周期事件追加一行 JSONL，无 per-hook shell 命令即可对接 SIEM |
| [#5590](https://github.com/Hmbown/DeepSeek-TUI/pull/5590) | CI：在 PR 上跑 Linux 工作区测试 ✅ | 已合并，解决 #5547，重 PR 也跑 nextest/clippy/doctest |
| [#5584](https://github.com/Hmbown/DeepSeek-TUI/pull/5584) | 持久化子代理审批回执 | 关闭 #5543：子代理审批前先落"Asked"，结束前落终态 |
| [#5574](https://github.com/Hmbown/DeepSeek-TUI/pull/5574) | Build Remote Agent 手机配对（gbr/1） | 通过 `gbr-agent pair` 的 QR + 8 位码把手机变成桌面 Agent 的观测端，复用 gbr/1 协议 |
| [#5559](https://github.com/Hmbown/DeepSeek-TUI/pull/5559) | 修复 v0.9.11 pre-tag 真实性与工具输出缺口 ✅ | 工具结果按"凭据形态"脱敏进模型，关闭 #5546 |

---

## 五、功能需求趋势

通过对 Issue 与 PR 的语义聚类，社区与维护者共同聚焦在以下方向：

1. **Provider 中立化（多供应商解耦）**
   - #5588 全面审计 18 处"DeepSeek-only 闸门"，应改为 provider-neutral；
   - #5103 把 `DeepSeekClient`/`deepseek_client` 等遗留命名改为中性类型；
   - #5092/#5093/#5094 重塑 Responses API 协议适配层，引入方言策略表（provider-profiled）。

2. **工具能力扩张（对标 Cursor/IDE 体验）**
   - #3145 引入浏览器/UI 任务的视觉巡检工件（截图、布局、代码上下文）；
   - #3358 Playwright 浏览器自动化工具；
   - #3975/#3980/#3981/#3977 工具面增强：LSP 导航/重构、结构化搜索 + AST 预览、调试器协议面、notebook/archive 一等公民。

3. **架构瘦身与模块边界**
   - #3306 / #3957 / #3954：把 `codewhale-tui` 的 runtime/tool/config/session/hook 路径拆分出来，删除约 87% 集中度；setup 向导、modal 基础设施分模块化。

4. **性能与可靠性护栏**
   - #4326 高并发取消后的 RSS 界定；
   - #4394 compaction 结构化生存契约；
   - #5566 / #5547 CI 与"无人值守运行时"的预算与回归保护（R1：有限 max_steps + 累计墙钟默认）。

5. **本地化与 UX 一致性**
   - #5290 非英文路由控件回归；
   - #5589 Fleet 配置视图交互循环、模型切换埋得太深。

6. **可观测与监督运维（面向长会话）**
   - #5535 一组"监督运维"PR：lifecycle outbox、`/relaunch`、per-session 控制套接字、goal-continuation 静默期修复。

---

## 六、开发者关注点

- **安全与可发布闸门**：v0.9.3 的安全硬化工单 #3368 仍是社区最高互动话题（29 条评论），反映了发布前希望把 CodeQL/advisory/本地集成统一到一个"对外不暴露利用细节"的追踪器。
- **资源未释放与误报区分**：#4326 的反馈显示，开发者不仅关心"内存涨了"，更希望工具能精准区分"分配器高水位保留"与"真正的 worker/runtime 泄漏"。
- **沉默失败的痛点**：#5583（responseSchema 静默丢弃原始输出）、#5582（Degraded 折叠为 Completed）— 多次出现"原本应当让上层知晓的状态被压平"的反馈，开发者期望有原始输出回执与状态保真。
- **首次引导可发现性**：#5563 反馈首次运行时只显示本地/自托管视图并默认选 Ollama，DeepSeek 等托管 API 被"藏在一按键之后"，给用户"只支持本地"的误导印象。
- **CI 在非镜像分支的盲区**：#5547 揭示 `sync-cnb.yml` 只镜像 `work/v*`、`fix/*`、`rebrand/*`、`main`，`codex/*` 等集成分支跳过了 Linux 测试 lane；#5590 已落地修复。
- **交互回路与可发现性**：#5589 反馈 Fleet 配置视图按 Enter 看似回到同一屏、模型切换路径埋得太深，开发者更在意"状态变化可见、路径明确"。
- **多供应商接入成本**：#5588 / #5103 / #5092–5094 三连指向同一痛点——"每加一家新模型服务商都要改代码"，社区期望以"协议方言 + 配置驱动"降低接入门槛。

---

*日报生成依据：过去 24 小时 GitHub Issues（50 条，按评论数排序展示 30 条）与 PR（24 条，按评论数排序展示 20 条）。仅供技术参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*