# AI CLI 工具社区动态日报 2026-10-07

> 生成时间: 2026-10-07 03:45 UTC | 覆盖工具: 9 个

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
**数据日期：2026-10-07 | 覆盖工具：9 款主流 AI CLI**

---

## 1. 生态全景

2026 年 10 月的 AI CLI 工具生态已进入 **"能力扩展期 + 体验收敛期"的并行情形**：一方面，Subagent 编排、长会话压缩、MCP 扩展总线、跨端协同等下一代能力密集落地；另一方面，配置静默丢失、平台回归频发、安全边界失控等"工程债"集中爆发。整体节奏从"卷模型"转向"卷工程化与可观测性"，Claude Code 与 Codex 在稳定性议题上承担了大量 P0/P1 风险信号，而 Gemini CLI、OpenCode、Pi、Qwen Code 处于 Subagent 与上下文工程的高频迭代阶段；Kimi Code CLI 当日社区动态近乎空窗，是生态中最显著的"低活跃度异常信号"。

---

## 2. 各工具活跃度对比

| 工具 | 热门 Issues | 24h PR 更新 | Releases（24h） | 关键信号 |
|------|-----------|------------|----------------|---------|
| **Claude Code** | 10（最高单条 262 评论）| 3 | v2.1.292 + v2.1.291 | 2 条 P0 数据丢失 Bug，多账号需求断层式领先 |
| **OpenAI Codex** | 10（最高 47 评论）| 10（全部 CLOSED）| 3 个 alpha（0.162.0-α.17/18、0.161.0-α.13.1） | 维护节奏紧凑，PR 合并速度极快 |
| **Gemini CLI** | 10（最高 13 评论）| 10 | v0.63.0 / v0.64.0-preview / v0.65.0-nightly | 稳定/预览/夜间三轨并行，Subagent 议题集中 |
| **GitHub Copilot CLI** | 10（#400 已 CLOSED）| **0** | v1.0.93-2 / v1.0.93-3 | PR 更新停滞 vs Issue 密度倒挂，值得警惕 |
| **Kimi Code CLI** | **0** | 1 | 0 | 24h 数据空窗，疑似维护期或采集异常 |
| **OpenCode** | 10（最高 30 评论）| 10 | v1.18.35 | "密集收尾 + 长会话性能"阶段，5 个 PR 在 OPEN |
| **Pi** | 10（最高 22 评论）| 10 | 0 | Issue/PR 数双高，3 个长期 Bug 在本周期集中关闭 |
| **Qwen Code** | 10（最高 17 评论）| 10 | v0.25.1-preview.0 | Managed Agent 多阶段并行，PR 评审密度高 |
| **DeepSeek TUI** | 7（#6828 P0）| 10 | 0 | 0.10.1 进入最终跟进，单条 P0 影响全部 MCP 用户 |

**关键观察**：
- **迭代最快**：Codex（3 alpha/日）、Gemini（3 通道/日）、Copilot（2 patch/日）
- **社区最热**：Claude Code（多账号诉求 402 👍）、OpenCode（Python SDK 30 评论）、Codex（Windows 47 评论）
- **PR 合并最稳**：Codex、Qwen Code 几乎所有当日 PR 均已 CLOSED
- **节奏异常**：Copilot CLI 24h PR 更新为 0，与高频 Issue 形成反差

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 核心诉求 |
|------|---------|---------|
| **MCP 生态完善** | Claude Code、Codex、Copilot CLI、Gemini CLI、DeepSeek TUI | 跨会话 OAuth 复用（Copilot #4695、#5058、#5061）、URL 隐私改写（Claude Code #66010）、MCP 工具发现失败（DeepSeek TUI #6828 P0）、损坏配置回退（Gemini #29445）、Entra/Datadog 协议兼容（Copilot 多条） |
| **Windows 平台稳定性** | Claude Code、Codex、Copilot CLI、Pi、DeepSeek TUI | `rm -rf` 转义漏洞（Claude Code #97660）、AppX 启动崩溃（Claude Code #73107）、ChatGPT Project 工作流（Codex #42215）、节点校验失败（Codex #50321）、桥接记录 EPERM（DeepSeek TUI #6880）、路径大小写（Pi #10570） |
| **Subagent/Agent 生命周期** | Gemini CLI、OpenCode、Qwen Code、Claude Code、Pi | MAX_TURNS 后状态误报为成功（Gemini #22323）、子代理分支隔离（OpenCode #53425）、Subagent 模型 ID 前缀错（Qwen Code #13561）、codemode 安全语义（Pi #10553）、advisor 并发 400（Claude Code #86198） |
| **长会话与上下文管理** | Claude Code、Codex、Gemini CLI、OpenCode、Pi、Copilot CLI | 预算硬上限失效（Claude Code #100111）、256 MiB 快照索引硬限（Qwen Code #13113）、in-context compaction（Pi #10577）、主动 `/compact` 提议（Copilot #5064）、TUI 默认 100 条截断（OpenCode #53660） |
| **配置系统鲁棒性** | OpenCode、Codex、Gemini CLI、Claude Code | `blacklist/whitelist` 字段被静默丢弃（OpenCode #53671）、远程 config 失败 fallback（OpenCode #53667）、MXC 偏好丢失（Codex #51525）、`settings.json` 覆盖不生效（Gemini #22267） |
| **安全/数据丢失防护** | Claude Code、Gemini CLI、Copilot CLI、Codex | sudo kill 全进程树（Claude Code #99768）、`git reset --force` 无 safeguard（Gemini #22672）、gVisor 网络隔离误导提示（Gemini #29665）、审批粒度不可逆命令（Copilot #5062） |
| **跨端一致性/协同** | Claude Code、OpenCode、Copilot CLI、Kimi Code CLI、Codex | 同一 connector 多账号（Claude Code #27302，262 评论）、CLI/Desktop 模型不一致（OpenCode #52375）、移动端配对（Kimi #2616）、claude.ai ↔ session 交叉引用（Claude Code #76440） |

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | Connector/Account 治理、Advisor 子代理、安全边界 | 企业 + 重度 claude.ai 用户 | 平台连接器为中心，security-guidance 子代理独立化（PR #96434） |
| **OpenAI Codex** | Dots 云电脑、Computer Use、ChatGPT Project 协同 | ChatGPT 桌面用户 + 企业生产力 | Windows/macOS/Linux 三端并重，Rust CLI 快速 alpha 迭代 |
| **Gemini CLI** | Subagent 编排、AST 感知、Skills 体系 | Google 生态 + 高级 Agent 开发者 | 三通道发布（nightly/preview/stable），MCP 配置先行修复 |
| **GitHub Copilot CLI** | MCP 生态闭环 + 企业治理 | GitHub 企业组织 + 多模型混用 | `permissions.limitTo` 域名边界、模型选择器优先新模型 |
| **Kimi Code CLI** | 跨端协同（移动端配对） | 移动办公场景 | 引入 `gbr/1` 第三方协议，移动端定义为 spectator + veto |
| **OpenCode** | 多 Provider 接入 + 跨端一致性 + 开源 SDK 诉求 | 极客 + 自托管用户 | 强调 Bedrock/自定义 provider、Detached worktree 子代理隔离 |
| **Pi** | 上下文压缩 + 扩展生态 + 多模型适配 | 1M 长上下文用户 + 扩展开发者 | in-context compaction、JSON Schema 可观测化（PR #9880） |
| **Qwen Code** | Managed Agent 全栈化 + Hosted/WebShell 架构 | 企业托管部署 + Kubernetes 用户 | Stage B/D/H 多阶段并行，强调枚举门禁与公网路由契约 |
| **DeepSeek TUI** | TUI 健壮性 + MCP 边界契约 + Runtime API | TUI 重度用户 + 插件生态 | GPUI 自有交互式终端契约、OAuth 2.0 + PKCE 双轨认证 |

---

## 5. 社区热度与成熟度

| 工具 | 社区热度 | 成熟度阶段 | 核心判断 |
|------|---------|----------|---------|
| Claude Code | 🔥🔥🔥🔥🔥（多账号诉求断层领先） | 大规模生产期 | 单条诉求 402 👍 体现强用户基础；P0 数据丢失 Bug 暴露规模化后的边缘场景短板 |
| OpenAI Codex | 🔥🔥🔥🔥 | 快速迭代 + 多产品线磨合期 | Dots、Windows、Computer Use 三线并发，PR 合并节奏紧凑但遗留问题面广 |
| Gemini CLI | 🔥🔥🔥🔥 | Agent 能力扩展期 | Subagent 工程债集中爆发（状态报告、settings 覆盖），急需可观测性基础设施 |
| GitHub Copilot CLI | 🔥🔥🔥 | 模型层加速 + 体验层欠债 | MCP 是事实扩展总线，但认证/协议细节欠打磨；PR 节奏放缓需关注 |
| Kimi Code CLI | ⚪ | 数据空窗（疑似） | 0 Issue / 0 Release / 1 PR 是异常信号，需确认是否为维护期或采集问题 |
| OpenCode | 🔥🔥🔥🔥 | 收尾 + 长会话攻坚 | 一批长期挂起 Bug 被关闭（macOS Panic、中文路径），同时新功能持续推进 |
| Pi | 🔥🔥🔥🔥 | 修复密集期 | 3 个长期 Bug 在本周期关闭，配置可观测化是亮点；扩展生态进入故障面 |
| Qwen Code | 🔥🔥🔥🔥 | 多阶段并行交付期 | Managed Agent Stage B/D/H 并行，PR review velocity 是当前瓶颈（多个延期项） |
| DeepSeek TUI | 🔥🔥🔥 | 收尾期（0.10.1） | MCP 边界 P0 影响全部用户，是版本发布前最关键阻塞 |

**综合判断**：
- **最成熟**：Claude Code（用户基数大但 P0 暴露规模化风险）
- **最活跃**：Codex、Qwen Code（PR 评审密度高）
- **最值得关注**：OpenCode（开源 + 多 Provider 路线具备长期潜力）
- **最需警惕**：Kimi Code CLI（数据空窗）、Copilot CLI（PR 停滞 vs Issue 密度倒挂）

---

## 6. 值得关注的趋势信号

### 6.1 MCP 已成事实标准扩展总线，但"协议细节欠打磨"是普遍痛点

5 款工具（Claude Code、Codex、Copilot CLI、Gemini CLI、DeepSeek TUI）的当日热点均涉及 MCP，但落点几乎都是**认证一致性、配置健壮性、工具

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-07 ｜ 数据源：github.com/anthropics/skills**

> ⚠️ 备注：本次数据集中所有 PR 的评论数（comments）字段均为 `undefined`，因此热门 PR 排行主要依据**议题重要性、近期更新活跃度、安全/战略性价值**综合评估，而非纯评论数。

---

## 1. 🔥 热门 Skills 排行（Top 8 PR）

| # | PR | Skill 名称 | 核心能力 | 状态 |
|---|---|---|---|---|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估修复** | 修复多 worker probe 竞争、Windows `select()` 失败、运行时异常被错误识别为"非触发"导致评估分数失真 | OPEN |
| 2 | [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder v2 适配** | 兼容 `mcp>=2.0.0` 的 `streamable_http_client` 重命名及自定义 header 配置（修复 [#1668](https://github.com/anthropics/skills/issues/1668)） | OPEN |
| 3 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** | Web3 智能合约静态分析（Solidity/Rust），审计结果通过零存储 Merkle 协议锚定到 TON 区块链 | OPEN |
| 4 | [#822](https://github.com/anthropics/skills/pull/822) | **AWT (AI Watch Tester)** | 零代码 E2E 测试生成 + 视觉与浏览器控制，给 Claude "眼睛和手"做端到端验证 | OPEN |
| 5 | [#1245](https://github.com/anthropics/skills/pull/1245) | **notion-spec-to-implementation + quantitative-resume-auditor** | 将产品/技术 Spec 转 Notion 可执行任务（含验收标准）；量化简历审计 | OPEN（持续更新中）|
| 6 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 排版质量控制：孤儿单词、寡妇段落、编号错位等 LLM 文档通病 | OPEN |
| 7 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** | 批量/破坏性写入前的"世界级"核对清单（删档、撤销权限、群发邮件等），填补 query-正确 ≠ 操作-正确的鸿沟 | OPEN |
| 8 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | SCNet HPC 集群运营：基于 profile 的 SSH + Slurm 工作流、作业生成、集群发现 | OPEN |

**讨论热点聚焦**：
- **skill-creator 自身的可靠性**反复成为社区焦点（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1681](https://github.com/anthropics/skills/pull/1681)、[#1961](https://github.com/anthropics/skills/pull/1961)），评估管线、Windows 兼容、脚本注入漏洞逐一被提报。
- **Web3 与区块链审计**首次进入官方候选集合（[#1771](https://github.com/anthropics/skills/pull/1771)），代表 Skills 向更专业化、垂直化场景延伸。
- **跨格式文档能力扩张**：ODT（[#486](https://github.com/anthropics/skills/pull/486)）、docx 修订清理（[#1792](https://github.com/anthropics/skills/pull/1792)）、排版质量（[#514](https://github.com/anthropics/skills/pull/514)）密集更新。

---

## 2. 📊 社区需求趋势（来自 Top Issues）

按评论数排序，社区最集中的诉求可归纳为五大方向：

| 方向 | 代表 Issue | 信号强度 |
|---|---|---|
| **🔐 信任边界 / 命名空间安全** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，2👍） | ⭐⭐⭐⭐⭐ |
| **🏢 企业级共享与分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论，8👍） | ⭐⭐⭐⭐ |
| **🧪 评估管线可靠性** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论，7👍） | ⭐⭐⭐⭐ |
| **🧠 Agent 状态/记忆/治理** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory、 [#412](https://github.com/anthropics/skills/issues/412) agent-governance、 [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate | ⭐⭐⭐ |
| **📦 内容去重与上下文治理** | [#189](https://github.com/anthropics/skills/issues/189) 插件重复（6 评论，9👍）、 [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 单次注入 156k token | ⭐⭐⭐ |

**关键洞察**：
- **安全/信任** 是第一诉求，且呈现多维度：不仅是命名空间伪装（[#492](https://github.com/anthropics/skills/issues/492)），还包含 eval viewer 的 XSS（[#1394](https://github.com/anthropics/skills/issues/1394)）、`subprocess shell=True` 命令注入（[#1980](https://github.com/anthropics/skills/pull/1980)）、以及 SharePoint 权限写在 SKILL.md 内的合规担忧（[#1175](https://github.com/anthropics/skills/issues/1175)）。
- **企业落地诉求强烈**：AWS Bedrock 适配（[#29](https://github.com/anthropics/skills/issues/29)）、SharePoint 集成（[#1175](https://github.com/anthropics/skills/issues/1175)）、Org 级 Skill 共享（[#228](https://github.com/anthropics/skills/issues/228)）三条线都在等官方方案。
- **评估体系本身急需重写**：评估管线 0/N 触发（[#556](https://github.com/anthropics/skills/issues/556)）、silent benchmark failure（[#1383](https://github.com/anthropics/skills/issues/1383)）、layout mismatch（[#1383](https://github.com/anthropics/skills/issues/1383)）暴露的是基础设施层而非个别 skill 的问题。

---

## 3. 🚀 高潜力待合并 Skills

以下 PR 战略价值高但仍未合并，可能在近期落地：

| PR | Skill | 落地潜力原因 |
|---|---|---|
| [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 元技能（meta-skill），直接回应 #492 安全诉求，且能形成 Skills 自审计闭环；已开放近一年，关注度持续 |
| [#1961](https://github.com/anthropics/skills/pull/1961) | **skill-creator eval viewer 加固** | 解决脚本越权、DNS rebinding、跨站 POST、转义问题——是 [Issue #1394](https://github.com/anthropics/skills/issues/1394) 的实际补丁 |
| [#1980](https://github.com/anthropics/skills/pull/1980) | **webapp-testing 去 `shell=True`** | 直接消除 CWE-78 命令注入面，优先级高 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **package_skill.py 直接可执行** | 修复 skill-creator 长期报错的 `ModuleNotFoundError`，作者持续跟进（最近更新 09-27） |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **trigger eval 隔离与 Windows/运行时修复** | 评估管线可信度的基础设施级补丁，直接缓解 [#556](https://github.com/anthropics/skills/issues/556)、[#1383](https://github.com/anthropics/skills/issues/1383) |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **academy-guide / claude-api 死链替换** | 已 curl 验证 200，最近期更新（10-04），低风险快赢 |
| [#822](https://github.com/anthropics/skills/pull/822) | **AWT E2E 测试** | 第三方独立项目，对接企业 CI/CD 需求明确 |

---

## 4. 🎯 Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是「让 Skills 在企业级、可信的生产环境中真正可用」——即围绕"安全命名空间 + 可信的评估管线 + Org 级分发 + 上下文治理"四条主线，而新 Skill 的功能多样性（如 Web3、HPC、E2E 测试）反而退居次位。**

具体表征：安全相关 Issue（#492、#1394、#1175）与 skill-creator/mcp-builder/webapp-testing 的修复型 PR 占据榜单近一半席位，且最热 Issue（#492，43 评论）的解决必须依赖元技能（#83）与命名空间机制层面变更——说明社区已从"加新 Skill"进入"修基建"阶段。

---

# Claude Code 社区动态日报
**2026-10-07**

---

## 今日速览

Claude Code 发布 **v2.1.292**，新增 `--marketplace` 安装参数与 Agent 工具的 `effort` 参数；社区最热的议题仍是多账号连接器支持（#27302，262 条评论、402 👍），同时今日浮现多条**高危数据丢失/权限提升类 Bug**（Windows `rm -rf`、sudo kill 全进程树），建议所有桌面端与 Linux 用户重点关注。

---

## 版本发布

### v2.1.292
- 新增 `claude plugin install --marketplace <source>`：按 `claude plugin marketplace add` 的策略自动添加 marketplace 并安装插件
- Agent 工具新增 `effort` 参数：子代理可在指定 effort 级别运行
- ⚠️ **新发现回归**（#100111）：`--max-budget-usd` 在每次 API 返回后才校验，$1 上限实测花费 $1.38（2.1.292 仍存在）

### v2.1.291
- 修复 2.1.290 中 cloud session 丢失权限提示回答的回归
- 修复 2.1.288 中退出会话时最后几条消息丢失的回归

---

## 社区热点 Issues（Top 10）

| # | Issue | 热度 | 关键点 |
|---|-------|------|--------|
| 1 | [#27302](https://github.com/anthropics/claude-code/issues/27302) 多账号连接器支持 | 262 评论 / 402 👍 | 同一 connector（如 GitHub/Gmail）支持多个不同账号，是 claude.ai/code 呼声最高的功能请求 |
| 2 | [#73107](https://github.com/anthropics/claude-code/issues/73107) Windows desktop 升级后无法启动 (0x80070020) | 20 评论 | 旧版本 AppX container 被孤立 elevated 子进程锁住，影响所有 Windows 桌面用户 |
| 3 | [#87647](https://github.com/anthropics/claude-code/issues/87647) 6k+ "has repro" Issue 被自动关闭 | 13 评论 / 87 👍 | 元议题：自 3 月起大量含复现步骤的 bug 被 bot 自动 close，开发者反馈渠道受损 |
| 4 | [#66010](https://github.com/anthropics/claude-code/issues/66010) GMail MCP 改写 URL 为 Google tracking 链接 | 18 评论 | 隐私问题，6 月 5 日起出现，外部 MCP 集成的 URL 被改写 |
| 5 | [#72032](https://github.com/anthropics/claude-code/issues/72032) GitHub 连接器在 Chat 中不可用 [P0] | 11 评论 | 账号已授权但 chat 内 connector 不可见的回归 |
| 6 | [#97660](https://github.com/anthropics/claude-code/issues/97660) Windows subagent `rm -rf` 误删 C 盘 | 2 评论 | **严重**：PowerShell→MSYS2 bash 转义漏洞导致整个 C 盘自上而下被擦除（high-priority / data-loss） |
| 7 | [#99768](https://github.com/anthropics/claude-code/issues/99768) 后台任务清理 sudo kill 全进程树 | 2 评论 | **严重**：低内存停止后台任务时，`sudo kill -TERM -<pgid>` 影响整个主机（data-loss） |
| 8 | [#97727](https://github.com/anthropics/claude-code/issues/97727) Max 订阅者登录被重定向到 onboarding | 4 评论 | 已付费用户 7 天无人工响应，移动端正常 |
| 9 | [#66291](https://github.com/anthropics/claude-code/issues/66291) VSCode macOS Ctrl+F / Ctrl+P 失效 | 9 评论 | Emacs 风格键位回归，影响所有 macOS VSCode 用户 |
| 10 | [#86198](https://github.com/anthropics/claude-code/issues/86198) `/effort` 与 advisor 并发导致 session 永久 400 | 6 评论 | advisor 子代理 in-flight 时执行斜杠命令会污染消息并永久报错 |

---

## 重要 PR 进展

> 过去 24 小时仅 3 条 PR 更新，全部列出：

1. **[#99206](https://github.com/anthropics/claude-code/pull/99206)** ✅ CLOSED — `diff` docked 面板起始位置
   - 修复 docked 模式下 `/diff` 多出一行空白 padding

2. **[#19084](https://github.com/anthropics/claude-code/pull/19084)** ✅ CLOSED — ralph-wiggum 插件 Windows stop hook 兼容性
   - 修复 WSL 下 `#!/bin/bash` shebang 路径解析失败导致的 stop hook 错误

3. **[#96434](https://github.com/anthropics/claude-code/pull/96434)** 🟢 OPEN — security-guidance: 把 deny 文件与密钥文件排除在 reviewer 之外
   - 修复 #96276；security-guidance 子代理不再读取被 deny 的文件及 `.env`、密钥、credential store；提供 `SG_SKIP_SECRET_FILES=0` 退出开关

---

## 功能需求趋势

1. **多账号 / 认证管理**（#27302、#72032）：同一 connector 多账号是当前呼声最高的需求
2. **跨端会话协同**（#76440）：claude.ai 会话 ↔ Claude Code session 的内容交叉引用
3. **桌面端能力补齐**（#100116、#94353）：Mods 事件触发、a11y / 屏幕阅读器
4. **模型与成本管理**（#100120、#100094、#100111）：advisor 自动选模型、订阅额度可见性、预算硬上限
5. **MCP / Connector 健壮性**（#66010、#89604、#100115）：URL 隐私、headless 认证、tool 列表实时刷新
6. **IDE 集成稳定性**（#66291、#91465、#100117）：VSCode 键位、worktree 会话恢复、hook 入参一致性

---

## 开发者关注点

1. **平台兼容性回归频繁**：Windows desktop（#73107、#97660、#100115）、macOS VSCode（#66291、#91465、#100117）几乎每次小版本都有新回归。
2. **高危安全 / 数据丢失**：#97660（`rm -rf`）和 #99768（sudo kill 整个进程树）暴露 **sandbox、bash 转义、后台进程清理**的边界仍未收敛，建议生产环境严格限制 `--dangerously-skip-permissions`。
3. **反馈机制信任危机**：#87647 揭示 6000+ `has repro` issue 被自动 close，开发者担心高质量复现报告被淹没。
4. **付费体验碎片化**：#97727（登录失效）、#100094（订阅额度计算）、#100111（预算硬上限）说明付费用户对**端到端一致性 + 成本可预测性**有强诉求。
5. **企业功能空白**：多账号连接器、跨 session 链接、统一审计/权限模型，是呼声最高的"下一个 1.0"级特性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

今日 Codex 生态围绕 **Windows 平台稳定性** 与 **Dots（云电脑）功能** 两个核心主题展开：长期未解决的 Windows ChatGPT Project 工作流问题持续升温（最高单 Issue 评论达 47 条），而 Dots 相关的会话恢复、设备授权、语音通话等新问题集中爆发。Rust 端 24 小时内连续发布 3 个 alpha 版本（0.162.0-alpha.17/18、0.161.0-alpha.13.1），同时仓库合入了大量已关闭的维护性 PR，社区迭代节奏明显加快。

---

## 🚀 版本发布

过去 24 小时 Rust CLI 发布了 3 个 alpha 更新，均处于 0.161~0.162 阶段：

| 版本 | 链接 |
|---|---|
| rust-v0.162.0-alpha.18 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.18) |
| rust-v0.162.0-alpha.17 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.17) |
| rust-v0.161.0-alpha.13.1 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.161.0-alpha.13.1) |

> 注：均为预发布 alpha 通道版本，详细 changelog 未在数据中给出，建议关注 CLI 升级通知。

---

## 🔥 社区热点 Issues（Top 10）

1. **#42215** — Windows ChatGPT Project 本地聊天项目上下文同步失败
   - 评论 47，是当日最受关注的 Issue。Windows 11 + Codex 26.825 下无法在 ChatGPT Project 内启动新的本地 Work 会话，文件系统阶段反复失败。
   - 重要性：阻塞企业用户的核心工作流，影响范围广。

2. **#44736** — Windows 项目预热锁定本地镜像，启动重写抹除已有 workaround
   - 评论 26，与 #42215 关联。补充了 helper 工作目录锁、启动重写抹除 workaround 的证据。
   - 重要性：为 Windows 平台长期未解问题提供更多诊断信息。

3. **#29407** — App 内置浏览器 Annotations 功能异常
   - 评论 11，👍 9。macOS Darwin 24.6.0 + Codex 26.616 下 Annotations 行为异常。
   - 重要性：长期未关闭，影响 Pro 用户日常使用体验。

4. **#48217** — 【已关闭】Linux Desktop 破坏共享 fontconfig 缓存
   - 评论 9，👍 3。Kubuntu 24.04 下启动 Codex Desktop 会将 `~/.cache/fontconfig` 改写为 cache-12 格式并创建兼容软链接，导致 KDE Plasma 与 Qt 应用 SIGSEGV。
   - 重要性：影响 Linux 桌面用户体验严重且具有破坏性。

5. **#50800** — macOS Dots 会话恢复后本地线程工具消失
   - 评论 9。ChatGPT Desktop 26.930 下，dot 任务恢复会话后本地线程工具不再可用。

6. **#45021** — 模型在 task-to-task 消息中丢失空格
   - 评论 9，👍 5。`gpt-6-astra` 模型在 exec / apply_patch / send_message_to_thread 工具消息体中常省略单词与数字之间的空格，与 CLI 版本无关。

7. **#42717** — `unified_exec` 中断 turn 后 inflight shell 进程未清理
   - 评论 6。macOS Darwin 25.5.0 下中断活跃 turn 时 `exec_command`/`write_stdin` 进程未被终止。

8. **#50388** — Dots 云电脑环境变更导致游戏项目不可访问
   - 评论 6。dot 云电脑环境发生未预期变更，开发数日的项目文件丢失。

9. **#48179** — Browser Use 对 localhost 返回 `net::ERR_BLOCKED_BY_CLIENT`
   - 评论 6。macOS 27.0.0 + Codex 26.917 下 Browser Use 一致拒绝 localhost 请求，但手动浏览器可访问。

10. **#50321** — Windows 桌面 Browser/Computer Use 内核因 node_repl.exe 校验失败无法启动
    - 评论 5。Windows 11 26200 + Codex 26.930.21537 下修复与更新后仍无法通过校验。

> 其余热点还包括 #49033（CLI 输入后冻结）、#50887（Dots 信任代理收据被拒）、#51533（已关闭，Dot 语音通话全平台失败）等。

---

## 🛠 重要 PR 进展（Top 10）

以下 PR 均在 24 小时内创建并已合入（CLOSED 状态），反映 Codex 仓库维护节奏紧凑：

1. **#51556** — 取消时完成 dynamic tool 生命周期
   - 修复 turn 取消或 Code Mode cell 终止时丢弃 pending dynamic tool handler 的问题，确保 late response 不会污染模型历史。[链接](https://github.com/openai/codex/pull/51556)

2. **#51547** — 新增 Windows MXC sandbox opt-out
   - 引入 `windows.allow_mxc` 配置及 JSON schema；设为 `false` 时阻止自动 MXC 选择，并对显式 `windows.sandbox = "mxc"` 报错。[链接](https://github.com/openai/codex/pull/51547)

3. **#51539** — 引入 completion-aware realtime attachment 与 session-scoped detach
   - 解决旧会话的延迟 detach 误关新会话的问题，并避免将凭据写入 realtime 启动参数。[链接](https://github.com/openai/codex/pull/51539)

4. **#51527** — 展开 sandbox deny glob 时忽略 ripgrep 配置
   - 防止 `RIPGREP_CONFIG_PATH` 中的 `--quiet` 等配置导致 deny glob 未正确屏蔽。[链接](https://github.com/openai/codex/pull/51527)

5. **#51525** — 保留 executor 配置读取中的 CLI MXC 偏好
   - 在 `environmentConfig/read` 中暴露 `features.prefer_mxc` 覆盖。[链接](https://github.com/openai/codex/pull/51525)

6. **#51517** — 向 attachment 上传传递 thread persistence intent
   - 区分持久化线程与 ephemeral 线程的上传行为。[链接](https://github.com/openai/codex/pull/51517)

7. **#51515** — 暴露详细的 agent tree shutdown 失败报告
   - 新增 `AgentTreeShutdown::wait_detailed()` 与公共 report 类型，便于诊断清理失败。[链接](https://github.com/openai/codex/pull/51515)

8. **#51512** — 对齐 Windows sandbox temp 权限与子进程环境
   - 解决 Windows temp grants 回退到 host `TEMP`/`TMP` 绕过只读/denied 子路径的问题。[链接](https://github.com/openai/codex/pull/51512)

9. **#51511** — 修复 Windows 10 盘符 no-follow 文件系统操作
   - 对被 strict native open 拒绝的盘符 reparse 点进行重试。[链接](https://github.com/openai/codex/pull/51511)

10. **#51510** — 配置重载失败时保留实时 TUI 设置
    - 防止 reload 失败后新建 thread 用陈旧配置覆盖更新的偏好。[链接](https://github.com/openai/codex/pull/51510)

> 其他重要 PR 还涉及：#51503（向 MCP contributors 暴露已选环境）、#51502（限制 relay 连接尝试并处理 blocked writes 期间的 pong）、#51500（agent command center 共享任务固定）、#51499（单 blocking worker 加载 rollout 历史）、#51492（从持久化 turn context 移除废弃字段）。

---

## 📈 功能需求趋势

从 Issue 标签与描述中提炼出社区当前最关注的方向：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **Dots（云电脑）能力** | #50800、#50388、#50887、#49824、#51533 | 多设备授权、会话恢复、信任代理、语音通话成为新焦点 |
| **Computer Use / Browser Use** | #48179、#50321、#51245、#49680、#51524、#49808 | 截图捕获、URL 探测、localhost 拦截、锁屏后恢复问题集中 |
| **Windows 平台兼容性** | #42215、#44736、#50321、#50423、#51282、#34882 | 仍是最高频问题来源，覆盖 sandbox、kernel 校验、稳定性 |
| **Sandbox / 安全模型** | #51555、#51547、#50826、#51527 | gVisor/bwrap 兼容性、MXC opt-out、approval loop、ripgrep 配置影响 |
| **模型行为** | #45021、#51554 | 输出空格丢失、长会话用量统计 |
| **CLI/TUI 体验** | #49033、#51268 | 输入冻结、Daybreak mode 提醒持久化关闭 |
| **App 配置文档化** | #41401 | 呼吁明确 App 配置面与稳定性合约 |

---

## 🧑‍💻 开发者关注点

综合社区反馈，开发者当前最集中反馈的痛点包括：

- **Windows 仍是"重灾区"**：文件系统同步（#42215）、sandbox 校验（#50321）、Desktop 启动崩溃（#51282）、kernel 启动失败（#51524）等问题反复出现，跨多版本未根治。
- **Dots 功能进入"磨合期"**：会话恢复后工具缺失（#50800）、多设备独立授权诉求（#49824）、云电脑环境变更导致项目丢失（#50388），反映新产品形态在权限/状态管理上还需加强。
- **Computer Use 跨平台稳定性**：macOS、Linux、Windows 在截图、URL 获取、localhost 访问上各有 bug，platform-specific 路径处理（盘符、reparse 点）成为细节关键。
- **CLI/Sandbox 配置一致性**：ripgrep 配置污染、MXC 偏好丢失、gVisor `bwrap` RTM_NEWADDR 失败等表明执行环境与 CLI 偏好之间的配置传播需要更严格。
- **可观测性与文档缺失**：#41401 呼吁明确 Codex App 配置面合约；agent tree shutdown 缺乏结构化报告（已被 #51515 改善）。
- **模型输出细节质量**：#45021 反映模型在结构化消息体中省略空格，提示需要更严格的输出后处理或 schema 约束。
- **Tool 生命周期正确性**：取消 turn 后 inflight shell 残留（#42717）、dynamic tool handler 未 settle（#51556）说明工具调用栈的可中断性仍是高优打磨方向。

---

*本日报基于 2026-10-07 当日 GitHub 公开数据生成。*
*来源：[openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期**：2026-10-07  
**数据来源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布三个版本（v0.63.0 稳定版、v0.64.0-preview.0 预览版、v0.65.0-nightly），社区讨论焦点高度集中在 **Subagent（子代理）的可靠性与生命周期管理**——包括子代理在 MAX_TURNS 后错误报告为成功、Wayland 下浏览器子代理崩溃、设置覆盖失效等 P1 级别缺陷。同期，**MCP 配置健壮性**（损坏配置误报启用、enable/disable 命令失灵）也成为核心修复方向。

---

## 🚀 版本发布

### v0.65.0-nightly.20261007.gef59c532f（Nightly）
- **PR #29583**：在 untrusted 文件夹中强制实施只读 workspace 设置
- **PR（core）**：恢复会话时避免重复的 tool response turn

### v0.64.0-preview.0（Preview）
- **PR #29450**：a2a-server 实现 V1 → V2 设置迁移逻辑
- **PR #29389**：ACP 模块桥接 `PromptResponse.usage` 并发送 `usage_update` 通知

### v0.63.0（Stable）
- **PR #29468**：连接恢复时展示重试进度指示器
- Changelog 已合入 v0.61.0-preview.1

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论数 | 链接 |
|---|-------|--------|--------|------|
| 1 | **#22323** Subagent 触发 MAX_TURNS 后被错误报告为 GOAL 成功，掩盖中断事实 | P1 Bug | 13 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **#19873** 利用模型 bash 亲和性：零依赖 OS 沙箱 + 执行后意图路由 | P2 增强 | 9 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 3 | **#21409** Generalist Agent 频繁 hang，简单操作也无法完成 | P1 Bug | 8 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 4 | **#22745** AST 感知的文件读取/搜索/映射价值评估（EPIC） | P2 功能 | 7 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **#21968** Gemini 几乎不主动使用自定义 skills 和 sub-agents | P2 Bug | 7 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **#22267** Browser Agent 忽略 settings.json 的 maxTurns 覆盖 | P2 Bug | 4 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **#21983** Browser subagent 在 Wayland 下失败 | P1 Bug | 4 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 8 | **#22232** Browser agent 会话接管与锁恢复增强 | P3 功能 | 4 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 9 | **#24246** 工具数 > 128 触发 400 错误 | P2 Bug | 3 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| 10 | **#22672** Agent 应抑制 git reset --force 等危险行为 | P2 | 3 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |

**关键观察**：
- **Subagent 生命周期管理** 是最大热点，3 个 P1 Bug 均涉及子代理在受限条件下的状态报告异常。
- **Browser Agent 稳定性** 成为新焦点：settings 不生效、Wayland 兼容性、锁恢复等问题集中爆发。
- **AST 工具**被多个 Issue 关联（#22745、#22746、#22747），显示社区对智能代码理解的强烈期待。

---

## 🛠 重要 PR 进展

| PR | 模块 | 内容 | 链接 |
|----|------|------|------|
| **#29445** 🔴 | core | 区分 MCP enablement 配置"不可读"与"缺失"，防止损坏配置误报已禁用服务器 | [#29445](https://github.com/google-gemini/gemini-cli/pull/29445) |
| **#29444** 🔴 | cli | 修复 `gemini mcp enable/disable` 永远无法匹配服务器的问题 | [#29444](https://github.com/google-gemini/gemini-cli/pull/29444) |
| **#29449** | security | 新增 PkgDiet 依赖守卫 skill，检查包健康度/体积/废弃状态 | [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) |
| **#29447** | sdk | 在 SdkAgentShell 中传递 env、timeoutSeconds 和外部 AbortSignal | [#29447](https://github.com/google-gemini/gemini-cli/pull/29447) |
| **#29552** | core | 报告 ripgrep 执行失败（`GREP_EXECUTION_ERROR`） | [#29552](https://github.com/google-gemini/gemini-cli/pull/29552) |
| **#29564** | cli | 迁移设置时保留 `${VAR}` 环境占位符，避免静默展开 | [#29564](https://github.com/google-gemini/gemini-cli/pull/29564) |
| **#29553** | core | 将月度预算上限 429 视为终态配额错误，避免无限重试 | [#29553](https://github.com/google-gemini/gemini-cli/pull/29553) |
| **#29655** | auth | 防止 OAuth 浏览器验证与重试无限循环 | [#29655](https://github.com/google-gemini/gemini-cli/pull/29655) |
| **#29612** | core | 强制实施 terminal user turn 不变量，规范请求内容 | [#29612](https://github.com/google-gemini/gemini-cli/pull/29612) |
| **#29665** | ide | 在 gVisor 沙箱中显示明确的网络隔离错误，而非误导提示 | [#29665](https://github.com/google-gemini/gemini-cli/pull/29665) |

🔴 = 已关闭（值得回顾学习）

---

## 📈 功能需求趋势

从近 50 条热门 Issue 提炼出的社区关注方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Subagent 增强**（并行、共享内存、轨迹共享、settings 发现） | #18287, #20195, #22598, #18285 | ⭐⭐⭐⭐⭐ |
| **AST 感知代码理解工具** | #22745, #22746, #22747 | ⭐⭐⭐⭐⭐ |
| **OS 沙箱与安全强化** | #19873, #22672 | ⭐⭐⭐⭐ |
| **任务追踪从 in-context 迁移到文件持久化** | #18836, #21000 | ⭐⭐⭐⭐ |
| **Token/上下文效率优化**（外科式读取、grep 优先） | #19561 | ⭐⭐⭐⭐ |
| **IDE 集成兼容**（gVisor、Wayland） | #29665, #21983 | ⭐⭐⭐ |
| **稳定内部评估系统** | #23166, #23313 | ⭐⭐⭐ |

---

## 💔 开发者关注点（痛点高频需求）

1. **Agent 状态报告不可靠** —— 子代理在超时、被中断后仍报"成功/GOAL"，给开发者造成误导（13 次讨论）。
2. **配置覆盖不生效** —— Browser Agent 完全忽略 `settings.json` 的 `maxTurns`，agent 体系普遍存在此问题。
3. **工具数量限制** —— 超过 128 个工具时直接返回 400，缺乏智能剪裁（#24246）。
4. **破坏性操作无法拦截** —— `git reset --force` 等高危命令仍被执行，缺乏 safeguard（#22672）。
5. **散落的临时脚本污染工作区** —— 模型在各处随机创建 tmp 脚本，清理负担重（#23571）。
7. **Symlink 与 agents 配置不兼容** —— `~/.gemini/agents/*.md` 为符号链接时无法识别（#20079）。
8. **MCP 配置损坏导致安全回退失败** —— 损坏的 `mcp-server-enablement.json` 默认全部放行（#29445）。
9. **Bug 报告缺失子代理上下文** —— `/bug` 命令无法反映子代理内部状态（#21763）。
10. **自定义 Skills/Subagents 几乎不被自动使用** —— 模型未按 description 主动调用（#21968）。

---

## 🔮 一句话洞察

> Gemini CLI 已进入 **Agent 能力扩展期**：社区不再满足于单一 LLM 调用，而是围绕"多 Subagent 协同 + 持久化任务追踪 + AST 级代码理解"构建下一阶段能力。但 **Subagent 的状态可观测性、settings 覆盖链路、错误传播机制**仍是阻碍生产落地最急迫的工程债。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-07** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 连续发布两个补丁版本（v1.0.93-2、v1.0.93-3），重点优化 MCP 服务器配置热加载与企业网络边界管控；模型选择器也正式将 GPT-6.1 Sol、GPT-6 Astra/Luna 与 Claude 5.5 列为推荐模型。社区端热度集中在 MCP 集成（OAuth、Entra 认证、Datadog/Azure 等服务兼容性）以及输入交互 UX（Shift+Enter、双击 Esc、配色回归），而备受关注的 #400「No model available」问题被正式关闭。

---

## 🚀 版本发布

### v1.0.93-3（今日）
- **Improved**：MCP 服务器配置变更可**无需重启会话**在两个 turn 之间生效——显著提升多 MCP 插件调试体验。

### v1.0.93-2（今日）
- **Added**
  - 新增企业级 `permissions.limitTo`，用于对网络请求强制实施托管域名边界（域名白名单/锁定），便于合规管控。
- **Improved**
  - 模型选择器更新推荐列表，优先展示 **GPT-6.1 Sol、GPT-6 Astra/Luna、Claude 5.5**。
- **Fixed**
  - GitHub.com Connector 用户可展开 GitHub CLI 权限（issue 截断处，详情见 release notes）。

> 💡 这两个版本均聚焦 **MCP 生态闭环 + 企业治理**，对重度 MCP 用户来说是体验型更新。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 互动 | 为什么值得关注 |
|---|-------|------|------|----------------|
| [\#400](https://github.com/github/copilot-cli/issues/400) | No model available. Check policy enablement | **CLOSED** | 💬 57 / 👍 34 | 长期高频问题，企业/组织用户 Copilot 在 CLI 中突然报"无可用模型"，今日正式关闭——说明组织策略侧的修复已落地 |
| [\#4775](https://github.com/github/copilot-cli/issues/4775) | Mission Control dashboard 链接 404（路径错位 `/copilot/tasks` → `/agents/tasks`） | OPEN | 💬 9 / 👍 2 | Web 端"我创建的"会话列表点击直达链接全部失效，但会话本身存活——典型的发布期路由回归，影响所有使用 Mission Control 的用户 |
| [\#2776](https://github.com/github/copilot-cli/issues/2776) | Shift+Enter 误提交 prompt | OPEN | 💬 7 / 👍 3 | 终端输入 UX 痛点：写长 prompt 时无法换行，被用户反复吐槽，呼声较高 |
| [\#5066](https://github.com/github/copilot-cli/issues/5066) | Assisted permissions 模式回归：审批过于频繁 | OPEN | 💬 3 | 体感类回归——assisted 模式本应"自助通过"，如今连 `ls`、`Get-ChildItem` 都要审批，严重破坏流畅度 |
| [\#1785](https://github.com/github/copilot-cli/issues/1785) | 输入栏编辑快捷键（Ctrl+U、全选、清空） | **CLOSED** | 💬 3 / 👍 2 | 反映"现代终端/编辑器"基础能力缺位，今日关闭意味着官方已合入改进 |
| [\#4695](https://github.com/github/copilot-cli/issues/4695) | MCP OAuth token 跨会话无法复用，重复触发重新认证 | OPEN | 💬 2 / 👍 1 | HTTP MCP + OAuth（PKCE）场景下缓存键不一致，导致每次启动都要重新登录，体验断裂 |
| [\#4954](https://github.com/github/copilot-cli/issues/4954) | Windows 桌面 App 启用远程控制失败：No authentication token available | **CLOSED** | 💬 2 / 👍 1 | 影响桌面端用户在 Windows 上的远程会话能力，已关闭 |
| [\#1300](https://github.com/github/copilot-cli/issues/1300) | 沙箱内无法 `uv sync`（文件系统访问被阻断） | **CLOSED** | 💬 2 / 👍 1 | Python 工具链在 Copilot CLI 沙箱内的兼容性问题，已修复 |
| [\#4749](https://github.com/github/copilot-cli/issues/4749) | Azure MCP `learn=true` 调用在 1.0.83-5 超时 180s | OPEN | 💬 1 | 同一调用在 1.0.80 仅需 0.2s——典型的版本回归，定位优先级高 |
| [\#5028](https://github.com/github/copilot-cli/issues/5028) | `create_pull_request` 在 Copilot App 报"runtime settings are not configured"（PR 已成功创建） | OPEN | 💬 1 | WSL 远程主机 + App 端的边界场景，错误信号与实际结果矛盾，影响自动化 |

### 其他值得留意的新 Issues（24h 内提出）

- [\#5069](https://github.com/github/copilot-cli/issues/5069) `tool_search_tool` 在 MCP 注册未完成时误报"No tools found"，**错误信号静默化**是个危险的可用性问题。
- [\#5063](https://github.com/github/copilot-cli/issues/5063) SDK host 通过 `overridesBuiltInTool` 注册 `store_memory`/`vote_memory` 被运行时忽略——**SDK 扩展性回归**。
- [\#5057](https://github.com/github/copilot-cli/issues/5057) 项目级 canvas extension 在 1.0.90-0 起不再被发现（**插件发现回归**）。
- [\#5056](https://github.com/github/copilot-cli/issues/5056) 10 月新配色回归（heatmap 灰度化、选中态可读性下降），**无障碍/可读性**风险。
- [\#5064](https://github.com/github/copilot-cli/issues/5064) 建议在缓存仍温热时由 agent 主动提议 `/compact`，涉及 **缓存成本优化**。
- [\#5067](https://github.com/github/copilot-cli/issues/5067) 关于上下文重建加速的提案（缓存 + 内存结构化）。

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时内**无 PR 更新**。这与近期高频 issue 形成对比，提示维护者当前可能聚焦版本发布与 triage，代码合并节奏有所放缓。社区可关注 backlog 中的 MCP OAuth、Shift+Enter、配色回归等条目是否在后续进入 review。

---

## 📈 功能需求趋势

通过对 33 条近 24h 更新 issue 的聚类，社区最关注的方向（按热度排序）：

1. **MCP 生态完善（占比最高）**
   - 跨会话 OAuth token 复用、Entra/Datadog/Azure/Jira 等服务的认证兼容、协议版本回退、Entra `api://` scope 支持——MCP 已成为 Copilot CLI 的"事实扩展总线"，但认证与协议细节仍欠打磨。

2. **输入/交互 UX 升级**
   - Shift+Enter 换行、Ctrl+U 等编辑快捷键、双击 Esc 行为可配置、配色回归——键盘党对"现代终端"基础的呼声强烈。

3. **企业/合规治理**
   - `permissions.limitTo` 新增域名边界策略；组织策略下模型可用性（#400）——Copilot CLI 正在向 enterprise-ready 推进。

4. **模型生态**
   - 模型选择器优先 GPT-6.1、Claude 5.5 等新一代模型，反映模型层的快速迭代。

5. **会话/上下文性能**
   - 主动 compact、上下文重建加速、token 使用 checkpoint——成本与延迟成为长会话用户的新痛点。

6. **插件与扩展体系**
   - 子 agent hook、Canvas extension 发现、plugin.json 声明 MCP 依赖——SDK 形态正在被渐进式丰富。

7. **审批流粒度**
   - "可审批但永不允许 always-approve"的需求（#5062），反映开发者对**不可逆命令（git push 等）**的安全焦虑。

---

## 🧩 开发者关注点（痛点与高频需求）

| 维度 | 代表性反馈 | 痛点本质 |
|------|-----------|---------|
| **MCP 认证可靠性** | #4695、#5039、#5058、#5061、#5068 | 跨服务、跨会话的 OAuth 一致性差，协议细节（PKCE、`api://` scope、Entra 校验、Datadog token exchange）零碎失败 |
| **审批体验倒退** | #5066、#5062 | assisted 模式过严 + "always approve" 缺乏"一次性"选项，破坏效率与安全的平衡 |
| **交互键盘冲突** | #2776、#5060 | Shift+Enter 提交、双击 Esc 误触 rewind——缺少可配置层 |
| **视觉无障碍回归** | #5056 | 配色变灰、可读性下降，触发 a11y 担忧 |
| **SDK/插件边界** | #5063、#5057、#2113 | overridesBuiltInTool、extension 发现、plugin↔MCP 依赖声明——扩展性边界在快速迭代中出现反复 |
| **错误信号失真** | #5028、#5069 | 报错与实际状态不一致（PR 已创建却报错；工具未注册却返回"无匹配"），影响自动化与监控 |
| **上下文成本** | #5064、#5067 | 缓存窗口、compact 触发点、上下文重建——长会话用户的"隐性账单"焦虑 |

> 📊 总结：过去 24h 的 issue 密度与 #400 这种"老问题集中关闭"现象叠加，说明 Copilot CLI 正处在**模型层（MCP、新模型）加速 + 体验层（UX、SDK）欠债**的过渡期。开发者最迫切的三件事是：**MCP 认证稳定化、审批 UX 重新校准、扩展机制的回归测试覆盖**。

---

*报告生成基于 GitHub 公开数据；如需更细粒度的标签/作者维度分析，可追加 issue 标签云与维护者响应时间统计。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期**: 2026-10-07
**项目**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日仓库动态相对清淡：过去 24 小时内 **无新增 Issues、无版本发布**，仅有一项 PR 被关闭并合入。整体来看，项目处于稳定的维护期，社区反馈与新功能提交处于低位。

---

## 3. 社区热点 Issues

> 过去 24 小时内**无 Issues 更新**（共 0 条）。近期 Issues 数据未在本次数据源中提供，建议关注 [GitHub Issues 页面](https://github.com/MoonshotAI/kimi-cli/issues) 获取全量信息。

---

## 4. 重要 PR 进展

### [#2616 Add Build Remote Agent phone pairing](https://github.com/MoonshotAI/kimi-cli/pull/2616) — ✅ CLOSED
- **作者**: [LinespottingPrivate](https://github.com/LinespottingPrivate) | **更新**: 2026-10-06
- **内容摘要**: 新增 **Build Remote Agent** 作为桌面端 Agent 的配对设备。移动端（iOS/Android）付费 App 可通过 MIT 协议的 [`gbr-agent`](https://github.com/LinespottingOrg/GrokBuildRemote-Agents) 旁观或注入本地会话，协议为 `gbr/1`。
- **定位**: 手机端定位为 *spectator + veto*（旁观者 + 否决权），而非指挥者（orchestra），保留了桌面端的控制权。
- **社区反应**: 👍 0 评论 — 新合并 PR，尚未获得社区反馈。
- **意义**: 这是一项 **跨设备协同** 能力扩展，将 Kimi CLI 的使用场景从桌面延伸至移动端，是产品边界的重要拓展。

> 由于 24 小时内仅此 1 条 PR 更新，暂无法提供 Top 10 完整列表。

---

## 5. 功能需求趋势

由于过去 24 小时无新增或更新的 Issues 数据，**功能需求趋势无法从今日数据中提炼**。从 PR #2616 的方向可推测一项目级趋势信号：

| 趋势方向 | 信号 |
|---------|------|
| 🌐 **跨端协同 / 远程控制** | PR #2616 引入移动端配对能力，提示多端场景化是当前产品方向之一 |
| 🔌 **第三方协议集成** | 引入 `gbr/1` 外部协议，说明项目正在开放给生态伙伴 |
| 📱 **移动端能力补齐** | iOS/Android 付费应用作为旁观/注入节点，移动办公场景值得关注 |

---

## 6. 开发者关注点

⚠️ **数据不足声明**：今日 Issues 与评论数据为空，本节无法基于真实社区反馈进行总结。建议结合以下渠道获取完整信号：

- 📋 [Kimi CLI 全部 Issues](https://github.com/MoonshotAI/kimi-cli/issues)
- 💬 [Kimi CLI Discussions](https://github.com/MoonshotAI/kimi-cli/discussions)（如有）
- 🔀 [Kimi CLI PRs](https://github.com/MoonshotAI/kimi-cli/pulls)

---

## 📌 编辑备注

今日数据样本极少，建议在日报中明确标注，避免误读。建议运营侧关注：
1. 是否存在 Issues/PR 处理延迟导致的数据空窗；
2. 跨日数据合并统计，以获得更可靠的趋势判断；
3. PR #2616 合入后的下游反馈跟踪（移动端联调、协议稳定性）。

---
*报告生成于 2026-10-07 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-07

## 今日速览

OpenCode 在过去 24 小时发布了 **v1.18.35**，重点引入面向 Agent 的可读统计数据（JSON / Markdown）以及 xAI 图像处理修复；同时一批长期挂起的关键 Bug 被关闭，涵盖 macOS 内核 Panic、SQLite 持久化崩溃、中文/Unicode 路径以及 TUI 黑屏等问题，社区整体处于"密集收尾 + 长会话性能优化"的阶段。

---

## 版本发布

### v1.18.35（2026-10-06）

**Core · Improvements**
- 新增 canonical redirects，并提供 JSON / Markdown 格式的 agent-readable stats，便于 Agent 与外部工具消费统计数据。

**Core · Bugfixes**
- xAI 工具结果现在正确包含支持的图像，自动跳过不支持的图像格式（贡献者：@Jaaneek）。

**社区贡献**
- 感谢 3 位社区贡献者；其中 @dc85 提交了 `docs(web)` 相关改进。

---

## 社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 状态 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#4031](https://github.com/anomalyco/opencode/issues/4031) Python SDK 请求 | 30 | CLOSED | 评论数最高，反映出大量开发者希望官方提供 Python SDK（v1.0.39+）以便集成。 |
| 2 | [#32002](https://github.com/anomalyco/opencode/issues/32002) macOS 内核 Panic（zone map exhaustion / 内存泄漏） | 11 | CLOSED | 涉及 EndpointSecurity kext 的内核级崩溃，影响 macOS 26.3 用户，属于高严重度稳定性问题。 |
| 3 | [#13061](https://github.com/anomalyco/opencode/issues/13061) 中文/Unicode 路径在 v1.1.54+ 失效 | 6 | CLOSED | 自 v1.1.53 后含中文路径的工作区出现 "Failed to reload [object Object]" / "List files failed"，对中文用户影响巨大。 |
| 4 | [#36661](https://github.com/anomalyco/opencode/issues/36661) `workspace_id = NULL` 导致 export 失败 + TUI 挂起 | 6 | CLOSED | 数据一致性问题，会话可列不可导，并引发 TUI 卡死。 |
| 5 | [#37464](https://github.com/anomalyco/opencode/issues/37464) **[FEATURE]** 自定义 `statusLine`（类 Claude Code） | 3（👍11） | OPEN | 点赞数最高，开发者强烈希望支持 shell 命令驱动的状态行，曾被合规机器人误关后又重新提报。 |
| 6 | [#38853](https://github.com/anomalyco/opencode/issues/38853) **[FEATURE]** Skills 支持子文件夹组织 | 4 | CLOSED | 解决 `~/.config/opencode/skills/` 平铺混乱问题，社区呼声稳定。 |
| 7 | [#31990](https://github.com/anomalyco/opencode/issues/31990) SQLite UPSERT 失败致进程崩溃 | 4 | CLOSED | `part` 表 UPSERT 在 `step-finish` 事件投影阶段失败，直接影响会话持久化可靠性。 |
| 8 | [#52375](https://github.com/anomalyco/opencode/issues/52375) Desktop 缺 `gpt-6.1-sol` 且共享会话被强制切换模型 | 4 | OPEN | CLI 与 Desktop 模型列表不一致，跨端共享会话时模型被强换，是典型的跨端一致性痛点。 |
| 9 | [#40982](https://github.com/anomalyco/opencode/issues/40982) **[FEATURE]** 社区驱动的 i18n locale pack | 3 | CLOSED | 推动 Skills / Tools / Agents 文案外部化，是降低本地化贡献门槛的关键提案。 |
| 10 | [#41124](https://github.com/anomalyco/opencode/issues/41124) **[EMERGENCY]** 删除已泄露的 Session 分享链接 | 3 | CLOSED | 用户无法 `/unshare`，需要服务端强制失效并清理数据，反映出"分享 → 删会话 → 链接孤儿"流程缺位。 |

> 此外，今日新增的 #53666（远程 config 失败导致 provider 配置丢失并自动换模型）、#53671（`blacklist` / `whitelist` 字段被静默丢弃）、#53669（Web 无法粘贴剪贴板图像）等 Open 状态问题值得持续追踪。

---

## 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 关键内容 |
|---|---|---|---|
| 1 | [#53625](https://github.com/anomalyco/opencode/pull/53625) `fix(ui): inline custom answers for string choice fields in connect` | CLOSED | Web/Desktop `/connect` 流的字符串选项支持 `custom: true`，可输入自定义值（由 @rekram1-node 提交）。 |
| 2 | [#53626](https://github.com/anomalyco/opencode/pull/53626) `feat(core): add Bedrock credential setup` | OPEN | 接入 AWS Bedrock 凭证引导：API Key、AWS Profile（SSO/命名 profile）、AK/SK/Session Token 三条路径，并自动发现 config/credentials 中的 profile。 |
| 3 | [#53641](https://github.com/anomalyco/opencode/pull/53641) `feat(app): deterministic timeline file link detection` | OPEN | 为 timeline 文件链接提供词法门 + 4 级评分解析（Exact > Suffix > Subseq > Basename），结果可重现。 |
| 4 | [#53667](https://github.com/anomalyco/opencode/pull/53667) `fix: retain remote config and TUI model selections` | OPEN | 修复 #53666：远程 config 获取失败时不再丢弃已有 provider 配置；当无安全配置时直接阻断模型使用。 |
| 5 | [#53425](https://github.com/anomalyco/opencode/pull/53425) `feat(task): subagent branch isolation` | OPEN | 给 task 工具增加 `branch` 参数，使用 detached worktree 为子代理创建隔离工作区，scope-exit 时清理（解决 #53111）。 |
| 6 | [#53660](https://github.com/anomalyco/opencode/pull/53660) `feat(tui): show and load the messages a long session hides` | OPEN | TUI 默认仅加载最近 100 条消息，本 PR 提供 UI 让用户显式加载被隐藏的历史消息（closes #53642）。 |
| 7 | [#53663](https://github.com/anomalyco/opencode/pull/53663) `feat(tui): sidebar.session_id` | OPEN | 新增 `sidebar.session_id` 配置项，使 Release 构建也能在侧边栏显示 Session ID（closes #53662）。 |
| 8 | [#53661](https://github.com/anomalyco/opencode/pull/53661) `feat(app): subagents shown separately in default timeline` | OPEN | Compact 预设下将子代理卡片从折叠的 "Used" 分组中拆出，单独展示。 |
| 9 | [#53659](https://github.com/anomalyco/opencode/pull/53659) `fix(desktop): delete old staged CLI versions` | CLOSED | Desktop 不再累积 `userData/cli/<version>/` 旧副本（曾出现 1.4 GB / 7 个版本的膨胀）。 |
| 10 | [#53058](https://github.com/anomalyco/opencode/pull/53058) `fix(opencode): fail closed on unknown --agent` | CLOSED | `opencode run --agent NAME` 在 agent 不存在或为子代理时不再回退到默认 agent（closes #47038）。 |

---

## 功能需求趋势

从本期 Issues / PR 文本归纳，社区关注点按热度排序：

1. **长会话与性能**：默认 100 条消息截断、长会话打开慢（#53660 / #53429 / #52375）——多个 PR 同时攻坚"打开时只取最新 + 后台补齐"的模式。
2. **Provider / 模型配置鲁棒性**：Bedrock 接入（#53626）、自定义 OpenAI-compatible provider 的 `npm` 覆盖被静默丢弃（#41162）、`blacklist/whitelist` 字段被规范化时剥离（#53671）、远程 config 失败回退策略（#53666/#53667）。
3. **桌面 / Web UX**：剪贴板粘贴图像（#53669）、Markdown 文本可选中（#53665）、子代理单独卡片（#53661）、一次性配对链接（#53257）、关闭其他 Tab（#41142）。
4. **国际化与本地化**：Skills 子文件夹（#38853）、外部 i18n locale pack（#40982）、Termux 跟随系统深色模式（#53664）。
5. **TUI 体验增强**：自定义 `statusLine`（#37464，👍11）、侧边栏显示 Session ID（#53662/#53663）、stats 页面返回快捷键（#53658）。
6. **多 Agent / Subagent 编排**：分支隔离（#53425）、子代理模型解析展示（#41136）、V2 subagent 等待（#41172）。
7. **生态扩展**：插件文档新增（#53670）、Provider 接入文档（#53503）。

---

## 开发者关注点（痛点与高频诉求）

- **跨端一致性差**：CLI 与 Desktop 模型列表不一致，共享会话跨端打开会被强切模型（#52375）。CLI 用户用 `gpt-6.1-sol`，Desktop 用户看不到。
- **数据持久化脆弱**：`step-finish` 投影到 `part` 表的 UPSERT 失败直接导致进程崩溃（#31990）；`workspace_id = NULL` 时会话可列不可导且 TUI 挂起（#36661）。
- **配置系统"静默丢弃"**：自定义 provider 的 `npm` override、模型过滤 `blacklist/whitelist`、远程 config 失败后的 fallback，都存在"配置看起来生效、运行期被吞掉"的情况，调试体验差。
- **平台差异 / 路径问题**：自 v1.1.54 起中文 / Unicode 路径工作区无法加载（#13061），macOS 偶发内核级 Panic（#32002），Termux 不跟随系统暗色模式（#53664）。
- **SDK 缺位**：Python SDK 请求的 Issue 评论数高达 30（#4031），是当周最热的集成诉求。
- **隐私 / 共享机制缺陷**：会话分享链接无可靠失效入口，本地会话删除后服务端无主动清理（#41124）。
- **Desktop 资源累积**：staged CLI 版本未清理，最严重案例累积 1.4 GB（#53659 修复）。
- **合规机器人误伤**：多个有价值 Feature Request 被 stale / compliance bot 错误关闭（#37464、#41142），需重提，消耗社区精力。

---

> 数据窗口：过去 24 小时；Issue / PR 列表均按评论数排序取样。如需扩展追踪特定模块（如 provider、subagent、TUI），可基于此清单建立长期观察项。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-07

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)（镜像 earendil-works/pi）

---

## 一、今日速览

过去 24 小时 Pi 仓库共更新 50 个 Issue 与 21 个 PR，社区关注度集中在**上下文压缩（compaction/summarization）的可靠性**、**Bedrock / OpenRouter / 本地模型的多平台适配**以及 **TUI 终端交互的稳定性**三大方向。多个长期存在的 Bug（如 ESC 中断卡死、edit 工具超时、上下文预算溢出）均已被 PR 修复并关闭。

---

## 二、版本发布

过去 24 小时无新版本发布（最近一次动态为 v1.0.3 之后的持续补丁合入）。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 摘要 |
|---|---|---|---|---|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | Pi 在 ESC 中断思考时偶发卡死 "Working..." | **已关闭** | 22 | 自 v0.84.0 起高频出现的会话卡死问题，多机复现，目前已修复 |
| [#10300](https://github.com/earendil-works/pi/issues/10300) | ChatGPT OAuth ID token 未持久化，扩展无法读取账户身份 | OPEN | 14 | `credentialFromTokenResponse` 字段缺失，导致扩展生态访问账户受限 |
| [#10480](https://github.com/earendil-works/pi/issues/10480) | 直连 OpenAI 不识别 ChatGPT Pro 100 手动重置 | OPEN | 13 | 用量限制到期后重启 token 流程才生效，影响订阅用户稳定性 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock：OpenAI 模型拒绝 `toolResult.content` 内嵌图像 | OPEN | 11 | 需将与 `openai-completions.ts` 一致的图像提升逻辑移植到 Bedrock |
| [#3159](https://github.com/earendil-works/pi/issues/3159) | edit 工具超时终止（Qwen 27B） | **已关闭** | 10 | 新版本后高频复现，可能与默认 timeout 过短有关 |
| [#8061](https://github.com/earendil-works/pi/issues/8061) | 上下文预算忽略 `maxTokens` 输出预留，溢出重试也失败 | **已关闭** | 10 | 1M 上下文模型在 ~78% 输入时被拒，compact-and-retry 不能恢复 |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | `before_provider_request` 不在压缩/分支摘要请求中触发 | OPEN | 9 | 与文档描述不符，扩展 hook 覆盖范围不全 |
| [#9075](https://github.com/earendil-works/pi/issues/9075) | Compaction 沿用会话思考级别，AI 思考消耗 `max_tokens` | OPEN | 9 | 高 effort 下 compaction 输出必然撞顶，需要隔离思考与摘要预算 |
| [#5064](https://github.com/earendil-works/pi/issues/5064) | 添加上下文窗口手动选择选项 | **已关闭** | 8 | 与 Copilot CLI 一致的体验，提示用户主动管理 context window |
| [#8810](https://github.com/earendil-works/pi/issues/8810) | 扩展注册 Provider 在新会话中忽略 `defaultProvider` | OPEN | 8 | Provider 优先级与默认解析存在竞态，影响第三方扩展用户体验 |

**社区反应观察**：
- **ESC / 取消机制**（22 评）是单条反馈最激烈的问题，反映出用户对中断语义稳定性的强诉求；
- **上下文预算**（#8061、#9075、#9773）合计评论超 30 条，是当前最稳定的"话题簇"，说明 1M 级别长上下文场景已普遍落地；
- **OAuth / 扩展集成**类问题（#10300、#10480）热度上升，扩展生态正在成为新的故障面。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#10580](https://github.com/earendil-works/pi/pull/10580) | `fix(tui)` 保留手动滚动位置 | **已关闭** | 解决 #10556：内容缩小后 `ScrollView` 重置 `currentScrollTop` 导致用户滚动丢失 |
| [#10577](https://github.com/earendil-works/pi/pull/10577) | `feat(coding-agent)` 添加 in-context compaction | OPEN | 在缓存会话上下文中就地生成压缩摘要，降低延迟与 token 开销 |
| [#10569](https://github.com/earendil-works/pi/pull/10569) | `feat(ai,coding-agent)` 按 Key 可用性过滤 OpenRouter 模型 | OPEN | 使用 `GET /api/v1/models/user` 过滤被 guardrails/provider 偏好屏蔽的模型（关 #10353） |
| [#10528](https://github.com/earendil-works/pi/pull/10528) | `refactor` Nix 包 | OPEN | 清理 `package.nix`、移除 sourcemap、使用 `makeBinaryWrapper` |
| [#10142](https://github.com/earendil-works/pi/pull/10142) | `fix(ai)` 向 Bedrock OpenAI 模型发送 `reasoning_effort` | **已关闭** | 修复 #9331：gpt-oss 平铺 effort、其余模型 clamp 到 low/medium/high |
| [#10570](https://github.com/earendil-works/pi/pull/10570) | `fix(coding-agent)` Windows 路径比较忽略盘符大小写 | **已关闭** | 修复 Windows 下 `~/.agents/skills` 重复识别为项目技能 |
| [#10567](https://github.com/earendil-works/pi/pull/10567) | `fix(tui,coding-agent)` transcript 重建时清除全屏选择 | **已关闭** | 修复 #9310：session 切换/fork/导入后保留选择态导致显示错位 |
| [#10557](https://github.com/earendil-works/pi/pull/10557) | `fix(coding-agent)` 将 `outputPad` 应用于所有 transcript 块 | **已关闭** | 修复 #9946：CMD 模式输出未遵循 `outputPad: 0`，并修正 `!!` header 颜色 |
| [#10553](https://github.com/earendil-works/pi/pull/10553) | `fix(coding-agent)` 强制仅 codemode 工具执行 | **已关闭** | codemode=only 时阻断模型直接调用未声明工具，提升沙箱安全性 |
| [#9880](https://github.com/earendil-works/pi/pull/9880) | `feat(coding-agent)` 发布配置 JSON Schema | OPEN | 为 models / settings / keybindings / themes 生成可发布的 JSON Schema，主题加载时校验 |

**值得关注**：
- **TUI 体验收尾**：#10580、#10567、#10557、#10560（鼠标 tracking 顺序）四 PR 集中在终端交互健壮性；
- **Bedrock 修复闭环**：#9331 → #10142 完整走通，是近一周少有的"Issue → PR → Merge"长尾修复案例；
- **配置可观测化**：#9880 把 TypeBox 契约转 JSON Schema，让 IDE/插件能直接做补全与校验。

---

## 五、功能需求趋势

| 趋势 | 代表 Issue / PR | 说明 |
|---|---|---|
| **上下文压缩 / 预算** | #9773、#9075、#8061、#10577、#10583 | compaction 钩子覆盖、思考预算隔离、in-context 压缩、按"字符 vs token"校准保留量 |
| **多平台 / 多模型适配** | #8643、#10569、#10502、#10578、#10433 | Bedrock OpenAI、OpenRouter、Anthropic strict 工具、Qwen3.8 模板、Codex 应用名 |
| **OAuth / MCP / 扩展生态** | #10300、#10563、#10429、#10433 | Google MCP 服务器 `access_type=offline`、ChatGPT ID token 持久化、Codex 应用身份 |
| **TUI / 终端体验** | #9310、#10567、#10557、#10580、#9656、#9715 | 全屏选择、outputPad、滚动保持、Zellij 鼠标、主题化选择样式 |
| **配置可观测化** | #9880、#10566、#10549 | 文档化 `AssistantMessage.thinkingLevel`、工具结果嵌套元数据、durable 时间戳 |
| **pi-durable 框架** | #10542、#10546、#10549、#10583、#10533 | 系统条目顺序、反向 `scanTasks`、时间戳、循环等待检测、压缩校准 |

---

## 六、开发者关注点（痛点与高频需求）

1. **Codemode 安全语义不清** — 扩展可在 codemode=only 下被模型绕过直接执行 (#10553)；循环等待仍可导致死锁 (#10533)，需要更明确的状态机文档。
2. **Windows 体验仍是断点** — 路径大小写 (#10570)、盘符 CLI 字符乱码 (#10442)、Wayland/Display 环境变量误用剪贴板 (#10558)、Nix 覆盖用户 PATH (#10519) 密集出现。
3. **OpenAI / Codex 身份暴露** — 多位开发者不希望自己的应用在 Codex 中被识别为 "Pi" (#10300、#10429、#10433)，可自定义 User-Agent / Originator 已合并。
4. **长上下文 + 高思考级别撞顶** — 1M 上下文 + adaptive thinking 时，compaction 摘要会确定性地命中 `max_tokens` (#9075)，请求重试链需要端到端校验。
5. **错误体溢出与图像尺寸上限** — 非 JSON 错误体绕过 4000 字符上限 (#10574)、`resizeImageInProcess` 优先 PNG 输出超大 (#10479)，错误与产物保护需要补齐。
6. **本地模型推理参数透传** — Qwen3.8 模板只发 `enable_thinking` 而不发 `reasoning_effort` (#10578)，llama.cpp classifier 分类需独立通道 (#10382)。
7. **durable 任务可观测性** — 缺时间戳 (#10549)、仅支持正向扫描 (#10546)、进度提交频率不可配 (#10357)，三类需求均集中在过去一周 PR 中。

---

*日报基于 2026-10-06 ~ 2026-10-07 期间 GitHub 仓库动态生成，下期将于 2026-10-08

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-07**

---

## 📌 今日速览

今日社区焦点集中在 **Managed Agent 路线图的多阶段推进**：Stage B（#12737）、Stage D 后续（#12867）、Stage H2.5（#13369 已关闭）、Stage H3（#13532-13535）等多个阶段并行推进，多位核心贡献者（wenshao、yiliang114、doudouOUC）密集提交 PR。同时，社区报告了多个 P1 级缺陷，包括 Subagent 模型 ID 解析失败（#13561）、shell 工具的 `sed -i` 反斜杠转义误读（#13556）以及长会话 JSONL 快照超过 256 MiB 索引上限导致会话无法打开（#13113）等。

---

## 🚀 版本发布

### v0.25.1-preview.0
- 🔧 **fix(agents)**: 在替换选定的远程 Hosts 时不再丢失绑定（PR #13430）
- 🧪 **test(core)**: 完成 #12693 合并后评审的测试修复

> 📎 [Release 链接](https://github.com/QwenLM/qwen-code/releases/tag/v0.25.1-preview.0)

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 标题 | 评论数 | 重要性 |
|---|-------|------|--------|--------|
| 1 | [#12867](https://github.com/QwenLM/qwen-code/issues/12867) | Stage D 后续（持久生命周期、Turns、Actions、`java_durable` 接纳配置、AgentDefinition） | 17 | 🟢 P2 · Managed Agent Stage D 关键后续，决定耐久会话能力边界 |
| 2 | [#12737](https://github.com/QwenLM/qwen-code/issues/12737) | ACP Bridge Stage B：Legacy 与 Managed 引擎配对 Host 集成 | 15 | 🟡 P3 · 调度决策已定，配对 Host 基础是本期重点 |
| 3 | [#13395](https://github.com/QwenLM/qwen-code/issues/13395) | Kubernetes 工具运行时进度与跨平台交付门禁追踪 | 13 | 🟢 P2 · 跨平台交付关键节点，影响托管部署可用性 |
| 4 | [#13078](https://github.com/QwenLM/qwen-code/issues/13078) | 每日依赖 CVE 审计失败 | 12 | ⚪ Triage · CI 安全审计异常，需关注供应链风险 |
| 5 | [#13561](https://github.com/QwenLM/qwen-code/issues/13561) | Subagent 将 `<providerId>:<modelId>` 完整前缀发送给 API，自定义 Provider 触发 404 | 3 | 🔴 P1 · 直接阻塞 Subagent 与自定义 Provider 协同工作 |
| 6 | [#13556](https://github.com/QwenLM/qwen-code/issues/13556) | `sed -i` 模拟在方括号表达式内误读反斜杠转义 | 3 | 🔴 P1 · 常用去尾空白命令解析失败，影响日常文件编辑 |
| 7 | [#13113](https://github.com/QwenLM/qwen-code/issues/13113) | 长会话 JSONL 快照超过 256 MiB 索引上限导致会话无法打开 | 3 | 🔴 P1 · 长会话用户痛点，256 MiB 硬编码限制需修复 |
| 8 | [#13369](https://github.com/QwenLM/qwen-code/issues/13369) | Stage H2.5 — H2 与 H3 之间的 Managed Hooks 加固（已关闭） | 5 | 🟢 P2 · 已落地，Managed Hooks 的硬化半步 |
| 9 | [#11550](https://github.com/QwenLM/qwen-code/issues/11550) | 内存写入导致 prompt 重新处理 | 3 | 🟢 P2 · 性能与缓存相关，影响日常使用流畅度（👍 1） |
| 10 | [#13558](https://github.com/QwenLM/qwen-code/issues/13558) | 单元格含未闭合反引号的 Markdown 表格无法渲染 | 3 | 🟢 P2 · UI 渲染缺陷，影响 Markdown 阅读体验 |

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 1. [#13352](https://github.com/QwenLM/qwen-code/pull/13352) — M5c：Shell 进程组物理停止（带 Worker Ledger）
实现 #12380 的 **M5c 物理停止**切片，提前于 M5b 落地。所有 Runtime worker 启动的 Shell 进程组均写入 worker 拥有的 ledger 文件，提供可审计、可恢复的停止机制。

### 2. [#13332](https://github.com/QwenLM/qwen-code/pull/13332) — 关闭 #12693 合并后评审的 Managed session 正确性缺口
两轮 post-merge 评审（R1 09-30、R2 10-03）后，对当前 main 上的每一个正确性发现进行逐一修复。

### 3. [#13168](https://github.com/QwenLM/qwen-code/pull/13168) — Hosted turns 接入 Workspace 项目上下文
Hosted turns 现可接收已保存 Session 工作目录中的 `QWEN.md` 与 `AGENTS.md`，首次原生 files/shell 工具获取时返回只读运行时控制原始指令，**不预留工具执行**。

### 4. [#13554](https://github.com/QwenLM/qwen-code/pull/13554) — Stream-capture 工具输出的 O4 生命周期收集
实现 #13534 的 P1：背景 Shell stream captures 与前台 Shell 残留发布段/页，纳入 Session-rooted 保留生命周期。

### 5. [#13325](https://github.com/QwenLM/qwen-code/pull/13325) — 关闭 #12692 R2 评审 8 项关键发现
修复 InnoDB 锁序倒置、Session 列表 keyset 分页遍历可变索引等关键缺陷。

### 6. [#13401](https://github.com/QwenLM/qwen-code/pull/13401) — 强化 pinning 见证并补充续约臂 pinning 见证（#13388 follow-up）
测试增强，加固 Hosted Harness SSE-reader 与 broker SessionContext-guard 两个 virtual-thread carrier-pinning 见证，并补充第三个缺失见证。

### 7. [#13244](https://github.com/QwenLM/qwen-code/pull/13244) — 副查询输出 token 按解析后上下文窗口预算
side query 经 `BaseLlmClient.generateJson/generateText` 从不经过 `llm-chat.ts`，主轮的 `clampOutputTokensToWindow` 不会作用于其上；本 PR 给副查询加上适配其上下文窗口的输出预算。

### 8. [#13354](https://github.com/QwenLM/qwen-code/pull/13354) — 可靠的 ACTIVE Workspace 删除（L3）
经公共路径与 WebShell 路由实现 idle ACTIVE `hosted-workspace-files/1` Session 的可靠删除；ACTIVE close 仅运行 SessionEnd 并保留数据，ACTIVE delete 在 SessionDelete 前先 verify 已提交结果。

### 9. [#13543](https://github.com/QwenLM/qwen-code/pull/13543) — 公网与 WebShell 表面的枚举与接纳门禁
枚举 Managed Agent 全部 HTTP 表面（78 个路由，跨 10 个 controller），并将该枚举作为载入路径门禁。

### 10. [#13548](https://github.com/QwenLM/qwen-code/pull/13548) — H5a：Channel 路由与投递记录契约
落地 Managed Agent 扩展运行时 H5a 切片（#12827），定义 `managed-channel_route` 与 `managed-channel_delivery` 记录体。

> 另外两条已关闭 PR 值得关注：#13174（G3 — 采用下一代 Hosted Harness）与 #13498（EventTransport 消息信封契约，纯契约+夹具/无运行时消费者）。

---

## 📈 功能需求趋势

从今日活跃 Issue/PR 中提炼出社区最关注的方向：

1. **Managed Agent 全栈化** 🔥🔥🔥
   Stage B（配对 Host）/ D（耐久会话）/ H（扩展运行时 MCP/Hooks/Shell/Monitor/Channels）等多阶段并行推进；O4 保留与收集适配器（#13534）、H3 启用门槛（#13533）、生产启用所需的角色/租户隔离（#13535）等系统性需求集中浮现。

2. **Hosted / WebShell 架构** 🔥🔥
   Workspace 删除（#13354）、公网表面接纳门禁（#13543）、Channel 契约（#13548）等方向表明团队正把 Hosted 从实验功能推向生产。

3. **跨平台与部署形态** 🔥🔥
   Kubernetes 工具运行时（#13395 跟踪）成为新的关注点；Linux 物理验收（#13472 提至 20 分钟上限）反映对真实环境验证的重视。

4. **LSP / 客户端协议正确性**
   LSP 动态注册能力声明但拒绝 `client/registerCapability`（#13491 已关闭）、`extensionToLanguage` 部分映射导致扩展归属错判（#13527 已关闭）等修复，说明 LSP 子系统的精细化打磨进入收尾。

5. **会话/存储生命周期**
   JSONL 索引 256 MiB 硬限制（#13113）、Hosted 文件历史保留与恢复（#13124）、Side-query 截断不可区分（#13538）等，反映长会话/Hosted 存储的稳定性是当前重点。

6. **副查询预算与模型路由**
   Side-query 输出预算（#13244）、Subagent 模型 ID 前缀错误（#13561）、`models.dev` 归一化（#13209 已关闭）说明多模型、多 provider 协作的鲁棒性持续打磨。

7. **安全与 WebShell 转义**
   受托管审批对话框主路径（`tool.args`）未做 bidi/控制字符转义（#13517），是继 React 流水线之后暴露的安全问题。

---

## 💡 开发者关注点

从 Issue/PR 反馈中归纳出以下高频痛点与需求：

- **🟥 P1 缺陷需优先修复**
  - `sed -i` 在方括号表达式内的反斜杠转义解析错误（#13556）——影响"去尾空白"这类日常命令
  - Subagent `model: providerId:modelId` 将完整前缀串传给 API（#13561）——自定义 Provider 全部 404
  - 长会话因 `file_history_snapshot` 二次增长超过 256 MiB 而无法打开（#13113）——硬编码限制缺少保护

- **🟧 性能与缓存痛点**
  - 内存写入触发 prompt 重新处理（#11550，👍 1）——影响响应延迟
  - 背景 agent 在 fork 后丢失 loop-detector 名称（#13519）——可观测性盲点

- **🟨 CI / 供应链**
  - 每日依赖 CVE 审计失败（#13078）——审计基础设施稳定性需要排查
  - 多轮 PR 评审后遗留的"延期发现"（如 #13528）累积，对评审节奏形成压力

- **🟦 UI / 可读性**
  - 未闭合反引号导致 Markdown 表格无法渲染（#13558）
  - 短内容 VP 模式顶部留白（#9305）——影响默认终端体验

- **🟪 架构治理**
  - 公网路由（78 个）需要枚举与接纳门禁（#13543）——表面扩张后管理需求显现
  - LSP 动态注册协议一致性（#13491、#13527）——客户端/服务端契约需统一
  - Hosted Harness 跨重启会话保留（#13174 G3）——已升级到下一代 Hosted Harness
  - 多个 PR 跨多轮评审累积延期项，反映出 **PR review velocity** 是当前开发节奏的关键瓶颈

---

*📅 数据来源：GitHub QwenLM/qwen-code（截至 2026-10-07，过去 24 小时窗口）*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-10-07**
**数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 📌 今日速览

今日最值得关注的是 **PR #6880** 进入评审，作为 0.10.1 的最终收尾跟进，涵盖中文安装指南、Windows 桥接记录重试机制、依赖审计以及 19 插件目录，标志着 0.10.1 临近完工。MCP 工具发现仍存在严重缺陷（Issue #6828），同时一批 TUI 体验类问题被集中修复或关闭，包括 Space 键隐藏消息、watchdog 误杀 `request_user_input` 等待、复制粘贴误发送等。

---

## 🚀 版本发布

过去 24 小时无新版本发布。0.10.1 处于最后跟进阶段，预计很快合入。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 状态 |
|---|-------|--------|------|
| [#6828](https://github.com/codewhale-hq/Codewhale/issues/6828) | 0.10.0 启用 MCP 服务器在会话中不暴露工具，`tool_search` 为空 | **P0** 影响 0.10.0 全部 MCP 用户，模型完全无法发现或调用 MCP 工具，文档化的"懒触发"机制失效 | OPEN |
| [#6160](https://github.com/codewhale-hq/Codewhale/issues/6160) | App-server 终端字节契约：session / bytes / input / resize / exit / ConPTY | **基础设施级** GPUI 需要自有交互式终端而非第二个 PTY，跨桌面/TUI 统一契约，影响长期架构 | OPEN |
| [#6876](https://github.com/codewhale-hq/Codewhale/issues/6876) | TUI 空 composer 按 Space 永久隐藏最后一条助手消息 | 中等严重，TUI UX 关键交互缺陷，无任何恢复路径 | CLOSED |
| [#6872](https://github.com/codewhale-hq/Codewhale/issues/6872) | UI tool-hang watchdog 在 `request_user_input` 等待 600 秒后误杀回合 | 误判人类等待为工具卡死，破坏人机协作流程（非历史重复 issue） | CLOSED |
| [#6263](https://github.com/codewhale-hq/Codewhale/issues/6263) | 会话内安全输入令牌（模型不可见，TUI + 桌面） | **设计级** 当前必须跳出 TUI 到终端运行 `codewhale auth set`，打破 Agent 心流；明确排除将密钥粘贴进 composer 的方案 | OPEN |
| [#6877](https://github.com/codewhale-hq/Codewhale/issues/6877) | Windows 上 Copy-Paste 实现有误：多行粘贴内容被直接发送给 LLM | TUI 基础功能缺陷，仅 Windows 平台，复现性高 | OPEN |
| [#6874](https://github.com/codewhale-hq/Codewhale/issues/6874) | 2026-10-06 夜间安全扫描 | 自动化安全审计产出，受 `GITHUB_CODEWHALE_SECURITY_PAT` 缺失限制无法完整读取 CodeQL 结果 | OPEN |
| [#6828（续）](https://github.com/codewhale-hq/Codewhale/issues/6828) | 此外还影响 `codewhale exec` 子进程路径，`mcp connect` 无法附加到运行中的会话 | 反映 MCP 进程边界与 TUI 会话生命周期管理的根本性张力 | OPEN |

> 注：今日 Issues 共 7 条，已全部列出。其中 #6828 同时覆盖 MCP 工具发现与 session attach 两个关联痛点。

---

## 🛠️ 重要 PR 进展

| # | PR | 关键内容 |
|---|----|---------|
| [#6880](https://github.com/codewhale-hq/Codewhale/pull/6880) | **0.10.1 最终跟进**：中文安装/源码指南、Windows 桥接记录替换重试 EPERM/EACCES/EBUSY（带边界延迟，不再先 unlink 旧记录）、微信归属、依赖审计、19 插件目录 | 0.10.1 发布前的四项关键收尾 |
| [#6846](https://github.com/codewhale-hq/Codewhale/pull/6846) | **0.10.1 主体**：社区贡献整合 + 人类等待生命周期修复（无限问题在 hung-tool timeout 后保留原始回合）、Space 折叠已确定答案为可见预览 | 已关闭，进入 #6880 跟进阶段 |
| [#6878](https://github.com/codewhale-hq/Codewhale/pull/6878) | `codewhale mcp connect` / `mcp validate` 输出明确进程边界语义，避免误读为当前运行会话已加载工具 | 直接呼应 #6828 的边界混乱问题 |
| [#6875](https://github.com/codewhale-hq/Codewhale/pull/6875) | 翻译 `/model` 切换后追加的 session-only 提示（修复 zh-Hans 半英文 receipt） | 修复 i18n 漏译 |
| [#6873](https://github.com/codewhale-hq/Codewhale/pull/6873) | 安全依赖升级：`source-map-js` 1.2.1 → 1.2.2，修复 GHSA-68fv-2mgg-jv7q（事件循环 DoS） | 配合 #6874 安全扫描 |
| [#6867](https://github.com/codewhale-hq/Codewhale/pull/6867) | OrcaRouter 新增 OAuth 2.0 + PKCE 浏览器登录入口，并补齐实时 chat 目录（与 API key 并列） | 提供商接入体验升级 |
| [#6832](https://github.com/codewhale-hq/Codewhale/pull/6832) | `/permissions`（含别名 + `/config` 权限规则路由）与 `/status` 引入可移植配置策略与状态 Shape | FEAT-027 推进命令可移植化 |
| [#6805](https://github.com/codewhale-hq/Codewhale/pull/6805) | 受审插件可声明具名 OpenAI 兼容 AI 提供商与公共 OAuth 客户端，复用既有路由/Chat Completions/流式路径 | 插件生态开放 |
| [#6869](https://github.com/codewhale-hq/Codewhale/pull/6869) | `GET /v1/skills/{name}` 返回 `SKILL.md` 正文与路由元数据 | 补齐 Runtime API 缺位路由，客户端可激活技能 |
| [#6817](https://github.com/codewhale-hq/Codewhale/pull/6817) | Runtime API 新增"读取某次工具调用周边快照变化"的端点，shell 命令执行也能归因 | 完善客户端变更可视化能力 |

> 备选关注（未列入前十）：#6857（compaction 防锚点被粘贴摘要窃取）、#6864（删除 automation 时归档终端运行）、#6858（vision 报告真实图像尺寸）、#6860（修复 Bing/DDG 搜索忽略 locale）、#6810/#6879（dependabot 依赖小版本）。

---

## 📈 功能需求趋势

从本周 Issue/PR 集合中提炼的社区关注方向：

1. **MCP 工具可发现性** — 0.10.0 后 MCP 成为核心扩展机制，但工具暴露与 session 边界语义仍有缺陷（#6828、#6878），是该周期的最高优先级主线。
2. **TUI 基础交互健壮性** — Space 键行为、复制粘贴（特别是 Windows）、watchdog 误判等"小但扎手"问题集中爆发，说明 TUI 状态机仍有边界用例未覆盖。
3. **会话内安全凭据录入** — #6263 提出将 provider token 输入留在 TUI 内的需求，体现"不打断 Agent 心流"的强诉求。
4. **国际化一致性** — #6875 修复 zh-Hans 下的半英文 receipt，反映非英文用户对翻译完整性的敏感度提升。
5. **提供商与认证扩展** — OAuth 2.0 + PKCE（#6867）、受审 OAuth AI 提供商插件声明（#6805）显示多提供商接入进入"双轨制"（API key + 浏览器 OAuth）。
6. **Runtime API 完整性** — `GET /v1/skills/{name}`（#6869）与工具变更归因端点（#6817）补齐客户端侧能力面板。
7. **自动化与依赖安全** — 夜间安全扫描（#6874、#6873）已形成节奏，供应链安全成为常态化工作流。
8. **技能/压缩/视觉等长尾能力** — #6857、#6858、#6860 等修复虽小，但覆盖面广，显示项目在长尾质量上持续投入。

---

## 💡 开发者关注点

- **MCP 进程边界是当前最大痛点**：TUI/`exec` 会话中 MCP 工具完全不可见，且 `mcp connect` 看上去成功但实际未附加到运行会话。社区急需一份关于"会话内 MCP 重新连接 / 工具重发现"的明确契约。
- **TUI 状态机的边界用例**：Space 折叠助手消息但缺乏恢复路径、watchdog 把"等用户"当"工具卡死"、Windows 复制粘贴被当作输入直接提交 —— 三类问题指向同一根源：键盘事件与会话生命周期未做语义区分。
- **Windows 平台被反复提及**：桥接记录替换重试（#6880）、复制粘贴实现（#6877），Windows 用户体验仍是优先短板。
- **"不跳出 TUI"的诉求强烈**：无论是粘贴密钥（#6263）、激活技能（#6869）、查看变更（#6817），社区都在推动客户端能力向 TUI/桌面内聚。
- **安全供应链节奏成型**：夜间 sweep + 自动化 PR 形成闭环，开发者期望未来减少"高危但低可见"的传递依赖问题。
- **i18n 与文案一致性**：即便在功能 PR 中也会夹带翻译修复（#6875），说明多语言质量已成为合并门的一部分。

---

*日报基于 GitHub Issues / Pull Requests 数据整理；链接指向 codewhale-hq/Codewhale 仓库（Hmbown/DeepSeek-TUI 跟踪源对应的上游）。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*