# AI CLI 工具社区动态日报 2026-08-15

> 生成时间: 2026-08-15 00:52 UTC | 覆盖工具: 9 个

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
**数据时点：2026-08-15**

---

## 1. 生态全景

2026 年 8 月的 AI CLI 赛道已进入 **"协议化 + 多代理化"双主线** 阶段：主流工具普遍补齐 MCP 鉴权、Provider 聚合、Subagent 委派三类能力，但 Windows 桌面端性能、Auto-mode 安全边界、长会话上下文管理仍是横跨所有产品的共性痛点。OpenCode 出现的 48-bit ID 时间戳环绕（影响 8/14 之前全部历史会话）和 OpenAI Codex 的 Electron 主线程回归揭示：**当产品跨过百万级用户门槛后，基础设施稳定性已取代功能创新成为最高优先级**。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | Release 动态 | 自动化特征 |
|---|---|---|---|---|
| **Claude Code** | 10（1 已关闭） | 4 OPEN | v2.1.233 正式版 | 人工为主 |
| **OpenAI Codex** | 10 | 12 已合并 | Rust 0.148.0-alpha 14→18（5 个 alpha） | `copyberry[bot]` 全自动合入 |
| **Gemini CLI** | 10 | 15（11 合/4 进行） | v0.56.0-nightly | 人工 + 团队批量 |
| **GitHub Copilot CLI** | 10（2 已关闭） | 3 | v1.0.81-0 / v1.0.80-1 / v1.0.80 | 仓库维护性 PR |
| **Kimi Code CLI** | 4 | 0 | 无 | 数据稀疏 |
| **OpenCode** | 10 | 10 | 无（Critical bug 修复中） | kitlangton 等核心维护者集中提交 |
| **Pi** | 10（6 已关闭） | 10（6 已关闭） | v0.84.2 | 高闭合率，问题-修复节奏快 |
| **Qwen Code** | 10 | 11 | v0.21.12 正式 / preview.4 / nightly | 多轨并行 |
| **CodeWhale** | 10 | 10 | v0.9.8 | Dependabot + 人工 |

**解读**：Codex 以 12 个 PR 全部自动化合入的形式领跑工程吞吐；Gemini CLI 与 Qwen Code 的 PR 数与发布频率表明团队处于高强度迭代期；Copilot CLI 与 Kimi 的低 PR 数提示资源聚焦在 triage 而非新功能。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **Subagent / 多代理编排** | Gemini CLI（#22323、#28738）、Claude Code（#24537 层级看板）、OpenCode（#42657 子代理 97% CPU）、Qwen Code | 终止状态准确性、子代理可调用子代理、可观测性、plan/build 切换可见 |
| **MCP 生态与鉴权** | Copilot CLI（#4480/#4439 OAuth 回归）、OpenCode（#42662 配置 fail-loud）、Claude Code（#86807 Browser Agent）、CodeWhale（rmcp 2→3 升级） | OAuth/RFC 8414 合规、配置错误可见、生态对齐 |
| **持久化记忆与上下文管理** | Kimi CLI（#1283 + #1478 共 42 评论）、Claude Code（#79217 MEMORY.md 上限）、Gemini CLI（#26522/#26525 Auto Memory 风险）、Codex（#31375 compact 断连） | 跨会话知识保留、文档可发现性、敏感信息确定性脱敏 |
| **Windows 桌面端稳定性** | Codex（#20214、#38583、#29436 五连击）、Claude Code（#86619 auto-mode 误报）、Pi（#7547 调研贴）、Gemini（#25378 ripgrep EFTYPE） | Electron 主线程同步 I/O、auto-mode 权限回归、shell 兼容性 |
| **多 Provider 聚合与兼容性** | Pi（xAI/SiliconFlow/Kimi/Baseten 多线接入）、OpenCode（Copilot provider 不可见）、Copilot CLI（Claude 模型在 CLI 缺失）、Codex（Bedrock reasoning） | 模型目录刷新、企业模型可见性、provider schema 简化 |
| **TUI 性能与体验** | Pi（#6665 Intl.Segmenter 单核 100%）、Codex（6 个 PR 硬化 TUI 启动）、OpenCode（#42646 透明背景 / #42673 拖放） | 启动期输入处理、composer 渲染、长会话滚动 |
| **Web/IDE 端形态扩展** | CodeWhale（#3192 ACP registry）、Qwen（Web Shell Composer）、Kimi（#2269 远程会话交接）、Claude Code（#75863 VSCode Background Tasks） | 从纯 CLI 扩展到 Web/Desktop/移动多端 |
| **长会话可靠性** | Qwen（#2128 UI History 无上限）、Codex（#31375 压缩断连）、Claude Code（#85272 归档丢失）、Gemini（PTY 泄漏 #27154） | 上下文窗口卫生、归档/恢复、压缩前缀缓存命中 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键差异化路线 |
|---|---|---|---|
| **Claude Code** | 企业级 Git 协作 + 身份审计 | 大型组织、合规敏感团队 | GitLab 集成、`forward_user_identity` 头转发、最严的 Cyber 安全策略 |
| **OpenAI Codex** | 跨平台桌面 + 协议分层 | 桌面重度用户、需要协议级可控性的开发者 | `PermissionProfileSnapshot` 协议化、Windows 沙箱 deny-read fail-closed |
| **Gemini CLI** | Subagent 原生 + 评估驱动 | 研究型 / Agent 编排探索者 | 子代理可调用子代理（#28738）、行为评估 → 组件级评估升级 |
| **GitHub Copilot CLI** | GitHub 原生 + MCP 中枢 | GitHub Enterprise 用户 | 模型目录强耦合 GitHub 后台、RFC 8414 严格 OAuth |
| **Kimi CLI** | 持久化记忆优先 | 长周期项目开发者 | 记忆系统是社区最高呼声（42 评论）、跨设备交接 |
| **OpenCode** | 开源多 Provider + V2 协议重构 | 自托管、开源偏好、多模型用户 | `LocationMutation` 统一服务、`/api/worktree` 提为正式资源、LAN 自动发现 |
| **Pi** | 多 Provider 运行时 + TUI 打磨 | CLI 美学爱好者、Provider 切换频繁者 | OpenAI Responses 化 / Anthropic thinking blocks / Kimi cache 计费全覆盖 |
| **Qwen Code** | Web Shell + 多工作区 Daemon | 团队协作、企业部署 | `qwen serve` 视为生产组件、`/audit` 遗留代码审计、DingTalk Channel |
| **CodeWhale** | IDE 生态接入（ACP） | VS Code / Zed 等 IDE 用户 | 注册 Agent Client Protocol registry、模型守护层 fail-soft |

---

## 5. 社区热度与成熟度

**最高活跃度（PR+Issue 双高）**：Gemini CLI、Codex、Qwen Code、OpenCode —— 四者均在 24h 内产出 10+ PR，团队处于密集合入与版本冲刺阶段。

**最高成熟度（闭合率高、回归修复快）**：Pi —— 10 个 issue 中 6 个已关闭、10 个 PR 中 6 个已合入，体现"问题-修复"高响应闭环；Copilot CLI 同样大量 issue 被快速标 CLOSED。

**快速迭代 / 实验性**：Codex Rust 0.148.0 24 小时内连发 5 个 alpha、Qwen 同时跑正式 + preview.4 + nightly 三条轨道、CodeWhale v0.9.8 当天出现 CI 红线（provider-count 断言、推理档位词汇），提示产品质量门禁在高压迭代下被反复拉伸。

**关键稳定性信号**：
- 🚨 **OpenCode** 48-bit ID 时间戳环绕（#42608）已影响全部 8/14 之前的历史会话，Critical 级别；
- 🚨 **Claude Code** v2.1.232 auto-mode 引发 Windows Git Bash 误报权限弹窗（#86619），两位独立用户同日复现；
- 🚨 **Codex** 26.810.4967.0 / 26.813.12317 同日引发 5+ 起"可逆因果"性能退化报告；
- 🟡 **Copilot CLI** 1.0.79+ 触发 RFC 8414 §3.3 严格校验，Atlassian / GitLab MCP 集体回归。

**生态规模提示**：Kimi CLI 仅有 4 条 Issue 公开数据，但其中 2 条记忆相关 issue 合计 42 评论，**单一需求密度极高**，提示背后存在未被产品化的核心痛点。

---

## 6. 值得关注的趋势信号

### 趋势一：**Subagent 编排从"单层委派"走向"递归图"**
Gemini CLI 的 #28738（Allow agents to call agents）、Claude Code 的 Agent Hierarchy Dashboard（#24537）、OpenCode 的子代理 TUI 性能问题（#42657）共同表明：**单一主代理 + 工具调用的模式正在被多层级代理图取代**。这对开发者意味着需要重新设计 prompt 隔离、状态可观测性与终止语义。

### 趋势二：**"协议化"取代"功能堆叠"成为竞争主线**
Codex 的 `PermissionProfileSnapshot` 移入协议（#38651）、OpenCode 把 worktree API 移出 experimental（#42656）、Qwen Code 把 `gh` 调用平台化（#9096）—— **头部工具正在用稳定的协议契约固化能力边界**，而非频繁发布新功能。决策者应优先关注各工具的协议层演进而非表面 UI 升级。

### 趋势三：**Auto-Memory 的隐私与资源治理成为新战场**
Gemini CLI 的 #26525（确定性脱敏）、#26522（低信号会话无限重试）、Kimi 的 #1283（用户希望"知道记忆存在哪里"）共同揭示：**跨会话记忆已从"加分项"变成"必备项"，但其治理（数据流透明、敏感信息处理、检索边界）尚未成熟**。在生产环境启用 Auto Memory 前应做数据流审计。

### 趋势四：**Provider 聚合正在分化出"模型目录可见性"问题**
Copilot CLI（#4390/#4422/#4494）、OpenCode（#42083 Copilot provider 模型为空）、Codex（#37160 Bedrock GPT-5.6 不可用）三个工具同时出现"**认证可用但模型目录不可见**"问题。这往往是组织策略、客户端缓存、服务端 feature flag 三方协同失效的结果，**对企业管理 AI 工具部署构成实际阻碍**。

### 趋势五：**Windows 桌面端已成系统性短板**
Codex 6 个高赞 issue 中 5 个与 Windows 相关、Pi 维护者主动发起 Windows 调研（#7547）、Claude Code 与 Gemini 均有 Windows shell 相关 bug—— **跨平台支持中 Windows 仍是工具成熟度的最大变量**。macOS/Linux 优先开发的工具在 Windows 迁移时几乎必然遭遇 Electron 主线程 / PTY / shell 兼容性三类问题。

### 趋势六：**测试基础设施成为隐性竞争力**
Qwen Code 的 P1 E2E 失败工单、Codex 的"26.810.4967.0 同日 5 起退化"、CodeWhale v0.9.8 当天 CI 红线 —— 共同信号是 **回归测试覆盖度正在被产品迭代速度超越**。Gemini CLI 把 steering eval 升级到 `ALWAYS_PASS

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截止 2026-08-15）

---

## 一、热门 Skills 排行（按影响力 / 关注度）

| 排名 | Skill / PR | 类别 | 状态 | 关注度说明 |
|------|-----------|------|------|-----------|
| 1 | **#1298 skill-creator: 修复 run_eval.py 0% recall** | 基础设施修复 | OPEN | 修复 description 优化循环核心 bug，关联 Issue #556（12 评论）和 10+ 复现，影响所有 Skill 的描述自优化流程 |
| 2 | **#1367 self-audit（自审计 Skill v1.3.0）** | 新增 Skill | OPEN | 通用型"机械验证 + 四维推理质量门"，适配任意技术栈，作者活跃、Issue #1385 同源提案支撑 |
| 3 | **#83 skill-quality-analyzer / skill-security-analyzer** | 元 Skill | OPEN | 面向 Skill 自身的质量与安全分析双工具，反映社区对 Skill 治理的强诉求 |
| 4 | **#514 document-typography（文档排版质量控制）** | 新增 Skill | OPEN | 解决 AI 生成文档的 orphan/widow/编号错位问题，覆盖所有文档生成场景 |
| 5 | **#723 testing-patterns（测试模式 Skill）** | 新增 Skill | OPEN | 覆盖 Testing Trophy 哲学 + 单元测试 + React 测试，定位开发者高频需求 |
| 6 | **#1538 修复两个 Skill 不符合 Agent Skills 规范** | 合规修复 | OPEN | 仓库作为参考实现却未通过 `skills-ref validate`，治理信号明显 |
| 7 | **#486 ODT（OpenDocument 读写 Skill）** | 新增 Skill | OPEN | 补齐 ISO 标准开源文档格式，与 docx/pdf 形成完整文档三角 |
| 8 | **#568 ServiceNow 平台 Skill** | 新增 Skill | OPEN | 企业级 ITSM/ITOM/SecOps 全模块覆盖，更新活跃至 8 月 |

**讨论热点共性**：基础设施型修复（skill-creator、run_eval、Windows 兼容）讨论密度最高，远超纯功能新增类 PR。

🔗 PR 链接：
- [#1298](https://github.com/anthropics/skills/pull/1298) · [#1367](https://github.com/anthropics/skills/pull/1367) · [#83](https://github.com/anthropics/skills/pull/83) · [#514](https://github.com/anthropics/skills/pull/514)
- [#723](https://github.com/anthropics/skills/pull/723) · [#1538](https://github.com/anthropics/skills/pull/1538) · [#486](https://github.com/anthropics/skills/pull/486) · [#568](https://github.com/anthropics/skills/pull/568)

---

## 二、社区需求趋势（Issues 提炼）

### 🔥 趋势 1：Skill 安全与信任边界（最高优先级）
**Issue #492（43 评论，👍2）**——社区贡献的 Skill 借 `anthropic/` 命名空间冒充官方，存在权限提升攻击面。**这是当前热度最高的 Issue，远超第二名近 3 倍。**

### 🔥 趋势 2：组织级 Skill 共享与治理
- **#228（16 评论，👍8）**——Claude.ai 内组织级 Skill 共享，期待原生库 + 分享链接
- **#412（CLOSED，6 评论）**——agent-governance Skill 提案（策略执行、威胁检测、审计追踪）
- **#1175**——SharePoint 接入时的访问控制顾虑

### 🔥 趋势 3：Skill 自优化与质量评估
- **#556（12 评论，👍7）** / **#1169（3 评论）**——skill-creator 评估回路全面失效
- **#202（CLOSED，8 评论）**——skill-creator 需从"开发文档"重构为"操作 Skill"
- **#1385（4 评论）**——"推理质量门"三段流水线（校准→对抗评审→交付验证）

### 🔥 趋势 4：上下文窗口与资源开销
- **#1487（4 评论）**——`claude-api` Skill 单次工具调用注入 ~156k tokens 直接耗尽上下文
- **#189（6 评论，👍9）**——`document-skills` 与 `example-skills` 插件内容重复

### 🔥 趋势 5：长时 Agent 状态管理
- **#1329（9 评论）**——compact-memory Skill：用符号化记法压缩 Agent 自身笔记

### 🔥 趋势 6：生态互通
- **#16（4 评论）**——Skill 暴露为 MCP
- **#29（4 评论）**——AWS Bedrock 集成支持

🔗 Issues 链接：
- [#492](https://github.com/anthropics/skills/issues/492) · [#228](https://github.com/anthropics/skills/issues/228) · [#556](https://github.com/anthropics/skills/issues/556) · [#62](https://github.com/anthropics/skills/issues/62)
- [#1329](https://github.com/anthropics/skills/issues/1329) · [#202](https://github.com/anthropics/skills/issues/202) · [#1487](https://github.com/anthropics/skills/issues/1487) · [#189](https://github.com/anthropics/skills/issues/189)

---

## 三、高潜力待合并 Skills（近期可能落地）

> 筛选标准：仍在 OPEN、最近 30 天有更新、Issue 关联度高或解决核心痛点

| PR | Skill | 落地概率判断 | 关键依据 |
|----|-------|------------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator run_eval 修复 | **极高** | 阻塞所有 Skill 的描述自优化闭环；社区 10+ 独立复现，#556 是 P0 级 Bug |
| [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | skill-creator Windows 兼容 | **高** | Windows 是 Claude Code 主流平台之一，目前在 Windows 下整个优化回路 100% 不可用 |
| [#1538](https://github.com/anthropics/skills/pull/1538) | Skill 命名规范回归 | **高** | 仓库自身作为参考实现却违反自家规范，属于必须修复的合规债 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#539](https://github.com/anthropics/skills/pull/539) / [#541](https://github.com/anthropics/skills/pull/541) | PDF/Skill-creator/DOCX 三连修复 | **中** | 由同一活跃贡献者 Lubrsy706 提交，每项都是低风险补丁 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | **中** | 与 #1385 提案同源，作者持续迭代（7 月仍在更新），但属于"新功能"非"修 Bug" |
| [#83](https://github.com/anthropics/skills/pull/83) | quality / security analyzer | **中** | 紧扣 #492 安全议题，命中社区核心痛点，但 PR 已开放 9 个月未合并，存在治理决策阻力 |

**观察**：基础设施与安全类修复合并概率最高，"炫技型"新 Skill（如 pyxel 复古游戏、SAP-RPT-1-OSS 表格预测）虽然有趣，但落地节奏明显落后。

---

## 四、Skills 生态洞察

> **一句话总结**：社区最集中的诉求是——**让 Skill 的"创建—评估—分发—审计"全链路可靠可信**，特别是解决 skill-creator 评估回路失效（#556/#1169/#1298）和命名空间冒充带来的信任崩塌（#492）。

### 三层结构观察

1. **底层痛点（必须先解决）**：
   评估回路失效 → Windows 兼容 → Skill 规范合规 → 命名空间治理
2. **中层能力（正在生长）**：
   自审计（#1367）、质量/安全分析（#83）、压缩记忆（#1329）、组织级共享（#228）
3. **上层应用（持续涌入）**：
   ServiceNow、SAP、ODT、pyxel 等垂直领域 Skill 大量提交，但缺乏统一的质量门槛

### 社区健康度信号

- ✅ **健康**：PR #509（CONTRIBUTING.md）、#95（系统文档）显示社区正主动补齐工程化基础设施
- ⚠️ **风险**：PR #95（系统证据管理文档）与仓库主旨偏离、PR #1528 内容仅为 `@CLAUDE RESOLVE` —— 缺乏前置筛选导致噪声 PR 增多
- 🚨 **紧迫**：仓库作为 Skills 规范参考实现却出现命名违规（#1538），是当前最被低估的治理风险

---

**报告结论**：anthropics/skills 仓库正处于从"内容扩张"向"质量收敛"的关键转折点。下一阶段决定生态走向的，将不是新增多少 Skill，而是能否在 **skill-creator 评估可信度** 与 **命名空间信任边界** 这两个核心问题上给出官方回应。

---

# Claude Code 社区动态日报
**日期：2026-08-15**

---

## 📌 今日速览

今日 Claude Code 发布 v2.1.233，重点扩展 GitLab 集成与代理身份转发能力。社区最关注的焦点仍集中在 **macOS Advisor 触发的 API 无响应 Bug**（63 条讨论、96 点赞），以及 **安全过滤器对合法工作的误判**（多个 Cyber/AUP 误报问题被集中关闭），反映出当前版本在稳定性和安全策略边界上仍是用户痛点。

---

## 🚀 版本发布

### v2.1.233（今日发布）

**主要更新：**
- **GitLab 集成增强**：`--worktree` 标志与 `claude agents` 视图新增对 GitLab Merge Request URL 的支持，MR 以 `!N` 形式展示
- **Apps Gateway 身份转发**：在 Anthropic upstreams 上新增 opt-in 设置 `forward_user_identity`，可将已登录用户的身份作为请求头转发至后端代理，便于审计与权限控制

> 🔗 Release 链接：[v2.1.233](https://github.com/anthropics/claude-code/releases/tag/v2.1.233)

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 互动 | 重要性 |
|---|------|------|------|--------|
| [#69238](https://github.com/anthropics/claude-code/issues/69238) | [BUG] No response from API error when Advisor is triggered | OPEN | 63 💬 / 96 👍 | ⭐⭐⭐⭐⭐ |
| [#30869](https://github.com/anthropics/claude-code/issues/30869) | [FEATURE] Unarchive Claude Code sessions in desktop app | **CLOSED** | 29 💬 / 57 👍 | ⭐⭐⭐⭐ |
| [#24537](https://github.com/anthropics/claude-code/issues/24537) | [FEATURE] Agent Hierarchy Dashboard | OPEN | 16 💬 / 17 👍 | ⭐⭐⭐⭐ |
| [#11791](https://github.com/anthropics/claude-code/issues/11791) | [DOCS/BUG] Browser automation tools incompatible with web sandbox | OPEN | 11 💬 / 16 👍 | ⭐⭐⭐⭐ |
| [#86619](https://github.com/anthropics/claude-code/issues/86619) | [BUG] Windows Git Bash 静态分析误报致权限弹窗 | OPEN | 9 💬 / 9 👍 | ⭐⭐⭐⭐ |
| [#66117](https://github.com/anthropics/claude-code/issues/66117) | [FEATURE] Disable prompt suggestions in Web/App | OPEN | 9 💬 / 10 👍 | ⭐⭐⭐ |
| [#75863](https://github.com/anthropics/claude-code/issues/75863) | [FEATURE] VSCode 扩展 Background Tasks 面板 | OPEN | 6 💬 / 8 👍 | ⭐⭐⭐ |
| [#84266](https://github.com/anthropics/claude-code/issues/84266) | model_refusal_fallback 在 tmux 多会话编排中误触 | OPEN | 2 💬 | ⭐⭐⭐ |
| [#86473](https://github.com/anthropics/claude-code/issues/86473) | [BUG] Windows ECONNRESET / Connection lost mid-response | OPEN | 2 💬 / 2 👍 | ⭐⭐⭐ |
| [#83062](https://github.com/anthropics/claude-code/issues/83062) | [Billing] 个体计划重置后 $995 自动续费 | OPEN | 1 💬 | ⭐⭐⭐ |

### 重点解读

**[#69238](https://github.com/anthropics/claude-code/issues/69238) - Advisor 触发时 API 无响应**  
macOS 用户在使用 Sonnet 作为基础模型、调用 Advisor（推测为 Opus 4.8）时出现 "No response from API · Retrying in 2m 25s" 错误。社区影响最大，是当日最受关注问题，可能涉及长任务调度或模型路由故障。

**[#30869](https://github.com/anthropics/claude-code/issues/30869) - 桌面端恢复已归档会话**（已关闭）  
被 29 位用户和 57 点赞支持的桌面端增强请求，现已关闭，疑似已合并至近期版本。表明桌面端会话管理能力是高频需求。

**[#11791](https://github.com/anthropics/claude-code/issues/11791) - 浏览器自动化与 Web 沙箱不兼容**  
Playwright/Puppeteer/Selenium 因安全代理不支持 HTTPS CONNECT 隧道而无法在 Web 沙箱中运行。作者建议至少补充官方文档以节省用户排查时间。属于架构层面限制，需 Anthropic 主动澄清。

**[#86619](https://github.com/anthropics/claude-code/issues/86619) - Windows Git Bash 误报**  
自 v2.1.232 引入 auto-mode 后，Windows Git Bash 中只读 `cd-compound` 命令被静态分析误判为需授权，导致无休止的权限弹窗。两位独立用户同日复现，回归性严重。

**多个 sworrl 提交的 Cyber 误报**（[#71992](https://github.com/anthropics/claude-code/issues/71992)、[#71986](https://github.com/anthropics/claude-code/issues/71986)、[#71985](https://github.com/anthropics/claude-code/issues/71985) 等）  
均已关闭。涉及 DJI 无人机固件分析、AES 白盒逆向、AUP 误判等场景，体现安全过滤器在硬件逆向与固件研究场景下存在系统性误判。

---

## 🔧 重要 PR 进展

> 注：过去 24 小时仅 4 条 PR 更新，数量较少。以下为全部内容：

| # | 标题 | 作者 | 状态 |
|---|------|------|------|
| [#86746](https://github.com/anthropics/claude-code/pull/86746) | fix(security-guidance): 保留 Python 探针错误信息 | aayush598 | OPEN |
| [#86626](https://github.com/anthropics/claude-code/pull/86626) | feat: 添加 bash/zsh/fish Shell 补全脚本 | 5hal1n | OPEN |
| [#83890](https://github.com/anthropics/claude-code/pull/83890) | Create pylint.yml | KrypticKode007 | OPEN |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | add the missing source to claude code | tornikeo | OPEN |

### 重点解读

- **[#86746](https://github.com/anthropics/claude-code/pull/86746)**：修复 `sg-python.sh` 中将 Python 探针 stderr 重定向到 `/dev/null` 的问题，未来在所有候选解释器失败时将提供诊断信息，提升可调试性
- **[#86626](https://github.com/anthropics/claude-code/pull/86626)**：为 `claude` CLI 提供跨 Shell 补全脚本（含 macOS stock bash 3.2 兼容），对开发者 CLI 体验提升显著
- **[#83890](https://github.com/anthropics/claude-code/pull/83890)** 与 **[#41611](https://github.com/anthropics/claude-code/pull/41611)**：基础设施和源代码补充类 PR

---

## 📈 功能需求趋势

通过对所有 Issues 标签和内容的提炼，当前社区最关注的功能方向如下：

1. **多代理工作流可视化**（[#24537](https://github.com/anthropics/claude-code/issues/24537)、[#86089](https://github.com/anthropics/claude-code/issues/86089)）  
   Agent Hierarchy Dashboard、Workflow 恢复子代理会话——多代理场景下的可观测性和可恢复性

2. **VSCode / Desktop 端功能对等**（[#75863](https://github.com/anthropics/claude-code/issues/75863)、[#30869](https://github.com/anthropics/claude-code/issues/30869)）  
   桌面端已有能力向 VSCode 扩展移植（Background Tasks）、会话归档/恢复

3. **Memory / 上下文系统可配置性**（[#79217](https://github.com/anthropics/claude-code/issues/79217)）  
   `MEMORY.md` 索引 200 行 / 25KB 硬限制被开发者希望可配

4. **GitLab 集成深化**（v2.1.233 + [#11791](https://github.com/anthropics/claude-code/issues/11791)）  
   MR URL 支持、浏览器自动化沙箱——多平台工程协作能力

5. **Web/App 体验优化**（[#66117](https://github.com/anthropics/claude-code/issues/66117)）  
   控制 Prompt Suggestions、UX 细节掌控权

6. **MCP 生态完善**（[#86807](https://github.com/anthropics/claude-code/issues/86807)）  
   Browser Agent MCP 与 Browserbase 的能力对齐（持久化上下文/登录枚举）

---

## 😣 开发者关注点与痛点

### 1. **稳定性与网络问题**
- macOS Advisor 触发的 API 无响应（[#69238](https://github.com/anthropics/claude-code/issues/69238)）
- Windows ECONNRESET（[#86473](https://github.com/anthropics/claude-code/issues/86473)）
- Windows MSIX 1.30096.1.0 更新失败（[#86555](https://github.com/anthropics/claude-code/issues/86555)）
- macOS Desktop 启动 107s 海滩球（[#76079](https://github.com/anthropics/claude-code/issues/76079)）

### 2. **2.1.232 auto-mode 回归问题**
- Windows Git Bash 静态分析误报（[#86619](https://github.com/anthropics/claude-code/issues/86619)）
- VS Code 长 prompt 折叠失效（[#72707](https://github.com/anthropics/claude-code/issues/72707)）

### 3. **安全过滤器误判**
- tmux 多会话编排触发 cyber 误报（[#84266](https://github.com/anthropics/claude-code/issues/84266)）
- 大量已关闭的 drone/AES 固件相关 false-positive
- 开发者呼吁对硬件逆向、白盒密码学等合法场景"放行"

### 4. **计费 / 配额透明度**
- 同周内 token 计费 17x 波动（[#84607](https://github.com/anthropics/claude-code/issues/84607)）
- $995 自动续费（[#83062](https://github.com/anthropics/claude-code/issues/83062)）

### 5. **长会话体验与数据丢失风险**
- 归档 Cowork 项目后无法恢复（[#85272](https://github.com/anthropics/claude-code/issues/85272)）
- 251+ 文档化指令失败（欧盟消费者求助）（[#83063](https://github.com/anthropics/claude-code/issues/83063)）

---

## 🧭 总结

今日 Claude Code 整体保持稳定迭代：v2.1.233 在 GitLab 集成和网关安全方面有针对性增强，但社区情绪仍被 **API 稳定性** 和 **安全策略边界** 两大议题主导。建议关注 [#69238](https://github.com/anthropics/claude-code/issues/69238) 进展及 v2.1.232 auto-mode 引发的回归问题修复节奏。

---

*报告基于 GitHub 公开数据生成 · 数据时点：2026-08-15*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-08-15**

---

## 📌 今日速览

今日 Codex 仓库最显著的信号是 **Windows 桌面端性能问题的集中爆发** —— 多个高赞 Issue 报告 `26.810.4967.0` / `26.813.12317` 版本引发全系统鼠标卡顿、CPU 占用异常、kernel-pool 持续增长等严重回归。与此同时，**Rust 核心进入 0.148.0 密集 alpha 迭代**（24 小时内连发 5 个 alpha 版本），以及大量围绕 **TUI 启动流程硬化、权限配置分层、Windows 沙箱强化** 的 bot PR 快速合入，显示团队正同步推进桌面端稳定性和底层架构治理。

---

## 🚀 版本发布

**Rust 核心 0.148.0-alpha 系列高频迭代**（24 小时内 5 个 alpha 版本集中发布）：

| 版本 | 时间 |
|------|------|
| `rust-v0.148.0-alpha.18` | 最新 |
| `rust-v0.148.0-alpha.17` | 24h 内 |
| `rust-v0.148.0-alpha.16` | 24h 内 |
| `rust-v0.148.0-alpha.15` | 24h 内 |
| `rust-v0.148.0-alpha.14` | 24h 内 |

高频 alpha 节奏表明 0.148.0 进入功能冻结前的密集合入与回归测试阶段，社区用户应警惕 alpha 版本稳定性，优先关注随后的稳定版发布。

---

## 🔥 社区热点 Issues

> 排序依据：评论数、点赞数、影响面综合权衡

### 1. [#20214](https://github.com/openai/codex/issues/20214) — Windows 11 Pro 频繁冻结/卡顿
- **标签**：bug, windows-os, app, performance
- **热度**：💬 101 评论 ｜ 👍 84
- **核心问题**：在 Ryzen 5 5600 + 32GB RAM 的充足硬件环境下，Codex App 仍频繁冻结/卡顿。这是社区长期跟踪的性能头号问题。
- **社区反应**：已发展为高频复现报告聚合帖，反映该问题在多种 Windows 配置下的普遍性。

### 2. [#29532](https://github.com/openai/codex/issues/29532) — macOS 持久化 SQLite TRACE 日志堆积
- **热度**：💬 47 评论 ｜ 👍 9
- **核心问题**：升级 `rust-v0.142.0` 后 macOS 上 `~/.codex/logs_2.sqlite` 仍持续增长，`#29432` 部分修复但 `#29457` 未根治。
- **意义**：反映日志写入路径中 partial fix 现象，需要回归测试覆盖。

### 3. [#25453](https://github.com/openai/codex/issues/25453) — Windows Desktop 每秒启动 PowerShell
- **热度**：💬 26 评论 ｜ 👍 7
- **核心问题**：Codex Desktop 每秒派生一次 `powershell.exe` 进行进程轮询，导致高 CPU 占用。属于典型的"廉价轮询换稳定"的反模式。

### 4. [#24287](https://github.com/openai/codex/issues/24287) — macOS Codex Desktop 卡在 Thinking 状态
- **热度**：💬 23 评论 ｜ 👍 8
- **核心问题**：UI 永久卡在 Thinking、Stop 按钮失效，重启后 turn 不可见。M1 Max + 64GB 仍触发。

### 5. [#28855](https://github.com/openai/codex/issues/28855) — Windows 26.611.8604.0 间歇性系统输入延迟
- **热度**：💬 18 评论 ｜ 👍 20
- **意义**：该问题在新版本中复发（见 #38554、#38546、#38583），已成为 Windows 用户共识性回归。

### 6. [#33912](https://github.com/openai/codex/issues/33912) — Windows Work Louder/Codex Micro HID 发现阻塞 Electron 主线程
- **热度**：💬 18 评论 ｜ 👍 2
- **核心问题**：USB HID 设备发现同步阻塞导致 App 冻结，反映 Electron 主线程 I/O 治理缺失。

### 7. [#29436](https://github.com/openai/codex/issues/29436) — Windows 内核池持续增长 + 全局卡顿
- **热度**：💬 15 评论 ｜ 👍 7
- **核心问题**：Codex Windows 桌面在约 1 小时内将内存推至 95%，截图/剪贴板严重延迟，关闭其他应用无法回收。

### 8. [#38583](https://github.com/openai/codex/issues/38583) — Windows 11 26.813.12317 全局鼠标延迟 + 闲置 10% CPU
- **热度**：💬 10 评论 ｜ 👍 6
- **意义**：与 #28855、#25453 构成"Windows 桌面端性能退化"集群，指向底层事件循环/计时器泄漏。

### 9. [#38554](https://github.com/openai/codex/issues/38554) — 26.810.4967.0 致整机卡顿，退出 Codex 立即恢复
- **热度**：💬 8 评论 ｜ 👍 3
- **意义**：明确的"可逆因果"报告，是新版本质量告警的关键证据。

### 10. [#31375](https://github.com/openai/codex/issues/31375) — 上下文压缩 85% 概率断连 + 丢失压缩前推理
- **热度**：💬 6 评论
- **意义**：影响 Pro 用户长会话可用性，Transport error 指向 compact 端点稳定性问题。

---

## 🛠️ 重要 PR 进展

> 今日 PR 几乎全部由 `copyberry[bot]` 自动化合入，主题高度聚焦：**TUI 启动体验硬化 + 权限/沙箱分层**

### 1. [#38678](https://github.com/openai/codex/pull/38678) — 保留环境配置所有权
环境附件可继承或自提供配置；线程设置更新时必须刷新继承配置，但不覆盖附件自有权限和能力根。

### 2. [#38673](https://github.com/openai/codex/pull/38673) — 遵守 per-environment 权限配置
为每个 `EnvironmentConfig` 解析 `permission_profile`；`Ready` 配置可覆盖线程权限，`FromThread` 配置不可。

### 3. [#38651](https://github.com/openai/codex/pull/38651) — 权限快照移入协议
将 `PermissionProfileSnapshot` 定义为协议模型并从 `core-api` 重导出，统一权限状态机的数据形状。

### 4. [#38660](https://github.com/openai/codex/pull/38660) — Windows 沙箱强制托管 deny-read 规则
每个执行路径与设置刷新均需保留 deny 规则；不支持的策略 fail-closed，**直接对应当前 Windows 端性能/安全告警**。

### 5. [#38642](https://github.com/openai/codex/pull/38642) — TUI 启动期间保持 composer 可编辑
启动期间显示"provisional composer"，保留文本与光标，**显著缓解冷启动感知延迟**。

### 6. [#38641](https://github.com/openai/codex/pull/38641) — 硬化 TUI 启动输入处理
防止 bootstrap 期间缓冲键意外触发菜单选择/确认；typeahead 仍可正常进入 composer。

### 7. [#38639](https://github.com/openai/codex/pull/38639) — TUI 初始会话 header 先于输入渲染
清空事件队列直至 session header 安装完成，避免视觉跳动。

### 8. [#38643](https://github.com/openai/codex/pull/38643) — 首次登录 onboarding 前延迟启动 composer
干净安装时防止 composer 在 onboarding 接管前出现，避免用户对登录状态产生误判。

### 9. [#38670](https://github.com/openai/codex/pull/38670) — 转发执行器网络策略决策用于审计
为 executor-local proxy 的最终决策新增 `network/policyDecision` 通知并落审计事件。

### 10. [#38675](https://github.com/openai/codex/pull/38675) — 排除 TUI paste 突发中的快捷键修改输入
正确区分普通输入与 Super/Hyper/Meta 修饰键事件，**减少误粘贴风暴导致的终端卡顿**。

### 11. [#38664](https://github.com/openai/codex/pull/38664) — 解析 Code Mode 类型中的本地 JSON Schema 引用
修复文档内 `$ref` 渲染为 `unknown` 的问题，让生成的 TS 类型更准确。

### 12. [#38662](https://github.com/openai/codex/pull/38662) — 编辑器逐字删除泰文组合标记
修复 Backspace 一次删除整个 grapheme cluster 的 i18n 缺陷，对泰语用户至关重要。

---

## 📈 功能需求趋势

从近 24 小时 Issues 与近期讨论归纳：

| 方向 | 代表 Issue / 信号 | 关注度 |
|------|------------------|--------|
| **Windows 桌面端稳定性与性能** | #20214、#25453、#28855、#38583、#38554、#33912 | 🔴 极高 |
| **macOS 性能回归（CPU/RAM/UI 冻结）** | #38468、#38637、#24287、#29532 | 🔴 高 |
| **IDE 扩展与 Git 集成诊断** | #35775（VS Code 扩展触发 PID 4 Section handle 风暴）、#24484（Git safe.directory 诊断） | 🟠 高 |
| **跨工作区任务交接** | #34582（仓库感知的任务移交） | 🟡 中 |
| **会话状态与上下文压缩** | #31375（compact 断连）、#34026（线程卡 Thinking） | 🟡 中 |
| **Bedrock 多档位 reasoning 支持** | #37160（GPT-5.6 Ultra 不可用） | 🟡 中 |
| **CLI 配置项回归** | #31619（commit attribution 被移除）、#38323（compact 404） | 🟢 低但反复 |
| **ChatGPT/Codex 共享 Electron 性能问题** | #38583、#38546（同一底层栈的连带影响） | 🟠 高 |

---

## 💡 开发者关注点

综合高频反馈，开发者的核心痛点集中在三方面：

### 1. **Windows 桌面端"系统级"性能事故（最严峻）**
多份报告呈现出**可逆因果链**：退出 Codex → 卡顿立即消失。涉及的根因候选包括：
- 每秒级 `powershell.exe` 派生（#25453）
- Chrome native host 重试循环占满一核（#38510）
- USB HID 同步发现阻塞 Electron 主线程（#33912）
- Windows kernel-pool / Section handle 持续增长（#29436、#35775）
- Work Louder 外设交互

**对开发者的实际意义**：当前 Windows 用户的生产环境稳定性已显著恶化，建议团队优先排查 Electron 主线程上的同步 I/O 和定时器泄漏路径。

### 2. **TUI 启动体验的"专业感"差距**
社区多次反馈启动期间输入丢失、composer 与 onboarding 冲突、session header 闪烁。今日 6 个相关 PR 集中合入（#38641/38642/38643/38644/38639/38649）显示团队已系统化处理，**预计下个稳定版将明显改善 CLI 首启体验**。

### 3. **权限与沙箱分层治理**
连续 3 个 PR（#38678/38673/38651）共同推进**环境级 vs 线程级权限模型协议化**，配套 #38660 的 Windows 沙箱 deny-规则强化，反映 Codex 正在为多租户/企业场景补齐底层 capability 语义。开发者应关注后续 `PermissionProfileSnapshot` 的 API 兼容性。

### 4. **新版本质量门禁松动的隐忧**
`26.810.4967.0` / `26.813.12317` 同一天内引发 5+ 起独立的"严重退化"报告，叠加 Rust 0.148.0 快速 alpha 节奏，社区对**桌面端灰度/回归测试覆盖度**的信任正在被消耗。

---

*日报基于 GitHub openai/codex 公开数据整理。如需追溯原始讨论，请点击对应 Issue / PR 链接。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-15**

---

## 📌 今日速览

今日 Gemini CLI 社区活跃度持续走高，焦点集中在 **Subagent（子代理）系统的稳定性** 与 **Auto Memory 机制的安全改进** 两大方向。PR #28815 已针对热门 Issue #22323（子代理终止状态误报）提交修复，多个 P1 级 HANG 类问题正在被系统性清理。此外，nightly 版本引入"上下文感知的静默重试与容量错误 TTL"机制，反映出团队对底层容量错误的处理策略正在向更精细化的方向演进。

---

## 🚀 版本发布

### v0.56.0-nightly.20260814.gc0d192452
- **e2e 测试稳定性**：在慢速 CI 机器上稳定 file-system-interactive 测试（[#28793](https://github.com/google-gemini/gemini-cli/pull/28793)）
- **核心修复**：实现上下文感知的静默重试与容量错误的可用性 TTL（[#28761](https://github.com/google-gemini/gemini-cli/pull/28761)）

> 容量错误的退避策略优化值得社区关注，可在容量恢复后更智能地利用窗口期。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 关注点 |
|---|-------|--------|------|--------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent recovery after MAX_TURNS reported as GOAL success | P1 | 12 | **关键 Bug**：`codebase_investigator` 子代理达到最大回合数后却上报 `GOAL` 成功，掩盖了中断事实，会误导上层决策逻辑 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent hangs | P1 | 8 | 用户体验痛点：调用 generalist 子代理后无限挂起（连简单 mkdir 都会卡死），需通过显式禁用子代理绕过 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) Zero-Dependency OS Sandboxing & Post-Execution Intent Routing | P2 | 8 | **架构级提案**：基于 Gemini 3 模型原生 bash 习惯，引入零依赖 OS 沙箱 + 执行后意图路由，让模型既能用 POSIX 工具链又兼顾安全 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) Robust component level evaluations | P1 | 7 | 评估基础设施建设：已有 76 个行为评估测试覆盖 6 个模型，需要升级到组件级评估以提升测试粒度 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST-aware file reads, search, and mapping | P2 | 7 | 性能优化方向：探索 AST 感知的文件读取与搜索，可在单次工具调用中精确读取方法边界，降低 token 噪声 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini does not use skills and sub-agents enough | P2 | 6 | 用户反馈：自定义 skill 和 sub-agent 几乎不会被主动调用，必须显式指令才会使用，影响 agent 编排能力 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Stop Auto Memory from retrying low-signal sessions indefinitely | P2 | 5 | Auto Memory 缺陷：低信号会话会无限重试，导致内存与处理资源浪费 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Add deterministic redaction and reduce Auto Memory logging | P2 | 4 | **安全风险**：Auto Memory 将转录内容发送给后台提取模型时，仅依赖模型自身去识别敏感信息，需要确定性脱敏机制 |
| 9 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell command execution gets stuck with "Waiting input" | P1 | 4 | 反复出现的 Shell 卡死问题：简单命令完成后仍处于"Awaiting user input"状态 |
| 10 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) browser_agent resilience: Automatic session takeover | P3 | 4 | 浏览器子代理改进：当浏览器 profile 被锁定时需要自动接管与恢复，而不是 fail-fast |

---

## 🛠 重要 PR 进展

### 已合并 / 已关闭

| PR | 描述 | 价值 |
|----|------|------|
| [#28815](https://github.com/google-gemini/gemini-cli/pull/28815) Preserve original termination reason during subagent recovery | 修复 #22323：保留子代理在 MAX_TURNS / TIMEOUT 时通过 `complete_task` 恢复的原始终止原因，避免上层误判为 GOAL 成功 | **关键修复**，解决子代理状态"失真"问题 |
| [#28820](https://github.com/google-gemini/gemini-cli/pull/28820) Clarify privacy notice wording | 修复 #26120：隐私提示文案与选项不一致的问题 | 改善用户隐私选择体验 |
| [#28819](https://github.com/google-gemini/gemini-cli/pull/28819) Fix misleading admin error for personal accounts | 修复 #24587：个人账户用户选择企业模型时显示误导性 admin 错误 | 错误信息语义化改进 |
| [#28817](https://github.com/google-gemini/gemini-cli/pull/28817) Retain executing subagent tool calls in hook state | 修复 #22589：首次见到且不需要审批的后台工具调用被过滤掉，导致 hook 状态丢失 | 子代理可观测性增强 |
| [#28816](https://github.com/google-gemini/gemini-cli/pull/28816) Fix silent hang in MessageBus.request when publish fails | 修复 #22588：`MessageBus.request()` 中的 floating promise 在 publish 失败时静默挂起 60 秒 | **解决一类隐性 P1 挂起** |
| [#28818](https://github.com/google-gemini/gemini-cli/pull/28818) Change steering eval test to always pass | 修复 #23313：模型 steering 行为评估从 `USUALLY_PASSES` 升级到 `ALWAYS_PASSES` 策略 | 回归测试基础设施加固 |
| [#28810](https://github.com/google-gemini/gemini-cli/pull/28810) Update /clear command docs to include context reset | 修复 #19239：`/clear` 命令文档补充会清除当前对话上下文的说明 | 用户文档完整性 |
| [#28811](https://github.com/google-gemini/gemini-cli/pull/28811) Migrate process.env to vi.stubEnv in a2a-server tests | 修复 #19826：a2a-server 测试改用 Vitest 环境隔离 API | 测试可维护性 |
| [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) Prevent PTY memory leak by synchronously deleting active entries | 修复 ShellExecutionService 中 PTY 条目与 headless terminal 不被 GC 的内存/FD 泄漏问题 | **系统级资源泄漏修复** |
| [#28603](https://github.com/google-gemini/gemini-cli/pull/28603) Upgrade sandbox Dockerfile to Node 22 | 修复 #28584：Node 20 已于 2026-04-30 EOL，沙箱升级到 Node 22 | 安全合规性升级 |

### 进行中（Open）

| PR | 描述 | 价值 |
|----|------|------|
| [#28812](https://github.com/google-gemini/gemini-cli/pull/28812) Prevent indefinite TUI hang by adding execution timeouts | 修复 #21477：在裸 Linux 终端下 TUI 在 "Initializing..." 无限挂起，为 `getProcessInfo()` 增加执行超时 | **解决一类环境特定的启动挂起** |
| [#28738](https://github.com/google-gemini/gemini-cli/pull/28738) Allow agents to call agents | 修复 #22092：通过 subagent 的 `tools:` frontmatter 允许子代理委派给其他子代理（含自身递归） | **架构突破**：解锁多级 agent 编排能力 |
| [#27588](https://github.com/google-gemini/gemini-cli/pull/27588) Support WSL2 clipboard image paste | 检测 WSL 环境，通过 PowerShell 互操作读取 Windows 剪贴板图片并保存为 PNG | 跨平台体验完善 |
| [#25378](https://github.com/google-gemini/gemini-cli/pull/25378) Fix Windows ripgrep eftype | 修复 #22784：Windows 上 `grep_search` 在架构不匹配/二进制损坏时 spawn EFTYPE 错误 | Windows 用户核心工具可用性 |
| [#28596](https://github.com/google-gemini/gemini-cli/pull/28596) Add --list-all-sessions option | 新增 CLI 选项，跨工作区查看与管理会话 | 长期用户的会话管理痛点 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 中提炼出最受社区关注的演进方向：

1. **Subagent 系统成熟化**（占比最高）
   - 子代理可观测性（`/chat share` 显示子代理轨迹 #22598）
   - 子代理相互调用（#28738 进行中）
   - 终止状态准确性（#22323 已修）
   - 自动调用 skill/subagent 的能力提升（#21968）

2. **评估基础设施升级**
   - 组件级评估体系（#24353）
   - 模型行为回归测试（#23313 已修）
   - 子代理可重放/可分享的轨迹（#22598）

3. **底层资源与稳定性**
   - PTY 文件描述符泄漏（#20916, #27154 已合并）
   - Shell 执行挂起（#25166, #28816）
   - TUI 启动挂起（#28812）
   - 终端 resize 性能（#21924）

4. **Auto Memory 体系完善**
   - 防止低信号会话无限重试（#26522）
   - 确定性脱敏与日志收敛（#26525）
   - 无效 inbox 补丁的隔离（#26523）
   - 综合质量追踪（#26516）

5. **跨平台与终端体验**
   - Windows ripgrep 兼容（#25378）
   - WSL2 剪贴板图片（#27588）
   - Wayland 下浏览器子代理（#21983）
   - 终端 buffer 损坏修复（#24935）

6. **安全与权限模型**
   - 零依赖 OS 沙箱（#19873）
   - 破坏性命令抑制（#22672）
   - 子代理默认权限收紧（#22093）

7. **AST 感知工具链**
   - AST 感知的文件读取/搜索（#22745）
   - 用 AST 工具映射代码库（#22746）

---

## 💬 开发者关注点

社区反馈高频出现的痛点与需求：

### 🔴 稳定性痛点
- **"挂起"是头号公敌**：generalist agent 挂起、TUI 初始化挂起、Shell 完成仍等待输入、MessageBus 60 秒静默挂起——多个不同入口的 hang 问题正在被系统化识别与修复，团队似乎在收敛所有"无超时"的代码路径。
- **资源泄漏**：PTY master FD 不释放（macOS `kern.tty.ptmx_max = 511` 是硬上限）会导致长会话环境耗尽 PTY。
- **状态失真**：子代理因 MAX_TURNS 终止却上报 GOAL，会让上层决策产生连锁错误。

### 🔒 安全顾虑
- **Auto Memory 的秘密泄露风险**：依赖模型去识别敏感信息是不充分的，需要在模型外做确定性脱敏（#26525）。
- **破坏性命令**：模型在某些情况下会使用 `git reset --force` 等不可逆命令，需要内置引导到更安全的替代路径（#22672）。
- **子代理默认过松**：v0.33.0 后子代理在用户未明确启用时也会被触发，权限边界需要更明确（#22093）。

### 🎯 编排与可观测性
- **subagent/skill 不被主动调用**：自定义的 skill 几乎不会被模型自动识别，需要更精准的描述匹配或调用引导。
- **bug 报告不包含子代理上下文**：导致调试时无法重建完整链路（#21763）。
- **子代理轨迹难以分享**：需要 `/chat share` 支持子代理维度的可重放记录。

### 🛠 跨平台体验
- **Windows 是短板**：ripgrep EFTYPE、外部编辑器退出后 terminal buffer 损坏等。
- **WSL2 / Wayland**：原生支持还在补齐。

### 📊 评估与质量
- **缺少组件级评估**：现有 76 个行为评估对内部组件粒度不够，影响问题定位效率。
- **回归保护**：模型 steering 等关键路径需要 ALWAYS_PASSES 级别的强约束。

---

> **编辑视角**：今日最值得跟进的两个信号——其一，#28738（Allow agents to call agents）若合并，将把 Gemini CLI 的 agent 编排能力从"单层委派"推到"递归图"，是里程碑级的架构变更；其二，Auto Memory 一系列 issue（#26516/#26522/#26523/#26525）正在密集修复，团队意识到该机制在隐私与资源使用上的设计缺陷并系统性修补，建议使用 Auto Memory 的用户在升级到包含这些修复的版本前审慎评估当前数据流。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**📅 2026-08-15 · 数据周期：过去 24 小时**

---

## 1. 今日速览

今日社区焦点高度集中在 **MCP OAuth 鉴权回归** 与 **Claude 模型可用性**两大问题——1.0.79/1.0.80 版本中 RFC 8414 §3.3 校验逻辑导致 Atlassian / GitLab MCP 服务器连接失败，多个企业用户反馈 Claude 全系模型在 CLI 中消失。与此同时，新版 v1.0.81-0 已释出，主要为模型配置更新。

---

## 2. 版本发布

| 版本 | 日期 | 主要变更 |
|------|------|----------|
| **v1.0.81-0** | 2026-08-15 | Update model configurations（Improved） |
| **v1.0.80-1** | 2026-08-15 | Fixes and changes（补丁版） |
| **v1.0.80** | 2026-08-14 | Update model configurations |

⚠️ 鉴于 1.0.79/1.0.80 引发多项 MCP 鉴权与可用性回归，升级前建议先关注 #4480、#4490 等已确认问题的修复状态。

---

## 3. 社区热点 Issues

### 🔥 高优先级（影响范围广）

**#4345 — Reasoning effort 'medium' 不被 claude-haiku-4.5 支持**  
CLI 在子代理执行时反复报错：`Reasoning effort 'medium' is not supported for model 'claude-haiku-4.5'`，疑似服务端 feature flag 组合冲突。💬 6 评论 / 👍 4  
🔗 github/copilot-cli#4345

**#4390 — Copilot Business 已启用的模型在 CLI 目录中缺失**  
组织管理员显式启用的 Claude Sonnet 5 / Opus 5 / Kimi K3 在 CLI 模型目录中不可见，并提示 `This model is disabled by your organization`。💬 6 评论 / 👍 4  
🔗 github/copilot-cli#4390

**#4480 — ✅ CLOSED — Atlassian MCP OAuth 在 1.0.79 后回归**  
连接 `https://mcp.atlassian.com/v1/mcp` 时抛 `Incompatible authorization server (RFC 8414 §3.3)`，1.0.71 之前正常。该 issue 已被关闭，说明官方已修复。💬 4 评论 / 👍 6（高认同）  
🔗 github/copilot-cli#4480

**#4422 — 个人 Enterprise 账户下全部 Claude 模型被禁用**  
即便 GitHub Copilot 设置中显示已启用，CLI 中选择 Sonnet 5 / 4.8 等仍报错。回滚 CLI 版本亦无法解决。💬 3 评论 / 👍 3  
🔗 github/copilot-cli#4422

**#4439 — GitLab MCP OAuth 元数据被 RFC 8414 issuer mismatch 拒绝**  
自托管 GitLab MCP 服务启用 OAuth 2.0 Dynamic Client Registration 后，1.0.79 拒绝连接。💬 3 评论 / 👍 2  
🔗 github/copilot-cli#4439

### 🛠 中优先级（影响稳定性与可用性）

**#4306 — autopilot 模式下子任务冻结无响应**  
在 `/fleet use speckit-automate implement skill` 这类循环子代理执行中，子代理会停止响应。💬 3 评论 / 👍 2  
🔗 github/copilot-cli#4306

**#4499 — v1.0.79 autopilot 致命 OOM（"Committing semi space failed"）**  
V8 堆仅使用 ~607 MB / 4.30 GB 时即崩溃，属主机 RAM 提交失败而非堆上限，定位较复杂。  
🔗 github/copilot-cli#4499

**#4500 — BYOK autopilot nudge 轮次破坏 prompt caching**  
`--autopilot` 完成提示轮次重建 `input` 数组而非按字节重发，导致 prompt cache 失效、成本上升。  
🔗 github/copilot-cli#4500

**#4494 — 新启用模型需手动清理本地缓存才能使用**  
本地模型目录不自动刷新，Sonnet 5 在 CLI 与 VS Code 中均不可见直至手动清理 state/cache/login。  
🔗 github/copilot-cli#4494

**#2934 — ✅ CLOSED — 支持 protobuf OTLP 导出（`http/protobuf`）**  
长期跟踪的 OpenTelemetry 导出格式请求被关闭，意味着该功能可能已实现或合入。💬 2 评论 / 👍 6  
🔗 github/copilot-cli#2934

---

## 4. 重要 PR 进展

> 过去 24 小时仅 3 条 PR 活动，且均为仓库维护性工作。

**#4497 — 处理 fork PR 在 invalid-label writer 中的关联** *(OPEN)*  
当 GitHub 未填充 workflow run 的 PR 关联时，writer 现在通过可信 workflow-run 元数据搜索并要求恰好一个 open PR。  
🔗 github/copilot-cli#4497

**#4449 — 将 PR 自动化从 `pull_request_target` 迁移** *(CLOSED ✅)*  
将 invalid-label 自动化从高权限 `pull_request_target` 事件迁出，改为 issue-scoped 写令牌 + 无权限 `pull_request` 信号，安全性提升。  
🔗 github/copilot-cli#4449

**#4496 — PR workflow 迁移验证 canary** *(CLOSED — invalid)*  
仅含文档的临时 PR，用于验证 fork-originated PR 的工作流迁移行为，已关闭。  
🔗 github/copilot-cli#4496

> ℹ️ PR 数量较少说明近期工程团队精力集中在 issue triage 与模型目录维护，而非新功能开发。

---

## 5. 功能需求趋势

| 方向 | 代表性 Issue | 社区热度 |
|------|--------------|----------|
| **新模型支持** | #4495（GPT-5.6 reasoning.mode）、#4390（Claude Sonnet 5 / Opus 5 / Kimi K3） | ⭐⭐⭐⭐⭐ |
| **MCP 生态完善** | #4480 / #4439 / #4478（OAuth 鉴权、命名冲突）、#4006（分页）、#4346（CI 中 403） | ⭐⭐⭐⭐⭐ |
| **会话/插件管理** | #4477（停止丢会话）、#4488（插件并发更新）、#4487（插件依赖）、#4489（恢复会话 agent） | ⭐⭐⭐⭐ |
| **可观测性（OTel）** | #2934（protobuf 导出） | ⭐⭐⭐⭐ |
| **权限与安全策略** | #4482（allowed_directories）、#4481（Enterprise 策略冲突）、#4479（CAPI 误判） | ⭐⭐⭐ |
| **企业模型可用性** | #4422 / #4390 / #4494 | ⭐⭐⭐⭐⭐ |

---

## 6. 开发者关注点（高频痛点）

1. **🔴 MCP OAuth 鉴权回归（1.0.79+）**  
   Atlassian / GitLab 等主流 MCP 服务器在 1.0.79 之后因 RFC 8414 §3.3 严格校验集体失效。#4480 已闭、#4490 报告 1.0.80 仍受影响，升级需谨慎。

2. **🔴 Enterprise 模型在 CLI 中不可见**  
   即便组织后台启用 Sonnet 5 / Opus 5，CLI 模型目录与本地缓存不刷新，多个企业用户被阻塞。#4390、#4422、#4494 形成稳定痛点三角。

3. **🟠 autopilot 模式稳定性**  
   长会话出现子代理冻结（#4306）与 V8 OOM 崩溃（#4499），prompt caching 也被破坏（#4500），影响自动化场景。

4. **🟡 会话管理 UX 缺陷**  
   停止动作丢失会话（#4477）、`/restart` 在 `-w` 会话中失败（#4493）、恢复旧会话不自动选择原 agent（#4489），构成体验痛点。

5. **🟢 正面信号**  
   - protobuf OTLP 导出（#2934）已关闭——可观测性能力扩展。  
   - PR 自动化安全迁移（#4449）落地，仓库供应链安全强化。  
   - v1.0.81-0 持续推进模型配置更新。

---

📌 **一句话总结**：今日 GitHub Copilot CLI 社区处于"模型目录与 MCP 鉴权双线修复期"——1.0.81 渐进补丁值得期待，但企业用户在升级 1.0.79/1.0.80 前应先确认 MCP 与 Claude 模型相关问题的修复状态。

*报告基于 github.com/github/copilot-cli 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-15**  
**统计口径：过去 24 小时内更新的 GitHub 数据**

> **数据完整性说明：** 本次仅提供 4 条更新 Issue 和 0 条更新 PR，因此无法按要求各筛选 10 条。以下完整覆盖全部可用 Issue，不虚构缺失数据。

## 今日速览

- **持久化记忆成为最明确的社区主线。** [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 与 [Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) 同时关注跨会话上下文、记忆层和文档缺失，两项合计获得 **42 条评论**。
- **远程控制与多设备会话交接受到关注。** [Issue #2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) 提出 Web、移动端与桌面端之间无缝继续或控制会话，目前获得 6 条评论和 1 个赞。
- **过去 24 小时无新 Release、无更新 PR。** [Issue #1136](https://github.com/MoonshotAI/kimi-cli/issues/1136) 已关闭，但提供的数据未包含对应修复 PR 或关闭原因。

## 社区热点 Issues

1. **[#1283：Memory System - Persistent context across sessions](https://github.com/MoonshotAI/kimi-cli/issues/1283)**  
   提出覆盖自动记忆、AI 管理的项目知识以及用户自定义说明的完整记忆系统。重要性在于它直接决定 Kimi Code CLI 能否长期积累项目上下文、减少重复说明；目前为开放状态，获得 **39 条评论**，是本批 Issue 中讨论度最高的一项。

2. **[#1478：优化记忆层并完善相关文档](https://github.com/MoonshotAI/kimi-cli/issues/1478)**  
   开发者反馈大型项目中持续维护上下文的困难，并质疑现有参考文档为何缺少记忆功能说明，仅能看到 `agent.md`。该 Issue 与 #1283 相互印证，表明需求不仅来自单个用户，而可能是一类尚未被产品化的核心痛点；目前为开放状态，获得 **3 条评论**。

3. **[#2269：Remote Control / Multi-Device Session Handoff](https://github.com/MoonshotAI/kimi-cli/issues/2269)**  
   希望在一台设备启动 Kimi CLI 会话后，可从其他电脑、Web 或移动端继续操作或远程控制。它代表产品形态从本地 CLI 向跨设备 Agent 工作流扩展，目前为开放状态，获得 **6 条评论和 1 个赞**。

4. **[#1136：增强 Shell 对 PowerShell 环境的感知](https://github.com/MoonshotAI/kimi-cli/issues/1136)**  
   聚焦 Windows 与 PowerShell 环境下，Shell Tool 在首轮命令生成过程中可能产生不准确结果的问题，强调版本与运行上下文感知。该 Issue 当前已关闭，但只有 **0 条评论**；由于未提供关联 PR，暂无法确认具体修复方式和关闭原因。

## 重要 PR 进展

- [Pull Requests 列表](https://github.com/MoonshotAI/kimi-cli/pulls)：过去 24 小时内无更新 PR，因此没有可筛选的 10 条重要进展。
- 当日没有可用于关联 Issue 进展的合并、关闭或评审活动。

## 功能需求趋势

- **持久化记忆与项目上下文：最高优先级。** [Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 和 [Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) 占据 4 条数据中的 2 条，且合计 42 条评论，明显是当前最强需求方向。
- **跨设备远程会话：工作流扩展方向。** [Issue #2269](https://github.com/MoonshotAI/kimi-cli/issues/2269) 表明用户希望会话不局限于单一终端，并关注 Web、移动端和多设备交接。
- **记忆能力的文档可发现性不足。** [Issue #1478](https://github.com/MoonshotAI/kimi-cli/issues/1478) 反映用户难以从官方文档了解记忆机制和配置方式；即使功能后续存在，也可能因文档入口不清晰而影响采用。
- **Windows Shell 稳定性与上下文感知。** [Issue #1136](https://github.com/MoonshotAI/kimi-cli/issues/1136) 表明 Windows、PowerShell 及命令执行环境识别仍影响 Agent 首轮操作质量。
- **本次样本中未观察到 IDE 集成或新模型支持需求。** 由于仅有 4 条 Issue，不能据此判断这些方向在完整社区中的实际优先级。

## 开发者关注点

- **大型项目上下文持续性不足：** 重复提供项目约定、开发习惯和历史决策成本高，是记忆需求背后的主要痛点。
- **记忆机制缺乏透明度：** 开发者不仅要求“能记住”，还希望了解记忆的保存位置、作用范围、管理方式和文档入口。
- **跨设备开发体验不完整：** 本地 CLI 会话难以在 Web、移动端或其他电脑继续，限制了长时间或移动工作流。
- **Windows 环境可靠性：** PowerShell 版本和运行环境信息不足可能降低命令生成与首次执行成功率。
- **维护状态需要更清晰：** 当前窗口没有 Release 或 PR 更新；如需确认 #1136 是否已通过代码修复落地，应继续追踪其关联提交和变更说明。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-15

## 📌 今日速览

今日社区最重大的事件是 **48 位 ID 时间戳环绕（wraparound）** 引发的大规模会话失活问题（[#42608](https://github.com/anomalyco/opencode/issues/42608)），所有 8 月 14 日 12:39:55 UTC 之前创建的会话陷入循环且无法响应新提示。同时，Desktop v1.18.1 新布局隐藏 Plan/Build 切换控件的 UI 问题（[#36997](https://github.com/anomalyco/opencode/issues/36997)）持续发酵，收到 6 个 👍。PR 方面则集中在 V2 协议重构、TUI 透明背景修复以及本地 LAN 提供者自动发现等核心改进。

---

## 🚀 版本发布

过去 24 小时内无新 Release。

---

## 🔥 社区热点 Issues

### 1. [48-bit ID 时间戳环绕导致全部历史会话停滞](https://github.com/anomalyco/opencode/issues/42608) — 5 评论 · 3 👍
**状态**: 已关闭 · **严重等级**: 🔴 Critical
2026-08-14 12:39:55 UTC 时刻 `packages/opencode/src/id/id.ts` 中 48 位毫秒时间戳发生环绕，导致所有此前创建的会话在 `SessionPrompt.runLoop` 的第 0 步即退出，新提示被静默丢弃。这是同期 [#42605](https://github.com/anomalyco/opencode/issues/42605)、[#42611](https://github.com/anomalyco/opencode/issues/42611) 等"agent stops responding"问题的统一根因。

### 2. [Desktop v1.18.1 新布局隐藏 Plan/Build 切换 UI](https://github.com/anomalyco/opencode/issues/36997) — 12 评论 · 6 👍
**状态**: Open
开启 `newLayoutDesigns: true` 后，agent 切换指示器（Plan/Build 模式）在 UI 中不可见，Tab 键快捷键也失效，用户无法辨别当前激活 agent。

### 3. [Ollama Cloud AUTH 登录支持](https://github.com/anomalyco/opencode/issues/4581) — 14 评论
**状态**: 已关闭 · **标签**: good first issue, help-wanted
当前用户必须通过本地或服务器 Ollama 实例中转使用 Ollama Cloud，社区强烈要求官方原生 AUTH 登录流。14 条评论表明此功能已被广泛呼吁。

### 4. [GitHub Copilot provider 模型列表为空](https://github.com/anomalyco/opencode/issues/42083) — 8 评论 · 2 👍
**状态**: Open
v1.18.15 中 `github-copilot` 认证成功但 `opencode models github-copilot` 返回 "Provider not found"，TUI `/models` 不显示 Copilot 模型，所有模型均标记 `model_picker_enabled: false`。

### 5. [会话消息 ID 不可按时间排序导致 run loop 无法退出](https://github.com/anomalyco/opencode/issues/38791) — 6 评论
**状态**: Open
`SessionPrompt.runLoop` 以纯字符串比较 message id 完成判断，仅当 id 内嵌时间戳时才正确；第三方导入会话因 id 不按时间排序而持续循环直到上游返回 400。与 [#42608](https://github.com/anomalyco/opencode/issues/42608) 共同揭示 ID 系统的设计缺陷。

### 6. [OAUTH_CALLBACK_HOST 应可配置](https://github.com/anomalyco/opencode/issues/33966) — 6 评论
**状态**: Open
PR [#30022](https://github.com/anomalyco/opencode/pull/30022) 将 OAuth server 绑定到 127.0.0.1 后，远程主机/容器用户无法完成认证回调，需提供环境变量配置。

### 7. [Context cache 在模式切换/压缩时失效，性能严重下降](https://github.com/anomalyco/opencode/issues/37489) — 5 评论 · 1 👍
**状态**: Open
本地 LLM（vLLM、Ollama）用户在 Plan/Build 切换或上下文压缩时频繁遭遇延迟峰值，呼吁实现按模式的 context 缓存隔离。

### 8. [gpt-5.6-luna 经 OpenCode Go 中继返回 403 区域限制](https://github.com/anomalyco/opencode/issues/41518) — 6 评论
**状态**: Open
通过 opencode.ai "OpenCode Go" 路由访问 `gpt-5.6-luna` 模型时持续返回 403 "This model is not available in your region"，但本地/直连有效。

### 9. [自动发现 OpenAI 兼容提供者模型](https://github.com/anomalyco/opencode/issues/27553) — 3 评论 · 4 👍
**状态**: Open · **标签**: feature
呼吁 OpenCode 自动调用 `/v1/models` 端点获取 llama-swap、Ollama、LM Studio 等的可用模型，免去在 `opencode.json` 中手动列举。👍 数与评论数比例最高，反映强烈需求。

### 10. [DeepSeek V4 Pro reasoning_content 多轮工具调用失败](https://github.com/anomalyco/opencode/issues/25000) — 7 评论
**状态**: 已关闭
经 `opencode.ai/zen/go/v1` 调用 DeepSeek V4 Pro 时，多轮工具调用间歇性抛出 "The `reasoning_content` in the thinking mode must be passed back to the API" 错误。

---

## 🛠 重要 PR 进展

### 1. [fix(plugin): 从协议 schema 推导 Promise 适配器](https://github.com/anomalyco/opencode/pull/42669) — kitlangton
将逐字段手写的 Promise plugin API 翻译替换为由规范 V2 `HttpApi` 契约派生的 schema-driven 适配器，Promise 插件可直接获得协议定义的请求/响应转换（含 `session.create.title`、branded ID、DateTime 毫秒、可空字段等）。

### 2. [fix(tui): 忽略落在新会话控件上的意外拖放释放](https://github.com/anomalyco/opencode/pull/42673) — kitlangton
修复在可选中文本中按下并拖动到 tab 条上方释放时仍会误触发新建会话的问题。

### 3. [fix(core): 统一补丁路径解析](https://github.com/anomalyco/opencode/pull/42667) — kitlangton
将 V2 patch 工具的路径与权限资源统一到写/编辑工具已使用的规范 `LocationMutation` 服务，消除 project-relative 路径解析差异。

### 4. [fix(tui): 保留 tab 条透明背景](https://github.com/anomalyco/opencode/pull/42646) — kitlangton
修复新 session tab 下方阴影以 14%/28% 不透明度覆盖透明主题背景的问题，在不透明主题下保持原有阴影。

### 5. [fix(app): 使用 directory-scoped VCS 状态派生新会话 Git 上下文](https://github.com/anomalyco/opencode/pull/42666) — opencode-agent[bot]
从目录范围的 VCS 存储派生新会话的 Git 状态（与 TUI 数据模型一致），为无当前分支但全局 project 元数据陈旧的仓库保留回退路径，并新增回归覆盖。

### 6. [feat(core): 持久化 Web Search 提供者选择](https://github.com/anomalyco/opencode/pull/42663) — thdxr
将 web search 提供者同意持久化到首个文件配置文档而非 KV 状态，并提供固定提供方集合。

### 7. [fix(mcp): MCP server 配置缺失 type 时显式报错](https://github.com/anomalyco/opencode/pull/42662) — shreeyachand
针对 Claude Code 风格 MCP 配置缺少 `type`/`enabled` 字段时静默失败的情况，改为 fail-loud 并提供清晰错误信息。Closes [#41229](https://github.com/anomalyco/opencode/issues/41229)。

### 8. [feat(opencode): 本地 LAN 提供者发现 + 模型自动发现](https://github.com/anomalyco/opencode/pull/27554) — androidand
在 `/connect` 中新增 `Local (LAN)` 发现（结合 mDNS 与主动扫描），并复用 `/v1/models` 自动列举 OpenAI 兼容服务器模型。Closes [#6231](https://github.com/anomalyco/opencode/issues/6231)、[#27553](https://github.com/anomalyco/opencode/issues/27553)。

### 9. [refactor(protocol): 将 worktree 路由移出 experimental 命名空间](https://github.com/anomalyco/opencode/pull/42656) — jlongster
把 `worktree.list/create/...` 从 `/api/experimental/project/:projectID/worktree` 提升为顶层资源 `/api/worktree/:projectID`，标志着 worktree API 正式稳定。

### 10. [docs: 更新 CONTRIBUTING 指南](https://github.com/anomalyco/opencode/pull/42672) — kitlangton
将 `CONTRIBUTING.md` 中残留的 V1 开发指南替换为当前 V2 工作流与包结构映射，关闭 [#40834](https://github.com/anomalyco/opencode/issues/40834)。

> 另值得关注：[#42638](https://github.com/anomalyco/opencode/pull/42638)（最小化 system prompt · rekram1-node）、[#42628](https://github.com/anomalyco/opencode/pull/42628)（硬化 simulation wire 契约）、[#36796](https://github.com/anomalyco/opencode/pull/36796)（修复 shell 输出捕获 fiber 被回收）。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **本地/局域网 LLM 集成** | [#27553](https://github.com/anomalyco/opencode/issues/27553)、[#27554](https://github.com/anomalyco/opencode/pull/27554) | ⭐⭐⭐ 高 |
| **OAuth 与认证灵活性** | [#4581](https://github.com/anomalyco/opencode/issues/4581)（Ollama Cloud）、[#33966](https://github.com/anomalyco/opencode/issues/33966)（回调主机）、[#42083](https://github.com/anomalyco/opencode/issues/42083)（Copilot） | �⭐⭐ 高 |
| **会话稳定性 / ID 系统** | [#42608](https://github.com/anomalyco/opencode/issues/42608)、[#38791](https://github.com/anomalyco/opencode/issues/38791)、[#42605](https://github.com/anomalyco/opencode/issues/42605) | ⭐⭐⭐ 极高 |
| **性能优化（缓存 / TUI）** | [#37489](https://github.com/anomalyco/opencode/issues/37489)（context cache）、[#42657](https://github.com/anomalyco/opencode/issues/42657)（subagent TUI 97% CPU） | ⭐⭐ 中 |
| **新模型/中继支持** | [#41518](https://github.com/anomalyco/opencode/issues/41518)（gpt-5.6-luna）、[#25000](https://github.com/anomalyco/opencode/issues/25000)（DeepSeek V4 Pro）、[#42385](https://github.com/anomalyco/opencode/issues/42385)（DeepSeek V4 Flash Free） | ⭐⭐ 中 |
| **权限与审批 UX** | [#24615](https://github.com/anomalyco/opencode/issues/24615)（plan agent bypass）、[#41909](https://github.com/anomalyco/opencode/issues/41909)（`/approve` slash command） | ⭐⭐ 中 |
| **MCP 兼容与容错** | [#42662](https://github.com/anomalyco/opencode/pull/42662)、[#41229](https://github.com/anomalyco/opencode/issues/41229) | ⭐ 中 |
| **Web Search / 工具生态** | [#42663](https://github.com/anomalyco/opencode/pull/42663)（持久化）、[#40568](https://github.com/anomalyco/opencode/issues/40568)（Go 模型 websearch） | ⭐ 中 |

---

## ⚠️ 开发者关注点与高频痛点

1. **会话静默失活（最严重）** — 同一根因（48-bit 时间戳环绕 + id 排序假设）触发了至少 5 个独立报告（[#42608](https://github.com/anomalyco/opencode/issues/42608)、[#42605](https://github.com/anomalyco/opencode/issues/42605)、[#42611](https://github.com/anomalyco/opencode/issues/42611)、[#42694](https://github.com/anomalyco/opencode/issues/42594)、[#38791](https://github.com/anomalyco/opencode/issues/38791)）。**强烈建议运维方在升级前先做 ID 时间戳边界检查**，或回退到 8 月 14 日 12:39 UTC 之前的快照。

2. **Desktop UI 回归** — v1.18.1 引入 `newLayoutDesigns: true` 后 Plan/Build 切换器不可见（[#36997](https://github.com/anomalyco/opencode/issues/36997)，6 👍），叠加 TUI 子代理会话 97% 渲染线程占用（[#42657](https://github.com/anomalyco/opencode/issues/42657)），TUI 性能与可访问性问题突出。

3. **Bash 工具子进程稳定性** — stdout 高频小写入（如 `pytest tests/`）触发 SIGKILL（[#42626](https://github.com/anomalyco/opencode/issues/42626)）；shell 输出捕获 fiber 被提前回收（[#36796](https://github.com/anomalyco/opencode/pull/36796)），WSL 镜像网络模式下 sidecar 失败（[#37718](https://github.com/anomalyco/opencode/issues/37718)）。

4. **Provider 接入配置繁琐** — Copilot、Go 中继、Ollama Cloud 等多个 provider 出现认证可用但模型不可见（[#42083](https://github.com/anomalyco/opencode/issues/42083)）、模型区域限制（[#41518](https://github.com/anomalyco/opencode/issues/41518)）、web

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-15

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi)（基于 pi-mono 仓库过去 24 小时数据）

---

## 📌 今日速览

今日 Pi 发布 **v0.84.2** 版本，带来全屏 transcript 搜索与可配置默认工具两项重要更新。社区方面，Windows 平台使用体验仍是讨论最热烈的议题（#7547），TUI 流式渲染时的 CPU 占用问题（#6665）已确认进入修复阶段，而围绕多个 provider（Anthropic、OpenAI、Kimi、Baseten、SiliconFlow）的兼容性修复 PR 集中落地，整体生态活跃度依旧较高。

---

## 🚀 版本发布

### [v0.84.2](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)

**新增特性：**

- **Fullscreen transcript search** — 在全屏模式下支持搜索与跳转匹配项，详见 [TUI Fullscreen Viewport 键位文档](https://github.com/earendil-works/pi/blob/v0.84.2/packages/coding-agent/docs/keybindings.md#tui-fullscreen-viewport)。
- **Configurable default tools** — 支持在启动时自定义默认工具集。

---

## 🔥 社区热点 Issues

1. **[#7547 [Windows] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)** — 🟢 OPEN | 💬 27
   由维护者主动发起的 Windows 平台调研帖，社区正在收集 WSL、原生 Windows、Git Bash 等多种环境下的使用反馈与痛点，**将直接影响后续 Windows 支持的优先级与文档策略**，是观察 Pi 跨平台战略的重要窗口。

2. **[#6187 Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)** — 🔴 CLOSED | 💬 26
   WSL 环境下 GitHub Copilot 设备授权完成后 Pi 客户端无法检测并挂起的长期痛点已关闭，**WSL 用户认证链路终于贯通**。

3. **[#5223 Anthropic provider modifies thinking blocks in latest assistant message, causing 400 with Opus 4.8](https://github.com/earendil-works/pi/issues/5223)** — 🔴 CLOSED | 💬 17 | 👍 6
   影响 Claude Opus 4.8（adaptive thinking, high reasoning）多轮对话的 400 错误，**是少数高赞的技术深度议题之一**，表明社区对 reasoning 模型的多轮稳定性高度关注。

4. **[#6665 TUI pins a full core while streaming: uncached Intl.Segmenter + per-chunk Markdown rebuild](https://github.com/earendil-works/pi/issues/6665)** — 🟡 OPEN · inprogress | 💬 12 | 👍 3
   长会话流式渲染时单核 100% 占用的性能根因已被定位至 `Intl.Segmenter` 未缓存 + Markdown 逐块重建，**修复正在进行中**，对使用 Pi 进行长时间编程会话的开发者尤为重要。

5. **[#5023 bug: terminal scrolls to beginning without reason](https://github.com/earendil-works/pi/issues/5023)** — 🔴 CLOSED | 💬 12
   用户报告的"终端突然跳到开头再快速滚到底部"问题已关闭，长会话 TUI 体验进一步稳定。

6. **[#7850 GitHub Copilot login fails with 429 for organizations with many models](https://github.com/earendil-works/pi/issues/7850)** — 🔴 CLOSED | 💬 9 | 👍 7
   企业 GitHub 组织因模型数量过多触发 429 的登录失败问题被标为 `no-action`，**社区对企业级 Copilot 接入路径的诉求已经形成**，未来或需官方方案。

7. **[#8096 Z.AI Coding Plan defaults reference a removed model](https://github.com/earendil-works/pi/issues/8096)** — 🔴 CLOSED | 💬 5
   `defaultModelPerProvider` 仍指向已被 models.dev 移除的 `glm-5.1`，反映出**模型目录与 provider 默认值的同步机制需要更稳健的兜底策略**。

8. **[#8092 Extension loader fails to resolve declared dependencies of extensions installed with pnpm](https://github.com/earendil-works/pi/issues/8092)** — 🔴 CLOSED | 💬 5
   jiti + pnpm 隔离布局下扩展依赖解析失败，**有对应 PR #8112 已闭环**，对使用 pnpm 安装扩展的用户是关键修复。

9. **[#7787 Bash PI_* guideline triggers unnecessary permission prompts during unrelated tasks](https://github.com/earendil-works/pi/issues/7787)** — 🟢 OPEN | 💬 3
   bash 工具默认会触发模型去 `env` 检查 `PI_*` 环境变量，导致权限提示噪音，**由 PR #8148 闭环**，展示出"问题-修复"快速响应的闭环节奏。

10. **[#8047 Pi Server tests fail to bind Unix sockets on Windows](https://github.com/earendil-works/pi/issues/8047)** — 🟢 OPEN | 💬 3
    Windows 11 下 Pi Server 测试套件 31 个 Unix socket 测试失败，是**阻塞 Windows 全功能支持的测试基础设施问题**。

---

## 🛠️ 重要 PR 进展

1. **[#8149 fix(ai): omit invalid OpenAI session header](https://github.com/earendil-works/pi/pull/8149)** — 🔴 CLOSED
   修复 OpenAI Responses 请求中 `session_id` HTTP 头导致 Envoy 等 HTTP/1 代理返回 `http1.unexpected_underscore` 的问题，**OpenAI Codex 网关兼容性进一步加固**。

2. **[#8148 fix(coding-agent): scope the bash PI_* guideline to session questions](https://github.com/earendil-works/pi/pull/8148)** — 🔴 CLOSED
   将 `PI_*` 环境变量检查的提示收敛到会话相关问题，**减少无关任务的权限噪音**（闭环 #7787）。

3. **[#8146 fix(ai): cap Baseten DeepSeek V4 Flash output at 384k tokens](https://github.com/earendil-works/pi/pull/8146)** — 🔴 CLOSED
   将 Baseten 的 DeepSeek V4 Flash 输出上限由不真实的 1M 修正为 384k，**避免请求被服务端拒绝**（闭环 #8147）。

4. **[#8143 perf(tui): window fullscreen transcripts](https://github.com/earendil-works/pi/pull/8143)** — 🔴 CLOSED
   全屏会话保留完整人类消息历史（含压缩前内容），同时让模型上下文保持压缩；按视口精确测量并渲染相交块，**显著提升全屏模式的可用性与性能**。

5. **[#8139 feat(ai): add ChatGPT OAuth image generation](https://github.com/earendil-works/pi/pull/8139)** — 🔴 CLOSED
   在 `@earendil-works/pi-ai` 中加入原生 ChatGPT 图像生成传输，复用现有 OpenAI Codex OAuth 与 Responses 基础设施，**Pi 正式具备图像生成能力**。

6. **[#8124 feat(ai): route xAI models through Responses and default to Grok 4.6](https://github.com/earendil-works/pi/pull/8124)** — 🟢 OPEN
   xAI 模型切换到 Responses API 并将默认模型由 Grok 4.5 升级至 **Grok 4.6**，同时按 Pi 风格发送 user agent。

7. **[#8120 feat(coding-agent): add experimental append compaction](https://github.com/earendil-works/pi/pull/8120)** — 🟢 OPEN
   在 `PI_EXPERIMENTAL=1` 下启用 append 模式的上下文压缩，**复用活跃 system prompt、工具与路由 session**，让压缩前缀能命中 provider 的 prompt cache，对长会话成本/延迟优化意义重大。

8. **[#8119 fix: track kimi cached tokens](https://github.com/earendil-works/pi/pull/8119)** — 🟢 OPEN
   将 Kimi Chat Completions 响应中顶层 `usage.cached_tokens` 纳入 `rawUsage` 并按 cache-read 计费（闭环 #8075），**Kimi 用户终于能看到准确的缓存命中率**。

9. **[#8113 feat(ai): add SiliconFlow provider](https://github.com/earendil-works/pi/pull/8113)** — 🔴 CLOSED
   新增 [SiliconFlow](https://siliconflow.com) 作为内置 provider，沿用 moonshot/minimax 的 OpenAI 兼容模式，**Pi 在国内模型生态覆盖更进一步**。

10. **[#8110 fix(tui): route selection copy through the host clipboard](https://github.com/earendil-works/pi/pull/8110)** — 🔴 CLOSED
    TUI 全屏下双击/拖选文本仅写 OSC 52 序列，在 Terminal.app、GNOME Terminal、tmux 等环境中显示 "Copied!" 但剪贴板为空。改为通过宿主剪贴板路由后，**TUI 复制行为首次做到"名副其实"**（闭环 #7761）。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 与 PR 综合来看，社区关注点已形成几条清晰主线：

- **多 Provider 兼容性持续深化**：OpenAI Codex Responses（strict 字段、WebSocket 降级）、Anthropic（thinking blocks、Vertex）、Kimi（缓存计费）、Baseten（输出上限）、SiliconFlow（新增内置）、xAI（Responses 化 + Grok 4.6），**Pi 正在变成一个真正的"模型聚合运行时"**。
- **TUI 性能与可用性**：流式渲染单核 100%（#6665）、全屏 transcript 搜索与窗口化（#8143）、长 read 行预览（#8141）、复制剪贴板修复（#8110）——**全屏 TUI 是当前打磨重点**。
- **上下文压缩与缓存优化**：append 压缩模式（#8120）、按模型粒度的压缩配置（#8133）、Kimi cache 命中追踪（#8119），**降低长会话成本是产品演进主线**。
- **Windows 全平台支持**：从使用调研（#7547）、登录挂起（#6187）、Unix socket 测试（#8047）到编辑器崩溃（#8036），**Windows 正从"可用"走向"全功能"**。
- **可扩展性（Extensions / Skills）**：pnpm 解析（#8092/#8112）、注册标志类型（#8123）、原子化的会话级模型状态（#8100）、中间位置自动补全（#8144），**生态能力正在系统化增强**。

---

## 💡 开发者关注点

- **🔑 登录与认证仍是高频痛点**：GitHub Copilot 在企业组织下 429、WSL 下设备授权挂起、Anthropic OAuth refresh 在 `signal=undefined` 时崩溃（#8131），反映出 **OAuth/device flow 在多端环境的鲁棒性亟待加强**。
- **🖥️ TUI 的"信任"问题**：复制显示"Copied!"却没写入剪贴板、终端自动跳到开头、"Copied!"闪烁与实际行为不符——**TUI 的状态反馈与真实副作用必须一致**，已成为质量基线诉求。
- **🤖 模型切换带来的副作用**：Opus 4.8 adaptive thinking 的 400、gpt-5.6-sol 的 `strict:null` 副作用、Gemini 自定义 thinking level 被丢弃，**新模型版本上线对 Pi 的兼容性回归成本高**，需要更系统的回归矩阵。
- **🛠️ 扩展机制细节**：pnpm + jiti 的解析差异、单条 edit 对象未被规范化、registerFlag 类型不严谨——**扩展作者期望更严格的 API 契约**。
- **🧹 临时文件与多 agent 协作**：#8145 提出 `/tmp` 下随机文件命名易冲突，期望像 Codex 那样建立 per-project per-session 目录，**多 agent 协作的"工作目录卫生"已开始被关注**。

---

*日报基于 GitHub 公开数据自动汇总生成，如需追踪特定议题或 PR，欢迎在评论区留言。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-15

## 📌 今日速览

今日 v0.21.12 正式版与 v0.21.12-preview.4 同步发布，重点强化 Web Shell 工作区文件上传与 autofix 评审的 footprint gate；社区讨论最热烈的方向是 **多工作区 daemon 资源配额**、**ACP/Serve 集成解耦**与 **Web Shell 桌面端形态评估**；CI 侧出现多条 P1 失败工单，autofix 与 release publish 流程的鲁棒性正在被重点加固。

---

## 🚀 版本发布

### v0.21.12（正式版）
- **Web Shell Composer** 支持工作区文件拖拽与 `@` 文件面板上传，并带进度跟踪（#8874）
- **Autofix 评审** 引入 diff growth brake，限制单轮评审过于膨胀的 diff
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12

### v0.21.12-preview.4 / preview.3
- `fix(web-shell): preserve standalone session target`（#9038）
- `feat(web-shell): support workspace file uploads`（#9038）
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.21.12-preview.4

### v0.21.11-nightly.20260815.c396fe3d12
- `feat(autofix): deny-by-default footprint gate and positional window censuses`（#9156）
- 链接：https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260815.c396fe3d12

### Benchmark E2E 系列（dsw-eas-tb-e2e-20260814-r1..r6）
- 跨 DSW SWE-bench Verified + Terminal-Bench 2.0 的端到端验证流水线持续运行，参考基线锁定 v0.21.2；SWE-bench Verified 当前 1/1 通过的基础样本中包含 1 infrastructure failure 仍需关注。

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 状态 | 重要性 |
|---|---|---|---|---|
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | fix(serve): 大体积 restore 超时时保留当前 session | P1 | **CLOSED** | 多人协作 session 稳定性核心问题，已以"部分解决 + 替代"方式关单，9 条讨论 |
| [#8051](https://github.com/QwenLM/qwen-code/issues/8051) | tracking(serve): 多工作区 daemon 资源配额 | P2 | OPEN | 反映 `qwen serve` 多工作区资源未硬上限，与 #8678 构成同一治理主线 |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | core + cli 架构 Review —— 12 项结构性问题 | — | OPEN | 指出 `ContentGenerator` 强耦合 `@google/genai` 等 136 个文件的 P0 隐患 |
| [#9143](https://github.com/QwenLM/qwen-code/issues/9143) | Main CI failed: E2E Tests on c5bf22247432 | P3 | OPEN | 主干 CI 在测试上报前即失败，按 commit 跟踪 |
| [#9002](https://github.com/QwenLM/qwen-code/issues/9002) | SDK Python 拒绝 `permission_mode="auto"` | P3 | OPEN | 客户端 schema 与 CLI 实际支持值不一致，开发者集成体验问题 |
| [#2128](https://github.com/QwenLM/qwen-code/issues/2128) | 长会话内存无限增长 — UI History 无上限 | **P1** | OPEN | 长期运行稳定性问题，与 OpenHands 等同类工具对标的关键差距 |
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | security: 只读 shell 分类器误放行命令替换 | **P1** | **CLOSED** | 行继续符与 `${var@P}` 绕过 AST 与运行时检查，安全性高优 |
| [#8871](https://github.com/QwenLM/qwen-code/issues/8871) | ACP 子进程在 `qwen serve` 模式下报 `Unknown argument: acp` | P2 | OPEN | serve 模式 token 鉴权失败的根因之一 |
| [#9026](https://github.com/QwenLM/qwen-code/issues/9026) | `NO_TOOL_RESULT_PROGRESS` 在无头运行中硬失败 | P2 | OPEN | 静默结束一轮的合法模型行为被错误拦截，4 次重试白耗 |
| [#8944](https://github.com/QwenLM/qwen-code/issues/8944) | `npm update` 自 0.21.0 起报 2 个 high 严重性漏洞 | P2 | **CLOSED** | 依赖安全披露，反映供应链监控缺位 |

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 说明 |
|---|---|---|
| [#9091](https://github.com/QwenLM/qwen-code/pull/9091) | feat(review): run-session ledger & cross-session agent evidence | 为可中断的 `/review` 续跑打基础，记录 CLI session id 与 diff SHA-256 |
| [#9100](https://github.com/QwenLM/qwen-code/pull/9100) | feat(review): 校验并限定增量 anchor | `fetch-pr` 新增 `--since <sha>`，anchor 走 hex allowlist + 历史校验 |
| [#9121](https://github.com/QwenLM/qwen-code/pull/9121) | fix(telemetry): 主代理追踪边界场景 | 修复主代理遥测在边角的丢失/错记 |
| [#9096](https://github.com/QwenLM/qwen-code/pull/9096) | feat(review): 将原 `gh` 命令迁移到平台化子命令 | 取代提示词内嵌 `gh` 调用，结构化处理 repo/head/issue 拉取 |
| [#9196](https://github.com/QwenLM/qwen-code/pull/9196) | fix(core): 接受重试耗尽后的静默 post-tool-result 完成 | 解决 #9026 描述的 4 次重试预算白耗 |
| [#9122](https://github.com/QwenLM/qwen-code/pull/9122) | feat(web-shell): 侧栏 session 管理升级 | hover 详情、folder 预览、运行态高亮、长标题滚动 |
| [#8529](https://github.com/QwenLM/qwen-code/pull/8529) | feat(core): 接入 API 元数据解析模型 modalities | 通过 models.dev 解析输入模态，启动期不阻塞 |
| [#9071](https://github.com/QwenLM/qwen-code/pull/9071) | feat(core): auto-skill 评审按经验信号 gate | 取代纯计数触发，引入"完成重试弧/中段用户引导"经验信号 |
| [#9167](https://github.com/QwenLM/qwen-code/pull/9167) | feat(dingtalk): 支持外发文件投递 | 校验 workspace/系统临时目录后通过 DingTalk media API 投递 |
| [#9189](https://github.com/QwenLM/qwen-code/pull/9189) | feat(autofix): 已核实越界发现转入 follow-up 队列 | SKILL 新增第四种处置 `Defer to follow-up`，避免评审回路漂移 |
| [#8403](https://github.com/QwenLM/qwen-code/pull/8403) | feat(audit): 遗留代码审计工作流 | `/audit <dir> [--effort low|medium|high]`，对无 diff/无 PR 模块审计 |

---

## 📈 功能需求趋势

1. **Web Shell 桌面化与体验升级**
   - 桌面端形态评估（#9168 提议 Electron 隔离宿主）、侧栏体验（#9122）、Channel 治理（#8845）、HTML 导出复用 WebShellTranscript（#9186）—— Web Shell 从"实验预览"走向"产品级终端"。

2. **多工作区 / Daemon 资源治理**
   - 配额追踪（#8051）、申请级 timeout 安全（#8678）、Channel 集合空态退化为 no-op（#8978）、ACP 集成与 serve internals 解耦（#8084）—— `qwen serve` 正被视为正式生产组件。

3. **新模型 / 模态适配**
   - 从 API 元数据解析 modality（#8529）、音频桥接（#8332）、placeholder 响应识别（#8938）—— 模型无关性增强。

4. **企业 Channel 接入**
   - DingTalk Workspace 内建 Channel（#9049） + 外发文件（#9167）—— 渠道生态拓展。

5. **审计与质量保障**
   - 遗留代码审计 (`/audit`)（#8403）、TUI 截图快照覆盖度（#9044）、自动技能评审 gate（#9071）—— 自动化质量保证一体化。

6. **Terminal / UI 体验精细化**
   - 短终端对话框不被裁剪（#8827 / #9040 / #9037）、CLI 帮助从共享 option 派生（#8902）、状态行压缩后刷新（#6806）—— CLI 体验持续打磨。

---

## 💬 开发者关注点

- **CI 脆弱性**：24h 内连续出现 4 条主分支 E2E 失败工单（#9143 / #9159 / #9160 等），且存在 commit-shard 跟踪 + 修复中的 autofix（SWE-bench verified 本身亦出现 1 infrastructure failure），团队正在用 `release branch force-push`（#9082）保障重试可替换。
- **架构耦合焦虑**：#4063 列出 14 项结构性问题（P0 起步），#9146 又摞出 utils/ 循环引用（51 文件 107 处向上 import），持续呼吁"层向清晰、单向依赖"。
- **SDK/CLI 行为不一致**：#9002 揭示 Python SDK 客户端校验拒绝 CLI 支持的 `permission_mode="auto"`，影响自动化集成。
- **依赖安全**：#8944 暴露 `npm update` 自 0.21.0 起持续两条 high CVE，已关闭但反映供应链审查流程缺位。
- **AUTOFIX 流程正义性**：#9089 指出 PAT 工作流与不可信分支代码共享 runner 的隔离问题，#9189 / #9114 / #9176 等 PR/Issue 持续加固其 fallback 队列、divergence 窗口与产物类型通道。
- **长会话可靠性**：#2128 长期处于 P1 OPEN，UI History 无上限增长是开发者长期诟病的痛点之一。

---

> 📎 数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计窗口：2026-08-14

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale 社区动态日报
**日期：2026-08-15**

> **重要说明**：仓库 `Hmbown/DeepSeek-TUI` 已正式更名为 **CodeWhale**（Shannon Labs 旗下公共产品），`codewhale` 为命令与包名，旧 npm 包 `deepseek-tui` 已停止维护。本日报同时涵盖两个名称的动态。

---

## 一、今日速览

**v0.9.8 正式发布，发布门控与 CI 红线问题集中修复中。** 今日社区围绕 v0.9.8 发布后的稳定性展开密集协作：多个依赖由 Dependabot 自动升级（ratatui/rmcp/rusqlite/tower-http/thiserror），CI 红线（provider 数量断言、推理档位词汇）被快速重钉；同时多起 race-condition、panic 与会话数据丢失等 P0/P1 bug 已合并修复。开发者关注点集中在 IDE 生态接入（Agent Client Protocol registry、VS Code 扩展版权）、模型 schema 简化与第三方模型配置体验。

---

## 二、版本发布

### v0.9.8 已发布
- 发布说明重点：项目正式以 **Codewhale** 名义对外发布，旧 `deepseek-tui` npm 包弃用不再更新。
- 同步落地的关键改动：
  - 新增本地 **DwarfStar (DS4)** 一等公民配置（无协议适配器）— [PR #5365](https://github.com/Hmbown/CodeWhale/pull/5365)
  - TUI Auto-Review 引入**模型守护层（model guardian tier）**，失败回退不再静默拒绝 — [PR #5353](https://github.com/Hmbown/CodeWhale/pull/5353)
  - Moonshot schema 退化为宽松模式，不再硬拒条件分支 — [PR #5369](https://github.com/Hmbown/CodeWhale/pull/5369)
- 已知问题：[#5355](https://github.com/Hmbown/CodeWhale/issues/5355) — 并行加载与 config-fixture 偶发 flake 待跟进。

---

## 三、社区热点 Issues

1. **[#3192](https://github.com/Hmbown/CodeWhale/issues/3192) — 提交至 agentclientprotocol/registry（13 评论）**
   提议将 CodeWhale 注册到 Agent Client Protocol registry，以便 **Zed 等 IDE 一键集成**。是社区最强的 IDE 生态接入呼声，评论数居首。

2. **[#1004](https://github.com/Hmbown/CodeWhale/issues/1004) — `/dryrun` 命令：预览下一次 chat completion 请求（9 评论）**
   在不实际发送请求的前提下预览即将送出的系统提示、缓存文件、工具定义等，对 DeepSeek V4 Pro 长上下文场景的迭代成本影响显著。

3. **[#5324](https://github.com/Hmbown/CodeWhale/issues/5324) — agent 工具 schema 化简（8 评论）**
   现有 32 字段、零必填、承载 8 个动作的 schema 导致模型频繁报错；作者建议重构。这是当前最受关注的**模型侧可靠性**议题。

4. **[#1482](https://github.com/Hmbown/CodeWhale/issues/1482) — nVidia NIM 集成 404 故障（6 评论）**
   第三方兼容 API 接入报错，反映第三方模型配置体验较差；与 #5350「预制模板」需求直接呼应。

5. **[#4326](https://github.com/Hmbown/CodeWhale/issues/4326) — 32-worker 子代理取消后 RSS 异常升高（6 评论）**
   性能/内存可观测性问题，要求区分分配器高水位保留与真正的 worker 泄漏；与子代理调度紧密相关。

6. **[#4785](https://github.com/Hmbown/CodeWhale/issues/4785) — 清理 464 个 `#[allow(dead_code)]`（6 评论）**
   代码质量议题：dead-code 抑制掩盖了潜在 drift，作者以 `cargo check` 量化证据。

7. **[#5266](https://github.com/Hmbown/CodeWhale/issues/5266) — v0.9.5 里程碑看板（已关闭，6 评论）**
   展示当前 PR pick-order 协作机制，是项目过程透明化的样板。

8. **[#5293](https://github.com/Hmbown/CodeWhale/issues/5293) — TUI 权限弹窗默认高亮改为「拒绝」（已关闭，5 评论）**
   安全/UX 议题：v0.9.4 默认从「允许」改回「拒绝」以防误操作，争议较大后调整。

9. **[#5374](https://github.com/Hmbown/CodeWhale/issues/5374) — agent 输出文字乱码（4 评论）**
   macOS 下 agent 写入时字符损坏，新鲜的回归 bug，影响直接可见。

10. **[#4029](https://github.com/Hmbown/CodeWhale/issues/4029) — 是否考虑类 Reasonix 界面（4 评论）**
    体现社区对**统一推理/工具型 CLI 体验**的探索兴趣。

---

## 四、重要 PR 进展

1. **[#5391](https://github.com/Hmbown/CodeWhale/pull/5391) — 升级 rusqlite 0.39.0 → 0.40.2**
   Dependabot 自动依赖升级，降低 MSRV。

2. **[#5390](https://github.com/Hmbown/CodeWhale/pull/5390) — 升级 rmcp 2.2.0 → 3.1.2**
   MCP Rust SDK 大版本升级，关联生态同步。

3. **[#5388](https://github.com/Hmbown/CodeWhale/pull/5388) — 升级 ratatui 0.30.0 → 0.30.2**
   TUI 底层框架补丁升级。

4. **[#5387](https://github.com/Hmbown/CodeWhale/pull/5387) — 升级 tower-http 0.6.11 → 0.7.0**
   HTTP 中间件栈升级。

5. **[#5389](https://github.com/Hmbown/CodeWhale/pull/5389) — 升级 thiserror 2.0.19 → 2.0.20**
6. **[#5384](https://github.com/Hmbown/CodeWhale/pull/5384) — 重钉 provider-count 断言（关闭 #5383）**
   v0.9.8 后注册中心新增 Google Gemini 后端（45 个 registry kind），测试同步更新。

7. **[#5382](https://github.com/Hmbown/CodeWhale/pull/5382) — 修复 session-index JSONL 写入竞态（已合并）**
   `StateStore::append_thread_name` 的索引重写在 `Arc<Mutex<Connection>>` 之外，曾导致并发克隆下静默丢数据 — [Issue #5380](https://github.com/Hmbown/CodeWhale/issues/5380)。

8. **[#5381](https://github.com/Hmbown/CodeWhale/pull/5381) — 修复 WebhookHookSink 构造 panic（已合并）**
   替换 `.expect()` 为带回退的 Result，避免 TLS 后端异常时主机崩溃 — [Issue #5379](https://github.com/Hmbown/CodeWhale/issues/5379)。

9. **[#5376](https://github.com/Hmbown/CodeWhale/pull/5376) — TUI 内部事件不再渗入 session peek（已合并）**
   修复用户态可观察到的内部事件泄露，提升输出卫生度。

10. **[#5365](https://github.com/Hmbown/CodeWhale/pull/5365) — 本地 DS4（DwarfStar）一等公民接入（已合并）**
    `/setup provider ds4` 一键启用本地回环预设，复用 OpenAI 兼容传输。

> 此外，#5378（推理档位词汇重钉）、#5369（Moonshot schema 降级）、#5368（隔离状态根防锁泄漏）、#5339（过滤子代理 shell 完成事件）、#5353（模型守护层）均为今日高价值合并。

---

## 五、功能需求趋势

从 50 条 Issues 提炼，社区关注方向集中在六大主题：

| 主题 | 代表 Issue |
|---|---|
| **IDE / 编辑器生态集成** | #3192、#2327（VS Code 第三方扩展版权）、#4029 |
| **模型与 schema 可靠性** | #5324（32 字段 agent 工具）、#5369、#5373（输出 token 上限被钳制） |
| **第三方 / 本地模型配置体验** | #1482（nVidia NIM）、#5350（OpenCode Zen/Go/美团预制模板）、#5365（DS4） |
| **TUI UX 与可观测性** | #5374（输出乱码）、#5322（宽屏回归）、#5293（默认拒绝）、#5287（子代理身份） |
| **性能与内存治理** | #4326（RSS 泄漏）、#4785（dead-code）、#5361（keyless 集成快照） |
| **插件与扩展体系** | #5311（Kimi 级插件系统）、#5053（TUI 升级提示） |

---

## 六、开发者关注点

1. **「越简单越好」的 schema 哲学**：32 字段零必填的 agent 工具已让多个模型反复报错，社区反复呼吁拆分或必填化（#5324、#5373）。
2. **第三方模型开箱即用**：nVidia NIM、Moonshot、OpenCode Zen/Go 等接入门槛高，开发者希望官方提供**预制模板 + 测试连接按钮**（#5350、#1482）。
3. **CI 红线与版本同质化**：v0.9.8 发布当天即出现两起 CI 红线（provider 数量、推理档位词汇），反映测试与产品词汇需要更紧密的同步机制。
4. **数据安全与并发正确性**：今日合并的两起 race/panic（#5382、#5381）均围绕 `Clone` 的共享状态，强调「fail-soft、fail-loud」的工程文化。
5. **TUI 体验回归风险**：从 #5322、#5374 看，宽屏布局与字符编码在版本切换中频繁出现回归，社区希望引入**跨平台字符渲染回归测试**。
6. **品牌过渡期困惑**：旧名 DeepSeek-TUI 与新名 CodeWhale 并存，部分用户在迁移文档、npm 包名归属上仍有疑问；社区期待一份明确的迁移说明（[Release notes](https://github.com/Hmbown/CodeWhale/releases)）。

---

*日报基于 GitHub 公开数据自动汇总，覆盖 Releases、Issues（前 30/50）、PRs（前 15）。如需查看完整列表请访问 [Hmbown/CodeWhale 仓库](https://github.com/Hmbown/CodeWhale)。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*