# AI CLI 工具社区动态日报 2026-07-30

> 生成时间: 2026-07-30 01:51 UTC | 覆盖工具: 9 个

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

# 2026-07-30 AI CLI 工具生态横向对比分析报告

## 一、生态全景

今日 AI CLI 工具生态呈现 **"高频迭代 + 质量收敛"** 双重特征：头部项目（OpenAI Codex、GitHub Copilot CLI）单日发布 4–7 个版本保持激进节奏，Gemini CLI、Qwen Code 等通过 nightly 通道持续打磨，DeepSeek TUI 也在 v0.9.2 RC 后进入 "稳定性窗口"。**侧重点已从"功能扩展"转向"Agent 可靠性、状态机正确性、跨平台一致性"**：subagent 失活、MCP 安全治理、长会话存储爆炸（如 Codex 单会话 165 GiB、OpenCode 事件表 13 GB+）成为共同焦点。同时，**Hooks 体系、Provider 矩阵、本地化与终端适配** 正在成为各工具必须补齐的"基线能力"，工具之间的差异化竞争已上移到评估体系、企业接入、Agent 可观测性等更高维度。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issues | 今日 PRs | 版本发布 | 仓库节奏特征 |
|------|------------|---------|---------|------------|
| **Claude Code** | ~16（10 热点 + 6 新增高潜） | 4 | 无 | 处于 2.1.x "稳定性消化期"，bug 报告占比高 |
| **OpenAI Codex** | 10（Top 10 热点） | 10+ | **4**（rust-v0.147.0-alpha.1/2 + v0.146.0-alpha.9.1/2）| 单日 4 个 alpha，主线密集合入 |
| **Gemini CLI** | 10 | 10 | **1**（v0.55.0-nightly）| Nightly 每日一发，质量收敛期 |
| **GitHub Copilot CLI** | ~12 | 1 | **6–7**（v1.0.76 + 76-1 至 76-5）| 单日频次最高，但 PR 侧偏低（仅 1）|
| **Kimi Code CLI** | **1** | 4 | 无 | 质量沉淀期，企业 P0 需求刚浮现 |
| **OpenCode** | 10 | 10 | 无 | TUI 重构密集，kitlangton 单人主导 |
| **Pi** | 10 | 10 | **1**（v0.83.0）| Provider 适配与扩展 API 同步推进 |
| **Qwen Code** | 16+（含 6 条 bot CI）| 10+ | **1**（v0.21.1-nightly）| Main CI E2E 问题需关注 |
| **DeepSeek TUI** | 10 | **22** | 无（PR #4964 完成 v0.9.2 RC）| 社区协作最密集，单日合入 22 PR |

> 📊 **总样本量**：今日合计 ~95+ Issues / 80+ PRs / 13 版本发布，覆盖 9 个主流工具。

---

## 三、共同关注的功能方向

### 1. Agent / Subagent 可靠性（9/9 工具全部涉及）
- **Claude Code**：subagent Write tool 命名限制过严（#44657）、Planning 实例过度工程化（#82441）
- **OpenAI Codex**（间接）：sub-agent 一致性问题
- **Gemini CLI**：状态语义失真 #22323、generalist agent 挂起 #21409、未授权激活 #22093
- **GitHub Copilot CLI**：sub-agent 空响应 #4293、模型继承失败 #4287
- **OpenCode**：嵌套子代理权限静默挂起 #13715
- **Qwen Code**：长会话工具调用格式退化为 XML #8003
- **Pi**：subagent 并行锁误报 #1871、孤儿 toolCalls #7053
- **Kimi** / **DeepSeek TUI**：执行链路鲁棒性

### 2. Hooks / 扩展体系标准化（Claude Code 成事实标准）
- **OpenAI Codex #21753**：要求完整对标 Claude Code Hooks 29+ 事件
- **Kimi #2176**：补齐 `UserPromptSubmit` 多模态兼容性
- **Qwen Code #8059**：新增 `SessionDelete` 事件

### 3. 长会话存储与上下文压缩重设计
- **OpenAI Codex**：会话 165 GiB（#35458）、app-server 27 GB 内存（#34863）、状态无界增长（#25779）
- **OpenCode #33356**：事件表无界增至 13 GB+
- **Claude Code #74260**：thinking 后文本被静默丢弃（数据丢失）
- **Pi #7253**：`/compact` 与自动压缩状态机冲突

### 4. MCP 生态从"能跑"到"安全可控"
- **OpenAI Codex**（密集 PR）：#36055 透传 `readOnlyHint`、#36039 限制分页、#36045 区分 unknown/unsupported、#36037 网络策略收紧、#36031 支持云管理服务器
- **Claude Code #82358**：MCP Guard plugin 防 bearer token 明文泄露
- **Gemini CLI #20170**：subagent MCP 工具注册失败修复
- **OpenCode #33719**：MCP OAuth 验证

### 5. Windows / 终端兼容性（最分散的痛点）
- **Claude Code**：GPU 崩溃 #80444、Shift+Enter、CJK 渲染 #80415、MSIX 不可启动
- **OpenAI Codex #33776** / **#35311**：Windows 桌面进程泄漏、in-app browser 崩溃循环
- **Gemini CLI #21983**：Wayland 下 browser agent 直接终止
- **OpenCode #19130**：Windows ARM64 TUI 初始化失败
- **Qwen Code #7964** / **#8036** / **#8052**：v0.21.1 Windows 滚动/选择/虚拟化历史回归
- **GitHub Copilot CLI**：iTerm2、tmux、PTY 缓冲（#2182）问题
- **Kimi #1790**（已合）：Windows 优先使用 pwsh
- **DeepSeek TUI #4723** → **#4977**（已修）：ABNT2 键盘 AltGr+Q 冲突

### 6. 本地化（CJK/RTL/欧洲键盘）
- **Claude Code #80415**：韩文乱码
- **OpenCode #39423**：希伯来语 RTL 完整适配
- **DeepSeek TUI**：印尼语 1,248 keys 完整落地（#4789），中文翻译争议（#4949）
- **OpenAI Codex**：中文本地化（#19518）

### 7. 企业接入 / 自托管 / 合规
- **GitHub Copilot CLI #4300**：BYO-K bearerToken
- **Kimi #2568**：自定义 API Base URL 接 K3 企业网关
- **Claude Code #9740**：自定义 SSH Git marketplace（已挂 9 个月，19 👍）
- **OpenAI Codex PR #36031**：MCP 云管理服务器

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | Anthropic 一体化体验（含 Desktop / VSCode / Marketplace） | Claude 重度用户、企业 Claude 客户 | TUI + Desktop + IDE 三端，最先把 Hooks 体系成熟化 |
| **OpenAI Codex** | 模型路由 + MCP 编排中台 | 多模型开发者、Agent 编排平台 | rust 重写、app-server 协议、StatSIG 指标导出 |
| **Gemini CLI** | Google 模型生态 + Auto Memory | Gemini 用户、需长记忆工作流的开发者 | Nightly 流水线、CareTaker 自动 triage、Caretaker 自动化 |
| **GitHub Copilot CLI** | GitHub-native 自动化（PR/Issue/Workflow） | 企业 GitHub 用户、CI/CD 集成 | 队列管理器（staff）、Sessions 侧边栏、ACP 协议 |
| **Kimi Code CLI** | K3 开源后的企业落地首选 | 国内 K3 私有化部署客户 | 单 Issue 标识成熟度，更关注正确性而非广度 |
| **OpenCode** | Provider 矩阵最广的开源 CLI | 多模型用户、追求中立工具的开发者 | tree-sitter shell 解析、`ui.tabs` plugin API |
| **Pi** | 扩展生态 + 本地/弱模型友好 | 扩展作者、本地 LLM 用户、研究者 | 凭据导出、eval harness、TMUX sixel、`queueCommand` |
| **Qwen Code** | 多厂商模型网关（含 Anthropic 兼容）| 国内开发者、多模型并存场景 | Anthropic 兼容层、GitHub Channel 后台、role-based 路由 |
| **DeepSeek TUI** | 国际化 + 权限治理 | 非英语圈开发者、安全敏感用户 | 印尼语/中文/ABNT2、权限规则可审计、推理等级持久化 |

**关键

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：anthropics/skills 仓库 | 截止日期：2026-07-30

---

## 1. 热门 Skills 排行（按关注度）

### 🔧 #1298 — skill-creator 评测系统全链路修复
- **作者**：MartinCajiao | **状态**：OPEN
- **功能**：修复 `run_eval.py` 永远报 0% recall 的核心 Bug，并连带修复 Windows 流读取、trigger 检测、并行 worker
- **讨论热点**：Issue #556 已积累 12 条评论 + 10+ 独立复现，#1169、#1323、#1261、#1099、#1050、#1061 全部指向同一根因。这是当前**最影响生态可用性**的 P0 级问题
- 🔗 https://github.com/anthropics/skills/pull/1298

### 📐 #514 — document-typography（文档排版质量控制）
- **作者**：PGTBoos | **状态**：OPEN
- **功能**：防止 AI 生成文档中的孤字换行、widow 段落、编号错位等排版缺陷
- **讨论热点**：覆盖所有 Claude 生成的文档场景，社区认为"用户极少主动要求好排版"，属于高普适性增量
- 🔗 https://github.com/anthropics/skills/pull/514

### 📄 #486 — ODT Skill（OpenDocument 读写）
- **作者**：GitHubNewbie0 | **状态**：OPEN
- **功能**：创建/填充/解析 .odt、.ods 文件，触发词覆盖 ODT/ODF/LibreOffice 等
- **讨论热点**：补齐了 Claude 在 ISO 开放文档格式上的能力，与 docx/pdf 形成完整文档矩阵
- 🔗 https://github.com/anthropics/skills/pull/486

### 🛡️ #83 — skill-quality-analyzer + skill-security-analyzer
- **作者**：eovidiu | **状态**：OPEN
- **功能**：对 Skills 做五维质量评估 + 安全审计的元 Skill
- **讨论热点**：与 Issue #492（社区 Skills 冒充官方导致信任边界滥用，43 评论）形成强呼应——元层治理已成社区共识需求
- 🔗 https://github.com/anthropics/skills/pull/83

### 🎨 #210 — frontend-design 改版
- **作者**：justinwetch | **状态**：OPEN
- **功能**：提升 skill 指令的"单次会话内可执行性"与一致性
- **讨论热点**：反映社区对"description 必须足够具体、可执行"的认知升级
- 🔗 https://github.com/anthropics/skills/pull/210

### ✅ #1367 — self-audit（自审计 + 四维推理质量门）
- **作者**：YuhaoLin2005 | **状态**：OPEN（v1.3.0）
- **功能**：交付前做机械验证 + 推理质量审计，覆盖任意技术栈
- **讨论热点**：与 Issue #1385（推理质量门三阶段管线提案）联动，是"AI 输出可靠性"主题的代表作品
- 🔗 https://github.com/anthropics/skills/pull/1367

### 🧪 #723 — testing-patterns（测试模式）
- **作者**：4444J99 | **状态**：OPEN
- **功能**：Testing Trophy 模型 + AAA 模式 + React Testing Library 全栈测试指导
- **讨论热点**：补齐"代码审查/测试生成"方向的能力空白
- 🔗 https://github.com/anthropics/skills/pull/723

### 🌈 #1302 — color-expert
- **作者**：meodai | **状态**：OPEN（更新于 2026-07-21）
- **功能**：覆盖 ISCC-NBS/Munsell/OKLCH/CAM16 等色彩命名与空间知识
- **讨论热点**：填补设计向 Skill 中"色彩"垂直能力的空白
- 🔗 https://github.com/anthropics/skills/pull/1302

---

## 2. 社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 评论数 | 趋势判断 |
|---------|-----------|--------|---------|
| **🔐 安全/信任治理** | #492 社区 Skills 冒充官方 | 43 | ⭐⭐⭐ 最高优先级 |
| **🏢 企业级共享** | #228 启用 Claude.ai 组织级共享 | 16 | ⭐⭐⭐ 强需求 |
| **🧰 skill-creator 基础设施工具性** | #556/#1169/#1061/#1323/#1261 | 3-12 | ⭐⭐⭐ 系统性缺陷 |
| **🧠 Agent 状态压缩** | #1329 compact-memory | 9 | ⭐⭐ 新范式 |
| **🔄 Skills ↔ MCP 互通** | #16 将 Skills 暴露为 MCP | 4 | ⭐⭐ 长期方向 |
| **🤖 Agent 治理/审计** | #412 agent-governance / #1385 推理质量门 | 3-6 | ⭐⭐ 上升中 |
| **📦 多格式文档支持** | #486 ODT / #514 排版 / #1487 上下文爆炸 | 4 | ⭐⭐ |
| **☁️ 跨平台适配** | #29 Bedrock / Windows 系列 | 3-4 | ⭐⭐ |
| **🧹 插件去重** | #189 example-skills/document-skills 重复 | 6 | ⭐ |

**三大明确诉求**：
1. **元层治理**（安全扫描 + 质量分析 + 命名空间隔离）
2. **企业协作**（组织内共享 + 权限模型）
3. **skill-creator 的可用性回归**（评测回路、跨平台、YAML 容错）

---

## 3. 高潜力待合并 Skills（评论活跃 + OPEN）

> 以下 PR 议题度高、解决明确痛点，具备近期落地条件：

| PR | Skill | 关键价值 | 链接 |
|----|-------|---------|------|
| #1298 | skill-creator eval 全链路修复 | 解决 0% recall 系统性 bug，影响所有 Skill 作者 | [🔗](https://github.com/anthropics/skills/pull/1298) |
| #83 | skill-quality-analyzer + security-analyzer | 直接响应 #492 安全议题 | [🔗](https://github.com/anthropics/skills/pull/83) |
| #1479 | plan-file-hygiene | 解决 Issue #1417（计划工件无生命周期管理），最新提交 | [🔗](https://github.com/anthropics/skills/pull/1479) |
| #1367 | self-audit v1.3.0 | 通用质量门，跨技术栈 | [🔗](https://github.com/anthropics/skills/pull/1367) |
| #514 | document-typography | 高频文档场景全覆盖 | [🔗](https://github.com/anthropics/skills/pull/514) |
| #486 | ODT | 补齐开放文档格式 | [🔗](https://github.com/anthropics/skills/pull/486) |
| #723 | testing-patterns | 测试方向完整方案 | [🔗](https://github.com/anthropics/skills/pull/723) |
| #1302 | color-expert | 设计垂直能力 | [🔗](https://github.com/anthropics/skills/pull/1302) |
| #1099 / #1050 | Windows 兼容性 | 跨平台基础 | [#1099](https://github.com/anthropics/skills/pull/1099) · [#1050](https://github.com/anthropics/skills/pull/1050) |
| #1261 | trigger-eval 命令隔离 | 防止污染用户项目 | [🔗](https://github.com/anthropics/skills/pull/1261) |

**预判合并序列**：skill-creator 系列 Bug 修复 → 元层治理 Skill（#83） → 文档/测试增量能力。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"Skill 自身的工程化治理"——即围绕 skill-creator 的可靠性、跨平台能力、命名空间安全与质量评估建立一整套元层基础设施，而非单纯堆叠新功能 Skill。**

---

### 📎 备注
- 报告涉及 50 条 PR + 50 条 Issue 的 Top 切片（PR Top 20 / Issue Top 15）
- PR 评论数在原始数据中显示为 `undefined`，排行依据综合了关联 Issue 热度、复现规模与议题覆盖面
- 所有 PR 当前均为 **OPEN** 状态，反映仓库整体处于高吞吐、社区驱动阶段

---

# Claude Code 社区动态日报
**日期：2026-07-30**

---

## 一、今日速览

过去 24 小时无新版本发布，社区讨论热度集中在**数据丢失类 Bug**（#74260：TUI 中文本块被静默丢弃）、**桌面应用稳定性**（Windows GPU 崩溃、权限绕过回归）以及**模型行为异常**（长时间会话后角色扮演偏移、Fable Safeguard 误触发）等方向。社区对 Subagent 文件写入限制、Windows 终端 keybinding 不工作等老问题持续跟进。

---

## 二、版本发布

无（过去 24 小时无新版本发布）

---

## 三、社区热点 Issues

| # | Issue | 关键信息 | 为何重要 |
|---|---|---|---|
| [#74260](https://github.com/anthropics/claude-code/issues/74260) | Assistant text blocks silently dropped in TUI（数据丢失） | 20 评论 / 13 👍 | **严重数据丢失 Bug**：同一 turn 内 thinking 块之后的 assistant 文本在终端从未渲染，transcript JSONL 中也缺失。影响 2.1.201 + adaptive thinking 模型。 |
| [#81463](https://github.com/anthropics/claude-code/issues/81463) | Claude 在长对话中"切换"为施虐者/自恋者角色 | 13 评论 / 1 👍 | 用户报告严重行为问题，怀疑与 LCR（Legible CoT Reduction）相关，引发对模型对齐的讨论。 |
| [#9740](https://github.com/anthropics/claude-code/issues/9740) | Marketplace 不支持自定义 SSH Git URL | 11 评论 / 19 👍 | **企业场景刚需**：阻止内部 SSH 源接入 marketplace，自 2025-10 提出至今未解决，👍 数表明社区呼声强烈。 |
| [#44657](https://github.com/anthropics/claude-code/issues/44657) | Subagent Write tool 拒绝命名 report/summary/findings/analysis 的 .md | 8 评论 / 13 👍 | 命名规则过严且无 opt-out，影响合理文档生成工作流。 |
| [#58799](https://github.com/anthropics/claude-code/issues/58799) | Claude Desktop (Windows) 闲置时 ~25% CPU + 5MB/s 磁盘写入 | 8 评论 / 1 👍 | 已关闭（标记 stale），但揭示 IndexedDB blob 持久化策略缺陷，值得关注官方后续修复。 |
| [#80444](https://github.com/anthropics/claude-code/issues/80444) | Desktop 1.24012.1 GPU 进程崩溃致 MSIX 包不可启动 | 5 评论 / 0 👍 | Windows 11 + RTX 2080 双驱动复现，crash 后需 Repair 才能恢复，影响严重。 |
| [#80415](https://github.com/anthropics/claude-code/issues/80415) | 韩文在 AskUserQuestion/TodoWrite 卡片中乱码 | 5 评论 / 1 👍 | VSCode 扩展本地化缺陷，凸显 CJK 字符渲染仍需加强。 |
| [#82113](https://github.com/anthropics/claude-code/issues/82113) | 20x Max 套餐使用上限无故降至 1/3 | 4 评论 / 1 👍 | 涉及计费/限额公平性，影响付费用户信任。 |
| [#75599](https://github.com/anthropics/claude-code/issues/75599) | 交互菜单鼠标点击缺乏细粒度控制 | 4 评论 / 10 👍 | v2.1.181 引入的新行为被部分用户视为"易误触"，请求保留旧行为开关。 |
| [#75235](https://github.com/anthropics/claude-code/issues/75235) | Desktop permissions.defaultMode=bypassPermissions 被忽略（回归） | 2 评论 / 0 👍 | 曾经可用的高级配置失效，影响自动化/无人值守流程。 |

**今日新增（高关注潜力）**：
- [#82441](https://github.com/anthropics/claude-code/issues/82441) - Planning 实例过度工程化，known-pattern 任务消耗全天零产出
- [#82443](https://github.com/anthropics/claude-code/issues/82443) - Telegram 插件 `server.ts` 进程孤立堆积，SIGTERM 无效
- [#82442](https://github.com/anthropics/claude-code/issues/82442) - PreToolUse hooks 对二进制文件 Read 永不触发
- [#82440](https://github.com/anthropics/claude-code/issues/82440) - Opus 4.8 长任务 3+ 分钟后报"can't help"并终止会话
- [#82438](https://github.com/anthropics/claude-code/issues/82438) - Fable Safeguard 对"continue please"误触发
- [#82437](https://github.com/anthropics/claude-code/issues/82437) - Computer-use `zoom` 在高分辨率屏输出模糊插值

---

## 四、重要 PR 进展

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#48272](https://github.com/anthropics/claude-code/pull/48272) | Release Notes: 用 changelog summary 丰富版本标题 | **CLOSED**（已合入 main，feed.xml 已采用同格式） | 释放说明可读性提升。 |
| [#82358](https://github.com/anthropics/claude-code/pull/82358) | MCP Guard plugin：MCP 配置安全加固 | OPEN | 针对 `claude mcp get` 将 bearer token 明文 dump 到终端的安全问题（关联 #82351）提出插件化防护方案。 |
| [#82335](https://github.com/anthropics/claude-code/pull/82335) | 修复 GCP gateway setup.sh 在缺 gcloud 时静默退出 | OPEN | `set -euo pipefail` 下命令替换返回 127 导致脚本直接失败，需显式兜底。 |
| [#82320](https://github.com/anthropics/claude-code/pull/82320) | 修复 AWS gateway setup.sh 在 macOS bash 3.2 下中止 | OPEN | `${DIST_SHA256,,}` 是 bash 4 语法，macOS 默认 bash 3.2 会提前终止脚本。 |

> 备注：今日 PR 数量较少（仅 4 条），但质量较高——两条为基础设施稳健性修复，一条为安全防护，一条已合入 main。

---

## 五、功能需求趋势

按 Issue 标签与摘要聚类，过去 24 小时社区关注方向：

1. **跨平台兼容性**（占比最高）
   - Windows TUI（Shift+Enter 失效、GPU 崩溃、权限配置回归）
   - macOS 沙箱（bash 3.2 兼容性、seatbelt 拦截自身 wrapper）
   - Linux Marketplace SSH 源接入

2. **IDE / Desktop 集成深化**
   - VSCode 扩展 CJK 渲染（韩文乱码）
   - Desktop 权限/分发体验（Dispatch 仅 Pro/Max 可用 → #82445）
   - Hook 系统可靠性（systemMessage 不渲染、PreToolUse 二进制文件跳过）

3. **模型相关新能力**
   - Fable 5 模型适配（CLI 信用额度判断异常、误触发 safeguard）
   - Opus 4.8 长上下文稳定性
   - Computer-use 工具精度（高分辨率 zoom 模糊）

4. **企业 / 安全能力**
   - Cloudflare Zero Trust 认证头支持（#82439）
   - MCP 凭据泄露防护
   - Team/Enterprise 功能平权

5. **交互体验增强**
   - 鼠标点击精细化控制（#75599）
   - Markdown 本地文件链接反义转义（#82444）
   - 自动更新失败状态可清理（#82408）

---

## 六、开发者关注点

综合所有 Issue，以下痛点反复出现：

🔴 **数据可靠性**
- 文本块静默丢弃、thinking 块泄露到可见输出 —— 开发者最担忧的是"产出不可见也不可恢复"。

🟠 **桌面 / IDE 体验碎片化**
- Windows 平台问题密度最高（GPU 崩溃、Shift+Enter、CJK 渲染、MSIX 不可启动、磁盘 IO）。
- VSCode 扩展与 CLI 行为不一致（systemMessage、TodoWrite 渲染）。

🟡 **自动化 / 无人值守场景受阻**
- `bypassPermissions` 回归、Hooks 不触发、Sandbox 拦截自身 wrapper，使得 CI/CD 与 Agent 编排难以稳定运行。

🟢 **模型行为可预测性**
- 长会话后的角色偏移、Planning 实例过度工程化、长任务中途被换模型（churned），影响多步骤任务可信度。

⚪ **生态扩展诉求**
- 自定义 SSH marketplace、私有部署认证（Cloudflare Zero Trust）、plugin 资源回收机制 —— 反映**企业落地逐步深化**。

---

> 📌 **观察**：今日 Issue 整体仍以 Bug 报告为主，新功能诉求比例低于近期平均水平，提示社区在 2.1.x 版本上正经历一段"稳定性消化期"。建议关注 #74260（数据丢失）官方回复与下一个 patch 版本。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-07-30**

---

## 📌 今日速览

今日 Codex 仓库极为活跃：**24 小时内连续发布 4 个 alpha 版本**（v0.147.0-alpha.1/2 与 v0.146.0-alpha.9.1/2），说明核心团队正在密集迭代主线特性。同时，merge 了多项与 MCP（Model Context Protocol）和安全策略相关的 CLOSED PR，**MCP 生态、安全沙箱与会话状态管理**仍是当前开发的三大主线。社区方面，呼声最高的仍是 Linux 桌面客户端（Issue #11023 累计 874 👍）、Claude Code 钩子（Hooks）功能对标，以及大量 Windows 桌面版的稳定性问题。

---

## 🚀 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| [rust-v0.147.0-alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.2) | 内测 | 最新 alpha |
| [rust-v0.147.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.147.0-alpha.1) | 内测 | 0.147 系列起点 |
| [rust-v0.146.0-alpha.9.2](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9.2) | 内测 | 0.146 迭代 |
| [rust-v0.146.0-alpha.9.1](https://github.com/openai/codex/releases/tag/rust-v0.146.0-alpha.9.1) | 内测 | 0.146 迭代 |

> 一天之内 4 个 alpha 版本，说明 0.147 主线特性正在紧锣密鼓合入，建议关注 alpha 频道的开发者留意 break change。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#11023] Codex 桌面版 Linux 支持** — 874 👍 / 192 评论
   长期最热需求，因 macOS 桌面版存在性能问题，用户希望能在 Linux 桌面获得原生体验。**社区反响极强**，是仓库历史最高赞的增强请求。
   👉 [openai/codex#11023](https://github.com/openai/codex/issues/11023)

2. **[#21753] Claude Code Hook 完整对标（29+ 事件）**
   推动 Codex Hooks 与 Claude Code 风格完全对齐，覆盖所有生命周期事件。技术贡献者深度参与，是 hooks 系统的"伞型"追踪 issue。
   👉 [openai/codex#21753](https://github.com/openai/codex/issues/21753)

3. **[#33776] Windows 桌面版进程泄漏（WMI/DWM 雪崩）**
   `ChatGPT.exe` 在 Windows 上反复生成数百个 `taskkill.exe`/`conhost.exe`，引发 WMI 风暴与 DWM 退化。**这是当前 Windows 桌面端最严重的稳定性问题**。
   👉 [openai/codex#33776](https://github.com/openai/codex/issues/33776)

4. **[#10561] Plan Mode：增加 "Copy Plan" 与 "Clear Context and Start Coding"**
   补齐 Plan Mode 在规划与执行之间的鸿沟，37 👍，是 Plan Mode 体验改进的高赞建议。
   👉 [openai/codex#10561](https://github.com/openai/codex/issues/10561)

5. **[#25779] 桌面版"元 bug"：会话/回合状态无界增长**
   跨会话/回合的状态无界累积导致冻结、上下文膨胀与活动回合失控。**属于架构层面问题**，影响 macOS、Windows 桌面端。
   👉 [openai/codex#25757](https://github.com/openai/codex/issues/25779)

6. **[#35458] 桌面版会话占用 ~165 GiB 磁盘（base64 截图）**
   每次 compaction 都重新持久化完整截图，并被子代理分支继承，**单次会话最高占用 165 GiB**。是性能/存储维度的重大隐患。
   👉 [openai/codex#35458](https://github.com/openai/codex/issues/35458)

7. **[#34863] app-server 占用 27 GB 内存 + 36 GB 交换**
   同一根因：长会话 + 图像重压缩，导致单个 rollout JSONL 膨胀到 10.2 GB。配合 #35458 一起看，反映了**会话存储策略需要重设计**。
   👉 [openai/codex#34863](https://github.com/openai/codex/issues/34863)

8. **[#35420] OneDrive 工作区会话流频繁断开**
   当 Windows 工作区位于 OneDrive 且 OneDrive 降级时，Codex Stream 持续失败。展示了**云同步文件系统与 Codex 集成**的脆弱性。
   👉 [openai/codex#35420](https://github.com/openai/codex/issues/35420)

9. **[#14722] CLI 与 app-server 会话同步**
   期望 `codex resume` 连接到一个开放会话时，原会话输出能随远程实时同步（如 SSH 跨设备场景）。是 **Codex 走向"会话即云"** 的关键诉求。
   👉 [openai/codex#14722](https://github.com/openai/codex/issues/14722)

10. **[#35311] Windows in-app Browser 启动崩溃循环**
    一次 Microsoft Store 更新日志查询导致 Codex 启动崩溃进入循环，涉及包修复与深控超时。**Windows 桌面版的容错能力急需提升**。
    👉 [openai/codex#35311](https://github.com/openai/codex/issues/35311)

---

## 🛠 重要 PR 进展（Top 10）

1. **[#36055] 暴露 MCP read-only 提示**（已合并）
   将 MCP `readOnlyHint` 注解透传至工具调用开始/完成事件、持久化线程历史和 app-server 的 `mcpToolCall` 项。**MCP 工具描述能力的关键补充**。
   👉 [PR #36055](https://github.com/openai/codex/pull/36055)

2. **[#36054] 移除 `codex exec` 中遗留的 `--full-auto`**
   取消隐藏/已弃用的 `--full-auto` 标志，强制显式 `--sandbox workspace-write`。**清理历史 API 表面**。
   👉 [PR #36054](https://github.com/openai/codex/pull/36054)

3. **[#36051] 避免覆盖符号链接的迁移目标**
   外部代理迁移把空文本符号链接视为可覆盖文件，存在越权修改仓库外文件的风险。修复后改用 symlink 元数据进行检查。**安全加固**。
   👉 [PR #36051](https://github.com/openai/codex/pull/36051)

4. **[#36049] 工具调用指标退出 Statsig 导出**
   `codex.tool.call` 与 `codex.tool.call.duration_ms` 改为运行时指标，仅通过显式 OTLP 导出器输出。**避免遥测数据误用**。
   👉 [PR #36049](https://github.com/openai/codex/pull/36049)

5. **[#36045] 区分"未知"与"不支持"MCP 认证状态**
   OAuth 发现失败不应被报告为 `unsupported`（无法下结论），新增 `unknown` 状态。**提升 MCP 集成的诊断准确性**。
   👉 [PR #36045](https://github.com/openai/codex/pull/36045)

6. **[#36039] 限制 MCP 目录分页**
   工具、资源、模板发现统一应用共享分页收集器：每目录最多 100 页 / 1024 项。**防止恶意 MCP 服务器耗尽资源**。
   👉 [PR #36039](https://github.com/openai/codex/pull/36039)

7. **[#36037] allow 修订失败时拒绝网络访问**
   网络策略修订失败时不能再"放行"主机。**收严网络沙箱的失败语义**。
   👉 [PR #36037](https://github.com/openai/codex/pull/36037)

8. **[#36036] TUI 支持 `/fork` 命名**
   `/fork` 接受可选线程名，自动应用到新 fork 的线程并刷新会话元数据。**提升 TUI 多线会话管理体验**。
   👉 [PR #36036](https://github.com/openai/codex/pull/36036)

9. **[#36035] stdio app-server 连接关闭时退出**
   之前 stdin 关闭但远程控制客户端仍连接时，stdio app-server 不会退出。修复后追踪连接来源，stdio 关闭即可关机。**生命周期正确性**。
   👉 [PR #36035](https://github.com/openai/codex/pull/36035)

10. **[#36031] MCP CLI 命令加载云管理服务器**
    `codex mcp list/get/login/logout` 现加载云配置包，可解析企业级 MCP 服务器；`add`/`remove` 仍限于用户配置。**企业与个人的边界更清晰**。
    👉 [PR #36031](https://github.com/openai/codex/pull/36031)

> 另有 PR [#36008](https://github.com/openai/codex/pull/36008)（宠物素材走共享 HTTP 客户端，CDN 跳转走统一路由）、[#36014](https://github.com/openai/codex/pull/36014)（OpenAI Docs 技能源路由优化）一并值得一看。

---

## 📈 功能需求趋势

从近 24 小时高活跃 Issues 提炼，社区最关注的方向是：

| 方向 | 代表 Issue | 社区关注度 |
|------|-----------|-----------|
| **Linux 桌面客户端** | #11023 | ⭐⭐⭐⭐⭐ 历史最高赞 |
| **Hooks 系统对标 Claude Code** | #21753, #17148 | ⭐⭐⭐⭐ |
| **Windows 桌面端稳定性** | #33776, #35311, #35113, #36025, #35914 | ⭐⭐⭐⭐⭐ |
| **会话/状态管理（持久化、同步、压缩）** | #25779, #35458, #34863, #25290, #14722 | ⭐⭐⭐⭐ |
| **Plan Mode UX** | #10561 | ⭐⭐⭐ |
| **MCP 生态** | #21753, #18486, #34684, #36055, #36039 | ⭐⭐⭐⭐ |
| **本地化与多语言** | #19518（中文） | ⭐⭐ |
| **性能与资源占用** | #34863, #35458, #23026, #33258 | ⭐⭐⭐⭐ |
| **云端工作区与 Project 流程** | #33723, #35420 | ⭐⭐⭐ |
| **桌面端非核心功能** | #33818（宠物渲染）、#35945（Markdown 链接） | ⭐ |

---

## 💡 开发者关注点

总结今日反馈中的高频痛点：

1. **Windows 桌面端是重灾区**—进程泄漏、崩溃循环、PATH 重复变量、Google Drive/OneDrive 沙箱失败、WMI 风暴、cursor 抖动等**超过 10 条** Windows 专属 bug 被提出。亟待专项治理。

2. **会话存储与上下文压缩的设计缺陷**——多个高赞 Issue（#25779, #35458, #34863）指向同一根因：**会话/回合状态无界增长 + 图像/截图被重复 base64 持久化**。开发者强烈呼吁建模层级的存储策略重设计（截图去重、外链存储、按需 materialize）。

3. **Claude Code 兼容性需求**——Hooks、Pre/PostCompact 等特性的诉求意味着社区希望 **Codex CLI 与 Claude Code 在工作流自动化层面具备高度可互换性**，这是商业策略与生态适配共同驱动的需求。

4. **会话远程同步缺失**——`codex resume` 不支持跨设备会话同步（#14722），远程协作 / SSH 场景体验有割裂。

5. **MCP 生态从"能跑"走向"安全可控"**——多个 PR 集中在 MCP 上限（分页、OAuth 状态、cloud 加载、network 策略）。开发者关注 **MCP 不只是新能力，更是新的攻击面**，需要工程化的防护设计。

6. **Linux 桌面端长期空缺**——长期呼声 #11023 已成为社区第一大 enhancement，肉眼可见影响 Codex 在 Linux 开发者群体中的渗透率。

7. **云端 Project/Work 流与本地会话边界模糊**——#33723 提出"云 / 本地 / SSH 工作空间被无差别合并"，开发者希望产品层给出更清晰的 mental model。

---

*📅 报告生成时间：2026-07-30 | 数据来源：github.com/openai/codex*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-07-30** | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日发布 nightly 版本 **v0.55.0-nightly.20260730.gdc859e8e4**，社区关注点集中在 **Subagent 可靠性** 与 **Auto Memory 系统缺陷**：超过半数高优先级 Issue 涉及 agent 异常状态（挂起、错误上报成功、绕过权限等）。同日合并了 PTY 内存泄漏修复、SSRF 漏洞修复、macOS 沙箱崩溃修复等关键安全与稳定性补丁，整体趋势是 Gemini CLI 正在从"功能扩展期"进入"质量收敛期"。

---

## 🚀 版本发布

### [v0.55.0-nightly.20260730.gdc859e8e4](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260730.gdc859e8e4)

Nightly 自动化发布，整合了 v0.53.0 和 v0.54.0-preview.0 的 changelog 内容。当前主分支已合入多项关键修复，包括：

- PTY 内存与文件描述符泄漏修复（PR #27154）
- `thoughtSignature` 丢失导致 400 错误的回归修复
- macOS sandbox 模式下 Seatbelt profile 缺失的启动崩溃修复
- 即将支持 `gemini-3.5-flash` / `gemini-3.6-flash` 模型选择器

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 核心问题 |
|---|-------|--------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 `MAX_TURNS` 后错误报告为 `GOAL success` | **p1** | 12 | **状态语义失真**：agent 实际上耗尽回合未完成任务，但终止原因标注为成功，严重误导后续依赖该状态的逻辑。已被标记 `need-retesting`。 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 调用即挂起 | **p1** | 8 | 调用子 agent（包括简单建文件夹）会无限挂起，用户只能等待一小时后取消；显式禁用 defer to sub-agents 后才正常。点赞 8，社区反映强烈。 |
| 3 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 健壮的组件级评测体系（EPIC） | **p1** | 7 | 已有 76 个 behavioral eval 覆盖 6 个模型，作者提议引入"组件级"评测以更精确度量 agent 各模块质量。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) 评估 AST-aware 文件读取/搜索/映射的价值（EPIC） | **p2** | 7 | 探索用 AST 工具（如 `tilth`/`glyph`）替代粗糙的文件读取，降低 token 消耗、提升 `codebase_investigator` 精度。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不会主动调用自定义 skills 和 sub-agents | **p2** | 6 | 即便用户配置了 gradle/git 等 skill，模型在相关任务中也不会主动使用，反映出 skill 路由与意图匹配的薄弱。 |
| 6 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | **p2** | 5 | 提取 agent 跳过低信号 session 后该记录无法标记为已处理，会反复出现在候选列表中。 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后仍卡在 "Waiting input" | **p1** | 4 | 即便命令已退出，Gemini 仍显示 shell 处于活动状态并等待用户输入，简单命令频繁复现。 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | **p1** | 4 | Wayland 桌面环境下 `browser_agent` 直接终止，影响 Linux 桌面用户体验。 |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser agent 的会话接管与锁恢复 | **p3** | 4 | 现有 `BrowserManager` 是 fail-fast 策略，遇到锁定的 persistent profile 即放弃，缺少自动接管或恢复机制。 |
| 10 | [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) v0.33.0 起 subagent 在未配置时仍自动启用 | **p2** | 3 | 用户明确禁用了 Agents 模式，但 subagents（如 generalist）仍在 MCP 场景下被调用，涉及**权限边界**问题。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 类别 | 说明 |
|---|----|------|------|
| 1 | [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) **propagate `InvalidStreamError` 细节到 UI** | p1 / core | 修复空响应错误场景：把错误 `type` 与 `message` 上传到 UI，用户可看到 `/compress`、换模型等具体排错建议。 |
| 2 | [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) **保留 `thoughtSignature` 修复 400 错误** | p2 / agent | 修复 0.53.0 引入的回归：并行工具调用时 `thoughtSignature` 被剥离导致 400 Bad Request。 |
| 3 | [#27154](https://github.com/google-gemini/gemini-cli/pull/27154) **修复 PTY 内存与 FD 泄漏** ✅ 已合入 | p2 / core | `ShellExecutionService` 的 PTY 条目与 headless 终端此前从不 GC；改为同步删除，根除长时间运行下的内存累积。 |
| 4 | [#28485](https://github.com/google-gemini/gemini-cli/pull/28485) **模型选择器加入 gemini-3.5-flash** | p2 / cli | 修复 v0.51.0 用户无法选择 3.5/3.6 Flash 的问题；旧路径仅暴露 `DEFAULT_GEMINI_FLASH_MODEL`。 |
| 5 | [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) **修复 web-fetch 的 SSRF 漏洞** | p1+p2 / security | `isBlockedHost` 仅同步检查字面 IP，对解析到内网（如 `169.254.169.254`）的域名无防护；切换为已有 `isPrivateIpAsync` DNS 解析。 |
| 6 | [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) **macOS Seatbelt profile 回退到内嵌版本** | cli | 修复 sandbox 模式下静态 `.sb` 文件找不到导致的启动崩溃；回退到内嵌副本。 |
| 7 | [#28588](https://github.com/google-gemini/gemini-cli/pull/28588) **Caretaker 发布 TRIAGED 事件到 Pub/Sub** | infra | issue triage 完成后向 `ready-for-code` topic 发布 `github_metadata + workable_spec`，驱动下游代码生成 workflow。 |
| 8 | [#28529](https://github.com/google-gemini/gemini-cli/pull/28529) **Caretaker agent 的 GCP Cloud Run 部署脚本** | infra | 提供 Ingestion Service、Triage Worker、Egress Service 一键部署能力。 |
| 9 | [#20170](https://github.com/google-gemini/gemini-cli/pull/20170) **允许无 `toolConfig` 的 subagent 注册 MCP 工具** | p1 / core | 修复父注册表中 MCP 工具以短名存储、与 `registerToolByName` 的 `__` 分隔符校验不一致导致的注册失败。 |
| 10 | [#25364](https://github.com/google-gemini/gemini-cli/pull/25364) **捕获 `RangeError: Invalid string length`** | agent | 当 `JSON.stringify` 巨型会话对象时 V8 抛错未被捕获导致 CLI 崩溃；新增处理后行为优雅降级。 |

---

## 📈 功能需求趋势

综合近 24 小时活跃 Issue，开发者社区最关注的方向可归纳为五大类：

1. **🤖 Agent / Subagent 可靠性与可控性**
   - 状态语义失真（#22323）、无响应挂起（#21409、#25166）、未授权激活（#22093）是出现频率最高的痛点。
   - 核心需求：可观测性、子 agent 工具/回合上限、终止原因标准化。

2. **🧠 Auto Memory 系统整改**（SandyTao520 的 #26516 系列）
   - 低信号重试（#26522）、无效 patch 处理（#26523）、确定性 secret 脱敏（#26525）形成完整治理 EPIC，是当前投入最密集的工作流。

3. **🌐 新模型与浏览器能力**
   - Gemini 3.5/3.6 Flash 选择器（PR #28485）、Browser agent 在 Wayland / 锁恢复 / 配置覆盖（#21983、#22232、#22267）方面持续打磨。

4. **🛡️ 安全与沙箱**
   - SSRF 修复（#28557）、macOS Seatbelt 启动崩溃（#28551）、Auto Memory 隐私脱敏（#26525）三线并进。

5. **🛠️ 工具链智能化**
   - AST-aware 文件读取/搜索（#22745、#22746）希望降低 token 噪声；
   - 组件级评测（#24353）与 Subagent trajectory 通过 `/chat share` 暴露（#22598）共同推动 eval-infrastructure 成熟。

---

## 💬 开发者关注点（高频痛点）

- **"Agent 跑得好好的突然不响应"** —— generalist agent / shell 后卡死的报告密集出现，提示底层 PTY、超时、终止语义链路仍未完全打通。
- **"我配置的 skill/subagent 不被调用"** —— 反映意图识别层薄弱，开发者期望更主动的 skill routing。
- **"权限边界不一致"** —— v0.33.0 后 subagent 绕过用户设置自动启用，是企业用户最敏感的话题。
- **"Terminal 渲染抖动 / 外部编辑器退出后花屏"** —— #21924、#24935 等 issue 显示 Ink 渲染层在 resize / TUI 交互下仍需优化。
- **"工具数 > 128 触发 400"** —— #24246 提示工具过滤策略需要更智能化（如 scope-based 收敛）。
- **"bug 报告缺少子 agent 上下文"** —— #21763 直接影响维护者定位效率，与 `/chat share` 能力扩展诉求（#22598）联动。

---

> 📊 **日报小结**：Gemini CLI 已进入"v0.5x 系列"成熟阶段，Nightly 版本快速迭代（每日一发），Issues 数量与分类稳定性持续提升；社区主线从"功能扩展"转向"Agent 可靠性 + Auto Memory + 评估基建"三大方向。建议开发者关注 **v0.54.0-preview.0 → v0.55.0** 正式版的发布时间窗口，以及 Auto Memory 系列 issue（#26516 umbrella）的合并进展。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-30**

---

## 📌 今日速览

v1.0.76 主版本正式发布，带来插件细粒度控制、grok-4.5 模型支持、可定向队列管理器（staff）以及全新的 Sessions 侧边栏等重要功能；同时子版本 76-1 至 76-5 在 24 小时内高频迭代，反映团队正集中修复 v1.0.76 引入的若干回归问题（尤其是日志级别崩溃、子进程僵尸、PTY 卡死等）。社区整体热度集中在"会话稳定性"、"子代理行为一致性"和"终端兼容性"三大方向。

---

## 🚀 版本发布

### v1.0.76（2026-07-29）
本版本为近期最大的一次功能更新，包含：

- **🧩 插件控制面板升级**：`/plugins` 现可对 plugins、instructions、agents、LSP servers 和 hooks 进行 enable/disable 细粒度控制（[v1.0.76-5](https://github.com/github/copilot-cli/releases)）
- **🤖 新模型支持**：新增 **grok-4.5** 模型
- **🔒 沙箱强化**：macOS/Linux 上对相对路径与符号链接的拒绝路径强制生效（Windows 仍不支持按路径拒绝）
- **📝 输入改进**：未发送的 prompt 文本现在会保留，不会因刷新而丢失
- **📋 队列管理器（staff）**：新增可定向队列，支持重排、编辑、删除、重复与立即发送排队消息
- **🗂️ Sessions 侧边栏**：新增多会话管理视图，可切换、创建并查看会话状态，通过 `/experimental` 模式启用
- **🎨 性能与 UI 体验**：`/diff` 大文件多文件差异渲染更快；自动更新通知去掉警告色，并建议 `/restart`；分屏侧边栏的 hover-to-focus 默认关闭，可通过 `sidebar.hoverFocus` 开启

> ⚠️ 注意：v1.0.76-1 在 Windows 上引入了一个严重回归——除 `all`/`default` 之外的日志级别会导致 CLI 静默退出码 1（[Issue #4285](https://github.com/github/copilot-cli/issues/4285)），建议生产环境谨慎升级。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 👍 | 为什么值得关注 |
|---|-------|------|----|----------------|
| [#1613](https://github.com/github/copilot-cli/issues/1613) | 内置 git worktree 生命周期管理 | OPEN | **36** | 本月热度最高的 feature request，建议 Copilot 在工作流中自动创建/销毁 worktree，已获 36 赞 |
| [#4163](https://github.com/github/copilot-cli/issues/4163) | v1.0.71 不回收子进程，僵尸进程累积 | **CLOSED** | 3 | 重大回归 bug 已被关闭（v1.0.76 已修），但 [#4290](https://github.com/github/copilot-cli/issues/4290) 报告 AlmaLinux 8.10 仍未解决 |
| [#2770](https://github.com/github/copilot-cli/issues/2770) | CLI 卡在 "Cancelling" 状态，Enter 失灵 | OPEN | 9 | 长期未解决的关键可用性问题，与服务端限流相关，slash 命令失效影响所有用户 |
| [#1168](https://github.com/github/copilot-cli/issues/1168) | 单次请求内反复授权（authorization fatigue） | OPEN | 2 | 反映权限粒度过细导致体验下降，影响企业用户的采纳意愿 |
| [#4293](https://github.com/github/copilot-cli/issues/4293) | 完整工具访问的 sub-agent 返回空内容且无报错 | OPEN | 0 | 新发现的 sub-agent 一致性问题，仅受限工具类型可工作，直接影响多代理编排可靠性 |
| [#4202](https://github.com/github/copilot-cli/issues/4202) | v1.0.73 内置 `view` 工具对存在文件报"Path does not exist" | OPEN | 0 | 从 1.0.72 起的回归，影响文件读取基础能力 |
| [#2182](https://github.com/github/copilot-cli/issues/2182) | 命令超过 PTY 缓冲区（macOS 4KB）时 CLI 卡死 | OPEN | 2 | macOS 终端命令死锁问题，长期未解 |
| [#2703](https://github.com/github/copilot-cli/issues/2703) | 工作完成后 session 卡死，Escape 进入永久 Cancelling | OPEN | 2 | 与 [#2770](https://github.com/github/copilot-cli/issues/2770) 现象类似，疑似同类根因 |
| [#4295](https://github.com/github/copilot-cli/issues/4295) | AI Credits 用量预警（与 VS 2026 IDE 看齐） | OPEN | 0 | 高价值体验对齐需求，便于企业用户控制成本 |
| [#4286](https://github.com/github/copilot-cli/issues/4286) | 流式 `input_json_delta` 缓冲至完成才下发，大工具参数导致多分钟静默 | OPEN | 0 | 流式响应架构问题，影响所有大型工具调用的体感响应速度 |
| [#4300](https://github.com/github/copilot-cli/issues/4300) | 支持 BYO-K 的 bearerToken 鉴权 | OPEN | 0 | 企业合规刚需——当前仅 key-based 鉴权无法满足合规环境 |
| [#4113](https://github.com/github/copilot-cli/issues/4113) | ACP 模式未实现 `session/close`，客户端无法释放会话 | OPEN | 1 | 阻塞 ACP 生态集成的协议缺陷 |

> 完整列表见 [Issues 看板](https://github.com/github/copilot-cli/issues)

---

## 🔧 重要 PR 进展

> ⚠️ **说明**：过去 24 小时仅有 1 条 PR 处于活跃状态，PR 侧活跃度显著低于 Issue 侧。

| # | PR | 状态 | 说明 |
|---|----|------|------|
| [#4100](https://github.com/github/copilot-cli/pull/4100) | shangti0168 | OPEN | 由 huangyoufeng76-debug 提交，作者描述为"安全性"相关，但摘要内容较为简略，需关注后续补充 |

---

## 📈 功能需求趋势

通过对 28 条更新 Issue 的标签与摘要提炼，社区需求方向呈现以下分布：

| 方向 | 代表性 Issue | 关注度 |
|------|-------------|--------|
| **🧠 模型与多代理** | [#4293](https://github.com/github/copilot-cli/issues/4293)、[#4287](https://github.com/github/copilot-cli/issues/4287)、[#4282](https://github.com/github/copilot-cli/issues/4282) | sub-agent 模型继承、BYO 模型、跨会话模型一致性 |
| **🖥️ 终端与渲染兼容** | [#4296](https://github.com/github/copilot-cli/issues/4296)、[#4292](https://github.com/github/copilot-cli/issues/4292)、[#2182](https://github.com/github/copilot-cli/issues/2182)、[#4294](https://github.com/github/copilot-cli/issues/4294) | iTerm2 粘贴、tmux 配色、PTY 缓冲、COLORTERM 注入 |
| **🔐 企业/合规与权限** | [#4300](https://github.com/github/copilot-cli/issues/4300)、[#1168](https://github.com/github/copilot-cli/issues/1168)、[#4298](https://github.com/github/copilot-cli/issues/4298)、[#4283](https://github.com/github/copilot-cli/issues/4283) | bearerToken、授权疲劳、沙箱工具白名单、托管插件持久化 |
| **🗂️ 会话与工作流** | [#1613](https://github.com/github/copilot-cli/issues/1613)、[#4140](https://github.com/github/copilot-cli/issues/4140)、[#4289](https://github.com/github/copilot-cli/issues/4289)、[#2703](https://github.com/github/copilot-cli/issues/2770) | git worktree、resume 排序、跨项目 PR、会话卡死 |
| **📊 体验对齐** | [#4295](https://github.com/github/copilot-cli/issues/4295)、[#4297](https://github.com/github/copilot-cli/issues/4297)、[#4204](https://github.com/github/copilot-cli/issues/4204) | Credits 预警、日志级别崩溃、`.agents` 发现机制 |

---

## 💬 开发者关注点

从反馈中可归纳出以下**高频痛点**与**期望方向**：

### 🔴 高频痛点

1. **会话稳定性崩坏**——多个 Issue（[#2770](https://github.com/github/copilot-cli/issues/2770)、[#2703](https://github.com/github/copilot-cli/issues/2703)、[#4299](https://github.com/github/copilot-cli/issues/4299)）指向同一类问题：长会话中模型响应、Cancel、Escape 恢复之间的状态机存在缺陷，导致 CLI 进入"半可用"或"完全卡死"。
2. **v1.0.76 引入的回归**——日志级别崩溃（[#4285](https://github.com/github/copilot-cli/issues/4285)、[#4297](https://github.com/github/copilot-cli/issues/4297)）、`view` 工具失效（[#4202](https://github.com/github/copilot-cli/issues/4202)）、typing latency 飙升（[#4299](https://github.com/github/copilot-cli/issues/4299)）集中在最近版本，提示快速发版节奏下回归测试覆盖不足。
3. **子代理模型继承不一致**——general-purpose sub-agent 忽略 `inherit model` 配置（[#4287](https://github.com/github/copilot-cli/issues/4287)）、空响应无报错（[#4293](https://github.com/github/copilot-cli/issues/4293)），影响代理编排可信度。
4. **跨平台/终端兼容性碎片化**——macOS iTerm2、tmux、Windows 启动崩溃各自报告，问题面广但单点修复价值高。

### 🟢 高频期望

1. **企业合规**：bearerToken、托管插件持久化、沙箱工具白名单是 GitHub Enterprise 客户的核心诉求。
2. **IDE 体验对齐**：与 VS Code / VS 2022 的功能 parity（Credits 预警、会话管理）。
3. **多任务编排**：git worktree 自动管理、跨多项目 session、多并发 session 可视化。
4. **流式响应改进**：大工具参数时希望流式 token 下发而非完整缓冲。
5. **授权体验优化**：减少同一请求内多次授权弹窗，提升"代理可自主决策"的安全粒度。

---

*数据来源：[github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成时间：2026-07-30*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-07-30  
**数据来源**：github.com/MoonshotAI/kimi-cli  
**数据窗口**：过去 24 小时

---

## 1. 今日速览

今日 Kimi Code CLI 仓库整体处于平稳迭代期，**无新版本发布**。社区动态以 PR 修复为主，涵盖工具链稳健性（`StrReplaceFile` 链式编辑计数）、Hook 系统兼容、Windows Shell 体验优化以及 `/usage` 面板的可读性改进。唯一的新增 Issue 来自企业用户，呼吁支持**自定义 API Base URL** 以接入企业级 K3 网关，反映出 K3 开源后企业落地的迫切诉求。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新 Release**，建议关注 Open Issue 中即将合入的功能。

---

## 3. 社区热点 Issues

> 注：今日窗口内仅 **1 条** Issue 更新，按重要程度展开。

### 🔥 #2568 — 支持自定义 API Base URL 以接入企业级 K3 网关
- **状态**：OPEN｜👍 0｜💬 0  
- **作者**：kwu18-png｜**创建**：2026-07-29  
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2568

**为什么值得关注**  
该需求直指 **Kimi K3（2.8T 参数）2026 年 7 月正式开源** 之后的企业落地关键能力。当前 kimi-cli 仅支持官方 API 端点，企业场景普遍面临：
1. **限流瓶颈**：单租户 API 并发限制影响团队协作效率  
2. **跨地域延迟**：单区域部署无法满足全球化团队时延要求  
3. **缺乏高可用**：缺少自动故障切换（failover）机制  
4. **安全合规**：API Key 分散管理，难以做统一审计

**社区反应**：发布不到 24 小时尚无互动，但鉴于 K3 开源热度与企业市场的硬性需求，预计将快速获得 maintainer 关注。建议跟进 maintainer 对"环境变量优先级"与"配置 schema 兼容性"的反馈方向。

---

## 4. 重要 PR 进展

今日窗口共 **4 条 PR** 更新，按重要性排序：

### 🔧 #2569 — 修复 `StrReplaceFile` 链式编辑计数 BUG
- **状态**：OPEN｜**作者**：aalhadxx｜**创建**：2026-07-29  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2569  
- **亮点**：原实现将每次 `StrReplaceFile` 编辑都以**原始文件内容**为基准做匹配计数，导致连续编辑中"后续编辑依赖前序编辑结果"的常见场景被错误地记为 0 处替换。该 PR 改用**中间态内容**作为基准，修复了 AI Agent 在多步骤重构文件时的状态判定失真问题，对代码自动重构类工作流具有重要正确性意义。

### 🔧 #2176 — 修复 `UserPromptSubmit` Hook 对 `ContentPart` 的处理
- **状态**：OPEN｜**作者**：tears-mysthrala｜**创建**：2026-05-07（**本次重新更新于 07-29**）  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2176  
- **亮点**：解决了关联 Issue #2148——当用户输入为 `list[ContentPart]`（多模态消息默认值）时，Hook 接收到的 `prompt` 与 `matcher_value` 为空字符串，导致**正则匹配器完全失效**。该修复补齐了 Hook 系统在多模态场景下的可用性，是 K3 多模态能力落地 CLI 工作流的必要补丁。

### ✨ #1790 — Windows 下 Shell 工具优先使用 `pwsh`
- **状态**：✅ CLOSED｜**作者**：scwf｜**创建**：2026-04-08  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/1790  
- **亮点**：`Environment.detect()` 新增解析顺序：PATH → `Program Files\PowerShell\7` → System32 `powershell.exe` → PATH powershell。同时新增 `pwsh-from-PATH` 与 `pwsh-from-install` 两组测试用例。**已合并**，提升 Windows 平台 Shell 命令执行体验，让 PowerShell 7 成为默认解释器。

### ✨ #2567 — `/usage` 面板显示绝对重置时间
- **状态**：✅ CLOSED｜**作者**：versun｜**创建**：2026-07-28  
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2567  
- **亮点**：API 已返回 `reset_at` / `resetAt` 等绝对时间戳，但前端仅展示模糊相对值（如 `resets in 4d`）。该 PR 改为显示**绝对本地时间**，同时保留相对时长作为辅助信息。改动虽小，但显著提升了用户在配额管理上的可预期性。**已合并**。

---

## 5. 功能需求趋势

基于窗口内的 Issue 与 PR 信号，可提炼出以下**社区关注方向**：

| 趋势方向 | 信号来源 | 解读 |
|---------|---------|------|
| 🏢 **企业级接入能力** | Issue #2568 | K3 开源后，自定义 Base URL、网关代理、多区域路由是企业 P0 需求 |
| 🪟 **Windows 体验优化** | PR #1790（已合） | PowerShell 7 优先级、路径探测逻辑仍需打磨，Windows 开发者体验是持续赛道 |
| 🪝 **Hooks 系统的多模态兼容性** | PR #2176 | `UserPromptSubmit` 等 Hook 在 `ContentPart` 场景下的行为缺失，影响可观测性与可扩展性 |
| 🛠️ **Agent 工具正确性** | PR #2569 | 文件编辑、Shell 执行等核心工具的"链式操作正确性"是 Agent 鲁棒性的关键 |
| 📊 **可用性与信息透明度** | PR #2567 | 配额时间显示、日志、错误提示等"小而重要"的 UX 改进持续涌现 |

---

## 6. 开发者关注点与痛点

从今日活跃讨论中可总结出几个**高频痛点**：

1. **企业网关配置缺失** 🔴  
   K3 走企业内网 / 私有化部署时，CLI 缺少切换 Base URL 的标准入口，临时方案往往需要改源码或反向代理，维护成本高。

2. **多模态与 Hook 的"语义断层"** 🟡  
   当用户输入为图片 / 文件等多模态形式时，Hook 接口退化为空字符串，破坏了基于正则的拦截器生态，影响安全审计、内容过滤等场景。

3. **复杂编辑语义的不一致** 🟡  
   `StrReplaceFile` 的计数逻辑与"链式编辑"的实际语义不符，会让 AI 误判"还没改完"，造成循环重试。

4. **CLI 信息可读性不足** 🟢  
   `/usage` 模糊时间显示是典型例证——这类"看似微小"的开发者体验损耗在企业团队日均高频使用下会被显著放大。

---

### 📌 维护者建议
- ⚡ **优先响应** Issue #2568：自定义 Base URL 是 K3 企业落地的入口级配置，建议尽快提供 `KIMI_API_BASE` 环境变量 + 配置文件双通道支持。
- 🔍 **关注 PR #2176 的多模态兼容性补丁**：合并后建议在 docs 中明确 Hook 输入协议，避免后续兼容性问题。
- 📈 **社区体量观察**：单日仅 1 个新 Issue + 4 个 PR 更新，说明仓库已进入**质量沉淀期**，适合推动长期 feature（如 Web/IDE 集成）以激活下一波增长。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-30

> 数据源：[anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计窗口：过去 24 小时

---

## 📌 今日速览

今日社区活跃度集中在 **TUI 体验优化** 与 **Provider 兼容性问题** 两大方向。kitlangton 连续提交 4 个 TUI 相关 PR，重点改进长会话下的标签切换与项目切换体验；同时 OpenAI 兼容 Provider（Gemini/LiteLLM）和 Console Go 上游服务相关 Bug 仍在持续发酵。Windows ARM64 原生二进制下 TUI 无法初始化的关键平台缺陷 (#19130) 讨论热度不减。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** 本周构建集中在 master 分支的迭代，尚未打 tag。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#16992](https://github.com/anomalyco/opencode/issues/16992) — [FEATURE] add /btw command ⭐168
- **评论 20 | 状态 OPEN**
- 用户呼吁对齐 Anthropic 在 Claude Code 中推出的 `/btw` 旁路命令，让开发者能在不打断主线任务的情况下补充上下文。**社区反应强烈，👍 数高达 168**，是近一周呼声最高的 Feature Request。反映出用户对「主线程不被中断的注入通道」的普遍需求。

### 2. [#19130](https://github.com/anomalyco/opencode/issues/19130) — Windows ARM64 OpenTUI 初始化失败
- **评论 15 | 👍 10 | 状态 OPEN**
- Windows 11 ARM64 原生二进制下 CLI 命令正常，但 TUI 因 `bun:ffi dlopen TinyCC` 错误无法启动。该问题阻塞 ARM64 设备的核心使用场景，是当前**最关键的平台兼容性缺陷**。

### 3. [#30680](https://github.com/anomalyco/opencode/issues/30680) — 自动压缩死循环
- **评论 15 | 状态 CLOSED**
- OpenCode 进入无限 auto-compaction 并消耗 token，最终停止响应。即便空目录、空配置也能复现。**已关闭** 表明修复方案已落地，建议关注后续版本回归验证。

### 4. [#33356](https://github.com/anomalyco/opencode/issues/33356) — event 表无界增长至 13GB+
- **评论 13 | 👍 2 | 状态 OPEN**
- `~/.local/share/opencode/opencode.db` 因 `event` 表从未裁剪/压缩，最高达 ~13 GB，挤爆 22 GB 卷的 97–99%。**这是长期部署用户的严重资源问题**，缺失 retention/compaction 机制。

### 5. [#13715](https://github.com/anomalyco/opencode/issues/13715) — 嵌套子代理权限请求静默挂起
- **评论 9 | 👍 22 | 状态 OPEN**
- Subagent 派生的子 subagent 触发权限请求时，TUI 不会渲染提示，会话永久挂起。👍/评论比**高达 2.4** 说明这是真实高频痛点，影响多代理工作流。

### 6. [#38801](https://github.com/anomalyco/opencode/issues/38801) — "exiting loop" 异常退出
- **评论 14 | 状态 OPEN**
- 用户长期反馈 OpenCode 经常出现 `exiting loop` 后停滞。即便把 step 调到 80 也难稳定。反映出**运行循环的鲁棒性问题**，对生产可用性影响明显。

### 7. [#14972](https://github.com/anomalyco/opencode/issues/14972) — OpenAI 兼容 Provider 工具后停止
- **评论 12 | 状态 CLOSED**
- Gemini 3 Flash / LiteLLM 等 OpenAI 兼容 Provider 返回 `finish_reason: stop` 即便响应包含 tool call，导致 Agent 循环提前退出。**已修复**，需要确认回滚风险。

### 8. [#1168](https://github.com/anomalyco/opencode/issues/1168) — 链接可点击（Ctrl+左键）
- **评论 9 | 👍 115 | 状态 OPEN**
- 一个**横跨一年的经典 Feature Request**，👍 高达 115。TUI 中 URL 无法 Ctrl+点击打开，极大影响日常使用便捷度。

### 9. [#10570](https://github.com/anomalyco/opencode/issues/10570) — [opentui, windows] 建议增加滚动条和指令预览
- **评论 5 | 👍 4 | 状态 CLOSED**
- Windows PowerShell 环境下 TUI 缺少滚动条与指令历史预览。建议方案由 opencode 自动生成。**已关闭**，可能是合并或被驳回，建议查看最终方案。

### 10. [#38851](https://github.com/anomalyco/opencode/issues/38851) — gpt-5.6-sol 30–35% 就触发压缩
- **评论 5 | 状态 OPEN**
- TUI 上 context 仅到 30–35% 就自动 compaction，未充分利用上下文窗口。说明**压缩触发阈值对不同模型需要差异化配置**。

---

## 🛠️ 重要 PR 进展（精选 10 个）

### 1. [#39589](https://github.com/anomalyco/opencode/pull/39589) — feat(tui): 连接后预取已打开的 session tabs
- 客户端连接后**后台预热**所有打开的 session tab 数据，消除切换时的空白闪烁（长会话下约几百 ms）。属于关键 UX 优化。

### 2. [#39568](https://github.com/anomalyco/opencode/pull/39568) — feat(tui): 长会话下 session 标签切换近常数时间
- 切换标签时**只挂载固定大小的尾部**而不是完整 transcript，解决长会话切换卡顿。明确表示**纯前端改造**，不涉及数据层。

### 3. [#39591](https://github.com/anomalyco/opencode/pull/39591) — feat(plugin): 新增 `ui.tabs` API
- 插件可通过 `ui.tabs` 观察/控制 session 标签，**填补插件层标签交互的空白**，对插件生态扩展至关重要。

### 4. [#39585](https://github.com/anomalyco/opencode/pull/39585) — fix(tui): 命令面板打开后聚焦设置项
- 修复从命令面板搜索 `sounds` 等设置项时焦点丢失问题，确保视口外的选项能立即获得焦点。

### 5. [#39566](https://github.com/anomalyco/opencode/pull/39566) — feat(tui): 项目选择器 + 底部路径 crossfade
- 新增 `/projects` 路由列出已知项目并切换根目录，目录切换时**底部路径带渐隐过渡**，整体体验类比 shell `cd`。

### 6. [#33719](https://github.com/anomalyco/opencode/pull/33719) — fix(mcp): 验证显式 OAuth 认证
- 修复 MCP 认证未真正完成却报告成功的问题，并在缺少标准 OAuth 挑战时返回**可操作的失败信息**。对应 #26195。

### 7. [#38798](https://github.com/anomalyco/opencode/pull/38798) — fix(session): 按时间排序消息以让运行循环能终止
- 修复 `latest()` 与运行循环退出判断依赖 ID 字典序导致**早停或循环不止**的问题。直接关系到会话可终止性。

### 8. [#39567](https://github.com/anomalyco/opencode/pull/39567) — feat(core): 用 tree-sitter 解析 shell 权限命令
- 在权限检查前用 tree-sitter 解析 Bash/PowerShell 命令，**拆解复合命令**并复用 V1 arity 规则生成可复用前缀授权，权限粒度大幅提升。

### 9. [#39423](https://github.com/anomalyco/opencode/pull/39423) — feat(i18n): 添加希伯来语 RTL 支持
- 完整的希伯来语本地化与 RTL 布局适配，对应 #34697 中关于补全 RTL 语言的诉求。

### 10. [#39577](https://github.com/anomalyco/opencode/pull/39577) — fix(opencode): 等待 stdout 排空避免管道输出截断
- 修复 `opencode db`、`session list`、`export` 在管道输出大于 64 KiB 时静默截断且 exit code 仍为 0 的问题。**关闭 #29330**。

---

## 📈 功能需求趋势

从近期 Issues + 👍 热度综合分析，社区诉求集中在以下方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **TUI 体验与可达性** | #16992(`/btw`)、#1168(可点击链接)、#10570(滚动条) | 🔥🔥🔥 高 |
| **长会话性能与数据治理** | #33356(13GB+ 事件表)、#37272(视图跳顶)、#32658(持久化记忆) | 🔥🔥🔥 高 |
| **多模型 Provider 兼容** | #14972(Gemini/LiteLLM)、#38801(exiting loop)、#38851(早压)、#39553(GLM 思维链) | 🔥🔥 中高 |
| **权限/子代理协同** | #13715(嵌套权限挂起)、#37564(自动审批)、#32157(queue/steer/break) | 🔥🔥 中高 |
| **国际化与 RTL** | #34697(RTL 全量)、#39423(希伯来语) | 🔥 中 |
| **平台原生支持** | #19130(Win ARM64)、#32985(GNU Screen) | 🔥 中 |

---

## 💡 开发者关注点

1. **运行循环的鲁棒性是核心痛点**：`exiting loop` 早退、自动压缩死循环、tool call 后停止，三类问题都指向**Agent 循环控制**缺乏统一的状态机约束。

2. **TUI 是产品主战场**：kitlangton 单日 4 个 PR 全部围绕 TUI（标签切换、命令面板、项目切换、插件 API），说明官方正在系统性重构 TUI 性能，长会话下 UX 即将有质变。

3. **Provider 矩阵兼容已成日常负担**：OpenAI 兼容、Anthropic、Console Go、NVIDIA NIM、GLM、Azure Bedrock 各家 `finish_reason` 与推理协议差异显著，**适配成本分散在 issue 中**，建议官方建立 Provider 兼容矩阵文档。

4. **权限系统进入精细化阶段**：tree-sitter 解析 shell 命令、`ui.tabs` API、子代理嵌套权限三类 PR/Issue 表明权限模型正在从「全有/全无」升级为**结构化、上下文感知的分级授权**。

5. **本地存储缺乏治理机制**：`event` 表无界增长（13GB+）暴露了**事件溯源架构的运维盲点**，亟需 retention / compaction 工具或配置项。

6. **跨平台覆盖薄弱**：Windows ARM64、GNU Screen、PowerShell 仍是个别 issue 孤军奋战，缺少**平台兼容性 Roadmap** 的官方表态。

---

*日报生成时间：2026-07-30 · 数据统计基于公开 GitHub Issues/PRs*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-30

## 📌 今日速览

Pi 项目今日发布了 **v0.83.0**，重点增强了凭据导出能力（`pi auth print-api-key` / `pi auth print-bearer-token`）以及无头模式下的 OpenRouter 登录体验，可通过 SSH 粘贴重定向链接完成 `/login`。社区侧修复密集，多个 Provider 适配层（OpenAI/Vertex/Bedrock/llama.cpp）的工具调用与流式统计问题被关闭，Markdown 数学渲染、扩展 API（`navigateTree`、`queueCommand`）成为新一轮关注焦点。

---

## 🚀 版本发布

### v0.83.0（今日发布）

**新特性：**
- **凭据导出**：`pi auth print-api-key` 与 `pi auth print-bearer-token` 导出已配置的凭据，自动处理 OAuth 刷新并执行最低有效期约束，便于在外部客户端或 CI 中复用。
- **OpenRouter 无头登录**：在 SSH 等无浏览器环境中粘贴回调链接即可完成 `/login` 全流程。

> 链接：[Release v0.83.0](https://github.com/badlogic/pi-mono/releases/tag/v0.83.0)（对应仓库 earendil-works/pi）

---

## 🔥 社区热点 Issues（10 条）

| # | 标题 | 评论 | 状态 | 为什么值得关注 |
|---|------|------|------|----------------|
| [#6951](https://github.com/earendil-works/pi/issues/6951) | qwen3-max-preview reasoning effort 未配置 thinkingLevelMap | 8 | CLOSED | 反映 Pi 对国内厂商 API 文档变化的跟进滞后，影响国内用户模型使用 |
| [#1871](https://github.com/earendil-works/pi/issues/1871) | 并行启动时锁竞争误报 "No API key found for openai-codex" | 7 | CLOSED | `pi-subagents` 并行模式下高频踩坑，错误信息误导调试 |
| [#3432](https://github.com/earendil-works/pi/issues/3432) | read 工具默认行数/字节数不可配置 | 6 | CLOSED | 内置工具默认硬编码值的经典痛点，社区长期呼声 |
| [#7199](https://github.com/earendil-works/pi/issues/7199) | Kimi K3 on Fireworks 支持（in-progress） | 5 | OPEN | K3 已在 models.dev 上架但 Fireworks provider 生成器未跟上 |
| [#7153](https://github.com/earendil-works/pi/issues/7153) | `/scoped-models` 阻塞等待目录刷新 ~5 分钟无 UI 反馈 | 4 | OPEN | 用户体验严重问题：命令无加载状态、无错误反馈，疑似死锁 |
| [#5329](https://github.com/earendil-works/pi/issues/5329) | 暴露 Pi 等待用户输入的状态（host integration 用） | 3 👍5 | OPEN | cmux 等集成方高度关注，是扩展生态的关键基础设施 |
| [#7253](https://github.com/earendil-works/pi/issues/7253) | `/compact` 在上下文 90% 时触发两次，循环无法停止 | 3 | OPEN | 自动压缩与手动压缩的状态机冲突，导致必须 ESC 才能退出 |
| [#7264](https://github.com/earendil-works/pi/issues/7264) | 支持 Markdown LaTeX 数学渲染（`$$...$$`） | 3 | CLOSED | 数学/科研场景刚需，与 #7252 的 LaTeX 渲染问题相关联 |
| [#7130](https://github.com/earendil-works/pi/issues/7130) | Kitty 终端 Backspace 删除 2 字符（key-release 未过滤） | 3 | OPEN | Kitty 键盘协议在 Pi 中的边界处理缺陷 |
| [#7255](https://github.com/earendil-works/pi/issues/7255) | Vertex 折叠 Gemini finishReason 报 "unknown error" | 2 | CLOSED | 多 Provider 错误归一化丢失信息的典型问题 |

---

## 🛠 重要 PR 进展（10 条）

| # | 标题 | 类型 | 说明 |
|---|------|------|------|
| [#7293](https://github.com/earendil-works/pi/pull/7293) | queue extension commands after agent runs | 控制面 | 新增 `pi.queueCommand(name, args?)`，扩展命令在 AgentSession 非流式 settled 边界统一派发，避免与模型可见的 `/command` 行为冲突 |
| [#7288](https://github.com/earendil-works/pi/pull/7288) | preserve function arguments with empty custom payloads | 修复 | OpenAI 兼容流中 `custom: {}` 时优先使用合法 function payload，关闭 #7160 |
| [#7122](https://github.com/earendil-works/pi/pull/7122) | fix(tools): byte count in write / find warning / surrogate split | 修复 | 三连击：`content.length` 应为 UTF-8 字节、find 限警告误报、truncateLine 对代理对截断 |
| [#7289](https://github.com/earendil-works/pi/pull/7289) | feat: comparative Pi eval harness | 评估 | 种子化、可重复的多框架对比，输出 token / latency / cost 增量，并基于 Vitest 注册产物 |
| [#7286](https://github.com/earendil-works/pi/pull/7286) | preserve structured metadata for Bedrock provider errors | 修复 | Bedrock 错误中保留结构化元数据，便于上层诊断（关闭 #7224） |
| [#7272](https://github.com/earendil-works/pi/pull/7272) | preserve providers raw stop reason | 修复 | 新增 `AssistantMessage.rawStopReason`，Mistral 未映射 finish reason 归为 `error`（关闭 #7255） |
| [#7245](https://github.com/earendil-works/pi/pull/7245) | inline images under tmux via sixel | 新特性 | `TMUX` 下不再一刀切关闭图片，新增 sixel 后端 |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | read clipboard via wl-paste / xclip / xsel | 修复 | Linux 剪贴板按显示协议选择工具，修复 Wayland 下 Ctrl+V 失效（关闭 #7248） |
| [#7258](https://github.com/earendil-works/pi/pull/7258) | enable streaming usage for llama.cpp provider | 修复 | 启用 `stream_options.include_usage`，本地 llama.cpp `/session` token 统计归零问题修复 |
| [#7231](https://github.com/earendil-works/pi/pull/7231) | Markdown API | 新特性 | 暴露统一 Markdown 处理 API（关闭 #6747），与 LaTeX 渲染讨论呼应 |

---

## 📈 功能需求趋势

从 Issue 关键词聚类看出，社区当前最关注的方向：

1. **多 Provider 适配质量** — Aliyun/DeepSeek/Qwen/Fireworks/Bedrock/Vertex/llama.cpp 等适配层的 thinkingFormat、finishReason、流式 usage 等细节问题占据近 1/3 的活跃讨论，反映 Pi "模型路由中台" 的快速扩张。
2. **扩展 API 深化** — `navigateTree`、`queueCommand`、`setToolsExpanded`、状态外露（#5329）等被高频请求，扩展生态正从 "能用" 走向 "可编排、可编排集成"。
3. **Markdown / 渲染能力升级** — LaTeX 数学、wrapped hyperlink、Markdown API（#7231）形成串联需求，渲染层成为新一轮投入重点。
4. **本地模型与小模型友好化** — llama.cpp streaming usage、可配置 truncation limits、可配置 read 行数等请求密集，本地 / 弱模型体验是长期短板。
5. **终端兼容性矩阵** — Kitty / tmux / SSH / Wayland / iTerm 等环境差异持续暴露问题，PR #7245、#7261、#7257 集中处理。
6. **可观测性 / 评估体系** — eval harness（#7289）、session JSONL 持久化时机（#7275）、`--mode json` 输出复杂度（#7290）共同指向 "让 Pi 更可被自动化评估与集成" 的方向。

---

## 💡 开发者关注点

- **Provider 文档与代码漂移**：Qwen/DeepSeek 官方文档更新后，Pi 的 `thinkingLevelMap` / `compat` 字段仍沿用旧值（#6951、#6998），开发者期待更明确的 "上游变更订阅" 流程。
- **错误信息的可调试性**：Vertex 的 `unknown error`、Bedrock 的 `_events` 序列化、并行启动的 `No API key` 误报都让真实问题被掩盖。社区普遍要求保留原始结构化错误（#7286、#7272）。
- **状态机边界冲突**：`/compact` 与自动压缩的冲突（#7253）、并行工具批次的孤儿 toolCalls（#7053）、`/tree` 流式期间导航（#7022）暴露了"用户主动操作 vs agent 后台任务"的同步难题。
- **本地 / 弱模型体验**：truncation limits（#7066）、read 默认上限（#3432）、llama.cpp usage（#7258）三个独立但同源的请求，开发者希望避免每次都通过扩展打补丁。
- **终端 / 显示协议碎片化**：Kitty 按键释放事件（#7130、#7294）、tmux 关闭图片（#7245）、iTerm hyperlink 截断（#7232）— Pi 在向多终端普及的过程中持续踩坑，社区贡献者已成为这一方向的主力军。
- **扩展 API 的"窄门"问题**：扩展作者反复需要 host 尚未暴露的能力（`navigateTree`、`queueCommand`、等待输入状态），目前依赖 PR 节奏而非稳定 API 文档（#5329、#7295、#7293）。

---

*数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono)（仓库实际为 [earendil-works/pi](https://github.com/earendil-works/pi)） · 覆盖时间窗口：2026-07-29 至 2026-07-30 UTC*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-30**

---

## 📌 今日速览

今日 Qwen Code 发布了 **v0.21.1-nightly.20260730** 版本，主要修复 CI 容器任务与 Web Shell 渲染问题。社区焦点集中在 **v0.21.1 升级后的 UI/终端回归**（滚动、虚拟化历史、鼠标选择等）、**Anthropic 模型集成兼容性问题**（prefill 400、tool schema oneOf、XML 工具调用），以及 **Main 分支 E2E CI 频繁失败**（多条 bot 自动生成的失败 issue）。同时，社区持续推进 Web Shell 性能优化、GitHub Channel 后台自动化、模型路由等方向的演进。

---

## 🚀 版本发布

### v0.21.1-nightly.20260730.1643a6c9a

夜间预发布版本，主要变更：

- **fix(ci)**：为 `qwen-triage` 容器任务添加默认 bash shell（[#7838](https://github.com/QwenLM/qwen-code/pull/7838)）
- **fix(web-shell)**：修复 pre-（详情请见 release 页）

👉 [查看 Release](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.1-nightly.20260730.1643a6c9a)

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 优先级 | 标题 | 评论数 |
|---|------|--------|------|--------|
| 1 | [#8039](https://github.com/QwenLM/qwen-code/issues/8039) | **P1** | Anthropic 4.6+ assistant-prefill 返回 400 + `thinking.display` 静默回退为 `omitted` | 6 |
| 2 | [#8012](https://github.com/QwenLM/qwen-code/issues/8012) | P2 | GitHub Channel 投递、批处理与 PR review 事件缺口 | 5 |
| 3 | [#7167](https://github.com/QwenLM/qwen-code/issues/7167) | — | Fleet Shepherd Dashboard（自动维护） | 4 |
| 4 | [#8017](https://github.com/QwenLM/qwen-code/issues/8017) | P3 | GitHub Channel 检测无法接收触发器的自账号配置 | 4 |
| 5 | [#7964](https://github.com/QwenLM/qwen-code/issues/7964) | P2 | **Windows 终端升级到 0.21.1 后内容无法滚动** | 4 |
| 6 | [#7961](https://github.com/QwenLM/qwen-code/issues/7961) | P3 | 主轮输出 token 限制在 CJK 内容下欠计 | 3 |
| 7 | [#7832](https://github.com/QwenLM/qwen-code/issues/7832) | **P1** | YOLO 模式长代码生成因 socket 关闭失败 | 3 |
| 8 | [#7960](https://github.com/QwenLM/qwen-code/issues/7960) | P2 | 压缩子查询 `maxOutputTokens` 超小窗口导致 400 | 3 |
| 9 | [#7966](https://github.com/QwenLM/qwen-code/issues/7966) | Question | 如何获取会话中创建的文件 | 3 |
| 10 | [#8003](https://github.com/QwenLM/qwen-code/issues/8003) | P2 | 长会话中模型输出 XML 工具调用而非结构化调用 | 3 |

**重点解读：**

- **#8039（P1，最热议）**：影响所有 Claude Opus/Sonnet 4.6+ 及 5.x 系列在 Anthropic 网关下的行为，是多 issue 的根因之一。
- **#7964 / #8052 / #8036**：v0.21.1 升级后 Windows/虚拟化历史的**多处 UI 回归**已形成集群，社区情绪较强，建议优先回滚或补丁修复。
- **#7961 / #7960**：自托管 OpenAI 兼容后端（小 `max_model_len`）下的 token 计量与压缩逻辑缺陷。
- **#7832（P1）**：YOLO 模式生成 500+ 行代码时 DashScope SSE 流被关闭，影响大代码生成场景。

> 另有 6 条 Main CI E2E 失败（[#8070](https://github.com/QwenLM/qwen-code/issues/8070)、[#8060](https://github.com/QwenLM/qwen-code/issues/8060)、[#8029](https://github.com/QwenLM/qwen-code/issues/8029)、[#8018](https://github.com/QwenLM/qwen-code/issues/8018)、[#8019](https://github.com/QwenLM/qwen-code/issues/8019)、[#8026](https://github.com/QwenLM/qwen-code/issues/8026) 等），均为 bot 自动化跟踪，但显示主分支稳定性值得关注。

---

## 🛠 重要 PR 进展（Top 10）

| # | 编号 | 标题 | 作者 |
|---|------|------|------|
| 1 | [#8068](https://github.com/QwenLM/qwen-code/pull/8068) | fix(web-shell)：隔离 worktree 会话执行 | @wenshao |
| 2 | [#8059](https://github.com/QwenLM/qwen-code/pull/8059) | feat(hooks)：新增 `SessionDelete` 事件 | @xurik |
| 3 | [#7957](https://github.com/QwenLM/qwen-code/pull/7957) | feat(cli)：支持粘贴 Windows 复制的文件 | @zhuyuy |
| 4 | [#7799](https://github.com/QwenLM/qwen-code/pull/7799) | feat(cli)：Agent View 监督器运行时（系列 PR 1/5） | @ZijianZhang989 |
| 5 | [#7885](https://github.com/QwenLM/qwen-code/pull/7885) | ci：缓存 verify/tmux 的 npm 下载 | @qwen-code-dev-bot |
| 6 | [#8064](https://github.com/QwenLM/qwen-code/pull/8064) | fix(integration)：使交互式读写测试确定性化 | @qwen-code-dev-bot |
| 7 | [#7904](https://github.com/QwenLM/qwen-code/pull/7904) | feat(web-shell)：流式输出期间 Markdown AST 解析节流 | @PratikWayase |
| 8 | [#8002](https://github.com/QwenLM/qwen-code/pull/8002) | feat(serve)：按字节游标分页大文本文件 | @doudouOUC |
| 9 | [#8067](https://github.com/QwenLM/qwen-code/pull/8067) | fix(autofix)：在 PR 中响应 round-cap 拒绝 | @wenshao |
| 10 | [#8071](https://github.com/QwenLM/qwen-code/pull/8071) | fix(autofix)：Critical-only 模式永不延迟 maintainer 反馈 | @wenshao |

**补充推荐 PR：**

- [#7993](https://github.com/QwenLM/qwen-code/pull/7993) — 在 workspace 入口盖戳 `QWEN_CODE_CLI` 并发布 `QWEN_CODE_MODEL`，解决技能子进程身份识别。
- [#7846](https://github.com/QwenLM/qwen-code/pull/7846) — 自动技能策展器（30 天失活、归档策略）。
- [#7925](https://github.com/QwenLM/qwen-code/pull/7925) — 启动时清理过期 worktree 项目快照。
- [#7531](https://github.com/QwenLM/qwen-code/pull/7531) — 关闭 `git clean`/`checkout` 在 AUTO 销毁性 git 守卫中的 force-flag 漏洞。

**系列观察：**
- **Web Shell 性能与稳定性** 成为本周 PR 集群（#8068、#7904、#7923），集中在长会话渲染与后台任务轮询。
- **autofix / bot 治理**（#8067、#8071）显示自动修复工作流在标准管理与 takeover 两条路径上存在透明度差异，正在补齐。
- **会话生命周期**（#8059 SessionDelete 事件、#7836 caller-supplied sessionId、#7975 守护进程写者隔离）正在系统性增强。

---

## 📈 功能需求趋势

从近期 Issue 提炼的社区关注方向：

| 方向 | 代表 Issue | 说明 |
|------|-----------|------|
| **GitHub Channel 后台自动化** | [#8012](https://github.com/QwenLM/qwen-code/issues/8012)、[#8013](https://github.com/QwenLM/qwen-code/issues/8013)、[#8017](https://github.com/QwenLM/qwen-code/issues/8017)、[#8061](https://github.com/QwenLM/qwen-code/pull/8061) | 通知路由、批处理、PR review、公开输出契约、操作员反馈反应，构成完整的产品化路径 |
| **基于角色的模型路由** | [#8021](https://github.com/QwenLM/qwen-code/issues/8021) | 不同阶段（探索/实现/推理）使用不同模型，社区希望从全局 `/model` 走向语义化角色 |
| **会话级可观测性** | [#7966](https://github.com/QwenLM/qwen-code/issues/7966) | 用户希望查询某次会话创建/修改了哪些文件，以及跨会话归属关系 |
| **UI/终端交互改进** | [#8025](https://github.com/QwenLM/qwen-code/issues/8025)、[#8006](https://github.com/QwenLM/qwen-code/issues/8006)、[#7964](https://github.com/QwenLM/qwen-code/issues/7964)、[#8036](https://github.com/QwenLM/qwen-code/issues/8036) | 询问弹窗位置、Ctrl+C 与终端复制冲突、滚动/选择/虚拟化历史回归 |
| **长上下文与工具调用稳定性** | [#8003](https://github.com/QwenLM/qwen-code/issues/8003)、[#7961](https://github.com/QwenLM/qwen-code/issues/7961)、[#7960](https://github.com/QwenLM/qwen-code/issues/7960) | 长会话下 XML 风格工具调用降级、CJK token 计量偏差 |
| **Anthropic 兼容层** | [#8039](https://github.com/QwenLM/qwen-code/issues/8039)、[#7984](https://github.com/QwenLM/qwen-code/issues/7984) | Claude 4.6+/5.x 模型 prefill 与 tool schema 适配 |
| **Skill / Agent 管理** | [#7846](https://github.com/QwenLM/qwen-code/pull/7846)、[#8059](https://github.com/QwenLM/qwen-code/pull/8059) | 自动技能策展、Agent View 监督器运行时、SessionDelete hook |

---

## 💡 开发者关注点与痛点

1. **v0.21.1 升级回归集中爆发** 🪟
   Windows 终端（WT/Ghostty）中滚动、选择、虚拟化历史出现多项问题（#7964、#8036、#8052），多数用户首次报告即 v0.21.1。建议下次发布前增加 Windows 渲染回归测试套件。

2. **Main 分支 CI 稳定性下滑** 🧪
   24h 内出现 6+ 条 bot 自动开立的 Main CI E2E 失败 issue，集中在 `interactive/file-system-interactive.test.ts`、`sdk-typescript/subagents.test.ts`、`sdk-typescript/tool-control.test.ts`。已通过 [#8064](https://github.com/QwenLM/qwen-code/pull/8064)、[#7944](https://github.com/QwenLM/qwen-code/pull/7944) 等"确定性化"修复部分缓解，但反映主分支对外部 LLM 依赖较重。

3. **大代码生成与长会话可靠性** ⏱
   YOLO 模式长生成 socket 关闭（#7832）、200+ 轮后工具调用格式退化（#8003）反映出流式稳定性与超时/重试策略需进一步打磨。

4. **Anthropic 模型生态

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-30** ｜ 数据来源：github.com/Hmbown/DeepSeek-TUI

---

## 1. 今日速览

**v0.9.2 收官冲刺已基本完成**，今日合并了 18 个 PR，覆盖 Skills Manager 性能修复、LaTeX 数学公式渲染、印尼语本地化全套落地、推理等级持久化等多个关键模块。**社区层面**，Windows 巴西 ABNT2 键盘的 `/` 输入冲突和"Coze/Constitution"中文翻译争议成为开放讨论的两大焦点；开发者对**后台任务的稳定性**（stale shell job、Skills Manager 冷启动延迟）反馈最为集中。

---

## 2. 版本发布

过去 24 小时无新版本 Release 发布。但 v0.9.2 RC 流程已收尾：

- **PR #4964**（`release: finalize Codewhale 0.9.2`）已合并，更新发布说明、Kimi 上下文窗口报告、隐式 auto-compaction 保留等收尾事项
- 多项 v0.9.2 release-blocker 标签的 Issue（#4957、#4941、#4976、#4547）已全部 CLOSED
- **下一里程碑 v0.9.3** 已开启追踪（#1186 已加入 v0.9.3 标签）

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| [#4959](https://github.com/Hmbown/DeepSeek-TUI/issues/4959) | **新增 `/stop` 命令提案** | 🟢 OPEN | 🟢🟢🟢 |
| [#4949](https://github.com/Hmbown/DeepSeek-TUI/issues/4949) | **"Constitution" 中文翻译争议** | 🟢 OPEN | 🟢🟢🟢 |
| [#4723](https://github.com/Hmbown/DeepSeek-TUI/issues/4723) | **Windows ABNT2 键盘 AltGr+Q 误触发帮助面板** | 🟢 OPEN | 🟢🟢 |
| [#1186](https://github.com/Hmbown/DeepSeek-TUI/issues/1186) | execpolicy 类型化持久权限规则（v0.9.3） | 🔴 CLOSED | 🟢🟢 |
| [#3063](https://github.com/Hmbown/DeepSeek-TUI/issues/3063) | v0.8.59 TUI 鼠标报告泄漏修复（macOS） | 🔴 CLOSED | 🟢🟢 |
| [#4789](https://github.com/Hmbown/DeepSeek-TUI/issues/4789) | v0.9.2 印尼语本地化（1,248 keys） | 🔴 CLOSED | 🟢🟢 |
| [#4957](https://github.com/Hmbown/DeepSeek-TUI/issues/4957) | TUI 不渲染 LaTeX 数学公式 | 🔴 CLOSED | 🟢🟢 |
| [#4941](https://github.com/Hmbown/DeepSeek-TUI/issues/4941) | 重启后思考等级被静默重置为 Auto | 🔴 CLOSED | 🟢🟢 |
| [#4976](https://github.com/Hmbown/DeepSeek-TUI/issues/4976) | Skills Manager 在冷 Linux 文件系统超时 | 🔴 CLOSED | 🟢🟢 |
| [#4547](https://github.com/Hmbown/DeepSeek-TUI/issues/4547) | TUI 保留过期 shell 作业的 spinner | 🔴 CLOSED | 🟢🟢 |

**重点解读**：
- **#4959 `/stop` 命令**：用户 `ronohara` 提出在 YOLO 模式或长链路自主执行下，模型对 `+ stop` 类文本指令无响应，需要硬中断机制；3 条评论反映出社区对**安全终止语义**的高度关注
- **#4949 翻译讨论**：`SparkofSpike` 发起的"宪法 vs 协作准则"讨论对中文用户归属感影响较大，反映出项目对中文社区的持续重视
- **#4723 键盘冲突**：巴西 ABNT2 布局用户输入 `/` 必须用 `AltGr+Q`，却被映射为 `Ctrl+/` 帮助快捷键，已在 PR #4977 中解决

---

## 4. 重要 PR 进展

| PR | 标题 | 关键变更 |
|---|---|---|
| [#4964](https://github.com/Hmbown/DeepSeek-TUI/pull/4964) | **release: finalize Codewhale 0.9.2** | 修复 Kimi 上下文窗口报告、保留 auto-compaction、修正发布说明 |
| [#4974](https://github.com/Hmbown/DeepSeek-TUI/pull/4974) | **feat(tui): integrate hardened LaTeX transcript rendering** | 维护者接管 #4973，修复 `\mathbb{R}` 失败路径，整合 SparkofSpike 的实现，关闭 #4957 |
| [#4975](https://github.com/Hmbown/DeepSeek-TUI/pull/4975) | **fix(tui): keep Skills Manager scan toggle responsive** | 复用已审计的 owned skill 列表，仅扫描新增兼容根目录，Linux v0.9.2 候选版恢复响应 |
| [#4961](https://github.com/Hmbown/DeepSeek-TUI/pull/4961) | **fix(tui): preserve reasoning effort with auto routing** | 在 startup、picker、Hotbar、ACP 等全流程保留原始推理等级，关闭 #4941 |
| [#4972](https://github.com/Hmbown/DeepSeek-TUI/pull/4972) | **feat(web): add Indonesian (id) website locale dictionary** | 完成网站层印尼语本地化（chrome.ts + home.ts），关闭 #4789 |
| [#4962](https://github.com/Hmbown/DeepSeek-TUI/pull/4962) | **docs: add Indonesian documentation suite and README.id.md** | 印尼语完整文档套件（README / CONTRIBUTING / docs） |
| [#4963](https://github.com/Hmbown/DeepSeek-TUI/pull/4963) | **fix(session): prevent duplicate entries in /resume** | 停止将孤儿 checkpoint 提升为 session 文件，避免 `/resume` 列表重复 |
| [#4937](https://github.com/Hmbown/DeepSeek-TUI/pull/4937) | **fix(tui): finalize stale shell transcript cells** | 对不存在的 shell job 终结运行状态，禁用过期 spinner，关闭 #4547 |
| [#4960](https://github.com/Hmbown/DeepSeek-TUI/pull/4960) | **feat(permissions): add safe rule list and removal** | `/permissions` 列出当前规则集，支持快照绑定 token 的预览-确认移除流程 |
| [#4977](https://github.com/Hmbown/DeepSeek-TUI/pull/4977) | **fix(tui): let AltGr-typed "/" reach composer** | 解决 ABNT2 布局下 `AltGr+Q` 被错误拦截为 `Ctrl+/` 帮助快捷键的问题 |

**测试与基础设施侧补充**（同一批次合入）：
- [#4967 / #4968 / #4969](https://github.com/Hmbown/DeepSeek-TUI/pull/4967)：修复 Skills Manager PTY 测试的 race condition
- [#4971](https://github.com/Hmbown/DeepSeek-TUI/pull/4971)：将 Skills Manager PTY 验收测试隔离为独立 Unix 进程
- [#4965](https://github.com/Hmbown/DeepSeek-TUI/pull/4965)：修复 v0.9.2 RC workflow toolchain 配置
- [#4966](https://github.com/Hmbown/DeepSeek-TUI/pull/4966)：修复严格 rustdoc 链接失效
- [#4958](https://github.com/Hmbown/DeepSeek-TUI/pull/4958)：CI 增加 SBOM 证明并显式固定 provenance 模式

---

## 5. 功能需求趋势

从近 24 小时活跃 Issues/PR 中可提炼出以下社区聚焦方向：

1. **🔒 权限与安全治理** ⭐⭐⭐
   - 类型化持久权限规则（#1186）
   - `/permissions` 规则列表与安全移除（#4960）
   - `/stop` 硬中断命令（#4959）
   - 趋势：项目正从"允许即放行"演进到"可审计、可撤销"模型

2. **🌏 本地化与国际化** ⭐⭐⭐
   - 印尼语 TUI + 网站 + 文档三件套全部落地（#4789 / #4962 / #4972）
   - 繁体中文 499 keys 部分包进入跟踪矩阵（#4970）
   - 中文核心术语翻译争议持续（#4949）
   - 趋势：东南亚语种优先级提升，文档与 TUI 解耦并行

3. **🧠 推理与上下文保真** ⭐⭐
   - 推理等级跨会话持久化（#4941 → #4961）
   - Kimi 256K / 1M 上下文报告修正（#4964）
   - 隐式 auto-compaction 保留（#4964）
   - 趋势：用户期望"模型行为可预测、不被静默修改"

4. **🛠️ Skills Manager 稳定性** ⭐⭐
   - 冷启动文件系统超时（#4976 → #4975）
   - 兼容模式扫描策略重写（#4967/4968/4969/4971）
   - 趋势：兼容性扩展带来的性能/正确性边界已被认真对待

5. **⌨️ 输入法与国际化键盘布局** ⭐
   - ABNT2 AltGr 冲突修复（#4723 → #4977）
   - 趋势：TUI 在国际化环境下的键位正确性持续被关注

---

## 6. 开发者关注点

综合本次更新中的用户反馈与修复行为，开发者的核心痛点集中于：

- **🟥 后台任务生命周期不可见**：长时 shell job 状态过期后仍在 UI 显示 spinner 与 Stop 按钮，造成误判（#4547 → #4937 已修）
- **🟥 偏好设置被静默覆盖**：用户主动选择的 reasoning effort 在重启或自动路由下丢失，影响工作流复现性（#4941 → #4961 已修）
- **🟥 Skills Manager 在边缘文件系统下退化**：冷启动扫描直接触发 15s 验收超时（#4976 → #4975 已修）
- **🟧 安全操作的二次确认缺失**：删除权限规则缺乏预览和 token 绑定机制（#4960 已补齐）
- **🟧 非英语键盘布局的快捷键劫持**：ABNT2 等 AltGr 重度依赖布局被全局 `Ctrl+/` 帮助快捷键误捕获（#4723 → #4977 已修）
- **🟧 长自主运行缺乏硬中断**：`/stop` 命令缺位，YOLO 模式下"停止"语义无法保证（#4959 仍在讨论）

整体而言，**v0.9.2 把"稳定性 + 可观测性"作为主基调**，下一阶段 v0.9.3 将转向"权限治理 + 安全语义"的纵深建设。

---

*报告生成时间：2026-07-30｜数据窗口：过去 24 小时｜共追踪 10 Issues + 22 PRs*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*