# AI CLI 工具社区动态日报 2026-08-28

> 生成时间: 2026-08-28 08:29 UTC | 覆盖工具: 9 个

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
**数据周期：2026-08-27 → 2026-08-28 ｜ 覆盖 9 款主流工具**

---

## 1. 生态全景

AI CLI 工具生态已从"单家工具的 LLM 接口"演化为"多 Provider、多 Agent、多协议的开发者中枢"。当前阶段呈现出三个显著态势：**（1）迭代节奏分化**——头部工具（Claude Code、Codex、Copilot CLI、Qwen Code）保持日级版本更新，而 Kimi、DeepSeek TUI 等相对静默；**（2）Subagent/MCP 成为共性战场**——所有工具都在加紧 Agent 编排能力，但可靠性问题（Claude #88886、Gemini #21409、Codex #28058）集中暴露；**（3）协议层标准化加速**——MCP 2026-07-28 协议被 Copilot CLI、OpenCode 等多家同步升级，但 Anthropic / OpenAI 流式安全（Qwen #9005、Claude 跨会话丢消息）仍是薄弱环节。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issues 更新 | PRs 更新 | 24h 整体节奏 | 当日核心动态 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.248 / v2.1.250 | 10（精选）| 1 | 中 | `--restricted` 企业开关 + 稳定性修复 |
| **OpenAI Codex** | rust-v0.151.0-alpha.6/7/8 | 10 | 10 | 🔥 高 | 三连 alpha，Windows/macOS 回归簇爆发 |
| **Gemini CLI** | v0.59.0-nightly | 10 | 10 | 中高 | Subagent 可靠性 + Auto Memory 安全 |
| **GitHub Copilot CLI** | v1.0.81 / v1.0.82-0 | 10 | **0** | ⚠️ 异常 | 1.0.81 升级兼容性集中翻车 |
| **Kimi Code CLI** | 无 | 6 | 3 | 低 | Plan 模式回归 + API 契约争议 |
| **OpenCode** | v1.18.24 / v1.18.25 | 10 | 10 | 🔥 高 | Azure Entra ID + Bedrock 缓存修复 |
| **Pi (pi-mono)** | 无 | 50+ | 20（多已合并） | 🔥 高 | TUI 渲染 + 多 Provider 兼容性 |
| **Qwen Code** | v0.22.2-nightly | 10 | 10 | 🔥 高 | ink→OpenTUI 第三批 + VS Code 伴侣切流 |
| **DeepSeek TUI** | 无 | 19 | 50（多已合并） | 🔥 极高 | v0.9.12 集成 + 多厂商原生搜索 |

**关键观察**：
- **Copilot CLI 是唯一一家当日零 PR 活跃**，但同时拥有 2 个版本发布，呈现"发版后回归待修"的反常节奏。
- **Pi、DeepSeek TUI 的 PR 实际吞吐量最大**（虽无版本号变更），说明它们处于"密集合并、版本号滞后"的窗口。
- **Kimi CLI 当日最安静**（6 issues / 3 PR），但其中 #2621（API 契约）和 #2623（Plan 模式死循环）属于"低频高烈度"。

---

## 3. 共同关注的功能方向

### 3.1 🧩 Subagent / Multi-Agent 体系可靠性（全行业头号痛点）
| 工具 | 典型问题 |
|---|---|
| Claude Code | #88886 subagent 内存快照无法刷新；#84625 后台 Bash 静默死亡 |
| Gemini CLI | #22323 MAX_TURNS 后误报 GOAL 成功；#21409 Generalist Agent 永久挂起 |
| Codex | #28058 MultiAgentV2 加密抹除审计轨迹 |
| Copilot CLI | #4225 Coordinator 卡 "Working"；#4629 plugin hooks resume 丢失 |

### 3.2 🪟 Windows 平台一致性债务（跨 7 家工具）
- **Claude Code**：#42776 文件锁崩溃、#73338 路径回归
- **Codex**：#27117 PSModulePath 注入、#41059 Desktop headless、#34227 pet overlay 错位
- **Copilot CLI**：#3760 ctrl+enter 提示与行为不符
- **OpenCode**：#45875 ARM64 构建断裂、#17372 PowerShell 5.1 vs 7
- **Pi**：#8675 WSL2/Windows Terminal 逐词换行
- **Qwen Code**：长路径问题
- **Gemini CLI**：Windows 长路径（PR #28926）

### 3.3 🔌 MCP 协议升级与稳定性
- **Copilot CLI**：v1.0.81 升级 MCP 2026-07-28 协议 → #4647 chroma-mcp 兼容性断裂
- **OpenCode**：PR #45777 升级 MCP SDK 2.0.0 + 2026-07-28 协议；#40125 按服务器粒度信任
- **Codex**：#40860 mcp_servers.codex_app 无效 transport；#41231 插件缓存埋点
- **Kimi**：#1211 Notion Remote MCP 凭据持久化（已关闭）

### 3.4 🧠 长期记忆 / 会话恢复
- **Gemini CLI**：#26522 无限重试、#26525 secret 已入上下文、#26524 无效 patch
- **Copilot CLI**：#4535 store_memory "Instance id is required"；#4621 plugin hooks resume 丢失
- **Claude Code**：#85914 跨会话 context retention 不一致
- **Qwen Code**：PR #10183 结构化按需召回（memory 升级）

### 3.5 🔒 沙箱 / 企业级安全
- **Claude Code**：v2.1.248 `--restricted` 企业开关；#89931 excludedCommands 无效
- **Gemini CLI**：PR #29099 fail-closed 工作区信任；PR #28863 扩展 env 同意提示
- **OpenCode**：PR #40125 fingerprint pinning + caFile；#21658 Azure Entra
- **Qwen Code**：#9005 Anthropic wire 流安全（P1）

### 3.6 🛠️ TUI / 渲染层稳定性
- **Pi**：#8584 / #8675 长工具输出后逐词换行（高发）
- **Qwen Code**：#8662 ink→OpenTUI 迁移（1037 行补丁，第三批 PR #10368）
- **Gemini CLI**：#25166 Shell 卡 "Waiting input"
- **Claude Code**：#88542 TUI 终端标题忙闲指示符退化
- **Copilot CLI**：#4648 输入框背景变黑

### 3.7 📡 多 Provider 协议网关化
- **Qwen Code**：#10227 Moonshot schema 校验失败；#9005 Anthropic 流安全
- **OpenCode**：v1.18.24 Azure CLI 登录、V1→V2 配置兼容
- **DeepSeek TUI**：#5683-#5685 DeepSeek/Qwen/Z.AI/BigModel 原生搜索适配器；#5588 18 处 provider-neutral 闸门
- **Pi**：#8728 DeepSeek 兼容端点 400；#8774 OpenAI Responses 压缩失败；#8760 OpenRouter `:free` max_tokens

---

## 4. 差异化定位分析

| 维度 | Claude Code | Codex | Gemini CLI | Copilot CLI | Kimi | OpenCode | Pi | Qwen Code | DeepSeek TUI |
|---|---|---|---|---|---|---|---|---|---|
| **核心定位** | 企业级 Agent + IDE 深度集成 | 多端统一（Desktop/CLI/Web） | Gemini 模型原生 + 沙箱 | GitHub 生态 + MCP + 插件 | 月之暗面自有模型 | Provider-agnostic 桌面 IDE | TUI 极客 + 协议网关 | Qwen 模型 + ACP 多通道 | 单 crate 工作台 + 多 Provider |
| **目标用户** | 企业 DevOps / 重度 Agent 用户 | 跨平台 ChatGPT 重度用户 | Google AI / Sandbox 敏感用户 | GitHub 订阅用户 / VSCode 生态 | Moonshot 自有模型用户 | 多云/多 Provider 切换者 | TUI 极客 / 本地推理爱好者 | 国内 Qwen 模型 + IDE 用户 | 性能敏感 / Rust 工具链用户 |
| **技术路线亮点** | `--restricted` 受限模式、CLAUDE.md 内存 | Guardian review、MultiAgentV2 | AST 感知探索提案、Auto Memory | MCP 2026-07-28、Hooks→OpenTelemetry | Remote MCP、ACP 协议 | V1/V2 配置兼容、Bun runtime | `build-coding-agent-bundle` 插件 | ink→OpenTUI 迁移、L2 Daemon 分层 | gix 替代 git CLI、provider-neutral 化 |
| **当前痛点** | 模型质量回退（#83510）、Windows 体验 | macOS 26.820 认证循环 | Subagent 假成功 + secret 泄露 | 1.0.81 升级翻车 | API 契约模糊、Plan 模式死循环 | 旧布局去留争议、Go 套餐计费 | TUI 渲染矩阵、复制粘贴交互 | 主干 CI 不稳、第三方 provider | 单 crate 构建税、process 启动过重 |
| **差异化壁垒** | Subagent 体系深度 | ChatGPT 桌面整合 | Gemini 3 原生 Bash + 沙箱 | GitHub Marketplace 生态 | Moonshot 长上下文 | 跨 Provider + 跨平台覆盖 | 扩展 API 颗粒度（hook 体系） | 通道生态（钉钉/Feishu） | 性能极致优化 |

**关键区分点**：
- **"协议网关"型**（Pi、DeepSeek TUI、OpenCode、Qwen Code）正系统化抽象 Provider 差异；**"自有模型优先"型**（Claude Code、Codex Gemini 部分、Kimi、Qwen）更关注与自家模型的深度协同。
- **"桌面/IDE 一体化"型**（Claude Code、Codex Desktop、Qwen WebShell、OpenCode V2 App）投入明显；**"纯 TUI"型**（Pi、Gemini CLI、Copilot CLI）则在交互细节上打磨。

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 高迭代（处于功能快速扩张期）
- **Codex**：3 个 alpha 24h 连发 + 10 PR + 26.820 集中回归，处于"重大重构窗口"。
- **OpenCode**：v1.18.24 → v1.18.25 连续补丁 + 多条高质量 PR（PR #45777 MCP SDK 升级、#40125 fingerprint pinning）。
- **Qwen Code**：ink→OpenTUI 大型迁移进行中（三批 PR），主力维护者（wenshao、yiliang114）持续推进。
- **DeepSeek TUI**：50 条 PR 24h 更新，处于"v0.9.12 集成爆发期"，但版本号未推进说明处于代码冻结前的密集合并。
- **Pi**：20 条 PR 多已合并，但当前最新版本 v0.84.3 已知多个回归（#8584、#8610），提示"补丁未发版本"风险。

### 🟡 中活跃 + 稳定迭代（处于企业化深化期）
- **Claude Code**：发布节奏稳健（每日 1-2 版本），但单日仅 1 PR 提示内部修复窗口；社区热点集中在 Windows / Subagent / 模型质量。
- **Gemini CLI**：nightly 通道活跃，重点在 Subagent 可靠性 + Auto Memory 安全两条线治理。
- **Copilot CLI**：v1.0.81 是大版本（插件仪表盘 + MCP 协议），但 0 PR 24h 表明可能进入"内部修复 + 等待反馈"状态。

### 🔴 低活跃 + 议题集中（处于功能/契约争议期）
- **Kimi CLI**：3 PR + 6 Issues，且

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**：截止 2026-08-28  
**样本**：50 条热门 PR + 50 条热门 Issues  
**核心发现**：社区关注重心正从「技能数量扩张」转向「基础设施可靠性 + 治理边界」

---

## 一、热门 Skills 排行

> 注：因 PR 评论数数据未公开，下表综合 **议题关联度、近期活跃度、问题严重性** 三维度排序。

| # | PR / Skill | 状态 | 核心价值 |
|---|---|---|---|
| 🥇 | **#1298** `skill-creator` run_eval.py 全量修复（recall 0% / Windows / 并行） | OPEN | 修复 description 优化循环的"假信号"——10+ 次复现的核心基建缺陷 |
| 🥈 | **#1628** **Hivemind**——零成本多 Agent 编排（headless opencode workers） | OPEN | 把昂贵模型的"上下文"解放为真正稀缺资源，定位下一代协作范式 |
| 🥉 | **#556 → #1099 / #1050** `run_eval.py` Windows 兼容性连环修复 | OPEN | 影响 description 自优化闭环，跨平台评估稳定性 |
| 4 | **#1367** `self-audit v1.3.0`（文件级机械校验 + 四维推理审查） | OPEN | 通用型"交付前守门人"，跨栈跨模型适用 |
| 5 | **#1615** `scnet-hpc`（SCNet 超算集群 SSH + Slurm 工作流） | OPEN | 填补 HPC/Slurm 场景空白，企业科研刚需 |
| 6 | **#514** `document-typography`（孤行/寡行/编号对齐治理） | OPEN | 解决"每份生成文档都中招"的普遍痛点 |
| 7 | **#486** `odt`（OpenDocument 读写 + 模板填充 + ODF→HTML） | OPEN | 补齐开源/ISO 标准文档格式 |
| 8 | **#1602** mcp-builder 评估序列化 + 编码 + 脚本稳定性修复 | OPEN | 直接呼应 Issue #1390（MCP 评估恒为 0/N） |

**讨论热点解读**：
- **Skill 自举机制本身**成为最大争议——`skill-creator` 的 eval/optimize 流水线在 #1298 / #556 / #1099 / #1050 四条线上同时告急，社区已积累 10+ 独立复现。
- **多 Agent / 上下文经济学**作为新范式被提出（#1628 Hivemind），标志着 Skills 从「单点工具」开始向「编排层」演化。
- **企业垂直域**（ServiceNow #568、HPC #1615、SharePoint #1175）成为新增长极。

---

## 二、社区需求趋势（基于 Issues 高频诉求）

| 需求方向 | 代表 Issue | 热度 | 解读 |
|---|---|---|---|
| 🔒 **Skills 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（**43 评论 / 2 👍**） | 🔥🔥🔥 | 社区 Skill 借 `anthropic/` 命名空间冒充官方，触碰最高优先级风险 |
| 🏢 **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228)（16/8） | 🔥🔥 | 当前需手动下载分发，企业落地最大摩擦点 |
| 🧠 **长任务紧凑记忆** | [#1329](https://github.com/anthropics/skills/issues/1329)（9/0） | 🔥🔥 | 符号化压缩 Agent 持久状态，减少散文式 token 浪费 |
| 🤖 **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED, 6 评论） | 🔥 | 策略执行、威胁检测、信任评分、审计追踪 |
| 📦 **Skills → MCP 化暴露** | [#16](https://github.com/anthropics/skills/issues/16)（4/0） | 🔥 | 把每个 Skill 的 API 契约对外可发现 |
| 🪟 **跨平台/云端兼容性** | [#29 Bedrock](https://github.com/anthropics/skills/issues/29) · [#189 重复 Skill](https://github.com/anthropics/skills/issues/189) | 🔥 | 生态分发、安装去重的工程债 |
| 🧪 **质量门禁 / 推理审查** | [#1385](https://github.com/anthropics/skills/issues/1385)（4/1） | 🔥 | 预校准 → 对抗评审 → 交付验证三段管线 |
| 🛠 **底层 Eval 工具可信度** | [#1390 mcp-builder 0/N](https://github.com/anthropics/skills/issues/1390) · [#1487 claude-api 156k 注入](https://github.com/anthropics/skills/issues/1487) | 🔥 | 评估器自身先坏掉，是无法上线的元问题 |

**趋势归纳**：
1. **治理优先于增长**——#492 单条吞下 43 评论，远高于功能请求；
2. **企业级分发**成为下一阶段瓶颈（共享、命名空间、跨平台）；
3. **元 Skill**（评估器、审计器、治理器）需求显著抬升。

---

## 三、高潜力待合并 Skills（OPEN + 高信号）

按"解决普遍痛点 × 近期仍在迭代 × 跨议题共鸣"筛选：

| Skill | PR | 关键证据 | 为什么值得合并 |
|---|---|---|---|
| **Hivemind** | [#1628](https://github.com/anthropics/skills/pull/1628) | 8/21-24 仍在更新，正面回应"上下文即稀缺资源" | 把 Agent 协作成本曲线压到接近零 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 标记为"影响每份生成文档" | 默认开箱即用，避免每次 prompt 提醒 |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | 最近 4 天仍更新，覆盖 SSH/Slurm/加速器 | 高门槛垂直域一旦错过窗口就难补 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 与 Issue #1385"三段质量门禁"提案同源 | 与现有 skill-creator 互补，闭合"造-评"环路 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 3/1 创建仍在迭代 | 补齐 ISO 标准格式，避免 PDF/DOCX 垄断 |
| **run_eval.py 修复包** | [#1298](https://github.com/anthropics/skills/pull/1298) + [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | 累计 12+ 复现 + Issue #556 长期滞留 | 不修则 description 自优化全停摆 |
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 直击 #492 信任边界问题 | 社区最关心的事用 Skill 自助解决 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试奖杯模型 + 命名规范 | 软件工程标准栈长期空缺 |

---

## 四、Skills 生态洞察（一句话）

> **社区最集中的诉求，是让 Skills 体系从"能跑"走向"可信、可治理、可共享"——基础设施可靠性（eval/Windows/编码）、安全命名空间（#492）、企业级分发（#228）三条主线已经压过对新功能数量的追求。**

---

**附：建议关注的三大杠杆点**
1. 🔴 **#492 命名空间治理**——单点高风险，等官方响应；
2. 🟠 **#1298 + #556 eval 闭环修复**——不解锁则下游 description 优化全停；
3. 🟡 **#228 组织级共享**——决定 Skills 能否走出个人实验进入企业生产。

---

# Claude Code 社区动态日报

**📅 日期：2026-08-28** | **数据来源：github.com/anthropics/claude-code**

---

## 📌 今日速览

过去 24 小时，Claude Code 连续发布 **v2.1.248** 与 **v2.1.250** 两个版本，前者引入了企业级安全开关 `--restricted`（限制工具、文件目录与设置来源），后者集中修复稳定性问题。社区侧热度集中于 **Windows Desktop 频繁崩溃**、**跨会话消息投递失败** 以及 **Claude 5 系列模型质量回退** 三类高优议题；同时 IDE 支持（Zed）与桌面端文件路径回归问题仍是开发者主要诉求方向。

---

## 🚀 版本发布

### v2.1.248 — 引入受限执行模式
- **新增 `--restricted` / `CLAUDE_CODE_RESTRICTED=1`**：
  - 移除内置的 Bash、命令执行与 `WebFetch` 工具（除非通过 `--tools` 显式指定）
  - 文件类工具限定在工作目录内
  - 拒绝 `bypassPermissions`
  - 忽略 user / project / local 三层 settings 文件
- 🔗 [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.248)

### v2.1.250 — Bug 修复与可靠性
- 通用错误修复与稳定性提升（changelog 未列具体条目）
- 🔗 [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.250)

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 热度 | 重要性 |
|---|---|---|---|
| 1 | **#42776** Claude Code Desktop 无法在 Windows 重新启动（孤儿进程文件锁） | 💬 141 · 👍 70 | ⭐⭐⭐⭐⭐ |
| 2 | **#51847** [已关闭] 更新后"Another program is currently using this file" | 💬 20 · 👍 11 | ⭐⭐⭐⭐ |
| 3 | **#32362** Zed IDE 集成支持（feature request） | 💬 19 · 👍 52 | ⭐⭐⭐⭐ |
| 4 | **#86014** 跨会话 `send_message` 报告成功但实际未投递（stuck loading） | 💬 17 · 👍 4 | ⭐⭐⭐⭐ |
| 5 | **#83510** Claude Generation 5（Fable 5 / Opus 5 / Sonnet 5）可测量的质量回退 | 💬 12 · 👍 18 | ⭐⭐⭐⭐⭐ |
| 6 | **#79366** macOS worktree 会话复用既有 worktree 目录而非新建 | 💬 13 · 👍 10 | ⭐⭐⭐ |
| 7 | **#69272** VS Code 扩展添加 `/fork`（对话分支）支持 | 💬 10 · 👍 6 | ⭐⭐⭐ |
| 8 | **#88886** Subagent 使用父会话启动时的 CLAUDE.md/memory 快照，无法刷新 | 💬 5 | ⭐⭐⭐⭐ |
| 9 | **#84625** `run_in_background` 后台 Bash 任务静默被杀 | 💬 4 | ⭐⭐⭐⭐ |
| 10 | **#73338** Desktop 端打开工作目录外文件失效（Show in Finder） | 💬 4 · 👍 6 | ⭐⭐⭐ |

**说明：**

- **#42776** 虽被标记为 invalid，但 141 条评论、70 👍 与桌面端跨平台体验直接挂钩，反映 Windows 用户的持续不满。
- **#32362** 关注度（👍 52）远超评论数，说明 Zed 用户群对官方集成呼声很高。
- **#83510** 是罕见的"模型质量"类硬核反馈：用户使用对照脚本证实了 nonsense 检测能力退化、约 2 倍冗长度、以及 Fable 5 → Opus 4.8 的隐性降级。
- **#88886** 揭示了 agent 内存一致性的设计漏洞：长会话中 subagent 无法刷新文档，与设计意图背离。
- **#84625** 同样影响长流程任务，setsid 分离进程不受影响暗示是进程组回收问题。

🔗 完整列表：[anthropics/claude-code Issues](https://github.com/anthropics/claude-code/issues)

---

## 📦 重要 PR 进展

过去 24 小时仅 **1 条** PR 活动，远低于日常水平：

| PR | 状态 | 内容 |
|---|---|---|
| **#69226** [已关闭] Update frontend-design skill | Closed | 更新 frontend-design skill，插件版本升至 1.1.0，便于已安装副本接收更新 |

🔗 [PR #69226](https://github.com/anthropics/claude-code/pull/69226)

> 💡 **观察**：近 24 小时 PR 活跃度显著回落，仓库可能正处于"版本发布 + 修复窗口"过渡期，预计 v2.1.251 后会有新一轮功能提交。

---

## 📈 功能需求趋势

从全部 Issues 提炼出的高频方向：

### 1. 🧩 **IDE 集成深化**
- **Zed IDE**（官方集成需求最强烈，👍 52）
- **VS Code `/fork` 对话分支**（CLI 已支持，扩展未跟进）
- **VS Code "Search Sessions" 内容搜索**（当前仅搜标题）

### 2. 🖥️ **桌面端稳定性**
- Windows Desktop 文件锁崩溃（#42776、#51847）
- 桌面端打开工作目录外文件失效（#73338）
- Desktop 1.37925 斜杠自动补全退化（#89628）

### 3. 🤖 **Subagent 体系健壮性**
- LSP 工具在 subagent 中被剪枝（#84125）
- CLAUDE.md / memory 快照无法刷新（#88886）
- 后台 Bash 任务静默死亡（#84625）
- Worktree 会话复用旧目录（#79366）

### 4. 🔒 **macOS 沙箱 & 安全**
- sandboxed Go CLI TLS 验证失败（#85857）
- `sandbox.excludedCommands` 无效（#89931）
- `claude setup-token` 无法验证归属（#90298）

### 5. 🧠 **模型与上下文一致性**
- Claude 5 代质量回退报告（#83510）
- 跨会话 context retention 不一致（#85914）
- Opus Plan Mode 在 modelPicker 中缺失（#89690）

### 6. 🌐 **跨平台一致性**
- Windows Git Bash 反斜杠被静默截断（#85856）
- `disallowedTools` 在 settings.json 与 CLI 行为不一致（#90059）
- TUI 终端标题忙闲指示符在所有 multiplexer 下退化为静态字符（#88542）

---

## 💬 开发者关注点

综合 30 条高热度 Issue，可归纳出当前开发者社区的 **六大痛点**：

1. **🪟 Windows Desktop 体验断崖**：文件锁、文件外路径打开、斜杠补全三大问题叠加，使 Windows 成为"二等公民"。
2. **📨 跨会话协作可靠性**：`send_message` 静默丢消息、跨会话 approval UI 缺失，制约多 agent 编排场景。
3. **🧬 Subagent 上下文可信度**：内存快照、LSP 工具、后台任务三类问题说明 subagent 仍是"半成品"。
4. **🍎 macOS 沙箱盲点**：TLS、网络、命令白名单等限制过紧，且无可见错误反馈。
5. **⚙️ 配置一致性**：CLI flag 与 settings.json 行为分歧、auth token 无审计通路，让企业落地困难。
6. **🔍 可观测性缺口**：远程 Cowork 沙箱 OTel 缺失用户身份维度，给企业计费与安全审计带来盲区。

> 🎯 **建议关注**：v2.1.248 的 `--restricted` 是企业级管控的关键拼图，但若不同时修复 #83510（模型质量）、#88886（subagent 内存）与 #73338（桌面端回归），新开关的实际收益会被这些遗留问题稀释。

---

*日报由 AI 技术分析师基于 GitHub 公开数据自动生成，所有条目均附原文链接。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-28**

---

## 📌 今日速览

今日 Codex 仓库呈现"高频迭代 + 多平台回归修复"的明显节奏：Rust 端连续推送 **0.151.0-alpha.6/7/8** 三个预发布版本，主要围绕历史后端加密、Guardian review 会话治理和 Windows 沙箱/PowerShell 兼容性推进。同时 macOS ChatGPT 登录回环、Windows Desktop 26.820 渲染崩溃、加密 MultiAgentV2 消息丢失审计轨迹等高热度 Bug 持续发酵，社区讨论活跃。

---

## 🚀 版本发布

| 版本 | 关键方向 |
|------|----------|
| `rust-v0.151.0-alpha.8` | 最新预发布，继续收敛历史后端与 Guardian review 相关重构 |
| `rust-v0.151.0-alpha.7` | 推进工具调用输出预算、模型提供商认证恢复事件 |
| `rust-v0.151.0-alpha.6` | 引入 sleep tool 独立特性开关、`project/list` 按 recency 排序 |

> 三个 alpha 在 24 小时内连续发布，说明 Codex Rust 端正处于密集合并窗口，开发者可在本地 nightly/alpha 通道验证历史加密、Guardian review、Windows 沙箱等回归。

---

## 🔥 社区热点 Issues

1. **#39162 – macOS 打开会话导致 ChatGPT 登录失效**（评论 66，👍 40）
   高投票回归 Bug，自 26.814.41407 起打开已有会话即触发重新登录。多个 macOS 用户受影响，是 macOS Desktop 26.820 系列反复出现的认证链路问题代表。
   👉 https://github.com/openai/codex/issues/39162

2. **#38350 – 周期性定时任务在成功执行后自动暂停**（评论 52）
   ChatGPT 网页版"Work on the web"中多个无关周期任务连续自动 disable，缺乏用户授权链路。涉及 Automations 权限模型，需官方排查任务状态变更源头。
   👉 https://github.com/openai/codex/issues/38350

3. **#28058 – MultiAgentV2 加密消息抹除任务审计轨迹**（评论 33，👍 124）
   本日榜单中**点赞最高**的 Bug。`#26210` 合并后 MultiAgentV2 消息加密，审计/调试数据丢失，直接影响企业用户的合规与排障。
   👉 https://github.com/openai/codex/issues/28058

4. **#40860 – Desktop 报 `mcp_servers.codex_app` 无效 transport**（评论 23，👍 31，已 CLOSED）
   config.toml 中未声明 `codex_app`，但 Desktop 仍尝试加载，导致会话无法恢复。提示 MCP 注册逻辑与内置 server 边界需重新梳理。
   👉 https://github.com/openai/codex/issues/40860

5. **#27117 – Windows 独立更新把 pwsh 的 PSModulePath 注入 powershell.exe**（评论 23，👍 18）
   `Get-FileHash` 失败影响 Codex 在 Windows 上的自更新链路，是长期存在的 PowerShell 环境隔离问题。
   👉 https://github.com/openai/codex/issues/27117

6. **#34227 – Windows 桌面宠物 overlay 命中区与可视位置不同步**（评论 18）
   影响"pet"等休闲交互体验，累计时间越长偏移越明显，疑似坐标缓存未跟随窗口/缩放更新。
   👉 https://github.com/openai/codex/issues/34227

7. **#32759 – GPT-5.6 Sol 在 code-mode 握手阶段失败**（评论 16，👍 5）
   shell host 在握手过程中退出，影响 Pro 订阅用户在 macOS 上的核心工具调用能力，与 #41241 Windows 同类问题互为印证。
   👉 https://github.com/openai/codex/issues/32759

8. **#41059 – Windows 26.820.9563 Desktop 绕过 CLI 后仍 headless**（评论 14）
   表明 Windows Desktop 在 26.820 大版本中存在渲染/进程引导的稳定性问题，与 #40878、#39226 形成 Windows 集中爆发趋势。
   👉 https://github.com/openai/codex/issues/41059

9. **#40342 – 分页线程历史投影停在 `token_count` 记录**（评论 13）
   与 #41079、#40515 同属"rollout JSONL 完整但 UI 历史停滞"族，影响会话回溯体验。
   👉 https://github.com/openai/codex/issues/40342

10. **#31088 – 在 `--json` 事件流中暴露工具+技能目录**（评论 8，👍 14，enhancement）
    提议在 `codex exec --json` 与 app-server 中发出"生效的工具/技能清单"事件，便于上层构建可观测性与自动化控制。是少有的高赞增强类议题。
    👉 https://github.com/openai/codex/issues/31088

---

## 🛠 重要 PR 进展

1. **#41292 – 将历史 note 图片转发给模型**（CLOSED）
   把后端 `images` 转成 `input_image` 函数调用输出，避免图片进入日志与 post-tool-use hook，提升多模态历史回放能力。
   👉 https://github.com/openai/codex/pull/41292

2. **#41285 – 由 action registry 驱动键位冲突检查**（CLOSED）
   消除运行时键位列表与各上下文分支的重复维护，减少 TUI 键位回归风险。
   👉 https://github.com/openai/codex/pull/41285

3. **#41260 – 历史后端自行执行工具输出预算**（CLOSED）
   历史/笔记结果已在后端按预算截断后再加密，去掉客户端重复限制，避免二次截断。
   👉 https://github.com/openai/codex/pull/41260

4. **#41250 – 实时连接元数据中包含 thread source**（CLOSED）
   WebSocket realtime 通话可跨多轮 turn，需要稳定的 thread 来源以保持来源一致性。
   👉 https://github.com/openai/codex/pull/41250

5. **#41243 – 为 sleep tool 增加可配置开关**（CLOSED）
   新增 `sleep_tool` 特性，支持 `model_driven` / `always_on` 模式，与 clock 工具解耦。
   👉 https://github.com/openai/codex/pull/41243

6. **#41239 – 暴露模型提供方认证恢复进度**（CLOSED）
   发出 `modelProvider/authRecoveryStarted` 与 `authRecoveryCompleted` 事件，便于 UI 与外部观测层跟踪凭据刷新状态。
   👉 https://github.com/openai/codex/pull/41239

7. **#41232 – 在环境上下文中暴露 PowerShell 版本**（CLOSED）
   通过 `powershell_shell_version` 特性 flag，把所选 shell 的大/次版本写入 `<environment_context>`，为 #27117 类兼容性场景提供诊断依据。
   👉 https://github.com/openai/codex/pull/41232

8. **#41231 – 给已加载插件缓存加埋点**（CLOSED）
   统计 hit / hit_after_wait / load、信号量等待与加载耗时、容量淘汰，便于定位插件冷启动瓶颈。
   👉 https://github.com/openai/codex/pull/41231

9. **#41227 – Windows 沙箱提权命令使用兼容的 PowerShell**（CLOSED）
   Microsoft Store 版 PowerShell 在提权沙箱账户下可能不可达，自动选择兼容的 PowerShell 通道，提升沙箱成功率。
   👉 https://github.com/openai/codex/pull/41227

10. **#41215 – Guardian 复审前对上下文做 rollover**（CLOSED）
    长会话可能耗尽复审模型上下文；先 rollover 再提供 transcript delta 与持久评审指令，避免上下文窗口溢出。
    👉 https://github.com/openai/codex/pull/41215

> 备注：上述多数 PR 由 `copyberry[bot]` 提交并已 CLOSED，呈现"脚本化批量迁移/治理"特征；外部贡献者 PR（如 #10192 TUI 迁移到 app-server v2）目前仍 OPEN。

---

## 📈 功能需求趋势

从近 24 小时高评论与高点赞 Issue 看，社区关注点集中在以下方向：

- **🔐 安全/合规可观测**：加密 MultiAgentV2（#28058）、认证恢复（#41239）、Guardian review 治理（#41215/#41221）—— 需要审计 trail、上下文 rollover、凭据刷新可见性。
- **🪟 Windows 一致性体验**：Windows Desktop 26.820 出现"headless / blank / 不一致 pet overlay"等回归簇（#41059/#40878/#39226/#34227），叠加 PowerShell/PSModulePath 隔离（#27117、#41227、#41232）。
- **🍎 macOS 认证链路稳定**：连续出现"打开会话即掉登录"族（#39162、#41044），与版本切换高度相关。
- **🧰 工具/技能可枚举化**：#31088 希望 `--json` 暴露有效工具与技能清单，便于自动化与 UI 编排。
- **🤖 多代理与子代理**：subagent prompt-cache 丢失（#24704）、MultiAgentV2 加密审计缺失（#28058），围绕 fork/继承行为持续讨论。
- **📅 自动化调度可靠性**：周期任务自动 disable（#38350）暴露 Web Automations 权限模型缺口。
- **🧱 MCP / Plugins 边界**：未声明的 `codex_app` 被自动注入（#40860）、未认证读取仍需遵循路由策略（#41230），开发者希望 MCP 与 app server 边界更明确。

---

## 💡 开发者关注点

1. **回归比新功能更紧迫**：评论数与点赞集中在 macOS 26.820 认证循环、Windows Desktop 26.820 渲染、shell host 握手失败等回归，而非新模型/新集成。
2. **可观测性普遍不足**：多个 Issue（#39162、#40880、#41239）反复出现"不知道是哪个版本/路径/线程状态导致"，开发者呼吁更明确的错误分类、认证恢复事件、工具/技能目录输出。
3. **Windows 仍是最弱平台**：PowerShell 进程继承、沙箱对 Store PowerShell 的不可见、pet overlay 失同步、Composer RPC 报 `{"source":"owned"}` 不透明错误等，多源问题互相掩盖。
4. **加密与审计的平衡**：开发者认可加密多代理消息的隐私价值（#28058），但要求保留可审计的 task trail 以满足排障与合规。
5. **session/resume 行为不一致**：approval-mode 切换后会话恢复报 `already has an active writer`（#39823），远程线程只显示首轮回复（#40515），分页历史停在 `token_count`（#40342），三者指向"rollout JSONL 与 UI 投影"之间的一致性需要重建。
6. **自动化缺少可见的"操作溯源"**：周期任务被自动 disable 而无审计（#38350）、safeguard 误判阻断已授权本地修复（#41296）—— 开发者期望所有自动状态变更都伴随可见的"who/what/why"事件。

---

*日报基于 2026-08-28 GitHub `openai/codex` 仓库公开数据生成，建议结合仓库 Discussions 与 release notes 持续跟踪。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-28**

---

## 📌 今日速览

今日 Gemini CLI 发布了新的 nightly 版本 `v0.59.0-nightly.20260828.g3c311beac`。社区讨论焦点集中在 **Subagent 可靠性** 与 **Auto Memory 系统** 两大方向：前者存在恢复状态误判为成功、Generalist Agent 永久挂起等严重问题，后者被提出多项关于重试逻辑、敏感信息脱敏和无效 patch 处理的改进需求。同时，多个高优先级 PR 集中在**沙箱安全加固**与**Git 环境变量一致性修复**上。

---

## 🚀 版本发布

**v0.59.0-nightly.20260828.g3c311beac** 已发布，PR #29113 为自动化版本号 bump。
- 📦 [Compare 变更](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260827.g3c311beac...v0.59.0-nightly.20260828.g3c311beac)

> 这是 nightly 通道版本，建议生产环境继续使用稳定通道。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 关键点 |
|---|-------|--------|------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 之后被错误报告为 GOAL 成功 | **p1** | 13 | 掩盖了真实中断状态，影响调试和后续任务调度 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 永久挂起 | **p1** | 8 👍 8 | 8 个 👍，说明影响面广；用户必须主动禁用子代理才能绕过 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | Zero-Dependency OS 沙箱 + 执行后意图路由 | **p2** | 8 | 充分利用 Gemini 3 原生 Bash 能力的安全增强方案 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取/搜索/映射的收益 | **p2** | 7 | 减少 token 噪声与误读取的代码上下文探索能力升级 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动使用 Skills 与 Sub-agents | **p2** | 6 | 影响自定义扩展的实际可用性 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | **p2** | 5 | 后台提取逻辑缺陷，长期累积会导致资源浪费 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | Auto Memory 缺乏确定性脱敏与日志缩减 | **p2** | 4 | **安全相关**，secret 内容已进入模型上下文 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后仍卡在 "Waiting input" | **p1** | 4 👍 3 | 即使是最简单的 CLI 命令也会出现，回归测试需覆盖 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent 自动接管与锁恢复 | **p3** | 4 | "fail-fast" 策略导致持久化会话模式下频繁崩溃 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser Subagent 在 Wayland 下失败 | **p1** | 4 | 影响 Linux 桌面用户主流环境 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 关键内容 |
|----|------|----------|
| [#29113](https://github.com/google-gemini/gemini-cli/pull/29113) | nightly 版本 bump | v0.59.0-nightly.20260828 自动化发布 |
| [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) | 移除不安全的 `diff.external` 覆盖 | 修复 #28928：Git 不接受空值，导致配置解析异常 |
| [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) | 保持 `GIT_CONFIG_*` 三元组一致 | 防止脱敏后出现无法解析的编号键值对 |
| [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) | 避免持久化中断响应的占位符 | 修复 #28927：避免模型在后续回合重复占位符 |
| [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) | 强制 fail-closed 工作区信任与 MCP 过滤 | 在不可信环境下防止未授权进程执行 |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | 扩展环境变更增加用户同意提示 | MCP 服务器 env 配置纳入同意字符串，防止注入 |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | `read_file` 走 FileSystemService 路由 | 修复一致性，让 ACP 客户端可拦截文件读取 |
| [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | SSE 解析器在 EOF 时 flush 最终事件 | 修复流截断时 `finishReason`/usage 元数据丢失 |
| [#28942](https://github.com/google-gemini/gemini-cli/pull/28942) | 沙箱启动器使用严格布尔解析 DEBUG | 修复 `DEBUG=false` 被误判为启用 |
| [#29104](https://github.com/google-gemini/gemini-cli/pull/29104) | 斜杠命令自动补全增加 `[Skill]` 标签 | 与 `[MCP]`/`[Agent]` 视觉一致，提升可发现性 |

---

## 📈 功能需求趋势

通过对今日活跃 Issue 的归纳，社区诉求集中在以下方向：

1. **🧠 Subagent 体系成熟化** — 子代理恢复语义、子代理轨迹可观测性（`/chat share`）、Browser Agent 跨平台（Wayland）兼容性仍是头号工程重点。
2. **🗂️ Auto Memory 系统可靠性与安全性** — 4 条相关 Issue 均指向后台提取管线的质量与 secret 泄露面，需系统性重构。
3. **🌳 AST 感知代码探索** — Issue #22745/#22746 提议引入 AST-aware 工具以减少 token 浪费并提升精度。
4. **📋 任务追踪系统重构** — 用持久化文件任务系统替代 `WriteToDo`（#18836、#21000），解决会话间状态丢失问题。
5. **🔒 沙箱与权限安全加固** — 沙箱 env 变量净化（#19873）、工作区 trust fail-closed（PR #29099）、扩展安装同意流程（PR #28863）构成一条清晰的安全防线。
6. **⚙️ 模型自我认知** — Issue #21432 强调 CLI 应能准确回答自身的 flag、热键与配置机制。

---

## 💬 开发者关注点

> 来自社区报告的痛点与高频需求

- **🚨 可靠性是首要痛点**：子代理 hang、中断恢复状态错乱、Shell 卡死等直接影响日常工作流，多位用户反馈"必须显式禁用子代理才能正常使用"。
- **🔐 Secret 泄露担忧**：Auto Memory 把本地 transcript 发往后台模型，尽管 prompt 要求脱敏，但内容已先入上下文（#26525）。
- **🪟 跨平台体验参差不齐**：Windows 长路径问题（PR #28926）和 Linux Wayland 浏览器代理失败（#21983）仍是开发者入门障碍。
- **🧩 自定义扩展"看不见"**：Skills 和 Sub-agents 在没有显式指令时几乎不被自动调用（#21968），削弱了可扩展性价值。
- **🧪 测试覆盖不足**：`/bug` 命令报告不含子代理上下文（#21763），steering eval 被迫注释（#23313），反映出端到端可观测性短板。
- **⚡ Token 消耗焦虑**：每轮 ~36.6k token 的基线（#19561）让开发者呼吁"Tactful Extraction"等更精准的读取策略。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成于 2026-08-28*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-08-28
**数据源：** github.com/github/copilot-cli

---

## 1. 今日速览

v1.0.81 正式版昨天落地，**插件仪表盘全量开放**与 **MCP 2026-07-28 协议支持**成为本轮最大亮点，但同日也暴露出一批回归问题：`store_memory` 调用失败、`chroma-mcp` 兼容性问题、`--additional-mcp-config` 在 1.0.81-11 中被无故移除，多个 MCP / Memory 链路的关键 Bug 在升级后集中爆发。社区焦点已从「功能上新」快速转向「升级兼容性止血」。

---

## 2. 版本发布

### 🚀 v1.0.81（2026-08-27 正式版）
- **插件仪表盘全量开放**：可通过 `/plugin`、`/mcp`、`/skills` 命令进入；设置 `PLUGINS_DASHBOARD=false` 可关闭，并下线旧的 `copilot plugins` 命令。
- **MCP 2026-07-28 协议支持**：同步推送至 CLI、SDK、IDE 与内存客户端。
- **Hooks 接入 OpenTelemetry**：当前 trace 上下文可下发到 Hook 回调，便于端到端可观测性。
- 🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.81)

### 🚧 v1.0.82-0（Pre-release）
- 修复与小调整（未列细节）。
- 🔗 [查看 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.82-0)

> ⚠️ **升级提醒**：多个 1.0.81 / 1.0.81-pre 衍生问题（#4535、#4647、#4636、#4639）尚未在 1.0.82-0 的 changelog 中明确说明，生产环境升级前建议观望。

---

## 3. 社区热点 Issues（Top 10）

### 🔴 #4535 — `store_memory` 在 v1.0.81 pre-release 失败：`Instance id is required`（💬 7）
- **为什么重要**：原生 Memory Writer 在缺少 instance ID 时调用失败，影响所有需要长期记忆的 Agent 场景，且错误信息不够清晰，定位困难。
- **社区反应**：7 条评论已形成初步根因分析链，issue 描述由「Femi's agent」基于 GPT-5.6 Sol 自动生成，是 Agent 协助排查自身缺陷的典型样本。
- 🔗 https://github.com/github/copilot-cli/issues/4535

### 🔴 #4612 — FileWatch host-event 死循环冻结 TUI，debug 日志膨胀至 13GB（💬 6 · 👍 1）
- **为什么重要**：长会话 / 恢复会话可能进入 `No connection accepted a host event {"kind":"FileWatch"}` 的紧循环，造成终端无响应并产生海量调试日志，既影响稳定性也带来磁盘压力。
- **社区反应**：6 条评论含可复现步骤与日志样本，被标记为 triage 优先级候选。
- 🔗 https://github.com/github/copilot-cli/issues/4612

### 🟠 #2873 — Copilot Pro 订阅 + Opus 模型访问被切断（💬 5）
- **为什么重要**：Pro 订阅用户突然无法在 CLI 与 VS2026 调用 Opus，触及付费权益边界，关系到大额用户留存。
- **社区反应**：老 issue（2026-04-21 创建）依然活跃，5 条评论持续追问官方政策与替代方案。
- 🔗 https://github.com/github/copilot-cli/issues/2873

### 🟠 #3760 — Windows 下 ctrl+enter 显示与实际行为不一致（💬 2 · 👍 12 ⭐ 最高赞）
- **为什么重要**：UI 提示 `ctrl+enter enqueue`，但实际 `ctrl+enter` 插入换行、`ctrl+q` 才是 enqueue，对 Windows 用户造成长期困扰，**社区点赞 12 次，是本期最高互动**。
- **社区反应**：附视频复现，跨平台 UX 缺陷的代表性反馈。
- 🔗 https://github.com/github/copilot-cli/issues/3760

### 🟡 #3576 — Windows 上 stdio MCP 服务器无法 spawn（💬 2，CLOSED）
- **为什么重要**：影响所有 `npx` / `.cmd` / `.ps1` 启动的 MCP 服务器，是 MCP 生态在 Windows 上落地的关键阻塞。
- **社区反应**：已关闭并对 1.0.51 → 1.0.56-1 之间的回归做了完整复现，是少有的「带修复证据」的闭环 case。
- 🔗 https://github.com/github/copilot-cli/issues/3576

### 🟡 #1385 — CLI 忽略显式 MCP command，将 Python MCP 改写为 `pipx run`（💬 2）
- **为什么重要**：CLI 隐式重写 `mcp.json` 中的启动命令，破坏可预期性，对自托管 / 离线用户极不友好。
- **社区反应**：长期挂起（2026-02 创建），官方至今未明确解释重写策略。
- 🔗 https://github.com/github/copilot-cli/issues/1385

### 🆕 #4647 — v1.0.81 破坏 chroma-mcp 兼容性（💬 1，今日新开）
- **为什么重要**：从 1.0.80 升级到 1.0.81 即立刻失效，是 1.0.81 升级相关的「红旗」issue，需要在 changelog 中明确告知。
- **社区反应**：今日刚开，已附 `mcp-config.json` 复现样本。
- 🔗 https://github.com/github/copilot-cli/issues/4647

### 🆕 #4648 — 输入框背景变黑、文本接近不可见（💬 1，今日新开）
- **为什么重要**：会话中途仅输入框背景变黑、`reset` 无法恢复，定位为 CLI 自渲染层的样式 bug。
- **社区反应**：TUI 主题/渲染缺陷首发样本，需观察是否在更多终端/主题下复现。
- 🔗 https://github.com/github/copilot-cli/issues/4648

### 🟡 #4614 — macOS MallocStackLogging 警告仍在 v1.0.80 出现（💬 1 · 👍 2）
- **为什么重要**：诊断噪音每次启动都打印两次，污染 macOS 用户日志、干扰自动化收集。
- **社区反应**：macOS 平台稳定性与「环境洁净度」的代表性诉求。
- 🔗 https://github.com/github/copilot-cli/issues/4614

### 🟡 #4225 — Coordinator 卡在「Working」且队列输入不响应（💬 1 · 👍 1）
- **为什么重要**：当仅后台子 Agent 运行时，主协调器无法处理新输入、UI 也无 pending 提示，影响多 Agent 协作体验。
- **社区反应**：引发关于「orchestrator 状态机可见性」的讨论。
- 🔗 https://github.com/github/copilot-cli/issues/4225

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内仓库无任何 Pull Request 更新**（共 0 条）。

这与昨日 v1.0.81 集中暴露的多个回归形成对比，建议关注：
- v1.0.82-0 的修复是否已通过内部流程但尚未合并到公开分支；
- `store_memory` / `chroma-mcp` / `--additional-mcp-config` 三个 1.0.81 关键回归的修复 PR 是否会在 24–48 小时内出现。
- 🔗 https://github.com/github/copilot-cli/pulls?q=is%3Apr+updated%3A%3E2026-08-27

---

## 5. 功能需求趋势

从 32 条新/更新 issue 提炼，社区诉求集中在 6 个方向：

| 方向 | 代表 Issue | 趋势 |
|---|---|---|
| **🔌 MCP 生态稳定性** | #4647、#4636、#4239、#1385、#3576、#4006 | 🔥 最热：升级兼容性、spawn / pagination / args 模板、多源配置协调 |
| **🧠 记忆 / 会话一致性** | #4535、#4602、#4645、#4621、#4629 | 🔥 上升：`store_memory` 失效、model 在 resume 时被忽略、plugin hooks 丢失 |
| **🖥️ TUI 渲染与可用性** | #4648、#3760、#4612、#4643 | 持续：黑底输入框、Windows 快捷键不一致、FileWatch 死循环、checkpoint 提示不一致 |
| **🤖 多 Agent / 编排** | #4225、#4621、#4629 | 新增：状态可见性、复盘可审计、resume 后 hook 行为 |
| **🧩 插件 / 市场** | #4556、#4629、#4635、#4637 | 上升：`extraKnownMarketplaces` 未注册、`/diff` 基分支、slash skill 重复查询 |
| **⚙️ 配置与可观测性** | #4641、#4640、#4649、#4638 | 新增：settings.json JSON Schema、steering 钩子、Tool search 跨模型一致性 |

**关键词云：** MCP compatibility · store_memory · session resume · checkpoint · TUI rendering · plugin marketplace · JSON Schema · telemetry hook

---

## 6. 开发者关注点

综合社区反馈，当前开发者最关心的痛点与高频需求可归纳为以下五条：

1. **🔁 升级兼容性回归被低估**：v1.0.81 一日之间爆出 chroma-mcp、`store_memory`、`--additional-mcp-config`、custom-model compaction 至少 4 条功能性回归，开发者呼吁官方在 release notes 中加注「Known issues」段落。
2. **🪵 诊断噪音与可观测性割裂**：13GB FileWatch 日志（#4612）、MallocStackLogging 噪音（#4614）、Hook 接入 OTel（v1.0.81 新增）三者并存，说明调试体验是「一半增强、一半失控」，需要统一的开关/分级。
3. **🧠 长期记忆 / 会话恢复是新一轮主战场**：`store_memory` 失效、resume 时 model 被丢弃、plugin hooks 不加载共同指向「持久化层与运行时层的耦合不稳定」，直接影响 Agent 跨会话连续性。
4. **🖥️ 跨平台 UX 不一致**：Windows ctrl+enter、macOS MallocStackLogging、TUI 黑底输入框反映「CLI 终端体验」仍是非功能性债。
5. **🧩 配置可发现性差**：#4641 直接要求官方发布 `settings.json` 的 JSON Schema；同时 #4556 的 server-managed marketplace 静默丢弃说明「配置来源多、合并策略不透明」已成系统性痛点。

---

> 📌 **TL;DR**：v1.0.81 的插件/MCP/OTel 三件套是加分项，但 `store_memory`、`chroma-mcp`、`--additional-mcp-config`、custom-model compaction 一连串回归让升级变成「拆雷」。建议生产环境暂留 1.0.80，等 1.0.82 修复闭环后再升级；同时关注官方对 settings.json Schema 与 MCP `--additional-mcp-config` 协调逻辑的回应。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-28** ｜ 数据来源：GitHub `MoonshotAI/kimi-cli`

---

## 📌 今日速览

过去 24 小时 Kimi CLI 仓库活跃度中等，**新增 3 个 PR 与 6 个更新的 Issue**，其中 3 个为当日新建、3 个为长尾 Issue 收尾关闭。**核心关注点集中在 Plan 模式回归性 Bug（#2623）、API 工具调用空 content 的契约问题（#2621），以及一项安全依赖升级（asyncssh GHSA 漏洞，#2622）**。无新版本发布。

---

## 🚀 版本发布

*今日无新版本发布，跳过此章节。*

---

## 🔥 社区热点 Issues

> 提示：过去 24 小时仅 6 个 Issue 有更新，完整列示如下（含 3 个当日新建 + 3 个长尾关闭）。

### 1. #2623 [OPEN] Plan mode 死循环 Bug ⚠️ **重点关注**
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2623
- **概要**：`kimi-code 0.38.0` + `K3` 模型在 Linux 下，进入 Plan 模式后，模型在探索完成后不执行 `ExitPlanMode`，反而死循环重复 `Bash echo` 与 `ReadFile`。
- **为什么重要**：Plan 模式是 v0.38 的新功能（推测），这是首个被报告的严重回归；如果是模型 + Agent 协作层的协议问题，影响面会很大。
- **社区反应**：当日新建，1 条评论，尚未指派 triage。

### 2. #2621 [OPEN] 开发者对 Kimi API 工具调用契约的强烈不满 🔥 **争议焦点**
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2621
- **概要**：开发者反馈在调用工具时，Kimi API 返回的 `content` 为空但 `tool_calls` 有值——客户端原样回传会触发 `400 text content is empty`；而官方自家 `kimi-cli` 内部也是"主动删空 content"才绕过去的，认为 API 契约自相矛盾。
- **为什么重要**：这是 **API 协议层** 的设计/实现争议，不是用户误用；将直接影响所有第三方集成者。👍 1（早期）。
- **社区反应**：语气激烈，但描述详实含 `text` 报错与复现路径，是高质量 bug report；建议官方尽快澄清是否文档化"tool_calls 时 content 可为空"的行为。

### 3. #1211 [CLOSED] Notion Remote MCP 凭据会话外不持久化
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1211
- **概要**：`kimi mcp auth` 在 macOS / v1.12.0 下完成 Notion Remote MCP 鉴权后，关闭会话即丢失凭据。
- **为什么重要**：MCP 凭据持久化是 Remote MCP 体验的核心；6 个月前提出，今日关闭（推测已修复或文档化 workaround）。
- **社区反应**：👍 0、3 条评论，长尾收尾。

### 4. #1272 [CLOSED] JetBrains AI Assistant + Kimi 通过 ACP 无法识别文件
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1272
- **概要**：通过 ACP（Agent Client Protocol）调用 Kimi 时，IDE 拖入文件未被识别，需手动提供完整路径。
- **为什么重要**：IDE 集成是 Kimi CLI 拓展企业场景的关键；ACP 协议层的文件处理需要规范化。
- **社区反应**：今日关闭（推测已合并修复或转为文档）。

### 5. #1279 [CLOSED] Feature Request: 原生 `git-ai` 集成（AI 代码溯源）
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1279
- **概要**：希望 Kimi CLI 原生支持 [git-ai](https://git-ai.com) 标准，在 `git blame` 中区分人类代码与 AI 生成代码。
- **为什么重要**：AI 代码归属（attribution）正在成为合规审计与企业落地的硬性需求；支持 vendor-agnostic 标准有助于生态兼容。
- **社区反应**：今日关闭（推测暂缓或转向调研）。

### 6. #2624 [OPEN] 文档请求：openai_legacy 兼容主机 /v1 示例
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2624
- **概要**：`docs/en/configuration/providers.md` 已涵盖 `openai_legacy`（Chat Completions），但 `type` 字段、`/login` vs `/v1/chat/completions`、端点拼接等细节易踩坑，希望补充完整示例。
- **为什么重要**：文档摩擦直接影响自部署 / 私有化用户的接入门槛；这种"看似小但高 ROI"的贡献值得官方快速跟进。
- **社区反应**：由 `cursor[bot]` 提出（自动化 bot 巡检），0 评论，预计会快速处理。

---

## 🛠️ 重要 PR 进展

> 提示：过去 24 小时仅 3 个 PR 有更新，完整列示如下。

### 1. #2622 [OPEN] 🔐 **安全升级**：asyncssh 2.21.1 → 2.23.1（修复 GHSA-2wxc-x7rj-hg8f）
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2622
- **内容**：在 `packages/kaos/pyproject.toml` 中将 `asyncssh` 升级到 2.23.1，同时刷新 `uv.lock`，修复两枚已知 GHSA（含 `GHSA-2wxc-x7rj-hg8f`、`GHSA-qr67-gv47-xwww`）。
- **意义**：SSH 协议栈漏洞属高危，且影响 `kaos` 子包；建议优先合并并打 patch release。

### 2. #2176 [OPEN] 🐛 Hook 系统：`UserPromptSubmit` 无法匹配 `list[ContentPart]`
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2176
- **内容**：当 `user_input` 是 `list[ContentPart]`（默认消息结构）时，hook 只处理 `str` 分支，其余全部回落为空字符串 `""`，导致正则匹配失效。源自 Issue #2148。
- **意义**：Hook 系统的可用性修复；多模态/富文本输入普及后，`ContentPart` 是默认路径，影响所有用户的 hook 行为。

### 3. #2595 [OPEN] 🐛 `StrReplaceFile` 拒绝编辑非 UTF-8 文件
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2595
- **内容**：`StrReplaceFile` 此前以 `errors="replace"` 解码整个文件，对任何非 UTF-8 字节写入 `\uFFFD`，会**破坏未涉及编辑区域**的二进制/混合编码文件。PR 改为对非合法 UTF-8 文件直接拒绝编辑。
- **意义**：解决了一个**破坏性写盘**的潜在数据丢失 Bug；策略上"拒绝"而非"静默替换"是更安全的选择。

---

## 📈 功能需求趋势

综合今日活跃的 6 个 Issue，社区关注方向可归纳为以下几类（按热度排序）：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **🧩 IDE 生态集成**（JetBrains、ACP） | #1272 | 持续诉求，ACP 协议层需要规范化文件/上下文传递 |
| **🔌 MCP 鉴权与远程服务** | #1211 | Notion Remote MCP 暴露凭据生命周期问题，Remote MCP 是趋势 |
| **🤖 计划/Agent 模式稳定性** | #2623 | 新功能上线后的回归风险，需重点跟进 |
| **📦 OpenAI 兼容与多 Provider** | #2624 | 自部署/私有化诉求旺盛，文档摩擦明显 |
| **📜 AI 代码溯源（compliance）** | #1279 | 长尾需求，但属于行业级趋势 |
| **🛠️ 工具调用协议契约** | #2621 | API 契约清晰度是开发者信任的关键 |

---

## 💬 开发者关注点

1. **🔴 API 契约一致性**（#2621，强烈情绪）
   开发者最在意的是"协议可预测"：当模型返回 `tool_calls` 时 `content` 是否允许为空，官方需要在 API 文档中明确，否则每个集成方都要写 workaround。

2. **🟠 新功能的回归风险**（#2623）
   Plan 模式这类核心新功能上线时，需要更完善的 e2e 测试覆盖 `Bash echo / ReadFile / ExitPlanMode` 的转移路径。

3. **🟡 第三方集成的边界**（#1272、#1211）
   IDE 插件与 Remote MCP 是 CLI 拓展边界的两大场景；ACP 协议的文件语义、MCP 凭据生命周期需要官方明示。

4. **🟢 安全与编码健壮性**（#2622、#2595）
   依赖 GHSA 主动跟进（#2622）、对非 UTF-8 文件的"破坏性写盘"主动防御（#2595）——安全与数据完整性是开发者底线。

5. **⚪ 文档摩擦成本**（#2624）
   多 Provider 配置的细节（`type` 字段、端点路径、`/login` 语义）仍需社区 bot 主动巡检补齐，建议官方做一次系统化梳理。

---

*日报生成时间：2026-08-28 ｜ 数据范围：GitHub Issues/PRs 过去 24 小时更新*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-28

> 数据来源：github.com/anomalyco/opencode | 统计窗口：过去 24 小时

---

## 今日速览

今日 OpenCode 连续发布两个补丁版本（**v1.18.24 → v1.18.25**），主要围绕 Azure 认证（Entra ID 通过 Azure CLI 登录）和 Bedrock 推理缓存进行修复与改进。社区热议焦点集中在 **Windows ARM64 原生构建断裂** 与 **旧版布局/多工程 UI 能否保留** 两类长期争议话题，同时 OpenCode Go 订阅相关的用量统计异常与缓存丢失问题持续累积。

---

## 版本发布

### v1.18.25（Core）
- **Bugfix**：Azure 认证修复，使 Azure CLI 登录不再依赖 Bun 运行时。

### v1.18.24（Core）
- **Bugfix**：Bedrock 推理响应不再被缓存为不可重放的空消息（修复此前会话可恢复性问题）。
- **Improvement**：Azure Provider 现可使用 Microsoft Entra ID（Azure CLI）登录，替代强制 API Key。
- **Improvement**：V1 版本开始读取受支持的 V2 配置字段，平滑旧用户迁移路径。

> 整体属于小步快跑式补丁，连续两天发布说明 1.18.x 系列的 Azure 链路尚在收尾。

---

## 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 为何重要 |
|---|---|---|---|---|
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **[FEATURE] 保留旧版布局选项** | OPEN | 41 / 👍43 | 长期最高呼声，开发者认为旧布局"主窗直达所有功能"的优势难以替代，团队虽未明示弃用但官方态度暧昧。 |
| [#21034](https://github.com/anomalyco/opencode/issues/21034) | gemma-4-26b/31b 工具调用循环/失败 | CLOSED | 21 / 👍20 | 影响开源本地模型生态，关闭意味着 1.18 系列与 LM Studio 最新引擎已可兼容。 |
| [#961](https://github.com/anomalyco/opencode/issues/961) | **Termux 支持** | CLOSED | 14 / 👍22 | Android 移动端 SSH 环境运行 OpenCode 终于落地，象征跨平台覆盖补全。 |
| [#38255](https://github.com/anomalyco/opencode/issues/38255) | 不同 Go 用量看板数据不一致 | OPEN | 10 | 月度 100% 限额 vs 实际仅消耗 $10，反映计费侧统计口径存在严重分歧。 |
| [#44958](https://github.com/anomalyco/opencode/issues/44958) | 拒绝响应被隐藏 + 对话历史消失（Go 套餐） | OPEN | 6 | 影响 muse-spark-1.2-contributor 用户，体验与稳定性双重问题。 |
| [#37527](https://github.com/anomalyco/opencode/issues/37527) | 不要废弃多项目/会话布局 + 稳定新标签页阅读区 | CLOSED | 6 | 与 #37012 互补，强调新标签布局的"orchestra"旧工作流不可一刀切。 |
| [#25287](https://github.com/anomalyco/opencode/issues/25287) | MCP 远程客户端缺少 socket/连接错误的传输层重试 | CLOSED | 6 | 远程 MCP 场景下断连/休眠恢复问题终于得到修复。 |
| [#45867](https://github.com/anomalyco/opencode/issues/45867) | Muse Spark 1.2 在 Zen Go 上间歇性 prompt cache miss | OPEN | 5 | 直接影响 Go 用户成本与延迟，2026-08-28 当天新发。 |
| [#45087](https://github.com/anomalyco/opencode/issues/45087) | **自动更新器吃掉了 266 GB 磁盘**（`~/.npm/_cacache`） | CLOSED | 5 | 长期运行 `opencode2 serve --service` 的服务器环境高危问题，伴随 [#45865](https://github.com/anomalyco/opencode/pull/45865) 已 revert 修复。 |
| [#21658](https://github.com/anomalyco/opencode/issues/21658) | Azure AI Foundry Microsoft Entra (OAuth) 认证 | OPEN | 4 / 👍10 | 已在 v1.18.24 落地 Azure CLI 认证，issue 本身诉求接近闭环。 |

---

## 重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 要点 |
|---|---|---|---|
| [#44946](https://github.com/anomalyco/opencode/pull/44946) | **chore: 将内嵌 Bun 升级到 1.4.0** | OPEN | 解决 CI 与发布构建使用的 runtime 版本升级。 |
| [#45878](https://github.com/anomalyco/opencode/pull/45878) | chore: 升级 Bun pin 到 1.4.0（needs:compliance） | CLOSED | 与 #44946 同步处理，修复 `bun:ffi` 在 windows-aarch64 缺失的问题（[#45875](https://github.com/anomalyco/opencode/issues/45875)）。 |
| [#45877](https://github.com/anomalyco/opencode/pull/45877) | fix: 允许 windows-arm64 通过安装脚本 | CLOSED | 修复 #44664，安装脚本不再因 `Unsupported OS/Arch` 拒绝 ARM64 Windows。 |
| [#45071](https://github.com/anomalyco/opencode/pull/45071) | fix(cli): 保留符号链接的配置文件 | OPEN | 原子替换解析后的目标而非链接本身，统一两条写入路径的符号链接处理。 |
| [#43128](https://github.com/anomalyco/opencode/pull/43128) | feat(app): 让提交/换行快捷键可配置 | OPEN | V2 App 通过既有快捷键设置暴露 prompt submit / newline 绑定，回应重度用户自定义需求。 |
| [#45844](https://github.com/anomalyco/opencode/pull/45844) | fix: Windows ARM64 暂时回退到 x64 构建 | CLOSED | 由于 `bun:ffi` 在 win-arm64 不可用，交互启动崩溃，回退 x64 作为短期缓解。 |
| [#45777](https://github.com/anomalyco/opencode/pull/45777) | **feat(core): 升级 MCP SDK 并支持 2026-07-28 协议** | OPEN | 替换为拆分后的 2.0.0 client/core/server 包，HTTP/stdio 双通道协商新协议同时保留旧服务器兼容。 |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | feat(opencode): 支持按 MCP 服务器粒度的信任配置 | OPEN | 用 fingerprint pinning + caFile 替代全局 `insecure: true`，既保留自签证书信任又不牺牲安全。 |
| [#45864](https://github.com/anomalyco/opencode/pull/45864) | fix(ai): 让 chat reasoning 维持单一生命周期 | OPEN | 修复 #45791：openai-chat 流中 reasoning 块被反复开启/关闭导致空块抖动问题。 |
| [#45182](https://github.com/anomalyco/opencode/pull/45182) | fix(protocol): 恢复 OpenAPI 中 SSE payload schema | OPEN | 修复 #44911：`V2Event` 与 `SessionLogItem` 重新可达，便于第三方 SDK 重新生成。 |

> 备选亮点 PR：[#45861](https://github.com/anomalyco/opencode/pull/45861)（在 durable output 之后继续可重试失败）、[#45853](https://github.com/anomalyco/opencode/pull/45853)（docx/xlsx/pptx/pdf 离线预览）、[#43941](https://github.com/anomalyco/opencode/pull/43941)（会话头显示当前项目名）。

---

## 功能需求趋势

从近 24 小时高互动 Issue 提炼，社区关注点呈现以下五条主线：

1. **🔐 企业级认证扩展**  
   Azure Entra ID / OAuth（[#21658](https://github.com/anomalyco/opencode/issues/21658)）、Azure CLI 登录（已在 v1.18.24 落地）持续升温，指向 Azure AI Foundry、Microsoft 生态的企业接入需求。

2. **🖥️ 跨平台覆盖与 ARM 生态**  
   Windows ARM64 原生构建（[#45875](https://github.com/anomalyco/opencode/issues/45875)）、Termux（[#961](https://github.com/anomalyco/opencode/issues/961)）相继被处理；移动端、ARM 笔电、SSH 远程开发场景已成为用户硬性预期。

3. **🎛️ UI 体验与可定制性**  
   旧版布局保留（[#37012](https://github.com/anomalyco/opencode/issues/37012)、[#37527](https://github.com/anomalyco/opencode/issues/37527)）、快捷键可配置（[#43128](https://github.com/anomalyco/opencode/pull/43128)）、字体设置生效（[#45128](https://github.com/anomalyco/opencode/pull/45128)）说明 V2 迁移仍需大量"勿破坏旧体验"的兜底。

4. **🔌 MCP 协议升级与稳定性**  
   SDK 升至 2.0.0 + 2026-07-28 协议（[#45777](https://github.com/anomalyco/opencode/pull/45777)）、传输层重试（[#25287](https://github.com/anomalyco/opencode/issues/25287)）、按服务器粒度信任（[#40125](https://github.com/anomalyco/opencode/pull/40125)）形成"协议现代化 + 可靠性 + 安全"三位一体推进。

5. **💳 计费 / 用量透明化**  
   多条 Go 套餐相关问题（[#38255](https://github.com/anomalyco/opencode/issues/38255)、[#45858](https://github.com/anomalyco/opencode/issues/45858)、[#34376](https://github.com/anomalyco/opencode/issues/34376)）反映计费页百分比计算、推荐奖励错账户、账单历史缺失等需集中治理的运营问题。

---

## 开发者关注点与高频痛点

- **本地/小模型兼容性**：Gemma-4 系列在 OpenCode 中的工具调用稳定性仍需借助 LM Studio / llama.cpp 持续打补丁，社区期待 OpenCode 主动适配新模型而非被动跟进（[#21034](https://github.com/anomalyco/opencode/issues/21034)）。

- **长期运行服务的磁盘安全**：[#45087](https://github.com/anomalyco/opencode/issues/45087) 暴露了 `opencode2 serve --service` 自动更新与 npm 缓存无上限的隐患，单实例可吞噬 266 GB；尽管 [#45865](https://github.com/anomalyco/opencode/pull/45865) 已 revert，相关防御策略（缓存上限、版本去重、运行版本覆盖机制）仍需补齐。

- **会话/上下文鲁棒性**：aborted turn 持久化为空 assistant message（[#37946](https://github.com/anomalyco/opencode/issues/37946)）、空 text part 触发 422（[#31046](https://github.com/anomalyco/opencode/issues/31046)）、Bedrock 推理被错误缓存为不可重放消息（v1.18.24 已修复）—— 表明"流中断 + 重放"路径仍是 AI Coding 工具的核心可靠性战场。

- **PowerShell / Windows 兼容细节**：旧 PowerShell 5.1 vs 7（[#17372](https://github.com/anomalyco/opencode/issues/17372)）、`AttachConsole` 失败导致启动报警音（[#32389](https://github.com/anomalyco/opencode/issues/32389)）这类"平台默认行为不一致"的小坑持续困扰 Windows 用户。

- **同源多副本 / git tracking 副作用**：同一仓库不同 commit 副本被错位解析（[#34373](https://github.com/anomalyco/opencode/issues/34373)），属于 V2 工作区识别策略的边界场景。

- **提示词缓存与成本可见性**：Muse Spark 1.2 在 Zen Go 上的 prompt cache miss（[#45867](https://github.com/anomalyco/opencode/issues/45867)）直接关联用户账单，开发者期望"缓存命中率 / 节省金额"在 UI 中可观测。

---

*日报由社区数据自动汇总整理，如需特定维度深挖请告知。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-28

> 数据源：`github.com/badlogic/pi-mono`（earendil-works/pi 仓库）  
> 统计周期：过去 24 小时  
> Issues 更新 50 条 | PRs 更新 20 条 | 新版本：暂无

---

## 📌 今日速览

今天的社区焦点集中在 **TUI 渲染稳定性** 与 **多 Provider 兼容性** 两个方向：TUI 在流式输出、软换行、复制选择、长输出渲染等多个场景暴露出同类换行/布局问题，已有多项修复 PR 合并；与此同时，OpenAI Responses、Bedrock、DeepSeek 兼容端点、OpenRouter 免费模型均出现 400 / 异常错误，社区正在密集提交针对性 fix。另外，一个伪装为官方扩展的 npm 包 `picodesandbox` 被举报存在仿冒行为，安全话题值得开发者留意。

---

##  版本发布

**无新版本发布。** 当前最新仍为 `v0.84.3`，但该版本下被报告出多项回归问题（如 #8584 TUI 行渲染损坏、#8610 HttpsProxyAgent 构造失败），多个修复 PR 正在等待下一个补丁版本合入。

---

##  社区热点 Issues

| # | Issue | 状态 | 关注度 | 要点 |
|---|-------|------|--------|------|
| [#8584](https://github.com/earendil-works/pi/issues/8584) | TUI 行渲染损坏：长工具输出后正文"逐词换行" | OPEN | 💬14 👍6 | 多个用户高频复现，疑似终端宽度检测/重排逻辑在流式刷新时被工具输出污染；影响大量用户阅读体验 |
| [#6922](https://github.com/earendil-works/pi/issues/6922) | llama.cpp 无法作为默认 provider | CLOSED | 💬12 👍14 | 启动报 "No models available" 的体验性 BUG，已修复；👍数最高，体现社区对本地模型支持的高度期待 |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | TUI 在 WSL2/Windows Terminal 逐词换行（0.84.3） | CLOSED | 💬3 👍4 | 与 #8584 同根因，修复后闭环；提示终端兼容矩阵仍需扩展测试 |
| [#8673](https://github.com/earendil-works/pi/issues/8673) | Markdown 软换行被当硬换行（思考块阅读极差） | CLOSED | 💬4 👍2 | `marked` 未处理 CommonMark soft break；已有对应修复 PR #8674 |
| [#7720](https://github.com/earendil-works/pi/issues/7720) | 全屏 TUI 模式下希望可关闭"选中即复制" | CLOSED | 💬4 👍1 | 用户体验诉求，PR #8731 已实现 `copyOnSelect` 设置 |
| [#8610](https://github.com/earendil-works/pi/issues/8610) | v0.84.3 代理下 Vertex 调用报 `HttpsProxyAgent is not a constructor` | CLOSED | 4 | 代码分包回归，已通过 PR #8723 引入命名导出插件修复 |
| [#8728](https://github.com/earendil-works/pi/issues/8728) | DeepSeek 兼容端点跨模型 replay 报 400 | CLOSED | 💬3 | `detectCompat` 未对 DeepSeek 自动启用 `requiresReasoningContentOnAssistantMessages`；PR #8732 同步修复 |
| [#8774](https://github.com/earendil-works/pi/issues/8774) | OpenAI Responses 模型压缩失败（tool_choice 400） | CLOSED | 💬1 | 涉及 `/compact`、阈值压缩、上下文溢出恢复全链路，影响 compaction 可靠性 |
| [#6907](https://github.com/earendil-works/pi/issues/6907) | README 缺少安装说明（开放已 40+ 天） | OPEN | 💬3 | 新用户引导缺失，呼声不高但持续未解决，影响上手 |
| [#8770](https://github.com/earendil-works/pi/issues/8770) | **安全举报**：`picodesandbox` 包疑似仿冒官方 `pi-sandbox` | CLOSED | 💬1 | 仓库指向与官方插件相同，涉嫌冒名；社区已标记 **Impersonation**，建议官方加强包命名空间与发布治理 |

> 另有两个 OPEN 高优先级问题值得关注：[#8762](https://github.com/earendil-works/pi/issues/8762) 会话选择器在解析大文件时全量解析 JSONL；[#8761](https://github.com/earendil-works/pi/issues/8761) 全屏 TUI 的 `openUrl` 未暴露给扩展，无法替换默认浏览器。

---

## 🛠 重要 PR 进展

### ✅ 已合并 / 已闭环（Closed）

| # | PR | 修复/改进 |
|---|----|----------|
| [#8674](https://github.com/earendil-works/pi/pull/8674) | 修复 markdown 软换行渲染 | 让 `marked` 在 paragraph 中将软换行渲染为空格，思考块恢复正常段落排版。Fixes #8673 |
| [#8723](https://github.com/earendil-works/pi/pull/8723) | 暴露 `https-proxy-agent` 命名导出 | 通过 `build-coding-agent-bundle` 插件新增命名导出 chunk，修复 Vertex + 代理场景下的构造错误。Closes #8610 |
| [#8764](https://github.com/earendil-works/pi/pull/8764) | Windows 下 `!` 解析尊重 `settings.shellPath` | `resolve-config-value.ts` 改为显式传入 `customShellPath`，避免误用 WSL bash shim。Fixes #8763 |
| [#6848](https://github.com/earendil-works/pi/pull/6848) | 压缩摘要引入有限重试与指数退避 | 解决一次性中段 socket 死亡导致整个 compaction 失败的问题。Fixes #6647 |
| [#8732](https://github.com/earendil-works/pi/pull/8732) | DeepSeek 系端点跨模型 replay 保留 `reasoning_content` | 解决 DeepSeek / api.b.ai / sensenova 在 thinking 模式下的 400。Closes #8728 |
| [#8737](https://github.com/earendil-works/pi/pull/8737) | `NO_PROXY` 通配与子域匹配 | 修复 `*.example.com`、`.example.com`、裸域以及 IPv6 解析。Fixes #8736 |
| [#8731](https://github.com/earendil-works/pi/pull/8731) | 全屏 TUI 可关闭选中复制 | 新增 `copyOnSelect` 设置（默认 true），关闭后 `Ctrl+X` 触发复制。Addresses #7720 |
| [#8727](https://github.com/earendil-works/pi/pull/8727) | TUI 屏外变化保留原生 scrollback | 用历史快照替代整段 transcript 重绘，仅在必要时回退全量重绘 |
| [#8355](https://github.com/earendil-works/pi/pull/8355) | 扩展 UI 提示事件 | 新增 `ui_prompt_start` / `ui_prompt_end`，便于客户端展示 "等待用户输入" 状态。Addresses #5329 |
| [#6248](https://github.com/earendil-works/pi/pull/6248) / [#3106](https://github.com/earendil-works/pi/pull/3106) | TUI 停止用空格补齐行尾 | 不带背景色时不再 pad，解决复制粘贴到 shell 时的尾随空格炸行问题 |

###  仍在评审（Open）

- **[#8766](https://github.com/earendil-works/pi/pull/8766)** Write/Edit 工具输出改为紧凑、文件聚焦的展示（行号、+/- 计数等），大幅降低 diff 扫读成本
- **[#7602](https://github.com/earendil-works/pi/pull/7602)** 压缩与分支摘要支持配置模型与思考等级，处理 provider 上下文窗口错误。Closes #7553
- **[#8734](https://github.com/earendil-works/pi/pull/8734)** OpenAI Responses 兼容端点支持 top-level `instructions`，避免与 `input` 重复。Closes #8388
- **[#8262](https://github.com/earendil-works/pi/pull/8262)** 修复 `sendCustomMessage({triggerTurn:true})` 不派发 `input` hook / `before_agent_start` 的 bug
- **[#8744](https://github.com/earendil-works/pi/pull/8744)** 全屏 TUI 选择加入 overlay 排除选项
- **[#8743](https://github.com/earendil-works/pi/pull/8743)** 忽略过时的 Kitty 图像转换缓存，避免竞态导致渲染错位
- **[#8725](https://github.com/earendil-works/pi/pull/8725)** 内存分支前先 `teardownCurrent()`，避免 `toolResult` 落到错会话
- **[#8775](https://github.com/earendil-works/pi/pull/8775)** 文档：移除 issue 专属回归测试放置规则

---

##  功能需求趋势

从过去 24 小时以及最近被关闭/被推进的 Issue 提炼，社区关注点呈现以下方向：

1. **TUI 体验一致性**：换行、复制、滚动、终端宽度检测是被提及最多的"体感类"问题，WSL2 / Windows Terminal / Apple Terminal 等终端矩阵的兼容仍是痛点（#8584、#8673、#8675、#7720、#8769）。
2. **多 Provider 协议深化**：DeepSeek 兼容端、Bedrock 用量归一化、OpenAI Responses `instructions`、OpenRouter `:free` 的 `max_tokens` 上限——Pi 正在向"协议网关"演化，每个 provider 的语义差异都需要专门的兼容层（#8728、#8752、#8774、#8760）。
3. **压缩与上下文管理**：compaction 的稳定性（重试、错误恢复、可配置模型）持续是开发者工作流的瓶颈（#8774、#6848、#7602）。
4. **扩展 API 增强**：openUrl 暴露、UI 提示事件、turn-start hook 派发，扩展作者希望 Pi 提供更细粒度的控制点（#8761、#8355、#8262）。
5. **配置与本地化**：中文 README、JSONC 设置、README 安装说明、global `~/.agents/AGENTS.md` 等"易用性"补丁密集出现（#8772、#8765、#6907、#5002）。
6. **新模型上架**：Qwen3.8-flash、Cortecs provider 等持续被请求（#8709、#8199）。
7. **安全与治理**：仿冒扩展包 `picodesandbox` 的举报提示官方需要加强对 npm 命名空间与发布审核（#8770）。

---

## 💡 开发者关注点

- **"复制即格式破坏"是反复出现的高频痛点**：尾随空格、全行复制不能选列、选中即覆盖剪贴板——复制粘贴是 TUI 工具的基础交互，需要默认安全。
- **流式渲染的"重排风暴"**：长工具输出后宽度被窄化导致正文逐词换行，是 0.84.3 后最影响信任度的体验问题，开发者明确希望对每个终端与场景做矩阵测试。
- **回归测试缺位**：从 #8610（HttpsProxyAgent 分包）、#8760（OpenRouter free max_tokens）可以看出，跨 provider / 跨终端的回归覆盖度仍不足，社区在 PR #8775 中也专门讨论过测试放置规则。
- **扩展可观察性诉求强烈**：UI 状态事件、openUrl hook、turn-start hook 等说明越来越多的应用层能力（子代理、监控、UI 包装）开始依赖 Pi 的扩展 API，文档与稳定性需要跟上。
- **本地/自托管模型期待高**：llama.cpp 作为默认 provider 的 BUG 拿到 14 👍，说明本地推理场景是社区重要增长极。
- **Windows 平台细节**：shellPath 解析、`!` 前缀命令静默失败等暴露了 Windows 下 shell / WSL 共存的复杂性，需要在文档与解析层双管齐下（#8763、#8764）。

---

> 📅 下一份日报将重点关注 v0.84.x 补丁版本的合入节奏，以及 DeepSeek/OpenAI Responses/Bedrock 兼容层是否进入稳定状态。如有特定方向希望追踪，欢迎反馈。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-28

---

## 一、今日速览

今日发布 **v0.22.2-nightly.20260828** 版本，重点修复 Web Shell 会话恢复与钉钉富文本通道问题。社区活跃度集中在 **TUI 架构迁移（ink → OpenTUI）**、**Anthropic 协议流安全加固**、**VS Code 伴侣 WebShell 切流** 三条主线，多个 CI E2E 失败 issue 集中涌现，需关注主干稳定性。维护者 wenshao、yiliang114、chiga0 等持续推进 review/auto-fix 工具链与底层架构治理。

---

## 二、版本发布

**v0.22.2-nightly.20260828.7357136dd1** 已发布

主要变更：
- `fix(web-shell)`: 恢复保存的会话 diff（@ytahdn, PR #10093）
- `fix(channels)`: 保留钉钉富文本多消息能力（commit 73...）

> 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.22.2-nightly.20260828.7357136dd1

---

## 三、社区热点 Issues

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| 1 | [**#5975**](https://github.com/QwenLM/qwen-code/issues/5975) `P2 · bug` | 💬13 · 👍1 | **流式响应 120s 超时**：`v0.19.3` 升级后频繁出现 `No stream activity for 120000ms after 19 chunks`，影响面广，标 `welcome-pr` 欢迎外部贡献 |
| 2 | [**#8662**](https://github.com/QwenLM/qwen-code/issues/8662) `tracking` | 💬11 | **ink → OpenTUI 迁移跟踪**：当前 ink 7+React 19 重度补丁（~1037 行）引发闪烁、渲染问题，今日 PR #10368 提交第三批 live-session / input 渲染层 |
| 3 | [**#4063**](https://github.com/QwenLM/qwen-code/issues/4063) `in-progress` | 💬11 · 👍1 | **core+cli 架构审查清单**：14 项结构性问题，含 P0 级 `ContentGenerator` 被 `@google/genai` 类型绑架（136 个文件） |
| 4 | [**#9005**](https://github.com/QwenLM/qwen-code/issues/9005) `P1 · bug` | 💬8 | **Anthropic 流安全缺失**：相比 OpenAI wire 缺少关键的 stream-safety 保护，需对齐 |
| 5 | [**#10227**](https://github.com/QwenLM/qwen-code/issues/10227) `P2 · bug` | 💬7 | **自定义模型供应商（Moonshot）无法对话**：schema 校验失败，第三方 provider 集成痛点 |
| 6 | [**#8083**](https://github.com/QwenLM/qwen-code/issues/8083) `CLOSED` | 💬7 | **Config context 所有权显式化**（design）：解决 `Object.create(base)` 隐式委派带来的子代理/memory 副作用 |
| 7 | [**#4542**](https://github.com/QwenLM/qwen-code/issues/4542) `proposal` | 💬4 | **L2 能力分层 / DaemonWorkspaceService**：实现 `/acp↔REST` 完全等价的前置方案 |
| 8 | [**#10061**](https://github.com/QwenLM/qwen-code/issues/10061) `P2 · feature` | 💬3 | **ACP 路径统一**：将 stdio / HTTP ACP 合并为传输无关 core，升级 SDK 至 1.4.x |
| 9 | [**#9150**](https://github.com/QwenLM/qwen-code/issues/9150) `P2 · enhancement` | 3 | **斜杠命令契约与 UI 状态解耦**：命令 loader 错误地 import 了 `ui/` 层 |
| 10 | [**#10380**](https://github.com/QwenLM/qwen-code/issues/10380) `P2 · bug` | 💬2 | **OpenAI 兼容网关 HTTP 413 后自动压缩不恢复**：长会话永久不可用，需会话层补偿 |

> 此外今日集中涌现 8+ 条 `qwen-main-ci-failure` E2E 失败 issue（#10356、#10370、#10375 等），主干 CI 稳定性需关注。

---

## 四、重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|----|------|
| 1 | [**#10221**](https://github.com/QwenLM/qwen-code/pull/10221) | review tooling | 补齐 #9655 post-mortem 中"散文执行审计 + 反框架审计"两个评审视角，替换 #9717 |
| 2 | [**#10368**](https://github.com/QwenLM/qwen-code/pull/10368) | TUI 重构 | **OpenTUI 迁移第三批**：live-session 流式折叠、消息渲染、流式 markdown 愈合、progressive MCP 显示 |
| 3 | [**#9811**](https://github.com/QwenLM/qwen-code/pull/9811) | IDE | **VS Code 伴侣 UI 切流完成**：从共享 WebUI 切到 WebShell，workspace-scoped daemon + loopback + per-process token |
| 4 | [**#10300**](https://github.com/QwenLM/qwen-code/pull/10300) | 核心 | 删除/归档/冲突修复时，**会话清理阶段保留写入租约所有权**，避免幽灵写者 |
| 5 | [**#10183**](https://github.com/QwenLM/qwen-code/pull/10183) | memory | **结构化按需召回**：将扁平 body-heavy memory 升级为两级 ref/title 树 + 推送/拉取协议 + 专用 tool |
| 6 | [**#10115**](https://github.com/QwenLM/qwen-code/pull/10115) | web-shell | 会话概览改为响应式数据表（宽屏比例列、窄屏滚动 + 固定列、排序、分页记忆） |
| 7 | [**#10379**](https://github.com/QwenLM/qwen-code/pull/10379) | web-shell | **Composer `+` 菜单**（opt-in）：聚合附件、文件引用、扩展、MCP、skills，适配分屏面板 |
| 8 | [**#10257**](https://github.com/QwenLM/qwen-code/pull/10257) | channel | 守护进程 channel 会话恢复时携带 `sourceType/sourceId`，仅对无持久化元数据的旧会话生效 |
| 9 | [**#10213**](https://github.com/QwenLM/qwen-code/pull/10213) | core | **修复 `team_delete` 文件清理静默失败**：`Promise.allSettled` 后未检查 EACCES/EIO 等错误 |
| 10 | [**#10345**](https://github.com/QwenLM/qwen-code/pull/10345) | CI | 恢复 `main` 上 post-merge 的 `push` 触发，仅 `test` job 消费，nightly 不变 |

> 已合并快讯：#10376（E2E 临时目录移出 `/tmp`）、#10374（ACP cron fixture 按 prompt 路由）、#10381（review ack 重新发布到指令下方并 👀 反应）。

---

## 五、功能需求趋势

从全部 issue / PR 抽象出的社区关注方向（按热度）：

1. **️ IDE 与桌面端集成（最热）** — VS Code 伴侣 WebShell 切流（#9811）、ACP stdio/HTTP 统一（#10061）、Composer `+` 菜单（#10379）显示"IDE 优先"策略
2. **⚡ 终端 UX / 渲染层重构** — ink → OpenTUI 迁移（#8662 → #10368 三批推进）解决闪烁与布局问题
3. **🤖 多模型与 Provider 兼容** — Anthropic wire 流安全（#9005 P1）、Moonshot/自定义 provider schema（#10227）、HTTP 413 压缩恢复（#10380）
4. **🧠 Memory & Context 管理** — 结构化按需召回（#10183）、Config context 所有权（#8083 已 CLOSED）
5. **🔌 通道（Channel）生态** — 钉钉富文本/状态卡片/动态标签（#10354、#10366、release v0.22.2）、DWS 直接回复可见性（#10267）、MCP Apps 内联 UI（#10369）
6. **🛠️ 评审 / 自修复工具链** — 多轮评审收敛信号熔断器（#10122）、候选去重（#10121）、散文/反框架审计（#10221）
7. **📚 文档国际化** — 韩语 README 支持（#8551 已 CLOSED）
8. **🏗️ Daemon 架构 L2 分层** — `DaemonWorkspaceService` 提案（#4542）为 `/acp↔REST` 等价铺路

---

## 六、开发者关注点

综合 issue 评论与 PR 描述，高频痛点与诉求如下：

- **🔴 主干 CI 不稳**：单日内 8+ 个 E2E 失败 issue 由 `qwen-code-dev-bot` 自动开单，#10376 / #10371 已尝试 `/tmp` 路由与串行化测试，关注 `/review` 工作流是否会因红 CI 反复触发
- ** 流式响应脆弱**：#5975（120s 无活动）、#9005（Anthropic 缺失 stream-safety）、#3772（reasoning_content 回传 400）— 流式协议层是多 provider 共性薄弱点
- ** 第三方 provider 接入成本**：Moonshot schema 校验失败（#10227）、deepseek reasoning_content 兼容（#3772）— 期望更宽松的 OpenAI 兼容层与 schema 适配
- ** 架构债清理**：#4063 列出的 14 项结构性问题（ContentGenerator 类型绑架、slash command 耦合 UI #9150）需要长期投资
- ** Web Shell 体验升级**：composer `+` 菜单（#10379）、会话表格（#10115）— 桌面化产品形态逐步成型
- ** 评审工具自我改进**：wenshao 主导的 `/review` 流水线持续迭代（dedup → verify → takeover 熔断 → 多视角审计），体现"用工具治理工具"的研发文化

---

>  **日报小结**：v0.22.2 系列迭代聚焦"通道可靠性 + 桌面端 UI 升级 + TUI 底层重构"三件大事，社区贡献者活跃度高（@wenshao、@yiliang114、@chiga0、@ytahdn、@qqqys、@qwen-code-dev-bot 为主力）。建议优先跟进 #5975 流式超时与 #9005 Anthropic 安全加固，二者均是影响线上用户的 P1/P2 级问题。

*数据来源：GitHub REST API · 采样窗口：2026-08-27 → 2026-08-28 UTC*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-28**

> 数据来源：GitHub Issues & Pull Requests（过去 24 小时更新）

---

## 📌 今日速览

今日社区围绕 **0.9.12 版本集成** 密集推进，多个核心 PR 集中合并：MCP/插件启动流程重构（#5658、#5677）、Tool Result 批次连续性修复（#5679）以及进程启动性能优化（#5664、#5665）均已 Closed。同时，**provider-native web search** 适配器新增 DeepSeek、Qwen、Z.AI/BigModel 三家厂商，扩展多模型搜索能力。

---

## 🚀 版本发布

过去 24 小时无新版本发布。当前社区主线工作仍聚焦在 `v0.9.12` 集成分支（`codex/v0912-integration-20260823`）。

---

## 🔥 社区热点 Issues

| # | Issue | 标题 | 状态 | 评论数 |
|---|-------|------|------|--------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | EPIC-005: CodeWhale TUI Crate Decomposition | Umbrella tracking issue | OPEN | ⭐ 18 |
| [#5620](https://github.com/Hmbown/CodeWhale/issues/5620) | Context pressure warning 瞬态失效 | bug | OPEN | 9 |
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | 18 个 DeepSeek 专属闸门应转为 provider-neutral | v0.9.12 | OPEN | 6 |
| [#5587](https://github.com/Hmbown/CodeWhale/issues/5587) | 死代码清理 Phase 2-4（75 个 test-only 标记 / ~242 个过期 allow） | cleanup | OPEN | 4 |
| [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) | Plugin UX 对齐 Claude Code（主动推荐、热重载） | enhancement | OPEN | 3 |
| [#5249](https://github.com/Hmbown/CodeWhale/issues/5249) | v0.9.5 build-time lane（打破单体构建税） | epic | OPEN | 2 |
| [#5625](https://github.com/Hmbown/CodeWhale/issues/5625) | non-blocking "pending user input" peek 工具 | enhancement | OPEN | 2 |
| [#5618](https://github.com/Hmbown/CodeWhale/issues/5618) | 用 gix（gitoxide）替换内部 `git` CLI 调用 | enhancement | OPEN | 2 |
| [#4402](https://github.com/Hmbown/CodeWhale/issues/4402) | v0.9.2 Attention UX（聚焦感知通知 + 返回摘要） | enhancement | OPEN | 2 |
| [#5681](https://github.com/Hmbown/CodeWhale/issues/5681) | 将原生搜索扩展到 DeepSeek、Qwen、Kimi、Z.AI、MiMo | provider | OPEN | 0 |

**重点解读：**
- **#5316**：最热门议题，作为 crate 拆分的伞形跟踪 issue，规范子 EPIC 与 PR 报告机制。
- **#5620**：影响使用安全的关键 Bug——context pressure 警告转瞬即逝，agent 不会主动响应，导致上下文静默劣化。
- **#5588**：v0.9.12 范围内对所有 `deepseek` 字面量做审计，发现 18 处概念上应 provider-neutral 的行为闸门。

---

## 🛠 重要 PR 进展

| # | PR | 标题 | 状态 |
|---|----|------|------|
| [#5683](https://github.com/Hmbown/CodeWhale/pull/5683) | feat(web): DeepSeek 原生搜索适配器 | OPEN |
| [#5684](https://github.com/Hmbown/CodeWhale/pull/5684) | feat(web): Qwen 原生搜索适配器 | OPEN |
| [#5685](https://github.com/Hmbown/CodeWhale/pull/5685) | feat(web): Z.AI & BigModel 原生搜索 | OPEN |
| [#5682](https://github.com/Hmbown/CodeWhale/pull/5682) | fix(web): fallback 前强制 native 搜索约束 | OPEN |
| [#5658](https://github.com/Hmbown/CodeWhale/pull/5658) | feat(tui): 将 MCP/插件启动作为 session 集呈现 | ✅ CLOSED |
| [#5677](https://github.com/Hmbown/CodeWhale/pull/5677) | feat(tui): 救援合并 MCP/插件启动重构至 main | ✅ CLOSED |
| [#5679](https://github.com/Hmbown/CodeWhale/pull/5679) | fix(chat): 保持 tool result 批次连续 | ✅ CLOSED |
| [#5664](https://github.com/Hmbown/CodeWhale/pull/5664) | perf: 削减进程启动、诊断派发、前台命令延迟 | ✅ CLOSED |
| [#5665](https://github.com/Hmbown/CodeWhale/pull/5665) | perf(tui): per-turn pressure 路径单遍 token 核算 | ✅ CLOSED |
| [#5666](https://github.com/Hmbown/CodeWhale/pull/5666) | chore(tui): 为审计后的 test-only helper 加 gate | ✅ CLOSED |

**功能/修复亮点：**
- **#5683-#5685** 形成**多厂商原生搜索矩阵**，DeepSeek/Qwen/Z.AI 各家走对应官方 search 端点，自定义兼容端点 fail-closed。
- **#5658 / #5677** 解决"启动卡在 `working · 22s · 0 steps`"的体验问题——把插件发现与 MCP 连接作为 session-owned boot state 暴露给 UI。
- **#5679** 修复 tool-call batch 不连续导致的孤儿 tool result 与重复 ID 问题。
- **#5664 / #5665** 性能优化覆盖启动时延与每 turn 上下文核算路径。
- **#5666** 是 #5587 死代码清理已审批的首批切片（13 个 `allow(dead_code)` → `cfg(test)`）。

**已合并的依赖更新：** futures-util 0.3.33→0.3.34、async-trait 0.1.91→0.1.92、uuid 1.24→1.25、rio-vt、nixpkgs（#5669）等。

---

## 📈 功能需求趋势

从本期 Issues 中提炼出以下社区关注方向：

1. **🧩 架构拆分与构建性能** — #5316（crate 分解）、#5249（打破单体构建税）共同指向 workspace 体积过大（68.2 万行 / 620 文件单 crate）导致的体验税。
3. **🌐 多 Provider 中立化** — #5588（18 处 provider 闸门）、#5681 + #5683-#5685（多厂商原生搜索）显示社区正系统性摆脱 DeepSeek 专属实现。
5. **🛡 安全 / 上下文保护** — #5620（context pressure 失效）、#5637（MCP 密钥按运行时作用域）、#5633（路由级 tool projection）是运行时可靠性与秘密安全三条主线。
7. **🤝 人机协作（Human-in-the-loop）** — #5625（mid-turn peek tool）、#4402（Attention UX）让 agent 能在中途获取用户引导而非盲目执行。
9. **🔌 插件与 MCP 生态** — #5579（Claude Code 插件 UX 对齐）、#5658/#5677（MCP/插件启动呈现）。
11. **⚡ 性能优化** — #5664、#5665、#5617（减少 git 后台探测）、#5618（gix 替代 git CLI）。

---

## 💬 开发者关注点

通过 Issues 与 PR 描述中的"问题陈述"与"动机"段落，可归纳出开发者社区的高频痛点：

- **冷启动卡死感**：MCP + 插件顺序加载，首 turn 长时间停留在 `working · 0 steps`，无可见进度 → 已通过 #5658/#5677 缓解。
- **Git 探针占用 `.git/index.lock`**：codewhale 的只读探测在用户 git 工作流中造成竞争 → #5617 已关，后续用 gix（#5618）彻底解决进程派生开销。
- **Context 警告无响应**：compaction 信号一闪而过，agent 既不主动收尾也不预警用户，造成"静默退化"（#5620）。
- **多 session 单机互斥**：v0.9.12 引入的全局 single-owner 锁使第二个 codewhale 启动直接失败（#5630，已修复）。
- **构建税**：68 万行单 crate 的 workspace 让 edit-compile / commit / test / release 全部被拖累（#5249），需要 crate 拆分 + build-SHA 增量优化。
- **Tool call batch 不连续**：用户/系统内容插入后导致 defer 媒体与重复 tool-call ID，影响下游渲染（#5679，已修复）。
- **进程启动过重**：诊断子命令无用 45-thread tokio runtime、models.dev 每次进程启动反复解析（#5664）。
- **Provider 绑定过深**：18 处概念上 provider-neutral 的代码点仍硬编码 deepseek 行为（#5588）。

---

*报告生成时间：2026-08-28｜覆盖窗口：过去 24 小时｜样本：19 个活跃 Issues + 50 个活跃 PR*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*