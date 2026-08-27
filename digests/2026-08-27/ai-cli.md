# AI CLI 工具社区动态日报 2026-08-27

> 生成时间: 2026-08-27 06:39 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-08-27  
**覆盖工具**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI  
**数据来源**：各项目 GitHub 仓库公开动态

---

## 1. 生态全景

2026 年 8 月末的 AI CLI 工具生态呈现"**高速迭代与回归频发并存**"的阶段性特征：8 个项目 24 小时内累计发布 **8 个版本（含 5 个 prerelease/nightly）**，但其中 4 个版本在同日或次日即触发社区级故障（Claude Code v2.1.247 的 GH Actions 回归、Codex 26.820 系列 Windows 崩溃、Pi v0.84.3 的 TUI/Windows 工具链连环故障）。多代理（Subagent/Agent Team）、MCP 协议、长会话上下文治理与跨平台稳定性，是本周几乎所有工具共同面临的四道核心考题——也是 AI Agent 从"能跑"走向"能用"必须跨越的工程门槛。

---

## 2. 各工具活跃度对比

| 工具 | Issues（24h） | PR（24h） | Release（24h） | 综合活跃度 | 当日核心特征 |
|---|---|---|---|---|---|
| **Claude Code** | 50 | 2 | 1（v2.1.247） | 🔥🔥🔥🔥 | 同日回归 + AGENTS.md 标准诉求最强 |
| **OpenAI Codex** | 50 | 20+ | 2（v0.150.1 + 5 个 alpha） | 🔥🔥🔥🔥🔥 | Windows 26.820 危机，PR 自动化占比极高 |
| **Gemini CLI** | 50 | 11 | 1（v0.59.0 nightly） | 🔥🔥🔥🔥 | SSRF 等安全 PR 集中爆发 |
| **GitHub Copilot CLI** | 37 | 0 | 3（v1.0.81-12/-13/-14） | 🔥🔥🔥 | MCP token 成本与 TUI 死亡循环 |
| **OpenCode** | 10+ | 10+ | 0 | 🔥🔥🔥 | 2.0 子代理重构集中爆发 |
| **Pi** | 50 | 14 | 0 | 🔥🔥🔥🔥 | v0.84.3 跨平台回归 + 模型生态扩张 |
| **Qwen Code** | 10 | 10 | 1（v0.22.2） | 🔥🔥🔥 | Agent Team 竞态审计 + CI 基础设施失修 |
| **DeepSeek TUI** | 8 | 10+ | 0 | 🔥🔥 | 多会话隔离与 MCP 安全收敛 |
| **Kimi Code CLI** | 2 | 1 | 0 | 🔥 | 极低活跃，进入打磨期 |

**观察**：活跃度呈两极分化——头部三强（Codex / Claude Code / Gemini CLI）Issue 量均触及 50 条采样上限，Codex PR 自动化密度最高（`copyberry[bot]` 主导内部基础设施重构）；尾部 Kimi Code 进入沉淀期，社区沟通显著放缓。

---

## 3. 共同关注的功能方向

### 🔹 A. MCP 协议生态治理（覆盖 7/9 工具）
- **Claude Code** [#36024]：Gmail MCP 多账号支持
- **Codex** [#40715, #40819]：MCP stdio 传输在 Windows/WSL 下"invalid transport"故障
- **Gemini CLI** [#29081, #28902]：OAuth SSRF 修复、`$VAR` 变量扩展绕过
- **Copilot CLI** [#4613, #4588]：MCP schema 全量注入导致 354K token 浪费 + 仅 Anthropic 享受 tool deferral
- **Qwen Code** [#10228, #10248]：`qwen serve` 加载 MCP 后 Web UI 失效
- **DeepSeek TUI** [#5637, #5633]：MCP secret provider 范围限定 + 路由层工具投影归一化
- **OpenCode** [#45491, #45453]：edit tool 模糊匹配误报、工具查找前 hook 修复
> **共同诉求**：MCP 从"能用"到"可治理"——认证、安全边界、token 经济性、协议一致性。

### 🔹 B. 多代理 / 子代理稳定性（覆盖 6/9 工具）
- **Claude Code** [#72659, #89319]：Forked agents 失控、Background session 加载不到 skills
- **Gemini CLI** [#22323, #21409, #21968]：Subagent 误报 GOAL、Generalist 挂死、技能未触发
- **OpenCode** [#45442, #42657, #37314]：2.0 子代理 50 分钟 364 次相同 grep 无循环保护 + TUI 97% CPU + 子会话成孤儿
- **Pi** [#7053]：并行工具批处理兄弟节点阻塞
- **Qwen Code** [#10074, #10207-10211]：Agent Team 5 个并发竞态与清理风险（ghost member、重复任务所有者分派）
- **Copilot CLI** [#4533, #4628]：并行子 agent 启动瞬间 TUI 哑火、autopilot 误杀父进程
> **共同诉求**：循环保护、生命周期一致性、状态语义清晰化、可观测性。

### 🔹 C. 长会话与上下文治理（覆盖 5/9 工具）
- **Codex** [v0.150.1, #37299, #38495]：图像压缩预算回溯、长任务无脑重新计量 15.5h 烧 90% 周额度、code-mode 静默退化为模型轮询
- **Pi** [#6879, #7724]：**社区最关心的稳定性痛点**——auto-compaction 在 100% 上下文溢出后仍不触发（24 评论 / 19 👍）、冷启动恢复重放已删除消息
- **Copilot CLI** [v1.0.81-14, #4629]：会话恢复性能优化、hooks 在 `--resume` 下行为不一致
- **Gemini CLI** [#26522, #28914]：Auto Memory 反复重试低信号会话 + 重试 nudge 改至尾部保前缀缓存
- **DeepSeek TUI** [#5620, #5629]：上下文压力告警瞬时消失 + sticky 化修复
> **共同诉求**：压缩触发时机可靠化、上下文预算可视化、状态持久化语义统一。

### 🔹 D. Windows / 跨平台稳定性（覆盖 5/9 工具）
- **Claude Code** [#76357, #89692, #90007]：MSIX 自动更新反复崩溃，需重启电脑
- **Codex** [#40752, #40715, #40819, #40700]：26.820 系列 bundled codex.exe 重定位 + MSIX 沙盒 + WSL MCP 全面失败，**建议暂缓升级**
- **Pi** [#8582, #8688, #8620, #8715]：PowerShell 工具交互模式回退 5.1、`.` 前缀解析、bundled CLI 模块解析失败、npm 全局静默 ENOENT
- **OpenCode** [#33890]：Bun 1.3.14 在 Linux Zen4/AVX-512 上随机 SIGILL
- **Copilot CLI** [#4612]：FileWatch 主机事件死循环、debug 日志膨胀到 13 GB
> **共同诉求**：安装/更新机制、shell 工具链、终端兼容性、运行时崩溃的端到端验证。

### 🔹 E. AGENTS.md / 跨工具互操作标准（覆盖 3/9 工具）
- **Claude Code** [#31005]：**332 👍**——社区呼声最高的长期诉求
- **Codex** [#28739]：请求加入 `AGENTS.local.md` 叠加层 + `@` 引用扩展
- **OpenCode** / **Copilot CLI** [#252, #4622]：全局 Instructions 与用户级发现路径
> **共同诉求**：跨工具配置共享、技能库互操作。

### 🔹 F. 权限与安全语义（覆盖 5/9 工具）
- **Claude Code** [#90010]：**安全高危**——OAuth Token 通过 security-guidance 插件明文写入 transcript
- **Codex** [#41041, #41046]：加密敏感 history/notes 工具参数 + TUI 委派提示保留工具权限
- **Gemini CLI** [#29081, #29099, #28863]：MCP OAuth 防 SSRF + 工作区信任 fail-closed + 扩展环境变更需用户授权
- **Qwen Code** [#10218]：P1——`permissions.allow` 语义变化未文档化导致升级即踩坑
- **Copilot CLI** [#4103, #4588]：私有 HTTPS 仓库凭证助禁被破坏 + MCP 仅 Anthropic 享受 tool deferral
> **共同诉求**：权限边界显式化、变更需文档同步、安全策略可审计。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | Anthropic 官方工程 Agent | 企业团队 + GitHub Actions CI/CD | 强 IDE/桌面端、多账号 MCP、AGENTS.md 标准化先锋 |
| **OpenAI Codex** | OpenAI 全栈 Agent（Desktop + CLI） | Windows/WSL 开发者 + 多模型重度用户 | MSIX 桌面 + WSL 双轨、@ 引用、加密工具参数 |
| **Gemini CLI** | Google Gemini 模型入口 | 安全敏感型开发者 + 长会话用户 | RFC 级合规（9728/8414）、Auto Memory、AST 感知探索 |
| **GitHub Copilot CLI** | GitHub 生态原生 | GitHub Enterprise + 多模型协作 | Hooks + OpenTelemetry + Entra ID 认证、vs /delegate 多模型路由 |
| **OpenCode** | 开源、Provider 无关 | 自托管 + 多 Provider 切换 | 2.0 子代理重构、CodeMode、插件 hook、WebSocket RPC |
| **Pi** | TUI 优先 + 模型生态广 | 终端原生党 + 多模型试用者 | 软换行修复、Z.AI/NVIDIA/DeepSeek 并行内置 |
| **Qwen Code** | 阿里云 + 多代理实验场 | Agent Team 早期采用者 | `qwen serve` Web Shell、Workflow 任务化、Goal 工具化 |
| **DeepSeek TUI** | 多会话隔离 + 企业就绪 | CI/自动化 harness 嵌入 | 每会话控制 socket、per-thread usage 端点、tailscale 远程访问 |
| **Kimi Code CLI** | Moonshot 模型入口 | 中文用户 + cron 调度 | 异步协作式取消、`run_soul` 嵌套任务（已度过扩张期） |

**关键差异**：
- **分发形态**：Codex 押注桌面端、Claude Code/Copilot 主战 CLI、Pi/OpenCode/DeepSeek 坚持 TUI 原生、Qwen Code 拓展 Web Shell；
- **生态策略**：Gemini CLI 重安全合规、OpenCode 重 Provider 中立、Qwen Code 重多代理编排、DeepSeek TUI 重企业可治理性；
- **成熟度梯队**：Claude Code / Codex / Gemini CLI / Copilot CLI 处于"大规模用户+高频回归"阶段；OpenCode / Pi 处于"2.0 重构+模型扩张"阶段；Kimi Code 进入沉淀期。

---

## 5. 社区热度与成熟度

### 🔥 第一梯队：大规模用户 + 高频回归
- **Codex**：当日 Windows 26.820 累计评论 350+，几乎是社区共识的 P0；
- **Claude Code**：v2.1.247 当日 GitHub Actions 全线失败，**反映发布前跨运行时端到端验证不足**；
- **Copilot CLI**：MCP schema 注入致 354K token，FileWatch 死循环致 13 GB 日志，**功能扩张速度超过稳定性治理**。

### ⚙️ 第二梯队：快速迭代 + 重构期
- **OpenCode**：2.0 子代理机制是事实上的重构主线，#45442（364 次相同 grep）成为直接驱动力；
- **Pi**：模型生态扩张速度（GLM-5.3、NVIDIA、DeepSeek V4）+ v0.84.3 跨平台回归同时发生，**生态广度优先于单点深度**；
- **Qwen Code**：v0.22.2 引入 Node REPL → MCP 服务器的破坏性变更，Agent Team 进入系统性审计期。

### 🛡️ 第三梯队：安全收敛期
- **Gemini CLI**：当日 5+ PR 直接对应 GHSA / RFC 合规，呈现"安全告警密度升高"特征；
- **DeepSeek TUI**：通过 #5628 企业发布就绪 PR 一次性补齐运维/安全文档 + `--tailscale` 远程访问 + 诚实法务页，**主攻"能否真正进入生产"最后一公里**。

### 🌙 第四梯队：沉淀期
- **Kimi Code**：当日仅 2 条 Issue、1 条 PR，社区沟通节奏显著放缓，进入打磨期信号明显。

---

## 6. 值得关注的趋势信号

### 📡 趋势 1：**MCP 从协议走向治理**
MCP 已从"能不能跑通"进入"怎么管得好"——认证（OAuth）、安全（SSRF/凭据范围）、经济性（schema 注入成本）、一致性（tool projection 归一化）四方面同时爆发。**对开发者的参考**：选型 MCP 服务器时应优先评估其 token 经济性设计与认证模型，避免被 ambient schema 拖垮成本。

### 📡 趋势 2：**多代理编排成为下一道分水岭**
6/9 工具的当日热点都与子代理/Agent Team 相关，且问题高度同构——循环保护、生命周期一致性、状态语义、ghost member、abort 级联。**对开发者的参考**：当前 LLM agent 框架普遍缺乏"被监管式 agent"原语，per-session control socket、human-in-the-loop peek、loop detection 正在成为下一代 runtime 的标配。

### 📡 趋势 3：**长会话治理成为可观测性新战场**
auto-compaction 失效、上下文预算耗尽、会话恢复重放已删除消息——**压缩时机、上下文可视化、持久化语义**成为新热点。**对开发者的参考**：长 agentic loop（>2h）场景下，建议运行时内置"会话健康监控层"，而非依赖模型自觉。

### 📡 趋势

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-08-27 | **数据源**：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行（Top PRs）

> 注：PR 评论数在数据源中显示为 undefined，下表按官方"按评论数排序"呈现顺序结合实质热度综合筛选。

### 1. 🛠 skill-creator 评估体系修复（**最高优先级**）
- **PR**：[#1298](https://github.com/anthropics/skills/pull/1298) — `fix(skill-creator): run_eval.py always reports 0% recall`
- **作者**：MartinCajiao（2026-06-10）
- **功能**：修复 `run_eval.py` 永远返回 `recall=0%` 的核心 Bug，恢复 description 优化闭环。
- **讨论热点**：与 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论，10+ 独立复现）直接绑定，是 Skill 质量评估的"地基级"缺陷——目前整个描述优化循环都在对噪声做优化。
- **状态**：🟢 OPEN

### 2. 🎨 document-typography（新增）
- **PR**：[#514](https://github.com/anthropics/skills/pull/514)
- **作者**：PGTBoos（2026-03-04）
- **功能**：解决 AI 生成文档的"孤儿/寡妇"问题、编号错位等排版缺陷，覆盖所有 Claude 输出文档场景。
- **讨论热点**：用户几乎从不主动要求排版质量，但每个 AI 生成文档都受影响——属于"普惠型"补丁需求。
- **状态**：🟢 OPEN

### 3. 🐝 Hivemind 多 Agent 编排（新增）
- **PR**：[#1628](https://github.com/anthropics/skills/pull/1628)
- **作者**：Hanishchow（2026-08-21）
- **功能**：把机械任务委派给 headless opencode 免费 worker，让 Claude Code 保留规划/审查/合并权——零成本多 Agent 编排。
- **讨论热点**：精准击中"昂贵模型的 context 才是稀缺资源"的痛点，与 Issue [#16](https://github.com/anthropics/skills/issues/16)（Expose Skills as MCPs）理念呼应。
- **状态**：🟢 OPEN（最新 PR 之一）

### 4. 🔍 self-audit：四维推理质量门（新增）
- **PR**：[#1367](https://github.com/anthropics/skills/pull/1367)
- **作者**：YuhaoLin2005（2026-06-28）
- **功能**：交付前对 AI 输出做"机械文件验证 + 推理审计"双重门禁，跨项目、跨技术栈通用。
- **讨论热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）的"Reasoning Quality Gate Pipeline"提案同源——社区对"AI 输出可信度"诉求强烈。
- **状态**：🟢 OPEN

### 5. 🛡 skill-quality-analyzer / skill-security-analyzer（元 Skill）
- **PR**：[#83](https://github.com/anthropics/skills/pull/83)
- **作者**：eovidiu（2025-11-06）
- **功能**：从结构/文档/示例/边界/安全五维度评估任意 Skill 质量。
- **讨论热点**：与最高呼声 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论，安全与信任边界）形成天然呼应——社区既需要"分析 Skill"的能力，也担忧 Skill 本身的安全风险。
- **状态**：🟢 OPEN（停留时间较长，议程价值高）

### 6. 🧪 testing-patterns（新增）
- **PR**：[#723](https://github.com/anthropics/skills/pull/723)
- **作者**：4444J99（2026-03-22）
- **功能**：覆盖 Testing Trophy、AAA 模式、React 组件测试、契约测试等完整测试栈最佳实践。
- **讨论热点**：回应社区对"AI 生成测试可信度"长期存在的隐性需求。
- **状态**：🟢 OPEN

### 7. 🎮 pyxel（复古游戏开发）
- **PR**：[#525](https://github.com/anthropics/skills/pull/525)
- **作者**：kitao（2026-03-05）
- **功能**：基于 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 的像素/8-bit 游戏开发 Skill。
- **讨论热点**：MCP + Skill 集成的典型范例，代表"垂直兴趣领域"扩展方向。
- **状态**：🟢 OPEN

### 8. 📄 ODT（OpenDocument 读写）
- **PR**：[#486](https://github.com/anthropics/skills/pull/486)
- **作者**：GitHubNewbie0（2026-03-01）
- **功能**：覆盖 ODT/ODS 创建、模板填充、HTML 解析，填补 LibreOffice/ISO 文档格式空白。
- **讨论热点**：与 PDF/DOCX 修复 PR（[#538](https://github.com/anthropics/skills/pull/538)、[#541](https://github.com/anthropics/skills/pull/541)）共同构成"文档格式全家桶"补丁潮。
- **状态**：🟢 OPEN

---

## 二、社区需求趋势（Issues 提炼）

按讨论密度排序，社区最强烈的需求集中在以下五个方向：

| 趋势方向 | 代表 Issue | 讨论度 | 核心诉求 |
|---|---|---|---|
| 🔒 **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | ⭐ **43 评论** | 社区 Skill 滥用 `anthropic/` 命名空间造成权限冒充，必须建立官方信任框架 |
| 🏢 **企业级分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 评论 / 👍8 | Claude.ai 内置组织级 Skill 共享（替代手动 .skill 文件流转） |
| � **记忆/状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 评论 | `compact-memory`：用符号化记号压缩长程 Agent 自身 notes |
| 🛡 **Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412)（已关） | 6 评论 | 策略执行、威胁检测、信任评分、审计追踪等 Agent 安全模式 |
| 🧬 **Skills-as-MCP / 协议化** | [#16](https://github.com/anthropics/skills/issues/16) | 4 评论 | 把 Skill 暴露为 MCP，统一 AI 软件的 API 信号协议 |

**辅助趋势**：
- 📚 文档质量（DOCX/PDF/ODT 格式 Bug 密集出现 [#538](https://github.com/anthropics/skills/pull/538)、[#541](https://github.com/anthropics/skills/pull/541)、[#12](https://github.com/anthropics/skills/issues/12)）
- ☁️ 云平台集成（Bedrock [#29](https://github.com/anthropics/skills/issues/29)、ServiceNow [#568](https://github.com/anthropics/skills/pull/568)、SharePoint [#1175](https://github.com/anthropics/skills/issues/1175)）
- 🪟 Windows 兼容性（`run_eval.py` 在 Windows 下完全失效 [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)）
- 📊 评估基准可靠性（mcp-builder `evaluation.py` 静默吞错 [#1390](https://github.com/anthropics/skills/issues/1390)；`claude-api` 单次注入 156k token [#1487](https://github.com/anthropics/skills/issues/1487)）

---

## 三、高潜力待合并 Skills

以下 PR 讨论活跃、价值清晰，最有可能在近期落地：

| 优先级 | PR | 亮点 | 落地动因 |
|---|---|---|---|
| 🥇 P0 | [#1298](https://github.com/anthropics/skills/pull/1298) | 修复评估基础设施 | 不修复则整个 skill-creator 闭环失效 |
| 🥇 P0 | [#1607](https://github.com/anthropics/skills/pull/1607) | 标记 4 个已退役模型 ID | 阻止用户继续调用已下线模型（最小改动） |
| 🥈 P1 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 影响所有文档生成场景，零破坏性 |
| 🥈 P1 | [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接回应 #492 的安全焦虑 |
| 🥈 P1 | [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent 编排 | 切中"零成本扩展"强需求 |
| 🥉 P2 | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 与 #1385 提案同源，社区已预热 |
| 🥉 P2 | [#1602](https://github.com/anthropics/skills/pull/1602) | 评估序列化/编码/脚本稳定性 | 聚合多项可靠性修复 |
| 🥉 P2 | [#1615](https://github.com/anthropics/skills

---

# Claude Code 社区动态日报

**日期：2026-08-27**
**数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)**

---

## 1. 今日速览

今天是 **Claude Code v2.1.247** 发布日，新版本带来 `SendFeedback` 反馈工具；但同一版本也在 GitHub Actions 场景中引发回归故障（[#90003](https://github.com/anthropics/claude-code/issues/90003)）。社区讨论热度最高的话题集中在 **IDE/桌面端功能增强、多账号 MCP 集成、以及 AGENTS.md 标准支持** 这三大方向，其中 AGENTS.md 议题已获得 332 票 👍，仍是呼声最高的长期诉求。Windows 平台（特别是 MSIX 安装方式）的更新故障仍是社区高频痛点。

---

## 2. 版本发布

### 🚀 v2.1.247（2026-08-27）

- **新增 `SendFeedback` 工具**：会话出错时，Claude 可草拟反馈报告，用户在 `/feedback` 中审阅后再提交。可通过 `feedbackDrafts` 设置关闭。
- **新增结构化字段**：增加了 `{id, text, cooldownSessions, priority}` 条目，以及 `tipsFile`、`label` 配置项。

> ⚠️ **注意**：该版本在 GitHub Actions（`claude-code-action@v1.0.207`）中引入了初始化后立即失败的回归问题，见 [#90003](https://github.com/anthropics/claude-code/issues/90003)，推荐临时回退至 2.1.246。

---

## 3. 社区热点 Issues（TOP 10）

| # | Issue | 链接 | 评论 | 👍 | 为什么重要 |
|---|---|---|---|---|---|
| 1 | **[Feature] 支持与任意分支（非 main）做 diff 对比** | [#23626](https://github.com/anthropics/claude-code/issues/23626) | 43 | 131 | IDE/桌面端体验核心痛点；高 👍 表明团队协作场景普遍 |
| 2 | **[Feature] 递归扫描 `~/.claude/skills/` 子目录** | [#18192](https://github.com/anthropics/claude-code/issues/18192) | 43 | 63 | ✅ 已关闭，反映用户组织大型技能库的真实需求 |
| 3 | **[Bug] 归档的 Claude Cowork 聊天记录丢失** | [#22931](https://github.com/anthropics/claude-code/issues/22931) | 38 | 38 | 数据丢失类问题，影响用户信任 |
| 4 | **[Bug] 个人账号 GitHub 仓库在 Claude Web 中不可见** | [#18467](https://github.com/anthropics/claude-code/issues/18467) | 36 | 78 | 长期未修复，影响个人开发者接入 Claude Code Web |
| 5 | **[Feature] MCP Gmail 支持多账号** | [#36024](https://github.com/anthropics/claude-code/issues/36024) | 32 | 79 | 反映"个人+工作"双账号是真实普遍需求 |
| 6 | **[Bug] Windows MSIX 更新失败导致应用无法启动** | [#76357](https://github.com/anthropics/claude-code/issues/76357) | 32 | 12 | ✅ 已关闭，Windows 桌面端稳定性的标志性回归 |
| 7 | **[Feature] 支持 AGENTS.md 与 `.agents/skills/` 标准** | [#31005](https://github.com/anthropics/claude-code/issues/31005) | 22 | **332** | 🔥 **点赞最高的长期未解议题**，社区自 2025 年 8 月起持续呼吁 |
| 8 | **[Bug] 左方向键意外跳到 agents 屏且不可重绑定** | [#75899](https://github.com/anthropics/claude-code/issues/75899) | 20 | 20 | ✅ 已关闭，TUI 键位设计缺陷 |
| 9 | **[Bug] 无法登录 Claude Code：验证邮件被屏蔽** | [#79808](https://github.com/anthropics/claude-code/issues/79808) | 13 | 4 | 严重的登录可用性 + 支持升级路径缺失问题 |
| 10 | **[Bug] 终端中会话内容多次渲染/重复** | [#49985](https://github.com/anthropics/claude-code/issues/49985) | 10 | 24 | ✅ 已关闭，TUI 渲染层回归 |

---

## 4. 重要 PR 进展

> ⚠️ **过去 24 小时仅更新 2 个 PR**，数量明显偏少，可能与新版本发布冲刺有关。

- **[#13437](https://github.com/anthropics/claude-code/pull/13437)** `fix(hookify): use relative imports for Python module resolution`
  修复 `hookify` 插件因绝对导入导致 "No module named hookify" 的跨平台错误，使用相对导入以正确解析 `core/` 下的模块。✅ 影响所有平台用户。

- **[#58673](https://github.com/anthropics/claude-code/pull/58673)** `s`（仅标题占位）
  ⚠️ 标题仅为单字符、内容为空，建议暂不纳入评估，等待后续补充。

---

## 5. 功能需求趋势分析

通过对过去 24 小时高互动 Issues 的归类，社区需求呈现以下清晰聚类：

### 🔹 A. IDE / 桌面端能力扩展
- **任意分支 diff 对比**（#23626，131 👍）：当前的 `main`-only 限制阻碍 PR Review 工作流。
- **AGENTS.md / `.agents/skills/` 标准兼容**（#31005，**332 👍**）：跨工具生态互操作的硬性诉求。

### 🔹 B. 多账号 / 多身份支持
- **MCP Gmail 多账号**（#36024）
- **Claude Web 同时支持个人 + 组织仓库**（#18467）
→ 体现"多身份"是 AI Agent 产品矩阵需要补齐的基础能力。

### 🔹 C. 性能与稳定性
- **Windows MSIX 自动更新崩溃**（#76357、#89692）
- **Bun 运行时 SIGSEGV 回归**（#89759）
- **MCP 进程重复生成 / 不终止**（#75574、#53134）
- **grep shim 内存爆炸 OOM**（#74143）
- **会话 JSONL 写入 UI 元数据导致 400 错误**（#90002）
- **OAuth Token 通过 security-guidance 插件明文写入 transcript**（#90010）⚠️ **安全高危**

### 🔹 D. Agent 工作流
- **递归扫描 skills 子目录**（#18192）
- **Forked agents 失控**（#72659）
- **Background session 加载不到插件 skills**（#89319）
- **DISABLE_GROWTHBOOK 的能力开关冲突**（#85298）
→ 围绕"多 Agent + 后台任务"的稳定性仍欠打磨。

### 🔹 E. 安全 / 合规
- 安全插件意外回显 OAuth Token（#90010）
- 安全层在涉及第三方模型（Grok/xAI）的合法商业任务中误报"网络安全话题"（#89854）

---

## 6. 开发者关注点总结

整理高频反馈，开发者当前的痛点集中在以下五点：

1. **🪟 Windows 平台稳定性最薄弱**
   MSIX 自动更新机制反复导致"必须重启电脑"才能继续使用，严重影响日常迭代（#76357、#89692、#90007）。

2. **📦 缺乏跨生态互操作标准**
   AGENTS.md 不被支持、递归 skills 扫描缺失，使得 Claude Code 在团队中难以与其他 AI 工具/脚本共享配置。

3. **🔐 安全机制既过度又不足**
   一方面误报阻断正常商业任务（#89854），另一方面安全插件本身又会泄露 OAuth Token 到会话日志（#90010）——呈现两头不到岸的尴尬状态。

4. **🧩 新版本回归风险高**
   v2.1.247 上线同日即出现 GH Actions 全面失败（#90003），Bun 启动 SIGSEGV 回归持续（#89759），暗示发布前缺乏跨平台/跨运行时的端到端验证。

5. **👤 多身份支持缺位**
   个人 / 组织 / 多账号邮箱 / 多 GitHub 账号等场景持续被卡，反映产品抽象层尚停留在"单用户单身份"假设。

---

*📊 报告基于 50 条最新 Issues（含 30 条评论排行）、2 条 PR、1 个版本发布。所有数据均为 GitHub 公开信息。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-27**

---

## 📌 今日速览

今日 Codex 仓库的焦点高度集中于 **Windows 桌面端 26.820 系列版本的稳定性危机**——大量用户报告 App 启动失败、MCP 传输错误、bundled codex.exe 重定位异常等问题，单日相关 Issue 评论数累计已超过 350 条。与此同时，团队发布了 **rust-v0.150.1** 稳定版，回溯了图像压缩预算功能（#41003），并继续高频推送 0.151.0-alpha 预发版本，迭代节奏显著加快。

---

##  版本发布

### rust-v0.150.1（稳定版 · Bug Fix）
- **核心变更**：Remote compaction 现在默认将保留的图像计入 token 预算，超额时自动裁剪较旧图像（#41003，回溯自 #40994）
- **影响**：解决长会话中图像上下文累积导致预算耗尽的问题
- 链接：https://github.com/openai/codex/releases/tag/rust-v0.150.1

### rust-v0.151.0-alpha.2 ~ alpha.5（预发版）
- 持续迭代 0.151 系列预发版本，密集集成新功能与稳定性改进

### rust-v0.150.0（已合并到 0.150.1）
- **@ 提及引用其他 Codex 任务**（#40308, #40315）
- **/copy 命令新增选择器**：支持复制完整回复、单个代码块或引用块（#39997）
- 终端无标题任务自动获得描述性标题

---

## 🔥 社区热点 Issues

### 1. [#40752](https://github.com/openai/codex/issues/40752) ⭐48 💬79
**Windows 桌面端 26.820.60940 启动失败：找不到 Codex CLI**
升级后 App 报 "Unable to locate Codex CLI" 并在 .cmd 包装器上出现 spawn EINVAL。**热度最高**，影响几乎所有 Windows 用户。

### 2. [#40715](https://github.com/openai/codex/issues/40715) ⭐78 💬68
**[Windows] 26.820.60940 失败：`invalid transport in mcp_servers.codex_app`**
Pro 用户反馈稳定版 MCP 传输异常，而 Beta 26.727.40816 工作正常。👍 数最高，反映强烈不满。

### 3. [#40819](https://github.com/openai/codex/issues/40819) ⭐53 💬60
**Desktop 26.820.7780.0：WSL 线程恢复失败**
WSL2 模式下恢复已挂起会话时同样遭遇 `invalid transport` 错误，影响 Windows + WSL 关键场景。

### 4. [#40700](https://github.com/openai/codex/issues/40700) 💬29
**[Windows 26.820] Desktop 无法启动：bundled codex.exe 重定位失败**
MSIX 沙盒路径无法释放，影响所有 26.820 版本用户。

### 5. [#35119](https://github.com/openai/codex/issues/35119) ⭐18 💬26
**[Windows][WSL] 26.721 将有效 WSL 仓库标记为非 Git 仓库**
该问题自 7 月以来仍未解决，"Git is unavailable" 错误严重影响 WSL 用户日常使用。

### 6. [#40881](https://github.com/openai/codex/issues/40881) 💬26
**WSL 模式下无法创建新聊天**
与 #40819 同根——MCP 传输问题再次阻断 WSL 工作流。

### 7. [#39841](https://github.com/openai/codex/issues/39841) 💬19
**Workspace 终端启动失败：setup refresh had errors**
Windows 26.818.31338 上终端完全无法使用，影响所有命令行操作。

### 8. [#24182](https://github.com/openai/codex/issues/24182) ⭐10 💬13
**[Feature Request] 在 App UI 中常驻显示 5 小时/周使用额度**
用户希望在使用过程中随时查看用量限制，避免撞限额。已存在 3 个月，需求持续增长。

### 9. [#40611](https://github.com/openai/codex/issues/40611) 💬10
**启用 Advanced Account Security 后陷入登录-登出死循环**
macOS Pro 用户在启用"Daybreak Blue"安全功能后 Codex 完全不可用。

### 10. [#28739](https://github.com/openai/codex/issues/28739) ⭐15 💬7
**请求加入 `AGENTS.local.md` 叠加层 + `@` 引用扩展（对齐 Claude Code）**
高价值功能请求，希望支持本地覆盖指令与文件来源追溯。

**其他值得关注的 Issue**：
- [#41049](https://github.com/openai/codex/issues/41049) 5.6 模型 `code-mode host exited during handshake`
- [#37299](https://github.com/openai/codex/issues/37299) 长任务每 10-30s 重复计量完整上下文，15.5h 烧光 90% 周额度
- [#38495](https://github.com/openai/codex/issues/38495) code-mode `exec` 静默退化为模型轮询，34.6M token 被浪费

---

## ️ 重要 PR 进展

### 1. [#41003](https://github.com/openai/codex/pull/41003) — Backport retained-image compaction budgeting to 0.150
将图像压缩预算回溯到 0.150 稳定线，并默认启用 `compaction_image_budget`。**已合入 rust-v0.150.1**。

### 2. [#40994](https://github.com/openai/codex/pull/40994) — Enable retained-image budgeting by default
主分支上将图像预算功能晋升为稳定并默认开启，老图像按需裁剪。

### 3. [#41041](https://github.com/openai/codex/pull/41041) — Encrypt sensitive history and notes tool arguments
对历史与笔记工具中的查询、追加文本、替换文本启用加密 schema，并发送 `x-openai-encrypted-tool-arguments` 头。**隐私安全重要更新**。

### 4. [#41050](https://github.com/openai/codex/pull/41050) — Add developer instructions for persistent mode
为 `ReasoningEffort::Persistent` 模式添加内置的主动跟进指令，并允许模型元数据通过 `persistent_instructions` 覆盖。

### 5. [#41046](https://github.com/openai/codex/pull/41046) — Preserve tool authority for TUI delegation prompts
委派提示保留原 TUI 工具的权限而非记录为用户输入，**修复授权模型漏洞**。

### 6. [#41017](https://github.com/openai/codex/pull/41017) — Propagate trace context through gRPC code mode
将 W3C `traceparent` 注入 gRPC 代码模式调用链，提升跨边界可观测性。

### 7. [#41005](https://github.com/openai/codex/pull/41005) — Attach verified access context to eligible plugin MCP calls
为本地只读 stdio 插件工具附加 ChatGPT `cyber_trusted_access` 授权上下文。

### 8. [#41001](https://github.com/openai/codex/pull/41001) — Make filesystem policy matching URI-native
文件系统策略匹配改为基于 URI 解析，正确处理 Windows 大小写路径与编码歧义。

### 9. [#41062](https://github.com/openai/codex/pull/41062) — Forward truncation policies to history notes backend
将输出截断策略序列化到 `x-openai-tool-output-truncation-policy` 头并转发到后端。

### 10. [#41030](https://github.com/openai/codex/pull/41030) — Update stable exec-server test to Codex 0.150.1
CI 基础设施同步升级到最新稳定版。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **Windows/WSL 稳定性** | #40752, #40715, #40819, #40700 | 🔥🔥🔥 |
| **MCP 传输层健壮性** | #40715, #40819, #40865, #40881 | 🔥🔥🔥 |
| **用量与计费透明度** | #24182, #37299, #38495, #40965 | 🔥 |
| **AGENTS 指令系统扩展** | #28739 | 🔥🔥 |
| **TUI/CLI 体验改进** | #38575（DECSET 2031 动态主题） | 🔥 |
| **身份认证与安全** | #40611, #40197 | 🔥 |

---

## 💡 开发者关注点

### 1. Windows 平台兼容性是最大痛点
26.820 系列版本（.60940 / .7780.0 / .9563.0）持续暴露：**bundled CLI 二进制重定位失败**、**MSIX 沙盒路径冲突**、**MCP stdio 传输握手异常**。这些不仅影响启动，还阻断 WSL 工作流，已成为社区共识的优先级 P0 问题。

### 2. 上下文/计费浪费引发强烈不满
- 长任务无脑重新计量完整上下文（#37299）
- code-mode 长时间命令退化为模型轮询（#38495）
- 退步或无意义行为消耗付费额度（#40965）

开发者呼吁更精细的"已完成即停止"机制和上下文预算可视化。

### 3. 安全与权限模型需要更明确语义
`Guardian`、`TrustedAccessContext`、插件 MCP 工具的 `cyber_trusted_access` 等机制开始出现，但 TUI 委派提示需保留工具权限（#41046）说明**权限传播边界仍待清晰化**。

### 4. 自动化 PR 占比极高
过去 24 小时 PR 中绝大多数由 `copyberry[bot]` 创建且状态为 CLOSED，表明大量内部基础设施重构（trace 传播、加密、URI 解析、代理硬化）正在密集推进，外部贡献者窗口较窄。

### 5. 模型与行为持续演进
`gpt-5.6`、5.6 模型相关问题（#41049）出现，`ReasoningEffort::Persistent` 模式与 Guardian Reviewer 增强同步落地，反映 Codex 在多模型协调与持久化推理上持续投入。

---

> 📊 **数据说明**：本日报基于 2026-08-27 GitHub 公开数据整理，覆盖 50 条最新 Issue 与 20 条重点 PR。建议 Windows 用户暂缓升级至 26.820 系列，等待补丁版本。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-27**

---

## 📌 今日速览

今日 Gemini CLI 发布了 v0.59.0 nightly 版本，核心亮点是修复了 MCP OAuth 元数据发现中的 SSRF 漏洞（CVE 级安全问题）。社区讨论热度集中在**许可证登录失败**问题（Issue #28912 单日评论超 45 条），同时 **Auto Memory 模块的多个质量缺陷**集中浮现，安全相关的 PR 显著增多（沙箱逃逸、变量扩展绕过、工作区信任策略）。

---

## 🚀 版本发布

### v0.59.0-nightly.20260827.g3c311beac

**核心更新**：修复 MCP OAuth 元数据发现与认证流程中的 SSRF 漏洞（PR #29081，已合并关闭）。

- 遵循 RFC 9728 §7.7 与 RFC 8414 安全约束
- 强制 OAuth 远程端点使用 HTTPS（本地 loopback 例外）
- 校验资源指示符的 origin 匹配
- 防止通过恶意 OAuth 元数据重定向发起内网探测

🔗 https://github.com/google-gemini/gemini-cli/releases/tag/v0.59.0-nightly.20260827.g3c311beac

---

## 🔥 社区热点 Issues

### 1. [#28912](https://github.com/google-gemini/gemini-cli/issues/28912) — 许可证失效导致登录失败 ⭐9
**评论 45 | p2 | bug**
社区讨论度最高的 Issue，多名用户反馈登录时报错 "You do not have a valid license of this product"。**需信息**：目前标记 need-information，尚未提供客户端版本与登录方式细节，怀疑与最近的鉴权切换相关。

### 2. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后误报 GOAL 成功 ⭐2
**评论 13 | p1 | bug | maintainer-only**
`codebase_investigator` 子代理在达到最大轮次后仍上报 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了执行被截断的事实，影响上游决策。

### 3. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 长时间挂起 ⭐8
**评论 8 | p1 | bug | 8 👍**
`gemini-cli` 委派给通用代理后无限挂起，建文件夹等简单操作也会卡死（最长等 1 小时后手动取消）。提示模型禁用子代理后问题消失。

### 4. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与执行后意图路由
**评论 8 | p2 | enhancement | effort/large**
利用 Gemini 3 原生 Bash 操作能力，通过零依赖 OS 级沙箱 + 执行后意图路由，既释放模型 bash 偏好又不损害安全性。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索
**评论 7 | p2 | feature | EPIC**
评估 AST 感知工具（tilth / glyph）的价值：精确读取方法边界、降低误读轮次、减少 token 噪声。`codebase_investigator` 增强方向。

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 很少主动调用技能与子代理
**评论 6 | p2 | bug**
即便 prompt 与自定义 skill（如 gradle、git）高度相关，模型也不会主动调用，需用户显式提示。技能描述与发现机制待优化。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Awaiting user input" ⭐3
**评论 4 | p1 | bug | core | medium**
执行简单 CLI 后进程挂起，UI 仍显示 shell 激活中并等待输入。可能是 stdin 处理或进程回收逻辑缺陷。

### 8. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 符号链接的 agent 文件不被识别
**评论 4 | p2 | bug**
`~/.gemini/agents/filename.md` 为符号链接时，子代理加载器跳过该文件。限制了 dotfiles 仓库化场景的可用性。

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 ⭐1
**评论 4 | p1 | bug | browser**
Wayland 环境下 Browser Agent 异常终止（`Termination Reason: GOAL` 但实际失败），Linux 桌面用户受影响。

### 10. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 反复重试低信号会话
**评论 5 | p2 | bug**
提取代理跳过低信号会话后，会话保持未处理状态又被索引反复捞取。SandyTao520 维护的 memory 系统追踪系列之一。

---

## 🛠️ 重要 PR 进展

### 1. [#29081](https://github.com/google-gemini/gemini-cli/pull/29081) — MCP OAuth 防 SSRF ✅ 已合并
**size/l | security**
v0.59.0 nightly 的核心安全修复：强制 OAuth 端点 HTTPS（本地 loopback 除外）、校验 origin、阻断内网探测。**已随今日版本发布**。

### 2. [#28902](https://github.com/google-gemini/gemini-cli/pull/28902) — 阻断 `$VAR` 变量扩展绕过 ⭐ 安全
**size/l | p1 | security | GHSA-wpqr-6v78-jr5g**
修复 `detectBashSubstitution()` / `detectPowerShellSubstitution()` 的不完整检查，防止 `${VAR}` 类模式绕过安全门控；同时加固 `gemini-automated-issue-dedup.yml` 工作流。

### 3. [#28914](https://github.com/google-gemini/gemini-cli/pull/28914) — 重试提示注入以保留前缀缓存
**size/l | area/agent**
把 on-retry nudge 从 `config.systemInstruction` 移至 `contents` 数组末尾（用户轮后缀），保留静态前缀缓存命中率，同时确保模型在生成前看到恢复提示。

### 4. [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) — 工作区信任 fail-closed + 过滤 mcpServers
**size/l | security**
在 `gemini-cli-a2a-server` 中强制工作区信任解析为 fail-closed，并在不可信/受限模式下过滤仓库级 `mcpServers`，防止服务器启动时执行未授权进程。

### 5. [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) — 扩展环境变更需用户授权
**size/l | area/extensions**
扩展更新可能未经同意注入环境变量到 MCP 子进程。该 PR 将 MCP 服务器环境配置纳入同意字符串，并对自定义环境变量进行清洗。

### 6. [#28917](https://github.com/google-gemini/gemini-cli/pull/28917) — WhisperModelManager 原子下载
**size/m | core**
下载先写 `.downloading` 临时文件、尊重背压、处理流错误、校验长度、失败清理、成功原子重命名——杜绝半下载模型污染。

### 7. [#28916](https://github.com/google-gemini/gemini-cli/pull/28916) — Whisper 转录行缓冲
**size/m | core**
为 `WhisperTranscriptionProvider` 引入 stdout 行缓冲，跨 `data` 事件被切分的时间戳转录行不再丢失。

### 8. [#28911](https://github.com/google-gemini/gemini-cli/pull/28911) + [#28904](https://github.com/google-gemini/gemini-cli/pull/28904) — Sandbox DEBUG 语义统一
**size/m | platform**
沙箱启动器使用 truthy 判断与其他模块（仅识别 `true`/`1`）不一致，导致 `DEBUG=false` / `DEBUG=0` 行为反直觉。两 PR 一起收敛语义并补测试。

### 9. [#28903](https://github.com/google-gemini/gemini-cli/pull/28903) — 忽略转义的 `@` 符号
**size/s | p1**
`useCommandCompletion` 反向扫描时，`\@` 被当作有效补全触发。增加反斜杠计数检查以避免误激活 AT 补全模式。

### 10. [#27406](https://github.com/google-gemini/gemini-cli/pull/27406) — 可配置数值路由规则
**size/m | p2 | area/agent | help wanted**
用户可在 `settings.json` 中定义多档复杂度分数→模型映射，替代硬编码二元阈值。需要社区用例反馈，欢迎测试。

### 11. [#28834](https://github.com/google-gemini/gemini-cli/pull/28834) — 抑制 workspace 扫描中的瞬态 ENOENT 警告
**size/m | core/agent | p1/p2**
BFS 工作区遍历遇到 `readdir` 与递归下降之间消失的临时锁目录时不再打印告警噪声。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 关注度 |
|------|----------------|--------|
| 🔒 **安全加固（SSRF / 沙箱 / 工作区信任）** | #29081、#28902、#29099、#28863、#28787、#28794 | ⬆️ 显著上升，多 PR 并行 |
| 🧠 **Auto Memory 质量与隐私** | #26522、#26525、#26523、#26516（SandyTao520 系列） | 集中爆发 |
| 🤖 **Subagent / Skill 调度** | #22323、#21968、#22598、#21000 | 持续热点 |
| 🌳 **AST 感知代码理解** | #22745、#22746、#19561（Tactful Extraction） | 探索期 |
| 🌐 **Browser Agent 鲁棒性** | #21983、#22232、#22267 | 渐进改进 |
| ⚡ **Token 效率与缓存** | #28914、#19561 | 性能关键路径 |
| 🔐 **认证与许可流程** | #28912、#28905 | 用户阻塞性问题 |

---

## 💬 开发者关注点

1. **登录与许可证流程不稳定**：单日 45 条反馈集中爆发（#28912），个人/企业账号鉴权路径需要更清晰的错误指引与版本回退说明。

2. **Auto Memory 既是亮点也是痛点**：作为差异化功能，多个 Issue 反映其会反复捞取低信号会话、secret 泄露到模型上下文、无效 patch 静默丢弃等问题——期待"fail-closed + 隔离"的处理范式。

3. **Subagent 体验是核心瓶颈**：挂死（#21409）、成功状态误报（#22323）、技能未触发（#21968）、bug 报告缺失上下文（#21763）——多个 issue 指向子代理的**状态语义、可观测性、调度策略**需要系统性设计。

4. **安全告警密度升高**：过去 24h 内多条 PR 直接对应 GHSA（GHSA-wpqr-6v78-jr5g）+ RFC 9728/8414 合规，社区对 sandbox、MCP、OAuth、扩展供应链的关注度处在高位。

5. **配置一致性与 UX 细节**：DEBUG 语义（#28911/#28904）、转义 `@` 处理（#28903）、`settings.json` 优先级（#22267）、文档与实际行为错位（#28905）——开发者期望"配置一次，处处生效"，减少凭直觉调试。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间 2026-08-27*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-27**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 在 prerelease 通道发布了三个连续版本（1.0.81-12 → -13 → -14），重点修复会话恢复性能、Hooks 的 OpenTelemetry 追踪以及 Windows Entra ID 认证；社区侧则集中爆发多起**高严重度回归问题**——尤其是 MCP 工具 schema 在启动期被全量注入导致首请求 token 飙升 354K，以及 FileWatch 主机事件死循环让调试日志膨胀至 13 GB。同时，Gemini 模型在 MCP 与标准调用场景下的 400 错误被多人复现，已形成跨 Issue 的热点话题。

---

## 🚀 版本发布

### [v1.0.81-14](https://github.com/github/copilot-cli/releases)
- **Improved**：恢复大型会话时优先展示最近历史，老消息后台加载，体验更流畅。
- **Fixed**：`read_agent` 重复调用现稳定返回完整 turn 历史（除非显式传 `since_turn`）。

### [v1.0.81-13](https://github.com/github/copilot-cli/releases)
- **Added**：Hooks 现可接收当前 OpenTelemetry trace context 并输出关联 span；input 新增 `traceparent`（含 `tracestate`），命令 Hook 获得对应环境变量，便于分布式追踪。
- **Fixed**：子 agent 内 Hook 的生命周期事件（`hook.start` / `hook.end`）丢失问题。

### [v1.0.81-12](https://github.com/github/copilot-cli/releases)
- **Added**：Windows 上受 Microsoft Entra ID 保护的远程 MCP 服务器可通过 OS 认证代理（WAM）登录，多数场景下零提示；其他平台与 `--device-code` 维持原有浏览器流程。
- **Fixed**：长时间恢复会话时反复出现的卡顿/上下文错位问题。

> 三个 prerelease 形成清晰的「会话体验 → 可观测性 → 认证体验」演进节奏，但仍处于预发布通道，**官方 `latest-prerelease` 查找逻辑存在缺陷**（见 #4605），部分用户卡在 1.0.81-9 无法升级。

---

## 🔥 社区热点 Issues

### 1. [#4613 — MCP 工具 schema 在 1.0.80+ 被全量注入，首请求增加 354K token](https://github.com/github/copilot-cli/issues/4613)
**OPEN · 高严重度**  
`xjli1972` 报告 1.0.80 起 CLI 不再延迟注入 MCP 工具 schema，一个最简 prompt 也会拖入整个 ambient MCP 目录，**直接影响成本与上下文窗口**。与 #4588 揭示的"仅 Anthropic 模型启用 tool deferral"形成证据链，是当前最值得关注的性能/费用回归。

### 2. [#4612 — FileWatch 主机事件死循环导致 TUI 冻结、调试日志膨胀到 13 GB](https://github.com/github/copilot-cli/issues/4612)
**OPEN · 高严重度**  
`tdihp` 描述长会话恢复后陷入 `No connection accepted a host event {"kind":"FileWatch"}` 紧循环，终端 UI 完全失响应、debug 日志无界增长至 13 GB。这是一类典型的资源耗尽型 Bug，对生产环境磁盘/内存都是隐患。

### 3. [#4533 — 并行子 agent 启动瞬间 TUI 停止消费事件（输入与滚动均死亡）](https://github.com/github/copilot-cli/issues/4533)
**OPEN**  
`bikramjitk` 在 prerelease `1.0.81-4/-5` 上发现：一旦本轮派生出**并行 subagent 块**，Rust runtime 仍正常工作但 TUI 立即哑火。结合 #4628 的 autopilot 超时问题，反映出 v1.0.81 prerelease 在**多 agent 并发场景下的稳定性短板**。

### 4. [#252 — 全局 Instructions 文件支持](https://github.com/github/copilot-cli/issues/252)
**CLOSED · 11 评论 / 12 👍**  
`searleser97` 提出希望支持跨 worktree/仓库复用的全局指令文件，避免每次手动复制。该 Issue 在 24 小时内被关闭，是本次更新周期内**社区参与度最高的长期诉求之一**，与 #4622「用户级发现路径配置」方向一致。

### 5. [#407 — 增加 `/tools` 斜杠命令列出所有可用工具](https://github.com/github/copilot-cli/issues/407)
**OPEN · 31 👍（本批次最高赞）**  
`PhilippOesch` 的老牌 feature request，期望通过 `/tools` 列出当前会话能力，类似 Claude Code 的体验。31 个赞说明这是大量用户入门时的**真实痛点**——CLI 工具能力对用户而言仍是黑盒。

### 6. [#4103 — 插件市场克隆禁用 Git 凭证助手，破坏私有 HTTPS 仓库](https://github.com/github/copilot-cli/issues/4103)
**OPEN · 3 👍**  
`arnab9211` 指其为 **v1.0.70 的回归**——Azure DevOps 私有 HTTPS 仓库的 marketplace 拉取失败，即便本地手动 `git clone` 可用。直接打击企业/托管部署场景的可扩展性。

### 7. [#1499 — `/delegate` 命令支持 Claude 与 Codex](https://github.com/github/copilot-cli/issues/1499)
**OPEN · 6 👍**  
`Thornfalt` 指出 `/delegate` 默认仅支持 Copilot coding agent，GHE 环境下应允许 Claude/Codex 作为目标。在**多模型企业策略**逐渐普及的当下，这是 subagent 体系的关键扩展点。

### 8. [#4605 — `latest-prerelease` 查找逻辑导致用户卡在 1.0.81-9](https://github.com/github/copilot-cli/issues/4605)
**OPEN · 3 👍**  
`ms-jb` 分析 GitHub API 在 `created_at` 相同时按版本号字符串排序，导致 `-10` 反而排在 `-2` 之后——**更新通道自身存在排序 bug**，让部分 prerelease 用户无法获得本批次的会话恢复/MCP 修复。

### 9. [#4628 — Autopilot 模式 600 秒后台任务超时杀掉已完成子 agent 的父进程](https://github.com/github/copilot-cli/issues/4628)
**OPEN · 新建**  
`vs-li` 发现 background-task 等待计时器从父 agent 首次空闲起算，未在子任务完成时取消，导致整个 CLI 进程被无谓终止。这是 autopilot 工作流稳定性的严重缺陷。

### 10. [#4622 — 支持可配置的用户级 agents/skills/hooks/instructions 发现路径](https://github.com/github/copilot-cli/issues/4622)
**OPEN · 新建**  
`btardif` 建议放开 `%USERPROFILE%\.agents` 等固定路径，使其支持托管/XDG 风格布局。与 #252 的全局指令诉求互补，**代表企业 IT 管理场景的系统性需求**。

---

## 🛠 重要 PR 进展

过去 24 小时内**无 Pull Request 更新**。当前修复与新功能主要通过 prerelease 版本直接合入主干（见上方版本发布），社区贡献路径在此时段相对静默。如需了解持续开放的 PR，可前往 [Copilot CLI Pull Requests 列表](https://github.com/github/copilot-cli/pulls) 查看。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 37 条 Issue 中可以提炼出以下**社区诉求热点**：

| 方向 | 代表 Issue | 趋势 |
|---|---|---|
| **MCP 集成质量** | #4613, #4623, #4588, #4525, #4103 | ⬆️ 急剧上升：token 成本、协议兼容、认证回退集中爆发 |
| **多模型兼容性（尤其 Gemini）** | #4155, #4623 | ⬆️ Gemini 出现"凡 MCP/凡 union 类型即 400"的系统性缺陷 |
| **配置灵活性** | #252, #4622, #4103 | ⬆️ 企业用户对全局/用户级发现路径需求强烈 |
| **TUI 与运行时稳定性** | #4612, #4533, #4628, #4625 | ⬆️ 多 agent 并发、长会话、autopilot 场景集中翻车 |
| **会话恢复与会话管理** | #4629, #4433, #1.0.81-14 | ↗️ 持续被关注，hooks 与 plugin 在 `--resume` 下行为不一致 |
| **发现/导航体验** | #407（/tools）, #4624（VS Code 入口回归） | ↗️ 入门成本与 UX 回退问题 |
| **多 agent 路由** | #1499（Claude/Codex delegate）, #4621（rubber duck 审计） | ↗️ 长尾但高价值，与企业多模型策略同步 |

---

## 💡 开发者关注点

综合 Issue 反馈，社区当前最迫切的痛点可以归纳为：

1. **「MCP 真的贵」**——1.0.80 起不再延迟 schema 注入，#4613 测得空 prompt 也要 354K token，且 #4588 显示只有 Anthropic 模型享受 tool deferral，**多模型用户的边际成本失控**。
2. **「TUI 在关键时刻死掉」**——FileWatch 死循环（#4612）、并行 subagent 导致 UI 失声（#4533）、autopilot 超时误杀父进程（#4628）三连击，使新功能在边缘场景下不可用。
3. **「配置要么没有，要么写死」**——全局指令（#252）、用户级发现路径（#4622）、私有仓库凭证（#4103）三个长期 issue 显示，**CLI 缺少企业可治理的配置层级**。
4. **「Gemini 是二等公民」**——多次 400 报错（#4155、#4623）已构成系统性缺陷，需 SDK/schema 校验层面的修复。
5. **「升级通道自残」**——#4605 揭示 prerelease 查找排序 bug 让修复"送不到"用户手里，影响面被放大。
6. **「能力发现成本高」**——31 赞的 #407 表明，用户连"我现在能用什么工具"都没有一致的查看入口，新人 onboarding 阻力大。

---

*日报基于 github.com/github/copilot-cli 公开数据生成，数据时间窗口：2026-08-26 ~ 2026-08-27。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**报告日期**: 2026-08-27
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日 Kimi Code CLI 仓库整体活跃度较低，未有新版本发布。社区反馈集中在两个方向：一是 **定时任务（cron）在对话进行中触发时会导致已有回复丢失的严重 Bug**，二是 **官方脚本安装的版本与最新版本不一致的疑惑**。同时，一个针对 `run_soul` 嵌套任务取消机制的修复 PR 已提交，展现了项目在稳定性方面的持续投入。

---

## 🚀 版本发布

⚠️ 过去 24 小时内**无新版本发布**，本节省略。建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 🔥 社区热点 Issues

> ⚠️ 注：过去 24 小时仅有 2 条 Issue 更新，远少于通常的 10 条，以下为全部内容。

### 1. [#2620 Cron fire mid-reply swallows the previous assistant reply](https://github.com/MoonshotAI/kimi-cli/issues/2620)
- **作者**: tizerluo | **状态**: OPEN | **👍**: 0
- **重要性**: ⭐⭐⭐⭐⭐
- **为什么重要**: 这是一个**数据丢失类 Bug**——当定时提醒在助手上一条回复尚未被用户阅读时触发，之前的回复会被从可见对话记录中"吞掉"，即使滚动回去或用 `Ctrl+O` 展开也无法恢复。对于依赖 cron 调度与多轮对话的用户来说，这意味着重要对话内容可能永久丢失。
- **社区反应**: 新发布，关注度尚在发酵；但问题描述清晰、复现路径明确，预计会快速吸引维护者关注。

### 2. [#2618 官方脚本安装的最新版本是0.38，这个怎么是1.49](https://github.com/MoonshotAI/kimi-cli/issues/2618)
- **作者**: mawenwu1983 | **状态**: OPEN | **👍**: 0
- **重要性**: ⭐⭐⭐
- **为什么重要**: 用户对**官方安装脚本与仓库版本号差异巨大（0.38 vs 1.49）**感到困惑。这通常暗示着发行渠道不同（如 stable vs dev/nightly）、版本号规则变更，或旧脚本未同步更新——若处理不当，会严重影响新用户的第一印象与信任度。
- **社区反应**: 标题用中文，指向国内用户群；目前 0 评论，但版本号跨度异常容易激起开发者讨论。

---

## 🛠️ 重要 PR 进展

> ⚠️ 注：过去 24 小时仅有 1 条 PR 更新。

### 1. [#2619 fix(soul): cancel nested task on outer cancellation](https://github.com/MoonshotAI/kimi-cli/pull/2619)
- **作者**: koriyoshi2041 | **状态**: OPEN | **👍**: 0
- **修复内容**:
  - 在 `run_soul` 的生命周期清理中纳入初始的 `asyncio.wait()`
  - 当外层协程被取消时，**级联取消并等待**嵌套的 soul/cancel-event 任务
  - 添加回归测试，覆盖"嵌套 soul 任务仍在运行时被取消"的场景
- **关联 Issue**: 修复 #2615
- **重要性**: ⭐⭐⭐⭐
- **评价**: 这是一个典型的 asyncio 协作式取消（cooperative cancellation）健壮性修复。在多任务/嵌套异步上下文中，仅取消外层而遗漏内层会导致**孤儿协程、资源泄漏或悬挂 await**。修复同时补齐了测试，体现良好的工程实践。

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 与 PR 提炼：

| 方向 | 体现 | 趋势强度 |
|---|---|---|
| **稳定性 / 数据完整性** | Issue #2620 反映了 cron 触发与对话上下文的冲突处理缺失 | 🔥 高 |
| **任务调度可靠性** | PR #2619 关注异步任务取消的递归正确性 | 🔥 高 |
| **安装与版本分发一致性** | Issue #2618 揭示多渠道版本号不统一问题 | 🌡️ 中 |
| **新模型/功能集成** | 今日无相关 Issue | ➖ 低 |

**总体观察**: 当日社区话题集中在**运行时可靠性**而非新功能，反映项目已度过快速功能扩张阶段，进入**打磨期**。

---

## 💡 开发者关注点

综合今日 Issue 与 PR，开发者社区的高频痛点可归纳为三点：

1. **🧨 副作用冲突未隔离** —— 后台任务（cron）打断前台交互时，未保留或恢复已有上下文，导致用户感知到"内容被吞"。这是 CLI 类工具的经典陷阱，需要在 UI 层做"非破坏性追加"或在调度层做"等待 idle 再触发"。

2. **🔀 异步生命周期管理复杂** —— PR #2619 揭示嵌套 asyncio 任务取消容易遗漏。这种问题在 LLM agent 类项目（长时间推理 + 多步工具调用）中尤为常见，开发者呼吁更严格的清理顺序约定与测试覆盖。

3. **📦 发行渠道透明度不足** —— 用户对"脚本安装版本 vs GitHub 最新版本"的巨大差异感到迷茫。建议项目方在 README、Release Notes 或 CLI 内 `--version` 输出中**明确标注渠道与发布时间**，减少社区 confusion。

---

## 📎 数据附录

- **仓库**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)
- **报告生成时间**: 2026-08-27
- **统计周期**: 2026-08-26 ~ 2026-08-27（24 小时）
- **采样量**: Issues 2 条 / PRs 1 条 / Releases 0 条

---

*本日报由 AI 助手基于公开 GitHub 数据自动生成，仅供参考。如需订阅特定 Issue/PR 或扩展维度（如贡献者排行、Commit 摘要），请提出反馈。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-27

## 📌 今日速览

今日社区焦点集中在 **Subagent 无限循环** 与 **内存/CPU 异常** 两大长期痛点上，单日新增多条相关 Issue。同时，开发者提交了一批针对 Edit 工具误报、Markdown 缓存中毒、SSE 心跳超时等问题的修复 PR，2.0 版本的子代理（subagent）机制正在加速重构中。

---

## 🚀 版本发布

过去 24 小时内无新 Release。

---

## 🔥 社区热点 Issues

| # | Issue | 关注理由 |
|---|-------|---------|
| [#20695](https://github.com/anomalyco/opencode/issues/20695) | **Memory Megathread（集中跟踪贴）** | 138 评论 / 105 👍，官方集中收集 heap dump 的入口贴，所有内存相关 Bug 的根因排查都汇聚于此。 |
| [#33213](https://github.com/anomalyco/opencode/issues/33213) | **`opencode serve` 内存暴涨 26.8 GiB** | 生产环境复现，JS 堆/Swap 严重泄漏，伴随 WKFastMalloc/JSJITCode 碎片化，重启才可恢复。 |
| [#45442](https://github.com/anomalyco/opencode/issues/45442) | **[2.0] Subagent 50 分钟无限循环 364 次相同 grep** | 背景 `general` 子代理陷入完全相同的工具调用，无循环保护，Token 燃烧不可控——是 2.0 子代理重构的直接驱动力。 |
| [#42657](https://github.com/anomalyco/opencode/issues/42657) | **多 Subagent 下 TUI 严重卡顿（97% CPU）** | 在 Warp/Windows Terminal/WezTerm 多终端复现，渲染线程成为瓶颈，影响多代理工作流体验。 |
| [#44958](https://github.com/anomalyco/opencode/issues/44958) | **OpenCode Go 拒答后界面无响应 / 历史消失** | 上游 HTTP 200 但 UI 既无回复也无错误，会话长时间挂起，订阅用户体验受损。 |
| [#33890](https://github.com/anomalyco/opencode/issues/33890) | **Bun 1.3.14 在 Linux x86_64 上 SIGILL** | 内置 Bun 运行时在 AMD Zen4/AVX-512 主机上随机崩溃，影响 1.17.10/1.17.9 用户。 |
| [#19193](https://github.com/anomalyco/opencode/issues/19193) | **TUI 在任何 Git 仓库目录中无法发送消息** | v1.3.2 上的基础可用性 Bug，影响所有在仓库内启动 TUI 的用户。 |
| [#37314](https://github.com/anomalyco/opencode/issues/37314) | **父会话中止后子会话成孤儿** | Abort 不级联清理 tool-calls，子会话常驻占用资源，与 #42286/#35066 形成同一类系统性问题。 |
| [#37216](https://github.com/anomalyco/opencode/issues/37216) | **TUI 缺乏 i18n 支持** | Desktop/Console 已支持 17+ 语言，唯独终端界面硬编码英文，影响非英语开发者。 |
| [#45456](https://github.com/anomalyco/opencode/issues/45456) | **Web UI 因 `invalid_request_error` 卡死数小时** | 上游 Provider 报错后陷入无限重试且无诊断/恢复路径，凸显错误处理链路需要加固。 |

> 社区反应：内存贴 #20695 已被官方点名作为排查统一入口；#45442 / #43603 / #43673 / #43800 在 24h 内集中爆发，反映 2.0 Subagent 行为的稳定性仍是头号痛点。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容摘要 |
|---|----|--------|
| [#45491](https://github.com/anomalyco/opencode/pull/45491) | `fix(opencode): edit tool 报告模糊匹配为精确成功` | 修复 `edit.txt` 把 fuzzy match 报成 exact success 的问题，关 #34424（修复点 2/3）。 |
| [#45482](https://github.com/anomalyco/opencode/pull/45482) | `fix(task): async subagent 任务诚实回答、一次、依次、停止` | 直接回应 #45442 类循环问题：当子任务存在未完成异步子代理时，运行期只通知一次，并作为尾随请求型 user message，依赖 #43510。 |
| [#45381](https://github.com/anomalyco/opencode/pull/45381) | `refactor(ai): 统一 Provider 错误诊断` | 将 `AIError` 建模为带原因链的包装器，消除重复诊断信息，便于 #45456 一类问题暴露根因。 |
| [#42558](https://github.com/anomalyco/opencode/pull/42558) | `fix(core): 旁路被污染的 markdown 缓存` | 解决 `gray-matter` 默认选项缓存导致 YAML 错误传播到后续解析的问题，关 #42350。 |
| [#43607](https://github.com/anomalyco/opencode/pull/43607) | `fix(provider): 忽略 SSE 注释帧心跳` | `chunkTimeout` 不再被 `: keepalive` 等注释帧重置，长任务可正常超时，关 #43519。 |
| [#45497](https://github.com/anomalyco/opencode/pull/45497) | `fix(app): 防止多行粘贴导致 renderer OOM` | Chromium 1000 行粘贴产生 2001 次 reparse，改为显式 `setValue` 路径，规避堆耗尽。 |
| [#45500](https://github.com/anomalyco/opencode/pull/45500) | `fix(acp): 公告 compact 命令` | 将内置 `/compact` 纳入 ACP `available_commands_update`，避免命令列表缺失。 |
| [#45488](https://github.com/anomalyco/opencode/pull/45488) | `feat(server): 通过 WebSocket RPC 暴露 HTTP API` | 新增 `/api/rpc` 端点 + `@opencode-ai/client/effect/rpc` 客户端，131 个 operation 直接从 HTTP schema 派生。 |
| [#45453](https://github.com/anomalyco/opencode/pull/45453) | `feat(plugin): 允许工具查找前修复调用` | 让插件可在 `execute.before` 中改写 `event.tool`（如拼写错误 `reead`→`read`），解决大量用户侧类循环。 |
| [#45481](https://github.com/anomalyco/opencode/pull/45481) | `feat(core): 以 live capabilities 启动 durable session` | 解耦 durable session 与目录发现的模型/工具/指令配置，让宿主可直接注入能力。 |

---

## 📈 功能需求趋势

1. **Subagent 稳定性与循环保护（最热）**——#45442 / #43603 / #43673 / #43800 / #37314 / #42286 / #35066 形成完整议题群，体现社区对 2.0 多代理机制的强烈关注。
2. **内存与运行时稳定性**——#20695 / #33213 / #33890 / #34226 / #34054 / #33595 持续累积，Bun/JSC 原生崩溃与 JS 堆碎片是主要瓶颈。
3. **TUI/桌面 UI 体验**——#42657（卡顿）、#37216（i18n）、#34146（NFS 噪声）、#34232（IDE 扩展缺少 session 管理）、#45434（新布局多项目难区分）。
4. **多 Provider/模型适配**——#34113（GLM-5.2 图像输入）、#39864（Codex Fast 优先级吞吐未生效）、#34120（推理块退化为乱码）、#45485（Mistral 流式工具调用）。
5. **IDE/桌面集成 & 远程控制**——#34232（IDE 会话管理缺失）、#45437（QR + 移动端 RC，类 Claude Code）。
6. **CodeMode 能力扩展**——#43137 提议把内置工具纳入 CodeMode。

---

## 💡 开发者关注点

- **🛑 "Agent 死循环" 是头号投诉**：相同工具调用反复触发几十到几百次，缺乏 progress / loop detection，开发者被迫手动 abort，同时大量消耗 Token。社区明确要求运行时内置防护。
- **🧠 长会话内存治理**：server 模式 + 长任务下，进程内存可涨至 GB 量级甚至 Swap；官方 #20695 Megathread 是事实上的排查中心。
- **⌨️ TUI 可用性细节**：在 git 仓库内无法发送消息、卡顿、NFS 内核消息污染屏幕等问题，反映终端场景下的边界条件仍需打磨。
- **🌐 多 Provider 一致性**：Codex Fast 速率、GLM-5.2 图像输入、Mistral SDK 流式工具调用、退化推理块——开发者希望 OpenCode 在更多 Provider 上提供"开箱即用"体验，而不是逐个手填 workaround。
- **🔌 扩展点与远程控制**：插件修复 hook（#45453）、CodeMode 扩展（#43137）、移动端 RC（#45437）共同指向一个方向——社区希望 OpenCode 成为可被深度定制和远程操作的代理运行时。
- **🧰 错误链路透明度**：#45456 等案例显示上游 Provider 错误易导致"卡死"状态而非清晰报错，统一错误模型（#45381）正是社区呼吁的解药。

---

*日报由 OpenCode 社区动态监控生成 · 数据源：github.com/anomalyco/opencode · 报告日期：2026-08-27*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-27

> 数据源：github.com/earendil-works/pi（前身 badlogic/pi-mono）
> 统计窗口：过去 24 小时

---

## 📌 今日速览

社区活动高度集中在 **TUI 渲染回归**（v0.84.3 后多端出现软换行、单词独占行等问题）和 **Windows PowerShell 工具的连环故障**。同时 **Z.AI GLM-5.3 系列** 与 **NVIDIA InferenceHub** 的内置接入进入合并节奏，模型生态继续扩张。热度最高的仍是长期未解决的 **#6879 自动压缩失效导致 100% 上下文溢出**（24 条评论、19 个 👍），仍是社区最关心的稳定性痛点。

---

##  版本发布

无新版本发布。最近一次发版为 **v0.84.3**，但社区已报告多项针对该版本的回归问题（见下文）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 关键要点 |
|---|---|---|---|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction 在 context > 100% 后不触发，直到 API 拒绝 | 24 评论 / 19 👍 | **长期 bug**。GPT-5.6-sol 长会话中 footer 已越过压缩阈值仍不动作，最终在 373k tokens 被 API 拒绝。建议每次 agentic turn 后检查，已被标记 inprogress |
| [#8029](https://github.com/earendil-works/pi/issues/8029) | 大 buffer 下方向键移动极慢 | 9 评论 | 7k 行的 prompt 中按一次 ↑ 耗时 1650ms，性能呈线性劣化，急需修复 |
| [#8582](https://github.com/earendil-works/pi/issues/8582) | Windows powershell 工具在交互模式下回退到 5.1 | 7 评论 | 已关闭。交互模式未走 pwsh，但 `-p` 模式正确，问题已定位修复 |
| [#8610](https://github.com/earendil-works/pi/issues/8610) | v0.84.3 通过代理调 google-vertex 报 `HttpsProxyAgent is not a constructor` | 4 评论 | **v0.84.3 回归**，bundle 代码拆分后丢失 polyfill |
| [#7724](https://github.com/earendil-works/pi/issues/7724) | 冷启动恢复重放被 live recovery 移除的溢出消息 | 4 评论 | 重开 session 后历史中重新出现已删除的截断回复 |
| [#7053](https://github.com/earendil-works/pi/issues/7053) | 并行工具批处理中兄弟节点阻塞导致结果丢失 | 4 评论 | `executeToolCallsParallel` 的 `Promise.all` 仍统一落盘 `toolResult`，#3503 的修复只覆盖 UI 层 |
| [#8620](https://github.com/earendil-works/pi/issues/8620) | v0.84.3 全局扩展加载失败 `Cannot find module '@earendil-works/pi-coding-agent'` | 4 评论 | 严重影响升级用户体验，bundled CLI 路径问题 |
| [#8675](https://github.com/earendil-works/pi/issues/8675) | TUI 文本每词独占一行（WSL2 / Windows Terminal） | 2 评论 / 2 👍 | v0.84.3 在特定终端下复现，#8621 auto-closed 后被重新开起 |
| [#8688](https://github.com/earendil-works/pi/issues/8688) | Windows powershell 工具在命令前粘上 `.` | 3 评论 | UTF-8 前缀末尾的 `.` 被粘到首词，被解析为成员访问，关闭前需回归 |
| [#8706](https://github.com/earendil-works/pi/issues/8706) | zai thinking handler 对强制思考模型在 `off` 时仍发送 `disabled` | 2 评论 | GLM-5.3 / 5.3-flash 思考内容泄漏到输出，已被 PR #8707 修复 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 状态 | 内容 |
|---|---|---|
| [#8690](https://github.com/earendil-works/pi/pull/8690) feat(ai): GLM-5.3 Flash 入 Z.AI catalogs | ✅ Merged | 1M context / 131k 输出，加入回归测试 |
| [#7602](https://github.com/earendil-works/pi/pull/7602) feat(coding-agent): 可配置 summarization 模型 |  Open | 压缩与分支摘要可独立指定模型与思考级别，关闭 #7553 |
| [#8708](https://github.com/earendil-works/pi/pull/8708) fix: 不走 GitHub API 解析 fd/rg 版本 | 🟡 Open | 解决共享 NAT 60 次/小时的匿名 API 配额限制，修复 #8594 |
| [#8707](https://github.com/earendil-works/pi/pull/8707) fix(ai): 强制思考模型 zai thinking 修正 | ✅ Merged | `off === null` 模型保持 thinking 开启，避免 reasoning 泄漏 |
| [#8704](https://github.com/earendil-works/pi/pull/8704) fix(agent): 未处理 rejection 结束 EventStream | ✅ Merged | 修复 #8705，避免事件流悬挂 |
| [#8699](https://github.com/earendil-works/pi/pull/8699) fix(tui): 移除 pi-tui 对 coding-agent config 的读取 | 🟡 Open | 解耦分层，修复 #8698 |
| [#8671](https://github.com/earendil-works/pi/pull/8671) fix(ai): 流式 `thinkingSignature` 只序列化一次 | ✅ Merged | 修复 #8648 的 O(n²) 累积卡死 loop |
| [#8664](https://github.com/earendil-works/pi/pull/8664) feat(ai): NVIDIA InferenceHub 升级为内置 provider | ✅ Merged | 一类接入 Claude/GPT/Gemini/DeepSeek/Llama/NVIDIA 全家桶 |
| [#8694](https://github.com/earendil-works/pi/pull/8694) fix(ai): DeepSeek V4 Pro 开放 low 思考档 | ✅ Merged | 与 deepseek-v4-flash 行为对齐 |
| [#8678](https://github.com/earendil-works/pi/pull/8678) feat(tui): 编辑已选中的 prompt 文本 | 🟡 Open | 鼠标选择后 Backspace 可删除所选内容，键盘鼠标操作一致 |

> 另：#8674 修复软换行渲染、#8676 修复路径双击选择、#8696 兼容 Apple Terminal Option+arrow、#8547 点击移动光标、#8669 优化 autocomplete 排序、#8346 修复 session JSONL 尾部损坏，均已合并。

---

## 📈 功能需求趋势

从今日 50 条 Issue 提炼出的高密度方向：

1. **TUI 渲染质量** — 软换行、单字占行、URL/PATH 双击分段、markdown 段落空隙是反馈最集中的方向，与 v0.84.3 升级直接相关。
2. **上下文/压缩可靠性** — #6879 长期高居不下，社区对长会话稳定性诉求强烈；#7724 又揭示冷启动恢复路径有缺陷。
3. **新模型内置接入** — Z.AI GLM-5.3 系列（#8690、#8706、#8707）、DeepSeek V4 Pro low 档（#8694）、qwen3.8-flash（#8709）、NVIDIA InferenceHub（#8664）并行推进，模型生态版图快速扩张。
4. **Windows 工具链体验** — PowerShell 工具交互模式、前缀 `.`、ExtensionAPI.exec 启动 .cmd、npm 全局 CLI 静默 ENOENT（#8715）接连出现，Windows 体验仍是短板。
5. **代理 / 网络韧性** — #8610（vertex proxy 失败）、#8708（GitHub API 配额）反映企业网络环境对安装与运行链路的影响被低估。
6. **扩展 API 一致性** — #7824、#8712、#8391 共同指向扩展对运行时钩子（turn 终止、cwd、system prompt）的可编程能力不足，社区要求更稳定的扩展点而非 prototype hack。
7. **会话与状态管理** — #7724、#8269、#8345/8346、#6415 关注 session 的 cwd 切换、JSONL 完整性、changelog 字段归属等持久化细节。
8. **性能热点** — #8029（大 buffer 慢）、#8648 / #8711（reasoning_details O(n²)）、#7053（并行工具批处理）三个不同模块的性能退化同时爆发。

---

## 👨‍💻 开发者关注点

- **升级后回归（v0.84.3）**：多个高分 issue（#8610、#8620、#8675、#8688、#8715）都集中在这一版本，说明发布前的跨平台、跨终端、扩展生态回归测试覆盖不足。
- **大上下文与代理稳定性**：长 agentic loop（持续 2 小时）下，压缩、错误恢复、thinking 累积三者都出现相互耦合的问题，开发者期望一个**统一的会话健康监控层**。
- **Windows 体验**从「能用」到「好用」的差距集中体现在：shell 工具行为不一致、扩展 exec 静默失败、bundled CLI 模块解析失败。
- **扩展机制边界**：社区希望官方 API 显式提供 turn 终止、cwd 重绑定、system prompt 注入等原语，不再依赖 prototype monkey-patch。
- **模型推理细节**：reasoning/signature 的累积与重发策略（#8648、#8711、#8714）成为新热点，反映随着 reasoning 模型规模化，**reasoning 生命周期管理**正在变成新的正确性/性能瓶颈。
- **企业网络容错**：共享 IP 下的 GitHub API 配额与代理环境被纳入 issue 视野，开发者希望 pi 在受限网络下也能完成 bootstrap。

---

*日报基于过去 24 小时 GitHub 公开数据自动汇总；不构成任何投资或商业建议。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-27**

---

## 📌 今日速览

今天 Qwen Code 发布 **v0.22.2**，最大变化是将持续化的 Node REPL 重构为独立的 MCP 服务器（破坏性变更）。社区重点关注三个方向：**Agent Team 多代理生命周期审计**（已识别 5 个并发竞态问题）、**v0.22.1 引入的 `permissions.allow` 语义变化**（P1 文档未跟进导致用户踩坑）、以及 **CI 基础设施的紧迫问题**（merge queue 自 7 月起未运行，main 分支无 required checks）。

---

## 🚀 版本发布

### v0.22.2
- **破坏性变更**：将持久化 Node REPL 重构为独立 MCP 服务器（[#9499](https://github.com/QwenLM/qwen-code/pull/9499)），由 @LaZzyMan 提交
- **桌面端**：Qwen Code Desktop v0.2.2 同步发布
- **驱动层**：cua-driver-rs v0.20.1 跨平台预编译二进制发布
  - macOS：已签名 + 公证的 universal binary（含 `QwenCuaDriver.app`）
  - Linux/Windows：未签名（glibc 2.31 最低要求）
  - Node.js：通过 `@qwen-co` 工作流发布

---

## 🔥 社区热点 Issues

### 1. [Issue #10254] 🚨 P1：merge queue 自 7 月起未运行，main 分支无 required checks
- **重要性**：这是今天优先级最高的 CI 基础设施问题——语义冲突的 PR 可能静默合入 main 分支
- **状态**：`status/ready-for-human`
- **链接**：https://github.com/QwenLM/qwen-code/issues/10254

### 2. [Issue #10218] 🚨 P1：`permissions.allow` 语义变化，0.22.1 起未覆盖工具直接禁用
- **重要性**：行为从"自动批准列表"变为"注册表白名单"，未覆盖的工具连询问都不会出现，文档未同步
- **用户反馈**：4 条评论，多位升级用户在 Windows npm 全局版踩坑
- **链接**：https://github.com/QwenLM/qwen-code/issues/10218

### 3. [Issue #10227] P2：自定义模型供应商无法对话（Moonshot 兼容性问题）
- **重要性**：错误 `tools.function.parameters is not a valid moonshot flavored json schema`，影响使用 Moonshot/Kimi 的开发者
- **链接**：https://github.com/QwenLM/qwen-code/issues/10227

### 4. [Issue #8662] TUI 渲染层从 ink 迁移到 OpenTUI（长期跟踪）
- **重要性**：当前 ink 7 + React 19 的 TUI 存在结构性问题（闪烁、补丁 1037 行），已有 9 条评论持续讨论
- **链接**：https://github.com/QwenLM/qwen-code/issues/8662

### 5. [Issue #10074] P2：Agent Team 生命周期审计——5 个并发竞态和清理风险
- **重要性**：作为父 issue，已拆分为 #10207、#10208、#10209、#10210、#10211 五个独立子任务
- **链接**：https://github.com/QwenLM/qwen-code/issues/10074

### 6. [Issue #10242] P2：E2E 在 main 上间歇性失败，无法访问 OPENAI_BASE_URL（阿里云北京）
- **重要性**：网络可达性问题而非代码回归，GitHub-hosted runner 不稳定
- **链接**：https://github.com/QwenLM/qwen-code/issues/10242

### 7. [Issue #10247] P2：Agent Team 稳定性审计跟进与体验 backlog
- **重要性**：统一跟踪 Agent Team 质量工作的入口点，整合分散的问题
- **链接**：https://github.com/QwenLM/qwen-code/issues/10247

### 8. [Issue #10194] P2：`qwen3.8-flash` 被错误识别为 text-only，`alibabaStandard` preset 缺失模态元数据
- **重要性**：图片/PDF 内联媒体无法作为像素传递，影响多模态能力使用
- **链接**：https://github.com/QwenLM/qwen-code/issues/10194

### 9. [Issue #10228] P2：`qwen serve` 加载 MCP 后 Web UI 无法对话
- **重要性**：输入框无法聚焦、对话按钮不可用，严重影响 Web Shell 体验
- **链接**：https://github.com/QwenLM/qwen-code/issues/10228

### 10. [Issue #10248] P2：Web Shell 中 DingTalk channel 消息错显示在 Tasks 而非 Channels
- **重要性**：`qwen serve` + 钉钉集成的核心路由问题
- **链接**：https://github.com/QwenLM/qwen-code/issues/10248

---

## 🔧 重要 PR 进展

### 1. [PR #10237] `fix(core)`: 防止重复任务所有者分派
- **内容**：拒绝 leader 将已进行中的任务分配给其他 teammate，修复 #10207 的竞态问题
- **作者**：@AaronZ345
- **链接**：https://github.com/QwenLM/qwen-code/pull/10237

### 2. [PR #10223] `fix(core)`: 移除并发 spawn 失败后的 ghost member
- **内容**：在 `spawnTeammate()` 的 catch 块中添加补偿性 `writeTeamFile()`，确保持久化与内存状态一致
- **作者**：@yiliang114
- **链接**：https://github.com/QwenLM/qwen-code/pull/10223

### 3. [PR #10195] `fix(core)`: 为 `qwen3.8-flash` 和 `qwen3.8-plus` 添加模态元数据
- **内容**：将 `qwen3.8-flash/plus` 加入 `MODALITY_PATTERNS`（`image: true, video: true`），同时为 `alibabaStandard` preset 中 `qwen3.6-plus/3.7-plus` 补充模态元数据
- **链接**：https://github.com/QwenLM/qwen-code/pull/10195

### 4. [PR #10080] `fix(core)`: 允许空的 core 工具 allowlist
- **内容**：使 `tools.core: []` 显式禁用所有注册工具；省略则保持原有无限制行为
- **链接**：https://github.com/QwenLM/qwen-code/pull/10080

### 5. [PR #10007] `fix(core)`: 在 `O_NOFOLLOW` 缺失平台上保持无跟随读取保护
- **内容**：跨平台 `openNoFollow`/`openSyncNoFollow` 帮助函数，统一 symlink 读取安全语义
- **链接**：https://github.com/QwenLM/qwen-code/pull/10007

### 6. [PR #9546] `feat(serve)`: 暴露 Workflow 任务与控制
- **内容**：通过守护进程将 Workflow 执行作为现有会话任务契约的显式 opt-in 扩展，可检查/控制活动运行
- **作者**：@qqqys
- **链接**：https://github.com/QwenLM/qwen-code/pull/9546

### 7. [PR #10171] `feat(goal)`: 让模型提出 Goal，用户在对话框中确认
- **内容**：新增 `propose_goal` 核心工具，模型提出目标 → 用户审批对话框 → 确认后设置（与 `/goal set` 等效）
- **作者**：@qqqys
- **链接**：https://github.com/QwenLM/qwen-code/pull/10171

### 8. [PR #10198] `feat(channels)`: 添加 owner-scoped 命名会话
- **内容**：守护进程管理的 Channels 新增命名任务目录，`sessionScope: "user"` + `multiSession: true` 下，每个发送者可创建最多 8 个命名任务
- **作者**：@doudouOUC
- **链接**：https://github.com/QwenLM/qwen-code/pull/10198

### 9. [PR #10085] `ci`: Linux E2E 分片迁移到持久化 runner 池
- **内容**：将 `e2e-test-linux` 路由到持久化 `ecs-qwen` 池，配套仓库守卫与 kill-switch
- **作者**：@wenshao
- **链接**：https://github.com/QwenLM/qwen-code/pull/10085

### 10. [PR #10119] `feat(review)`: 将 Step 3A fan-out 输出为生成的 workflow 脚本
- **内容**：`qwen review emit-workflow` 子命令，将 Review Step 3A 完整 agent fan-out 写成可运行脚本
- **作者**：@qqqys
- **链接**：https://github.com/QwenLM/qwen-code/pull/10119

---

## 📈 功能需求趋势

从近期 Issues 提炼，社区最关注的方向：

1. **🔌 第三方模型供应商兼容性**（#10227, #889）—— Moonshot、OpenAI Response API（gpt-5-codex）等
2. **🤖 Agent Team 多代理稳定性**（#10074, #10207-10211, #10247）—— 并发竞态、清理失败、ghost member 是当前焦点
3. **🖥️ Web Shell / `qwen serve` 体验**（#10228, #10246, #10248, #10184）—— 重命名卡死、MCP 加载后崩溃、channel 路由错误
4. **🧩 终端 UI 现代化**（#8662）—— 从 ink 迁移到 OpenTUI 的长期跟踪
5. **📦 模型能力对齐**（#10194）—— `qwen3.8-flash/plus` 多模态元数据缺失
6. **⚙️ 配置与权限语义**（#10218, #10080）—— `permissions.allow` 与 `tools.core` allowlist 的边界定义

---

## 👨‍💻 开发者关注点

### 痛点
- **CI 基础设施失修**：`ci.yml` 设计前提（merge queue 验证）已不再成立，自 2026-07-02 起无 `merge_group` 运行；语义冲突 PR 可能静默合并（#10254）
- **破坏性变更文档缺失**：v0.22.1 的 `permissions.allow` 语义变化未在 changelog/文档中说明，用户升级即踩坑（#10218）
- **Web Shell 错误恢复差**：启动失败后白屏无错误信息、无恢复路径（见 PR #10215）

### 高频需求
1. **Agent Team 生命周期**一致性（持久化与内存状态对齐）
2. **多模型供应商** schema 兼容性（Moonshot flavored JSON schema 等）
3. **`qwen serve` 用户体验**改进（重命名、模型切换、channel 路由）
4. **CI runner 稳定性**（ECS 持久化池替代 GitHub-hosted runner 解决阿里云北京可达性问题）
5. **Session 分支与 Git worktree 隔离**（#8271 长期 feature request）
6. **子代理 ACP 执行适配器**（#10219 实验性 stdio 适配器提议）

---

*数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) GitHub 仓库（截至 2026-08-27）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-27**

---

## 📌 今日速览

今日社区围绕 **多会话隔离、MCP 安全边界与工具协议归一化** 三大方向密集推进。关键 bug #5630（运行时存储单 owner 锁阻断同机多实例）已被 #5638 修复并合入；同时 h3c-hexin 持续推动路由层工具投影统一，Hmbown 则启动企业级发布就绪 PR #5628 与 `--tailscale` 远程访问能力。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues（Top 8）

> 过去 24 小时共 8 条 Issue 更新，已全数收录。

### 1. [#5586 [OPEN] v0.9.12 巨型文件拆分](https://github.com/Hmbown/CodeWhale/issues/5586)
- **作者**：Hmbown | **5 评论**
- 当前 `lib.rs` 18.7k、`config.rs` 12.3k、`client.rs` 11.1k、`runtime_threads.rs` 9.3k 行；维护者亲自主推的 0.9.12 重构 lane。
- **重要性**：长期阻碍 PR review 与新贡献者入门，是社区最关心的代码健康议题之一。

### 2. [#5533 [OPEN] 每会话控制 socket：supervised 操作的接口面](https://github.com/Hmbown/CodeWhale/issues/5533)
- **作者**：M-Maciej | **4 评论**
- 提出 per-session 控制 socket（message/interrupt/relaunch/status）与 `RuntimeBackendKind::External`。
- **重要性**：将 Codewhale 嵌入 CI、terminal multiplexer、自动化 harness 的关键能力补齐。

### 3. [#5620 [OPEN] BUG：上下文压力告警瞬时消失，agent 未主动响应](https://github.com/Hmbown/CodeWhale/issues/5620)
- **作者**：ronohara | **4 评论**
- 中等级别安全信号失效：warning/critical 信号被冲入滚动 turn metadata 而非 sticky 状态。
- **重要性**：影响长会话下的上下文健康；显示层修复切片已被 #5629 合入。

### 4. [#5630 [CLOSED] BUG 0.9.12：runtime store owner 锁](https://github.com/Hmbown/CodeWhale/issues/5630)
- **作者**：M-Maciej | **1 评论**
- `80f026e7c` 引入的机器级单 owner 锁阻断同机第二个 Codewhale 实例。
- **重要性**：由 #5638（同 #5634）修复合入，root 改为 per-interactive session。

### 5. [#5625 [OPEN] 增强：非阻塞「pending user input」peek 工具](https://github.com/Hmbown/CodeWhale/issues/5625)
- **作者**：ronohara | **1 评论**
- 在 turn 中途允许 agent 轻量探查用户待输入内容，强化 human-in-the-loop 协作。
- **重要性**：与 #5533 一同构建"被监管式 agent"的控制面。

### 6. [#5637 [OPEN] 设计：将 MCP secret provider 限定于拥有者 runtime](https://github.com/Hmbown/CodeWhale/issues/5637)
- **作者**：h3c-hexin | **0 评论**
- 嵌入式 host 通过修改 process environment 注入凭据存在线程可见性与生命周期的安全性问题。
- **重要性**：MCP 安全模型的关键设计决策，与 PR #5632 的"retire Keychain"路线互为呼应。

### 7. [#5633 [OPEN] 设计：请求分发前统一路由特定 tool projection](https://github.com/Hmbown/CodeWhale/issues/5633)
- **作者**：h3c-hexin | **0 评论**
- 将 provider 间的 tool schema 兼容性决策从各 request builder 集中到分发前。
- **重要性**：与 PR #5636（Moonshot per-tool degrade）属于同一重构主线。

### 8. [#5627 [CLOSED] 将 Xquik 加入 MCP 推荐](https://github.com/Hmbown/CodeWhale/issues/5627)
- **作者**：kriptoburak | **2 评论**
- 通用命令可连，但 `/mcp add recommended xquik` 报 unknown-ID。
- **重要性**：MCP 推荐发现面补齐；已关闭。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#5632 [OPEN] 单一 worker 系统；下线 Keychain 产品路径](https://github.com/Hmbown/CodeWhale/pull/5632)
- **作者**：Hmbown
- Fleet/sub-agent 统一为"一个 worker"：`spawn(prompt)` 继承父会话，role 仅作标签、无权限矩阵。`CODEWHALE_SECRET_BACKEND` 退化为 no-op，凭据改走 `~/.codewhale/secrets/`。
- **影响**：架构层面的简化，与 #5637 的 MCP secret 范围问题在策略上对齐。

### 2. [#5628 [OPEN] 企业级发布就绪](https://github.com/Hmbown/CodeWhale/pull/5628)
- **作者**：Hmbown
- 关闭 #5585、#5617，新增 `docs/ENTERPRISE.md`（中英文）作为运维/安全评审包；与 Crusoe/Composio/Aperture lane 隔离。
- **影响**：本周最大跨度 PR，覆盖部署、安全与合规文档。

### 3. [#5638 [CLOSED] fix(runtime)：thread store 按会话隔离 (#5630)](https://github.com/Hmbown/CodeWhale/pull/5638)
- **作者**：Hmbown
- 默认 root 改为 `$CODEWHALE_HOME/sessions/<id>/runtime`；`CODEWHALE_RUNTIME_DIR` 仍可强制共享。`RuntimeProcessOwnerLock` 保留互斥语义。
- **影响**：直接解锁同机多实例；#5634 是同期合并的等价修复。

### 4. [#5635 [OPEN] feat(web)：为 codewhale web 嵌入 tsnet 支持 --tailscale](https://github.com/Hmbown/CodeWhale/pull/5635)
- **作者**：Hmbown
- 默认 `codewhale web` 仍仅 loopback；新增 `--tailscale`（要求 `--web`），clap `requires` + 运行时校验双保险。
- **影响**：从 PR 描述看，与 #5628 企业发布主线的远程访问能力配套。

### 5. [#5631 [OPEN] feat(models)：OpenRouter qwen3.8-flash (1M, 已标价)](https://github.com/Hmbown/CodeWhale/pull/5631)
- **作者**：Hmbown
- 以 1M 上下文 / 131K 输出 / 多模态输入作为一等目录项入册；**走 models.dev 持久 list rates 而非 Token Plan flash id**。
- **影响**：长上下文场景的可选廉价档；不臆造新模型 id。

### 6. [#5626 [OPEN] feat(runtime-api)：每线程 usage 端点 + 会话成本持久化](https://github.com/Hmbown/CodeWhale/pull/5626)
- **作者**：gaord
- 新增 `GET /v1/threads/{id}/usage`，基于 `RuntimeThreadManager::aggregate_usage_for_thread`，与 `/v1/usage` 复用同一累加链路。
- **影响**：GUI 会话成本视图不再重复造客户端价目表。

### 7. [#5629 [CLOSED] fix(tui)：持久化上下文压力告警](https://github.com/Hmbown/CodeWhale/pull/5629)
- **作者**：wuisabel-gif
- 实现 #5620 已批准的显示层切片：warning/high/critical 进入 sticky 状态栏，跟随 turn 更新。
- **影响**：与 #5624 一起构成"会话健康可观测性"双交付。

### 8. [#5636 [OPEN] fix(tui)：按请求降级不兼容的 Moonshot 工具](https://github.com/Hmbown/CodeWhale/pull/5636)
- **作者**：h3c-hexin
- Moonshot MFJS 兼容失败按 tool 粒度降级；若全无兼容工具则省略 `tools`/`tool_choice`；命名 `tool_choice` 若指向被省略工具则本地拒绝并附诊断。
- **影响**：与 #5633 设计主线一致，从 TUI 端先落地。

### 9. [#5639 [OPEN] fix(web)：将营销页与法务 404 替换为诚实页面](https://github.com/Hmbown/CodeWhale/pull/5639)
- **作者**：Hmbown
- `/en/pricing` / `/en/legal/{terms,privacy}` / `/en/{privacy,terms}` 落地，托管 Member 在计费休眠期不展示购买按钮。
- **影响**：合规与品牌一致性，与 #5628 同向。

> 其余值得关注的合入 PR：#5624（live session token totals）、#5622（Kimi Code k3-256k 入册）、#5623（post-compaction input tokens 上报）、#5608（focused transcript `y/Y/Enter` 操作）、#5621（edit-last-turn 边界权威化）、#5619（@wuisabel-gif 循环 PR 权限）、#5387 / #5537（依赖升级，已合入）。

---

## 📈 功能需求趋势

从全部 Issues 提炼，当前社区最关注的 6 类方向：

1. **多会话 / 多实例运行时隔离** — #5630 → #5638 已落地，但围绕 owner lock、session-scoped store 仍有余波。
2. **MCP 生态扩张与安全** — 推荐目录补齐（#5627）、凭据范围限定（#5637）、统一接入路径。
3. **Provider 路由与工具投影归一化** — #5633（设计）+ #5636（Moonshot per-tool degrade），形成可持续重构主线。
4. **会话成本与上下文可观测性** — #5626（per-thread 端点）、#5624（live token totals）、#5620/5629（context pressure sticky）。
5. **Supervised / Human-in-the-Loop 操作面** — #5533（per-session control socket）、#5625（pending user input peek）。
6. **新模型与会员档支持** — OpenRouter `qwen3.8-flash`（#5631）、Kimi `k3-256k`（#5622），并明确"已标价"约束与会员上下文 override 的边界。

---

## 🧑‍💻 开发者关注点

- **代码健康度**是高频痛点：#5586 自报的 10k+ 行巨型文件使 PR review 与 onboarding 成本居高不下，是 0.9.12 重构 lane 的根本动因。
- **同机多进程可用性**：#5630 直接反映开发者希望在同一台机器并行运行多个 Codewhale 的强烈诉求（本地开发 + CI、worktree 等场景），修复采用"per-session default + 环境变量显式覆盖"的保守模式。
- **provider 兼容性的「优雅降级」**：开发者不愿因单一 schema 不匹配就放弃整次请求，#5636 的 per-tool degrade 与 #5633 的统一投影设计就是这种思路的落地。
- **凭据生命周期与 secret 范围**：#5637 提出进程环境注入凭据的线程可见性问题，呼应 #5632 对 Keychain/OS-keyring 路径的弃用，社区在收敛"secret 由谁持有、按什么 scope 暴露"的策略。
- **agent 安全信号的持久化**：#5620 与 #5629 闭环，开发者要求 sticky status 而非 scroll-by，让 warning/critical 真正发挥"风险提示"作用。
- **企业/合规就绪**：#5628 一次性补齐运维/安全文档、`--tailscale` 远程访问、诚实法务页，开发者普遍关心"能否真正进入企业生产环境"的最后一公里。

---

*日报生成时间：2026-08-27 · 数据范围：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*