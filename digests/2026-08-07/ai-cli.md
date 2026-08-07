# AI CLI 工具社区动态日报 2026-08-07

> 生成时间: 2026-08-07 02:21 UTC | 覆盖工具: 9 个

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
**数据周期：2026-08-07**

---

## 1. 生态全景

2026 年 8 月的 AI CLI 生态已进入**"功能铺设向可靠性打磨"的关键转折期**：各大厂商一方面持续推出重量级特性（如 Codex 的 Agent Plugins、Pi 的 Fullscreen TUI、Qwen Code 的内联图像），另一方面社区反馈的重心已普遍从"想要什么"转向"什么不能用"——权限弹窗洪水、跨平台进程泄漏、MCP 协议落地不完整、长会话数据损坏成为跨工具共识的痛点。**MCP 协议**正成为生态的事实标准，超过半数工具在同步完善其能力与稳定性，而**多 Provider 抽象层**、**Subagent 治理**、**TUI/IDE 双端体验**则构成下一阶段差异化竞争的三条主轴。

---

## 2. 各工具活跃度对比

| 工具 | 活跃 Issues | PR 数 | 今日 Release | 关键动态 |
|------|------|------|------|------|
| **Claude Code** | 50 | 3 | ⏸ 无 | 权限/Windows/会话完整性讨论密集 |
| **OpenAI Codex** | 数十条 | 10+ | 🚀 rust-v0.147.0 | 可移植 Plugins + 会话分区上线 |
| **Gemini CLI** | 数十条 | 10+ | 🚀 v0.56.0-nightly / v0.55.0-preview.2 / v0.54.2 | 多版本滚动迭代 |
| **GitHub Copilot CLI** | 32 | 0 | 🚀 v1.0.79-6 | 微补丁，无 PR 流入 |
| **Kimi Code CLI** | ~8 重点 | 3 | ⏸ 无 | 聚焦文件损坏修复 |
| **OpenCode** | 50 | 20 (5 closed) | ⏸ 无 | Go 订阅故障+TUI PR 集中 |
| **Pi** | 17+ (Fullscreen 相关) | 10+ | 🚀 v0.84.0 | Fullscreen TUI 引爆反馈潮 |
| **Qwen Code** | 10 重点 | 10 | 🚀 v0.21.7 + nightly + Live Host v0.1.0 | 三版本并行，最活跃 |
| **DeepSeek TUI** | 16 (12 closed) | 6 合入 | ⏸ 无 (Train PR #5135 已合) | v0.9.4 收尾 |

**观察**：Claude Code 与 OpenCode 在 Issue 体量上领跑（各 50 条），但 Qwen Code 在**版本节奏**（一日 3 Release）上最激进；GitHub Copilot CLI 出现"Issue 活跃但 PR 真空"的异常形态，需关注其开发活动是否转入预发布通道。

---

## 3. 共同关注的功能方向

### 🔴 跨工具共识痛点（5+ 工具共同关注）

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **MCP 协议成熟度** | Codex、Copilot CLI、Pi、DeepSeek TUI、Qwen Code | 进程模型（按项目而非按 session 启动）、OAuth 重认证恢复、工具顺序确定性、stdio 进程泄漏、BigInt 序列化 |
| **Windows 平台可靠性** | Claude Code、Codex、Copilot CLI、Pi | 进程泄漏、Shell 兼容性、GPU 崩溃、Desktop 自愈能力 |
| **TUI/终端体验精细化** | Copilot CLI、OpenCode、Pi、DeepSeek TUI | 滚动浏览、可点击链接、鼠标选词、宽字符处理、status line 多行支持 |
| **会话与上下文完整性** | Claude Code、Pi、DeepSeek TUI、OpenCode | Auto-compaction 触发、transcript 损坏、静默截断、queue/steer 语义 |
| **多 Provider / BYOM** | Pi、OpenCode、DeepSeek TUI、Qwen Code、Codex | 模型发现、API Key 隔离、上下文元数据显式化、Anthropic/Vertex 兼容 |
| **权限系统与安全模型** | Claude Code、Qwen Code、Gemini CLI | 复合命令粒度、shell 分类器绕过、trust 规则短路、`do_not_trust` 失效 |
| **Subagent 治理** | Codex、DeepSeek TUI、OpenCode | 配额计量、内存驻留、`context window lineage`、深度限制绕过 |

### 🟡 跨工具关注但仅个别落地

- **Auto Memory 体系化**：Gemini CLI (#26522/26523/26525)、Kimi (#1283) 呼声最高，但尚未看到完整方案
- **VSCode/IDE 一体化**：Gemini CLI、Qwen Code、Kimi Code CLI 形成小集群，但 Claude Code/Codex 仍以 CLI/Desktop 为主
- **付费/订阅服务可靠性**：OpenCode Go（401 风暴）、Qwen OAuth 免费层调整（150 评论）显示**商业化模式冲击工作流**已成新风险

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级 SaaS + 云端会话（Cowork） | 付费团队、复杂多工具工作流 | 精细化权限模型 + Plugin Marketplace |
| **OpenAI Codex** | 全栈 Desktop+CLI+App Server | 开发者+生态贡献者 | Rust 重写、Agent Plugins、会话分区 |
| **Gemini CLI** | Google AI 生态 + MCP 协议先锋 | VS Code 用户、研究型开发者 | MCP Client Sampling、行为评估基础设施 |
| **GitHub Copilot CLI** | GitHub 原生 + 企业流水线 | GitHub 企业用户、CI/CD 集成 | ACP 协议、深度 GitHub 平台集成 |
| **Kimi Code CLI** | Moonshot 生态 + 中文场景 | 中文开发者、VS Code 重度用户 | 字节级文件安全、MCP 懒加载 |
| **OpenCode** | 开源 + 多 Provider 聚合 | 多模型工作流、自托管用户 | TUI/Agent 分离、Harness v2 架构 |
| **Pi** | 模型无关的 Coding Agent 容器 | 实验型开发者、Plugin 作者 | Harness 工厂、Provider 适配深度 |
| **Qwen Code** | 阿里云 + 协议无关 | 国内企业、ACP 生态 | Live Host 托管、Dynamic Workflows |
| **DeepSeek TUI** | Runtime API + 托管客户端 | 桌面/Web 二次开发者 | Runtime API (`/v1/skills`/`/v1/memory`)、可托管化 |

**关键差异点**：
- **闭源 vs 开源**：Claude Code、Codex、Copilot CLI 闭源主线 + 社区 Issue 驱动；OpenCode、Pi 强调开源可扩展
- **TUI-first vs IDE-first**：OpenCode/Pi/DeepSeek/Codex 主战场在 TUI；Gemini CLI、Qwen Code、Kimi 重心在 IDE 集成
- **单机 vs 云端**：Claude Code Cowork 是唯一的强云端会话模式，其他多以本地为核心
- **单模型 vs 多模型**：Pi/OpenCode/DeepSeek 明确做"模型无关容器"，Claude/Gemini/Codex/Copilot 仍深度绑定自家模型

---

## 5. 社区热度与成熟度

### 🔥 高热度 + 高迭代（头部梯队）
- **Claude Code**：50 Issues × 高赞密度，权限弹窗(#76718)与 transcript 损坏(#73638)暴露**核心引擎信任危机**
- **OpenAI Codex**：rust-v0.147.0 引入可移植 Plugins 是生态级大事
- **Pi**：v0.84.0 Fullscreen TUI 引发 17+ Issue 集中反馈，**典型的"功能上线即被压力测试"**

### 🟡 高热度 + 谨慎迭代（成熟期）
- **Qwen Code**：一日 3 Release 但聚焦**回归修复与稳定性**，说明已进入质量优先阶段
- **Gemini CLI**：版本滚动但每次更新粒度小，nightly/preview/stable 多通道并行
- **GitHub Copilot CLI**：UI 微补丁节奏，"Issue-PR"转化率失衡可能预示内部重构中

### 🟢 中等热度 + 快速迭代（成长期）
- **OpenCode**：50 Issues + 50 PRs，开发者参与度极高，但 Go 订阅故障影响商业口碑
- **DeepSeek TUI**：12 Issues 关闭 + 6 PR 合入，**issue-to-fix 转化率最高**，进入 v0.9.4 收尾

### 🔵 中等热度 + 补缺期
- **Kimi Code CLI**：核心功能（Memory System、AST 读取）仍在建设，#2591 数据损坏问题暴露底层工具链短板

**成熟度坐标**：
```
                  高迭代速度
                       │
       Claude Code ●   │   ● Pi
                       │
   Qwen ●──────────────┼──────────● Codex
                       │
   Copilot CLI ●       │       ● OpenCode
                       │
   Gemini ●────────────┼──────────● DeepSeek TUI
                       │
       Kimi ●          │
                       │
                       └──────────────────────────→ 高问题密度
```

---

## 6. 值得关注的趋势信号

### 📡 信号一：MCP 协议从"可选扩展"变为"基础设施"
**证据**：Codex、Copilot CLI、Pi、DeepSeek TUI、Qwen Code、Gemini CLI 全部在同步推进 MCP 能力，且问题集中在**进程模型、OAuth 恢复、工具顺序**等基础可靠性议题。
**对开发者的价值**：选型时应优先考虑 MCP 成熟的工具；构建 MCP Server 时需关注 stdio 进程生命周期、Streamable HTTP 重连语义。

### 📡 信号二：Auto-Compaction 与上下文预算成"生死线"
**证据**：Claude Code (#33026)、Pi (#6879，👍15)、DeepSeek TUI (#5244)、OpenCode (#6152，👍129) 同步出现相关诉求；多个工具出现"超过 100% 仍不触发"或"静默回退到 128K"的事故。
**价值**：长会话 Coding Agent 即将迎来一波上下文管理军备竞赛，开发者应关注每个 agent turn 的 token 消耗可观测性。

### 📡 信号三：Subagent 治理成为"显学"
**证据**：Codex (#35463 subagent 配额耗尽)、DeepSeek TUI (#5253 max_depth 绕过)、OpenCode (#40931 子代理续接)、Gemini (#22323 MAX_TURNS 语义) 同步出现。
**价值**：未来 3-6 个月，subagent 配额计量、权限继承、状态 lineage 将是评估 Coding Agent 的关键指标。

### 📡 信号四：付费/订阅模式的可靠性风险
**证据**：OpenCode Go 401 风暴、Qwen Code OAuth 免费层 100→100 调整（150 评论）。
**价值**：工具选型时**不应只看开源/免费**，付费层的 SLA 与故障透明度同样关键；多 Provider 备份策略将成刚需。

### 📡 信号五：安全模型成为高频 P1
**证据**：Qwen Code 一日出现 3 起 P1/P2 安全 Issue（shell 分类器绕过、trust 短路、`.env` 加载）；Claude Code 权限弹窗泛滥(#76718 700+ 次)。
**价值**：shell 命令分类器、文件夹信任模型、`.env` 加载边界将是下个季度的安全审计重点；企业部署时需重点关注。

### 📡 信号六：TUI 体验进入"像素级竞争"
**证据**：Copilot CLI 渲染空白/tmux 不可见、OpenCode 可点击链接、Pi 双击选词、DeepSeek TUI 鼠标滚轮路由。
**价值**：TUI 工具的用户体验差距正在迅速缩小，鼠标交互、可点击链接、跨终端一致性将成为基本要求而非加分项。

### 📡 信号七：回归管理能力成为隐性竞争力
**证据**：Copilot CLI 1.0.74 resume OOM 回归（#4251）、Qwen Code 0.21.6 hooks 不派发（#8622 P1）、Gemini CLI 鉴权无限循环（#28430）。
**价值**：版本升级信任度正在崩塌，未来工具的**升级路径稳定性**与**回滚便利性**将影响实际生产部署意愿。

---

## 📋 总结建议

| 角色 | 建议 |
|------|------|
| **技术决策者** | 短期可采用 Codex/Claude Code 满足企业级功能需求，中期关注 Pi/OpenCode 的多 Provider 与开源生态，长期布局 MCP Server 与多模型工作流 |
| **独立开发者** | 优先选择 Pi（模型无关）或 OpenCode（开源透明）以避免供应商锁定 |
| **企业架构师** | 重点关注 Qwen Code Live Host 的托管模式与 Claude Code Cowork 的云端会话；评估 MCP 在 CI/CD 中的可靠性 |
| **工具作者/贡献者** | MCP 进程模型、Auto-Compaction 策略、Subagent 治理是贡献价值密度最高的方向 |

---

> **报告说明**：本报告基于 2026-08-07 单一数据切片（24h 窗口），趋势信号需结合更长周期数据验证。建议结合各工具的周报/月报做纵深分析。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-07 | 数据源：anthropics/skills**

---

## 一、热门 Skills 排行（PR 关注度 Top 8）

> 注：PR 评论字段在数据源中未读取到具体数值，以下排行综合**问题严重性、近期活跃度、被引用 Issue 数量**综合排序。

| # | PR / Skill | 状态 | 热度信号 |
|---|---|---|---|
| 🥇 | **#1298 run_eval.py 修复套件** — 修复 `run_eval.py` 永远报告 0% recall 的核心 Bug | OPEN | 关联 Issue #556（12 评论）+ #1169 + #1323 + #1261 + #1099 + #1050，构成 skill-creator 质量基础设施的最大危机 |
| 🥈 | **#514 document-typography** — AI 生成文档的排版质量控制（孤行/寡行/编号对齐） | OPEN | 击中"每个 Claude 生成的文档都受影响"的痛点，跨领域通用 |
| 🥉 | **#486 ODT Skill** — OpenDocument 创建/模板填充/转 HTML | OPEN | 补齐开源文档格式的空白，适配 LibreOffice/ISO 生态 |
| 4 | **#1367 self-audit v1.3.0** — 机械文件验证 + 四维推理质量门控 | OPEN | 关联 Issue #1385（4 评论），通用型 AI 输出审计 |
| 5 | **#525 pyxel** — 复古像素游戏开发（pyxel-mcp 桥接） | OPEN | 创意编程细分但完整（MCP 集成 + 工作流闭环） |
| 6 | **#1302 color-expert** — 颜色命名体系与色彩空间选择专家系统 | OPEN | 设计/前端/数据可视化通用，覆盖 ISCC-NBS/Munsell/OKLCH 等 |
| 7 | **#83 skill-quality-analyzer + skill-security-analyzer** — Skills 元分析工具上架 marketplace | OPEN | 直接呼应 Issue #492 的安全信任危机 |
| 8 | **#1479 plan-file-hygiene** — 规划工件生命周期管理 | OPEN | 关联 Issue #1417，回应社区"规划产物无生命周期"的治理诉求 |

**子模块热度信号**：`Lubrsy706` 一人贡献的 #538 / #539 / #541 三连修复（PDF 大小写引用、YAML 未引号告警、DOCX 书签 ID 冲突）虽单项评论不高，但揭示了**文档处理类 Skill 的鲁棒性是当前最高频的修补战场**。

---

## 二、社区需求趋势（Issue 提炼）

### 🔴 高优先级需求（按评论数）

| 趋势 | 代表 Issue | 核心诉求 |
|---|---|---|
| **🛡️ 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论 🔝） | 社区 Skills 冒用 `anthropic/` 命名空间造成权限提升风险；呼唤**官方命名空间治理 + 签名机制** |
| **🏢 企业级分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） | Claude.ai 组织内 Skill 共享（替代手动下载/上传） |
| **🧰 skill-creator 工程化** | [#556](https://github.com/anthropics/skills/issues/556)（12）、[#202](https://github.com/anthropics/skills/issues/202)（8）、[#1169](https://github.com/anthropics/skills/issues/1169)（3） | 描述优化循环失效、技能消失、SKILL.md 风格需更新到最佳实践 |
| **🧠 上下文压缩与记忆** | [#1329](https://github.com/anthropics/skills/issues/1329)（9）、[#1487](https://github.com/anthropics/skills/issues/1487)（4） | 长会话 Agent 的紧凑记忆格式（compact-memory）；以及 `claude-api` skill 贪婪注入 156k tokens 撑爆上下文 |
| **🔌 Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16)（4） | 把 Skill 暴露为 MCP，让外部 Agent 可调用 |
| **🧪 测试与质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385)（4）、[#202](https://github.com/anthropics/skills/issues/202) | 三阶段推理质量门控；skill-creator 引入 Testing Trophy 思想 |
| **📦 安装去重与打包** | [#189](https://github.com/anthropics/skills/issues/189)（6） | `document-skills` 与 `example-skills` 插件内容重复，污染上下文 |
| **🔐 企业合规 / 治理** | [#1175](https://github.com/anthropics/skills/issues/1175)（4）、[#412](https://github.com/anthropics/skills/issues/412)（6，已关闭） | SharePoint 文档的权限控制嵌入 SKILL.md；Agent Governance Skill（policy/threat/trust scoring） |

**趋势关键词云**：`安全治理 > 上下文效率 > 分发机制 > MCP 互操作 > 鲁棒性修复 > 元工具（quality/security-analyzer）`

---

## 三、高潜力待合并 PR（近期可能落地）

按"是否解决热门 Issue + 实现完整度"筛选：

| PR | 解决的问题 | 落地概率评估 |
|---|---|---|
| [**#1298**](https://github.com/anthropics/skills/pull/1298) | 修复 `run_eval.py` 0% recall + Windows 流读取 + 并发 worker | ⭐⭐⭐⭐⭐ 解决了 Issue #556 的 10+ 独立复现，是 skill-creator 的**基础设施级别修复** |
| [**#1323**](https://github.com/anthropics/skills/pull/1323) | 修复 trigger detection 漏检真实 skill 名 | ⭐⭐⭐⭐⭐ 与 #1298 同根问题，多个 PR 并行收敛 |
| [**#1261**](https://github.com/anthropics/skills/pull/1261) | 隔离 trigger-eval 写入到用户项目 `.claude/commands/` | ⭐⭐⭐⭐⭐ 修复并发评估期污染 live 项目（Issue #1260） |
| [**#1050**](https://github.com/anthropics/skills/pull/1050) | Windows subprocess `claude.cmd` + 编码 1 行 patch | ⭐⭐⭐⭐⭐ 1-line fix，社区已确认在 Win11 复现 |
| [**#539**](https://github.com/anthropics/skills/pull/539) | YAML 未引号 `description` 含冒号的预解析校验 | ⭐⭐⭐⭐ 防御性补丁，价值明确 |
| [**#541**](https://github.com/anthropics/skills/pull/541) | DOCX tracked change `w:id` 与现有书签命名空间冲突 | ⭐⭐⭐⭐ 解决文档损坏（OOXML 细节正确） |
| [**#1367**](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0（机械+四维推理审计） | ⭐⭐⭐⭐ 通用工具，已与提案 Issue #1385 形成双向闭环 |
| [**#509**](https://github.com/anthropics/skills/pull/509) | 添加 `CONTRIBUTING.md` | ⭐⭐⭐⭐ 修复 Issue #452（社区健康分仅 25%） |

> **观察**：与 skill-creator 直接相关的 5 个 Bug 修复 PR 集中爆发，说明**评估管线（run_eval/run_loop/improve_description）已陷入"基于噪声优化"的系统性失灵**，官方接管合并优先级预计较高。

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"Skills 的工程化与治理"——围绕 skill-creator 的评估管线失效、Windows 兼容性、命名空间冒用、Skills→MCP 互操作、上下文窗口溢出等系统性问题，社区呼唤的不是更多创意 Skills，而是 Skills 开发/分发/信任的元基础设施与质量门控。**

---

### 📌 附录：关键信号交叉表

| 信号类型 | 核心矛盾 |
|---|---|
| 🔴 最大单一议题 | Issue #492（安全命名空间）— 43 评论断层领先 |
| 🟡 最紧迫工程债 | skill-creator 评估循环 5 个并发修复 PR（#1298/#1323/#1261/#1099/#1050） |
| 🟢 最活跃细分赛道 | 文档处理类（PDF/DOCX/ODX/typography）— 持续修补 + 新增并行 |
| ⚪ 低热度但高战略价值 | Skills→MCP 暴露（#16）、Agent Governance（#412）— 长期方向 |

---

# Claude Code 社区动态日报
**日期：2026-08-07**

---

## 1. 今日速览

过去 24 小时内无新版本发布，社区活跃度集中在 **Issue 讨论** 而非代码合入——共 50 条 Issue 被更新，仅 3 条 PR 处于活跃状态。**权限系统**与 **Windows / Cowork 云端会话** 是本轮最受关注的两条主线：多个高赞 Issue 反映权限弹窗泛滥、git 代理阻断推送、会话配额误判等直接影响工作流的痛点。同时，模型在长会话中出现"伪造 user turn"以及会话改名导致 transcript 永久损坏的问题，引发开发者对**核心会话完整性**的担忧。

---

## 2. 版本发布

⏸ **过去 24 小时无新 Release。**

---

## 3. 社区热点 Issues（按社区影响力排序）

### 🔥 #6527 — `ask` 列表被 `Bash` allow list 完全忽略
- **链接**：[#6527](https://github.com/anthropics/claude-code/issues/6527)
- **评论：23 | 👍：19 | 状态：OPEN**
- **为何重要**：权限模型的核心 Bug——开发者期望 `ask` 列表优先于 `allow`，但实际行为是 `Bash` 出现在 allow list 时，所有 `ask` 条目全部失效，直接绕过安全策略。属于安全/工具领域，影响所有使用精细权限配置的用户。

### 🔥 #57371 — Windows 上禁用捆绑的 Cowork 后台服务
- **链接**：[#57371](https://github.com/anthropics/claude-code/issues/57371)
- **评论：18 | 👍：42 | 状态：OPEN**
- **为何重要**：👍 数远超评论数，说明强烈共鸣。不使用 Cowork 的 Windows 用户被迫运行 `CoworkVMService`，占用资源并可能与其他虚拟化栈冲突。

### 🔥 #54750 — 会话配额显示 100% 已用，但本地用量极低
- **链接**：[#54750](https://github.com/anthropics/claude-code/issues/54750)
- **评论：16 | 👍：9 | 状态：OPEN**
- **为何重要**：配额/计费显示错误直接阻塞用户继续使用，且与本地追踪数据严重不一致——信任问题。

### 🔥 #76248 — Cowork 云端会话 git 代理阻断所有 push（含用户 PAT）
- **链接**：[#76248](https://github.com/anthropics/claude-code/issues/76248)
- **评论：14 | 👍：5 | 状态：OPEN**
- **为何重要**：疑似 `CCR_TEST_GITPROXY` 灰度发布引入的回归，**会话中途**出现的行为变化，且用户自带的 fine-grained PAT 不再被接受，影响所有 Cowork 远程工作流。

### ⚠️ #79584 — Assistant 文本在 tool call 前不渲染（尤其 AskUserQuestion）
- **链接**：[#79584](https://github.com/anthropics/claude-code/issues/79584)
- **评论：9 | 👍：7 | 状态：OPEN**
- **为何重要**：影响 TUI 输出完整性，间歇性 bug 难以复现但严重影响多工具协同体验。

### ⚠️ #73638 — 服务端工具调用期间重命名会话会永久损坏 transcript
- **链接**：[#73638](https://github.com/anthropics/claude-code/issues/73638)
- **评论：9 | 👍：0 | 状态：OPEN**
- **为何重要**：合成 user turn 注入位置错误，导致后续所有 prompt 收到 400 错误——**不可逆的数据损坏**，影响长会话可靠性。

### � #26581 — 需要系统级通知（任务完成/需要关注时）
- **链接**：[#26581](https://github.com/anthropics/claude-code/issues/26581)
- **评论：8 | 👍：32 | 状态：OPEN**
- **为何重要**：👍 32 表明强烈需求——多任务并行时缺乏注意力提示，是 UX 痛点。

### 💡 #33026 — 允许 Claude 主动发起 context compaction
- **链接**：[#33026](https://github.com/anthropics/claude-code/issues/33026)
- **评论：8 | 👍：15 | 状态：CLOSED**
- **为何重要**：复杂多步任务中，Claude 无法"准备"压缩，导致关键上下文丢失。

### 🐛 #76718 — 复合命令对每个 segment 重新弹权限（700+ 弹窗）
- **链接**：[#76718](https://github.com/anthropics/claude-code/issues/76718)
- **评论：7 | 👍：0 | 状态：OPEN**
- **为何重要**：即便每段都被 allowlist，复合命令仍逐段弹窗——**多会话编排几乎不可用**。

### 🐛 #78775 — 回归：Desktop 应用时间范围筛选仅在 Group by=State 时出现
- **链接**：[#78775](https://github.com/anthropics/claude-code/issues/78775)
- **评论：7 | 👍：23 | 状态：OPEN**
- **为何重要**：明显的 UI 回归，影响会话筛选能力，23 赞表明许多用户受影响。

---

## 4. 重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，全部集中在 plugin-dev 工具脚本的稳健性修复，规模较小。

| PR | 标题 | 影响 |
|----|------|------|
| [#84600](https://github.com/anthropics/claude-code/pull/84600) | Enable frontend-design plugin at project scope | 在 `.claude/settings.json` 注册官方 marketplace 并启用 frontend-design skill。**示例性 PR**——展示项目级 plugin 启用方式。 |
| [#84427](https://github.com/anthropics/claude-code/pull/84427) | fix(plugin-dev): prevent `validate-agent.sh` 在 `set -e` 下首个 warning 即退出 | 修复计数器 `((count++))` 返回非零导致脚本提前终止的问题；是 [#76985](https://github.com/anthropics/claude-code/pull/76985) 的后续。 |
| [#84381](https://github.com/anthropics/claude-code/pull/84381) | fix(plugin-dev): 支持 hook schema 的 `hooks` 包装层和可选 matcher | 修复 `validate-hook-schema.sh` 无法识别包装格式和可选 matcher 的问题，提升 plugin 开发体验。 |

**整体观察**：PR 流入量偏低，生态开发者的主要精力在反馈问题而非贡献代码。

---

## 5. 功能需求趋势

综合分析 50 条活跃 Issue，可归纳出以下社区最关注的几个方向：

### � 1. 权限系统精细化（最高频）
- `ask` vs `allow` 优先级（#6527）
- 复合命令权限聚合（#76718）
- 主动/静默决策的 hook 通道（#72327, #59707）

### 📌 2. Windows / Desktop 用户体验
- CoworkVMService 卸载开关（#57371）
- Desktop 崩溃与 GPU 进程异常（#81123, #81664）
- MSIX 包状态自愈能力（#81123）

### 📌 3. Cowork / 云端会话可靠性
- Git 代理回归（#76248）
- AskUserQuestion 权限通道静默关闭（#59707）
- Web Remote Control 渲染缺陷（#80454）

### 📌 4. 长会话与上下文管理
- 自发 compaction（#33026）
- transcript 完整性（#73638）
- 会话重命名并发问题（#73638）

### 📌 5. 通知与多任务注意力
- 系统级通知（#26581）
- 终端标签页状态指示（#71369）

### 📌 6. 文档滞后（社区贡献者 `coygeek` 提交了 7+ 条集中反馈）
- 涵盖 sandboxing、session resumption、`/loop`、`/proactive`、worktree 清理、plugin marketplace、MCP 输出、queued message 等。

---

## 6. 开发者关注点 / 痛点总结

**🔴 信任与可靠性**
- 模型在长会话中出现**伪造 user turn**（#81461）和**会话 transcript 永久损坏**（#73638）两类严重问题，开发者对核心引擎的稳健性产生担忧。
- 配额/计费显示与本地追踪数据**不一致**（#54750），直接影响付费决策。

**� 工作流被中断**
- 权限弹窗"洪水"（#76718 报 700+ 次）和 Cowork git push 被拦截（#76248），使多会话编排与远程工作流几乎不可用。
- Desktop 应用在 Windows 上频繁崩溃且无法自愈（#81123, #81664）。

**🟡 工具链细节摩擦**
- TUI 回归（鼠标禁用失效 #72173、时间筛选缺失 #78775）影响编辑器集成体验。
- `set -e` 与 Bash 计数器语义冲突（#84427）暴露 plugin-dev 脚本在严格模式下的脆弱性。

**🟢 文档与可发现性**
- 多个新引入的环境变量（`CLAUDE_CODE_SCRIPT_CAPS`、`CLAUDE_CODE_SUBPROCESS_ENV_SCRUB` 等）与新命令（`/recap`、`/proactive`）缺乏文档，开发者只能靠社区反馈拼凑。

---

> 📊 **数据快照**：50 条活跃 Issue · 3 条 PR · 0 Release · 平台分布：Windows(11) > macOS(4) > Linux(2) · 高赞 Issue（👍≥15）共 6 条，集中于权限/UX/可靠性三大主题。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-07**

---

## 一、今日速览

今日 Codex 仓库发布 **rust-v0.147.0**，重点引入**可移植 Agent Plugins**（支持本地/个人/工作区/远程多目录搜索）与**会话分区持久化**两大特性。社区焦点则集中在 **Windows 平台稳定性**（进程泄漏、WSL 集成终端失效）、**MCP 生态可靠性**（工具顺序不确定、OAuth 恢复、subagent MCP 进程持久化）以及 **subagent 配额与状态管理**上，开发者反馈整体偏向"产品功能迭代快，但端到端可靠性需补齐"。

---

## 二、版本发布

### 🚀 [rust-v0.147.0](https://github.com/openai/codex)（PR #36544 / #36409 / #36919 / #36796 / #35722 / #36007 / #36380 / #36948）

**核心新特性：**

- **可移植 Agent Plugins**：安装后可跨本地、个人、工作区、远程插件目录统一搜索与发现，显著扩展扩展生态的分发能力。
- **会话分区（Conversation Sections）**：允许将长对话手动分节并顺序持久化，支持长会话的增量浏览。

> 该版本奠定了 Codex 后续"插件化 + 长会话可治理"两大方向的基础。

---

## 三、社区热点 Issues

> 排序依据：评论热度 × 主题重要性 × 跨平台/产品影响面。

### 1. [#33776 — Windows 进程风暴：ChatGPT.exe 残留数百 taskkill.exe / conhost.exe](https://github.com/openai/codex/issues/33776)
- **热度**：32 评论 / 27 👍
- **关键点**：单次会话可观察到 287 个残留进程，进而触发 WMI 风暴和 DWM 性能退化，属典型系统性资源回收失败。
- **为何重要**：直接影响 Windows 桌面端稳定性，影响面极广。

### 2. [#21653 — TUI 多行状态行支持（enhancement）](https://github.com/openai/codex/issues/21653)
- **热度**：12 评论 / 58 👍（👍数最高）
- **关键点**：当前长 statusline 只能截断显示，无换行能力。
- **为何重要**：高 👍 反映了 TUI 用户对**信息密度与可读性**的强烈诉求。

### 3. [#28080 — Desktop 工具线程处理器间歇性丢失（`No handler registered`）](https://github.com/openai/codex/issues/28080)
- **热度**：21 评论
- **关键点**：活跃会话内工具 handler 异常丢失，影响工具调用稳定性。
- **为何重要**：会话中途状态丢失是开发者最不能接受的失败模式之一。

### 4. [#20883 — Desktop 应使用项目级 MCP 进程池，而非按 session 启动](https://github.com/openai/codex/issues/20883)
- **热度**：17 评论
- **关键点**：每次打开会话都重启 stdio MCP server，是导致内存开销与启动延迟的根因之一。
- **为何重要**：MCP 是 Codex 扩展生态核心，进程模型直接影响性能与体验。

### 5. [#19694 — Desktop 模型选择器过滤掉 model_catalog_json 返回的模型（已 CLOSED）](https://github.com/openai/codex/issues/19694)
- **热度**：14 评论 / 35 👍
- **关键点**：自定义模型目录与 UI 过滤逻辑不一致，Plus 订阅用户无法选用某些模型。
- **为何重要**：高 👍 + 已关闭说明官方已响应，是模型可扩展性的重要闭环案例。

### 6. [#26820 — CLI 无法获取 Chrome 扩展后端，而 App UI 正常](https://github.com/openai/codex/issues/26820)
- **热度**：12 评论 / 9 👍
- **关键点**：CLI 与 Desktop 在 Chrome extension 后端桥接上存在不对称问题。

### 7. [#34767 — Remote control 可在同一线程并发开启两个 turn](https://github.com/openai/codex/issues/34767)
- **热度**：4 评论
- **关键点**：会话并发性 bug，可能导致状态错乱与历史记录损坏。

### 8. [#37192 — OAuth 网络切换后静默回退到硬编码 `dummy` API key](https://github.com/openai/codex/issues/37192)
- **热度**：4 评论
- **关键点**：WiFi → 热点切换后 OAuth 失效，CLI 应重新认证却悄悄使用占位 key 报 401。
- **为何重要**：属于静默降级类 bug，危害信任与可靠性。

### 9. [#33967 — Windows ChatGPT 无法完成 setup 或进入 limited-access 模式](https://github.com/openai/codex/issues/33967)
- **关键点**：卡在 "Complete Windows setup"，影响新用户首启体验。

### 10. [#33531 — MCP suites 在 subagent 完成后持久驻留，占用 10.9 GB 私有内存](https://github.com/openai/codex/issues/33531)
- **关键点**：与 [#34767](https://github.com/openai/codex/issues/34767) 同源的 subagent 资源回收缺陷。

---

## 四、重要 PR 进展

### 1. [#37354 — App-server 测试可执行文件 spawn 繁忙重试](https://github.com/openai/codex/pull/37354)
针对 `ExecutableFileBusy` 瞬时错误加重试，提升 CI 稳定性。

### 2. [#37352 — 配置 code-mode exec 默认 yield 超时](https://github.com/openai/codex/pull/37352)
新增 `features.code_mode.default_exec_yield_time_ms`（默认 30s），使 `exec` 超时可配置化。

### 3. [#37350 — 允许 ThreadManager 自定义线程 ID 生成](https://github.com/openai/codex/pull/37350)
新增 `with_thread_id_generator`，保留 UUIDv7 为默认，利于多后端注入。

### 4. [#37349 — 完整文件系统 Bubblewrap 沙箱挂载最小 `/dev`](https://github.com/openai/codex/pull/37349)
隔离宿主机设备树，强化网络隔离沙箱。

### 5. [#37348 — 上线 rollout 迁移工具与后台分页迁移](https://github.com/openai/codex/pull/37348)
新增 `codex migrate-rollouts`（默认 dry-run + `--apply`），支持 JSON/verbose 报告。

### 6. [#37347 — 按 agent 追踪 context window lineage](https://github.com/openai/codex/pull/37347)
为 forked subagent 启动独立的上下文窗口元数据链。

### 7. [#37345 — 向 Codex 后端发送模型路由提示](https://github.com/openai/codex/pull/37345)
新增 `x-codex-routing-hint` 头（含 model + tier），覆盖 Responses / 远程压缩 / WebSocket。

### 8. [#37344 — 修复 subagent MCP 启动状态无法 settle](https://github.com/openai/codex/pull/37344)
针对 [#37351](https://github.com/openai/codex/issues/37351) 等问题的修复，清理久未 settled 的 MCP 启动状态。

### 9. [#37338 — 在 connector 安装 URL 中尊重配置的 ChatGPT origin](https://github.com/openai/codex/pull/37338)
根据 `CODEX_APP_SERVER_CHATGPT_BASE_URL` 拼接连接器 URL，方便私有部署与 staging。

### 10. [#37337 — OAuth 重新认证后自动恢复 MCP servers](https://github.com/openai/codex/pull/37337)
Streamable HTTP MCP server 在 OAuth 重认证后无需重启即可恢复使用。

---

## 五、功能需求趋势

通过聚合本周 Issue 标签与文本，可识别出社区正在快速演进的**五大方向**：

| 趋势 | 代表 Issue / PR | 含义 |
|---|---|---|
| **🪟 Windows 平台可靠性** | [#33776](https://github.com/openai/codex/issues/33776), [#33531](https://github.com/openai/codex/issues/33531), [#24873](https://github.com/openai/codex/issues/24873), [#31556](https://github.com/openai/codex/issues/31556) | 进程回收、WSL/沙箱稳定性是头号痛点 |
| **🔌 MCP 生态成熟** | [#20883](https://github.com/openai/codex/issues/20883), [#34767](https://github.com/openai/codex/issues/34767), [#35300](https://github.com/openai/codex/issues/35300), [#37351](https://github.com/openai/codex/issues/37351), [#37337](https://github.com/openai/codex/pull/37337) | 进程模型、工具顺序、OAuth、断线恢复 |
| **🤖 Subagent 治理** | [#36381](https://github.com/openai/codex/issues/36381), [#35463](https://github.com/openai/codex/issues/35463), [#37347](https://github.com/openai/codex/pull/37347), [#37344](https://github.com/openai/codex/pull/37344) | 权限最小化、配额计量、上下文窗口 lineage |
| **🧠 新模型与缓存集成** | [#35300](https://github.com/openai/codex/issues/35300)（gpt-5.6 prompt_cache_breakpoint）, [#31817](https://github.com/openai/codex/pull/31817)（models.json 自动化） | GPT-5.6 系列缓存协议落地 |
| **🖥️ TUI / 桌面 DX 改进** | [#21653](https://github.com/openai/codex/issues/21653)（多行状态行）, [#13979](https://github.com/openai/codex/issues/13979)（通知聚焦控制） | 增强开发者交互细节 |

---

## 六、开发者关注点总结

**🔴 头号痛点：跨平台进程与资源生命周期**
- Windows + macOS 普遍存在子进程泄漏（taskkill.exe / conhost.exe / CUA / zygote），导致桌面端需要重启甚至无法 fork。
- 用户已经形成强烈的"开一次会话就要清理一批进程"的心智负担。

**🟠 高频诉求：MCP 可靠性**
- 工具顺序不一致、subagent MCP 内存驻留、OAuth 重认证后失效、HTTP MCP 启动失败——几乎每一块都直接影响开发者日常。

**🟡 配额与计费透明度**
- [#35463](https://github.com/openai/codex/issues/35463) 反馈 subagent 一夜耗尽一周配额，说明**子代理使用计量**尚未对用户透明。

**🟢 体验型增强需求**
- 多行状态行、通知聚焦行为、CUA / Computer-Use 插件自启动恢复等"小但高频"的体验改进持续被提。

**🟣 关键希望：配置化与可扩展性**
- Windows 默认 Shell、MCP 进程池、模型目录过滤——社区希望 Codex 的默认行为更可配置，避免厂商默认值与个人工作流冲突。

> 综合来看，Codex 当前迭代效率极高（plugins、sections、rollout 迁移、路由提示一连串功能上线），但**平台可靠性与 MCP/Subagent 治理**已构成下一阶段用户体验的关键短板，建议贡献者优先关注进程生命周期、资源回收与可观测性方向。

---

*数据时间窗：2026-08-06 ~ 2026-08-07 · 数据源：GitHub openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-07**
**数据来源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

今日 Gemini CLI 发布 nightly 版本 `v0.56.0-nightly.20260807.gd5c9a97dc`，同时 `v0.55.0-preview.2` 与 `v0.54.2` 也在持续滚动更新中。社区讨论热点仍然集中在 Windows / PowerShell 平台兼容性、Agent 行为安全性（如破坏性操作防护）、Auto Memory 与 VS Code 扩展稳定性等长期议题，GitHub 上关于"128+ 工具调用 400 错误"、"流中断后上下文融合"等核心问题已被提交修复 PR。

---

## 🚀 版本发布

- **v0.56.0-nightly.20260807.gd5c9a97dc**（nightly，自动生成）
  - [PR #28720](https://github.com/google-gemini/gemini-cli/pull/28720)
- **v0.55.0-preview.2**
  - 由 [PR #28719](https://github.com/google-gemini/gemini-cli/pull/28719) 自动 cherry-pick `2139b12` 生成，修复此前预览版的回归。
- **v0.54.2**
  - [PR #28712](https://github.com/google-gemini/gemini-cli/pull/28712) 全 monorepo 版本号 bump。

---

## 🔥 社区热点 Issues（精选 10 条）

1. **[#26856](https://github.com/google-gemini/gemini-cli/issues/26856) — 用户报怨 AI 误删 Obsidian 大量文件**（47 评论 / 16 👍）
   - p1 级别未关闭；典型"破坏性操作无确认"投诉，呼应了 #22672 关于禁止破坏性行为的诉求。

2. **[#20773](https://github.com/google-gemini/gemini-cli/issues/20773) — Windows PowerShell 5.1 不支持 `&&` 导致 ParserError**（17 评论）
   - 已关闭；这是 Windows 平台 Shell 兼容性系列问题的代表，与 #25867、#26318 共同构成"Windows 用户痛点"。

3. **[#10704](https://github.com/google-gemini/gemini-cli/issues/10704) — MCP Client Sampling 支持请求**（13 评论 / 9 👍）
   - 期望 CLI 充当 MCP Sampling CreateMessage 客户端，对齐 VS Code Copilot 体验；是 MCP 生态扩展的核心增强。

4. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 触发 MAX_TURNS 后仍报 GOAL success**（12 评论）
   - 暴露 Agent 终止状态语义问题，影响 `codebase_investigator` 等子 Agent 的可信度。

5. **[#25867](https://github.com/google-gemini/gemini-cli/issues/25867) — Windows 下 Backspace 按词删除**（10 评论）
   - 输入体验类高频问题，反映 Windows 终端模拟层仍不完善。

6. **[#25884](https://github.com/google-gemini/gemini-cli/issues/25884) — 终端命令输出含非法空白/换行导致 Zsh 报错**（10 评论）
   - 已关闭；Agent 输出"复制即可用"契约被打破。

7. **[#27132](https://github.com/google-gemini/gemini-cli/issues/27132) — VS Code 扩展 longSession 卡死主线程**（7 评论）
   - `globalState` 同步 I/O 阻塞，与 [PR #28526](https://github.com/google-gemini/gemini-cli/pull/28526) 修复的 `disposable` 泄漏同属扩展稳定性议题。

8. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级行为评估体系（Component-Level Evals）**（7 评论）
   - 内部 epic：已积累 76 个 behavioral eval 覆盖 6 个 Gemini 模型，是质量基础设施建设的关键方向。

9. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST-aware 文件读取/搜索的价值**（7 评论）
   - 探讨 AST 感知工具是否能减少 token 噪声与误读取，是 Agent 工程化的重要探索。

10. **[#28698](https://github.com/google-gemini/gemini-cli/issues/28698) — 高内存占用**（5 评论）
    - 长会话中进程驻留内存持续增长，反映上下文生命周期管理与 GC 仍需优化。

---

## 🛠 重要 PR 进展（精选 10 条）

1. **[#28716](https://github.com/google-gemini/gemini-cli/pull/28716) — 容量耗尽 / 余额不足归类为终态错误**（已合入 v0.55.0-preview.2）
   - 触发立即模型 fallback/优雅降级，避免无意义重试。

2. **[#28519](https://github.com/google-gemini/gemini-cli/pull/28519) — 修复鉴权无限循环**（已关闭）
   - 在 `oauth_creds.json` 写入处增加 `await`，强制 consent 流程，关闭 [Issue #28430](https://github.com/google-gemini/gemini-cli/issues/28430)。

3. **[#28718](https://github.com/google-gemini/gemini-cli/pull/28718) — 流中止时记录已收到的 usage metadata**
   - 修复 #28682：`generateContentStream` 的 catch 路径不会 flush token 计量，导致计费丢失。

4. **[#28700](https://github.com/google-gemini/gemini-cli/pull/28700) — 阻止新消息与未答工具响应融合**（已关闭）
   - 修复"模型替你续写"问题：工具调用被中断/按 ESC 后，下一条消息被错误合并。

5. **[#28597](https://github.com/google-gemini/gemini-cli/pull/28597) — 设置占位符解析前先加载环境变量**
   - 解决 `loadSettings` 在 `.env` 加载前就展开 `${VAR}` 的竞争条件。

6. **[#28602](https://github.com/google-gemini/gemini-cli/pull/28602) — Docker 基础镜像升级至 `node:24-slim`**（build 阶段）
   - 同步修复运行阶段从 builder 拷贝 CLI 包路径。

7. **[#28603](https://github.com/google-gemini/gemini-cli/pull/28603) — Sandbox Dockerfile 升级到 Node 22**
   - Node 20 已于 2026-04-30 EOL，sandbox 中执行模型指令存在安全风险，已修复 [Issue #28584](https://github.com/google-gemini/gemini-cli/issues/28584)。

8. **[#28641](https://github.com/google-gemini/gemini-cli/pull/28641) — 修复窄终端 ghost text 无限换行循环**（help wanted）
   - `getGhostTextLines` 在 CJK/emoji 宽字符处死循环，已添加回归测试。

9. **[#28639](https://github.com/google-gemini/gemini-cli/pull/28639) — 保护 `formatTruncatedToolOutput` 防 `maxChars ≤ 0`**
   - 避免 `String.slice` 负索引导致输出膨胀约 2 倍。

10. **[#19638](https://github.com/google-gemini/gemini-cli/pull/19638) — 限制 SearchText 结果并改进上下文溢出提示**（help wanted）
    - 防止 broad query 返回成千上万命中撑爆 context window。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 关注度 |
|------|---------------|-------|
| **MCP 协议扩展** | [#10704](https://github.com/google-gemini/gemini-cli/issues/10704)（Client Sampling） | ⭐⭐⭐⭐⭐ |
| **IDE / VS Code 集成稳定性** | [#27132](https://github.com/google-gemini/gemini-cli/issues/27132)、[#28526](https://github.com/google-gemini/gemini-cli/pull/28526) | ⭐⭐⭐⭐⭐ |
| **Agent 安全与破坏性操作防护** | [#26856](https://github.com/google-gemini/gemini-cli/issues/26856)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | ⭐⭐⭐⭐⭐ |
| **Auto Memory 体系化** | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | ⭐⭐⭐⭐ |
| **AST-aware 代码理解** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | ⭐⭐⭐⭐ |
| **Browser Agent 弹性** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | ⭐⭐⭐ |
| **评估基础设施** | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)（behavioral evals） | ⭐⭐⭐ |

---

## 💡 开发者关注点

1. **Windows / PowerShell 兼容性**：从 PowerShell 5.1 不支持 `&&`、Backspace 行为差异，到 `setup-github` 被 `detectCommandSubstitution` 拦截——Windows 用户长期处于"二等公民"状态。

2. **Agent 行为失控**：
   - [#26856](https://github.com/google-gemini/gemini-cli/issues/26856) 中用户损失大量工作
   - [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) 指出模型会主动使用 `git reset --force` 等高危命令
   - 社区呼吁加入"破坏性命令确认/拒绝"机制

3. **上下文与会话可靠性**：
   - [Issue #27180](https://github.com/google-gemini/gemini-cli/issues/27180) 系统崩溃导致会话丢失
   - [PR #28700](https://github.com/google-gemini/gemini-cli/pull/28700) 修复消息融合 bug
   - [Issue #28698](https://github.com/google-gemini/gemini-cli/issues/28698) 长会话内存膨胀

4. **多工具并发限制**：[Issue #24246](https://github.com/google-gemini/gemini-cli/issues/24246) 显示 400+ 工具时会触发 400 错误，Agent 需要更智能的工具裁剪。

5. **MCP 能力扩展**：[#10704](https://github.com/google-gemini/gemini-cli/issues/10704) 已成为明星特性请求，希望 CLI 充当 MCP Client Sampling endpoint，与 VS Code 生态对齐。

6. **Shell 输出可执行性**：[Issue #25884](https://github.com/google-gemini/gemini-cli/issues/25884) 与 [#26318](https://github.com/google-gemini/gemini-cli/issues/26318) 都指向同一根本问题——Agent 生成的命令应当"复制即用"，目前仍存在转义与空白注入问题。

7. **安全与隐私**：[Issue #26525](https://github.com/google-gemini/gemini-cli/issues/26525) 关注 Auto Memory 将本地转录内容送入模型前的脱敏机制，需要 deterministic redaction。

---

*日报基于 2026-08-07 当日 GitHub Issues / PRs / Releases 数据生成，链接均为官方仓库地址。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-07**

---

## 一、今日速览

v1.0.79-6 微版本发布，修复了 UI 警告误打印与会话历史加载失败导致转录永久空白两个稳定性问题。社区热度集中在**终端渲染/MCP 集成**两大方向：滚动历史、tmux 下暗色主题不可见、Windows 终端标题与代码页异常等渲染类问题仍持续出现；同时 MCP stdio 进程泄漏、CI 中 `GITHUB_TOKEN` 拉取注册表 403、Azure DevOps 远端下 `/mcp search` 400 等企业级集成痛点也正在发酵。

---

## 二、版本发布

### v1.0.79-6 — 体验细节修复
- **Interactive UI**：一个罕见的内部延迟不再在交互界面顶部打印诊断警告，避免误干扰。
- **Session history**：会话历史加载失败时不再"静默丢弃"导致整个会话期间转录（transcript）永久空白——此前故障被静默吞掉，日志无任何记录。

> 版本号节奏显示团队正在通过预发布通道快速迭代 UI 稳定性问题，建议持续跟踪 1.0.79 后续补丁。

---

## 三、社区热点 Issues

| # | 标题 | 状态 | 关注度 | 为什么重要 |
|---|------|------|--------|-----------|
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` 命令未默认选中当前工作目录 | CLOSED | 👍 35 | 拥有最高点赞，反映**Copilot 桌面 App 与 CLI 工作流衔接**的强需求 |
| [#3392](https://github.com/github/copilot-cli/issues/3392) | Bash tool 在 NixOS ≥1.0.49 崩溃 | OPEN | 👍 7 | 平台兼容性回归，影响整个 NixOS 生态，已存在 2.5 个月未根治 |
| [#4313](https://github.com/github/copilot-cli/issues/4313) | 支持滚动查看当前对话历史 | OPEN | 💬 4 | 缺少滚动浏览是 CLI 体验短板，鼠标滚轮 / PageUp/PageDown 长期被忽视 |
| [#3392](https://github.com/github/copilot-cli/issues/3392) | Bash tool 在 NixOS ≥1.0.49 崩溃 | OPEN | 👍 7 | 与 NixOS 用户痛点紧密相关，需发布针对 FHS 的兼容补丁 |
| [#4174](https://github.com/github/copilot-cli/issues/4174) | ACP server 不暴露 token / context 用量 | CLOSED | 👍 2 | 反映 ACP 协议的可观测性缺口，影响第三方代理与计费集成 |
| [#4311](https://github.com/github/copilot-cli/issues/4311) | 转录内容渲染空白直到宽度变化 | OPEN | 💬 2 | `WCr` / ScrollBox 测量缓存失效，导致底部内容不可见 |
| [#4251](https://github.com/github/copilot-cli/issues/4251) | 大型会话 resume OOM（1.0.74 回归） | OPEN | 👍 1 | **明确给出 A/B 数据**：1.0.74 比 1.0.73 内存峰值高 3–4×，耗 70 分钟 |
| [#4212](https://github.com/github/copilot-cli/issues/4212) | tmux 下提示框深色不可见 | OPEN | 💬 2 | 主题/无障碍问题，多终端用户受阻 |
| [#4374](https://github.com/github/copilot-cli/issues/4374) | `/mcp search` 在 Azure DevOps 远端报 400 | OPEN | 👍 4 | 企业 Git 托管非 GitHub 时 MCP 注册表完全不可用 |
| [#4346](https://github.com/github/copilot-cli/issues/4346) | Actions GITHUB_TOKEN 拉取 MCP 注册表 403 | OPEN | 👍 1 | 直接阻断 **CI 中使用非默认 MCP 服务器**，与 GitHub 官方推荐的 PAT-less 流程冲突 |
| [#4380](https://github.com/github/copilot-cli/issues/4380) | Rubber Duck 复用了主会话模型 | OPEN | 💬 2 | 削弱"对抗性评审"价值，影响代码审查质量 |

---

## 四、重要 PR 进展

过去 24 小时内仓库 **无 PR 更新**。这与活跃的 issue 节奏形成对比，可能意味着：
- 大部分修复/改进正在 PR-review 或内部流程中，未合入主线；
- 也可能是窗口期内开发活动转向预发布通道（v1.0.79-x 系列）。

建议关注 `main` 分支的下一波提交。

---

## 五、功能需求趋势

从过去 24 小时更新的 32 条 Issue 中提炼，社区诉求集中在六大方向：

1. **🖥️ 终端渲染与可访问性**（最密集）
   - 滚动浏览对话历史（#4313）
   - 渲染空白修复（#4311）
   - tmux 暗色主题可见性（#4212）
   - Windows 代码页 936 复制清屏（#4391）
   - 终端标题被覆盖为 Windows PowerShell（#4384）
   - `!` Shell 模式下 Tab 应做终端补全（#4387）

2. **🔌 MCP 协议与企业集成**
   - stdio 孤儿进程泄漏（#4392）
   - Actions GITHUB_TOKEN 403（#4346）
   - Azure DevOps 远端 400（#4374）
   - BigInt 序列化失败（#4211）
   - MCP add 窗口字段截断（#168 已关闭）

3. **📂 会话管理与持久化**
   - 大会话 resume 回归 OOM（#4251）
   - resume 因模型名前缀不一致失败（#4282）
   - 转向消息顺序错乱（#4372）
   - 队列消息永久卡住（#4373）
   - 删除会话未清理 worktree（#4383 已关闭）

4. **🧠 模型与多供应商（BYOM）**
   - 组织启用模型在目录中缺失（#4390）
   - 切换模型后推理强度错乱（#3053）
   - BYOM 模型发现与运行时切换（#4376）
   - Rubber Duck 模型去耦（#4380）

5. **🔐 权限与安全提示**
   - 权限提示应说明触发原因（#4386）
   - 切回 interactive 仍按 auto 运行（#4388, #4389）

6. **🛠️ Agent / 工作流增强**
   - `.agents` 发现机制扩展到任意目录（#4204）
   - `/worktree` 保留用户名/分支命名约定（#3914 已关闭）

---

## 六、开发者关注点

**高频痛点：**

- **"看不见"和"交互断了"**：tmux 深色不可见、空白转录、复制清屏、Tab 跳转到 Issues 面板——这些都属于**终端可视化与可访问性**长期欠债，是当前最集中的开发者抱怨。
- **MCP 在企业/非 GitHub 场景基本走不通**：CI 中 `GITHUB_TOKEN` 拉不到注册表、Azure DevOps 远端直接 400、stdio 进程泄漏——任何把 Copilot CLI 接入企业流水线或多托管平台的尝试都会撞墙。
- **会话规模触顶**：1.0.74 引入了 resume 内存 3–4× 回归（#4251），而 resume 又是日常高频操作；与此同时，队列消息卡死、转向消息乱序也让长会话体验持续退化。
- **模型切换不可信**：切换模型后推理强度不匹配、Rubber Duck 复用主模型、组织启用模型消失——开发者无法信任当前的模型选择符合预期。
- **权限反馈黑盒**：开发者不知道"为什么这个命令要审批"，也分不清 auto / interactive 的实际生效状态，安全 UX 有显著改进空间。
- **NixOS 等小众平台的回归长期不被修复**：Bash tool 自 1.0.49 起崩溃，社区虽有 strace 证据但 2.5 个月仍未见修复。

> 综合判断：当前版本的"功能丰富度"已不构成主要矛盾，**终端渲染、MCP 企业级集成、会话鲁棒性**是下一阶段开发者评价的关键变量。

---

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-08-07
**数据来源**：GitHub `MoonshotAI/kimi-cli`

---

## 一、今日速览

过去 24 小时内，Kimi Code CLI 社区最显著的动态集中在 **文件编辑器的数据完整性问题**：`StrReplaceFile` 在处理非 UTF-8 编码文件时会将无效序列永久损坏为 U+FFFD，相关 Issue #2591 已引发两份修复 PR（#2594、#2595）快速跟进。同时，长期呼声最高的 **Memory System（跨会话持久上下文）** 与 **VSCode 集成增强** 类需求仍在持续发酵。

---

## 二、版本发布

过去 24 小时内 **无新版本发布**。

---

## 三、社区热点 Issues

> 以下按热度（评论数 + 👍）与重要性排序。

### 1. #1283 — [enhancement] Memory System: Persistent context across sessions  ⭐ 20 评论
- **作者**：CatKang | 状态：OPEN
- **重要性**：这是社区长期最高呼声的功能请求之一，要求实现跨会话的 AI 自动记忆 + 用户手动指令持久化。一旦落地，将显著提升长周期项目的使用体验。
- **社区反应**：20 条评论持续讨论记忆粒度、隐私边界、检索机制等设计细节。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/1283

### 2. #2317 — [bug] Plan mode file path not clickable in VSCode chat webview  👍 1
- **作者**：vlad-at-work | 状态：OPEN
- **重要性**：直接影响 VSCode 扩展的核心交互体验，文件路径不可点击会让用户难以快速跳转到代码位置。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2317

### 3. #2591 — StrReplaceFile corrupts undecodable bytes outside the edited region
- **作者**：shoemoney | 状态：OPEN
- **重要性**：**高危数据完整性问题**。编辑器对整文件用 `errors="replace"` 解码再写回，导致编辑区域外的非 UTF-8 字节被替换为 U+FFFD，可能造成不可逆的数据损坏。已有两份 PR 并行修复。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2591

### 4. #2474 — [bug] UI keeps shaking and re-rendering entire conversation  👍 2
- **作者**：yudichimiantiao | 状态：OPEN
- **重要性**：CLI 终端渲染抖动问题，影响可读性与使用体验，已获 2 次点赞，触发用户关注。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2474

### 5. #621 — [bug] First WriteFile always errors "Invalid path"  ✅ 已关闭
- **作者**：footerzch | 状态：CLOSED
- **重要性**：首次执行 WriteFile 时路径解析异常，workaround 需改用绝对路径。已关闭说明已在后续版本中修复。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/621

### 6. #2147 — [Feature] Lazy-load MCP tool schemas into context  👍 1
- **作者**：Evan-Kim2028 | 状态：OPEN
- **重要性**：直接关联**性能与上下文预算**：当前每个会话开始时全部 MCP 工具 schema 都被注入上下文，在多 MCP 场景下可消耗上千 token，对 token 经济性影响显著。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2147

### 7. #2593 — [enhancement] Quick switching between auto/yolo/manual modes in VSCode panel
- **作者**：xuchengpu | 状态：OPEN
- **重要性**：VSCode 面板的可用性增强诉求，并希望显示 5 小时用量配额，反映社区对**操作粒度控制**与**用量可视化**的双重需求。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/2593

### 8. #821 — [Security] Missing authorization checks + dependency CVEs  ✅ 已关闭
- **作者**：devatsecure | 状态：CLOSED
- **重要性**：外部安全审计报告：发现 Web API 中 2 处代码漏洞（IDOR / 鉴权缺失）+ 5 处依赖 CVE，CVSS 评分 7.0–8.0。已关闭说明问题已修复或已分流处理，建议关注后续 release notes。
- 🔗 https://github.com/MoonshotAI/kimi-cli/issues/821

---

## 四、重要 PR 进展

### 1. #2594 — fix(tools): preserve non-UTF-8 bytes in StrReplaceFile edits  🔥 紧急修复
- **作者**：686f6c61 | 状态：OPEN
- **亮点**：改为将 `old`/`new` 作为 UTF-8 字节子串在原始缓冲区上操作，**避免解码-重编码路径**，从根本上杜绝编辑区域外的字节损坏。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2594

### 2. #2595 — fix(StrReplaceFile): refuse to edit files that are not valid UTF-8
- **作者**：shoemoney | 状态：OPEN
- **亮点**：针对同一问题采取**保守策略**——直接拒绝编辑非 UTF-8 文件，避免静默损坏数据。与 #2594 形成互补方案，社区可对比权衡。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2595

### 3. #2255 — feat(shell): support Shift+Enter for inserting newlines  ✅ 已合并
- **作者**：donbeave | 状态：CLOSED
- **亮点**：在交互式 prompt 中新增 **Shift+Enter** 作为换行快捷键（与 Ctrl-J、Alt-Enter 并存），对齐 VSCode 等编辑器用户习惯，提升输入效率。合并了 #2254 并关联 #2010、#2121、#1585、#1574 等多个相关讨论。
- 🔗 https://github.com/MoonshotAI/kimi-cli/pull/2255

> 注：今日仅有 3 个 PR 更新，#2594 / #2595 两条均为同一文件损坏问题的并行修复方案，#2255 则是已合并的 UX 增强。

---

## 五、功能需求趋势

综合近 24h 活跃与历史积累的 Issue 方向，社区关注焦点可归纳为以下几条主线：

| 方向 | 代表性 Issue | 核心诉求 |
|---|---|---|
| 🧠 **持久化记忆 / 上下文管理** | #1283 | 跨会话记忆项目模式、用户偏好，自动 + 手动双轨 |
| 🧩 **IDE / VSCode 集成** | #2317、#2593 | 文件可点击跳转、面板快捷模式切换、用量可视化 |
| ⚡ **性能与上下文经济性** | #2147 | MCP 工具 schema 懒加载，避免初始 token 浪费 |
| 🛡️ **数据完整性 / 编码安全** | #2591 | 非 UTF-8 文件编辑不应损坏未触及区域的字节 |
| 🔐 **安全与依赖治理** | #821 | Web API 鉴权、依赖 CVE 修复 |
| 🎨 **终端渲染稳定性** | #2474 | 解决界面抖动与不必要重渲染 |

---

## 六、开发者关注点

1. **数据安全底线**：#2591 揭示的"无声文件损坏"是开发者最敏感的痛点之一——工具不应在用户不知情的情况下破坏未编辑区域的数据；社区对修复 PR 的快速跟进也说明此类问题具备最高优先级。
2. **上下文预算焦虑**：随着 MCP 等外部工具生态扩张，开发者越来越关注**首轮 token 消耗**，期望按需懒加载（#2147），而非全量注入。
3. **长周期工作流需求**：Memory System（#1283）的高讨论度表明，越来越多开发者将 Kimi Code CLI 视为持续协作伙伴，而非一次性工具，**会话间连续性**成为留存关键。
4. **IDE 一体化体验**：VSCode 面板的交互细节（路径可点击 #2317、模式切换 #2593）持续被提出，说明 CLI 与编辑器协同仍是产品化的主战场。
5. **快捷键与输入效率**：Shift+Enter（#2255）这类小改进的合并，反映社区对**输入体验一致性**的细腻要求。
6. **安全透明度**：外部安全研究者的报告（#821）得到快速响应并已关闭，体现项目对安全披露流程的成熟度。

---

*日报由 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-07

## 📌 今日速览

**OpenCode Go 订阅服务大面积故障仍在持续**，"Request blocked by upstream provider" 401 错误相关的 Issue 占据今日讨论热度榜首，多个高评论数工单已积累超过 44 条回复。同时，**TUI 提示交互体验**成为今日 PR 提交的主要方向，多个关于 prompt 队列、steer 行为与权限弹窗修复的 PR 集中合入，开发节奏明显加快。

---

## 🚀 版本发布

**今日无新版本发布**（过去 24 小时内无 Release 活动）。当前社区使用版本主要集中在 `1.18.11` – `1.18.14`。

---

## 🔥 社区热点 Issues

| # | Issue | 评论数 / 👍 | 重要性 |
|---|-------|--------|--------|
| [#38257](https://github.com/anomalyco/opencode/issues/38257) | **[Bug]** OpenCode Go：`/v1/models` 正常，但 `/chat/completions` 全部返回 401 | 44 / 👍11 | ⭐⭐⭐⭐⭐ |
| [#38218](https://github.com/anomalyco/opencode/issues/38218) | **[Bug]** opencode-go 订阅下所有模型抛 "Request blocked by upstream provider" | 31 / 👍13 | ⭐⭐⭐⭐⭐ |
| [#6152](https://github.com/anomalyco/opencode/issues/6152) | **[FEATURE]** 会话上下文占用查看（类似 Claude `/context`） | 22 / 👍**129** | ⭐⭐⭐⭐⭐ |
| [#38195](https://github.com/anomalyco/opencode/issues/38195) | 401 AuthError：OpenCode Go 订阅模型全部异常 | 24 / 👍17 | ⭐⭐⭐⭐ |
| [#1168](https://github.com/anomalyco/opencode/issues/1168) | **[FEATURE]** 让 URL 链接可点击（Ctrl+左键打开） | 11 / 👍**119** | ⭐⭐⭐⭐ |
| [#31932](https://github.com/anomalyco/opencode/issues/31932) | **[FEATURE]** TUI 跨项目会话列表/选择器 | 15 / 👍6 | ⭐⭐⭐⭐ |
| [#39827](https://github.com/anomalyco/opencode/issues/39827) | **[Zen]** 所有 Zen 模型（付费+免费）AuthError | 9 / 👍4 | ⭐⭐⭐⭐ |
| [#32157](https://github.com/anomalyco/opencode/issues/32157) | **[2.0 FEATURE]** 运行中提示词投递策略：queue / steer / break | 5 / 👍**67** | ⭐⭐⭐⭐ |
| [#39875](https://github.com/anomalyco/opencode/issues/39875) | **[FEATURE]** 还原 Go 隐私条款与供应商归属 + 补充遥测说明 | 6 / 👍**44** | ⭐⭐⭐⭐ |
| [#14332](https://github.com/anomalyco/opencode/issues/14332) | Amazon Bedrock Opus 4.6 compaction 失败 | 13 / 👍8 | ⭐⭐⭐ |

**为什么这些重要？**
- **#38257 / #38218 / #38195 / #39827** 形成了一个"四连击"问题群——Go 订阅用户普遍遭遇 401，意味着上游 provider 或认证网关侧出现系统性故障，影响商业付费用户。社区情绪迫切。
- **#6152 (👍129)** 和 **#1168 (👍119)** 是**高赞需求**，反映用户对**透明度**（上下文占用、链接交互）和**编辑器级体验**的强烈渴望。
- **#32157 (👍67)** 与今日多个 PR（#40922, #40956）高度呼应，说明社区共识已经形成：需要正式区分 queue / steer。
- **#39875 (👍44)** 关注**隐私条款变更**，提示 Go 订阅用户对数据归属与 telemetry 透明度的敏感度正在上升。

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 状态 | 说明 |
|----|------|------|------|
| [#40971](https://github.com/anomalyco/opencode/pull/40971) | `feat(tui)` 暴露 prompt 操作命令 | OPEN | 为 TUI 插件导出稳定的表单与权限提示命令（`form.option.previous` 等） |
| [#40800](https://github.com/anomalyco/opencode/pull/40800) | `fix(opencode)` 序列化孤儿 compaction 历史 | **CLOSED** ✅ | 将压缩历史合并到单条用户消息，保留 reasoning/tool/error 上下文 |
| [#40931](https://github.com/anomalyco/opencode/pull/40931) | `feat(core)` 延续子代理会话 | OPEN | 支持通过 `sessionID` 续接前台子代理，校验父级所有权 |
| [#40929](https://github.com/anomalyco/opencode/pull/40929) | `feat(core)` 限制工具输出 | OPEN | 按行/字节阈值截断工具输出，7 天后清理托管文件 |
| [#40962](https://github.com/anomalyco/opencode/pull/40962) | `refactor(core)` 文件工具简化为词法路径 | **CLOSED** ✅ | V2 文件工具不再 canonicalize 符号链接，UTF-8 容错 |
| [#40922](https://github.com/anomalyco/opencode/pull/40922) | `feat(tui)` Option+Enter 队列提示 | OPEN | Enter=steer、Option/Alt+Enter=queue，与 #32157 需求闭环 |
| [#40969](https://github.com/anomalyco/opencode/pull/40969) | `fix(llm)` 流式工具调用空 ID 容错 | OPEN | 修复阿里 DashScope 等 provider 在续传 delta 中发送空字符串 `id` 的崩溃 |
| [#40880](https://github.com/anomalyco/opencode/pull/40880) | `fix(core)` 自定义 agent 默认 primary | **CLOSED** ✅ | 缺省 `mode` 时默认 `primary`，更新 V2 文档 |
| [#40967](https://github.com/anomalyco/opencode/pull/40967) | `feat(core)` 工作区环境基础设施 | OPEN | 引入 `ChildProcessSpawner` 抽象，为多驱动环境管理打底 |
| [#40956](https://github.com/anomalyco/opencode/pull/40956) | `fix(session)` 恢复被中断挤掉的队列 | OPEN | 修复 Esc/abort 后静默丢弃已排队输入的 bug |

> 本期共 5 个 PR 关闭、15 个仍处于 OPEN 状态，整体净工作量集中在 **TUI 交互**、**Core session/agent 模型**、**LLM provider 兼容性**三大方向。

---

## 📈 功能需求趋势

从全部 Issue 提炼，社区最关注的功能方向按热度排序：

1. **🧭 TUI / 编辑器级交互体验**（占 Issues 约 35%）
   - 上下文查看（#6152, 👍129）
   - 可点击链接（#1168, 👍119）
   - 跨项目会话选择（#31932）
   - 会话内容搜索（#38973）
   - 线性集成 Todo Sidebar（#38081）
   - 目录会话统计（#37760）

2. **🎛️ Agent 运行控制与提示投递策略**（约 15%）
   - queue/steer/break 语义（#32157, 👍67）
   - 子代理会话延续（#40931 PR 响应）

3. **🔒 隐私与合规透明度**（约 10%）
   - 隐私条款还原（#39875, 👍44）
   - 权限规则路径匹配 bug（#40945）

4. **☁️ 多 Provider 兼容性**（约 20%）
   - Bedrock Opus 4.6 压缩（#14332）
   - DeepSeek V4 Flash 上下文元数据错误（#40958）
   - OpenAI 兼容流式空 ID 修复（#40969 PR）

5. **🖥️ 平台兼容性 / 桌面端稳定性**
   - Windows 10 + Node 26 启动失败（#40957）
   - Debian 13 TUI 冻结（#35494）
   - Web 端实时刷新问题（#40502）
   - Linux 卡死（#40871, 已关闭）

---

## 💬 开发者关注点

汇总今日高评论/高赞同 Issue 与 PR 的讨论焦点：

- **🚨 服务稳定性是头号痛点**：Go/Zen 订阅用户对 401 错误**零容忍**——付费了却用不了，订阅邮件已收但账单/支付方式状态未同步（#40234）。多名用户复现跨平台、跨模型一致故障，已实质影响口碑。
- **🧩 上下文可见性诉求强烈**：开发者希望在长会话/压缩（compaction）流程中能实时观察 token 消耗与剩余空间，#6152 的 129 👍 说明这是普遍刚需。
- **⌨️ "终端级 IDE 体验"仍有差距**：可点击链接（#1168）、会话搜索（#38973）、线性集成（#38081）等需求表明用户期待 OpenCode 在 TUI 中提供更接近 VS Code/JetBrains 的导航效率。
- **🔁 中断与重试鲁棒性**：#40956（中断后队列丢失）和 #11748（PowerShell 终端字符错乱）显示，**异步交互可靠性**是高频痛区。
- **🛡️ 权限路径匹配存在安全语义问题**：#40945 指出 `permission.edit` 用绝对路径或 `~` 模式会**静默失败**，对 `deny` 规则属于 fail-open 风险，开发者社区对此类安全语义问题尤为敏感。
- **📡 Provider 兼容性需持续维护**：阿里 DashScope（#40969）、Bedrock（#14332）、DeepSeek 元数据（#40958）等问题说明 OpenCode 的多 provider 适配仍需投入。

---

> 📊 **数据口径**：基于 `anomalyco/opencode` 仓库过去 24 小时更新的 50 条 Issues 与 50 条 PRs，按评论数与 👍 数排序筛选。  
> 📅 **报告生成时间**：2026-08-07

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-07

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi)（原 badlogic/pi-mono）

---

## 📌 今日速览

v0.84.0 正式发布，带来全新 **Fullscreen TUI 模式**，立即引发大量体验反馈——过去 24 小时有 17+ 个 Issue 直接围绕该模式展开（崩溃、选中行为、双击分词、行宽溢出等）。同时，**OpenAI Completions 适配器**修复了 Gemini thought signature 的回传，`Ollama Cloud` 与 `Qwen Token Plan Individual` 两个新 provider 合并进入主干。

---

## 🚀 版本发布

### v0.84.0 — Fullscreen TUI 模式

- **新增**：运行时切换 regular / fullscreen 模式；带 sticky editor + footer；transcript 独立滚动 + 可拖动滚动条
- 文档：[UI & Display](https://github.com/earendil-works/pi/blob/v0.84.0/packages/coding-agent/docs/settin)
- 用户已发现的问题：
  - [#7736](https://github.com/earendil-works/pi/issues/7736) 超宽行直接抛 `uncaughtException`
  - [#7737](https://github.com/earendil-works/pi/issues/7737) TUI 将超宽行视为致命错误而非 truncate
  - [#7746](https://github.com/earendil-works/pi/issues/7746) 双击选择按 `/` `-` 拆词（路径/ kebab-case 不可用）

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 社区反应 |
|---|------|---------|---------|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **Windows 使用情况调研** | 收集 Windows 用户运行方式与痛点，为后续核心支持 vs 委外决策提供依据 | 💬 22 评论 · 作者 petrroll 持续汇总 |
| [#6879](https://github.com/earendil-works/pi/issues/6879) | **auto-compaction 在 100% 后不触发** | 长任务 context 越过阈值仍不压缩，直到 373k token 被 API 拒；建议每个 agentic turn 都检查 | 👍 15 · 💬 12 — 高优 bug |
| [#7128](https://github.com/earendil-works/pi/issues/7128) | **默认 PI_* 指令过度诱导 bash 调用** | 新版 system prompt 引导 agent 频繁 `env` 检查，造成无谓 bash | 💬 10 — prompt 设计争议 |
| [#4990](https://github.com/earendil-works/pi/issues/4990) | **Edits 失败** | 工具校验失败 `edits: must have required properties`，用户升级后立即触发 | 💬 8 — 升级回归 |
| [#5323](https://github.com/earendil-works/pi/issues/5323) | **改善 Vertex + GCP metadata server 支持** | 同步 `existsSync` 阻塞、轮询鉴权不够灵活 | 💬 7 — GCP 用户长期痛点 |
| [#7413](https://github.com/earendil-works/pi/issues/7413) | **GHE.com 企业版 Copilot compaction 失败** | `unknown stamp "prod-cus-01"`，仅 enterprise 命中 | 💬 7 — 影响付费用户 |
| [#6662](https://github.com/earendil-works/pi/issues/6662) | **TUI 鼠标选区复制后会滚动到底部** | 仅新 agent 消息首次出现，复现率 100% | 💬 7 — UX 问题 |
| [#7703](https://github.com/earendil-works/pi/issues/7703) | **Agent.reset() 在运行中调用导致孤立 assistant 消息** | transcript 被清但 in-flight 响应仍追加 | 💬 4 — 已修复（#7717） |
| [#7702](https://github.com/earendil-works/pi/issues/7702) | **DeepSeek + opencode zen 网关 reasoning_content 必须回传** | 多轮工具调用直接 400 | 💬 4 — 在进行中 |
| [#7600](https://github.com/earendil-works/pi/issues/7600) | **X11 连接泄漏（Linux Mint / Cinnamon）** | 8 天泄漏 182 条连接，撑爆 Xorg 256-client 表 | 💬 3 — 严重长期稳定性问题 |

---

## 🛠 重要 PR 进展（Top 10）

| PR | 类型 | 内容 |
|---|------|------|
| [#7745](https://github.com/earendil-works/pi/pull/7745) | ✅ fix(ai) | **保留 Gemini thought signature**：`extra_content.google/vertex.thought_signature` 在 OpenAI Completions 中 capture 并回放（解决 #6733） |
| [#7742](https://github.com/earendil-works/pi/pull/7742) | 🆕 feat(ai) | **Ollama Cloud provider**：使用 `OLLAMA_API_KEY`，本地/云双模连接 |
| [#7729](https://github.com/earendil-works/pi/pull/7729) | ✅ docs | 协调 keybinding 文档与 `/hotkeys` 一致；记录 `super` modifier 与 Kitty 键盘协议 |
| [#7733](https://github.com/earendil-works/pi/pull/7733) | ✅ fix(tui) | 双击选词不再吞下随后的空白 / 把空白块当作单词（修复 #7725） |
| [#7732](https://github.com/earendil-works/pi/pull/7732) | 🆕 docs(tui) | TUI 测试运行器统一为 `node --test`，移除残留 vitest 配置 |
| [#7686](https://github.com/earendil-works/pi/pull/7686) | ✅ feat(coding-agent) | 实验性 **Harness 工厂**可配置化：保留用户 tools / prompt policy / bash session |
| [#7659](https://github.com/earendil-works/pi/pull/7659) | ✅ feat(ai) | **Qwen Token Plan Individual** provider，含订阅模型清单与额度执行 |
| [#7722](https://github.com/earendil-works/pi/pull/7722) | 🆕 feat(coding-agent) | 新增 `--use-theme` 选项，支持单主题与 appearance-based（dayowl/nightowl）覆盖 |
| [#7727](https://github.com/earendil-works/pi/pull/7727) | 🆕 perf | SQLite 分支查询优化：增加 covering index、`type/cursor/limit` 下推 SQL |
| [#7710](https://github.com/earendil-works/pi/pull/7710) | 🆕 feat(agent) | **Harness v2 R3**：恢复挂起的 harness 操作（recovery / query / reducer / restore） |

补充高价值合并（昨日已关）：
- [#7721](https://github.com/earendil-works/pi/pull/7721) ✅ fullscreen 复制不再产生多余换行
- [#7717](https://github.com/earendil-works/pi/pull/7717) ✅ `Agent.reset()` 在 active run 中拒绝调用
- [#7715](https://github.com/earendil-works/pi/pull/7715) ✅ blocked tool call 支持 `terminate` hint
- [#7718](https://github.com/earendil-works/pi/pull/7718) ✅ 保留滚动缓冲区在内容重绘时的位置
- [#7685](https://github.com/earendil-works/pi/pull/7685) ✅ bun 编译二进制禁用 bunfig autoload（防 preload 崩溃）
- [#7681](https://github.com/earendil-works/pi/pull/7681) ✅ 支持 `AGENTS.override.md` 同目录最高优先级（关 #7642）

---

## 📈 功能需求趋势

1. **Fullscreen TUI 打磨**（占比最高）— 紧跟 v0.84.0 发布，用户在实测中暴露了：行宽溢出崩溃、双击选词算法、复制粘贴、键盘绑定等细节问题，是当下迭代重心。
2. **多 Provider 接入与对齐** — Ollama Cloud、Qwen Token Plan、Bedrock Mantle、Vertex/GCP、opencode zen、Copilot GHE.com，Pi 正快速成为"模型无关的 coding agent 容器"。
3. **Harness v2 架构升级** — R3（恢复挂起操作）落地，配合 SQLite 索引优化与 StreamAssistant telemetry，是中长期稳定性主线。
4. **会话 / 扩展 API 增强** — `SessionManager.reload()`、Harness 工厂、`--use-theme`、`AGENTS.override.md`、`terminate` hint——扩展作者（plugin 作者）正在推动 API 表面扩展。
5. **Windows 与跨平台一致性** — `pi-coding-agent` 在 Windows、X11、Cinnamon 等长跑场景仍存在边缘问题（连接泄漏、Termux bracketed paste、SSH/headless 登录）。

---

## 💬 开发者关注点

- **崩溃即 fatal**：超宽行直接抛 `uncaughtException` 退出（#7736/#7737），社区希望改成 truncate 而非 crash，与 `visibleWidth()` 配套使用即可避免。
- **TUI 交互体验**：选中复制后强制滚到底（#6662）、双击按 `/` `-` 拆词（#7746）、缺少 disable select-to-copy 选项（#7720）、缺少双击词级选择 + 拖拽扩展（#7725）——一次大改动暴露了一连串可用性细节。
- **Auto-compaction 策略**：阈值越过 100% 仍未触发（#6879，👍15），属于"安全网失灵"类问题，长任务与超大上下文场景的高优痛点。
- **Prompt 工程回退**：默认 `PI_*` 提示被指过度引导 bash 调用（#7128），需要更克制的 system prompt 模板。
- **企业 / 付费平台兼容**：Copilot GHE.com（#7413）、opencode zen（#7702）、DeepSeek V4 Flash（#7704）——企业 / 网关侧差异是 Pi 接入新渠道时最容易踩雷的地方。
- **长期进程资源泄漏**：X11 连接 8 天泄漏 182 条（#7600）提醒需要审计长期运行 agent 的 fd / socket 生命周期。
- **升级回归焦虑**：#4990（Edits failing on upgrade）反映社区对"主版本升级即破坏既有流程"的敏感性。

---

*日报由 AI 自动整理生成，仅作信息聚合；详细内容请以上述 GitHub 链接为准。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-07

## 📌 今日速览

v0.21.7 正式版发布，移除 Goals 任务的 50 轮上限并解锁终端内联图像渲染；同日 Qwen Live Host v0.1.0 上线。社区焦点集中在**安全加固与回归修复**：read-only shell 分类器绕过（#8582）、工作区信任规则反转（#8627）以及 0.21.6 hooks 不派发的回归（#8622）成为最高优先级议题。

---

## 🚀 版本发布

### v0.21.7（稳定版）
- **Goals 取消 50 轮上限**（#8421）：长任务可继续/恢复，不再被硬性截断
- **交互式 CLI 内联图像渲染**：支持 Ki[tty]/iTerm2/WezTerm/Ghostty/Warp 等终端
- 📦 [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7)

### v0.21.7-nightly.20260807
- CI 修复：暴露阻塞的 autofix takeover admission（#8410）
- 📦 [Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.7-nightly.20260807.fca8f3c1f)

### Qwen Live Host v0.1.0
- 新增 Windows merge queue 在 ECS 上运行测试（#8386）
- 提供稳定 installer feed：`live-host-latest`
- 📦 [Release](https://github.com/QwenLM/qwen-code/releases/tag/live-host-v0.1.0)

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 优先级 | 评论 | 关注理由 |
|---|------|------|--------|------|----------|
| [#3203](https://github.com/QwenLM/qwen-code/issues/3203) | Qwen OAuth 免费层策略调整 | CLOSED | — | 150 | 24h 内最高热度议题（150 条评论），讨论从 1000→100 请求/天的免费额度调整及最终关闭 OAuth 免费入口的时间表 |
| [#8622](https://github.com/QwenLM/qwen-code/issues/8622) | **0.21.6 回归**：PreToolUse/PostToolUse/PreCompact/SessionStart hooks 不再派发 | OPEN | **P1** | 5 | 0.21.5→0.21.6 回归，仅 `UserPromptSubmit` 与 `Stop` 可用，严重影响依赖 hooks 的工作流 |
| [#8582](https://github.com/QwenLM/qwen-code/issues/8582) | **安全**：read-only shell 分类器被行延续与 `${var@P}` 绕过 | OPEN | **P1** | 5 | AST 与正则分类器双失守，命令替换可隐藏执行任意代码并被自动批准 |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | Desktop 0.1.0 Windows 启动崩溃（EISDIR `C:`） | OPEN | **P1** | 5 | 打开 workspace 即崩溃，bundled Node 22.20.0 直接阻断 v0.1.0 Windows 用户 |
| [#8627](https://github.com/QwenLM/qwen-code/issues/8627) | **安全**：显式 `DO_NOT_TRUST` 被祖先 `TRUST_FOLDER` 覆盖，可注入 bearer token | OPEN | P2 | 3 | 工作区信任短路逻辑使不信任目录仍能加载 `qwen serve` 凭据 |
| [#8643](https://github.com/QwenLM/qwen-code/issues/8643) | **安全**：serve 快路径从祖先未信任目录加载 `.env` | OPEN | P2 | 3 | `findEnvFilesFastPath` 只在起点评估一次 trust，沿目录树向上行走时会引入未授权环境变量 |
| [#8557](https://github.com/QwenLM/qwen-code/issues/8557) | macOS Warp 缩小终端导致 transcript 重复打印 | OPEN | P3 | 6 | VP 模式下重排版渲染异常，影响 macOS 用户阅读体验 |
| [#8316](https://github.com/QwenLM/qwen-code/issues/8316) | Ctrl+C 取消 prompt 后输入框未恢复内容 | OPEN | — | 8 | 高频 UX 痛点：用户编辑中的内容被丢弃，必须重打 |
| [#8629](https://github.com/QwenLM/qwen-code/issues/8629) | 提案：在 README Ecosystem 收录 qwen-audio-agent（语音前端） | OPEN | P3 | 5 | ACP 全双工语音生态扩展，已准备好合并 |
| [#8584](https://github.com/QwenLM/qwen-code/issues/8584) | Anthropic model-ID 解析拒绝 `claude-opus-4.8` 等点位次版本 | OPEN | P2 | 4 | 多代理部署下兼容性问题，Opus 5 token 上限缺失限制生产使用 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 关键内容 |
|---|------|----------|
| [#8590](https://github.com/QwenLM/qwen-code/pull/8590) | **fix(core)**：关闭 read-only 分类器绕过（#8582） | 修复行延续隐藏 `$(...)` 与 `${var@P}` 两种绕过路径，确保真实执行任意代码的命令不再被自动批准 |
| [#8656](https://github.com/QwenLM/qwen-code/pull/8656) | **docs**：记录内联终端图像预览 | 配套 v0.21.7 图像能力，覆盖原生/ANSI 渲染选择、PNG 校验、payload 上限与占位策略 |
| [#8290](https://github.com/QwenLM/qwen-code/pull/8290) | **fix(core)**：零 inode 文件缓存改为 fail-closed | `FileReadCache` 与 inode 比对遇到 `ino=0` 时拒绝缓存命中，避免跨路径文件被错误折叠 |
| [#6606](https://github.com/QwenLM/qwen-code/pull/6606) | **fix(core)**：从 shell 子进程环境清理 daemon 内部密钥 | 防止 bearer token、internal URL 等敏感配置泄露至用户 spawn 的子进程 |
| [#8418](https://github.com/QwenLM/qwen-code/pull/8418) | **feat(core)**：向 OpenAI 兼容 provider 共享压缩缓存 | 此前仅 DashScope 受益的前缀缓存路径扩展到所有 OpenAI 兼容端点，节省 tokens 与延迟 |
| [#8320](https://github.com/QwenLM/qwen-code/pull/8320) | **feat(workflows)**：Dynamic Workflows 协作式 pause/resume | 整轮可暂停调度器保留已派发结果，取消与恢复语义清晰 |
| [#7801](https://github.com/QwenLM/qwen-code/pull/7801) | **feat(cli)**：Agent View 会话生命周期（栈 3/5） | 接管/resume、追问、needs-input 回答、附加恢复、陈旧 host 处理等能力 |
| [#8507](https://github.com/QwenLM/qwen-code/pull/8507) | **feat(external-context)**：Mem0 可选写入 | Direct External Context 集成新增 `context_remember()`，向后兼容 Generic HTTP / v2 |
| [#8588](https://github.com/QwenLM/qwen-code/pull/8588) | **feat(serve)**：`/health?deep=1` 暴露活动工作状态 | 新增 `activeWork`/`activeWorkReporting`/`activeWorkStaleMs`，便于运维探测 hang |
| [#8621](https://github.com/QwenLM/qwen-code/pull/8621) | **feat(web-shell)**：从 `.zip`/`.tar.gz` 安装扩展 | 复用既有排队安装流水线，本地压缩包直接进入交互/刷新流程 |

---

## 📈 功能需求趋势

1. **多模型/多 Provider 兼容**  
   Anthropic 点位次版本与 Opus 5 token 上限（#8584）、OpenAI 兼容端点压缩缓存共享（#8418）显示，社区正在推动 Qwen Code 走向"协议无关"的模型层。

2. **安全与权限模型**  
   24h 内出现 3 起 P1/P2 安全相关 Issue（#8582、#8627、#8643），围绕 shell 分类器、trust 规则短路、`.env` 加载边界——`security.folderTrust` 与 read-only classifier 是当前最受审视的两块基石。

3. **Desktop / Web Shell 体验**  
   Windows 启动崩溃（#8615）、设置语言不生效（#8592/#8641）、Markdown 链接无法打开（#8593→#8594）、扩展安装源单一（#8621）——Desktop 0.1.0 进入"补缺口"阶段。

4. **终端渲染与交互**  
   内联图像（v0.21.7）、tmux 闪屏（#8562）、WSL 字符重复渲染（#7634）、Ctrl+S 无法展开（#8634）反映出 VP（virtualized pager）模式仍存在多终端适配边界。

5. **国际化与文档**  
   韩语文档（#8551）、语言栏扩展、native menu i18n（#8641）成为低门槛、可合并的稳定贡献入口。

6. **生态扩展**  
   qwen-audio-agent（#8629）等第三方语音/前端开始申请进入 README Ecosystem，Qwen Code 正向"智能体编排平台"演进。

---

## 👨‍💻 开发者关注点

- **回归担忧**：0.21.6 的 hooks 派发回归（#8622）让部分用户不敢升级；需要明确补丁窗口与版本回滚建议。
- **桌面端可用性**：Windows 安装路径、bundled runtime 兼容性、UI 语言持久化是 Desktop 0.1.0 的高频痛点。
- **CI/Review 自动化**：CI `/review` 超

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-08-07

---

## 📌 今日速览

今日社区动态以 **v0.9.4 发布列车收尾** 与 **下个迭代（TUI 体验、多 Provider、子代理可靠性）布局** 为主线：12 个 Issue 关闭、6 个 PR 合入，其中 v0.9.4 Release Train (#5135) 已落地，配套的 TUI 鼠标滚轮修复 (#5234)、Subagent checkpoint 续跑 (#5242)、MCP Registry 优先发现 (#5238) 等关键能力随之进入主线。同时仍有 4 个 Issue 处于 OPEN 状态，覆盖 API Key 隔离、模型上下文静默回退等用户实际痛点，需在后续小版本中跟进。

---

## 🚀 版本发布

过去 24 小时无新 Release Tag。

> 相关进展：v0.9.4 Release Train PR #5135 已于 08-06 合并，可关注后续正式 Tag 推送。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 要点 |
|---|-------|------|------|
| [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | EPIC: 命令边界分段重构（#2791） | CLOSED | 文档 / 清理 / v0.9.2 路线图级追踪 Issue，承载大型命令边界重构，4 个分层 PR 已分别推进，社区讨论 20 条，是当前最重要的工程化主线之一。 |
| [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | `OpenModel`（Anthropic 兼容）频繁 400: `'type' must be enabled/disabled/auto` | CLOSED | Provider 兼容性问题，用户多 Provider 场景首当其冲；错误间歇性出现，重试偶发修复，影响稳定性，需在客户端层加固参数枚举。 |
| [#5250](https://github.com/Hmbown/CodeWhale/issues/5250) | 仅能保存 1 个 API Key，多 Provider 切换痛苦 | **OPEN** | 用户高频痛点：DeepSeek + GLM 切换需反复取 Key，建议按 Provider 持久化凭据。直接影响多模型工作流的可落地性。 |
| [#5244](https://github.com/Hmbown/CodeWhale/issues/5244) | 未知 model id 静默回退到 128K legacy 上下文 | **OPEN** | "1M 模型在 128K 处悄悄压缩"——典型静默失败。一旦触发可能导致长上下文会话意外截断，对 0.9.4 而言是必须修复的负面体验。 |
| [#4828](https://github.com/Hmbown/CodeWhale/issues/4828) | macOS "underwater" shell 下 `open`/`osascript`/`launchctl` 退出 -54 | CLOSED | v0.9.0 引入了水下交互默认值，导致 macOS shell 工具链执行异常，回退至 v0.8.67 可恢复——典型平台回归，影响所有 macOS 用户。 |
| [#5253](https://github.com/Hmbown/CodeWhale/issues/5253) | 子代理嵌套 `max_depth` 可放大根会话预算 | **OPEN** | 子代理深度限制可被绕过，存在配置外溢的递归空间，关系到多 Agent 系统安全性与可预测性。 |
| [#5223](https://github.com/Hmbown/CodeWhale/issues/5223) | 长内容溢出时滚轮只控制输入历史而非内容区 | CLOSED | TUI 经典 UX 缺陷：鼠标滚轮事件路由错位，对长会话用户的可读性影响明显（详见 PR #5234 修复）。 |
| [#5178](https://github.com/Hmbown/CodeWhale/issues/5178) | Web admin digest "post" 返回 `ok:true` 但实际未发布 | CLOSED | "假成功"是最危险的反模式：草稿永远停留在 Pending 队列，需在响应中暴露实际写入结果或失败详情。 |
| [#4681](https://github.com/Hmbown/CodeWhale/issues/4681) | 重新打开会话时显示 `<turn_meta>` 内部块 | CLOSED | 会话回放泄漏元数据，会让用户对模型输出去信任度下降；归类到"小但刺眼"的 TUI 缺陷。 |
| [#5246](https://github.com/Hmbown/CodeWhale/issues/5246) | 发布 Profile 与本地 release gate 拆分（停止 fat LTO 拖累预推） | CLOSED | 显著改善贡献者与 Agent 的本地构建体验，长远影响 PR 周期与 CI 成本。 |

> 另外值得关注：#5245（同主题，git commit 触发无意义全量重建 SHA 嵌入）、#5046（Fleet 命名角色硬绑定）、#5040（Workflow 状态从 Composer 移至顶部状态栏）、#5035（Workflow 并行 fan-out 掩盖失败）均已 CLOSED，可在 v0.9.4 升级日志里追踪。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 功能 / 修复 |
|---|----|------|-------------|
| [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) | release: Codewhale v0.9.4 release train | CLOSED | **本次最重要的整合 PR**：77 次提交整合 v0.9.4 候选，覆盖 Workflow 状态栏重构、Subagent 与 Web Admin 等多条线索，是出货主线。 |
| [#5234](https://github.com/Hmbown/CodeWhale/pull/5234) | fix(tui): 鼠标捕获期间关闭 alternate scroll | CLOSED | 关闭 #5223：根因是终端模式同时启用 `EnableMouseCapture` 与 xterm alternate-scroll（DECSET1019），导致滚轮被抢走，体验回归正确路由。 |
| [#5242](https://github.com/Hmbown/CodeWhale/pull/5242) | feat(tui/subagent): 通过 followup 从 checkpoint 续跑中断的子任务 | CLOSED | `agents/followup` 在 `interrupted_continuable` 子任务上原本只能产生 dead-letter，现可基于真实 checkpoint resume，对长耗时任务（文档审阅、多步搜索）意义重大。 |
| [#5240](https://github.com/Hmbown/CodeWhale/pull/5240) | feat(tui/shell): 在工具结果中暴露 `wait` 真实耗时 | CLOSED | 把 `duration_ms` 从模型看不见的元数据移到可见内容，让模型能区分"刚开始"和"等了三分钟"——减少忙轮询与误判长卡死。 |
| [#5238](https://github.com/Hmbown/CodeWhale/pull/5238) | feat(mcp): MCP Registry 优先发现策略 | CLOSED | 在模型试图用 `exec_shell` 自定义代码前，先查公共 Registry 匹配 zero-env stdio 服务；新增 `registry_sync` 与可审计的"为什么没选 MCP"理由，显著扩展生态能力。 |
| [#5077](https://github.com/Hmbown/CodeWhale/pull/5077) | perf(prompt): 新鲜上下文渐进披露 | CLOSED | 保留 `AGENTS.md`/`CLAUDE.md` 项目权威即时载入；将全局技能块在 2,400 字符处截断并通过首轮 `load_skill` 懒加载正文，会话预算更稳。 |
| [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) | feat(acp): `session/prompt` 暴露文件 / 搜索 / git / patch / shell 工具 | CLOSED | 此前 ACP 仅流式文本，第三方编辑器（Zed、社区 `acp-deepseek-adapter`）拿到的只是"聊天代理"；现在补齐代码编辑闭环。 |
| [#5255](https://github.com/Hmbown/CodeWhale/pull/5255) | Layer 5.3: 命令面板 / 补全 / 发现筛选 | **OPEN** | 跟随 Layer 5.2（#4992）继续推进命令边界重构 EPIC 的整合验证，逐项核对验收标准，是 EPIC #2870 的下一节车厢。 |
| [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) | feat(runtime-api): Skill 全生命周期端点（install/update/uninstall/trust/audit） | **OPEN** | 让托管桌面 / Web 客户端可通过 `/v1/skills` 完成 TUI 内的全部技能管理（受 `require_runtime_token` 保护）。 |
| [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) | feat: Runtime API 内存端点（有界检查与生命周期） | **OPEN** | 补齐 Runtime API 在 v0.9.4 的 `/v1/memory` 路由族，让托管客户端不再依赖第二套内存存储。 |

> 另可关注：#5254（FreeBSD 构建修复）、#5236（Model Studio #5203 实锤证据文档）、#5132/#5133/#5130（Fleet 验证证据、Goal 循环、MCP 服务生命周期 Runtime API）——共同构成了 v0.9.4 后 Runtime API 的"可托管化"骨架。

---

## 📈 功能需求趋势

从 Issue 标签与摘要可提炼出四条主线：

1. **多 Provider / 多模型工作流**：#4978、#5250、#5244 共同指向"凭据隔离 + 兼容层稳健 + 上下文显式提示"，表明用户已把 CodeWhale 当作**多模型接入门户**而非单点工具。
2. **TUI 体验精细化**：#5223、#4681、#5040、#5035 集中在"内容可见性 / 状态可读性 / 滚动与并行失败暴露"——TUI 不再是 demo，而是日常工作面。
3. **运行时与托管化 API**：

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*