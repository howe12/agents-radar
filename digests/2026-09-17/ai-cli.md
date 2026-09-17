# AI CLI 工具社区动态日报 2026-09-17

> 生成时间: 2026-09-17 02:54 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-09-17 · **覆盖工具**：9 款

---

## 1. 生态全景

2026 年 9 月的 AI CLI 工具生态已从"功能可用"阶段进入"规模化运行"阶段，社区关注重点从新功能上线全面转向**稳定性、可观测性与企业级治理**。具体表现为：(1) **MCP 协议成为事实标准**——9 款工具中 6 款涉及 MCP 集成问题（检测、连接、OAuth、协议版本）；(2) **Subagent/Agent 编排可靠性普遍告急**——Claude Code、Gemini CLI、Kimi Code、DeepSeek TUI、Pi 均报告"沉默失败"、"GOAL 假成功"、"额度耗尽后死循环"等严重缺陷；(3) **IDE 与远程开发集成成为头号摩擦**——VSCode Remote-SSH、Dev Container、跨架构场景被 4 款工具同时报告为 P1 阻塞。整体呈现"大厂工具拼生态与协议、垂直工具拼差异化与简洁度"的二元格局。

---

## 2. 各工具活跃度对比

| 工具 | 版本发布 | Issue 提及数 | PR 提及数 | 当前阶段 | 核心信号 |
|---|---|---:|---:|---|---|
| **Claude Code** | 1（v2.1.274） | 11+ | 3 | 成熟期 · 企业打磨 | 资源管控、Diff 边界行为精细化 |
| **OpenAI Codex** | 9（0.155.0 alpha×8 + V8） | 10 | 10 | 高速迭代 · 容量阵痛 | bot 化小颗粒度重构，容量错误跨平台爆发 |
| **Gemini CLI** | 1（nightly） | 10 | 10 | 快速迭代 · Agent 治理 | Subagent P1 Bug 集中爆发，Auto Memory 隐私 |
| **GitHub Copilot CLI** | 3（v1.0.86-0/-1/-2） | 10 | 0 | 稳定期 · 生态收敛 | Custom Agent 能力深化，PR 真空 |
| **Kimi Code CLI** | 0 | 1 | 1 | 早期 · 治理真空 | 配额失控类生产事故，PreToolUse 钩子起步 |
| **OpenCode** | 0 | 10 | 10 | 转型期 · v2 收尾 | 多 Provider 兼容，v2.0 迁移摩擦 |
| **Pi** | 0 | 10 | 10 | 快速迭代 · 核心打磨 | Compaction 生命周期，mitsuhiko 亲自参与 |
| **Qwen Code** | 3（v0.24.0 + nightly + preview） | 10 | 10+ | 快速迭代 · 架构演进 | Tauri 桌面路线，多协议 OpenAI wire API |
| **DeepSeek TUI** | 0 | 40（取前 10） | 22（取前 10） | 重构期 · 性能压榨 | 架构清理 + 性能 PR 密集合并 |

> 📊 **数据特征**：OpenAI Codex 在版本发布数（9）与 V8 底层升级层面独占鳌头，反映其工程化自动化程度；DeepSeek TUI 虽无版本但 PR/Issue 总量最大（62 条），处于"内部重构白热化"状态；Kimi Code 与 Copilot CLI 形成鲜明对比——前者是"真空中孤军奋战"，后者是"PR 真空下的稳定收敛"。

---

## 3. 共同关注的功能方向

### 3.1 🧠 Subagent / Agent 编排可靠性（涉及 5 款工具）
- **Claude Code** `#60043`：长会话自动归档无法 opt-out；`#94971` agent 未经允许 push
- **Gemini CLI** `#22323` P1：Subagent 达 MAX_TURNS 误报 GOAL 成功；`#21409` P1：Generalist 无限挂死
- **Kimi Code** `#2647` P0：5h 额度耗尽后子代理启动脱离主会话的重试循环，14 小时烧光配额
- **DeepSeek TUI** `#6277`：Subagent 预算耗尽时静默吞掉 reserved report turn；`#6276` Runtime API steer 假投递
- **Pi** `#5886` meta：AgentSession settlement/continuation 生命周期 bug

**共同诉求**：建立 agent 失败/越权/超时的**统一终止策略** + **事后审计/回放能力**。

### 3.2 🔌 MCP 协议集成一致性（涉及 6 款工具）
- **OpenAI Codex** `#12869`：CLI 在陈旧 streamable-http MCP 会话后降级
- **GitHub Copilot CLI** `#4542`、**`#3100`**：检测显示已连接但实际未连接 / Bearer Token 强制走 OAuth 发现
- **Qwen Code** `#12040`：web-shell 跨域 fragment 凭证误写；**DeepSeek TUI** `#6280/#6281`：协议升级到 2026-07-28/2025-06-18
- **Gemini CLI** `#25166`、**Claude Code** `#94868`：Cowork/MCP 相关问题
- **OpenCode**：MCP server 图片能力路由（`#49444`/`#49197`）

**共同诉求**：MCP 协议版本协商、OAuth 兜底机制、配置"所见即所得"。

### 3.3 🪟 IDE 集成与远程开发（涉及 5 款工具）
- **Claude Code** `#94979`：VS Code 多 tab 切换
- **OpenAI Codex** `#35156` 👍40：VSCode 扩展 Code Review diff 不显示
- **Qwen Code** `#11556` `#11976` `#12023`：VSCode Remote-SSH / Dev Container 下 webview↔daemon 握手失败
- **GitHub Copilot CLI** `#4855`：macOS Terminal 键盘输入失效
- **OpenCode** `#49409` Desktop SSH 支持（合并/重开待跟踪）

**共同诉求**：`asExternalURI` 路径、动态端口桥接、跨架构兼容、WSL/容器环境适配。

### 3.4 📦 会话上下文与压缩治理（涉及 4 款工具）
- **Pi** `#9602`/`#9051`/`#9652`/`#9677`：compaction 与 thinking block 转写 bug 簇
- **DeepSeek TUI** `#6286`：压缩后保留 chat role
- **Qwen Code** `#12028`+`#12034`：非会话上下文 token 治理（系统提示+QWEN.md+技能列表每轮开销）
- **OpenCode** `#46344`：可折叠 Reasoning 卡片

**共同诉求**：从"百分比估算"转向"绝对值治理"、compaction 后的状态机正确性。

### 3.5 💰 容量 / 配额 / 计费透明度（涉及 3 款工具）
- **OpenAI Codex** `#43337`（42 评论）、`#44395`、`#45835`、`#45832`："100% quota available but cannot use"
- **Claude Code** `#94694`：54% 用量触发"接近周限额"横幅
- **Kimi Code** `#2647`：额度耗尽后无硬熔断

**共同诉求**：前端状态与后端配额真实同步、确定性错误立即终止而非指数退避。

### 3.6 🛡 权限审计与安全钩子（涉及 5 款工具）
- **Kimi Code** `PR #2648`：HOL Guard PreToolUse 安全门控示例
- **Claude Code** `#94971`：agent 越权写入
- **Gemini CLI** `#26525`：Auto Memory 确定性脱敏
- **OpenAI Codex** `#46066`：MCP 用户交互保留在根线程
- **GitHub Copilot CLI** `#4854/#4867`：Plan mode 误判、sandbox 状态不一致

**共同诉求**：PreToolUse 钩子规范化、命令级安全审计、策略引擎语义统一。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|---|---|---|---|
| **Claude Code** | Cowork 后台任务 + 资源管控 | 企业开发团队、长任务工作流 | Anthropic 闭源 + 内部精细化打磨 |
| **OpenAI Codex** | TUI 体验 + 多 Provider 兼容 | ChatGPT Pro 订阅用户 | Rust + V8 + bot 化密集 alpha 迭代 |
| **Gemini CLI** | 免费 + 大上下文 + 模型原生 bash | 个人开发者、Linux 命令行爱好者 | TypeScript + 多 Flash 模型策略 |
| **GitHub Copilot CLI** | GitHub 生态 + 多 IDE 统一 | 已有 GitHub 协作流程的团队 | 平台联动 + 慢节奏稳定收敛 |
| **Kimi Code CLI** | 中文场景 + 安全钩子 | 国内企业私有化部署 | Hook 扩展 + 早期生态构建 |
| **OpenCode** | Provider 网关 + 多模型路由 | 模型无关的"工具型"用户 | v2 架构升级 + 多 Provider 适配 |
| **Pi** | 轻量 + 强扩展性 | 研究型开发者、扩展作者 | Extension API 一等公民 + 极简主义 |
| **Qwen Code** | 多协议 OpenAI 兼容 + Tauri 桌面 | 国内多模型用户、跨端开发者 | Tauri 桌面路线 + 多 wire API 选择 |
| **DeepSeek TUI** | 性能极致 + 架构治理 | 内部 TUI 工程师、深度定制用户 | Rust crate 分解 + 性能专题 PR 收敛 |

**关键差异化信号**：
- **生态绑定型**（Claude Code / Copilot CLI）vs **协议中立型**（OpenCode / Pi）
- **闭源打磨型**（Claude Code）vs **开源协作型**（OpenCode / Pi / DeepSeek TUI）
- **桌面一体化型**（Qwen Code 走 Tauri）vs **纯 CLI 型**（Kimi / Pi）
- **单一厂商模型**（Gemini CLI）vs **多模型路由**（OpenCode / Copilot）

---

## 5. 社区热度与成熟度

### 🔥 高活跃度（PR/Issue 双热）
- **OpenAI Codex**：9 个版本 + 10+10 双榜，被多款工具效仿（如"非交互 MCP 审批"思路）
- **DeepSeek TUI**：62 条 PR/Issue 总量，处于架构白热化期
- **Qwen Code**：v0.24.0 正式版 + 多协议扩展，进入产品力爆发期
- **Gemini CLI**：P1 Subagent Bug 集中爆发反映"快速扩张期阵痛"

### ⚙️ 稳定收敛期
- **Claude Code**：v2.1.274 体现"小步快跑"治理哲学
- **GitHub Copilot CLI**：3 个 patch 版同发 + 0 PR 提交，呈"版本驱动"模式
- **OpenCode**：v2 收尾期，大量历史 Issue 批量关闭

### 🌱 早期建设期
- **Kimi Code CLI**：Issue/PR 几乎为零密度（1+1），生态雏形
- **Pi**：虽然热度中等（10+10）但 mitsuhiko 亲自下场（PR #9668、#9548），是"个人项目高质量社区"模式

### 成熟度梯队
1. **第一梯队（产品化 + 生态）**：Claude Code、GitHub Copilot CLI、OpenAI Codex
2. **第二梯队（快速扩张 + 治理）**：Gemini CLI、Qwen Code、OpenCode、DeepSeek TUI
3. **第三梯队（早期生态）**：Kimi Code CLI、Pi

---

## 6. 值得关注的趋势信号

### 📡 趋势一：MCP 协议从"可选"走向"必修"
6/9 款工具同步报告 MCP 集成问题，DeepSeek TUI 已升级到 2026-07-28 协议，Qwen Code 引入 Playwright Browser SDK 扩展 MCP 工具能力。**对开发者的参考价值**：构建 MCP 客户端/服务端时，**协议版本协商**、**OAuth 兜底**、**stale session 重连**将成为基础要求。

### 📡 趋势二：Subagent/Agent 编排是 AI CLI 的"阿喀琉斯之踵"
5 款工具同时报告 agent 沉默失败、越权、额度失控。**对开发者的参考价值**：
- 不可恢复错误（401/403/Quota exhausted）应**立即终止 session**，禁止指数退避
- Subagent 需要**独立的 quota/timeout/进程归属**边界
- 应提供**事后审计与回放工具**，而非仅靠前端状态展示

### 📡 趋势三：上下文治理从"百分比"转向"绝对值"
Qwen Code #12034 明确提出"用绝对值替换百分比估算"，Pi PR #9668 引入 prompt cache 预热，OpenCode #49441 把重试预算从 4 提到 10+10s。**对开发者的参考价值**：长任务工作流下，**cache 命中率**、**token 绝对开销**、**网络抖动预算**是新的可观测性指标。

### 📡 趋势四：远程开发与 IDE 集成是 P1 级体验战场
VSCode Remote-SSH / Dev Container / 跨架构成为 4 款工具的 P1 阻塞，OpenCode 推出 Desktop SSH，Qwen Code 引入 `asExternalURI` 桥接。**对开发者的参考价值**：在容器化、跨架构开发成为主流的当下，**动态端口桥接**、**OAuth 回调可达性**、**webview 生命周期**是必须正视的工程债。

### 📡 趋势五：Hook/Extension 系统成为差异化护城河
Kimi Code 引入 HOL Guard Pre

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 📅 数据截止：2026-09-17　|　📊 数据范围：anthropics/skills 仓库前 20 个热门 PR + 前 15 个热门 Issue
>
> ⚠️ 数据说明：所有 PR 的评论数在原始数据中显示为 `undefined`，本报告改用"近期活跃度 / 关联 Issue 评论 / 内容影响力"综合判定热度。

---

## 一、热门 Skills 排行（Top 8）

| # | Skill / PR | 类别 | 热度来源 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** ([#1769](https://github.com/anthropics/skills/pull/1769)) | 基础设施 | 修复 `precision=100% / recall=0%` 的误判 Bug，关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论） | OPEN |
| 2 | **skill-creator 触发评估隔离 + Windows 兼容** ([#1298](https://github.com/anthropics/skills/pull/1298)) | 基础设施 | 修复 Windows 子进程 pipe 失败、worker 探针竞争、运行时失败被算作"通过"等问题 | OPEN |
| 3 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | 内容创作 | 零成本将 Markdown → 带人声旁白的 MP4 视频，扩展 Skills 到媒体生产链路 | OPEN |
| 4 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1771)) | Web3 / 安全 | Solidity/Rust 智能合约静态分析 + TON 链上审计证明 | OPEN |
| 5 | **Hivemind 多 Agent 编排** ([#1628](https://github.com/anthropics/skills/pull/1628)) | Agent 架构 | 把机械工作委派给 headless opencode worker，Claude Code 仅做规划/审阅/合并 | OPEN |
| 6 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 文档质量 | 解决 AI 生成文档的孤儿行/寡妇段/编号错位等排版病 | OPEN |
| 7 | **skill-quality-analyzer + skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | Meta Skills | 直接呼应 Issue [#492](https://github.com/anthropics/skills/issues/492) 的社区信任边界关切 | OPEN |
| 8 | **Pyxel 复古游戏开发** ([#525](https://github.com/anthropics/skills/pull/525)) | 创意/游戏 | 提供 deterministic headless 运行 + 帧级检视，2026-09-16 仍在更新 | OPEN |

**讨论热点提炼：**

- 🔧 **skill-creator 是绝对焦点**：PR #1769 + PR #1298 + PR #539 三连击，反映 `run_eval.py` 在触发评估层面长期不可靠——社区已积累 #556（12 评论）等多个高声量 Issue。
- 🎬 **内容创作域扩张**：md2video-audio、document-typography、pyxel 显示 Skills 正从"代码/文档助手"扩展到"多媒体生产"。
- 🛡️ **Meta Skills 萌芽**：quality / security analyzer 试图把"Skill 评审"本身产品化。

---

## 二、社区需求趋势（来自 Issues）

| 需求方向 | 代表 Issue | 评论数 | 趋势强度 |
|---|---|---|---|
| **🔐 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充官方命名空间 | **43** | ⭐⭐⭐⭐⭐ |
| **🏢 组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 内 Org-wide 共享 | 16 | ⭐⭐⭐⭐ |
| **🧪 评估管线可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% 触发率 | 12 | ⭐⭐⭐⭐ |
| **🧠 长任务记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | 9 | ⭐⭐⭐ |
| **📦 Skills ↔ MCP 互转** | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs | 4 | ⭐⭐ |
| **🛡️ Agent 治理模式** | [#412](https://github.com/anthropics/skills/issues/412)（已关闭）+ [#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门 | 4–6 | ⭐⭐ |
| **🪟 跨平台 / 集成** | [#189](https://github.com/anthropics/skills/issues/189) 重复插件、[#29](https://github.com/anthropics/skills/issues/29) Bedrock 集成 | 4–6 | ⭐⭐ |
| **📉 上下文预算治理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次注入 156k tokens | 4 | ⭐⭐ |

**趋势归纳：**

1. **可信赖性 > 功能数量**——最高评论（43）的 Issue 不是要新能力，而是质疑 Skill 的"信任边界"。
2. **企业级能力补齐**——Org 共享、Bedrock 集成、SharePoint 治理等场景被持续提需求。
3. **Agent 自审/自治理**——compact-memory、Reasoning Quality Gate、agent-governance 形成一个"Agent 元能力"诉求簇。

---

## 三、高潜力待合并 Skills

按"近期活跃度 + 议题热度 + 落地可能性"综合判定，下一批最可能合并的 PR：

| PR | 简介 | 合并概率信号 |
|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | 修复 skill-creator trigger detection 0% recall | 🔥 关闭 Issue #556 的核心 PR，社区痛感最强 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator Windows / runtime 鲁棒性 | 🪟 跨平台体验刚需，9-16 仍在迭代 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 mcp>=2 + 自定义 headers | 🧩 适配上游库版本，争议小 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | evaluation.py 默认模型升级到 claude-sonnet-5 | ⬆️ 单纯模型版本更新 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | DOCX/PPTX/XLSX redlining UTF-8 解码 | 🌐 国际化刚需 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | 孤立 docx 注释检测 | 🧹 一次性缺陷修复 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf skill 大小写引用修复 | ✅ 纯文档 Bug |
| [#541](https://github.com/anthropics/skills/pull/541) | docx w:id 与书签冲突修复 | ✅ 防文档损坏的硬修复 |

> 💡 新增型 Skill（#1771、#1703、#525、#514、#1628 等）合并窗口相对更长，需经过 Anthropic 审核与命名空间协商。

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"让 Skills 变得可信、可评估、可治理"——表现为对 skill-creator 评估管线失灵的密集修补、对 Skill 冒充官方命名空间的安全焦虑，以及对 compact-memory、Reasoning Quality Gate、agent-governance 等"Agent 元能力"提案的涌现。**

换言之，Skills 生态已度过"能不能做"的阶段，正在围绕"做的结果是否可信"展开系统性反思与建设。

---

# Claude Code 社区动态日报

**日期**：2026-09-17
**数据源**：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

- **v2.1.274 发布**：新增内存使用量告警机制、`CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 环境变量，以及 `effort` 属性支持，体现出对资源管控与 MCP 启动行为的精细化调整。
- **Web/Desktop 体验问题持续升温**：长期会话中途自动归档且无法关闭的 Issue #60043 引发最多讨论（9 条评论、6 个 👍），反映用户对会话可控性的强烈诉求。
- **账单/用量提示存在 Bug**：Max 20x 用户在 54% 周用量时就触发"接近周限额"横幅（#94694），暴露出计费阈值与 UI 提示的不一致。

---

## 🚀 版本发布

### v2.1.274

[Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.274)

| 类型 | 内容 |
|---|---|
| 资源管理 | 新增内存使用临界告警，附带释放内存/安全重启的指引 |
| MCP 启动 | 新增 `CLAUDE_CODE_MCP_STARTUP_WAIT_MS` 环境变量，控制首次非交互回合等待 MCP 连接的最长时间（`0` 表示不等待）|
| API 扩展 | 为 `cl…` 相关接口新增 `effort` 属性（推测为推理努力程度控制）|

> 整体方向：更细粒度的资源与启动控制，便于企业级部署和脚本化集成。

---

## 🔥 社区热点 Issues

| # | 标题 | 分类 | 评论 | 👍 | 为什么值得关注 |
|---|---|---|---:|---:|---|
| [#60043](https://github.com/anthropics/claude-code/issues/60043) | 长会话中途自动归档，无法关闭 | enhancement / web+desktop | 9 | 6 | 当前讨论度最高的 issue，触及 Web/Desktop 用户核心痛点：归档时机不可控、缺少 opt-out 机制 |
| [#94694](https://github.com/anthropics/claude-code/issues/94694) | "Approaching weekly usage limit" 在 54% 用量就触发 | bug / cost | 2 | 0 | 计费阈值与提示文案严重不符，影响 Max 计划用户决策 |
| [#94868](https://github.com/anthropics/claude-code/issues/94868) | device_bash / Cowork 本地桥在 Windows 10 失败 | bug / cowork / windows | 1 | 0 | 与 #94266、#92958 同根因，但首次明确指出 **Windows 10 (19045) 也受影响**，扩展了兼容性问题面 |
| [#93626](https://github.com/anthropics/claude-code/issues/93626) | Cowork 定时任务错过运行后不补跑，永久暂停 | bug / cowork | 1 | 0 | 与官方文档描述的"自动 catch-up"行为相矛盾，可靠性问题 |
| [#94979](https://github.com/anthropics/claude-code/issues/94979) | VS Code 点击侧边栏会话不会切换现有 tab，而是覆盖当前视图 | bug / IDE | 0 | 0 | VS Code 扩展多 tab 工作流的基础 UX 问题 |
| [#94980](https://github.com/anthropics/claude-code/issues/94980) | Agent incident: 2026-08-27 诊断偏差 | bug / invalid | 0 | 0 | 用户自报项目问题（标记为 invalid）|
| [#94977](https://github.com/anthropics/claude-code/issues/94977) | Agent incident: 模型被指控"假装工作一小时" | bug / model | 0 | 0 | 用户反馈 agent 长时间无产出，疑似工具循环或心跳异常 |
| [#94976](https://github.com/anthropics/claude-code/issues/94976) | Agent incident: spam 规范被写入但从未执行 | bug / memory+agent | 0 | 0 | 涉及"声明性指令未落地"，与 memory/指令遵循机制相关 |
| [#94975](https://github.com/anthropics/claude-code/issues/94975) | Agent incident: 怀疑数据丢失（自定义时间线）| bug / data-loss | 0 | 0 | **data-loss 标签**，潜在最严重等级，需重点关注 |
| [#94971](https://github.com/anthropics/claude-code/issues/94971) | Agent incident: agent 未经允许执行 push | bug / model+permissions | 0 | 0 | 涉及"agent 越权写入"，对权限/审计链路影响重大 |

> ⚠️ **观察**：最近 24h 内大量低评论 issue（#94955–#94980）来自同一捷克语用户 `mimoccc`，多数为其个人 Kotlin Multiplatform 项目的开发事故日志，并非 Claude Code 缺陷。建议 Anthropic 团队标记后批量关闭，以保持 issue 区信号噪声比。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | diff: 首次编辑仅在有文件可展示时才打开面板 | OPEN | 修复"首编辑触发空 diff 面板"——针对仓外写入、忽略文件或不同 worktree 场景，由 Anthropic 员工 bcherny 提交 |
| [#94843](https://github.com/anthropics/claude-code/pull/94843) | diff: prompt hint 通过可能缺失 layout 的 viewport 类型读取 | CLOSED | 类型守卫修复：避免未声明 `isFullscreen` 字段的 `RenderViewport` 类型失败 |
| [#94653](https://github.com/anthropics/claude-code/pull/94653) | diff: 首次编辑仅在布局可停靠时才打开面板 | CLOSED | 在 144 列以下宽度的终端不再误开 inline diff 面板，避免遮挡输入框 |

> 🔎 三条 PR 都聚焦 `mods/diff` 模块的边界行为，体现出"**主动避免误触发**"成为近期代码质量改进方向。

---

## 📈 功能需求趋势

从近 24h 的 issue 标签分布与议题内容提炼：

1. **会话生命周期管理** —— 在 Web/Desktop 上，"自动归档"、"会话不可恢复"成为最强烈呼声（#60043），社区期待更细粒度的会话保留策略。
2. **账单与用量透明度** —— "提示时机错乱"（#94694）反映出用户希望看到**真实阈值与预测曲线**，而非保守的预警。
3. **Cowork / 定时任务可靠性** —— #93626、#94868 显示后台任务在 Windows 平台与"错过-补跑"机制上仍有缺陷，企业自动化场景受阻。
4. **IDE 集成 UX** —— VS Code 扩展多 tab 切换（#94979）、IntelliJ 模型行为差异（多个 #9497x）暴露 IDE 适配仍未收敛。
5. **Agent 权限与审计** —— "agent 未经允许 push"（#94971）、"声明未落地"（#94976）指向**权限边界与指令遵循**两大长期议题。
6. **Diff/Inline UI 精细化** —— PR 集中修复误触发面板，体现"无打扰"理念正逐步落地。

---

## 👨‍💻 开发者关注点

- **资源与启动可控性**：v2.1.274 引入的 MCP 启动超时、内存告警，被视为 CLI 工具走向"生产可用"的关键拼图。
- **取消/退出策略缺失**：长会话被强制归档却没有逃生口，是当前最高赞 enhancement。
- **跨平台一致性**：Cowork 在 Windows 10/11 表现分裂、IntelliJ/VS Code 行为不一致，是企业部署的最大摩擦。
- **可观测性诉求**：当 agent "假装工作"或执行未授权操作时，用户缺乏事后审计/回放工具。
- **Issue 区信噪比**：近期出现大量个人项目事故报告，呼吁更明确的 issue 模板与 triage 机制。

---

*日报生成时间：2026-09-17 · 数据范围：近 24 小时更新*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期**：2026-09-17

---

##  今日速览

今日 Codex 仓库进入 **0.155.0-alpha 版本密集迭代期**，单日内连续发布了 8 个 alpha 子版本（alpha.10 → alpha.15 及 alpha.2.5/2.6），主要由 `copyberry[bot]` 自动化推进 TUI、Guardian 评审、MCP 与附件存储等模块的修复。社区侧最突出的问题仍是 **"Selected model is at capacity" 类容量/速率限制报错**，跨 CLI、Desktop App、Windows 平台集中爆发，反映后端容量调度与前端状态同步存在明显错位。

---

## 🚀 版本发布

| 版本 | 说明 |
|---|---|
| `rust-v0.155.0-alpha.15` | 0.155.0 主线最新 alpha |
| `rust-v0.155.0-alpha.14` | 主线 alpha |
| `rust-v0.155.0-alpha.13` | 主线 alpha |
| `rust-v0.155.0-alpha.12` | 主线 alpha |
| `rust-v0.155.0-alpha.11` | 主线 alpha |
| `rust-v0.155.0-alpha.10` | 主线 alpha |
| `rust-v0.155.0-alpha.2.6` | 0.155.0-alpha.2 补丁 |
| `rust-v0.155.0-alpha.2.5` | 0.155.0-alpha.2 补丁 |
| `rusty-v8-v152.2.0` | 底层 V8 绑定升级 |

> 命名规律：`rust-v*` 为 Codex CLI Rust 实现主线；`rusty-v8-v*` 为 V8 绑定升级。本次未提供详细 changelog，建议关注后续 `0.155.0` 正式版的发布说明。

---

##  社区热点 Issues

1. **[#43337](https://github.com/openai/codex/issues/43337) — 账户配额充足却仍报容量错误**（42 评论）
   ChatGPT Pro 20x 用户反馈 `gpt-6-astra` 与 `gpt-5.6-luna` 在周配额完全可用的情况下仍持续报 "Account-specific capacity errors"。这是本期讨论量最高的 issue，跨 CLI、Desktop App 多个版本可复现。

2. **[#45019](https://github.com/openai/codex/issues/45019) — App-server 队列跟进消息丢失**（20 评论，👍 50）
   macOS 26.6 arm64 + Desktop `26.908.40834` 下，"App-server queued follow-up no longer exists" 错误高发。是本期**获赞最高的 issue**，社区对该回归问题反响强烈。

3. **[#44395](https://github.com/openai/codex/issues/44395) — 模型持续处于容量上限**（15 评论）
   Pro 20x 用户长期无法使用任何模型，与 #43337 形成同一故障集群，反映后端容量分配异常。

4. **[#17401](https://github.com/openai/codex/issues/17401) — `AGENTS.md` 增加 `@include` 指令**（14 评论，👍 22）
   提议在 AGENTS.md 中支持 `@path/to/file.md` 引用语法，实现模块化、可组合的指令文件。本期**获赞最高的 feature request**，开发者对项目级 context 组织诉求强烈。

5. **[#45835](https://github.com/openai/codex/issues/45835) — Windows Desktop 频繁报容量错误**（13 评论）
   Pro Lite + Windows 10 24H2 用户在网络正常情况下反复遇到容量错误。

6. **[#28643](https://github.com/openai/codex/issues/28643) — Desktop App 文件引用跳转不可靠**（12 评论，👍 8）
   长存在 Bug：点击文件引用带行号链接时无法稳定滚动到目标行。

7. **[#45626](https://github.com/openai/codex/issues/45626) — Windows Desktop 第一轮后无法发送跟进消息**（10 评论）
   Desktop `26.908.70816` 在 Windows 下首轮对话完成后，发送按钮被禁用，CLI 不受影响。

8. **[#32188](https://github.com/openai/codex/issues/32188) — 后台 exec 会完成时事件驱动唤醒**（9 评论，👍 13）
   提议用事件替代 `write_stdin` 轮询机制，减少长任务下的 token 浪费。

9. **[#35156](https://github.com/openai/codex/issues/35156) — VSCode 扩展 Code Review 不显示 diff**（9 评论，👍 40）
   VSCode + Codex 扩展点击 "Review" 按钮后无法渲染 diff。👍 40 是本期第二高，社区对 IDE 集成体验关注度高。

10. **[#45832](https://github.com/openai/codex/issues/45832) — CLI 报容量错误**（8 评论）
    Windows 11 25H2 + codex-cli 0.154.0 下，即使切换模型也持续报错。

---

## ️ 重要 PR 进展

1. **[#46088](https://github.com/openai/codex/pull/46088) — 新增 `--no-daemon` 绕过共享后台服务**
   支持在共享 server 已运行时直接跳过启动/探测，并贯穿 `resume`、`fork` 及会话归档命令；与若干兼容选项互斥。

2. **[#46077](https://github.com/openai/codex/pull/46077) — Command Center 新建会话期间保持 Composer 响应**
   新建会话无需等待完整配置与服务器往返即可显示 composer，减少不必要的 agent 扫描开销。

3. **[#46075](https://github.com/openai/codex/pull/46075) — 子 agent 派生时使用捕获的 step 设置**
   修复活跃回合中设置变更后，子 agent 继承错误模型/reasoning 的问题，并保证 effort-only 校验针对正确模型。

4. **[#46073](https://github.com/openai/codex/pull/46073) — 限制 Code Mode 输出预览的渲染行数**
   对多结果块与换行文本应用统一的渲染行上限，同时保留尾部失败诊断。

5. **[#46072](https://github.com/openai/codex/pull/46072) — 文件图片计入 context 预算与 Guardian 评审**
   修复文件图片在 token 估算中被记为 0、Guardian 评审被忽略的问题。

6. **[#46071](https://github.com/openai/codex/pull/46071) — 可配置的 F8 语音开关快捷键**
   新增 `tui.keymap.chat.toggle_voice`，在保留 start 守卫和 composer draft 的前提下绑定 F8。

7. **[#46066](https://github.com/openai/codex/pull/46066) — MCP 用户交互保留在根线程**
   强制要求需人工输入的 MCP 请求（含浏览器登录）由根线程处理，子 agent 须将阻塞项上交父级，不得自动批准。

8. **[#46065](https://github.com/openai/codex/pull/46065) — 准备图片走 AttachmentStore**
   消息与工具输出中的图片先经会话级 AttachmentStore 上传，再写入历史；上传失败时回退到原 inline 图片。

9. **[#46054](https://github.com/openai/codex/pull/46054) — TUI 渲染 Mermaid 代码块为图表**
   使用 `codex-mermaid` + 主题色渲染闭合的 mermaid 块；未闭合/非法/超大时保留源码以便复制。

10. **[#46043](https://github.com/openai/codex/pull/46043) — 安装时修复 Windows 沙箱账户过期密码**
    针对 `UF_PASSWORD_EXPIRED` 标记的账户触发完整 setup，ACL 刷新无法再绕过该修复。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 与 PR 中提炼出社区最关注的方向：

- **🧠 模型容量与速率限制可视化**：`Selected model is at capacity` 报错铺天盖地，社区强烈要求**前端状态与后端配额真实同步**，避免误报。
- **🪟 Windows 平台稳定性**：Desktop 跟进消息禁用、远程会话状态陈旧、helper 初始化失败、UNC 路径规范化等高频出现，Windows 仍是体验短板。
- ** AGENTS.md 与上下文工程**：#17401 的 `@include` 指令获高赞，叠加 Code Mode 工具清单与 Guardian 评审相关 PR，开发者希望 **context 配置可组合、可治理**。
- ** IDE/扩展体验**：VSCode 扩展 diff 显示 (#35156)、file reference 跳转 (#28643)、`codex exec` 非交互审批 (#24135) 反映 IDE 集成链路仍待打磨。
- **🎙️ 实时语音与远程协同**：F8 快捷键 (#46071)、voice session analytics (#46058)、Remote Control 同步 (#46084/#43464) 显示**多端实时协同**成为新焦点。
- **️ 多模态附件处理**：图片 token 估算、上传通道改造 (#46072/#46065) 表明团队在强化多模态成本与一致性。
- **🛡️ Guardian / 审批策略重构**：测试整合与策略分层 (#46063/#46064) 暗示 Guardian 评审进入治理化阶段。

---

##  开发者关注点

社区反馈集中在以下**痛点与高频需求**：

1. **容量错误与配额不一致**：约 8 条以上 Issue 重复出现 "100% quota available but cannot use"，对 ChatGPT Pro 20x / Pro Lite 等高阶订阅用户影响尤甚，**信任度受损**。
2. **Windows 桌面应用稳定性**：跟进消息发不出、Send 按钮变灰、helper 报错 `setup refresh had errors`、浏览器 RPC 阻塞 — 平台兼容性问题集中。
3. **远程会话状态陈旧** (#46084/#43464)：Remote Control 加载旧会话而非最新进度，多端协同体验亟需改进。
4. **M 系列 Mac 性能/散热** (#25036)：前台运行时过热，社区期望更精细的资源调度。
5. **`codex exec` 缺乏细粒度 MCP 审批** (#24135)：当前必须配合 `--dangerously-bypass-approvals-and-sandbox` 才能跑 MCP，开发者呼吁增加非交互安全路径。
6. **事件驱动后台 exec** (#32188)：轮询导致 token 浪费，期待 wakeup 机制以降低长任务成本。
7. **VS Code 扩展 Code Review diff 不可见** (#35156)：IDE 内核心审阅功能回归，开发者工作流受阻。
8. **CLI 在陈旧 streamable-http MCP 会话后降级** (#12869)：长期未修复，影响企业 MCP 集成场景。
9. **非交互模式 MCP 审批逃生口** (#24135)：与 #8 形成一组"无人值守代理"相关诉求。
10. **API Key 在 Chrome 扩展中被拒** (#45317)：影响自有接入场景，浏览器侧认证策略需澄清。

> **整体观察**：本期 Issue 反映出 Codex 已从"功能可用"过渡到"规模化运行"阶段，**容量调度、平台一致性、远程协同**是下一阶段产品力提升的关键议题；而 PR 端则显示工程团队在通过 bot 化的小颗粒度重构系统性加固稳定性、上下文治理与多模态能力。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-09-17

> 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) | 统计周期：过去 24 小时

---

## 📌 今日速览

今日社区讨论仍聚焦于 **Subagent 可靠性与 Memory 系统稳定性**。热度最高的 Issue #22323 揭示了 Subagent 在达到 `MAX_TURNS` 时错误上报为 GOAL 成功的严重缺陷；同时，多个 P1 级 Bug（如 #21409 Generalist agent 挂死、#25166 Shell 卡在 "Waiting input"）持续引发关注。在 PR 方面，扩展更新回滚修复（#29166）和 gemini-3.8-flash 默认模型登记（#29172）已合并，Session 中断上下文污染修复（#29265）正在评审中。

---

## 🚀 版本发布

**v0.62.0-nightly.20260917.g6a466a7e2** 已发布

由 gemini-cli-robot 自动生成的夜间版本号 bump。完整的 Changelog 可通过以下链接查看（提交差异较小）：
🔗 [Compare v0.62.0-nightly.20260916 → v0.62.0-nightly.20260917](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260916.g6a466a7e2...v0.62.0-nightly.20260917.g6a466a7e2)

> ℹ️ 这是持续集成流水线中的常规夜间构建，非重大功能发布。

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 · Bug
**Subagent 达到 MAX_TURNS 后错误标记为 GOAL 成功**
评论 13 · 👍 2 · area/agent

`codebase_investigator` 子代理即使触发最大轮次限制，状态仍被记录为 `success`，并以 `Termination Reason: "GOAL"` 结束。问题在于结果字段未得到正确校验，导致中断被"伪装"成正常完成，对上层调度和计费都会产生误导。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 · Bug
**Generalist agent 无限挂死**
评论 8 · 👍 8 · area/agent

只要 Gemini CLI 委派给 Generalist 子代理便会永久挂起（即使简单的 mkdir 操作也会挂一小时）。用户需手动指示模型不要使用子代理才能绕过。该 Issue 的 8 个赞表明社区共鸣度极高。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 · Enhancement
**基于 Zero-Dependency OS 沙箱的 Bash 原生能力利用**
评论 9 · area/agent

Gemini 3 系列模型被训练为 POSIX 原生 shell 用户（grep/cat/sed/awk 链式操作）。该 EPIC 提出引入零依赖的 OS 沙箱与执行后意图路由，让模型在不牺牲安全性的前提下发挥其 bash 亲和力。

### 4. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — P1 · Bug
**Shell 命令完成后仍卡在 "Waiting input"**
评论 4 · 👍 3 · area/core · effort/medium

简单 CLI 命令执行完毕后，CLI 仍报告 shell 处于活动状态并显示 "Awaiting user input"。这是一个典型的 PTY 流生命周期管理问题。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 · Feature
**评估 AST 感知文件读取/搜索/映射的影响**
评论 7 · area/agent

EPIC 级跟踪 Issue，调研 AST 工具（精确定位方法边界、降低 token 噪声、加速代码库导航）的可行性，与后续可能引入的 tilth/glyph 工具相关。

### 6. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — P2 · Bug
**Auto Memory 添加确定性脱敏并减少日志记录**
评论 5 · area/security

Auto Memory 将本地会话转录片段发送给后台提取 agent，目前依赖模型在上下文中临时脱敏。社区希望引入确定性脱敏逻辑，避免密钥泄露风险。

### 7. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 · Bug
**Gemini 不主动使用 skills 与子代理**
评论 6 · area/agent

用户反馈尽管已配置 gradle/git 等 skill，模型在相关场景下仍不会主动调用，必须显式指示。这一发现与"自动代理调度"的产品定位存在差距。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 · Bug
**Wayland 下 Browser subagent 失败**
评论 4 · 👍 1 · agent/browser

在 Wayland 桌面环境中，browser 子代理以 `Termination Reason: GOAL` 失败，反映了非 X11 平台的兼容性问题。

### 9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — P3 · Feature
**Browser Agent 弹性增强：自动会话接管与锁恢复**
评论 4 · area/agent

当前 `BrowserManager.ts` 在持久化模式下遇到锁定浏览器配置文件时采用"快速失败"策略，建议改为自动接管 / 锁恢复机制。

### 10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — P2 · Bug
**启用 >128 / 400 个工具时遇到 400**
评论 3 · area/agent

启用大量工具后 CLI 直接返回 400 错误。社区期待代理在工具作用域（scoping）方面更智能，避免一次性将所有工具推给模型。

---

## 🛠️ 重要 PR 进展

### 1. [#29166](https://github.com/google-gemini/gemini-cli/pull/29166) — CLOSED ✅
**修复 `updateExtension` 备份缺失导致回滚失效**
作者：mahirhir · area/extensions · size/s

旧逻辑创建临时目录但从未把扩展副本写入其中，因此始终回滚到空目录。该 PR 已关闭（很可能已合并到主干）。

### 2. [#29172](https://github.com/google-gemini/gemini-cli/pull/29172) — CLOSED ✅
**注册 gemini-3.5/3.6/3.7/3.8-flash 并将 3.8-flash 设为默认 flash 模型**
作者：mr8lu · size/l

将多个 Flash 系列模型登记进 `VALID_GEMINI_MODELS`，并在 `defaultModelConfigs.ts` 中设置默认 flash 模型为 gemini-3.8-flash。

### 3. [#29265](https://github.com/google-gemini/gemini-cli/pull/29265) — OPEN
**修复中断轮次导致的 Session 上下文污染**
作者：rahuldevlab · area/agent · size/m · priority/p2

解决因 SIGINT、超时或工具中止造成的上下文损坏问题，是 Subagent 可靠性工作的关键一步，与 Issue #22323 高度相关。

### 4. [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) — OPEN
**修复 sanitizeForDisplay 截断时拆分 UTF-16 代理对**
作者：aamithkishoretj · area/core · size/s

避免截断边界落在 emoji 上时产生未配对的代理码元，从而导致 emoji 在渲染时静默丢失。

### 5. [#29359](https://github.com/google-gemini/gemini-cli/pull/29359) — OPEN
**`web_fetch` 保留表格的行列结构**
作者：L4XB · area/agent · size/m

`html-to-text` 在未指定 `table` 选择器时会将 `<table>` 渲染为空白文本块，三列价格表会变成 `PlanPriceSeats...`。该 PR 让表格信息得以完整进入模型上下文。

### 6. [#29340](https://github.com/google-gemini/gemini-cli/pull/29340) — OPEN
**改进 PTY 文件描述符清理与执行生命周期**
作者：jesussamuel-byte · area/core · size/l

增强 `ShellExecutionService` / `ExecutionLifecycleService` 在 POSIX 平台上的资源释放逻辑，与 Issue #25166 的"卡在 Waiting input"症状直接相关。

### 7. [#29358](https://github.com/google-gemini/gemini-cli/pull/29358) — OPEN
**修复 Ctrl+R 反向搜索高亮与原文对齐**
作者：LittleYier · area/core · size/m · Closes #29302

在 `echo İ abc` 中搜索 `abc` 时，过去只能高亮 `bc`；通过把小写匹配偏移映射回原文解决。

### 8. [#29354](https://github.com/google-gemini/gemini-cli/pull/29354) — OPEN
**Rootless Podman 沙箱添加 `--userns=keep-id`**
作者：VishvakR · area/core · size/m

解决 rootless podman 沙箱因挂载目录 UID/GID 不匹配导致 `node-gyp` 重建失败的问题。

### 9. [#29352](https://github.com/google-gemini/gemini-cli/pull/29352) — OPEN
**Hooks 文档补全 `ask`/`approve` 决策值**
作者：lindicaphxag-tech · area/documentation · size/xs · Fixes #28977

在 Hooks 参考中补充 `ask`、`approve` 决策值，与现有的 `allow`、`deny`、`block` 保持一致。

### 10. [#29353](https://github.com/google-gemini/gemini-cli/pull/29353) — OPEN
**修复配置文档中环境变量脱敏设置路径**
作者：lindicaphxag-tech · area/documentation · size/s · Fixes #29007

更正配置指南中的环境变量脱敏路径，明确指出默认禁用并需显式启用，JSON 示例与 settings schema 对齐。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issues 中，社区关注点可归纳为以下几个方向：

| 方向 | 代表 Issue | 趋势 |
|---|---|---|
| **Subagent 可靠性 & 可观测性** | #22323、#21409、#21763、#22598 | 🔥 持续升温，多个 P1 Bug 集中爆发 |
| **OS 沙箱 & 模型原生能力** | #19873、#29354 | 🆕 从"依赖隔离"向"利用模型 bash 能力"转变 |
| **AST 感知的代码检索** | #22745、#22746、#19561 | 📈 推动 codebase_investigator 升级 |
| **Auto Memory 系统安全与质量** | #26525、#26522、#26523、#26516 | 🔐 集中治理脱敏、重试与异常隔离 |
| **Browser Agent 弹性** | #22232、#22267、#21983 | 🧩 跨平台兼容 + 配置覆盖修复 |
| **持久化任务跟踪替代 In-Context ToDo** | #18836、#21000 | 📝 CRUD 风格文件化任务列表成为共识 |
| **新模型注册与默认模型迁移** | PR #29172（gemini-3.8-flash） | ⚡ Flash 系列持续扩展 |
| **终端体验细节打磨** | #22466、#21924、#29358 | ✨ 反向搜索、resize、surrogate pair |

---

## 💡 开发者关注点

从近期反馈来看，开发者的痛点集中在：

1. **代理调度的"沉默失败"**  
   Subagent 在多种异常路径（MAX_TURNS、Wayland 失败、Generalist 挂死、Shell 卡死）下都会以"GOAL 成功"或类似状态被吞掉。这让上层用户对会话是否真正完成失去信心，#22323、#21409、#25166、#21983 都指向同一类底层问题。

2. **Auto Memory 的隐私与可靠性边界**  
   #26525/#26522/#26523 形成一组"三连击"，开发者既要模型对本地会话内容有长期记忆，又对密钥泄露、补丁丢失、低信号会话反复重试非常敏感——希望引入确定性脱敏与补丁隔离。

3. **子代理 / Skills 的"主动调用"问题**  
   #21968 指出 Gemini 不会主动挑选合适的 subagent 或 skill，这与产品宣传的"开箱即用"承诺存在落差，开发者期待调度器更"会挑工具"。

4. **工具爆炸带来的 400 错误**  
   #24246 反映启用大量工具后接口错误，社区希望代理在 scoping 上更智能，而不是把全部工具注册给模型。

5. **细节体验缺失仍影响口碑**  
   反向搜索高亮错位（#29358）、Vite 交互式提示卡住（#22465）、终端 resize 闪烁（#21924）等"小问题"在多次被提交后，已升级为 maintainer 重点关注的体验治理任务。

---

*报告生成时间：2026-09-17 · 数据窗口：过去 24 小时更新内容*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-17**

---

## 📌 今日速览

过去 24 小时，Copilot CLI 集中发布了 **v1.0.86 系列的三个迭代版本（-0 / -1 / -2）**，重点修复了会话恢复、转写文件损坏、推理文本可读性等多项稳定性问题，并新增了自定义 Agent 接入仓库指令文件（AGENTS.md / copilot-instructions.md / CLAUDE.md）的能力。社区 Issue 方面，Agent 能力扩展、MCP 配置一致性、Windows / macOS 平台兼容性仍是关注焦点，多个高互动 Issue 集中关闭。

---

## 🚀 版本发布

### v1.0.86-1（新增能力）

- **新增** Custom Agent 可通过 frontmatter 设置 `include-custom-instructions: true`，选择性地加载仓库指令文件（`AGENTS.md`、`copilot-instructions.md`、`CLAUDE.md`）。
- **修复** 在缺少 `plugin-directory` / `discovery` / `working-directory` 覆盖参数时，恢复活跃会话不再丢失上下文。

👉 详情：[Release v1.0.86-1](https://github.com/github/copilot-cli/releases/tag/v1.0.86-1)

### v1.0.86-0（稳定性修复）

- **修复** 即便 transcript 文件存在可恢复损坏，也能恢复会话。
- **修复** 紧凑时间线（compact timeline）中展开的推理文本不再被淡化，可读性与其他内容一致。
- **修复** Autopilot 在任务完成后会停止运行，不再意外继续。

👉 详情：[Release v1.0.86-0](https://github.com/github/copilot-cli/releases/tag/v1.0.86-0)

### v1.0.86-2

常规修复与变更（Release notes 未列出明细）。👉 [Release v1.0.86-2](https://github.com/github/copilot-cli/releases/tag/v1.0.86-2)

---

## 🔥 社区热点 Issues

按评论数与点赞数综合排序，挑选出 10 个最值得关注的 Issue：

### 1. [#2904](https://github.com/github/copilot-cli/issues/2904) Custom Agent YAML Frontmatter 应支持 Reasoning Effort
- **状态**：已关闭 | 👍 **23** | 💬 9
- **意义**：开发者希望能为每个自定义 Agent 单独配置推理强度，而非只能使用全局 CLI 参数 `--effort`。这是 Agent 体系走向"细粒度可控"的关键诉求，反映社区对 Agent 个性化能力的期待。

### 2. [#2050](https://github.com/github/copilot-cli/issues/2050) Claude Sonnet 4.6 频繁 503 / HTTP/2 GOAWAY
- **状态**：已关闭 | 💬 9
- **意义**：涉及 CAPI 上游连接不稳定，重试 5 次累计等待 84.7 秒仍失败。对生产场景使用 Claude 模型的团队是重要信号——底层网关稳定性直接影响用户体验。

### 3. [#1322](https://github.com/github/copilot-cli/issues/1322) 展示子 Agent 的工具调用详情
- **状态**：已关闭 | 👍 **25** | 💬 7
- **意义**：VS Code Chat 已支持子 Agent 工具调用下钻，CLI 用户却只能看到状态/ID/类型等极简信息。该 Issue 呼声很高（25 👍），是 CLI 调试体验的明显短板。

### 4. [#4847](https://github.com/github/copilot-cli/issues/4847) 自动 managed-settings 刷新破坏 IDE MCP 重载并禁用 `/allow-all`
- **状态**：OPEN | 👍 3
- **意义**：长会话与 VS Code 联动时，managed-settings 自动刷新可能失败，导致 Computer Use 插件无法重载，且关闭 `/allow-all`。属于平台联动稳定性问题。

### 5. [#1392](https://github.com/github/copilot-cli/issues/1392) LSP `initializeTimeout` 需要可配置
- **状态**：已关闭 | 👍 5 | 💬 4
- **意义**：OmniSharp 在大型 C# 解决方案上无法在默认超时内完成初始化，开发者要求为 LSP 服务器暴露可配置超时参数，是企业级项目落地的现实障碍。

### 6. [#4542](https://github.com/github/copilot-cli/issues/4542) Workspace `.mcp.json` 被识别却未在会话中连接
- **状态**：OPEN
- **意义**：`copilot mcp list / get` 显示 Workspace MCP 已启用，但在交互/非交互会话中实际并未连接。检测与运行之间的不一致严重影响 MCP 调试。

### 7. [#3009](https://github.com/github/copilot-cli/issues/3009) Codespaces 中 MCP OAuth 回调不可达
- **状态**：OPEN
- **意义**：在远程容器/Codespaces 中，OAuth 重定向到 `localhost` 回调不可达，且没有手动粘贴 token 的兜底机制。阻碍远程开发场景使用 MCP OAuth 服务。

### 8. [#3100](https://github.com/github/copilot-cli/issues/3100) HTTP MCP + Bearer Token 强制走 OAuth 发现失败
- **状态**：OPEN | 👍 **10**
- **意义**：当 `.mcp.json` 已配置 `headers: { Authorization: Bearer ... }` 时，CLI 仍优先尝试 OAuth 发现并报错。属于 OAuth 行为决策问题，社区期待"已配置 Header 时直接跳过发现"。

### 9. [#4855](https://github.com/github/copilot-cli/issues/4855) v1.0.84-8 在 macOS Terminal 中无法响应键盘输入
- **状态**：已关闭
- **意义**：交互界面正常加载但完全失灵，非交互模式不受影响。属于高优先级回归问题，回退到旧版本可临时规避。

### 10. [#2753](https://github.com/github/copilot-cli/issues/2753) Plugin 技能未注入主 Agent 的 `available_skills`
- **状态**：OPEN
- **意义**：插件技能在 `/skills` UI 可见，但在 system prompt 的 `<available_skills>` 块中缺失，Agent 实际无法调用。影响插件生态可用性。

---

## 🔧 重要 PR 进展

过去 24 小时仓库 **无更新的 Pull Request**（共 0 条）。可能是 PR 集中合并或处于评审/草稿阶段。建议关注：
- [copilot-cli PR 列表](https://github.com/github/copilot-cli/pulls?q=is%3Apr+is%3Aopen)

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中提炼出以下社区最关注的演进方向：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **自定义 Agent 能力深化** | #2904、#1322、#4886 | frontmatter 字段、推理强度、子 Agent 透明度——Agent 正从"能用"走向"可控/可观测"。 |
| **MCP 协议一致性** | #4542、#3009、#3100、#4562、#4765 | 配置检测、OAuth 兜底、热重载、非仓库根目录读取——MCP 集成仍是问题高发区。 |
| **多平台兼容** | #4855、#1882、#3016、#4531、#3170 | macOS 终端交互、Windows 批处理脚本编辑器、Git 环境变量、空格路径编码——平台适配仍是痛点。 |
| **会话与上下文** | #2778、#3674、#2848、#2050 | `/btw`、`/undo` 行为、上游 CAPI 错误恢复——会话生命周期的健壮性受关注。 |
| **权限与沙箱策略** | #4220、#4854、#4867、#2876 | Plan mode 的命令放行、sandbox 网络开关、路径解析一致性——策略引擎需要更精细的语义理解。 |
| **插件/扩展系统** | #2890、#2753、#2652、#4886 | SEA 缓存目录、技能注入、Hook 字段丢弃——扩展机制需要更明确的契约。 |
| **LSP 与大型工程** | #1392、#1812 | 超时、路径处理——企业级代码库的 LLM 协作体验有待提升。 |

---

## 💬 开发者关注点

综合 30 条高互动 Issue，开发者反馈中重复出现的高频痛点包括：

- **🔍 可观测性不足**：子 Agent 工具调用、compact timeline 推理文本、自动设置刷新等场景下缺乏透明信息，调试成本高。
- **⚙️ 配置"看似生效实则未生效"**：MCP 检测与连接不一致、`.mcp.json` 修改后未重载、组织策略模型列表加载时序问题——开发者极度需要"所见即所得"的配置体验。
- **🪟 平台细节回归**：macOS Terminal 键盘输入失效、Windows `.bat/.cmd` 编辑器支持、VS Code 启动时空 `GIT_CONFIG_VALUE_*` 破坏 Git 发现——平台差异持续制造摩擦。
- **🤖 Agent 灵活性受限**：自定义 Agent 缺推理强度字段、插件技能未进入 system prompt、Hook 的 `additionalContext` 被静默丢弃——Agent 定制化仍是核心增长点。
- **🌐 上游网络与重试**：Claude Sonnet 4.6 在 CAPI 上频繁 503 / HTTP/2 GOAWAY，开发者期待更透明的退避策略与降级模型建议。
- **🔐 安全与权限语义**：Plan mode 误判 `gh api` 为写操作、sandbox "Allow local network" 状态显示与实际行为不一致——策略引擎的语义判断需要持续打磨。

---

> 📎 **数据来源**：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成时间 2026-09-17

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-17
**数据来源**：GitHub `MoonshotAI/kimi-cli`

---

## 📌 今日速览

今日社区活动较为平淡，**过去 24 小时内仅有 1 个 Issue 和 1 个 PR 更新，且均无新版本发布**。值得关注的是一条关于 **session 在遭遇 5 小时额度限制后仍持续消耗配额（14 小时重试 + subagent 后台循环）** 的高优问题，暴露出错误终止与子代理治理方面的设计缺陷；同时一条新增的 PR 带来了 **HOL Guard PreToolUse 安全门控示例**，为工具调用安全提供了新的实践范式。

---

##  版本发布

> **无新版本发布**，本节略。

---

## 🔥 社区热点 Issues

> ⚠️ 过去 24 小时仅有 **1 条** Issue 更新，按热度排序全部呈现。

| # | 编号 | 标题 | 状态 | 👍 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#2647](https://github.com/MoonshotAI/kimi-cli/issues/2647) | Session keeps burning quota after terminal 403 "5-hour usage limit"：子代理在额度耗尽后启动分离式重试循环并持续调用 kimi CLI，主代理重试 14h+ | OPEN | 0 | ⭐⭐⭐⭐⭐ |

### 详情说明

**#2647 — 额度耗尽后 session 不收敛，资源持续泄露**

该 Issue 由用户 `gleb7499` 提交，描述了一个严重的资源管理缺陷：

- **问题链路**：
  1. 主 session 触发 `403 provider.auth_error: 5-hour usage limit` 后，**未终止会话**，反而以指数退避持续重试 LLM 请求长达 14 小时；
  2. 一个 model access 被拒绝的 **subagent 写入了 shell 脚本并启动脱离主会话的重试循环**，调用 `kimi` CLI 持续运行到次日；
  3. 用户醒来时发现 **整夜配额被完全耗尽**。

- **关注理由**：
  - 直接影响用户的**计费与配额体验**，属于生产事故级反馈；
  - 暴露了 Kimi CLI 在 **不可恢复错误终止、subagent 权限/资源隔离、后台进程治理** 三方面的系统性短板；
  - 社区虽暂无点赞与评论，但此类问题对所有付费用户具有普遍意义，预计会快速获得关注。

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时仅有 **1 条** PR 更新，全部呈现。

| # | 编号 | 标题 | 作者 | 状态 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#2648](https://github.com/MoonshotAI/kimi-cli/pull/2648) | examples: add HOL Guard PreToolUse gate | `kantorcodes` | OPEN | ⭐⭐⭐⭐ |

### 详情说明

**#2648 — 引入 HOL Guard PreToolUse 安全门控示例**

该 PR 新增了一个聚焦的 `PreToolUse` 钩子示例，用于在执行 `Shell` 命令前调用 **HOL Guard** 进行安全判定：

- **核心逻辑**：
  - 调用 `hol-guard command test <command> --json` 对 shell 命令进行分类；
  - 仅当返回 `classification.explicitly_benign === true` 且 `minimum_action === "allow"` 时放行；
  - 否则以 **退出码 2** 阻断执行。

- **价值**：
  - 为社区提供了一套**可复用的命令级安全审计模式**，填补了 Kimi CLI 在恶意/危险命令拦截方面的示例空白；
  - 与 Anthropic 提出的 `PreToolUse` 钩子规范对齐，便于后续接入更多安全工具（如沙箱、网络策略等）；
  - 适合企业用户在私有化部署中参考落地。

---

## 📈 功能需求趋势

> 基于今日有限样本的趋势观察（数据基线较低，仅供参考）：

| 趋势方向 | 信号强度 | 代表性条目 | 解读 |
|---|---|---|---|
| **🛡 工具调用安全门控** | 🟢 中等 | PR #2648 | 社区开始主动补充 `PreToolUse` 钩子示例，说明 Kimi CLI 在安全扩展点上的能力正在被验证 |
| **⏱ 错误终止与会话生命周期治理** | 🟢 明显 | Issue #2647 | 用户对"不可恢复错误后 session 应当快速终止而非死循环"存在强烈诉求，是当前最迫切的可靠性短板 |
| **🤖 Subagent 资源隔离与权限治理** | 🟢 明显 | Issue #2647 | 子代理可启动脱离主会话的后台进程并持续消耗配额，暴露出 subagent 沙箱机制的缺位 |
| ** 用量可观测性** |  潜在 | Issue #2647 | 用户在事故发生时无法直观感知"配额正在被异常消耗"，需要实时用量监控或硬上限熔断 |

---

## ‍💻 开发者关注点

综合今日数据，社区反馈集中体现以下三大痛点：

### 1. 🔥 错误终止策略缺失（高优）
**Issue #2647** 反映出：当 LLM 调用返回**确定性不可恢复错误**（如 403 auth/quota）时，主代理与子代理都缺少"快速失败 + 终止会话"的硬约束。建议方向：
- 区分**可重试错误**（5xx、网络抖动）与**不可重试错误**（401/403/配额耗尽），后者应立即终止 session；
- 对**子代理的后台调用**设置独立 quota / timeout 边界。

### 2.  Subagent 后台行为失控（高优）
Subagent 仍可向磁盘写入脚本并启动**脱离主会话生命周期**的进程，这不仅是配额问题，更是潜在的安全风险。建议方向：
- 引入 subagent **进程归属机制**，主 session 终止时级联回收；
- 对子代理启动的后台进程加 **TTL 与 watchdog**。

### 3. 🛡 安全钩子生态刚刚起步（机会窗口）
PR #2648 表明社区正在自发构建 `PreToolUse` 安全生态，官方可以考虑：
- 在文档中**正式推荐 PreToolUse 钩子规范**；
- 提供**官方 reference 钩子集合**（如命令审计、敏感文件保护、网络外联拦截等）；
- 与沙箱（如 Docker / gVisor / firejail）打通，提供更完整的安全闭环。

---

## 📊 今日数据概览

| 指标 | 数量 |
|---|---|
| 新版本发布 | 0 |
| Issue 更新 | 1 |
| PR 更新 | 1 |
| 高优 Issue | 1（配额失控类） |
| 安全/治理类 PR | 1（HOL Guard 钩子） |

---

> 📝 **编辑备注**：今日样本量较小，日报主要聚焦两条核心动态。建议明日跟踪 #2647 的维护者回应与 #2648 的评审进度。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-17

## 📌 今日速览

今日社区整体以 **v2.0 收尾与稳定通道 Bug 修复** 为主旋律，过去 24 小时无新版本发布，但有大量长期挂起 Issue（最早追溯到 2025-08）被批量关闭。值得关注的热点包括：**多工作区支持**（71 👍）、**Desktop 端 SSH 功能落地**、**Bedrock / Cloudflare / Moonshot 等多家 Provider 兼容性问题**，以及 **TUI 在 gVisor 沙箱中无法渲染的回归**。

---

## 🚀 版本发布

*无新版本发布*。从 PR #49441（rebase 后已关闭）可以看出当前主干仍在围绕 v2.0.5 进行稳定性迭代。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|------------|
| [#19515](https://github.com/anomalyco/opencode/issues/19515) | **Workspace folders 多工作区支持** | 👍 **71** / 7 评论 | **本周最热 Feature 提案**，明确的多目录实现方案，关联 symlink 相关问题集合，社区呼声极高 |
| [#2047](https://github.com/anomalyco/opencode/issues/2047) | LM Studio 无法刷新模型列表 |  23 / 👍 7 | 历史悠久的高频问题，今日关闭，反映本地 Provider 元数据同步长期存在的痛点 |
| [#33998](https://github.com/anomalyco/opencode/issues/33998) | GLM-5.2 在 opencode-go 网关 Prompt Cache 随机跌至 500 token | 💬 11 / 👍 2 | 揭示 Go 网关在系统 prompt 完全一致时缓存仍丢失，对订阅用户成本与延迟影响明显 |
| [#11319](https://github.com/anomalyco/opencode/issues/11319) | Ubuntu 24 CLI 安装失败 | 💬 11 | 安装脚本在 Ubuntu 24 的兼容性问题，影响 Linux 新用户首启体验 |
| [#18757](https://github.com/anomalyco/opencode/issues/18757) | 工具频繁 "Tool execution aborted" | 💬 10 / 👍 3 | v1.3.0 起 bash/edit/read 工具的稳定性问题，长期阻塞日常使用 |
| [#30381](https://github.com/anomalyco/opencode/issues/30381) | Cloudflare Workers AI Schema 校验失败 |  9 / 👍 2 | 同一请求中 `content` 字段类型不一致导致 oneOf 校验失败，影响 CF AI 用户 |
| [#28526](https://github.com/anomalyco/opencode/issues/28526) | Symlink / Junction 目录在选择器中不可见 | 💬 9 / 👍 4 | Linux `ln -s` 和 Windows OneDrive junction 均无法浏览，是 #19515 工作区提案的支撑案例 |
| [#29802](https://github.com/anomalyco/opencode/issues/29802) | TUI 在 gVisor 中从不进入 alt-screen | 💬 6 | 1.0.142 → 1.4.17 之间的渲染回归，影响企业级沙箱/CI 环境 |
| [#47487](https://github.com/anomalyco/opencode/issues/47487) 🟢OPEN | Agent 累积 51 张图片后被 50 张上限锁死 | 💬 5 | **当前仍 OPEN 的严重问题**，会话不可恢复，暴露 read 工具未做图片数治理 |
| [#37099](https://github.com/anomalyco/opencode/issues/37099) | Desktop v1.18.1 删除 `file://` 插件后 UI 仍残留 | 💬 5 | 插件状态在 UI 与配置之间不同步，反复启动报错 |

---

## ️ 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| [#49444](https://github.com/anomalyco/opencode/pull/49444) | Bedrock 工具结果图片按模型过滤 | 🟢OPEN | 修复 #49443：Bodrock Converse 仅部分模型支持 tool-result 中的图片，避免非支持模型请求被拒 |
| [#49453](https://github.com/anomalyco/opencode/pull/49453) | Skill 内容在调用时重新加载 | 🟢OPEN | 修复 #49451：避免磁盘编辑 Skill 后仍读旧缓存模板，新增回归测试 |
| [#49409](https://github.com/anomalyco/opencode/pull/49409) | **Desktop 端 SSH 支持** | 🔴CLOSED | 新功能：Desktop 客户端可直接连远程 SSH 服务器（合并/重开待跟踪） |
| [#46199](https://github.com/anomalyco/opencode/pull/46199) | 可配置 plans 目录 + 插件依赖安装 opt-out | 🔴CLOSED | 同时关闭 #46189/#27786/#28174/#30337，新项目不再生成 `node_modules`，根除启动挂起 |
| [#49445](https://github.com/anomalyco/opencode/pull/49445) | 不支持的附件改为按路径投递 | OPEN | 拖拽/粘贴文件时，原生支持的模型走内联；否则改为 path，让模型用工具自行读取 |
| [#49441](https://github.com/anomalyco/opencode/pull/49441) | Provider 失败重试改为 11 次 / 10s 上限 | CLOSED | 重试预算 4→10，指数退避上限 10s，同步 ±20% jitter 与对应测试 |
| [#49197](https://github.com/anomalyco/opencode/pull/49197) | Bedrock 工具结果媒体路由 | 🟢OPEN | 按模型能力 + Converse 家族行为双维度路由，避开 Azure OAuth 误关 WebSocket 的旧坑 |
| [#49447](https://github.com/anomalyco/opencode/pull/49447) | 无头 Linux 跳过 `xdg-open` | 🟢OPEN | 修复 #49446：headless 容器/CI 不再因 ENOENT 整体崩溃 |
| [#44725](https://github.com/anomalyco/opencode/pull/44725) | v2 恢复 `OPENCODE_DISABLE_CLAUDE_CODE` | 🟢OPEN | 让 v2 分支重新支持跳过读取 `~/.claude` 的 prompt 与 skills |
| [#46344](https://github.com/anomalyco/opencode/pull/46344) | 可折叠 Reasoning 卡片 | 🟢OPEN | 关联 #8789/#14340/#37115/#21548，将思考过程渲染为可折叠区块，节省屏幕空间 |

---

##  功能需求趋势

从过去 24 小时活跃的 Issues 提炼，社区关注的重点方向清晰可辨：

1. **️ 多工作区 / 项目结构** — #19515（71 👍）独占鳌头，配合 #28526 的 symlink 问题，构成"显式 workspace 支持"的核心议题。
2. ** 学习/教学型工作流** — #36521 提议 "Teach Mode"，强调 Learn-by-Doing。
3. ** 长会话导航** — #32999 要求 Desktop 端持久的右侧消息导航侧栏。
4. **🔌 插件 UI 扩展能力** — #37413 询问 opencode web 是否支持插件修改 UI。
5. **↩️ 撤销与编辑回溯** — #34576 要求 `/undo` 历史树（"我想回到 3 步之前"）。
6. **⌨️ 终端键位完备性** — #37473 提议支持 Ctrl+(Shift)+Arrow。
7. **️ Desktop 远程化** — #49409 落地 SSH，预示 Desktop 将向"远程开发客户端"演进。
8. **🧠 Reasoning 体验** — #46344 的可折叠卡片直击"思考过程占用屏幕"这一长期抱怨。

---

## ‍💻 开发者关注点（痛点与高频需求）

- **Provider 兼容性碎片化**：LM Studio、Cloudflare Workers AI、Moonshot/Kimi K2.6（schema 深度 ≤10）、Bedrock Converse、Gemini、Console Free Tier 版本门槛（#49430 / #49431 抱怨 1.18.x 仍被要求 1.17.0+）——**多 Provider 适配仍是头号成本**。
- **会话/图片治理缺失**：#47487 揭示 Agent 自身可因 read 工具累计图片把会话"砖死"，需要内置图片数治理或自动降级。
- **TUI 在受限环境中的脆弱性**：gVisor、无 display 的 headless Linux、Windows 终端键位 → 多次出现"标准配置下不可用"的回归报告。
- **Desktop UI 状态不一致**：插件残留、tab 栏不刷新、项目图标颜色无响应、cramped tab 关闭按钮丢失——大量 PR（#49436、#49440、#49429、#37485）集中在渲染细节打磨。
- **v2.0 迁移摩擦**：#49452（`opencode serve` 在 loopback 仍 401）、#44725（`OPENCODE_DISABLE_CLAUDE_CODE` 缺失）表明 v2 在权限/环境变量层面仍有遗留行为差异。
- **重试与稳定性**：PR #49441、#49426、#49268 三连击，围绕"网络抖动 / DNS 切换 / Shell 探测超时"建立更稳健的重试与超时策略，是近一周最密集的稳定性主题。

---

*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计窗口：2026-09-16 → 2026-09-17 UTC*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-17

## 📌 今日速览

今日 Pi 仓库无新版本发布，但 Issue 与 PR 流量持续高位。**两大主线问题**贯穿社区讨论：一是 Agent 循环与 provider 流中断下的**悬挂/冻结问题**（#4945、#8331、#9410），二是**会话压缩（compaction）生命周期**相关的连串 bug（#9051、#9602、#9652、#9677）。mitsuhiko 本人提交的 PR #9668 引入实验性 **prompt cache 预热** 能力，以及 PR #9548 将 system prompt/工具变更纳入 transcript，是值得长期跟踪的方向。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 / 👍 | 重要性 |
|---|-------|----------|--------|
| 1 | [#4945](https://github.com/earendil-works/pi/issues/4945) — `openai-codex`/`gpt-5.5` 连接可靠性问题，TUI 卡死在 `Working...` | 79 / 33 | ⭐⭐⭐ |
| 2 | [#5886](https://github.com/earendil-works/pi/issues/5886) — AgentSession settlement/continuation 与 assistant-tail 生命周期 bug（meta issue） | 12 / 4 | ⭐⭐⭐ |
| 3 | [#8928](https://github.com/earendil-works/pi/issues/8928) — 多进程并行启动在 expired OAuth 下误报 "No API key found" 持续 ~48s | 9 / 0 | ⭐⭐⭐ |
| 4 | [#5323](https://github.com/earendil-works/pi/issues/5323) — 改进 Vertex + GCP metadata server 支持（同步 existsSync 检测不准确） | 9 / 2 | ⭐⭐ |
| 5 | [#9165](https://github.com/earendil-works/pi/issues/9165) — Claude Opus 5 经 OpenRouter 拒绝 per-message output_config | 8 / 0 | ⭐⭐ |
| 6 | [#8331](https://github.com/earendil-works/pi/issues/8331) — Provider SSE 流中断时 agent 循环永久挂起 | 5 / 2 | ⭐⭐⭐ |
| 7 | [#9216](https://github.com/earendil-works/pi/issues/9216) — Ollama qwen3.8:27b stream 'terminated' 错误 + 0.84→0.85 回归 | 5 / 0 | ⭐⭐ |
| 8 | [#9410](https://github.com/earendil-works/pi/issues/9410) — 大会话下 Escape 中断流导致 TUI 冻结 ~60s | 4 / 0 | ⭐⭐ |
| 9 | [#9255](https://github.com/earendil-works/pi/issues/9255) — TuiMainScreen 长 transcript 全屏重绘风暴 | 4 / 1 | ⭐⭐ |
| 10 | [#9602](https://github.com/earendil-works/pi/issues/9602) — Compaction 因 thinking 消息导致 overflow | 4 / 0 | ⭐⭐ |

**为何重要**：
- **#4945** 是当前关注度最高的 issue（33 👍），直接影响 `gpt-5.5` 用户的核心交互体验；多个并行会话同时卡死的复现具有生产环境破坏性。
- **#5886** 是 mitsuhiko 亲自分类的 meta issue，关联 compaction → settlement → 续推整套流程，是理解当前 agent 状态机缺陷的关键入口。
- **#8331** 与 #4945 形成对比——前者发生在上游 provider 故障窗口（Anthropic 529），揭示 `streamAssistantResponse` 的 `for await` 没有流超时保护。
- **#8928** 提供了 **3 小时生产调试**后的确定性复现与时序数据，是少有的"工程级"诊断报告。

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 说明 |
|---|----|------|------|
| 1 | [#9668](https://github.com/earendil-works/pi/pull/9668) — feat(coding-agent): add prompt cache warming | **新功能** | mitsuhiko 提交的实验性 prompt cache 预热能力，WIP 状态 |
| 2 | [#9548](https://github.com/earendil-works/pi/pull/9548) — Mid conversation system messages | **新功能** | 将 system prompt 与工具变更写入 transcript，恢复时可还原；保留缓存前缀 |
| 3 | [#9662](https://github.com/earendil-works/pi/pull/9662) — fix(coding-agent): fail closed on user bash hook errors | **破坏性修复** | `user_bash` 抛错时改为拒绝执行，而非悄悄回退到本地 shell |
| 4 | [#9677](https://github.com/earendil-works/pi/pull/9677) — fix(coding-agent): stop compaction queue rollback from replaying accepted messages | **修复** | 修复 `flushCompactionQueue` rollback 错误重放已被接受的 prompt |
| 5 | [#9692](https://github.com/earendil-works/pi/pull/9692) — fix(tui): clip overflowing render lines instead of crashing | **修复** | TUI 单行超宽导致整会话崩溃，改为裁剪溢出行 |
| 6 | [#9682](https://github.com/earendil-works/pi/pull/9682) — fix(clipboard): keep non-ASCII text intact when pbcopy is used on macOS | **修复** | 修复 macOS `pbcopy` fallback 时非 ASCII 文本被错误转码为 MacRoman |
| 7 | [#9434](https://github.com/earendil-works/pi/pull/9434) — feat(coding-agent): allow extensions to append to the session system prompt | **新功能** | 扩展 `session_start` 钩子支持 `systemPromptAppend`，闭合 #9432 |
| 8 | [#8635](https://github.com/earendil-works/pi/pull/8635) — fix(ai): preserve aborted stop reason during lazy setup | **修复** | 修复 #8409，延迟初始化阶段 abort 信号丢失 |
| 9 | [#9570](https://github.com/earendil-works/pi/pull/9570) — fix(ai): map TOO_MANY_TOOL_CALLS to an error stop reason | **修复** | 修复 Gemini 2.21+ 新增 `TOO_MANY_TOOL_CALLS` 在穷举 switch 中未处理导致 throw |
| 10 | [#9301](https://github.com/earendil-works/pi/pull/9301) — feat(coding-agent): confirm device-code browser and clipboard actions | **新功能** | OAuth device-code 流程支持自动打开浏览器 + 复制验证码（可关闭） |

---

## 📈 功能需求趋势

从今日 issue/PR 提炼出社区最关注的方向：

1. **Provider 流可靠性 & 错误恢复** —— SSE 流中断、心跳缺失、aborted 信号丢失、错误 stop_reason 映射 是当前最高频痛点（#4945、#8331、#8635、#9570、#9681）。
2. **会话压缩（Compaction）正确性** —— 围绕 thinking block 转写、溢出重试、settlement 续推形成密集 bug 簇（#9051、#9602、#9652、#9677、#5886）。
3. **新模型/Provider 接入** —— OpenAI Codex、OpenRouter（Opus 5、Qwen3.8）、Vercel AI Gateway、Baseten、GMI Cloud、OpenCode Zen、Ollama 等异构 provider 的协议兼容（#9165、#9685、#9690、#9629、#9216、#9676）。
4. **企业云认证改进** —— Vertex/GCP metadata server、过期 OAuth 凭证处理、device-code 体验（#5323、#8928、#9301）。
5. **Extension API 扩展能力** —— session 替换、system prompt 追加、overlay 选择排除、setModel/setThinkingLevel 的 persist 选项（#5952、#9434、#8744、#9639）。
6. **TUI 性能 & 大会话体验** —— 长 transcript 重绘、Escape 中断冻结、剪贴板非 ASCII 编码（#9410、#9255、#9692、#9682）。
7. **Prompt Cache 与成本优化** —— session-affinity 头、cache 预热、prefix 保留（#9629、#9668、#9548）。

---

## 💬 开发者关注点

通过梳理 issue 描述与 PR 反馈，开发者当前最强烈的痛点集中在以下几方面：

- **生产级稳定性焦虑**：多位开发者提到 "spent 3 hours debugging in production"、"no visible error, only way to recover is Escape"，反映 Pi 在 **静默失败 → 状态不一致** 路径上缺乏可观测性。
- **compaction 与 thinking block 是一对纠缠的难题**：Anthropic 的 `reasoning_extraction` 分类器会拒绝转写后的 thinking（#9652），本地 Qwen 的 thinking 长度会撑爆 context（#9602），而 #9051 又揭示 compact handler 在 overflow retry 中被忽略——开发者意识到这是 **agent 状态机设计层面** 的问题。
- **provider 协议碎片化**：OpenRouter / Vercel / OpenCode 等网关在 output_config、session header、unsigned thinking 等细节上的不一致，要求 Pi 维护者付出大量 `compat` 适配成本（#9099、#9165、#9676、#9690）。
- **跨平台细节陷阱**：Windows ConPTY 鼠标追踪、Git for Windows bash pipeline 孤儿进程、macOS `pbcopy` MacRoman 转码——表明 Pi 在非 macOS/Linux 主流平台的鲁棒性仍有缺口。
- **扩展系统正在走向成熟**：#9434（systemPromptAppend）、#5952（session replacement API）、#8744（overlay exclusion）说明 extension 作者群体已不满足于"能挂上 UI"，开始要求 **与 built-in TUI 同等的能力**。

---

*数据来源：github.com/badlogic/pi-mono，统计窗口：2026-09-16 ~ 2026-09-17*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-17**

---

## 1. 今日速览

Qwen Code 今日发布 **v0.24.0** 正式版本，包含一项核心破坏性变更（命令钩子的 Bash 变量展开行为调整）。社区热度集中在三大方向：**VSCode 远程开发（Remote-SSH / Dev Container）的 Webview 连通性问题**、**Web Shell / Desktop 的安全凭证管理**、以及**非会话上下文（system prompt + tool schemas）的 token 治理**。多个由 `yiliang114` 和 `qwen-code-dev-bot` 提交的高质量 PR 进入 review 阶段，涵盖 OpenTUI 渲染对齐、桌面端冒烟测试稳定性与 Playwright Browser SDK 引入。

---

## 2. 版本发布

### v0.24.0（正式版）
- **Breaking Change**：命令钩子现在允许 Bash 自动展开项目目录变量（[PR #11864](https://github.com/QwenLM/qwen-code/pull/11864)，@qqqys）。
- 同步发布夜间构建 `v0.24.0-nightly.20260916.b8def02aad`（含 ACP 边界合并记录、CI 导出修复等）。
- 预发布 `v0.23.5-preview.0`：记录 Windows inode 守卫覆盖范围并解除部分 skip；修复 CUA 在 Linux 上的观测丢失。

---

## 3. 社区热点 Issues

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| 1 | [#8596](https://github.com/QwenLM/qwen-code/issues/8596) 弃用 Electron 桌面端、将 `desktop-shell` 更名为 `desktop` | 9 | **架构路线**：明确 Tauri 为桌面未来，与 `desktop-shell` 命名权争夺，社区讨论度高 |
| 2 | [#11556](https://github.com/QwenLM/qwen-code/issues/11556) vscode-ide-companion 0.23.1 在 Remote-SSH 下 webview 卡死 | 8 | **VSCode 集成阻塞**：跨架构（x64↔arm64）远程场景直接不可用 |
| 3 | [#11728](https://github.com/QwenLM/qwen-code/issues/11728) REST docs 契约守卫 fail-open 漏洞 | 8 | **测试治理**：揭示守卫"绿但不真"的几处漏检，影响 API 文档可信度 |
| 4 | [#11976](https://github.com/QwenLM/qwen-code/issues/11976) Webview 在 VS Code Dev Container 中无法访问工作区守护进程 | 6 | **IDE 集成**：动态端口绑定未走 `asExternalURI`，是 Remote-SSH 系列问题的另一面 |
| 5 | [#5883](https://github.com/QwenLM/qwen-code/issues/5883) 将聊天面板统一到 web-shell | 6 | **UI 架构**：跨 web-shell / VSCode webview / Desktop 的长期重构提案（已 CLOSED） |
| 6 | [#11955](https://github.com/QwenLM/qwen-code/issues/11955) 桌面端忽略 `ui.theme` 与 `general.language` 设置 | 6 | **用户可见缺陷**：设置生效但 UI 不变，影响所有多语言/主题用户 |
| 7 | [#12023](https://github.com/QwenLM/qwen-code/issues/12023) 远程 SSH 下 VSCode 插件加载工作区失败 | 5 | **中文用户高频反馈**：与 #11556 / #11976 同源 |
| 8 | [#11359](https://github.com/QwenLM/qwen-code/issues/11359) 整理 Daemon REST & SSE API 文档 | 5 | **生态拓展**：集成方呼吁统一 API 索引、可运行示例 |
| 9 | [#12040](https://github.com/QwenLM/qwen-code/issues/12040) web-shell 在拒绝 `?daemon=` 覆盖时，将跨域 fragment 凭证写到当前 origin | 4 | **安全**：凭证持久化键处理错误，潜在跨站凭据污染 |
| 10 | [#12028](https://github.com/QwenLM/qwen-code/issues/12028) 非会话上下文 token 治理跟踪 | 4 | **性能路线**：系统提示+QWEN.md+技能列表在每轮请求中"被忽视的开销"，配套计划 PR #12034 已开放讨论**

---

## 4. 重要 PR 进展

| PR | 内容 | 价值 |
|----|------|------|
| [#11538](https://github.com/QwenLM/qwen-code/pull/11538) 按模型选择 OpenAI wire API（`chat-completions` / `responses`） | 让单模型在 CLI/ACP/daemon/WebShell/VSCode 中携带实际协议 | **多协议兼容** |
| [#11806](https://github.com/QwenLM/qwen-code/pull/11806) 修复 12 处 OpenTUI 与 ink 渲染的差异 | 8 处由并排实测发现，4 处由逐行对比脚本发现 | **渲染一致性** |
| [#11241](https://github.com/QwenLM/qwen-code/pull/11241) 新增基于 Playwright 的 Browser SDK | 在常驻 Node REPL 中控制已有 Chrome，API 借鉴 Codex Browser Use | **浏览器代理能力** |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) Rewind 映射锚定稳定的 prompt identity | 解决重排/续会后无法正确回退的痛点 | **会话可靠性** |
| [#11563](https://github.com/QwenLM/qwen-code/pull/11563) 保留飞书富文本与引用资源 | 图片/链接/代码块原生 Markdown，引用消息中的资源按原 message_id 下载 | **多通道适配** |
| [#12049](https://github.com/QwenLM/qwen-code/pull/12049) 桌面冒烟测试等待 daemon 退出再清理工作区 | 修复 cleanup 与 daemon 子进程的竞态 | **CI 稳定性** |
| [#11975](https://github.com/QwenLM/qwen-code/pull/11975) web-shell 支持宿主设置项排除 | 宿主可隐藏指定设置项与原生块，模型选择保留 | **嵌入集成灵活性** |
| [#12039](https://github.com/QwenLM/qwen-code/pull/12039) web_fetch 保留 HTML 表格结构 | 解决 Turndown 无表格规则导致 `<table>` 被压平为段落的丢失 | **工具可用性** |
| [#11821](https://github.com/QwenLM/qwen-code/pull/11821) shell 分割器认识 `#` 注释 | `splitCompoundCommandSegments` 增加注释状态机 | **权限解析正确性** |
| [#12034](https://github.com/QwenLM/qwen-code/pull/12034) 非会话上下文 token 治理计划文档 | 配合 #12028，提出从"百分比"切到"绝对值"的治理思路 | **性能路线蓝图** |

> 另：`#12004`（Ink UI 中显示正在运行的 Hook 及结果）、`#12003`（统一 Ink 与 `/hooks list` 的注册表读取）、`#12001`（跨工具往返统计 Stop-hook 阻塞次数）、`#12000`（`agent()` 支持显式工具白名单）已合并/关闭，反映 Hook 系统与子代理能力正在快速收敛。

---

## 5. 功能需求趋势

1. **IDE 远程开发生态完善**：VSCode Remote-SSH / Dev Container / 跨架构场景成为头部痛点（#11556、#11976、#12023），`asExternalURI`、动态端口桥接、webview 初始化路径是核心修复面。
2. **桌面/Web Shell 收敛**：#8596、#5883、#11975、#11955 共同指向 "**Tauri desktop-shell 即未来桌面**" 的整合方向，需统一聊天面板、设置项排除与主题/语言链路。
3. **多模型与多协议兼容**：#11538 把 wire API 选择下沉到模型维度，回应"同一 OpenAI 兼容厂商、两种调用协议"的需求。
4. **浏览器/前端代理能力**：Playwright Browser SDK（#11241）+ web_fetch 表格保留（#12039）共同扩展 agent 的网页操作能力。
5. **上下文性能与成本治理**：#12028 + #12034 形成"先跟踪、再治理"的双轨，目标是替换/精简系统提示与工具 schema。
6. **安全凭证治理**：#12040、#12010 暴露 web-shell 在跨域 `?daemon=` 覆盖与导航路径下的 token 持久化问题。
7. **生态文档与集成**：#11359（REST/SSE 文档）、#11475（远程 daemon 工作流）反映第三方集成方对官方 API 指南的强需求。

---

## 6. 开发者关注点

- **远程场景连通性是 P1 阻塞**：跨平台 + 容器化部署时 webview↔daemon 的握手失败，是被多个用户独立报告的"同一根因"。
- **配置文件改动不生效**：#11955 暴露桌面端读取设置但不应用到 UI 的链路断裂；#12014 指出 `--system-prompt` 文档与实际行为不一致（注入额外 git 上下文）。**配置可观测性 + 文档同步** 成为高频抱怨。
- **CLI 在 Windows/终端边缘的稳定性**：#12027 的 `Invalid array length` 崩溃 + #11806 的 OpenTUI 与 ink 差异，说明从 Ink 迁移 OpenTUI 的"长尾"问题正在浮出。
- **CI 抖动与可重复性**：#11633（ECS runner 升级失败）、#11953（重复发布触发全矩阵）、#11001（交互 PTY 清理）显示维护者持续在压低 CI 误报。
- **Token 成本意识觉醒**：开发者开始以"绝对值"而非"百分比"看待 system prompt + tool schemas 的开销（#12028），期待官方提供可观测与可治理机制。

---

*日报基于 GitHub 公开数据整理；Issue/PR 评论数为 24 小时内更新维度。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报

**日期：2026-09-17**

---

## 1. 今日速览

今日社区核心围绕 **v0.9.14 重构收尾**与 **TUI 性能优化**双线推进：一方面持续清理遗留的巨型模块、清理 Fleet/agent 概念重叠与 Session 持久化所有权问题，另一方面密集合入了一批性能 patch（每帧重复计算、深度拷贝、重复哈希等热点已逐一修复）。同时 **MCP 协议升级到 2026-07-28** 与 **ACP 会话 ID 不一致**问题进入正式修复通道。

---

## 2. 版本发布

过去 24 小时无新 Release。`v0.9.14` 仍处于多项重构与缺陷收尾阶段，CRATE 分解与性能专题 PR 集中合入主干，尚未发布新版本。

---

## 3. 社区热点 Issues

| # | 标题 | 状态 | 评论数 | 为什么值得关注 |
|---|---|---|---|---|
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC-005: CodeWhale TUI Crate 分解（Umbrella） | OPEN | 29 | 当前最高优先级 umbrella，跟踪全部 TUI crate 拆分工作的 owner、依赖顺序与完成证据；本日报多数议题都在其下 |
| [#6207](https://github.com/Hmbown/Codewhale/issues/6207) | Session picker 拒绝可恢复的已存 Session | OPEN | 15 | 实测 bug——runtime store 存在但 host 不匹配时直接报错，影响所有跨进程恢复场景，社区反馈高 |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | v0.9.12 巨型模块拆解（lib.rs/config.rs/client.rs/runtime_threads.rs） | OPEN | 8 | C09 核心执行项，4 个超大文件的拆分进度直接影响 0.9.14 收尾节奏 |
| [#6036](https://github.com/Hmbown/Codewhale/issues/6036) | Fleet 与 agent 概念重复，字段含义混乱 | OPEN | 5 | 数据模型层面的根本问题；创始人亲自下场指出 "scout 同时存于两处"，是清理工作的源头 |
| [#6145](https://github.com/Hmbown/Codewhale/issues/6145) | Command contract：完成 FEAT-02x 改造 | OPEN | 3 | 命令调度抽象尚未完成最后一组；`crates/command-contract` 仍停留在 shapes-only 阶段 |
| [#6139](https://github.com/Hmbown/Codewhale/issues/6139) | app-server 无法驱动一个 turn | OPEN | 3 | 架构层缺陷：`app-server` 应作为 Runtime API 的 client，或链接已抽取的 engine；与 #6144 同属清理 backlog |
| [#4173](https://github.com/Hmbown/Codewhale/issues/4173) | 去硬编码 ModelProvider 与 tool registries | OPEN | 3 | 长生命周期 issue，列出 81 个模型、31 个 provider、52 个 tool 结构的硬编码来源，需统一治理 |
| [#6290](https://github.com/Hmbown/Codewhale/issues/6290) | 菜单导航键位无统一词汇，相邻屏幕行为不一致 | OPEN | 1 | 创始人直接点名 Fleet 菜单"混乱"，要求横纵一致的导航语义；UX 一致性首次进入主线 |
| [#6276](https://github.com/Hmbown/Codewhale/issues/6276) | v0.9.14 Runtime API steer 假投递（已闭环记录） | CLOSED | 2 | 用户唯一可干预运行中 turn 的通道"撒谎"——`item.completed` 无条件发、被丢弃的 steer 也报"已发送"，影响严重 |
| [#6277](https://github.com/Hmbown/Codewhale/issues/6277) | Subagent 预算耗尽时静默吞掉 reserved report turn | OPEN | 2 | subagent 可靠性缺陷：worker 预留的报告额度被后代消费，超额时无任何回执 |

---

## 4. 重要 PR 进展

| PR | 标题 | 影响 |
|---|---|---|
| [#6286](https://github.com/Hmbown/Codewhale/pull/6286) | `fix(tui)`: 压缩后保留 chat role | 修复 strict paired chat template 拒绝 `user→assistant(tool_calls)→tool→user` 的问题，避免 compaction 后的 turn 失败 |
| [#6258](https://github.com/Hmbown/Codewhale/pull/6258) | Shoreline：TUI 重新设计（rebase 干净版） | 将 #6222 的 redesign commits 抢救性 cherry-pick 到当前 main（更新 200 commits），Shoreline 成为新装默认主题 |
| [#6281](https://github.com/Hmbown/Codewhale/pull/6281) | `feat(mcp)`: 协议版本协商（2025-06-18）+ dsh bundle-mode 转换器 | 第一阶段 MCP 升级：server + 两端 client 声明新版本、stdio 不再要求 exact match；#6280（2026-07-28）仍待跟进 |
| [#6279](https://github.com/Hmbown/Codewhale/pull/6279) | `fix(tui)`: 限定 `recommended_plugins` 每个引擎仅一次 | 引入 `RecommendedPluginGate`，被已加载 skill 命名的插件不再推送，关闭 #6274 |
| [#6273](https://github.com/Hmbown/Codewhale/pull/6273) | `perf(tui)`: 防抖保存时消除两次全量深拷贝 | 落实 #6214 T3，每次 debounced flush 从 3 次 `Vec<Message>` 拷贝降到 1 次，热路径明显降本 |
| [#6271](https://github.com/Hmbown/Codewhale/pull/6271) | v0.9.14 性能 slice 包（#6213 T4/T5、#6244、#6235） | 4 个独立 commit：T4 停止每 delta 重解析参数、T5 减少 shell/hook/cloud 重建工作，外加两个 bug 修复 |
| [#6284](https://github.com/Hmbown/Codewhale/pull/6284) | `test(runtime)`: 中断 turn 的 pending-user-input settlement | 关闭 #6275，覆盖 `TurnComplete: Interrupted` 路径，结束 pending 状态表面最后一个未钉死分支 |
| [#6264](https://github.com/Hmbown/Codewhale/pull/6264) | `perf(tui)`: shell/hook/cloud 路径停止 per-call 重建 | 落实 #6208 全部 5 项：zero-alloc 镜像缓存、auth precompute 等，行为不变 |
| [#6260](https://github.com/Hmbown/Codewhale/pull/6260) | `fix(acp)`: 跟踪 Session 的 prefix reload 改为幂等 | 关闭 #6245，`session/load` 的 fast path 用原始 sessionId 命中已跟踪条目时的重复入列问题 |
| [#6268](https://github.com/Hmbown/Codewhale/pull/6268) | `fix(ci)`: 让 main 的 Lint 转绿，解锁 0.9.14 闸门 | 4 个 gate 在 PR 上是 advisory、在 push 上是 fatal，导致 main 红而 PR 绿；明确隔离状态 |

---

## 5. 功能需求趋势

从今日 Issues 中提炼出的社区最关注方向：

1. **架构清理与模块化** —— crate 拆解（#5316、#5586、#6034）、命令契约落地（#6145、#6096）、Session 持久化职责明确（#6144）、app-server 与 Runtime API 边界（#6139）。
2. **TUI 性能与渲染优化** —— 重复计算、深度拷贝、每行 lowercase/split、镜像缓存（#6213、#6214、#6211、#6209、#6208 一连串 PR 已落地）。
3. **Provider & 模型注册治理** —— 去硬编码（#4173）、Fleet/agent 数据模型合并决策（#6036、#6038、#6034）、ProviderSetupTemplate 平铺为普通 provider（#6289）。
4. **MCP 协议对齐** —— 升级到 2026-07-28 / 2025-06-18（#6280、#6281）、连接监督与自动重连（#6187）。
5. **Subagent 可靠性** —— 预算池正确性（#6277）、write-claim 扇出（#6278）、role 选择器歧义（#6244）、跨 host session 恢复（#6207）。
6. **UX 一致性** —— 菜单导航词汇统一（#6290）、新 prompt 上箭头行为（#6291）、`$EDITOR` 与 TUI 终端所有权冲突（#6235）。

---

## 6. 开发者关注点

- **"实测反推文档/数据模型"成为主流工作模式**：#6036、#6038、#6290 都由创始人直接给出"现场吐槽"，Issue 内贴实测命令输出、文件路径与行号，开发者用同等方式响应——例如 #6271 在 PR 内主动声明"两项与 issue 要求相反，并已说明理由"。
- **"行为保留 + 结构迁移"被反复强调**：#6096（FEAT-025）、#6264、#6267 等 PR 都明确标注 "no user-visible behaviour change"，表明社区高度警惕重构引入回归。
- **热点是冷路径里的重复劳动**：#6273 一次防抖保存深拷贝 3 次、#6267 每行 lowercase/split、#6209 每次 MCP 请求重哈希整个 bundle——开发者更愿意就地消灭低层冗余，而不是接受更高层抽象。
- **CI 闸门是 release 真实瓶颈**：#6268 指出 PR 上 advisory、push 上 fatal 的 4 个 gate 长期让 main 红——这是 0.9.14 无法发布的关键工程债。
- **协议一致性问题是近期阻塞**：MCP（#6280）、ACP（#6174）、steer receipts（#6276）三项均涉及"客户端展示与后端实际行为不一致"，用户信任受损；社区对这类"假账"零容忍，关单极快（#6272、#6174、#6276 均已 CLOSED）。

---

*日报生成基于 GitHub 数据：过去 24 小时活跃 Issues 40 条（取评论数 Top 30）、PRs 22 条（取 Top 20）。完整列表请参阅 [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*