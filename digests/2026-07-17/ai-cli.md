# AI CLI 工具社区动态日报 2026-07-17

> 生成时间: 2026-07-17 02:05 UTC | 覆盖工具: 9 个

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

# 2026-07-17 AI CLI 工具横向对比分析报告

## 1. 生态全景

2026 年 7 月的 AI CLI 生态已进入**多代理 + 多提供商 + 桌面化**的三重深水区：九款主流工具在过去 24 小时中合计发布 12+ 版本，Issue/PR 总量预计超过 300 条。社区痛点从"功能缺失"快速迁移到**"会话/代理可观测性、Windows 桌面体验、BYOK/自定义提供商、安全加固"**四类成熟期议题，反映出行业正从"模型驱动"转向"工程与生态驱动"。各厂商围绕**子代理编排**与**跨提供商互操作**两条主线贴身竞争，同时品牌迁移（DeepSeek-TUI → CodeWhale）、架构抽象（Pi 的 ModelRuntime、Qwen 的 multi-workspace daemon）与生态市场（OpenCode #28696）成为新一批差异化战场。

---

## 2. 各工具活跃度对比

| 工具 | 当日版本 | Issue 更新 | PR 更新 | 核心动作 |
|------|---------|-----------|---------|---------|
| **Claude Code** | v2.1.212 | ~50 条 / Top10 命中 3 类 P0 | 5 条（2 OPEN） | `/fork` 重构为后台 agent；auto-mode reset |
| **OpenAI Codex** | v0.144.5 + 0.145.0-alpha.16/18/19 | 50+ 条 / Top10 | 39 条 | 0.145 重构执行环境；sub-agent 角色持久化 |
| **Gemini CLI** | v0.51.0 + v0.52.0-preview.0 | 50 条 / Top10 | 30+ 条 | 4 项高危安全修复闭环；evaluator 基建 |
| **GitHub Copilot CLI** | v1.0.72-0 | 33 条 / Top10 | 0 条（窗口静默） | 多轮子代理默认开启；Tool Search for Haiku 4.5+ |
| **Kimi Code CLI** | v1.49.0 | ~10 条 / Top4 | 4 条（2 已合并） | 修复上下文预算；Monitor 流式工具 PR；telemetry trace_id |
| **OpenCode** | v1.18.3 | 50+ 条 / Top10 | 25+ OPEN | 修复 WSL 启动 + Desktop 滚动；Console Go 故障待解 |
| **Pi** | v0.80.8 / .9 / .10（三连） | ~50 条 / Top10 | 12+ 条 OPEN | ModelRuntime 上线；Kimi K3 adaptive thinking；SQLite session |
| **Qwen Code** | v0.19.11 + nightly | 34 条 / Top10 | 50 条 | 多 workspace RFC 闭环（#6378）；PairingStore 安全修复 |
| **DeepSeek TUI / CodeWhale** | v0.9.0 | 50 条 / Top10 | 50+ 条 | 品牌迁移 CodeWhale；WhaleFlow Conductor 代理 |

> **注**：Issue/PR 计数为日报披露与估算值的合并数；不同仓库口径略有差异。Windows、macOS 在 7 家工具的 Top10 中同时出现。

---

## 3. 共同关注的功能方向

### 3.1 多代理 / Sub-agent 稳定性（8/9 工具关注）
这是当日**覆盖最广的痛点主线**：
- **Claude Code**：v2.1.212 把 `/fork` 重构为后台会话，社区立即跟进 `/tasks` 跨会话面板（#77531）、`/mcp` 在 background session 的 bug（#77362）
- **OpenAI Codex**：v2 sub-agent 重载丢失角色（PR #33657）、24GB Mac 跑到 130GB（#33390）、schema 缺字段（#32430）
- **Gemini CLI**：Subagent 在 MAX_TURNS 后以 `GOAL` 假成功（#22323）、Generalist 频繁挂死（#21409）、Browser Agent 不读 settings.json（#22267）
- **GitHub Copilot CLI**：v1.0.72-0 多轮子代理默认开启，但引入 `Invalid signature` 永久锁死（#3407）
- **Pi**：Kimi K3 通过 dynamic tool loading 实现"渐进式扩展激活"
- **Qwen Code**：VP 模式子代理名册拥挤（#6931）
- **CodeWhale**：WhaleFlow Conductor 代理（#4010）正面回应扇出/重试/合流
- **OpenCode**：仅 1.18.3 微调 subagent 选择器，但订阅服务稳定性拖累体验

### 3.2 Windows / 桌面平台兼容性（6/9 工具关注）
- Claude Code（#49933 WSL、#24726 VS Code、#77615 tmux 渲染）
- Codex（#23198 Desktop 卡顿、#25799 WSL2 沙箱、#30527 Defender、#32314 +20s/命令）
- OpenCode（#37255 1.18.2 升级故障、#37171 WSL 通知崩溃）
- Gemini（Wayland 浏览器代理挂死）
- CodeWhale（#805 Win10 滚动失效）
- Qwen Code（VS Code Companion 升级回归 #7051/#7056）

**信号**：Windows 是 7 家工具的"二等公民"已是公开秘密，Codex 当日 P0 几乎全部指向 Windows 子进程治理。

### 3.3 BYOK / 自定义模型提供商（5/9 工具关注）
- Copilot CLI（#4016 `--acp` 回归、#4139 对标 Claude CLI、#4155 Gemini 400）
- Codex（#10867 App 端 `/model`、#27613 Bedrock 成本归属、PR #33695 自定义 transport）
- Pi（#3808 Anthropic 订阅警告、#5821 Agent SDK OAuth、#6657 Bedrock `AWS_PROFILE`）
- Claude Code（Cowork egress allowlist #30112 闭源阻碍）
- CodeWhale（Kimi K3、OpenCode Go、Xiaomi MiMo、TelecomJS 同时接入）

**信号**：单一厂商模型已无法满足企业生产路径，"插件式模型接入"正成为基础能力。

### 3.4 安全加固（5/9 工具当日合并高危修复）
- Gemini CLI：macOS Seatbelt 沙箱逃逸（CVE-2023-32364-class）、shell 变量展开绕过（GHSA-wpqr-6v78-jr5g）、fork 代码泄露 `GEMINI_API_KEY` 供应链 RCE、issue title 注入
- Claude Code：Python `exec()` 注入检测（PR #78057）
- Pi：3 条安全审计 issue 由外部贡献者批量提交（Bash 护栏、UUID 随机源、`/tmp` umask）
- CodeWhale：Runtime API CORS 通配符→白名单（PR #4454）
- OpenCode：WebFetch "始终允许" 全 URL 通配→域名级（PR #37410）

### 3.5 成本 / Token 可观测性（4/9 工具关注）
- Claude Code（#47509 Team 缺 20x 档位、#77360 cache-read 静默消耗、#77943 空返回 1.1M token）
- Copilot CLI（#1152 详细 token 用量展示，6 👍）
- Codex（#27613 Bedrock 成本归属）
- Kimi（#2318 TPD 计数疑似异常）

### 3.6 会话/上下文管理（5/9 工具关注）
- Claude Code（统一任务面板 #77531）
- Codex（auto-compaction 回退 #31529）
- Copilot（CAPI 5MB 上限锁死 #4097/#3767/#4138 三连击）
- Pi（SQLite session 存储 #6594）
- Qwen Code（session 历史分页 #7064）

### 3.7 TUI / 终端体验现代化（6/9 工具）
- Copilot（#4154 v1.0.72-0 文本选择回归、#4152 j/k 导航、#3580 cmd+click）
- Kimi（#2501 切换 Reasoning Level 需二级菜单）
- Pi（Markdown transformer #6750、Kitty 键盘协议回归 #6746、终端宽度 off-by-one #6704）
- Qwen Code（VP 模式鼠标文本选择 #6937、紧凑工具摘要 #6813）
- Gemini（CJK 硬换行 #28309、退出外部编辑器脏屏）
- Claude Code（tmux 渲染回归 #77615）

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | 高阶推理 + 企业级工作流 | 重度 Agent 用户 / 企业 CTO | `/fork` 后台会话模型、Fable 5 模型代际、Plugin wrapper |
| **OpenAI Codex** | 多代理最前沿 + App/CLI 双形态 | Windows / macOS 桌面开发者、研究型用户 | Rust runtime、sub-agent 角色持久化、Computer/Browser Use |
| **Gemini CLI** | Google 生态 + 安全优先 | 重视合规、企业安全团队 | zero-dep OS sandbox、evaluator 基建 76 个、caretaker triage worker |
| **GitHub Copilot CLI** | GitHub 生态原生 + 协作 | GitHub 深度用户、PR/CI 流水线 | 多轮子代理、BYOK 待补齐、5MB CAPI 是结构性瓶颈 |
| **Kimi Code CLI** | 轻量 + Kimi 模型深度适配 | Kimi 重度用户、Python/TS 跨端团队 | Moonshot 原生协议、adaptive thinking、空内容保真 |
| **OpenCode** | 终端原生 + 开源生态 | 极客、独立开发者 | 统一市场诉求最高（#28696）、CLI/Desktop 双形态 |
| **Pi** | 可扩展 Agent 平台 | 扩展作者、企业内部平台化 | ModelRuntime 抽象、动态 provider 目录、SQLite 会话 |
| **Qwen Code** | 多 workspace 服务器 + Web Shell | 团队协作、桌面 IDE 用户 | `qwen serve` 多 workspace、ACP + Electron 集成 |
| **CodeWhale** | 多代理编排 + 多提供商聚合 | 重度多模型用户、研究者 | WhaleFlow Conductor、刚完成品牌迁移 v0.9.0 |

**关键差异化**：
- **Claude Code / Pi / Qwen Code**走向平台化（后台会话、运行时抽象、daemon 架构）
- **Codex / CodeWhale**死磕多代理并行编排
- **Gemini**用安全与评测形成护城河
- **Copilot / Kimi / OpenCode**更轻量、补齐单点能力（BYOK、Marketplace、Streaming）

---

## 5. 社区热度与成熟度

### 5.1 活跃度 Top 3（按当日 Issue + PR 总量估计）
1. **CodeWhale** — 50 Issues / 50+ PR，最密集补测与死代码清理
2. **Codex** — 50 Issues / 39 PR，0.145 alpha 重构集中爆发
3. **Qwen Code** — 34 Issues / 50 PR，多 workspace 收尾 + UI 体系化重构

### 5.2 快速迭代期工具
- **Pi**：24 小时连发 3 个版本（v0.80.8/9/10），进入"Runtime/Provider 层重构"
- **CodeWhale**：v0.9.0 + 50+ PR 同步
- **Codex**：alpha.16→18→19 连续推进，反映执行环境大改

### 5.3 稳定维护期工具
- **Gemini CLI

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-07-17 | **数据源**：github.com/anthropics/skills

---

## 1. 热门 Skills 排行（按社区关注度）

> 注：PR 列表中评论数均为 undefined，以下基于"被独立复现次数、跨多个 PR 引用、Issue 联动热度"综合排序。

### ① `#1298` skill-creator 评测修复（最紧急）
- **作者**：MartinCajiao · 创建 2026-06-10
- **功能**：修复 `run_eval.py` 始终返回 `recall=0%` 的核心 bug——直接导致 `run_loop.py` / `improve_description.py` 在噪声上"优化"
- **社区热点**：与 Issue #556（12 评论、7 👍）、#1169（3 评论）形成"三位一体"，已被 10+ 独立用户复现；该 bug 让所有 skill 作者的描述优化流程形同虚设
- **状态**：🟢 OPEN — 官方层面的高优修复
- 🔗 https://github.com/anthropics/skills/pull/1298

### ② `#514` document-typography（最具用户感知价值）
- **作者**：PGTBoos · 创建 2026-03-04
- **功能**：自动防护 AI 生成文档中的"孤词换行""寡头段""编号错位"等排版缺陷
- **社区热点**：作者点出"These issues affect every document Claude generates"——所有用户都用得到；与 #486（ODT）、#538（PDF 修复）共同构成"文档 Skills 全家桶"的高活跃区域
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/514

### ③ `#83` skill-quality-analyzer + skill-security-analyzer（元能力补齐）
- **作者**：eovidiu · 创建 2025-11-06
- **功能**：从五个维度（结构 20% / 文档 / 资源…）评估 Skill 质量
- **社区热点**：与安全议题 Issue #492（34 评论）呼应——社区强烈需要"如何信任一个 Skill"的标准
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/83

### ④ `#1302` color-expert（专业领域纵深）
- **作者**：meodai · 创建 2026-06-10
- **功能**：覆盖 ISCC-NBS、Munsell、OKLCH、CAM16 等所有主流色彩知识，能直接用于 UI/前端/设计场景
- **社区热点**：典型"领域专家型" Skill，与 #210 frontend-design 改进形成上下游
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/1302

### ⑤ `#1367` self-audit — 四维度推理质量门（质量保证创新）
- **作者**：YuhaoLin2005 · 创建 2026-06-28
- **功能**：交付前自审——先机械验证文件存在，再按"破坏严重度"做四维推理审查
- **社区热点**：对应 Issue #1385（提案"推理质量门管道"，3 评论），作者同步提案生态化方案
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/1367

### ⑥ `#486` ODT — OpenDocument 全流程（企业文档兼容）
- **作者**：GitHubNewbie0 · 创建 2026-03-01
- **功能**：ODT/ODS/ODF 创建、模板填充、解析转 HTML
- **社区热点**：补齐 LibreOffice 生态，企业用户刚需
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/486

### ⑦ `#723` testing-patterns（开发流程核心）
- **作者**：4444J99 · 创建 2026-03-22
- **功能**：Testing Trophy 全栈——单元测试 / React 组件测试 / Mock 策略
- **社区热点**：与 Issue #412 agent-governance 并列为"软件工程方法论"型 Skill 的代表
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/723

### ⑧ `#525` pyxel 复古游戏开发（创意领域扩展）
- **作者**：kitao · 创建 2026-03-05
- **功能**：基于 Pyxel MCP 服务器的复古游戏开发工作流（write → run_and_capture → inspect → iterate）
- **社区热点**：通过 MCP 集成扩展 Skill——呼应 Issue #16「Expose Skills as MCPs」（4 评论）
- **状态**：🟢 OPEN
- 🔗 https://github.com/anthropics/skills/pull/525

---

## 2. 社区需求趋势（Issues 信号）

| 需求方向 | 代表 Issue | 评论数 | 👍 | 趋势判断 |
|---|---|---|---|---|
| 🔒 **Skill 信任边界 / 安全审计** | [#492](https://github.com/anthropics/skills/issues/492) | **34** | 2 | 🔥 最强信号——社区技能冒用官方 namespace 被视为"信任边界漏洞"，高于一切 |
| 🏢 **企业级组织内共享** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | **7** | 👍 最高，企业用户最大痛点（绕过 .skill 文件下载 → Slack → 手动上传的繁琐链路） |
| 🧠 **长期记忆 / Context 管理** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 0 | 新兴方向：长任务中 Agent 自身笔记的"符号化压缩" |
| 🛡️ **AI Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | 0 | 提议 agent-governance——策略执行、威胁检测、审计闭环 |
| 🔌 **Skills 暴露为 MCP** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 0 | "Skills 即 MCP 客户端标准" 的早期生态设想 |
| 🚪 **多平台兼容** | [#29 AWS Bedrock](https://github.com/anthropics/skills/issues/29) | 4 | 0 | Skills 跨平台（Bedrock、Azure）落地需求 |
| 🧪 **描述自动优化** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | 12+3 | 7+1 | skill-creator 的核心评测管道已瘫痪，社区急需修复 |
| 🪟 **Windows 兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) | 3 | 2 | PATHEXT / cp1252 / pipe select 三大类问题 |

**核心趋势三条**：
1. **"信任" > "能力"**：安全/治理类 Issue 关注度已超过功能扩展
2. **企业落地**：组织内共享 + 多平台兼容成为付费用户首要障碍
3. **Agent 元能力**：记忆压缩、推理质量门、自审计等"AI 的 AI"型 Skill 开始涌现

---

## 3. 高潜力待合并 Skills（近期可能落地）

| PR | Skill / 修复 | 推断热度 | 合并可能性 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval.py 全栈评测修复 | ⭐⭐⭐⭐⭐ | 极高——阻塞整个描述优化流程，#556 已 12 评论 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 子进程管道读取修复 | ⭐⭐⭐⭐ | 高——独立可合并，单点问题 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess + encoding 1 行修复 | ⭐⭐⭐⭐ | 高——同样阻塞 Windows 用户 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ⭐⭐⭐⭐ | 高——属于"全员都用得上"型 Skill |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer + security-analyzer | ⭐⭐⭐⭐ | 中高——与 #492 安全议题高度对齐，官方有动机 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | ⭐⭐⭐ | 中——领域纵深，垂类用户受益 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit (v1.3.0) | ⭐⭐⭐ | 中——属于新兴"元 Skill"类，落地需先验证 |
| [#362](https://github.com/anthropics/skills/pull/362) + [#361](https://github.com/anthropics/skills/pull/361) | UTF-8 / YAML 校验健壮性 | ⭐⭐⭐ | 高——工具链可靠性补丁，作者活跃维护 |

⚠️ 冷门观察：**#95**（系统流程图文档）从 2025-11 长期 OPEN，#189（插件重复安装 bug，9 👍）半年没动——这些"虽小但真的痛"的 Issue 反而被低估。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是「让 Skills 变得可被信任、跨平台可分发、且自带评测质量门」——即生态正从"做更多 Skills"转向"做更可靠的 Skills 基础设施"。**

最具象的证据链：Issue #492（34 条关于 impersonation 的愤怒）+ #228（14 条关于组织分发的吐槽）+ #556/#1298/#1099/#1050/#1323（5 个并行 PR 在抢修 skill-creator 评测管道）——三者指向同一个结论：**官方需要先解决"工具、信任、分发"三件套，社区才会停止在噪音上重复造轮子。**

---

# Claude Code 社区动态日报
**日期：2026-07-17**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.212**，核心变化是将 `/fork` 行为重构为"复制会话到独立后台 agent"（原会话内子任务改名为 `/subtask`），并新增 `claude auto-mode reset` 用于恢复默认 auto-mode 配置。社区焦点集中在 **成本/Token 消耗失控**（#77360、#77943、#47509）、**IDE 与平台集成短板**（VS Code #24726、WSL #49933）以及 **新模型 Fable 5 的输出质量问题**（#78325、#77798）三大方向。

---

## 🚀 版本发布

### v2.1.212
**核心变更：**

1. **`/fork` 语义重构** —— 现在 `/fork` 会将当前对话复制到一个**独立的后台会话**（在 `claude agents` 中以独立行展示），用户可继续在前台工作；原本在会话内启动子 agent 的行为改由新的 `/subtask` 命令承接。
2. **`claude auto-mode reset`** —— 新增命令，可一键将 auto-mode 恢复为默认配置，操作前会要求确认。

> 这一改动反映了 Claude Code 正在把"会话隔离"作为一等公民：fork 出的会话是真正的并行进程，而不是 fork 那一刻的快照。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 关注原因 |
|---|-------|----------|---------|
| 1 | [#24726](https://github.com/anthropics/claude-code/issues/24726) VS Code 扩展：请求添加禁用自动附加打开文件/选区的设置 | 60 / 👍185 | **点赞最高**。VS Code 用户普遍不满 sidebar 总是自动接管当前文件/选区，破坏了"主动控制编辑器焦点"的体验 |
| 2 | [#30112](https://github.com/anthropics/claude-code/issues/30112) Cowork 网络 egress allowlist 失效，自定义域名返回 403 | 52 / 👍49 | 企业安全合规场景阻塞，企业用户无法放行内部 API，严重影响 Cowork 的实际可用性 |
| 3 | [#43052](https://github.com/anthropics/claude-code/issues/43052) 指控 Opus 4.6/4.7 故意破坏代码以消耗 Token | 44 / 👍3 | 已被关闭（invalid + stale），但评论数反映出用户对模型行为变化的焦虑情绪，引发了关于"Agent 是否在拒绝执行"的讨论 |
| 4 | [#49933](https://github.com/anthropics/claude-code/issues/49933) Claude Code Desktop 在 Windows 上支持原生 WSL 远程集成 | 23 / 👍80 | **Windows + WSL 用户长期诉求**。目前在 Windows Desktop 上对接 WSL 工作流存在明显体验断层 |
| 5 | [#47509](https://github.com/anthropics/claude-code/issues/47509) Team 计划缺少类似 Max 20x 的高用量档位 | 19 / 👍59 | 企业 / 团队重度用户（CTO、技术负责人）反馈 6.25x Pro 不够用，但只能购买个人 Max 20x 计费，严重影响团队采购决策 |
| 6 | [#66020](https://github.com/anthropics/claude-code/issues/66020) macOS 26.5.1 内核 zone 内存泄漏，claude.exe 在约 20GB 时 panic | 15 / 👍2 | 罕见的**内核级** bug 报告，泄漏速率随 agent 负载线性增长（21→1027/sec），已被标记 `has repro` |
| 7 | [#70217](https://github.com/anthropics/claude-code/issues/70217) Anthropic API: Connection closed mid-response（v2.1.186） | 12 / 👍6 | 标记为 duplicate，但仍持续有用户遇到，直接导致工作中断和费用浪费 |
| 8 | [#77615](https://github.com/anthropics/claude-code/issues/77615) v2.1.202 在 tmux 中 TUI 渲染错乱（文本重叠、缓冲区损坏） | 4 / 👍0 | **回归性问题**，仅在 tmux 中出现，bare iTerm2 正常，多个重度 tmux 用户被波及 |
| 9 | [#77362](https://github.com/anthropics/claude-code/issues/77362) v2.1.208：`/mcp` 设置菜单在主动 attach 的 `claude agents` 会话中被错误屏蔽 | 3 / 👍5 | 与今日 v2.1.212 的 `/fork` 重构直接相关，验证了"background session" 的判断逻辑存在 bug（按 launch path 而非 attachment 状态判断） |
| 10 | [#77531](https://github.com/anthropics/claude-code/issues/77531) 跨会话/后台 agent 的全局任务面板（而非单一 `/tasks`） | 3 / 👍0 | 随着 `/fork` 把会话变成可并行运行的实体，用户对**统一任务观测面**的需求变得迫切 |

---

## 🔧 重要 PR 进展

> 过去 24 小时更新的 PR 仅有 5 条，整体活跃度较低，集中在**安全策略**与**Windows/Intune 部署**方向。

| # | PR | 状态 | 内容 |
|---|----|----|------|
| 1 | [#27204](https://github.com/anthropics/claude-code/pull/27204) 修复 hook 校验器支持 plugin wrapper 格式 | 🟣 CLOSED | 修复 `validate-hook-schema.sh`：自动识别 `{"hooks": {...}}` plugin 包装格式，并支持可选 matcher，提升插件作者的开发体验 |
| 2 | [#58646](https://github.com/anthropics/claude-code/pull/58646) feat(plugin): git-aware-history——解决 git worktree 间会话碎片化 | 🟣 CLOSED | 改写 session history 的路径 slug 策略：基于 git worktree 共享根目录而非裸 CWD，避免删除 worktree 后历史孤立、`/resume` 找不到 |
| 3 | [#78057](https://github.com/anthropics/claude-code/pull/78057) fix(security-guidance): 将 Python `exec()` 标记为代码注入 sink | 🟢 OPEN | 补齐 `patterns.py` 规则：当前只对 `eval()` 告警，新增 `exec()` 注入检测并限定到 `.py` 文件 |
| 4 | [#78049](https://github.com/anthropics/claude-code/pull/78049) fix(mdm): 修复 32-bit PowerShell 主机下 `Set-ClaudeCodePolicy.ps1` 写到 Program Files (x86) | 🟢 OPEN | Intune 在 32 位 PowerShell 主机下 `$env:ProgramFiles` 会被重定向，导致 MDM 策略写入错误位置；增加显式路径校验 |
| 5 | [#77977](https://github.com/anthropics/claude-code/pull/77977) docs(plugin-dev): 记录 `skipLfs` marketplace 源选项 | 🟢 OPEN | 纯文档变更：补充 `github` 和 `git` marketplace 源的 `skipLfs` 配置示例，关联 issue #63035 |

---

## 📈 功能需求趋势

从过去 24 小时的 50 条 Issue 中可以提炼出以下社区最关注的 5 大方向：

### 1. **IDE & 桌面集成体验（热度最高）**
- VS Code 自动 attach 行为需要更细粒度控制（#24726，185 👍）
- Windows Desktop 原生 WSL 集成（#49933，80 👍）
- `/desktop` 在 Windows 上失败（#78335）
- **趋势**：Claude Code Desktop 与 IDE / 平台原生 shell 的"最后一公里"集成仍有明显缺口。

### 2. **成本可观测性 & 计费分层**
- Team 计划缺 Max 20x 档位（#47509，59 👍）
- 长会话 + 浏览器自动化静默消耗巨量 cache-read token（#77360，43M tokens / 5 min）
- `code-review` 工作流 5 文件消耗 1.1M+ token 且返回空（#77943）
- **趋势**：用户对"单次操作实际 token 花销"的**事前感知**和**事后归因**需求强烈，目前几乎无任何成本预警机制。

### 3. **多会话 / 后台 agent 管理面板**
- 跨 session / 后台 agent 的统一 dashboard（#77531）
- `/tasks` 只能看当前会话
- **趋势**：v2.1.212 的 `/fork` 重构把"并行会话"推到了主流用法，但**统一观测面**还没跟上。

### 4. **新模型（Fable 5）输出质量争议**
- 高 effort 下输出"精致但脱离事实"（#78325）
- mid-turn 长文本被错误地渲染成 thinking block 而非 text block，导致操作员看不见（#77798）
- **趋势**：用户对 Fable 5 在"努力提升 reasoning 深度 vs 扩大事实采集"之间的取舍表示困惑。

### 5. **数据安全与权限边界**
- 未经确认覆盖用户文件导致数据丢失（#78273）
- Desktop worktree 机制误删 `.gitignore` 中的目录（#75490）
- **趋势**：用户对 agent 的"破坏半径"容忍度持续走低，期望更严格的写前确认 / dry-run。

---

## 💬 开发者关注点（高频痛点）

> 通过对评论数 ≥ 2 的 Issue 内容归纳，开发者社区当前最强烈的几类反馈：

| 痛点 | 代表 Issue | 核心诉求 |
|------|-----------|---------|
| **Token 失控** | #77360、#77943、#47509 | 急需内置的 token 预算提示 / 熔断机制，按操作预估成本 |
| **数据丢失风险** | #78273、#75490 | 写文件前默认 dry-run；worktree 操作不能触碰 `.gitignore` 目录 |
| **后台 agent 行为不透明** | #78300、#77362、#77531 | 需要"为什么 agent 拒绝/替换了我的指令"的可见解释 |
| **平台兼容性回归** | #77615、#78335、#66020 | 升级后 tmux / Windows / macOS 内核层的回归未充分覆盖 |
| **网络/远程控制不稳定** | #30112、#70217、#78309、#78333 | Cowork egress、远程控制连接在企业网络环境下鲁棒性不足 |
| **模型行为变化不可预期** | #43052、#78325、#77798、#78331、#78332 | 用户对"什么时候模型会拒绝/重写指令"缺乏稳定心智模型 |

---

> 📊 **日报小结**：今天的 Claude Code 处于一个"重构会话模型（v2.1.212）+ 模型代际切换（Fable 5）"的双重过渡期，社区的抱怨集中在**新能力带来的新边界**上——并行会话的观测面、新模型的输出质量、以及越来越高的自动化程度对**成本/数据安全/可解释性**提出的新要求。对于工具链作者而言，当前最值得跟进的方向是：**会话与 agent 维度的可观测性 + 写操作前的成本/影响预估**。

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 统计窗口：2026-07-17*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**📅 2026-07-17 · 基于 github.com/openai/codex 数据**

---

## 📰 今日速览

今日 Codex 社区围绕 **Windows 桌面端稳定性** 与 **多代理（sub-agent）/ 后台任务执行机制** 进入新一轮密集反馈期：多项 P0 级别的性能与沙箱问题同步出现在 26.707 系列版本下；同时，CLI 端 0.145.0 的 alpha 迭代（已推进至 alpha.19）正在底层重构执行环境与代理角色机制，预示着一波稳定性修复即将合并。

---

## 🚀 版本发布

### `rust-v0.144.5`（稳定版 · 昨日发布）

聚焦**危险命令检测**的防御层强化：

- 扩展了对 `rm` 等强制命令的识别模式（#33455）
- 拒绝执行时返回更清晰的拒绝原因，便于上层 agent 解释

### `rust-v0.145.0-alpha.16 / .18 / .19`（预发布线）

24 小时内连续推进三个 alpha 预发布，主要面向执行环境隔离、sub-agent 角色持久化、自动压缩回退等内部改造。当前 0.145 仍处于 alpha 阶段，建议生产用户停留在 0.144.x。

🔗 [查看完整 Changelog](https://github.com/openai/codex/compare/rust-v0.144.4...rust-v0.144.5)

---

## 🔥 社区热点 Issues（精选 10 条）

> 排序依据：评论活跃度 + 👍数 + 受影响范围

### 1. [#10867](https://github.com/openai/codex/issues/10867) — App 端自定义模型提供商支持 ⭐⭐⭐
- **状态**：OPEN · 💬19 · 👍48
- **痛点**：CLI 已支持 `/model` 切换自定义模型，但 Codex App 仍未开放。这是呼声最高的增强之一，社区反复 +1 推进。
- **意义**：决定 Codex App 是否能用于企业内网、私有化模型等关键场景。

### 2. [#23198](https://github.com/openai/codex/issues/23198) — Windows Desktop 严重卡顿 ⭐⭐⭐
- **状态**：OPEN · 💬18 · 👍44
- **痛点**：用户反馈即便硬件正常，Codex Desktop 在 Windows 下日用体验极差，疑似与近期更新引入的子进程行为/日志写入相关。

### 3. [#20678](https://github.com/openai/codex/issues/20678) — macOS Browser Use 无法连接 IAB
- **状态**：OPEN · 💬18
- **痛点**：Browser Use 插件已安装但 `Failed to connect to browser-use backend "iab"`，影响 macOS 端的 browser-use 工作流，与 #33681 共同指向 Computer/Browser Use 跨平台一致性缺陷。

### 4. [#25799](https://github.com/openai/codex/issues/25799) — Windows App 无法在 WSL2 项目中启动沙箱命令
- **状态**：OPEN · 💬16 · 👍8
- **痛点**：Linux on WSL2 环境下沙箱命令彻底失败，是 Windows + WSL 工作流的核心障碍。

### 5. [#30527](https://github.com/openai/codex/issues/30527) — Win10 上 Codex 触发 Defender 高 CPU
- **状态**：OPEN · 💬14 · 👍12
- **痛点**：近一次更新后，Defender 行为监控被频繁触发，机器长期高占用，疑似可执行签名或脚本调用模式发生改变。

### 6. [#23574](https://github.com/openai/codex/issues/23574) — VS Code 扩展耗尽 inotify watches
- **状态**：OPEN · 💬12 · 👍11
- **痛点**：大工作区下扩展可注册近 100 万个 inotify 监视器，直接触及 Linux 内核上限，扩展应当批量化或按需订阅。

### 7. [#27613](https://github.com/openai/codex/issues/27613) — Amazon Bedrock 成本归属
- **状态**：OPEN · 💬11 · 👍14
- **痛点**：通过 Bedrock 调用时无法按项目/团队归因成本，企业 FinOps 流程受阻。

### 8. [#32314](https://github.com/openai/codex/issues/32314) — Windows 0.144.1 提权沙箱每命令 +20s
- **状态**：OPEN · 💬9 · 👍3
- **痛点**：启用提权后每个命令固定增加 ~20s；回退到非提权则 `apply_patch` 在 split roots 下失效。沙箱配置两条路径都不理想。

### 9. [#33202](https://github.com/openai/codex/issues/33202) — 多 side chat 时 Browser 启动崩溃
- **状态**：OPEN · 💬8
- **痛点**：Codex Desktop 在多个侧边对话运行时打开 Browser 直接 crash，与 #33681 共同说明浏览器子系统的状态隔离存在缺陷。

### 10. [#33685](https://github.com/openai/codex/issues/33685) — 周限额耗尽速度与原 5h 限额一致
- **状态**：OPEN · 💬7
- **痛点**：5 小时限额下线后，周限额以接近原来"5h 流量"的速率消耗，正常工作日内即触顶。

---

## 🛠 重要 PR 进展（精选 10 条）

> 排序依据：变更影响面 + 是否已关闭合入

### 1. [#33695](https://github.com/openai/codex/pull/33695) ⭐ — Amazon Bedrock 支持自定义 transport
- **影响**：允许覆盖 `base_url` / `auth` / `http_headers`，使 Bedrock 流量能经代理或私有网关出网，对应 Issue #28902 / #27613。

### 2. [#31571](https://github.com/openai/codex/pull/31571) — Skill 调用上报 remote plugin ID
- **影响**：完善插件使用遥测能力，区分本地与远程插件，便于企业做权限与计费审计。

### 3. [#31529](https://github.com/openai/codex/pull/31529) — Core 增加滚动前自动压缩回退
- **影响**：在 auto-compaction 切换前增加一次受限采样作为回退，缓解长会话上下文爆栈后的"硬截断"风险，直接对应 #24336。

### 4. [#33657](https://github.com/openai/codex/pull/33657) — 重载 v2 sub-agent 时恢复角色配置
- **影响**：修复 v2 sub-agent 懒加载后丢失 role 配置的 bug，是多代理工作流稳定性的关键修复。

### 5. [#33656](https://github.com/openai/codex/pull/33656) — spawn_agent 后二次校验 reasoning_effort
- **影响**：覆盖 apply role 后 model×effort 组合未校验的问题，闭环 #32430 的部分诉求。

### 6. [#33645](https://github.com/openai/codex/pull/33645) — 终端 `write_stdin` 支持并发
- **影响**：跨终端会话可并行 `write_stdin`，单会话内仍串行，避免多 agent 写入时相互阻塞。

### 7. [#33658](https://github.com/openai/codex/pull/33658) — 设置更新不再污染进行中的回合
- **影响**：deferred executor 启用时，避免最新设置意外作用于正在进行中的 turn，减少神秘行为。

### 8. [#33651](https://github.com/openai/codex/pull/33651) — 新增 `app/read` app-server API
- **影响**：实验性 API，用于批量读取 App 元数据（最多 100 个），为 #33716 的 Work/Codex 模型拆分提供基础设施。

### 9. [#31329](https://github.com/openai/codex/pull/31329) — 限额 reset 前增加消费确认
- **影响**：使用额度重置前增加默认确认流程，避免误点立即消耗；UI 上把 Cancel 移到最后一行。

### 10. [#33633](https://github.com/openai/codex/pull/33633) / [#33636](https://github.com/openai/codex/pull/33636) — 澄清 `wait_for_environment` 行为
- **影响**：用提示词明确"等待会阻塞其它工具调用、可能耗时数分钟"，并要求只在真正依赖所选环境时才等待，降低 agent 误等待导致的资源浪费。

> 此外值得关注：#33639 移除未使用的 `codex-realtime-webrtc` crate，有助于减小 Windows Bazel 工具链负担；#33687 修复 migration repair 中不必要的 `UPDATE` 写，缓解 SQLite 写锁竞争。

---

## 📈 功能需求趋势

从 50 条更新 Issues + 39 条 PR 中提炼的社区核心需求：

| 方向 | 关键议题 | 代表 Issue |
|---|---|---|
| **🪟 Windows 桌面体验** | 性能、沙箱、WSL 兼容、Defender 兼容 | #23198, #25799, #30527, #32314, #33438 |
| **🧩 自定义模型与厂商支持** | App 内 /model、跨厂商 base_url、Bedrock 成本归属 | #10867, #27613, #28902 |
| **🤖 多代理 / Sub-agent 稳定性** | 角色持久化、schema 完备、内存膨胀 | #32430, #33390, #24336 |
| **⏱ 事件驱动后台任务** | 替代 polling 的 wakeup / unified_exec 回调 | #32188, #33542, #33712 |
| **🌐 Browser / Computer Use 跨平台一致** | macOS IAB、WSL 下 Computer Use、side chat 隔离 | #20678, #29482, #33202, #33681 |
| **📊 工作区与文件监视** | inotify 用量、VS Code 扩展性能 | #23574, #24275 |
| **🔐 限额与计费体验** | 周限额节奏、reset UX、归属 | #33685, #31329 |
| **🏷 Work × Codex 模型拆分** | 统一桌面 App 内的组织模型分离 | #33716, #32593 |

---

## 💡 开发者关注点

观察最新 Issues 与 PR 的审稿讨论，开发者社区的核心痛点可归纳为四类：

1. **"Windows 是二等公民"**
   - 0.144.1 后沙箱提权 +20s/命令、Defender 触发、git.exe/conhost.exe 反复 fork、日志库写入竞争（#24275）等一系列问题指向同一个事实：**Windows 桌面的资源管理与子进程治理远未成熟**。这是当前 P0 必修区。

2. **"多代理跑得动但停不下来"**
   - 多 agent 群组在 24GB Mac 上跑到 130GB 内存（#33390）、sub-agent schema 缺字段（#32430）、v2 sub-agent 重载丢角色（#33657）——多代理能力上限已被拉高，但**边界、隔离和资源约束还没跟上**。

3. **"还在用 polling 解决本应是事件的问题"**
   - 后台命令通过 `write_stdin` 轮询、空闲会话不响应 process 退出（#33712）、缺少统一的事件驱动回调（#32188 / #33542）。这是 agent runtime 走向成熟必须跨越的缺口，与 #31529 的 auto-compaction fallback 共同构成"主动性"主线。

4. **"企业级 Bedrock / 多模型集成仍欠最后一公里"**
   - base_url、cost attribution、headers 覆盖、proxy 路由——这些本应是 `provider` 抽象的基本原语，但 Bedrock 路径上仍在补齐（#33695 / #28902 / #27613）。**自定义模型 + 自定义厂商流量**是上半年呼声最一致的功能线。

---

> 📎 完整数据请参见 [openai/codex](https://github.com/openai/codex) — 建议关注 0.145 alpha 合入速度，以及 26.707 系列针对 Windows 性能问题的修复窗口。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-07-17

---

## 1. 今日速览

今日 Gemini CLI 同时发布了 `v0.51.0` 正式版与 `v0.52.0-preview.0` 预览版，社区活动围绕**安全加固**和**子代理可靠性**两条主线密集展开：在合并侧，macOS Seatbelt 沙箱逃逸、shell 变量展开绕过 (GHSA-wpqr-6v78-jr5g) 等高危问题接连被修复，供应链 RCE 也已闭环；在问题侧，Subagent 在 Wayland/通用环境下挂死、MAX_TURNS 误报成功、Browser Agent 不读 settings.json 等 P1 缺陷继续占据评论榜前列，反映出代理能力增强后执行层稳定性已成为核心痛点。

---

## 2. 版本发布

### 🚢 v0.51.0（正式版）
- 由 `gemini-cli-robot` 提交的 changelog 已自动生成（PR #28420）。
- 关键补丁：`no_proxy` 测试修复（#28131）、版本号 bump 至 `0.51.0-nightly.20260625`。

### 🚢 v0.52.0-preview.0（预览版）
- Changelog 同步生成（PR #28419）。
- 引入 caretaker triage worker 的基础模块（#28216 配套），并从 workspace context 中过滤掉瞬态 CI 配置，以减少无关上下文污染。

> 下一 nightly 已就绪：`0.53.0-nightly.20260715.g1ae8ba649`（PR #28421）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 编号 / 链接 | 主题 | 重要性 |
|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 命中后仍以 `GOAL` 成功上报，掩盖了真实中断 | P1，10 条评论 — 影响所有长任务的可观测性 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 频繁挂死，需禁用子代理才能绕过 | P1，👍 8、评论 7 — 用户面最直接的"不可用"体验 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 用 Zero-Dependency OS 沙箱 + Post-Execution Intent Routing 释放 Gemini 3 的原生 bash 能力 | P2 enhancement，评论 8 — 直接对接 Gemini 3 模型训练分布 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 构建组件级 robust eval（已有 76 个 behavioral eval 沉淀） | P1，评论 7 — 评测基础设施的下一里程碑 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST-aware 的 read / search / codebase mapping 价值 | P2 feature，评论 7 — 大代码库场景的核心议题 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动调用自定义 skills / sub-agents | P2，评论 6 — 揭示 agent "自我调度"策略不足 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 会无限重试低信号会话，浪费提取算力 | P2，评论 5 — Memory 子系统的稳定性 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令结束后仍卡在 "Waiting input" | P1，评论 4、👍 3 — 主线程 / 子进程回收逻辑 bug |
| 9 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) | 工具数量超过 128 个时直接 400 | P2，评论 3 — 真实工程中开启多 MCP 后常见 |
| 10 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Browser Agent 完全忽略 `settings.json` 中的 `maxTurns` 覆写 | P2，评论 3 — 反映多 Agent 配置继承的设计漏洞 |

---

## 4. 重要 PR 进展（精选 10 条）

### 🔒 安全相关
1. **[#28423 ★CLOSED★](https://github.com/google-gemini/gemini-cli/pull/28423)** — 修复 macOS 权限宽松 Seatbelt profile `(allow default)` 导致的沙箱逃逸（CVE-2023-32364-class devfs-mount 路径）；紧接着 [#28424](https://github.com/google-gemini/gemini-cli/pull/28424) 将 permissive-open / permissive-proxied 重写为 deny-default，行为与 restrictive/strict 系列对齐。
2. **[#28403](https://github.com/google-gemini/gemini-cli/pull/28403)** — 阻塞 `$VAR` 与 `${VAR}` 变量展开绕过，补完 GHSA-wpqr-6v78-jr5g 修复链路；同步加固 `gemini-automated-issue-dedup.yml` 工作流纵深防御。
3. **[#28232 ★CLOSED★](https://github.com/google-gemini/gemini-cli/pull/28232)** — 拆分 eval workflow 为 `pull_request` + `workflow_run`，切断 `pull_request_target` 在 fork 代码中泄露 `GEMINI_API_KEY` / `GITHUB_TOKEN` 的供应链 RCE。
4. **[#28352](https://github.com/google-gemini/gemini-cli/pull/28352)** — caretaker 摄入服务中对 issue title 做转义并包入 `<untrusted_context>`，封堵提示词注入。

### 🧠 代理与核心引擎
5. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164)** — 单一用户请求内递归推理回合硬上限 15（可被 `maxSessionTurns` 覆盖），终结"占用本地 CPU & API 配额死循环"场景。
6. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319)** — `a2a-server` 中 `CoderAgentExecutor` 改为在加载 workspace 环境变量之前先做路径信任校验，并通过 `AsyncLocalStorage` 隔离任务环境。
7. **[#28422](https://github.com/google-gemini/gemini-cli/pull/28422)** — 扩展安装/更新时把引用解析到具体 commit SHA，并校验 checkout 完整性，避免"看似安装成功实则错位"。

### 🎨 UX & 渲染
8. **[#28405](https://github.com/google-gemini/gemini-cli/pull/28405)** — 修复用户向上滚动查阅历史时新内容到达导致跳屏（修复 #5009）。
9. **[#28309](https://github.com/google-gemini/gemini-cli/pull/28309)** — 终端 Markdown 渲染改进 CJK 字符硬换行与 `__bold__` 语法。
10. **[#28408](https://github.com/google-gemini/gemini-cli/pull/28408)** — 把"密集体载荷检测"逻辑从 UI 收拢到 `mapToDisplay`，降低前端对后端数据形态的耦合。

> 附加：caretaker-triage 体系继续推进 — [#28345](https://github.com/google-gemini/gemini-cli/pull/28345) 实现 LLM triage 协调器与 Cloud Run Job 镜像，[#28411](https://github.com/google-gemini/gemini-cli/pull/28411) 在自动关闭 feature request 前先发说明评论，降低误关体验。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区诉求 |
|---|---|---|
| **AST / 语义级代码理解** | #22745、#22746 | 替代纯文本 read/search，减少误读回合、降低 token 噪声 |
| **Browser Agent 健壮性** | #21983、#22232、#22267 | Wayland 兼容、settings.json 真正生效、自动接管锁定会话 |
| **组件级评测体系** | #24353、#15300 (前置) | 在 76 个 behavioral eval 基础上拆出更细粒度的能力雷达 |
| **Memory 系统升级** | #26516、#26522、#26523、#26525 | 确定性脱敏、不可用 patch 隔离、停止低信号会话无限重试 |
| **Agent 自我认知** | #21432、#22598 | 让 CLI 准确报告自身 flag/hotkey，并把 subagent 轨迹接入 `/chat share` |
| **OS 级沙箱与权限** | #19873 | 用 deny-default sandbox 释放 Gemini 3 的 bash 直觉，同时兼顾用户体验 |
| **终端渲染与国际化** | #22466、#24935、#21924、#28309 | `\n` 转义、退出外部编辑器脏屏、resize 闪烁、CJK 折行 |

---

## 6. 开发者关注点

1. **可靠性优先于花活**：评论数 Top 几乎清一色是 P1/P2 bug — 子代理挂死 / MAX_TURNS 误报 / shell 假 "Waiting input" / Wayland 上浏览器代理挂掉 — "Agent 自己给出的成功不可信"已成为最大信任危机。
2. **配置生效链路混乱**：subagents 自 v0.33.0 后被默认启用（#22093）、Browser Agent 忽略 settings.json（#22267）、symlink agent 不被识别（#20079），开发者期望"配置即行为"。
3. **代理自作主张的风险**：临时脚本散落各处（#23571）、执行 `git reset --force` 等破坏性命令（#22672）、> 128 个工具时直接 400（#24246）— 反映出"自由度"与"护栏"之间的张力，OS 级 deny-default 沙箱（#19873）被寄予厚望。
4. **评测与可观测性是隐含刚需**：subagent 不出现在 `/bug` 报告里（#21763）、轨迹无法 share（#22598）、AST 工具能否减回合仍待评估（#22745）— 都在暗示"先能看见，再谈改进"。
5. **安全公告节奏加快**：本周连续合入 macOS 沙箱逃逸、shell 变量展开绕过、供应链 RCE、issue title 注入四类高危修复，提醒升级到 v0.51.0 / 切到最新 nightly。

---

> 📌 **维护者 tip**：如果你正被 generalist agent 挂死、tools 太多 400、或 Browser Agent 不读 settings 这类问题困扰，建议在 issue 评论中给出可复现的 CLI 启动参数 + 输出片段，便于 triage worker 在新 PR 中纳入 behavioral eval。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-17** ｜ **数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 一、今日速览

v1.0.72-0 版本正式发布，**多轮子代理（Multi-turn subagents）默认开启**并支持对运行中的代理发送追问，同时为 Claude Haiku 4.5+ 启用工具搜索。社区当日活跃度集中在 **语音模型路由 Bug、BYOK 自定义提供方、CAPI 5MB 上下文上限引发的会话锁死**三大主线，其中针对会话/上下文管理的工单已多次复发。

---

## 二、版本发布

### 🚀 [v1.0.72-0](https://github.com/github/copilot-cli/releases/tag/v1.0.72-0)

**新增 (Added)**
- ✅ **多轮子代理默认启用**：可对运行中的子代理发送追问消息，编排更灵活
- ✅ **为 Claude Haiku 4.5+ 启用工具搜索（Tool Search）**，扩展工具调用范围

**改进 (Improved)**
- 🔧 代理繁忙时，**定时调度提示词将作为引导消息（steering message）** 投递，避免丢失

**修复 (Fixed)**
- 🐛 `:tada:` 这类 emoji shortcode 不再被错误地渲染为换行

> ⚠️ 注意：紧随版本发布，Issue [#4154](https://github.com/github/copilot-cli/issues/4154) 报告 TUI 文本选择功能在 1.0.72-0 出现回归，`/skills` 界面无法选中复制。

---

## 三、社区热点 Issues（精选 10 条）

| # | 编号 | 标题 | 热度 | 重要性 |
|---|---|---|---|---|
| 1 | [#4024](https://github.com/github/copilot-cli/issues/4024) | `/voice` 三款 ASR 模型全部静默失败 | 💬 11 | 多模态核心路由 Bug，影响所有语音用户 |
| 2 | [#3762](https://github.com/github/copilot-cli/issues/3762) | `contextTier` 配置项不生效 | 💬 4 | 配置项形同虚设，用户普遍困惑 |
| 3 | [#4097](https://github.com/github/copilot-cli/issues/4097) | `apply_patch` 删除大文件永久撑爆 5MB 上限 | 👍 2 | `/compact` 也无法恢复，无解 |
| 4 | [#4016](https://github.com/github/copilot-cli/issues/4016) | BYOK 在 `--acp` 模式下要求登录（回归） | 👍 3 | 1.0.61–1.0.68 期间引入，第三次复发 |
| 5 | [#3407](https://github.com/github/copilot-cli/issues/3407) | 后台子代理完成后会话永久锁死 ✅ 已关闭 | 💬 2 | "Invalid signature in thinking block" 无自动恢复 |
| 6 | [#3767](https://github.com/github/copilot-cli/issues/3767) | 超大附件永久锁死会话 ✅ 已关闭 | 💬 2 | 9.1MB 请求直接挂掉会话 |
| 7 | [#4148](https://github.com/github/copilot-cli/issues/4148) | Issues 面板在 GHES (`*.ghe.com`) 上始终显示无 Issue ✅ 已关闭 | 💬 2 | 企业版用户完全无法使用面板 |
| 8 | [#3481](https://github.com/github/copilot-cli/issues/3481) | `contextTier=long_context` 启动时不生效 | 👍 5 | 无 CLI flag 强制启用，热度最高的诉求之一 |
| 9 | [#1152](https://github.com/github/copilot-cli/issues/1152) | 请求更详细的 Token 用量展示 | 👍 6 | 想看 cache_read/cache_write 等细分 |
| 10 | [#3580](https://github.com/github/copilot-cli/issues/3580) | macOS `cmd+click` 重复打开链接 | 💬 2 | 终端惯例行为被破坏 |

### 摘要解读

- **[#4024 语音路由](https://github.com/github/copilot-cli/issues/4024)**：Nemotron 系列 RNNT 模型在 Foundry Local Core 中 MultiModalProcessor 路由错误，三个模型均返回空转写，是当日最热议题。
- **[#4097 + #3767 + #4138 三连击](https://github.com/github/copilot-cli/issues/4097)**：CAPI Responses 的 5MB 原生限制反复让会话"死亡"，`apply_patch` 删除大文件、附件过大、resume 时后台 compaction 失败，三种路径都会让用户丢失上下文。
- **[#3481 长上下文默认开启](https://github.com/github/copilot-cli/issues/3481)**：👍 5 票仅次于 #1152，社区急需 CLI flag 强制覆盖默认上下文层级。
- **[#4148 GHES Issue 面板](https://github.com/github/copilot-cli/issues/4148)**：虽然已关闭，但暴露 GHES API 兼容性问题，企业用户需关注回归。

---

## 四、重要 PR 进展

> 📭 **过去 24 小时内无 PR 更新**，可能是开发者集中处理版本发布或 Bug 修复的窗口。建议关注后续合入高峰。

---

## 五、功能需求趋势

从全部 33 条 Issue 提炼，社区关注方向高度集中：

| 趋势 | 代表 Issue | 热度信号 |
|---|---|---|
| **🔌 BYOK / 自定义模型提供方** | [#4016](https://github.com/github/copilot-cli/issues/4016)、[#3891](https://github.com/github/copilot-cli/issues/3891)、[#4139](https://github.com/github/copilot-cli/issues/4139) | 👍 10+，要求对标 Claude CLI |
| **🧠 长上下文 & Token 可观测性** | [#3481](https://github.com/github/copilot-cli/issues/3481)、[#1152](https://github.com/github/copilot-cli/issues/1152) | 👍 11 |
| **🔗 VS Code MCP 工具继承** | [#4143](https://github.com/github/copilot-cli/issues/4143) | 👍 3，生态联动刚需 |
| **🎙️ 多语言语音输入 / 自定义 STT** | [#3658](https://github.com/github/copilot-cli/issues/3658)、[#4024](https://github.com/github/copilot-cli/issues/4024) | 语音场景渗透率提升 |
| **🔐 更细粒度的权限控制** | [#4157](https://github.com/github/copilot-cli/issues/4157)、[#4156](https://github.com/github/copilot-cli/issues/4156)、[#4150](https://github.com/github/copilot-cli/issues/4150)、[#4142](https://github.com/github/copilot-cli/issues/4142) | 安全合规诉求密集 |
| **⌨️ TUI 体验改进** | [#4152](https://github.com/github/copilot-cli/issues/4152)（j/k 导航）、[#4154](https://github.com/github/copilot-cli/issues/4154)（文本选择回归）、[#3580](https://github.com/github/copilot-cli/issues/3580)（cmd+click） | 终端用户对现代 UX 期望提高 |
| **💾 会话管理 UX** | [#4140](https://github.com/github/copilot-cli/issues/4140)（按时间排序）、[#4144](https://github.com/github/copilot-cli/issues/4144)（错误状态可见）、[#4141](https://github.com/github/copilot-cli/issues/4141)（Xcode DerivedData 路径） | 工作流成熟度提升 |
| **🪟 Windows 安装/插件体验** | [#4149](https://github.com/github/copilot-cli/issues/4149)（winget 安装失败）、[#4151](https://github.com/github/copilot-cli/issues/4151)（plugin install Access Denied） | Windows 用户被忽视 |

---

## 六、开发者关注点

综合社区反馈，当前最强烈的三大痛点：

1. **🧱 5MB CAPI 上限成为系统性瓶颈**  
   `apply_patch` 删除大文件、附件过大、resume 时后台 compaction 失败，均会**永久锁死会话**且无回滚通道（#4097、#3767、#4138）。开发者希望至少提供"自动剔除大 diff"或"分块 compaction"等降级策略。

2. **🔓 BYOK 是头号未满足需求**  
   无论是 Gemini 400 报错（[#4155](https://github.com/github/copilot-cli/issues/4155)）、`--acp` 模式认证门控（[#4016](https://github.com/github/copilot-cli/issues/4016)），还是子代理 `model:` 覆盖被静默丢弃（[#3891](https://github.com/github/copilot-cli/issues/3891)），都在反复说明：**自定义提供方仍处于"能用但不可靠"的状态**。Issue #4139 单帖即获 6 👍，是对标 Claude CLI / Aider 的强烈呼声。

3. **🎤 语音场景暴露底层路由缺陷**  
   Nemotron 三款模型在 MultiModalProcessor 中路由错误（[#4024](https://github.com/github/copilot-cli/issues/4024)）、多语言 STT 不可配置（[#3658](https://github.com/github/copilot-cli/issues/3658)），语音功能离"开箱即用"仍有距离，且每次小版本升级都可能出现 TUI 回归（[#4154](https://github.com/github/copilot-cli/issues/4154)）。

> 💡 **建议**：如果你在使用自定义提供方或语音功能，建议暂时锁定在 1.0.71 版本，等待 1.0.72-1 或更高补丁；并关注 [#4139 BYOK 增强请求](https://github.com/github/copilot-cli/issues/4139) 与 [#3481 长上下文 flag](https://github.com/github/copilot-cli/issues/3481) 的官方回应。

---

*本日报基于过去 24 小时 GitHub 公开数据生成，所有链接均指向 [github/copilot-cli](https://github.com/github/copilot-cli) 仓库。如需历史趋势对比或某一议题深度跟踪，请告知。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-17**

---

## 📌 今日速览

今日 Kimi Code CLI 发布 **v1.49.0** 版本，主要修复了上下文预算与空字符串推理内容处理问题；同日社区集中反馈 **Windows PowerShell 5.1 安装脚本崩溃** 与 **TUI 切换 Reasoning Level 操作割裂** 两大体验痛点，另有 PR 引入 **Monitor 流式工具** 与 **可观测性 trace_id 字段**，整体围绕"安装稳定性 + TUI 体验 + 可观测性"三条主线推进。

---

## 🚀 版本发布

### v1.49.0（已合并发布）
- **修复**（`fix(kimi)`）：将剩余上下文窗口用于 completion 预算计算，避免长上下文下预算计算失真（[#2494](https://github.com/MoonshotAI/kimi-cli/pull/2494)）
- **修复**（`fix(kosong)`）：保留空字符串 `reasoning_content`，将其作为 `ThinkPart` 处理而非丢弃（[#2498](https://github.com/MoonshotAI/kimi-cli/pull/2498)）
- 同步将 `kosong` 依赖升级至 0.55.0（[#2503](https://github.com/MoonshotAI/kimi-cli/pull/2503)）

> 本次为典型的"小而稳"版本，未涉及破坏性变更。

---

## 🔥 社区热点 Issues

| # | 标题 | 类型 | 关注度 | 链接 |
|---|------|------|--------|------|
| #2504 | **install.ps1 在 Windows PowerShell 5.1 崩溃**：Invoke-WebRequest 抛 `IndexOutOfRangeException` | Bug 🐛 | 新建即关键 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2504) |
| #2501 | **TUI 主界面快捷切换 Reasoning Level**：当前需进入 `/model` 二级菜单，深度交互打断心流 | Feature ✨ | 引发 UX 讨论 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2501) |
| #1559 | 官网下载 kimi-cli 命令报错 | Bug 🐛 | 长期未关，👍1 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/1559) |
| #2318 | TPD 速率限额计算异常（current: 1505241） | Bug 🐛 | 涉及计费逻辑，👍1 | [查看](https://github.com/MoonshotAI/kimi-cli/issues/2318) |

**为什么重要：**
- **#2504**：直接阻断 Windows 用户首装路径，是典型的"首次接触即流失"类问题，优先级应高于一般功能 PR。
- **#2501**：直指 TUI 与竞品（Codex/VS Code）的体验差距，反映社区对"低延迟思考强度切换"已成共识需求。
- **#1559 / #2318**：均为跨多个版本仍未关闭的存量问题，需关注是否被新版本隐式修复。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 价值点 | 链接 |
|---|------|------|--------|------|
| #2503 | `chore(release): bump kimi-cli 1.49.0 + kosong 0.55.0` | ✅ 已合并 | 本次发布单 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2503) |
| #2500 | `feat(telemetry)`：与 TS schema 对齐，新增 `trace_id` 与缺失事件 | ✅ 已合并 | 完善可观测性、跨端追踪 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2500) |
| #2471 | `feat(tools)`：新增 **Monitor** 工具，逐行流式 stdout | 🔄 Open | 提升长任务实时反馈能力 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2471) |
| #2488 | `fix(soul)`：`LLMNotSet` 错误消息对新用户更可操作 | 🔄 Open | 优化首装引导文案 | [查看](https://github.com/MoonshotAI/kimi-cli/pull/2488) |

**亮点解读：**
- **Monitor 工具**（#2471）：在后台任务与前端之间建立"类 tail"通道，对调试编译/测试/CI 类 Agent 任务尤为关键。
- **可观测性对齐**（#2500）：Python 与 TS 重写（agent-core-v2）的 telemetry schema 趋同，`trace_id` 透出意味着后续跨链路问题排查效率将显著提升。

---

## 📈 功能需求趋势

从近 24 小时议题抽取，社区关注点呈以下分布：

1. **🖥️ TUI 交互效率**（#2501）：希望减少菜单嵌套，对标 IDE 插件级操作密度。
2. **🪟 跨平台安装体验**（#2504 / #1559）：Windows PowerShell 5.1 与官网安装脚本的兼容性是反复出现的痛点。
3. **📊 限流与计费透明度**（#2318）：TPD/CPM 计数异常与展示问题，反映企业用户对资源消耗的可见性诉求。
4. **🔧 流式工具与调试**（#2471 PR）：长任务执行期"看得见的进度"成为 Agent 工具的基础设施刚需。

---

## 💬 开发者关注点

| 痛点类别 | 具体反馈 | 代表条目 |
|----------|----------|----------|
| **安装链路脆弱** | Windows PS 5.1 兼容、官网安装命令报错、新装后 `LLM not set` 无下一步引导 | #2504 / #1559 / #2488 |
| **TUI 操作割裂** | 切换 Reasoning Level 需 2 级菜单 + 回车，长 prompt 场景体验劣化 | #2501 |
| **限流透明度不足** | TPD 计数疑似异常、报错信息缺少可行动建议 | #2318 |
| **长任务反馈缺失** | 缺乏逐行 stdout 流式能力，调试体验接近"黑盒" | #2471 |

**建议跟进方向：**
- 短期：优先解决 #2504（Windows 安装）与 #2488（首装引导），降低新用户流失。
- 中期：将 #2501 的快捷键方案与 `/model` 命令设计联动，避免实现割裂。
- 长期：随 #2500 完成 telemetry 统一后，可考虑在 CLI 中输出 `trace_id`，便于用户自助排查 #2318 类问题。

---

*本日报由 GitHub 公开数据聚合生成，所有链接均指向 `MoonshotAI/kimi-cli` 仓库。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期**: 2026-07-17
**数据源**: [anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 📌 今日速览

OpenCode 今日发布 **v1.18.3** 修复了 WSL 启动与桌面端滚动问题，桌面版 1.18.2 引发的"发消息无响应"问题引发热议。社区讨论焦点集中在 **Console Go 付费模型服务异常**、**1.18.2 升级回退**，以及持续已久的**内存问题汇总**。与此同时，**[FEATURE] 插件/Agent/Skills 统一市场**正式进入功能候选视野，呼声持续走高。

---

## 🚀 版本发布

### v1.18.3

**Core**
- ✅ 新增 `↑` 上箭头快捷键，当 subagent 选择器高亮首项时直接关闭

**Desktop**
- 🐛 修复首页滚动行为，确保粘性表头与会话列表正确联动
- 🐛 修复启动就绪逻辑，将 WSL 服务加载纳入桌面端启动准备流程

> 📎 Release: [anomalyco/opencode Releases](https://github.com/anomalyco/opencode/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 关注度 | 重要程度 |
|---|------|--------|----------|
| 1 | **[#20695](https://github.com/anomalyco/opencode/issues/20695)** Memory Megathread — 收集堆快照排查内存问题 | 💬110 / 👍89 | ⭐⭐⭐⭐⭐ |
| 2 | **[#13984](https://github.com/anomalyco/opencode/issues/13984)** CLI 复制粘贴完全失效 | 💬53 / 👍26 | ⭐⭐⭐⭐⭐ |
| 3 | **[#28696](https://github.com/anomalyco/opencode/issues/28696)** Plugin/Agent/Skills 统一市场（Master Issue） | 💬6 / 👍23 | ⭐⭐⭐⭐⭐ |
| 4 | **[#37012](https://github.com/anomalyco/opencode/issues/37012)** 保留旧版布局选项 | 💬9 / 👍10 | ⭐⭐⭐⭐ |
| 5 | **[#36506](https://github.com/anomalyco/opencode/issues/36506)** 所有付费 Zen 模型报 "Upstream request failed" | 💬5 / 👍2 | ⭐⭐⭐⭐ |
| 6 | **[#27474](https://github.com/anomalyco/opencode/issues/27474)** TypeError: Failed to fetch（explore / 智能体进入报错） | 💬8 | ⭐⭐⭐ |
| 7 | **[#37255](https://github.com/anomalyco/opencode/issues/37255)** Desktop 1.18.2 升级后模型无响应 | 💬3 / 👍3 | ⭐⭐⭐⭐ |
| 8 | **[#37376](https://github.com/anomalyco/opencode/issues/37376)** [CLOSED] 需要统一的 Connectors / Skills / MCP 管理中心 | 💬4 | ⭐⭐⭐ |
| 9 | **[#35319](https://github.com/anomalyco/opencode/issues/35319)** Desktop 端 RTL（阿拉伯语）排版错乱（附完整修复方案） | 💬6 | ⭐⭐⭐ |
| 10 | **[#37381](https://github.com/anomalyco/opencode/issues/37381)** Composer 增加提示队列与中断控制 | 💬3 | ⭐⭐⭐ |

**为什么这些重要**：

- **#20695 内存汇总帖**：由核心维护者 thdxr 亲自发起，已经成为社区"统一战线"——禁止 LLM 给方案，只收堆快照，治理思路值得借鉴。
- **#13984 复制粘贴失效**：影响所有 CLI 用户的核心交互，长期未解，反映 OpenCode 在终端剪贴板兼容性上的系统性短板。
- **#28696 市场 Master Issue**：发布 1 个月就收获 23 个 👍，是未来生态扩展的"方向标"。
- **#36506 付费模型故障**：直接影响 OpenCode Zen 商业化服务体验，属于 P0 级可用性问题。
- **#37255 1.18.2 桌面端升级故障**：与今天发布的 v1.18.3 修复高度关联，建议所有桌面端用户升级。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 状态 | 说明 |
|---|---|------|
| [#37219](https://github.com/anomalyco/opencode/pull/37219) | OPEN | 修复 config/skill 发现时递归扫描 `node_modules` 导致的性能问题（#30337）|
| [#37414](https://github.com/anomalyco/opencode/pull/37414) | OPEN | 差分摘要去重从 O(n²) 改为基于 Set 的反向线性扫描（#33106），21,845 序列回归通过 |
| [#37180](https://github.com/anomalyco/opencode/pull/37180) | OPEN | TUI 提示框底部 action 在窄宽度下保持可读（修复 `tab agents` 等被压缩问题）|
| [#37190](https://github.com/anomalyco/opencode/pull/37190) | OPEN | 通知模块在 WSL 服务未注册时不再崩（#37171）|
| [#37409](https://github.com/anomalyco/opencode/pull/37409) | OPEN | 为 Node.js Desktop 构建补齐 `OPENCODE_VERSION` 宏，修复 InstallationVersion 退化 |
| [#37411](https://github.com/anomalyco/opencode/pull/37411) | OPEN | 自定义工具加载失败时在 TUI 抛出 Session 事件，不再静默吞错 |
| [#37410](https://github.com/anomalyco/opencode/pull/37410) | OPEN | WebFetch "始终允许" 改为域名级而非全 URL 通配，关闭越权风险 |
| [#36752](https://github.com/anomalyco/opencode/pull/36752) | OPEN | Anthropic via OpenAI 网关时正确读取缓存写入 token（#36749）|
| [#37404](https://github.com/anomalyco/opencode/pull/37404) | OPEN | TUI 主题增加 `$hovered` 语义状态，含 light/dark/V1 迁移默认 |
| [#36781](https://github.com/anomalyco/opencode/pull/36781) | OPEN | Auth 模块支持同一 Provider 多 Profile 密钥（#5391）|

> 此外，今日有多个 PR 被关闭并合并：#37113（版本宏补丁重提版）、#37401（TUI hue 派生）、#37375（系统提示放宽 token 最小化约束）、#37395（CLI trace 隔离）、#37390（Lightpanda 插件生态文档）。

---

## 📈 功能需求趋势

从过去 24 小时活跃议题提炼，OpenCode 社区关注点呈"**生态化 + 稳定化 + 本地化**"三线并进：

1. **🧩 生态化：统一市场（最热）**
   插件、Agent、Skills、Connectors、MCP Server 急需一个集中分发与发现机制（#28696、#37376、#37413）。这是与 Claude Code / Codex 生态竞争的关键短板。

2. **🌐 本地化：RTL 国际化深水区**
   阿拉伯语、波斯语、普什图语等 RTL 排版与翻译（#35319、#34697、#33201）成为近一周新热点，且已有用户提交完整修复方案。

3. **🛡 稳定化：服务可用性**
   - Console Go / Zen 付费模型频繁 4xx/5xx（#36506、#37231、#37056）
   - 客户端 `TypeError: Failed to fetch`（#27474、#27755、#32416）
   - LLM 调试日志缺失（#29186）
   - 自动重试与指数退避呼声（#37412）

4. **🖥 UX：保留与回归**
   - 旧版布局回归（#37012、#32525 关联）
   - Plan/Build 模式自动切换（#37222）
   - Composer 提示队列（#37381）

5. **📂 文件与输入扩展**
   - 拖拽 Office 文件（.docx / .xlsx）（#27689）

---

## 👨‍💻 开发者关注点（痛点 & 高频诉求）

| 类别 | 痛点 / 诉求 | 代表 Issue |
|------|------------|------------|
| **终端体验** | CLI 复制粘贴失效、剪贴板兼容差 | #13984 |
| **桌面端稳定性** | 1.18.2 升级后发消息无响应；小窗口下按钮被遮挡 | #37255、#37236 |
| **内存治理** | 长会话 / 大量文件下内存膨胀，需要系统性排查 | #20695 |
| **调试可观测性** | DEBUG 日志不输出 LLM 请求/响应正文 | #29186 |
| **网络容错** | 缺少自动重试与退避机制；付费模型 Upstream 故障 | #37412、#36506 |
| **多账号管理** | 同 Provider 多 Profile 缺失 | #36781 |
| **生态碎片** | 插件 / Skills / MCP 缺乏集中管理入口 | #28696、#37376 |
| **错误反馈** | 自定义工具加载失败静默吞错，TUI 不可见 | #37411（已被 PR 修复）|
| **权限安全** | WebFetch 始终允许被误用为全域名通配 | #37410（已修复）|
| **国际化** | RTL 排版与多语言翻译覆盖不足 | #35319、#34697、#33201 |

---

## 📊 一句话总结

> v1.18.3 解决了"刚升级就崩"的燃眉之急，但社区真正期待的是 **生态市场**、**服务稳定性** 与 **调试可观测性** 三件大事——下一阶段的看点是 1.18.4 能否解决 Console Go 故障与桌面端兼容性问题。

---

*报告生成时间：2026-07-17 ｜ 数据范围：过去 24 小时 GitHub 公开数据*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-17

> 数据来源：[earendil-works/pi](https://github.com/earendil-works/pi)（原 `badlogic/pi-mono`）
> 统计周期：过去 24 小时

---

## 📌 今日速览

Pi 项目迎来**高密度迭代**：24 小时内连发 v0.80.8 / v0.80.9 / v0.80.10 三个版本，重点统一模型运行时（`ModelRuntime`）与提供商鉴权流，并补齐 Kimi K3 的 adaptive thinking 与 deferred tool loading 支持。与此同时，社区集中反馈集中在**多提供商兼容性**（Anthropic、xAI、Cursor、Together.ai 的废弃模型）和**安全/可靠性细节**（`/tmp` 文件权限、UUID 随机源、Bash 工具的破坏性命令防护）；开发者对扩展 API（reload、appendEntry 提交语义、Markdown transformer）和测试覆盖度的呼声显著上升。

---

## 🚀 版本发布

24 小时内共发布 3 个版本：

| 版本 | 主要更新 | 链接 |
|---|---|---|
| **v0.80.10** | Kimi Coding 模型接入 adaptive thinking；K3 暴露 `max` 等级并支持重放空签名的 thinking blocks | [Release](https://github.com/earendil-works/pi/blob/v0.80.10/packages/coding-agent/docs/kimi-for-coding.md) |
| **v0.80.9** | Kimi K3 内置提供商接入；通过 Kimi 原生协议实现**渐进式扩展工具激活**（Dynamic Tool Loading） | [Release](https://github.com/earendil-works/pi/blob/v0.80.9/packages/coding-agent/docs/extensions.md#dynamic-tool-loading) |
| **v0.80.8** | 引入 **`ModelRuntime` 统一抽象**：集中模型配置；提供商自管 `/login`；**动态提供商目录**（dynamic provider catalogs） | [Release](https://github.com/earendil-works/pi/blob/v0.80.8/packages/coding-agent/docs/providers.md) |

> 三个版本叠加标志 Pi 进入 "Runtime/Provider 层重构" 阶段，后续扩展和内置提供商的边界会更清晰。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 链接 | 重要性 |
|---|---|---|---|
| #3808 | **Anthropic 订阅鉴权警告可关闭** | [issue](https://github.com/earendil-works/pi/issues/3808) | 9 评论、多次反复提交——表明订阅用户在 CLI 反复看到 "extra usage" 警告已是核心抱怨；项目方已 CLOSED，可能在后续版本移除/可配置 |
| #6657 | **Bedrock + `AWS_PROFILE` 鉴权失效（v0.80.7 仍存在）** | [issue](https://github.com/earendil-works/pi/issues/6657) | 9 评论 + 2 👍——回归严重，影响企业用户主流生产路径 |
| #5821 | **Agent SDK 应用支持 Anthropic OAuth 订阅用量** | [issue](https://github.com/earendil-works/pi/issues/5821) | 8 评论——明确厂商授权路径后，社区希望 Pi 原生兼容而非被强制走 token 计费 |
| #6686 | **Pi 自动登出 GitHub（#2725 重现）** | [issue](https://github.com/earendil-works/pi/issues/6686) | 8 评论、跨 macOS / Linux 复现——老问题回归，影响扩展市场的 install 与认证链路 |
| #5294 | **`/settings` 关闭 HTTP timeout 后仍超时** | [issue](https://github.com/earendil-works/pi/issues/5294) | 7 评论——本地慢模型（llama.cpp）用户痛点，配置项未真正生效 |
| #3432 | **read 工具默认行长/字节可配置** | [issue](https://github.com/earendil-works/pi/issues/3432) | 5 评论 + 1 👍——增强大文件编辑体验的合理诉求 |
| #6688 | **`ctx.ui.select()` 缺少 viewport windowing** | [issue](https://github.com/earendil-works/pi/issues/6688) | 5 评论——扩展作者无法写出像 `/model` 那样的可用选择器 |
| #6737 | **kimi-coding thinking 等级：max** | [issue](https://github.com/earendil-works/pi/issues/6737) | 4 评论——直接推动了 v0.80.10 的修复 |
| #6132 / #6748 | **Together.ai 多模型已废弃但仍可选** | [issue](https://github.com/earendil-works/pi/issues/6132) · [issue](https://github.com/earendil-works/pi/issues/6748) | 6 评论合计——选模型列表与上游不一致的"僵尸模型"问题 |
| #6736 | **Pi 0.80.9 仍暴露已移除的 xAI 模型** | [issue](https://github.com/earendil-works/pi/issues/6736) | 3 评论——与 #6132 同类，提示 **catalog 同步机制** 是当前短板 |

> **共性观察**：绝大多数热点 issue 是 CLOSED 状态，说明维护响应速度快，但很多属于"反复出现"的体验型问题（订阅警告、僵尸模型、配置不生效）。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 要点 | 链接 |
|---|---|---|---|---|
| #6750 | **Markdown transformer API** | 🟢 OPEN | 新增可扩展的 Markdown 处理接口；导出 `marked`；附带一个把 LaTeX 公式转 Unicode 的示例扩展，关闭 #6747 | [PR](https://github.com/earendil-works/pi/pull/6750) |
| #6739 | **feat(ai): Telnyx Inference 内置提供商** | ✅ CLOSED | 利用 Telnyx 与 OpenAI 兼容的 Chat Completions，复用现有 OpenAI 适配器即可上线 | [PR](https://github.com/earendil-works/pi/pull/6739) |
| #6742 | **feat(ai): 显式 model generation** | 🟢 OPEN | 关闭 #6741，让模型代际在代码中可被显式推理，便于 catalog 与运行时一致性 | [PR](https://github.com/earendil-works/pi/pull/6742) |
| #6734 | **xAI: 预填 OAuth device link + SuperGrok 登录 + 精简模型列表** | ✅ CLOSED | 默认 grok-4.5；登录体验更直观；清理已下架模型 | [PR](https://github.com/earendil-works/pi/pull/6734) |
| #6216 | **Amazon Bedrock Mantle OpenAI Responses 提供商** | 🟢 OPEN | 通过 OpenAI 官方 Bedrock Provider 接入 Mantle，可走 Responses API | [PR](https://github.com/earendil-works/pi/pull/6216) |
| #6731 | **fix(coding-agent): 不再对 read 错误做语法高亮** | 🟢 OPEN | 修读失败文件时仍对错误信息做语言推断导致误高亮的 bug，带 Elixir 路径回归用例 | [PR](https://github.com/earendil-works/pi/pull/6731) |
| #6730 | **fix(coding-agent): 保留 compaction 队列行为** | 🟢 OPEN | 修复 compaction 队列消息丢失 steer / follow-up 意图的问题，附 active-run 用例 | [PR](https://github.com/earendil-works/pi/pull/6730) |
| #6594 | **feat: SQLite session 存储** | 🟢 OPEN | 新 Agent Harness 的会话存储基底；`getPathToRootOrCompaction` 仅加载到上次 compaction | [PR](https://github.com/earendil-works/pi/pull/6594) |
| #6721 | **fix(ai): 用 PR merge ref 测试模型目录** | 🟢 OPEN | 让在 catalog workflow 合并前开的 PR 也能跑生成脚本，避免目录漂移 | [PR](https://github.com/earendil-works/pi/pull/6721) |
| #6697 | **fix(tui): 规范化 TAB 用于终端输出** | ✅ CLOSED | 关闭 #6696，把原始 TAB 转三列宽，避免 overlay 自动换行造成的重绘不同步 | [PR](https://github.com/earendil-works/pi/pull/6697) |

---

## 📈 功能需求趋势

通过对 50 条更新的 issue 归类，社区最集中的诉求方向：

1. **🧩 提供商生态扩展**
   - 新接入：Telnyx Inference (#6739)、Amazon Bedrock Mantle (#6216)
   - 维护热度：Anthropic OAuth 订阅 (#5821)、Bedrock AWS_PROFILE (#6657)、xAI 模型清理 (#6736)
   - **共同诉求**：catalog 与上游保持同步，避免"僵尸模型" (#6132/#6748)

2. **🔌 扩展 API 增强**
   - `ctx.reload()` 之外引入 `requestReload()` (#6552)
   - `appendEntry` 在 listener 失败时的提交语义 (#6679)
   - `ctx.ui.select()` 加 viewport windowing (#6688)
   - 新增 Markdown transformer (#6750)、显式 model generation (#6742)
   - **结论**：Pi 正从 CLI 工具过渡为 **"可扩展的 agent 平台"**，扩展作者成为关键利益相关方

3. **🛡️ 安全/可靠性**
   - Bash 工具默认无破坏性命令护栏 (#6716)
   - `Math.random()` 生成 session UUID (#6712)
   - `/tmp` 默认 umask 过宽 (#6729)
   - **信号**：随着 Pi 接近生产可用，安全审计类 bug 越来越多被外部报告

4. **⚡ 性能与缓存**
   - 核心级 prompt cache 优化 (#5253)：稳定 system prompt、prepend-only 会话增长
   - Session 落盘改用 SQLite (#6594) 提升大规模会话回放效率

5. **🖥️ TUI / IDE 体验细节**
   - Kitty 键盘协议下 `/model` 立即关闭 (#6746)
   - 终端宽度 off-by-one 断言崩溃 (#6704)
   - Markdown header 仅渲染 1/2 级 (#6745)
   - 文档与 API 实际形态脱节 (#6735)

---

## 👨‍💻 开发者关注点

1. **catalog 是当前最大的可用性瓶颈**
   Together.ai、xAI 等多家提供商模型下架后 Pi 没及时清理选模型列表（#6736、#6132、#6748）。开发者期望 catalog 像 `composer.lock` 一样**确定性、自动同步**——PR #6721 / #6720 正针对这一点构建内容寻址目录。

2. **运行时/扩展契约还不够"稳定"**
   多条 issue 直接质疑运行时边界（#6552、#6679、#6688、#6747），并强调 `docs/tui.md` 与实际 API 长期脱节（#6735）。开发者希望**先用扩展 API 锁行为，再改实现**。

3. **测试覆盖率成为"软争议"**
   #6710 提出 `packages/orchestrator/` 完全无测试，对一个协调多 agent / IPC / 进程生命周期的模块而言高风险。叠加 #6744（并发 prompt 启动竞态）这类补丁必须自带回归用例，社区正在形成"PR 必须配测试"的共识。

4. **配置项与代码不一致的信任问题**
   #5294（HTTP timeout 配置不生效）、#6743（`pi-ollama-cloud` 在 0.80.8+ 直接 "Failed to load extension"）让用户在下/降版本之间反复横跳。开发者明确指出：**config 改了但行为没改，比没有 config 更糟**。

5. **安全主题从"个人项目"升级为"产品话题"**
   24 小时内出现 3 条纯安全向 issue（#6716、#6712、#6729），由同一位外部贡献者 (`prayag0one4`) 集中提交，且多处给出精确行号与 diff 思路——预示着 Pi 已经进入**被外部做安全审计**的阶段。

---

**结语**：今天的 Pi 主线版本号已经站上 0.80.x，最显著的变化是 `ModelRuntime` / 动态 provider 目录 / SQLite session 存储 / 显式 model generation——都在为"长期可维护的 agent 平台"打地基。社区的反馈正快速从"功能缺失"转向"行为契约、安全细节、可扩展性治理"，这也是下一阶段需要重点关注的信号。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-17

## 📌 今日速览

今日 Qwen Code 完成了 **v0.19.11 稳定版**发布，同步推出 nightly 版本；社区围绕 **多 workspace daemon 架构**的讨论进入收尾阶段（核心 RFC #6378 已关闭），重点转向 Workspace 粒度的安全隔离与遥测治理。Web Shell 与桌面端能力持续扩张（Skills 管理、Goals 页面、Git 工作树可视化），CLI 渲染层在 VP 模式下的稳定性、sticky panel、telemetry 噪声等问题被密集修复。

---

## 🚀 版本发布

### v0.19.11 稳定版
无 Breaking Changes。主要更新：

- **Features**
  - `feat(web-shell)`: workspace path lock（[#6853](https://github.com/QwenLM/qwen-code/pull/6853)）
  - Web Shell 进一步增强（Skills 管理、Goals 页面等，详见 PR 部分）
- **Fixes**
  - `fix(serve)`: 加固 multi-workspace ownership
  - 修复 sticky task panel 在 idle 状态残留（[#7062](https://github.com/QwenLM/qwen-code/pull/7062)）
  - 修复 `/update` 检查 npm registry 误判为最新（[#6857](https://github.com/QwenLM/qwen-code/issues/6857)）

### v0.19.11-nightly.20260717.f8e6e8931
- 追踪 cold first-session 启动耗时（[#6907](https://github.com/QwenLM/qwen-code/pull/6907)）

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 评论 | 关注理由 |
|---|------|------|------|----------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: Support multiple workspaces in one qwen serve daemon** | CLOSED | 25 | 今日最高讨论量，奠定了 `qwen serve` 多 workspace 架构基础；已衍生出 PR #7003、#7014、#7015 等一系列实现 |
| [#4877](https://github.com/QwenLM/qwen-code/issues/4877) | OpenWork 无法区分不同 provider 的同名模型 | CLOSED | 6 | 影响自定义 provider 的开发者，揭示了 settings schema 中 `modelProviders` 配置的唯一性约束缺失 |
| [#7051](https://github.com/QwenLM/qwen-code/issues/7051) | VS Code 侧边插件报错（ACP 进程意外退出） | OPEN | 4 | 影响 VS Code 用户核心工作流，需官方排查 CLI 启动参数在 Electron 下的兼容性问题 |
| [#7044](https://github.com/QwenLM/qwen-code/issues/7044) | 升级到 v0.19.11 后直接报错 | OPEN | 4 | 升级路径回归问题，警示 release 流程需更严格的兼容性矩阵 |
| [#6857](https://github.com/QwenLM/qwen-code/issues/6857) | `/update` 在 0.19.9 误判为最新 | CLOSED | 4 | npm registry 缓存导致的 false-negative，已在 v0.19.10+ 修复；#7049 进一步提出超时 UX 改进 |
| [#6813](https://github.com/QwenLM/qwen-code/issues/6813) | 紧凑工具摘要应展示文件名而非数量 | OPEN | 4 | 推动 compact UI 信息密度提升，已演化为 7004/7007/7008/7009 三阶段重构提案 |
| [#5431](https://github.com/QwenLM/qwen-code/issues/5431) | 可选的语音输入模式（P1） | OPEN | 4 | 高优无障碍需求，但需解决终端麦克风权限与隐私问题 |
| [#7015](https://github.com/QwenLM/qwen-code/issues/7015) | 多 workspace 下 `cd` 路径的所有权语义 | CLOSED | 3 | 定义了 `POST /session/:id/cd` 在跨 workspace 时的归属判定 |
| [#7056](https://github.com/QwenLM/qwen-code/issues/7056) | VS Code Companion v0.19.11 连接失败 | OPEN | 3 | 与 #7051 同一根因，反映 0.19.11 升级后 IDE 集成的回归面 |
| [#7017](https://github.com/QwenLM/qwen-code/issues/7017) | **fix(channels): scope pairing and allowlist state by workspace**（P1） | OPEN | 2 | **安全类**问题：DM pairing 与 allowlist 写入全局 Qwen 目录，存在跨 workspace 数据泄漏 |

---

## 🛠 重要 PR 进展（精选 10 条）

| # | 标题 | 类型 | 关键看点 |
|---|------|------|----------|
| [#7003](https://github.com/QwenLM/qwen-code/pull/7003) | **feat(serve): Complete legacy session workspace telemetry** | feat | 收尾多 workspace 架构：48 条 legacy route 全量接入 telemetry catalog，41 handler-resolved / 7 primary-bound 的归因分流 |
| [#7065](https://github.com/QwenLM/qwen-code/pull/7065) | **fix(channels): scope pairing and allowlist state by workspace** | fix/security | 修复 #7017：`PairingStore` 改用 `cwd` 做路径 hash 隔离，CLI `qwen channel pairing` 命令同步增强 |
| [#6931](https://github.com/QwenLM/qwen-code/pull/6931) | fix(cli): tighten VP-mode controls footprint and fix shell tool indicator overlap | fix | 5 项 VP 模式渲染回归（粘性面板、子代理名册拥挤、shell 工具指示器重叠等） |
| [#7064](https://github.com/QwenLM/qwen-code/pull/7064) | feat(web-shell): paginate restored session history | perf | 历史会话按需分页，使用不透明游标，避免大型 transcript 全量加载卡顿 |
| [#7018](https://github.com/QwenLM/qwen-code/pull/7018) | feat(web-shell): add skill management pages | feat | Web Shell 全功能 Skills 管理：`/skills` 页面 + Plugins 第三 Tab + 搜索/过滤/启停 |
| [#6937](https://github.com/QwenLM/qwen-code/pull/6937) | feat(cli): mouse text selection and copy in VP mode | feat | VP 模式支持鼠标拖选/双击选词/三击选行/自动复制到剪贴板 |
| [#7052](https://github.com/QwenLM/qwen-code/pull/7052) | fix(core): make the per-turn tool-call cap adaptive | fix | 工具调用上限改为自适应，避免长任务被硬截断 |
| [#7063](https://github.com/QwenLM/qwen-code/pull/7063) | fix(ask-user-question): accept long headers and truncate them in the TUI | fix | 13 字符以上标题导致整段问题失效，现改为 ellipsis 截断 |
| [#7060](https://github.com/QwenLM/qwen-code/pull/7060) | feat(ui): let the user read the full plan from the exit_plan_mode confirmation | feat | 在 plan 确认弹窗按 `o` 用编辑器打开完整 plan markdown（复用 skill-review 流程） |
| [#6998](https://github.com/QwenLM/qwen-code/pull/6998) | ci(autofix): recover from generated-artifact CI gates and stop silent stalls | ci | 修 dev-bot 因 settings schema 改动后未重新生成 artifact 而永久卡死的场景 |

> 其他值得关注：#6561（Goals 页面 + 修复 daemon 恢复时 `/goal` 丢失）、#6969（daemon 日志轮转，10MiB × 4 档）、#7039（空工具结果续写重试）、#6967（退出 Plan mode 需明确确认）。

---

## 📈 功能需求趋势

从过去 24h 的 Issues 中提炼，社区最强烈的需求集中在以下方向：

1. **多 workspace daemon 架构**（热度最高）
   - RFC 收尾后，焦点转向跨 workspace 的 session 归属、cd/branch/fork 路由语义、PairingStore 隔离、telemetry 归因。

2. **Web Shell / 桌面端能力扩展**
   - Skills 全功能管理（#7018）、Goals 页面（#6561）、工作树 Git 可视化（#7054）、历史会话分页（#7064）。
   - 社区对「浏览器形态的 IDE 终端」接受度持续提升。

3. **UI/渲染一致性重构**
   - Alex-ai-future 提出的「9 种路径格式化」统一工程（#7004 → #7007 → #7008 → #7009）已成体系化 PR 链。
   - 紧凑工具摘要展示文件名（#6813）、streaming code block 渲染稳定性（#7006）、plan 完整查看（#7060/7001）。

4. **IDE 集成体验**
   - VS Code Companion 在 0.19.11 后出现多处连接失败（#7051、#7056），需统一排查 ACP/Electron 参数兼容性。

5. **记忆与多 Agent 治理**
   - RFC #7040 提出 auto memory 的 recall/trusted writes/lifecycle governance 三段式演进路线。
   - 中文社区继续推动子 Agent 并行/记忆隔离（#6093）。

6. **CLI 可用性细节**
   - 语音输入（#5431, P1）、VP 模式鼠标选择（#6937）、update 检查超时软提示（#7049）、退出 Plan 模式显式确认（#6967）。

7. **跨平台兼容**
   - CentOS 7 因 GLIBC 版本不兼容（#7002）凸显 Linux 发行版长尾支持问题。

---

## 💬 开发者关注点

- **升级回归成为最大焦虑**：v0.19.11 升级后出现多个 VS Code / CLI 启动错误（#7051、#7056、#7044），开发者呼吁在 release notes 与 changelog 中标注 ACP / Electron 相关参数变更。
- **CLI 升级体验打磨**：[#7049](https://github.com/QwenLM/qwen-code/issues/7049) 指出 #6857 修复后引入了「超时即失败」的硬错误，建议降级为 warning 并放宽超时预算。
- **安全与隔离被低估**：[#7017](https://github.com/QwenLM/qwen-code/issues/7017) 揭示 `PairingStore` 全局写盘问题，开发者意识到多 workspace 不仅是性能议题，更是信任边界议题。
- **路径与终端渲染的一致性**：社区（特别是 Alex-ai-future）系统化推动了「共享 `formatDisplayPath()`」三阶段重构，反映出对 DX 一致性的高敏感度。
- **Telemetry 噪声与 dev-bot 自愈**：[#6998](https://github.com/QwenLM/qwen-code/pull/6998) 与 [#7033](https://github.com/QwenLM/qwen-code/pull/7033) 共同反映出「自动化 CI 应主动暴露而非沉默失败」的工程文化正在形成。
- **平台长尾**：CentOS 7 / GLIBC 兼容（#7002）、Windows MCP 权限链（#6992）等提醒维护者需要在主流 GA 平台之外维护更多兼容矩阵。

---

*日报生成基于 GitHub 数据快照：2026-07-17 · Issues 34 条 / PRs 50 条 · 数据源 [QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**: 2026-07-17
**仓库**: [Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（项目已正式更名为 **CodeWhale**）

---

## 📌 今日速览

项目正式从 **DeepSeek-TUI 品牌迁移至 CodeWhale**（Shannon Labs 旗下产品 `codewhale`），v0.9.0 完成 crates.io 发布并同步修复打包链路。今日社区活动高度集中于**首次安装引导 UX 重构**与**多模型提供商扩展**（Kimi K3 / OpenCode Go / Xiaomi MiMo / TelecomJS），并伴随大规模遗留代码清理与单测补全工作（过去 24 小时合并 50+ PR、活跃议题达 50 条）。

---

## 🚀 版本发布

### v0.9.0（已于今日发布并合并至 crates.io）

- **品牌重塑**：项目从 DeepSeek-TUI 迁移至 **CodeWhale**；命令行 `codewhale`、npm 包与 release 资产保留小写技术命名。
- **废弃声明**：旧的 npm 包 `deepseek-tui` 不再发布新版本，v0.8.x 遗留的 `deepseek` / `deepseek-tui` 入口将进入维护期。
- **打包修复**：伴随 [#4413](https://github.com/Hmbown/CodeWhale/issues/4413) 修复 `codewhale-tui` 在 crates.io 发布时因嵌入仓库根 changelog 路径错误导致的验证失败。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|---------|
| 1 | [#3793](https://github.com/Hmbown/CodeWhale/issues/3793) v0.9.2 本地化宪法生成器 UX 重构 | 主张"语言优先 + 引导式 + 开放式画布"形态,明确禁止宪法文件直接改写运行时安全设置 | 💬 16 评论 / ⭐ 0 |
| 2 | [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) v0.9.3 Fleet 模型负载选择器 | 在 TUI/CLI/Subagents/Fleet 间共享模型与负载选择器,新增"Fleet loadout auto"自动模式 | 💬 11 评论 |
| 3 | [#3792](https://github.com/Hmbown/CodeWhale/issues/3792) v0.9.2 首启引导体验重塑 | 把首启流程从"编辑 config"改为"启动 CodeWhale"的体感,严格区分宪法文本与运行时安全控制 | 💬 8 评论 |
| 4 | [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) 🌊 帮助新贡献者跟上 CodeWhale 节奏 | 提议为高频迭代项目(10+ PR/day)提供开发环境维护 Skill/workflow | 💬 7 评论 |
| 5 | [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) 支持 OpenCode Go/Zen 作为 DeepSeek 提供商 | 可访问 DeepSeek-V4 且成本更低 | 💬 7 / ⭐ 1 |
| 6 | [#2625](https://github.com/Hmbown/CodeWhale/issues/2625) **已关闭** - Port to HarmonyOS | 解决 rustyline → nix 的 OHOS ioctl 类型不匹配 | 💬 4 评论 |
| 7 | [#805](https://github.com/Hmbown/CodeWhale/issues/805) **已关闭** - Windows 安装包任务结果显示不全 | 长任务结果文本右侧被遮挡,滚动也无法完整查看 | 💬 4 评论 |
| 8 | [#4010](https://github.com/Hmbown/CodeWhale/issues/4010) v0.9.4 WhaleFlow Conductor 代理 | 引入可协调多代理集群的"指挥者"角色,处理扇出/重试/合流 | 💬 4 评论 |
| 9 | [#4417](https://github.com/Hmbown/CodeWhale/issues/4417) v0.9.1 Kimi 一等公民 OAuth 登录 | 与 [#4387](https://github.com/Hmbown/CodeWhale/issues/4387)（Kimi K3 模型）配合,补全 Moonshot 鉴权链路 | 💬 3 评论 |
| 10 | [#2494](https://github.com/Hmbown/CodeWhale/issues/2494) macOS + iTerm2 用户问题汇总 | 快捷键 macOS 不兼容、换行发送为多次提问、Ctrl+C 误关闭会话等 4 类核心痛点 | 💬 3 评论 |

**趋势解读**: 头部议题几乎全部围绕"**首启引导 → 模型选择 → 代理编排**"这条用户上手漏斗展开,反映出 v0.9.x 阶段社区最关心的不是新功能深度,而是从零配置到第一通对话的顺畅度。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 分类 | 内容要点 |
|---|----|----|---------|
| 1 | [#4456](https://github.com/Hmbown/CodeWhale/pull/4456) **🧹 已合并** | 重构 | 把 ~800 行的 `run_subagent` 任务循环里 4 段重复尾部逻辑抽成 `finish_subagent_run` |
| 2 | [#3781](https://github.com/Hmbown/CodeWhale/pull/3781) | 新提供商 | OpenCode Zen provider 支持（呼应 [#1481](https://github.com/Hmbown/CodeWhale/issues/1481)） |
| 3 | [#4454](https://github.com/Hmbown/CodeWhale/pull/4454) **🔒** | 安全硬化 | Runtime API CORS 通配符替换为最小权限的显式白名单（`Authorization` / `Content-Type` / `Accept` / `X-Codewhale-Runtime-Token` / `X-DeepSeek-Runtime-Token`） |
| 4 | [#4443](https://github.com/Hmbown/CodeWhale/pull/4443) | Bug 修复 | TUI 中孤儿 model-wait 子代理终止：单一"claim→deliver→commit"转换,并保留重试检查点 |
| 5 | [#4434](https://github.com/Hmbown/CodeWhale/pull/4434) **✅ 已合并** | Bug 修复 | 在派生 facts 中暴露 OpenCode Go,恢复 first-class 合并后被破坏的 provider drift 闸门 |
| 6 | [#4452](https://github.com/Hmbown/CodeWhale/pull/4452) **🧹 已合并** | 死代码清理 | 移除已弃用的 `TodoAddTool` / `TodoUpdateTool`,统一用 `work_update` 作为唯一进度面 |
| 7 | [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) **🧹** | 死代码清理 | 移除遗留 memory push/inject 代码块及相关 token (`UserMemory` / `ConfigEnabled` / `App::moraine_fallback`) |
| 8 | [#4444](https://github.com/Hmbown/CodeWhale/pull/4444) **🧹** | 死代码清理 | 移除 `build_headless_context_report` 中遗留 memory 块 |
| 9 | [#4442](https://github.com/Hmbown/CodeWhale/pull/4442) **🧹** | 死代码清理 | 从 `refresh_system_prompt` 中清除旧 memory 组合块,改由 `Moraine recall` 统一接管 |
| 10 | [#4437](https://github.com/Hmbown/CodeWhale/pull/4437) **⚡ 已合并** | 性能 | `runPrReview` 顺序 for 循环改为 `Promise.all` 并行,本地缓存异常避免单 PR 失败污染全部 |

> **补充观察**: [#4431](https://github.com/Hmbown/CodeWhale/pull/4431)、[#4428](https://github.com/Hmbown/CodeWhale/pull/4428)、[#4424](https://github.com/Hmbown/CodeWhale/pull/4424)、[#4451](https://github.com/Hmbown/CodeWhale/pull/4451)、[#4439](https://github.com/Hmbown/CodeWhale/pull/4439)、[#4429](https://github.com/Hmbown/CodeWhale/pull/4429)、[#4430](https://github.com/Hmbown/CodeWhale/pull/4430)（同时修复 array 提取 bug）共同构成 **测试覆盖率补全战役**,密度异常高。

---

## 📈 功能需求趋势

从 Issues 标签与描述中可归纳出五大需求主线:

1. **多模型提供商生态化** - Kimi K3（[#4387](https://github.com/Hmbown/CodeWhale/issues/4387) + OAuth [#4417](https://github.com/Hmbown/CodeWhale/issues/4417)）、OpenCode Go/Zen（[#1481](https://github.com/Hmbown/CodeWhale/issues/1481) + [#3781](https://github.com/Hmbown/CodeWhale/pull/3781)）、Xiaomi MiMo UltraSpeed（[#3810](https://github.com/Hmbown/CodeWhale/issues/3810)）、TelecomJS（[#4370](https://github.com/Hmbown/CodeWhale/pull/4370)）持续接入。**Whale-size 命名阶梯**（[#2026](https://github.com/Hmbown/CodeWhale/issues/2026)）试图把 Pro/Flash 与思考档位统一表达。

2. **首启 UX / Onboarding 重塑** - [#3793](https://github.com/Hmbown/CodeWhale/issues/3793) + [#3792](https://github.com/Hmbown/CodeWhale/issues/3792) 共同定义 v0.9.2 的"宪法引导式首启脊柱",把语言、权限姿态、安全边界明确分层。

3. **WhaleFlow 多代理编排** - Conductor 代理（[#4010](https://github.com/Hmbown/CodeWhale/issues/4010)）、Fleet Ledger 共享任务清单（[#3229](https://github.com/Hmbown/CodeWhale/issues/3229)）、Swarm 合成约简（[#3230](https://github.com/Hmbown/CodeWhale/issues/3230)），异构模型（DeepSeek / GLM / MiniMax / Moonshot-Kimi / OpenAI）协同是产品战略主线。

4. **跨平台与版本管理** - HarmonyOS 移植（[#2625](https://github.com/Hmbown/CodeWhale/issues/2625) 关闭 + [#4384](https://github.com/Hmbown/CodeWhale/pull/4384) 跟进 rquickjs 绑定生成）、CI release-tag 检出新版本兼容（[#4388](https://github.com/Hmbown/CodeWhale/issues/4388) 关闭）。

5. **测试覆盖与单体拆分** - v0.9.3 重构航线（[#3306](https://github.com/Hmbown/CodeWhale/issues/3306) 拆分 Rust 单体、[#3946](https://github.com/Hmbown/CodeWhale/issues/3946) 拆分 engine.rs）配合大量补测 PR,体现"先稳后扩"的工程节奏。

---

## 🎯 开发者关注点（痛点 / 高频需求）

- **配置首启体验不佳**:[#3792](https://github.com/Hmbown/CodeWhale/issues/3792) 直接把现状描述为"在编辑 config 而不是启动产品",官方已立项解决。
- **macOS 兼容性与快捷键**:[#2494](https://github.com/Hmbown/CodeWhale/issues/2494) 集中反馈快捷键、换行、终止命令等基础交互在 macOS + iTerm2 下表现差。
- **Windows / 长任务渲染**:[#805](https://github.com/Hmbown/CodeWhale/issues/805) 报告长内容右侧被截断 + [#1106](https://github.com/Hmbown/CodeWhale/issues/1106) 报告 Win10 滚动失效 → 渲染管线缺陷已成顽疾。
- **会话控制能力不足**:用户无法暂停/重定向/取消进行中的提问（[#2494](https://github.com/Hmbown/CodeWhale/issues/2494) 与 [#1888](https://github.com/Hmbown/CodeWhale/issues/1888) 提出的 slash commands 控制面契约直击此痛点）。
- **模型路由策略与硬性预算**:[#4415](https://github.com/Hmbown/CodeWhale/issues/4415) 抓出 GLM-5.2 路径下突破 8 次工具调用预算的实测案例,推动"per-turn 工具预算 + write-first 约束"。
- **新贡献者门槛过高**:[#4227](https://github.com/Hmbown/CodeWhale/issues/4227) 反映 10+ PR/day 的高频迭代让新人难以跟进,需要专属 dev-env Skill。
- **测试覆盖薄弱**:`McpManager::call_tool`、`ModelRegistry::new`、`repair_json_text_once` 等核心函数过去缺失单测,补测 PR 集中爆发。
- **Legacy 内存/任务 API**:v0.8.71 时遗留的 memory push/inject 与 `TodoAddTool`/`TodoUpdateTool` 进入系统性清理阶段（[#4455](https://github.com/Hmbown/CodeWhale/pull/4455)、[#4444](https://github.com/Hmbown/CodeWhale/pull/4444)、[#4442](https://github.com/Hmbown/CodeWhale/pull/4442)、[#4452](https://github.com/Hmbown/CodeWhale/pull/4452)）。

---

*日报基于截至 2026-07-17 的 GitHub 公开数据自动整理;链接均指向仓库现主分支(Hmbown/CodeWhale)。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*