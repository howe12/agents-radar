# AI CLI 工具社区动态日报 2026-10-10

> 生成时间: 2026-10-10 03:49 UTC | 覆盖工具: 9 个

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

**数据日期**：2026-10-10
**覆盖工具**：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI（Kimi Code CLI 当日无活动）

---

## 一、生态全景

2026 年 10 月的 AI CLI 工具生态已进入**"平台化与稳定性并重"的中段阶段**：一方面各工具争相发布扩展机制（Mods、Plugins、Skills、Managed Agent）与多端协同（Desktop/TUI/Web/Mobile）；另一方面 v0.10.x / v2.x 等大版本迭代带来的回归问题集中爆发，沙箱、JVM 子进程、Hooks 归属、Windows 兼容性成为横跨所有工具的"公地痛点"。**会话管理、长上下文压缩、Provider 适配与 MCP 协议**正在成为下一阶段竞争的四个分水岭。

---

## 二、各工具活跃度对比

| 工具 | 今日热榜 Issues | PR 进展 | 版本动态 | 整体节奏 |
|------|---------------|---------|----------|----------|
| **Claude Code** | 10（Top #91870 单议题 250 💬） | 2（其中 #100293 HIPAA 合规样例合入） | v2.1.296（Gateway `code` 策略 + `autoCompactWindow`） | 🟡 中等，偏质量沉淀 |
| **OpenAI Codex** | 10 | 10 | rust-v0.162.1 稳定 / v0.163.0-alpha.5 | 🟢 高速，多面推进 |
| **Gemini CLI** | 10 | 10 | v0.65.0-nightly + v0.64.0-preview.1 双发 | 🟢 高速，子代理治理为核心 |
| **GitHub Copilot CLI** | 10 | 2（其中 #5093 供应链校验缺陷） | v1.0.96 预发布系列（3 个迭代） | 🟡 中等，企业沙箱为重点 |
| **Kimi Code CLI** | 0 | 0 | — | ⚪ 无活动 |
| **OpenCode** | 10 | 10 | 无新 Release，V2 清扫期 | 🟢 高速，PR 关闭节奏快 |
| **Pi** | 50 | 18 | 无新 Release，main 分支密集合入 | 🟢🟢 **最活跃**（Issue/PR 双高） |
| **Qwen Code** | 10 | 10 | v0.25.1-preview.1 + v0.25.0-nightly | 🟢 高速，Managed Agent 推进 |
| **DeepSeek TUI** | 10 | 10+（含 Dependabot 批量） | v0.10.2 PR #6907 已合并，Tag 未生成 | 🟢 高速，Runtime 拆分阶段 |

**关键观察**：
- **Pi 单日 50 条 Issue 远超其他工具**，反映其"轻量多 Provider SDK"定位带来的多生态集成负担；
- **Codex 与 Gemini CLI 的 PR 节奏最稳定**（每日 10 条量级），处于密集功能日；
- **Claude Code 与 Copilot CLI 的 PR 数偏少**，但议题讨论度更深（单 Issue 250/32 评论）；
- **OpenCode 当日关闭的 Issue 最多**（6/10），属于"清扫式"开发节奏。

---

## 三、共同关注的功能方向

| 共性方向 | 涉及工具 | 典型诉求 |
|----------|----------|----------|
| **沙箱与权限模型** | Codex（Windows sandbox）、Copilot CLI（Path RW + JVM）、OpenCode（Plan agent shell）、Gemini CLI（`untrustedContextTracker` 误报）、Claude Code（Remote Control 权限继承） | 沙箱对子进程、JVM、Git 凭证、HOME 的细粒度授权；误报治理 |
| **Windows / 终端兼容性** | Pi（单 Issue 79 💬，终端矩阵分散）、Codex（WSL sandbox）、Copilot CLI（NixOS keychain）、OpenCode（Windows TUI 卡顿）、DeepSeek TUI（junction 路径） | 终端矩阵（cmd/PowerShell/Alacritty/WSL/ConPTY）需要明确支持边界 |
| **子代理/Agent 架构稳定性** | Gemini CLI（Subagent GOAL 误报、Generalist 挂起）、OpenCode（subagent null）、Qwen Code（Managed Agent 阶段 D/G/H）、Claude Code（`autoCompactWindow`） | 子代理状态协议、超时/取消语义、能力暴露 |
| **会话持久化与上下文压缩** | Claude Code（5h 硬切、autoCompactWindow）、Qwen Code（Stage D 持久化）、DeepSeek TUI（Emergency compaction 副作用）、Pi（Qwen cache 命中率） | 暂停/排队替代终止、可追溯的 compaction、可恢复的快照 |
| **MCP 协议生态** | Codex（cloud_threads）、OpenCode（MCP OAuth `*.localhost`）、Qwen Code（`tools/list_changed` 通知）、Copilot CLI（Atlassian MCP 凭据持久化）、Gemini CLI（CUA MXC 启动器） | 凭据持久化、协议版本迁移、生命周期管理 |
| **Provider 多模型适配** | Pi（OpenRouter/Bedrock/Qwen/Groq 边界）、Codex（GPT-6 桌面端缺位）、Copilot CLI（Opus 4.6 上限 200K）、OpenCode（xAI `x_search`、DeepSeek V4 截断） | 模型上下文限制对齐、原生工具解锁、Provider 状态查询 |
| **TUI 本地化与可观测性** | Pi（CJK 加重、xterm 复制）、Claude Code（Warp 截断）、DeepSeek TUI（CPU 回归、滚动卡顿）、OpenCode（Windows 鼠标） | 终端 resize/复制/滚轮的事件层稳定性 |
| **供应链与安全披露** | Copilot CLI（#5093 SHA256 校验实质失效）、Qwen Code（CVE 审计失败 #13078、heredoc 注入 #13724） | 安装链校验、可信审计、shell 注入路径治理 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级可治理 + 扩展生态 | 中大型企业、合规团队、Mods 早期采用者 | HIPAA/MDM 策略、Gateway 模式、Mods 插件（hooks/plugins/skills） |
| **OpenAI Codex** | 模型/生态深度绑定 + 跨端一致 | OpenAI 生态重度用户、桌面/Cloud/Dots 用户 | Dots 跨端协议、GPT-6 系列、OSC 7501 终端上报 |
| **Gemini CLI** | Agent 优先 + AST 感知工具链 | 重度 Agent 用户、研究型任务 | Gemini 3 多模态适配、子代理体系、AST-aware 代码工具 |
| **GitHub Copilot CLI** | GitHub/ACP 生态核心 | GitHub 企业用户、Byok 多模型用户 | ACP 协议、Microsoft Entra 认证、Hook 可观测性 |
| **OpenCode** | 多客户端统一后端 | 自托管/自建前端用户 | TUI/Web/Desktop 三端共享 server、V1→V2 路径规范化 |
| **Pi** | 轻量多 Provider SDK | 跨 Provider 切换用户、扩展作者 | pi.dev schema 契约、Cloudflare AI Gateway 自定义、Provider 目录裁剪 |
| **Qwen Code** | Managed Agent 平台 | 企业级长流程自动化 | Stage D/G/H 分阶段交付、WebSocket 远程 Host、java_durable |
| **DeepSeek TUI** | Runtime 解耦 + 体验打磨 | 桌面/TUI 多端用户 | Runtime/TUI crate 拆分、Pet mode、Plugin OAuth |

**关键差异化结论**：
- **"平台化"路径分歧**：Claude Code 走 Mods（开放社区），Qwen Code 走 Managed Agent（企业托管），OpenCode 走多客户端 SDK，Codex 走 Dots 跨端协议；
- **"沙箱深度"差异**：Copilot CLI（Path + JVM + Git + HOME 四维授权）和 Qwen Code（heredoc/引号注入治理）最深，Gemini CLI（`untrustedContextTracker`）和 Claude Code（`code` 网关策略）偏中等；
- **"Provider 中立性"差异**：Pi 与 OpenCode 强调多 Provider 可插拔，Claude Code/Codex/Gemini 偏向自家模型深度集成。

---

## 五、社区热度与成熟度

### 热度分层

| 层级 | 工具 | 判定依据 |
|------|------|----------|
| **🔥 超高活跃** | Pi（50/18）、DeepSeek TUI（10/10+，Runtime 拆分阶段） | 绝对 Issue 数与 PR 数领先 |
| **🟢 高活跃** | Codex、Gemini CLI、OpenCode、Qwen Code | 日均 10 条 Issue + 10 条 PR 节奏稳定 |
| **🟡 中活跃** | Claude Code、Copilot CLI | Issue 深度高但数量偏少，PR 数量少 |
| **⚪ 沉寂** | Kimi Code CLI | 当日 0 活动 |

### 成熟度判断

| 成熟阶段 | 工具 | 特征 |
|----------|------|------|
| **平台化期** | Claude Code（Mods 提案 250 评论）、Qwen Code（Managed Agent 阶段 D→H）、Codex（Dots + Cloud + Desktop） | 议题已上升至架构级路线图讨论 |
| **稳定性阵痛期** | Gemini CLI（子代理）、OpenCode（V2 迁移）、Copilot CLI（v1.0.96 预发布连发） | 集中关闭回归 Issue，PR 节奏高频 |
| **生态扩张期** | Pi（多 Provider）、DeepSeek TUI（Runtime 拆分 + Plugin OAuth） | Issue 数多但分散，新能力合入快 |
| **观察期** | Kimi Code CLI | 24 小时无活动 |

**核心信号**：Claude Code 处于"社区倒逼官方排期"的特殊阶段（Mods 单议题 250 评论），是当前社区诉求最未被满足的工具。

---

## 六、值得关注的趋势信号

### 1. 🧩 **"扩展性"成为下一个分水岭**
Claude Code 的 Mods（250 评论）、Gemini CLI 的 subagent 自动调用（#21968）、Qwen Code 的 Mod 模块（#13774）共同指向一个判断：**单 Agent 工具的胜负已分，下一轮竞争在"扩展生态"**——谁能最快稳定 hooks + plugins + skills 三层抽象，谁就能留住重度用户。

### 2. 🔒 **"沙箱表达力"取代"沙箱存在性"成为关键议题**
沙箱已从"是否启用"过渡到"如何精细化授权"：Path RW、JVM 子进程、Git 凭证、HOME 覆写、网络回连——这五类是 #4516、#52179、#4516、#100962、#53955 等高频议题的共同母题。**对开发者的参考**：选择 CLI 工具时，需将"沙箱对子进程的授权粒度"作为 P0 评估项。

### 3. ⏱ **"长任务可暂停/可恢复"取代"能跑完"成为基线**
Claude Code 5h 硬切（#98299）、Codex 60s 阻塞上限（#31935，👍21）、DeepSeek TUI Emergency compaction 副作用（#6721）形成同一信号：**Agent 工具不再适合"无界轮询"模型，必须支持中断/恢复/排队**。这对自动化管线与 CI 集成尤为关键。

### 4. 🌐 **MCP 从"能连上"转向"能稳定复用"**
Codex `cloud_threads`、OpenCode `*.localhost` OAuth、Qwen Code `tools/list_changed`、Copilot CLI Atlassian MCP 凭据——**MCP 的生产化阻力集中在"连接后"**而非"连接中"。协议版本迁移与凭据生命周期是未来 6 个月 MCP 生态的核心战场。

### 5. 🪟 **Windows 与多终端矩阵被严重低估**
Pi 单 Issue #7547（79 评论）暴露 Windows 路径碎片化；OpenCode #54239、Codex #49789、Copilot CLI #3081（NixOS）形成同一趋势：**"Mac/Linux 跑通 ≠ Windows 跑通"**，且终端复用器（Zellij、Crostini、ConPTY）组合的回归测试覆盖不足。对企业 IT 选型意味着"先做终端矩阵 PoC 再规模化"。

### 6. 🔐 **供应链与运行时信任链双重警示**
Copilot CLI #5093 揭示安装脚本 SHA256 校验"名义生效实则失效"；Qwen Code #13078 自动化 CVE 审计失败；Claude Code PR #100293 同步引入 HIPAA 合规样例——**AI CLI 工具正进入"被企业审计"的阶段**，供应链透明度与合规配置将成为采购决策的关键。

### 7. 📊 **可观测性从"加分项"升级为"必需项"**
Codex #52725（

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-10**

> ⚠️ **数据说明**：本次抓取数据中所有 PR 的评论数（`评论`）与点赞数（`👍`）均显示为 `undefined / 0`，因此 PR 排行无法直接基于互动量排序。下文**热门 PR 排行**综合采用以下信号：① 最近 30 天内有更新；② 解决高互动 Issues；③ 修复/新增内容的重要性。Issues 部分数据完整，可直接按评论数分析。

---

## 1. 热门 Skills 排行（按重要程度）

| 排名 | PR | Skill / 主题 | 状态 | 热度来源 |
|---|---|---|---|---|
| 🥇 | [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator / eval viewer 安全加固**（Script breakout、DNS rebinding、跨站 POST、Escape 漏洞） | OPEN | 直接对应 [#1394](https://github.com/anthropics/skills/issues/1394)（4 评）安全反馈，是 #492（43 评）的具体落地 |
| 🥈 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder**：适配 `mcp>=2.0.0` 的 `streamable_http_client` 改名与自定义 headers | OPEN | 修复 [#1668](https://github.com/anthropics/skills/issues/1668)；MCP 是当前最热整合点 |
| 🥉 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator**：隔离 trigger evals + Windows / 运行时失败兼容 | OPEN | 解决 [#1383](https://github.com/anthropics/skills/issues/1383)、[#1352](https://github.com/anthropics/skills/issues/1352) 等 4 评级核心问题 |
| 4 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor**：Solidity / Rust 合约静态分析 + TON 链上存证 | OPEN | 社区首次出现 Web3 原生 Skill，体现 Skills 走向垂直行业 |
| 5 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography**：AI 生成文档的排印质量控制（孤字/寡行/编号错位） | OPEN | 跨度近 7 个月仍未合并的"长青 PR"，影响所有文档生成场景 |
| 6 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)**：E2E 自动化测试（视觉 + 浏览器操控） | OPEN | 代表"测试自动化"这一稳定需求方向 |
| 7 | [#1792](https://github.com/anthropics/skills/pull/1792) | **fix(docx)**：LibreOffice 超时正确报为 Error，并校验 `w:ins/w:del` 残留 | OPEN | 直接提升 docx skill 的可靠性 |
| 8 | [#1730](https://github.com/anthropics/skills/pull/1730) | **fix(claude-api)**：替换 academy-guide / tool-use-concepts 中失效的 URL | OPEN | 文档型维护，体现社区也在反哺"基础 Skill" |

---

## 2. 社区需求趋势（来自 Issues）

按 Issue 评论数聚类，可清晰看到 4 条主线：

### 🔴 趋势 A：Skills 的 **安全与信任边界**（最高优先级）
- **[#492 (43 评)](https://github.com/anthropics/skills/issues/492)** — 社区 Skill 以 `anthropic/` 命名空间发布，构成**仿冒官方 + 权限提升**风险。这是整个仓库当前讨论最热烈的话题。
- **[#1175 (4 评)](https://github.com/anthropics/skills/issues/1175)** — SharePoint Online 文档下，权限逻辑写在 SKILL.md 里的安全性顾虑。
- **[#1394 (4 评)](https://github.com/anthropics/skills/issues/1394)** — eval-viewer 的 `escapeHtml` 不属性安全，可被 display-path XSS 利用。
- 对应 PR 已开始落地：[#1961](https://github.com/anthropics/skills/pull/1961)、[#1980](https://github.com/anthropics/skills/pull/1980)。

### 🟠 趋势 B：**评测 / 触发机制（Eval & Trigger）严重失灵**
- **[#556 (12 评)](https://github.com/anthropics/skills/issues/556)** — `run_eval.py` 中 `claude -p` 对所有 query 的 skill 触发率为 **0%**。
- **[#1383 (4 评)](https://github.com/anthropics/skills/issues/1383)** — skill-creator 六个静默失败：布局不匹配、delta 反转、Windows 触发失败、Skill 影子等。
- **[#1352 (4 评)](https://github.com/anthropics/skills/issues/1352)** — 并行 worker 跨线程交叉匹配 Skill UUID，导致触发率假阴性。
- **[#1390 (4 评)](https://github.com/anthropics/skills/issues/1390)** — mcp-builder 的 evaluation 在真实 MCP 服务器上得分为 0/N。
- PR [#1298](https://github.com/anthropics/skills/pull/1298) 正系统性回应这一簇问题。

### 🟡 趋势 C：**上下文与知识密度**管理
- **[#1487 (4 评)](https://github.com/anthropics/skills/issues/1487)** — `claude-api` skill 单次注入 ~156k tokens，瞬间耗尽上下文。
- **[#1329 (9 评)](https://github.com/anthropics/skills/issues/1329)** — 提出 **`compact-memory` Skill**：用符号记法压缩 agent 自身笔记，回应长会话痛点。

### 🟢 趋势 D：**企业级 / 协作型能力**
- **[#228 (16 评)](https://github.com/anthropics/skills/issues/228)** — 组织内共享 Skills（替代"导出 → Slack → 上传"的笨流程）。
- **[#189 (6 评)](https://github.com/anthropics/skills/issues/189)** — `document-skills` 与 `example-skills` 安装内容重复，造成 context 中 Skill 重复。
- **[#412 (6 评)](https://github.com/anthropics/skills/issues/412)** — 提出 **`agent-governance`** Skill：策略执行、威胁检测、信任评分、审计轨迹。
- **[#1385 (5 评)](https://github.com/anthropics/skills/issues/1385)** — Reasoning Quality Gate Pipeline（预校准 → 对抗评审 → 交付验证三段管线）。

---

## 3. 高潜力待合并 Skills

按"即将被 Merge 的可能性"排序，**安全与基础设施类 PR 最接近合并线**：

| PR | Skill / 主题 | 状态 | 合并潜力判断 |
|---|---|---|---|
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer 加固 | OPEN, 10-07 更新 | ⭐⭐⭐⭐⭐ 直接呼应 #492 / #1394，安全类 PR 通常优先合入 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 去除 `shell=True` 防命令注入 | OPEN, 10-06 | ⭐⭐⭐⭐⭐ 修复 CWE-78，合并门槛低 |
| [#1976](https://github.com/anthropics/skills/pull/1976) | element_discovery.py 修复 textarea/select 上报 | OPEN, 10-07 | ⭐⭐⭐⭐ 明确修复 #1891 的小补丁 |
| [#1977](https://github.com/anthropics/skills/pull/1977) | algorithmic-art wrapAround 修负值 | OPEN, 10-07 | ⭐⭐⭐⭐ 修复 #1897，diff 小 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 适配 mcp>=2 | OPEN, 10-08 | ⭐⭐⭐⭐ 等同 SDK 兼容性 fix，依赖 MCP 团队节奏 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator Windows / trigger evals | OPEN, 09-16 | ⭐⭐⭐ 涉及面积大、争议面广，可能需要拆分 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator 包脚本直运行支持 | OPEN, 10-08 | ⭐⭐⭐ 改善开发者体验 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio**（零成本 Markdown→MP4+配音） | OPEN, 09-15 | ⭐⭐⭐ 新增 Skill 中热度较高的"创作类"代表 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | Notion Spec→Implementation + 简历量化审查 | OPEN, 09-30 | ⭐⭐ 双 Skill 合入评审流程 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | OPEN, 09-16 | ⭐⭐ 引入第三方链上依赖，合并门槛偏高 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是：在 Skills 数量与场景爆发的同时，必须先补齐"信任机制 + 评测可信度 + 上下文预算"这三块基础设施，否则生态将被仿冒、误触发和上下文耗尽三大问题反向侵蚀。**

具体看：仓库 Issue 讨论的**前三名主题**全部是基础设施问题（#492 安全仿冒、#556 触发率 0%、#1487 156k token 注入），而非新 Skill 创意——这意味着 Claude Code Skills 正在从"内容百花齐放"阶段进入"工程质量守门"阶段，**未来的合并节奏将由安全/评测/上下文类 PR 主导**。

---

# Claude Code 社区动态日报
**日期：2026-10-10**

---

## 今日速览

今天 Claude Code 发布了 **v2.1.296**，主要扩展了 Gateway 与子代理的配置能力（新增 `code` 网关策略与 `autoCompactWindow` 字段）。社区方面，"Mods"扩展性提案（#91870）持续发酵，已突破 250 条评论和 131 个点赞，成为本季度最受关注的特性请求；同时围绕 **Remote Control、Desktop App、长 Prompt 截断、插件 Skills 同步** 等方向出现一批新 Bug，反映出 v2.1.29x 系列在跨设备会话与桌面端 UI 上的回归较多。

---

## 版本发布

### v2.1.296（2026-10-10）

本次小版本包含两项变更：

1. **Claude Apps Gateway 新增 `code` 策略键**
   - `managed.policies[]` 中增加 `code` 选项，与 `cli` 等价，但额外启用 Claude Desktop 的网关模式（Gateway Mode），并作用于 Code Tab。
   - 适用于为 Desktop Code Tab 单独下发策略的企业/MDM 场景。

2. **子代理支持 `autoCompactWindow` 字段**
   - 在 subagent frontmatter 与 `--agents` 定义中加入 `autoCompactWindow`，用于精细化控制子代理的上下文压缩窗口。

> 📎 配套观察：本版本已出现至少 2 条用户报告（#100960、#100959）在升级后产生新行为，建议升级前查看升级说明。

---

## 社区热点 Issues（Top 10）

| # | Issue | 热度 | 简要说明 |
|---|-------|------|---------|
| 1 | [#91870](https://github.com/anthropics/claude-code/issues/91870) **Mods - make Claude 10x more extensible** | 💬250 / 👍131 | 本季度最热特性提案，社区维护者持续更新路线图，涵盖 hooks / plugins / skills 等扩展机制。Mods 已成为 Claude Code 生态的最大公约数。 |
| 2 | [#29214](https://github.com/anthropics/claude-code/issues/29214) **Remote Control：移动端仍弹出权限提示** | 💬32 / 👍81 | 即使 CLI 用 `--dangerously-skip-permissions`，手机端的权限弹窗仍不继承会话策略；属于体验级关键问题，影响远程控制可用性。 |
| 3 | [#56281](https://github.com/anthropics/claude-code/issues/56281) **无法从 Max 5x 升级到 20x：支付反复失败** | 💬29 / 👍9 | 用户支付链路与客服响应存在明显断层，已被官方标注 `invalid`，但仍持续收到 +1 评论，是订阅与计费侧的舆情热点。 |
| 4 | [#100114](https://github.com/anthropics/claude-code/issues/100114) **Windows Desktop 重启后 Remote Control 不恢复** | 💬4 / 👍1 | 自动更新静默重启后，与移动端已配对的会话被归档，需手动在桌面"唤醒"。是 Desktop 端 Remote Control 回归的典型问题。 |
| 5 | [#85848](https://github.com/anthropics/claude-code/issues/85848) **Discussion mode：只读、可导出会话** | 💬3 / 👍4 | 提出一种"只读对话"模式，不执行工具但产出可导出制品，满足代码评审、方案讨论等场景。 |
| 6 | [#74004](https://github.com/anthropics/claude-code/issues/74004) **CLI 静默截断长输入** | 💬3 | 用户输入约 121 行提示词时被无声截断，缺少任何告警；与后续两条同类型 issue 共同形成"长 Prompt 截断"集群。 |
| 7 | [#90910](https://github.com/anthropics/claude-code/issues/90910) **Warp 下 macOS 长提示词开头被切 762/2211 字符** | 💬3 | 同样的截断问题在 Warp 终端复现，明确给出字符比例，影响大段代码/上下文粘贴场景。 |
| 8 | [#100106](https://github.com/anthropics/claude-code/issues/100106) **Desktop 自动更新后所有 Remote Control 会话掉线** | 💬2 | 与 #100114 互为镜像（macOS 版本），反映 Desktop 自动升级链路对长连接的处理不够稳健。 |
| 9 | [#98299](https://github.com/anthropics/claude-code/issues/98299) **5 小时会话限制直接杀死在跑的 workflow agent** | 💬2 | 期望"暂停/排队"而非"终止"，对长流程自动化用户影响显著。 |
| 10 | [#100813](https://github.com/anthropics/claude-code/issues/100813) **`/skills` 显示已加载，但模型迟迟/无法看到 Skills 列表（2.1.295）** | 💬2 | Skills 工具声明了清单，主体却没收到；子代理却能拿到完整列表，强烈提示主代理 System Prompt / Skills 注入存在回归。 |

---

## 重要 PR 进展

> 注：过去 24 小时内仅有 2 条 PR 活动，以下逐条说明。

1. **[#100293](https://github.com/anthropics/claude-code/pull/100293) — Add HIPAA settings example**（已合入 ✅）
   - 新增 `examples/settings/` 下的 HIPAA 合规样例：`settings-hipaa.json`、`managed-mcp-hipaa.json`、配套 `README-hipaa.md`，用于限制会话内容外泄至开发者本机之外——属于企业合规落地型贡献。

2. **[#41447](https://github.com/anthropics/claude-code/pull/41447) — feat: open source claude code ✨**（长期置顶 🟡）
   - 仍以请求开源 Claude Code 仓库的元议题存在，关闭了一组重复议题但 PR 本身长期未合并；可视作社区诉求"晴雨表"。

由于其他活跃 PR 较少，本期额外关注以下被 Issue 反复提及、亟需合并方向的隐含 PR 信号：

- **autoCompactWindow 子代理字段**（已在 v2.1.296 发布，期待对应实现/测试 PR）
- **Skills 注入主代理的修复**（针对 #100813 回归）
- **Remote Control 跨重启恢复**（针对 #100114、#100106）
- **长 Prompt 截断告警/UI 反馈**（针对 #74004、#90910、#92118 集群）

---

## 功能需求趋势

将今日活跃 Issue 按主题聚类，可看出社区关注方向如下：

| 方向 | 代表 Issue | 趋势强度 |
|------|-----------|----------|
| **插件/MOD 生态扩展性** | #91870（Mods）、#100958（plugin pane 焦点）、#100813（skills 列表） | 🔥🔥🔥🔥🔥 |
| **Remote Control & Desktop 稳定性** | #29214、#100114、#100106、#100962 | 🔥🔥🔥🔥 |
| **会话管理与成本可见性** | #98299（5h 限制）、#99804（/usage）、#85848（只读模式）、#94063（prompt stash 持久化） | 🔥🔥🔥🔥 |
| **长 Prompt / 终端输入体验** | #74004、#90910、#92118、#99252（折叠不可恢复） | 🔥🔥🔥 |
| **权限与会话边界（Permissions）** | #99865（auto 模式仍弹窗）、#100962（远程设备子文件夹授权）、#100963（被拒后停 agent） | 🔥🔥🔥 |
| **模型能力/安全分类器** | #100964、#100959、#100965、#100960、#95876（inline effort 等级） | 🔥🔥 |
| **GitHub 集成 / claude.ai 云使用** | #100944、#100961（云额度消耗）、#98468 | 🔥 |

> 总结：**Mods 扩展性、Desktop/Remote Control、Skills 注入、长输入截断** 是当前最受关注的四类话题。

---

## 开发者关注点

综合 Issue 反馈，开发者近期高频痛点可归纳为：

1. **Desktop 与移动端的 Remote Control 不一致**
   - 权限策略不随会话继承、自动升级导致会话失活、Windows/macOS 表现各异——#29214、#100114、#100106、#100962 形成"Remote Control 体验破碎"集群。

2. **v2.1.29x 系列回归较密集**
   - 同一日出现 #100813（skills）、#100958（plugin 焦点）、#100959（security classifier）、#100960（behavior drift）四条 v2.1.295/296 报告，提示该小版本在 Desktop UI 与 System Prompt 注入层存在回归。

3. **长输入/粘贴物"无声截断 + 不可逆折叠"**
   - 多平台（macOS/Warp、Linux/WSL）复现，且 Transcript 折叠后无法通过 Ctrl-O 还原（#99252），对调试与代码评审场景造成不可逆数据丢失。

4. **插件与 Skills 的"声明与实际"割裂**
   - `/skills` 显示可用但主代理拿不到列表（#100813）；plugin pane 抢不到键盘焦点（#100958、#100966）；同步插件在启动期的路径竞态（#96997 已闭环）——Mods 体系的关键路径仍有稳定性债务。

5. **会话与成本的"看不见"**
   - 5 小时硬切（#98299）、OAuth 切换后 `/usage` 失效（#99804）、claude.ai 云额度被普通额度占用（#100961）——开发者对**会话可暂停、成本可追溯**的诉求强烈。

6. **安全分类器与权限边界的误判**
   - 鉴权架构文档、README review 插件被误拦（#100959、#100965、#100964）；auto 模式下仍弹窗（#99865）——反映企业对权限与审计的配置能力仍有缺口。

7. **请求已久但仍未排期的特性**
   - 提示词暂存（stashed prompt）跨重启恢复（#94063）、行内 effort 等级（#95876，👍12）、Discussion 模式（#85848）——属于"低成本、高呼声"的功能集。

---

### 📌 编辑建议（给关注 Claude Code 的开发者）

- **暂缓升级到 v2.1.296** 若你的工作流重度依赖插件 / Remote Control / skills 注入，待修复发布；
- 关注 #91870 与 v2.1.296 中新增的 `autoCompactWindow`，这两条线索最能预判下一波插件与子代理能力变化；
- 企业用户可优先审阅刚合入的 HIPAA 配置样例（PR #100293），作为合规基线起点。

— *日报生成：基于 2026-10-10 GitHub 公开数据*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-10**

---

## 1. 今日速览

今日 Codex 社区活动密度较高，**Windows 沙箱稳定性**和**Dots 跨设备体验**成为两大焦点议题。Rust 侧发布了稳定版 **0.162.1**（修复 TUI 异步问题崩溃与后台服务兼容性问题），同时 0.163.0 已迭代至 alpha.5 阶段。Issues 端，Windows 10/11 上的 sandbox 错误（os error 2/32）、Dots 调用失败、新模型在 picker 中缺失等问题持续被广泛讨论；PR 端则集中于可观测性、安全加固与 Windows MXC 沙箱重构。

---

## 2. 版本发布

### 🔖 rust-v0.162.1（稳定版）
本日最重要的稳定发布，含两项关键修复：
- **TUI 崩溃修复** (#51866)：异步 question 含多行内容时不再截断超链接与换行。
- **后台服务启动修复**：后台 server 的 feature 配置与 CLI 默认值不匹配时的兼容检查被加强，避免启动失败。

### 🔖 rust-v0.163.0-alpha.5 / alpha.4
0.163 内部分支持续迭代（alpha.4 → alpha.5），距稳定版仍有一段距离，建议生产环境继续锁定 0.162.x。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 标题 | 评论 | 👍 | 为什么值得关注 |
|---|---|---|---|---|---|
| 1 | [#50526](https://github.com/openai/codex/issues/50526) | Desktop: Guardian 实验反复提示 `thread_context` 已弃用 | 21 | 8 | 桌面端配置噪音反复出现，即便清理 `config.toml` 后仍触发，影响所有 Guardian 用户 |
| 2 | [#50127](https://github.com/openai/codex/issues/50127) | DOT: UNKNOWN 任务创建 / 过期断连 / Luna schema 失败 | 18 | 0 | **Dots 体验**系统性失稳的代表性报告，覆盖任务创建、生命周期与 schema |
| 3 | [#29922](https://github.com/openai/codex/issues/29922) | [Feature] 引入 `monitor` 工具以事件驱动唤醒 Codex | 18 | 7 | **呼声最高的增强请求之一**：让 Codex 从「轮询模型」变为「事件响应」，覆盖日志、文件、CI 等场景 |
| 4 | [#50870](https://github.com/openai/codex/issues/50870) | [Dots][Voice] iPhone/Mac/Windows 通话只响铃不接通 | 15 | 0 | 跨终端语音通话实测全平台失败，Dots 语音通道稳定性的关键证据 |
| 5 | [#48500](https://github.com/openai/codex/issues/48500) | 0.157 回归：managed-daemon 中 hooks 错误归属 TMUX pane | 14 | **18** | 👍 数最高的 Issue，0.157 引入的 TUI 共享 daemon 让 hook 归属错位，会污染审计与自动化 |
| 6 | [#52179](https://github.com/openai/codex/issues/52179) | [Windows] 全部命令失败：`setup refresh had errors` | 13 | 1 | Windows 桌面端所有命令阻断式故障，影响面广 |
| 7 | [#50168](https://github.com/openai/codex/issues/50168) | Dot `cloud_threads` 写入路径全面失败 | 13 | 1 | Dot ↔ Codex Cloud 互操作失效，`create` / `send_message` 都不可用 |
| 8 | [#46744](https://github.com/openai/codex/issues/46744) | Windows 加载 openai-bundled 插件失败 | 12 | 3 | 直接导致 Browser、Computer Use、Image Gen 三大能力离线 |
| 9 | [#49789](https://github.com/openai/codex/issues/49789) | Windows 26.928.21956: WSL sandbox os error 2 | 11 | 8 | WSL 沙箱路径在更新后集体失效，开发者高频遭遇 |
| 10 | [#31935](https://github.com/openai/codex/issues/31935) | 取消 60 秒阻塞等待上限 | 9 | **21** | 👍 数全榜最高，要求 OpenAI 移除 prompt 中的 60s 限制，使长任务/长命令回归正常 |

> 📊 趋势提示：Windows 沙箱、Dots、跨端线程协议三类问题合计占据热榜大半。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 模块 | 要点 |
|---|---|---|---|
| 1 | [#52756](https://github.com/openai/codex/pull/52756) | 语音可观测性 | 为 voice failure 打分类与生命周期阶段标签，避免后到的控制发送覆盖更具体的 WebRTC 错误 |
| 2 | [#52748](https://github.com/openai/codex/pull/52748) | code-mode | 让 `exit()` 真正终止 V8 cell，避免在 `catch`/`finally`/Promise 队列中继续执行 |
| 3 | [#52742](https://github.com/openai/codex/pull/52742) | OpenAI Provider | 新增 `output_token_replay`（默认关闭），请求 `output.encrypted_content`，保留加密的 message/tool 输出 |
| 4 | [#52736](https://github.com/openai/codex/pull/52736) | 模型目录 | 允许模型目录覆盖增量工具提示（incremental_tools），便于不同模型给出专属引导 |
| 5 | [#52725](https://github.com/openai/codex/pull/52725) | TUI 协议 | 通过 OSC 7501 向任意终端上报 `idle/working/blocked`，让生命周期状态不再只依赖 iTerm2 |
| 6 | [#52724](https://github.com/openai/codex/pull/52724) | 执行服务 | 新增 `observe_connection_attempts`，上报首次连接的时延与结果（成功/失败/取消） |
| 7 | [#52723](https://github.com/openai/codex/pull/52723) | code-mode | 新增 opt-in `grpc+stdio://` 主机传输（`code_mode_host_grpc`），复用 lazy HTTP/2 channel |
| 8 | [#52721](https://github.com/openai/codex/pull/52721) | 服务器生命周期 | 在优雅关闭时返回结构化 `reason: "serverShuttingDown"`，让客户端显式区分 |
| 9 | [#52707](https://github.com/openai/codex/pull/52707) | Windows 沙箱 | 将 Windows MXC sandbox 迁移到拆分 MXC crates，区分 PSEC API 存在但 MXC 不可用的过渡环境 |
| 10 | [#52681](https://github.com/openai/codex/pull/52681) | 安全 | 拒绝 code-mode 中 Serde 保留的 JSON key（`$serde_json::private::RawValue` 等），阻止 `RawValue` 绕过递归上限 |

> 🔍 其他值得关注的：#52700 将 exec-server 稳定版基线对齐 0.162.1；#52682 在 Windows 沙箱账号修复前增加存在性与归属校验，避免误改密码；#52689 将每轮 `cyber_access_program` 透传到 Guardian 审阅方。

---

## 5. 功能需求趋势

从全部 50 条近期活跃 Issue 提炼出的高频方向：

1. **🔥 事件驱动 / 后台唤醒能力（monitor / push）**
   由 #29922 引爆：要求 Codex 摆脱「轮询模型」，支持日志、文件、CI、Webhook 等事件触发，已成最热增强诉求。

2. **🤖 取消人为的 60 秒阻塞上限**
   #31935 高赞呼吁：去掉 prompt 里「避免 > 60s 阻塞等待」的硬约束，对长命令、长任务、自动化脚本至关重要。

3. **🪟 Windows 沙箱体系重构**
   #52179、#49789、#51861、#52616、#50981、#46744 均聚焦 WSL/MXC sandbox、VCRUNTIME 锁、ACL、配置兼容。Windows 一线问题压倒性集中。

4. **🌀 Dots / 跨端协议一致性**
   #51731、#50698、#50168 都指向「thread placement format version」不兼容：跨平台/跨代切分后旧 thread ID 无法读，Dots 与 Cloud/Local thread 互操作失败。

5. **🧠 GPT-6 系列模型在桌面端可用性**
   #51308、#47481：Sol / Luna 在 Windows 桌面 picker 中缺位，用户被迫使用网页/Web 通道。

6. **🧷 Hooks 在 managed-daemon 模型下的归属修复**
   #48500 提出的 0.157 回归问题若不解决，所有依赖 `PreToolUse`/`PostToolUse` 的工作流都会无声错位。

7. **🎙 端到端可靠的 Voice/Dots 通话**
   #50870 等系列：仅 iPhone/Mac/Windows 三端无一致语音通道可用。

8. **🧰 插件/CU/Browser 能力恢复**
   #46744、#52407、#52472、#52761、#51810：openai-bundled 插件加载、CUA MXC 启动器、@Chrome 会话被撤销、Annotate 不打开——桌面端核心扩展能力断点频繁。

---

## 6. 开发者关注点

| 痛点 | 代表 Issue | 影响 |
|---|---|---|
| **Windows 沙箱路径整体脆弱** | #52179、#49789、#51861、#52616、#50981 | 一次更新即可让 sandbox 全量失能，迫切需要 ACL 校验 + 启动前预检 |
| **Hooks 归属错位（0.157 回归）** | #48500 | 导致审计/自动化不可信，关键基础设施缺陷 |
| **Dots 跨端线程不兼容** | #51731、#50698、#50168 | 协议/版本升级时无平滑迁移，老 thread 不可读 |
| **新模型桌面端缺位** | #51308、#47481 | 加剧 Web/CLI 与桌面端的体验分裂 |
| **桌面端插件/CU/Browser 反复失联** | #46744、#52407、#52472、#51810、#52761 | 核心 agent 能力被锁死，开发体验严重打折 |
| **桌面 App 升级链易卡死** | #51588 | 升级路径上 0x800700E9 / 应用未退出，无法上到 26.1002.6548.0 |
| **强加的 60s 等待上限** | #31935 | 与实际 agent 工作模式冲突，要求 OpenAI 调整 prompt 而非代码限制 |
| **缺少事件唤醒能力** | #29922 | 现架构只能轮询，CI/Build Agent 集成成本高 |

---

### 📌 TL;DR
- **稳定性**：Windows sandbox 和 hooks 归属仍是 P0 痛点；0.162.1 已修复 TUI 与后台启动两个高频崩溃路径。
- **新能力**：PR 端在持续推进可观测性（OSC 7501、连接尝试观测）、输出加密回放、code-mode 安全加固和拆分式 MXC 沙箱。
- **建议关注**：开发者优先跟踪 #48500（hooks 回归）、#29922（monitor 工具）和 0.163.0 alpha → stable 转换窗口。

> 📎 数据来源：[github.com/openai/codex](https://github.com/openai/codex)（截至 2026-10-10）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-10** ｜ **数据来源：google-gemini/gemini-cli**

---

## 📌 今日速览

今日 Gemini CLI 发布了 **v0.65.0 nightly** 与 **v0.64.0-preview.1** 双版本，主要聚焦稳定性修复与安全层误报治理。社区关注度最高的话题依然是 **Subagent（子智能体）的行为稳定性**——大量 P1 级 bug 围绕子代理挂起、状态误报、能力调度展开，反映该模块仍是当前迭代的痛点重心。

---

## 🚀 版本发布

### v0.65.0-nightly.20261010.g9b6e0265d
- `fix(cli): handle JSON parse and response stream errors in fetchJson` ([#29658](https://github.com/google-gemini/gemini-cli/pull/29658))
- `fix(core): preserve line terminators in truncateString` ([#29673](https://github.com/google-gemini/gemini-cli/pull/29673))

### v0.64.0-preview.1
- 将 commit `2ce1a69` cherry-pick 至预览分支，修复安全层误报问题 ([#29696](https://github.com/google-gemini/gemini-cli/pull/29696))——具体为消除 `untrustedContextTracker` 在常见 POSIX 命令（`ls -ld`、`grep -rn`、`git` 等）下的假阳性拦截 ([#29672](https://github.com/google-gemini/gemini-cli/pull/29672))。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) · Subagent 在达到 MAX_TURNS 后错误返回 GOAL success（13 评论）**
   P1 级别 bug：`codebase_investigator` 子代理实际触达轮次上限，却依然上报 `status: "success"` + `Termination Reason: "GOAL"`，掩盖了真正中断。该问题影响所有依赖子代理报告状态的自动化评估流。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) · 利用模型的 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由（9 评论）**
   提议让 Gemini 3 模型以原生 bash 方式操作（链式调用 grep/cat/sed/awk），并通过沙箱 + 后置意图识别兼顾安全性与 UX。是大方向性的架构 Enhancement。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) · Generalist agent 频繁挂起（8 评论，👍 8）**
   任何委托给 generalist agent 的任务都会无限挂起，包括简单文件夹创建。是社区点赞最高的 P1 bug，提示 deferred 委派逻辑存在缺陷。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) · 评估 AST 感知的文件读取、搜索与映射价值（7 评论）**
   EPIC 级跟踪：探索基于 AST 的文件读取/搜索是否能在单次工具调用内精准定位方法边界，从而降低误读轮次与 token 噪声。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) · Gemini 几乎不会主动使用 skills 与 sub-agents（7 评论）**
   即使配置了 `gradle`、`git` 等 skills，模型在相关任务中也很少主动调用，必须显式指示。暴露了系统提示词与工具选择机制不够强。

6. **[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) · Browser Agent 忽略 `settings.json` 配置（4 评论）**
   `AgentRegistry` 正确读取了 settings，但 `Browser Agent` 完全无视 `maxTurns` 等覆盖，导致用户无法调控行为。

7. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) · browser subagent 在 Wayland 下失败（4 评论）**
   Wayland 环境下浏览器子代理失败并报告 `GOAL`，与 #21409 一起构成 generalist/browser 子代理稳定性矩阵的多个失效点。

8. **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246) · 工具数量 >128 时遇到 400 错误（3 评论）**
   大量工具注册后会触发上游 400 错误。Issue 标题与正文存在数量口径不一致（正文写 400），需要上游对接代理层做出工具裁剪策略。

9. **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) · 模型经常在随机位置生成临时脚本（3 评论）**
   通过 shell exclusion 限制执行后，模型倾向于在多个目录中写脚本，造成 workspace 污染，影响 `git commit` 前的清理体验。

10. **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) · Agent 应阻止/抑制破坏性行为（3 评论）**
    在 git 与 DB 操作场景下，模型偶尔使用 `git reset`、`--force` 等危险命令。呼吁引入自律性提示工程。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#29608](https://github.com/google-gemini/gemini-cli/pull/29608) · `fix(core): time out hanging web searches after 30 seconds`**
   为 `GoogleSearch` 与 `WebFetch` 工具补充 30s 超时，避免 LLM 调用永不返回导致 `Thinking...` 永久挂起，直接缓解 #21409 一类卡死问题。

2. **[#29672](https://github.com/google-gemini/gemini-cli/pull/29672) · `fix(core): eliminate false positives on untrusted command flags and compound loops`（已合入预览版）**
   修复 `untrustedContextTracker` 在 shell 变量扩展、命令组合循环场景下的误报，并放宽对常见 POSIX 浏览命令的拦截，是 v0.64.0-preview.1 的核心 PR。

3. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611) · `fix(core): support multimodal function response for dotted Gemini 3 models and aliases`**
   解析模型别名并支持带点的 Gemini 3 版本号（如 `gemini-3.8-flash`），避免图像等多模态工具输出在 Gemini 3 上产生非法 sibling parts 而触发 400。

4. **[#29701](https://github.com/google-gemini/gemini-cli/pull/29701) · `chore/release: bump version to 0.65.0-nightly.20261010.g9b6e0265d`**
   自动化版本 bump，对应今日 night。

5. **[#29644](https://github.com/google-gemini/gemini-cli/pull/29644) · `fix(cli): restore debounced static UI refresh on terminal width changes`**
   恢复终端宽度变化时 `refreshStatic()` 的 100ms 防抖刷新，解决内联模式下水平 resize 引发的高频重绘问题。

6. **[#29699](https://github.com/google-gemini/gemini-cli/pull/29699) · `fix(cli): correct reverse search highlight index for expanding unicode characters`**
   修复 `Ctrl+R` 反向搜索在含扩展 Unicode（如 `İ` → `i\u0307`）时的 off-by-one 偏移，提升国际化用户搜索体验。

7. **[#29505](https://github.com/google-gemini/gemini-cli/pull/29505) · `fix: support rootless Podman with keep-id`（已关闭）**
   通过 `--keep-id` 保留宿主机 UID/GID，修复 rootless Podman 沙箱启动失败，提升无 root 容器场景可用性。

8. **[#29608 同 #29607](https://github.com/google-gemini/gemini-cli/pull/29607) · `fix(scripts): fail the nightly eval summary when no reports exist`**
   `aggregate_evals.js` 在缺失 `report.json` 时返回非零退出码，避免 nightly 因 `continue-on-error` 静默通过失败评估。

9. **[#29683](https://github.com/google-gemini/gemini-cli/pull/29683) · `fix(a2a-server): isolate tool rejection to active call in sequential batches`（已合入）**
   在 A2A server 中，文件修改批处理时拒绝单个提议不应阻断同一批内其他文件修改。

10. **[#29643](https://github.com/google-gemini/gemini-cli/pull/29643) · `fix(cli): clear cached credentials when re-selecting Google login`（已合入）**
    在 `AuthDialog` 重新选择 `LOGIN_WITH_GOOGLE` 时清空缓存凭据，让用户能顺利切换账号。

---

## 📈 功能需求趋势

| 趋势方向 | 代表 Issue / PR | 热度信号 |
|---|---|---|
| **Subagent 体系完善（行为正确性、调度、能力暴露）** | #22323、#21968、#21763、#22598、#20195、#18287 | ⭐⭐⭐⭐⭐ 5 项相关 |
| **AST 感知的代码理解（`tilth` / `glyph` 等）** | #22745、#22746、#19561 | ⭐⭐⭐⭐ |
| **Browser Agent 健壮性提升（Wayland / settings 失效 / 会话接管）** | #22267、#22232、#21983 | ⭐⭐⭐⭐ |
| **持久化与跨会话状态（替代 WriteToDo 的文件式任务管理）** | #21000、#18836 | ⭐⭐⭐ |
| **沙箱与隔离执行（OS 级、Podman）** | #19873、#29505 | ⭐⭐⭐ |
| **Gemini 3 模型适配（多模态、模型别名）** | #29611 | ⭐⭐⭐ |
| **终止/超时与恢复语义** | #29608、#22323 | ⭐⭐⭐ |
| **自我意识与帮助性（精确的 CLI 标志、热键）** | #21432、#22598 | ⭐⭐ |

---

## 💬 开发者关注点（高频痛点）

1. **子代理行为不可预期**：状态上报（`GOAL`/`SUCCESS`）、调度路径（defer to generalist）、跨子代理上下文共享三大问题最集中，尤其在长时间任务下表现为 **30+ 分钟挂起** 与 **silent failure**。
2. **大量工具注册导致上游 400**：当工具规模超过 128 时直接报错，缺乏在 agent 侧的智能裁剪。
3. **`settings.json` 配置不生效**：Browser Agent 是已知案例，反映 AgentRegistry 之外的子代理未对齐全局配置管线。
4. **Wayland / 浏览器子代理的环境兼容性**：与 #21409 的挂起叠加，使一部分 Linux 桌面用户完全无法使用。
5. **模型破坏性命令缺乏抑制**：模型偶尔发出 `git reset --force`、`DROP` 类命令的隐患，提升了合规使用门槛。
6. **Unicode / i18n 体验细节**：中文、土耳其语等含扩展字符的用户在反搜与终端宽度上仍有边缘 case。
7. **Skills / 自定义代理自动调用率低**：用户期望"配置即生效"，但模型几乎不会主动拉起 skills/sub-agent，需要显式提示。
8. **稳定性之外的可观测性诉求**：bug report 不含子代理上下文（#21763）、`/chat share` 看不到子代理轨迹（#22598）均指向诊断通道不足。

---

> **编辑视角**：今日的版本节奏是"夜间修小 bug、预览版专攻安全误报"，但社区讨论的重心明显已经迁移到 **Subagent + Tooling 治理** 这两个更深层的稳定性议题上。下个里程碑如果要显著改善 NPS，优先级建议落在：① 子代理超时/状态协议、② AgentRegistry 全局配置贯通、③ 工具总数动态裁剪。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-10**

---

## 今日速览

过去 24 小时内，Copilot CLI 集中发布了 **v1.0.96 预发布系列**（共 3 个迭代版本），重点优化沙箱配置交互、模型 ID 处理及 Git 仓库内的启动体验；同时 **/add-dir 沙箱越权、Hooks 配置丢失、Edit diff 显示混乱**等多个长期待解决的 bug 在 v1.0.96 版本中被关闭。今日社区讨论度最高的话题集中在 **Claude Opus 4.6 上下文窗口上限**、**Node.js SEA 内存泄漏** 以及 **沙箱权限与 JVM 进程的兼容性**。

---

## 版本发布

### v1.0.96 系列（预发布，共 3 个迭代）

| 版本 | 主题 | 要点 |
|---|---|---|
| **v1.0.96-2** (最新) | 模型配置 | `/model` 与 `/config model` 中的模型 ID 大小写不敏感，并保存为规范 ID |
| **v1.0.96-1** | 沙箱配置 | 交互式沙箱设置新增"环境密钥建议"功能，并支持保存前添加 masking hosts；修复 `/allow-all` 在企业策略解析期间不可用的回归 |
| **v1.0.96-0** | 启动性能 | Git 仓库内交互式会话更快到达输入提示符；Timeline 新增显示每次权限决策的来源（用户、辅助权限、策略或无人值守回退）；修复 `/add-dir` 当前会话沙箱授权 |

### v1.0.95（2026-10-09）

- macOS 优先使用原生 Microsoft Entra broker 认证（带浏览器回退）
- `copilot config` 支持 `sandbox.credential.injectHosts` 配置，并在 Bash / Zsh / Fish 中提供 key 补全
- `--context` 参数现在正确应用于新建和恢复的 ACP 会话（修复原先静默忽略的行为）
- v1.0.95-3 包含若干修复

> 📦 社区可通过预发布通道试用 v1.0.96，提前验证关键修复是否生效。完整说明见 [Releases](https://github.com/github/copilot-cli/releases)。

---

## 社区热点 Issues（Top 10）

1. **[#4686](https://github.com/github/copilot-cli/issues/4686) — Node.js OOM 崩溃：~37 分钟内泄漏 31,965 个 libuv 异步句柄** 🟥 高严重度
   - 在 Linux + Node v24.20.0 SEA 打包环境下，每个会话大约运行 37 分钟后必崩，触发 `FATAL ERROR: Reached heap limit`。SEA 嵌入运行时忽略 `NODE_OPTIONS` 导致无法通过常规参数缓解。这是一个**生产可用性级别的稳定性问题**，建议在官方彻底修复前避免在长任务中持续使用。

2. **[#3355](https://github.com/github/copilot-cli/issues/3355) — Claude Opus 4.6 上下文窗口封顶 200K（应支持 1M）** 👥 4 👍 / 5 💬
   - 模型原生支持 1M tokens，却被强制限到 200K，导致深度技术会话频繁自动 compaction。社区关注度高，反映**企业级长上下文需求**与默认配置存在张力。

3. **[#4313](https://github.com/github/copilot-cli/issues/4313) — 支持滚动浏览历史会话** 🟢 已关闭
   - 9 条评论，是今日被关闭的最高讨论度 Issue。在终端中用滚轮 / PageUp / PageDown 浏览当前会话历史，是高频 UX 请求。

4. **[#2536](https://github.com/github/copilot-cli/issues/2536) — Atlassian MCP 每次调用都需重新鉴权** 👥 3 👍 / 3 💬
   - 关闭 CLI 再打开即失效，OAuth 凭据无法持久。属于 MCP 集成中较**普遍的痛点**，严重破坏工作流连续性。

5. **[#3081](https://github.com/github/copilot-cli/issues/3081) — NixOS keychain 支持损坏** 👥 3 👍
   - 即使安装了 libsecret / GNOME Keyring / Seahorse，Copilot CLI 仍报告 "System keychain unavailable"，强制走 device flow。**Linux 桌面用户被遗忘**的现象被反复点名。

6. **[#5076](https://github.com/github/copilot-cli/issues/5076) — `/add-dir` 未将目录加入沙箱白名单** 🟢 已关闭
   - 在 v1.0.96-0 中已修复。闭环今日较快的代表性案例。

7. **[#3035](https://github.com/github/copilot-cli/issues/3035) — 工具可调用的 `cwd`（等同于 TUI `/cwd`）**
   - 让 skills 或自动化代理能切换工作目录并触发 `.github/skills/` 重新扫描，反映了社区对**技能可组合性**的诉求。

8. **[#4633](https://github.com/github/copilot-cli/issues/4633) — `view` 工具对普通 8.6KB 文件误判"过大"**
   - 误报使常规 markdown 审查变得繁琐。属于典型的**阈值偏严引发的体验回归**。

9. **[#4516](https://github.com/github/copilot-cli/issues/4516) — 沙箱 RW 路径授权不被 JVM 进程继承**
   - 即使 shell 命令可写，Maven、javac 等 JVM 工具仍报 `Operation not permitted`。**沙箱 + 子进程语义**是这一类问题的高发区。

10. **[#939](https://github.com/github/copilot-cli/issues/939) — Slash command 参数 Tab 补全** 🟢 已关闭
    - 长尾需求，Close 表明团队补齐了基础可用性。

---

## 重要 PR 进展

> ⚠️ 过去 24 小时 PR 更新较少，仅 2 条提交，其中 1 条为安全关键。

1. **[#5093](https://github.com/github/copilot-cli/pull/5093) — install 脚本：校验匹配下载 tarball 的 SHA256 条目** 🔐
   - 揭示现有校验脚本通过 `--ignore-missing` 把整个 SHA256SUMS.txt 整体校验而**未真正比对被下载的文件**——属于供应链安全层面的实质缺陷。建议尽快合并到稳定分支。

2. **[#5106](https://github.com/github/copilot-cli/pull/5106) — Create index.html**
   - 新增一个简单的 index.html 文件。

---

## 功能需求趋势

从近 24 小时的 Issues 文本中归纳，社区关注的功能方向按热度大致排序：

| 方向 | 典型代表 Issue | 趋势信号 |
|---|---|---|
| **沙箱与权限模型** | #4516、#5076、#5102、#5105、#5107、#5098 | 跨越 macOS / Windows / Linux 平台，**沙箱已超越单点功能成为核心议题**——开发者关心 Path RW、JVM 子进程、Git 凭证注入、HOME 覆写等细节行为 |
| **MCP 生态成熟度** | #2536、#3052、#5091、#5101 | 从"能连上"走向"能稳定复用"，凭证持久化、端点只读、子 agent 重复重连等问题集中暴露 |
| **长上下文与新模型** | #3355 | Claude Opus 4.6、GPT-5 等新模型上线后，Copilot CLI 的默认阈值与封装成为下一个被检视的边界 |
| **会话与 ACP 协议** | #5091、#5100、#5108 | 长会话稳定性、事件投递超时、大规模 session/list 分页性能等**协议层可扩展性**问题浮现 |
| **认证与凭据管理** | #3081、#2536、#5102 | 跨平台身份存储（macOS broker / Linux keychain / 沙箱 git 凭证）成为下一个"必须统一"的体验短板 |
| **可观测性与 Hook 体系** | #5099、#3403、#5098 | 社区希望扩展 Hook 能力：仅前端脱敏展示、配置不被覆盖、子 agent 隔离等 |
| **BYOK 与多模型调度** | #5103 | 子 agent 复用父会话 wire API 导致跨族模型 400，反映**多 Provider 编排**的复杂度 |

---

## 开发者关注点（痛点与高频诉求）

1. **稳定性与内存安全**：#4686 的 libuv 句柄泄漏说明长时间会话还没有"生产级"的可靠性保证，团队需要给出官方缓解方案（如设置默认上限、定期重启建议等）。
2. **沙箱表达力不足**：覆盖 Path / JVM / Git / 网络 / HOME 的细粒度授权，是开发者当前最频繁反馈的痛区；JVM 子进程和 macOS local networking 的不一致尤其被点名。
3. **平台对等体验缺失**：macOS Keychain 在 v1.0.95 引入原生支持，但 NixOS 用户仍在 #3081 卡壳；Windows Ramdisk (#3535)、Desktop 1.1.27+ Git 启动失败 (#5094) 等显示**Windows / Linux 桌面发行版的回归测试覆盖有待加强**。
4. **MCP 仍偏脆弱**：Atlassian / GitHub MCP 在重启后丢凭据 (#2536)、`create_pull_request` 错误路由到只读端点 (#3052)、Session 与 MCP 死锁 (#5091)——**生产化使用 MCP 的阻力来自"连接后"**，而非"连接中"。
5. **凭据与供应链安全双重警示**：#5093 PR 暴露 install 脚本校验名义生效实则失效，叠加 #5102 中沙箱 Git 凭证被强写为空 helper 覆盖——这两个问题合并意味着**安装链与运行时信任链都需加强披露与修复**。
6. **配置可继承性差**：Hooks 在 config.json 中被覆盖 (#3403)、`/restart` 丢失模式 (#2311) 这类"重启即丢"的体验反复出现，开发者期待**显式的持久化契约**。

---

### 📌 建议跟进
- **生产用户**：在官方修复 #4686 之前避免单会话 > 30 分钟，或主动重启 CLI。
- **关注 v1.0.96 稳定版**何时 GA，重点验证 `/add-dir`、模型 ID 大小写与企业策略下 `/allow-all` 行为。
- **使用 Atlassian / GitHub MCP** 的项目盯紧 #2536、#3052 后续修复，避免在自动化管线中依赖 MCP。
- **供应链审计**：关注 #5093 是否被合入到当前安装脚本主线，并建议在 CI 中复核。

---
*日报基于 github.com/github/copilot-cli 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-10**

---

## 📌 今日速览

今日 OpenCode 仓库活跃度适中，社区聚焦于 **V2 迁移引发的回归问题** 与 **TUI/Web UI 的稳定性修复**。无新版本发布，但 issue 与 PR 的关闭/合并节奏显示团队正在进行 V2 系列问题的密集清扫。与此同时，新提交的问题集中在 **TUI 性能、订阅计费显示错误、MCP OAuth 兼容性** 三大方向。值得关注的是，多个 PR 显示官方正在系统性补齐 V2 缺失的 CLI 标志、文件类型支持与错误处理边界。

---

## 🚀 版本发布

今日无新 Release。过去 24 小时内的版本节奏保持平静，团队重心集中在已发布版本（v2.0.x）的 issue 清扫与回归修复。

---

## 🔥 社区热点 Issues

以下为评论数与活跃度最高的 10 条 Issue，覆盖错误修复、功能请求与回归问题：

| # | Issue | 状态 | 要点 |
|---|-------|------|------|
| 1 | [#30221](https://github.com/anomalyco/opencode/issues/30221) `[BUG] "terminated" error` | ✅ CLOSED | OpenCode Go 订阅下会话持续报 `UnknownError: terminated`，直连 API 无此问题。10 条评论、4 个 👍，是今日最高互动，已关闭说明补丁已落地。 |
| 2 | [#19702](https://github.com/anomalyco/opencode/issues/19702) `SDK cannot handle question tool` | ✅ CLOSED | SDK serve 模式下无法响应模型触发的 `question` 工具调用，对自建前端用户影响显著，关闭意味着 API 补齐。 |
| 3 | [#39434](https://github.com/anomalyco/opencode/issues/39434) `Open project 对话框缺少 path 参数` | ✅ CLOSED | `GET /file` 缺失必需 `path` 查询参数，导致 "No folders found"。典型 V2 端口回归，已修复。 |
| 4 | [#51241](https://github.com/anomalyco/opencode/issues/51241) `[OPEN] Free models + 权限拒绝导致失败` | 🟢 OPEN | 当 `shell` 或 `read` 权限被设为 deny 时，`big-pickle` 等免费模型直接报错。免费模型不应受严格权限策略限制。 |
| 5 | [#53709](https://github.com/anomalyco/opencode/issues/53709) `V1→V2 会话路径未规范化` | 🟢 OPEN | V2 迁移后旧会话在 `/sessions` 列表消失，根因是 `session.path` 未做绝对目录规范化。 |
| 6 | [#37611](https://github.com/anomalyco/opencode/issues/37611) `Web 项目选择器初始为空` | ✅ CLOSED | `opencode web` 中 `query=` 空查询返回空列表，必须输入内容才显示项目，UX 缺陷已修。 |
| 7 | [#41453](https://github.com/anomalyco/opencode/issues/41453) `[FEATURE] 持久会话守护进程 + 零工具调用记忆` | ✅ CLOSED | 请求常驻后台 agent 与无需工具调用即可触发的记忆召回能力，反映用户对"上下文连续性"的强烈需求。 |
| 8 | [#39582](https://github.com/anomalyco/opencode/issues/39582) `DeepSeek V4 Flash Free 输出截断` | ✅ CLOSED | 免费模型频繁中途断句且无任何报错/警告，已修复（可能涉及流式响应完整性校验）。 |
| 9 | [#54239](https://github.com/anomalyco/opencode/issues/54239) `[OPEN] Windows TUI 鼠标滚轮/缩放卡顿` | 🟢 OPEN | 今日新提交，明确 V2 TUI 在 Windows 终端下帧延迟严重，而 Desktop GUI 不受影响——明显的 TUI 回归。 |
| 10 | [#54245](https://github.com/anomalyco/opencode/issues/54245) `[OPEN] MCP *.localhost OAuth 回退` | 🟢 OPEN | 2.0.4 MCP 客户端升级后，OAuth 拒绝向 `http://*.localhost` token 端点发送凭据，本地 MCP 流程直接阻塞。 |

此外值得留意的高价值但评论较少的 issue：
- [#54244](https://github.com/anomalyco/opencode/issues/54244) — OpenCode Go 订阅下 TUI 新会话误报 "Insufficient funds"，CLI 同样账号却正常。
- [#54168](https://github.com/anomalyco/opencode/issues/54168) — 要求为 Grok 模型开放 xAI 原生 `x_search` 工具。
- [#48708](https://github.com/anomalyco/opencode/issues/48708) — Desktop "Thinking" 文本 shimmer 每帧重绘导致 CPU 飙升。
- [#35640](https://github.com/anomalyco/opencode/issues/35640) — V2 TUI 把上游 nginx 503 的 HTML 原样贴出。

---

## 🛠️ 重要 PR 进展

按修复覆盖面与影响面筛选的 10 条关键 PR（多条同日关闭，节奏很快）：

| # | PR | 关键变更 |
|---|-----|----------|
| 1 | [#54246](https://github.com/anomalyco/opencode/pull/54246) `fix(ci): check generated protocol OpenAPI document` | 在 Linux 单元 job 中加入 OpenAPI 漂移校验，避免过期 SDK 文档误导下游消费者。 |
| 2 | [#54243](https://github.com/anomalyco/opencode/pull/54243) `fix(core): 省略 glob/grep 权限元数据中的空字段` | 解决 `session.permission.list` 在缺省可选输入时 JSON 编码失败的问题。 |
| 3 | [#54240](https://github.com/anomalyco/opencode/pull/54240) `fix(llm): 限定 provider HTML 错误信息长度` | 复刻 V1 时期的 retry 文案净化：HTML 错误体只显示 `"Provider temporarily unavailable (HTML body)"`，关闭 [#35640](https://github.com/anomalyco/opencode/issues/35640)。 |
| 4 | [#54241](https://github.com/anomalyco/opencode/pull/54241) `fix(core): 文件列表包含 symlink` | `FileSystem.Entry` 增加 `symlink` 类型，审查侧栏可见链接路径。 |
| 5 | [#54234](https://github.com/anomalyco/opencode/pull/54234) `fix(cli): 恢复 models --refresh 与 --verbose` | V2 重写时丢失的 CLI 标志补回，文档与实现再次对齐。 |
| 6 | [#54227](https://github.com/anomalyco/opencode/pull/54227) `fix(core): Plan agent 运行 shell 前要求确认` | Plan agent 的 `shell` 权限被钉为 `ask`，堵住"绕过 edit deny 写脚本再执行"的攻击面。 |
| 7 | [#54226](https://github.com/anomalyco/opencode/pull/54226) `fix(mcp): 工具调用 401 时标记 needs_auth` | 远程 MCP token 失效后会自动进入重新认证流程，不再无限静默重试。 |
| 8 | [#54198](https://github.com/anomalyco/opencode/pull/54198) `chore: 升级 Effect 到 4.0.1` | V2 长期 pin 在 rc 版本，作者详细记录了 `Schema.brand` 变 type-only 后客户端生成器的适配方案。 |
| 9 | [#53906](https://github.com/anomalyco/opencode/pull/53906) `feat(tui): 仅一个 agent 时简化 UI` | 移除冗余标签，单 agent 工作流下界面更干净。 |
| 10 | [#53752](https://github.com/anomalyco/opencode/pull/53752) `fix(app): 跨浏览器发现 server 项目与会话` | 共享 server 上不同浏览器 session 可看到一致的项目与会话列表，关闭多浏览器相关 issue。 |

其他值得关注：[#53924](https://github.com/anomalyco/opencode/pull/53924) 规范化路径分隔符（配合 [#53709](https://github.com/anomalyco/opencode/issues/53709)）、[#51482](https://github.com/anomalyco/opencode/pull/51482) 修复 AI SDK v4 媒体输入被序列化为 null 的问题、[#54187](https://github.com/anomalyco/opencode/pull/54187) 增加 `opencode://` 深链接打开会话（配合 [#41400](https://github.com/anomalyco/opencode/issues/41400)）。

---

## 📈 功能需求趋势

综合今日活跃 Issue 的标签与描述，开发者社区明显关注以下方向：

1. **多模型生态拓展**
   - 新 provider 接入：[Langdock (#36702)](https://github.com/anomalyco/opencode/issues/36702)、[Ace Data Cloud (#53491)](https://github.com/anomalyco/opencode/issues/53491)；
   - 模型原生工具解锁：[xAI `x_search` (#54168)](https://github.com/anomalyco/opencode/issues/54168)、[OpenAI `web_search` (#10704)](https://github.com/anomalyco/opencode/issues/10704)。

2. **V2 迁移体验**
   - [`/sessions` 列表 (#53709)](https://github.com/anomalyco/opencode/issues/53709)、[CLI 标志丢失 (#54234)](https://github.com/anomalyco/opencode/pull/54234)、[`subagent` null 支持 (#51355)](https://github.com/anomalyco/opencode/pull/51355) —— 团队正在系统性回填 V1 能力。

3. **持久化与上下文连续性**
   - 大量"持久 daemon / 记忆 / 自动多轮"请求，如 [#41453](https://github.com/anomalyco/opencode/issues/41453)、[#41465](https://github.com/anomalyco/opencode/issues/41465)，体现从单次会话走向"项目级智能体"的诉求。

4. **TUI / 桌面端 UX 细节**
   - 滚动 [#41444](https://github.com/anomalyco/opencode/issues/41444)、`@` 自动补全 [#41457](https://github.com/anomalyco/opencode/issues/41457)、session ID 可见性 [#53662](https://github.com/anomalyco/opencode/issues/53662)、Windows 性能 [#54239](https://github.com/anomalyco/opencode/issues/54239) —— 体验打磨期。

5. **第三方生态与开放性**
   - Agent Relay 等外部插件 [#54231](https://github.com/anomalyco/opencode/issues/54231)、[`opencode://` 深链接 (#41400)](https://github.com/anomalyco/opencode/issues/41400)，体现"工具自身成为平台"的趋势。

---

## 🧑‍💻 开发者关注点（高频痛点）

从用户反馈中提炼出的关键共识：

- **回归问题大于新功能**
  许多被关闭的 Issue 实质是 "V2 引入后 V1 正常工作能力丢失"，开发者最担心的是升级路径的稳定性。

- **错误信息可读性**
  HTML 错误页直达 TUI / SSE 流中途中断 / "terminated" 等模糊提示被反复抱怨 —— [#54240](https://github.com/anomalyco/opencode/pull/54240) 与 [#38458](https://github.com/anomalyco/opencode/issues/38458) 的修复正回应此点。

- **文件/路径边界**
  `fff` 初始化对 home 目录的拒绝、symlink 缺失、Windows 路径分隔符处理 —— 一条主线问题：高层 API 与底层文件系统约定不一致。

- **权限与安全模型**
  免费模型与付费模型在权限策略下的预期不一致 [#51241](https://github.com/anomalyco/opencode/issues/51241)，Plan agent shell 静默执行 [#53955](https://github.com/anomalyco/opencode/issues/53955)，MCP OAuth 401 不提示重认证 [#53942](https://github.com/anomalyco/opencode/issues/53942) —— 体现开发者对"安全 UX"的明确期待。

- **订阅与计费可见性**
  [#54244](https://github.com/anomalyco/opencode/issues/54244) 与 [#30221](https://github.com/anomalyco/opencode/issues/30221) 表明，社区希望 TUI/Desktop 给出更明确的余额与失败原因，而非泛化的 "Insufficient funds"。

- **跨客户端一致性**
  新会话在 Desktop 与 TUI 行为不一致 [#41636](https://github.com/anomalyco/opencode/issues/41636)、多浏览器发现项目 [#13626](https://github.com/anomalyco/opencode/issues/13626) —— 反映多端矩阵的成熟仍需时间。

---

> **编辑视角**：今天的 OpenCode 处于"修补 V2 缺口"的中段，建议使用者关注 `2.0.x` 后续小版本（[#54246](https://github.com/anomalyco/opencode/pull/54246)、[#54240](https://github.com/anomalyco/opencode/pull/54240)、[#54241](https://github.com/anomalyco/opencode/pull/54241) 等批量合并后），预计会出集成的稳定性补丁版。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 — 2026-10-10

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）  
> 统计区间：过去 24 小时更新的 Issue 50 条、PR 18 条

---

## 📌 今日速览

今日社区最显著的特征是 **Windows / 终端兼容性集中爆发**（TUI 重绘、xterm 复制、鼠标滚轮、SSH/ConPTY 等多个独立 issue）以及 **RPC/SDK 在并发与生命周期边界上的可靠性问题**（preflight prompt 静默丢弃、abort 卡死、system prompt 丢失）。与此同时，多个 **provider 适配层的小修小补**（OpenRouter、Qwen 缓存、Gemini thought signature、Bedrock 图像）正在以高节奏合入。

---

## 🚀 版本发布

**过去 24 小时无新 Release。** 当前活跃开发集中在 `main` 分支的修复与功能改进上。

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 | 🔗 |
|---|---|---|---|
| 1 | **#7547** [Windows] How do you use Pi on windows? (79 💬) | **单 issue 79 条评论**，是当前社区最具共识的"待治理"议题；Windows 用户体量大、安装/运行路径分散（cmd、PowerShell、Alacritty、WSL、Scoop、Bun…），维护者需要决定哪些路径由核心支持、哪些下沉到扩展 | [link](https://github.com/earendil-works/pi/issues/7547) |
| 2 | **#10480** Direct OpenAI 连接无法识别手动额度重置 (17 💬) | OpenAI Codex/ChatGPT Pro 用户在手动 `banked reset` 后 Pi 仍报"额度耗尽"，workaround 是 `/logout`+`/login`，反映 **provider 状态缓存** 与上游订阅状态不一致 | [link](https://github.com/earendil-works/pi/issues/10480) |
| 3 | **#8643** Bedrock 上 OpenAI 模型拒绝 `toolResult.content` 中的嵌套图像 (12 💬, 👍4) | 高赞 issue，PR 已 ready；属于 **OpenAI 协议适配** 的长期脏角落，需要把图像提升到同层 user block | [link](https://github.com/earendil-works/pi/issues/8643) |
| 4 | **#9773** `before_provider_request` 在 summarization/compaction 中未触发 (11 💬) | 文档承诺 vs 实际行为不一致；扩展作者无法拦截压缩请求，影响 **自定义日志/审计/脱敏** 的完整性 | [link](https://github.com/earendil-works/pi/issues/9773) |
| 5 | **#6300** Windows TUI 每按一键就换行 (11 💬) | 经典的 **Windows 控制台输入模式** 兼容性问题，对终端/Node 版本/cmd 都很敏感 | [link](https://github.com/earendil-works/pi/issues/6300) |
| 6 | **#10497** OpenRouter 偶发 400 "exceed max context" (11 💬, 已 CLOSED) | 由扩展注入文件内容后超 1M token 触发；说明 **超长上下文** 已成为高频现实场景，错误信息可改进 | [link](https://github.com/earendil-works/pi/issues/10497) |
| 7 | **#9257** `extractCursorPosition` 残留 `CURSOR_MARKER` 导致终端泄露 (6 💬) | 渲染管线边界 bug，可能引发 **TUI 状态污染**，需回归测试覆盖 | [link](https://github.com/earendil-works/pi/issues/9257) |
| 8 | **#9656** 全屏下鼠标滚轮滚动 prompt history 而非 transcript (5 💬, 👍4) | Windows + Zellij 组合下终端事件传递错位，**复用器（muscle）生态** 兼容性需要单独矩阵 | [link](https://github.com/earendil-works/pi/issues/9656) |
| 9 | **#10645** Bun 编译产物中 `resizeImage` 返回 `null`，图片附件全丢 (5 💬) | 自 v0.87 起图片读取在打包二进制中失效，影响 **桌面/分发包** 用户，已挂 `[inprogress]` | [link](https://github.com/earendil-works/pi/issues/10645) |
| 10 | **#10393** xterm 终端内 Pi CLI 复制失效 (5 💬, CLOSED) | 终端选区捕获在 alternate screen buffer 下行为差异，已 no-action 但反映 **WebPi/xterm.js 集成** 的细节缺失 | [link](https://github.com/earendil-works/pi/issues/10393) |

**值得关注的新近 issue（评论量虽少但揭示方向）：**

- **#10754** Tool 忽略 `signal` 导致 `session.abort()` 永不 settle — SDK 1.1.0 的并发生命周期问题
- **#10755** `session.prompt()` 在 `agent_settled` 期间 promise 提前 resolve — SDK 异步语义问题
- **#10741** Groq Qwen3.8 因 `developer` role 触发 400 — provider role schema 适配
- **#10606** RPC 中 preflight 期间的 prompt 被静默丢弃 — 队列/状态机问题
- **#10639** `sendCustomMessage({ triggerTurn: true })` 首轮丢系统提示 — provider 缓存命中率下降

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 🔗 |
|---|---|---|---|
| 1 | **#10751** use pi.dev configuration schemas | 将 pi.dev schema endpoint 设为 `$id` 规范，主题/设置/keybinding 全部走发布版 schema URL，**生态契约正式化** | [link](https://github.com/earendil-works/pi/pull/10751) |
| 2 | **#10747** allow custom Cloudflare AI Gateway domains | 支持自定义 Cloudflare AI Gateway 域名与访问凭证，**企业/自托管部署** 友好 (#10627 fix) | [link](https://github.com/earendil-works/pi/pull/10747) |
| 3 | **#10672** list only OpenRouter models a key may use | 合并内置/pi.dev 目录与 `/models/user` 响应，按 key 权限裁剪可用 chat 模型并回写价格/上下文 | [link](https://github.com/earendil-works/pi/pull/10672) |
| 4 | **#10739** emit `before_agent_start` for custom-message runs | 修复 `pi.sendMessage(..., {triggerTurn:true})` 跳过 `before_agent_start`，**避免 provider 缓存被中途修改** | [link](https://github.com/earendil-works/pi/pull/10739) |
| 5 | **#9126** settle tool results before disposal | 在 runtime dispose 前 `await session.abort()`，防止工具结果未持久化 (#9124 fix) | [link](https://github.com/earendil-works/pi/pull/9126) |
| 6 | **#10730** render CJK emphasis next to fullwidth punctuation | 修复中文/日文/韩文加粗紧邻全角标点时 `**` 无法闭合的问题 (#10154)，TUI **本地化渲染质量** 显著提升 | [link](https://github.com/earendil-works/pi/pull/10730) |
| 7 | **#10734** drop orphaned tool results in transformMessages | 已合入。解决 compaction/aborted 残留孤儿 `toolResult` 导致 OpenAI OAuth 请求报错 | [link](https://github.com/earendil-works/pi/pull/10734) |
| 8 | **#10663** `pi auth --continue` | 通用 continuation handoff 入口，支持 base64url JSON payload，便于 **外部发起 auth 流后回落** | [link](https://github.com/earendil-works/pi/pull/10663) |
| 9 | **#10718** include system prompt in `--export` HTML | `--export` HTML 与交互式 `/export` 行为对齐，导出会话可读性提升 | [link](https://github.com/earendil-works/pi/pull/10718) |
| 10 | **#10715** enable explicit context cache for Qwen token plan (CLOSED) | 为 Qwen Token Plan 用户开启显式 `cache_control`，使 dashboard 缓存命中率可观测 | [link](https://github.com/earendil-works/pi/pull/10715) |

**额外值得注意：**

- **#9155** `[inprogress]` 修复 prompt 与 tree navigation 并发重叠
- **#9222** 拒绝 running/compacting 期间的 reload，避免扩展工具上下文失效
- **#10726** 忽略 codemode 中的 Node `--watch` 通知，防止 sandbox bridge 误解析
- **#10716** `pi-env` 启动错误纳入 stderr 诊断信息
- **#10165** 跟踪被丢弃的 user bash 输出，让模型收到截断提示

---

## 📈 功能需求趋势

从近 24 小时 50 条 issue 中聚类，社区最集中的诉求方向：

1. **Windows 体验一致性（高优）** — 终端选区、键输入、TUI 重绘、SSH/ConPTY、复用器组合……单 #7547 即承载"路径策略"讨论
2. **Provider 适配完整性** — OpenRouter（400、画像模型路由）、Bedrock（图像）、Groq Qwen（role schema）、Gemini AI Studio（thought signature）、OpenAI Codex（额度状态）逐一暴露边界
3. **RPC/SDK 语义可靠性** — 并发 prompt、preflight、abort、custom message 触发 turn、system prompt 是否随轮次保留等"状态机边界"成为焦点
4. **CJK / 本地化渲染** — 加粗闭合、表头复制、跨平台编码；TUI 在多语言内容下的鲁棒性持续打磨
5. **企业 / 分发 / 自托管** — Cloudflare AI Gateway 自定义域名、SSH daemon 错误信息、Bun 打包二进制图片路径
6. **观测性** — Qwen 缓存命中率、durable session 跨进程事件、post-resume aborted salvage 文档化

---

## 👨‍💻 开发者关注点

**高频痛点：**

- **跨平台 ≠ 跨终端**：同一 Windows 操作系统下，cmd / Windows Terminal / Alacritty / Zellij / Crostini / SSH-ConPTY 各有 bug，社区建议建立 **终端兼容矩阵**
- **SDK Promise 语义不一致**：`session.prompt()` 在 settle 期间提前返回、abort 卡死、custom-message 首轮丢 system prompt，影响 IDE/Harness 集成
- **Provider cache 副作用**：system prompt 中途被 patch、cache_control 仅 anthropic 格式触发、toolResult 孤儿残留，直接拉低 **TTFT 与 token 单价**
- **TUI 复制/选区** 是被低估的可用性短板：xterm.js、ChromeOS Crostini、Markdown 表格单元格、SSH BEL 误触发 Ctrl+G
- **配置即代码**：#10187、#10165 等 issue 反映出开发者希望把全局配置 dotfile 化，但 `deviceId` 等设备级字段混入同一文件造成隐私/可移植问题

**高频需求：**

- 显式的 provider 状态查询/刷新（避免依赖 `/logout` workaround）
- 文档化的 SDK 生命周期时序图（prompt / settle / abort / dispose 顺序）
- 打包/分发路径的回归测试矩阵（Bun、Node 24、macOS arm64、Windows x64）

---

*日报由 GitHub 数据自动整理，欢迎指正与补充。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-10**

---

## 📌 今日速览

Qwen Code 今日发布 `v0.25.1-preview.1` 与 `v0.25.0-nightly` 双更新，主要修复了 Managed Agent 替换远程 Host 时绑定丢失的问题。社区讨论热度集中在 Stage D/G/H 的 Managed Agent 分阶段交付架构上（最高单议题 51 条评论），同时多个 P1 级 Session 隔离与恢复类 Bug 被新报告，CI 依赖审计也出现新告警。

---

## 🚀 版本发布

### v0.25.1-preview.1
预览版本，核心变更：
- **fix(agents)**：替换所选远程 Host 时不再丢失绑定（[#13436](https://github.com/QwenLM/qwen-code/pull/13436) by @yiliang114）
- **test(core)**：补充 #12693 合并后的回归用例

### v0.25.0-nightly.20261009.085a44f336
与 preview 版本同步携带上述变更。

---

## 🔥 社区热点 Issues

| # | 标题 | 评论数 | 重要性 |
|---|------|------|------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Managed Agent 双路径架构与分阶段交付提案 | 51 | 🔴 战略级提案，定义整套托管 Agent 架构（Session 持久化、Workspace 绑定、可恢复工具执行、WebSocket），几乎所有近期 Stage D/G/H 工作均挂载此议题 |
| [#13395](https://github.com/QwenLM/qwen-code/issues/13395) | Kubernetes 工具运行时跨平台交付门禁 | 19 | 跟踪 PR #13526 在私有 CSI 读写编辑上的进展，是平台分发路线的关键节点 |
| [#12867](https://github.com/QwenLM/qwen-code/issues/12867) | Stage D 后续：持久化生命周期、Turns、Actions、java_durable | 19 | 承接 #12380 的 D 阶段实现清单，已正式关闭 |
| [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | 每日依赖 CVE 审计失败 | 16 | 自动化 bot 报错，需关注 run #36661572770 中失败步骤，可能为新增高危漏洞 |
| [#6710](https://github.com/QwenLM/qwen-code/issues/6710) | 区分用户取消与恢复后意外中断的 turn | 15 | P1 老 Bug，已在 `1aba19c` 仍可复现，影响 ACP 客户端体验 |
| [#10797](https://github.com/QwenLM/qwen-code/issues/10797) | 非思考脚手架标签泄露到用户可见输出 | 10 | 工具结果块、system-reminder 等被错误回显，影响内容生成质量 |
| [#13632](https://github.com/QwenLM/qwen-code/issues/13632) | MCP：`notifications/tools/list_changed` 时刷新服务器工具 | 8 | 完善 MCP 协议交互的合理诉求，提议复用现有 SessionMcp 流程 |
| [#11408](https://github.com/QwenLM/qwen-code/issues/11408) | PR #9466 延迟评审发现：rewind 映射锚定到稳定 prompt 标识 | 8 | 指向 PR #13729 的 R53-2 修复路径，是会话恢复正确性的关键 |
| [#12952](https://github.com/QwenLM/qwen-code/issues/12952) | Stage G：权威 Session 历史、writer fencing、takeover | 7 | 为移除 owner affinity 前置的安全门控，影响多 Agent 调度可信度 |
| [#10700](https://github.com/QwenLM/qwen-code/issues/10700) | 孤立 tool-call 闭合标签作为纯文本泄漏 | 6 | XML 恢复器只匹配平衡的 invoke 对，存在误恢复路径 |

---

## 🛠 重要 PR 进展

| # | 类型 | 说明 |
|---|------|------|
| [#13436](https://github.com/QwenLM/qwen-code/pull/13436) | fix(acp) | 在会话恢复过程中保留显式用户取消意图，新增 provenance，老数据保持可读 |
| [#13729](https://github.com/QwenLM/qwen-code/pull/13729) | fix(session) | 恢复时为被保留下来的文件快照预留 prompt 标识，修复 #11408 的 R53-2 问题 |
| [#13811](https://github.com/QwenLM/qwen-code/pull/13811) | feat(managed-agent) | Stage H4e-a 团队记录契约，独立持久化所有者与关闭级联 |
| [#13026](https://github.com/QwenLM/qwen-code/pull/13026) | fix(core) | 上报未能应用的推测文件，避免吞掉复制错误导致历史错配 |
| [#13297](https://github.com/QwenLM/qwen-code/pull/13297) | fix(managed-runtime) | 关闭 #12691 的两轮评审全部 10 项 Critical 与可验证的 Suggestion |
| [#13769](https://github.com/QwenLM/qwen-code/pull/13769) | feat(managed-agent) | Hosted Workspace Turn 前台子代理等待支持重启恢复（修复 #13708） |
| [#13329](https://github.com/QwenLM/qwen-code/pull/13329) | fix(cli) | 将 Markdown 代码栅格识别锚定到行首，避免流式输出中误切分 |
| [#13724](https://github.com/QwenLM/qwen-code/pull/13724) | fix(cli) | 当 heredoc 将程序喂给 shell 解释器时失败关闭，关闭安全策略绕过路径 |
| [#12280](https://github.com/QwenLM/qwen-code/pull/12280) | fix(core) | 修复引号隐藏 `&` 后台操作符导致 Write 拒绝规则被绕过的安全漏洞 |
| [#13789](https://github.com/QwenLM/qwen-code/pull/13789) | fix(managed-agent) | 解锁 H3 后台 Shell 与 Monitor 启动路径，配合 #13532 的物理验收 |

---

## 📈 功能需求趋势

1. **Managed Agent 平台化（最热）** — Stage D（持久化）、Stage G（权威历史与 fencing）、Stage H（H3 后台进程、H4d/H4e 子代理会话与团队记录）正同步推进，议题 #12380 是顶层路线图。
2. **会话恢复与会话管理可靠性** — 文件快照 prompt 标识预留、Child Run 调度卡死、Web Shell 分支丢失、ACP 取消语义等，密集出现 P1/P2 Bug 与 fix。
3. **MCP 生态增强** — HTTP MCP 工具持久未注册（#13796）、`tools/list_changed` 通知处理（#13632）、多 Agent API 合约（#13785）反映出 MCP 在多服务器/多 Agent 场景的协议与生命周期需求增长。
4. **内容生成质量** — 非思考标签泄漏（#10797）、孤立 tool-call 闭合标签（#10700）、思考块原生标签识别（#11988）显示对模型输出"卫生"的持续打磨。
5. **扩展与工作流** — Mod 模块静态发现与校验（#13774）、Monorepo 内保存工作流发现（#13812）表明生态与跨仓工作流正在成为新增长点。
6. **跨平台与 CI** — macOS Foundation Models 报错（#13807）、CI 合约版本可能回退（#13804）、依赖 CVE 审计失败（#13078）提示多平台交付链路需加固。

---

## 💡 开发者关注点

- **安全策略被绕过的真实路径**：heredoc 注入（#9417 / #13724）、Write 拒绝规则的引号绕过（#12280）连续被发现，社区对"工作树守卫在面对 shell 语义时不够严格"反馈集中。
- **恢复语义一致性**：用户取消与基础设施中断的区分（#6710、#13436）、Session 重启后子代理悬挂（#13708、#13769、#13801）成为 P1 反复出现的痛点。
- **CI/CD 治理疲劳**：CVE 审计失败（#13078）、主分支 CI 失败（#12714）、合约版本无门禁（#13804）、延迟评审的 Suggestions 堆积（#13809），维护者通过 `/verify-pr`（#13732）尝试规范化验证。
- **性能与上下文管理**：XML 恢复在大响应中重复前缀扫描（#13787）、context ceiling 被丢弃（#13432）、动态工具输出截断（#2566 / #13599）说明性能/上下文压力场景仍需更细粒度策略。
- **生态可发现性**：Mod（#13749/13774/13774）和 monorepo 工作流（#13812）反映出"如何更轻量地发现并复用本地资产"的强烈需求。

---

*日报生成基于 GitHub Issues/PRs 的过去 24 小时增量数据，链接均为仓库当前快照。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

> 📅 2026-10-10 · 数据来源：GitHub
>
> ⚠️ **数据说明**：本期数据中 Issues 与 PR 的实际归属仓库为 `codewhale-hq/Codewhale`（DeepSeek-TUI 的同源上游项目），所有链接均为 Codewhale 仓库。以下报告基于这些真实动态撰写。

---

## 一、今日速览

今天社区围绕 **v0.10.2 发布候选** 与 **运行时/TUI crate 拆分（RS-8 ~ RS-14）** 集中发力：维护者 Hmbown 一日内提交 7 个 Runtime Split 子任务，同时多位贡献者（SparkofSpike、Lstarsky0、gaord 等）密集提交修复 PR；性能问题（TUI 卡顿、CPU 回归、会话日志内存膨胀）仍是社区讨论焦点。

---

## 二、版本发布

过去 24 小时无新 Release 发布。

> 最近关键节点：**PR #6907**（v0.10.2 候选 PR，含 Terminal Dock、Shell 等待控制、Runtime 恢复等）已于 10-09 关闭并合并入主线，HEAD 为 `6d9fb2150eb24bcfd951a79fb4c6a8a782690b33`，正式 v0.10.2 标签尚未生成。配套的 crates.io 10 MiB 体积门禁问题（#6910）仍在阻塞首批发布上传。

---

## 三、社区热点 Issues（按评论数 / 重要性筛选 10 条）

| # | Issue | 标题 | 关键点 | 链接 |
|---|-------|------|--------|------|
| 1 | [#6804](https://github.com/codewhale-hq/Codewhale/issues/6804) | 成立汉化组（6 评论） | 召集中文翻译志愿者，针对 LLM 翻译"能读但费劲"的痛点；不仅覆盖 CodeWhale，还包括其他开源英/日项目 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6804) |
| 2 | [#6721](https://github.com/codewhale-hq/Codewhale/issues/6721) | Emergency compaction 对 save session 的影响（3 评论） | 紧急压缩机制正在裁剪实时消息，与"保存会话"工作流冲突，影响可靠性 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6721) |
| 3 | [#6728](https://github.com/codewhale-hq/Codewhale/issues/6728) | CPU 占用回归 v0.9.12→v0.10.0（2 评论） | FreeBSD 平台三版本对比显示从 idle→moderate→heavy 的明确回归曲线 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6728) |
| 4 | [#6652](https://github.com/codewhale-hq/Codewhale/issues/6652) | TUI 长时运行后滚动卡顿（2 评论） | 长时间会话后滚动出现"果冻效应"，约 3-4 小时可复现；与内存累积高度相关 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6652) |
| 5 | [#6923](https://github.com/codewhale-hq/Codewhale/issues/6923) | Gemini 429 错误自动重试（2 评论） | 用户请求：在限流错误下等待并自动重试上次任务 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6923) |
| 6 | [#6944](https://github.com/codewhale-hq/Codewhale/issues/6944) | 后台长任务对用户不可见（1 评论） | 240s 后转入后台后用户无法察觉；Full Access 还会阻断唯一的后台 API；**v0.10.2 关键问题** | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6944) |
| 7 | [#6842](https://github.com/codewhale-hq/Codewhale/issues/6842) | Session journal 无上限（1 评论） | 压缩会回收实时消息但保留所有历史版本在 RAM 中，内存泄漏 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6842) |
| 8 | [#6866](https://github.com/codewhale-hq/Codewhale/issues/6866) | MCP boot 失败/恢复需告知模型（1 评论） | MCP 服务启动失败时模型无信号，工具消失后模型无法区分"不存在"与"暂时不可用" | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6866) |
| 9 | [#6931](https://github.com/codewhale-hq/Codewhale/issues/6931) | 所有 Bash/shell 操作需可检查可停止（0 评论） | 长输出折叠 / 静默运行的任务在后续卡片出现后无法定位或终止 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6931) |
| 10 | [#6910](https://github.com/codewhale-hq/Codewhale/issues/6910) | crates.io 10 MiB 体积门禁（0 评论） | **发布阻塞**：TUI/CLI 因超 10 MiB 触发 HTTP 413，导致 26/28 包已发布 0.10.1 而这两个仍停在 0.10.0 | [🔗](https://github.com/codewhale-hq/Codewhale/issues/6910) |

---

## 四、重要 PR 进展

| # | PR | 标题 | 状态 / 关键改动 | 链接 |
|---|-----|------|----------------|------|
| 1 | [#6950](https://github.com/codewhale-hq/Codewhale/pull/6950) | feat(plugins): CLI 安装与应用内 OAuth 登录 | 由 LIghtJUNction 提交，承接 #6805 的 OAuth 提供商，补充 CLI 安装入口与应用内登录流程 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6950) |
| 2 | [#6948](https://github.com/codewhale-hq/Codewhale/pull/6948) | fix(tui): 命名阻塞会话切换的工作 | SparkofSpike：会话切换被拒时从"无法启动"改为说明正在等待的具体工作（turn/maintenance/background） | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6948) |
| 3 | [#6947](https://github.com/codewhale-hq/Codewhale/pull/6947) | fix(artifacts): 解析链接 state root | Windows 下通过 junction 重定向 state 目录时 `/compact` 失败，本 PR 解析链接以保持工作 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6947) |
| 4 | [#6949](https://github.com/codewhale-hq/Codewhale/pull/6949) | fix(subagent): 重定 state root 后重新根化路径检查 | SparkofSpike：`.codewhale` 是 junction 时子代理 step 0 直接失败 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6949) |
| 5 | [#6946](https://github.com/codewhale-hq/Codewhale/pull/6946) | chore: 删除 30 个无效 dead_code allow | Lstarsky0：基于 `RUSTFLAGS=--force-warn dead_code` 审计，清理 #5587 后续工作 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6946) |
| 6 | [#6943](https://github.com/codewhale-hq/Codewhale/pull/6943) | chore(tui): 移除 5 个模块的 dead_code allow | Lstarsky0：#5587 子任务，让 `cargo check` 暴露真实覆盖项 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6943) |
| 7 | [#6929](https://github.com/codewhale-hq/Codewhale/pull/6929) | fix(execpolicy): 重定向 ≠ 命令分隔符 | SparkofSpike：Windows 下含单独 `&` 的命令被误判为终止 npm launcher 而硬阻断 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6929) |
| 8 | [#6924](https://github.com/codewhale-hq/Codewhale/pull/6924) | feat(runtime): 每个 runtime store 一个控制端点 | gaord：解决同一用户两客户端因共享控制 socket 互相拒绝的问题（VS Code 扩展 per-workspace 场景） | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6924) |
| 9 | [#6907](https://github.com/codewhale-hq/Codewhale/pull/6907) | 0.10.2: Terminal Dock 等 | Hmbown · 已合并 · 包含可用 Terminal dock、Shell 等待释放、Runtime 恢复与审批路由修复 | [🔗](https://github.com/codewhale-hq/Codewhale/pull/6907) |
| 10 | [#6822–6826, 6821, 6823–6824](https://github.com/codewhale-hq/Codewhale/pulls?q=is%3Apr+author%3Aapp%2Fdependabot+updated%3A2026-10-10) | Dependabot 批量依赖升级 | rio-vt 0.5.28、rmcp 3.5.0、uuid 1.27.0、encoding_rs 0.8.42、thiserror 2.0.21、dtolnay/rust-toolchain 升级 | [🔗](https://github.com/codewhale-hq/Codewhale/pulls) |

---

## 五、功能需求趋势

从 31 条近期 Issues 中提炼，社区关注度排序如下：

- **🧱 运行时/TUI 架构解耦（≈ 30% 权重）**  
  RS-8 ~ RS-14 一系列任务集中拆分 `crates/tui` 中的 runtime 部分，目标是建立 `codewhale-runtime` 独立 crate，ratchet 通过 `module_graph.py --check` 强制（当前 prod 69 / test 88 / late 1）。这是未来扩展多客户端（VS Code、Web）的基石。

- **⚡ 性能与可靠性（≈ 25%）**  
  - 长会话滚动卡顿（#6652）、CPU 占用逐版本回归（#6728）、Session journal 无上限（#6842）、Emergency compaction 副作用（#6721）  
  - 趋势：内存/计算成本随会话时长线性甚至超线性增长，亟需上限控制策略。

- **🔌 模型与插件生态（≈ 15%）**  
  - Gemini 429 自动重试（#6923）、Claude 订阅 OAuth（#6932）、MCP 启动失败信号（#6866）、Plugin CLI 安装（PR #6950）  
  - 趋势：从"接入模型"转向"接入协议 + 鉴权 + 错误恢复"。

- **🖥️ TUI UX 与后台任务可见性（≈ 15%）**  
  - 后台长任务不可见（#6944）、所有 Bash/shell 操作可检查/可停止（#6931）、网络策略需重读（PR #6928）  
  - 趋势：用户希望"每个被启动的东西都能被命名、定位和终止"。

- **🐳 Pet 模式与体验打磨（≈ 10%）**  
  - `/pet habitat` 真机验证（#6155）、共享 owner-contract 夹具（#6109）、第二列工件编辑器（#6325）  
  - 趋势：动画宠物已升级为 Codewhale 主视图（PR #6920），需补全桌面/TUI 共享。

- **📦 发布工程（≈ 5%）**  
  - crates.io 10 MiB 门禁（#6910）、MODELS_DEV 修复清单（#6396）、代码模式文档与默认值不一致（#6942）。

---

## 六、开发者关注点

1. **可观测性优先**：超过 6 条 Issues/PR 直接反映"用户不知道后台在做什么"。`#6979`-like 诉求是"工具被调用时应被命名、被等待时可被释放、被杀时能立刻停止"，这已成为 v0.10.2 的硬性要求（#6944、#6931）。

2. **跨平台与链接/挂载点**：Windows junction

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*