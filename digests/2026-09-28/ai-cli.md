# AI CLI 工具社区动态日报 2026-09-28

> 生成时间: 2026-09-28 03:02 UTC | 覆盖工具: 9 个

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
**数据周期：2026-09-27 → 2026-09-28 UTC · 覆盖 9 款主流工具**

---

## 1. 生态全景

当前 AI CLI 工具市场已进入 **"质量收敛期"**——头部工具（Claude Code、Copilot CLI）从功能堆叠转向稳定性与跨平台一致性攻坚；腰部工具（Codex、Gemini CLI、Qwen Code）通过高频 alpha/nightly 发版推进核心能力；新兴玩家（OpenCode、Pi）则把目标放在协议化与生态扩展（MCP、ACP、Hook、DAP）层面。**Windows 平台兼容性、Sub-agent 可靠性、长会话 Compaction、MCP 治理、BYOK/本地模型**是横跨所有玩家的大众痛点，而 **凭证泄露、prompt injection 攻击面、配置漂移**等安全问题开始从技术圈外溢为社区系统性议题。

---

## 2. 各工具活跃度对比

| 工具 | Release | Issues 活动 | PR 活动 | 评估 |
|------|---------|-----------|---------|------|
| **Claude Code** | 0 | 50 | 1 | 维护期，Cowork 模块集中爆发 |
| **OpenAI Codex** | 6 alpha | 50（10 热） | ~35（10 重） | 高强度迭代，Windows 回归期 |
| **Gemini CLI** | 1 nightly | 50（10 热） | 10 | 基础设施加固 + P1 子代理问题 |
| **Copilot CLI** | 1（v1.0.89-5） | 数十（10 热） | 1（无实质） | UX 微调为主，PR 节奏放缓 |
| **Kimi Code** | — | 0 | 0 | 当日无活动 |
| **OpenCode** | 0 | 50（10 热） | 10+ | Bug 集中收尾，PR 数量最高之一 |
| **Pi** | 0 | 27（10 热） | 4 | 性能瓶颈被首次正式提出 |
| **Qwen Code** | 0 | ~50（10 热） | 11（3 closed） | Managed Agent 多阶段架构主导 |
| **DeepSeek TUI** | — | — | — | 当日无数据 |

**活跃度梯队**：
- 🟢 **超活跃**：Codex、Qwen Code、OpenCode（PR 数与 Issue 数双高）
- 🟡 **中等活跃**：Claude Code、Gemini CLI、Pi
- 🔴 **低活跃/静默**：Copilot CLI（PR 节奏放缓）、Kimi Code（24h 无活动）、DeepSeek TUI

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🪟 Windows 兼容性** | Codex、Claude Code、Copilot CLI、Qwen Code | Codex `CREATE_NO_WINDOW` 缺失、Claude Code OAuth 403 / 模型路由、Copilot CLI 桌面端认证死亡、Qwen Code macOS/ARM64 |
| **🔌 MCP 生态治理** | Claude Code、Codex、OpenCode、Pi、Copilot CLI | Codex 子进程僵尸泄漏（1300+ 进程 / 37GB）、Claude Code 抢占冲突、OpenCode 单帧 >10MiB 撕断、Pi Codemode+MCP 落地、Copilot CLI 重连风暴 |
| **🧠 Compaction / 长会话稳定性** | Claude Code、OpenCode、Pi、Copilot CLI | Claude Code macOS kevent64 卡死、OpenCode 压缩阈值与模型不匹配、Pi Compaction OOM 与 thinking 注入、Copilot CLI 任务上下文丢失 |
| **🔐 权限与安全粒度** | Claude Code、Copilot CLI、Qwen Code | Claude Code hook 注入面、Copilot CLI 全局 `permissions.allow`（👍43）、Qwen Code baseUrl 凭证泄露 |
| **🧩 BYOK / 本地模型** | Copilot CLI、OpenCode、Pi | Copilot CLI 模型选择器隐藏 BYOK（👍33）、OpenCode models.dev 全面失效、Pi llama.cpp Responses 工具调用损坏 |
| **🧒 Sub-agent 可靠性** | Gemini CLI、Claude Code、Pi、Qwen Code | Gemini CLI MAX_TURNS 误报成功、Claude Code Compaction 后技能路由失明、Pi Compaction 后 footer 崩溃 |
| **🌐 国际化 / TUI 体验** | OpenCode、Claude Code、Codex | OpenCode RTL 11 语种补全、Claude Code truecolor、Codex Mermaid 渲染 |
| **🧠 Auto Memory** | Gemini CLI、Qwen Code、Pi | Gemini CLI 脱敏时机、Qwen Code 结构化召回（PR #10183）、Pi 凭据持久化 |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | Cowork 多端协作 + Enterprise audit | 企业用户 / 安全合规团队 | Rust + macOS 优先（事件循环缺陷集中暴露） |
| **Codex** | 桌面 GUI + Remote / Handoff 多设备工作流 | Pro 用户 + 多设备团队 | Rust alpha 快速迭代 + Desktop/CLI/App 三端分发 |
| **Gemini CLI** | Sub-agent + Browser Agent + AST 工具链 | AI 研究者 / 重型工程用户 | 多 Provider（Vertex AI 兼容）+ 沙箱生态 |
| **Copilot CLI** | GitHub 原生集成 + 跨工具迁移（`.claude/rules` 兼容） | GitHub 生态开发者 | 依赖 GitHub Models + BYOK 扩展 |
| **OpenCode** | TUI 优先 + ACP/DAP/Hook 协议平台化 | 高级 CLI 用户 + 自动化工程师 | Bun + Provider 目录化（models.dev） |
| **Pi** | 沙箱化编程环境 + Extension 生态 | 扩展作者 + 工具链自研者 | Worker 隔离待落地 + llama.cpp/Bedrock 多 Provider |
| **Qwen Code** | Managed Agent 双引擎架构 + 持久化任务追踪 | 长生命周期 Agent 团队 | Stage B/D/H/W0e 多阶段 + Runtime Broker |
| **Kimi Code / DeepSeek TUI** | 数据缺失，无法判断 | — | — |

**关键差异化信号**：
- **Claude Code** 是唯一把"组织级安全审计"作为 PR 主线的工具（#97688）；
- **Codex** 是唯一明确支持 Remote/Handoff 多端工作流的工具；
- **Gemini CLI** 是唯一把"AST 感知文件读取"提为 EPIC 的工具；
- **OpenCode** 与 **Pi** 都在抢"协议平台"标签（ACP、DAP、Hook）；
- **Qwen Code** 的 Managed Agent 走"双引擎 + 持久化"重型路线，与其他玩家差异最大。

---

## 5. 社区热度与成熟度

### 成熟度梯队

| 梯队 | 工具 | 判断依据 |
|------|------|---------|
| **🥇 成熟期** | Claude Code、Copilot CLI | Issue 集中在稳定性与边缘场景；开始出现"长期未根治"积压（Codex #12491 7 个月） |
| **🥈 快速迭代期** | Codex、Gemini CLI、Qwen Code | 高频 alpha/nightly 发版；P1/P2 Issue 同时存在且大量合并 |
| **🥉 平台化转型期** | OpenCode、Pi | 大量精力投入协议合规与架构升级；社区开始提"性能预算" |
| **⚪ 静默期** | Kimi Code、DeepSeek TUI | 24h 无活动，需关注是否进入维护/停滞 |

### 关键观察

- **OpenCode 的"PR 池最密**：10+ 笔合并/推进，单日修复量最大；
- **Codex 的"Issue 热度最猛"**：#48074 获 ⭐77，是本期所有工具 Issue 点赞之首；
- **Claude Code 的"Issue 评论数最密集"**：#76694 35 条评论，反映 Cowork 模块的回归面之广；
- **Copilot CLI 的"PR 真空"**：仅 1 条疑似测试 PR，与 Issue 活跃度形成最大反差，提示维护者可能处于 triage 期；
- **Pi 的"#10040 期待度最高"**：Codemode + MCP 是社区公认的"里程碑级 PR"。

---

## 6. 值得关注的趋势信号

### 🔥 趋势 1：Compaction 从后台机制变成可配置对象
- Claude Code 出现"会话级 `/autocompact`"诉求（#97733）；
- Pi 三连击暴露 Compaction 在 Reasoning 模型下的边界失效（#10033、#9010、#10092）；
- OpenCode 修复 V2 TUI 压缩阈值回归（#38851）。
- **对开发者的意义**：长会话工程的可靠性成为衡量 Agent 工具的第一指标，建议在选型时优先测试 4+ 小时的 Compaction 行为。

### 🔥 趋势 2：MCP 治理从"协议支持"走向"生命周期管理"
- Codex 子进程泄漏 7 个月未根治（#12491）；
- Claude Code `tools/list` 协议回归（#88128）；
- Copilot CLI MCP 重连风暴（#4907）；
- OpenCode 单帧 >10MiB 撕断（#51743）。
- **对开发者的意义**：选择 MCP 兼容工具时，需重点验证子进程回收、断线重连、大帧传输这三大场景。

### 🔥 趋势 3：Sub-agent 体系成为质量瓶颈
- Gemini CLI P1 集中于 Sub-agent 误报与死锁（#22323、#21409）；
- Claude Code Compaction 后技能路由失明（#82017）；
- Pi、Qwen Code 都在投入子代理上下文隔离。
- **对开发者的意义**：复杂任务拆解场景下，Sub-agent 的"中断可见性"和"上下文传递"是关键决策因子。

### 🔥 趋势 4：Windows 平台从"次要端口"变成"公开短板"
- Codex 多个高赞 issue 明确指向 0.157.x 引入的 CREATE_NO_WINDOW 缺失；
- Claude Code 在 OAuth、模型路由、路径处理上 Windows 与 macOS/Linux 行为分裂；
- Qwen Code ARM64 Linux 才刚进入 release matrix。
- **对开发者的意义**：如果目标用户群体含 Windows 客户端，需做完整的平台兼容性测试矩阵。

### 🔥 趋势 5：BYOK / 本地模型从"加分项"变成"必需项"
- Copilot CLI BYOK 隐藏于模型选择器（#3709，👍33）+ 强制采样参数（#4950）；
- OpenCode models.dev 目录全挂（#51739）+ Anthropic 兼容 provider sub-agent 失败（#39456）；
- Pi llama.cpp Responses 工具调用损坏（#9974）。
- **对开发者的意义**：BYOK 体验的完整性（采样参数、reasoning 事件、schema 兼容）正成为企业自托管选型的硬指标。

### 🔥 趋势 6：安全边界被系统性审视
- Claude Code hook prompt injection 面（#94675）+ 组织级遥测不可篡改（#97688）；
- Qwen Code baseUrl 凭证泄露（#12856）；
- Codex MCP 子进程权限边界未明确。
- **对开发者的意义**：在生产环境部署时，需主动审计 hook 注入面、凭证序列化层、子进程权限边界。

### 🔥 趋势 7：协议平台化（ACP / DAP / Hook / MCP）
- OpenCode 同时推进 ACP `session/list` 合规、DAP 调试器、Hook router；
- Pi Codemode + MCP 是单 PR 引入两类协议；
- Claude Code 补 MCP 抢占与 `tools/list` 回归。
- **对开发者的意义**：协议层投资回报开始显现，未来 6 个月，"是否支持自定义协议扩展"将作为 Agent 工具的平台化分水岭。

---

## 📌 决策参考摘要

| 你的需求 | 推荐工具 | 关键理由 |
|---------|---------|---------|
| 企业级安全合规 | Claude Code | 唯一把 audit 链路作为主线 |
| 多设备工作流 | Codex | Remote/Handoff 体验最完整 |
| 重型 Sub-agent | Gemini CLI | Sub-agent 投入最持续 |
| GitHub 生态深度集成 | Copilot CLI | `.claude/rules` 跨工具兼容已上线 |
| 高级 CLI/协议扩展 | OpenCode / Pi | ACP/DAP/Hook 平台化最前沿 |
| 长生命周期 Agent | Qwen Code | Managed Agent + 持久化设计 |
| BYOK / 本地推理 | 谨慎评估 | 各家都存在采样参数/工具调用回归 |

> **报告说明**：本报告基于 GitHub 公开 Issue/PR 数据生成，仅反映 24 小时窗口内的社区信号；Kimi Code 与 DeepSeek TUI 因数据缺失未纳入横向比较。建议结合工具稳定性长期趋势与自身生产场景做最终决策。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-09-28 ｜ 数据源：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行

> 注：PR 评论/点赞数在数据源中未提供，本排行综合"近期活跃度、与高评论 Issue 的关联度、领域创新性"进行筛选。

### 🥇 #1742 · mcp-builder · MCP 兼容性修复
- **链接**：[PR #1742](https://github.com/anthropics/skills/pull/1742)
- **功能**：修复 `mcp>=2.0.0` 中 `streamable_http_client` 改名及自定义 Header 配置方式变更问题。
- **讨论热点**：与 [Issue #1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 0/N 打分）形成闭环，是 mcp-builder 生态最近一次较大的可用性修复。
- **状态**：OPEN（2026-09-08 创建，2026-09-27 仍在更新）

### 🥈 #1298 · skill-creator · 触发评估与跨平台健壮性
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)
- **功能**：隔离 trigger eval、修复 Windows 下 `select()` 在子进程管道上的失败、避免运行时失败被误判为非触发样本。
- **讨论热点**：直接命中 [Issue #556](https://github.com/anthropics/skills/issues/556)（`run_eval.py` 0% 触发率）和 [Issue #1383](https://github.com/anthropics/skills/issues/1383)（silent benchmark failures）。是 skill-creator 工具链可信度修复的关键 PR。
- **状态**：OPEN

### 🥉 #1771 · proofcore-contract-auditor · Web3 合约审计
- **链接**：[PR #1771](https://github.com/anthropics/skills/pull/1771)
- **功能**：对 Solidity / Rust 合约做静态分析，并通过 ProofCore 的零存储 Merkle 协议将审计证明锚定到 TON 链。
- **讨论热点**：首个面向 Web3 / 智能合约场景的"带链上证明"型 Skill，代表 Skills 进入"输出可验证"阶段。
- **状态**：OPEN（2026-09-15）

### #1792 + #1734 + #541 · docx · 修订追踪体系
- **链接**：[PR #1792](https://github.com/anthropics/skills/pull/1792) ｜ [PR #1734](https://github.com/anthropics/skills/pull/1734) ｜ [PR #541](https://github.com/anthropics/skills/pull/541)
- **功能**：把 soffice 超时降级为错误而非成功、检测孤立评论、修复与书签 `w:id` 冲突导致的文档损坏。
- **讨论热点**：docx 是当前最活跃的官方 Skill 之一，三个互补 PR 同步推进"修订接受 + 评论回收 + ID 命名空间"三条线。
- **状态**：全部 OPEN

### #1703 · md2video-audio · Markdown → 视频
- **链接**：[PR #1703](https://github.com/anthropics/skills/pull/1703)
- **功能**：零成本将 Markdown 经 Marp 编译成带拟人化语音的 MP4。
- **讨论热点**：典型"内容流水线自动化" Skill，体现社区对"文档 → 演示/视频"自动化的需求。
- **状态**：OPEN

### #822 · AWT (AI Watch Tester) · AI 驱动 E2E 测试
- **链接**：[PR #822](https://github.com/anthropics/skills/pull/822)
- **功能**：为 Claude 提供视觉 + 浏览器控制能力，实现零代码 E2E 自动测试。
- **讨论热点**：[Issue #1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate Pipeline）里"交付验证"环节明确指向自动化测试，定位非常契合。
- **状态**：OPEN（2026-03-31 起，活跃 6 个月）

### #1776 · blast-radius · 破坏性操作前清单
- **链接**：[PR #1776](https://github.com/anthropics/skills/pull/1776)
- **功能**：归档用户、撤销权限、批量删除/群发前的检查清单，对每条记录分类以降低误操作半径。
- **讨论热点**：与 [Issue #492](https://github.com/anthropics/skills/issues/492)（命名空间信任边界）共同体现"Agent 治理"主题：从"是谁授权的"扩展到"操作爆炸半径"。
- **状态**：OPEN

### #514 + #525 + #723 · 质量与垂直领域三件套
- **document-typography**：[PR #514](https://github.com/anthropics/skills/pull/514) — 防止孤行/寡行/编号错位
- **pyxel**：[PR #525](https://github.com/anthropics/skills/pull/525) — Python 复古游戏开发
- **testing-patterns**：[PR #723](https://github.com/anthropics/skills/pull/723) — Testing Trophy + 全栈测试方法
- **状态**：全部 OPEN

---

## 二、社区需求趋势（基于 Issues 评论/点赞分析）

| 主题 | 代表 Issue | 评论 | 关注度信号 |
|---|---|---|---|
| 🛡️ **Skill 信任与治理** | [#492 命名空间冒充](https://github.com/anthropics/skills/issues/492)、[#412 agent-governance](https://github.com/anthropics/skills/issues/412)、[#1175 SharePoint 权限](https://github.com/anthropics/skills/issues/1175) | 43 / 6 / 4 | 三项累计 53+ 评论，是讨论最热的纵深议题 |
| 📤 **组织级共享与分发** | [#228 Claude.ai 共享](https://github.com/anthropics/skills/issues/228)、[#189 插件重复](https://github.com/anthropics/skills/issues/189) | 16 / 6 | 8 👍+9 👍 高赞同度 |
| 🧪 **Eval 工具链可信度** | [#556 0% 触发率](https://github.com/anthropics/skills/issues/556)、[#1383 silent benchmark](https://github.com/anthropics/skills/issues/1383)、[#1390 MCP 0/N 打分](https://github.com/anthropics/skills/issues/1390)、[#1394 eval-viewer XSS](https://github.com/anthropics/skills/issues/1394) | 12 / 4 / 4 / 4 | 7 👍 高度认同，反映触发器与基准测试是核心痛点 |
| 🧠 **上下文与记忆压缩** | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329)、[#1487 claude-api 注入 156k tokens](https://github.com/anthropics/skills/issues/1487) | 9 / 4 | 长会话场景下上下文管理开始被关注 |
| 🔍 **推理质量门禁** | [#1385 三门管线](https://github.com/anthropics/skills/issues/1385) | 4 | 提出 "Pre-task Calibration → Adversarial Review → Delivery Verification" |
| ☁️ **跨平台集成** | [#29 Bedrock 兼容](https://github.com/anthropics/skills/issues/29) | 4 | 长期被关切的 AWS Bedrock 支持问题 |

**趋势总结**：文档/测试/视频生成等"工作流自动化"是供给侧主战场；需求侧正从"能做什么"转向"谁授权、是否触发、能不能审计、会不会爆雷"——即 **Skill 的可信运行**。

---

## 三、高潜力待合并 Skills

> 评判标准：近 30 天内仍有更新 + 已存在补强 PR / 同向 Issue + 领域刚需 + 仍未合并。

| PR | Skill | 入选理由 | 链接 |
|---|---|---|---|
| #1298 | skill-creator (Windows + eval) | 是关闭 #556 / #1383 的核心修复 | [link](https://github.com/anthropics/skills/pull/1298) |
| #1742 | mcp-builder (mcp>=2 兼容) | 是关闭 #1390 评估体系的前提 | [link](https://github.com/anthropics/skills/pull/1742) |
| #1681 | skill-creator (package_skill.py) | 文档与 CLI 一致性补强，门槛修复 | [link](https://github.com/anthropics/skills/pull/1681) |
| #1792 | docx (soffice 错误处理) | 数据正确性修复，影响所有 docx 用户 | [link](https://github.com/anthropics/skills/pull/1792) |
| #1703 | md2video-audio | 内容自动化代表方向，需求稳定 | [link](https://github.com/anthropics/skills/pull/1703) |
| #1776 | blast-radius | 与 #492 治理诉求形成共振 | [link](https://github.com/anthropics/skills/pull/1776) |
| #822 | AWT | 与 #1385 推理质量门禁"交付验证"对齐 | [link](https://github.com/anthropics/skills/pull/822) |
| #525 / #514 / #723 | pyxel / document-typography / testing-patterns | 三件横向基础设施类 Skill，长期挂起但稳定 | [link](https://github.com/anthropics/skills/pull/525) |

---

## 四、Skills 生态洞察

> **一句话总结：社区当前最集中的诉求已经从"扩展 Skills 能做什么"转向"如何证明它确实做了、做对了、并且不会越权做"——即围绕 Skill 的可信运行（trust、trigger、benchmark、blast-radius）形成新的基础设施层。**

这一信号由四个数据点共同支撑：热度最高的 Issue 是命名空间安全（#492，43 评论）、第二大是分发共享（#228，16 评论 / 8 👍）、第三大是评估失效（#556，12 评论 / 7 👍），而 PR 侧近期最活跃的两条主线恰好是 **skill-creator 评估健壮性**（#1298/#1681）与 **docx 可信性**（#1792/#1734/#541）。可以预期未来一个季度，治理/评估类元 Skills 与对应工具链修复会被优先合并。

---

# Claude Code 社区动态日报
**日期：2026-09-28**

---

## 📌 今日速览

过去 24 小时内 Claude Code 仓库**无新版本发布**，但社区活跃度较高：50 个 Issue 获得更新、1 个 PR 被推送。**最突出的问题集中在 Cowork 功能回归与平台兼容性问题**——多个关于 Cowork 新建项目丢失"选择文件夹"入口（#76694）、文件写入滞后（#93482）、Linux 端无法链接设备（#97685）的高评论数 Bug 仍在持续发酵。macOS 平台出现多个"会话永久空闲 / Compaction 卡死"系列报告（#94252、#94335、#94261），疑似 2.1.268–2.1.283 版本存在底层事件循环缺陷。

---

## 🚀 版本发布

> 过去 24 小时无新 Release 发布，跳过本节。

---

## 🔥 社区热点 Issues（按热度筛选 Top 10）

| # | Issue | 平台 / 模块 | 评论 | 👍 | 为何重要 |
|---|-------|------------|------|----|---------|
| [#76694](https://github.com/anthropics/claude-code/issues/76694) | **Cowork 新建项目丢失"Choose a folder"** | Windows/macOS · Cowork | 35 | 28 | Chat/Cowork 合并后右键菜单被错误替换为 Chat 风格的上传菜单，影响所有新项目创建流程，是当前最热门 Bug |
| [#89398](https://github.com/anthropics/claude-code/issues/89398) | **斜杠命令选择器仅在 "/" 开头时弹出，但命令仍执行** | Windows · UI | 15 | 7 | 桌面端 UX 缺陷，用户体感明显的可用性问题 |
| [#93482](https://github.com/anthropics/claude-code/issues/93482) | **device_commit_files 报告成功但磁盘内容滞后一个提交** | Windows · Cowork · data-loss | 14 | 0 | **数据丢失风险**，且表现为"静默错误"，mtime 是新的，极其危险 |
| [#49551](https://github.com/anthropics/claude-code/issues/49551) | **Claude Desktop 窗口变白屏，需任务管理器强杀** | Windows · Desktop | 9 | 1 | 虽已关闭，9 条评论反映出 Windows 桌面端的稳定性长期问题 |
| [#92007](https://github.com/anthropics/claude-code/issues/92007) | **`/model opusplan` 突然报 "Unsupported model"** | Windows · model | 7 | 12 | 此前已稳定工作数月，突然失效，疑似后端模型路由变更未同步 |
| [#68083](https://github.com/anthropics/claude-code/issues/68083) | **Desktop "Auto-fix CI" 全局开关对 gh 创建的 PR 不生效且不持久化** | macOS · Desktop | 5 | 8 | 开关形同虚设，是配置持久化的真实缺陷 |
| [#74447](https://github.com/anthropics/claude-code/issues/74447) | **`/color` 命令支持任意 hex 颜色** | TUI · enhancement | 5 | 2 | 已关闭，社区对终端 truecolor 支持呼声较高 |
| [#94252](https://github.com/anthropics/claude-code/issues/94252) | **Turn 永久空闲：kevent64 事件循环停滞，tool_result 被丢弃 / Compaction 死锁** | macOS · Bedrock · core | 4 | 0 | 涉及版本范围 2.1.268–2.1.283，与 #94335、#94261 形成 macOS 端"会话卡死"系列 |
| [#94675](https://github.com/anthropics/claude-code/issues/94675) | **UserPromptSubmit 携带 prompt 注入面：系统消息与用户输入不可区分** | macOS · security · hooks | 3 | 1 | **安全相关**，hook 作者无法区分真实输入与 agent/cron/heartbeat 注入，是 prompt injection 潜在攻击面 |
| [#93967](https://github.com/anthropics/claude-code/issues/93967) | **Windows 端 `claude auth login` / `setup-token` 报 OAuth 403** | Windows · auth | 3 | 1 | 仅 Windows CLI 受影响，Desktop 正常登录，OAuth scope 处理存在平台差异 |

> **其他值得关注的次热门 Issue**：#89938（SendMessage 长会话失联）、#97685（Linux Cowork enclave key 未实现）、#97677（VS Code 插件 MCP 被 claude.ai connector 静默抢占）、#88128（MCP `tools/list` 在省略可选字段时被拒绝）。

---

## 🛠️ 重要 PR 进展

过去 24 小时仅 1 个 PR 推送：

### [#97688 – sec-default: collector records continue past the user tier](https://github.com/anthropics/claude-code/pull/97688)
- **作者**：poteat
- **类型**：安全 / 遥测
- **内容**：在组织级启用 `sec-default` 时，telemetry.log 的 collector 流现在可以**跨过用户层级继续记录**，与 `classic.*` 和 `settings.read` 行为一致。
- **意义**：阻止个人插件在被组织坐席 `sec-default` 后，丢弃或改写发送给 collector 的记录，强化了企业级审计链路的不可篡改性。

---

## 📈 功能需求趋势

从全部 Issue 中提炼的社区诉求方向：

| 方向 | 代表 Issue | 趋势强度 |
|------|-----------|---------|
| **🐄 Cowork 功能完善与回归修复** | #76694、#93482、#97685、#94399、#49551 | ⬆️⬆️⬆️ 极强，5+ 条集中爆发 |
| **🖥️ 桌面端稳定性（Windows 为主）** | #49551、#89398、#92007、#93967、#97409、#97716 | ⬆️⬆️ 强，Windows 平台 Bug 高密度 |
| **🔄 Compaction / 会话生命周期** | #94252、#94335、#94261、#82017、#97733 | ⬆️⬆️ 强，macOS 卡死系列 + 技能丢失 |
| **🔌 MCP 协议与插件兼容** | #97677、#88128、#97701 | ⬆️ 中，回归问题集中在 2.1.283 |
| **🔐 安全 / OAuth / Hook 注入面** | #94675、#93967 | ⬆️ 中，安全研究社区持续关注 |
| **🎨 UI/UX 增强（TUI / VS Code / iPad）** | #74447、#95721、#97734 | ➡️ 中，多为小改进 |
| **💰 成本/性能监控** | #97218（API 激增 30x） | ➡️ 出现，长会话用户开始关注 |

---

## 💬 开发者关注点与痛点

**1. Cowork 是当前最受关注也最脆弱的模块**
- 与 Chat 合并后多个核心交互（新建项目选择文件夹、设备链接、Dispatch agent）回归严重；
- 跨平台一致性差：Linux 缺 enclave key、Windows 缺"Choose a folder"、macOS 多会话互不可见。

**2. macOS 端 2.1.268–2.1.283 版本存在底层事件循环缺陷**
- 表现为会话"永久空闲"、tool_result 丢失、Compaction 在 95% 处卡死；
- SnoElement 在三个不同 Issue 中以几乎相同模式描述该问题（#94252、#94335、#94261），已具备较高可信度，建议官方优先核查 kevent64 路径。

**3. Windows CLI 仍是"二等公民"**
- 多个 Issue 表明 Windows 端在 OAuth、模型路由、路径处理（Bash 反斜杠被截半）、hook 触发等方面均与 macOS/Linux 存在差异，且无 `claude --version` 这类基本诊断入口（#89398）。

**4. 安全边界正在被社区系统性审视**
- #94675 揭示 hook 系统无法区分用户输入与 agent/cron/heartbeat 注入，是典型的 prompt injection 放大器；
- #97688 PR 也反映出组织对遥测/审计链路完整性的强烈需求。

**5. Compaction 后的"记忆断层"问题凸显**
- #82017 指出 Compaction 后丢失技能清单（`skill_listing`），模型对历史注册的 skill 路由失明；
- #97733 提出"会话级 `/autocompact`"，希望区分主会话与子 agent 的窗口——这反映出 Compaction 已从后台机制变为可被精细配置的运行时对象。

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 统计窗口：过去 24 小时 · 报告生成时间：2026-09-28*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-28

---

## 📌 今日速览

今日 Codex 仓库共发布 **6 个 alpha 版本**（0.158.0-alpha.15.3/15.4、0.159.0-alpha.8/9/10/11），主线问题高度集中在 **Windows 平台的 console 窗口闪烁与启动故障**——多个高赞 issue 几乎都指向同一个回归（自 0.157.x 引入）。与此同时，**Linux Desktop 26.924.22138 也出现了聊天界面加载卡死的回滚问题**，社区进入跨平台问题集中爆发期。PR 侧则密集修复 Windows 兼容性、TUI 体验与 MCP 协议细节。

---

## 🚀 版本发布

| 版本 | 关键定位 |
|------|----------|
| rust-v0.159.0-alpha.8 ~ alpha.11 | 0.159.0 系列早期迭代 |
| rust-v0.158.0-alpha.15.3 / 15.4 | 0.158.0 维护迭代 |

> 全部为 Rust 实现的内部 alpha 通道小版本，未公布公开 release notes，建议关注官方 release 渠道获取 commit-level changelog。

---

## 🔥 社区热点 Issues

### 1. [#48074](https://github.com/openai/codex/issues/48074) ⭐ 77 · 💬 41
**Windows: 安装 Codex daemon 后每次请求都弹出终端窗口**
- 平台：Windows 11 / codex-cli 0.157.0
- 严重程度：🔴 影响日常使用体验
- **社区反应**：点赞数 77，是当前最热门 issue。多名用户表示每次执行 shell command 都会闪现 cmd 窗口，与 #48039、#44768、#48422、#48467 等多个 issue 描述高度同源——几乎可以确认是 **0.157.x 引入的回归**。

### 2. [#12491](https://github.com/openai/codex/issues/12491) ⭐ 7 · 💬 37
**Codex.app GUI: MCP 子进程未回收——1300+ 僵尸进程，37GB 内存泄漏**
- 平台：macOS / codex-cli 0.98.0
- **社区反应**：长期未修复，积压 7 个月，仍保持活跃讨论。涉及 MCP 生态可靠性，是潜在架构级问题。

### 3. [#48016](https://github.com/openai/codex/issues/48016) 💬 32
**Windows: codex-cli 0.157.0 无法启动** *(已 CLOSED)*
- 严重程度：🔴 阻塞性
- **社区反应**：虽是 closed 状态但讨论量极高，反映 0.157.0 在 Windows 上存在普遍兼容性问题。

### 4. [#24047](https://github.com/openai/codex/issues/24047) 💬 24
**Windows Desktop 更新后 Codex 不自动重启**
- 影响面：所有通过 Microsoft Store / AppX 分发的 Windows 用户
- **社区反应**：更新链路未正常处理 in-use 锁定，影响自动升级路径。

### 5. [#48422](https://github.com/openai/codex/issues/48422) ⭐ 21 · 💬 17
**Windows: shell 进程子进程持续闪现可见控制台窗口**
- 平台：Windows 10 / codex-cli 0.157.1
- 与 #48074 同源，提供了不同模型与终端（Windows Terminal）的复现证据。

### 6. [#26907](https://github.com/openai/codex/issues/26907) ⭐ 13 · 💬 15
**远程启动的 Codex thread 收不到 thread 管理工具**
- 平台：macOS / Codex App 26.602.40724
- **重要**：涉及 Codex Remote 功能与 thread 生命周期，影响多设备工作流。

### 7. [#48216](https://github.com/openai/codex/issues/48216) 💬 15
**Windows Desktop 26.924.1866.0 卡在灰色加载界面**
- **社区反应**：点赞为 0 但讨论度高，提示灰屏启动失败是较普遍的回归。

### 8. [#40852](https://github.com/openai/codex/issues/40852) ⭐ 10 · 💬 14
**macOS Desktop: code-mode 任务缺少 send_message_to_thread**
- 涉及 **macOS 26.5 + Codex 26.820.60940** 的工具链回归，影响 sub-agent 调度。

### 9. [#44768](https://github.com/openai/codex/issues/44768) 💬 14
**Windows app-server daemon 为每个 hook/shell 都弹控制台窗口**
- 进一步定位问题：根因在 **共享 daemon 进程拉起子 shell 时未指定 `CREATE_NO_WINDOW` 标志**。

### 10. [#48039](https://github.com/openai/codex/issues/48039) ⭐ 9 · 💬 14
**外部控制台窗口在 Codex 启动与后台任务时出现**
- 与上述多个 Windows issue 同源，进一步坐实 0.157.x 引入的 **CREATE_NO_WINDOW 缺失问题**。

---

## 🛠️ 重要 PR 进展

### 1. [#48829](https://github.com/openai/codex/pull/48829) — Windows 沙箱修复
**等待 Windows 沙箱 provisioning 服务启动**
- 解决桌面端 readiness 等待沙箱服务超时的问题，提升启动成功率。

### 2. [#48799](https://github.com/openai/codex/pull/48799) — Windows 终端捕获
**修复 Windows 终端的 SGR 鼠标上报**
- 通过 ConPTY 请求 SGR 编码，解决某些 Windows 终端把鼠标事件当作键盘事件上报的 bug。

### 3. [#48772](https://github.com/openai/codex/pull/48772) — Unix socket 兼容性
**修复长 symlink 路径下的 Unix socket 连接**
- 当 advertised socket path 超过 UNIX_PATH_MAX 时，可解析到目标后重试，提升 CI/容器环境稳定性。

### 4. [#48812](https://github.com/openai/codex/pull/48812) — 性能优化
**为 idle thread 增加 history-aware 预热**
- 新增 `CodexThread::prewarm_with_history()`，让下一轮 turn 直接复用已准备好的 WebSocket response，减少首 token 延迟。

### 5. [#48800](https://github.com/openai/codex/pull/48800) — TUI 体验
**有序 Markdown 列表使用终端调色板的 LightBlue**
- 解决列表标记颜色随 `accent_color` 配置改变导致的对比度问题。

### 6. [#48783](https://github.com/openai/codex/pull/48783) — MCP 协议
**单服务器 MCP 状态查询 + 线程连接复用**
- 新增 `mcpServerStatus/list` 的 `serverName` 参数，避免对单台服务器做全量发现。

### 7. [#48796](https://github.com/openai/codex/pull/48796) — Guardian
**为 Guardian circuit-breaker 中断新增 opt-in 结构化错误**
- 新增 `auto_review.circuit_breaker` 错误码，帮助客户端识别拒绝原因。Opt-in 避免影响老客户端。

### 8. [#48814](https://github.com/openai/codex/pull/48814) — 渲染
**Mermaid 标签保留标点与分号**
- 解决 `A["Go []; &"]` 等含分号/特殊符号的标签无法渲染的问题。

### 9. [#48827](https://github.com/openai/codex/pull/48827) — TUI 鼠标
**Ghostty / Kitty 中 transcript 链接光标变为手型**
- 改善终端内 hover 体验，复用链接命中测试逻辑。

### 10. [#48830](https://github.com/openai/codex/pull/48830) — TUI 文案
**TUI 中断提示改为简短中性文案**
- 移除对模型"建议下一步"的引导，使用更短的 secondary 样式。

---

## 📊 社区功能需求趋势

从 50 条更新 issue 提炼出的关注方向：

| 方向 | 占比 | 代表 issue |
|------|------|------------|
| **Windows 兼容性 / 沙箱体验** | ~45% | #48074, #48016, #24047, #48422, #44768, #48039, #48467, #25770 |
| **Desktop 启动与加载流程** | ~20% | #48216, #48466, #48535, #48602 |
| **MCP 生态与多进程管理** | ~10% | #12491, #48783, #48764 |
| **远程 / Handoff / 多设备协作** | ~8% | #26907, #45651（增强请求）, #48220 |
| **工具调用 / sub-agent 稳定性** | ~10% | #40852, #33947, #48472, #48796 |
| **TUI / 终端交互细节** | ~7% | #48846, #48435, #48799, #48827 |

**核心信号**：
1. **Windows 回归已成头号矛盾**——0.157.x 引入的 `CREATE_NO_WINDOW` / app-server daemon 改造同时影响 CLI、App 与 Desktop。
2. **Desktop 26.924.22138 在 Linux 与 Windows 都出现加载卡死**，建议官方暂缓自动推送或提供紧急补丁。
3. **MCP 治理被提上日程**——既包括 zombie 进程治理（#12491），也包括单服务器发现（#48783）。

---

## 🧑‍💻 开发者关注点与高频痛点

### 🔴 痛点 Top 3

1. **Windows 沙箱/daemon 体验恶化**
   - 用户被迫"降级到 0.156.0 / 0.155.1"才能工作（见 #48087、#48826），这对刚升级的 Pro 用户极不友好。
   - 多个 issue 同时指向 root cause：**app-server daemon 启动子进程时未传 `CREATE_NO_WINDOW`**。修复成本应可控，但需跨 CLI / TUI / Desktop 三端同步发版。

2. **Desktop 自动更新存在严重回滚需求**
   - 26.924.22138 同时在 Linux (#48535、#48602) 与 Windows (#48216、#48466) 出现启动卡死，社区建议"先回滚到 26.917 / 26.915"。建议官方：① 暂停该版本自动推送；② 强化灰度发布与回滚机制。

3. **长生命周期 issue 修复迟缓**
   - #12491（37GB 内存泄漏，1300+ 僵尸进程）已经 7 个月未解决；#24047、#25770 等 Windows Store 安装链路问题积压超过一个版本周期。建议关注以下：
   - **MCP 子进程回收**应成为 P0，因为一旦 MCP 插件在生产环境被广泛使用，将造成显著的资源浪费。

### 🟡 频繁被提及的诉求

- **希望 Codex Desktop 在 Windows 上彻底独立化后台进程**（参考 PR #48829、#48799）
- **希望提供 `codex --no-daemon` 模式更稳定的 TUI 体验**（参考 #48846 反映该模式下状态栏消失）
- **希望 Handoff 支持长对话分页**（#45651）
- **希望 `codex doctor` 升级可识别 0.157.x 的 sandbox 标记**（#41608）
- **希望 Mermaid 渲染更鲁棒**（已部分通过 #48814 修复）
- **希望 Windows 沙箱默认启用 `sandbox_private_desktop`**（#48498）

---

## 📝 小结

今天是典型的"**版本发布密集 + 跨平台问题集中爆发**"的一天：
- **开发者动作**：6 个 alpha 小步迭代 + 35 个 PR（多集中在 TUI 与 Windows 沙箱修复）。
- **用户痛点**：Windows 体验明显下滑 + Desktop 26.924 系列需要回滚 + MCP 资源回收长期未根治。
- **下一步观察重点**：0.159.0 alpha 是否能解决 Windows console 闪现；Desktop 26.925 是否修复启动卡死；MCP 子进程治理是否进入主线 roadmap。

> 报告基于 2026-09-28 GitHub 数据生成，由 AI 技术分析师整理。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-28

---

## 📌 今日速览

今日 Gemini CLI 发布了 `v0.63.0-nightly.20260928.g2fe7c2d3f` 夜间版本，社区讨论高度集中在 **Subagent 可靠性**、**模型版本显式 pinning**、**Auto Memory 安全** 三大方向。其中 Subagent 在 `MAX_TURNS` 限制下的错误状态上报被标记为 P1，且 `Generalist Agent` 频繁卡死的工单获得了 8 个 👍（本期最高共鸣）；同时多条 PR 集中修复 quota 重试、模型 ID 改写、文件夹信任状态传播等核心链路问题。

---

## 🚀 版本发布

**v0.63.0-nightly.20260928.g2fe7c2d3f** 已发布，对比上一夜间版（`v0.63.0-nightly.20260926`）推进了一轮常规 nightly 构建，由机器人 PR [#29531](https://github.com/google-gemini/gemini-cli/pull/29531) 自动完成版本号 bump。具体变更可通过 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-nightly.20260926.g2fe7c2d3f...v0.63.0-nightly.20260928.g2fe7c2d3f) 查看。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 优先级 | 评论数 / 👍 | 关注理由 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 命中 `MAX_TURNS` 后仍上报 `GOAL` 成功，掩盖中断 | P1 · Bug | 13 / 2 | **P1 级核心可靠性 Bug**，评论数最多；`codebase_investigator` 已触达轮次上限却仍报告成功，会让用户对子代理中断无感知。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 频繁卡死 | P1 · Bug | 8 / **8** | **本期 👍 数最高**，开发者反馈"创建文件夹都会卡一小时"，只能靠显式禁止 defer 绕过，影响范围广。 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 基于零依赖 OS 沙箱 + 执行后意图路由 | P2 · Enhancement | 9 / 1 | 战略性 EPIC，让 Gemini 3 模型的 bash 直觉能力在安全沙箱中释放，社区讨论度高。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知文件读取/搜索/映射的影响 | P2 · Feature | 7 / 1 | EPIC 级调研议题，探索用 AST 工具（tilth / glyph）减少误读取、压缩 token 噪声。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不主动调用自定义 skills 和 sub-agents | P2 · Bug | 6 / 0 | 反映 Agent **"自我调度能力"** 缺陷：只有显式指令才会使用子代理/技能，影响可用性。 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 需确定性脱敏并减少日志 | P2 · Security | 5 / 0 | **隐私红线**：本地 transcript 在进模型前才被"提示词脱敏"，且服务侧可能仍记录技能内容。 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 `settings.json` 的 `maxTurns` 等覆盖项 | P2 · Bug | 4 / 0 | 配置优先级 Bug，`AgentRegistry` 读取了但 Browser 子代理未真正消费。 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) 浏览器代理：自动接管会话 + 锁恢复 | P3 · Feature | 4 / 0 | 与上一条互补，建议把 fail-fast 改为韧性接管，避免持久化 profile 被孤儿进程锁死。 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser 子代理在 Wayland 下失败 | P1 · Bug | 4 / 1 | Linux 桌面环境兼容性硬伤，影响 Wayland 用户无法使用 Browser Agent。 |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 时遭遇 400 错误 | P2 · Bug | 3 / 0 | MCP/插件生态扩展后的关键扩展性问题，呼吁 Agent 智能裁剪工具集。 |

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 优先级 | 内容要点 |
|---|---|---|---|---|
| 1 | [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) `classifyGoogleError` 尊重 `RetryInfo` delay=0 | OPEN | – | 修复服务端"立即重试"的常规限流被误判为终止性配额错误，触发错误的 quota / 回退 / 付费引导链路。 |
| 2 | [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) 暴露配额 `quotaResetTimeStamp` / `quotaResetDelay` / `uiMessage` | OPEN | **P1** | 解决 `RESOURCE_EXHAUSTED` 时用户看不到"何时可恢复"的体验缺口，关联 #29425。 |
| 3 | [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) 保留显式 `gemini-3-pro-preview` 模型 ID | OPEN | P2 | 防止 Gemini 3.1 rollout 把用户显式 pin 的版本静默改写为 `gemini-3.1-pro-preview`。 |
| 4 | [#29422](https://github.com/google-gemini/gemini-cli/pull/29422) 跨解析过程保留显式版本化模型 ID | OPEN | P2 | 与 #29420 互补，并把"显式 > 自动别名"的策略扩展到 Vertex AI（修 3.5 Flash 不可用）。 |
| 5 | [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) 请求内容不以模型回合结尾 | OPEN | **P1** | 修 `/rewind`、流中断或尾部空 user turn 触发的 `Requests ending with a model turn are not supported` 400。 |
| 6 | [#29528](https://github.com/google-gemini/gemini-cli/pull/29528) Headless 模式下正确传播文件夹信任状态 | OPEN | **P1** | 修无头模式 `onTrustChange` 始终上报 `true` 导致的"脑裂"状态。 |
| 7 | [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) 调度器释放时清空排队工具调用 | OPEN | – | 防止调度器 dispose 后仍有 queued 调用挂起或后续工具被执行。 |
| 8 | [#29431](https://github.com/google-gemini/gemini-cli/pull/29431) 跳过无效 TOML 策略规则 | OPEN | – | 修复空工具名让 `PolicyEngine` 启动崩溃；冲突的 shell-command 字段不再被强制执行。 |
| 9 | [#29423](https://github.com/google-gemini/gemini-cli/pull/29423) 沙箱内持久化文件夹信任 | OPEN | – | 在 podman/docker 沙箱中运行时，把信任决策写入宿主机 `trustedFolders.json`，避免每次启动重复弹窗。 |
| 10 | [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) / [#29303](https://github.com/google-gemini/gemini-cli/pull/29303) 截断时不要拆分 UTF-16 代理对 | CLOSED | – | 两个修复互相加固，确保 emoji 不会被 `sanitizeForDisplay` / `ExpandableText` 静默吞掉。 |

> 另有 [#29319](https://github.com/google-gemini/gemini-cli/pull/29319)（SDK `JSON.parse` 容错）和 [#29320](https://github.com/google-gemini/gemini-cli/pull/29320)（`express.json` 注册顺序）同期关闭，工具调用与 A2A 服务器稳定性得到加固。

---

## 📈 功能需求趋势

通过梳理本期 50 条 Issue 的标题与标签，可以归纳出社区最关注的 **七大方向**：

1. **🧠 Subagent / Agent 体系成熟化**  
   MAX_TURNS 误报、Generalist 死锁、子代理上下文缺失、子代理轨迹分享（#22598）——占 Issue 总数的近一半。

2. **🌐 Browser Agent 体验完整性**  
   settings.json 覆盖、持久化会话接管、Wayland 兼容、symlink agent 识别——浏览器代理正从"能用"走向"可靠"。

3. **🗂 Auto Memory 系统安全与稳定性**  
   #26516 / #26522 / #26523 / #26525 集中爆发，关乎**隐私脱敏、失败重试、错误 patch 隔离**，是首个成体系的子产品。

4. **🌳 AST 感知工具链**  
   #22745 / #22746 推动用 AST 工具替代文本 grep，配合 #19561（Tactful Extraction）共同压缩 token 消耗。

5. **🛡 OS 级零依赖沙箱**  
   #19873 提出与 Gemini 3 模型原生 bash 习惯对齐的安全沙箱设计，是安全/能力平衡的关键议题。

6. **📝 持久化任务追踪替代 WriteToDo**  
   #21000 / #18836 提议基于本地文件的 CRUD 任务追踪，解决"上下文腐烂"与 token 浪费。

7. **🧩 模型版本与配额可见性**  
   显式 pinning（#29420/#29422）、配额 reset 时间暴露（#29429）反映用户对**"我以为我指定的是 X，实际跑的是 Y"** 类问题零容忍。

---

## 💬 开发者关注点（痛点与高频需求）

| 类别 | 集中反馈 |
|---|---|
| **子代理可靠性** | Generalist Agent 长时间卡死、MAX_TURNS 上报"GOAL"、Bug report 缺子代理上下文（#21763）——这是当前最高频痛点。 |
| **配置覆盖优先级** | Browser Agent 忽略 settings.json、AgentRegistry 读到但未消费——开发者期望配置中心权威唯一。 |
| **跨平台兼容** | Wayland 下 Browser 子代理失败、沙箱内文件夹信任不持久化（podman/docker）。 |
| **工具爆炸问题** | 启用 128+ 工具（多 MCP 服务器）即遇 400，需要 Agent 自动 scope 工具集。 |
| **模型版本控制** | `gemini-3-pro-preview` 被 rollout 静默改写；用户显式 pin 应得到严格遵守。 |
| **工作区污染** | #23571：模型在随机目录写 tmp 脚本，清理成本高，期望统一临时目录策略。 |
| **命令行自我认知** | #21432：Agent 对自身 CLI flag、热键认知不足，作为"自向导"体验欠佳。 |
| **终端渲染** | #21924：窗口 resize 高频闪烁，需要迁移到 `RenderStatic` + 增量更新。 |
| **破坏性命令风险** | #22672：模型偶发使用 `git reset --force`，需引导到更安全替代。 |

---

> **日报小结**：本日数据呈现出 Gemini CLI 从"功能堆叠期"过渡到"质量收敛期"的明显信号——围绕 Subagent、Auto Memory、模型版本 pinning 的讨论密度极高，同时 nightly 版本在配额/沙箱/调度器等基础设施层面持续加固。预计下一阶段 P1 级 Bug（Subagent 状态上报、Generalist 死锁、Wayland 兼容）若被合并，将显著改善生产可用性。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-28**
**数据范围：github.com/github/copilot-cli（过去 24 小时）**

---

## 1. 今日速览

GitHub Copilot CLI 发布 **v1.0.89-5**，重点优化了表单输入聚焦、`/skills` 兼容 Claude Code 规则文件，以及会话未读提示。社区方面，**权限粒度控制、BYOK/本地模型切换、会话管理与稳定性**持续是开发者关注焦点，过去 24 小时内有数十个长期存在的功能请求获得新评论，多个核心 Bug（认证失效、MCP 重连风暴、BYOK 采样参数）报告增多。

---

## 2. 版本发布

### 🚀 v1.0.89-5

**Added**

| 类型 | 内容 |
|------|------|
| UX | 鼠标左键点击 `ask_user` 与 elicitation 表单输入框时，自动聚焦并将光标定位到点击位置 |
| 兼容 | 新增对 `.claude/rules` 目录中 Claude Code 规则文件的支持，可作为自定义指令加载 |
| UX | 侧边栏会话语境中，当某个会话已完成但你尚未打开时，显示一个蓝色圆点提示 |

> 这些改动看起来都偏细节/UX 层面，但 `.claude/rules` 兼容是降低跨工具迁移成本的重要信号。

---

## 3. 社区热点 Issues

按评论数与点赞数综合排序，挑选出 10 个最值得关注的话题：

### 🔹 #1973 — Interactive Mode 工具白名单（13 评论 / 👍29）
为交互模式增加**只读工具白名单**（grep、cat、git status 等），避免每次手动审批，又比 `/allow-all` 更安全。
👉 [github/copilot-cli#1973](https://github.com/github/copilot-cli/issues/1973)
**为何重要**：现有方案非黑即白（手动或全放行），这是安全 UX 长期痛点，社区呼声高。

### 🔹 #1857 — 取消队列中未执行的消息（12 评论 / 👍29）
使用 `Ctrl+Q`/`Ctrl+Enter` 排队后，用户无法删除或撤回待执行消息，包括 `/compact` 期间。
👉 [github/copilot-cli#1857](https://github.com/github/copilot-cli/issues/1857)
**为何重要**：高频操作可逆性是交互设计的基本诉求，缺少会直接导致误操作。

### 🔹 #2551 — Opus 4.5 / Sonnet 4.5 报 503 错误（9 评论 / ✅已关闭）
调用新模型时频繁出现 HTTP/2 GOAWAY、CAPIError 503，已重试 5 次仍失败。
👉 [github/copilot-cli#2551](https://github.com/github/copilot-cli/issues/2551)
**为何重要**：影响最新旗舰模型可用性，已关闭说明后端已修复，但反映了模型上线初期的稳定性挑战。

### 🔹 #3709 — `/model` 切换多模型（含 BYOK/本地）（8 评论 / 👍33）
BYOK 模式下 `/model` 仅列出 GitHub 托管模型，无法切换至本地配置的 BYOK 提供方。
👉 [github/copilot-cli#3709](https://github.com/github/copilot-cli/issues/3709)
**为何重要**：BYOK + 本地推理是当下企业用户的核心需求，模型选择自由度是基本要求。

### 🔹 #4929 — 长时进程的 Auth Token 不再刷新（7 评论）
单次长会话中，Token 失效后所有 prompt 立即报授权错误，`/login` 无法恢复，必须重启。
👉 [github/copilot-cli#4929](https://github.com/github/copilot-cli/issues/4929)
**为何重要**：直接影响长时间运行的会话工作流，是阻塞性 Bug。

### 🔹 #4905 — 桌面端会话几分钟后死亡（6 评论 / 👍4）
macOS 桌面版 1.1.22 / CLI 1.0.84-5 报告 "GitHub credential registration is no longer available"，导致 github-mcp-server 失效。
👉 [github/copilot-cli#4905](https://github.com/github/copilot-cli/issues/4905)
**为何重要**：桌面端 + MCP 是主推组合，但认证生命周期管理明显存在设计缺陷。

### 🔹 #2627 — 可配置系统提示，削减 ~20K Token 开销（6 评论 / 👍21）
当前系统提示约 20,500 token（~10% 上下文窗口），加工具定义共 ~29K，建议允许精简。
👉 [github/copilot-cli#2627](https://github.com/github/copilot-cli/issues/2627)
**为何重要**：上下文窗口是核心成本与性能瓶颈，节省 prompt 开销对所有用户都有价值。

### 🔹 #1613 — 内置 git worktree 生命周期管理（4 评论 / 👍38）
让 Copilot CLI 在执行任务时自动创建/清理 git worktree，实现任务隔离与并行。
👉 [github/copilot-cli#1613](https://github.com/github/copilot-cli/issues/1613)
**为何重要**：点赞数最高之一，"多任务并行 + 隔离"是 Agent 工具的下一阶段能力。

### 🔹 #179 — 全局可配置允许工具列表（4 评论 / 👍43）
类似 Claude Code 的 `~/.claude/settings.json`，在 `config.json` 中配置 `permissions.allow`，**点赞数全场最高**。
👉 [github/copilot-cli#179](https://github.com/github/copilot-cli/issues/179)
**为何重要**：GitHub 直接对标 Claude Code 的权限模型，社区长期推动开放配置能力。

### 🔹 #4950 — BYOK 提供方被强制使用 temperature=0（2 评论）
CLI 1.0.81+ 对所有 BYOK OpenAI-兼容提供方强制设置 `temperature=0`、`top_p=0.95` 等，导致推理模型降级与静默挂起。
👉 [github/copilot-cli#4950](https://github.com/github/copilot-cli/issues/4950)
**为何重要**：BYOK 用户正在快速增长，强制采样参数破坏了本地推理模型的可用性，性质严重。

> 备选关注：#1697（Session forking 已关闭）[#2285（复制含不可见字符 已关闭）](#2285) [#4531（VS Code GIT_CONFIG 启动污染）](#4531) [#4907（MCP 重连消息洪泛）](#4907)

---

## 4. 重要 PR 进展

过去 24 小时仅有 **1 条 PR 更新**，且内容疑似测试/占位（标题为 `kCreate "#"`，描述仅一个西班牙语单词 "aquellos"，👍0）。没有实质性可合并进展。

👉 [github/copilot-cli#3817](https://github.com/github/copilot-cli/pull/3817)

> 这与昨天 Issue 端的活跃度形成反差，可能预示维护者近期更聚焦 triage 而非代码合入，或本周末提交较少。

---

## 5. 功能需求趋势

按议题类型聚合（取议题标题 + labels），过去 24 小时社区诉求集中在六大方向：

| 趋势 | 代表议题 | 社区热度 |
|------|----------|----------|
| **🔐 权限与工具白名单** | #1973, #179 | 极高（点赞 29+43） |
| **🧩 BYOK / 本地模型支持** | #3709, #4950, #3195, #4623 | 上升期 |
| **📂 会话与多任务管理** | #1697, #1857, #1613, #1571 | 持续 |
| **🪟 上下文/性能优化** | #2627, #3703, #1571 | 中高 |
| **🔌 MCP 生态稳定性** | #4907, #4905, #2753, #3125, #4602, #4838 | 显著上升 |
| **🎨 终端渲染/UX 细节** | #2285, #2033, #4707, #1977 | 中等 |

> 显著信号：**MCP 相关 issue 数量明显增加**，涉及重连、catalog 缓存、技能发现、技能工具调用失败等，是当前最大生态风险面。

---

## 6. 开发者关注点

综合 Issue 文本与社区反馈，开发者当前的高频痛点如下：

1. **🔁 长期会话的"自愈能力"缺失**
   Auth Token 失效、MCP server 重连、managedSettings 抖动等问题一旦发生，**当前会话无法恢复，只能重启**（#4929、#4905、#4602）。这是 Agent 走向生产最大的拦路虎。

2. **🪶 BYOK / 本地模型体验仍不完整**
   模型选择受限、采样参数被强行覆盖、reasoning 事件不触发、union 类型 schema 不被识别（#3709、#4950、#3195、#4623）。企业自托管用户希望"接入即可用"，当前还需大量修补。

3. **🧱 上下文窗口被"系统开销"挤压**
   系统提示 + 工具定义占 ~29K token，超大上下文场景下有效空间被严重压缩（#2627）。需要可裁剪的 prompt 与工具集。

4. **🛠 工具粒度与可逆性**
   - 没有"只读工具默认放行"的安全档位（#1973、#179）
   - 排队消息无法撤回（#1857）
   - compact 后正在执行的任务上下文丢失（#1571）

5. **🖱 终端交互细节**
   复制代码块带不可见字符（#2285）、Markdown 链接未转 OSC 8（#2033）、滚动条被复制进剪贴板（#4707）。这些"小事"显著影响专业用户对工具的信任感。

6. **🌳 工作流隔离**
   缺乏内建的 git worktree 生命周期管理（#1613）、缺乏 session forking（#1697 已关闭但仍被引用），反映"多任务并行"是 Agent 工具的核心下一站。

---

*日报由社区动态自动汇总，仅供参考。如需对特定议题深入分析或跟踪某条 PR/Issue 的后续进展，欢迎告知。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-28

## 📌 今日速览

过去 24 小时内 OpenCode 仓库无新版本发布，但社区活跃度维持高位：50 个 Issue 被更新，涵盖 RTL 国际化、TUI 模型选择器、Provider 目录、MCP 超时与传输稳定性等关键方向；同期合并/推进了多笔 Bug Fix PR，TUI 模型收藏、session 唤醒重试、超大 MCP 帧处理、`opencode web` 服务化部署等长期痛点正在被系统性收尾。

---

## 🚀 版本发布

> 过去 24 小时无新 Release。请前往 [GitHub Releases](https://github.com/anomalyco/opencode/releases) 查看历史版本。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 热度 | 摘要 |
|---|---|---|---|---|
| [#34697](https://github.com/anomalyco/opencode/issues/34697) | RTL 语言翻译补全（Farsi/Urdu/Pashto 等） | CLOSED | 💬 8 | 紧随 #32247 的 RTL 方向映射更新，社区要求补齐 11 种 RTL 语种的语言包，体现 i18n 正在成为基础能力 |
| [#38851](https://github.com/anomalyco/opencode/issues/38851) | TUI 在 gpt-5.6-sol 上 ~30–35% 即触发压缩 | CLOSED | 💬 6 👍 2 | 上下文压缩阈值与模型实际可用空间不匹配，影响长任务稳定性，已合并修复 |
| [#28639](https://github.com/anomalyco/opencode/issues/28639) | `.exe` 后缀泄漏到 macOS/Linux 进程名 | CLOSED | 💬 5 👍 3 | 自 v1.15.5 起 npm 包二进制名带 `.exe`，影响 tmux 窗口标题等系统行为，是跨平台分发的经典坑 |
| [#51759](https://github.com/anomalyco/opencode/issues/51759) | 项目级 Tab + 左侧 Per-Project Session 列表 | OPEN | 💬 4 | 新提的高赞特性请求：跨项目 Tab 与混合会话列表的混乱，社区期待 Workspace 级隔离 |
| [#50969](https://github.com/anomalyco/opencode/issues/50969) | V2 TUI `/models` 收藏提示丢失、键位失效 | OPEN | 💬 3 | 后端收藏能力仍在，但 V2 模型选择器无 hint、`ctrl+f` 失效，疑似 V1→V2 回归 |
| [#51739](https://github.com/anomalyco/opencode/issues/51739) | models.dev 目录除内置 provider 外全部 `Model unavailable` | CLOSED | 💬 2 | 影响 google/groq/openrouter/vercel 等所有第三方 provider，24 小时内快速关闭，修复紧急度高 |
| [#39204](https://github.com/anomalyco/opencode/issues/39204) | `deepseek-v4-flash-free` 几乎每次工具调用后停止循环 | CLOSED | 💬 3 👍 4 | 免费模型上的 Agent 终止行为异常（高赞反馈），揭示 free-tier 模型在 agentic 场景的鲁棒性问题 |
| [#39071](https://github.com/anomalyco/opencode/issues/39071) | 移除 WSL server 后启动崩溃：`Notification server not found: wsl:Ubuntu-24.04` | CLOSED | 💬 3 | Desktop 启动期配置残留导致应用不可用，典型 onboarding 阻击点 |
| [#39584](https://github.com/anomalyco/opencode/issues/39584) | MCP timeout 被强制封顶 5 分钟 | CLOSED | 💬 2 | 即便配置 20 分钟也会被截断，1ms 反而生效，反映 MCP 配置/限制逻辑的边界 bug |
| [#51756](https://github.com/anomalyco/opencode/issues/51756) | TUI 链接 modified/non-primary 点击被吞 | （由 #51757 关闭）| — | 与 #51757 联动修复：不再劫持终端原生超链接处理，避免双开浏览器 |

> 其余高频方向还包括 DAP 调试器集成（#39253）、ACP `session/list` 协议合规（#39579）、`--format json` 缺少 `permission_asked` 事件（#39459）、CJK + `@` 自动补全失效（#39462）、Mac M4 多 session 下系统冻结（#39292）、WAL 文件膨胀至 1GB+（#39463）等。

---

## 🛠 重要 PR 进展（精选 10 笔）

| PR | 说明 |
|---|---|
| [#51760](https://github.com/anomalyco/opencode/pull/51760) | **fix(tui)**: 修复未连接 integration 时模型收藏不可用（修复 V2 回归 #50969）。 |
| [#51757](https://github.com/anomalyco/opencode/pull/51757) | **fix(tui)**: 让 modified / non-primary 点击交给终端原生超链接处理器，避免双开浏览器。 |
| [#51751](https://github.com/anomalyco/opencode/pull/51751) | **fix(core)**: 失败 session wake 增加重试，解决 prompt 已接纳但 advisory wake 失败导致 inbox 项被遗弃的问题。 |
| [#51743](https://github.com/anomalyco/opencode/pull/51743) | **fix(core)**: 本地 stdio MCP 单帧 >~10MiB 不再撕毁整个连接，仅失败该次调用（修复 #51092）。 |
| [#51741](https://github.com/anomalyco/opencode/pull/51741) | **fix(core)**: 对 `finish_reason: "length"` 但内容空白的完成进行显式失败，避免下游无声失败（修复 #50949）。 |
| [#46912](https://github.com/anomalyco/opencode/pull/46912) | **fix(opencode)**: `process.exit()` 前等待 stdout 写入完成，修复 `export` / `session list --format json` / `db --format json` 管道截断（修复 #29330）。 |
| [#51736](https://github.com/anomalyco/opencode/pull/51736) | **feat(opencode)**: `opencode web` 新增 `--no-open`，便于 systemd / 容器 / WSL 自启场景作为服务运行（修复 #43636）。 |
| [#51734](https://github.com/anomalyco/opencode/pull/51734) | **docs**: 新增 Bee by HEOSSI 的 OpenAI-compatible provider 配置文档。 |
| [#50221](https://github.com/anomalyco/opencode/pull/50221) | **chore(nix)**: 升级 nixpkgs 至 Bun 1.4.2+，修正 Nix `node_modules` 哈希计算。 |
| [#50083](https://github.com/anomalyco/opencode/pull/50083) | **docs(ecosystem)**: 新增 `oos`——跨项目 session 搜索 TUI（基于 #31932）。 |

> 其他值得关注的：#38283 `opencode-quota` 进入生态插件表；#45754 修复模型选择器中 Recent/Favorite 覆盖 provider 分组；#45749 修复设置下拉首次选择后无法再打开；#45608 修复 V1 Desktop Node 自定义 npm provider 加载的 `ERR_UNSUPPORTED_DIR_IMPORT`。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 个 Issue 提炼，社区诉求集中在以下方向：

1. **国际化与本地化**
   - RTL 全语种翻译补全（#34697），CJK 输入与 `@` 自动补全兼容（#39462）。

2. **TUI / Desktop 体验增强**
   - V2 模型选择器回归修复（#50969）、项目级 Tab + per-project session 列表（#51759）、会话编辑/重发后的 `parentID` 一致性（#39260）、背景会话花名册视图（#39583）、双 session 误开（#39592）、背景化 session 管理。

3. **Provider / 模型生态扩展**
   - models.dev 目录应用全面失败（#51739）、Anthropic 兼容 provider 的 sub-agent 调用空错误（#39456）、自定义 OpenAI-compatible provider 在 subagent 下失败（#39303）、`deepseek-v4-flash-free` agent 循环中断（#39204）、Bee by HEOSSI provider 文档（#51734）。

4. **性能与稳定性**
   - TUI 上下文压缩过早触发（#38851）、Mac M4 多 session 系统冻结（#39292）、Mac WAL 文件膨胀 1GB+（#39463）、Pipe JSON 截断（#46912）。

5. **可编程性 / 协议合规**
   - ACP `session/list` 不符合 spec（#39579）、`--format json` 缺少 `permission_asked`（#39459）、Plugin 安全 raw text 生成（#39243）、DAP 调试器集成 + Advisor 模型（#39253）、PreToolUse / Stop / SessionStart hook 与 hook router（#39275）。

6. **跨平台 / 部署**
   - macOS/Linux `.exe` 进程名泄漏（#28639）、WSL server 移除后启动崩溃（#39071）、MCP 超时硬封顶 5 分钟（#39584）、`opencode web` 服务化部署（#51736）、MCP 超大 stdio 帧传输崩溃（#51743）。

7. **安全**
   - 配置文件中 API key 加密存储（#39038）。

8. **CLI/UX 细节**
   - `/command` Confirm 前增加 Comments Tab + "Type your own answer"（#39410）。

---

## 🧑‍💻 开发者关注点（痛点 / 高频需求）

1. **TUI 体验的 V1→V2 回归**
   模型收藏（#50969）、模型分组（#45754）、超链接点击（#51757）等接连出现回归——开发者正密切关注 V2 终端在日常高频路径上是否真能与 V1 平齐。

2. **Provider 适配是核心摩擦点**
   从 models.dev 失效（#51739）到 Anthropic-compatible sub-agent 异常（#39456）、OpenAI-compatible 在 subagent 下报错（#39303）、free 模型 agent 中断（#39204），跨 provider 的鲁棒性仍是最多 bug 的来源。

3. **CLI / 服务化边界**
   `export`/`session list`/JSON 管道截断（#46912）、`opencode web` 无法纯服务化（#51736）、MCP 超时封顶（#39584），都指向 OpenCode 在「嵌入脚本/系统服务」这一新型使用场景下的能力空白。

4. **多会话与系统资源**
   Mac M4 多 session 冻结（#39292）、WAL 无限增长（#39463）、双 session 误开（#39592），说明当用户把 OpenCode 当作"常驻工具"使用时，资源与生命周期管理仍是短板。

5. **可扩展性诉求升温**
   ACP 协议合规（#39579）、hook router（#39275）、plugin-safe raw text（#39243）、DAP 调试器（#39253）密集出现，表明社区已经把 OpenCode 视作平台而非 CLI，希望在协议层与自动化层进一步深耕。

6. **数据安全与隐私**
   公网环境下对 API key 加密存储（#39038）成为呼声，反映企业/团队采用正在到来。

---

> 📎 数据口径：Issues / PR 均以「过去 24 小时更新」为窗口筛选；评论数与点赞数为窗口内的累积量。日报由 AI 助手基于 GitHub 公开数据自动生成，仅供参考。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-28

> 数据来源：`github.com/badlogic/pi-mono`（仓库链接指向 `earendil-works/pi`）
> 统计周期：过去 24 小时

---

## 一、今日速览

今天社区最显著的信号是 **"性能与稳定性"**：多个 Issue 集中反映会话创建延迟从 15.5s 退化到 >140s、Compaction 阶段内存/上下文窗口异常等系统级问题，**#7739** 提出的对标 `jcode` 的启动时间预算目标被顶上讨论焦点。与此同时，**#10040** 这个备受期待的 **Codemode + MCP** 大型 PR 仍在评审中，标志着 Pi 正从 CLI 助手向"沙箱化编程环境"演进。

---

## 二、版本发布

过去 24 小时无新 Release。当前线上版本仍为 `pi-coding-agent 0.87.1`（截至昨日）。

---

## 四、社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 👍 | 为何值得关注 |
|---|---|---|---|---|---|
| [#7739](https://github.com/earendil-works/pi/issues/7739) | Set a startup-time budget targeting jcode-comparable latency | OPEN | 10 | 0 | 性能基准硬性目标，社区首次明确提出对标竞品 `jcode` 的延迟/内存指标 |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | Extension-registered providers: fresh sessions ignore defaultProvider | OPEN | 7 | 2 | 扩展注册 Provider 的默认值在新建会话时随机回退，影响所有自定义 Provider 用户 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | Compaction prompt 包含全部 thinking text 导致超出上下文窗口 | OPEN | 6 | 1 | Reasoning 模型（DeepSeek V4.1 等）的 Compaction 永远失败，属阻断性 Bug |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | llama.cpp Responses API 工具调用被重复/损坏执行 | OPEN | 6 | 0 | 自托管生态的核心兼容性问题，影响通过 llama.cpp 后端运行的所有用户 |
| [#7658](https://github.com/earendil-works/pi/issues/7658) | Extension API for persisting API-key credentials (auth.json) | OPEN | 5 | 0 | 扩展生态"最后一公里"——目前无编程接口让扩展持久化 API Key |
| [#9905](https://github.com/earendil-works/pi/issues/9905) | Anthropic thinking.display 硬编码为 "summarized" | OPEN | 5 | 0 | CLI 无任何方式切换 `summarized/omitted`，违反 Anthropic 官方推荐用法 |
| [#9010](https://github.com/earendil-works/pi/issues/9010) | 本地 LLM 在 Compaction 时内存飙升 | OPEN | 3 | 0 | Compaction 全在主进程无 Worker 隔离，长会话多次字符串拷贝导致 OOM |
| [#10092](https://github.com/earendil-works/pi/issues/10092) | Compaction 后 provider usage 缺少 `cost` 导致 footer 崩溃 | CLOSED | 2 | 0 | Resume 即崩溃的严重 Bug，针对未规范化 `usage` 的穿透写入 |
| [#10105](https://github.com/earendil-works/pi/issues/10105) | Session 创建每次重载全部扩展（4s → >280s） | CLOSED | 2 | 0 | 大型扩展配置下的延迟雪崩，且 `new_chat` 在同进程中累加成本 |
| [#9408](https://github.com/earendil-works/pi/issues/9408) | 记录 plan-level 模型错误并在 `/model` 显示 | OPEN | 1 | 0 | 提议对 429/404/401 等做"按模型 × 凭据"标记，含徽章/排序/恢复提示 |

> **趋势速读**：今日 OPEN 的高互动 Issue 集中在 **Compaction 可靠性**、**Provider/扩展兼容性**、**启动性能** 三大类；CLOSED 的多为快速定位后的分类标记（untriaged / no-action / bug），尚未看到修复 PR 合并。

---

## 五、重要 PR 进展（精选 10 条，含全部）

今日 PR 池共 4 条更新，故全量列出并补充历史关键 PR：

| # | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#10040](https://github.com/earendil-works/pi/pull/10040) | feat(coding-agent): **Codemode and MCP** | OPEN | **里程碑级 PR**：一次性引入 Code-mode 执行模型与 MCP 协议支持，为模型（尤其是 Jev）提供沙箱；体积大，评审周期长 |
| [#8572](https://github.com/earendil-works/pi/pull/8572) | feat(ai): **Amazon Bedrock Mantle** | OPEN | 补齐 Bedrock 新 API 表面对 GPT-5.x 等模型的支持，修复 Converse 路由 Validation 失败 |
| [#10100](https://github.com/earendil-works/pi/pull/10100) | fix(ai): preserve signature-only reasoning details deltas | CLOSED | 修复 OpenRouter/Claude 流式 reasoning signature 被丢弃导致 thinking 签名丢失 |
| [#10099](https://github.com/earendil-works/pi/pull/10099) | 第一次 Git 实验作业 (jiaqitang-1) | CLOSED | 学生提交的个人学习总结，仅修改成员 README，已合并 |

> **点评**：本周最值得持续关注的仍是 **#10040**——若合并成功，Pi 将从"终端编码助手"正式迈入"具备沙箱与工具协议生态的代理运行时"。

---

## 六、功能需求趋势

从 27 条活跃 Issue 提炼，社区需求可归为以下 7 个集群：

1. **🏎️ 性能与可扩展性**（最热）
   - 启动延迟（#7739）、会话创建延迟（#10104/#10105）、Compaction 内存（#9010/#10033）、渲染开销（#10102）
   - 共识：随着扩展数量增长，主进程架构遭遇明显瓶颈，**Worker 隔离、增量加载、缓存复用** 是高频诉求

2. **🔌 Provider 兼容与扩展生态**
   - 自定义 Provider 默认值（#8810）、API Key 持久化（#7658）、llama.cpp Responses API（#9974）、Bedrock Mantle（#8572 PR）
   - 共识：扩展 API 仍有缺口，尤其在**凭据管理、模型注册标准化**两方面

3. **🧠 上下文与 Compaction**
   - Thinking text 注入策略（#10033）、`usage.cost` 规范化（#10092）、Compaction 架构（#9010）
   - 共识：Reasoning 模型普及后，Compaction 的**忠实度与边界处理**成为新焦点

4. **🎨 主题与可定制性**
   - 加粗控制（#10111）、错误文案与颜色（#10094）、输出间距（#9946）
   - 共识：用户对 TUI 美学与"低对比度 / 类 Claude"风格的需求上升

5. **🛡️ Auto-mode 安全策略**
   - Bash 审批误判（#10109）、社会工程检测过度严格
   - 共识：检测规则需要**跨工具一致性**与更细粒度的白名单

6. **📡 网络/代理稳定性**
   - Anthropic 订阅挂起（#10019）、CLIProxyAPI 重试识别（#9735）、OpenAI-Responses ID 冲突（#10106）
   - 共识：**重试分类器** 与 **跨 Provider 会话迁移** 是薄弱环节

7. **🧰 UX 小幅改进**
   - `/bug` 外部编辑器粘贴保留（#10103）、`/model` 错误徽章（#9408）、Fireworks 默认保留（#10108）

---

## 七、开发者关注点（高频痛点）

1. **大扩展配置下的延迟雪崩**
   - 用户 `wu546526` 报告 34 packages / 70+ extensions 时，CLI `new_chat` 从 4s 退化为 >280s，且 CPU 持续累积——揭示 Pi 当前缺少**会话级扩展缓存**机制。

2. **Compaction 不可靠 = 长会话不可用**
   - Reasoning 模型场景下，Compaction 要么 OOM、要么超上下文、要么写崩 footer——`#10033`、`#10092`、`#9010` 三连击，使"开长会话"成为高风险操作。

3. **Provider 切换 = 隐性迁移成本**
   - 跨 Provider 的 tool-call ID 不统一（`call_134460` vs `call_E7g...`）在切换 OpenAI-Responses 时直接 400；会话一旦混入多 Provider，后续迁移极易爆炸（#10106）。

4. **CLI/打印模式的静默错误**
   - `pi -p` 对 `reasoning:false` 模型发送 `max_tokens=1`（#10096），且 `model.maxTokens` 从不转发——自动化脚本用户被静默截断输出。

5. **扩展与系统提示的"幽灵文件"**
   - `AGENTS.md` 被读取但从未注入（#10101），`strace` 看到 openat，token 计数却没变化——典型的**加载与注入逻辑不同步**反模式。

6. **终端生命周期未妥善处理**
   - SSH 断开/关闭 tab 时 `read EIO` 直接变未捕获异常崩溃（#10110），缺乏 TTY 死亡检测。

---

## 📌 编辑备注

- 本日报数据基于 GitHub Issues / PR 在 2026-09-27 ~ 2026-09-28 的更新窗口。
- 大量 Issue 仍处于 **[CLOSED][untriaged]** 标签，建议关注后续是否被重新开启或合并修复 PR。
- **#10040（Codemode + MCP）** 是本周最值得盯梢的单点——若你正在做扩展或自研工具，建议提前阅读其 API 设计。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-28**

---

## 📌 今日速览

今日 Qwen Code 仓库围绕 **Managed Agent 多阶段架构落地** 持续推进，Stage B/D/H 的多项 PR 合并或进入评审；与此同时，多个面向 0.24.6 版本的用户痛点得到修复，包括 macOS 右侧面板无法收起、Skill 工具被排除后仍注入提示等。值得关注的是，社区对 **凭证泄露**（baseUrl 中嵌入 userinfo）与 **CI 不稳定**（runner 镜像、kernel-manager 计时）的讨论显著升温。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时无 Releases）。但夜间构建 `v0.24.6-nightly.20260927.3f5ae3ffeb` 的 release workflow 失败（#12880），`integration_none` 任务未通过，建议关注下一次 nightly 状态。

---

## 🔥 社区热点 Issues

| # | Issue | 关键信息 | 为什么值得关注 |
|---|-------|---------|---------------|
| 1 | [#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构提案 | 36 条评论，作者 doudouOUC | **全仓最高热度议题**，定义 TypeScript agent loop 与 Managed engine 并存的分阶段交付蓝图，是后续 Stage B/D/H 系列工作的总纲 |
| 2 | [#12826](https://github.com/QwenLM/qwen-code/issues/12826) — Webview CodeMirror race 崩溃 | P1 Bug，CLOSE | VSCode Remote-SSH 下 `@file.tsx` 触发 CodeMirror EditorView race 导致 Webview 崩溃（0.24.6），影响核心编辑体验 |
| 3 | [#12856](https://github.com/QwenLM/qwen-code/issues/12856) — aux-model 选择器 NUL 分隔泄露凭证 | P2，5 条评论 | **安全级别问题**：`visionModel/imageModel/advisorModel/fastModel/compactionModel` 在 baseUrl 含 `user:sk-...@host` 时会被原样输出，存在凭证泄露 |
| 4 | [#12737](https://github.com/QwenLM/qwen-code/issues/12737) — Stage B ACP Bridge Host 集成 | 9 条评论，wenshao | Stage B 落地切片，让 `qwen serve` 真正使用 #12698 的双引擎构造 |
| 5 | [#12835](https://github.com/QwenLM/qwen-code/issues/12835) — Skill 工具排除后仍注入 skills listing | P2，ready-for-agent | 与 #12838 PR 直接对应，行为不一致：`--exclude-tools skill` 时 system-reminder 仍带上 skills 块 |
| 6 | [#12793](https://github.com/QwenLM/qwen-code/issues/12793) — Stage D 公开 API 契约 | CLOSE，5 条评论 | Managed Agent 公开 OpenAPI、Session 查询与事件回放已进入主线 |
| 7 | [#12874](https://github.com/QwenLM/qwen-code/issues/12874) — macOS 右侧扩展区无法关闭 | P2，4 条评论 | toggle 状态机缺陷：展开后无法再收合，Esc、拖拽分隔线均无效 |
| 8 | [#12859](https://github.com/QwenLM/qwen-code/issues/12859) — fastjson2 2.0.65 负 scale BigDecimal 不可读 | P2 | 复用 #12798 已闭合的不变式违例面，Runtime Broker 持久化后无法读回 |
| 9 | [#12670](https://github.com/QwenLM/qwen-code/issues/12670) — Broker 重启后 LOST binding 永久钉死 | P2，need-discussion | 真实环境验证暴露的持久化缺陷，#12766 提出的可恢复 local-process 议题是其修复路径 |
| 10 | [#10151](https://github.com/QwenLM/qwen-code/issues/10151) — Auto Memory 结构化召回 | 4 条评论 | 已落地为 PR #10183，是"上下文性能"路线图核心能力之一 |

---

## 🛠 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | [#10183](https://github.com/QwenLM/qwen-code/pull/10183) — feat(memory): 结构化按需召回 | Auto Memory 拆分后运行时部分，前置 #12726/#12757 已合并 | OPEN，已超 5 轮评审 |
| 2 | [#12848](https://github.com/QwenLM/qwen-code/pull/12848) — Hosted 前台 Shell turns（gated） | 在 `hosted-workspace-shell/1` profile 下启用前台 shell，stdout/stderr 全量入 SQL | OPEN |
| 3 | [#12839](https://github.com/QwenLM/qwen-code/pull/12839) — W0e 终端恢复围栏 | 执行原始 journal 不可恢复时进入不可变 `ABANDONED`，保留请求/幂等/执行身份但不伪造结果 | OPEN |
| 4 | [#12828](https://github.com/QwenLM/qwen-code/pull/12828) — 普通 host 接入双引擎（opt-in） | Stage B 最后一片，让 `qwen serve` 默认关闭、可显式开启配对的 Legacy + Managed | **CLOSED** ✅ |
| 5 | [#12773](https://github.com/QwenLM/qwen-code/pull/12773) — fast 模型钉到所选 provider 端点 | 多 provider 同 id 时按所选 provider 锁定 baseUrl，修复 #12856 凭证泄露面 | OPEN |
| 6 | [#12876](https://github.com/QwenLM/qwen-code/pull/12876) — Web Shell 右栏下沉避开 macOS 标题栏拖拽区 | 修复 #12874：close 按钮原本被标题栏覆盖 | OPEN |
| 7 | [#12838](https://github.com/QwenLM/qwen-code/pull/12838) — Skill 工具未注册时跳过 skills listing | 与 #12835 配套，移除冗余的 `<available_skills>` 注入 | OPEN |
| 8 | [#12855](https://github.com/QwenLM/qwen-code/pull/12855) — Stage H 记录提交与任务列表服务 | H0c：Session 权威端提交 H 记录，控制平面据此重建任务列表 | OPEN |
| 9 | [#12869](https://github.com/QwenLM/qwen-code/pull/12869) — 可信本地重启后恢复 Workspace holder | W0e-3：观察 generation、保留终端不确定性、清理 storage holder、退役 generation | OPEN |
| 10 | [#12884](https://github.com/QwenLM/qwen-code/pull/12884) — 放宽 node-repl 有界取消测试时间裕量 | 修复 #12882 CI 抖动：host exec 超时 200→2000ms、用例预算 10s→20s | **CLOSED** ✅ |
| 11* | [#12833](https://github.com/QwenLM/qwen-code/pull/12833) — Desktop release matrix 加入 linux-aarch64 | ARM64 Linux（AppImage/deb）正式进发布矩阵 | **CLOSED** ✅ |

---

## 📈 功能需求趋势

通过对近 50 条 Issue 的语义聚类，社区关注焦点呈现以下五条主线：

1. **Managed Agent 多阶段架构** — Stage B/D/H/W0e 持续切片落地（#12380、#12737、#12793、#12847、#12855、#12869、#12865），是当前最大的工程投入方向。
2. **Auto Memory 与上下文性能** — 结构化召回 + 无损迁移（#10151/#10183）、32K 自定义 provider 引导（#12886）、Skills 注入控制（#12835/#12838）。
3. **平台分发与桌面体验** — Linux ARM64 桌面（#12806/#12833）、macOS 桌面面板交互（#12874/#12876）、Windows standalone-update（#12802）、release matrix 治理（#12877）。
4. **Provider / 模型切换健壮性** — fast/aux model 钉端点（#12773/#12856）、Ollama 零参工具拒绝（#12878）、SDK 代理下载（#12829）。
5. **MCP 与隐私遥测** — `mcp reconnect` 仍发送 `session_start`（#12844）、NO_PROXY 行为对照 undici（#12852）、ScreenContextAgent 示例（#12832）、Web Shell 引用选区（#12682）。

---

## 🧑‍💻 开发者关注点（高频痛点）

- **凭证泄露面**：`baseUrl` 中嵌入 userinfo（API key）会在多处 UI/日志/状态展示原样输出，#12856 揭示这是被多个新设置项沿用的同一格式，需在序列化层加脱敏。
- **CI 抖动与超时**：kernel-manager bounded-cancellation 测试（#12882/#12884）、main CI LLM 路由用例（#12714）多次红，提示 runner 负载下计时参数需系统性放宽。
- **可恢复性盲区**：Runtime Broker 在主机 reboot / 自身重启时无法 adopt 或 retire worker（#12670、#12766），影响 Managed Agent 长期可用性。
- **macOS 桌面 UX**：标题栏拖拽区与 docked 面板工具栏重叠（#12874）反映桌面端 HIT 区域设计需独立审计。
- **多 provider 同 id 歧义**：fast/aux 模型未与 provider 端点绑定，导致选择器在不同 session 间表现不可预测。
- **隐式遥测**：用户在隐私开关关闭后仍触发 `session_start` 上报，开发者对 `createMinimalConfig` 默认值一致性提出质疑。
- **Linux ARM64 长期缺失**：从 PR 讨论看，runner 镜像 glibc 基线（ubuntu-22.04-arm）尚无测试见证（#12877），平台扩展需要补齐 CI 证据链。

---

*数据来源：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 采样窗口：2026-09-27 → 2026-09-28 UTC*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>



</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*