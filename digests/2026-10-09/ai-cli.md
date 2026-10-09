# AI CLI 工具社区动态日报 2026-10-09

> 生成时间: 2026-10-09 04:04 UTC | 覆盖工具: 9 个

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

**数据周期**：2026-10-08 ~ 2026-10-09
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI

---

## 1. 生态全景

当前 AI CLI 生态已从"功能可用性"竞争进入 **"工程化与平台化"深水区**：头部工具（Claude Code、OpenAI Codex）正以每周多次的节奏打磨稳定性、安全模型与跨设备叙事；中游工具（Gemini CLI、Copilot CLI、OpenCode）集中偿还技术债务，MCP/Provider 适配成为新的分水岭；新兴工具（Qwen Code、Pi、DeepSeek TUI）则在 **Managed Agent、扩展 API、可观测性** 等方向开辟差异化路径。整体观察，**Hooks/沙箱/MCP 三大安全与互操作基座** 正在成为各家共识性投入领域，而 **Windows 平台碎片化、计费透明度、长会话可观测性** 则是尚未收敛的共同痛点。

---

## 2. 各工具活跃度对比

| 工具 | Issues 数（24h） | PR 数（24h） | Release 情况 | 关键信号 |
|------|-----------------|--------------|--------------|----------|
| **Claude Code** | Top 10 展示 + 多条讨论 | Top 10 展示 | ✅ **v2.1.294 / v2.1.295 双版本** | Hooks 安全（`onFailure: "block"`）+ OSC 7501 |
| **OpenAI Codex** | Top 10 展示 | Top 10 展示 | ✅ **v0.162.0 稳定版** + 3 预发布 | Git worktree、Command Center 钉住 |
| **Gemini CLI** | Top 10 展示 | 15+ 展示 | ⚠️ 无 | 集中清理 P1 安全 + subagent 修复 |
| **Copilot CLI** | 50 条活跃 | ⚠️ 0 PR（冷却期） | ✅ **v1.0.95 系列** + v1.0.94 正式 | Entra 原生认证、`--context` 修正 |
| **Kimi Code CLI** | — | — | — | **过去 24h 无活动**（异常信号） |
| **OpenCode** | Top 10 展示 | Top 10 展示 | ⚠️ 无 | v2 扫尾 + 多 Provider 扩展 |
| **Pi** | Top 10 展示 | Top 10 展示 | ⚠️ 无 | 扩展 API 增强 + 计费精度 |
| **Qwen Code** | **50 条** | **50 条** | ❌ **两条流水线失败** | Managed Agent 架构 + Web Shell |
| **DeepSeek TUI** | 20 条 | 10 条展示 | ⚠️ 无（v0.10.2 RC 阻塞） | Terminal Dock + 发布工程修复 |

> 注：Issues/PR 数为各日报中明确给出的统计；Top 10 表示仅展示了热度最高的代表性条目。

**活跃度梯队判断**：

| 梯队 | 工具 | 特征 |
|------|------|------|
| 🔥 **高活跃 + 高产出** | Claude Code、OpenAI Codex、Qwen Code、OpenCode | 有 Release + 大量 PR + 议题持续涌入 |
| ⚡ **高活跃 + 修复为主** | Gemini CLI、Copilot CLI、Pi | 集中还技术债、扩展 API 治理 |
| 🛠 **节奏放缓** | DeepSeek TUI、OpenCode | 进入稳定性收尾期或等待 RC |
| ⚠️ **停滞信号** | Kimi Code CLI | 24h 完全无活动 |

---

## 3. 共同关注的功能方向

跨工具统计，至少 **4 家以上** 在同步推进的共性方向如下：

| 功能方向 | 涉及工具 | 共同诉求 |
|----------|---------|----------|
| **Hooks / 沙箱安全加固** | Claude Code、Gemini CLI、Pi、DeepSeek TUI | Hook 失败时 fail-closed、权限提示旁路阻断、prompt injection 防御；典型 PR：CC #84364（异常即 deny）、Gemini #29479（路径穿越）、#29480（git 参数越权） |
| **MCP 生态治理** | Gemini CLI、Copilot CLI、DeepSeek TUI、Pi | OAuth 客户端持久化、回调窗口延长、启动期连接可靠性；典型：Copilot #2901（懒加载）、Gemini #29578（offline access）、Pi #10698（env 展开） |
| **多 Provider / BYOK 灵活性** | Copilot CLI、OpenCode、Pi | 不锁定单一模型后端、支持 OpenRouter/本地/Vertex/NIM 等多种路由；典型：Copilot #3709（👍34）、OpenCode #54058（Vertex Mistral）、Pi #10672（按 key 过滤模型） |
| **Subagent / Agent 编排语义** | Claude Code、Gemini CLI、Qwen Code、OpenCode | 状态可观测性、并发控制（join/cancel/quiescent stop）、hooks 对子调用的约束；典型：CC #87874、Gemini #22323（MAX_TURNS 误报 GOAL）、Qwen #12380（Stage D 架构） |
| **Windows 兼容性** | OpenAI Codex、Claude Code、Copilot CLI、Gemini CLI、Qwen Code、Pi | 几乎每家都有 Windows 专属 Bug 报告；典型：Codex #51590（ACL error 32）、CC #87628（草稿丢失）、Qwen #13662（Windows Terminal 被最小化）、Pi #9504（Store shell 别名） |
| **TUI / 桌面体验打磨** | Claude Code、OpenAI Codex、OpenCode、Copilot CLI | 桌面冷启动、键盘绑定、图形界面无障碍；典型：OpenCode #54060（冷启动 44.8s → 9.7s）、Codex #48938（渲染崩溃）、CC #95125（Enter 误触） |
| **计费 / 用量透明度** | OpenCode、Copilot CLI、Pi、Qwen Code | OTel 计费属性、subagent 嵌套账单、TUI 用量显示、按真实账单金额而非目录价计费；典型：OpenCode #41102（>100%）、Pi #10286 |
| **Token 与上下文管理** | Claude Code、Pi、Qwen Code | auto-compact 策略、压缩时成本失控、no-op 抽取冷却；典型：CC #92434（压缩溢出）、Qwen #13004 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特点 |
|------|---------|---------|--------------|
| **Claude Code** | Anthropic 生态旗舰 / Hooks 编程范式 | 严肃工程团队、安全敏感场景 | 持续强化 Hooks 安全语义（`onFailure: "block"`、HIPAA 配置），Desktop 与 TUI 双线并行 |
| **OpenAI Codex** | OpenAI 跨设备叙事 + 工作流整合 | 跨平台重度用户、远程协作场景 | Git worktree 原生化、Agent Command Center（`p` 键置顶）、强 push Windows 平台改进 |
| **Gemini CLI** | Google 生态 / Agent + 浏览器代理 | 浏览器自动化、MCP 远程服务器 | AST 感知代码理解、Browser Agent（Wayland 仍缺）、subagent 体系成熟化 |
| **Copilot CLI** | GitHub 工作流集成 / ACP 协议 | GitHub 用户、企业 Copilot 订阅者 | ACP 协议平权、Entra 原生认证、Assisted Permissions 治理 |
| **OpenCode** | 多 Provider 工具 + 桌面/TUI 并重 | 模型灵活用户、桌面端偏好者 | 协议层兜底（Anthropic/OpenRouter/Vertex/NIM/Mistral）、桌面启动性能极致优化 |
| **Pi** | 扩展优先 / 开发者 SDK | 扩展作者、追求会话控制力的高级用户 | 扩展 API 持续完善（abort 注解、保持会话 busy）、OpenRouter 深度集成 |
| **Qwen Code** | Managed Agent 架构 / Web Shell 可观测性 | 多 Agent 协作、长会话调试 | TypeScript agent loop 与模型推理解耦、H4b 子 Session 运行时、Web Shell 增强 |
| **DeepSeek TUI** | 轻量 TUI / 桌面 pet + Terminal Dock | TUI 偏好者、爱好者社区 | GPUI 鲸鱼动画、session 级 shell 等待、Release 工程挑战（crates.io 10MiB） |
| **Kimi Code CLI** | （24h 无活动，难判断当前方向） | — | ⚠️ 沉默信号需关注 |

**差异化坐标**（粗略定位）：

```
                  单模型深度  vs  多 Provider 灵活
                          │
        Claude Code ●     │     ● OpenCode / Pi
                          │
   企业/MCP/沙箱  ●───────●───────●  开源/扩展生态
       Gemini CLI /       │       Copilot CLI
       Copilot CLI        │
                          │
   Desktop/TUI 重投入     │     ● Qwen Code / DeepSeek TUI
        OpenAI Codex      │
                          │
```

---

## 5. 社区热度与成熟度

**头部议题"密度"对比**（以各工具最高热度 issue 的 👍 数为代理指标）：

| 工具 | 代表 issue | 👍 数 | 评论数 | 反映的成熟度信号 |
|------|-----------|-------|--------|------------------|
| Claude Code | #27302 多 Connector 账户 | **404** | 264 | 已形成强社区共识，但官方未解 |
| OpenAI Codex | #47577 fork PR @codex review | 33 | 11 | 评论少但👍集中，开源贡献者强烈诉求 |
| Codex | #39229 macOS Dark 对比度 | 14 | 9 | 长期未根治的 UX 缺陷 |
| Copilot CLI | #892 沙箱模式 | **49** | 12 | 本周最热，已 CLOSED |
| Copilot CLI | #3709 BYOK 模型切换 | 34 | 9 | 高 👍 持续 OPEN |
| Pi | #9335 GPT-6 cache 保留 | 8 | 10 | 涉及 prompt-cache 成本关键路径 |
| OpenCode | #37003 Clean Output | 3 | 4 | 单 issue 指标，活跃度分散 |
| Qwen Code | #12380 Managed Agent | — | **50** | 全部为内部评审讨论，深度架构议题 |

**成熟度梯队**：

- **🟢 高成熟（生态成形 + 大量长期议题）**：Claude Code（404 👍 单 issue 的热度）、OpenAI Codex（Win 痛点形成 Issue 集群）
- **🟡 中成熟（快速迭代 + 债务清理并行）**：Gemini CLI、Copilot CLI、OpenCode、Pi
- **🟠 架构转型期**：Qwen Code（Managed Agent 还在 Stage D→H 推进）
- **🔴 早期 / 信号异常**：DeepSeek TUI（小而专，但发行链阻塞）、Kimi Code CLI（24h 沉默）

---

## 6. 值得关注的趋势信号

### 趋势 A：**Hooks / 沙箱进入"安全硬化期"**

Claude Code 引入 `onFailure: "block"`、Gemini CLI 一次性合并 8 条 P1/P2 安全修复、Copilot CLI 沙箱模式请求被关闭——**"Hook 失败默认 deny"正在成为行业新基线**。
> **对开发者**：评估 CLI 工具时，应将"hook 异常策略"与"沙箱权限边界"列为关键选型指标。

### 趋势 B：**MCP 从"功能扩展"走向"基础设施化"**

OAuth 持久化、env 展开、manifest 过滤、client_secret_basic RFC 合规……MCP 已不再是"加分项"，而是 **决定企业能否落地的准入门槛**。
> **对开发者**：自定义 MCP 服务器需在认证、错误恢复、可观测性上做完整设计，否则将与上游工具演进脱节。

### 趋势 C：**Subagent / 多 Agent 编排成为下一阶段差异化主战场**

Claude Code 抱怨 `agent()` 不受 hooks 管控、Gemini CLI subagent 频繁"假成功"或无限挂起、Qwen Code 投入 Managed Agent 顶层架构——**"谁能稳定编排多 Agent" 将取代"单 Agent 跑得多好" 成为新的评估维度**。
> **对开发者**：复杂 Workflow 不要假设当前 subagent 语义是稳态，OpenCode #53876（输出截断自动续写）这类补丁级别的修复反映出长链路执行仍脆弱。

### 趋势 D：**跨设备叙事遭遇 Windows 现实检验**

OpenAI Codex 把"Windows↔Android 同步"做为主打，但 #41470/#51590/#46114 等多条 Windows 阻塞性 Issue 直接动摇这一叙事；Copilot CLI Entra 原生认证优先 macOS 也是同样思路。
> **对开发者**：跨设备、跨平台功能短期内仍以 macOS/Linux 为最佳体验，Windows 用户需预留更高容忍度。

### 趋势 E：**计费透明度成为信任基础设施**

OpenCode 用量显示 >100%（#41102）、Copilot CLI Premium 请求疑似因卡死被重复扣（#770）、Pi `before_agent_start` 注入导致重复计费（#10267）——**OTel 计费属性、嵌套 span 链条、按真实账单金额计费** 正成为必须项。
> **对开发者**：在 BYOK 或按量付费场景下，优先选用提供完整 OTel/账单导出的工具；自建时需自行记录 subagent 嵌套成本。

### 趋势 F：**长会话"信号密度"成为新瓶颈**

Claude Code 抱怨注释啰嗦、OpenCode 推 Clean Output 折叠 AI 中间过程、Qwen Code Web Shell 突破"4 页限制"、Gemini CLI 探索 AST 感知读取——**当上下文窗口不再是约束，"如何让人看到有效信号" 成为新的工程问题**。
> **对开发者**：长会话工作流建议预设"输出压缩规则"，并在工具选型时关注其 UI 的可压缩能力（folding、summary、AST-level read）。

---

## 报告

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-10-09*

> **数据说明**：本次数据中 PR 的评论数字段未填充（undefined），因此"热门 Skills 排行"综合采用 **关联 Issue 数、PR 停留时长、最近更新活跃度、话题重要性** 作为替代衡量指标；社区关注度主要锚定 **Issue 评论数**。

---

## 1. 热门 Skills 排行（Top 7）

> 排序逻辑：开放时长 × 关联 Issue 热度 × 话题权重。所有 PR 当前均为 OPEN 状态。

### 🥇 #1298 fix(skill-creator): isolate trigger evals, handle Windows and runtime failures
- **作者**：MartinCajiao｜**创建**：2026-06-10｜**更新**：2026-09-16
- **功能**：修复 skill-creator 的触发评估（trigger eval）逻辑——避免并行 worker 之间的探针竞争、Windows 下 `select()` 失败、未关联工具误停扫描等问题
- **讨论热点**：与 #1352（并行 worker 错配 UUID）、#1383（静默 benchmark 失败）、#556（0% 触发率）共同构成 skill-creator 评估体系"系统性失真"事件，是社区当前关注度最高的底层能力缺陷
- **状态**：OPEN（高优先级等待合并）
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #1961 skill-creator: harden eval viewer（XSS / DNS rebinding / 跨站 POST 加固）
- **作者**：Joncik91｜**创建**：2026-10-03
- **功能**：加固 `generate_review.py` + `viewer.html`，修复 script breakout、DNS rebinding、跨站 POST、HTML 转义逃逸四类安全漏洞
- **讨论热点**：直接对应 Issue #1394（XSS CVE 级问题，4 评论 / 2 👍），与社区头号议题 #492（namespace 信任边界滥用）同属"Skills 安全治理"主线
- **状态**：OPEN（安全类 PR 通常快速合入）
- 🔗 [PR #1961](https://github.com/anthropics/skills/pull/1961)

### 🥉 #1771 feat: add proofcore-contract-auditor（Web3 智能合约审计）
- **作者**：ProofCore-Protocol｜**创建**：2026-09-15
- **功能**：自动静态分析 Solidity/Rust 合约，并通过 ProofCore 的零存储 Merkle 协议将审计证明锚定到 TON 区块链
- **讨论热点**：代表"AI × Web3 可验证化"的跨界尝试；社区对"是否纳入官方"存在范式讨论（外部协议依赖争议）
- **状态**：OPEN
- 🔗 [PR #1771](https://github.com/anthropics/skills/pull/1771)

### 4️⃣ #1703 Add md2video-audio skill（Markdown → MP4 + 拟人配音）
- **作者**：70v-Yoyo｜**创建**：2026-09-01
- **功能**：通过 Marp 将 Markdown 转为演示幻灯片，再合成带拟人音色的 MP4 视频；定位"零成本内容生产"
- **讨论热点**：契合"AI 自动化内容创作"趋势；社区关注输出质量与可商用语音合成来源
- **状态**：OPEN
- 🔗 [PR #1703](https://github.com/anthropics/skills/pull/1703)

### 5️⃣ #525 Add pyxel skill（Python 复古游戏开发）
- **作者**：kitao｜**创建**：2026-03-05（**已开放 7 个月**）
- **功能**：基于 Pyxel 引擎的 Python 复古游戏创建、调试、headless 验证；提供帧级直接检视能力
- **讨论热点**：开放极久仍待合并，反映"娱乐/教育类 Skill"在官方优先级排序中的位置问题
- **状态**：OPEN（长期挂起）
- 🔗 [PR #525](https://github.com/anthropics/skills/pull/525)

### 6️⃣ #822 feat: add AWT（AI Watch Tester，零代码端到端测试）
- **作者**：ksgisang｜**创建**：2026-03-31（**已开放 6 个月**）
- **功能**：为 Claude 提供视觉与浏览器控制能力，自动生成并执行 E2E 测试
- **讨论热点**：与社区议题 #412（agent-governance）、#1385（Reasoning Quality Gate）形成"测试 + 治理"组合需求
- **状态**：OPEN
- 🔗 [PR #822](https://github.com/anthropics/skills/pull/822)

### 7️⃣ #1245 Add notion-spec-to-implementation + quantitative-resume-auditor
- **作者**：mrdesouzaphd-cmyk｜**创建**：2026-06-02
- **功能**：将产品/技术 spec 拆解为可执行 Notion 任务；同时量化审计简历质量
- **讨论热点**：代表"企业工作流 + 个人生产力"双轨 Skill 的典型提案
- **状态**：OPEN
- 🔗 [PR #1245](https://github.com/anthropics/skills/pull/1245)

---

## 2. 社区需求趋势（基于 Issues）

| 优先级 | 需求方向 | 关键 Issue | 热度信号 |
|---|---|---|---|
| 🔴 **极高** | **Skills 安全与信任治理** | [#492](https://github.com/anthropics/skills/issues/492)（43 评论 / 2 👍） | **全站评论数第一**：社区 Skill 假冒 `anthropic/` 命名空间造成权限提升滥用 |
| 🔴 **高** | **企业级 Skill 分发与组织协作** | [#228](https://github.com/anthropics/skills/issues/228)（16 评论 / **8 👍**，最高赞） | 组织内 Skill 共享需要原生支持，避免手动导出分发 |
| 🟠 **中** | **skill-creator 评估体系可信度** | [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍）、[#1352](https://github.com/anthropics/skills/issues/1352)、[#1383](https://github.com/anthropics/skills/issues/1383)、[#1390](https://github.com/anthropics/skills/issues/1390) | 触发率 0%、静默失败、跨 worker 错配——评估基座失真问题群 |
| 🟠 **中** | **新型 Skill 提案范式** | [#412 agent-governance](https://github.com/anthropics/skills/issues/412)、[#1329 compact-memory](https://github.com/anthropics/skills/issues/1329)、[#1385 Reasoning Quality Gate](https://github.com/anthropics/skills/issues/1385) | 治理、符号化记忆、质量门——"Skills 自己也需要 Skills" |
| 🟡 **常规** | **文档/排版质量** | [#514 typography](https://github.com/anthropics/skills/pull/514)、[#486 ODT](https://github.com/anthropics/skills/pull/486)、[#1734 docx orphan](https://github.com/anthropics/skills/pull/1734) | 通用文档生成排版/格式兼容性长期痛点 |
| 🟡 **常规** | **Token 效率与上下文管理** | [#1487 claude-api 注 156k token](https://github.com/anthropics/skills/issues/1487)、[#202 skill-creator 冗长](https://github.com/anthropics/skills/issues/202) | Skill 自身吞上下文成为被反复诟病的反模式 |
| ⚪ **低** | **插件去重 / 用户基础体验** | [#189 重复安装](https://github.com/anthropics/skills/issues/189)（6 评论 / **9 👍**，次高赞）、[#62 Skill 消失](https://github.com/anthropics/skills/issues/62) | 入门级 UX 问题 |

---

## 3. 高潜力待合并 Skills（按落地概率排序）

| 优先级 | PR | 类别 | 判断依据 |
|---|---|---|---|
| 🟢 **极可能近期合并** | [#1961 eval viewer 加固](https://github.com/anthropics/skills/pull/1961) | 安全补丁 | 复现型安全漏洞，安保类 PR 在 Anthropic 流程中优先级最高 |
| 🟢 **极可能近期合并** | [#1742 mcp>=2 兼容](https://github.com/anthropics/skills/pull/1742) | 兼容性修复 | 上游 MCP 库 API 变更必须跟进，避免所有 MCP 相关 Skill 不可用 |
| 🟢 **极可能近期合并** | [#1298 skill-creator 评估修复](https://github.com/anthropics/skills/pull/1298) | 基础设施修复 | 与至少 4 个高热度 Issue 直接对应，是 skill-creator 重构的前置 |
| 🟢 **极可能近期合并** | [#1792 docx LibreOffice 超时报错](https://github.com/anthropics/skills/pull/1792) | 可靠性修复 | 静默失败类问题，修复必要性明确 |
| 🟡 **中等概率** | [#1681 package_skill.py 直接执行](https://github.com/anthropics/skills/pull/1681) | DX 改进 | CLI 路径问题，影响范围相对窄 |
| 🟡 **中等概率** | [#1730 替换 academy 死链](https://github.com/anthropics/skills/pull/1730) | 文档卫生 | 单点维护，合并阻力小 |
| 🟠 **关注但不急迫** | [#1980 webapp-testing shell=True](https://github.com/anthropics/skills/pull/1980) | 安全补丁 | 命令注入（CWE-78），需评估替换方案兼容性 |
| 🟠 **关注但不急迫** | [#1977 algorithmic-art wrapAround](https://github.com/anthropics/skills/pull/1977) | 行为修正 | Bug 修复，issue #1897 已确认 |
| 🔴 **长期挂起** | [#525 Pyxel](https://github.com/anthropics/skills/pull/525)、[#822 AWT](https://github.com/anthropics/skills/pull/822)、[#514 typography](https://github.com/anthropics/skills/pull/514)、[#486 ODT](https://github.com/anthropics/skills/pull/486) | 新增 Skill | 开放 4–7 个月，体现"新 Skill 合入通道拥堵"问题 |

---

## 4. Skills 生态洞察

> **一句话总结**：社区当前最集中的诉求是 **"Skills 的可信边界"**——既要解决**假冒命名空间、eval 静默失败、本地 viewer XSS、shell 注入**等信任与安全问题，也要重新设计 skill-creator 的评估基座，使 Skills 自身的"质量度量"重新可被信赖；**Skill 的功能创新反而不是瓶颈**，治理与可验证性才是。

---

# Claude Code 社区动态日报
**日期：2026-10-09** | 数据来源：GitHub `anthropics/claude-code`

---

## 📌 今日速览

今日 Claude Code 发布两个版本（v2.1.294 / v2.1.295），重点强化了 **Hooks 安全机制**（新增 `onFailure: "block"`）和 **终端协议支持**（OSC 7501）。社区讨论度最高的仍是支持多 Connector 账户的长期功能请求（#27302，已积累 264 条评论、404 个 👍），同时 **Opus 5.5 缺少 Fast Mode 开关、Desktop 端 Mac 输入流重复显示、Claude 在注释中过度啰嗦** 等问题持续引发开发者关注。

---

## 🚀 版本发布

### v2.1.295
- **Hooks 安全升级**：新增 `onFailure: "block"` 行为——若 hook 启动失败、超时或退出码异常，将**阻断动作执行**而非放行，强化安全策略。
- **终端状态协议**：实现 Program Status Protocol (OSC 7501)，兼容终端可显示 Claude Code 的运行状态。

### v2.1.294
- **修复 Hook 规则绕过漏洞**：修复了以指令形式书写的 `prompt` 和 `agent` hook 反被允许通过的问题。
- **优化 Stop / SubagentStop 判定逻辑**：让以"继续执行如果构建失败"这类指令式 hook 的判断更稳健，降低 Claude 误判概率。

---

## 🔥 社区热点 Issues

1. **#27302 [FEATURE] 支持多 Connector 账户** — 264 评论 / 404 👍
   [GitHub](https://github.com/anthropics/claude-code/issues/27302)
   在 claude.ai/code 中支持同一 Connector 配置多个不同账户，是呼声最高的长期 feature request。

2. **#65961 [BUG] Claude 默认输出啰嗦注释** — 41 评论 / 250 👍
   [GitHub](https://github.com/anthropics/claude-code/issues/65961)
   即使开发者明确要求精简，模型仍倾向于生成冗长注释，影响代码可读性。

3. **#95125 [FEATURE] Desktop Enter 键改为插入换行** — 8 评论 / 28 👍
   [GitHub](https://github.com/anthropics/claude-code/issues/95125)
   在桌面端聊天框中支持 Enter 插入换行、Ctrl+Enter 提交，减少误触发送。

4. **#81024 [FEATURE] VS Code 扩展：git-worktree 会话列表** — 8 评论 / 9 👍
   [GitHub](https://github.com/anthropics/claude-code/issues/81024)
   修复扩展硬编码 `includeWorktrees: false`，让 worktree 中的会话也能在会话列表中可见。

5. **#92434 [BUG] 自动压缩基于上一轮 token 数导致溢出** — 6 评论
   [GitHub](https://github.com/anthropics/claude-code/issues/92434)
   macOS 上 auto-compact 误判上下文窗口需求，导致指令文件被重新注入后溢出。

6. **#87628 [BUG] VS Code 切换会话后未发送草稿丢失** — 6 评论
   [GitHub](https://github.com/anthropics/claude-code/issues/87628)
   Windows 上用户在会话间切换时，未提交的输入草稿会被静默丢弃。

7. **#96221 [BUG] Opus 5.5 模型选择器缺少 Fast Mode 开关** — 5 评论 / 6 👍
   [GitHub](https://github.com/anthropics/claude-code/issues/96221)
   模型目录中缺少 Opus 5.5 的 fast_mode 配置，模型能力受限，应为目录补齐。

8. **#79953 [FEATURE] Workflow 内部 agent() 调用受 hooks 管控** — 4 评论
   [GitHub](https://github.com/anthropics/claude-code/issues/79953)
   当前 PreToolUse hook 无法约束 Workflow 内部的 agent() 调用，缺少累计调用预算。

9. **#87874 [FEATURE] Subagent 编排需要并发模型** — 3 评论
   [GitHub](https://github.com/anthropics/claude-code/issues/87874)
   Subagent 缺乏 join / cancel / quiescent stop 等明确的并发语义，且跨版本静默变化。

10. **#100278 [BUG] Max 模式下每 2 分钟弹用量警告** — 3 评论
    [GitHub](https://github.com/anthropics/claude-code/issues/100278)
    Windows 用户开启 Max effort 后频繁弹窗提醒，干扰开发流程。

---

## 🛠️ 重要 PR 进展

1. **#100293 [OPEN] 添加 HIPAA 合规设置示例** — sarahdeaton
   [GitHub](https://github.com/anthropics/claude-code/pull/100293)
   新增 `settings-hipaa.json` / `managed-mcp-hipaa.json` 与对应 README，面向受 HIPAA 约束的医疗组织，限制会话内容外发。

2. **#85716 [CLOSED] fix(hookify): 从祖先 `.claude` 目录加载规则** — alifakbxr
   [GitHub](https://github.com/anthropics/claude-code/pull/85716)
   修复 hookify 插件只读取当前目录导致的安全策略被绕过的隐患。

3. **#84747 [CLOSED] fix(hookify): 规则作用域与安全读取修复** — alifakbxr
   [GitHub](https://github.com/anthropics/claude-code/pull/84747)
   当 `event=None` 时 `load_rules()` 会绕过事件过滤器的问题，以及 `Read`/`Browser` 工具的规则匹配修复。

4. **#84711 [CLOSED] fix(security): 插件脚本的 YAML 注入与符号链接覆盖** — alifakbxr
   [GitHub](https://github.com/anthropics/claude-code/pull/84711)
   修复插件脚本中可能的 YAML 注入以及符号链接凭证被覆盖的风险（修复 #76580）。

5. **#84365 [CLOSED] fix(scripts): thumbs down 防自动关闭** — alifakbxr
   [GitHub](https://github.com/anthropics/claude-code/pull/84365)
   实现 dedupe bot 的承诺：任意用户的 👎 反馈都可阻止 issue 被自动关闭。

6. **#84364 [CLOSED] fix(hookify): 异常时 fail-closed** — alifakbxr
   [GitHub](https://github.com/anthropics/claude-code/pull/84364)
   修复 `ImportError` 等异常导致 hook 返回 0 放行工具的安全漏洞，改为 `permissionDecision: deny`。

7. **#41447 [OPEN] feat: 开源 claude code ✨** — gameroman
   [GitHub](https://github.com/anthropics/claude-code/pull/41447)
   长期讨论的开源请求，引用 #59 / #456 / #2846 / #22002 / #41434 等多个相关 issue。

8. **#100676 [OPEN] Desktop Max effort 警告条无法永久关闭** — EbenTerblanche
   [GitHub](https://github.com/anthropics/claude-code/issues/100676)
   新发布 issue：桌面 Code 标签中关闭黄色警告条后会反复出现。

9. **#100684 [OPEN] Auto mode 误杀 macOS GUI 应用** — chenshu007
   [GitHub](https://github.com/anthropics/claude-code/issues/100684)
   `pkill -f "cat"` 因子串匹配误杀了 `/Applications` 下所有 macOS GUI 应用，存在严重安全风险。

10. **#100492 [OPEN] Desktop Code 标签波斯语 RTL 渲染问题** — namdarim
    [GitHub](https://github.com/anthropics/claude-code/issues/100492)
    权限提示中波斯语顺序反转、ZWNJ/RLM 字符处理异常，桌面端缺少文本方向控制。

---

## 📈 功能需求趋势

综合今日活跃 issue，可提炼出以下社区关注的功能方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **多账户 / 多 Connector 支持** | #27302 | ⭐⭐⭐ |
| **IDE 集成完善（VS Code 扩展）** | #81024, #87628, #94743 | ⭐⭐⭐ |
| **新模型能力暴露（Fast Mode / Opus 5.5）** | #96221 | ⭐⭐ |
| **Hooks 体系增强（Workflow/Agent 内部）** | #79953, #87874 | ⭐⭐ |
| **桌面端交互优化（输入流、键盘、警告）** | #95125, #100278, #100676 | ⭐⭐ |
| **i18n / RTL 渲染** | #100492, #2478 | ⭐ |
| **远程控制 / Computer-use 一致性** | #80806, #95491 | ⭐ |

---

## 💡 开发者关注点

1. **Hooks 是安全第一线**：今日合并的多条 PR 都集中在 hookify 插件的**加载、作用域、异常处理**上，反映社区对 Hooks 安全性的强烈关注；同时 `onFailure: "block"` 表明官方也在收紧 hook 失败时的默认行为。
2. **Desktop 体验亟待打磨**：Max 模式警告条无法关闭、Enter 键误触发送、波斯语 RTL 异常等小问题持续累积，开发者期望桌面端达到 TUI 同样的精细度。
3. **Agent 编排语义缺失**：`agent()` 调用不受 hooks 管控、Subagent 缺乏并发语义等问题，阻碍用户构建复杂 Workflow，是 Skills / CLAUDE.md 体系扩展的瓶颈。
4. **模型目录同步延迟**：Opus 5.5 缺少 Fast Mode 开关暴露出模型上线与目录配置之间的同步问题，开发者希望尽快补齐。
5. **过度注释难以压制**：尽管可通过指令调整，但默认行为与精简期望之间的偏差仍是开发者反复抱怨的痛点。

---

*报告基于 GitHub `anthropics/claude-code` 仓库过去 24 小时更新数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-10-09

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex) ｜ 统计窗口：过去 24 小时

---

## 📌 今日速览

- **v0.162.0 稳定版正式发布**，新增 Git worktree 管理工具与 agent Command Center 任务置顶（`p` 键）能力，同时 0.163.0 双 alpha 版本已开启下一轮迭代。
- **Windows 沙箱连环故障持续高发**，围绕 `node_repl.exe` ACL 处理失败衍生出多条高评论 Issue，已构成当前社区最强烈的痛点共识。
- **PR 端集中打磨"thread 读状态 + TUI 体验"**，从持久化 readState、到 TUI 快捷键与文本选择、再到语音模型扩容，构成今日代码层的主要信号。

---

## 🚀 版本发布

### rust-v0.162.0（稳定版）

- 新增从受信本地项目创建/列出托管 Git worktree 的工具（需开启 worktrees 特性）[#50148](https://github.com/openai/codex/pull/50148)
- agent Command Center 支持用 `p` 钉住任务，并在支持的服务端共享"Pinned"分组 [#51500](https://github.com/openai/codex/pull/51500)
- 改进 TUI 导航与复制能力（详细变更被摘要截断）

预发布通道同步推进：

- **0.163.0-alpha.2** / **0.163.0-alpha.1**：开启下一轮迭代
- **0.162.0-alpha.17.2**：稳定前的最后预发布

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 平台/特性 | 关注度 | 重要性 |
|---|---|---|---|---|
| 1 | [#51590](https://github.com/openai/codex/issues/51590) Windows 沙箱在打开运行中的 `node_repl.exe` 进行 ACL 更新时失败（error 32），导致 Computer Use 与 shell 同时被阻塞 | Win / sandbox / app | 💬37 👍7 | **最高优先级**：影响所有 Windows 上 sandboxed shell 与 Computer Use 用户，与 #52155、#51882、#50915 形成连锁 |
| 2 | [#48938](https://github.com/openai/codex/issues/48938) Windows 更新后渲染器反复崩溃、白屏重载、输入卡顿（26.924.2738.0） | Win / app | 💬24 👍2 | 用户已表达强烈不满（付费 Pro 20x 计划），呼吁官方给出可复现解释 |
| 3 | [#51824](https://github.com/openai/codex/issues/51824) ChatGPT for Windows 在 `windows-updater.node` 中崩溃（`0xc0000005`） | Win / app | 💬19 👍1 | ChatGPT 主进程 30~60 秒内自闭，影响 Windows 端基础可用性 |
| 4 | [#41470](https://github.com/openai/codex/issues/41470) Windows ↔ Android Remote 项目/线程同步不对称，新项目仅在桌面可见，且移动端启动的线程受信任门控阻断 | Win+Android / remote | 💬18 👍4 | 跨设备叙事是 Codex 近期主打能力，本 Issue 直接动摇信任 |
| 5 | [#30385](https://github.com/openai/codex/issues/30385) Codex Desktop 多条本地项目线程在侧边栏/搜索中"消失"（数据仍在磁盘） | Win / app | 💬17 👍1 | 老 Issue 长尾未结，但每日仍收到新报告，说明仍未根治 |
| 6 | [#46114](https://github.com/openai/codex/issues/46114) Windows Desktop 提升沙箱报"requires effective :root read access"，重装/重置均无效 | Win / sandbox | 💬16 👍5 | 与 #51590 互为佐证，企业/付费用户提及每次调用都被拒 |
| 7 | [#47538](https://github.com/openai/codex/issues/47538) 第三方 Responses 提供商流断开恢复后，TUI 出现文本整段重复交错 | TUI/CLI | 💬14 👍0 | 直接影响依赖第三方网关的开发体验，重在协议层健壮性 |
| 8 | [#47577](https://github.com/openai/codex/issues/47577) `@codex review` 自 2026-09-20 起静默忽略 fork 的 PR（仓库内分支 PR 正常） | code-review | 💬11 👍33 | **👍 数 Top 1**：开源贡献者严重依赖 fork 评审通道，沉默退化让社区非常不满 |
| 9 | [#51882](https://github.com/openai/codex/issues/51882) Windows 下"点启动"任务报 `setup refresh had errors`，但本地直连 Codex 聊天正常 | Win / dots | 💬10 👍0 | 与 dot 体验直接绑定，是 Bot/远程控制链路的入口故障 |
| 10 | [#39229](https://github.com/openai/codex/issues/39229) macOS Dark 外观下选中文本对比度不足 | macOS / app | 💬9 👍14 | **macOS 端 👍 数最高**，无障碍/视觉体验问题长期未修 |

> 备注：另有 #47577 的 33 个 👍、#39229 的 14 个 👍 在比例上突出 —— 它们代表了"评论少但社区呼吁强烈"的议题，需要同样关注。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 类型 | 看点 |
|---|---|---|---|
| 1 | [#52350](https://github.com/openai/codex/pull/52350) 在 app server 中暴露**实验性持久化线程读状态** | Feature | `readState` 进入 `thread/read`，`readStates` 进入 `thread/list`，为多端未读对齐打底 |
| 2 | [#52337](https://github.com/openai/codex/pull/52337) 带修订号检查的持久化 thread read state | Feature | 防止过期 ack 清掉后续未读结果，确保元数据重建可幸存 |
| 3 | [#52395](https://github.com/openai/codex/pull/52395) 试验性 app-server thread read-state 更新 | Feature | `thread/readState/update`，需 `initialize.capabilities.experimental` 打开 |
| 4 | [#52384](https://github.com/openai/codex/pull/52384) 线程读状态变更通知 | Notification | 实验性 `thread/readState/changed` 推送，与上面三个 PR 形成"读状态"完整闭环 |
| 5 | [#52363](https://github.com/openai/codex/pull/52363) 扩展 realtime v3 语音 | Feature | 新增 v3 语音列表（v1 + 16 个），放宽可选音色范围 |
| 6 | [#52381](https://github.com/openai/codex/pull/52381) gRPC code mode 会话级路由保留 | Bug fix | 不同主机共享传输时各自保留路由 token，避免后续 RPC 串扰 |
| 7 | [#52302](https://github.com/openai/codex/pull/52302) 为代理沙箱会话添加**凭据脱敏**（默认关闭） | Security | `features.credential_masking`，通过已启用网络代理做凭据中介，保留自定义 provider 与托管配置优先级 |
| 8 | [#52330](https://github.com/openai/codex/pull/52330) 终端超链接 remap 前 clamp 包装源范围 | Bug fix | 修正 wrap 后游标哨兵越界导致 hyperlink 切片 panic |
| 9 | [#52273](https://github.com/openai/codex/pull/52273) TUI 可配置的常驻 leader 快捷键 | Feature | 新增 `tui.keymap.global.leader`（默认 `ctrl-x`）+ 符号化绑定（如 `leader c`），与自定义快捷键兼容 |
| 10 | [#52268](https://github.com/openai/codex/pull/52268) 工具调用元数据中保留大参数 | Bug fix | 移除 8 KiB/调用、32 KiB/输出 的硬限制，巨参 tool call 不再被截断 |

> 其他值得跟进的工程化 PR：#52329（清理每内容来源归属元数据）、#52304（远程控制 RPC 偏好持久化）、#52278（即便 analytics 关闭也保留自定义 OTLP 指标导出器）、#52274（Guardian 审查结构化 tracing）、#52270（TUI footer 支持文本选择）。

---

## 📈 功能需求趋势

从过去 24 小时活跃 Issue 归纳出七大需求方向（按热度）：

1. **Windows 沙箱稳定性（最热）** —— `node_repl.exe` ACL error 32、BitLocker 锁定卷、elevated 沙箱 root 读取权限，构成当下最系统的痛点。
2. **macOS 体验细节** —— Dark 模式选区对比度、SIGTRAP 崩溃、Pet 覆盖窗口多显示器越界、Browser Use 权限残留。
3. **跨设备同步与远程控制** —— Windows/Android 项目/线程同步不一致、SSH bootstrap 配置缺陷。
4. **Code Review 与协作流程** —— `@codex review` 对 fork PR 处理回归，引发开源维护者强烈不满。
5. **TUI 交互增强** —— leader 快捷键、文本选择、终端超链接稳定性。
6. **会话/线程状态治理** —— 多 PR 叠加，将 readState 从"内存协议"推进到"持久化"。
7. **凭据与网络安全** —— 代理下 OAuth 直连绕过代理、凭据脱敏开关化。

---

## 💬 开发者关注点（高频痛点与诉求）

- **"沙箱一开就崩"已成 Windows 标签**：开发者希望官方对 `node_repl.exe` 与 ACL 链路给出明确技术说明与复现指引；多条 Issue 中已经出现"重装/重置/重启均无效"的措辞，暗示用户对支持流程产生疲倦

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-09**

---

## 📌 今日速览

今日社区焦点集中在**安全性修复**与**Agent/Subagent 可靠性**两大方向。过去 24 小时内，仓库无新版本发布，但 PR 列表中大量 `priority/p1` 与 `area/security` 标签合并关闭，表明团队在集中清理一批高危问题（如 MCP OAuth、路径穿越、grep 工具的命令注入、Windows git 参数越权等）。与此同时，多个长期存在的 subagent bug 仍处于 `need-retesting` 状态，社区对 Agent "假成功"（MAX_TURNS 后仍报 GOAL）与 generalist agent 无限挂起的抱怨持续。

---

## 🚀 版本发布

无新版本发布（过去 24 小时）。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 为何值得关注 |
|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 MAX_TURNS 后被误报为 GOAL success | 💬13 👍2 | **P1**：子代理实际已中断，但状态仍显示成功，会误导上层规划逻辑；社区追问这是否是普遍行为 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 无限挂起 | 💬8 👍8 | **P1** 且 👍数最高：每次委派给 generalist 子代理就卡死，影响最基础的"建文件夹"类任务，体感严重 |
| 3 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/映射评估 | 💬7 | 战略性 EPIC：探讨用 AST 工具替代粗粒度读取以减少 token 噪音、节省 turn，影响未来架构 |
| 4 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动使用自定义 skills 与子代理 | 💬7 | 反映 Agent "自我调度"能力不足，需用户频繁显式提示才能命中 skill |
| 5 | [#29639](https://github.com/google-gemini/gemini-cli/issues/29639) Mavlow 扩展无法出现在官方画廊 | 💬5 | 6 天仍未收录，怀疑发现机制存在缺陷，影响第三方生态 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 中的 maxTurns | 💬4 | **P1**：用户在配置里设置的上限完全失效，Agent 会无节制运行 |
| 7 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser Agent 应支持会话接管/锁恢复 | 💬4 | 现有 "fail-fast" 策略在 profile 被占用时直接失败，建议自动接管 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Wayland 下 browser subagent 失败 | 💬4 👍1 | Wayland 用户被排除在外，体现 Linux 桌面协议兼容性短板 |
| 9 | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000) 用原生文件工具做 task tracker | 💬4 | 探索用工具调用替代当前基于 shell 脚本的任务跟踪方案 |
| 10 | [#29627](https://github.com/google-gemini/gemini-cli/issues/29627) grep 工具的命令行参数注入漏洞 | 💬3 | **P2 安全**：以 `-` 开头的 pattern 可被解析为 flag，潜在命令注入风险 |

**补充关注**：[#29620](https://github.com/google-gemini/gemini-cli/issues/29620)（MCP OAuth Dynamic Client Registration 的 `client_id` 不持久化 + RFC 9207 iss 校验过严）、[#29614](https://github.com/google-gemini/gemini-cli/issues/29614)（Windows 下硬编码 `GIT_CONFIG_GLOBAL=NUL` 导致 Git for Windows 失败）也都是高优先级安全/兼容问题。

---

## 🛠 重要 PR 进展

| # | PR | 内容要点 |
|---|---|---|
| 1 | [#29578](https://github.com/google-gemini/gemini-cli/pull/29578) `fix(mcp)` Google 端点请求 offline access 并保留 clientSecret | 解决远程 MCP 服务器（如 Workspace API）首登拿不到 refresh token、后台刷新失败的问题，仍 OPEN 待合入 |
| 2 | [#29488](https://github.com/google-gemini/gemini-cli/pull/29488) `fix(mcp)` 基于 `authorization_response_iss_parameter_supported` 决定是否强制校验 iss | 修复 #29477：自 v0.61.0 起 `/mcp auth` 对不支持 iss 的 AS 直接失败 |
| 3 | [#29490](https://github.com/google-gemini/gemini-cli/pull/29490) `fix(core)` 避免 resume 时重复注入工具响应 | 修复 #29365：用 `-r` 恢复会话时同一 tool 结果被回放两次 |
| 4 | [#29479](https://github.com/google-gemini/gemini-cli/pull/29479) `fix(core)` 将 legacy checkpoint 路径限制在 checkpoints 目录内 | 修复路径穿越：`x/../../secret` 标签可越权删除/读取 `.json` 文件 |
| 5 | [#29480](https://github.com/google-gemini/gemini-cli/pull/29480) `fix(core)` Windows 命令安全校验 git 参数 | 阻断 `git diff --output=<path>` 等写标志绕过权限提示（可被 prompt injection 利用） |
| 6 | [#29481](https://github.com/google-gemini/gemini-cli/pull/29481) `fix(cli)` extension-enablement.json 不可读时不再"全部重启用" | 修复安全级回归：用户主动禁用的扩展会被静默重新启用 |
| 7 | [#29492](https://github.com/google-gemini/gemini-cli/pull/29492) `fix(cli)` sandbox 构建与网络设置避免 shell 插值 | `BUILD_SANDBOX=1` 下路径中的 shell 元字符（如 `;`）不再被执行 |
| 8 | [#29476](https://github.com/google-gemini/gemini-cli/pull/29476) `fix(cli)` IDE 集成下 Enter 键无响应 | 修复 #23297：IDE companion 启用时工具确认提示卡顿 |
| 9 | [#29489](https://github.com/google-gemini/gemini-cli/pull/29489) `fix(core)` 阻止 Flash-Lite 模型继承 ThinkingLevel.HIGH | 新增 `chat-base-3-flash-lite` 基础配置，强制 `thinkingBudget=0` |
| 10 | [#29491](https://github.com/google-gemini/gemini-cli/pull/29491) `fix(ci)` patch 发布前显式校验写权限 | 修复 CI 漏洞：任何 GitHub 用户对已合并 PR 发 `/patch` 都可触发 dispatch |

**值得关注的性能与体验改进（OPEN）：**
- [#29582](https://github.com/google-gemini/gemini-cli/pull/29582) `perf(core)`：层级化目录状态记忆 + 通配符子树剪枝 + symlink 缓存，解决大仓库"秒级阻塞"
- [#29590](https://github.com/google-gemini/gemini-cli/pull/29590) `fix(core)`：保留 `functionResponse.parts`，修复工具返回图片丢失
- [#29596](https://github.com/google-gemini/gemini-cli/pull/29596) `feat(cli)`：ACP 权限请求中携带 MCP server 与 tool 名称，便于客户端做来源判断
- [#29683](https://github.com/google-gemini/gemini-cli/pull/29683) `fix(a2a-server)`：顺序批次中拒绝单个工具调用不再影响其他
- [#29678](https://github.com/google-gemini/gemini-cli/pull/29678) `fix(cli)`：先加载 `.env` 再解析 settings 中的占位符，修复加载顺序竞态

---

## 📈 功能需求趋势

从今日活跃的 Issues 中可提炼出五大方向：

1. **Subagent 体系成熟化**（占比最高）— 包括 Local Subagent Sprint 1（#20195）、子代理轨迹可见化（#22598）、`/chat share` 集成、bug report 包含子代理上下文（#21763）。
2. **AST/语义感知代码理解** — #22745、#22746 推动以 tilth/glyph 类工具替代朴素 read，提高精度与 token 利用率。
3. **浏览器代理增强** — settings.json 生效（#22267）、自动接管/锁恢复（#22232）、Wayland 兼容（#21983），整体在朝"无感可用"演进。
4. **MCP/OAuth 安全合规** — Dynamic Client Registration 持久化（#29620、#29488）、Google 端点 offline access（#29578）、ACP 权限上下文增强（#29596）。
5. **IDE/终端体验** — `@` 文件路径自动补全（#29453，类似 aider）、终端 resize 高性能无闪烁（#21924）、会话恢复时不重复注入（#29490）。

---

## 💡 开发者关注点

| 类别 | 核心痛点 | 代表 Issue |
|---|---|---|
| **Agent 可信度** | 任务"假成功"或无限挂起，难以判断是否完成 | #22323、#21409、#22465 |
| **跨平台兼容** | Windows/macOS/Linux 行为不一致，Wayland 用户被排除 | #29614、#21983、#29686 |
| **扩展生态** | 扩展发现机制不透明、配置不可读时被默认全开 | #29639、#29481 |
| **安全漏洞频出** | 短期内集中暴露命令注入、路径穿越、CI 越权、OAuth 客户端持久化等 | #29627、#29479、#29480、#29491、#29620 |
| **资源消耗** | 单次任务触发 7GB+ 内存，长上下文/大 PDF 处理不稳 | #29591 |
| **Agent 自描述能力** | Agent 对自己的 flags/hotkeys 认知不准，做不了"自指引" | #21432 |

> **综合判断**：本期社区情绪偏向"警觉+期待"。一方面，仓库进入密集的安全与回归清理期，开发者需尽快升级以规避 OAuth、git 参数、checkpoint 路径穿越等风险；另一方面，subagent 与 browser agent 的可用性问题仍是产品体验的最大短板，官方对 #21409（generalist 挂起）虽已合并相关 PR 但仍未给出明确复现指引，建议关注后续 `need-retesting` 流转。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-09**

---

## 1. 今日速览

过去 24 小时内 Copilot CLI 集中发布了 **v1.0.95 预发布系列**（含 95-0/1/2 三个 pre-release）与 **v1.0.94 正式版**，重点围绕 MCP 配置恢复、沙箱凭据补全、Entra 原生认证及 `--context` 行为修正。社区方面，开发者最关注的三大议题分别是 **BYOK/本地模型切换**、**MCP 服务器启动与管理** 与 **沙箱安全模型**，同时 macOS 更新后 `.mcp-writer.binding` 设备 ID 过期、Windows 剪贴板失效等平台级 Bug 集中浮现。

---

## 2. 版本发布

### 🚀 v1.0.95-2（预发布）
**Fixed**
- `copilot config` 在沙箱凭据 `injectHosts` 配置项上现已在 Bash / Zsh / Fish 中提供键补全。

### 🚀 v1.0.95-1（预发布）
**Added**
- 在 macOS 上优先使用 **Microsoft Entra broker** 进行原生认证，无 broker 时自动回退到浏览器流程。

### 🚀 v1.0.95-0（预发布）
**Improved**
- 托管插件的安装失败重试从“每条消息失败即重试”改为“每小时一次或在策略变更后重试”，降低抖动。

**Fixed**
- `--context` 现在能同时作用于新建与恢复的 ACP 会话，不再静默回退到默认或上次保存的 context tier。

### 📦 v1.0.94（正式版，2026-10-08）
- 模型选择器与 `--model` 补全新增 **Claude Haiku 5.5**。
- `copilot mcp add` 在 MCP 配置初始化被中断后能干净恢复（v1.0.94-5 修复）。
- MCP 启用/禁用现在可在服务器发现之前生效，无须先拉起 MCP（v1.0.94-4 修复）。
- 受助权限（Assisted Permissions）直接将可见 shell 代码送往权限判定器，无需冗余的手动审批（v1.0.94-4 修复）。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 关注度 | 链接 |
|---|------|------|--------|------|
| **#892** | **为 Copilot CLI 增加沙箱模式以限制文件访问** | ✅ CLOSED | 💬12 / 👍 **49** | [#892](https://github.com/github/copilot-cli/issues/892) |
| **#3709** | **会话内 `/model` 切换支持 BYOK/本地等多种 Provider** | 🟢 OPEN | 💬9 / 👍 **34** | [#3709](https://github.com/github/copilot-cli/issues/3709) |
| **#770** | **Claude Opus 4.5 处理 Prompt 时卡死，重复扣除 premium 请求** | ✅ CLOSED | 💬16 / 👍 3 | [#770](https://github.com/github/copilot-cli/issues/770) |
| **#4998** | **macOS 更新/重启后 `.mcp-writer.binding` 残留过期 device ID 导致 CLI 不可用** | ✅ CLOSED | 💬10 / 👍 11 | [#4998](https://github.com/github/copilot-cli/issues/4998) |
| **#2901** | **MCP 服务器在首次工具调用时按需懒加载** | 🟢 OPEN | 💬3 / 👍 **17** | [#2901](https://github.com/github/copilot-cli/issues/2901) |
| **#1941** | **突发的 `CAPIError: 400 The requested model is not supported`** | ✅ CLOSED | 💬13 / 👍 0 | [#1941](https://github.com/github/copilot-cli/issues/1941) |
| **#4224** | **OTel 子 agent span 缺少计费属性（nano_aiu / cost），外部成本核算低估** | ✅ CLOSED | 💬6 / 👍 1 | [#4224](https://github.com/github/copilot-cli/issues/4224) |
| **#4802** | **PRU 配额疑似因开启 Assisted Permissions 被清零** | 🟢 OPEN | 💬3 / 👍 0 | [#4802](https://github.com/github/copilot-cli/issues/4802) |
| **#4275** | **ACP 暴露 `contextTier` 会话配置项（与交互式 `/model` 平权）** | 🟢 OPEN | 💬4 / 👍 3 | [#4275](https://github.com/github/copilot-cli/issues/4275) |
| **#3978** | **切到 BYOK 后 CLI 又自动切回原模型** | 🟢 OPEN | 💬2 / 👍 5 | [#3978](https://github.com/github/copilot-cli/issues/3978) |

### 为什么这 10 条值得关注？
- **#892**：👍 49 是本周点赞最高的功能请求，社区对沙箱约束的诉求非常强烈，已被纳入关闭清单。
- **#3709 / #3978**：BYOK 与多模型切换是当前最高频痛点，模型灵活性 = 用户控制权。
- **#4998**：macOS 安全更新导致 CLI 完全不可用，影响面广且复现条件确定。
- **#2901**：MCP 服务随数量增多拉爆启动时间，懒加载是结构性优化。
- **#4802**：Assisted Permissions 计费争议关乎用户信任，需要透明账单闭环。
- 其余条目分别覆盖 OTel 计费可观测性、ACP 协议平权等深度平台能力。

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新。** 仓库当前处于发版冷却期，上游发力点在版本压缩包的发布与 Issue 流转。本期日报跳过该章节。

---

## 5. 功能需求趋势

从 50 条活跃 Issue 提炼出社区最强烈的方向：

| 趋势 | 代表 Issue | 关键词 |
|------|-----------|--------|
| 🛡 **沙箱与权限治理** | #892、#4844、#4909 | 文件访问白名单、fail-closed 旁路、sandbox 内 EPERM |
| 🧩 **MCP 生态成熟度** | #4998、#2901、#3024、#5091 | 启动时延、连接恢复、上下文撑爆、死循环重连 |
| 🔀 **多模型 / BYOK 灵活性** | #3709、#3978、#1988、#4270 | 模型切换、Premium 预算、本地 provider 列举 |
| 📡 **ACP 协议平权** | #4275、#5053 | contextTier、session-store.db 回写 |
| 📊 **可观测性与计费透明** | #4224、#4858 | OTel 计费属性、subagent span 父子链 |
| 🪟 **跨平台稳定性** | #3981、#4977、#1436 | Windows 剪贴板、ARM 16KB 页、PowerShell profile |
| 🧱 **IDE / 工作区发现** | #4909、#3741 | /ide 在沙箱下识别、`/skills` UI 鼠标选择冲突 |
| 🤖 **Agent 协同** | #1774 | 自定义 agent 作为前缀 slash 命令（ACP 兼容） |

> 总结：MCP、沙箱、BYOK 三条主线构成了 10 月初 Copilot CLI 社区最核心的关注面。

---

## 6. 开发者关注点与高频痛点

1. **MCP 启动性能与连接可靠性**：MCP server 数量上升导致 CLI 启动期被拖慢、连接频繁中断、自动重连陷入死循环（#2901、#4998、#5091、#3024）。
2. **BYOK / 模型灵活性不足**：用户在会话中难以切换到本地或自托管模型，`COPILOT_MODEL` 钉死后 `/model` 选择器也无法列出本地 provider（#3709、#3978、#1988）。
3. **沙箱与权限判定不一致**：启用 Copilot CLI 自带 sandbox 后 `/ide` 找不到工作区、`--yolo` 被预认证 fail-closed 机制吞掉、Assisted Permissions 可能误扣 PRU（#4909、#4844、#4802）。
4. **平台与硬件兼容性**：Windows 进程内剪贴板失效、Linux ARM64 16KB 页 jemalloc abort、PowerShell 未加载 profile（#3981、#4977、#1436）。
5. **计费透明度**：subagent 调用在 OTel 中不带计费属性、Premium 请求因模型卡死被重复扣除、与 Copilot-Session trailer 的 session id 语义错配（#4224、#770、#4130）。
6. **ACP 协议平权缺失**：交互式 CLI 支持的能力，ACP 客户端要么缺、要么只能 spawn 时设置（#4275、#5053、#1774）。
7. **UX 细节摩擦**：`/skills` UI 拦截鼠标选中无法复制、boot 阶段同步等待 mcps/plugins 加载、`/restart --name` 失败、`copilot-instructions.md` 提示含糊（#3741、#5090、#3332、#4475）。

---

**日报小结**：Copilot CLI 当前正同时推进 **MCP 稳定性兜底**、**沙箱/权限治理模型** 与 **多模型体验** 三个方向；开发者最关心的不是“能不能跑”，而是“跑起来之后账单、上下文、IDE 三者之间能不能对齐”。下一阶段值得关注的里程碑是 v1.0.95 正式版合入以及 #892 的沙箱模式落地节奏。

*数据来源：github.com/github/copilot-cli · 抓取窗口：2026-10-08 ~ 2026-10-09*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-09

## 📌 今日速览

今天 OpenCode 仓库进入了一轮密集的 issue 清理与稳定性扫尾阶段：过去 24 小时内大量 issue 被批量关闭（多数标 `pending close, triaging`），同时一批新 PR 集中落地，覆盖桌面端冷启动优化、TUI 渲染、网络层鲁棒性等关键路径。值得注意的是，维护者 `Hona` 与 `rekram1-node` 持续高产，前者重点在桌面/TUI 工程改进，后者聚焦 AI provider 与核心能力扩展。

---

## 🚀 版本发布

过去 24 小时内无新 Release。社区当前主要在主干上迭代 v2 系列，尚未产出新的 tag。

---

## 🔥 社区热点 Issues

以下为值得特别关注的 10 条 issue（按近期讨论热度筛选）：

1. **[#53841](https://github.com/anomalyco/opencode/issues/53841)** — 多模型/Provider 间歇性报 `Endpoint is unavailable`（💬7）  
   范围不限于单一模型，覆盖 Muse 等多条 provider 链路，是近期的上游连通性核心痛点，已关闭。

2. **[#38932](https://github.com/anomalyco/opencode/issues/38932)** — Desktop 应用粘贴超长文本（5000+ 字符）后完全卡死（💬6）  
   影响所有重度使用粘贴工作流的用户，归因于 prompt box 的同步处理。已关闭。

3. **[#38081](https://github.com/anomalyco/opencode/issues/38081)** — Todo 侧边栏对接 Linear 的项目级集成（💬6）  
   体现社区对"工作流工具链互通"的需求，希望把会话级 todo 提升为跨项目的工程任务面板。

4. **[#39655](https://github.com/anomalyco/opencode/issues/39655)** — OpenCode Web 显示"No folders found"但后端 API 正常返回（💬6）  
   典型的 UI / API 数据契约不一致问题，影响 Web 模式可用性。

5. **[#41102](https://github.com/anomalyco/opencode/issues/41102)** — 使用量统计异常显示 >100% 且无法 compact（💬5，1.18.7）  
   多用户反馈的关键计费/用量展示 BUG。

6. **[#53426](https://github.com/anomalyco/opencode/issues/53426)** — Kimi K3 经 NVIDIA NIM 后端思考卡在 `!!!!!!!`（💬4，🟢 OPEN）  
   代表新模型/新推理链路接入时的鲁棒性问题，删除缓存也无法解决，是当前少数仍 OPEN 的高热度 issue。

7. **[#53840](https://github.com/anomalyco/opencode/issues/53840)** — Anthropic Messages 协议下注入 `openrouter:tool_search` 导致 websearch 失败（💬4）  
   反映协议适配层在不同 provider 上的工具回放兼容性问题。

8. **[#37003](https://github.com/anomalyco/opencode/issues/37003)** — Clean Output Mode：默认折叠 AI 中间过程（💬4，👍3）  
   本批中互动指标最高的 feature 请求，反映社区对"减少噪音、突出最终结果"的 UI 期待。

9. **[#51828](https://github.com/anomalyco/opencode/issues/51828)** — Location activity 失效回收 SIGTERMs 活跃后台 shell（💬3，🟢 OPEN）  
   描述了 v2 服务端 location 失效机制误杀 background shell 的链路，影响长任务可靠性。

10. **[#41030](https://github.com/anomalyco/opencode/issues/41030)** — `/skills` 列出已删除 / 被权限禁用的技能（💬3，👍2）  
    是 skills 系统设计一致性的代表问题，已被多人 👍 但仍待 root 修复。

---

## 🛠️ 重要 PR 进展

以下为 10 条值得关注的近期 PR：

1. **[#54060](https://github.com/anomalyco/opencode/pull/54060)** — `fix(desktop): restore fast cold dev startup`  
   `Hona` 把桌面端从主屏可用的冷启动时间从 **44.8s 中位数** 降至 **9.7s**，窗口可见从 36.2s 降到 3.3s，对 devex 改善非常显著。

2. **[#54058](https://github.com/anomalyco/opencode/pull/54058)** — `feat(ai): add Vertex Mistral route`  
   新增 Google Vertex 上的 Mistral 模型路由，关闭 [#49741](https://github.com/anomalyco/opencode/issues/49741)，补齐多供应商矩阵。

3. **[#53876](https://github.com/anomalyco/opencode/pull/53876)** — `feat(core): continue responses after output token limits`  
   当 `stop_reason=length` 且本轮无工具结果时自动续写，避免模型因输出截断而"道歉+重复"，对长上下文工作流关键。

4. **[#53861](https://github.com/anomalyco/opencode/pull/53861)** — `feat(browser): rebuild agent browser tools around offscreen tabs, locators, and real waits`  
   基于真实使用数据（96 个会话、29% 子调用失败）的浏览器工具重写：修 hidden tab 截图、screenshot 57% 失败等核心问题。

5. **[#53934](https://github.com/anomalyco/opencode/pull/53934)** — `fix(tui): truthful clipboard copy with single-path routing`  
   修复 TUI 选择文本后虚假提示"Copied to clipboard"的 UX 陷阱（关闭 [#4283](https://github.com/anomalyco/opencode/issues/4283)）。

6. **[#54054](https://github.com/anomalyco/opencode/pull/54054)** — `fix(tui): summarize multiple connections as a count`  
   `/connect integration list` 把多条同厂商连接折叠为"3 connections"，避免侧栏标签挤压；同 PR 也对齐了 Bedrock picker 文案。

7. **[#53826](https://github.com/anomalyco/opencode/pull/53826)** — `fix: surface session execution errors in desktop and TUI timelines`  
   把会话内未捕获的执行错误显式渲染到时间线，附带前后对比截图，显著改善调试可见性。

8. **[#53796](https://github.com/anomalyco/opencode/pull/53796)** — `fix(plugin): resolve local package manifest entrypoints`  
   修复 plugin 系统读取本地 npm 包 manifest 时无法定位入口的问题（[#52300](https://github.com/anomalyco/opencode/issues/52300)）。

9. **[#50644](https://github.com/anomalyco/opencode/pull/50644)** — `feat(plugin): expose session context to shell preparation hooks`  
   给 plugin 的 shell 准备阶段暴露 validated session ID 与 AbortSignal，是可观测性与安全的双重提升。

10. **[#53711](https://github.com/anomalyco/opencode/pull/53711)** — `fix(tui): preserve grapheme clusters in locale truncation`（关闭 [#50003](https://github.com/anomalyco/opencode/issues/50003)）  
    用 grapheme-aware 切片替换 `str.slice`，解决 CJK/emoji 在侧栏截断时被"切开"的问题。

---

## 📈 功能需求趋势

从过去 24 小时被更新的 issue / PR 中可以归纳出几条显著主线：

| 方向 | 代表性 Issue / PR | 社区诉求 |
|------|------------------|----------|
| **多 Provider / 模型协议适配** | [#53841](https://github.com/anomalyco/opencode/issues/53841), [#53840](https://github.com/anomalyco/opencode/issues/53840), [#54058](https://github.com/anomalyco/opencode/pull/54058), [#53876](https://github.com/anomalyco/opencode/pull/53876) | 更稳定的多供应商支持（Anthropic / OpenRouter / Vertex / NVIDIA NIM / Mistral） |
| **Skills / Agent 定义治理** | [#41030](https://github.com/anomalyco/opencode/issues/41030), [#41288](https://github.com/anomalyco/opencode/issues/41288), [#41351](https://github.com/anomalyco/opencode/issues/41351) | 失效技能同步、权限模型一致、定义漂移防护 |
| **桌面 / TUI 可用性** | [#53469](https://github.com/anomalyco/opencode/issues/53469), [#38932](https://github.com/anomalyco/opencode/issues/38932), [#37876](https://github.com/anomalyco/opencode/issues/37876), [#54060](https://github.com/anomalyco/opencode/pull/54060), [#53934](https://github.com/anomalyco/opencode/pull/53934) | 启动性能、崩溃可见性、布局与小屏适配 |
| **长会话体验** | [#40826](https://github.com/anomalyco/opencode/issues/40826) 导航大纲, [#37003](https://github.com/anomalyco/opencode/issues/37003) Clean Output, [#39772](https://github.com/anomalyco/opencode/issues/39772) 调试循环检测 | 在长 chat/调试中获得更高的信号密度与循环防护 |
| **工作流集成** | [#38081](https://github.com/anomalyco/opencode/issues/38081) Linear, [#39163](https://github.com/anomalyco/opencode/issues/39163) GitHub Action 固定, [#41293](https://github.com/anomalyco/opencode/issues/41293) TUI 用量显示 | 与外部工程工具的连接 + 可复现 CI |
| **Agent 浏览器能力** | [#53861](https://github.com/anomalyco/opencode/pull/53861) | 让浏览器子工具真正能在隐藏 / 离屏场景下工作 |

---

## 🧭 开发者关注点（高频痛点）

综合过去 24 小时被讨论与被修复的条目，开发者社区当前最一致的反馈集中在以下几点：

1. **桌面端稳定性与可观测性**：Windows 下静默退出（[#53469](https://github.com/anomalyco/opencode/issues/53469)）、后台服务每 ~70s 重启导致 turn 中断（[#53849](https://github.com/anomalyco/opencode/issues/53849)）、键盘粘贴大文本直接挂起（[#38932](https://github.com/anomalyco/opencode/issues/38932)）——这些都迫使开发者缺乏任何线上排查信号，是当前 desktop 的首要痛点。

2. **Provider 适配层一致性**：多个模型在不同路由上出现 finish_reason 缺失、tool 不可回放、协议不匹配的问题（[#40420](https://github.com/anomalyco/opencode/issues/40420), [#41296](https://github.com/anomalyco/opencode/issues/41296), [#53840](https://github.com/anomalyco/opencode/issues/53840)）。开发者希望 v2 网关能为各 provider 提供统一的"能用 / 不能用"语义边界。

3. **Skills 系统的高保真要求**：`/skills` 既要成为模型可见清单，又要做权限和人类选择器的统一来源，当前在删除/禁用一致化上存在 bug（[#41030](https://github.com/anomalyco/opencode/issues/41030), [#41288](https://github.com/anomalyco/opencode/issues/41288)）。

4. **TUI 的国际化与小屏友好**：UTF-16 / grapheme 切片、窄屏布局、QR 配对地址等细节（[#53711](https://github.com/anomalyco/opencode/pull/53711), [#37876](https://github.com/anomalyco/opencode/issues/37876), [#54051](https://github.com/anomalyco/opencode/pull/54051)），都是面向真实部署场景的"最后一公里"打磨。

5. **长会话的信号密度**：希望默认折叠 AI 中间过程（[#37003](https://github.com/anomalyco/opencode/issues/37003)）、增加会话大纲导航（[#40826](https://github.com/anomalyco/opencode/issues/40826)）、检测调试假设循环（[#39772](https://github.com/anomalyco/opencode/issues/39772)）。这是与"AI 工作量越来越大"直接相关的开发者诉求。

6. **资源可见性与计费信任**：用量 >100% 不收敛（[#41102](https://github.com/anomalyco/opencode/issues/41102)）、TUI 看不到用量（[#41293](https://github.com/anomalyco/opencode/issues/41293)）。在按量付费的 Go/zen 计划下，这种可见性缺失直接影响开发者信任。

---

> 总结：今天的 OpenCode 处于"v2 扫尾 + 多 Provider 扩展"的并行节奏，工程维护者把精力放在桌面冷启动、TUI 真实可用性与协议层兜底，而社区需求侧明显朝"工作流集成 + 长时间任务可靠性"迁移。后续值得密切跟踪 #53426（Kimi K3 NIM 链路）与 #51828（location 失效回收）这两条仍处于 OPEN 状态的高热度 issue。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-09

## 📌 今日速览

今日社区活动以 **修复与扩展 API 增强** 为主线：无新版本发布，但 Issues 与 PRs 高频集中在 **OpenRouter 配额/计费精度**、**Windows/mintty 终端输入泄漏**、**MCP/扩展 API 一致性** 三大方向。值得关注的是 `agent_settled` 阶段扩展继续控制会话（#10664）已获官方接口回复，开发者在扩展钩子方面的诉求正逐步落地。

---

## 🚀 版本发布

过去 24 小时无新 Release。最新稳定版仍为 **v1.0.4 / v1.1.0**（基于 SDK 1.1.0 引用频次推断）。

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|---------|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **ESC 中断思考后偶发卡在 "Working..."** | 影响日常使用，自 v0.84.0 起持续一个月，多平台复现 | 💬 26 · 👍 3（已 CLOSED） |
| [#9773](https://github.com/earendil-works/pi/issues/9773) | **`before_provider_request` 不为 compaction/branch-summary 请求触发** | 文档与实现不一致，扩展开发者无法在压缩请求中改写 payload | 💬 11（OPEN） |
| [#10497](https://github.com/earendil-works/pi/issues/10497) | **OpenRouter 400：超出最大上下文长度** | 扩展注入文件内容时偶发，反映扩展与上下文窗口边界的协同缺陷 | 💬 10（CLOSED） |
| [#9335](https://github.com/earendil-works/pi/issues/9335) | **openai-responses 支持 `configuration_update` 缓存保留型推理切换（GPT-6）** | 涉及 prompt-cache 关键路径，节省成本与延迟 | 💬 10 · 👍 8（CLOSED） |
| [#10605](https://github.com/earendil-works/pi/issues/10605) | **ChatGPT/OpenAI OAuth 403（subscription_sharing_user_not_eligible）** | Plus 订阅用户登录失败，影响认证主流程 | 💬 8（OPEN） |
| [#10267](https://github.com/earendil-works/pi/issues/10267) | **`before_agent_start` 注入的 systemPrompt 在无 user prompt 的运行中被丢弃，导致重复计费** | 计费正确性 + 扩展契约双重问题 | 💬 8 · 👍 2（OPEN） |
| [#4748](https://github.com/earendil-works/pi/issues/4748) | **`pi-tui` getKeybindings() 单例跨 Realm 破坏扩展的 keyText 导入** | 影响所有 `pi-coding-agent` 扩展生态 | 💬 7 · 👍 2（OPEN，长期未关） |
| [#6817](https://github.com/earendil-works/pi/issues/6817) | **Windows 下 `find src/**/*.ts` 返回空结果** | Windows 用户基础体验缺陷 | 💬 6（CLOSED） |
| [#10645](https://github.com/earendil-works/pi/issues/10645) | **`resizeImage` 在 Bun 编译可执行文件中解析为 null** | 自 0.87.x 起所有图片附件丢失，影响 RPC 嵌入器 | 💬 5（OPEN，in-progress） |
| [#10657](https://github.com/earendil-works/pi/issues/10657) | **TUI：终端回复碎片（如 DA1 被拆分）泄漏到编辑器输入** | 终端交互可靠性，嵌入式场景常见 | 💬 4（OPEN） |

---

## 🛠 重要 PR 进展

| PR | 内容 | 影响 |
|----|------|------|
| [#10703](https://github.com/earendil-works/pi/pull/10703) | **feat(durable): 允许扩展注解被中止的工具结果** | 让 `afterTool` 之外的扩展能修改 abort 行为，扩展 API 增强 |
| [#9461](https://github.com/earendil-works/pi/pull/9461) | **fix(ai): 延迟到读取时才解析 stream tool 参数** | 减少大流量下 JSON 重解析开销，作者自承"不确定是否值得"，欢迎评审 |
| [#9501](https://github.com/earendil-works/pi/pull/9501) | **fix(coding-agent): 从安装目录解析 Windows shell** | 统一并文档化 Windows shell 查找逻辑 |
| [#9504](https://github.com/earendil-works/pi/pull/9504) | **fix(coding-agent): 接受 Windows Store 的 shell 别名** | `existsSync` 在 Store 别名上 EACCES 导致拒绝运行的修复 |
| [#10521](https://github.com/earendil-works/pi/pull/10521) | **fix(ai): 为 NVIDIA NIM 模型内联 `$ref` tool schema** | 修复 `nemotron` / `qwen3.8-flash-next` 工具调用校验失败 |
| [#10698](https://github.com/earendil-works/pi/pull/10698) | **fix(coding-agent): 在 `mcp.json` 的 `oauth.clientId` 中展开 env 与命令** | 修复 [#10613](https://github.com/earendil-works/pi/issues/10613)，与 `clientSecret` 对齐 |
| [#10694](https://github.com/earendil-works/pi/pull/10694) | **fix(ai): 在 slow_down 后调整 OAuth device 轮询间隔** | WSL/Ubuntu 时钟偏快导致 COPILOT 永不过期，作者吐槽"层层问题" |
| [#10672](https://github.com/earendil-works/pi/pull/10672) | **feat(ai,coding-agent): 仅列出当前 OpenRouter key 可用的模型** | 解决 key 守卫差异导致的不可用模型暴露 |
| [#10286](https://github.com/earendil-works/pi/pull/10286) | **fix(ai): 使用 OpenRouter 上报的真实账单金额** | 计费精度提升，目录价与路由后实际价格不一致问题 |
| [#8112](https://github.com/earendil-works/pi/pull/8112) | **fix(coding-agent): jiti 导入前 realpath 扩展入口** | pnpm 符号链接导致 jiti 解析失败的长期问题 [#8092](https://github.com/earendil-works/pi/issues/8092) |

---

## 📈 功能需求趋势

1. **扩展 API 完善化（最高频）**  
   渲染钩子（thinking 块可见性 [#10692](https://github.com/earendil-works/pi/issues/10692)、消息/工具渲染 [#10701](https://github.com/earendil-works/pi/issues/10701)）、会话保活（`pi.holdBusy()` [#10664](https://github.com/earendil-works/pi/issues/10664)）、abort 注解（PR #10703）等诉求集中爆发，开发者需要更细粒度控制 TUI 与生命周期。

2. **Windows 兼容性持续修复**  
   shell 解析（#9501/#9504）、mintty OSC 4 泄漏（#10362）、`resizeImage` 编译失败（#10645），三大平台痛点今日均有进展。

3. **多模型/多 Provider 适配**  
   NVIDIA NIM `$ref` schema（#10521）、OpenRouter 模型过滤（#10672、#10569）、OpenRouter 真实计费（#10286）、Gemini `thoughtSignature`（#9444）、GPT-6 `configuration_update`（#9335）、llama.cpp 分级推理（#10702）。

4. **OAuth 与认证稳健性**  
   ChatGPT 订阅共享 403（#10605）、COPILOT 轮询节奏（PR #10694）、`pi auth --continue` 通用 handoff 入口（PR #10663）。

5. **MCP 生态治理**  
   env 变量展开顺序（#10654）、`client_secret_basic` RFC 6749 编码（PR #10690）、manifest 边界过滤（PR #10688）。

---

## 🧑‍💻 开发者关注点与痛点

- **会话生命周期语义不清**：`waitForIdle()` / `agent_settled` / `session.abort()` 三者与延迟 continuation 之间的协调被多次报告（[#10704](https://github.com/earendil-works/pi/issues/10704)、[#10705](https://github.com/earendil-works/pi/issues/10705)），表明 SDK 1.1.0 状态机存在边界 case。
- **工具 schema 静默丢失**：codemode 生成的工具声明丢失 `minimum/maximum/default`（[#10707](https://github.com/earendil-works/pi/issues/10707)），模型难以正确推理参数范围。
- **压缩成本与上下文失控**：compaction 文件列表无界增长（[#9945](https://github.com/earendil-works/pi/issues/9945)），`before_agent_start` 注入的 prompt 在多次压缩后被重复计费（#10267）。
- **OpenRouter 上下文边界**：注入扩展内容 + 用户输入总和超 1M tokens 时无前置校验，直接 400（#10497）。
- **TUI 终端污染**：DA1、OSC 4、split read 等终端回复在慢速/嵌入式 PTY 下被当作用户输入（#10657、#10362）。
- **更新提示不诚实**：`pi update --extensions` 对 pinned 静默跳过却显示成功（[#10132](https://github.com/earendil-works/pi/issues/10132)），用户难以及时感知扩展陈旧。
- **平台分发**：npm 12 `pack --json` 输出结构变更（PR #10680）、Nix 打包重构（PR #10528）反映出发行链对生态版本的强依赖。

---

*数据来源：github.com/earendil-works/pi | 统计窗口：2026-10-08 ~ 2026-10-09*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：** 2026-10-09
**数据范围：** 过去 24 小时 GitHub 更新（Issues 50 条、PR 50 条，无新 Release）

---

## 1. 今日速览

今日 Qwen Code 社区主线依然是 **Managed Agent 架构演进**（Stage D 收尾与 H4b 子 Session 运行时），同时 **Web Shell、跨平台兼容性与多 Agent 会话** 出现密集协同更新。**两条发布流水线** 在夜间失败（v0.25.1-preview.1、v0.25.0-nightly），CI 也在 E2E 与单测上出现批量回退，autofix 机器人已自动接手当日缺陷。

---

## 2. 版本发布

⚠️ **今日无成功 Release。** 两条流水线失败，bot 自动开 issue 跟踪：

| 流水线 | Issue | 失败环节 |
|---|---|---|
| v0.25.1-preview.1 | [#13696](https://github.com/QwenLM/qwen-code/issues/13696) | integration_none |
| v0.25.0-nightly.20261008 | [#13702](https://github.com/QwenLM/qwen-code/issues/13702) | integration_none |

E2E 也集中出现回归：[#13687](https://github.com/QwenLM/qwen-code/issues/13687)（interactive/external-context-mem0-write）、[#12714](https://github.com/QwenLM/qwen-code/issues/12714)（src/llm.test.tsx，145 个失败用例），均已由 dev-bot 进入 autofix 流程。

---

## 3. 社区热点 Issues（Top 10）

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构与分阶段交付（50 评论）**
   当之无愧的"头牌"提案，定义 TypeScript agent loop 与模型推理解耦的 Managed Agent 顶层架构，引入 Sessions 的持久化所有权、Workspace 绑定与可恢复工具执行。**全 50 条评论** 来自 doudouOUC 与 wenshao，Stage D 已陆续落地，本贴目前处于 in-progress，需在 ready-for-agent 与 daemon 端进一步推进。

2. **[#12867](https://github.com/QwenLM/qwen-code/issues/12867) — Stage D 后续：Turns、Actions、durable admission、AgentDefinition（19 评论）**
   紧随 #12380 的 D1–D3 收尾，重点交付"耐久生命周期、java_durable 准入画像、AgentDefinition"。社区正在讨论大模型 SDK 与 daemon 契约的边界。

3. **[#13395](https://github.com/QwenLM/qwen-code/issues/13395) — Kubernetes 工具运行时跨平台交付门禁（16 评论）**
   实时跟踪 K8s runtime 在 Linux/ARM64 等多平台的进度，包含 PR #13526 草稿状态。社区对"分发门禁"的提法反馈积极。

4. **[#13078](https://github.com/QwenLM/qwen-code/issues/13078) — 每日依赖 CVE 审计失败（15 评论）**
   scheduled CVE 流水线报错，需排查是否有新增高危漏洞或 npm 端点异常。**安全相关**，建议优先响应。

5. **[#13004](https://github.com/QwenLM/qwen-code/issues/13004) — perf(memory)：no-op 抽取后增加有界冷却（9 评论）**
   当自动 memory 抽取上一轮没有产出时，按有界节奏策略避免每轮都 fork 抽取器；属于 **后台自动化** 路径的精细化优化。

6. **[#13492](https://github.com/QwenLM/qwen-code/issues/13492) — XML 工具调用恢复在外层调用中仍漏掉带引号内容（8 评论）**
   PR #13515 已合并内层问题，但外层恢复仍待 [#13579](https://github.com/QwenLM/qwen-code/pull/13579) 解决。属于"已部分修复、剩尾巴"的典型示例。

7. **[#12612](https://github.com/QwenLM/qwen-code/issues/12612) — PR #12559 的延迟评审项（7 评论）**
   来自 chiga0 的 OpenTUI 弹窗几何与补全截断修复评审，超出原 PR 范围的 7 项发现被分拆追踪，体现项目"评审沉淀"机制成熟。

8. **[#13707](https://github.com/QwenLM/qwen-code/issues/13707) — stripAnalysisBlock 多闭合路径在引号 payload 中漏剥离（5 评论）**
   来自 #11988 评审 R2-3 的延后问题；涉及 reasoning 标签在 `</state_snapshot>` 被引用时无法被正常剥离，影响上下文压缩。

9. **[#13689](https://github.com/QwenLM/qwen-code/issues/13689) — Subagent 定义中的 `${identifier}` 触发 templateString 异常（5 评论）**
   `.qwen/agents/*.md` 子代理定义里只要包含 `${var}` 形式（包括代码块内的文档示例）即崩溃，**对生态文档与模板编写者影响显著**。

10. **[#13269](https://github.com/QwenLM/qwen-code/issues/13269) — #13163 后续：冷缓存取消 + 延迟评审（5 评论）**
    Managed Agent 冷缓存取消的修复与未消化评审项；体现"主 PR + 后续跟踪"的标准做法。

---

## 4. 重要 PR 进展（Top 10）

1. **[#13550](https://github.com/QwenLM/qwen-code/pull/13550) — feat(managed-agent)：H4b 子 Session 运行时**
   落地 Managed Agent H 阶段：子 Session 运行时，栈式叠在 #13505 之上。引入 child acceptance record 合同，是 #12827 与 #12380 的关键切片。

2. **[#13716](https://github.com/QwenLM/qwen-code/pull/13716) — feat(web-shell)：浏览更早的轨迹窗口**
   Web Shell 突破"只看最近 4 页"的限制，指标与搜索仍按当前窗口计算；面向长会话的可观测性。

3. **[#13718](https://github.com/QwenLM/qwen-code/pull/13718) — fix(web-shell)：允许下载已变更的 workspace artifact**
   修复"编辑后预览可用但下载按钮消失"的问题，直接读 workspace 当前文件内容。

4. **[#13654](https://github.com/QwenLM/qwen-code/pull/13654) — feat(managed-agent)：异步校验工具发布**
   把读回与流式校验移到有界后台 worker；上传返 202 后由调用方继续等待 verified 状态，提升吞吐。

5. **[#13314](https://github.com/QwenLM/qwen-code/pull/13314) — fix(sdk-java)：处理 Hosted Harness 评审关键问题**
   修复 #12654 后的 11 个 Critical + 2 个 Minor，是 Java SDK 收口性工作。

6. **[#13642](https://github.com/QwenLM/qwen-code/pull/13642) — feat(runtime-broker)：terminal JDBC 历史有界保留**
   在退休 binding 下加入 opt-in JDBC 清理；保证恢复、发布与存储鉴权不受影响，属于"线上数据治理"。

7. **[#13714](https://github.com/QwenLM/qwen-code/pull/13714) — fix(web-shell)：重连期间保留 artifact 卡片**
   修复 SSE 短暂断开时 artifact 卡片闪烁，体验改善。

8. **[#9305](https://github.com/QwenLM/qwen-code/pull/9305) — fix(ui)：短会话内容底部对齐**
   解决 VP 模式下短会话顶部留白、底部贴脚的视觉小 bug，来自 #9300。

9. **[#12559](https://github.com/QwenLM/qwen-code/pull/12559) — fix(cli)：匹配 ink 的 OpenTUI 弹窗几何与补全截断**
   弹窗与 ink 等宽、超高时正确裁剪而非推走 composer；TUI 一致性修复。

10. **[#12585](https://github.com/QwenLM/qwen-code/pull/12585) — fix(acp)：持久化嵌入式文本资源以支持 transcript 回放**
    ACP 嵌入文本资源被持久化到用户 prompt 并按类型化 chunk 回放，离线 transcript 投影可用。

**其他值得关注的 PR：**
- [#13599](https://github.com/QwenLM/qwen-code/pull/13599) — 接近自动压缩时按剩余 headroom 收缩工具结果（更稳的 token 管理）
- [#13583](https://github.com/QwenLM/qwen-code/pull/13583) — 移除 thread 后端，让 A2A 跑在 sessions 上（#13467 的二阶段）
- [#13711](https://github.com/QwenLM/qwen-code/pull/13711) — 兼容带 UTF-8 BOM 的 Claude MCP 配置导入
- [#13568](https://github.com/QwenLM/qwen-code/pull/13568) — LSP 文件查询按扩展名路由到适用 server
- [#13713](https://github.com/QwenLM/qwen-code/pull/13713) — workspace 仅可关闭自动更新，不可开启
- [#13672](https://github.com/QwenLM/qwen-code/pull/13672) — workspace artifact 统一按文件名展示
- [#13624](https://github.com/QwenLM/qwen-code/pull/13624) — 前台子代理把"为何停止"告知父模型
- [#13664](https://github.com/QwenLM/qwen-code/pull/13664) — Web Shell 右栏只读 Excel 预览（懒加载 worker）
- [#13579](https://github.com/QwenLM/qwen-code/pull/13579) — 恢复含引号内容的外层 XML 工具调用
- [#13712](https://github.com/QwenLM/qwen-code/pull/13712) — 持久化 prompt execution context（modelId/authType/approvalMode）

---

## 5. 功能需求趋势

从近 24 小时 50 条 Issue 提炼，社区当前最关心的方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Managed Agent / 多 Agent 会话** | #12380、#12867、#13583、#13649、#13650、#13708、#13709 | 🔥 持续高热 |
| **Web Shell / 可观测性** | #13707、#13667、#13672、#13716、#13718、#13714 | 高 |
| **跨平台分发（K8s / Linux ARM64 / Windows）** | #13395、#13663、#13662、#13704、#13710 | 高 |
| **Token / Memory 管理** | #13004、#13599、#13492 | 中高 |
| **安全与权限** | #13078（CVE）、#13705（heredoc 注入）、#13691（/auto-mode-setup） | 中高 |
| **桌面端下载与品牌** | #13656（qwen.ai 暴露下载） | 中 |
| **Subagent 工具与扩展技能** | #13689、#13683、#13253 | 中 |
| **MCP / LSP 互操作** | #13710、#13568、#13711 | 中 |

---

## 6. 开发者关注点

综合评论与提交描述，社区的痛点与高频诉求集中在以下几点：

1. **多 Agent 会话边界与持久化**：Hosted Session 在控制面故障穿越激活续期时日志"永久死亡"（[#13650](https://github.com/QwenLM/qwen-code/issues/13650) P1）；前景子代理缺 checkpoint 续跑能力（[#13708](https://github.com/QwenLM/qwen-code/issues/13708) P2）；A2A 无 `contextId` 时会按消息数量创建不可区分的 chat session（[#13649](https://github.com/QwenLM/qwen-code/issues/13649)）。
2. **Windows 平台仍是被忽视的边角**：browser-use 技能因 Native Messaging 未注册完全不可用（[#13663](https://github.com/QwenLM/qwen-code/issues/13663)）；hook 子进程未设 `windowsHide` 导致整个 Windows Terminal 最小化（[#13662](https://github.com/QwenLM/qwen-code/issues/13662)）。
3. **ARM64 Linux 一等公民缺失**：vendored ripgrep 在树莓派 5 失败（[#13704](https://github.com/QwenLM/qwen-code/issues/13704)），与 K8s 运行时跨平台门禁形成"两条 ARM64 战线"。
4. **作者生态的脚手架不够友好**：`.qwen/agents/*.md` 文档里写 `${var}` 即崩溃（[#13689](https://github.com/QwenLM/qwen-code/issues/13689)）；扩展技能只能通过 `extension:authoredName` 调用（[#13683](https://github.com/QwenLM/qwen-code/issues/13683)）。
5. **后台自动化的"省力"诉求**：自动 memory 抽取在 no-op 后仍 fork 一个抽取器，需要 cooldown（[#13004](https://github.com/QwenLM/qwen-code/issues/13004)）；Web Shell 4 页限制给长会话带来不便（[#13716](https://github.com/QwenLM/qwen-code/pull/13716)）。
6. **安全审计节奏被关注**：CVE 流水线在 day-2 即出现失败（[#13078](https://github.com/QwenLM/qwen-code/issues/13078)）；daemon git worktree guard 把 heredoc 当 stdin，shell/解释器作为接收方时仍可执行剥离后内容（[#13705](https://github.com/QwenLM/qwen-code/issues/13705)）。
7. **CI/发布链路抖动**：今日两条 release 流水线与两批 E2E 单测同时失败，**autofix 机制正在承载越来越多的"机器人 vs 人类"边界**。

---

*日报基于 GitHub 公开数据自动生成，所有链接指向 `github.com/QwenLM/qwen-code`。如需关注某个具体方向，欢迎在评论区告诉我们。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

> **日期**：2026-10-09
> **数据来源**：github.com/Hmbown/DeepSeek-TUI
> **说明**：本期抓取到的 issue/PR 链接均指向 `codewhale-hq/Codewhale` 仓库，可能存在命名迁移或仓库引用关系，请以官方仓库为准。

---

## 一、今日速览

今日社区动态聚焦 **v0.10.2 发布候选** 的多项收尾工作：PR #6907 持续合入 Terminal Dock、会话级 shell 等待控制、Runtime 恢复与审批路由修复，并清理多语种翻译缺陷。同时出现两条 **发布阻塞性问题**（crates.io 10 MiB 包体上限、版本化 fixture 漂移），需要社区在合并前重点关注。

---

## 二、版本发布

过去 24 小时内 **无新版本正式发布**。当前主线仍处于 v0.10.2 RC 阶段，候选头为 `6d9fb2150eb24bcfd951a79fb4c6a8a782690b33`（见 PR #6907）。

---

## 三、社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#6728](https://github.com/codewhale-hq/Codewhale/issues/6728) | **CPU 使用率回归**：v0.9.12（idle）→ v0.10.0（heavy） | OPEN | 🔴 高 |
| [#6925](https://github.com/codewhale-hq/Codewhale/issues/6925) | 0.10.2: 修复 ChatGPT 登录的 `invalid_authorize_request` 错误 | OPEN | 🔴 高 |
| [#6910](https://github.com/codewhale-hq/Codewhale/issues/6910) | 🚨 **发布阻塞**：crates.io 10 MiB 包体上限导致 v0.10.1 tui/cli 上传失败 | OPEN | 🔴 高 |
| [#6911](https://github.com/codewhale-hq/Codewhale/issues/6911) | 版本化 fixture 需随版本号同步更新（check-versions + prepare-release） | OPEN | 🟠 中 |
| [#6155](https://github.com/codewhale-hq/Codewhale/issues/6155) | Pet：在真实终端中验证 /pet 栖息地，TUI 与 desktop 共享 owner | OPEN | 🟠 中 |
| [#6923](https://github.com/codewhale-hq/Codewhale/issues/6923) | Gemini 429 错误时自动等待并重试上一个任务 | OPEN | 🟠 中 |
| [#6865](https://github.com/codewhale-hq/Codewhale/issues/6865) | 放宽 MCP OAuth 与 Provider PKCE 登录的 300s 浏览器回调窗口 | OPEN | 🟠 中 |
| [#6512](https://github.com/codewhale-hq/Codewhale/issues/6512) | Bug：Goal 任务在 1,000 步强制停止，`max_steps=0` 应为不限制 | OPEN | 🟡 低 |
| [#6912](https://github.com/codewhale-hq/Codewhale/issues/6912) | TUI：在工作坞中提供 Terminal 视图，可观察模型 PTY 会话 | OPEN | 🟡 低 |
| [#6914](https://github.com/codewhale-hq/Codewhale/issues/6914) | 实现规范化的永久会话删除（含恢复与能力协商） | OPEN | 🟡 低 |

**重点解读**：
- **#6728** 是过去 24 小时唯一来自非项目成员的详细性能报告（FreeBSD 15.0 x86-64，对三个 Rust 二进制 ELF 做对比），社区反应虽未起势但具有诊断价值。
- **#6910 / #6911** 共同反映 v0.10.1 在发布工程链上的遗漏——任何阻断性问题若不解决，v0.10.2 也将受影响。

---

## 四、重要 PR 进展

| # | PR | 类型 | 摘要 |
|---|----|------|------|
| [#6907](https://github.com/codewhale-hq/Codewhale/pull/6907) | **v0.10.2 主候选** | feat | Terminal Dock、会话级 shell 等待控制、Runtime 恢复与审批路由修复、精简首页 |
| [#6920](https://github.com/codewhale-hq/Codewhale/pull/6920) | feat(tui) | ` /pet on` 让动画 GPUI 鲸鱼成为主视图，保留消息框/粘贴/权限控制 |
| [#6924](https://github.com/codewhale-hq/Codewhale/pull/6924) | feat(runtime) | 每个 runtime store 一个控制端点，每个 workspace 一个 driver（解决多客户端 owner 冲突） |
| [#6921](https://github.com/codewhale-hq/Codewhale/pull/6921) | fix(app-server) | 将 hook 日志放到 state db 旁，避免污染项目 `.deepseek/events.jsonl` |
| [#6922](https://github.com/codewhale-hq/Codewhale/pull/6922) | fix(tui) | 同步五个语言包的 `/provider` 描述，避免翻译漂移 |
| [#6917](https://github.com/codewhale-hq/Codewhale/pull/6917) | chore(deps) | 将 `next` 升级 16.3.6 → 16.3.8，修复 high-severity advisory |
| [#6927](https://github.com/codewhale-hq/Codewhale/pull/6927) | docs(agents) | **贡献者规则**：除非明确指示，agent 不再写入测试与代码注释 |
| [#6919](https://github.com/codewhale-hq/Codewhale/pull/6919) | fix(tui) | `/profile` 命令在所有语言下返回英文；本次补全多语种回复 |
| [#6916](https://github.com/codewhale-hq/Codewhale/pull/6916) | feat(telemetry) | 允许 embedder 通过 `CODEWHALE_TELEMETRY_SURFACE` 声明服务端 surface |
| [#6906](https://github.com/codewhale-hq/Codewhale/pull/6906) | fix(prompts) | Windows 环境下向 agent 暴露 npm launcher 名，避免误杀 node.exe 结束会话 |

---

## 五、功能需求趋势

从 20 条 Issue 中归纳，社区最关注的方向集中在以下主题：

| 方向 | 代表 Issue | 焦点 |
|------|-----------|------|
| **TUI 交互与 Dock 体验** | #6155, #6912, #6909 | 真实终端验证、Terminal Dock 接入、shell 等待解耦 |
| **Provider / OAuth 登录韧性** | #6925, #6926, #6865 | xAI/ChatGPT 登录修复、PKCE 回调窗口延长 |
| **发布工程与 CI** | #6910, #6911, #6506 | 包体限制、版本化 fixture、验收收据 |
| **Runtime 安全与权限** | #6471, #6914, #6915 | Full Access 自动审批安全地板、永久会话删除、Engine 启动恢复 |
| **预算/步数控制** | #6512 | `max_steps=0` 语义修正、Goal 任务预算 |
| **i18n / 多语种一致性** | #6922, #6919 | `/provider` 与 `/profile` 翻译漂移 |
| **性能基线** | #6728 | CPU 回归可观测性 |

---

## 六、开发者关注点与高频痛点

1. **v0.10.2 阻塞性缺陷亟待解决**
   crates.io 10 MiB 包体上限（#6910）和 0.10.1 版本化 fixture 未刷新（#6911）直接卡住发布流。

2. **ChatGPT / OAuth 登录链路不稳定**
   #6925 揭露了一个查询参数污染导致的 `invalid_authorize_request` 400 错误，对外部用户首次配置成本影响显著。

3. **TUI 性能回退缺乏回归门禁**
   #6728 显示 idle/moderate/heavy 三档 CPU 占用逐步抬升，社区呼吁建立系统性 perf gate（与 #6506 的「验收收据」诉求呼应）。

4. **Goal 任务的预算语义不直观**
   `max_steps = 0` 既不等于 unlimited 也不报错（#6512），属于 UX 缺陷。

5. **shell 等待期控制仍是盲区**
   Ctrl+B 仅覆盖前台 shell（#6909），后台任务长等待期间用户无任何交互手段——已被纳入 v0.10.2。

6. **多语种翻译漂移常态化**
   #6922、#6919 揭示了"接口字符串删改后 i18n 漏同步"的反复出现，建议建立 `/help` 类命令字串的 CI 校验。

7. **贡献者规则收紧（#6927）**
   维护方明确 agent 不再默认添加测试与代码注释，外部贡献者在提 PR 前需重新阅读 `AGENTS.md`。

---

*报告生成时间：2026-10-09 · 数据基线：Hmbown/DeepSeek-TUI GitHub API（issues + pulls, 过去 24 小时）*
*注：本日报内容以 `codewhale-hq/Codewhale` 数据为主体，若为不同仓库的镜像，请以官方仓库为准。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*