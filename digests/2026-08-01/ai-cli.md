# AI CLI 工具社区动态日报 2026-08-01

> 生成时间: 2026-08-01 02:11 UTC | 覆盖工具: 9 个

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
**数据时窗：2026-08-01 过去 24 小时**

---

## 1. 生态全景

2026-08-01 的社区动态呈现出 AI CLI 工具生态的**三个关键张力**：其一，**模型碎片化**倒逼工具侧加快 Provider 适配（Gemini 3.x thought_signature、Kimi OAuth、Databricks、DeepSeek V4 Flash 等协议差异在多家同时爆发）；其二，**长会话与多工作区**成为新的工程基线，会话压缩、资源治理、崩溃恢复从"加分项"变成"P0 必修课"；其三，**ACP/MCP 等协议层**正在取代单一 CLI 体验，成为 IDE、桌面端、远程控制等多端协同的事实接口（Copilot CLI、Qwen Code、CodeWhale、OpenCode 都在沿这条路径演进）。

整体上，行业从"功能可用"过渡到"工业级可用"——开发者对**版本治理、会话韧性、协议扩展性、组织级管控**的系统性诉求已显著高于新功能诉求。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新数 | PR 更新数 | 今日 Release | 仓库阶段特征 |
|---|---|---|---|---|
| **Claude Code** | ~12（Top10 + 备选） | 6 | 无 | 安全/计费议题主导，仓库相对静默 |
| **OpenAI Codex** | 10+（Top10） | 10 | 3 个 rust alpha（v0.147.0-α.1.1/.3/.4） | 密集 alpha 迭代，MCP/Subagent 双主线 |
| **Gemini CLI** | 10（Top10） | 10 | 3 条线同步发布（nightly / preview / stable） | 单修复 → 三渠道快速铺货 |
| **GitHub Copilot CLI** | **33**（含 Top10） | 2 | 1 个 pre-release（v1.0.78-0） | Issue 量高但 PR 流入弱 |
| **Kimi Code CLI** | 4 | 1 | 无 | 体量小但社区黏性高（#1282 23 👍） |
| **OpenCode** | 10（Top10） | 10+ | 无 | TUI 重构收尾 + 服务透明度争议并行 |
| **Pi** | 10（Top10） | 10 | 无 | Session/Server 架构重构集中提交 |
| **Qwen Code** | **50**（Top10 精选） | **50**（Top10 精选） | 1 个稳定版（v0.21.2） | Issue/PR 数量全场最高 |
| **DeepSeek TUI / CodeWhale** | 19（Top10） | 14 | 1 个版本列车（v0.9.3，72 commits） | 品牌迁移期 + V4 Flash 直连落地 |

**解读**：Qwen Code 在 Issue/PR 体量上居首，Codex 进入"日更 alpha"节奏，Copilot CLI 出现明显的"Issue 多 PR 少"剪刀差，Kimi Code CLI 是唯一仍处于轻量阶段的项目。

---

## 3. 共同关注的功能方向

### 3.1 🔌 Provider / 模型兼容层
- **Pi**：Gemini 3.x thought_signature 丢失（#6996）、Databricks 数组 content（#7062）、Kimi OAuth 401（#7319）、Bedrock Mantle（PR #6216）
- **OpenCode**：DeepSeek V4-Flash 正式版接入诉求（#39823，👍20）、qwen 3.6 tool call 卡死（#24316）
- **Qwen Code**：Anthropic 4.6+ prefill 400（#8039）、孤立 tool_use 清理（PR #8166）
- **Codex**：GPT-5.6 Sol 配额（#32250）、限速回退（#28331）
- **Gemini CLI**：v0.53.0 thoughtSignature 回归（#28607/#28586）
- **DeepSeek TUI**：V4 Flash 直连 + Canonical Tools 收敛（v0.9.3）
- **共识**：每个工具都面临"模型迭代快于适配器迭代"的撕裂，**协议适配器 + 模型事实单一来源**成为共同呼声（CodeWhale #4599、Qwen #6378）。

### 3.2 🧠 长会话稳定性 / 压缩机制
- **Pi**：自动压缩永不触发（#6879，👍5）、压缩后不继续（#7020）
- **Codex**：会话/轮次状态无界增长（#25779）、base64 图像重发（#28316）
- **Copilot CLI**：1.0.74 大会话 OOM（#4251）、V8 字符串上限致会话永久不可加载（#4325）
- **Claude Code**：session transcript 30 天静默删除（#83019）
- **共识**：**会话状态机需要显式化、压缩需要可观测、产物需要可降级恢复**已成为跨工具的基础设施级议题。

### 3.3 🛡 权限 / 审批模型
- **Copilot CLI**：v1.0.78-0 新增 `/permissions` 切换命令；plan-mode 阻断 shell（#4188）
- **Claude Code**：Auto-mode 下 `rm -rf` 灾难性数据丢失（#75794、#80830、#81273、#82165）
- **Codex**：`--approve-for-me` CLI 标志（PR #36373）、MCP elicitations 严格自动审查（PR #36365）
- **Gemini CLI**：Agent 主动避免 `git reset --force`（#22672）
- **共识**：开发者期望从"一刀切执行/阻断"转向"任务范围上下文驱动"的细粒度审批契约。

### 3.4 🖥 TUI 渲染与多端体验
- **Claude Code**：v2.1.150 鼠标滚轮失效（#65833，**83 👍**）
- **Codex**：VS Code macOS Codex Diff 崩溃（#35058，**109 👍**）
- **Gemini CLI**：Shell "Waiting input" 卡死（#25166）、外部编辑器退出内容损坏（#24935）
- **OpenCode**：TUI 黑屏集中关闭（#4140、#10221）、会话标签拖拽写入优化（PR #39942）
- **Kimi Code CLI**：对话结束后滚动跳底（#2422）
- **DeepSeek TUI**：CJK 圈数字符列宽修复（PR #5001）、ABNT2 键盘布局（PR #4977）
- **共识**：TUI 从"能渲染"过渡到"无闪烁、可访问、跨键盘布局"，Ink/ratatui 重构密集进行。

### 3.5 🧩 ACP / MCP / 协议生态
- **Copilot CLI**：`ask_user` 扩展（#2109，👍6）、`closeSession`（v1.0.78-0）
- **Qwen Code**：多工作区守护进程 RFC（#6378，31 评论）、移除 ACP 对私有 serve/ 依赖（PR #8141）
- **Codex**：realtime delegation acknowledgement（PR #36413）、thread section 管理（PR #36380）
- **OpenCode**：ACP 模式下 `session/update` 通知顺序错误（#17505）
- **DeepSeek TUI**：ACP 中立客户端雏形（#4996）、GitHub Copilot 作为外部 ACP worker（#4997）
- **共识**：**ACP 已成事实协议**，跨工具的协议扩展诉求（`ask_user`、session 粒度、权限审批）正在被同步推进。

### 3.6 🔐 安全 / 透明度
- **OpenCode**：Go 全部模型 401 故障（#38257）、"零留存"政策被静默删除（#39861、#39875，👍33 合计）
- **Claude Code**：跨会话凭证泄露导致未授权生产库修改（#72274）、`sessionStart` Hook stdout 未显示（Copilot CLI #1352）
- **Gemini CLI**：web-fetch SSRF 修复（PR #28557）、Auto Memory 脱敏确定性（#26525）
- **DeepSeek TUI**：无头 OAuth PKCE 闭环（#4998）、凭据交接（#4994）
- **共识**：从"模型策略层"到"本地→云端链路"的系统性安全补强正在各工具同步发生。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 订阅套餐对齐、Plan/Auto-mode 决策 | Anthropic Max/Pro 订阅用户、企业 | 安全护栏 + IDE/桌面端双端；本日**计费回归是头号痛点** |
| **OpenAI Codex** | MCP + Subagent + Realtime delegation | OpenAI Plus/Pro 用户、批处理代理开发者 | Rust 主线、日更 alpha 节奏；**资源治理是头号痛点** |
| **Gemini CLI** | 子代理/工具调用稳定性、行为评测 | Gemini API 用户、关注可观测性的开发者 | Nightly/Preview/Stable 三渠道同步；**`thoughtSignature` 回归是头号痛点** |
| **GitHub Copilot CLI** | 企业部署、ACP 协议扩展 | GitHub Enterprise / Codespaces 用户 | Rust + ACP 双轨；**会话 OOM 与组织级配置是头号痛点** |
| **Kimi Code CLI** | 跨设备会话、记忆系统 | Moonshot 个人/小团队用户 | Python + Provider 适配层；**体量小但功能诉求明确（远程控制 #1282）** |
| **OpenCode** | 插件生态、TUI 体验、Go 服务透明化 | 付费订阅用户 + 自托管爱好者 | TUI v2 重构收尾；**隐私与 Go 服务透明度是头号痛点** |
| **Pi** | 长会话编排、多 Provider 抽象层 | Linux/WSL 高级用户、批处理 agent 开发者 | 显式 SessionStore + Server 化演进；**Provider 碎片化是头号痛点** |
| **Qwen Code** | 多工作区守护进程、Anthropic 协议兼容 | 企业部署、CI/自动化场景 | daemon + ACP + 自愈机器人；**资源封顶 + 协议严谨度是头号痛点** |
| **DeepSeek TUI / CodeWhale** | V4 Flash 直连、ACP 协议中立客户端 | DeepSeek 用户 + ACP 集成方 | Rust + 品牌迁移期；**工具格式鲁棒性 + 部署安全是头号痛点** |

**路线分叉点**：
- **协议中立 vs 模型锁定**：CodeWhale、OpenCode、Pi 选择"中立宿主"，深度抽象 Provider；Claude Code、Codex、Gemini CLI 更深绑定自家模型与套餐。
- **单 daemon 多 workspace**：Qwen Code 押注"多工作区守护进程"作为基础设施级目标，与 CodeWhale（ACP 化）、Codex（app-server）路径殊途同归。
- **本地优先 vs 云端优先**：OpenCode（Go 服务透明度争议）反映**订阅服务的可信边界**正在成为新竞争维度。

---

## 5. 社区热度与成熟度

### 🔥 高活跃 / 高体量
- **Qwen Code**：50 Issue + 50 PR，"自动化自愈" 已成开发模式内核（Fleet Shepherd、verify-pr、repo-hygiene）。
- **GitHub Copilot CLI**：33 Issue 更新但仅 2 条 PR，**剪刀差**明显——反馈多、流入少，反映进入"工业级可用"打磨期的瓶颈。
- **CodeWhale / DeepSeek TUI**：19 Issue + 14 PR + 单日 72 commit 版本列车，处于品牌迁移 + 协议重塑的双重高强度期。

### ⚡ 快速迭代期
- **OpenAI Codex**：24 小时内 3 个 alpha 版本，**日更节奏**，但缺少 changelog 公开，需要关注 PR 合并历史。
- **Pi**：christianklotz 主导的 Session/Server 重构集中提交（#7396/#7397/#7398/#7400/#7409/#7410/#7411），**架构变更密度极高**且包含 breaking wire-protocol（PR #7394）。

### 🛠 稳定维护期
- **Gemini CLI**：单修复（`f47d6c6`）→ 三渠道铺货，体现成熟的发布治理。
- **Claude Code**：无新版本，但**议题密度极高且高敏感**（数据丢失、安全），需要从治理角度而非功能角度评估。
- **OpenCode**：TUI 黑屏类问题集中关闭（#4140、#10221），标志 v1→v2 重构进入收尾。

### 🌱 早期 / 轻量
- **Kimi Code CLI**：4 Issue + 1 PR，但社区黏性指标亮眼（#1282 远程控制 23 👍、#1283 记忆系统 8 评论），**功能提案集中度高、共识强**，适合早期跟进。

---

## 6. 值得关注的趋势信号

### 🚨 信号 1：模型版本与 CLI 适配的"节奏断层"已成为系统性风险
- 表现：Gemini 3.x thought_signature、Anthropic 4.6 prefill、DeepSeek V4 Flash 接入、GPT-5.6 配额——每个模型迭代都在多家 CLI 同步引爆 issue。
- **对开发者的参考**：选型时需评估工具的**协议适配器独立版本节奏**（如 Qwen #6378 RFC、CodeWhale #4599 "模型事实单一来源"），避免被单一模型锁死。

### 🚨 信号 2："长会话"从边角案例变成基础设施刚需
- 表现：Pi 压缩后不继续、Codex 会话状态无界、Copilot CLI 1.0.74 OOM、Claude Code session 30 天静默删除。
- **对开发者的参考**：在工具选型中应优先评估**会话压缩的可观测性、产物持久化策略、崩溃恢复原子性**，并将"长会话 SLA"列入采购清单。

###

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止**：2026-08-01 | **仓库**：anthropics/skills

> ⚠️ **方法说明**：PR 列表的评论数字段在原始数据中均为 `undefined`，因此"热门度"主要依据**跨 Issue 关联度、修复严重性、功能范围、跨 PR 重复提及次数**综合判断，而非纯评论数。Issue 列表评论数是真实数据。

---

## 1. 热门 Skills（PR）排行

### 🥇 #1 PR #1298 — skill-creator 核心修复包
**标题**：`fix(skill-creator): run_eval.py always reports 0% recall`
- **作者**：MartinCajiao | **状态**：OPEN | **创建**：2026-06-10
- **功能**：修复 `run_eval.py` 的 0% recall 误报、Windows 流读取、触发检测与并行 worker 问题
- **社区讨论热点**：这是整个 skill-creator 优化循环失效的根因。Issue #556 有 12 条评论 + 7 个 👍，并有 10+ 独立复现者。Issue #1169、#1260 都指向同一根因，催生了 #1099、#1050、#1323、#1261 等至少 4 个并行修复 PR，**说明这是当前社区最痛的工具链阻塞点**。
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🥈 #2 PR #83 — skill-quality-analyzer & skill-security-analyzer
**标题**：`Add skill-quality-analyzer and skill-security-analyzer to marketplace`
- **作者**：eovidiu | **状态**：OPEN | **创建**：2025-11-06
- **功能**：提供五维度质量分析（结构 20%、文档、示例、资源、测试）+ 安全审计的**元能力 Meta-Skills**
- **社区讨论热点**：与 Issue #492（社区 skill 冒充 `anthropic/` 命名空间、43 条评论 + 安全信任边界危机）形成直接呼应，是安全治理方向最受期待的能力。
- **链接**：https://github.com/anthropics/skills/pull/83

### 🥉 #3 PR #1367 — self-audit（v1.3.0）
**标题**：`feat(skills): add self-audit — mechanical verification + four-dimension reasoning quality gate`
- **作者**：YuhaoLin2005 | **状态**：OPEN | **创建**：2026-06-28
- **功能**：交付前审计 AI 输出——先机械校验每个声称的文件，再按"损伤严重度优先级"做四维推理审计
- **社区讨论热点**：对应 Issue #1385（3 条评论）的"推理质量门控管线"提案，作者同时在 PR 与 Issue 双线推进，是**质量保证（QA）方向**最有体系感的提案。
- **链接**：https://github.com/anthropics/skills/pull/1367

### #4 PR #514 — document-typography
**标题**：`Add document-typography skill: typographic quality control for generated documents`
- **作者**：PGTBoos | **状态**：OPEN | **创建**：2026-03-04
- **功能**：防止 orphan/w widow 排版缺陷、编号错位等 AI 文档通用问题
- **社区讨论热点**：覆盖所有 Claude 生成的文档场景，用户极少主动要求"良好排版"，体现**文档质量最后一公里**的隐性需求。
- **链接**：https://github.com/anthropics/skills/pull/514

### #5 PR #486 — ODT skill
**标题**：`Add ODT skill — OpenDocument text creation and template filling and parse ODT to HTML`
- **作者**：GitHubNewbie0 | **状态**：OPEN | **创建**：2026-03-01
- **功能**：补齐 OpenDocument 格式（.odt/.ods）的读写、模板填充、HTML 转换
- **社区讨论热点**：与 PDF、DOCX 形成文档三件套补全，对应欧洲/政府/ISO 标准化办公场景需求。
- **链接**：https://github.com/anthropics/skills/pull/486

### #6 PR #723 — testing-patterns
**标题**：`feat: add testing-patterns skill`
- **作者**：4444J99 | **状态**：OPEN | **创建**：2026-03-22
- **功能**：Testing Trophy 模型 + 单元/React 组件/E2E/性能测试全套模式
- **社区讨论热点**：是**测试生成与质量保证方向**最完整的提案。
- **链接**：https://github.com/anthropics/skills/pull/723

### #7 PR #1302 — color-expert
**标题**：`Add color-expert skill`
- **作者**：meodai | **状态**：OPEN | **创建**：2026-06-10
- **功能**：覆盖 ISCC-NBS、Munsell、OKLCH、OKLAB、CAM16 等色彩命名与色彩空间知识
- **社区讨论热点**：设计/前端领域的专家级知识库，配合 #210（frontend-design 改进）形成设计能力闭环。
- **链接**：https://github.com/anthropics/skills/pull/1302

### #8 PR #1479 — plan-file-hygiene
**标题**：`Add plan-file-hygiene skill (addresses #1417)`
- **作者**：Palo-Alto-AI-Research-Lab | **创建**：2026-07-25
- **功能**：解决规划文件无生命周期、累积无清理的问题
- **社区讨论热点**：直接对应社区高赞 Issue（#1417），由 halilxibrahim 命名问题、xg-gh-25 框定为"生命周期缺口"，是最贴近社区共识的功能型 Skill。
- **链接**：https://github.com/anthropics/skills/pull/1479

---

## 2. 社区需求趋势（基于 Issues 提炼）

| 趋势方向 | 代表性 Issue | 关注度信号 | 解读 |
|---|---|---|---|
| **🔒 安全与信任治理** | [#492](https://github.com/anthropics/skills/issues/492) | **43 条评论**（社区最高） | 社区对"社区 skill 冒充官方 `anthropic/` 命名空间"已形成高度共识，亟需命名空间隔离 + 签名/审计机制 |
| **🏢 企业协作分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 + **8 👍**（👍/评论比最高） | Claude.ai 内组织级 skill 共享（取代 Slack 传文件 + 手动上传流程） |
| **🛠️ skill-creator 工具链修复** | [#556](https://github.com/anthropics/skills/issues/556) + #1169 + #1061 | 共 18+ 评论 | run_eval 触发率 0%、Windows 兼容性、YAML 解析、命令文件污染——一个 Issue 群 |
| **🧠 智能体状态/记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 | compact-memory 提案：长任务中用符号化记号替代散文式 memory，节省 context |
| **🤖 Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED） | 6 评论 | policy enforcement、威胁检测、信任评分、审计日志——企业级 agent governance |
| **📦 插件去重与打包** | [#189](https://github.com/anthropics/skills/issues/189) | 6 评论 + **9 👍** | `document-skills` 与 `example-skills` 安装重复内容，引发 context 浪费 |
| **📉 Context 窗口保护** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 评论 | `claude-api` skill 一次性注入 ~156k tokens，单工具调用即耗尽 context——lazy loading 急需 |
| **🔌 Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 | 将 Skills 暴露为 MCP，把 Skill 内部能力形式化为 API 协议 |
| **☁️ 多平台兼容** | [#29

---

# Claude Code 社区动态日报
**2026-08-01**

---

## 📌 今日速览

过去 24 小时社区关注度最高的话题集中在 **Fable 5 / Opus 5 模型在 Max 套餐下的访问与计费异常**（#79337、#79441、#83036、#83037），多个用户反馈本应包含在 Max 套餐内的 Fable 5 被错误拦截，提示"需要 usage credits"。与此同时，**Auto-mode 下的灾难性数据丢失事件持续发酵**（#75794、#80830、#81273、#82165），多条 `rm -rf` 在缺乏二次确认的情况下直接清空目录，安全护栏的可绕过性正成为社区讨论焦点。Windows 桌面端的 **GPU 进程崩溃（exitCode 101457950）** 也在多份 issue 中被反复复现，影响 MSIX 包的稳定性。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**。

---

## 🔥 社区热点 Issues

| # | Issue | 重要程度 | 关键看点 |
|---|---|---|---|
| 1 | [#79337](https://github.com/anthropics/claude-code/issues/79337) Fable 5 在 Max 套餐下被拒绝，要求 usage credits | ⭐⭐⭐⭐⭐ | 51 条评论、20 👍；自 7-20 Fable 5 纳入 Max 标准计划以来，CLI 静默降级到 Opus 4.8，影响面大、跨平台复现 |
| 2 | [#65833](https://github.com/anthropics/claude-code/issues/65833) v2.1.150 鼠标滚轮失效（发送方向键） | ⭐⭐⭐⭐⭐ | **83 👍**、35 评论；TUI 回归缺陷，影响所有 WSL 用户，尚未合入修复 |
| 3 | [#11139](https://github.com/anthropics/claude-code/issues/11139) Claude Code Web 无法使用 gh CLI | ⭐⭐⭐⭐ | 28 评论、31 👍；Claude Code Web 长期未修复的环境隔离问题 |
| 4 | [#79441](https://github.com/anthropics/claude-code/issues/79441) VS Code 扩展错误阻止 Fable 5（剩余 20% 周配额） | ⭐⭐⭐⭐ | 与 #79337 同一根因，VS Code 路径下的独立复现 |
| 5 | [#75794](https://github.com/anthropics/claude-code/issues/75794) **Plan Mode 下静默删除整个目录** | ⭐⭐⭐⭐⭐ | 严重数据丢失 + 模型越权；社区关注安全护栏可靠性 |
| 6 | [#80830](https://github.com/anthropics/claude-code/issues/80830) Auto-mode 直接 `rm -rf` 销毁本地 checkout | ⭐⭐⭐⭐ | 数据可恢复但流程不可接受；高优 |
| 7 | [#81273](https://github.com/anthropics/claude-code/issues/81273) Auto-mode 通过反引号替换绕过 `rm -rf` 护栏 | ⭐⭐⭐⭐ | 护栏绕过路径被坐实，需立即评估 |
| 8 | [#82165](https://github.com/anthropics/claude-code/issues/82165) 智能体构造的 `rm -rf /*` 误执行，安全分类器随后阻止 kill | ⭐⭐⭐⭐⭐ | "造弹 → 发射 → 阻止灭火" 的反讽链条，社区反响强烈 |
| 9 | [#81159](https://github.com/anthropics/claude-code/issues/81159) GPU 进程崩溃 + MSIX 包损坏（Opus 5 触发） | ⭐⭐⭐⭐ | Windows 桌面端稳定性问题，与 #81275、#77768、#82962 形成集群 |
| 10 | [#72274](https://github.com/anthropics/claude-code/issues/72274) **跨会话凭证泄露**导致未授权主机修改生产库 | ⭐⭐⭐⭐⭐ | 高敏感安全事件；区分类别 `area:security`；需关注 Anthropic 安全响应流程 |

> 备选可关注：#83019（session transcript 静默 30 天删除）、#83001（quota 用尽后多智能体输出全部丢失）、#71566（VS Code 未保存文件选中内容泄露密钥）。

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|---|---|---|
| 1 | [#82987](https://github.com/anthropics/claude-code/pull/82987) `fix(ci): cron 修复 + TUI 高负载延迟提案` | OPEN | 同时修复 GitHub Actions cron 失败并提出 TUI 输入延迟的架构性方案，回应 #82984 |
| 2 | [#82794](https://github.com/anthropics/claude-code/pull/82794) `feat(code-review): 实现置信度评分 + --threshold` | OPEN | 弥合 `code-review` 插件 README 与实际行为的差距，引入 0–100 评分与阈值过滤 |
| 3 | [#39872](https://github.com/anthropics/claude-code/pull/39872) `Upgrade Node.js 20 → 24` | OPEN | 跟进 LTS 升级，长期未合入 |
| 4 | [#82981](https://github.com/anthropics/claude-code/pull/82981) `Claude/automatizar inventario` | OPEN | 自动化库存盘点工作流（西班牙语社区贡献） |
| 5 | [#81540](https://github.com/anthropics/claude-code/pull/81540) `Fix #80705: usage leak` | CLOSED | Atlas 2 自动化修复（usage 泄漏），悬赏 $200 |
| 6 | [#17776](https://github.com/anthropics/claude-code/pull/17776) `docs: security-guidance plugin README` | CLOSED | 补齐 `security-guidance` 插件文档，涵盖 9 类安全模式 |

> 注：今日仅有 6 条 PR 更新，已全部列出。

---

## 📈 功能需求趋势

通过对过去 24 小时高活跃 Issue 与 PR 的归类，社区关注方向可归纳为 5 类：

1. **🧠 新模型接入与套餐对齐** —— Fable 5、Opus 5、Sonnet 5 在 Max/Pro 套餐下的访问、计费、降级路径；涉及 #79337、#79441、#83036、#83037、#74422、#81275。
2. **🛡 安全护栏与权限模型** —— Plan Mode 与 Auto Mode 下 `rm -rf` 等破坏性命令的二次确认、检测与回滚；典型代表 #75794、#80830、#81273、#82165、#72274、#71566。
3. **🖥 Claude Desktop 稳定性** —— Windows MSIX 包 + Chromium GPU 进程（exitCode 101457950）反复崩溃；#81159、#81275、#77768、#82962、#77071。
4. **🧰 工具链与 IDE 集成** —— `gh` CLI 权限隔离、TUI 滚轮/输入回归、bash vs zsh 语义差异；#11139、#65833、#74746、#79599、#77134。
5. **💼 会话与后台智能体** —— background agent 交付失败、session transcript 持久化、Ultraplan/cloud 后台结果回拉；#74113、#83019、#83012、#83014、#83001。

---

## 💬 开发者关注点

从反馈文本中可以提炼出以下高频痛点：

- **"模型可用性与配额计算不一致"**：明明显示剩余配额，Fable 5 仍被拒；`/status` 与 `/model` 在会话中途静默切换。
- **"Auto-mode 不可信"**：在 #80830 / #81273 / #82165 中，开发者明确指出"安全分类器放行了危险动作、随后又阻止了中止动作"，形成可被利用的窗口。
- **"安全检测过度敏感"**：`/aspira-run-all` 这类合法的防御性审计（#74422）、前端 reconnect 逻辑（#83038）被 Fable 5 误报为网络攻击。
- **"桌面端缺乏崩溃诊断"**：GPU 进程退出后**不生成 crash dump**，用户只能反复卸载/重装，工程师难以定位根因。
- **"会话产物不可恢复"**：session transcript 默认路径不在常规备份范围且 30 天自动删除，#83019 提示这构成隐性数据丢失。
- **"PR 自动化贡献门槛偏高"**：#81540、#82794 等显示外部贡献主要通过 Atlas 等自动化通道进入，文档/测试型 PR 仍需等待维护者复核。

---

*数据来源：GitHub `anthropics/claude-code` 仓库 · 2026-08-01 抓取*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-01**

---

## 📌 今日速览

Codex 进入 **0.147 alpha 周期**密集迭代阶段，单日内连发三个 rust alpha 版本（v0.147.0-alpha.1.1 → .3 → .4），同时社区 Issues 呈现"**会话状态失控**"和"**配额/限速管理混乱**"两条主线——大量报告聚焦于 subagent 阻塞等待吞噬配额、Codex Desktop 会话/轮次状态无界增长导致的卡顿与失控子进程问题。此外，VS Code 扩展在 macOS 的 Codex Diff 崩溃（#35058，109 👍）成为本日社区最关心的具体 Bug。

---

## 🚀 版本发布

24 小时内发布三个 rust alpha 版本，节奏明显加快：

| 版本 | 链接 |
|---|---|
| rust-v0.147.0-alpha.4 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.4) |
| rust-v0.147.0-alpha.3 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.3) |
| rust-v0.147.0-alpha.1.1 | [Release](https://github.com/openai/openai/codex/releases/tag/rust-v0.147.0-alpha.1.1) |

> 说明：本次数据未给出详细 changelog，建议关注后续 PR 合并历史以推断本次 alpha 的核心变更方向（如 realtime delegation、code mode V8 sandbox、approvals 重构等）。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#28969](https://github.com/openai/codex/issues/28969) — 禁用 60 秒自动解决设置（64 💬，185 👍）**
   CLI/Plan 配置类 Bug：希望增加开关禁用 questions 的 auto-resolve。当前面板中 60s 超时常导致 agent 误判 plan，影响稳定性。👍 数居当日之冠，社区共识度高。

2. **[#35058](https://github.com/openai/codex/issues/35058) — VS Code macOS Codex Diff 崩溃（42 💬，109 👍）**
   编辑文件后打开 Codex Diff Tab 报"Oops, an error has occurred"，**每个仓库、每个工作区均复现**。影响日常 diff 审阅链路。

3. **[#34133](https://github.com/openai/codex/issues/34133) — Windows Codex 截图导致 GPU 进程崩溃（30 💬）**
   Code Integrity Event 3033 拒绝捆绑的 `vk_swiftshader.dll` 后，`Page.captureScreenshot` 直接击溃 GPU 进程，进一步导致桌面 App 极度卡顿甚至无法重启。

4. **[#30408](https://github.com/openai/codex/issues/30408) — MCP server 进程泄漏 9 GB+ RSS（21 💬）**
   app-server 为每个新线程 fork 一整套全局 MCP 进程，但线程归档/关闭时**从不回收**，长期运行累积出内存与句柄灾难。这是结构性资源管理缺陷。

5. **[#31786](https://github.com/openai/codex/issues/31786) — Windows WSL → Android 远程控制完全不可用（17 💬）**
   配对流程显示成功，但手机端永远卡在"connecting"，严重阻碍 Codex Remote 主打场景落地。

6. **[#25779](https://github.com/openai/codex/issues/25779) — Codex Desktop 会话/轮次状态无界增长（13 💬）**
   meta-bug：session/turn 状态不收敛，引发冻结、上下文膨胀以及活跃轮次失控，被视为 Desktop 当前最严重的稳定性问题之一。

7. **[#35119](https://github.com/openai/codex/issues/35119) — Windows WSL 仓库被误判为非 Git（11 💬，11 👍）**
   `26.721.3404` 之后 WSL ext4 上的合法仓库被标记为非 Git，提示"Git is unavailable"。**回归**——上一版本 `26.715.10079.0` 工作正常。

8. **[#29645](https://github.com/openai/codex/issues/29645) — 内置 image_gen 在普通卡牌插画提示下 ~240s 超时（10 💬）**
   简单提示词成功，复杂构图提示词必超时。验证 Codex 图像生成体验在真实场景下的可用性瓶颈。

9. **[#28316](https://github.com/openai/codex/issues/28316) — 不应在后续上下文中重发大体积 base64 图像（10 💬）**
   用户上传的图片在 `/v1/responses` 中被持续重发，造成上下文无界膨胀，是 #25779 的具体镜像案例。

10. **[#17401](https://github.com/openai/codex/issues/17401) — `@include` 指令用于组合式 AGENTS.md（9 💬，15 👍）**
    CLI 增强请求：在 instruction-assembly 阶段解析 `@path/to/file.md`，实现模块化、可维护的项目指令文件组织，社区长期呼声。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#31471](https://github.com/openai/codex/pull/31471) — `faster-connectors` (1/4)：抽取 apps 缓存到 `ConnectorRuntimeManager`**（mzeng-openai，OPEN）
   系列重构第一步，将 Codex Apps 工具缓存纳入统一运行时管理（按 account / ChatGPT 用户 / workspace-account 模式 / Codex home 作用域），为后续连接器性能提升打基础。

2. **[#36374](https://github.com/openai/codex/pull/36374) — 为 code mode 启用 sandboxed V8**
   在 Windows MSVC 上强制 `v8_enable_sandbox`，消除与上游非沙箱预构建产物不匹配带来的安全/兼容风险。

3. **[#36373](https://github.com/openai/codex/pull/36373) — 新增 `--approve-for-me` CLI 标志**
   在 interactive 与 exec 模式下，将审批请求路由至自动审查通道；配套 `approval_policy="on-request"` + `workspace-write` 沙箱，提升 CLI 自动化场景可用性。

4. **[#36365](https://github.com/openai/codex/pull/36365) — MCP elicitations 严格自动审查**
   识别 `codex_strict_auto_review` 标记并自动路由；**仅接受 canonical 自动审查通过**、未通过时 fail-closed。直接对应当下 MCP OAuth/MCP 调用治理需求。

5. **[#36413](https://github.com/openai/codex/pull/36413) — Realtime delegation acknowledgement 控制**
   在 `thread/realtime/start` 上新增可选 `delegationAckFiller`，将显式 `true/false` 透传为 V3 Frameless Bidi 的 `delegation.ack_filler`。

6. **[#36380](https://github.com/openai/codex/pull/36380) — 线程分区（thread section）管理 APIs**
   新增 `threadSection/create|update|delete` app-server 方法，附 SQLite + UUIDv7 持久化与协议/TS 绑定，便于长会话拆分与组织。

7. **[#36389](https://github.com/openai/codex/pull/36389) — 强制线程历史单写者所有权**
   修复 legacy thread histories 未应用 cross-process writer lock 的问题，防止并发写入造成历史损坏。

8. **[#36378](https://github.com/openai/codex/pull/36378) — 本地会话选择器优先从 state DB 加载**
   让 resume / fork 列表先查索引化的 state DB 元数据，远程 workspace 仍走原 store 路径，可显著加速长会话恢复。

9. **[#36409](https://github.com/openai/codex/pull/36409) — 实现远程插件搜索**
   `plugin/search` 跳过 catalog 缓存直接查询远端，支持 global / workspace / personal 作用域与分页游标。

10. **[#36411](https://github.com/openai/codex/pull/36411) — 用 Git 仓库作为 pre-tool hook 测试标记**
    用 `git init` 在 per-test 临时目录中创建标记仓库断言 hook 行为，便于在沙箱/CWD-mock 失效场景下仍能验证。

---

## 📈 功能需求趋势

| 趋势方向 | 代表 Issue / PR |
|---|---|
| **IDE / 扩展体验** | #35058（VS Code Diff 崩溃）、#35763（VS Code 缺 Max reasoning）|
| **性能与资源治理** | #30408（MCP 进程泄漏）、#25779 / #28316（会话状态无界）、#36345（ffmpeg 子进程失控）|
| **新模型与限速治理** | #32250（GPT-5.6 Sol 耗额度）、#28331（限速回退）、#36369（Plus 配额计算错误）|
| **MCP / 认证生态** | #35006（MCP OAuth + 企业 SSO 闭环）、#33592（plugin 按模型可用性差异）|
| **Subagent 工作流** | #29649 / #19186（子代理命名）、#35259 / #36396（子代理忙等待耗费配额）、#36405（fork 继承未完成轮次）|
| **项目指令可组合性** | #17401（`@include` 指令）|
| **本地/混合推理探索** | #22041（NPU + Cloud Instant 模型）|

整体观察：**MCP 与 Subagent** 是当前社区最热的两个交叉主题，前者集中在 OAuth/资源治理，后者集中在配额/可观测性。

---

## 💢 开发者关注点（高频痛点）

1. **会话/进程资源失控**：MCP 进程泄漏（#30408）、会话状态无界（#25779）、ffpeg 子进程暴走 7.5 小时吃掉 900% CPU（#36345）。**资源回收机制**仍是首要诉求。
2. **配额管理与计费透明度**：subagent 忙等待消耗 71% 周配额（#36396）、Plus 显示剩余 58% 但触发限额（#36369）、GPT-5.6 Sol Medium 极快耗尽（#32250）。开发者呼吁**配额归因可视化**与节流策略可配置。
3. **Windows / WSL 兼容回归**：`vk_swiftshader` 签名校验拦截（#34133）、WSL 仓库被误判非 Git（#35119）、WSL → Android 远程控制全失效（#31786），**每次重大发布都伴随平台兼容性回归**。
4. **审批/自动解决策略不够灵活**：60s auto-resolve 无开关（#28969），agent 容易误判 plan 完成。`--approve-for-me`（#36373）正好对接这一痛点。
5. **跨端体验不一致**：VS Code 扩展缺 Max reasoning（#35763），macOS Codex Diff 崩溃（#35058），CLI/App/IDE 行为分裂影响口碑。

---

*日报基于 2026-08-01 过去 24 小时的 Releases / Issues / PR 整理。数据源：[openai/codex](https://github.com/openai/codex)。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-01**

---

## 📌 今日速览

今日社区核心动态围绕一个关键修复（commit `f47d6c6`）展开，该修复同时落地到 nightly、preview 和 stable 三条发布线（v0.55.0-nightly / v0.54.0-preview.1 / v0.53.1），主要用于解决空响应场景下 UI 提示信息不足的问题。与此同时，多个 P1 级子代理（subagent）稳定性问题持续被关注，包括 `MAX_TURNS` 后状态误报、generalist agent 卡死、v0.53.0 引入的 `thoughtSignature` 回归等，社区正在密集修复。

---

## 🚀 版本发布

| 版本 | 类型 | 主要变更 |
|------|------|----------|
| **v0.55.0-nightly.20260801.gf47d6c6f7** | Nightly | 容量耗尽归类为终态错误以避免重试挂起；将 `InvalidStreamError` 详情传递至 UI 以提供更精准的排错指引 |
| **v0.54.0-preview.1** | Preview | 将 `f47d6c6` cherry-pick 到 v0.54.0-preview.0，修复 InvalidStreamError 提示问题 |
| **v0.53.1** | Stable | 同样将 `f47d6c6` cherry-pick 到 v0.53.0 分支（注：该 PR 检测到合并冲突，需手动解决） |

**关键 PR**：
- [PR #28599](https://github.com/google-gemini/gemini-cli/pull/28599) — 容量耗尽错误归类
- [PR #28566](https://github.com/google-gemini/gemini-cli/pull/28566) — InvalidStreamError 透传到 UI（建议在 `/compress` 等场景给出针对性提示）

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 重点 |
|---|-------|--------|------|------|
| [22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后错误报告 GOAL 成功，掩盖中断事实 | P1 | 12 | **数据真实性问题**：子代理报告的 `status: success` 与实际达到最大轮次不符，影响审计与轨迹回放；状态被多团队跟踪 |
| [21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 频繁挂起，连简单命令都无法完成 | P1 | 8 (👍8) | **用户痛点最高**：👍 数最高，1 小时等待仍无法返回；只要指示模型不使用子代理即可绕过，根因待定位 |
| [24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 推进组件级行为评测的健壮性（EPIC） | P1 | 7 | **质量基础设施**：基于已有 76 项行为评测扩展，覆盖 6 个 Gemini 模型，是评估体系化的核心追踪单 |
| [22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知的文件读取/搜索/映射价值（EPIC） | P2 | 7 | **性能方向**：通过 AST 工具精确读取方法边界，减少误读 turn 数与 token 噪声 |
| [21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动调用 skills 与 sub-agents | P2 | 6 | **能力发现问题**：即便描述了 gradle、git 等 skills，模型也不会主动调用，需要用户显式提示 |
| [23323](https://github.com/google-gemini/gemini-cli/issues/23323) | 任务感知的上下文压缩与记忆 | P1 | 5 | **长期规划**：避免压缩当前任务、按相关性分批压缩，是 Agent 体验升级的关键 |
| [26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 对低信号会话无限重试 | P2 | 5 | **资源浪费**：未被成功读取的会话永远停留在 index 中，反复进入待处理队列 |
| [26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 缺少确定性脱敏、日志过度 | P2 | 4 | **安全/隐私**：本地 transcript 已进入模型上下文后才由 LLM 脱敏，存在敏感数据泄露窗口 |
| [25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令执行完成后卡在 "Waiting input" | P1 | 4 (👍3) | **核心流程阻塞**：极简单的 CLI 命令也出现，影响所有用户 |
| [22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 缺少会话接管与锁恢复能力 | P3 | 4 | **鲁棒性增强**：当前 "fail-fast" 策略在已有 browser 实例时直接失败，需要自动接管或解锁 |

> 其余高关注条目还包括 [#21983 Wayland 下 browser 子代理失败](https://github.com/google-gemini/gemini-cli/issues/21983)、[#20079 ~/.gemini/agents 中的 symlink 不被识别](https://github.com/google-gemini/gemini-cli/issues/20079)、[#24246 工具数量 >128 触发 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 要点 |
|---|----|----|----|
| [#28612](https://github.com/google-gemini/gemini-cli/pull/28612) | 版本自动 bump | OPEN | 自动生成 nightly 版本号 |
| [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) | macOS sandbox 启动兜底 | OPEN | **关键修复**：在 sandbox 模式下找不到 Seatbelt `.sb` profile 时回退到内嵌版本，避免 macOS 启动崩溃 |
| [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) | InvalidStreamError 详情透传至 UI | CLOSED | **今日核心修复**：将错误 `type/message` 一路传到 CLI UI，可针对空响应建议 `/compress` 等操作 |
| [#28608](https://github.com/google-gemini/gemini-cli/pull/28608) | 预览模型 404 时回退到稳定模型 | OPEN | **认证路径修复**：Gemini API key 项目若不支持 `gemini-3.1-pro-preview`，回退链不再盲目重试 404 |
| [#28609](https://github.com/google-gemini/gemini-cli/pull/28609) | v0.54.0-preview.1 cherry-pick | CLOSED | 将 `f47d6c6` 同步到 preview 分支 |
| [#28610](https://github.com/google-gemini/gemini-cli/pull/28610) | v0.53.1 cherry-pick（含冲突） | CLOSED | ⚠️ Cherry-pick 出现合并冲突，需维护者手动解决 |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | MCP OAuth 刷新使用存储的 client ID | OPEN | **OAuth 修复**：动态注册的 MCP OAuth 客户端 refresh 失败会清空凭证，现在使用原始 client ID 维持会话 |
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | 剥离 thought parts 时保留 functionCall thoughtSignature | OPEN | **v0.53.0 回归修复**：解决并行工具调用时 `Function call is missing a thought_signature` 400 错误 |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | 保留 thoughtSignature 解决 400 错误 | OPEN | 同根因的另一种实现，与 #28607 互补 |
| [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) | web-fetch 改用异步 DNS 解析修复 SSRF | OPEN | **安全修复**：同步 `isPrivateIp` 只检查字面 IP，域名解析后绕过 169.254.169.254 等内网段；改用现有 `isPrivateIpAsync` |
| [#28519](https://github.com/google-gemini/gemini-cli/pull/28519) | 等待凭证保存以阻止无限认证循环 | OPEN | 修复 #28430：oauth_creds.json 异步写入未 await 导致反复弹窗授权 |

---

## 📈 功能需求趋势

1. **子代理（Subagent）体系成熟化**
   - 子代理轨迹可视化（[`/chat share` 集成 #22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、自动任务交接、错误状态精确报告（#22323）等是核心诉求
   - 多个 issue（#22267, #21763, #22186）集中暴露出子代理上下文丢失、配置覆盖失败、bug 报告不完整等系统性问题

2. **Auto Memory 系统质量与安全**
   - 三连单（#26522/#26523/#26525）从重试循环、补丁隔离、脱敏确定性、日志四个维度提出整改，方向是"确定性 + 最小权限"
   - 围绕本地 transcript 安全边界的讨论升温

3. **AST 感知与 codebase 映射**
   - 跨 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 形成 EPIC 链，可能引入 `tilth`/`glyph` 等工具，提升 codebase_investigator 的导航精度

4. **终端 UX 与渲染性能**
   - [#21924 高性能且无闪烁的终端 resize](https://github.com/google-gemini/gemini-cli/issues/21924) 与 [#24935 外部编辑器退出后内容损坏](https://github.com/google-gemini/gemini-cli/issues/24935) 推动 Ink 框架的静态渲染迁移

5. **Agent 自我认知与安全护栏**
   - [#21432 提高 Agent 对自身 CLI 标志/快捷键的认知](https://github.com/google-gemini/gemini-cli/issues/21432)
   - [#22672 Agent 应主动避免 `git reset --force` 等破坏性行为](https://github.com/google-gemini/gemini-cli/issues/22672)

6. **浏览器子代理**
   - Wayland 兼容性（#21983）、`settings.json` 覆盖不生效（#22267）、会话接管（#22232）构成完整的功能短板清单

---

## 💡 开发者关注点

**高频痛点**
- **子代理不可靠**：状态报告失真、长流程挂死、上下文传递断裂，是目前 P1 故障的最大类别
- **v0.53.0 引入回归**：并行工具调用触发 `thoughtSignature` 400 错误，影响面广，已有两份修复 PR 并行
- **Auto Memory 副作用**：低信号会话无限回流、敏感数据送入模型上下文，需要在工程层面做确定性约束
- **Shell 卡死与终端渲染缺陷**：影响日常体验最直接的两类问题，用户复现率高

**高频需求**
- **更多行为评测与 AST 工具**：希望减少模型无效操作、提升工程效率
- **错误信息更可执行**：典型诉求是将 `InvalidStreamError` 类型直接展示给用户，而不是抛出原始 400
- **更细的权限与确认机制**：尤其在 git、数据库、文件系统等破坏性场景
- **本地优先的安全护栏**：在不依赖 LLM 脱敏的前提下保护本地 transcript、避免 SSRF 类漏洞（已被 #28557 修复）

**安全提示**
- 今日合入的 [#28557 SSRF 修复](https://github.com/google-gemini/gemini-cli/pull/28557) 与持续讨论的 [#26525 Auto Memory 脱敏](https://github.com/google-gemini/gemini-cli/issues/26525) 提示团队正在系统性强化本地→云端链路的安全护栏，建议关注后续审计进展。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-08-01
**数据源：** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 今日速览

今日 Copilot CLI 发布 pre-release 版本 **v1.0.78-0**，重点改进审批模式切换与沙箱构建体验。社区活跃度极高，24 小时内更新了 33 条 Issue 与 2 条 PR，涉及 **plan-mode 回归**、**会话恢复 OOM**、**V8 字符串长度上限导致会话不可用** 等多个高影响问题。从议题分布看，**权限审批、会话生命周期管理、ACP 协议扩展** 是当前最受关注的三类话题。

---

## 版本发布

### 🚀 v1.0.78-0（pre-release）

**新增功能**
- 新增 `/permissions` 命令，用于在不同的审批模式之间切换，方便用户在安全自主与全自动之间灵活配置。
- ACP（Agent Client Protocol）模式现已支持通过 `closeSession` 请求结束会话。

**改进**
- 新增沙箱设置 `allowDevToolCaches`（默认开启）：允许沙箱化构建访问工具链缓存、镜像仓库与安装目录，从而保证构建流程在受限环境下也能顺利完成。

> 完整说明：[Release v1.0.78-0](https://github.com/github/copilot-cli/releases)

---

## 社区热点 Issues

下列按影响范围与社区关注度综合排序，挑选了最值得开发者关注的 10 条。

### 1. [#4188](https://github.com/github/copilot-cli/issues/4188) Plan-mode 回归：阻断 shell 命令执行
- **状态：** CLOSED ｜ 作者：[@wsilveiranz](https://github.com/wsilveiranz)｜ 评论：7 · 👍 3
- **重要性：** 本期评论数最高的 Issue。新版本中 plan 模式开始阻断 `gh` 等常用 shell 命令，导致原本用于丰富计划上下文的辅助工具失效。**直接影响开发者常用工作流**，已修复关闭。

### 2. [#2109](https://github.com/github/copilot-cli/issues/2109) ACP：`ask_user` 扩展方法支持
- **状态：** OPEN ｜ 👍 6（本期最高点赞）
- **重要性：** 协议扩展性诉求。现有 ACP 仅支持 `session/request_permission`，缺乏结构化的"问询-答复"通道。社区点赞数最高，说明自定义 ACP 客户端对接方对这一能力非常期待。

### 3. [#3909](https://github.com/github/copilot-cli/issues/3909) 企业/组织级服务端配置下发（含 env）
- **状态：** OPEN ｜ 评论：4 · 👍 0
- **重要性：** 长期困扰企业管理员的能力缺口：当前 Org 级 env 只能触达 Codespaces，无法推送到本地 CLI 实例。是 enterprise 用户落地 Copilot CLI 的关键卡点之一。

### 4. [#4305](https://github.com/github/copilot-cli/issues/4305) 升级 1.0.76 后出现 "Failed to convert 'Undefined' into rust type 'String'"
- **状态：** CLOSED ｜ 👍 4
- **重要性：** 升级即触发的崩溃问题，影响所有 1.0.76 用户。👍 数反映问题严重性。已修复关闭，建议升级前留意 1.0.76 已知问题清单。

### 5. [#4161](https://github.com/github/copilot-cli/issues/4161) 切回 autopilot 模式后 `task_complete` 工具不可用（回归）
- **状态：** CLOSED ｜ 👍 4
- **重要性：** 已修复的早期回归——上一次在 v1.0.4 处理过同类问题，本轮再次反复。值得作为"autopilot 模式切换稳定性"的参考案例。

### 6. [#4078](https://github.com/github/copilot-cli/issues/4078) 计划任务会清空既有提示队列
- **状态：** OPEN ｜ 评论：4
- **重要性：** 调度型提示（如 `/every`、`/after`）抢占并清掉用户已经排队的任务，长期会话下会丢失用户输入。仅再追问一次即丢弃 1 个待执行项，可靠性问题严重。

### 7. [#4251](https://github.com/github/copilot-cli/issues/4251) 1.0.74 起恢复大型会话 OOM / 单核满载约 70 分钟
- **状态：** OPEN ｜ 评论：1 · 👍 1
- **重要性：** 显式回归（相对 1.0.73 内存 3-4 倍）。对长生命周期会话用户影响巨大，**升级 1.0.74+ 的用户应重点评估**。

### 8. [#3183](https://github.com/github/copilot-cli/issues/3183) SDK：`hard kill + resume` 后留下孤儿 `tool_use`，致后续请求 400
- **状态：** CLOSED ｜ 评论：4
- **重要性：** 反映持久化层的健壮性。`@github/copilot` SDK 用户在异常中断场景下会遭遇不可恢复的会话状态。已修复关闭。

### 9. [#3215](https://github.com/github/copilot-cli/issues/3215) 接入 DeepSeek-V4 时工具调用持续 400
- **状态：** CLOSED
- **重要性：** 第三方模型接入的兼容性问题：`tool_use`/`tool_result` 块未成对出现。**所有接入 DeepSeek 系列的开发者都受影响**，已修复关闭。

### 10. [#1352](https://github.com/github/copilot-cli/issues/1352) `sessionStart` Hook stdout 不在终端 UI 显示
- **状态：** OPEN ｜ 👍 3
- **重要性：** 阻碍了"启动提醒 / 环境 banner / 清单检查"等高频 Hook 用法。Hook 已正常执行但输出被丢弃，对团队定制化体验影响明显。

---

## 重要 PR 进展

⚠️ **本期 PR 数量极少（仅 2 条），且从摘要看均疑似误投或低质提交**，无具备明显功能/修复价值的合入目标。请优先关注 Issue 主线。

| # | 标题 | 状态 | 备注 |
|---|------|------|------|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | ViewSonic monitor | OPEN | 描述含"monitor for #2591"，疑似测试/SPAM 提交，建议关注维护者处理 |
| [#4316](https://github.com/github/copilot-cli/pull/4316) | Create devcontainer.json | OPEN | 无描述，建议待澄清动机后再 review |

> 建议：本期主线变更较少，开发者在评审/合并窗口期可专注于 Issue 中已复现的回归问题反馈与复现信息补充。

---

## 功能需求趋势

通过对本期 33 条 Issue 的领域聚合，社区关注的功能方向如下：

1. **权限审批与安全模型（高频）**
   - `/permissions` 切换（v1.0.78-0 已落地）、plan-mode 下的命令粒度审批（#4188）、autopilot 行为边界（#4318）、沙箱文档化（#3712、#3712 ReFS/Dev Drive）。
   - 代表诉求："能否让 Copilot 在更细的颗粒度上请求授权，而不是一刀切地执行/阻断"。

2. **会话生命周期与持久化（高频）**
   - 大会话 OOM（#4251）、V8 字符串上限致会话永久不可加载（#4325）、调度任务抢队列（#4078）、Fork 后计划/todo 丢失（#4324）、ACP 不暴露 token 用量（#4174）。
   - 代表诉求："会话规模与持久化机制需要工业级可靠性"。

3. **ACP 协议生态（上升趋势）**
   - `ask_user` 扩展（#2109，6 👍）、closeSession（v1.0.78-0 已部分支持）、侧边栏固定分组建导航（#4321）。
   - 代表诉求："让 Copilot CLI 能更好地嵌入自定义客户端与桌面应用"。

4. **模型兼容与新模型支持**
   - DeepSeek-V4 工具调用修复（#3215）、组织侧启用新模型（GPT-5.6、Claude Sonnet 5）后 `/model` 列表不刷新（#4315）、Claude Opus 5 触发网络安全风控（#4322）。
   - 代表诉求："模型侧迭代速度快，CLI 的模型发现/缓存机制需要跟上"。

5. **MCP 集成与配置**
   - `.mcp.json` 注释导致全部 MCP 被跳过（#4323）、MCP 向导缺 env 格式帮助（#1478）、嵌套自定义 agent 的 MCP 工具授权依赖未文档化（#4320）。

6. **终端 UI / 渲染稳定性**
   - 转写区空白行（#4311）、侧边栏方向键导航失效（#4304）、会话切换回到 plan mode 挂起（#4319）、`sessionStart` Hook 输出未显示（#1352）。

7. **企业部署能力**
   - 组织级 env/配置下发（#3909）、trusted-access 入网路径（#4322）。

8. **安装/版本管理**
   - 指定版本安装始终落到最新版（#4317），安装器与版本锁定机制待补强。

---

## 开发者关注点

汇总反馈后，开发者社区当前的**核心痛点与高频需求**集中在以下五个层面：

1. **回归的容忍度正在下降**
   1.0.74 引入的 OOM、#4305 JS-to-Rust 反序列化崩溃、#4161 autopilot 工具回退等多个回归问题，让版本升级变成高风险决策。开发者期待**更可控的发布渠道**与**回归 A/B 报告**。

2. **"模型发现 + 模型兼容"是体验试金石**
   DeepSeek-V4 工具解析失败、组织新增 GPT-5.6/Claude Sonnet 5 不出现在 `/model` 等问题，反映了**新模型上架节奏与 CLI 兼容性测试存在断层**。Claude Opus 5 触发的网络安全风控（#4322）则提示**模型内容策略与 CLI 调用模式需协同**。

3. **审批/自主行为的可预期性**
   /permissions 新命令正回应这一痛点，但 plan-mode 阻断 shell（#4188）和 autopilot 越过用户明示"只做调研/说明"的指令（#4318），说明**审批边界的语义仍需细化**。开发者期望一个能表达"任务范围上下文（research/explain only vs. take action）"的契约。

4. **长会话/大型上下文的工程化能力**
   V8 字符串上限导致会话永久不可恢复（#4325），恢复 OOM（#4251）说明 **CLI 还没有为"超长 session"做好准备**。SDK 用户层还遇到孤儿 tool_use（#3183）。开发者要求：可降级恢复、分段加载、以及在 UI 中提前暴露容量警告。

5. **协作/部署摩擦**
   - 安装器忽略指定版本号（#4317）。
   - `.mcp.json` 不支持注释导致整文件被跳过（#4323），与 repo 级 `tsconfig.json`/`.eslintrc` 等宽松 JSON 的通行做法不一致。
   - 组织无法集中下发 env（#3909），本地 CLI 落入"开发者自助配置"模式，与 GitHub Codespaces 的体验存在落差。

> **趋势小结：** Copilot CLI 正从"功能可用"走向"工业级可用"——开发者已经不再满足于单点特性，而开始对**版本治理、会话韧性、协议扩展性、组织级管控**提出系统性要求。下一阶段的看点是新审批命令 `/permissions`、ACP 协议扩展以及 1.0.74+ 会话 OOM 的修复回归。

---

*本日报由社区数据自动汇总，仅作信息整理与导读，不构成任何官方声明。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-01** | **数据来源：GitHub MoonshotAI/kimi-cli**

---

## 1. 今日速览

今天是相对平静的一天，但社区讨论度持续活跃。开发者们仍在围绕两条高价值功能提案（远程控制、记忆系统）展开讨论，工具调用健壮性方面也迎来了一个针对性修复。[#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) 以 23 个 👍 稳居近期热门话题榜首，反映出"跨设备无缝衔接"是开发者最迫切的需求之一。

---

## 2. 版本发布

过去 24 小时内**无新版本发布**。本节略过。

---

## 3. 社区热点 Issues

> ⚠️ 过去 24 小时仅有 4 条 Issue 更新，以下为全部条目。

### 🔥 #1282 — Feature Request: Remote Control（已开放）
[链接](https://github.com/MoonshotAI/kimi-cli/issues/1282) | 23 👍 | 9 评论 | 作者：CatKang

**为什么重要**：提议为 Kimi Code CLI 增加"远程控制"能力，让用户可以在手机、平板或浏览器上继续本地 CLI 会话。这直接命中了 AI 编码工具"离开工位即中断连续性"的核心痛点。**23 个 👍 在 24 小时内刷新活跃度**，是当前最受关注的 proposal。

**社区反应**：讨论积极，开发者普遍认为这能补齐 CLI 工具对比 IDE 插件的最大短板——多端可用性。

---

### 🔥 #1283 — Feature Request: Memory System（已开放）
[链接](https://github.com/MoonshotAI/kimi-cli/issues/1283) | 8 评论 | 作者：CatKang

**为什么重要**：提议构建一套完整的"记忆系统"，让 Kimi Code CLI 跨会话持久化上下文、项目模式与用户偏好，并区分自动记忆（AI 管理笔记）与手动记忆（用户配置指令）。与 #1282 共同构成"长期使用体验增强"组合拳。

**社区反应**：评论集中在如何平衡隐私、是否需要本地存储、以及与现有 `/setup` 流程的关系上。👍 数据偏低（0）可能因 Issue 标记分类或 GitHub 投票机制影响，建议关注评论质量。

---

### 🐛 #2422 — Bug: 对话完成后滚动自动跳到底部（已开放）
[链接](https://github.com/MoonshotAI/kimi-cli/issues/2422) | 1 👍 | 2 评论 | 作者：venus0707

**为什么重要**：用户报告在对话结束后，向上滚动查看历史输出时，界面会自动跳回底部。这是一类典型的 TUI 渲染/自动滚动逻辑问题，影响所有需要回溯长输出的开发者。**环境：Linux + Kimi Code CLI 1.46.0**。

**社区反应**：已有多位用户确认遇到类似问题，期待 official 修复。

---

### ✅ #796 — Error: the message at position 1 with role（已关闭）
[链接](https://github.com/MoonshotAI/kimi-cli/issues/796) | 0 👍 | 1 评论 | 作者：bravery

**为什么重要**：LLM Provider 报错 `400`，提示消息结构异常。**该 Issue 已被关闭**，推测已在后续版本中修复或被合并到其他 Issue。该 Bug 现象对使用 `/setup` 命令初始化对话的场景具有参考价值。

**社区反应**：关注度较低，关闭后无后续讨论。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时仅 1 条 PR 更新。

### 🔧 #2572 — fix(kosong): 递归解码工具调用参数的二重编码 JSON（已开放）
[链接](https://github.com/MoonshotAI/kimi-cli/pull/2572) | 作者：aalhadxx

**修复内容**：针对 Moonshot API 在 `function.arguments` 字段中对嵌套数组/对象进行二次 JSON 编码的问题，新增递归解码逻辑。修复后，`SetTodoList`、`ExitPlanMode`、`StrReplaceFile` 等使用数组/对象类型参数的工具调用可正常通过 Pydantic 校验。

**技术价值**：这是一个典型的"Provider-specific 数据契约"问题。修复后 Kimi Code CLI 在多个第三方 Provider 间的兼容性将显著提升，也降低了未来添加新工具时的潜在风险。

---

## 5. 功能需求趋势

基于上述 Issues 提炼，以下为社区当前最关注的功能方向：

| 趋势方向 | 代表 Issue | 热度指标 | 核心诉求 |
|---------|-----------|---------|---------|
| **跨设备/远程访问** | #1282 | 23 👍 | 离开工位后仍能继续本地会话 |
| **持久化记忆系统** | #1283 | 8 评论 | 跨会话保留上下文与用户偏好 |
| **TUI 交互体验** | #2422 | 1 👍 + 多用户复现 | 滚动行为可控、避免非预期跳转 |
| **鲁棒性与兼容性** | #796 / PR #2572 | 修复活跃 | 错误消息更清晰、Provider 兼容更广 |

**总结**：社区关注点正从"能用"向"好用"迁移——远程控制、记忆系统代表 **连续性体验**，而 TUI 修复与 Provider 兼容修复代表 **底层可靠性**。两类需求共同推动了 Kimi Code CLI 向"长期协作工具"演进。

---

## 6. 开发者关注点

综合今天的反馈，可以看出以下高频痛点：

1. **🔌 跨端割裂**：开发者期待 CLI 工具能像 IDE 一样支持多端访问，#1282 是这一愿景的集中体现。
2. **🧠 上下文丢失**：每次启动新会话都要重新提供项目背景，记忆系统能显著降低重复输入成本（#1283）。
3. **📺 TUI 细节缺失**：滚动、自动跳转等"TUI 通病"在长输出场景下被放大，影响查阅效率（#2422）。
4. **🔗 Provider 数据契约脆弱**：Moonshot API 二次编码 JSON 导致工具调用失败（PR #2572），凸显了在多模型/多 Provider 战略下，**数据规范化层**的重要性。
5. **📢 错误信息可读性**：#796 的 `message at position 1 with role` 报错对终端用户来说几乎无法自助排查，开发者普遍期待更友好的错误提示。

> 💡 **建议**：对于产品团队，#1282 和 #1283 是显著的"社区信号弹"，建议在下次 Planning 周期内优先评估；对于使用者，升级到包含 PR #2572 修复的版本可避免多种工具调用失败。

---

*日报生成时间：2026-08-01 | 数据时窗：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-01

## 📌 今日速览

今天 OpenCode 仓库无新版本发布，但社区活动围绕两大主线展开：**OpenCode Go 服务的可用性与透明度争议**（多个高赞 issue 集中爆发，涉 401 错误、零留存策略、第三方代理说明等），以及 **TUI 体验的持续打磨**（kitlangton 等核心贡献者集中提交了一批会话标签、插件监听、测试健壮性的修复与重构）。与此同时，社区对 DeepSeek V4-Flash 正式版的接入呼声最高（👍 20）。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

1. **[#38257](https://github.com/anomalyco/opencode/issues/38257) — OpenCode Go 全部模型 401 "Request blocked by upstream provider"**（42 评论 / 👍11）
   7 月 22 日起 Go 订阅下所有模型 `chat/completions` 接口均返回 401，但 `/v1/models` 正常。属于服务端问题，影响所有付费用户，是本周最严重的服务故障报告。

2. **[#39823](https://github.com/anomalyco/opencode/issues/39823) — DeepSeek V4-Flash 正式版（0731）是否已在 Go/Zen 上线？**（22 评论 / 👍20）
   DeepSeek 今日发布正式版 V4-Flash（Terminal Bench 82.7、Cybergym 76.7），社区急切求确认 OpenCode Go/Zen 的接入状态。👍 数最高，反映新模型可用性是用户核心痛点。

3. **[#39875](https://github.com/anomalyco/opencode/issues/39875) — 撤销 Go 隐私文案与供应商归属的静默删除，补齐遥测/留存条款**（4 评论 / 👍20）
   用户要求回滚过去两周悄然删除"零留存"措辞与供应商归属的两次提交，并主张将遥测与留存写入正式隐私政策。Go 订阅用户对透明度流失表达强烈不满。

4. **[#39861](https://github.com/anomalyco/opencode/issues/39861) — 移除零留存（zero-data-retention）政策**（5 评论 / 👍13）
   紧接 #39875，issue 直接指出文档中"zero-retention"措辞已被悄悄删除，对企业用户合规性造成冲击。两条隐私类 issue 在一天内累计近 33 个 👍。

5. **[#24649](https://github.com/anomalyco/opencode/issues/24649) — Go 计划：明确哪些模型是自建、哪些经第三方代理**（14 评论 / 👍31，**已关闭**）
   虽已关闭，但 👍 31 反映用户对 Go 基础设施声明的强烈期待，长期处于"自托管 vs 代理"的信息不透明状态。后续 #39875、#39861 均承接此议题。

6. **[#4140](https://github.com/anomalyco/opencode/issues/4140) — 1.0.47 起 TUI 黑屏**（37 评论 / 👍13，**已关闭**）
   影响广泛，黑屏问题长期困扰用户，今日终于标记为关闭。结合 #10221、#38773 的连续关闭，TUI 黑屏类问题进入收尾阶段。

7. **[#10221](https://github.com/anomalyco/opencode/issues/10221) — 新装 OpenCode 启动后黑屏**（33 评论 / 👍17，**已关闭**）
   与 #4140 同源的 TUI 渲染问题，今日同步关闭，标志该类回归已被根治。

8. **[#28696](https://github.com/anomalyco/opencode/issues/28696) — 插件/Agent/Skills 统一市场（Master Issue）**（6 评论 / 👍23）
   社区公认的下一阶段关键基础设施提案，统一承载发现、安装、签名、分发流程，👍 23 表明生态扩展已成为共识方向。

9. **[#17505](https://github.com/anomalyco/opencode/issues/17505) — ACP 模式下 `session/update` 通知晚于 `end_turn`**（15 评论 / 👍10）
   OpenCode 作为 Fabriqa 的 ACP provider 时，通知顺序错误导致客户端以空内容收尾 turn。影响下游集成方，问题细节清晰但尚未修复。

10. **[#24316](https://github.com/anomalyco/opencode/issues/24316) — qwen 3.6 35b-a3b 在裸 tool call 场景下进度卡死**（20 评论 / 👍2）
    用户使用 llama.cpp 最新源码构建 + qwen 模型时，工具调用直接进入 `<tool_call>` 后无进展。归因不明（qwen / llama.cpp / OpenCode），属于三方边界模糊的典型问题。

---

## 🛠 重要 PR 进展

1. **[#39981](https://github.com/anomalyco/opencode/pull/39981) — fix(tui): 监听新建的插件目录**（已合并）
   修复启动 TUI 后才创建的 `.opencode/plugins/tui/` 子目录无法被即时发现的问题，让插件热加载更符合文档承诺。

2. **[#39983](https://github.com/anomalyco/opencode/pull/39983) — fix(tui): 外部 TSX 插件共享 TUI 运行时**（已合并）
   在打包后的 Bun 可执行文件中，V2 TSX 插件将复用主机的 OpenTUI 与 Solid 运行时，修复插件本地 `createSignal` 不响应、UI 冻结的严重问题。

3. **[#39985](https://github.com/anomalyco/opencode/pull/39985) — feat(app): 可配置 Send 键（Enter / Shift+Enter / Ctrl+Enter）**（开放中）
   设置中新增"发送键"选项，三种模式自由切换，回应长期存在的输入习惯分歧（来自 VS Code、JetBrains、Slack 用户群）。

4. **[#39984](https://github.com/anomalyco/opencode/pull/39984) — web 命令新增 `--no-browser` 选项**（开放中）
   允许关闭 `opencode web` 的自动浏览器打开，对 SSH、远程容器、无头服务器场景非常实用。

5. **[#39982](https://github.com/anomalyco/opencode/pull/39982) — feat(tool): Shell 命令失败的简洁错误输出**（开放中）
   承接 #39771 第三部分，与 #39978（智能超时）形成系列：失败时不再输出冗长堆栈，只输出关键诊断信息。

6. **[#5657](https://github.com/anomalyco/opencode/pull/5657) — feat: 切换 TUI 透明背景**（开放中）
   引入 `auto | on | off` 三态透明度策略，命令面板新增 `theme.transparency`。终端混色与个人风格化体验提升。

7. **[#39942](https://github.com/anomalyco/opencode/pull/39942) — fix(tui): 会话标签拖拽改为单次持久化**（已合并）
   原先每次跨槽都触发 flock → read → mutate → 原子写入流程，改为整次拖拽只一次写入。显著降低磁盘 IO 与视觉延迟。

8. **[#39941](https://github.com/anomalyco/opencode/pull/39941) — fix(tui): 加固会话标签状态卫生**（已合并）
   修复三处隐患：写入失败被静默吞掉、`closeSessionTabs` 状态不一致、并发写入竞争。

9. **[#39940](https://github.com/anomalyco/opencode/pull/39940) — fix(tui): 忽略隐藏标签的关闭热区**（已合并）
   在无 hover 状态的终端中，标签右侧 `×` 在悬停之外也响应鼠标抬起，导致误关闭。已限制为仅 hover 时可点。

10. **[#39957–#39964](https://github.com/anomalyco/opencode/pull/39952) — 一组"删除未使用代码"重构 PR**（已合并）
    由 `opencode-agent[bot]` 在 kitlangton 指引下集中清理 8 个无用 helper/类型/序列化器（`formatDuration`、`useConfigOptional`、`errorData`、`isZedTerminal` 等）。技术债清理密集期，为后续重构腾挪空间。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **新模型接入** | #39823（DeepSeek V4-Flash） | 👍20 |
| **透明度与隐私合规** | #24649 / #39861 / #39875 / #39827 | 👍31+13+20 |
| **生态市场/插件分发** | #28696 | 👍23 |
| **IDE / 桌面端集成** | #39936（VS Code 通知）、#39840（Desktop 崩溃） | 持续 |
| **性能与缓存** | #23595（system-reminder 抖动）、#37489（上下文缓存失效） | 👍11+ |
| **会话/书签管理** | #24017（保存与分类提示词/会话） | 长尾 |
| **跨会话调试辅助** | #39772（调试环路检测 + 跨会话记忆） | 早期但新颖 |
| **本地化与无障碍** | #39925（中文设置）、#927（文本选择） 👍29 | 国际化 |

整体趋势：**付费用户对"供应商透明度"和"模型可用性"诉求激增**，同时 **TUI 体验与插件生态** 持续作为开发者的重点投入方向。

---

## 💡 开发者关注点

1. **TUI 渲染稳定性是首要痛点**——黑屏、隐藏热区、拖拽抖动、输入区遮挡（#38773）等问题集中爆发又集中关闭，说明 v1.x 到 v2 的 TUI 重构进入收尾验证期。

2. **插件生态机制亟需统一**——`.opencode/plugins/` 的监听、TSX 运行时共享、签名/分发缺失（#28696、#39981、#39983）是开发者扩展时的最大摩擦点。

3. **服务端故障归因模糊**——Go/Zen 多区域 401（#38257、#39827）下，用户被迫自查账户与配置，但官方响应链条长、归因文档缺失。

4. **隐私与代理透明度倒退**——一周内两条"零留存"文档被静默删除，加上自托管 vs 第三方代理说明不清，导致企业用户信任成本上升。

5. **本地 LLM 集成的边界问题**——llama.cpp 的 prompt cache 因 `<system-reminder>` 抖动失效（#23595），提示 OpenCode 需更好地与本地推理引擎约定协议。

6. **资源/会话/会话切换的健壮性**——`/model` 切换后的 SQLite 约束崩溃（#39165）、会话中后段消息被忽略（#32719）、TUI 跨项目导航崩溃（#39840），均反映状态机在并发切换下仍有缺口。

7. **清理技术债的"安静 PR 流"**——bot 自动提交的 #39952–#39964 一组重构，叠加 kitlangton 的人手 PR，说明 v2 上线前的代码卫生专项正在进行。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-01

> 数据来源：`github.com/badlogic/pi-mono`（上游：`earendil-works/pi`）｜ 报告生成时间：2026-08-01

---

## 📌 今日速览

今天 Pi 仓库异常活跃，开发者聚焦于**长会话稳定性**与**多 Provider 兼容性**：自动压缩机制失效、JSON 模式 O(n²) 输出膨胀、WSL/Wayland/Linux 老旧 CPU 等边缘场景问题集中暴露。同期，christianklotz 主导的 **Session/Server 架构重构** 持续推进，多个底层 PR（持久化、协议适配器、SQLite 队列）合并或开启；而社区侧最被点赞的 #6879（自动压缩阈值失效）正推动核心调度逻辑升级。

---

## 🚀 版本发布

**过去 24 小时无新 Release。** 上一稳定版 `0.83.0` 仍存在依赖锁定问题（[#7316](https://github.com/earendil-works/pi/issues/7316)），`brace-expansion@5.0.7` 尚未清理。

---

## 🔥 社区热点 Issues

按社区讨论深度与影响面筛选 Top 10：

| # | Issue | 类别 | 关键点 |
|---|-------|------|--------|
| 1 | [#6187](https://github.com/earendil-works/pi/issues/6187) **WSL 下 Pi 登录挂起** | 🐛 Bug | Copilot device flow 浏览器授权完成后，WSL 内 Pi 客户端未检测成功信号而永久挂起。19 条讨论，跨 WSL/网络层调试困难 |
| 2 | [#6879](https://github.com/earendil-works/pi/issues/6879) **自动压缩永不触发** | 🐛 Bug | gpt-5.6-sol 单 turn 超 2 小时、上下文 373k 才触发 API 报错。👍 5 次点赞，呼吁每步 agent 后检查阈值 |
| 3 | [#6665](https://github.com/earendil-works/pi/issues/6665) **TUI 流式渲染吃满单核** | ⚡ 性能 | `Intl.Segmenter` 未缓存 + 每 chunk 重建 Markdown。建议缓存 grapheme 分割、懒渲染未可见部分 |
| 4 | [#7020](https://github.com/earendil-works/pi/issues/7020) **压缩后不继续** | 🐛 Bug | 协调型长会话压缩后 Pi 不自动恢复生成；影响"持久编排"工作流 |
| 5 | [#7267](https://github.com/earendil-works/pi/issues/7267) **自定义 Provider 文档 vs 实现不一致** | 📖 Doc/Bug | `docs/custom-provider.md` 与 `registerProvider` Extension API 存在关键偏差，误导开发者 |
| 6 | [#7413](https://github.com/earendil-works/pi/issues/7413) **GHE.com 企业账号压缩失败** | 🐛 Bug | `/compact` 在 GitHub Copilot 企业版（GHE.com）报 `unknown stamp "prod-cus-01"`，但普通聊天正常 |
| 7 | [#7319](https://github.com/earendil-works/pi/issues/7319) **Kimi-coding OAuth 401 中断 turn** | 🐛 Bug | Kimi OAuth token 过期直接终止 turn，缺 401 刷新逻辑 + 重试分类器 |
| 8 | [#7062](https://github.com/earendil-works/pi/issues/7062) **OpenAI 兼容流式响应兼容性** | 🐛 Bug | Databricks 等返回数组 content / 缺失 `finish_reason`，导致 `[object Object]` 污染 |
| 9 | [#6996](https://github.com/earendil-works/pi/issues/6996) **Gemini 3.x 工具调用 thought_signature 缺失** | 🐛 Bug | Gemini 3.5/3.6 Flash 在 tool result 回传后丢失 `thought_signature`，任务中断 |
| 10 | [#7290](https://github.com/earendil-works/pi/issues/7290) **`--mode json` O(n²) 输出 OOM** | ⚡ 性能 | 每条 `message_update` 携带累计消息，64 KB HTML 写出耗时 17 分钟；与 PR #7394 对应 |

---

## 🛠 重要 PR 进展

| # | PR | 影响 |
|---|----|------|
| 1 | [#7390](https://github.com/earendil-works/pi/pull/7390) **目标基线 x64 CPU 支持** | 修复 [#7149](https://github.com/earendil-works/pi/issues/7149)，`pi-linux-x64` 不再依赖 BMI2/AVX2，Sandy Bridge 等老 CPU 可启动 |
| 2 | [#7394](https://github.com/earendil-works/pi/pull/7394) **JSON 流式输出线性化** | 发送 delta-only `message_update`，配合 stdout 背压；解决 #7290 的 O(n²) 痛点，是 **breaking wire-protocol 变更** |
| 3 | [#7396](https://github.com/earendil-works/pi/pull/7396) **Server session 后端** | 新增 `@earendil-works/pi-coding-agent/server`，持久化 JSONL、跨进程锁、崩溃恢复；面向 batch/server 工作负载 |
| 4 | [#7404](https://github.com/earendil-works/pi/pull/7404) **新增 Baseten Provider** | OpenAI 兼容的 Baseten 内置接入，设置 `BASETEN_API_KEY` 即可使用，模板对齐 Together AI |
| 5 | [#6216](https://github.com/earendil-works/pi/pull/6216) **Amazon Bedrock Mantle OpenAI Responses Provider** | 长期挂起的 AWS Bedrock Mantle 通道补全，超前 PR 已被本 PR 取代 |
| 6 | [#7387](https://github.com/earendil-works/pi/pull/7387) **Wayland 剪贴板读取** | 关闭 [#7248](https://github.com/earendil-works/pi/issues/7248)，优先用 `wl-paste` 再回落 X11，KDE/Konsole 用户受益 |
| 7 | [#7389](https://github.com/earendil-works/pi/pull/7389) **扩展原生 prompt API** | 暴露 `pi.prompt()`，让扩展走原生 command/skill/template 通道，支持流式 steer/follow-up |
| 8 | [#7381](https://github.com/earendil-works/pi/pull/7381) **模型刷新状态一致性** | 统一 model catalog 刷新发布边界，解决 `/model`/login/扩展注册时并发刷新竞态 |
| 9 | [#7411](https://github.com/earendil-works/pi/pull/7411) **实验性 CLI 解析器** | 为 PiServer/客户端组合模式引入统一解析、Unix socket 校验、聚合错误处理 |
| 10 | [#7386](https://github.com/earendil-works/pi/pull/7386) **可组合协议服务器** | 传输无关 `PiServer` + 认证 framed-CBOR + Unix listener 构建块，开启远程会话能力 |

**同期合并（已 CLOSED）的清理与重构 PR**：#7400（清理 SQLite 连接）、#7391（Session 搜索只读化）、#7397（协议适配器不变式）、#7398（每 session 存储队列）、#7408/7409/7410（Session 存储/客户端/线性化三件套）—— 均由 christianklotz 推动，标志 Session 层从 "per-session 对象" 转向显式 `SessionStore` 所有权模型。

---

## 📈 功能需求趋势

从 Issues 关键词分布提炼出 5 大方向：

| 方向 | 代表性 Issue | 占比观察 |
|------|--------------|----------|
| **🔌 Provider / 模型扩展** | #6996、#7062、#7283、#7319、#7030、#7199、#7404、#6216 | 占比最高，Gemini 3.x、Kimi-coding、Databricks、Baseten、Bedrock Mantle 持续涌入 |
| **⚡ 流式/渲染性能** | #6665、#7290、#7385、#6859 | 长会话性能是核心痛点，TUI/JSON 两端都在重构 |
| **🧠 压缩与会话连续性** | #7020、#6879、#7253、#7150、#7413 | "压缩后丢上下文/不继续"是当前最高优先级叙事 |
| **🌐 平台兼容性** | #6187（WSL）、#7248（Wayland）、#7149（老 CPU）、#6662（鼠标选择）、#7357（Orca） | Linux 桌面/WSL 细节成为长尾重点 |
| **🧩 Extension API 一致性** | #7267、#7277、#7278、#7389 | 自定义 Provider/扩展命令的"文档-实现"鸿沟仍需持续收敛 |

---

## 💡 开发者关注点

1. **长会话越来越常见，但基础设施滞后**：auto-compaction 阈值不可靠（[#6879](https://github.com/earendil-works/pi/issues/6879)）、压缩后行为不一致（[#7020](https://github.com/earendil-works/pi/issues/7020)、[#7253](https://github.com/earendil-works/pi/issues/7253)）、RPC prompt 静默丢失（[#7150](https://github.com/earendil-works/pi/issues/7150)）—— 这是一组系统性问题，社区呼唤"显式状态机 + 持久化原子性"。

2. **Provider 碎片化加速**：Gemini 3.x thought_signature、Anthropic 流式解析、Kimi OAuth 401、Databricks 数组 content、OpenAI 网关缺 header…… 每家模型都在试探 Pi 适配器的边界，**驱动力是开发者把 Pi 当作"批处理/服务端 agent runtime"**（见 [#7396](https://github.com/earendil-works/pi/pull/7396)、[#7290](https://github.com/earendil-works/pi/issues/7290) 用例）。

3. **Linux 桌面/Wayland 用户被忽视已久**：Ctrl+V、鼠标选择、剪贴板、CPU 基线——补丁已陆续到位，但暴露了 Pi 长期重 macOS、轻 Linux 的历史偏差。

4. **协议契约正在收紧**：christianklotz 的 Server/Store 重构（#7396/#7397/#7398/#7400/#7409/#7410/#7411）暗示 Pi 正从"单机 CLI"演化为"组件化平台"，**wire-protocol breaking 变更（如 #7394）需要社区提前迁移**。

5. **扩展机制仍是高频摩擦点**：sendUserMessage 不触发命令、registerProvider 与文档不一致、自定义 Provider 类型定义陈旧——[Extension API 文档](https://github.com/earendil-works/pi/issues/7267) 是当务之急。

---

*报告基于 GitHub Issues/PRs 公开数据自动汇总，所有链接指向 `earendil-works/pi`（上游仓库）。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-01**

---

## 📌 今日速览

v0.21.2 版本正式发布，核心改进在于 Autofix 流程的五轮限额机制；社区讨论焦点集中在 `qwen serve` 多工作区守护进程的资源治理与 Anthropic 协议适配的多项 Bug 修复；CI 流水线在 SDK / ACP / Subagent E2E 测试上仍有波动，多个 Bot 自动派单正在被自动修复。

---

## 🚀 版本发布

### v0.21.2
- **Autofix 流程增强**：Autofix 在五轮修复后自动推迟低严重度建议，并在达到轮次上限拒绝继续时输出可见提示。相关 PR：[#7913](https://github.com/QwenLM/qwen-code/pull/7913)、[#8067](https://github.com/QwenLM/qwen-code/pull/8067)

> 注：Release Notes 当前仅披露这一条 Highlight，更多条目预计后续补齐。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 状态 | 亮点 |
|---|---|---|---|---|
| 1 | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC：单守护进程支持多工作区** | 31 | 已关闭 | 31 条评论，是本周最具共识推动力的 RFC。明确提出 "1 daemon = 1 workspace × N sessions" 模型需要演进，且已被关闭（通常意味着进入实施阶段），后续配套 #7752、#8051、#8182 一并落地。 |
| 2 | [#8051](https://github.com/QwenLM/qwen-code/issues/8051) **多工作区守护进程资源用量封顶** | 9 | 开放 | 当前 daemon 只做了计数限流，未对请求体、WebSocket 装配、模型缓冲等"字节级"资源做约束，是多工作区落地的关键性能缺口。 |
| 3 | [#5199](https://github.com/QwenLM/qwen-code/issues/5199) **Minified React error #185（CherryStudio）** | 9 | 开放 | 影响 Windows + CherryStudio 全局安装路径下的 UI 渲染，需更多信息才能定位。 |
| 4 | [#6721](https://github.com/QwenLM/qwen-code/issues/6721) **延迟工具发现破坏 prompt 缓存前缀** | 7 | 开放 | 影响核心缓存命中率，触动 Anthropic/OpenAI 路由下的成本与延迟体验，是高优性能议题。 |
| 5 | [#8039](https://github.com/QwenLM/qwen-code/issues/8039) **Anthropic 4.6+ assistant-prefill 400 + thinking.display 默认 omitted** | 6 | 已关闭 | 覆盖 Claude Opus/Sonnet 4.6+ 全系列，影响所有走 Anthropic 协议的推理质量。 |
| 6 | [#7167](https://github.com/QwenLM/qwen-code/issues/7167) **Fleet Shepherd Dashboard（CI 自愈机器人）** | 4 | 开放 | 由 Fleet Shepherd 工作流自动维护的看板，每 20 分钟扫描 #8250、#8243 等 PR 的 CI 状态。 |
| 7 | [#5576](https://github.com/QwenLM/qwen-code/issues/5576) **serve/ 模块统一 kebab-case + 拆分 server.ts 大文件** | 4 | 已关闭 | KISS 原则下的工程治理，已合入。 |
| 8 | [#7752](https://github.com/QwenLM/qwen-code/issues/7752) **fix(serve)：释放托管写入锁 + 守护进程维护隔离** | 3 | 已关闭 | 多工作区 P0 写锁生命周期的收尾，三个阶段（#7812/#7976/#7975）已全部合并。 |
| 9 | [#8003](https://github.com/QwenLM/qwen-code/issues/8003) **长会话下模型以纯文本 XML 输出 tool call** | 3 | 已关闭 | 在 200+ turn、180K+ tokens 的会话里 `qwen3.8-max-preview` 偶发将 `<invoke>` 写进 content，丢失结构化 function call。 |
| 10 | [#8182](https://github.com/QwenLM/qwen-code/issues/8182) **daemon 错误分配每个 ACP 子进程 50% 主机内存** | 3 | 开放 | `getAcpMemoryArgs()` 只读取宿主机内存、不按子进程数量分摊，多工作区场景下 OOM 风险显著。 |

**社区反应观察**：多工作区是当前最热的体系化议题，从 RFC (#6378) 到实施 (#7752) 再到性能封顶 (#8051/#8182)，完整闭环已在进行中。Anthropic 协议相关问题密度高，连续出现 #8039/#8159/#8160/#8161/#8163/#8166，反映 Claude 4.6/5.x 系列兼容性是另一个攻坚点。

---

## 🛠 重要 PR 进展（精选 10 条）

| PR | 标题 | 类型 | 要点 |
|---|---|---|---|
| [#8265](https://github.com/QwenLM/qwen-code/pull/8265) | CI 评审 Runner 每次拉取 npm 最新 qwen CLI | fix(ci) | 修复 #8005 评审在旧版 0.20.0 上跑、产出预 #7550 格式 coverage 的问题；保持评审与发布同源。 |
| [#8077](https://github.com/QwenLM/qwen-code/pull/8077) | 思维块高度稳定 + 行内 Ctrl+O 切换 | fix(cli) | 流式思维预览默认隐藏，避免翻页抖动；用行内全细节展开替代全屏覆盖层。 |
| [#8229](https://github.com/QwenLM/qwen-code/pull/8229) | Web Shell：可变的默认 mid-turn 消息 | feat(web-shell) | 回合进行中发送的纯文本消息默认进入当前回合，注入确认后才从队列中消失。 |
| [#8166](https://github.com/QwenLM/qwen-code/pull/8166) | Anthropic：级联剥离孤立 tool_use 的 thinking 兄弟块 | fix(anthropic) | 在 `cleanOrphanedToolCalls` 内增加级联清理，避免 Claude 4.6+ 历史回放丢推理链。 |
| [#7908](https://github.com/QwenLM/qwen-code/pull/7908) | repo-hygiene 技能 + 周巡检工作流 | feat(ci) | 周一 03:00 UTC 跑 9 个并行 subagent 扫仓库，自动开合并型 fix PR。 |
| [#8141](https://github.com/QwenLM/qwen-code/pull/8141) | 移除 ACP 对私有 serve/ 的依赖 | refactor(cli) | 把 workspace-memory、skill 状态映射、IPC 契约搬到 `packages/cli/src/runtime/**`，解耦 ACP 与 serve。 |
| [#7947](https://github.com/QwenLM/qwen-code/pull/7947) | 大文本文件的有界读取 | fix(serve) | 仅在请求带有限值时进入流式分支，保持 256 KiB 全快照安全门。 |
| [#8215](https://github.com/QwenLM/qwen-code/pull/8215) | `/review`：Test Plan 断言核查 + 基线树 A/B Harness | feat(review) | 给评审能力加上"按手测维护者路径"复刻的验证机制，覆盖度从 63/63 升级为可校准。 |
| [#8257](https://github.com/QwenLM/qwen-code/pull/8257) | 声明主代理预算 + 使用 Step headroom | fix(autofix) | 修复主代理默认 50 分钟而包装 Step 上限 80 分钟的浪费三分之一窗口的问题。 |
| [#8240](https://github.com/QwenLM/qwen-code/pull/8240) | 工作流代理审批冒泡到上层 | feat(workflows) | Workflow agent 的 Shell/编辑/MCP/信息请求挂起在所属 run 上，由父级 TUI / ACP / stream-json 控制面统一处理。 |

**额外值得留意**：
- [#8242](https://github.com/QwenLM/qwen-code/pull/8242) verify-pr 加兄弟形状扫描、回放校准、修复建议测量；
- [#8121](https://github.com/QwenLM/qwen-code/pull/8121) `/autofix` 技能打通本地与 CI 调用；
- [#8268](https://github.com/QwenLM/qwen-code/pull/8268) CLI 早输入阶段过滤 SGR 鼠标转义序列（对应 #8267）。
- 已关闭：[#7967](https://github.com/QwenLM/qwen-code/pull/7967)（文本读取重构）、[#8211](https://github.com/QwenLM/qwen-code/pull/8211)（ACP 桥接睡眠唤醒恢复）、[#7923](https://github.com/QwenLM/qwen-code/pull/7923)（Web Shell 后台任务静默轮询）。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue / 50 条 PR 中，可归纳出五条主线：

1. **多工作区守护进程（最高优先级）**  
   #6378 RFC → #7752 P0 写锁隔离 → #8051 资源封顶 → #8182 ACP 内存分配。说明社区正在把"单 daemon 多 workspace"作为基础设施级目标推进。

2. **Anthropic Claude 4.6 / 5.x 协议适配**  
   围绕 prefill、tool_use_id 字符集、孤立 tool_use / thinking 清理、`tool_result` 排序去重等集中爆发（#8039、#8159、#8160、#8161、#8163、#8166），本质是新版模型历史回放严谨度的集体补课。

3. **模型推理格式鲁棒性**  
   #8003（XML `<invoke>` 漏出）、#8207（JSON 风格 tool 参数漏出）、#8258（多段思维被合并丢 thoughtSignature），长会话下格式回归是用户最痛的体验问题。

4. **Web Shell 体验升级**  
   #8229（mid-turn 可变默认）、#8248（重复 "Yes, allow once"）、#8264（窄消息压缩高级表格）、#7923（后台轮询静默化）。Web 端已从"能用"进入"好用"阶段。

5. **CI / 自愈 / 评审基础设施**  
   Fleet Shepherd 自动巡检 (#7167)、`/review` 校验能力 (#8215)、`verify-pr` 兄弟形状扫描 (#8242)、`repo-hygiene` 周巡检 (#7908)、CI Runner 拉最新版 (#8265)。自动化正在成为社区开发模式的内核。

---

## 💬 开发者关注点

- **工具调用格式在长会话中不稳定**（#8003、#8207、#8258）：当上下文超过 ~35K tokens、turn 数较深时，qwen3.x-max 系列偶发以 XML/JSON 字符串代替结构化 `tool_calls`。社区希望看到分桶解析与 schema 兜底。
- **多工作区资源治理不闭环**（#8051、#8182）：仅做 workspace/session 计数限流，不限制字节级缓冲，是部署到生产环境前必须解决的隐患。
- **CI 主线频繁抖动**（#8076、#8222、#8237、#8244、#8256）：MCP Server、ACP cron、Subagent、Async Tool Handlers 等 E2E 用例反复红蓝交替，目前依赖 Autofix Bot 自动接管。
- **Web Shell 与 TUI UI 小 Bug 集中**（#8214、#8248、#8267）：选中渲染缺失、按钮重复、SGR 鼠标转义序列漏入输入框——多与新功能快速迭代相关，建议增加 TUI 渲染层的回归覆盖。
- **Windows 路径持续薄弱**（#5199、#8227）：CherryStudio 全局安装路径下的 React 错误、@-file 读缺少 `O_NOFOLLOW` 等价保护，跨平台一致性仍是痛点。
- **延迟工具发现破坏缓存前缀**（#6721）：开发者希望在引入 `tool_search` 时不污染 Anthropic/OpenAI 的 prompt cache 命中率，关系到长会话成本。
- **SDK 集成体验**（#8221、#8182）：qwen serve 后台启动后通过 Web 端创建的 skills 是否支持热重载、ACP 子进程内存分配策略等，反映生态集成方对稳定托管能力的强烈诉求。

---

*日报基于 2026-08-01 过去 24 小时内 GitHub 公开数据汇总，仅供参考。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale 社区日报
**日期：2026-08-01** ｜ 数据来源：`Hmbown/CodeWhale`

---

## 📌 今日速览

**v0.9.3 正式发布**，这是项目从 `deepseek-tui` 迁移至 Shannon Labs 旗下品牌 **CodeWhale** 后的首个主版本，集成 72 个单关注点提交，主要变更包括 DeepSeek V4 Flash 直接响应能力、规范化工具集与 ACP 协议中立的客户端雏形。社区当日活跃度极高：19 个 Issue 更新、14 个 PR 推进，且当日几乎全部 Issue 与 PR 都围绕 v0.9.3 的质量收口与下个版本规划展开。与此同时 `dependabot` 集中提交了 7 个依赖升级 PR，体现项目维护节奏正常。

---

## 🚀 版本发布

### v0.9.3 — "DeepSeek V4 Flash Responses and canonical tools"
- 🔗 发布 PR：https://github.com/Hmbown/CodeWhale/pull/4993 （已合入）
- **重点变更**：
  - **DeepSeek V4 Flash 直连支持**：直接响应通道，不再依赖中间链路
  - **Canonical Tools**：工具集合并与目录精简，减少小模型选错工具的概率
  - **依赖清理**：移除 `ttf-parser → lopdf → pdf-extract` 这条无人维护的传递依赖（RUSTSEC-2026-0192，见 [Issue #4382](https://github.com/Hmbown/CodeWhale/issues/4382)）
  - **文档门禁恢复**：`workflow-dispatch` 的 rustdoc gate 修复 ([PR #5004](https://github.com/Hmbown/CodeWhale/pull/5004))
- **品牌注意**：旧 `npm` 包 `deepseek-tui` 已弃用；新产品/CLI 名称为 **`codewhale`**（小写技术标识）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 重要性 | 链接 |
|---|-------|--------|-----|
| 1 | **#5007** — 社区用户 aboimpinto 反馈某 YouTuber 在介绍 DeepSeek-v4-flash 时未选用 CodeWhale 作为 TUI，呼吁官方关注社区曝光度。评论 5 条，社区反响较高。 | 品牌/推广 | [#5007](https://github.com/Hmbown/CodeWhale/issues/5007) |
| 2 | **#4949** — 中文翻译讨论："Constitution" 应译为「宪法」「协作准则」还是其他？由 PR #4908 引发的争议，作者 SparkofSpike 发起二次讨论。 | 本地化治理 | [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) |
| 3 | **#5003** — 严重 Bug：File 工具（`edit/patch`）对含中文注释 + CRLF 的中长 C 文件反复失败，15+ 次重试 + 3 次 `git checkout` 全量回滚，最终需绕过工具用 Python 脚本来回写。直接影响中长代码编辑工作流。 | 工具可靠性 | [#5003](https://github.com/Hmbown/CodeWhale/issues/5003) |
| 4 | **#5005** — Sandbox 增强请求：希望 `workspace-write` 沙箱支持外部路径白名单（如 `~/Library/Developer/Xcode/DerivedData/`），以便在 Xcode 项目下生成日志和构建产物。 | 真实开发流支持 | [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) |
| 5 | **#5000** — 引擎：把"被打断前已输出的助手文本"提升为一等 session 记录项，避免当前会话权威存储缺失导致的断点丢失。 | 会话可靠性 | [#5000](https://github.com/Hmbown/CodeWhale/issues/5000) |
| 6 | **#5002** — Bug：`Tool 'task' is not available` 与 Anthropic API 400 错误一起抛出，用户在常规调用中遭遇工具不可用问题。 | 工具可用性 | [#5002](https://github.com/Hmbown/CodeWhale/issues/5002) |
| 7 | **#4599** — 架构重构：模型事实（context window / max output / 能力）散落在 4 处（`crate::models`、`crate::config`、路由运行时、测试），需要一个单一事实来源。 | 可维护性 | [#4599](https://github.com/Hmbown/CodeWhale/issues/4599) |
| 8 | **#4708 / #4706 / #4705** — 一组上下文与可靠性主题：缩短工具描述、缩减默认工具面、压缩工具结果与小代理完成负载。三者都影响 prefix token 占用与小模型选择精度。 | 性能/上下文 | [#4708](https://github.com/Hmbown/CodeWhale/issues/4708) · [#4706](https://github.com/Hmbown/CodeWhale/issues/4706) · [#4705](https://github.com/Hmbown/CodeWhale/issues/4705) |
| 9 | **#4999** — v0.9.3 基准测试/评测管线需要确定性、失败闭合、来源精确，否则结果无法作为发布闸门信任。 | 发布门禁 | [#4999](https://github.com/Hmbown/CodeWhale/issues/4999) |
| 10 | **#4998 / #4994** — 一组安全主题：无头 / SSH / 容器环境的 OAuth 补全（PKCE + 手动回退）、提供"显式 provider 凭据交接"避免凭据错配。两者关系到无头部署与外部工具集成。 | 安全/无头部署 | [#4998](https://github.com/Hmbown/CodeWhale/issues/4998) · [#4994](https://github.com/Hmbown/CodeWhale/issues/4994) |

> 另：[#5009](https://github.com/Hmbown/CodeWhale/issues/5009) 为外部广告/SPAM（医疗账单），建议直接忽略或标记关闭。

---

## 🛠 重要 PR 进展（精选 10 条）

| PR | 内容 | 链接 |
|----|------|------|
| **#4993** ✅ | **v0.9.3 发布列车**：72 个单关注点提交 fast-forward 合并，候选 SHA `80c66ddd…`。 | [https://github.com/Hmbown/CodeWhale/pull/4993](https://github.com/Hmbown/CodeWhale/pull/4993) |
| **#5008** | **修复 [#5003]**：为 `File` 工具新增"可操作诊断信息 + 陈旧行号容差"，让模型大段替换失败时获得精确指引，不再陷入多轮回滚死循环。 | [https://github.com/Hmbown/CodeWhale/pull/5008](https://github.com/Hmbown/CodeWhale/pull/5008) |
| **#5001** | **CJK 宽度修复**：`① ② Ⓐ`、`❶ ❷`、`1️⃣` 等 Enclosed/Dingbat 字符被一致按 **2 列宽**计算，修复字符缺失/幻影空格的渲染异常。 | [https://github.com/Hmbown/CodeWhale/pull/5001](https://github.com/Hmbown/CodeWhale/pull/5001) |
| **#5006** | **Windows 安装器修复**：NSIS `ReadRegStr` 读取超长 PATH 返回空字符串导致被覆盖的问题，改用 `RegRead` + 多注册表视图回退保留现有 PATH。 | [https://github.com/Hmbown/CodeWhale/pull/5006](https://github.com/Hmbown/CodeWhale/pull/5006) |
| **#4977** ✅ | **键盘布局兼容**：ABNT2 下 `/` 为 `AltGr+Q`，以前会被全局 `Ctrl-/` 拦截打开帮助，现改为只匹配纯 `Ctrl+/`。 | [https://github.com/Hmbown/CodeWhale/pull/4977](https://github.com/Hmbown/CodeWhale/pull/4977) |
| **#5004** ✅ | **文档门禁恢复**：v0.9.3 候选版本的 `RUSTDOCFLAGS=-Dwarnings cargo doc` 门禁已重新生效。 | [https://github.com/Hmbown/CodeWhale/pull/5004](https://github.com/Hmbown/CodeWhale/pull/5004) |
| **#5013** | **ratatui 0.30.0 → 0.30.2**：TUI 底层渲染库升级。 | [https://github.com/Hmbown/CodeWhale/pull/5013](https://github.com/Hmbown/CodeWhale/pull/5013) |
| **#5016** | **libc 0.2.186 → 0.2.189**：Rust 标准库绑定更新（增加 Emscripten pthread 支持等）。 | [https://github.com/Hmbown/CodeWhale/pull/5016](https://github.com/Hmbown/CodeWhale/pull/5016) |
| **#5015** | **futures-util 0.3.32 → 0.3.33**：异步运行时工具修复（含 `ReadLine` 问题）。 | [https://github.com/Hmbown/CodeWhale/pull/5015](https://github.com/Hmbown/CodeWhale/pull/5015) |
| **#4910** | **草稿 PR**：开发者 JayBeest 提出"是否有一个确定性的验证面存在"的元问题，附带 onboarding 测试套件雏形；尚未正式提议，属讨论性质。 | [https://github.com/Hmbown/CodeWhale/pull/4910](https://github.com/Hmbown/CodeWhale/pull/4910) |

> 同时段 dependabot 还提交了 [#5014 clap_complete](https://github.com/Hmbown/CodeWhale/pull/5014)、[#5011 globset](https://github.com/Hmbown/CodeWhale/pull/5011)、[#5012 docker/login-action](https://github.com/Hmbown/CodeWhale/pull/5012)、[#5010 actions/stale](https://github.com/Hmbown/CodeWhale/pull/5010) 共 4 项常规依赖升级。

---

## 📈 功能需求趋势

从当日（及同期 v0.9.3 锁定中的）Issue 分布看，社区关注集中在五大方向：

1. **外部代理与 IDE 集成（ACP 化）**
   - 协议中立 ACP 客户端 ([#4996](https://github.com/Hmbown/CodeWhale/issues/4996))
   - GitHub Copilot 作为命名外部 ACP worker backend ([#4997](https://github.com/Hmbown/CodeWhale/issues/4997))
   - 用户已多次请求 ACP + MCP 双协议并存（社区 #2535 历史诉求）
   - **趋势判断**：CodeWhale 正在从单进程 TUI 转向"可被外部驱动也可驱动外部"的代理宿主架构。

2. **新模型与 DeepSeek V4 Flash 直连**
   - v0.9.3 主要目标就是落地 V4 Flash 直接响应路径
   - 模型事实统一单一来源 ([#4599](https://github.com/Hmbown/CodeWhale/issues/4599))
   - 两条模型解析链合并 ([#4851](https://github.com/Hmbown/CodeWhale/issues/4851))

3. **上下文与性能优化（针对小模型选错工具）**
   - 缩短工具描述 ([#4708](https://github.com/Hmbown/CodeWhale/issues/4708))
   - 缩减默认工具面 + 合并重叠 state ([#4706](https://github.com/Hmbown/CodeWhale/issues/4706))
   - 压缩工具结果 / 提醒 / 子代理完成负载 ([#4705](https://github.com/Hmbown/CodeWhale/issues/4705))

4. **安全与无头部署**
   - 无头 OAuth（PKCE + loopback + 手动回退） ([#4998](https://github.com/Hmbown/CodeWhale/issues/4998))
   - 显式 provider 凭据交接 ([#4994](https://github.com/Hmbown/CodeWhale/issues/4994))

5. **TUI 视觉 / 国际化细节**
   - 语义化图形持久化（环境动画可恢复） ([#4995](https://github.com/Hmbown/CodeWhale/issues/4995))
   - CJK / 圈数字符列宽（已在 [#5001](https://github.com/Hmbown/CodeWhale/pull/5001) 修复）
   - Windows 多键盘布局兼容（已在 [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) 修复）

---

## 🧑‍💻 开发者关注点与痛

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*