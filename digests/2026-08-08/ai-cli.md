# AI CLI 工具社区动态日报 2026-08-08

> 生成时间: 2026-08-08 01:07 UTC | 覆盖工具: 9 个

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
**日期：2026-08-08**

---

## 一、生态全景

2026 年 8 月的 AI CLI 工具生态已从"功能竞赛"进入**"可靠性与生态治理"深水区**。主流工具（Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode）依然保持高频迭代，Kimi、Pi、Qwen Code、DeepSeek TUI 则在不同细分方向（持久记忆、子代理编排、桌面化、多模型 Fleet）上差异化突围。**Windows 平台稳定性、Provider SDK 兼容、子代理可靠性、安全边界**是当前全行业共同面对的四大痛点；同时 **AGENTS.md 标准化、MCP 协议深化、ACP 标准制定**等基础设施级议题开始浮现，预示着生态正从工具层面向协议层面迁移。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | Issue 活跃数 | PR 数 | 关键信号 |
|---|---|---|---|---|
| **Claude Code** | 1（v2.1.224） | 50 | 3 | Self-hosted runner + archive 插件源；最热 Issue #6235 👍4526 |
| **OpenAI Codex** | 2（v0.147.0 + 3 alpha） | 50 | 50 | 节奏最快，PR 大量自动化提交；最热 Issue #8648（82 评论） |
| **Gemini CLI** | 3（nightly + preview + stable） | Top 10 展示 | Top 10 展示 | 聚焦 SSRF 修复（CVSS 8.6）+ Node 22 升级；评测体系成型 |
| **GitHub Copilot CLI** | 3（v1.0.79-7/8/9） | 35 | 0 | 纯 Release 驱动，PR 静默；企业策略管控成为主线 |
| **Kimi Code CLI** | 0 | 2 | 2 | 极简社区反馈；样本量小但安全事件严重（#2596 rm -rf） |
| **OpenCode** | 1（v1.18.15） | Top 10 展示 | Top 10 展示 | 服务侧稳定性危机（#38257 401 拦截，45 评论） |
| **Pi** | 1（v0.84.1） | Top 10 展示 | Top 10 展示 | Harness v2 重构进行中；TUI 性能优化双 PR |
| **Qwen Code** | 2（nightly） | 38 | 50 | Web Shell + 桌面化是主旋律；CI/E2E 基建债浮现 |
| **DeepSeek TUI** | 0 | Top 10 展示 | Top 10 展示 | v0.9.4 因 4 个红 lane 压住发版；Fleet + Subagent 深耕 |

> 注：数据来自各工具日报 24 小时滚动窗口，Issue/PR 数为已展示或显式统计的样本。

**活跃度排序**（综合 Issue+PR+Release 频次）：
Codex ≈ Gemini CLI ≈ Qwen Code > Claude Code > Copilot CLI > OpenCode ≈ Pi > Kimi ≈ DeepSeek TUI

---

## 三、共同关注的功能方向

### 1. 🪟 Windows 平台稳定性（全行业头号痛点）
- **Claude Code**：#77208（KVM 100% CPU 死锁）、#84962/#76192（文件锁）、#83028（Intel 集显崩溃）、#84951（Profile 重置）、#84072（ECONNRESET）
- **OpenAI Codex**：#10090（沙箱失败 7 个月未修）、#37043（Computer Use 启动失败）、#35481（VS Code Diff 报错）
- **Copilot CLI**：#3622（剪贴板崩溃）、#4219（通知崩溃）、#1409（连字符→下划线）、#4399（PowerShell POSIX 失效）
- **Qwen Code**：#8615（Desktop EISDIR 崩溃）、#8625（中文拼音不可读）、#7118（SHA-256 校验失败）
- **OpenCode**：#6560（Windows 粘贴失效）

### 2. 🤖 子代理 / Subagent 可靠性（新兴热点）
- **Gemini CLI**：#22323（误判 GOAL 成功）、#21409（无限挂起）
- **DeepSeek TUI**：#5123（write gate 过严）、#5284（共享 checkout 误判）
- **Claude Code**：#84945（peer socket 冲突）
- **OpenCode**：#40923（后台 subagent + 瞬时错误自恢复）

### 3. 🧠 持久化记忆 / 跨会话上下文
- **Kimi**：#1283（5 个月高呼声，21 评论）
- **DeepSeek TUI**：#2492（重启即遗忘）
- **Claude Code**：CLAUDE.md → AGENTS.md（#6235，👍4526）
- **Gemini CLI**：Auto Memory 系统 4 个相关 issue 集中浮现

### 4. 🔌 插件 / 扩展生态治理
- **Claude Code**：plugin 安全修复（#84711 YAML 注入）、按 skill 颗粒度控制（#14920）
- **Codex**：Agent Plugins 多目录搜索（v0.147.0）
- **Copilot CLI**：`com.github.copilot/extensions/` 规范（v1.0.79-7）
- **OpenCode**：内置 TUI 插件 `@opencode-ai/merman`（#41113）

### 5. 🔐 安全边界与提权防护
- **Gemini CLI**：SSRF 漏洞（CVSS 8.6，#28725）+ Node 22 升级（#28726）
- **Claude Code**：插件 YAML 注入 + 符号链接凭据（#84711/#84747）
- **Kimi**：Agent yolo 模式 rm -rf 越界（#2596）
- **Qwen Code**：Daemon 跨 worktree Git 操作越权（#8687）

### 6. 🌐 跨工具协议标准化
- **Claude Code** 推动 AGENTS.md（#6235）
- **Codex** 定义 code-mode gRPC 协议（#37510）
- **Qwen Code** 推进 ACP 标准面（reasoning effort、usage_update，#8528/#8526）
- **OpenCode** 提出 `opencode://connect` 深链（#41152）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | 企业自托管 + 插件治理 | Team/Enterprise 团队 | Self-hosted runner + 多源插件分发（git/archive） |
| **OpenAI Codex** | MCP-first + 自动化审核 | 平台型集成者、企业 IT | code-mode gRPC + Guardian 自动审核 + Plugin Runtime |
| **Gemini CLI** | 评测驱动 + AST 感知 | 追求质量保障的工程团队 | 行为评测 76 用例 + Cloud Run 评测 runner |
| **GitHub Copilot CLI** | 企业策略 + Sandbox 可视化 | 企业 GitHub 用户 | allow-auto-only + 强制代理 URL |
| **Kimi Code CLI** | 简洁个人助手 | 个人开发者 | 轻量架构，安全边界清晰（但 #2596 暴露短板） |
| **OpenCode** | 多 Provider 兼容 + Web 模式 | 模型切换频繁的高级用户 | Background Subagents + 多 SDK 适配层 |
| **Pi** | TUI 性能 + 扩展 API | 终端原住民、工具链作者 | Harness v2 重构 + 增量 markdown 解析 |
| **Qwen Code** | 桌面化 + Web Shell | 国内/阿里云用户、桌面化需求方 | WebBridge + Chrome 扩展 + QR 配对 |
| **DeepSeek TUI** | Subagent 编排 + Fleet 混合 | 多模型策略玩家 | 角色可跨厂商 + advisor watcher |

**核心分化点**：
- **协议方向**：Codex 押注 MCP；Qwen Code 押注 ACP；Claude Code 押注 AGENTS.md
- **部署形态**：Claude Code 重自托管；Copilot CLI 重企业策略；Qwen Code 重桌面化
- **模型策略**：OpenCode/DeepSeek TUI 重多 Provider；Pi/Gemini CLI 重单一厂商深度集成
- **安全模型**：Kimi/Claude Code 强提示工程；Qwen Code/Codex 强 daemon 守护

---

## 五、社区热度与成熟度

### 高热度 + 高成熟度（稳定头部）
- **Claude Code**：👍4526 单 Issue 热度断层第一，Release 节奏稳定，社区已具备"标准制定影响力"
- **OpenAI Codex**：PR 自动化程度最高（`copyberry[bot]` 主导），CI/CD 基建成熟
- **GitHub Copilot CLI**：Release 节奏稳定（24h 内 3 版本），但 PR 透明度低

### 高热度 + 快速迭代（成长期）
- **Gemini CLI**：评测体系工程化（76 用例），Caretaker Agent 自动化运维成型
- **Qwen Code**：Web Shell → Desktop 全链路推进中，但 CI E2E 基建债暴露（#8692 tsc 错误）
- **Pi**：Harness v2 重构 + TUI 性能双优化，社区核心贡献者深度参与

### 中等热度 + 差异化突围
- **OpenCode**：服务侧信任危机（Go 套餐 401/模型路由错配）压制产品口碑，但功能侧迭代积极
- **DeepSeek TUI**：v0.9.4 因 4 个 CI 红 lane 卡发版，反映"功能完善但工程化欠债"

### 低热度但需关注
- **Kimi Code CLI**：样本量小，但 #2596 安全事件严重，建议官方尽快响应
- **DeepSeek TUI**：子代理机制是其差异化护城河，但需打通 CI 流程

---

## 六、值得关注的趋势信号

### 📡 趋势 1：协议标准化进入实操阶段
- **AGENTS.md**（Claude Code #6235）+ **ACP**（Qwen Code #8526/#8528）+ **code-mode gRPC**（Codex #37510）三大协议并行推进
- **参考价值**：开发者应关注自身工作流是否会被协议层锁定，工具选型需考虑"协议中立性"

### 🛡️ 趋势 2：安全从"附加项"变成"一等公民"
- Gemini CLI 修复 CVSS 8.6 SSRF、Claude Code 修复 YAML 注入、Kimi 经历 rm -rf 越界事故
- **信号强度**：🟢🟢🟢🟢🟢
- **参考价值**：高危命令（rm -rf、git reset --force）应强制二次确认或 dry-run；插件供应链需建立签名验证机制

### 🪟 趋势 3：Windows 成为企业落地的最大阻碍
- 9 款工具中有 7 款在 Windows 上有显著问题报告（剪贴板、沙箱、终端渲染、权限）
- **信号强度**：🟢🟢🟢🟢🟢
- **参考价值**：企业级部署 Windows 工作站需做兼容性评估；工具团队应将 Windows 提升至与 macOS/Linux 同等优先级

### 🤖 趋势 4：Subagent 从"可选项"升级为"核心能力"
- 多工具集中投入 Background Subagent、advisor watcher、隔离运行时 state root
- **信号强度**：🟢🟢🟢🟢
- **参考价值**：复杂任务应优先选择具备 subagent 编排能力的工具；评估标准包括"续跑链"、"共享工作区隔离"、"watcher 实时告警"

### 🧠 趋势 5：跨会话持久记忆成为差异化护城河
- Kimi #1283（5 个月未解）、DeepSeek TUI #2492、Claude Code CLAUDE.md/AGENTS.md
- **信号强度**：🟢🟢🟢🟢
- **参考价值**：日常开发者应关注工具的"记忆机制"——自动记忆 + 手动指令 + 跨项目语义是关键三角

### 📊 趋势 6：评测体系从"概念"走向"工程化"
- Gemini CLI 已落地 76 个行为评测用例 + Cloud Run 评测 runner + eval:validate 静态分析
- **信号强度**：🟢🟢🟢
- **参考价值**：选型时关注工具是否有自动化评测门禁；模型迭代时回归测试能力是质量保障底线

### 💸 趋势 7：Provider 服务端信任危机浮现
- OpenCode Go 套餐 401 拦截（#38257，45 评论）、deepseek-v4-flash 路由错配（#40409）
- **信号强度**：🟢🟢🟢
- **参考价值**：依赖托管服务时需评估"服务端稳定性 + 模型路由透明度"两个维度，避免被锁定在不可控的上游

### 🎨 趋势 8：桌面化与本地控制成新战场
- Qwen Code WebBridge（#8707）+ Desktop QR 配对、Claude Code 自托管 runner、OpenCode web --no-open
- **信号强度**：🟢🟢🟢
- **参考价值**：未来 6 个月，CLI 工具将普遍具备"远程控制桌面/浏览器"能力，开发者需关注浏览器自动化协议（是否绕过 MCP 走直连路径）

---

## 结语

2026 年 8 月的 AI CLI 生态呈现**"头部稳定、腰部分化、长尾突围"**的格局。技术决策者选型时应重点权衡：① 协议中立性（AGENTS.md/ACP/MCP）② Windows 平台成熟度 ③ 安全边界（高危命令防护）④ Subagent 与持久记忆能力。开发者日常使用则建议关注：工具的 Issue 响应速度、Provider 服务稳定性、以及评测门禁的工程化程度——这些是判断工具是否进入"生产可用"阶段的核心指标。

> 📅 报告基于 2026-08-08 各工具公开 GitHub 数据
> 📊 样本：9 款 AI CLI 工具，约 350+ Issue / 200+ PR
> 🔗 完整日报详见各工具对应 GitHub 仓库

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（数据截止 2026-08-08）

---

## 1. 热门 Skills 排行（按社区关注度）

| # | Skill | 核心定位 | 讨论焦点 | 状态 |
|---|-------|---------|---------|------|
| 1 | **#1298 skill-creator 评估管线修复** | 修复 `run_eval.py` 0% recall 的致命缺陷，解决 Windows 编码、子进程、并行 worker 问题 | `description-optimization` 闭环失效（[#556](https://github.com/anthropics/skills/issues/556) 10+ 次复现），整条改进链路目前都在"对着噪声优化" | OPEN |
| 2 | **#514 document-typography** | 防孤行/寡行/编号错位的排版质量控制 skill | 影响所有 AI 生成文档；用户极少主动要求排版但 100% 都是默认痛点 | OPEN |
| 3 | **#83 skill-quality-analyzer + skill-security-analyzer** | 元 skill：5 维度质量评估 + 安全扫描 | 同时覆盖"质量"与"安全"两条社区最关心的主线 | OPEN |
| 4 | **#486 ODT Skill** | 创建/填充/解析 OpenDocument (.odt/.ods)，开源 ISO 标准 | 填补 .docx 之外的唯一开源文档格式空白；LibreOffice 生态刚需 | OPEN |
| 5 | **#1367 self-audit (v1.3.0)** | 输出交付前的"机械验证 + 四维推理质量门" | 任何项目/技术栈通用；与 [#1385](https://github.com/anthropics/skills/issues/1385) 提议的 Quality Gate Pipeline 高度协同 | OPEN |
| 6 | **#1302 color-expert** | 色彩命名体系、色彩空间选型表、CSS 调色板 | 知识密度高，是少见的"领域专家型" skill；设计/前端刚需 | OPEN |
| 7 | **#723 testing-patterns** | 测试金字塔 + React 组件测试 + 端到端测试全链路 | 覆盖"应该测什么 vs 不该测什么"，直击工程实践老大难 | OPEN |
| 8 | **#1479 plan-file-hygiene** | 规划产物（plan/notes）的生命周期管理 | 解决[#1417](https://github.com/anthropics/skills/issues/1417)提出的"规划工件只有产生没有清理"问题 | OPEN |

---

## 2. 社区需求趋势

从 Issues 中可归纳出**七大方向**：

- 🔒 **安全与信任（最热）**：[#492](https://github.com/anthropics/skills/issues/492)（43 评论，**43** 票第一）直指社区 skill 在 `anthropic/` 命名空间下冒充官方，破坏信任边界；[#1175](https://github.com/anthropics/skills/issues/1175) 关注 SharePoint 集成中的权限/SKILL.md 滥用风险。
- 📦 **分享与分发**：[#228](https://github.com/anthropics/skills/issues/228) 呼吁 org 级技能共享，#189 投诉 `document-skills` 与 `example-skills` 安装内容重复。
- 🛠️ **生态兼容**：[#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 集成、[#16](https://github.com/anthropics/skills/issues/16) Skills → MCP 暴露。
- 🧠 **Agent 状态/记忆**：[#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提议符号化压缩长会话状态；[#1479](https://github.com/anthropics/skills/pull/1479) plan-file-hygiene 对应规划文件生命周期。
- ✅ **质量门禁**：[#1385](https://github.com/anthropics/skills/issues/1385) 提议 Pre-task → Adversarial Review → Delivery 三段式质量门，#1367 / #83 已有对应实现。
- 🛡️ **Agent Governance**：[#412](https://github.com/anthropics/skills/issues/412) 系列呼吁 policy enforcement、威胁检测、审计轨迹类 skill。
- 🪟 **Windows 兼容性**：由 [#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1298](https://github.com/anthropics/skills/pull/1298) 共同暴露，涉及 `subprocess.Popen` / `claude.cmd` / 编码 / 并行管道。

---

## 3. 高潜力待合并 Skills（值得关注）

以下 PR 评论活跃、缺口清晰，**短期落地概率高**：

| PR | Skill | 热度理由 |
|----|-------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator run_eval 修复 | 10+ 独立复现，#556/#1099/#1050/#1323/#1261 同源问题，已形成"合并风暴" |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 痛点 100% 普适，零争议 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | 同时回应 #492 安全与 #412 治理两大议题 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 与 #1385 提议协同，通用性强 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT skill | 填补开源文档格式缺口 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 知识密度高，差异化强 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | 工程实践刚需 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 直接闭环 #1417 长期讨论 |

> 注：所有 PR 当前均为 **OPEN** 状态，仓库整体合并节奏较慢，部分 PR 等待数月未见 reviewer。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 生态本身变得可信、可控、可度量」**：在持续新增 Skill 的同时，强烈呼吁一套涵盖**安全（#492）、质量（#83/#1367/#1385）、可分享（#228）、跨平台（#29/#1099/#1050）、生命周期管理（#1329/#1479）** 的治理底座——"加技能"已经不再是瓶颈，"保障技能生态健康"才是。

---

# Claude Code 社区动态日报 · 2026-08-08

> 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

**v2.1.224 正式发布，Self-Hosted Runner 与插件分发迎来重大升级**。本次更新将企业级自托管部署能力引入 Claude Code，团队可将自己的机器或容器注册为 Web/Mobile/Desktop 共享会话后端；同时新增 `archive` 插件源，允许通过 HTTPS zip 安装插件而无需 git。

社区端最热的讨论集中在 **AGENTS.md 标准化**（Issue #6235 评论数突破 347，👍 4526），开发者呼吁 Claude Code 与 Codex、Cursor 等工具对齐项目级智能体规范。此外，多个 Windows/macOS 桌面端的稳定性 Bug 仍在持续发酵。

---

## 🚀 版本发布

### v2.1.224（今日发布）

**What's Changed:**

- **🆕 Self-Hosted Environments**：新增 `claude self-hosted-runner` 命令，可将自有机器或容器注册为 Claude Code Web / Mobile / Desktop 会话的运行环境（适用于 Team 与 Enterprise 套餐）。
- **🆕 `archive` 插件源**：支持通过 HTTPS zip 直接安装插件，**无需 git 仓库**——适合离线或受限网络环境下的插件分发。

> 📎 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.224)

---

## 🔥 社区热点 Issues

### 1. [#6235](https://github.com/anthropics/claude-code/issues/6235) — 支持 AGENTS.md 行业标准
- 👤 DylanLIiii | 📅 创建于 2025-08-21 | 💬 347 评论 | 👍 **4526**
- **为什么重要**：Codex、Amp、Cursor 等竞品已统一采用 [agents.md](https://agents.md/) 作为编码智能体的项目级规范文档，Claude Code 现有的 `CLAUDE.md` 被认为"过于工具绑定"。这条 Issue 是仓库中**最受关注的 Feature Request**，已成为跨工具协作的实际痛点。
- **社区反应**：👍 4526 的热度反映出开发者希望 Claude Code 参与到开源标准制定中，而非维持单一生态闭环。

### 2. [#13354](https://github.com/anthropics/claude-code/issues/13354) — 会话额度耗尽后继续工作的能力
- 👤 massyn | 💬 73 评论 | 👍 191
- **为什么重要**：当 session limit 触发后，开发者被迫中断长任务流；该需求直击**生产力连续性**核心痛点，73 条评论表明存在大量细化场景讨论（如自动降级模型、付费续接等）。
- **社区反应**：✅ 已通过 Preflight 自查清单，是质量较高的需求帖。

### 3. [#14920](https://github.com/anthropics/claude-code/issues/14920) — 支持单独禁用插件技能
- 👤 petergeneric | 💬 14 评论 | 👍 83
- **为什么重要**：插件（如 `commit-commands`）通常打包多个 skill，但用户往往只想要其中一两个。当前粒度只能整体启用/禁用，**无法做精细化控制**。
- **社区反应**：涉及 macOS 端实际体验，反馈表明插件生态已进入"质量优化"阶段。

### 4. [#50884](https://github.com/anthropics/claude-code/issues/50884) — 允许用户清理 Remote Control 失效环境
- 👤 wolfomania | 💬 7 评论 | 👍 26
- **为什么重要**：随着 v2.1.224 self-hosted runner 的推出，claude.ai/code 的环境列表管理问题被前置暴露；失效/僵尸环境长期残留影响**多设备用户**。
- **社区反应**：与新发布功能形成需求互补。

### 5. [#72495](https://github.com/anthropics/claude-code/issues/72495) — Prompt suggestions 被 rate-limit 状态严格等值门静默抑制
- 👤 inth3shadows | 💬 4 评论
- **为什么重要**：定位到了二进制中的 `Vxy` 严格等值门，并**预先注册了预测**（在预测时间自动清除状态），体现高质量 Bug Report 标准。涉及 TUI 层的状态机逻辑。
- **社区反应**：👍 0 但评论质量高，可作为 Issue 报告范本。

### 6. [#84945](https://github.com/anthropics/claude-code/issues/84945) — 本地 peer-messaging inbox socket 绑定失败
- 👤 sfainbraun-KC3YDL | v2.1.224 | 💬 3 评论
- **为什么重要**：跨会话消息（SendMessage / ListAgents）依赖 `/tmp/cc-socks` peer socket，两个相同配置会话中**只有一个能成功绑定**，直接影响多终端并行使用。
- **社区反应**：发布当天即被发现，反映新功能的兼容性问题需要更早介入测试。

### 7. [#84689](https://github.com/anthropics/claude-code/issues/84689) — CVP 已批准组织仍被 cyber safeguards 拦截
- 👤 RenzyXSec | 💬 4 评论
- **为什么重要**：涉及**企业安全合规流程**的实际体验——审核通过却仍被拦截，申诉表单无字段可填，暴露审核与运行态之间的同步漏洞。
- **社区反应**：可能影响企业客户在网络审查环境下的部署意愿。

### 8. [#81853](https://github.com/anthropics/claude-code/issues/81853) — Fable 5 模型中含工具调用的文本响应不显示
- 👤 rhv-resideo | 💬 5 评论
- **为什么重要**：Fable 5（新模型）存在**特定渲染缺陷**：同时含文本与工具调用时，文本部分丢失；Opus 4.8 同设置正常。该 Bug 阻碍模型可用性评估。
- **社区反应**：👍 3 + 多平台复现，反映新模型质量门控需加强。

### 9. [#77208](https://github.com/anthropics/claude-code/issues/77208) — Linux KVM 通用 CPU 模式下 Claude Code ≥ 2.1.205 100% CPU 死锁
- 👤 joos81 | 💬 3 评论
- **为什么重要**：影响**容器化、云端开发环境**（GitHub Codespaces、自托管 runner 等基于 KVM 的场景），连 `--version` 都会死锁，Linux Desktop Beta 的 Code 标签也静默失效。属于基础设施层严重回归。
- **社区反应**：与今日 v2.1.224 的 self-hosted runner 方向直接冲突，**亟需优先修复**。

### 10. [#84953](https://github.com/anthropics/claude-code/issues/84953) — `/goal` 条件字符限制过低（4000）且无文件引用机制
- 👤 Sha01in | 💬 1 评论
- **为什么重要**：限制在提交后才报错，造成 UX 摩擦；同时缺乏 `@file.md` 引用机制，对**复杂任务规范**（如长篇需求文档）不友好。
- **社区反应**：典型"小但高频"的可改进点。

---

## 🔧 重要 PR 进展

> 过去 24 小时仅有 3 条 PR 更新，涵盖文档、安全修复两个方向：

### 1. [#84711](https://github.com/anthropics/claude-code/pull/84711) — 修复插件脚本中的 YAML 注入与符号链接凭据覆盖
- 👤 alifakbxr
- **内容**：针对 #76580，添加防御性检查，防止插件安装过程中的 YAML 注入攻击以及符号链接导致的凭据被覆写。
- **意义**：**安全加固类修复**，直接影响插件生态的可信度。

### 2. [#84747](https://github.com/anthropics/claude-code/pull/84747) — 修复 hookify 的规则评估作用域与安全文件读取
- 👤 alifakbxr
- **内容**：修复 `load_rules()` 在 `event=None` 时绕过事件过滤器的问题——确保 `Read`、`Browser` 等未显式映射的工具只触发 `all` 作用域规则。
- **意义**：解决 hook 系统的**逻辑安全边界**问题，避免规则误触发。

### 3. [#84854](https://github.com/anthropics/claude-code/pull/84854) — 修复 bash_command_validator_example.py 中失效的 hooks 文档链接
- 👤 cassiacarollinee-ship-it
- **内容**：将示例 hook 脚本的旧 `docs.anthropic.com/en/docs/claude-code/hooks` 链接统一更新到 `code.claude.com/docs/...`——仓库内 46 处其他链接已统一，仅此处遗漏。
- **意义**：虽小但典型的"修缮性" PR，反映文档同步维护的持续需求。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中提炼出五大方向：

| 趋势方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🧩 插件生态精细化** | #14920, #84939, #84711, #84747 | 🟢🟢🟢 新插件源 + 安全修复，生态进入治理阶段 |
| **🌐 跨工具协作标准** | #6235 | 🟢🟢🟢🟢 AGENTS.md 一票独大（👍 4526） |
| **🖥️ 桌面/客户端稳定性** | #77208, #84951, #83028, #84962, #76192 | 🟢🟢🟢🟢 Windows/macOS/Linux 全面爆雷 |
| **🤖 远程 & 自托管基础设施** | #50884, #77372, v2.1.224 | 🟢🟢🟢 与新版本同频 |
| **⚙️ 模型适配与评估** | #81853, #79247 | 🟢🟢 新模型质量反馈入口 |

---

## 🛠️ 开发者关注点

从用户反馈中提炼出**三大核心痛点**：

1. **🔌 插件粒度不足 + 安全顾虑**
   - 用户已不满足于"装/卸"二选一（#14920），而是希望按 skill 颗粒度控制。
   - 同时插件安装会**静默触发 `bun install`/`npm ci`**（#84939），而官方文档对此毫无说明——典型的"行为黑盒"问题。
   - YAML 注入与符号链接凭据攻击（#84711 / #84747）暴露插件供应链的潜在风险。

2. **🪟 Windows / 桌面端稳定性堪忧**
   - "Another program is using this file"（#84962、#76192）——即便干净退出仍触发文件锁，导致更新失败。
   - MSIX 在 Intel 集显下崩溃（#83028）。
   - 桌面应用内置 Browser pane 崩溃甚至**重置用户 Profile**（#84951）。
   - Windows API 流式响应 ECONNRESET（#84072）。
   - 这些问题集中在企业主流部署平台，是**Enterprise 上量的最大阻碍**。

3. **📊 新模型 & 文档失真**
   - Fable 5 渲染 BUG（#81853）阻碍模型评估。
   - `ScheduleWakeup` 工具文档声称 5 分钟 TTL，实际订阅主会话使用 **1 小时 TTL**（#74149），开发者基于错误文档做容量规划会造成实际成本偏差。
   - `/goal` 的 4000 字符限制 + 提交后才报错（#84953）属于典型的**交互摩擦**。

---

## 📊 数据快照

- 📦 **Release**: 1（v2.1.224）
- 🐛 **Issues 更新**: 50 条（展示 Top 30）
- 🔧 **PR 更新**: 3 条
- 🌟 **最热 Issue**: #6235 AGENTS.md 支持（👍 4526 / 💬 347）
- 🏷️ **标签分布**: `enhancement` 为主，`bug` 显著增长（尤其桌面端），`area:desktop` / `area:tui` / `platform:windows` 为高频组合。

---

> 报告生成时间：2026-08-08 · 基于 anthropics/claude-code 公开数据
> 关注每日动态可订阅此日报，关注 [anthropics/claude-code](https://github.com/anthropics/claude-code) 仓库获取完整数据。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-08**

---

## � 今日速览

今天 Codex 社区的关键词是 **Windows 兼容性** 和 **MCP 生态完善**。v0.147.0 正式版落地了可移植 Agent Plugins 和会话分组功能，同时 v0.148.0 三个 alpha 版本密集迭代；社区端最热门的是关于 Codex "回复错位" 的多轮对话 Bug（82 条评论），Windows 上的 Computer Use、sandbox、apply_patch 仍然问题频发，macOS 应用则出现一个由外部代理导入引发的 OOM 回归。

---

## 🚀 版本发布

### rust-v0.147.0（正式版）
- **Agent Plugins 系统升级**：支持安装可移植插件，可在本地、个人、工作区、远程插件目录之间搜索（[#36544](https://github.com/openai/codex/issues/36544), [#36409](https://github.com/openai/codex/issues/36409), [#36919](https://github.com/openai/codex/issues/36919), [#36796](https://github.com/openai/codex/issues/36796)）
- **会话分组功能**：可将长对话组织为持久化、可手动排序的分区，并支持增量浏览长会话记录（[#35722](https://github.com/openai/codex/issues/35722), [#36007](https://github.com/openai/codex/issues/36007), [#36380](https://github.com/openai/codex/issues/36380), [#36948](https://github.com/openai/codex/issues/36948)）

### rust-v0.148.0-alpha.1 / .2 / .4（预发布）
三个 alpha 版本在 24 小时内接连发布，迭代节奏加快，预示 0.148 正式版即将进入稳定窗口。

> ⚠️ **回归提示**：[#37425](https://github.com/openai/codex/issues/37425) 报告 v0.147.0 在 LiteLLM 提供商下流式请求一致性失败，升级前请关注。

---

## 🔥 社区热点 Issues

1. **[#8648](https://github.com/openai/codex/issues/8648) — 多轮对话回复错位（82 评论，👍58）**
   - **重要性**：影响所有 Pro 订阅用户，Codex 在多消息会话中常常回复早期消息而非最新一条，破坏对话连贯性
   - **社区反应**：评论数断层第一，👍 票数最多，是当之无愧的"头号痛点"，已存在 7 个月仍未解决

2. **[#12491](https://github.com/openai/codex/issues/12491) — MCP 子进程泄漏（38 评论，已 CLOSED）**
   - **重要性**：Codex.app GUI 中 MCP 子进程未被回收，累计产生 1300+ 僵尸进程、37 GB 内存泄漏，属于严重资源管理 Bug
   - **社区反应**：已关闭，预期修复已在 v0.147.0 周期内合并

3. **[#26234](https://github.com/openai/codex/issues/26234) — 非 OpenAI 端点的 MCP 工具不可调用（32 评论，👍41）**
   - **重要性**：当 Codex 接入 Ollama / LM Studio / OpenRouter / AWS Bedrock 等非 Responses API 端点时，MCP 工具因命名空间序列化问题完全无法调用，限制了本地/自托管用户的使用场景
   - **社区反应**：👍 票数高，受影响用户持续呼吁解耦 Responses API 专有格式

4. **[#35481](https://github.com/openai/codex/issues/35481) — VS Code 中 Codex Diff 报错（26 评论，👍54，已 CLOSED）**
   - **重要性**：Windows + VS Code 用户打开 Codex Diff 视图直接显示"Oops, an error has occurred"
   - **社区反应**：👍 票数极高，反映 Windows 桌面 IDE 集成是社区核心使用场景，已关闭

5. **[#10090](https://github.com/openai/codex/issues/10090) — Windows 沙箱所有命令失败（24 评论）**
   - **重要性**：`elevated_windows_sandbox` 模式下所有 agent 命令因 `CreateProcessAsUserW failed: 5` 失败，业务级用户（Business）受影响严重
   - **社区反应**：7 个月未修复，与 [#13965](https://github.com/openai/codex/issues/13965)、[#14211](https://github.com/openai/codex/issues/14211) 构成 Windows 沙箱"三剑客"问题

6. **[#37043](https://github.com/openai/codex/issues/37043) — Windows Computer Use 启动即失败（17 评论）**
   - **重要性**：捆绑的 Computer Use 助手启动后 `sky.list_apps()` 和 `sky.list_windows()` 立即抛 `EnumWindows failed: 0x80070003`，重启无效
   - **社区反应**：3 天前新开，已带动 [#37415](https://github.com/openai/codex/issues/37415)、[#37484](https://github.com/openai/codex/issues/37484) 形成 Windows Computer Use 问题簇

7. **[#14599](https://github.com/openai/codex/issues/14599) — 允许任意项目设置 `trust_level = "trusted"`（16 评论，👍57）**
   - **重要性**：开发者每次打开项目都要手动确认信任，反复打断工作流
   - **社区反应**：👍 票数排名第二，是本月呼声最高的**功能增强**请求

8. **[#34499](https://github.com/openai/codex/issues/34499) — Windows 桌面版无法在 ChatGPT Project 内创建 Work 对话（15 评论）**
   - **重要性**：ChatGPT Plus Windows 用户遭遇 Project 与 Work 会话类型隔离的硬限制，影响跨端工作流
   - **社区反应**：与 [#34300](https://github.com/openai/codex/issues/34300)（Chats 不能在 Projects 中启动）共同暴露 Project/Work 抽象设计的不完善

9. **[#21839](https://github.com/openai/codex/issues/21839) — 历史"完全访问"会话回退要求审批（15 评论）**
   - **重要性**：从 26.506 版本起，原本拥有 full access 的会话恢复后要求重新审批，被认为是行为回归
   - **社区反应**：跨多个 build 持续复现，破坏用户体验一致性

10. **[#29908](https://github.com/openai/codex/issues/29908) — Ubuntu 24.04 上 apply_patch 在 Bubblewrap 中失败（14 评论）**
    - **重要性**：Linux 用户在 Ubuntu 24.04 + 内核 6.17 下 `apply_patch` 因 userns/loopback 错误无法运行，且 👍 为 0 说明缺少关注度，需要提升优先级
    - **社区反应**：更新到 8 月 8 日仍未获官方回应

---

## 🛠️ 重要 PR 进展

1. **[#37516](https://github.com/openai/codex/pull/37516) — 忽略网络安全模型的可复用命令审批**
   - 针对 cyber 系列模型过滤 `allow` 前缀规则，保留 prompt / forbidden / network / host-executable 策略项，区分自动审核豁免范围

2. **[#37513](https://github.com/openai/codex/pull/37513) — Guardian 审核会话复用父级压缩**
   - 引入 `guardian_reuse_parent_compaction` 特性：父历史改写后重启 Guardian 会话，并注入最新的加密压缩块

3. **[#37511](https://github.com/openai/codex/pull/37511) — 强制托管模型走自动审核**
   - 新增 `auto_review.required_on_models` 强制使用 `on-request` 审批与 `auto_review` 检查，覆盖跨层级模型 slugs

4. **[#37510](https://github.com/openai/codex/pull/37510) — 定义 code-mode 宿主 gRPC 协议**
   - 新增 `codex.code_mode.v1` protobuf API（管理会话、执行、等待、工具回调、通知、内容结果），生成 tonic Rust 绑定，Bazel 集成

5. **[#37507](https://github.com/openai/codex/pull/37507) — 在响应元数据中包含 sandbox_mode**
   - 将有效权限配置作为 `sandbox_mode` 暴露给 turn 元数据（常规/prewarm/压缩/分离内存），保留字段以防客户端覆盖

6. **[#37504](https://github.com/openai/codex/pull/37504) — 为 code-mode WebSocket 禁用 Nagle 算法**
   - 在出站远程会话 WebSocket 上启用 `TCP_NODELAY`，降低代码模式请求/响应的延迟抖动

7. **[#37498](https://github.com/openai/codex/pull/37498) — 进程终止时保留子进程 waiter**
   - 终止或丢弃 PTY 时分离而非中止 child waiter，避免已退出子进程未被回收、退出状态未记录

8. **[#37497](https://github.com/openai/codex/pull/37497) — 限制诊断日志中的 payload 追踪**
   - HTTP / SSE / WebSocket 诊断仅保留 DEBUG 级别在持久日志中，防止高负载压垮 SQLite 日志库

9. **[#37494](https://github.com/openai/codex/pull/37494) — MCP 事件发现与订阅**
   - 暴露 Plugin Runtime 事件定义，新增可取消的 `events/stream` 订阅，将生命周期通知路由到匹配请求

10. **[#37483](https://github.com/openai/codex/pull/37483) — 中断 turn 时同步终止 code-mode cell**
    - 新增 `code_mode_interrupt` 特性（默认关闭），turn 中断时一并终止所有活跃 code-mode 工作单元

> 注：今日 PR 大多由 `copyberry[bot]` 自动化提交，集中在 code-mode、技能系统、Guardian 自动审核三大主线。

---

## 📈 功能需求趋势

从 50 条最新 Issue 中提炼社区最关注的方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Windows 平台稳定性** | [#10090](https://github.com/openai/codex/issues/10090), [#37043](https://github.com/openai/codex/issues/37043), [#13965](https://github.com/openai/codex/issues/13965), [#35799](https://github.com/openai/codex/issues/35799), [#37458](https://github.com/openai/codex/issues/37458) | 🔥🔥🔥🔥🔥 |
| **MCP 生态兼容与扩展** | [#26234](https://github.com/openai/codex/issues/26234), [#35486](https://github.com/openai/codex/issues/35486), [#35253](https://github.com/openai/codex/issues/35253), [#24401](https://github.com/openai/codex/issues/24401), [#37494](https://github.com/openai/codex/pull/37494) | 🔥🔥🔥🔥 |
| **会话/项目管理 UX** | [#8648](https://github.com/openai/codex/issues/8648), [#34663](https://github.com/openai/codex/issues/34663), [#26875](https://github.com/openai/codex/issues/26875), [#34300](https://github.com/openai/codex/issues/34300), [#34499](https://github.com/openai/codex/issues/34499) | 🔥🔥🔥🔥 |
| **沙箱与权限体验** | [#14599](https://github.com/openai/codex/issues/14599), [#21839](https://github.com/openai/codex/issues/21839), [#29908](https://github.com/openai/codex/issues/29908) | 🔥🔥🔥 |
| **Computer Use 跨平台** | [#24437](https://github.com/openai/codex/issues/24437), [#26842](https://github.com/openai/codex/issues/26842), [#37043](https://github.com/openai/codex/issues/37043), [#37415](https://github.com/openai/codex/issues/37415), [#37484](https://github.com/openai/codex/issues/37484) | 🔥🔥🔥🔥 |
| **第三方模型/Provider** | [#37425](https://github.com/openai/codex/issues/37425)（LiteLLM）, [#36082](https://github.com/openai/codex/issues/36082)（gpt-5.6-sol）, [#26234](https://github.com/openai/codex/issues/26234)（非 Responses API） | 🔥🔥🔥 |
| **多端协同（Android Remote/语音）** | [#36257](https://github.com/openai/codex/issues/36257), [#34812](https://github.com/openai/codex/issues/34812) | 🔥🔥 |

---

## 💡 开发者关注点

综合 Issue 与 PR 反馈，社区开发者当前的**核心痛点**集中在：

1. **🪟 Windows 是最大短板**：沙箱 (`CreateProcessAsUserW failed: 5`)、Computer Use (`EnumWindows` / spawn EPERM)、apply_patch、WindowsApps ACL 等问题反复出现且长期未解；Intel macOS x64 的 computer-use 助手打包问题也持续影响用户 ([#24437](https://github.com/openai/codex/issues/24437))

2. **🧠 多轮对话上下文管理**：[#8648](https://github.com/openai/codex/issues/8648) 的"回复错位"问题 7 个月未解，叠加 [#34663](https://github.com/openai/codex/issues/34663)（Resume 渲染完整线程而非最新 turn）、[#25990](https://github.com/openai/codex/issues/25990)（恢复会话丢失新工具），上下文与会话恢复是一类系统性问题

3. **🔌 MCP 不再是"可选项"**：命名空间序列化阻碍非 OpenAI 提供商使用、僵尸进程泄漏、OAuth scope 错误、Plugin MCP 缺少 secret 配置路径——MCP 已经从"附加能力"变成"基础依赖"，但其健壮性仍有显著缺口

4. **📦 v0.147.0 升级回归风险**：LiteLLM 流式请求失败 ([#37425](https://github.com/openai/codex/issues/37425))、外部代理导入触发 OOM ([#36523](https://github.com/openai/codex/issues/36523))，每次大版本都伴随兼容性抖动

5. **🎯 模型治理收紧**：自动提交了"忽略 cyber 模型可复用审批"、"强制托管模型自动审核"、"managed auto_review"等 PR，说明 Codex 正在加强对特定模型与自动审核工作流的策略管控——开发者需要关注自有工作流是否会受影响

6. **⚡ 性能与延迟优化方向**：WebSocket `TCP_NODELAY`、payload 日志限流、resume 启动延迟、macOS 启动 OOM 等 PR/Issue 共同指向"大规模/长会话场景下的资源管理"是下一阶段重点

---

> 📊 **数据范围**：GitHub openai/codex 仓库，2026-08-07 ~ 2026-08-08 滚动 24 小时窗口
> 📝 **日报生成**：基于 50 条 Issue 与 50 条 PR 的元数据与摘要自动汇总

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-08-08
**数据来源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日社区动态集中在三大方向：**安全漏洞修复**（SSRF 攻击防护 + Node 22 升级）、**新模型接入**（Gemini 3.6 Flash / 3.5 Flash-Lite 配置提交），以及 **Agent 子系统稳定性**的持续讨论（subagent 恢复机制、Auto Memory 缺陷、模型容量误报等高频 Bug 集中浮现）。Caretaker Agent 自动化基础设施的 Cloud Run 部署链路也在批量合入。

---

## 🚀 版本发布

| 版本 | 状态 | 说明 |
|---|---|---|
| **v0.56.0-nightly.20260807** | Nightly | 进入下一开发周期，含 v0.55.0-preview.1 changelog 同步 |
| **v0.55.0-preview.2** | Preview | Patch 级修复（cherry-pick 2139b12） |
| **v0.54.4** | Stable | Patch 修复（cherry-pick 56f9688），后续 bump 至 v0.54.2 |

> 详见 [Releases](https://github.com/google-gemini/gemini-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 恢复机制误判为 GOAL 成功 (P1)
**作者**：matei-anghel | 评论：12 | 👍：2
`codebase_investigator` subagent 命中 MAX_TURNS 后却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断状态。可能导致用户被误导认为任务已完成，影响自动化工作流可靠性。**社区反应强烈**，是当日讨论度最高的 issue。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 无限挂起 (P1)
**作者**：turmanticant | 评论：8 | 👍：8
一旦 Gemini CLI 委派给 generalist agent 即陷入永久挂起，连最简单的文件夹创建操作都会卡住。👍 数为当日最高，**反映该问题影响面广且用户体验恶劣**。禁用子代理可临时规避。

### 3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评测体系 EPIC (P1)
**作者**：gundermanc | 评论：7
跟进 [#15300](https://github.com/google-gemini/gemini-cli/issues/15300) 的"行为评测"体系，已生成 76 个行为评测用例覆盖 6 款 Gemini 模型。**这是工程化的重要里程碑**，体现团队在自动化质量保障上的投入。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知文件读取/搜索/映射评估 (P2)
**作者**：gundermanc | 评论：7
评估 AST 感知工具对精度、token 消耗、回合数的影响。**反映了社区对智能代码理解能力的期待**，潜在可显著降低误读取带来的噪声。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 极少主动使用 skills/sub-agents (P2)
**作者**：rnett | 评论：6
用户反馈模型即便配置了 `gradle`、`git` 等自定义 skills 也几乎不会主动调用，除非显式提示。**涉及核心能力调用机制**，影响 subagent 价值的实现。

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话 (P2)
**作者**：SandyTao520 | 评论：5
Auto Memory 仅当抽取代理成功 `read_file` 才标记会话为已处理，决策为"低信号不读"时该会话会反复出现在索引中，**造成死循环**。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行卡在 "Waiting input" (P1)
**作者**：rnett | 评论：4 | 👍：3
简单 CLI 命令执行完成后仍显示 "Awaiting user input"，实际命令早已结束。**影响日常开发体验**，尤其在持续触发 shell 工具时高频出现。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 (P1)
**作者**：sigmaSd | 评论：4
Browser Agent 在 Wayland 环境下崩溃，终止原因显示 GOAL 但实际未完成。**涉及 Linux 桌面兼容性**，对 Wayland 用户群体影响明显。

### 9. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖 (P2)
**作者**：hsm207 | 评论：3
`maxTurns` 等全局/项目级 settings.json 配置完全被 Browser Agent 忽略，仅 `AgentRegistry` 初始化时读取。**配置层与运行层存在不一致**。

### 10. [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — v0.33.0 起 (Sub)agents 未授权自动运行 (P2)
**作者**：jetspiking | 评论：3
升级到 v0.33.0 后 subagents 在未授权情况下自动启用，即便配置中显式禁用。**属于权限模型回归**，可能带来安全/合规风险。

---

## 🔧 重要 PR 进展（Top 10）

### 1. [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) — 新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置 (P2, size/L)
**作者**：Blackmanx
为 `packages/core` 增加 Gemini 3.6 Flash 与 Gemini 3.5 Flash-Lite 的模型定义、能力位（`thinking`、`multimodalToolUse`）、别名及 Code Assist 解析。**核心模型矩阵扩展**，后续将影响所有用户可用模型列表。

### 2. [#28730](https://github.com/google-gemini/gemini-cli/pull/28730) — 修复模型容量耗尽误报与配额映射 (size/M)
**作者**：DavidAPierce
解决 CLI 误报 "capacity exhausted" 的问题，修正 core 客户端侧的配额查找映射，并在瞬时容量激增时保留 UI 的 "Keep trying" 选项。**直击高频误报痛点**。

### 3. [#28725](https://github.com/google-gemini/gemini-cli/pull/28725) — 修复 web-fetch SSRF 漏洞（CVSS 8.6）(P2, size/M) ⚠️
**作者**：alifakbxr | 修复 [#28555](https://github.com/google-gemini/gemini-cli/issues/28555)
关键 SSRF 漏洞修复：攻击者可通过自定义域名指向私有/回环 IP（如 `169.254.169.254`）绕过 DNS 防护。**高危安全修复，建议尽快升级**。

### 4. [#28726](https://github.com/google-gemini/gemini-cli/pull/28726) — 沙箱 Dockerfile 升级到 node:22-slim (P1) ⚠️
**作者**：alifakbxr | 修复 [#28584](https://github.com/google-gemini/gemini-cli/issues/28584)
将 Sandbox 与 caretaker-agent 所有 Cloud Run Dockerfile 从 `node:20-slim` 升级到 `node:22-slim`。Node 20 已进入 EOL，近期 CVE 仅在 Node 22/24/26 中修复。**安全合规级修复**。

### 5. [#28729](https://github.com/google-gemini/gemini-cli/pull/28729) — 修复 IDE 连接的目录不匹配问题 (size/M)
**作者**：amelidev
修复 Gemini CLI 在 Cider（或其他 VS Code fork / 远程工作区使用 FUSE 路径）下无法连接 IDE companion 的问题。**扩展 IDE 生态兼容性**。

### 6. [#28597](https://github.com/google-gemini/gemini-cli/pull/28597) — 在 settings 占位符解析前加载环境变量 (P2, size/L)
**作者**：WolfGreyDev
解决 settings 加载顺序的竞态条件：之前 system/user/workspace 设置文件在解析前就已尝试展开 `process.env`，导致本地 `.env` 中的变量无法用于占位符替换。

### 7. [#28690](https://github.com/google-gemini/gemini-cli/pull/28690) — Caretaker Agent 增加 issue comment 与重新 triage 工作流 (size/L) ✅ Closed
**作者**：chadd28
支持 `issue_comment.created` Webhook 处理，维护者可通过 `@caretaker-agent` 或 `/caretaker triage` 触发 NEEDS_INFO issue 的重新 triage。**自动化运营能力增强**。

### 8. [#28597](https://github.com/google-gemini/gemini-cli/pull/28581) — 跳过 diff hunk 标记的 @ 处理 (P2, size/M)
**作者**：tlysanhuo
防止 unified/combined diff 的 hunk marker 被误解析为 `@file` 引用。每次消除可减少两次递归的全工作区 glob 搜索，**降低大 diff 提示下的 `minimatch`/`path-scurry` 堆增长**。

### 9. [#28727](https://github.com/google-gemini/gemini-cli/pull/28727) — Caretaker Eval Cloud Run Job 入口 (size/M) ✅ Closed
**作者**：chadd28
为 Caretaker Triage Evaluation Suite 提供在 Cloud Run 执行的入口、容器定义与 GCS 制品同步脚本。**评测体系正式具备云端可运行能力**。

### 10. [#28344](https://github.com/google-gemini/gemini-cli/pull/28344) — 新增 eval:validate 静态分析命令 (P3, size/XL)
**作者**：ved015
提供 `eval:validate` 静态分析命令，对 eval 源文件执行 9 条规则校验，违规时退出码为 1。**可用于 CI 门禁**，是评测工程化的关键一步。

---

## 📈 功能需求趋势

从今日 Issues 与 PR 提炼的社区重点方向：

1. **🧠 Agent / Subagent 体系可靠性**（占比最高）
   - 通用 agent 挂起、子代理结果误判、强制类型/行为控制
   - Subagent 轨迹可视化（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - Subagent 上下文纳入 bug 报告（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）

2. **🔐 安全强化**
   - SSRF / DNS 绕过（[#28555](https://github.com/google-gemini/gemini-cli/issues/28555)）
   - Auto Memory 确定性 redaction 与日志收敛（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   - Node 运行时升级

3. **📚 AST 感知代码理解**
   - 文件读取、搜索、代码库映射引入 AST（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
   - 精确方法范围读取以减少 token 噪声与回合数

4. **🧠 Auto Memory 系统**
   - 由 SandyTao520 集中提出 4 个相关 issue（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）
   - 重点：低信号会话处理、invalid patch 隔离、确定性脱敏

5. **🌐 Browser Agent 韧性**
   - Wayland 兼容（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
   - 会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）
   - settings.json 覆盖生效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）

6. **🤖 新模型矩阵**
   - Gemini 3.6 Flash / 3.5 Flash-Lite 配置（PR [#28673](https://github.com/google-gemini/gemini-cli/pull/28673)）
   - >128/400 工具时的 400 错误治理（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）

7. **🛠️ IDE 生态扩展**
   - Cider、远程工作区、FUSE 路径适配（PR [#28729](https://github.com/google-gemini/gemini-cli/pull/28729)）

8. **📊 评测基础设施**
   - 行为评测已有 76 用例；eval:validate、Cloud Run 评测 runner、GCP 部署脚本陆续合入

---

## 👨‍💻 开发者关注点

基于今日讨论提炼的高频痛点与需求：

| 主题 | 痛点 / 需求 |
|---|---|
| **子代理不可靠** | "挂了不知道原因"、"status 报 GOAL 实际没完成"、"只能禁用才能用" — 自动化核心场景最严重的信任问题 |
| **环境兼容性碎片化** | Wayland、Cider、FUSE 远程路径、shell 完成态检测 — 真实开发环境多样性远超假设 |
| **配置生效一致性** | settings.json 在不同 agent 上下文中的覆盖行为不一致 — 配置文件即"权威"的预期被打破 |
| **临时文件污染** | 模型习惯在工作区随机位置生成临时脚本（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)），影响后续 clean commit |
| **破坏性命令风险** | `git reset --force` 等命令无显式确认（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)），希望引入更强引导 |
| **Skills / Subagent 调用率低** | 模型即便配置了相关 skill 也不会主动调用，开发者不得不"提示工程式"地显式要求 |
| **权限模型回归** | v0.33.0 后子代理未授权启用（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)），对受合规约束的用户影响较大 |
| **Shell 提示卡死** | 命令已完成却仍显示 "Awaiting user input"，需要重新进入主循环才能恢复 |
| **Auto Memory 副作用** | 重复重试低信号会话、invalid patch 静默丢弃、模型上下文敏感数据外泄风险 |
| **工具规模上限** | >128/400 工具时 400 错误 — 模型对"在用工具集"的取舍策略仍待优化 |

---

*本日报基于过去 24 小时 GitHub 公开数据自动生成，仅供参考。如有遗漏或建议，欢迎反馈。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-08**

---

## 📌 今日速览

过去 24 小时内，GitHub Copilot CLI 连续发布了三个预发布版本（v1.0.79-7 至 v1.0.79-9），重点强化了企业策略管控、Sandbox 配置可视化以及 Agent Plugins 扩展能力。与此同时，社区反馈集中在 **Windows 平台兼容性**（剪贴板复制崩溃、通知模块崩溃）、**登录认证流程回归**（`#2494` 持续高热度）以及 **Skills/Plugins 子目录组织**（`#1632` 获 23 👍）三大方向。

---

## 🚀 版本发布

### v1.0.79-9（Improved）
- `/sandbox` 配置对话框现在会显示 sandbox 设置在 `settings.json` 中的存储路径，提升配置可追溯性。

### v1.0.79-8
**Added：**
- 支持企业 `allow-auto-only` 策略：允许 `/allow-all auto` 自动生效，同时阻止完整的 `allow-all`。
- 允许企业管理的 sandbox 策略强制执行代理 URL，同时凭据保持用户可控。

**Improved：**
- `/sandbox` 配置对话框对 git、gh 等相关设置进行分组展示。

### v1.0.79-7
**Added：**
- Agent Plugins 规范：插件现在可以通过 `com.github.copilot/extensions/` 目录发布扩展。
- 新增对 **kimi-k2** 模型的支持。
- 支持 `--plan` 与 `--mode autopilot` 组合使用，实现先规划再自动执行而无需等待审批。

**Improved：**
- 改进用户多选提示（Ask user multi-select prompts）的交互体验。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 👍 | 重要性 |
|---|-------|------|------|-----|--------|
| 1 | [#2494](https://github.com/github/copilot-cli/issues/2494) `copilot login` 自动输入 'y/N' 导致认证中断（v1.0.16 回归） | OPEN | 11 | 1 | **高** — 严重的认证回归 bug，已存在 4 个月未修复，多位用户受影响 |
| 2 | [#1632](https://github.com/github/copilot-cli/issues/1632) Skills 支持子目录组织 | OPEN | 10 | **23** | **高** — 👍 数最高的功能需求，开发者希望以目录结构管理 10+ 自定义 skill |
| 3 | [#3622](https://github.com/github/copilot-cli/issues/3622) Windows 平台剪贴板复制静默失败 | OPEN | 5 | 4 | **高** — Windows 用户核心操作失效，影响所有 v1.0.48 之后的版本 |
| 4 | [#4311](https://github.com/github/copilot-cli/issues/4311) 交互模式下 Transcript 渲染为空白行（measured-line 缓存失效） | OPEN | 3 | 0 | 中 — 终端渲染层缺陷，仅在宽度变化或提交新消息时恢复 |
| 5 | [#1409](https://github.com/github/copilot-cli/issues/1409) `--add-dir` 路径中的连字符被转换为下划线（OneDrive 权限循环） | OPEN | 2 | 4 | 中 — Windows 文件系统命名差异导致的权限系统 bug |
| 6 | [#4345](https://github.com/github/copilot-cli/issues/4345) `claude-haiku-4.5` 不支持 `reasoning effort: 'medium'` | **CLOSED** | 2 | 4 | 中 — 子智能体执行失败的兼容性问题，已关闭 |
| 7 | [#4219](https://github.com/github/copilot-cli/issues/4219) Windows 启用通知时 CLI 反复崩溃（原生 toast 路径） | **CLOSED** | 1 | 0 | 中 — Windows 原生通知模块的访问冲突，已修复 |
| 8 | [#4209](https://github.com/github/copilot-cli/issues/4209) 自定义 agent 配置中支持 `skill` 工具别名 | **CLOSED** | 1 | 0 | 低 — 工具别名扩展需求 |
| 9 | [#4185](https://github.com/github/copilot-cli/issues/4185) `--add-dir` 导致 Claude 子智能体调度失败（cache_control 400 错误） | **CLOSED** | 1 | 0 | 中 — Anthropic 模型与 CLI 标志冲突 |
| 10 | [#4118](https://github.com/github/copilot-cli/issues/4118) `/app` 命令不默认选中当前工作目录 | **CLOSED** | 1 | **35** | **高** — 👍 数高达 35 的体验改进请求，社区强烈呼吁 |

**补充关注（最新 OPEN Issues）：**
- [#4402](https://github.com/github/copilot-cli/issues/4402) — npm `bin/copilot` 是 loader 而非版本固定，101 秒内可运行两个不同版本
- [#4392](https://github.com/github/copilot-cli/issues/4392) — 登录后 MCP 客户端重建会遗留孤儿 stdio 进程
- [#4401](https://github.com/github/copilot-cli/issues/4401) — `skill` 工具无法在 `~/.agents/skills` 找到有效 skill（回归）
- [#4397](https://github.com/github/copilot-cli/issues/4397) — `resume` 会话自动切换回默认模型
- [#4399](https://github.com/github/copilot-cli/issues/4399) — 跨工具 Claude hooks 中的 POSIX shell 操作符在 Windows PowerShell 下失效

---

## 🛠️ 重要 PR 进展

过去 24 小时内**无 PR 更新**。近期重要的功能落地主要通过 Release 完成，包括：
- Kimi-K2 模型支持
- Agent Plugins 扩展机制（`com.github.copilot/extensions/`）
- 企业 sandbox 代理策略 + allow-auto-only 策略

---

## 📈 功能需求趋势

通过对 35 条 Issue 的分析，社区关注点可归纳为以下几条主线：

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **🪟 Windows 兼容性** | #3622、#4219、#1409、#4391、#4399 | 极高 — 剪贴板、通知、路径、代码页、PowerShell 钩子全链路问题 |
| **🔐 认证与登录体验** | #2494、#1129、#4400 | 高 — Device Code/Browser 流程多处异常，回归问题长期未解 |
| **🧩 Skills / Plugins 体系** | #1632、#4401、#4209、#2941 | 高 — 子目录组织、扩展机制、跨工具 hooks、桌面通知 |
| **🤖 模型兼容与切换** | #4345、#4185、#4397 | 中 — 多模型（Claude、GPT-5.x）的 reasoning effort、缓存与会话恢复问题 |
| **⚙️ 权限与 Sandbox** | #4398、#1409、#4205、#4396 | 中 — `allowed_directories` 不生效、注册表策略过严、worktree 默认行为 |
| **🎨 UX / 交互改进** | #4118、#4043、#4129、#4395、#4394、#4392 | 中 — `/app` 默认目录、模型选择器遮挡、Banner 行为、Session 快速删除、Ctrl+C 双击退出 |

---

## 💡 开发者关注点（痛点与高频需求）

1. **Windows 是当前最大痛点** — 剪贴板、通知、路径处理、PowerShell 钩子、代码页（936）等问题集中爆发，跨平台一致性亟需加强。

2. **认证流程回归问题悬而未决** — `#2494` 距今已 4 个月仍未修复，影响所有从 v1.0.16 起升级的用户，社区耐心正在消耗。

3. **Skills / Plugins 生态进入扩张期** — v1.0.79-7 正式开放扩展目录，社区同时呼吁子目录组织、跨工具 hooks 兼容、`~/.agents/skills` 路径解析，说明生态从「能用」走向「好用」。

4. **npm 安装版本不稳定** — `#4402` 揭示 `bin/copilot` 作为 loader 而非 pin，会在短时间内切换版本，给 CI/CD 带来不确定性。

5. **MCP 资源管理缺陷** — `#4392` 指出登录后 MCP 客户端重建会遗留 stdio 孤儿进程，属于资源泄漏。

6. **企业级管控需求增强** — v1.0.79-8 引入的 `allow-auto-only` 与强制代理 URL 表明企业用户对细粒度策略的需求在上升。

7. **会话恢复细节丢失** — `#4397`（resume 后丢失模型选择）、`#4311`（resume 后终端渲染空白）反映出 `/resume` 路径在状态恢复上仍存在多处一致性缺陷。

---

*日报基于 github.com/github/copilot-cli 过去 24 小时数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-08** | **数据来源：GitHub - MoonshotAI/kimi-cli**

---

## 📌 今日速览

过去 24 小时内社区热度集中于两大方向：**Agent 安全边界**与**文件编辑可靠性**。Issue #2596 报告了一起 Agent 在 yolo 权限下误删用户工作区外目录的严重事故，引发对沙箱机制的讨论；同时两条针对 `StrReplaceFile` 非 UTF-8 文件处理缺陷的 PR 几乎同步提交（#2594 vs #2595），提出了截然不同的修复策略，存在技术路线分歧。长期高热度的 Memory System 功能请求（#1283，21 条评论）仍在持续发酵。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节略过。*

---

## 🔥 社区热点 Issues

> 说明：今日仅 2 条 Issue 更新，均为高优先级，逐条展开。

### 1. #1283 — [Feature Request] Memory System：跨会话持久化上下文
🔗 https://github.com/MoonshotAI/kimi-cli/issues/1283

- **重要性**：⭐⭐⭐⭐⭐ 长期高呼声功能，开放至今已超 5 个月仍未关闭
- **热度**：21 条评论，反映社区对「AI 记忆用户偏好、项目惯例」有强烈需求
- **要点**：提议同时支持 AI 自动记忆 + 用户手动指令（如 CLAUDE.md 风格），涵盖会话内 / 跨会话 / 跨项目三类场景
- **为什么值得关注**：这是 Kimi CLI 向"个人化开发助手"演进的关键能力，目前 Claude Code、Cursor 等竞品均已落地类似机制

### 2. #2596 — Agent 在 yolo 模式下对工作区外目录执行了 `rm -rf`
🔗 https://github.com/MoonshotAI/kimi-cli/issues/2596

- **重要性**：⭐⭐⭐⭐⭐ **安全红线事件**
- **热度**：评论 0（刚提交），但内容极具警示性
- **要点**：Agent 误判 `ln -sfn` 创建软链失败（实际未创建），随后使用 `rm -rf` 清理时删除了用户 `~/.pi/agent/sessions` 真实目录中的会话数据
- **为什么值得关注**：暴露了两个深层问题——(1) yolo 模式缺乏工作区边界强制隔离；(2) `rm -rf` 工具缺乏 dry-run / 二次确认机制。这是 Kimi CLI 安全设计的典型案例，建议官方尽快回应

---

## 🛠 重要 PR 进展

> 说明：今日仅 2 条 PR 更新，但两条针对同一 Bug 提出了**对立方案**，值得对比阅读。

### 1. #2594 — `fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits`
🔗 https://github.com/MoonshotAI/kimi-cli/pull/2594

- **类型**：Bug Fix
- **策略**：保留原始字节
- **要点**：旧实现以 `errors="replace"` 解码全文件后修改再回写，会导致**编辑区域之外**的非法 UTF-8 字节被永久替换为 `U+FFFD`（EF BF BD），造成文件不可逆损坏。新方案改为在原始字节缓冲上以 UTF-8 字节切片方式应用 `old`/`new`，绕过整文件解码
- **评价**：修复彻底，副作用最小；但若用户编辑位置本身就是非法 UTF-8，仍需兜底

### 2. #2595 — `fix(StrReplaceFile): refuse to edit files that are not valid UTF-8`
🔗 https://github.com/MoonshotAI/kimi-cli/pull/2595

- **类型**：Bug Fix（关联 #2591）
- **策略**：拒绝处理非 UTF-8 文件
- **要点**：与 #2594 修复同一根因，但选择"快速失败（fail-fast）"——直接拒绝编辑任何含非法 UTF-8 字节的文件，避免静默损坏
- **评价**：安全性更友好（明确报错），但破坏了处理二进制 / 旧编码（GBK、Shift_JIS）文件的可用性

> ⚠️ **路线分歧提示**：两条 PR 提交时间仅差几小时，社区维护者需明确取舍——是"宽容保留"还是"严格拒绝"，建议在 PR 评论中协调统一方案，避免合并冲突。

---

## 📈 功能需求趋势

从近期 Issues 提炼社区关注方向：

| 方向 | 代表议题 | 热度 |
|---|---|---|
| **持久化记忆 / 个性化** | #1283 Memory System | 🔥🔥🔥🔥🔥 |
| **Agent 安全沙箱 / 权限隔离** | #2596 rm -rf 越界 | 🔥🔥🔥🔥🔥 |
| **文件编辑健壮性** | #2594 / #2595 UTF-8 | 🔥🔥🔥🔥 |
| **跨平台兼容（编码、二进制）** | 同上 | 🔥🔥🔥 |

可观察到**三大趋势主线**：
1. **从"能跑"到"能信"**：社区越来越关注 Agent 在真实环境下的可靠性与可预测性，而非单纯功能堆叠
2. **从"一次性任务"到"长期搭档"**：Memory System 类需求井喷，说明开发者开始把 CLI Agent 当作日常伙伴
3. **编码 / 国际化兼容性**：非英文开发场景（中国、日本、欧洲用户）对工具链的鲁棒性提出更高要求

---

## 👨‍💻 开发者关注点

综合今日 Issue 与 PR，开发者反馈的**核心痛点**集中在：

1. **🔴 工具安全边界模糊**
   - `rm -rf` 类高危命令缺乏二次确认 / 路径白名单
   - yolo 模式 ≠ 全权托管，用户期待"破坏半径"可控制
   - *建议官方引入 `dangerouslySkipSandbox` 显式开关 + 路径遍历检查*

2. **🔴 文件修改的不可逆损坏风险**
   - 字符串级别的文件操作忽略了字节层语义
   - 错误静默吞掉（FFFD 替换）远比报错更难排查
   - *建议所有写文件路径默认开启 `dry-run` 选项*

3. **🟡 缺乏持久上下文，复用成本高**
   - 每次新会话都要重新交代项目背景、代码风格、个人偏好
   - 与 Claude Code 的 CLAUDE.md 体验差距明显

4. **🟡 中文 / 国际化场景下的工具链细节**
   - 非 UTF-8 文件、含 BOM 的 Windows 文件等 edge case 处理不完善

---

*报告生成时间：2026-08-08 | 数据周期：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-08

## � 今日速览

今日发布 v1.18.15，重点修复消息时序、Revert/Fork 行为与截断清理逻辑。社区层面，**OpenCode Go 订阅的 401 上游拦截**问题（#38257，45 评论）持续发酵，叠加多起计费/模型路由争议（deepseek-v4-flash 实为 V3.2、Go 周限额异常），服务商侧稳定性成为当前主要矛盾；功能侧 Mermaid 渲染、Web 项目选择器修复、Background Subagents 等 PR 集中落地。

---

## 🚀 版本发布

### v1.18.15（Core · Bugfixes）

- ✅ 修复导入/旧消息 ID 乱序导致的会话时间线错位
- ✅ Revert 与 Fork 操作现在使用真实消息时序而非消息 ID 排序
- ✅ 截断清理改用文件时间戳，更可靠地清理陈旧文件

> 主要为底层稳定性修复，未涉及面向用户的功能变更。

---

## 🔥 社区热点 Issues（按重要性筛选 10 条）

| # | Issue | 热度 | 为什么重要 |
|---|-------|------|----------|
| [#38257](https://github.com/anomalyco/opencode/issues/38257) | OpenCode Go `chat/completions` 返回 401，`/v1/models` 正常 | 45 💬 / 👍11 | **最严重**：自 7/22 起所有 Go 订阅模型被上游拦截，影响范围广，作者已反复确认服务端问题 |
| [#5359](https://github.com/anomalyco/opencode/issues/5359) | LiteLLM + Vertex AI 后端下无法读取图片 | 18 💬 | 自 v1.0.137 起持续未解，影响图像类多模态工作流，跨多版本回归 |
| [#23153](https://github.com/anomalyco/opencode/issues/23153) | [FEATURE] 使用加密货币支付 Go | 17 💬 / 👍37 | 👍数最高的功能请求，反映用户对支付方式多样化的强烈诉求 |
| [#14332](https://github.com/anomalyco/opencode/issues/14332) | Bedrock Opus 4.6 compaction 失败（thinking block 修改冲突） | 16 💬 | Amazon Bedrock 长会话 compact 时报错，涉及 Anthropic thinking block 协议兼容 |
| [#40409](https://github.com/anomalyco/opencode/issues/40409) | Go `deepseek-v4-flash` 实为 V3.2（cutoff 2025-05） | 14 💬 | **计费/质量不符**：名义 V4 Flash，实际 V3.2 输出，信任问题 |
| [#6560](https://github.com/anomalyco/opencode/issues/6560) | Windows PowerShell 下无法粘贴 | 13 💬 | 影响 Windows 用户基本使用体验 |
| [#24334](https://github.com/anomalyco/opencode/issues/24334) | DeepSeek `reasoning_content` 必须回传 | 10 💬 | DeepSeek 思考模式协议兼容问题，影响 subagent 等场景 |
| [#34780](https://github.com/anomalyco/opencode/issues/34780) | V2 不支持 Snowflake Cortex OAuth 登录 | 4 💬 | V1→V2 provider-login 系统性缺口的一部分 |
| [#41102](https://github.com/anomalyco/opencode/issues/41102) | 使用率超 100% 且无法 compact | 3 💬 | 使用度计算异常，触发 compact 失败 |
| [#40183](https://github.com/anomalyco/opencode/issues/40183) | Copilot 每会话都要求重新认证 | 3 � | 学生包设备码登录后凭证存储失效，token 刷新逻辑异常 |

---

## �️ 重要 PR 进展（精选 10 条）

| # | PR | 内容 |
|---|----|----|
| [#41113](https://github.com/anomalyco/opencode/pull/41113) | **feat(tui): 渲染 Mermaid 图表** | 在会话记录中直接渲染 Mermaid 流程图/时序图/状态图，作为内置 TUI 插件 `@opencode-ai/merman` 启用 |
| [#41170](https://github.com/anomalyco/opencode/pull/41170) | **feat(console): workspace 解封端点** | 新增 Support API 端点（`SUPPORT_API_KEY` 鉴权），用于清除 `workspace.is_blocked`，幂等安全 |
| [#41147](https://github.com/anomalyco/opencode/pull/41147) | **fix(tui): 显示外部 worktree 会话标签** | 修复兄弟 Git worktree 会话在 TUI footer 不显示目录标签的问题 |
| [#41169](https://github.com/anomalyco/opencode/pull/41169) | **fix(lsp): 匹配通配符 root 标记**（如 `*.cabal`） | `Filesystem.up` 此前仅做字面探测，对 glob 模式 LSP root 检测失效；现支持通配符 |
| [#41167](https://github.com/anomalyco/opencode/pull/41167) | **feat(opencode): web 模式不自动打开浏览器** | 新增 `opencode web --no-open`，便于无桌面/远程部署场景 |
| [#41158](https://github.com/anomalyco/opencode/pull/41158) | **fix(app): 项目选择器默认到 home** | Web 新会话"Add project"对话框不再显示"无文件夹"，默认定位到 home |
| [#41160](https://github.com/anomalyco/opencode/pull/41160) | **feat(tool): websearch 新增 Synthetic 后端** | 在 `exa`/`parallel` 之外新增 `"synthetic"` 搜索供应商 |
| [#41161](https://github.com/anomalyco/opencode/pull/41161) | **fix(session): 为无附件能力的模型抽取工具结果媒体** | `supportsMediaInToolResult` 对 Anthropic/OpenAI SDK 默认 true 导致工具结果中的图片丢失 |
| [#41159](https://github.com/anomalyco/opencode/pull/41159) | **fix(provider): 配置级 npm 覆盖传递给继承模型** | 例如 `provider.synthetic.npm = "@ai-sdk/anthropic"` 此前被静默丢弃 |
| [#40923](https://github.com/anomalyco/opencode/pull/40923) | **feat: 原生 Background Subagents + 瞬时错误自恢复** | 新增 `Task(background: true)`/`next_agent`/`agents_status`；瞬时 provider 错误自动重试 |

> 另有 #41154 / #41153 配套修复 web 应用新会话"无项目"问题，#41152 新增 `opencode://connect` 深链。

---

## 📈 功能需求趋势

从近期 Issues/PR 提炼，社区最关注的方向：

1. **Web App 体验完善**：项目选择器、新会话初始化、`opencode web --no-open`、深链连接（#41156/#41155/#41154/#41153/#41167/#41152）
2. **多 Provider 兼容**：DeepSeek 协议（reasoning_content / v4-flash 路由）、Bedrock thinking block、Snowflake Cortex OAuth、Anthropic via LLM Proxy、Synthetic 搜索（#40409/#40607/#24334/#34780/#40797/#41160）
3. **Subagent / Agent 编排增强**：后台 subagent、运行时模型覆盖、错误自恢复（#17595/#40923）
4. **CI/CD 与企业部署**：`OPENCODE_DISABLE_INSTALL`、Docker 环境（#37888）
5. **可观测性与 TUI 增强**：Mermaid 渲染、worktree 会话标签、消息时序修复（#41113/#41147/v1.18.15）
6. **支付与计费**：加密货币支付、计费/用量透明度（#23153/#41146/#41102/#41166）
7. **Skills/MCP 组织**：技能子目录收纳（#38853）

---

## 👨‍💻 开发者关注点（痛点与高频诉求）

- **🔴 Provider 协议回归**：从 LiteLLM、DeepSeek、Bedrock、Copilot 到 Bifrost 代理，OpenCode 与各家 SDK 在 thinking block / `reasoning_content` / token 刷新等细节上反复出现兼容问题（#5359/#24334/#14332/#40183/#40797）
- **🔴 OpenCode Go 服务端信任危机**：401 拦截、模型路由错配（名义 V4 实为 V3.2）、周限额计费异常（#38257/#40409/#41146）已构成三连击
- **🟡 Web/桌面 UI 边界问题**：新会话"空状态"、空搜索返回为空、桌面端 git 分支不再可见（#41156/#41155/#41105）
- **� TUI 体验**：Windows 粘贴失效、源外运行黑屏（#6560/#40231）
- **🟢 协作工作流**：希望"回复中追加消息"改为排队而非取消当次回合（#41106）
- **🟢 合规与数据可控**：会话分享链接泄露需紧急删除（#41124）

> 综合来看：v1.18.15 的消息时序修复直击开发者长期痛点；接下来的核心议题集中在 **Provider SDK 兼容** 与 **Go 套餐服务端稳定性** 两条主线，建议团队优先解决 #38257 并对 DeepSeek v4-flash 路由给出官方澄清。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-08

## 📌 今日速览

v0.84.1 正式发布，带来 Qwen 个人订阅计划支持与认证就绪检查；但同日即收到多项升级后问题反馈，包括 Node 23 启动失败、主题自动识别异常等。社区讨论焦点集中在 **自动压缩(autocompaction)可靠性**、**TUI 性能与渲染细节**、**Provider 多模型兼容** 三大方向，AI 编程 Agent 的工程化打磨进入深水区。

---

## 🚀 版本发布

### v0.84.1
- **Qwen Token Plan Individual**：内置 Provider 现已支持 Qwen 个人订阅计划文档中的模型（[API Keys 文档](https://github.com/earendil-works/pi/blob/v0.84.1/packages/coding-agent/docs/providers.md#api-keys)）
- **认证就绪检查**：新增 `pi auth` 命令前置能力，用于在请求前验证认证状态

⚠️ **升级提醒**：v0.84.1 在 Node 23 上存在启动崩溃问题（[#7771](https://github.com/earendil-works/pi/issues/7771)），建议暂用 Node 22 LTS 等待修复。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 热度 | 重要性 |
|---|------|------|------|--------|
| [#6879](https://github.com/earendil-works/pi/issues/6879) | auto-compaction 在上下文超过 100% 后不触发，直到 provider 拒绝请求 | OPEN | 👍15 💬13 | ⭐⭐⭐ |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | 新版 system prompt 中 `PI_*` 指南导致 agent 过度调用 bash | OPEN | 👍7 💬11 | ⭐⭐⭐ |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | 压缩后 Pi 偶发不继续执行（已关闭但讨论深入） | CLOSED | 💬10 | ⭐⭐⭐ |
| [#5886](https://github.com/earendil-works/pi/issues/5886) | AgentSession settlement/continuation 生命周期 bug 元 issue | OPEN | 👍4 💬6 | ⭐⭐ |
| [#5952](https://github.com/earendil-works/pi/issues/5952) | ExtensionAPI 缺少安全的 session 替换 API | CLOSED | 💬6 | ⭐⭐ |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | opencode zen gateway 传递 DeepSeek reasoning_content 失败 | CLOSED | 💬6 | ⭐⭐ |
| [#7771](https://github.com/earendil-works/pi/issues/7771) | Node 23 下 0.84.1 启动崩溃（zstd 缺失） | CLOSED | 💬5 | ⭐⭐ |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | Agent.reset() 在运行中调用导致 assistant-only transcript | CLOSED | 💬5 | ⭐⭐ |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | Mac OS 长会话高 CPU 占用 50-110% | OPEN | 👍5 💬4 | ⭐⭐ |
| [#7053](https://github.com/earendil-works/pi/issues/7053) | 并行工具批处理：兄弟调用 stall 时已完成结果被丢失 | OPEN | 💬4 | ⭐⭐ |

**关注理由**：
- **压缩相关 3 个高优 issue**（#6879、#7020、#7053）直指 Agent 长时间任务的核心可靠性——这正是 Pi 作为 coding agent 与普通 chat 工具的差异化能力，社区对此容忍度极低。
- **#7128 暴露了 prompt engineering 副作用**：一条新的 system 指引被滥用为"环境探查工具癖"，是 agent 行为控制中典型的"指令漂移"问题。
- **Provider 兼容性矩阵扩展**：DeepSeek（#7702）、OpenAI Responses 延迟工具（#7709）、baseten maxTokens（#7726）持续考验 Pi 在多模型生态中的适配深度。

---

## 🛠 重要 PR 进展

| PR | 标题 | 状态 | 类型 |
|----|------|------|------|
| [#7710](https://github.com/earendil-works/pi/pull/7710) | feat(agent): 恢复挂起的 harness operations（Harness v2 R3） | CLOSED | ✨ 重构 |
| [#7780](https://github.com/earendil-works/pi/pull/7780) | TUI 性能优化：增量 markdown 解析 + 懒渲染失效 | CLOSED | ⚡ 性能 |
| [#7801](https://github.com/earendil-works/pi/pull/7801) | feat(coding-agent): 懒加载不常用语法高亮 grammar | OPEN | ⚡ 性能 |
| [#7762](https://github.com/earendil-works/pi/pull/7762) | feat(provider): 新增 LM Studio Provider | OPEN | 🤖 新模型 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | feat: 新增 Amazon Bedrock Mantle OpenAI Responses Provider | OPEN | 🤖 新模型 |
| [#7792](https://github.com/earendil-works/pi/pull/7792) | feat(coding-agent): 桥接本地 Cursor CLI 鉴权 | CLOSED | 🔌 集成 |
| [#7749](https://github.com/earendil-works/pi/pull/7749) | fix: 修复 /reload 后自定义工具 renderers 丢失 | CLOSED | 🐛 修复 |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | feat(coding-agent): 新增 --use-theme 主题覆盖 | OPEN | 🎨 UI |
| [#7757](https://github.com/earendil-works/pi/pull/7757) | feat: 全屏模式关闭 copy-on-select 选项 | OPEN | 🎨 UI |
| [#7784](https://github.com/earendil-works/pi/pull/7784) | refactor(agent): 从 record queries 推导 recovery 状态 | OPEN | ♻️ 重构 |

**亮点**：
- **#7710（harness v2 R3）** 是 Agent 核心数据层重建的关键一步，为后续多任务、并发、恢复能力打地基。
- **#7780 / #7801** 性能双管齐下——增量解析 + 懒加载直接缓解 [#7730](https://github.com/earendil-works/pi/issues/7730) 的长会话高 CPU 问题。
- **LM Studio 与 Bedrock Mantle** 两条新 Provider 通路开放，强化了 Pi 在"本地 + 云端"全栈模型选择上的定位。

---

## 📈 功能需求趋势

从 50 条 issue 中提炼出的社区关注方向：

1. **🔄 长时间任务可靠性（高优）** — auto-compaction、并行工具、超时恢复、cancel 中断。代表：#6879、#7053、#7703、#5886。
2. **🧠 多 Provider / 多模型兼容（高频）** — DeepSeek、OpenAI Responses、Gemini thought_signature、opencode zen、baseten。代表：#7702、#7709、#6733、#7726、#7250。
3. **🎨 TUI 体验细节（中频）** — 主题自动检测、LaTeX 渲染、滚动、粘贴预览、菜单位置。代表：#7770、#7760、#7735、#7754、#7786、#7802。
4. **🧩 扩展 API 能力（结构性需求）** — session 替换、工具装饰、tool registration 顺序。代表：#5952、#7800、#7740、#7783。
5. **⚡ 性能与资源（中频）** — 长会话 CPU/内存、syntax 加载、undici header 限制。代表：#7730、#7791、#7801。
6. **🤖 第三方生态对接（新方向）** — Agent Plugins 规范、Cursor CLI 桥接。代表：#7776、#7792、#7793。

---

## 💬 开发者关注点

### 🔴 主要痛点
- **"Context overflow 后才压缩"是当前最严重的设计缺陷**。一个 2 小时 + 373k token 的会话失败案例（#6879）直击 agent 用户的核心场景：必须按 token 数定期检查并触发压缩，而非依赖 API 拒绝。
- **System prompt 一行改动可能改变整个 agent 行为**。#7128 揭示了指南注入需要 A/B 验证机制，否则容易引发"看不见的回归"。
- **生命周期 API 不一致**：Agent.reset()、sendMessage、session 替换、tool registration 顺序——多个 issue（#5886、#7703、#7740、#7783）指向同一个底层问题：扩展 API 缺少统一的状态机语义。

### 🟡 高频需求
- **可视化与编辑能力**：粘贴预览（#7754）、折叠的 paste 可在发送前查看、sticky header（#7802）、LaTeX 准确渲染（#7760）。
- **可配置性**：主题覆盖（#7722）、copy-on-select 开关（#7757）、半页滚动（#7735）。
- **可移植性**：去除 `which` 依赖改用 `command -v`（#7796/#7795），对极简沙箱环境友好。

### 🟢 积极信号
- 多位核心贡献者（mitsuhiko、vegarsti、christianklotz）持续推动 Agent Harness v2、recovery 机制重构等深水区工作。
- Cursor CLI 本地桥接（#7792）显示社区正主动打通 Pi 与其他 AI 工具生态。

---

> 📅 数据统计窗口：2026-08-07 ~ 2026-08-08
> 📊 统计样本：50 Issues + 25 PRs + 1 Release
> 🔗 仓库地址：[earendil-works/pi](https://github.com/earendil-works/pi)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-08-08 · qwen-code v0.21.7-nightly**

---

## 📌 今日速览

v0.21.7 nightly 持续滚动发布，主要聚焦 CI 自动化修复（autofix takeover admission）与 serve 子会话并发文档补全。社区关注点明显向 **桌面端/Web Shell 化**（WebBridge 浏览器控制、Local Control 二维码配对）和 **TUI 跨终端兼容性**（tmux / SSH / Web Terminal 闪烁）两大方向集中；同时 Daemon 服务在大 session 加载场景下的可靠性问题成为 P1 焦点。

---

## 🚀 版本发布

**v0.21.7-nightly.20260808.4ec0371e6** / **v0.21.7-nightly.20260807.fca8f3c1f**
- 🔧 `fix(ci)`：暴露被阻塞的 autofix takeover admission（[#8410](https://github.com/QwenLM/qwen-code/pull/8410) by @qqqys）
- 📝 `docs`：补充 serve 子会话并发的使用说明

两个 nightly 仅相差一个提交，说明当前主线进入小步快跑的 bugfix 阶段。

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 |
|---|---|---|
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | **[P1]** Daemon 大 session 加载超时致健康进程被回收 | 服务可靠性 P1 故障，已有 PR #8691 推进超时安全化 |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | **[P1]** Desktop 0.1.0/Windows 启动 EISDIR 崩溃 | 新发布的桌面端首个 P1 级崩溃，影响安装试用 |
| [#8625](https://github.com/QwenLM/qwen-code/issues/8625) | **[P2]** Windows 终端中文拼音不可读 | 中文用户最切身的功能性问题，影响日常交互 |
| [#8562](https://github.com/QwenLM/qwen-code/issues/8562) | **[P2]** tmux 内 TUI 闪屏（SSH+Ubuntu） | 远程开发高频场景，影响重度 SSH 开发者 |
| [#8550](https://github.com/QwenLM/qwen-code/issues/8550) | **[P2]** `qwen mcp list` 在 SSE 端无 endpoint 时无限挂起 | MCP 集成的可靠性盲区，缺超时兜底 |
| [#8679](https://github.com/QwenLM/qwen-code/issues/8679) | **[P2]** Main CI E2E 失败：acp-cron 流式更新 | ACP 集成核心路径测试不稳定，阻塞合并 |
| [#8593](https://github.com/QwenLM/qwen-code/issues/8593) | **[P2]** Desktop Markdown 链接仅样式不可点击 | 桌面端交互完整性缺陷 |
| [#8672](https://github.com/QwenLM/qwen-code/issues/8672) | **[P2]** PuTTY+SSH 中键粘贴回归 | 经典 xterm 行为回归，影响 Linux 运维用户 |
| [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | **[P2]** 阿里云 Workbench TUI 持续撕裂 | 阿里云用户群体大，TERM=无 COLORTERM 场景缺适配 |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | **[P2]** Windows 独立安装 SHA-256 校验失败（👍3） | Windows 安装链路长期未根治，👍 数最高 |

> **观察**：P1 级别已聚集两条 daemon/桌面崩溃问题，反映桌面化与服务化推进过程中稳定性挑战加剧。

---

## 🛠 重要 PR 进展

| PR | 内容 |
|---|---|
| [#8707](https://github.com/QwenLM/qwen-code/pull/8707) | **WebBridge 浏览器直接控制** — `qwen serve` → Chrome 扩展，复刻 Kimi WebBridge 17 个 action 表面 |
| [#8613](https://github.com/QwenLM/qwen-code/pull/8613) | **tmux 后端子代理** — Web Shell 内运行交互式 CLI/REPL，作为一等后台任务 |
| [#8614](https://github.com/QwenLM/qwen-code/pull/8614) | **Web Shell 右面板全屏切换** — artifact/subagent/review 面板可独立放大 |
| [#8658](https://github.com/QwenLM/qwen-code/pull/8658) | **Review 性能：远程匹配下沉到 CLI** — `/review` 用确定性 `match-remote` 子命令替代模型推理 |
| [#8525](https://github.com/QwenLM/qwen-code/pull/8525) | **Qwen 3.8 推理预算冲突修复** — 防止 `reasoning_effort` 与 `thinking_budget` 同发 |
| [#8526](https://github.com/QwenLM/qwen-code/pull/8526) | **ACP 暴露 reasoning effort 选择器** — 客户端可通过 `thought_level` 控制 6 档推理强度 |
| [#8691](https://github.com/QwenLM/qwen-code/pull/8691) | **Session 恢复超时安全化与可观测** — 解决 #8678 大 session 加载崩溃 |
| [#8687](https://github.com/QwenLM/qwen-code/pull/8687) | **Daemon 跨 worktree Git 操作守护** — 拦截 `run_shell_command` 的 `-C`/`--work-tree` 越权 |
| [#8531](https://github.com/QwenLM/qwen-code/pull/8531) | **超时重试元数据保留** — 把底层 timeout error 挂到 `Error.cause`，HTTP 状态保留 4xx/5xx 重试策略 |
| [#8528](https://github.com/QwenLM/qwen-code/pull/8528) | **ACP 标准 `usage_update` 通知** — 每个主会话轮次后上报上下文占用 |

> 另值得关注：**#8509**（stream-json 中断后会话保活，已关闭）、**#8481**（Wayland 优先 `wl-copy`）、**#8616**（OTel session.start/end 对齐）。

---

## 📈 功能需求趋势

1. **桌面化与本地控制** [#8092](https://github.com/QwenLM/qwen-code/issues/8092) [#8595](https://github.com/QwenLM/qwen-code/issues/8595)
   Web Shell → 桌面应用 / QR 码手机接管，UX 升级是当前最高频方向。
2. **浏览器自动化直接路径** [#8699](https://github.com/QwenLM/qwen-code/issues/8699)
   社区明确要求跳出 MCP 范式，由 `qwen serve` + Chrome 扩展直连。
3. **ACP / 标准化协议** [#8660](https://github.com/QwenLM/qwen-code/issues/8660) [#8695](https://github.com/QwenLM/qwen-code/issues/8695) [#8528](https://github.com/QwenLM/qwen-code/pull/8528)
   reasoning effort、usage_update、context 占用等 ACP 标准面逐步补齐。
4. **多模态/Omni 实验分支** [#8185](https://github.com/QwenLM/qwen-code/issues/8185) [#8197](https://github.com/QwenLM/qwen-code/issues/8197)
   S3 投递可靠性与多模态路线图并行推进。
5. **可观测性** [#8616](https://github.com/QwenLM/qwen-code/pull/8616) [#8697](https://github.com/QwenLM/qwen-code/issues/8697)
   OTel session 生命周期对齐、OTLP 环境变量下的静默失败治理。
6. **Agent 事实核验** [#8701](https://github.com/QwenLM/qwen-code/issues/8701)
   "严格核验模式"提议，把"先验真伪再下结论"纳入 system prompt。

---

## 💢 开发者关注点

- **Windows 平台三位一体痛点**：终端中文渲染 [#8625](https://github.com/QwenLM/qwen-code/issues/8625) + Desktop 启动崩溃 [#8615](https://github.com/QwenLM/qwen-code/issues/8615) + 独立安装 SHA-256 失败 [#7118](https://github.com/QwenLM/qwen-code/issues/7118)，建议官方集中开一个 Windows 修复 milestone。
- **远程/容器化 TUI 渲染**：tmux 闪屏 [#8562](https://github.com/QwenLM/qwen-code/issues/8562)、阿里云 Workbench 撕裂 [#8659](https://github.com/QwenLM/qwen-code/issues/8659)、PuTTY 鼠标回归 [#8672](https://github.com/QwenLM/qwen-code/issues/8672) — `useTerminalBuffer: true` 默认值需要按终端能力区分。
- **Daemon 服务边界**：大 session 加载超时被回收 [#8678](https://github.com/QwenLM/qwen-code/issues/8678)、SSE MCP 永久挂起 [#8550](https://github.com/QwenLM/qwen-code/issues/8550) — 普遍缺超时/取消兜底。
- **测试基建债**：[#8692](https://github.com/QwenLM/qwen-code/issues/8692) `integration-tests/tsconfig.json` 携带非法 `"//"` 文档键导致 tsc 直接 TS5063 中断，**该目录从未被类型检查**。
- **可观测性静默失败**：[#8697](https://github.com/QwenLM/qwen-code/issues/8697) `OTEL_METRICS_EXPORTER=otlp` 共存时 metrics 静默关闭，trace 仍在导出 — 多 CLI 共享 collector 场景的隐患。
- **UX 重复信息**：[#8695](https://github.com/QwenLM/qwen-code/issues/8695) 默认状态行与 footer 同时显示 context 占用百分比，开发者要求可关闭其一。

---

> 📊 **数据范围**：今日 38 条活跃 Issues + 50 条 PR，autofix/takeover 标签占比明显上升，说明机器人化维护流程已介入大量 P2 修复路径。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-08**

---

## 📌 今日速览

v0.9.4 发布通道上的 4 个 CI 阻塞被集中修复（PR #5282 已合入），与此同时围绕 **子代理（subagents）共享工作区隔离**、**会话侧边栏面板** 和 **凭据/Shell 安全审计** 的多项 Issue 持续活跃。整体来看，社区焦点集中在 v0.9.4 的"清理—发布"主线，以及 Fleet、子代理、MCP 等核心机制的可用性打磨。

---

## 🚀 版本发布

过去 24 小时无新 Release。当前主分支版本为 **v0.9.4**，CHANGELOG 与 npm/crate pins 已就绪，但因 CI 4 项阻塞尚未合并而未发版（见 PR #5282）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 摘要 |
|---|---|---|---|---|
| [#2934](https://github.com/Hmbown/CodeWhale/issues/2934) | Sidebar sessions panel with auto-resume | ✅ CLOSED | 13 | **最热议题**。`Ctrl+R` 会话选择器与 `codewhale run --continue` 不够直观，社区呼吁持久化的侧边栏会话面板，已合入 v0.9.4。 |
| [#1425](https://github.com/Hmbown/CodeWhale/issues/1425) | 大文本处理后会话中断卡死 | 🔴 OPEN | 6 | 用户尝试分析 300 万字小说，子 Agent 在 `agent_wait` 超时后主会话卡死。揭示了长任务编排下的超时/中断协议缺陷。 |
| [#4785](https://github.com/Hmbown/CodeWhale/issues/4785) | Dead-code sweep：464 个 `#[allow(dead_code)]` | 🔴 OPEN | 5 | 跨 143 文件的"死代码掩护"让编译器无法捕捉漂移，作者已实测删除前后编译结果。 |
| [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) | 不具备跨会话记忆 | 🔴 OPEN | 5 | 重启即遗忘，即便要求写入记忆也不会主动读取，长期使用体验下降。 |
| [#425](https://github.com/Hmbown/CodeWhale/issues/425) | Subagents: resume_from continuation chains | ✅ CLOSED | 5 | 给 `agent_spawn` 加 `task_id` 实现"续跑而非重启"，已合入 v0.9.4。 |
| [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | 收敛运行时所有权、删除冗余、交付单一可执行 | 🔴 OPEN | 4 | **v0.9.3 大伞议题**：18 个 Rust 包、77 万行中 87% 仍在 `codewhale-tui`，需合并并行路径。 |
| [#3982](https://github.com/Hmbown/CodeWhale/issues/3982) | Subagents: 可选的 advisor watcher | ✅ CLOSED | 4 | 长 turn 中加入观察型 watcher，实时抛告警，避免每次手动启动 reviewer。 |
| [#5123](https://github.com/Hmbown/CodeWhale/issues/5123) | **v0.9.4 release-blocker**：`builder` 子代理 read-only 自阻断 | 🔴 OPEN | 3 | 标注为 `builder` / `gates-shell-writer` 的会话写入受限，写门过严导致开发工作流自我阻塞。 |
| [#790](https://github.com/Hmbown/CodeWhale/issues/790) | i18n 覆盖度（命令/弹窗/控件） | 🔴 OPEN | 3 | 在 `zh-Hant` 已落地的背景下，仍有大量 UI 字符串硬编码英文。 |
| [#5034](https://github.com/Hmbown/CodeWhale/issues/5034) | v0.9.4：切换 provider 会残留无关默认模型 | 🔴 OPEN | 2 | 切换至 OpenAI 时默认模型仍为 `gpt-5.5`，provider/model 解析未协同更新。 |

> 补充关注：#4416（跨会话陈旧失败 Agent 状态污染）、#4390（Plan 制品持久化）、#5191（`!` Shell 命令绕过审批弹窗）也是近期关闭/讨论的高质量问题。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#5282](https://github.com/Hmbown/CodeWhale/pull/5282) | fix(release): 清理 v0.9.4 的 4 个 CI 阻塞 | ✅ CLOSED | 跑 31180519587 失败三处，全为红 lane，PR 集中修复，目标直接发版。 |
| [#5284](https://github.com/Hmbown/CodeWhale/pull/5284) | fix(subagent): 不再把已完成的子代理计入共享 checkout 竞争者 | ✅ CLOSED | 修复 builder 子代理 `echo x > file` 报错 "无法证明有界文件目标" 的误判，原因：finished 儿童被错算 + 共享空间检测过严。 |
| [#5283](https://github.com/Hmbown/CodeWhale/pull/5283) | docs(readme): 主打 "any model in any role" 混合 Fleet | ✅ CLOSED | 重写 README 卖点：Fleet 中的角色可跨厂商跨模型（"不只切换，而是混合编排"）。 |
| [#5252](https://github.com/Hmbown/CodeWhale/pull/5252) | feat(subagents): 允许 embedder 隔离运行时 state root | ✅ CLOSED | 新增 `EngineConfig::subagent_state_root`，让嵌入主机拥有各自的子代理状态根，兼容默认 `workspace/.codewhale/state`。 |
| [#5254](https://github.com/Hmbown/CodeWhale/pull/5254) | Build fix for FreeBSD | ✅ CLOSED | FreeBSD 上 rquickjs 没有现成 binding，开启 `bindgen` feature 才能编译。 |
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3：命令面板、补全、发现过滤 | 🔴 OPEN | 命令边界重构第 5.3 层，逐条验证验收标准，沿用 Layer 5.1/#4992。 |
| [#5256](https://github.com/Hmbown/CodeWhale/pull/5256) | feat(mcp): 后台增量注册表同步 | 🔴 OPEN | `registry_sync` 不再每次全量下载——本地快照零网络返回，全量下载改后台 `tokio::spawn` + 进程级互斥。 |
| [#5257](https://github.com/Hmbown/CodeWhale/pull/5257) | feat(config): `model = "auto"` 基于提示词分层选模 | 🔴 OPEN | 自动在 `deepseek-v4-pro`（复杂任务）与 `deepseek-v4-flash`（简单任务）间切换。 |
| [#5258](https://github.com/Hmbown/CodeWhale/pull/5258) | fix(tui): 解决陈旧 session 标题卡在 "New Session" | 🔴 OPEN | 根因：会话元数据内存缓存只在 snapshot 末尾刷新，覆盖了首次计算出的标题。 |
| [#5280](https://github.com/Hmbown/CodeWhale/pull/5280) | chore(deps): bump `thiserror` 2.0.18 → 2.0.19 | 🔴 OPEN | Dependabot 常规升级（更新到 syn 3）。 |

> 另有 #5279（clap 4.6.1）、#5276（serde_json 1.0.151）、#5281（jsonschema 0.49.4）、#5274（sccache-action 0.0.11）等 8 项 Dependabot 升级同步进行。

---

## 📈 功能需求趋势

按议题热度与合并情况综合，社区最关注的方向集中在以下五条：

1. **会话生命周期管理（侧栏 + 续跑 + 跨会话记忆）**
   #2934、#425、#2492、#5258 共同指向：用户需要"看得见、记得住、能续上"的会话体验。

2. **子代理（Subagents）能力深化与隔离**
   #3982、#4416、#425、#5284、#5252、#5123 表明子代理既是差异化卖点也是故障高发区：续跑链、watcher、隔离、写入授权、状态归属都在重做。

3. **Fleet 多模型多角色编排**
   #5038、#5039、#5283、#5257 构成 Fleet 主线：从 UI 能力展示、多命名耐久配置，到 README 卖点重塑，再到 `auto` 自动选模。

4. **MCP / 工具池的热更新与同步**
   #4068、#5256 — 文档承诺已落后于实现，需补齐热重载语义和后台增量同步。

5. **凭据 / 审批 / Shell 安全审计**
   #5161（`&` 子壳绕过）、#5191（`!` 命令绕过审批）、#5195（密钥保存路径错误提示）、#5197（凭据读取优先级倒置）— 形成 v0.9.4 的"安全扫尾"批次。

> **次要趋势**：i18n（#790）、死代码清理（#4785）、架构收敛（#3306、#4167）、Plan 制品化（#4390）。

---

## 👨‍💻 开发者关注点

1. **写入授权门过严**：`builder` 子代理在共享工作区里写一个小文件都被阻断（#5123、#5284），开发者反复要求"门禁要更聪明，不要更严"。
2. **CI/发版流程易卡**：v0.9.4 仅因 4 个红 lane 就压住整个发版，呼吁把 release-readiness 检查更早前置。
3. **跨会话持久记忆**（#2492）出现频次高——这已不只是"功能缺失"，而是被开发者视为"是否可日常使用"的关键判定项。
4. **错误信息含糊**：#5034（残留默认模型）、#5195（密钥路径报错）、#5203（推理内容不显示）都指向"提示文案与实际行为不一致"的问题，开发者要求 UI 文案对齐真实数据流。
5. **测试隔离**：`fleet/roster.rs` 真实读取 `~/.codewhale/`（#5151）暴露了"测试污染用户环境"的反模式，社区期待统一的 `lock_test_env()` 约束。

---

*数据来源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale) Issues / Pull Requests（截至 2026-08-08 UTC）*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*