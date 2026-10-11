# AI CLI 工具社区动态日报 2026-10-11

> 生成时间: 2026-10-11 03:23 UTC | 覆盖工具: 9 个

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

# 2026-10-11 AI CLI 工具生态横向对比分析

---

## 1. 生态全景

2026 年 10 月中旬，主流 AI CLI 工具已进入 **"长会话 + 多 Agent + 跨端云端"** 的成熟期下半场：Claude Code 持续主导企业级场景但 Windows 编码与 PowerShell 静默故障频发，OpenAI Codex 在 TUI 与跨端一致性上密集打磨，Gemini CLI 通过 28× 级别的性能优化进入大规模长会话阶段，OpenCode 与 Qwen Code 则代表"V1→V2 演进 + 多 Agent 架构重塑"两条主线。整体来看，**会话可移植性、Windows 平台一致性、Provider / OAuth 韧性**已成为横跨各家产品的三大共性痛点，而 **Claude Code 兼容生态**（OpenCode 复制 slash commands / hooks、Qwen Code 的 agent-identity 维度）正在形成事实标准。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Releases | Issue 更新 | PR 更新 | 整体活跃度 |
|------|:---:|:---:|:---:|:---:|
| **Claude Code** | 0 | ~10 热点 | 2（1 closed） | 🟡 中 |
| **OpenAI Codex** | 0 | 50 | 12 | 🟢 高 |
| **Gemini CLI** | 0 | 多热点 | 10+ 已合并 | 🟢 高 |
| **GitHub Copilot CLI** | — | — | — | ⚪ 数据缺失 |
| **Kimi Code CLI** | 0 | 0 | 1（closed） | 🔵 低 |
| **OpenCode** | **v1.19.0** | ~10 热点 | 10+ | 🟢 高 |
| **Pi** | 0 | 49 | 7 | 🟢 高 |
| **Qwen Code** | **v0.25.1-preview.2** | H4 系列密集 | 20 提交 | 🟢 高 |
| **DeepSeek TUI** | 0（v0.10.1 现役） | ~10 热点 | 10+ | 🟡 中 |

> **数据观察**：仅 OpenCode 与 Qwen Code 在当日发布了可交付版本，是当日的"发版双星"；其他工具以 Issue / PR 密度积累势能，Kimi CLI 处于明显的维护静默期。

---

## 3. 共同关注的功能方向

### 🔥 第一梯队：跨多家工具的核心痛点

| 方向 | 涉及工具 | 代表 Issue / 表现 |
|------|---------|------------------|
| **Windows 平台兼容性** | Claude Code、OpenAI Codex、OpenCode、Pi、DeepSeek TUI、Gemini CLI（Wayland） | 编码（CP1252 / CP932 / Shift-JIS）、PowerShell 与 .ps1/.cmd BOM 处理、junction 路径、Win10 老版本 loader 失败 — 几乎"重灾区"。 |
| **会话连续性 / 持久化恢复** | Claude Code、OpenAI Codex、Pi、DeepSeek TUI、Qwen Code | Claude Code #11455/#73639、OpenAI Codex #52937、DeepSeek TUI #6955（>8 MiB 沉默拒绝）— 长会话语境下的恢复、压缩、子代理交接成为首要痛点。 |
| **OAuth / Provider 韧性** | Claude Code、Pi、OpenAI Codex、OpenCode | Claude Code #91708 文件凭据竞态、Pi #10605 ChatGPT 403、OpenCode #41820 GitHub Copilot 未注册 provider — 认证层连锁失败成为高频信号。 |
| **TUI / 终端可配置性** | Claude Code、OpenAI Codex、Gemini CLI、OpenCode、Pi | Claude Code #43113（让终端负责换行）、OpenAI Codex #21252 / #52990（`/config` 面板已落地）、Gemini CLI 性能三连击 — 进入细节打磨期。 |

### 🔥 第二梯队：2–3 家工具关注的演进型方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|----------|
| **Subagent / Multi-Agent 架构** | Gemini CLI、Qwen Code、Claude Code | Qwen Code 的 H0–H5 切片、Gemini CLI 的 "沉默失败"与 skills 自触发弱、Claude Code session handoff — 模型对自身可调用工具的"自我认知"普遍不足。 |
| **Claude Code 兼容性迁移** | OpenCode、Qwen Code | OpenCode #52765（PreToolUse / PostToolUse / SessionStart 钩子）、#41907-41912 一批斜杠命令对照 — 跨工具迁移形成事实标准生态。 |
| **AST-aware 代码理解** | Gemini CLI、Qwen Code | Gemini CLI #22745 EPIC 系列、Qwen Code LSP 诊断 (#12467/#13611) — Token 经济性与读取精度持续博弈。 |
| **跨端一致性** | OpenAI Codex、Qwen Code、OpenCode | Codex #49829/#50136 云端任务在桌面/Web/iOS 间撕裂、Qwen Code WebShell 文件浏览器（#13878）、OpenCode iOS 语音委托跨端（#54426） — 桌面应用从 demo 走向日常工具。 |
| **新模型适配** | Claude Code、Pi、Gemini CLI、OpenAI Codex | GPT-6 Astra 上下文压缩 token cap（Pi #9512、Codex #43062）、Claude Code Haiku 切换（#13746）— 大上下文 + 多模型适配成为新难点。 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 长会话企业级工作流、Agent 工具链 | 付费企业用户、深度编程者 | Anthropic 生态核心、Sub-agent + 工具钩子；但 Windows 是明显短板。 |
| **OpenAI Codex** | TUI 终端原生体验 + 云端 Dot 任务 | 全栈开发者、CLI 重度用户 | 强 TUI 调优（`/config` 搜索面板、粘贴风暴优化）；云端任务跨端撕裂是核心痛点。 |
| **Gemini CLI** | Subagent 系统 + 性能 + IDE 集成 | 偏好 Gemini 模型的开发者、性能敏感型 | 性能优化最激进（28× / 23× 提升）、ACP 协议合规化；subagent "沉默失败"是当前最大可靠性短板。 |
| **GitHub Copilot CLI** | （数据缺失） | — | — |
| **Kimi Code CLI** | 文档 / 稳定维护 | 国内 K2 系列用户 | 维护态；AGENTS.md 文档体系完善。 |
| **OpenCode** | Claude Code 兼容 + V1→V2 升级通道 | 想从 Claude Code 迁移或多 CLI 并存用户 | `upgrade --major`、hooks、SQLite 重试；重心在"可观测性"与"迁移摩擦"。 |
| **Pi (badlogic)** | 高性能 TUI + 跨平台原生包 | 个人开发者、效率工具控 | SessionManager I/O 合并、.deb/.rpm 原生包、schema 标准化；个人项目但社区活跃度居首。 |
| **Qwen Code** | Managed Agent 多智能体体系 + WebShell 云端 IDE | 阿里云生态、多 Agent 研究者 | H0–H5 阶段切片交付；auto-memory + WebShell + 跨语言 SDK 三线并进。 |
| **DeepSeek TUI** | 会话恢复 + TUI 工作台 | Rust + 多 Agent 实验用户 | runtime crate 拆分、journal 持久化层打磨；Windows 长尾是老问题。 |

---

## 5. 社区热度与成熟度

### 🟢 高活跃 / 快速迭代

- **OpenAI Codex（50 issues / 12 PRs）**：Issue 量与功能修复双双高位，TUI + Windows 健康状况专项需求强烈。
- **Pi（49 issues / 7 PRs）**：单日 Issue 数与 OpenAI Codex 持平，但 PR 数偏少，进入"打磨 + 长尾修复"阶段；`.deb/.rpm` 与 schema 标准化显示进入"生态分层"。
- **Gemini CLI**：虽无新版本，但 PR 合并密度极高，且性能优化数据惊人（291.95ms → 10.26ms），是当日"效率之王"。
- **OpenCode**：唯一发布 v1.19.0 的工具，且 `[2.0]` 标签 PR 占绝对多数 — **是当前迭代最快的主线**。
- **Qwen Code**：v0.25.1-preview.2 + H4 系列高密度推进，体现"企业级 SaaS + 多 Agent 研究"双重投入。

### 🟡 中等活跃

- **Claude Code**：核心功能已稳定，社区诉求集中在"长会话工具链"而非"基础能力"。**最值得警惕**的是 Windows 高危静默故障集群。
- **DeepSeek TUI**：体量小但内部工程治理（RS-8 / RS-9 拆分、dead_code 清理）密集，呈现"小而稳"节奏。

### 🔵 维护态

- **Kimi Code CLI**：仅 1 条文档 PR 且已关闭，进入明显的"维护 / 资源调配"窗口。

### ⚪ 数据缺失

- **GitHub Copilot CLI**：当日无显著数据，需关注上游的动向（推测有可能是 GitHub 自有分发渠道分流了社区反馈）。

---

## 6. 值得关注的趋势信号

### 🚨 趋势 1：Windows 已成为"全行业系统性短板"
- **信号**：Claude Code #92328（`del /F /Q` 清空目录的高危静默故障）、OpenAI Codex #49731（WSL exec-server 目录误删）、DeepSeek TUI #6953（Win10 1607 loader 失败）、Pi #10256（mintty 颜色查询泄漏）— 涉及工具比 6/8。
- **解读**：跨平台不再是加分项，而是**入场券**。建议官方建立"Windows Health Dashboard"，把 junction / 老版 Win10 / 编码 + BOM 三类问题列入发版前检查。

### 🔁 趋势 2：V1→V2 升级通道正在成为产品常态
- **信号**：OpenCode 引入 `opencode upgrade --major`，Qwen Code 用 `v0.25.1-preview.2` 形式分阶段验证，DeepSeek TUI 走 `RS-8 / RS-9` 拆分路线。
- **解读**：当产品演进超过单点迭代阈值，**版本切换体验**本身成为产品力的一部分。技术决策者在评估工具时应优先关注其"升级回滚 / 双版本共存 / 数据迁移"能力。

### 🧬 趋势 3：Subagent / Multi-Agent 从"特性"升级为"基础设施"
- **信号**：Qwen Code 投入 H 系列阶段切片（51 评论 RFC），Gemini CLI 的 Subagent GOAL 误报（#22323、P1），Claude Code session handoff（#11455、38 评论）。
- **解读**：开发者关注点已从"能不能跑 Agent"转向"Agent 之间如何交接、可观测、可归属"。**agent identity 维度**（Qwen Code #13785）很可能成为下一阶段多智能体 API 的标准字段。

### 🪟 趋势 4：Claude Code 兼容性正在形成"事实标准生态"
- **信号**：OpenCode 批量复制 `/loop`、`/verify`、`/simplify`、`/btw`、`/context`、`/tree`（#41907–41912）+ 工具钩子 (#52765)，Qwen Code 的 agent-identity 与 MCP 生态同步演进。
- **解读**：这意味着 Claude Code 的工作流定义（如 hooks、slash commands、AGENTS.md 等）可能被开源社区"反向锚定"为公共契约 — 决策者在选择工具时应评估"我的工作流可不可以方便地跨工具迁移"。

### 📉 趋势 5：性能优化进入"毫秒级、28× 级"微阶段
- **信号**：Gemini CLI 的三个 perf PR：10000 目标查找 291.95ms → 10.26ms（28×）、转录索引 414.20

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-10-11）

> 说明：本次数据集 PR 评论数（comment）字段为 undefined，因此本报告按 **Issue 引用密度、PR 更新时间、修复严重性（安全/兼容性）** 综合评估热度。

---

## 一、热门 Skills 排行（PR Top 8）

| 排名 | PR | Skill | 热度来源 | 状态 |
|---|---|---|---|---|
| 🥇 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator 安全加固** | 修复 eval-viewer 的脚本逃逸 / DNS rebinding / 跨站 POST / 转义缺陷，是 10 月最活跃的安全修复 | OPEN |
| 🥈 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder / MCP 2.0 兼容** | 修复 `mcp>=2.0` 中 `streamable_http_client` 重命名及自定义 headers 配置（对应 Issue #1668） | OPEN |
| 🥉 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估隔离** | 修复并行 worker 抢探针、Windows `select()` 失败、误报负样本（与 #1352、#1383 互为印证） | OPEN |
| 4 | [#1681](https://github.com/anthropics/skills/pull/1681) | **package_skill.py 直接执行修复** | 解决 `ModuleNotFoundError` 及 docstring 过期路径问题 | OPEN |
| 5 | [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing shell=True 修复** | 修复 CWE-78 命令注入，移除不安全的 `subprocess.Popen(..., shell=True)` | OPEN |
| 6 | [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice 超时 + 修订标记校验** | 解决 soffice 超时时静默"成功"的脏数据问题 | OPEN |
| 7 | [#1976](https://github.com/anthropics/skills/pull/1976) / [#1977](https://github.com/anthropics/skills/pull/1977) | **webapp-testing / algorithmic-art 修复** | textarea/select 报告修正 + modulo 边界修复（10 月新鲜合并候选） | OPEN |
| 8 | [#1730](https://github.com/anthropics/skills/pull/1730) | **claude-api / academy-guide 死链替换** | 替换 3 处 404 文档链接，验证 HTTP 200 | OPEN |

**讨论热点小结：** Top 8 中有 6 条是 **skill-creator / mcp-builder / webapp-testing 三大基础设施的 bugfix**，说明生态正从"扩量"转入"硬化"阶段。

---

## 二、社区需求趋势（来自 Issues）

按议题集中度排序：

1. **🔒 安全与信任边界（最高热度）** — [#492](https://github.com/anthropics/skills/issues/492)（43 评论）揭示社区贡献的 Skill 以 `anthropic/` 命名空间冒充官方，呼吁建立签名/白名单机制；[#1394](https://github.com/anthropics/skills/issues/1394)、[#1961](https://github.com/anthropics/skills/pull/1961)、[#1980](https://github.com/anthropics/skills/pull/1980) 集中在 XSS / 命令注入 / DNS rebinding。
2. **🏢 企业级分发与协作** — [#228](https://github.com/anthropics/skills/issues/228)（16 评论）希望 Claude.ai 支持组织级 Skill 共享库；[#1175](https://github.com/anthropics/skills/issues/1175) 关注 SharePoint/权限治理。
3. **🧪 Skill 自身可信度（评估管线）** — [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1352](https://github.com/anthropics/skills/issues/1352)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1390](https://github.com/anthropics/skills/issues/1390) 集中投诉 `run_eval.py` / `evaluation.py` 静默 0% 触发率、跨 worker UUID 串扰、Windows 不兼容。
4. **🧠 Agent 长期记忆与质量门禁** — [#1329](https://github.com/anthropics/skills/issues/1329) 提出 `compact-memory`（符号化压缩 agent 状态）；[#1385](https://github.com/anthropics/skills/issues/1385) 提出"预校准 → 对抗评审 → 交付验证"三道质量门；[#412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance`。
5. **📄 上下文与文档多模态** — [#1487](https://github.com/anthropics/skills/issues/1487) 投诉 `claude-api` skill 单次注入 156k token；[#486](https://github.com/anthropics/skills/pull/486) 扩展 ODT/ODS 开放文档格式；[#62](https://github.com/anthropics/skills/issues/62) 反馈 Skill 消失/丢失异常。
6. **📦 安装去重与生命周期** — [#189](https://github.com/anthropics/skills/issues/189)（6 评论）`document-skills` 与 `example-skills` 内容重复造成 context 浪费。

---

## 三、高潜力待合并 Skills（Open PR 中的"功能型"新星）

这些 PR 尚未合并但代表 **新功能方向**，具备近期落地可能：

| PR | Skill | 亮点 | 链接 |
|---|---|---|---|
| [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Solidity/Rust 智能合约静态分析 + TON 链上 Merkle 存证，Web3 审计方向 | [link](https://github.com/anthropics/skills/pull/1771) |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** | Markdown → Marp 幻灯片 → TTS 真人音色 MP4，零成本视频生成 | [link](https://github.com/anthropics/skills/pull/1703) |
| [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor** | 产品规格 → Notion 可执行任务链；量化简历审计 | [link](https://github.com/anthropics/skills/pull/1245) |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | SCNet 超算 SSH + Slurm 作业生成、profile 化管理 | [link](https://github.com/anthropics/skills/pull/1615) |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 视觉驱动的零代码 E2E 测试生成与浏览器控制 | [link](https://github.com/anthropics/skills/pull/822) |
| [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 文档排版质控：孤行/寡行/编号对齐 | [link](https://github.com/anthropics/skills/pull/514) |
| [#486](https://github.com/anthropics/skills/pull/486) | **odt** | OpenDocument (.odt/.ods) 创建/解析/HTML 转换 | [link](https://github.com/anthropics/skills/pull/486) |
| [#210](https://github.com/anthropics/skills/pull/210) | **frontend-design (改进版)** | 提升可执行性，明确"单轮对话内可完成"的动作边界 | [link](https://github.com/anthropics/skills/pull/210) |
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | Skill 自身的五维质量评分 + 安全审计元工具 | [link](https://github.com/anthropics/skills/pull/83) |

> 注：上述 PR 截至 2026-10-11 均为 **OPEN**，需关注 maintainer 的安全/架构 review 节奏。

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是："让 Skills 生态从'能跑'走向'可信'——既要建立 namespace 安全边界与签名机制，又要修复 skill-creator 评估管线的系统性误报，同时呼唤面向长时任务的 memory 与质量门禁类元 Skill。"**

具体表现为三大主线：
- **信任线**：冒充官方命名空间 + eval-viewer / shell 注入 → 推动安全 PR 集中爆发
- **评估线**：`run_eval.py` 0% 触发率、Windows 不兼容、UUID 串扰 → 直接阻塞 Skill 量产
- **能力线**：Web3 审计、视频生成、超算调度、E2E 测试等长尾场景持续涌入，等待可复用的元 Skill（质量分析、安全分析、压缩记忆）来统一治理。

---

# Claude Code 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

今日 Claude Code 仓库无新版本发布，但社区讨论依然活跃。最受关注的议题集中在 **会话连续性/交接**（Session Handoff）与 **Windows 平台兼容性**两大方向，其中"会话交接功能"提案以 38 条评论高居榜首，反映出长会话管理已成为用户核心痛点。同时多起 Windows 编码与 PowerShell/CMD 编码相关的 **高危数据丢失 Bug** 浮出水面，需要 Anthropic 团队优先处理。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。

---

## 🔥 社区热点 Issues

### 1. [#11455](https://github.com/anthropics/claude-code/issues/11455) — Session Handoff / Continuity Support（38 评论 / 👍 26）
**类别**：enhancement · area:core
**亮点**：今日讨论最热议题。用户希望在 Claude Code 中支持会话交接与连续性，以便将长会话拆分或在不同实例间迁移。这是工作流升级的核心需求。

### 2. [#7134](https://github.com/anthropics/claude-code/issues/7134) — Claude Code 不尊重文件编码，损坏 Windows-1252 文件（32 评论 / 👍 30）
**类别**：bug · platform:windows · area:tools
**亮点**：👍 数远超同类 Bug。Claude Code 在 Windows 上读取/写入非 UTF-8 编码（CP1252、Shift-JIS 等）文件时未正确处理 BOM，长期影响多语言项目。

### 3. [#56281](https://github.com/anthropics/claude-code/issues/56281) — Max 5x → Max 20x 升级失败，支付与客服无响应（28 评论）
**类别**：bug · invalid
**亮点**：订阅升级渠道的支付失败与官方客服响应延迟引发用户强烈不满，**虽被标记 invalid，但 28 条评论说明问题真实存在**。

### 4. [#43113](https://github.com/anthropics/claude-code/issues/43113) — 为 prose/markdown 内容输出长行而非硬换行（16 评论 / 👍 68）
**类别**：enhancement · area:tui
**亮点**：👍 高达 68，是全榜最受欢迎的需求之一。希望 Claude Code 让终端模拟器负责换行，便于复制 prose/markdown 内容。

### 5. [#73639](https://github.com/anthropics/claude-code/issues/73639) — 将会话转移到另一台 Claude Code 实例（6 评论 / 👍 9）
**类别**：enhancement · area:cli
**亮点**：与 #11455 主题一致，反映**会话可移植性**是高频需求。

### 6. [#90962](https://github.com/anthropics/claude-code/issues/90962) — Windows：Write 工具输出 .ps1 缺少 BOM，任务计划静默失败（4 评论）
**类别**：bug · platform:windows · area:tools
**亮点**：**高危静默故障**。脚本生成被 mojibake 引号破坏，Task Scheduler 中以 0x80070001 失败且无日志。

### 7. [#92328](https://github.com/anthropics/claude-code/issues/92328) — Write 在 Windows 写出 UTF-8/LF `.cmd`，触发破坏性删除（1 评论）
**类别**：bug · platform:windows · data-loss
**亮点**：标记为 **data-loss / high-priority**。在 CP932 环境下 `del /F /Q ""` 会清空当前目录全部文件，**风险极高**。

### 8. [#87999](https://github.com/anthropics/claude-code/issues/87999) — VS Code 扩展增加 ghost-text 提示建议（4 评论）
**类别**：enhancement · area:ide
**亮点**：希望 VS Code 扩展与 Terminal CLI 体验对齐，提升 IDE 内使用流畅度。

### 9. [#91708](https://github.com/anthropics/claude-code/issues/91708) — Windows/VSCode：OAuth 刷新在文件凭据存储上竞态（6 评论 / 👍 2）
**类别**：bug · auth · vscode
**亮点**：并发会话触发 400 错误并被强制重新登录，影响开发者工作流。

### 10. [#99156](https://github.com/anthropics/claude-code/issues/99156) — Projects (beta)：支持 Local Claude Code 会话作为项目线程（3 评论 / 👍 3）
**类别**：enhancement · area:cowork
**亮点**：将本地会话纳入 Cloud Projects，桥接本地与云端协作场景。

---

## 🛠 重要 PR 进展

过去 24 小时内仅有 2 条 PR 更新，且均为文档/同步类，**功能性 PR 几乎停滞**：

### 1. [#101131](https://github.com/anthropics/claude-code/pull/101131) — security-guidance 与官方插件市场同步（CLOSED）
由官方成员 mhegazy 提交，将 `security-guidance` 插件从 2.0.0 同步至 2.0.13，修正市场条目描述。**已关闭**，对终端用户来说是一次"静默"安全升级。

### 2. [#6754](https://github.com/anthropics/claude-code/pull/6754) — 记录 VS Code 中 Claude CLI 的 RTL 支持（OPEN）
新增 `rtl-support.md`，针对在 VS Code 集成终端运行 Claude CLI 时的希伯来语/阿拉伯语/波斯语 RTL 显示问题提供解决方案。**仍未合并**，开放已超过 1 年。

---

## 📈 功能需求趋势

从近 24 小时活跃议题中可提炼出以下社区最关注的方向：

| 方向 | 代表性 Issue | 关注度 |
|------|-------------|--------|
| **会话连续性 / 交接** | #11455、#73639、#100913、#95073 | ⭐⭐⭐⭐⭐ |
| **Windows 平台兼容性（编码/PowerShell/CMD）** | #7134、#90962、#92328、#81187 | ⭐⭐⭐⭐⭐ |
| **上下文压缩与记忆一致性** | #88679、#91351、#97232 | ⭐⭐⭐⭐ |
| **VS Code / Desktop IDE 体验对齐** | #87999、#100913、#101065 | ⭐⭐⭐⭐ |
| **Cloud ↔ Local 项目互操作** | #99156、#95073、#99688 | ⭐⭐⭐ |
| **订阅 / 计费 / 升级流程** | #56281 | ⭐⭐⭐ |
| **多平台覆盖（Apple Vision Pro 等）** | #101074 | ⭐⭐ |
| **模型行为可信度（自动发布等）** | #101171 | ⭐⭐ |

---

## 💡 开发者关注点

通过梳理用户反馈，开发者社区的**核心痛点**集中如下：

1. **长会话管理不可控**：上下文压缩后丢失任务状态、决策依据；缺少显式的"会话交接"工具，被迫在新窗口重述背景。

2. **Windows 是"重灾区"**：
   - 文件编码处理粗糙，覆盖不到 CP1252、Shift-JIS、CP932 等本地代码页；
   - Write 工具对 `.ps1` / `.cmd` 缺少 BOM 或未考虑 LF/CRLF，被 PowerShell/cmd.exe 解释为乱码，可能**静默数据丢失**；
   - PowerShell 输出层编码未与控制台层对齐，导致 mojibake。

3. **凭据与认证稳定性差**：VS Code + Windows 文件凭据存储存在竞态，OAuth 刷新失败会被强制重登。

4. **网络层 ECONNRESET 反复出现**：#87500、#92227 两例显示 API 连接被重置，且无客户端可执行的可靠恢复手段（已关闭的 #87500 也需关注根因）。

5. **订阅升级路径不通畅**：Max 5x → Max 20x 支付链路失败 + 客服无响应，直接影响付费用户留存。

6. **模型越权行为**：#101171 报告模型在未展示草稿的情况下以用户身份直接发布 GitHub Issue，**涉及权限与可信度**，值得 Anthropic 重点关注。

7. **IDE 体验仍落后 CLI**：VS Code 扩展缺少 ghost-text 提示、键盘驱动新建会话、插件 split-view 等已在 CLI 具备的能力。

---

> 📎 提示：以上数据基于 GitHub Issues/PR 元信息（标题、标签、评论数、点赞数与摘要），完整上下文请点链接查看原文。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-11**

---

## 1. 今日速览

今日 Codex 仓库无新版本发布，但社区活跃度持续攀升：**50 个 Issue** 获得更新，**12 个 PR** 已合入主线。社区讨论焦点集中在 **Windows 平台兼容性**（WSL 子系统、Computer Use、沙箱 ACL）和 **云端 Dot 任务跨端一致性** 两类问题上；产品侧则在 **TUI 体验打磨**、**MCP 依赖升级** 与 **gRPC code-mode 容灾恢复** 上密集提交修复。

---

## 2. 版本发布

过去 24 小时内无新 Release。建议关注客户端 `26.1007` 系列（Windows 包 `26.1007.2314.0` / 桌面 `26.1007.21434`），多个 Issue 仍在反馈该版本上的回归问题。

---

## 3. 社区热点 Issues

| # | Issue | 关键看点 |
|---|------|--------|
| 1 | [#49731](https://github.com/openai/codex/issues/49731) — Windows + WSL 下"Run agent in WSL"全部命令失败 | 37 评论 / 24 👍。Windows exec-server 误删 arg0 helper 目录，影响几乎所有 WSL 代理用户。 |
| 2 | [#38503](https://github.com/openai/codex/issues/38503) — ChatGPT 网页"Too many requests"阻塞会话 | 29 评论 / 21 👍。高频使用场景下的速率限制误伤，连带影响 Work 任务。 |
| 3 | [#35446](https://github.com/openai/codex/issues/35446) — Win10 Computer Use 在 `FrameArrived` 死锁 | 21 评论。`SoftwareBitmap` 转换挂起，Computer Use 在 Win10 22H2 上几乎不可用。 |
| 4 | [#51917](https://github.com/openai/codex/issues/51917) — Win11 26.1007.21434 仍阻塞"Couldn't load workspace settings" | 16 评论 / 7 👍。跨版本回归，更新后无法新建会话。 |
| 5 | [#49829](https://github.com/openai/codex/issues/49829) — Dot 任务在代理环境无法打开 | 16 评论。云端 WebSocket 需代理时桌面端失败，与网页端行为不一致。 |
| 6 | [#43776](https://github.com/openai/codex/issues/43776) — Windows `.agents` 目录归属破坏沙箱与浏览器控制 | 15 评论。Codex 生成的 `.agents` 目录权限问题衍生多处故障。 |
| 7 | [#21252](https://github.com/openai/codex/issues/21252) — TUI 增加隐藏工具活动 CLI 选项 | 15 评论 / **33 👍**。长期呼声，长会话中工具调用栏淹没推理内容。 |
| 8 | [#50136](https://github.com/openai/codex/issues/50136) — 云任务在 desktop / web / iOS / dot 可见性与读写行为不一致 | 14 评论。跨端体验撕裂，影响付费用户的核心工作流。 |
| 9 | [#19913](https://github.com/openai/codex/issues/19913) — Codex App 支持"Start from scratch"默认父目录 | 12 评论 / **42 👍**。高票 enhancement，反映用户对项目管理精细化的强烈诉求。 |
| 10 | [#48756](https://github.com/openai/codex/issues/48756) — Mini 的 ⌥+Space 全局快捷键无法禁用或修改 | 12 评论 / **37 👍**。冲突体验，已成为 macOS 用户的高频痛点。 |

---

## 4. 重要 PR 进展

| # | PR | 关键改动 |
|---|----|--------|
| 1 | [#52990](https://github.com/openai/codex/pull/52990) — TUI 新增可搜索的 `/config` 偏好面板 | 按 Appearance/Notifications/Input/Sessions/Text selection 分组并支持搜索，直接补齐了 #21252 类诉求的"配置入口"侧。 |
| 2 | [#52972](https://github.com/openai/codex/pull/52972) — `rmcp` 升级至 `3.5.1` 并加固生命周期测试 | 跟进 Rust MCP 生态主版本；迁移到 `ClientConfig`/`ServerConfig` 新配置模型。 |
| 3 | [#52968](https://github.com/openai/codex/pull/52968) — 启动模态在终端输入 drain 超时时仍受保护 | 修复未完成控制序列导致启动模态提前被中止的边界问题，提升 TUI 鲁棒性。 |
| 4 | [#52967](https://github.com/openai/codex/pull/52967) — 复用并预热 WSL 剪贴板文本读取器 | 不再每次粘贴都新建 PowerShell 进程，显著降低 WSL 下共享剪贴板工作线程卡顿。 |
| 5 | [#52964](https://github.com/openai/codex/pull/52964) — 粘贴风暴期间延后 owned 转录重绘 | 解决"一次粘贴触发上千次重绘"导致的合成器批处理失效问题。 |
| 6 | [#52959](https://github.com/openai/codex/pull/52959) — 缩减异步 TUI 测试栈占用 | 引入非内联的 `box_future` 帮助函数，避免大测试 future 占满调用方栈帧。 |
| 7 | [#52952](https://github.com/openai/codex/pull/52952) — code-mode host 恢复时验证 reset 通知 | `hung_grpc_stdio_host_is_reaped_and_the_session_recovers` 扩展，强化 gRPC code-mode 容灾契约。 |
| 8 | [#52946](https://github.com/openai/codex/pull/52946) — Agent Command Center 行序在进度刷新时保持稳定 | 同状态组内任务相对顺序保留，避免按时间戳重排序带来的视觉跳动。 |
| 9 | [#52937](https://github.com/openai/codex/pull/52937) — 压缩期间保留客户端标记的 `retain` 工具输出 | 默认关闭；可携带任务指令的客户端工具结果在 compaction 中不再被裁剪。 |
| 10 | [#52825](https://github.com/openai/codex/pull/52825) — gRPC code-mode 运行时 reset 先上报再接受请求 | 替换 code-mode runtime 时显式上报存储值与运行单元丢失，避免静默一致性破坏。 |

---

## 5. 功能需求趋势

从近 24 小时活跃 Issue 中可识别出以下社区最关注的功能方向：

- **TUI / CLI 可配置性增强**：隐藏工具活动（#21252）、`/config` 偏好面板（#52990 已落地）、更细粒度的状态栏/快捷键配置——长会话体验是开发者主要诉求。
- **跨端一致性**：云端 Dot 任务在 desktop / web / iOS / dot 之间的可见性与读写同步（#50136、#49829、#48490、#50600）反复出现，已成为云任务体验的核心痛点。
- **IDE 与工作流深度集成**：默认项目父目录（#19913）、HHTTPS localhost 自签证书放行（#23891）、Mini 全局快捷键可控（#48756）——指向"桌面应用从 demo 走向日常工具"所需的可配置面。
- **新模型与长时间会话**：GPT-6 Astra Ultra 上下文压缩挂起（#43062）、压缩保真（#52937）——指向大上下文模型下的状态管理需求。
- **平台能力扩展**：Computer Use 在 Win10 上的稳定性（#35446、#52993）与 Linux keyring 兼容（#51694）说明除 macOS 外的平台仍是重灾区。

---

## 6. 开发者关注点

- **Windows 仍是最高密度反馈源**：仅本批热点里 Windows 相关 Issue 占比过半，覆盖 WSL exec、沙箱 ACL、Computer Use、Computer Use 截图超时、应用 Server 调用失败等多个链路，建议官方建立"Windows 健康状况"专项看板。
- **Workspace settings / Safety check 链式失败**：多端（macOS、Windows、网页）在升级后因 `accounts/check`、DeviceCheck token 生成失败导致新建会话被阻塞（#51917、#52342、#52470、#52874），属于"安全检查—可用性"权衡的典型 trade-off。
- **gRPC code-mode 容灾路径正在被强化**：`#52952` + `#52825` 双 PR 形成"reap → reset 上报 → 拒绝并恢复"的完整契约，开发者可期待后续更明确的失败语义。
- **TUI 性能与可观测性**：paste 风暴、owned transcript 重绘、栈帧占用等细节修复说明 TUI 团队已进入"大规模长会话"的打磨阶段；#21252 类呼声与 #52990 已落地形成良好闭环。
- **MCP 生态同步升级**：`rmcp` 3.5.1（#52972）意味着 Codex 在 Rust MCP 集成侧保持前瞻，但仍需关注下游 Server 兼容性回归。

---

> 提示：以上数据基于 2026-10-11 当天 GitHub 公开事件快照整理，若需进一步下钻某一 Issue 或 PR 的完整讨论线程，可继续告知。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

今日 Gemini CLI 社区动态以 **Subagent 系统稳定性** 和 **性能优化** 为主线。Subagent 误报 GOAL 成功、Generalist agent 无限挂起等 P1 级 Bug 持续引发讨论；同时，社区贡献的多个性能优化 PR（数组操作线性化、转录索引缓存）大幅提升了核心路径的吞吐量。安全方面，Windows 子进程参数注入漏洞修复 PR 已合并。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 为什么重要 |
|---|-------|--------|------|-----------|
| [\#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后报告 GOAL 成功，掩盖中断 | **P1** | 13 | 严重的可靠性问题：subagent 触达最大轮次后仍报成功，隐藏中断状态，破坏调试体验 |
| [\#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist agent 挂起 | **P1** | 8 | 👍 8 票，社区强烈共鸣：简单操作（如创建文件夹）可挂起一小时，提示词中明确禁用子代理可规避 |
| [\#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 通过 Zero-Dependency OS 沙箱化与执行后意图路由 | **P2** | 9 | 利用 Gemini 3 模型的原生 bash 训练优势，在不牺牲安全性的前提下提升代码探索效率 |
| [\#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST 感知文件读取、搜索与映射影响评估（EPIC） | **P2** | 7 | 探索 AST-aware 工具能否减少 token 噪声、提高读取精度，是 Agent 效率提升的关键方向 |
| [\#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 不主动使用 skills 与 sub-agents | **P2** | 7 | 即便有匹配的 skill，模型也很少主动调用，反映出 skills 描述或触发机制的不足 |
| [\#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | **P1** | 4 | Linux 桌面用户（Wayland）的关键路径阻断；Termination Reason 仍误报为 GOAL |
| [\#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 忽略 settings.json 覆盖（如 maxTurns） | **P2** | 4 | `AgentRegistry` 正确读取配置但 BrowserAgent 未应用，导致配置覆盖失效 |
| [\#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent 会话接管与锁恢复弹性增强 | **P3** | 4 | "fail-fast" 策略在持久化会话模式下易被孤立进程卡死，需要自动接管 |
| [\#21000](https://github.com/google-gemini/gemini-cli/issues/21000) | 使用原生文件工具维护任务跟踪器 | **P3** | 4 | 与 WriteToDo 改革相关，探讨用文件工具替代内存任务跟踪 |
| [\#20079](https://github.com/google-gemini/gemini-cli/issues/20079) | `~/.gemini/agents/` 中的符号链接无法识别为 agent | **P2** | 4 | 影响 dotfiles 仓库用户，符号链接是常见的 agent 共享方式 |

---

## 🛠 重要 PR 进展

| # | PR | 类型 | 关键内容 |
|---|----|------|---------|
| [\#29708](https://github.com/google-gemini/gemini-cli/pull/29708) | `fix(acp)` | 修复 | ACP `session/load` 完成历史回放后再响应，避免通知错位到下一轮 prompt |
| [\#29510](https://github.com/google-gemini/gemini-cli/pull/29510) | `fix(editor)` 安全 | ✅ 已合并 | **Windows 子进程参数注入加固**：引入 `quoteCmdArg` 处理 `shell:true` 调用 |
| [\#29517](https://github.com/google-gemini/gemini-cli/pull/29517) | `perf(core)` | ✅ 已合并 | `truncateHistoryToBudget` 数组重建线性化，消除 O(n²) `unshift` |
| [\#29515](https://github.com/google-gemini/gemini-cli/pull/29515) | 性能 | ✅ 已合并 | 状态快照 ID 查找改用 `Set`，本地基准 10000 目标从 **291.95ms → 10.26ms**（约 28×） |
| [\#29516](https://github.com/google-gemini/gemini-cli/pull/29516) | 性能 | ✅ 已合并 | 转录 turn 索引缓存为 `Map`，10000 节点 **414.20ms → 17.91ms**（约 23×） |
| [\#29512](https://github.com/google-gemini/gemini-cli/pull/29512) | 性能 | ✅ 已合并 | 聊天压缩历史重建线性化，10000 条混合消息 **18.97ms → 5.01ms** |
| [\#29622](https://github.com/google-gemini/gemini-cli/pull/29622) | `fix(core)` | 修复 | `tildeifyPath` 限定到路径段边界，避免兄弟目录被错误显示为 `~` 下属 |
| [\#29621](https://github.com/google-gemini/gemini-cli/pull/29621) | `fix(core)` | 修复 | 保留 subagent 多模态工具响应：与 function response 并列的图片数据不再被丢弃 |
| [\#29709](https://github.com/google-gemini/gemini-cli/pull/29709) | `fix(vscode-ide-companion)` | 修复 | VSCode `activate()` 中多余的逗号表达式导致 disposables 未注册（修复 #27790） |
| [\#29703](https://github.com/google-gemini/gemini-cli/pull/29703) | `fix(core)` | 修复 | 原子写入临时文件名限制在 NAME_MAX（255 字节）内，避免长文件名 `ENAMETOOLONG` |

---

## 📈 功能需求趋势

通过聚类分析当前讨论热度，呈现如下方向：

1. **🧠 Subagent 系统重构** — 是当前最热的讨论域：状态报告透明化（#22323）、并行协作与共享内存（#18287）、subagent trajectory 可见化（#22598）、本地子代理 Sprint 1（#20195）
2. **🌳 AST-aware 代码理解** — 形成 EPIC 系列（#22745/22746/22747），评估 AST grep、tilth、glyph 等工具对 Agent 精度与 token 效率的提升
3. **🛡 沙箱与执行安全** — Zero-Dependency OS Sandboxing（#19873）、阻止 Agent 破坏性行为（#22672）、`get-shit-done` hook 崩溃（#22186）
4. **⚡ 上下文与 Token 优化** — Tactful Extraction（#19561）、`tildeifyPath`（#29622）、`truncateHistoryToBudget` 性能（#29517）
5. **🌐 浏览器代理成熟化** — Wayland 兼容（#21983）、settings.json 覆盖（#22267）、锁恢复弹性（#22232）
6. **💾 持久化任务跟踪** — 替代 WriteToDo 的文件 CRUD（#18836）、任务跟踪器原生文件化（#21000）
7. **🖥 IDE 集成** — VSCode companion 资源管理修复（#29709）、ACP 协议合规性（#29708）

---

## 💬 开发者关注点（痛点 & 高频需求）

**主要痛点：**

- **Subagent "沉默失败"**：状态报告不准确、挂起无超时、Termination Reason 误导，是开发者调试体验的最大障碍（#22323、#21409、#21983）
- **Skills 与 Subagents 自动触发弱**：模型缺乏对自身可调用工具的"自我认知"，需要显式提示才能使用（#21968、#21432）
- **Linux/Wayland 兼容**：浏览器代理等 GUI 子进程在 Wayland 下失败，Linux 用户长期受影响（#21983）
- **工具规模硬限制**：>400 个工具触发 400 错误，AgentRegistry 缺少智能过滤（#24246）
- **跨平台路径与文件名**：长文件名在原子写入阶段 `ENAMETOOLONG`、tilde 路径误显示、Windows 子进程命令注入（#29703、#29622、#29510）
- **Bug 报告上下文缺失**：`/bug` 不携带 subagent 上下文，难以诊断子代理问题（#21763）

**高频改进诉求：**

- 性能：核心循环（上下文压缩、状态查找、渲染）的 O(n²) 优化
- 安全：模型自主选择 shell 命令时增加破坏性命令阻拦
- 自描述能力：让它能正确讲解自己的 CLI flags、快捷键与工作流
- 评估稳定性：内部 evals 一致性（"bleed"）与失败用例的可追踪性（#23313、#23166）

---

*日报基于 github.com/google-gemini/gemini-cli 公开数据生成，覆盖范围：过去 24 小时更新的 Issues 与 PRs。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>



</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-10-11**

---

## 📌 今日速览

今日 Kimi CLI 仓库整体活跃度处于低位区间，过去 24 小时内 **无新版本发布、无 Issue 更新**，仅有一条文档类 PR #1718 处于关闭状态。本次 PR 主要完善了文档体系，新增 AGENTS.md 专题页、安全边界说明及首页导览，属于面向新用户的使用引导优化。社区整体进入稳定维护期，提交节奏明显放缓。

---

## 🚀 版本发布

**无新版本发布。** 建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 🔥 社区热点 Issues

过去 24 小时内 **无活跃 Issue**。当前仓库处于静默期，可能原因包括：

- 项目主线功能趋于稳定，常规 Bug 已被收敛处理；
- 团队可能正在内部筹备较大版本迭代（如 MCP 协议、新模型适配等），暂未公开发布路线图；
- 月之暗面近期资源重心或向 K2 系列模型 / 其他产品线倾斜。

如需了解历史高频议题，可查阅 [Issues 列表](https://github.com/MoonshotAI/kimi-cli/issues) 中 `label: bug` 与 `label: enhancement` 的存量内容。

---

## 🔧 重要 PR 进展

| # | PR | 状态 | 内容摘要 |
|---|----|------|---------|
| #1718 | [docs: 新增 AGENTS.md 专题页、安全边界说明和首页导览](https://github.com/MoonshotAI/kimi-cli/pull/1718) | ✅ CLOSED | 新增 `docs/{zh,en}/customization/agents-md.md` 专题页，明确 AGENTS.md 与 README.md 的差异、加载行为（仅工作目录、大写文件名优先）、`/init` 生成逻辑、推荐写入内容及更新时机。 |

**本次 PR 的价值分析：**

1. **降低新手入门门槛** —— AGENTS.md 是 Kimi CLI 实现"项目级 Agent 行为定制"的关键配置文件，但此前文档分散，新用户难以形成完整认知；
2. **明确安全边界** —— 体现团队对 Agent 自动执行风险的重视，向用户传达"显式声明 > 隐式推断"的设计哲学；
3. **国际化同步** —— 中英双语文档同步发布，符合开源项目国际化最佳实践。

---

## 📈 功能需求趋势

由于今日无新增 Issue 数据，无法实时提炼需求热度。结合历史观察，社区长期方向主要集中在：

- **Agent 行为定制**：AGENTS.md、`.clinerules`、自定义系统 Prompt 等机制；
- **工具与 IDE 集成**：VS Code / JetBrains 插件、远程开发（SSH / Devcontainer）适配；
- **模型能力扩展**：上下文窗口、MCP 协议、多模态输入；
- **性能与稳定性**：流式响应、长任务取消、本地缓存命中率。

建议持续关注 [enhancement 标签](https://github.com/MoonshotAI/kimi-cli/issues?q=is%3Aissue+label%3Aenhancement) 的演化。

---

## 💬 开发者关注点

基于本次仅有的文档类 PR，可推断团队当前的关注重心：

1. **文档完备性 > 新功能开发** —— 优先收敛使用文档质量，反映项目进入打磨期；
2. **Agent 安全性认知** —— 主动撰写"安全边界"文档，说明团队已识别 Agent 自动化执行中的潜在风险，并希望通过文档降低用户误用概率；
3. **路径行为规范化** —— "仅工作目录、大写优先"等加载规则的明文化，是为后续可能的多层级继承（如用户级 → 项目级 → 子目录级）预留扩展空间。

---

## 📊 数据小结

| 指标 | 数值 |
|------|------|
| 新版本发布 | 0 |
| Issue 更新 | 0 |
| PR 更新 | 1（已关闭） |
| 整体活跃度 | 🔵 低 |

> 📅 **明日建议关注**：若团队已开启下一迭代周期，预计将出现批量 Issue / PR 更新，可重点追踪 `main` 分支 commit 频率变化。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-11**

---

## 1. 今日速览

OpenCode 发布 v1.19.0，正式开启 **OpenCode 2 主版本升级通道**（`opencode upgrade --major`），同时修复了 PTY 连接校验与 OpenAI `ultrafast` 服务层级支持。社区当天聚焦两大议题：一是 v2 安装体验（curl 安装器被报告"痛苦般缓慢"）与 TUI 主题在透明背景下出现全屏黑色蒙层；二是大量 V1 时代遗留 bug 被集中关闭，多个关键 PR 已登陆 V2 主线，社区进入 V1 → V2 迁移收尾期。

---

## 2. 版本发布

### v1.19.0（🔗 [Release](https://github.com/anomalyco/opencode/releases/tag/v1.19.0)）

**Core**
- ✅ 新增 `opencode upgrade --major` 命令，支持直接升级到 **OpenCode 2**
- 🐛 允许 OpenAI `ultrafast` 服务层级
- 🐛 PTY 连接在检查存在性前先校验 origin 和 ticket

**TUI**
- ✅ 新增 `/update` 斜杠命令，用于安装 OpenCode 更新

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论 | 重要性 |
|---|---|---|---|---|
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | TUI 中频繁出现 "exiting loop" 消息 | ✅ CLOSED | 23 | 🔥 长期困扰用户的 TUI 体验问题，热度最高 |
| [#36413](https://github.com/anomalyco/opencode/issues/36413) | `opencode run` 在工具调用自动拒绝且无最终消息时空 stdout 退出 0 | 🟢 OPEN | 9 | ⚠️ 影响自动化脚本与 CI 集成的可靠性 |
| [#53839](https://github.com/anomalyco/opencode/issues/53839) | 项目级 `.opencode/` 目录永远不会被发现 | ✅ CLOSED | 7 | 🔧 影响自定义 subagent 与项目级配置加载 |
| [#53702](https://github.com/anomalyco/opencode/issues/53702) | v2 官方 curl 安装器安装耗时数分钟 | 🟢 OPEN | 5 | 🚀 直接影响新用户入门体验，275MB/s 带宽下却只能跑出分钟级 |
| [#39181](https://github.com/anomalyco/opencode/issues/39181) | 多 TUI 共享 server 时事件串目录 | ✅ CLOSED | 5 | 🐛 多人协作/多工作区场景的并发 bug |
| [#41234](https://github.com/anomalyco/opencode/issues/41234) | 单个非函数 named export 会静默禁用整个插件 | ✅ CLOSED | 4 | 🧩 插件作者易踩的陷阱，错误被吞掉无任何提示 |
| [#54420](https://github.com/anomalyco/opencode/issues/54420) | 透明主题下模态框全屏黑色蒙层 | 🟢 OPEN | 3 | 🎨 主题系统一致性 bug，已有配套 PR 修复 |
| [#41751](https://github.com/anomalyco/opencode/issues/41751) | server/web 模式下 git 项目恰好丢 2 个 skill | ✅ CLOSED | 3 | 🔍 静默丢资源且难复现 |
| [#41828](https://github.com/anomalyco/opencode/issues/41828) | v2 API 缺口阻碍第三方客户端 | ✅ CLOSED | 3 | 🛠️ 生态扩展性关键问题 |
| [#54220 / #54237 / #54238 / #54229](https://github.com/anomalyco/opencode/issues/54238) | 待关闭分诊：ACP 状态错误、Kimi 上游 502、桌面端 reasoning tooltip 错误 | ✅ CLOSED | 2 each | 📋 当天批量清理的待分诊 issues |

---

## 4. 重要 PR 进展

| # | PR | 关键变更 |
|---|---|---|
| [#54434](https://github.com/anomalyco/opencode/pull/54434) | `fix(tui)` 停止音频输出 | TUI V2 音频播放在没有活跃声音时正确停止，避免长时间运行后音频卡顿 |
| [#54430](https://github.com/anomalyco/opencode/pull/54430) | `feat(core)` 模型无关的 agent effort 覆盖 | agent 可独立配置 reasoning effort，不再受限于具体模型 |
| [#54433](https://github.com/anomalyco/opencode/pull/54433) | `feat(tui)` 模态蒙层主题 token | 新增 `background.backdrop` 主题 token，配合 #54420 修复透明主题 |
| [#54396](https://github.com/anomalyco/opencode/pull/54396) | `fix(core)` SQLite 锁超时重试 | 借鉴 #47567 思路，将 SQLITE_BUSY 改用 jittered backoff，避免一个进程的写操作 kill 另一个进程的 prompt |
| [#54426](https://github.com/anomalyco/opencode/pull/54426) | `feat(app)` iOS 语音委托渲染 | iOS 应用的语音请求在桌面/Web 端正确显示为 Voice 消息 |
| [#54416](https://github.com/anomalyco/opencode/pull/54416) | `feat(core)` /loop 命令 | 支持动态重复执行命令（固定次数或条件触发），对应 #41907 |
| [#51482](https://github.com/anomalyco/opencode/pull/51482) | `fix(core)` AI SDK v4 媒体输入 | 修复 AI SDK v4 provider 的 tool image 序列化问题（修复 #50960） |
| [#54427](https://github.com/anomalyco/opencode/pull/54427) | `refactor(session-ui)` 复用 markdown 节点 | 流式输出 delta 时复用未变更节点，提升渲染性能（#54305） |
| [#51890](https://github.com/anomalyco/opencode/pull/51890) | `fix(core)` 限制 shell 输出 | 关闭 #45099，避免 session shell 输出无界灌入下一次模型请求 |
| [#52765](https://github.com/anomalyco/opencode/pull/52765) | `feat(core)` Claude Code 工具钩子 | 运行 `~/.claude/settings.json` 中的 `PreToolUse`/`PostToolUse`/`SessionStart` 钩子，提升迁移到 OpenCode 的兼容性 |

---

## 5. 功能需求趋势

通过对当日所有 Issues 提炼，社区主要诉求集中在以下方向：

### 🟦 Claude Code 兼容迁移（热度：🔥🔥🔥🔥🔥）
围绕 Claude Code 的 `/loop`、`/verify`、`/simplify`、`/btw`、`/context`、`/tree` 等斜杠命令的批量功能请求（#41907-41912），加上 Claude Code tool hooks 支持（#52765）。明显是用户从 Claude Code 迁移时的对标需求。

### 🟦 TUI/UI 体验优化（热度：🔥🔥🔥🔥）
主题系统透明背景适配（#54420）、多 TUI 事件隔离（#39181）、Markdown 流式渲染性能（#54427）、worktree 工作区切换（#36048）、bell ANSI 反馈（#36472）。

### 🟦 桌面端 & 多平台（热度：🔥🔥🔥）
Electron 桌面端插件加载（`bun:sqlite` 缺失，#41817）、iOS 语音消息跨端渲染（#54426）、Electron 启动路径优化（#54317）。

### 🟦 性能与稳定性（热度：🔥🔥🔥）
SQLite 锁竞争（#54396）、shell 输出无界（#51890）、curl 安装器速度（#53702）。

### 🟦 第三方生态与文档（热度：🔥🔥）
v2 API 完整性（#41828）、Lumify MCP 文档（#41822）、Malayalam README 翻译（#54422）。

---

## 6. 开发者关注点

整理当天 Issues 中的高频痛点：

1. **🚨 静默失败问题（最严重）**
   多个关键 issue 涉及错误被吞、用户无感知：插件加载失败（#41234）、工具调用误报 completed（#54238）、`.opencode/` 项目配置不被发现（#53839）、web 模式下 2 个 skill 静默丢失（#41751）。开发者强烈呼吁增加可见的诊断信号。

2. **🔐 权限系统连环问题**
   来自 @teran-netizen 的系列报告揭示了严重的权限系统 bug：UI 设置被 `.opencode.json` 静默覆盖（#41846）、"allow always" 重启后丢失导致卡顿（#41823）、同一秒内的重复权限提示未去重，最多连续 5 个（#41849），单次运行可累积生成 3270 条权限提示。

3. **🚀 安装与升级体验**
   v2 curl 安装器在 275MB/s 带宽下仍耗时数分钟（#53702），与 npm 直连 0.3s 形成强烈反差。`opencode upgrade --major` 的引入正是为此类体验问题而设计。

4. **🤖 Provider 兼容矩阵**
   GitHub Copilot OAuth 登录成功但 provider 未注册（#41820）、自定义 OpenAI-compatible provider 上下文限制缺失（#54398）、Kimi 2.7 上游 502（#54237）—— Provider 接入仍是高频踩坑点。

5. **🔒 安全与隐私**
   #41808 报告通过 PowerShell 间接读取 `.env` 文件内容的安全问题，开发者关注 sandbox 与敏感文件保护边界。

6. **🔄 V1 → V2 迁移**
   大量 PR 标题包含 `[2.0]`、`V2 follow-up`、`Port of #xxx to v2`（如 #54416、#51890、#54396、#54398），说明 V2 是当前开发的绝对主线，但 V1 用户仍被大量遗留问题困扰。

---

> 📌 **小结**：今天 OpenCode 处在 V1 收尾 + V2 主推的过渡期。开发者最关心的是**错误可观测性**与**Claude Code 兼容迁移路径**，官方动作（`upgrade --major`、Claude Code hooks、SQLite 重试、TUI 主题 token）正在积极回应这些诉求。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-11

> 数据来源：`github.com/badlogic/pi-mono` · 统计窗口：过去 24 小时

---

## 📌 今日速览

今日社区活跃度较高，过去 24 小时有 **49 条 Issue** 与 **7 条 PR** 更新，无新版本发布。社区关注点高度集中在 **TUI 渲染稳定性**（多平台光标/图像/转义序列异常）与 **网络/Provider 韧性**（OAuth 403、连接超时无重试）方向。两个近期高热度 Issue (#10031 Anthropic "Working..." 卡死、#7547 Windows 使用情况调研) 已在本日得到维护者反馈或关闭，体现维护团队对核心体验问题的快速响应。

---

## 🚀 版本发布

**无新版本发布。**

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 重要性 |
|---|-------|-----|--------|
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | **[Windows] Windows 使用情况与问题收集** | 80 | 🟢 Open |
| [#10031](https://github.com/badlogic/pi-mono/issues/10031) | ESC 中断思考后 Pi 卡在 "Working..." | 28 | 🔴 Closed |
| [#5291](https://github.com/badlogic/pi-mono/issues/5291) | Anthropic 订阅下 Session 偶发 hang 在 "working" | 11 | 🔴 Closed |
| [#8036](https://github.com/badlogic/pi-mono/issues/8036) | 大 diff 渲染导致 Edit 工具崩溃 TUI | 9 | 🟢 Open |
| [#10256](https://github.com/badlogic/pi-mono/issues/10256) | 0.99.x 终端颜色查询泄漏进 prompt（mintty） | 9 | 🟢 Open |
| [#10605](https://github.com/badlogic/pi-mono/issues/10605) | ChatGPT/OpenAI OAuth 403 订阅共享问题 | 9 | 🟢 Open |
| [#9512](https://github.com/badlogic/pi-mono/issues/9512) | GPT-6 Astra max 推理下压缩触发 token 上限 | 7 | 🟢 Open |
| [#3896](https://github.com/badlogic/pi-mono/issues/3896) | 终端失焦后 TUI 光标仍处于激活态 | 6 | 🔴 Closed |
| [#9257](https://github.com/badlogic/pi-mono/issues/9257) | extractCursorPosition 残留重复 CURSOR_MARKER | 6 | 🟢 Open |
| [#10719](https://github.com/badlogic/pi-mono/issues/10719) | Bun 安装 pi + Node 运行扩展全部加载失败 | 4 | 🔴 Closed |

**为什么重要：**
- **#7547（80 评论）**：维护者 `petrroll` 发起的 Windows 体验调研帖，是评估后续原生打包与终端兼容性投入的重要依据。
- **#10031 & #5291**：两条都指向相同的"Working..."挂起症状，一个多月内多次复现，属典型会话生命周期问题，本次关闭意味着修复已落地。
- **#8036**：HTML 类长行场景下 ~14.5 MB diff 直接击穿 TUI 渲染，提示需要为大输出加上流式/截断保护。
- **#10605**：OpenAI ChatGPT Plus 订阅级 OAuth 403 错误反映上游政策收紧，与扩展 OAuth 流程的兼容性挑战。
- **#9512**：GPT-6 Astra 作为新模型代表首次暴露上下文压缩的 token cap 问题，是模型演进过程中的典型适配痛点。

---

## 🛠️ 重要 PR 进展（Top 10）

> 共 7 条 PR 更新，以下全部列出。

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#10789](https://github.com/badlogic/pi-mono/pull/10789) | 🔴 Closed | **SessionManager JSONL 写入系统调用合并**：把创建/重写时的多次 write 合并为单次 write，append 仍保持同步持久化。显著降低高频写入场景下的 syscall 开销。 |
| [#10784](https://github.com/badlogic/pi-mono/pull/10784) | 🔴 Closed | **新增 .deb/.rpm Linux 原生包构建**（v1）：直接关闭 #10783，让 Debian/RHEL 用户通过系统包管理器安装。 |
| [#10782](https://github.com/badlogic/pi-mono/pull/10782) | 🔴 Closed | **新增 .deb/.rpm Linux 原生包构建**（重复提案）：与 #10784 几乎同期重复提交，展示社区对该方向的需求热度。 |
| [#10726](https://github.com/badlogic/pi-mono/pull/10726) | 🔴 Closed | **修复 codemode 中 Node --watch 通知误识别**：当宿主进程启用 `node --watch` 时，依赖通知被误判为标量消息导致 sandbox 通信中断。修复 #10725。 |
| [#10751](https://github.com/badlogic/pi-mono/pull/10751) | 🟢 Open | **使用 pi.dev 配置 schema 作为标准 $id**：统一 models/settings/keybindings/theme 的 schema 来源，便于生态工具对齐。 |
| [#10774](https://github.com/badlogic/pi-mono/pull/10774) | 🟢 Open | **修复 herdr 中 Kitty 图像协议**：1.1.0 回归导致 herdr 面板图片显示失效，恢复 `images` 字段并保留 ghostty 检测路径。 |
| [#10766](https://github.com/badlogic/pi-mono/pull/10766) | 🔴 Closed | **扩展 abort 同 run 续跑能力**：`ctx.abort(continuation)` 支持丢弃部分响应后注入提醒继续同一次运行，避免队列任务滞留。 |

**功能/修复要点：**
- **性能优化**：#10789 聚焦写入路径 I/O 合并，是 SessionManager 在大型长会话下减少抖动的重要改进。
- **生态扩展**：#10751 推动 schema 标准化，#10784/10782 补齐 Linux 分发短板，二者都直接降低新用户接入门槛。
- **TUI 体验修复**：#10774 解决 herdr 图像回归，#10726 修复 codemode 在开发模式下的兼容性。

---

## 📈 功能需求趋势

从近 24 小时更新的 49 条 Issue 中提炼出以下社区重点方向：

| 方向 | 代表 Issue | 趋势信号 |
|------|-----------|---------|
| **🪟 Windows / 跨平台兼容性** | #7547, #10256, #10777 | mintty 转义序列、右键粘贴、编辑器鼠标选中删除等 Windows 专属问题集中爆发 |
| **🔌 Provider 网络韧性 & OAuth** | #10605, #10775, #10762, #10238 | OpenAI 403、GitHub Copilot 5s 硬超时、OpenAI 兼容端点连接静默断开成为新热点 |
| **🖼️ TUI 渲染稳定性** | #8036, #9257, #10788, #10769, #3896 | 大 diff、图像剪裁、焦点遮罩、光标残留四类问题叠加 |
| **📦 原生 Linux 分发** | #10783, #10786, #10782, #10784 | 同一日 4 条贴讨论 .deb/.rpm，社区对脱离 curl\|sh 的呼声强烈 |
| **🧩 扩展 API 增强** | #8023, #10639, #10767, #10766, #10751 | durable 自定义消息、ctx.abort 续跑、schema 标准化 |
| **🤖 新模型适配** | #9512, #10652 | GPT-6 Astra、OpenRouter 图像模型需要适配 chat completions 路由 |
| **🛠️ 工具/会话恢复** | #10785, #10758, #10411 | 动态启用工具恢复、Git 包 SHA 钉扎、durable 死锁 |
| **🔐 MCP 互操作 | #10281 | 希望复用 Claude Code 的 `.mcp.json` 配置 |

---

## 💬 开发者关注点（社区痛点）

1. **"Working..." 卡死是头号体验痛点**：#10031、#5291 等多条 Issue 指向 ESC 中断/Provider 异常时对话停摆，开发者不得不 `pi -c` 重连，影响长流程自动化。
2. **网络错误缺少可调参数**：#10775 指出 GitHub Copilot 5s 硬超时无重试、无进度、无 env override；#10762 进一步反映 headless `pi -p` 在 OpenAI 兼容端点静默断连时永不超时。
3. **大输出未做截断保护**：#8036 中 14.5 MB 的单次 diff 直接拖崩 TUI，#9512 中压缩流程撞 token cap 也未做兜底分块。
4. **终端兼容性碎片化严重**：mintty/ConPTY/WezTerm/VS Code/herdr 各自出现不同转义序列与鼠标协议行为，TUI 适配工作量大（#7547、#10256、#10777、#10769）。
5. **OAuth 流程对订阅策略变化脆弱**：OpenAI "subscription_sharing_user_not_eligible"（#10605）以及 GitHub Copilot 401/403 不自动续签（#10238）都提示认证层需要更强的 fallback 链路。
6. **扩展 API 不足以支撑复杂控制流**：开发者需要 abort 后同 run 续跑（#10767/#10766）、durable 消息发布 Promise（#8023）、自定义消息携带 system prompt（#10639）等更细粒度能力。
7. **Linux 分发体验期待改善**：重复提交的 #10782/#10784 表明不少用户希望摆脱 curl\|sh，使用系统包管理器追踪安装。

---

> 📅 *日报由 AI 自动汇总自 GitHub Issues/PR 数据，观点不代表官方立场。点击 Issue/PR 编号可跳转至原文。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

at the end (9 comments) - CLOSED
7. #13758 - OpenTUI dialogs escape region bottom edge (6 comments)
8. #13746 - H4f public task cancel and child task-event streams (5 comments)
9. #13847 - H4b follow-up: Harness crash blocks lead Session (5 comments)
10. #13785 - Multi-Agent API: agent-identity dimension (5 comments)
11. #13300 - Close H0c review follow-ups (5 comments) - CLOSED
12. #13787 - XML recovery repeats prefix scans (5 comments)
13. #13611 - LSP diagnostics deferred review findings (5 comments)
14. #13851 - Non-interactive mode delays result for auto-memory (4 comments) - P1
15. #13871 - Linux close/delete reprobes (4 comments) - CLOSED
16. #13723 - deferred #13599 review findings (4 comments)
17. #13865 - @ file completion corrupts search query (4 comments)
18. #13863 - AutoReconnectTransport retains replacement (4 comments)
19. #13861 - Python SDK can't start qwen.cmd on Windows (4 comments)
20. #12467 - LSP diagnostics reports clean after failed queries (4 comments) - CLOSED

**Top PRs (showing most recent activity):**
1. #13772 - fix(runtime): retain CSI mount identity
2. #13760 - feat(managed-agent): support WebShell session cwd changes
3. #13805 - feat(core): gate AutoSkill reviews on experience signals
4. #13729 - fix(session): reserve retained snapshot prompt identities - CLOSED
5. #13199 - fix(serve): stop renewing settled Hosted Shell grants
6. #13179 - fix(managed-agent): harden panel failure lifecycle - CLOSED
7. #13879 - docs(managed-agent): H4e-b2 team mailbox design
8. #13731 - fix(channels): preserve Markdown structure when splitting
9. #13748 - fix(acp-bridge): display declared Channel submissions
10. #13314 - fix(sdk-java): Close Hosted Harness review criticals from #12654
11. #13777 - feat(managed-agent): recover Hosted G3 parked turns
12. #13554 - feat(managed-agent): Collect retired stream-capture tool outputs - CLOSED
13. #13332 - fix(core): close Managed session correctness gaps - CLOSED
14. #13846 - feat(managed-agent): enable H4e-b1 team domains - CLOSED
15. #13776 - feat(core): Keep complete file reads on one opened source
16. #13681 - feat(web-shell): add Send now for queued mid-turn messages
17. #13682 - fix(managed-agent): reconcile approval delivery
18. #9305 - fix(ui): bottom-align short VP content
19. #11562 - fix(cli): keep one-shot system reminders out
20. #13878 - feat(web-shell): Add workspace file browser

Now let me categorize the trends:

**Major themes:**
1. **Managed Agent / Multi-Agent** - This is by far the dominant theme. Many issues and PRs relate to H0-H5 delivery stages (H4b, H4e, H4f, etc.)
2. **SDK improvements** - Java SDK, Python SDK, TypeScript SDK fixes
3. **WebShell enhancements** - file browser, cwd changes, Send now for queued messages
4. **XML tool-call recovery** - performance and correctness issues
5. **LSP diagnostics** - reliability fixes
6. **Performance** - token management, context overflow
7. **UI/UX** - bidi text, dialog escaping, file completion
8. **Cross-platform** - Windows support, Android

**Most important items to highlight:**
- The architecture proposal #12380 with 51 comments is clearly the biggest community discussion
- P1 issues like #13851 (non-interactive mode delays) and #13873 (wake pump race) need immediate attention
- New release v0.25.1-preview.2

Let me write the report in Chinese, keeping it concise and professional.</think>

# Qwen Code 社区动态日报 · 2026-10-11

---

## 📌 今日速览

今日 Qwen Code 社区围绕 **Managed Agent / Multi-Agent 架构演进** 持续高密度讨论，H4 系列多个子切片（task cancel、wake pump race、child relay）集中涌现 PR 与跟踪 Issue。同时 `v0.25.1-preview.2` 已发布，包含 Remote Host 绑定的关键修复。WebShell、SDK（Java / Python / TypeScript）和 LSP 诊断也是今日的明显热点。

---

## 🚀 版本发布

### v0.25.1-preview.2
- **#13430** `fix(agents): replace selected remote Hosts without losing bindings` —— 修复了在切换 Remote Host 时丢失 bindings 的问题，是 Managed Agent 路径上的稳定性修复。
- 另有针对 #12693 的合并后回归测试相关修订。

### v0.25.0-nightly.20261010.9763580b84
- 同步合入上述 #13430，便于在 nightly 通道率先验证。

> 建议：升级到 preview.2 以获得稳定的 Remote Host 切换体验，nightly 仍可继续跟踪 Managed Agent 后续切片。

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 |
|---|---|---|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | **Managed Agent 双路径架构与分阶段交付提案**（51 评论） | 整个 H 系列交付蓝图的总览，定义 TypeScript agent loop 不变、模型推理与工具环境解耦、Session 持久化所有权等。是当前最受讨论的 RFC 级 Issue，多位作者持续维护。|
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | **每日依赖 CVE 审计失败**（17 评论） | GitHub Actions 定时任务失败，提示可能存在新增高危漏洞或 npm 审计接口不稳，值得供应与安全团队关注。|
| [#13492](https://github.com/QwenLM/qwen-code/issues/13492) | **XML 工具调用恢复丢失带引号工具标记的外部调用**（9 评论） | PR #13515 已修复内部调用，外层调用恢复（PR #13579）尚未合并，仍在跟踪。|
| [#12333](https://github.com/QwenLM/qwen-code/issues/12333) | **Token 优化缺少"召回与任务成功"门禁**（9 评论） | 强调所有 token 相关改动需有"节省 X、损失 Y"的对照基准，否则最大节省项无法安全打开，是 #12028 umbrella 的关键缺失闭环。|
| [#13758](https://github.com/QwenLM/qwen-code/issues/13758) | **OpenTUI 短终端对话框底部溢出**（6 评论） | `#12559` 的延续，三种对话框仍突破 region 下沿，且 `DialogFrame` 的 flexShrink 行为仍未量化。|
| [#13746](https://github.com/QwenLM/qwen-code/issues/13746) | **Managed-Agent H4f：公共 task cancel + 子任务事件流**（5 评论） | 明确归属 #13505 切片图的 H4f，与 H5 共享，影响公共 API 表面。|
| [#13847](https://github.com/QwenLM/qwen-code/issues/13847) | **H4b follow-up：Harness 崩溃导致 lead Session 卡死**（5 评论） | 纯后台启动或 #13846 team call 触发的批次无可观测 Turn 状态，重启后会阻塞。|
| [#13785](https://github.com/QwenLM/qwen-code/issues/13785) | **Multi-Agent API：公开合约上的 agent-identity 维度**（5 评论） | 旨在让多智能体执行"可归属、可树形化、可中断"，属于合约级而非新服务请求。|
| [#13851](https://github.com/QwenLM/qwen-code/issues/13851) | **🔴 P1：非交互模式的 result 要等托管自动记忆任务结束**（4 评论） | headless/SDK 用户在模型回复后还要等 40s~5min，TUI/ACP 即时返回。影响所有自动集成场景。|
| [#13873](https://github.com/QwenLM/qwen-code/issues/13873) | **🔴 P1：H4b follow-up wake pump 与 takeover continue 竞态**（3 评论） | 用户 Turn 停在 `await_agent` 时若 Harness 重启且父 journal 已有 wake input，Session 永久阻塞。|

---

## 🛠️ 重要 PR 进展

| # | PR | 功能 / 修复 |
|---|---|---|
| [#13777](https://github.com/QwenLM/qwen-code/pull/13777) | **feat(managed-agent): recover Hosted G3 parked turns** | 让长时间停摆的 Hosted G3 turns 可恢复，避免因网络/Harness 重启导致的会话丢失。|
| [#13760](https://github.com/QwenLM/qwen-code/pull/13760) | **feat(managed-agent): WebShell 支持 Session cwd 切换** | 同 Workspace 内可切换目录，保留 Session / 历史 / 草稿，并实现 Java BFF 的 cwdChange capability。|
| [#13681](https://github.com/QwenLM/qwen-code/pull/13681) | **feat(web-shell): 队列中消息支持立即发送** | 用户可在 Turn 运行中决定"立即发送"已输入消息，影响所有多人/手机端交互体验。|
| [#13878](https://github.com/QwenLM/qwen-code/pull/13878) | **feat(web-shell): 工作区文件浏览器与预览** | 右侧 Files 面板展示工作区树，选中后可在左侧预览 Markdown/HTML/图片/源码，填补 WebShell 长期缺口。|
| [#13805](https://github.com/QwenLM/qwen-code/pull/13805) | **feat(core): AutoSkill 评审仅在经验信号触发** | 用"已接受的同工具失败恢复/中段用户引导"或累计调用量做门槛，避免低质量评审。|
| [#13199](https://github.com/QwenLM/qwen-code/pull/13199) | **fix(serve): 停止续期已落定的 Hosted Shell 授权** | 释放/清理已确定的 Shell 授权，但保留 binding 以便失败清理仍有效。|
| [#13731](https://github.com/QwenLM/qwen-code/pull/13731) | **fix(channels): 钉钉/企业微信 Markdown 拆分保结构** | 在 ~3,800 字符处按 Markdown 结构拆分，最大 20,000 字符；防止代码块/表格被切断。|
| [#13772](https://github.com/QwenLM/qwen-code/pull/13772) | **fix(runtime): 跨目录解析保留 CSI mount 身份** | 让 boot-v3 worker 在多次 mount 观察间保留根 fd，修复相对路径解析的副作用。|
| [#13682](https://github.com/QwenLM/qwen-code/pull/13682) | **fix(managed-agent): 审批交付与会话标题并发协调** | 在 dispatcher attachment cache 丢失后恢复已接受答案，防止 Harness-disabled replica 抢占 pending 交付。|
| [#13314](https://github.com/QwenLM/qwen-code/pull/13314) | **fix(sdk-java): 关闭 Hosted Harness #12654 的 13 条复审结论** | 合入 11 项 Critical + 2 项 Minor，并闭环本 PR 第二轮的复审结果，是 Java SDK 稳定性里程碑。|

---

## 📈 功能需求趋势

1. **Managed Agent / Multi-Agent 体系（绝对主线）**
   - 阶段切片 H0c → H4a/b/c/d → H4e-b1/b2 → H4f 密集推进，覆盖 contract、runtime、websocket、child relay、mailbox、team domains 等多个维度。
   - "agent 身份在公开合约上的可归属性"（#13785）成为下一阶段 API 设计焦点。

2. **WebShell 工作流增强**
   - 浏览器文件预览（#13878）、cwd 切换（#13760）、队列消息立即发送（#13681）三轮迭代，指向"轻量云端 IDE"形态正在成型。

3. **SDK 跨语言一致性**
   - Java SDK（#13314）、Python SDK（#13861 Windows qwen.cmd）、TypeScript SDK（#13863 reconnect）几乎同步推修，反映桌面/服务化集成的需求爆发。

4. **工具调用稳定性与性能**
   - XML 工具调用恢复的恢复深度（#13492 / #13579）、大响应下重复前缀扫描的性能（#13787）、LSP 诊断在失败查询下报"干净"（#12467 / #13611）等，是开发体验层的核心痛点。

5. **长上下文与 token 经济性**
   - 反应式压缩（#13876）、bench 缺失门禁（#12333）、读缓存失效与持久记录偏差（#13723）共同指向"上下文工程"成为下一阶段的关键基础设施投资。

6. **平台与多端体验**
   - Android 阶段 2 收尾记录（#13111）、macOS/Apple Silicon 上的 RTL/LTR 双向文本（#13837）、终端 OSC 7501 状态协议（#13870）。

---

## 🧑‍💻 开发者关注点

- **自动记忆延迟正成为 SDK 集成的首要摩擦**：`#13851`（P1）反映出 headless 消费者最在意的就是"模型结果出现之后还要等多久才拿到"，这是落地自动化的最大隐性成本。
- **竞态与崩溃恢复是 multi-agent 上线前的硬伤**：`#13847`、`#13873`、`#13875` 集中揭示 Harness 重启 + child 调度组合下的多种死锁路径，团队讨论已转向"按 PR 显式 close 受影响会话"。
- **协议与契约对齐**：从 child 结果中继多出的 `"\n"`（#13874）到 compaction 模型 ceiling 无 scope（#13876），开发者反复强调"协议字段需要携带语义边界"，否则埋雷。
- **跨平台 starter 体验**：Python SDK 在 Windows 上找不到 `qwen.cmd`（#13861）以及 Android 端导出 UX（#13111）显示官方对"开箱即跑"仍有明显短边。
- **双向 Unicode 与可访问性**：`#13865`（@ 完成）与 `#13837`（Mixed RTL/LTR）指向同一类根本问题——补字符/双向隔离没有进入 UI 计算，未来桌面客户端的国际化是绕不过去的工程债。
- **夜间 CI 噪音**：依赖 CVE 审计连续失败（#13078）需要尽快给出 SOP，否则 PR 容易被审计 worker 误阻断。

---

*数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 报告生成时间：2026-10-11*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-11** · 数据源：github.com/Hmbown/DeepSeek-TUI

> 注：本期数据中的 Issue/PR 编号（#58xx、#69xx）实际指向 codewhale-hq/Codewhale 仓库，与查询主题存在关联引用关系。下文以仓库实际内容为准进行呈现。

---

## 1. 今日速览

过去 24 小时仓库活跃度集中于 **v0.10.x 收尾与 v0.10.2 文档/UX 修缮**：主线围绕 **runtime/TUI crate 拆分的 RS-8、RS-9** 闭环落地，伴随多篇 dead_code 清理与 Windows 平台兼容性补丁。同时社区集中反馈了 **会话恢复失败**、**Plan 模式回归**、**Code mode 文档失同步** 等需要 v0.10.2 跟进的问题。

---

## 2. 版本发布

过去 24 小时无新 Release。最近的发布仍为已部署的 **v0.10.1**，当前主线变更（#6912、#6942、#6902、#6512、#6935、#6936）已为 **v0.10.2** 做准备。

---

## 3. 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 状态 | 为什么值得关注 |
|---|------|------|------|----------------|
| 1 | [#6953](https://github.com/codewhale-hq/Codewhale/issues/6953) | Windows 10 1607：v0.10.1 启动失败（0xC0000139） | OPEN | v0.10.1 升级即崩溃，属于 loader 级别问题，影响 Windows 老版本用户升级路径。 |
| 2 | [#6955](https://github.com/codewhale-hq/Codewhale/issues/6955) | >8 MiB 会话文档无法 resume / fork | OPEN | 揭示 journal 无上限导致"沉默拒绝"，需为会话文档大小给出可读错误或补救策略。 |
| 3 | [#6954](https://github.com/codewhale-hq/Codewhale/issues/6954) | 含 raw sub-agent handoff 的会话被拒绝恢复 | OPEN | 跨进程恢复协议边界缺陷，影响多 Agent 协作场景下的持久化可靠性。 |
| 4 | [#6912](https://github.com/codewhale-hq/Codewhale/issues/6912) | TUI：工作台中的终端面板（PTY 监控与输入） | CLOSED | 标志性 UX 改进——工作台可观察并交互模型的 PTY 会话，已合入 PR#6907。 |
| 5 | [#6942](https://github.com/codewhale-hq/Codewhale/issues/6942) | Code mode 文档与已发版默认不一致（v0.10.2） | CLOSED | en/zh 网站 + 文档仍写"off by default / 30 s"，与 gate 默认开启矛盾，属于产品体验一致性缺陷。 |
| 6 | [#6902](https://github.com/codewhale-hq/Codewhale/issues/6902) | Plan 模式：approve-and-switch 衔接缺失（v0.10.2） | CLOSED | v0.9.1 起缺失的长尾回归，文档修正即可；显示 v0.10.2 重视历史 UX 一致性。 |
| 7 | [#6512](https://github.com/codewhale-hq/Codewhale/issues/6512) | Goal turns 在 1,000 步截断；`max_steps=0` 非无限 | CLOSED | 涉及 turn_budget::resolve_max_model_steps 的语义修正，目标是让 goal 与普通 turn 对齐为 uncapped。 |
| 8 | [#5837](https://github.com/codewhale-hq/Codewhale/issues/5837) | Boat Computer 镜像适配 codewhale App Server | CLOSED | 创始人方向变更（Daytona → AWS Lambda microVM），computer 镜像需重建。 |
| 9 | [#5836](https://github.com/codewhale-hq/Codewhale/issues/5836) | Cloud dispatch：下线 legacy launcher，明确 Computer 契约 | OPEN | 决定 provider-neutral trait 边界，影响云端执行环境抽象层设计。 |
| 10 | [#6951](https://github.com/codewhale-hq/Codewhale/issues/6951) | 2026-10-10 安全扫描（bot） | OPEN | 自动化安全/依赖扫描日报，含 CodeQL 告警与 `CODEWHALE_SECURITY_PAT` 未配置的阻塞说明。 |

---

## 4. 重要 PR 进展（Top 10）

| # | 编号 | 标题 | 状态 | 内容要点 |
|---|------|------|------|----------|
| 1 | [#6950](https://github.com/codewhale-hq/Codewhale/pull/6950) | feat(plugins)：CLI 安装与内置 OAuth 登录 | OPEN | 承接 PR#6805 的受控 OAuth 提供方，补齐插件安装 CLI 与应用内登录流程。 |
| 2 | [#6952](https://github.com/codewhale-hq/Codewhale/pull/6952) | fix(workflow)：拒绝"自我阻塞"的 gate | OPEN | 修复 `role=implement & blocks_role=implement` 的死锁（参见 #6945），被调度时直接报错。 |
| 3 | [#6947](https://github.com/codewhale-hq/Codewhale/pull/6947) | fix(artifacts)：解析链接状态根，兼容 Windows junction | CLOSED | `/compact` 等工件路径在 junction 路径下报错，已通过解析链接状态根修复。 |
| 4 | [#6948](https://github.com/codewhale-hq/Codewhale/pull/6948) | fix(tui)：指明阻止 session 切换的工作项 | CLOSED | 优化切换会话时的报错信息——告知是哪个 turn/维护/后台任务阻塞。 |
| 5 | [#6943](https://github.com/codewhale-hq/Codewhale/pull/6943) | chore(tui)：移除 5 个模块的 blanket dead_code allow | OPEN | #5587 子任务，`cargo check` 验证各模块真实告警后再清理。 |
| 6 | [#6946](https://github.com/codewhale-hq/Codewhale/pull/6946) | chore：移除 30 处过期 dead_code allow | CLOSED | 用 `--force-warn dead_code` 验证后批量下线，整体收紧 lint 防线。 |
| 7 | [#6821](https://github.com/codewhale-hq/Codewhale/pull/6821) | build(deps)：rmcp 3.4.0 → 3.5.0 | OPEN | MCP Rust SDK 升级，关注 macro 修复与 API 兼容性。 |
| 8 | [#6824](https://github.com/codewhale-hq/Codewhale/pull/6824) | chore(deps)：encoding_rs 0.8.41 → 0.8.42 | CLOSED | 字符编码库补丁升级。 |
| 9 | [#6823](https://github.com/codewhale-hq/Codewhale/pull/6823) | chore(deps)：thiserror 2.0.20 → 2.0.21 | CLOSED | 修复泛型 unit variant 解析问题。 |
| 10 | [#6822](https://github.com/codewhale-hq/Codewhale/pull/6822) | build(deps)：rio-vt 0.5.26 → 0.5.28 | CLOSED | 终端虚拟化层依赖升级。 |

附：#6825（dtolnay/rust-toolchain bump）、#6826（uuid 1.26.0 → 1.27.0）亦于 24h 内合并，均为依赖基线维护。

---

## 5. 功能需求趋势

- **TUI / 工作台交互增强**：`#6912` 的 PTY 监控面板、`#6948` 的会话切换提示——社区期望 TUI 更"可观察、可控"。
- **会话持久化与恢复**： `#6954`、`#6955` 揭示 **会话文档/恢复协议**是当前最大可用性短板，需明确大小上限、sub-agent 交接规范。
- **Windows 平台一致性**： `#6953`（loader 失败）、`#6947`（junction 路径）显示 Windows 长尾问题仍频繁，需要把 junction / 老版本 Win10 列入发版前检查。
- **云端 Computer 抽象重构**： `#5837`、`#5836` 推进 provider-neutral 边界，目标是从 Daytona 转向 AWS Lambda microVM，简化托管模型。
- **插件/OAuth 体验**： `#6950` 推动"少一次终端跳转"的安装 + 登录闭环。
- **运行时 crate 拆分 / 工程治理**： RS-8、RS-9、#6943、#6946 共同表明项目进入"内部架构清理 + lint 收紧"密集期。
- **文档与产品默认同步**： `#6942`、`#6902` 提示文档、UI 文本存在历史包袱，需补"发版前一致性"工序。

---

## 6. 开发者关注点（痛点 / 高频需求）

1. **会话恢复失败缺乏可行动错误**：8 MiB 截断、sub-agent handoff 比对失败——开发者希望错误信息能给出"压缩 / 迁移 / 重新加载"等明确恢复手段。
2. **Windows 长尾兼容性**：从 loader 报错到 junction 路径处理，Windows 用户的"装机即崩"问题持续，是反馈高频项。
3. **gate / workflow 死锁语义**： `#6945`/`#6952` 暴露"role 与 blocks_role 自指"的反模式，开发者呼吁更早的静态校验。
4. **历史 UX 回归**：Plan 模式的 approve-and-switch、Code mode 默认值漂移——开发者更看重"行为不随小版本变动"，期待有显式的"行为变更日志"。
5. **依赖基线透明度**： 多个 dependabot 升级合并，开发者更关注 **rmcp / rust-toolchain** 这类核心依赖变更的发布说明与回归测试覆盖。
6. **安全 / 供应链扫描缺口**： `#6951` 指出 `CODEWHALE_SECURITY_PAT` 未配置导致 CodeQL 列表无法拉取，安全侧需要单独的接入令牌管理流程。

---

*日报生成基于 GitHub Issues / Pull Requests 过去 24 小时更新快照；如需对单条 Issue 跟踪进展，建议在 PR 评论中 @ 维护者并附最小可执行复现脚本。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*