# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 02:49 UTC | 覆盖工具: 9 个

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

**数据周期：** 2026-07-08（24h）  
**覆盖范围：** Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI (CodeWhale) 共 9 个工具

---

## 1. 生态全景

当前 AI CLI 工具市场进入**架构分化与体验深水区**——头部工具（Claude Code、Copilot CLI、OpenCode、Qwen Code）正围绕 **V2 架构重构、多工作区/多 Agent 协作、SDK 平台化**展开军备竞赛，而成本透明度、Auto-mode 安全分类器、Windows/TUI 稳定性成为跨工具的**共性痛点带**。社区焦点从"功能上新"转向"核心流程稳定性"（回归簇、长尾 Bug）与**生态边界扩展**（插件/扩展 API、MCP、渠道集成）。同时，Qwen Code（50 PRs）和 OpenCode（50 PRs）单日 PR 量创近期新高，反映开源阵营已进入**密集迭代周期**。

---

## 2. 各工具活跃度对比

| 工具 | 24h Issues | 24h PRs | 新版本 | 关键状态 |
|------|-----------|---------|--------|----------|
| **Claude Code** | ≥50（4 个 v2.1.204 回归簇） | 2（仅文档） | **v2.1.204**（今日发布，触发回归） | ⚠️ 回归风险 |
| **OpenAI Codex** | 无数据 | 无数据 | 无 | 仓库未提供摘要 |
| **Gemini CLI** | 10+ P1/P2 | 10 | 无 | 凭据/认证 P1 集中 |
| **GitHub Copilot CLI** | **29** | 0 | v1.0.69 + v1.0.69-3 | 高活跃、低代码响应 |
| **Kimi Code CLI** | 1 | 0 | 无 | 极静默期 |
| **OpenCode** | 22 | **50** | **v1.17.15** | 🚀 全场最高 PR 量 |
| **Pi** | 27 | 23 | 无 | 大规模 triage 日 |
| **Qwen Code** | 6 | **50** | **v0.19.7**（正式版） | 🚀 全场并列最高 PR 量 |
| **DeepSeek TUI / CodeWhale** | ≥12 | ~17 | **v0.8.67**（品牌重塑） | 高节奏迭代 |

> **数据快照**：日均 PR 推送量 OpenCode 与 Qwen Code 并列第一（50/50），Issues 活跃度 Copilot CLI 居首（29）。**PR 与 Issues 的比例**可作为"代码响应力"指标：OpenCode (2.27)、Qwen Code (8.33)、Pi (0.85) 处于前列，Copilot CLI (0.00) 和 Claude Code (0.04) 明显滞后。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **Windows / TUI 稳定性** | Claude Code、OpenCode、Copilot CLI、DeepSeek TUI、Gemini CLI | 输入吞字、回车失效、IME 死锁、PowerShell 焦点泄漏、crossterm poll 冻结；几乎所有工具都被 Windows 反复拖入 regression 带 |
| **成本 / 用量透明化** | Claude Code（#41506 三个月发酵）、Pi（#6326 custom_message 绕过 compaction）、Gemini CLI（Flash quota） | "为何 token 消耗同比激增 3–5 倍"成为订阅制产品的新型信任危机 |
| **多工作区 / 多会话管理** | Claude Code（Agents View 回归）、Qwen Code（Fleet View PR #6451、多 workspace daemon RFC #6378） | 业界正在向"统一指挥中心"收敛 |
| **Provider 抽象与兼容性** | Pi（Azure Responses #6409、DeepInfra #6399）、Copilot CLI（BYOK 硬编码 gpt-5.4-mini #3954）、OpenCode（LM Studio #26063） | reasoning 重放、cache 命中、模型硬编码成为补丁式兼容分支的"补丁" |
| **插件 / 扩展生态** | Copilot CLI（`/plugins` 仪表盘）、OpenCode（V2 plugin readiness #35755）、Pi（extension API 表面扩张，11 项 export） | 从"能用"进入"精细化"阶段 |
| **Auto-mode / Safety classifier** | Claude Code（#63819、#75517 "Self-caged"） | 分类器不可用 → 工具全阻断，缺乏降级路径 |
| **内存 / 上下文压缩可靠性** | OpenCode（Memory Megathread #20695，108 评论）、Qwen Code（#6487 /remember 后索引过期）、Pi（#6326） | 长会话"看起来成功但中途丢推理"是隐性炸弹 |
| **企业级安全 / 凭据** | Claude Code（ZDR workspace 跨账号泄漏 #74066、OAuth localhost vs 127.0.0.1 #42765）、Gemini CLI（OAuth SSRF 防护 PR #28112） | RFC 合规与零信任成为采购底线 |
| **SDK 平台化** | Qwen Code（PR #6491 新增 11 项 QueryOptions，双 SDK 同步） | CLI → SDK → Platform 的演进路径明朗 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | Anthropic 旗舰 agent 工作台 | 企业开发者、Max 订阅用户 | 完整 hook/agent/mcp 体系；当前重心在成本治理与 regression 控制 |
| **Copilot CLI** | GitHub 生态入口 | GitHub 深度用户、CI/CD 集成方 | 沙箱策略精细化 + 插件生态；社区影响力受 #53 长期沉默拖累 |
| **Gemini CLI** | Google AI 入口 | Google Cloud / AI Studio 用户 | 受 OAuth tier 判定、ZDR 凭据问题困扰；Agent 自维护（CareTaker）管线创新 |
| **OpenCode** | 开源多 provider V2 架构 | 喜欢自托管、本地模型、研究型用户 | V2 Instructions 重构、AI SDK 元数据保留、跨 provider 抽象；Windows 是最大短板 |
| **Pi** | 极简 + 可扩展 provider 抽象 | LLM 工具链开发者、研究者 | 扩展 API 表面扩张策略、TUI 流式渲染稳定性；与 Rust 生态（mitsuhiko 参与）关联紧密 |
| **Qwen Code** | 通义生态 + SDK 平台化 | 国内企业、IM 集成（WeCom）、渠道自动化 | 双 SDK + CLI 控制处理器同步演进；channels 生态独树一帜 |
| **DeepSeek TUI / CodeWhale** | 多模型路由 + 子代理工作流 | 高级 TUI 用户、多模型实验者 | v0.9.0 WhaleFlow 工作流引擎、子代理可观测性、stopship 章程化治理 |
| **Kimi Code CLI** | 月之暗面生态入口（当前低调期） | Figma/设计协作场景的潜在用户 | 单日数据样本有限，难以判断主线方向 |

**核心差异化洞察**：
- **平台型**（Qwen Code、Claude Code）→ 重视 SDK 与企业集成
- **生态型**（Copilot CLI、Gemini CLI）→ 受限于父平台 OAuth/凭据体系
- **架构型**（OpenCode、Pi）→ 主打 provider 抽象与扩展能力
- **工作流型**（DeepSeek TUI）→ 主打多 Agent 编排与可观测性
- **回归型**（Claude Code v2.1.204、OpenCode v1.17.15）→ 同样面临"刚发布即回归"的发布节奏问题

---

## 5. 社区热度与成熟度

| 成熟度档位 | 工具 | 关键指标 |
|-----------|------|---------|
| **🔴 高热度但响应失衡** | Claude Code、Copilot CLI | 头部 issue（#41506、#53）长期发酵、PR/Issue 比 ≤0.04 |
| **🟢 高活跃 + 高代码响应** | OpenCode、Qwen Code、Pi | 单日 PR ≥23，版本节奏稳定（OpenCode 50 PR/22 Issues；Qwen Code 50 PR/6 Issues） |
| **🟡 中活跃度** | Gemini CLI、DeepSeek TUI | 持续修复中，P1 大多与认证/平台体验相关 |
| **⚪ 静默期** | Kimi Code CLI | 单日 1 Issue / 0 PR，需要更长周期数据判断 |

**最活跃 Issue（社区影响力 Top 5）**：
1. OpenCode **#20695 Memory Megathread** — 108 评论 / 82 👍
2. Copilot CLI **#53 "Bring back CLI commands"** — 👍75 / 💬37（6 个月未官方回应）
3. Claude Code **#41506 Max Plan token 激增** — 54 评论 / 26 👍
4. Claude Code **#73365 Fable 5 advisor 不可用** — 👍31
5. Pi **#3896 TUI 失焦光标** — 👍7

> **健康度信号**：Copilot CLI 的 #53 已经催生社区自建替代项目 `shell-ai`，是项目治理的负面参考；Claude Code 的 #41506 持续 3 个月，反映付费用户与计费口径之间的张力正在积累。

---

## 6. 值得关注的趋势信号

### 📈 信号一：发布即回归成为行业级问题
Claude Code v2.1.204、OpenCode v1.17.15、Gemini CLI 0.36.x 均出现"刚发布即爆回归"的模式。**对开发者的启示**：生产环境建议保留至少前 1 个 minor 版本的回滚路径，并跟踪 issues 中"regression cluster"标签。

### 📈 信号二：成本透明度进入"信任战"阶段
Claude Code #41506 三个月累积 54 条评论 + 26 👍，反映出**订阅制 + 自家模型 + 复杂 agent** 这三者结合后，用户对"消耗 vs 配额"的可见性诉求已成为头部产品的下一道护城河。Pi #6326（custom_message 绕过 compaction）也间接说明**token 预算控制**正在成为工具可信度的核心

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-08 | 数据源：anthropics/skills**

---

## 一、热门 Skills 排行（Top PRs）

> 注：原数据中 PR 评论数（`undefined`）与点赞数（`👍: 0`）均未提供，下文热度基于"关联 Issue 评论量、PR 更新活跃度、问题跨 PR 复现次数"综合推断。

### 🔥 1. skill-creator 系列修复（run_eval.py 0% recall 问题簇）
**核心 PR：#1298 · #1323 · #1099 · #1050 · #1061 · #1169**

- **状态**：全部 OPEN
- **热度**：🔥🔥🔥🔥🔥（**社区第一热点**）
- **讨论焦点**：用户报告 `run_eval.py` 对所有 skill description 都报告 `recall=0%`，导致 `run_loop.py` / `improve_description.py` 的描述优化循环完全失效（issue #556 收到 12 条评论、7 赞；issue #1169 复现了"连字面 slash-command 查询也触发不了"）。
- **根因**：Windows 子进程管道读取阻塞（`[WinError 10038]`）、`PATHEXT` 未生效（`claude.cmd` 找不到）、`cp1252` 编码、UTF-8 多字节字符 panic，以及 trigger detection 逻辑在第一个非 Skill 工具调用后就 bail。
- **链接**：[#1298](https://github.com/anthropics/skills/pull/1298) · [#1323](https://github.com/anthropics/skills/pull/1323) · [#1099](https://github.com/anthropics/skills/pull/1099)

### 2. document-typography skill —— AI 生成文档的排印质量控制
- **作者**：PGTBoos · **PR**：[#514](https://github.com/anthropics/skills/pull/514) · **状态**：OPEN
- **功能**：防止 orphan（单词溢出）、widow（孤行页眉）、编号错位等 AI 生成文档的常见排版缺陷。
- **讨论焦点**："Every document Claude generates" 都有此类问题，是高复用的横切需求；与 #210（frontend-design）形成"前端 + 文档"的质量闭环。

### 3. ODT skill —— OpenDocument 文本创建与模板填充
- **作者**：GitHubNewbie0 · **PR**：[#486](https://github.com/anthropics/skills/pull/486) · **状态**：OPEN
- **功能**：覆盖 `.odt / .ods / .odf`，包括创建、模板填充、ODT→HTML 转换。
- **讨论焦点**：补齐 open-source / ISO 标准格式的拼图，对接 LibreOffice 生态；与 #538、#541 同属 document-skills 系列，集中体现了社区对"非 Microsoft 文档格式"的扩展诉求。

### 4. testing-patterns skill —— 全栈测试模式
- **作者**：4444J99 · **PR**：[#723](https://github.com/anthropics/skills/pull/723) · **状态**：OPEN
- **功能**：Testing Trophy 模型、单元/React 组件/E2E/契约测试的统一指引。
- **讨论焦点**：纯工程师刚需，是 dev workflow 类的代表；社区在 #202（skill-creator 应更新到 best practice，CLOSED）中明确要求所有 skill 都要"实践当前最佳实践"，testing-patterns 是首个明确以此自我要求的新 skill。

### 5. self-audit skill —— 交付前的机械验证 + 四维推理质量门（v1.3.0）
- **作者**：YuhaoLin2005 · **PR**：[#1367](https://github.com/anthropics/skills/pull/1367) · **状态**：OPEN
- **功能**：Step 0 机械校验文件存在性、Step 1 按 damage-severity 优先级做四维推理审计。号称"通用，任何技术栈、任何模型"。
- **讨论焦点**：与 #83（quality/security analyzer）同属"meta-skill"赛道，反映社区开始系统性思考"如何审计 AI 自己的产出"。

### 6. quality + security analyzer 双件套
- **作者**：eovidiu · **PR**：[#83](https://github.com/anthropics/skills/pull/83) · **状态**：OPEN
- **功能**：5 维度结构质量评估 + 安全扫描。
- **讨论焦点**：与 #492（社区 skill 冒充官方 `anthropic/` 命名空间，**34 条评论最高**）直接呼应，security-analyzer 被视为缓解信任边界滥用的基础设施。

### 7. color-expert skill —— 色彩命名体系与色彩空间指南
- **作者**：meodai · **PR**：[#1302](https://github.com/anthropics/skills/pull/1302) · **状态**：OPEN
- **功能**：ISCC-NBS、Munsell、XKCD、RAL、CSS 命名 + 何时用 OKLCH/OKLAB/CAM16。
- **讨论焦点**：来自设计社区的专业贡献，代表 Skills 生态从"工程向"向"专业领域知识"的扩展。

### 8. sensory skill —— 通过 AppleScript 做原生 macOS 自动化
- **作者**：AdelElo13 · **PR**：[#806](https://github.com/anthropics/skills/pull/806) · **状态**：OPEN
- **功能**：用 `osascript` 替代截图式 computer-use，两级权限分级。
- **讨论焦点**：与 #29（Bedrock 兼容性，4 条评论）一起体现了社区对"Claude Code 跨平台 / 跨云"执行能力的诉求。

---

## 二、社区需求趋势（Issues 提炼）

按 Issue 评论数排序后提炼的诉求：

| 排名 | 诉求方向 | 代表 Issue | 评论数 | 关键洞察 |
|---|---|---|---|---|
| 1 | **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **34** | 社区强烈呼吁解决"community skill 在 anthropic/ 命名空间下冒充官方"的供应链信任问题 |
| 2 | **企业级分发** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | Claude.ai 缺少 org-wide skill 共享，只能手工下载 .skill 文件传 Slack |
| 3 | **核心工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | skill-creator 的描述优化循环完全失效（recall=0%） |
| 4 | **数据完整性** | [#62](https://github.com/anthropics/skills/issues/62) | 10 | 用户自定义 skill 莫名消失，缺少备份与恢复机制 |
| 5 | **Agent 元能力** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 提议 compact-memory：用符号化记法压缩长时 agent 状态 |
| 6 | **跨平台 / 跨云** | [#29](https://github.com/anthropics/skills/issues/29), [#1061](https://github.com/anthropics/skills/issues/1061) | 4+3 | Windows 与 AWS Bedrock 上的可用性问题 |
| 7 | **协议层互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 把 Skills 暴露为 MCP，统一 AI 软件的 API 信号 |
| 8 | **企业内容安全** | [#1175](https://github.com/anthropics/skills/issues/1175)（CLOSED） | 4 | 在 SKILL.md 内嵌 ACL 是否会污染上下文窗口 |

**核心趋势**：社区需求从"加更多 skill"转向"加更好的基础设施"——**安全、跨平台、企业分发、agent 元能力**四大方向已成共识。

---

## 三、高潜力待合并 Skills（OPEN + 议题热度高）

| Skill | PR | 近期合并概率 | 理由 |
|---|---|---|---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | ⭐⭐⭐⭐ | 横切痛点明确，复用面广，与 frontend-design #210 互补 |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | ⭐⭐⭐⭐ | 补齐 open-format 缺口，与 docx/pdf 系列 #538、#541 同期活跃 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | ⭐⭐⭐⭐ | 工程师刚需，结构完整，符合 skill-creator 整改方向 |
| **quality + security analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | ⭐⭐⭐⭐⭐ | 与 #492（最高热度 issue）正面对接，是安全治理的关键拼图 |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | ⭐⭐⭐⭐⭐ | 社区健康分仅 25%，合并阻力最小 |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | ⭐⭐⭐ | 设计社区垂直贡献，依赖评审对设计类 skill 的接受度 |
| **self-audit v1.3.0** | [#1367](https://github.com/anthropics/skills/pull/1367) | ⭐⭐⭐ | 与 #83 重叠，需先看官方 meta-skill 战略 |
| **skill-creator run_eval 修复簇** | [#1298](https://github.com/anthropics/skills/pull/1298), [#1323](https://github.com/anthropics/skills/pull/1323) | ⭐⭐⭐⭐⭐ | 是描述优化功能的前提，6+ PR 在抢同一根因，官方应尽快合并其中一支主干 |

---

## 四、Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"Skills 自身的工程化与治理"——半数以上高热议题指向 skill-creator 工具链的可靠性、跨平台兼容性、以及 community skill 在 `anthropic/` 命名空间下的安全信任边界，社区正从"贡献更多 skill"转向"建设 skill 生态的基础设施"。**

---

# Claude Code 社区动态日报

**日期：2026-07-08** | **数据来源：github.com/anthropics/claude-code**

---

## 📌 今日速览

今日社区焦点集中在 **v2.1.204 发布后引发的回归问题** 上——`claude --resume` / Agents View 在 macOS 与 WSL2 上出现键盘输入无响应甚至终端冻结，直接影响核心工作流。同时，**Max 订阅用户的 token 消耗异常（3–5 倍）** 仍是累积三个月的高关注议题，今日再有新投诉入场；自动模式（Auto Mode）的安全分类器可用性问题继续高频出现。文档侧仅 2 个 PR 提交，整体节奏偏维护。

---

## 🚀 版本发布

### v2.1.204（2026-07-08）
- **修复**：SessionStart hook 在无头（headless）会话下不再因事件流中断导致远端 worker 被 idle-reaped。

### v2.1.203（2026-07-07）
- **新增**：登录态即将过期前主动告警，避免后台会话被中断；
- **新增**：手动权限模式下底栏新增灰色 ⏸ 标识，活跃模式常驻可见；
- **新增**：会话内的「额外工作目录」（additional working directories）展示。

> ⚠️ **注意**：v2.1.204 发布后已收到多条回归报告，集中在 `--resume` / Agents View 交互冻结（见下文章节）。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 评论 | 👍 | 重要性 |
|---|---|---|---|---|
| **#41506** | Max Plan token 用量自 3/28 起无配置变更激增 3–5 倍 | 54 | 26 | ⭐⭐⭐ 三个月持续发酵的高优先级成本议题，跨平台、跨用户，影响付费体验与计费信任 |
| **#73365** | Fable 5 advisor（Opus 4.8 主线）在 v2.1.198 全会话"不可用" | 12 | **31** | 👍 数最高，开发者已用无效 upvote 表达对长期不可用模型的强烈不满 |
| **#74066** | Enterprise ZDR workspace 出现会话/缓存跨账号泄漏（疑似安全风险） | 17 | 0 | 标记为 `area:security`，即便 👍 为 0 也需要 Anthropic 安全团队优先核查 |
| **#63819** | Auto mode classifier（opus-4-8）持续不可用，Bash/Write/Edit 全阻断 | 13 | 18 | 自动模式安全分类器的反复不可用正成为生产力瓶颈，与 #38618/#75517 同源 |
| **#39678** | Claude Code Review 在 $0/$250 时误报「超限」 | 17 | 13 | 影响 CI/团队使用 Code Review，状态长期不修复 |
| **#47327** | Windows 11 Pro x64 上 Cowork tab 被标 `unsupported`（自 3 月以来） | 18 | 3 | Windows 桌面端核心功能长期残废，用户体验被忽视 |
| **#61021** | VS Code 终端内 Claude Code 无法用左键拖选 + Ctrl+C 复制文本 | 10 | 7 | TUI 选区交互回归，开发者日常复制操作受阻 |
| **#42765** | OAuth `redirect_uri` 使用 `localhost` 而非 `127.0.0.1`，违反 RFC 8252 §7.3 | 6 | 17 | 有复现路径的协议合规问题，对企业/移动网络环境会直接失败 |
| **#74803** | "什么都没改，token 烧得比以前快"（与 #41506 同源趋势） | 7 | 4 | 又一例成本异常投诉，进一步证明问题非个案 |
| **#75513 / #75497 / #75521 / #75496**（v2.1.204 回归簇） | `--resume` 与 Agents View 在 macOS / WSL2 键盘无响应或终端冻结（4 个新 issue 于今日创建） | 1–4 | 0–1 | **当务之急**——最新版本直接打残主流程，应优先 hotfix |

> 完整链接：
> - [#41506](https://github.com/anthropics/claude-code/issues/41506)
> - [#73365](https://github.com/anthropics/claude-code/issues/73365)
> - [#74066](https://github.com/anthropics/claude-code/issues/74066)
> - [#63819](https://github.com/anthropics/claude-code/issues/63819)
> - [#39678](https://github.com/anthropics/claude-code/issues/39678)
> - [#47327](https://github.com/anthropics/claude-code/issues/47327)
> - [#61021](https://github.com/anthropics/claude-code/issues/61021)
> - [#42765](https://github.com/anthropics/claude-code/issues/42765)
> - [#74803](https://github.com/anthropics/claude-code/issues/74803)
> - [#75513](https://github.com/anthropics/claude-code/issues/75513) · [#75497](https://github.com/anthropics/claude-code/issues/75497) · [#75521](https://github.com/anthropics/claude-code/issues/75521) · [#75496](https://github.com/anthropics/claude-code/issues/75496)

---

## 🛠️ 重要 PR 进展

过去 24 小时仅有 **2 个 PR 更新**，且均为文档类，代码层活跃度为零——这与上面集中爆发的回归问题形成鲜明对比，**社区显然正在等待 hotfix**。

| PR | 类型 | 内容 | 链接 |
|---|---|---|---|
| **#73476** | docs | README 中 "Github" → "GitHub" 大小写修正，与同文件其它写法保持一致 | [PR #73476](https://github.com/anthropics/claude-code/pull/73476) |
| **#75252** | docs | 阐明插件内的 `mcpServers` 配置（插件自带 MCP 服务器定义）与 `~/.claude.json` 中的用户级 MCP allow/deny 列表是两套独立机制（此次为原 PR 因源仓库被删后的重开版本） | [PR #75252](https://github.com/anthropics/claude-code/pull/75252) |

> 💡 观察：文档 PR #75252 间接回应了 [#74612](https://github.com/anthropics/claude-code/issues/74612) 等关于"项目级插件在 VS Code 扩展里被静默忽略"的反馈，说明 Anthropic 至少在文档层面承认了 MCP 配置的作用域语义存在歧义。

---

## 📈 功能需求趋势（基于 24h 全部 50 条 Issue）

按主题归类与"今日新增/重讨论"热度排序：

1. **成本可视化与稳定性（最热）** — 至少 6 条以上，涉及 Max 用量激增、Cost Review 误报、session-limit 误触发、单会话成本异常。社区强烈需要**真实消耗 vs 计划配额**的明确口径。
2. **Auto Mode / 安全分类器可靠性** — 多源 issue（#63819、#38618、#75517）持续指向"classifier temporarily unavailable"全工具阻断，呼吁**降级路径或手动 bypass**。
3. **TUI / 终端渲染稳定性** — `--resume` 冻结、Agents View 键盘无响应、iTerm2 long-session 重绘漂移、Windows 鼠标追踪泄漏、macOS 焦点丢失等，集中在 v2.1.143 → v2.1.204 之间的回归带。
4. **IDE 集成完整性** — JetBrains/Rider（#75498 WSL 路径序列化错误）、VS Code 扩展（#74612 插件作用域、#61021 文本选区）暴露出 IDE 适配的边角缺陷。
5. **模型可用性 & 新版本** — Opus 4.8 / Fable 5 相关 issue 集中（#63819、#73365、#75517），"发布即不可用"模式让用户对模型灰度节奏信心下降。
6. **MCP Connector 健康度** — Zoho Books (`doc` 应为 multipart 实际传 query)（#75502）显示官方维护的连接器仍存在协议级缺陷。
7. **Cybersecurity 安全过滤误报** — 4 条几乎同模板的 `[Bug][cyber]` 在 2026-07-08 集中创建（#75491/#75503/#75504/#75506），均为授权研究被 session-halted，反映 `Opus 4.8` 的 cyber 启发式过严。

---

## 🧑‍💻 开发者关注点与痛点

- **"为什么我的 token 没了？"成为头号心结**：订阅价格清晰但实际消耗不透，明显挫败感源于对比上月。
- **核心快捷路径被回归打残**：`claude --resume` / Agents View 失效让"上下文留续"承诺失真，开发者需要立即可用的 hotfix。
- **模型灰度与发布节奏脱节**：Fable 5 / Opus 4.8 在 auto mode 中频繁被自身 safety gate 拒绝，导致"自家模型自家调"现象（#75517 用 "Self-caged" 一词），开发者希望出现**稳定 baseline** 而非持续滚动可用性。
- **官方 MCP 维护责任归属模糊**：Zoho Books 类 bug 暗示用户在为 1st-party connector 的质量买单，缺乏 SLA。
- **企业级安全预期**：ZDR workspace 出现会话内容跨账号泄漏的怀疑（#74066）一旦证实，将动摇企业采购底线。
- **可复现路径普遍规范**：今日新 issue 多数附带 `claude --version`、平台、复现步骤，环境信息完整度较高，开发者对参与 debug 持开放态度——给官方节省 triage 成本。

---

*日报生成于 2026-07-08，基于 github.com/anthropics/claude-code 公开数据。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>



</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-08** ｜ 数据来源：google-gemini/gemini-cli

---

## 📌 今日速览

今日社区焦点集中在 **账户与认证问题**（Pro/Ultra 订阅识别、WSL/MacOS 凭据损坏、VPN 限速）以及 **Caretaker Agent 三件套**（#28306/#28303/#28307）的快速迭代。此外，过去 24 小时无新版本发布，但底层 OAuth、JSON/IPYNB 文件写入、隐私提示等修复持续推进。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** 仓库最新关注点仍停留在 v0.36.x 系列，问题列表中多条 Issue 仍以旧版本为复现环境。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 / 区域 | 关键看点 |
|---|---|---|---|
| [#23973](https://github.com/google-gemini/gemini-cli/issues/23973) | Pro 账户被识别为 standard-tier | P2 / Enterprise | **评论 11 条**。Google AI Pro 订阅在 CLI 中降级为标准层，多个 Pro 用户受影响，疑似 OAuth 端 tier 判定异常。 |
| [#25672](https://github.com/google-gemini/gemini-cli/issues/25672) | Agent 过度扫描整个工程导致简单 patch 失败 | P2 / Agent | **评论 9 条**。修补 Go 源码会触发全工作区扫描、cgo、漏洞检查，编辑体验极差，agent 上下文策略问题。 |
| [#24835](https://github.com/google-gemini/gemini-cli/issues/24835) | MacOS Tahoe 26.3.1 + v0.36.0 重复报"凭据损坏" | P1 / Enterprise | **评论 6 条**。ZDR API Key 每日都需重新输入，企业用户工作流受阻。 |
| [#23848](https://github.com/google-gemini/gemini-cli/issues/23848) | v0.35/0.35.1 在 Ubuntu WSL 上认证失败 | P1 / Enterprise | **评论 6 条**。升级后 Google 账户登录失败，清除配置后仍报错。 |
| [#19344](https://github.com/google-gemini/gemini-cli/issues/19344) | `read_file` 20MB 限制未文档化 | P3 / Documentation | **评论 6 条**。用户踩坑后才知限制，建议补 `docs/tools/file-system.md`。 |
| [#23085](https://github.com/google-gemini/gemini-cli/issues/23085) | `readManyFiles` 忽略 `.gitignore` | P2 / Documentation | **评论 6 条**。`includeDirectories` 中的被 gitignore 文件仍被读取，存在隐私/性能风险。 |
| [#24142](https://github.com/google-gemini/gemini-cli/issues/24142) | `spawnSync sysctl ENOENT` 启动崩溃 | P1 / Core | **评论 5 条**。macOS Intel + Node v25 环境下安装后立即崩溃。 |
| [#24692](https://github.com/google-gemini/gemini-cli/issues/24692) | Inner session 错误进入 plan mode | P2 / Agent | **评论 5 条 + 👍1**。子会话不应被升级为 plan mode，影响自动化流。 |
| [#23926](https://github.com/google-gemini/gemini-cli/issues/23926) | Windows 初始化时弹出副终端，关闭导致安装中断 | P1 / Core | **评论 4 条**。升级流程 UX 严重混乱，Windows 平台首因体验问题。 |
| [#24673](https://github.com/google-gemini/gemini-cli/issues/24673) | 权限问题恢复后再次复发 | P1 / Enterprise | **评论 4 条 + 👍3**（本期最高赞）。Pro 账户反复遭遇 429 限流闭环。 |

> 延伸关注：#24112（Google AI Ultra OAuth 不识别，👍2）、#24062（VPN 下访问极慢，4 条评论）、#25837（[安全] 提议在 API 发送前做密钥预扫描，3 条评论）、#23497（CLI 仍会破坏用户代码，P1）。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) | `fix(privacy)` 无 Code Assist tier 时给出清晰提示 | 🟢 OPEN | 解决 Workspace / OAuth 无 tier 账户执行 `/privacy` 暴露原始后端报错的问题。 |
| [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) | `feat(caretaker-triage)` 主 worker 执行循环 | 🟢 OPEN | Caretaker Triage Worker 的 Cloud Run Job 主循环 + Pub/Sub egress publisher。 |
| [#28307](https://github.com/google-gemini/gemini-cli/pull/28307) | `feat(caretaker-triage)` LLM 编排 + GCS debug log | 🔴 CLOSED | 基于 Antigravity SDK 的 triage orchestrator，配套 Dockerfile 与端到端测试。 |
| [#28303](https://github.com/google-gemini/gemini-cli/pull/28303) | `feat(caretaker-egress)` Octokit GitHub Action handler | 🔴 CLOSED | 自动化 issue 评论与 label 分配，Egress 服务第二部分。 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | `feat(evals)` 工具调用时间线与失败摘要 | 🟢 OPEN | 评测失败时自动打印编号化工具调用轨迹，加速定位 agent 行为问题。 |
| [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) | `fix(core-tools)` JSON/IPYNB 文件绕过 LLM 纠错 | 🟢 OPEN | 解决 `write_file`/`replace` 对 `.ipynb` 与 `.json` 的破坏性写入。 |
| [#28224](https://github.com/google-gemini/gemini-cli/pull/28224) | `fix(cli)` 截断显示字符串时不切断 emoji | 🟢 OPEN | 修复 `sanitizeForDisplay` 在代理对中间截断产生乱码（多语言显示问题）。 |
| [#28219](https://github.com/google-gemini/gemini-cli/pull/28219) | `fix(cli)` 解析带注释的 `settings.json` | 🟢 OPEN | 父进程读取 `~/.gemini/settings.json` 不再因 JSONC 注释回退默认配置。 |
| [#28112](https://github.com/google-gemini/gemini-cli/pull/28112) | `fix(mcp)` OAuth 元数据发现加 SSRF 防护 | 🔴 CLOSED | 对齐 `web-fetch.ts` 的 `isLoopbackHost` / DNS 校验，补齐 MCP OAuth SSRF 缺口。 |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | `fix(core)` OAuth 令牌交换时禁用 keep-alive 复用 | 🔴 CLOSED | 规避 **CVE-2026-48931** 在 Node 24.17.0 / 22.23.0 / 26.3.x 触发的 "Premature close"。 |

> 其他值得跟踪：#27200（Windows 扩展更新时重试目录清理）、#28244（policy-engine 文档用安全命令代替 `rm -rf /`）、#28169（新增 `eval:coverage` 命令）、#27971（`fix(core)` 清理历史中的 thought 泄漏，解决 agent 无限 monologue 循环）。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 提炼，社区诉求呈现以下几大方向：

1. **企业 / 订阅识别链路（最集中）** — Pro/Ultra OAuth 鉴权、Code Assist tier 判定、ZDR 凭据损坏；本周 P1 Issue 中近半数与之相关。
2. **平台 / 安装体验** — Windows 升级 UX、macOS Intel + Node 25 启动崩溃、WSL 认证失败、Linux/PowerShell 命令风格混淆。
3. **Agent 行为可控性** — 过度扫描、Inner session 错入 plan mode、子 agent 上下文泄漏、Stuck "Thinking..." 15 小时、压缩上下文失败。
4. **新模型与配额** — Gemini 2.5 老模型回退、Flash quota 误触发、缺少 Gemini 3 切换入口。
5. **安全与隐私** — 凭据预扫描（#25837）、OAuth SSRF 防护、Code Assist tier 文案。
6. **评测与可观测性** — `eval:coverage`、tool-call 失败时间线（PR #28305）、runner 环境基线测试。

---

## 👨‍💻 开发者关注点（高频痛点）

- **认证是头号痛点**：Pro/Ultra tier 错判、ZDR 凭据损坏、WSL/Windows 升级后失联几乎霸占本期 P1 列表；#24673 一条 Issue 拿到 3 个 👍 反映用户对"权限反复失效"已忍无可忍。
- **代码破坏性写入仍未根治**：#23497（CLI 仍在删代码）、#28223（JSON/IPYNB 被 LLM 纠错破坏）共同指向 `write_file`/`replace` 在结构化文件上的鲁棒性问题。
- **上下文与资源管理**：长任务卡死、Stuck in "Thinking..." 15 小时、压缩失败导致 200% 上下文——agent 长时间运行的可恢复性是新的痛点带。
- **跨平台细节**：emoji 截断、PowerShell vs Linux 命令、`.gitignore` 失效——这些"小坑"在多语种/多 OS 团队中影响广泛。
- **Caretaker Agent 引发关注**：Egress + Triage Worker 一周内连续合入 3 个 PR（#28163 / #28303 / #28307 / #28306），社区开始关注"AI 自我维护仓库"这条新管线。

> 建议关注：若企业用户在 Pro/Ultra 上反复触发 429，可参照 #24062 暂时关闭 VPN 验证是否缓解；同时关注 PR #28304 合入后 `/privacy` 提示的清晰度提升。

---

*本日报基于 2026-07-08 当日 Issues/PRs 公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**📅 2026-07-08** | 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

- **v1.0.69 与 v1.0.69-3 双版本发布**，聚焦沙箱策略升级与插件生态管理，新增 `/plugins` 仪表盘和 `web_fetch` 沙箱网络策略控制。
- **社区活跃度激增**：24 小时内 29 个 Issue 更新，多个高优先级 Bug（Windows 兼容性、TUI 卡死、IPv4 网络失败）被密集报告。
- **核心痛点持续发酵**：长期高赞 Issue #53（"恢复 CLI 命令"）仍无官方回应，社区已出现自建替代项目 `shell-ai` 的呼声。

---

## 2. 版本发布 🚢

### [v1.0.69](https://github.com/github/copilot-cli/releases) — 2026-07-07

**核心变更：**

| 类别 | 变更内容 |
|------|---------|
| 🔐 沙箱策略 | 内置文件编辑标签从 `(sandboxed)` 改为 `(sandbox policy)`，准确反映"尽力遵循"语义 |
| 🔌 插件体验 | **无需重启会话**即可重载已安装的插件扩展 |
| 📊 插件管理 | 新增 `/plugins` 仪表盘，集中管理插件 |

### [v1.0.69-3](https://github.com/github/copilot-cli/releases) — 增量更新

- **✅ 内置文件编辑可绕过沙箱**：经用户批准后允许执行
- **🌐 `web_fetch` 网络策略**：遵循当前沙箱网络策略（拒绝违规出站/本地域），通过 `sandbox.allowBypass` 启用一次性绕过审批

> 💡 这一版本延续了近期"安全控制精细化"的路线，赋予用户在沙箱与功能可用性之间的明确选择权。

---

## 3. 社区热点 Issues 🔥

### 🏆 高影响力 / 长期悬而未决

**1. [#53 Bring back the GitHub Copilot in the CLI commands](https://github.com/github/copilot-cli/issues/53)** — `OPEN` | 👍 75 | 💬 37
> 6 个月无官方回应，社区已分叉自建 [`shell-ai`](https://github.com/Deltik/shell-ai)。**该 Issue 是仓库历史最高赞**，反映用户对 GitHub 沉默的强烈不满。

**2. [#2643 preToolUse: silent command rewrite via updatedInput](https://github.com/github/copilot-cli/issues/2643)** — `OPEN` | 👍 2 | 💬 12
> Hook 改写命令后仍强制弹确认框，`permissionDecision: allow` 失效。影响自动化工作流。

### 🐛 新近报告的严重 Bug

**3. [#4053 TUI hangs at 'Loading: N skills' on NFS/GPFS](https://github.com/github/copilot-cli/issues/4053)** — `OPEN` | 新增
> Tokio 启动 `which gh` 时 30+ 并发线程触发 SIGCHLD 竞争。NFS/GPFS 环境下 TUI 永久卡死。**已影响生产环境稳定性**。

**4. [#4054 /resume broken for all non-git sessions](https://github.com/github/copilot-cli/issues/4054)** — `OPEN` | 新增
> 非 Git 仓库会话的 `repository = '/'` 导致恢复选择器完全无法选中——经典的 Catch-22。

**5. [#4041 web_fetch tool fails on all URLs (TypeError: fetch failed) in IPv4-only sandbox](https://github.com/github/copilot-cli/issues/4041)** — `OPEN` | 新增
> IPv4-only 沙箱环境中 `web_fetch` 全量失败，含 example.com 等基础站点。**与 v1.0.69-3 的 `web_fetch` 沙箱策略变更可能存在关联**，建议关注。

**6. [#4001 .claude/settings.json hooks fail on Windows](https://github.com/github/copilot-cli/issues/4001)** — `OPEN` | 💬 3
> Windows 平台 Hook 通过 PowerShell 执行（而非 bash），且 `$CLAUDE_PROJECT_DIR` 未设置，导致 Claude Code 兼容的 hooks 全部失败-关闭。

**7. [#3954 explore tool hardcodes model to gpt-5.4-mini](https://github.com/github/copilot-cli/issues/3954)** — `OPEN`
> v1.0.65+ 升级后 `explore` 工具忽略 DeepSeek 等自定义 API 配置，强制传 `gpt-5.4-mini`。影响 BYOK 用户的核心功能。

**8. [#3123 /research can't write its research report](https://github.com/github/copilot-cli/issues/3123)** — `OPEN` | 👍 5
> 研究完成后调用 `create` 工具写入报告失败，提示工具不可用。**Agent 能力存在功能缺口**。

**9. [#3604 Copilot changes Windows 1252 encoded files to UTF-8](https://github.com/github/copilot-cli/issues/3604)** — `OPEN`
> 破坏遗留代码库的字符编码，每次保存后还得用脚本手动回滚。

**10. [#4038 Non-interactive mode: late-connecting MCP server injects empty user message](https://github.com/github/copilot-cli/issues/4038)** — `OPEN`
> `copilot -p` 模式下 MCP 工具 ≥7 个时，CLI 注入空用户消息，模型回显系统提示而非回答真实 Prompt。

### 📌 值得关注的辅助条目

- [#4056](https://github.com/github/copilot-cli/issues/4056) 项目级扩展 Canvas 未被 `open_canvas` 路由
- [#4049](https://github.com/github/copilot-cli/issues/4049) Docker stdio MCP 服务 `/new`、`/resume` 重复实例化（v1.0.68）
- [#4035](https://github.com/github/copilot-cli/issues/4035) Voice installer 错误访问私有 Azure Artifacts 触发 401

---

## 4. 重要 PR 进展 🔧

> ⚠️ **过去 24 小时内无新 PR 更新**。这与 Issue 高活跃度形成对比，可能预示：
> - 维护团队精力集中在问题响应而非功能开发
> - 贡献者可能正在等待 v1.0.69 系列稳定后再发起变更
>
> 建议读者关注后续 PR 动向，必要时主动 Fork 修复高频 Bug（如 #4053、#4054、#4041）。

---

## 5. 功能需求趋势 📈

通过对 29 个 Issue 的归类分析，社区需求呈现以下五大方向：

| 方向 | 代表性 Issue | 热度 |
|------|-------------|------|
| **🔌 插件 / 扩展生态** | #4042（交互式输入变量）、#4048（仓库级插件 Skill）、#4056（Canvas 路由） | ⭐⭐⭐⭐ |
| **🪝 Hook 与自动化** | #2643（静默改写）、#4001（Windows 兼容） | ⭐⭐⭐⭐ |
| **🔐 沙箱与安全策略** | v1.0.69 系列 + #4046（跨平台系统需求） | ⭐⭐⭐⭐ |
| **🤖 自定义模型 / BYOK** | #3954（模型硬编码）、#4037（ACP 模式 BYOK） | ⭐⭐⭐ |
| **🌐 跨平台一致性** | #4001（Windows hooks）、#3604（编码） | ⭐⭐⭐ |

> 💡 **趋势洞察**：插件生态已从"能用"进入"精细化"阶段，沙箱策略仍是核心矛盾点；BYOK 在 IDE 集成场景下的诉求（JetBrains ACP）正在上升。

---

## 6. 开发者关注点 💭

### 🎯 高频痛点

1. **稳定性与并发问题**：`#4053` 暴露了 Tokio 在 NFS/GPFS + 大量并发子进程下的脆弱性，是企业级部署的隐性炸弹。

2. **平台碎片化**：Windows 在 Hook 执行环境（PowerShell vs bash）和文件编码（Windows 1252 → UTF-8）上持续落后于 macOS/Linux。

3. **"静默控制"诉求强烈**：开发者希望工具/Agent 行为更可编程——例如 Hook 改写不弹窗、MCP 服务自动去重、`/resume` 不要硬性 Git 限制。

4. **沙箱可用性边界**：`#4041` 揭示 v1.0.69-3 的 `web_fetch` 策略变更可能在 IPv4-only 场景下直接导致工具不可用。安全与功能如何平衡仍是争议焦点。

5. **官方响应慢**：Issue #53 的 6 个月沉默催生社区自建工具 `shell-ai`，这是项目健康度的负面信号。

### 🚀 新兴机会

- **JetBrains ACP 集成**（[#4037](https://github.com/github/copilot-cli/issues/4037)）打开 IDE 厂商协同空间
- **Voice 模式**（[#4035](https://github.com/github/copilot-cli/issues/4035)）已发布但安装链路存缺陷
- **Worktree 分支命名**（[#4044](https://github.com/github/copilot-cli/issues/4044)）已有 UI 但缺 API 暴露

---

## 📊 数据快照

| 指标 | 数值 |
|------|------|
| 24h 更新 Issue | 29 |
| 24h 更新 PR | 0 |
| 本周新发版本 | 2 (v1.0.69, v1.0.69-3) |
| 最高赞 Issue | #53 (👍 75) |
| 新增 Bug 报告 | ≥10 |

---

*本日报由 AI 自动生成，数据截至 2026-07-08。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：** 2026-07-08
**数据来源：** GitHub MoonshotAI/kimi-cli

---

## 1. 今日速览

今日 Kimi Code CLI 仓库社区动态相对平静，过去 24 小时内仅有 1 条 Issue 被更新，无新版本发布，无新 PR 提交。唯一活跃的讨论仍然围绕 **Figma MCP 集成支持**（#1604），开发者期待官方推出更便捷的注册流程。当前社区的诉求方向集中在**第三方工具集成**与**模型上下文协议（MCP）扩展能力**上。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。建议关注仓库的 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 3. 社区热点 Issues

由于今日仅 1 条 Issue 更新，以下为综合过去 24 小时最值得关注的 Issue：

| # | Issue 编号 | 标题 | 状态 | 关注点 |
|---|-----------|------|------|--------|
| 1 | [#1604](https://github.com/MoonshotAI/kimi-cli/issues/1604) | Figma MCP Support | OPEN | 唯一活跃 Issue，2 个 👍，1 条评论。开发者希望简化 Figma MCP 的注册流程，提升设计协作体验。 |

**详情说明：**

**🥇 #1604 Figma MCP Support**（创建于 2026-03-27，更新于 2026-07-07）
- **重要性**：作为唯一在过去 24 小时被更新的 Issue，反映出 Figma 设计师群体对 Kimi CLI 的集成期待。
- **社区反应**：获得 2 个点赞与 1 条评论，属于有一定热度的功能请求。
- **关键诉求**：Figma MCP 当前需要预注册流程，开发者希望官方提供开箱即用的支持。
- **链接**：[https://github.com/MoonshotAI/kimi-cli/issues/1604](https://github.com/MoonshotAI/kimi-cli/issues/1604)

> 📌 *注：其他历史热点 Issue 未在过去 24 小时内更新，因此本日报仅纳入最新活跃条目。*

---

## 4. 重要 PR 进展

⚠️ 过去 24 小时内**无新增或更新的 Pull Request**。建议查看仓库的 [Pull Requests 页面](https://github.com/MoonshotAI/kimi-cli/pulls) 了解进行中的代码贡献动态。

---

## 5. 功能需求趋势

基于今日 Issue 数据，社区关注的功能方向较为集中：

### 🔌 第三方工具集成（MCP 生态）
- **核心诉求**：扩展 MCP（Model Context Protocol）服务器的支持范围
- **代表场景**：Figma 等设计工具的深度集成
- **趋势解读**：开发者越来越关注 CLI 工具与外部协作工具的无缝衔接能力

### 📊 趋势总结
| 关注方向 | 占比 | 重要性 |
|---------|------|--------|
| MCP 第三方集成 | 100%（1/1） | ⭐ 高 |
| 新模型支持 | 待观察 | - |
| IDE 插件集成 | 待观察 | - |
| 性能优化 | 待观察 | - |

> 由于样本量仅 1 条 Issue，以上趋势仅供参考，建议结合长期数据综合判断。

---

## 6. 开发者关注点

### 🔧 主要痛点
1. **预注册流程繁琐**：Figma MCP 等第三方服务的接入路径不够顺畅，开发者期望更低的接入成本。
2. **官方支持有限**：热门工具（如 Figma）的 MCP 集成尚无官方原生支持，依赖社区或自建方案。

### 💡 高频需求
- **开箱即用的 MCP 适配器**：直接预置主流工具（MCP Catalog）的连接配置
- **简化的注册 / 鉴权流程**：降低开发者首次接入的认知负担
- **官方维护的工具清单**：明确哪些 MCP 服务已验证可用

---

## 📌 报告说明

- **数据范围**：仅基于过去 24 小时内更新的 Issue/PR/Release
- **样本说明**：今日社区活跃度较低，单一 Issue 数据存在局限性，结论应谨慎参考
- **下次更新**：请持续关注 [GitHub 仓库](https://github.com/MoonshotAI/kimi-cli) 动态

---

*🤖 本日报由 AI 自动生成，基于 GitHub 公开数据整理。如需更深入的历史趋势分析或对比报告，请提供更长周期的数据。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

今日 OpenCode 发布了 **v1.17.15** 维护版本，主要修复 Z.ai 上下文窗口溢出错误归类与配置目录异常处理。社区活跃度持续高位：**22 个 Issue 更新、50 个 PR 推进**，其中 V2 架构演进（Instruction 重构、AI SDK 元数据保留、Plugin Readiness 屏障）成为主线，Windows 平台与 TUI 相关兼容性 bug 集中反馈，开发者对 i18n、文件引用、正则权限模型等体验方向提出新诉求。

---

## 🚀 版本发布

### v1.17.15
- **Core – Bugfixes**
  - 更好地归类 Z.ai 上下文窗口溢出错误（@fengjikui 贡献）
  - 读取配置文件时更优雅地处理不可用的配置目录
- **Desktop – Improvements**
  - 恢复模型选择面板中模型详情 tooltip

> 链接：anomalyco/opencode Release v1.17.15

---

## 🔥 社区热点 Issues

| # | Issue | 关键看点 |
|---|-------|---------|
| **#20695** | [Memory Megathread](https://github.com/anomalyco/opencode/issues/20695) | 社区聚集地，集中梳理所有内存相关 bug。**108 条评论 / 82 👍**，维护团队明确反对跑 LLM 让其给方案，仅需收集堆快照。代表高优先级可靠性议题。 |
| **#26063** | [Tool execution aborted/terminated (LM Studio)](https://github.com/anomalyco/opencode/issues/26063) | 本地 LM Studio (Qwen3.6-35b) 调用工具被中止，**29 条评论**，反映本地 provider + 复杂模型链路下工具执行稳定性问题。 |
| **#35772** | [Desktop v1.17.14 Provider.list() TypeError](https://github.com/anomalyco/opencode/issues/35772) | 桌面端每次启动崩溃、模型/Provider 列表空白，**4 条评论**，是 v1.17.14 的严重回归。 |
| **#35828** | [Windows TUI fails in v1.17.15 with `.opencode` exists](https://github.com/anomalyco/opencode/issues/35828) | v1.17.15 在已存在 `.opencode` 目录时启动失败，**👍 1**。说明 v1.17.15 自身也引入了 Windows 兼容性回归。 |
| **#35327** | [`/exit` 关闭 Windows 父终端](https://github.com/anomalyco/opencode/issues/35327) | `process.exit()` 触发 `CTRL_CLOSE_EVENT` 导致整个 shell 被杀掉，**4 条评论**。Windows 用户高频踩坑。 |
| **#35839** | [Windows 启动第三个实例会移除全局 CLI](https://github.com/anomalyco/opencode/issues/35839) | 同时打开多个 OpenCode 进程后 `opencode` 命令失效，**3 条评论**，Windows 安装/升级链路上的潜在安全风险。 |
| **#31217** | [TUI 输入框按 Enter 失灵](https://github.com/anomalyco/opencode/issues/31217) | 输入回车后文本被吞、消息未提交，影响中英文输入法，**5 条评论**，是 TUI 核心交互可用性问题。 |
| **#35834** | [Desktop 同名文件总是定位到首次访问路径](https://github.com/anomalyco/opencode/issues/35834) | Desktop 因缓存无法访问其他路径下的同名文件，影响多模块/多 workspace 工作流。 |
| **#35831** | [i18n / 多语言支持（含 PT-BR）](https://github.com/anomalyco/opencode/issues/35831) | 提出基于已有 i18n 框架补齐葡萄牙语等多语言，**3 条评论**。同向 PR #35836 已提交完整翻译。 |
| **#32932** | [`opencode serve` 退出后 Windows 端口被僵尸连接占用](https://github.com/anomalyco/opencode/issues/32932) | 自环回 TCP ESTABLISHED 残留、LISTENING 套接字被锁，**👍 1**，对本地 server 用法是硬阻塞。 |

---

## 🛠 重要 PR 进展

| # | PR | 内容摘要 |
|---|----|--------|
| **#34123** | [feat(tui): add plain text paste](https://github.com/anomalyco/opencode/pull/34123) | 新增 TUI 明文粘贴命令 `prompt.paste_plain`，绑定 `Ctrl+Alt+V`，绕开富文本格式。关闭 #34006。 |
| **#35838** | [fix(tool): decode webfetch bodies via charset](https://github.com/anomalyco/opencode/pull/35838) | `webfetch` 使用 `iconv-lite` 按 `Content-Type` 中声明的字符集解码，解决非 UTF-8（含 GBK/Win-1252）页面乱码。 |
| **#35755** | [fix(core): wait for plugin readiness](https://github.com/anomalyco/opencode/pull/35755) | V2 Session agent 解析前等待插件就绪屏障；插件缺失时以 `Session.AgentNotFoundError` 失败关闭，Location 与 TUI 启动仍渐进。 |
| **#35835** | [fix(ui): preserve code spans adjacent to tildes](https://github.com/anomalyco/opencode/pull/35835) | Markdown 解析时保留紧邻波浪号的行内 code span，避免误转义。 |
| **#35836** | [feat(i18n): complete PT-BR translation](https://github.com/anomalyco/opencode/pull/35836) | 补齐 UI 23 个 + App 142 个 pt-BR 文案 key，与英文版完全对齐，直接配合 #35831。 |
| **#35826** | [fix(cli): elect one managed daemon](https://github.com/anomalyco/opencode/pull/35826) | 引入 channel-scoped 进程生命周期锁与 `EffectFlock.tryAcquire`，确保多实例下仅一个 managed daemon，注册可替换性更稳健。 |
| **#35777** | [fix(core): refresh stale `@latest` npm package cache on load](https://github.com/anomalyco/opencode/pull/35777) | 修复 `Npm.add` 因 `node_modules/{name}` 存在而短路，导致 `@latest` 插件永远拿不到新版本。关闭 #25293。 |
| **#35497** | [feat(core): make path-local instruction discovery durable](https://github.com/anomalyco/opencode/pull/35497) | V2 重构子目录 `AGENTS.md` 发现机制，从"synthetic 消息注入"改为 durable Instructions，解决 compaction 后丢失作者上下文。 |
| **#35812** | [fix(core): preserve AI SDK provider metadata](https://github.com/anomalyco/opencode/pull/35812) | 在 canonical → AI SDK prompt 下沉时保留内容级 provider 元数据（含 thought signature、provider item id），确保推理/工具调用回放幂等。 |
| **#35829** | [feat(app): add inline file browser tabs (V2 review pane)](https://github.com/anomalyco/opencode/pull/35829) | 为 V2 review pane 增加 Open File 内联 tab、项目树与 TanStack 文件搜索，预览/置顶 tab 与现有 session 布局集成，并带 a11y 回归覆盖。 |

> 其他已关闭但有信号价值：#35817（provider metadata namespaces，与 #35812 互为 V2 元数据保留的两条线）、#35837（修复 mutable plugin fixture 的 Linux/Windows 单元测试）。

---

## 📈 功能需求趋势

从过去 24 小时更新的 22 条 Issue 提炼出社区热议方向：

1. **V2 架构体验完善** —— Instruction / Prompt 语义、@-tagged 文件引用（#34341、#34497、#34387）、文件附件、Provider metadata 正确性（#35827）密集出现，V2 正在以"小步但成体系"的方式进入可用区间。
2. **Windows 兼容性回归带** —— v1.17.15 的 TUI 启动失败（#35828）、多实例误删全局 CLI（#35839）、`/exit` 关闭父终端（#35327）、`opencode serve` 端口泄漏（#32932）形成强烈信号，Windows 仍是质量短板。
3. **本地模型 / Provider 稳定性** —— LM Studio 工具调用中止（#26063）、Desktop Provider.list() 崩溃（#35772）、token 计数与模型上下文一致性（#34712）。
4. **国际化和可访问性** —— i18n 框架已存在但覆盖率低（#35831），PT-BR 翻译补齐 PR #35836 已就位。
5. **高级控制语义** —— 正交权限模型：将 plan/build 与 agent 身份解耦（#35830），便于细粒度权限组合。
6. **生态文档** —— Copilot Quota 插件进入生态目录（已 CLOSED #35768），社区欢迎外部插件加入官方文档，外部贡献意愿强。
7. **资源/工具 API 落地** —— V2 tool plugin API 尚未冻结，资源类工具（#34546）被迫"等到 API 收敛"再迁移。

---

## 👨‍💻 开发者关注点

- **回归比新功能更扎眼**：v1.17.14 / v1.17.15 接连在 Desktop Provider 列表、Windows 启动路径上制造回归，社区希望改进 CI 多平台覆盖与启动期快照检查。
- **TUI 输入体验碎片化**：回车吞文本（#31217）、粘贴富文本（#34123 PR 直接给出快捷键）、乱码/空代码块（#28656 Centos 7）——交互层需要更系统的人因测试。
- **"LLM 给方案 ≠ 解决方案"**：Memory Megathread 明确呼吁开发者手动采集 heap snapshot，体现出维护团队在工程数据上的高要求，也提示贡献者先做诊断再动手。
- **希望把"agent 身份"与"权限档"解耦**（#35830）：把 plan/build 当作 policy 而非 agent，可以减少 prompt 上下文切换损失，这是面向复合工作流的真实呼声。
- **provider 元数据成为推理连续性的关键**：AI SDK、native 两条链路下保留 thought signature / provider item id 直接决定了 Gemini/Anthropic 等 reasoning 模型的回放能力，相关 PR（#35812、#35817）一旦合入会显著降低"看起来成功但中途丢推理"的隐蔽 bug。
- **进程生命周期与文件锁**：多个 daemon 选举、僵尸连接、`.opencode` 目录冲突（#35826、#32932、#35828）显示 V2 在持久化与多进程语义上的复杂度上升，开发者关注"重入安全"和"幂等恢复"。

> 日报数据基于 anomalyco/opencode 仓库 2026-07-08 公开 Issues / PRs。链接均指向相应 GitHub 页面，便于深读。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-08

## 📌 今日速览

今天是 **社区大规模 triage 日**——过去 24 小时内有 27 条 Issue 和 23 条 PR 被集中处理，绝大多数被关闭并打上分类标签（`[no-action]` / `[last-read]` / `[untriaged]`）。核心开发活动集中在 **TUI 流式渲染稳定性** 与 **扩展 API 表面扩展** 两条主线，同时涉及 Azure OpenAI Responses、DeepInfra 等多个 provider 的兼容性修复。无新版本发布。

---

## 📦 版本发布

**无新版本发布**（过去 24 小时）。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#5501](https://github.com/earendil-works/pi/issues/5501) | tolerate extra keys on edit tool edits[] items | CLOSED · 11 评论 | **高**——解除 `additionalProperties:false` 后，长 `newText` 后模型偶发追加 `newText_strip` 等伪键导致的 schema 校验失败，修复后将显著降低 edit 工具的中断率。 |
| [#6206](https://github.com/earendil-works/pi/issues/6206) | Clamping to context window prevents artificial context limits | OPEN · 5 评论 | **高**——指出此前修复将 `max_tokens` 钉死在 provider 报告的 context window，导致用户无法自定义更低的输出上限，与 #5595 修复意图冲突。 |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | `/scoped-models` 无法选择含方括号的模型 ID | OPEN · 5 评论 | **中**——pattern 解析未转义 `[` `]`，影响 `custom/bracketed-model[1m]` 这类带版本后缀的 provider。 |
| [#3896](https://github.com/earendil-works/pi/issues/3896) | TUI 失去焦点时光标仍显示为激活态 | CLOSED · 👍 7 | **中**——终端 UX 体验问题，对照 Codex CLI 应将光标切换为 hollow，3 条评论参与讨论。 |
| [#6284](https://github.com/earendil-works/pi/issues/6284) | Reject partial JSON on early tool call exit | CLOSED · mitsuhiko | **高**——`partial-json` salvage 解析器在流中断时仍尝试调用工具，引发错误调用。Rust 框架作者 mitsuhiko 亲自挂出，重要性强。 |
| [#6378](https://github.com/earendil-works/pi/issues/6378) | 上下文长度超出 262k 的 400 错误 | OPEN · 2 评论 | **中**——超出 context window 后无自动 fallback，需手动启用压缩插件。 |
| [#6367](https://github.com/earendil-works/pi/issues/6367) | `modelOverrides` 不应用于 extension 注册的 provider | OPEN · 2 评论 | **高**——影响 `thinkingLevelMap` 等 override 在自定义 provider 上的生效路径，shift+tab 切换思考档位不可用。 |
| [#6326](https://github.com/earendil-works/pi/issues/6326) | `custom_message` 绕过 compaction `keepRecentTokens` | OPEN · 2 评论 | **高**——custom message 被无条件送入 LLM 上下文，破坏 token 预算，可能导致 token 用量异常增加。 |
| [#6409](https://github.com/earendil-works/pi/issues/6409) | Azure OpenAI Responses (store:false) 多轮 reasoning 400 | CLOSED · 1 评论 | **高**——裸 `rs_` id 未回填 `encrypted_content` 即重放，导致 Azure 拒绝请求，影响 reasoning 类模型的多轮对话。 |
| [#6401](https://github.com/earendil-works/pi/issues/6401) | `open -r` 下无法启动 no-session agent | CLOSED · 1 评论 | **中**——影响在第三方工具（如 Superset）内嵌 Pi 的工作流。 |

---

## 🛠️ 重要 PR 进展

> 今日绝大部分 PR 由核心贡献者 **xl0** 提交并全部合入/关闭，社区呈现"集中清扫"状态。

| PR | 内容 | 价值 |
|----|------|------|
| [#6026](https://github.com/earendil-works/pi/pull/6026) | fix(tui): stabilize working status row | 解决 TUI 工作状态行抖动（ref #5825） |
| [#5846](https://github.com/earendil-works/pi/pull/5846) | fix(tui): stabilize streaming code fence rendering | 流式 markdown 代码围栏渲染稳定化 |
| [#5913](https://github.com/earendil-works/pi/pull/5913) | Stable markdown working | markdown 工作区稳定性综合改进 |
| [#6030](https://github.com/earendil-works/pi/pull/6030) | fix(coding-agent): print benchmark timings after TUI stop | TUI 退出后正确打印 benchmark 计时 |
| [#6169](https://github.com/earendil-works/pi/pull/6169) | Disable padding for assistant messages | 关闭 #6168，减少 assistant 消息多余 padding |
| [#6175](https://github.com/earendil-works/pi/pull/6175) | fix(coding-agent): emit session name changes to extensions | 让扩展能监听 session 改名事件（closes #6174） |
| [#5085](https://github.com/earendil-works/pi/pull/5085) | Expose full tool definitions from getAllTools | 扩展可获取完整工具定义，替代 #4954 的方案 |
| [#5306](https://github.com/earendil-works/pi/pull/5306) | Add system prompt options to extension commands | 扩展命令支持自定义 system prompt（closes #5305） |
| [#6063](https://github.com/earendil-works/pi/pull/6063) | Extension stats | 为扩展提供 stats API，并顺手修复 `PI_STARTUP_BENCHMARK=1` 退出后的 OSC 垃圾输出 |
| [#4775](https://github.com/earendil-works/pi/pull/4775) | Export image resize utilities | 导出 `resizeImage` 等工具函数供扩展使用 |
| [#6405](https://github.com/earendil-works/pi/pull/6405) | Update extensions docs for npm/git install locations | 社区贡献：明确文档中 npm/git 安装路径，避免 LLM 误判（closes #6400） |

---

## 📈 功能需求趋势

从 27 条 Issue 中可归纳出以下社区诉求热点：

1. **Provider 兼容性扩展**
   - 请求新增 **Eden AI** 一级 provider（#6403）
   - **Azure OpenAI Responses** reasoning 多轮支持（#6409）
   - **DeepInfra + Kimi-K2.7-Code** 输出损坏问题（#6399）
   - **openai-responses** 的 `instructions` 参数缓存优化（#6240）

2. **TUI / 终端体验打磨**
   - 流式渲染稳定性（working status row、code fence、markdown）持续是痛点
   - 失焦光标样式（#3896）
   - 终端控制序列残留清理（#6063）

3. **扩展 API 表面持续扩张**
   - `getAllTools` 完整定义暴露（#5085）
   - CLI 参数解析器、PNG 转换、image resize、edit-diff 等 export（#5202、#5167、#4775、#5756）
   - extension prompt guideline API（#5711）
   - session 改名事件下发（#6175）
   - inline settings factories 支持（#6398）

4. **会话/数据生命周期管理**
   - session-id 不存在时静默新建（#6407）
   - repo 路径迁移后 session 失联（#6394）
   - JSONL session header 自定义 metadata（#6402）
   - 自定义消息参与 context 的预算控制（#6326）

5. **安全与凭据管理**
   - 只读 `~/.pi/agent` 时锁文件创建导致读失败（#6406）
   - `/share` 命令可关闭（#6393）
   - LLM API 请求设置自定义 User-Agent（#6392）

6. **包管理与运行时**
   - 在 bun runtime 下默认改用 bun 而非 npm（#6396）

---

## 👨‍💻 开发者关注点与痛点

- **LLM 自描述能力与文档准确性脱节**：#6400 与 #6405 闭环，社区反馈当 LLM 被要求排查 Pi 自身状态时，常因 npm/git 安装路径未在文档中显式列出而错误定位。文档一致性成为新瓶颈。

- **扩展与核心的边界模糊**：#6367（`modelOverrides` 未应用到 extension provider）、#6326（custom message 跳过 compaction）反映出扩展作者越来越需要"穿透"到核心 session/compaction 流程，但缺乏正式 hook。

- **Provider 抽象仍不完整**：Azure、DeepInfra、openai-responses 各有差异——reasoning item 重放、cache 命中、custom 字段透传——这些补丁式的兼容分支让核心愈发碎片化，社区呼吁统一 provider 元数据描述。

- **TUI "最后一次问题"反复出现**：#5825 关联的 markdown/code fence/working status 三连 PR 表明该区域仍未稳定，是 CI/可视回归测试的薄弱环节。

- **默认行为的安全/隐私缺省**：`/share` 无开关（#6393）、LLM 请求不带 User-Agent（#6392）——社区希望默认更保守、可配置更细粒度。

---

*数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 报告生成时间：2026-07-08*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

今日 Qwen Code 完成了 v0.19.7 正式版发布，主要带来 PR triage 流程加固与审查自动化改进。社区活跃度持续高涨，过去 24 小时内共有 6 个核心 Issue 和 50 个 PR 更新，主题集中在 **内存管理缺陷修复、多会话/多工作区管理、Web Shell 体验优化** 三大方向。同时，SDK 在传输层与控制请求方面新增多项能力，进一步向"AI 编程助手平台化"演进。

---

## 🚀 版本发布

### v0.19.7（正式版）
- **PR #5723**：强化 PR triage 准入门槛，新增批量检测、问题存在性校验与红旗模式识别（贡献者：@pomelo-nwu）
- 审查流程自动化（featuring review rou...）等多项改进

### v0.19.6-preview.0 / v0.19.7-nightly.20260708.394c1a289
- 同源变更：将 WeCom（企业微信）加入 channels overview（PR #6490，@DragonnZhang）
- 建议生产环境优先采用 v0.19.7 正式版

---

## 🔥 社区热点 Issues

| # | Issue | 主题 | 重要性 |
|---|-------|------|--------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | RFC: 单 daemon 支持多工作区 | ⭐⭐⭐ 架构级演进，19 条讨论热度最高 |
| [#6487](https://github.com/QwenLM/qwen-code/issues/6487) | `/remember` 后内存索引过期；压缩时丢失 | ⭐⭐⭐ 影响长期会话体验的双重缺陷 |
| [#6384](https://github.com/QwenLM/qwen-code/issues/6384) | hard limit: 0 导致请求失败 | ⭐⭐⭐ 模型切换上下文管理的关键 bug |
| [#6414](https://github.com/QwenLM/qwen-code/issues/6414) | VSCode 扩展连接 Qwen Agent 失败 | ⭐⭐ IDE 集成稳定性问题，影响开发者体验 |
| [#6401](https://github.com/QwenLM/qwen-code/issues/6401) | ProxyAgent 不支持 NO_PROXY（已 CLOSED） | ⭐⭐ 内网代理环境常见痛点，已进入修复流程 |
| [#6496](https://github.com/QwenLM/qwen-code/issues/6496) | Footer 显示所有模式的权限徽章 | ⭐⭐ UI 透明度改进，欢迎 PR |
| [#6377](https://github.com/QwenLM/qwen-code/issues/6377) | 阻止 pgrep 命令替换的自杀式 kill | ⭐⭐ 安全相关，影响 #6246 |
| [#6466](https://github.com/QwenLM/qwen-code/issues/6466) | OpenAI 流式管道未识别非 SSE 响应 | ⭐⭐ 兼容性问题 |
| [#6433](https://github.com/QwenLM/qwen-code/issues/6433) | OAuth URL 强制换行 | ⭐ 用户体验问题 |
| [#6451](https://github.com/QwenLM/qwen-code/issues/6451) | Fleet View 多会话管理 | ⭐⭐ 对标 Claude Code 多 Agent 视图 |

---

## 🛠 重要 PR 进展

| # | PR | 说明 |
|---|----|----|
| [#6498](https://github.com/QwenLM/qwen-code/pull/6498) | **feat(cli)**：Footer 显示 DEFAULT 模式权限徽章 | 解决 #6496，UI 状态可视化 |
| [#6500](https://github.com/QwenLM/qwen-code/pull/6500) | **fix(web-shell)**：优化 Markdown 表格交互 | 拖拽合并、修饰键交给浏览器、焦点清理 |
| [#6451](https://github.com/QwenLM/qwen-code/pull/6451) | **feat(cli)**：Fleet View 多会话管理 | 双击 ← 打开全屏 TUI，参考 Claude Code Agent View |
| [#6483](https://github.com/QwenLM/qwen-code/pull/6483) | **fix(core)**：拒绝 Windows 风格路径工件 | 加强 `record_artifact` 跨平台路径校验 |
| [#6493](https://github.com/QwenLM/qwen-code/pull/6493) | **fix(web-shell)**：Daemon Status 计入 daemon 会话 | 使用统计覆盖 Web Shell 与未 `/clear` 会话 |
| [#6491](https://github.com/QwenLM/qwen-code/pull/6491) | **feat(sdk)**：暴露传输与查询选项 | 双 SDK 新增 11 项 QueryOptions，向后兼容 |
| [#6499](https://github.com/QwenLM/qwen-code/pull/6499) | **fix(cli)**：任务取消后解锁 `/clear` | 解决 #5949，取消请求后静默失败问题 |
| [#6497](https://github.com/QwenLM/qwen-code/pull/6497) | **fix(memory)**：remember 后刷新指令 | 解决 #6487 第一种失效机制 |
| [#6440](https://github.com/QwenLM/qwen-code/pull/6440) | **feat(cli)**：新增 `/learn` 命令 | 用户主动从多源创建可复用 Skill |
| [#6495](https://github.com/QwenLM/qwen-code/pull/6495) | **feat(channels)**：Webhook 触发 channel 任务 | 外部 webhook → qwen serve → 自动回复 |

---

## 📈 功能需求趋势

通过对全部 Issue 与 PR 的归类分析，社区当前最关注的方向：

1. **🔌 SDK 平台化**（最热）
   - #6491 暴露传输/查询选项、#6492 新增 effort/models/usage/context 控制方法
   - Python + TypeScript 双 SDK 同步演进，CLI 控制处理器同步实现

2. **🧠 内存/上下文管理**
   - #6487、#6497、#6434、#6431 围绕 managed memory 的索引刷新、错误暴露与 UI 对齐
   - 反映长会话场景下记忆系统的稳定性成为关键瓶颈

3. **🖥️ 多工作区与多会话**
   - #6378（多 workspace daemon）、#6451（Fleet View）、#6493（Daemon 使用统计）
   - 与 Claude Code 的 Agent View 看齐，向"统一指挥中心"演进

4. **💬 渠道（Channels）生态扩展**
   - WeCom 文档（#6490）、Webhook 触发（#6495）、ACP 权限转发（#6446）
   - Qwen Code 正快速接入企业 IM 与外部事件源

5. **🛡️ 安全与稳定性**
   - #6377 自杀式 kill 防御、#6466 非 SSE 检测、#6401 NO_PROXY 修复
   - 边界场景修复显著增多

6. **🎨 UI/UX 细节打磨**
   - 权限徽章（#6496/#6498）、OAuth URL 超链接（#6433）、侧边栏自适应（#6494）

---

## 👨‍💻 开发者关注点

从 Issue 评论密度与 PR 数量观察，开发者的痛点和需求集中在：

- **长期会话可靠性**：记忆系统在压缩、恢复、索引刷新等多环节仍存在隐性失效，社区迫切需要"可解释、可观察"的内存行为
- **IDE/编辑器集成**：VSCode 扩展的连接稳定性（#6414）直接影响开发主流程，仍需排查 agent 通信握手
- **企业环境兼容性**：代理、内网、NO_PROXY、跨平台路径（Windows/POSIX）等基础设施问题持续暴露
- **模型与上下文切换**：#6384 揭示了"模型预占完整上下文用于输出"导致 hard limit: 0 的极端 case，需更细粒度的预留策略
- **多 Agent / 多 Session 协作**：Fleet View + 多 workspace daemon 是社区向 Claude Code 看齐的核心期待
- **可复用技能（Skills）`/learn`**：开发者希望把对话中产生的最佳实践沉淀为结构化 Skill，降低重复劳动

---

*报告基于 QwenLM/qwen-code 仓库 2026-07-07~07-08 数据生成。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**: 2026-07-08
**项目**: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（已正式更名为 **CodeWhale**）

---

## 1. 今日速览

项目完成品牌重塑，**v0.8.67** 发布并确立 `CodeWhale` 为规范的仓库与 npm 包名。社区当前最活跃的工作集中在 **v0.8.68 里程碑**（执行看板 #4092 与子代理面板冻结 #4094 标记为 stopship），同时多个长期未关闭的 TUI 稳定性问题（Windows 卡死、IME 死锁、Turn stalled）被批量清理。v0.9.0 路线图中的 **WhaleFlow 分支/叶工作流引擎**和 **Model Lab** 也在并行推进。

---

## 2. 版本发布

### v0.8.67（已发布）

- **品牌重塑落地**：`CodeWhale` 成为项目、命令、npm 包及 release asset 的规范名称
- 旧 npm 包 `deepseek-tui` 已废弃，不再接收新版本
- 迁移指引见 [`docs/REBRAND.md`](https://github.com/Hmbown/CodeWhale)
- 后续 commit 时间戳将作为后续小版本基线

> 旧用户需注意：从 v0.8.x 的 `deepseek` / `deepseek-tui` 命令迁移到 `codewhale`。

---

## 3. 社区热点 Issues

| # | Issue | 评论 | 状态 | 重要性 |
|---|-------|------|------|--------|
| [#2487](https://github.com/Hmbown/CodeWhale/issues/2487) | yolo 模式下 "Turn stalled" 无响应，continue 无法恢复 | 20 | CLOSED | ⭐⭐⭐ 累计 20 条讨论的长期阻塞性 bug，v0.8.70 修复 |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | v0.8.64: 自然语言自动审查策略 + pre-push 审查门控 | 14 | CLOSED | ⭐⭐⭐ 对标 Cursor Security Review，影响 v0.8.69 |
| [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 执行看板（lane 协议权威包）** | 11 | **OPEN** | ⭐⭐⭐ 当前 milestone 的唯一权威入口，决定 v0.8.68 整体方向 |
| [#3063](https://github.com/Hmbown/CodeWhale/issues/3063) | v0.8.59 发布跟踪器（TUI 鼠标泄漏、运行时安全） | 11 | CLOSED | ⭐⭐ 展示项目"stopship → triage → ship"的工作流范式 |
| [#1812](https://github.com/Hmbown/CodeWhale/issues/1812) | Windows 11 下 TUI 间歇性冻结（crossterm poll） | 11 | CLOSED | ⭐⭐⭐ Windows 平台 TUI 核心稳定性的代表 issue |
| [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) | v0.8.65: 多模型兼容 + Provider 文档 + Fleet loadout 自动选择 | 8 | CLOSED | ⭐⭐ 多模型路由的标准接受测试用例 |
| [#2791](https://github.com/Hmbown/CodeWhale/issues/2791) | v0.9.0: 命令分发从单体 match 重构为模块化策略模式 | 7 | CLOSED | ⭐⭐ v0.9.0 架构级重构，影响所有命令实现 |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | Windows TUI 焦点丢失后输入泄漏到 PowerShell | 6 | CLOSED | ⭐⭐ Windows 终端安全相关，影响 v0.8.70 |
| [#2061](https://github.com/Hmbown/CodeWhale/issues/2061) | Hotbar: 侧边栏底部的 MMO 风格快捷操作条（umbrella） | 6 | CLOSED | ⭐⭐ 新 UI 表面的总入口 |
| [#1982](https://github.com/Hmbown/CodeWhale/issues/1982) | Workbench loop: 串联 delegation、integration、verification | 5 | CLOSED | ⭐⭐ 解决现有 Work/Tasks/Agents 侧边栏闭环不可见的问题 |
| [#1835](https://github.com/Hmbown/CodeWhale/issues/1835) | Windows 中文 IME 组合事件死锁 | 5 | CLOSED | ⭐⭐ 国内用户高频痛点 |
| [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) | **子代理详情面板空白并可能冻结 TUI** | 4 | **OPEN** | ⭐⭐⭐ 标记 `lane-stopship`，v0.8.68 必解 |

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| [#4099](https://github.com/Hmbown/CodeWhale/pull/4099) | CLOSED | 0.8.68 release train：工作流正确性 + TUI 稳定性 + 模式/权限 + 安全加固，五 commit 整合 |
| [#3902](https://github.com/Hmbown/CodeWhale/pull/3902) | OPEN | 修复 5 个 TUI 渲染/输入热路径性能 issue（#3896–#3900），并修复多 agent 审查发现的 4 个回归 |
| [#4181](https://github.com/Hmbown/CodeWhale/pull/4181) | OPEN | Fleet 设置模态框改为角色/Profile 名册编辑器，跨 Provider 暴露模型路由 |
| [#4182](https://github.com/Hmbown/CodeWhale/pull/4182) | CLOSED | 子代理详情面板改为实时活动轨迹（工具调用 / 状态 / 结果 / 交接），修复 #4094 |
| [#4180](https://github.com/Hmbown/CodeWhale/pull/4180) | CLOSED | PTY/raw 模式下规范化裸 ETX 字节到标准 Ctrl+C，修复 #4090 |
| [#3818](https://github.com/Hmbown/CodeWhale/pull/3818) | CLOSED | 修复活动工具运行摘要展开缺失，添加回归测试 |
| [#4163](https://github.com/Hmbown/CodeWhale/pull/4163) | CLOSED | v0.8.68 波次代理工作流文件 + 剧本 + 里程碑同步 Action |
| [#3969](https://github.com/Hmbown/CodeWhale/pull/3969) | OPEN | 每个子代理的 Provider 路由（v0.8.68 排队，与 fleet/routing 重设计对齐） |
| [#4084](https://github.com/Hmbown/CodeWhale/pull/4084) | OPEN | v0.8.69: 拒绝已退役的 profile loadout 别名（`model_class_hint` / `route_tier`） |
| [#4087](https://github.com/Hmbown/CodeWhale/pull/4087) | OPEN | v0.8.69: 拆分 `hooks.rs` 为 config 与 executor 模块 |
| [#4044](https://github.com/Hmbown/CodeWhale/pull/4044) | OPEN | 本地化动态欢迎步骤，补齐 `zh-Hant` 等稀疏语言 |
| [#3761](https://github.com/Hmbown/CodeWhale/pull/3761) | OPEN | 启动期维护清理从同步路径移出（延迟后台线程） |
| [#4045](https://github.com/Hmbown/CodeWhale/pull/4045) | CLOSED | 修复 `edit_file` UTF-8 模糊匹配在 CJK 字符上 panic |
| [#4088](https://github.com/Hmbown/CodeWhale/pull/4088) | CLOSED | 关闭 `--no-mouse-capture` 时的 xterm alternate-scroll，保留原生拖选 |
| [#4035](https://github.com/Hmbown/CodeWhale/pull/4035) | CLOSED | README 中新增 CodeWhale for VS Code GUI 前端链接 |
| [#4098](https://github.com/Hmbown/CodeWhale/pull/4098) | OPEN | 章程文档：禁止子代理等待时的 peek-sleep 轮询，改为被动事件等待 |

---

## 5. 功能需求趋势

从所有活跃 issue 中提炼出的社区关注方向：

### 🔧 TUI 稳定性（最集中）
- **Windows 平台**：crossterm 冻结、IME 死锁、PowerShell 焦点泄漏、鼠标报告泄漏
- **流式/网络中断**：Turn stalled、Stream stalled 90s、API pipe_read 死锁
- 这些都集中在 **v0.8.70** 修复线

### 🤖 Sub-agent 系统
- 详情面板（#4094）、工具调用作用域（#4096 PANL）、Provider 路由（#3969）
- 反轮询模式（#4098 章程）、路由到 scout/RLM（#2024）
- 验证器预览发出 hunt 判定（#2093）

### 🧠 多模型与 Provider 路由
- vllm vs openai 区分、自动 Fleet loadout 选择、profile 持久化
- 退役字段清理（#4084）、角色/Profile 名册编辑器（#4181）

### ⚡ 性能与 Token 优化
- 5 个 TUI 渲染/输入热路径优化（#3902）
- 减少重复 transcript 输入（#2956）、精简静态 prompt（#2953）
- benchmark 输出纪律（#2957）、shell-only 模式纯净化（#2954）
- 缓存最大化上下文模式（#528）

### 🎨 UI/UX 新表面
- **Hotbar**（8 槽位快捷操作条，默认隐藏）
- **Workbench loop**（delegation → integration → verification 可视化闭环）
- 低信息行可点击检查（#2018）
- 远程工作台：DigitalOcean + Telegram（#2964）

### 🛠 v0.9.0 WhaleFlow
- 分支/叶工作流引擎：bounded concurrency、协作取消、token/cost 预算
- 真实异步执行器替换 MockWorkflowExecutor（#2973）
- TUI `/workflows` 监控面（#2979）

### 🔒 安全与治理
- 自然语言自动审查策略 + pre-push 审查门控（#3144）
- v0.9.0 稳定化门控（#2721）：Windows、大仓库、子代理、live-state 阻塞

---

## 6. 开发者关注点

### 高频痛点
1. **跨平台 TUI 一致性** — Windows 是 issue 重灾区，涉及终端驱动、IME、PowerShell 集成；多个 issue 直指 crossterm 在 Windows 下的 poll 行为
2. **流中断的恢复语义** — "stalled" 错误在多个 issue 中以不同形式出现（Turn / Stream / pipe_read），需要统一的失败-关闭 + 重连策略
3. **长会话的资源管理** — 历史 transcript 膨胀、token 浪费、缓存命中率低，推动 cache-maximalism 与 prompt 精简
4. **子代理可观测性** — 现有 UI 几乎只显示 ID/状态，开发者迫切需要工具调用轨迹、进度、心跳事件
5. **命令分发的可维护性** — 单一 `match` 已无法承载功能扩展，v0.9.0 的策略模式重构是必然
6. **多 Provider 体验** — vllm / openai / 本地模型在文档、profile 路由、loadout 选择的混乱，是新用户最大的入门障碍

### 社区信号
- 项目正在从"功能堆叠"过渡到"流程纪律"：v0.8.68 引入了 wave-based agent 协议、milestone 同步 Action、stopship lane 标签
- 章程化趋势明显：#4098（反轮询）、#4096（工具作用域 PANL）显示社区在尝试将最佳实践编码到文档与 lint 中
- 中文用户反馈比例显著（多个中文标题 issue），#4044 PR 也在补齐 `zh-Hant` 本地化

---

*日报基于 2026-07-08 过去 24 小时 GitHub 公开数据自动生成。*

</details>