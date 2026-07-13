# AI CLI 工具社区动态日报 2026-07-13

> 生成时间: 2026-07-13 02:08 UTC | 覆盖工具: 9 个

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
**数据日期：2026-07-13 ｜ 覆盖工具：9 个**

---

## 1. 生态全景

2026 年 7 月中旬的 AI CLI 工具生态呈现 **"成熟工具进入瓶颈期、新兴工具密集迭代"** 的二元结构：Claude Code 与 OpenAI Codex 这两个早期头部产品当日均无新版本，社区热度转向 IDE 集成、模型兼容等已暴露的存量痛点；而 OpenCode、Qwen Code、Pi 等后起之秀正以每周数十个 PR 的节奏推进架构级重构（v2.0 beta、daemon 化、Extension API）。**GPT-5.6 系列模型成为横跨多个工具的共同故障面**，**Subagent / MultiAgent 从概念走向生产可靠性的过程中暴露出大量生命周期缺陷**，**多 Provider 联邦与 token 级成本可观测性** 成为下一阶段产品差异化的核心战场。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 关键活跃领域 |
|------|------|------|------|------|
| **OpenCode** | ~50 | **50** | 0（v2.0 内测中） | 架构重构、GPT-5.6 集成 |
| **Qwen Code** | ~50+ | **~20+** | 0（连续 2 日 nightly 失败） | Daemon、Web Shell、Skill 生命周期 |
| **Gemini CLI** | ~50 | 10 | **1 nightly** | Subagent、Auto Memory、CVE 修复 |
| **OpenAI Codex** | ~50 | 5 | 0 | GPT-5.6 / Windows / MultiAgent V2 |
| **Claude Code** | ~50 | 3 | 0 | VS Code 扩展 / MCP / Fable 模型 |
| **Pi** | 42 | 9 | 0 | TUI v2 / Extension API / gpt-5.6 |
| **GitHub Copilot CLI** | 16 | 1 | 0 | TUI 回归 / Voice / 会话管理 |
| **DeepSeek TUI** | 3 | 7 | 0 | Anthropic 适配 / 多 Provider 计费 |
| **Kimi Code CLI** | **1** | 2 | 0 | Windows 兼容性 / TPD 配额 |

> **观察**：OpenCode 单日 PR 数（50）显著高于其他所有工具总和的近 1/3，反映其正处于 v2.0 架构重写的高强度阶段；Kimi Code CLI 与 DeepSeek TUI 活跃度处于低位，可能与周末或维护窗口期相关。

---

## 3. 共同关注的功能方向

以下需求方向在多个工具社区同步出现，具有跨工具的行业参考价值：

### 3.1 GPT-5.6 系列模型兼容性
- **涉及工具**：OpenAI Codex（#31814、#31870）、OpenCode（#36140，85 👍）、Pi（#6477、#6524、#6569）、Qwen Code（#6666）
- **共性诉求**：compaction 失败、404、reasoning summary 占位符渲染、transport 设置继承、低 verbosity

### 3.2 Windows 平台稳定性
- **涉及工具**：OpenAI Codex（#20214 卡顿、#21538 企业 MSI）、Claude Code（#15921 权限、#43477 Ctrl+C）、GitHub Copilot CLI（#4095 文件锁）、Kimi Code CLI（#2181 版本信息、#2350 非 UTF-8 解码）
- **共性诉求**：安装分发、文件锁、编码兼容、终端渲染

### 3.3 Subagent / MultiAgent 可靠性
- **涉及工具**：Claude Code（#69449 FleetView、#58812）、OpenAI Codex（#31814 MultiAgent V2、#25341 子线程污染）、Gemini CLI（#22323 MAX_TURNS 误判、#21409 永久挂起）、Pi（#5886 settlement 生命周期）
- **共性诉求**：状态上报准确性、终止原因区分、调度时序可见性

### 3.4 MCP 协议兼容性与插件健壮性
- **涉及工具**：Claude Code（#64654 GitHub MCP 缺 `version` 字段、#56872 IntelliJ ide MCP）、OpenCode（#24246 工具数 > 128 触发 400）
- **共性诉求**：协议版本字段、工具上限、官方插件质量

### 3.5 长上下文治理（Compaction / Microcompaction）
- **涉及工具**：Pi（#6477、#5463、#5886）、Qwen Code（#6762 Skill 生命周期、#6721 deferred tool 缓存前缀、#6788 microcompaction）、OpenCode（#36589 请求体上限保护、#36553 压缩后 token 不准）
- **共性诉求**：自动压缩的边界、缓存前缀污染、Skill 卸载

### 3.6 TUI / 终端渲染稳定性
- **涉及工具**：GitHub Copilot CLI（#4069 卡死、#4070 乱码、#3773 对比度）、Kimi Code CLI（#2350 编码）、OpenCode（#30068 CJK 乱码、#4283 剪贴板 8 个月未修）、Gemini CLI（#28370 Windows C-Dump）
- **共性诉求**：PTY 行为、CJK/编码、剪贴板、按键穿透

### 3.7 成本与 Token 可观测性
- **涉及工具**：Claude Code（#67609 Fable 100K 阈值、#77033 Extended Thinking 失控）、OpenAI Codex（#28224 SSD 写入 640 TB/年、#32640 wait 工具 50s 烧 token）、OpenCode（#36589、#14273 Zen 额度）、DeepSeek TUI（#4335/#4351 Provider 计费）
- **共性诉求**：cache write 计费、隐性循环消费、按 provider 路由的成本归因

---

## 4. 差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | DeepSeek TUI | Kimi Code |
|------|------|------|------|------|------|------|------|------|------|
| **核心架构路线** | MCP 联邦 | Azure + App + MultiAgent V2 | Subagent + Auto Memory | App/CLI/VS Code 三端联邦 | CodeMode + V2 重构 | Extension API + TUI v2 | Daemon + Web Shell | Provider 路由 | 单进程 CLI |
| **模型策略** | 自研 Fable 系列 | 自家 GPT-5.6 | Gemini 系列 | GitHub Copilot 后端 | 多 Provider 中转 | 多 Provider 中转 | Qwen + Grok 等 | 多 Provider + 自家路由 | Kimi |
| **目标用户** | 企业 + 个人开发者 | 企业 + Azure 客户 | Google Cloud 生态 | GitHub 生态重度用户 | 高级个人开发者 | 实验型/扩展开发者 | 企业 + 长跑部署 | 多模型尝鲜者 | 月之暗面用户 |
| **UI 优先级** | VS Code 扩展是主战场 | App 桌面端 + TUI | TUI 优先 | App/CLI/IDE 并行 | TUI + 新桌面端 | TUI 优先（v2 实验中） | Web Shell + CLI | TUI 单端 | TUI 单端 |
| **当前阶段** | 存量痛点修复 | 跨平台一致性补齐 | 高频小步快跑 | v1.0.70 回归修复 | 架构级重构 | 实验功能迭代 | Daemon 化深化 | Provider 联邦闭环 | 平台打磨 |

**关键

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-07-13 · 数据源：anthropics/skills*

---

## 一、热门 Skills 排行

按讨论密度、技术影响力和社区关注度综合排序：

### 🥇 #1298 — skill-creator 的 run_eval 全面修复
- **状态**：OPEN（2026-06-10 创建）
- **功能**：系统性修复 skill-creator 核心脚本——`run_eval.py` 在所有平台上 0% 召回率、触发检测逻辑、Windows 子进程读取、并行 worker 隔离
- **热点**：是当前社区最关键的技术债务，由 Issue #556 衍生，至少 6 个相关 PR 围绕同一根因（[#1099](https://github.com/anthropics/skills/pull/1298)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1261](https://github.com/anthropics/skills/pull/1261)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#361](https://github.com/anthropics/skills/pull/361)、[#362](https://github.com/anthropics/skills/pull/362)）。一旦合并，整个描述优化闭环才能正常工作。
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 #514 — document-typography（文档排版质量控制）
- **状态**：OPEN
- **功能**：防止 AI 生成文档的孤儿行（orphan）、寡头行（widow）、编号错位等常见排版缺陷
- **热点**：作者指出"这些问题影响 Claude 生成的每一个文档"——一个看似小众、实则全场景覆盖的痛点，社区反应热烈但等待 review 已超过 4 个月
- 🔗 https://github.com/anthropics/skills/pull/514

### 🥉 #83 — skill-quality-analyzer + skill-security-analyzer
- **状态**：OPEN（2025-11-06 至今，停留 8 个月）
- **功能**：两个元技能（meta-skill）—— 五维质量评估 + 安全审计，专门评估其他 Skills 的结构、文档、鲁棒性
- **热点**：与 Issue #492（34 条评论，安全信任边界）形成强呼应，社区急需"治理工具"来审核涌入的社区 Skill，但 PR 长期未合并
- 🔗 https://github.com/anthropics/skills/pull/83

### #1367 — self-audit（AI 输出自审质量门）
- **状态**：OPEN（2026-06-28 创建，最新）
- **功能**：先做机械性文件校验（声明的文件是否存在），再做四维推理质量审计（按损害严重度排序）。宣称"通用——任意技术栈、任意模型"
- **热点**：对应 Issue #1385（推理质量门管线提案），是社区近期最活跃的"质量治理"方向提案
- 🔗 https://github.com/anthropics/skills/pull/1367

### #1302 — color-expert（色彩专家）
- **状态**：OPEN（2026-06-10）
- **功能**：覆盖完整色彩知识体系——命名系统（ISCC-NBS、Munsell、XKCD、RAL）、色彩空间使用决策表（OKLCH/OKLAB/CAM16）、对比度、可访问性
- **热点**：由知名色彩专家 [meodai](https://github.com/meodai) 提交，专业度高，填补前端设计 skill 的细分空白
- 🔗 https://github.com/anthropics/skills/pull/1302

### #486 — ODT Skill（OpenDocument 读写）
- **状态**：OPEN
- **功能**：创建、填充、读取、转换 ODT/ODS 文件，支持 LibreOffice 模板
- **热点**：企业文档格式仍以 ODF 为重要标准（尤其欧洲政府/合规场景），与 PR #538、#541 共同构成"文档格式完整性"系列
- 🔗 https://github.com/anthropics/skills/pull/486

### #723 — testing-patterns（测试模式大全）
- **状态**：OPEN
- **功能**：覆盖 Testing Trophy 模型、单元/集成/组件测试、React Testing Library、QA 模式、E2E
- **热点**：补齐"代码生成—测试验证"闭环，与 #1385 的"质量门"提案方向契合
- 🔗 https://github.com/anthropics/skills/pull/723

### #210 — frontend-design 改进
- **状态**：OPEN（2026-01-05 创建，已停留 6 个月）
- **功能**：重写前端设计 skill，提升可执行性——确保每条指令在单次会话内可被 Claude 执行
- **热点**：长期挂起，反映社区对"现有 skill 是否真的可用"的反思
- 🔗 https://github.com/anthropics/skills/pull/210

---

## 二、社区需求趋势

从 50 条 Issues 中提炼出的高需求方向：

### 1️⃣ 信任与安全治理（最强烈诉求）
- **#492（34 评论）** — 社区 Skill 使用 `anthropic/` 命名空间导致信任边界滥用：[Issue](https://github.com/anthropics/skills/issues/492)
- **#1175（CLOSED，4 评论）** — SharePoint 文档访问控制写入 SKILL.md 的安全担忧：[Issue](https://github.com/anthropics/skills/issues/1175)
- **#412（CLOSED，6 评论）** — agent-governance Skill 提案（策略执行、威胁检测、信任评分、审计追踪）：[Issue](https://github.com/anthropics/skills/issues/412)

### 2️⃣ 企业级分发与集成
- **#228（14 评论，👍7）** — 团队/组织级 Skill 共享：[Issue](https://github.com/anthropics/skills/issues/228)
- **#29（4 评论）** — 与 AWS Bedrock 集成：[Issue](https://github.com/anthropics/skills/issues/29)
- **#16（4 评论）** — Skills 暴露为 MCP 协议：[Issue](https://github.com/anthropics/skills/issues/16)

### 3️⃣ 元工具质量（self-referential 痛点）
- **#556（12 评论，👍7）** — run_eval.py 0% 触发率：[Issue](https://github.com/anthropics/skills/issues/556)
- **#202（CLOSED，8 评论）** — skill-creator 应按最佳实践重写：[Issue](https://github.com/anthropics/skills/issues/202)
- **#1169（3 评论）** — 描述优化循环 0% 召回率：[Issue](https://github.com/anthropics/skills/issues/1169)
- **#1061（3 评论）** — Windows 兼容性全栈问题：[Issue](https://github.com/anthropics/skills/issues/1061)

### 4️⃣ 上下文与记忆优化
- **#1329（9 评论）** — compact-memory Skill 提案：符号化压缩 agent 自身笔记与持久记忆：[Issue](https://github.com/anthropics/skills/issues/1329)
- **#189（6 评论，👍9）** — document-skills 与 example-skills 插件重复 Skill：[Issue](https://github.com/anthropics/skills/issues/189)

### 5️⃣ 质量门与验证
- **#1385（3 评论）** — 三门管线提案（Pre-task Calibration → Adversarial Review → Delivery Verification）：[Issue](https://github.com/anthropics/skills/issues/1385)
- **#1362（3 评论）** — web-artifacts-builder 打包脚本故障：[Issue](https://github.com/anthropics/skills/issues/1362)

### 6️⃣ 可靠性（个人用户级）
- **#62（10 评论）** — Skills 全部消失的丢失问题：[Issue](https://github.com/anthropics/skills/issues/62)

**趋势小结**：需求集中度排序为 `治理安全 > 企业分发 > 元工具质量 > 记忆优化 > 质量验证`。其中**"治理安全"以 34 条评论断崖式领先**，是社区最强烈的一致诉求。

---

## 三、高潜力待合并 Skills

按"近期落地概率"与"影响面"评估：

| 优先级 | PR | Skill | 合并概率逻辑 |
|--------|----|----|----|
| 🔴 高 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 全面修复 | 阻塞整个描述优化生态，6 个相关 PR 并行修复，官方必然合并其一 |
| 🔴 高 | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 对应活跃 Issue #1385，作者持续活跃（7-10 仍更新），与官方"质量门"方向吻合 |
| 🟡 中 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 痛点全场景化，等待 4 个月，可能需要作者更新活跃度 |
| 🟡 中 | [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 作者专业度高（meodai），覆盖前端 skill 空白 |
| 🟡 中 | [#486](https://github.com/anthropics/skills/pull/486) | ODT | 欧洲合规刚需，但需评估 LibreOffice 依赖 |
| 🟡 中 | [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 内容完整度高，与质量门方向契合 |
| 🟢 低 | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 价值高但停留 8 个月，可能涉及安全策略需官方重写 |
| 🟢 低 | [#210](https://github.com/anthropics/skills/pull/210) | frontend-design 重写 | 已挂起 6 个月，反映社区 PR review 机制可能存在问题 |

**合并风险信号**：PR #83（8 个月）和 #210（6 个月）的长期停滞，提示社区贡献流程（CONTRIBUTING.md 由 #509 提出）尚不成熟。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"治理自己"——既要治理 Skill 本身的质量与安全（命名空间信任、质量门、审计），也要治理 Skill 创造工具（skill-creator）的可靠性；前者对应 #492 的 34 条评论断崖式领先，后者对应围绕 run_eval 0% 召回率的 6+ 个并发修复 PR，两股力量在"Skills 生态需要自我审计机制"这一命题上罕见地达成一致。**

---

### 📌 数据局限性说明
- 题目提供的数据中 PR 评论数显示为 `undefined`，本报告的"热门排行"基于 Issues 评论数（可量化）+ PR 的技术影响面（衍生 PR/Issue 数）综合排序
- 点赞数（👍）在 PR 数据中亦未提供，已在可用处（Issues）补充
- 数据截止 2026-07-13，部分 PR 后续状态可能已变化

---

# Claude Code 社区动态日报
**日期：2026-07-13**

---

## 📌 今日速览

过去 24 小时 Claude Code 仓库无新版本发布，但社区活跃度持续高涨，**VS Code 扩展相关 Bug 报告依旧密集**，尤其是 macOS ARM64 平台上的挂起、权限失效与多端同步问题。同时，**MCP 插件层（GitHub MCP、ide MCP）** 的协议兼容性问题浮出水面，**Bedrock / WSL 接入**与 **Cowork 沙箱（Windows）** 的回归 Bug 也引发关注。值得注意的还有用户对 `claude-fable-5` 模型在大上下文与扩展思考（Extended Thinking）场景下的失控反馈。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#30873](https://github.com/anthropics/claude-code/issues/30873) — Chrome 扩展在 Edge/macOS 切换标签时侧边栏关闭
- **标签**：`bug`、`platform:macos`、`area:browser-extension`
- **评论 28 / 👍 32**
- 反映 Claude in Chrome 扩展在 Microsoft Edge for macOS 下的稳定性问题，影响跨标签工作流，属于高曝光长期未修复 Bug。

### 2. [#15921](https://github.com/anthropics/claude-code/issues/15921) — VSCode 扩展不读取 `.claude/settings.local.json` 权限
- **标签**：`bug`、`platform:windows`、`area:tools`、`area:ide`
- **评论 28 / 👍 28**
- 即使开启 `bypassPermissions`，`.claude/settings.local.json` 中的 Bash/Write/Edit 权限声明仍被忽略，是企业本地化权限管理的关键痛点。

### 3. [#67609](https://github.com/anthropics/claude-code/issues/67609) — Advisor 工具在 `claude-fable-5` 超 100K token 时返回 "unavailable"
- **标签**：`bug`、`platform:macos`、`area:model`、`area:core`
- **评论 20 / 👍 38**
- 高赞高互动，明确划定 100K token 阈值，影响长会话多智能体协作能力，对 Fable 系列模型上线质量是关键指标。

### 4. [#64654](https://github.com/anthropics/claude-code/issues/64654) — `plugin:github:github` MCP 因 JSON-RPC 缺 `version` 字段返回 HTTP 400
- **标签**：`bug`、`platform:macos`、`area:mcp`、`area:plugins`
- **评论 16 / 👍 41（昨日最高赞）**
- MCP 协议层面的兼容性问题，影响官方 GitHub 插件可用性，社区关注度极高。

### 5. [#43477](https://github.com/anthropics/claude-code/issues/43477) — VS Code 中 Ctrl+C 复制失效
- **标签**：`bug`、`platform:windows`、`platform:vscode`、`area:ide`
- **评论 14**
- 基础交互层 Bug，破坏日常复制粘贴操作，严重影响 IDE 使用体感。

### 6. [#75571](https://github.com/anthropics/claude-code/issues/75571) — VS Code 扩展每 30–40 分钟挂起 90+ 秒（macOS ARM64）
- **标签**：`bug`、`has repro`、`platform:macos`、`platform:vscode`
- **评论 6**
- 已附详细技术分析（kevent64 状态、native 进程行为），具备良好的可复现性，是近期 Apple Silicon 用户的高频痛点。

### 7. [#69522](https://github.com/anthropics/claude-code/issues/69522) — `AskUserQuestion` 长 Unicode 转义参数触发 JSON 解析失败
- **标签**：`bug`、`platform:windows`、`area:tools`、`area:model`
- **评论 7**
- 暴露模型在序列化复杂工具参数时的鲁棒性问题，且报告区分了"已复现"与"假设性根因"两段，质量较高。

### 8. [#76701](https://github.com/anthropics/claude-code/issues/76701) — Bedrock 在 WSL 上报 "Session token not found or invalid"
- **标签**：`bug`、`api:bedrock`、`area:auth`、`regression`
- **评论 4**
- Bedrock 用户在 WSL 环境下的认证回归，影响 AWS 企业客户的接入稳定性。

### 9. [#56872](https://github.com/anthropics/claude-code/issues/56872) — IntelliJ IDEA 插件 MCP "ide" 连接启动即失败
- **标签**：`bug`、`has repro`、`platform:macos`、`platform:intellij`、`area:mcp`
- **评论 4**
- JetBrains 全家桶生态打通的关键阻塞点，影响多 IDE 用户迁移意愿。

### 10. [#77033](https://github.com/anthropics/claude-code/issues/77033) — Extended Thinking 在简单编辑中冲至 64K tokens，单轮耗时 12–16 分钟
- **标签**：`bug`、`platform:windows`、`area:cost`、`area:model`
- **评论 0（新增）**
- 直接关联成本与体验：在轻微编辑任务上"思考失控"，既烧 token 又卡顿，与 #76987 中用户对 Fable 用量失控的吐槽形成互证。

> 补充关注：**[#76987](https://github.com/anthropics/claude-code/issues/76987)**（用户长文"周末 post-mortem"控诉 Fable 在自创流程上烧光用量）、**[#76254](https://github.com/anthropics/claude-code/issues/76254)**（Cowork 信任目录校验回归）。

---

## 🛠 重要 PR 进展

> 过去 24 小时仅 3 个 PR 更新，以下全部覆盖：

### 1. [#76986](https://github.com/anthropics/claude-code/pull/76986) — `auto-close-duplicates.ts`：关闭重复 Issue 时保留既有标签
- **作者**：AliAltivate
- 修复 `scripts/auto-close-duplicates.ts` 在 PATCH Issue 时直接覆盖 `labels` 数组的 Bug，避免重复 Issue 被关闭时丢失原始分类信息。

### 2. [#76985](https://github.com/anthropics/claude-code/pull/76985) — `validate-agent.sh`：读取多行 `description` frontmatter
- **作者**：AliAltivate
- 原脚本使用 `grep '^description:'` 仅取首行，导致多行 description 在 agent 校验中被截断；改为基于 frontmatter 块的全量解析。

### 3. [#15165](https://github.com/anthropics/claude-code/pull/15165) — README 文档链接修复（已关闭）
- **作者**：nicholasoxford
- 将 README 中失效链接更新为可用 URL，🔴 已合并并关闭。

---

## 📈 功能需求趋势

通过对全部 50 条 Issue 的标签与摘要进行聚类，社区当前最关注的方向集中在：

| 方向 | 代表性 Issue | 关注度 |
|---|---|---|
| **VS Code 扩展稳定性与功能补齐** | #43477、#75571、#77003、#76633 | ⭐⭐⭐⭐⭐ |
| **IDE 多端生态（JetBrains / Chrome / Desktop）** | #30873、#56872、#77031 | ⭐⭐⭐⭐ |
| **MCP 协议兼容性与插件健壮性** | #64654、#56872 | ⭐⭐⭐⭐ |
| **模型调度与成本控制（Fable/Extended Thinking）** | #67609、#76987、#77033、#77006 | ⭐⭐⭐⭐⭐ |
| **Agent/FleetView 多会话可视化** | #69449、#58812 | ⭐⭐⭐ |
| **CLI / 结构化输出（headless / json-schema）** | #77026、#69522 | ⭐⭐⭐ |
| **Auto-mode 权限分类器（安全边界）** | #77030 | ⭐⭐⭐ |
| **Cowork 沙箱（Windows / 信任目录）** | #76094、#76254 | ⭐⭐⭐ |
| **云平台接入（Bedrock / WSL）** | #76701 | ⭐⭐ |
| **本地化与无障碍（多语言听写、UI 改进）** | #77031、#77029 | ⭐⭐ |

---

## 💬 开发者关注点（痛点与高频需求）

1. **VS Code 扩展是生态短板**：从复制失效、挂起、权限不读取到 `claude --resume` 卡 Reloading，IDE 集成稳定性已严重落后于 CLI。开发者明确要求 **"Desktop App UI 与 VS Code 扩展的 parity"**（见 #77003）。

2. **MCP 协议成为新故障面**：GitHub MCP、IntelliJ `ide` MCP 都出现协议层/版本字段问题，社区对官方插件质量提出质疑，#64654 单日获 41 赞印证热度。

3. **`claude-fable-5` 模型体验争议**：长上下文 advisor 不可用（#67609）、误判内容安全自动降级到 Opus 4.8（#77006）、扩展思考失控（#77033）、用量被自创流程吃光（#76987）——四个独立问题指向同一模型在「稳定性 + 成本 + 安全策略」三方面的系统性挑战。

4. **权限与安全分类器的双向不满**：
   - **过松**：#77030 指出 auto-mode 漏掉真正的破坏性 `rsync`；
   - **过严**：#15921 显示本地 settings 被忽略。
   两端均需更精细的语义判断。

5. **会话管理与多 Agent 协作**：`claude agents`（FleetView）缺仓库列、目录分组失效（#69449、#58812）、自动保存缺失（#77011 已关闭但仍反映需求）——多 Agent 场景下的可观测性是高频诉求。

6. **企业接入摩擦**：Bedrock 在 WSL 上的认证回归（#76701）、Cowork 在 Windows 的 sandbox 崩溃（#76094），均指向 **Windows + 云代理 + 企业沙箱** 这条链路的可靠性。

7. **结构化输出稳定性**：headless `--json-schema` 出现 XML 串入 JSON 字段的怪异序列化（#77026），对自动化流水线用户是关键阻塞。

8. **无障碍与本地化**：葡萄牙语听写（#77031）、长代码块固定复制按钮（#77029）等小需求，体现了从"开发者工具"向"日常工具"的体验外延。

---

> **数据口径**：基于 anthropics/claude-code 仓库过去 24 小时更新的 50 条 Issue 与 3 条 PR；样本仅包含评论数最多的前 30 条 Issue 摘要与全部 PR 摘要。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-13**

---

## 一、今日速览

过去 24 小时 Codex 仓库无新版本发布，但社区议题依然活跃。**GPT-5.6 系列模型（Sol / Luna / Terra）在多平台、多场景下的兼容性 Bug 成为讨论焦点**，涉及 Azure、CLI、子代理、IDE 扩展等多个方向。同时，**Windows 桌面端的沙箱、远程控制与企业分发问题持续发酵**，叠加一个内置 `wait` 工具 50s 上限导致 token 巨量消耗的性能问题，构成本日的主要技术热点。

---

## 二、版本发布

⚠️ 过去 24 小时无新 Release 发布。

---

## 三、社区热点 Issues

### 🔥 1. [#28224](https://github.com/openai/codex/issues/28224) — SQLite feedback 日志写入量可达 640 TB/年（已关闭）
- **状态**：CLOSED ｜ 评论 151 ｜ 👍 434
- **要点**：高赞高讨论度的"明星"议题。报告 Codex CLI 的 SQLite feedback 日志未经压缩/采样，会以 ~640 TB/年的速度写入 SSD，严重消耗写入寿命。已于 6 月 23 日通过 PR #29432、#29457 等合并到 0.142.0 版本，减少 ~85% 日志量后关闭。
- **社区反应**：434 点赞为本周最高，反映出用户对资源开销问题的普遍共鸣。

### 🔥 2. [#31814](https://github.com/openai/codex/issues/31814) — GPT-5.6 Sol 无法指定 subagent 模型
- **状态**：OPEN ｜ 评论 56 ｜ 👍 122
- **要点**：MultiAgent V2 的 `hide_spawn_agent_metadata` 默认行为使所有 subagent 都被强制为 Sol 实例，无法切换至其他模型，限制复杂 Agent 编排的灵活性。

### 🔥 3. [#18960](https://github.com/openai/codex/issues/18960) — Codex App 频繁断连：websocket 在 response.completed 前被服务端关闭
- **状态**：OPEN ｜ 评论 51 ｜ 👍 39
- **要点**：macOS Codex App（26.417.41555）流式响应阶段频繁出现 streaming failure，自 4 月开案以来持续存在，影响长任务体验。

### 🔥 4. [#31870](https://github.com/openai/codex/issues/31870) — Azure 上的 GPT-5.6-Sol 每轮调用都失败
- **状态**：OPEN ｜ 评论 38 ｜ 👍 39
- **要点**：Azure Foundry 通道 + GPT-5.6-Sol + Codex CLI v0.144.0 组合下，每轮都报 `X-OpenAI-Internal-Codex-Responses-Lite` 错误，企业用户集成受阻。

### 5. [#20214](https://github.com/openai/codex/issues/20214) — Windows 11 下 Codex App 频繁卡顿/冻结
- **状态**：OPEN ｜ 评论 34 ｜ 👍 48
- **要点**：即使在 Ryzen 5 5600 + 32GB 内存的设备上仍出现卡顿，疑似 Tauri/Renderer 进程调度或 GPU 加速相关。

### 6. [#21538](https://github.com/openai/codex/issues/21538) — Windows 端缺少非 Microsoft Store 安装包（企业环境需求）
- **状态**：OPEN ｜ 评论 10 ｜ 👍 20
- **要点**：企业 Windows 设备通常屏蔽 Microsoft Store，用户呼吁提供独立 MSI/EXE 安装包以便集中部署。

### 7. [#25247](https://github.com/openai/codex/issues/25247) — 浏览器插件 bootstrap 失败：browser-client 未被信任
- **状态**：OPEN ｜ 评论 10
- **要点**：Codex Desktop v26.527 中 in-app browser 启动失败，安全性/签名信任链异常，影响 Browser Use 功能。

### 8. [#32640](https://github.com/openai/codex/issues/32640) — 内置 `wait` 工具 50s 上限引发 token 巨量消耗
- **状态**：OPEN ｜ 评论 4
- **要点**：`multi_agent_v2` 每 50 秒重采样一次，长时等待场景下 token 消耗呈指数级增长，是今日最具技术深度的性能议题。

### 9. [#32095](https://github.com/openai/codex/issues/32095) — GPT-5.6 Sol 将正常请求误判为网络安全活动
- **状态**：OPEN ｜ 评论 5
- **要点**：安全检查产生 false positive，体现 safety classifier 在新模型上的边界仍需调优。

### 10. [#25341](https://github.com/openai/codex/issues/25341) — Subagent 子线程污染"最近对话"列表
- **状态**：OPEN ｜ 评论 5
- **要点**：subagent 创建的子线程被当作顶级会话持久化，挤占用户真实的会话位，并可能留下悬挂的 spawn 边。

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时仅 5 条 PR 更新，以下为全部进展。

### 1. [#32672](https://github.com/openai/codex/pull/32672) — Revert "Update auto review prompting"（release/0.144）
- **分支**：release/0.144 ｜ 状态：OPEN
- **要点**：在 0.144 发布分支上整体回退 #31480 的 auto review prompt 变更，恢复原 Guardian 策略模板、review request 布局与 tool spec，并同步恢复对应的测试与快照。

### 2. [#32668](https://github.com/openai/codex/pull/32668) — Revert #31480
- **状态**：CLOSED
- **要点**：上一条 revert 的早期版本，已关闭，可能因目标分支调整而被 #32672 替代。

### 3. [#29898](https://github.com/openai/codex/pull/29898) — 防止宿主进程注入 token，保留 PAT 鉴权
- **状态**：CLOSED
- **要点**：当用户使用 Personal Access Token 鉴权时，拒绝宿主注入的 `chatgptAuthTokens`，并补充端到端回归测试覆盖 401 恢复路径与推理 Bearer Token 注入场景，提升鉴权链路安全性。

### 4. [#30504](https://github.com/openai/codex/pull/30504) — TUI 通过 session fork 编辑历史 prompt
- **状态**：OPEN
- **要点**：使用 `session forks` 替代当前基于 `thread/rollback` 的破坏式实现，使 prompt 编辑在分支而非主线程上发生，便于回溯与对比。

### 5. [#32628](https://github.com/openai/codex/pull/32628) — 改进 composer 的补全目标解析
- **状态**：CLOSED
- **要点**：以原子文本元素和换行作为边界，在光标两侧解析 `@` / `$` 补全目标，并优先选择最近的"可编辑 mention"，减少 file/skill/plugin 候选之间的冲突与误触发。

---

## 五、功能需求趋势

综合过去 24 小时 50 条活跃 Issue，可提炼出以下社区最关注的方向：

| 方向 | 代表性议题 | 关注度 |
|---|---|---|
| **GPT-5.6 系列模型兼容性** | #31814, #31870, #31873, #31967, #32095, #32412 | ⭐⭐⭐⭐⭐ |
| **Windows 桌面端体验** | #20214, #21538, #29110, #31387, #31973, #32492, #32653 | ⭐⭐⭐⭐⭐ |
| **Subagent / MultiAgent V2** | #31814, #25341, #32664, #32640 | ⭐⭐⭐⭐ |
| **Browser / IAB 集成** | #20678, #25247, #32664 | ⭐⭐⭐ |
| **IDE 扩展（VS Code/Cursor/open-vsx）** | #32499, #32412, #32615 | ⭐⭐⭐ |
| **AGENTS.md 配置增强** | #28739 | ⭐⭐ |
| **Azure / 企业部署** | #31870, #21538 | ⭐⭐⭐ |

---

## 六、开发者关注点

1. **新模型生态尚未稳定**：GPT-5.6 Sol / Luna / Terra 在 CLI、Azure、IDE 扩展、open-vsx 等多通道均报告行为不一致或不可用，开发者普遍关心模型与底座的"对齐测试"是否跟上发布节奏。

2. **Windows 仍是体验短板**：性能卡顿、MSIX 沙箱引导失败、Remote Control 配对卡死、企业无法侧载安装等问题集中爆发，反映出 Windows App 的发布质量与跨平台优先级仍待加强。

3. **资源与成本问题受到高度关注**：#28224（SSD 写入寿命）与 #32640（wait 工具 50s 上限导致 token 燃烧）均直指"Agent 自动循环带来的隐性成本"，社区期待更激进的限速、采样与可观测性。

4. **安全性与误报**：Norton 360 误报（#32331）与 safety classifier 误判（#32095）说明客户端二进制签名和云端策略仍需与生态进一步磨合。

5. **配置可表达性增强**：#28739 提议的 `AGENTS.local.md` 叠加层与 `@` 引用扩展，对标 Claude Code 的 source attribution，反映开发者希望 Codex 在多 agent / 多指令源场景下具备更细粒度的可追溯性。

---

*日报基于 [openai/codex](https://github.com/openai/codex) 公开数据生成，仅反映仓库层面公开讨论，不构成商业建议。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-07-13

---

## 1. 今日速览

- **Nightly 版本发布**:`v0.52.0-nightly.20260713.gf354eebaf` 上线,核心修复 Code Assist 无 Tier 账户的隐私提示体验。
- **Subagent 可靠性持续承压**:Top 议题 #22323(#21409) 暴露子代理错误状态上报与 generalist agent 挂死两大痛点,合计获得 **18 个赞 + 17 条评论**。
- **安全维护活跃**:同日合并 2 个 **CRITICAL 级 CVE** 修复(vitest、shell-quote),并推进 Auto Memory 系统的确定性脱敏与补丁校验工作。

---

## 2. 版本发布

| 版本 | 时间 | 主要变更 |
|---|---|---|
| **v0.52.0-nightly.20260713.gf354eebaf** | 2026-07-13 | `fix(privacy)`:账户无 Code Assist Tier 时展示清晰提示(PR [#28304](https://github.com/google-gemini/gemini-cli/pull/28304),by @ompatel-aiml) |

→ [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.52.0-nightly.20260713.gf354eebaf)

---

## 3. 社区热点 Issues(Top 10)

| # | Issue | 优先级 / 区域 | 关注度 | 重要原因 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 命中 `MAX_TURNS` 后仍报 `GOAL success`,隐藏中断 | P1 / agent | 💬10 👍2 | 直接破坏 agent 可观测性,误判任务成功状态 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) `generalist` agent 转交后永久挂起 | P1 / agent | 💬7 👍8 | 极高点赞数,影响所有 defer-to-subagent 的场景 |
| 3 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令执行完成后卡在 "Waiting input" | P1 / core | 💬4 👍3 | 高频日常操作触发,简单命令也会卡死 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) **EPIC**:组件级评估体系 | P1 / agent+eval | 💬7 | 当前已有 76 个 behavioral eval 在 6 个模型上运行,推动基础设施升级 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **EPIC**:AST 感知的文件读/搜索/映射评估 | P2 / agent | 💬7 👍1 | 减少越界读、节省 token、提升 `codebase_investigator` 精度 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不主动调用 skills 与子代理 | P2 / agent | 💬6 | 影响 agent 自驱能力,需 prompt/调度优化 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 反复重试低信号会话 | P2 / agent | 💬5 | 后台代理资源浪费,触发会话污染 |
| 8 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏 & 日志精简 | P2 / security | 💬3 | 密码学级别的脱敏前置,降低密钥泄露面 |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 > 128 时触发 400 错误 | P2 / agent | 💬3 | MCP 接入多工具场景下的硬性上限问题 |
| 10 | [#28370](https://github.com/google-gemini/gemini-cli/issues/28370) **Windows 终端热重载触发全量 history 倾倒 (C-Dump)** | P1 / core | 💬1 🆕 | 昨日新提,Windows 平台严重的 Ink UI 重绘级联 bug |

---

## 4. 重要 PR 进展(Top 10)

| # | PR | 类型 | 说明 |
|---|---|---|---|
| 1 | [#28365](https://github.com/google-gemini/gemini-cli/pull/28365) `fix(core): scope tools.core wildcard DENY to built-in tools` | 🐛 Bugfix | 修复 `tools.core=[]` 误禁全部 MCP 工具的问题,引入 `PolicyRule.builtinOnly` 字段 |
| 2 | [#28385](https://github.com/google-gemini/gemini-cli/pull/28385) `Bump google-auth-library to 10.9.0` | 🔐 依赖 / P1 | 跟进 #27956,修复 gaxios 已知问题 |
| 3 | [#28368](https://github.com/google-gemini/gemini-cli/pull/28368) `Upgrade vitest 4.1.0 / 3.2.6` | 🔐 安全 | 修复 **CVE-2026-47429(CRITICAL)** |
| 4 | [#28367](https://github.com/google-gemini/gemini-cli/pull/28367) `Upgrade shell-quote 1.8.4` | 🔐 安全 | 修复 **CVE-2026-9277(CRITICAL)** |
| 5 | [#28384](https://github.com/google-gemini/gemini-cli/pull/28384) 版本 bump 脚本 | 🚀 Release | 自动生成 nightly 版本 PR |
| 6 | [#28369](https://github.com/google-gemini/gemini-cli/pull/28369) `feat(evals): local report command + dev docs` | 🛠️ DevEx | 新增 `npm run eval:report`,按模型聚合 Vitest 结果并映射到 inventory policy |
| 7 | [#28366](https://github.com/google-gemini/gemini-cli/pull/28366) `Tidy implementation detail` | 🧹 重构 | 关联 #28340 的局部精简 |
| 8 | [#28377](https://github.com/google-gemini/gemini-cli/pull/28377) `Bump npm-dependencies group (74 updates)` | 📦 依赖批量 | 由 dependabot 一次性合并 74 项升级 |
| 9 | [#28378](https://github.com/google-gemini/gemini-cli/pull/28378) `Bump @agentclientprotocol/sdk 0.16.1 → 1.1.0` | 📦 依赖 | 跨大版本升级,关注 API 兼容性 |
| 10 | [#28379](https://github.com/google-gemini/gemini-cli/pull/28379) `Bump chrome-devtools-mcp 0.19.0 → 1.5.0` | 📦 依赖 | 配合 browser agent 改进(对应 issue #22232、#21983) |

---

## 5. 功能需求趋势

根据过去 24h 更新的 50 条 Issue,提炼出 7 大社区关注方向:

1. **🧠 Subagent 可靠性与可观测性** — 状态上报、终止原因区分、`/chat share` 轨迹可见(对应 #22323、#21763、#22598)
2. **🛡️ Auto Memory 安全治理** — 脱敏、补丁审计、低信号会话治理(对应 #

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-13**

---

## 一、今日速览

今日社区活跃度较高，Issues 板块 16 条更新引发广泛讨论，其中 **TUI 渲染与终端交互** 类问题尤为突出，多个高赞 Issue 集中在终端卡死、文本选择异常等场景；**会话（Session）管理** 相关缺陷呈上升趋势，涉及恢复、断电续传、跨端同步等多个链路；同时 **Voice 模式 ASR 模型全量静默失败** 的持续讨论也引发开发者关注。Pull Request 端仅有 1 条提交且为安全相关杂项，内容较少。

---

## 二、版本发布

⚠️ 过去 24 小时内 **无新版本发布**。

---

## 三、社区热点 Issues

以下 10 条 Issue 综合考虑讨论密度、👍 点赞数、问题影响面与版本回归风险排序：

### 1. 🚨 [#4069](https://github.com/github/copilot-cli/issues/4069) — TUI 在 mid-turn 阶段整体卡死
- **影响面**：⭐ 8 赞 / 7 评论（当日最热）
- **关键点**：CLI v1.0.70-0 + WSL2 (Ubuntu) + Windows Terminal 环境下，模型流式生成中途屏幕清空、输入失效，Ctrl+C / Ctrl+\ 全部无效；底层表现为 Rust JSON-RPC 传输层在 stdout 触发 `EPIPE`、stderr 触发 `EIO`。
- **为何重要**：该问题直接导致整个 TUI 进入不可恢复状态，属于最高级别可用性缺陷，且复现环境为常见的 WSL2 用户场景。

### 2. 🚨 [#4024](https://github.com/github/copilot-cli/issues/4024) — Voice 模式下所有 ASR 模型静默失败
- **影响面**：8 评论
- **关键点**：`/voice` 命令能正常采集音频（电平表反应正常），但 `nemotron_speech` 系列三款 RNN-T 模型全部返回空转写。根因疑似 `MultiModalProcessor` 路由 bug。
- **为何重要**：Voice 模式是 Copilot CLI 新引入的核心能力，本次故障意味着该能力对所有用户实质不可用。

### 3. [#4098](https://github.com/github/copilot-cli/issues/4098) — 恢复会话时 events.jsonl 出现截断与串行事件
- **关键点**：恢复会话后，三条物理行各自包含不完整事件前缀并紧接一条完整 JSON 事件，无换行分隔，导致后续再次恢复失败。
- **为何重要**：属于 sessions 模块的**数据完整性**问题，长期可能影响用户历史对话可恢复性。

### 4. [#4097](https://github.com/github/copilot-cli/issues/4097) — `apply_patch` 删除的二进制文件存入历史，超出 CAPI 5 MB 上限
- **关键点**：删除大文件时 `tool.execution_complete` 将整个二进制以 diff 形式写入 `result.detailedContent`，最终突破 CAPI Responses 接口 5 MB 限制，`/compact` 也无法补救。
- **为何重要**：触及 **CAPI 上限** 这一硬性约束，将导致后续请求必然失败，影响所有进行大型二进制操作的会话。

### 5. [#4102](https://github.com/github/copilot-cli/issues/4102) — Linux x64 原生二进制在工具密集型 turn 期间 V8 崩溃
- **关键点**：打包的 Linux x64 原生二进制在重工具调用 turn 与恢复会话时，会在 V8 内部 abort；排查已排除并发恢复假设。
- **为何重要**：原生模块崩溃直接影响 CLI 进程稳定性，对重度 agent 用户的杀伤力极大。

### 6. [#4096](https://github.com/github/copilot-cli/issues/4096) — 第三方 MCP 服务显示"已连接"但 CLI 中工具缺失
- **关键点**：通过 GitHub Copilot App 完成 OAuth 登录的 Atlassian Remote MCP 在 App 中显示绿色"Connected"，但由该 App 派生的 CLI 会话**永远无法获取其工具**——疑似 OAuth Token 未桥接到会话上下文。
- **为何重要**：直接影响 **CLI ↔ App ↔ MCP 三端身份链路** 的可信度，是生态集成的关键缺陷。

### 7. [#4095](https://github.com/github/copilot-cli/issues/4095) — Windows 下 `copilot plugin update` 在 VS Code 运行时报"拒绝访问"
- **关键点**：当 VS Code 同时运行时，Copilot 扩展在已安装插件目录持有 watcher 句柄，导致 `copilot plugin update` 触发 `os error 5`，文件锁冲突。
- **为何重要**：Windows 端 plugin 工作流与 VS Code 编辑器存在**资源争用**，是典型的平台兼容性回归。

### 8. [#4103](https://github.com/github/copilot-cli/issues/4103) — 插件市场克隆禁用 Git credential helpers，私有 HTTPS 仓库失败
- **关键点**：v1.0.70 起新增"fast fail"逻辑后，从私有 Azure DevOps HTTPS 仓库添加插件市场失败，尽管 Git Credential Manager 单独工作正常。
- **为何重要**：明确标注的 v1.0.70 **回归**，影响所有使用私有企业仓库的团队用户。

### 9. [#4094](https://github.com/github/copilot-cli/issues/4094) — App 端删除会话后未同步至 session-store.db / VS Code
- **关键点**：Copilot App 删除会话后，`~/.copilot` 中的 `data.db`、`session-store.db`、`search_index` 以及 `vscode.session.metadata.cache.json` 均未清理，导致**孤立会话**残留。
- **为何重要**：跨端会话管理的一致性问题，涉及隐私合规与磁盘占用。

### 10. [#4101](https://github.com/github/copilot-cli/issues/4101) — `write_agent` 在目标后台 agent 激活前阻塞，导致新输入排队
- **关键点**：`write_agent` 调用不会立即返回，而是在目标 agent 真正开始处理后才返回，导致用户在两次消息之间出现可见的输入卡顿。
- **为何重要**：后台 Agent 是 v1.0.x 主推的多 Agent 范式，调度时序问题会显著影响交互体验。

> 另：[**#3773**](https://github.com/github/copilot-cli/issues/3773)（浅色主题对比度不足，2 赞）与 [**#4070**](https://github.com/github/copilot-cli/issues/4070)（文本选中时输入栏出现乱码）虽 👍 较少，但都属于典型 TUI 渲染问题，与 #4069 同源可能性较高，值得团队一并排查。

---

## 四、重要 PR 进展

过去 24 小时内仅 1 条 PR 更新：

### [#4100](https://github.com/github/copilot-cli/pull/4100) — 安全相关杂项更新
- **作者**：huangyoufeng76-debug
- **状态**：OPEN，0 评论
- **说明**：标题与摘要均极简（仅"安全性"三字），缺乏有效信息，建议关注后续 commit 详情以判断实际改动范围。

---

## 五、功能需求趋势

从近 24 小时活跃 Issues 中提炼，社区关注度集中于以下方向：

| 方向 | 代表 Issue | 趋势描述 |
|------|-----------|---------|
| **TUI / 终端渲染稳定性** | #4069, #4070, #3773, #3430 | 终端卡死、乱码、对比度、按键事件穿透等问题集中爆发，已成为 v1.0.70 后**最大负面反馈集群** |
| **会话（Session）管理可靠性** | #4098, #4094, #4097 | 跨端一致性、历史完整性、大体积事件处理三方面同时出现问题 |
| **Voice / 多模态能力** | #4024 | Voice 模式上线后首个被广泛反馈的能力缺陷 |
| **插件生态与私有仓库** | #4103, #4095 | 私有 HTTPS 凭证、Windows 文件锁两个工程化痛点 |
| **MCP 与 OAuth 桥接** | #4096 | App ↔ CLI 的身份与能力分发尚未完全打通 |
| **后台 Agent 调度** | #4101 | 多 Agent 调度时序与可中断性仍需打磨 |
| **原生模块稳定性** | #4102 | Linux 原生二进制在 V8 中的健壮性需要关注 |

---

## 六、开发者关注点

综合今日社区反馈，开发者集中表达以下痛点与需求：

1. **🔴 TUI 可用性回归**：v1.0.70 起，终端交互层出现多个相互关联的稳定性与可读性问题，是当前**最高优先级**反馈方向。
2. **🟠 跨端数据一致性**：App、CLI、VS Code 之间的会话/插件状态不同步（删除不生效、Token 不下发、历史不清理），开发者期望统一的"单一事实源"。
3. **🟡 CAPI 硬性约束暴露**：`apply_patch` 写入大体积 diff 直接命中 5 MB 上限，开发者期待工具层对**二进制 diff 进行内容摘要或省略**。
4. **🟡 平台差异显著**：Windows 文件锁、WSL2 PTY 行为、Linux 原生 V8 崩溃等平台专属问题频发，跨平台测试矩阵需要补强。
5. **🟢 多 Agent 体验**：开发者积极使用 `write_agent` 等后台调度能力，但希望获得**更明确的返回时机与取消语义**，以避免输入排队。
6. **🟢 私有/企业场景**：私有 HTTPS 凭证桥接、Azure DevOps 等非 GitHub 仓库的兼容需求被反复提及，建议在 plugin marketplace 设计上提供更细粒度的认证配置。

---

> 📌 **编辑部建议**：鉴于 v1.0.70 出现的多项回归（#4069、#4103、#4096 均直接指向该版本），建议关注社区是否会在短期内催生 **v1.0.71** 热修复版本；TUI 与 Sessions 两个模块亟需作为下一个 milestone 的修复重点。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-13**

---

## 📌 今日速览

今日社区动态相对清淡，过去 24 小时内 **无新版本发布**，仅有 1 个 Issue 和 2 个 PR 有更新。其中最值得关注的是 Issue #2318 报告的 TPD（Token Per Day）配额计算错误 Bug，可能影响大量付费用户的正常使用；同时两个 PR 均聚焦于 Windows 平台体验优化，体现出 Moonshot 团队对跨平台兼容性的持续打磨。

---

## 🚀 版本发布

**今日无新版本发布**，过去 24 小时内 `kimi-cli` 仓库未发布任何 Release。建议关注下周的常规发版窗口。

---

## 🔥 社区热点 Issues

> ⚠️ **数据说明**：过去 24 小时内仅有 1 条 Issue 被更新，以下为该 Issue 详情。

### #2318 [OPEN] TPD 配额计算错误 Bug — Critical Bug
- **作者**：globalvideos272-lab
- **链接**：[Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)
- **环境**：kimi 2.6 / moonshot.ai / kimi2.6 模型 / Windows 10
- **重要性**：用户在未达到实际用量限制的情况下，触发了组织级 TPD 速率上限（current: 1505241），怀疑 **TPD 用量统计逻辑存在计算偏差**，直接影响计费和服务可用性。
- **社区反应**：👍 1 个点赞，表明问题已获得初步关注；作为与计费/配额相关的核心功能 Bug，预计会持续吸引更多用户反馈。
- **建议**：若你也是 moonshot.ai 的高用量用户，建议在评论区附上你的使用日志与触发条件，便于团队快速复现。

---

## 🔧 重要 PR 进展

> ⚠️ **数据说明**：过去 24 小时内仅有 2 条 PR 被更新，以下为详情。

### #2181 [OPEN] fix: add Windows binary version info
- **作者**：he-yufeng
- **链接**：[PR #2181](https://github.com/MoonshotAI/kimi-cli/pull/2181)
- **修复内容**：
  - 从 `pyproject.toml` 自动生成 PyInstaller Windows 版本信息文件
  - 将版本资源注入 one-file 和 one-dir 两种打包产物的 `kimi.spec`
  - 新增 Windows CI 断言，确保发布产物包含非空的 `FileVersionInfo`
- **关联**：修复 #2178，提升 Windows 发行包的版本可追溯性。

### #2350 [OPEN] fix: tolerate non-utf8 worker output
- **作者**：he-yufeng
- **链接**：[PR #2350](https://github.com/MoonshotAI/kimi-cli/pull/2350)
- **修复内容**：
  - Web session 运行器此前以 **严格 UTF-8** 解码 worker 的 stdout 与崩溃 stderr
  - Windows 子进程常输出 cp1252 等本地编码字节（如 smart punctuation），单个非法字节即可触发 `UnicodeDecodeError`，掩盖真实崩溃原因
  - 改用容错解码策略，保留真实错误信息
- **关联**：修复 #2313，属于典型的"平台差异导致的可观测性盲区"问题。

---

## 📈 功能需求趋势

由于今日活跃 Issue 数量较少，无法进行大规模趋势分析。结合已有信息可观察到以下方向：

| 趋势方向 | 证据 | 说明 |
|---------|------|------|
| **跨平台稳定性（Windows）** | PR #2181、#2350 | 今日两条 PR 均聚焦 Windows 兼容性，说明 Windows 用户群正在快速增长，相关体验问题集中暴露 |
| **配额/计费透明度** | Issue #2318 | 用户对 TPD 用量计算的可信度高度敏感，错误提示会直接影响付费意愿 |
| **错误可观测性** | PR #2350 | "Bug 被编码错误掩盖"反映出对失败链路可追溯性的强需求 |

---

## 💡 开发者关注点

从今日仅有的交互中可以提炼出开发者社区的几个核心痛点：

1. **Windows 平台仍为薄弱环节**
   - 打包元数据（版本信息）缺失，影响调试与版本管理
   - 非 UTF-8 编码兼容性问题，导致真实错误信息被掩盖
   - 这两项修复都直指一个共性：**Windows 用户的"可观察性"被低估**

2. **配额/限流信息的准确性**
   - 用户对平台是否如实反映用量非常敏感
   - "TPD 计算错误"类 Bug 一旦传播，将严重损害信任

3. **可复现性（Reproducibility）仍是 Issue 高质量的关键**
   - #2318 的提交质量较高，提供了版本、平台、模型、具体错误码等完整字段
   - 建议后续 Issue 模板继续保留这些结构化字段，有助于维护者快速定位

---

## 📊 数据看板

| 指标 | 数值 |
|------|------|
| 过去 24h 新增 Release | 0 |
| 过去 24h 活跃 Issue | 1 |
| 过去 24h 活跃 PR | 2 |
| 涉及平台 | Windows |
| 主要贡献者 | he-yufeng (2 PR) |

---

> 📝 **备注**：今日数据量较少，可能与周末或维护窗口期有关。建议结合后续 1–2 天的数据进行趋势对比，以获得更稳定的判断。

*数据来源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-13**

---

## 📌 今日速览

今日 OpenCode 社区动态以 **v2.0 内测版本的密集修复** 为主线，多个 TUI/Config/MCP 相关 bug 在 24 小时内被快速关闭；同时 **GPT-5.6 模型家族** 在 ChatGPT OAuth、Copilot、Codex 等多种集成路径上的兼容性问题集中爆发，成为开发者最关心的模型集成议题。基础设施层面，自动压缩（auto-compaction）在超大请求体下的边界保护也获得了关键修复。

---

## 🚀 版本发布

今日无正式版本发布；仅有两个 PR 验证产物：
- [pr-36567-evidence](https://github.com/anomalyco/opencode) — PR #36567 自动验证产物
- [pr-36516-evidence](https://github.com/anomalyco/opencode) — PR #36516 可视化验证资源

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|-------|---------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | 复制到剪贴板失效 | **113 评论 / 105 👍**，存在已超 8 个月的"老牌"痛点，影响所有用户的基础操作 |
| [#36140](https://github.com/anomalyco/opencode/issues/36140) | GPT-5.6 Luna 在 ChatGPT OAuth 下 404 | **85 👍**，新模型兼容性热点，且能复现于干净 dev checkout |
| [#5076](https://github.com/anomalyco/opencode/issues/5076) | 默认配置安全性改进 | **61 👍**，呼吁"allow-by-default"风险整改，社区对权限模型长期关注 |
| [#14273](https://github.com/anomalyco/opencode/issues/14273) | Zen 免费额度异常 | 35 评论，付费用户仍触发免费限额错误，今日已关闭 |
| [#3743](https://github.com/anomalyco/opencode/issues/3743) | 模型陷入工具调用死循环 | 26 评论，影响 Kimi K2、MiniMax、GLM 等多模型，跨提供商问题 |
| [#30068](https://github.com/anomalyco/opencode/issues/30068) | 复制日文乱码 | 15 评论，UTF-8 被误判为 Latin1，CJK 用户关键体验问题 |
| [#22132](https://github.com/anomalyco/opencode/issues/22132) | 本地 Ollama 挂起 | 15 评论，相同请求 curl `/v1/chat/completions` 正常，OpenCode 端 hang |
| [#31972](https://github.com/anomalyco/opencode/issues/31972) | 新布局下 Plan/Build 无法切换 | 7 评论，新 UI 启用后快捷键与按钮同时失效 |
| [#33318](https://github.com/anomalyco/opencode/issues/33318) | 付费余额仍触发免费限额 | $20 余额仍报 `FreeUsageLimitError`，与 #14273 同源 |
| [#32002](https://github.com/anomalyco/opencode/issues/32002) | macOS 26 内核恐慌 | 罕见的 EndpointSecurity 触发的 zone map 耗尽，安全相关 |

**V2.0 内测专属痛点**：[#36539](https://github.com/anomalyco/opencode/issues/36539) 子仓库无法合并全局配置、[#36482](https://github.com/anomalyco/opencode/issues/36482) TUI 切换 MCP 无效、[#36510](https://github.com/anomalyco/opencode/issues/36510) VCS diff 404 导致 TUI 崩溃。

---

## 🛠 重要 PR 进展

| PR | 内容 |
|----|------|
| [#36589](https://github.com/anomalyco/opencode/pull/36589) | **fix(core): 压缩请求体上限保护** — 自动压缩现同时考虑 token 与序列化请求字节，避免 ~240k/1M 上下文下因超 10MiB 永久卡死（关联 [#35013](https://github.com/anomalyco/opencode/issues/35013)） |
| [#36560](https://github.com/anomalyco/opencode/pull/36560) | **refactor(core): 用 `codemode` 替换 `deferred` 工具选项** — 默认进入 CodeMode；MCP 注册改用 `CODEMODE_ENABLED` 标志；这是工具加载模型的架构级调整 |
| [#36561](https://github.com/anomalyco/opencode/pull/36561) | **feat(plugin): 扁平化工具 draft + namespace/pinned** — 新增 `namespace` 命名空间与 `pinned` 一级字段，工具注册语义升级 |
| [#36563](https://github.com/anomalyco/opencode/pull/36563) | **fix(core): 会话标题用 catalog 小模型** — 在代理未指定模型时优先调用 `Catalog.model.small(provider)`，降本 |
| [#29217](https://github.com/anomalyco/opencode/pull/29217) | **feat(tui): 行内 `$skill` 调用 + SKILL pill** — 输入 `$` 弹出技能自动补全，同时支持 `pasteText`，覆盖 5 个老 issue |
| [#36577](https://github.com/anomalyco/opencode/pull/36577) | **fix(core): 跨 Git 边界加载配置（已合并）** — V2 core 配置发现支持向上回溯，修复 [#36539](https://github.com/anomalyco/opencode/issues/36539) |
| [#36570](https://github.com/anomalyco/opencode/pull/36570) | **fix(core): 保留 SQLite 错误详情** — 替换 `Failed to execute statement` 占位错误（关联 [#33356](https://github.com/anomalyco/opencode/issues/33356)） |
| [#35824](https://github.com/anomalyco/opencode/pull/35824) | **fix: 网关过滤非媒体文件** — 防止 `application/octet-stream` 等不可识别类型在转换器中崩溃（关闭 [#35697](https://github.com/anomalyco/opencode/issues/35697)） |
| [#36574](https://github.com/anomalyco/opencode/pull/36574) | **fix(github-copilot): 设置 `Copilot-Integration-Id: vscode-chat`** — 修复 `gpt-5.6-luna/sol/terra` 在 Copilot 上 403 |
| [#36576](https://github.com/anomalyco/opencode/pull/36576) | **fix(app): 终端挂载不抢占焦点** — 仅在 `Ctrl+backtick`、新建/选中终端等显式动作时才聚焦 |
| [#36579](https://github.com/anomalyco/opencode/pull/36579) | **fix(core): 自定义请求头合并到 SDK 选项** — 修复 `User-Agent`、`x-api-key` 等被丢弃问题 |
| [#36594](https://github.com/anomalyco/opencode/pull/36594) | **chore: 升级 TypeScript 原生预览** — 单仓 typecheck 提速 ~10%，峰值内存降低 ~9% |

---

## 📈 功能需求趋势

通过对 50 条 Issue 的聚类分析，社区诉求呈现以下方向：

1. **🧠 GPT-5.6 模型家族集成** — OAuth、Codex、Copilot 三种认证路径的模型可用性、reasoning_effort=`max`、上下文窗口配置成为新增热点（[#36140](https://github.com/anomalyco/opencode/issues/36140) / [#36141](https://github.com/anomalyco/opencode/issues/36141) / [#36247](https://github.com/anomalyco/opencode/issues/36247) / [#36391](https://github.com/anomalyco/opencode/issues/36391) / [#36574](https://github.com/anomalyco/opencode/pull/36574) / [#36575](https://github.com/anomalyco/opencode/issues/36575)）
2. **🔐 安全与权限模型** — 默认"allow-by-default"被多次提请收紧（[#5076](https://github.com/anomalyco/opencode/issues/5076)），macOS 内核级漏洞报告（[#32002](https://github.com/anomalyco/opencode/issues/32002)）让系统级权限审计成为关注点
3. **🌐 本地/自托管模型支持** — Ollama hang（[#22132](https://github.com/anomalyco/opencode/issues/22132)）、Zen 余额/免费额度错乱（[#14273](https://github.com/anomalyco/opencode/issues/14273) / [#33318](https://github.com/anomalyco/opencode/issues/33318)）、Go 套餐无响应（[#35706](https://github.com/anomalyco/opencode/issues/35706)）反映出多供应商稳定性的核心诉求
4. **🖥 TUI / 桌面端 UX** — 新布局下 Plan/Build 切换（[#31972](https://github.com/anomalyco/opencode/issues/31972)）、MCP 切换（[#36482](https://github.com/anomalyco/opencode/issues/36482) / [#36580](https://github.com/anomalyco/opencode/issues/36580)）、背景 shell 完成提示（[#36534](https://github.com/anomalyco/opencode/pull/36534)）均说明 v2 体验打磨还在进行
5. **📚 多语言 / CJK 支持** — 日文复制乱码（[#30068](https://github.com/anomalyco/opencode/issues/30068)）、中文用户大量讨论本地化体验
6. **🎓 教育 / 引导式工作流** — Guide Mode（[#12675](https://github.com/anomalyco/opencode/issues/12675)）、Teach Mode（[#36521](https://github.com/anomalyco/opencode/issues/36521)）反复被提出，AI 辅助编程的"新手友好"是长期愿景

---

## 🧩 开发者关注点

从高频反馈中可提炼出 5 个反复出现的痛点：

1. **剪贴板 & 多语言文本流转** — `#4283`（剪贴板失效）长期高赞、`#30068`（CJK 乱码）提示 TUI 文本提取链路存在编码假设问题，影响所有终端用户
2. **压缩 / 上下文管理边界** — `#35013`（请求体绕过自动压缩）、`#36553`（压缩后 token 不准）、`#36523`（事件表无界增长）共同指向长会话的资源治理仍不完备
3. **v2 配置层级** — `#36485`/`#36539`（全局与子仓库配置无法合并）、`#36579`（自定义请求头丢失）显示 v2 在多仓/多配置场景下需要更精细的发现规则
4. **子代理（Subagent）行为差异** — `#36250`（`agent.model`/`agent.variant` 被忽略）反映出多代理配置覆盖逻辑不直观
5. **数据库与稳定性** — SQLite 错误被吞（`#36570` 修复）、事件表无界增长（`#36523`）、macOS 内核崩溃（`#32002`）—— 反映出在大规模/长期运行场景下，可观测性与资源边界仍是核心诉求

---

> 📎 **数据范围**：本次日报基于过去 24 小时内更新的 50 条 Issue 与 50 条 PR。完整列表可在 [OpenCode GitHub 仓库](https://github.com/anomalyco/opencode) 查看。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-13

## 📌 今日速览

今日 Pi 仓库活跃度较高，**42 个 Issue** 和 **9 个 PR** 在过去 24 小时内更新，但**无新版本发布**。社区焦点集中在 **OpenAI Codex gpt-5.6 系列模型兼容性**（如 #6477、#6569、#6524、#6555）、**AgentSession 结算与 compaction 生命周期**（#5886、#5463、#6477），以及 **TUI v2 历史分页器**等基础设施改进。值得注意的是，许多 Issue 在过去 24 小时内被快速关闭（多标记为 `no-action` 或 `last-read`），说明维护团队在密集清理积压并做出明确的产品方向判断。

---

## 🚀 版本发布

无

---

## 🔥 社区热点 Issues

按评论数与社区反馈挑选 10 条：

1. **[#6206] Clamping to context window prevents artificial context limits, distinct from maxTokens** — 10 条评论
  此前修复的 `max_tokens` 截断到 context window 的行为被认为过度激进，可能与用户自行设置的"人工上下文限制"产生冲突。链接：<https://github.com/earendil-works/pi/issues/6206>

2. **[#5886] AgentSession settlement/continuation and assistant-tail lifecycle bugs** — 6 条评论，👍 2
  mitsuhiko 创建的 meta issue，归纳了 AgentSession 在后处理逻辑中从已"不再有效"的 transcript 继续执行引发的复发性 bug 类别，是当前稳定性问题的纲领性跟踪条目。链接：<https://github.com/earendil-works/pi/issues/5886>

3. **[#6477] Compaction summary requests omit the session ID, breaking compaction on some OpenAI-Codex models** — 5 条评论，👍 8（今日最高赞）
  实际影响使用 gpt-5.6-luna 等 Codex 模型的用户的核心 compaction 流程，社区认可度高。链接：<https://github.com/earendil-works/pi/issues/6477>

4. **[#5463] fix(coding-agent): auto-compaction after final turn throws error** — 5 条评论，👍 5
  最终轮 assistant 消息后自动 compaction 抛出未捕获错误，根因清晰（`agent.continue()` 排空两个队列后报错）。链接：<https://github.com/earendil-works/pi/issues/5463>

5. **[#5952] ExtensionAPI should expose a safe session replacement API for trusted async UI extensions** — 5 条评论，👍 1
  已被 [no-action] 关闭，但代表了"受信任异步 UI 扩展需要可控会话替换通道"这一持续方向。链接：<https://github.com/earendil-works/pi/issues/5952>

6. **[#2992] Allow session CWD to be changed** — 4 条评论
  长期存在的诉求：希望在 `ExtensionContext` / `SessionManager` 暴露 `setCwd(path)`，以便扩展切换会话工作目录（footer 在 0.65.0 改为读取 session cwd 后变得必要）。链接：<https://github.com/earendil-works/pi/issues/2992>

7. **[#6563] TUI drops image blocks from user messages** — 4 条评论
  通过 `session.prompt()` 传入的 `ImageContent` 模型能收到，但 TUI 渲染与聊天记录只提取文本块，导致剪贴板粘贴与多模态会话记录不一致。链接：<https://github.com/earendil-works/pi/issues/6563>

8. **[#6524] Hide GPT-5.6 reasoning-summary empty placeholders** — 4 条评论
  揭示了 `openai-codex/gpt-5.6-terra` 与 `gpt-5.6-sol` 的 reasoning summary 中的空占位符（`<-->`）暴露在 TUI 上的问题。链接：<https://github.com/earendil-works/pi/issues/6524>

9. **[#6165] Add Scaleway Generative APIs LLM provider** — 3 条评论，👍 2
  添加 Scaleway 作为欧盟区域的零数据保留 Open Weight 模型 provider 的提案。链接：<https://github.com/earendil-works/pi/issues/6165>

10. **[#6324] /tree branch summarization throws "No API key found" for ambient-credential providers (Bedrock, Vertex)** — 3 条评论，👍 2
    揭示 `/tree` 分支摘要流程在 Bedrock / Vertex 等无 `apiKey` 的 ambient-credential provider 上失败，影响企业级部署。链接：<https://github.com/earendil-works/pi/issues/6324>

---

## 🛠 重要 PR 进展

1. **[PR #6580] feat(tui): v2 in-Pi full-history pager over Ledger snapshot**
  为实验性 TUI v2 增加基于 Ledger snapshot 的全历史查看器，可在终端原生滚动之外浏览 Pi 会话的完整保留历史，支持可配置键位导航。链接：<https://github.com/earendil-works/pi/pull/6580>

2. **[PR #6582] fix(ai): respect forceAdaptiveThinking for Bedrock models**
  修复 #6212，让通过 `models.json` 注册的 Bedrock 模型能正确遵守 `compat.forceAdaptiveThinking`，避免硬编码模型名单外的模型错发 `thinking` 参数。链接：<https://github.com/earendil-works/pi/pull/6582>

3. **[PR #6577] fix(coding-agent): coerce numeric read ranges**
  修复 read 工具在某些 provider 将 `offset`/`limit` 保留为字符串时显示 `380-38049` 这类错误范围的问题，并将统一格式应用到交互式卡片、session tree 历史与 HTML 导出。链接：<https://github.com/earendil-works/pi/pull/6577>

4. **[PR #5859] fix(ai): send responses prompts as instructions**
  将 `context.systemPrompt` 走共享的 Responses `instructions` 通道，`input` 仅承载会话与工具回放；覆盖 OpenAI、Azure OpenAI 与 Codex Responses。链接：<https://github.com/earendil-works/pi/pull/5859>

5. **[PR #6572] Render image blocks in interactive user messages**
  TUI 中使用现有 Image 组件渲染交互式用户消息的图像块；剪贴板图片绑定到下一条提交的用户消息而非插入临时路径；footer 显示待发送图片计数。链接：<https://github.com/earendil-works/pi/pull/6572>

6. **[PR #6565] feat(pi-zai): Z.AI extension with quota, resilience, and cache benchmark**
  新增 `@onlinechefgroep/pi-zai` 包：Z.AI 平台 provider、缓存指标、compaction 策略、slash commands、`/zai-usage` Coding Plan 配额监控、连接韧性 doctor 探针、`X-Session-Id` 缓存亲和性等。链接：<https://github.com/earendil-works/pi/pull/6565>

7. **[PR #6561] fix(tui): disable terminal auto-wrap to prevent double rendering**
  通过在 TUI 会话期间禁用 DECAWM，解决与终端宽度恰好匹配的行的双渲染与光标错位。链接：<https://github.com/earendil-works/pi/pull/6561>

8. **[PR #6559] Fix/tree navigation pending tools**
  在 agent 或工具运行中禁止 `/tree` 切换分支（用户可取消导航或中止运行），防止 toolResult 附加到错误分支；含 idle/cancel/abort 三种流程的回归测试。链接：<https://github.com/earendil-works/pi/pull/6559>

> 另：PR #6570（scout extension example）作者已自述为误提交请求删除。

---

## 📈 功能需求趋势

从今日活跃 Issue 中提炼的社区关注方向：

- **OpenAI Codex gpt-5.6 模型生态**：compaction 失败（#6477）、模型 404（#6569）、reasoning 占位符渲染（#6524）、transport 设置继承（#6555）、低 verbosity（#6579）—— Codex 接入完整度是当前最大焦点。
- **Compaction / Session 结算生命周期**：#5886、#5463、#6477、#6578 共同指向 post-run 协调、compaction 与 dispatch 的原子化与可见性。
- **多模态（图像）支持**：#6563 与 PR #6572 表明图片在 session 与 TUI 的端到端保真仍是待补齐的关键路径。
- **扩展 API 表面**：`requestReload()`、会话替换 API、原子 compact-or-join 协调等（#5952、#6552、#6578）反映"扩展一等公民化"的方向。
- **Provider 覆盖与企业部署**：Scaleway（#6165）、Bedrock / Vertex ambient credentials（#6324、#6212）、Z.AI（PR #6565）、自定义 baseUrl 与非 OAuth token（#6564）。
- **TUI v2 体验**：历史分页器（PR #6580）、终端自动换行引发的渲染错位（#6561 / #6562）、自定义键位首次启动不生效（#6459）。
- **RPC / Headless 稳定性**：#6581 揭示 RPC 模式在 OpenAI 兼容 provider 接受但不返回 JSON 时无限挂起，是 host integration 的关键风险。
- **错误可见性**：#6542 提出将 provider 错误通过 user-role advisories 注入到 LLM 上下文。

---

## 💬 开发者关注点（痛点与高频需求）

- **Compaction 静默失败**：compaction 失败本身被吞掉，模型与上层都看不到（#6477、#6542、#6571）——既影响可靠性也影响调试。
- **Session / Tree 一致性**：在 agent 运行中切换分支导致工具结果挂到错误分支（#6558），在 RPC 模式下接受但不响应的 provider 会无限挂起（#6581）。
- **ambient-credential provider 兼容性**：Bedrock / Vertex 没有 `apiKey`，但 `/tree` 摘要等子流程仍按"必须有 apiKey"路径校验（#6324）。
- **上下文窗口截断 vs 人工限制**：自动截断到 context window 会让用户预设的"软上限"失效（#6206），在长会话场景下尤其敏感。
- **多模态在 TUI 的双重不一致**：模型看到图、TUI 不显示；剪贴板粘贴的临时路径在提交时丢失（#6563 / PR #6572）。
- **首次会话自定义不生效**：自定义键位 / 编辑器组件在首次启动时未应用，需要 `/reload`（#6459）——破坏冷启动体验。
- **错误信息可观测性**：OpenAI-Completions 在 `content` 为 `null`/`undefined` 时抛底层 `map` 错误（#6568）；RPC 模式下不响应无任何 `agent_settled`（#6581）——可调试性是 host 集成的硬需求。

---

*数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) 与 [earendil-works/pi](https://github.com/earendil-works/pi)。日报生成时间：2026-07-13。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-13

> 数据来源: GitHub `QwenLM/qwen-code` 仓库  
> 统计周期: 过去 24 小时

---

## 1. 今日速览

过去 24 小时社区整体聚焦于 **多工作区守护进程（daemon）架构演进**、**Web Shell 体验完善** 以及 **CI/发布流程稳定性** 三大方向。P1 级别的 Main CI 失败、Release 失败和 Feishu 凭据校验问题需要重点关注；`/review` 与 `/triage` 自动化工具经过多轮迭代趋于成熟。Issues 评论热度由 RFC #6378（多工作区）以 20 条评论领跑。

---

## 2. 版本发布

过去 24 小时内 **无新 Release**。

需要警惕的发布风险：
- [#6786](https://github.com/QwenLM/qwen-code/issues/6786) — `v0.19.9-nightly.20260713.ff7d48a61` Release 工作流失败（quality 阶段）
- [#6749](https://github.com/QwenLM/qwen-code/issues/6749) — `v0.19.9-nightly.20260712.01d406f1c` 发布失败（quality / integration_none / integration_docker 三个任务均失败）

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 关注点 |
|---|-------|------|--------|
| 1 | [#6378](https://github.com/QwenLM/qwen-code/issues/6378) **RFC: Support multiple workspaces in one qwen serve daemon** | OPEN, 💬20 | **当之无愧的今日头条**。doudouOUC 提出的多工作区架构 RFC，已引发 20 条讨论。提议单个 `qwen serve` 进程托管多个工作区，同时保留单工作区兼容路径，是 daemon 演进方向的核心提案。 |
| 2 | [#5472](https://github.com/QwenLM/qwen-code/issues/5472) **Restore real-time full-pane thinking streaming** | OPEN, 👍1, 💬6 | v0.18.2 起实时思考流式输出出现回归问题，影响链式思考可读性。社区反映强烈，关注 UX 体验回归。 |
| 3 | [#6721](https://github.com/QwenLM/qwen-code/issues/6721) **Keep deferred tool discovery from invalidating prompt cache prefixes** | OPEN, 💬6 | 涉及 deferred tool 发现机制对 prompt cache 前缀的污染问题，是 **性能/缓存** 关键议题，与 prompt caching 命中率直接相关。 |
| 4 | [#6312](https://github.com/QwenLM/qwen-code/issues/6312) **tracking(serve): reduce per-session overhead on the daemon session-creation path** | OPEN, 💬5 | daemon 跟踪议题，目标降低 ACP 子进程 session/load/resume 路径上的同步 I/O 与对象构造开销，对**长跑 daemon** 性能有显著影响。 |
| 5 | [#6762](https://github.com/QwenLM/qwen-code/issues/6762) **Skill Context Lifecycle Management** | OPEN, 💬4 | 提议 SKILL.md 上下文生命周期管理机制，解决 Skill 主体永久驻留 context 无法卸载/压缩的问题，属于 context 性能方向重要需求（今日已并入路线图）。 |
| 6 | [#6755](https://github.com/QwenLM/qwen-code/issues/6755) **Devlog + Living Spec: background agents for cross-session project persistence** | OPEN, 💬4 | 为长周期项目提出 devlog + living-spec 后台 agent 方案，扩展 Qwen Code 在跨会话持久化场景的能力。 |
| 7 | [#6781](https://github.com/QwenLM/qwen-code/issues/6781) **Main CI failed: E2E Tests on 417d305** | OPEN, **P1** | 主分支 E2E 失败，影响合并阻塞，需立即关注。 |
| 8 | [#6779](https://github.com/QwenLM/qwen-code/issues/6779) **bug(channels): Feishu worker reports ready with invalid credentials** | OPEN, **P1** | Feishu 通道在凭据无效时仍上报 `ready`，存在**凭据安全**与守护进程"全失败"判定风险，PR #6780 已同步提交修复。 |
| 9 | [#6666](https://github.com/QwenLM/qwen-code/issues/6666) **qwen 3.7 max 模型在 content 字段中返回 `<think>` 标签** | CLOSED, 💬3 | 知名模型兼容性问题，影响 reasoning 字段解析，已通过 PR #6783 撤销原修复方案、PR #6777 重新提交正确实现。 |
| 10 | [#6378 之外 - #5976](https://github.com/QwenLM/qwen-code/issues/5976) **feat(serve): Support daemon-managed channel workers via qwen serve --channel** | CLOSED, 💬3 | 守护进程 channel 工作者管理 v1 落地，与 #6378 路线图互为呼应。 |

其他值得关注的 P1/P2 议题：
- [#6776](https://github.com/QwenLM/qwen-code/issues/6776) Ctrl-C 退出后终端按键失灵（`9;5u`）  
- [#6773](https://github.com/QwenLM/qwen-code/issues/6773) Main CI 失败 (39e3bc0)  
- [#6775](https://github.com/QwenLM/qwen-code/issues/6775) ACP 工具调用准备事件暴露  
- [#6770](https://github.com/QwenLM/qwen-code/issues/6770) Web Shell 只读 transcript viewer  
- [#6774](https://github.com/QwenLM/qwen-code/issues/6774) 支持 Grok 3/4/4 Heavy 模型

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容要点 |
|---|----|------|----------|
| 1 | [#6638](https://github.com/QwenLM/qwen-code/pull/6638) **feat(serve): add extension management v2** | OPEN | 引入 `extension_management_v2` 能力，扩展激活支持「全局默认 + 工作区精确覆盖」策略，扩展产物仍为用户级共享，daemon 架构又一关键能力。 |
| 2 | [#6780](https://github.com/QwenLM/qwen-code/pull/6780) **fix(feishu): validate credentials before WebSocket startup** | OPEN | Feishu WebSocket 启动前通过 tenant-token 请求校验凭据，无效则立即拒绝 channel 启动，修复 P1 凭据绕过问题。 |
| 3 | [#6790](https://github.com/QwenLM/qwen-code/pull/6790) **fix(review): stop dropping live blockers** | OPEN | 修复 `/review` 漏报维护者实时 blocker 的问题，并新增测试覆盖检测新测试是否真正 gate 新代码。 |
| 4 | [#6771](https://github.com/QwenLM/qwen-code/pull/6771) **feat(review): capture untracked files, resolve anchors from snippets** | OPEN | `/review` 三项修复：捕获未跟踪文件、从片段解析锚点、在代码中 gate 发布，针对"声明已读但实际未读"的体验性 bug。 |
| 5 | [#6789](https://github.com/QwenLM/qwen-code/pull/6789) **feat(triage): add confidence score, sequence diagram** | OPEN | `/triage` PR 评论新增置信度评分、时序图、文件概览与 review footer，提升评论信号密度。 |
| 6 | [#6777](https://github.com/QwenLM/qwen-code/pull/6777) **fix(core): track thinking tags across streamed deltas** | OPEN | #6754 的 follow-up，跨整个流式响应跟踪可见 `<think>` 标签前缀与开闭平衡，正确处理 #6666 描述的协议畸形场景。 |
| 7 | [#6788](https://github.com/QwenLM/qwen-code/pull/6788) **fix(core): include skill results in microcompaction** | OPEN | Skill 工具结果纳入 microcompaction 策略，配合 Issue #6762 的 Skill Context 生命周期管理。 |
| 8 | [#6766](https://github.com/QwenLM/qwen-code/pull/6766) **feat(ci): add stale failure patrol** | OPEN | 每 10 分钟巡检一次陈旧 PR/main CI 失败，自动分类 rerun / 拉取新 main / 限速动作，缓解 #6781/#6773 等 CI 失败堆积。 |
| 9 | [#6787](https://github.com/QwenLM/qwen-code/pull/6787) **fix(core): reorder LruCache entries on get() for falsy values** | OPEN | 修复 `LruCache.get()` 对 `0 / '' / false / null` 不更新 LRU 顺序的隐藏 bug；取代长期未合并的 #2968。 |
| 10 | [#6741](https://github.com/QwenLM/qwen-code/pull/6741) **feat(cli): Add runtime daemon channel control** | OPEN | 为未指定 `--channel` 的 daemon 增加运行时 channel 启停/替换/查询能力（HTTP + TS SDK + `qwen channel` CLI）。 |

其他亮点 PR：
- [#6703](https://github.com/QwenLM/qwen-code/pull/6703) Web Shell 新增 session 创建回调  
- [#6768](https://github.com/QwenLM/qwen-code/pull/6768) Web Shell Settings 支持用户级 `~/.qwen/settings.json` 编辑 + 面板内模型管理  
- [#6784](https://github.com/QwenLM/qwen-code/pull/6784) 合并 `git status --short --branch` 减少快照进程  
- [#6745](https://github.com/QwenLM/qwen-code/pull/6745) serve 支持运行时移除 workspace  
- [#6785](https://github.com/QwenLM/qwen-code/pull/6785) 修复 `getLanguageFromFilePath` 漏检 dotfile 的问题

⚠️ **回退 / 需关注**：
- [#6783](https://github.com/QwenLM/qwen-code/pull/6783) revert #6754 — 原流式响应重试逻辑引入 aggressive 漏检，临时回退  
- [#6782](https://github.com/QwenLM/qwen-code/pull/6782) revert #6764 — plan mode 错误信息引导不当

---

## 5. 功能需求趋势

按出现频次与重要性排序，社区当前最关注的方向：

1. **Serve / Daemon 架构深化** — 多工作区（#6378）、channel worker（#5976/#6741）、运行时控制（#6741/#6745）、扩展管理 v2（#6638）形成完整生态，**daemon 正在成为核心部署形态**。
2. **Context 性能与缓存** — Skill 生命周期（#6762）、deferred tool 缓存前缀（#6721）、microcompaction（#6788）、LruCache 正确性（#6787/#2968）集中爆发，**长会话下的 token 治理** 是工程化首要痛点。
3. **Web Shell 体验** — session 回调（#6703）、设置面板（#6768）、git 分支按钮（#6702）、只读 transcript（#6770）、session 颜色（#6744）密集迭代，**Web Shell 正从 beta 走向生产可用**。
4. **多模型支持扩展** — Grok 系列（#6774）、inline `/model` 切换（#5967）、qwen 3.7 max 兼容（#6666/#6777）—— **OpenAI 兼容 provider 接入** 是社区共识方向。
5. **Review / Triage 自动化** — `/review`（#6790/#6771）与 `/triage`（#6789）持续打磨，AI 自我审查能力成为 Qwen Code 差异化亮点。
6. **后台 Agent 与持久化** — #6755 提出 devlog + living-spec 后台 agent，进入路线图讨论。
7. **CI / Release 稳定性** — 多次主分支与 nightly 发布失败（#6781/#6773/#6749/#6786），`stale failure patrol`（#6766）应运而生。
8. **凭据安全** — Feishu 凭据绕过（#6779/#6780）凸显多 channel worker 的安全边界治理需求。

---

## 6. 开发者关注点

基于过去 24 小时的开发者反馈，提炼出以下高频痛点：

- **🔧 守护进程性能与正确性**：`qwen serve` 已被大量用于长跑部署，但 session 创建开销（#6312）、channel 凭据校验（#6779）、workspace 生命周期（#6378/#6745）等问题频出。开发者希望看到一个**生产级、可观测、可控**的 daemon。
- **🧠 长上下文管理缺位**：Skill 永久驻留、deferred tool 缓存污染、microcompaction 覆盖不全，开发者普遍期待更系统的**context 生命周期 API**（#6762/#6721/#6788）。
- **⌨️ 交互体验回归**：思考流式回退（#5472）、Ctrl-C 后终端状态错乱（#6776）等"已修复但又坏了"类问题消耗了开发者信任，**回归测试覆盖**被反复提及。
- **🤖 自审自改 Bot 信任度**：`/review` 漏报 blocker（#6790）、`/triage` 输出结构化不足（#6789）—— 自动化代码审查功能在落地的最后一公里仍有摩擦。
- **🚀 发布流程脆弱**：连续两日 nightly 失败（#6749/#6786），多任务同时挂掉（quality / integration），社区担忧**主干稳定性**。
- **🔌 模型生态扩展**：OpenAI 兼容是主路径，Grok 接入门槛低，社区期待"声明即用"的 provider 体系（#6774）。
- **🛡️ 凭据与权限边界**：Feishu 案例（#6779）暴露 channel worker 的安全验证不应仅靠 SDK 上游，**本地验证层**不可或缺。

---

*日报生成时间: 2026-07-13 · 数据基于 GitHub Issues/PRs 公开信息*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**: 2026-07-13
**数据来源**: github.com/Hmbown/DeepSeek-TUI

---

## 📌 今日速览

过去 24 小时内项目活跃度集中在 **Anthropic 适配层修复** 与 **多 Provider 计费体系重构** 两条主线：3 个相关 Issue 持续发酵（涉及 API 400 错误、Scorecard 价格计算），同时有 7 个 PR 集中合入或进入评审，其中 4 个为功能/缺陷修复，1 个为新模型路由接入（MiniMax），其余为构建环境与本地化相关。社区整体处于"小幅快跑"状态，单日无新版本发布。

> ⚠️ **数据观察**: 本次拉取的数据中，仓库名为 `Hmbown/DeepSeek-TUI`，但所有 Issue / PR 链接实际指向 `Hmbown/CodeWhale` 仓库，二者似为同一项目的不同命名或存在仓库迁移。建议在后续日报中确认仓库主入口。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时内无 Release 活动）。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时更新的 Issue 仅有 3 条，已全部收录（社区活跃度较低，单日无可挑选的 10 条候选）。

### #4329 [OPEN] 🐛 Anthropic API error（tool_use/tool_result 不匹配）
- **作者**: lixin34 ｜ 👍 0 ｜ 💬 6
- **重要性**: ⭐⭐⭐⭐⭐ **本日最高优先级** —— 评论数最多（6 条），是社区当前最活跃讨论。
- **核心问题**: 调用 Anthropic API 时返回 HTTP 400，提示 `tool_use` block 缺少紧随其后的 `tool_result` block，影响工具调用链路的稳定性。
- **社区反应**: 已被多人关注并讨论，但暂无明确修复方案，疑似 TUI 在多轮工具调用时的消息重组逻辑存在缺陷。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4329

### #3915 [OPEN] ✨ ux(skills): `$skill <task>` 和 `/<skill> <task>` 静默丢弃任务文本
- **作者**: Hmbown ｜ 👍 0 ｜ 💬 1
- **重要性**: ⭐⭐⭐⭐ **影响 UX 一致性** —— 直接破坏类 Claude Code 的核心交互范式。
- **核心问题**: 用户执行 `$debug why does auth fail` 时，技能被激活但参数被丢弃，需要重新输入。
- **社区反应**: 由项目维护者亲自提出，说明官方已意识到问题严重性。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/3915

### #4335 [OPEN] 🐛 Make offline scorecard pricing provider-aware
- **作者**: Hmbown ｜ 👍 0 ｜ 💬 1
- **重要性**: ⭐⭐⭐⭐ **影响计费准确性** —— 关联本日多条 PR 的核心背景。
- **核心问题**: 离线 scorecard 接受 model ID 但缺少 provider 上下文，导致同一模型在不同 Provider 路由下可能被错误地套用 API 价格。
- **社区反应**: 维护者主推，且对应 PR #4351 同步进行中。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4335

---

## 🛠 重要 PR 进展

> 说明：过去 24 小时共 7 个 PR 更新，全部收录。

### 已合入/已关闭（4 条）

#### #4346 [CLOSED] 🐛 fix: sanitize tool input_schema for Anthropic adapter
- **作者**: qinlinwang
- **修复内容**: 清理工具 `input_schema` 顶层的 `oneOf`/`anyOf`/`allOf`，解决 Anthropic API 报 HTTP 400 的问题；与 Issue #4329 同源。
- **意义**: 直接缓解本日最热门 Issue 的报错路径。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4346

#### #4348 [CLOSED] 🐛 fix(tui): bill Anthropic cache-write tokens at published rates (#4318)
- **作者**: knqiufan
- **修复内容**: 将 `cache_creation_input_tokens` 正确归类为 `prompt_cache_write_tokens`，并在 TUI 的 `CurrencyPricing` 中新增 `cache_write_per_million` 字段，发布 5 分钟写入费率。
- **意义**: 修复 Anthropic 与 Qwen 系列缓存写入计费偏差。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4348

#### #4347 [CLOSED] 🌐 i18n: add Korean (ko) locale support
- **作者**: moduvoice
- **新增功能**: 新增 `crates/tui/locales/ko.json`，覆盖全部 752 个键的韩语翻译。
- **意义**: 持续推进本地化，对韩语用户群友好。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4347

#### #4349 [CLOSED] 🔧 Update Cargo.toml to allow build under NetBSD
- **作者**: ci4ic4
- **修复内容**: 为 NetBSD（及 FreeBSD/OpenBSD/DragonFly）生成 `rquickjs` 缺失的 bindings，使项目可在 BSD 体系下编译。
- **意义**: 扩展平台兼容性。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4349

#### #4353 [CLOSED] 📚 docs: add Cursor Cloud dev-environment setup notes to AGENTS.md
- **作者**: Hmbown
- **修复内容**: 在 `AGENTS.md` 中新增 "Cursor Cloud specific instructions" 章节，记录云端 VM 的开发环境注意事项；仅文档变更。
- **意义**: 优化 AI 代理在云端开发环境的协作体验。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4353

### 仍 OPEN（2 条）

#### #4352 [OPEN] ✨ feat: add MiniMax Messages-compatible route
- **作者**: octo-patch
- **新增功能**: 在 provider registry / 配置 / CLI / TUI / 请求客户端中接入 MiniMax Messages 兼容路由，注册 `MiniMax-M3` 与 `MiniMax-M2.7` 模型及其能力与上下文元数据。
- **意义**: **拓展模型生态** —— 让用户可在 TUI 中直接使用 MiniMax 系列模型。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4352

#### #4351 [OPEN] 🐛 fix(scorecard): bind costs to provider routes
- **作者**: nightt5879
- **修复内容**: 在离线 scorecard 记录中接受 `provider` / `effective_provider` 来源信息，并按 `(provider, wire_model_id)` 精确目录解析 USD 成本，兼容 Codex OAuth、本地/自建、自定义与未定价网关等场景。
- **意义**: 直接对应 Issue #4335，是计费体系重构的关键 PR。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4351

---

## 📈 功能需求趋势

从今日活跃 Issue / PR 提炼出的社区关注方向：

| 方向 | 热度 | 代表条目 |
|------|------|----------|
| **多 Provider 计费/计费透明化** | 🔥🔥🔥🔥🔥 | #4335、#4351、#4348 |
| **Anthropic 适配稳定性** | 🔥🔥🔥🔥 | #4329、#4346 |
| **新模型 / 新 Provider 接入** | 🔥🔥🔥 | #4352（MiniMax 路由） |
| **交互 UX 优化（类 Claude Code 范式）** | 🔥🔥🔥 | #3915 |
| **国际化（i18n）** | 🔥🔥 | #4347（韩语） |
| **跨平台构建支持** | 🔥🔥 | #4349（NetBSD/BSD） |
| **AI 代理开发体验** | 🔥 | #4353（Cursor Cloud） |

**核心趋势**: 项目正处于从"单一 Provider（DeepSeek）"向"多 Provider 联邦"演进的阶段，**计费/价格计算的正确性**与**Provider 路由的可识别性**已成为新阶段的两大基础设施诉求。

---

## 💡 开发者关注点

基于 Issue 评论与 PR 描述，社区痛点可归纳为以下 4 类：

1. **🔌 Anthropic 工具调用兼容性** —— 工具 `input_schema` 中嵌套的 `oneOf/anyOf/allOf` 直接被 API 拒绝（#4329、#4346），是阻碍 Anthropic 路线稳定性的主要障碍。

2. **💰 计费数据缺上下文** —— 离线 scorecard 仅以 model 维度记录成本，丢失了 provider 来源信息，导致 OAuth、本地部署、网关转发等场景出现"价格错配"（#4335、#4351、#4348）。

3. **⌨️ 技能调用参数丢失** —— 类 Claude Code 的快捷指令（`$skill <task>`）当前只激活技能而丢弃 task 文本，破坏工作流连贯性（#3915）。

4. **🌍 平台与语言覆盖不全** —— BSD 体系编译失败、韩语等本地化尚未内置，影响小众但真实的用户群体（#4349、#4347）。

> 📊 **总体判断**: 今日项目节奏轻快（无大版本发布）、变更面广（横跨 7 个 PR），但深度集中在 **Provider 适配与计费一致性**这一主轴；下一阶段若能合入 PR #4351 与 #4352，将显著完善多 Provider 体系闭环。

---

*报告生成时间: 2026-07-13 ｜ 数据窗口: 过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*