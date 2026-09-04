# AI CLI 工具社区动态日报 2026-09-04

> 生成时间: 2026-09-04 02:25 UTC | 覆盖工具: 9 个

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

**数据窗口：2026-09-03 ~ 2026-09-04｜覆盖工具：9 款主流 AI CLI**

---

## 1. 生态全景

当前 AI CLI 工具生态正处于"**功能扩张趋缓、能力深化提速**"的成熟期前段：一方面，新模型/新协议的接入（如 GPT-6-Astra、gemini-3.8-flash、Meta Muse）持续发生；另一方面，社区焦点已显著转移到 **Agent 可靠性与可观测性**（执行结果错误上报、终端死循环、token 失控）、**会话/存储治理**（100 GiB+ 存储膨胀、Fork DAG 设计）、**平台完整性**（Windows/MSIX、Linux 多发行版、Wayland）以及 **多 Agent/插件扩展架构**（Function Hooks、ACP 协议、命令分面）这四条主线上。今日的 9 款工具中有 4 款发布版本、5 款处于密集 PR 期、9 款合计活跃 Issue 数 200+，但**缺陷修复与架构债的优先级首次超过新功能**——这是生态从"野蛮生长"走向"可用产品"的关键拐点。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 活跃 Issues | PR 活动 | 关键版本/事件 |
|------|-------------|------------|---------|--------------|
| **Claude Code** | ✅ v2.1.260 | ~50 | 5 | `/diff` 面板、`/cost` 缓存诊断 |
| **OpenAI Codex** | ✅ v0.153.1/.2 + 0.154.0-α1/2/3 | 50+ | 16+ | GPT-6-Astra 模型目录回填 |
| **Gemini CLI** | ✅ v0.60.0-nightly | 10（Top10） | 10+ | RFC 9207 MCP OAuth 修复 |
| **GitHub Copilot CLI** | ✅ v1.0.83-4 | 10（Top10） | 0（24h） | CIMD 支持、会话恢复体验优化 |
| **Kimi Code CLI** | ❌ | 7 | 1 | 1.17 ACP auth gate 破坏性变更 |
| **OpenCode** | ❌ | 10（Top10） | 10 | 后台任务、浏览器插件体系预热 |
| **Pi** | ❌ | 50 | 50 | mitsuhiko system prompt 重构 |
| **Qwen Code** | ⚠️ v0.23.0 发版失败 | 10（Top10） | 10+ | 后台 Agent View 4 层 PR 栈 |
| **DeepSeek TUI (Codewhale)** | ⚠️ 0.9.12 PR 合入待发版 | 4 | 7 | FEAT-019 记忆能力 + ACP 缺口 |
| **合计** | **4 正式 + 1 失败 + 1 待发版** | **200+** | **110+** | — |

> 📊 **观察**：Pi 以 50 issues + 50 PRs 双高居首，反映其仍处于"功能扩张 + 大量修复"的高速迭代期；而 DeepSeek TUI 与 Kimi CLI 处于更收敛的"整合发布"模式。

---

## 3. 共同关注的功能方向

| 功能方向 | 涉及工具 | 共性诉求 |
|---------|---------|---------|
| **🪝 插件/扩展机制深化** | Claude Code (#91870 Function Hooks)、Pi (#8998 dynamic system prompt)、Gemini CLI (Browser Agent 健壮性)、Qwen Code (Agent Board #9402)、OpenCode (#46530 权限断言) | 从"配置型扩展"演进到"行为拦截级扩展"，要求插件能深度介入 Agent 决策流而不仅是被动调用 |
| **🧠 Agent 可观测性** | Gemini CLI (#22323 假成功、#21409 挂死)、Qwen Code (#10887 死循环烧 5–14M tokens)、Claude Code (#85891/#91880)、OpenAI Codex (#11626 rewind) | 开发者已无法"信任"当前 sub-agent 的退出码与执行轨迹，强烈要求**稳定的终止语义、超时机制、执行可视化** |
| **🔌 MCP / ACP 协议兼容性** | Copilot CLI (#4525/#4695 OAuth)、Gemini CLI (RFC 9207)、Claude Code、Qwen Code、DeepSeek TUI (#5863/#5864 session/list) | 协议层缺陷集中爆发：OAuth token 缓存、issuer 校验、双重初始化、session 枚举缺失 |
| **🖥️ Windows / 桌面端稳定性** | Claude Code (#85891 始终置顶)、Codex (#41049/#41290/#41822)、Copilot CLI (#4683 PowerShell)、Kimi CLI (#1293 SSH) | Windows/MSIX 路径仍是**结构性短板**，平均首次启动 8–12 分钟 |
| **💾 会话/存储治理** | Codex (#24948/#34268/#25779 100 GiB)、Claude Code (#91880 CLAUDE.md 重传)、Pi (#8061/#9097 4.5MB 单 lane) | 长期运行的开发者普遍遭遇上下文膨胀，从"修 bug"升级到"重新设计存储结构" |
| **🔁 操作可逆性 (Rewind/Undo)** | Claude Code (`/diff`)、Codex (#11626 rewind + 工作区回退)、OpenCode (#46395 非 Git 快照)、Kimi CLI (#1311 undo) | 用户对"模型改文件"的可信度焦虑普遍存在，**差异化竞争点**正在此 |
| **🛡️ 安全沙箱/权限模型** | Gemini CLI (Windows 沙箱、ACL、短名)、Qwen Code (#10583 Bubblewrap)、Claude Code (Security 误伤 #79074) | 从"prompt filter 事后清洗"转向"OS 层原生隔离"，Linux 用户的 bwrap 呼声最高 |
| **⚙️ 模型/Provider 灵活路由** | Claude Code (#38698)、Copilot CLI (#4218 Auto 模型池)、Codex (GPT-6-Astra 静默下沉)、Pi (#8810) | BYOK、私有化、多代理路由的能力是**走向企业生产**的核心准入门槛 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 全栈 AI 软件工程师桌面端 | 独立开发者 / 企业研发团队 | Hooks/MEMORY 深耕、移动端+桌面双端、Anthropic-first |
| **OpenAI Codex** | 多 Agent 协作 + 模型铺货 | 偏好 OpenAI 生态的开发者 | Multi-agent V2、worktree 隔离、GPT-6-Astra→Bedrock 三步分销 |
| **Gemini CLI** | Google 全栈 + 原生安全 | Gemini 用户 / 安全敏感企业 | MCP-first、OS 沙箱、AST 感知工具 |
| **Copilot CLI** | GitHub 原生 + MCP OAuth 标准化 | GitHub 生态企业 / VSCode 用户 | CIMD、ACP/System Prompt 参数化、与 GitHub Actions 协同 |
| **Kimi Code CLI** | 多 Provider + WebUI 创新 | 国内开发者 / OpenRouter 用户 | 1.17 ACP auth gate 收紧（甚至有些激进）、WebUI 渲染增强 |
| **OpenCode** | 极简插件 + 后台任务优先 | 终端重度用户 / AI Team 模式探索者 | 浏览器公共 API 44 方法、durable heartbeat、Tasks Tab |
| **Pi (earendil-works)** | 实验性多 Provider + 流式渲染 | 追求最新 LLM 接入的早期用户 | 每日刷新的模型表、mitsuhiko 重构 system prompt、O(n²) 性能优化专项 |
| **Qwen Code** | 国内企业 + 多渠道 IM + Web Shell | 阿里云生态 / IM 办公场景 | Bubblewrap 替代 Docker、`qwen sessions` 四件套、DingTalk 集成 |
| **DeepSeek TUI / Codewhale** | 重度 TUI 架构解耦 | 终端沉浸式用户 | FEAT/EPIC 编号体系、命令分面/能力位/类型化结果三段式 |

**关键差异**：
- **执行模型**：Codex/Qwen OpenCode 押注后台 Agent View；Claude Code/Gemini CLI 仍强调交互式会话
- **扩展理念**：Claude Code 走"Function Hooks 行为拦截"；Pi 走"动态 system prompt 重构"；OpenCode 走"插件权限断言 + 浏览器 API 化"——三者代表三条不同的扩展路径
- **多 Provider 策略**：Pi/Kimi/OpenCode 几乎是"全模型中立"，而 Copilot/Codex/Claude Code 仍以自家模型为主轴

---

## 5. 社区热度与成熟度

### 🔥 热度梯队（按单条 Issue 最高点赞数估算）

| 梯队 | 工具 | 标志 |
|------|------|------|
| **T1 头部持续高热** | Claude Code、OpenAI Codex | Claude Code #85891 (167👍)、#12346 (131👍)、Codex #11626 (211👍) |
| **T2 双位数点赞普遍** | Gemini CLI (#21409 8👍+8评论)、Copilot CLI (#4218 13👍)、OpenCode (#7957 53👍) | 1:1 至 3:1 点赞-评论比代表情绪强烈 |
| **T3 安静中加速** | Kimi CLI、Qwen Code、DeepSeek TUI | 国内工具普遍点赞数偏低，但 PR 活跃度高 |
| **T4 实验最快迭代** | Pi | 50+50 双高产，mitsuhiko 亲自下场 |

### 🛠️ 成熟度判断

- **已进入"补短板 + 沉淀"阶段**：Claude Code（v2.1.x 长尾、TUI 回归修复）、Codex（GPT-6-Astra 静默下沉说明模型策略收敛）、Copilot CLI（CIMD 等协议层补全）
- **处于"扩张+治理"并行阶段**：Gemini CLI（Nightly 0.60 + 多个安全 PR）、OpenCode（PR 队列同时含浏览器 API、heartbeat、shell 后台化）、Qwen Code（后台 Agent View 四层栈一气呵成）
- **处于"高速试错"阶段**：Pi（O(n²) 出队、thought signature 损坏、provider 静默覆盖等表明核心数据路径仍在演进）、Kimi CLI（1.17 ACP auth gate 引发 #2633 破坏性变更争议）
- **处于"架构重整"阶段**：DeepSeek TUI（EPIC-005 crate 拆解尚未完成）

---

## 6. 值得关注的趋势信号

### 🚦 信号一：Agent 可观测性成为"生产准入"的硬指标
- **证据**：Gemini #22323 假成功、#21409 挂死、Qwen Code #10887 死循环 5–14M tokens、Codex #11626 rewind 211👍
- **结论**："Agent 是否可靠地报告自己失败"首次成为可观测性优先级，**超过"能完成多少任务"**。开发者要求看到 sub-agent 的轨迹、退出码语义、超时策略和预算收敛。
- **行动建议**：在自研 Agent 时优先实现 `trace/audit/timeout/early-stop` 四件套，避免重复今日社区痛点。

### 🚦 信号二：会话/存储治理从"边缘需求"上升为"核心架构问题"
- **证据**：Codex 单例报告 100+ GiB、Claude Code CLAUDE.md 全量重传、Pi 单 lane 4.5MB 上下文
- **结论**：长会话已从 demo 走向生产，但**存储层 compaction / DAG / fork 模型**仍多数工具未设计完毕。预计 2026 Q4 多款工具将推出"会话库"或"checkpoint 显式管理"功能。
- **行动建议**：关注 Codex 0.154 主线、Claude Code /diff + /cost 双件套走向。

### 🚦 信号三：插件/扩展从"配置式"走向"行为拦截式"
- **证据**：Claude Code Function Hooks (#91870)、Pi system prompt 重构 (#8998)、OpenCode 权限断言 (#46530)、Gemini CLI 插件环境变量确认 (#28863)
- **结论**：四款主流工具不约而同在同一周内强化扩展机制，但路径不同——这意味着**插件标准化的窗口期正在关闭**，开发者需要选定平台。
- **行动建议**：计划构建跨 CLI 插件的团队应尽快沉淀"插件适配层"以避免重复劳动。

### 🚦 信号四：Windows / Linux 桌面端的"二等公民"问题集中爆发
- **证据**：Claude Code #85891/#49917、Codex #41049/#41822、Copilot #4683 PowerShell、Gemini CLI #21983 Wayland、Kimi CLI #1293 SSH
- **结论**：当 macOS 用户享受"图形界面 + 终端一体化"时，**Windows/Linux 用户普遍经历 30%+ 的体验降级**。预计未来 6 个月将是各工具补齐跨平台一致性的关键窗口。
- **行动建议**：在选型时优先选择"已修复自身 Windows 链路"的工具；自研需为 Windows MSIX/Schannel/Path 投入专人力。

### 🚦 信号五：MCP / ACP 协议层"协议成熟前的兼容性成本"
- **证据**：Copilot #4525 双重初始化、Gemini CLI 补 RFC 9207、DeepSeek TUI #5863/#5864 ACP session 缺失
- **结论**：协议层缺陷在每一个接 MCP/ACP 的工具中都会复现一次，**集成商成本被低估**。
- **行动建议**：自研 MCP 工具时主动实现 `initialize` retry + 版本协商；ACP 实现时优先补齐 `session/list` + `session/load` 以避免成为下一个 DeepSeek TUI #5864。

### 🚦 信号六：CI/CD 与发布链路的脆弱性首次进入开发者视野
- **证据**：Qwen Code v0.23.0 发版失败 (#10900) + ECS Runner 集群陈旧 (#10911)、Claude Code #91894 当日合入的 SKILL.md
- **结论**：随着 CLI 工具向"产品"演进，**Release 工程自身的可靠性**也成为社区新议题；`promote_nightly` 等降级路径将被更多项目引入。

---

## 📌 报告总结

> 今日 AI CLI 生态展示的核心矛盾是：**模型/Agent 能力曲线仍在向上，但工具链的可靠性、跨平台一致性、可观测性、可扩展性仍滞后于能力曲线 6–12 个月**。对开发者而言，这意味着选型的关键不在"谁能跑最新模型"，而在"谁能稳定管理 100+ 小时生产会话、谁能在 Windows/Linux 上不掉链子、谁的插件生态允许深度定制"。
>
> **建议优先观察清单**：Claude Code 后续对 #85891 / #91870 的响应速度、Codex 0.154 主线的存储重构、Pi mitsuhiko #8998 的合入路径、Qwen Code 4 层 Agent View PR 栈的落地节奏、DeepSeek TUI 是否将 ACP 缺口修复作为 0.9.13 旗舰。

---

*报告生成时间：2026-09-04｜数据源：anthropics/claude-code, openai/codex, google-gemini/gemini-cli, github/copilot-cli, MoonshotAI/kimi-cli, anomalyco/opencode, earendil-works/pi, QwenLM/qwen-code, Hmbown/DeepSeek-TUI*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

⚠️ Skills 摘要生成失败。

---

# Claude Code 社区动态日报

**日期：2026-09-04** ｜ 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 今日速览

🔍 今天的核心动态围绕 **v2.1.260 版本发布** 与 **Windows 桌面端长期遗留 bug 的社区反弹**：新版带来了 `/diff` 差异对比面板与 `/cost` 缓存诊断能力；而 Windows "始终置顶"窗口问题（#85891）已成为社区痛点榜首，单帖斩获 167 赞、76 条讨论。**Function Hooks** 提案（#91870）则代表了插件扩展能力向更深层次演进的强烈呼声。

---

## 版本发布 📦

### [v2.1.260](https://github.com/anthropics/claude-code/releases/tag/v2.1.260)

两个面向开发体验的关键更新：

| 新增能力 | 描述 |
|---------|------|
| **`/diff` 差异面板** | 在全屏模式下，Claude 编辑时会自动打开侧边 diff 面板，展示未提交的本地修改 |
| **`/cost` 缓存诊断** | 在提示缓存命中率下降时输出"可能原因"（如工具定义/系统提示变更、超过 TTL 等） |

> 💡 `/diff` 面板填补了"Claude 替你改了文件，但你不放心直接提交"的空白；`/cost` 的诊断能力则为长会话用户提供了成本可观测性。

---

## 社区热点 Issues 🔥

按社区关注度（评论数 + 👍）精选 10 条：

### 🐛 #85891 — Windows 桌面端"始终置顶"窗口 bug（167 👍，76 评论）
**状态：OPEN ｜ 标签：BUG ｜ 平台：Windows 11**
[链接](https://github.com/anthropics/claude-code/issues/85891)
> Claude Desktop 窗口强制 always-on-top 且无设置开关，是 #66516 的 Windows 同源问题。

🔎 **为何重要**：这是今日热度最高的 issue。167 个👍 反映了非常强的用户挫败感。"被迫置顶"违反了窗口管理基本规则，对多任务工作流造成持续干扰。

---

### ✨ #91870 — Function Hooks：让插件能力扩展 10 倍（31 👍，56 评论）
**状态：OPEN ｜ 标签：enhancement ｜ 领域：hooks、plugins**
[链接](https://github.com/anthropics/claude-code/issues/91870)
> 提案引入"函数级 Hook"，通过 side-effect 追踪 + 注册顺序的 next 延续模型（类 Express/Koa）让插件深度修改 Claude Code 行为同时保证安全。

🔎 **为何重要**：社区对插件生态的诉求已从"配置扩展"升级到"行为拦截"。这是迄今为止最具野心的扩展模型设计提案。

---

### ✨ #12346 — GitLab 集成（仓库连接、MR、移动端）（131 👍，51 评论）
**状态：OPEN ｜ 标签：enhancement ｜ 领域：tools、api**
[链接](https://github.com/anthropics/claude-code/issues/12346)
> 已有 GitHub 集成但缺少 GitLab，对自托管/企业用户是结构性短板。

🔎 **为何重要**：创建已超 9 个月、131 赞，是**长期高优**却**仍未排期**的代表性需求。直接关系企业在 GitLab 主导的 DevOps 栈下能否采用 Claude Code。

---

### 🐛 #49917 — Windows 安装包 AddPackage 错误（37 评论）
**状态：OPEN ｜ 标签：bug ｜ 平台：Windows**
[链接](https://github.com/anthropics/claude-code/issues/49917)
> 早期"成功"的安装留下不一致状态后，再次安装触发 `HRESULT 0x80073CF6`。

🔎 **为何重要**：企业内大规模部署时，此故障会导致装机不可逆失败，影响推广策略。

---

### 🐛 #88093 — Windows 始终置顶（#85891 的同源副本，37 👍）
**状态：OPEN ｜ 标签：BUG**
[链接](https://github.com/anthropics/claude-code/issues/88093)
> "窗口永远在其他应用之上"的另一份详细复现报告。

🔎 **为何重要**：与 #85891 形成"双胞胎"反馈，说明影响面极广且未被官方响应。

---

### 🐛 #81833 — git-worktree 中自动记忆加载不一致（12 评论）
**状态：OPEN ｜ 标签：has repro**
[链接](https://github.com/anthropics/claude-code/issues/81833)
> 在 `.claude/worktrees/<name>` 下启动的会话有时加载完整 MEMORY.md，有时完全空白。

🔎 **为何重要**：自动记忆是 Claude Code 的关键差异化能力；在多 worktree 并行开发场景下不可预测会直接破坏上下文连续性。

---

### ✨ #38698 — 子代理按模型路由（43 👍，12 评论）
**状态：OPEN ｜ 标签：enhancement ｜ 领域：agents、providers**
[链接](https://github.com/anthropics/claude-code/issues/38698)
> 现状 `ANTHROPIC_BASE_URL` 是会话级，无法让编排器走 Anthropic 而子代理走本地 Ollama。

🔎 **为何重要**：43 👍 + 多个早期多代理工作流用户共同诉求。是走向"低成本、私有化"落地的核心条件。

---

### 🐛 #71603 — Pixel 移动端输入草稿丢失（8 👍，11 评论）
**状态：OPEN ｜ 标签：bug ｜ 平台：Android**
[链接](https://github.com/anthropics/claude-code/issues/71603)
> Agent 忙碌期间输入的内容不会以"草稿"形式保留，切到后台即丢失。

🔎 **为何重要**：移动端 Claude Code 的基础可靠性问题，挫伤"碎片时间编码"体验。

---

### 🐛 #78569 — Auto-memory 自相矛盾的 read-before-write 行为
**状态：OPEN ｜ 标签：has repro ｜ 领域：memory**
[链接](https://github.com/anthropics/claude-code/issues/78569)
> 系统指令要求 Claude 编辑 MEMORY.md，但 read-before-write 闸门确定性拒绝。

🔎 **为何重要**：揭示了产品文档 ↔ 运行时机制之间的内部矛盾，是 AI Agent "自动化记忆"特性的成熟度信号。

---

### 🐛 #91251 — Sticky prompt header 在全屏渲染器下不显示
**状态：OPEN ｜ 标签：regression ｜ 领域：tui**
[链接](https://github.com/anthropics/claude-code/issues/91251)
> 2.1.252 起，滚动到看不见 prompt 时，顶部常驻 header 不再出现。

🔎 **为何重要**：典型的 TUI 体验回归，影响长对话的导航效率，且缺少官方修复时间表。

---

> 📌 其他值得关注：iOS 滑出窗口会丢未发送 prompt（[#63975](https://github.com/anthropics/claude-code/issues/63975)）、Bash 工具吞掉 `\\` 转义（[#88561](https://github.com/anthropics/claude-code/issues/88561)）、CLAUDE.md 被全量重传导致上下文膨胀（[#91880](https://github.com/anthropics/claude-code/issues/91880)）。

---

## 重要 PR 进展 🔧

过去 24 小时共有 5 条 PR 更新：

### 🛠️ #87079 — 安全规则 glob `**` 修复
**状态：OPEN** ｜ [链接](https://github.com/anthropics/claude-code/pull/87079)
> 修复 `**` 在 fnmatch 下未跨越 `/` 的静默漏匹配问题。对 `security-patterns.json` 而言，这是**安全语义**而非普通文案问题——漏匹配等同于策略失效。

### 🛠️ #89404 — `validate-agent.sh` 早停问题修复
**状态：OPEN ｜ 作者：bcherny** ｜ [链接](https://github.com/anthropics/claude-code/pull/89404)
> 解决 plugin-dev 自身的 agents 在自家校验器上报错的尴尬问题（fixes #83803）。`set -e` + `((x++))` 的经典 shell 陷阱，多脚本同时中招。

### 🛠️ #66416 — plugin-dev 系列校验器修复
**状态：OPEN** ｜ [链接](https://github.com/anthropics/claude-code/pull/66416)
> 三个脚本（agent / hook-linter / validate-hook-schema）共享同一 `set -euo pipefail` 缺陷，作者建议合并统一修复路径。

### 🛠️ #79150 — code-review README 与当前实现对齐
**状态：OPEN** ｜ [链接](https://github.com/anthropics/claude-code/pull/79150)
> README 中描述的 git blame 历史 agent、0-100 评分、80 阈值等已不再存在；统一文档与实际命令。

### ✅ #91894 — 更新 `/frontend-design` SKILL.md
**状态：CLOSED** ｜ [链接](https://github.com/anthropics/claude-code/pull/91894)
> 当日内闭合的快速文档更新。

---

## 功能需求趋势 📈

从所有 Issues 提炼出社区最强烈的诉求方向：

| 方向 | 代表 Issue | 信号强度 |
|------|-----------|---------|
| **🔌 多平台 SCM 集成** | [#12346](https://github.com/anthropics/claude-code/issues/12346) GitLab | 9 个月未解、131 👍 |
| **🪝 插件行为深度介入** | [#91870](https://github.com/anthropics/claude-code/issues/91870) Function Hooks | 56 评论详细设计草案 |
| **🧠 跨会话上下文/记忆** | [#81833](https://github.com/anthropics/claude-code/issues/81833) [#91913](https://github.com/anthropics/claude-code/issues/91913) [#78569](https://github.com/anthropics/claude-code/issues/78569) | 多 issue 同主题 |
| **🎯 子代理路由能力** | [#38698](https://github.com/anthropics/claude-code/issues/38698) [#73654](https://github.com/anthropics/claude-code/issues/73654) | 多个高赞提案 |
| **🖥️ 桌面端基础体验** | [#85891](https://github.com/anthropics/claude-code/issues/85891) [#88093](https://github.com/anthropics/claude-code/issues/88093) [#49917](https://github.com/anthropics/claude-code/issues/49917) | 集中爆发 |
| **📱 移动端鲁棒性** | [#71603](https://github.com/anthropics/claude-code/issues/71603) [#63975](https://github.com/anthropics/claude-code/issues/63975) | 草稿丢失成为系统性问题 |

---

## 开发者关注点 🎯

从反馈中归纳出三大痛点：

**1. 桌面端稳定性低于 CLI 端**
Windows 桌面端出现 **"始终置顶"** + **"安装包不可逆损坏"** 的双重问题；TUI 又在 #91251、#88836 出现 visible 回归。开发者普遍感觉 **桌面端产品成熟度落后于 CLI**。

**2. 上下文/记忆的可观测性不足**
- CLAUDE.md 全量重传导致 token 浪费（[#91880](https://github.com/anthropics/claude-code/issues/91880)）
- worktree 下记忆加载不一致（[#81833](https://github.com/anthropics/claude-code/issues/81833)）
- 跨重启会话状态不可靠（[#91913](https://github.com/anthropics/claude-code/issues/91913)）

本次 v2.1.260 新增的 `/cost` 缓存诊断是正向信号，但社区期望 **记忆层有更清晰的 API 与文档**。

**3. 安全过滤误伤专业工作流**
[#79074](https://github.com/anthropics/claude-code/issues/79074) / [#79070](https://github.com/anthropics/claude-code/issues/79070) / [#79065](https://github.com/anthropics/claude-code/issues/79065) 等多条同源 issue 反映：安全 filter 仍会把 Android 调试、Windows 认证排错、WMS 导出等合法工作误判为威胁——**对安全研究/平台工程团队是显著摩擦点**。

---

> 📊 **数据快照**：过去 24 小时活跃 issue 50 条，PR 5 条；bug 占比最高（约 60%），enhancement 类集中在插件/平台扩展。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-04**

---

## 1. 今日速览

今日 Codex 主线围绕 **GPT-6-Astra 模型目录回填与 0.153.x 补丁** 展开，连续发布 `0.153.1` / `0.153.2` 两个补丁及 `0.154.0-alpha.1~3` 三个前瞻版本。社区层面，**会话存储膨胀（从几 GB 到 100+ GiB）** 与 **Windows/MSIX 启动链路** 仍是最高频的痛点，多个中长期跟进 Issue 持续升温。

---

## 2. 版本发布

### 🔖 rust-v0.153.2（补丁）
- **修复**：将 `GPT-6-Astra Fast` 层展示文案从 “1.5x speed, increased usage” 改为 **“2x speed, increased usage”**（仅文案，请求路由不变）([#42632](https://github.com/openai/codex/pull/42632))

### 🔖 rust-v0.153.1（补丁）
- **新增**：通过 API 配置 `GPT-6-Astra` 模型的支持；该模型**不作为默认**，也**不出现在模型选择器**中，便于下游分发商接入 ([#42605](https://github.com/openai/codex/pull/42605))

### 🔖 rust-v0.154.0-alpha.1 / alpha.2 / alpha.3
- 面向 0.154 主线的三个前瞻版本，目前 changelog 未放出实质说明，建议持续观察。

---

## 3. 社区热点 Issues

按评论数与关注度挑选 10 条最具代表性的 Issue：

1. **[#41049](https://github.com/openai/codex/issues/41049)** — Windows `code-mode host exited during handshake` 导致 5.6 模型初始化失败（💬 45，👍 1）
   - 跨“Windows + 本地命令通道 + 工具调用”三个标签，是本周讨论最热的回归问题。

2. **[#11626](https://github.com/openai/codex/issues/11626)** — **/rewind 检查点恢复同时回退 chat 上下文与 Codex 已应用的代码编辑**（💬 40，👍 211）
   - 高赞 enhancement。当前 `Esc` 仅恢复对话状态，不回退工作区 diff，是用户长期强烈诉求。

3. **[#24948](https://github.com/openai/codex/issues/24948)** — 会话日志膨胀到 **700MB–2GB**，源于重复压缩历史与原始工具输出（💬 31，👍 4）

4. **[#41290](https://github.com/openai/codex/issues/41290)** — Windows + WSL 切换 Agent Environment 后项目创建/删除失败（💬 30，👍 21）

5. **[#41463](https://github.com/openai/codex/issues/41463)** — Windows + WSL 项目创建：`AbsolutePathBuf` 反序列化缺 base path（💬 23，👍 12）

6. **[#39954](https://github.com/openai/codex/issues/39954)** — Windows + Android Remote Control 出现 `409 Conflict` 后陷入重连死循环（💬 23，👍 0）

7. **[#25779](https://github.com/openai/codex/issues/25779)** — **Meta-bug**：会话/turn 状态无界增长造成冻结、上下文膨胀、丢失活动 turn 控制权（💬 17，👍 8）
   - 元级 bug，串联上下文管理与子代理生命周期。

8. **[#39897](https://github.com/openai/codex/issues/39897)** — macOS ChatGPT Desktop 中删除的对话仍残留于侧边栏且无法移除（💬 15，👍 4）
   - 配套的 #41987（幽灵会话）说明 macOS 侧边栏清理逻辑存在系统性偏差。

9. **[#34268](https://github.com/openai/codex/issues/34268)** — Multi-agent V2 完整历史分叉导致会话存储 **>100 GiB**，历史压缩快照与内嵌图片重复落地（💬 13，👍 6）

10. **[#2379](https://github.com/openai/codex/issues/2379)** — TUI 中实现 `Cmd-Z / Shift-Cmd-Z` **撤销/重做输入文本**（💬 11，👍 32）
    - 历史悠久的功能请求，👍 高，开发者持续期待补齐基础编辑器行为。

---

## 4. 重要 PR 进展

按影响力筛选 10 条已合并/关闭的 PR：

1. **[#42652](https://github.com/openai/codex/pull/42652)** — `codex exec` 引入**托管 Git Worktree**：`--worktree` 同时支持新建与 fork 会话，绑定至独立 checkout。
2. **[#42650](https://github.com/openai/codex/pull/42650)** — 模型答复中的 **文件 citation 渲染为本地链接**，兼容含 Markdown 特殊字符、Unicode、Windows 路径分隔符与定位后缀。
3. **[#42641](https://github.com/openai/codex/pull/42641)** — 修复内联 TUI 全屏覆盖层后 viewport 状态陈旧、对话历史被滚出视区。
4. **[#42640](https://github.com/openai/codex/pull/42640)** — 共享 assistant markup 解析器，统一处理带引号/无引号属性、嵌套大括号、转义引号，落到 Git action receipt 与代码注释。
5. **[#42639](https://github.com/openai/codex/pull/42639)** — **当高层配置覆盖已保存的模型默认值时在 TUI 上显式警告**，避免误导性 “已保存” 提示。
6. **[#42607](https://github.com/openai/codex/pull/42607)** — 将 `GPT-6-Astra` 加入**默认打包模型目录**（含 reasoning levels、工具能力、上下文上限、review 策略）。
7. **[#42605](https://github.com/openai/codex/pull/42605)** — 将 `GPT-6-Astra` 目录回移植入 0.153.x 主线。
8. **[#42634](https://github.com/openai/codex/pull/42634)** — 为 `ThreadManager` 引入**可注入的附件存储 `codex-attachment-store`**，存储层与 metadata 解耦。
9. **[#42631](https://github.com/openai/codex/pull/42631)** — Voice host 新增 `initializeRuntime` 协议，验证并安全初始化**打包版 GStreamer** 原生运行时。
10. **[#42624](https://github.com/openai/codex/pull/42624)** — 集中化 `PromptImageMode`：`HIGH_DETAIL` / `ORIGINAL_DETAIL` 及统一尺寸上限，供 core image preparation 复用。

> 备注：另有 #42632（Fast 描述修复）、#42638（文档同步）、#42619（GPT-6-Astra 接入 Amazon Bedrock catalog）、#42606（remote-exec WebSocket 受信任 header）、#42602（弃用 detached review）值得关注。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区信号 |
| --- | --- | --- |
| **会话/存储治理** | [#24948](https://github.com/openai/codex/issues/24948)、[#34268](https://github.com/openai/codex/issues/34268)、[#34337](https://github.com/openai/codex/issues/34337)、[#22593](https://github.com/openai/codex/issues/22593)、[#41806](https://github.com/openai/codex/issues/41806) | **多条独立报告**指向会话语义压缩复用、分叉 DAG、过期会话清理缺失，需求从“修 bug”上升到“重新设计存储结构”。 |
| **GPT-6-Astra 模型生态** | [#42607](https://github.com/openai/codex/pull/42607)、[#42619](https://github.com/openai/codex/pull/42619) 等 | 模型由“隐藏可用 → 默认目录 → 跨平台 Bedrock”三步铺开，社区关注 Fast 档语义与上游一致。 |
| **TUI 编辑体验** | [#11626](https://github.com/openai/codex/issues/11626)、[#2379](https://github.com/openai/codex/issues/2379) | `/rewind` 双向恢复 + 输入文本 Undo/Redo 是呼声最高的可用性补全。 |
| **Windows 平台稳定性** | [#41049](https://github.com/openai/codex/issues/41049)、[#41290](https://github.com/openai/codex/issues/41290)、[#41463](https://github.com/openai/codex/issues/41463)、[#41960](https://github.com/openai/codex/issues/41960)、[#41822](https://github.com/openai/codex/issues/41822)、[#41539](https://github.com/openai/codex/issues/41539)、[#39781](https://github.com/openai/codex/issues/39781) | 集中于 WSL/MSIX/Schannel/启动门控/Pets 等，**Windows 路径治理仍是平台化短板**。 |
| **多模态/RTC** | [#39549](https://github.com/openai/codex/issues/39549)、[#39986](https://github.com/openai/codex/issues/39986)、[#36234](https://github.com/openai/codex/issues/36234) | Realtime Voice 上下文丢失、可视化版本 live-disabled 变体未注册原生路径。 |
| **CLI 可观测性** | [#42483](https://github.com/openai/codex/issues/42483)、[#41847](https://github.com/openai/codex/issues/41847) | 0.153.0 分页 thread resume 挂起、0.151.0 OAuth 失败，CLI 状态机需更鲁棒。 |

---

## 6. 开发者关注点

- **存储失控是头号痛点**：多名用户报告 `~/.codex` 或 `$CODEX_HOME/sessions` 在数周内从 GB 级跳到 100+ GiB；根因直指 compaction 重新嵌入完整 `replacement_history`、fork 全量复制、归档永不清理。这是一条**横跨多个版本的长期技术债**，[#34337](https://github.com/openai/codex/issues/34337) / [#34268](https://github.com/openai/codex/issues/34268) / [#22593](https://github.com/openai/codex/issues/22593) / [#41806](https://github.com/openai/codex/issues/41806) 形成证据链。
- **Windows 上“MSIX 首次启动”链路过长**：平均 8–12 分钟，源自 update-policy gate + `cua_node` 运行时反复重提取（[#41822](https://github.com/openai/codex/issues/41822)、[#41539](https://github.com/openai/codex/issues/41539)），直接影响企业/批量部署。
- **CLI 状态机边界模糊**：0.153.0 在 macOS 上 `resume/fork` 因 `inProgress` 残留挂起（[#42483](https://github.com/openai/codex/issues/42483)），配合 0.151.0 的 OAuth 失败（[#41847](https://github.com/openai/codex/issues/41847)）反映出无锁/崩溃恢复链路需要更强的容错。
- **TUI 体验进入“补齐短板”阶段**：撤销历史、citation 链接化、覆盖层恢复、启动告警整合（[#42641](https://github.com/openai/codex/pull/42641)、[#42650](https://github.com/openai/codex/pull/42650)、[#42609](https://github.com/openai/codex/pull/42609)）等 PR 显示团队在打磨细节 UX。
- **GPT-6-Astra 走“静默下沉”路线**：默认隐藏、未进 picker、但通过 API 与 Bedrock 暴露，**面向分销/集成商**而非终端用户，社区关注其 Fast 档语义是否准确（[#42632](https://github.com/openai/codex/pull/42632)）。
- **Worktree/Attachments 模块化**：#42652 与 #42634 把工作目录与附件存储从单体里抽出来，是迈向更稳健多会话/多代理架构的早期信号。

---

> 订阅/反馈：所有条目均整理自 [openai/codex](https://github.com/openai/codex) 的 Issues、Pull Requests 与 Releases，建议持续跟进 0.154 主线释放日志。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

📅 **2026-09-04** | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日速览

今日主线围绕**安全加固与 Agent 可靠性**展开：v0.60.0 nightly 版本发布，重点修复 MCP OAuth 的 RFC 9207 颁发者校验；社区侧高度关注 Subagent 在 MAX_TURNS 截断时错误地报告 GOAL 成功 (#22323)，以及 Generalist Agent 在简单任务上严重卡死 (#21409, 👍8)。同时，**Auto Memory 系统**与**Windows 沙箱安全**两条线集中爆发了一批高优先级问题与修复。

---

## 2. 版本发布

### 🚀 v0.60.0-nightly.20260904.g87a9c71d5

- **安全修复**：在 MCP OAuth 流程中强制执行 [RFC 9207](https://www.rfc-editor.org/rfc/rfc9207) 颁发者身份校验，防止 issuer 混淆攻击。([PR #29117](https://github.com/google-gemini/gemini-cli/pull/29117))
- 自动化版本号递增。([PR #29196](https://github.com/google-gemini/gemini-cli/pull/29196))

> 💡 建议生产用户暂留 stable 通道，等待 RFC 9207 相关回归验证完成。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 在 MAX_TURNS 后被错误标记为 GOAL 成功** | 💬13 👍2 | **P1 Bug** — `codebase_investigator` 命中回合上限却仍报 `success`，掩盖了中断，误导用户和上层调度。已标 `need-retesting`，是 Agent 观测性最关键的一环。 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **Zero-Dependency OS 沙箱 + 后置意图路由** | 💬9 👍1 | **P2 增强** — 利用 Gemini 3 的原生 bash 倾向，把 `grep/sed/awk` 组合的"零依赖代码探索"能力与 OS 级沙箱融合，是后续 Agent 路线图的核心。 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist Agent 永久挂起** | 💬8 👍8 | **P1 Bug** — 点赞比高达 1:1，是今日社区**情绪最强烈**的反馈。简单建文件夹也会挂一小时，仅靠禁用 sub-agent 规避。 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知文件读取/搜索/映射评估** | 💬7 👍1 | **P2 EPIC** — 用 AST 工具替代"firehose 式"读文件，目标是把单次读取的 token 与回合开销显著下降。 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 极少主动调用自定义 skills 和 sub-agents** | 💬6 | **P1 Bug** — 用户需要显式提示模型才用 skills/sub-agents，反映出**意图路由/工具选择**链路存在系统性偏置。 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 增加确定性脱敏并降低日志** | 💬5 | **P2 安全** — Auto Memory 把本地会话内容发到模型做提取，secret 依赖 prompt 脱敏属于"事后清洗"。 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 命令完成后卡在 "Waiting input"** | 💬4 👍3 | **P1 Bug** — 影响极广，连无 stdin 的命令都会触发，复现门槛低，强烈影响日常使用。 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) **Browser Agent 会话接管与锁恢复** | 💬4 | **P3 特性** — `BrowserManager` 当前的"fail-fast"策略对 `persistent` 会话与孤儿进程不友好，需要自动接管。 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **Browser Subagent 在 Wayland 下失败** | 💬4 👍1 | **P1 Bug** — Linux Wayland 用户目前基本无法使用 Browser Agent，阻塞 Linux 桌面开发者。 |
| 10 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) **工具数量 >128 时触发 400** | 💬3 | **P2 Bug** — MCP/扩展生态扩张后，工具表过大直接硬撞上游 API 限制。需要智能裁剪作用域。 |

> 附：**Auto Memory 质量改进**形成了小型专题簇 (#26522/#26523/#26516)，涉及补丁静默丢弃、低信号会话无限重试等，建议持续关注。

---

## 4. 重要 PR 进展（Top 10）

### 🛡️ 安全方向
- [#29184](https://github.com/google-gemini/gemini-cli/pull/29184) — **Windows 沙箱校验 git 参数**，封堵 `git diff --output=` 在非 YOLO 模式下静默写入的提权漏洞。
- [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) — **系统级配置文件强制 ACL/属主检查**（POSIX + Windows）。
- [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) — **跨 POSIX/Windows 增强 workspace 边界检查与 symlink 解析**。
- [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) — **缓解 NTFS 8.3 短名（SFN）路径遍历**。
- [#29192](https://github.com/google-gemini/gemini-cli/pull/29192) — **`/chat delete` 路径穿越修复**，legacy raw tag 逃逸 checkpoints 目录。
- [#29158](https://github.com/google-gemini/gemini-cli/pull/29158) — **清除 chrome-devtools-mcp 中硬编码的 Google CrUX API Key**（已合并）。
- [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) — **扩展更新时引入环境变量变更的二次确认 + 净化运行时 env**。

### 🧠 模型与 Agent
- [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) — **新增 `gemini-3.8-flash` 为默认 Flash 模型**，并注册 3.5/3.6/3.7/3.8 全系常量与别名。
- [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) — **`read_file` 走 `FileSystemService`**，与 ACP 客户端的 `fs.readTextFile` 对齐。

### 🔧 稳定性 & 体验
- [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) — **修复 SSE 解析器在 EOF 无空行时丢弃 `finishReason`/usage**。
- [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) — **`/resume resume` 对非数组 history 的 checkpoint 优雅降级**，避免 `TypeError` 崩溃。

### ✅ 已合入
- [#28939](https://github.com/google-gemini/gemini-cli/pull/28939) — 修复"中断响应占位符被持久化"导致模型复读。
- [#28938](https://github.com/google-gemini/gemini-cli/pull/28938) — 修复 `GIT_CONFIG_*` 脱敏后键/值序号不一致。
- [#28930](https://github.com/google-gemini/gemini-cli/pull/28930) — 移除不安全的 `diff.external=''` override。

---

## 5. 功能需求趋势

将今日活跃 Issues 按主题聚合，可以读出 6 条清晰的需求主线：

1. **🛡️ 安全沙箱与权限模型** — 热度最高。`#19873`（OS 沙箱）、`#22672`（抑制破坏性命令）、`#29184/#29115/#29170/#29116`（Windows + POSIX 路径/ACL 边界）共同指向：用户希望 Gemini CLI 在保持模型自由度的同时，把"危险动作"锁在 OS 层。
2. **🧠 Agent 可观测性与可控性** — `#22323`（错误成功状态）、`#21409`（挂死）、`#21763`（Bug 报告缺 subagent 上下文）、`#22598`（`/chat share` 看 subagent 轨迹）反映出用户希望看到 Agent 的"内心戏"。
3. **🧩 AST 感知代码工具** — `#22745` + `#22746` 形成 EPIC，目标是用结构化读取替代大段 firehose，降低 token 与回合开销。
4. **🤖 Browser Agent 健壮性** — Wayland 兼容 (`#21983`)、`settings.json` 覆盖 (`#22267`)、会话接管 (`#22232`) 三连发，浏览器代理仍是用户最常用的扩展面。
5. **🧠 Auto Memory 体系化** — `#26525/#26523/#26522/#26516` 系列聚焦"脱敏—补丁校验—重试策略—质量追踪"全链路。
6. **📦 工具生态与模型表** — `#24246`（>128 工具 400 错误）和 `#29172`（Flash 模型升级）显示 MCP 扩展规模化与模型迭代速度都在逼迫 CLI 做更聪明的工具选择/路由。

---

## 6. 开发者关注点

综合 Issue 标题、摘要与评论，今日开发者社区最集中的痛点和高频诉求如下：

- **🔴 Agent 卡死 / 假成功**：`#21409`（Generalist 挂死）、`#22323`（MAX_TURNS 误报 GOAL）是今日**优先级最高的两条**反馈，开发者明确表示"无法信任当前 sub-agent 的退出码"，需要稳定的终止语义与超时机制。
- **🔴 Shell 交互 UX 退化**：`#25166`（"Waiting input" 卡死）、`#22465`（Vite 交互式提示挂住）、`#23571`（模型到处写 tmp 脚本）反映 shell 执行层的鲁棒性不足，影响最日常的 CLI 使用。
- **🟡 工具与 sub-agent 调度偏置**：`#21968` 直指"模型不会主动用 skills/sub-agents"，是体验上的最大落差之一。
- **🟡 安全焦虑上升**：Auto Memory 读取本地 transcript、扩展偷偷注入环境变量、Windows 下 git 的写文件绕过 — 多个独立报告都在指向"信任边界"问题。
- **🟢 跨平台完整性**：Windows 长路径、NTFS 8.3 短名、Wayland 兼容等问题集中出现，社区希望 Windows/Linux 桌面用户与 macOS 用户享有同等体验。
- **🟢 性能与 token 经济性**：AST 工具 (#22745) 与 Tactful Extraction (#19561) 都是"少读、精读"，目标是把每次回合的 36.6k token 基线压下来。

---

> 📌 **TL;DR**：今日 = **安全补丁密集合并 + Agent 可观测性诉求爆发 + Auto Memory 体系化建设**。建议关注 #22323 / #21409 / #19873 三条主线，并在 PR #29172 落地后评估默认模型切换对工作流的影响。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**📅 2026-09-04**

---

## 🔥 今日速览

今日 Copilot CLI 发布 **v1.0.83-4** 版本，重点引入 **MCP OAuth 的 Client ID Metadata Document (CIMD)** 支持，并优化了中断会话恢复提示的默认行为与大型会话恢复的响应速度。社区方面，MCP 协议兼容性问题、Windows 平台权限与会话恢复体验成为两大焦点，同时开发者对 **Auto 模式模型池配置** 和 **System Prompt 参数** 等高阶定制能力呼声持续走高。

---

## 📦 版本发布

### [v1.0.83-4](https://github.com/github/copilot-cli/releases/tag/v1.0.83-4)

**新增 (Added)**
- **CIMD 支持**：为 MCP OAuth 登录流程增加 Client ID Metadata Document 支持，简化 OAuth 客户端身份注册流程。

**改进 (Improved)**
- CLI 启动时默认不再弹出"是否恢复中断会话"的提示，减少交互摩擦。
- 恢复大型会话时，输入提示的响应速度明显提升。

**修复 (Fixed)**
- 沙箱模式下，文件工具现在与开发者工具读取一致的文件内容（修复条目被截断）。

---

## 📌 社区热点 Issues

### 🔴 高需求 / 高互动

**1. [#4218 允许用户配置 Auto 模式使用的模型池](https://github.com/github/copilot-cli/issues/4218)** · 👍13
- Auto 模式目前自动从用户所有可用模型中挑选，但用户无法限制候选范围，导致成本与行为难以预测。**13 个 👍** 反映出企业用户对成本可控性的强烈诉求。

**2. [#232 添加 System Prompt 参数](https://github.com/github/copilot-cli/issues/232)** · 👍10
- 长期高呼声需求：除了仓库级指令文件外，希望通过 `--system-prompt` 直接传入系统级指令，**累计 10 个 👍**，影响工作流灵活度。

**3. [#3442 v1.0.51 远程会话未启用（已 CLOSED）](https://github.com/github/copilot-cli/issues/3442)** · 👍10 · 💬6
- 企业用户在尝试 `/remote on` 后收到"远程会话未启用"的提示。已关闭，**10 个 👍** 反映该问题在企业用户群中影响面较广。

**4. [#4525 MCP 双重初始化导致 -32022 错误](https://github.com/github/copilot-cli/issues/4525)** · 👍3 · 💬6
- CLI 1.0.81-1 在成功执行现代 `server/discover` 后又发送旧版 `initialize`，与 Python MCP SDK 2.0.0 双向协议运行器不兼容，引发协议错误。评论最多，热度较高。

**5. [#2861 Opus 4.6 上手动 /compact 连续三次失败](https://github.com/github/copilot-cli/issues/2861)** · 👍4 · 💬5
- 在 Claude Opus 4.6 模型上使用 `/compact` 命令连续三次返回"空响应"错误，暴露上下文压缩功能在特定模型下的稳定性问题。

**6. [#4695 MCP HTTP OAuth 令牌跨会话无法可靠复用](https://github.com/github/copilot-cli/issues/4695)** · 💬5
- PKCE 公网客户端配置下，CLI 频繁生成新的缓存键，导致需要反复重新认证 OAuth。**与今日发布的 CIMD 支持相关**，值得持续关注。

**7. [#4655 Agent Plugins 1.0 中自定义 Agent 未被发现](https://github.com/github/copilot-cli/issues/4655)** · 💬3
- 位于 `com.github.copilot/agents` 下的自定义 Agent 未被识别，与官方文档描述不符。插件生态标准化的核心问题。

**8. [#4680 CLI 向自定义 OpenAI 端点发送错误的模型 ID](https://github.com/github/copilot-cli/issues/4680)** · 💬3
- 配置非 OpenAI 模型名（如 `mimo-v2.5`）时，请求体中仍发送 `gpt-5.4-nano`，导致会话直接中断。影响所有 BYOK 用户。

**9. [#4683 PowerShell ConstrainedLanguage 模式下每次 shell 命令都报伪错误](https://github.com/github/copilot-cli/issues/4683)** · 💬2
- 在 AppLocker/WDAC 强企业环境中，CLI 注入的退出状态尾部代码 `$host.SetShouldExit()` 被拒绝，每次命令都产生红色错误块。**严重干扰 Windows 企业用户使用体验**。

**10. [#4717 大会话历史下扩展启动失败](https://github.com/github/copilot-cli/issues/4717)** · 🆕
- 当序列化事件历史超过 V8 字符串最大长度时，`joinSession()` 调用失败。属于今日新发 issue，与今日版本"大会话恢复性能优化"主题直接呼应。

---

## 🔧 重要 PR 进展

**⚠️ 过去 24 小时内仓库无 PR 更新活动。**

> 建议关注：上述 issues 中 [#4680](#4680)、[#4683](#4683)、[#4695](#4695) 等修复有望在下一批 PR 中得到解决，社区可主动贡献 patch。

---

## 📈 功能需求趋势

从近 24 小时的 issue 分布中，可清晰看到以下五大热门方向：

| 方向 | 代表 Issue | 热度信号 |
|------|-----------|----------|
| **🧠 模型与路由控制** | [#4218](https://github.com/github/copilot-cli/issues/4218), [#4703](https://github.com/github/copilot-cli/issues/4703), [#4680](https://github.com/github/copilot-cli/issues/4680) | 13+ 👍，多个并发 issue |
| **🔌 MCP 生态兼容性** | [#4525](https://github.com/github/copilot-cli/issues/4525), [#4695](https://github.com/github/copilot-cli/issues/4695), [#4655](https://github.com/github/copilot-cli/issues/4655) | 评论密集，OAuth/插件协议双重痛点 |
| **🪟 Windows 平台体验** | [#4683](https://github.com/github/copilot-cli/issues/4683), [#4702](https://github.com/github/copilot-cli/issues/4702), [#4701](https://github.com/github/copilot-cli/issues/4701) | 路径分隔符、PowerShell、权限提示三连击 |
| **📚 会话管理与可发现性** | [#4714](https://github.com/github/copilot-cli/issues/4714), [#4704](https://github.com/github/copilot-cli/issues/4704), [#4717](https://github.com/github/copilot-cli/issues/4717) | 加载 UI、按 cwd 过滤、大会话启动失败 |
| **⚙️ 高阶定制与可观测性** | [#232](https://github.com/github/copilot-cli/issues/232), [#4700](https://github.com/github/copilot-cli/issues/4700), [#4712](https://github.com/github/copilot-cli/issues/4712) | System Prompt、ACP 模式配置、/usage 文档 |

---

## 🛠️ 开发者关注点

综合最新 issue，开发者的反馈可归纳为三大核心痛点：

### 1. **"自动模式不够可控"** 🤖
- Auto 模式对模型选择、成本、行为完全不可见。开发者希望能够：
  - 指定 Auto 候选模型池（[#4218](https://github.com/github/copilot-cli/issues/4218)）
  - 在同一会话内为不同 Agent 配置不同模型端点（[#4703](https://github.com/github/copilot-cli/issues/4703)）
  - BYOK 场景下模型 ID 透传正确（[#4680](https://github.com/github/copilot-cli/issues/4680)）

### 2. **"MCP 集成仍是半成品"** 🔌
- 协议握手不一致（[#4525](https://github.com/github/copilot-cli/issues/4525)）
- OAuth 令牌缓存复用失败，频繁重新认证（[#4695](https://github.com/github/copilot-cli/issues/4695)）
- 插件自定义 Agent 发现不符合官方文档（[#4655](https://github.com/github/copilot-cli/issues/4655)）
- 今日版本新增 CIMD 支持是积极信号，但仍有较大完善空间。

### 3. **"大型会话和长时间运行的稳定性"** ⏳
- 会话恢复慢、无加载提示（[#4714](https://github.com/github/copilot-cli/issues/4714)）
- 大事件历史下扩展无法启动（[#4717](https://github.com/github/copilot-cli/issues/4717)）
- 后台线程失控消耗 CPU 与磁盘（[#4710](https://github.com/github/copilot-cli/issues/4710)）
- allow-all 模式在长时间空闲后被重置（[#4696](https://github.com/github/copilot-cli/issues/4696)）
- 子 Agent 无法访问主 Agent 已安装的 skill（[#4708](https://github.com/github/copilot-cli/issues/4708)）

> 💡 **观察**：本次 v1.0.83-4 已对"会话恢复体验"做出回应（默认跳过恢复提示 + 加快大会话恢复响应），开发者后续可重点验证改进效果。

---

*报告基于 github.com/github/copilot-cli 公开数据生成 · 统计窗口：2026-09-03 ~ 2026-09-04*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-09-04
**数据范围**: 过去 24 小时 GitHub 活动
**仓库**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 1. 今日速览

今日社区活动以**历史 Issue 集中关闭**为主，共 7 个 Issue 完成状态更新（其中 6 个已 CLOSED，1 个 OPEN），另有关于 Kimi Provider 的 1 个 PR 被关闭。值得关注的是 **#2633**（ACP auth gate 阻塞自定义 provider）这一新提出的开放问题，揭示了 1.17 版本在认证层引入的破坏性变更，影响使用自定义模型提供方的开发者。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 重要性 |
|---|------|------|--------|
| [#2633](https://github.com/MoonshotAI/kimi-cli/issues/2633) | ACP auth gate (1.17+) blocks custom providers that don't need a Kimi account | 🟢 OPEN | ⭐⭐⭐ |
| [#290](https://github.com/MoonshotAI/kimi-cli/issues/290) | Use openrouter with custom model returns 401 | 🔴 CLOSED | ⭐⭐ |
| [#1293](https://github.com/MoonshotAI/kimi-cli/issues/1293) | Unable to communicate when using Kimi CLI on a remote SSH server | 🔴 CLOSED | ⭐⭐ |
| [#1311](https://github.com/MoonshotAI/kimi-cli/issues/1311) | Hope to add an undo function | 🔴 CLOSED | ⭐⭐ |
| [#1310](https://github.com/MoonshotAI/kimi-cli/issues/1310) | Inline Mermaid diagrams in webui | 🔴 CLOSED | ⭐⭐ |
| [#1309](https://github.com/MoonshotAI/kimi-cli/issues/1309) | Optional Openclaw-like features | 🔴 CLOSED | ⭐ |
| [#1307](https://github.com/MoonshotAI/kimi-cli/issues/1307) | `--agent-file` for 'kimi web' as in the 'kimi' | 🔴 CLOSED | ⭐⭐ |

### 重点解读

- **#2633（开放，最关键）**：1.17 版本开始 ACP server 在 `session/new`、`session/load`、`session/resume`、`session/prompt` 等核心路径上强制要求 Kimi 账号 OAuth token（`_check_auth` 函数），导致使用 OpenRouter、自建网关等自定义 provider 的用户被阻断。此问题刚刚创建，热度尚低但**影响范围明确**，预计将快速获得关注。

- **#290**：长期存在的 OpenRouter 自定义模型返回 401 问题，社区此前反馈较多，今日终于关闭，建议关注修复 commit。

- **#1293**：远程 SSH 无图形/无法修改 DNS 场景下的交互故障，对服务器端开发者和 DevOps 用户是关键痛点。

- **#1311**：用户参考 opencode 提出 undo 功能需求，体现社区对**操作可逆性**的重视。

- **#1310**：WebUI 中内嵌渲染 Mermaid 图表，作者已附上效果截图，需求清晰。

- **#1309**：提出 heartbeat、cron、memories 等代理能力，建议借鉴 `HKUDS/nanobot`。

- **#1307**：要求为 `kimi web` 子命令补齐 `--agent-file` 参数，作者已**自行提交实现 PR**，是高质量社区贡献典型。

---

## 4. 重要 PR 进展

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#2332](https://github.com/MoonshotAI/kimi-cli/pull/2332) | fix(kimi): clamp completion budget dynamically | 🔴 CLOSED | 移除 provider 硬编码 `max_tokens = 32000`，改为基于当前 context window 动态计算 `max_completion_tokens` |

### 解读

PR #2332 解决了 Kimi provider 路径下"完成预算"硬编码导致的长上下文场景下输出被截断问题，是一项**底层 token 预算调度优化**。该 PR 在过去 24 小时内被关闭（merge 或关闭原因需进一步确认），建议关注是否进入 1.18 候选版本。

---

## 5. 功能需求趋势

从今日更新的 Issue 摘要中，可提炼出以下社区关注的功能方向：

| 方向 | 代表 Issue | 趋势强度 |
|------|-----------|---------|
| **多 Provider / 自定义模型支持** | #2633, #290 | 🔥🔥🔥 |
| **远程/无 GUI 环境适配** | #1293 | 🔥🔥 |
| **WebUI 体验增强** | #1310 (Mermaid), #1307 (agent-file) | 🔥🔥 |
| **代理能力扩展（heartbeat / cron / memory）** | #1309 | 🔥 |
| **操作安全与可逆性（undo）** | #1311 | 🔥 |
| **底层 token 调度** | PR #2332 | 🔥（内部） |

---

## 6. 开发者关注点

综合今日 Issue 反馈，开发者社区的**高频痛点与诉求**可归纳为：

1. **自定义 Provider 的兼容性与认证灵活性**
   - 多位开发者使用 OpenRouter、自建网关等非 Kimi 原生渠道，1.17 版本的强制 OAuth 检查（#2633）引发了广泛关注。建议官方提供"匿名 / 自定义 provider"模式开关。

2. **远程开发场景的稳定性**
   - SSH 无图形环境、无法修改 DNS 的场景下 CLI 交互异常（#1293），需优化网络层回退策略。

3. **WebUI 功能对齐 CLI 子命令**
   - `kimi web` 与 `kimi` 子命令参数不对齐（#1307）让习惯用 web 的开发者感到割裂，社区更倾向**贡献代码直接补齐**而非等待官方。

4. **Agent 长期运行能力**
   - heartbeat、cron、memories 等能力（#1309）反映开发者希望 CLI 不只是"单次问答工具"，而是可持续运行的代理。

5. **底层性能调优**
   - PR #2332 显示社区已开始关注 token budget 动态调整等**精细化性能优化**，对长上下文场景尤为关键。

---

> 📌 **编辑建议**：建议社区维护者重点响应 **#2633**，因该问题关系到 1.17 版本自定义 provider 的可用性，影响面广；同时 PR #2332 落地后可纳入下个版本发布说明。
>
> 📎 报告生成时间：2026-09-04 | 数据源：[github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-04**

---

## 📌 今日速览

OpenCode 今日无版本发布，社区热度集中在 **Ctrl+C 终端快捷键冲突**（多条相关 Issue 累计评论超 90 条，点赞 80+），这一长期 UX 问题仍在等待官方方案。与此同时，**后台任务执行（background shell/subagent）与浏览器自动化** 成为新一波 PR 焦点，多个相关功能进入合并流程。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 👍 | 评论 | 重要性 |
|---|------|------|----|----|--------|
| [#7957](https://github.com/anomalyco/opencode/issues/7957) | **Ctrl+C 退出与复制快捷键冲突** | OPEN | **53** | 18 | 全期最高点赞，反映 Windows/Linux 用户长期痛点 |
| [#2999](https://github.com/anomalyco/opencode/issues/2999) | **提供禁用 Ctrl+C 的选项** | OPEN | 27 | **38** | 评论数最高，多终端适配需求迫切 |
| [#29059](https://github.com/anomalyco/opencode/issues/29059) | 动态工作流（Dynamic workflows） | CLOSED | 22 | 17 | 类 Claude Code 自动化能力，社区高期待 |
| [#13626](https://github.com/anomalyco/opencode/issues/13626) | Web UI 项目从服务器自动同步 | OPEN | 16 | 16 | 跨设备体验关键需求 |
| [#17994](https://github.com/anomalyco/opencode/issues/17994) | 多代理隔离工作区编排 | CLOSED | 2 | 24 | AI Team 模式核心场景，深度讨论 |
| [#31348](https://github.com/anomalyco/opencode/issues/31348) | GLM-5.1 prompt cache 随机归零 | CLOSED | 7 | 7 | 模型稳定性与成本控制问题 |
| [#28566](https://github.com/anomalyco/opencode/issues/28566) | OpenRouter service_tiers 支持 | CLOSED | 2 | 7 | 成本优化方向 |
| [#29210](https://github.com/anomalyco/opencode/issues/29210) | WSL 上 npm install 语法错误 | CLOSED | 0 | 6 | Linux 开发者安装障碍 |
| [#34117](https://github.com/anomalyco/opencode/issues/34117) | v1.17.11 Nix 构建锁文件过期 | CLOSED | 4 | 4 | 影响 NixOS 用户构建 |
| [#44160](https://github.com/anomalyco/opencode/issues/44160) | Desktop deep link 无法创建会话 | OPEN | 0 | 4 | 桌面端集成缺陷 |

> **亮点**：Ctrl+C 相关议题仍是社区头号痛点；多代理编排与工作流自动化构成第二关注焦点。

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 价值 |
|---|------|------|------|
| [#46530](https://github.com/anomalyco/opencode/pull/46530) | **插件暴露权限断言（permission assertions）** | OPEN | 插件生态权限体系补全，覆盖 URL、文件、目录访问校验 |
| [#44838](https://github.com/anomalyco/opencode/pull/44838) | **Desktop 浏览器多标签 + Chromium 诊断** | OPEN | Review 面板内置浏览器调试能力，含输入、快照、跨域检查 |
| [#46531](https://github.com/anomalyco/opencode/pull/46531) | **浏览器公共 API 插件（44 个 Code Mode 方法）** | OPEN | `@opencode-ai/plugin-browser` 独立包，外部客户端可复用 |
| [#47193](https://github.com/anomalyco/opencode/pull/47193) | **持久化心跳监控（durable heartbeat）** | OPEN | 长时命令调度策略持久化，启动恢复、Web 时间线卡片化 |
| [#47187](https://github.com/anomalyco/opencode/pull/47187) | **shell 工具 `run_in_background` + 自动通知** | OPEN | 解决 dev server/watch/test 阻塞会话的痛点 |
| [#47186](https://github.com/anomalyco/opencode/pull/47186) | **Tasks Tab：后台子代理 + shell 任务可视化** | CLOSED | Session 侧栏新增实时任务面板 |
| [#46395](https://github.com/anomalyco/opencode/pull/46395) | **非 Git 项目快照撤销恢复** | CLOSED | Claude Code 式 rewind 能力扩展到无 Git 工程 |
| [#43165](https://github.com/anomalyco/opencode/pull/43165) | **LLM 消息记录器（experimental.log_messages）** | OPEN | 调试与可观测性增强 |
| [#47181](https://github.com/anomalyco/opencode/pull/47181) | **LSP 解析嵌套 TypeScript 子项目** | OPEN | 一次性解决 #47174、#35396、#18694、#40413 |
| [#31834](https://github.com/anomalyco/opencode/pull/31834) | **ACP 协议从 todowrite 发出 plan 更新** | OPEN | 修复计划渲染，与 Claude Code 行为对齐 |

> **趋势**：本日合入的 PR 集中在 **背景任务可视化**、**UX 微调**、**构建问题修复**；未合入但值得关注的是 **浏览器插件体系** 与 **shell 后台化**，二者或将重塑 OpenCode 自动化边界。

---

## 📈 功能需求趋势

从近 24 小时高活跃 Issue 提炼，社区最关注的方向：

1. **多代理编排 / 工作流自动化** — 动态工作流（#29059）、隔离工作区（#17994）、Task 工具模型参数（#26925）三连发
2. **后台与异步执行** — shell 后台运行、tasks UI、长任务心跳监控同步推进
3. **浏览器与外部集成能力** — 浏览器多标签、Code Mode API、ACP 协议支持
4. **成本与模型控制** — OpenRouter service tiers（#28566）、多模型选择（#26925）、缓存稳定性（#31348）
5. **跨端同步 / 桌面增强** — Web 项目自动同步（#13626）、Desktop deep link（#44160）
6. **文档与可观测性** — OTEL 环境变量文档（#47195/#35394）、消息日志（#43165）
7. **构建与安装体验** — WSL（#29210）、Nix（#34117、#34235）、Homebrew tap（#32072）

---

## 💡 开发者关注点（高频痛点）

- **终端快捷键冲突**：Ctrl+C 误退仍是 Windows 用户头号问题，呼声贯穿近一年
- **安装与构建脆弱性**：WSL、Nix、Homebrew tap 三类环境均出现稳定性问题
- **模型缓存抖动**：GLM-5.1 等新模型在 opencode-go 上 cache 命中率不稳，成本不可预测
- **后台任务盲区**：长命令阻塞 turn，`nohup &` 又丢失输出，亟需一等公民级方案
- **权限粒度不足**：`permission.edit` 未生效（#33677）、聊天消息无法拦截（#30434），安全边界待完善
- **V2 插件 API 缺口**：v1→v2 迁移中部分 session API 未暴露（#35443）
- **桌面端细节**：渲染崩溃（#35493）、项目重命名串扰（#35441）、配置无效时静默回滚（#35419）

---

**日报小结**：今天的 OpenCode 社区是"小修小补日 + 大方向预热"——一批 UX 与构建补丁快速合入，而后台任务、浏览器插件、心跳监控等结构性功能正在 PR 队列中蓄力。Ctrl+C 这一历史包袱的解决，仍是社区最迫切的期待。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-04

## 📌 今日速览

过去 24 小时内仓库无新版本发布，但社区活跃度显著——50 条 Issue 与 50 条 PR 集中更新，多个长期存在的渲染性能问题（TUI markdown 重渲染、EventStream 队列入队）与模型兼容性 bug（zai/GLM 思维泄漏、DeepSeek 签名膨胀、混合模型 thought signature 损坏）得到关闭或修复。同时 mitsuhiko 提交的 **system prompt 动态重构** PR (#8998) 是本周期最具影响力的设计变更。

---

## 🏷️ 版本发布

过去 24 小时无新 Release。当前公开版本仍为 `@earendil-works/pi-ai@0.84.4` 与 `pi-mono` 同版本基线。

---

## 🔥 社区热点 Issues

1. **[#5023](https://github.com/earendil-works/pi/issues/5023) 终端随机跳转到会话开头（18 评论，3 👍）**
 长期高频反馈：模型工作过程中终端无故回滚至 buffer 开头再快速滚到底部，影响阅读体验。本轮已 CLOSED，应已合入修复。

2. **[#8845](https://github.com/earendil-works/pi/issues/8845) `/tree` 分支摘要确定性失败（14 评论）**
 `generateBranchSummary` 硬编码 `maxTokens: 2048`，导致大分支必然触发"token cap 截断"错误。反映会话摘要调用缺乏可配置上下文预算。

3. **[#8061](https://github.com/earendil-works/pi/issues/8061) Context budget 忽略 maxTokens 输出预留（6 评论，2 👍，仍 OPEN）**
 Gemini 类 1M 上下文窗口下，输入仅 78% 时仍被提供商拒绝，且压缩重试也失败。**仍未关闭**，属于 critical 级缺陷。

4. **[#4861](https://github.com/earendil-works/pi/issues/4861) 通用 TUI viewport 原语（7 评论）**
 提议开放 `tui` 包根级 viewport 配置，使扩展可调整视图尺寸（如大屏加侧边缓冲居中输出）。

5. **[#9076](https://github.com/earendil-works/pi/issues/9076) gemini-3.8-flash 缺失（3 评论）**
 Google 模型目录缺少 `gemini-3.8-flash`，且 `@earendil-works/pi-ai@0.84.4` 未发布对应类型，反映模型目录同步滞后。

6. **[#8810](https://github.com/earendil-works/pi/issues/8810) 扩展注册 provider 的默认模型被静默覆盖（3 评论，仍 OPEN）**
 通过 `pi.registerProvider()` 注册的 provider 在新会话中不稳定地忽略 `defaultProvider/defaultModel` 设置，落到其他 provider 的默认值上。

7. **[#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` 文档与行为不符（3 评论，仍 OPEN）**
 文档说仅禁用启动期网络操作，实际禁用整个会话内 provider 模型发现，影响离线/受限网络用户。

8. **[#8706](https://github.com/earendil-works/pi/issues/8706) zai (GLM) 强制思维模型泄漏 reasoning（3 评论，仍 OPEN）**
 关闭 thinking 后，zai thinking 分支仍无条件发送 `thinking` 字段，原始推理被拼入回答正文。

9. **[#9055](https://github.com/earendil-works/pi/issues/9055) EventStream 出队复杂度 O(n²)（3 评论）**
 长会话服务进程模型事件缓冲用 `shift()` 出队，生产者领先消费者时每 dequeue 都需移动数组元素，主张替换为 O(1) 队列。

10. **[#9097](https://github.com/earendil-works/pi/issues/9097) DeepSeek/OpenRouter 持久化冗余 thinkingSignature（2 评论）**
    每个 `thinking` 块都存储完整签名流，多日会话膨胀至 4.5MB 并超过 provider 上下文上限。

---

## 🛠️ 重要 PR 进展

1. **[#8998](https://github.com/earendil-works/pi/pull/8998) System prompt 动态重构（mitsuhiko，OPEN，Draft）**
 本周期最重要设计变更：支持 system prompt 部分更新，coding agent 能在不擦除会话的前提下发出中途更新，让动态 system/tool 修改真正可用。

2. **[#9096](https://github.com/earendil-works/pi/pull/9096) 新增 Meta provider（Muse OAuth 订阅）**
 解决 #7543。Meta Muse 订阅接入 OAuth，特点是 identity token 每日刷新、流式输出为"伪流式"（整段突发）。

3. **[#9084](https://github.com/earendil-works/pi/pull/9084) `pi update` 支持源码 checkout 自更新**
 修复源码安装用户无法通过命令自更新的问题，自动化执行 `git pull --rebase`、`npm ci` 等流程。

4. **[#9081](https://github.com/earendil-works/pi/pull/9081) `registerProvider` apiKey 支持函数**
 解决 #9079：apiKey 现在可为函数，在请求时解析插件自身 auth 文件，避免"未找到 API key"误报。

5. **[#9087](https://github.com/earendil-works/pi/pull/9087) 动态模型 API 不匹配时快速失败**
 修复 #9087 类问题：OpenRouter `anthropic/claude-opus-5` 等路由失败时不再回吐整页 HTML 404。

6. **[#9080](https://github.com/earendil-works/pi/pull/9080) TUI 新增 jump-to-latest 控件**
 基于 dgtlntv 进度，增加"跳到最新消息"快捷交互。

7. **[#8801](https://github.com/earendil-works/pi/pull/8801) Alt 模式美化滚动条**
 TUI 替代模式下滚动条视觉优化，附演示视频。

8. **[#8799](https://github.com/earendil-works/pi/pull/8799) "Working..." 指示器美化**
 spinner 进入输入框边框、匹配 thinking 等级颜色、正确处理重试态。

9. **[#8800](https://github.com/earendil-works/pi/pull/8800) TUI 搜索体验改进**
 `Ctrl+Shift+F` 开关搜索、`Esc` 关闭、Alt 模式下 UI 优化。

10. **[#9093](https://github.com/earendil-works/pi/pull/9093) 内置 xAI 模型目录移除 Grok Build 0.1**
    将 `grok-build-0.1` 加入 `XAI_BUILTIN_EXCLUDED_MODEL_IDS`，内置目录仅保留 grok-4.3/4.5/4.6。

---

## 📈 功能需求趋势

从 Issues/PR 池提炼的社区关注方向：

| 方向 | 代表条目 | 关注度 |
|------|----------|--------|
| **流式渲染性能** | #8822、#9055、#9052、#8800、#8801 | ⭐⭐⭐⭐⭐ |
| **新模型/Provider 接入** | #9096（Meta Muse）、#9076（gemini-3.8-flash）、#9093（xAI）、#9016（llama.cpp reasoning） | ⭐⭐⭐⭐⭐ |
| **上下文/Token 管理** | #8061、#8845、#9097、#9100 | ⭐⭐⭐⭐⭐ |
| **终端/TUI 可交互性** | #5023、#4839（OSC 8）、#5168、#4861 | ⭐⭐⭐⭐ |
| **离线/受限网络场景** | #8684（PI_OFFLINE）、#9081（插件 auth） | ⭐⭐⭐ |
| **动态 System Prompt / 扩展机制** | #8998（mitsuhiko 重构）、#8834（namespace）、#9071（同名工具） | ⭐⭐⭐⭐ |
| **Docker / 沙箱化文档** | #8788、#9077 | ⭐⭐⭐ |
| **更新与发布工程** | #9084（源码自更新）、#9078（版本同步）、#9070（musl 二进制） | ⭐⭐⭐ |

---

## 🎯 开发者关注点（高频痛点）

- **同步流式性能仍是头号痛点**：每条 delta 触发完整 markdown 渲染（#8822）、`EventStream.shift()` 出队（#9055）、tool-call 参数解析 O(N²)（#9062）、tool 行渲染重复 I/O（#9094）——开发者普遍要求避免在同步事件路径上做 O(n) 操作。

- **混合 provider 会话下的 thought signature 处理**：DeepSeek 经 OpenRouter、OpenAI-compat 经 Gemini/OpenRouter 混跑时，签名持久化膨胀（#9097）或被错误回放（#9100）导致 provider 报 `Corrupted thought signature`。

- **官方文档与实际行为的脱节**：`PI_OFFLINE` 范围（#8684）、plan-mode 工具清单描述（#9072、#9085）多次出现"文档说一套、代码做另一套"。

- **平台兼容性边界**：Windows CRLF 与 LLM 输出 LF 不匹配（#355）、Linux 平台 musl/glibc 二进制选错（#9033/9070）、signal 终止被记为成功（#8882/8994）——交叉平台可靠性仍是持续问题域。

- **扩展 API 边界与命名冲突**：同名工具注册未真正替换（#9071）、扩展 provider 默认值丢失（#8810）、插件 auth 文件被忽略（#9079/9081）——扩展机制日益成熟但仍暴露出"边缘情形多"的特征。

- **长会话"上下文失控"**：4.5MB 单 lane 会话（#9097）、context budget 不预留输出 token（#8061）、思维块过度持久化——开发者需要可配置的、会话级别的"剪枝/压缩策略"。

---

*数据口径：GitHub `earendil-works/pi-mono` 仓库，2026-09-03 至 2026-09-04 24 小时窗口内更新条目。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-04

> 数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)
> 采样窗口：2026-09-03 ~ 2026-09-04

---

## 1. 今日速览

**v0.23.0 发布遇阻，CI/发布链路集中暴露问题。** 昨日 v0.23.0 发布流程因 `integration_none` 作业失败而中断（[#10900](https://github.com/QwenLM/qwen-code/issues/10900)），自托管 ECS Runner 集群也呈"陈旧"状态（[#10911](https://github.com/QwenLM/qwen-code/issues/10911)）。与此同时，TUI 从 ink 迁移到 OpenTUI 的跟踪议题 [#8662](https://github.com/QwenLM/qwen-code/issues/8662) 仍是社区最高热度话题（28 条评论），后台 Agent View 会话管理（[#10942](https://github.com/QwenLM/qwen-code/pull/10942) ~ [#10954](https://github.com/QwenLM/qwen-code/pull/10954)）的四层 PR 栈也已就位，安全与性能类 P1 问题集中涌现。

---

## 2. 版本发布

### ⚠️ v0.23.0 — 发布失败

- 标签：[Release v0.23.0](https://github.com/QwenLM/qwen-code/releases)（通过 [#10900](https://github.com/QwenLM/qwen-code/issues/10900) 跟踪）
- **状态**：Release workflow 在 `integration_none` 任务失败，触发自动修复流程；同日自托管 ECS Runner 升级失败（[#10911](https://github.com/QwenLM/qwen-code/issues/10911)）。
- **变更要点**（来自 Release Notes）：
  - 分支选择器新增 git 状态提示：`↓3 · origin/main` / `Up to date`，紧邻 Update Project / Commit / Pull。
- **建议**：等待 Release workflow 重跑或由维护者手动 promote（[#10898](https://github.com/QwenLM/qwen-code/pull/10898) 提供了 promote_nightly 模式）。

---

## 3. 社区热点 Issues（Top 10）

| # | 标题 | 关键价值 |
|---|---|---|
| [#8662](https://github.com/QwenLM/qwen-code/issues/8662) | **TUI 渲染层 ink → OpenTUI 迁移（tracking）** | 28 评论最高热度。ink 7 + React 19 配合 1037 行 patch 带来闪烁/性能等结构性问题，是 Q3 终端 UX 路线图核心议题。 |
| [#10900](https://github.com/QwenLM/qwen-code/issues/10900) | **v0.23.0 发布失败** | `integration_none` 失败，关系到所有用户能否顺利升级。 |
| [#10911](https://github.com/QwenLM/qwen-code/issues/10911) | **ECS Runner 集群陈旧** | 自托管 runner 升级失败，整支 fleet 未安装任何 release。 |
| [#10065](https://github.com/QwenLM/qwen-code/issues/10065) | LM Studio 0.4.21 + Qwen3.6-35B-A3B grammar 解析失败 | 本地模型 + OpenAI 兼容协议的核心兼容性问题，影响无 MCP 场景下的纯工具调用。 |
| [#10162](https://github.com/QwenLM/qwen-code/issues/10162) | `qwen serve` ACP NDJSON 队列饱和时整通道被撕下 | Daemon 高负载下的降级策略，fail-closed 路径需改造为优雅降级。 |
| [#10908](https://github.com/QwenLM/qwen-code/issues/10908) | **CI 测试时间被模块导入成本支配** | `cli` workspace 2223s collect vs 1372s tests，性能瓶颈清晰可量化。 |
| [#10583](https://github.com/QwenLM/qwen-code/issues/10583) | Linux 平台引入 Bubblewrap 沙箱后端 | 替代 Docker/Podman 的轻量 OS 级隔离方案，Linux 用户高频需求。 |
| [#10953](https://github.com/QwenLM/qwen-code/issues/10953) | 子代理委托时 Todo 计划状态陈旧（55m44s 不刷新） | Subagent 工具链 + session 管理交叉问题，影响多代理协作体验。 |
| [#10936](https://github.com/QwenLM/qwen-code/issues/10936) | **DingTalk 渠道每次连接把 clientSecret / stream ticket 打到 stdout** | P1 安全问题，凭证明文泄露，影响所有 IM 集成场景。 |
| [#10887](https://github.com/QwenLM/qwen-code/issues/10887) | **工具错误死循环无早停，单会话消耗 5–14M tokens** | P1 性能/成本问题，0.20.1–0.21.0 全版本受影响。 |

---

## 4. 重要 PR 进展（Top 10）

| PR | 标题 | 要点 |
|---|---|---|
| [#10942](https://github.com/QwenLM/qwen-code/pull/10942) | `qwen sessions ps` 列出托管 Agent View 会话 | 栈位 1/4。让后台托管会话与交互式会话并列可见。 |
| [#10943](https://github.com/QwenLM/qwen-code/pull/10943) | `qwen --bg "<prompt>"` 启动后台 Agent View | 栈位 2/4。会话脱离启动 shell，输出 session id。 |
| [#10949](https://github.com/QwenLM/qwen-code/pull/10949) | `qwen sessions peek/answer/stop` 三件套 | 栈位 3/4。读取、应答、停止后台会话的完整 CLI。 |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | `GET /background-agents` 暴露监管中的后台会话 | 栈位 4/4。提供 JSON 视图的运行时状态接口。 |
| [#9402](https://github.com/QwenLM/qwen-code/pull/9402) | Agent Board — 跨独立启动代理共享工作 | 实现可移植的 Board 层，明确不做 `--owner` 寻址；为后续 Q2Q 流程奠基。 |
| [#10979](https://github.com/QwenLM/qwen-code/pull/10979) | VP 模式下单击打开 OSC 8 链接 | 直接呼应 #8662 的 OpenTUI 迁移，右键菜单提供 Open / Copy / 复制选区。 |
| [#10938](https://github.com/QwenLM/qwen-code/pull/10938) | Web Shell：Session Workflow 依赖可导航 + 面板精简 | 补完 #8583 后的导航/形态/Doc 缺口，Plan DAG 主显步骤而非状态。 |
| [#10962](https://github.com/QwenLM/qwen-code/pull/10962) | Web Shell 桥接浏览器授权的本机目录 | 解决远端 daemon（云盒/容器）下 agent 无法访问用户本地文件系统的问题。 |
| [#10913](https://github.com/QwenLM/qwen-code/pull/10913) | Provider-aware reasoning 控制解析器 | CLI 启动、模型切换、session 恢复、ACP、WebShell、OpenAI 兼容请求路径共享同一推理能力解析器。 |
| [#10957](https://github.com/QwenLM/qwen-code/pull/10957) | CLI 直接 import core 模块而非包根 | 直接回应 #10908 的 CI 时间瓶颈；包含 mock 调整与解析修复。 |

补充关注：
- [#10898](https://github.com/QwenLM/qwen-code/pull/10898) — `promote_nightly` 模式，fail-closed，可作为 #10900 的修复路径。
- [#10896](https://github.com/QwenLM/qwen-code/pull/10896) — 给 Routify 三个端点注入 `session_id` 请求头。
- [#10924](https://github.com/QwenLM/qwen-code/pull/10924) — Conversations 写入方强制 session lease，为放宽 standalone daemon 所有权做准备。

---

## 5. 功能需求趋势

将 50 条 Issues 去重归类后，社区关注焦点清晰可辨：

| 方向 | 占比 / 信号 | 代表 Issues |
|---|---|---|
| **终端 UX / TUI 现代化** | 跟踪议题 #8662 + VP 模式点击链接 #10979 形成产品-工程闭环 | [#8662](https://github.com/QwenLM/qwen-code/issues/8662), [#10979](https://github.com/QwenLM/qwen-code/pull/10979) |
| **后台 / Agent View 会话** | 4 层 PR 栈 + 2 个 issue 形成完整产品形态 | [#10942](https://github.com/QwenLM/qwen-code/pull/10942), [#10943](https://github.com/QwenLM/qwen-code/pull/10943), [#10949](https://github.com/QwenLM/qwen-code/pull/10949), [#10954](https://github.com/QwenLM/qwen-code/pull/10954) |
| **跨代理 / 跨会话协作** | Agent Board、Cross-session messaging、共享工作 | [#9402](https://github.com/QwenLM/qwen-code/pull/9402), [#10925](https://github.com/QwenLM/qwen-code/issues/10925) |
| **Web Shell 增强** | 浏览器桥接本地目录、Session Workflow 可视化、左侧 spinner | [#10962](https://github.com/QwenLM/qwen-code/pull/10962), [#10938](https://github.com/QwenLM/qwen-code/pull/10938), [#9645](https://github.com/QwenLM/qwen-code/issues/9645) |
| **沙箱 / 安全** | Bubblewrap 后端、命令执行配置键、凭证泄露 | [#10583](https://github.com/QwenLM/qwen-code/issues/10583), [#10561](https://github.com/QwenLM/qwen-code/issues/10561), [#10936](https://github.com/QwenLM/qwen-code/issues/10936) |
| **CI / 性能 / 成本** | 模块导入、测试超时、死循环 token 消耗 | [#10908](https://github.com/QwenLM/qwen-code/issues/10908), [#10904](https://github.com/QwenLM/qwen-code/issues/10904), [#10887](https://github.com/QwenLM/qwen-code/issues/10887) |
| **模型 / Provider 适配** | LM Studio grammar、Provider-aware reasoning、Token Plan ASR | [#10065](https://github.com/QwenLM/qwen-code/issues/10065), [#10913](https://github.com/QwenLM/qwen-code/pull/10913), [#10932](https://github.com/QwenLM/qwen-code/issues/10932) |
| **IM 渠道（钉钉/DWS）** | 消息前缀过滤、IM 流不互相阻塞 | [#10817](https://github.com/QwenLM/qwen-code/pull/10817), [#10950](https://github.com/QwenLM/qwen-code/issues/10950) |

---

## 6. 开发者关注点（高频痛点）

1. **Token 成本失控**：#10887 揭示死循环单会话烧掉 5–14M tokens，缺少"工具错误累积早停"机制，是 0.20.1+ 用户生产环境最大痛点。
2. **凭证与日志卫生**：#10936（钉钉 clientSecret 明文落 stdout）、#10791（`<thinking>` 内容泄漏）暴露出多个日志/输出管线的"明面"问题。
3. **Subagent 协作断点**：#10953 的 55m44s 不刷新、#10888 的 skill 硬约束被绕过，反映子代理委托时的状态机还有较大缺陷。
4. **CI 时间膨胀**：#10908 与 #10904 把矛头共同指向"测试调度之外"的成本——模块导入与 cron-fire 30s 超时是高频 flake 源。
5. **沙箱灵活性**：#10583 反映 Linux 用户对 Docker-only 沙箱的不满，bwrap 路径已被提出。
6. **Release 链路脆弱**：#10900 + #10911 同时失败说明发布与 runner 维护缺乏冗余，#10898 的 promote_nightly 模式正是为此而来。
7. **本地模型兼容**：#10065 体现"非官方 API"场景下 grammar 解析与工具调用的脆弱性，Provider-aware 能力（#10913）是回应方向。

---

> 💡 **编辑注**：v0.23.0 的发布波折恰逢 TUI 迁移与后台 Agent View 栈的关键节点，建议社区优先关注 OpenTUI 跟踪议题、Agent View PR 栈评审，以及 #10887（死循环早停）与 #10936（凭证泄漏）这两个 P1 安全/成本问题的修复进度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-09-04

> 数据源：GitHub `Hmbown/DeepSeek-TUI`（项目内仓库标识为 Codewhale）

---

## 一、今日速览

今天社区聚焦三件大事：**Codewhale 0.9.12 Fleet-only UX 集成 PR（#5862）正式合入**，整合 10 个切片奠定下一版本基调；**FEAT-019 记忆能力（#5833）落地**，补齐 TUI 记忆命令适配层；同时 **ACP（Agent Client Protocol）相关缺陷集中浮现** —— 围绕 `serve --acp` 的会话枚举/恢复与配置暴露问题，已成为外部编辑器客户端集成的关键阻塞点。

---

## 二、版本发布

过去 24 小时内**无新 Release 发布**。但里程碑 PR **#5862（Codewhale 0.9.12）已 CLOSED 合入**，意味着 0.9.12 RC 已具备发版条件，本轮集成内容：

- **Workbar 重构**：sidebar/rail 统一更名为 workbar，底部为默认位置，新增 `/workbar` 及别名
- **Underwater 主题默认化**：合并 `ocean_treatment` 到 `ThemeId::Underwater`，新增 deepsea 别名
- **Fleet-only 体验**：logo、hover 合约、设置重组、roles、retro 主题
- **Provider 与启动改造**：settings regroup 与启动流优化

建议关注仓库 Tags 以捕获正式 0.9.12 发版信号。

---

## 三、社区热点 Issues

> 过去 24h 仅 4 条 Issue 更新，其中 #5866 为站外引流内容（已剔除实质技术讨论），其余三条均为 ACP 集成与架构治理相关，重要性极高。

| # | 标题 | 重要性 | 社区反应 | 链接 |
|---|------|------|---------|-----|
| **#5316** | EPIC-005: CodeWhale TUI Crate Decomposition（Umbrella） | ⭐⭐⭐⭐⭐ 顶层 EPIC，统领所有子 EPIC 与 FEAT 的提交汇总，是当前 TUI 重构的"骨架"级追踪单 | 21 条评论、长期活跃，所有命令解耦 PR 的归宿 | [Issue #5316](https://github.com/Hmbown/Codewhale/issues/5316) |
| **#5863** | ACP Function Enhancement（modes / models / configOptions 缺失） | ⭐⭐⭐⭐⭐ `serve --acp` 未透出 session 配置，编辑器客户端无法展示/切换工作模式 —— 直接影响 ACP 生态可用性 | 2 条评论，刚开即被聚焦 | [Issue #5863](https://github.com/Hmbown/Codewhale/issues/5863) |
| **#5864** | `serve --acp` 未实现 `session/list` 与 `session/load` | ⭐⭐⭐⭐⭐ 客户端无法枚举或恢复已有会话，等于"半残"的 ACP server | 1 条评论，与 #5863 形成 ACP 缺陷对 | [Issue #5864](https://github.com/Hmbown/Codewhale/issues/5864) |
| **#5866** | Ophthalmology CPT & ICD-10 Updates for 2026 | ⚠️ 与本项目无关的站外 SEO 内容，建议忽略 | 1 条评论 | [Issue #5866](https://github.com/Hmbown/Codewhale/issues/5866) |

> 💡 **观察**：ACP 协议层缺陷在 24 小时内被两位不同贡献者（@Lujc0523、@senka9h）以高度对偶的方式同时提出，说明 ACP 集成已成为 0.9.12 之后最迫切的下一优先级。

---

## 四、重要 PR 进展

| # | 标题 | 状态 | 要点 | 链接 |
|---|------|------|------|------|
| **#5862** | Codewhale 0.9.12: Fleet-only UX 集成 | ✅ CLOSED | 整合 10 个切片（workbar、underwater 默认、hover、settings、logo、roles、retro），0.9.12 旗舰 PR | [PR #5862](https://github.com/Hmbown/Codewhale/pull/5862) |
| **#5833** | feat(memory): FEAT-019 memory capability / facet / typed outcomes | ✅ CLOSED | 新增 `CommandCapabilities::MEMORY` 位与 `CommandMemoryContext` 分面，TUI 记忆适配器覆盖 search/remember/get/export/reindex/delete；`/memory` 命令族改造 | [PR #5833](https://github.com/Hmbown/Codewhale/pull/5833) |
| **#5858** | tui: collapse `ocean_treatment` into `ThemeId::Underwater` | ✅ CLOSED | 11 commits：locale 文案、标记资产、core 整合（deepsea 别名、单 picker 列表、只读配置迁移）、命令/引擎路由、主题 OceanRamp 键、补全 abyss 上下文百分比测试 | [PR #5858](https://github.com/Hmbown/Codewhale/pull/5858) |
| **#5843** | tui: align typed config and schema with live value spaces | ✅ CLOSED | 类型化主题支持自定义主题、清理孤立 locale 键、类型化配置/Schema 对齐真实值空间；dead-code 425 PASS | [PR #5843](https://github.com/Hmbown/Codewhale/pull/5843) |
| **#5865** | refactor(tui): re-land FEAT-020 plugin command shapes on main | 🟢 OPEN | 将原 #5657（合入 `codex/v0912-integration-20260823`）重新落地至当前 `main`；EPIC #5316 仍开放以承载剩余命令解耦 | [PR #5865](https://github.com/Hmbown/Codewhale/pull/5865) |
| **#5867** | feat(config): add `[reasoning_only]` section for retry count | 🟢 OPEN | 将硬编码的 `MAX_REASONING_ONLY_REPROMPTS = 2` 改为用户可配置；reasoning-only 模型的隐藏思考无答案/工具调用场景下，重试行为可调 | [PR #5867](https://github.com/Hmbown/Codewhale/pull/5867) |
| **#5868** | feat: send `x-opencode-session` header for OpenCode Go/Zen providers | 🟢 OPEN | OpenCode Go 要求客户端发送稳定会话头以优化 prompt 缓存与流量归属；当前 UA 被错误归类；补齐 header 与 UA 标识 | [PR #5868](https://github.com/Hmbown/Codewhale/pull/5868) |

---

## 五、功能需求趋势

从今日活跃 Issue 与合入 PR 提炼，社区关注度集中于以下方向：

1. **🧩 第三方编辑器/客户端集成（ACP 协议层）** — 头号热点。`serve --acp` 在 `session/list`、`session/load`、modes/models/configOptions 暴露三个维度同时存在缺口，阻塞 IDE/编辑器侧深度集成。
2. **🧠 记忆与持久化能力（Memory Capability）** — FEAT-019 落地后，TUI 记忆命令族已具备 search/remember/get/export/reindex/delete 的强类型结果，预期将成为下一阶段功能扩展的"主舞台"。
3. **🎨 主题与 UX 收敛** — `ocean_treatment` → `ThemeId::Underwater` 的合并体现"少即是多"的趋势，未来主题体系将围绕单一定位（Underwater/Retro 等）持续收敛。
4. **⚙️ 可配置化与可观测性** — `reasoning_only` retry 由硬编码转配置化、OpenCode Go 的 `x-opencode-session` 头补齐，反映社区对"默认更稳、可调更深"的产品诉求。
5. **🛠️ TUI 命令架构解耦（EPIC-005）** — 顶层 EPIC 持续推进，命令分面（facet）+ 能力位（capability bit）+ 类型化结果的模式已成为新功能落地模板。

---

## 六、开发者关注点

综合 Issue 评论与 PR 描述，近期开发者高频反馈可归纳为：

- **🔴 痛点：ACP 协议能力严重不足**
  - 会话无法枚举/恢复（#5864）
  - 工作模式与模型切换未暴露（#5863）
  - **建议优先级**：作为 0.9.13 的核心议题推进。

- **🟡 痛点：Provider 兼容性与可识别性**
  - OpenCode Go/Zen 等新兴 provider 对 UA、Session Header 有专门要求，Codewhale 请求缺少 `x-opencode-session` 头（#5868）导致 prompt 缓存失效与流量归属混乱。
  - 未来需建立 provider 适配层，统一 UA 命名（如 `codewhale/<ver>`）与稳定会话标识。

- **🟢 诉求：核心行为可配置化**
  - 硬编码常量（`MAX_REASONING_ONLY_REPROMPTS = 2`）应暴露为配置项（#5867），覆盖 reasoning 模型空响应的容错策略。

- **🔵 架构诉求：命令系统持续解耦**
  - EPIC-005 下，命令应按"能力位 + 上下文分面 + 类型化结果"三段式建模（#5833、#5865、#5316），避免单体巨型 TUI 持续膨胀。

- **⚪ 噪音治理建议**
  - Issue #5866 类站外引流内容开始出现，建议仓库启用 Issue 模板与标签自动化以降低维护成本。

---

*日报生成依据：过去 24h GitHub Issue/PR 流（截至 2026-09-04）。数据由仓库 API 实时拉取，分析仅覆盖今日活跃维度。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*