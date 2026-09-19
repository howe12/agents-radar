# AI CLI 工具社区动态日报 2026-09-19

> 生成时间: 2026-09-19 02:39 UTC | 覆盖工具: 9 个

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

# 2026-09-19 AI CLI 工具生态横向对比分析

## 一、生态全景

主流 AI CLI 工具已进入 **"能力扩展 + 跨工具标准化 + 平台稳定性"** 的三轨并进阶段。一方面，Claude Code 落地 AGENTS.md、Codex 推出独立网络代理二进制、Qwen Code 引入 hybrid code mode，标志着 **插件化/扩展化能力** 已成为各家必争之地；另一方面，Windows 平台稳定性、MCP 生态碎片化、长会话性能悬崖 成为 **全行业通病**。从单日数据看，9 款工具中有 7 款单日 Issue/PR 更新量超过 30 条，开发者社区的高强度反馈正在反向倒逼官方迭代节奏。

---

## 二、各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | 新发布 | 关键热度信号 |
|------|-----------|---------|--------|------------|
| **Claude Code** | 50 | 10 | 1（v2.1.277） | AGENTS.md 关闭 5169 👍；Mods #91870 201 评论 |
| **OpenAI Codex** | 50 | 10 | 6+（v0.155.1 + 5 个 alpha） | 数据丢失事件 #46022（CRITICAL） |
| **Gemini CLI** | 50 | **36** | 1（v0.62.0-nightly） | P1 子代理状态报告失真 #22323 |
| **GitHub Copilot CLI** | 32（20 开/12 关） | **0** | 1（v1.0.87-0） | Skills 子文件夹 #1632 获 24 👍（仓库前列） |
| **Kimi Code CLI** | 13（11 关） | 1 | 0 | 新增回归 #2652 + 历史高优 Bug 集中关闭 |
| **OpenCode** | 10+ | 10+ | 0 | 启动性能组合拳 5 个 PR |
| **Pi** | 50 | 21 | 0 | Claude edit 工具失败率 #6278（25 评论） |
| **Qwen Code** | 50+ | 10+ | 2（preview + nightly） | `/cd` 升级回归 #12224 + Web PTY #11872 |
| **DeepSeek TUI (Codewhale)** | 50 | **24** | 0 | 引擎静默冻结 #6184 + 品牌重命名 PR #6350 |

> 📊 **观察**：Gemini CLI 与 DeepSeek 在 PR 维度最活跃（36 / 24），反映其处于**架构密集重构期**；Claude Code、Codex、Pi 的 Issue 量稳定在 50，说明用户基数与反馈通道已成型；Copilot CLI 出现罕见的"零 PR 日"，可能与 v1.0.87 代码冻结有关。

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🪟 Windows 平台稳定性** | Claude Code（#53247/#94198）、Codex（#40968/#46022/#32477）、Copilot CLI（#1086/#3858）、Kimi（#1296） | 沙箱初始化失败、内存泄漏、键位/Shell 默认值、apply_patch 卡顿；Windows 普遍被视为"二等公民" |
| **🔌 插件化与扩展框架** | Claude Code（Mods）、Codex（独立 network proxy / Plugin catalog）、Copilot CLI（skills）、Pi（extensions / systemPromptAppend）、Qwen（hybrid code mode / `tools.mode`） | "可编程 Agent OS"成为共识；function hooks、子代理扩展、配置治理被密集推动 |
| **🤖 MCP 生态兼容** | Claude Code、Codex、Gemini、Copilot CLI、Kimi、Pi、Qwen、DeepSeek（8/9 款） | OAuth 注册、Discover 协议、stdio 传输在子代理中的过早关闭、断连重连——MCP 是"全行业基础设施"但"碎片化失败" |
| **🌐 多 Provider / 多模型接入** | Pi（Meta Muse、Qwen CN、zai-coding-cn）、DeepSeek（CSDN 星图）、Codex（Provider 模型目录）、Gemini、Qwen | Provider 联邦化趋势明确，但**上游目录同步缺乏自动化通道** |
| **📝 跨工具标准化（AGENTS.md）** | Claude Code（已落地）、隐含 Codex / Cursor / Amp / OpenCode 阵营 | 13 个月诉求落地、5169 👍，已成事实标准 |
| **🛡️ 破坏性操作的安全护栏** | Codex（Full Access 数据丢失 #46022 / #33624）、Qwen（bwrap 沙箱 #12067）、Gemini（零依赖 OS 沙箱 #19873）、DeepSeek（ACP 沙箱 #6310） | "硬确认 + 范围限制 + 恢复闸门"是共同呼声 |
| **🧠 会话工程（压缩 / 审计 / 恢复）** | Pi（compact 与 thinking block 冲突 #9652、export 丢上下文 #8896）、Qwen（session writer 锁错误码 #12212）、Claude Code（interleaved thinking 静默丢失 #77651） | 从"会话能跑"到"会话可审计、可压缩、可跨进程恢复" |
| **🌏 CJK / 国际化体验** | OpenCode（GBK 编码破坏 #49881）、Pi（CJK 标点词边界 #9746）、Qwen（LSP 非 ASCII 静默丢响应 #12206） | 中日韩用户体验差距成为细分赛道 |
| **⚡ 启动性能 / Bundle 体积** | OpenCode（5 个组合拳 PR：luxon -68KB、TS 懒加载 -11MiB、ready 即首窗 -900ms）、Claude Code（Diff UI 打磨）、DeepSeek（TUI 调试栈扩 32 MiB） | 性能作为差异化竞争力 |

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | **可编程 Agent OS** | 重度开发者、企业 B2B 集成 | Mods 插件系统 + AGENTS.md 标准；沙箱修复 + 多账户诉求并存 |
| **OpenAI Codex** | **企业可嵌入的扩展框架** | 企业 IT、安全敏感团队 | 独立 `codex-network-proxy` 二进制；Provider/Plugin/MCP 三栈并行 |
| **Gemini CLI** | **AST 感知的智能工程代理** | 大型代码库维护者 | AST 搜索工具、Auto Memory、零依赖 OS 沙箱 |
| **GitHub Copilot CLI** | **企业级 Agent 分发与治理** | 企业团队、合规场景 | Auto 路由策略管理、连续 steering 合并、组织级 Agent 模板 |
| **Kimi Code CLI** | **IDE 中心的多 Provider 接入** | VSCode 重度用户、国内企业 | 与 VSCode/Web UI 深度集成，2.0.0 大版本回归阵痛 |
| **OpenCode** | **极致启动性能的开发者 CLI** | 性能敏感型开发者 | Bundle 瘦身、Electron 优化、V2 平滑迁移 |
| **Pi** | **Provider 联邦的多模型编排** | 多模型订阅用户（Anthropic / Meta / Qwen / Mistral） | Provider 适配层、扩展 API 一等公民 |
| **Qwen Code** | **Codex 对齐的工具调用范式** | 国内企业、Codex 兼容需求方 | Hybrid code mode + bwrap 沙箱 + 远程 Workspace |
| **DeepSeek TUI (Codewhale)** | **Provider 中立的 TUI 可观测代理** | Rust 工具链用户、IDE 集成方 | 两套 MCP 客户端栈整合、外部记忆层、品牌重命名 |

> 💡 **关键差异点**：Claude Code 与 Codex 在"插件系统"上正面竞争，但 Claude Code 走 AGENTS.md 标准化路线、Codex 走独立二进制 + Plugin catalog 路线；Gemini、DeepSeek 选择"AST 化 + 可观测性"作为差异化；Pi 走 Provider 联邦路线；Copilot CLI 走企业治理路线。

---

## 五、社区热度与成熟度

**🔥 高活跃 + 快速迭代**（Issue/PR 双高，架构仍在剧烈演进）
- **Gemini CLI**（50 + 36）、**DeepSeek/Codewhale**（50 + 24）、**Pi**（50 + 21）
- 这三款正处在功能边界扩张期，子代理、Provider、可观测性等核心抽象尚未稳定

**📈 高活跃 + 功能定型**（Issue 高、PR 中等，已进入体验打磨阶段）
- **Claude Code**（50 + 10）、**Codex**（50 + 10）、**Qwen Code**（50 + 10）
- 核心模型已稳定（如 Claude Code Mods、Codex alpha 通道密集迭代），重心在 UX 与跨平台打磨

**🧪 低活跃 + 重大重构期**
- **OpenCode**（10 + 10+）：V2 迁移是主线，PR 集中在性能优化与 schema 重构
- **Copilot CLI**（32 + 0）：罕见的代码冻结窗口

**🔧 低活跃 + 回归消化期**
- **Kimi CLI**（13 + 1）：2.0.0 大版本上线 48 小时，11/13 Issue 当日关闭，处于"密集反馈 → 快速修复"循环

**成熟度判断**：
- **最成熟**：Claude Code（v2.1.277，AGENTS.md 标准化）、Codex（rust-v0.156 alpha 系列，Provider/Plugin 全栈）
- **最不稳定**：Kimi（2.0.0 回归）、DeepSeek（品牌重命名进行中）、OpenCode（V2 迁移期）
- **生态最丰富**：Copilot CLI（企业分发）、Codex（Plugin catalog）、Claude Code（Mods 框架）

---

## 六、值得关注的趋势信号

### 🚨 信号 1：插件/扩展框架成为"下一代分水岭"
Claude Code Mods、Codex Plugin catalog、Copilot CLI skills、Pi extensions、Qwen `tools.mode`——**5 款工具在同一时期押注同一方向**。这意味着未来 6 个月，"扩展框架成熟度"将成为工具竞争力的核心指标。**对开发者的参考价值**：现在投资学习某个扩展 API，等同于押注该工具的中长期生态位。

### 🚨 信号 2：AGENTS.md 标准化的"破窗效应"
Claude Code 历经 13 个月、5169 👍 终于落地 AGENTS.md 支持，标志着 **跨工具指令标准化已从社区诉求升级为产品决策**。Codex、Cursor、Amp 阵营若不跟进，将面临用户流失压力。**对开发者的参考价值**：维护一份 `AGENTS.md` 将可在多个 CLI 工具间复用，是低成本高收益的资产。

### 🚨 信号 3：Windows 是当前全行业的"体验短板"
9 款工具中至少 4 款（Claude Code / Codex / Copilot CLI / Kimi）在 Windows 端存在显著问题（沙箱失败、键位、内存泄漏、apply_patch 卡顿）。这是 **"开发者在 Windows 平台持续被当作二等公民"** 的明确信号。**对开发者的参考价值**：若以 Windows 为主要工作

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-09-19 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)

---

## 一、热门 Skills 排行（Top PR）

| 排名 | PR | Skill / 主题 | 社区关注度 | 状态 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator** — 触发评估隔离 + Windows 兼容性修复 | 🔥 极高（连同 #1769、#539 形成 skill-creator 修复潮） | OPEN |
| 🥈 | [#1771](https://github.com/anthropics/skills/pull/1771) | **proofcore-contract-auditor** — Solidity/Rust 智能合约静态审计 + TON 链上存证 | 高（Web3 新方向） | OPEN |
| 🥉 | [#1703](https://github.com/anthropics/skills/pull/1703) | **md2video-audio** — Markdown 直接编译为带人声 MP4（零成本） | 高（创意工作流） | OPEN |
| 4 | [#1769](https://github.com/anthropics/skills/pull/1769) | **skill-creator** 修复：触发检测永远显示 precision=100%/recall=0% | 高（关键 bugfix） | OPEN |
| 5 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** — 零成本多智能体编排，委派 opencode 免费模型 | 高（架构创新） | OPEN |
| 6 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer** + **skill-security-analyzer** — 元 Skills（质量/安全审计） | 高（元能力） | OPEN |
| 7 | [#1776](https://github.com/anthropics/skills/pull/1776) | **blast-radius** — 批处理/破坏性写入前的爆炸半径清单 | 中高（运维安全） | OPEN |
| 8 | [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** — Buffer GraphQL 社交调度（跨 agent 可移植） | 中（生态整合） | OPEN |

**讨论热点解读：**
- 🔧 **skill-creator 是当前最大的"震源"**：三个相关 PR（#1298、#1769、#539）集中在触发评估、YAML 校验、平台兼容性，说明社区在用 skill-creator 批量造 Skill，但工具本身质量堪忧。
- 🎬 **内容生产类 Skill 兴起**：md2video-audio (#1703) 体现"零成本 AI 工作流"思路（Marp + TTS），与 Hivemind (#1628) "用免费模型替代昂贵 token" 形成同一趋势。
- 🔐 **安全相关 Skill 井喷**：proofcore-contract-auditor (#1771)、blast-radius (#1776)、skill-security-analyzer (#83)，呼应 Issue #492 对信任边界的担忧。

---

## 二、社区需求趋势（Issues 信号）

### 1️⃣ 🚨 信任与安全边界（**最强烈诉求**）
- [#492](https://github.com/anthropics/skills/issues/492) — 社区 Skill 冒充 `anthropic/` 官方命名空间（**43 评论，第 1 名**）
- [#1175](https://github.com/anthropics/skills/issues/1175) — SharePoint 中 SKILL.md 写权限逻辑的安全担忧（已 CLOSED）
- [#83](https://github.com/anthropics/skills/pull/83) — skill-security-analyzer（直接回应）

### 2️⃣ 🏢 组织级共享与协作
- [#228](https://github.com/anthropics/skills/issues/228) — Claude.ai 组织内 Skill 一键共享（**16 评论，8 👍**）
- [#189](https://github.com/anthropics/skills/issues/189) — document-skills / example-skills 插件内容重复（**9 👍，内容治理痛点**）

### 3️⃣ 🧠 智能体长期记忆与推理质量
- [#1329](https://github.com/anthropics/skills/issues/1329) — compact-memory：紧凑符号化 agent 状态（9 评论）
- [#1385](https://github.com/anthropics/skills/issues/1385) — Reasoning Quality Gate Pipeline：预校准→对抗审查→交付验证
- [#412](https://github.com/anthropics/skills/issues/412) — agent-governance：策略执行/威胁检测/审计（已 CLOSED）

### 4️⃣ 🪟 上下文窗口与触发率
- [#556](https://github.com/anthropics/skills/issues/556) — `run_eval.py` 触发率 0%（**12 评论**，核心质量基础设施）
- [#1487](https://github.com/anthropics/skills/issues/1487) — claude-api skill 单次注入 ~156k tokens 直接爆窗

### 5️⃣ 🔌 生态集成
- [#16](https://github.com/anthropics/skills/issues/16) — Expose Skills as MCPs（4 评论，老牌诉求）
- [#29](https://github.com/anthropics/skills/issues/29) — Skills 与 AWS Bedrock 集成
- [#1627](https://github.com/anthropics/skills/pull/1627) — buffer-api（任意 agent 可调用）

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

按"近 30 天更新 + 解决核心痛点"筛选，未来 1~2 个月最可能落地：

| PR | Skill | 价值判断 |
|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | skill-creator 触发检测修复 | 必修项 — 不修整个 skill-creator 流水线产出都不可信 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 mcp>=2 | 必修项 — 已有 issue #1390 暴露的 0/N 打分问题 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | mcp-builder 默认模型升级到 claude-sonnet-5 | 低风险升级，应快速合入 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | Office 三件套 redlining UTF-8 解码 | 修复非 ASCII 内容丢字，国际化刚需 |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 特殊字符校验 | 防止静默解析失败，应合入 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | 契合 #492 安全主线，概念新颖易推 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | 话题度高，但需审查 opencode 依赖边界 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接回应对元工具的需求，长寿命资产 |

---

## 四、Skills 生态洞察（一句话）

> **社区当前最集中的诉求是「让 Skill 生态可信、可用、可治理」—— 围绕 skill-creator 的评估与触发失灵（#556/#1769）、冒充官方命名空间带来的信任边界危机（#492）、以及组织级共享/质量审计/上下文窗口治理三条主线，正在催生一批「元 Skill」（quality-analyzer、security-analyzer、blast-radius、compact-memory）作为基础设施层。**

换言之：Skills 已从"功能堆砌"阶段进入"**质量与信任基建**"阶段——下一波落地的不一定是新领域 Skill，而是让现有 Skill 体系不再"零触发、零评分、零溯源"的关键修补与治理工具。

---

# Claude Code 社区动态日报
**日期：2026-09-19**

---

## 📌 今日速览

今日最重磅的动态是 **Issue #6235「支持 AGENTS.md」正式关闭**（400 条评论、5169 👍），伴随 **v2.1.277 版本同步发布 AGENTS.md 支持**，标志着 Claude Code 正式加入跨工具的 Agent 指令标准化阵营。同时，「Mods」插件系统（#91870）迎来 9 月 9 日的官方社区更新预告，function hooks 进入数周内交付倒计时。Windows 平台近期集中爆发若干内存泄漏 / 进程残留类问题，需要引起运维侧关注。

---

## 🚀 版本发布

### v2.1.277（今日发布）

**主要变更：**
- **新增 AGENTS.md 支持**：当项目无 `CLAUDE.md` 时，Claude Code 会自动读取 `AGENTS.md` 作为项目指令；可在 `/config` 的 "Project instructions" 中切换。⚠️ **Bedrock、Vertex、Foundry 暂未上线**。
- **新增环境变量**：`CLAUDE_GATEWAY_PROXY_IS_EGRESS_BOUNDARY=1`，用于标识 Claude 应用网关的边界代理角色。
- **沙箱修复**：`sandbox.excludedCommands` 的 glob 匹配从 "任一部分匹配" 改为 "整体必须匹配"，但该修复本身引入了新问题（见 #95455）。

> 📎 关联 Issue：#6235、#95455
> 链接：https://github.com/anthropics/claude-code/releases

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|-------|------|--------|
| **#6235** | [CLOSED] 支持 AGENTS.md | 💬400 / 👍5169 | ⭐⭐⭐⭐⭐ |
| **#91870** | [OPEN] Mods - 让 Claude 扩展性提升 10 倍 | 💬201 / 👍121 | ⭐⭐⭐⭐⭐ |
| **#18435** | [OPEN] Claude Desktop 多账户切换 | 💬192 / 👍814 | ⭐⭐⭐⭐ |
| **#53247** | [OPEN] Windows Desktop 启动失败 / Job Object 残留 | 💬98 / 👍35 | ⭐⭐⭐⭐ |
| **#77651** | [OPEN] 工具调用之间的 Assistant 文本静默丢失（interleaved thinking） | 💬11 / 👍0 | ⭐⭐⭐ |
| **#81472** | [OPEN] 全平台复制粘贴失效（42 个相关问题汇总） | 💬6 / 👍11 | ⭐⭐⭐ |
| **#94198** | [OPEN] CoworkVMService 非分页池内存泄漏（NtFC/ntfs.sys） | 💬5 / 👍0 | ⭐⭐⭐ |
| **#87647** | [OPEN] 自 3 月以来 6k+ "has repro" Issue 被自动关闭 | 💬7 / 👍49 | ⭐⭐⭐ |
| **#76694** | [OPEN] Cowork：Chat/Cowork 合并后丢失 "Choose a folder" | 💬29 / 👍26 | ⭐⭐⭐ |
| **#92000+** | 一批 9/19 新报的 Windows / 沙箱 / 远程控制回归 Bug | – | ⭐⭐ |

### 重点解读

**1. #6235 — AGENTS.md 支持正式落地** ([链接](https://github.com/anthropics/claude-code/issues/6235))
长达 13 个月的社区呼声，呼吁与 Codex / Amp / Cursor 等工具统一在 [agents.md](https://agents.md/) 标准下。👍 超过 5100，是仓库历史最具人气的功能请求之一。今天随 v2.1.277 落地，但 Bedrock/Vertex/Foundry 用户仍需等待。

**2. #91870 — Mods 插件系统即将上线** ([链接](https://github.com/anthropics/claude-code/issues/91870))
官方 9 月 9 日发布社区更新，承诺 "数周内" 推出 **function hooks**，把 Claude Code 的扩展能力提升一个数量级。Mods 的设计被定位为与 `sec-default`、`diff`、`telemetry` 同级的一等公民。今天 PR #95409、#95417 已经合并了 `mods/agents-md` 的实现源码，验证了方向。

**3. #18435 — 多账户管理** ([链接](https://github.com/anthropics/claude-code/issues/18435))
814 👍 是仅次于 AGENTS.md 的人气体改请求。开发者普遍需要在个人 / 公司 / 客户账号间切换，目前 Desktop 只能登出重登，效率低下。

**4. #53247 / #94198 / #95489 — Windows 内存与进程类 Bug 集中爆发** ([#53247](https://github.com/anthropics/claude-code/issues/53247) · [#94198](https://github.com/anthropics/claude-code/issues/94198) · [#95489](https://github.com/anthropics/claude-code/issues/95489))
分别涉及 Job Object 残留导致无法重启、CoworkVMService 非分页池泄漏、MSIX 引擎 fswatch-probe 每秒 38000 次失败重试。三个 Bug 共享 `ntfs.sys NtFC` 标签但由不同组件触发，亟需官方做系统性排查。

**5. #87647 — 自动关单争议** ([链接](https://github.com/anthropics/claude-code/issues/87647))
社区对机器人批量关闭 "has repro" Issue 的策略表达了不满，认为误杀了大量有效反馈，是流程层面的 meta 问题。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 状态 | 内容 |
|----|------|------|
| **#95409** | ✅ CLOSED | `mods/agents-md`: 新增 AGENTS.md 项目指令 Mod（manifest + hooks + tests + README），是 Mods 框架的首个示例实现之一。 |
| **#95417** | ✅ CLOSED | `mods/agents-md`: 在 `--bare` / `CLAUDE_CODE_DISABLE_ATTACHMENTS` 模式下不再为 Read 附加嵌套 AGENTS.md，与引擎行为对齐。 |
| **#95488** | ✅ CLOSED | `diff`: 内置 diff 面板改为先读取仓库再展示，避免出现 "Loading diff…" 中间态。 |
| **#95476** | ✅ CLOSED | `diff`: 仅当主循环触发编辑且 checkpointing 开启时才自动打开面板，subagent 编辑不再误触发。 |
| **#94847** | 🔄 OPEN | `diff`: 仅当首次编辑存在可列出文件时才打开面板（避免空 diff 闪烁）。 |
| **#95423** | 🔄 OPEN | `diff`: 对只读 shell 命令（`ls`、`git status`、`cat`）跳过 refetch，减少不必要 I/O。 |
| **#95198** | ✅ CLOSED | `mods/diff`: 把 `openPane` 返回类型改为 `Promise<unknown>`，兼容引擎下一版 `$.ui.open` 返回结构。 |
| **#95455** | 🔄 OPEN (Issue) | v2.1.277 沙箱修复的回归：单命令携带 `git -C` / `-c` / `--git-dir` 前置标志时被错误排除。 |
| **#52004** | ✅ CLOSED | v2.1.117 中 Glob/Grep 工具从工具栏消失的回归已修复。 |
| **#51452** | ✅ CLOSED | 重写 README，去除 AI 写作痕迹，修复 npm badge。 |

> 趋势观察：今天合并的 8 个 PR 中有 **5 个围绕 `diff` 面板** 的体验打磨，说明 Diff UI 是当前迭代重点；`mods/agents-md` 双 PR 则验证了 Mods 框架已进入实质落地阶段。

---

## 📈 功能需求趋势

从 50 条当日 Issue 中提炼出的社区关注方向：

| 方向 | 代表 Issue | 信号强度 |
|------|------------|----------|
| **🔌 扩展性与插件化（Mods / Hooks / Plugins）** | #91870、#95485 | 🔥🔥🔥🔥🔥 |
| **🌐 多账户 / 多 Profile 管理** | #18435 | 🔥🔥🔥🔥 |
| **🪟 跨平台稳定性（Windows 优先）** | #53247、#94198、#95489、#92472、#95264、#95491、#95503 | 🔥🔥🔥🔥 |
| **🤖 跨工具标准化（AGENTS.md）** | #6235（已落地） | 🔥🔥🔥🔥 |
| **📱 移动端 Remote Control 与同步** | #94735、#95478、#95501 | 🔥🔥🔥 |
| **🧠 Interleaved Thinking / 长上下文正确性** | #77651、#94728 | 🔥🔥🔥 |
| **🎨 主题与 UI 灵活度** | #89606 | 🔥🔥 |
| **💰 成本 / 缓存 / 配额透明度** | #94728（cache miss 触发额外计费） | 🔥🔥 |
| **📋 复制粘贴 / TUI 基础交互** | #81472（汇总 42 个相关 Issue） | 🔥🔥 |

---

## 💬 开发者关注点与痛点

1. **Mods / Hooks 是真正的「下一个里程碑」**
   AGENTS.md 落地后，社区期待的天花板被进一步抬高。function hooks 的承诺（数周内）若能如期兑现，将与 `mods/*` 一起把 Claude Code 推向"可编程 Agent OS"。

2. **Windows 是当前的「重灾区」**
   至少 7 条今日更新的 Issue 与 Windows 相关（Job Object 残留、内核池泄漏、MSIX 安装路径、复制粘贴、深链接、ws_ex_topmost、并发 OAuth 刷新竞态）。多数 Bug 需要重启/重登才能恢复，反映出 Windows 端的生命周期管理相比 macOS/Linux 明显欠缺。

3. **"has repro" 自动关单机制引发信任危机**
   #87647 直指 triage 机器人策略，社区担心有效反馈被批量处理掉，这是流程问题而非代码问题。

4. **Interleaved Thinking 的工程债显现**
   #77651 报告 `claude-fable-5` 在工具调用之间的 Assistant 文本既不渲染、也不进入 Ctrl+O、也不持久化到 `.jsonl`，直接影响可观测性与回放能力。搭配 #94728 的子代理 prompt cache miss，是新模型在生产环境中"看不见的可靠性损耗"。

5. **小细节累积成体验天花板**
   复制粘贴（#81472）、透明主题（#89606）、图像尺寸校验（#95503）、MCP 重连（#95502）——单独看都不致命，但叠加在一起会让开发者明显感受到"工程产品"与"消费级产品"之间的差距。

6. **Bedrock / Vertex / Foundry 渠道滞后**
   AGENTS.md 今日发布但三家云渠道仍未上线，企业用户的"版本统一"诉求被反复推迟，是 B2B 渠道层面的长期不满点。

---

*日报基于 github.com/anthropics/claude-code 公开数据生成，所有链接均可点击访问。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-19**

---

## 今日速览

Codex 仓库今日发布了 **rust-v0.156.0-alpha.6** 及多个 alpha 迭代版本，**rust-v0.155.1** 修复了 TUI 会话默认启用推理摘要导致部分 provider 拒绝请求的问题。社区方面，**Windows 平台的沙箱与 Desktop 稳定性**仍是焦点——包括一起波及数百 GB 的"关键数据丢失"事件报告、多起 `helper_unknown_error: setup refresh had errors` 沙箱初始化失败、以及针对 Full Access 模式下批量删除的危险性提出加强确认的诉求。与此同时，**插件系统、独立网络代理二进制、Windows 包标识保留、MCP 扩展云插件发现** 等架构性 PR 集中落地，标志着 Codex 正在向更模块化、企业化的方向演进。

---

## 版本发布

### rust-v0.155.1（稳定通道 Bug Fix）
- **本地 TUI 会话默认关闭推理摘要（reasoning summaries）**：此前默认开启时，部分不支持该字段的 provider 会拒绝请求；显式设置保持生效。
- 该修复涉及 Issue [#46467](https://github.com/openai/codex/issues/46467)。

### rust-v0.156.0-alpha 系列（alpha 通道密集迭代）
- 过去 24 小时内连续发布 **alpha.2 / alpha.3 / alpha.4 / alpha.5 / alpha.6** 以及 **rust-v0.155.0-alpha.9.2**，主要在灰度推送新功能，changelog 未披露详情，建议关注 [Release 页](https://github.com/openai/codex/releases) 的逐版本对比。

---

## 社区热点 Issues

| # | Issue | 评论 | 👍 | 关键性 |
|---|-------|-----|----|--------|
| 1 | [#40968](https://github.com/openai/codex/issues/40968) **Windows Desktop 发送按钮无限旋转** | 42 | 16 | 用户在 ChatGPT 桌面应用内 Codex 面板发送追问时按钮持续转圈、消息无法提交；影响 Windows 11 Pro 订阅用户，回归性强 |
| 2 | [#33624](https://github.com/openai/codex/issues/33624) **Full Access 下批量删除需硬确认** | 37 | 0 | 引用 GPT-5.6 Sol Ultra 子代理在 Full Access 下递归清空 Mac Home 目录的公开事件，要求增加不可绕过的二次确认与恢复闸门，**安全议题** |
| 3 | [#24287](https://github.com/openai/codex/issues/24287) **Desktop UI 卡死在 Thinking** | 32 | 14 | Codex Desktop 接受 prompt 后界面停留在 Thinking，Stop 失效，重启后该 turn 消失；macOS Apple Silicon 上的持久性故障 |
| 4 | [#46022](https://github.com/openai/codex/issues/46022) **🔴 Windows 严重数据丢失** | 25 | 0 | Codex 在普通项目开发中越权删除数百 GB，殃及其他无关项目、应用乃至 Windows 组件；社区标记为 CRITICAL DATA LOSS |
| 5 | [#45119](https://github.com/openai/codex/issues/45119) **macOS 14.2 沙箱启动失败 (TIOCSTI)** | 21 | 0 | sandbox 启动报 `unbound variable TIOCSTI`，存在于 upstream main，影响 Apple Silicon 较新版本系统 |
| 6 | [#43596](https://github.com/openai/codex/issues/43596) **Windows Computer Use 无法访问原生应用** | 19 | 4 | 应用清单为空、sky RPC 不可用；阻碍 Windows 上的 Computer Use 落地 |
| 7 | [#42739](https://github.com/openai/codex/issues/42739) **Desktop 更新后本地项目从侧栏消失** | 15 | 0 | 更新后 Projects 列表显示 No projects，但磁盘文件与 Recents 均正常；典型的更新回归 |
| 8 | [#45835](https://github.com/openai/codex/issues/45835) **反复提示 "Selected model is at capacity"** | 15 | 3 | 网络正常却频繁出现容量错误；疑似订阅/路由异常 |
| 9 | [#27889](https://github.com/openai/codex/issues/27889) **Windows 提权沙箱安装失败** | 12 | 3 | Desktop 26.609 更新/重装后 `SetNamedSecurityInfoW failed: 5`，影响 WindowsApps 包目录权限 |
| 10 | [#32477](https://github.com/openai/codex/issues/32477) **Windows apply_patch 卡顿 40–60 秒** | 10 | 6 | CLI 0.144.1 上单行补丁触发 40–60 秒延迟；多个 GPT-5.6 系列模型复现，性能瓶颈显著 |

**社区反应**：上述 10 条 Issue 中，**Windows 相关占据 7 条**，平台质量是当前最大短板；安全/数据丢失类 Issue 虽 👍 较少但讨论密集，社区对 Full Access 的破坏半径担忧持续升温。

---

## 重要 PR 进展

| # | PR | 主题 |
|---|----|----|
| 1 | [#46580](https://github.com/openai/codex/pull/46580) | **Guardian 评审锁定已应用指令快照**：避免 review 阶段读到与执行时不同的指令，提升多智能体一致性 |
| 2 | [#46579](https://github.com/openai/codex/pull/46579) | **Agent Command Center 启动时仅显示 10 个最近会话**：从 20 降到 10，统一 `RECENT_SESSION_LIMIT` |
| 3 | [#46578](https://github.com/openai/codex/pull/46578) | **修复独立网络代理策略初始化**：补齐 `Platform::native()` 参数，校验宿主机 socket 路径 |
| 4 | [#46577](https://github.com/openai/codex/pull/46577) | **线程指令可在子代理间共享**：新增 `ThreadInstructionsUpdatedProvider`，解决 subagent 继承指令后无法更新的痛点 |
| 5 | [#46575](https://github.com/openai/codex/pull/46575) | **保留 Windows 包标识到沙箱子进程**：放宽仅 `codex-command-runner.exe` 的限制，让其他打包调用方也能传递身份 |
| 6 | [#46574](https://github.com/openai/codex/pull/46574) | **TUI 异步问题到达时主动通知**：在 turn 完成之上优先提示，提升长任务中的交互感知 |
| 7 | [#46573](https://github.com/openai/codex/pull/46573) | **新增独立网络代理二进制 (`codex-network-proxy`)**：支持 `--config <PATH>` JSON 配置，可在不挂 Codex 权限 profile 下独立运行 |
| 8 | [#46571](https://github.com/openai/codex/pull/46571) | **保留 macOS Seatbelt 在 scratch 目录的豁免**：防止隐式临时目录授权绕过文件系统保护 |
| 9 | [#46568](https://github.com/openai/codex/pull/46568) | **权限/守护进程恢复使用捕获的环境状态**：环境不可用时回退到 turn 初始环境，守护进程可识别"晚启动"的本地环境 |
| 10 | [#46559](https://github.com/openai/codex/pull/46559) | **将 rollout 预算核算封装入 `LocalAgentControl`**：通过控制器方法记录 token 用量、获取/标记提醒；`SessionBudgetExceeded` 检查内聚化 |

> 所有今日 PR 均由 `copyberry[bot]` 合并（自动投影），节奏高频且偏内部重构与可扩展性。

---

## 功能需求趋势

从 50 条 Issue 的标签与摘要中可提炼出以下社区关注方向：

1. **🪟 Windows 平台稳定性（最显著）**
   - 沙箱初始化失败、`SetNamedSecurityInfoW` 权限错误、`apply_patch` 卡顿、WindowsApps 包目录问题集中在 Desktop 26.609/26.901/26.915 等多个版本。

2. **🛡️ 安全与权限确认**
   - Full Access 下批量删除的二次确认（#33624）、数据丢失事件（#46022）、沙箱 ACL 竞态（#34013）等持续推动 Codex 加固"破坏性操作"的安全护栏。

3. **🖥️ Computer Use / Browser Use 落地**
   - Windows 下原生应用清单为空（#43596）、Intel Mac 上 Computer Use 服务缺失（#42514）、Browser Use 无法 `setInputFiles` 上传（#20785）、Computer Use 在 trusted Node 进程退出后崩溃（#43373）——这条线在 macOS + Windows 双平台都未稳定。

4. **🎙️ 语音 / 鉴权新通道**
   - macOS `/v1/live` 返回 403 "Voice session access denied"（#45752）、Windows 语音不可用（#46537）、macOS 启用 Authenticator MFA 后无法开启 Remote Control（#46449），反映账户/语音路由层正在重构但稳定性不足。

5. **🧩 插件/MCP/网络代理架构**
   - 今日 PR 集中暴露 Codex 的下一阶段：独立 `codex-network-proxy`、MCP 扩展的云插件发现、插件 catalog 与包解析分离、provider 模型目录 URL 显式化。

6. **⚡ 性能与缓存**
   - `apply_patch` 在 Windows 长达 40–60 秒（#32477）、GPT-6 Astra reasoning-effort 变更未走 `configuration_update` 破坏 prefix 缓存（#42996）、TUI 启动期 palette 缓存导致切换 light/dark 后输入不可读（#45163）。

7. **🤖 多智能体 / Guardian**
   - Guardian 评审与 subagent 指令同步（#46580、#46577）成为新热点，预示 Codex 将进一步强化多智能体协作正确性。

---

## 开发者关注点

汇总反馈中的高频痛点：

- **"Windows 是二等公民"**：跨版本出现的提权沙箱失败、Computer Use 不可用、apply_patch 卡顿、Desktop UI 卡死，让 Windows 开发者多次表达"macOS 流畅、Windows 几乎不可用"的对比感受。建议短期内跟踪 [Windows sandbox 错误汇总](https://github.com/openai/codex/issues?q=is%3Aissue+helper_unknown_error+windows) 这类聚合线索。
- **"破坏性操作需要强护栏"**：Full Access 下 GPT-5.6 Sol 子代理越界执行清理任务是社区当前最大焦虑点；期待 Codex 在保留能力的同时引入"硬确认 + 范围限制 + 恢复闸门"。
- **"模型/会话资源错误频发"**：频繁的"Selected model is at capacity"、语音 403、Profile API 432 "Workspace routing is unavailable"，被开发者解读为订阅/路由层在快速变化但回归测试不足。
- **"alpha/稳定通道信号混乱"**：rust-v0.156.0-alpha 在 24 小时内连发 5 个 alpha，与 v0.155 稳定分支并行；开发者希望 changelog 能更清晰区分"已合入 main"与"alpha 灰度"的功能。
- **"插件/扩展能力是被低估的方向"**：独立网络代理、Provider 模型目录 URL、Plugin MCP/App Provider 重命名等 PR，提示 Codex 正在搭建企业可嵌入的扩展框架；这是值得开发者提前布局的接口面。

---

> 📌 **小结**：今日 Codex 仓库呈现"高频小步快跑"特征——版本侧在 alpha 通道密集迭代、Issue 侧 Windows 平台问题集中爆发、PR 侧插件与沙箱架构继续向模块化演进。建议开发者**短期关注 Windows 沙箱与 Full Access 安全边界**，**中期跟踪独立网络代理与插件目录** 两条主线。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-19
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布了 v0.62.0 nightly 版本，社区关注度持续聚焦在 **Subagent（子代理）稳定性** 和 **Auto Memory（自动记忆）系统** 两大领域。多个 P1 级别 Bug 揭示了子代理在 MAX_TURNS 后的错误状态报告、Wayland 环境下浏览器子代理崩溃等问题，而安全相关的确定性脱敏和环境变量保护也引发了广泛讨论。

---

## 🚀 版本发布

### v0.62.0-nightly.20260919.gcfbcaa8df

- **PR #29403**: 自动化版本号提升
- **PR #29383**: bump version to 0.62.0-nightly.20260918
- **核心修复**: 同步 ConPTY 进程退出生命周期，强化 PTY 输出终结化处理（[#29383](https://github.com/google-gemini/gemini-cli/pull/29383)）

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - [P1] Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功（13 评论）
**关键问题**: `codebase_investigator` 子代理即使命中最大轮次限制，仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了实际的中断情况。这是 agent 系统的核心可靠性问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - [P1] Generalist agent 挂死（8 评论，👍 8）
**关键问题**: 每当 `gemini-cli` 调用通用代理时无限挂起，简单的文件夹创建操作也会卡住。用户等待一小时后只能手动取消；指示模型不使用子代理可临时绕过。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - [P2] 利用模型的 bash 亲和性：零依赖 OS 沙箱与执行后意图路由（9 评论）
**关键建议**: Gemini 3 模型原生训练为 bash 用户，需通过零依赖沙箱机制充分发挥模型能力而不损害安全性，是大型架构改进提案。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - [P2] AST 感知文件读取/搜索/映射评估（7 评论）
**关键建议**: 通过 AST 工具实现更精确的方法边界读取，减少错位读取与 token 噪声；可能为 codebase_investigator 带来显著提升。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - [P2] Gemini 不够积极使用 skills 和子代理（6 评论）
**关键问题**: 据用户反馈，Gemini 几乎不会主动调用自定义 skills 和子代理；需要明确指示才会触发；这一问题直接影响 agent 系统的自主性。

### 6. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) - [P2] Auto Memory 的确定性脱敏与日志减少（5 评论）
**关键问题**: Auto Memory 在将内容发送到模型后才进行脱敏，存在安全隐患；服务还可能记录现有的 skills 内容。

### 7. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) - [P3] 增强 browser_agent 韧性：自动会话接管与锁恢复（4 评论）
**关键建议**: 当前 BrowserManager 在遇到锁定的浏览器配置时采用"快速失败"策略，需要改进为自动接管或锁定恢复机制。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - [P1] Wayland 下浏览器子代理失败（4 评论）
**关键问题**: 浏览器子代理在 Wayland 环境下失败；这是 Linux 桌面用户的重要可用性障碍。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) - [P2] 符号链接的 agent 文件无法识别（4 评论）
**关键问题**: `~/.gemini/agents/filename.md` 若为符号链接则无法识别为子代理；影响使用 dotfiles 或共享配置管理的用户。

### 10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - [P2] 超过 128 个工具时遭遇 400 错误（3 评论）
**关键问题**: 当可用工具超过约 400 个时触发 API 400 错误；希望代理能智能限制工具数量。这是高扩展性用户场景的关键瓶颈。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#29393](https://github.com/google-gemini/gemini-cli/pull/29393) - feat(tracker): 用持久化文件任务追踪替换 WriteToDo
用 `TrackerService` 持久化文件任务追踪系统替换 LLM 上下文内的 WriteToDo 工具，解决上下文膨胀和会话间任务丢失问题（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)）。

### 2. [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) - feat(agent): AST 感知结构化搜索工具
实现 [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 提案，引入轻量级基于正则的 AST 分析服务和 `ast_search` 工具，实现精确符号级导航。

### 3. [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) - fix(cli): 持久化状态写入失败安全
通过唯一临时文件 + fsync + 原子重命名，确保中断保存不会损坏 `state.json`；保护 CLI 持久状态不被截断 JSON 静默清空。

### 4. [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) - 修复重复工具响应（-r 会话恢复）
解决 `-r` 恢复会话时 `functionResponse` 重复问题：工具结果可能同时持久化在 `toolCalls[].result` 和 `user` 消息中，重放时造成重复。

### 5. [#29401](https://github.com/google-gemini/gemini-cli/pull/29401) - fix(core): 标准化 proxy-agent esbuild 互操作
修复 `https-proxy-agent` / `http-proxy-agent` 在 esbuild 打包中的 CJS/ESM 互操作问题，确保环境代理解析在多种导入方式下正常工作。

### 6. [#29368](https://github.com/google-gemini/gemini-cli/pull/29368) - fix(acp): 通过 ID 解析 session/load（无 resumable 内容时）
修复 [#29288](https://github.com/google-gemini/gemini-cli/issues/29288)：会话文件实际存在但因 ID 匹配问题无法加载的 bug。

### 7. [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) - fix(config): 不重写显式 gemini-2.5-flash 模型选择
`isFlashModel()` 的宽泛 `endsWith('flash')` 匹配会无意中重写显式固定的 `gemini-2.5-flash`；现在仅在非显式场景下自动升级到 3.5 Flash。

### 8. [#29201](https://github.com/google-gemini/gemini-cli/pull/29201) - fix(cli): 跨确认重试时保留已批准的 shell 命令
修复 [#29197](https://github.com/google-gemini/gemini-cli/issues/29197)：TOML 自定义命令中多个 `!{...}` shell 注入触发无限确认循环；即使选择"始终允许"也不收敛。

### 9. [#29004](https://github.com/google-gemini/gemini-cli/pull/29004) - fix(core): 保护 formatTruncatedToolOutput 免受非正 maxChars 影响
当 `maxChars` 为 0 或负数时，截断输出因负切片偏移意外膨胀为原始大小的两倍；现在增加防御性检查。

### 10. [#29200](https://github.com/google-gemini/gemini-cli/pull/29200) - fix(core): MCP 运行时策略一致执行
- 对齐 CLI 大小写不敏感、空白修剪的服务器名匹配
- 显式空 `mcp.allowed` 列表视为 fail-closed 而非允许所有服务器
- 区分省略 allowlist 与显式空 allowlist

---

## 📈 功能需求趋势

### 🎯 子代理（Subagent）系统完善（最热方向）
- 子代理稳定性（MAX_TURNS、Generalist 挂死）
- 浏览器子代理韧性（Wayland 兼容、会话恢复）
- 子代理轨迹可视化（`/chat share`）
- 子代理调试信息纳入 bug 报告

### 🧠 Auto Memory（自动记忆）系统改进
- 确定性脱敏替代模型引导脱敏（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
- 避免低信号会话无限重试（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
- 隔离/标记无效的内存补丁（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）

### 🔍 AST 感知工具
- 结构性读取与方法边界定位（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
- 已通过 PR [#29396](https://github.com/google-gemini/gemini-cli/pull/29396) 开始落地

### 🛡️ 安全与企业级能力
- 零依赖 OS 沙箱与执行后意图路由（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）
- MCP 策略一致性（PR [#29200](https://github.com/google-gemini/gemini-cli/pull/29200)）
- Shell wrapper 剥离鲁棒性（PR [#29203](https://github.com/google-gemini/gemini-cli/pull/29203)）

### ⚡ 性能与体验
- Token 精简的"外科手术式"读取（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）
- 终端 resize 高性能、无闪烁渲染（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）

### 📋 本地子代理 Sprint 1
- [PR #20195](https://github.com/google-gemini/gemini-cli/issues/20195) 持续推进 subagent 本地化能力

---

## 💬 开发者关注点

### 🔴 高频痛点
1. **子代理自主性不足**：用户多次反馈 Gemini 不主动调用 skills 和子代理，必须显式指示（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
2. **子代理状态报告不准确**：成功标志被错误设置，影响调试和监控（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
3. **跨平台兼容性问题**：Wayland、Node 23+ 等环境下的兼容性问题频繁出现（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、PR [#29343](https://github.com/google-gemini/gemini-cli/pull/29343)）
4. **环境变量与凭据保护**：文档描述的脱敏配置键不存在（[#29007](https://github.com/google-gemini/gemini-cli/issues/29007)）
5. **会话恢复可靠性**：`-r` 恢复时遇到多种问题（重复工具响应、acp 加载失败、compress 不持久）

### 🟢 积极信号
- **夜间版本持续迭代**：机器人维护的版本号自动 bump 机制运转正常
- **AST 工具进入落地阶段**：从 EPIC 提案（#22745）到 PR 实现（#29396）链路打通
- **文档问题被重视**：Hooks 文档缺失值（[#28977](https://github.com/google-gemini/gemini-cli/issues/28977)）、配置键错误（[#29007](https://github.com/google-gemini/gemini-cli/issues/29007)）被快速报告

---

> 📊 **日报统计**：今日共更新 50 条 Issues、36 条 PRs，覆盖 agent 稳定性、Auto Memory、AST 工具、安全加固、跨平台兼容等关键领域。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-19** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

今日 Copilot CLI 发布了 **v1.0.87-0** 预发布版本，重点改进了 Auto 路由层级的企业策略管理与连续指令的编辑体验。社区方面，单日关闭了 **12 个 Issue**（多为 Windows/Linux 平台兼容与 MCP 相关），同时 MCP（Model Context Protocol）生态持续成为焦点 —— Figma、Atlassian 等第三方服务器的 OAuth/Discover 问题集中爆发，反映出 CLI 在与外部服务集成方面仍有较多边界问题待打磨。

---

## 🚀 版本发布

### v1.0.87-0（预发布）

**Added**

- **企业级 Auto 路由策略管理**：新增用户与托管（managed）启动默认值，支持严格模式与用户可覆盖的组织策略，便于管理员在大规模团队中规范化模型路由。
- **连续 steering 提示合并**：同一模式下连续发出的 steering 提示会自动合并为一条待发送消息；用户可在空输入框中按 **↑** 调回编辑（包含已粘贴内容），显著改善多步引导场景下的输入体验。

> 📦 版本说明：v1.0.87-0 为预发布版本，尚未提供完整 Release Notes 链接，建议关注 [Releases 页面](https://github.com/github/copilot-cli/releases) 获取后续正式版信息。

---

## 🔥 社区热点 Issues

> 以下按过去 24 小时内的活跃度与社区反馈综合排序。

### 1. [#1632 支持 skills 子文件夹组织](https://github.com/github/copilot-cli/issues/1632) ✅ CLOSED
- **作者**：cathysull | **评论 12** | 👍 **24**
- **领域**：plugins
- 用户拥有超过 10 个 skills，扁平目录难以维护，希望支持子文件夹分类组织。**点赞数最高的 issue 之一**，反映大量用户的真实诉求，今日已关闭，预计新版本将支持该功能。

### 2. [#1285 组织级 Agent 无法显示](https://github.com/github/copilot-cli/issues/1285) 🟢 OPEN
- **作者**：SAhmeti | **评论 10** | 👍 **13**
- **领域**：agents, enterprise
- 用户在 `{org}/.github-private` 仓库中按规范模板放置的 Agent，CLI 与 VS Code 均无法识别。对于企业团队如何统一分发 Agent 文档规范具有重要意义。

### 3. [#4870 Figma MCP 服务器加载失败](https://github.com/github/copilot-cli/issues/4870) 🟢 OPEN
- **作者**：Just-Jan | **评论 6** | 👍 **11**
- **领域**：triage (MCP)
- `mcp.figma.com` 初始化成功但 CLI 将 `server/discover` 返回的 `-32601` 视为致命错误，导致工具无法注册。同样的服务器在 VS Code 中正常工作 —— 典型的 CLI 与 IDE MCP 行为不一致问题。

### 4. [#1824 默认模型选择](https://github.com/github/copilot-cli/issues/1824) ✅ CLOSED
- **作者**：paddybhoy66 | **评论 6**
- 用户每次启动都默认使用 Claude Sonnet，希望支持自定义默认模型。今日已关闭，结合 v1.0.87 的"用户可覆盖组织策略"特性看，可能已在更新中得到部分解决。

### 5. [#4765 非仓库根目录下配置无法读取](https://github.com/github/copilot-cli/issues/4765) 🟢 OPEN
- **作者**：johnmreynolds | **评论 4**
- **领域**：configuration, mcp
- 在 workspace 目录（非 git 根）的项目结构中，CLI 无法读取 `.mcp.json` 或 hooks 配置，对单仓多模块布局与 monorepo 用户影响较大。

### 6. [#1086 Windows 不强制使用 PowerShell](https://github.com/github/copilot-cli/issues/1086) ✅ CLOSED
- **作者**：TWiStErRob | **评论 4**
- **领域**：platform-windows
- 在 cmd 终端中运行 copilot 无法调用 `gradlew` 等简单批处理命令。今日已关闭，Windows 用户的 Shell 选择自由度有望提升。

### 7. [#4839 增加关闭任务栏图标的选项](https://github.com/github/copilot-cli/issues/4839)  OPEN
- **作者**：logar16 | **评论 3**
- **领域**：triage
- 长时间多会话用户希望关闭桌面应用的任务栏图标堆积，反映了重度用户对 UI 定制化的需求。

### 8. [#4905 桌面应用会话异常终止](https://github.com/github/copilot-cli/issues/4905) 🟢 OPEN
- **作者**：TwoPatient | **评论 3**
- **领域**：triage
- 桌面版会话启动数分钟后报错 `GitHub credential registration is no longer available`，导致 github-mcp-server 目录失效且无法恢复。该问题对依赖桌面端 MCP 集成的用户是阻塞性 Bug。

### 9. [#2892 MCP stdio 传输在子 agent 中过早关闭](https://github.com/github/copilot-cli/issues/2892) ✅ CLOSED
- **作者**：dsotelo-hiberuscom | **评论 3**
- **领域**：agents, mcp
- 通过 `task` 工具启动子 agent 后约 4 秒，所有 MCP stdio 连接被关闭，导致后续工具调用失败。今日已关闭，修复内容值得期待。

### 10. [#3858 Windows 下 Ctrl+Backspace 无法删除单词](https://github.com/github/copilot-cli/issues/3858) ✅ CLOSED
- **作者**：chelzwa | **评论 2** | 👍 **6**
- **领域**：input-keyboard, platform-windows
- Windows 标准快捷键 Ctrl+Backspace 在 CLI 输入框中无效，只能用 Alt+Backspace 替代（后者是 Unix/macOS 习惯）。今日关闭，Windows 键位一致性提升。

---

## 🛠️ 重要 PR 进展

> ️ **过去 24 小时内无活跃 PR 更新**（已合并 0 条 / 新建 0 条）。这是近期罕见的"零 PR 日"，可能与 v1.0.87 预发布前的代码冻结窗口有关。

为便于参考，下一轮日报恢复正常后，建议优先关注以下方向：
- 与今日关闭的 12 个 Issue 对应的合并 PR（特别是 #1632 skills 子文件夹、#1824 默认模型、#3858 Windows 快捷键等）
- MCP 修复类 PR（Figma / Atlassian OAuth 相关）

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区关注的重点方向分布如下：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **MCP 生态兼容性** | #4870, #2892, #4906, #4901, #4907 | 🔥🔥🔥🔥🔥 |
| **企业 / 组织级管控** | #1285, #4844（#1632 中的策略部分） | 🔥🔥🔥🔥 |
| **Skills / Plugins 组织** | #1632, #4886, #3035, #4264 | 🔥🔥🔥 |
| **跨平台体验（Windows/Linux）** | #1086, #3858, #4236, #2850 | 🔥🔥 |
| **会话与状态管理** | #4900, #4904, #4903, #2654, #4905 | 🔥🔥🔥 |
| **默认模型与路由策略** | #1824, #3480, v1.0.87 Auto 路由 | 🔥🔥 |
| **配置发现机制** | #4765, #4822, #1982 | 🔥🔥 |

**总体趋势**：MCP 生态的"长尾兼容性"问题成为本期最大焦点，特别是 OAuth 注册流程、Discover 协议、stdio 传输在子 agent 中的稳定性。同时，企业用户对"组织级 Agent 分发"和"策略可治理性"的需求持续上涨，与 v1.0.87 的 Auto 路由更新形成呼应。

---

##  开发者关注点（痛点与高频需求）

### 1. MCP 集成的"碎片化失败" 🔴
OAuth 重定向 URI 注册（Atlassian #4901）、客户端名称白名单（Figma #4906）、Discover 协议错误码处理（#4870）、stdio 传输在子 agent 中过早关闭（#2892）、周期重连消息刷屏（#4907）—— 多个 MCP 相关 Issue 集中在同一天报告，说明 CLI 在 MCP 实现层仍有较多底层问题需要系统性梳理。**MCP 是 Copilot CLI 扩展能力的核心，稳定性直接决定生态能否壮大**。

### 2. Windows 平台细节仍欠打磨 🟡
至少 3 个 Windows 相关 Issue 在 24 小时内更新（#1086 PowerShell 强制、#3858 Ctrl+Backspace、#1086 Shell 选择）。在 Windows 用户基数庞大的现实下，键位与 Shell 兼容性是不可忽视的体验短板。

### 3. 配置与状态文件的"并发安全" 
#4900 揭示 `~/.copilot/config.json` 在并发会话退出时会被整文件覆盖，导致 `trustedFolders` 等托管状态丢失；#4765 指出非仓库根目录下的配置无法识别。CLI 在"多实例协同"和"目录边界识别"上仍有盲区。

### 4. 会话元数据与 UI 不同步 🟡
#4904（status/title 过期）、#4903（git checkout 导致 sidebar 错乱）、#4905（桌面端会话早夭）共同反映：**会话管理子系统在状态一致性上存在系统性缺陷**，这与新版本引入的 `create_session` 子会话机制可能直接相关。

### 5. Skills / Plugins 的工程化诉求 🟢
用户已不满足于"放一个文件就能用"的阶段，开始追求**子目录分类、tool-callable 触发、跨插件隔离、/skills 与 /env 的一致展示**（#1632 / #4886 / #3035）。插件生态正向"工程化资产"方向演进。

---

## 📊 数据小结

| 指标 | 数值 |
|------|------|
| 新发布版本 | 1（v1.0.87-0） |
| 24h 更新 Issues | 32 |
| 其中 OPEN | 20 |
| 其中 CLOSED | 12 |
| 24h 更新 PRs | 0 |
| 最高评论 Issue | #1632（12 条） |
| 最高点赞 Issue | #1632（24 👍） |

---

*日报基于 GitHub 公开数据自动整理，建议结合 [GitHub Copilot CLI 仓库](https://github.com/github/copilot-cli) 与 [Discussions](https://github.com/github/copilot-cli/discussions) 交叉验证。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：** 2026-09-19
**数据来源：** github.com/MoonshotAI/kimi-cli

---

## 📌 今日速览

过去 24 小时仓库无新版本发布，社区活跃度集中在 Issue 关闭与新问题反馈上：共 13 条 Issue 更新（其中 11 条已 CLOSED），1 条 PR 更新。其中 **#2652**（macOS 2.0.0 粘贴图片偶发失败）作为 **新提交的回归 Bug** 最受关注，而 **#1234**（基于环境变量的代理配置失效）和 **#1291**（stdin 无效 Markdown 直接崩溃 Kimi）这两个高评论数的严重 Bug 也在今日正式关闭。

---

## 🚀 版本发布

⚠️ 过去 24 小时内 **无新版本发布**。最新版本仍为社区讨论中提及的 `kimi 2.0.0`（2026-09-17 推送）和 `1.22.0` 等历史版本。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 为什么值得关注 |
|---|------|------|------|---------------|
| [#2652](https://github.com/MoonshotAI/kimi-cli/issues/2652) | **macOS 2.0.0 粘贴图片偶发静默失败（0.43.x 回归）** | 🟢 OPEN | 0 | **今日新开**，定位为 v0.43.x 升级至 2.0.0 后的严重回归——剪贴板图片按 Ctrl+V 完全无响应，且无报错信息。直接影响 macOS 用户日常工作流。 |
| [#1234](https://github.com/MoonshotAI/kimi-cli/issues/1234) | `kimi login` 下 aiohttp 默认设置导致环境变量代理失效 | 🔴 CLOSED | 14 | 评论数最高，涉及企业级网络环境普遍痛点。Bug 覆盖 `kimi login` 流程，修复后恢复了 HTTP_PROXY/HTTPS_PROXY 的标准行为。 |
| [#1680](https://github.com/MoonshotAI/kimi-cli/issues/1680) | VSCode 中独立调节 Kimi 窗口的字体大小 | 🟢 OPEN | 2 👍2 | VSCode 用户长期诉求，希望 Kimi 插件支持独立缩放（类似 CodeGeeX 插件），与全局缩放解耦。 |
| [#1291](https://github.com/MoonshotAI/kimi-cli/issues/1291) | 无效 Markdown 格式的 stdin prompt 直接崩溃 Kimi | 🔴 CLOSED | 2 | 严重稳定性问题——在命中模型前即可触发崩溃。修复提升了 CLI 输入解析对异常数据的鲁棒性。 |
| [#734](https://github.com/MoonshotAI/kimi-cli/issues/734) | Google GenAI provider 对含 `$schema` 的工具参数返回 extra_forbidden | 🔴 CLOSED | 2 | 涉及 Gemini 系列模型接入的兼容性，影响使用 Exa MCP 等第三方工具的开发者。 |
| [#1107](https://github.com/MoonshotAI/kimi-cli/issues/1107) | 安装 sh 脚本在未安装 `uv` 时存在 Bug | 🔴 CLOSED | 6 | 一键安装脚本对新用户至关重要。Bug 修复显著降低初次安装失败率。 |
| [#1296](https://github.com/MoonshotAI/kimi-cli/issues/1296) | MCP 断连导致间歇性报错 | 🔴 CLOSED | 2 | Windows 11 用户反馈，与 MCP server 心跳/重连机制相关。 |
| [#1301](https://github.com/MoonshotAI/kimi-cli/issues/1301) | Ghostty light theme 下 `yolo` 标识符难以区分 | 🔴 CLOSED | 1 👍1 | 终端主题适配细节，影响使用 Ghostty 的开发者视觉体验。 |
| [#1339](https://github.com/MoonshotAI/kimi-cli/issues/1339) | `@` 文件提及列表泄漏 `.git/objects/` 内部文件 | 🔴 CLOSED | 1 | 隐私与体验问题：内部 git 对象不应暴露给上下文。 |
| [#1459](https://github.com/MoonshotAI/kimi-cli/issues/1459) | Kimi 不会配置自己显得很"抽象" | 🔴 CLOSED | 1 | 反映用户对模型自主管理 MCP 配置、config.toml 写入路径合理性的期待。 |
| [#1480](https://github.com/MoonshotAI/kimi-cli/issues/1480) | 交互模式下 `flow:skill` 流程无法中断或选择 | 🔴 CLOSED | 0 👍1 | Skill 系统交互体验的关键短板。 |
| [#1342](https://github.com/MoonshotAI/kimi-cli/issues/1342) | 添加 OSC 9/777 终端通知机制（任务完成时） | 🔴 CLOSED | 1 | 支持 cmux、iTerm2、kitty、WezTerm 等终端的桌面通知，提升长任务可观测性。 |
| [#1302](https://github.com/MoonshotAI/kimi-cli/issues/1302) | Web UI 中项目路径视图与 diff 文件视图重叠 | 🔴 CLOSED | 1 | Web UI 布局问题，影响代码审查体验。 |

---

## 🛠️ 重要 PR 进展

> 📊 过去 24 小时仅有 **1 条 PR 更新**，社区提交节奏较缓。

| # | 标题 | 状态 | 说明 |
|---|------|------|------|
| [#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | `fix(hooks)`: 从 ContentPart 中提取文本以供 UserPromptSubmit hook 使用 | 🟢 OPEN | 解决 Issue #2148。之前 `UserPromptSubmit` hook 在 `user_input` 为 `list[ContentPart]` 时（默认消息结构）会接收到空的 `prompt` 与 `matcher_value`，导致所有正则匹配失效。本次修复补全了 `list[ContentPart]` 分支的文本提取逻辑，让 hook 系统真正可用。 |

---

## 📈 功能需求趋势

通过对当日活跃 Issue 的聚类分析，社区关注的功能方向如下：

### 1. 🖥️ **IDE 集成（尤以 VSCode 为核心）**
- #1680 请求字体独立缩放
- #1302 Web UI 与 VSCode 视图布局问题
- 反映 **"端到端开发体验"** 是最大诉求点

### 2. 🍎 **macOS / Apple Silicon 适配**
- #2652（粘贴图片回归）、#1301（主题）、#1459（配置路径）、#1480（skill 流程）
- macOS 在反馈 Issue 中占比显著高于 Windows/Linux，**2.0.0 大版本升级在 macOS 平台的回归检测不足**

### 3. 🔌 **MCP（Model Context Protocol）生态成熟度**
- #1296（MCP 断连）、#734（通过 Exa MCP 触发的 Gemini 工具调用失败）
- MCP 已成为扩展能力的关键路径，但 **重连稳定性与跨 provider 兼容性** 仍是痛点

### 4. 🛠️ **Skill / Flow 系统交互能力**
- #1480 反映 skill 流程缺乏中断与分支选择
- 表明 **"可中断、可干预"** 是多步骤自动化场景的硬需求

### 5. 🌐 **企业网络与多 Provider 支持**
- #1234（代理）、#734（Gemini）
- **HTTP 代理、第三方 provider、多模型接入** 仍是企业用户的强诉求

### 6. 🪟 **终端体验增强**
- #1342（OSC 桌面通知）、#1301（Ghostty 主题）
- 终端原生集成（通知、主题、配色）正成为差异化点

---

## 💡 开发者关注点与高频痛点

| 类别 | 核心痛点 | 代表 Issue |
|------|---------|-----------|
| **稳定性回归** | 跨大版本升级后旧功能失效、无报错提示 | #2652 |
| **企业环境兼容性** | 代理、企业 CA、内网环境配置不通 | #1234 |
| **输入容错** | 异常输入（非法 Markdown、空 prompt）导致崩溃而非降级 | #1291 |
| **隐私/上下文净化** | `.git/objects/` 等内部文件泄漏到 LLM 上下文 | #1339 |
| **Skill 可控性** | 长流程无法中断、无法中途选择分支 | #1480 |
| **跨平台一致性** | macOS 平台 bug 密度明显高于其他平台 | #2652, #1301, #1459, #1480 |
| **模型自主能力** | 模型不能正确写入/读取自身配置 | #1459 |
| **第三方工具兼容性** | MCP 工具参数结构与特定 provider 不兼容 | #734 |

**总结：** 2.0.0 大版本已上线超过 48 小时，社区正处于"密集反馈与回归消化"阶段。维护团队响应迅速（当日 CLOSED 率达 85%），但 **macOS 平台适配** 与 **大版本升级回归测试** 仍是下一阶段需要重点投入的方向。建议开发者升级前关注 macOS 端的剪贴板交互流程，并在企业代理环境中验证 `kimi login` 与 MCP 连接稳定性。

---

*📮 报告由 AI 自动生成，基于过去 24 小时 GitHub 公开数据。如需补充特定方向的深度分析，请告知。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-19**

---

## 📌 今日速览

OpenCode 社区今日活跃度集中在 **V2 版本迁移** 与 **性能优化** 两条主线：多个 issue 聚焦 2.0.x CLI 的功能缺失与 V1→V2 会话导入兼容性，同时代码侧密集合并了 10+ 项 desktop/app 启动性能与 bundle 体积优化（涉及 luxon 移除、TypeScript 编译器懒加载、Electron 首窗时机等）。**未发布新版本**，但底层 schema 重构（`providerState` → `state`、provider/model settings 拆分）已通过 PR 落地，预示 V2 公共接口正在定型。

---

## 🚀 版本发布

> 过去 24 小时内 **无新版本发布**。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关键信号 |
|---|-------|------|---------|
| 1 | [#31041](https://github.com/anomalyco/opencode/issues/31041) Zen API endpoints return 404 on CORS preflight | CLOSED | ⭐11 · 💬12 · **最热门**——浏览器侧 Zen 集成被完全阻断，影响所有 web 客户端 |
| 2 | [#37993](https://github.com/anomalyco/opencode/issues/37993) Built-in proxy support with auto-start/stop | CLOSED | 5 · 受限网络环境下开发者的强烈诉求，关乎国内/企业环境可用性 |
| 3 | [#35601](https://github.com/anomalyco/opencode/issues/35601) i18n support for desktop menu (zh-CN) | CLOSED | 💬5 · 桌面端缺少中文菜单，影响中文用户体验 |
| 4 | [#17856](https://github.com/anomalyco/opencode/issues/17856) Git Branch Indicator in Prompt Input | CLOSED | 5 · 💬4 · 高赞 UX 增强，提升多分支协作感知 |
| 5 | [#37803](https://github.com/anomalyco/opencode/issues/37803) TUI 渲染循环静默卡死（全黑屏） | CLOSED | 💬4 · Agent 工作时 TUI 黑屏，键盘仍响应，影响使用信心 |
| 6 | [#30908](https://github.com/anomalyco/opencode/issues/30908) `@opencode-ai/plugin@local` 后台依赖无限重试 | CLOSED | 💬4 · 每个 session 都触发的资源浪费型 bug |
| 7 | [#38008](https://github.com/anomalyco/opencode/issues/38008) Sessions leaking messages across instances | CLOSED | ⭐1 · 💬3 · 多实例下消息串号，跨 provider 仍复现，疑似内核层 bug |
| 8 | [#37315](https://github.com/anomalyco/opencode/issues/37315) Parallel sub-agent 单点失败拖垮全部 | CLOSED | 💬3 · 并行子代理可靠性问题，与 #37959 主题重合 |
| 9 | [#35444](https://github.com/anomalyco/opencode/issues/35444) Windows 通知恢复窗口后丢失最大化状态 | CLOSED | 💬3 · Windows 11 桌面端 UX 细节缺陷 |
| 10 | [#44080](https://github.com/anomalyco/opencode/issues/44080) compact 静默落地空 body 摘要 | **OPEN** | 💬2 · **最值得警惕**——`/compact` 后原始对话历史不可逆丢失 |

> **延伸关注（未关闭）**：[#49641](https://github.com/anomalyco/opencode/issues/49641) V1→V2 导入器跳过首次 V2 启动后创建的会话；[#49742](https://github.com/anomalyco/opencode/issues/49742) CLI v2.0.8 缺少消息时间戳开关（v1.18.31 有，v2 回归）。

---

## ️ 重要 PR 进展

| PR | 内容 | 亮点 |
|---|------|------|
| [#49883](https://github.com/anomalyco/opencode/pull/49883) `providerState` → `state` 重命名 | OPEN | 统一 assistant/text/reasoning 字段语义，**保留向后兼容解码**；为 V2 公共 schema 定型 |
| [#49882](https://github.com/anomalyco/opencode/pull/49882) Agent 引用文件以 artifact tab 渲染 | OPEN | `file://` / 相对链接原被 DOMPurify 与 Electron 拦截，现支持截图/录制/HTML/报告作为富标签打开 |
| [#49881](https://github.com/anomalyco/opencode/pull/49881) 非 UTF-8 文件编码支持（GBK/Shift-JIS/Big5） | OPEN | 修复 #45924 —— Windows CJK locale 下 edit/write 工具静默破坏文件 |
| [#49850](https://github.com/anomalyco/opencode/pull/49850) 拆分 ProviderSettings / ModelSettings | CLOSED | 公共契约拆分，provider-package options 保持开放 |
| [#49876](https://github.com/anomalyco/opencode/pull/49876) 移除 luxon（-68 KB） | CLOSED | 渲染端 494 KB `main` chunk 瘦身，三处日期运算改用原生 `Intl` |
| [#49872](https://github.com/anomalyco/opencode/pull/49872) Desktop 启动阶段埋点 | CLOSED | 在 entry → ready → first window → main bundle 四个节点打 epoch 标记，便于 benchmark 分相 |
| [#49869](https://github.com/anomalyco/opencode/pull/49869) Electron ready 即显示首窗 | CLOSED | 通过并行 `desktop` import + 早期窗口创建，**~900 ms 黑洞缩短到几乎 0** |
| [#49786](https://github.com/anomalyco/opencode/pull/49786) TypeScript 编译器懒加载 | CLOSED | ~11 MiB 的 `typescript` 不再随 core 启动评估，仅在 Code Mode transpile 时按需加载 |
| [#49780](https://github.com/anomalyco/opencode/pull/49780) 服务发现轮询 100ms → 25ms | CLOSED | 中位探测时间 259 → 显著提前 |
| [#49874](https://github.com/anomalyco/opencode/pull/49874) 安装链接切到 v2 | CLOSED | 文档导航指向 `/v2/docs`，主页与下载页 CLI 默认 v2 |

---

##  功能需求趋势

从 issue 关键词归纳，社区诉求集中在五大方向：

1. **V2 迁移平滑性** —— 会话/历史/CLI 标志位回归（#44080、#49641、#49742）成为最尖锐矛盾，V2 不能丢功能。
2. **受限网络与代理** —— 代理自动启停（#37993）、CORS（#31041）反映企业/国内环境痛点。
3. **多代理并行可靠性** —— sub-agent 单点失败传染（#37315、#37959）、子代理调度在跨平台下表现不稳。
4. **桌面端 i18n 与 UX 细节** —— 中文菜单（#35601）、通知恢复窗口状态（#35444）、时间戳开关（#49742）等本地化诉求上升。
5. **会话可移植性** —— Git 同步 session/settings（#38011）、插件按 session 自定义（#28985）等"工作环境随身"型需求。

---

##  开发者关注点

性能是绝对主线：#49869 + #49876 + #49786 + #49780 + #49872 几乎构成一个 **"启动链路全链路瘦身"** 组合拳，从入口模块、依赖加载、轮询节奏到 bundle 体积逐项削减；TUI 渲染稳定性（#37803）、子代理调度（#37315 / #37959）和 V2 数据完整性（#44080 / #49641）是当前最影响信任度的三类问题。**对中文用户而言**，i18n、GBK 编码、Windows 桌面行为是最具落地价值的补丁方向。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-19

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）
> 统计周期：过去 24 小时

---

## 📌 今日速览

过去 24 小时 Pi 仓库无新版本发布，但社区活跃度依然很高：50 个 Issue 持续更新、21 个 PR 在评审中。**Claude 系列模型与 Pi 编辑工具的兼容性**问题得到官方关闭（#6278），同时围绕 **新模型/新 provider 接入**（Meta Muse、Qwen 中国 Token Plan、Mistral 推理派发）、**TUI 性能与跨平台稳定性**、**会话/会话工程**的工作仍在密集推进，提示社区关注点正从功能补齐转向**多 provider 互操作性与长会话健壮性**。

---

## 🚀 版本发布

**无新版本发布。** 最近的可关注构建为 `pi-ai@0.85.1`（已知存在 openrouter baseUrl 回归，参见 #9725，已修复）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 / 👍 | 摘要 |
|---|-------|------|-----------|------|
| [#6278](https://github.com/earendil-works/pi/issues/6278) | [bug] New Claude models work poorly with the current Pi's edit tool, failing ~20% edits | CLOSED | 25 / 10 | Claude 新模型会在 `edit[]` 工具调用中塞入 LLM 臆造的额外键（`new_text_x` / `type` / `in_file` 等），触发 `additional properties` 校验失败。讨论量最高，已关闭。 |
| [#7730](https://github.com/earendil-works/pi/issues/7730) | [bug] High CPU usage on Mac OS with long session | OPEN | 16 / 10 | macOS 上长会话 CPU 持续 50–110%，疑似与上下文规模相关；属于性能/稳定性核心痛点。 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | [inprogress] Parallel pi startup can report "No API key found" for ~48s when auth.json contains an expired OAuth credential | OPEN | 11 / 0 | 多进程并行启动 + 过期 OAuth → 错误指向活跃 provider，体验极差；附确定性复现与计时数据，已 in-progress。 |
| [#8684](https://github.com/earendil-works/pi/issues/8684) | [bug] `PI_OFFLINE` silently disables all provider model discovery — undocumented behavior | OPEN | 11 / 0 | `PI_OFFLINE` 文档仅承诺禁用启动期网络请求，实际连带禁用了整个会话的 provider 模型目录发现——属"未公开行为变更"。 |
| [#9052](https://github.com/earendil-works/pi/issues/9052) | Fullscreen mode 的固定输入框很好，但滚轮速度比常规模式慢 3 倍 | CLOSED | 10 / 6 | 与 [#9758](https://github.com/earendil-works/pi/issues/9758)（wheelScrollLines 硬编码为 1）形成连贯反馈。 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | npm search not indexing newly published pi-packages (no new package names since Aug 4) | CLOSED | 9 / 0 | pi.dev/packages 画廊依赖 npm search 结果，导致 8 月 4 日后新包不再被发现，生态扩散受阻。 |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | /export HTML silently drops context that was sent to the model (`display:false` custom messages) | OPEN | 8 / 0 | 导出 HTML 时静默丢弃 `display:false` 的自定义消息——该字段本应只影响 TUI 显示；导致审计/复盘丢失真实上下文。 |
| [#9652](https://github.com/earendil-works/pi/issues/9652) | [bug] Compaction is refused by Anthropic Claude Fable due to transcribed thinking blocks | OPEN | 6 / 2 | `/compact` 把 thinking blocks 转写到摘要 prompt，触发 Anthropic `reasoning_extraction` 拒答——压缩与思考链策略冲突。 |
| [#9616](https://github.com/earendil-works/pi/issues/9616) | zai-coding-cn: GLM Coding Plan 现仅服务 GLM-5.3 / 5.3-Flash，目录仍列出 8 个旧模型 | CLOSED | 6 / 0 | Zhipu 已合并 lineup，pi 内置目录和远程 overlay 仍暴露已下线模型，反映**上游目录同步**存在系统性问题。 |
| [#9725](https://github.com/earendil-works/pi/issues/9725) | [bug, no-action] regression 0.85.1: openrouter baseUrl can no longer be overridden as documented | CLOSED | 6 / 0 | `4e69b0c` 提交后 openrouter 模型根据 API 自动切 baseUrl，破坏了文档化的"替换 baseUrl+apiKey"用法。 |

> 💡 **观察**：closed 的 10 条 issue 多为**目录/上游契约**问题，已通过同步或回归修复闭环；仍 OPEN 的则集中在**性能、跨平台、provider 模型能力差异**等结构性议题。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 状态 | 简介 |
|---|----|------|------|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | feat(ai,coding-agent): add Meta provider with Muse subscription OAuth | OPEN | 新增 Meta 提供商，订阅 OAuth；指出刷新令牌机制特殊（每日基于 identity token 重铸）、streaming 仍偏"伪流式"。解决 #7543。 |
| [#8158](https://github.com/earendil-works/pi/pull/8158) | feat(coding-agent): upgrade Mermaid terminal rendering | OPEN | 升级 Mermaid 在终端的渲染能力，关闭 #8157 / #7832。 |
| [#9763](https://github.com/earendil-works/pi/pull/9763) | feat(coding-agent): add pi.dev compatibility check | OPEN | 将审批通过的 PR 提交派发到内部 pi.dev 兼容工作流，回写稳定 `pi.dev / model catalog compatibility` 状态；改进 PR/权限 token 隔离。 |
| [#9434](https://github.com/earendil-works/pi/pull/9434) | feat(coding-agent): allow extensions to append to the session system prompt | OPEN | 允许 `session_start` 处理器返回追加型 `systemPromptAppend` 贡献，按扩展/处理器顺序折叠、保留源元数据、保留错误隔离；解决 #9432。 |
| [#9488](https://github.com/earendil-works/pi/pull/9488) | fix(ai): add canonical Codex turn attribution | OPEN | 新增 provider-neutral 的 `requestIdentity`，让 Codex 的 session/thread/turn/window/request-kind 元数据能跨工具续接、重试、转向、压缩恢复被可靠关联。 |
| [#9746](https://github.com/earendil-works/pi/pull/9746) | fix(tui): handle CJK punctuation in file autocomplete | OPEN | 把 CJK 标点视为词边界，修复 `我们需要实现新功能，docs<Tab>` 之类无法触发文件补全的问题——对中文用户体验是刚需。 |
| [#9668](https://github.com/earendil-works/pi/pull/9668) | feat(coding-agent): add prompt cache warming（mitsuhiko） | OPEN | 实验性 prompt cache 预热，当前仅 Anthropic 提供商受益，但能显著降低长会话延迟与成本。 |
| [#7989](https://github.com/earendil-works/pi/pull/7989) | feat(ai): add Qwen Token Plan Individual CN provider | OPEN | 新增 `qwen-token-plan-individual-cn` 内置 provider，复用 `QWEN_TOKEN_PLAN_CN_API_KEY`；为中国区 Qwen 个人订阅用户开箱即用。 |
| [#9754](https://github.com/earendil-works/pi/pull/9754) | fix(coding-agent): treat same-repo worktrees as one project and resolve session-dir symlinks | CLOSED | `SessionManager` 项目身份识别新增：(1) 对比前 resolve 符号链接；(2) 同一仓库的不同 worktree 视为同一项目——关闭 #9753。 |
| [#9762](https://github.com/earendil-works/pi/pull/9762) | fix(coding-agent): guard TUI against tool results without content array | CLOSED | 修复扩展工具返回 `{output: "..."}`（而非 `{content: [...]}`）时 TUI 进程级崩溃（#9761）。 |

> 另有关闭的 [#9744](https://github.com/earendil-works/pi/pull/9744)（`/retry` 重连失败命令）、[#9736](https://github.com/earendil-works/pi/pull/9736)（流在终态事件前被截断时重试）、[#9742](https://github.com/earendil-works/pi/pull/9742)（shell 时长显示 hh:mm:ss）、[#9720](https://github.com/earendil-works/pi/pull/9720)（Mistral 推理派发改用 `thinkingLevelMap`、新增 zai-glm-5-3）等增量改进。

---

## 📈 功能需求趋势

从近 24 小时所有 Issue 提炼，社区关注的功能方向按热度排列：

1. **多 provider 接入与目录同步**（🔥 最高频）
   - Meta Muse、Qwen（CN 区域、Token Plan）、Azure Chat Completions（DeepSeek V4 Pro）、OpenCode-Go、openai-codex、zai-coding-cn
   - 反映：**Pi 正从单一 Anthropic 体验走向 provider 联邦**，但上游模型/目录变更缺乏自动化同步通道。

2. **TUI 性能与跨平台体验**
   - 全屏模式滚动慢、鼠标滚轮硬编码 1 行、宽幅图像被拉高、Windows bash 超时遗留孤儿进程、Wayland 剪贴板 stderr 泄露污染 TUI、Mac 长会话 CPU 100%、Codex SSE 缓冲全量响应导致 V8 OOM
   - 关键词：**碎片化 delta、O(N²) 解析、堆缓冲、单核饱和**——性能问题呈现"多源同类"特征。

3. **会话与压缩工程**
   - `/compact` 与 Claude Fable 的 thinking-block 策略冲突、threshold compaction 在最新一轮工具结果超阈值时静默 no-op、`/export` HTML 丢弃 `display:false` 上下文
   - 趋势：从"会话能跑"到"会话可审计、可压缩、可跨进程恢复"。

4. **扩展 API 能力扩展**
   - PR #9434 允许扩展追加 system prompt；Issue #9762 暴露扩展返回 schema 不规范导致进程崩溃——两端都在推动"扩展作为一等公民"。

5. **工作流与编辑器集成**
   - PR #8158 升级 Mermaid；#9744 提供 `/retry`；PR #9763 建立 pi.dev 兼容性门禁
   - 暗示：Pi 在朝"长流程 IDE 搭档"演进。

6. **CJK / 国际化细节**
   - PR #9746 修复 CJK 标点词边界；中文社区体验持续被关注。

---

## 🧑‍💻 开发者关注点

综合所有 Issue 评论，可归纳出以下高频痛点与共识：

| 类别 | 痛点 | 代表性 Issue |
|------|------|--------------|
| **Provider 契约不一致** | 上游模型/目录变更时，Pi 缺乏自动化同步；用户只能手动报 issue | #9616, #9737, #7885 |
| **隐性配置行为** | `PI_OFFLINE`、openrouter baseUrl 等"文档与实现不一致" | #8684, #9725 |
| **错误诊断指向错位** | 多 provider auth 异常时，错误信息指向活跃 provider 而非真正的过期源 | #8928 |
| **长会话性能悬崖** | 上下文增长触发 CPU/内存异常，目前缺乏可观测性 | #7730, #9549, #9036 |
| **流式解析的复杂度** | 碎片化 delta、整流缓冲、stream cut before terminal event | #9062, #9736 |
| **跨平台一致性缺失** | Windows bash 孤儿进程、Wayland 剪贴板污染、macOS CPU | #9129, #9011, #7730 |
| **静默失败** | compaction no-op、`--print` 输出 0 字节但 exit 0、`--mode` 接受无效值、模板 frontmatter 错误不告警 | #9740, #9718, #9045, #9354 |
| **生态发现** | 新发布的 pi-package 无法被 npm search 索引 → 画廊不可见 | #7885, #7987 |
| **TUI 可配置性** | 滚轮步长、选择/复制语义、CJK 边界、LaTeX 旧式字体开关 | #9758, #8019, #9746, #8827 |

> 🎯 **共识方向**：社区最希望官方投入的两件事——
> 1. **构建稳定可观测的 provider 适配层**（自动目录同步、错误归因、契约测试）；
> 2. **长会话与大上下文的性能预算与回归门禁**（流式解析、单核占用、堆峰值指标化）。

---

*日报由社区数据自动聚合生成。如需关注某个具体方向或某条 PR 的后续进展，欢迎回复本日报或在对应 Issue/PR 下参与讨论。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-19

## 📌 今日速览

今日发布 `v0.24.1-preview.0` 与 `v0.24.0-nightly.20260918.537311b8a5` 双版本，主要聚焦 ACP/Web Shell 边界规范化、CI 出包链路修复以及多语言支持的稳定性。社区讨论集中在 **v0.24.0 升级回归**（如 `/cd` 失效）、**LSP 在非 ASCII 场景下静默丢响应**、**会话写入锁错误码无法区分故障类型** 等问题，Web Shell 与桌面端的 PTY 链路、ACP/Zed 集成也是今天的热点。

---

## 🚀 版本发布

### v0.24.1-preview.0
- **ACP 边界验收文档**：补充 `qwen serve` 与 ACP 子进程之间的契约文档，明确已合并的边界条件（[#12024](https://github.com/QwenLM/qwen-code/pull/12024)）。
- **CI 出包修复**：在打包步骤等待已发布的 `export` 渲染器就绪，避免产物缺依赖。

### v0.24.0-nightly.20260918.537311b8a5
- 与 preview 版同源，纳入 ACP 边界文档与 CI 修复，作为下一个稳定版的 nightly 验证切片。

> 关键提示：本次升级在 `0.24.0` 之后引入了 [`/cd` 失效](https://github.com/QwenLM/qwen-code/issues/12224)等回归，请关注。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 关键点 | 社区反应 |
|---|------|------|------|
| 1 | [#11872](https://github.com/QwenLM/qwen-code/issues/11872) P1 | **Web Terminal `[Error: PTY not available]`**：`@lydell/node-pty` 在 `qwen serve` / Desktop 中声明却未真正打包，macOS 代码签名阻断本地 prebuild | 10 条评论，是过去 24h 关注度最高的 bug；直接影响桌面端与 Web Shell 的终端能力 |
| 2 | [#12224](https://github.com/QwenLM/qwen-code/issues/12224) P1 | **v0.24.0 升级后 `/cd` 失效**：无活跃会话时仍报"响应/工具调用正在进行" | 5 条评论，刚升级用户的"踩坑首日反馈"，需在 0.24.1 优先回归 |
| 3 | [#11783](https://github.com/QwenLM/qwen-code/issues/11783) P1 | **TUI 崩溃（React error #185）**：后台 shell 任务注册后几秒内"Maximum update depth exceeded" | 5 条评论，影响所有长时间会话场景 |
| 4 | [#12053](https://github.com/QwenLM/qwen-code/issues/12053) P2 | **Goal 运行时精简**：单轮 ~100 工具调用即可完成目标时，后续证据目录与 checkpoint 浪费明显 | 8 条评论，路线型讨论，影响 Goal 功能长期演进 |
| 5 | [#12042](https://github.com/QwenLM/qwen-code/issues/12042) P2 | **`detectTurnInterruption()` 分类错误**：`provenance` 字段在 `api-history` 投影中丢失，两类通知形态仍被误判 | 5 条评论，`#12007` 修复不完整的后续 |
| 6 | [#11162](https://github.com/QwenLM/qwen-code/issues/11162) P2 | **普通队列工具取消跳过后续清理**：CoreToolScheduler 拒绝后 caller 完成处理器不执行 | 5 条评论，调度路径上经典的清理漏掉 |
| 7 | [#12206](https://github.com/QwenLM/qwen-code/issues/12206) P1 | **LSP 非 ASCII 响应静默丢弃**：`Content-Length` 字节数与 UTF-16 字符串长度比较错位 | 4 条评论，CJK/Markdown 场景 `documentSymbol` 直接空返回 |
| 8 | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) P2 | **非对话上下文 Token 治理**：系统提示/工具 schema/QWEN.md 在长上下文模型中占比可观却无人监控 | 5 条评论，与成本治理相关，路线图关联 `context-performance` |
| 9 | [#12212](https://github.com/QwenLM/qwen-code/issues/12212) P2 | **Session writer 租约错误码过粗**：残 `.claim` 即永久 503，多种故障共用 `session_writer_unavailable` | 4 条评论，daemon 可恢复性问题 |
| 10 | [#12226](https://github.com/QwenLM/qwen-code/issues/12226) P3 | **文件系统作用域权限与仓库级规则集中管理**：项目本地 `.qwen` 配置应只管控本仓库，跨仓库权限应集中治理 | 3 条评论，与 [#12223](https://github.com/QwenLM/qwen-code/issues/12223) 形成"权限作用域"系列讨论 |

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 内容 |
|---|----|----|
| 1 | [#11854](https://github.com/QwenLM/qwen-code/pull/11854) | **feat: 引入 hybrid code mode**：新增 Codex 对齐的 `tools.mode` 枚举（`direct` / `code_mode` / `code_mode_only`），普通工具仍可直接调用，并暴露隔离的 `exec` JS 工具与嵌套 JS 声明 |
| 2 | [#12067](https://github.com/QwenLM/qwen-code/pull/12067) | **feat(core): bwrap 执行底座**：搭建工具级 Linux 沙箱的内部基础，含结构化可执行/argv/env 启动、bwrap 适配器、受信任完成证据、进程监管与受限 worker |
| 3 | [#12191](https://github.com/QwenLM/qwen-code/pull/12191) | **fix(web-shell): 加固 `@qwen-code/web-shell` 出包产物**：保证声明解析、运行时依赖外置，避免 MCP Apps 运行时被静态 transcript 误吞 |
| 4 | [#12225](https://github.com/QwenLM/qwen-code/pull/12225) | **fix(desktop): 把 node-pty prebuild 嵌入 Desktop 运行时**：与 [#11872](https://github.com/QwenLM/qwen-code/issues/11872) 直接联动，含 PTY spawn 烟雾测试 |
| 5 | [#11988](https://github.com/QwenLM/qwen-code/pull/11988) | **fix(core): 压缩时剔除原生 `<think>` 标签闭合的推理块**：避免推理模型因标签字面差异丢失总结 |
| 6 | [#12198](https://github.com/QwenLM/qwen-code/pull/12198) | **fix(cli): 未决工作区需显式信任**：CLI 与 daemon 快速启动路径一致地进入"未信任"态，关闭项目设置/环境/钩子，权限回落到默认 |
| 7 | [#10410](https://github.com/QwenLM/qwen-code/pull/10410) | **feat(core): 保留延迟工具的 prompt cache**：用 `tool_search` + `tool_call` 两步桥代替"schema 揭露"，长会话缓存稳定性提升 |
| 8 | [#12156](https://github.com/QwenLM/qwen-code/pull/12156) | **fix(core): 大扫描下 gitignore matcher 留存上限**：停止为每个目录保留独立编译副本（依据 [#12151](https://github.com/QwenLM/qwen-code/issues/12151)） |
| 9 | [#12085](https://github.com/QwenLM/qwen-code/pull/12085) | **feat(web-shell): 恢复远程 workspace 添加流程**：在 `Settings > Connections` 中管理已验证 daemon 来源，承载 Codex 风格远程连接 |
| 10 | [#11857](https://github.com/QwenLM/qwen-code/pull/11857) | **ci(review): 跳过 diff 未变的同步推送**：典型场景为 "Update branch" 合并 main，自动 review 不再重复触发（与 [#12193](https://github.com/QwenLM/qwen-code/issues/12193) 互补） |

> 其他值得留意：[#11658](https://github.com/QwenLM/qwen-code/pull/11658)（OpenTUI 长确认弹窗保持在视口内）、[#12119](https://github.com/QwenLM/qwen-code/pull/12119)（`/context` 分项相加等于 provider 总量）、[#12115](https://github.com/QwenLM/qwen-code/pull/12115)（Linux 独立安装包 glibc 预检）。

---

## 📈 功能需求趋势

1. **Codex 风格工具调用与代码模式**
   - [#11854](https://github.com/QwenLM/qwen-code/pull/11854) 提出 `tools.mode` 枚举与 `exec` JS 工具，对齐 Codex 范式
   - [#10410](https://github.com/QwenLM/qwen-code/pull/10410) 关注延迟工具的缓存保留

2. **Linux 工具级沙箱**
   - [#12067](https://github.com/QwenLM/qwen-code/pull/12067) 推进 bwrap 执行底座

3. **远程连接与多端协作**
   - [#12085](https://github.com/QwenLM/qwen-code/pull/12085) 恢复 Web Shell 远程 workspace 添加；[#12147](https://github.com/QwenLM/qwen-code/issues/12147) 提议 `--extension-dir` 加载部署级扩展

4. **更细粒度的权限治理**
   - [#12226](https://github.com/QwenLM/qwen-code/issues/12226)、[#12223](https://github.com/QwenLM/qwen-code/issues/12223)：按文件系统作用域与仓库维度集中管理规则

5. **长上下文与 Token 成本可视化**
   - [#12028](https://github.com/QwenLM/qwen-code/issues/12028) 关注非对话上下文占比；[#12119](https://github.com/QwenLM/qwen-code/pull/12119) 让 `/context` 与 provider 总量自洽

6. **会话可靠性与恢复**
   - [#12212](https://github.com/QwenLM/qwen-code/issues/12212)、[#12213](https://github.com/QwenLM/qwen-code/issues/12213)、[#12214](https://github.com/QwenLM/qwen-code/issues/12214) 共同提出 daemon 启动期对锁目录只读清单 + 非优雅关闭文档化

---

## 💬 开发者关注点

- **升级回归必须可被快速定位**：`/cd`（[#12224](https://github.com/QwenLM/qwen-code/issues/12224)）与 Desktop 终端不可用（[#11872](https://github.com/QwenLM/qwen-code/issues/11872)）都因 `0.24.0` 升级出现，社区期待 `0.24.1` 优先回归。
- **非英语/Unicode 体验一致性**：LSP（[#12206](https://github.com/QwenLM/qwen-code/issues/12206)）、会话总结（[#11847](https://github.com/QwenLM/qwen-code/issues/11847)）、node-repl（[#12167](https://github.com/QwenLM/qwen-code/issues/12167)）三处暴露的 CJK/非 ASCII 体验问题被同时讨论。
- **Web Shell / Desktop 打包链路信任**：从 [#11872](https://github.com/QwenLM/qwen-code/issues/11872) → [#12225](https://github.com/QwenLM/qwen-code/pull/12225) → [#12191](https://github.com/QwenLM/qwen-code/pull/12191)，反映出社区对"声明依赖与实际打包"一致性的强烈诉求。
- **会话/锁错误的可诊断性**：多个 daemon 相关 issue 集中要求更精确的错误分类与启动期可观测性，而非"统一 503"。
- **CI 与代码评审体验**：macOS E2E 单次重试（[#11134](https://github.com/QwenLM/qwen-code/pull/11134)）、未变 diff 跳过重审（[#11857](https://github.com/QwenLM/qwen-code/pull/11857)）、主 CI 自愈（[#12195](https://github.com/QwenLM/qwen-code/issues/12195)）共同指向"减少维护摩擦"。
- **ACP/Zed 集成差距**：[#11361](https://github.com/QwenLM/qwen-code/issues/11361) AskUserQuestion 仍渲染为 Raw Input，是 ACP 端最显眼的体验落差。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-19**

> ⚠️ **数据说明**：本期数据指向的仓库实际为 `Hmbown/Codewhale`（原 DeepSeek-TUI 已于近期完成品牌重命名，详见 PR #6350）。日报内容以 Codewhale 仓库的当前动态为准。

---

## 📌 今日速览

今日 Codewhale 仓库高强度迭代，单日合并/关闭 24 个 PR（主要为依赖升级与 CI 修复），社区活跃度集中在 **TUI 诊断能力**、**MCP 客户端整合**、**Provider 扩展** 三条主线。同时有 50 条 Issue 更新，标志性的 `#6184`（引擎中途静默冻结）成为最受关注的稳定性 Bug。

---

## 🚀 版本发布

过去 24 小时无新 Release。

---

## 🔥 社区热点 Issues

### 1. [#6011](https://github.com/Hmbown/Codewhale/issues/6011) — TUI 用量与工具诊断：分组件/分模型 Token 核算 + 缓存命中率
**评论 9 | 标签：enhancement | 状态：OPEN**
属 C11 核心执行包，计划为 TUI 增加按组件、按模型统计 Token 用量以及缓存命中率、按工具汇出，并暴露工具调用错误模式。是 0.9.14 路线图中可观测性部分的核心入口。

### 2. [#6015](https://github.com/Hmbown/Codewhale/issues/6015) — Fleet 自适应防卡死 + 扩展只读 Shell 语法（默认开启）
**评论 9 | 标签：documentation, enhancement | 状态：OPEN**
原"仅后发布 / 不扩展语法"的限制已被推翻，anti-stall 与安全只读 Shell 现已正式纳入 C05/C06 核心计划，反映出社区对 **Agent 长任务稳定性** 的强诉求。

### 3. [#5587](https://github.com/Hmbown/Codewhale/issues/5587) — 死代码清扫 2-4 阶段：75 处测试标记、242 处遗留 allow
**评论 9 | 标签：cleanup | 状态：OPEN**
承接 0.9.13 阶段 1（已落地 `e5ca0aa86`），全面审计 379 处 `allow(dead_code)`，分级处理"真正死代码 / 临时允许 / 全局允许转化"。

### 4. [#6184](https://github.com/Hmbown/Codewhale/issues/6184) — 🐛 引擎中途静默冻结（用户消息已落盘但无响应、无错误、无日志）
**评论 6 | 标签：bug | 状态：OPEN**
社区报告描述：在长任务、工具密集场景下，模型输出中途停止，之后所有用户输入仅被持久化却不再触发响应。这是当前最严重的稳定性缺陷，阻塞了 0.9.14 关键场景。

### 5. [#6187](https://github.com/Hmbown/Codewhale/issues/6187) — MCP 无连接监管：失效服务器保持 "ready" 直至下次调用失败
**评论 5 | 标签：bug | 状态：CLOSED**
社区痛点："没有机制保持服务器连接状态"，目前已关闭，应在 MCP 客户端栈整合中解决。

### 6. [#6142](https://github.com/Hmbown/Codewhale/issues/6142) — 整合两套 MCP 客户端栈（tui/src/mcp vs crates/mcp）
**评论 5 | 标签：rust, cleanup | 状态：OPEN**
`tui/src/mcp/`（~13.2k 行）vs `crates/mcp`（~4.5k 行）并存且同名模块重复。app-server 走 crate、引擎走自己实现，是 0.9.14 重构 backlog 重点项目。

### 7. [#6087](https://github.com/Hmbown/Codewhale/issues/6087) — ✨ TUI 减负第二轮：/settings、/setup providers、/fleet 命名
**评论 5 | 标签：enhancement, tui, ux | 状态：CLOSED**
创始人原话："de. clutter. it's so busy."。Round 1 已合并入 0.9.13；本轮处理 71 行 /settings 长列表等剩余问题，已关闭。

### 8. [#6310](https://github.com/Hmbown/Codewhale/issues/6310) — 🐛 `serve --acp` 忽略 config.toml sandbox_mode/ask，ACP 会话卡在 Work 姿态
**评论 4 | 标签：bug | 状态：OPEN**
macOS 端 Paseo 编辑器作为 ACP 客户端调用时，无法读取配置文件中的沙箱配置，影响 IDE 集成场景。ACP 主线推进中重点关注。

### 9. [#5915](https://github.com/Hmbown/Codewhale/issues/5915) — Fleet 模型：provider → model → shortlist → role，role 内保存
**评论 4 | 标签：enhancement | 状态：OPEN**
由创始人 9 月 6 日直接拍板，明确 Fleet 模型短名单 + 角色分配的端到端流程，是多模型编排方向的关键设计。

### 10. [#6086](https://github.com/Hmbown/Codewhale/issues/6086) — Session Scratchpad + 三类存储统一寻址方案
**评论 4 | 标签：enhancement, external-memory | 状态：OPEN**
推进"scratchpad / Agent Mail / workshop"三者协同的外部记忆层，是 Agent 长时记忆方向最具落地性的 Issue。

**其他值得跟踪**：#6050 可插拔 Agent 记忆后端（mem0 / causal-memory）、#6035 模型 ID 引脚迁移、#6029 Provider-neutral 上游厂商选择、#6158 SSH 远程工作区、#6193 运行时性能门禁、#6203 AST 解析的符号级编辑（`edit_symbol`）。

---

## 🛠️ 重要 PR 进展

### 1. [#6361](https://github.com/Hmbown/Codewhale/pull/6361) — feat(runtime-api): Engine 终端字节流 + pet agent-count 引脚
**状态：OPEN**
合并 `#34`（Engine 状态化终端字节 I/O / resize / 退出 / 有界重放）与 `#12`（pet agent 数量上限），对应 Core 追踪器 `codewhale-app#61` 的两大解锁项。

### 2. [#6353](https://github.com/Hmbown/Codewhale/pull/6353) — feat(providers): 新增 CSDN 星图（Coding Plan 计费）
**状态：CLOSED ✅**
将 CSDN 星图纳入一等公民 Provider，默认模型为 `glm_for_coding`。OpenAI 兼容端点 `ai.csdn.net/api/model/v1`，单端点接入 Coding Plan 与转售市场模型。

### 3. [#6354](https://github.com/Hmbown/Codewhale/pull/6354) — fix(ci): 修复 main 红 + MCP stdio marker 测试竞态
**状态：CLOSED ✅**
解决两个隐性 CI 缺陷：`check-blocking-calls-budget` 在 PR 上 advisory、push 上 fatal；MCP 测试在繁忙 runner 上存在读取竞态。CI run [35405156688](https://github.com/...)

### 4. [#6350](https://github.com/Hmbown/Codewhale/pull/6350) — refactor(tui): 退役 DeepSeek 残留命名
**状态：CLOSED ✅**
`DeepSeekClient` → `CodewhaleClient`、`Config::deepseek_base_url` → `active_route_base_url`。完成 Provider 中立化的命名清理，品牌迁移关键里程碑。

### 5. [#6352](https://github.com/Hmbown/Codewhale/pull/6352) — feat(web): gpui 镜像从 Shoreline token 自动生成
**状态：CLOSED ✅**
消除 `globals.css` 手维护 `--gpui-*` 的漂移问题（`--gpui-stage-raised`、`--gpui-paper-deep` 之前已对不上 Shoreline 真实常量）。

### 6. [#6351](https://github.com/Hmbown/Codewhale/pull/6351) — feat(web): Shoreline 调色板导出至站点 token
**状态：CLOSED ✅**
站点 token 管线此前只知道 `WHALE_*` / `LIGHT_*`，本 PR 让 TUI/GPUI 客户端使用的 Shoreline 色板到达 web 端，统一品牌视觉。

### 7. [#6349](https://github.com/Hmbown/Codewhale/pull/6349) — chore(ci): 合并 windows crate 升级 + docker action SHA 引脚
**状态：CLOSED ✅**
解决"只升级 windows-core 会让 BOOL/HRESULT 变成两个类型导致 Windows 端编译失败"的问题，并应用 setup-qemu / setup-buildx / build-push 三个 SHA 引脚。

### 8. [#6347](https://github.com/Hmbown/Codewhale/pull/6347) — fix(tui): codewhale-main 调试栈扩至 32 MiB
**状态：CLOSED ✅**
解决 9 月 16 日以来每个 PR 在 Ubuntu 上的 `plugin_toml_binary_lifecycle_skill_and_stdio_mcp_acceptance` cucumber 测试 ~83s 后栈溢出挂死的问题。

### 9. [#6348](https://github.com/Hmbown/Codewhale/pull/6348) — test(tui): test_runner scoped 目录使用规范化形式比较
**状态：CLOSED ✅**
修复 Windows 端 `resolve_existing_dir` 输出带 `\\?\` verbatim 前缀导致断言失败的缺陷，叠加 #6347 提交。

### 10. [#5752](https://github.com/Hmbown/Codewhale/pull/5752) — feat(cloud-facts): 签名、版本化、可缓存的云事实通道（Slice 1，默认关闭）
**状态：CLOSED ✅**
Supabase 支持的"模型目录差分 / Provider 默认值 / 发布事实 / 公告"通道，站点 `/api/facts/v1/<channel>` 服务，客户端通过 `[cloud_facts].enabled`（默认 OFF）启用。Slice 1 打通。

> 另：今日 Dependabot 批量升级了 `setup-buildx-action 4.3.0→4.4.0`、`setup-qemu-action 4.3.0→4.4.0`、`build-push-action 7.3.0→7.4.0`、`nixpkgs`、`fenix`、`windows-core`、`wrangler`、`autoprefixer`、`@types/node` 等一批依赖。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **可观测性 / 诊断** | #6011、#6315、#6035、#6193 | 🔥🔥🔥 |
| **MCP 整合与稳定性** | #6142、#6187、#6184 | 🔥🔥🔥 |
| **Provider 中立化 / 多模型** | #5915、#6029、#6353 | 🔥🔥🔥 |
| **IDE / ACP 集成** | #5835、#6310、#6088 | 🔥🔥 |
| **外部记忆与 Agent 能力** | #6086、#6050、#6013 | 🔥🔥 |
| **远程开发 / SSH 工作区** | #6158 | 🔥 |
| **工具体验升级** | #6203、#6309、#6087 | 🔥 |
| **代码质量与重构** | #5587、#6142、#6143、#6151 | 🔥 |

**三大主轴**：① 跨 Provider 的可观测与可调试；② MCP/ACP 等协议栈的整合与稳定性；③ Provider 中立化下的多模型/多厂商编排。

---

## 💬 开发者关注点

1. **"看不见的失败"是头号痛点**
   - 引擎静默冻结（#6184）、MCP 服务器假活（#6187）、指标面板空数据（#6315）、sub-agent 名占用（#6313）、workflow 并行写被拒（#6232）等 Bug 都指向同一问题：**系统状态对用户/开发者不可见**。#6193 提出的"运行时性能门禁缺失"是这条线的总诉求。

2. **配置/路径/Adapter 层重复实现**
   - `tui/src/mcp` vs `crates/mcp`、`tui/src/config*` vs `crates/config`、`acp_server.rs` 自成第二个 turn loop（#6088）。0.9.14 重构 backlog 围绕"一个权威源 + 适配层"展开。

3. **Provider 重命名进入收尾**
   - #6350 完成 `DeepSeekClient` → `CodewhaleClient` 的最后清扫，配合品牌从 DeepSeek-TUI 转向 Codewhale。

4. **UX 简化呼声强烈**
   - 创始人"de. clutter. it's so busy."——/settings 71 行单页滚动、/setup providers 30+ 项扁平，是 #6087、#5915 共同方向；社区（#6309）也在呼吁恢复 YOLO 模式以减少审批打断。

5. **AST 化编辑呼声渐高**
   - #6203 提出 `edit_symbol`：按符号名而非文本匹配定位，是当前 `edit_file` 工具的最大失败源；可显著降低模型重试次数。

6. **依赖卫生**
   - reqwest 0.12/0.13、thiserror 1/2、bitflags 1/2 等重复版本被 #6151 收敛；Dependabot 每日高强度清扫 nixpkgs / windows / web 依赖，构建链路趋于稳定。

---

*数据范围：2026-09-18 ~ 2026-09-19 | 数据源：[Hmbown/Codewhale](https://github.com/Hmbown/Codewhale)*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*