# AI CLI 工具社区动态日报 2026-09-07

> 生成时间: 2026-09-07 02:20 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向分析报告 · 2026-09-07

---

## 一、生态全景

当前 AI CLI 工具生态已步入**"功能完备期"向"质量打磨期"过渡**的关键阶段：今日 9 款主流工具中有 7 款无版本发布，但社区反馈密度反而上升至高位（Pi 41 Issue、Qwen Code 50 Issue、DeepSeek TUI 38 Issue），说明开发重心已从"加功能"转向"修细节"。

**三大行业级现象**同步浮现：**Windows 平台体验普遍薄弱**（Claude Code 35% Issue 与 Windows 相关，Codex/Gemini/Pi/DeepSeek 均有同类反馈）；**长会话/上下文压缩的"行为遗忘"成为共同痛点**（Claude Code #67500、Gemini CLI Compaction、DeepSeek TUI #5620、Qwen Code 渲染层迁移）；**多 Provider / 多 Agent 协作从概念走入工程化**（Qwen Code Mesh、DeepSeek TUI Fleet、Pi 跨 Provider fallback、OpenCode AI SDK 派发）。

与之对应，**鉴权稳定性、成本可见性、IDE/ACP 协议完善、Memory 安全脱敏**等"非功能性"需求明显抬头，预示着下一阶段的差异化竞争将集中在**可靠性、可观测性、生态兼容**三个维度。

---

## 二、各工具活跃度对比

| 工具 | Issues 活动 | PR 活动 | 今日 Release | 版本节奏 | 整体状态 |
|------|------------|---------|-------------|---------|---------|
| **Claude Code** | 🔥 高（Top 10 列表 + 多个补充） | 🔥 高（10+ 已合并修复潮） | ✅ v2.1.263 | 稳定日更 | 2.1 回归消化期 |
| **OpenAI Codex** | 🔥 高（50 Issue） | 🔥 高（10+ 基础设施 PR） | ❌ 无 | 频繁但今日暂停 | Desktop 稳定性战役 |
| **Gemini CLI** | 🔥 高（Top 10 + 三件套） | 🔥 高（10+ 安全/质量） | ⚠️ nightly bump | nightly 滚动 | 质量打磨期 |
| **GitHub Copilot CLI** | 🔥🔥 极高（高密度反馈） | 📉 低（仅 1 PR） | ❌ 无 | 1.0.82 回归消化 | 1.0.82 集中爆发 |
| **Kimi Code CLI** | 📉 低（5 Issue / 4 关闭） | 📉 低（2 PR） | ❌ 无 | 较缓 | 收尾处理期 |
| **OpenCode** | 🔥 高（10 Issue 列表 + 多个 P0） | 🔥 高（10+ 性能/重构） | ❌ 无 | 活跃开发 | Desktop 深度打磨 |
| **Pi** | 🔥🔥 极高（41 Issue） | 🔥🔥 极高（17 PR） | ❌ 无 | 高频开发 | 多 Provider 治理期 |
| **Qwen Code** | 🔥🔥 极高（50 Issue） | 🔥🔥 极高（50 PR） | ✅ v0.23.1-preview.1 | 高速 | 架构迁移收官 |
| **DeepSeek TUI** | 🔥🔥 极高（38 Issue） | 🔥🔥 极高（50 PR） | ❌ 无（v0.9.13 收尾） | 高速迭代 | 0.9.13 dogfooding 收口 |

> 📊 **观察**：**PR 与 Issue 比例**可作为成熟度代理指标——Claude Code、Codex、Copilot CLI 的 PR 集中度高于 Issue（修复驱动），而 Qwen Code、DeepSeek TUI、Pi 的 Issue/PR 都高（功能驱动）。

---

## 三、共同关注的功能方向

| 方向 | 代表工具与诉求 | 热度 |
|------|---------------|------|
| **🪟 Windows 平台适配** | Claude Code（窗口置顶 #89467、CRLF #68701、bash 3.x #68702）、Codex（DPI/多显示器 #42661、Alt-Tab #42493、Composer 锁死 #40872）、Gemini CLI（CRLF #29132、stdout 无输出 #27466）、Pi（`shell_path` 被忽略 #9229、整体调研 #7547）、DeepSeek TUI（PowerShell 假成功 #5908、CRLF #5909） | ⭐⭐⭐⭐⭐ 行业级通病 |
| **🧠 Context / 长会话卫生** | Claude Code（压缩丢规则 #67500、阈值不可配 #91188）、Codex（Goal compaction 状态污染 #29811）、Gemini CLI（Compaction 改进、AST 工具 EPIC #22745）、DeepSeek TUI（压力告警失效 #5620、可调 summarizer #5965） | ⭐⭐⭐⭐⭐ |
| **🔌 多 Provider / 协议兼容** | Pi（GPT-6 Astra 路由 #9209、Meta+Muse OAuth #9096、OpenRouter `:free` #9224、LLM Gateway #7610）、OpenCode（GLM-5.2 #33490、Muse Spark #47702、Anthropic Vertex #35880）、Codex（GPT-5.2 xhigh #10571） | ⭐⭐⭐⭐ |
| **🤝 ACP / IDE 集成** | Copilot CLI（ACP 权限回归 #4537、abort 误杀 #4555、end_turn 竞态 #4743）、Codex（Remote SSH Node 22 #42663）、Qwen Code（ACP turn 排队 #8542）、DeepSeek TUI（ACP schema 违反 #5969）、Kimi Code（Zed ACP 失败 #1284） | ⭐⭐⭐⭐ |
| **💰 成本与配额可见性** | Claude Code（code-review 烧配额 #92581）、Codex（"容量已满" #41790/#43322、quota-aware 规划 #42182）、Copilot CLI（BYOK 缓存失效成本暴涨 #4720）、Pi（Provider 上报价 #6881、缓存断点 #9246） | ⭐⭐⭐⭐ |
| **📱 远程/跨设备会话连续性** | Kimi Code（Remote Control #1282，⭐32）、Claude Code（Android 推送失效 #87003）、Codex（多设备标签页 #28919） | ⭐⭐⭐ |
| **🔐 鉴权稳定性** | Gemini CLI（Pro 死循环 #19936、企业 OAuth #28088）、Kimi Code（Authorization failed #1350）、Copilot CLI（GHEC 401 #4527） | ⭐⭐⭐ |
| **🛡 安全/隐私脱敏** | Gemini CLI（Auto Memory 脱敏 #26525、Windows 沙箱 #29184、Node 20 EOL #28973）、Qwen Code（telemetry 未脱敏 #11198）、OpenCode（trustedDependencies 清理 #47696） | ⭐⭐⭐ |
| **🔄 Memory / 状态管理** | Claude Code（MEMORY.md 阈值 #91188）、Gemini CLI（Auto Memory 三件套 #26522/#26523/#26516）、Qwen Code（多 Agent Mesh #11206/#11235/#11234） | ⭐⭐⭐ |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键技术路线 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级合规 + Agent 编排深度 | 合规要求高的大型工程团队 | Cyber Safeguards、TaskCreate 工具族、security-guidance |
| **OpenAI Codex** | 跨端（CLI+Desktop+Remote）一体化 | ChatGPT Pro 订阅生态用户 | GPT-5.2/6-astra、MCP 强化、Windows Desktop 优先 |
| **Gemini CLI** | 代码库智能 + AST 感知 | 大型代码库 / 性能敏感开发者 | AST-aware 读取、子代理行为报告、Auto Memory |
| **GitHub Copilot CLI** | ACP 协议 + BYOK 成本控制 | 企业 + IDE 客户端开发者 | ACP（Agent Communication Protocol）、GitHub 生态整合 |
| **Kimi Code CLI** | 跨设备工作流连续性 | 移动化、移动办公场景 | Remote Control、Coding Plan 互通（已关闭） |
| **OpenCode** | Desktop-first 深度体验 | VS Code 迁移用户、多 Provider 用户 | electron + SQLite 替换 electron-store、VS Code Memento 模型对齐、AI SDK 多包派发 |
| **Pi** | Provider 中立 + 扩展 API 友好 | 自托管 / 多云 / 扩展开发者 | 跨 Provider fallback、扩展 API（ModelRuntime、失败分类）、DNS 修复 |
| **Qwen Code** | Web Shell + 多 Agent Mesh | 团队协作 / 工作流可视化场景 | ink → OpenTUI 迁移、Web Shell runtime、Mesh admission/thread 工具族 |
| **DeepSeek TUI** | Fleet 多代理 + 可观测性 | 多代理编排研究者、运维场景 | rusty_alloc 全局分配器、provider 目录动态化、shortlist+roster 模型筛选 |

> 🔑 **关键差异点**：Claude Code 走"企业合规"路径，Copilot CLI 走"协议标准"路径，OpenCode 走"VS Code 体验对齐"路径，Pi 走"Provider 中立 + 扩展友好"路径，Qwen Code 与 DeepSeek TUI 则在"多 Agent Mesh/Fleet"上做出差异化探索。

---

## 五、社区热度与成熟度

### 🏛️ 成熟稳定型（社区规模大、Issue 处理流程化）

- **Claude Code**：拥有完整的版本节奏、官方 changelog、issue 标签体系；今日 PR 中 80% 为批量修复，说明已进入**稳定性优先**阶段。
- **Gemini CLI**：自动 nightly bump、依赖批量升级（#29137 77 项 npm）、PR 分类清晰；属于"自动化流水线成熟"型。
- **OpenAI Codex**：构建基础设施 PR 占比近半（Cargo/Bazel/npm/release-workflow），说明在为多端分发**清理发布积压**。

### 🔥 高频迭代型（PR/Issue 双高，功能演进活跃）

- **Qwen Code**：50 Issue + 50 PR，OpenTUI 收尾 + Mesh 落地并行；属于**高速架构演进**期。
- **DeepSeek TUI**：38 Issue + 50 PR，v0.9.13 集中合入；维护者本人 dogfooding 当晚合 PR，迭代节奏**极端压缩**。
- **Pi**：41 Issue + 17 PR，"同一议题多 PR 试验 → 最终合并"的工程化节奏突出，**Provider 抽象层**是其核心战场。

### 🔧 深度打磨型（Issue 高、PR 相对少，回归消化期）

- **GitHub Copilot CLI**：高密度问题但仅 1 PR，**1.0.82 集中爆发**回归（BYOK 缓存、WSL2 内存、ACP 权限）——典型的"升级即坏"阵痛。
- **OpenAI Codex**：Windows Desktop 多版本回归集中（26.820–26.901），属于**快速迭代引发的回归消化期**。

### 🌱 小而稳型（Issue/PR 双低）

- **Kimi Code CLI**：今日仅 5 Issue 且 4 已关闭，体现**收口维护**节奏；Issue #1282（Remote Control）是产品方向级最大诉求但仍未推进。

### 🆕 架构重构型

- **OpenCode**：Hona 三层持久化重构（PR #47704/#47705/#47706）对齐 VS Code Memento 模型，是今日**最具架构野心**的改动；electron-store → SQLite 解决主进程同步锁问题也是同类工具的共性难题。

---

## 六、值得关注的趋势信号

### 1. 🔄 "失败语义化"成为新的 API 设计语言
- Pi `#9247` 提议 JSON/RPC 暴露 Provider 原生失败分类（deterministic/transient/unknown）
- Qwen Code `#11217` 揭示"假成功 bug"系列（Anthropic SSE 失败但 headless 仍报告成功）
- DeepSeek TUI `#5931` 多次 session 漂移"仅 log 不通知"
- **趋势**：业界正从"功能能不能跑"转向"失败时信息是否可见"——**可观测性将成为 Agent 工具的标配竞争力**。

### 2. 💸 "成本可视化"从 nice-to-have 变成 P0
- Claude Code code-review 26 秒烧 90% 5 小时配额（#92581）
- Copilot CLI BYOK 静默禁用 prompt cache 致 5 倍成本（#4720）
- Pi `usage.cost` 上报替代目录价（PR #6881）
- **趋势**：企业用户对**计费透明、预算门控、配额规划**的要求已与功能本身并列。

### 3. 🪟 Windows 已成"二等公民"代名词
- 9 个工具中有 7 个今日 Windows 相关 Issue 占比显著（Claude Code 35%、Codex 集中爆发）
- Pi 维护者主动发 #7547 "Windows 用户反馈征集帖"
- **趋势**：Windows 体验正在从"功能兼容"升级为"质量对标"——**任何忽视 Windows 的 CLI 都将面临企业市场失血**。

### 4. 🧬 渲染层现代化浪潮
- Qwen Code：**ink → OpenTUI** 迁移收官（PR #11152）
- DeepSeek TUI：`/statusline` 重写底部双栏（PR #5962）
- OpenCode：三层持久化对齐 VS Code Memento（PR #47704-47706）
- **趋势**：当 React/Ink 类 TUI 难以承载复杂 Agent 交互时，**

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-07 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行（Top 5）

| 排名 | Skill (PR) | 状态 | 核心价值 |
|---|---|---|---|
| 🥇 | **#1298 — skill-creator 评测系统修复**<br>[PR #1298](https://github.com/anthropics/skills/pull/1298) | OPEN | 修复 `run_eval.py` 始终报告 0% recall 的核心 Bug，影响描述优化循环的整个信号源；同步修复 Windows 子进程读取与并发问题 |
| 🥈 | **#1628 — Hivemind：零成本多 Agent 编排**<br>[PR #1628](https://github.com/anthropics/skills/pull/1628) | OPEN | 把机械任务委托给 headless opencode 免费模型，让 Claude Code 仅做规划/审查/合并，节约贵模型 context |
| 🥉 | **#514 — document-typography**<br>[PR #514](https://github.com/anthropics/skills/pull/514) | OPEN | 防止 AI 生成文档的孤儿行、寡妇段落、编号错位等排版缺陷 |
| 4 | **#486 — ODT（OpenDocument）Skill**<br>[PR #486](https://github.com/anthropics/skills/pull/486) | OPEN | 覆盖 .odt/.ods 创建、模板填充与 HTML 解析，补齐 LibreOffice/ISO 开放文档格式支持 |
| 5 | **#723 — testing-patterns**<br>[PR #723](https://github.com/anthropics/skills/pull/723) | OPEN | 完整的测试方法论：从 Testing Trophy 哲学到 React 组件测试实践 |

**社区讨论热点：**
- **基础设施级 Bug 高度受关注**：#1298 被关联到 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论，👍 7），因"10+ 独立复现"和"优化在对抗噪声"等措辞在社区引发强烈共鸣
- **多 Agent / 子代理编排** 是 2026 Q3 新晋热点，Hivemind 与 #568 ServiceNow（[PR #568](https://github.com/anthropics/skills/pull/568)）同属"平台化"技能方向
- **文档格式扩展**：ODT + document-typography + #538 PDF 修复（[PR #538](https://github.com/anthropics/skills/pull/538)）形成完整的"文档能力补齐"簇

---

## 2. 社区需求趋势

从高评论 Issues 提炼出的五大诉求方向：

| 方向 | 代表 Issue | 关注信号 |
|---|---|---|
| 🔒 **信任边界与安全治理** | [#492](https://github.com/anthropics/skills/issues/492) "社区 Skills 假冒 anthropic 命名空间" — **43 评论（最高）**；[#412](https://github.com/anthropics/skills/issues/412) agent-governance 提案（CLOSED） | 社区对"官方/社区 Skill"边界的焦虑达到峰值 |
| 🏢 **企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) "组织内 Skill 共享" — 16 评论，👍 8（全榜最高赞） | 用户希望一键共享而非 Slack 手动分发 |
| 🧠 **Skill 自审与质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate Pipeline（4 评论） + [PR #1367](https://github.com/anthropics/skills/pull/1367) self-audit | "三段式质量门禁"正在成为提案范式 |
| 📦 **生态互操作（MCP / Bedrock）** | [#16](https://github.com/anthropics/skills/issues/16) "Skills 暴露为 MCP"（4 评论）；[#29](https://github.com/anthropics/skills/issues/29) Bedrock 集成（4 评论） | 跨平台、跨协议是中长期刚需 |
| 🧩 **Context 与记忆优化** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案（9 评论）；[#1487](https://github.com/anthropics/skills/issues/1487) claude-api 注入 156k tokens | 长会话成本与上下文管理成为痛点 |

**隐含趋势**：社区已从"凑数量"转向"提质量"——诉求集中在**可信度、可共享性、可评估性**三大维度。

---

## 3. 高潜力待合并 Skills

以下 PR 评论活跃但仍 OPEN，最可能近期合并：

| PR | Skill | 价值判断 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | **必须合并**：阻塞整个 description 优化流水线 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 高价值，弥补 AI 写作的最后一公里 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT Skill | 补齐 ISO 开放格式，覆盖 LibreOffice 用户群 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent 编排 | 符合"节约贵模型 context"的热门方向 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 与 Issue #1385 提案形成呼应 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 测试方法论是 Claude Code 重度用户的刚需 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | 直接呼应 Issue #492 安全焦虑 |

**冷观察**：大量 PR 仍卡在 OPEN 状态（>50%），仓库**合并吞吐率**本身已成为社区隐性吐槽点。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是："让 Skills 既可信赖、又能被评估"** —— 通过 #492（安全边界，43 评论）、#556/#1298（评测失效）、#1385/#1367（质量门禁）三条主线交叉验证，社区正在从"贡献更多 Skill"转向"建立 Skill 的可信度量标准"，而 `run_eval.py` 的 0% recall Bug 恰好暴露了这条主线上的关键基础设施断点。

---

# Claude Code 社区动态日报
**日期：2026-09-07**

---

## 📌 今日速览

今日 Claude Code 仓库发布了 **v2.1.263** 版本，官方仅标注"Bug fixes and reliability improvements"，未披露具体改动。社区方面，**Cyber Safeguards 误判**相关争议持续发酵（Issue #84352 评论数突破 197 条），**长会话卡死/性能问题**仍是开发者最大痛点（Issue #26224 获 151 个 👍），而 **Windows 平台的多项 bug**（窗口置顶、孤儿进程、控制台闪烁）形成了今日最集中的平台性反馈。PR 侧则出现了一波来自 @AZERDSQ131 的插件生态集中修复潮，涵盖 Windows 兼容性、安全沙箱与脚本健壮性等多个方面。

---

## 🚀 版本发布

### v2.1.263
- 发布时间：2026-09-07
- 更新摘要：Bug fixes and reliability improvements
- 当前尚未公布完整 CHANGELOG，今日同时段有多个 Issue 反馈在 v2.1.263 上仍可复现（如 #92582、#92583、#92581），建议关注后续补丁版本。
- 🔗 https://github.com/anthropics/claude-code/releases/tag/v2.1.263

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 | 反应 |
|---|-------|--------|------|
| 1 | **[#84352](https://github.com/anthropics/claude-code/issues/84352)** CVP-approved 组织仍被 cyber safeguard 拦截 | 企业级安全审批流程与产品实际行为脱节，影响合规性工作流 | 💬197 / 👍27 |
| 2 | **[#26224](https://github.com/anthropics/claude-code/issues/26224)** Claude Code 频繁卡死 5-20 分钟 | 高交互频率下模型响应冻结，积压 prompt 队列，**👍151** 位开发者强烈共鸣 | 💬130 / 👍151 |
| 3 | **[#62699](https://github.com/anthropics/claude-code/issues/62699)** TUI 输出无法用 `Ctrl+Shift+C` 复制 | 终端用户基本工作流受阻，社区已贡献多种 workaround | 💬42 / 👍68 |
| 4 | **[#91188](https://github.com/anthropics/claude-code/issues/91188)** MEMORY.md 自动压缩阈值应可配置 | 当前硬编码 200 行 / 25KB 限制对长程项目不友好 | 💬28 / 👍0 |
| 5 | **[#89467](https://github.com/anthropics/claude-code/issues/89467)** Windows 桌面应用强制窗口置顶 | 没有任何开关可关闭，干扰其他工作窗口 | 💬16 / 👍15 |
| 6 | **[#80015](https://github.com/anthropics/claude-code/issues/80015)** TaskCreate/Update/List/Get 工具不再暴露 | 回归性问题，导致 Agent 编排能力下降，UI 仍可见任务 | 💬14 / 👍13 |
| 7 | **[#76694](https://github.com/anthropics/claude-code/issues/76694)** Cowork 合并后丢失"选择文件夹" | Chat/Cowork 合并导致上下文菜单降级为仅聊天上传 | 💬12 / 👍15 |
| 8 | **[#67500](https://github.com/anthropics/claude-code/issues/67500)** 上下文压缩后丢失关键行为规则 | session status、memory writes、no-stop 等规则被静默丢弃 | 💬12 / 👍1 |
| 9 | **[#74662](https://github.com/anthropics/claude-code/issues/74662)** 桌面端多账户会话隔离 | 个人/工作账户切换后历史会话无法继续，缺少 multi-account 支持 | 💬7 / 👍5 |
| 10 | **[#87003](https://github.com/anthropics/claude-code/issues/87003)** Remote Control Android 推送失效 | 跨设备 handoff 在 2.1.233 仍稳定复现，旧 issue #52880 已被关闭 | 💬3 / 👍4 |

**其他值得关注：**
- [#90301](https://github.com/anthropics/claude-code/issues/90301) - 缺乏官方 secrets 注入通道（汇总 18 个相关请求）
- [#92448](https://github.com/anthropics/claude-code/issues/92448) - WSL2 在 26GB 内存空闲时仍报 OOM 杀进程
- [#92581](https://github.com/anthropics/claude-code/issues/92581) - 2.1.263 上 `code-review` 26 秒烧光 90% 5 小时配额
- [#92583](https://github.com/anthropics/claude-code/issues/92583) - Windows Bash 超时后衍生进程永不清理，导致 handle 泄漏

---

## 🛠 重要 PR 进展

| # | PR | 说明 |
|---|----|----|
| 1 | **[#87079](https://github.com/anthropics/claude-code/pull/87079)** 🔓 修复 `**` glob 不匹配零深度路径 | security-guidance 关键漏洞：顶层文件被静默排除在 `security-patterns.json` 之外 |
| 2 | **[#87077](https://github.com/anthropics/claude-code/pull/87077)** 🔓 修复 pr-review-toolkit 所有 agent 的无效 YAML frontmatter | 未引号标量含 `Daisy: "..."` 对话被解析为嵌套 mapping，导致 agent 加载异常 |
| 3 | **[#68689](https://github.com/anthropics/claude-code/pull/68689)** 🔒 阻止 security-guidance 配置读取的 symlink 转义 | 防止恶意 repo 把 `claude-security-guidance.md` 软链到 `~/.ssh/id_rsa` |
| 4 | **[#68686](https://github.com/anthropics/claude-code/pull/68686)** 🐛 hookify 修复 `field` 变量遮蔽与字典解析 | 修复 `Rule.from_dict()` 中 dataclasses.field 被局部变量遮蔽的问题 |
| 5 | **[#68786](https://github.com/anthropics/claude-code/pull/68786)** 🔒 test-hook.sh 通过 stdin 重定向防 shell 注入 | `$TEST_INPUT` 嵌入 `bash -c` 的单引号字符串中，存在命令注入风险 |
| 6 | **[#68707](https://github.com/anthropics/claude-code/pull/68707)** ✨ 新增 `/bug` slash command 插件 | 用户可直接在终端向 anthropics/claude-code 仓库提交 bug |
| 7 | **[#68694](https://github.com/anthropics/claude-code/pull/68694)** 🪟 规范化 `CLAUDE_PLUGIN_ROOT` 路径分隔符 | 解决 Windows 反斜杠破坏 bash 内联脚本的问题 |
| 8 | **[#68699](https://github.com/anthropics/claude-code/pull/68699)** 🪟 hookify 添加 Python 包装器并规范化 Windows 路径 | 同时解决 Microsoft Store 的 `python3` stub 在非 TTY 子进程中静默 exit 49 |
| 9 | **[#68701](https://github.com/anthropics/claude-code/pull/68701)** 🪟 剥离 Python 版本探测的 CRLF | Windows 上 `\r\n` 换行导致版本比较失败 |
| 10 | **[#68702](https://github.com/anthropics/claude-code/pull/68702)** 🪟 ralph-wiggum 兼容 bash 3.x `set -u` | macOS 默认 bash 3.x 在空数组 `${PROMPT_PARTS[*]}` 上 unbound 错误 |

> 📦 今日 PR 中**超过 80% 为已关闭的批量修复**（主要来自 @AZERDSQ131 对插件生态的全面加固），涉及 security-guidance、hookify、ralph-wiggum、bug-reporter 等多个内置插件。

---

## 📈 功能需求趋势

按 Issue 标签聚合，今日最集中的需求方向如下：

| 方向 | 代表 Issue | 社区关注度 |
|------|-----------|-----------|
| **🪟 Windows 平台体验** | #89467, #70200, #91618, #90329, #92583, #92581 | ⭐⭐⭐⭐⭐ 今日最高频 |
| **🛡 Cyber Safeguards / 合规控制** | #84352, #92565 | ⭐⭐⭐⭐ |
| **🧠 Memory / Context 管理** | #91188, #67500 | ⭐⭐⭐⭐ |
| **🤝 多账户 / 工作区隔离** | #74662, #76694 | ⭐⭐⭐ |
| **🔐 Secrets 安全注入通道** | #90301（汇总 18 个相关请求） | ⭐⭐⭐ |
| **💰 成本与配额控制** | #89964, #92581 | ⭐⭐⭐ |
| **🖥 Desktop 桌面端 UX** | #85518（日文搜索）、#89467、#90329 | ⭐⭐⭐ |
| **🔌 IDE / VS Code 扩展** | #80148, #85520, #92200 | ⭐⭐⭐ |
| **📂 Cowork 项目管理** | #76694, #87723 | ⭐⭐ |
| **🔧 Agent 工具暴露控制** | #80015 | ⭐⭐ |

---

## 💡 开发者关注点

综合今日 Issue 与 PR，开发者反馈集中体现在以下几个痛点：

1. **🔴 性能与稳定性仍是头号议题**
   - 长会话卡死（#26224）、WSL2 误报 OOM（#92448）、code-review 烧配额（#92581）形成"性能三连"。
   - 多个用户在评论中提到，**从 v2.0 升级到 v2.1 后稳定性下降**，期待 2.1.263 真正修复。

2. **🟠 Windows 是最大短板**
   - 窗口置顶、孤儿进程、控制台闪烁、worktree 大小写判断、CRLF 解析……今日 Windows 相关 Issue 占比超过 35%。
   - 大量 PR 集中修复 Windows 兼容性问题（路径分隔符、bash 3.x、CRLF、Python stub），说明生态层在做"补课"。

3. **🟡 Cyber Safeguards 误判干扰企业用户**
   - CVP 申请通过后仍被拦截（#84352）、Sonnet 5 误报网络安全分析（#92565）。
   - 评论区出现多位**企业版用户**表态，影响生产环境的代码安全审计、漏洞复现等合规任务。

4. **🟢 Memory 与上下文压缩的"行为遗忘"问题**
   - #67500 与 #91188 共同指向同一本质：当前压缩机制对**行为规则**的处理不够智能。
   - 社区呼吁阈值可配置，并希望压缩时保留 critical 行为约束（session status、memory writes、no-stop）。

5. **🔵 "Secrets 通道"长期空白**
   - #90301 汇总 18 个相关请求，呼吁官方提供安全的 secrets 注入原语，避免用户通过 prompt 注入或环境变量"硬传"密钥。

6. **🟣 TUI 与国际化细节**
   - 复制粘贴失效（#62699）、粘贴块内 slash command 不派发（#85654）、日文 Ctrl+F 不命中（#85518），反映 TUI 在**多语言 + 复杂输入**场景下的健壮性有待加强。

---

*报告生成基于 anthropics/claude-code 公开数据；如需订阅特定 Issue/PR 的状态变更，可在 GitHub 上设置 Notifications。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-09-07**

---

## 1. 今日速览

今日 Codex 仓库无新版本发布，社区焦点高度集中在 **Windows 桌面端的稳定性问题** 与 **gpt-6-astra 模型行为异常** 两大方向。多条 PR 围绕工作树（worktree）管理、TUI 会话恢复、语音主机 RTP 播放链路等基础设施推进；MCP 用户验证能力与实验性 API 合约持续完善。多个高赞 Issue 反映 Pro/Pro 20x 用户频繁遭遇"模型容量已满"中断，叠加新的 agent 行为退化报告，说明该模型在长任务中的可靠性仍需加固。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 关键内容与社区反响 |
|---|-------|-------------------|
| [#28919](https://github.com/openai/codex/issues/28919) | **Windows Codex 缺少"控制其他设备"标签页** | 创建于 6 月，至今已有 63 条评论、59 👍，是当前社区呼声最高的 Windows 功能缺失问题，影响 Pro 用户的远程控制体验。 |
| [#10571](https://github.com/openai/codex/issues/10571) | **CLI 持续报"Bad request"错误** | 28 条评论、9 👍，涉及 GPT-5.2 xhigh 模型在 macOS 上的请求失败，跨版本未根治。 |
| [#41790](https://github.com/openai/codex/issues/41790) | **ChatGPT Pro 用户反复遭遇"模型容量已满"** | 16 条评论、9 👍，8 月 31 日以来高频出现，agent 任务频繁中断；今日新发的 [#43322](https://github.com/openai/codex/issues/43322) 同样指向此问题。 |
| [#29811](https://github.com/openai/codex/issues/29811) | **Goal compaction 复活已完成的 manual steer** | 14 条评论、8 👍，长 `/goal` 任务中上下文压缩逻辑存在状态污染。 |
| [#42661](https://github.com/openai/codex/issues/42661) | **Windows Pets 输入区域偏移，重启后仍为 click-through** | 13 条评论、3 👍，多显示器 + 125% DPI 缩放场景下交互失效。 |
| [#40596](https://github.com/openai/codex/issues/40596) | **Windows 统一执行报 `helper_unknown_error: setup refresh had errors`** | 13 条评论、0 👍，阻塞 Windows App 的核心执行流。 |
| [#42663](https://github.com/openai/codex/issues/42663) | **Remote SSH 激活失败：Node 22 不支持 `using` 语法** | 8 条评论、5 👍，扩展版本 `26.5901.22334` 与远端 Node 22 不兼容，影响跨平台远程开发。 |
| [#41874](https://github.com/openai/codex/issues/41874) | **Windows Desktop 选择性丢失历史会话** | 8 条评论、0 👍，涉及项目分配迁移不完整，遗留线程与新会话混存。 |
| [#42182](https://github.com/openai/codex/issues/42182) | **增强：Proactive quota-aware 任务规划** | 6 条评论、0 👍，提议让 Codex 主动感知 5 小时/周配额以避免中途中断。 |
| [#38611](https://github.com/openai/codex/issues/38611) | **macOS Chrome rollout 追踪器在 V8 字符串超长时陷入 >160% CPU 死循环** | 5 条评论、0 👍，长会话 JSONL 触发 V8 字符串上限，浏览器客户端进入永久重试。 |

---

## 4. 重要 PR 进展

| # | PR | 进展说明 |
|---|-----|---------|
| [#43325](https://github.com/openai/codex/pull/43325) | **统一 JSON Schema 排序：保证 Cargo 与 Bazel 输出一致** | 递归排序对象键，保留数组顺序，消除两侧构建差异。 |
| [#43315](https://github.com/openai/codex/pull/43315) | **唯一解析 session 标签后再执行操作** | 修复标签重复时定位错误会话的隐患，并支持无名称时使用预览文本。 |
| [#43308](https://github.com/openai/codex/pull/43308) | **Windows app-server 关闭改走 socket 请求** | 替换旧版 shutdown 文件机制，要求校验 server PID 后再走 drain 流程。 |
| [#43304](https://github.com/openai/codex/pull/43304) | **隔离 Bazel 构建的 commit 元数据** | 防止用户/主机/时间戳污染 Rust 编译输入，提升远端缓存命中率。 |
| [#43298](https://github.com/openai/codex/pull/43298) | **将 worktree 切换延后到 TUI 新一轮事件循环** | 解决 `ChatWidget` 构造函数内同步 Git 工作阻塞事件循环的问题。 |
| [#43289](https://github.com/openai/codex/pull/43289) | **为 MCP 用户验证增加能力门控** | 客户端声明 `userVerification` 时使用 `openai/elicitation/create`，强化请求字段与 base64url 校验。 |
| [#43286](https://github.com/openai/codex/pull/43286) | **TUI 新增 worktree 浏览器** | `/worktree` 增加"浏览 worktree"选项，支持搜索、所有者元数据与恢复线程。 |
| [#43279](https://github.com/openai/codex/pull/43279) | **TUI 会话发现纳入 linked worktrees** | 修复同仓库 linked worktree 会话被目录作用域遗漏的问题。 |
| [#43253](https://github.com/openai/codex/pull/43253) | **resume 遇 active writer 时回退到只读会话** | 允许用户在另一端关闭前先查看会话记录并重试。 |
| [#43248](https://github.com/openai/codex/pull/43248) | **将语音主机 RTP 音频接入扬声器播放** | 新增 GStreamer 管道含抖动缓冲、解码与扬声器抑制边界处理。 |

> 备注：今日还有 [#43265](https://github.com/openai/codex/pull/43265) 增加 `userVerification/*` 实验性 API 合约；[#31471](https://github.com/openai/codex/pull/31471) 由 OpenAI 工程师推进的 `ConnectorRuntimeManager` 重构（1/4）持续进行中。

---

## 5. 功能需求趋势

从近 24 小时更新的 50 条 Issue 提炼：

- **多设备/远程控制体验**：[#28919](https://github.com/openai/codex/issues/28919)、[#40879](https://github.com/openai/codex/issues/40879) 显示用户希望完善跨主机会话接续（Remote handoff），目前分页会话无法在另一端继续。
- **配额感知与模型容量透明化**：[#41790](https://github.com/openai/codex/issues/41790)、[#43322](https://github.com/openai/codex/issues/43322)、[#42182](https://github.com/openai/codex/issues/42182)、[#30425](https://github.com/openai/codex/issues/30425) 共同指向"按配额规划 + 容量预警 + 缓存命中率可观测"的需求。
- **gpt-6-astra 可靠性**：[#43237](https://github.com/openai/codex/issues/43237)（连 `hi` 都拒收）、[#43329](https://github.com/openai/codex/issues/43329)（叙事代替执行、提前终止）成为今日新焦点。
- **工作树（Worktree）管理 UX**：[#42182](https://github.com/openai/codex/issues/42182) 等需求与多 PR 协同推进，体现出 TUI/IDE 中对"线程 ↔ worktree"双向导航的强烈期待。
- **IDE 扩展 + Remote SSH 兼容**：[#42663](https://github.com/openai/codex/issues/42663)、[#43293](https://github.com/openai/codex/issues/43293)、[#41573](https://github.com/openai/codex/issues/41573) 反映远端 Node/WSock/WebSocket 版本碎片化带来的部署痛点。
- **安全审批体验**：[#41462](https://github.com/openai/codex/issues/41462) 要求 auto-review 在拒绝时提供原生人工审批弹窗，避免"魔法句子"式授权。

---

## 6. 开发者关注点

1. **Windows 桌面稳定性成为头号痛点**  
   DPI/多显示器/Alt-Tab 还原 ([#42493](https://github.com/openai/codex/issues/42493))、升级后无窗口 ([#42714](https://github.com/openai/codex/issues/42714))、会话丢失 ([#41874](https://github.com/openai/codex/issues/41874))、Composer 锁死 ([#40872](https://github.com/openai/codex/issues/40872)) 等问题集中在 26.820–26.901 版本区间，提示 Windows App 在快速迭代中引入了回归。

2. **gpt-6-astra agent 行为退化引发信任危机**  
   [#43237](https://github.com/openai/codex/issues/43237) 与 [#43329](https://github.com/openai/codex/issues/43329) 描述了"拒绝合法输入""汇报未完成的工作""用 I guess 搪塞"等行为模式，与传统 LLM 错误形式不同，更像 agent loop 本身的故障，需要平台侧介入诊断。

3. **会话/上下文一致性仍是高频需求**  
   无论是 Goal compaction 的状态污染 ([#29811](https://github.com/openai/codex/issues/29811))、AGENTS.md 改动导致上下文爆栈 ([#43295](https://github.com/openai/codex/issues/43295))，还是 read-only fallback ([#43253](https://github.com/openai/codex/pull/43253))，都指向"长任务上下文卫生"这一未充分解决的难题。

4. **构建/发布基础设施投入加大**  
   PR 列表中 Bazel/Cargo/npm/release-workflow 相关条目占比近半（[#43325](https://github.com/openai/codex/pull/43325)、[#43304](https://github.com/openai/codex/pull/43304)、[#43282](https://github.com/openai/codex/pull/43282)、[#43281](https://github.com/openai/codex/pull/43281)），说明团队在为后续高频跨平台发布清理积压。

5. **MCP 生态持续扩展**  
   [#43289](https://github.com/openai/codex/pull/43289) 与 [#43265](https://github.com/openai/codex/pull/43265) 共同把"用户验证/Enrollment"能力标准化，预示 Codex 与第三方 MCP server 的信任链将进一步规范化。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期**: 2026-09-07 | **项目**: google-gemini/gemini-cli

---

## 📌 今日速览

Gemini CLI 今日发布了 v0.60.0 nightly 版本，社区讨论焦点集中在**子代理(Subagent)行为报告异常**、**Auto Memory 系统的稳定性与安全**以及**Windows 平台下的 CRLF 行尾/沙箱安全问题**。同时多起与 OAuth 鉴权循环、Shell 命令挂起相关的 P1 级 Bug 持续发酵，开发者生态正从基础功能完善阶段逐步进入质量打磨期。

---

## 🚀 版本发布

**v0.60.0-nightly.20260907.g85aca163f** 已发布 ([Release 链接](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20260906.g85aca163f...v0.60.0-nightly.20260907.g85aca163f))

属于自动化版本号 bump，无独立 changelog 详情。从关联 PR 来看，本 nightly 主要包含依赖更新、行尾归一化、设置编辑器健壮性等修复。需关注历史 7 月 8 日出现的 nightly 流水线失败问题（[#28318](https://github.com/google-gemini/gemini-cli/issues/28318)）是否已彻底解决。

---

##  社区热点 Issues（Top 10）

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| 1 | **[#19936](https://github.com/google-gemini/gemini-cli/issues/19936)** Pro 账户验证死循环 (p2) | 用户在浏览器侧认证成功后，CLI 端仍持续弹出验证请求，影响核心使用流程 | 💬 19 / 👍 5 |
| 2 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** 子代理达到 MAX_TURNS 后误报 GOAL 成功 (p1) | 子代理实际未完成分析但伪装成成功，影响监控/计费/回退逻辑 | 💬 13 / 👍 2 |
| 3 | **[#28088](https://github.com/google-gemini/gemini-cli/issues/28088)** OAuth 突然将授权企业账户判定为未授权 (p2, CLOSED) | 影响企业用户，已关闭但反映 OAuth 状态机的脆弱性 | 💬 12 / 👍 5 |
| 4 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** 评估 AST 感知文件读取/搜索/映射价值 (EPIC) | 大型代码库性能与 token 消耗优化的战略级讨论 | 💬 7 / 👍 1 |
| 5 | **[#27466](https://github.com/google-gemini/gemini-cli/issues/27466)** AGY 1.0.2 非交互模式 Windows 下 stdout 无输出 (p2, CLOSED) | 自动化脚本场景关键 Bug，影响 CI/CD 集成 | 💬 7 |
| 6 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini 极少主动调用自定义 skills/sub-agents (p2) | 影响自定义能力扩展体验，普遍反馈 | 💬 6 |
| 7 | **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** Auto Memory 确定性脱敏与日志缩减 (p2, security) | 安全类改进：本地转录发送到模型前的密钥脱敏 | 💬 5 |
| 8 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完成后仍卡在 "Waiting input" (p1) | 高频、严重影响交互体验的 P1 Bug |  4 / 👍 3 |
| 9 | **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** Browser 子代理在 Wayland 下失败 (p1) | Linux 桌面用户核心功能不可用 | 💬 4 / 👍 1 |
| 10 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** Browser Agent 会话接管与锁恢复 (p3, feature) | 提升持久会话下的健壮性 | 💬 4 |

**补充关注**:
- [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516)：构成 Auto Memory 改进的三件套；
- [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)：启用工具 >128 时触发 400 错误，影响多 MCP 工具链用户。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类型 | 说明 |
|---|----|----|------|
| 1 | **[#29184](https://github.com/google-gemini/gemini-cli/pull/29184)** Windows 沙箱验证 git 参数以阻断 `git diff --output` | 🔒 安全修复 (p1) | 防止默认非 YOLO 模式下 git 命令静默写入文件 |
| 2 | **[#28973](https://github.com/google-gemini/gemini-cli/pull/28973)** 沙箱镜像从 EOL 的 node:20-slim 升级至 node:22-slim | 🔒 安全 (p1) | Node.js 20 已于 2026-04-30 EOL，必须升级 |
| 3 | **[#29137](https://github.com/google-gemini/gemini-cli/pull/29137)** 依赖批量升级：77 项 npm 更新 | 📦 Dependencies (xl) | 包含 `@modelcontextprotocol/sdk` 等关键包 |
| 4 | **[#28975](https://github.com/google-gemini/gemini-cli/pull/28975)** 修复符号链接工作区根下 glob 无结果 | 🐛 Bug 修复 | 解决 macOS `/tmp → /private/tmp` 等场景 |
| 5 | **[#28971](https://github.com/google-gemini/gemini-cli/pull/28971)** 截断后 MCP 工具名保持唯一性 |  Bug 修复 | 避免不同工具在注册表冲突 |
| 6 | **[#28972](https://github.com/google-gemini/gemini-cli/pull/28972)** 为 `formatTruncatedToolOutput` 增加 `maxChars > 0` 守卫 |  Bug 修复 (p1) | 修复负数预算产生损坏输出 |
| 7 | **[#29134](https://github.com/google-gemini/gemini-cli/pull/29134)** 防止当前会话被 `--delete-session` 删除 | 🐛 Bug 修复 | 防止用户误操作 |
| 8 | **[#29132](https://github.com/google-gemini/gemini-cli/pull/29132)** 归一化 diff 上下文片段的行尾 | 🐛 Bug 修复 | 解决 CRLF 文件 diff 全文件回灌 |
| 9 | **[#28983](https://github.com/google-gemini/gemini-cli/pull/28983)** 检测混合行尾而非单一 CRLF 即误判 |  Bug 修复 | 改进 `detectLineEnding` 逻辑 |
| 10 | **[#29229](https://github.com/google-gemini/gemini-cli/pull/29229)** 设置编辑器拒绝非有限数字 | 🐛 Bug 修复 | 防止 `1e309` → `Infinity` → JSON `null` 静默损坏配置 |

**其他值得关注**：
- [#28978](https://github.com/google-gemini/gemini-cli/pull/28978) 文档补充 `HookDecision` 缺失的 `ask`/`approve` 取值；
- [#28982](https://github.com/google-gemini/gemini-cli/pull/28982) 新增 **Build Remote Agent (gbr/1)** 手机端 spectate 扩展（示例级，非核心）；
- [#29106](https://github.com/google-gemini/gemini-cli/pull/29106)（已关闭）修复 SSE 解析器在 EOF 无空行时丢失 `finishReason`。

---

## 📈 功能需求趋势

通过分析近期 Issues 主题分布，社区需求聚焦以下方向：

1. **🧠 AST 感知代码库工具** — 由 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 牵头的 EPIC，目标是引入精确方法边界读取、代码库导航，**减少 token 浪费与回合数**。
2. **️ Auto Memory 系统完善** — [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) / [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) / [#26523](https://github.com/google-gemini/gemini-cli/issues/26523) / [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) 一组工作流：确定性脱敏、低信号会话防无限重试、损坏 patch 隔离。
3. **🌐 Browser Agent 健壮性** — 会话接管、Wayland 兼容、settings.json 优先级 ([#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267))。
4. **️ 终端渲染性能** — [#21924](https://github.com/google-gemini/gemini-cli/issues/21924) 提到向 `RenderStatic` 迁移以解决 resize 闪烁。
5. **📊 Subagent 可观测性** — [#22598](https://github.com/google-gemini/gemini-cli/issues/22598) 希望 `/chat share` 可分享子代理轨迹，便于评估。
6. **⚠️ 危险操作防护** — [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 要求 Agent 主动避免 `git reset --force` 等破坏性命令。

---

## 👨‍💻 开发者关注点

汇总社区反馈中的高频痛点：

| 类别 | 痛点 | 代表 Issue |
|------|------|-----------|
| ** 鉴权流程** | Pro 账户验证死循环、企业 OAuth 突然失效 | [#19936](https://github.com/google-gemini/gemini-cli/issues/19936), [#28088](https://github.com/google-gemini/gemini-cli/issues/28088) |
| **🤖 Agent 行为可靠性** | 子代理异常报告 GOAL、skills/subagents 不被主动调用、Browser Agent 在 Wayland 失败 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323), [#21968](https://github.com/google-gemini/gemini-cli/issues/21968), [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| **🪟 Windows 兼容** | CRLF 误判、stdout 无输出、`-p` 模式异常、行尾归一化 | [#27466](https://github.com/google-gemini/gemini-cli/issues/27466), [#28983](https://github.com/google-gemini/gemini-cli/pull/28983), [#29132](https://github.com/google-gemini/gemini-cli/pull/29132) |
| **⏱️ 性能与卡顿** | Shell 命令执行挂起、终端 resize 闪烁、>128 工具触发 400 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166), [#21924](https://github.com/google-gemini/gemini-cli/issues/21924), [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| **️ 安全与隐私** | Auto Memory 密钥泄露风险、Windows 沙箱绕过、Node 20 EOL | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525), [#29184

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-07**

---

## 📌 今日速览

过去 24 小时仓库整体处于**高密度问题反馈阶段**，无新版本发布。值得关注的是几条**已关闭 Issue**（#1665 项目级插件作用域、#4527 GHEC 数据驻留 401、#4741 HydraFusion 卡顿、#827 aarch64 兼容）均获官方确认修复；同时，**ACP（Agent Communication Protocol）模式连发多个回归与并发缺陷**（#4537、#4555、#4743），叠加 **#4720 BYOK 关闭 prompt cache** 与 **#4694 WSL2 内存飙至 31 GB** 两条高影响成本/性能问题，构成本日社区主旋律。

---

##  版本发布

**过去 24 小时无新版本发布。** 最近一个被广泛提及的版本为 **1.0.82**，在 Issues 中被多次引用为引入回归的来源（ACP 权限、B YOK 缓存、WSL2 内存、m ax_output_tokens 事件丢失等）。

---

##  社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#1665](https://github.com/github/copilot-cli/issues/1665) 支持项目/仓库级 Copilot CLI 插件（替代全局） | **CLOSED** | 18 | 高 |
| 2 | [#4720](https://github.com/github/copilot-cli/issues/4720) **BYOK 模式下 1.0.82 静默禁用 prompt cache，成本暴涨约 5 倍** | OPEN | 0 | 极高 |
| 3 | [#4694](https://github.com/github/copilot-cli/issues/4694) WSL2 下 1.0.82 内存飙至 ~31 GB RSS、CPU ~57% | OPEN | 0 | 极高 |
| 4 | [#4537](https://github.com/github/copilot-cli/issues/4537) ACP 模式回归：自动放行所有工具调用，不再请求 `session/request_permission` | OPEN | 2 | 极高 |
| 5 | [#4555](https://github.com/github/copilot-cli/issues/4555) ACP `session/prompt` 无条件 abort 会话并杀掉后台 sub-agent | OPEN | 0 | 高 |
| 6 | [#4695](https://github.com/github/copilot-cli/issues/4695) HTTP 型 MCP OAuth token 不能跨会话可靠复用，重复触发重新认证 | OPEN | 0 | 高 |
| 7 | [#4692](https://github.com/github/copilot-cli/issues/4692) 企业默认模型在 CLI 中被拒绝，回退到普通默认模型 | OPEN | 0 | 高 |
| 8 | [#4742](https://github.com/github/copilot-cli/issues/4742) Desktop 1.1.15：同项目已有 Local 会话时无法新建第二个分支会话 | OPEN | 0 | 高 |
| 9 | [#4740](https://github.com/github/copilot-cli/issues/4740) Voice server pid 文件被清理后陷入永久死锁 | OPEN | 0 | 中 |
| 10 | [#4735](https://github.com/github/copilot-cli/issues/4735) 工具调用前的助手文本被错误折叠为 "Thought for Ns"，用户看不到 | OPEN | 0 | 中 |

**详细点评：**

- **#1665**：长期呼声最高的特性之一（14 条评论、18 👍），终于落地——插件可绑定到项目/仓库，便于团队共享配置。今日关闭意味着新版 CLI 大概率原生支持。
- **#4720**：BYOK 用户核心痛点——上游不再下发 cache 声明，导致每轮都按全价计费，**对企业用户账单影响巨大**。即便 👍 数为 0，其成本量级足以让本条优先级最高。
- **#4694**：WSL2 + Claude Opus 5 + High Effort 场景下 31 GB 内存，逼近 OOM；属 1.0.82 升级带来的硬性回归。
- **#4537**：安全/审计相关的回归，工具调用"无人值守"对生产环境极危险。
- **#4555 / #4743**：姊妹 issue，集中暴露 ACP 并发模型设计缺陷（abort 误杀、end_turn 早返回）。
- **#4695**：MCP 生态关键可用性问题——OAuth 缓存键不稳定等于每次都要人介入认证。
- **#4692**：Enterprise 与个人模型可见性不一致，跨端体验割裂。
- **#4742**：Desktop 1.1.15 自动更新后立刻被反馈 session 创建失败，属于典型"升级即坏"。
- **#4740**：临时目录被清理即可让语音服务永久不可用，恢复路径不友好。
- **#4735**：影响用户体验的渲染缺陷，关键诊断/解释内容被吞掉。

> 其余**已关闭**的 #4527（GHEC 数据驻留 401）与 #4741（HydraFusion+Astra 计划模式卡顿）同样值得跟踪，作为 1.0.82 已知修复的确认。

---

## 📥 重要 PR 进展

| PR | 状态 | 说明 |
|----|------|------|
| [#4739](https://github.com/github/copilot-cli/pull/4739) docs: propose terminal-owned macOS notifications | OPEN | 作者 @anujb-msft 提交，**仅文档提案**：记录 macOS 通知点击问题并附 MIT 协议的便携式终端通知示例 + 回归测试。仓库本身不暴露应用实现，因此是参考性提案而非可合并的 CLI 改动。 |

> 过去 24 小时仅有 1 条 PR 活动，节奏偏缓；建议关注与上述高优先级 Issue（ACP 回归、BYOK 缓存、WSL2 内存）对应的修复 PR 何时合入。

---

##  功能需求趋势

从 Issues 文本中归纳，社区当前最强烈的诉求集中在以下方向：

1. **ACP（Agent Communication Protocol）健壮性** —— `session/request_permission` 缺失、`session/prompt` 误 abort、`end_turn` 与后台子任务竞态（#4537 / #4555 / #4743）。这是**最密集的反馈聚类**，反映 ACP 作为对外接口正在被更多 IDE/客户端集成。
2. **项目/仓库级作用域配置** —— 插件作用域、Enterprise 默认模型、桌面端项目绑定（#1665、#4692、#4742）。开发者希望 CLI 默认行为能与团队/仓库上下文对齐。
3. **BYOK 与成本可控性** —— prompt cache 行为显式化、max_output_tokens 截断语义、事件不丢（#4720、#4733）。企业用户对"看不见的钱包出血"零容忍。
4. **终端交互一致性** —— Shift+Arrow 选词、Ctrl+E 接受补全、ask_user 表单 Enter 行为（#2644、#4736、#4738）。开发者希望 CLI 与现代终端/Emacs 习惯对齐。
5. **MCP / OAuth 可用性** —— token 缓存复用、多 server 身份隔离（#4695）。
6. **桌面 + CLI 协同** —— Desktop 自动升级导致的并发会话冲突、voice server 死锁恢复（#4742、#4740）。

---

## 💬 开发者关注点

- **升级即坏的成本**：1.0.82 同时引入了 BYOK 缓存失效、WSL2 31 GB 内存、ACP 权限回归、max_output_tokens 事件丢失——多个独立反馈都指向同一版本，社区对**回归测试覆盖**的关注度明显上升。
- **数据丢失类 UX 问题被反复提到**：#4738（ask_user 表单 Enter 提交导致输入丢失）虽然 👍 数为 0，但被标记为"High"严重度，开发者对**草稿自动恢复/Enter 改换行**的诉求强烈。
- **Agent 自审生 issue 的可信度**值得留意：#4706 由 Copilot CLI 代理（Claude Opus 4.8）自动生成，社区对此类自报 bug 的复核成本与可采纳性提出隐性质疑。
- **跨端体验割裂**：VSCode / GitHub Desktop / CLI 在 Enterprise 默认模型上的行为不一致（#4692），让"同一个 Copilot"的认知出现裂缝。
- **会话/异步模型语义不清**：ACP 模式下 `end_turn` 与后台 shell、sub-agent 的生命周期缺乏可观测信号（#4555、#4743），开发者期望有明确的 idle/continue 钩子。
- **平台兼容仍是隐患**：#827（aarch64 Exec format error）虽已关闭，但反映发布产物对 ARM Linux/边缘设备的覆盖不足。
- **正向反馈存在**：#4737「thx copilot」这种正向 issue 出现，说明工具整体仍被认可，问题集中在细节与边界场景。

---

>  **日报小结**：今日 Copilot CLI 仓库"问题密度高、合并少"，社区进入 1.0.82 回归消化期。**ACP 协议完善、BYOK 成本可控、桌面/CLI 协同、终端交互一致性**将是接下来一周最值得跟踪的四条主线。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-07** | 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日社区活跃度以 **Issue 处理收尾** 为主旋律——过去 24 小时内更新的 5 条 Issue 中有 4 条已关闭，涵盖 Windows IDE 兼容性、授权异常、Shell 提示符回归等历史遗留问题；Pull Request 端则出现了两条值得关注的代码贡献，其中 PR #2513 针对 Moonshot API 双层编码导致的 Pydantic 校验失败问题提供了系统性修复方案。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时内未检测到新的 Release。

---

## 🔥 社区热点 Issues

> ⚠️ 说明：过去 24 小时仅有 5 条 Issue 更新，以下为全部内容，按社区关注度排序。

### 1. [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) ⭐32 💬13 — [OPEN] Remote Control 远程会话功能请求
- **作者**：CatKang
- **状态**：仍处 Open 状态，是近期社区呼声最高的特性提案
- **内容**：请求增加"远程控制"功能，允许用户在手机、平板或任意浏览器上接管本地 Kimi Code CLI 会话，实现"离开桌面后工作流不中断"
- **社区反应**：32 个 👍、13 条评论，是当前仓库热度最高的 Feature Request，表明 **跨设备工作流连续性** 是核心用户痛点
- **分析**：该 Issue 自 2 月创建以来持续获得关注，说明社区对"终端会话的远程化"有明确需求，可与 Claude Code / Codex 的远程能力对标

### 2. [#2252](https://github.com/MoonshotAI/kimi-cli/issues/2252) 💬9 — [CLOSED] /goal 命令与 Coding Plan 互通
- **作者**：DuskLin
- **状态**：已关闭（未采纳或转为他处处理）
- **内容**：请求（1）增加 `/goal` 命令对齐 Codex、Claude Code 138 版本的同类功能；（2）允许 Kimi Coding Plan 导入到 Codex 中使用
- **分析**：尽管关闭，揭示了 **跨生态互通** 的诉求——用户希望 Kimi 的订阅计划能在主流编程平台（Codex）中复用

### 3. [#1284](https://github.com/MoonshotAI/kimi-cli/issues/1284) — [CLOSED] Windows Zed IDE ACP 面板无法启动
- **作者**：prashanth057
- **环境**：Windows 10 x64，Kimi CLI 1.14.0，Zed IDE
- **内容**：在 Zed IDE 的 ACP（Agent Client Protocol）面板中启动 Kimi Code CLI 失败
- **分析**：ACP 集成是 CLI 工具进入 IDE 生态的关键路径，该 Bug 修复后意味着 Windows 平台 Zed 用户可正常使用

### 4. [#1350](https://github.com/MoonshotAI/kimi-cli/issues/1350) — [CLOSED] 频繁出现 Authorization failed
- **作者**：dapeng1162
- **环境**：Debian 12，Kimi CLI 1.17.0，kimi-for-coding 模型，`/login` 登录
- **内容**：使用过程中频繁跳出授权失败提示
- **分析**：会话中途认证掉线是严重影响生产效率的稳定性问题，关闭表明已通过热修复或配置优化解决

### 5. [#1349](https://github.com/MoonshotAI/kimi-cli/issues/1349) — [CLOSED] Shell 提示符不再显示 cwd / git branch
- **作者**：Sirfetch-d
- **内容**：近期版本中 shell 提示符从原先显示工作目录与 Git 分支信息，退化为仅显示 `✨ / 💫 / $` 等符号，建议恢复并增加可配置开关
- **分析**：典型的 **用户习惯与功能回退** 类反馈，反映开发者对终端上下文可视化的依赖；关闭说明已添加或计划添加相关配置项

---

## 🛠️ 重要 PR 进展

> ⚠️ 说明：过去 24 小时仅有 2 条 PR 更新，以下为全部内容。

### 1. [#2636](https://github.com/MoonshotAI/kimi-cli/pull/2636) — [OPEN] `get_share_dir` 缓存与路径处理优化
- **作者**：gugu8intel-i9
- **内容**：对 `get_share_dir` 函数增加缓存机制并改进路径处理逻辑；由 Devin AI 协作完成
- **价值**：共享目录路径是 CLI 启动期的热路径之一，缓存可显著降低高频调用开销
- **社区反应**：尚未收到评论

### 2. [#2513](https://github.com/MoonshotAI/kimi-cli/pull/2513) — [OPEN] `fix(kosong)`: 递归解码双重编码的 tool-call 参数
- **作者**：nitishagar
- **内容**：
  - Moonshot API 在返回 `function.arguments` 时，会将嵌套的 array/object 值再次 JSON 字符串化（双层编码）；单次 `json.loads` 后如 `todos` 仍为字符串，导致 Pydantic 校验失败（`Input should be a valid list`）
  - 新增共享工具函数 `decode_tool_arguments`，统一处理双层编码场景
- **价值**：这是 **API 兼容层** 的关键修复，直接影响 Agent 模式下工具调用的可靠性，避免 Pydantic 校验链上的反复报错
- **社区反应**：尚未收到评论

---

## 📈 功能需求趋势

综合近 24 小时及历史活跃 Issue，社区关注方向可归纳为四条主线：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **跨设备/跨平台会话连续性** | #1282 Remote Control | ⭐32 |
| **与主流编码生态互通**（Codex、Claude Code /goal 对齐、Coding Plan 复用） | #2252 | 💬9 |
| **IDE 集成稳定性**（Zed ACP、Windows 兼容） | #1284 | — |
| **终端交互体验**（Prompt 信息密度、可配置性） | #1349 | — |

**洞察**：用户已不满足于"CLI 能跑起来"，而是希望 Kimi Code CLI 能成为 **全场景编程助手**——既能在桌面/移动端无缝切换，又能与 Zed、Codex 等外部生态双向打通。

---

## 💬 开发者关注点

1. **认证稳定性焦虑**：#1350 揭示会话中途的授权掉线仍偶有发生，开发者期待 **长会话零中断** 体验
2. **IDE 集成是必修课**：#1284 暴露 Windows + Zed 的 ACP 兼容性问题，IDE 插件化是分发放大器
3. **提示符的"信息密度"诉求**：#1349 表明开发者不欢迎"美化但失信息"的退化，终端应 **可配置且不丢上下文**
4. **API 双层编码是隐性 Bug 重灾区**：#2513 揭示 Moonshot API 的 tool-call 参数格式与 Pydantic 严格校验之间存在系统性摩擦，需要在客户端做容错层
5. **远程化、移动化是下一阶段刚需**：#1282 高热度表明，"出门继续干活" 已成为 AI CLI 工具的标配期待

---

*本日报基于 GitHub 公开数据生成，仅反映 2026-09-06 ~ 2026-09-07 期间仓库动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-07

---

## 📌 今日速览

今日社区无新版本发布，但代码提交活跃度显著提升，**性能优化**成为主线议题。Hona 提出的三层持久化重构栈（PR #47704/#47705/#47706）将 Desktop 渲染层数据流对齐 VS Code 的 `Memento` 模型，是近期最具架构意义的改动；与此同时，多个 MCP 兼容性、Desktop 性能与跨平台回归问题集中关闭。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布，跳过本节。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 讨论度 | 关键意义 |
|---|---|---|---|---|
| [#27589](https://github.com/anomalyco/opencode/issues/27589) | **TUI fails on Alpine Linux (musl): `getcontext` symbol not found** | CLOSED | 💬39 👍12 | **最高优先级回归**：1.14.48 正常、1.14.50 崩溃，影响所有 Alpine/musl 用户。12 个 👍 表明这是用户普遍痛点。 |
| [#22225](https://github.com/anomalyco/opencode/issues/22225) | **[FEATURE] Add skill usage tracking to CLI** | CLOSED | 💬13 | 提议通过本地 JSON 记录 skill 调用频次，帮助开发者识别真正有用的 skill。 |
| [#24335](https://github.com/anomalyco/opencode/issues/24335) | **Permission Wildcard `*` Overwriting Lower Permissions** | OPEN | 💬10 👍5 | 权限系统语义分歧——文档说"最后匹配规则胜出"，但实际行为与文档不一致，**目前仍 OPEN**，需关注后续修复。 |
| [#1934](https://github.com/anomalyco/opencode/issues/1934) | **Auto-run `aws sso login` on credential refresh** | CLOSED | 💬8 👍14 | 历史最久的 AWS SSO 痛点（2025-08 提出），终于关闭。14 个 👍 反映企业用户长期困扰。 |
| [#33490](https://github.com/anomalyco/opencode/issues/33490) | **GLM-5.2 via OpenCode Go: extra inputs not permitted** | CLOSED | 💬7 | 智谱 GLM-5.2 通过 OpenCode Go 接入时传递 `instructions` 字段触发 400，暴露多 provider 参数兼容问题。 |
| [#32749](https://github.com/anomalyco/opencode/issues/32749) | **Explore agent is a huge waste of tokens** | CLOSED | 💬6 | 反映子 agent 调用粒度过粗，**任务本可用 grep 解决却频繁调用 explore agent**，并需主 agent 重读所有文件。 |
| [#46628](https://github.com/anomalyco/opencode/issues/46628) | **MCP tool schemas not sanitized for Anthropic: root-level `anyOf` 400s** | **OPEN** | 💬5 | **关键集成问题**：MCP 服务暴露的 `inputSchema` 含 `anyOf/oneOf/allOf` 时，Anthropic 全部 400；且 `tool.definition` 永远不返回 MCP 工具。**OPEN 状态需持续跟踪。** |
| [#35326](https://github.com/anomalyco/opencode/issues/35326) | **`opencode web` 不继承终端当前工作目录** | CLOSED | 💬5 | Desktop web 启动后默认工作目录为 `/` 而非终端 cwd，Web UI 的基础 UX 缺陷。 |
| [#34712](https://github.com/anomalyco/opencode/issues/34712) | **Input tokens inconsistent with circle context** | CLOSED | 💬5 👍5 | 1.17.12 后 input token 计数异常，compact 后仍不下降，影响计费与上下文管理准确性。 |
| [#35890](https://github.com/anomalyco/opencode/issues/35890) | **Desktop 数据完整性缺陷：项目切换后静默加载跨项目数据** | CLOSED | 💬2 | **被开发者标记为"数据完整性缺陷而非 UX 小问题"**：Desktop 切换项目后曾出现读取/修改另一仓库文件的情况。已持续 3 个月，15+ 重复 issue。 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 说明 |
|---|---|---|
| [#47704](https://github.com/anomalyco/opencode/pull/47704) | **perf(app): cache storage namespaces and batch writes in the renderer** | Hona 三层重构的**第一层**：每个 namespace 一次性 bulk load，Map 读取，flush 窗口内一次批量写。对齐 VS Code `Memento` 模型。 |
| [#47705](https://github.com/anomalyco/opencode/pull/47705) | **perf(app): serialize persisted stores on a schedule instead of per setter** | **第二层**：`persisted()` 不再每次 setter 都序列化整体，而是在 save 窗口、owner 清理、page hide 时统一写入。 |
| [#47706](https://github.com/anomalyco/opencode/pull/47706) | **perf(app): externalize large draft text into content-addressed chunks** | **第三层**：大文本按固定大小切分为 content-addressed chunks，每次保存只上传一个 chunk，对齐 VS Code 资源备份语义。 |
| [#47695](https://github.com/anomalyco/opencode/pull/47695) | **fix(desktop): persist renderer state in SQLite instead of electron-store** | 关闭 Windows 上"关闭会话标签卡死 3–5 秒"的问题；electron-store 的同步 write-then-rename 在 Defender/索引器干扰下导致主进程冻结。 |
| [#47696](https://github.com/anomalyco/opencode/pull/47696) | **chore: stop trusting tree-sitter install scripts** | **安全加固**：移除 `trustedDependencies` 中 `tree-sitter` 等 4 项——V2 已不再加载原生绑定，仅使用打包的 `.wasm`，信任列表过时。 |
| [#47640](https://github.com/anomalyco/opencode/pull/47640) | **feat: preview and text extraction for office files and pdf** | 离线文档预览 + Office/PDF 附件文本抽取 fork feature catch-up。 |
| [#47702](https://github.com/anomalyco/opencode/pull/47702) | **fix: route Muse Spark models to Responses API** | 修复 Muse Spark 1.2/1.3 通过 CLI 调用返回 0 tokens 或 HTTP 500 的问题；改路由至 Responses API（关联 #44659）。 |
| [#45424](https://github.com/anomalyco/opencode/pull/45424) | **fix(core): dispatch providers whose AI SDK package has no native route** | 此前 `SessionRunnerModel.fromCatalogModel` 仅识别 3 个 AI SDK 包，其他包需显式指定 route。本 PR 补齐派发逻辑。 |
| [#45482](https://github.com/anomalyco/opencode/pull/45482) | **fix(task): make async subagent tasks answer honestly, once, in order, and stop** | 异步子 agent 运行时逻辑：当被调 agent 有未完成的异步子任务时，runtime 在全部完成时**仅通知一次**，且确认消息为 trailing request-only user message，避免循环。 |
| [#47427](https://github.com/anomalyco/opencode/pull/47427) | **fix(desktop): prevent large paste crashes** | 大段粘贴导致 Desktop UI 卡顿/崩溃的根因修复（关联 #47425）。 |

> 其他值得关注的 PR：#42223（修正 TUI 续接 session 时的 working directory）、#47699（`opencode --model` 透传 TUI）、#47310（Desktop worktree UI 改进）。

---

## 📈 功能需求趋势

从本期 Issue 分布可清晰看出以下社区关注方向：

1. **🖥️ Desktop 应用深度打磨（最高频）**
   - 大粘贴崩溃（#47425/#47427）、electron-store 同步写入卡死（#47695）、数据完整性（#35890）、worktree UI（#47310）、Web CWD 继承（#35326）
   - 反映 Desktop 已进入"功能完备期"，重心转向稳定性与性能。

2. **🔌 MCP 生态兼容（关键集成风险）**
   - #46628（Anthropic 400 错误）仍 OPEN；#31942（MCP 资源循环 277 次无熔断）已关闭但暴露循环检测缺失。

3. **🤖 多 Provider / 新模型支持**
   - GLM-5.2（#33490）、Muse Spark（#47702/#44659）、Anthropic Vertex SDK（#35880）。

4. **📊 Token 经济与成本控制**
   - Explore agent 浪费（#32749）、MCP 无熔断（#31942）、token 计数不准（#34712）、usage 图错误（#26682）。

5. **🗄️ 长会话与数据治理**
   - SQLite 数据库无界增长（#34875）、长 session `/session/[id]/message` 1.93 MB 单请求（#35895）、SQLite PRAGMA 不可配置（#35892）。

6. **🔐 权限系统语义**
   - Wildcard `*` 与具体规则顺序的文档/行为不一致（#24335，仍 OPEN）。

7. **🐧 跨平台体验**
   - Alpine/musl 回归（#27589）、Linux 剪贴板（#35977/#35978）、Windows `/exit` 关掉父终端（#35327）。

---

## 💡 开发者关注点与痛点

**架构陈旧与持久化模型不匹配**
Hona 的三层 PR 揭示了一个核心问题：当前 renderer 持久化路径每次 setter 都会序列化整体，这在 Desktop 长会话下成为性能瓶颈。社区已对齐"VS Code Memento 模型"作为参考实现。

**Desktop 写入主进程同步锁**
`electron-store` 在 Windows 上被 Defender/索引器干扰时会让整个 UI 卡顿数秒，这是电子应用常见痛点，需迁移至 SQLite + 异步 flush。

**循环与熔断机制缺失**
多个 Issue（MCP resource_list 循环 277 次、Explore agent 过度调用）显示 OpenCode 缺乏"agent 调用预算/熔断"机制，建议官方在 runtime 引入 token-aware circuit breaker。

**跨平台回归敏感**
Alpine/musl 升级、Windows 终端行为差异说明 CI 跨平台矩阵覆盖仍有盲区，1.14.48→1.14.50 的 `getcontext` 回归本应在 release 前被捕获。

**MCP 兼容性仍是最薄弱环节**
Anthropic 不支持 `anyOf/oneOf/allOf` 是公开 schema 限制，但 OpenCode 缺乏预处理层直接将 MCP 工具暴露给模型，导致用户反复遇到 400 而无降级方案。

---

*报告基于 anomalyco/opencode 仓库过去 24 小时数据生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-07

> 数据来源：`github.com/badlogic/pi-mono`（earendil-works/pi）
> 统计周期：2026-09-06 ~ 2026-09-07

---

## 📌 今日速览

过去 24 小时内 Pi 仓库无新版本发布，但社区活跃度极高：41 个 Issue 更新、17 个 PR 推进，**重点集中在「连接可靠性」与「跨 Provider 故障转移」两大主题**。围绕 `openai-codex` 连接卡死、Windows 平台适配、跨 Provider fallback、DNS 解析等多个长期痛点，社区同时涌现了大量讨论与修复 PR，整体呈现"问题集中曝光 → 立刻动手修复"的典型治理节奏。

---

## 🚀 版本发布

无（过去 24 小时无新 Release）。

---

## 🔥 社区热点 Issues

按评论数与影响力筛选，以下 10 个 Issue 最值得关注：

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|---------|
| [#4945](https://github.com/earendil-works/pi/issues/4945) | **openai-codex / gpt-5.5 连接卡死** — TUI 卡在 `Working...` 无流式输出，只能 Esc 中止 | 长期 Top1 痛点，已 `[inprogress]` | 💬76 / 👍32 |
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows 使用体验总览** — 维护者发起的"Windows 用户反馈征集帖"，梳理运行方式与待优化项 | 高优先级方向性讨论 | 💬57 / 👍2 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | **Fullscreen 模式滚轮慢 3 倍** — 全屏模式固定输入框体验好，但鼠标滚轮速度异常 | 已确认可复现 | 💬6 / 👍3 |
| [#8826](https://github.com/earendil-works/pi/issues/8826) | **Agent 重试退避无上限** — 长时间上游故障下指数退避可能累积到不可控时长，需配置封顶 | 真实生产环境痛点 | 💬4 |
| [#9229](https://github.com/earendil-works/pi/issues/9229) | **Windows `shell_path` 被忽略** — 即便在设置里配置，Pi 仍优先使用 WSL bash（CLOSED） | Windows 体验缺陷 | 💬4 |
| [#9209](https://github.com/earendil-works/pi/issues/9209) | **Copilot GPT-6 Astra 路由错误** — Pi 把 `gpt-6-astra` 路由到 `/chat/completions`，Copilot 拒绝（已被 PR #9253 修复） | 立刻闭环 | 💬4 |
| [#9246](https://github.com/earendil-works/pi/issues/9246) | **Anthropic 第 4 个缓存断点未使用** — Prompt caching 利用率不满 100% | 成本优化向 | 💬3 |
| [#9247](https://github.com/earendil-works/pi/issues/9247) | **JSON/RPC 暴露 Provider 原生失败分类** — 让上层能区分 deterministic / transient / unknown | 扩展 API 演进 | 💬3 |
| [#8827](https://github.com/earendil-works/pi/issues/8827) | **LaTeX 旧式字体切换（`\rm`/`\bf`）触发整块降级** | 数学渲染细节 | 💬3 |
| [#8617](https://github.com/earendil-works/pi/issues/8617) | **Codex: 图片密集型工具结果改用文件引用** — base64 重复上传严重浪费 token | 已有本地原型，等待共识 | 💬3 |

> **小结**：`#4945` 仍是社区最大痛点（76 条评论），但本轮"次热"问题已从单一 Bug 转向**系统性可靠性**——缓存命中率、Provider 失败语义、TUI 滚动性能、跨平台一致性等问题密度明显上升。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|------|------|
| [#6881](https://github.com/earendil-works/pi/pull/6881) | **使用 Provider 上报成本替代目录价** — 支持 `usage.cost` 与 BYOK 上游分摊；无上报时回退 `calculateCost` | OPEN，长期成本透明化 |
| [#9253](https://github.com/earendil-works/pi/pull/9253) | **Copilot GPT 模型改走 Responses 端点** — 修复 `#9209` 中 GPT-6 Astra 路由问题 | OPEN |
| [#9252](https://github.com/earendil-works/pi/pull/9252) / [#9250](https://github.com/earendil-works/pi/pull/9250) | **将 undici DNS lookup 固定到系统 `dns.lookup`** — 解决 MagicDNS / Tailscale 等内网主机名 `ENOTFOUND`（`#9244`） | CLOSED（已合并）✅ |
| [#9251](https://github.com/earendil-works/pi/pull/9251) / [#9249](https://github.com/earendil-works/pi/pull/9249) / [#9248](https://github.com/earendil-works/pi/pull/9248) | **跨 Provider Fallback 链路** — transport / DNS / timeout 错误时跳转到备用 provider/model（`#9242`） | 3 个版本 PR 反复推进 |
| [#9080](https://github.com/earendil-works/pi/pull/9080) | **TUI: 跳转最新消息控制** — 基于 dgtlntv 的进度，新增 jump-to-latest 控件 | OPEN |
| [#9233](https://github.com/earendil-works/pi/pull/9233) | **模型鉴权改为运行时解析而非启动快照** — 修复异步刷新未完成时鉴权空读 | CLOSED ✅ |
| [#7610](https://github.com/earendil-works/pi/pull/7610) | **新增 LLM Gateway / LLM Gateway DevPass Providers**（OpenRouter 风格路由器） | OPEN |
| [#9137](https://github.com/earendil-works/pi/pull/9137) | **新增 Nix flake** — 让 NixOS 用户开箱即用（WIP） | OPEN |
| [#9224](https://github.com/earendil-works/pi/pull/9224) | **OpenRouter `:free` 模型 maxTokens 限制到基座模型** — 修复目录虚高 `max_tokens` 导致 400 | CLOSED ✅ |
| [#9222](https://github.com/earendil-works/pi/pull/9222) | **运行中拒绝 reload** — 防止扩展重载把正在运行的工具结果污染为错误 | OPEN |
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **新增 Meta Provider（含 Muse 订阅 OAuth）** — 解决 `#7543` | OPEN |
| [#9219](https://github.com/earendil-works/pi/pull/9219) | **`wrapUIPromptContext` 保留宿主 UI 原型方法与 Proxy trap** | CLOSED ✅ |

> **小结**：本轮 PR 高度结构化——**3 个 fallback 链路的并行 PR**、**2 个 DNS lookup 修复**、**1 个 GPT-6 路由修复**、**1 个 OpenRouter free 模型 fix**，呈现"同一议题多 PR 试验 → 最终合并"的工程化节奏。

---

## 📈 功能需求趋势

从近 24h Issues 提炼，社区关注方向集中在以下几类：

1. **🔌 Provider 接入与协议兼容**（最热）
   - GPT-6 Astra 接入 / Copilot Responses 端点
   - Meta + Muse OAuth（`#9096`）
   - LLM Gateway（`#7610`）
   - OpenCode Go 新 header 要求（`#9230`/`#9237`）
   - OpenRouter `:free` 与 Claude Opus 5 兼容（`#9165`/`#9224`）
2. **🛡️ 可靠性与韧性**
   - 跨 Provider fallback（`#9242` / 多个 PR）
   - 重试退避封顶（`#8826`）
   - 鉴权异步刷新修复（`#9233`）
   - 进程内 DNS 解析修复（`#9244`）
3. **💰 成本与缓存优化**
   - Anthropic 第 4 个 cache breakpoint 利用（`#9246`）
   - Provider 上报成本采用（`#6881`）
   - Codex 改 file_id 引用避免 base64 重复（`#8617`）
4. **🖥️ TUI / 桌面体验**
   - 全屏模式滚轮速度（`#9052`）
   - 跳转到最新消息（`#9080`）
   - 滚动重绘抖动（`#9240`）
   - PageUp 增量滚动（`#5786`）
   - 图片渲染与恢复（`#8306`/`#9256`）
5. **🪟 Windows 体验**
   - `shell_path` 优先级（`#9229`）
   - Shift+Enter 提交行为（`#7175`）
   - 整体体验盘点（`#7547`）
6. **🧩 扩展 API 演进**
   - 失败分类暴露（`#9247`）
   - 已确认交付（`#9236`）
   - `setTuiMode/getLayoutRoot`（`#9238`）
   - `ModelRuntime` 暴露（`#8791`）
   - per-call 工具确认（`#9228`/`#9227`）
7. **📦 生态与打包**
   - Nix flake（`#9137`）
   - chord SDK 拆分 esbuild（`#9225`）
   - `models.json` `$ENV` 插值（`#9258`）

---

## 💬 开发者关注点

综合 Issue 评论与 PR 反馈，可归纳出当前社区 5 大高频痛点：

1. **"会话中途不可预期地停摆"** — 以 `#4945` 为代表：openai-codex / gpt-5.5 在 TUI 中频繁卡死且无错误信息，开发者无法判断是网络、Provider 还是 Pi 自身问题。**透明化的失败分类**（`#9247`）与**跨 Provider fallback**（`#9242`）正是直接回应。
2. **"Windows 仍是二等公民"** — 从 `shell_path` 被忽略、Shift+Enter 提交异常到整体使用调研（`#7547`），Windows 用户的核心诉求是：**配置 → 行为一致**、**键位 → 跨终端一致**、**无需 WSL 中转**。
3. **"成本不可见、不可优化"** — Provider 目录价 vs. 上报价不一致（`#6881`）、Anthropic 缓存断点未用满（`#9246`）、Codex base64 反复上传（`#8617`）——社区对**计费透明 + 缓存命中率**的要求显著提高。
4. **"扩展 API 不够用"** — 多个 Issue 表达"想做但 API 没暴露"：`ModelRuntime`（`#8791`）、失败分类（`#9247`）、确认交付（`#9236`）、TUI 模式切换（`#9238`）。开发者正在自发地把 Pi 当作 Agent 编排框架使用。
5. **"内网 / 特殊网络环境的连接性"** — MagicDNS / Tailscale（`#9244`）、OpenCode Go 新 header（`#9230`/`#9237`）反映出 Pi 已不再只跑公网，企业内网部署正在催生新的适配需求。

---

> 📅 明日看点：建议关注 `#4945`（openai-codex 修复进展）、`#9242` 系列 PR 的最终合并方案、以及 `#9096` Meta Provider 的 OAuth 流是否被合入主线。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-07**

---

## 📌 今日速览

今日 Qwen Code 同时推进三条主线：**Web Shell 动态工作流可视化能力随 v0.23.1-preview.1 发布**（注意：该版本 release workflow 曾失败，详见 #11185）；**ink → OpenTUI 的 TUI 渲染层迁移进入收尾阶段**（#8662 跟踪 + #11152 收口）；**多 Agent Mesh 协作基础设施开始落地**，#11206（admission foundation）+ #11235（六个 thread 工具）+ #11234（run lifecycle）连续提交。此外，安全层面出现一条值得警惕的 P1 issue——默认开启的使用统计遥测未经脱敏就将原始工具错误（含 shell 命令行）上传到 RUM（#11198）。

---

## 🚀 版本发布

### v0.23.1-preview.1
- **feat(web-shell)**：可视化与管理动态工作流运行（PR #10594，@qqqys）
- **perf(web-shell)**：从会话派生工作流项目（性能优化）
- ⚠️ **注意**：发布流程曾失败（integration_docker job 超时），见 [Issue #11185](https://github.com/QwenLM/qwen-code/issues/11185)

### v0.23.0-nightly.20260906.92a8a8d179
- 与 preview 同源改动（web-shell 可视化与性能），属于 nightly 滚动构建

---

## 🔥 社区热点 Issues

1. **[#8662](https://github.com/QwenLM/qwen-code/issues/8662) — 跟踪：将 TUI 渲染层从 ink 迁移到 OpenTUI（30 评论，最高热度）**
   当前 TUI 基于 ink 7 + React 19 + 1037 行 patch，存在闪烁、滚动异常等结构性问题。社区高度关注，是 9 月最重要的架构级跟踪议题。

2. **[#11031](https://github.com/QwenLM/qwen-code/issues/11031) — [P1] /export html 生成的空会话就达 19.5 MB**
   因 Web Shell runtime 被整体嵌入每个导出文件。性能与可分享性双重问题。

3. **[#11198](https://github.com/QwenLM/qwen-code/issues/11198) — [P1] 安全：使用统计遥测未脱敏上传原始工具错误（含 shell 命令行）**
   默认开启通道把包含完整命令行的错误文本发到 RUM 端点，影响范围超过历史 issue #10916。**强烈建议用户立即关闭 usage-statistics 直到修复**。

4. **[#11067](https://github.com/QwenLM/qwen-code/issues/11067) — [P1] skill 的 PreToolUse hook 通过 `/<skill-name>` 触发时不执行**
   已被关闭，但同源 bug 在 #11180 重新出现（`--continue` 之后 hook 停止强制执行但指令仍留在上下文中），本质是 hook 生命周期管理问题。

5. **[#6181](https://github.com/QwenLM/qwen-code/issues/6181) — [P1] Web Shell 移动端 session 切换卡顿（已达数秒）**
   四层成本叠加在抽屉 200ms 关闭动画窗口内，长期未解决。

6. **[#11109](https://github.com/QwenLM/qwen-code/issues/11109) — release.yml 重复劳动 + 一个 20 分钟步骤无验证作用**
   关联 release 失败事件，影响所有发布流程效率。

7. **[#11146](https://github.com/QwenLM/qwen-code/issues/11146) — 预取消的 tool 请求会排在无关批次后面等待**
   `CoreToolScheduler.schedule()` 的队列逻辑与 abort listener 注册顺序存在竞态。

8. **[#8542](https://github.com/QwenLM/qwen-code/issues/8542) — [ACP] 在 turn 进行中排队下一条消息（对齐 CLI 体验）**
   IDE 集成侧的高频需求，ACP 协议能力差距。

9. **[#11217](https://github.com/QwenLM/qwen-code/issues/11217) — Anthropic SSE 失败时 CLI 仍报告 headless 成功**
   #8920 的新重现，覆盖 JSON 输出和 notification-driven turns，假成功 bug 影响批处理可信度。

10. **[#11186](https://github.com/QwenLM/qwen-code/issues/11186) — serve 模式下 home-directory workspace 读取 user-scope 设置的通道归属缺失**
    `qwen serve` 在家目录绑定时，workspace 通道归属模型存在边界漏洞。

---

## 🛠️ 重要 PR 进展

1. **[#11152](https://github.com/QwenLM/qwen-code/pull/11152) — feat(cli): OpenTUI parity closeout（chiga0）**
   关闭 ink 与 OpenTUI 渲染器之间最后已知行为差距，分三组：入口/编辑器、shell 模式、验收 harness。**TUI 迁移收官之作**。

2. **[#11206](https://github.com/QwenLM/qwen-code/pull/11206) — feat(core): 多 Agent Mesh admission 基础（yiliang114）**
   持久化 workspace agents 协作共享 thread 的规则与存储层：mention 路由、per-thread turn gate、tree-wide token gate、队列 admission、合并、保留安全、原子预订。

3. **[#11235](https://github.com/QwenLM/qwen-code/pull/11235) — feat(mesh): 六个 thread 工具**
   新增 `thread_post`/`thread_wait`/`thread_block`/`thread_review`/`thread_create`/`thread_read`，并将 `createThreadInTransaction` 从 `createThread` 拆出以支持单锁写入 thread 与其分配。

4. **[#11234](https://github.com/QwenLM/qwen-code/pull/11234) — feat(mesh): 记录 run 关闭并派生 thread 状态**
   mesh run 的结束语义 + thread 响应机制；为 #11230 的聚合状态解析器提供 producer。

5. **[#10898](https://github.com/QwenLM/qwen-code/pull/10898) — feat(release): promote 经验证的 nightly 构建**
   维护者输入 nightly tag，workflow 复用该 nightly 的 release 验证产物并从同一不可变源发布。Fail-closed 设计。

6. **[#11086](https://github.com/QwenLM/qwen-code/pull/11086) — feat(serve): 将扩展作用域限定到 workspace runtime**
   全局扩展目录通过每个 workspace 选中的 runtime 暴露；更新扩展管理、composer add 菜单和 `@` 提及解析。

7. **[#10981](https://github.com/QwenLM/qwen-code/pull/10981) — fix(cli): 接入 qwen-audio Token Plan ASR 家族**
   语音管线识别新增 `qwen-audio-*` 模型族，解决 `resolveVoiceTransport()` 误报 unsupported 的问题。

8. **[#11201](https://github.com/QwenLM/qwen-code/pull/11201) — fix(vscode): 规范化 workspace 路径**
   解决 macOS 上 `/tmp → /private/tmp` symlink 导致的 daemon session key 不一致、嵌入式 shell 引导异常、export fallback 错位。

9. **[#10709](https://github.com/QwenLM/qwen-code/pull/10709) — fix(core): 重试孤立的 XML 工具调用结束标签**
   扩展协议标签泄漏防护，覆盖 `</parameter></invoke>` 这类无对应起始标签的片段，进入现有 invalid-stream 重试路径。

10. **[#11134](https://github.com/QwenLM/qwen-code/pull/11134) — fix(ci): macOS E2E shard 瞬时死亡单次重试**
    为 macOS E2E leg 添加与 Linux sandbox:none 同样的预算控制单次重试（#10572 已为后者添加），缓解 green-shard 假阴性。

---

## 📈 功能需求趋势

从过去 24 小时高活跃议题中可提炼出以下方向：

| 方向 | 代表议题 | 趋势 |
|------|---------|------|
| **TUI 现代化（ink → OpenTUI）** | #8662、#11152 | 架构级主线，本周进入收口 |
| **Web Shell / 浏览器端体验** | #6181、#11031、#11100、#10989、#9598 | 性能、导出体积、移动端体验持续是焦点 |
| **多 Agent / Mesh 协作** | #10247、#11206、#11235、#11234 | 9 月起进入工程化落地阶段 |
| **ACP / IDE 集成** | #8542、#11086、#11201 | 协议能力对齐 CLI 体验、跨平台路径处理 |
| **安全与隐私** | #11198、#11067、#11180、#11205 | hook 强制执行一致性、telemetry 脱敏、内容过滤加固 |
| **CI/CD 效率与可靠性** | #11109、#11214、#10439、#11134、#11209 | workflow 重复劳动、超时、重试策略成系统性问题 |
| **新模型支持** | #10981（qwen-audio）、#11227（/effort 传到 OpenAI 兼容后端） | 长尾兼容持续扩展 |
| **导出 / 数据可移植性** | #11031、#11100 | 减小 export 体积、清理无关 runtime 依赖 |

---

## 🧑‍💻 开发者关注点

社区反馈集中暴露的真实工程痛点：

1. **渲染稳定性是底线诉求**——30 评论聚焦 ink → OpenTUI（#8662），闪烁、滚动、patch 维护成本已成为阻碍高质量 CLI 体验的核心障碍。
2. **"看似成功"的失败最难排查**——#11117、#11215、#11217 一连串 issue 反映 SSE 失败、throttling 错误、假成功 JSON 输出缺乏统一分类与日志。
4. **CI/CD 资源消耗不可持续**——release.yml 重复劳动（#11109）、20 分钟无验证步骤、macOS E2E shard 假阴性（#11134），维护者正在系统性重构。
5. **安全默认配置需收紧**——#11198 揭示的 telemetry 未脱敏问题是 pre-existing 在 main 上的，意味着任何用 qwen-code 跑包含敏感命令的工作流的开发者都在裸奔。
6. **Hook 生命周期是 skills 子系统的薄弱面**——#11067 已修复 `/<skill>` 入口，但 #11180 显示 `--continue` 后 hook 不再强制执行，说明 hook 注册/解绑链路未与会话恢复路径打通。
7. **跨平台路径与 symlink 是隐形坑**——#11201 的 macOS `/tmp` symlink 问题影响 session key、嵌入式 shell 引导、export fallback，多处需要规范化路径。
8. **Web Shell 移动端仍是体验短板**——#6181 的四层叠加成本需要从交互层（轮询门控）、加载层（增量同步）、渲染层（虚拟列表）、会话层（索引）逐层优化。

---

*本日报基于 2026-09-07 过去 24 小时的 GitHub 数据生成，覆盖 50 条 issues 与 50 条 PRs。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-07**

---

## 📌 今日速览

今天项目呈现 **"v0.9.13 集中合入"** 的显著特征：过去 24 小时内有 38 个 Issue 与 50 个 PR 更新，其中大量围绕 Fleet 多代理、Context 压缩、MCP OAuth 状态以及 TUI 可发现性的 Enhancement 集中 Close。维护者 Hmbown 在多条 PR 中以 "Closes #xxxx" 形式一次性收尾了一批 0.9.12 dogfooding 期间暴露的问题，正在为版本发布做收口准备。Issue #5316（EPIC-005 TUI crate 拆分）仍是社区讨论焦点，22 条评论遥遥领先。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** 但从 PR #5967（0.9.13 release-note receipts）的合入节奏判断，v0.9.13 已进入收尾阶段——CHANGELOG 中补齐了 #5956、#5949、#5952、#5954、#5888、#5906/#5921 等已合入 feature commit 的说明。

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 状态 | 评论 | 重要性 |
|---|------|------|------|------|--------|
| 1 | [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | **EPIC-005: TUI Crate Decomposition** | OPEN | 22 | 顶层架构伞形 Issue，追踪所有子 EPIC 与 FEAT；整个仓库拆分工作的"主索引"，社区讨论密度最高 |
| 2 | [#5620](https://github.com/Hmbown/Codewhale/issues/5620) | Context 压力警告是瞬态的，Agent 不会主动响应 | OPEN | 12 | 严重度中等的"安全信号失效"——context 静默退化不崩溃但绕过了告警机制，是体感极差的一类问题 |
| 3 | [#5929](https://github.com/Hmbown/Codewhale/issues/5929) | `codewhale-tui` lib 测试套件并行执行 flake（tracking） | OPEN | 3 | 一次性在全套测试中失败 6 次、隔离运行全部通过，每次需 25 分钟矩阵重跑；社区急需根因 |
| 4 | [#5950](https://github.com/Hmbown/Codewhale/issues/5950) | 让 0.9.12 底部 chrome 可配置，`/statusline` 失效 | OPEN | 2 | 用户能见度极高——posture bar / metrics line 写死，`/statusline` 不再控制渲染，破坏老用户习惯 |
| 5 | [#5915](https://github.com/Hmbown/Codewhale/issues/5915) | Fleet models: provider → model → shortlist → role | OPEN | 2 | 创始人亲自定调（Founder direction）：子代理要按 shortlist 选模型、按 role 派发，是产品方向级需求 |
| 6 | [#5932](https://github.com/Hmbown/Codewhale/issues/5932) | 测试隔离泄漏：onboarding 测试把 fixture provider 写入真实 `~/.codewhale/setup_state.json` | OPEN | 2 | 严重：会污染创始人真实配置；指向测试隔离机制整体设计缺陷 |
| 7 | [#5969](https://github.com/Hmbown/Codewhale/issues/5969) | `serve --acp` initialize 响应违反 ACP schema（JetBrains IDEA 无法连接） | OPEN | 1 | 影响 IDE 生态接入；strict client 因 `sessionCapabilities.list` 是 boolean 而非 object 直接拒连 |
| 8 | [#5856](https://github.com/Hmbown/Codewhale/issues/5856) | Computer-use plugin: live-install receipt + 首个 look-act 闭环 | OPEN | 2 | PR #5855 持有 bundle，剩"/plugin install + 真实 look-act-verify 一次"；server protocol 已 9/9 通过 |
| 9 | [#5926](https://github.com/Hmbown/Codewhale/issues/5926) | MCP 状态：footer 报"8 failed"实为 7 个 OAuth 待登录 | OPEN | 1 | 极具迷惑性的 UX 故障——所有 OAuth 服务器回 401 但被算作"失败"，缺登录路径提示 |
| 10 | [#5931](https://github.com/Hmbown/Codewhale/issues/5931) | Session 身份与 receipt 完整性失败仅打日志 | OPEN | 0 | "engine session id diverged from the host" 出现 14 次却仅 log，approval receipt 写失败 InvalidData 2 次沉默——核心安全/审计盲点 |

> 亮点观察：**8/10 是 OPEN bug 或架构需求**，且半数以上由维护者本人在 dogfooding 中亲自捕获——说明项目当前处于"快速迭代+严格自测"阶段。

---

## 🛠 重要 PR 进展（Top 10）

| # | 编号 | 标题 | 状态 | 影响 |
|---|------|------|------|------|
| 1 | [#5968](https://github.com/Hmbown/Codewhale/pull/5968) | `feat(build)`: opt-in `rusty_alloc` 全局分配器 | OPEN | 引入纯 Rust mimalloc 替代品（无需 C 编译器），给极端内存场景提供官方 escape hatch |
| 2 | [#5945](https://github.com/Hmbown/Codewhale/pull/5945) | 修复 fleet 解析后的 member slot 战胜旧 role 标签 | OPEN | 修 Fleet "manager 标签却跑 reviewer profile" 的角色错配 bug，避免误用写权限 |
| 3 | [#5944](https://github.com/Hmbown/Codewhale/pull/5944) | 阻止 fleet 只读 schema 探针自动补 null enum | CLOSED | 修严格 OpenAI 校验器拒收 `properties.action = {"enum": null}` 的 schema 漂移 |
| 4 | [#5966](https://github.com/Hmbown/Codewhale/pull/5966) | Provider 目录驱动的 account keys + codewhale 一级 route | CLOSED | rebase 后合入；动态化 account-key provider 注册，`codewhale account api-key` 等命令到位 |
| 5 | [#5967](https://github.com/Hmbown/Codewhale/pull/5967) | v0.9.13 已合入 feature 的 release-note 补齐 | CLOSED | 关键 release-gating PR——补齐 #5956/#5949/#5952/#5954/#5888/#5906/#5921 七处 CHANGELOG |
| 6 | [#5962](https://github.com/Hmbown/Codewhale/pull/5962) | `/statusline` 重写底部双栏 + ctx 永远可见 | CLOSED | 0.9.12 shell 第一片返工：ctx 始终在底部第一行，metrics 行由 `/statusline` 驱动，废弃失效 toggle |
| 7 | [#5960](https://github.com/Hmbown/Codewhale/pull/5960) | Engine session id 漂移从日志变可见通知 | CLOSED | 把 14 次静默"session 漂移"从 log 抬升到用户可见 notice——审计性大幅改善 |
| 8 | [#5958](https://github.com/Hmbown/Codewhale/pull/5958) | Fleet 模型筛选零匹配从 panic 改为提示 | CLOSED | 关闭 #5953：`/fleet setup` 模型步筛不到结果时直接渲染空态文案而非 index OOB |
| 9 | [#5957](https://github.com/Hmbown/Codewhale/pull/5957) | mid-turn MCP refresh 维持池 deferred、激活集收窄 | CLOSED | 关闭 #5939：OAuth 完成中途突然把全部 MCP 工具暴露给模型——破坏工具预算与延迟优势 |
| 10 | [#5965](https://github.com/Hmbown/Codewhale/pull/5965) | Compaction: 可调 summarizer 后缀 + 可配 verbatim 保留 | CLOSED | 关闭 #5956：在 `[compaction]` 表下放两个常驻旋钮，让操作员影响摘要行为 |

---

## 📈 功能需求趋势

通过对 38 条 Issue 的归类，社区当前最强烈的需求集中在 **五个方向**：

1. **🚢 Fleet / 多代理编排**（约 30%）
   - 短名单选模型、角色分发、saved teams、roster/workers/saved-teams 之间的回退栈、deliverables summary、Fleet 菜单精简——v0.9.13 的核心产品方向

2. **🔌 MCP 生态可用性**（约 20%）
   - OAuth 登录路径提示、mid-turn refresh、token 刷新失败的语义化错误、运行时 catalog 增量激活、statusline 中区分 "failed vs needs login"

3. **🧠 Context 与压缩**（约 15%）
   - 压力告警应被 Agent 主动响应（不是被动）、summarizer 可注入用户指令、原消息 verbatim 保留条数可调、context 显示永远可见

4. **🖥️ TUI 可发现性与命令 UX**（约 15%）
   - `/cmd ` 之后展示 usage & subcommand、`/help` 暴露 usage、`/theme` 列出自定义 overlay、`/statusline` 重新生效、request_user_input 限额可配

5. **🪟 平台稳定性**（约 20%，多为 bug）
   - Windows 终端（PowerShell、SetWindowPos、message pump）、ACP schema 兼容性、JS-shell fetch 缓存依赖、CRLF/LF 写入、test 隔离泄漏、并行执行 flake、large workspace snapshot 静默失败

---

## 💔 开发者关注点 / 高频反馈痛点

| 痛点 | 出现频次 | 代表性 Issue |
|------|---------|-------------|
| **静默失败**：错误仅 log、不向 TUI 呈现 | 4+ | #5931（session 漂移）、#5930（snapshot stderr）、#5908（PowerShell 假成功）、#5925（启动期按键丢弃） |
| **测试隔离缺陷** | 3 | #5932（fixture 污染真实 home）、#5929（并行 flake）、#5930（snapshot 47 次重复） |
| **OAuth / 鉴权误报** | 3 | #5926（"failed"实为待登录）、#5959、#5969（ACP schema） |
| **回归与老路径失效** | 3 | #5950（`/statusline` 失效）、#5940/#5941（tool description 自相矛盾）、#5872（allocator 默认值） |
| **小细节缺失** | 多 | #5909（CRLF 丢失）、#5915（菜单过载）、#5953（空列表 panic）、#5934（File alias 重注册 42 次） |

**总体情绪**：开发者社区对维护节奏满意（Hmbown 当晚 dogfooding 当晚合 PR），但对 **"日志可见性 / 用户感知"** 普遍感到焦虑——大量 bug 类别不是"功能缺失"而是"信号没传到用户"。这正成为项目当前最重要的可观测性课题。

---

*日报基于 GitHub Issues 与 Pull Requests 数据自动生成，链接均指向 `Hmbown/Codewhale` 仓库原始页面。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*