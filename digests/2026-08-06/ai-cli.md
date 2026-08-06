# AI CLI 工具社区动态日报 2026-08-06

> 生成时间: 2026-08-06 01:58 UTC | 覆盖工具: 9 个

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
**数据日期：2026-08-06 ｜ 涵盖 9 款主流 AI CLI 工具**

---

## 一、生态全景

当前 AI CLI 工具市场已进入**成熟竞争期**，呈现"一超多强 + 垂直突围"的格局：Anthropic Claude Code 与 OpenAI Codex 凭借模型层优势占据综合生态头部，Google Gemini CLI 与 GitHub Copilot CLI 在企业/IDE 集成侧加速渗透，Qwen Code、Kimi Code CLI、DeepSeek TUI 依托国产模型矩阵深耕中文场景，OpenCode 与 Pi 则代表"模型无关"的第三方开源路线。

**核心矛盾已从"能不能用"转向"可不可信"**——配额可观测性、MCP 调用鲁棒性、子代理可靠性、文件操作安全性成为 9 款工具的共性焦点；**桌面端 + 长任务 + 多 Provider** 三个新维度同时进入快速演进期，提示下一阶段竞争将围绕"Agent Runtime Platform"展开。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues 更新量 | PR 更新量 | 核心发布/事件 |
|------|-------------|--------------|-----------|--------------|
| **Claude Code** | v2.1.223（稳定） | ~50 条活跃，Top10 热度合计 **96 评论 / 90+ 👍** | 3 条 | Marketplace `owner/*` 通配符、fork 资源告警 |
| **OpenAI Codex** | rust-v0.146.1 + alpha.10~13、alpha.6.5 | Top10 合计 **~250 评论**，单 #9203 **373 👍** | 10+ 条（多为 CLOSED） | 网络安全审查默认收紧、Guardian 断路器 |
| **Gemini CLI** | v0.54.0 + v0.55.0-preview.1 | ~50 条，Top10 P1/P2 占比 60% | 10 条（8 已 CLOSED） | Seatbelt 沙箱回退、子代理假成功修复 |
| **GitHub Copilot CLI** | v1.0.79-2/3/4/5（4 个预发布） | 24 条（5 条 MCP 相关） | 数据截断 | 多会话 Sessions Tab、Prompt 固定开关 |
| **Kimi Code CLI** | **无** | 3 条（#1283 长期 19 评论） | 3 条 | MCP 图片工具降级（#2592）、UTF-8 静默损坏（#2591） |
| **OpenCode** | v1.18.14 | ~30 条，Top10 累计 **300+ 👍** | 10 条 | v1→v2 数据迁移、Hosted Workspace、Session 导出 |
| **Pi** | **无**（主线 0.82.1/0.83.0） | **50+ 条** | **37 条** | 事件总线泄漏修复、Harness v2、AGENTS.override.md |
| **Qwen Code** | Desktop v0.1.0 + CLI v0.21.6 | 10 条（P1 安全 2 条） | 10 条 | macOS Live Voice、AutoFix ECS 自托管 |
| **DeepSeek TUI** | 无（v0.9.4 待发） | 3 条 | **14 条** | Runtime API 资源补全（5 个并发 PR）、中文 Windows 指南 |

> **数据信号**：Pi 与 OpenAI Codex 是当前迭代最密集的两个项目；Kimi Code CLI 与 DeepSeek TUI 单日数据偏少，但分别体现"精准修复闭环"与"平台化重构"两种节奏。

---

## 三、共同关注的功能方向

### 1. **会话/上下文可观测性与可恢复性**（最强共性）
- Claude Code：`#82506` 配额误扣、`#81946` 项目内携带 transcript
- OpenAI Codex：`#9203` `/undo`（373 👍）、`#23979` 会话历史丢失
- OpenCode：`#31932` 跨项目 Session、`#40759` v1.18.14 `/sessions` 回归
- Gemini CLI：会话配额 fallback 工具响应丢失（PR #28672）
- Kimi Code CLI：`#1283` 跨会话持久化记忆（19 评论、5+ 月）
- Pi：`#5263` 模型切换默认临时化、`#7553` Compaction 独立思考预算

### 2. **MCP 协议生态完善**（横向最广）
- Claude Code：`#72228` 长参数截断、`#84362` tag-grammar 字段丢失
- OpenAI Codex：`#12491` 1300+ 僵尸进程、`#19425` 工具未注入、`#34684` OAuth、`#37168` 握手超时
- Gemini CLI：PR #28695 SDK JSON 解析崩溃
- Copilot CLI：24 条 Issues 中 5 条与 MCP 直接相关
- Kimi Code CLI：`#2588` MCP 图片工具不安全中断
- OpenCode：PR #40768 跨进程 OAuth 刷新竞态、`#27554` LAN Provider 发现

### 3. **子代理/多 Agent 可靠性**
- Gemini CLI：`#22323` GOAL 假成功、`#21409` generalist 永久挂起、`#21968` 几乎不主动调用
- DeepSeek TUI：PR #5242 子代理 checkpoint 恢复、`#5129` Skill 生命周期 API
- Qwen Code：PR #8559 WebShell 并行子代理状态常驻
- Claude Code：v2.1.223 引入后台 agent 加载告警

### 4. **沙箱/安全/权限精细化**
- Claude Code：Opus 5 safeguards 误判（`#84353`/`#84361`）
- OpenAI Codex：`#37161` 网络安全请求误拦、`#37190` 一次拒绝即终止
- Gemini CLI：`#22093` 子代理绕过 agents 禁用、`#22672` 危险 `git reset --force`
- Qwen Code：`#8582` read-only shell 分类器被绕过（P1）、`#8136` Provider URL 密码泄露
- OpenCode：`#37564` LLM 权限分类器

### 5. **跨平台/桌面端稳定性**
- Claude Code：Desktop 闪退（`#83403`）、Windows GPU 崩溃（`#83744`）
- OpenAI Codex：Windows 进程风暴、`vk_swiftshader.dll` Code Integrity
- Qwen Code：Desktop Windows 启动 EISDIR、复制按钮无效、语言切换失效
- Pi：Windows 安装路径分散（`#7547` 维护者主动调研）
- DeepSeek TUI：PR #5095 Windows 路径含空格链接器拆分

### 6. **多 Provider / BYOM 灵活性**
- OpenCode：`#16017` Go 订阅 API（128 👍）、`#23153` 加密货币支付、`#29308` LiteLLM 同步
- Pi：Qwen Token Plan（#7659）、Bedrock Mantle（#6216）、Copilot 策略修复（#7672）
- DeepSeek TUI：`#5250` 多 API Key 存储
- Claude Code：误归属统计（`#84359` Opus 5 记到 Fable 5）

---

## 四、差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | Kimi Code | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|------|-------------|--------------|------------|-------------|-----------|----------|----|-----------|--------------|
| **核心模型绑定** | 强（Anthropic） | 强（OpenAI） | 强（Google） | 中（Copilot 多模型） | 强（Kimi） | **弱（BYOM）** | **弱（BYOM）** | 强（Qwen） | 中（DeepSeek + GLM） |
| **桌面端策略** | 独立 Electron | Codex.app + Win | WebShell 一体化 | IDE 优先 | CLI 为主 | Tauri + Hosted | TUI 为主 | Desktop v0.1.0（Web Shell） | TUI 演进中 |
| **架构路线** | Marketplace 治理 | Skills crate 抽象 | Subagent + AST | Worktree 集成 | ACP 多形态客户端 | V2 数据迁移 + Workspace | Harness v2 Lane Reducer | WebShell 后端 + Tauri | **Runtime API（被托管）** |
| **目标用户** | Pro/Max 高阶个人/团队 | 企业 + 安全研究 | Gemini 3 生态 | GitHub 企业 | 中文个人/小团队 | **多模型开发者** | 嵌入式扩展宿主 | 中文 + Live Voice | **远程托管客户端** |
| **数据完整性担忧** | 配额/扣费 | 会话污染 | 子代理假成功 | 多会话管理 | **非 UTF-8 静默损坏** | V1→V2 迁移 | XDG 规范 | URL 凭据泄露 | 多 Key 覆盖 |

> **关键差异点**：
> - **OpenCode 与 Pi** 是唯二明确"模型无关"路线的工具，因此获得最强的多 Provider 生态诉求；
> - **DeepSeek TUI** 正在尝试向"Agent Runtime Platform"演进（5 个 Runtime API PR 是最强信号）；
> - **Gemini CLI 与 Qwen Code** 均选择"Web Shell 作为 UI 中枢"，但 Qwen 走 Tauri、Electron 弃用，Gemini 走原生融合；
> - **Kimi Code CLI** 单日数据虽少，但暴露的 UTF-8 静默损坏（#2591）是 9 款工具中最危险的"Agent 副作用"类 Bug。

---

## 五、社区热度与成熟度

### 🟢 高活跃 + 快速迭代期
- **Pi**：50+ Issues + 37 PRs，issue 与 PR 比值近 1:1，标志项目处于**架构演进期**（Harness v2、AGENTS.override.md、多 Provider 接入）；
- **OpenAI Codex**：Top10 平均评论数 25+，单 Issue #9203 达 373 👍，反映**用户基数大、诉求集中**；
- **Gemini CLI**：约 50 Issues，P1/P2 占比 60%，PR 当日合入率 ~80%，体现**高频小修 + 结构性演进并行**；
- **OpenCode**：高赞长尾 Issue（#11176 134 👍、#16017 128 👍）+ V2 平台级重构 PR（#40723、#40784），处于**产品形态跃迁期**。

### 🟡 高活跃 + 信任修复期
- **Claude Code**：议题集中在"计费不透明 + Opus 5 行为异常"，Top10 中 4 条与配额/扣费直接相关，社区情绪从"工具选择"转向"信任评估"，是**最需要产品级回应**的工具；
- **Qwen Code**：Desktop v0.1.0 首发即遭遇 Windows 启动崩溃、Markdown 链接失效等"首版质量债"，**风险与机遇并存**。

### 🟡 稳定维护期
- **Copilot CLI**：4 个预发布版本密集迭代但 Top Issues 少，以 MCP 边缘场景为主，呈现**渐进式打磨**节奏。

### 🟠 平台化转型期
- **DeepSeek TUI**：Issues 极少（3 条），PR 主导且 5 个 Runtime API 并发合入，处于**"工具→平台"静默跃迁**阶段，建议关注 v0.9.4 发布后的开发者反馈。

### 🟠 数据静默期 / 节奏紧凑
- **Kimi Code CLI**：3 Issues + 3 PRs 形成精准闭环（#2588 触发 2 个修复 PR），**小而精**的项目运营风格；需警惕 #2591（UTF-8 静默损坏）的扩散风险。

---

## 六、值得关注的趋势信号

### 📈 趋势 1：Agent Runtime Platform 化
**信号强度：🔴🔴🔴🔴🔴**
DeepSeek TUI 的 5 个 Runtime API PR（#5129–#5133）一次性补全 Memory/MCP/Goal-loop/Credentials/Skill 五类资源端点；OpenCode PR #40784 把 Workspace 定义为"持久化执行环境"；Claude Code v2.1.223 引入 fork 资源告警。三者从不同角度共同指向：**未来的 AI CLI 不再是"前端 + 后端"两层，而是"客户端 + 可被托管的运行时"**。开发者应关注自己依赖的工具是否提供了可编程的运行时接口。

### 📈 趋势 2：MCP 从"加分项"变成"基础设施"
**信号强度：🔴🔴🔴🔴🔴**
9 款工具中有 7 款今日出现 MCP 相关 Bug/修复，覆盖僵尸进程、参数截断、OAuth 竞态、工具注入、跨进程握手等**生产级缺陷**。MCP 已不再是"实验性扩展"，而是 CLI Agent 调用外部能力的默认通道；开发者集成 MCP 时应预设：子进程治理、错误超时、字段校验必须自行兜底。

### 📈 趋势 3：失败语义成为差异化护城河
**信号强度：🔴🔴🔴🔴**
- Kimi Code #2588：副作用已落地却中断 → 修复为"降级而非中止"（PR #2592）
- Gemini CLI #22323：子代理中断却上报 GOAL success → 状态语义与终止语义脱节
- Claude Code #72228/#84362：参数静默丢失
- Qwen Code #8582：read-only shell 分类器被绕过

行业正在从"能不能跑通"转向"出错时是否安全、可解释、可恢复"。**fail-soft + 显式错误 + 状态可观测** 正在成为新一代 Agent 框架的标配设计哲学。

### 📈 趋势 4：跨会话记忆成为"标准化缺口"
**信号强度：🔴🔴🔴**
Kimi #1283（19 评论、5 月长尾）、Claude Code #81946（项目内携带 transcript）、OpenCode #40348（全局 AGENTS.md 被遗忘）形成跨厂商共性诉求。**所有 9 款工具都没有完美的记忆系统**——这是开源/自托管工具最容易突破的差异化点。

### 📈 趋势 5：桌面端进入"首版质量债"高发期
**信号强度：🔴🔴🔴**
Claude Desktop 闪退、Codex Windows 进程风暴、Qwen Desktop v0.1.0 Windows 启动崩溃，三起典型"v1.0 危机"。**桌面端从"加分项"变为"必选项"，但稳定性尚未跟上**。建议企业用户继续优先用 CLI，桌面端用于演示与单任务场景。

### 📈 趋势

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-08-06 · 数据源：anthropics/skills*

---

## 1. 热门 Skills 排行（Top 8）

以下 Skills 按社区关注度（评论 + 👍 + 跨 Issue/PR 联动热度）综合排序：

| 排名 | Skill | PR | 状态 | 核心价值 |
|---|---|---|---|---|
| 🥇 | **skill-creator 评测体系修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | OPEN | 修复 `run_eval.py` 永远返回 `recall=0%` 的核心 bug，直接影响所有 Skill 描述优化的可信度 |
| 🥈 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | OPEN | 解决孤行/寡行/编号错位等 AI 生成文档的通病，覆盖面广 |
| 🥉 | **self-audit (v1.3.0)** | [#1367](https://github.com/anthropics/skills/pull/1367) | OPEN | 提供机械文件核验 + 四维推理质量门禁，通用审计能力 |
| 4 | **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | OPEN | OpenDocument 创建/模板填充，填补 LibreOffice/ODF 格式空白 |
| 5 | **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | OPEN | Meta-Skill，用于评估 Skill 本身的质量与安全性 |
| 6 | **plan-file-hygiene** | [#1479](https://github.com/anthropics/skills/pull/1479) | OPEN | 解决规划产物堆积、缺乏生命周期的治理问题 |
| 7 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | OPEN | 测试金字塔 + React/单元/E2E 测试模式一站式指南 |
| 8 | **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | OPEN | 命名色、色彩空间、色阶的专业知识库 |

**讨论热点**：
- **skill-creator 评测失效**成为最大公约数式的问题（PR #1298, #1099, #1050, #1323, #1261 + Issue #556, #1169 多方联动），说明社区在 Skill 元工具链上仍有显著可信度缺口。
- **文档处理类 Skill**（typography / ODT / docx 修复 / pdf 修复）集中爆发，反映"生成文档可被人类直接消费"是当前核心痛点。

---

## 2. 社区需求趋势（来自 Issues）

按评论 + 👍 综合热度排序的诉求方向：

### 🔴 高优先级方向

| 方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论/2 👍） | 社区 Skill 在 `anthropic/` 命名空间下发，造成"冒充官方"的信任漏洞 |
| **企业级共享分发** | [#228](https://github.com/anthropics/skills/issues/228)（16/8 👍） | Claude.ai 缺少组织级 Skill 共享，现状需手动下载上传 |
| **评测/触发率可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12/7 👍）、[#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` 触发率 0%，描述优化循环在噪声上跑 |
| **Skill 可见性/数据丢失** | [#62](https://github.com/anthropics/skills/issues/62)（10 评论） | 用户 Skill 莫名不可用，原始下载文件可能被破坏 |

### 🟡 中优先级方向

| 方向 | 代表 Issue | 核心诉求 |
|---|---|---|
| **上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | `claude-api` 注入 ~156k tokens，单次 tool call 即耗尽 |
| **规划/记忆生命周期** | [#1329](https://github.com/anthropics/skills/issues/1329) | 长期 agent 需要紧凑的符号化记忆（compact-memory） |
| **Skill 重复安装** | [#189](https://github.com/anthropics/skills/issues/189)（6/9 👍） | `document-skills` 与 `example-skills` 内容重叠 |
| **Agent 治理与安全** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭） | 需要策略执行/威胁检测/审计追踪的治理 Skill |
| **质量门禁流程** | [#1385](https://github.com/anthropics/skills/issues/1385) | 任务前校准 → 对抗性评审 → 交付核验 三门管道 |
| **OOXML 文档质量** | [#12](https://github.com/anthropics/skills/issues/12) | docx 写入时空白格式破坏文件可读性 |

### 🟢 长期生态诉求

- **AWS Bedrock 兼容**（[#29](https://github.com/anthropics/skills/issues/29)）— Skills 与第三方托管平台的桥接
- **Skill → MCP 暴露**（[#16](https://github.com/anthropics/skills/issues/16)）— 把 Skill 封装为标准 MCP API
- **skill-creator 自身最佳实践**（[#202](https://github.com/anthropics/skills/issues/202)，已关闭）— 编写风格过于开发者文档化、违反命名规范
- **SharePoint 权限与安全模式**（[#1175](https://github.com/anthropics/skills/issues/1175)，已关闭）

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃 / 多次更新 / 解决真实痛点，但当前仍未合并：

| PR | Skill | 亮点 | 最近更新 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测体系修复 | 4 个关联 PR (#1099/#1050/#1323/#1261) + 2 个 Issue (#556/#1169) 共同印证 | 2026-06-23 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 适用范围最广的文档质量 Skill | 2026-03-13 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 唯一覆盖 OpenDocument 的提案 | 2026-04-14 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 与 #1385 三门管道呼应 | 2026-07-02 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality/security analyzer | 唯一覆盖"Skill 元评估"的提案 | 2026-01-07 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 回应 #1417 长期遗留问题 | 2026-07-27 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 多次迭代，更新密集 | 2026-07-21 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 补齐测试方法论空白 | 2026-04-21 |

> 📌 **观察**：仓库整体合并节奏偏慢，OPEN 状态的 PR 占绝对多数（PR #1298 等关键修复已等 2 个月以上），"评审/合并通路"可能是社区当前的最大隐性瓶颈。

---

## 4. Skills 生态洞察

> **一句话总结：社区当前最集中的诉求是"建立可信赖的 Skill 元工具链与治理体系" —— 即先用 skill-creator / skill-quality-analyzer / self-audit / 安全命名空间 等基础设施把 Skill 的"创建 → 评估 → 审计 → 分发"四步走通，再让专业领域 Skill（typography / ODT / color / testing）持续扩展。**

---

### 📎 附录：仓库治理信号

- 社区健康度得分仅 **25%**（PR #509），`CONTRIBUTING.md` 是首批补齐项之一。
- Issue #492（43 评论）揭示的"信任边界"问题，可能是 anthropics/skills 从"开放集市"走向"可治理生态"的关键转折点。
- PR #1298 一旦合并，将同时解锁 #556、#1169、#1261 等多个 issue 的推进，是近期最高杠杆的合并动作。

---

# Claude Code 社区动态日报

**日期**：2026-08-06
**数据源**：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日社区最显著的两条主线：**会话/计费系统稳定性**与 **Opus 5 模型行为异常**。一方面，Max/Pro 用户集中反馈配额消耗异常、误降级与 Phantom 扣费（`#82506`、`#84358`、`#84360`、`#84353`），另一方面 Opus 5 的安全性误判（`#84353`、`#84361`）和语言风格问题（`#77136`）持续被开发者吐槽。同时 v2.1.223 正式发布，引入了 marketplace 的 owner 通配符管理与对 fork 资源/后台 agent 的安全告警机制，回应了长期被诟病的"供应链信任"问题。

---

## 🚀 版本发布

### [v2.1.223](https://github.com/anthropics/claude-code/releases/tag/v2.1.223)

- **Marketplace 批量授权机制**：在 `strictKnownMarketplaces` 与 `blockedMarketplaces` 受管设置中新增 `owner/*` 通配符，可一次性放行/屏蔽某个 GitHub 组织下所有 marketplace 仓库，对企业 IT 治理友好。
- **新增告警**：对 workflow agents、fork 来的 skills、slash commands 以及"恢复的后台 agent"在加载时增加显式警告，降低供应链投毒与误用风险。
- 关联代码改动请关注后续 PR（release notes 部分被截断，未展示完整 changelog）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 社区反应 |
|---|---|---|---|
| [#82506](https://github.com/anthropics/claude-code/issues/82506) | **Claude Max 配额疑似被误扣**：session limit 在未真正使用的情况下被消耗 | 直接影响订阅用户信任与计费公平性，是近一周讨论度最高的工单 | 17 评论 / 7 👍 |
| [#66504](https://github.com/anthropics/claude-code/issues/66504) | **默认在 commit/PR 中追加 Session URL 应改为 opt-in** | 涉及隐私与代码卫生，46 赞是本期工单最高票，社区强烈希望关闭该默认行为 | 12 评论 / 46 👍 |
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Opus 4.8 语言风格令人不适；Opus 5.0 连贯性进一步恶化** | 模型层体验问题，且是少有的将 4.8 与 5.0 并列对比的工单，影响选型 | 8 评论 / 8 👍 |
| [#83403](https://github.com/anthropics/claude-code/issues/83403) | **Claude Desktop 在 5 小时限额附近闪退且无法重开，需完全重装** | 桌面端稳定性问题，恢复路径缺失，对长任务用户影响严重 | 7 评论 |
| [#82536](https://github.com/anthropics/claude-code/issues/82536) | **`--continue` 无法恢复由 `-p`（交互恢复）创建的会话** | 命令行核心工作流断裂，影响 CLI 重度用户 | 7 评论 |
| [#72228](https://github.com/anthropics/claude-code/issues/72228) | **MCP 工具调用在长参数后静默丢弃后续参数** | 复现链路清晰（v2.1.195），影响所有依赖 MCP 工具链的项目 | 5 评论 |
| [#83744](https://github.com/anthropics/claude-code/issues/83744) | **Claude Desktop (Windows) GPU 进程崩溃（exitCode 101457950）致整体退出** | Windows 桌面端高危崩溃栈，缺失 fallback | 4 评论 |
| [#74715](https://github.com/anthropics/claude-code/issues/74715) | **Claude-in-Chrome 的 "Always allow" 实际持久化为 `once`，白名单为空** | 影响浏览器扩展可用性，与 `approval-sites` 配置完全失效 | 4 评论 |
| [#81946](https://github.com/anthropics/claude-code/issues/81946) | **会话 transcript 应可项目内携带，scratch 文件仍走本地** | 解决"换机器/换分支就丢失上下文"的长期痛点，被多人加心愿 | 3 评论 |
| [#84353](https://github.com/anthropics/claude-code/issues/84353) | **授权的安全测试工作被 Opus 5 safeguards 误判并静默降级到 Opus 4.8**（今日） | 与 `#84340`、`#84361`、`#84359` 形成"Opus 5 行为/计费"集群，反映出新模型推广期的稳定性欠账 | 0 评论（新） |

> **附加值得关注（今日新增 0 评论）**：`#84362` 揭示 tag-grammar 工具调用解析器在闭合标签失配时存在 ~6.2% 静默字段丢失，影响 MCP 富参数调用可靠性；`#84355` 与 `#74715`、`#77605` 共同构成 Claude-in-Chrome 的"权限持久化失效"三角。

---

## 🛠 重要 PR 进展

由于过去 24 小时 PR 仅有 3 条更新，逐条简述：

1. **[#41661](https://github.com/anthropics/claude-code/pull/41661) Add 14 Revolutionary Claude Code Plugins — Security, Performance, Architecture, Fullstack Automation**
   作者 `cliffordjose` 提交了 14 个新插件与扩展后的 marketplace（合计 27 个），覆盖安全审计、性能调优、架构治理与全栈自动化方向。该 PR 已存在较长时间（创建于 3 月底），目前仍未合并，社区关注度高但维护者尚未给出 review 反馈。

2. **[#16929](https://github.com/anthropics/claude-code/pull/16929) fix(code-review): respect `--comment` flag for GitHub posting**
   修复 `/code-review` 命令与 README 描述不一致的问题：未传 `--comment` 时输出到终端，传 `--comment` 时才推到 GitHub。该修复语义清晰、回归风险低，临近可合并状态。

3. **[#84138](https://github.com/anthropics/claude-code/pull/84138) fix: workaround for self-signed certificate error in Cowork**
   解决 Bun 运行时（macOS、无代理）不加载系统证书导致 "Self-signed certificate detected" 的问题，关闭 #24470。涉及 Cowork 模式下的 SSL 信任链处理，建议优先合入并补充文档说明企业代理下的处理方式。

---

## 📈 功能需求趋势

从 50 条活跃 Issue 中可归类出以下高频方向：

1. **会话与计费透明度（热度最高）**
   - 配额异常扣减（`#82506`、`#84340`、`#84353`、`#84358`、`#84360`）
   - 误归属统计（`#84359` Opus 5 用量被记到 Fable 5）
   - 跨设备/跨项目的会话恢复（`#81946`、`#82536`、`#84354` Windows 大小写哈希导致"过去的会话"为空）
   - 共同诉求：可观测、可申诉、可回滚的会话/配额系统。

2. **MCP 与工具调用可靠性**
   - 长参数截断（`#72228`）、tag-grammar 字段丢失（`#84362`）、forked skills 风险告警（v2.1.223 新增）
   - 开发者希望 MCP 层提供更严格的 schema 校验与"必填字段缺失即失败"的硬失败模式。

3. **Claude-in-Chrome 浏览器扩展成熟度**
   - 站点权限持久化（`#74715`、`#84355`）、跨机器身份识别（`#77605`）
   - 单一会话 90 分钟 813 条授权提示的极端案例（`#84355`）说明当前权限 UX 仍不可用。

4. **IDE / 终端 UX 改进**
   - `#66504` 主张 Session URL 默认 opt-in
   - `#84348` 希望左箭头 detach-to-background 手势可关闭/重绑
   - `#72649` Warp 终端下快捷键回归
   - `#79867` macOS TCC 对话框把版本号当作 app 名（信任与合规风险）

5. **安全研究 / 红队工作流的误判问题**
   - `#84353`、`#84361`、`#84340` 集中反映 Opus 5 的 safeguards 对合法防御性工作产生假阳性，并触发静默模型降级。社区呼吁增加"研究/红队"身份标签或白名单路径。

6. **生态扩展与 Marketplace 治理**
   - 大量插件申请（`#41661` 14 个插件）+ v2.1.223 的 `owner/*` 通配符：社区正逐步要求"组织级信任"取代单仓白名单。

---

## 🧭 开发者关注点（痛点 & 高频需求）

- **🔴 信任与可解释性**：计费/配额类问题（`#82506`、`#84358`、`#84360`）累积了显著的负面情绪，开发者的核心诉求是"告诉我**为什么**被扣费、**哪一步**触发了降级"。v2.1.223 引入 fork 资源告警是方向性改善，但配额层面尚缺同等可观测性。
- **🔴 Opus 5 推广期的成熟度**：模型上线初期的行为不稳定（语言风格 `#77136`、safeguards 误判 `#84353`/`#84361`）与"自动降级到 4.8"的产品决策，正在侵蚀 Pro/Max 高阶用户的信任。
- **🟡 MCP 是关键路径，但脆弱**：工具调用参数丢失（`#72228`、`#84362`）是**静默错误**，比崩溃更危险——调用"成功"了但数据不对。开发者希望默认开启严格 schema 校验。
- **🟡 Claude-in-Chrome 的可用性**：当前权限 UX 在自动化场景下不可用（`#84355`），且站点白名单机制失效（`#74715`），需要重新设计持久化层。
- **🟢 Marketplace 治理是亮点**：v2.1.223 的 `owner/*` 通配符精确回应了企业用户需求，是近期少有的"结构性"改进。
- **🟢 项目内可携带的会话**：`#81946` 提议的"transcripts 跟项目走、scratch 留本地"模型，被多位开发者引用为理想形态，值得纳入 roadmap。

---

*日报生成时间：2026-08-06｜数据范围：过去 24 小时更新*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-06**

---

## 📌 今日速览

今日 Codex 仓库持续高频迭代，**rust-v0.146.1 稳定版正式发布**，重点修复了具备网络安全能力的模型自动审查默认值与权限变更的可解释性问题；同时 `0.147.0` Alpha 通道集中更新了 5 个预发布版本（alpha.10–13 + alpha.6.5），为下一稳定版做准备。社区方面，**Windows 桌面端的稳定性问题集中爆发**——子进程泄漏、GPU 进程崩溃、AppX 包损坏、Sysmon 驱动冲突等高频出现，MCP 集成与网络安全内容过滤也持续受到开发者关注。

---

## 🚀 版本发布

### rust-v0.146.1（稳定版）
- **核心修复**：针对具备网络安全（cyber-capable）能力的模型，应用更安全的自动审查默认值
- **改进**：在终端界面中更清晰地解释权限变更过程
- Backport PR：#37057

### rust-v0.147.0-alpha 通道（5 个连续预发布）
`alpha.10` → `alpha.11` → `alpha.12` → `alpha.13`，以及 `alpha.6.5` 修补版。建议开发者关注 alpha.13 并提前试用新能力。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 类别 | 热度 | 为什么值得关注 |
|---|-------|------|------|----------------|
| 1 | [#9203](https://github.com/openai/codex/issues/9203) 恢复 `/undo` 命令 | enhancement, TUI | 💬70 👍373 | **社区呼声最高的增强请求**，373 个赞说明当 Codex 误删未 git 跟踪的文件时缺少撤销手段是普遍痛点 |
| 2 | [#12491](https://github.com/openai/codex/issues/12491) Codex.app 1300+ 僵尸进程、37GB 内存泄漏 | bug, MCP, app | 💬32 | 严重影响 macOS 桌面端稳定性，提示 MCP 子进程回收机制存在严重缺陷 |
| 3 | [#33776](https://github.com/openai/codex/issues/33776) Windows 桌面端 taskkill/conhost 进程风暴 | bug, Windows | 💬30 👍27 | Windows 端产生 287+ 子进程，导致 WMI 故障和 DWM 退化 |
| 4 | [#19425](https://github.com/openai/codex/issues/19425) 自定义 stdio MCP 工具未暴露到 Desktop | bug, MCP | 💬29 | MCP 工具发现（`tools/list`）成功但未注入到 Desktop 线程，存在回归风险 |
| 5 | [#23979](https://github.com/openai/codex/issues/23979) 更新后本地会话历史丢失 | bug, app | 💬26 | `state_5.sqlite` 数据仍在但 UI 不显示，可能为数据迁移或索引 bug |
| 6 | [#31035](https://github.com/openai/codex/issues/31035) Windows 反复安装 SysmonDrv 触发 BSOD | bug, sandbox | 💬23 | 安全沙箱组件触发内核级蓝屏，影响范围严重 |
| 7 | [#37161](https://github.com/openai/codex/issues/37161) 网络安全请求过滤严重误判 | bug, safety | 💬5 👍1 | 静态分析、模糊测试、漏洞检测等合法研究任务被误拦 |
| 8 | [#32177](https://github.com/openai/codex/issues/32177) 附加文本日志触发"Request blocked" | bug, session | 💬14 👍16 | 一次附件就能污染后续整个会话，session 恢复机制存在脆弱性 |
| 9 | [#34684](https://github.com/openai/codex/issues/34684) macOS 上 `codex mcp login` OAuth 失败 | bug, MCP, CLI | 💬10 | 同一版本 Linux 工作正常，macOS arm64 失败，疑似平台差异 |
| 10 | [#37002](https://github.com/openai/codex/issues/37002) Codex App 无法通过内建更新安装 | bug, app | 💬20 | macOS 12 用户点击 Update 后无响应，影响升级链路 |

> 多个已关闭 Issue（#35481、#35352、#35635、#35637、#35566、#35737、#24527）均集中在 Windows 桌面端的 GPU 进程崩溃与 `vk_swiftshader.dll` Code Integrity 拦截问题，反映近期 Windows 端存在系统性问题簇。

---

## 🔧 重要 PR 进展（Top 10）

| # | PR | 主题 | 影响 |
|---|----|----|------|
| 1 | [#37191](https://github.com/openai/codex/pull/37191) 在 rollout 迁移中保留遗留语义 | 保留历史回滚与压缩检查点，避免线程恢复后上下文变化 |
| 2 | [#37190](https://github.com/openai/codex/pull/37190) 网络安全模型在一次 Guardian 拒绝后中断 | 新增 cyber 模型专用的断路器策略，首次拒绝即终止回合 |
| 3 | [#37189](https://github.com/openai/codex/pull/37189) 在 world state 中追踪多智能体使用提示 | 跨会话恢复时可携带最新的多智能体使用配置 |
| 4 | [#37188](https://github.com/openai/codex/pull/37188) 保留 `tool_search` 命名空间 | 防止命名空间工具与内置搜索工具冲突，规范 BM25 发现原语 |
| 5 | [#37178](https://github.com/openai/codex/pull/37178) 在 app-server 项目中保留图片透明元数据 | `transparentBackground` 字段贯通 API 与旧版事件 |
| 6 | [#37177](https://github.com/openai/codex/pull/37177) 显式 skill 选择迁入 skills crate | 解耦显式提及选择与核心 skill 加载模型 |
| 7 | [#37175](https://github.com/openai/codex/pull/37175) 分页历史中加入遗留 rollout 迁移 | `LocalThreadStore::migrate_rollouts` 支持干运行与吞吐限速 |
| 8 | [#37168](https://github.com/openai/codex/pull/37168) 限制远程 MCP 握手 HTTP 请求 | 防止 streamable HTTP MCP 握手超时后阻塞串行执行器 |
| 9 | [#37166](https://github.com/openai/codex/pull/37166) 文本框光标与渲染保留在视口内 | 修复 TUI 边界处的光标跳转与溢出换行问题 |
| 10 | [#37154](https://github.com/openai/codex/pull/37154) macOS 公证改用 Azure Key Vault | 将 App Store Connect 私钥托管在 Azure，避免泄露到 release runner |

> **协作模式观察**：今日大量 PR 由 `copyberry[bot]` 提交并快速合并（多数为 CLOSED 状态），反映 Codex 团队正以批量化方式推进技能系统、MCP 集成与历史数据迁移的重构。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / 主题 | 趋势信号 |
|------|-------------------|----------|
| **TUI/CLI 体验** | #9203（/undo）、#24527（输入延迟）、#37166（视口光标） | 编辑可控性是 CLI 用户的首要诉求 |
| **MCP 生态完善** | #12491、#19425、#32101、#34684、#37167、#37168 | MCP 协议集成逐步成为 Codex 的核心扩展面，问题集中在子进程治理、工具暴露、OAuth 兼容 |
| **网络安全/安全策略** | #37057、#37161、#37190 | 安全边界收紧（自动审查、断路器）的同时带来误报，开发者期待精细化策略 |
| **Windows 桌面端稳定性** | #33776、#31035、#35635、#35737、#35566、#35841 | 进程治理、GPU 兼容、AppX 包签名、沙箱驱动冲突构成系统性挑战 |
| **会话与历史管理** | #23979、#32177、#37175、#37191 | 数据迁移、上下文污染、压缩算法持续优化 |
| **技能（Skills）系统重构** | #37177、#37169、#37174、#37162、#37149 | codex-skills crate 正成为新核心抽象层 |

---

## 🧑‍💻 开发者关注点

1. **沙箱/安全过度收紧带来的误伤** —— 网络安全研究、漏洞分析、编译器测试等合法场景被频繁拦截，社区希望分级策略或白名单机制（参见 #37161）。

2. **Windows 桌面端"信号噪声"** —— 多个进程风暴与 AppX 损坏问题在短期内集中出现，开发者反馈微软商店/MSIX 分发链路和 GPU/SwiftShader 兼容是主因。

3. **MCP 子进程生命周期管理** —— 多份 Issue 指向子进程未回收、HTTP 握手未超时控制、工具未注入线程等，意味着 MCP 已成为生产可用性的关键瓶颈。

4. **可恢复性与可解释性** —— `/undo` 呼声极高（373 赞），权限变更说明、Guardian 拒绝可视化等"信任建设"功能在 0.146.1 与 #37190 中已得到部分回应。

5. **构建与发布工程改进** —— #37154（Azure Key Vault 公证）显示团队正在加固 macOS 发布链路，避免私钥泄露；建议外部贡献者关注该方向。

---

> 📎 **数据来源**：[github.com/openai/codex](https://github.com/openai/codex)  
> 📊 **统计窗口**：2026-08-05 → 2026-08-06（24h）  
> 🛠 **建议**：若您仍在使用 `codex-cli < 0.146.1`，建议尽快升级；若依赖 MCP，请关注 #37168 与 #37167 的修复并入稳定版的进度。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：** 2026-08-06
**数据来源：** github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 同步发布了 **v0.54.0 稳定版** 与 **v0.55.0-preview.1 预览版**，夜间构建同步进入 0.55.0 周期。社区关注焦点集中在**子智能体（subagent）行为可靠性**与**Auto Memory 系统稳定性**两大方向，多个 P1 级 Bug 影响实际使用体验。与此同时，SDK 层与核心循环相关的修复密集合入，涉及工具参数容错、流式错误处理、Child 进程信号传递等多个长期痛点。

---

## 🚀 版本发布

### v0.54.0（稳定版）
- 自动生成的 Changelog 已就绪（[#28708](https://github.com/google-gemini/gemini-cli/pull/28708)），主要为 0.53 系列的合并与小修复。
- 标签：`v0.54.0`，处于常规稳定通道。

### v0.55.0-preview.1（预览版）
- 由 [`gemini-cli-robot`](https://github.com/google-gemini/gemini-cli) 自动合入（[#28706](https://github.com/google-gemini/gemini-cli/pull/28706)）。
- 同步合入 [`#28569`](https://github.com/google-gemini/gemini-cli/pull/28569) 的 nightly 版本号 bump。

### v0.55.0-nightly.20260806.g761f604c1
- 关键变更：
  - [`#28551`](https://github.com/google-gemini/gemini-cli/pull/28551)：**macOS Seatbelt 沙箱配置回退修复**（[@amelidev](https://github.com/amelidev)）— 当内置 seatbelt 配置文件缺失时，自动回退至嵌入的默认 profile，提升 macOS 沙箱启动鲁棒性。
  - [`#28569`](https://github.com/google-gemini/gemini-cli/pull/28569)（partial）：**PR 生成器核心模块**新增 environment 配置解析器、命令执行器与 GitHub 集成（[@joneba-google](https://github.com/joneba-google)），为后续自动 PR 流水线奠基。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论数 | 为什么值得关注 |
|---|-------|--------|--------|----------------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent MAX_TURNS 后仍上报 GOAL success** | P1 | 12 | 暴露出子智能体终止语义与状态汇报不一致的根因问题，隐藏实际中断，影响可信度。社区反复出现 12 条评论追溯上下文，是当前最热的故障讨论。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent 永久挂起** | P1 | 8 | 用户报告调用 generalist 子代理后 CLI 永久卡死，必须通过显式禁止 defer 才能绕过。👍8 是今日高反应度问题，对通用工作流破坏极大。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 + 执行后意图路由** | P2 | 8 | 战略级 EPIC：把 Gemini 3 原生 bash 亲和力与系统级 sandbox 结合起来，决定 CLI 的"代理化"安全模型走向。 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **健壮的组件级评测** | P1 | 7 | 在已有 76 个行为评测基础上继续建设评测基础设施，是保证 Gemini 3 切换期不回归的关键。 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知的文件读取 / 搜索 / 映射** | P2 | 7 | 直接降低 token 噪声与多轮读取开销，是效率与成本优化的核心议题。 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 几乎不主动调用 skills / sub-agents** | P2 | 6 | 反映默认 system prompt 的能力发现机制薄弱，自定义技能"形同虚设"，是大量用户痛点。 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) **Auto Memory 无限重试低信号会话** | P2 | 5 | Memory 后台提取对"低信号"会话反复重读，资源浪费且会污染索引。 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 执行完成后卡在 "Waiting input"** | P1 | 4 | 简单 CLI 命令也会触发 hang，影响日常交互流畅性。 |
| 9 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 日志与确定性脱敏** | P2 | 4 | 安全相关：在模型已读取上下文后才脱敏，存在泄露窗口，亟需前置脱敏。 |
| 10 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) **browser_agent 会话接管与锁恢复** | P3 | 4 | persistent 模式下浏览器 profile 锁导致 fail-fast，影响长时间任务可靠性。 |

> 其他值得跟踪：[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)（Auto Memory inbox 无效 patch 静默丢弃）、[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)（agents 目录符号链接无法识别）、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)（Wayland 下 browser 子代理失败）。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 类型 | 说明 |
|----|------|------|
| [#28607](https://github.com/google-gemini/gemini-cli/pull/28607) | **修复（CLOSED）** | 修复 v0.53.0 回归 `API Error 400: Function call is missing a thought_signature`：在剥离 thought 部件时保留 `functionCall.thoughtSignature`，对 Gemini 2.x / 现代模型切换更安全。 |
| [#28695](https://github.com/google-gemini/gemini-cli/pull/28695) | **修复（CLOSED）** | SDK `sendStream` 在 tool 参数为字符串时使用未保护的 `JSON.parse`，一处模型输出错误就会让整个生成器崩溃；改为结构化 `functionResponse` 错误回传。Closes [#28649](https://github.com/google-gemini/gemini-cli/issues/28649)。 |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | **修复（CLOSED）** | GCA agent 模式在 `MODEL_CAPACITY_EXHAUSTED`（429）时陷入对同一模型的死循环，改为正确回退到 Flash 等可用模型。 |
| [#28700](https://github.com/google-gemini/gemini-cli/pull/28700) | **修复（CLOSED）** | 修复"模型替你续写句子"问题：工具调用被中断后，新用户消息被错误融合进中断轮次，导致模型将其视为续写文本。 |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | **修复（CLOSED）** | 同时修复两处：`/compress` 重载会话失败，以及 quota fallback 工具响应丢失导致上下文损坏。 |
| [#28689](https://github.com/google-gemini/gemini-cli/pull/28689) | **修复（CLOSED）** | 解析 gaxios 嵌套流式错误，正确分类限流与配额错误，提升 GCA 配额提示体验。 |
| [#28688](https://github.com/google-gemini/gemini-cli/pull/28688) | **修复（OPEN）** | Google Cloud Workstations VM 内 OAuth 回调动态解析 redirect URI，不再硬编码 `localhost`。 |
| [#28677](https://github.com/google-gemini/gemini-cli/pull/28677) | **修复（OPEN，help wanted）** | `IdeClient.getInstance()` 进程遍历加 3s 超时，避免 TUI 永久卡在 "Initializing..."。 |
| [#28676](https://github.com/google-gemini/gemini-cli/pull/28676) | **修复（OPEN，help wanted）** | `relaunchAppInChildProcess` 转发 SIGTERM/SIGHUP/SIGINT/SIGQUIT 等终止信号到子进程，避免出现孤儿进程。 |
| [#28694](https://github.com/google-gemini/gemini-cli/pull/28694) | **修复（CLOSED）** | 兼容不允许删除 dist-tag 的 npm 镜像（Wombat Dressing Room），解决夜间发布流程中断问题。 |

> 另：依赖升级 [`#28704`](https://github.com/google-gemini/gemini-cli/pull/28704)（postcss 8.5.25）、[`#28703`](https://github.com/google-gemini/gemini-cli/pull/28703)（fast-uri 安全修复）已合并；基础设施侧 [`#28431`](https://github.com/google-gemini/gemini-cli/pull/28431) 完成 SSR 代码生成流水线的 Cloud Run Job + Workflow + Dockerfile 配置（CLOSED）。

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 中可以提炼出社区最关心的几条主线：

1. **子智能体（Subagent）能力升级** — 占比最高的话题线。包含：能力发现（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）、可观测性（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) 轨迹分享）、权限/沙箱（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）、行为可靠性（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）。
2. **AST 感知的工具链** — 多文件读取 / 代码库映射从"文本行号"升级为"结构感知"，目标：减轮次、减 token、降噪声（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）。
3. **Auto Memory 系统改造** — 围绕脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）、低信号去重（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）、无效 patch 处理（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）的整体质量提升（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 跟踪）。
4. **零依赖 OS 沙箱 + 意图路由** — 把 Gemini 3 的 bash 亲和力与系统级沙箱结合，构成下一代代理执行模型（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）。
5. **评测基础设施** — 行为评测从 76 个扩展到更细粒度的组件级，覆盖更多模型与工作流（[#24353](https://github.com/google-gemini/gemini-cli/issues/24353)）。
6. **浏览器子代理可靠性** — 会话接管、Wayland 兼容、配置覆盖（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。
7. **CLI 体验打磨** — 终端 resize 性能（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、外置编辑器退出后渲染（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）、shell "Waiting input" 卡顿（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）。

---

## 💬 开发者关注点

总结今日 Issue 与 PR 中的高频反馈：

- **🔴 可靠性是首要痛点**：子代理"假成功"上报（GOAL 但实际中断）、generalist 永久挂起、工具调用中断导致上下文损坏，都让自动化流水线结果不可信，是企业落地的最大阻力。
- **🔒 安全/隐私边界**：Auto Memory 直接把本地 transcript 发给模型做提取，依赖模型侧提示词脱敏显然不够，开发者呼吁**前置确定性脱敏**与**对 skill 调用做日志脱敏**。
- **⚙️ 配置与发现机制**：开发者投入大量精力写自定义 skills / sub-agents，但模型几乎不会主动使用（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）—— 默认能力发现机制被普遍诟病。
- **🛡 权限与破坏性操作**：v0.33.0 之后子代理绕过 `agents` 禁用配置（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）、模型偶发使用 `git reset --force` 等危险命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），社区期待更严格的安全网。
- **🧹 工作区整洁**：仅开放 shell 后，模型倾向在随机目录写临时脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)），影响 clean commit。
- **🔧 SDK 与工具链**：SDK 层 JSON 解析崩溃、签发流中断信号丢失、IDE 进程遍历卡死，是开发者集成时反复踩中的坑，今日都有对应 PR 在跟进。
- **🪟 浏览器代理**：Wayland 适配与 persistent 模式下 profile 抢占问题长期未根治，是 Linux 桌面用户的高频痛点。

---

*报告基于过去 24 小时 GitHub 公开数据生成。所有链接均可直接点击查看详情。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报 · 2026-08-06

## 今日速览
v1.0.79 预发布系列在 24 小时内密集迭代 4 个版本（-2 → -5），主线聚焦多会话管理与 Worktree 集成；同时社区活跃度集中在 **MCP 集成的边缘场景**（24 条更新 Issues 中有 5 条与 MCP 相关）和 **多模型/BYOM 灵活性** 上，反映 Copilot CLI 在企业级协议兼容与模型透明度方面仍存在明显缺口。

---

## 版本发布

| 版本 | 主要变更 |
|------|---------|
| **v1.0.79-5** | 🆕 Sessions Tab 支持管理多个并发会话；⚙️ Prompt 固定默认关闭（`pinnedPrompts: true` 启用）；🐛 沙箱 wrapper 构建（make 等）现根据 build manifest 获取 dev tool 缓存 |
| **v1.0.79-4** | Pre-release（官方未列详细变更） |
| **v1.0.79-3** | 🆕 新命令 `/

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-06**

---

## 1. 今日速览

今天 Kimi Code CLI 社区的核心动态聚焦在 **MCP 工具能力声明与错误处理**的修复闭环上：Issue #2588 暴露的"图片工具中途崩溃且无修复提示"问题，已由两个 PR (#2590、#2592) 协同解决，其中 #2592 直接从行为层降级不支持的媒体而非中断任务。同时，一个**严重的数据完整性 Bug**（#2591）浮出水面——`StrReplaceFile` 在编辑时会静默破坏文件中所有非 UTF-8 字节（替换为 U+FFFD）。长期讨论的"跨会话记忆系统"特性（#1283）也在今日有更新。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

> ⚠️ 过去 24 小时内更新的 Issue 仅有 3 条（而非通常的 10 条），全部展示如下：

### 🔥 #1283 [OPEN] Feature Request: Memory System — Persistent context across sessions
- **链接**：[Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **作者**：CatKang | **评论**：19 | **更新**：2026-08-06
- **要点**：请求实现跨会话持久化的记忆系统，包含 AI 管理的自动记忆与用户自定义的手动记忆（通过配置 instructions）。
- **为何重要**：这是仓库中讨论时间最长、互动最多的功能请求之一（自 2026-02-27 起持续 5 个多月），反映出**长期上下文管理**是当前 CLI 类工具的共性短板。任何 Agent/DevTool 想要真正融入开发者日常工作流，"记住项目惯例与用户偏好"几乎都是必备能力。

### ⚠️ #2591 [OPEN] StrReplaceFile corrupts undecodable bytes outside the edited region
- **链接**：[Issue #2591](https://github.com/MoonshotAI/kimi-cli/issues/2591)
- **作者**：shoemoney | **评论**：0
- **要点**：`StrReplaceFile` 在解码阶段使用 `errors="replace"`，会导致文件中**任何位置**的非 UTF-8 字节被替换为 U+FFFD（`EF BF BD`）并写回磁盘——即使这些字节完全不在编辑区域之内。
- **为何重要**：这是一个**静默数据损坏**型 Bug，影响所有含二进制或非 UTF-8 内容的文件（如带 BOM 的文件、混排二进制日志的源码等）。对 Agent 类工具而言尤其危险：AI 一次看似无害的字符串替换，可能让用户文件出现不可逆损坏。该 Issue 目前尚无 PR 跟进，建议优先关注。

### 🐛 #2588 [OPEN] Model declared without capabilities: an image-returning MCP tool aborts the run mid-task
- **链接**：[Issue #2588](https://github.com/MoonshotAI/kimi-cli/issues/2588)
- **作者**：tic-top | **评论**：0
- **要点**：当 `config.toml` 中模型未声明 `capabilities` 时，返回图片的 MCP 工具**会在副作用已经发生后**才中断运行；且错误信息未提示如何修复。
- **为何重要**：该 Issue 暴露了 Kimi CLI 在 MCP 生态扩展性上的两个关键缺陷——**不安全的回滚语义**（部分副作用已生效）和**不友好的错误提示**。它直接催生了今日两个修复 PR（#2590 和 #2592），是当前社区协同度最高的修复议题。

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时内更新的 PR 仅有 3 条，全部展示如下：

### ✅ #2592 [OPEN] fix(soul): degrade unsupported tool media instead of aborting mid-task
- **链接**：[PR #2592](https://github.com/MoonshotAI/kimi-cli/pull/2592)
- **作者**：rainbowgore | **关联**：Resolves #2588
- **要点**：`_grow_context` 在模型未声明 `capabilities` 且工具（含 MCP）返回图片时，原先是抛出 `LLMNotSupported`。PR 改为**降级处理不支持的媒体内容**，而非整轮中止，避免了副作用已落地却中断的尴尬。
- **意义**：这是对 #2588 的"行为层"根治方案，体现了"fail-soft > fail-hard"的设计哲学，对生态扩展尤其友好。

### ✅ #2590 [OPEN] fix(soul): name the config fix in the unsupported-capability error
- **链接**：[PR #2590](https://github.com/MoonshotAI/kimi-cli/pull/2590)
- **作者**：ayaangazali | **关联**：Partially addresses #2588
- **要点**：仅修复错误信息的可操作性——在 `LLM model 'xxx' does not support capability 'image'` 错误中**明确告诉用户需要在 `config.toml` 的哪个位置补什么配置**。
- **意义**：与 #2592 形成"行为修复 + 体验修复"的完整闭环，是小而美的典型 DX 改进。

### 📝 #2589 [OPEN] docs: mention qwen-audio-agent as a voice ACP client
- **链接**：[PR #2589](https://github.com/MoonshotAI/kimi-cli/pull/2589)
- **作者**：x-lixu
- **要点**：在 ACP 章节补充一句说明——`qwen-audio-agent` 是一个开源的全双工语音运行时，作为 ACP 客户端调用 `kimi acp`，可实现与 Kimi CLI 的免提语音交互。
- **披露**：作者注明与该项目存在关联。
- **意义**：凸显社区正在围绕 Kimi ACP 协议**自发构建跨形态客户端**（语音、IDE 等），生态扩散迹象明显。

---

## 5. 功能需求趋势

从当前社区数据可观察到以下三大方向：

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **跨会话记忆与上下文持久化** | #1283 | 5+ 个月持续讨论，19 条评论，是呼声最高的长期功能 |
| **MCP 工具能力治理** | #2588 | 反映 MCP 生态扩展时模型能力声明的标准化需求 |
| **文件操作鲁棒性** | #2591 | 揭示 Agent 操作二进制/混合编码文件的可靠性短板 |

**隐性趋势**：围绕 **ACP（Agent Client Protocol）** 的客户端形态在持续扩展（见 #2589 的语音客户端），Kimi CLI 正在从"命令行工具"演化为"多形态 Agent 运行时"。

---

## 6. 开发者关注点

综合今日 Issue/PR 反馈，开发者当前的高频痛点集中在以下几点：

1. **🧠 没有持久记忆**——每次会话从零开始，重复提供项目上下文，体验欠佳（#1283）。
2. **💥 文件操作存在静默损坏风险**——`StrReplaceFile` 对非 UTF-8 字节的处理不可逆，且破坏范围远超编辑区域（#2591）。
3. **🪤 失败语义不安全**——Agent 中途崩溃时，已发生的副作用未被回滚；开发者难以信任"自动执行"的边界（#2588）。
4. **📢 错误信息缺乏可操作性**——报错只说"不支持"，不说"改哪里"，对自托管用户尤其不友好（已被 #2590 修复）。
5. **🔌 MCP/ACP 生态兼容性的边界尚不清晰**——自定义 endpoint 配置、工具返回值类型、能力声明等仍处于"踩坑阶段"，亟需更明确的文档与校验。

---

**报告生成时间**：2026-08-06
**数据来源**：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-06

## 📌 今日速览

OpenCode 在过去 24 小时发布了 **v1.18.14**，聚焦于 xAI 登录体验优化与 provider 错误重试机制；而社区讨论热度集中在 **Go 订阅 API 暴露**、**VS Code 官方扩展**、**跨项目 Session 管理**等长期高票诉求上。同时 v1.18.14 引入的 `/sessions` 回退 bug 已引发实时反馈，核心团队（@thdxr / @Hona / @kitlangton）正在交付 **v1 → v2 数据迁移、Hosted Workspace、会话 JSON 导出** 等多项关键 PR。

---

## 🚀 版本发布

### v1.18.14
- **xAI 登录简化**：将登录流程收敛到单一 device-code 流，改善 headless / 远端环境下的接入体验。
- **结构化错误重试**：保留 provider 流式响应中途的结构化错误，便于兼容的 provider 进行失败响应重试。
- **更稳健的网络层**：对更多瞬态 provider 与网络错误启用自动重试。

> ℹ️ 本版本新增了 `/sessions` 体验的相关改动，详见社区反馈区 [Issue #40759](https://github.com/anomalyco/opencode/issues/40759)。

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 概要 | 链接 |
|---|---|---|---|
| 1 | **#16017** [FEATURE] Go plan usage API（128 👍 / 32 评论） | 社区希望把 Go 订阅面板中的用量/余额数据通过公开 API 暴露，支持 rolling/weekly/monthly 窗口，长期呼声最高 | [issue/16017](https://github.com/anomalyco/opencode/issues/16017) |
| 2 | **#11176** [FEATURE] 官方 VS Code 扩展（134 👍） | 希望 OpenCode 以原生扩展形态集成到 VS Code 中运行，延伸自 CLI/桌面端之外的 IDE 入口 | [issue/11176](https://github.com/anomalyco/opencode/issues/11176) |
| 3 | **#39845** DeepSeek V4 Flash 突然要求"启用中国托管" | 用户在 Go 订阅下，DeepSeek V4 Flash 突然要求增加地区 opt-in，影响 v1.15.13 用户在线会话 | [issue/39845](https://github.com/anomalyco/opencode/issues/39845) |
| 4 | **#23153** [FEATURE] 用加密货币支付 Go（36 👍） | 希望为 OpenCode Go 增加加密货币付款渠道，扩展开源地区的支付选择 | [issue/23153](https://github.com/anomalyco/opencode/issues/23153) |
| 5 | **#31932** [FEATURE] 跨项目 Session 列表 / 选择器 | 当前 `/sessions` 仅在当前项目内生效，多仓库用户期待跨项目 Session 浏览与切换 | [issue/31932](https://github.com/anomalyco/opencode/issues/31932) |
| 6 | **#34498** [FEATURE] SKILL.md 适配 `disable-model-invocation`（49 👍） | 期望与 Claude Code / Cursor 的 SKILL.md frontmatter 兼容，限制模型自动调用 skill | [issue/34498](https://github.com/anomalyco/opencode/issues/34498) |
| 7 | **#40759** v1.18.14 `/sessions` 失灵（**新反馈**） | 升级到 1.18.14 后切换历史 Session 会清空当前对话与上下文，属于本版本回归 bug | [issue/40759](https://github.com/anomalyco/opencode/issues/40759) |
| 8 | **#37564** [FEATURE] Auto-mode LLM 分类器自动放行权限 | 希望参考其他 agent 工具，构建 LLM 分类器决定何时自动批准工具调用 | [issue/37564](https://github.com/anomalyco/opencode/issues/37564) |
| 9 | **#40348** 全局 `AGENTS.md` 规则跨会话被遗忘 | 用户反馈 `~/.config/opencode/AGENTS.md` 中的全局规则（例：禁止 auto-commit）频繁失效，需要反复提醒 | [issue/40348](https://github.com/anomalyco/opencode/issues/40348) |
| 10 | **#40786** Desktop 首页 Session 列表缺少删除/归档入口（**新**） | macOS 桌面端 v1.18.14 首页 Session 列表无三点菜单、无右键菜单、无 hover 按钮，无法清理历史 | [issue/40786](https://github.com/anomalyco/opencode/issues/40786) |

> 📎 其他值得关注：内存相关 [#40779](https://github.com/anomalyco/opencode/issues/40779)（macOS 26.5.1 高内存占用）、`/commit` 中段补全 [#40719](https://github.com/anomalyco/opencode/issues/40719)、Skill 根目录补全 [#40720](https://github.com/anomalyco/opencode/issues/40720)。

---

## 🛠 重要 PR 进展（TOP 10）

| # | PR | 说明 | 链接 |
|---|---|---|---|
| 1 | **[#40723]** `feat(core): migrate v1 data to v2` | @thdxr 主导：增加由 REST 触发、可断点续传的 V1 session 历史迁移，导入 V2 session 数据与遗留凭证；更新 TUI 迁移流程 | [pr/40723](https://github.com/anomalyco/opencode/pull/40723) |
| 2 | **[#38790]** `[beta] feat(app): add workspace flows to new layout` | @Hona：在新布局中接入 Local/New/Existing workspace 选择，附带长列表搜索、branch 上下文、View all | [pr/38790](https://github.com/anomalyco/opencode/pull/38790) |
| 3 | **[#40784]** `feat(core): hosted workspace execution with modal driver` | @kitlangton：将 Workspace 定义为持久化执行环境（含 root 的机器），Session 通过 `workspaceID` 路由到对应 Runner | [pr/40784](https://github.com/anomalyco/opencode/pull/40784) |
| 4 | **[#40781]** `feat(app): export session as json from ui` | 在 Session 三点菜单、Context 标签与命令面板中新增 `Export...` / `session.export` | [pr/40781](https://github.com/anomalyco/opencode/pull/40781) |
| 5 | **[#40590]** `feat: support GITHUB_TOKEN auth in install script` | 安装脚本中支持使用 `GITHUB_TOKEN` 进行鉴权，解决匿名请求限流问题 | [pr/40590](https://github.com/anomalyco/opencode/pull/40590) |
| 6 | **[#39758]** `fix(app): show directories in web project picker on open` | 修复 Web 端 "Open project" 在新浏览器配置下空目录的问题，闭合 #39434 / #37961 / #37611 | [pr/39758](https://github.com/anomalyco/opencode/pull/39758) |
| 7 | **[#40765]** `refactor(core): deduplicate Copilot endpoint routing` | 复用 `@opencode-ai/ai` 中的 `shouldUseResponsesApi`，移除 Core 重复实现 | [pr/40765](https://github.com/anomalyco/opencode/pull/40765) |
| 8 | **[#27554]** `feat(opencode): local LAN provider discovery + auto-discover models` | 在 `/connect` 中加入 LAN 内 OpenAI 兼容服务器发现，结合 mDNS 自动列出可用模型 | [pr/27554](https://github.com/anomalyco/opencode/pull/27554) |
| 9 | **[#40772]** `fix(opencode): report a missing auth method instead of crashing` | `ProviderAuth.authorize` 在 hook 表查找时不再裸索引，缺失时返回明确错误 | [pr/40772](https://github.com/anomalyco/opencode/pull/40772) |
| 10 | **[#40768]** `fix(mcp): survive a cross-process OAuth refresh race on connect` | 多进程共用一份 MCP 凭据时，避免刷新令牌竞争导致的失败 | [pr/40768](https://github.com/anomalyco/opencode/pull/40768) |

> 📎 紧随其后：[#40717](https://github.com/anomalyco/opencode/pull/40717) 新增瑞典语社区翻译、[#40763](https://github.com/anomalyco/opencode/pull/40763) 修复 TUI sidebar 项目名延迟渲染（300ms → 立即）、[#40764](https://github.com/anomalyco/opencode/pull/40764) 将版本号嵌入 Desktop server sidecar，避免 beta 包回退到 `@opencode-ai/plugin@local`。

---

## 📈 功能需求趋势

从近 30 条高讨论度 Issue 中提炼出社区最集中的诉求方向：

1. **编程化 & 集成化**
   - Go 订阅用量 API（[#16017](https://github.com/anomalyco/opencode/issues/16017)）
   - 官方 VS Code 扩展（[#11176](https://github.com/anomalyco/opencode/issues/11176)）
   - MCP HTTP Streamable / Sampling（[#8058](https://github.com/anomalyco/opencode/issues/8058)、[#11948](https://github.com/anomalyco/opencode/issues/11948)）
2. **多 Agent / 跨项目工作流**
   - 跨项目 Session 选择器（[#31932](https://github.com/anomalyco/opencode/issues/31932)、[#35581](https://github.com/anomalyco/opencode/issues/35581)）
   - 多 Agent 并行可视化 UI（[#40564](https://github.com/anomalyco/opencode/issues/40564)）
   - Auto-mode LLM 权限分类器（[#37564](https://github.com/anomalyco/opencode/issues/37564)）
3. **Provider 兼容与本地化**
   - LAN Provider 自动发现（[#27554 PR](https://github.com/anomalyco/opencode/pull/27554)）
   - LiteLLM 模型自动同步（[#29308](https://github.com/anomalyco/opencode/issues/29308)）
   - DeepSeek 模型区域托管问题（[#39845](https://github.com/anomalyco/opencode/issues/39845)）
   - 加密货币付款（[#23153](https://github.com/anomalyco/opencode/issues/23153)）
4. **Skills / Sub-command 体系增强**
   - SKILL.md frontmatter 与 Claude Code 对齐（[#34498](https://github.com/anomalyco/opencode/issues/34498)）
   - Skill 在根命令补全 & 中段补全（[#40689](https://github.com/anomalyco/opencode/issues/40689)、[#40719](https://github.com/anomalyco/opencode/issues/40719)、[#40720](https://github.com/anomalyco/opencode/issues/40720)）
5

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-06

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) （汇总自 `earendil-works/pi` 仓库过去 24 小时更新）

---

## 1. 今日速览

过去 24 小时内仓库并无新版本发布，但社区异常活跃：超过 50 条 Issue 与 37 条 PR 被更新，多个长期讨论的痛点（Windows 安装体验、XDG 配置目录规范、事件总线内存泄漏、终端 OSC 8 超链接截断）均出现落地修复。功能侧，社区明显在推动 **上下文系统增强**（`AGENTS.override.md`、`@file` 行号范围）、**模型选择 UX 改进**（自然排序、变体感知）以及 **新模型/Provider 接入**（Qwen Token Plan、Bedrock Mantle、Copilot 账号策略）。

---

## 2. 版本发布

⚠️ 过去 24 小时内无新版本发布。仓库当前主线版本为社区在 Issue 中提到的 `0.82.1 / 0.83.0`。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论/👍 | 为什么值得关注 |
|---|------|------|--------|----------------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | Windows 上 Pi 的使用方式调研 | OPEN | 17 / 0 | 维护者主动发起，旨在梳理 Windows 用户安装/运行方式，明确哪些由核心团队负责、哪些下沉给扩展。影响最大量潜在用户群。 |
| [#534](https://github.com/earendil-works/pi/issues/534) | Linux 配置目录应遵循 XDG Base Directory | CLOSED | 14 / **23** 👍 | 获赞最多。`$HOME` 直放配置目录违反 XDG 规范，社区呼吁已久，最终关闭说明该问题即将/已被处理。 |
| [#7399](https://github.com/earendil-works/pi/issues/7399) | `truncateToWidth()` 截断 OSC 8 超链接残留 | CLOSED | 12 / 0 | TUI 渲染层 bug 修复，已合并 #7665 进一步优化。代表终端兼容性细节的持续打磨。 |
| [#5263](https://github.com/earendil-works/pi/issues/5263) | 会话内模型/思考级别切换应默认为临时 | OPEN | 11 / **12** 👍 | 高赞议题，提议设置显式"Default model"入口，避免误改全局默认值。 |
| [#5291](https://github.com/earendil-works/pi/issues/5291) | Anthropic 订阅下会话卡在 "Working…" | CLOSED | 8 / 3 | 订阅链路兼容性问题，与企业级 Anthropic 用户强相关。 |
| [#6675](https://github.com/earendil-works/pi/issues/6675) | `pi update --self` 一次瞬时网络失败即放弃 | CLOSED | 8 / 2 | Self-update 流程可靠性修复，避免偶发断网阻断升级。 |
| [#5064](https://github.com/earendil-works/pi/issues/5064) | 增加 Context Window 选择项 | CLOSED | 7 / 0 | 对齐 Copilot CLI 的体验诉求，反映多上下文窗口模型时代的需求。 |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | `prompt` 命令支持音视频内容 | OPEN | 7 / 4 | 多模态扩展方向；与现有 `images` 接口对齐，长期生态必备。 |
| [#7553](https://github.com/earendil-works/pi/issues/7553) | 可为 Compaction 配置独立的思考级别/模型 | OPEN | 7 / 0 | 对推理模型用户非常实用，将"摘要思考预算"与"对话思考预算"解耦。 |
| [#7465](https://github.com/earendil-works/pi/issues/7465) | iTerm2 内联图需要携带 payload 大小 | CLOSED | 7 / 0 | 修复 xterm.js 0.9.0 addon-image 的兼容性问题，确保终端内嵌图片正常渲染。 |

> 此外，#7444（WebSocket 重试仅覆盖两个错误码）、#5323（Vertex + GCP metadata server 同步检测）、#7193（扩展事件总线监听器泄漏 → 已由 #7656 修复）也持续获得关注。

---

## 4. 重要 PR 进展（Top 10）

| # | 类型 | 标题 | 价值点 |
|---|------|------|--------|
| [#7656](https://github.com/earendil-works/pi/pull/7656) | fix | 修复事件总线内存泄漏 | 解决 #7193：将 `pi.events.on()` 订阅限定到注册时的 runtime；reload/disposal 后自动清理。嵌入式宿主必备。 |
| [#7671](https://github.com/earendil-works/pi/pull/7671) | feat | 将工具的 prompt 片段与工具定义共址 | 改善内部可维护性，添加所有内置工具的回归覆盖与条件 bash 指导。 |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | feat | 可配置 Harness 工厂 | 实验性 Harness 构造入口，保留调用方的工具/激活/prompt 策略选项，统一 bash 会话环境。 |
| [#7669](https://github.com/earendil-works/pi/pull/7669) | feat | Harness v2 R2 纯 lane reducer | 定义 `LaneReductionInput` → `LaneReductionResult` 契约，扩展 idle/open/suspended 测试覆盖。 |
| [#7681](https://github.com/earendil-works/pi/pull/7681) | feat | 支持 `AGENTS.override.md` 作为目录级上下文覆盖 | 关闭 #7642：当 `AGENTS.override.md` 与 `AGENTS.md` 同目录时优先使用前者，跨目录层级与去重行为保持不变。 |
| [#7679](https://github.com/earendil-works/pi/pull/7679) | feat | 支持 `@file#L<start>-L<end>` 行号范围 | 关闭 #7673：让 CLI 文件引用可指定 1-based 闭区间，与 `read` 工具行为对齐，便于 Neovim 插件桥接。 |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | feat | 新增 Qwen Token Plan Individual Provider | 内置八款官方模型，强制 `QWEN_TOKEN_PLAN_API_KEY` 与国际/中国 Provider 并存。 |
| [#7672](https://github.com/earendil-works/pi/pull/7672) | fix | 恢复 Copilot 模型枚举 | `model_picker_enabled` 为主信号，仅在 Individual 端点无可用 picker 模型时回退到策略启用模型；修复登录后空模型列表。 |
| [#7685](https://github.com/earendil-works/pi/pull/7685) | fix | 禁用编译产物中的 bunfig 自动加载 | 编译产物不再读取 cwd 的 `bunfig.toml` 预加载，避免脏环境启动崩溃（包括 `pi --version`）。 |
| [#7665](https://github.com/earendil-works/pi/pull/7665) | fix | TUI 跳过纯文本前缀的 OSC 8 扫描 | 紧随 #7657 的性能补丁，普通截断文本避免逐字符 ANSI 解析；16/16 测试通过。 |

> 其它值得关注的合并：#7692 / #7690（模型选择器自然排序）、#7664（`AGENTS.override.md` 替代版本）、#7638（`thinking_token_budget` 在 openai-completions 上）、#7670（`qwen3.8-max-preview` → GA）、#7663（识别 `lgtm,` 含逗号）、#7597（扩展选择器长 diff 全屏可滚动）。

---

## 5. 功能需求趋势

从 50 条活跃 Issue 中提炼的社区诉求：

- **🪟 Windows 一等公民体验**：#7547 表明核心团队希望系统性梳理 Windows 路径，子问题涉及 SSH 登录回环、Node 20 兼容性（#7601）、bundled 二进制 bunfig（#7685）。
- **📁 配置文件位置规范化**：#534 推动 XDG Base Directory 合规，成为社区诉求共识。
- **🧠 思考级别 / 模型细粒度管理**：#5263（默认临时化）、#7553（Compaction 独立思考预算）、#7638（`thinking_token_budget`）、#7444（WebSocket 错误码扩展）形成一条完整链路。
- **🌐 多 Provider / 多模型接入**：Bedrock Mantle (#6216)、Qwen Token Plan (#7659)、Copilot 账号策略修复 (#7672/#7634) 反映 LLM 生态扩展仍是高频需求。
- **🧩 上下文加载机制升级**：`AGENTS.override.md` (#7681/#7642/#7664)、`@file` 行号范围 (#7679/#7673)、视频音频支持 (#3200)。
- **🎨 终端/TUI 体验打磨**：OSC 8 超链接截断修复 (#7665/#7399)、iTerm2 图片载荷 (#7465)、TUI 鼠标事件 (#7683)、fill marker 组件 (#7682)、Mermaid 渲染 (#7623)。
- **🛠️ Harness / Lane 架构**：#7686、#7669、#7654 显示底层抽象正在为多 lane/多 operation 模型铺路。

---

## 6. 开发者关注点

- **🔁 可靠性 / 错误恢复**：开发者反复反映"偶发网络失败即放弃"（#6675 self-update、#5291 Anthropic 卡死、#7444 WebSocket 错误码不全、#7609 `/tree` 失败 turn 无法恢复）。社区希望 Pi 在不稳定网络与认证环境下能优雅重试，而不是让用户重连会话。
- **🧪 安装与运行环境**：Windows 安装路径分散（#7547）、SSH 登录无法获取授权码（#7691）、Node 20 与 undici CacheStorage 不兼容（#7601）、Bun 编译产物加载 `bunfig.toml`（#7685）共同指向"开箱即用"短板。
- **🔐 凭据与隐私管理**：#7658 提议为扩展提供持久化 `auth.json` 的 API，反映出当前扩展生态凭据处理能力不足；#7691 期待更友好的无浏览器/远程登录体验。
- **💸 计费与成本可见性**：#7688（`openrouter/auto-beta` 出现负成本）显示多 Provider 计费模型差异在 UI 层面缺乏一致性兜底。
- **📚 文档同步滞后**：#7687（双击 Ctrl+C 等快捷键未写入文档）提醒团队需在每次 UX 改动时同步 keybindings 参考。
- **🧱 扩展生态健壮性**：事件总线泄漏（#7193 → #7656）、扩展选择器长 diff 滚动（#7597）、JetBrains LSP 集成（#7641）表明嵌入式扩展宿主正在走向成熟。

---

*日报由 Pi 社区动态聚合生成，基于公开 Issue / PR 数据；若需更聚焦某方向（如 Provider 接入、Harness 架构）可继续追加。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-08-06**

---

## 📌 今日速览

今日 Qwen Code 迎来 **Qwen Code Desktop v0.1.0** 正式版发布，CLI 侧 v0.21.6 稳定版同步上线并带来 macOS WebShell 原生 Live Voice 支持。社区端，安全相关讨论持续升温：read-only shell 分类器存在可绕过 P1 漏洞（#8582），以及多处 provider 凭证泄露与桌面端路径解析问题。开发节奏上，自托管 ECS Runner、AutoFix 取证链、流式响应寿命上限等基础设施改造集中推进。

---

## 🚀 版本发布

### Qwen Code Desktop v0.1.0
基于 Web Shell 构建的桌面应用首个正式版，集成 macOS 实验性 Live Voice（全局快捷键实时音频）与对话轮次持久展开能力，配套修复 CI 容器默认 shell 与 WebShell `preseed` 问题。
- [desktop-v0.1.0 Release](https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.1.0)

### Qwen Code v0.21.6（稳定版）
- 新增 WebShell on macOS 的实验性 **原生 Live Voice** 支持（全局快捷键）（[#7859](https://github.com/QwenLM/qwen-code/pull/7859)）
- Web Shell 在后台任务运行期间保持对话轮次展开
- [v0.21.6 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.6)

### v0.21.6-nightly.20260806.cb3dc107f
仅包含一项 glob 外部路径测试的去抖修复（[#8604](https://github.com/QwenLM/qwen-code/pull/8604)），属于 nightly 通道日常维护。

---

## 🔥 社区热点 Issues

> 选取依据：评论数、优先级、影响面与跨平台相关性。

| # | 编号 | 标题 | 优先级 | 摘要 |
|---|---|---|---|---|
| 1 | [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | 安全：read-only shell 分类器在换行续行与 `${var@P}` 隐藏下被绕过 | **P1 / 安全** | AST 与运行期检测均未识别命令替换技巧，可能允许任意代码以"只读"名义自动执行；社区评论 4 条，热度最高的安全议题。 |
| 2 | [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider 警告清洗器切断带端口的 URL 并泄露含 `@` 的密码 | **P2 / 安全** | `sanitizeProviderWarning` 两处 URL/凭据处理缺陷，评论 8 条，已有 PR #8408 跟进。 |
| 3 | [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | 工具输出预算、可观测性与产物生命周期加固 | **P2 / 核心** | 进入 Phase 2（ACP 与 Headless 文本投影 65,536 字节上限），是当前核心架构最大主题。 |
| 4 | [#8092](https://github.com/QwenLM/qwen-code/issues/8092) | 基于 Web Shell 构建低维护桌面应用 | 功能请求 | 已被 Desktop v0.1.0 落地，验证了"WebShell + 桌面壳"的战略路线。 |
| 5 | [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | Desktop 0.1.0/Windows 启动时 EISDIR lstat 'C:' | **P1** | Windows 11 x64 安装版首个工作区打开即崩溃，影响新版本首用户体验。 |
| 6 | [#8593](https://github.com/QwenLM/qwen-code/issues/8593) | Desktop 助手消息中 Markdown 链接样式存在但点击无效 | P2 | 桌面端链接渲染样式与点击行为脱节，凸显 WebShell 与原生壳的事件桥接缺陷。 |
| 7 | [#8592](https://github.com/QwenLM/qwen-code/issues/8592) | Desktop 设置切换 UI 语言无效 | P2 | 设置面板语言选择未真正生效，i18n 链路需排查。 |
| 8 | [#8580](https://github.com/QwenLM/qwen-code/issues/8580) / [#8562](https://github.com/QwenLM/qwen-code/issues/8562) | TUI 在 tmux < 3.5 / SSH→Ubuntu→tmux 环境下持续闪屏 | P2 | Ink 渲染器叠加未查询的 DEC 2026 序列所致，开发者每天多次更新的体验痛点。 |
| 9 | [#8606](https://github.com/QwenLM/qwen-code/issues/8606) | VSCode 伴侣：Edit/Write 链接全部解析为 workspace 根的 basename | P2 | 嵌套文件点击全部 404，0.21.6 已复现，影响 IDE 集成体验。 |
| 10 | [#8538](https://github.com/QwenLM/qwen-code/issues/8538) | Desktop Windows 上"复制响应"按钮无效 | P2 | 重启/换设备均无法解决，桌面端基础交互缺陷。 |

**其他值得关注：** [#8595](https://github.com/QwenLM/qwen-code/issues/8595) 手机扫码接管本地会话（Local Control）；[#8596](https://github.com/QwenLM/qwen-code/issues/8596) 弃用 Electron 桌面、改用 Tauri 壳命名；[#8584](https://github.com/QwenLM/qwen-code/issues/8584) Anthropic 模型 ID 点号次版本与 Opus 5 token 上限缺失。

---

## 🛠️ 重要 PR 进展

1. **[#8408](https://github.com/QwenLM/qwen-code/pull/8408) — `fix(serve): use authority-scoped credential stripping in provider warning sanitizer`**  
   解决 #8136 的端口截断与密码泄露，改为按 URL authority 边界剥离凭据，安全修复 PR。

2. **[#8602](https://github.com/QwenLM/qwen-code/pull/8602) — `fix(core): cap streaming response lifetime, slim review fan-out launch`**  
   一并修复 #8597：为核心流式响应增加全生命周期上限（不再仅限"块间静默"），并精简 `/review` fan-out 启动，避免 360 分钟超时。

3. **[#8603](https://github.com/QwenLM/qwen-code/pull/8603) — `ci(autofix): run heavy autofix jobs on ECS pool`**  
   将 issue-fixer、review CLI 构建、review-feedback 三类重型任务迁移到自托管 ECS Runner，降低 GitHub-hosted runner 排队与超时。

4. **[#8318](https://github.com/QwenLM/qwen-code/pull/8318) — `feat(autofix): require isolated targeted E2E proof`**  
   为 AutoFix 引入 fail-closed 验证链：将不可变失败元数据隔离于 issue 文本外，绑定维护者审批到 issue 标题/正文，精确比对候选 commit。

5. **[#8390](https://github.com/QwenLM/qwen-code/pull/8390) — `feat(review): say so when bundle is older than review`**  
   review 启动前若 bundle 与工作树不一致，主动声明；通过 digest 比对避免静默陈旧构建驱动新代码评审。

6. **[#8353](https://github.com/QwenLM/qwen-code/pull/8353) — `fix(cli): let ESC cancel ongoing work before popping queued messages`**  
   `streamingState === Responding` 时 ESC 优先取消当前请求，避免被 InputPrompt 的 pop-queue / 双击清空逻辑吞掉。

7. **[#8616](https://github.com/QwenLM/qwen-code/pull/8616) — `fix(telemetry): align session lifecycle with OpenTelemetry`**  
   闭合 #8589：发出标准 OTel `session.start`/`session.end` LogRecord，附带 `session.id` 与可选 `session.previous_id`。

8. **[#8290](https://github.com/QwenLM/qwen-code/pull/8290) — `fix(core): fail closed on zero inode file cache`**  
   当 `fs.Stats.ino === 0` 时 `FileReadCache` 不再存储或匹配共享 `dev:0` 条目，但允许向调用方返回瞬态元数据。

9. **[#7897](https://github.com/QwenLM/qwen-code/pull/7897) — `fix(cli): skip terminal redraw optimizer on WSL/ConPTY`**  
   修复 WSL 下流式字符被复制 N 次的长期 bug（#7634），ConPTY 不再被批量 cursor-up 序列误处理。

10. **[#8559](https://github.com/QwenLM/qwen-code/pull/8559) — `feat(web-shell): improve parallel agent activity feedback`**  
    WebShell 中并行子代理状态常驻对话尾部、活跃时自动展开细节、主代理开始时上滑收起的过渡动画。

**其他重要合并/关闭：** [#8412](https://github.com/QwenLM/qwen-code/issues/8412)（CLOSED，WebUI 在 live journal 截断后恢复完整回合）；[#8241](https://github.com/QwenLM/qwen-code/pull/8241)（QQ Bot 群组会话隔离恢复）；[#8260](https://github.com/QwenLM/qwen-code/pull/8260)（保留每个推理回合的 thoughtSignature）。

---

## 📈 功能需求趋势

提炼过去 24 小时 Issues / PRs 中的高频方向：

- **桌面应用体验补课**：Desktop v0.1.0 发布后立刻暴露出 Windows 启动崩溃、Markdown 链接失效、语言切换无效、复制按钮失灵等"首版质量债"——社区对**桌面端基础交互正确性**的需求压倒新功能。
- **WebShell → Desktop 一体化**：围绕 Web Shell 作为 UI 主体的策略被进一步推动：基于 Web Shell 构建桌面（#8092，已落地）、手机扫码接管（#8595）、Tauri 取代 Electron 命名（#8596）。
- **后端 / Provider 安全硬化**：URL/凭据清洗、shell 命令分类器、Anthropic 模型 ID 解析等形成**纵深安全**主题。
- **可观测性与 OTel 化**：会话生命周期对齐 OTel（#8589 / #8616），activeWork + 后台 Agent 恢复（#8586），是当前**核心可观测性**主线。
- **AutoFix / Review 基础设施**：ECS Runner、bundle 陈旧检测、isolated E2E 证明、流式寿命上限，构成新的"**研发流水线自托管化**"趋势。
- **慢速/批量模式与成本优化**：#8605 提出 `/slow` 异步批处理，是新出现的**降本增效**诉求。
- **工具输出契约统一**：ACP/Headless 65,536 字节文本投影上限（#8447 → #7306 Phase 2），向"**显式边界 + 产物可观测**"收敛。
- **IDE / VSCode 伴侣**：路径解析在嵌套文件下失败（#8606），表明 IDE 集成仍是高频痛点。

---

## 💬 开发者关注点

- **跨平台终端兼容性**仍是最大痛点：tmux < 3.5 闪屏（#8580）、iTerm2→SSH→tmux 闪屏（#8562）、Warp 收缩窗口重复打印（#8557）、WSL/ConPTY 字符重复（#7897）——覆盖 Linux/macOS/WSL/SSH 全场景的 TUI 渲染鲁棒性诉求密集。
- **桌面首版稳定性**成为新焦点：Windows 启动即崩、复制按钮无效、Markdown 链接失效、语言切换无效等"看似微小但立即可感知"的功能故障集中爆发；社区期待更严格的桌面端回归矩阵。
- **安全语义正确性**越来越被前置审视：read-only shell 分类器被绕过（#8582）、provider URL 密码泄露（#8136 / #8408）、Anthropic 模型 ID 解析（#8584）——开发者关心"安全标签是否真的安全"。
- **CI / Review 自托管化**：GitHub-hosted runner 频繁超时倒逼自托管 ECS 化（#8603、#8602），并要求 bundle 陈旧度、AutoFix 取证链等可验证机制（#8390、#8318）。
- **会话与产物可恢复性**：`history_truncated` 标记不再静默（#8412）、activeWork 显式跟踪（#8586）、journal 恢复（#8412）——开发者日益关注"长任务在异常退出后能否继续"。
- **IDE 集成路径解析**：VSCode 伴侣 Edit/Write 链接路径错误（#8606）说明 IDE 侧相对 CLI 仍有较大体验鸿沟。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)，采样窗口 2026-08-05 → 2026-08-06。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-06** | **数据来源：github.com/Hmbown/DeepSeek-TUI**

> ⚠️ **说明**：本次数据中的 Issue 与 PR 均关联至 `Hmbown/CodeWhale` 仓库（推测为 DeepSeek TUI 项目的开发代号或镜像仓库），本日报统一以源数据为准。

---

## 1. 今日速览

过去 24 小时，仓库活跃度集中在 **v0.9.4 版本集成列车**（PR #5135，领先 main 分支 77 个 commit）以及 **Runtime API 资源补全**（5 个来自 Copilot 的系列 PR 集中合并），标志着项目从"工具型 TUI"向"可被托管客户端调用的运行时平台"演进。社区侧反馈集中在 **多模型 API Key 管理**（#5250）、**沙盒白名单扩展**（#5005 已关闭）和 **类似 Reasonix 的人机界面探索**（#4029）三大方向。今日无新版本发布。

---

## 2. 版本发布

**过去 24 小时无新 Release。** 值得注意的是 PR #5135（`release: Codewhale v0.9.4 release train`）正在等待合入/发版，集成列车已包含 18 个核心 commit 以及主线后续 59 个提交，整合了 Runtime API、ACP 工具暴露、TUI 子代理恢复等关键能力。
👉 [PR #5135](https://github.com/Hmbown/CodeWhale/pull/5135)

---

## 3. 社区热点 Issues

> 过去 24 小时 Issues 数量较少（共 3 条），全部列出：

| # | 标题 | 状态 | 重要性 | 链接 |
|---|------|------|--------|------|
| **#5250** | 多 API Key 存储（DeepSeek + GLM 等多模型切换体验） | 🟢 OPEN | ⭐⭐⭐⭐⭐ | [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) |
| **#4029** | 规划类 Reasonix 风格的交互界面 | 🟢 OPEN | ⭐⭐⭐⭐ | [#4029](https://github.com/Hmbown/CodeWhale/issues/4029) |
| **#5005** | 沙盒支持文件系统路径白名单（构建产物/日志） | 🔴 CLOSED | ⭐⭐⭐⭐ | [#5005](https://github.com/Hmbown/CodeWhale/issues/5005) |

**重点解读：**

- **#5250 多 API Key 存储**（关注度最高）：用户 ffyuhf 反映在 DeepSeek 和 GLM 之间切换时，每次都要重新申请 Key，覆盖式存储严重割裂体验。社区评论 1 条，议题直击 TUI 多 Provider 切换的可用性痛点。
- **#4029 Reasonix 风格界面**（长期讨论）：作者 longASKme 提出借鉴 Reasonix 的交互范式，4 条评论但 0 点赞，说明这是一个**早期探索性构想**，尚未形成共识。
- **#5005 沙盒白名单**（已关闭）：针对 Xcode 等外部工具产物的访问需求，2 条评论后关闭——可能是社区维护者判断为 v0.9.4 之后版本规划。

---

## 4. 重要 PR 进展

> 过去 24 小时 PR 共 14 条，精选 10 条核心进展：

### 🚀 Runtime API 资源补全系列（Copilot 主导，5 个并发 PR）

| PR | 标题 | 价值 |
|----|------|------|
| **[#5131](https://github.com/Hmbown/CodeWhale/pull/5131)** | Runtime API 内存端点（带边界检查与生命周期控制） | 新增 `/v1/memory` 路由族，托管客户端首次可查询/管理活动内存 |
| **[#5130](https://github.com/Hmbown/CodeWhale/pull/5130)** | Runtime API MCP 服务器配置与生命周期（有边界） | 补全 MCP 增删改查，避免直接改 TOML/JSON |
| **[#5133](https://github.com/Hmbown/CodeWhale/pull/5133)** | 暴露持久化 goal-loop 状态与完结控制 | `/v1/threads/{id}/goal` 让托管客户端可驱动目标生命周期 |
| **[#5132](https://github.com/Hmbown/CodeWhale/pull/5132)** | 校验凭证与证据（区别于聚合计数） | 新增 3 个只读端点，可定位失败任务与重试策略 |
| **[#5129](https://github.com/Hmbown/CodeWhale/pull/5129)** | Skill 生命周期端点（安装/更新/卸载/信任/审计） | 完整对齐 TUI 端能力到 HTTP API |

### 🛠️ TUI 体验改进（SparkofSpike 主导，3 个并发 PR）

| PR | 标题 | 价值 |
|----|------|------|
| **[#5240](https://github.com/Hmbown/CodeWhale/pull/5240)** | Shell 工具结果展示真实等待耗时 | 把 `duration_ms` 注入模型可见内容，避免忙等轮询 |
| **[#5242](https://github.com/Hmbown/CodeWhale/pull/5242)** | 子代理从 checkpoint 恢复中断的子任务 | 修复 `interrupted_continuable` 死信问题，长任务可继续 |
| **[#5234](https://github.com/Hmbown/CodeWhale/pull/5234)** | 鼠标捕获激活时关闭 alternate scroll | 修复滚动失效——根因是恢复终端模式时同时启用了 DECSET 模式 |

### 📦 其他关键 PR

| PR | 标题 | 价值 |
|----|------|------|
| **[#5229](https://github.com/Hmbown/CodeWhale/pull/5229)** | 中文 Windows 新手指南（vFONGv） | 4 张实测截图，含安装/配置/模型切换/权限，Windows 10 验证 |
| **[#5236](https://github.com/Hmbown/CodeWhale/pull/5236)** | 附 Model Studio #5203 实证材料 | 替换旧的终端截图，含 MP4 与 Token Plan 凭证截图 |

### ✅ 已合并的修复

- **[#5095](https://github.com/Hmbown/CodeWhale/pull/5095)** `fix(ohos):` 重新引用含空格的 Windows 链接器参数（OpenHarmony SDK 路径含空格时的 sysroot 拆分问题）
- **[#5192](https://github.com/Hmbown/CodeWhale/pull/5192)** `fix(tui):` 锁定 `ratatui = 0.30.0`（0.1.1+ 触发的阻塞 CPR 查询会与事件循环抢锁）

---

## 5. 功能需求趋势

从近 24 小时数据可提炼出 5 个明确的社区关注方向：

| 趋势 | 证据 | 优先级 |
|------|------|--------|
| **多 Provider 密钥管理** | Issue #5250（高频痛点） | 🔴 高 |
| **沙盒/权限系统精细化** | Issue #5005（白名单诉求） | 🟡 中 |
| **可托管运行时 API** | 5 个 Runtime API 系列 PR | 🟢 平台演进 |
| **子代理恢复与长任务可靠性** | PR #5242、#5129 | 🟡 中 |
| **跨平台体验（Windows/中文文档）** | PR #5229、#5095 | 🟢 持续 |

更宏观地看，**Runtime API 的资源补全（5 个并发 PR）** 是 v0.9.4 最显著的演进方向——TUI 既要"本地好用"，也要"可被远程/Electron/Web 客户端托管"，这是项目从 CLI 工具向 **Agent Runtime Platform** 演进的明确信号。

---

## 6. 开发者关注点

综合 Issue 与 PR 反馈，开发者社区的**高频痛点与诉求**集中在以下 5 点：

1. **多模型切换体验割裂**：单 Key 存储覆盖无法支持 DeepSeek/GLM/Qwen 等多 Provider 切换（#5250）。
2. **沙盒与真实工作流的冲突**：开发工具（Xcode、build 产物）输出路径超出 workspace，沙盒限制阻断正常调试（#5005）。
3. **等待/耗时信号缺失**：模型只能看到 "等待" 但看不到"等了多久"，导致忙轮询或错误判断长任务停滞（#5240）。
4. **长任务中断后无法恢复**：子代理中断后只能重派，长任务（如文档审查、多步搜索）成本高（#5242）。
5. **跨平台可用性**：
   - Windows 路径含空格导致 OpenHarmony SDK 链接器参数被拆分（#5095）
   - 中文 Windows 用户缺乏系统化入门指南（#5229 已改善）

> 💡 **建议关注的 Reviewer/贡献者**：Hmbown（核心维护者）、SparkofSpike（TUI 体验方向）、Copilot（Runtime API 自动生成）、vFONGv（中文文档）。

---

*本日报基于 GitHub 公开数据自动生成，数据时间窗口：2026-08-05 全天。如需调整日报结构或频率，请反馈。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*