# AI CLI 工具社区动态日报 2026-09-02

> 生成时间: 2026-09-02 02:23 UTC | 覆盖工具: 9 个

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
**数据窗口：2026-09-02 · 覆盖 8 个主流工具**

---

## 一、生态全景

2026 年 9 月的 AI CLI 工具市场已进入**"生产可用性"深度博弈阶段**——头部工具（Claude Code、Codex、Copilot CLI、Gemini CLI）的社区讨论重心从模型能力全面转向跨平台一致性、远程任务链路稳定性、配额透明度和权限系统可靠性；二三梯队工具（OpenCode、Pi、Qwen Code、DeepSeek TUI、Kimi Code）则处于密集的架构演进期，TUI 重构、Provider 矩阵扩张、协议层抽象（如 ACP、MCP）是共同发力点。整体生态呈现"成熟工具收敛细节 + 新兴工具构建差异化"的二元格局。

---

## 二、各工具活跃度对比

| 工具 | 24h Issue 数 | 24h PR 数 | 今日 Release | 社区规模信号 | 阶段判断 |
|------|-------------|---------|-------------|------------|---------|
| **Claude Code** | ~10 热点 + 更多常规 | 2（活跃度极低） | v2.1.257 / v2.1.258 | 头部，单 issue 评论 99、点赞 128 | 稳定迭代 + 重磅模型发布 |
| **OpenAI Codex** | 10 热点 + 50 总计 | 10（bot 自动） | rust-v0.152.1 + 3 alpha | 头部，单 issue 评论 47–56 | 高频迭代 + 远程控制重点投入 |
| **Gemini CLI** | 50 总计 | 39 | v0.58.0 + v0.59.0-preview + nightly | 中头部，新贡献者活跃 | 安全加固主线 |
| **GitHub Copilot CLI** | 36 总计 | **0** | v1.0.83-1 | 头部，长期 issue 75 赞 | 小步快跑，回归频发 |
| **Kimi Code CLI** | **2**（均 CLOSED） | 4 | v1.50.0 | 小型，迁移过渡期 | 战略转型期 |
| **OpenCode** | 50 总计 | 10（多 OPEN） | v1.18.26 | 中型，PR 密度高 | 架构演进密集期 |
| **Pi (earendil-works)** | 50 总计 | 10+（多由维护者直接合） | 无 | 中型，回归控制争议 | 0.84.x 快速迭代 |
| **Qwen Code** | 30+（含 closed） | 20+ | cua-driver-rs v0.20.3 | 中大型，中文场景为主 | OpenTUI/ACP 双主线重构 |
| **DeepSeek TUI** | 10 热点 + 19 同步关闭 | 10+ | 无 | 中型，集中清扫模式 | 设计语言 + 生态扩张 |

**关键观察**：
- **PR 活跃度倒挂**：Claude Code 24h 仅 2 PR，与社区体量严重不匹配；Gemini CLI 以 39 PR 居首，反映其"全栈自主"开发节奏。
- **版本节奏差异**：Claude Code 同日双版本，OpenCode/Qwen Code/Copilot CLI 小步快跑，Kimi Code/Deepek TUI 静默推进。
- **Issue 关闭率**：DeepSeek TUI（19 条同步关闭）、Kimi Code（2 条均 CLOSED）呈现"集中清扫"模式，而 OpenCode/Pi 关闭率相对分散。

---

## 三、共同关注的功能方向

### 🔥 跨工具共识议题

| 议题方向 | 涉及工具 | 典型诉求 |
|---------|---------|---------|
| **MCP 协议兼容性** | Claude Code、Codex、Copilot CLI、DeepSeek TUI | 双时代握手（#4525）、JSON Schema draft-07 拒绝（#86142）、OAuth 头注入、token 刷新、超时预算 |
| **Windows / 桌面端体验** | Claude Code、Codex、Copilot CLI、OpenCode、DeepSeek TUI | GPU 崩溃、窗口置顶、WSL2 路径解析、bundled exe 重定位、PowerShell 退出语义 |
| **TUI / 编辑器增强** | Claude Code（Vim）、Codex（composer）、OpenCode（preview）、Pi（TUI）、DeepSeek（Tideline） | Vim redo、命令折叠、TUI 内只读文件预览、双列选择器 |
| **Provider / 模型兼容性矩阵** | Claude Code、Codex、Gemini CLI、Pi、Qwen Code、DeepSeek TUI | Claude 5 thinking blocks、Gemini 3.x thought_signature、llama.cpp 回归、GLM/Kimi 路由 |
| **权限系统可靠性** | Claude Code、Qwen Code、Gemini CLI | bypassPermissions 绕过 hooks、permissions.allow 语义变化（P1）、a2a-server 凭证泄露 |
| **长会话稳定性** | Copilot CLI（OOM）、Codex（远程 SSH）、OpenCode（会话丢失/串味）、Gemini CLI（Auto Memory） | libuv handle 泄漏、V8 堆耗尽、会话压缩后指令丢失、MCP 超时无恢复 |
| **配额 / 计费透明** | Claude Code、Codex | Bedrock 计费风暴、Pro 用户"selected model at capacity"、OTLP 指标失联 |
| **Agent 自治可靠性** | Gemini CLI、Pi、Claude Code、Qwen Code | subagent 误报 GOAL success、infinite thinking loop、ACP NDJSON 队列撕裂 |
| **OAuth / 鉴权迁移** | Gemini CLI（Antigravity）、DeepSeek TUI（ChatGPT PKCE）、Kimi Code（CLI→Code） | 迁移路径不清、依赖外部 CLI、PKCE 内置化 |

### ⚠️ 共性深层问题

- **回归测试覆盖不足**：Claude Code（macOS Monterey 启动、macOS Dock）、Codex（Windows + WSL 启动）、Pi（0.84.x 连续回归）均暴露跨平台/跨版本回归未被自动化覆盖。
- **协议文档与实现脱节**：MCP `outputSchema`、`disable-model-invocation`、ACP `requiresUserInteraction` 等规范语义模糊，客户端实现各行其是。
- **新模型配套滞后**：Claude Fable 5/5.1、Qwen 3.8、Gemini 3.x 均出现"模型上线但配套未跟上"的系统性时滞。

---

## 四、差异化定位分析

| 工具 | 核心差异化 | 技术选型倾向 | 目标用户画像 |
|------|----------|-------------|------------|
| **Claude Code** | 治理/合规插件生态（web4-governance）、企业级权限审计 | Fable 5.1 + 1M 上下文、T3 信任张量 | 大型企业、Agent 治理研究者 |
| **OpenAI Codex** | ChatGPT 桌面深度整合、Remote Control/SSH 任务接管 | Guardian 审批、app-server 线程模型、Shell Snapshot V2 | ChatGPT 重度用户、远程开发者 |
| **Gemini CLI** | 安全加固主线、Antigravity 生态迁移 | a2a-server、MCP 安全、subagent 状态机 | Google Cloud 生态、安全敏感团队 |
| **GitHub Copilot CLI** | GitHub 原生集成、BYOK 灵活、企业组织管控（forceLoginOrgs） | Sessions 侧边栏、Plugin Marketplace、Node.js SEA | GitHub 企业用户、多模型混部团队 |
| **Kimi Code CLI** | 中文场景深耕、Python→Code 战略迁移 | 弃用感知更新流程、CDN migration.json | Moonshot 存量用户、中文开发者 |
| **OpenCode** | TUI 化编辑器宿主（Neovim 集成）、本地 LLM Gateway | OpenAI 兼容端点、prompt_async、Provider 矩阵 | 编辑器插件作者、本地化部署 |
| **Pi (earendil-works)** | 轻量级、headless/RPC 一等公民、扩展 API | `pi.setModel()`、subagent 调度参数、XAUTH_TOKEN 注入 | 自动化集成方、CI/CD 场景 |
| **Qwen Code** | 多 Provider 推理控制、Managed Auto-Memory、Bubblewrap 沙箱 | OpenTUI 渲染层、ACP 后端路由、Mem0 兼容 | 阿里云生态、企业 Daemon 部署 |
| **DeepSeek TUI** | 设计语言驱动（Tideline wave）、国产 Provider 优先 | ratatui Inline Viewport、Fleet 路由、SHELL-DESIGN-20260901 | 国产生态用户、设计/UX 驱动型团队 |

**路线分野**：

- **"模型即生态"路线**：Claude Code、Codex、Gemini CLI——围绕自家模型与平台深度绑定。
- **"模型无关运行时"路线**：OpenCode、Pi、Qwen Code——做 Provider 无关的 SDK / Gateway / Runtime。
- **"平台集成路线"**：Copilot CLI（GitHub）、DeepSeek TUI（飞书/钉钉）——以宿主平台为锚点。
- **"中文/区域生态"路线**：Kimi Code、Qwen Code、DeepSeek TUI——围绕国产模型与中文场景。

---

## 五、社区热度与成熟度

### 🔴 高活跃 + 头部成熟

- **Claude Code**：单 issue 评论量 26–99，点赞 128，沉淀了庞大的存量用户；但 PR 活跃度极低（24h 仅 2），存在"用户多但贡献者少"的结构性矛盾。
- **OpenAI Codex**：50 条日活 issue，10 条 PR 由 `copyberry[bot]` 自动提交（推测 fast-track），反映**自动化程度极高**但社区外贡献通道收窄。
- **GitHub Copilot CLI**：长期 issue 75 赞（Vim 模式）今日关闭，标志跨年度诉求终结；但 24h 0 PR 与多个 BYOK 回归并存，**SLA 治理压力**。

### 🟠 中活跃 + 架构演进期

- **Gemini CLI**：50 issue + 39 PR，节奏健康；P1 级 bug 多集中在 Agent 状态机与 OAuth 迁移，**架构稳健性尚在验证**。
- **OpenCode**：50 issue + 10 PR，开发者参与度活跃；正在从 CLI 工具向"可嵌入 SDK / 运行时"演进，**扩展面是最大想象力**。
- **Qwen Code**：30+ issue + 20+ PR，OpenTUI 与 ACP 双线并行，**重构密度最高**。
- **Pi**：50 issue + 10 PR，维护者（badlogic）直接合并关键 PR，**开发集中度高但回归控制存疑**。

### 🟡 低活跃 + 战略转型期

- **Kimi Code**：24h 仅 2 issue，处于 `kimi-cli` → Kimi Code 的**品牌迁移过渡期**，用户反馈渠道收窄。
- **DeepSeek TUI**：19 条同步关闭 + 设计语言 PR 集中，体现**集中清扫 + 设计驱动**节奏；社区体量小但迭代有章法。

### 成熟度雷达（综合维度）

| 工具 | 功能完整度 | 稳定性 | 文档/规范 | 生态扩展 | 社区参与度 |
|------|---------|--------|---------|---------|-----------|
| Claude Code | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| OpenAI Codex | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| Gemini CLI | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Copilot CLI | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ |
| Kimi Code | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐ |
| OpenCode | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ |
| Pi | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Qwen Code | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| DeepSeek TUI | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ |

---

## 六、值得关注的趋势信号

### 📈 信号 1：CLI → "可编程运行时"是确定性方向

OpenCode、Pi、Qwen Code 都在向 SDK / Runtime / Gateway 演进：OpenCode 暴露 `GET /tui/prompt`、`POST /tui/append-prompt`、OpenAI 兼容端点；Pi 把 `--mode rpc` 当作"一等公民"；Qwen Code 推进 ACP 后端路由。**CLI 工具正在变成 Agent 基础设施**，开发者应关注 API 稳定性与扩展契约。

### 📈 信号 2：MCP 已是事实标准，但成熟度不足

8 个工具中至少 4 个（Claude Code、Codex、Copilot CLI、DeepSeek TUI）在报告 MCP 相关问题，涵盖握手、Schema、OAuth、超时。**MCP 已成必备，但实现质量参差**——构建第三方 MCP server 时需注意多客户端兼容性测试。

### 📈 信号 3：远程任务（Remote SSH / Remote Control）是新主战场

Codex 投入最多（Remote Control + Remote SSH 工具链），OpenCode、Pi、Qwen Code 也都在做"local 编排 +

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-02 | 数据源：anthropics/skills 仓库**

---

## 一、热门 Skills 排行（按社区关注度）

> 说明：原始数据中 PR 评论数显示为 "undefined"，以下排行综合 **Issue 交叉引用密度、近期更新活跃度、问题严重性与复用面** 评估。

### 🥇 #1 PR #1298 — fix(skill-creator): run_eval.py 始终 0% 召回率
- **作者**：MartinCajiao | **状态**：OPEN | **更新**：2026-06-23
- **功能**：修复 skill-creator 评测脚本 run_eval.py 的核心 bug——所有 description 都被报告为 `recall=0%`，导致描述优化循环在噪声上迭代。
- **热点**：直接呼应 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 条评论，10+ 独立复现），是社区报告次数最多的功能缺陷；影响 run_loop.py 与 improve_description.py 的整条自优化链路。
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #2 PR #210 — Improve frontend-design skill clarity and actionability
- **作者**：justinwetch | **状态**：OPEN | **更新**：2026-03-07
- **功能**：重写前端设计 Skill，让每条指令都可在单次会话内可执行，让 skill 指引更具体、可执行。
- **热点**：解决"Skill 写得过于发散、Claude 跑不出预期效果"的典型痛点，是 Skill 工程化的标志性讨论。
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

### 🥉 #3 PR #525 — Add pyxel skill for retro game development
- **作者**：kitao | **状态**：OPEN | **更新**：2026-07-15
- **功能**：基于 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 提供复古像素游戏工作流（write → run_and_capture → inspect → iterate）。
- **热点**：首个把 MCP server 与游戏开发场景打包成 Skill 的范例，代表了"垂直场景 + MCP 联动"的社区探索方向。
- **链接**：[PR #525](https://github.com/anthropics/skills/pull/525)

### 4. PR #1628 — Hivemind: Zero-Cost Multi-Agent Orchestration
- **作者**：Hanishchow | **状态**：OPEN | **更新**：2026-08-24
- **功能**：让 Claude Code 把"机械执行"委派给 headless opencode workers（跑免费模型），自身只做规划/审阅/合并。
- **热点**：直接把"昂贵模型的上下文是稀缺资源"这一行业共识落地，体现社区对**多 Agent 编排 + 成本隔离**的强烈兴趣。
- **链接**：[PR #1628](https://github.com/anthropics/skills/pull/1628)

### 5. PR #568 — ServiceNow 平台技能（覆盖 ITSM/ITOM/ITAM/SecOps 等）
- **作者**：Vanka07 | **状态**：OPEN | **更新**：2026-08-12
- **功能**：覆盖 ServiceNow 平台 7+ 模块的企业级 Skill。
- **热点**：是社区首个真正意义上的"企业 SaaS 平台包"，表明 Skills 已开始进军 **企业 IT 治理/工作流自动化** 主战场。
- **链接**：[PR #568](https://github.com/anthropics/skills/pull/568)

### 6. PR #1367 — self-audit：机械验证 + 四维推理质量门（v1.3.0）
- **作者**：YuhaoLin2005 | **状态**：OPEN | **更新**：2026-07-02
- **功能**：交付前的"自审门"——先机械校验输出文件，再按损害度优先级做四维推理审计。
- **热点**：与 [Issue #1385](https://github.com/anthropics/skills/issues/1385)（4 评论）的"三门管线"提案呼应，是 **AI 输出质量门控**赛道的核心提交。
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

### 7. PR #1298 / #1099 / #1050 — Windows 兼容性 trio
- **状态**：全部 OPEN
- **热点**：同一类痛点（`run_eval.py` 在 Windows 上跑不通：`[WinError 10038]`、`PATHEXT` 不识别 `.cmd`）。三份独立 PR 都在抢修同一根因，说明 **Windows 群体在 Skill 工具链中被系统性忽略**。
- **链接**：[PR #1099](https://github.com/anthropics/skills/pull/1099) · [PR #1050](https://github.com/anthropics/skills/pull/1050)

### 8. PR #83 — skill-quality-analyzer & skill-security-analyzer
- **作者**：eovidiu | **状态**：OPEN | **更新**：2026-01-07
- **功能**：对 Skill 做五维质量评估 + 安全分析。
- **热点**：与 [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论，最热 Issue）正面呼应，社区急需"Skill 的 Skill"——元层治理工具。
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

---

## 二、社区需求趋势（基于 50 条热门 Issues）

| 趋势方向 | 代表 Issue | 关注度信号 |
|---|---|---|
| 🔒 **安全 / 信任边界** | [Issue #492](https://github.com/anthropics/skills/issues/492) 社区 Skill 借 `anthropic/` 命名空间冒充官方 → 43 评论 🔥 | **最强共识** |
| 🏢 **企业级协作与共享** | [Issue #228](https://github.com/anthropics/skills/issues/228) 组织内 Skill 共享 → 16 评论 / 8 👍；[Issue #189](https://github.com/anthropics/skills/issues/189) 插件去重 → 6 评论 | 平台化诉求 |
| 🧪 **测试 / 评测体系** | [Issue #556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% 触发率 → 12 评论；[Issue #1390](https://github.com/anthropics/skills/issues/1390) `mcp-builder` 评测全 0 → 4 评论 | 评测基础设施缺位 |
| 🧠 **Agent 状态/记忆压缩** | [Issue #1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 → 9 评论；[Issue #412](https://github.com/anthropics/skills/issues/412) agent-governance → 6 评论 | 长任务上下文管理 |
| 🛡️ **输出质量门控** | [Issue #1385](https://github.com/anthropics/skills/issues/1385) 三门质量管线 → 4 评论 | 自审/对抗评审 |
| 📄 **文档生成痛点** | [Issue #12](https://github.com/anthropics/skills/issues/12) docx 空白字符破坏文件 → 4 评论；[Issue #1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次注入 156k token → 4 评论 | Skill 体积与边界 |
| 🔌 **互操作性** | [Issue #16](https://github.com/anthropics/skills/issues/16) Skill 暴露为 MCP → 4 评论；[Issue #29](https://github.com/anthropics/skills/issues/29) 与 AWS Bedrock 集成 → 4 评论 | 生态开放性 |
| 👨‍💻 **开发流程支持** | PR #723 testing-patterns、PR #514 document-typography、PR #509 CONTRIBUTING.md | 工程化最佳实践 |

**提炼出的 5 大新 Skill 方向**：
1. **Skill 元治理 / 安全审计**（命名空间、可信源）
2. **企业平台 Skill 套件**（ServiceNow、SharePoint、ServiceNow）
3. **评测 / 自审 / 对抗评审管道**
4. **多 Agent 编排 & 长记忆压缩**
5. **可移植性（Windows、Bedrock、MCP 互操作）**

---

## 三、高潜力待合并 PR（OPEN 状态、近 60 天有更新）

| PR | Skill / 方向 | 最近更新 | 亮点 |
|---|---|---|---|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** 多 Agent 编排 | 2026-08-24 | "零成本委托执行"概念，社区最易传播 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** HPC 集群 | 2026-08-24 | 科研/HPC 垂直落地 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | **#1628 Hivemind** | 2026-08-24 | 编排层概念性突破 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役模型标注 | 2026-09-01 | 强烈合规性需求，最快可合 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | mcp-builder 评测/序列化修复 | 2026-08-24 | 与 #1390 同根，修复后能恢复整套评测 |
| [#1595](https://github.com/anthropics/skills/pull/1595) | UIZZE Partner Skill | 2026-08-29 | 防 UI-slop Partner 生态扩张 |
| [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 套件** | 2026-08-12 | 企业采纳"开箱即用"标志 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator run_eval.py 修复** | 2026-06-23 | 影响链路最长，理论必合 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit 质量门** | 2026-07-02 | 与 #1385 联动，质量赛道核心 |

> 按"近期更新 + 影响面大 + 解决高频痛点"加权，**#1298、#1607、#1628、#568、#1367** 是最有可能在 30 天内合并的 5 个 PR。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"治理 + 评测 + 信任"——既包括 Skill 自身的元能力（安全审计、质量门、自审），也包括把评测/优化基础设施（run_eval、自审管线）做对，让 Skills 真正从"散落提示词"走向可信赖的企业级一等公民。**

---

# Claude Code 社区动态日报
**日期：2026-09-02**

---

## 📌 今日速览

今日 Anthropic 发布 **v2.1.257 与 v2.1.258** 双版本，核心亮点为 **Claude Fable 5.1** 成为默认模型（1M 上下文、$10/$50 per Mtok）及新增时间格式设置。社区焦点围绕 Fable 5/5.1 上线后引发的 **Max 套餐权限、Bedrock 计费、Windows 桌面 GPU 崩溃** 等连环问题展开；Windows 桌面端"始终置顶无法关闭"问题以 128 个 👍 成为今日最受共鸣的痛点。

---

## 🚀 版本发布

### v2.1.258（修复版）
- 🐛 **修复** macOS 12 (Monterey) 启动失败问题（2.1.255 引入的回归）
- 🐛 **修复** 远程/定时会话在重新发送权限审批后报 "user messages must have non-empty content" 错误

### v2.1.257（功能版）
- ✨ **新增** Claude Fable 5.1 (`claude-fable-5-1`)，现为默认 Fable 模型
  - 1M 上下文窗口
  - 定价：$10 输入 / $50 输出 per Mtok，缓存读取 $0.25/Mtok
- ⚙️ **新增** `timeFormat` 与 `timeZone` 设置（12 小时 / 24 小时 / 24 小时 UTC / strftime 自定义）

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|------|----|--------|
| 1 | [#80444](https://github.com/anthropics/claude-code/issues/80444) Windows 桌面 1.24012.1 GPU 致命崩溃，导致 MSIX 包需 Repair 才能启动 | 99 | 15 | **严重**。NVIDIA RTX 2080 多驱动复现，影响 Windows 11 桌面用户 |
| 2 | [#79337](https://github.com/anthropics/claude-code/issues/79337) Fable 5 在 Max 套餐上要求 usage credits，被静默降级到 Opus 4.8（已 CLOSED） | 76 | 23 | **关键定价/权限问题**。影响自 2026-07-20 Fable 5 标配 Max 起的所有 Max 用户 |
| 3 | [#85891](https://github.com/anthropics/claude-code/issues/85891) Windows 11 桌面窗口始终置顶，无设置可关闭 | 58 | **128** | **社区最高共鸣**。macOS 同类问题长期未解决 |
| 4 | [#86142](https://github.com/anthropics/claude-code/issues/86142) MCP 服务器声明 draft-07 outputSchema 客户端直接拒绝（已 CLOSED） | 41 | 13 | **MCP 生态兼容性问题**，影响所有使用 JSON Schema draft-07 的 MCP 实现 |
| 5 | [#61682](https://github.com/anthropics/claude-code/issues/61682) GitHub 连接器显示"已连接"但 Cowork 中无工具 | 32 | 24 | **Cowork 核心集成失灵**，Windows 11 用户无法使用 GitHub 工具 |
| 6 | [#66020](https://github.com/anthropics/claude-code/issues/66020) macOS 26.5.1 内核区泄漏，`claude.exe` ~20GB 时 panic | 26 | 5 | **严重稳定性问题**。泄漏速率 21→1027/sec 与 agent 负载相关 |
| 7 | [#27474](https://github.com/anthropics/claude-code/issues/27474) `claude --worktree` 覆盖 `$GIT_COMMON_DIR/config` 的 `core.hooksPath` | 14 | 16 | **Git 工作流数据丢失风险**，hooks 配置被静默覆盖 |
| 8 | [#50719](https://github.com/anthropics/claude-code/issues/50719) macOS 26.4/26.4.1 Dock layer-20 阻挡所有 Computer Use 点击 | 10 | 1 | **Computer Use 回归**，与 macOS Dock 渲染层冲突 |
| 9 | [#66540](https://github.com/anthropics/claude-code/issues/66540) Windows 每次子进程派发闪现终端窗口（conhost/cmd/bash） | 9 | 3 | **多 CCD 会话下用户体验严重受损** |
| 10 | [#32469](https://github.com/anthropics/claude-code/issues/32469) Vim 模式光标形状切换（插入模式细光标/正常模式方块） | 5 | **42** | **TUI 增强请求**，Vim 用户长期诉求 |

---

## 🔧 重要 PR 进展

| # | PR | 说明 |
|---|-----|------|
| 1 | [#20448](https://github.com/anthropics/claude-code/pull/20448) web4-governance 插件：T3 信任张量、实体见证、R6 审计追踪 | **OPEN**。面向 AI Agent 时代的轻量级 AI 治理插件，关注度高 |
| 2 | [#78371](https://github.com/anthropics/claude-code/pull/78371) ralph-wiggum 插件安全加固：限制迭代次数、push/publish 守卫、stop-hook 修复 | **CLOSED**。解决无人值守循环自动推送/部署的危险场景 |

> 💡 过去 24 小时 PR 活跃度极低（仅 2 条），社区贡献集中在 Issue 反馈而非代码提交。

---

## 📈 功能需求趋势

从本期 Issues 提炼的社区关注方向：

1. **🆕 新模型 Fable 5/5.1 配套稳定性**（#79337、#91345、#91369）
   - Max 套餐权限校验、Bedrock 计费、模型静默降级等问题集中爆发
   
2. **🖥️ Windows 桌面端体验**（#80444、#85891、#61682、#91366）
   - GPU 崩溃、窗口置顶、Cowork 集成、BSOD 等系统级问题频发

3. **🔌 MCP 协议兼容性**（#86142、#89063）
   - JSON Schema draft 支持、`requiresUserInteraction` 标记语义

4. **🔐 权限系统与 Hooks**（#89251、#75235、#91296、#91368）
   - bypassPermissions 绕过 hooks、settings.local.json 不生效、子 agent 提示无障碍

5. **🎨 TUI 与 Vim 模式增强**（#32469）
   - 42 👍 表明 Vim 用户群体对编辑器体验的强烈诉求

6. **📊 可观测性与计费透明**（#86628、#91165、#91282）
   - OTLP 指标导出失联、Bedrock Haiku 计费风暴、Boost 限额展示不透明

---

## 👨‍💻 开发者关注点

**🔴 高频痛点：**

- **平台特定回归未被覆盖**：macOS Monterey 启动失败、macOS Dock 阻挡点击、macOS 内核泄漏、Windows 桌面 BSOD/GPU 崩溃——跨平台回归问题在快速迭代中频繁出现
- **新模型（Fable 5/5.1）配套未跟上**：权限校验、套餐计费、模型降级通知机制存在系统性缺陷
- **权限模式行为不一致**：`bypassPermissions` 在不同 settings 文件中的处理、是否绕过 PreToolUse hooks 引发开发者信任危机
- **MCP 生态规范模糊**：`requiresUserInteraction`、`outputSchema` 版本兼容、ARn 推断等关键协议细节缺乏文档

**🟢 高频需求：**

- **Hooks 可靠化**：开发者依赖 hooks 做审计与守门，绕过机制必须透明
- **计费可观测**：Bedrock/企业用户要求真实 token 数与可追溯调用链
- **SSH/远程场景**：TUI 在 SSH 下 `/login` 流程无可复制 URL（#91358）
- **可访问性**：子 agent 权限提示不应仅依赖颜色区分（#91369）

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 报告生成于 2026-09-02*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**: 2026-09-02
**数据来源**: [github.com/openai/codex](https://github.com/openai/codex)

---

## 一、今日速览

今日 Codex 仓库呈现出"**回归问题集中爆发**"的态势：macOS Remote Control 与 Windows 桌面端的多个核心工作流出现严重回退，且**模型容量错误**已从偶发问题演变为 Pro/Pro Lite 用户的普遍痛点。同时，团队连发 4 个版本（1 个稳定版 + 3 个 alpha），迭代节奏明显加快。

---

## 二、版本发布

### 🔧 rust-v0.152.1（稳定版）
- **修复**: Guardian 审批审查现在能正确识别通过模型元数据传入的 Node REPL 策略
- [完整 Changelog](https://github.com/openai/codex/compare/rust-v0.152.0...rust-v0.152.1)

### 🧪 rust-v0.153.0-alpha.1 / .alpha.2 / .alpha.4（预发布）
- 三个 alpha 版本在 24 小时内连续发布，暗示 0.153 包含较大特性集合，建议在生产前关注 alpha 渠道的稳定性反馈。

---

## 三、社区热点 Issues（TOP 10）

| # | Issue | 评论 | 👍 | 关键看点 |
|---|-------|------|----|---------|
| 1 | [#39903](https://github.com/openai/codex/issues/39903) 关闭"执行了 N 条命令"折叠的选项 | 56 | 77 | **今日热度最高**，增强请求：希望 TUI 始终展开已执行的命令列表，便于排查 |
| 2 | [#37403](https://github.com/openai/codex/issues/37403) macOS Desktop 无法恢复 Remote Control / CLI 线程：`already has an active writer` | 47 | 34 | **严重回归**，自 8 月 7 日更新后，移动端远程控制无法接管 Mac 上的 Codex CLI 线程 |
| 3 | [#40700](https://github.com/openai/codex/issues/40700) Windows 26.820 Codex Desktop 无法启动：bundled codex.exe 从 WindowsApps 重定位失败 | 43 | 2 | **阻塞性安装问题**，App 启动即崩，用户无法看到 About 对话框上报版本 |
| 4 | [#39954](https://github.com/openai/codex/issues/39954) Windows + Android Remote Control 反复进入重连循环 | 18 | 0 | 涉及 409 Conflict stale-server、WebSocket 重建不稳定 |
| 5 | [#41463](https://github.com/openai/codex/issues/41463) Windows + WSL 无法创建项目：`AbsolutePathBuf` 反序列化缺失 base path | 15 | 7 | WSL2 集成下的项目创建路径解析错误 |
| 6 | [#41790](https://github.com/openai/codex/issues/41790) ChatGPT Pro 用户频繁遭遇 "Selected model is at capacity" 错误 | 13 | 9 | **模型容量配额问题**在 Pro 计划上集中爆发，agent 任务反复中断 |
| 7 | [#41088](https://github.com/openai/codex/issues/41088) Windows 26.820 更新后本地执行失败 | 12 | 0 | Codex Desktop 更新后，本地命令执行无法启动 |
| 8 | [#41433](https://github.com/openai/codex/issues/41433) GitHub 连接器：`mark_pull_request_ready_for_review` 查询 `fullDatabaseId` 失败 | 12 | 7 | ChatGPT Work 中 GitHub connector 的 GraphQL schema 已变更 |
| 9 | [#22844](https://github.com/openai/codex/issues/22844) Codex Desktop Remote SSH：内置浏览器侧边栏可用但 `@browser` 在远程线程不可用 | 6 | 25 | **高赞但未解决**，Remote SSH 工作流下浏览器工具未下发的老问题 |
| 10 | [#34263](https://github.com/openai/codex/issues/34263) macOS Desktop：Browser / `node_repl` 工具未下发到 Remote SSH 任务 | 7 | 0 | 同 #22844 形成 Remote SSH 工具链下发的系统性 Bug |

> **观察**：Windows 与 macOS 桌面端的"远程/SSH/连接器"类问题在 24 小时内高密度复现，#22844 虽为 5 月的 issue 仍以 25 赞高居"最希望修复"列表。

---

## 四、重要 PR 进展

> 注：以下 PR 均由自动化 bot `copyberry[bot]` 提交，并已 **CLOSED**（推测为合并后自动关闭或被 fast-track 流程处理）。

| # | PR | 功能/修复要点 |
|---|----|--------------|
| 1 | [#42178](https://github.com/openai/codex/pull/42178) 结构化异步用户输入请求 | 新增 `request_user_input_async`，支持多问题 + 建议答案，可在回合内持续追问 |
| 2 | [#42147](https://github.com/openai/codex/pull/42147) Full Access 模式下跳过 Guardian 审查 | 解决 `approvalPolicy: "never"` 与 Guardian 重复弹窗的一致性问题 |
| 3 | [#42142](https://github.com/openai/codex/pull/42142) 为 Plus / Team 计划增加早期配额预警 | 新增 <50% 用量窗口预警，保留 75/90/95% 阈值 |
| 4 | [#42144](https://github.com/openai/codex/pull/42144) Guardian V2 分析事件 | 新增 `codex_guardian_v2_classification` 与 `_fast_decision` 事件上报 |
| 5 | [#42151](https://github.com/openai/codex/pull/42151) 在 app-server 线程元数据中暴露模型设置 | Thread 对象新增 `model` / `reasoningEffort` 字段 |
| 6 | [#42150](https://github.com/openai/codex/pull/42150) 插件 CLI 支持远程市场 | `codex plugin list` 现显示远程目录条目及鉴权策略 |
| 7 | [#42146](https://github.com/openai/codex/pull/42146) 在 executor 上下文中解析权限请求 | 权限路径/授权按所选执行环境（含 home、工作区根、临时目录）评估 |
| 8 | [#42140](https://github.com/openai/codex/pull/42140) Vim composer 支持 redo | 新增限定长度的 redo 栈，`Ctrl+R` 恢复最近撤销的草稿（含粘贴/图片） |
| 9 | [#42137](https://github.com/openai/codex/pull/42137) 为符合条件的回合预热 shell 快照 | Shell Snapshot V2 在 turn hooks 通过后异步捕获，免去命令首字节延迟 |
| 10 | [#42128](https://github.com/openai/codex/pull/42128) 为协调 OAuth 刷新准备 MCP 连接 | 新增 `mcp_oauth_refresh_coordination` 特性，将刷新模式纳入 OAuth 连接身份 |

---

## 五、功能需求趋势

综合 50 条最新 Issue 的标签与描述，社区关注度集中于以下方向：

1. **🪟 Windows 桌面体验**（占比最高）— 安装/启动失败、WindowsApps 重定位、WSL2 路径解析、本地执行启动、Voice orb、宠物交互等，涉及近 12 条新 issue，是当前最薄弱的一环。
2. **🔌 Remote Control / Remote SSH 工具链** — 浏览器、`node_repl`、shell 等工具在远程任务中**未下发**或**连接断开后状态不一致**（stale app-server 持有 thread writer）。
3. **💸 模型容量与配额管理** — "Selected model is at capacity" 在 Pro/Pro Lite 上集中爆发，叠加 weekly quota 异常消耗、gpt-reserve 无法使用等问题，配额透明度和降级体验成为核心诉求。
4. **🖥 TUI 增强** — 命令折叠展开、OSC 8 超链接可点击、Vim redo 等高质量小特性持续收到高赞。
5. **🤖 GitHub / MCP 连接器** — ChatGPT Work 中 GitHub `fullDatabaseId` 已废弃、MCP approval 与 account `link_id` 作用域问题，连接器稳定性成为企业用户痛点。
6. **🛡 Guardian / 安全策略** — Full Access 与 Guardian 审查、enterprise permissions、AGENTS.md deny-read glob 溢出等安全相关议题上升。

---

## 六、开发者关注点

| 痛点 | 典型反馈 | 优先级建议 |
|------|---------|----------|
| **平台回归阻断核心工作流** | "After updating ChatGPT Desktop on macOS … existing workflow stopped working"（#37403） | 🔴 P0 |
| **Remote SSH 工具链缺失** | "The bundled Browser works from a Local Codex task … but Remote SSH tasks are not provisioned with the Browser"（#34263 / #22844） | 🔴 P0 |
| **Windows 端启动/安装失败** | "Codex Desktop cannot start … bundled codex.exe relocation from WindowsApps fails"（#40700） | 🔴 P0 |
| **Pro 计划容量异常** | "Long-running Codex tasks are repeatedly interrupted … 'Selected model is at capacity'"（#41810 / #41790） | 🟠 P1 |
| **配额重置与 gpt-reserve 失效** | "Pro Lite: sudden weekly quota depletion … gpt-reserve disappeared without redemption"（#41969） | 🟠 P1 |
| **CLI 命令折叠不利于排查** | "I want to always see executed commands when scrolling back"（#39903，77👍） | 🟡 P2 |
| **TUI 终端兼容性** | "Markdown links are not clickable in OSC 8-capable terminals"（#25934） | 🟡 P2 |
| **历史会话/记录丢失** | "Yesterday's chat and work records were lost"（#42177） | 🟡 P2 |

**核心结论**：今日社区讨论的主题已经从"模型能力"转向"**生产可用性**"——开发者更关心跨平台一致性、远程任务工具下发的正确性以及配额的稳定与透明。建议优先修复 Windows 启动链与 Remote SSH 工具下发问题，这两项的累积讨论量与阻碍面最大。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-02  
**数据源**: github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日 Gemini CLI 完成了 **v0.58.0 稳定版发布** 与 **v0.59.0-preview.0** 预览版的同步推进，社区活跃度集中在 **Agent 子代理行为可靠性** 与 **安全/权限加固** 两条主线。多个 P1 级别的 subagent 误报状态、模型陷入无限循环、OAuth 凭证失效等核心痛点持续被讨论。安全类 PR 集中涌现，涉及扩展安装竞态、a2a-server 凭证泄露、VSCode 扩展通信等关键面。

---

## 🚀 版本发布

### v0.58.0（稳定版）
正式发布版本，主要更新：
- **symlink 评估一致性**: `ignore` 路径处理中确保符号链接求值行为稳定（PR #28915 by @luisfelipe-alt）
- 包含 v0.57.0-preview.0 后的累积修复与改进  
🔗 https://github.com/google-gemini/gemini-cli/pull/28918

### v0.59.0-preview.0（预览版）
- 版本号自动升级到 `0.59.0-nightly.20260825.g812f7a2bc`
- 集成 v0.58.0 系列变更日志  
🔗 https://github.com/google-gemini/gemini-cli/pull/29082

### v0.59.0-nightly.20260902.g4963a4456（Nightly）
- **Web fetch 工具**: 改进目标验证与连接路由逻辑（PR #29120 by @diegogodinezr）  
- 🎉 欢迎新贡献者 **@diegogodinezr**  
🔗 https://github.com/google-gemini/gemini-cli/pull/29120

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 | 评论 |
|---|------|--------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在 MAX_TURNS 后误报 GOAL 成功** | P1 · bug | 13 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 永久挂起** | P1 · bug 👍8 | 8 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST 感知的文件读取/搜索/映射价值评估（EPIC）** | P2 · feature | 7 |
| [#27957](https://github.com/google-gemini/gemini-cli/issues/27957) | **Git checkout 后 CLI UI 分支不刷新** | P2 · bug | 6 |
| [#27989](https://github.com/google-gemini/gemini-cli/issues/27989) | **Agent 模式持续 429 RESOURCE_EXHAUSTED** | - | 6 |
| [#27785](https://github.com/google-gemini/gemini-cli/issues/27785) | **thinking 过久、最终无输出** | P2 · bug | 6 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 几乎不使用 skills 和 sub-agents** | P2 · bug | 6 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **Auto Memory 缺少确定性脱敏与日志优化** | P2 · security | 5 |
| [#28846](https://github.com/google-gemini/gemini-cli/issues/28846) | **0.46.0 OAuth personal 失败 + Antigravity 迁移** | P2 · security | 4 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **Shell 执行完成后卡在 "Waiting input"** | P1 · bug 👍3 | 4 |

**为什么重要**：
- **Agent 可靠性成最大焦点**：subagent 误报状态、永久挂起、思维循环三类问题占据头条，反映社区对 Agent 自治模式的稳定性高度敏感
- **Auto Memory 安全风险**：连续多个 issue（#26525 / #26522 / #26516）指出后台记忆提取存在凭证泄露与低信号重试风险
- **OAuth 迁移冲击**：v0.46.0 用户因个人 OAuth 被弃用且未平滑迁移到 Antigravity，对外用户画像冲击明显

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#29067](https://github.com/google-gemini/gemini-cli/pull/29067) | **fix(a2a-server): 移除误导性 securitySchemes 与硬编码凭证** | OPEN | 安全加固：修正 agent metadata，避免本地开发端点被误判为已认证 |
| [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | **fix(cli): Git 仓库中鉴权不崩溃** | OPEN | 修复 macOS Seatbelt 等受限环境下启动时 Git hook 导致的崩溃 |
| [#29089](https://github.com/google-gemini/gemini-cli/pull/29089) | **fix(core): BaseLlmClient 将 abortSignal 传递给 retryWithBackoff** | OPEN | 终止信号不再丢失，会话摘要/压缩/分类器等场景可正确中断重试 |
| [#29088](https://github.com/google-gemini/gemini-cli/pull/29088) | **fix(vscode-ide-companion): MCP 流开启时 stop() 卡住** | OPEN | 解决长连接 MCP 传输导致 VS Code 扩展 deactivate 阻塞 |
| [#29087](https://github.com/google-gemini/gemini-cli/pull/29087) | **fix(cli): 防止扩展安装并发竞态** | OPEN | 基于 `proper-lockfile` 互斥，保护文件拷贝与元数据写入 |
| [#29063](https://github.com/google-gemini/gemini-cli/pull/29063) | **fix(core): 非交互下 Plan Mode 不再等待用户反馈** | OPEN | 修复 `gemini -p "..." -y` 模式下 Plan 流程挂起的经典问题 |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **fix(extensions): 环境变更需用户同意 + 运行时变量净化** | CLOSED | MCP server 环境变量注入风险被收敛 |
| [#28889](https://github.com/google-gemini/gemini-cli/pull/28889) | **fix(cli): 能力探测后恢复 stdin 暂停态** | CLOSED | 解决 #28799，避免 terminal 检测副作用 |
| [#28893](https://github.com/google-gemini/gemini-cli/pull/28893) | **fix(core): 保留显式 Flash 模型 ID** | CLOSED | 防止 `gemini-3.6-flash` 等被 rollout 重写规则静默改写 |
| [#28875](https://github.com/google-gemini/gemini-cli/pull/28875) | **fix(cli): fetchJson 拒绝畸形 JSON 与流错误** | CLOSED | GitHub 扩展 fetch 链路异常处理加固 |

**关注点**：
- **Security 是当前 merge 主旋律**：a2a-server 凭证、扩展环境注入、subprocess 凭据保护三件事并列
- **稳定性回归测试常态化**：几乎所有修复 PR 都附带针对性单元测试
- **VS Code IDE 集成**仍是高频痛点来源（MCP 长连接 / stop() / OAuth）

---

## 📈 功能需求趋势

从 Issue 与 PR 提炼出社区最关心的方向：

1. **🧠 Agent 行为可观测性与可控性**
   - subagent 轨迹通过 `/chat share` 可见（#22598）
   - bug report 需包含 subagent 上下文（#21763）
   - 通用 agent 路由引发的挂起（#21409、#21968）

2. **🔐 安全与权限沙箱**
   - Auto Memory 的脱敏与重试治理（#26525 / #26522 / #26516）
   - 破坏性命令拦截（#22672）
   - OAuth/Antigravity 凭证迁移（#28846）
   - a2a-server 端点鉴权语义（#29067）

3. **🧩 IDE 集成体验**
   - VS Code 扩展 MCP 长流停不下来（#29088）
   - 终端自适应性能与闪烁（#21924）

4. **📚 AST 感知的代码库建模**（EPIC 级别讨论）
   - #22745 / #22746 推动 codebase_investigator 工具升级

5. **🧰 工具调用与上下文管理**
   - 工具数 >128 触发 400 错误（#24246）
   - 模型散落写临时脚本（#23571）
   - 切换 vite 等交互式脚手架卡死（#22465）

---

## 💡 开发者关注点（高频痛点）

- **Agent 状态机与终止语义混乱**：subagent 在 MAX_TURNS、错误退出、目标完成之间的状态判定不清晰，导致上报 `GOAL/success` 但实际未完成（#22323、#21983、#21409）。  
- **思考循环与 UI 卡死**：`thinking too long`、`infinite thinking loop` 类 issue 反复出现（#27785、#28011、#28005）。  
- **Shell 执行交互态泄漏**：命令结束后仍显示 `Waiting input`（#25166）。  
- **凭证/OAuth 迁移阵痛**：v0.46.0 的 `oauth-personal` 在 Antigravity 迁移期间不可用，用户无清晰升级路径（#28846）。  
- **资源限流透明性不足**：使用 `gemini-3.1-pro-preview` 时 429 RESOURCE_EXHAUSTED 持续刷出，缺少退避提示（#27989）。  
- **自动记忆系统的副作用**：脱敏、重试、补丁静默丢弃等机制被开发者反复质疑（#26516–#26525）。  
- **扩展/MCP 流程边界模糊**：扩展更新与 MCP server 环境变量变更缺乏明确的同意链路（#28863）。

---

## 📊 数据总览

| 指标 | 数量 |
|------|------|
| 过去24h 更新 Issues | 50 |
| 过去24h 更新 PRs | 39 |
| 新版本发布 | 3（v0.58.0 / v0.59.0-preview.0 / nightly） |
| 新贡献者 | 1（@diegogodinezr） |
| P1 级 Issue（活跃） | 7+ |

---

*本报由 AI 自动生成，基于 GitHub 公开数据整理。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-02**

---

## 📌 今日速览

今日 Copilot CLI 发布 **v1.0.83-1** 小版本更新，重点优化了 Sessions 侧边栏排序与企业管理策略；社区端，过去 24 小时共有 **36 个 Issue 更新**，热度集中在 **MCP 协议兼容性**、**BYOK 回归问题** 与 **长会话内存泄漏** 三个方向。值得注意的是，长期高赞的 **Vi/Vim 输入模式** 功能请求（#13，75 👍）已正式关闭，标志着一个跨年度用户诉求的终结。

---

## 🚀 版本发布

### v1.0.83-1（2026-09-02）

**新增**
- Sessions 侧边栏新增 **Recent / Created / Name / None** 四种排序方式，排序状态在重启后保留
- 企业管理员可通过 `forceLoginOrgs` 受管设置，将登录限制到指定的 GitHub 组织

**改进**
- 优化 `/mcp config` 命令及 MCP 服务的新增/编辑交互流程

📎 [查看完整 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.83-1)

---

## 🔥 社区热点 Issues

### 1. [#13 — Vi/Vim 输入模式支持](https://github.com/github/copilot-cli/issues/13) · CLOSED
**作者：** RyanHecht · 💬 9 · 👍 **75**

长期呼声最高的编辑器体验功能，今日正式关闭（跨年 issue，2025-09 创建）。该 Issue 呼吁在 Copilot CLI 交互界面引入 modal editor 风格的快捷键支持，方便 Vim/Vi 用户进行高效编辑。75 个 👍 印证了核心开发者群体对该需求的高度认可。

---

### 2. [#4664 — 长会话恢复时 JavaScript 堆 OOM 崩溃](https://github.com/github/copilot-cli/issues/4664) · OPEN
**作者：** shrijitnair · 💬 5 · 🏷 sessions / context-memory

恢复大型/历史 session 时，Node.js V8 引擎直接报 `JavaScript heap out of memory`。这是一个**直接影响生产可用性**的稳定性问题，与 #4686（libuv handle 泄漏）疑似同源。

---

### 3. [#4525 — MCP 双时代握手导致 -32022 错误](https://github.com/github/copilot-cli/issues/4525) · OPEN
**作者：** dmbutko · 💬 4 · 🏷 mcp

v1.0.81-1 在 stdio MCP server 上先发 modern `server/discover`，成功后**又重发** legacy `initialize`，触发协议冲突。这是 MCP 生态向前兼容性问题，对使用 Python MCP SDK 2.0.0+ 的用户影响广泛。

---

### 4. [#4438 — `disable-model-invocation: true` 导致 Skill 完全不可达](https://github.com/github/copilot-cli/issues/4438) · OPEN
**作者：** grammy-jiang · 💬 3 · 👍 6 · 🏷 agents

文档语义上 `disable-model-invocation: true` 应仅禁用模型自动调用，但实际表现是**手动 `skill()` 调用也找不到**该 Skill。文档与实现严重不一致，影响 Skill 设计者的预期。

---

### 5. [#3421 — Azure DevOps MCP Server "Dangerous Request.Path"](https://github.com/github/copilot-cli/issues/3421) · OPEN
**作者：** fdambrosio · 💬 3 · 🏷 mcp

ADO MCP 在 VS Code 中可正常调用，但 Copilot CLI 调用时稳定报路径校验错误。典型 **环境兼容性差异** 类问题，揭示 CLI 端 HTTP 客户端校验逻辑与 VS Code 不一致。

---

### 6. [#4686 — SEA 模式下 Node.js 泄漏 libuv handle 导致 OOM](https://github.com/github/copilot-cli/issues/4686) · OPEN
**作者：** Marcus-Lindbloom · 💬 1 · 🏷 triage

Linux x64 SEA 打包下，约 **37 分钟**会话内累积 **31,965 个泄漏的 async libuv handle**，最终 OOM 崩溃。SEA 模式忽略 `NODE_OPTIONS` 让用户难以自行调参。

---

### 7. [#4680 — BYOK 自定义端点发送错误模型 ID](https://github.com/github/copilot-cli/issues/4680) · OPEN
**作者：** arisng · 💬 2 · 🏷 triage

配置自定义 OpenAI-兼容端点时，CLI 错误地发送硬编码的 `gpt-5.4-nano` 而非配置的自定义模型名，导致整个 session 不可用。**BYOK 体验严重回归**。

---

### 8. [#4672 — 1.0.82 回归：`/model` 命令在 BYOK 下报 "Unknown command"](https://github.com/github/copilot-cli/issues/4672) · OPEN
**作者：** extedosse · 💬 2 · 👍 1 · 🏷 models / configuration

通过环境变量配置 BYOK 模型后，`/model` 命令在 1.0.81/82 直接失效，无法在多模型托管（如 Azure AI Foundry）场景下切换。与 #4680 共同表明 BYOK 路径近期回归较多。

---

### 9. [#4688 — Subagent 并发限制器"盲加载"导致 CLI 自身 UI 冻结](https://github.com/github/copilot-cli/issues/4688) · OPEN
**作者：** scorp508 · 🏷 triage

并发限制器仅是静态计数器，**不感知主机负载**。在 12 核机器上即可能过载 CPU，使 CLI 自身 UI 卡死。性能与资源调度问题日益突出。

---

### 10. [#4687 — `/compact` 后仓库级指令文件（AGENTS.md/CLAUDE.md）丢失](https://github.com/github/copilot-cli/issues/4687) · OPEN
**作者：** RobvH · 🏷 triage

长会话压缩上下文后，原本生效的 `AGENTS.md` 等规则不再被遵守。Issue 由 Sonnet 5 与用户联合调试得出，反映**会话压缩策略对系统级指令处理存在缺陷**。

---

### 11. [#4689 — Issues/PR 面板始终指向 fork 而非默认仓库](https://github.com/github/copilot-cli/issues/4689) · OPEN

TUI 面板忽略 `gh repo set-default` 配置，强制解析 `origin`，对 fork 贡献者极不友好。

### 12. [#4690 — 长路径 marketplace 仓库添加失败](https://github.com/github/copilot-cli/issues/4690) · OPEN

`/plugin marketplace add` 在目标仓库存在长路径文件时失败，路径缓冲区处理存在边界问题。

---

## 📥 重要 PR 进展

⚠️ 过去 24 小时内 **无 PR 更新**，建议关注以下两个已关闭的关键 Issue 是否会衍生修复 PR：
- [#13](https://github.com/github/copilot-cli/issues/13) Vi/Vim 输入模式（功能落地路径值得跟踪）
- [#4113](https://github.com/github/copilot-cli/issues/4113) ACP `session/close` 缺失

---

## 📈 功能需求趋势

从过去 24 小时 Issue 提炼出以下社区诉求热点：

| 方向 | 代表 Issue | 趋势 |
|------|-----------|------|
| **MCP 协议健壮性** | #4525, #3421, #4681, #4203, #4678 | 🔥 **最热** — OAuth 头注入、token 刷新、双时代握手、启动超时均有问题 |
| **BYOK / 自定义模型** | #4680, #4672, #4414 | 🔥 **回归高发** — 多 Issue 集中指向 1.0.81–82 |
| **编辑器交互增强** | #13（Vim）, #3971（文件树） | ✅ Vim 模式关闭，文件树诉求浮现 |
| **Session 稳定性** | #4664, #4686, #4687, #4413, #4645 | 🔥 长会话场景的 OOM/压缩/恢复全链路均有问题 |
| **Agent / Skill / Plugin 体系** | #4438, #4637, #4655, #3688 | ⚠️ 新机制（disable-model-invocation、Plugins 1.0）存在发现与调用一致性问题 |
| **跨平台/权限** | #4683（PowerShell ConstrainedLanguage）, #4679（Sandbox）, #4682（路径级审批） | ⚠️ 企业级合规场景适配不足 |

---

## 💬 开发者关注点

**痛点 Top 3：**

1. **MCP 已成为 Copilot CLI 能力扩展的核心，但实现细节稳定性堪忧**。OAuth 头注入、token 刷新、启动超时、双时代握手等问题表明，MCP 客户端尚未达到"开箱即用"的成熟度，对自托管 MCP server 用户尤其不友好。

2. **BYOK 路径在 1.0.81–82 出现明显回归**。`/model` 命令、模型 ID 透传、自定义端点鉴权等多处问题集中爆发，强烈建议在使用 BYOK 的团队暂缓升级，或锁定至 1.0.80。

3. **长会话（>30 分钟）的资源管理与上下文一致性挑战严峻**。libuv handle 泄漏、V8 堆耗尽、`/compact` 后系统级指令丢失等问题相互独立但同时涌现，提示 Node.js SEA 打包下的运行时基线需要专项治理。

**高频需求：**
- ⌨️ 真正可用的 Vim 键位模式（已落地方向待跟踪）
- 📁 仓库会话的完整文件树浏览器（与 folder 会话对齐）
- 🔐 路径级 `write` 权限持久化审批
- ⚡ MCP 启动超时预算（避免单点拖累整个 session）
- 🤖 Subagent 资源感知型并发限制

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 采样窗口：2026-09-01 ~ 2026-09-02*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-02**

---

## 📌 今日速览

社区今日最显著的动态是 **v1.50.0 版本正式发布**，同步推进了 `kimi-cli` → Kimi Code 的迁移流程（引入弃用感知更新与一键迁移机制）。Issues 方面，过去 24 小时仅 2 条更新且均已标记 CLOSED，反映出近期社区反馈量较低，但涉及"任务执行期间无法预输入下一任务"和"Task 子任务偶发卡顿"两个值得关注的体验痛点。

---

## 🚀 版本发布

### v1.50.0（2026-09-01 发布）

核心变更：

- **fix(kosong)**：当未声明任何 beta features 时，省略空的 `anthropic-beta` header（[#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580)）
- **chore(release)**：将依赖 `kosong` 升级至 0.56.0（[#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581)）
- **feat(shell)**：弃用感知的更新流程，支持一键迁移至 Kimi Code（[#2630](https://github.com/MoonshotAI/kimi-cli/pull/2630)）

> 💡 本次发布重点是引导用户从 `kimi-cli` 过渡到新版 Kimi Code，CDN 发布迁移通知后 CLI 将提示并提供升级路径。

---

## 🔥 社区热点 Issues

> 📊 说明：过去 24 小时内仅有 **2 条** Issue 更新，已全部展示如下。

### 1. [#1287 [CLOSED] 执行上一个任务时无法写入下一个任务的 prompt](https://github.com/MoonshotAI/kimi-cli/issues/1287)
- **作者**：XiaoPengYouCode ｜ 👍 0 ｜ 💬 1
- **重要性**：这是连续工作流的关键痛点——用户在等待长任务完成时无法提前准备下一条提示，限制了多任务串联效率。虽然 closed，但 0 点赞与 1 条评论表明讨论有限，需关注后续是否被产品真正实现。
- **状态**：已关闭，解决方案待补充

### 2. [#1292 [CLOSED] 调用 Task 子任务时偶发卡顿](https://github.com/MoonshotAI/kimi-cli/issues/1292)
- **作者**：Wolido ｜ 👍 0 ｜ 💬 0
- **重要性**：在 Darwin 25.3.0 arm64、kimi 1.16.0 环境下，调用 Task 时多个子任务中的某一环节会卡住。这类稳定性问题对 Agent 工作流的可靠性影响显著。已 closed 但社区互动为 0，关闭原因不明，建议关注后续复现条件与根因说明。
- **版本**：v1.16.0

---

## 🛠️ 重要 PR 进展

> 📊 说明：过去 24 小时内共 **4 条** PR 更新，已全部展示如下。

### 1. [#2614 [OPEN] docs(plugins): 文档化安全与持久化数据](https://github.com/MoonshotAI/kimi-cli/pull/2614)
- **作者**：QIANLING-0831
- **内容**：纯文档性 PR，澄清 `plugin.json`、command-based tools、`inject`、`~/.kimi/plugins/` 安装目录的插件契约，明确不涉及其他 plugin system。
- **意义**：插件安全契约文档化对生态拓展至关重要，降低第三方插件开发者的接入门槛。

### 2. [#2632 [CLOSED] chore(release): bump kimi-cli to 1.50.0](https://github.com/MoonshotAI/kimi-cli/pull/2632)
- **作者**：sailist
- **内容**：发布流程变更，包含版本号 bump、release notes 归档、同步 `packages/kimi-code` wrapper 版本与 `kimi-cli==1.50.0` 依赖 pin。
- **意义**：常规发版流程落地，确保生态包版本一致。

### 3. [#742 [CLOSED] Add $ list skills like codex](https://github.com/MoonshotAI/kimi-cli/pull/742)
- **作者**：ZacharyZhang-NY
- **内容**：仿照 Codex 增加 `$ list skills` 命令，用于列出可用 skills。
- **意义**：增强 CLI 的可发现性（discoverability），让用户能快速了解可用技能列表，是 UX 改进项。
- **备注**：该 PR 早在 2026-01-28 创建，今日才被关闭，可能历经较长的维护者讨论。

### 4. [#2630 [CLOSED] feat(shell): 弃用感知更新流程 + 一键迁移至 Kimi Code](https://github.com/MoonshotAI/kimi-cli/pull/2630)
- **作者**：jackfish212
- **内容**：当 CDN 发布 `migration.json` 弃用/迁移通知时，CLI 视 Python 发行版为 deprecated，并引导用户迁移至新版 Kimi Code。
- **意义**：**本次版本最具战略意义的特性**——标志着 `kimi-cli` Python 版本进入过渡期，团队正系统性引导用户转向 Kimi Code。

---

## 📈 功能需求趋势

由于过去 24 小时 Issues 数据量有限，以下趋势基于近期 Issue/PR 综合观察：

| 趋势方向 | 代表条目 | 关注度 |
|---------|---------|--------|
| **多任务并发/工作流编排** | #1287（任务间 prompt 输入锁死） | ⭐⭐⭐ |
| **插件生态与文档化** | #2614（插件安全/持久化契约） | ⭐⭐⭐ |
| **CLI 可发现性（Discoverability）** | #742（`$ list skills`） | ⭐⭐ |
| **CLI → Kimi Code 迁移体验** | #2630（弃用感知迁移） | ⭐⭐⭐ |
| **Agent 稳定性/卡顿** | #1292（Task 子任务卡顿） | ⭐⭐ |

---

## 💡 开发者关注点

1. **任务执行期的交互体验不足**
   用户希望能在 Agent 执行长任务时并行准备下一条 prompt（#1287），反映出现有 CLI 更偏向"单回合同步"模式，与多任务工作流场景存在摩擦。

2. **Agent 子任务稳定性焦虑**
   Task 子任务调用偶发卡顿（#1292）虽然尚未在社区广泛传播，但属于 Agent 系统可靠性基石，建议官方补充复现步骤与已知规避方案。

3. **插件契约文档缺失阻碍生态扩展**
   #2614 文档化插件安全与持久化行为，说明第三方开发者在接入时缺乏明确规范——这是插件生态从"可用"走向"可信任"的关键一步。

4. **CLI 品牌迁移过渡期**
   多个 PR 同时推进 `kimi-cli` → Kimi Code 的工作（#2630、#2632），开发者需关注后续是否带来 breaking changes（如配置目录、命令语法层面）。

---

> 📎 **数据说明**：本报告基于 GitHub `MoonshotAI/kimi-cli` 仓库 2026-09-02 的公开数据。由于近 24 小时 Issues 与 PRs 更新量较小，未做"凑数"筛选，建议持续跟踪后续日报告以观察趋势演变。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-02

## 📌 今日速览

今天 OpenCode 发布了 **v1.18.26**，重点修复了 Claude 5 thinking blocks、AWS Bedrock GPT-5.6 等模型兼容性问题。社区层面，**Claude Opus 4.6 配合 GitHub Copilot 的 prefill 报错**（72 条评论，35 👍）作为本月最高热度 Issue 已被关闭；同时 TUI 文件预览、Windows PowerShell 集成、ACP 插件激活时序等多个核心方向均有新 PR 落地，开发节奏密集。

---

## 🚀 版本发布

### v1.18.26 — Bugfix 修复为主

| 修复项 | 说明 |
|---|---|
| Claude 5 sessions | 在 prompt 或 tool 变更后能容忍 stale thinking blocks，避免会话中断 |
| Bedrock GPT-5.6 | 接受 `none` reasoning effort |
| Bedrock reasoning / replay | 推理与重放处理更可靠（@pengzh1 贡献） |
| Tool call timing | 调用计时更准确（消息被截断） |

> 版本说明未给出完整 release notes，建议关注 [GitHub Releases](https://github.com/anomalyco/opencode/releases/tag/v1.18.26) 获取后续补全内容。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|---|---|---|
| 1 | **[#13768](https://github.com/anomalyco/opencode/issues/13768)** Claude Opus 4.6 + Copilot prefill 报错 | 💬72 / 👍35 | ⭐ **本月最高热度 Issue**。Copilot 后端的 Opus 4.6 在多轮 tool/prompt 切换后频繁触发 "model does not support assistant message prefill" 中断会话，影响大量 Claude 工作流。已关闭。 |
| 2 | **[#26038](https://github.com/anomalyco/opencode/issues/26038)** PowerShell 下 `/exit` 关闭终端 | 💬10 / 👍2 | 反映 Windows 终端环境体验问题，与 #22003 共同暴露 TUI 在 Windows 下的退出语义缺陷。已关闭。 |
| 3 | **[#31259](https://github.com/anomalyco/opencode/issues/31259)** Copilot Claude 纯空白消息触发 400 | 💬5 | Anthropic `/v1/messages` 对 assistant message 空白文本块返回 400，提示需要规范化内容块。已关闭。 |
| 4 | **[#31724](https://github.com/anomalyco/opencode/issues/31724)** [FEATURE] 本地 server 暴露 OpenAI 兼容端点 | 💬5 / 👍2 | 呼声较高的生态集成诉求，让外部工具直接复用 opencode 已配置的 providers/models。已关闭。 |
| 5 | **[#19233](https://github.com/anomalyco/opencode/issues/19233)** [FEATURE] `GET /tui/prompt` 读取当前 prompt | 💬4 / 👍1 | Neovim 等编辑器集成需要先读取 prompt 再追加，凸显 TUI 正在成为生态扩展面。已关闭。 |
| 6 | **[#22003](https://github.com/anomalyco/opencode/issues/22003)** Windows TUI 退出关闭终端窗口 | 💬3 / 👍13 | 👍 远高于评论数，说明社区强烈共鸣，已在 PR #46712 等修复中处理。 |
| 7 | **[#31023](https://github.com/anomalyco/opencode/issues/31023)** Desktop 会话数据丢失 | 💬3 | v1.15.x 升级后 desktop 会话消失，凸显本地存储迁移/备份机制的薄弱。已关闭。 |
| 8 | **[#34049](https://github.com/anomalyco/opencode/issues/34049)** 状态泄漏：A 会话文本出现在 B 输入框 | 💬2 / 👍4 | Desktop 状态隔离 bug，跨会话串味，影响日常使用。已关闭。 |
| 9 | **[#35109](https://github.com/anomalyco/opencode/issues/35109)** [FEATURE] 按模型配置 skill 权限/工具 | 💬3 | 目前仅支持按 agent 配置，社区希望细化到模型粒度，便于精细化路由。已关闭。 |
| 10 | **[#39851](https://github.com/anomalyco/opencode/issues/39851)** Desktop "在 PowerShell 中打开" 在 Windows 失败 | 💬3 | `open-path` IPC 把项目路径当成命令参数执行，触发 CommandNotFoundException。**目前仍 OPEN**，由 PR #46712 跟进。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 模块 | 要点 |
|---|---|---|---|
| 1 | **[#46715](https://github.com/anomalyco/opencode/pull/46715)** `fix(app)` | App | 短时 tool 让 "Move to background" 提示闪烁至少保持 1s，体验打磨。✅ 已合并 |
| 2 | **[#46718](https://github.com/anomalyco/opencode/pull/46718)** `fix(core)` | Core | `PluginSupervisor.resolve()` 检测跨源的重复 plugin ID，避免静默覆盖。🟡 OPEN |
| 3 | **[#46717](https://github.com/anomalyco/opencode/pull/46717)** `feat(app)` | App | 引入 5 档 timeline detail presets（Everything→Text only），并把 Placement 与 Details 解耦。🟡 OPEN |
| 4 | **[#46705](https://github.com/anomalyco/opencode/pull/46705)** `fix(desktop)` | Desktop | 生产版 desktop 复用 V2 CLI 制品，补齐与 beta 一致的 CLI 打包流程。✅ 已合并 |
| 5 | **[#46716](https://github.com/anomalyco/opencode/pull/46716)** `feat(core)` | Core | grep 工具新增 `literal` 与 `caseSensitive` 选项，映射到 ripgrep `--fixed-strings` / `-i`。🟡 OPEN |
| 6 | **[#46631](https://github.com/anomalyco/opencode/pull/46631)** `fix(core)` | Core | 读时重建 registry 状态，修复 OAuth 刷新在 startup 批内被跳过导致账号模型丢失的问题。🟡 OPEN |
| 7 | **[#46682](https://github.com/anomalyco/opencode/pull/46682)** `fix(cli)` | CLI | 在缓存 ACP 目录前 await plugin activation，杜绝首请求只看到 builtin 的竞态。🟡 OPEN |
| 8 | **[#46702](https://github.com/anomalyco/opencode/pull/46702)** `fix(server)` | Server | Basic Auth 仅作用于 `/api/*`，修复 iPhone 主屏图标安装资源被拦截。✅ 已合并 |
| 9 | **[#46712](https://github.com/anomalyco/opencode/pull/46712)** `fix(desktop)` | Desktop | Windows 下 "在 PowerShell 中打开" 改为把项目目录作为工作目录，正确调用 `powershell.exe`。关闭 #39851/#40045/#40277。🟡 OPEN |
| 10 | **[#46699](https://github.com/anomalyco/opencode/pull/46699)** `feat(plugin)` | Plugin | TUI plugin 对话框可直接更新 server package 插件（默认 `Ctrl+U`），无需 CLI。✅ 已合并 |

> 备注：`#46714` 与已合并的 `#46665` 是同一作者对 TUI `/preview` 只读文件预览对话框的迭代版本，refs #43598。

---

## 📈 功能需求趋势

通过对过去 24 小时更新的 50 条 Issue 进行归类，社区关注点集中于以下方向：

1. **TUI / 编辑器集成生态**（最高频）
   - `GET /tui/prompt` (#19233)、`POST /tui/append-prompt`、TUI 只读文件预览 (#43598→#46714/#46665)、slash 自动补全排序 (#45054/#38043)。
   - 反映 opencode 正在成为 **Neovim / IDE 插件宿主**，类似 LSP 化趋势明显。

2. **本地 server 兼容性与可编程化**
   - OpenAI 兼容端点 (#31724)、`prompt_async` 返回预分配消息 ID (#22925)、仅 API 鉴权 (#46702)。
   - 社区希望把 opencode 当作 **本地 LLM Gateway / Agent Runtime** 来编排。

3. **更细粒度的权限与配置**
   - 按模型配置 skill/工具 (#35109)、解耦 wire 模型名与 system prompt 选择 (#34770)、`options.headers` 支持变量 (#28527)。

4. **多 Provider / 新模型接入**
   - NVIDIA 自定义模型 (#29988)、本地 Ollama + qwen-coder 兼容性 (#34988)、PackyCode/DeepSeek、Copilot Claude 等多后端边界场景。
   - 伴随而来的 Bug：Gemini `question` 工具 schema (#35105)、Anthropic `tool_choice` 反序列化 (#35114)、空白文本块 400 (#31259)。

5. **Desktop 体验深化**
   - 多选删除 UX (#35123)、项目名内联编辑 (#33744)、未读标记 (#30348)、跨 worktree 的 session-create unrevert (#35255)、PowerShell/Windows 集成 (#39851 等)。
   - 表明 Desktop 已经从"附属 GUI"演化为与 TUI 并列的一等产品。

6. **插件与生态治理**
   - 重复 plugin ID 报告 (#46718)、plugin 更新入口 (#46699)、外部 loop 控制器 `oh-my-loop` (#35251)。
   - 第三方项目正逐步形成 "OpenCode 周边生态"。

---

## 🧑‍💻 开发者关注点与痛点

> 从 Bug 报告与功能请求中提炼

- **Windows 平台是高频痛点**：TUI 退出关闭终端 (#22003)、Desktop 启动 ACL (#46702 相关)、PowerShell 打开项目 (#39851)、NSIS 安装沙箱权限 (#46696)。多个 PR 集中修复，**Windows 体验正在被系统性补课**。

- **Provider 兼容性矩阵不断扩张**：随着 Claude 5、GPT-5.6、Gemini 3.5、DeepSeek V4 等模型迭代，OpenCode 在 **thinking blocks、reasoning effort、tool_choice schema、空内容块** 等细节上频繁踩坑，需要为每个 provider 维护专门的兼容层。

- **状态管理与持久化稳健性** 是 Desktop 的薄弱环节：会话丢失 (#31023)、新会话串味 (#34049)、SQLite `session_message.seq` NOT NULL (#35116)、跨 worktree 快照错误 (#35255) 反复出现。社区期待更可靠的迁移/备份策略。

- **MCP 与长任务可靠性**：#35207 报告 MCP 工具（尤其 `playwright_browser_*`）无返回后整个 session 卡死，**缺乏超时与恢复机制** 是核心问题；#35177 进一步要求 abort 也能返回 tool id 以便清理。

- **OAuth / 鉴权流程小而频繁**：Google 登录 (#35206)、server Basic Auth 影响静态资源 (#46702)、GitHub Action 未鉴权 curl 触发限流 (#35120) —— 这些"外围但破坏感强"的问题正在被逐个收敛。

- **API 设计的可扩展性** 是开发者反复呼吁的方向：`prompt_async` 响应体、OpenAI 兼容端点、SDK 级别的 session-selected 实例 (#46496)，都指向 **opencode 正在从 CLI 工具向可嵌入 SDK / 运行时演进**。

---

*日报基于 2026-09-02 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-02

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（仓库当前地址：`earendil-works/pi`）

---

## 📌 今日速览

今日仓库无新版本发布，社区活跃度集中在 **TUI 全屏模式细节打磨**、**Provider 兼容性修复** 以及 **扩展 API 能力扩展** 三个方向。多个长期未决的 Issue（如 XDG 规范、TUI 复制粘贴、Agent 循环卡死）终于以 CLOSED 状态收尾；同时 0.84.4 之后引入的多项回归问题正被密集修复。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 + 👍）挑选如下：

1. **[#2870](https://github.com/earendil-works/pi/issues/2870)** — Follow XDG Base Directory（已关闭，👍 54 / 💬 21）
   Linux 上 Pi 将配置/状态文件散落在 `$HOME`，违反 XDG 规范。呼声最高的 Issue 之一，已被关闭意味着改动已落地。

2. **[#4338](https://github.com/earendil-works/pi/issues/4338)** — Agent 卡在 "working" 无进度循环（已关闭，💬 8）
   影响多个会话体验，标签含 `closed-because-refactor`，说明修复走的是结构性重构路径。

3. **[#5931](https://github.com/earendil-works/pi/issues/5931)** — TUI 复制粘贴出现多余空格与换行（已关闭，💬 8）
   长段落从终端复制时会按行宽断行污染内容，长期被诟病，今日关闭。

4. **[#6996](https://github.com/earendil-works/pi/issues/6996)** — Gemini 3.x 因缺 `thought_signature` 导致工具调用失败（OPEN，💬 7）
   仍是 Open 状态，说明 Gemini 3.x 工具链路还未完全跑通，影响使用 Flash 3.5/3.6 的用户。

5. **[#8134](https://github.com/earendil-works/pi/issues/8134)** — 经 HTTP 正向代理的 OpenAI 兼容 Provider 在首个工具调用后挂起（OPEN，💬 6）
   0.84.0 之后回归，企业内网/CI 场景的硬伤。

6. **[#6374](https://github.com/earendil-works/pi/issues/6374)** — Model catalog 推理级别元数据修正（已关闭，💬 5）
   跨 Provider 的 `reasoning level` 存在冲突，第三方去重目录受影响。

7. **[#4758](https://github.com/earendil-works/pi/issues/4758)** — `settings.json` 拆分为静态配置与动态状态两个文件（已关闭，💬 4）
   解决 Pi 动态写入污染用户配置文件的老问题。

8. **[#3591](https://github.com/earendil-works/pi/issues/3591)** — 支持 `CLAUDE_CODE_OAUTH_TOKEN` 注入 Anthropic Provider（已关闭，💬 4）
   对无头/CI 场景使用 Claude 的关键链路。

9. **[#8938](https://github.com/earendil-works/pi/issues/8938)** — 宽高比极小的内联图片被纵向拉伸（OPEN，💬 3）
   0.84.4 复现，根因在 TUI 单元格换算未考虑终端实际 cell 宽高比。

10. **[#8920](https://github.com/earendil-works/pi/issues/8920)** — RPC `abort` 在压缩中返回成功但未真取消（OPEN，💬 2）
    RPC 模式下的生命周期正确性问题，桌面客户端集成方高度相关。

---

## 🛠 重要 PR 进展

1. **[#8969](https://github.com/earendil-works/pi/pull/8969)** — subagent 工具支持 model 与 thinking 级别覆写（已关闭）
   调度时直接选模型/effort，避免为不同档位创建多份 agent frontmatter。对应 Issue #8970。

2. **[#8966](https://github.com/earendil-works/pi/pull/8966)** — `--provider` 单独使用时正确回退到该 Provider 默认模型；认证失败明确报错 Provider 名（已关闭）
   修复 CLI 启动时模型选择静默失效的问题。

3. **[#8941](https://github.com/earendil-works/pi/pull/8941)** — `openai-responses` 新增 `supportsMaxOutputTokens` 兼容位（已关闭）
   Codex 协议代理拒绝 `max_output_tokens` 时可关闭该参数，避免 400 错误。

4. **[#8957](https://github.com/earendil-works/pi/pull/8957)** — 修复 wrap UI prompt context 丢失原型链（已关闭，by badlogic）
   维护者亲自收尾的小但关键修复。

5. **[#8951](https://github.com/earendil-works/pi/pull/8951)** — `/resume` 默认隐藏 headless / RPC / subagent 自动会话（已关闭）
   极大改善 resume 列表噪音。

6. **[#8737](https://github.com/earendil-works/pi/pull/8737)** — `NO_PROXY` 匹配修复，支持通配/裸域与 IPv6（已关闭）
   修复 #8736，对企业代理环境是硬性需求。

7. **[#8900](https://github.com/earendil-works/pi/pull/8900)** — TUI 选择列表（`/thinking`、`/model`、`/scoped-models`）改为"双列 + ✓"布局（已关闭）
   由社区贡献者提交，显著提升选项可见性。

8. **[#8936](https://github.com/earendil-works/pi/pull/8936)** — preflight abort 后停止已预备的并行工具调用（已关闭）
   避免 abort 后仍执行工具导致状态污染，附回归测试。

9. **[#8937](https://github.com/earendil-works/pi/pull/8937)** — 内存中 fork 前先 settle 当前 turn（已关闭）
   修复 `toolResult` 错落到替换会话、`dispose()` 错清理资源的问题。

10. **[#8946](https://github.com/earendil-works/pi/pull/8946)** — 扩展加载最终 pass 不再使用过期的 pre-trust runtime（已关闭）
    解决 fork/resume/newSession 期间 trust 解析竞态导致的扩展加载问题。

---

## 📈 功能需求趋势

综合 50 条 Issue 与 20 条 PR，可归纳出以下热点方向：

| 方向 | 代表性议题 | 热度判断 |
|------|-----------|---------|
| **TUI / 全屏体验打磨** | #8938 图像拉伸、#8919 footer 空行、#8923 focus-in 不重绘、#8953 整文档滚动 | ⬆⬆⬆ 持续升温 |
| **Provider 兼容与新模型接入** | #6996 Gemini 3.x、#8978 GLM 5.3、#8977 llama.cpp 目录、#8804 Bedrock 工具校验、#8948 Anthropic workspace ID | ⬆⬆⬆ 高频 |
| **扩展 / RPC API 能力扩展** | #8970/#8969 subagent 参数、#8972 续传重置上下文、#8975 sendUserMessage 回执、#8976 setModel 文档、#8717 get_commands 字段 | ⬆⬆ |
| **稳定性与回归修复** | #8134 代理挂起、#8927 凭证文件锁、#8939 会话头丢失、#8968 provider 目录消失、#8973 Grok 4.6 死循环 | ⬆⬆ |
| **Linux 规范与配置治理** | #2870 XDG、#4758 settings/state 拆分 | ✅ 已落地 |
| **编辑工具健壮性** | #8962 edit tool 接受 JSON-string 数组 | ⬆ |

---

## 🧑‍💻 开发者关注点

提炼自 Issue/PR 描述与讨论，开发者社区当前最关注的痛点：

1. **回归控制不严**：0.84.0 → 0.84.3 → 0.84.4 短时间内连续引发代理挂起（#8134）、Grok 死循环（#8973）、Provider 目录消失（#8968）等问题，社区呼吁更稳健的发布流程与回归矩阵。

2. **企业/内网部署仍是短板**：正向代理、HTTP/HTTPS 混合、`NO_PROXY` 通配、容器 capability 裁剪（#8977 `--cap-drop ALL`）等场景多次翻车，相关 PR #8737、#8898 已开始逐个修复。

3. **扩展 API 语义不稳定**：`pi.setModel()` 不再写 `settings.json`（#8976）、`sendUserMessage` 失败回调缺失（#8975）、`get_commands` 字段名与文档不一致（#8717）——扩展作者反映 API 变更缺乏明确版本/迁移说明。

4. **新模型接入仍有摩擦**：Gemini 3.x 的 `thought_signature`、Grok 4.6 Responses 路由、GLM 5.3 Fireworks 路由都需逐个适配，社区期待更通用的协议适配层。

5. **TUI 细节影响日常使用**：图片渲染、footer 占用、空格与换行污染、selector 高度不足等"小"问题被频繁提报，开发者对全屏/视觉一致性要求变高。

6. **Headless / 自动化场景需要"一等公民"支持**：`--mode rpc` 下的 abort、compaction、resume 选择噪音（#8951）说明自动化集成正在成为主流用例之一。

---

*日报生成时间：2026-09-02 · 数据窗口：过去 24 小时 · 如需追踪长期趋势或单独深挖某一方向，欢迎指明。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

at end of output (3 comments, OPEN)
19. #10422 - release pipeline slowing down (3 comments, CLOSED, P2)
20. #10693 - image reads wedge OpenAI routes (3 comments, OPEN, P2)
22. #10745 - Edit confirmation bug (2 comments, OPEN, P3)
22. #10742 - extensions install silent exit (2 comments, OPEN, P2)
23. #10741 - extensions install silent exit (2 comments, OPEN, P2)
24. #10108 - review worktree provisioning (2 comments, CLOSED, P2)
25. #10734 - CI test budget bug (2 comments, OPEN, P1)
26. #10733 - perf(dws) pending-message journal (2 comments, OPEN, P2)
27. #10728 - OpenTUI migration follow-ups (2 comments, OPEN, P3)
28. #10716 - Web Shell workflow follow-ups (2 comments, OPEN, P3)
29. #10718 - Ctrl+C exit warning overflow (2 comments, OPEN, P2)
30. #10717 - structured scheduled-task titles (2 comments, OPEN, P3)

**Key PRs:**
1. #9952 - Configurable Mem0 providers (CLOSED)
2. #10730 - preserve slash command attachments (OPEN)
3. #10617 - ACP backend adaptor and multi-backend routing M4 (OPEN)
4. #10758 - stabilize verify-capture test (OPEN)
5. #10457 - DingTalk native interactive cards (OPEN)
6. #10738 - web-shell visuals stub module-safe (CLOSED)
7. #10458 - keep quoted code from blinding footer (OPEN)
8. #10123 - salvage superseded review runs (OPEN)
9. #10672 - vscode webview bundle test timeout (OPEN)
10. #10575 - seconds-long jobs own ECS lane (OPEN)
11. #10639 - expose ready session artifact snapshots (CLOSED)
12. #10739 - Activate OpenTUI backend (OPEN)
13. #9402 - agent board share work (OPEN)
14. #10548 - skip product tests for ECS updater (OPEN)
15. #10183 - structured on-demand recall memory (OPEN)
16. #9590 - provider-aware reasoning controls (OPEN)
17. #10747 - expose session artifact snapshots (OPEN)
18. #10752 - validate git pull options (OPEN)
19. #10713 - /btw side questions for channels (OPEN)
20. #9466 - rewind mapping to stable prompt identity (OPEN)

Now let me organize this into a comprehensive daily report.

The key themes I'm seeing:
1. **TUI/OpenTUI Migration** - #8662 tracking, #10728 follow-ups, #10739 backend activation
2. **v0.22.x regression bugs** - permissions.allow (#10218), toolSearch (#10520/#10530), /btw, etc.
3. **Web Shell / Daemon improvements** - #10710, #10750, #10713, #10747, #10716
4. **CI/Build Performance** - #10422 (closed), #10123, #10575, #10548, #10734, #10672, #10758
5. **Sandbox/Security** - #10583 Bubblewrap
6. **Memory/Context** - #9952 Mem0, #10183 structured recall
7. **Multi-model/Provider support** - #9590 reasoning controls, ACP backend (#10617)

Today's hot topics:
- OpenTUI migration progress (Batch 6 activated)
- v0.22.3 regression bugs (multiple)
- TUI rendering issues
- Performance optimization (CI, DWS)

Let me draft the report now.</think>

# Qwen Code 社区动态日报
**日期：2026-09-02**

---

## 一、今日速览

今日 Qwen Code 社区焦点集中在 **TUI 渲染层迁移**与 **v0.22.x 回归问题**两大主线：OpenTUI 迁移进入 Batch 6，PR #10739 正式激活 `QWEN_TUI_RENDERER` 后端可选启动；同时 v0.22.3 触发的多项回归（`permissions.allow` 语义变化、toolSearch 与 llama.cpp 兼容、OpenAI 兼容路由图片处理）仍是开发者反馈最集中的问题类别。

---

## 二、版本发布

**cua-driver-rs v0.20.3** 已发布，托管于 `packages/cua-driver`：
- **macOS**：通用二进制（intel + arm64），已 codesign + notarized，附 `QwenCuaDriver.app`
- **Linux**：未签名二进制（x86_64 + arm64），要求 glibc ≥ 2.31
- **Windows**：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）

此版本为 **Computer Use Agent (CUA)** 驱动的预构建二进制更新，不涉及 CLI/核心逻辑变动。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 优先级 | 状态 | 关键看点 |
|---|-------|--------|------|---------|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **TUI 渲染层从 ink 迁移至 OpenTUI（tracking）** | P3 | OPEN | 17 条评论的旗舰追踪 Issue。当前 ink 7 + React 19 + ~1037 行补丁引发闪烁、布局错位等问题；OpenTUI 是结构性解决方案。 |
| [#10218](https://github.com/QwenLM/qwen-code/issues/10218) | **permissions.allow 语义变化（0.22.1 引入）** | **P1** | OPEN | 高优先级：0.22.1 起 `permissions.allow` 从"自动批准列表"变为"注册表白名单"，未覆盖工具直接禁用且不询问，文档未说明。 |
| [#10520](https://github.com/QwenLM/qwen-code/issues/10520) | **toolSearch > 0 与 llama.cpp MCP 不兼容** | P2 | CLOSED | threshold=10 触发 400 "failed to parse grammar"，threshold=0 正常。是 0.22.3 引入的回归。 |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) | **0.22.3 中 400 Failed to initialize samplers** | P2 | OPEN | Qwen 3.8/3.6 + llama-server 必现，gemma4-12b 正常；Pi / OpenCode 无此问题。错误自 0.22.3 才出现。 |
| [#4711](https://github.com/QwenLM/qwen-code/issues/4711) | **慢速自托管模型 5 分钟 Body Timeout** | – | CLOSED | 长时间任务在 85% 处崩溃，社区长期诉求：可配置 body timeout。 |
| [#10400](https://github.com/QwenLM/qwen-code/issues/10400) | **tools.eager 与 Object.prototype 键名冲突** | **P1** | OPEN | PermissionManager.initialize 在键名冲突时崩溃；源自权限系统重构 #10098 round-4 复扫。 |
| [#10162](https://github.com/QwenLM/qwen-code/issues/10162) | **ACP NDJSON 队列饱和时优雅降级** | P2 | OPEN | `qwen serve` 在守护进程推送时触发队列上限后会**整条通道终止**，应改为降级而非撕裂。 |
| [#10710](https://github.com/QwenLM/qwen-code/issues/10710) | **serve 中途 kill turn 后重载隐藏已持久化消息** | P2 | OPEN | 当 ACP 通道在 turn 进行中崩溃（如 #10162 触发），重载会话时助手消息被隐藏。 |
| [#10583](https://github.com/QwenLM/qwen-code/issues/10583) | **为 Linux 添加 Bubblewrap 沙箱后端** | P2 | OPEN | 提议以轻量 `bwrap` 替代 Docker/Podman 沙箱，免去容器运行时依赖。 |
| [#10693](https://github.com/QwenLM/qwen-code/issues/10693) | **图片读取让 OpenAI 兼容路由卡死** | P2 | OPEN | qwen3.8-max-* / idealab preset 上，第一个含 `ReadFile` 图片附件的 turn 即触发硬性请求错误。 |

补充高关注度 Issue（4 条）：

- [#10218](https://github.com/QwenLM/qwen-code/issues/10218)：#10218 已在主表，重复则忽略；保留 [#10749](https://github.com/QwenLM/qwen-code/issues/10749)（TUI 滚轮加载历史 prompt 而非滚动对话）、[#10698](https://github.com/QwenLM/qwen-code/issues/10698)（Node 20 升级后 ESM 报错，构建失败）、[#2339](https://github.com/QwenLM/qwen-code/issues/2339)（长期受关注的 Telegram Bot 模式特性请求）、[#10422](https://github.com/QwenLM/qwen-code/issues/10422)（CI Quality Checks 升至 ~44 分钟 critical path，已修）。

> **社区反应观察**：`#8662` OpenTUI 追踪帖虽标 P3 但关注度最高（17 评论）；`#10218` 的 P1 评级反映 0.22.x 权限系统重构引发实质性破坏性变更，文档与提示缺失是主要抱怨点。

---

## 四、重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容 |
|---|----|----|------|
| [#10739](https://github.com/QwenLM/qwen-code/pull/10739) | **OpenTUI 后端激活（Batch 6）** | OPEN | **今日最具里程碑意义**。通过 `QWEN_TUI_RENDERER` 环境变量显式切换，仅在 Bun/新版 Node（支持 FFI）启用；与 #8662 推进的 ink→OpenTUI 迁移直接对接。 |
| [#10617](https://github.com/QwenLM/qwen-code/pull/10617) | **qwen-live ACP 后端适配器与多后端路由（M4）** | OPEN | 语音守护进程现可驱动任意 ACP agent（`qwen --acp`、`claude-code-acp`、任意 JSON-RPC stdio agent），Live 拆分路线 #10118 的 M4。 |
| [#9952](https://github.com/QwenLM/qwen-code/pull/9952) | **外部上下文：可配置 Mem0 兼容 Provider** | CLOSED | 引入 `mem0` provider 类型 + 版本化内置预设（Mem0 Platform V3 等），固化不可变 wire 契约。 |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | **结构化按需召回（managed auto-memory）** | OPEN | 把扁平、body-heavy 的 prompt 演进为结构化 push/pull 召回协议：变化时给完整两级 ref/title 树，命中 turn 给查询聚焦的元数据子树，并新增显式召回工具。 |
| [#10457](https://github.com/QwenLM/qwen-code/pull/10457) | **钉钉原生交互卡片呈现权限请求** | OPEN | 钉钉 attended 工具权限请求以原生卡片呈现（含 allow once / deny / 持久允许），并绑定用户与 live run。 |
| [#10750](https://github.com/QwenLM/qwen-code/issues/10750)（相关 PR #10713）| **Channel `/btw` 旁路提问** | OPEN | 把 `/btw <question>` 旁路提问扩展到 Channel 会话，通过可选 bridge 能力实现：文本校验、共享会话授权、立即 ack+correlation id、不污染主会话历史。 |
| [#9590](https://github.com/QwenLM/qwen-code/pull/9590) | **Provider-aware 推理控制** | OPEN | WebShell 为 DeepSeek V4 / GLM 5.2 / Kimi 增加 provider 与 endpoint 感知的推理控件：toggle-only hybrid、规范 effort 阶、强制思考型无关闭项。请求适配器透明转换。 |
| [#10123](https://github.com/QwenLM/qwen-code/pull/10123) | **抢救被取代的 review run 并稳定 report-time 刷新** | OPEN | 修复 #10110：`synchronize` 不再触发 `cancel-in-progress`（仅 `closed` 触发），synchronize run 进入 PENDING 队列；CI 报告时间基础刷新延迟至合并窗口。 |
| [#10747](https://github.com/QwenLM/qwen-code/pull/10747) / [#10639](https://github.com/QwenLM/qwen-code/pull/10639) | **Web Shell 会话工件快照回调** | OPEN/CLOSED | 嵌入宿主可订阅 `onSessionArtifactsChange`/`onSessionArtifactsReady` 回调，获取权威工件列表 + 当前 turn 投影，带原因 (`restore` / `change`) 与单调序号。 |
| [#10575](https://github.com/QwenLM/qwen-code/pull/10575) + [#10548](https://github.com/QwenLM/qwen-code/pull/10548) | **CI 性能重构** | OPEN | 8 个秒级任务迁出 `ecs-qwen` 到新 `ecs-light` 通道；ECS updater 维护集新增 `github_ci_only` profile，分类器从 immutable base SHA 检出，避免 PR checkout 信任问题。 |

补充：
- [#10752](https://github.com/QwenLM/qwen-code/pull/10752)：git pull 选项组合校验 + detached HEAD 校验（#10390 合并后 review）
- [#9466](https://github.com/QwenLM/qwen-code/pull/9466)：TUI rewind 用 `promptId` 作为稳定标识，持久化到用户记录，恢复更准确

---

## 五、功能需求趋势

| 趋势方向 | 代表性 Issue/PR | 社区信号 |
|----------|-----------------|---------|
| **TUI 体验升级** | #8662、#10728、#10739、#10749、#10718、#7713 | ink→OpenTUI 迁移进入实战部署期；TUI 滚动、Ctrl+C 警告溢出、提示行高度 off-by-one 等 UX bug 集中暴露 |
| **多 Provider / 多模型推理路由** | #9590、#10617、#10520、#10530、#10693 | DeepSeek / GLM / Kimi / 各类 OpenAI 兼容路由的差异化推理控制成为重点；同时 v0.22.3 在 llama.cpp、自托管 OpenAI 兼容服务上出现兼容性问题 |
| **Web Shell / Daemon 增强** | #10710、#10750、#10713、#10747、#10716、#10162 | 服务模式"类 Codex" 会话导航、旁路提问、artifact 快照回调、长会话消息持久化是当前最密集的产品化诉求 |
| **CI / 性能优化** | #10422、#10123、#10575、#10548、#10734、#10672、#10758 | Quality Checks ~44 min、CPU 预算单位混淆、VSCode webview 测试超时等多条优化协同，目标是把 release critical path 缩短 |
| **沙箱 / 安全** | #10583 | Bubblewrap 沙箱后端提案代表社区对"无容器依赖、本地 OS 级隔离"的强烈诉求 |
| **Memory / 上下文管理** | #9952、#10183 | 从扁平 body-heavy prompt 转向结构化 push/pull；Mem0 兼容 provider 可配置化 |
| **远程访问 / 通讯集成** | #2339、#10457 | Telegram Bot 模式、钉钉原生交互卡片代表通讯平台集成方向 |

---

## 六、开发者关注点与痛点

**1. v0.22.x 回归破坏体验**（最尖锐）
- `permissions.allow` 从"自动批准列表"变"注册表白名单"（[#10218](https://github.com/QwenLM/qwen-code/issues/10218)），未覆盖工具**不再询问而是直接禁用**，且需重启生效。文档与变更说明缺失，是 P1 评级原因。
- 0.22.3 引入 `Failed to initialize samplers` 错误，与多个本地推理后端（llama.cpp、qwen3.8-max-* idealab 路由）不兼容（[#10520](https://github.com/QwenLM/qwen-code/issues/10520)、[#10530](https://github.com/QwenLM/qwen-code/issues/10530)、[#10693](https://github.com/QwenLM/qwen-code/issues/10693)）。

**2. 长任务 / 慢模型超时不可配置**（#4711）
自托管慢速

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报 · 2026-09-02

> 数据来源：`github.com/Hmbown/DeepSeek-TUI`（即 Hmbown/CodeWhale 主仓库，过去 24 小时动态）

---

## 📌 今日速览

- **0.9.12 "Shell Wave" 集中提单**：今日围绕 Tideline 设计语言的 TUI 重构 PR 集中爆发，覆盖 diff 高亮、工具输出色彩保留、信息行归位、设置面板统一 schema 等十余项切片。
- **新 Provider 集成潮**：Neuralwatt（GLM 5.2 + 非 token 计费）、Zenmux（DeepSeek-V4-Pro/Flash 首选通道）两大请求在 24 小时内被关闭/推进，provider 生态继续扩张。
- **关键修复已合并**：bundled 模型目录 stale 信号失效、原生 ChatGPT PKCE 登录、ACP+MCP 角色分离、i18n 单向收敛等高优先级 issue 均已落地。

---

## 🚀 版本发布

无（过去 24 小时无新 Release）。

---

## 🔥 社区热点 Issues

1. **#5806 [OPEN] OpenDesign（nexu-io/open-design）兼容性适配** — 社区提议把 CodeWhale 接入 93k★ 的开源 Claude-Design 替代品，先以 MCP 方式桥接，再推动原生 runtime adapter 上游。 *（今日新增，仍 OPEN）*  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5806)

2. **#4956 [CLOSED] WSL2 下 provider 连接失败** — 用户在 WSL2 安装后无法联通 API provider，4 条评论，社区对 Windows/WSL 环境连通性高度关注。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4956)

3. **#4568 [CLOSED] 新版斜杠指令 `/xxx` 响应迟缓** — Windows 10 用户实测反馈 `/xxx` 指令明显卡顿，疑似新版性能回退，3 条评论。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4568)

4. **#4564 [CLOSED] `codewhale exec --auto` 在 Windows 上的参数吞噬 bug** — `--model` / `--toolsets` 被合并为单一参数，社区建议支持前置 flag 或新增环境变量。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4564)

5. **#3751 [CLOSED] Neuralwatt Provider 接入** — 请求支持提供 GLM 5.2 + 非 token 计费模型的 portal.neuralwatt.com，社区热度上升。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/3751)

6. **#1330 [CLOSED] Zenmux 作为 DeepSeek-V4-Pro/Flash 一级 provider** — 提议将 ZenMux 提升为 DeepSeek-TUI 的原生通道，避免走 `openai` 兼容层 hack。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/1330)

7. **#2535 [CLOSED] ACP 模式支持 MCP 工具 + exec 流式输出 + 角色分离** — 国内用户基于飞书 IM 后端的实战诉求，社区已合并推进。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/2535)

8. **#4394 [CLOSED] Compaction：发布并强制结构化存活契约** — 维护者发起的可靠性增强，要求为 compaction 增加显式 Plan/To-do/subagent 存活契约。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4394)

9. **#4720 [CLOSED] Provider/Model 自动路由体验欠打磨** — 维护者评估运行时 deepseek → zai / deepseek-v4-pro → GLM-5.2 的自动切换是否被合理呈现，反映多模型路由仍是高频痛点。  
   👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/4720)

10. **#5778 [CLOSED] 无 Codex CLI 也能原生登录 ChatGPT/Codex 订阅** — 用户报告当前必须依赖外部 `~/.codex/auth.json`，要求内置登录通道（已由 #5784 落地）。  
    👉 [查看 Issue](https://github.com/Hmbown/CodeWhale/issues/5778)

> 备注：另有 **#5605 / #5735 flaky test**、**#5519 Web i18n 单向收敛**、**#5062 managed sign-in dogfood**、**#5759 MCP 启动诊断喧宾夺主** 等 19 条 issue 在 24 小时内被同时关闭，反映维护团队处于集中清扫阶段。

---

## 🛠️ 重要 PR 进展

1. **#5814 [OPEN] `/fullscreen` 与 `/inline` 运行时切换屏幕模式** — `/inline` 启用 ratatui `Viewport::Inline` 全高 + 无 alt-screen，会话退出后 shell scrollback 可继续滚动。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5814)

2. **#5816 [OPEN] runtime-api：恢复持久化 goal 并托管 continuation loop（#5711 重投）** — `PUT /v1/threads/{id}/goal` 在 idle 线程上注入 goal 并派发 kickoff turn，目标跨重启保持。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5816)

3. **#5815 [OPEN] Fleet：你添加的模型就是你的 fleet，且它排在第一位** — `/model` 选单中 `⇧F` 直接收藏/移除具体路由（provider + model id），fleet 概念前置。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5815)

4. **#5813 [OPEN] diff 卡片强调"实际改动的词"** — 同行替换时，把真正变化的 word 用粗体+反色高亮（oh-my-pi 风格）。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5813)

5. **#5812 [OPEN] 工具输出保留 ANSI 颜色** — `cargo` / `gh` / PTY 等带色输出不再被剥色，按 wave R4 落地。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5812)

6. **#5811 [OPEN] 真实信息行下沉到 composer 之下** — `owner/repo · ⑂ branch · model · context NN%` 作为末行直接挂在姿势行下方，移走 transcript 顶部噪声。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5811)

7. **#5810 [OPEN] `/settings` 单一 schema 投影** — 按 `SHELL-DESIGN-20260901` §2.0 实现 tabs / groups / label-value / 描述带 / Preview，告别碎片化配置 UI。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5810)

8. **#5784 [CLOSED ✅] 原生 ChatGPT PKCE 登录（#5778）** — `openai-codex` 路由不再依赖 Codex CLI / `~/.codex/auth.json`，浏览器 PKCE + 本地回调，token 存 CodeWhale 自有存储，与 xAI device-login 同形态。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5784)

9. **#5807 [CLOSED ✅] bundled 模型目录允许过期** — TTL 从 10 年改为 30 天并启用 stale 信号，修复 7 月 6 日 snapshot 永久假装新鲜的发布阻塞 bug。  
   👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5807)

10. **#5805 [CLOSED ✅] Web i18n `isZh` 单向天花板（#5519）** — `web/lib/i18n/` 外的 `isZh` 分支数硬上限 28，只能下降不能上升，强制迁移收敛。  
    👉 [查看 PR](https://github.com/Hmbown/CodeWhale/pull/5805)

> 顺带：#5804 / #5803 / #5802 / #5801 为 dependabot 提的常规 bump（fenix、`@types/node` 26、`@opennextjs/cloudflare`、react-dom 19.2.8）；#5799 tool cell 自带状态、#5797 设计 token 单一来源、`#5808` 重复常量清理、`#5800` 移除内部 handoff 文档等均已合并。

---

## 📈 功能需求趋势

从今日活跃 issue/PR 提炼，社区关注方向集中度高、且相互交织：

| 方向 | 代表 issue/PR | 信号强度 |
|---|---|---|
| **多 Provider 生态扩张** | #3751 Neuralwatt / #1330 Zenmux / #4720 自动路由 / #5094 Responses dialect | ⭐⭐⭐⭐ |
| **Tideline 设计语言落地** | #5754 / #5756 / #5757 / #5759 / #5761 / #5764 + PR #5810/#5811/#5812/#5813/#5814 | ⭐⭐⭐⭐⭐ |
| **跨平台 / WSL / Windows 兼容** | #4956 WSL2 provider / #4564 Windows exec flag / #5778 摆脱 Codex CLI | ⭐⭐⭐⭐ |
| **Agent/工具能力扩展** | #2535 ACP+MCP / #5549 shell wait_any/all / #1569 RTK 过滤 / #5806 OpenDesign 桥接 | ⭐⭐⭐⭐ |
| **可靠性与可观测性** | #4394 compaction 契约 / #4666 prefix 不变量 / #5605/#5735 flaky test / #5807 stale 模型目录 | ⭐⭐⭐ |
| **i18n / 本地化收敛** | #5519 / #5805 `isZh` 单向天花板 | ⭐⭐ |
| **首次启动 UX 渐进化** | #5522 v0.9.10 first-run 重构 | ⭐⭐⭐ |

---

## 🧑‍💻 开发者关注点

通过 issue/PR 文本归纳，社区开发者当前最集中的痛点与诉求：

1. **TUI 视觉/交互"说真话"** —— 多个 issue 反复指出"画了但不可点的控件"、"假装在跑的占位"、"陈旧 startup 标记"。Tideline wave 的目标就是让 active session 在 100+ 列下呈现真实运行态（runs / whales / pod / work / context 五组状态条）。
2. **provider 路由需要可解释、可控** —— 不再接受 silent auto-switch（`deepseek → zai` 案例），希望用户在模型 picker 中能主动钉住 fleet。
3. **跨平台 first-launch 心理成本过高** —— 非英语用户首启即撞英文 telemetry + 一面墙的 settings/key hint，被多次点名为劝退点（#5522）。
4. **bundle 资源新鲜度信号缺失** —— 长期 TTL + 不读 staleness，导致 catalog 永远假装"最新"（#5807 修复）。
5. **WSL2/Windows 链路与外部 CLI 强耦合** —— provider 连接、`exec --auto` 参数吞噬、ChatGPT 登录强依赖 Codex CLI 三类问题指向同一类诉求：**自带可移植的本地凭据与运行时**。
6. **i18n 收敛困难** —— `isZh` 分支数 30 天净增 10 个文件，必须用"硬天花板"反向约束（#5519/#5805）。
7. **测试 flake 在并行负载下暴露 owner-lock 冲突** —— `runtime_chat_relay` / `remote_control` 两组 sibling flake 说明：单测稳定 ≠ 全套并行稳定，CI 安全门需重新校准。

---

*本日报由 DeepSeek TUI 社区动态聚合自动生成；数据快照时间为 2026-09-02 当日。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*