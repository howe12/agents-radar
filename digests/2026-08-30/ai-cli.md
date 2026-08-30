# AI CLI 工具社区动态日报 2026-08-30

> 生成时间: 2026-08-30 03:00 UTC | 覆盖工具: 9 个

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
**报告日期：2026-08-30 · 数据窗口：过去 24 小时**

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"基础设施精修 + Agent 自治深化"双轨并行阶段**。一方面，各家头部产品（Claude Code、Codex、Gemini CLI、Copilot CLI）仍在高频发布补丁，主要修复 Windows/Mac 桌面端稳定性、MCP 协议兼容性与计费透明度等"基础设施债"；另一方面，**Agent 体系的可观测性与可控性**成为新一轮竞争焦点——Auto Mode 行为契约（Claude Code）、Subagent 终止状态（Gemini）、Multi-Agent 调度（Codex、Qwen Code）、会话恢复可见性（Pi、DeepSeek TUI）持续被社区顶上首页。值得注意的是，第三方/新兴工具（OpenCode、Pi、DeepSeek TUI）以**多 Provider 适配、扩展机制与 GUI 入口**为差异化抓手，在巨头夹击中保持了显著的工程节奏（Pi 单日合并 8 个 PR、DeepSeek TUI 集成 PR 已 code-complete）。

---

## 二、各工具活跃度对比

| 工具 | 新版本 | 当日 Issues | 当日 PRs | 关键特征 |
|------|--------|-------------|----------|----------|
| **Claude Code** | ❌ 无 | 10（3 已关闭） | 1 | Windows MSIX/GPU 崩溃主导，Auto Mode 回归话题 |
| **OpenAI Codex** | ✅ rust-v0.151.0 + 0.152.0-alpha.1 | 10+ | 10（多已合并） | Windows 26.825 系列更新引发集中投诉 |
| **Gemini CLI** | ✅ v0.59.0-nightly | 10 | 10 | Subagent 体系稳定性主导，P1 级 Bug 多发 |
| **GitHub Copilot CLI** | ✅ v1.0.82 / v1.0.82-2 | 10 | 2 | MCP WAM 重构引发回归（chroma-mcp、ADO MCP） |
| **Kimi Code CLI** | ❌ 无 | 1 | 0 | 极低活跃，唯一议题指向计费 bug |
| **OpenCode** | ❌ 无 | 10（多数已关闭） | 10（4 已关闭） | 历史 Issue 批量清理 + MCP 子进程优化 |
| **Pi** | ❌ 无 | 10 | 12（8 已合并） | 单日合并率最高（66%），`pi web` GUI 首登场 |
| **Qwen Code** | ❌ 无 | 10（多数已关闭） | 10 | Hook 系统信任边界漏洞集中修复 |
| **DeepSeek TUI** | ❌ 无 | 10 | 10 | v0.9.12 进入"代码完成、闸门待绿"阶段 |

**活跃度梯队**：
- **第一梯队**（高频迭代）：OpenAI Codex、Gemini CLI、Pi、Qwen Code、DeepSeek TUI
- **第二梯队**（稳定维护）：Claude Code、GitHub Copilot CLI、OpenCode
- **第三梯队**（低活跃）：Kimi Code CLI（仅 1 条 Issue）

---

## 三、共同关注的功能方向

以下方向在多个工具社区被同步关注，反映出**行业级共识**：

### 1. 🪟 Windows 桌面端稳定性（约 6/9 工具关注）
- **Claude Code**：MSIX 更新冲突、GPU 进程崩溃（#80444/85199/83932/81992）
- **OpenAI Codex**：26.825 自动更新后 app-server 频繁被杀、DWM 句柄泄漏（#33192/32706）
- **Pi**：PowerShell/WSL 路径与启动体验（#8841/8842/8809）
- **OpenCode**：插件加载间歇性挂起（#25668）
- **DeepSeek TUI**：沙箱 read deny-list 跨平台解析（#5724）
- **GitHub Copilot CLI**：`--resume` 冷启动挂起（#4165）

### 2. 🔌 MCP 协议兼容性（约 5/9 工具关注）
- **GitHub Copilot CLI**：v1.0.81 WAM 重构引发 chroma-mcp 断连、ADO MCP OAuth 失败（#4647/4660/4662）
- **OpenAI Codex**：MCP 工具发现 grace period 与结果拦截（0.151 新能力）
- **OpenCode**：MCP 子进程共享优化（#46210）
- **Qwen Code**：MCP + llama.cpp toolSearch 不兼容（#10520/10530）
- **DeepSeek TUI**：自定义 provider 支持 Responses/Anthropic wire（#5719）

### 3. 💰 计费 / 配额 / 订阅透明度（约 4/9 工具关注）
- **Claude Code**：OAuth `rateLimitTier` 与实际订阅不匹配导致 1.7-5× 扣费（#87419）
- **Kimi Code**：`cache_read` 在无 `cache_creation` 时被计费（#2626，疑似 10× 放大）
- **OpenCode**：OpenCode Go 全系 401/404 误判（#39215/43477）
- **OpenAI Codex**：付费体验"静默扣费"风险被反复提及

### 4. 🧠 Subagent / Multi-Agent 体系（约 5/9 工具关注）
- **Claude Code**：Auto Mode 绕过 Read/Edit 工具的 Bash-first 回归（#87971）
- **Gemini CLI**：Subagent 终止状态误报 GOAL success、永久挂起（#22323/21409）
- **OpenAI Codex**：Proactive Multi-Agent 文案与执行语义推进（PR #41457/41461/41570）
- **Qwen Code**：Agent Team teammate 消息积压、ghost member 持久化（#8172/10297）
- **Gemini CLI**：Skills 不被主动调用（#21968）

### 5. 📂 会话 / 历史 / 持久化回放（约 4/9 工具关注）
- **OpenAI Codex**：rollout 历史丢失、resume 跳首 turn（#35746/38792）
- **Pi**：JSONL 解析主线程阻塞、大会话冷启动 10s（#7730/8843）
- **Qwen Code**：WebShell turn-index 与 session-global rewind 不一致（#10385）
- **DeepSeek TUI**：强退出会话恢复对模型不可见（#5715）

### 6. 🛠 工具调用可靠性（约 4/9 工具关注）
- **GitHub Copilot CLI**：`str_replace` 工具缺失、`apply_patch` JSON 循环（#4027/4553）
- **Claude Code**：Glob/Grep 三连关（文档/Agent Teams/模型提示）
- **Qwen Code**：本地 LLM grammar 解析失败（#10520）
- **OpenAI Codex**：工具结果拦截为新能力（PR #41202）

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | Anthropic 官方旗舰，深度绑定 Claude 模型与生态 | 企业付费用户、Anthropic 生态开发者 | CLAUDE.md 路径作用域、Auto Mode 治理面、桌面端深度集成 |
| **OpenAI Codex** | OpenAI 官方，Proactive Multi-Agent + 桌面端 IDE 体验 | OpenAI 订阅用户、需要多 Agent 协作的团队 | rust-v0.151 MCP 拦截 + grace period、TUI 模型选择器、Browser Use |
| **Gemini CLI** | Google 官方，Subagent 体系 + AST 感知工具 | Gemini 订阅用户、研究型/分析型工作流 | Subagent 生命周期治理、Auto Memory、AST/语义工具（tilth/glyph 候选） |
| **GitHub Copilot CLI** | GitHub 官方，与 GitHub 生态（PR/Issue/Actions）深度联动 | 已有 Copilot 订阅的开发者、GitHub Actions 用户 | WAM OAuth 重构、Agent Plugins 1.0、与工作流紧耦合 |
| **Kimi Code CLI** | 月之暗面官方，长上下文场景 | 中文付费用户、长上下文任务（代码库分析） | cache_read/cache_creation 计费模型、当前活跃度极低 |
| **OpenCode** | 第三方，多 Provider + OpenCode Go 订阅 | 需要灵活切换模型（DeepSeek/GLM/Qwen/Muse）的用户 | MCP 子进程共享、reasoning 变体隔离、第三方模型快速集成 |
| **Pi** | 第三方，CLI + Web GUI 多端 + 扩展 SDK | 追求多端一致体验、扩展生态的进阶用户 | `pi web` GUI（PR #8840）、Tencent Token Plan 接入、扩展 provider 注册时序 |
| **Qwen Code** | 阿里官方，本地 LLM + 多语言 | 本地部署用户、Qwen 模型用户、中小团队 | hook 信任边界加固、output style、trusted-loopback operator authority |
| **DeepSeek TUI** | 第三方（CodeWhale），企业级单 worker + GUI 重度打磨 | 企业团队、需要可远程操作的开发者 | 机器令牌、Tailscale web、cloud-dispatch 远程 runner、NoNewPrivs 沙箱 |

**关键差异**：
- **官方派 vs 第三方派**：官方工具（Claude Code、Codex、Gemini、Copilot、Kimi、Qwen）强调与自家模型的深度绑定与一致性；第三方（OpenCode、Pi、DeepSeek TUI）则把"多 Provider 兼容 + 扩展性"作为核心卖点。
- **CLI-only vs GUI 多端**：除 Pi 已合并 `pi web`（#8840）外，多数仍以终端为主，但 Pi 的此举标志着 CLI 工具向"多端开发伙伴"演进的开始。
- **个人 vs 企业**：DeepSeek TUI、Qwen Code 显露出企业级能力（机器令牌、trusted-loopback、CI runner 隔离），而 Claude Code、Copilot CLI 仍以个人/小团队付费体验为主要矛盾。

---

## 五、社区热度与成熟度

### 🔥 高热度 + 快速迭代
- **Pi**：单日合并 8/12 PR（66% 合并率），issue 评论密集（#8584 流式渲染 bug 25 评论），维护节奏快、`pi web` 战略动作落地。
- **DeepSeek TUI**：v0.9.12 集成 PR #5576 累计 72 commits，发布闸门已亮，是当前"集成压力最大但工程纪律最严"的项目。
- **Gemini CLI**：单日发布 nightly + 10 个 PR（4 个已关闭），P1 级 Subagent Bug 多发反映**快速扩张期的质量债**。
- **Qwen Code**：合并 PR 10087/10428/10429 等大批 autofix/takeover 类自动化 PR，CI 基础设施加固密集。

### 🟡 稳定维护 + 问题收敛
- **Claude Code**：Windows 桌面端积累 ≥5 个高频 Issue 但无 PR 跟进，**"升级比不升级更糟"** 的开发者抱怨频现。
- **GitHub Copilot CLI**：v1.0.82/-2 双发修复 3 个 UX 痛点，但 WAM 重构引发的 MCP 回归尚未完全消化。
- **OpenCode**：批量关闭历史 Issue + 持续接入新模型（DeepSeek V4、GLM-5.x、Muse），处于"清理 backlog + 横向扩张"双线。
- **OpenAI Codex**：rust-v0.151.0 + 0.152.0-alpha 双轨发布，社区与官方节奏高度同步，但 Windows 26.825 系列成为最大不稳定源。

### ⚠️ 活跃度偏低 / 风险信号
- **Kimi Code CLI**：单日仅 1 条 Issue 且 0 PR、0 Release，唯一议题指向**计费 bug 可能影响所有付费用户**，需密切关注后续社区发酵与官方响应。

### 成熟度评估
| 维度 | 领先者 | 追赶者 |
|------|--------|--------|
| **功能完整度** | Claude Code、Codex | Gemini CLI、Qwen Code |
| **Agent 自治能力** | Gemini CLI、Codex、Pi | Claude Code（Auto Mode 争议中）、DeepSeek TUI |
| **跨平台稳定性** | Codex（除 Windows 26.825）、OpenCode | Claude Code（Windows 桌面端债务重）、Kimi |
| **扩展生态** | Pi、OpenCode、DeepSeek TUI | Qwen Code、Copilot CLI |
| **企业级能力** | DeepSeek TUI、Qwen Code | Claude Code、Copilot CLI |

---

## 六、值得关注的趋势信号

### 📈 趋势 1：MCP 协议成为事实标准，但授权层稳定性是下一个瓶颈
GitHub Copilot CLI v1.0.81 WAM 重构同时引发 chroma-mcp 断连、ADO MCP OAuth 失败、带路径 issuer 发现失败三类问题；OpenAI Codex 0.151 反向引入 MCP 结果拦截与 grace period。**结论**：MCP 已成为多工具共识的扩展接口面，但 OAuth 元数据发现、远程 server 适配仍是薄弱环节。开发者应关注**官方"兼容矩阵"披露**而非简单升版本。

### 📈 趋势 2：Subagent / Multi-Agent 从"功能堆叠"转向"可观测性"
Gemini CLI Subagent 终止状态误报、Qwen Code Agent Team 消息积压、Claude Code Auto Mode Bash-first 回归——所有头部工具都被"Agent 行为不可信"问题困扰。**结论**：单 Agent 体验已趋同，**下一阶段的差异化战场在于 Agent 轨迹可观测、终止语义可信度、Goal lineage 治理**。开发者应优先关注提供 hook/preflight/SessionEvent 治理面的工具（Pi PR #8262、Qwen Code #10427 是正面信号）。

### 📈 趋势 3：计费透明度与"静默扣费"成为付费用户核心痛点
Claude Code #87419（5x→20x 误判）、Kimi Code #2626（cache_read 10

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-08-30）

---

## 一、热门 Skills 排行（按社区关注度）

### 🥇 #1298 — skill-creator 评估管线修复（run_eval.py 0% recall）
- **链接**：[anthropics/skills#1298](https://github.com/anthropics/skills/pull/1298)
- **状态**：OPEN
- **内容**：修复 `run_eval.py` 始终返回 `recall=0%` 的核心 Bug，覆盖 Windows 流读取、触发检测、并发 worker，并要求把 eval 产物当作真实 Skill 安装。
- **关注度**：⭐⭐⭐⭐⭐（关联 Issue #556 有 12 评论 + 7 👍，是当前最热的工程问题之一，涉及描述优化闭环失效）
- **热点**：社区正在公开质疑 description-optimization 是否在"对噪声优化"。

### 🥈 #1628 — Hivemind：零成本多 Agent 编排 Skill
- **链接**：[anthropics/skills#1628](https://github.com/anthropics/skills/pull/1628)
- **状态**：OPEN（2026-08-21 新建，最热的新增 Skill 之一）
- **内容**：把机械性任务分发给 headless opencode worker，使用免费模型，让 Claude Code 仅保留规划+评审+合并职责。
- **热点**：代表"昂贵上下文是稀缺资源、而非智能本身"的编排思路，是社区当下最强的方向性提案。

### 🥉 #514 — document-typography Skill
- **链接**：[anthropics/skills#514](https://github.com/anthropics/skills/pull/514)
- **状态**：OPEN
- **内容**：解决 AI 生成文档的孤儿词/寡妇段落/编号错位等排印质量缺陷。
- **热点**：评论区认为"每个 Claude 生成的文档都受影响"，呼声来自多个触达所有人痛点的工作流。

### #486 — ODT Skill（OpenDocument 读写转换）
- **链接**：[anthropics/skills#486](https://github.com/anthropics/skills/pull/486)
- **状态**：OPEN
- **热点**：与 #12 docx 空白格式化问题（4 评论）一道，构成"企业文档格式覆盖"的明确需求。

### #83 — skill-quality-analyzer / skill-security-analyzer
- **链接**：[anthropics/skills#83](https://github.com/anthropics/skills/pull/83)
- **状态**：OPEN
- **内容**：引入元能力，对 Skills 做五维质量评估 + 安全分析。
- **热点**：与安全 Issue #492（43 评论，热度断层第一）形成强呼应——社区急需可信的质量/安全治理基础设施。

### #1367 — self-audit：交付前自审计 Skill（v1.3.0）
- **链接**：[anthropics/skills#1367](https://github.com/anthropics/skills/pull/1367)
- **状态**：OPEN
- **内容**：机械文件核验先于四维推理审查，按伤害严重度排序；通用、跨技术栈。
- **热点**：与 Issue #1385「Reasoning Quality Gate Pipeline」提案互相印证，反映对"质量门"的集中需求。

### #1615 — scnet-hpc Skill
- **链接**：[anthropics/skills#1615](https://github.com/anthropics/skills/pull/1615)
- **状态**：OPEN
- **热点**：代表 HPC/超算场景的私有集群工作流扩展，是企业基础设施覆盖的代表。

### #1602 — 评估/基准/编码稳定性批量修复
- **链接**：[anthropics/skills#1602](https://github.com/anthropics/skills/pull/1602)
- **状态**：OPEN
- **内容**：覆盖 mcp-builder 序列化、benchmark 指标、编码、子进程稳定性。直接对应 Issue #1390（mcp-builder evaluation 0/N，4 评论）。
- **热点**：mcp-builder 评估体系被多名社区用户独立复现为完全失效，是当前最被压抑的不满点之一。

---

## 二、社区需求趋势（基于 Issues 提炼）

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **信任/安全治理** | #492（43 评论，断层第一） | 社区强烈要求解决"社区 Skills 借用 anthropic/ 命名空间"造成的信任边界滥用 |
| **企业级协作与分享** | #228（16 评论，8 👍） | 希望在 Claude.ai 内直接进行 org 级 Skill 共享，绕过手动上传 |
| **Skill 创造工具可靠性** | #556（12 评论，7 👍）、#202 | `skill-creator` 的文档评估信号失真、README 风格冗长 |
| **质量保证/自审计** | #1385、#1367、#83 | 三阶段推理质量门，机械+推理双层审计 |
| **多 Agent 编排** | #1628、#1385 | 低成本 worker 派发 + 推理质量门的复合范式 |
| **文档/排版质量** | #12、#514、#486 | docx 空白、ODT 支持、排印孤儿词都是反复出现的问题 |
| **上下文/内存管理** | #1487（claude-api 注入 156k tokens，4 评论）、#1329 compact-memory | 解决 Skill 自身无脑注入 + 长程 agent 状态压缩 |
| **平台互通** | #29 Bedrock、#16「Skill 暴露为 MCP」 | 让 Skills 与 MCP 形成统一 API 协议 |
| **去重/插件语义** | #189（document-skills 与 example-skills 重复安装，6 评论 + 9 👍） | 评分最高议题之一；缺乏 skill-metadata 命名空间策略 |

> 趋势小结：**"治理（信任+质量+安全）"已超越"新 Skill 数量"成为社区最强烈的诉求**，新增 Skill 仅是表面数字。

---

## 三、高潜力待合并 Skills（OPEN 状态，价值已被广泛印证）

| PR | Skill | 合并概率评估 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 全套修复 | ⭐⭐⭐⭐⭐ — 已与 #556 高赞 Issue 闭环，跨平台 |
| [#1602](https://github.com/anthropics/skills/pull/1602) | evaluation 批量修复 | ⭐⭐⭐⭐⭐ — 修复 mcp-builder/evaluation.py 0/N，共鸣于 #1390 |
| [#538](https://github.com/anthropics/skills/pull/538) / [#541](https://github.com/anthropics/skills/pull/541) / [#539](https://github.com/anthropics/skills/pull/539) | PDF/DOCX/skill-creator 小修（Lubrsy706 系列） | ⭐⭐⭐⭐ — 均是低风险路径修正 |
| [#1099](https://github.com/anthropics/skills/pull/1099) / [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 兼容性 | ⭐⭐⭐⭐ — 社区跨平台运行痛点直接缓解 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 模型退役清理 | ⭐⭐⭐⭐⭐ — 跟随官方模型生命周期，接近合并 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多 Agent | ⭐⭐⭐ — 思路新颖但需核心维护者认同 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | ⭐⭐⭐ — 已与 #1385 形成体系，但仍需社区验证 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | ⭐⭐⭐⭐⭐ — 文档类高接受度，与 #452 Issue 直接挂钩 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是：把 Claude Skills 从"功能增量"升级为"受治理、可审计、跨平台一致的能力资产"——安全与质量（Trust + Quality）已经压过了"再多一个 Skill"。**

三类表现最一致：
1. **信任焦虑**：#492 断层热度 → 必须有 namespace 与签名机制；
2. **评估可信度危机**：#556 + #1390 + #1602 → 描述优化与 MCP 评估两条线都被报告"完全失真"；
3. **上下文自律**：#1487 + #1329 + #1628 → Skill 需要主动控制自身注入与委派边界。

---

# Claude Code 社区动态日报 · 2026-08-30

---

## 📌 今日速览

过去 24 小时，仓库**无新版本发布**，但社区讨论热度集中聚焦于两类问题：一是 **Windows MSIX 桌面应用的更新与 GPU 进程崩溃**（多个长期悬挂的高评论数 Issue 被顶上首页），二是 **Auto Mode 强制使用 Bash 工具而绕过 Read/Edit/Write 的行为回归**——围绕该话题已经衍生出至少 4 个相关 Issue，开发者普遍认为这违反了 CLAUDE.md 路径作用域规则。同时一批 **Glob/Grep 工具兼容性**的文档与 Bug 报告已正式关闭，标志着 v2.1.117 的迁移工作接近尾声。

---

## 🆕 版本发布

> 过去 24 小时 **无新 Release**。最近一次版本相关讨论仍围绕 `claude-code 2.1.229`（桌面端捆绑）和 `desktop 1.30096.5/1.37937.0/1.24012.1` 等多个桌面端构建分支。

---

## 🔥 社区热点 Issues

以下按评论数与社区关注度排序，选出 10 个最值得关注的 Issue：

| # | Issue | 关键点 |
|---|-------|--------|
| 1 | **[#80444](https://github.com/anthropics/claude-code/issues/80444)** — `desktop 1.24012.1` GPU 进程崩溃 (0x060C201E) | 💬 **78 评论 / 14 👍** | 桌面应用通过 in-app Browser tab 触发致命 GPU 进程崩溃，崩溃后 MSIX 包不可启动 (`appxState=2`)，需执行 "Advanced Options → Repair"。社区复现覆盖多版本 NVIDIA 驱动，影响面广。**当前热度第一**。|
| 2 | **[#85199](https://github.com/anthropics/claude-code/issues/85199)** — Desktop 反复崩溃需 Repair | 💬 40 评论 / 6 👍 | 与 #80444 同源现象，但持续时间更长，是该类问题的事实"主帖"。附有 Windows 用户的 step-by-step 复现指引。|
| 3 | **[#87971](https://github.com/anthropics/claude-code/issues/87971)** — Auto Mode 滥用 Bash 工具 | 💬 8 评论 / **38 👍** | 虽然评论数不高，但 👍 数在前 30 中遥遥领先，说明社区**强烈认同**这是一项设计缺陷：Auto Mode 引导模型用 `cat`/`sed` 而非专用 Read/Edit 工具，开发者认为这绕过了 Auto Mode 原本承诺的"最小特权"。|
| 4 | **[#83932](https://github.com/anthropics/claude-code/issues/83932)** — Windows 自动更新冲突进程 | 💬 16 评论 | 静默更新在 `claude.exe`/`CoworkVMService` 运行中尝试注册 (0x80073CF9)，导致应用连续两天进入 `NeedsRemediation`，开发者不得不使用 dev-only 的 `PreserveApplicationData` 标志。|
| 5 | **[#81992](https://github.com/anthropics/claude-code/issues/81992)** — `NeedsRemediation` 状态跨 OS 重装仍复现 | 💬 12 评论 | 即使完整重装 Windows，MSIX 包仍持续进入损坏态，暗示故障位于升级管线或云端元数据而非用户环境。|
| 6 | **[#51781](https://github.com/anthropics/claude-code/issues/51781)** ✅ 已关闭 — 原生 macOS/Linux 文档误标 Glob/Grep 为独立工具 | 💬 6 评论 | v2.1.117 后 `Glob`/`Grep` 已被 `ugrep`/`bfs` 替代，但官方文档未更新。本日关闭标志着**文档侧正式对齐**。|
| 7 | **[#61845](https://github.com/anthropics/claude-code/issues/61845)** ✅ 已关闭 — Agent Teams 缺少 Glob/Grep 工具 | 💬 6 评论 | 实验性 Agent Teams 在 deferred tools catalog 中缺失 Glob/Grep，配合 #51781 形成"工具/文档/实验特性"三方一致性收尾。|
| 8 | **[#69849](https://github.com/anthropics/claude-code/issues/69849)** ✅ 已关闭 — 模型指引仍指向已删除的 Glob/Grep | 💬 5 评论 | 系统提示词仍在告诉模型"prefer dedicated tools over Bash"，但工具已被移除，导致模型调用不存在的能力。**今日关闭**，预计将随同 #51781/#61845 一起在下次版本说明中体现。|
| 9 | **[#89599](https://github.com/anthropics/claude-code/issues/89599)** — 静默更新残留子进程导致 MSIX 注册失败 | 💬 5 评论 | 与 #83932 同源但是新的"refile"入口；明确报告隐式 stealth update 在退出应用后留下孤儿进程，必须手动 kill 才能完成 0x80073D02 修复。|
| 10 | **[#87419](https://github.com/anthropics/claude-code/issues/87419)** — 8/17 重置后 Max 20x 周配额消耗提速 1.7–5× | 💬 5 评论 | OAuth token 内 `rateLimitTier` 仍为 `default_claude_max_5x`，导致 Fable 与 Sonnet 周配额按 5x 套餐而非 20x 计算，影响**付费用户账单体验**。|

---

## 🛠 重要 PR 进展

> 过去 24 小时仅 **1 个 PR 被更新**，全仓库活跃 PR 数量极少。

| # | PR | 说明 |
|---|----|------|
| 1 | **[#61720](https://github.com/anthropics/claude-code/pull/61720)** — Docs: 添加 Cowork 队列不触发下一轮的故障排查条目 | 闭环 Issue [#61718](https://github.com/anthropics/claude-code/issues/61718)，定位根因为 "queue post-turn handler 与 rate-limit handler 之间的竞态条件"。属于文档型修复，尚未合并入版本说明。|

> 💡 由于 PR 数量极少，无法铺开 10 条精选。下面补充 4 条与今日 Issue 强相关的、在追踪中的关键 PR 视角（无链接，仅用作交叉参考）：
> - 围绕 MSIX 更新管线的修复（与 #83932/#89599 配套）暂未出现在 PR 列表中，社区正在等待 triage。
> - Glob/Grep 工具文档更新 (#51781/#69849) 仍未见配套 PR，可能是直接编辑 docs 站点而未走仓库流程。
> - Auto Mode Bash-first 指引 (#87971/#89731/#90450) 缺少对应修复 PR，模型系统提示词的修改通常独立进行。

---

## 📈 功能需求趋势

通过对近 24 小时活跃 Issue 的聚类，可以提炼出以下社区最关注的方向：

1. **🪟 Windows 桌面应用的更新与生命周期管理**（占比约 35%）
   - MSIX 自动更新在运行中的应用/服务上失败的可靠性
   - GPU/Compositor 进程崩溃后的修复体验
   - 静默更新残留子进程导致注册失败的清理路径

2. **🤖 Auto Mode 的行为契约与可解释性**（占比约 15%）
   - Bash-first 默认值与 CLAUDE.md 路径作用域优先级冲突
   - 多次回归（2.1.21 → 2.1.31 → 现版本），开发者呼吁引入 opt-out 标志与变更说明

3. **📂 工具表面一致性**（Glob/Grep 文档 + Agent Teams deferred catalog，已基本完成收尾）

4. **🔄 Cowork & Scheduled Tasks 的稳态运行**（#72308、#89639、#90637、#84581）
   - 计划任务不退出导致内存耗尽
   - 中途卡死的会话会占用全局并发槽位
   - 消息入队后丢失或被错处理
   - Cowork Cloud sessions 完全无法访问 GitHub repo，提示调用不存在的 `add_repo` 工具

5. **🔐 认证、配额与多账户切换**（#87419、#87440、#90647）
   - OAuth token 携带的 `rateLimitTier` 与实际订阅不匹配
   - 切换账户时 MCP OAuth 授权被清空
   - Desktop 中模型选择回退到更贵的隐式版本

6. **🧹 数据生命周期与隐私保护**（#90667，今日新建已关闭）
   - `cleanupPeriodDays=30` 默认值会在无提示、无回收站的情况下永久销毁不可重建的会话（如税务对话），社区要求引入备份/确认机制

---

## 👨‍💻 开发者关注点与痛点

- **崩溃类问题缺少单向修复节奏**：MSIX/桌面端崩溃自 7 月起已积累 ≥ 5 个高频 Issue，但未见任何关联 PR 提交。Windows 开发者普遍反馈"升级比不升级更糟"。
- **Auto Mode 与 CLAUDE.md 的规则边界需要文档化**：开发者最在意的是可控性而不是能力——"哪怕提供一行 opt-out 也比默默变更默认值好"。
- **计划任务/无人值守会话需要强可观测性**：包括终止检测、超时、并发槽释放、上游失败重试。社区希望 Routinue 与 Cron 模式对齐 CLI 的 `--strict-mcp-config`、`--permission-mode` 等已有治理面。
- **付费体验的"静默扣费"风险**：#87419 与 #87440 都涉及"为未请求的版本付费"，付费用户对账单透明度提出明确诉求。
- **数据销毁的"破坏性默认"被强烈反对**：一条新 Issue (#90667) 当天创建当天关闭（疑似被 triage bot 误判），但社区通过其他帖子继续呼吁——开发者希望保留至少一次"启用前确认"。
- **工具/文档/模型提示三方一致性回归**：Glob/Grep 案例凸显 Anthropic 在"删除工具 → 改文档 → 改系统提示"这一链条上仍有流程空隙，本次三连关是积极信号，但开发者期待的是"pre-commit 检查"，而非事后回填。

---

> 📅 报告生成时间：2026-08-30 · 数据样本：最近 24 小时 GitHub Issues/PRs 更新  
> 🔗 仓库：<https://github.com/anthropics/claude-code>

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-30** · 数据来源：github.com/openai/codex

---

## 📌 今日速览

今日 Codex 项目完成 **rust-v0.151.0 稳定版** 发布，带来 MCP 工具发现与结果拦截等关键能力；同时 0.152.0 进入 alpha 阶段。社区侧，**Windows 平台稳定性**仍是最突出的焦点——围绕 26.825 系列自动更新，出现了 app-server 频繁被杀、code-mode host 握手失败、Composer 卡死、headless 启动等多个连锁问题；session/thread 的**历史回放与恢复**机制也持续被多个高评论 issue 集中质疑，揭示出 rollout 投影与 goal 归属的底层缺陷。

---

## 🚀 版本发布

### rust-v0.151.0（稳定版）
本次稳定版带来三项面向扩展体系的能力升级：
- **可选 MCP 服务器的工具发现可配置 grace period**（#41199），降低冷启动时漏报工具的概率
- **扩展可在工具结果到达模型前检查或替换**（#41202），为安全审计、内容脱敏与重定向打开新空间
- **插件目录合并 per-repo 配置** 并报告无效的市场条目，提升多仓库场景下插件配置的可诊断性

同时 `rust-v0.152.0-alpha.1` 与 `rust-v0.151.0-alpha.7.2` 已发布，0.152 进入早期测试。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 链接 |
|---|---|---|---|
| 1 | **#35746** [bug] 分页 rollout 历史丢失有效记录并重用 ordinal | 评论 **34**。CLI 0.146.0-alpha.10.1 起 `RolloutLine` 解码不一致，至今未在更高版本修复 | [#35746](https://github.com/openai/codex/issues/35746) |
| 2 | **#32706** [bug] Windows/Edge 插件更新后 host 锁死、缓存残留、AppServer manifest 失效 | 评论 **17**。Edge + Codex AppX + Chrome 扩展三方协同更新失败，影响 uninstallability | [#32706](https://github.com/openai/codex/issues/32706) |
| 3 | **#29639** [bug] WSL 项目下 Browser Use Node REPL 因 sandboxCwd 不映射而失败 | 评论 **16**。Desktop 自动生成的 Windows `node_repl.exe` 收到 Linux 路径，根因是路径映射缺失 | [#29639](https://github.com/openai/codex/issues/29639) |
| 4 | **#33192** [bug] Win10 DWM Composition 句柄随 Codex 工具调用持续增长 | 评论 **16**，👍 **10**。一个工具调用 5 次让句柄 +22 且不释放，存在内存泄漏风险 | [#33192](https://github.com/openai/codex/issues/33192) |
| 5 | **#38792** [bug] Resume 打开长 thread 直接回到首 turn，0.146.1 起 thread_history 投影游标错位 | 评论 **15**。由 Claude 代理舰队实测报告，后版本未自愈 | [#38792](https://github.com/openai/codex/issues/38792) |
| 6 | **#29811** [bug] Goal compaction 复活已完成的 manual steer | 评论 **10**，👍 **7**。长任务里已完成指令在压缩后被"鬼复活"，污染 goal continuation | [#29811](https://github.com/openai/codex/issues/29811) |
| 7 | **#41290** [bug] 切换 Agent Env 到 WSL 后项目创建/删除失败 | 评论 **9**。影响 Windows + WSL 工作流新用户入门路径 | [#41290](https://github.com/openai/codex/issues/41290) |
| 8 | **#36087** [bug] Windows sandbox workspace-write 模式 ACL 拒绝读失败 | 评论 **9**。`helper_unknown_error` 间歇性报错，沙箱初始化不稳定 | [#36087](https://github.com/openai/codex/issues/36087) |
| 9 | **#32447** [bug] macOS CLI 重复报告 bundled node_repl MCP 启动失败 | 评论 **8**，👍 **11**。仅是告警但每次启动都刷屏，影响体验与日志可读性 | [#32447](https://github.com/openai/codex/issues/32447) |
| 10 | **#33192 同类型 / #41540 / #41539** [bug] Win 26.825 自动更新后 headless 启动 12 min+ | 新增三连发：#41540（0x80071770 node_repl 迁移失败）、#41539（update-policy gate + cua_node 阻塞主循环）、#41523（自动更新后无窗口） | [#41540](https://github.com/openai/codex/issues/41540) / [#41539](https://github.com/openai/codex/issues/41539) / [#41523](https://github.com/openai/codex/issues/41523) |

**社区反应观察**：Windows Desktop 26.825 系列更新引发集中投诉（崩溃、握手失败、headless 启动、Composer 卡死），多个独立报告指向同一根因——**更新路径中的 sandbox/权限/迁移顺序未充分协调**。建议在 Windows 平台升级前先稳定更新链路。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 变更摘要 | 链接 |
|---|---|---|---|
| 1 | **#41586** Composer 增加 Vim 搜索动作 | `/`、`?` 文本搜索 + `n`/`N` 重复导航，支持 operator 组合，与 draft 状态隔离 | [#41586](https://github.com/openai/codex/pull/41586) |
| 2 | **#41569** 加固诊断上报上传 | 核心事件先发、附件分卷 gzip 上传并按格式感知截断，控制编码与解码后大小 | [#41569](https://github.com/openai/codex/pull/41569) |
| 3 | **#41567** 从 owned settings snapshot 恢复 thread cwd | 解决 fork/compact 后丢失 cwd 的问题，回放窗口外的最新设置也能恢复 | [#41567](https://github.com/openai/codex/pull/41567) |
| 4 | **#41562** Goal 续执行保留 turn lineage | 避免 hook/外部输入污染目标归属，清除陈旧 lineage 元数据 | [#41562](https://github.com/openai/codex/pull/41562) |
| 5 | **#41467** TUI 模型选择器从 app server 刷新 | 打开时异步拉取真实目录，避免使用陈旧的启动期缓存 | [#41467](https://github.com/openai/codex/pull/41467) |
| 6 | **#41464** 更新 session metadata 时保留权限 | 延迟 legacy sandbox policy 投影，仅在 cwd 变更触发时重新绑定 | [#41464](https://github.com/openai/codex/pull/41464) |
| 7 | **#41461** Async 用户消息描述从 model catalog 取 | 中途切模型后仍能拿到当前 step 的描述，无则回退内置 | [#41461](https://github.com/openai/codex/pull/41461) |
| 8 | **#41457** Proactive 多 Agent 指令从 model catalog 取 | 为 `Ultra` reasoning 提供 catalog 级 proactive 提示，缺失回退内置 | [#41457](https://github.com/openai/codex/pull/41457) |
| 9 | **#41456** Executor plugin hooks 支持 app target | 允许受信任的 Browser 插件 `Stop`/`SubagentStop` 钩子携带 app 路由与 MCP 环境变量 | [#41456](https://github.com/openai/codex/pull/41456) |
| 10 | **#41454** 多次执行宿主失败后阻塞 goal | 累计 3 次失败 turn 即标记 blocked；任意工具成功清零，避免失败跨 goal 累积 | [#41454](https://github.com/openai/codex/pull/41454) |

> 注：今日 PR 由 `copyberry[bot]` 集中提交并合并，体现 Codex 团队自动化 cherry-pick / backport 工作流活跃。

---

## 📈 功能需求趋势

从今日 Issues/PR 中提炼出社区最关注的六大方向：

1. **Session/Thread 一致性**（最高优先级）
   历史分页丢失、resume 跳到首 turn、zero-byte 副本 rollout、goal lineage 残留——围绕"持久化回放"的可靠性问题是本月反复出现的最大主题。

2. **Windows 桌面稳定性**
   DWM 句柄泄漏、自动更新后 headless 启动、Composer 锁死、app-server `STATUS_CONTROL_C_EXIT`——Windows 平台已成为 issue 密度最高的战场，且 #33192 累计 10 个 👍 说明影响范围持续扩大。

3. **多 Agent / Proactive 模式**
   PR #41457、#41461、#41570 一连推进 proactive 多 Agent 文案与执行语义，配合 issue #33556（外部事件注入活动 session）说明团队正系统化构建多 Agent 调度能力。

4. **WSL 跨平台工作流**
   #29639、#41290、#32706 都涉及 WSL ↔ Windows 互操作（路径映射、sandboxCwd、manifest 迁移），是 Windows 用户主诉场景。

5. **插件/MCP 生态治理**
   0.151 引入 MCP 工具结果拦截（#41202）与 grace period（#41199），社区同时在提 GitHub 插件组织安装（#36473）、Browser Use Node REPL（#29639）、bundled node_repl 误报（#32447）等问题。

6. **Mobile / Remote Control 体验**
   iOS 多账户多机器连接（#31187）、异步外部事件注入活动 session（#33556）显示移动端与远程控制场景需求增长。

---

## 💬 开发者关注点

- **痛点 #1：更新即崩溃** — 26.825 系列版本被多次报告"打开就崩""Composer 永久禁用""无窗口"。开发者诉求：**更稳健的更新原子性** 与回滚机制。
- **痛点 #2：历史回放不可信** — 多个高评论 issue 集中在 thread/rollout 投影错误，开发者担心长任务的上下文资产会"突然丢失"，影响生产级使用。
- **痛点 #3：MCP 启动噪音** — node_repl 在 macOS/Linux/Windows 多平台都有误报或路径映射问题，每次启动刷屏污染日志。
- **痛点 #4：WSL 用户体验割裂** — Windows 桌面 + WSL 项目的常见组合仍在路径、sandbox、manifest 多个层面存在摩擦。
- **高频需求**：更强的事件注入能力（#33556）、iOS 多账户（#31187）、GitHub 插件组织级安装（#36473）、Chat/Work/Codex 任务分类清晰化（#41594）、banked reset 安全语义（#41593）。

---

*日报由 GitHub Issues/PR 数据自动整理，覆盖过去 24 小时窗口。如需关注特定子领域（Windows 稳定性 / MCP 生态 / 多 Agent），可基于本日报中的 issue 编号进一步追踪。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-30**

---

## 📌 今日速览

今日 Gemini CLI 发布 v0.59.0 夜间构建版本，社区动态集中于 **Subagent 体系的稳定性问题**——多项 P1 级 Bug 显示子代理在终止判定、Wayland 环境兼容、Shell 执行卡死等方面存在系统性缺陷。同时，**Auto Memory 系统**进入密集修复期，连续三个相关 Issue 涉及日志脱敏、会话重试与无效补丁处理。

---

## 🚀 版本发布

**v0.59.0-nightly.20260830.g0bd1d4397** 已发布
- 自动化版本 bump（由 `gemini-cli-robot` 提交），属于每日 Nightly 构建
- 详细变更：[Compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260829.g0bd1d4397...v0.59.0-nightly.20260830.g0bd1d4397)
- 对应 PR：[#29129](https://github.com/google-gemini/gemini-cli/pull/29129)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 恢复后错误报告为 GOAL 成功 ⭐P1
**评论：13** | 子代理 `codebase_investigator` 在达到 `MAX_TURNS` 上限后仍返回 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了任务中断真相。这是今日讨论度最高的 Issue，反映了 Subagent 终止状态判定存在系统性误导风险。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 永久挂起 ⭐P1
**评论：8 | 👍 8** | 当任务被委派给 generalist agent 时 CLI 永久挂起，连"创建文件夹"这样的简单操作都无法完成。用户最长等待一小时后手动取消。该 Issue 点赞数最高，反映用户体验痛点强烈。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱与意图路由 ⭐P2 Enhancement
**评论：8** | 提出利用 Gemini 3 模型的原生 bash 亲和性，通过零依赖沙箱机制释放 `grep/sed/awk` 等 POSIX 工具链能力，兼顾安全性。是一项重要的架构级增强提案。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取/搜索/映射评估 ⭐P2
**评论：7** | EPIC 级别工单，评估引入 AST 感知工具（精确读取方法边界、减少噪声 token）的价值，可能引入 `tilth` 或 `glyph` 作为起点。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 不主动使用 Skills 与 Sub-agents ⭐P1
**评论：6** | 用户反馈即使定义了 `gradle`、`git` 等 skill，Gemini 也很少主动调用，除非明确指示。这是 Agent 自省能力的重要缺陷。

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 低信号会话无限重试 ⭐P2
**评论：5** | 当 Auto Memory 的提取 Agent 决定不读取某个低信号会话时，该会话未被标记为已处理，会被反复出现在索引中。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在"Waiting input" ⭐P1 Core
**评论：4 | 👍 3** | 简单的 CLI 命令执行完毕后，Gemini 仍显示 shell 处于活跃状态并"等待用户输入"，导致流程卡死。属于核心模块 P1 级别阻塞性 Bug。

### 8. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 会话接管与锁恢复 ⭐P3
**评论：4** | 当前 `BrowserManager` 在遇到锁定的浏览器 profile 时采用"fail-fast"策略，需增强自动会话接管与锁恢复的韧性。

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Wayland 下 Browser Subagent 失败 ⭐P1
**评论：4** | 在 Wayland 环境下浏览器子代理执行失败，错误显示 `Termination Reason: GOAL`，但实际未完成任务。

### 10. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 确定性脱敏与日志精简 ⭐P2 Security
**评论：4** | Auto Memory 将本地会话内容发送给后台提取 Agent 时，仅依靠 Prompt 提示脱敏存在安全隐患，需引入确定性脱敏机制。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) — `read_file` 路由经过 FileSystemService
**Size: M/L** | 修复 ACP 客户端的 FS 能力对接。`read_file` 直接读盘绕过了注入的 `FileSystemService`，与 `write_file`/`replace` 行为不一致。

### 2. [#28827](https://github.com/google-gemini/gemini-cli/pull/28827) — 修复 401 子串导致的误鉴权错误 ❌ 已关闭
修复 [#28203](https://github.com/google-gemini/gemini-cli/issues/28203)。`isAuthenticationError` 此前会把含"401"的所有消息当作鉴权失败，影响端口号、退出码等正常场景。

### 3. [#28828](https://github.com/google-gemini/gemini-cli/pull/28828) — 预览模型静默替换时给出警告 ❌ 已关闭
修复 [#28825](https://github.com/google-gemini/gemini-cli/issues/28825)。当用户请求 `gemini-3.1-pro-preview` 但无预览权限时，配置会静默替换为 `auto-gemini-2.5` 而无任何提示。

### 4. [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) — 去重符号链接的 Skills 目录
**P3** | 修复 `.gemini` 与 `.agents`（Windows junction 或符号链接）重复扫描问题，遵循开放 Agent Skills 标准。

### 5. [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) — 防止静态刷新清空终端滚动缓冲
**P2** | 修复 [#28954](https://github.com/google-gemini/gemini-cli/issues/28954)。在标准终端模式下，`refreshStatic()` 调用 `clearTerminal` 导致 Linux 终端滚动历史丢失。

### 6. [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) — 修正 `excludeTools` 示例文档
**P1** | Extension 的 `excludeTools` 按工具名精确匹配，原示例 `run_shell_command(rm -rf *)` 实际不会生效，需更新为裸工具名并指向策略引擎。

### 7. [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) — Web Fetch 目标验证与连接路由加固
**Size: L** | 改进 `WebFetchTool` 的目标地址校验，引入异步 DNS 解析并通过 Undici 传输连接器绑定到已解析地址，保留 TLS。

### 8. [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) — A2A Server 中 express.json 挂载顺序修复
修复 [#29073](https://github.com/google-gemini/gemini-cli/issues/29073)。原本在路由注册之后挂载，导致 A2A SDK 路由 `req.body` 为 undefined。

### 9. [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) — 修正 SubagentStop 事件键名
**P2** | 修复 [#29123](https://github.com/google-gemini/gemini-cli/issues/29123)。Claude Code 使用 `SubagentStop`（小写 a），迁移时 `SubAgentStop` 键不匹配导致 hook 被静默丢弃。

### 10. [#28960](https://github.com/google-gemini/gemini-cli/pull/28960) — 移除 Antigravity URL 显示的尾随句号
**P1** | 细节修复：认证流程中显示给用户的 Antigravity URL 末尾多余句号，影响复制与打开。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **Subagent 体系健壮性** | #22323、#21968、#21409、#21763 | 🔥🔥🔥 |
| **AST/语义感知工具** | #22745、#22746、#19561 | 🔥🔥 |
| **Browser Agent 韧性** | #22232、#21983、#22267 | 🔥🔥 |
| **Auto Memory 系统** | #26522、#26525、#26523、#26516 | 🔥🔥 |
| **Shell/终端稳定性** | #25166、#21924 | 🔥 |
| **Agent 自省与自我认知** | #21432、#22598 | 🔥 |

> **趋势总结**：社区诉求已从"基础能用"转向"Agent 自治能力"。Subagent 主动调用、终止状态可观测、AST 级别的精准代码理解、以及会话级记忆系统的可信度，是当前最强烈的演进方向。

---

## 💬 开发者关注点

### 🚨 痛点高频词
1. **Subagent 静默失败**：状态报告与实际行为不符（成功 vs GOAL vs 实际未完成），缺乏可信的终止判定。
2. **Agent 自主性不足**：默认情况下 Gemini 不主动调用自定义 Skills 和 Sub-agents，必须显式 prompt。
3. **终端交互脆弱**：Shell 命令完成后卡死、终端 resize 闪屏、刷新清空滚动缓冲等，影响 IDE 集成体验。
4. **工具数量膨胀**：超过 128 个工具时触发 400 错误（#24246），需要模型智能裁剪可用工具集。
5. **记忆系统安全隐患**：Auto Memory 在没有确定性脱敏前就把本地会话送入模型上下文，存在数据泄漏风险。

### 📌 开发者高频需求
- **Subagent 轨迹可观测**：通过 `/chat share` 共享子代理轨迹（#22598）
- **Bug 报告上下文完整**：包含 Subagent 内部状态（#21763）
- **破坏性操作抑制**：Agent 应主动避免 `git reset --force` 等危险命令（#22672）
- **临时文件治理**：限制模型在随机目录生成 tmp 脚本（#23571）
- **扩展机制可信**：`excludeTools` 等配置需要真实生效，避免文档与实现脱节

---

*📊 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间 2026-08-30*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-08-30
**数据来源：** [github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 📌 今日速览

昨日（8月29日）GitHub Copilot CLI 集中发布 **v1.0.82** 与 **v1.0.82-2** 两个补丁版本，主要修复了 `/worktree` 与 `/move` 切换时的消息输入异常、计划审批卡片展开及认证错误提示问题。社区方面，**MCP 协议兼容性**问题仍是焦点——chroma-mcp 断连、Azure DevOps 远程 MCP 的 OAuth 失败、以及 AgentHost 客户端的授权服务器发现缺陷同时浮现，提示 1.0.81 引入的 WAM 实现在生态适配上仍有较大缺口。

---

## 🚀 版本发布

### v1.0.82（2026-08-29）

**修复内容：**

- 在 `/worktree` 或 `/move` 准备 worktree 期间键入消息不再破坏切换流程
- `Ctrl+E` 可重新展开计划审批卡片以查看完整方案
- 认证失败时显示具体原因（如 `401 Bad credentials`），而不仅是 `/login` 提示

🔗 [Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.82)

### v1.0.82-2（2026-08-29）

补丁版本，再次修复 `/worktree`/`/move` 切换问题与 `Ctrl+E` 展开行为，与 v1.0.82 保持一致。

🔗 [Release 详情](https://github.com/github/copilot-cli/releases/tag/v1.0.82-2)

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 👍 | 重要性 |
|---|------|------|-----|--------|
| [#4027](https://github.com/github/copilot-cli/issues/4027) | Tool `str_replace` does not exist | OPEN | **13** | ⭐⭐⭐ |
| [#4165](https://github.com/github/copilot-cli/issues/4165) | `copilot --resume` 在 Windows 冷启动时挂起 | OPEN | 1 | ⭐⭐⭐ |
| [#4647](https://github.com/github/copilot-cli/issues/4647) | v1.0.81 破坏 chroma-mcp 兼容性 | OPEN | 0 | ⭐⭐⭐ |
| [#4204](https://github.com/github/copilot-cli/issues/4204) | 将 `.agents` 发现机制扩展到任意打开目录 | OPEN | 0 | ⭐⭐ |
| [#4660](https://github.com/github/copilot-cli/issues/4660) | 远程 ADO MCP 服务器在 v1.0.81 WAM 下 OAuth 失败 | OPEN | 0 | ⭐⭐ |
| [#4655](https://github.com/github/copilot-cli/issues/4655) | Agent Plugins 1.0 自定义代理无法被发现 | OPEN | 0 | ⭐⭐ |
| [#4662](https://github.com/github/copilot-cli/issues/4662) | AgentHost MCP 客户端对带路径的 issuer URL 发现失败 | OPEN | 0 | ⭐⭐ |
| [#4553](https://github.com/github/copilot-cli/issues/4553) | apply_patch 因 JSON 包装错误导致无限循环 | OPEN | 0 | ⭐⭐ |
| [#2955](https://github.com/github/copilot-cli/issues/2955) | `/allow-all` 仍弹出 bash 工具执行确认 | OPEN | 1 | ⭐ |
| [#4027](https://github.com/github/copilot-cli/issues/4027) | Java 代码编辑时反复出现 `str_replace` 工具缺失 | OPEN | 13 | ⭐ |

**重点解读：**

1. **[#4027 str_replace 工具缺失](https://github.com/github/copilot-cli/issues/4027)** — 获 **13 赞** 是本期关注度最高的 Issue。用户报告 Copilot 在编辑 Java 代码时频繁打印 `Tool 'str_replace' does not exist` 后又自行切换为 diff 工具，暴露出模型工具调用与实际可用工具集不一致的问题。
2. **[#4165 Windows `--resume` 挂起](https://github.com/github/copilot-cli/issues/4165)** — 在 PowerShell 直接执行 `copilot --resume` 时 TUI 始终停在 `Resuming session...`，同一会话在非直启方式下可正常恢复，疑似冷启动路径存在竞态。
3. **[#4647 chroma-mcp 兼容性回归](https://github.com/github/copilot-cli/issues/4647)** — 从 v1.0.80 升级到 v1.0.81 后 chroma-mcp 即无法连接，是 WAM 重构带来的连带伤害。
4. **[#4660 ADO MCP OAuth 失败](https://github.com/github/copilot-cli/issues/4660)** — Azure DevOps 远程 MCP 在 1.0.81 下首次加载即报"requires authentication"，`/mcp auth` 也无法解决，暗示 OAuth 流程对远程 server 的支持存在缺陷。
5. **[#4662 带路径 issuer 发现失败](https://github.com/github/copilot-cli/issues/4662)** — 当 issuer URL 含路径（如 `mcp.example.com/oauth`）时，VS Code 中 AgentHost 无法完成 OAuth 元数据发现，与 #4660 共同揭示 MCP 授权层在协议细节上的鲁棒性不足。
6. **[#4204 `.agents` 扩展](https://github.com/github/copilot-cli/issues/4204)** — 提议将 `.agents/skills` 模式扩展到 instructions、agents、hooks，并支持非 Git 目录，统一 Copilot 自定义资产的目录约定。
7. **[#4655 Agent Plugins 自定义代理不可发现](https://github.com/github/copilot-cli/issues/4655)** — 用户按 Agent Plugins 1.0 规范放置在 `com.github.copilot/agents` 下的自定义代理未被识别，规范与实现存在偏差。
8. **[#4553 apply_patch JSON 循环](https://github.com/github/copilot-cli/issues/4553)** — 模型反复提交同一 payload 导致 CLI 进入死循环，是影响任务可靠性的严重问题。
9. **[#2955 `/allow-all` 不生效](https://github.com/github/copilot-cli/issues/2955)** — 老问题依旧存在：执行 `/allow-all` 后 bash 工具仍弹权限确认，对自动化场景造成摩擦。

---

## 🔧 重要 PR 进展

| # | 标题 | 状态 | 意义 |
|---|------|------|------|
| [#4659](https://github.com/github/copilot-cli/pull/4659) | Initial commit with exported changes from codespace | OPEN | 来自 codespace 导出变更的初始提交，疑似外部贡献者的开发快照，建议关注后续 diff 是否纳入正式功能。 |
| [#2381](https://github.com/github/copilot-cli/pull/2381) | install: add fish shell support for PATH configuration | **CLOSED** | 修复 fish shell 用户被错误写入 POSIX `export` 到 `~/.profile` 的问题（fish 不 source 该文件，且 PATH 是数组）。该问题长期存在但最终未合并，提示 fish 用户仍需手动配置 PATH。 |

> 注：过去 24 小时仅有 2 个 PR 更新，活动量偏低。

---

## 📈 功能需求趋势

通过对 Issues 标签与摘要的归纳，当前社区需求集中在以下方向：

| 方向 | 代表性 Issue | 趋势 |
|------|--------------|------|
| **MCP 协议稳定性** | #4647、#4660、#4662 | 🔥 高 |
| **跨平台/Windows 兼容性** | #4165 | 🔥 高 |
| **Agent 生态与扩展机制** | #4204、#4655 | ⬆️ 上升 |
| **工具调用可靠性** | #4027、#4553 | 🔥 高 |
| **权限模型** | #2955 | ➡️ 持续 |
| **Shell 与安装体验** | #2381（PR） | ➡️ 持续 |

**主要信号：** 1.0.81 引入的 WAM（Web Authorization Management）重构让 MCP 授权层出现集中性回归，与之相关的"远程 server + OAuth"场景成为当前最大痛点；同时模型与工具调用层面的稳定性问题（str_replace、apply_patch）也持续累积。

---

## 💬 开发者关注点

1. **MCP 生态兼容性是首要痛点** — chroma-mcp 断连、ADO MCP OAuth 失败、带路径 issuer 发现失败，三类问题均指向同一改动（v1.0.81 WAM）。开发者期望官方提供"兼容矩阵"或在 release note 中明确迁移影响。

2. **模型与工具的对齐存在偏差** — `str_replace` 工具被模型频繁调用却不存在，`apply_patch` 因 JSON 包装错误循环重试，暴露出工具描述/可用性同步机制不完善。

3. **Windows 平台体验仍待打磨** — `--resume` 冷启动挂起已存在数周，影响 Windows 用户日常使用流畅度。

4. **自定义与扩展体系分散** — `.agents/skills`、Agent Plugins 1.0 自定义代理、`.agents` 扩展诉求并存，社区期待统一、文档化的扩展点。

5. **权限自动化诉求** — `/allow-all` 名义上覆盖所有权限却仍弹确认，开发者希望权限策略具备更细粒度的"工具级"或"会话级"配置能力。

6. **小众环境被忽视** — fish shell PATH 配置长期无人接手并最终关闭相关 PR，反映出非主流环境的支持优先级仍偏低。

---

*日报生成基于 GitHub 公开数据，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-08-30
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今天是 Kimi Code CLI 仓库的相对安静的一天，过去 24 小时内无新版本发布、无 PR 更新。唯一的社区动态是一条由付费用户提交的关于**配额计费异常**的 Issue（#2626），反映了 `cache_read` 在无 `cache_creation` 的情况下被持续计费，可能导致配额消耗放大超过 10 倍，这是一个直接影响付费用户体验的关键问题，建议密切关注官方响应。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**，本节省略。

如需查看最新发布版本，请访问 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases)。

---

## 3. 社区热点 Issues

> 📊 今日社区活跃度较低，过去 24 小时仅有 **1 条** Issue 更新，以下为其详细信息：

### 🔴 #2626 - 异常配额消耗：cache_read 每轮计费但 cache_creation 始终为 0（放大倍数 >10x）

- **作者**: ahmadyaseen35-coder
- **状态**: OPEN
- **创建时间**: 2026-08-29
- **评论数**: 1 | **👍**: 0
- **链接**: [MoonshotAI/kimi-cli#2626](https://github.com/MoonshotAI/kimi-cli/issues/2626)

**摘要与重要性分析**：

该用户为 Kimi Code 年度付费订阅用户，报告在 2026-08-28 晚间（+03:00 时区）的 5 小时配额窗口内，仅轻度使用几分钟就消耗了约 **40% 的配额**。用户通过 CLI 拉取的数据分析发现：

- `cache_read` 字段在每一轮对话中都被持续计费
- `cache_creation` 始终保持为 0，意味着**没有实际创建缓存却产生了缓存读取计费**
- 由此推测配额消耗被放大了 **10 倍以上**

**为什么值得关注**：

1. **直接影响核心付费用户权益** —— 配额计费是订阅服务的核心经济模型，任何异常都会引发用户信任危机
2. **可复现的量化数据** —— 用户提供了具体的 CLI 抓取数据，论据扎实而非主观感受
3. **可能反映系统性 bug** —— 如果计费逻辑中 cache 命中检测失效，可能影响所有用户而不只是个例
4. **社区反应尚待发酵** —— 当前仅 1 条评论、0 点赞，处于早期阶段，需要更多用户验证是否普遍现象

---

## 4. 重要 PR 进展

⚠️ 过去 24 小时内**无 PR 更新**，本节省略。

如需查看进行中的 PR，请访问 [Pull Requests 页面](https://github.com/MoonshotAI/kimi-cli/pulls)。

---

## 5. 功能需求趋势

由于今日仅 1 条 Issue 提交，**不足以进行趋势性统计**。从单条 Issue 来看，可提炼出的关注方向：

| 关注方向 | 体现 | 紧迫度 |
|---------|------|--------|
| 💰 **计费/配额透明度** | 用户需要明确理解配额消耗机制，CLI 应提供详细的 token 级账单 | 🔴 高 |
| 📊 **可观测性工具** | 用户主动从 CLI 拉取数据自行分析，反映官方缺乏此类内置诊断工具 | 🟡 中 |
| 🐛 **缓存机制正确性** | cache_creation/cache_read 状态机可能存在缺陷 | 🔴 高 |

---

## 6. 开发者关注点

基于今日有限的数据样本，开发者社区的核心反馈聚焦于以下痛点：

### 🔥 痛点 1：配额计费不透明、缺乏诊断工具
> *"I pulled the CLI... my 5-hour quota window lost ~40% within minutes of light use."*

付费用户在察觉到配额异常消耗后，**不得不自己从 CLI 端采集并分析 token 数据**才能发现问题，这说明产品层面：
- 缺乏实时的配额消耗可视化
- 缺乏按 token 类型（cache_read / cache_creation / output）拆分的账单
- 异常检测与预警机制缺失

### 🔥 痛点 2：缓存计费逻辑可信度
用户报告 `cache_read` 在 `cache_creation = 0` 时仍被持续计费，这一异常行为如果是 bug 则意味着：
- 计费与实际的缓存命中/创建状态脱钩
- 可能造成用户被超额计费
- 此类基础设施层的正确性是 CLI 工具最基础的信任前提

### 💡 建议关注后续动态
建议关注以下信号来判断该问题的严重性：
1. 官方是否在 Issue 中确认/否认问题存在
2. 是否有其他用户在评论区复现相同现象
3. 是否会发布包含计费逻辑修复的紧急补丁版本

---

## 📌 数据备注

- **采样窗口**: 过去 24 小时（2026-08-29 ~ 2026-08-30）
- **数据完整性**: 1 条 Issue，0 条 PR，0 条 Release
- **建议**: 由于今日数据样本极少，本报告中的趋势分析仅作参考；如需更全面洞察，建议结合周报或更长周期的数据进行分析

---

*本日报由 AI 自动生成，基于公开 GitHub 数据整理。如需查阅原始数据，请访问 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 仓库。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-30

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，社区活动以**问题归档与 PR 合入**为主：大量历史 Issue 被批量关闭（多为已修复或重复），同期仍有 10 余个新 PR 推进，聚焦 MCP 子进程优化、TUI 体验修复与 Desktop 应用改进。值得关注的是，多个涉及 **OpenCode Go 订阅与第三方模型（GLM-5.x、DeepSeek V4、Muse）** 的 401/路由问题仍在持续反馈，订阅服务稳定性仍是社区焦点。

---

## 🚀 版本发布

**今日无新版本发布。** 建议关注近期的 `1.17.x` 系列更新日志。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 热度 | 简评 |
|---|-------|------|------|------|
| 1 | [#16281](https://github.com/anomalyco/opencode/issues/16281) ChatGPT Pro/Plus 浏览器登录 403 | CLOSED | 💬10 👍4 | macOS 上 OAuth 回调成功但 token 交换失败，影响 Pro/Plus 订阅用户体验 |
| 2 | [#20235](https://github.com/anomalyco/opencode/issues/20235) 请求 GitHub Copilot 自动路由 API | CLOSED | 💬8 👍29 | 社区强烈呼吁开放 VS Code 同款的 `/models/session` 路由接口（👍29 最高） |
| 3 | [#27661](https://github.com/anomalyco/opencode/issues/27661) Home/End 键滚动消息列表而非移动光标 | CLOSED | 💬6 👍8 | TUI 基础交互缺陷，长消息编辑体验差 |
| 4 | [#19078](https://github.com/anomalyco/opencode/issues/19078) `opencode serve` 忽略配置文件 | CLOSED | 💬5 👍1 | 环境变量优先级未生效，影响服务化部署 |
| 5 | [#33630](https://github.com/anomalyco/opencode/issues/33630) Bedrock Converse 无法启用 Extended Thinking | CLOSED | 💬5 | Claude 3.7 Sonnet 推理配置被静默忽略 |
| 6 | [#34598](https://github.com/anomalyco/opencode/issues/34598) GLM-5.2 路由至阿里云内容审核 | CLOSED | 💬5 👍1 | Zen/Go 端点被旁路到阿里云且触发内容过滤，引发隐私担忧 |
| 7 | [#25668](https://github.com/anomalyco/opencode/issues/25668) Windows 插件加载间歇性挂起 | CLOSED | 💬5 | 含 `.git` 目录时 ~80% 概率卡死，Ctrl+C 无效 |
| 8 | [#43477](https://github.com/anomalyco/opencode/issues/43477) Muse 模型 "Endpoint is unavailable" | **OPEN** | 💬4 | ⚠️ 当前仍开放，模型上游不可用 |
| 9 | [#23900](https://github.com/anomalyco/opencode/issues/23900) LM Studio 远程主机无法连接 | CLOSED | 💬4 | 本地端口转发可绕过，远程连接失败 |
| 10 | [#39215](https://github.com/anomalyco/opencode/issues/39215) OpenCode Go 全部模型 401 错误 | **OPEN** | 💬3 👍3 | ⚠️ 活跃订阅仍被上游拦截，影响 DeepSeek/GLM/Qwen 全系 |

**热度总结**：订阅认证类问题（OAuth/401）占比最高，反映出付费用户对稳定性的高敏感度；TUI 细节体验类问题（键位、滚动、百分比）也持续高频出现。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|-----|------|---------|
| 1 | [#46210](https://github.com/anomalyco/opencode/pull/46210) | OPEN | **fix(mcp)** 共享跨 Location 的 MCP 子进程，避免 5 Locations × 3 MCP = 15 个冗余子进程（性能优化） |
| 2 | [#46205](https://github.com/anomalyco/opencode/pull/46205) | OPEN | **session-ui** 抽取 `ToolHeader` 复用组件，统一 Read/Grep/Shell/Edit 等工具头部样式 |
| 3 | [#46202](https://github.com/anomalyco/opencode/pull/46202) | CLOSED | **tui** reasoning-effort 变体按 agent 隔离，支持 `variant: low/max` frontmatter 配置 |
| 4 | [#46204](https://github.com/anomalyco/opencode/pull/46204) | CLOSED | **build** 新增 `--no-minify` 编译选项，便于调试 |
| 5 | [#46200](https://github.com/anomalyco/opencode/pull/46200) | OPEN | **app** iOS PWA 适配原生浏览器导航栏的 safe-area 内边距 |
| 6 | [#45235](https://github.com/anomalyco/opencode/pull/45235) | OPEN | **webfetch** timeout 覆盖 body 读取阶段，避免响应头后挂死 |
| 7 | [#46199](https://github.com/anomalyco/opencode/pull/46199) | OPEN | **plans** 支持可配置 plans 目录与插件依赖安装开关 |
| 8 | [#41955](https://github.com/anomalyco/opencode/pull/41955) | CLOSED | **provider** DeepSeek V4 新增 `none` 推理变体（thinking toggle） |
| 9 | [#39558](https://github.com/anomalyco/opencode/pull/39558) | CLOSED | **tui** 上下文百分比以 input limit 而非 context limit 为分母，修正 `/compact` 显示跳跃 |
| 10 | [#39571](https://github.com/anomalyco/opencode/pull/39571) | CLOSED | **session** 上下文溢出放弃恢复时正确发布错误事件（修复 413 静默） |

**合入亮点**：MCP 子进程共享、TUI 上下文指标修正、DeepSeek V4 推理开关均为高质量修复；agent 级 variant 配置解决了多 profile 用户的核心痛点。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issues 与历史归档提炼出五大方向：

1. **🤖 新模型与 Provider 支持**
   - DeepSeek V4、GLM-5.1/5.2、Muse 等前沿模型集成与稳定性
   - 推理（thinking/reasoning effort）参数透传控制

2. **💳 订阅与认证稳定性**
   - OpenCode Go / ChatGPT Pro/Plus OAuth 流程
   - 多 Provider 间的 API Key 与 token 管理

3. **🖥️ Desktop / PWA 应用体验**
   - 安装路径可定制（避免 C 盘膨胀）
   - 关闭确认、托盘最小化、iOS PWA 适配
   - 更新逻辑（APPDATA 路径修复）

4. **⚙️ TUI 交互精细化**
   - 键位修复（Home/End、Tab 标题）
   - 上下文百分比、session 切换、消息滚动
   - 编辑"always"权限 pattern

5. **🔌 生态扩展**
   - GitHub Copilot 路由 API 接入
   - 并行 bash 工具、plugin hook 系统
   - 跨 session 错误拦截（dejavu 插件）

---

## 👨‍💻 开发者关注点

综合社区反馈，开发者当前最集中的**痛点**与**高频需求**如下：

### 🔴 主要痛点
- **订阅服务不稳定**：OpenCode Go 套餐出现 401/404 误判、缓存未命中导致额度异常消耗（如 #33473 单日消耗 25%）
- **第三方模型路由不透明**：Zen 端点被旁路到阿里云并触发内容过滤，缺乏 ToS 披露（#34598）
- **TUI 细节缺陷**：键位冲突、事件监听泄漏（#34617 MaxListenersExceededWarning）、`/compact` 后百分比跳变

### 🟢 高频需求
- **细粒度权限控制**：希望在"always"确认前编辑自动生成的 pattern（#24795）
- **桌面端 UX 完善**：确认关闭、托盘、最小化、安装路径选择
- **性能与资源**：MCP 子进程共享、上下文窗口精准计算、Webfetch 超时硬化
- **可观测性**：session 状态轮询、长任务进度、异常日志清晰化
- **可扩展性**：plugin hook 系统、并行工具、agent frontmatter variant

### 💡 观察
- 历史 Issue 批量关闭（多数为 5–8 月份创建）说明维护团队正在集中清理 backlog
- `automated-pr-cleanup` 标签 PR（#39531/39549/39558 等）由 opencode-agent bot 协助生成，体现 AI 辅助维护流程日趋成熟
- 中文 Issue 比例较高（含 #34444/#34601/#46192 等），国内用户对 OpenCode Go/CLI 使用反馈活跃

---

> 📊 **数据窗口**：2026-08-29 ~ 2026-08-30（UTC）｜ 数据源：[anomalyco/opencode](https://github.com/anomalyco/opencode)
>
> 🤖 由 AI 分析师自动生成，仅供参考。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-30

## 📌 今日速览

今日 Pi 仓库进入"高频小修"节奏：无新版本发布，但 24 小时内合并了 12 个 PR 中的 8 个，议题动态以 **TUI 渲染回归** 与 **跨 Provider 兼容性** 为主线。值得关注的两大信号是：① `pi web` 浏览器 GUI（完整对标 TUI）以大型 PR 形式首次出现，暗示官方可能正在为非终端用户铺路；② Windows / PowerShell / WSL 相关议题集中爆发（#8841、#8842、#8809），Windows 体验被社区明显列入优先级。

---

## 🚀 版本发布

无新版本发布（过去 24 小时内无 release activity）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 👍 | 重要性 |
|---|-------|------|------|----|--------|
| 1 | [#8584](https://github.com/badlogic/pi-mono/issues/8584) **TUI 流式渲染每行只剩一词** | OPEN | 25 | 9 | 长期工具输出后触发"一字一行"的渲染坍塌，是目前社区最活跃的可复现 TUI bug，疑似终端宽度推断或光标状态在长输出后未复位 |
| 2 | [#7730](https://github.com/badlogic/pi-mono/issues/7730) **macOS 长会话 CPU 飙至 100%+** | OPEN | 13 | 9 | 与会话长度强相关，内存 600–800MB，社区怀疑是 JSONL 解析或上下文渲染在主线程做重活；该 issue 已活跃超过 3 周 |
| 3 | [#3159](https://github.com/badlogic/pi-mono/issues/3159) **edit 工具超时被终止**（Qwen 27B） | CLOSED | 8 | 0 | 小模型 + 长上下文的代表性故障，issue 已关闭但 `edit` 工具的 timeout 阈值仍是后续 PR 反复触及的话题 |
| 4 | [#3966](https://github.com/badlogic/pi-mono/issues/3966) **`--profile` 隔离多套 Pi 状态** | CLOSED | 5 | 0 | 工作/个人/本地 LLM 多环境的"基础设施级"诉求，长期被社区投票为重要方向 |
| 5 | [#6907](https://github.com/badlogic/pi-mono/issues/6907) **README 缺安装说明** | OPEN | 4 | 0 | 新用户入门体验的核心痛点；维护者迟迟未合说明优先级不高，但 onboarding 摩擦持续累积 |
| 6 | [#8643](https://github.com/badlogic/pi-mono/issues/8643) **Bedrock 上 OpenAI 模型拒绝 toolResult 中的图片** | OPEN | 3 | 0 | 跨 Provider 适配的标准样本，修复 + 回归测试已在作者 fork 就绪 |
| 7 | [#8061](https://github.com/badlogic/pi-mono/issues/8061) **Context 预算未预留 maxTokens，溢出后重试仍失败** | OPEN | 3 | 2 | 1M 上下文窗口下的关键可靠性 bug，标注 `inprogress`，与 Gemini 系模型深度相关 |
| 8 | [#8753](https://github.com/badlogic/pi-mono/issues/8753) **0.84.3 回归：Venice GLM 推理逐轮退化** | CLOSED | 3 | 0 | `reasoning_details` 回写触发的确定性退化，与 `#8751`（markdown 软换行）、`#8780`（thinking trail 断行）共同构成 0.84.x 的"推理渲染三连" |
| 9 | [#8832](https://github.com/badlogic/pi-mono/issues/8832) **`AgentSession.reload()` 跳过扩展生命周期** | CLOSED | 2 | 0 | 扩展系统稳定性议题：宿主若曾调用 `bindExtensions({})`，reload 后 `session_start` 不会重派，是潜在静默故障 |
| 10 | [#8843](https://github.com/badlogic/pi-mono/issues/8843) **大会话冷启动 ~10s 才出首个 prompt** | CLOSED | 1 | 0 | 用户体验层的重要反馈：启动期同步解析整段 JSONL 是线性扩展瓶颈，提议 lazy resume |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#8840](https://github.com/badlogic/pi-mono/pull/8840) **feat: pi web GUI（完整 TUI 对标）** | CLOSED | 新增 `pi web` 子命令：本地 HTTP + WebSocket 服务、token 鉴权，浏览器 UI 与终端 UI 共用 `AgentSessionRuntime`。是本次日报最具战略意义的合并方向 |
| 2 | [#8844](https://github.com/badlogic/pi-mono/pull/8844) **feat(ai): 接入腾讯云 Token Plan 个人版** | CLOSED | 新增 `TENCENT_TOKEN_PLAN_API_KEY` 渠道，覆盖 tc-code-latest、deepseek-v4-flash/pro、glm-5.2 等模型；显式跳过 GLM-5/5.1（仅支持 reasoning toggle 且无 effort 控制） |
| 3 | [#8725](https://github.com/badlogic/pi-mono/pull/8725) **fix: 内存 fork 前先 settle 当前轮次** | CLOSED | 修复 in-memory fork 时 `toolResult` 被写到错误 session 的竞态；`teardownCurrent()` 提前到 reset 之前 |
| 4 | [#8297](https://github.com/badlogic/pi-mono/pull/8297) **fix: 从恢复上下文中排除被覆盖的重试** | CLOSED | 记录被成功重试替换掉的 assistant ID，对 provider 上下文、压缩输入、token 预算、分支摘要、冷启动恢复均做过滤；JSONL 历史仍保留 |
| 5 | [#8812](https://github.com/badlogic/pi-mono/pull/8812) **fix: 解析初始模型前先 flush 扩展 provider 注册** | CLOSED | 解决 `pendingProviderRegistrations` 时序问题：扩展注册的 provider 在 `AgentSession` bind 时才落地，导致初次模型解析可能错过 |
| 6 | [#8818](https://github.com/badlogic/pi-mono/pull/8818) **fix(ai): 无 tools 时省略 Responses 的 `tool_choice`** | CLOSED | 与 #8820 配对：xAI 在 `tool_choice` 缺 `tools` 数组时返回 400，发送空 `tools: []` 让 compact 成功 |
| 7 | [#8811](https://github.com/badlogic/pi-mono/pull/8811) **feat: 启动期 composer** | CLOSED | 新增 `StartupComposer`：启动阶段即可输入，并带到正常交互模式；启用项目信任检查与输入对话框共用 UI/终端 |
| 8 | [#8262](https://github.com/badlogic/pi-mono/pull/8262) **feat: 每条 turn-start 路径都派发 hook（可取消的 preflight）** | OPEN | `sendCustomMessage(triggerTurn:true)` 此前绕过 `input` 与 `before_agent_start`，导致扩展作者只能手动适配两条入口 |
| 9 | [#8828](https://github.com/badlogic/pi-mono/pull/8828) **fix(tui): Zed 终端能力探测** | OPEN | Zed ≥1.17.2 内核实为 Alacritty：支持超链接与真彩，不支持图片；同时补充默认 Pi 热键的 keymap 说明 |
| 10 | [#8112](https://github.com/badlogic/pi-mono/pull/8112) **fix: 扩展入口 realpath 后再交 jiti 导入** | OPEN | 修复 #8092：pnpm 软链布局导致 jiti 解析失败，需在交给 jiti 前对扩展入口 realpath |

---

## 📈 功能需求趋势

从 45 条议题与 12 个 PR 中可以提炼出社区当前的**五大诉求方向**：

1. **Web / GUI 入口**：`#8840` 的出现意味着官方承认了"非终端用户"的存在，未来扩展/工作流的可视化编辑可能也会顺路展开。
2. **新模型与 Provider 接入**：Tencent Token Plan (#8844)、Command Code (#8836)、Minimax (#8839) 等不断被纳入或申请纳入官方目录；同时 xAI / Bedrock / DeepSeek / OpenAI-Codex 的协议级适配仍是高频话题（#8463、#8643、#8820、#8838）。
3. **上下文与推理工程**：`reasoning_details` 回写导致 GLM/Grok/DeepSeek 推理退化（#8753、#8838、#8780）；`maxTokens` 预留与重试恢复（#8061）正在被系统化解决。
4. **Windows / 跨平台一致性**：反斜杠未规范化（#8841）、PowerShell stderr 误判（#8842）、图片路径回退（#8809）、慢启动（#8843）共同指向 Windows 体验尚有多个未收敛的"长尾 bug"。
5. **扩展系统治理**：命名空间（#8834）、可见性 API（#8533）、reload 生命周期（#8832）、provider 注册时序（#8812）四条主线齐头并进，扩展 SDK 正趋于成熟。

---

## 👨‍💻 开发者关注点

**高频痛点：**

- **TUI 渲染可靠性**：长工具输出后流式文本被压缩到一字一行（#8584）、markdown 软换行被当硬换行（#8751）、thinking trail 异常断字（#8780）、表格 cell 强插 SGR 重置（#8825）。开发者明确希望渲染层"别再被前一次输出影响"。
- **协议适配细节**：xAI 的 `tool_choice` 缺 `tools` 时 400（#8820/#8818）、OpenAI Codex 缓存 TTL 不达标（#8463）、Bedrock toolResult 图片拒绝（#8643）——同一种"看起来 OpenAI 兼容，实际各家癖好不同"的问题反复出现。
- **会话生命周期性能**：macOS 长会话 CPU 飙高（#7730）与冷启动 ~10s（#8843）说明 JSONL 解析仍是主线程阻塞点，社区对"按需 lazy resume"的呼声越来越具体。
- **小模型 + 长上下文的脆弱性**：Qwen 27B 的 edit 超时（#3159）、LMStudio 读图失败（#8713）共同指向：本地小模型与长 prompt 的兼容仍未优化。
- **可访问性**：NVDA 对交互模式输出读取不稳定（#8831），但 `pi -p` 模式完全可用，说明问题被锁定在 TUI 渲染而非协议层。

**总体观感：** 社区在 0.84.x 后进入了"广撒网式修 bug"阶段，单议题平均生命周期短，回归与边缘 case 频出；但 `#8840` 的出现标志着 Pi 正在从纯 CLI 工具向"多端开发伙伴"演进，值得长期跟踪。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-30

---

## 📌 今日速览

过去 24 小时，Qwen Code 仓库以 **bug 修复和 CI 基础设施加固** 为主线，未有新版本发布。Web Shell 与 VSCode IDE Companion 的多项缺陷被集中关闭（至少 6 条相关 issue 转为 CLOSED），同时 PR #10427 对 **hook 系统的四个信任边界漏洞** 进行了统一修复。此外，**本地 LLM 用户报告的 #10520/#10530 关键回归**（toolSearch threshold > 0 时 llama.cpp 返回 400 "failed to parse grammar"）仍处 OPEN 状态，需关注 0.22.3 版本的兼容性。

---

## 🚀 版本发布

**无新版本发布**（过去 24 小时）。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关注理由 |
|---|-------|------|----------|
| [#5975](https://github.com/QwenLM/qwen-code/issues/5975) | 升级 0.19.3 后频繁出现 `No stream activity for 120000ms after 19 chunks` | OPEN · 14 评论 · 👍1 | **最高互动量 issue**。自 6 月创建至今未解，影响核心流式体验，多个 chunk 后停顿 2 分钟才报错，社区亟待官方排查 |
| [#10520](https://github.com/QwenLM/qwen-code/issues/10520) | `toolSearch.threshold > 0` 导致 llama.cpp 400 "failed to parse grammar" | OPEN · 4 评论 | **本地 LLM 用户的硬阻塞**。MCP 工具 + 本地推理栈用户在 0.22.3 完全无法使用，threshold=0 才能绕过 |
| [#10530](https://github.com/QwenLM/qwen-code/issues/10530) | 400 Failed to initialize samplers in 0.22.3 | OPEN · 3 评论 | 与 #10520 同源问题，**确认是 0.22.3 新引入的回归**，Qwen3.8/3.6 模型受影响，gemma4 不受影响 |
| [#8625](https://github.com/QwenLM/qwen-code/issues/8625) | Windows 终端输入中文时显示拼音看不清 | CLOSED · 8 评论 | 中日韩用户长期痛点，截图证据充分，本次最终关闭 |
| [#8172](https://github.com/QwenLM/qwen-code/issues/8172) | Agent Team: teammate 消息积压至整个多工具调用回合结束 | CLOSED · 4 评论 | Multi-agent 协作延迟根源，影响 Team Manager 实时性 |
| [#9025](https://github.com/QwenLM/qwen-code/issues/9025) | 无密钥 Vertex AI 无法被环境变量推断，headless ADC 启动失败 | CLOSED · 5 评论 | Cloud 用户开箱即用体验的重要修复 |
| [#8721](https://github.com/QwenLM/qwen-code/issues/8721) | `npm test` 因 unknown flag 无法启动 | CLOSED · 5 评论 | 阻塞贡献者本地验证，关闭后开发者 onboarding 更顺畅 |
| [#10385](https://github.com/QwenLM/qwen-code/issues/10385) | WebShell 消息编辑把 window-local turn index 传入 session-global rewind | CLOSED · 4 评论 | **P1 级**，数据一致性 bug，影响"编辑上一条消息"核心交互 |
| [#10405](https://github.com/QwenLM/qwen-code/issues/10405) | daemon 不可达时 session 切换遮罩永久锁定 | CLOSED · 4 评论 | Web Shell 可靠性问题，错误恢复路径设计缺陷 |
| [#10372](https://github.com/QwenLM/qwen-code/issues/10372) | VSCode IDE Companion `closeDiff` 跳过 workspace 相对路径解析 | CLOSED · 5 评论 | 与 #10405/#10373/#10406 同批从 PR #9811 拆分出来的 review follow-up，体现"超 1500 行不再合入"的审查纪律 |

> **观察**：今日关闭的 issue 中，**超过半数是 PR #9811（WebShell UI cutover）拆分出的 review follow-up**，仓库正以严格 PR 体积上限保持代码质量。

---

## 🛠️ 重要 PR 进展

| # | PR | 亮点 |
|---|----|----|
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | **fix(hooks): 关闭四个信任边界漏洞** | 一次性修复 HTTP hook 重定向污染、参数注入、命令注入等 4 个独立漏洞，是 #8396 在当前 main 的单提交重开，安全敏感度最高 |
| [#10425](https://github.com/QwenLM/qwen-code/pull/10425) | **feat(web-shell): 从 PR 的 closing references 派生会话 issue 绑定** | 自动关联 `Fixes #N` 链接，让绑定 PR 的会话能直接看到对应 issue 的 open/completed/未计划状态，提升 PR-session 工作流的可见性 |
| [#10171](https://github.com/QwenLM/qwen-code/pull/10171) | **feat(goal): 模型提议 Goal，用户在对话框确认** | 新增 `propose_goal` core tool，模型提出目标 → 用户审核 → 写入 session Goal，等价于 `/goal set`，对自主 agent 工作流意义重大 |
| [#10283](https://github.com/QwenLM/qwen-code/pull/10283) | **feat(cli): 通过 `general.outputStyle` 或 `--output-style` 选择输出风格** | 终于让 #9565 引入的 output style 可被实际选用；支持 `Concise`/`Proactive`/`Explanatory` 等大小写不敏感的内置风格 |
| [#10347](https://github.com/QwenLM/qwen-code/pull/10347) | **feat(core): 对瞬态网络错误（EOF）自动重试** | 把 `400 network error ... EOF` 这类"披着 4xx 外衣的传输错误"识别为可重试，避免无 Ctrl+Y 的通道直接 fail-fast |
| [#10390](https://github.com/QwenLM/qwen-code/pull/10390) | **feat(web-shell): 在 dirty working tree 上也能更新项目** | "Update Project" 操作现在提供 stash / 直接 pull 两种修复路径，告别"脏工作树死锁" |
| [#10403](https://github.com/QwenLM/qwen-code/pull/10403) | **feat(serve): 在受信 loopback 上启用完整 API 访问** | 仅当主监听绑定 loopback、未配 bearer token、未启用 `--require-auth` 时，本地调用方可使用完整 operator API；与 #10530 提权场景相关 |
| [#10428](https://github.com/QwenLM/qwen-code/pull/10428) | **fix(ci): 不在容器沙箱里跑 /resolve** | 关闭容器沙箱，把需凭证的 lane 移交给 agent 无法触及的 runner，避免基础设施失败被误判为 agent 结论 |
| [#10188](https://github.com/QwenLM/qwen-code/pull/10188) | **fix(autofix): 让回归付出代价，禁止悄悄弱化测试** | autofix 回路的两个安全网补丁：连败刹车计入"未推送"轮次；测试削弱需显式记录 |
| [#10537](https://github.com/QwenLM/qwen-code/pull/10537) | **ci: 把 agent workflow 隔离到专用 runner** | 把长跑的 PR review / Autofix agent 任务路由到 `ecs-agent` 自托管池，CLI 构建保留在通用 `ecs-qwen` 池，减少资源争抢 |

---

## 📈 功能需求趋势

从过去 24 小时活动数据中提炼出 6 个最集中的方向：

1. **🪝 Hook 系统加固** — PR #10427 一次性关闭 4 个 trust-boundary 漏洞 + #10386 跟进监督进程硬化，社区已把 hook 当作一等公民安全面来治理
2. **🖥️ Web Shell / VSCode IDE Companion 体验打磨** — `#10372/#10373/#10385/#10405/#10406` 一批从 #9811 拆出的 review 缺陷；新功能含 issue 绑定（#10425）、脏工作树更新（#10390）、底部对齐（#9305）
3. **🤖 Multi-Agent (Agent Team) 可靠性** — `#8172/#10073/#10208/#10297` 覆盖消息投递、后台任务、ghost member 持久化、补偿写入门控
4. **🛡️ CI/CD 基础设施** — #10428/#10429/#10443/#10452/#10527/#10537/#10087 共 7 个 PR 在加固 runner 路由、心跳原子写、`/resolve` 鲁棒性等
5. **🔌 本地 LLM 与第三方推理栈兼容** — #10520/#10530 暴露 llama.cpp + toolSearch 的不兼容，是 0.22.3 引入的回归
6. **⚙️ Output Style 与 Goal Proposing** — #10283 让 style 可选，#10171 让 Goal 可"经用户审核"设定，体现"AI 提议、人类把关"的协作模型

---

## 👨‍💻 开发者关注点

**最痛的三个点：**

1. **🐛 流式响应静默挂起** — #5975（120 秒无活动后报错）长期未解，多 chunk 后"Thought for Xs"后无输出，是 CLI 用户体感最差的核心体验问题
2. **🪟 跨平台与本地化细节** — Windows 中文拼音看不清（#8625）、setup-worktree 在 EACCES 下崩溃（#10524）、Node 不可写时 startup crash（#10455）—— 这些"小坑"集中暴露仓库对非 Linux / 非英文环境覆盖不足
3. **🔁 回归测试与 CI 抖动** — #10510/#10536（Main CI E2E 失败）、#10035（自托管 runner ENOSPC）、#10266（daemon 初始化超时后继续跑）—— 高并发自托管 runner + E2E 路径仍是稳定性瓶颈

**高频出现的需求模式：**

- **"PR review follow-up split out"** 已成为标准动作，仓库用"1500 行硬上限 + reply-only triage" 控制 review 深度（#10372/#10373/#10405/#10406/#9529 都是这种范式）
- **`autofix/takeover` 标签的 PR 大量涌现**（#10427/#10428/#10429/#10188/#10283/#10171/#10087 等），说明 Autofix agent 已在主线承担一定量代码变更，但 #10188 揭示的"回归不计数"问题提醒其治理尚需完善
- **"trusted-loopback operator authority"** 概念（#10403）出现，仓库正向"分层鉴权"演进

---

*日报基于 2026-08-30 数据生成 · 数据源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-08-30** ｜ **数据源：github.com/Hmbown/DeepSeek-TUI**

> 注：仓库当前主要活跃分支以 CodeWhale 命名空间推进，Issues 与 PR 均链接至 Hmbown/CodeWhale，视为同一项目主线。

---

## 一、今日速览

v0.9.12 发布进入冲刺阶段。里程碑跟踪 Issue #5573 显示 P0 必修复项已基本完成，多个集成 PR（#5576）进入 code-complete 状态；CI 因沙箱 read deny-list 解析路径问题（影响 macOS/Windows）在主干上变红，#5724 已提交修复以恢复基础测试绿色。与此同时，社区集中在第三方模型兼容性（wire 协议扩展、BYOK 新增 Concentrate）、TUI 交互增强（/copy、面板缩放、头部 pod 段）、企业级能力（机器令牌、Tailscale web、cloud-dispatch）三条主线持续推进。

---

## 二、版本发布

过去 24 小时内无新版本发布。最近一次集成分支 #5576 已标记 v0.9.12 为 code-complete，剩余工作为版本号 bump 与 changelog/RC 闸门校验（详见 #5573）。

---

## 三、社区热点 Issues

按重要性与社区关注度筛选如下 10 条：

| # | Issue | 状态 | 关注点 |
|---|---|---|---|
| 1 | [#5573](https://github.com/Hmbown/CodeWhale/issues/5573) **v0.9.12 milestone tracker** | OPEN | 22 评论。P0 必修复列表与发布闸门总览，是当前周期的"指挥棒" Issue。 |
| 2 | [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) **EPIC-005：TUI Crate 分解** | OPEN | 19 评论。Epic 风格的顶层分解跟踪，下辖所有 FEAT 与子 EPIC 回报，决定后续架构演进。 |
| 3 | [#5350](https://github.com/Hmbown/CodeWhale/issues/5350) **简化第三方模型配置** | CLOSED | 7 评论。预制模板 + 测试连接按钮 + 缓存异常修复，新手配置门槛显著下降。 |
| 4 | [#5579](https://github.com/Hmbown/CodeWhale/issues/5579) **插件 UX 对齐 Claude Code** | CLOSED | 3 评论。主动推荐、热重载、reload-plugins 可发现性。 |
| 5 | [#5668](https://github.com/Hmbown/CodeWhale/issues/5668) **新增 /copy 复制最近一次模型输出** | CLOSED | 3 评论。结束一轮长会话后无需手动选中文本，体现 TUI 直觉化设计方向。 |
| 6 | [#790](https://github.com/Hmbown/CodeWhale/issues/790) **i18n 覆盖扩展** | CLOSED | 4 评论。命令、模态、控件、审批对话框的本地化补全，多语言体验持续打磨。 |
| 7 | [#1261](https://github.com/Hmbown/CodeWhale/issues/1261) **面板缩放支持** | CLOSED | 2 评论。Plan/Todos/Tasks 面板在窄屏被截断的长期痛点得到解决。 |
| 8 | [#1754](https://github.com/Hmbown/CodeWhale/issues/1754) **执行 tool_call 时让 AI 自适应 shell** | CLOSED | 3 评论。Windows PowerShell/cmd 兼容问题修复，跨平台一致性提升。 |
| 9 | [#5723](https://github.com/Hmbown/CodeWhale/issues/5723) **Agent shell 启用 NoNewPrivs 导致 sudo 失败** | OPEN | 高严重度。阻断已有部署流程，需优先修复 sandbox exec 配置。 |
| 10 | [#5715](https://github.com/Hmbown/CodeWhale/issues/5715) **会话恢复对模型不可见** | OPEN | 强退出后任务上下文丢失，由社区 WeChat 群反馈，已成产品级阻塞项。 |

补充关注（未进 Top10 但代表方向）：
- [#2094](https://github.com/Hmbown/CodeWhale/issues/2094) `/hunt` 司法管辖系统（LLM-as-judge），已合入。
- [#5713](https://github.com/Hmbown/CodeWhale/issues/5713) 自定义 provider 支持 `wire = "responses" | "anthropic"`。
- [#5718](https://github.com/Hmbown/CodeWhale/issues/5718) 单 worker 系统与 Keychain 路径退役。

---

## 四、重要 PR 进展

按变更范围与对主线影响筛选：

1. **[#5724 fix(sandbox): read deny-list 解析路径](https://github.com/Hmbown/CodeWhale/pull/5724)** — 修复 macOS/Windows 共享 CI 全红问题，恢复 #5712/#5719/#5720/#5721/#5703/#5722 等所有阻塞 PR 的基线绿色。

2. **[#5719 fix(custom): wire = responses/anthropic](https://github.com/Hmbown/CodeWhale/pull/5719)** — 接续 #5716 的设计（致敬 @whp233），让自定义 OpenAI-compatible provider 真正支持 Responses 与 Anthropic Messages 协议。

3. **[#5725 feat(providers): Concentrate BYOK 网关](https://github.com/Hmbown/CodeWhale/pull/5725)** — 把 `concentrate.ai` 作为一类 BYOK 接入点，遵循 Eden AI 风格的"内嵌到现有 provider authority"模式，避免再开一套秘密/路由。

4. **[#5703 feat(tui): Operate 对齐 CWC OperateRecord](https://github.com/Hmbown/CodeWhale/pull/5703)** — `cw · operate` 与上游 OperateRecord 字段（burnRate/leadPlan/pace/cancelled）保持一致，并接入 `/v1/operate`、`/plan`、`/keepalive`、`/cancel` 全部运行时 API。

5. **[#5722 feat(tui): 头部 pod + 通知段接入](https://github.com/Hmbown/CodeWhale/pull/5722)** — 完成 wiring manifest 中头部组的最后两段：实时 worker 容量与通知，展示语言与 Active/Attention 角色统一。

6. **[#5721 feat(cli): Codewhale-account 机器令牌](https://github.com/Hmbown/CodeWhale/pull/5721)** — `CODEWHALE_API_KEY` 环境下 CLI 无需本地会话或浏览器即可身份验证，对接控制平面契约的非对称设计。

7. **[#5712 feat(cli): cloud-dispatch 远程 runner](https://github.com/Hmbown/CodeWhale/pull/5712)** — 让 `/dispatch` 真正落地：确认派单后跑云端 agent 沙箱并打开 forge PR，跟 #5701 后续 OPS 待办闭合。

8. **[#5720 feat(web): Moonshot/Kimi 原生搜索](https://github.com/Hmbown/CodeWhale/pull/5720)** — 救援 #5686 并修复 review 反馈，将 Moonshot 与 Kimi 搜索作为一等能力引入 Web 层。

9. **[#5717 refactor(tui): 项目组 command shapes](https://github.com/Hmbown/CodeWhale/pull/5717)** — FEAT-021 把 `/init`、`/lsp`、`/share`、`/goal` 切换到 FEAT-014/015 引入的外部命令形状。

10. **[#5576 0.9.12 集成：must-fix + UX 修复](https://github.com/Hmbown/CodeWhale/pull/5576)** — 当前集成主干，72 commits，发布阻塞项已 code-complete，闸门亮起即可合并。

补充依赖更新：#5673 升级 `next` 15.5.21 → 16.3.3（含安全修复）、#5695 升级 `schemaui` 0.12.3 → 0.12.4、#5675/#5676 分别升级 `uuid` 1.25.0 与 `futures-util` 0.3.34（均已自动合并）。

---

## 五、功能需求趋势

从全部 Issues 与 PR 中提炼的社区诉求方向：

1. **多 provider / 多协议兼容**：OpenAI-compatible 协议下 Responses、Anthropic Messages 差异化路由；BYOK 网关（Concentrate、Eden AI 风格聚合器）；Moonshot/Kimi 原生搜索；第三方模板化配置。**模型适配层正在变成项目的"事实接口面"。**

2. **TUI 可用性与可达性**：面板缩放（#1261）、`/copy` 直复制（#5668）、上下文压力作为 agent 指令而非装饰（#5661）、头部 pod/通知段（#5722）、欢迎动画与启动遮罩同步（#5656）、i18n 全面铺开。**重心从"功能可用"转向"日常手感"。**

3. **沙箱与安全治理**：macOS/Windows 沙箱 read deny-list 解析（#5724）、`NoNewPrivs` 与 sudo 冲突（#5723）、Hunt 司法管辖策略（#2094）。**多平台 CI + 严格沙箱是当前最频繁踩坑的区域。**

4. **单 worker 模型与企业化能力**：退役 Keychain（#5718）、机器令牌（#5721）、Tailscale 发布（#5635/#5659）、cloud-dispatch（#5712）、企业发布包 ENTERPRISE.md（#5628）。**项目在向"团队可用、可远程操作"的形态过渡。**

5. **会话与状态可观测性**：强退出会话恢复可见性（#5715）、Operate 与 CWC 对齐（#5703）、操作节奏（pace/burnRate）。**用户与 agent 共享"我们在干什么"的视图。**

---

## 六、开发者关注点

汇总社区与维护者反馈中的高频痛点：

- **跨平台沙箱一致性**：macOS 与 Windows 的 read guard 解析路径不一致，使整条 PR 队列变红，团队被迫单独提一个"绿地修复"（#5724），反映当前沙箱抽象对主机 OS 行为的覆盖不足。
- **Windows shell 默认假设**：AI 默认 bash 风格命令，PowerShell/cmd 环境下频繁出错（#1754），提示需在 prompt 层做平台感知，而非仅事后修补。
- **强退出后任务接续**：社区 WeChat 群反馈"模型不知道自己在做什么"，磁盘内容存在但上下文没回流（#5715），被多位用户视为生产可用性的关键缺口。
- **第三方模型接入门槛**：手动填 Base URL / 模型名 / 密钥环境变量、缓存卡 `not checked`（#5350），最终被预制模板 + "测试连接" + 文档浮窗三件套一次性解决。
- **v0.9.12 集成压力**：72 commits 集成分支卡在版本号 bump 与 RC 闸门（#5573/#5576），提示 release-train 自动化（自动 changelog、tag 校验、官网资产同步）成为下一个改进杠杆。
- **插件生态对标**：用户明确希望"插件像 Claude Code 那样强"（#5579），体现从 CLI 工具向 IDE-级别生态迁移的预期。
- **依赖安全节奏**：dependabot 在 24 小时内批量推动 Next.js、schemaui、uuid、futures-util 升级，其中 Next.js 升级含安全修复，说明 Web 面与 Rust 面的依赖维护并行活跃。

---

**日报小结**：v0.9.12 进入"代码完成、闸门待绿"阶段，CI 基线修复（#5724）是合并链路上最关键的短期动作；中期来看，模型协议适配层、TUI 体验打磨与单 worker + 企业能力三条主线齐头并进，社区反馈也正从"能不能用"转向"是否顺手、是否可恢复、是否跨平台一致"。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*