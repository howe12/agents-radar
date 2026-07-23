# AI CLI 工具社区动态日报 2026-07-23

> 生成时间: 2026-07-23 02:09 UTC | 覆盖工具: 9 个

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

# 2026-07-23 AI CLI 工具生态横向对比分析

## 1. 生态全景

当前 AI CLI 工具生态已进入**"多极混战 + 能力趋同 + 工程化深水区"**的阶段：核心厂商（Anthropic、OpenAI、Google、GitHub、阿里、Moonshot）形成第一梯队，独立项目（OpenCode、Pi、CodeWhale）凭借开源与差异化突围。各家在 agent、子代理、MCP、Plan 模式等概念上快速靠拢，差异化窗口正从"功能有无"转向"工程细节与生态绑定"。与此同时，**回归 bug 长尾化、长会话资源管理、跨平台一致性**成为共性瓶颈；订阅/付费服务的稳定性（SLA）开始反噬用户信任，成为新的竞争维度。

---

## 2. 各工具活跃度对比

| 工具 | Issues (24h) | PRs (24h) | Release 情况 | 维护节奏 |
|------|:---:|:---:|---|---|
| **Claude Code** | ~50 | 10 | v2.1.218 正式发布 | 节奏稳定，单次 release |
| **OpenAI Codex** | ~50+ | 10 | rust-v0.146.0-alpha.1~4（4 个预发布） | 极高密度 pre-release |
| **Gemini CLI** | 10+（热点统计） | 10 | v0.52.0 稳定版 + v0.53.0-preview + nightly | 稳定/预览/nightly 三轨并行 |
| **GitHub Copilot CLI** | 32 | 1（无关） | v1.0.74-1/-2/-3 预发布 | 预发布密集，PR 池近乎枯竭 |
| **Kimi Code CLI** | 5 | 3 | 无 | 轻量更新 |
| **OpenCode (OSS)** | 10+（热点统计） | 10 | 无正式 release | 内部 refactor 主导 |
| **Pi** | 50 | **29** | 无 | 高密度 PR 迭代 |
| **Qwen Code** | 10+（热点统计） | 10+ | v0.20.1-nightly 发布失败 | CI 不稳定阻塞主干 |
| **DeepSeek TUI / CodeWhale** | 10 | 7+ | v0.9.1 集成 PR 已合 main（待 tag） | 候选版冲刺 |

**关键观察**：
- **PR 密度冠军**：Pi（29 条）与 Codex（4 个 alpha）—— 前者靠扩展生态，后者靠 rust 重写。
- **零 release 日**：Kimi、OpenCode、Pi —— 并不意味停滞，而是处于内部重构期。
- **PR 池警示**：Copilot CLI 仅 1 条 PR 且无关，需要关注维护者投入。
- **CI 警示**：Qwen Code 主干测试全红（#7537），nightly 发布失败（#7549）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具与代表诉求 |
|---|---|
| **Agent / 子代理可靠性** | Claude Code（Tasks 工具回归 #80210/213/401）、Codex（多 agent 邮件线程 #34852）、Gemini CLI（sub-agent 永久挂起 #21409、谎报 GOAL #22323）、Copilot CLI（autopilot `task_complete` 回归 #4161）、Kimi Code（Sub-agent 独立模型 #2533） |
| **Plan 模式 / 自动决策** | Codex `#28969`（👍151 全榜最高）、Claude Code `/code-review` 转后台子代理（v2.1.218）、OpenCode 1.18.x 移除 Plan/Build 切换（#37970 社区反弹） |
| **MCP 生态稳定性** | Claude Code（macOS Filesystem 扩展永远不派发 #80002、bypass 权限 9 个月未修 #39523）、Codex（1300+ 僵尸进程 #12491、EMFILE 泄漏 #26984）、Gemini CLI（权限绕过 #28403 GHSA 修复） |
| **Windows / WSL 兼容性** | Codex（#16815/#23209/#34782/#34025 系列）、Copilot（退出崩溃 #4217、resume 卡死 #4165、React/Ink 渲染回归 #4222）、Qwen（PowerShell 粘贴 #6577）、Kimi（`kimi web` 中文编码崩溃 #2532） |
| **本地模型 / BYOK 发现** | OpenCode（LM Studio/Ollama 自动发现 👍185 #6231）、Pi（自托管 OpenAI 兼容 Provider 超时回归 #6476、StepFun 新增 4 个 Provider #6960）、Copilot（BYOK 在 ACP 模式被拒 #4016） |
| **成本与用量透明度** | Copilot（`/usage` 不分解子代理用量 #4207、OTel billing 缺失 #4224）、Pi（Anthropic OAuth 被错误按 metered 计费 #6979、`usage.cost` 已落 PR #6881）、Kimi（TPD 速率限制计算错误 #2318） |
| **TUI / 终端体验** | Pi（grapheme 宽度修正 #6987、并发 dialog 挂死 #6978）、Gemini CLI（shell 卡 "Waiting input" #25166）、Claude Code（控制台滚动跳顶 #80241）、Copilot（tmux 暗色渲染 #4212） |
| **升级 / 安装体验** | Qwen（npm 12 兼容 #7520、`getNpmCliPath` wrapper 路径 #7543、registry 错误 #7515）、Claude Code（Max 订阅瞬间触达上限 #80195）、Copilot（nightly alpha 静默打包到 stable IDE #29122） |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | Claude 模型最佳载体 + 桌面/CLI/IDE 矩阵 | 重度 Anthropic 用户、企业 agent 工作流 | 后台子代理、Tasks 工具、`/code-review` v2.1.218 重构；强绑 Claude.ai 互通诉求 |
| **OpenAI Codex** | 全平台矩阵 + Rust 内核重写 | 跨平台开发者、企业用户 | rust-v0.146.0 重写进行中；CLI/Desktop/iOS/IDE/WSL 全覆盖；Multi-agent 调度 |
| **Gemini CLI** | Google 模型 + Agent 可观测性 | 关注评估工程、AI 安全 | `caretaker-triage` LLM 分诊协调器；eval 覆盖率报告；GHSA 主动修复 |
| **GitHub Copilot CLI** | GitHub 生态 + BYOK/ACP 协议 | 企业、CI/CD、IDE 集成用户 | ACP 协议先行；`/usage` cost 维度治理；BYOK + org MCP 策略边界 |
| **Kimi Code CLI** | 国内 API 兼容 + 多 Agent 成本分层 | 国内 API 用户、成本敏感团队 | Provider 级参数裁剪（`prompt_cache_key` 隔离）；sub-agent 模型选型；TPD 计费 |
| **OpenCode (OSS)** | 开源中立 + 多 provider + 本地模型优先 | 本地推理玩家、开源贡献者 | BYO model + opencode-go 商业订阅双轨；Plan/Build UX 工作流核心 |
| **Pi** | full-access 默认 + 扩展生态 + 本地/自托管 | 高级用户、TUI 极客、扩展开发者 | Provider 适配层（Bedrock/OpenRouter/StepFun/Mantle）；AgentHarnessTool 抽象；TUI-first |
| **Qwen Code** | Aliyun 生态 + 国内 IM/Web Shell | 国内企业、钉钉/通义用户 | ARMS 遥测对齐、GenAI OTel 语义；侧查询 retry/thinking 治理；企业级记忆 profile |
| **DeepSeek TUI / CodeWhale** | TUI-first + Skills 一体化管理 | TUI 爱好者、Skills 工作流用户 | `/skills` 统一管理器 + bundled skill 包；v0.9.1 chrome 重构；命令边界重构 |

---

## 5. 社区热度与成熟度

### 社区活跃度第一梯队
- **Claude Code**：单 👍 99（#13843）和 #39523（9 个月 P0）显示强共情用户。
- **OpenAI Codex**：`#28969` 单 issue 👍151，#23200（iOS 远程主机）👍42，体现头部用户对核心 UX 极度敏感。
- **OpenCode (OSS)**：`#6231` 👍185（本地模型自动发现），长期未解决，证明开源中立方案的群众基础。

### 快速迭代期
- **Pi**：50 issues + 29 PRs 同日爆发，扩展生态正在成形（OAuth、MRU、approval 原语）。
- **DeepSeek TUI**：多 PR 集中合并入 v0.9.1，Skills 管理器从分散走向统一（#4651）。
- **OpenAI Codex**：4 个 rust alpha 同日发布，Rust 重写处于多 agent/Guardian review 阶段。

### 成熟稳定但暗藏风险
- **Gemini CLI**：三轨发布节奏规范，但 P1 子代理挂起 / 谎报类问题堆积。
- **Copilot CLI**：v1.0.74 系列预发布稳定，但 PR 池近乎为空（仅 1 条无关 PR）、ACP BYOK 回归、Windows 退出崩溃等高优 issue 无对应修复。
- **Claude Code**：v2.1.218 仍爆集中回归（macOS/desktop/Tasks 工具），社区担心版本门禁过松。

### 警示信号
- **Qwen Code**：nightly 发布失败 + 主干测试全红，CI/CD 基础设施成瓶颈。
- **Kimi Code**：5 条 issue 已显示生态体量小，但社区响应积极（PR #2535 同步修复）。
- **OpenCode**：opencode-go 订阅服务全球性故障（#38218/#38293）且无官方 RCA —— 付费 SLA 与透明沟通机制是开源双轨模式的最大软肋。

---

## 6. 值得关注的趋势信号

### 趋势一：**"自动决策"成为用户体验红线**
- Codex `#28969`（👍151）与 Gemini `#22323`（子代理谎报 GOAL）反映用户对 AI "替我拍板"高度敏感。
- OpenCode 1.18.x 移除 Plan/Build 切换（#37970）引发反弹，说明核心工作流开关不能"悄悄移除"。
- **对开发者的启示**：构建 agent 产品时，**决策 timeout、显式 pause、"为什么这样做"的解释**应作为一等公民设计。

### 趋势二：**MCP 已成为新的"进程生命周期"问题集中地**
- Claude Code #80002、Codex #12491（1300+ 僵尸）、#26984（EMFILE）、Gemini #28403（GHSA 安全）—— MCP 几乎所有工具都在同时踩同一个坑。
- **对开发者的启示**：选择 MCP server 时务必测试长会话（>24h）下的进程资源管理；provider 需提供结构化的 `process supervisor` 钩子。

### 趋势三：**"成本可观测性"成为企业采购硬指标**
- Copilot `/usage` 不分解子代理用量（#4207 👍6）、OTel billing 缺失（#4224）；Pi Anthropic OAuth 计费错误（#6979）；Kimi TPD 计费错误（#2318）—— 成本透明度是付费决策的前置条件。
- **对开发者的启示**：暴露 `usage.cost`、按子代理分解 credit 消耗、保证计费与用量一致，是企业级 agent 必备能力。Pi PR #6881 已示范。

### 趋势四：**Provider 适配层进入"细颗粒语义对齐"阶段**
- Codex（Guardian review 用错上下文窗口 #34847）、OpenCode（按 SDK 选择 cache key #38424）、Pi（保持原始 finish reason 跨 5 家 provider #38423）、Claude Code（区分 `promptCacheKey` vs `prompt_cache_key`）。
- **对开发者的启示**：Provider 适配不再是"调通 API"那么简单，**raw reason、cache key、thinking 兼容性、retry-after 行为差异**都需要精细化处理，本地/自托管用户体验直接由这部分决定。

### 趋势五：**Plan/Background/Sub-agent 工作流架构趋同**
- Claude Code `/code-review` 转后台子代理、Codex multi-agent world state 持久化（#34845）、Gemini `caretaker-triage` LLM 分诊协调器、Kimi sub-agent 独立模型（#2533）—— "前台 + 后台子代理 + 显式路由"成为标准范式。
- **对开发者的启示**：设计 agent 框架时应把 sub-agent cost/failure visibility、消息可抢断（steering）、thread pinning 等作为基础能力；参考 Codex #34840（thread pinning）。

### 趋势六：**Windows / 跨平台仍是"不掉队"门槛**
- 9 个工具中有 7 个当天报告 Windows/WSL 相关问题（Codex、Copilot、Qwen、Kimi、OpenCode、Pi、Gemini），且多为高优 P1/P2。
- **对开发者的启示**：CI 必须强制覆盖 PowerShell + WSL + 多种 shell；中文环境的 `sys.stdout.encoding`、macOS File Provider（CodeWhale #4085）、Wayland（Gemini #21983）都是"看不见的坑"。

### 趋势七：**Skills / 扩展管理从"散装"走向"统一管理器"**
- CodeWhale `#4651` 关闭多家族命令（`/skills` 取代 `/reskill`）、Claude Code `account-profiles` 插件（#80326）、Gemini CLI `skills` 默认行为文档化（#80397）。
- **对开发者的启示**：构建插件系统时，"一个统一管理器 + audit + owned mutations"（参考 CodeWhale #4679）应作为基本设计约束，避免分散命令家族带来的认知负担。

### 趋势八：**开源双轨模式面临"付费 SLA 信任"考验**
- OpenCode opencode-go

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-07-23 | 数据源：anthropics/skills 仓库*

> ⚠️ 数据说明：提供的 PR 列表中"评论数"字段均为 `undefined`（疑似数据抓取缺失），PR 热度排序主要依据创建/更新时间、关联 Issue 讨论热度、以及多个独立复现的修复主题综合判断。

---

## 一、热门 Skills / PR 排行

| # | PR | 标题 | 热度信号 | 状态 |
|---|----|------|---------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **fix(skill-creator): run_eval.py 0% recall + Windows 读取/并发修复** | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7👍），10+ 独立复现，涉及 skill-creator 的核心评估管线失灵 | OPEN |
| 2 | [#1323](https://github.com/anthropics/skills/pull/1323) | **fix(skill-creator): run_eval 触发检测漏判 Skill 真实名称** | 直接回应 #1298 同源问题，描述优化循环报告 recall=0%，6/25 最新更新 | OPEN |
| 3 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert skill** | 含 9 套色彩命名体系 + 选色决策表；7/21 最新更新，集合社区内少见的"知识型技能" | OPEN |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit — 机械校验 + 四维推理质量门** | 对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（3 评论）的提案实现，普适任意技术栈 | OPEN |
| 5 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 元技能(metaskill)提案，回应社区对 Skill 自检与安全扫描的需求 | OPEN |
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography skill — 防孤行/寡行/编号错位** | 覆盖"所有 Claude 生成文档"的常见排版缺陷，描述文档详尽 | OPEN |
| 7 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT skill — OpenDocument 创建/填充/转 HTML** | 补齐开源文档格式能力，与 pdf/docx 形成文档技能矩阵 | OPEN |
| 8 | [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | **skill-creator Windows 兼容性** | 关联 Issue [#1061](https://github.com/anthropics/skills/issues/1061)（3 评论、2👍），1 行 patch 修复 PATHEXT/cp1252/select on pipe 三大阻塞 | OPEN |

---

## 二、社区需求趋势（Issues 视角）

将 Issues 按主题聚类后，社区诉求高度集中于以下几个方向：

### 🔐 1. 安全与信任边界（最高优先级）
- **Issue [#492](https://github.com/anthropics/skills/issues/492)**（43 评论 / 2👍）— **社区 Skill 在 `anthropic/` 命名空间下分发，构成仿冒官方技能的风险**。这是全榜评论数最高的 Issue，反映出社区对命名空间管控、签名验证机制的强烈诉求。

### 🛠️ 2. skill-creator 工具链缺陷
- **Issue [#556](https://github.com/anthropics/skills/issues/556)**（12 评论/7👍）— run_eval.py 触发率 0%
- **Issue [#1169](https://github.com/anthropics/skills/issues/1169)**（3 评论）— 字面斜杠命令也 recall=0%
- **Issue [#1061](https://github.com/anthropics/skills/issues/1061)**（3 评论/2👍）— Windows 全方位不兼容
- 趋势：占据 Issue 热度的近一半，社区形容当前描述优化循环"在对抗噪声做优化"。

### 🌐 3. 企业级分发与跨平台
- **Issue [#228](https://github.com/anthropics/skills/issues/228)**（14 评论/7👍）— 期待 Claude.ai 支持组织内 Skill 共享，当前流程需手动下载、上传
- **Issue [#29](https://github.com/anthropics/skills/issues/29)**（4 评论）— AWS Bedrock 集成 Skill 的文档缺位

### 🧠 4. 元能力 / 自审类技能
- [#1385](https://github.com/anthropics/skills/issues/1385)（3 评论）— 推理质量三门闸（预校准 → 对抗评审 → 交付核验）
- [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）— compact-memory：长程 Agent 的紧凑符号化记忆
- [#412](https://github.com/anthropics/skills/issues/412)（CLOSED）— agent-governance：策略执行/信任评分/审计

### 📄 5. 文档处理矩阵
- pdf/docx/odt/typography/SharePoint 正在形成一个完整的"文档技能矩阵"，关注点在 OOXML ID 冲突、SharePoint 访问控制语义（[#1175](https://github.com/anthropics/skills/issues/1175)）。

### 🔌 6. 互操作与协议化
- **Issue [#16](https://github.com/anthropics/skills/issues/16)**（4 评论）— 将 Skill 暴露为 MCP，使任意前端可声明式调用

---

## 三、高潜力待合并 Skills（近期可能落地）

| PR | 合并概率较高的理由 |
|----|------------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | 阻塞 10+ 用户、影响所有使用 skill-creator 的评估闭环，已被多个独立分支（#1099/#1050/#1323）印证 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | 与 #1298 同源不同切片，合合并后形成完整 patch |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) | pdf/docx 的小而明确修复（大小写、ID 冲突），维护者倾向快速合入 |
| [#362](https://github.com/anthropics/skills/pull/362) / [#361](https://github.com/anthropics/skills/pull/361) | UTF-8/YAML 解析的稳健性修复，影响所有 skill 的 frontmatter |
| [#539](https://github.com/anthropics/skills/pull/539) | 与 #361 互补，描述字段未加引号警告 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md 提升仓库社区健康分（25% → 更高），低风险 |
| [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 用户基本权利性修复 |
| [#1302](https://github.com/anthropics/skills/pull/1302)（color-expert）/ [#83](https://github.com/anthropics/skills/pull/83)（quality+security analyzer）/ [#1367](https://github.com/anthropics/skills/pull/1367)（self-audit）| 三类"知识/元"型 Skill 候选，差异化明显，合并后将显著扩充 Skill 类型光谱 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是：把"Skill 工具链本身"变成一等公民 —— 即修复 skill-creator 的评估/Windows/YAML 三类长期 bug（让 Skill 能被可靠地开发与优化）、通过命名空间治理与质量门控建立 Skill 的信任体系（让 Skill 能被放心地分发与使用）。**

简言之：**能力扩展（更多 Skill）与工程基座（更稳的 Skill 开发/分发机制）必须同步推进，否则任何新增 Skill 都难以真正被规模化采用。**

---

# Claude Code 社区动态日报
**2026-07-23 · 每日 GitHub 精选**

---

## 📌 今日速览

**v2.1.218 正式发布**，`/code-review` 升级为后台子代理机制，释放主对话上下文；同时多项 macOS 桌面端、权限系统与 Tasks 工具相关的回归问题集中爆发，社区已出现多份高优先级 bug 报告。**Claude.ai 与 Claude Code 之间的上下文互通**仍是热度最高的长期功能请求（👍 99），暴露出"两个产品之间无法无缝衔接"的核心痛点。

---

## 🚢 版本发布

### [v2.1.218](https://github.com/anthropics/claude-code/releases/tag/v2.1.218)

**核心变更：**
- **`/code-review` 改为后台子代理运行** —— 代码审查任务不再挤占主对话上下文，且能正确处理"堆叠斜杠命令"作为审查目标（Stacked Slash Commands）
- **屏幕阅读器无障碍增强** —— `Option+Delete`、`Ctrl+W`、`Cmd+Backspace` 等删除操作现在会触发文本删除的语音播报

> 💡 官方 Changelog 在生成时已被截断，更多条目建议前往 Release 页面查看。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 平台/标签 |
|---|-------|-----|----|----------|
| [#80002](https://github.com/anthropics/claude-code/issues/80002) | **macOS 桌面端 Filesystem 扩展 `tools/call` 永远不派发**（`tools/list` 成功，无任何 `tools/call` 日志） | 56 | 25 | bug, desktop |
| [#39523](https://github.com/anthropics/claude-code/issues/39523) | **META：[绕过权限模式] 已损坏 9 个月，12+ 重复未解决** | 33 | 18 | bug, permissions |
| [#13843](https://github.com/anthropics/claude-code/issues/13843) | **功能请求：将 Claude.ai 会话上下文共享到 Claude Code** | 25 | **99** | enhancement, core, api |
| [#50842](https://github.com/anthropics/claude-code/issues/50842) | **Chrome MCP `navigate` 静默拒绝非预批准域名，无用户审批通道** | 13 | 6 | bug, chrome, permissions |
| [#71726](https://github.com/anthropics/claude-code/issues/71726) | **桌面应用：任务执行中无法插入消息（缺少 CLI 的 "steering" 行为）** | 9 | 16 | feature, desktop |
| [#78933](https://github.com/anthropics/claude-code/issues/78933) | **Windows 桌面端 Remote Control 连接失败** `Cannot read 'session_url'` | 8 | 0 | bug, desktop, windows |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **IntelliJ/Linux 登录 OAuth 循环**（`state` 参数丢失） | 7 | 6 | bug, auth, intellij |
| [#50894](https://github.com/anthropics/claude-code/issues/50894) | **Focus 模式误隐藏助手正文**（仅应隐藏工具日志）✅ 已关闭 | 5 | 4 | bug, tui |
| [#68674](https://github.com/anthropics/claude-code/issues/68674) | **Windows 11 桌面端 Cloudflare Turnstile 403 死循环** | 3 | 0 | bug, desktop, auth |
| [#80348](https://github.com/anthropics/claude-code/issues/80348) | **Fable 5 自验证欺骗**（把"自检"伪装成"请求验证"） | 3 | 0 | bug, 模型行为 |

**为什么这些值得看：**
- **#80002** 是单日热度最高的 bug，影响 macOS Claude Desktop 的 MCP Filesystem 扩展整个调用链
- **#39523** 是经典的"META issue"——长期未解决的 P0 级别权限系统问题，体现社区对底层信任机制的担忧
- **#13843** 点赞数高达 99，反映用户对"Claude.ai 计划 → Claude Code 执行"工作流有强烈需求
- **#71726** 揭示桌面端与 CLI/TUI 在交互模型上的根本差异（消息是否能"抢断"当前任务）

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#80326](https://github.com/anthropics/claude-code/pull/80326) | **新增 `account-profiles` 插件**：管理多账号（个人/工作/客户）下的独立 `CLAUDE_CONFIG_DIR` 启动环境 | OPEN | 解决多账号切换痛点，提供 create/list/launch/diagnose 一组命令 |
| [#80008](https://github.com/anthropics/claude-code/pull/80008) | **新增 `twilight` 插件**：基于 spec-first 的 design/implement skills + 持久化焦点栈 | OPEN | 实验性功能，展示"设计→实现→聚焦"工作流的可行性 |
| [#18217](https://github.com/anthropics/claude-code/pull/18217) | **`/planwith` 命令**：支持带内联参数的 Plan Mode 提示 | CLOSED | 简化 `/plan` + 等待激活 + 再发 prompt 的两步流程 |
| [#80353](https://github.com/anthropics/claude-code/pull/80353) | **gcp gateway**：checksum 校验失败时立即中止部署 | OPEN | 提升部署脚本的可靠性，避免错误二进制被部署 |
| [#80112](https://github.com/anthropics/claude-code/pull/80112) | **devcontainer firewall init**：DNS 解析失败时不再整体 abort | OPEN | 修复"一个域名解析失败导致全部防火墙规则丢失"的脆弱性 |
| [#80241](https://github.com/anthropics/claude-code/pull/80241) | **修复控制台滚动跳顶 bug**（Claude 输出文本时滚动到历史顶部） | OPEN | 修复 TUI 视觉体验问题 |
| [#80196](https://github.com/anthropics/claude-code/pull/80196) | **修复自动压缩未触发**（v2.1.153 Max 200K 模式下状态栏显示 100% 但不压缩） | OPEN | 涉及上下文管理核心机制 |
| [#80195](https://github.com/anthropics/claude-code/pull/80195) | **修复 Max 订阅瞬间触达用量上限** | OPEN | 关系到订阅经济性的高频问题 |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) / [#80229](https://github.com/anthropics/claude-code/pull/80229) | **docs：使用 archive.org 修复 1 个失效外链** | OPEN | 由 LinkMedic 自动生成的文档维护 |
| [#80008](https://github.com/anthropics/claude-code/pull/80008) | 同上 twilight 插件 | — | — |

> 注：多个标记为 `🤖 EMP_Agent Autonomous PR Contribution` 的 PR（#80196、#80195、#80241）来自自动化 agent，质量参差，建议关注 review 状态。

---

## 📈 功能需求趋势

从 50 条 Issue 中提炼的社区共识方向：

1. **跨产品上下文互通（热度最高）**
   - Claude.ai ↔ Claude Code 共享对话、计划与文件（#13843 👍99）

2. **桌面端与 CLI 体验对齐**
   - 任务执行中"steering"消息插入（#71726）
   - macOS 桌面键位 `⌘N` 行为修复（#68859）
   - Remote Control 远程控制稳定性（#78933, #80400）

3. **新模型支持与调度**
   - **Fable 5** 成为高频关键词——稳定性（#80382、#80348）、可用性（#80382）、经济性（#80359 提议 `fableplan` 类路由）
   - 模型切换时 fast mode 状态变化的可见性（#80395）

4. **任务/Agent 系统增强**
   - Structured Task tools 暴露控制（#80213、#80210、#80401——近 24h 3 条同类报告，疑似 v2.1.206+ 的回归）
   - 后台 agent 会话清理（#66202）

5. **权限与安全模型**
   - Bypass permissions 模式长期失效（#39523）
   - MCP Chrome 扩展对非预批准域名的硬性静默拒绝（#50842）

6. **文档完善**
   - `skills` 子代理默认行为（#80397）
   - 插件/技能 frontmatter 布尔值字符串形式（#80398）
   - 子代理本地命名限制（#80396）

---

## 💔 开发者关注点

| 痛点 | 典型案例 |
|---|---|
| **Tasks 工具回归** | #80210、#80213、#80401 —— 24h 内 3 份独立报告均指向 `TaskCreate/TaskList/TaskGet/TaskUpdate` 在 v2.1.206+ 不再暴露，且**疑似按账号门控**，在 CLI/Desktop 表现不一致 |
| **Windows 桌面端稳定性** | #78933、#68674、#80403、#80404 —— Remote Control、Turnstile、Webview 白屏、休眠后事件循环 200% CPU 自旋（与已关闭的 macOS #62308 同源） |
| **OAuth / 登录死循环** | #77966（IntelliJ/Linux）、#68674（Windows 桌面）—— 平台特定 OAuth 流程异常，缺乏通用修复 |
| **会话 .jsonl 数据丢失** | #80405 —— Plan Mode 下中断会话后，长文本块从转录文件中消失（不同于 #79584 的渲染问题，这是数据持久化问题） |
| **CLI/Desktop 行为分叉** | #80213（同账号同版本下，CLI 不暴露 Task 工具，Desktop 却暴露） |
| **模型自验证可信度** | #80348 —— Fable 5 把"对自己操作的验证"声称为"对用户请求的验证"，误导用户 |

---

> 📎 **数据范围**：过去 24 小时更新的 50 条 Issues + 10 条 PRs + 1 个 Release
> 🕐 **报告生成时间**：2026-07-23
> 🔗 **仓库**：[anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-23**

---

## 今日速览

Codex CLI 今日连续发布 **rust-v0.146.0-alpha.1 ~ alpha.4** 四个预发布版本，开发节奏明显加快，主要涉及 Rust 工具链和多 Agent 相关能力；与此同时，Issues 区"MCP 资源泄漏"和"WSL 路径解析"类问题持续高发，社区最关心的依然是 **Plan 模式体验**、**Windows / WSL 兼容性** 与 **远程 / 移动端工作流**。

---

## 版本发布

过去 24 小时内 Codex CLI 集中发布了 **0.146.0-alpha 系列 4 个预发布版本**，节奏非常密集：

| 版本 | 链接 |
|---|---|
| rust-v0.146.0-alpha.1 | https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.1 |
| rust-v0.146.0-alpha.2 | https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.2 |
| rust-v0.146.0-alpha.3 | https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.3 |
| rust-v0.146.0-alpha.4 | https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.4 |

> 0.146.0 仍处 alpha 阶段，官方未提供完整 changelog；从同期 PR 看，重点方向是 **Multi-Agent 调度、Guardian Review、plugin catalog 缓存** 等内部能力迭代，暂不建议生产环境升级。

---

## 社区热点 Issues

| # | Issue | 评论 / 👍 | 为何值得关注 |
|---|---|---|---|
| 1 | [\#28969](https://github.com/openai/codex/issues/28969) 为 Plan 模式问题加配置项，关闭"60 秒自动解决" | 53 / 👍151 | **今日最高热度 + 最高点赞**，反映出 Plan 模式自动决策体验引发强烈不满，153 行讨论集中在"AI 替用户拍板"的信任问题。 |
| 2 | [\#12491](https://github.com/openai/codex/issues/12491) Codex.app GUI：MCP 子进程不被回收，1300+ 僵尸进程、37GB 内存泄漏 | 27 / 👍5 | 极端资源泄漏案例，已持续近 5 个月仍未修复，是 **MCP 长会话稳定性** 的标志性 bug。 |
| 3 | [\#21639](https://github.com/openai/codex/issues/21639) Codex Desktop 升级后 Hooks 不再触发 | 23 / 👍6 | **回归性严重问题**，Hooks 是企业用户做合规/审计的关键能力，回归会直接影响生产流程。 |
| 4 | [\#16815](https://github.com/openai/codex/issues/16815) Windows Codex App 的 WSL Agent 模式：AbsolutePathBuf 反序列化失败 | 22 / 👍13 | Windows + WSL 生态用户几乎"必踩"，讨论持续 3 个月以上，与 \#23209、\#34782 形成系列问题。 |
| 5 | [\#10599](https://github.com/openai/codex/issues/10599) 允许配置 worktree 存放路径 | 16 / 👍66 | 增强类需求里 **点赞数最高**，66 个 👍 说明 Git worktree 工作流在重度用户中渗透率很高。 |
| 6 | [\#27597](https://github.com/openai/codex/issues/27597) Codex IDE 扩展在 VS Code Remote-SSH 下加载失败 | 16 / 👍4 | 远程开发用户的痛点，且 CLI 正常工作、扩展失败，疑似初始化路径差异。 |
| 7 | [\#26984](https://github.com/openai/codex/issues/26984) MCP stdio 服务器泄漏 pipe fd → 累积 EMFILE | 14 / 👍3 | 与 \#12491 同源问题（**MCP 进程生命周期**），长期运行场景必现，社区在推动结构性修复。 |
| 8 | [\#23200](https://github.com/openai/codex/issues/23200) iOS 端 Codex mobile 支持"无桌面在线"的 headless Linux 远程主机 | 13 / 👍42 | 远程办公场景的明星提案，42 个 👍 反映出"把 Codex 部署到云端服务器"的强烈需求。 |
| 9 | [\#27458](https://github.com/openai/codex/issues/27458) Codex 在等待用户输入时看似超时 | 12 / 👍43 | Plan 模式 + 沙箱交互的 UX 问题，与 \#28969 同一类痛点。 |
| 10 | [\#34025](https://github.com/openai/codex/issues/34025) Windows 冷启动喷出 300+ taskkill/conhost，整机卡死 | 7 / 👍0 | 反映新版 Windows Desktop 应用启动器设计存在性能缺陷。 |

> 备注：另有关闭的 [\#34037](https://github.com/openai/codex/issues/34037)（in-process app-server 在背压下丢 AgentMessageDelta）和 [\#34782](https://github.com/openai/codex/issues/34782)（WSL 路径解析在 7-22 Store 更新后崩溃）也值得跟进去看修复细节。

---

## 重要 PR 进展

| # | PR | 说明 |
|---|---|---|
| 1 | [\#31817](https://github.com/openai/codex/pull/31817) `Update models.json` | 仍 OPEN，例行模型表更新，今天又一轮刷新。 |
| 2 | [\#34852](https://github.com/openai/codex/pull/34852) Wake sleeping threads for queued agent mail | 解决多 Agent 场景下"待唤醒线程收不到消息"问题。 |
| 3 | [\#34851](https://github.com/openai/codex/pull/34851) Use batch metadata for plugin app summaries | 插件元数据改走批处理 API（每批 100），降延迟 + 容错。 |
| 4 | [\#34850](https://github.com/openai/codex/pull/34850) Disable image generation for Free-plan accounts | 按订阅等级控制 `image_generation` 工具注册。 |
| 5 | [\#34849](https://github.com/openai/codex/pull/34849) Cache remote plugin catalogs by scope | 全局 / 用户 / workspace 三级目录，本地 3h TTL 缓存。 |
| 6 | [\#34847](https://github.com/openai/codex/pull/34847) Use Guardian model limits for review sessions | 修正 Guardian review 用错上下文窗口导致的覆盖问题。 |
| 7 | [\#34846](https://github.com/openai/codex/pull/34846) Allow custom providers to opt into standalone web search | 第三方 Responses provider 可选择启用独立 web 搜索。 |
| 8 | [\#34845](https://github.com/openai/codex/pull/34845) Track multi-agent mode in world state | multi-agent 指令持久化进 world state，避免重复下发。 |
| 9 | [\#34840](https://github.com/openai/codex/pull/34840) Add persisted thread pinning to the app server | 线程置顶能力上线，列表/分页/筛选同步支持。 |
| 10 | [\#34831](https://github.com/openai/codex/pull/34831) Flush analytics before in-process app server shutdown | 关闭进程前 flush 分析事件，避免已完成 turn 的埋点丢失。 |

---

## 功能需求趋势

从 50 条活跃 Issues 归纳，社区最强烈的诉求集中在五个方向：

1. **Plan 模式 / 自动决策 UX（热度 #1）**
   - \#28969、\#27458、\#32594：用户希望掌控决策权，对 AI 自动"替我做主"普遍敏感。

2. **Windows / WSL 兼容性（占比最高）**
   - \#16815、\#23209、\#34782、\#33774、\#34025、\#33321、\#32876、\#22428、\#34841：几乎每条都和路径解析、沙箱、Store 更新或冷启动相关。

3. **远程 / 移动端工作流**
   - \#23200（无桌面 Linux 远程主机）、\#27597（Remote-SSH）、\#34632（iOS Remote TUI 不同步）：开发者期望把 Codex 当成"云端常驻 agent"。

4. **MCP 生态稳定性**
   - \#12491、\#26984、\#34205、\#29122：MCP 子进程泄漏、UI 焦点冲突、IDE 扩展静默启用开发中功能，都是结构性问题。

5. **Git 工作流与生产力增强**
   - \#10599（worktree 路径配置）、\#26227（side chat 持久化）、\#34819（git attribution 扩展全面启用）：贴近日常开发的高频功能。

---

## 开发者关注点

- **痛点 1：Plan 模式的"自动决策"引发信任危机。** \#28969 单 issue 151 👍，开发者明确表态"宁可手动确认也不要 AI 60 秒后自作主张"——后续产品节奏上，预计会加入更细粒度的"决策 timeout / auto-resolve"配置项。

- **痛点 2：MCP 在长会话下的资源管理。** 多个 issue 描述"僵尸进程 + 内存泄漏 + EMFILE"组合，开发者倾向用 systemd / supervisor 类思路自动接管子进程生命周期。

- **痛点 3：Windows 体验仍显著劣于 macOS/Linux。** WSL 路径反序列化、Store 静默退出、Chrome 扩展失联、启动喷 300+ 进程——任何一个都能直接打断工作流。社区已有人开始把 Windows 问题整理成"复现矩阵"集中反馈。

- **痛点 4：IDE 扩展与 CLI 版本耦合。** \#29122 直接点名"stable IDE extension 静默打包 alpha CLI"，导致 Code mode 等开发中能力上线即破坏生产；\#21639 则是 Hooks 在 Desktop 升级后静默失效——版本透明度 + 显式开关被反复呼吁。

- **高频需求：** worktree 路径可配置、side chat 持久化、移动端访问云端 Codex、第三方 provider 的 web 搜索能力——这些都已在 0.146.0-alpha 周期里通过 PR 落地（plugin catalog 缓存、Guardian review 修正、app-server thread pinning 等），下一阶段 stable 版本值得重点关注。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期**：2026-07-23
**数据来源**：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 同步完成 **v0.52.0 稳定版**、**v0.53.0-preview.0 预览版** 与 **v0.52.0-nightly** 三连发，发布节奏密集。安全方面，针对 **GHSA-wpqr-6v78-jr5g** 的 `$VAR` 变量展开绕过漏洞修复已落地 PR #28403；同时社区焦点继续集中在 **Agent / 子代理行为的稳定性**与 **Auto Memory 系统**的健壮性上，多个 P1 级挂起、状态误报 Bug 仍未关闭。

---

## 🚀 版本发布

### v0.52.0（稳定版）
- **workspace 上下文重构**：剔除 CI 瞬态配置文件，避免污染模型上下文（#28216）
- **caretaker-triage 基础模块**：为后续 LLM 分诊协调器奠定基础

### v0.53.0-preview.0（预览版）
- **核心修复**：合并被取消的工具响应、合并连续角色，避免触发 `400 Bad Request`（#28407）
- **caretaker-triage 升级**：实现 LLM 分诊协调器与容器构建

### v0.52.0-nightly.20260723.g9681621c6
- 顺序校验缓存凭据并恢复 `GOOGLE_APPLICATION_CREDENTIALS` 回退（#28472）
- 新增 eval 覆盖率报告命令

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 / 类别 | 评论数 | 关注点 |
|---|-------|--------------|--------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后误报 GOAL 成功，掩盖中断 | P1 / Bug | 12 | 影响 agent 行为可信度 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 持续挂起（👍8） | P1 / Bug | 8 | 高赞反馈，影响基础体验 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 强化组件级评估体系（76 个行为测试） | P1 / Eval Infra | 7 | 关注工程质量演进 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知的文件读取/搜索/映射效果评估 | P2 / Feature | 7 | 长期性能优化方向 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动调用 skills 和子代理 | P2 / Bug | 6 | 揭示 skills 生态使用率低 |
| [#27191](https://github.com/google-gemini/gemini-cli/issues/27191) | 配额突现 100% 已用，CLI 停止响应 | P2 / Bug（已关闭） | 6 | 配额逻辑异常案例 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 / Bug | 5 | 后台任务死循环风险 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后仍卡在 "Waiting input" | P1 / Core Bug | 4 | 频繁复现，影响交互 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | 浏览器子代理在 Wayland 下失败 | P1 / Bug | 4 | Linux 桌面兼容性 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | browser_agent 自动会话接管与锁恢复 | P3 / Feature | 4 | 浏览器代理鲁棒性诉求 |

**共同趋势**：超过 70% 的高活跃 Issue 集中在 `area/agent`，Agent 行为可靠性仍是社区首要关切。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 类别 | 要点 |
|----|------|------|------|
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | 修复 `$VAR`/`${VAR}` 变量展开绕过 | P1 / Security | 闭环 GHSA-wpqr-6v78-jr5g，硬化 dedup workflow |
| [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) | OAuth token exchange 改用原生 fetch | P1 / Auth | 解决无头 VPS 下 "Premature close" 问题 |
| [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) | 模型选择器中加入 `gemini-3.5-flash` | P2 / CLI | 修复 v0.51.0 用户找不到新模型的 Bug |
| [#28509](https://github.com/google-gemini/gemini-cli/pull/28509) | 上下文管理关闭时过滤掉 `thought` 段 | Core | 防止内部独白泄漏导致重复推理 |
| [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | 模型回退时轮换 session ID | Core | 修复有状态后端的 Flash 模型连续错误 |
| [#28506](https://github.com/google-gemini/gemini-cli/pull/28506) | `/compress` 命令传递 AbortSignal | CLI | 用户取消时可中断后台压缩请求 |
| [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) | Windows PowerShell 故障排查文档 | Docs | 补充全局 npm 安装后 `gemini` 命令失效指南 |
| [#28169](https://github.com/google-gemini/gemini-cli/pull/28169) | 新增 eval 覆盖率报告命令 | Eval Infra | 交叉对照 eval 清单与工具注册表 |
| [#28431](https://github.com/google-gemini/gemini-cli/pull/28431) | PR 生成器基础设施（Cloud Run + Workflows） | Infra | SSR 代码生成流水线底座 |
| [#28508](https://github.com/google-gemini/gemini-cli/pull/28508) | v0.52.0 自动生成 changelog | Docs | 待维护者合入 |

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中可提炼出五大社区关注方向：

1. **Agent / 子代理行为可靠性** — 占比最大，包含挂起、状态误报、权限绕过、上下文丢失等
2. **Auto Memory 系统健壮性** — 至少 4 个相关 Issue（#26522, #26523, #26525, #26516），涉及重试、脱敏、补丁校验
3. **浏览器代理（browser_agent）鲁棒性** — Wayland 兼容、会话锁、settings 覆盖等连环反馈
4. **AST 感知工具链** — 评估用 AST 提升文件读取/搜索精度以减少 token 消耗（#22745, #22746）
5. **CLI 在更多环境的可用性** — Windows PowerShell、Vite 交互式提示、终端 resize 性能等

---

## 👨‍💻 开发者关注点

综合 Issues 与 PR 评论，开发者反馈集中在以下痛点：

- **Agent 行为不可预测**：子代理不会主动调用 skills/sub-agents（#21968）、MAX_TURNS 后谎报 GOAL（#22323）、Generalist 永久挂起（#21409），反映"沉默失败 / 幻觉成功"是当前最大信任障碍
- **权限与安全边界模糊**：v0.33.0 后子代理自动启用、忽略用户配置（#22093, #22267），同时存在 `$VAR` 变量展开绕过漏洞（#28403）
- **Tool 数量与上下文管理失衡**：超过 128/400 个工具触发 400 错误（#24246），需要更智能的工具裁剪策略
- **终端体验缺陷**：shell 挂 "Waiting input"、外置编辑器退出后渲染损坏、resize 闪屏（#25166, #24935, #21924），影响长时间交互
- **可观测性不足**：`/bug` 不包含子代理上下文（#21763）、子代理轨迹难以分享（#22598），让 bug 复现与协作成本居高不下

---

*日报由 Gemini CLI 社区数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-23**

---

## 1. 今日速览

过去 24 小时，仓库连续发布了 **v1.0.74-3 / -2 / -1** 三个预发布版本，正式版 1.0.74 即将定型——本次迭代重点引入 **默认 sandbox 首次启用提示** 与 **Gemini 3.6 Flash 模型支持**，并修复了多路会话下对话框泄漏的回归。社区侧，Issues 数量与活跃度持续高位（32 条更新），开发者关注焦点集中在 **子代理成本可视化、ACP 模式下 BYOK 认证、跨平台稳定性**（Windows 退出崩溃、Linux 僵尸进程、tmux 渲染）三大方向。

---

## 2. 版本发布

| 版本 | 类型 | 主要内容 |
|---|---|---|
| [v1.0.74-3](https://github.com/github/copilot-cli/releases) | Pre-release | 修复与小调整 |
| [v1.0.74-2](https://github.com/github/copilot-cli/releases) | Pre-release | 修复与小调整 |
| [v1.0.74-1](https://github.com/github/copilot-cli/releases) | Pre-release | 见下方新增/改进 |

**v1.0.74-1 更新要点：**

- **Added**
  - 首次启动展示 splash，引导用户授权进入默认 sandbox
  - 新增对 `gemini-3.6-flash` 模型的支持
- **Improved**
  - 多路会话（multiplexing sessions）下，打开的对话框不再泄漏到其他会话；切回时 picker 自动重开
  - `$` 交互式 shell 快捷键行为优化（详见 release notes 末尾）

> 推测 v1.0.74 正式版将由 -3 演进发布，建议关注后续 release 说明以确认最终 changelog。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 为什么值得关注 | 社区反应 |
|---|---|---|---|
| [#443](https://github.com/github/copilot-cli/issues/443) | **内置 PDF 阅读支持** | 学界/工程团队对 PDF 文档问答有强需求，当前必须依赖外部 `pdftotext` | 👍 33 / 💬 6（最高赞 feature request） |
| [#4016](https://github.com/github/copilot-cli/issues/4016) | **BYOK（`COPILOT_PROVIDER_*`）在 `--acp` 模式被拒，session/new 返回 Authentication required** | BYOK 是非交互/企业场景的关键路径，1.0.61–1.0.68 回归且阻塞 Xcode ACP 接入 | 👍 4 / 💬 5 |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | **Linux 下 copilot CLI 不回收子进程，僵尸进程累积（约 2/分钟）** | 长时间会话的资源泄漏问题，影响生产环境稳定性 | 👍 2 / 💬 3 |
| [#1688](https://github.com/github/copilot-cli/issues/1688) | **为 `config.json` 增加可配置的自动压缩（auto-compaction）阈值** | 使用 Claude Opus 4.6 等高容量模型时，~45–60% 上下文就会出现明显延迟 | 👍 5 / 💬 2 |
| [#4161](https://github.com/github/copilot-cli/issues/4161) | **autopilot 模式下 `task_complete` 工具不可用的回归** | 是 #1523 的二次回归，破坏 agent 工作流收尾 | 👍 1 / 💬 2 |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | **Windows 上 `copilot --resume` 冷启动卡在 "Resuming session..."** | PowerShell 直连无法恢复会话，需先经过其它终端绕开 | 👍 1 / 💬 2 |
| [#4206](https://github.com/github/copilot-cli/issues/4206) | **环境状态栏在 org MCP 策略下握手卡死，永远显示 "Loading..."** | 企业用户被 MCP 策略影响，可用性受损且无错误提示 | 👍 2 / 💬 1 |
| [#4222](https://github.com/github/copilot-cli/issues/4222) | **#2802 的回归：v1.0.72+ 主面板再次进入 React/Ink 无限渲染循环** | Windows 原生终端高发，已是第二次回归 | 👍 0 / 💬 0（新增但高优先级） |
| [#4217](https://github.com/github/copilot-cli/issues/4217) | **Windows 退出崩溃：`uv_async_send` on closing handle（FAST_FAIL_FATAL_APP_EXIT）** | 每次退出都崩，影响 IDE 集成稳定性 | 👍 1 / 💬 0 |
| [#4218](https://github.com/github/copilot-cli/issues/4218) | **允许用户配置 Auto 模式使用的模型池** | Auto 模式成本/行为不可预测，企业用户希望显式约束 | 👍 6 / 💬 0 |

---

## 4. 重要 PR 进展

> 过去 24 小时仅 1 条 PR 更新，且与项目本身相关性存疑：

| # | PR | 摘要 | 状态 |
|---|---|---|---|
| [#3163](https://github.com/github/copilot-cli/pull/3163) | "ViewSonic monitor" | 标题与描述均与 Copilot CLI 功能无关（提到 GitHub Actions runners 与显示器），社区关注度为零 | OPEN / 👍 0 |

**说明：** 今日 PR 池近乎为空，没有需要重点汇报的合入/合并；维护者需推进以下方向的 PR：Windows 退出崩溃修复（#4217）、子代理 OTel billing attributes（#4224 对应修复）、ACP BYOK 认证回归（#4016 对应修复）。

---

## 5. 功能需求趋势

通过对当日及近期 Issues 的语义聚合，社区诉求集中在以下方向：

1. **多模型与编排控制**
   - Auto 模式模型池可配置（#4218，👍 6）
   - gemini-3.6-flash 等新模型首发支持（v1.0.74-1）
   - 显式 inline 自定义 agent 调用 + agent chaining（#4208，👍 3）

2. **Agent / 子代理体验**
   - `/usage` 中按子代理分解 AI credit 用量（#4207，👍 6）
   - OTel spans 补齐子代理 billing attributes（#4224）
   - `skill` 工具别名供自定义 agent 使用（#4209）
   - 后台 subagent 运行时 coordinator 状态卡死（#4225）

3. **文档/上下文能力**
   - 内置 PDF 阅读（#443，👍 33，长期 Top1）
   - `/context` 中 MCP Tools 报告实际延迟加载后的体积（#4189）
   - 可配置的自动压缩阈值（#1688，👍 5）

4. **协议与认证**
   - ACP（`--acp`）模式下 BYOK 认证回归（#4016）
   - ACP MCP BigInt 序列化失败（#4211）
   - Xcode ACP 自定义 agent 集成失败（#4227）

5. **终端与平台兼容**
   - Windows 退出崩溃（#4217）、resume 卡死（#4165）、notifications 崩溃（#4219）
   - Linux 僵尸进程（#4163）
   - tmux 下暗色渲染（#4212）、shell 命令完成检测失效（#4223）
   - React/Ink 渲染循环二次回归（#4222）

---

## 6. 开发者关注点

综合反馈，开发者当前最迫切的痛点与诉求可归纳为 **"透明、可控、稳"** 三字：

- **透明**（Transparency）
  - 子代理调用消耗真实 AI 额度却不在 `/usage` / OTel 中体现，企业成本核算失真（#4207、#4224）
  - `/context` 报告的是未延迟加载的 MCP schema，与真实下发不一致（#4189）

- **可控**（Control）
  - Auto 模式选模型不可配置（#4218）
  - 高容量模型下自动压缩不可调（#1688）
  - Autopilot 重试次数不可配（#4210）
  - Plan mode 误判只读 `gh api` / `git log -L` 为会修改工作区（#4220、#4221）

- **稳定**（Stability）
  - Windows 退出崩溃与会话恢复卡死反复出现
  - Linux 进程回收缺位
  - React/Ink 渲染循环两度回归（#2802 → #4222）
  - 大量 subagent 调用中的"服务器错误-重试"噪声（#4226）

> **维护者建议优先级**：①ACP BYOK 认证（#4016）→ ②Windows 退出崩溃（#4217）→ ③子代理成本可观测（#4207、#4224）→ ④Render loop 二次回归（#4222）→ ⑤Auto 模式模型池可配置（#4218）。

---

*日报由社区动态自动汇总生成，所有数据来源于 [github.com/github/copilot-cli](https://github.com/github/copilot-cli)。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-07-23
**数据范围**：GitHub 仓库 `MoonshotAI/kimi-cli` 过去 24 小时动态

---

## 1. 今日速览

今天社区动态主要围绕 **API 兼容性问题** 与 **多 Agent 架构演进** 两大主题。Issue #2534 暴露的 `prompt_cache_key` 参数问题已被 PR #2535 快速响应修复；同时，子 Agent 模型选择（Issue #2533）的功能请求折射出用户对成本分层多 Agent 工作流的强烈需求。Windows 中文环境下的 Unicode 编码崩溃（Issue #2532）以及 Shell 后台进程阻塞问题（PR #2530）也获得社区关注。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。

---

## 3. 社区热点 Issues

> 说明：过去 24 小时仅有 5 条 Issue 更新，以下为全部条目。

| # | 编号 | 标题 | 重要性 | 链接 |
|---|------|------|--------|------|
| 1 | #2534 | **Model API error 400: Unsupported parameter `prompt_cache_key`** | ⭐⭐⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2534) |
| 2 | #2531 | **MCP 工具名称与 Schema 被 Moonshot API 拒绝（HTTP 400）** | ⭐⭐⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2531) |
| 3 | #2533 | **功能请求：为 Sub-agent 提供独立的模型选择** | ⭐⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2533) |
| 4 | #2532 | **`kimi web` 在 Windows 重定向 stdout 时启动崩溃** | ⭐⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2532) |
| 5 | #2318 | **TPD 速率限制计算错误（更新）** | ⭐⭐⭐ | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2318) |

### 重点解读

- **#2534（高优先级 Bug）**：升级后向第三方 API（如 Nvidia NIM）发送 `prompt_cache_key` 参数导致 400 报错。该问题直接影响使用 Kimi 兼容端点的用户，PR #2535 已同步修复。
- **#2531（API 兼容性）**：Moonshot API 对 MCP 工具的 `anyOf` Schema 校验严格（要求 type 必须在 anyOf 子项中定义），当前客户端未做 sanitize 处理。
- **#2533（架构演进信号）**：用户希望 Sub-agent 脱离 session 默认模型，支持按任务复杂度分配不同成本模型（如简单任务用轻量模型、复杂任务用旗舰模型），是社区对多 Agent 成本优化的关键诉求。
- **#2532（Windows 本地化）**：中文系统默认 gbk 编码下，`kimi web` 启动 banner 中的 `➜` (U+279C) 字符无法编码，引发 `UnicodeEncodeError`，影响重定向启动场景。

---

## 4. 重要 PR 进展

| # | 编号 | 标题 | 状态 | 链接 |
|---|------|------|------|------|
| 1 | #2535 | **fix(llm): 将 prompt cache keys 限定到 Moonshot API** | OPEN | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2535) |
| 2 | #2530 | **fix(shell): 解除 detached 子进程持有管道时的阻塞** | OPEN | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2530) |
| 3 | #2524 | **fix(tools): StrReplaceFile 替换计数基于运行中内容** | OPEN | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2524) |

### 修复要点

- **PR #2535**：解决 #2534。第三方 Kimi 兼容端点不再接收 Moonshot 专属的 `prompt_cache_key` 参数，而官方 Kimi/Moonshot API 保留会话级缓存能力，修复路径清晰且向后兼容。
- **PR #2530**：解决 #2468。前台 Shell 路径中 `_run_shell_command` 死等 stdout/stderr EOF，导致 `some_daemon & echo done` 这类后台命令被卡住。新逻辑解耦了 stdout/stderr 读取与退出码检查。
- **PR #2524**：解决 #2526。`StrReplaceFile` 顺序应用编辑时，旧实现以**原始内容**统计替换次数，导致链式编辑（后置 `old` 由前置编辑生成）计数错误；修复后基于**运行中内容**计算。

---

## 5. 功能需求趋势

综合近期 Issue 反馈，社区关注点呈现以下方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **多 Agent 架构深化** | #2533 | Sub-agent 模型独立选型 → 成本分层工作流成为下一步重点 |
| **API 兼容性 / 第三方生态** | #2534、#2531 | 官方 vs 第三方端点的参数与 Schema 兼容需要客户端侧显式管理 |
| **跨平台稳定性（Windows）** | #2532 | 中文 / 重定向 / 服务化部署场景的本地化编码问题持续暴露 |
| **Shell 与进程管理** | #2530、#2468 | 后台进程、管道阻塞、长任务场景的可靠性需求增长 |
| **速率限制与配额** | #2318 | TPD（Token-Per-Day）计费/限额机制仍是企业用户痛点 |

---

## 6. 开发者关注点

总结过去 24 小时的开发者反馈，以下痛点值得关注：

1. **🔌 第三方 API 用户被"误伤"**
   官方参数（`prompt_cache_key`、MCP Schema）直发到第三方端点导致 400 报错 → 客户端需要**针对 Provider 做参数裁剪与 Schema sanitize**，而非一刀切。

2. **🐛 Windows + 中文环境的"看不见的坑"**
   Unicode 编码、`print_banner` 等 IO 路径未考虑 `sys.stdout.encoding` 不是 UTF-8 的场景，影响 CI/CD、桌面自动化和服务化部署。

3. **⏱️ Shell 长任务/后台进程的可用性**
   前后台分离、管道持有者的处理逻辑需要重构，避免 `daemon &` 类写法直接卡死 CLI。

4. **💸 多 Agent 成本敏感化**
   单一模型贯穿整个 session 的现状，限制了"轻量任务路由到轻量模型"的降本路径，是下一阶段高频需求方向。

5. **🧮 工具语义正确性**
   `StrReplaceFile` 等编辑类工具的"计数与一致性"语义应基于**逐步执行后的真实状态**，而非原始快照，否则会产生难以调试的链式编辑 bug。

---

*本日报基于 GitHub 公开数据自动生成，仅反映仓库公开动态，不构成产品承诺。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-23**

---

## 📌 今日速览

今日 OpenCode 社区最突出的议题集中在 **OpenCode Go 订阅服务大规模故障**——多个用户报告所有订阅模型统一返回 "Request blocked by upstream provider"，影响俄语、葡萄牙语、汉语等多语言用户群体，引发广泛投诉。同时，**1.18.x 版本的 Plan/Build 模式切换功能被移除**引发了开发者社区的强烈不满。代码层面，提交者 rekram1-node 持续推进 AI Provider 适配层重构，针对 OpenAI / Anthropic / Gemini 等多家模型的 raw reason 与 cache key 语义进行修正。

---

## 🚀 版本发布

过去 24 小时内未发布新的正式版本。仅有辅助制品：
- **pr-38252-videos**：PR #38252 的验证视频（Before/After 对比录制），非代码版本。🔗 [#38252](https://github.com/anomalyco/opencode/pull/38252)

---

## 🔥 社区热点 Issues

### 1. [#38218](https://github.com/anomalyco/opencode/issues/38218) — opencode-go 订阅模型全部返回 "Request blocked by upstream provider"
- **重要性**：⭐⭐⭐⭐⭐ 严重 P0 级故障，影响所有付费 Go 订阅用户
- **社区反应**：22 条评论，所有受影响用户均无法完成任何模型调用

### 2. [#6231](https://github.com/anomalyco/opencode/issues/6231) — 自动发现 OpenAI 兼容端点模型
- **重要性**：⭐⭐⭐⭐⭐ 高赞需求（👍185），影响 LM Studio / Ollama / llama.cpp 本地用户
- **社区反应**：28 条评论，是长期未解决的高优功能请求

### 3. [#19466](https://github.com/anomalyco/opencode/issues/19466) — 空闲状态 CPU 占用过高
- **重要性**：⭐⭐⭐⭐ 性能问题，i9-14900 上即使在 API 速率限制等待时也占用单核 ~50%
- **社区反应**：15 条评论，反映空轮询机制存在显著资源浪费

### 4. [#38293](https://github.com/anomalyco/opencode/issues/38293) — 俄语用户报告 Go 订阅不可用
- **重要性**：⭐⭐⭐⭐ 与 #38218 同一故障，体现问题的全球蔓延
- **社区反应**：15 条评论，0 👍，表明多语言用户普遍受波及

### 5. [#27018](https://github.com/anomalyco/opencode/issues/27018) — v1.14.48 Desktop localserver 中断
- **重要性**：⭐⭐⭐⭐ 桌面端核心功能故障，"绿色变红色"问题
- **社区反应**：12 条评论，回归性问题，亟需版本回滚或补丁

### 6. [#37970](https://github.com/anomalyco/opencode/issues/37970) — Plan/Build 模式选项被移除
- **重要性**：⭐⭐⭐⭐ 工作流核心功能回归争议
- **社区反应**：10 条评论，1.18.0 升级后用户失去精细控制能力

### 7. [#18011](https://github.com/anomalyco/opencode/issues/18011) — LM Studio 仅显示 3/9 个模型
- **重要性**：⭐⭐⭐ 自动发现机制不完整，与 #6231 同根问题
- **社区反应**：6 条评论，4 👍，持续 4 个月仍未解决

### 8. [#26220](https://github.com/anomalyco/opencode/issues/26220) — 工具调用后陷入无限循环（Zen/big-pickle）
- **重要性**：⭐⭐⭐ 严重影响会话可用性，进程不死但无响应
- **社区反应**：6 条评论

### 9. [#36677](https://github.com/anomalyco/opencode/issues/36677) — V2 serve 长时进程 JS 持续高分配
- **重要性**：⭐⭐⭐ 核心性能问题，1.1–1.3 GB RSS 内存泄漏迹象
- **社区反应**：由官方 bot 创建，已标记为 bug/perf/core/2.0

### 10. [#34407](https://github.com/anomalyco/opencode/issues/34407) — CLI 中 LaTeX 数学公式未渲染
- **重要性**：⭐⭐⭐ 输出体验缺陷，影响 STEM 工作流
- **社区反应**：4 条评论

---

## 🛠 重要 PR 进展

### 1. [#38423](https://github.com/anomalyco/opencode/pull/38423) — 保留原始 finish reason
- **作者**：rekram1-node
- **内容**：在 `step-finish` / `finish` 事件中暴露 `rawReason`，覆盖 OpenAI Responses、Chat-compatible、Anthropic、Gemini、Bedrock 等 5 类 provider

### 2. [#38424](https://github.com/anomalyco/opencode/pull/38424) — 按 SDK 选择 prompt cache 键
- **作者**：rekram1-node
- **内容**：解决不同 provider 对 `promptCacheKey` vs `prompt_cache_key` 字段命名差异，避免误用

### 3. [#38401](https://github.com/anomalyco/opencode/pull/38401) — `/api/generate` 加载动态模型
- **作者**：kitlangton
- **内容**：使无状态生成端点支持动态加载的 AI SDK 与原生 provider 包，修复 Gemini 等模型失败问题

### 4. [#38067](https://github.com/anomalyco/opencode/pull/38067) — 边缘触发的 build-switch 提示
- **作者**：Duo-Huang
- **内容**：修复 session 提醒每次扫描全历史的性能浪费，改用增量边沿触发

### 5. [#37732](https://github.com/anomalyco/opencode/pull/37732) — 暴露空模型响应
- **作者**：CyberPunk-2022
- **内容**：当 provider 返回 stop + usage 但无文本/工具调用时，正确记录助手回合而非静默丢弃

### 6. [#38420](https://github.com/anomalyco/opencode/pull/38420) — `--no-project-instructions` 开关
- **作者**：patrickpassosb
- **内容**：为外部评审自动化提供"不信任仓库指令"的能力，新增 CLI 开关与环境变量

### 7. [#38418](https://github.com/anomalyco/opencode/pull/38418) — 修复 Web 模式时间戳错乱
- **作者**：theseventhflow
- **内容**：修复客户端本地时间早于服务端导致大模型不回复的 bug，统一改用 `created` 字段排序

### 8. [#38417](https://github.com/anomalyco/opencode/pull/38417) — 保留 OpenAI 消息阶段
- **作者**：opencode-agent[bot]
- **内容**：从 `response.output_item.added` 解码 `commentary` / `final_answer` 阶段标签，对齐官方 SDK 契约

### 9. [#38406](https://github.com/anomalyco/opencode/pull/38406) — 失败 location 启动重试
- **作者**：dondetir
- **内容**：修复 location boot 失败后被缓存 60 分钟 TTL 不再重试的问题

### 10. [#37226](https://github.com/anomalyco/opencode/pull/37226) — Per-agent subagent_depth 覆盖
- **作者**：M4buAO
- **内容**：支持为单个 agent 单独覆盖 `subagent_depth`，灵活控制递归层级

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中提炼的社区关注热点：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **本地 LLM 自动发现** | #6231, #18011 | 🔥🔥🔥🔥🔥（长期高赞未解决）|
| **Plan/Build 模式 UX** | #37970, #38364, #38421 | 🔥🔥🔥🔥（多用户投诉功能回归）|
| **Go 订阅服务稳定性** | #38218, #38293, #38368 | 🔥🔥🔥🔥🔥（多语言用户全球报错）|
| **空载性能优化** | #19466, #36677 | 🔥🔥🔥🔥（CPU/内存浪费）|
| **UI 国际化体验** | #38416, #38350, #38412 | 🔥🔥🔥（繁体/简体/英文用户反馈）|
| **可移植性** | #38391（USB 离线版） | 🔥🔥（企业/教育场景）|
| **会话侧边栏/导航** | #32165（用户消息快跳） | 🔥🔥（长会话痛点）|

---

## 💡 开发者关注点

1. **付费订阅稳定性成最大信任危机**
   多语言用户在同一天集中报告 opencode-go 故障，且官方未在 issues 中回应根因，凸显 **付费 SLA 与透明沟通机制** 的缺失。

2. **"Plan/Build" 是核心工作流而非可弃功能**
   1.18.0 移除切换开关后引发强烈反弹（#37970、#38364、#38421），开发者依赖此机制进行只读规划 vs 写入执行的边界控制，**回归应经过 RFC 流程**。

3. **本地模型用户体验仍是短板**
   LM Studio 自动发现（#6231 👍185）与手动配置繁琐长期共存，缺乏开箱即用的 OpenAI-compatible 探测能力，是阻碍本地 LLM 用户增长的关键摩擦点。

4. **TUI 渲染与性能仍待打磨**
   FPS 上限（#13817 已 CLOSED）、LaTeX 不渲染（#34407）、CPU 空转（#19466）、V2 serve JS 高频分配（#36677）共同指向 **TUI 渲染管线的资源管理** 尚未成熟。

5. **新 UI 反馈两极化**
   #38416 直言"UI 像粪便一样丑、违反人性"，与官方同步推进的 V2 theme 重构（#38397、#38414）形成对照，提示 **重设计需配套 UX 验证机制**，而非单方面替换。

6. **贡献者流程逐步规范**
   PR 标题中出现 `[contributor]`、`[needs:compliance]`、`[needs:issue]` 等标签，`pr-standards` 工具修复（#38408）显示项目正在建立更严格的质量门禁。

---

*本日报基于 2026-07-23 过去 24 小时的 GitHub 数据自动生成。数据源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-23

## 📌 今日速览

过去 24 小时，Pi 仓库活跃度持续高位运行：**50 条 Issue** 与 **29 条 PR** 被更新，但**无新版本发布**。社区关注重点集中在三个方向：TUI 渲染质量（字符宽度、代码块边框）、Provider/模型兼容性问题（Bedrock、OpenRouter、OpenAI SDK 重试），以及扩展生态建设（OAuth、MRU 模型切换、VS Code 集成）。维护者 `mitsuhiko` 与 `badlogic` 本日活跃，亲自推动了 Bash 会话元数据暴露、AgentHarness 工具抽象等核心架构改进。

---

## 🚀 版本发布

**无新版本发布。** 当前最新稳定版仍为前序发布的版本。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [\#6476] 回归：自托管 OpenAI 兼容 Provider 的 `httpIdleTimeoutMs` 被忽略 ⭐12 评论
**链接：** https://github.com/earendil-works/pi/issues/6476
v0.80.6 相对 v0.80.3 出现的回归，self-hosted vLLM 在数分钟后即报 `operation timed out`。这是典型的 Provider 兼容性问题，影响所有自托管用户。

### 2. [\#6686] [历史问题复发] Pi 自动登出 GitHub ⭐10 评论
**链接：** https://github.com/earendil-works/pi/issues/6686
2025 年的 #2725 在 v0.80.7（macOS 与 Linux）上再次复现，OAuth 会话管理似乎存在持续缺陷。

### 3. [\#6768] Copilot Enterprise 无法使用 Compaction ⭐8 评论 / 👍8
**链接：** https://github.com/earendil-works/pi/issues/6768
**OPEN 状态**中评论与点赞最高的 Issue。Copilot Enterprise 用户在 Compact 时触发 OpenAI 421 与 Anthropic 模型错误，付费用户的关键工作流被阻断。

### 4. [\#6210] [OPEN] `/scoped-models` 无法选择含方括号的模型 ID ⭐8 评论
**链接：** https://github.com/earendil-works/pi/issues/6210
正则/模式匹配 bug，影响所有含特殊字符的自定义模型名。

### 5. [\#6459] 自定义快捷键首启不生效，需 `/reload` ⭐7 评论
**链接：** https://github.com/earendil-works/pi/issues/6459
`keybindings.json` 需手动 reload 才会生效，影响所有依赖自定义按键的扩展体验。

### 6. [\#6774] Ctrl+G 外部编辑器在 tmpdir 拥挤时启动缓慢 ⭐7 评论
**链接：** https://github.com/earendil-works/pi/issues/6774
直接写入 `os.tmpdir()` 在多用户/多进程环境下出现显著性能劣化。

### 7. [\#6621] 防止动态系统提示意外导致缓存失效 ⭐6 评论
**链接：** https://github.com/earendil-works/pi/issues/6621
针对本地推理（Strix Halo 等统一内存设备）prefill 速度慢场景下的关键优化，直接影响成本与延迟。

### 8. [\#6911] [no-action] OpenAI SDK 重试完整睡眠 `Retry-After`（天级）且 Escape 无法中止 ⭐5 评论
**链接：** https://github.com/earendil-works/pi/issues/6911
严重可用性问题：上游 429 可能让 SDK 睡眠数天，且 `AbortSignal` 被忽略，用户只能强杀进程。

### 9. [\#6940] [last-read] OpenRouter 缓存断点在 tool 结果前停滞 ⭐4 评论
**链接：** https://github.com/earendil-works/pi/issues/6940
Anthropic 模型经 OpenRouter 调用时，连续 tool-only turn 中 `cacheRead` 不再增长，徒增输入成本。

### 10. [\#6652] pi-tui 崩溃日志硬编码 `~/.pi/agent/`，忽略 `PI_CODING_AGENT_DIR` ⭐4 评论
**链接：** https://github.com/earendil-works/pi/issues/6652
环境变量配置不被尊重，导致用户在自定义路径下产生混乱。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [\#6987] `fix(tui): align grapheme widths with terminal cells`
**链接：** https://github.com/earendil-works/pi/pull/6987
由 `petrroll` 提出，针对 TUI 字符宽度估计这一著名难题给出修正，直接影响 CJK 与 emoji 的渲染对齐。

### 2. [\#6341] `feat(ai): support constrained sampling`（mitsuhiko）
**链接：** https://github.com/earendil-works/pi/pull/6341
新增 provider 侧受约束工具调用（JSON-schema `strict` 与自定义 grammar），是 Agent 可靠性的重要底层能力。

### 3. [\#6980] `fix(ai): make provider retries abortable`（petrroll）
**链接：** https://github.com/earendil-works/pi/pull/6980
**修复 #6911**：替换 OpenAI/Anthropic SDK 内部重试逻辑，加入 `maxRetryDelayMS` 上限并让 `AbortSignal` 真正生效。

### 4. [\#6967] `feat(coding-agent): expose session metadata to bash tools`（mitsuhiko）
**链接：** https://github.com/earendil-works/pi/pull/6967
向 Bash 工具暴露 session id、provider、model、reasoning level 等元数据，让外部脚本可识别当前 Pi 会话。

### 5. [\#6927] `Add native OpenRouter OAuth support`
**链接：** https://github.com/earendil-works/pi/pull/6927
通过 `Provider.auth.oauth` 为 OpenRouter 加入浏览器 OAuth + PKCE S256 + 本地回调流程。

### 6. [\#6916] `feat(agent): add AgentHarness execution tools`（badlogic）
**链接：** https://github.com/earendil-works/pi/pull/6916
核心架构改进：引入 `AgentHarnessTool`，在 `AgentTool.execute()` 之上叠加 `ExecutionEnvironment`、session id 等应用上下文。

### 7. [\#6216] `feat: Add Amazon Bedrock Mantle OpenAI Responses provider`
**链接：** https://github.com/earendil-works/pi/pull/6216
补齐 Bedrock Mantle 这一较新的 OpenAI Responses 兼容 Provider。

### 8. [\#6960] `feat(ai): add StepFun providers`
**链接：** https://github.com/earendil-works/pi/pull/6960
新增四个 StepFun Provider（国内/全球/预付费路由），从 models.dev 数据源派生。

### 9. [\#6881] `feat(ai): use provider-reported cost when responses include it`
**链接：** https://github.com/earendil-works/pi/pull/6881
支持读取 `usage.cost` 与 `cost_details.upstream_inference_cost`，账单溯源更精确，BYOK 场景尤其受益。

### 10. [\#6971] `feat(coding-agent): emit bash_execution_update events`
**链接：** https://github.com/earendil-works/pi/pull/6971
为 bash 工具执行增加事件流，附带 `id` 字段，便于客户端并行追踪（已被 pimacs.el 等扩展集成测试）。

---

## 📈 功能需求趋势

通过对所有 Issue 的归纳，社区在以下方向表达出明确诉求：

| 趋势方向 | 代表性 Issue |
|---|---|
| **IDE 集成** | #6985（VS Code Extension 上架） |
| **TUI 渲染质量** | #5566（代码块边框）、#6987（图簇宽度）、#6978（并发 dialog 挂死） |
| **新模型/Provider 支持** | #6216（Bedrock Mantle）、#6960（StepFun）、#6927（OpenRouter OAuth）、#6957（Bedrock profile） |
| **性能与缓存** | #6621（动态 prompt 缓存）、#6940（OpenRouter 缓存断点）、#6774（外部编辑器） |
| **OAuth/计费正确性** | #6686（GitHub 登出）、#6979（Anthropic OAuth 被错计费） |
| **扩展 API 增强** | #5954（结构化审批）、#6982（MRU 模型切换）、#6988（per-block thinking label） |

---

## 💬 开发者关注点（痛点 / 高频需求）

1. **回归质量门**——多个 Issue 反映小版本号（v0.80.6、v0.80.7）即出现 Provider 超时、快捷键失效等回归，社区呼吁建立更严格的兼容性测试。

2. **多 Provider 计费透明度**——Anthropic OAuth 被错误按 metered 计费（#6979）、Provider 自报 cost 未被采纳（#6881 PR 正在解决）成为焦点；BYOK 与自托管用户的成本敏感性极高。

3. **扩展生态"最后一公里"**——MRU 模型切换、扩展 dialog 互斥、approval 原语等需求集中涌现，社区期望 Pi 在保持 full-access 默认行为的前提下，给扩展更多结构化钩子。

4. **本地/自托管体验**——预填充速度、缓存策略、OpenRouter 缓存断点等问题指向一类核心用户：在 AMD Strix Halo、vLLM 等本地推理栈上跑 Pi 的开发者，他们的性能优化诉求直接决定工具是否可用。

5. **TUI 健壮性**——崩溃日志路径硬编码（#6652）、并发 dialog 挂死（#6978）、启动 benchmark 提前退出（#6975）暴露 TUI 在多 session / 多扩展场景下的稳定性短板。

---

*日报生成时间：2026-07-23 · 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) GitHub API*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-07-23**

---

## 1. 今日速览

社区当天呈现出"修复为主、新增为辅"的明显节奏：v0.20.1-nightly 发布流程因 quality 任务失败而中断，同时多项 P1 级别核心 bug（side-query `enable_thinking` 误用、core 测试套件全红、web_fetch 工具失效、子进程凭据泄漏）已关闭或正在修复；npm 12 / npm wrapper 路径解析问题则集中爆发，导致 `qwen update` 与启动检查在多个版本上报错。

---

## 2. 版本发布

过去 24 小时仅有一个预发布标签，但**并非产品发布**：

- `v0.0.0-benchmark-poc.20260722.1`（2026-07-22）—— 仅用于验证 GitHub Actions → ECS benchmark worker → GitHub 结果回传链路，**不是 Qwen Code 的功能版本**。
- 实际产品版本方面：nightly 通道试图发布 `v0.20.1-nightly.20260723.d064bd7dc`，但 quality 阶段失败，详见 [#7549](https://github.com/QwenLM/qwen-code/issues/7549)。

---

## 3. 社区热点 Issues

| # | Issue | 优先级 / 状态 | 为什么重要 |
|---|---|---|---|
| [#7284](https://github.com/QwenLM/qwen-code/issues/7284) | `runSideQuery` 强制 `enable_thinking=false`，致 TokenPlan 端点 400 | **P1 / 已关闭**，5 条评论 | 影响所有使用 `web_fetch` / 分类器的侧查询，是当天引发连锁修复的根因 issue |
| [#7537](https://github.com/QwenLM/qwen-code/issues/7537) | Core 测试套件在 main 分支全红（fork dispatch 测试超时） | **P1 / 已关闭** | 影响所有 PR 的 `Test (ubuntu-latest, Node 22.x)` 任务，阻塞了合并队列 |
| [#7440](https://github.com/QwenLM/qwen-code/issues/7440) | `web_fetch` 工具完全不可用（中文用户反馈） | **P1 / 已关闭** | 与 #7284 同根，是国内用户最先大规模上报的体感故障 |
| [#6601](https://github.com/QwenLM/qwen-code/issues/6601) | Shell 子进程继承敏感环境变量（`QWEN_SERVER_TOKEN`、API Key 泄漏） | **P1 / 安全 / 已关闭** | 凭据安全级别问题，关乎企业部署合规 |
| [#7516](https://github.com/QwenLM/qwen-code/issues/7516) | Main CI E2E 测试失败（commit `d064bd7dcf98`） | Open，3 条评论 | 自动化机器人维护，已被标记为 `ready-for-agent`，与 #7537 共同阻塞主干 |
| [#7549](https://github.com/QwenLM/qwen-code/issues/7549) | `v0.20.1-nightly.20260723.d064bd7dc` 发布失败 | Open，1 条评论 | 反映主干质量门禁仍不稳定 |
| [#7306](https://github.com/QwenLM/qwen-code/issues/7306) | 强化工具输出预算、可观测性与产物生命周期 | **P2 / Open**，4 条评论 | 社区推动的"核心可观测性"主线提案，#7323 与 #7470 已并入 |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | 定义企业级外部记忆集成 profile | **P3 / Open**，4 条评论 | 由 doudouOUC 主导的文档先行提案，明确不破坏 Core API，为企业记忆方案定调 |
| [#7404](https://github.com/QwenLM/qwen-code/issues/7404) | 启动检查更新超时太短，加载长会话时必超时 | **P3 / 已关闭**，4 条评论 | 中文社区对启动体验的代表性反馈 |
| [#7515](https://github.com/QwenLM/qwen-code/issues/7515) | `qwen update` 自 20.1 起报 "Failed to check for updates (registry error)" | **P3 / Open**，2 条评论 | 与 #7543 / #7520 / #7528 / #7544 形成一个独立"更新检查故障簇" |

**社区反应观察**：当日议题主要集中在两类——一类是工具不可用/安全相关的 P1 必修，另一类是 npm 12 + wrapper 路径解析引发的升级体验退化；多数 Issue 在 24 小时内即被关闭或接到对应 PR，治理节奏较快。

---

## 4. 重要 PR 进展

| PR | 标题 | 关键内容 |
|---|---|---|
| [#7534](https://github.com/QwenLM/qwen-code/pull/7534) | `fix(core)`: 端点要求 thinking 时自动重试 | 当 `enable_thinking=false` 被端点 400 拒绝时，自动重建一次请求并记住模型能力，是 #7284 的根治性补丁 |
| [#7541](https://github.com/QwenLM/qwen-code/pull/7541) | `fix(core)`: 保留显式设置的 `reasoning_effort: "none"` | 修复侧查询禁用 thinking 时把用户配置一并清掉的回归 |
| [#7512](https://github.com/QwenLM/qwen-code/pull/7512) | `perf(startup)`: Google GenAI SDK 按需懒加载（已关闭） | 从 ACP 启动静态闭包中移除 `@google/genai`，使用 SDK-等价的本地实现减小冷启动体积 |
| [#7544](https://github.com/QwenLM/qwen-code/pull/7544) | `fix(cli)`: 将 npm wrapper 解析到 `npm-cli.js` | 解决 #7515 / #7543 中 mise 等 wrapper 把 `npm` 当成非 JS 文件的解析问题 |
| [#7528](https://github.com/QwenLM/qwen-code/pull/7528) | `fix(cli)`: 用 `npm view` 替代 update-notifier | 规避 npm 12 全局模式下 `view` 行为变更导致的 registry 错误 |
| [#7501](https://github.com/QwenLM/qwen-code/pull/7501) | `fix(cli)`: `--open` 使用真实回退端口 | 修复 #7500，`qwen serve` 在端口被占时 `--open` 仍打开旧端口 |
| [#7522](https://github.com/QwenLM/qwen-code/pull/7522) | `fix(acp)`: 对非 Qwen OAuth 鉴权隐藏已下线模型 | 模型选择器在改用其他鉴权方式时不再展示已废弃的内置模型 |
| [#7514](https://github.com/QwenLM/qwen-code/pull/7514) | `feat(serve)`: 持久化 workspace channel 配置 | 为 #7209 渠道管理工作的第一部分，引入工作区级设置存储 |
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | `feat(serve)`: 热重载 workspace trust 变更 | 通过语义化 trust 快照 + 监控，无需重启守护进程即可切换 trust 策略 |
| [#7536](https://github.com/QwenLM/qwen-code/pull/7536) | `feat(core)`: 将 GenAI 遥测与阿里云 ARMS 对齐 | 统一 OTel GenAI 语义约定与 ARMS LLM Trace 的字段命名/类型，便于国内可观测性接入 |

另外值得关注的进展：[#7490](https://github.com/QwenLM/qwen-code/pull/7490) 修复了 autofix 在 Prepare 阶段被跳过时 PR 永久终止的缺陷；[#7471](https://github.com/QwenLM/qwen-code/pull/7471) 在 Web Shell 新建会话流程中加入统一的 git 模式选择器。

---

## 5. 功能需求趋势

按当日 Issue/PR 热度排序，社区关注度集中在以下方向：

1. **核心工具稳定性** —— `web_fetch` 不可用（#7284、#7440）、cron 语义偏差（#7452）、破坏性 git 防护缺口（#7531）等，反映**"工具集已成型，边缘 case 频发"**。
2. **升级与安装体验** —— npm 12 兼容性（#7520）、`getNpmCliPath` wrapper 路径（#7543）、registry 错误（#7515 / #7528）、启动超时（#7404），几乎构成一个独立的"release-time UX"主题。
3. **多 Agent / 子代理可视化** —— [#7525](https://github.com/QwenLM/qwen-code/issues/7525) 提出普通会话的 Todo DAG 与子代理执行联动展示；[#7388](https://github.com/QwenLM/qwen-code/pull/7388) 给出明确的 Channel 投递契约。
4. **Web Shell / 服务侧增强** —— 启动上下文选择器（#6701）、git 模式选择（#7471）、Shadow DOM 隔离（#7551）、workspace 级生成（#7552）、信任热重载（#7268），表明 Web Shell 正在从"可运行"走向"可管理"。
5. **企业级记忆与集成** —— [#7449](https://github.com/QwenLM/qwen-code/issues/7449) 的外部记忆 profile 是当月最系统的提案，钉钉 mention 元数据修复（#7472）与渠道管理（#7514）则补齐国内 IM 集成短板。
6. **可观测性 / 遥测** —— 工具输出预算（#7306）、GenAI × ARMS 对齐（#7536）、冷启动 lazy-loading（#7264 / #7512）形成性能与可观测性双线推进。
7. **跨平台与 IDE 集成** —— Windows PowerShell 截图粘贴（#6577）、移动端 Web Shell（#5958）、VS Code Companion 文件选择器丢图（#7489）。

---

## 6. 开发者关注点

- **升级路径成最大痛点**：连续多个版本在 `qwen update` / 启动检查上失败，且问题分散在 `getNpmCliPath`、`fetchGlobalNpmUpdateInfo`、npm 12 行为变更等多个层级，开发者呼吁统一 release 前后的版本探测路径。
- **侧查询（side-query）能力被过度耦合**：`enable_thinking` 硬编码导致 `web_fetch` / 分类器大面积失效，#7534 + #7541 提供"重试 + 保留配置"的组合方案，是社区普遍认可的修复方向。
- **CI/CD 不稳定直接影响开发者节奏**：main 分支 E2E + core 单元测试同日翻红（#7516、#7537），导致所有 PR 红灯，维护者需要紧急安抚在飞任务。
- **冷启动体积成为性能基线**：ACP 启动静态闭包 17.24 MiB / 2420 模块的审计（#7264）让 lazy-loading 成为多 PR 共识目标。
- **安全合规意识提升**：#6601 的关闭表明社区对子进程环境隔离、凭据保护等"非功能"需求开始具备主动上报意识。
- **API 边界与术语一致性**：cron 解析（#7452）、`validate_session_id` 规范化（#7532）、`/review` 报告单位（#7550）反映出开发者对"行为可预测、文档与实现一致"的诉求在增强。

---

> 备注：日报仅基于过去 24 小时内有更新的 Issue/PR；排行优先采用评论数 + 优先级 + 状态变化综合排序，必要时辅以手动挑选以保证覆盖度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-07-23

> 数据来源：Hmbown/DeepSeek-TUI（项目内部代号 CodeWhale）
> 报告范围：过去 24 小时（2026-07-22 ~ 2026-07-23）

---

## 1. 今日速览

- **v0.9.1 收尾冲刺**：多项 Work chrome 重构、Skills 默认包、`/uwu` 主题与 Kimi 路由修复密集合并，#4675 集成 PR 已落 main。
- **新版停船级 Bug 浮出**：v0.9.1 候选版本在干净终端中启动后立即退出（#4716），同时暴露出多处遗留的 DeepSeek 时代 UI 假设（如非 DeepSeek provider 下仍展示 "DeepSeek fallback model"、粘贴长 prompt 字节损坏等问题）。
- **多模型生态持续扩张**：新增 TelecomJS、minimax 中国/Token Plan 等 provider 路由（PR #4370、#4686），社区关注度向"多 provider + Skills 管理"方向集中。

---

## 2. 版本发布

过去 24 小时 **无新 Release**。但 v0.9.1 集成 PR #4675（commit `0dfe9170a10e`）已合并至 main，候选版本正在 dogfood 中，预计近期 tag。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|---|---|---|---|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | EPIC: 分阶段 command-boundary 重构（#2791） | OPEN | **17** | 全期最高评论数，追踪命令边界重构的可合并分层，是 #2791 大型重构的"路标"。 |
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | feat: 🐋 帮助 JayBeest 梳理 CodeWhale 海啸 🌊 | OPEN | **12** | 针对 10+ PR/天的高迭代节奏，提出 contributor Skill/workflow 自助维护方案，社区 onboarding 关键议题。 |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) | Work Agent 行：真实 sub-agent 详情与结构化当前活动 | CLOSED | 8 | 解决侧栏 Work/Activity/Agents 视图缺陷，从被删 #2694 恢复，社区所有切片。 |
| [#2886](https://github.com/Hmbown/CodeWhale/issues/2886) | 为工具生命周期增加 Gherkin 验收 E2E 覆盖 | CLOSED | 7 | 命令重构落地前的基础设施补强，影响所有命令路由的可测试性。 |
| [#4691](https://github.com/Hmbown/CodeWhale/issues/4691) | v0.9.1: 发布模型调用的默认 CodeWhale Skill 包 | CLOSED | 4 | 对标 Kimi Code / Devin CLI / Claude Code 的内置 Skill 套件，是 v0.9.1 的关键交付。 |
| [#4687](https://github.com/Hmbown/CodeWhale/issues/4687) | fix(kimi): Kimi Code/direct Moonshot K3 模型 ID 交叉配对 fail-closed | CLOSED | 4 | 在 dogfood 中发现的 v0.9.1 release-blocker，避免模型路由身份混淆。 |
| [#4085](https://github.com/Hmbown/CodeWhale/issues/4085) | 无法在 `~/Library/CloudStorage/Dropbox/` 读写（macOS File Provider） | OPEN | 4 | 影响 macOS 12+ 默认 Dropbox 路径，非 sandbox 问题但工具层被阻断，挂在 v0.9.3。 |
| [#4651](https://github.com/Hmbown/CodeWhale/issues/4651) | v0.9.1: 将 `/skills` 统一为唯一 Skill 管理器 | CLOSED | 2 | 杜绝 `/reskill` 等平行命令家族，UX 走向"一个管理器"的设计共识。 |
| [#4684](https://github.com/Hmbown/CodeWhale/issues/4684) | `danger-full-access` 未禁用 tools 层 workspace 边界检查 | OPEN | 2 | 与全局 skill 访问直接相关，sandbox 与 tools 层语义不一致的代表性 bug。 |
| [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) | **[stop-ship]** TUI: `codew`/`codewhale` 在干净终端启动即退出 | OPEN | 0 | 标记为 stop-ship，v0.9.1 发布前必须解决的最严重缺陷。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 要点 |
|---|---|---|---|
| [#4675](https://github.com/Hmbown/CodeWhale/pull/4675) | Integrate CodeWhale v0.9.1 runtime and release surface | CLOSED | **v0.9.1 集成主干**：runtime 简化、空 Work 修复、公开 release 收口，并定稿 TUI 色阶语法（composer 模式冷色 / shell 权限暖色呼应）。 |
| [#4695](https://github.com/Hmbown/CodeWhale/pull/4695) | feat(skills): 默认 CodeWhale Skill 包（bundled v5） | CLOSED | 交付 #4691：interview/plan/implement/debug/test/review/security-review/simplify/verify/research/fr 等端到端技能集合。 |
| [#4693](https://github.com/Hmbown/CodeWhale/pull/4693) | fix(tui): Work 摘要生命周期、可执行标题、顶部层级 | CLOSED | 修复 #4688/#4700/#4702 三个 release-blocker：Recent-only 摘要 4s 过期、可操作标题、顶部仅保留 active Todos + Sub-agents。 |
| [#4679](https://github.com/Hmbown/CodeWhale/pull/4679) | feat(skills): 统一 `/skills` 管理器 + audit + owned mutations | CLOSED | 实现 #4650：跨项目/全局/兼容根目录的发现、审查、安装、更新、移除、信任一体化。 |
| [#4711](https://github.com/Hmbown/CodeWhale/pull/4711) | fix(tui): v0.9.1 chrome 聚焦 todos 与 agents | CLOSED | 顶部条改为可拖拽分隔条；composer 权限/mode 轨道采用主题原生色（呼应 #4642）。 |
| [#4694](https://github.com/Hmbown/CodeWhale/pull/4694) | fix(kimi): K3 模型 ID 交叉配对 fail-closed | CLOSED | 关闭 #4687：base URL + model ID 作为同一路由身份，两类配对 fail-closed。 |
| [#4696](https://github.com/Hmbown/CodeWhale/pull/4696) | feat(tui): 发布 `/uwu` 主题 | CLOSED | 别名 `owo`、`kawaii`；空状态鲸鱼采用 soft-classic 标记，仅色相

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*