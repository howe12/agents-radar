# AI CLI 工具社区动态日报 2026-09-01

> 生成时间: 2026-09-01 03:02 UTC | 覆盖工具: 9 个

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

# AI CLI 工具社区动态横向对比分析报告

**数据周期**：2026-09-01  
**覆盖工具**：OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI  
**（Claude Code 本日数据缺失，不纳入对比）**

---

## 1. 生态全景

AI CLI 工具市场已进入**多极竞合的成熟期**：8 款主流工具同步活跃，单日合并/推进的 PR 合计超过 60 条、活跃 Issue 超过 100 条，呈现出"模型层去中心化、交互层趋同化、安全治理前置化"的整体态势。**MCP 协议**正在成为跨工具的隐性主战场（Codex、Copilot CLI、OpenCode 均有协议级痛点），而**多 Agent 架构、长会话压缩、Windows 跨平台兼容**是当前各社区共同面对的"三座大山"。与此同时，新玩家如 Pi、OpenCode、DeepSeek TUI 通过**Provider 生态扩张 + IDE 深度集成**切入差异化赛道，老牌工具（Codex、Copilot CLI）则持续承压于**企业级稳定性与回归控制**。

---

## 2. 各工具活跃度对比

| 工具 | 活跃 Issue | 推进 PR | 新版本 | 主要节奏特征 |
|---|---|---|---|---|
| **OpenAI Codex** | ~50（Top 10 精选） | 10 | ✅ rust-v0.152.0 + 2 alpha | 高频发布，机器人 PR 占比极高 |
| **Gemini CLI** | 50+ | 10 | ✅ v0.59.0-nightly | 自动化 nightly 滚动 + 安全密集提交 |
| **GitHub Copilot CLI** | 23 | **0** | ✅ v1.0.83-0 预发布 | 回归问题集中爆发，PR 提交停滞 |
| **Kimi Code CLI** | 1 | 2 | ❌ | 静默期，正处于产品迁移过渡 |
| **OpenCode** | 50 | 20 | ❌ | 全员高活跃，Provider 生态快速扩张 |
| **Pi** | ~30 | 10+ | ❌ | 重点 PR 多为新 Provider 集成 |
| **Qwen Code** | ~40 | 10+ | ✅ v0.22.3-nightly | 高度自治的 bot 化提交流水线 |
| **DeepSeek TUI** | ~25 | 10 | ❌ | 架构重构期（Tideline + Provider 路由统一） |

**关键观察**：
- **OpenCode 是当日绝对活跃度冠军**（50 Issues + 20 PRs），社区参与度领跑；
- **Copilot CLI 出现"PR 真空"**（24h 内 0 条 PR），与回归问题集中爆发形成强反差；
- **Codex 与 Qwen Code 已高度依赖 bot 流水线**，人工评审大量前置。

---

## 3. 共同关注的功能方向

### 3.1 MCP 协议稳定性（最广泛痛点）
- **OpenAI Codex**：routed MCP OAuth token 自动刷新长期失效（#17265，60 👍）
- **GitHub Copilot CLI**：双时代协议握手混乱导致 -32022 错误（#4525），启动缺少 bounded budget（#4678）
- **OpenCode**：MCP 相关连接性问题散见于多 Issue
- **Qwen Code**：Web Shell 加载 MCP 后无法对话（#10228）

### 3.2 长会话 / 上下文压缩管理
- **GitHub Copilot CLI**：失败压缩无界重试（#4663、#2861）、V8 堆溢出（#4664）、上下文窗口不可见（#1953，👍9 最高）
- **Pi**：auto-compaction reserveTokens 未检查（#8884）、context budget 溢出（#8061）
- **Qwen Code**：HTTP 413 下自动压缩不恢复（#10380）、resume 路径安全治理（#8535）
- **DeepSeek TUI**：压缩契约发布与会话恢复（#5782、#5750）

### 3.3 Windows 平台兼容性
- **OpenAI Codex**：`code-mode host exited during handshake` 在 Windows 上集中爆发，影响 sol/terra/luna 全系模型
- **OpenCode**：TUI 粘贴渲染损坏、启动屏 JSON 泄漏、Electron 菜单冲突均集中于 Windows
- **Kimi Code CLI**：GBK 编码错误持续未根治（#2629）

### 3.4 多 Agent / Subagent 行为可靠性
- **Gemini CLI**：subagent 触达 MAX_TURNS 仍报 GOAL success（#22323）、generalist agent 无限挂起（#21409）
- **Qwen Code**：task_list 状态机误触发循环检测（#9450）、空过滤器语义错误（#9281）
- **DeepSeek TUI**：`Pod` 命名统一收编 fleet/roster/sub-agent（#5775）

### 3.5 企业级鉴权与 Provider 接入
- **OpenAI Codex**：MCP OAuth 刷新
- **GitHub Copilot CLI**：TLS 检测代理后 OAuth 失败（#4671）、BYOK 下 /model 失效（#4672）
- **OpenCode**：Azure MS Entra ID OAuth（#31351）、Vertex Bearer Token（#14175）
- **DeepSeek TUI**：原生 ChatGPT PKCE 登录（#5784）、机器令牌（#5721）
- **Pi**：自定义 Bedrock base URL、Ollama 实验 provider

### 3.6 Skills / Plugin 生态标准化
- **OpenAI Codex**：希望 SKILL.md 支持 `disable-model-invocation`（#29989，37 👍）
- **Gemini CLI**：模型几乎不主动使用 skills（#21968）、symlink 技能去重（#29017）
- **Kimi Code CLI**：典型工具鲁棒性问题（#2631）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **OpenAI Codex** | GPT-5.6 系列深度优化、Vim 模式完备 | OpenAI 生态重用户、Power user | Rust 重写、bot 化 PR 流水线 |
| **Gemini CLI** | Google 模型原生适配、Auto Memory | Gemini 3 用户、研究型 agent 实验者 | 安全治理前置 + 大量 nightly 滚动 |
| **GitHub Copilot CLI** | GitHub 工作流深度集成、企业合规 | 企业开发者、GitHub Copilot 订阅用户 | 偏稳健但回归控制弱 |
| **Kimi Code CLI** | 国内中文场景、Kimi 系列模型 | 中文开发者、月之暗面用户 | 正迁移至 Kimi Code（CDN 弃用公告） |
| **OpenCode** | Provider 中立、IDE 集成（VS Code 81 👍） | 多模型用户、桌面 + Web 多端用户 | 全场景覆盖（Desktop / Web / TUI） |
| **Pi** | 多 Provider 联邦、扩展 API 完备 | 扩展开发者、模型猎奇者 | 新 Provider 周级集成（Fireworks/CoralBricks/Melious） |
| **Qwen Code** | 多 Agent 架构、Web Shell 嵌入 | 阿里生态、Workflow 重度用户 | `autofix/*` 流水线高度自治 |
| **DeepSeek TUI** | TUI 渲染美学、订阅模式免 CLI | 终端党、Codewhale 订阅用户 | Tideline 视觉重构 + Pod 多 agent 命名统一 |

**关键差异化点**：
- **Provider 中立派**：OpenCode、Pi、DeepSeek TUI 强调"模型无关"，通过描述符/插件机制快速接入
- **模型原生派**：Codex（GPT-5.6）、Gemini CLI（Gemini 3）、Qwen Code（Qwen）深度绑定自家模型
- **企业级派**：Copilot CLI 偏稳健但回归频发；OpenCode 通过 Azure/Vertex 集成追赶
- **终端美学派**：DeepSeek TUI、Pi 在 TUI 渲染细节上明显投入更多

---

## 5. 社区热度与成熟度评估

### 热度梯队（按当日 Issue 活跃度）

| 梯队 | 工具 | 特征 |
|---|---|---|
| **第一梯队（🔥🔥🔥🔥🔥）** | OpenCode、OpenAI Codex | 50+ Issues 活跃，问题曝光与响应并重 |
| **第二梯队（🔥🔥🔥🔥）** | Gemini CLI、Qwen Code、DeepSeek TUI、Pi | 20-40 Issues，bot 流水线成熟 |
| **第三梯队（🔥🔥🔥）** | GitHub Copilot CLI | 23 Issues 但 0 PR，**社区活跃但开发响应停滞** |
| **第四梯队（🔥）** | Kimi Code CLI | 仅 1 Issue，处于产品迁移静默期 |

### 成熟度信号

- **高度成熟**：OpenAI Codex、Qwen Code、DeepSeek TUI 表现出**强工业化特征**（bot PR 流水线、协议对编译守卫、自动化 changelog）
- **快速迭代**：OpenCode、Pi 通过**高频 Provider 接入**扩展生态边界
- **质量优先收敛**：DeepSeek TUI 处于架构重构收尾期（统一术语、统一路由权威）；Gemini CLI 进入安全硬化密集期
- **风险信号**：GitHub Copilot CLI 单日 0 PR + 多版本回归，反映其**工程节奏面临挑战**

---

## 6. 值得关注的趋势信号

### 6.1 🚨 "无界计费"成为跨工具系统性问题
- Copilot CLI #4663：失败压缩每次轮询重试触发无界计费
- Codex #41942：shell 延迟 8-11x 回归未被监控
- **对开发者的启示**：自建 Agent 时必须为每个外部调用设计**bounded budget + 显式降级路径**，否则将直接转化为用户账单风险。

### 6.2 🤖 Agent 工具的"边界输入校验"已成必修课
- Kimi Code #2631：空 old 字符串导致静默数据损坏
- Gemini CLI #22672：Agent 不抑制 `git reset --force` 等破坏性操作
- Codex #29989：希望与 Claude Code/Cursor 共享 SKILL.md 元数据规范
- **对开发者的启示**：LLM 调用工具层应当**fail-fast 而非 fail-silent**，并主动建立"模型行为护栏"。

### 6.3 🔐 "隐式行为即 bug"成为新的设计共识
- DeepSeek TUI #5772：picker 隐式探测凭据被定性为安全反模式
- OpenAI Codex #17265：MCP OAuth 不自动刷新被视为重大缺陷
- **对开发者的启示**：CLI 工具的隐式状态（凭据、网络、环境变量）正在从"便利特性"转为"安全债务"，显式 opt-in 模式将主导下一轮设计。

### 6.4 🌐 Provider 联邦化进入"周级集成"时代
- Pi 单日合并 4 个新 provider（Fireworks GLM 5.3、CoralBricks、Melious、Tencent Token Plan）
- OpenCode 单日合并 Firecrawl Developer Provider、Azure Entra OAuth
- **对开发者的启示**：模型目录已演变为"流量入口"，Provider SDK / descriptor 模型将成为 CLI 工具的核心竞争力。

### 6.5 🪟 Windows + 中文环境仍是隐形负债
- Codex、Windows 模型全系握手失败；Kimi Code GBK 编码；OpenCode TUI 粘贴损坏
- **对开发者的启示**：CI 中加入 Windows + zh-CN locale 的回归测试几乎是"性价比最高"的兼容性投入。

### 6.6 📡 MCP 从"加分项"变为"核心依赖"，协议治理进入深水区
- 三个工具（Codex、Copilot CLI、Qwen Code）同日出现 MCP 协议级缺陷
- Copilot CLI #4525 的双时代握手冲突尤其揭示：MCP 协议自身的版本治理尚不成熟
- **对开发者的启示**：在 MCP 上构建扩展时，**协议握手兼容性 + 启动 bounded budget + OAuth 刷新**应被视为生产级三件套。

---

## 结论

2026-09-01 的 AI CLI 工具社区呈现出**"成熟工具承压于稳定性、新锐工具竞逐生态广度"**的双线并进格局。对于技术决策者：

- **企业级落地**：优先关注 Copilot CLI 的回归治理进度与 Codex 的 Windows 握手修复时间线；
- **多模型策略**：OpenCode 与 Pi 的 Provider 中立路线值得长期跟踪；
- **多 Agent 架构**：Qwen Code 与 DeepSeek TUI 的状态机治理实践具有方法论参考价值；
- **个人开发者**：Pi 与 DeepSeek TUI 在 TUI 体验与扩展 API 上的打磨方向值得借鉴。

**风险提示**：Copilot CLI 当日 0 PR 的异常现象建议持续观察，可能预示其工程节奏正在经历结构性调整。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**：截至 2026-09-01 · **样本**：50 PR + 50 Issue

---

## 1. 热门 Skills 排行（按社区关注度）

| # | Skill | PR | 关注点 | 状态 |
|---|------|------|--------|------|
| 1 | **skill-creator 评测修复** | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 永远报 `recall=0%` 的核心 bug，影响 `improve_description` 整个优化闭环；同步修复 Windows 流读取与并行 worker | OPEN |
| 2 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 解决 AI 生成文档常见的孤行/寡行/编号错位，是首批专注于"输出美学质量"的 Skill | OPEN |
| 3 | **Hivemind：零成本多 Agent 编排** | [#1628](https://github.com/anthropics/skills/pull/1628) | 把机械子任务下放至开源模型 worker，Claude Code 仅保留规划与评审，是节流"贵模型 context"的新范式 | OPEN |
| 4 | **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 五维度质量评估 + 安全审计的元 Skill，入市集呼声高 | OPEN（reviewing） |
| 5 | **self-audit v1.3.0**（四维质量门）| [#1367](https://github.com/anthropics/skills/pull/1367) | 先机械化校验产物文件，再做四维推理审计，对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提出的全链路质量门 | OPEN |
| 6 | **ServiceNow 平台套件** | [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITAM/FSM/SecOps/CSDM 等十余模块，企业级需求代表 | OPEN |
| 7 | **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | 通过 SSH + Slurm 操作科研 HPC 集群，含 profile/分区/加速器感知，门槛型基础设施 Skill | OPEN |
| 8 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 从 Testing Trophy 哲学→React 组件→E2E 的完整测试体系，开发者高频诉求 | OPEN |

---

## 2. 社区需求趋势（基于 Issue 提炼）

| 趋势方向 | 代表议题 | 热度信号 |
|---------|---------|---------|
| 🔐 **Skills 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高）社区 Skill 冒充官方 `anthropic/` 命名空间，存在提权风险 | 长期热议，被引用最多 |
| 🏢 **企业级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论，👍8）希望 Claude.ai 支持组织级 Skill 共享，替代 .skill 文件夹流通 | 高赞同 |
| 🧪 **评测工具可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论）`run_eval.py` 0% 触发率，触发修复连锁 (#1298/#1099/#1050) | 跨 6 个 PR 关联 |
| 🧠 **Agent 治理与质量门** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance、[#1385](https://github.com/anthropics/skills/issues/1385) 三阶段质量门 | 元能力需求增长 |
| 🪶 **Context 友好性** | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` Skill 单次注入 ~156k token、[#12](https://github.com/anthropics/skills/issues/12) docx 改写丢空白 | 性能类痛点 |
| 🔁 **插件去重 / 安装体验** | [#189](https://github.com/anthropics/skills/issues/189)（👍9）`document-skills` 与 `example-skills` 重复内容 | 平台配置缺陷 |
| 🔌 **Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) 提议把 Skill 暴露为 MCP server，统一协议 | 生态前瞻 |
| 📦 **新格式支持** | [#486](https://github.com/anthropics/skills/pull/486) ODT / ODS 等 ISO 标准格式 | 文档覆盖扩展 |

---

## 3. 高潜力待合并 Skills（近期可能落地）

| PR | Skill | 合并概率判断 |
|----|------|------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测全链路修复 | ⭐⭐⭐⭐⭐ 直接解决 [#556](https://github.com/anthropics/skills/issues/556) 最热 Issue，关乎生态可信度，官方大概率尽快合入 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows 兼容 | ⭐⭐⭐⭐⭐ 一次 PR [#1298](https://github.com/anthropics/skills/pull/1298) 已收敛同类问题 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | mcp-builder 评测稳定性 | ⭐⭐⭐⭐ 同时回应 [#1390](https://github.com/anthropics/skills/issues/1390) 0/N bug |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 标记退役模型 | ⭐⭐⭐⭐⭐ 即 [#1603](https://github.com/anthropics/skills/issues/1603)，纯文档变更，预计快速合并 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality / security 分析器 | ⭐⭐⭐⭐ 命中 [#492](https://github.com/anthropics/skills/issues/492) 安全关切，但需官方策略评估 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ⭐⭐⭐⭐ 应用面广，文档场景刚需 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | ⭐⭐⭐⭐⭐ 关闭 [#452](https://github.com/anthropics/skills/issues/452)，社区健康度问题，几乎确定合并 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent | ⭐⭐⭐ 思路新颖但涉及第三方架构，社区讨论后大概率还需迭代 |

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求是"Skills 自身的可信赖工程化"——既要修复评测/分发/安全三条基础设施断层，让 Skill 能稳定触发、可信溯源、可质量审计；同时把这种工程化能力反哺为新的元 Skill（quality-analyzer、security-analyzer、self-audit），形成自举生态。**

附待观察风险点：
- 🟥 [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次 156k token 注入 → 暴露"Token 预算黑洞"问题，与官方 SDK 兼容性绑定；
- 🟥 [#189](https://github.com/anthropics/skills/issues/189) 插件重复内容 → 反映发布管线缺乏去重校验；
- 🟥 [#62](https://github.com/anthropics/skills/issues/62) Skill 消失 → 用户数据持久化路径不明，长期影响采用信心。

---



</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-01**

---

## 📌 今日速览

今日 Codex 0.152.0 正式版发布，重点补齐了 Vim 模式下的草稿搜索体验和限流横幅的快捷操作。但社区关注点高度集中在两个痛点：**Windows 平台上 GPT-5.6 系列模型的 `code-mode host exited during handshake` 错误呈集中爆发态势**，单日相关 Issue 占据榜单近半数；**MCP OAuth 令牌自动刷新长期缺陷**仍未得到根本修复，老问题持续积累热度。

---

## 🚀 版本发布

### rust-v0.152.0（正式版）

本次正式版主要带来以下改进：

- **Vim 模式增强**：草稿编辑器现已支持 `/` 和 `?` 搜索、匹配项高亮，以及 `n` / `N` 重复导航。([#41586](https://github.com/openai/codex/pull/41586))
- **限流横幅交互**：新增"查看用量、管理额度、重置限额、管理套餐"快捷按钮，提升被限流时的可操作性。([#41742](https://github.com/openai/codex/pull/41742))
- **TUI 与 `codex exec` 改进**：详情可在 release notes 中查阅。

> 同期发布的还有 `0.152.0-alpha.7.2` 与 `0.152.0-alpha.7` 两个预发布版本，预示 0.153 周期内可能有进一步调整。

---

## 🔥 社区热点 Issues

以下为今日最值得关注的 10 个 Issue（按综合热度排序，含社区反应）：

1. **[#41049](https://github.com/openai/codex/issues/41049)** — Windows 26.820.71523 上 GPT-5.6 模型调用 `exec` 工具时 `code-mode host exited during handshake`，本地命令执行完全失效。**44 条评论**，是当之无愧的热点 Top 1。

2. **[#17265](https://github.com/openai/codex/issues/17265)** — Codex 不会自动刷新已存储 refresh_token 的 routed MCP OAuth 访问令牌，导致 MCP 工具调用在令牌过期后批量失败。**35 条评论、👍60**，是老牌高赞问题，建议跟进优先级高。

3. **[#27117](https://github.com/openai/codex/issues/27117)** — Windows standalone 更新流程从 pwsh 启动 `powershell.exe` 时，`PSModulePath` 被错误继承，导致 `Get-FileHash` 失败。**26 条评论、👍18**。

4. **[#41290](https://github.com/openai/codex/issues/41290)** — 切换 Agent Environment 到 WSL 后，Windows 项目创建与删除失败。**21 条评论、👍8**。

5. **[#32759](https://github.com/openai/codex/issues/32759)** — GPT-5.6 Sol 无法执行 shell 命令，报错 `code-mode host exited during handshake`（macOS 端）。**19 条评论、👍6**。

6. **[#41507](https://github.com/openai/codex/issues/41507)** — Windows Desktop 所有 `tool_mode = code_mode_only` 模型（含 sol/terra/luna/reserve）工具调用全军覆没，是今日"握手失败"问题的归纳性总结帖。**6 条评论**。

7. **[#41942](https://github.com/openai/codex/issues/41942)** — **Shell 执行延迟从 0.146.0 到 0.151.0-alpha 出现 8–11 倍回归**（中位数 1.7s → 18.4s），基于 10 个月 rollout 数据测量，性能问题值得高度关注。**4 条评论**。

8. **[#40858](https://github.com/openai/codex/issues/40858)** — 原生 subagent 忽略显式 `model_provider` 覆盖配置，而 model 覆盖却能生效，配置语义不一致。**8 条评论、👍4**。

9. **[#29989](https://github.com/openai/codex/issues/29989)** — 期望在 `SKILL.md` 中支持 `disable-model-invocation` 标志，与 Claude Code、Cursor、Pi 等保持一致。**4 条评论、👍37**，是今日**点赞最高的增强需求**。

10. **[#41433](https://github.com/openai/codex/issues/41433)** — GitHub connector 在 `mark_pull_request_ready_for_review` 操作中查询了 GraphQL 不存在的 `Repository.fullDatabaseId` 字段，导致无法标记 PR 为 Ready。**7 条评论、👍6**。

---

## 🛠 重要 PR 进展

今日所有列出的 PR 均来自自动化机器人（`copyberry[bot]`），呈现高度工具链化、连续小幅演进的状态：

1. **[#41953](https://github.com/openai/codex/pull/41953)** — 对 curated 插件实施 marketplace source 策略，覆盖 OpenAI 插件仓库插件与用户配置市场。
2. **[#41950](https://github.com/openai/codex/pull/41950)** — 为嵌套工具调用与 exec 子进程保留 trace context，并补充 span，提升 code-mode 回调追踪能力。
3. **[#41949](https://github.com/openai/codex/pull/41949)** — 新增 `plugin/reconcile` JSON-RPC 方法，用于同步已安装的远程插件 bundle 并等待 hook 更新。
4. **[#41944](https://github.com/openai/codex/pull/41944)** — 为 ChatGPT 认证会话查询 workspace-visible turn 估算，并在估计有效时上报 `codex.turn.cost_microusd` 遥测。
5. **[#41941](https://github.com/openai/codex/pull/41941)** — 在 TUI composer 中加入 Vim undo，统一处理附件、mention、延迟粘贴等完整草稿状态。
6. **[#41940](https://github.com/openai/codex/pull/41940)** — 在 backtrack 模式中保留渲染缓存，仅重绘前缀，显著降低选择切换时的整 transcript 重新布局。
7. **[#41934](https://github.com/openai/codex/pull/41934)** — 过滤掉 Code Mode 中短于 25ms 的 WAV 输出，避免音频模型无法可靠编码。
9. **[#41931](https://github.com/openai/codex/pull/41931)** — 将 Guardian 消息 transcript 预算从 10k 提升到 20k tokens，单条消息上限从 2k 提升到 5k。
10. **[#41928](https://github.com/openai/codex/pull/41928)** — 权限预审批使用执行器路径上下文，避免远程 Windows 环境误拒合法授权。

> **观察**：绝大多数 PR 由机器人自动提交且均已关闭，表明仓库已大规模采用自动化代码生成与即时合并工作流，开发者评审更多在更前期进行。

---

## 📈 功能需求趋势

从今日 50 条活跃 Issue 中可提炼出以下社区最关注方向：

| 方向 | 关注度 | 典型代表 |
|---|---|---|
| **Windows 桌面兼容性** | ⭐⭐⭐⭐⭐ | #41049, #41290, #41513, #41845 等高频堆叠 |
| **GPT-5.6 模型稳定性** | ⭐⭐⭐⭐⭐ | 多 Issue 集中报 code-mode handshake 失败 |
| **MCP / OAuth 集成** | ⭐⭐⭐⭐ | #17265（60👍）、#13956 Notion MCP |
| **Vim 模式完善** | ⭐⭐⭐⭐ | #41586（已合入）、#29989 disable-model-invocation |
| **性能与延迟回归** | ⭐⭐⭐ | #41942 shell 延迟 8-11x 回归 |
| **Skills / 插件生态** | ⭐⭐⭐ | #34270, #29989, #41953 marketplace |
| **WSL 集成** | ⭐⭐⭐ | #41290, #41463, #36416 |
| **GitHub 远程协作** | ⭐⭐ | #41433 connector bug |

---

## 💡 开发者关注点

**首要痛点：Windows 上的 code-mode 握手故障**
围绕 `code-mode host exited during handshake` 的失败报告今日集中爆发，影响几乎所有 GPT-5.6 系列（sol/terra/luna/reserve）。从堆栈信息看，根因疑似 `codex-code-mode-host.exe` 或捆绑的 `node.exe` 在 Windows 权限模型下启动失败（错误码 `0xC0000022`）。该问题同时出现在 Desktop App 与 CLI 中，导致本地执行通道瘫痪**。**

**高频改进请求：**
- **MCP OAuth 自动化**：自动管理 refresh 流程，避免用户频繁手动重连 Notion 等服务（#17265, #13956 持续高热度）。
- **Skills 标准化**：希望 `SKILL.md` 支持 `disable-model-invocation` 等业界通用元数据，与 Cursor/Claude Code 互通（#29989 累计 37👍）。
- **Windows / WSL 一体化**：WSL 模式下项目路径解析（`AbsolutePathBuf`）、Android 远程控制兼容性等仍有短板。
- **Subagent 配置语义**：模型与 provider 的覆盖规则存在不一致（#40858）。
- **性能监控回归**：希望团队对每次大版本 shell 执行延迟做基线回归保护（#41942）。

---

*报告基于 2026-09-01 当日 github.com/openai/codex 数据生成。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-01** | 数据来源：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

Gemini CLI 今日发布了 **v0.59.0-nightly.20260901** 自动滚动版本。社区关注度主要集中在 **subagent 可靠性**（伪成功判定、generalist agent 无限挂起）与 **Auto Memory 系统质量**两大方向，安全类 PR（环境变量净化、NTFS 8.3 路径绕过、配置 ACL 校验）也呈密集提交态势。文档与 CLI flags 的补全工作进展显著。

---

## 🚀 版本发布

### v0.59.0-nightly.20260901.g0bd1d4397
- **类型**：自动化 nightly 滚动版本（[PR #29149](https://github.com/google-gemini/gemini-cli/pull/29149)）
- **变更范围**：与上一 nightly 版本对比（[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260831.g0bd1d4397...v0.59.0-nightly.20260901.g0bd1d4397)）

> ⚠️ 此版本为机器人自动 bump，无手工变更说明。功能变更请关注下方的 Issues / PR 进展。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — **P1 Bug**：Subagent 触达 MAX_TURNS 后仍上报为 GOAL success
- **热度**：13 评论 · 👍 2
- **重要性**：**安全语义级 Bug**。`codebase_investigator` 在触及最大 turn 数时仍以 `status: "success"` + `Termination Reason: "GOAL"` 收尾，导致中断被上层隐藏，影响后续编排决策。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — **P1 Bug**：Generalist agent 无限挂起
- **热度**：8 评论 · 👍 8（高赞同）
- **重要性**：高频复现，仅靠显式指令禁用 subagent 才可绕过，违背 Agent 默认行为。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — **P2 Enhancement**：Zero-Dependency OS 沙箱与后置意图路由
- **重要性**：贴合 Gemini 3 模型原生 bash 偏好的 **架构级设计**，目标是"既利用模型能力又不破坏用户体验/安全"。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — **P2 Feature**：AST 感知的文件读取 / 搜索 / 映射评估
- **热度**：7 评论
- **重要性**：直接影响 **token 效率** 与定位精度，是社区多个相关 issue 的"母 issue"。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — **P2 Bug**：Gemini 几乎不主动使用 skills 与 sub-agents
- **重要性**：暴露 **agent "自我发现能力"** 缺失——技能定义良好但模型不会自动调度。

### 6. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — **P2 Security**：Auto Memory 的确定性脱敏与日志缩减
- **重要性**：Auto Memory 会把本地 transcript 发送给提取模型，**密钥泄露面** 是该方向最受关注的风险。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — **P1 Bug**：Shell 命令结束后仍卡在 "Waiting input"
- **热度**：4 评论 · 👍 3
- **重要性**：影响每一次 CLI 调用，体验阻塞型。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — **P1 Bug**：Browser subagent 在 Wayland 下失败
- **重要性**：Linux 桌面用户最大痛点之一，影响范围明确。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — **P2 Bug**：可用工具数 > 128 时触发 400 错误
- **重要性**：工具生态扩张后的硬性容量上限，**扩展开发者必须关注**。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — **P2 行为约束**：Agent 应抑制破坏性操作（`git reset --force` 等）
- **重要性**：触及**操作安全默认值**的讨论，是 subagent 自主性扩张后必须建立的安全护栏。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#29008](https://github.com/google-gemini/gemini-cli/pull/29008) — **P1 Security**：剥离影响执行的 `GIT_*` 环境变量
- 修复 #29003。`.env` 加载进入 `process.env` 后，三个调用点只过滤了 `GIT_CONFIG_*`，其余 `GIT_*` 仍可能影响 git 行为。

### 2. [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) — **强化 system-wide 配置的 ACL / 所有权校验**
- Windows 用 PowerShell、POSIX 用 ACL 校验，提升系统级配置加载前的安全前置。

### 3. [#29148](https://github.com/google-gemini/gemini-cli/pull/29148) — **P2**：阻止后台 git 操作劫持 stdin
- 修复 #23480，背景更新 `git.listRemote` / `git.clone` 不再因凭证挑战阻塞主进程。

### 4. [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) — **缓解 NTFS 8.3 短名路径绕过**
- 针对 `git~1`、`env~1`、`node_m~1`、`vscode~1` 等 SFN 进行路径规范化与 `AllowedPathChecker` 强化。

### 5. [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) — `WebFetchTool` 出站连接校验与路由加固
- 通过异步 DNS 解析 + Undici transport connector 绑定到解析地址，保留 TLS。

### 6. [#28995](https://github.com/google-gemini/gemini-cli/pull/28995) / [#29004](https://github.com/google-gemini/gemini-cli/pull/29004) — **`formatTruncatedToolOutput` 负数 maxChars 导致输出膨胀**
- 两个并行 PR 修同一 bug，修复后输出体量翻倍问题彻底解决。

### 7. [#29005](https://github.com/google-gemini/gemini-cli/pull/29005) — **`DEBUG` 环境变量布尔归一化（#28885）**
- 防止 `"false"` / `"0"` 字面量意外开启 `--inspect-brk` 等调试副作用。

### 8. [#29022](https://github.com/google-gemini/gemini-cli/pull/29022) — **新增 `ui.keepAskUserQuestionsInHistory` 选项**
- `ask_user` 问答进入文本历史，回看/分享会话时不再丢失上下文。

### 9. [#29017](https://github.com/google-gemini/gemini-cli/pull/29017) — **去重 symlink / junction 的 skills 目录（#28944）**
- 配合 open Agent Skills 生态，`.gemini` 链到 `.agents` 时不再重复发现技能。

### 10. [#29015](https://github.com/google-gemini/gemini-cli/pull/29015) — **为缺失的 6 个 Workflow 添加显式 `permissions:`**
- 共 41 个 workflow，其余已具备 scoped token，本 PR 补齐剩余 6 个。

> 文档类 PR 也保持高活跃：[#29013](https://github.com/google-gemini/gemini-cli/pull/29013)（补全 6 个未文档化 flag）、[#29011](https://github.com/google-gemini/gemini-cli/pull/29011)（修正 ACP 缩写与过时 flag）、[#29009](https://github.com/google-gemini/gemini-cli/pull/29009)（修正 env-var redaction 配置键）。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **Agent 行为可靠性** | #22323, #21409, #25166 | 🔥🔥🔥 极高，热度前 3 中占 2 |
| **Auto Memory 体系建设** | #26525, #26523, #26522, #26516 | 🔥🔥🔥 5 月以来集中爆发 |
| **AST 感知 / 上下文效率** | #22745, #22746, #19561, #22466 | 🔥🔥 与 token 经济强挂钩 |
| **Browser Agent 健壮性** | #21983, #22232, #22267 | 🔥🔥 |
| **任务追踪持久化** | #18836, #21000, #22598 | 🔥🔥 |
| **安全默认 / 沙箱** | #22672, #19873, #26525 | 🔥🔥 安全需求继续上升 |
| **Agent Self-Awareness** | #21432, #22598 | 🔥 模型需要更了解自身机制 |
| **进程 / 工具容量上限** | #24246 (>128 工具) | 扩展开发者最关心的容量瓶颈 |

---

## 💬 开发者关注点（高频痛点）

1. **Subagent 失控最刺眼**：不仅会 hang，还会对失败伪造 "GOAL success"，严重影响上层编排可观测性（#22323、#21409）。

2. **Shell / TTY 状态机异常**：命令已结束却卡在 "Waiting input"（#25166），vit 交互式 prompt 卡死（#22465）—— **CLI 与终端 I/O 协同**仍是高故障率面。

3. **Auto Memory 安全与质量集中改善**：脱敏失败、补丁静默丢弃、低信号会话反复重试——社区对该功能的可持续运营表达了系统性担忧。

4. **Token 与上下文压力**：写入临时脚本污染工作区（#23571）、工具数量触发 400（#24246）、大文件 firehose（#19561）—— **"tactful extraction"** 与 **AST-aware 工具** 几乎成为共识解法。

5. **安全默认值之争**：开发者明确希望模型 "主动拒绝破坏性命令"（#22672），同时希望沙箱透明化（#19873）。**安全 UX 与模型自由度** 的平衡正在被反复讨论。

6. **配置文档与 CLI 表面同步滞后**：多项文档 PR 在修正配置键与 flag 名（#29009、#29011、#29013），暗示 schema 已先行、文档追赶中。

7. **跨平台路径处理**：NTFS SFN 绕过、Symlink 不被识别为 agent（#20079）、`.gemini` 目录默认忽略（#28866 已关闭）—— 平台一致性是另一个隐形成本。

---

> 📮 *日报由 GitHub 数据自动整理生成。社区讨论实时变更，请以仓库原始 Issue/PR 为准。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-01** | 数据来源：github.com/github/copilot-cli

---

## 📌 今日速览

今日 Copilot CLI 发布 **v1.0.83-0** 预发布版本，新增 HTTPS 代理 mTLS 客户端证书支持，并修正了 herdr 终端复用器被误判为 tmux 的问题。社区层面，**1.0.81/1.0.82 版本回归问题集中爆发**，尤其是 `/model` 命令在 BYOK 场景下失效、MCP 初始化协议错乱、OAuth 在 TLS 检测代理后失败等高优先级 bug 受到广泛关注。上下文压缩（compaction）与会话（session）管理类问题仍为社区反馈主线，反映出 Copilot CLI 在长时间任务稳定性与状态恢复方面的设计仍有显著短板。

---

## 🚀 版本发布

### v1.0.83-0（预发布）
**Added**
- 为模型与 Web 请求增加自动 HTTPS 代理 mTLS 客户端证书支持，提升企业代理环境下的兼容性。
- 正确识别 `herdr` 终端复用器（不再误判为 tmux），使 Kitty 键盘协议、配色跟随、终端进度条、`/copy` 与通知功能在 herdr pane 中正常工作。

> 注：完整 Improvement / Fix 内容因数据截断未列出。建议升级前关注官方 Release Notes。

---

## 🔥 社区热点 Issues

以下为今日最值得关注的 10 个 Issue：

### 1. #4672 — `/model` 命令在 BYOK 场景下失效（1.0.82 回归）
- **作者**：extedosse | 👍 0
- **重要性**：直接影响 Azure AI Foundry 等多模型托管平台用户的核心工作流；属于 1.0.81/82 引入的命令级回归，影响面广。
- **链接**：https://github.com/github/copilot-cli/issues/4672

### 2. #4525 — MCP 双时代协议握手失败导致 -32022 错误
- **作者**：dmbutko | 👍 0 | 评论：3
- **重要性**：CLI 在 modern `server/discover` 成功后仍发送 legacy `initialize`，与 Python MCP SDK 2.0.0 不兼容。该问题直接影响 MCP 生态扩展能力，是 MCP 集成稳定性的关键隐患。
- **链接**：https://github.com/github/copilot-cli/issues/4525

### 3. #4671 — 1.0.81 在 TLS 检测代理后 OAuth 登录失败
- **作者**：hskm07 | 👍 1
- **重要性**：影响所有企业代理环境用户的首次登录与日常认证；1.0.80 正常而 1.0.81 失败的明确回归特征，修复紧迫度高。
- **链接**：https://github.com/github/copilot-cli/issues/4671

### 4. #4663 — 失败压缩每次轮询重试，触发无界计费
- **作者**：AlBurns-MSFT | 👍 0
- **重要性**：揭示压缩失败时的"无退避、无降级、无可见错误"路径，将直接放大用户账单与上下文膨胀。属于设计层面的严重缺陷。
- **链接**：https://github.com/github/copilot-cli/issues/4663

### 5. #2861 — Opus 4.6 手动 `/compact` 三次失败
- **作者**：ronkeele | 👍 3
- **重要性**：👍 数较高，且定位到具体模型（Claude Opus 4.6）下的可复现路径，是 #4663 的典型实例。
- **链接**：https://github.com/github/copilot-cli/issues/2861

### 6. #1953 — 始终可见的上下文窗口状态指示
- **作者**：thomas11 | 👍 9（本日最高）
- **重要性**：高赞功能请求，反映出用户在长会话下对上下文耗尽风险的强烈焦虑。👍 9 远超其他条目，社区共识度高。
- **链接**：https://github.com/github/copilot-cli/issues/1953

### 7. #4664 — 恢复长会话时 V8 堆内存溢出崩溃
- **作者**：shrijitnair | 👍 0
- **重要性**：长会话恢复路径上的稳定性问题，影响所有重度使用者的连续工作流。
- **链接**：https://github.com/github/copilot-cli/issues/4664

### 8. #4678 — ACP `session/new` 因单个 MCP 死锁 192 秒
- **作者**：jessmi | 👍 0
- **重要性**：明确指出 MCP 启动缺少有界预算（bounded startup budget），与 #4525 的 MCP 主题形成系统性问题聚类。
- **链接**：https://github.com/github/copilot-cli/issues/4678

### 9. #4673 — 1.0.81 会话恢复自动续作被中止的任务
- **作者**：bmazzarol-bunnings | 👍 0
- **重要性**：用户中止信号被忽略，`working` flag 清除逻辑缺陷，对易陷入循环的模型风险尤高。
- **链接**：https://github.com/github/copilot-cli/issues/4673

### 10. #4668 — 中断的 `create_session` 在 1.6 小时后悄悄创建会话
- **作者**：NSTA1 | 👍 0
- **重要性**：会话生命周期与工具调用语义不一致，将导致 agent 重复工作，资源计费与正确性双重风险。
- **链接**：https://github.com/github/copilot-cli/issues/4668

---

## 📥 重要 PR 进展

> **过去 24 小时内无 PR 更新**（数据来源显示 0 条）。
> 建议关注以下两个与今日热点强相关的历史方向：
> - MCP 握手协议收敛（关联 #4525、#4662、#4678）
> - Compaction 失败处理重试逻辑（关联 #2861、#4663）

---

## 📈 功能需求趋势

通过对 23 条 Issue 的聚类，社区关注方向可归纳如下：

| 趋势方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **MCP 协议健壮性** | #4525, #4662, #4678 | ⭐⭐⭐⭐ 协议握手、OAuth 发现、启动预算三方面齐发 |
| **上下文压缩与会话管理** | #2861, #4663, #4664, #4665, #1953 | ⭐⭐⭐⭐⭐ 占比最高、最分散的痛点群 |
| **企业级认证 / 代理兼容** | #4671, #4662, #4672 | ⭐⭐⭐⭐ 直接阻塞企业用户使用 |
| **可观测性 / OTEL 集成** | #4669, #4630 | ⭐⭐⭐ 企业运维侧刚需 |
| **会话与子代理一致性** | #4674, #4675, #4677, #4678 | ⭐⭐⭐ 影响 ACP / 自定义 agent 工作流 |
| **UI / 终端细节** | #3194, #4666, #4676 | ⭐⭐ 体感类问题，但 #1953 表明"上下文可视化"已成大众诉求 |

---

## 🛠️ 开发者关注点

综合 Issue 内容，开发者社区当前聚焦以下高频痛点：

1. **上下文透明度缺失**：#1953 以 👍 9 居首，开发者强烈希望 UI 持续显示上下文窗口使用率，避免"接近耗尽时模型质量骤降"的黑盒体验。
2. **1.0.81 / 1.0.82 回归焦虑**：仅今日即出现 #4672、#4671、#4673、#4674 多条回归类 Issue，开发者对升级信心不足，呼吁更强的回归测试与变更日志。
3. **MCP 生态兼容性**：握手协议、OAuth issuer path 处理、HTTP MCP 启动预算，反映 MCP 正在从"加分项"变为"核心依赖"，其稳定性直接决定 CLI 的扩展能力。
4. **失败处理与计费透明**：#2861、#4663 揭示失败压缩会被反复全价重试，开发者关注"无界计费"风险，期望明确的降级、回退与可见错误。
5. **会话生命周期正确性**：#4668、#4670、#4673、#4674、#4675 共同指向"会话/工具/扩展/agent 状态机"的一致性问题，是当前最底层、最系统的隐患。
6. **企业可观测性**：#4669 显示 managed telemetry.headers 会阻断 OTEL 导出，企业用户对链路追踪、审计与指标采集有强烈诉求。
7. **BYOK / 多模型切换体验**：#4672 表明 `/model` 与 BYOK 环境变量的耦合仍脆弱，多模型用户工作流被中断。

---

*日报基于公开 GitHub 数据生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-01
**数据来源**：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日社区动态相对平静，**无新版本发布**。仅有 1 个 Issue 和 2 个 PR 在过去 24 小时内有更新。值得关注的进展包括：Windows 平台下的 Unicode 编码错误被报告，以及两项功能性 PR —— 一项修复 `StrReplaceFile` 工具在空字符串场景下的潜在数据损坏问题，另一项引入基于 CDN 公告的"弃用感知"更新流程，推动 `kimi-cli` 向 **Kimi Code** 的平滑迁移。

---

##  版本发布

今日无新版本发布，跳过本节。

---

##  社区热点 Issues

> **数据说明**：过去 24 小时内仅有 1 条 Issue 更新，以下为全部内容。

### #2629 — [BUG] UnicodeEncodeError: 'gbk' codec 在 Windows 平台报错
- **作者**：tuies
- **状态**：OPEN | 💬 0 | 👍 0
- **环境**：Windows 10 (NT 10.0.19045.0 x64)，Kimi Code CLI 1.49.0，模型 K2.7 Code
- **链接**：[Issue #2629](https://github.com/MoonshotAI/kimi-cli/issues/2629)

**为什么值得关注**：这是典型的 **Windows 中文环境编码问题** —— 当输出中包含 GBK 无法编码的字符（如 `\u0131`、`\u0133` 等拉丁扩展字符）时，CLI 会直接抛出 `UnicodeEncodeError`。该问题影响所有使用中文 Windows 系统且模型输出包含特殊 Unicode 字符的用户，属于跨平台兼容性的关键 bug。

**社区反应**：尚无评论和点赞，处于刚报告阶段。建议关注后续 maintainer 响应。

---

## 🛠️ 重要 PR 进展

> **数据说明**：过去 24 小时内仅有 2 条 PR 更新，以下为全部内容。

### #2631 — fix(file): 拒绝 `StrReplaceFile` 中的空 old 字符串
- **作者**：rootkiller6788
- **状态**：OPEN
- **链接**：[PR #2631](https://github.com/MoonshotAI/kimi-cli/pull/2631)

**修复内容**：当 Agent 向 `StrReplaceFile` 工具传入空的 `old` 字符串时，Python 的 `str.replace()` 行为不符合直觉 —— 它不会"什么都不替换"，而是会在开头插入 `new`（或在 `replace_all=True` 时在每个字符间插入 `new`），并且工具会"快乐地"报告成功。该 PR 通过显式拒绝空 `old` 字符串来防止这种**静默的数据损坏**。

**值得关注的点**：这是一个典型的"AI Agent 工具鲁棒性"问题。随着 LLM Agent 越来越多地自主调用文件编辑工具，工具层对边界输入的校验变得至关重要。该修复体现了一个良好的工程实践：**fail-fast 而非 fail-silent**。

---

### #2630 — feat(shell): 支持弃用感知的更新流程，一键迁移到 Kimi Code
- **作者**：jackfish212
- **状态**：OPEN
- **链接**：[PR #2630](https://github.com/MoonshotAI/kimi-cli/pull/2630)

**功能内容**：当 CDN 发布 `https://cdn.kimi.com/kimi-code-tips/kimi_cli/migration.json` 弃用/迁移公告时，CLI 会将当前的 Python 版本标记为 **deprecated**，并主动引导用户升级/迁移到 Kimi Code。这是 `kimi-cli → Kimi Code` 迁移工作的一部分。

**值得关注的点**：标志着 `kimi-cli` Python 实现正式进入**弃用过渡期**。该 PR 展示了通过 CDN 配置实现"远程可控的客户端行为变更"这一模式，开发者无需发布新版本即可推送迁移策略，对于 CLI 工具的大版本过渡是一种值得借鉴的工程实践。

---

## 📈 功能需求趋势

由于今日仅有 1 条 Issue 提交，无法进行统计意义上的趋势分析。但从仅有的信号可以观察：

| 方向 | 信号 |
|------|------|
| **跨平台兼容性** | Windows 中文环境编码问题（#2629）再次出现 |
| **工具层鲁棒性** | Agent 工具的边界输入校验成为社区自发贡献的焦点（#2631） |
| **产品迁移过渡** | Kimi Code 取代 kimi-cli 的迁移机制正式推进（#2630） |

> 💡 建议：若需更全面的趋势分析，可回溯过去 7-30 天的 Issue/PR 数据。

---

## ‍💻 开发者关注点

从今日的少量动态中，可以提炼出两个值得开发者注意的信号：

1. **Agent 工具的数据安全边界**
   `StrReplaceFile` 在空字符串输入下的静默损坏问题（#2631）反映出：当 LLM Agent 自主调用工具时，工具层必须假设所有输入都是"恶意或病态"的。一个看起来无害的空字符串可能导致整文件被污染。**开发者自建 Agent 工具时，应对所有边界输入（空字符串、None、超长字符串、特殊字符）做显式校验**。

2. **Windows + 中文环境仍是 CLI 工具的痛点**
   #2629 报告的 GBK 编码问题并非新话题，但至今仍出现在最新版本（1.49.0）中。**如果你的开发/测试环境以 macOS/Linux 为主，强烈建议在 CI 中加入 Windows + 中文区域设置的编码回归测试**，避免类似问题反复出现。

---

*报告生成时间：2026-09-01 | 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-01**

---

## 📌 今日速览

今日 OpenCode 社区活跃度较高，过去 24 小时内有 50 条 Issue 被更新、20 条 PR 有新进展。**关注焦点集中在三大方向**：IDE 集成呼声强烈（VS Code 集成请求获 81 👍）、订阅服务稳定性问题频发（OpenCode Go 的限流/挂起问题引发多起投诉），以及 TUI/Web UI 的渲染类 Bug 集中涌现。维护团队 `rekram1-node` 与 `Hona` 持续在 codemode、TUI、Desktop 等核心模块推进改进。

---

## 🚀 版本发布

过去 24 小时内无新 Release 发布。

---

## 🔥 社区热点 Issues

| # | Issue | 关键信息 |
|---|---|---|
| [#8003](https://github.com/anomalyco/opencode/issues/8003) | **VS Code 集成：代码变更 Diff 预览** | 社区最高呼声（👍 81，17 评论），希望直接在 VS Code 中查看 TUI 修改上百行代码的差异，已 CLOSED，预计将并入后续 VS Code 扩展计划。 |
| [#13318](https://github.com/anomalyco/opencode/issues/13318) | **Zen 模型频繁限流（Kimi-K2.5）** | 即使付费用户也反复触发限流，影响生产体验，反映出 Zen 配额策略或上游供应商配额不足。 |
| [#14175](https://github.com/anomalyco/opencode/issues/14175) | **Google Vertex Anthropic 支持 Bearer Token 鉴权** | 9 条评论的讨论议题，企业用户希望摆脱 `google-auth-library` 与 ADC 凭证的强依赖，直接使用 Bearer Token。 |
| [#33632](https://github.com/anomalyco/opencode/issues/33632) | **`@filename` 引用文件导致崩溃** | 与目录中文件数量相关的崩溃问题，可能涉及上下文注入的扫描性能瓶颈。 |
| [#32418](https://github.com/anomalyco/opencode/issues/32418) | **Qwen3.7 Plus 频繁卡在重试** | 模型响应慢且反复重试，反映出对部分模型的重试/超时策略需要更细致的差异化配置。 |
| [#34881](https://github.com/anomalyco/opencode/issues/34881) | **OpenCode Go 配额与宣传不符（标题"CHEATING"）** | 用户质疑 5 小时/每周额度未达上限即被拒绝调用 DeepSeek V4 Flash，订阅信任度受损。 |
| [#16354](https://github.com/anomalyco/opencode/issues/16354) | **自更新导致程序自毁** | 首次运行正常，退出后再启动即失败，疑似自更新逻辑在快速退出时损坏二进制。 |
| [#31342](https://github.com/anomalyco/opencode/issues/31342) | **Azure OpenAI 无 API Key 使用** | 受 GitHub Copilot 计费变更影响，企业用户希望走 Azure + MS Entra ID/OAuth 链路（对应 PR #31351）。 |
| [#34675](https://github.com/anomalyco/opencode/issues/34675) | **Web 客户端无法加载文件夹列表** | 多设备复现，影响所有用户的 Web 项目入口，是高优先级可用性 Bug。 |
| [#34198](https://github.com/anomalyco/opencode/issues/34198) | **Windows 下 TUI 粘贴导致渲染损坏（v1.16.2 起回归）** | 粘贴文本/图片后整个窗口布局错乱，虽然数据完好但视觉不可用。 |

---

## 🛠 重要 PR 进展

| # | PR | 内容要点 |
|---|---|---|
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **feat(browser): 实验性 Desktop 浏览器面板** | 在 Desktop 会话中新增浏览器面板（地址栏、前进/后退、刷新、停止），允许 Agent 打开页面、检查快照，作为更大桌面交互的起点。 |
| [#46521](https://github.com/anomalyco/opencode/pull/46521) | **feat(codemode): 压缩 schema 约束注释** | 在保留 JSDoc 风格标签与 JSON Schema 关键字的前提下，将短描述与标签合并到同一注释行，提升生成代码的可读性。 |
| [#46523](https://github.com/anomalyco/opencode/pull/46523) | **fix(desktop): 稳定打包开发与进程退出** | 引入 rolldown lazy-load 修复（参考 vite#23373），保留懒编译同时避免退出异常。 |
| [#46513](https://github.com/anomalyco/opencode/pull/46513) | **feat(session-ui): Read 工具结果图片预览** | 完成的图片 Read 可在工具组或独立行内展开复用 Markdown 加载器，按需获取并释放资源，普通文本读取不受影响。 |
| [#31351](https://github.com/anomalyco/opencode/pull/31351) | **feat(opencode): Azure Provider 通过 MS Entra ID + az cli OAuth 登录** | 新增 Azure / Azure Cognitive Services 的 OAuth 登录方式（关闭 #31342、#21658），解锁企业无 Key 使用。 |
| [#41016](https://github.com/anomalyco/opencode/pull/41016) | **fix(provider): 为自定义模型转发 agent 温度参数** | 修复 `opencode.json` 中定义的自定义模型默认 temperature 能力为 false，导致 agent 级 `temperature` 被丢弃的 Bug（关闭 #34554）。 |
| [#46520](https://github.com/anomalyco/opencode/pull/46520) | **fix(app): Web 首页展示全局项目会话** | 修复 `buildHomeSessionRecords` 在非 git 目录启动时过滤掉非 git repo 项目的会话（关闭 #46444）。 |
| [#46501](https://github.com/anomalyco/opencode/pull/46501) | **fix(opencode): Bedrock GPT-5 变体请求 reasoning.summary** | 在 catalog 与 fallback 两条路径为 Bedrock Converse GPT-5 变体添加 `reasoning.summary: "auto"`，与 Mantle 行为保持一致。 |
| [#46512](https://github.com/anomalyco/opencode/pull/46512) | **feat(core): 新增 Firecrawl Developer 搜索 Provider** | 在 #41042 基础上新增 `firecrawl-developer` Provider，通过 `categories: ["developer"]` 调用 Firecrawl 开发者索引（GitHub issue/merged PR/README）。 |
| [#46084](https://github.com/anomalyco/opencode/pull/46084) | **fix(ai): 按 call id 对账最终响应调用** | 修复某些 OpenAI 兼容供应商省略 `response.output_item.done` 时，函数调用参数解析失败的问题。 |

---

## 📈 功能需求趋势

从过去 24 小时内活跃的 Issue 中可以提炼出以下社区最关注的功能方向：

1. **IDE 深度集成（热度最高）** — VS Code 内的 Diff 预览、Code Review 集成是呼声最强烈的功能（👍 81），反映开发者期望 OpenCode 与主流编辑器无缝衔接，而不仅仅停留在 TUI/CLI。
2. **企业鉴权与多 Provider 支持** — Azure 无 Key（Entra ID OAuth）、Google Vertex Bearer Token、OpenAI Azure 兼容登录等议题表明企业级 SSO/OAuth 需求快速上升。
3. **订阅稳定性与配额透明化** — OpenCode Go 在多模型（GLM-5.2、Qwen3.6-plus、DeepSeek V4 Flash）上反复出现限流/挂起，用户对"宣传额度 vs 实际额度"的不满情绪加剧（#34881 标题直接为"CHEATING"）。
4. **TUI/桌面渲染体验** — 粘贴渲染损坏、Markdown Diff 颜色丢失、启动屏 JSON 泄露等问题的密集出现，提示 1.16.x → 1.17.x 版本在渲染层的回归需要系统性回归测试。
5. **性能与可观测性** — Read 工具对大文件（670 万行）慢、本地 llama.cpp 在开启会话标题生成时变慢、大 diff 计算导致渲染冻结 6-7 秒，开发者期望更精细的流式/分块策略。
6. **插件/工具生态** — 自定义工具插件加载失败提示不友好（#34933）、`skills.urls` 远程技能未真正可用（#20020）、`external_directory: deny` 对子代理不生效（#34987），生态扩展能力亟待完善。
7. **多模态/富内容呈现** — SVG/HTML 产物内联渲染（#25076）、Read 工具结果图片预览（PR #46513 已落地），反映开发者对"直接在会话中查看产物"的需求显著增长。

---

## 💡 开发者关注点

综合 Issue 与 PR 反馈，当前社区反馈中的**高频痛点**集中在以下五个方面：

- **🔧 模型可靠性差异显著**：Qwen3.7 Plus、DeepSeek V4 Flash/Pro、xiaomi-mimo 等模型在 OpenCode 中存在重试卡顿、503、断连等问题，开发者期望按模型差异化超时与重试策略。
- **🪟 Windows 平台体验薄弱**：TUI 粘贴渲染损坏、启动屏输出 JSON、Go 模型 hang、Electron 菜单快捷键冲突，几乎所有体验问题都集中于 Windows。
- **🧠 自更新机制的可靠性**：自更新后无法启动（#16354）暴露出快速退出场景下的二进制损坏风险，影响用户信任。
- **📂 项目/会话路径一致性**：Desktop GUI 重开会话时工作区路径错误（#29714）、Web Home 隐藏非 git repo 会话（#46444），反映多端会话状态的同步逻辑仍较脆弱。
- **🔐 企业场景下的鉴权摩擦**：Azure、Vertex、Cloudflare 等 Provider 的鉴权链路仍偏"个人开发者友好"，企业 IT 策略（无 Key、SSO、网络代理）下的接入门槛较高。

> **小贴士**：今日 OpenCode 团队对 codemode 文档生成、TUI/Desktop 渲染、Provider 兼容性等模块同步推进了多个 PR，建议关注 #44838（Desktop 浏览器）与 #31351（Azure OAuth）的后续讨论，这些变化将直接影响企业用户的接入路径。

---

*日报基于 GitHub Issue / PR 元数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-01

> 数据来源：github.com/badlogic/pi-mono（实际仓库已迁移至 earendil-works/pi）

---

## 📌 今日速览

过去 24 小时 Pi 项目并未发布新版本，但社区活跃度依然较高：**多条 TUI 渲染与 Agent 生命周期相关的关键 bug 已被关闭**，包括 TUI 行损坏 (#8584)、CLI 参数解析 (#8894) 等历史遗留问题。与此同时，**多家新推理服务商（Fireworks GLM 5.3、CoralBricks、Melious、Tencent Token Plan）相继提交集成 PR**，模型目录生态持续扩张。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布，跳过本节。
>
> 上一版本：0.84.4（已在 [pi.dev](https://pi.dev/news/releases/0.84.4) 公布，建议关注近期可能伴随的多项修复一并发布）。

---

## 🔥 社区热点 Issues

按评论数与社区关注度排序，挑选最具代表性的 10 条：

| # | Issue | 状态 | 评论 | 关键看点 |
|---|-------|------|------|---------|
| 1 | **#8584** [TUI row corruption during streaming](https://github.com/earendil-works/pi/issues/8584) | ✅ CLOSED | 25 | 今天最热——长工具输出后助手文本被错误地"逐词换行"。已关闭，修复应在 0.84.4 链路中。 |
| 2 | **#5886** [AgentSession settlement/continuation lifecycle bugs](https://github.com/earendil-works/pi/issues/5886) | 🟢 OPEN | 10 | mitsuhiko 亲自标记的"元 issue"，聚合了 Agent 收尾阶段的多个并发缺陷，#8908 PR 正是为此而来。 |
| 3 | **#6600** [pi update --extensions 与 npm 11.16.0 不兼容](https://github.com/earendil-works/pi/issues/6600) | 🟢 OPEN | 5 | npm 11.16.0 默认禁用 install script，破坏了 pi 扩展更新流程，需新增参数透传。 |
| 4 | **#6552** [ExtensionContext.requestReload() 延迟重载](https://github.com/earendil-works/pi/issues/6552) | 🟢 OPEN | 5 | 扩展开发者强烈需求：让工具与事件 handler 在运行时安全点请求重载，避免当前只能在非交互路径生效的限制。 |
| 5 | **#8134** [Agent 通过明文 HTTP 代理处理 plain-HTTP provider 时首个工具调用后挂起](https://github.com/earendil-works/pi/issues/8134) | 🟢 OPEN | 5 | 自 0.84.0 起出现的 OpenAI-兼容 provider 经 HTTP_PROXY 后卡死的回归，影响企业内网部署。 |
| 6 | **#8491** [更新 DeepSeek 目录：deepseek-v4-flash-vision + peak/off-peak 定价](https://github.com/earendil-works/pi/issues/8491) | ✅ CLOSED | 3 | 推动 #8915 PR 实现目录更新。 |
| 7 | **#8884** [auto-compaction reserveTokens 在长自主会话中不被检查](https://github.com/earendil-works/pi/issues/8884) | ✅ CLOSED | 3 | 直接催生 #8902 PR 改进阈值检查路径。 |
| 8 | **#8061** [Context budget 忽略 maxTokens 输出预留，溢出重试也失败](https://github.com/earendil-works/pi/issues/8061) | 🟢 OPEN | 3 | Gemini 类 1M 长上下文窗口下的成本与可靠性问题。 |
| 9 | **#8894** [CLI value 选项吞掉后续 flag](https://github.com/earendil-works/pi/issues/8894) | ✅ CLOSED | 3 | CLI 解析器一处小但恼人的 bug，已修复。 |
| 10 | **#8752** [bedrock-converse 未跨模型族标准化 usage.input](https://github.com/earendil-works/pi/issues/8752) | ✅ CLOSED | 3 | 影响成本计费准确性的模型族归一化问题。 |

---

## 🛠️ 重要 PR 进展

今日合并或高优先度的 10 条 PR：

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | **#8931** [Fireworks GLM 5.3 thinking-level 覆盖](https://github.com/earendil-works/pi/pull/8931) | ✅ CLOSED | 为 Fireworks 上 `glm-5p3` / `glm-5p3-flash` 两个 thinking-only 模型补齐 thinking-level 覆盖。 |
| 2 | **#8930** [暴露队列中的 agent 消息状态](https://github.com/earendil-works/pi/pull/8930) | ✅ CLOSED | 新增 `ctx.hasQueuedAgentMessages()`，让扩展可以观察直接排队到 Agent 的 `steer` / `followUp`，与 session/UI text 队列解耦。 |
| 3 | **#8929** [内存 fork 前 settle 当前 turn](https://github.com/earendil-works/pi/pull/8929) | ✅ CLOSED | 修复未持久化 SessionManager 的 `/fork` 时，正在执行的 tool turn 可能在 fork 后写入旧会话的竞态。 |
| 4 | **#8925** [新增 CoralBricks 内置 provider](https://github.com/earendil-works/pi/pull/8925) | ✅ CLOSED | 自有 GPU 之上的 OpenAI-compat 推理（GLM 5.3、Kimi K3、GPT-OSS 120B），1M context，免输入 token 计费。 |
| 5 | **#8915** [DeepSeek V4 peak/off-peak 定价均值化](https://github.com/earendil-works/pi/pull/8915) | ✅ CLOSED | 因当前 cost schema 仅支持平价，使用官方峰谷价均值作为过渡方案。 |
| 6 | **#8908** [保留 compaction 排队的 prompts](https://github.com/earendil-works/pi/pull/8908) | ✅ CLOSED | 解决 #5886 描述的 compaction 与 input hook 竞态——补全 PR 中的 faux-provider 回归测试。 |
| 7 | **#8907** [扩展发现跳过 .disabled 条目](https://github.com/earendil-works/pi/pull/8907) | ✅ CLOSED | 修复文件 `foo.ts.disabled` 已不加载、但目录 `my-extension.disabled` 仍在加载的不一致行为。 |
| 8 | **#8903** [新增 Melious provider](https://github.com/earendil-works/pi/pull/8903) | ✅ CLOSED | 欧洲基础设施的 OpenAI-compat 推理，强调 GDPR/TTDSG 合规。 |
| 9 | **#8902** [mid-loop compaction 走完整阈值检查](https://github.com/earendil-works/pi/pull/8902) | ✅ CLOSED | 在 #8884 排查中发现 #8782 修复只覆盖了常见路径，本次补全其它路径。 |
| 10 | **#8901** [TCP/WS 传输 + 实验性 Ollama provider](https://github.com/earendil-works/pi/pull/8901) | ✅ CLOSED | 客户端内置 `createTcpTransportFactory` / `createWebSocketTransportFactory`，服务端手写 RFC 6455 WS / TCP，coding-agent transport-address 支持 `tcp://`、`ws://`。 |
| 🆕 | **#8158** [升级 Mermaid 终端渲染](https://github.com/earendil-works/pi/pull/8158) | 🟢 OPEN | 闭合 #8157、#7832；尚未合并的较早 PR，持续等待 review。 |

---

## 📈 功能需求趋势

从近 24h 的 Issues + PR 整体梳理，社区当前的关注焦点集中在 5 个方向：

1. **🧠 新模型 / 新 provider 集成（最热）**
   24h 内至少 4 家新推理服务商（CoralBricks、Melious、Tencent Token Plan、Fireworks GLM 5.3）提交集成，加上 DeepSeek V4 峰谷价更新。**模型目录已演进为首要"流量入口"**，反映出多模型时代的持续扩散。

2. **🪛 长会话与上下文管理**
   #8884、#8061、#8845、#5886 全都涉及"长自主会话"——auto-compaction、context budget、分支摘要、Agent 收尾。LLM 工作流正向"小时级 agent 任务"推进，资源调度可靠性成为核心痛点。

3. **🧩 扩展与 API 能力补全**
   #6552（`requestReload`）、#8930（暴露 queued agent 消息）、#8699（清理 pi-tui 配置耦合）显示 0.84 系列正在补齐扩展开发者能力面。

4. **🌐 网络与企业级部署**
   #8134（HTTP 代理）、#8911（Bedrock 自定义 base URL）、#8901（TCP/WS transport）说明团队场景与代理/网关路径逐渐成为刚需。

5. **🎨 TUI / 体验打磨**
   #8584、#8800、#8900、#8909、#8923、#8919——TUI 渲染、选择器、footer、fullscreen 仍是用户感知最强的部分。

---

## 💬 开发者关注点

从社区反馈中可提炼的痛点与高频需求：

- **🪤 工具输出后的 TUI 渲染脆弱性**：长 `sed` / `cat` 输出让流式响应布局错乱（#8584 高票），开发者最直观的挫败感来源之一。
- **🔁 npm 11.x 的隐式破坏**：上游默认安全策略（禁用 script）让现有扩展更新流程"没报错地失败"，需明确参数透传（#6600）。
- **🏢 企业网络兼容性**：plain-HTTP provider 走 forward proxy 失败（#8134）、自定义 Bedrock base URL 未生效（#8911）、模型描述元信息缺位（#8922）等都指向 *B2B/私有化部署* 的实际需求。
- **🧰 扩展 API 的"最后一公里"**：`requestReload`（#6552）、`hasQueuedAgentMessages()`（#8930）、embedder 自定义 OAuth 回调页（#8924）暗示第三方集成方对**生命周期与品牌定制**要求日益具体。
- **📦 文档与目录同步**：#8921 反映文档锚点漂移；#8788、#8887 多人提交 docs PR，说明官方文档与快速变化的 provider/CLI 表面之间的同步压力。
- **🔌 离线行为的"潜规则"**：#8684 指出 `PI_OFFLINE` 名义上只关 startup housekeeping，实际却禁用了所有 provider 模型发现——**文档与行为不一致**已成为开发者报告的典型反模式。

---

*日报由社区数据自动聚合生成，仅供内部参考。原始仓库：https://github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-01**

---

## 📌 今日速览

今日 Qwen Code 发布了 v0.22.3 nightly 版本，主要聚焦 Web Shell 的 Git 状态提示与 Review 系统能力扩展。社区讨论最热烈的议题是 **跨会话消息机制**（Issue #8724，13 条评论，已关闭），同时围绕多 Agent 协作中的工具调用去重、状态恢复、会话压缩等核心场景涌现出多个被快速修复的 P2 Bug。Review 子系统本周继续按"Critical only"收敛姿态密集提交，prose-execution 与 counter-frame 两个新增审计镜头已合入。

---

## 🚀 版本发布

### v0.22.3-nightly.20260831.3a0c4c6108

nightly 通道版本，本次可识别的改动：

- **feat(web-shell)**: 在分支选择器旁展示 Git 状态提示（[PR #10397](https://github.com/QwenLM/qwen-code/pull/10397)）
- **feat(review)**: 发布条目的初步内容（被截断，预期包含 Review 流程相关的进一步能力）

完整 release notes 仍在生成中，建议持续关注 [Releases 页面](https://github.com/QwenLM/qwen-code/releases)。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 状态 | 评论 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#8724](https://github.com/QwenLM/qwen-code/issues/8724) | 跨会话消息：让同一机器上的 Qwen Code 会话相互通信 | CLOSED | 13 | ⭐⭐⭐⭐⭐ |
| 2 | [#8897](https://github.com/QwenLM/qwen-code/issues/8897) | `--approval-mode` 与 `--auth-type` 被接受但未出现在 `qwen --help` 中 | CLOSED | 6 | ⭐⭐⭐⭐ |
| 3 | [#9450](https://github.com/QwenLM/qwen-code/issues/9450) | `task_list` 在 Team 状态变化时会误触发重复工具调用循环检测 | CLOSED | 5 | ⭐⭐⭐⭐ |
| 4 | [#9281](https://github.com/QwenLM/qwen-code/issues/9281) | `task_list` 将空可选过滤器视为有效过滤器 | CLOSED | 5 | ⭐⭐⭐⭐ |
| 5 | [#10547](https://github.com/QwenLM/qwen-code/issues/10547) | PR #10532 中延后的审查发现 | OPEN | 5 | ⭐⭐⭐ |
| 6 | [#10640](https://github.com/QwenLM/qwen-code/issues/10640) | "Press ctrl+s to show more lines" 提示在不必要时仍显示 | OPEN | 4 | ⭐⭐⭐ |
| 7 | [#8535](https://github.com/QwenLM/qwen-code/issues/8535) | `--resume` 可重建 PR #8260 已修复的 dangling unsigned thought 隐患 | OPEN | 4 | ⭐⭐⭐⭐ |
| 8 | [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | Fleet Shepherd Dashboard（自动维护的 Bot 调度看板） | OPEN | 3 | ⭐⭐⭐ |
| 9 | [#10380](https://github.com/QwenLM/qwen-code/issues/10380) | OpenAI 兼容网关返回 413 时自动压缩不恢复 | CLOSED | 3 | ⭐⭐⭐⭐ |
| 10 | [#9434](https://github.com/QwenLM/qwen-code/issues/9434) | Edit/WriteFile PreToolUse 钩子返回 `ask` 时不展示 diff | CLOSED | 3 | ⭐⭐⭐ |

**重点解读：**

- **#8724（跨会话消息）** 是 roadmap/multi-agent 的标志性需求，已被 PR #10636（per-session token 鉴权）落地。社区围绕"如何安全、fail-closed 地让本地多会话互联"形成了完整讨论闭环。
- **#9450 / #9281** 都直指多 Agent 场景下 `task_list` 的状态语义偏差，团队响应迅速，已 CLOSED。
- **#10380** 揭示了一个被低估的边缘场景：长会话在反向代理请求体字节上限低于模型上下文窗口时会"永久卡死"。对自部署用户尤为关键。
- **#8535** 仍 OPEN，提示 `--resume`/`--continue` 路径下 PR #8260 的防护未完全覆盖，会话恢复链路的安全治理需补齐。
- **#10547** 是典型的"AI 审查 → 延后 → 人工跟进"流程产物，由 `qwen-code-dev-bot` 跟踪。
- **#10640** 反映一个简单的 UX 体验问题——多行提示在无多余内容时仍然显示，对终端用户高频可见。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 标题 | 标签 | 价值点 |
|---|---|---|---|---|
| 1 | [#10636](https://github.com/QwenLM/qwen-code/pull/10636) | 为跨会话收件箱连接增加 per-session token 鉴权 | autofix/takeover | 关闭 #8724 的安全面短板 |
| 2 | [#10263](https://github.com/QwenLM/qwen-code/pull/10263) | `/cd` 后重载项目运行时 | autofix/needs-human | 让切换工作目录可携带 settings / 钩子 / skills / MCP 全部刷新 |
| 3 | [#10221](https://github.com/QwenLM/qwen-code/pull/10221) | Review 新增 prose-execution 与 counter-frame 审计 | autofix/needs-human | 把 #9655 复盘的 proposal 3 & 4 落地 |
| 4 | [#10169](https://github.com/QwenLM/qwen-code/pull/10169) | Review `--fix` 后审计未固定的新假设 | autofix/needs-human | 用 snapshot 做 bounded delta 校验 |
| 5 | [#10136](https://github.com/QwenLM/qwen-code/pull/10136) | 在 critical 姿态下把 re-review 切到 fix-audit 形态 | autofix/needs-human | 让 Review 在收敛姿态下更省成本 |
| 6 | [#10226](https://github.com/QwenLM/qwen-code/pull/10226) | Shell 支持可选 worktree | autofix/needs-human | 为并行多分支会话提供工程基础 |
| 7 | [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | 对包装型网络错误（EOF）启用自动重试 | autofix/needs-human | 在 Ctrl+Y 不可用的 channel 中兜底传输 |
| 8 | [#10594](https://github.com/QwenLM/qwen-code/pull/10594) | Web Shell 可视化与管理动态 Workflow 运行 | autofix/takeover | 让 Web Shell 直接承接 Workflow 生命周期 |
| 9 | [#10575](https://github.com/QwenLM/qwen-code/pull/10575) | 为秒级任务分配独立 ECS lane | — | CI 池化资源分级，缩短关键路径 |
| 10 | [#10367](https://github.com/QwenLM/qwen-code/pull/10367) | `packages/qwen-live` 独立语音守护进程（M1+M2） | — | 把 Live 语音从 `qwen serve` 拆分为独立应用 |

**补充观察：**

- [#10485](https://github.com/QwenLM/qwen-code/pull/10485)：修 `serve-mcp` 二进制重复 hashbang，附带 `node --check` 构建时断言。
- [#10455](https://github.com/QwenLM/qwen-code/pull/10455)：修 CLI 启动时 output-language 文件不可写导致的崩溃（#10453）。
- [#10458](https://github.com/QwenLM/qwen-code/pull/10458)：Review 评审脚注剥离漏失导致重复 footer。
- [#10636](https://github.com/QwenLM/qwen-code/pull/10636) 是本周少有的"安全 + 多 Agent"双标签 PR，值得部署用户特别关注。

---

## 📈 功能需求趋势

将过去 24 小时活跃 Issues 按主题聚类：

### 1. 多 Agent / 多会话协作（热度最高）
- 跨会话消息（#8724）
- `task_list` 语义修正（#9281, #9450）
- Agent Team 工作流（#10654, #10638）
- **信号**：Qwen Code 正从单 Agent 走向显式多 Agent 架构，IPC 鉴权、状态恢复、会话归档的"安全—可靠"两面需要同步治理。

### 2. Review 子系统持续加固
- fix-audit 形态（#10136）
- prose-execution / counter-frame 审计（#10221）
- applied-fix 假设审计（#10169）
- decided-stop fence 信任锚（#10654）
- **信号**：`/review` 进入"Critical only"收敛期，强调不重复审查、能用 delta 校验即不重做。

### 3. Web Shell 与嵌入主机体验
- Git 状态提示（#10397）
- 会话工件快照（#10638）
- 助手回合结算回调（#10398）
- 动态 Workflow 运行可视化（#10594）
- **信号**：Web Shell 已从"展示型 UI"演化为"嵌入主机的协议面"，大量 PR 围绕回调语义、状态机终态展开。

### 4. Skill / Extension 生命周期
- 安装原子化（#10187, #10652）
- Skill 安装工件硬化（#10652）
- **信号**：Skill 体系进入 v2 治理窗口，从"能跑"走向"可回滚、可观测、可清理"。

### 5. CI / 基础设施可观测性
- ECS 任务分级（#10575）
- Fleet Shepherd Dashboard（#7167）
- 集群更新失败告警（#10445）
- Main CI 自动建 issue（#10447, #10523, #10669, #10665）
- **信号**：Bot 自动化覆盖率持续上升，`autofix/*` 流程已规模化。

### 6. 渠道与集成
- DWS 任务生命周期反应定制（#10609）
- DingTalk 状态卡片容错（#10354）
- Web Shell 加载 MCP 后无法对话（#10228）

---

## 👨‍💻 开发者关注点（痛点与高频诉求）

1. **多 Agent 状态机的边界治理**  
   `task_list` 重复检测、空过滤器、归档-活跃冲突（#9688）、resume 路径下未签名 thought 复现（#8535）——开发者最痛的不是工具本身，而是"状态在边界处的可预测性"。社区希望工具调用循环检测、过滤器语义、归档时序都有清晰契约。

2. **终端 UX 的细节打磨**  
   `Press ctrl+s to show more lines` 误显示（#10640）、Home/End 键失效（#10642）——高频、可见、修复成本低，但暴露出终端渲染层在大量 Agent 输出场景下的脆弱。

3. **`.qwen` 目录膨胀**  
   #10641 请求自动清理机制，说明本地缓存/快照策略缺乏生命周期管理，部署用户长期使用时反馈集中。

4. **CLI 自描述一致性**  
   #8897：`--approval-mode`、`--auth-type` 已注册但 `--help` 未列。开发者认为可执行文件应自描述，否则脚本化使用门槛高。

5. **OpenAI 兼容后端的边界行为**  
   #10380：当反向代理请求体上限低于模型上下文窗口时，长会话会"永久卡死"。开发者期待网关错误能像 4xx/5xx 一样进入退避/重试链路。

6. **PreToolUse 钩子的可见性**  
   #9434：`ask` 升级到人工时未渲染 diff。开发者将 Edit/Write 的 PreToolUse 当作"安全门"，需要清晰的展示层来辅助判断。

7. **会话压缩与恢复的可恢复性**  
   #9704 留下的 30s restore drain 窗口（#9773）、HTTP 413 下的自动压缩不恢复（#10380）——长会话的"可恢复性"仍是高优需求。

8. **嵌入主机的协议契约**  
   多条 PR 围绕"何时才算回合真正结束"（#10398）、"如何拿一份权威工件快照"（#10638）展开。开发者希望从 Web Shell 获得的是确定性事件，而非"轮询 + 猜测"。

---

**日报生成时间**：2026-09-01  
**数据来源**：[GitHub: QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-09-01** ｜ **数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 1. 今日速览

今日社区活动以**收尾与一致性收敛**为主旋律：TUI Tideline 重构的多个核心 slice（启动 logo、composer 围栏、TopBar 交互）已合并，**provider 路由权威与凭据管理**完成跨模块统一；同时多个 **CI 基础设施修复**（含 Codewhale-review 401/402 误报、CHANGELOG 卡关）一次性解决队列阻塞。无版本发布，社区关注焦点从"功能堆叠"转向"系统可靠性与术语统一"。

---

## 2. 版本发布

过去 24 小时内无新 Release。当前最新版本仍为历史最新版本（数据中未提供），建议关注仓库的 [Releases 页面](https://github.com/Hmbown/DeepSeek-TUI/releases) 获取版本节奏。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#5316](https://github.com/Hmbown/DeepSeek-TUI/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | OPEN | 顶层架构 EPIC，统筹整个 TUI crate 拆分工作，含全部子 EPIC 与 FEAT 进度追溯，是理解中长期技术路线的入口。 |
| [#5778](https://github.com/Hmbown/DeepSeek-TUI/issues/5778) | **Native ChatGPT/Codex subscription sign-in without Codex CLI** | OPEN | 用户报告：连接 ChatGPT 订阅当前强依赖 Codex CLI 与 `~/.codex/auth.json`。已催生 [#5784](#5784) 的 PKCE 原生登录实现，是订阅模式体验的关键缺口。 |
| [#5605](https://github.com/Hmbown/DeepSeek-TUI/issues/5605) | **Flaky test: remote_control separate_predispatch_crashes_on_one_run_get_distinct_recovery_turn_ids** | OPEN | 在全量并行负载下偶发失败，`remote_control.rs` 未被改动，需确认与 [#5586](https://github.com/Hmbown/DeepSeek-TUI/issues/5586) crate 切片无关，影响 CI 稳定性。 |
| [#5713](https://github.com/Hmbown/DeepSeek-TUI/issues/5713) | **支持 `wire = "responses" \| "anthropic"` for openai-compatible** | CLOSED | 自定义 provider 配置 `wire` 字段被忽略导致走错协议栈，已通过 [#5719](#5719) 修复并合并。 |
| [#5772](https://github.com/Hmbown/DeepSeek-TUI/issues/5772) | **Provider picker 隐式探测凭据/未授权加载** | CLOSED | 安全相关：picker 在"声明不探测"的同时元数据探测已禁用 CLI 凭据路径，存在泄露 HOME/temp 路径风险；[#5784](#5784) 的 PKCE 路径是其下游解法。 |
| [#5775](https://github.com/Hmbown/DeepSeek-TUI/issues/5775) | **统一 "Pod" 为官方多 agent roster 命名** | CLOSED | 终结 `fleet / pod / saved rosters / durable runs / sub-agents` 五个并存名词的混乱局面，是面向用户的术语治理。 |
| [#5768](https://github.com/Hmbown/DeepSeek-TUI/issues/5768) | **Compose and verify the Tideline shell as one coherent running TUI** | CLOSED | Tideline 各 slice（启动 mark、composer、rail）单测绿但未在真实二进制中验证，推动端到端整合。 |
| [#5767](https://github.com/Hmbown/DeepSeek-TUI/issues/5767) | **公开站点 `/signin` `/signup` 国际化后 404** | CLOSED | 公开站点路由本地化后失效，影响新用户转化。 |
| [#5771](https://github.com/Hmbown/DeepSeek-TUI/issues/5771) | **Active-session composer 共用 ` [↑]` send 几何** | CLOSED | 让运行中会话的 ComposerWidget 与启动页共用相同的提交几何与鼠标路径。 |
| [#5755](https://github.com/Hmbown/DeepSeek-TUI/issues/5755) | **统一 picker / readiness / runtime / API / CLI 的 provider 路由权威** | CLOSED | ProviderLake 与 RouteResolver 长期各执一词、Baseten 硬编码为 OpenAI 兼容模板，被 [#5783](#5783) 用描述符模型替换。 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| [#5784](https://github.com/Hmbown/DeepSeek-TUI/pull/5784) | **feat(tui): native ChatGPT PKCE sign-in for openai-codex** | OPEN | 闭环 [#5778](#5778)。浏览器 PKCE + localhost callback，可刷新 token 存入 Codewhale 自有存储；对齐 xAI device-login 模型，用户不再需要 Codex CLI。 |
| [#5749](https://github.com/Hmbown/DeepSeek-TUI/pull/5749) | **feat(app-server): unix-socket transport + daemon/attach advertisement** | OPEN | Desktop Phase 0 基础：daemon 派发 → socket 连接 → 往返 → 关闭全链路已通过对抗式审查；为后续工作区协议铺路。 |
| [#5751](https://github.com/Hmbown/DeepSeek-TUI/pull/5751) | **feat(protocol): Op/EventMsg parity + compile-enforced guard** | OPEN | Rust 核心与 TS 表面协议对齐，通过编译期守卫阻止静默漂移；parity 守卫测试已绿。 |
| [#5783](https://github.com/Hmbown/DeepSeek-TUI/pull/5783) | **feat(config): catalog authority — descriptors not compiled model lists** | CLOSED | 终结 Baseten/Groq/Cerebras 模型清单硬编码入二进制，改为提交描述符并动态拉取，与 Pi/OMP 模式对齐。 |
| [#5721](https://github.com/Hmbown/DeepSeek-TUI/pull/5721) | **feat(cli): Codewhale-account machine tokens (`CODEWHALE_API_KEY`)** | CLOSED | CI/账号身份路径：无本地会话文件、无浏览器即可认证，遵循控制平面契约的不对称设计。 |
| [#5790](https://github.com/Hmbown/DeepSeek-TUI/pull/5790) | **fix(tui): isolate remote recovery lease generations** | OPEN | 第三方贡献者 @nightt5879：把空 classic lease id 视为新恢复代际，避免预分派租约污染；附带确定性测试覆盖。 |
| [#5758](https://github.com/Hmbown/DeepSeek-TUI/pull/5758) | **fix(tui): restore rounded active composer enclosure** | CLOSED | 在可行尺寸下恢复圆角 ComposerWidget 围栏，保留 `composer_border` 紧凑可选；显式 ` [↑]` 提交单元格可见。 |
| [#5763](https://github.com/Hmbown/DeepSeek-TUI/pull/5763) | **fix(tui): make topbar route segment interactive** | CLOSED | 顶部栏的 route/model 段可点击/F3 唤起 picker，统一入口至 `/provider`，TopBar 不再持有目录数据或路由权威。 |
| [#5753](https://github.com/Hmbown/DeepSeek-TUI/pull/5753) | **feat(tui): restore approved current startup mark** | CLOSED | 用经审批的 diving-whale mark 替换退役的 fluke 投影，保留 cell-exact goldens 与 ASCII fallback；为 Tideline 品牌定调。 |
| [#5740](https://github.com/Hmbown/DeepSeek-TUI/pull/5740) | **ci(review): make Codewhale-review non-run visible; add Model Studio to key ladder** | OPEN | 揭示"绿勾但 0 评论"问题（BYOK 402 余额不足被吞为 warning 退出 0）；把 Model Studio 加入 key 阶梯，避免 PR 误以为已审查。 |

---

## 5. 功能需求趋势

从近 24 小时 Issue/PR 提炼，社区关注点呈以下聚类：

- **🔐 鉴权与多账号治理**
  - 自定义 provider 协议方言（`responses`/`anthropic`）[#5713 / #5719](#5713)
  - 原生 ChatGPT/Codex 订阅 PKCE 登录 [#5778 / #5784](#5778)
  - `CODEWHALE_API_KEY` 机器令牌 [#5721](#5721)
  - `auth list` 行按 provider 而非凭据槽命名 [#5788](#5788)
  - 隐式凭据探测 → 显式同意 [#5772](#5772)

- **🎨 TUI Tideline 视觉与交互一致性**
  - 启动 hero、composer 围栏、TopBar 交互三件套（[#5753](#5753) / [#5758](#5758) / [#5763](#5763) / [#5762](#5762)）
  - 跨 page composer 几何统一 [#5771](#5771)
  - 端到端 shell 集成验证 [#5768](#5768)

- **📦 多 agent 词汇统一**
  - `Pod` 成为官方 roster 命名 [#5775](#5775)
  - 多 agent 沙箱与对外术语治理

- **🏗️ 架构与协议稳定性**
  - TUI crate 分解 EPIC [#5316](#5316)
  - Op/EventMsg 协议对齐与编译守卫 [#5751](#5751)
  - provider 路由权威统一 [#5755](#5755) + 描述符模型 [#5783](#5783)
  - 会话恢复采用 host session id [#5750](#5750)
  - 远程恢复租约代际隔离 [#5790](#5790)

- **🛠️ 开发者基础设施**
  - CI 审查可见性 [#5740](#5740)
  - CHANGELOG 卡关解封 [#5786](#5786)
  - 死代码清扫 [#5791](#5791)
  - Co-author trailer 闸门放宽 [#5789](#5789)
  - 文档/本地化品牌名收敛为 Codewhale [#5742](#5742)

- **📈 可靠性 / 可观测性**
  - 远程控制 flaky 测试定位 [#5605](#5605)
  - 压缩契约发布（保留最后轮）[#5782](#5782)

---

## 6. 开发者关注点

综合 Issue 与 PR 描述中的痛点信号：

1. **CI 信号失真**：开发者最不满的是"绿勾但无评论"，原因包括 BYOK key 余额不足被静默吞掉、CHANGELOG 缺失卡关、Co-author trailer 误杀合法 commit。社区需要的是**可解释、可审计、可重放**的流水线状态，而不是简单的红绿。
2. **多模块同名不同源**：provider/picker、readiness、runtime、CLI、API 之间长期使用不同权威，导致"看似可选但运行时不可用"或反之。`descriptors not compiled lists` 是治理思路的明确表态。
3. **隐式行为即 bug**：隐式凭据探测、未授权 Enter 即采用凭据、隐式接管外部 CLI 凭据，这一类"看起来像 feature 实际是泄漏"的接口在 [#5772](#5772) 后被广泛标记为反模式。
4. **命名混乱即债务**：`fleet / pod / roster / sub-agent` 同义不同源，重复进入文档、CLI、TUI 后会指数级放大教学与维护成本。`Pod` 单一词汇的决策被多个 PR 显式背书。
5. **状态恢复的脆弱性**：远程控制的预分派租约与会话 id 漂移是两类典型可靠性坑，会话恢复（#5750）需主动接管 host session id，远程控制（#5790）需在协议层隔离代际。
6. **第三方贡献门槛**：@nightt5879 的 PR 体现社区愿意贡献，但描述中"force-push 不可用"（#5719）也提示：fork 工作流与分支策略可能成为隐性阻碍。

---

> **日报说明**：本期数据基于 GitHub Issues 与 PRs 最近 24 小时更新流，未涵盖 Discussions、Commits 与外部生态。如需补充特定维度（性能基准、外部集成、品牌迁移进度），请告知。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*