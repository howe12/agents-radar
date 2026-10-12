# AI CLI 工具社区动态日报 2026-10-12

> 生成时间: 2026-10-12 03:46 UTC | 覆盖工具: 9 个

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

# 2026-10-12 AI CLI 工具社区动态横向对比分析

---

## 1. 生态全景

当前 AI CLI 生态已进入 **"成熟期阵痛"阶段**——主流工具（Claude Code、Codex、Gemini CLI、Copilot CLI）已基本完成 MVP 验证，正面临 Windows 平台稳定性、长上下文管理、订阅成本透明度、多 Agent 体系化等深层挑战；OpenCode、Pi 等独立/小众工具则凭借多 Provider 抽象与 Extension 系统寻找差异化空间。**安全治理成为不可逆的工程基线**（Gemini CLI 24h 内合并 5 项安全 PR），而 **Agent 技能标准化**（.agents/skills/、Subagent 协议、Compaction 体系）正在成为下一轮生态博弈的主战场。

---

## 2. 各工具活跃度对比

| 工具 | Issues 更新 | PR 更新 | Release | 备注 |
|---|---|---|---|---|
| **Claude Code** | 50 | 1 | 无 | 桌面端性能 + 成本焦虑主导话题 |
| **OpenAI Codex** | 50+ | 10+ | 无 | Windows `26.1007.x` 回归爆发，PR 全部由 `copyberry[bot]` 批量维护 |
| **Gemini CLI** | 10+（Top） | 10+ | **v0.65.0-nightly** | 安全 PR 集中合入，5 项安全修复 |
| **GitHub Copilot CLI** | 26 | 0 | 无 | 全部为 issue，无 PR 活动 |
| **Kimi Code CLI** | 0 | 0 | 无 | **24 小时无活动** |
| **OpenCode** | 50 | 50 | 无 | Issue 与 PR 双向最高活跃度 |
| **Pi** | 41 | 6 | 无 | Provider 可靠性问题持续高优 |
| **Qwen Code** | 50 | 50+ | **v0.25.1 + desktop-v0.25.1 + sdk-typescript-v0.1.19** | 三轨同步发布，迭代节奏最快 |
| **DeepSeek TUI** | 10（Top） | 10（Top） | 无 | 0.10.2 release-readiness 阶段 |

> **活跃度梯队**：① Qwen Code / OpenCode（50+50，含 Release） ② Claude Code / Codex / Pi ③ Copilot CLI / DeepSeek TUI ④ Kimi Code（休眠）

---

## 3. 共同关注的功能方向

### 3.1 Windows 平台兼容性（6/9 工具聚焦）
- **Claude Code**：#87500 ECONNRESET 持续 5h、#99795 headless 权限分裂、#101424 多行粘贴回归
- **OpenAI Codex**：#48043 daemon 启动失败（63 评论）、#51917 工作区设置加载失败、#51638 沙箱 SHARING_VIOLATION、#42523 任务无法 resume
- **Copilot CLI**：#5094 bundled git `0x80070005`、#5096 winget 升级覆盖别名、#5109 托管策略无法刷新
- **Pi**：#10645 Bun 编译产物图片丢失、#9656 Zellij 滚轮路由错误、#10801 Windows 锁文件 EPERM
- **DeepSeek TUI**：#6953 Win10 1607 `0xC0000139`、#6963 非 npm 安装误拦管道命令、#6962 提议 Windows 导入基线 CI 守卫
- **Qwen Code**：#13680 Linux ripgrep SIGSEGV（P1）、#13807 macOS Foundation Models 适配
- **OpenCode**：#31734 Windows 二进制缺 ripgrep、#38211 macOS x64 应用无法启动

**核心诉求**：建立 Windows 平台专项回归测试与发布闸口，避免每次桌面端更新制造"Windows 升级即坏"信任危机。

### 3.2 长上下文 / Compaction 体系化（5/9 工具）
- **Claude Code**：#66115 空闲超时自动 compact（21 👍）
- **OpenAI Codex**：#19758 topic-based memory + `/memory`、#28316 base64 重复上传、#49961 早期 compaction 失控
- **Pi**：#7553 压缩 thinking level 可配置、#9602 压缩含 thinking 溢出、#10810 CompactionStatusIndicator 颜色 token 修复
- **Qwen Code**：#13004 内存提取有界冷却（cadence）
- **Claude Code + Codex + Pi 共同关注**：上下文成本与摘要质量平衡

### 3.3 成本透明度与配额可观测性（5/9 工具）
- **Claude Code**：#27665（93.8% 走 Opus，14 评论）、#66115 缓存过期、#98134 订阅识别错
- **OpenAI Codex**：#28316 重复 base64、#38503 "Too many requests"误触发、#52796 7% 额度报容量不足
- **Pi**：#10267 **P0** extension prompt 重复计费、#10480 用量刷新失败、#8617 Codex 图片走 file_id
- **Copilot CLI**：#1953（11 👍）上下文窗口常驻显示、#5111 缓存前缀重写
- **DeepSeek TUI**：#6393 fork-prefix cache 继承

### 3.4 Provider 可靠性与"假死"问题（4/9 工具）
- **Claude Code**：#87500 服务端断连
- **Pi**：#4945 openai-codex 流式 stuck（82 评论 / 35 👍，**全榜热度第一**）、#10019 Anthropic 整点挂起、#10656 DashScope 429 误判
- **OpenAI Codex**：#28316、#52796
- **DeepSeek TUI**：#6925 ChatGPT 登录被 originator 拒绝

**核心痛点**：用户最怕的不是"报错"，而是"看似存活但无输出"——这在生产无人值守场景中尤其致命。

### 3.5 安全治理（3/9 工具重点推进）
- **Gemini CLI**：24h 内合并 5 项安全 PR（#29521 路径穿越、#29522 glob 越界、#29523 env 泄露、#29525 a2a-server 提权、#29510 Windows 命令注入）
- **OpenAI Codex**、**Qwen Code**（#13922 Flyway 校验、#13925 release notes 治理）：持续清理 CVE 审计、命令注入面、提权路径
- **Claude Code**：#101188 Rewind 静默数据丢失（**P0 安全/可靠性问题**）

### 3.6 Agent 技能标准化（2/9 工具明确推动）
- **Claude Code**：#16345 支持 `.agents/skills/`（30 评论 / 58 👍）、#101422 账户同步 skills 路径
- **Gemini CLI**：#21968 模型不主动调用 skill（7 评论）

### 3.7 会话持久化与恢复（4/9 工具）
- **OpenAI Codex**（#48043）、**Copilot CLI**（#5114 session cap、#5116 400 internal error）、**DeepSeek TUI**（#6955 >8MiB 无法 resume、#6954 handoff 拒恢复）、**OpenCode**（#54679 V1 历史 session 不可见）

### 3.8 MCP 集成（3/9 工具）
- **Copilot CLI**：#5118 Atlassian Rovo MCP HTTP 400、#5082 Dataverse RFC 8414 issuer 校验
- **OpenAI Codex**、**Qwen Code**（#13595 BOM 导致 MCP 配置解析失败）

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 桌面端 Cowork、Agent Skills、订阅经济 | Max/Team 高价值付费用户 | 与 Claude Desktop 深度绑定，性能与成本双焦虑 |
| **OpenAI Codex** | Windows 桌面端、MCP 集成、Computer-Use | ChatGPT 桌面用户、Work 场景 | 以 bot 批量小 PR 推进 TUI 打磨，订阅速率限制反复踩坑 |
| **Gemini CLI** | Subagent 体系、Browser Agent、AST 感知工具 | Gemini 3 重度用户、研究型开发者 | Nightly 节奏，0.65 周期将安全作为扫除项 |
| **Copilot CLI** | 企业 MCP、上下文可观测、跨端一致 | GitHub Enterprise 客户、Atlassian/Dataverse 集成方 | 多端 Agent 运行时化，"多平台一致性"成主线 |
| **OpenCode** | **多 Provider 抽象**、V1→V2 迁移、离线工具链 | 不想被单家厂商锁定的开发者 | provider 适配层碎片化是核心痛点，也是机会 |
| **Pi** | Provider 可靠性、Extension API、Compaction 精细化 | 早期采用者、Pi 扩展开发者 | TUI 极致打磨，#4945 是社区情绪指标 |
| **Qwen Code** | **Managed Agent 双路径架构**、Web Shell、CJK/i18n | 阿里云生态、企业多 Agent 部署 | 三轨发布（CLI/Desktop/SDK），架构师视角最强 |
| **DeepSeek TUI** | 0.10.2 发布就绪、Windows 兼容性、后台任务可观测 | DeepSeek 模型用户、Codewhale 生态 | Rust TUI + 集中化 release-readiness 切片 |

**核心差异点**：
- **绑定深度**：Claude/Codex/Copilot/Qwen/DeepSeek 强绑定自家模型；**OpenCode、Pi 坚持多 Provider 抽象**
- **Agent 范式**：Qwen Code 提出 "TypeScript 主循环 + 模型推理/工具环境解耦" 的双路径架构，是当前最系统的多 Agent 路线图
- **平台覆盖**：Copilot CLI 与 Qwen Code 最明确地朝向"多端 Agent 运行时"演化（Desktop/Web/Mobile/ACP）

---

## 5. 社区热度与成熟度

### 5.1 热度指标（综合评论 + 👍 数）

| 工具 | 头部热度信号 | 解读 |
|---|---|---|
| **Pi** #4945 | 82 / 35 👍 | **全生态单 issue 最高互动**，反映 Provider 可靠性是普遍痛点 |
| **Claude Code** #22543 | 80 / 231 👍 | 桌面端 VM 性能最持久议题，付费用户耐心测试耗尽 |
| **OpenAI Codex** #48043 | 63 / 45 👍 | Windows CLI 升级阻断，已成版本前必检回归点 |
| **Claude Code** #16345 | 30 / 58 👍 | 生态标准化最强信号（.agents/skills/） |
| **Qwen Code** #12380 | 56 评论 | 唯一以"架构总纲"形态占据热度榜首的 issue |

### 5.2 成熟度梯队

- **第一梯队（成熟产品 + 平台化）**：Claude Code、OpenAI Codex、Gemini CLI、Copilot CLI —— 已度过功能/用户增长期，进入稳定性、跨平台一致性、成本治理深水区。
- **第二梯队（快速迭代 + 架构演进）**：Qwen Code —— 唯一本周发布 3 个版本（CLI + Desktop + SDK），Managed Agent 路线图清晰，迭代节奏

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-12**

---

## 1. 热门 Skills 排行

由于 PR 评论数为 `undefined`，以下排行综合考虑 PR 内容重要性、最近活跃度（更新时间）以及 Issue 关联度得出。

### 🥇 #1 PR #1742 — mcp-builder：支持 MCP v2 streamable_http_client
- **功能**：修复 `mcp>=2.0.0` 中 `streamablehttp_client` 重命名及自定义 HTTP headers 的方式变更，并兼容 `create_mcp_http_client` / `http_client` 配置。
- **讨论热点**：解决 #1668 报告的连接器兼容性问题，是 MCP 生态升级的关键修复。
- **状态**：🟢 OPEN
- 🔗 [PR #1742](https://github.com/anthropics/skills/pull/1742)

### 🥈 #2 PR #1961 — skill-creator：加固 Eval Viewer（XSS / DNS Rebinding）
- **功能**：硬化本地 eval viewer，修复脚本逃逸、DNS 重新绑定、跨站 POST、HTML 转义不全等安全漏洞。
- **讨论热点**：由于涉及模型输出渲染（untrusted content），是整个 skill-creator 链路安全的关键补丁。
- **状态**：🟢 OPEN
- 🔗 [PR #1961](https://github.com/anthropics/skills/pull/1961)

### 🥉 #3 PR #1298 — skill-creator：trigger evals 隔离 + Windows 兼容
- **功能**：修复 trigger 评估中的假阴性、subprocess 在 Windows 上的 `select()` 失效、运行时错误被误判为 negative example 等问题。
- **讨论热点**：skill-creator 是社区最常用元工具，评估可信度直接影响所有 Skills 的迭代。
- **状态**：🟢 OPEN
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 4️⃣ #4 PR #1771 — proofcore-contract-auditor（新增）
- **功能**：Web3 智能合约静态分析 Skill，对 Solidity / Rust 合约做自动审计并通过零存储 Merkle 协议将审计证明锚定到 TON 区块链。
- **讨论热点**：首个 Web3/区块链审计方向的官方贡献，跨生态创新。
- **状态**：🟢 OPEN
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 5️⃣ #5 PR #1703 — md2video-audio（新增）
- **功能**：将 Markdown 直接编译为带 AI 人声配音的 MP4 视频（基于 Marp），零成本内容生产。
- **讨论热点**：内容创作自动化方向，集成度高，应用场景广。
- **状态**：🟢 OPEN
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 6️⃣ #6 PR #1245 — notion-spec-to-implementation + quantitative-resume-auditor
- **功能**：①把产品规格拆解为 Notion 可执行任务；②对简历进行量化审计。
- **讨论热点**：覆盖企业协作 + 求职两类高频场景。
- **状态**：🟢 OPEN（已迭代近 4 个月）
- 🔗 [PR #1245](https://github.com/anthropics/skills/pull/1245)

### 7️⃣ #7 PR #1734 — Detect orphaned docx comments
- **功能**：检测 Word 文档中已无对应锚点的"孤儿批注"，改善 docx 审阅链路。
- **讨论热点**：文档工程方向，与 #1792 形成 docx 系列修复组合。
- **状态**：🟢 OPEN
- 🔗 [PR #1734](https://github.com/anthropics/skills/pull/1734)

### 8️⃣ #8 PR #1980 — webapp-testing：避免 shell=True（命令注入防护）
- **功能**：将 `with_server.py` 从 `shell=True` 改为参数化执行，修复 CWE-78 命令注入风险。
- **讨论热点**：与 #1961 同属"Skills 安全加固"主题，社区当前最强信号之一。
- **状态**：🟢 OPEN
- 🔗 [PR #1980](https://github.com/anthropics/skills/pull/1980)

---

## 2. 社区需求趋势（基于 Issues 评论数）

| 排名 | 方向 | 代表 Issue | 评论数 | 核心诉求 |
|---|---|---|---|---|
| 1 | **🔒 安全 / 信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **44** | 社区 Skill 借 `anthropic/` 命名空间冒充官方，存在权限滥用风险 |
| 2 | **🏢 组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | 当前 Skill 只能通过文件分发，缺企业内共享库与直链分享 |
| 3 | **🎯 Skill 触发评估失真** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | `run_eval.py` 中 `claude -p` 触发率为 0%，评估体系不可信 |
| 4 | **📦 Skill 丢失 / 管理 UX** | [#62](https://github.com/anthropics/skills/issues/62) | 10 | 用户上传的 Skills 莫名消失、错误频发 |
| 5 | **🧠 上下文压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 提出 `compact-memory`：用符号化表示压缩长会话状态 |
| 6 | **📑 插件重复安装** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` 与 `example-skills` 安装内容重复，污染 context |
| 7 | **🛡 推理质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385) | 5 | Pre-task Calibration → Adversarial Review → Delivery Verification 三门流水线 |
| 8 | **💾 上下文窗口爆炸** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` skill 单次注入 ~156k tokens 直接耗尽上下文 |
| 9 | **🧪 skill-creator 评估漏洞群** | [#1394](https://github.com/anthropics/skills/issues/1394) [#1390](https://github.com/anthropics/skills/issues/1390) [#1383](https://github.com/anthropics/skills/issues/1383) [#1352](https://github.com/anthropics/skills/issues/1352) | 各 4 | 评估器存在 XSS、JSON 序列化失败、跨 worker UUID 错配、layout 不匹配等系统性问题 |

**趋势提炼**：
- **安全**（命名空间冒充、eval viewer XSS、命令注入、context 爆炸）是当前最核心痛点。
- **评估可信度**次之 —— skill-creator 的评估链路存在大量系统性 bug，影响整个生态迭代质量。
- **企业分发 / 共享**与**个人 Skill 管理 UX** 同样呼声很高，说明 Skills 已进入"实际生产"阶段。
- 创意 / 工作流自动化新 Skill 提案（Web3 审计、md→video、Notion 任务化）虽评论不多，但代表了生态扩展方向。

---

## 3. 高潜力待合并 Skills

> 以下 PR 均为 OPEN 状态、社区活跃度高、问题明确，具备近期合入条件。

| PR | Skill / 修复 | 关键价值 | 最近更新 |
|---|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 MCP v2 | 解锁 MCP 升级链路 | 2026-10-08 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | skill-creator eval viewer 安全硬化 | 修复多个 XSS / 跨站漏洞 | 2026-10-11 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | webapp-testing 移除 shell=True | 关闭命令注入 | 2026-10-06 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | docx 孤儿批注检测 | docx 文档工程 | 2026-09-25 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx soffice 超时与输出校验 | 与 #1734 形成修复包 | 2026-09-25 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 跨平台评估 | 修复 Windows / 假阴性 | 2026-09-16 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator package_skill 直执行 | 修复 ModuleNotFoundError | 2026-10-08 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api / academy-guide 死链修复 | 文档可信度 | 2026-10-04 |
| [#1771](https://github.com/anthropics/skills/pull/1771) | proofcore-contract-auditor | 新增 Web3 审计方向 | 2026-09-16 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | 新增内容创作自动化 | 2026-09-15 |

**观察**：50 条热门 PR 中**全部仍为 OPEN**，仓库合并节奏明显滞后于贡献速度，安全类与元工具（skill-creator / webapp-testing / mcp-builder）类修复最迫切。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是「Skills 必须先变安全、再谈扩展」** —— trust boundary（命名空间冒充）、eval 链路可信度（XSS、假阴性、跨 worker 错配）、runtime hardening（shell 注入、context 爆炸）三大安全 / 质量议题占据了 Issues 绝对多数的评论数，而创意型新 Skill 提案虽然丰富，但在治理缺位的情况下难以落地。

---

*数据源：[anthropics/skills](https://github.com/anthropics/skills) · 50 PR + 50 Issues · 截止 2026-10-12*

---

# Claude Code 社区动态日报
**日期：2026-10-12**

---

## 📌 今日速览

今日社区最热议题仍为长期未解决的 **#22543 Cowork 功能产生 10GB VM 包导致性能严重下降**（80 条评论、231 个 👍），反映出 macOS 桌面用户体验堪忧。同时，**Windows 平台 2.1.296 出现多个回归问题**（多行粘贴、headless 权限），以及 **Agent Skills 标准化（.agents/skills/）** 的集成请求持续升温。安全过滤器在无人机遥测、移动调试等合法场景下频繁误判，开发者呼吁降低误报。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** 当前社区讨论的回归问题主要出现在 `2.1.296`，建议关注后续补丁。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 / 👍 | 为什么重要 |
|---|------|----------|-----------|
| [#22543](https://github.com/anthropics/claude-code/issues/22543) | **Cowork 功能产生 10GB VM 包导致性能严重下降** | 80 / 231 | 标记为 `high-priority` + `oncall`，影响 Claude Desktop 全部 macOS 用户。VM 包长期累积导致启动慢、UI 卡顿，已成桌面端头号性能痛点 |
| [#16345](https://github.com/anthropics/claude-code/issues/16345) | **支持 .agents/skills/ 标准目录** | 30 / 58 | 对齐 `agentskills.io` 行业规范，社区呼声高，是技能生态标准化关键一步 |
| [#66115](https://github.com/anthropics/claude-code/issues/66115) | **空闲超时自动 compact 防缓存过期成本** | 18 / 21 | 直接关系到 Max/Team 用户的 token 成本，自动化可避免 ≥5 分钟离场后的全量重处理 |
| [#87500](https://github.com/anthropics/claude-code/issues/87500) | **Windows 持续出现 API Error: Connection dropped (ECONNRESET)** | 17 / 0 | 服务端连通性问题持续 5+ 小时，影响大量 Windows 用户工作流；已 CLOSED |
| [#27665](https://github.com/anthropics/claude-code/issues/27665) | **智能模型路由 — 93.8% Max 订阅 token 被路由到 Opus** | 14 / 24 | 整合 30+ 相关 issue，作者用 `ccusage` 实测+反编译验证；揭示缺乏自动降级机制导致成本失控 |
| [#98134](https://github.com/anthropics/claude-code/issues/98134) | **活跃 Apple Max 20x 订阅仍被识别为 Pro** | 9 / 0 | macOS 认证 / 订阅等级判断错误，影响付费用户权益 |
| [#99130](https://github.com/anthropics/claude-code/issues/99130) | **2.1.288 中 Mods 被远程关闭，与文档矛盾** | 5 / 5 | 文档 vs 实际行为不一致；rollout 开关疑似配置错误，影响 Windows 插件用户 |
| [#82395](https://github.com/anthropics/claude-code/issues/82395) | **后台任务列表应按"最后活跃"而非"创建时间"排序** | 5 / 0 | 长期挂着再 resume 的任务体验差；已 CLOSED 但反映 agents 列表 UX 普遍需求 |
| [#99795](https://github.com/anthropics/claude-code/issues/99795) | **Windows 任务计划程序启动的 headless (-p) 会话拒绝已白名单的工具调用** | 3 / 0 | 自动化批处理场景严重受阻；权限路径在交互 vs 计划任务时行为分裂 |
| [#101188](https://github.com/anthropics/claude-code/issues/101188) | **Rewind 提示失败但仍覆盖 ~20h 编辑、删除新建文件** | 2 / 0 | **数据丢失** 风险极高；UI 状态与磁盘操作不一致，是 P0 级安全/可靠性问题 |

---

## 🔧 重要 PR 进展

| # | 标题 | 说明 |
|---|------|------|
| [#79150](https://github.com/anthropics/claude-code/pull/79150) | docs: align code-review README with the current validation-based command | 修复 code-review README 中描述的旧管道（git blame agent、0-100 评分、80 分阈值配置），与现行"验证式"命令对齐 |

> 注：过去 24 小时内仅 1 条 PR 更新，文档一致性修复为主。

---

## 📈 功能需求趋势

通过对全部 50 条更新 issues 的归并，社区最强烈的需求方向：

- **🧩 生态标准化与互操作**
  - 支持 `.agents/skills/` 共享目录 (#16345)
  - 账户同步 skills 路径可配置 (#101422)
  - `--safe-mode` 与 `--mcp-config` 行为协调 (#101426)

- **💰 成本与性能自动优化**
  - 空闲超时自动 compact (#66115)
  - 智能模型路由降级 (#27665)

- **🖥️ 桌面端 / Desktop UX**
  - Cowork VM 包清理 (#22543)
  - 按"最后活跃"筛选会话 (#98565)
  - Agents 视图创建新会话 (#101421)

- **🪝 Hooks / 自动化管道**
  - /goal 评估器在严格后端下的 schema 兼容性 (#95021, #94057)
  - Bash 工具 stdin 处理边界 bug (#101127)

- **🔌 插件 / 子代理**
  - Plugin `agents/*.md` 的 `model:` frontmatter 被忽略 (#89723)

---

## 🛠️ 开发者关注点（痛点 / 高频反馈）

1. **Windows 平台稳定性堪忧**：#87500（ECONNRESET）、#99795（headless 权限）、#101424（2.1.296 多行粘贴回归），多个平台特定 bug 集中在 Windows。

2. **macOS 桌面性能**：#22543（10GB VM 包）是当前关注度最高的 issue，反映 Cowork 资源清理策略需重做。

3. **数据安全**：#101188 揭示 Rewind UI 报错但仍覆写文件，是开发者最担心的"静默数据丢失"场景。

4. **安全过滤器过度严格**：用户 `sworrl` 在今日同时提交 4 条 `[Bug][cyber]` 误判 issue（#101405、#101406、#101409、#101410），涉及 `Opus 5.5` / `Fable 5.1` 模型被静默 fallback 至 `Opus 4.8`，影响授权场景下的无人机调试、移动开发等正常开发任务。

5. **订阅 / 计费透明度**：#98134、#83062、#96339 三条涉及账单或订阅识别问题，反映付费用户对账单异常缺乏人工升级通道的焦虑（Fin AI 客服无法转人工）。

6. **文档与实际行为漂移**：#99130（Mods 默认状态）、#79150（code-review README）均表明 release notes / 文档未跟上实际开关变化。

7. **成本失控**：#27665 数据（93.8% 走 Opus）+ #66115（缓存过期重计费）共同指向 Max 订阅用户每月 token 账单不可控。

---

**📮 小结**：今日社区情绪偏向"性能 + 成本 + 数据安全"三焦虑，桌面端和 Windows 端是重灾区；标准化（Agent Skills）与自动化（auto-compact / 智能路由）是呼声最高的功能方向。建议关注后续 `2.1.297+` 是否针对上述回归与 VM 累积问题发布修复。

> 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) Issues & Releases（2026-10-12）

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期**：2026-10-12
**数据来源**：[github.com/openai/codex](https://github.com/openai/codex)

---

## 1. 今日速览

过去 24 小时内社区最突出的信号是 **Windows 桌面端的稳定性问题集中爆发**——`26.1007.x` 系列构建在沙箱启动、权限恢复、模型选择器、工作区初始化等多个路径上暴露出大量回归性 bug，仅今天就有 6+ 个相关 issue 被创建或更新。此外，#48043（Windows CLI 0.157.0 daemon 启动失败）以 63 条评论、45 个 👍 持续位居热度榜首，已成为 Windows 用户升级前最关心的回归点。

---

## 2. 版本发布

**过去 24 小时无新版本发布。** 当前可观察的最新桌面端构建为 `26.1007.2314.0` / `26.1007.21434`，CLI 最新稳定版为 `0.162.0`。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 / 👍 | 重要性 |
|---|---|---|---|---|
| [#48043](https://github.com/openai/codex/issues/48043) | BUG | Codex CLI 0.157.0 fails to start on Windows with daemon privilege error | 63 / 45 | **高** —— 升级阻断类回归，影响所有 Windows CLI 用户；0.156.1 正常，是排查基线 |
| [#38503](https://github.com/openai/codex/issues/38503) | BUG | ChatGPT on the web: "Too many requests" blocks chat access | 30 / 21 | **高** —— 跨产品的速率限制误触发，影响 Work 任务；运营层问题 |
| [#51917](https://github.com/openai/codex/issues/51917) | BUG | [Windows] "Couldn't load workspace settings" blocks new chats after update | 17 / 7 | **高** —— 升级到 `26.1007.21434` 后无法新建会话 |
| [#28316](https://github.com/openai/codex/issues/28316) | BUG | Codex resends large base64 image tool outputs in subsequent context | 15 / 8 | **高** —— 直接导致成本失控与上下文溢出，已存在 4 个月未根治 |
| [#19758](https://github.com/openai/codex/issues/19758) | ENH | Topic-based memory directory with agent-initiated writes + `/memory` slash command | 12 / 2 | **中** —— 反映长期记忆可扩展性是 Agent 用户最关心的方向之一 |
| [#49767](https://github.com/openai/codex/issues/49767) | BUG | [Windows] Official Library transfer helper crashes on `os.setxattr` | 11 / 0 | **中** —— 阻塞元数据保留型文件迁移，影响文档工作流 |
| [#42523](https://github.com/openai/codex/issues/42523) | BUG | Windows desktop: task cannot resume after "Potentially unintended activity" block | 11 / 1 | **中** —— 误报后任务不可恢复，需 UI 引导 |
| [#51308](https://github.com/openai/codex/issues/51308) | BUG | GPT-6 Sol / 6.1 Sol / 6 Luna missing from Windows model picker | 10 / 0 | **中** —— Plus 用户在 Windows 桌面无法选择最新模型 |
| [#51638](https://github.com/openai/codex/issues/51638) | BUG | Windows: sandbox setup fails with SHARING_VIOLATION on `node_repl.exe` | 9 / 1 | **中** —— 沙箱启动链路上的具体可复现错误 |
| [#52796](https://github.com/openai/codex/issues/52796) | BUG | [macOS] "Selected model is at capacity" on ~80% of turns | 8 / 0 | **中** —— 即便额度仅用 7% 也持续报容量不足，疑似配额路由问题 |

> 备注：[#52179](https://github.com/openai/codex/issues/52179) 已 **CLOSED**（18 评论），[#13044](https://github.com/openai/codex/issues/13044) 关于交换 TAB/ENTER 语义也已 CLOSED（7 👍），可作为本周已闭环的代表性 issue。

---

## 4. 重要 PR 进展（Top 10）

> 注：以下 PR 状态均为 **CLOSED**，按惯例多属 squash-merged 后自动关闭；作者均为 `copyberry[bot]`（自动化维护机器人），表明这些属于官方批量集成的小修。

| # | PR | 修复/功能要点 |
|---|---|---|
| [#53224](https://github.com/openai/codex/pull/53224) | Windows TUI 剪贴板文本粘贴 | 让 `Ctrl+V` 与 `Shift+Insert` 在 Windows 上同时支持纯文本与图片，避免误触发"image-paste"错误 |
| [#53201](https://github.com/openai/codex/pull/53201) | 线程归档后保留 agents 导航 | 外部归档线程后，Left-arrow 仍能正确打开 agents 视图 |
| [#53173](https://github.com/openai/codex/pull/53173) | TUI 内重启后台服务 | 允许在 TUI 内重启 managed background server，无需退出重新加载配置 |
| [#53156](https://github.com/openai/codex/pull/53156) | 简化自定义终端绘制 API | 移除 `Terminal::autoresize` 与 `try_draw`，统一在 `draw_with_size` 内绘制 |
| [#53155](https://github.com/openai/codex/pull/53155) | 关闭时仍可投递远端事件 | 关闭前保持 event receiver 存活，避免 WebSocket 关闭帧丢失 |
| [#53153](https://github.com/openai/codex/pull/53153) | TUI 帮助增加子代理快捷键 | `Alt+Left` / `Alt+Right` 列入快捷键覆盖层 |
| [#53152](https://github.com/openai/codex/pull/53152) | TUI turn tips 可选中复制 | 让转录外的 tip 行也支持鼠标选择 |
| [#53150](https://github.com/openai/codex/pull/53150) | 冷启动恢复线程级权限 | 修复 cold resume 阶段未命名权限被默认值覆盖的问题 |
| [#53148](https://github.com/openai/codex/pull/53148) | 修复 Vim Replace 启动草稿恢复 | 把待处理的 Vim Replace 键当替换而非插入，恢复草稿与最终编辑一致 |
| [#53049](https://github.com/openai/codex/pull/53049) | App-server 请求连接绑定句柄 | 跨连接复用 request id 时，回复能定位到发出请求的连接 |

补充关注：[#53109](https://github.com/openai/codex/pull/53109)（`codex plugin list` 管道断流时不再 panic）。

---

## 5. 功能需求趋势

从全部 50 条 issue 中归纳，社区诉求集中于以下方向：

- **Windows 桌面端稳定性** —— 沙箱启动、权限恢复、工作区加载、模型选择器、文件下载等多链路同时出现回归，`26.1007.x` 显然需要一次集中修复（占今日活跃 issue 的近 50%）。
- **长期记忆与上下文管理** —— #19758 的 topic-based memory 架构、`#28316` 的 base64 重复上传、`#49961` 的早期 compaction 失控共同指向"上下文可扩展性"这一长期痛点。
- **多模型接入与配额可见性** —— #51308（模型缺失）、#52796（额度仅 7% 却持续报容量）、#38503（"Too many requests"）显示用户对**模型可用性 + 配额透明度**高度敏感。
- **Computer-Use / Browser 控制** —— #51927、#53255、#53246、#53242 一系列 Windows 上的 CUA / Chrome Native Host 问题，提示该能力在 Windows 尚未收敛。
- **TUI / CLI 体验打磨** —— TAB/ENTER 语义、turn tips 复制、子代理快捷键、Vim Replace 恢复等小但高频的可用性改进正在以批量小 PR 形式被机器人维护链路持续整合。
- **远程/iOS 接入** —— #52417（iOS SSH 私钥解析）、#51927（delegated tasks 权限）反映边缘平台的覆盖正在被补齐。

---

## 6. 开发者关注点（高频痛点）

1. **"Windows 升级即坏"** 已成为本周最强负反馈 —— 多个版本（`26.1002`、`26.1007`）相继出现不同回归，社区呼吁建立更可靠的回归测试与发布闸口。
2. **成本透明度不足** —— 上下文 token 计数与平台上报用量不一致（#49961）、web 端速率限制误触发（#38503），开发者普遍希望提供更细粒度的实时用量视图。
3. **沙箱链路脆弱** —— SHARING_VIOLATION（#51638）、`node_repl.exe` 启动失败（#53255）、`setup refresh had errors`（#52179）都说明 sandbox 设置阶段在 Windows 上仍缺乏稳态。
4. **能力发现面不一致** —— 同一账号、同一模型，在 macOS 容量充足却在 Windows 模型选择器中缺失（#51308 vs #52796），UI 与配额路由需统一。
5. **小但被高频请求的 UX 改进** 几乎全部以机器人批量小 PR 落地（TUI 快捷键、复制支持、Vim 恢复），说明官方采纳通道对这类补丁已非常畅通。

---

*日报生成基于 2026-10-12 当日 GitHub 公开数据，建议读者在升级到 `26.1007.x` 前优先核对 #48043、#51917、#51638 等 Windows 回归 issue 的最新进展。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-12** | **数据来源：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 一、今日速览

Gemini CLI 今日发布 **v0.65.0-nightly** 版本，社区讨论重点仍集中在 **Subagent 体系与浏览器子代理的稳定性**——多个 P1 级 Bug（如 Generalist agent 挂起、Subagent 误报 GOAL 成功）持续占据热度榜首位。代码侧的安全加固成为亮点，一天内有多个与 **路径穿越、命令注入、env 泄露** 相关的 PR 集中合并，安全治理节奏明显加快。

---

## 二、版本发布

### 🚀 v0.65.0-nightly.20261012.g9b6e0265d

- **发布渠道**：Nightly
- **对比基线**：[v0.65.0-nightly.20261010 → v0.65.0-nightly.20261012](https://github.com/google-gemini/gemini-cli/compare/v0.65.0-nightly.20261010.g9b6e0265d...v0.65.0-nightly.20261012.g9b6e0265d)
- **伴随 PR**：[#29714](https://github.com/google-gemini/gemini-cli/pull/29714)（自动版本号 bump）

> 建议生产用户等待稳定版，nightly 主要用于提前验证 Subagent、Browser agent 等新功能。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论数 | 关注理由 |
|---|-------|--------|--------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 MAX_TURNS 后误报 GOAL 成功 | **P1 / Bug** | 13 | 影响 subagent 行为可观测性，导致用户误判任务完成状态；需要回归测试 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 基于零依赖 OS 沙箱 + 后执行意图路由 | **P2 / Enhancement** | 9 | 战略级 Feature：让 Gemini 3 发挥原生 Bash 能力同时保障安全，是 Gemini 3 体验升级关键 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂死 | **P1 / Bug** | 8 👍8 | 严重程度高，互动热度最高；任何委托 subagent 的简单操作都可能卡住 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST 感知文件读取/搜索的收益 | **P2 / Feature** | 7 | 社区期待 AST 工具替代纯文本搜索，可显著降低 token 消耗 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用 skills 和 sub-agents | **P2 / Bug** | 7 | 直接影响自定义扩展（gradle/git skill）的实际可用性，反馈众多 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖 | **P2 / Bug** | 4 | 配置失效类问题，对企业用户和高级用户影响明显 |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent 自动会话接管与锁恢复 | **P3 / Feature** | 4 | 当前 Browser agent 锁检测为 fail-fast，缺少自动恢复能力 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | **P1 / Bug** | 4 👍1 | Wayland 是 Linux 桌面主流，逐步累积的关注点 |
| 9 | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) 用原生文件工具维护 task tracker | **P3 / Feature** | 4 | 旨在用文件 CRUD 替代内存 todo，缓解 context rot |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 > 128 时触发 400 错误 | **P2 / Bug** | 3 | 工具爆炸场景下模型兼容性硬限制，社区期待智能裁剪 |

**共性观察**：Top 10 中有 7 条与 **Subagent / Browser Agent / 工具调用** 相关，说明这两块仍是产品成熟度的主要瓶颈。

---

## 四、重要 PR 进展（Top 10）

### 🛡️ 安全修复（4 项）

1. **[#29521](https://github.com/google-gemini/gemini-cli/pull/29521) 限制 legacy checkpoint 路径** — 防止 `tag=../../../secret` 通过 `path.join` 解析越权读取 ✅ 已合并
2. **[#29522](https://github.com/google-gemini/gemini-cli/pull/29522) Glob 工具目录限制** — 防止 glob 12 的绝对 pattern 绕过 cwd 校验 ✅ 已合并
3. **[#29523](https://github.com/google-gemini/gemini-cli/pull/29523) 外部 checker 最小 env + 输出限流** — 防止 `GEMINI_API_KEY` 等敏感信息泄露 ✅ 已合并
4. **[#29525](https://github.com/google-gemini/gemini-cli/pull/29525) a2a-server 工作区信任不来自请求体** — 阻止调用方通过 `agentSettings.isTrusted` 提权 ✅ 已合并
5. **[#29510](https://github.com/google-gemini/gemini-cli/pull/29510) Windows 子进程参数加引号** — 修复 Windows 下 diff 命令注入 ✅ 已合并

> 上述 5 个安全 PR 集中合并不常见，说明团队在 0.65 周期将安全作为重点扫除项。

### 🤖 模型与子代理修复

6. **[#29611](https://github.com/google-gemini/gemini-cli/pull/29611) 支持 Gemini 3 点号别名多模态函数响应** — 解决 `gemini-3.8-flash` 等点号模型在 `read_file` 读取图片时的 400 错误
7. **[#29621](https://github.com/google-gemini/gemini-cli/pull/29621) 保留子代理多模态工具响应** — 修复 subagent 喂回主模型时图片被丢弃的回归
8. **[#29527](https://github.com/google-gemini/gemini-cli/pull/29527) 避免请求内容以模型轮次结尾** — 修复 `/rewind`、流中断后报 400 的问题 ✅ 已合并

### ⚡ 性能与稳定性

9. **[#29629](https://github.com/google-gemini/gemini-cli/pull/29629) 限制 Markdown 流式渲染高度** — 减少流式更新时整屏重绘闪烁
10. **[#29626](https://github.com/google-gemini/gemini-cli/pull/29626) safeJsonStringify 保留共享引用** — 修复 OTel 指标等共享对象被误判为循环引用

---

## 五、功能需求趋势

通过聚合 Issues 标签与方向，社区关注度从高到低排序如下：

| 方向 | 代表 Issue | 热度 |
|------|------------|------|
| **Subagent 体系完善** | #22323 / #21968 / #21763 / #22598 / #18287 | 🔥🔥🔥🔥🔥 |
| **Browser Agent 稳定性** | #22267 / #22232 / #21983 | 🔥🔥🔥🔥 |
| **AST 感知代码工具** | #22745 / #22746 / #22747 | 🔥🔥🔥 |
| **OS 沙箱与安全模型** | #19873 / #29521-23（PR） | 🔥🔥🔥 |
| **Token 经济性（frugal reads）** | #19561 / #21000 | 🔥🔥 |
| **持久化任务追踪** | #18836 / #21000 | 🔥🔥 |
| **终端渲染性能** | #21924 / #29629 | 🔥🔥 |
| **VSCode 扩展** | #29709 | 🔥 |

> 趋势判断：**Subagent 化和 Browser 自动化是两条主线**，前者关注"更聪明地拆分任务"，后者关注"真实环境的健壮性"。

---

## 六、开发者关注点

1. **🔁 Subagent 行为可观测性差** — bug 报告缺少子代理上下文（#21763）、轨迹不易分享（#22598）、状态被错误标记为 GOAL（#22323），开发者难以定位问题
2. **🧠 模型未主动调用 subagent/skill** — 开发者花了大量时间编写自定义 skill，但模型很少主动使用，需要更激进的 prompt 提示（#21968）
3. **🔧 工具/配置失效** — settings.json 在 Browser Agent 中被忽略（#22267），symlink agent 文件不被识别（#20079），细节坑多
4. **💥 Wayland / 交互式 CLI 卡死** — Browser agent 在 Wayland 失败（#21983）、`vite create` 类交互提示卡住（#22465），Linux 桌面体验欠缺
5. **🧹 工作区污染** — 模型在 shell 排除模式下倾向到处写临时脚本（#23571），影响 clean commit
6. **🔐 安全审计持续升温** — 5 个安全 PR 在 24h 内合入，覆盖路径穿越、命令注入、信任边界、env 泄露，开发者应关注自己 fork 中的等价问题

---

*日报基于 GitHub 公开数据生成，仅反映过去 24 小时仓库动态。报告内容不代表官方立场。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-10-12**　|　数据来源：`github/copilot-cli`

---

## 1. 今日速览

过去 24 小时内，Copilot CLI 仓库活跃度维持高位，共 26 条 Issue 被更新，其中 6 条被关闭（含若干长期遗留 Bug）。当日无新 Release、无新 PR 合并。社区关注焦点集中在 **终端渲染异常、Windows 平台兼容性、MCP/认证集成断裂** 以及 **上下文窗口可观测性** 等方向。

---

## 2. 版本发布

过去 24 小时无新版本发布。（近 24 小时内未监测到 Release 活动。）

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| [#1953](https://github.com/github/copilot-cli/issues/1953) | Always visible context window status | OPEN | ⭐ 11 👍，长期高赞功能请求，要求像"剩余请求数"一样常驻显示上下文用量 |
| [#5118](https://github.com/github/copilot-cli/issues/5118) | Atlassian Rovo MCP Server 认证探针 HTTP 400 | OPEN | 🔥 新建，**阻塞所有 Jira/Confluence 工具调用**，影响进行中的 Agent 会话 |
| [#5117](https://github.com/github/copilot-cli/issues/5117) | GitHub Mobile 远程会话无法附加文件/图片 | OPEN | 📱 移动端能力缺失，桌面/Web 已支持，存在明显能力缺口 |
| [#5094](https://github.com/github/copilot-cli/issues/5094) | Windows 桌面端 1.1.27+ bundled git 启动失败 | OPEN | ⚠️ 破坏所有项目注册，`Access is denied 0x80070005` |
| [#5111](https://github.com/github/copilot-cli/issues/5111) | 图片上限忽略 `vision.max_prompt_images`，逐张重写 prompt-cache 前缀 | OPEN | 🧠 同时影响缓存效率与多模态配额策略 |
| [#5116](https://github.com/github/copilot-cli/issues/5116) | 工具输出后偶发 400 internal server error | OPEN | 🔁 多步会话间歇性崩溃，基于 `previous_response_id` 续传路径 |
| [#5109](https://github.com/github/copilot-cli/issues/5109) | Enterprise 用户完全不可用：managed policy 无法刷新 | OPEN | 🏢 直接阻断企业部署，影响 v1.0.95 |
| [#5096](https://github.com/github/copilot-cli/issues/5096) | Windows `/upgrade` 覆盖 winget 别名而非升级包 | OPEN | 📦 升级后 winget/控制面板仍显示旧版本，易造成环境漂移 |
| [#5082](https://github.com/github/copilot-cli/issues/5082) | Dataverse MCP 被 RFC 8414 issuer 校验拒绝 | OPEN | 🔐 影响 Dynamics 365 用户 OAuth 登录 |
| [#5114](https://github.com/github/copilot-cli/issues/5114) | 命中 session 上限等待 5 小时后无法继续 | OPEN | ⏳ 触发 429 cap 后，即使冷却也无法续接上下文 |

**已关闭值得关注：**
- [#3755](https://github.com/github/copilot-cli/issues/3755) — `showReasoning` 流式输出严重重叠（如 `fromply from`），终端渲染缺陷，已关闭
- [#4287](https://github.com/github/copilot-cli/issues/4287) — `general-purpose` 子代理强制使用 `gpt-5.4-mini` 而非继承会话模型
- [#3167](https://github.com/github/copilot-cli/issues/3167) — `extensions_reload` 后 snapshot 过期导致 `preToolUse` 静默丢失
- [#4469](https://github.com/github/copilot-cli/issues/4469) — 长期 resume 后过期 `permission.requested` 事件重复弹窗

---

## 4. 重要 PR 进展

过去 24 小时 **无 PR 更新**。建议关注 Closed Issues 对应的修复提交，可通过每条 Issue 详情页的 "Commit references" 反查。

---

## 5. 功能需求趋势

从 26 条近期活跃 Issue 提炼：

| 方向 | 代表 Issue | 社区信号 |
|------|------------|----------|
| **上下文可观测性** | #1953、#5111 | 多次出现"看不见就管不住"的诉求，对 prompt-cache 行为改进呼声高 |
| **终端协议/渲染** | #3755、#3573、#5112、#5113、#4126、#5110 | TUI 兼容性成为持续痛点，已出现 OSC 7501 Program Status 等现代终端协议需求 |
| **MCP 认证与协议** | #5118、#5082、#5079 | OAuth/RFC 8414、刷新令牌复用、`ping` 协商等关键集成点反复踩坑 |
| **Windows 平台一致性** | #5094、#5096、#5049、#5109 | bundled git、winget 升级、Computer Use 插件可用性、托管策略形成集群 |
| **移动端能力补齐** | #5117 | 远程会话对附件等基础能力的缺失凸显 |
| **企业级/托管部署** | #5109 | 托管策略刷新、认证链对生产环境可用性至关重要 |

---

## 6. 开发者关注点

**高频痛点：**

1. **Windows 平台碎片化最严重**——bundled git 执行、winget 升级、Computer Use 插件、托管策略 4 条以上 Issue 直指该平台，需重点跟进 v1.1.27+ 回归。
2. **MCP 集成仍"看着能用但常崩"**——OAuth issuer 校验、token 轮换、connector 认证探测这类边缘场景频繁翻车，建议建立 MCP 兼容矩阵。
3. **TUI 文本渲染与键鼠交互**——复制粘贴触发重复输入、Home/End 串扰时间线、推理流重复叠加，说明 Ink/terminal 适配层仍需打磨。
4. **会话可恢复性差**——`permission.requested` 幽灵事件、session resume 失败、命中上限后无法续接，反映持久化与事件回放层需要审计。
5. **跨端一致性**——Mobile 缺附件、ACP 模式缺插件可用性、Enterprise 缺托管策略刷新通道，提示 Copilot CLI 正从"CLI"演化为"多端 Agent 运行时"，一致性成为下一阶段主线。

---

*日报基于 `github.com/github/copilot-cli` 公开数据自动整理，仅作为社区动向参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-12

## 📌 今日速览

今日 OpenCode 社区活跃度保持高位，Issue 与 PR 双向更新密集。**两大主线值得关注**：一是 **V1 → V2 迁移的"长尾阵痛"持续暴露**（主题色、Session 可见性、release range 污染），二是 **Provider 集成与配额处理的精细化修复**（GPT-5.x max_tokens、DashScope 签名 URL 过期、ChatGPT OAuth 上下文扩窗）。维护者 @rekram1-node 主导合并了多项 CLI/TUI 修复，@kitlangton、@VitorNathanG、@mathstuf 等贡献者持续推高 TUI 体验。

---

## 🚀 版本发布

> 过去 24 小时内 **无新 Release**。当前线上稳定版仍为 `v2.0.26`（含 PR #54674 修复的 V1 历史污染问题，已合并待下次发版）。

---

## 🔥 社区热点 Issues

> 以下按重要性（评论数 × 点赞数 × 影响面）综合排序，选取 10 条。

### 1. [#6111](https://github.com/anomalyco/opencode/issues/6111) — SSH 场景下剪贴板复制失效（Windows）
- **状态**：CLOSED · 💬 10 · 👍 4
- **重要性**：影响"在 Windows 上通过 MobaXterm/Windows Terminal SSH 远程使用 OpenCode"的核心用户群，"复制消息"功能实际上不可用，对该场景是 blocker。
- **社区反应**：讨论最热的 issue，多名维护者参与复现，提示 opentui 在 SSH/无 GUI 终端下的剪贴板抽象存在 gap。

### 2. [#54657](https://github.com/anomalyco/opencode/issues/54657) — Go 订阅激活后 API 仍报 invalid
- **状态**：OPEN · 💬 8 · 👍 0
- **重要性**：与 #54671 互为印证，反映 Console/订阅服务在切换至 Go 套餐后 API key 状态机存在不一致。

### 3. [#34398](https://github.com/anomalyco/opencode/issues/34398) — 多 repo 工作区下 `/undo` 静默失败
- **状态**：CLOSED · 💬 7 · 👍 2
- **重要性**：提出"per-repo snapshot tracking"作为 V2 路线图；与 #30065 串联，是 Workspace 能力补齐的标志性 issue。

### 4. [#31463](https://github.com/anomalyco/opencode/issues/31463) — 冷启动 npm 缓存时 plugin 导入挂起
- **状态**：CLOSED · 💬 6 · 👍 0
- **重要性**：根因定位精准（`Npm.add()` 调用 Arboria 解析器），是 #54676 plugin activation race 的近亲问题；同 PR #54676 已尝试根治类似冷启动竞态。

### 5. [#54665](https://github.com/anomalyco/opencode/issues/54665) — ACP 启动失败：`no such column: project_id`
- **状态**：OPEN · 💬 5 · 👍 0
- **重要性**：ACP 是 V2 桌面端的核心通信通道，schema 漂移直接导致 `opencode serve` 退出码 1。

### 6. [#31734](https://github.com/anomalyco/opencode/issues/31734) — Windows 二进制缺 ripgrep，离线环境不可用
- **状态**：CLOSED · 💬 5 · 👍 5
- **重要性**：👍 数最高的功能请求之一。离线/受限网络场景下缺失 grep 工具严重影响 `read` 工具链。

### 7. [#40885](https://github.com/anomalyco/opencode/issues/40885) — GPT-5.x 在 AI SDK fallback 路径仍发送 `max_tokens`
- **状态**：CLOSED · 💬 4 · 👍 0
- **重要性**：影响所有通过 OpenAI-compatible 网关转发到 OpenAI 的用户；OpenAI 已拒绝 `max_tokens` 强制要求 `max_completion_tokens`，是 v1→v2 通用 provider 适配层的遗留 bug。

### 8. [#32633](https://github.com/anomalyco/opencode/issues/32633) — CLI 暴露可重试错误的机器可读信号
- **状态**：CLOSED · 💬 4 · 👍 0
- **重要性**：直接服务于 GitHub Actions / 自动化包装层；与 #41709、#41740（指数退避/配额响应）形成完整链路。

### 9. [#54679](https://github.com/anomalyco/opencode/issues/54679) — V1→V2 迁移后历史 session 在 cwd 列表中不可见
- **状态**：OPEN · 💬 2 · 👍 0
- **重要性**：典型迁移痛点。Session 列表默认 `cwd` scope 过滤让 V1 的 `global` 项目 session "消失"，影响所有从 1.18.x 升级的用户。

### 10. [#41973](https://github.com/anomalyco/opencode/issues/41973) — `{file:}` API key 在 `opencode serve` v2 路径被当字面 Bearer
- **状态**：CLOSED · 💬 2 · 👍 0
- **重要性**：揭示了 TUI/run 与 serve 之间 provider 配置解析路径不一致；自定义 provider 用户的硬阻断问题。

---

## 🛠️ 重要 PR 进展

### 1. [#54674](https://github.com/anomalyco/opencode/pull/54674) — fix(release): 排除 V1 历史对 release diff 的污染
- 由 `opencode-agent[bot]` 提交并已合并，修复了 `v2.0.26..HEAD` 多出 ~1,380 个 V1 commit 的问题；下一次发版即生效。

### 2. [#54481](https://github.com/anomalyco/opencode/pull/54481) — fix(app): catalog 刷新后保留 session 显式模型选择
- 解决"Alpha 临时下架时静默切到 Beta"的退化行为；保护用户的显式 model 选择。

### 3. [#54570](https://github.com/anomalyco/opencode/pull/54570) — fix(core): zstd 压缩 Codex/Responses API 请求体
- 解决 >1 MiB 请求体触发 `503 upstream connect error`；同时提升大上下文吞吐。

### 4. [#54668](https://github.com/anomalyco/opencode/pull/54668) — feat(core): ChatGPT OAuth 下 gpt-6.1-sol 上下文升至 500k
- 跟进 OpenAI Codex 政策调整，subscription 配额也免长上下文附加费；用户友好改进。

### 5. [#54680](https://github.com/anomalyco/opencode/pull/54680) — fix(tui): 播放空闲时关闭 audio engine
- 防止 ALSA timer fd 在 suspend/resume 后卡在 readable、100% CPU 旋转并泄漏内存的严重问题。

### 6. [#54434](https://github.com/anomalyco/opencode/pull/54434) — fix(tui): 播放结束后停止 audio 输出
- 与 #54680 同源的另一份修复（#54432），两者会择一合入。

### 7. [#54676](https://github.com/anomalyco/opencode/pull/54676) — fix(server): `plugin list` 前等待 plugin activation 完成
- 修复冷启动竞态导致"无插件"假象；与 #31463 的根因同类。

### 8. [#54672](https://github.com/anomalyco/opencode/pull/54672) — fix(cli): updater.check 在未知安装方式时返回 `unavailable`
- 避免 standalone / distro 包用户在 TUI update 时遇到 `Installation method not found` 错误。

### 9. [#54257](https://github.com/anomalyco/opencode/pull/54257) — fix(core): V1 主题色名（primary/secondary/...）兼容
- 重要 V1→V2 兼容修复；自定义 agent 的 `color` 字段在 V2 仅接受 6 位 hex，会让大量 V1 配置静默失效。

### 10. [#52386](https://github.com/anomalyco/opencode/pull/52386) — fix(core): 中断的 shell 获取可回滚
- 修复 `Shell.create` 注册后被中断导致 process manager 泄漏的 bug；属于稳定性基础设施改进。

---

## 📈 功能需求趋势

从过去 24h 的 50 条 Issue 中，社区诉求可归纳为五大方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **V1→V2 兼容与迁移** | #54679、#54657、#54671、#54673、#41959、#42002、#54257（PR） | ⭐⭐⭐⭐⭐ 当前最高 |
| **Provider / 配额 / 重试** | #40885、#41670、#41740、#41709、#32633、#41973、#54668（PR） | ⭐⭐⭐⭐ |
| **TUI / Desktop 体验打磨** | #41691、#41692、#42058、#41956、#38170、#54463、#54677（PR） | ⭐⭐⭐⭐ |
| **离线/受限环境工具链** | #31734、#42002、#41959 | ⭐⭐⭐ |
| **Workspace / 多 repo 协同** | #34398、#24017（保存 prompt 与 thread） | ⭐⭐ |

> 跨语种支持（Odin 高亮 #40889）、CLI 可观测性（#32633、#40889）也获得稳定关注，但需求量小于上面五类。

---

## 🎯 开发者关注点

通过 Issue + PR 双向反馈，开发者社区集中反映的痛点：

1. **V1→V2 升级是"信任消耗战"**
   - 历史 session 不可见（#54679）、订阅/账单状态错乱（#54657、#54671、#54673、#54429）、主题色配置静默失效（#54257）、release diff 污染（#54674）。这些都不是新功能，而是迁移基础卫生。

2. **Provider 适配层碎片化**
   - 同一个 GPT-5 模型在 TUI / run / serve 三条路径行为不同（#40885、#41973）；自定义 provider 的 `apiKey` 模板只在部分路径解析；DashScope/Gemini 配额处理策略不一致（#41670、#41740、#41709）。**开发者强烈呼吁统一的 provider 适配层抽象。**

3. **TUI 是产品主战场，但仍有大量 UX 死角**
   - 图片预览（#41691）、文本选择越界（#41692）、session picker 无目录提示（#42058）、删除 session 无入口（#41956）、Windows 离线 ripgrep 缺失（#31734）、macOS x64 应用无法启动（#38211）。PR 端对应的改善（#54463、#54677、#54680）说明社区正在自发补齐。

4. **稳定性/资源泄漏问题被低重视**
   - Audio engine 100% CPU（#54680）、shell manager 泄漏（#52386）、plugin 冷启动竞态（#31463、#54676）——这些"无人提但很重要"的 bug 集中在 10/12 集中合并，说明维护者对稳定性的把控节奏正在加快。

5. **可观测性 & CLI 自动化**
   - GitHub Actions 等自动化包装层对"可重试错误信号"诉求强烈（#32633），反映出 OpenCode 在 CI/CD 场景的渗透正在加深。

---

*日报基于 `anomalyco/opencode` 在 2026-10-12 当日更新的 50 条 Issue 与 50 条 PR 数据自动生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期：2026-10-12** ｜ **数据源：github.com/badlogic/pi-mono (earendil-works/pi)**

---

## 📌 今日速览

今天 Pi 仓库无新版本发布，但社区活跃度不减：过去 24 小时有 **41 个 Issue 更新、6 个 PR 更新**。当前最聚焦的话题是 **Provider 连接可靠性与计费/限流逻辑**（openai-codex、Anthropic、DashScope、DeepSeek 命名变更），同时 **Compaction（压缩）相关功能**持续成为讨论热点，涵盖思考模型配置、传输协议、UI 指示器等多维度诉求。

---

## 🚀 版本发布

**无新版本发布。** 最近的相关版本为 1.1.0 / 0.87.x，仍是当前主线。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 状态 | 关键价值 |
|---|-------|------|-----|------|----------|
| 1 | [**#4945**](https://github.com/earendil-works/pi/issues/4945) openai-codex Connection Reliability Issues | 82 | 35 | OPEN / in progress | 长期高优 issue。`gpt-5.5` / openai-codex 在 TUI 下偶发 stuck on `Working...`，无流式输出、无工具调用、无错误，社区只能按 Esc 终止。35 个 👍 显示大量用户实际遇到 |
| 2 | [**#10480**](https://github.com/earendil-works/pi/issues/10480) Direct openai connection 不识别手动重置的 usage limit | 18 | 0 | OPEN / bug | ChatGPT Pro 用户重置额度后 Pi 仍显示额度耗尽，必须 `/logout` + `/login` 切换 codex 才能恢复，影响直连 OpenAI 的核心计费流 |
| 3 | [**#7553**](https://github.com/earendil-works/pi/issues/7553) 可配置压缩的 thinking level / model | 10 | 3 | OPEN / to-discuss | 压缩（自动 + 手动）当前强制复用会话的思考等级，推理模型用户希望独立配置摘要的思考预算 |
| 4 | [**#10267**](https://github.com/earendil-works/pi/issues/10267) `before_agent_start` 贡献的 prompt 在无 user prompt 的运行中被丢弃并重复计费 | 9 | 4 | OPEN / **P0** | 高优先级！extension 注入的 `systemPrompt` / `section` 在 background notification / plan continue / retry / resume 场景被丢弃，触发整段 prompt 重新计费 |
| 5 | [**#9602**](https://github.com/earendil-works/pi/issues/9602) Compaction 因含 thinking 消息可能溢出 | 8 | 0 | OPEN / bug | 长会话下 Qwen3.8（llama.cpp 本地）有 4 个响应在 16K token 处截断，导致压缩后超出预期。压缩逻辑与 thinking 边界处理存在缺陷 |
| 6 | [**#10019**](https://github.com/earendil-works/pi/issues/10019) Anthropic 订阅请求在 :00 / :30 UTC 挂起（200 + ping，无 message_start） | 8 | 1 | OPEN | 与 #4945 类似的"假死"模式，但发生在 Anthropic Provider，每 30 分钟整点高发，严重影响生产使用 |
| 7 | [**#10645**](https://github.com/earendil-works/pi/issues/10645) `resizeImage` 在 Bun 编译产物中返回 null（自 0.87.x 起所有图片附件丢失） | 6 | 0 | OPEN | 回归问题：v0.87.1 / v1.0.4 独立二进制在 `--mode rpc` 下图片全丢，影响宿主应用集成 |
| 8 | [**#9656**](https://github.com/earendil-works/pi/issues/9656) Windows + Zellij 全屏下滚轮滚动 prompt 历史而非 transcript | 6 | 4 | OPEN / bug | Windows → Alacritty → Zellij → Pi 链路下的 TUI 输入路由问题，4 个 👍 说明同配置用户不少 |
| 9 | [**#10393**](https://github.com/earendil-works/pi/issues/10393) xterm 终端下 Pi CLI 内部文本复制失效 | 6 | 0 | CLOSED / no-action | WebPi、xterm.js 等嵌入场景无法选中文本，最终被标记 no-action（终端层职责） |
| 10 | [**#8617**](https://github.com/earendil-works/pi/issues/8617) Codex：图片密集工具结果改用 file 引用 | 4 | 0 | OPEN | 作者已给出本地原型，希望 Codex 把图片存本地、外发用 ChatGPT `file_id` 而非重复 base64，显著降低带宽与 token 成本 |

---

## 🛠 重要 PR 进展（Top 6，共 6 条）

> 当日 PR 全部为已合并/关闭，无新增开放 PR，但仍值得关注其方向。

| PR | 标题 | 关键内容 |
|---|------|----------|
| [**#10813**](https://github.com/earendil-works/pi/pull/10813) | feat(ai): 保留客户端加载的 Anthropic tool references | 修复 Anthropic 工具引用在 client 端的丢失问题，对接工具缓存 |
| [**#10774**](https://github.com/earendil-works/pi/pull/10774) | fix(tui): 在 herdr 中启用 kitty 图像协议 | 回退 #10573 的改动，herdr 实际支持 kitty 图像协议；还原前因 GHOSTTY 误判导致 inline image 失效 |
| [**#10810**](https://github.com/earendil-works/pi/pull/10810) | fix(tui): CompactionStatusIndicator 支持 colorFn 覆写 | 修复 #10809：在未设 `borderColor` 的主题下，压缩指示器无法复用 reasoning 颜色 token；与 WorkingIndicator 对齐 |
| [**#10805**](https://github.com/earendil-works/pi/pull/10805) | feat(coding-agent): 支持 extension session cwd | 为 `ctx.newSession()` / `ctx.switchSession()` 增加 `cwd` 与 `cwdOverride`，让 extension 可在 `pi.exec` 创建 worktree 后切换会话目录 |
| [**#10751**](https://github.com/earendil-works/pi/pull/10751) | feat(coding-agent): 使用 pi.dev 配置 schema | 把 pi.dev 的 schema 端点作为 `$id` 规范来源；内置主题与示例改用发布的 theme schema，并文档化各 schema URL |
| [**#10795**](https://github.com/earendil-works/pi/pull/10795) | fix(ai): 从 Anthropic 错误 tool 结果中丢弃图片 | 修复 #10794：Anthropic 不支持错误 tool result 内嵌图片，统一剥离避免 provider 报错 |

---

## 📈 功能需求趋势

从 41 条 Issue 中可归纳出以下几大方向：

1. **Provider 可靠性与计费准确性**（最高频）
   - openai-codex 流式假死（#4945）
   - Anthropic 整点挂起（#10019）
   - Direct OpenAI usage 刷新失败（#10480）
   - DashScope 429 `insufficient_quota` 误判为不可重试（#10656）
   - DeepSeek 模型重命名导致默认模型静默回退（#10812）

2. **Compaction（上下文压缩）体系化**（第二高频）
   - 独立 thinking 配置（#7553）
   - 压缩溢出 / 包含 thinking 消息（#9602）
   - 压缩请求忽略 `transport` 设置（#10781）
   - 压缩状态指示器视觉一致性（#10809 → #10810）

3. **Windows / 终端兼容性**
   - 编译产物图片附件丢失（#10645）
   - Zellij 下滚轮路由错误（#9656）
   - Windows 锁文件 EPERM（#10801）
   - macOS Playwright 进程组泄漏（#10797）

4. **Extension 系统增强**
   - `session_start` 注入 system prompt（#9432）
   - 支持 session cwd 切换（#10805）
   - MCP elicitation 支持（#10274）
   - `agent_settled` 之后 abort 仍允许 continuation（#10705）

5. **新模型 / 协议能力**
   - Codex 图片走 `file_id`（#8617）
   - Anthropic `thinking.display: "updates"`（#10804）
   - Qwen3.8 本地 `reasoning_effort` 透传（#10578）
   - 自定义 provider 的 classifier 模型（#10791）

6. **可观测性 / 无人值守 Agent**
   - 输出超限静默 settle（#10799）
   - durable subagent 返回空（#10815）

---

## 👨‍💻 开发者关注点

从社区反馈看，开发者当前最集中的痛点与需求：

- **🔌 Provider 集成的"假死 / 误判"**：无论是 openai-codex 还是 Anthropic，连接"看起来活着但无输出"是最严重影响体验的问题；同时对 429 / 401 等错误码的语义识别仍不够准确（DashScope、DeeSeek 模型更名）。
- **💸 计费与 token 成本**：#10267（P0）暴露了 extension 注入的 prompt 在无 user turn 时被丢弃并重发整段 prompt，直接导致重复计费；Codex 重复发送 base64 图片也是成本痛点。
- **🧠 长会话压缩质量**：Compaction 在 reasoning 模型下与 thinking 边界纠缠，缺少独立配置，开发者难以控制摘要成本与质量。
- **🖥 跨平台打包回归**：Bun 编译产物在 Windows 上的图片处理回归（#10645）让 SDK 集成方付出真实代价；`npm install` 噪音（#9759）也是高频低优抱怨。
- **🧩 Extension 能力边界**：开发者希望 extension 能更深地介入 system prompt、cwd、MCP elicitation、`agent_settled` 等生命周期节点，但当前 API 仍有限制。
- **🤖 无人值守 Agent 的鲁棒性**：当模型输出达到 token 上限时静默 settle（#10799），无人值守场景缺乏自动续接通道，限制了 headless agent 部署。

---

*报告生成时间：2026-10-12 ｜ 仓库：earendil-works/pi*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-12**

---

## 📌 今日速览

今日 Qwen Code 发布了 **v0.25.1** 主版本及配套的 **desktop-v0.25.1** 与 **sdk-typescript-v0.1.19**，修复了多个 Managed Agent 关键路径的鲁棒性问题。社区讨论焦点集中在 **Managed Agent 双路径架构落地**、**Web Shell 体验增强**以及 **Linux/macOS 桌面端兼容性问题**，核心架构 issue #12380 持续高活跃（56 评论）。

---

## 🚢 版本发布

### v0.25.1（主版本）
无破坏性变更，重点修复 Managed Agent 中 connector / broker 鲁棒性问题，并恢复 Activity 重建后选区文本连接与会话路由的校验逻辑。  
🔗 https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1

### desktop-v0.25.1
- `fix(serve)`：保留会话创建失败的诊断信息 (#12331)  
- `feat(sdk-java)`：新增托管运行时（Managed Runtime）支持  
🔗 https://github.com/QwenLM/qwen-code/releases/tag/desktop-v0.25.1

### sdk-typescript-v0.1.19
随附 CLI v0.25.1，确保 SDK 与 CLI 行为对齐。  
🔗 https://github.com/QwenLM/qwen-code/releases/tag/sdk-typescript-v0.1.19

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 重要性说明 |
|---|---|---|---|
| **#12380** | [proposal] Managed Agent 双路径架构与分阶段交付 | **56** | 整个 Managed Agent 路线图的总纲 issue，定义 TypeScript 主循环与模型推理/工具环境解耦的演进路径，是当前最核心的架构讨论 |
| **#13078** | Daily dependency CVE audit failed | 18 | 每日依赖 CVE 审计失败，CI/CD 安全链路异常，影响发版合规，需关注根因 |
| **#13004** | [perf] 内存提取后的有界冷却 | 10 | 提议对自动记忆提取设置 cadence 策略，避免每次用户轮询都触发 fork 提取器，性能优化关键需求 |
| **#13492** | XML tool-call recovery drops outer calls | 10 | 引用工具标记的外部调用被丢弃的 bug，影响多工具链编排，部分修复已合并 (#13515) |
| **#12952** | [feat] Stage G 权威 Session 历史与写入围栏 | 8 | #12380 的 Stage G 跟踪 issue，决定多 Agent 场景下的写权归属与故障切换机制 |
| **#13807** | macOS Foundation Models 作 Fast Model 报错 500 | 6 | 用户使用 `fm serve` 作为 fastModel 时报"不支持的生成引导"，影响 macOS 原生 Apple Silicon 用户体验 |
| **#12444** / **#13888** | Web Shell 工作区置顶固定 | 7+5 | 当工作区增多时，sidebar 缺乏固定常用项目的能力，社区需求一致 |
| **#13175** | Web Shell 键盘快捷键（Session Overview / Split View） | 5 | 提升 Web Shell 操作效率的快捷键提案，与 Desktop 与 CLI `qwen serve` web 模式联动 |
| **#13680** | Linux ripgrep 启动 SIGSEGV | 4 | Desktop Linux 打包的 x64 ripgrep 在启动探针即段错误，**P1 阻塞性 bug**，影响所有 Linux Desktop 用户 |
| **#13875** | 父 Session 关闭未停止子 Turn | 4 | cancel-then-close 后子进程仍在运行，存在资源泄漏风险，与多 Agent 生命周期管理强相关 |

---

## 🛠️ 重要 PR 进展

| PR | 作者 | 内容 |
|---|---|---|
| **#11854** feat: hybrid code mode | DragonnZhang | 新增 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），对齐 Codex；每个工具可嵌套 JavaScript 声明并暴露隔离 `exec` 工具，支持组合式工作流 |
| **#13816** fix: 恢复受阻时归还 Workspace mount | wenshao | 新增 `POST /tool-sessions/{runtimeSessionId}:release-mount`，仅释放 Workspace 执行挂载，不动 Session/会话/恢复状态 |
| **#13917** fix: 重连时结算"声称启动但未证明启动"的派发 | wenshao | 托管会话重开时扫描 `dispatch_started` 状态的孤儿派发并完成持久化结算（#13801 跟进） |
| **#13325** fix: 关闭 #12692 的 R2 review 关键问题 | wenshao | 修复 8 个 Critical 缺陷（含 InnoDB 锁顺序倒置、keyset 分页遍历可变列表等） |
| **#13314** fix(sdk-java): 关闭 Hosted Harness #12654 的 11 个关键评审点 | wenshao | 集中修复 Java 私有客户端的关键问题 |
| **#13939** docs: EventTransport MQ2 生产/消费接线计划 | wenshao | 将跨节点 EventTransport 的 Java 接线实现分为 4 个可独立评审/回滚的子切片 |
| **#13832** feat: Web Shell 任务提醒与面板内通知 | ytahdn | 当聊天需工具审批或 AskUserQuestion 回答时发送系统提醒，点击可回到对应聊天 |
| **#13936** feat: Managed 子 Agent 任务面板 | doudouOUC | Managed Web Shell 新增会话级子 Agent 面板，宽容器并排 360px，窄容器使用 Dialog |
| **#13654** feat: 异步校验工具发布产物 | doudou | 将工具发布读回与流校验迁移到有界后台 worker，上传在输入/就绪记录提交后返回 202 |
| **#13915** feat(mods): 中间件分发与恢复 (PR2b) | qqqys | 头less Mod 运行时新增中间件组合与有界恢复，插件按序注册并形成事件链 |

---

## 📈 功能需求趋势

从近 24 小时活跃 issue/PR 提炼，社区重点关注方向：

1. **Managed Agent / 多 Agent 体系**（最热）— 双路径架构、Stage G 权威 Session 历史、父-子生命周期、子 Agent 任务面板、跨节点 EventTransport，是当前路线图核心。
2. **Web Shell 体验增强**— 工作区/项目置顶、键盘快捷键、复制选区回复、子 Agent 面板、语音反馈本地化、任务提醒，桌面与 CLI web 模式共享同一套交互。
3. **桌面端跨平台分发**— Linux Flathub 上架 (#13924)、qwen.ai 与 GitHub README 自动化更新下载链接 (#13656)、Linux ripgrep 兼容 (#13680)、macOS Foundation Models 适配 (#13807)。
4. **性能与资源治理**— 内存提取 cadence 冷却 (#13004)、JDBC 历史有界保留 (#13642)、异步工具发布校验 (#13654)。
6. **本地模型/Provider 生态**— Rapid-MLX 自定义 provider 文档 (#13934)、Foundation Models 作为 fastModel (#13807)。
7. **SDK 与部署管理**— SDK-Java Hosted Harness 关键评审整改 (#13314)、Flyway 迁移版本校验 (#13922)、managed-extensions 目录加载 (#12183)。

---

## 💬 开发者关注点与高频痛点

- **多 Agent 父子会话生命周期**：父关闭不停止子运行、托管会话孤儿结算、子 Turn 安全恢复是 #13875、#13917、#13930、#13875 的共同主题；开发者迫切需要可靠的故障切换与围栏（fencing）机制。
- **CI/CD 与发版链路的脆弱性**：每日 CVE 审计失败 (#13078)、Flyway 版本校验放过低版本迁移 (#13922)、release notes 重复收录旧 PR (#13925)、Main CI 失败 (#12714) — 发版工具链稳定性是当前可见的工程债。
- **配置文件编码与解析边界**：UTF-8 BOM 导致 MCP 配置 (#13595) 与 Claude 配置导入 (#13710) 解析失败、Windows 路径问题，提示需要更严格的 BOM 容忍与编码探测。
- **CJK 与本地化**：CJK 队友名在 `sanitizeName` 中被折叠为空 (#13920)，Web Shell 语音反馈需中英文本地化 (#13938)，国际化是持续短板。
- **Linux 桌面质量**：ripgrep SIGSEGV (#13680, P1) 是阻塞级问题；开发者也希望进入 Linux Mint Software Manager 等商店 (#13924)。
- **范围治理（scope fuse）**：多个 issue 提到 PR 规模超限后将分批拆解（如 #13809、#13869、#13926、#13935），反映出大型项目亟需更精细的代码审查与切片策略。
- **BOM/UTF-8 兼容与配置导入**：在 MCP 配置、SDK-Java Flyway 校验、Claude 兼容路径上反复出现，强烈建议统一编码与解析处理。

---

> 📊 数据范围：过去 24 小时 GitHub 更新；Issues 共 50 条（展示评论数 Top 30），PRs 共 50 条（展示 Top 20）。完整链接见各表条目。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-10-12**
**数据来源：GitHub Issues & Pull Requests**

> ⚠️ 备注：本期数据中 Issues 与 PRs 实际归属于 `codewhale-hq/Codewhale` 仓库，与项目主题 "DeepSeek-TUI" 存在标签/分支差异，以下内容按数据原文呈现。

---

## 一、今日速览

今天社区主线集中在 **0.10.2 版本收尾**：PR #6957 与 #6960 已先后合入 release-readiness 切片，新开的 PR #6965 正在承载 Q3 定价、ChatGPT 登录、Windows 兼容性等多个修复决定。同时，Windows 旧版兼容性、长任务后台化、会话恢复失败等问题成为新一批 Issue 的焦点，反映出 v0.10.1 的多个回归正集中暴露。

---

## 二、版本发布

过去 24 小时内无新 Release 推送。0.10.2 仍在最终整合阶段，最近合入的 PR 已为发布腾出空间（见 PR #6960 描述：TUI 包从 1154 缩减到 954 文件，crates 体积占比从 95.3% 降至 89.9%）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 关键点 |
|---|---|---|---|
| **#6963** | Windows runtime floor blocks read-only piped commands | 🟢 OPEN | Windows 全权限模式下，普通只读管道命令被 `SessionRuntimeRisk` 误拦截，影响非 npm 原生安装用户。 |
| **#6944** | 0.10.2: long-running work invisible after going background | ✅ CLOSED | 后台任务对用户不可见；已通过 #6957 部分修复，剩余切片转入 #6961。 |
| **#6953** | Win10 1607: v0.10.1 fails to start (0xC0000139) | ✅ CLOSED | 旧版 Windows 因 `DeriveCapabilitySidsFromName` 加载失败无法启动；修复 commit `830b86fddd` 已落地。 |
| **#6964** | `codewhale init` 按当前语言生成 `agents.md` | 🟢 OPEN | 多语言 AGENTS.md 生成请求，呼声较高的本地化/模板增强需求。 |
| **#6962** | Release: 校验 Windows 导入基线后再发版 | 🟢 OPEN | 提议加入 CI 守卫，防止下一个 release 再次引入旧版 Windows 不支持的 load-time 导入。 |
| **#6961** | Background work follow-up: progress, Run(tests), 对照评测 | 🟢 OPEN | 后台任务的进度事件、取消语义、`wait` 报告仍是产品级决策待定项。 |
| **#6925** | 0.10.2: ChatGPT 登录被 originator 参数拒绝 | 🟢 OPEN | HTTP 400 `invalid_authorize_request` 阻断 0.10.1 安装版的 ChatGPT 登录。 |
| **#6931** | 0.10.2: Bash/Shell 操作需可检视、可停止 | 🟢 OPEN | 长输出折叠后无法追溯、后台运行卡死无提示，用户无法定位或中止命令。 |
| **#6955** | > 8 MiB 会话文档无法 resume/fork，journal 是元凶 | 🟢 OPEN | 大会话恢复/分叉被 transport bound 阻断，错误信息未给出修复指引。 |
| **#6954** | `codewhale resume` 在存在原始 sub-agent handoff 时直接拒绝 | 🟢 OPEN | 会话历史含有未收敛子代理交接时无法恢复，签名校验语义有待重审。 |

🔗 [Issue #6963](https://github.com/Hmbown/DeepSeek-TUI/issues/6963) · [#6944](https://github.com/Hmbown/DeepSeek-TUI/issues/6944) · [#6953](https://github.com/Hmbown/DeepSeek-TUI/issues/6953) · [#6964](https://github.com/Hmbown/DeepSeek-TUI/issues/6964) · [#6962](https://github.com/Hmbown/DeepSeek-TUI/issues/6962) · [#6961](https://github.com/Hmbown/DeepSeek-TUI/issues/6961) · [#6925](https://github.com/Hmbown/DeepSeek-TUI/issues/6925) · [#6931](https://github.com/Hmbown/DeepSeek-TUI/issues/6931) · [#6955](https://github.com/Hmbown/DeepSeek-TUI/issues/6955) · [#6954](https://github.com/Hmbown/DeepSeek-TUI/issues/6954)

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|---|---|---|
| **#6965** | 0.10.2 decision slices（定价 + Windows 恢复） | 🟢 OPEN | 跟进 #6960：每提交一个决策切片，首批含 Q3 #6396 S8 fail-closed 定价 + #6915 Windows owner 恢复。 |
| **#6960** | Release headroom for `codewhale-tui` 与 pet 视图切换 | ✅ CLOSED | 已合并 `8d1611e57e`：TUI 包瘦身、新增视图切换器。 |
| **#6957** | 0.10.2 readiness：主分支绿灯 + 发版阻塞修复 | ✅ CLOSED | `ef35e394ba`：合并后台任务改进、cancel 收据、30s 后台迁移提示等。 |
| **#6959** | Runtime API 读写 workspace 项目信任 | 🟢 OPEN | 非 TUI 客户端（如 VS Code 插件）可感知与写入 trust 状态，避免重复授权。 |
| **#6952** | Workflow gate 自阻塞自身 role 时应在 plan admission 拒绝 | ✅ CLOSED | 修复 #6945 的死锁：gate 命名 `blocks_role` 为自身 role 时提前报错。 |
| **#6950** | Plugins: CLI 安装 + 应用内 OAuth 登录 | ✅ CLOSED | 宿主端管理的 OAuth 接入，新增 CLI 安装路径。 |
| **#6958** | 测试：session picker 搜索不再依赖临时目录名 | 🟢 OPEN | Mac 上间歇性失败的稳定性修复。 |
| **#6956** | 测试：git worktree 删除失败不视为测试失败 | 🟢 OPEN | 子代理清理的鲁棒性修正。 |
| **#6813** | `build(deps)`: nixpkgs `6774f7b → 7a0f122` | ✅ CLOSED | 维护者轮换与包集合更新。 |
| **#6810** | `chore(deps-dev)`: `@types/node` 26.6.1 → 26.6.4 | ✅ CLOSED | web 子模块的类型依赖更新。 |

🔗 [PR #6965](https://github.com/Hmbown/DeepSeek-TUI/pull/6965) · [#6960](https://github.com/Hmbown/DeepSeek-TUI/pull/6960) · [#6957](https://github.com/Hmbown/DeepSeek-TUI/pull/6957) · [#6959](https://github.com/Hmbown/DeepSeek-TUI/pull/6959) · [#6952](https://github.com/Hmbown/DeepSeek-TUI/pull/6952) · [#6950](https://github.com/Hmbown/DeepSeek-TUI/pull/6950) · [#6958](https://github.com/Hmbown/DeepSeek-TUI/pull/6958) · [#6956](https://github.com/Hmbown/DeepSeek-TUI/pull/6956) · [#6813](https://github.com/Hmbown/DeepSeek-TUI/pull/6813) · [#6810](https://github.com/Hmbown/DeepSeek-TUI/pull/6810)

---

## 五、功能需求趋势

从近期 Issues/PR 提取的方向：

1. **后台与长任务可观测性**（#6944、#6961、#6931、#6944）—— 进度事件、取消收据、可中止 shell 是用户最密集的痛点。
2. **Windows 兼容性矩阵**（#6953、#6962、#6963）—— 旧 Win10 与 native 安装路径的 load-time 依赖管理需要 CI 守卫。
3. **会话持久化鲁棒性**（#6955、#6954）—— 大文档、原始 sub-agent handoff、journal 边界带来的 resume/fork 失败。
4. **多语言 / 本地化模板**（#6964）—— `agents.md` 多语言生成。
5. **IDE / 第三方客户端集成**（#6959）—— 非 TUI 客户端对 workspace trust 等状态的可见性。
6. **工作流（Workflow）可靠性**（#6945、#6952）—— 自阻塞 gate、计划准入校验。
7. **插件生态与 OAuth 登录**（#6950、#6925）—— ChatGPT/Codex 类登录的 CLI 与应用内流程。
8. **Runtime/TUI crate 拆分**（#6939、#6960）—— 持续进行的大型重构。
9. **定价/层级透明度**（#6965 引用的 #6396 S8）—— fail-closed 的 tier 定价策略。
10. **Fork/Token 节流与缓存继承**（#6393）—— Draft 阶段，token diet 与 fork-prefix cache 继承正在酝酿。

---

## 六、开发者关注点

| 痛点 | 典型表现 | 关联 Issue |
|---|---|---|
| **后台命令"沉默失败"** | 240s 后才告知用户任务被移到后台，且无法停止/检视 | #6944 / #6931 |
| **Windows 兼容性回归** | v0.10.1 在 Win10 1607 直接 0xC0000139 崩溃；非 npm 模式下命令被误拦 | #6953 / #6963 |
| **会话恢复不可预期** | 大文档 / 含原始 handoff 的会话无法 resume，错误信息缺少解决路径 | #6955 / #6954 |
| **插件安装摩擦** | 源码装插件、OAuth 登录需额外 terminal 命令，缺少统一入口 | #6950 / #6925 |
| **工作流死锁** | 自指 gate 直到调度阶段才报错，缺乏提前 plan 校验 | #6945 |
| **发版门槛缺失** | 缺乏对最低 Windows 导入基线的 CI 守卫 | #6962 |
| **IDE 集成盲区** | 非 TUI 客户端读不到/写不了 workspace trust | #6959 |
| **Token/缓存效率** | fork 后的 prefix cache 复用、token 节流是高频节能诉求 | #6393 |

---

*日报完。如需追溯完整讨论，请使用上方链接跳转对应 Issue / PR 页面。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*