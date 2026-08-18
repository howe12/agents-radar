# AI CLI 工具社区动态日报 2026-08-18

> 生成时间: 2026-08-18 00:51 UTC | 覆盖工具: 9 个

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

**报告日期：2026-08-18**
**覆盖工具：Claude Code / OpenAI Codex / Gemini CLI / GitHub Copilot CLI / Kimi Code CLI / OpenCode / Pi / Qwen Code / DeepSeek TUI**

---

## 一、生态全景

AI CLI 工具已从"单一 LLM 对话界面"演化为"多 Agent 协作平台"，**2026 Q3 行业进入了以 Agent 可靠性、成本控制、跨端一致性为主战场的深水区**。今日数据呈现出三大宏观信号：(1) 所有主流仓库都在解决**多 Agent 编排**（Subagent 可靠性、消息队列、跨机器协作），占比超 40%；(2) MCP 协议从"快速扩展"进入"治理期"，OAuth 刷新、stdio 进程回收、schema 兼容性成为高频痛点；(3) Windows 平台成为系统性短板——Claude Code GPU 崩溃、Codex WSL 中毒、Copilot CLI ENOEXEC、Qwen Code Ctrl+V 失效，跨平台债务集中爆发。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 版本发布 | 综合活跃度 |
|------|-----------|---------|----------|-----------|
| **Qwen Code** | 50 | 50 | v0.21.13 | 🔥🔥🔥🔥🔥 |
| **DeepSeek TUI** | ~10+ | 20+ | v0.9.9 "Truth and Resilience" | 🔥🔥🔥🔥🔥 |
| **OpenAI Codex** | ~10+ | 10+ | rust-v0.148.0-alpha.21 | 🔥🔥🔥🔥 |
| **Claude Code** | ~10+ | ~10 | v2.1.234 | 🔥🔥🔥🔥 |
| **Gemini CLI** | ~10+ | 10+ | v0.56.0-nightly | 🔥🔥🔥🔥 |
| **OpenCode** | ~10+ | 10 | 无 | 🔥🔥🔥🔥 |
| **Pi** | ~10+ | 10 | 无 | 🔥🔥🔥 |
| **GitHub Copilot CLI** | 29 | 1 | 无 | 🔥🔥🔥 |
| **Kimi Code CLI** | 0 | 0 | 无 | ⚪ |

> 注：除 Qwen/Copilot 给出了精确计数外，其余以 Top 10 + 全量热度概略估算。

**关键观察**：
- **Qwen Code 流量最高**：50/50 双高表明已进入大规模迭代期，Autofix 流水线与 Web Shell 治理并行推进。
- **Kimi Code 完全静默**：近 24 小时零活动，需要警惕维护节奏问题。
- **OpenCode / Pi 无版本但 PR 密集**：说明两者处于"内部清理 + 协议正确性"阶段，未达发布门槛。
- **Copilot CLI 单 PR**：仅有 #4510 一条 PR，提示近期主要为 Issue 治理与 Bug 修复。

---

## 三、共同关注的功能方向

### 3.1 🧩 多 Agent / Subagent 编排（**全员关注**）

| 工具 | 关键诉求 |
|------|---------|
| Claude Code | 多 Agent 跨机器协议（#28300）、消息队列模式（#50246，198 👍） |
| OpenAI Codex | agents dashboard、`codex queue`、forked worker 递归委托（#13491） |
| Gemini CLI | Subagent 误报成功（#22323，P1）、无限挂起（#21409，8 👍） |
| DeepSeek TUI | subagent 工具合约过载（#5123）、多 subagent 超时（#1425） |
| Pi | Subagent 进度可靠性（#8250）、失败信息丢失 |

**共同诉求**：可见性、可控性、失败语义、可观测回调。社区普遍从"能跑"转向"能治理"。

### 3.2 🔌 MCP 协议生态（**Codex / Copilot / OpenCode / Claude Code**）

| 工具 | 关键诉求 |
|------|---------|
| OpenAI Codex | OAuth 不刷新（#17265）、stdio 进程泄漏（#38754） |
| Copilot CLI | 1.0.79 issuer 校验回归（#4439/#4480）、BigInt 解析（#4211） |
| OpenCode | 工具连接但未暴露（#33027）、schemars uint32 污染（#31002） |
| Claude Code | macOS Desktop filesystem MCP 不可用（#80094） |

**共同诉求**：OAuth 生命周期管理、stdio 进程回收、schema 兼容性、per-server 信任配置。

### 3.3 💰 成本与上下文控制（**Claude / Pi / OpenCode / Qwen / DeepSeek**）

| 工具 | 关键诉求 |
|------|---------|
| Claude Code | /claude-api 技能无差别占用 77% 上下文（#63566） |
| Pi | 自动压缩失效（#6879，17 👍）、OpenRouter 2.5× 成本惩罚（#7995） |
| OpenCode | 扣费异常（#43009）、Go 模型列表与可用性不一致 |
| Qwen Code | /compress 后状态行不刷新（#6806）、/compress-fast 上下文丢失（#9320） |
| DeepSeek TUI | unverified_live_pricing 诚实标注（#5402） |

**共同诉求**：缓存成本可控、压缩行为可预测、计费透明。

### 3.4 🪟 Windows 平台一致性（**全员欠账**）

| 工具 | 关键诉求 |
|------|---------|
| Claude Code | GPU 进程崩溃集群（#80444/#81341/#85540）、MSIX CIG 兼容 |
| OpenAI Codex | WSL Shell 路径中毒（#25317）、stdio MCP 泄漏（#38754） |
| OpenCode | 路径权限（#36681）、npm postinstall 失败（#41370） |
| Copilot CLI | Oracle Linux 10 ENOEXEC（#4382） |
| Qwen Code | Ctrl+V 粘贴失效（#9061，P1） |

**共同诉求**：跨平台安装矩阵、终端/TUI 渲染一致性、沙箱边界清单。

### 3.5 🔄 长会话与上下文压缩（**Pi / Claude / DeepSeek / Qwen**）

| 工具 | 关键诉求 |
|------|---------|
| Pi | 100% context 后未触发压缩（#6879）、TUI 1.6s 卡顿（#8029） |
| Claude Code | 跨会话消息被静默丢弃（#86298，~5 分钟超时） |
| DeepSeek TUI | 300 万字 + 多 subagent 触发 agent_wait 超时（#1425） |
| Qwen Code | /compress + /rewind 上下文丢失（#9320） |

**共同诉求**：每 turn 后压缩检查、压缩状态可见性、压缩失败可恢复。

### 3.6 🛡️ 自动化防护与安全边界（**Claude / Gemini / Qwen / Copilot**）

| 工具 | 关键诉求 |
|------|---------|
| Claude Code | guard-destructive-git hook、/ralph-loop 自启防护（#87395） |
| Gemini CLI | Subagent 绕过权限运行（#22093，已修复）、MCP 环境变量注入 |
| Qwen Code | Autofix 评审事件风暴与重复派发（#9296，P1） |
| Copilot CLI | MCP 注册表失败时拒绝所有本地 MCP（#4512） |

**共同诉求**：fail-closed 默认值、自动化流程的可中止性、权限边界清晰化。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | **多 Agent 协作 + 桌面端一体化** | 桌面端重度用户、跨机器团队协作 | 强 TUI + Desktop 双端、消息队列/审批流 |
| **OpenAI Codex** | **Subagent 仪表盘 + GPT-5.6 长上下文** | 重度 GPT 用户、跨设备工作者 | 仪表盘/queue/realtime 镜像、app-server API |
| **Gemini CLI** | **Subagent 可靠性 + 评估驱动研发** | 工程化团队、质量敏感型组织 | 行为评估体系、Auto Memory、SSR Agent 批量治理 |
| **Copilot CLI** | **企业 MCP + 模型目录治理** | 企业开发者、依赖 Atlassian/GitLab 等远程 MCP | OAuth RFC 8414 严格合规、企业模型同步 |
| **OpenCode** | **开源 MCP 扩展 + Go 商业化** | 开源爱好者、成本敏感个人开发者 | Effect/Promise 插件化、per-server 信任钉选 |
| **Pi** | **多 Provider + 多模态 + 长会话** | 高级个人用户、多模型调度者 | 多模态输入、Provider 协议深度适配 |
| **Qwen Code** | **Web Shell 跨端统一 + 自动化学流水线** | 内部研发体系、自动化 Pipeline 用户 | Web Shell daemon、Autofix/Review 全流程 |
| **DeepSeek TUI** | **诚实标注 + i18n + 测试基建** | 多语言用户、关注可控性的开发者 | 诚实路径标注、i18n 字典化、测试 flakiness 治理 |
| **Kimi Code CLI** | **（停滞状态，需观察）** | — | — |

**关键差异**：
- **商业模式**：OpenCode Go 与 Copilot Business 代表"工具商业化"，其余仍以开放为主。
- **架构路线**：Codex 与 Qwen Code 押注"app-server / daemon"，Claude Code 押注"会话/审批流"，Gemini CLI 押注"评估驱动"。
- **多模态**：Pi 是唯一明确发力视频/音频/图像粘贴的工具。

---

## 五、社区热度与成熟度

### 5.1 社区热度排名（按评论 + 👍 综合）

| 排名 | 工具 | 信号指标 |
|------|------|---------|
| 🥇 | Claude Code | 消息队列模式 #50246（198 👍）、多 Agent 协议 #28300（38 评论） |
| 🥈 | OpenAI Codex | 60s 自动解析 #28969（195 👍）、MCP OAuth #17265（57 👍） |
| 🥉 | Pi | XDG 规范 #534（39 👍）、压缩失效 #6879（17 👍） |
| 4 | OpenCode | Plan Mode 自动切换 #7801（32 👍）、归档恢复 #24153（11 👍） |
| 5 | Copilot CLI | SHIFT+ENTER #1481（17 👍 + 28 评论） |
| 6 | Gemini CLI | Generalist 挂起 #21409（8 👍）、Auto Memory #26522 |
| 7 | Qwen Code | 高评论数但分散在 50 条 issue 中，无单点爆款 |
| 8 | DeepSeek TUI | 测试可靠性 #5056、SSH 阻断 #1829 |

### 5.2 成熟度判断

| 阶段 | 工具 | 特征 |
|------|------|------|
| **规模化迭代** | Qwen Code、DeepSeek TUI、Claude Code | Issue/PR 流量大，版本节奏稳定，进入"全栈治理"阶段 |
| **核心能力攻坚** | OpenAI Codex、Gemini CLI | Subagent 仪表盘与可靠性仍是主战场 |
| **协议治理期** | OpenCode、Pi | 集中修复 Provider/MCP 兼容性，无大版本 |
| **Bug 修复主导** | Copilot CLI | 1 条 PR / 29 条 Issue，处于"清债"状态 |
| **⚠️ 停滞风险** | Kimi Code CLI | 24 小时零活动，需关注维护节奏 |

---

## 六、值得关注的趋势信号

### 📡 信号 1：MCP 已成事实标准，但治理滞后
- **数据**：4 个工具同日报告 MCP 相关 Issue（OAuth 刷新、stdio 泄漏、schema 警告、信任配置）。
- **洞察**：MCP 协议本身在快速扩张，但客户端实现质量参差。开发者选型时应优先考察工具的 MCP 生命周期管理能力（进程回收、token 刷新、per-server 信任）。
- **行业含义**：MCP 协议可能需要在 2026 Q4 前出一份"客户端实现指南"，否则将出现"协议标准但体验割裂"的局面。

### 📡 信号 2：Subagent 从"能跑"到"可治理"是 2026 下半年最大主题
- **数据**：5 个工具报告 Subagent 相关 P1 问题（Gemini 误报、Codex 不唤醒、DeepSeek 超时、Claude 跨机器、Pi 进度丢失）。
- **洞察**：Subagent 已成默认能力，但**失败语义、可见性、回调机制**普遍缺失。
- **行业含义**：未来 6 个月，"Subagent 可观测性"将成为工具差异化竞争点。开发者可重点关注 Codex `codex agents` 仪表盘、Gemini SSR Agent 批处理模式。

### 📡 信号 3：Windows 平台系统性掉队
- **数据**：5 个工具的 P1 Issue 与 Windows 相关，覆盖 GPU 崩溃、Shell 路径、MCP 进程、Ctrl+V、ENOEXEC。
- **洞察**：这不是单点缺陷，而是测试矩阵投入不足的结构性问题。
- **行业含义**：Windows 用户的工具选型需谨慎——Copilot CLI、Claude Code Desktop 仍是高频踩坑点，建议在生产环境部署前等待 1-2 个 minor 版本。

### 📡 信号 4：成本控制从"事后账单"转向"事中可见"
- **数据**：3 个工具同日推动 token 消耗可视化（Claude /claude-api 上下文占用、Open

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：2025-10 ~ 2026-08 ｜ 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行

按"社区关注度 × 待解决痛点 × 影响面"综合排序：

| # | Skill（PR） | 功能定位 | 社区热点 | 状态 |
|---|---|---|---|---|
| 1 | **[skill-creator 评测体系修复 #1298](https://github.com/anthropics/skills/pull/1298)** | 修复 `run_eval.py` 在所有场景下误报 0% recall 的核心 bug；连带修复 Windows 流读取、触发检测、并发 worker | 直接影响所有 Skill 的描述优化闭环，对应 Issue [#556](https://github.com/anthropics/skills/issues/556) 有 12 条评论 + 7 个 👍，问题已被 10+ 用户独立复现 | OPEN |
| 2 | **[document-typography #514](https://github.com/anthropics/skills/pull/514)** | 自动修复 AI 生成文档中的孤行/寡行/编号错位等排版缺陷 | 解决"每个 Claude 生成文档都中招"的普遍痛点，作者指出用户极少主动要求良好排版 | OPEN |
| 3 | **[ODT Skill #486](https://github.com/anthropics/skills/pull/486)** | 全面支持 OpenDocument（.odt/.ods）创建、模板填充、HTML 解析 | 补齐 DOCX/PDF 之外的 ISO 标准开放格式空白，企业及开源场景刚需 | OPEN |
| 4 | **[skill-quality-analyzer + skill-security-analyzer #83](https://github.com/anthropics/skills/pull/83)** | 元 Skill：五维度质量评估 + 安全审计，纳入 example-skills 市场 | 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论）"namespace 信任边界滥用"形成强呼应 | OPEN |
| 5 | **[self-audit（推理质量门 v1.3.0）#1367](https://github.com/anthropics/skills/pull/1367)** | 交付前的"机械校验 + 四维推理审查"质量门 | 对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 的三门管道提案，体现社区对输出验证的系统化诉求 | OPEN |
| 6 | **[frontend-design 改进 #210](https://github.com/anthropics/skills/pull/210)** | 重写 frontend-design 的指令清晰度与可执行性 | 让"single conversation 内 Claude 能真正遵循"成为约束，凸显 Skill 设计从"教学文档"转向"操作指令"的趋势 | OPEN |
| 7 | **[testing-patterns #723](https://github.com/anthropics/skills/pull/723)** | 覆盖 Testing Trophy 哲学、单元/组件/E2E/契约测试的完整最佳实践 | 工程化诉求外溢至 Skills 生态，开发者期望 Claude 直接遵循测试规范 | OPEN |
| 8 | **[ServiceNow 平台 Skill #568](https://github.com/anthropics/skills/pull/568)** | 覆盖 ITSM/ITOM/ITAM/SecOps/FSM/SPM/CSDM/IntegrationHub 全栈 | 企业级 SaaS 平台集成成为新蓝海，单 PR 横跨 5 个月仍在迭代 | OPEN |

---

## 2. 社区需求趋势（基于 Issues）

| 需求方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🛡️ 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论）— 社区 Skill 借 `anthropic/` 命名空间冒充官方，构成提权风险 | 🔴 最强（Top 1 议题） |
| **🏢 组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论/8 👍）— Claude.ai 内一键分享，告别手动传 `.skill` 文件 | 🟠 强 |
| **🧠 Agent 状态与记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329)（9 评论）— `compact-memory`：用符号化记号替代长 prose 持久记忆 | 🟡 中 |
| **🔌 Skills → MCP 化** | [#16](https://github.com/anthropics/skills/issues/16)（4 评论）— 将 Skill 暴露为 MCP Server，统一工具协议 | 🟡 中 |
| **🧪 评测与质量门** | [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）— Pre-task → Adversarial Review → Delivery 三门管道 | 🟡 中 |
| **📦 插件内容去重** | [#189](https://github.com/anthropics/skills/issues/189)（6 评论/9 👍）— `document-skills` 与 `example-skills` 安装后产生重复 Skill 挤占上下文 | 🟡 中 |
| **🪟 跨平台兼容** | [#556](https://github.com/anthropics/skills/issues/556)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050) — Windows 下 `run_eval.py` 全面失效 | 🟡 中 |
| **📄 文档格式扩展** | [#486](https://github.com/anthropics/skills/pull/486) ODT、[#12](https://github.com/anthropics/skills/issues/12) docx 空白重排 | 🟢 稳定需求 |
| **🏛️ 企业平台集成** | ServiceNow #568、SAP-RPT-1-OSS #181、SharePoint #1175 | 🟢 增量需求 |
| **💾 上下文预算控制** | [#1487](https://github.com/anthropics/skills/issues/1487)（4 评论）— `claude-api` Skill 单次注入 156k tokens 直接打爆上下文 | 🟢 新兴痛点 |

---

## 3. 高潜力待合并 Skills

以下 PR 处于 OPEN 状态但解决路径清晰、影响面大，预计近期落地：

1. **[#1298 skill-creator 评测修复](https://github.com/anthropics/skills/pull/1298)** — 阻塞所有 Skill 描述优化流程，是仓库级 P0
2. **[#514 document-typography](https://github.com/anthropics/skills/pull/514)** — 通用性强、零依赖、跨所有文档生成场景
3. **[#486 ODT Skill](https://github.com/anthropics/skills/pull/486)** — 填补格式矩阵，触发词定义清晰
4. **[#210 frontend-design 改进](https://github.com/anthropics/skills/pull/210)** — 已有 2 个月的社区迭代共识
5. **[#83 skill-quality/security analyzers](https://github.com/anthropics/skills/pull/83)** — 与 #492 安全议题共振，合并可缓解信任危机
6. **[#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367)** — 与 #1385 提案呼应，质量门概念已成熟
7. **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 工程规范类 Skill 的标杆样本
8. **[#541/#538/#539 DOCX/PDF/YAML 系列小修](https://github.com/anthropics/skills/pull/541)** — Lubrsy706 提交的"硬骨头"修复，作者持续贡献度高

> 💡 **观察**：排名前 20 的热门 PR 中 **100% 仍为 OPEN**，反映仓库 Review 吞吐瓶颈或评审标准趋严，是社区隐忧。

---

## 4. Skills 生态洞察（一句话）

> **社区当前最集中的诉求是"Skill 自身需要被治理"——元 Skill（质量分析、安全审计、自审质量门、命名空间信任边界）正取代"新增一个能干什么的 Skill"，成为下一阶段生态竞争的主战场。**

辅助佐证：Top 5 议题中 3 条直接关于 Skill 治理（#492、#556、#189），热门 PR 前 5 名中 3 个是元/修复类（#1298、#83、#1367），需求侧从"功能广度"转向"可靠性与可验证性"。

---

# Claude Code 社区动态日报

**日期：2026-08-18**
**数据来源：github.com/anthropics/claude-code**

---

## 一、今日速览

今日 Claude Code 仓库发布 **v2.1.234**，新增 `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量与 `selection:clear` 键位绑定功能。社区焦点集中在 **Windows 桌面端 GPU 进程崩溃**（多 issue 关联同一根因）与 **跨会话消息丢失**两条回归问题上；同时，呼声最高的"消息队列模式"功能请求（👍198）已被官方关闭。多 Agent 跨机器协作与模型工具调用偏好的讨论持续升温。

---

## 二、版本发布

### v2.1.234（2026-08-17）

| 更新内容 | 说明 |
|---------|------|
| `CLAUDE_CODE_PROJECT_DIR_NAME` 环境变量 | 为每个会话分配独立配置目录时，可自定义该项目下的 transcript 目录短名 |
| `selection:clear` 键位绑定 | 新增清除应用内选定内容的按键动作，便于在 TUI 中自定义按键映射 |

> 版本号说明：Desktop Windows 端当前并行版本为 1.24012.1.0。

---

## 三、社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 👍 | 关注理由 |
|---|------|------|------|----|---------|
| [#50246](https://github.com/anthropics/claude-code/issues/50246) | 消息队列模式（替代直接中断） | **CLOSED** | 60 | **198** | 社区呼声最高的体验改进——允许在 Claude 执行任务时排队后续消息，而非打断当前任务 |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | Windows 桌面端 GPU 崩溃（0x060C201E） | OPEN | 39 | 5 | 影响 MSIX 安装完整性，需手动 Repair 才能恢复，硬件级兼容性严重缺陷 |
| [#28300](https://github.com/anthropics/claude-code/issues/28300) | 跨机器多 Agent 协作协议 | OPEN | 38 | 0 | 长期热门 Feature Request：构建 Agent-to-Agent 通信协议以支持分布式团队协作 |
| [#19649](https://github.com/anthropics/claude-code/issues/19649) | 模型频繁误用 Bash 而非内置 Read/Grep | OPEN | 27 | **97** | 长期未解的模型行为问题：明显场景下倾向于调用 sed/grep 而非专用工具，导致成本上升 |
| [#81341](https://github.com/anthropics/claude-code/issues/81341) | MSIX CIG + vk_swiftshader.dll 致 GPU 崩溃 | OPEN | 21 | 3 | 与 #80444、#85540 关联的同一 Windows 签名兼容性问题集群的核心 |
| [#86298](https://github.com/anthropics/claude-code/issues/86298) | 桌面端跨会话消息被静默丢弃（~5 分钟超时） | OPEN | 13 | 1 | 自 1.28929.0 起出现的回归：消息被挂起等待审批，但 UI 从未呈现该审批 |
| [#80094](https://github.com/anthropics/claude-code/issues/80094) | macOS 桌面端 filesystem MCP 服务器不可用 | OPEN | 11 | 0 | 两代打包方案下 MCP 均无法工作：新 schema 未派发，旧 schema 在注册时丢失 |
| [#64568](https://github.com/anthropics/claude-code/issues/64568) | Esc 退出 /btw 时误拒待处理工具调用 | OPEN | 10 | 9 | 误触体验问题：按 Esc 应仅退出 /btw 模式，却触发了工具权限拒绝 |
| [#86237](https://github.com/anthropics/claude-code/issues/86237) | 桌面端跨会话消息未进入运行时队列 | OPEN | 8 | 1 | 与 #86298 高度关联的回归：2.1.222 → 2.1.227 间引入 |
| [#63566](https://github.com/anthropics/claude-code/issues/63566) | /claude-api 技能无差别占用 ~77% 上下文 | **CLOSED** | 8 | 9 | 重大成本 Bug：中性问题触发整个技能文档加载，与 #87191 同一根因 |

> 此外，#73325（Windows 桌面端权限提示数字键方向与 CLI 相反）已暴露多端 UX 不一致问题。

---

## 四、重要 PR 进展（Top 10）

| # | 标题 | 状态 | 内容概要 |
|---|------|------|---------|
| [#87395](https://github.com/anthropics/claude-code/pull/87395) | ralph-wiggum：使用 disable-model-invocation 阻止模型自调用 | **CLOSED** | 修复 `/ralph-loop` 可被模型自启的隐患，替换无效的 `hide-from-slash-command-tool` 字段 |
| [#30692](https://github.com/anthropics/claude-code/pull/30692) | 新增容器隔离示例（含 guard hook） | **CLOSED** | 提供 Podman/Docker 容器化运行示例；`guard-destructive-git` PreToolUse hook 拦截 force push、hard reset、`rm -rf`、PR merge |
| [#29284](https://github.com/anthropics/claude-code/pull/29284) | 文档：`excludedCommands` 需 `: *` 后缀 | **CLOSED** | 修正示例 + README 提示：缺少 `: *` 仅匹配裸命令，无法匹配带参命令 |
| [#72451](https://github.com/anthropics/claude-code/pull/72451) | 移除 init-firewall.sh 中的 statsig.anthropic.com | **CLOSED** | 域名不再解析，会导致 devcontainer 启动失败 |
| [#79131](https://github.com/anthropics/claude-code/pull/79131) | 修复 `validate-settings.sh` 在无小写键时异常退出 | OPEN | 修复 `set -euo pipefail` 导致脚本在无匹配键时静默失败 |
| [#84004](https://github.com/anthropics/claude-code/pull/84004) | 限制 frontmatter 解析范围 | **CLOSED** | 仅解析首个 YAML frontmatter 块，避免 Markdown 正文中的 `---` 被误识别 |
| [#84003](https://github.com/anthropics/claude-code/pull/84003) | 透传顶层失败状态 | **CLOSED** | 重复 issue 检测脚本不再吞掉错误，保留日志同时正确返回非零退出 |
| [#83999](https://github.com/anthropics/claude-code/pull/83999) | 校验 gh flag 取值完整性 | **CLOSED** | 防止 `--limit` 等需要取值的 flag 被吞掉参数 |
| [#83995](https://github.com/anthropics/claude-code/pull/83995) | 校验 `--add-label`/`--remove-label` 取值 | **CLOSED** | 修复 `set -u` 下 `$2: unbound variable` 的内部错误 |
| [#83993](https://github.com/anthropics/claude-code/pull/83993) | 拒绝自引用重复 issue | **CLOSED** | 防止 `comment-on-duplicates.sh` 提议将同一 issue 标记为自身的重复 |

---

## 五、功能需求趋势

按讨论热度排序，社区最关注的演进方向如下：

1. **多 Agent 协作协议**（#28300、#50246 周边讨论）—— 跨机器、跨会话的 Agent-to-Agent 通信与任务编排
2. **IDE / 桌面端集成质量** —— VS Code 扩展 2.1.233 出现 Fable 5 思考块空值（#86865）；桌面端 Windows GPU 崩溃集群
3. **成本与上下文优化** —— #63566/#87191 /claude-api 技能无差别加载；社区呼吁更细粒度的技能触发控制
4. **工具调用偏好改进** —— #19649 长期呼吁模型优先使用专用工具（Read/Grep）而非通用 Bash
5. **权限与跨平台 UX 一致性** —— #73325（CLI vs 桌面端数字键语义相反）、#83567（2/3 选项布局下"No"键位不稳定）
6. **环境与安装健壮性** —— Windows 上 Node.js 路径下 `defines.json` 解析失败（#85663）、AMD 老 CPU 缺 AVX 启动失败（#86125）
7. **TUI 交互细节** —— #64568、#87156 等 Esc/F 键语义与 /btw 模式行为修正

---

## 六、开发者关注点

综合 24 小时数据，开发者社区反馈集中在以下痛点：

- 🔴 **桌面端稳定性是当前最大风险面**：Windows GPU 进程崩溃（#80444 / #81341 / #85540）与跨会话消息回归（#86237 / #86298）形成两条相互独立却同等严重的故障链
- 🟠 **跨表面行为不一致**：CLI、桌面端、VS Code 扩展对相同语义操作（Esc、数字键、fork）呈现不同结果，影响肌肉记忆
- 🟡 **成本透明度与控制粒度**：技能加载、上下文占用、模型挑选工具的偏好均直接关联 token 消耗，开发者需要更细粒度的"何时加载 / 加载多少"控制
- 🟢 **脚本与示例质量提升**：#30692（容器化）、#29284（沙箱配置）、#84004 等 PR 显示仓库脚本健壮性正在持续修复
- ⚠️ **Agent 失控防护需求上升**：#87395（自启循环）、#30692（破坏性 git 拦截）反映出社区正从"能力扩展"转向"安全边界"诉求

---

*日报基于 anthropics/claude-code 仓库过去 24 小时数据生成；状态字段以 GitHub 实时为准。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-18**

---

## 📌 今日速览

今日 Codex 仓库动态密集，PR 端围绕 **代理面板（Agents Dashboard）** 与 **OTel 代理策略重构**两大主题集中合并，多个关键功能形成闭环；Issue 端则持续聚焦 **Windows/macOS Desktop 回归问题** 与 **MCP/Remote Control 工作流异常**，其中"自动解析问题"功能收到 195 个 👍，是本月社区呼声最高的体验改进。

---

## 🚀 版本发布

- **rust-v0.148.0-alpha.21** ([release](https://github.com/openai/codex/releases/tag/rust-v0.148.0-alpha.21))：Rust 侧 alpha 预发布通道常规迭代，未提供详细变更说明。结合近期 0.148.0-alpha 系列（已修复 #38761、#38762 等 rollouts 迁移缺陷），建议关注 `codex migrate-rollouts` 与新 agents dashboard 相关变动。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 要点 |
|---|-------|------|------|
| [#28969](https://github.com/openai/codex/issues/28969) | 关闭 60s 自动解析问题 | 💬79 / 👍195 | 当 Codex CLI 提问 60 秒未响应会自动"自答"，社区强烈要求提供禁用配置。该 issue 月度高居榜首，195 个 👍 显示用户普遍希望在关键任务中保留决策权。 |
| [#17265](https://github.com/openai/codex/issues/17265) | 路由 MCP OAuth Token 不自动刷新 | 💬31 / 👍57 | 即便 `~/.codex/.credentials.json` 中存有 refresh_token，过期后 MCP 调用仍直接报错。涉及企业 OAuth 集成链路，影响所有 routed MCP 用户。 |
| [#37403](https://github.com/openai/codex/issues/37403) | macOS Desktop Remote Control 回归 | 💬21 / 👍17 | 8 月 7 日更新后无法继续 CLI 线程，报错 `already has an active writer`。移动端 ↔ 桌面端跨设备工作流是 Plus/Pro 用户高频场景。 |
| [#15723](https://github.com/openai/codex/issues/15723) | 后台子代理完成不唤醒父代理 | 💬18 / 👍8 | 子代理/subagent 完成后未回调父代理，导致必须手动查询进度，影响多代理编排效率。 |
| [#17793](https://github.com/openai/codex/issues/17793) | Backspace 删除多字符（TUI） | 💬16 / 👍5 | TUI 在 Kitty 终端下退格行为异常，类似问题在 #28969 等 TUI 类工单中也有体现，影响输入体验。 |
| [#23418](https://github.com/openai/codex/issues/23418) | 移动端远程创建的 worktree 线程未关联项目 | 💬12 / 👍4 | Desktop 侧栏缺少该线程，疑似 project↔thread 关联层 bug，远程办公场景痛点。 |
| [#13491](https://github.com/openai/codex/issues/13491) | Forked Worker 继承父意图导致递归委托 | 💬10 / 👍11 | 子代理把"用户让父代理做的事"误读为直接指令，存在潜在循环调用风险。 |
| [#33282](https://github.com/openai/codex/issues/33282) | `create_thread` 未继承 worktree 任务的自动审批模式 | 💬9 / 👍5 | app-server API 行为差异，影响自动化脚本与 Desktop 的一致性体验。 |
| [#25317](https://github.com/openai/codex/issues/25317) | Windows Desktop + WSL Shell 路径中毒 | 💬8 / 👍3 | 继 #22185、#16970 之后的回归，Windows 沙箱与 WSL 边界问题反复出现。 |
| [#38754](https://github.com/openai/codex/issues/38754) | Windows 端 stdio MCP 服务重复 spawn 且不被回收 | 💬7 / 👍2 | 单次任务内每个回合都泄漏 MCP 进程，长期运行将耗尽系统资源。 |

---

## 🛠️ 重要 PR 进展

| PR | 主题 | 说明 |
|----|------|------|
| [#39114](https://github.com/openai/codex/pull/39114) | 新增 `codex agents` 仪表盘命令 | 直接打开共享 agents 总览，无需新建会话；Unix 自动拉起本地 app server，支持 `--remote` 接入已有 server。 |
| [#39115](https://github.com/openai/codex/pull/39115) | 移除实验性 thread config 端点 | 清理 `experimental_thread_config_endpoint`，统一走本地 app-server 加载逻辑，减少配置漂移。 |
| [#39112](https://github.com/openai/codex/pull/39112) | Agents 总览升级为可交互任务面板 | 支持启动任务、打开根会话、重命名、停止运行；广终端显示详情，仅展示根会话但反映子代理状态。 |
| [#39113](https://github.com/openai/codex/pull/39113) | Realtime 会话镜像交互请求 | 执行/权限/补丁审批、用户输入均会镜像至 realtime 会话，引导用户回 app 处理，闭环多端体验。 |
| [#39102](https://github.com/openai/codex/pull/39102) | GPT-5.6 最大上下文提升至 872k | `gpt-5.6-sol/terra/luna` 三个变体均放宽限制，并同步生成对应 Bedrock 条目，企业部署无需再手动覆盖。 |
| [#39103](https://github.com/openai/codex/pull/39103) | Linux 沙箱进程 `--cap-drop ALL` | bubblewrap 两种启动模式均丢弃全部 capabilities，inner stage 校验后才执行命令，强化 Linux 沙箱安全姿态。 |
| [#39101](https://github.com/openai/codex/pull/39101) | 升级 rmcp 到 3.1.2 | 采用原生 JSON-RPC 解码，移除本地多轮 tool result 兼容层；支持 OAuth protected-resource metadata discovery。 |
| [#39100](https://github.com/openai/codex/pull/39100) | 历史插入避免重复查询终端尺寸 | 把 TUI 已有缓存屏幕尺寸传入 history 路径，减少后端调用，间接提升响应流畅度。 |
| [#39098](https://github.com/openai/codex/pull/39098) | Exec-server 请求链路全程 Trace | 入站消息入队即开 span，覆盖 dispatch、响应、网络策略回调，可观测性显著增强。 |
| [#39092](https://github.com/openai/codex/pull/39092) | 新增 `codex queue` 命令 | 通过 `thread/queue/add` app-server API 给已有会话投递消息，按 UUID 或精确名称解析会话，便于自动化注入任务。 |

> 另有 OTel 代理策略 6 连发 PR（[#39105](https://github.com/openai/codex/pull/39105) ~ [#39091](https://github.com/openai/codex/pull/39091)），将 codex-otel、Statsig、Sentry 等所有出站流量统一收敛到 `codex-http-client` 代理策略下，关闭 `NO_PROXY` 与企业 CA 的兼容盲区。

---

## 📈 功能需求趋势

1. **多代理（Subagent）管理体验**：`codex agents`、`/agents` 面板、`codex queue`、agents 总览等连续 PR 落地，呼应 #15723、#13491 等子代理行为类 bug，社区已从"能跑"迈向"可控、可观测"。
2. **跨设备 Remote Control 工作流**：Desktop ↔ Mobile 远程会话是本月最密集的反馈来源，#37403、#23418、#35351、#28238 等工单共同勾勒出"会话归属、续接、UI 状态同步"的完整痛点图。
3. **可观测性与企业网络合规**：OTel 代理策略 + Windows 沙箱 telemetry 透传、Sentry 上传走代理，形成"日志/指标/反馈全链路符合代理策略"的企业级落地。
4. **Linux/Windows 沙箱加固**：capabilities 全量丢弃、bubblewrap 双模式校验，体现社区（尤其 #38518、#25317 用户）对沙箱稳定性的高度关注。
5. **GPT-5.6 模型能力扩展**：max context 提升到 872k 是直接面向长上下文工作流（代码库审计、长文档总结）的关键升级。
6. **贡献者激励与文档质量**：#37585 提议高质量 Bug 报告获得额外额度；#39085 指出官方文档把 unsafe 前缀规则当作安全示例，提示文档治理需与产品迭代同步。

---

## 💡 开发者关注点

- **CLI 与 Desktop 行为不一致**：#33282、#33599、#38855 均反映同一配置在 CLI 与 Desktop 下表现不同，自动化脚本作者希望统一 app-server 行为边界。
- **MCP 集成稳健性**：OAuth 刷新、stdio 进程回收、桌面端节点 REPL 工具注入等工单集中爆发，说明 MCP 已成为开发者扩展 Codex 的主流路径，但底层生命周期管理仍是薄弱环节。
- **TUI 体验细节**：Backspace、终端标签命名（#35626）、`/resume` 过滤器（#36010）、Ctrl+PgUp 切换任务（#32878）等"小但烦"的问题持续累积，是高频低优先级工单的主要来源。
- **Rollouts/会话迁移可靠性**：`migrate-rollouts` 在 #38761、#38762 中暴露空历史与命名丢失问题，对依赖本地持久化的重度用户影响显著。
- **Windows 平台持续掉队**：从 WSL shell、stdin MCP、读循环、系统卡顿（#38518）到任务面板计时器（#38908），Windows 仍是高频问题集中地，值得官方在测试矩阵中加强。

> **建议**：升级前关注 `migrate-rollouts` 相关修复是否落地；Windows 用户可暂缓跨设备 remote 工作流依赖；企业部署建议同步跟进 OTel 代理策略 6 连发 PR 的合并状态。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：** 2026-08-18
**数据来源：** github.com/google-gemini/gemini-cli

---

## � 今日速览

Gemini CLI 今日发布了 v0.56.0 nightly 版本，同时社区围绕**子智能体（Subagent）可靠性**和**Auto Memory 系统**展开了密集讨论。维护者 `@joneba-google`（SSR Agent）当日批量合并了 10+ 个历史 Issue 的修复 PR，标志着项目进入稳定性扫尾阶段。最受关注的 P1 级 Bug 仍是子智能体在达到 `MAX_TURNS` 限制后误报成功状态、Shell 命令卡死等影响日常使用的核心问题。

---

## 🚀 版本发布

### v0.56.0-nightly.20260817.g9a15c45fb

- **变更：** 为 `packages/cli` 的 `tsconfig` 添加 composite flag（SSR Agent Issue Fix #21911）
- **类型：** 基础设施改进，修复 SSR Agent 流程中的 TypeScript 配置问题
- 🔗 [完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260816.g2a87e7be1...v0.56.0-nightly.20260817.g9a15c45fb)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 子智能体达到 MAX_TURNS 后误报 GOAL 成功 ⭐P1
- **评论数：** 12 | **👍：** 2
- **核心问题：** `codebase_investigator` 子智能体在触达最大轮次限制时，仍将终止原因报告为 `GOAL` 而非中断，导致用户难以察觉任务未完成
- **重要性：** 直接影响任务状态可信度，掩盖了真实的执行失败

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 无限挂起 ⭐P1
- **评论数：** 8 | **👍：** 8（高赞）
- **核心问题：** 当 CLI 调用 generalist 子智能体时（即使是简单的文件夹创建）会永久挂起，用户等待一小时后被迫取消
- **重要性：** 这是用户反映最强烈的痛点之一，👍 数最多

### 3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 组件级评估体系建设 ⭐P1
- **评论数：** 7
- **核心问题：** 在已有 76 个行为评估的基础上扩展组件级评估体系，覆盖 6 个 Gemini 模型
- **重要性：** 反映项目对质量保障体系的长期投入

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取/搜索 ⭐P2
- **评论数：** 7 | **👍：** 1
- **核心问题：** 探索 AST 感知工具是否能更精确读取方法边界、减少 token 噪音并优化轮次
- **重要性：** 涉及代码理解效率的关键优化方向

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不使用 skills 和子智能体 ⭐P2
- **评论数：** 6
- **核心问题：** 即使配置了 `gradle`、`git` 等 skills，模型也很少主动调用，必须显式指令
- **重要性：** 暴露了 Agent 自驱行为的成熟度差距

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话 ⭐P2
- **评论数：** 5
- **核心问题：** Auto Memory 仅在 `read_file` 成功时才标记会话为已处理，导致低信号会话反复被检索
- **重要性：** Auto Memory 是新引入功能，存在多个相关 Bug（#26516、#26523、#26525）

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行后卡在 "Waiting input" ⭐P1
- **评论数：** 4 | **👍：** 3
- **核心问题：** 即使是简单的 CLI 命令完成后，界面仍显示 shell 处于活跃并等待用户输入
- **重要性：** 影响几乎所有用户的基础使用体验

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser 子智能体在 Wayland 失败 ⭐P1
- **评论数：** 4 | **👍：** 1
- **核心问题：** Wayland 显示协议下 browser subagent 无法工作
- **重要性：** Linux 桌面用户被排除在外

### 9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 会话接管与锁恢复 ⭐P3
- **评论数：** 4
- **核心问题：** 当前 `BrowserManager.ts` 在浏览器配置文件被锁时直接失败，缺少自动接管机制
- **重要性：** Browser Agent 的鲁棒性增强需求

### 10. [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) — v0.33.0 起子智能体绕过权限运行 🟡已关闭
- **评论数：** 3
- **核心问题：** v0.33.0 升级后，即使禁用了 Agents 模式，subagents 仍会被调用（仅 MCP 应工作）
- **重要性：** 严重的安全/权限回归，今日已被 PR #28867 修复并关闭

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [PR #28815](https://github.com/google-gemini/gemini-cli/pull/28815) — 子智能体恢复时保留原始终止原因 🟢已合并
- 修复 #22323：子智能体在 `MAX_TURNS`/`TIMEOUT` 后若调用 `complete_task`，会被错误地标记为 GOAL 成功
- 现在保留真实终止原因，状态报告更准确

### 2. [PR #28867](https://github.com/google-gemini/gemini-cli/pull/28867) — 禁用 Agents 模式时阻止子智能体运行 🟢已合并
- 修复 #22093：将 `loadBuiltInAgents()` 调用移至 `loadAgents` 中的模式检查之后

### 3. [PR #28812](https://github.com/google-gemini/gemini-cli/pull/28812) — 通过执行超时防止 TUI 无限挂起 🟢已合并
- 修复 #21477：在 Linux 终端启动时，`getProcessInfo()` 依赖 `execAsync` 执行 `ps` 命令可能挂起，导致 TUI 卡在 "Initializing..."

### 4. [PR #28816](https://github.com/google-gemini/gemini-cli/pull/28816) — 修复 MessageBus.request 的静默挂起 🟢已合并
- 修复 #22588：`this.publish()` 是浮动 Promise，失败时会静默挂起 60 秒

### 5. [PR #28817](https://github.com/google-gemini/gemini-cli/pull/28817) — 在 Hook 状态中保留执行中的子智能体工具调用 �已合并
- 修复 #22589：非根调度器（子智能体）处于 `Executing` 状态的工具调用在进入 Hook 状态前被过滤丢失

### 6. [PR #28870](https://github.com/google-gemini/gemini-cli/pull/28870) — 请求权限前先发出待处理工具调用更新 ⭐P1
- 修复 #21783：ACP 模式下，工具需要用户确认时缺少先行的 `tool_call` 状态更新，违反协议

### 7. [PR #28869](https://github.com/google-gemini/gemini-cli/pull/28869) — 修复 gVisor runsc 沙箱的主机网络解析
- 修复 #21331：在 `GEMINI_SANDBOX=runsc` 下，gVisor 严格限制主机 TCP 访问，导致 VSCode 扩展无法连接

### 8. [PR #28866](https://github.com/google-gemini/gemini-cli/pull/28866) — 文件搜索默认忽略 `.gemini` 文件夹 ⭐P1
- 修复 #28826：在用户主目录等含 `.gemini` 配置的位置运行时，chokidar 文件监视器试图索引自身配置目录

### 9. [PR #28871](https://github.com/google-gemini/gemini-cli/pull/28871) — 翻译 compact matcher 到 compress 并更新枚举
- 修复 #14724：从 Claude Code 迁移的 Hook 配置使用 `compact` matcher，Gemini CLI 使用 `compress`

### 10. [PR #28868](https://github.com/google-gemini/gemini-cli/pull/28868) — 自动补全建议添加尾部空格 🟢已合并
- 修复 #23954：选中 Tab 补全后缺少尾随空格，导致按 Enter 键无法立即执行

---

## 📈 功能需求趋势

从 50 条近期活跃 Issues 中可识别出以下主要方向：

### 🎯 Agent 可靠性（占比最高 ~45%）
- 子智能体挂起、误报成功状态、绕过权限运行
- Browser Agent 在 Wayland/锁定会话下的失败
- **典型需求：** 子智能体轨迹可见（#22598）、bug 报告包含子智能体上下文（#21763）

### 🧠 评估与质量保障（~15%）
- 组件级评估体系建设（#24353）
- AST 感知的代码库映射工具调研（#22745、#22746）
- 行为评估测试扩展（76 → 持续增长）

### � Auto Memory 系统（~10%，新功能集中爆发）
- 多个相关 Issue（#26516、#26522、#26523、#26525）反映该功能尚未稳定
- **关注点：** 性能（无限重试）、安全性（日志泄露）、正确性（无效 patch 处理）

### 🔌 IDE 集成与沙箱（~10%）
- VSCode 扩展在 gVisor 沙箱下的连接问题（#21331 → #28869）
- MCP server 进程环境变量注入的安全隐患（#28863）

### 🛡️ 安全性（~5%）
- 隐私通知措辞清晰化（#26120 → #28820）
- Auto Memory 的确定性脱敏（#26525）

### ⚡ 性能与终端体验（~10%）
- 终端 resize 卡顿（#21924）
- 外部编辑器退出后缓冲区损坏（#24935）
- >128/400 个工具时的 400 错误（#24246）

---

## 💬 开发者关注点

### 🔴 高频痛点
1. **子智能体不可预测** — 开发者普遍反映 subagent 行为不稳定：随机挂起（#21409）、误报成功（#22323）、越权运行（#22093）
2. **Auto Memory 新功能未成熟** — 在 #26516 这一 tracking issue 下聚集了多个相关 Bug，开发者建议谨慎启用
3. **基础 Shell 交互故障** — 命令执行后 TUI 卡死（#25166）影响核心工作流

### 🟡 体验类需求
1. **模型自驱使用 skills/agents 的能力不足**（#21968）— 提示工程需要进一步规范化
2. **子智能体轨迹调试困难**（#22598、#21763）— 缺乏可视化/导出工具
3. **Agent 自描述能力欠缺**（#21432）— 模型不熟悉自己的 CLI flags 和快捷键

### 🟢 积极信号
- SSR Agent（`@joneba-google`）今日批量消化 10+ 历史遗留 Issue，显示项目进入 Issue 清算阶段
- 评估体系（#24353）和 AST 工具调研（#22745）等**前瞻性 EPIC** 正在推进
- 安全相关修复（环境变量注入、隐私通知、确定性脱敏）已纳入近期 roadmap

### 📊 数据观察
- **P1 级 Issue 中 70% 与 Agent/Subagent 行为相关**，说明当前架构瓶颈在多 Agent 协作层
- **24 小时内 50 条活跃 Issues**，其中 70% 标记为 `workstream-rollup`，表明项目正在进行系统化梳理
- **多 Issues 由同一作者集中提交**（如 `@gundermanc` 提交 AST 评估相关、`@SandyTao520` 提交 Auto Memory 相关），反映内部正在按主题专项治理

---

*日报生成时间：2026-08-18 | 数据范围：过去 24 小时更新的 Issues/PRs*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-18**

---

## 📌 今日速览

过去 24 小时 Copilot CLI 仓库无新版本发布，但社区活动依旧活跃：29 条 Issue 被更新（其中 3 条已关闭），重点聚焦在 **MCP/OAuth 鉴权回归**、**会话与上下文管理**、**模型目录完整性** 三大方向。值得注意的是，1.0.79 版本引入了 GitLab/Atlassian MCP 的 OAuth issuer 校验回归，已成为本周最集中的痛点。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。本节省略。

> 提示：当前社区报告的多数 Bug 集中在 **1.0.79 / 1.0.80** 版本，开发者升级前可参考下方 Issues 列表评估影响。

---

## 🔥 社区热点 Issues

以下按社区关注度（评论数 + 👍 数）筛选出 10 条最值得关注的 Issue：

### 1. #1481 ⭐ 17 · 28 评论 · 已关闭
**SHIFT + ENTER 应该换行，却执行了 prompt**
用户长期吐槽的标准快捷键不一致问题。Copilot CLI 使用 `CTRL+ENTER` 换行，与 Slack、ChatGPT 等主流聊天工具的 `SHIFT+ENTER` 习惯相悖。28 条评论 + 17 个 👍 说明这是高频体验痛点。
🔗 [github/copilot-cli#1481](https://github.com/github/copilot-cli/issues/1481)

### 2. #4390 ⭐ 7 · 8 评论 · OPEN
**企业启用的模型（Claude Sonnet 5/Opus 5、Kimi K3）从模型目录中消失**
Copilot Business 组织明确启用的模型在 CLI 中无法使用，包括全部 Anthropic 模型。这是企业用户配置能力的关键问题，直接影响团队可用 AI 模型范围。
🔗 [github/copilot-cli#4390](https://github.com/github/copilot-cli/issues/4390)

### 3. #4480 ⭐ 6 · 5 评论 · OPEN
**Atlassian MCP OAuth 在 1.0.79 报 "Incompatible authorization server (RFC 8414 §3.3)" —— 从 1.0.71 起的回归**
与 GitLab MCP 问题（#4439）同源，均为 1.0.79 引入的 OAuth 元数据 issuer 校验收紧导致。这条 issue 影响使用 Atlassian Remote MCP 的开发者，回归属性使其优先级较高。
🔗 [github/copilot-cli#4480](https://github.com/github/copilot-cli/issues/4480)

### 4. #4439 ⭐ 3 · 5 评论 · 已关闭
**Copilot CLI 1.0.79 拒绝 GitLab MCP OAuth 元数据（RFC 8414 issuer 不匹配）**
与 #4480 高度相关，均属 1.0.79 OAuth 校验回归。已关闭，说明官方已提供解决方案或 workaround。
🔗 [github/copilot-cli#4439](https://github.com/github/copilot-cli/issues/4439)

### 5. #4503 ⭐ 0 · 5 评论 · 已关闭
**SDK server 报告就绪却未鉴权，导致 Slack 会话创建失败**
涉及 `COPILOT_SDK_AUTH_TOKEN` 缺失时的初始化顺序问题，对自动化集成场景尤其关键。
🔗 [github/copilot-cli#4503](https://github.com/github/copilot-cli/issues/4503)

### 6. #4313 · 5 评论 · OPEN
**[input-keyboard/terminal-rendering] 允许滚动浏览当前会话历史**
交互式体验增强请求：使用鼠标滚轮或 PageUp/PageDown 浏览会话上下文，是 chat 工具的基础可用性。
🔗 [github/copilot-cli#4313](https://github.com/github/copilot-cli/issues/4313)

### 7. #4211 ⭐ 2 · 4 评论 · OPEN
**[mcp] Copilot CLI 无法处理结构化 MCP 响应中的 BigInt**
当 MCP 工具返回大数字时会直接报错并终止当前所有任务。属于结构化工具返回类型的兼容性缺口，影响所有接入大型数据源 MCP 的用户。
🔗 [github/copilot-cli#4211](https://github.com/github/copilot-cli/issues/4211)

### 8. #4485 · OPEN
**[theming-accessibility] 主题在夜间会自动变亮**
基于 macOS 系统外观跟随的主题切换，存在体验不一致问题，对长时间跨夜开发者尤其困扰。
🔗 [github/copilot-cli#4485](https://github.com/github/copilot-cli/issues/4485)

### 9. #4382 · OPEN
**[platform-linux/installation] Oracle Linux 10 上 npm 安装的 copilot 二进制报 ENOEXEC**
Linux 发行版兼容性矩阵需要进一步扩展；用户通过 `ld.so` 手动加载可绕过。
🔗 [github/copilot-cli#4382](https://github.com/github/copilot-cli/issues/4382)

### 10. #4509 ⭐ 1 · OPEN
**[triage] `--no-alt-screen` 静默移除，alt-screen 不可绕过**
自 #1799（2025-03）以来被反复报告的全屏模式回归问题，`--no-alt-screen` flag 被无预告移除，无替代方案。
🔗 [github/copilot-cli#4509](https://github.com/github/copilot-cli/issues/4509)

---

## 🛠️ 重要 PR 进展

过去 24 小时仅有 **1 条** PR 更新，名单如下：

### #4510 · OPEN · 移除 README 中的 GitHub Copilot CLI 文档
该 PR 移除了 README 内关于安装与使用指南的详细描述。建议关注是否意味着官方计划将文档迁出仓库（迁移至 docs.github.com），以及是否会影响 discoverability。
🔗 [github/copilot-cli#4510](https://github.com/github/copilot-cli/pull/4510)

> ⚠️ 由于窗口期内仅有 1 条 PR，更广泛的合并动态可关注 [GitHub Copilot CLI PRs 列表](https://github.com/github/copilot-cli/pulls)。

---

## 📈 功能需求趋势

从今日 29 条更新的 Issues 中可归纳出以下社区聚焦方向：

| 方向 | 关键 Issue | 占比/热度 |
|------|-----------|----------|
| **MCP 生态扩展与稳定性** | #4390, #4439, #4480, #4211, #4461, #4512, #4515 | 🔥🔥🔥 最高 |
| **OAuth / 鉴权体验** | #4439, #4480, #4503 | 🔥🔥 |
| **会话与上下文管理** | #4313, #4455, #4505, #4506, #4508, #4511, #4514 | 🔥🔥 |
| **新模型支持（Anthropic / Kimi）** | #4390, #4459, #4511 | 🔥 |
| **终端渲染 / 可访问性** | #1481, #4313, #4455, #4485, #4492 | � |
| **Plugin / Marketplace 系统** | #4487, #4507, #4513 | 🔥 |
| **非交互模式（copilot -p）一致性** | #4275, #4504, #4507 | 中 |
| **自定义 Agent** | #2950, #4457 | 中 |
| **Linux 安装兼容性** | #4382, #4456 | 中 |
| **Desktop 客户端稳定性** | #4492 | 中 |

---

## 💡 开发者关注点

综合今日 Issue 与评论，社区当前最高频反馈集中在以下几类痛点：

1. **1.0.79 引入的 MCP/OAuth 回归**
   GitLab、Atlassian 等主流远程 MCP 在升级后无法完成 OAuth discovery，影响企业知识源接入。

2. **企业模型目录不完整**
   Copilot Business 组织内已授权的 Claude Sonnet 5/Opus 5、Kimi K3 在 CLI 中缺失，模型选择与组织策略不同步。

3. **长会话生命周期管理薄弱**
   会话内存压力看门狗在低上下文使用率时仍强制压缩、压缩后仅恢复 0.003% tokens 后陷入 OOM 循环（#4506）；恢复会话后出现陈旧连接 ID（#4505）；AIC 计数对 Kimi K3 严重低估（#4511）；远程会话无法本地恢复（#4514）。这些问题共同反映出 **长会话模型** 仍不够成熟。

4. **快捷键与可访问性细节**
   `SHIFT+ENTER` 行为不一致、主题夜间自动切亮、会话列表选中行对比度不足等，均属于基础 UX 但频繁被反馈。

5. **非交互模式（`copilot -p`）与交互模式行为分裂**
   仓库级 `enabledPlugins` 在非交互模式下被忽略、ACP `contextTier` 会话配置缺失、JSON-RPC `account.getQuota` 返回错误的 `resetDate`，三者说明非交互/编程化使用面与交互面尚未完全对齐。

6. **MCP 安全策略的失败模式过于严格**
   #4512 指出当 MCP 注册表策略获取失败时，CLI 拒绝所有非默认 MCP（含用户自配置的 stdio 本地服务器），缺乏"无策略即放行本地"的优雅降级。

7. **文档可发现性下降风险**
   #4510 提案移除 README 内文档，若官方未明确迁移路径，可能影响新用户入门。

---

*本日报基于 GitHub 公开数据生成，所有数据均来自 [github/copilot-cli](https://github.com/github/copilot-cli) 仓库。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-18

---

## 📌 今日速览

OpenCode 2.0 的 V2 AI 包进入协议正确性审计阶段(#41932)，核心团队集中合并了一批基础设施层面的修复(MCP Token 序列化、Anthropic 工具调用结算、Azure DeepSeek 适配器等)；与此同时社区焦点明显偏向**计费透明度**与**Windows 兼容性**，连续出现多起关于扣费异常、退款与 Go/DeeoSeek 模型异常的工单，反映出 OpenCode Go 商业化进入用户敏感期。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**。最近可关注的主线仍在 1.18.x 区间（社区报错中频繁出现 1.18.11 / 1.18.18）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|-------|------|------|---------------|
| [#43105](https://github.com/anomalyco/opencode/issues/43105) | `[2.0] BUG: endpoint error` | CLOSED | 15 | 旧版 `opencode.ai/inference/v1` 端点已退役(410 Gone),多个第三方 CLI 同步报错。代表 v1→v2 迁移期的生态破坏。 |
| [#7801](https://github.com/anomalyco/opencode/issues/7801) | `Plan Mode + Question tool 自动切换到 Build mode` | OPEN | 11 👍32 | 长期高赞功能请求,Plan → Build 的衔接需用户手动操作被广泛吐槽,直接影响工作流连贯性。 |
| [#22861](https://github.com/anomalyco/opencode/issues/22861) | `Big Pickle 提前停止响应` | CLOSED | 10 | 模型层"在 N 个 token 处反复截断"的典型问题,反映某些长上下文/特定 provider 的稳定缺陷。 |
| [#40243](https://github.com/anomalyco/opencode/issues/40243) | `ChatGPT OAuth 在 EU 工作区拒绝 GPT-5.6,官方 Codex CLI 正常` | CLOSED | 9 | 揭示 OpenCode 在 EU 数据驻留工作区下的 OAuth 兼容性盲点,涉及合规与产品定位。 |
| [#33027](https://github.com/anomalyco/opencode/issues/33027) | `MCP 工具已连接但未暴露给 agent` | OPEN | 8 | MCP 生态最常见的"连接 ≠ 可用"问题,影响所有基于 MCP 的扩展(如 pdfrag)。 |
| [#24153](https://github.com/anomalyco/opencode/issues/24153) | `归档会话应支持反归档/恢复` | OPEN | 8 👍11 | 当前归档是单向操作,误归档后无法恢复是高频用户痛点。 |
| [#36681](https://github.com/anomalyco/opencode/issues/36681) | `Windows 路径与外部目录权限不生效` | OPEN | 7 | Windows 用户长期缺少文档化的 `external_directory` 配置说明,文档与实现脱节。 |
| [#43009](https://github.com/anomalyco/opencode/issues/43009) | `扣费项目异常` | CLOSED | 6 | 用户实测 deepseek-v4-pro 单次调用被计为 $0.38,疑似倍率/分级计费 bug。 |
| [#43146](https://github.com/anomalyco/opencode/issues/43146) | `deepseek flash v4 (opencode go) 陷入无限回复循环` | OPEN | 4 | 1.18.18 版本在 Alpine/tmux 下复现,影响 Go 套餐的主打模型。 |
| [#31002](https://github.com/anomalyco/opencode/issues/31002) | `MCP schema 中非标准 format (uint32/uint64) 污染 TUI` | OPEN | 4 | Rust 生态的 schemars 生成器与 AJV 校验器不兼容,影响所有 Rust 编写的 MCP server。 |

**延伸关注**:`#43102` 端点不可用、`#42962` Go 网关 `/zen/go/v1/models` 列出模型无法调用、`#43148` USD 消耗与使用百分比不一致、`#43145/#43143` 中文用户退款与无响应投诉——共同指向 **OpenCode Go 计费与稳定性**。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|----|---------|
| [#43142](https://github.com/anomalyco/opencode/pull/43142) | `fix(core): 兼容旧版 previous-channel 数据库` | 放宽 V2 数据库导入器对旧 `opencode-next.db` 模式的容忍度,关闭 #43139 / #41341。 |
| [#43144](https://github.com/anomalyco/opencode/pull/43144) | `fix(ui): 平滑 shimmer 循环` | 用固定 gutter 校准高亮条宽度,统一两套 shimmer 实现,避免标签边界跳动。 |
| [#43125](https://github.com/anomalyco/opencode/pull/43125) | `feat(plugin): 暴露 MCP server transforms` | 解耦 MCP 期望配置与 `State.create`,在 Effect/Promise 插件中暴露 list/get/set/update/remove 接口,允许外部插件修改 URL 策略。 |
| [#40125](https://github.com/anomalyco/opencode/pull/40125) | `feat(opencode): per-MCP-server 信任配置` | 用指纹钉选替代全局 `insecure: true`,支持 `caFile` 私有 CA,关闭 #40111。 |
| [#43141](https://github.com/anomalyco/opencode/pull/43141) | `fix(core): 网络文件系统关闭 WAL` | 通过 `statfs` 识别 NFS/SMB/9P/FUSE,自动改用回滚日志,并提供 `OPENCODE_DB_WAL` 环境变量覆盖。 |
| [#43140](https://github.com/anomalyco/opencode/pull/43140) | `fix(session): --continue 跳过 in-flight 会话` | 修复 #43133 中两个 `opencode run` 实例竞争同一会话导致 prompt 被注入他人对话的竞态。 |
| [#43074](https://github.com/anomalyco/opencode/pull/43074) | `fix(core): MCP token 刷新串行化` | 防止旋转 OAuth 刷新 token 在并发请求中被重复兑换,导致部分请求 `invalid_grant`。 |
| [#43136](https://github.com/anomalyco/opencode/pull/43136) | `fix(ai): 结算挂起的 Anthropic 工具调用` | 在缺少 `content_block_stop` 时正确收尾 pending tool block,严格校验累积输入,malformed 输入降级为非可执行的 `tool-input-error`。 |
| [#43135](https://github.com/anomalyco/opencode/pull/43135) | `fix(provider): Azure DeepSeek 适配器选择` | 为 Azure DeepSeek 部署选用专属 `deepseek()` 适配器而非通用 chat/responses,关闭 #43106。 |
| [#43138](https://github.com/anomalyco/opencode/pull/43138) | `test(app): 通过 HttpApi 路由 e2e mock` | 用 Effect `HttpApi` 统一 Playwright 拦截面,保留 SSE/分页/CORS/夹具回调。 |

---

## 📈 功能需求趋势

从 50 条 Issue 中提炼出社区最关注的方向:

1. **🔌 MCP 生态完善**(占比最高)
   - 工具未暴露给 agent(#33027)、schema 格式警告(#31002)、token 刷新竞态(#43074)、per-server 信任配置(#40125)、transform API(#43125)
   - 反映 MCP 已成 OpenCode 的事实扩展标准,但鲁棒性仍是最大短板。

2. **💰 计费透明度与商业化稳定性**
   - 扣费异常(#43009)、USD 与百分比不一致(#43148)、退款请求(#43145)、Go 网关模型列表与实际部署不符(#42962)、DeepSeek Flash 死循环(#43146)
   - OpenCode Go 上线后,用户对"花多少钱/买到什么"高度敏感。

3. **🪟 Windows 兼容性补课**
   - 路径权限(#36681)、Cmdlet 权限(#36696)、ripgrep 提取被 MSIX PowerShell 污染(#40623)、npm postinstall 二进制拷贝失败(#41370)
   - 长期欠账,需要一份真正的 Windows 配置手册。

4. **🤖 模型与 Provider 适配**
   - GPT-5.6 EU OAuth(#40243)、Azure DeepSeek(#43135)、Bedrock 文档名清理(#37535)、Vertex 请求标签(#43129)、Anthropic pending tool call(#43136)
   - 每个新模型/区域/平台几乎都会带来独立的兼容性问题。

5. **🧠 Plan ↔ Build 工作流**
   - Plan Mode 自动切换(#7801,32 👍)、rate limit 自动暂停恢复(#43126)
   - 长期工程化诉求:减少 agent 与人之间的手动接管。

6. **📱 移动端 UI**
   - tab bar 在多会话下不可点(#38974)、reasoning-effort 与发送按钮重叠(#42834)
   - 移动端优先级上升但 v2 UI 未做窄屏适配。

---

## 🧑‍💻 开发者关注点

| 痛点/需求 | 代表 Issue / PR |
|----------|---------------|
| **MCP 协议一致性** | Rust 端 `schemars` 生成 `format: uint32` 触发 AJV 警告(#31002);并发 token 兑换竞态(#43074) |
| **会话并发安全** | `opencode run --continue` 缺乏 liveness 检查,跨实例串话(#43133 → #43140) |
| **跨平台鲁棒性** | 网络 FS 上 SQLite WAL 损坏(#43141);Windows MSIX PS 污染 ripgrep(#40623);npm postinstall stub(#41370) |
| **AI Provider 边缘场景** | Anthropic `message_stop` 缺 `content_block_stop`(#43136);Bedrock 文件名字符集(#37535) |
| **可观测性与对账** | Go 套餐计费明细、模型列表与可用性不一致(#42962/#43009/#43148) |
| **遗留架构清理** | 旧插件 loader 不校验返回值(#42451);v1 → v2 端点退役导致生态破坏(#43105) |
| **测试基础设施** | E2E mock 统一 HttpApi(#43138),为 V2 提供可重现性 |

> 总体而言,今天的 issue 列表呈现典型的"成长期产品"特征:**核心能力已可用,但跨平台、商业化、AI Provider 适配三类工程债务同时暴露**。核心维护者对 V2 的协议正确性(#41932) 和 MCP 基础设施(#43125/#43074/#40125) 的投入,显示 2.0 正在为"生态稳定"做最后的修补。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-18

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 报告周期：过去 24 小时

---

## 📌 今日速览

今日社区活跃度极高，Issue 与 PR 流量集中在 **AI Provider 兼容性修复**与 **多模态/上下文工程优化**两条主线。`cristinaponcela` 连续提交了 8 个修复 PR，覆盖 Anthropic 拒绝回退、Bedrock 头信息、Qwen 目录对齐、嵌套 Skills 发现等关键问题；同时 OpenRouter（Luke Parke）抛出的 870 次基准测试结论引发了对 `cache_control`、`reasoning_details` round-trip 的广泛讨论。社区对 **长会话自动压缩失效**、**TUI 大文本性能退化**等体验类问题反应最为强烈。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#6879](https://github.com/earendil-works/pi/issues/6879) — 自动压缩在上下文超 100% 后未触发
- **分类**：[bug] OPEN · 💬 18 评论 · 👍 17
- **核心问题**：GPT-5.6 上一次 2 小时的 agentic turn，footer 已越过压缩阈值却持续累积至 373k tokens 直到 API 拒答才触发压缩。
- **关注度**：⭐⭐⭐⭐⭐ — 这是当前最高赞的 OPEN issue，直接关系到长时间 agent 任务的稳定性。
- **社区反应**：开发者普遍支持"每轮 agent 结束后检查上下文"的修复方案。

### 2. [#534](https://github.com/earendil-works/pi/issues/534) — Linux 下配置目录位置不符合 XDG 规范
- **分类**：[bug] CLOSED · 💬 15 评论 · 👍 39
- **核心问题**：pi 把 config 直接放在 `$HOME`，违反 [XDG Base Directory Spec](https://specifications.freedesktop.org/basedir-spec/)。
- **关注度**：⭐⭐⭐⭐⭐ — 39 👍 是当日数据中最高的，长期社区呼声。

### 3. [#8029](https://github.com/earendil-works/pi/issues/8029) — Prompt 编辑器在长文本下移动缓慢
- **分类**：[bug] OPEN · 💬 9 评论
- **核心问题**：约 7000 行的 prompt buffer 中，单击方向键耗时 1650ms，性能随文本线性退化。
- **关注度**：⭐⭐⭐⭐ — 影响所有重度使用 prompt 工程的开发者。

### 4. [#3200](https://github.com/earendil-works/pi/issues/3200) — `prompt` RPC 命令支持视频/音频
- **分类**：[feature] OPEN · 💬 8 评论 · 👍 5
- **核心问题**：扩展 `prompt` 命令，支持 video/audio 内容传给多模态模型（Gemma 4、GPT-4o）。

### 5. [#2144](https://github.com/earendil-works/pi/issues/2144) — 无法粘贴剪贴板图像
- **分类**：[bug] CLOSED · 💬 7 评论
- **核心问题**：Claude Code 在 Warp 终端支持 Ctrl+V 粘贴图片，pi 不支持。
- **关注度**：⭐⭐⭐ — 与多模态 UX 直接相关。

### 6. [#7995](https://github.com/earendil-works/pi/issues/7995) — `openai-responses` 缺失 `cacheControlFormat: 'anthropic'`
- **分类**：[bug] [inprogress] OPEN · 💬 4 评论
- **核心问题**：OpenRouter benchmark 显示 Claude 经 OpenRouter responses 走 pi 存在 2.5× 成本惩罚，缺 Anthropic 风格 prompt caching。

### 7. [#8036](https://github.com/earendil-works/pi/issues/8036) — Edit 工具渲染大 diff 时 TUI 崩溃
- **分类**：[bug] OPEN · 💬 4 评论
- **核心问题**：HTML 长行编辑产生 ~14.5MB diff，`edit` 工具崩溃 TUI，恢复会话后再次崩溃。

### 8. [#8166](https://github.com/earendil-works/pi/issues/8166) — 中途注入自定义消息破坏 tool 消息序列
- **分类**：[bug] OPEN · 💬 3 评论
- **核心问题**：扩展通过 `pi.sendMessage(..., { triggerTurn: false })` 注入消息后，下一轮 DeepSeek 返回 400（`role 'tool' must follow 'tool_calls'`）。

### 9. [#7756](https://github.com/earendil-works/pi/issues/7756) — `detectInstallMethod` 在 `PNPM_HOME` 下误判安装方式
- **分类**：[bug] OPEN · 💬 3 评论
- **核心问题**：包含 `/pnpm/` 的路径即被标记为 pnpm，导致非 pnpm 安装被错误拒绝。

### 10. [#8028](https://github.com/earendil-works/pi/issues/8028) — `fullRender` 超出 V8 字符串长度限制崩溃
- **分类**：[bug] OPEN · 💬 2 评论
- **核心问题**：视频帧分析 agent 读取大量图片后触发 `RangeError: Invalid string length`。

> 其余可关注：[#7994](https://github.com/earendil-works/pi/issues/7994)（reasoning_details round-trip 缺陷）、[#8187](https://github.com/earendil-works/pi/issues/8187)（Xiaomi 模型目录清理）、[#8069](https://github.com/earendil-works/pi/issues/8069)（GLM 5.2 via Mistral 空命令 bug）。

---

## 🛠 重要 PR 进展

### 1. [#8258](https://github.com/earendil-works/pi/pull/8258) — Anthropic 拒绝错误与 fallback 支持 ✅ 已合并
修复 #8017：通过在模型注册表添加 Anthropic API 层 `allowed_fallback_models` 元数据，解决 compaction 失败问题。

### 2. [#8255](https://github.com/earendil-works/pi/pull/8255) — 加载嵌套 Markdown Skills ✅ 已合并
修复 #6479：让 `~/.agents/skills/third-party/child-skill.md` 等独立 skill 文件被发现。

### 3. [#8275](https://github.com/earendil-works/pi/pull/8275) — OpenAI Completions 思考 token 预算字段通用化 ✅ 已合并
跟进 #7638：扩展到 Qwen/SGLang 的 `thinking_budget` 与 llama.cpp 的 `thinking_budget_tokens`。

### 4. [#8260](https://github.com/earendil-works/pi/pull/8260) — 修复漂移的模型测试默认值 ✅ 已合并
同步 Cloudflare Anthropic Sonnet 4.5 与 Cerebras zai-glm-4.7 移除导致的 CI 失败。

### 5. [#8246](https://github.com/earendil-works/pi/pull/8246) — OpenAI Completions reasoning details 支持 🔄 OPEN
修复 #7994：保留助手消息级 `reasoning.text`/`summary`，实现 round-trip。

### 6. [#8240](https://github.com/earendil-works/pi/pull/8240) — Qwen Token Plan 目录对齐 ✅ 已合并
实现 #8194：`qwen-token-plan` 与 `-cn` 暴露统一的八模型目录。

### 7. [#8253](https://github.com/earendil-works/pi/pull/8253) — 修复长 transcript 视口上方变更时的全屏闪烁 ✅ 已合并
差分渲染只清 dirty 区域，避免 10k+ 行 transcript 频繁闪烁。

### 8. [#8249](https://github.com/earendil-works/pi/pull/8249) — 主题失效时刷新衍生文本 🔄 OPEN
清空 Markdown 默认样式缓存、重建启动 header，使主题切换后 ANSI 颜色实时更新。

### 9. [#8250](https://github.com/earendil-works/pi/pull/8250) — Subagent 进度与失败可靠性 🔄 OPEN
修复示例 subagent 提前报告完成、丢失失败信息等问题，并增加专用 test fixture。

### 10. [#8241](https://github.com/earendil-works/pi/pull/8241) — 扩展可见的 `session_compact_failed` 事件 ✅ 已合并
修复 #8175：compaction 失败现在会触发扩展事件，handler 可感知失败原因。

> 其他值得追踪：#8120（实验性 append compaction，复用 prompt cache）、#8262（每次 turn-start 派发 hooks）、#8254（防止 copilot policy 登录限流）、#7173（OpenCode Zen Go 重命名为 OpenCode Go）。

---

## 📈 功能需求趋势

从 50 条 issue 提炼：

| 方向 | 占比 | 代表 Issue |
|---|---|---|
| **多模态输入（视频/音频/图片粘贴）** | ~16% | #3200、#2144 |
| **长会话/大上下文下的稳定性与性能** | ~22% | #6879、#8029、#8028、#8036 |
| **Provider 兼容性与成本优化（OpenRouter/Anthropic/Bedrock）** | ~26% | #7995、#7996、#7994、#8279 |
| **新模型与目录维护（GLM、Qwen、Xiaomi）** | ~18% | #8187、#8194、#8220、#8190 |
| **扩展 API 与 Hook 系统增强** | ~10% | #8166、#8241、#7350 |
| **平台规范（XDG、Selinux、Konsole）** | ~8% | #534、#8276、#8278 |

**核心趋势**：社区正从"单模型 + 文本"快速向"多 Provider + 多模态 + 长时间 agent"演进；缓存成本控制与上下文溢出保护成为最紧迫的工程议题。

---

## 💬 开发者关注点

### 痛点 1：**长 agent 任务的可靠性**
两次超过 100% context 仍未自动压缩（#6879）和工具轮次之间溢出（#8229），表明当前 post-run 自动压缩策略对长 turn 鲁棒性不足。开发者普遍呼吁"每轮 agent 结束即检查"。

### 痛点 2：**TUI 在大文本下的退化**
#8029（按键 1.6s）、#8028（V8 字符串上限）、#8036（14.5MB diff 崩溃）、#8253（10k+ 行闪烁）暴露了 TUI 渲染层在大数据量场景下的系统性瓶颈。

### 痛点 3：**Provider 协议差异导致的成本与功能损失**
OpenRouter 三种 API 表面 870-trial 基准（#7995/#7994/#7996）显示 pi 在 `cache_control`、`reasoning_details` round-trip、`allowEmptySignature` 等关键协议细节上仍有显著差距，**实际账单影响 2.5 倍**。

### 痛点 4：**扩展系统的"半透明"行为**
`triggerTurn` 不派发 hook（#8262）、compaction 失败扩展不可见（#8241）、`agent_end` 在重试前触发（#7350）—— 多个 hook 时序 bug 让扩展作者难以构建可靠的外部集成。

### 痛点 5：**跨平台细节**
KDE Konsole 下的 Shift+Enter（#8278）、tmux pane=1 崩溃（#8252）、Selinux 容器权限（#8276）反映出 pi 对边缘终端/系统环境的兼容性仍需打磨。

---

> 📊 报告生成时间：2026-08-18 · 数据窗口：过去 24 小时
> 📮 反馈与建议：[earendil-works/pi](https://github.com/earendil-works/pi)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**📅 日期：2026-08-18** | **数据源：github.com/QwenLM/qwen-code**

---

## 一、今日速览

今日 Qwen Code 完成 **v0.21.13** 版本发布，核心亮点是 Web Shell Composer 支持拖拽/粘贴文本文件作为命名附件，以及支持从任意 Assistant 回复处 Fork 会话。社区活跃度持续高位，过去 24 小时共有 50 条 Issue 与 50 条 PR 更新，**daemon 资源治理、多平台 CI 修复、Weixin 通道完善、Web Shell 跨端统一** 成为开发者最关注的几条主线。Autofix/Takeover 自动化流水线持续迭代，多项"增长预算制动"和"评审增量锚"相关 PR 进入合并评审阶段。

---

## 二、版本发布

### 🚀 v0.21.13（2026-08-17）

| 类别 | 内容 |
|------|------|
| ✨ 新功能 | Web Shell Composer 支持拖拽/粘贴文本文件作为命名附件（与图片并列）[#9180](https://github.com/QwenLM/qwen-code/pull/9180) |
| ✨ 新功能 | 支持从任意 Assistant 回复处 Fork 对话（继续分支会话） |
| ✅ 验证 | 同步完成 SWE-bench Verified (500) + Terminal-Bench 2.0 (89) 端到端验证（dsw-eas-full-20260817-r3，Qwen Code 锁版本 v0.21.13） |

> DSW EAS 烟囱测试结果：r1/r3/r4 SUCCEEDED，r2 出现 SWE-bench 单样本 QUARANTINED（已修复并复测通过）。

---

## 三、社区热点 Issues（Top 10）

按评论活跃度与重要性筛选，覆盖 CLI/UI 缺陷、daemon 治理、跨端一致性等关键议题。

### 1. [#9194](https://github.com/QwenLM/qwen-code/issues/9194) — 关闭 PR #9096 评审遗留的 mutation-verified 测试固定化缺口
- **作者**：wenshao | **评论**：10 | **优先级**：P3
- 评审轮次 5–6 中持续发现一类"非阻塞但真实"的测试稳健性问题：生产代码已变更但测试仍以原契约通过。这是对 review platform 子命令的硬化性跟进。

### 2. [#8316](https://github.com/QwenLM/qwen-code/issues/8316) — Ctrl+C 取消 prompt 后，输入框未还原原始内容
- **作者**：fantasyz | **评论**：9
- 影响所有交互式用户，体感强烈：用户为修正 prompt 不得不重新输入；属于基础交互体验回归。

### 3. [#8051](https://github.com/QwenLM/qwen-code/issues/8051) — 生产级 `qwen serve` 多工作区 daemon 资源上限治理
- **作者**：doudouOUC | **评论**：9 | **标签**：daemon
- 当前仅限制注册 workspace 与 per-workspace session 数量，未约束请求体、WS 装配、对象池字节数；已成为 P2 长期跟踪议题。

### 4. [#9061](https://github.com/QwenLM/qwen-code/issues/9061) — Windows CLI 上 Ctrl+V 粘贴完全失效（0.21.x 回归）
- **作者**：hhz4913 | **评论**：6 | **优先级**：P1
- 自 0.21.0 之后某些 0.21.x 版本出现严重回归，0.21.0 可用，回退即可恢复。属于跨平台关键路径 bug，影响所有 Windows 用户。

### 5. [#6806](https://github.com/QwenLM/qwen-code/issues/6806) — `/compress` 后状态行 context usage 百分比不刷新
- **作者**：qwen-code-dev-bot | **评论**：6 | **优先级**：P2
- 压缩后状态栏仍显示压缩前数值直到下一次模型请求完成，用户感知与实际 token 占用不一致。

### 6. [#9324](https://github.com/QwenLM/qwen-code/issues/9324) — 消息被多次重复投递（Qwen Desktop Code）
- **作者**：Perseidaz | **评论**：7
- 用户报告在 Desktop Code 中模型会自述"收到同一条消息多次"，并因此中断当前工作；需要排查消息重投链路。

### 7. [#9300](https://github.com/QwenLM/qwen-code/issues/9300) — VP 模式下内容未底对齐（最后一条消息与 composer 间留白）
- **作者**：rayzzl | **评论**：6 | **优先级**：P2
- 默认 `useTerminalBuffer: true` 下复现，是 VP mode 的渲染布局问题。

### 8. [#9320](https://github.com/QwenLM/qwen-code/issues/9320) — `/compress-fast` + `/rewind` 后上下文丢失
- **作者**：fantasyz | **评论**：5 | **优先级**：P2
- 102k → 87k 压缩后切模型并 resume chat，发现历史上下文丢失；与 #6806、#9309 同属压缩链路隐患。

### 9. [#9296](https://github.com/QwenLM/qwen-code/issues/9296) — Qwen Autofix 评审事件风暴与重复派发
- **作者**：wenshao | **评论**：4 | **优先级**：P1
- 2026-08-16 ~3 小时 ~500 次运行中 59% 被取消（294/500），暴露 4 类效率/正确性问题，其中"已关闭/已合并 PR 仍触发 autofix"被标记为 P0。

### 10. [#9368](https://github.com/QwenLM/qwen-code/issues/9368) — ModelStudio Token Plan / Coding Plan 模型列表动态化
- **作者**：xxlaura | **评论**：2 | **优先级**：P2
- Provider 设置向导 Step 3 当前硬编码"推荐模型"列表，希望按账号实际可用模型动态拉取。

> 另有 [#9250](https://github.com/QwenLM/qwen-code/issues/9250)（daemon 写文件硬编码 0600 模式，忽略 umask，缺配置入口）、[#9352](https://github.com/QwenLM/qwen-code/issues/9352)/[#9353](https://github.com/QwenLM/qwen-code/issues/9353)/[#9307](https://github.com/QwenLM/qwen-code/issues/9307)（Weixin 通道文件发送、typing indicator 过期、64-bit 消息 ID 保真）同属高价值跟进。

---

## 四、重要 PR 进展（Top 10）

按技术影响与覆盖面筛选，重点关注 autofix/review 流水线、CI 多平台、跨端一致性。

### 1. [#9370](https://github.com/QwenLM/qwen-code/pull/9370) — 修复 macOS / Windows 测试 lane 失活问题
新增"平台敏感性分类器"识别 PR diff，并在 nightly `main` 上触发，叠加既有的 merge-queue trigger，使两条长期"哑"的 lane 重新可见。

### 2. [#9214](https://github.com/QwenLM/qwen-code/pull/9214) — Autofix 验证闸运行于临时容器内（[#9089](https://github.com/QwenLM/qwen-code/issues/9089) 设计 Phase 1+2）
将 `Verification Gate` 整体迁入 ephemeral container，强化信任边界并配以结构化测试加固。

### 3. [#9190](https://github.com/QwenLM/qwen-code/pull/9190) — 本地 review-fix 循环引入内容锚定增量轮次
之前每轮都重抓、重审整棵 dirty tree，主要消耗发生在 push 前；本 PR 引入内容锚定的增量比对，显著节省 token。

### 4. [#9342](https://github.com/QwenLM/qwen-code/pull/9342) — 清空 [#9175](https://github.com/QwenLM/qwen-code/pull/9175) 十五轮评审累积的 19 条 deferred 建议
涵盖行为修复、API 安全改型与共享助手去重，每条均带 pin 回原 review 记录。

### 5. [#9332](https://github.com/QwenLM/qwen-code/pull/9332) — 将"一跳 import 加宽"折入 `fetch-pr --since`
删除原 [#9188](https://github.com/QwenLM/qwen-code/pull/9188) `rescope` 子命令（-612 行命令、-728 行测试），工作纳入 `main` 已落地的 anchor 校验机制。

### 6. [#9267](https://github.com/QwenLM/qwen-code/pull/9267) — Review 增量范围由"PR 自身的 diff"推导，而非后置 containment 校验
替换原有"先捕获再验证"为直接基于 PR diff 的 narrowing，避免叠加层面的不一致。

### 7. [#9226](https://github.com/QwenLM/qwen-code/pull/9226) — `/review` 接入 Aone Code 读取路径（评审平台第二个 Provider）
基于 [#9096](https://github.com/QwenLM/qwen-code/pull/9096) 已抽象的 review-platform seam，新增对 `gitlab.alibaba-inc.com` 及 `…/codereview/<id>` 远端的识别。

### 8. [#9303](https://github.com/QwenLM/qwen-code/pull/9303) — Web Shell daemon transcript 保留设上限，根治 renderer OOM 崩溃
原始 replay snapshot 在注入 store 后立即释放；replay 重建亦受相同 block 上限约束。

### 9. [#9130](https://github.com/QwenLM/qwen-code/pull/9130) — 沙箱验证加确定性 flakiness gate
对 PR 增改的单元测试文件重跑 N 次（默认 5，`QWEN_VERIFY_FLAKE_ROUNDS` 可覆盖，clamp 2–10）。

### 10. [#9262](https://github.com/QwenLM/qwen-code/pull/9262) — Autofix 增长预算超限后改为"审计方案"而非直接停摆
原本超额即升级为维护者决策 handoff、自动化冷停；改为先做方案审计，避免无代码变更的硬停。

> 另有 [#9367](https://github.com/QwenLM/qwen-code/pull/9367)（`/export` HTML viewer 全局展开/折叠）、[#9247](https://github.com/QwenLM/qwen-code/pull/9247)（`compose-review` 输出体预算对齐 GitHub 65536 字符限制，优先折叠中文）、[#8927](https://github.com/QwenLM/qwen-code/pull/8927)（channel `sessionRotation` 限定会话生命周期）值得关注。

---

## 五、功能需求趋势

从 50 条 Issue 中聚类，社区当前需求最集中的方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|----------|
| 🌐 **Web Shell / 跨端统一** | [#9354](https://github.com/QwenLM/qwen-code/issues/9354)、[#5883](https://github.com/QwenLM/qwen-code/issues/5883)、[#9367](https://github.com/QwenLM/qwen-code/pull/9367) | 推进 Web Shell 作为 Tauri Desktop / VSCode / HTML Export 共同的 chat panel 底座，建立跨 host 转写契约 |
| 🛠️ **Daemon 资源治理** | [#8051](https://github.com/QwenLM/qwen-code/issues/8051)、[#8091](https://github.com/QwenLM/qwen-code/issues/8091)、[#9250](https://github.com/QwenLM/qwen-code/issues/9250)、[#9303](https://github.com/QwenLM/qwen-code/pull/9303) | `qwen serve` 生产化治理从"数量限制"扩展到"字节预算 + 文件模式可配 + transcript 留存上限" |
| 💬 **Weixin 通道完善** | [#9307](https://github.com/QwenLM/qwen-code/issues/9307)、[#9352](https://github.com/Qwen

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-18**

---

## 📌 今日速览

**v0.9.9 "Truth and Resilience" 版本正式发布**，重点修复了 shell 工具在系统资源耗尽时导致会话僵死的关键 Bug（#5465），同时为上下文中无法验证的参数贴上了诚实标签。社区维护节奏紧凑，24 小时内合并了 20 余个 PR，覆盖 Web i18n 字典化重构、TUI 紧凑行布局、上下文压缩、第三方模型路由等多个方向；测试稳定性与跨平台兼容性仍是当前最受关注的痛点。

---

## 🚀 版本发布

### v0.9.9 — 已合并（[PR #5476](https://github.com/Hmbown/CodeWhale/pull/5476)）

**主题**："Truth and Resilience"

**主要更新：**
- 修复 shell 工具在主机磁盘/文件描述符耗尽时导致会话僵死的严重 Bug（#5465）
- 对未经验证的上下文窗口、输出上限与遥测默认值做诚实标注
- 多项 release PR（#5476, #5477, #5487）持续追加 CHANGELOG 与贡献者致谢

**后续增补**（同一天合并）：
- [#5484](https://github.com/Hmbown/CodeWhale/pull/5484) dsh 海洋场景（鲸鱼 + 字形鱼群）环境动效
- [#5485](https://github.com/Hmbown/CodeWhale/pull/5485) 一线模型目录与定价刷新（截至 2026-08-17）
- [#5483](https://github.com/Hmbown/CodeWhale/pull/5483) codewhale.net 站点文案去模板化

---

## 🔥 社区热点 Issues（Top 10）

1. **[#2369](https://github.com/Hmbown/CodeWhale/issues/2369) — Windows / Cygwin 配置路径碎片化 + 静默迁移 Bug**（💬 8）
   影响配置文件与密钥在不同环境下的解析路径分裂，并附有一个能悄悄触发旧版迁移的隐蔽缺陷，作者甚至提交了一份 `config-mismatch.patch`。跨平台体验基础性问题，优先级高。

2. **[#5056](https://github.com/Hmbown/CodeWhale/issues/5056) — 测试可靠性：verifier 后台用例 flaky + /workspace 敏感夹具 + 12 个未分类 #[ignore]**（💬 8）
   维护者亲自主理，文档化了两条 flaky 测试位置（`crates/tui/src/tools/verifier.rs:1302, :1490`）。揭示出 v0.9.x 测试套件的"积压债"。

3. **[#5324](https://github.com/Hmbown/CodeWhale/issues/5324) — agent tool 32 字段 JSON schema 简化为零必填**（💬 8 · ✅ 已关闭）
   模型在面对 32 字段 schema + 8 种 action 时频繁报错，方案通过拆分 action schema 与别名映射解决，是 agent 工具可用性的关键改进。

4. **[#5424](https://github.com/Hmbown/CodeWhale/issues/5424) — v0.9.7 TUI 自动退出崩溃**（💬 7 · ✅ 已关闭）
   复现路径稳定：使用 `codewhale --continue` 后等待约 1 分钟即崩溃。已随 v0.9.9 一并修复，是该版本的核心动机之一。

5. **[#1425](https://github.com/Hmbown/CodeWhale/issues/1425) — 大文本处理后会话卡死（agent_wait 超时）**（💬 7）
   用户尝试分析 300 万字小说，模型将原文切 10 份后由 10 个子 agent 处理，但 `agent_wait` 超时使整个会话中断。中长上下文 + 多 subagent 的典型瓶颈。

6. **[#5123](https://github.com/Hmbown/CodeWhale/issues/5123) — Agent spawn 表面旋钮过多，标注 builder 的子代理被自阻断**（💬 7）
   Dogfood 发现的真实失败模式：被标签为 `builder` 的子代理拿到的是只读工具合约，导致 gates 无法执行。subagent 工具语义是当前最受关注的可改进点。

7. **[#1651](https://github.com/Hmbown/CodeWhale/issues/1651) — YOLO Agent 后台跑测试脚本时 VS Code 崩溃**（💬 6）
   DeepSeek v4-pro / v4-flash 模型在自主执行测试时，VS Code 直接退出。IDE 集成边界稳定性问题。

8. **[#1829](https://github.com/Hmbown/CodeWhale/issues/1829) — SSH 连接 exit 255，疑似沙箱阻断 TCP 22 出站**（💬 6）
   Windows 10 + DeepSeek TUI v0.8.39 内置 shell → 腾讯云 SSH 出口失败，本地终端正常，强烈指向 shell 沙箱网络策略缺陷。

9. **[#5374](https://github.com/Hmbown/CodeWhale/issues/5374) — macOS 上 agent 写入内容出现乱码/错位**（💬 5 · ✅ 已关闭）
   附图显示输出完全不可读，跨平台 TUI 渲染一致性的典型问题。

10. **[#5350](https://github.com/Hmbown/CodeWhale/pull/5350) — 第三方模型配置预制模板**（💬 4）
    OpenCode Zen / Go、Agnes、美团 Sensenova 等第三方供应商需手动填写 URL + 模型 + 密钥，保存后常卡 `not checked`。社区强烈呼吁模板化与"测试连接"按钮。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#5476](https://github.com/Hmbown/CodeWhale/pull/5476) — release: 0.9.9**（✅ 已合并）
   本日最重磅提交，确定 v0.9.9 主题与完整变更集。

2. **[#5491](https://github.com/Hmbown/CodeWhale/pull/5491) — fix(tui): persist approval outcomes before execution**（🔓 OPEN）
   关闭 #5360。审批请求与终态决定写入会话日志后再执行，无法持久化时拒绝执行；从中断/中断后恢复也能重建审批状态。fail-closed 的安全设计。

3. **[#5474](https://github.com/Hmbown/CodeWhale/pull/5474) — perf(context): compact all noisy web tool results**（✅ 已合并）
   将现有"嘈杂结果软限"应用到全部 web 工具（`Web`, `web_search`, `web.run`, `fetch_url`），非嘈杂工具（`read_file`）保留硬限。社区贡献者 @h3c-hexin 提供。

4. **[#5475](https://github.com/Hmbown/CodeWhale/pull/5475) — fix(config): resolve owned direct model casing safely**（✅ 已合并）
   解决 `glm-5.2` 这类小写选择器被外部 wire id 误分类的问题，仅在恰好一个 provider-owned 命中时回落 DeepSeek/Z.ai 大小写折叠。同样来自 @h3c-hexin。

5. **[#5492](https://github.com/Hmbown/CodeWhale/pull/5492) — perf(skills): keep configured skill prompts stable (#5473)**（🔓 OPEN）
   让原生技能在模型目录中只暴露名称与描述，模型视角下发现警告替换为 `<configured-skills>` 占位符，避免物理路径泄漏。

6. **[#5486](https://github.com/Hmbown/CodeWhale/pull/5486) — fix(tui): hide the session metrics strip on compact rows**（✅ 已合并）
   60 列以下时仅隐藏阶段条，但 session metrics 条带仍会占据空间，挤压核心状态行；本 PR 将其纳入 `default_footer()` 收口逻辑。

7. **[#5490](https://github.com/Hmbown/CodeWhale/pull/5490) — feat(web): route shared components' locale picks through pickText (#5337)**（✅ 已合并）
   把三处仍用 `locale === "zh"` 自定义判断的共享组件统一迁移到 #5338 引入的 `pickText()`，八种部分本地化语言在公共组件上第一次得到正确文本。

8. **[#5488](https://github.com/Hmbown/CodeWhale/pull/5488) — feat(web): move the docs shell onto the dictionary spine (#5337)**（✅ 已合并）
   `app/[locale]/docs/layout.tsx` 的五段字符串脱离 `isZh` 三元，让 ja/vi/ko/ru/uk/es/pt-BR/id 八种语言在文档门户首屏有处可翻译。

9. **[#5485](https://github.com/Hmbown/CodeWhale/pull/5485) — fix(models): bring first-party model rows and pricing current as of 2026-08-17**（✅ 已合并）
   每个模型值都经过官方页面 curl 二次校验；xAI LongContext 列按官方文档的"标准 2x"折算。模型目录治理的样板提交。

10. **[#5402](https://github.com/Hmbown/CodeWhale/pull/5402) — fix(tui): restore session cost when live pricing is unverifiable (#5241)**（✅ 已合并）
    解决 #5241：`https://api.codewhale.net/session` 返回 503 时，会话成本不再永久停留在 `unverified_live_pricing`，转用"诚实路径"显示可推断的成本。

---

## 📈 功能需求趋势

从 41 条过去 24 小时更新的 Issue 中提炼出最受关注的六大方向：

| 方向 | 代表性 Issue | 热度信号 |
|---|---|---|
| **🌐 国际化与本地化** | #5337, #5290, #5482, #5488, #5490 | Web i18n 字典化重构连环提交；中文文档全面本地化 EPIC 启动 |
| **🧪 测试与可靠性** | #5056, #5355, #5403, #5424 | flaky 测试、并行加载 flake、main 红屏、v0.9.7 崩溃，连续多版本高优 |
| **🤖 子代理 / 工作流编排** | #5123, #1425, #5098 | subagent 工具语义、spawn 旋钮、超时控制是当前最尖锐的产品痛点 |
| **🔌 第三方模型接入** | #5350, #4683, #4170 | 配置模板化诉求强，API URL 错误、缓存加载异常反复出现 |
| **🪟 IDE 与终端集成** | #1651, #1829, #5410 | VS Code 崩溃、SSH 沙箱出站、bwrap 沙箱限制 |
| **🧠 上下文与审批安全** | #5239, #5360, #5491 | 1M 上下文未被启用、审批结果持久化与 fail-closed |

---

## 💬 开发者关注点

1. **跨平台一致性反复翻车**：Windows/Cygwin 配置路径（#2369）、macOS TUI 渲染错位（#5374）、Linux bwrap 沙箱限制（#5410）——维护者需要建立显式的跨平台回归矩阵。

2. **沙箱边界模糊**：`#1829` 暴露 SSH TCP 22 出站被静默阻断，`#5410` 暴露 bwrap 重定向 `/dev/null` 与系统库链接受限；用户预期沙箱行为应该有清晰的"允许/拒绝"清单。

3. **subagent 体验过载**：`#5123` 直陈"工具合约旋钮太多"，`#1425` 暴露出多子代理 + 大上下文的超时风暴。社区普遍认为 orchestrator 层需要更克制的默认行为与更明确的失败语义。

4. **测试基础设施债**：`#5056` 列出 12 个未分类的 `#[ignore]`，`#5355`、`#5403` 串联起 v0.9.7 → v0.9.8 → main 的连续 flaky 链；测试基建被提升到与新功能同等优先级。

5. **文档可信度**：v0.9.9 同日合并 #5481（A/B/C 级过时锚点修正）与 #5482（中文文档 EPIC），揭示出双语用户增长与原文漂移已形成持续张力。

6. **第三方模型体验断层**：`#5350` 反映出"5 分钟接入一个新供应商"是新用户的入门门槛，模板化 + 状态自检被视为最高 ROI 的改进。

---

*日报基于 github.com/Hmbown/DeepSeek-TUI 在 2026-08-17 → 2026-08-18 的公开数据自动生成。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*