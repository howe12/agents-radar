# AI CLI 工具社区动态日报 2026-07-11

> 生成时间: 2026-07-11 02:03 UTC | 覆盖工具: 9 个

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
**报告日期：2026-07-11**

---

## 一、生态全景

当前 AI CLI 工具生态已进入"**功能收敛 + 治理深水区**"的成熟阶段：**头部工具（Claude Code、OpenAI Codex）发布节奏放缓但安全/成本治理压力陡增**；**GPT-5.6 系列模型**（Sol/Terra/Luna）成为跨厂商同步适配的核心事件，单日内至少触发 4 家工具（Codex、Pi、OpenCode、Copilot）的目录同步；**Agent/Subagent 失控**成为普遍性痛点，从 Claude Code 的 #68110/#75314 到 Qwen Code 的 #6543 再到 Gemini CLI 的 #22323 均指向同一根因；同时 **Windows/WSL2 平台稳定性**与 **MCP OAuth 鉴权生命周期**形成两大跨工具的"吐槽联盟"，反映出生态扩张期协议兼容性与跨平台一致性的结构性短板。

---

## 二、各工具活跃度对比

| 工具 | 版本动态 | Issues 数 | PR 数 | 关键热度指标 | 整体活跃度 |
|------|---------|-----------|-------|-------------|-----------|
| **Claude Code** | v2.1.207 发布 | ~50（日报聚类） | 6 | #69238 👍76、#70539 👍68 | ⭐⭐⭐⭐⭐ |
| **OpenAI Codex** | rust-v0.145.0-alpha.4/3 | ~10 重点 + 多背景 | 10+ | #30364 💬183/👍283（全榜最高） | ⭐⭐⭐⭐⭐ |
| **Gemini CLI** | 无新版本 | 10 重点 | ~10 | #4191 👍98（路线图） | ⭐⭐⭐⭐ |
| **Copilot CLI** | v1.0.71-0 prerelease | 10 重点 | 1 | #3709 👍17、#2739 👍12 | ⭐⭐⭐ |
| **Kimi Code** | 无新版本 | 0（静默期） | 4 | — | ⭐⭐ |
| **OpenCode** | 无新版本 | 50 | 50 | #4283 💬112/👍103、#10288 👍89 | ⭐⭐⭐⭐⭐ |
| **Pi** | 无新版本 | 10 重点 + 40 背景 | 14 | #6097 👍17 | ⭐⭐⭐⭐ |
| **Qwen Code** | v0.19.8-nightly / v0.19.9（含发布失败） | 9 重点 + 25 背景 | 10+ | #6378 💬20（多工作区 RFC） | ⭐⭐⭐⭐ |
| **DeepSeek TUI** | 无新版本（v0.8.68 收尾） | 10 重点 | 10+ | #4032 💬33 | ⭐⭐⭐⭐ |

> **活跃度判断**：OpenCode 当日 50/50 的 Issue/PR 更新量为全生态第一；Claude Code 与 OpenAI Codex 凭借更高的话题密度和点赞量占据"实质热度"前二；Kimi Code 进入静默打磨期。

---

## 三、共同关注的功能方向

### 1. 🤖 **Agent / Subagent 失控治理**（最普遍的痛点）

| 工具 | 具体诉求 |
|------|---------|
| Claude Code | #68110 递归 fan-out 无界、#75314 后台任务 34h 卡死、#66960 自纠错失败——呼吁深度限制、超时、强制取消 |
| OpenAI Codex | #31814 subagent 模型被强制覆盖、PR #31662 限制 environment_ids |
| Gemini CLI | #22323 MAX_TURNS 假报 GOAL 成功、#21409 长时挂起、#22093 越权运行 |
| Qwen Code | #6543 subagent 工具调用循环、#6580 可观测性、#6683 协议标签泄漏 |
| DeepSeek TUI | #4175/4178 Fleet/Workflow/Lane 多 agent 编排架构立宪 |

**共识**：递归限制、超时机制、可观测性、强制取消是四个共同的产品治理需求。

### 2. 🪟 **Windows / WSL2 平台稳定性**（吐槽联盟）

| 工具 | 具体诉求 |
|------|---------|
| Claude Code | #74649 Cowork 缺 HCS、#14828 终端闪烁、#76556 Chrome 扩展崩溃、#76558 WSL git worktree 沙箱逃逸 |
| OpenAI Codex | #28982 沙箱启动失败、#20214 频繁冻结、#16374 Shell 卡死、#32016/29821 渲染异常 |
| Copilot CLI | #4069 TUI mid-turn wedge、#4077 黑屏挂起（皆 WSL2 + Windows Terminal） |
| Pi | #6300 Windows TUI 每键重绘 |
| Qwen Code | macOS standalone 缺 `@teddyzhu/clipboard`（#6590） |

**共识**：Windows 似乎成为新功能发布的"次级目标平台"，终端渲染、Shell 集成、扩展原生模块是三大重灾区。

### 3. 🔌 **MCP 协议与 OAuth 鉴权生命周期**

| 工具 | 具体诉求 |
|------|---------|
| Claude Code | #76544 OAuth 自动刷新失败 |
| Copilot CLI | #4089/4086/4085/4084 三连发 Atlassian/Work IQ OAuth 异常 |
| Qwen Code | #6639 HTTP 401 未触发 OAuth 恢复 |
| Gemini CLI | PR #28330 token 文件 TOCTOU 修复、#28348 Windows OAuth 无限循环 |

**共识**：HTTP/SSE MCP 的 OAuth 鉴权状态机实现碎片化，缺少跨厂商一致性测试套件。

### 4. 🧠 **GPT-5.6 系列模型适配**

| 工具 | 进度 |
|------|------|
| OpenAI Codex | 自家首发，PR #32288 Bedrock 默认化 |
| Pi | #6475/#6465/#6494 多 provider 同步目录 |
| OpenCode | PR #36143 修复 GPT-5.6 Luna 404 |
| Copilot CLI | v0.144.0 目录更新后讨论兼容 |

**共识**：`reasoning.summary`、`subagent 模型选择`、`constrained sampling` 是适配中的共通技术债。

### 5. 🔒 **安全基线与权限治理**

| 工具 | 重点方向 |
|------|---------|
| Gemini CLI | 路径穿越、TOCTOU、Prompt Injection、依赖 CVE——5 类安全 PR 齐发 |
| Claude Code | PR #76475 innerHTML XSS 检测、#76274 路径解析 |
| DeepSeek TUI | PR #4272 RustSec + cargo-deny、PR #4328 漏洞依赖升级 |
| OpenCode | #2632 默认权限过宽争议（已关闭） |

**共识**："Agent + 文件系统 + 网络"复合攻击面是各家共同的安全热点。

### 6. 💰 **成本可观测性**

| 工具 | 痛点 |
|------|------|
| Claude Code | #41737 日志写满 278GB、#75314 后台百万 token 燃烧 |
| Qwen Code | PR #6019 `/model --compaction` 可配置压缩模型 |

**共识**：日志轮转、prompt cache 命中、压缩模型选择成为三大成本控制抓手。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 全平台云集成 + Agent 安全治理 | 企业 AWS/GCP/Azure 部署用户 | Anthropic 闭源 + Bedrock/Vertex/Foundry 多端分发 |
| **OpenAI Codex** | Computer Use + GPT-5.6 首发 | 前沿模型早期采用者 | Rust 重写 + OpenAI 生态深度绑定 |
| **Gemini CLI** | 安全研究 + AST 上下文工程 | 重视代码理解精度的工程团队 | TypeScript + eval-as-CI 基础设施 |
| **Copilot CLI** | BYOK + Voice + MCP 多端点 | GitHub 生态 + 企业自托管用户 | 多 provider 抽象 + MCP 一等公民 |
| **Kimi Code** | Web 端体验 + 国产模型 | 国内 C 端/中小团队 | Web 优先 + Soul/Agent 核心 |
| **OpenCode** | 多 provider 适配 + 跨 IDE | 开源极客 + 多模型实验者 | 中立开源 + V2 TUI 迁移 |
| **Pi** | Extension API + 思考等级 | CLI 工具开发者 / Agent 框架构建者 | Bun runtime + 可嵌入式 Agent 运行时 |
| **Qwen Code** | 多工作区 + Web Shell 对标 | 国内团队 / 多项目管理 | Daemon 架构 + 多端 Web/ACP |
| **DeepSeek TUI** | Fleet/Workflow/Lane 多 agent 编排 | 重度多 agent 用户 | Rust 实现 + 强安全审计 |

**关键差异化洞察**：
- **闭源旗舰**（Claude Code、OpenAI Codex）已转向"治理深水区"；**开源新锐**（OpenCode、Pi）仍在"功能广度"扩张期
- **国内工具**（Kimi、Qwen）从单点突破转向对标 Codex/Claude 的全栈能力
- **Pi 与 OpenCode** 走"可嵌入式 Agent 运行时"路线，最接近"AI Agent 时代的 Linux kernel"定位
- **Gemini CLI** 走"研究型"路线，把 eval/安全做成 CI 一等公民

---

## 五、社区热度与成熟度

### 社区活跃度梯队

**第一梯队（生态头部 + 高密度话题）**
- **Claude Code**：单日 #69238 点赞 76、#70539 点赞 68，且 6 条 PR 中 3 条安全相关，治理成熟度最高
- **OpenAI Codex**：#30364 单 issue 183 评论/283 点赞（全样本最高），模型行为话题密度最强
- **OpenCode**：50/50 的 Issue/PR 更新量为绝对数量第一，且 #4283 单 issue 112 评论/103 点赞显示用户耐心消耗严重

**第二梯队（稳定迭代 + 局部突破）**
- **Gemini CLI**：安全 PR 密度领先，#4191 路线图稳居 98 点赞
- **Qwen Code**：多工作区 RFC #6378 单 issue 20 评论，架构话题集中度高
- **DeepSeek TUI**：v0.8.68 收尾期，Fleet 架构概念热度高（#4175）

**第三梯队（聚焦打磨）**
- **Pi**：新模型适配节奏快（GPT-5.6 当日 5+ PR），extension 生态活跃
- **Copilot CLI**：1 条 PR 显示迭代速度放缓，但 #3709/#2739 显示 BYOK/Voice 议题在累积

**静默期**
- **Kimi Code**：当日 0 新 issue，进入"消化存量"阶段

### 成熟度判断

| 成熟度信号 | 代表工具 |
|-----------|---------|
| 进入"治理深水区"（安全/成本/平台分裂） | Claude Code、OpenAI Codex、Copilot CLI |
| 进入"架构重塑期"（多租户/多 agent 编排） | Qwen Code、DeepSeek TUI、OpenCode |
| 处于"功能扩张期"（新模型/新场景） | Pi、Gemini CLI、OpenCode |
| 处于"细节打磨期"（UI/兼容/入门体验） | Kimi Code |

---

## 六、值得关注的趋势信号

### 🔥 趋势一：GPT-5.6 系列模型定义"下一代 Agent 协议"
- **信号强度**：极强。4 家工具当日同步适配，触发 `max`/`ultra` 思考等级、subagent 元数据、constrained sampling 等连锁适配
- **开发者启示**：模型元数据正在反向定义客户端行为（multi_agent_version、hide_spawn_agent_metadata 等），多 provider 工具必须建立"模型元数据→客户端默认行为"的可配置抽象层

### 🔥 趋势二：Agent 失控是商业化最大的暗礁
- **信号强度**：极强。Claude Code #75314（百万 token 燃烧）、#41737（278GB 日志）、#68110（递归 fan-out）形成"递归-卡死-沉默执行"组合拳
- **开发者启示**：生产环境的 Agent 必须内置**递归深度限制、最大并发、强制超时、可视化取消**四件套；纯 prompt 层防护已不足够

### 🔥 趋势三：MCP 协议在"鉴权生命周期"上仍不成熟
- **信号强度**：强。4 家工具同日报告 OAuth 相关 Bug，覆盖 Azure AD、Atlassian、Work IQ 等多家 SaaS
- **开发者启示**：自建 MCP 集成需准备 OAuth 重试、断线重连、token 刷新降级等兜底逻辑；不要假设 SDK 已处理完边界

### 🔥 趋势四：Windows / WSL2 成为新功能发布的"二等公民"
- **信号强度**：强。Claude Code、OpenAI Codex、Copilot CLI、Pi 同日多点报告 Windows 相关问题
- **开发者启示**：跨平台 CI 中应**优先为 Windows/WSL2 投入稳定性测试预算**，尤其是 TUI 渲染层、Shell 集成层、native module 打包层

### 🔥 趋势五：CLI 工具正在演化为"可嵌入的 Agent 运行时"
- **信号强度**：中等偏强。Pi 推出 scoped models/extensions API、Qwen Code 推 daemon 多工作区、DeepSeek TUI 推 Fleet 编排
- **开发者启示**：CLI 工具的 API 抽象正从"终端调用"转向"嵌入式 SDK"，未来 SDK-first 设计会决定生态话语权

### 🔥 趋势六：安全从

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-07-11）

> **数据说明**：PR 的评论数字段在数据源中显示为 `undefined`，本报告以"PR 关联 Issue 数量 + 标题热度 + 跨 PR/Issue 重复提及频次"作为热度代理指标。所有 PR 当前状态均为 **OPEN**（无已合并条目）。

---

## 一、热门 Skills 排行（按社区关注度）

| 排名 | Skill | 热度代理 | 状态 | 核心定位 |
|---|---|---|---|---|
| 🥇 | **skill-creator 评估管线修复**（#1298 / #1323 / #1099 / #1050 / #362 / #361） | 6+ PR、3 个相关 Issue（#556、#1169、#1061） | OPEN | 元基础设施——修复 `run_eval.py` 在 Windows/编码/触发检测上的系统性 bug，让 description 优化闭环真正可用 |
| 🥈 | **document-typography**（[#514](https://github.com/anthropics/skills/pull/514)） | 高曝光功能 PR | OPEN | 排版质量控制：孤行/寡词/widow/编号错位，针对所有 Claude 生成文档 |
| 🥉 | **skill-quality-analyzer + skill-security-analyzer**（[#83](https://github.com/anthropics/skills/pull/83)） | 与安全 Issue #492 强关联 | OPEN | 元评估技能：5 维度质量分析 + 安全审计，进入 marketplace |
| 4 | **ODT**（[#486](https://github.com/anthropics/skills/pull/486)） | 文档格式补全 | OPEN | OpenDocument 读写/模板填充/HTML 转换，补齐开源办公格式缺口 |
| 5 | **frontend-design**（[#210](https://github.com/anthropics/skills/pull/210)） | 长期开放的高价值 PR | OPEN | 重构前端设计技能的可执行性与一致性 |
| 6 | **self-audit**（[#1367](https://github.com/anthropics/skills/pull/1367)） | 与 Issue #1385 提案呼应 | OPEN | 输出前自审：机械验证 + 四维度推理质量门 |
| 7 | **color-expert**（[#1302](https://github.com/anthropics/skills/pull/1302)） | 高完成度独立技能 | OPEN | 色彩命名体系（ISCC-NBS/Munsell/XKCD）+ 色彩空间决策表 |
| 8 | **testing-patterns**（[#723](https://github.com/anthropics/skills/pull/723)） | 测试领域补全 | OPEN | 测试金字塔 + 单测/组件/E2E 全栈模式 |

**社区讨论热点集中在三块**：
- **skill-creator 自身的可靠性**（`run_eval.py` 的 recall=0% bug 是被独立复现 10+ 次的 P0 级问题）
- **文档/排版类技能**（typography、ODT、PDF/DOCX 的细枝末节 case-sensitivity、ID 冲突修复）
- **元技能/治理类**（quality-analyzer、security-analyzer、self-audit 三件套）

---

## 二、社区需求趋势（基于 Issues 提炼）

| 诉求方向 | 代表 Issue | 👍 数 | 解读 |
|---|---|---|---|
| 🔒 **命名空间安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（34 评论） | 2 | 社区技能伪装成 `anthropic/` 官方命名空间，存在提权风险。**整个 Issue 池中评论数最高**，反映对供应链信任的强烈担忧 |
| 🏢 **企业级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（14 评论） | 7 | 需要 Organization 范围内的 Skills 共享库，取代"Slack 传文件 + 手动 Settings 上传"的土法流程。👍/评论比 0.5，是**最强共识型需求** |
| 🪟 **跨平台兼容性** | [#1061](https://github.com/anthropics/skills/issues/1061) / [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | 7 / 7 / 1 | Windows 上的 subprocess PATHEXT、cp1252 编码、pipe select 三大问题阻塞 skill-creator 跑通 |
| 🧠 **长任务记忆/状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论） | 0 | `compact-memory`：长跑 agent 用符号化记法压缩自身记忆，节省 context |
| 🔌 **Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论） | 0 | 把 Skills 暴露为 MCP server，让 Skills 像工具一样可发现/可调用 |
| ☁️ **多云/多平台部署** | [#29](https://github.com/anthropics/skills/issues/29)（4 评论） | 0 | AWS Bedrock 上使用 Skills 的官方路径 |
| 🧹 **安装重复与去重** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论） | 9 | 👍/评论比 **1.5（全榜最高）**：`document-skills` 与 `example-skills` 内容重复污染上下文 |
| 🛡️ **Agent 治理与审计** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED，6 评论） | 0 | policy enforcement、trust scoring、audit trail 的 agent-governance 提案 |
| ✅ **推理质量门** | [#1385](https://github.com/anthropics/skills/issues/1385)（3 评论） | 0 | Pre-task Calibration → Adversarial Review → Delivery Verification 三段式 |

**趋势聚类**：
1. **基础设施层**（最痛）：Windows 兼容 + 评估管线可信 + 安装去重
2. **企业落地层**：组织内共享 + 跨云（Bedrock）支持
3. **能力扩展层**：MCP 化 + 长任务记忆 + 质量门

---

## 三、高潜力待合并 Skills（活跃但未落地）

以下 PR 评论活跃、议题明确，最有可能近期合入：

| PR | Skill | 合并价值 | 风险点 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator `run_eval.py` 综合修复 | **极高**——同时解决 recall=0%、Windows 流读取、并行 worker 三个 P0 bug | 改动面大，需要回归验证 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | run_eval 触发检测修复 | 高——是 #1298 的同源问题的另一份独立修复 | 与 #1298 存在重叠，需协调 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | 隔离 trigger-eval 与项目注册表 | 高——避免评测把脏文件写进用户项目（#1260） | 影响评估并行行为 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows 1 行修复 | 高——1 行 PATHEXT + 编码修复 | 极低风险，应快合 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | run_eval Windows pipe 崩溃 | 高 | 同上 |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 panic 修复 | 中高——避免 Rust panic | 风险低 |
| [#361](https://github.com/anthropics/skills/pull/361) | YAML 特殊字符检测 | 中——防 description 静默错位 | 与 #539 重复，需合并 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 高——普适性强，影响所有文档输出 | 需 Anthropic 设计 review |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT | 中——补全开源格式 | 依赖 LibreOffice 工具链 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 中——独立、完整 | 设计领域，需设计 review |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | **极高**——直接回应 #492 安全诉求 | 落地是安全讨论的关键筹码 |

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"让 skill-creator 这条元管线自己先跑通"**——评估器在 Windows 上崩（#1061）、触发检测把 recall 报成 0%（#556/#1169，被独立复现 10+ 次）、评测产物污染用户项目（#1260）这三大基础设施 bug，把 description 优化闭环、Skills 质量审计（#83）乃至企业级共享（#228）全部卡在了上游；社区正在用 6+ 个并行 PR 抢修这条命脉，而一旦管线可信，**安全信任边界（#492）和组织级分发（#228）**这两个企业落地诉求才会真正解锁。

---

*报告生成时间：2026-07-11 ｜ 数据源：anthropics/skills（GitHub）*

---

# Claude Code 社区动态日报
**日期：2026-07-11**

---

## 📌 今日速览

v2.1.207 版本正式发布，**Auto Mode 已在 Bedrock / Vertex AI / Foundry 三大云平台默认启用**（可通过 `disableAutoMode` 关闭），同时修复了长列表/表格流式输出时终端卡顿与按键延迟问题。社区层面，**Agent 失控与后台任务无法取消**（#75314、#68110）和 **TUI 鼠标交互误触**（#71539、#76528、#70539）两大类问题持续高热，另有严重磁盘耗尽（#41737）与安全沙箱逃逸报告（#76558、#76559）需要立即关注。

---

## 🚀 版本发布：v2.1.207

**主要变更：**
- **Auto Mode 默认开放**：在 Bedrock、Vertex AI、Foundry 上不再需要 `CLAUDE_CODE_ENABLE_AUTO_MODE` 环境变量；如需关闭，可在 settings.json 中设置 `disableAutoMode`。
- **TUI 流式输出修复**：修复了长列表、表格、长段落流式响应时的终端冻结与按键延迟问题。
- **Chrome 扩展兼容性问题**（#76556）：新版本在 Windows 上的 Chrome 扩展 native host 启动即崩溃（`ERR_INVALID_ARG_TYPE`），社区报告同样存在于 v2.1.206，存在回滚风险。

> 提示：升级前请评估 Desktop 端 Remote/SSH 会话渲染异常问题（#76124、#76560），自 v2.1.205 起出现"切换/重开会话显示 No messages yet"的回归。

---

## 🔥 社区热点 Issues

| # | 标题 | 关键信息 | 为什么值得关注 |
|---|------|---------|---------------|
| [#69238](https://github.com/anthropics/claude-code/issues/69238) | Advisor 触发时报 "No response from API" 错误（macOS） | 💬47 / 👍76 | 👍数最高，提示用户在请求 Opus 4.8 顾问模式时频繁出现网络重试，但仅在 Sonnet 基座下复现，可能与模型路由有关。 |
| [#74649](https://github.com/anthropics/claude-code/issues/74649) | Windows 11 Pro 上 Cowork 缺失 HCS services: vfpext | 💬43 | 直接阻断 Windows 用户使用新发布的 Cowork 功能，影响企业 Windows 部署。 |
| [#14828](https://github.com/anthropics/claude-code/issues/14828) | Windows 终端执行工具时控制台窗口闪烁 | 💬40 / 👍33 | 高频 Windows 平台问题，老 issue 持续滚动更新，影响所有 Windows 用户的日常体验。 |
| [#68110](https://github.com/anthropics/claude-code/issues/68110) | `general-purpose` 子代理递归生成无界子代理，造成指数级 fan-out 与 token 燃烧 | 💬10 / 👍8 | **Agent 安全与成本双重风险**，子代理可无限嵌套，缺乏深度与并发限制，已造成大量 token 损耗。 |
| [#41737](https://github.com/anthropics/claude-code/issues/41737) | 任务输出文件无界增长，几分钟内写满 278 GB 磁盘 | 💬7 | **严重级别 Critical**：macOS 26.2 上 `/private/tmp/claude...` 日志失控，可能导致系统不可用，建议立刻增加日志轮转。 |
| [#75314](https://github.com/anthropics/claude-code/issues/75314) | 10 个后台 Agent 任务卡死运行 34+ 小时无法取消，消耗约 100 万 token | 💬5 | 与 #68110 互为印证：**Agent 任务缺乏超时与强制取消机制**，是高额账单的主要来源之一。 |
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | Assistant 文本块在与 thinking 交错时被静默丢弃，从未渲染、JSONL 转录中也缺失 | 💬5 | **数据丢失（data-loss）问题**，涉及 2.1.201 + adaptive thinking 模式，影响会话完整性审计。 |
| [#71539](https://github.com/anthropics/claude-code/issues/71539) | 鼠标点击重新聚焦终端时误触发权限提示 | 💬8 / 👍17 | TUI 鼠标处理"全有或全无"，聚焦操作被解释为按钮点击，UX 缺陷面广。 |
| [#70539](https://github.com/anthropics/claude-code/issues/70539) | 【功能请求】仅滚轮鼠标模式，禁用点击但保留滚轮 | 💬7 / 👍68 | **👍数第二高**，反映出社区对 TUI 鼠标交互细粒度控制有强烈诉求。 |
| [#76559](https://github.com/anthropics/claude-code/issues/76559) | 伪造的后台 Agent 完成通知被用于 prompt injection 攻击 | 💬0 | **安全事件**：已在 HackerOne 提交完整报告，模型正确拒绝但暴露了后台通知的可信度边界问题。 |

**社区反应观察**：高评论/高点赞的 issue 高度集中在 **TUI 鼠标交互**、**Windows 平台稳定性**、**Agent 失控与成本** 三个方向，说明这些问题在规模化使用场景下已经成为共识痛点。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 内容概述 |
|---|------|---------|
| [#41447](https://github.com/anthropics/claude-code/pull/41447) | feat: open source claude code ✨ | 社区长期呼声——开源 Claude Code 本身的提案，关闭 #59、#456、#2846、#22002 等历史 issue，但官方尚未表态。 |
| [#76475](https://github.com/anthropics/claude-code/pull/76475) | Flag innerHTML/outerHTML `+=` append sink in security-guidance | 修复 `security-guidance` 插件中 `innerHTML/outerHTML` XSS 检测的盲点，原匹配规则基于子串，遗漏了 `el.innerHTML += userInput` 这种累加赋值模式。 |
| [#76394](https://github.com/anthropics/claude-code/pull/76394) | Add Claude Code Launcher - Windows CLI Application | 提供一个生产级 PowerShell 启动器，14 项交互菜单，降低 Windows 用户使用门槛。 |
| [#76298](https://github.com/anthropics/claude-code/pull/76298) | docs: document Remote Control background-task panel | 补齐 v2.1.205 引入的 web/mobile 后台任务面板文档，描述任务状态同步行为。 |
| [#76289](https://github.com/anthropics/claude-code/pull/76289) | examples/hooks: demonstrate compound-command pre-flight | 扩展 `bash_command_validator_example.py`，演示 `; && \|\|` 链式命令、管道、命令替换的预检策略。 |
| [#76274](https://github.com/anthropics/claude-code/pull/76274) | security-guidance: resolve review paths against repo root | 解决后台审查代理提交相对路径时缺少仓库根的问题，并加固 findings 数组契约。 |

> 本日 PR 数量偏少（6 条），**安全相关 PR 占据 3 席**，与 #76559、#76558 等安全报告形成呼应。

---

## 📈 功能需求趋势

通过对今日 50 条 issue 的聚类分析，社区诉求主要集中在以下几个方向：

1. **🖱️ TUI 鼠标交互精细化控制**（热度最高）
   - 滚动与点击解耦（#70539，👍68）
   - 聚焦点击不应触发选项选择（#71539、#76528）
   - ESC 不应一刀切终止所有后台任务（#21167）

2. **🤖 Agent / 子代理治理**
   - 递归 fan-out 限制（#68110）
   - 后台任务超时与强制取消（#75314、#66960）
   - 会话追踪上下文传递到 MCP（#76391, SEP-414）

3. **💰 成本与可观测性**
   - `--resume` 失效 `--effort` 等级导致 prompt cache 失效（#66005）
   - 任务日志磁盘失控（#41737）
   - 后台 Agent token 燃烧（#75314）

4. **🪟 Windows / WSL 平台一致性**
   - Cowork HCS 依赖缺失（#74649）
   - 终端闪烁（#14828）
   - Chrome 扩展 native host 崩溃（#76556）
   - WSL 沙箱 git worktree 失效（#76558）

5. **🌐 Remote / SSH 场景**
   - 桌面端切换/重开会话消息空白（#76124、#76560）

6. **🔐 安全与权限**
   - MCP managed server OAuth 自动刷新失败（#76544）
   - 沙箱路径屏蔽错误（#76558）
   - 后台通知 spoofing 与 prompt injection（#76559）
   - `--dangerously-load-development-channels` 通知丢弃（#71792）

---

## 👨‍💻 开发者关注点

**最集中的痛点（按反馈强度排序）：**

1. **Agent 失控 → 账单失控**：#68110 + #75314 + #66960 形成"递归-卡死-沉默执行"组合拳，是当前最迫切的产品治理需求。开发者呼吁增加 `Agent` 工具的深度限制、最大并发数、强制超时与可视化的取消 UI。

2. **平台分裂体验**：Windows/WSL 用户的抱怨量级远超 macOS/Linux——终端闪烁、Cowork 缺失 HCS、Chrome 扩展崩溃、Git worktree 沙箱屏蔽——Windows 似乎成为新功能发布的次级目标平台。

3. **数据/会话完整性焦虑**：#74260（文本块静默丢失）、#41737（日志无限膨胀）、#76124 / #76560（SSH 会话空白）三连击让开发者对"会话可恢复性"产生信任危机。

4. **TUI 鼠标 UX 缺陷**：#71539 + #70539 + #76528 + #21167 共同指向一个事实——鼠标事件被设计为"全有或全无"，在并行 Agent 工作流下，聚焦、滚动、终止三件事互相打架。

5. **Fable 5 模型行为困惑**：#66960、#74260、#76557 集中反映开发者对 `claude-fable-5`（adaptive thinking）的稳定性与可解释性存疑——长时静默、文本块丢失、自纠错失败等问题在生产环境中代价较高。

6. **身份认证脆弱**：#68861（magic-link 邮件验证）、#74714（组织禁用提示）、#76544（MCP OAuth 自动刷新）显示出认证链路在多端点（web、Desktop、CLI、managed MCP）下的维护负担。

---

*日报基于 2026-07-11 过去 24 小时 GitHub 数据生成。数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-11**

---

## 📌 今日速览

今天 Codex 仓库发布了 **rust-v0.145.0-alpha.4 / alpha.3** 两个连续的预发布版本，主题集中在 **GPT-5.6 Sol 模型支持**、**subagent（子智能体）调度** 以及 **Computer Use / 浏览器功能** 等新模型的落地细节。同时，Windows 桌面端的稳定性问题（冻结、卡顿、rendering 异常）和 macOS 上 Computer Use 的崩溃报告依旧高热，是当前社区最迫切的反馈方向。

---

## 🚀 版本发布

- **[rust-v0.145.0-alpha.4](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.4)**
- **[rust-v0.145.0-alpha.3](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.3)**

本日连续推出两个 alpha 预发布，主要面向 0.145.0 主版本的迭代，配套修复和功能见下方 PR 部分（如 #32288 让 GPT-5.6 Sol 成为 Bedrock 默认模型、#32290 修复 reasoning.summary 的模型兼容性等）。

---

## 🔥 社区热点 Issues

> 按评论数与关注度排序，挑选出最值得关注的 10 条。

1. **[#30364](https://github.com/openai/codex/issues/30364) — GPT-5.5 Codex reasoning-token 聚簇导致性能下降** ｜💬 183 / 👍 283
   多个用户报告 `gpt-5.5` 的 `reasoning_output_tokens` 在 516/1034/1552 等固定边界上聚集，与 reasoning-to-completion ratio 异常相关。讨论度高，是模型行为层面的潜在性能问题，OpenAI 团队应优先定位。

2. **[#18993](https://github.com/openai/codex/issues/18993) — VS Code 扩展无法打开历史会话** ｜ CLOSED ｜💬 49
   已在今天关闭。影响较广的回归问题，1.117.0 版本用户普遍受波及。

3. **[#31814](https://github.com/openai/codex/issues/31814) — GPT-5.6 Sol 无法指定子智能体模型** ｜💬 34 / 👍 85
   与模型元数据耦合的 MultiAgent V2 默认行为，导致用户无法为 subagent 选非 Sol 模型，社区认为这是配置上的"暗箱"。

4. **[#28982](https://github.com/openai/codex/issues/28982) — Windows App 26.616 原生沙箱启动失败** ｜💬 33
   错误信息为「The specified module could not be found」，影响 0.x → 26.616 的升级用户。

5. **[#20214](https://github.com/openai/codex/issues/20214) — Codex Windows 11 Pro 频繁冻结/卡顿** ｜💬 32 / 👍 45
   现象是即使硬件充足仍会出现，应用层与 Shell 均受影响；和 #16374、#29821 属于同一类问题。

6. **[#16374](https://github.com/openai/codex/issues/16374) — Windows 桌面端间歇性冻结 Shell** ｜💬 26
   神奇 workaround 是「打开 Codex Settings 即可恢复」，说明问题大概率在主渲染循环或 IPC 链路上。

7. **[#28969](https://github.com/openai/codex/issues/28969) — 增加关闭 60 秒自动 resolve 的开关** ｜💬 22 / 👍 104
   功能型需求，社区强烈建议给"自动答问题"加可关闭开关，避免误触发。

8. **[#13009](https://github.com/openai/codex/issues/13009) — Spark 模型拒绝 `reasoning.summary`** ｜ CLOSED ｜💬 21
   模型兼容性问题已修复，与 PR #32290 修复同一根因。

9. **[#24814](https://github.com/openai/codex/issues/24814) — Windows 端 Browser Use 被企业网络策略拦截** ｜💬 19
   即使是 example.com 也会被拦，是企业级部署常见痛点，与端上 Browser 渲染层相关。

10. **[#32032](https://github.com/openai/codex/issues/32032) — Computer Use 1.0.1000366 在 macOS 15.7.7 启动崩溃** ｜💬 14
    `dyld` 找不到 Swift Concurrency 符号；与 #22822 / #32293 关联，预示 1.0.1000366 在新版系统上存在兼容性回归。

---

## 🛠 重要 PR 进展

> 选取今天影响较大的 10 个合并/关闭的 PR。

1. **[#32305](https://github.com/openai/codex/pull/32305) — 改进文件 blob 上传诊断**：上传失败时不再泄漏完整签名 URL，统一加 `x-ms-client-request-id`，便于跨服务追踪。
2. **[#32302](https://github.com/openai/codex/pull/32302) — Unix IDE 优先使用 Codex Home Socket**：在 `CODEX_HOME/ipc/ipc.sock` 下查找，连接有统一 deadline。
3. **[#32301](https://github.com/openai/codex/pull/32301) — 信任来自已物化 workspace 插件的 hooks**：解决 #26452 / #26383 一类 hooks 不触发问题。
4. **[#32290](https://github.com/openai/codex/pull/32290) — 兼容各模型的 reasoning.summary 支持**：模型元数据加 `supports_reasoning_summary_parameter`，与 #13009 直接相关。
5. **[#32289](https://github.com/openai/codex/pull/32289) — 本地 thread store 支持分页项目持久化**：分页线程保留通过 app-server API 的可管理性。
6. **[#32288](https://github.com/openai/codex/pull/32288) — GPT-5.6 Sol 成为 Bedrock 默认模型**：Sol/Terra/Luna 三变体在 Amazon Bedrock 静态目录前置。
7. **[#32286](https://github.com/openai/codex/pull/32286) — 安全缓冲提示语义更清晰**：「Keep waiting」改为「Dismiss and keep waiting」。
8. **[#30463](https://github.com/openai/codex/pull/30463) — 修复 mention 间的自动补全定位**：解决 `$unbound-skill | $bound-skill` 时弹层错选问题。
9. **[#31662](https://github.com/openai/codex/pull/31662) — 核心：限制 subagent 的 environment_ids**：v1/v2 `spawn_agent` 支持环境子集校验；与 #31814、#17598 闭环。
10. **[#30882](https://github.com/openai/codex/pull/30882) — Windows 应用补丁保留换行符**：`apply_patch_preserve_line_endings` 功能开关保留 LF/CRLF/CR。

另值得关注的还有：**[#30887](https://github.com/openai/codex/pull/30887)** 加速反向历史搜索、**[#31514](https://github.com/openai/codex/pull/31514)** 减少冗余文件系统 syscall、**[#32280](https://github.com/openai/codex/pull/32280)** 在 TurnCompleteEvent 中携带终态 error、**[#26259](https://github.com/openai/codex/pull/26259)** 新增 advisory `Interrupt` hooks、**[#32277](https://github.com/openai/codex/pull/32277)** 显式 `personality = "none"` 时移除 `# Personality` 段、**[#32272](https://github.com/openai/codex/pull/32272)** 在 plugin 详情中暴露 scheduled tasks 元数据。

> 仍未合并但重要的：**[#31058](https://github.com/openai/codex/pull/31058)** 「对模型容量错误进行有界重试（30 秒/2 分钟/5 分钟）」，目前仍处于 OPEN。

---

## 📈 功能需求趋势

通过对今日活跃 issues 与 PR 的归类，社区最强烈的关注方向如下：

1. **GPT-5.6 系列模型落地与配置**
   - Sol/Terra/Luna 默认化（PR #32288）、subagent 调度的可配置性（#31814、PR #31662）、`reasoning.summary` 兼容性（PR #32290、Issue #13009）。

2. **Hooks 系统可观察性与正确性**
   - 多条 PR (#32301、#26259、#32274) + 多条未解 issue (#26383、#26452) 说明 hooks 是当前 CLI 体验的最大痛点之一。

3. **Windows 桌面体验**
   - 卡顿、冻结、首屏渲染、文本闪烁（#20214、#16374、#29821、#32016），同时还有 #31387（远程控制配对失败）、#32040（Browser PiP 失败后挂起）等。

4. **Computer Use 与 Browser 子系统稳定性**
   - macOS Swift Concurrency 符号解析失败（#32032）、SIGTRAP（#32293）、Windows 端 Browser 崩溃（#32040）、企业网络拦截（#24814）。

5. **性能与可观测性**
   - 文件系统 syscall 优化（#31514）、反向历史搜索速度（#30887）、turn 终止错误回传（#32280）、上传诊断增强（#32305）。

6. **开发者可用性细节**
   - 自动 60 秒 resolve 关闭开关（#28969）、双击 Esc 中断（#12582）、`personality = none` 行为（PR #32277 / #32274）。

---

## 🧩 开发者关注点与高频反馈

- **「希望所有行为都可配置，而不是默认化」**
  - Subagent 模型被 Sol 强制覆盖（#31814）、personality 自动迁移（TUI 启动检测，PR #32274）、60 秒自动 resolve（#28969）——开发者普遍认为 Codex 在悄悄写入用户未明确选择的偏好。
- **「Windows 端的稳定性优先级需要提升」**
  - 同时存在多个版本的 Windows 桌面端 issue（#28982、#20214、#16374、#29821、#32016、#31387、#32040），且常常相似现象对应不同根因，挫败感较强。
- **「Hooks 是脚本集成的基石，但目前的行为既不完整也不易排错」**
  - Issue #26383、#26452 与 PR #32301、#32274、#26259 共同表明 hooks 的"信任传播"、"事件触发"与"迁移逻辑"还在被持续重做，文档与稳定性欠奉。
- **「GPT-5.6 / Sol 的引入把更多行为耦合到了模型元数据里」**
  - 多个 issue（#31814、#17598、#32023、#32146）都指向同一根因：模型元数据（含 `multi_agent_version`、`hide_spawn_agent_metadata` 等）会影响客户端默认行为，给自托管和非 OpenAI provider 带来兼容性回归。
- **「Computer Use / In-app Browser 正在成为主战场，但仍是 Beta 心态」**
  - 1.0.1000366 在多个平台上同时出现崩溃，开发者呼吁提供更清晰的最小支持版本矩阵（macOS、Windows、依赖库）。

---

> **日报生成时间**：2026-07-11 ｜ **数据范围**：openai/codex 仓库过去 24 小时活跃内容

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-07-11

## 📌 今日速览

今日 Gemini CLI 仓库呈现明显的"**安全加固 + Agent 稳定性**"双主线：在过去 24 小时内更新的 PR 中，近半为安全相关修复（A2A 服务器路径穿越、IDE token 文件 TOCTOU、Prompt Injection 防护等），同时多项 subagent / browser agent / Auto Memory 长期跟踪 Bug 仍在持续推进。社区关注度最高的话题仍是 [#4191 公共路线图](https://github.com/google-gemini/gemini-cli/issues/4191)，该 issue 仍以 98 👍 稳居榜首。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**，近期仍在 0.33.x 区间迭代。

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|---|---|
| [#4191](https://github.com/google-gemini/gemini-cli/issues/4191) | **Public Roadmap（跟踪型 Issue）** | 98 👍 / 15 评论，全仓库热度第一；维护团队官方维护，是了解 Gemini CLI 演进路线与可贡献点位的入口。 |
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 达到 MAX_TURNS 后错误上报为 GOAL 成功** | 10 评论，P1；`codebase_investigator` 子代理实际已中断却伪装成功，严重干扰后续流程。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **组件级 Robust Evaluations（Epic）** | 继 15300 之后扩展行为评估套件（已生成 76 个测试），是 Gemini CLI 走向"可量化质量保障"的关键基础设施。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知的文件读取/搜索/映射评估（Epic）** | 7 评论，P2；探索用 AST 精确读方法边界、降噪 token，是上下文工程方向的重要探索。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 长时间挂起** | 7 评论，P1；甚至等一小时仍未返回，属于阻塞型 Bug，影响面广。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不会主动使用自定义 skills / sub-agents** | 6 评论，P2；反映当前 agent 在"自主发现工具"层面的不足。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 对低信号会话无限重试** | 5 评论，P2；Auto Memory 链路中的状态机缺陷，与 [#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) 形成"内存系统 Bug 簇"。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 执行完成后卡在 "Waiting input"** | 4 评论，P1；非交互命令也被阻塞，严重影响 CLI 可用性。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | **Wayland 下 browser subagent 失败** | 4 评论，P1；Linux 桌面环境兼容性问题。 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | **Agent 应主动避免破坏性行为（如 `git reset --force`）** | 3 评论，P2；社区期待更"安全第一"的 agent 行为策略。 |

> 其他值得跟踪：[#24246 当工具数 > 400/128 时触发 400](https://github.com/google-gemini/gemini-cli/issues/24246)、[#22267 Browser Agent 忽略 settings.json](https://github.com/google-gemini/gemini-cli/issues/22267)、[#22093 v0.33.0 后 subagent 越权运行](https://github.com/google-gemini/gemini-cli/issues/22093)。

---

## 🛠 重要 PR 进展

| PR | 类型 | 说明 |
|---|---|---|
| [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) | **Bugfix + 安全** | `a2a-server` 任务取消时不再产生"幽灵执行"，同时修复 race condition / 内存泄漏 / 未经校验输入处理。 |
| [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) | **重构 + 安全** | 重构 `CoderAgentExecutor` 初始化顺序，路径信任检查早于环境变量加载，并引入 `AsyncLocalStorage` 隔离任务环境。 |
| [#28353](https://github.com/google-gemini/gemini-cli/pull/28353) | **安全** | 修复 `restore` 命令的路径穿越漏洞（`../../../etc/passwd` 可逃逸 checkpointDir）。 |
| [#28352](https://github.com/google-gemini/gemini-cli/pull/28352) | **安全** | Caretaker 在摄入 issue 标题时进行转义并包裹 `untrusted_context`，防御 Prompt Injection。 |
| [#28345](https://github.com/google-gemini/gemini-cli/pull/28345) | **新功能** | 引入 LLM triage orchestrator（基于 Antigravity SDK）与 Cloud Run Job 容器构建，向自动化 triage 流水线迈进。 |
| [#28330](https://github.com/google-gemini/gemini-cli/pull/28330) | **安全** | IDE Companion 的认证 token 文件改为原子写入 0o600，关闭 TOCTOU 窗口。 |
| [#28349](https://github.com/google-gemini/gemini-cli/pull/28349) | **Bugfix** | `customDeepMerge` 加入循环引用检测，避免 `RangeError: Maximum call stack` 崩溃。 |
| [#28348](https://github.com/google-gemini/gemini-cli/pull/28348) | **Bugfix** | 修复 API 重试导致的 `MaxListenersExceededWarning` 与 Windows 上的无限 OAuth 认证循环。 |
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) ✅ | **UX 修复（已关闭合并）** | `/privacy` 在无 Code Assist 层级时（如 Workspace 账号）显示清晰提示而非后端原始错误。 |
| [#28240](https://github.com/google-gemini/gemini-cli/pull/28240) | **功能** | 将 `AGENTS.md` 列为默认上下文文件之一，无需手动配置 `settings.json`。 |

> 其他补充：[#28144 启动期编辑器检测惰性化（解决 Windows 慢启动，已关闭）](https://github.com/google-gemini/gemini-cli/pull/28144)、[#28153 修复 `/clear` 后的 `update_topic` 陈旧写入](https://github.com/google-gemini/gemini-cli/pull/28153)、[#28140 升级 `shell-quote`/`simple-git` 修复依赖漏洞](https://github.com/google-gemini/gemini-cli/pull/28140)、[#28244 移除 policy-engine 文档中的 `rm -rf /` 示例](https://github.com/google-gemini/gemini-cli/pull/28244)。

---

## 📈 功能需求趋势

从活跃 Issue 中可以归纳出以下几条主线方向：

1. **Agent 系统的可靠性**：`generalist agent` 挂起、MAX_TURNS 状态失真、subagent 越权、bug report 缺少子代理上下文——表明 Agent 体系正从"能用"过渡到"可控可观测"。
2. **AST 感知的代码理解**：连续 EPIC（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）评估 tilth/glyph 等 AST 工具，目标是用更少 token、更准边界替代朴素的"读整段文件"。
3. **Auto Memory / 长期记忆系统**：[#26516 / 26522 / 26523 / 26525](https://github.com/google-gemini/gemini-cli/issues/26516) 形成 memory 系统集中改造：日志脱敏、inbox 校验、循环防护、确定性 redaction。
4. **Browser Agent 韧性**：[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) 共同指向浏览器代理在 Wayland / settings.json / 锁恢复场景下的鲁棒性问题。
5. **可控性与"安全第一" agent 行为**：[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 要求 agent 主动避免 `git reset --force` 等高破坏操作。
6. **本地 Subagent Sprint**：[#20195](https://github.com/google-gemini/gemini-cli/issues/20195) 仍开放，社区正以"小型冲刺"形式推进 subagent 化。
7. **组件级 Evaluation Infra**：[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 与 [#23313](https://github.com/google-gemini/gemini-cli/issues/23313) 显示团队希望将评估做成 CI 一等公民。

---

## 👨‍💻 开发者关注点

- **安全成为 P1/P2 主流**：今日 PR 中路径穿越、TOCTOU、Prompt Injection、依赖 CVE、token 文件权限五大类齐发，反映出团队对"Agent + 文件系统 + 网络"复合攻击面的重视。
- **启动与性能**：编辑器惰性检测（[#28144](https://github.com/google-gemini/gemini-cli/pull/28144)）与 terminal resize 重绘（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）是被反复点名的体验问题。
- **平台兼容性**：Windows 上的 OAuth 循环（[#28348](https://github.com/google-gemini/gemini-cli/pull/28348)）、Wayland 浏览器代理失败（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）、退出外部编辑器后的终端损坏（[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)）是三大跨平台痛点。
- **"Agent 自己说不清自己"**：开发者希望 agent 对自身 CLI 标志、热键、能力边界有更精确的"自我认知"（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。
- **破坏性操作的安全护栏**：希望在保留能力的同时引入"高危命令犹豫/确认"机制。
- **零散但高频**：工具数量上限（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）、tmp 脚本污染工作区（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)）、`\n` 转义异常（[#22466](https://github.com/google-gemini/gemini-cli/issues/22466)）等小但反复出现的体验摩擦。

---

*日报基于 GitHub Issues / Pull Requests 数据自动汇总，仅供社区参考，不代表官方立场。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**2026-07-11**

---

## 1. 今日速览

Copilot CLI 发布 **v1.0.71-0** 预发布版本，重点优化 `/settings` 面板（新增提示词固定开关与 Repo 作用域标签）以及键盘快捷键体验（`ctrl+x → x` 关闭会话、`ctrl+x → h` 隐藏 spinner）。社区焦点集中在 **Windows/WSL2 终端下的 TUI 卡死**（#4069、#4077）、**MCP OAuth 流程异常**（#4089、#4085、#4084 三连发）和 **BYOK 模型切换受限**（#3709 高赞 17 次），反映出生态扩张期协议兼容性与跨平台稳定性仍是主要痛点。

---

## 2. 版本发布

### v1.0.71-0（预发布，今日发布）

**Added**
- `/settings` 中新增「pinned prompts」开关，用于控制提示词固定行为
- `/settings` 仪表板新增 **Repo** 与 **Repo (local)** 作用域标签

**Improved**
- 默认改用更有针对性的校验命令与更轻量的安装指引
- 新增快捷键：`ctrl+x → x` 关闭会话；`ctrl+x → h` 隐藏 spinner（原文截断，预计为 hide spinner / status）

> 说明：完整 Release Notes 仍在补充中，建议关注官方 [Releases 页面](https://github.com/github/copilot-cli/releases)。

---

## 3. 社区热点 Issues

| # | Issue | 类别 | 👍 | 评论 | 关注理由 |
|---|---|---|---|---|---|
| [#4069](https://github.com/github/copilot-cli/issues/4069) | TUI mid-turn wedge（屏幕清空、输入失灵、`Ctrl+C`/`Ctrl+\` 无效，stdout 报 EIO，JSON-RPC transport 报 EPIPE） | triage | 8 | 7 | **TUI 渲染层关键缺陷**：1.0.70-0 在 WSL2 + Windows Terminal 下整轮回复中途崩溃，社区已有可复现 trace；与 #4077 互为镜像，影响 1.0.70 用户升级决策。 |
| [#4077](https://github.com/github/copilot-cli/issues/4077) | TUI 黑屏挂起（1.0.70-0，Windows Terminal） | platform-windows / terminal-rendering | 3 | 2 | 同一类问题的独立报告，可通过 `--resume` 恢复但会话内数据已损坏；WinGet 自动更新通道触发，建议先回退。 |
| [#3709](https://github.com/github/copilot-cli/issues/3709) | 允许 `/model` 在同一会话内切换 BYOK/本地模型 | models | **17** | 2 | **本期最高赞**：BYOK 模式下 `COPILOT_MODEL` 锁定单一模型，`/model` 列表不显示本地 provider；多模型实验工作流的核心痛点。 |
| [#2739](https://github.com/github/copilot-cli/issues/2739) | gpt-5.4 / gpt-5.3-codex 移除 xhigh 推理档位 | models | 12 | 5 | 已在今日 CLOSED，需确认官方是否回退或提供替代配置；影响依赖高强度推理的代码评审、复杂重构场景。 |
| [#3399](https://github.com/github/copilot-cli/issues/3399) | BYOK 支持自定义 HTTP Header（租户 ID、组织 ID 等） | models / configuration | 6 | 3 | 企业接入 Azure AI Foundry、自建网关、vLLM 等的标配需求；目前只能通过环境变量绕路，缺乏 first-class 支持。 |
| [#3331](https://github.com/github/copilot-cli/issues/3331) | CLI 启动时通过 marketplace flag 自动更新插件 | plugins | 4 | 3 | 内部团队下发插件的强需求，与 `copilot plugin update` 手动流程冲突；建议加 `auto-update: true` 字段。 |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | `/voice` 模式所有 ASR 模型静默失败（MultiModalProcessor 路由 bug） | models | 0 | 3 | Foundry Local Core 的 nemotron RNNT 路由全部回空转录；包含原始 PulseAudio 抓包证据，定位精确。 |
| [#3024](https://github.com/github/copilot-cli/issues/3024) | MCP 服务器过多导致连续 compaction | context-memory / mcp | 0 | 2 | 极端 case（94k/128k 上下文）陷入退化循环；缺少「即将超出窗口」的预警机制。 |
| [#3874](https://github.com/github/copilot-cli/issues/3874) | `preToolUse` agent hook 拒绝机制失效 | permissions / plugins | 0 | 2 | 安全治理场景关键缺陷：hook 拒绝后工具仍被执行，与 VS Code Copilot Chat 扩展 v1.0.65 行为不一致。 |
| [#4091](https://github.com/github/copilot-cli/issues/4091) | **linuxmusl-x64** 发布包移除独立二进制 | — | 0 | 1 | **已在今日 CLOSED**，需查阅是否修复或替换为 musl 兼容包；Alpine 用户（包括容器化部署）属重大 breaking change。 |

---

## 4. 重要 PR 进展

过去 24 小时仅 **1 条 PR** 更新，属维护性修复：

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#2565](https://github.com/github/copilot-cli/pull/2565) | install: 防止重装时 PATH 重复写入 | OPEN | 安装脚本原先通过 `command -v copilot` 判定是否提示 PATH 配置，但该命令需重启 shell 才生效，导致二次安装时 shell profile 被重复 append。补丁应在写入前对 PATH 行做去重检查。建议 Alpine / dotfiles 用户跟进 review。 |

> 若需关注更广的合并活动，请浏览 [Copilot CLI Pull Requests](https://github.com/github/copilot-cli/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-desc)。

---

## 5. 功能需求趋势

按议题聚类得出的社区主攻方向（按讨论密度排序）：

1. **MCP 协议与 OAuth 健壮性**（最高优先级）
   - 集中爆发：#4089（Atlassian 工具 0 暴露）、#4086（自动连接假阳性）、#4085（OAuth 90s 断连）、#4084（发现后立即断开）
   - 共同主题：HTTP/SSE MCP 在 OAuth 鉴权生命周期上的实现漏洞，影响 Azure AD、Microsoft Work IQ、Atlassian 等多家 SaaS

2. **Voice 模式完善**
   - #4024 ASR 模型选择路由失败
   - #4090 空格松开即自动提交（PTT 优化）
   - #4092 录音期间自动静音系统播放
   - #4083 企业代理下 Foundry Local Core 下载失败（`ENOTFOUND api.nuget.org`）
   - 表明 voice 正在从实验功能过渡为正式产品形态

3. **BYOK / 多模型体验**
   - #3709 多模型切换
   - #3399 自定义 Header
   - 反映出自托管（vLLM、LiteLLM、Azure AI Foundry）生态已形成相当规模

4. **TUI 跨平台稳定性**
   - WSL2 + Windows Terminal 路径上的渲染死锁（#4069、#4077），与 Rust JSON-RPC transport 的 EPIPE 错误强相关

5. **Sessions / 跨端同步**
   - #4082 CLI 与 Desktop App 会话互导
   - #4071 `/session` 选择器回归（仅显示当前 session，疑似 ExP flight 副作用）
   - #4078 `/every`、`/after` 触发后杀掉既有提示队列

6. **可扩展性 / Skills**
   - #4088 提出 `!<command>` 占位符实现 Skills 动态上下文注入
   - #4076 让内置 research agent 可访问用户 MCP 工具

---

## 6. 开发者关注点

- **可靠性 > 新特性**：近半数高评论议题围绕「不可用」场景——TUI 死锁、shell 阻塞、MCP 静默断连——表明用户对生产环境稳定性的容忍度已接近临界点。
- **MCP 协议碎片化**：多家 SaaS 同时出现 OAuth 互操作问题，开发者担心后续接入新 MCP server 时需逐个调通，呼吁官方提供一致性测试或 debug 工具。
- **BYOK 成为默认期望**：仅靠 `COPILOT_MODEL` + `/model` 已无法满足多模型实验、多 provider 并存的现实工作流，header 注入、模型热切换成为高频诉求。
- **Voice UX 细节打磨**：从 PTT 自动提交、系统静音到企业代理下载，全是「差一步到好用」的体验短板，修复成本低但感知强。
- **Windows / WSL2 仍是薄弱环境**：连发两份终端崩溃报告，且 1.0.70 预发布通道自动推送引发升级焦虑，建议团队版本策略审视 pre-release 默认开启问题。
- **插件 / Skills 生态扩展**：开发者希望 marketplace 插件能自动更新、Skills 支持动态上下文，CLI 正从「终端调用 LLM」演化为「Agent 平台」，相关 API 抽象需尽快稳定。

---

*日报基于 github.com/github/copilot-cli 在 2026-07-10 ~ 2026-07-11 的公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-11**
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日仓库活跃度集中在 **Web 端交互优化** 与 **Soul（Agent 核心）层 Bug 修复** 两条线。`nankingjing` 连续提交两枚 PR 修复 Plan Mode 工具绑定与新装环境错误提示的可操作性，`anxndsgn` 与 `qianqiuqiu` 各自合并了 Web 布局与 Safari IME 输入体验的改进。今日无新 Issue 出现，亦无新版本发布，属于典型的"消化存量、稳步打磨"型工作日。

---

## 🚀 版本发布

今日过去 24 小时内 **无新版本发布**。如需查看最新版本，请前往 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取。

---

## 🔥 社区热点 Issues

⚠️ **数据说明**：过去 24 小时内仓库无活跃 Issue 更新，因此今日暂无新增讨论热点。建议关注以下近期持续受到开发者关注的历史议题方向：

| # | 主题方向 | 关注点 |
|---|---------|--------|
| #2456 | 新装环境 LLM 未配置提示不友好 | 关联今日 PR #2488，已被定向修复 |
| #2478 | `/init` 后 Plan Mode 工具绑定异常 | 关联今日 PR #2489，已被定向修复 |

> 上述两个 Issue 都在今日通过 PR 拿到了解决方案，预期将在下一次合入后关闭。

---

## 🛠 重要 PR 进展

### ✅ 已合并 / 已关闭

**1. PR #2353 — fix(web): tighten app layout spacing**  [链接](https://github.com/MoonshotAI/kimi-cli/pull/2353)
- 作者：anxndsgn ｜ 状态：CLOSED
- **内容**：移除应用级外层 gutter，保留安全区边距；优化会话侧边栏列表间距与搜索框展示效果。
- **价值**：属于 UI 打磨类改动，提升整体布局一致性。

**2. PR #1815 — fix(web): prevent Enter from sending message during IME composition on Safari**  [链接](https://github.com/MoonshotAI/kimi-cli/pull/1815)
- 作者：qianqiuqiu ｜ 状态：CLOSED
- **内容**：修复 Safari + macOS 原生中文输入法下，按 Enter 提交候选词会误触发送消息的 Bug。
- **价值**：中文用户高频场景的体验修复，避免输入法候选态被错误识别为"提交"。

### 🔄 进行中（Open）

**3. PR #2489 — fix(soul): restore plan-mode tool bindings after /init creates throwaway soul**  [链接](https://github.com/MoonshotAI/kimi-cli/pull/2489)
- 作者：nankingjing ｜ 状态：OPEN
- **内容**：修复 `KimiSoul.__init__` 中 `_bind_plan_mode_tools()` 误改共享工具实例的问题。`/init` 创建的临时 soul 与 live soul 共享 agent 时会污染主会话的 `ExitPlanMode` / `EnterPlanMode` / `Write` 等工具绑定。
- **价值**：核心 Agent 生命周期管理的状态隔离修复，影响 Plan Mode 用户体验的底层正确性。

**4. PR #2488 — fix(soul): make LLMNotSet error message actionable for fresh installs**  [链接](https://github.com/MoonshotAI/kimi-cli/pull/2488)
- 作者：nankingjing ｜ 状态：OPEN
- **内容**：将 `LLMNotSet` 默认提示从 `LLM not set` 改为可引导用户执行 `kimi login` 的可执行指引。
- **价值**：显著降低新用户（尤其 Homebrew 一次性安装用户）的首次使用摩擦。

---

## 📈 功能需求趋势

从今日 PR 内容反推社区关注方向：

| 趋势 | 证据 | 优先级 |
|------|------|--------|
| **Web 端体验打磨** | #2353、#1815 连续合并，聚焦布局与输入法交互 | ⭐⭐⭐ |
| **新用户入门体验（Onboarding）** | #2488 针对 Homebrew 新装用户首跑场景 | ⭐⭐⭐ |
| **Agent / Soul 核心稳健性** | #2489 修复 Plan Mode 状态污染 | ⭐⭐⭐⭐ |
| **跨浏览器 / 跨平台兼容** | #1815 专门处理 Safari + macOS 中文 IME | ⭐⭐ |

> 整体看，社区从"功能堆叠"进入"细节打磨 + 核心稳态"阶段，重点回归到**鲁棒性**与**首次使用体验**。

---

## 💬 开发者关注点

综合今日 4 个 PR 的讨论方向，可归纳出以下开发者共识：

1. **首次安装体验不容忽视** — `#2488` 反映出新用户遭遇 `LLM not set` 时无任何引导，社区希望错误信息具备"自描述 + 可执行"能力。
2. **状态隔离 / 对象生命周期管理是 Agent 框架的核心难题** — `#2489` 暴露的"临时 soul 污染主 soul 工具实例"是典型的共享可变状态问题，类似隐患在多 Agent 系统中很常见。
3. **国际化（i18n）输入体验仍是 Web 终端的薄弱点** — `#1815` 揭示了 Safari 对 IME composition 事件的支持差异，提示团队在跨平台时需对输入路径做更细粒度的状态机判断。
4. **布局与排版的"最后一公里"** — `#2353` 表明即便是 spacing 级别的微调，也需要专门的 PR 推动，反映社区对 UI 一致性要求较高。

---

> 📊 **日报小结**：今日为"低噪高效"的一天 — 4 个 PR 中 2 个已合入、2 个聚焦核心 Bug；Issues 区静默，无新争议。建议持续关注 `nankingjing` 的两个 Open PR，一旦合入将显著改善 Plan Mode 与新装场景的稳定性。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-11**

---

## 一、今日速览

今日 OpenCode 仓库活跃度持续高涨，过去 24 小时内共有 50 个 Issue 和 50 个 PR 更新。**V2 TUI 体验优化**成为主线，多个 PR 集中修复 fork 弹窗、Composer 关闭提示、Service 状态检测等交互细节；同时 **GPT-5.6 家族模型适配**与 **GitHub Copilot V2 集成重构**稳步推进，多个相关 Issue 关闭。

---

## 二、版本发布

过去 24 小时内无新版本发布。

---

## 三、社区热点 Issues

| # | 标题 | 状态 | 评论/👍 | 关键点 |
|---|------|------|---------|--------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard is not working | OPEN | 112 / 103 | **本月最高热度 Issue**，终端选中文本无法复制；自 1.0.62 长期未修复，社区耐心消耗严重 |
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | High CPU usage in newer versions | OPEN | 20 / 12 | 近期版本 CPU 占用激增，3 个并发会话即可拖慢整机，是性能回归问题 |
| [#10288](https://github.com/anomalyco/opencode/issues/10288) | Feature: Mobile/Android/iOS/Web UI | OPEN | 14 / 89 | **最高点赞**的功能请求，移动端体验呼声强烈 |
| [#36140](https://github.com/anomalyco/opencode/issues/36140) | GPT-5.6 Luna returns model not found | OPEN | 11 / 48 | Codex OAuth 调用 Luna 模型返回 404，AI 模型支持一致性问题 |
| [#14970](https://github.com/anomalyco/opencode/issues/14970) | SQLite corruption on NFS concurrent sessions | OPEN | 10 / 19 | 并发会话导致数据库损坏，影响 Linux/NFS 环境用户 |
| [#34743](https://github.com/anomalyco/opencode/issues/34743) | opencode ACP from Xcode 27 beta 2 ignores config | OPEN | 12 / 0 | Xcode 27 集成下自定义模型被忽略，IDE 集成关键路径 |
| [#26772](https://github.com/anomalyco/opencode/issues/26772) | Integrated browser for desktop | OPEN | 12 / 3 | Desktop 应用内置浏览器工作区诉求 |
| [#2632](https://github.com/anomalyco/opencode/issues/2632) | Default permissions allow editing files & any commands | CLOSED | 22 / 4 | **安全相关**：默认权限过宽的争议今日关闭 |
| [#9532](https://github.com/anomalyco/opencode/issues/9532) | Tool calling errors with Claude | OPEN | 7 / 3 | Claude 模型频繁报工具不可用，模型兼容性问题 |
| [#36302](https://github.com/anomalyco/opencode/issues/36302) | feat(tui): unify modal interaction | OPEN | 5 / 0 | V2 TUI 37 个对话框组件、20 种状态统一整改的协调 Issue |

---

## 四、重要 PR 进展

| # | 标题 | 作者 | 价值 |
|---|------|------|------|
| [#36339](https://github.com/anomalyco/opencode/pull/36339) | feat(codemode): Promise.any & new Promise | rekram1-node | CodeMode 沙箱补齐 Promise 能力，闭合 #36304 |
| [#36341](https://github.com/anomalyco/opencode/pull/36341) | feat(tui): show pending command resolution | H-TTTTT | 修复 MCP slash 命令解析期间 TUI "假死"观感 |
| [#36338](https://github.com/anomalyco/opencode/pull/36338) | fix(tui): fork messages with agent attachments | thdxr | 解决 fork 时附件引发的 DataCloneError |
| [#36337](https://github.com/anomalyco/opencode/pull/36337) | fix(tui): make composer close action discoverable | thdxr | 新增 esc 关闭提示，改善 V2 TUI 可发现性 |
| [#36143](https://github.com/anomalyco/opencode/pull/36143) | fix(opencode): GPT-5.6 Responses Lite | AidenGeunGeun | 修复 GPT-5.6 Luna/Sol 模型 404 问题 |
| [#36336](https://github.com/anomalyco/opencode/pull/36336) | feat(core): port GitHub Copilot OAuth | opencode-agent[bot] | Copilot OAuth 移植至 V2 集成注册表，Enterprise 支持 |
| [#36333](https://github.com/anomalyco/opencode/pull/36333) | fix(core): cap session output tokens | opencode-agent[bot] | V2 provider turn 输出 token 上限 32k，统一运行时行为 |
| [#7756](https://github.com/anomalyco/opencode/pull/7756) | feat(task): subagent-to-subagent delegation | NamedIdentity | 子代理委派、预算控制与层级会话导航 |
| [#34794](https://github.com/anomalyco/opencode/pull/34794) | feat(provider): --model free | caretak3r | 新增 `--model free` 随机选用免费模型 |
| [#36332](https://github.com/anomalyco/opencode/pull/36332) | test(core): CodeMode search fixture catalog | opencode-agent[bot] | 200 个临时工具覆盖 20 个命名空间，强化 CodeMode 测试 |

---

## 五、功能需求趋势

从本期 Issue 分布提炼社区关注方向：

1. **🖥️ 多端与跨平台体验** — 移动端（Android/iOS/Web）[#10288](https://github.com/anomalyco/opencode/issues/10288)（89👍）、Desktop 内置浏览器 [#26772](https://github.com/anomalyco/opencode/issues/26772) 形成两大独立诉求
2. **🤖 新一代模型适配** — GPT-5.6 家族（Sol/Luna/Terra）[#36140](https://github.com/anomalyco/opencode/issues/36140)、Azure GPT-5.6 [#36211](https://github.com/anomalyco/opencode/issues/36211)、Claude 工具调用 [#9532](https://github.com/anomalyco/opencode/issues/9532) 持续上报
3. **🔧 TUI/Desktop 体验打磨** — V2 模态交互统一 [#36302](https://github.com/anomalyco/opencode/issues/36302)、autocomplete、复制粘贴 [#4283](https://github.com/anomalyco/opencode/issues/4283) 等基础交互质量
4. **🔐 权限与安全** — 默认权限 [#2632](https://github.com/anomalyco/opencode/issues/2632)、提供商级限流 [#32423](https://github.com/anomalyco/opencode/issues/32423)
5. **🔌 IDE 集成** — Xcode 27 ACP [#34743](https://github.com/anomalyco/opencode/issues/34743)、交互式 Steering [#19205](https://github.com/anomalyco/opencode/issues/19205)
6. **🛠️ 生态扩展** — 插件/分发项目（cadcode、Unforgit、toll402）请求官方收录

---

## 六、开发者关注点

- **🔴 终端复制粘贴仍不可用**（#4283，112 评论 / 103 👍）—— 自 v1.0.62 起的高赞问题尚未解决，是当前最迫切的体验痛点。
- **🔴 性能回归**（#30086）—— 7 天前开始高 CPU 占用，并发能力从 10+ 会话跌至 3 个，疑似管理服务重启风暴 [#36285](https://github.com/anomalyco/opencode/issues/36285) 引发。
- **🟡 数据库一致性**（#14970、#33320）—— SQLite 在 NFS 和并发 `opencode run` 场景下分别出现损坏/锁冲突，与 SQLite 单文件架构相关。
- **🟡 V2 嵌入式前端版本滞后**（#36232）—— CLI 报告 v1.17.18 但 Web UI 显示 v1.17.17，前端打包未对齐 `OPENCODE_VERSION`。
- **🟢 模型适配节奏**—— Codex OAuth、GitHub Copilot Enterprise、V2 OAuth 移植等基础设施持续推进，社区对 **GPT-5.6 兼容性修复反应积极**（48👍）。
- **🟢 TUI 体验明显改善**—— V2 fork 弹窗 [#36323](https://github.com/anomalyco/opencode/issues/36323)、Composer 关闭可发现性等当日 Issue 均被对应 PR 闭合，迭代效率高。

---

*本日报基于 anomalyco/opencode 仓库过去 24 小时公开数据自动汇总。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-11

> 数据来源：`github.com/badlogic/pi-mono`（earendil-works/pi）

---

## 📌 今日速览

今天的 Pi 社区围绕 **GPT-5.6 模型系列（Sol / Terra / Luna）上线** 展开了密集的 Provider 适配工作，GitHub Copilot、OpenAI Codex、OpenRouter 等多条线同步推进；同时，配套的 **`max` / `ultra` 思考等级** 也在核心类型与 UI 选层落地。Bug 修复层面聚焦于**推理模型空 content 异常、Windows TUI 重绘、OpenRouter 会话亲和性**等高频痛点。

---

## 🆕 版本发布

**无新版本发布**（过去 24 小时内未发布 Release）。

---

## 🔥 社区热点 Issues

> 挑选标准：评论数、👍 数与议题重要性综合排序

### 1. [#6097 — Add support for 'max' thinking level](https://github.com/earendil-works/pi/issues/6097) · 👍 17
**热度最高**。随着 OpenAI 发布 GPT-5.6 Sol，社区要求增加第六档 `max` 思考等级（对标 Anthropic Opus），目前 `max` 标签类型未支持，已被 PR #6489 跟进落地。

### 2. [#6259 — 'content is not iterable' when reasoning models return null content](https://github.com/earendil-works/pi/issues/6259) · 💬 14 · ✅ CLOSED
GLM-5.2 等推理模型返回 `reasoning_content + tool_calls` 但无文本 `content`，导致 `AssistantMessage.content = null`，多处迭代逻辑未做空值防护。属于影响多个 Provider 的高优先级 Bug。

### 3. [#6475 — Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot provider](https://github.com/earendil-works/pi/issues/6475) · 💬 8 · 👍 6 · 🚧 inprogress
跟随 GitHub 官方当日上线节奏，把三个 GPT-5.6 变体加入 `github-copilot` 模型目录。

### 4. [#6206 — Clamping to context window prevents artificial context limits](https://github.com/earendil-works/pi/issues/6206) · 💬 8
早期 #5595 的修复把 `max_tokens` clamp 到 context window，破坏了"人为设定的低 context 限制"与"maxTokens"两个概念的区分，引发退化。

### 5. [#6465 — Add GPT-5.6 Sol/Terra/Luna to OpenAI Codex catalog](https://github.com/earendil-works/pi/issues/6465) · 💬 7 · ✅ CLOSED
Codex CLI 0.144.0 已带 GPT-5.6 metadata，但 Pi `openai-codex` 目录仍停留在 GPT-5.5，本 PR 同步补齐。

### 6. [#6366 — Support session IDs for OpenRouter](https://github.com/earendil-works/pi/issues/6366) · 💬 7
OpenRouter 要求缓存键走 `x-session-id` 头或 JSON `session_id` 字段，Pi 当前只发 `session_id` 头和 `prompt_cache_key`，与 OpenAI 等 provider 的字段约定不一致，导致缓存命中率受损。

### 7. [#6476 — httpIdleTimeoutMs no longer respected (regression v0.80.3 → v0.80.6)](https://github.com/earendil-works/pi/issues/6476) · 💬 5 · 🚧 inprogress
自托管 vLLM 走 OpenAI 兼容 API 的用户在升级后几分钟即触发 `operation timed out`，降级恢复。已由 PR #6503（升级 bun 1.3.14 解锁 `BUN_CONFIG_HTTP_IDLE_TIMEOUT`）关联跟进。

### 8. [#6300 — Windows: input line redrawn on every keystroke](https://github.com/earendil-works/pi/issues/6300) · 💬 5
Windows 10 + cmd.exe / Windows Terminal 下，每个字符单独换行显示，影响 Windows 平台开发体验。

### 9. [#6303 — Exponential retry backoff has no cap](https://github.com/earendil-works/pi/issues/6300) · 💬 4 · 👍 1 · 🚧 inprogress
`getRetrySettings()` 返回值缺少 `maxDelayMs`，导致 `_prepareRetry()` 指数退避无上限，baseDelayMs=2000 时第 7 次重试就要等约 4 分钟。配置项存在但未生效。

### 10. [#6483 — Allow disabling request compression for openai](https://github.com/earendil-works/pi/issues/6483) · 💬 4 · ✅ CLOSED
v0.80.4 起 `openai-codex-responses` 在满足条件时会压缩请求体，但部分代理/CDN 不能正确处理压缩负载，需要一个开关禁用。

---

## 🛠 重要 PR 进展

### 1. [#6489 — feat(ai): add ultra thinking level](https://github.com/earendil-works/pi/pull/6489) · ✅ CLOSED
在共享 AI 类型、selector、settings、CLI、RPC 与主题层增加 `ultra` 思考等级；GPT-5.6 Sol/Terra 启用 Ultra，Luna 上限仍为 Max；OpenAI Codex 的 `ultra` 映射到 `reasoning.effort`。

### 2. [#6474 — feat(ai): support message-anchored tool loading](https://github.com/earendil-works/pi/pull/6474) · ✅ CLOSED
通过消息中携带 `addedTools`，让 Anthropic 等支持 tool-reference 的后端实现"中途动态加载工具"，无需把所有工具塞进首请求。

### 3. [#6341 — feat(ai): support constrained sampling](https://github.com/earendil-works/pi/pull/6341) · 🔓 OPEN · to-discuss
为工具调用引入"provider 端约束采样"——支持 JSON-schema 约束（`strict` 模式）与 grammar 约束两种形态，减少模型幻觉导致的工具参数错误。

### 4. [#6518 — feat(coding-agent): expose scoped models to extensions](https://github.com/earendil-works/pi/pull/6518) · ✅ CLOSED
新增 `pi.getScopedModels()` 暴露当前会话的模型循环列表（按 cycle 顺序，含思考等级），返回不可变快照，防止扩展越权修改会话状态。闭合 #6519。

### 5. [#6496 — fix(ai): support OpenRouter session affinity](https://github.com/earendil-works/pi/pull/6496) · ✅ CLOSED
修复 #6366——为 OpenRouter 调整会话 ID 的 header / JSON 字段以匹配其 sticky-session 缓存约定。

### 6. [#6501 — fix(extensions,theme): support embedded library hosts](https://github.com/earendil-works/pi/pull/6501) · ✅ CLOSED
修复 #6102 与部分 #6101——嵌入式库场景下 `initTheme()` 未被 TUI 启动触发，theme Proxy 会抛 "Theme not initialized"；并修复扩展运行时跨会话被 `dispose()` 污染的问题。

### 7. [#6506 — feat: add configurable auto-update on new session](https://github.com/earendil-works/pi/pull/6506) · ✅ CLOSED
新增 `autoUpdateOnNewSession` 设置，启动新会话时自动跑 `pi update --all`。默认关闭以避免冷启动延迟，power user 可开启。

### 8. [#6505 — feat(coding-agent): add goal extension example](https://github.com/earendil-works/pi/pull/6505) · ✅ CLOSED
在 `examples/extensions/` 下新增 `/goal <objective>` 示例扩展，演示跨多轮自主执行目标，附带 pause/resume/cancel 生命周期与会话持久化。闭合 #6504。

### 9. [#6503 — bump bun to 1.3.14](https://github.com/earendil-works/pi/pull/6503) · ✅ CLOSED
升级 bun 至 1.3.14 以支持 `BUN_CONFIG_HTTP_IDLE_TIMEOUT`，修复 bun 内建 5 分钟 HTTP idle timeout 无法被全局配置覆盖的 #6476。

### 10. [#6216 — feat: Add Amazon Bedrock Mantle OpenAI Responses provider](https://github.com/earendil-works/pi/pull/6216) · 🔓 OPEN
新增 Bedrock Mantle OpenAI Responses 适配，复用官方 OpenAI Bedrock Provider，补齐企业 AWS 用户使用 Responses API 的能力。

---

## 📈 功能需求趋势

从 50 条活跃 Issue 与 14 条 PR 提炼出当前社区的**四大关注方向**：

| 方向 | 代表议题 | 热度信号 |
|---|---|---|
| **新模型快速适配** | #6475 / #6465 / #6494 / #6490 | GPT-5.6 系列上线当天即触发 5+ 同步适配 |
| **推理/思考能力增强** | #6097 / #6489 / #6259 | `max` / `ultra` 等级、constrained sampling、null-content 健壮性 |
| **扩展 API 边界拓展** | #6519 / #6509 / #6493 / #6491 / #6480 / #6518 | scoped models、usage 上报、attachments、input 事件、多 agent 切换 |
| **Provider 兼容性与回归修复** | #6366 / #6476 / #6477 / #6481 / #6300 / #6303 | OpenRouter、Bedrock、Cloudflare、Windows TUI、retry 退避 |

---

## 💡 开发者关注点

总结 Issue 与 PR 中的高频反馈：

1. **GPT-5.6 模型生态上线是第一优先级**——Copilot、Codex、OpenRouter、Fable-5 多家 Provider 同时被跟进，且对 `max` / `ultra` 思考等级的支持呼声最高（#6097 单 issue 👍 17，全榜第一）。

2. **扩展（Extension）生态正在走向成熟**——围绕 `ctx.ui.setUsage`、`getScopedModels`、RPC `attachments`、`input` 事件触发面、多 agent 前台切换"core seams"等议题密集出现，开发者期望 Pi 从一个 CLI 工具演化为**可嵌入式、可扩展的 Agent 运行时**（#6101 / #6102 / #6480 / #6509）。

3. **Provider 兼容性与回归问题集中爆发**——`v0.80.6` 升级后出现的 `httpIdleTimeoutMs` 失效（#6476）、OpenRouter 缓存命中失败（#6366）、`compaction.enabled=false` 被绕过（#6472）、GPT-5.6 Luna 的 compaction 失败（#6477）等，说明**多 Provider 矩阵下的回归测试覆盖**仍是痛点。

4. **推理模型的"边界条件"成为稳定性的关键**——`content is null`（#6259）、GLM-5.2 走 Cloudflare 404（#6494）、Bedrock 未处理 stopReason（#6485）、Copilot `mai-code-1-flash-picker` endpoint 选错（#6510）——非主流 Provider 的容错细节正在快速暴露。

5. **Windows 与 bun 运行时是两大"被遗忘角落"**——#6300（Windows TUI 重绘）、#5365（bun 装 pi 却走 node）、#6503（bun 1.3.14 idle timeout）显示 Windows / 非默认运行时仍需打磨。

6. **开发者工具链升级呼声**——`constrained sampling`（#6341）、`message-anchored tool loading`（#6474）、`autoUpdateOnNewSession`（#6506）等 PR 反映社区期待 Pi 在**工具调用可靠性**与**运维自动化**两端持续投入。

---

*日报生成时间：2026-07-11 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-07-11
**数据来源**: [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 📌 今日速览

今天是 Qwen Code 的"多工作区（Multi-Workspace）日"——围绕 `qwen serve` daemon 单进程托管多工作区的 RFC（#6378）持续发酵，配套的 ACP 传输层、Web Shell 工作区切换器、会话隔离等能力同步推进。同时，v0.19.9 发布一波三折，三次连续触发 GitHub Actions 发布失败（Docker 集成测试 + 80MB 包体积限制），社区正在紧锣密鼓地修复。

---

## 🚀 版本发布

### v0.19.8-nightly.20260711.0ef3a76bd
- **fix(core)**: 在模型调用 `enter_plan_mode` 时保留 YOLO 模式（[#6630](https://github.com/QwenLM/qwen-code/pull/6630)）
- **feat(cli)**: 转发 `ask_user_question` 到 SDK

### v0.19.9（正式版）
- **fix(core)**: 停止子代理（subagent）工具调用的重复循环（[#6543](https://github.com/QwenLM/qwen-code/pull/6543)）
- **fix(session)**: 检测并标记损坏的历史链，不再静默截断

> ⚠️ **发布异常**：v0.19.9 在 7 月 10 日的发布流水线连续失败三次（[#6690](https://github.com/QwenLM/qwen-code/issues/6690)、[#6687](https://github.com/QwenLM/qwen-code/issues/6687)、[#6684](https://github.com/QwenLM/qwen-code/issues/6684)），失败作业为 `integration_docker`，已通过 [PR #6692](https://github.com/QwenLM/qwen-code/pull/6692) 修复 Docker 沙箱网络配置、[PR #6691](https://github.com/QwenLM/qwen-code/pull/6691) 将包体积上限从 80MB 提升至 96MB。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 重要性 |
|---|------|------|------|--------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: 单个 qwen serve daemon 支持多工作区** | OPEN | 20 | ⭐⭐⭐ 当前最热 RFC，奠定 daemon 架构升级方向 |
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | API Error: No stream activity for 120000ms | OPEN | 10 | ⭐⭐⭐ 流式响应 120 秒超时问题，影响所有升级到 v0.19.3+ 的用户 |
| [#5970](https://github.com/QwenLM/qwen-code/issues/5970) | YOLO 模式下自动进入 Plan 模式（已修） | CLOSED | 5 | ⭐⭐ v0.19.9 中已通过 PR #6630 修复 |
| [#6384](https://github.com/QwenLM/qwen-code/issues/6384) | hard limit: 0 错误（环境配置模型问题） | CLOSED | 5 | ⭐⭐ 已修复，提示 token 估算与硬上限冲突 |
| [#6654](https://github.com/QwenLM/qwen-code/issues/6654) | tool_use 块缺少对应 tool_result | OPEN | 4 | ⭐⭐ 会话历史结构问题，可能引发 API 拒绝 |
| [#6590](https://github.com/QwenLM/qwen-code/issues/6590) | macOS standalone 缺失 `@teddyzhu/clipboard` 原生模块 | OPEN | 4 | ⭐⭐ 影响所有 macOS standalone 用户粘贴图片功能 |
| [#6600](https://github.com/QwenLM/qwen-code/issues/6600) | v0.19.8 `--debug` 不生成日志文件 | CLOSED | 4 | ⭐ 已修复 |
| [#6629](https://github.com/QwenLM/qwen-code/issues/6629) | Cron 解析器 `5/15` 表达式被误解析为 `5` | CLOSED | 4 | ⭐ 已修复（autofix 流程） |
| [#6639](https://github.com/QwenLM/qwen-code/issues/6639) | MCP HTTP 传输 401 未触发 OAuth 恢复 | OPEN | 3 | ⭐⭐ MCP 鉴权链路缺陷 |
| [#6595](https://github.com/QwenLM/qwen-code/issues/6595) | qwen3.7-max 长上下文泄漏 `<analysis>/<summary>` 标签 | CLOSED | 3 | ⭐ 模型协议泄漏问题，已通过 PR #6683 强化重试 |

> 💡 社区反应：开发者对 **多工作区** 和 **subagent 稳定性** 两类问题的呼声最高，Issue #6378 在 4 天内收获 20 条评论，多个 PR 已围绕其展开实现。

---

## 🔧 重要 PR 进展

| PR | 标题 | 状态 | 关键内容 |
|----|------|------|----------|
| [#6678](https://github.com/QwenLM/qwen-code/pull/6678) | 展开 thinking 块时显示完整推理内容 | OPEN | 流式输出时 Alt+T 展开改用 MarkdownDisplay 渲染，恢复折叠前的完整体验 |
| [#6621](https://github.com/QwenLM/qwen-code/pull/6621) | 工作区限定 ACP 传输（多工作区 Phase 4） | CLOSED | 落地 RFC #6378 的 ACP 端点 `/workspaces/:workspace/acp` |
| [#5847](https://github.com/QwenLM/qwen-code/pull/5847) | serve: 每轮 system-reminder 运行时上下文注入 | OPEN | 新增 RuntimeContext KV 存储，对接 daemon API/SDK 动态上下文 |
| [#6530](https://github.com/QwenLM/qwen-code/pull/6530) | Web Shell: Markdown 表格双击单元格对话框 | OPEN | 增强型表格支持只读 cell 弹窗 + 复制 |
| [#6019](https://github.com/QwenLM/qwen-code/pull/6019) | /model `--compaction` 可配置压缩模型 | OPEN | 允许为 auto-compact 指定专用模型，控制压缩质量与成本 |
| [#6518](https://github.com/QwenLM/qwen-code/pull/6518) | /mcp 服务器详情页增加 Approve 按钮 | OPEN | 修复错过启动审批或误拒的"死胡同"问题 |
| [#6680](https://github.com/QwenLM/qwen-code/pull/6680) | 渠道：daemon 重启后会话恢复 | OPEN | 渠道路由与会话绑定解耦，懒加载历史会话 |
| [#6683](https://github.com/QwenLM/qwen-code/pull/6683) | 修复协议回合泄漏的重试逻辑 | OPEN | 强化 `<analysis>/<summary>` 泄漏回合的丢弃与重试 |
| [#6682](https://github.com/QwenLM/qwen-code/pull/6682) | 交互式 UI 周期性内存压力检测 | CLOSED | 解决长对话退出时 OOM 问题（呼应 #6614） |
| [#6579](https://github.com/QwenLM/qwen-code/pull/6579) | 模型切换限定在会话作用域 | OPEN | `/model <id>` 仅改当前会话；持久化默认需用 `/model --default` |

---

## 📈 功能需求趋势

通过对 30+ Issues 的归类，社区当前最关注的功能方向：

### 1. **多工作区架构升级**（热度最高）
- [#6378](https://github.com/QwenLM/qwen-code/issues/6378) 顶层 RFC + [#6621](https://github.com/QwenLM/qwen-code/pull/6621) ACP 传输 + [#6700](https://github.com/QwenLM/qwen-code/issues/6700)/[#6699](https://github.com/QwenLM/qwen-code/issues/6699) Web Shell 工具栏重构 + [#6646](https://github.com/QwenLM/qwen-code/issues/6646) 非主工作区会话写入
- 表明团队正在系统性重构 `qwen serve`，从"1 daemon = 1 workspace"演进为多租户

### 2. **Web Shell / Desktop UX 完善**
- 工作区选择器、执行上下文（local/worktree）、Git 分支显示、Markdown 表格交互等一批 UI 增强（[#6700](https://github.com/QwenLM/qwen-code/issues/6700)、[#6701](https://github.com/QwenLM/qwen-code/issues/6701)、[#6702](https://github.com/QwenLM/qwen-code/issues/6702)、[#6530](https://github.com/QwenLM/qwen-code/pull/6530)）
- 明显对标 Codex 桌面端的输入区布局

### 3. **Subagent 与渠道集成可靠性**
- 子代理工具调用循环（[#6543](https://github.com/QwenLM/qwen-code/pull/6543)）、可观测性（[#6580](https://github.com/QwenLM/qwen-code/pull/6580)）、泄漏标签（[#6683](https://github.com/QwenLM/qwen-code/pull/6683)）
- 渠道侧 DingTalk Stream 恢复、AcpBridge 文本拼接、子代理输出抑制（[#6660](https://github.com/QwenLM/qwen-code/issues/6660)、[#6602](https://github.com/QwenLM/qwen-code/issues/6602)、[#6696](https://github.com/QwenLM/qwen-code/pull/6696)）

### 4. **SDK / 代理能力扩展**
- TypeScript 与 Python SDK 支持 `ask_user_question`（[#6647](https://github.com/QwenLM/qwen-code/issues/6647)）、SDK 进程优雅退出（[#6636](https://github.com/QwenLM/qwen-code/issues/6636)）、会话创建回调（[#6703](https://github.com/QwenLM/qwen-code/pull/6703)）

### 5. **新模型与代理能力**
- `/goal` 条件长度限制放宽（[#6663](https://github.com/QwenLM/qwen-code/issues/6663)）、`/model --compaction`（[#6019](https://github.com/QwenLM/qwen-code/pull/6019)）、Anthropic 代理缓存命中率优化（[#6642](https://github.com/QwenLM/qwen-code/issues/6642)）

---

## 😣 开发者关注点

### 稳定性痛点
- **流式超时**: 120 秒无活动触发 API 错误（#5975），自 v0.19.3 起高频出现
- **内存溢出（OOM）**: `glob` 工具在扫描大目录时未先做输出截断（#6614，已被 PR #6682 部分缓解）
- **子代理循环**: subagent 工具调用偶发死循环（#6543）
- **协议泄漏**: `qwen3.7-max` 在主回合输出 `<analysis>/<summary>` 标签导致后续动作失败（#6595、#6683）

### 体验痛点
- **macOS 粘贴图片失效**: standalone 安装未打包 `@teddyzhu/clipboard` 原生模块（#6590）
- **UI 中英文混杂**: Shift+Tab 切换审批模式时提示语言不一致（#6582）
- **日志文件缺失**: `--debug` 标志显示路径但未真正创建（#6600）

### 平台集成
- **MCP OAuth 缺位**: HTTP 传输返回 401 时未自动触发 OAuth 流程（#6639）
- **Docker 沙箱测试网络**: `127.0.0.1` 在容器内解析到自身回环（#6692）

### 工程化诉求
- **打包体积**: 当前 80.58 MB 已超 80MB 上限，调整至 96MB（#6691）
- **CI 多次失败**: v0.19.9 在一天内出现 3 次发布失败，社区希望引入更稳的发布前置校验
- **安全防护**: 建议为 GitHub 评论增加可疑附件守卫（#6597）

---

> 📊 **今日总览**: 50 个 PR 更新、34 个 Issue 更新、3 个发布相关 Issue、多工作区架构实质性推进。下次日报将关注 v0.19.9 重发布及 #6378 RFC 的进一步讨论。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-07-11**
**数据来源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)**

> **说明**：本期日报数据来自 `Hmbown/CodeWhale` 仓库（也即 DeepSeek TUI 项目主仓库），当前主版本为 **v0.8.68** 收尾阶段。

---

## 1. 今日速览

- **v0.8.68 冲刺收尾**：今日共有 7 个 PR 关闭，多个 TUI release-blocker 修复被合入（#4332、#4337、#4336），核心工作流架构（Fleet/Workflow/Lane/Runtime）已基本落地。
- **TUI 状态路由"失真"问题引发关注**：Issue #4333 标记为 release-blocker，配置面板误将空 provider 头部识别为已配置；PR #4332 已给出"修复批次"应对。
- **依赖与安全治理并进**：6 个 Dependabot PR + 1 个新增 RustSec 安全审计 CI（#4272）+ 1 个 lopdf/crossbeam-epoch 安全升级（#4328），安全基线显著加强。

---

## 2. 版本发布

**过去 24 小时内无新 Release**。当前正在推进 **v0.8.68** 收尾，相关 PR 已陆续合入，但 tag 尚未发布。版本聚焦：
- TUI 默认展示从"密集模式"改为"紧凑模式"（#4095 已 CLOSED）
- 工作流（Workflow）模型就绪度（#4038 已 CLOSED）
- 修复 TUI 状态/路由失真的多个 release-blocker

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 重要性 |
|---|-------|------|------|--------|
| [\#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 execution board (canonical agent packet)** | 🟣 CLOSED | **60** | 作为 v0.8.68 的"单一入口"调度包，所有 lane 标签可查询，是当前里程碑的指挥中枢 |
| [\#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | **Codewhale 不遵守 constitution** | 🟢 OPEN | **33** | 用户反馈 agent 反复写临时脚本而不复用已有代码，反映 constitution 约束力不足 |
| [\#4175](https://github.com/Hmbown/CodeWhale/issues/4175) | **v0.8.68 架构：Fleet / Workflow / Lane / Runtime 产品模型** | 🟢 OPEN | 9 | 整个 v0.8.68 的术语与职责划分"宪法"，防止概念坍塌 |
| [\#4178](https://github.com/Hmbown/CodeWhale/issues/4178) | **v0.8.68：Stopship workflow 作为 fleet-backed lane** | 🟢 OPEN | 10 | 对 #4090/#4093/#4094 的端到端 dogfood，作为参考实现 |
| [\#4095](https://github.com/Hmbown/CodeWhale/issues/4095) | **TUI 默认展示太繁杂，紧凑模式应成为标准** | 🟣 CLOSED | 9 | UX 类高呼声 bug，已归入 0.8.68 修复 |
| [\#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | **侧边栏会话面板（自动恢复 + 历史浏览）** | 🟢 OPEN | 5 | 用户提出替代 `Ctrl+R` 的持久化面板，提升多会话切换体验 |
| [\#2984](https://github.com/Hmbown/CodeWhale/issues/2984) | **OpenAI Codex/ChatGPT OAuth 路由验证与用量显示** | 🟢 OPEN | 4 | 推动 OAuth 路由从 preview 转 supported，影响多模型用户体验 |
| [\#4329](https://github.com/Hmbown/CodeWhale/issues/4329) | **Anthropic API 错误：tool_use 缺少对应 tool_result** | 🟢 OPEN | 2 | 实际报错暴露 tool 调用顺序协议漏洞，需后端补齐 |
| [\#4333](https://github.com/Hmbown/CodeWhale/issues/4333) | **配置面板把空 provider 头部当作已配置** | 🟢 OPEN 🚫release-blocker | 0 | 直接影响模型可用性，是 0.8.68 阻塞项 |
| [\#4077](https://github.com/Hmbown/CodeWhale/issues/4077) | **web_search 重构：拆 provider 子模块** | 🟢 OPEN | 1 | 2881 行 god file 待拆，关心长期可维护性 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 说明 |
|---|----|------|
| [\#4337](https://github.com/Hmbown/CodeWhale/pull/4337) 🟣 | **fix(release): v0.8.68 TUI 与 Android QA 集成** | 落地 cancelled-shell transcript 状态 + PTY 回归覆盖；Termux 镜像替换前先做鉴权验证 |
| [\#4336](https://github.com/Hmbown/CodeWhale/pull/4336) 🟣 | **feat(workflow): 直接派发 durable lanes（绕过根模型）** | `codewhale workflow run` 由 host-owned Workflow 工具直派，保留 profile/provider/MCP/审批链路 |
| [\#4332](https://github.com/Hmbown/CodeWhale/pull/4332) 🟣 | **fix: v0.8.68 TUI 状态与路由"说真话"** | 关键 release-blocker 修复批次：仅当 provider 配置"有意义"才标为已配置 |
| [\#4331](https://github.com/Hmbown/CodeWhale/pull/4331) 🟣 | **docs(release): 对齐 v0.8.68 模式 FAQ 与 workflow 命令** | README 中不存在的 `workflow status/logs` 被替换为真实的 `lane status/logs` |
| [\#3969](https://github.com/Hmbown/CodeWhale/pull/3969) 🟣 | **per-sub-agent provider routing** | 暂挂 v0.8.68 fleet lane，需 rebase 到 #4137 的 profile 字段路径 |
| [\#4328](https://github.com/Hmbown/CodeWhale/pull/4328) 🟣 | **升级依赖修复 cargo-audit 漏洞** | crossbeam-epoch 0.9.18→0.9.20（RUSTSEC-2026-0204）；pdf-extract/lopdf 升级（修复栈溢出） |
| [\#4330](https://github.com/Hmbown/CodeWhale/pull/4330) 🟣 | **更新 cargo-deny 忽略清单** | 移除已修的 lopdf 漏洞，新增 derivative/fxhash（transitive via starlark）标记 |
| [\#4272](https://github.com/Hmbown/CodeWhale/pull/4272) 🟣 | **CI: 新增 RustSec 安全审计与 cargo-deny** | 为 `Cargo.lock` 加 cargo-audit（非阻塞）+ cargo-deny（advisories/bans/licenses/sources） |
| [\#4342](https://github.com/Hmbown/CodeWhale/pull/4342) 🟢 | **chore(deps): rmcp 1.8.0 → 2.2.0** | MCP Rust SDK 主版本升级，引入新功能/接口变更 |
| [\#4338](https://github.com/Hmbown/CodeWhale/pull/4338) 🟢 | **chore(deps): actions/stale 10.3.0 → 10.4.0** | 修复 stale action bug，提升 issue 自动清理稳定性 |

---

## 5. 功能需求趋势

从所有 Issue 的标签与描述中可提炼出以下社区方向：

1. **🏗️ 架构范式迁移：Fleet/Workflow/Lane/Runtime**
   出现于 #4175、#4178、#4038、#4110，标志项目从"单 agent TUI"向"多角色编排"演进，是 v0.8.68 的核心叙事。

2. **🎨 TUI UX 收敛**
   紧凑模式默认化（#4095）、侧边栏会话面板（#2934）、避免低层活动刷屏——开发者要求"少即是多"。

3. **🧠 长期记忆 / 项目作用域**
   #3976 提出在外部记忆后端落地前，先做 project-scoped recall 种子，让 agent 记住项目级决策与约定。

4. **🔌 多模型路由与 OAuth 化**
   OpenAI Codex/ChatGPT OAuth（#2984）、Anthropic 协议错误（#4329）、自定义 provider 身份保留（#4334）——多模型支持是持续硬需求。

5. **🔒 权限/执行模型分层**
   #3211 提出 Plan/Agent/YOLO 模式过载，需要一等公民的"权限 profile" + 非阻塞执行默认值。

6. **🧹 大文件重构与可维护性**
   #4077（2881 行 web_search 拆分）、#3983（Work 状态在父轮显式可见）反映项目进入"成熟期重构"。

---

## 6. 开发者关注点与痛点

| 痛点 | 体现 | 解决方向 |
|------|------|----------|
| **Agent 不遵守 constitution** | #4032（33 评论）：反复写临时脚本而非复用已有代码 | 需更强 prompt/约束或宪法校验机制 |
| **TUI 信息过载** | #4095："默认太繁杂、变化过快、看起来很乱" | 紧凑模式默认化（已 CLOSED 推进中） |
| **会话切换摩擦大** | #2934：只能 `Ctrl+R` 或命令行续接 | 侧边栏持久化面板 |
| **Provider 路由"幻觉"** | #4333、#4334：空头部被识别为已配置 / 自定义 provider 失忆 | PR #4332 已给出修复批次 |
| **Anthropic tool 协议漏洞** | #4329：tool_use 缺少 tool_result → HTTP 400 | 后端需补 tool 调用顺序校验 |
| **依赖与安全债务** | lopdf/crossbeam-epoch 漏洞 → CI 加 cargo-audit + cargo-deny | #4272 + #4328 已建立防线 |
| **架构术语混乱** | #4175：Fleet/Workflow/Lane/Runtime 易混 | 通过"宪法" issue 与 lane 标签体系规范化 |

---

### 📌 一句话总结

v0.8.68 进入"修 bug + 立架构 + 补安全"的收尾期；社区对**多 agent 编排、TUI 简洁度、长期记忆、多模型路由**四个方向呼声最高，而 **release-blocker 级 TUI 路由修复**与**安全审计 CI** 是今天最具实操意义的两条进展。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*