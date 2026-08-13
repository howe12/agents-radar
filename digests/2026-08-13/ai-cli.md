# AI CLI 工具社区动态日报 2026-08-13

> 生成时间: 2026-08-13 01:22 UTC | 覆盖工具: 9 个

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
**日期：2026-08-13 ｜ 覆盖工具：9 款**

---

## 一、生态全景

当前主流 AI CLI 工具已进入**多代理化与服务化并行的中期阶段**：头部工具（Claude Code、OpenAI Codex、GitHub Copilot CLI）凭借 IDE 集成与企业级渗透保持高活跃度，但 Windows 桌面端稳定性、Prompt Cache 失效、子代理"睡眠/活跃"状态不可观测等深水区问题集中暴露；中等体量工具（Gemini CLI、OpenCode、Pi、Qwen Code）在新模型接入、长会话压缩、跨会话记忆等基础设施上密集发力；Kimi Code CLI 与 DeepSeek TUI/CodeWhale 则代表**长尾创新力量**——前者单点功能请求沉淀 5 个月仍在推动路线图，后者通过"Harvest"机制重基线合入社区 PR、构建开放治理样板。整体看，**"协议成熟（MCP/ACP）"、"代理可观测性"、"成本可见性"** 正在取代纯功能堆叠，成为新一轮竞争的真正主战场。

---

## 二、各工具活跃度对比

> 注：表格"Issues/PRs 列出数"为日报中精选呈现的 Top 项；如有总更新数将单独标注。

| 工具 | 版本发布 | 精选 Issues | 精选 PRs | 总更新量 | 备注 |
|---|---|---|---|---|---|
| **Claude Code** | v2.1.229 | 10 | 5 | — | 远程/自托管/桌面端三条线齐进 |
| **OpenAI Codex** | rust-v0.148.0-alpha.9 | 10 | 10 | — | copyberry[bot] 高频合并基础设施类 PR |
| **Gemini CLI** | v0.56.0-nightly | 10 | 13 | 50+ 活跃 Issue | 安全修复占 PR 主流 |
| **GitHub Copilot CLI** | — | 10 | 1 | **43 条 Issue 更新** | 当日仓库活跃度最高 |
| **Kimi Code CLI** | — | 1 | 2 | 极低 | 仅 1 条 Issue + 2 条 PR |
| **OpenCode** | v1.18.17、v1.18.18 | 10 | 10 | — | 双补丁版本迭代 |
| **Pi** | — | 10 | 14 | — | 多 provider 接入 PR最密集 |
| **Qwen Code** | desktop-v0.2.0、v0.2.1 | 10 | 10 | — | Desktop + 守护进程双向发力 |
| **DeepSeek TUI/CodeWhale** | v0.9.6 | 10 | 17 | **41 条 Issue 更新** | 品牌切换 + Harvest 机制亮点 |

**活跃度梯度**：GitHub Copilot CLI（43 Issue 更新）≈ DeepSeek TUI（41）> Gemini CLI（50+ 活跃）> OpenAI Codex ≈ Pi ≈ OpenCode ≈ Qwen Code > Claude Code > Kimi Code CLI。

---

## 三、共同关注的功能方向

### 1. 多代理/子代理可观测性与可靠性
- **Claude Code**：#54393（12 类多代理协调 Bug 复盘）、#86082（agent 视图无法区分睡眠/活跃）
- **Gemini CLI**：#22323（subagent 误报成功）、#21409（Generalist Agent 挂起 1 小时）
- **Qwen Code**：#8097（后台 Agent 重复工作、send_message 失效）
- **DeepSeek TUI**：#5325（子代理持有 shell 完成事件污染父流）
- **GitHub Copilot CLI**：#3565、#4432、#4462（子代理模型被静默降级）

> **共性诉求**：自主运行的代理需要明确的"运行/等待/睡眠/完成"状态指示，事件流不应互相污染。

### 2. 跨会话记忆与上下文持久化
- **Kimi Code CLI**：#1283（5 个月持续 36 条评论，呼声最高）
- **Gemini CLI**：#26522（Auto Memory 反复重试）、#26525（脱敏/日志）
- **Qwen Code**：#7040（auto-memory recall 时序/质量/遥测 RFC）
- **Claude Code**：#81835、#84965（跨设备/跨会话连续性）

> 这是**最一致的长周期需求**——所有主流工具都被要求超越"一次性 CLI 助手"形态。

### 3. Windows 桌面端稳定性
- **Claude Code**：#81698（GPU 崩溃）、#85199（需 Repair）、#84951、#85905
- **OpenAI Codex**：#26990（掉电数据损坏）、#25178（Computer Use 截图）、#37398（5s 固定超时）
- **GitHub Copilot CLI**：#4328（WSL2 Ctrl+H 误判）、#4463（socket 10013）
- **Pi**：#7730（Mac 长会话 CPU 50%-110%）

> Electron/桌面栈的 fsync、WAL、GPU 进程治理已成系统性议题。

### 4. MCP 协议成熟度
- **Claude Code**：#72239、#86023（MCP Audience 标注与跨平台行为对齐）
- **GitHub Copilot CLI**：#1305（CIMD 支持，单日 👍 35 最高票）、#4346、#4461、#4464、#4466
- **OpenCode**：#33027（MCP 工具连接成功但未暴露给 agent）、#40111
- **Gemini CLI**：#28786、#28787、#28794（MCP 配置损坏导致 fail-open 安全漏洞）

> **安全 + 鉴权 + 可观测性**是 MCP 进入"生产放心接入"阶段的三道门槛。

### 5. 成本可观测性 / Prompt Cache 透明化
- **Claude Code**：#86244、#78720（auto-update、`git status` 触发整段缓存重建）
- **OpenAI Codex**：#38281、#38282（per-thread credits/USD 在 TUI `/status` 与终端标题可见，已合并）
- **OpenCode**：#42202（per-session budget limit + TUI 侧栏小部件，PR 阶段）

### 6. TUI/终端协议兼容性
- **Claude Code**：#75899（左方向键误触）、#71700（Kitty 协议白名单）
- **OpenAI Codex**：#31553（IDE Context 反复回归）
- **Pi**：#7730（Mac CPU）、#8029（7000 行 buffer 单键 1650ms）
- **Qwen Code**：#8562（tmux 闪屏）、#8985（滚动条图标抖动）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 远程/自托管、多代理协作、生态扩展 | 企业 + 重度远程用户 | Remote Control + Hook 体系 + 插件生态 |
| **OpenAI Codex** | 线程/会话编排、扩展 IDE、Computer Use | VS Code 重度用户、企业 | Rust 核心 + 线程用量基础设施 + app-server 协议 |
| **Gemini CLI** | 模型生态扩张（Gemini 3.6 Flash 等）、eval 工具链 | 评估工程师、研究型用户 | 夜间构建 + 行为评估用例（76 个）+ 安全优先 |
| **GitHub Copilot CLI** | MCP 标准化、子代理多模型路由 | GitHub Enterprise 订阅者 | MCP 协议深度集成 + subagent 多模型调度 |
| **Kimi Code CLI** | 长上下文会话、web 模式部署 | 长任务/自动化部署场景用户 | Rust web 会话模型 + 持久化记忆（路线中） |
| **OpenCode** | 多 provider、配置热重载、目录计费 | 偏好本地/开源模型的开发者 | SolidJS + per-session budget + Zen 配额 |
| **Pi** | TUI 体验、本地模型、多 provider | TUI 极客 + 本地推理用户 | 零依赖 Node 脚本 + 扩展 API 一等公民化 |
| **Qwen Code** | 服务化守护、Channel 路由、`/review` 自治 | 团队协作 + 多 Agent 编排 | web-shell + qwen serve + ACP 缓冲限流 |
| **DeepSeek TUI/CodeWhale** | 单体架构解耦、子代理统一面板 | Rust 性能派 + 多 provider 探索者 | TUI Crate 分解（EPIC-005）+ Harvest 治理 |

**关键差异点**：
- **企业级深度**：Claude Code > GitHub Copilot CLI > OpenAI Codex（认证/合规/计费链路最完善）
- **协议探索激进**：Gemini CLI（eval 工具链）、Pi（扩展 API）、DeepSeek TUI（crate 分解）
- **本地/隐私优先**：Pi（Ollama/llama.cpp）、OpenCode（多 provider）、Scaleway
- **多代理编排深度**：Qwen Code（Channel/session rotation）≈ DeepSeek TUI（统一任务面板）> Claude Code

---

## 五、社区热度与成熟度

### 🔥 高热度 + 高成熟度（头部）
- **Claude Code**：单 Issue 👍498（Linux 桌面端）是当日最强信号，反映"核心需求未被满足"的长期张力
- **GitHub Copilot CLI**：43 条 Issue 更新 + 单日 👍35（CIMD）= 用户基数大、问题密度高
- **OpenAI Codex**：10 条 PR 集中在基础设施层（线程用量、turn 路由、plugin metrics），已进入"打磨期"

### 🚀 高热度 + 中等成熟度（快速迭代）
- **Gemini CLI**：50+ 活跃 Issue + 安全修复密集 → 高速演进 + 安全债并行
- **OpenCode**：双版本发布 + 计费类投诉簇 → 产品力强但商业化路径待清晰
- **DeepSeek TUI/CodeWhale**：v0.9.6 品牌切换 + Harvest 治理样板 → 社区运营亮点

### 🛠 中等热度（深耕细分）
- **Qwen Code**：desktop-v0.2.x 双版本 + `/review` 系列化 → 服务化战略明确
- **Pi**：14 条 PR、多 provider/本地推理密集接入 → 极客向产品力
- **Kimi Code CLI**：1 Issue + 2 PR → 路线图信号清晰但社区参与度低

### 📊 成熟度梯队判断
**梯队 1（生产可用 + 大规模用户）**：Claude Code、OpenAI Codex、GitHub Copilot CLI
**梯队 2（快速迭代 + 差异化竞争）**：Gemini CLI、OpenCode、Qwen Code
**梯队 3（细分赛道 + 长尾创新）**：Pi、Kimi Code CLI、DeepSeek TUI/CodeWhale

---

## 六、值得关注的趋势信号

### 🔮 趋势 1：**"代理可观测性"成为基础设施级需求**
跨 5 款工具的统一痛点：**subagent/agent 视图无法区分状态、事件流互相污染、长任务中断无信号**。这预示下一阶段会出现"AgentOps"或"Agent Telemetry"标准化协议，类似 OpenTelemetry 在微服务中的位置。

### 🔮 趋势 2：**MCP 进入"生产化前夜"**
多款工具同时报告"配置了却没生效"（hooks、autoUpdate、模型覆盖）和"连接成功 ≠ agent 可见"——意味着 MCP 已度过概念验证期，但**鉴权（CIMD/DCR）、作用域、诊断链路**尚未标准化，是协议层最大的系统性机会。

### 🔮 趋势 3：**"Per-thread / Per-session 计费可见"成为标配**
OpenAI Codex（已合并）、OpenCode（PR 阶段）、Claude Code（cache 失效焦虑）共同指向：**用户拒绝"黑盒用量"，要求按线程/会话粒度看 credits/USD/token/reasoning effort**。这将反过来倒逼模型层提供更细粒度的 usage 元数据。

### 🔮 趋势 4：**跨会话记忆 = 长期差异化赛点**
Kimi Code 单一 Issue 持续 5 个月 36 条评论、Gemini Auto Memory 多线 issue、Qwen Code 把 auto-memory recall 列为核心 RFC——**没有持久化记忆的工具正在失去通往"项目级智能体"的入场券**。

### 🔮 趋势 5：**桌面端信任危机正在反推用户回流 CLI**
Claude Code 桌面端 GPU 崩溃带走全部活跃会话、Copilot CLI WSL2 键位错乱、OpenAI Codex 5s 固定超时——**当桌面端稳定性反复击穿用户耐心，"CLI 优先 + 远程控制"成为更务实的工程路径**，这也解释了 Claude Code Remote Control 与 Qwen Code `qwen serve` 的服务化重心。

### 🔮 趋势 6：**"Harvest"机制与开放治理成为社区运营新范式**
DeepSeek TUI/CodeWhale 针对 base drift 失败的社区 PR 进行重基线合入，避免优秀贡献流失。这种**主动的 PR 收尾流程**比单纯追求功能密度更能积累社区资产，值得所有工具借鉴。

---

## 📌 给开发者的决策建议

| 你的核心需求 | 首选工具 | 次选/补位 |
|---|---|---|
| 企业合规 + 远程协作 + 插件生态 | **Claude Code** | GitHub Copilot CLI |
| VS Code 深度集成 + 多线程管理 | **OpenAI Codex** | Claude Code |
| 评估研究 + 多模型对比 | **Gemini CLI** | Pi |
| 本地推理 + 隐私合规 | **Pi** | OpenCode |
| 长任务自动化部署 | **Kimi Code CLI** | Qwen Code（web-shell） |
| 多 Agent 编排 + 团队协作 | **Qwen Code** | DeepSeek TUI/CodeWhale |
| 跨

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-13 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 一、热门 Skills 排行（PR）

> 说明：原数据集中 PR 评论/点赞字段为 `undefined`，故综合「修复严重性 × 关联 Issue 数量 × 跨场景影响」筛选。

### 🔥 1. [#1298 — fix(skill-creator): run_eval.py 始终报告 0% recall](https://github.com/anthropics/skills/pull/1298)
- **作者**：MartinCajiao | **状态**：OPEN | **更新**：2026-06-23
- **功能定位**：skill-creator 元技能的核心评测脚本修复
- **讨论热点**：直接对应 [#556](https://github.com/anthropics/skills/issues/556)（12 评论、7 👍）与 [#1169](https://github.com/anthropics/skills/issues/1169) 两大热门 Bug，单一 PR 解决了 Windows 子进程管道读取、并发 worker、触发检测三大问题。
- **社区关注原因**：描述优化循环正在"对噪声做优化"，几乎所有用 skill-creator 的开发者都受影响。

### 🔥 2. [#1367 — self-audit: 机械验证 + 四维推理质量门](https://github.com/anthropics/skills/pull/1367)
- **作者**：YuhaoLin2005 | **状态**：OPEN | **更新**：2026-07-02
- **功能定位**：通用 AI 输出审计技能，零文件声明验证 → 严重度优先的推理审计
- **讨论热点**：对应 [#1385](https://github.com/anthropics/skills/issues/1385) 三门管道提案（4 评论），是社区"质量门"叙事的核心实现。
- **社区关注原因**：跨项目、跨技术栈、跨模型可用，是 Skills 生态第一批"自省型"通用技能。

### 🔥 3. [#514 — Add document-typography skill](https://github.com/anthropics/skills/pull/514)
- **作者**：PGTBoos | **状态**：OPEN | **更新**：2026-03-13
- **功能定位**：AI 生成文档的排版质量控制（孤行控制、寡行检测、编号对齐）
- **讨论热点**：解决"每个 Claude 生成的文档都有的排版问题"，覆盖度高。
- **社区关注原因**：文档生成是 Claude 最常见的使用场景之一，痛点明确。

### 🔥 4. [#83 — skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
- **作者**：eovidiu | **状态**：OPEN | **更新**：2026-01-07
- **功能定位**：元技能（meta-skills），从结构、文档、安全性等维度审计其他 Skills
- **讨论热点**：呼应 [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高热度）的信任边界问题。
- **社区关注原因**：随着社区贡献 Skills 增多，缺乏质量与安全基线。

### 🔥 5. [#723 — Add testing-patterns skill](https://github.com/anthropics/skills/pull/723)
- **作者**：4444J99 | **状态**：OPEN | **更新**：2026-04-21
- **功能定位**：覆盖 Testing Trophy 哲学 + 单元测试 + React 组件测试的完整测试栈
- **讨论热点**：社区对"工程化通用技能"诉求的代表，定位明确不绑定具体语言。
- **社区关注原因**：补齐 Claude 在测试生成领域的通用能力缺口。

### 🔥 6. [#568 — ServiceNow 平台技能](https://github.com/anthropics/skills/pull/568)
- **作者**：Vanka07 | **状态**：OPEN | **更新**：2026-08-12（最近活跃）
- **功能定位**：覆盖 ITSM、ITOM、SAM、FSM、SecOps、IntegrationHub 的企业平台全栈助手
- **讨论热点**：企业用户在 [#1175](https://github.com/anthropics/skills/issues/1175) 反复提及 SharePoint/SPO 集成，关注"如何让 Claude 进入生产级企业系统"。
- **社区关注原因**：Enterprise 落地需求的具体体现。

### 🔥 7. [#538 / #541 — DOCX/PDF 关键 Bug 修复](https://github.com/anthropics/skills/pull/538)
- **作者**：Lubrsy706 | **状态**：OPEN | **更新**：2026-04-29
- **功能定位**：修复大小写敏感文件名引用、tracked change 与现有书签 w:id 冲突导致的文档损坏
- **讨论热点**：链接到 [#12](https://github.com/anthropics/skills/issues/1175) 长期未解的空白/格式问题。
- **社区关注原因**：直接关系到文档可用性，"docx 损坏"是文档类技能最高频反馈。

---

## 二、社区需求趋势（Issues 提炼）

| 排名 | 需求方向 | 代表 Issue | 关注度 |
|---|---|---|---|
| 🥇 | **Skills 安全/信任边界** | [#492 社区 Skills 假冒 anthropic/ 命名空间](https://github.com/anthropics/skills/issues/492) | **43 评论** 🔥 |
| 🥈 | **Org 级协作与共享** | [#228 企业内 Skills 共享](https://github.com/anthropics/skills/issues/228) | 16 评论 / 8 👍 |
| 🥉 | **评测/触发机制修复** | [#556 run_eval.py 0% 触发率](https://github.com/anthropics/skills/issues/556) | 12 评论 / 7 👍 |
| 4 | **跨平台可用性** | [#62 Skills 丢失](https://github.com/anthropics/skills/issues/62)、[#29 Bedrock 集成](https://github.com/anthropics/skills/issues/29) | 10 + 4 评论 |
| 5 | **Agent 治理/质量门** | [#412 Agent Governance](https://github.com/anthropics/skills/issues/412)、[#1385 质量门管道](https://github.com/anthropics/skills/issues/1385) | 6 + 4 评论 |
| 6 | **插件去重/打包规范** | [#189 document-skills 与 example-skills 内容重复](https://github.com/anthropics/skills/issues/189) | 6 评论 / 9 👍 |
| 7 | **Skills → MCP 协议化** | [#16 Expose Skills as MCPs](https://github.com/anthropics/skills/issues/16) | 4 评论 |
| 8 | **企业系统集成（SPO/Bedrock）** | [#1175 SharePoint 安全](https://github.com/anthropics/skills/issues/1175)、[#29 Bedrock](https://github.com/anthropics/skills/issues/29) | 4 + 4 评论 |
| 9 | **上下文窗口治理** | [#1487 claude-api 注入 156k tokens](https://github.com/anthropics/skills/issues/1487) | 4 评论 |
| 10 | **持久化符号化记忆** | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) | 9 评论 |

**趋势小结**：社区需求已从"单个技能好不好用"演进到"**生态是否可信、可治理、可协作**"的层面。

---

## 三、高潜力待合并 Skills（活跃但 OPEN）

| PR | 主题 | 为何高潜力 | 链接 |
|---|---|---|---|
| **#1538** | 修复两个 Skill 不符合 Agent Skills 规范 | 仓库是参考实现，规范合规是优先级 | [链接](https://github.com/anthropics/skills/pull/1538) |
| **#1479** | plan-file-hygiene（计划文件生命周期管理） | 直接回应 [#1417](https://github.com/anthropics/skills/issues/1417)，解决长期积压问题 | [链接](https://github.com/anthropics/skills/pull/1479) |
| **#1367** | self-audit 通用质量门 | 通用性强，跨技术栈，受 [#1385](https://github.com/anthropics/skills/issues/1385) 推动 | [链接](https://github.com/anthropics/skills/pull/1367) |
| **#1298** | skill-creator 评测链修复 | 解锁整个描述优化工作流，影响所有贡献者 | [链接](https://github.com/anthropics/skills/pull/1298) |
| **#83** | skill-quality/security-analyzer | 与 #492 安全议题形成"提案 → 实现"闭环 | [链接](https://github.com/anthropics/skills/pull/83) |
| **#568** | ServiceNow 平台技能 | 最近 8 月仍更新，企业市场信号 | [链接](https://github.com/anthropics/skills/pull/568) |
| **#514** | document-typography | 排版痛点普世，且文档类技能是高频入口 | [链接](https://github.com/anthropics/skills/pull/514) |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 生态从『能跑』走向『可信』**：一方面要求 Anthropic 官方明确"antheropic/ 命名空间的信任边界"以杜绝假冒（[#492](https://github.com/anthropics/skills/issues/492)），另一方面强烈呼唤 **skill-creator 评测链路修复** 与 **质量/安全 meta-skills**，从而把"个人写 Skill"升级为"可治理、可审计、可协作"的工程级生态。

**附属洞察**：
- 🪟 **Windows 兼容性**：3 个高优先级 PR（#1298 / #1099 / #1050）都在解决同一根因，子进程 + 编码处理需系统性重构。
- 📄 **文档类 Skills 是"显性痛点"**：typography、DOCX 损坏、PDF 大小写、ODT 支持形成密集需求簇。
- 🏢 **企业落地信号增强**：ServiceNow、SAP-RPT-1、SharePoint 三条线并行，提示官方应尽快给出企业集成参考架构。

---

# Claude Code 社区动态日报
**日期：2026-08-13**

---

## 📌 今日速览

- **v2.1.229 发布**：Remote Control 会话续接、自托管 Runner Hook 支持、网关流式响应 SSE keepalive 三项更新落地，远程/自部署体验进一步完善。
- **桌面端故障集中爆发**：Windows 平台 GPU 进程崩溃、跨会话消息丢失、Auto-update 致 prompt cache 全量重建等问题密集出现，开发者稳定性焦虑上升。
- **多代理协作成为新焦点**：一条梳理出 12 类多代理协调 Bug 的"事后剖析"贴引发讨论（27 条评论），与"Linux 官方桌面端"长期高需求（👍498）共同构成本周最热社区话题。

---

## 🚀 版本发布

### v2.1.229（2026-08-12）

| 类别 | 变更 |
|---|---|
| Remote Control | 文档化 `claude remote-control --continue`，用于恢复最近一次 Remote Control 会话 |
| Hook | 为自托管 Runner 会话新增服务端下发的 Claude Code Hook，行为对齐托管环境 |
| 网关 | 网关流式响应新增 SSE keepalive 心跳，避免长连接被中间链路断开 |

> 整体方向：**远程 / 自托管 / 长连接可靠性**。这是一次面向"非交互 + 自部署"用户的明确信号。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 / 👍）排序，精选 10 条最值得关注的 Issue：

### 1. [#84352](https://github.com/anthropics/claude-code/issues/84352) — CVP 通过的组织仍被 Cyber Safeguard 拦截
- **状态**：OPEN｜💬 80｜👍 12
- **要点**：已通过 Cyber Verification Program 审批的 Claude.ai 组织，在 Claude Code 中仍被网络安全保护规则拦截；验证门户同时显示"审核中"。
- **为什么重要**：这是**企业合规**与**模型安全策略**冲突的典型案例，触及付费企业用户的核心使用权限。

### 2. [#65697](https://github.com/anthropics/claude-code/issues/65697) — Linux 官方桌面端构建
- **状态**：CLOSED｜💬 52｜👍 **498**（👍 数远超其他）
- **要点**：呼吁 Anthropic 官方发布 Linux（Ubuntu LTS / Debian）版 Claude Desktop。
- **社区反应**：👍 量级罕见，长达 2 个月的持续顶贴，体现 Linux 开发者群体对官方桌面端的高度渴求。

### 3. [#54393](https://github.com/anthropics/claude-code/issues/54393) — 多代理协调 12 类 Bug 事后剖析
- **状态**：OPEN｜💬 27｜👍 0
- **要点**：单次隔夜自治运行中暴露出 12 类多代理协调问题，涵盖 hooks、agents、permissions。
- **为什么重要**：长篇技术复盘，对任何做多代理项目的团队都有借鉴价值，社区讨论质量高。

### 4. [#81698](https://github.com/anthropics/claude-code/issues/81698) — Windows 桌面端 GPU 进程崩溃（exit 101457950）
- **状态**：OPEN｜💬 25
- **要点**：单次 GPU 崩溃拖垮整个 App 与全部活跃会话，RTX 5080 + Win11 环境稳定复现。
- **社区反应**：与 #85905、#85199、#84951 一同构成"Windows 桌面端稳定性"集中投诉。

### 5. [#14061](https://github.com/anthropics/claude-code/issues/14061) — `/plugin update` 不刷新插件缓存
- **状态**：OPEN｜💬 25｜👍 31
- **要点**：插件更新后已下载新版本，但 `installed_plugins.json` 未更新，新会话仍跑旧版本。
- **为什么重要**：影响所有**插件生态**的可靠性，是插件作者反馈最频繁的痛点之一。

### 6. [#75899](https://github.com/anthropics/claude-code/issues/75899) — TUI 左方向键误触进入 Agent 屏
- **状态**：OPEN｜💬 14｜👍 19
- **要点**：聊天输入框内按左键会跳转到 agents 屏，且该快捷键**不可重绑**，返回后主会话视图状态丢失。

### 7. [#85199](https://github.com/anthropics/claude-code/issues/85199) — Windows 桌面端反复崩溃需"Repair"
- **状态**：OPEN｜💬 13
- **要点**：Claude Desktop 频繁崩溃，必须走"Advanced Options → Repair"恢复，UX 极差。

### 8. [#79366](https://github.com/anthropics/claude-code/issues/79366) — Worktree 会话复用旧目录
- **状态**：OPEN｜💬 11｜👍 7
- **要点**：开启 worktree 隔离的新会话被放进**先前会话**的 worktree 目录，存在污染与上下文错乱风险。

### 9. [#82326](https://github.com/anthropics/claude-code/issues/82326) — Opus 5 出现幻觉回归
- **状态**：OPEN｜💬 9
- **要点**：相比 4.8，Opus 5 在 2.1.220 重新出现编造答案的回归现象，开发者反馈"明显倒退"。

### 10. [#83364](https://github.com/anthropics/claude-code/issues/83364) — WebSearch 在 Opus 5 + xhigh/max effort 下 HTTP 400
- **状态**：OPEN｜💬 2｜👍 4
- **要点**：当会话 effort 设为 `xhigh`/`max` 时，Opus 5 的 `WebSearch` 全部 400 失败，被识别为 v2.1.219 默认 effort 切换后的回归。

---

## 🛠 重要 PR 进展

过去 24 小时共 5 条 PR 更新，覆盖文档修正、误报修复、协议提案三类：

| # | 标题 | 状态 | 价值 |
|---|---|---|---|
| [#85925](https://github.com/anthropics/claude-code/pull/85925) | docs: 修正其余指向 `code.claude.com` 的过期文档链接 | CLOSED | 与 #85822 互补，统一把 `docs.claude.com` 重定向链接改为正式域名 |
| [#85822](https://github.com/anthropics/claude-code/pull/85822) | docs: 修复 plugins / examples 中的过期文档链接 | CLOSED | 文档卫生清理，已逐条对照重定向校验 |
| [#57888](https://github.com/anthropics/claude-code/pull/57888) | 将 `child_process_exec` 规则收窄至 JS/TS（修复 Python 误报） | CLOSED | **安全 Hook 误报修复**：`asyncio.create_subprocess_exec(` 此前被错误匹配 |
| [#41611](https://github.com/anthropics/claude-code/pull/41611) | 补充 Claude Code 缺失源码 | OPEN | 老牌 PR，持续引起讨论 |
| [#42996](https://github.com/anthropics/claude-code/pull/42996) | examples: 新增 MEP（Meat Puppet Elimination Protocol） | OPEN | 跨机器 / 跨会话**状态接力**示例，零基础设施、3 个文件 |

> 今日 PR 数量不多但**质量信号明显**：3 条 Closed PR 中 2 条文档、1 条安全 Hook 误报，反映仓库近期在**收尾清理**与**安全精修**。

---

## 📈 功能需求趋势

从本周 Issue 文本中提炼的高频需求方向：

| 方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **Linux 官方桌面端** | #65697 | 🔥🔥🔥 498 👍，长期 TOP1 |
| **跨设备 / 跨会话连续性** | #81835、#84965、#42996 (MEP) | 🔥🔥 桌面+远程体验不一致 |
| **多代理协调 / 状态管理** | #54393、#66202、#86082、#86059 | 🔥🔥 长会话中 agent 视图"睡眠/活跃"区分、消息收不到 |
| **桌面端稳定性（Windows 优先）** | #81698、#85199、#84951、#85905 | 🔥🔥 Electron + GPU + Browser pane 反复崩溃 |
| **Prompt Cache 与成本** | #86244、#78720 | 🔥 后台自动更新与 `git status` 微小变更都会让整段缓存失效 |
| **MCP 集成深化** | #72239、#86023 | MCP Audience 标注、跨 claude.ai / CLI 行为对齐 |
| **TUI 键位 / 终端协议** | #75899、#71700 | Kitty 协议基于白名单而非 CSI 能力声明，Alacritty 等被拒 |
| **模型选择 / 上下文窗口** | #68287、#69109、#82326 | 1M 上下文选项偶发消失，Opus 5 幻觉回归 |

---

## 🧑‍💻 开发者关注点

综合今天 Issue 与 PR 的反馈，开发者最集中的痛点：

1. **桌面端"信任"受损** — Windows 上 GPU 进程崩溃会带走全部活跃会话，且自我修复（MSIX Repair）会**清空打包数据**（#85905）。开发者被迫把生产工作从桌面端迁回 CLI。

2. **Prompt Cache 静默失效** — 后台自动升级（#86244）、`git status` 任意变更（#78720）都会触发整段 prefix 重建，对长会话的成本影响被反复点名。

3. **多代理"可观测性"不足** — agents 视图无法区分"已完成 / 等待输入 / 睡眠"（#86082），跨会话消息"显示到达但未进入输入队列"（#86059、#86237），让自主运行的 agent 几乎无法可靠管理。

4. **权限系统信任危机** — `permissions.deny` 规则被报告失效（#61268），属于安全底线问题，应优先修复。

5. **快捷键不可重绑** — TUI 左方向键跳转行为（#75899）让重度用户被迫适应产品决策而非反过来。

6. **模型质量回归焦虑** — Opus 5 vs 4.8 的幻觉差异（#82326）让升级决策变得保守；新模型上线需要更明确的回归对比与回退路径。

---

> 📎 提示：以上链接均为 `anthropics/claude-code` 仓库地址，Issue 编号在 2026-08-13 24 小时内仍有更新可能，建议结合 GitHub 通知流持续跟踪。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-08-13**

---

## 📌 今日速览

今日 Codex 仓库活跃度依然集中在 **Windows 桌面端稳定性** 与 **VS Code 扩展 IDE Context 故障**两条主线，Rust 端发布了 `0.148.0-alpha.9` 预发布。与此同时，copyberry[bot] 在过去 24 小时内合并了大量围绕 **线程用量查询、插件指标采集、turn 输入路由重构** 等方向的自动化 PR，显示出 Codex 正在加速把"per-thread 使用计量"与"插件遥测"作为下一阶段基础设施落地。

---

## 🚀 版本发布

### rust-v0.148.0-alpha.9
- 发布时间：2026-08-13
- 发布说明较为精简，未列出详细变更条目
- 链接：https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.9

> 建议关注后续 0.148.0 稳定版以确认 API 变更范围。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#28969](https://github.com/openai/codex/issues/28969)** — *Add setting to disable the auto-resolve in 60 seconds for questions*（bug / CLI / config）
   - 70 条评论、👍194，是本期热度最高的 issue。用户希望为 `request_user_input` 增加关闭 60s 自动解决行为的开关，与本期 #37472 需求高度同源。
2. **[#25178](https://github.com/openai/codex/issues/25178)** — *Windows Computer Use screenshot fails on Windows 10 22H2*
   - 25 条评论。`SetIsBorderRequired` 触发 `0x80004002` 导致截图失败，Windows 端 Computer Use 链路的最大障碍之一。
3. **[#31553](https://github.com/openai/codex/issues/31553)** — *Codex VS Code extension stopped auto-including IDE context after update*
   - 17 条评论。升级后 IDE Context 不再自动注入 IDE 信息，影响 #34920、#34696、#35333、#35419 等多个同类问题。
4. **[#14923](https://github.com/openai/codex/issues/14923)** — *Desktop app: explicit cross-thread orchestration over existing thread/turn primitives*（CLOSED）
   - 16 条评论的增强请求已被关闭，反映社区对显式多线程编排 API 的诉求已落地或被驳回。
5. **[#26990](https://github.com/openai/codex/issues/26990)** — *Windows Desktop local state is not crash-safe after power loss*
   - 14 条评论。掉电场景下 pin/project 与 SQLite state 会损坏，提示 Windows 端持久层缺少 fsync 与 WAL 兜底。
6. **[#37398](https://github.com/openai/codex/issues/37398)** — *Codex Desktop: opening any unloaded local chat waits ~5 seconds on owner discovery timeout*
   - 14 条评论。owner-discovery 固定 5s 超时拖慢所有未加载会话打开，是性能侧最具代表性的反馈。
7. **[#33967](https://github.com/openai/codex/issues/33967)** — *ChatGPT for Windows cannot complete setup or enter limited-access mode*
   - 12 条评论。Win 端 onboarding 卡死，影响新用户首次进入。
8. **[#34920](https://github.com/openai/codex/issues/34920)** — *IDE Context fails in Codex extension 26.715.x with RPC serialization error*
   - 10 条评论。`workspaceRoot` 字段缺失导致 RPC 反序列化失败，是 VS Code 扩展 IDE Context 集中爆发的根因之一。
9. **[#37059](https://github.com/openai/codex/issues/37059)** — *macOS: same-version Chrome plugin cache reconciliation deletes chrome/latest*
   - 6 条评论。bundled chrome 插件缓存版本对账逻辑会把"仍可用"的 latest 目录误删。
10. **[#35419](https://github.com/openai/codex/issues/35419)** — *VS Code IDE context auto-disables and selected text is not attached in WSL2*
    - 6 条评论、👍10。WSL2 远端开发场景下 IDE Context 自动禁用，且选中文字不再随上下文发送。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#38281](https://github.com/openai/codex/pull/38281)** — *Show estimated thread usage in `/status`*（已合并）
   - 扩展 `account/usage/read`，新增 `threadId` 与 `threadUsage` 响应，暴露每个线程的预计 credits/USD 成本与 token 明细。
2. **[#38282](https://github.com/openai/codex/pull/38282)** — *Add thread usage to TUI status surfaces*（已合并）
   - 在可配置状态栏与终端标题中新增 `thread-credits`、`estimated-thread-cost`，仅在用户启用时拉取一次共享 estimate。
3. **[#38283](https://github.com/openai/codex/pull/38283)** — *Collect plugin metrics from remote executors*（已合并）
   - 远程插件命令的指标 sidecar 在 executor-native 私有临时目录创建，输出被流式回传校验。
4. **[#38275](https://github.com/openai/codex/pull/38275)** — *Unify turn input submission and routing*（已合并）
   - 引入 `TurnInputRequest` 类型化结果（start / steer / decline），暴露 `start_or_steer_turn` 等统一入口，重塑 turn 编排 API。
5. **[#38276](https://github.com/openai/codex/pull/38276)** — *Track plugin metrics for background unified exec commands*（已合并）
   - 解决 unified exec yield 后仍需持续采集后台命令指标的语义漏洞。
6. **[#38280](https://github.com/openai/codex/pull/38280)** — *Use protobuf's built-in Bazel proto rule*（已合并）
   - 直接复用 `com_google_protobuf` 的 `proto_library`，移除 `rules_proto` 模块依赖，构建链路瘦身。
7. **[#38285](https://github.com/openai/codex/pull/38285)** — *Move `codex-execpolicy` to protocol dev dependencies*（已合并）
   - 将 execpolicy 限定为 protocol 的 dev 依赖，依赖图更准确。
8. **[#38274](https://github.com/openai/codex/pull/38274)** — *Represent persisted world state as JSON objects*（已合并）
   - `WorldState` 的持久化字段被收紧为 JSON 对象类型，杜绝无法表达世界态的"任意 JSON"形状。
9. **[#38272](https://github.com/openai/codex/pull/38272)** — *Stamp conversation history items with creation times*（已合并）
   - 本地创作的用户/开发者/agent/tool-output 条目入历史时附 Unix 亚秒级时间戳，便于回放与排序。
10. **[#38258](https://github.com/openai/codex/pull/38258)** — *Unify external authentication provider handling*（已合并）
    - `ExternalAuth` 提供方错误统一分类（resolve / refresh / validation），支持运行时替换并清理过期的永久性 refresh 失败记录。

---

## 📈 功能需求趋势

综合近 24 小时 Issues，可以提炼出 6 个最受关注的社区方向：

| 方向 | 代表 issue | 社区信号 |
| --- | --- | --- |
| **IDE Context（VS Code / WSL2 / Devin）可靠性** | #31553, #34920, #34696, #35333, #35419 | 多版本回归，急需 workspaceRoot 等字段的兼容兜底 |
| **Windows Desktop 稳定性与持久化** | #26990, #25178, #33967, #37743 | 掉电恢复、Computer Use 截图、setup 卡死三类顽疾 |
| **request_user_input / 交互超时可控化** | #28969, #37472 | 70 + 2 条评论，希望默认模式下也能禁用 60s 自动 resolve |
| **本地 chat 与 owner-discovery 性能** | #37398, #23644, #38250 | 5s 固定超时、composer 提交卡顿、subagent 卡空白 |
| **Browser / Computer Use 能力补齐** | #20785, #25178, #37743, #38263 | 文件上传、DPI 截图、EPERM 权限、过量截图 |
| **Enterprise / 团队用量可视化** | #38281, #38282, #38270（新近合并） | per-thread credits/USD 在 TUI `/status` 与终端标题可见化 |

---

## 🧑‍💻 开发者关注点

1. **扩展回归没人兜底** — VS Code 扩展在 26.707 / 26.715 / 26.721 多个版本中反复出现 IDE Context 静默关闭、selected text 不随上下文、workspaceRoot 缺失等故障，可回滚到 26.5609 版本。开发者普遍希望提供"已知坏版本"清单或灰度机制。
2. **Windows 桌面持久层脆弱** — `#26990` 揭示的掉电数据损坏、`#28087` 的 SQLite 新旧索引迁移死锁、`#37398` 的 5s 固定超时叠加出现，说明 Win 端状态机还没有 fsync / WAL 兜底，建议优先纳入稳定性回归用例。
3. **CLI 与 Desktop 行为不一致** — `#38169`（线程压缩后 resume 丢最新 turn）、`#38144`（`/fork` 留 writer 阻塞 resume）、`#38248`（创建 side thread 报错）都指向 codex-cli 0.147.0 与 app-server 协议层的兼容性回归，社区期待一份明确的"协议变更日志"。
4. **Computer / Browser Use 仍是高 ROI 改进区** — 截图 DPI 叠加 (`#31693`)、文件上传缺失 (`#20785`)、EPERM 权限失败 (`#37743`) 三类问题都集中在 Windows / in-app browser 栈，与本期 copyberry[bot] 合并的 unified exec / plugin metrics 改造尚未直接覆盖。
5. **企业用户需要更细的成本可观测性** — `#38281 / #38282` 的快速落地说明官方正在响应"按线程看 credits / USD"的需求，开发者也希望后续把 token、reasoning effort、speed 维度继续下钻到 thread 级别。

---

*数据来源：[openai/codex](https://github.com/openai/codex) Issues & Pull Requests（2026-08-12 ~ 2026-08-13）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-13**

---

## 📌 今日速览

Gemini CLI 今日发布 nightly 版本 **v0.56.0-nightly.20260813.g1ac337739**，同时社区聚焦于 **subagent 可靠性**与 **Auto Memory 系统**两大议题——多起高优 Bug 指向子代理在 `MAX_TURNS` 后误报成功、Generalist Agent 无故挂起等问题。值得关注的是，团队已就 MCP 配置损坏引发的 fail-open 安全漏洞提交了双线修复（#28787 / #28794），并正在评估 Gemini 3.6 Flash 与 3.5 Flash-Lite 的接入配置（#28673）。

---

## 🚀 版本发布

### v0.56.0-nightly.20260813.g1ac337739

夜间构建版本，主要合并：

- **#28344**：新增 `eval:validate` 静态分析命令，支持 CI 门禁校验 eval 源文件
- **#28305**：评估框架加入工具调用时间线格式化与失败摘要诊断，便于定位问题

> ⚠️ 关联 PR #28776（v0.56.0-preview.1）Changelog 与 #28779（v0.55.1）Changelog 仍待合并。

🔗 [Release 链接](https://github.com/google-gemini/gemini-cli/releases/tag/v0.56.0-nightly.20260813.g1ac337739)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 / 类型 | 关注度 | 要点 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | P1 / Bug | 💬12 / 👍2 | `codebase_investigator` 子代理达到 `MAX_TURNS` 后仍报告 `status: "success"`，掩盖了中断状态——可能误导后续编排决策。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | P1 / Bug | 💬8 / 👍8 | Generalist Agent 频繁挂起（最长等待 1 小时），简单建文件夹操作即触发；指定"不使用子代理"可绕过。社区反响强烈。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | P2 / Enhancement | 💬8 / 👍1 | 提议 Zero-Dependency OS 沙箱 + 后执行意图路由，匹配 Gemini 3 模型的 bash 原生偏好。 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | P1 / Epic | 💬7 | "组件级评估"后续 Epic：已积累 76 个行为评估用例，需构建更鲁棒的评估基础设施。 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | P2 / Feature | 💬7 / 👍1 | 评估 AST 感知文件读取/搜索/映射的收益，可显著减少无意义 token 与回合数。 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | P2 / Bug | 💬6 | Gemini 几乎不会主动使用自定义 skill 与 sub-agent，除非显式指令——影响工作流自动化。 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | P2 / Bug | 💬5 | Auto Memory 反复重试低信号会话，无法终止。 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | P1 / Bug | 💬4 / 👍3 | Shell 命令结束后仍卡在"Waiting input"状态，普通 CLI 命令即可触发。 |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | P3 / Feature | 💬4 | `browser_agent` 的 BrowserManager 在锁定的 profile 上 fail-fast，需增强会话接管与锁恢复能力。 |
| 10 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | P1 / Bug | 💬4 / 👍1 | Browser subagent 在 Wayland 下失败——环境兼容性盲区。 |

> **社区反应总结**：subagent 行为异常与 shell 终端交互卡顿是当前最高频的痛点；多项 P1 仍处 `status/need-retesting` 阶段，需社区复测加速收敛。

---

## 🛠️ 重要 PR 进展（Top 10）

### 🔐 安全修复

- **[#28691](https://github.com/google-gemini/gemini-cli/pull/28691)** — `detectBashSubstitution` / `detectPowerShellSubstitution` 修补 `$VAR` 与 `${VAR}` 绕过漏洞（GHSA-wpqr-6v78-jr5g），并加固 issue 去重 workflow。**安全优先 P1，建议优先合入。**

- **[#28787](https://github.com/google-gemini/gemini-cli/pull/28787)** / **[#28794](https://github.com/google-gemini/gemini-cli/pull/28794)** — 修复 `mcp-server-enablement.json` 损坏时 `readConfig()` 退化为 `{}` 导致所有 MCP server 默认开启的 **fail-open + 数据丢失**问题（#28786）。两条修复路径并行，待 maintainer 决策。

- **[#28557](https://github.com/google-gemini/gemini-cli/pull/28557)** — `web-fetch.ts` 改用异步 DNS 解析修复 SSRF 漏洞（#28555），关闭同步 `isPrivateIp()` 漏检域名解析路径。

### ⚙️ 核心稳定性

- **[#28790](https://github.com/google-gemini/gemini-cli/pull/28790)** — 实现容量耗尽错误的**上下文感知静默重试**与可用性 TTL，自动化 CLI 在过载时可优雅退避，关停 #28761 回归问题。

- **[#28789](https://github.com/google-gemini/gemini-cli/pull/28789)** — 修复 `vscode-ide-companion` 的 `IdeServer.stop()` 挂死与 ping 循环资源泄漏（#28785）。

- **[#28792](https://github.com/google-gemini/gemini-cli/pull/28792)** — 标准化 Git 子进程环境变量并解决 workspace trust 状态初始化不一致问题。

### 🧪 评估与测试

- **[#28788](https://github.com/google-gemini/gemini-cli/pull/28788)** — 为 `activate_skill` 与 `web_fetch` 添加行为评估，并修复 EDK 报告聚合器对跳过用例的处理，附带 Windows 兼容性改进。

- **[#28305](https://github.com/google-gemini/gemini-cli/pull/28305)** — eval 失败时自动输出紧凑的**工具调用时间线**（含参数、状态、错误），已合入今日 nightly。

- **[#28344](https://github.com/google-gemini/gemini-cli/pull/28344)** — 新增 `eval:validate` 命令，可用于 CI 静态校验，已合入今日 nightly。

### 🚀 功能与模型

- **[#28673](https://github.com/google-gemini/gemini-cli/pull/28673)** — 在 `packages/core` 添加 **Gemini 3.6 Flash 与 3.5 Flash-Lite** 模型定义、能力位（`thinking`、`multimodalToolUse`）与别名。**值得模型爱好者关注。**

- **[#28738](https://github.com/google-gemini/gemini-cli/pull/28738)** — **允许 agent 调用 agent**，通过 `tools:` frontmatter 让子代理互相委派或递归，修复 #22092，开启多 Agent 协作的新范式。

- **[#28793](https://github.com/google-gemini/gemini-cli/pull/28793)** — 稳定慢速运行器上的 `file-system-interactive` e2e 测试，提升 CI 可靠性。

- **[#28795](https://github.com/google-gemini/gemini-cli/pull/28795)** — nightly 自动版本 bump 机器人提交。

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 的聚类分析，社区关注度集中在以下方向：

1. **🧠 Agent 编排可靠性（最高频）**
   - Subagent 递归、嵌套调用（#28738、#22092）
   - 子代理误报成功 / 无限挂起（#22323、#21409）
   - Subagent trajectory 可观测性（#22598、#21763）

2. **🤖 新模型支持**
   - Gemini 3.6 Flash / 3.5 Flash-Lite 接入（#28673）
   - Gemini 3 原生 bash 训练偏好的利用（#19873）

3. **🛡️ 安全与权限**
   - 变量展开绕过（#28691、GHSA-wpqr-6v78-jr5g）
   - MCP 配置损坏的 fail-open（#28786、#28787、#28794）
   - 危险命令抑制（`git reset --force` 等）（#22672）

4. **🧩 上下文与代码理解**
   - AST 感知工具（#22745、#22746）
   - 组件级行为评估（#24353、#22745）

5. **💾 Auto Memory 体系化**
   - 重试循环抑制（#26522）
   - 确定性的脱敏与日志精简（#26525）
   - 错误补丁隔离（#26523、#26516）

6. **🌐 Browser Agent 增强**
   - 会话接管与锁恢复（#22232）
   - Wayland / Linux 兼容（#21983）
   - settings.json 覆盖生效（#22267）

---

## 💬 开发者关注点

综合 Issue 与 PR 评论，当前开发者社区的**高频痛点**：

| 痛点类别 | 典型表现 | 代表 Issue |
|---|---|---|
| **Subagent 不可控** | 静默挂起、误报成功、设置不生效 | #21409、#22323、#22267 |
| **Shell 交互残留** | 命令完成后仍 "Waiting input" | #25166、#22465 |
| **Skills / Subagent 调度** | 模型不主动调用，需手动提示 | #21968、#22093 |
| **Auto Memory 噪音** | 重复重试、补丁失效、日志泄漏 | #26522、#26525、#26523 |
| **MCP / 权限边界** | 配置损坏即 fail-open，subagent 绕过授权 | #28786、#22093 |
| **终端渲染** | 滚动跳变、resize 闪烁、外部编辑器退出后花屏 | #5009、#21924、#24935 |
| **工具爆炸** | 超过 ~128 个工具触发 400 | #24246 |

**高频需求**：
- 🔍 更细粒度的 agent 日志与轨迹分享（`/chat share`）
- ⚡ 显式的"仅 Shell"模式与确定性输出 hook
- 🧱 更稳定的 CI（评估 / e2e / Windows / 慢速 runner）
- 🛠️ AST / 结构化代码理解工具替换朴素 `read_file`
- 🧠 引入 Gemini 3.6 Flash 等新一代模型扩展选择面

---

*日报由 Gemini CLI 社区动态监测自动生成，数据基于 GitHub Issues、PRs 与 Releases 公开信息。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-13**

---

## 📌 今日速览

过去 24 小时内，Copilot CLI 仓库**无新版本发布**，但社区活跃度极高——43 条 Issue 被更新，且当天新增/刷新了大量围绕 **MCP（Model Context Protocol）连接稳定性、Subagent 模型覆盖、企业账号下的 Claude 模型可用性**三大主题的问题。开发者对远程 MCP 的 OAuth 刷新、Windows 平台下的 MCP 进程泄漏表现出强烈关注，叠加多个关于 `gpt-5.6-luna` 等子代理模型被悄悄降级到 `gpt-5.6-sol` 的回归报告，提示 1.0.79 版本可能存在较广的系统性问题。

---

## 🚀 版本发布

过去 24 小时无新版本发布。当前社区讨论普遍围绕 **1.0.79** 的多个回归缺陷展开，#4311（增量滚动时 transcript 空白）已确认在该版本修复。

---

## 🔥 社区热点 Issues

1. **[#1305](https://github.com/github/copilot-cli/issues/1305) Support CIMD for Remote OAuth MCP Servers** — ⭐ 35 👍
   为远端 OAuth MCP 服务器增加 **CIMD（Client ID Metadata Document）**支持，呼应已有的 DCR（Dynamic Client Registration）能力。**35 个 👍 是本期数据中点赞最高**，反映出企业用户对扩展 MCP 鉴权标准化的强烈呼声。

2. **[#1730](https://github.com/github/copilot-cli/issues/1730) sessionStart hook 不触发（v0.0.420）** — 💬 8
   `.github/hooks/*.json` 中定义的 `sessionStart` 钩子在 CLI 启动时不执行。Windows 11 + PowerShell 7 + v0.0.420 上稳定复现，直接影响需要自定义启动逻辑的插件作者。

3. **[#4328](https://github.com/github/copilot-cli/issues/4328) WSL2 下 Ctrl+H 被误判为 Ctrl+Backspace** — 💬 6
   根因锁定为 `WT_SESSION` 环境变量从 Windows Terminal 泄漏到 WSL2，导致键位解析错误。是典型的跨平台终端兼容性问题。

4. **[#4390](https://github.com/github/copilot-cli/issues/4390) 组织已启用模型在目录中缺失** — 💬 5 / 👍 4
   Copilot Business 组织已启用的 **Claude Sonnet 5 / Opus 5 / Kimi K3** 全部从模型目录消失，对商业订阅用户的核心工作流造成阻塞。

5. **[#4422](https://github.com/github/copilot-cli/issues/4422) Enterprise 账号下所有 Claude 模型不可用** — 💬 2 / 👍 3
   与 #4390 同源：个人 Enterprise 账户昨日还能使用 Claude，今天全部返回"This model is disabled"。**回滚 CLI 版本无效**，说明是服务端策略变化。

6. **[#2109](https://github.com/github/copilot-cli/issues/2109) ACP 增加 ask_user / ask_question 扩展方法** — 💬 3 / 👍 7
   当前 ACP 只覆盖了 `session/request_permission`，无法让自定义客户端把澄清问题回传给 CLI，限制了 IDE 等宿主端的深度集成。

7. **[#4311](https://github.com/github/copilot-cli/issues/4311) 增量滚动时 transcript 空白（已修复）** — 💬 3
   经排查为 `WCr`/ScrollBox 之外的问题，已在 **1.0.79** 中修复，是本期少有的"已闭环"案例。

8. **[#3976](https://github.com/github/copilot-cli/issues/3976) tgrep 原生索引器在大仓 OOM** — 💬 2
   启用 `copilot_cli_tgrep` 实验后，CLI 启动常驻守护进程，对超大 monorepo 建立 trigram 索引无内存上限，会把宿主直接 OOM kill。**搜索性能优化带来了稳定性风险**。

9. **[#4432](https://github.com/github/copilot-cli/issues/4432) rubber-duck 子代理 model 参数静默覆盖策略** — 💬 2
   `rubber-duck` 子代理的设计本意是借 `complementary` 策略获取异族模型，但 `task` 工具暴露的 `model` 参数会无声覆盖策略和用户的 `/subagents` 设置。

10. **[#3565](https://github.com/github/copilot-cli/issues/3565) Task 工具通过 multiplier 守卫静默降级子代理模型** — 💬 1 / 👍 1
    frontmatter 和显式 `model` 都失效：只要请求模型的 cost multiplier 高于会话模型，CLI 就会静默降级。**和 #4432、#4462（code-review 也中招）构成同一类回归**。

---

## 🛠 重要 PR 进展

过去 24 小时仅 **#4449** 一条实质性 PR，其余两条为已关闭的占位提交。

1. **[#4449](https://github.com/github/copilot-cli/pull/4449) Migrate pull request automation away from `pull_request_target`** — OPEN
   将 invalid-label 自动化从高权限的 `pull_request_target` 拆出：issue 用 issue-scoped write token 直接关闭，PR 用无权限的 `pull_request` 信号处理 mergeable 提示，**降低供应链/工作流被劫持的攻击面**，是仓库治理层面的正向改进。

> 注：#4452、#4453 均为已 CLOSED 的占位/回滚 PR，无实质内容。

---

## 📈 功能需求趋势

从近 24 小时更新的 43 条 Issue 提炼，社区当前最关心的方向集中在以下几条主线：

| 趋势方向 | 代表性 Issue | 信号强度 |
|---|---|---|
| **MCP 协议成熟度（OAuth、stdio、远端、Actions）** | #1305, #4346, #4461, #4463, #4464, #4466 | ⭐⭐⭐⭐⭐ |
| **子代理 / 多模型路由的模型覆盖与优先级** | #3565, #4432, #4457, #4458, #4462 | ⭐⭐⭐⭐⭐ |
| **企业/组织级模型目录与服务端策略一致性** | #4390, #4422 | ⭐⭐⭐⭐ |
| **Windows / WSL 平台兼容性（按键、终端、会话）** | #4328, #4455, #4463, #4468 | ⭐⭐⭐⭐ |
| **上下文压缩与长会话持久化** | #4441, #4467 | ⭐⭐⭐ |
| **插件生态（hooks、autoUpdate、marketplaces）** | #1730, #4465 | ⭐⭐⭐ |
| **BYOK / 自定义 Provider 模型切换** | #4358 | ⭐⭐ |

---

## 💬 开发者关注点

综合 Issue 描述与讨论，高频痛点可以归纳为四类：

1. **"配置了却没生效"**
   无论是 `.github/hooks/*.json` 的 sessionStart（#1730）、`extraKnownMarketplaces` 的 autoUpdate（#4465）、还是 `code-review`/`rubber-duck` 的模型覆盖（#4458、#4432、#4462），社区反复遭遇"声明被静默忽略"。**可观测性不足是开发者最大的挫败来源**。

2. **"MCP 在边缘场景下不可靠"**
   - Windows 上 socket 10013（#4463）
   - 远端 MCP 502 后整会话不再重试（#4466）
   - 关闭会话后 Docker 容器不退出（#4461）
   - Actions 下 GITHUB_TOKEN 拉 registry 403（#4346）
   - Entra OAuth refresh 命中 AADSTS70011（#4464）
   
   这五个 Issue 集中在 24 小时内被刷新，**说明 MCP 在生产路径上尚未达到"放心接入"的成熟度**。

3. **"服务端策略变化直接击穿客户端"**
   Enterprise 用户昨日还能用 Claude，今天全员不可用（#4390、#4422），回滚 CLI 无效——开发者期待 CLI 能提供**更明确的错误归因**（是哪一层拒绝、是否会自动恢复），而不是模糊的"This model is disabled"。

4. **"长会话与子代理的治理"**
   - 上下文多次压缩后早期决策被递归丢失（#4441）
   - 孤儿 `permission.requested` 事件反复弹窗（#4469）
   - `--server --stdio` 模式下 extension-host 进程 4× 不释放（#4468）
   - 长会话打满远端事件存储导致假死（#4467）
   - `apply_patch` 在异族子代理里触发伪警告（#4457）
   
   **多代理/长会话架构下的资源与状态治理**，正在成为下一个需要系统性补强的领域。

---

*日报基于 github.com/github/copilot-cli 公开数据生成，仅反映过去 24 小时内的社区动态。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-08-13
**数据来源**: github.com/MoonshotAI/kimi-cli

---

## 📌 今日速览

今日社区活跃度较低，过去 24 小时内仅有 1 个 Issue 被更新、2 个 PR 处于活跃状态。最受关注的依然是延续数月的 **Memory System（跨会话持久化记忆）** 功能请求，评论数已增至 36 条；而开发侧的进展集中在两个面向生产稳定性的 Bug 修复上，均来自贡献者 Ricardo-M-L。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节省略。*

---

## 🔥 社区热点 Issues

> 今日仅 1 个 Issue 更新，因此完整呈现该条目。

### #1283 [enhancement] Feature Request: Memory System — Persistent context across sessions

- **作者**: CatKang ｜ **创建**: 2026-02-27 ｜ **更新**: 2026-08-13
- **评论数**: 36 ｜ **👍**: 0
- **链接**: [MoonshotAI/kimi-cli Issue #1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)

**为何值得关注**: 该 Issue 自 2 月底提出至今已逾 5 个月，仍保持活跃讨论，是 Kimi Code CLI 当前呼声最高的增强类特性。其核心诉求是构建一套**跨会话持久化记忆系统**，覆盖两类记忆：
- **自动记忆**：AI 自主管理的笔记，记录项目模式、上下文信息；
- **手动记忆**：用户通过配置或指令自定义的偏好规则。

**社区反应**: 36 条评论显示社区参与度较高。尽管 👍 数为 0，但持续的更新与讨论表明用户对"长会话断裂后上下文丢失"这一痛点有强烈共识。该 Feature Request 的进展可直接反映 Kimi Code CLI 在多轮协作与项目级智能体方向上的产品路线图优先级。

---

## 🛠️ 重要 PR 进展

### #2449 [fix] string: strip newlines in `shorten_middle` before the length check

- **作者**: Ricardo-M-L ｜ **创建**: 2026-06-13 ｜ **更新**: 2026-08-12
- **链接**: [MoonshotAI/kimi-cli PR #2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

**内容**: 修复 `shorten_middle(text, width, remove_newline=True)` 在工具调用关键参数渲染时的逻辑缺陷。该函数被 `extract_key_argument` 用于生成单行摘要，但当前实现在**短输入场景下会提前返回**，导致换行符未被折叠，破坏单行显示。

**意义**: 虽属底层 string 工具的细节修复，但直接影响到终端中工具调用回显的可读性，对交互体验有切实改善。

---

### #2324 [fix] web: handle `BrokenPipeError` in `SessionProcess.send_message`

- **作者**: Ricardo-M-L ｜ **创建**: 2026-05-19 ｜ **更新**: 2026-08-12
- **链接**: [MoonshotAI/kimi-cli PR #2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

**内容**: 修复 `src/kimi_cli/web/runner/process.py` 中 `SessionProcess.send_message` 的竞态条件。该方法在 `start()` 调用与 `process.stdin.write/drain()` 之间未对子进程退出做防护，子进程若在此期间退出，会抛出未被捕获的 `BrokenPipeError`。

**意义**: 该 Bug 在长时间运行的 web 会话中可能偶发，属于典型的鲁棒性修复，对于 SaaS/部署场景下的稳定性至关重要。

---

## 📈 功能需求趋势

受限于今日极低的数据量（仅 1 个活跃 Issue），难以进行多维度的趋势归纳，但从该单一高热度 Issue 可提炼出一个明确方向：

| 需求方向 | 代表 Issue | 社区热度 |
|---|---|---|
| **持久化记忆 / 跨会话上下文** | #1283 | ⭐⭐⭐⭐⭐（36 评论，长达 5 个月持续讨论） |

**核心信号**: 社区对 Kimi Code CLI 的期待正从"一次性 CLI 助手"向"具备项目级记忆能力的长期协作者"演进。这一方向也契合当前 AI 编程工具（如 Cursor、Cline）的主流演进路线。

---

## 💡 开发者关注点

基于今日可观察的 Issue 与 PR 数据，可归纳出以下两点：

1. **会话级稳定性仍是痛点**
   - PR #2324 暴露了 web 模式下子进程生命周期管理的边界问题，说明在长时间会话、自动化部署等真实场景下，CLI 的进程管理鲁棒性仍有改进空间。

2. **底层细节影响交互体验**
   - PR #2449 虽是一个 string 工具的边界条件修复，但反映出社区贡献者已开始关注**终端渲染可读性**等用户感知层面的细节，有助于提升产品的整体质感。

3. **项目级智能体能力是长期期待**
   - Issue #1283 的长期活跃印证了开发者对 Kimi Code CLI 在记忆、上下文管理、项目模式学习等"智能化纵深"能力上的迫切需求——这将是未来版本差异化竞争的关键。

---

*报告生成时间: 2026-08-13 ｜ 数据范围: 过去 24 小时 GitHub 公开动态*
*注: 由于今日仓库活跃度较低（1 Issue + 2 PR），日报已如实呈现所有可用数据，未做内容填充。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-13**

---

## 1. 今日速览

OpenCode 过去 24 小时密集发布了 v1.18.17 与 v1.18.18 两个补丁版本，核心修复围绕 Kimi/Moonshot 系统提示词与会话压缩稳定性；社区侧热度集中在「Zen 免费额度误判」与「Go 订阅后仍受限」的计费类投诉，以及 Mermaid 渲染、热重载配置、多模型 function calling 等高频功能诉求。

---

## 2. 版本发布

### v1.18.18
- **修复**：正确为官方 Moonshot 与 Kimi provider 选择 Kimi 系统提示词（呼应 #41031）。

### v1.18.17
- **会话压缩**：保留最近完整轮次，并为小模型生成更清晰的摘要。
- **MERGE Gateway**：补齐推理变体（reasoning variants），让对应模型选项可正常工作（@MatthewFeroz）。
- **重试限流**：对自动会话重试加上上限与抖动（jitter），避免持续重试风暴。

---

## 3. 社区热点 Issues

1. **#14273**「Free usage exceeded」误判（40 评论，已关闭）  
   用户在 Zen 余额充足时仍被提示免费额度耗尽，是 Zen 配额/计费链路反复出现的根因之一。👉 https://github.com/anomalyco/opencode/issues/14273

2. **#4832** Gemini 3 Pro function calling 失败 — 缺 `thoughtSignature`（35 评论，已关闭，👍14）  
   长尾高赞 Bug，反映 OpenCode 在 Gemini 系列 tool-use 协议兼容性上仍滞后。👉 https://github.com/anomalyco/opencode/issues/4832

3. **#6815** 配置热重载命令面板（8 评论，已关闭，👍88）  
   88 个 👍 是当日最高票。开发者频繁改动 `opencode.json`、`AGENTS.md` 后手动重启体验差，社区对"不重启生效"诉求极强。👉 https://github.com/anomalyco/opencode/issues/6815

4. **#3366** Mermaid 在 Chat 内渲染（10 评论，已关闭，👍26）  
   对应 PR #42179 已落地 `gitGraph` 渲染，热度持续可见。👉 https://github.com/anomalyco/opencode/issues/3366

5. **#41470**「Copied to clipboard」不生效（11 评论，未关闭）  
   VSCode Server / Docker 环境中剪贴板桥接失效，影响复制 session 内容的常见操作。👉 https://github.com/anomalyco/opencode/issues/41470

6. **#33027** MCP 工具已连接但未暴露给 agent（7 评论，未关闭）  
   MCP 服务器 `tools/list` 返回正常但 agent 侧工具列表缺失，疑似权限/作用域映射问题。👉 https://github.com/anomalyco/opencode/issues/33027

7. **#19005** 终端输出中的本地文件路径不可点击（7 评论，未关闭）  
   终端可点击路径（hyperlink）是开发者每日高频操作，呼声稳定。👉 https://github.com/anomalyco/opencode/issues/19005

8. **#33495** Zen 余额无法解除免费额度上限（6 评论，未关闭）  
   与 #14273 / #42128 同源，付费用户仍撞 200 次/免费上限，计费策略需要更清晰的边界。👉 https://github.com/anomalyco/opencode/issues/33495

9. **#17073** `grep/glob` 结果中 `.env` 保护范围不足（6 评论，未关闭）  
   权限规则当前基于 pattern 而非匹配路径，存在敏感文件泄露的安全隐患。👉 https://github.com/anomalyco/opencode/issues/17073

10. **#42128** DeepSeek V4 Flash 首次请求即触发「Free usage exceeded」（7 评论，已关闭）  
    "首请求即超限"是典型配额同步/会话级缓存问题，影响新用户体验。👉 https://github.com/anomalyco/opencode/issues/42128

---

## 4. 重要 PR 进展

1. **#42202** feat(opencode): 添加 per-session budget limit（新增功能，未合并）  
   为每个会话加入成本预算与 TUI 侧栏的预算小部件，超额即停止 assistant。👉 https://github.com/anomalyco/opencode/pull/42202

2. **#42169** fix(core): 恢复 `workspace.project_id` 兼容映射（修复 #42170）  
   桌面端加载 session 时 `no such column: project_id` 的直接修复。👉 https://github.com/anomalyco/opencode/pull/42169

3. **#41977** refactor(app): 对齐 SolidJS 最佳实践（重构）  
   涉及 `packages/app`、`packages/ui`、`packages/session-ui`，统一 JSX 传值风格以减少不必要的 signal 解包。👉 https://github.com/anomalyco/opencode/pull/41977

4. **#42199** / #42193** feat(desktop): WSL 切换至 opencode2 并强制 CLI 版本匹配（已合并）  
   Desktop WSL 服务端从 opencode 迁移至 opencode2，使用官方 V2 安装器的 `--version` 锁定。👉 https://github.com/anomalyco/opencode/pull/42199

5. **#42194** / #42192** refactor(desktop): 本地 server 从源码启动（已合并）  
   本地 Desktop 启动不再做生产 CLI 原生构建，保留下载/打包路径不变。👉 https://github.com/anomalyco/opencode/pull/42194

6. **#42179** feat(tui): 渲染 Mermaid `gitGraph`（已合并）  
   将 Mermaid `gitGraph` 围栏以终端原生垂直 commit 图渲染，实现 #3366 的部分诉求。👉 https://github.com/anomalyco/opencode/pull/42179

7. **#42203** fix(core): 当权限全部放行时跳过 shell 解析（已合并）  
   允许"无条件 shell 策略"沙箱免加载 tree-sitter，减少启动开销。👉 https://github.com/anomalyco/opencode/pull/42203

8. **#42201** feat(catalog): 自动生成每张截图的 Open Graph 卡片（已合并）  
   分享链接时每张屏幕/主题对自动生成 1200x630 预览图，附带 per-URL meta 注入。👉 https://github.com/anomalyco/opencode/pull/42201

9. **#42183** feat(catalog): 点击标注截图并对接 GitHub issue（已合并）  
   在 catalog 中按 `A` 即可在终端单元旁写批注，自动转为带可读注释的 prefilled GitHub issue。👉 https://github.com/anomalyco/opencode/pull/42183

10. **#42151** chore(ci): bun 脚本失败用 `::warning::` 暴露（已合并，修复 #42157）  
    `close-prs` 工作流非零退出码现在会以 annotation 形式浮出运行日志。👉 https://github.com/anomalyco/opencode/pull/42151

---

## 5. 功能需求趋势

- **配置/会话热重载**：#6815 的 88 票是单日最高赞，开发者期望改动 `opencode.json`、`AGENTS.md` 后无需重启。
- **终端能力增强**：Mermaid 渲染（`gitGraph` 已落地）、本地路径可点击（#19005）、多行队列提示截断（#42196），TUI 可读性是持续热点。
- **MCP 生态深化**：#33027（工具未暴露）、#40111（per-MCP-server 信任配置）、#42204（Proxmox MCP MVP）共同指向 MCP 在企业内网/自托管场景下的可配置性与可观测性需求。
- **新模型适配**：Gemini 3 Pro `thoughtSignature`（#4832）、Azure 大模型 Responses API 流式挂起（#42147）、Nemotron 3 Ultra 速度（#42168）、MiniMax 系统提示词（#41031）——大模型接入层仍是首要工程债。
- **计费与配额可见性**：Zen 免费额度边界（#14273 / #42128 / #33495）、Go 订阅后限额（#42132 / #42140 / #42154）形成当日最大投诉簇。

---

## 6. 开发者关注点

- **付费体验的不一致**：已订阅 OpenCode Go 的用户反复撞到 "Free usage exceeded" 弹窗，且 DeepSeek V4 Flash 在部分地区被限制使用（#42132、#42140、#42154），直接影响订阅续费意愿。
- **MCP 工具可用性 vs 可见性**：连接成功 ≠ agent 可见，权限/作用域映射需要更明确的诊断路径（#33027、#40111）。
- **大模型适配延迟**：Azure Responses API 流式（#42147）、GitHub Copilot 400 重启会话（#42089）、DeepSeek 多轮 `/responses` 失败（#42135）提示 provider 适配矩阵仍需加固。
- **稳定性与错误恢复**：实例 bootstrap 僵尸进程（#41806）、LLM 无限重试（#41848）、迁移状态轮询中断（#42188）—— 错误处理与重试上限已成系统性议题（v1.18.17 已开始修正）。
- **安全边界**：`.env` 类敏感文件在 `grep/glob` 上下文中的可见性（#17073）暴露了当前权限模型在"匹配路径"维度的盲区。

---

*数据来源：github.com/anomalyco/opencode（Releases / Issues / Pull Requests，过去 24 小时）*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-13

## 📌 今日速览

今日 Pi 仓库活跃度较高，Issues 与 PR 集中于**性能瓶颈修复**与**本地/新模型生态扩展**：上下文自动压缩失效（#6879）与 Mac 长会话高 CPU（#7730）成为社区最关心的稳定性痛点；同时 Ollama 本地代理、Grok 4.6、MiniMax 图生图、Anthropic Vertex 等多模型接入 PR 集中推进，HTML 导出支持 Mermaid 渲染等功能也已完成合并。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。最新稳定版本仍为 0.83.x / 0.84.x 系列（参考 #7585 环境信息）。

---

## 🔥 社区热点 Issues

| # | Issue | 标题 | 评论 | 👍 | 要点 |
|---|------|------|-----|----|----|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | OPEN | auto-compaction 超过 100% 后不触发，直至 provider 报错 | 18 | 17 | **头号痛点**：agent turn 中 context 已爆表但 compaction 不启动，直到 API 在 373k tokens 拒绝请求；建议在每个 agent step 后检查阈值 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | OPEN | Mac OS 长会话高 CPU（50%-110%） | 11 | 8 | 内存占用 600-800MB，初步定位与 context 大小/会话长度相关，性能问题待排查 |
| [#7836](https://github.com/earendil-works/pi/issues/7836) | OPEN | Edit 模糊匹配在空白长度差异时失败 | 9 | 1 | `normalizeForFuzzyMatch` 未折叠空白，导致小模型 `oldText` 匹配失败；正在修复中 |
| [#7683](https://github.com/earendil-works/pi/issues/7683) | CLOSED | pi-tui 组件应能接收自身行的鼠标事件 | 9 | 0 | 提议 `Component.onMouse?(event)` API，已被 #8032/#8037 落地 |
| [#7585](https://github.com/earendil-works/pi/issues/7585) | CLOSED | Kitty 图形协议在 Ghostty 的 `ctx.ui.custom()` 中不渲染 | 5 | 0 | pi 已识别 Kitty 支持，但 `Image` 组件经 `custom()` 后显示空白 |
| [#7835](https://github.com/earendil-works/pi/issues/7835) | OPEN | Edit 工具拒绝单对象形式的 `edits` 参数 | 4 | 0 | 部分模型把 `edits` 包成单个对象，导致工具报错；已在修复 |
| [#7765](https://github.com/earendil-works/pi/issues/7765) | CLOSED | 全屏 TUI 鼠标滚轮步长硬编码为 1 行 | 4 | 1 | 已合并为 `wheelScrollLines` 配置项 |
| [#6165](https://github.com/earendil-works/pi/issues/6165) | CLOSED | 新增 Scaleway Generative APIs LLM provider | 4 | 2 | 法国 EU 托管开源模型、零数据保留，社区地域合规需求 |
| [#8000](https://github.com/earendil-works/pi/issues/8000) | OPEN | `@` 文件自动补全深层匹配胜出直接子目录 | 3 | 0 | scoped 目录下的 basename 排序不合理，子目录项目排序靠后 |
| [#7783](https://github.com/earendil-works/pi/issues/7783) | CLOSED | `agent_end` 中 `triggerTurn:false` 仍启动一轮 | 3 | 0 | 已由 #8022 修复 |

**社区反应**：稳定性（context 管理、CPU、wire 协议）仍是开发者最高优先级；UI/TUI 交互细节（鼠标事件、滚动、模糊匹配）也获得大量关注。

---

## 🛠️ 重要 PR 进展

| # | PR | 标题 | 状态 | 内容摘要 |
|---|----|------|-----|---------|
| [#8052](https://github.com/earendil-works/pi/pull/8052) | fix | session persistence 改为事务式 | 已合并 | `SessionManager._appendEntry()` 先写盘再更新内存图，避免 `ENOSPC` 造成会话图断裂 |
| [#7982](https://github.com/earendil-works/pi/pull/7982) | fix | 保留流式事件中的 `usage` | 已合并 | 修复 #7911：在 JSON/RPC `message_update` 上保留累计 usage，但不引入重复快照，附带回归测试 |
| [#8049](https://github.com/earendil-works/pi/pull/8049) | feat | 本地 Ollama 模型代理 | 已合并 | 两个零依赖 Node 18+ 脚本，让 pi 通过本地代理直接调用 Ollama 模型（Linux/macOS/Windows） |
| [#8044](https://github.com/earendil-works/pi/pull/8044) | fix(bedrock) | 暴露安全的流式失败诊断 | 已合并 | 对 Bedrock send/stream 失败分类并保留终止诊断与 tool-call 元数据 |
| [#8042](https://github.com/earendil-works/pi/pull/8042) | feat(ai) | 新增 Grok 4.6 | 已合并 | 将 Grok 4.6 加入 xAI Responses 模型集，保留 low/medium/high/xhigh 推理档位 |
| [#7956](https://github.com/earendil-works/pi/pull/7956) | feat | HTML 导出支持 Mermaid 渲染 | 已合并 | 复用工具调用 ANSI→HTML 渲染逻辑，默认关闭，header 可切换 |
| [#8039](https://github.com/earendil-works/pi/pull/8039) | feat | 新增 `/add-local-model` 示例扩展 | 已合并 | 交互式注册 endpoint/API key/model/context window，支持自动探测 |
| [#8037](https://github.com/earendil-works/pi/pull/8037) | feat(tui) | 组件级 `onMouse` 调度 | 已合并 | 落地 #7683：组件可接收自身 LayoutBox 的鼠标事件，扩展 widget 可观察滚轮/SGR |
| [#8030](https://github.com/earendil-works/pi/pull/8030) | feat(ai) | MiniMax 图生图 | 已合并 | 注册全球与 CN image 生成 provider，URL/base64 响应解析 |
| [#8012](https://github.com/earendil-works/pi/pull/8012) | fix | 不把根目录 md 作为 skill | OPEN | 修复 #7805：`README.md`/`AGENTS.md` 不再被误识别为 skill，消除 validation 警告 |
| [#8022](https://github.com/earendil-works/pi/pull/8022) | fix | `triggerTurn:false` 不应启动 turn | 已合并 | `sendCustomMessage` 不再走 `agent.steer()`，避免消耗额外响应 |
| [#5262](https://github.com/earendil-works/pi/pull/5262) | feat | Anthropic Vertex provider | OPEN | 适配 AnthropicVertex SDK，复用现有 Anthropic 流式路径 |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | feat | 主题覆盖 `--use-theme` | 进行中 | 支持单主题与昼夜双主题语法，仅作用于当前运行 |
| [#7970](https://github.com/earendil-works/pi/pull/7970) | feat | 滚动指示器 `↓` | OPEN | 在 transcript 未跟随底部时显示箭头，滚到底自动消失 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issues 与 PR 提炼出以下方向热度：

1. **本地模型生态（高）**：Ollama 代理 (#8049/#8050)、`/add-local-model` 扩展 (#8039)、llama.cpp 列出所有模型 (#8051) — 离线/隐私场景需求旺盛。
2. **新模型与多 provider 接入（高）**：Grok 4.6 (#8042)、MiniMax 图生图 (#8030)、MiniMax 同步语音生成 (#8014)、Scaleway (#6165)、Anthropic Vertex (#5262) — 生态扩张持续。
3. **性能与稳定性（高）**：auto-compaction 失效 (#6879)、Mac CPU 占用 (#7730)、prompt editor 长 buffer 卡顿 (#8029)、HTML 导出 Mermaid/LaTeX 渲染 (#8041)。
4. **TUI 体验迭代（中）**：组件级鼠标事件 (#7683/#8032/#8037)、滚轮步长可配 (#7765)、主题覆盖 (#7722)、CJK 终端宽度计算 (#8055)。
5. **Wire 协议与扩展 API（中）**：`usage` 字段保留 (#7982)、`triggerTurn:false` (#8022)、`publishMessage` Promise API (#8023)、`message_start` 显示控制 (#8035)。

---

## 🧑‍💻 开发者关注点

1. **Context 管理失控**是当下最强烈的痛点——长 agent turn 中 compaction 不自动触发，最终依赖 API 报错才回滚，已影响线上稳定性（#6879）。
2. **TUI 输入性能**成为新增焦点：#8029 报告 ~7000 行 buffer 的 prompt editor 单次方向键耗时 1650ms，呈现线性劣化。
3. **扩展 API 形态趋稳但仍有缺口**：开发者希望发送自定义消息时获得 `Promise<{ entryId }>` 确认（#8023），以及对显示内容的拦截能力（#8035），推动扩展成为一等公民。
4. **本地推理需求上升**：欧洲合规（Scaleway）与隐私/离线（Ollama、llama.cpp）双线驱动，社区期待更轻量的接入路径（已通过 PR #8049/#8039 给出方案）。
5. **WSL / 跨平台细节**逐步进入视野：#8054 希望在 WSL 下能把 Linux 路径正确转换为 Windows Terminal 可打开的 URI；#8055 关注 CJK 终端下 Ambiguous-width 字符宽度导致表格错位——国际化使用体验正受到越来越多关注。

---

*数据来源：GitHub `badlogic/pi-mono`（earendil-works/pi），统计窗口 2026-08-12 ~ 2026-08-13。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**：2026-08-13  
**数据来源**：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 1. 今日速览

Qwen Code Desktop 在 24 小时内连续发布 v0.2.0 与 v0.2.1 双版本迭代，社区焦点集中在 **长任务执行稳定性（Issue #8963）**、**0.21.2 回归（图像读取崩溃 #8957）** 以及 **内存/会话守护的可靠性（#7040、#8678）**。PR 端则出现密集的 `/review` 技能与 CI 流水线改造（#8994、#9020、#9027 等），同时 `qwen serve` 的通道管理与 ACP 缓冲限流修复进入主线，整体进入 **质量打磨 + 服务化加固** 阶段。

---

## 2. 版本发布

### desktop-v0.2.1 & desktop-v0.2.0 — Qwen Code Desktop

| 项目 | 内容 |
|---|---|
| **版本** | v0.2.1（最新） / v0.2.0 |
| **范围** | Qwen Code Desktop 桌面客户端 |
| **关键变更（v0.2.0）** | `fix(web-shell): stabilize transcript history pagination`（#8914）、`feat(web-shell): Share session catalog` |
| **配套** | Benchmark-Qwen-Ref: v0.21.2 |

相关讨论：
- [Issue #8596](https://github.com/QwenLM/qwen-code/issues/8596)：提议弃用 Electron 版 `packages/desktop`、由 Tauri `desktop-shell` 接管命名 — 反映团队正在统一桌面技术栈。
- [Issue #8985](https://github.com/QwenLM/qwen-code/issues/8985)：项目列表在滚动条出现时图标抖动。

---

## 3. 社区热点 Issues（精选 10 条）

### 🔴 P1 / 高优先级 Bug

**1. [#8678 — P1] fix(serve): 大会话恢复超时导致当前会话丢失**
- 来源：[QwenLM/qwen-code#8678](https://github.com/QwenLM/qwen-code/issues/8678)
- 评论：7 | 更新：2026-08-12
- 关键点：守护进程在大体量 restore 超时时会丢失当前会话。PR #8691（`Make session restore timeouts safe and observable`）已合并，提供可配置超时契约、迟到请求保护与可观测性。

**2. [#9015 — P1] Main CI 失败：E2E Tests on 05079297d26c**
- 来源：[QwenLM/qwen-code#9015](https://github.com/QwenLM/qwen-code/issues/9015)
- 评论：4 | 更新：2026-08-12
- 关键点：`main` 分支 CI 在出报告前即失败，由 dev-bot 按 commit 自动追踪。涉及 `E2E Tests` workflow（Run ID 31609744914）。

**3. [#9005 — P1] Anthropic wire 缺失 OpenAI wire 已有的流式安全保护**
- 来源：[QwenLM/qwen-code#9005](https://github.com/QwenLM/qwen-code/issues/9005)
- 评论：3 | 更新：2026-08-12
- 关键点：`anthropicContentGenerator` 在打平/重组、断连恢复等场景下尚缺与 OpenAI 路径对等的流式安全护栏；`@anthropic-ai/sdk` 还停在 `^0.36.1`（2025-01）。

### 🟠 P2 / 体验与稳定性

**4. [#8963 — P2] 「不能自动运行」— 任意模式下 Python 脚本/命令直接卡住**
- 来源：[QwenLM/qwen-code#8963](https://github.com/QwenLM/qwen-code/issues/8963)
- 评论：9 | 状态：need-information
- 关键点：无论 `yolo` 或 `auto` 模式均无法运行长任务（"无法完成需要一整夜或数天的长任务"）。用户对比 Kimi Code 后表示 UI 稳定性、闪烁、mode 准确性全面落败。**这是本日社区情绪最强烈的反馈**。

**5. [#8957 — P2] [Regression] 0.21.2 起加载图片即崩溃**
- 来源：[QwenLM/qwen-code#8957](https://github.com/QwenLM/qwen-code/issues/8957)
- 评论：8 | 状态：need-retesting
- 关键点：`0.21.1` 之后所有图像读取触发瞬时崩溃，标记为回归，需要在最新版本验证修复。

**6. [#7040 — P2] RFC: 可靠的自动记忆召回 — 时序、质量与遥测**
- 来源：[QwenLM/qwen-code#7040](https://github.com/QwenLM/qwen-code/issues/7040)
- 评论：10
- 关键点：横跨多周的 RFC，已合并 #7393（telemetry）、#8716（bounded recall + precision）在评审。属「核心 / memory」路线图核心议题。

**7. [#8562 — P2] Mac → iTerm2 → SSH → Ubuntu → tmux 闪屏**
- 来源：[QwenLM/qwen-code#8562](https://github.com/QwenLM/qwen-code/issues/8562)
- 评论：7
- 关键点：tmux 分屏内对话时闪烁（仅分屏内，非整屏），用户用 Qwen 3.8 Max 排查后定位为 Qwen Code 版本问题，影响远程开发体验。

**8. [#8097 — P2] 后台 Agent 协调缺陷：重复工作、提前完成、`send_message` 非交互失效**
- 来源：[QwenLM/qwen-code#8097](https://github.com/QwenLM/qwen-code/issues/8097)
- 评论：6
- 关键点：多 Agent 并行 + `send_message` 中途通信时，父 Agent 会重复子 Agent 工作；属 multi-agent roadmap 关键问题。

**9. [#9016 — P2] Vertex AI 无法用 Application Default Credentials 认证**
- 来源：[QwenLM/qwen-code#9016](https://github.com/QwenLM/qwen-code/issues/9016)
- 评论：4
- 关键点：Vertex AI 强制要求 API Key，而任何 Key 又导致 401；ADC 配置完整仍被拒，影响企业用户上云。

**10. [#8922 — P2] Shell 忽略 `tools.truncateToolOutputThreshold` 配置**
- 来源：[QwenLM/qwen-code#8922](https://github.com/QwenLM/qwen-code/issues/8922)
- 评论：4
- 关键点：官方文档承诺 Shell 读取该配置，实际却固定使用 30,000 字符上限；属于配置契约与实现不一致。

> 同期重要补充：#8897（`--approval-mode` / `--auth-type` 不出现在 `--help`，评论 5）、#7306（工具输出预算 / 产物生命周期加固，评论 5）、#9002（Python SDK 拒绝 `permission_mode="auto"`，评论 3 — 已被 PR #9003 修复）。

---

## 4. 重要 PR 进展（精选 10 条）

### 服务化与守护进程

**1. [#8905 — autofix/takeover] feat(serve): 自适应扩张 live-journal 容量**
- 来源：[QwenLM/qwen-code#8905](https://github.com/QwenLM/qwen-code/pull/8905)
- 当会话超出 live-journal 上限时，先尝试翻倍扩容（条目与字节等比），再回退到丢弃最早 replay 条目；避免长回合被无谓截断。

**2. [#8978 — self-reported] feat(serve): 空 channel 集合空操作 + 仅恢复活动 channel**
- 来源：[QwenLM/qwen-code#8978](https://github.com/QwenLM/qwen-code/pull/8978)
- 解决 `qwen serve --channel all` 在无 channel 时 `exit(1)` 导致整 daemon 宕机的问题；orchestrator 重启场景下只恢复此前活动的 channel。

**3. [#9007] fix(serve): 按字节限制 ACP HTTP pre-attach 缓冲**
- 来源：[QwenLM/qwen-code#9007](https://github.com/QwenLM/qwen-code/pull/9007)
- `doudouOUC` 主笔，沿用 #7306 / #8447 的 65,536 字节契约；ACP 通道在连接建立前的缓冲受控。

**4. [#8972 — autofix/takeover] feat(core): workflow agent 可钉住目录并突破默认边界**
- 来源：[QwenLM/qwen-code#8972](https://github.com/QwenLM/qwen-code/pull/8972)
- `agent({workingDir})` 可在调用者已有的 git worktree 中运行；既不创建新 worktree，也不离开 cwd；让长时间、非原地的工作流子任务成为一等公民。

### `/review` 技能 — 系列化加固

**5. [#8994 — autofix/takeover] feat(cli): `/review` 新增 attribution / default effort / default comment 设置**
- 来源：[QwenLM/qwen-code#8994](https://github.com/QwenLM/qwen-code/pull/8994)
- 仅从 system → user → system 三个不可被仓库 `.qwen/settings.json` 污染的作用域解析；防止「仓库内容控制对自己代码 review 的策略」。

**6. [#9027] feat(cli): 清理 unattributed `/review` 中的 AI 模板痕迹**
- 来源：[QwenLM/qwen-code#9027](https://github.com/QwenLM/qwen-code/pull/9027)
- 叠加在 #8994 之上：去除 `**[Critical]**` / `**[Suggestion]**` 等方括号前缀与机器口吻。

**7. [#9020] fix(review): 闭合内联引号缺口并加固 layer gate**
- 来源：[QwenLM/qwen-code#9020](https://github.com/QwenLM/qwen-code/pull/9020)
- 跟进 #8956：将手工栅栏扫描器替换为权威 CommonMark 解析器后，处理 source read receipt 中的内联级引号缺口。

**8. [#8996] feat(autofix): 用内容而非作者判断 review 反馈有效性**
- 来源：[QwenLM/qwen-code#8996](https://github.com/QwenLM/qwen-code/pull/8996)
- 信任层（who）与预算层（how much）已就位，本 PR 引入「机械级的真假校验」，按置信度判断 review claim 是否成立。

### Web Shell 与 Desktop

**9. [#8848 — self-reported] feat(web-shell): Channel 策略与 workspace 管理重构**
- 来源：[QwenLM/qwen-code#8848](https://github.com/QwenLM/qwen-code/pull/8848)
- 暴露 direct-message、group-access、session-routing、workspace-ownership 四类共享控制；操作者可统一配置发件人/群组策略、allowlist、会话路由。

**10. [#8874 — autofix/takeover] feat(web-shell): 支持 workspace 文件上传**
- 来源：[QwenLM/qwen-code#8874](https://github.com/QwenLM/qwen-code/pull/8874)
- 拖拽或通过 `@` 文件面板上传，多文件顺序上传、显示进度、可取消、冲突自动重命名、内联预览。

> 同期值得关注的还有 #9001（ECS runner 缓存 actionlint / shellcheck）、#8982（缓解 ENOSPC 与负载敏感的 test flake）、#8927（按 channel `sessionRotation` 限制会话生命周期）。

---

## 5. 功能需求趋势

| 方向 | 关键信号 | 代表条目 |
|---|---|---|
| **多 Agent 协调与后台任务** | 重复工作、提前完成、`send_message` 非交互失效，是 roadmap 重点 | #8097、#8972、#8357 |
| **记忆 / 上下文工程** | auto-memory recall 时序、AGENTS.md 层级发现、pinned memory 守护 | #7040、#6101、#8357 |
| **认证与多模型接入** | Vertex AI ADC、Anthropic 流式安全、Claude hooks 双清单 | #9016、#9005、#8584（已关闭）、#8626 |
| **`/review` 与代码评审自治** | attribution、effort、AI 模板痕迹清理、反馈真实性判定 | #8994、#9020、#9027、#8996 |
| **Web Shell / Desktop 体验** | Channel 管理、文件上传、闪屏、滚动条抖动、Electron 弃用 | #8562、#8848、#8874、#8596、#8985 |
| **服务化与守护进程** | 通道、会话旋转、ACP 缓冲、live-journal | #8978、#8927、#8905、#9007、#8678 |
| **Omni 多模态** | 多模态接入实验路线图（`omni-experiment` 分支） | #8197 |

---

## 6. 开发者关注点（社区痛点摘要）

1. **长任务无法推进（最高呼声）** — Issue #8963 一夜得到 9 条评论，反映用户对「跑一整夜/数日」级别的任务极度依赖却无法在 Qwen Code 上完成；与 Kimi Code 对比后情绪明显失望。**建议**：尽快恢复非交互 headless 下的稳健命令执行能力。
2. **回归问题被严格对待** — #8957（图片加载崩溃）评论 8，明确标注 regression 并要求 retest，说明社区对版本质量基线敏感。
3. **配置契约 ≠ 实现** — `tools.truncateToolOutputThreshold`（#8922）、`--help` 缺字段（#8897）、`permission_mode="auto"` 在 SDK 不被接受（#9002）三连击，提示 CLI/SDK/文档三角存在漂移。
4. **tmux / SSH 远程开发体验** — #8562 让 Linux + tmux 用户的开发

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / CodeWhale 社区动态日报
**日期：2026-08-13**

> ⚠️ **重要品牌变更**：本项目已正式更名为 **CodeWhale**（来自 Shannon Labs 的公开产品 `codewhale`）。原 `deepseek-tui` npm 包已弃用，不再发布新版本。本文仍按用户要求标题为 "DeepSeek TUI"，但下文统一使用新名称 **CodeWhale**。

---

## 1. 今日速览

CodeWhale 在 24 小时内发布了 **v0.9.6 重大版本**，正式完成品牌切换并弃用旧 npm 包；社区同步推进 **v0.9.7 计划**，主仓涌现多个"Harvest"（收割）PR——维护者将因 base drift 无法合入的社区 PR 重新基线合入主线，体现开放治理流程；此外，**安全修复 RUSTSEC-2026-0253**（`lru` 0.16.4 panic 问题）已升级到 0.18 修复。

---

## 2. 版本发布

### 🚀 v0.9.6（2026-08-12 发布）

- **品牌正式切换**：`codewhale` 命令、npm 包、release-asset 名称沿用小写技术标识符。
- **Legacy 包弃用**：`deepseek-tui` 不再发布新版本，迁移指引请参考 Release Notes。
- **向后兼容**：v0.8.x 旧用户需按升级路径迁移。

📎 Release：https://github.com/Hmbown/CodeWhale/releases

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **讨论："Constitution"中文译法**（"宪法" vs "协作准则"） | OPEN | 9 条评论，中英文双语讨论；反映项目治理文档翻译需要中文母语者共识 |
| [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) | **功能请求：`/stop` 命令与运行时 STOP 词拦截** | OPEN | 8 条评论；YOLO 自主模式下需要机械化的工具调用硬中断机制 |
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005：TUI Crate 分解总览** | OPEN | 5 条评论；TUI 模块解耦的伞形 EPIC，决定后续架构走向 |
| [#5097](https://github.com/Hmbown/CodeWhale/issues/5097) | **CodeWhale 是否被官方认可为 DeepSeek Coding Agent？** | CLOSED | 5 条评论；用户指出 YouTube/B 站视频中推荐的是 Reasonix，引发品牌定位讨论 |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | **[Bug] 切换 provider 时残留不相关默认模型** | CLOSED | 5 条评论；v0.9.5 关键可靠性 bug，已修复 |
| [#5270](https://github.com/Hmbown/CodeWhale/issues/5270) | **v0.9.5 统一任务面板**（shell + 子代理 + 持久 worker） | CLOSED | 4 条评论；Fleet / Lane / Workflow 三者融合 |
| [#3307](https://github.com/Hmbown/CodeWhale/issues/3307) | **v0.9.3 从最大 Rust 文件提取内联测试** | CLOSED | 4 条评论；生产代码可读性 + 减少 merge 冲突面 |
| [#5209](https://github.com/Hmbown/CodeWhale/issues/5209) | **[Bug] `File action=edit` 接受错误参数名并报假成功** | CLOSED | 4 条评论；同一位置需重试 3-5 次，严重影响编辑体验 |
| [#4650](https://github.com/Hmbown/CodeWhale/issues/4650) | **v0.9.1 完成看板 & 严格发布门禁** | OPEN | 4 条评论；release-blocker 标签，对外发布的把关点 |
| [#5323](https://github.com/Hmbown/CodeWhale/issues/5323) | **[Bug] v0.9.5 回归：Auto-Review 静默阻断所有 Bash/Write** | OPEN | 3 条评论；v0.9.5 引入的严重回归，需立即修复 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 内容 |
|---|----|----|
| [#5329](https://github.com/Hmbown/CodeWhale/pull/5329) | **安全修复：`lru` 升级 0.18 解决 RUSTSEC-2026-0253** | `LruCache::pop()` panic 不安全可能导致悬空指针，已升级到 0.18.2 修复（已合并） |
| [#5328](https://github.com/Hmbown/CodeWhale/pull/5328) | **FEAT-014：命令契约 crate 边界（facets + 共享类型）** | EPIC-005/006 第一阶段，无生产重连，仅探索命令迁移形态 |
| [#5339](https://github.com/Hmbown/CodeWhale/pull/5339) | **fix(engine)：屏蔽子代理持有的 shell 完成事件** | 父模型流不再被 child-owned 后台 shell 完成事件污染，closes #5325 |
| [#5336](https://github.com/Hmbown/CodeWhale/pull/5336) | **fix(mcp)：无后续分页时省略 nextCursor** | 修复 MCP 规范违反（Claude Code 等严格客户端会拒绝 `null` 字段），closes #5335 |
| [#5338](https://github.com/Hmbown/CodeWhale/pull/5338) | **feat(web)：docs/guide 页面迁移至字典骨架** | 移除 `isZh` 三元判断，启动 #5337 多 PR 重构序列 |
| [#5333](https://github.com/Hmbown/CodeWhale/pull/5333) | **feat(tui)：固定宿主机终端为常驻顶层 mini 窗口** | 收割社区 PR #5318（SparkofSpike），v0.9.7 首位贡献者集成 |
| [#5330](https://github.com/Hmbown/CodeWhale/pull/5330) | **fix(session)：分离快照读与崩溃恢复** | 收割 PR #5320（h3c-hexin），增加 `load_session_snapshot` / `recover_session_for_resume` |
| [#5332](https://github.com/Hmbown/CodeWhale/pull/5332) | **feat(config)：注册 OrcaRouter 为具名 provider** | 收割 PR #5321（XiaoHuo888-hue），150+ OpenAI 兼容模型入口 |
| [#5327](https://github.com/Hmbown/CodeWhale/pull/5327) | **feat(tui)：交互式扩展管理器 `/plugin`** | 本地化插件管理，集中 bundle 生命周期，新老执行器隔离 |
| [#5326](https://github.com/Hmbown/CodeWhale/pull/5326) | **web：审计修复 — i18n parity、copy/spacing、测试修正** | 社区网站打磨：quote 检查、TM 术语、UI 间距 |

📌 **观察**："Harvest" 机制成为亮点——维护者针对因 base drift 在 CI 失败的社区 PR 进行重基线合入，避免优秀贡献流失。

---

## 5. 功能需求趋势

从 41 条更新 Issue 中可归纳出五大方向：

1. **🏗️ 架构解耦（高频）**：EPIC-005 TUI Crate 分解、命令契约 crate 边界（FEAT-014），反映单体架构向模块化 Rust 演进。
2. **🤖 子代理与多任务编排**：统一任务面板、子代理输出契约、提示作用域文件恢复，反映对"自主代理并行执行"体验的打磨。
3. **🔌 Provider / 模型扩展**：OrcaRouter、API key 多 provider 分存、自定义 provider（参考 Kimi Code）—— 摆脱单一模型锁定。
4. **🌐 国际化与文档治理**：i18n 字典骨架、zh-Hant partial-pack 退役、宪法中文译名讨论—— 跨语言社区协作标准化。
5. **🛠️ 工具可靠性**：检索/抓取路径统一、File 工具假成功修复、Auto-Review 回归、API key 全局持久化—— 核心交互链路的鲁棒性。

---

## 6. 开发者关注点

**主要痛点：**
- **v0.9.5 引入多项回归**：Auto-Review 静默拦截、终端宽屏不铺满、Copy message 携带 UI 装饰符，反映快速迭代中的质量回退。
- **网络层脆弱**：`https://api.deepseek.com/v1/chat/completions` 长会话后 flake（#4683、#4956），需要客户端重试/熔断。
- **平台差异**：Windows 上 `--model` / `--toolsets` 被吞并为单参数、WSL2 连接失败，跨平台 CLI 解析器需要硬化。
- **品牌认知错位**：YouTube/B 站推荐 Reasonix，社区担忧 CodeWhale 的官方地位。

**高频需求：**
- `/stop` 之类的运行时硬中断，**而非依赖模型本身响应文本**（机械化的安全网）。
- 多 provider / 多 API key 隔离管理，告别"切换模型 = 手动换 key"。
- 持续 agent 状态 + 签名压缩 KV cache capsule（#2904），降低长任务成本。
- 通知/Toast 系统的可操作性与一致性（#5041）。
- 一键 PiP 终端模式（#5318/#5333）—— 多任务场景刚需。

---

**数据说明**：报告基于 2026-08-12 滚动 24 小时窗口的 GitHub Issues / PRs / Releases 数据，共统计 41 条 Issue 更新、17 条 PR 更新、1 次 Release。链接全部指向 Hmbown/CodeWhale 仓库（已从 Hmbown/DeepSeek-TUI 迁移）。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*