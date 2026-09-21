# AI CLI 工具社区动态日报 2026-09-21

> 生成时间: 2026-09-21 02:48 UTC | 覆盖工具: 9 个

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

# AI CLI 工具横向对比分析报告（2026-09-21）

---

## 一、生态全景

AI CLI 工具赛道已度过"功能可用"窗口，整体进入**工业化深耕期**：一方面，OpenAI Codex 在 24 小时内连发 4 个 alpha 版本（v0.156.0-alpha.10→.13），OpenCode / Qwen Code 各更新 50 条 Issue + 50 条 PR，呈现高频迭代特征；另一方面，Claude Code、GitHub Copilot CLI、Kimi CLI 等成熟仓库则以"清理历史 Bug、修复版本回归"为主，新代码合入几近于零。社区诉求已从"能不能跑"转向**生产可用性三角**——**可观测性（Subagent 状态、Token 透明）、可靠性（Windows 跨平台、配置生效、会话恢复）、安全性（OAuth 凭据、工具调用边界脱敏）**——任何一项短板都会显著影响开发者采纳意愿。

---

## 二、各工具活跃度对比

| 工具 | 24h Release | 热点 Issue | PR 数 | 总体状态 |
|------|------------|-----------|-------|---------|
| **OpenAI Codex** | 4 个 alpha | 10 | 12 | 🚀 极速迭代，0.156.0 即将转正 |
| **OpenCode** | 0 | 50（多为 CLOSED） | 50 | 🛠 V2 迁移收尾，工程化最重 |
| **Qwen Code** | 1（v0.24.2 稳定版） | 10 | 10 | 🏗 伞形议题驱动，结构化推进 |
| **DeepSeek TUI** | 0（0.10.0 冲刺） | 5 | 9 | 🎯 单点攻坚，release readiness |
| **Claude Code** | 0 | 10 | 5 | 🔥 模型质量与权限回归双焦点 |
| **Gemini CLI** | 1（v0.62.0 nightly） | 10 | 10 | 🤖 Agent 可靠性议题最密集 |
| **Pi (pi-mono)** | 1（v0.86.1 紧急修复） | 10 | 7 | ⚠️ 0.86 回归阵痛 + 新 Provider |
| **Kimi CLI** | 0 | 17（2 OPEN） | 3 | 🪶 极简节奏，Windows 雷区集中 |
| **Copilot CLI** | 0 | 33（多为 CLOSED） | 0 | 📦 纯收尾期，无代码合入 |

---

## 三、共同关注的功能方向

### 1. 🪟 Windows 平台适配（最普遍痛点）
涉及工具：**Pi**（#7547 累计 67 条评论）、**Codex**（#44102 / #45307 / #46590）、**Kimi**（#773 / #1429 / #1436 / #2629→#2657）、**Claude Code**（#77136 跨平台）、**OpenCode**（#38297）
诉求：CJK IME 输入法、GBK/ascii codec、Gitbash 启动、Windows 全屏 TUI 渲染、Win32 always-on-top——已成为 **AI CLI 工具的"跨平台鸿沟"**。

### 2. 🔌 MCP 协议兼容与扩展
涉及工具：**Copilot CLI**（#4870 Figma、#4606 Google Workspace、#4910 Azure）、**Codex**（#44458 / #45269 handshake 回归）、**Gemini**（#29320 middleware 顺序）、**Kimi**（#1487 HTTPS User-Agent）
诉求：远程 MCP 服务器发现失败、OAuth issuer mismatch、`capabilities.experimental` 字段冲突——**MCP 生态繁荣但 CLI 端实现脆弱**。

### 3. 🧠 长上下文 / Token 治理
涉及工具：**Qwen Code**（#12028 伞形议题，#12029 预算失效，#12054 内置工具占 45.9% 非对话上下文）、**OpenCode**（#38076 空载 42k token、#22103 subagent 用量未汇入）、**Pi**（#9062 O(N²) 解析、#6665 Intl.Segmenter 未缓存、#9810 长会话 106k/162k 重计费）、**Gemini**（#22745 AST 感知读取）
诉求：上下文膨胀导致成本不可控；社区呼吁**显式 size 跟踪 + 预算可配置化 + 评测闭环**。

### 4. 🤖 Subagent / Agent 可靠性
涉及工具：**Gemini**（#22323 Subagent MAX_TURNS 误报成功、#21409 Generalist 永久挂起、#21983 Wayland 浏览器子代理崩溃）、**Claude Code**（subagent 生态）、**Kimi**（#2650 子代理 OAuth 超时）
诉求：终止语义准确性、状态汇报真实性、跨通道降级——**Agent 已从"能用"进入"可运维"阶段**。

### 5. ⚙️ 配置项生效与可见性
涉及工具：**Copilot CLI**（#3762 contextTier、#3874 preToolUse 钩子、#1886 .github/mcp.json、#3589 多钩子 additionalContext）、**Gemini**（#22267 Browser Agent 忽略 settings、#21335 /compress 不持久化、#20079 symlink agent）、**Claude Code**（#60955 "Classify session states" 文档缺失，👍 22）
诉求：**"配置被静默忽略"是高级用户最沮丧的体验类 Bug**。

### 6. 💾 会话持久化与恢复
涉及工具：**Copilot CLI**（#4098 / #2012 events.jsonl 截断、U+2028 破坏）、**Claude Code**（#81425 auto-mode 会话永久挂起）、**Qwen Code**（#12091 sessions/delete 永久破坏、P1）、**Gemini**（#18836 WriteToDo 跨会话失忆）
诉求：resume / checkpoint / fork 三件套在不同 CLI 中均存在脆弱点。

### 7. 🔐 OAuth / 认证流
涉及工具：**Claude Code**（#22992 设备码认证 RFC 8628、#92215 Design MCP 403）、**Gemini**（#29282 凭据未立即持久化）、**Kimi**（#2650 子代理 OAuth 超时）、**Copilot CLI**（#4606 issuer mismatch）
诉求：**Headless/CI 环境认证**和**多通道凭据隔离**是 OAuth 设计的两个未解难题。

### 8. 🖥 TUI / UX 体验打磨
涉及工具：**Codex**（今日 12 条 PR 全部聚焦 TUI：配额提示、转写定位、鼠标导航、右键复制、truecolor）、**OpenCode**（#9955 间距优化 👍 21）、**Pi**（#9062 / #9807 800+ 消息会话性能）
诉求：TUI 正从"能用"走向"好用"，社区对**视觉密度 + 增量渲染**提出更高要求。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 模型行为质量 + 复杂工作流编排 + MCP 一方集成 | 高级开发者 / 企业 Pro/Max 订阅 | Claude 4.7/4.8/5.0/Fable 模型驱动，权限分类器侧重 |
| **OpenAI Codex** | IDE 级别 LSP 集成 + 多平台（macOS/Win/Linux/Desktop）+ Computer Use | 追求最新 GPT 模型的专业用户 | 极速 alpha 迭代、TUI 极致打磨、Electron Desktop + Rust CLI 双栈 |
|

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-21**

---

## 1. 热门 Skills 排行（基于 PR 关注度）

| 排名 | PR / Skill | 核心功能 | 状态 |
|------|-----------|---------|------|
| 1 | **#1298 skill-creator 触发评估修复** ([link](https://github.com/anthropics/skills/pull/1298)) | 修复 skill-creator 评测中 `select()` 在 Windows 子进程管道上的失败、误报 0% 召回率等关键缺陷 | 🟢 OPEN |
| 2 | **#1771 proofcore-contract-auditor** ([link](https://github.com/anthropics/skills/pull/1771)) | Solidity/Rust 智能合约静态分析 + 将审计证明锚定到 TON 区块链（Web3 场景） | 🟢 OPEN |
| 3 | **#1742 mcp-builder 兼容性修复** ([link](https://github.com/anthropics/skills/pull/1742)) | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 改名与自定义 headers 注入 | 🟢 OPEN |
| 4 | **#1703 md2video-audio** ([link](https://github.com/anthropics/skills/pull/1703)) | 零成本把 Markdown 一键转 MP4 视频（含类人语音旁白，Marp + TTS） |  OPEN |
| 5 | **#822 AWT (AI Watch Tester)** ([link](https://github.com/anthropics/skills/pull/822)) | 零代码 E2E 测试生成，赋予 Claude 浏览器视觉与控制能力 | 🟢 OPEN |
| 6 | **#1776 blast-radius** ([link](https://github.com/anthropics/skills/pull/1776)) | 批量/破坏性写入前的检查清单，覆盖"行级正确 ≠ 世界级正确"的关键盲点 | 🟢 OPEN |
| 7 | **#525 pyxel 复古游戏开发** ([link](https://github.com/anthropics/skills/pull/525)) | Python 复古游戏创作、调试、headless 验证一体化 | 🟢 OPEN |
| 8 | **#514 document-typography** ([link](https://github.com/anthropics/skills/pull/514)) | 排版质量控制：自动修复孤词、寡头段落、编号错位等典型 AI 文档缺陷 | 🟢 OPEN |

**讨论热点**：
- 🔧 **基础设施类** (#1298, #1742) — skill-creator 与 mcp-builder 是社区"造轮子"必经之路，任何 bug 都会放大到所有 Skill。
- 🎨 **内容生成类** (#1703) — Markdown → 视频是 AIGC 高频刚需。
- 🛡️ **安全与可靠性类** (#1776) — bulk 操作前的"爆炸半径"反思，反映社区对 Agent 自动化的风险意识。
- 🎮 **垂直场景类** (#525, #822, #1771) — 游戏、Web3、测试三大非传统领域持续渗透。

---

## 2. 社区需求趋势（按 Issues 评论数排序）

| 需求方向 | 代表 Issue | 关注度 | 核心诉求 |
|---------|-----------|--------|---------|
| 🔒 **安全 / 命名空间信任** | [#492](https://github.com/anthropics/skills/issues/492) |  43 / 👍 2 | 社区 Skill 借 `anthropic/` 命名空间冒充官方，存在**信任边界漏洞**，呼吁平台层做品牌隔离 |
|  **企业级共享与发现** | [#228](https://github.com/anthropics/skills/issues/228) | 💬 16 / 👍 8 | 缺少组织级 Skill 共享机制，仍需手动下载 `.skill` 文件经 Slack/Teams 传递 |
| ⚙️ **skill-creator 评测可靠性** | [#556](https://github.com/anthropics/skills/issues/556) | 💬 12 / 👍 7 | `run_eval.py` 触发率长期 0%，导致优化信号失真 |
| 🧠 **Agent 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 💬 9 / 👍 0 | 提议 `compact-memory` Skill，用符号化记号替代长程 Agent 的 prose 记忆 |
| 🏛️ **AI 治理 / 审计模式** | [#412](https://github.com/anthropics/skills/issues/412) | 💬 6 / 👍 0 | 提议 `agent-governance` Skill，覆盖策略执行、威胁检测、信任评分、审计日志 |
| 🧩 **插件去重 / 元数据治理** | [#189](https://github.com/anthropics/skills/issues/189) | 💬 6 / 👍 9 | `document-skills` 与 `example-skills` 重复内容导致上下文膨胀 |
| 🪟 **上下文窗口保护** | [#1487](https://github.com/anthropics/skills/issues/1487) | 💬 4 / 👍 0 | `claude-api` 单次工具调用注入 ~156k tokens，需 lazy load |
| 🛡️ **三段式质量门禁** | [#1385](https://github.com/anthropics/skills/issues/1385) | 💬 4 / 👍 1 | 提议 Pre-task Calibration → Adversarial Review → Delivery Verification 管线 |
| 🔌 **生态互通** | [#16](https://github.com/anthropics/skills/issues/16) / [#29](https://github.com/anthropics/skills/issues/29) | 💬 4 / 👍 0 | 把 Skill 暴露为 MCP / 在 AWS Bedrock 上运行 |

**趋势小结**：
- **新 Skill 提案集中方向**：AI Agent 治理（governance/safety）、记忆压缩、Web3 合约审计、企业文档治理（SharePoint）、E2E 测试自动化、视频内容生成。
- **元诉求集中方向**：评测可观测性、上下文预算、命名空间信任、跨平台兼容。

---

## 3. 高潜力待合并 PR（即将落地）

| PR | 主题 | 推荐合并优先级 |
|----|------|---------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测 Windows/运行时修复 | ⭐⭐⭐⭐⭐ 阻塞所有 Skill 优化 |
| [#1769](https://github.com/anthropics/skills/pull/1769) | 修复 trigger detection 0% recall | ⭐⭐⭐⭐⭐ 配套 #1298 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder ≥2.0 适配 | ⭐⭐⭐⭐ MCP 生态必经 |
| [#1724](https://github.com/anthropics/skills/pull/1724) | evaluation.py 默认升级到 Sonnet 5 | ⭐⭐⭐ 即时收益 |
| [#1703](https://github.com/anthropics/skills/pull/1703) | md2video-audio | ⭐⭐⭐ 内容创作刚需 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius | ⭐⭐⭐⭐ 安全类空白填补 |
| [#822](https://github.com/anthropics/skills/pull/822) | AWT E2E 测试 | ⭐⭐⭐ 测试自动化新高地 |

> 全部 20 条热门 PR 均处 **OPEN** 状态，社区合并节奏明显滞后于提交量，**skill-creator 相关修复（#1298、#1769、#539）和 mcp-builder 系列** 是最可能近期落地的批次。

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"让 Skill 本身更可信"——既包括命名空间信任与安全沙箱（#492、#1776），也包括 skill-creator 的评测可靠性（#1298、#556、#1769）与上下文预算治理（#1487、#189）；在此基础上，企业级共享（#228）、平台互通（Bedrock/MCP）与垂直场景（Web3、HPC、E2E 测试、视频生成）构成下一波增长方向。**

---

📌 **建议关注列表**（可直接 Star/Watch）：
`anthropics/skills#1298` · `#1769` · `#1742` · `#1771` · `#1703` · `#1776` · `#492` · `#228`

---

# Claude Code 社区动态日报
**日期：2026-09-21**

---

## 📌 今日速览

今日社区热度持续聚焦在**模型行为质量**话题上 — 累计 124 条评论、436 个 👍 的 Issue #77136 长期霸榜，反映用户对 Claude 4.7/4.8/5.0/Fable 等版本"重复性修辞癖好"问题的强烈不满。短期内，多个 9 月 18–21 日提交的新 Issue 集中在 **v2.1.270+ 的 Auto-mode 权限分类器回归**、**Chrome 扩展误拦截**、**Claude Design MCP OAuth 流失效** 等问题，疑似 9 月中旬版本更新引发的连锁故障。

---

## 🚀 版本发布

过去 24 小时内无新 Release。

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|----------|
| [#77136](https://github.com/anthropics/claude-code/issues/77136) | **Claude 4.7/4.8/5.0/Fable 反复出现修辞癖好，难以生成连贯散文** | ⭐⭐⭐⭐⭐ | 评论 124 / 👍 436。模型质量负面反馈的最强信号，长期未解决 |
| [#76694](https://github.com/anthropics/claude-code/issues/76694) | **Cowork 合并后新项目丢失"选择文件夹"入口** | ⭐⭐⭐⭐ | 评论 30 / 👍 26。Chat/Cowork 合并造成的功能回归，影响跨平台（Windows/macOS）核心 UX |
| [#22992](https://github.com/anthropics/claude-code/issues/22992) | **支持 RFC 8628 设备码认证（headless 环境）** | ⭐⭐⭐⭐ | 评论 19 / 👍 36。Pro/Max 订阅用户在无头 CI/CD 中 OAuth 流程无法使用的痛点 |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | **Claude in Chrome 扩展自 9/18 起全面拦截 reddit.com** | ⭐⭐⭐ | 评论 7 / 👍 5。回归型 bug，影响关键浏览场景 |
| [#92215](https://github.com/anthropics/claude-code/issues/92215) | **Claude Design 一方 MCP 始终返回 403，OAuth 流失效** | ⭐⭐⭐ | 评论 6 / 👍 4。错误信息指向不存在的 `/design-login` 命令，体验断裂 |
| [#84698](https://github.com/anthropics/claude-code/issues/84698) | **Desktop 端擅自后台 `git fetch` 且无法禁用** | ⭐⭐⭐ | 评论 6 / 👍 3。隐私与透明度问题，缺乏设置开关 |
| [#72957](https://github.com/anthropics/claude-code/issues/72957) | **Write/Edit 工具静默解码 `\uXXXX` 转义序列** | ⭐⭐⭐ | 评论 4。跨平台 bug，导致转义文本被破坏性写入磁盘 |
| [#81425](https://github.com/anthropics/claude-code/issues/81425) | **VS Code/Cursor 扩展 auto-mode 后会话永久挂起** | ⭐⭐⭐ | 评论 3。auto-mode `classifier_request_finished` 后无超时机制，每次会话平均触发 4–6 次 |
| [#95200](https://github.com/anthropics/claude-code/issues/95200) | **v2.1.270 引入 Auto-mode 回归：12× 拒绝率，Manual 模式 55+ 点击** | ⭐⭐⭐ | 评论 3。独立开发者因权限分类器过度拦截损失发布日时间，影响生产工作流 |
| [#60955](https://github.com/anthropics/claude-code/issues/60955) | **"Classify session states" 开关缺乏文档说明（隐私/成本影响）** | ⭐⭐⭐ | 评论 2 / 👍 22。文档缺口涉及隐式数据收集，👍/评论比显示高关注度 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 关键内容 |
|---|------|----------|
| [#95423](https://github.com/anthropics/claude-code/pull/95423) | **diff mod: 仅在写入型 shell 命令后刷新 diff** | `ls`/`git status`/`cat`/grep 等只读命令不再触发多余网络请求，节省带宽 |
| [#95698](https://github.com/anthropics/claude-code/pull/95698) | **fix(plugins): ralph-wiggum 与 output-style hooks 用 bash + 引用路径执行** | 修复 #95673 及 #78490 的部分问题，bundled 插件的 `.sh` hooks 路径未加引号导致执行失败 |
| [#95587](https://github.com/anthropics/claude-code/pull/95587) | **diff: 恢复会话时打开 diff 面板，`/clear` 关闭行为对齐** | 修复 diff mod 与内置面板在三个场景下的行为差异（已关闭） |
| [#94847](https://github.com/anthropics/claude-code/pull/94847) | **diff: 首次编辑仅在有文件可列时才打开面板** | 解决对仓库外、忽略文件、跨 worktree 写入时显示空面板的体验问题 |
| [#95618](https://github.com/anthropics/claude-code/pull/95618) | **telemetry: 完整行经 `$` 收集、批量发送，仅服务内置插件** | 遥测 mod 读取 `next.origin`，拒绝第三方插件并给出原因（已关闭） |

---

## 📈 功能需求趋势

从近 24 小时的 50 条 Issue 中可归纳出以下热点方向：

1. **🧠 模型行为与输出质量**（占比最高）
   - 修辞癖好、连贯性下降、英国英语泄漏、未经验证就断言事实并持久化到 memory
   - 代表：#77136、#90603、#91679、#95436、#95771

2. **🔐 认证 / OAuth 流**
   - 设备码认证（headless）、MCP OAuth 流程修复、登录后 token 未持久化
   - 代表：#22992、#92215、#95425

3. **🛡️ 权限与安全**
   - Auto-mode 分类器回归、Chrome 扩展误拦截、诊断输出隐私警告
   - 代表：#95200、#95326、#75869

4. **🧰 工具可靠性（Write/Edit/EnterWorktree/iOS Simulator）**
   - Unicode 转义序列被破坏、非嵌套 worktree 绑定失败、Xcode 27 升级后 touch 静默失效
   - 代表：#72957、#95389、#95466

5. **🖥️ IDE / Desktop 集成**
   - VS Code/Cursor 会话挂起、桌面端后台网络请求无法禁用、ghost-text 建议
   - 代表：#81425、#84698、#87999

6. **🔌 MCP 与连接器**
   - Claude Design MCP 403、Google Drive 无法更新现有文件内容、cloud session tag push 403
   - 代表：#92215、#95292、#95576

---

## 💬 开发者关注点

### 主要痛点

- **v2.1.270 是一次问题更新**：至少 5 条新 Issue（#95200、#95297、#95425、#95466、#95480）明确指向该版本引入的回归，涵盖权限分类器、升级流程、登录 token 持久化、模型行为。**强烈建议在生产环境锁定或回退版本**。
- **Auto-mode"看似智能，实则失控"**：多个独立开发者反馈权限分类器对自有账号的常规操作过度拦截，而 Manual fallback 需要数十次点击，已成为**生产可用性瓶颈**。
- **透明度与可控性缺失**：Desktop 端 `git fetch`、隐式的 `Classify session states` 开关说明、Chrome 扩展无差别拦截 — 开发者普遍要求提供**显式开关**与**清晰的错误原因**。
- **跨平台/工具链对齐**：Xcode 27 用 DeviceHub 替换 Simulator.app 后未同步适配；Windows 的 Win32 always-on-top 问题；Linux 下 Write 工具的 Unicode 处理 — **外部依赖升级未联动测试**是反复出现的根因。

### 高频需求

- ⚙️ Headless / CI 环境认证（设备码、token 导出）
- 🪟 VS Code/Cursor 扩展稳定化（超时、日志、prompt 建议）
- 📜 端到端文档化（隐私开关、计费流程、MCP 配置）
- 🧪 模型输出风格可配置化（locale → spelling、CoT 不外泄、减少修辞癖好）

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) · 采样窗口：2026-09-20 → 2026-09-21*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-21**

---

## 📌 今日速览

今日 Codex 仓库最显著的动态是 **0.156.0-alpha 系列在 24 小时内连发四个迭代版本**（alpha.10 → alpha.13），节奏明显加快，预示正式版本即将临近。社区层面，**Windows Desktop 的稳定性问题持续高发**——多条高评论 Issue 都集中在"首轮后第二条消息无法发送"、"发送按钮禁用"、"进程崩溃"等场景；同时 **TUI 体验优化 PR 集中合并**，涉及配额提示、转写定位、鼠标导航、右键复制等一批细节打磨。

---

## 🚀 版本发布

| 版本 | 链接 |
|------|------|
| rust-v0.156.0-alpha.13 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.13) |
| rust-v0.156.0-alpha.12 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.12) |
| rust-v0.156.0-alpha.11 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.11) |
| rust-v0.156.0-alpha.10 | [Release](https://github.com/openai/codex/releases/tag/rust-v0.156.0-alpha.10) |

> 官方 Release Notes 暂未补充详细 changelog，从节奏判断 0.156.0 正式版预计在本周内发布。

---

## 🔥 社区热点 Issues

1. **[#38350](https://github.com/openai/codex/issues/38350)** — 重复执行的定时任务在成功运行后会被自动暂停  
   ⭐ 评论 69 | 标记 `bug` `codex-web` `automations`  
   影响 ChatGPT 网页端的多个无关定时任务同时被关闭，但官方仓库仍处 OPEN，亟需官方介入。

2. **[#8745](https://github.com/openai/codex/issues/8745)** — Codex CLI 内置 LSP 集成（自动检测 + 自动安装）  
   ⭐ 👍 496 | 评论 66 | 标记 `enhancement` `agent`  
   整个仓库中 👍 数最高的 Issue，社区强烈呼吁通过 LSP 让 CLI 获得诊断与符号智能能力。

3. **[#29343](https://github.com/openai/codex/issues/29343)** — Chrome 插件 / 浏览器与计算机使用拒绝访问部分网站  
   ⭐ 评论 31 | 标记 `bug` `app` `computer-use` `browser`  
   Codex 在 Pro 高价订阅下对某些网站静默拒绝加载，严重影响 Computer Use 体验。

4. **[#44102](https://github.com/openai/codex/issues/44102)** — Windows Desktop 首轮结束后无法发送后续消息  
   ⭐ 评论 26 | 标记 `bug` `windows-os` `app` `app-server`  
   与 #45307、#46590 构成"Windows Desktop 第二条消息失败"系列问题，反复出现说明根因未修复。

5. **[#25921](https://github.com/openai/codex/issues/25921)** — Codex Desktop Crashpad 待处理 dump 每天增长 5GB  
   ⭐ 评论 20 | 标记 `bug` `app` `performance`  
   严重的本地资源泄漏，桌面端 `pending/` 目录会无限膨胀，存在磁盘占满风险。

6. **[#41019](https://github.com/openai/codex/issues/41019)** — 无法定位 Codex CLI 二进制（Windows）  
   ⭐ 评论 17 | 标记 `CLOSED` `windows-os` `app`  
   Windows 用户在最新版本中启动 Codex App 失败，根因是 Electron 资源未包含 `bin/codex`。

7. **[#41622](https://github.com/openai/codex/issues/41622)** — 增加关闭自动会话摘要的配置项  
   ⭐ 👍 83 | 评论 16 | 标记 `enhancement` `CLI` `config`  
   用户认为对老用户而言，自动 recap 是噪音和延迟来源，希望能通过 `config.toml` 关闭。

8. **[#45307](https://github.com/openai/codex/issues/45307)** — Windows Desktop 首次成功后发送按钮被禁用  
   ⭐ 评论 14 | 标记 `bug` `windows-os` `app`  
   GPT Pro 用户在 Win11 上首条消息之后按钮即变灰，与 #44102 高度相关。

9. **[#44458](https://github.com/openai/codex/issues/44458)** — macOS CLI 0.154.0 实验性能力破坏内置 MCP 启动  
   ⭐ 评论 13 | 标记 `bug` `mcp` `CLI` `computer-use`  
   `messages` 和 `computer_history` MCP 服务器因 `capabilities.experimental` 字段而启动失败，与 #45269 共同指向 MCP 握手回归。

10. **[#29361](https://github.com/openai/codex/issues/29361)** — Codex Desktop 恢复线程时因 `thread_tools` 而崩溃  
    ⭐ 评论 10 | 标记 `bug` `app` `app-server`  
    桌面端发出 bundled CLI 不识别的 feature override，导致 SIGKILL，macOS 用户几乎无法使用。

---

## 🛠 重要 PR 进展

> 今日 41 条 PR 几乎全部由 `copyberry[bot]` 自动化发起并合并（CLOSED），主要围绕 TUI 体验精细化打磨。

1. **[#46929](https://github.com/openai/codex/pull/46929)** — 移除 TUI `config.toml` 加载错误中的 `Error` 前缀，错误信息更简洁。
2. **[#46922](https://github.com/openai/codex/pull/46922)** — 修复 Realtime V3 转写对讲者交接（handoff）的协调，避免新语音被旧 final 覆盖。
3. **[#46917](https://github.com/openai/codex/pull/46917)** — 模型目录强制检查运行时 provider 要求，避免缓存导致旧 provider 配置生效。
4. **[#46912](https://github.com/openai/codex/pull/46912)** — 让配额警告始终在 TUI composer 提示行可见，避免用户忽略额度。
5. **[#46910](https://github.com/openai/codex/pull/46910)** — 打开设置选择器时保持转写阅读位置不滚动，错误/确认仍可见。
6. **[#46905](https://github.com/openai/codex/pull/46905)** — `/status` 中将连接行从 `Remote` 改名为 `Server`，本地后台服务器显示更清晰。
7. **[#46902](https://github.com/openai/codex/pull/46902)** — 当转写尾部已可见时，自动隐藏 "Back to bottom" 控件。
8. **[#46899](https://github.com/openai/codex/pull/46899)** — 转写列表在流式结束后间距统一，解决多行项后空白不一致问题。
9. **[#46897](https://github.com/openai/codex/pull/46897)** — Activity Charts 使用 `effective_stdout_color_level()`，让 Windows Terminal 等终端正确显示 truecolor。
10. **[#46884](https://github.com/openai/codex/pull/46884)** — 转写链接支持普通左键单击打开，并为裸 URL 添加样式。
11. **[#46877](https://github.com/openai/codex/pull/46877)** — 允许 subagent 触发 MCP elicitation，浏览器登录、表单输入等交互不再被阻塞。
12. **[#46867](https://github.com/openai/codex/pull/46867)** — 在父 agent 流式回答期间延迟渲染 subagent 活动，防止权威消息被冲掉。

---

## 📈 功能需求趋势

从近期高赞 Issue 与 PR 合并方向可以看出社区关注焦点：

- **IDE/LSP 体验**：#8745 的 496👍 表明用户希望 Codex CLI 真正成为"IDE 级别"工具，而非裸 LLM。
- **TUI 体验打磨**：今日合并 PR 集中在配额提示、转写定位、鼠标交互、颜色等级、右键复制、快捷键分组等微观细节，TUI 正从"能用"走向"好用"。
- **MCP 协议扩展**：#44458、#45269、#45889、#46877 共同显示社区强烈推进 MCP 协议细节（`experimental` capability、elicitation、auth-change）的健壮性。
- **会话上下文可控性**：#41622（关闭 recap）、#6049（MCP-only 模式）反映用户希望对上下文与工具集有更细粒度控制权。
- **桌面宠物与个性化**：#44546（移除桌面宠物）成为新晋讨论焦点，说明装饰性功能正在挤压专业用户空间。
- **贡献者激励**：#37585 提出对高质量 Bug 报告者给予 Work/Codex credits，体现社区期待官方建立正向反馈循环。

---

## 🧑‍💻 开发者关注点

1. **Windows Desktop 稳定性集中爆发** — 首轮后消息丢失、按钮禁用、崩溃、CLI 二进制缺失构成一连串体验阻塞（#44102、#45307、#46590、#41019、#38433），是 Pro 用户的头号痛点。
2. **资源泄漏与性能开销** — Crashpad dump 无限增长（#25921）与 SQLite TRACE churn（#35308）反映后台存储治理缺失。
3. **MCP 握手回归** — 0.154.x 引入的 `capabilities.experimental` 字段与多家第三方 MCP（如 Fantastical、bundled messages）冲突，开发者希望保留向后兼容。
4. **Sandbox 与审批策略不透明** — #43633、#43675 指出 Windows sandbox 把已显式授权的命令也以 "blocked by policy" 拒绝，错误信息缺乏可操作性。
5. **CLI 默认行为过载** — 自动 recap（#41622）、模型拒绝完成任务（#42124）等表明 CLI 缺少"安静模式"开关。
6. **远程控制入会可观测性差** — #27167 期待 mobile remote 给出 actionable 错误而非长期 "Waiting for computer"。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)（过去 24 小时窗口）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-21**

---

## 📌 今日速览

今日 Gemini CLI 发布了夜间构建版本 v0.62.0-nightly，社区议题热度集中在 **Subagent 可靠性** 与 **Auto Memory 系统** 两大方向，多个 P1 级 Bug 集中浮现（如子代理挂起、状态误报、Wayland 浏览器子代理崩溃等），反映出当前 Agent 体系在多轮终止语义、状态汇报准确性方面仍有结构性短板。

---

## 🚀 版本发布

### v0.62.0-nightly.20260921.gcfbcaa8df

夜间构建版本已发布，对应 PR #29433 为自动化版本号 bump。从昨日 commit `gcfbcaa8df` 推算，本日构建主要合入了依赖更新、Auto Memory 相关修复（#29431、#29432）以及 A2A / OAuth 相关稳定性改进。

🔗 [查看完整 Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260920.gcfbcaa8df...v0.62.0-nightly.20260921.gcfbcaa8df)

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后被误报为 GOAL 成功
- **优先级**：P1 · **评论数**：13（最高）
- `codebase_investigator` 子代理虽然内部已触及最大轮次限制，仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了真实中断。
- **重要性**：直接破坏 Agent 系统的可观测性与可信度，是当下讨论最热烈的核心问题。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 永久挂起
- **优先级**：P1 · 👍 8 · **评论数**：8
- 委派给 generalist agent 后会无限挂起，简单的文件夹创建都需要等待一小时以上。明确指示"不要委派"可绕过。
- **重要性**：点赞数最高，说明大量用户在生产场景中遇到，严重影响日常工作流。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 利用 Gemini 3 模型的 Bash 亲和力：零依赖 OS 级沙箱
- **优先级**：P2 · **评论数**：9
- 提议利用 Gemini 3 对 POSIX 工具链（`grep`、`sed`、`awk`）的原生亲和性，结合 OS 级沙箱与执行后意图路由，在保证安全的同时释放模型能力。
- **重要性**：是一项大型 Enhancement，描绘了"模型原生化"的产品愿景。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取、搜索与映射
- **优先级**：P2 · **评论数**：7
- 通过 AST 工具一次性定位方法范围，降低上下文膨胀（每轮基线约 36.6k tokens）。
- **重要性**：与"上下文治理"这一长期痛点高度相关，为 Tactful Extraction 等下游优化铺路。

### 5. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 需引入确定性脱敏并减少日志
- **优先级**：P2 · **评论数**：5
- Auto Memory 在将转录内容送入模型前才依赖模型做秘密脱敏，存在先泄露再补救的风险。
- **重要性**：安全相关，影响企业用户采纳意愿。

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 对低信号会话无限重试
- **优先级**：P2 · **评论数**：4
- 提取代理若不读取某个 session，会话就永远保留在 inbox 中，导致低信号会话被反复处理。
- **重要性**：体现 Auto Memory 队列管理机制不完善。

### 7. [#29425](https://github.com/google-gemini/gemini-cli/issues/29425) — Code Assist Standard 配额误报 QUOTA_EXHAUSTED
- **优先级**：P1 · **评论数**：2（但为最新 P1 商业问题）
- 付费用户 Flash 配额剩余 95.8% / Pro 100%，但 CLI 仍报错 QUOTA_EXHAUSTED。
- **重要性**：直接阻断企业用户使用，影响商业收入。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser 子代理在 Wayland 下失败
- **优先级**：P1 · **评论数**：4
- Wayland 环境（Linux 现代桌面协议）下 browser subagent 直接退出 GOAL 但无实际产出。
- **重要性**：跨平台可用性的关键问题。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 软链接形式的 agent 文件无法被识别
- **优先级**：P2 · **评论数**：4
- `~/.gemini/agents/filename.md` 为 symlink 时不会作为子代理加载，限制了用户通过 dotfiles 管理 agent 的灵活性。
- **重要性**：影响高级用户工作流与生态可扩展性。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent 应避免 / 劝阻破坏性行为
- **优先级**：P2 · **评论数**：3
- 模型偶尔会直接执行 `git reset --force` 等破坏性命令，缺乏更安全的引导。
- **重要性**：安全防御姿态的延伸，关乎用户对 Agent 自主性的信任。

---

## 🔧 重要 PR 进展（精选 10 条）

### 1. [#29433](https://github.com/google-gemini/gemini-cli/pull/29433) — 版本 bump 到 v0.62.0-nightly
自动化版本号更新，对应今日发布。

### 2. [#29432](https://github.com/google-gemini/gemini-cli/pull/29432) — fix(core): 调度器销毁时正确处理排队的工具调用
- 在 Scheduler 被释放时通过已有的 rejection wrapper 清空队列，避免已销毁的调度器仍会执行后续批次的工具调用。
- 关联 Agent 生命周期问题，呼应 #22323 类 Subagent 终止语义问题。

### 3. [#29431](https://github.com/google-gemini/gemini-cli/pull/29431) — fix(core): 跳过无效的 TOML 策略规则
- 修复空工具名导致启动崩溃、shell-command 字段冲突仍被强制执行的问题。

### 4. [#29282](https://github.com/google-gemini/gemini-cli/pull/29282) — fix(auth): 登录成功后立即持久化 OAuth 凭据
- 修复 OAuth 完成登录后未立即写入磁盘，导致后续 CLI 调用再次要求 Google 登录。

### 5. [#29342](https://github.com/google-gemini/gemini-cli/pull/29342) — fix(cli): 避免输入历史嵌套状态更新
- 重构 `useInputHistoryStore`，解决 React StrictMode 双调用引发的状态更新异常。

### 6. [#29320](https://github.com/google-gemini/gemini-cli/pull/29320) — fix(a2a-server): 在 A2A 路由之前注册 express.json
- 修复 JSON-RPC 处理器因 body 未解析而失败的 middleware 顺序问题。

### 7. [#29319](https://github.com/google-gemini/gemini-cli/pull/29319) — fix(sdk): 保护 sendStream 中 tool-call 参数的 JSON.parse
- 为畸形 JSON 增加 try/catch，避免 SDK 流式响应中断。

### 8. [#29303](https://github.com/google-gemini/gemini-cli/pull/29303) — fix(cli): 保持代理对（surrogate pair）在截断边界完整
- 修复 TUI 渲染时 emoji 因截断产生未配对代理而静默丢失的问题；同 #29304 互补。

### 9. [#29229](https://github.com/google-gemini/gemini-cli/pull/29229) — fix(cli): settings 编辑器拒绝非有限数
- 修复 `1e309` 解析为 `Infinity` 后被静默存储为 `null` 导致配置损坏的问题。

### 10. [#26686](https://github.com/google-gemini/gemini-cli/pull/26686) — feat(cli): 扩展安装支持 git submodules
- 安装 Git 仓库扩展时正确初始化 submodule，避免扩展残缺安装。

---

## 📈 功能需求趋势

从今日活跃议题来看，社区需求呈现以下几条主线：

1. **🧠 Agent 可观测性与可靠性**
   - Subagent 终止语义（#22323）、状态汇报准确性、bug 报告中子代理信息缺失（#21763）、`/chat share` 暴露子代理轨迹（#22598）形成完整链路。
   - 表明 Agent 已经从"能用"进入"可运维"阶段。

2. **🔐 安全与权限治理**
   - Auto Memory 确定性脱敏（#26525）、破坏性命令劝阻（#22672）、零依赖 OS 沙箱（#19873）共同指向"沙箱 + 工具治理"。

3. **⚡ 上下文与性能优化**
   - AST 感知文件读取（#22745 / #22746）、Tactful Extraction（#19561）、大于 128/400 个工具时的 400 错误（#24246）说明工具膨胀问题已显化。

4. **🤖 模型原生能力释放**
   - 利用 Gemini 3 的 Bash 亲和力（#19873）、Skill 与子代理主动调用（#21968）反映社区希望模型不再被"过严的 prompt 包裹"。

5. **🌐 跨平台与企业化**
   - Wayland 浏览器支持（#21983）、VS Code Companion 终端焦点（PR #28183）、Code Assist 配额计算（#29425）表明产品正向企业 / IDE 工作流延伸。

---

## 👨‍💻 开发者关注点

综合议题反馈，开发者当前最集中的痛点包括：

- **🪲 子代理挂起与"假成功"**：用户期望失败的轮次限制被如实上报，而非伪装为 GOAL，从而避免在 CI、批处理脚本中误判。
- **📦 临时文件 / 脚本污染工作区**：#23571 显示模型倾向于在随机目录生成临时脚本，对 `git commit` 卫生造成负担，需要更严格的"workspace boundary"。
- **🔁 任务追踪持久化**：WriteToDo 仅存在上下文中（#18836），跨会话失忆，开发者呼吁基于文件 + CRUD 的持久任务跟踪。
- **🔑 Skill 与子代理的自动调用**：#21968 指出模型即便安装了相关 skill / subagent，也极少主动调用，需要更明确的触发信号或更智能的路由器。
- **💼 配额与计费可见性**：付费用户对 QUOTA_EXHAUSTED 误报（#29425）极度敏感，需要后端在客户端解码前的明确响应。
- **🛠️ 设置层覆盖失效**：Browser Agent 忽略 `settings.json`（#22267）、`/compress` 不持久化（#21335）、symlink agent 不识别（#20079）等"配置不生效"问题，是高级用户的核心困扰。

---

*本日报由 GitHub Issues / PRs 数据自动生成，数据时间窗口为 2026-09-20 ~ 2026-09-21。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-21**

---

## 📌 今日速览

过去 24 小时 Copilot CLI 仓库异常活跃——共有 **33 条 Issue** 被更新，其中大量长期悬而未决的 Bug 在今日批量关闭（多数通过修复或方案回应处理），但仍有多个影响生产可用性的问题处于 OPEN 状态。**MCP 生态兼容性**成为今日最大焦点：Figma、Azure、Google Workspace 等多个远程/托管 MCP 服务器在发现、认证、调用各环节暴露问题。无新版本发布，亦无新 PR 合入。

---

## 🚀 版本发布

**无新版本发布**。过去 24 小时 Releases 列表为空。

---

## 🔥 社区热点 Issues

以下为今日最值得关注的 10 条 Issue，按评论数与社区反响排序：

### 1. [#4870](https://github.com/github/copilot-cli/issues/4870) — Figma MCP 远程服务器发现失败 `[CLOSED]`
**评论：8 | 👍：11** | 今日互动最热
Figma 官方托管 MCP 服务器（`mcp.figma.com`）能完成认证和初始化，但 CLI 的 `server/discover` 探测收到 `-32601` 后将其视为致命错误，导致工具从未注册。**已在 VS Code 中正常工作**，说明这是 CLI 端的兼容性问题，影响使用 Figma 设计交付的团队。

### 2. [#3762](https://github.com/github/copilot-cli/issues/3762) — `contextTier` 配置项不生效 `[CLOSED]`
**评论：7** | 长上下文模型配置失效
用户设置了 `contextTier` 期望启用长上下文模型，但 CLI 实际仍使用短上下文模型；**只有手动用 model picker 选过一次长上下文模型后，配置才生效**。典型的"配置被忽略"问题，反映了配置层与运行时之间的同步 Bug。

### 3. [#1675](https://github.com/github/copilot-cli/issues/1675) — Checkpoint 回滚永久删除未跟踪文件 `[CLOSED]`
**评论：5** | **严重数据丢失风险**
回滚到检查点时会执行 `git clean -fd`，**永久删除所有未跟踪文件**——包括用户尚未提交的实验代码。Escape 触发的恢复操作存在这种破坏性行为，已等待 7 个月才正式关闭。

### 4. [#4224](https://github.com/github/copilot-cli/issues/4224) — Subagent OTel span 缺少计费属性 `[CLOSED]`
**评论：5 | 👍：1**
通过 `task` 工具委派给 subagent 的模型调用在 OpenTelemetry span 中**完全缺失** `github.copilot.nano_aiu` 和 `github.copilot.cost` 属性，导致企业级外部成本核算**严重低估真实账单**。

### 5. [#4839](https://github.com/github/copilot-cli/issues/4839) — 增加禁用任务栏图标选项 `[OPEN]`
**评论：4 | 👍：3**
当用户开启多个会话时，任务栏图标堆积严重，希望提供关闭选项。属于 UI/UX 层面的轻量级功能请求，社区支持度高。

### 6. [#3874](https://github.com/github/copilot-cli/issues/3874) — `preToolUse` 钩子拒绝失效 `[CLOSED]`
**评论：4**
用户安装了 `preToolUse` 钩子意图拒绝所有命令，但实际未被执行。涉及权限系统和插件生态的**安全策略失效问题**。

### 7. [#1886](https://github.com/github/copilot-cli/issues/1886) — `.github/lsp.json` / `.github/mcp.json` 不生效 `[CLOSED]`
**评论：4 | 👍：4**
仓库根的 LSP 与 MCP 配置文件未被 CLI 识别。多语言项目（F# 等）配置工作流的**关键缺口**。

### 8. [#4606](https://github.com/github/copilot-cli/issues/4606) — Google Workspace MCP OAuth 失败 `[OPEN]`
**评论：3 | 👍：1**
原生 HTTP MCP 认证流程因 `accounts.google.com` 末尾斜杠导致的 **issuer mismatch** 而在浏览器授权之前就失败，影响 Google 生态用户接入。

### 9. [#3589](https://github.com/github/copilot-cli/issues/3589) — 多个 Hook 的 `additionalContext` 只保留最后一个 `[OPEN]`
**评论：3 | 👍：2**
当多个 `sessionStart` 或 `subagentStart` 钩子同时输出 `additionalContext` 时，**只有最后一个被注入上下文**，前面的全部丢失。影响插件组合使用。

### 10. [#4448](https://github.com/github/copilot-cli/issues/4448) — 内置搜索工具卡死无响应 `[CLOSED]`
**评论：3**
内置 `grep` 工具在某些环境下会**卡死数分钟**，用户不得不自行编写 work-around 说明文件。属于工具稳定性问题。

---

## 🛠️ 重要 PR 进展

**过去 24 小时无 PR 更新**。仓库今日仅有 Issue 端动作，代码侧暂未有合入。

---

## 📈 功能需求趋势

通过对全部 33 条活跃 Issue 的标签与内容分析，社区关注焦点集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **MCP 生态兼容** | #4870, #4606, #4910, #4731, #1886 | 🔥🔥🔥🔥🔥 |
| **会话恢复与持久化** | #4098, #2012, #4673 | 🔥🔥🔥🔥 |
| **配置与钩子系统** | #3762, #3874, #3589, #1886 | 🔥🔥🔥🔥 |
| **BYOK / 模型支持** | #3118 (gpt-5.5), #2670 (BYOK 误报 premium) | 🔥🔥🔥 |
| **跨平台稳定性** | #4918 (ARM64 Linux), #3958 (Windows .bat), #2726 (iTerm2) | 🔥🔥🔥 |
| **资源与性能** | #4807 (33GB 日志 + 221% CPU), #4910 (idle timeout) | 🔥🔥 |
| **UI/UX 微调** | #4839 (任务栏), #3692 (Escape 行为), #3034 (stash prompt) | 🔥🔥 |

---

## 💡 开发者关注点与痛点

综合今日数据，开发者社区反馈中的高频痛点可归纳为：

1. **MCP 是"双刃剑"**：生态快速扩张，但**发现协议、认证流程、错误处理**在 CLI 端表现脆弱，多个主流服务器（Figma、Azure、Google Workspace）出现兼容性陷阱。

2. **会话完整性是隐忧**：`events.jsonl` 文件被多种方式破坏——截断事件、U+2028/U+2029 字符、resume 后无法再 resume——使 `/resume` 的可靠性大打折扣（#4098、#2012）。

3. **"配置不生效"类 Bug 高发**：`contextTier`（#3762）、`preToolUse` 钩子（#3874）、`.github/mcp.json`（#1886）——多个 Issue 反映**用户配置被静默忽略**，调试体验极差。

4. **数据销毁风险**：`git clean -fd` 在 checkpoint restore 时执行（#1675），**直接吞掉未跟踪文件**，属于高危操作缺乏安全网。

5. **遥测与计费不一致**：subagent 调用未上报 cost 属性（#4224）、BYOK 模型被误判为 premium（#2670）——**企业用户做成本归因时面临数据缺失**。

6. **极端情况下的资源失控**：#4807 揭示了空闲进程在 35 小时内写出 **33 GB 日志**并消耗两核 CPU 的事件风暴，反映文件监听/事件循环缺乏防护。

7. **可观察性问题**：多个 Issue 提到"调试日志无法定位"，说明现有日志粒度不足以让用户自助排查。

---

> 📊 **日报小结**：今日是 Copilot CLI 仓库的"批量收尾日"，多个长期 Issue 被关闭，但围绕 **MCP 互操作性**与**会话可靠性**的新问题（#4870、#4910、#4918、#4919）仍在累积。建议持续关注下一批 PR 与 Release，预期团队将优先处理 MCP 兼容性与 session JSONL 健壮性。
>
> 🔗 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-21**
**数据范围：GitHub 仓库 MoonshotAI/kimi-cli 过去 24 小时动态**

---

## 一、今日速览

过去 24 小时仓库没有新的 Release 发布，社区活跃度集中在 **3 个新提交的 PR** 与 **17 条被更新的 Issue**。值得关注的是，仍有 **2 条 OPEN 状态的 Bug**（subagent OAuth 超时、大输入栈溢出），而早期积累的多条历史 Bug 与功能请求已在本批次集中关闭，显示出维护团队对积压 Issue 的清理节奏明显加快。当日提交的 3 个 PR 均聚焦于 **Windows/web 兼容性与会话稳定性**。

---

## 二、版本发布

**无新版本发布。** 仓库在最近 24 小时内未发布任何 Release，建议关注后续的 2.0.x 补丁版本（修复 Issue #2655 的栈溢出问题）。

---

## 三、社区热点 Issues

### 🚨 仍处于 OPEN 状态的关键 Bug

#### 1. #2655 - 大输入栈溢出导致客户端崩溃（最新 Bug）
- **状态**：OPEN｜创建：2026-09-20
- **影响**：用户在使用 `kimi -p` 提交约 900KB 输入时，**在网络请求发起前**客户端即崩溃，栈溢出发生在路径正则匹配环节。
- **重要性**：属于阻塞级别的高危 Bug，直接影响长 prompt 场景，目前无 PR 关联。
- 🔗 [Issue #2655](https://github.com/MoonshotAI/kimi-cli/issues/2655)

#### 2. #2650 - 子代理 OAuth 偶发超时失败
- **状态**：OPEN｜创建：2026-09-17｜评论：1
- **影响**：主会话正常的情况下，subagent 启动时会偶现 `auth.kimi.ai` OAuth 连接超时，重试后可成功。
- **重要性**：直接影响多代理工作流的稳定性，社区反馈已记录但尚未修复。
- 🔗 [Issue #2650](https://github.com/MoonshotAI/kimi-cli/issues/2650)

---

### 📌 高关注度已关闭 Issue（今日更新）

#### 3. #1414 - 权限弹窗直接切换 YOLO 模式（共情度最高，👍3）
- 用户希望在授权弹框中增加一键切换到 yolo 模式的选项。
- **意义**：👍 数最高的功能请求之一，反映出高频开发者对 "减少交互摩擦" 的强烈诉求。
- 🔗 [Issue #1414](https://github.com/MoonshotAI/kimi-cli/issues/1414)

#### 4. #773 - Windows 平台 ascii codec 崩溃
- 输入任何内容即崩溃，Python 的 `ascii` codec 无法编码字符。
- **重要性**：典型的 Windows 兼容性 Bug，影响所有中文/非 ASCII 用户；👍1、8 条评论，老 Bug 终于关闭。
- 🔗 [Issue #773](https://github.com/MoonshotAI/kimi-cli/issues/773)

#### 5. #1321 - 系统内核变量未做防御性清洗导致服务失效
- `claude code` 通过 `~/.kimi/` 注入异常变量引发整体失效，**kimi cli 未做防御性清洗**。
- **重要性**：👍1，触及多客户端/多工具协作场景，安全防御性问题。
- 🔗 [Issue #1321](https://github.com/MoonshotAI/kimi-cli/issues/1321)

#### 6. #729 - 命令执行确认增加 "skip" 选项
- 当模型执行的命令可能有副作用或耗时较长时，期望跳过而非阻塞。
- **意义**：与 #1414 一脉相承，凸显社区希望 **更细粒度的执行控制**。
- 🔗 [Issue #729](https://github.com/MoonshotAI/kimi-cli/issues/729)

#### 7. #1487 - HTTPS MCP 缺少默认 User-Agent
- HTTP MCP 客户端需要包含默认 `User-Agent` 头，否则服务端可能拒绝请求。
- **重要性**：MCP 协议栈的标准合规性问题。
- 🔗 [Issue #1487](https://github.com/MoonshotAI/kimi-cli/issues/1487)

#### 8. #1429 - Windows 平台并发写入 Permission denied
- 并发场景下文件写入报 `Errno 13`，影响 1.19.0。
- 🔗 [Issue #1429](https://github.com/MoonshotAI/kimi-cli/issues/1429)

#### 9. #1436 - Gitbash 启动 Kimi 失败
- Windows + Gitbash 组合下 kimi 无法启动，多 Bash 场景兼容性问题。
- 🔗 [Issue #1436](https://github.com/MoonshotAI/kimi-cli/issues/1436)

#### 10. #1482 - 是否支持多任务并发？
- 用户希望并行执行多个任务（目前会被 "conversation still generating" 拦截），并希望路径选择支持模糊匹配。
- **意义**：关系到 CLI 是否能进入 **并行 Agent 工作流** 这一产品方向。
- 🔗 [Issue #1482](https://github.com/MoonshotAI/kimi-cli/issues/1482)

---

## 四、重要 PR 进展

> 今日共 **3 个新 PR**，全部 OPEN 状态，均为定向 Bug Fix。

#### 1. #2658 - Web 端保留 IME 输入法组合状态
- **作者**：dvd233｜修复 Issue #2643
- **内容**：在 `kimi web` 中按 Enter 提交时，若 CJK IME 组合未完成，应确认组合字符而非提交 prompt。修复 WKWebView 在 macOS 下 `isComposing` 提前清除的时序问题。
- 🔗 [PR #2658](https://github.com/MoonshotAI/kimi-cli/pull/2658)

#### 2. #2657 - Print 模式处理不支持的 stdout 编码
- **作者**：dvd233｜修复 Issue #2629
- **内容**：Windows 控制台使用 GBK 等遗留编码时，print 模式输出抛 `UnicodeEncodeError`。修复方案是按 stdout 编码对输出进行 sanitize。
- 🔗 [PR #2657](https://github.com/MoonshotAI/kimi-cli/pull/2657)

#### 3. #2656 - 为 OpenCode Go 主机注入 x-opencode-session
- **作者**：FOWEPJF255｜解决 Issue #2653
- **内容**：OpenCode Go 要求稳定的 `x-opencode-session` 头，否则返回 400。本 PR 自动识别 `opencode.ai` / `*.opencode.ai` 官方域名，并在 `openai_legacy` 路径下自动注入当前 Kimi session id。
- 🔗 [PR #2656](https://github.com/MoonshotAI/kimi-cli/pull/2656)

> 因当日 PR 总数较少，**全部列出**；未来若有大量 PR，将按"修复严重性 + 跨平台覆盖度 + 关联热度"维度优选 Top 10。

---

## 五、功能需求趋势

综合今日关闭 + 仍 OPEN 的 Issue 提炼，社区需求集中在以下方向：

| 方向 | 代表 Issue | 共识度 |
|------|-----------|--------|
| **更智能的执行控制（YOLO / skip）** | #1414、#729 | ⭐⭐⭐ 最高 |
| **Windows & 多 Shell 兼容性** | #773、#1429、#1436、#2657 | ⭐⭐⭐ |
| **Web UI 体验升级** | #1340、#1475、#2658 | ⭐⭐ |
| **MCP 协议合规与扩展** | #1487 | ⭐⭐ |
| **Shell 模式增强（pseudo-cwd）** | #766 | ⭐⭐ |
| **并行 / 多任务执行** | #1482 | ⭐ |
| **路径选择 UX 优化（模糊匹配）** | #1482 | ⭐ |
| **OpenCode / 第三方主机互操作** | #2656、#1289 | ⭐ |

**总体判断**：社区需求已从"基础功能可用"过渡到 **"高效工作流"** 与 **"跨平台一致性"** 阶段。

---

## 六、开发者关注点与痛点

### 🔥 高频痛点

1. **Windows 上的"字符编码与并发"雷区集中爆发**
   - ascii codec 崩溃（#773）、Permission denied（#1429）、GBK stdout 异常（#2629 → #2657 修复中）三类问题均与 Windows 终端环境强相关，**反映出 CLI 在非 UTF-8 与高并发场景下的鲁棒性短板**。

2. **"授权弹窗打断节奏" 是高优 UX 问题**
   - #1414（👍3）和 #729 都指向同一诉求：开发者希望 **批量放行或直接进入 yolo**，减少人机交互频次。这是生产力场景下的明确呼声。

3. **会话/认证的瞬时故障会被放大到子代理**
   - #2650 的 OAuth 超时提示了一个架构隐患——主会话可用并不代表所有子通道都健康，需要更优雅的重试/降级。

4. **超长 prompt 在客户端就崩溃，而非发送到服务端**
   - #2655 暴露的是 **本地预处理（路径正则）缺乏输入长度防护**，这是新版本（2.0.2）才浮出的问题，需要尽快打补丁。

### 📈 隐性趋势

- **第三方主机集成**（OpenCode、Claude Code、MCP HTTPS）正在成为兼容性新战场。
- **IME / Web 输入法** 这一长期被忽视的细节终于被 PR 修复（#2658），是 i18k 体验的实质提升。
- **与 Claude Code 生态并存** 产生的 `~/.kimi/` 变量污染问题（#1321），提示跨 CLI 工具需要统一的环境卫生规范。

---

> 📌 **建议**：开发者若仍停留于 1.x 版本，**建议尽快升级到 2.0.x**，以避免 #2655 类崩溃，并关注后续关于 Windows 编码修复的补丁版本（PR #2657 合并后预计推出）。

*日报生成时间：2026-09-21 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-09-21**

---

## 📌 今日速览

今日 OpenCode 仓库活跃度极高，过去 24 小时有 50 个 Issue 和 50 个 PR 更新，但绝大多数 Issue 状态为 CLOSED，说明社区维护效率非常突出。当日无新版本发布，核心工作集中在 **V2 迁移收尾、Desktop/Console 体验打磨、以及 Zen 免费模型配额机制** 三条主线。开发者端最大的关注点仍然指向 `read`/`edit` 工具的回归问题与 `/sessions`、`/move` 等会话管理命令的可用性。

---

## 🚀 版本发布

今日无新版本发布。最新稳定版本仍为 **v1.14.48**（Desktop），社区正在持续修复该版本的 local server 断连问题（见 #27018）。

---

## 🔥 社区热点 Issues

以下为过去 24 小时评论最多、点赞数最高或最影响日常使用的 10 个 Issue：

1. **#9955 - TUI 间距过大的优化问题**（👍 21，💬 10）
   桌面与笔记本上 TUI 的垂直空间利用率低，顶部/底部栏可合并，聊天区域被挤占。`👍 21` 是当日最高，说明 UI 冗余问题广受诟病。
   👉 https://github.com/anomalyco/opencode/issues/9955

2. **#27018 - v1.14.48 Desktop local server 断连**（💬 13）
   升级到 v1.14.48 后发送内容会从"绿"变"红"，local server 异常断开，影响所有 Desktop 用户。
   👉 https://github.com/anomalyco/opencode/issues/27018

3. **#50093 - Zen 免费模型配额耗尽后重试计时器越拉越长**（OPEN，👍 5）
   用户报告切换不同免费模型后，重试倒计时从 6h16m 逐步累加到 24h+，疑似配额状态未在模型间重置。**目前唯一未关闭的高优 Issue**。
   👉 https://github.com/anomalyco/opencode/issues/50093

4. **#22260 - `read` 工具应支持音视频附件**（👍 8，💬 8）
   当前 `read` 仅支持图片和 PDF，音视频被当作二进制拒绝；该需求打通后 agent 可直接分析本地媒体。
   👉 https://github.com/anomalyco/opencode/issues/22260

5. **#22103 - TUI token 计数应包含 subagent 用量**（👍 9，💬 7）
   右上角统计只反映主会话，隐藏了 subagent 真实成本，对追踪费用不透明。
   👉 https://github.com/anomalyco/opencode/issues/22103

6. **#49938 - opencode.ai 改版后 default2 工作区丢失**（OPEN，👍 5）
   付费用户升级后无法访问原 default2 workspace，导致 OpenCode Go 服务无法使用，影响营收体验。
   👉 https://github.com/anomalyco/opencode/issues/49938

7. **#28605 - `opencode run` 在非 git 目录静默退出**（👍 5）
   Headless 模式在无 `.git` 的目录中不打印响应、无错误堆栈，CICD 场景下难以排查。
   👉 https://github.com/anomalyco/opencode/issues/28605

8. **#37463 - 引入 Cursor 风格的 path-scoped 规则**（💬 3）
   目前仅有 `AGENTS.md` 全局加载和 Skills 语义加载，缺乏基于 glob 的路径作用域规则。
   👉 https://github.com/anomalyco/opencode/issues/37463

9. **#38076 - 新会话空载即消耗 42k 输入 token**（💬 3）
   全新会话仅发送 "hi" 仍被 provider 计入 30k+ token，怀疑系统提示或 MCP/Skill 注入过度膨胀。
   👉 https://github.com/anomalyco/opencode/issues/38076

10. **#38056 - EasyTier 异地组网访问 WebUI 会话与设置丢失**（💬 4）
    使用 EasyTier 虚拟 IP 时会话列表/设置会被清空，但 FRP 正常，疑似 host/cookie 校验差异。
    👉 https://github.com/anomalyco/opencode/issues/38056

---

## 🛠 重要 PR 进展

以下为对架构、用户体验或 Bug 修复影响最大的 10 个 PR：

1. **#50231 - 升级 Effect 到 rc.115**（OPEN）
   跟进 Effect v4 最新 RC，吸纳 socket、schema、CLI、文件系统、网络地址等破坏性变更。
   👉 https://github.com/anomalyco/opencode/pull/50231

2. **#50254 - MCP OAuth 在未授权 200 握手时显式启动**（CLOSED）
   修复 Gmail MCP 这类返回 HTTP 200 但未带凭证的场景，避免"假连上"。
   👉 https://github.com/anomalyco/opencode/pull/50254

3. **#50267 - Desktop 支持浏览器登录 OpenCode Go/Console**（OPEN）
   Desktop 引导流程改为直接跳浏览器登录 Console，API key 路径退到 Advanced。
   👉 https://github.com/anomalyco/opencode/pull/50267

4. **#50268 - 重命名 message provider blobs 为 `native`**（OPEN）
   统一 schema：text/reasoning/assistant parts 改用 `native`，向后兼容旧数据；为 V2 模型协议打基础。
   👉 https://github.com/anomalyco/opencode/pull/50268

5. **#50264 - 升级 @ai-sdk/togetherai 让流式上报 token 用量**（CLOSED）
   修复 Together 模型始终计 0 token/$0 的问题，根因是缺 `stream_options.include_usage`。
   👉 https://github.com/anomalyco/opencode/pull/50264

6. **#49882 - Desktop 把 agent 引用文件渲染为 artifact 标签页**（OPEN）
   解决 `file://` 被 DOMPurify 拦截、相对链接污染 renderer、文件标签当文本解码等问题。
   👉 https://github.com/anomalyco/opencode/pull/49882

7. **#50265 - 非 VCS 项目显示空的 Review 状态**（OPEN）
   修复"Loading changes…"无限转圈，闭环 #49260。
   👉 https://github.com/anomalyco/opencode/pull/50265

8. **#50262 / #50174 - `/move` picker 增加 Recent 目录区**（OPEN）
   基于同项目 session 元数据展示最近目录，去重、排除已归档/当前目录。
   👉 https://github.com/anomalyco/opencode/pull/50262

9. **#50253 - 懒加载命令让 `--version` 跳过完整启动**（OPEN）
   `opencode --version` 不再加载静态命令图，启动耗时降至毫秒。
   👉 https://github.com/anomalyco/opencode/pull/50253

10. **#50191 - CodeMode 给程序值加类型并让 built-ins 自答**（OPEN）
    配合此前 IteratorObj 重构，让内置类型各负其责，减少跨文件 ladder 改动。
    👉 https://github.com/anomalyco/opencode/pull/50191

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼，社区最集中的诉求集中在以下方向：

| 方向 | 代表 Issue | 趋势判断 |
|---|---|---|
| **TUI/UI 体验** | #9955、#38277、#38326、#38295 | 间距、模式切换、cwd 优先排序、Tab 改写等微交互频繁提出，UI 打磨期 |
| **会话管理** | #38303、#38326、#49560（PR） | `/sessions`、`/move` 命令的可靠性与可用性是高频痛点 |
| **V2 工具回归** | #38348（无行号）、#38351（权限 glob）、#31048（Anthropic 边界）、#33044（synthetic 覆盖） | V2 升级带来的 schema/行为回归仍集中爆发 |
| **多模态与上下文** | #22260（音视频）、#22103（subagent token）、#38076（空载 42k） | "看得更广、算得更准"是长期诉求 |
| **规则与权限系统** | #37463（path-scoped）、#38351（相对 vs 绝对路径）、#38337（skill 越权） | Cursor 风格的精细化权限正在成为标配需求 |
| **模型/Provider** | #50093（免费配额）、#38328（Laguna 限流）、#50264（Together 上报） | Zen 免费档位体验和第三方 provider 兼容性持续被关注 |
| **Desktop/Web** | #49938、#38056、#28977、#38297（404 i18n） | 商业化面板（Go/Console）与本地化细节成为新热点 |

---

## 💡 开发者关注点

总结社区反馈，开发者当前最关心的痛点和需求：

1. **V2 迁移的"无声回归"**
   `read` 丢失行号、权限 glob 路径不一致、`edit` 接受仅换行符差异等，都属于"代码不报错但行为变了"的类型。开发者呼吁保持与 V1 的行为兼容或在升级日志中明确标注。

2. **Token 透明度**
   新会话空载即 42k token、subagent 用量未汇总到主界面——成本敏感型用户需要的是"我到底花了多少"，而不是逐 session 翻日志。

3. **Headless/CI 友好性**
   `opencode run` 静默退出、非 git 目录行为异常、Desktop `opencode` ENOENT 等问题让自动化场景很难稳定落地。

4. **免费层配额与限流**
   Zen 提供的免费模型正在被高频触发限流，重试计时器跨模型累积的 bug 严重影响试用体验，间接影响留存。

5. **远程访问与多设备同步**
   EasyTier、自定义域名、跨设备会话同步（#36509）等需求增长，反映 OpenCode 已开始被多设备/异地协作场景使用。

6. **更现代的规则与权限模型**
   开发者普遍希望对标 Cursor 的 `globs` + 规则继承机制，减少目前"全开或全拒"的粗粒度。

7. **构建/CI 资源占用**
   #38386 指出 pre-push hook 的 turbo typecheck 默认 10 并发在 8GB MacBook 上必崩，社区希望默认串行或根据内存自适应。

---

*日报基于 GitHub `anomalyco/opencode` 公开数据生成；评论数与点赞数截至 2026-09-21。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-21

## 📌 今日速览

v0.86.1 紧急修复版本发布，正式接入 Meta Muse 订阅（OAuth + API Key 双通道），同时修复了 0.86.0 引入的多处回归问题（导入错误、剪贴板失效、NInfer 兼容）。社区讨论焦点继续集中在 **Windows 平台适配**（累计 67 条评论）和 **TUI 性能瓶颈**（流式渲染 100% 单核、O(N²) 工具参数解析）两大方向。

---

## 🚀 版本发布

### v0.86.1（2026-09-20）

**新功能**
- **Meta Muse Provider**：通过 `/login meta` 或 `META_API_KEY` 接入 Muse Spark 模型（[Release v0.86.1](https://github.com/earendil-works/pi/blob/v0.86.1/packages/coding-agent/docs/providers.md#meta-muse-subscription)）

**修复要点（对应近期回归）**
- 0.86.0 模块解析失败（#9794）
- 剪贴板 OSC 52 拷贝失效（#9688）
- Cerebras 严格模式 400 错误（#9804）
- NInfer 推理引擎 strict_tools_not_supported（#9816）
- Code homebrew 安装文档缺失（#9802）

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 重要性 |
|---|---|---|---|
| [#7547](https://github.com/earendil-works/pi/issues/7547) | **[Windows] 如何在 Windows 上使用 Pi？** | 67 | 最高呼声，pin 帖式调研，需要明确官方策略 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | **TUI 流式渲染单核 100% 占用** | 13 | `Intl.Segmenter` 未缓存 + Markdown 全量重渲染 |
| [#9815](https://github.com/earendil-works/pi/issues/9815) | Mistral 不尊重 Retry-After 导致 429 | 5 | 已 CLOSED，影响 Mistral 用户体验 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | pi-ai 向兼容 provider 发送 OpenAI 专有字段 | 5 | 多 provider 兼容性，影响生态扩展 |
| [#6226](https://github.com/earendil-works/pi/issues/6226) | 工具调用 stream 缺 finish_reason 报错 | 5 | 已 CLOSED，影响 GLM/NVIDIA NIM 等 |
| [#9062](https://github.com/earendil-works/pi/issues/9062) | 工具参数 JSON 解析 O(N²) 退化 | 5 | 长会话/碎片化增量下的性能问题 |
| [#9169](https://github.com/earendil-works/pi/issues/9169) | Windows 全屏 TUI 图片渲染异常 | 5 | 已 CLOSED，Windows 平台痛点 |
| [#9631](https://github.com/earendil-works/pi/issues/9631) | 图片 autoResize 限制暴露为设置 | 4 | 已 CLOSED，提升可控性 |
| [#9794](https://github.com/earendil-works/pi/issues/9794) | **0.86.0 导入错误** | 4 | 已 CLOSED（v0.86.1 修复），典型发布回归 |
| [#9688](https://github.com/earendil-works/pi/issues/9688) | 剪贴板拷贝失效回归 | 4 | 已 CLOSED（v0.86.1 修复），影响容器/SSH 用户 |

**次重点关注**
- [#9810](https://github.com/earendil-works/pi/issues/9810) — OpenAI Codex CacheWarmer 失效导致长会话频繁冷启动（106k/162k token 重计费）
- [#9807](https://github.com/earendil-works/pi/issues/9807) — 800+ 消息会话下 TUI 全量重绘卡顿
- [#9448](https://github.com/earendil-works/pi/issues/9448) — `pi auth check` 看不到扩展注册的 provider
- [#9497](https://github.com/earendil-works/pi/issues/9497) — Windows CJK IME 输入卡顿、候选窗口不显示

---

## 🛠️ 重要 PR 进展

| # | PR | 亮点 |
|---|---|---|
| [#9096](https://github.com/earendil-works/pi/pull/9096) | **Meta Muse OAuth Provider** | 接入 Meta 订阅，刷新令牌机制特殊（每日按 identity token 重新铸造），目前流式为"伪流式"burst 输出 |
| [#9116](https://github.com/earendil-works/pi/pull/9116) | pi-ai 支持 mid-conversation system message | 为后续提示/工具变更分层重构打基础（拆分自 #8998） |
| [#9117](https://github.com/earendil-works/pi/pull/9117) | **system message delta 传递 prompt/工具变更** | coding-agent 集成层，将工具装载和提示变更改为增量消息，避免覆写顶层 prompt |
| [#9804](https://github.com/earendil-works/pi/pull/9804) | **Cerebras 排除 strict mode** | 解决 0.86.0 所有含非严格工具的 Cerebras 请求 400 失败 |
| [#9800](https://github.com/earendil-works/pi/pull/9800) | bash 输出截断时 WriteStream 错误处理 | 修复 `OutputAccumulator`/`executeBashWithOperations` 临时文件流错误未捕获 |
| [#9799](https://github.com/earendil-works/pi/pull/9799) | agentLoop 流终止处理 | 为 `streamFn` 在首事件前的异常附加 reject 处理，避免悬挂流 |
| [#8743](https://github.com/earendil-works/pi/pull/8743) | 忽略陈旧的工具图像转换 | 绑定缓存项到源图像，解决 Kitty 图像晚期部分转换竞态 |

---

## 📈 功能需求趋势

从 46 条更新 Issue 中可清晰看到五大方向：

1. **多 Provider 兼容与扩展**（最高频）
   - Mistral Retry-After 解析、Z.AI 上下文溢出识别（HTTP 400 code 1261）、OpenAI 兼容 provider 字段过滤、Cerebras 严格模式、NInfer strict_tools、Codex CacheWarmer
   - Kimi Code 区域登录（#9818，已提议贡献）

2. **TUI / 终端性能**
   - 全量重绘 vs 增量 diff（对比 OpenTUI）
   - `Intl.Segmenter` 缓存、Markdown 流式重建
   - 工具参数 JSON 的 O(N²) 解析
   - 800+ 消息大会话的滚动/输入延迟

3. **Windows 平台一等公民化**
   - 输入法（CJK IME 候选窗口）
   - 全屏 TUI 图片渲染
   - 硬件光标模式（#9748）
   - 安装/启动路径

4. **可配置化与可观测性**
   - 图片 autoResize 上限
   - bash 超时单位/默认值/上限（#9785）
   - `find`/`grep` 超时机制
   - skills glob 过滤语义澄清（`-`/`!`/`+`）

5. **扩展 API 健壮性**
   - `ModelRegistry.stream` 未绑定 receiver 导致回调丢失
   - 扩展无法解析 `package.json` main/exports 入口
   - `pi auth check` 看不到扩展 provider
   - RPC steer 与扩展处理器关联丢失（#9803）

---

## 🧑‍💻 开发者关注点（高频痛点）

| 痛点 | 典型 Issue |
|---|---|
| **0.86 版本回归集中爆发** | #9794、#9688、#9816、#9810 —— 升级即踩坑，v0.86.1 紧急修复 |
| **大上下文/长会话性能崩塌** | #6665、#9062、#9807 —— 100k+ token 重新计费、CPU 满载、UI 卡顿 |
| **Provider 协议碎片化** | #9815、#9508、#9805、#9816 —— 每个 provider 都需单独适配错误码/字段 |
| **Windows 体验劣于 macOS/Linux** | #7547、#9497、#9169、#9748 —— 输入法、终端、剪贴板、安装全链路 |
| **配置语义不清晰** | #9806、#9808、#9785 —— 文档/默认值缺失导致用户配置无效 |
| **扩展边界模糊** | #9448、#9817、#9821、#9803 —— 注册 provider/npm 解析/RPC 关联问题 |

**总结**：本期社区最强烈的信号是——**"0.86 升级阵痛 + 长会话性能天花板"**。Meta Muse 的接入和 system message delta 重构（#9116/#9117）是值得期待的方向性进展，但稳定性和大上下文处理仍是当前最紧迫的工程重点。

---

*数据源：[earendil-works/pi](https://github.com/earendil-works/pi) · 报告生成于 2026-09-21*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-21

---

## 一、今日速览

今天 v0.24.2 正式发布，重点补全 Web Shell 的远端工作区添加流程并引入 Live Voice 的 AudioWorklet 麦克风采集能力。社区讨论高度集中在 **「非对话上下文 token 治理」** 这一伞形议题（#12028）——多关联 PR/Issue 正在推进长上下文下的预算、工具加载与会话管理问题；P1 安全与回归类问题（tool-call 内联密钥泄露、`/cd` 命令在 v0.24.0 之后失效）成为开发者反馈的焦点。

---

## 二、版本发布

### v0.24.2（稳定版）
- **Web Shell**：恢复远端工作区添加流程（#12085）。
- **Live Voice**：通过 AudioWorklet 捕获麦克风音频流（#12338）。
- **附**：nightly `v0.24.2-nightly.20260920.eceaede18e` 同日发布。
- **无破坏性变更**。完整变更见 [Release v0.24.2](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.2)。

---

## 三、社区热点 Issues

1. **#12028** — *非对话上下文 token 治理（伞形议题）*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12028) · 评论 10 · P2  
   系统提示、内置工具 schema、`QWEN.md` 与 skill 列表在每次请求都被计入开销，1M 上下文窗口下此类 token 远超对话本身。**重要性**：这是当前最大的性能/成本路线图，下方多个 Issue 都挂在其下。

2. **#12287** — *Workflow retry-from-history 加固拆分*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12287) · 评论 9 · P2  
   从 #12190 中拆出加固任务（原 PR 涨到 ~1900 行已难独立评审），涉及 runner resume 语义与 checkpoint schema。

3. **#12029** — *百分比预算在大窗口下失效*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12029) · 评论 8 · P2  
   `tools.toolSearch.preload` 与常驻警告阈值用窗口百分比表达，窗口越大越失效；ToolSearch 几乎从不触发。

4. **#12048**（已关闭） — *context-usage 遥测在非函数工具存在时被丢弃，且混用两种 token 估算器*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12048) · 评论 7 · P3  
   仅遥测改动，不影响 `/context` 展示数字；闭合表明已落地。

5. **#11815** — *splitCompoundCommandSegments 在尾部 `#` 注释内错误拆分*  
   [Link](https://github.com/QwenLM/qwen-code/issues/11815) · 评论 6 · P3  
   真实命令结构被误读，导致已放行的 allow rule 仍触发授权确认。

6. **#12224**（P1） — *v0.24.0 起 `/cd` 命令直接报错*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12224) · 评论 6 · P1  
   即便无活动会话/后台进程，仍提示「response or tool call is in progress」。**回归类 P1**，影响基本交互。

7. **#12303** — *多会话宿主的 cross-session gate*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12303) · 评论 6 · P2  
   入站 gate 现在按目标会话的设置判定（#12292），但同一宿主多会话下仍存在结算、上限与命名三处空白。

8. **#12091**（P1） — *对活跃 session 调用 `sessions/delete` 会永久破坏会话*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12091) · 评论 5 · P1  
   写入器在 transcript 被 unlink 后重建文件，首条记录的 `parentUuid` 找不到父节点，自动续接与降级历史功能永久失效。

9. **#12002**（P1） — *安全：tool-call `function_args` 中的内联密钥被明文写入 JSONL/遥测*  
   [Link](https://github.com/QwenLM/qwen-code/issues/12002) · 评论 5 · P1  
   模型生成的 `export TOKEN='xxx' && …` 会原样落盘，**构成离设备暴露**。

10. **#12277** — *serve 启用 Local Control 在 LAN 接口上 EADDRINUSE*  
    [Link](https://github.com/QwenLM/qwen-code/issues/12277) · 评论 5 · P2  
    Qwen Code Desktop 用 `--port 0` 拿到临时端口（观察到 54693），开启 Local Control 后第二个监听器在 LAN 接口冲突。

> 补充：长期未关闭的 **#6137**（终端闪烁，5 评论）今天由 PR #12354 通过新增 `ui.hideStatusBar` 设置给出规避方案。

---

## 四、重要 PR 进展

1. **#12183** — *支持从目录加载部署托管的扩展*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12183) · 作者 jkxiao  
   新增 `--managed-extensions <root>`，CLI 与 daemon 均支持；包内容归部署方控制，用户 home 全新也能加载。

2. **#12311** — *Web Shell 结构化展示 Shell 执行结果*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12311) · 作者 ytahdn  
   把执行拆为「Command / Output / Execution」三块，默认展开命令与输出、仅图标复制按钮、200px 可滚动区，运行中显示 elapsed time。

3. **#12154** — *Web Shell Git 对话框新增 Worktrees 页签*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12154) · 作者 wenshao  
   列出所有 worktree、显示主 worktree / 当前 workspace / 锁 / 缺失目录徽章，以及分支、short HEAD、原因。

4. **#12267** — *bwrap 沙箱下沉至工具执行层*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12267) · 作者 doudouOUC  
   第三阶段 bwrap 改造：暴露 operator 可控的 `tools.executionSandbox` 策略给普通 headless CLI 与两种 TUI，移除整 CLI 重启路径。

5. **#12349** — *告知客户端哪些历史条目不可重试*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12349) · 作者 qqqys  
   任务恢复时若缺 `args` 会被标注 `argsUnavailable`，daemon 拒绝逻辑与投影共用 `snapshotArgsUnavailable` 一个谓词，杜绝漂移。

6. **#12347** — *恢复运行的 checkpoint 在注册前先写盘*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12347) · 作者 qqqys  
   写盘失败则拒绝启动；启动失败则回滚 checkpoint；`writeWorkflowCheckpoint` 改为三态返回。

7. **#12374** — *后台清理过期 session debug 日志*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12374) · 作者 doudouOUC  
   将 `QWEN_DEBUG_LOG_FILE` 产生的会话日志接入既有的 `general.cleanupPeriodDays`（默认 30 天）清理管线，但保留活跃会话、`latest` 软链与 daemon 日志。

8. **#12258** — *MCP App 资源限制支持按服务器配置*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12258) · 作者 samuelhsin  
   每台 MCP server 可上调 App HTML 与读超时（上限 4 MiB / 120 秒），保留默认 1 MiB / 10 秒，警告信息明确指向具体设置项。

9. **#12302** — *托管 Session 记录基础设施（v1）*  
   [Link](https://github.com/QwenLM/qwen-code/pull/12302) · 作者 doudouOUC  
   提供版本化 header/event/commit-marker 类型、闭合的事件-域-状态契约、严格解析器，以及 actor / lifecycle / transaction / digest 校验。

10. **#12355** — *修正 deferred-tool bridge 遗留的陈旧/未测代码*  
    [Link](https://github.com/QwenLM/qwen-code/pull/12355) · 作者 yiliang114  
    合并 #10410 后一次性补齐四处问题：包括 `isExemptFromEagerAllowList` 新增的 `tool_call` 分支从未被测试覆盖等。

---

## 五、功能需求趋势

从过去 24 小时的 Issue/PR 标签分布可以提炼出五条主线：

- **🧠 长上下文 / Token 性能（最热）**：围绕伞形 #12028 形成「治理-预算-工具加载-评测闭环」完整链路。代表 Issue：#12029、#12054、#12326、#12333。
- **🖥️ Web Shell / Desktop 体验**：结构化执行结果、移动端历史导航、settings 白名单、对话内搜索、Worktree 管理、麦克风采集（#12338）。
- **🔌 扩展与分发**：部署托管扩展（#12183）、Chrome 扩展上架流水线（#12240）、MCP App 资源配额（#12258）。
- **🤖 动态工作流 / 后台自动化**：对标 Claude Code 2.1.260 的能力差补齐（#11013）、重试历史任务可靠性（#12287、#12347、#12349）。
- **🛡️ 安全与权限模型**：tool-call 内联密钥脱敏（#12002）、Unicode 空白字符当 bash 分隔符（#12089）、#11865 后续收紧。

---

## 六、开发者关注点

- **「看不见的成本」被放大**：内置工具描述 + 系统提示占了 45.9% 的非对话上下文（#12054），但缺乏 size 跟踪；社区普遍认为这是最容易被忽视、影响最大的优化点。
- **大上下文窗口反而让百分比预算失效**：当窗口变大，ToolSearch preload 与常驻警告都不触发（#12029），多数 token 节省开关无法在长窗口模型上验证收益。
- **回归与平台差异**：`/cd` 在 v0.24.0 之后直接报错（#12224），macOS 下 daemon 在 ACP 预热期间停止会返回退出码 1（#12350）——版本升级对交互流程的回归仍是高频痛点。
- **安全可见性不足**：tool-call `function_args` 的内联密钥直接落 JSONL 与遥测（#12002），开发者呼吁立刻引入 redaction；这是本期最值得升级优先级的 P1 项。
- **评测闭环缺位**：token 治理相关改动节省了多少无人度量，但工具召回与任务成功率也无人度量（#12333），社区呼吁把现有 benchmark 升级为可对比两组配置的 A/B 框架。

---

> 报告基于 GitHub 公开数据：1 个发布、50 条 Issues（Top 30）、50 条 PRs（Top 20）。完整列表请见 [QwenLM/qwen-code 仓库](https://github.com/QwenLM/qwen-code)。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-09-21**
**数据范围：Hmbown/DeepSeek-TUI（Codewhale 仓库）过去 24 小时更新**

---

## 1. 今日速览

今天是 **v0.10.0 发布冲刺日**：PR #6370 完成 release-readiness 收尾并合入，随后 PR #6371、#6372 连续两个 follow-up 修复了"用户输入永不触发超时"和"Linux 残留孤儿 `sleep infinity` 进程"两个高危问题，文档同步 PR #6373 也已开出。与此同时，**测试线程栈溢出（#6362）与引擎中途冻结（#6184）两条 Bug 已在今日 CLOSED**，CI 全部转绿，0.10.0 具备了进入候选构建的条件。

---

## 2. 版本发布

过去 24 小时无新版本发布。**0.10.0 仍处于"开发分支可编译、release-readiness 已合入，但 packages / binaries 尚未发布"阶段**（参见 Issue #6094 的发布计划说明）。

---

## 3. 社区热点 Issues

> 提示：过去 24 小时仅有 5 条 Issue 更新，已全部纳入；其中 2 条 CLOSED、3 条 OPEN。

### 🔴 #6184 【CLOSED · Bug】Engine 静默冻结
- **作者**：bevis-wong ｜ **评论**：7 ｜ **👍**：0
- **重要性**：在高强度长会话中，引擎中途停止输出但不报错、不写日志、不崩溃，用户后续输入只入库不响应——属于典型的"沉默失败"，对生产可用性是致命级别。
- **社区反应**：7 条评论集中在复现条件（GLM-5-Flash、zai provider、`Ask` posture），说明已建立明确的诊断路径后关闭。
- **链接**：Hmbown/Codewhale Issue #6184

### 🟡 #6094 【OPEN · Release Plan】v0.10.0 — 起点 Issue
- **作者**：Hmbown ｜ **评论**：7 ｜ **👍**：1
- **重要性**：整个 0.10.0 的 release notes、TDD 上线顺序与协作入口；几乎所有今日 PR 都在追踪它。
- **社区反应**：作为"start here"汇总帖被反复引用，今日多个 PR 在 Summary 中显式列出对本 issue 的覆盖。
- **链接**：Hmbown/Codewhale Issue #6094

### 🟡 #5856 【OPEN · Enhancement / Release-blocker】Computer-use 插件验收
- **作者**：Hmbown ｜ **评论**：5 ｜ **👍**：0
- **重要性**：被显式标记为 **release-blocker**，需要完成"内置 bundle 的发现 / 审查 / 信任 / 启用"四条 acceptance 才算过线。
- **社区反应**：5 条 triage 评论把"插件独立安装流程"排除在验收路径之外，定位明确。
- **链接**：Hmbown/Codewhale Issue #5856

### 🔴 #6362 【CLOSED · Bug】测试线程栈溢出导致 lib test 套件 SIGABRT
- **作者**：AdityaVG13 ｜ **评论**：2 ｜ **👍**：0
- **重要性**：`cargo test -p codewhale-tui --lib` 直接被 SIGABRT 终止，workspace gate 被该 target 卡死；今日 PR #6370 已把修复纳入 release-readiness。
- **社区反应**：2 条评论聚焦 stack-size 调整与最小复现，已随 #6370 关闭。
- **链接**：Hmbown/Codewhale Issue #6362

### 🟡 #6155 【OPEN · Enhancement】Pet：终端中验证 /pet habitat + 跨端共享 owner
- **作者**：Hmbown ｜ **评论**：2 ｜ **👍**：0
- **重要性**：0.9.13 已合并 `/pet`（#6154 / #6110 + 共享 owner patch），但**真实终端验证**与"TUI + Desktop 共享 owner"两项 acceptance 仍待完成，是从 #6109 拆出的 umbrella 子项。
- **社区反应**：2 条评论，目前由 maintainer 自行跟进。
- **链接**：Hmbown/Codewhale Issue #6155

---

## 4. 重要 PR 进展

> 以下 9 条均为过去 24 小时内有更新的 PR。

### ✅ #6372 【CLOSED】0.10.0 follow-up 2：Linux 无孤儿 inhibitor 命令、有界 terminal-route 阻塞任务
- **author**：Hmbown
- **核心修复**：
  1. Linux 不再每次交互回合遗留 `sleep infinity` 子进程——改用 `systemd-inhibit` 持有空闲锁、guard 通过管道关闭释放；
  2. terminal-route 上的阻塞任务被加上了有界预算，不再无限占用 runtime worker。
- **链接**：Hmbown/Codewhale PR #6372

### 📝 #6373 【OPEN】docs(environments)：更新 Linux sleep inhibitor 文档
- **author**：Hmbown
- **核心修复**：将 `docs/ENVIRONMENTS.md` 中"Linux inhibitor = `systemd-inhibit … sleep infinity`"的描述，与 #6372 后真实运行的"`cat` 读管道、guard 关闭管道即释放"对齐。
- **链接**：Hmbown/Codewhale PR #6373

### ✅ #6371 【CLOSED】0.10.0 follow-up：心跳下的用户输入 deadline、terminal 路由脱离 runtime workers、inhibitor 作为 Tokio 子进程
- **author**：Hmbown
- **核心修复**（按对 0.10.0 的重要度排序）：
  1. **用户输入超时从未触发**（Devin 标红）—— `await` 链路修正；
  2. terminal 路由从 runtime worker 中拆出，IO 不再阻塞推理；
  3. inhibitor 改为 tokio 子进程管理；
  4. 另有 3 条针对 #6370 合并后 8 条 review bot 评论的修复。
- **链接**：Hmbown/Codewhale PR #6371

### ✅ #6370 【CLOSED】0.10.0 release readiness
- **author**：Hmbown
- **核心内容**：以 main `9b34ab5` 为基础叠加 release-readiness：
  - 修复 Lint（陈旧 README 译文）与 Test macOS/Windows 红；
  - 合并 #6362 栈修复；
  - 水位（water）节奏调整；
  - Extensions trust 复核；
  - MCP 启动 SIGPIPE-safe；
  - 最终 head `752bae3` 在 PR run / `workflow_dispatch` / OpenHarmony 上**全绿**。
- **链接**：Hmbown/Codewhale PR #6370

### ✅ #6361 【CLOSED】feat(runtime-api)：terminal byte stream（#34）+ 流式恢复 / 幂等提交（#76）+ pet agent-count 钉死（#12）
- **author**：Hmbown
- **核心功能**：在一个分支里同时解掉三个 Core 阻塞项——Engine 侧提供"鉴权字节 IO / resize / 退出 / 有界重放"的有状态终端字节流；stream 恢复保证幂等；pet 的 agent-count 显式 pin 防止抖动。
- **链接**：Hmbown/Codewhale PR #6361

### ✅ #6369 【CLOSED】fix(session)：foreign session 导入后同步引擎
- **author**：AdityaVG13
- **核心修复**：`/resume <file>` 与内联 JSON 导入会装入"全新 session id + 全新 transcript"，但原返回只带回消息，导致引擎仍停留在旧 session 的历史上。新增同步步骤，导入即生效。
- **链接**：Hmbown/Codewhale PR #6369

### ✅ #6365 【CLOSED】fix(tui)：彩绘列（painted-column）转写本复制 + composer tab、ink 测试补齐
- **author**：AdityaVG13
- **核心修复**：转写本按 visual-row 而不是按 tab-stop 处理；composer 改用 painted columns 模型；新增 setup ink 测试。
- **链接**：Hmbown/Codewhale PR #6365

### ✅ #6363 【CLOSED】fix(tui, exec)：光标按 visual-row 推进、history detach、显式 ink、无头输入拦截
- **author**：AdityaVG13
- **核心修复**：6 个一意一回归的 commit，包含 composer 光标按 visual-row 推进、`history` 卸离主路径、显式 ink 颜色、headless 环境输入拦截不污染日志。
- **链接**：Hmbown/Codewhale PR #6363

### ✅ #6333 【CLOSED】安全加固：unsafe 文档、async I/O、递归 / 读取预算
- **author**：AdityaVG13
- **核心修复**：所有未文档化的 `unsafe` 块补 SAFETY 契约；async 路径上的阻塞 IO 迁到 `tokio::fs`（或上游 `spawn_blocking` 约定）；递归值遍历加深度预算；文件读取加字节预算。
- **链接**：Hmbown/Codewhale PR #6333

---

## 5. 功能需求趋势

从过去 24 小时的 Issue/PR 摘要提炼，社区关注方向集中在以下几条主线：

| 方向 | 代表项 | 趋势信号 |
|---|---|---|
| **0.10.0 release readiness** | #6094、#6370、#6371、#6372 | ⬆️ 极强，连续 3 个 PR 在 24h 内合入收尾 |
| **Engine / Runtime 健壮性** | #6184（冻结）、#6362（栈溢出）、#6361（runtime-api）、#6369（session 同步） | ⬆️ "沉默失败"是当前最高优先级痛点 |
| **Computer-use / Agent** | #5856 | ➡️ 维持，被显式列为 release-blocker |
| **TUI / Terminal UX 一致性** | #6365、#6363 | ⬆️ 与 ratatui 真实行为对齐 |
| **跨端共享（Pet / Desktop）** | #6155 | ➡️ 持续推进但进展较慢 |
| **平台级硬ening（unsafe / SIGPIPE / inhibit）** | #6333、#6371、#6372、#6370 | ⬆️ "长期运行可放上服务器"的工程化诉求 |

> **一句话总结**：v0.10.0 是"**把 TUI 从能跑变成能交付**"的一次发布——健壮性、运行时隔离、CI 全平台绿灯、release 文档齐备，四件事缺一不可。

---

## 6. 开发者关注点

从 review bot（Devin / Claude Code Review）与 maintainer 的来回中，可以归纳出今日开发者最关心的痛点：

1. **沉默失败（silent failure）最高优**
   - #6184 引擎中途不响应且无日志、#6362 测试栈溢出 SIGABRT 直接打挂 workspace gate——"不报错"比"报错"更危险，是当前 top-1 痛点。

2. **Linux 进程卫生（process hygiene）**
   - PR #6372 直接指出：原实现每个交互回合遗留 `sleep infinity`；这类"看起来无害、实则泄漏 fd / 进程"的细节被 review bot 抓到后立即修复。

3. **Runtime worker 不应被 IO 阻塞**
   - PR #6371 把 terminal-route 拆出 runtime worker、PR #6361 把终端字节流做成有界有状态通道——开发者反复强调"推理主循环不能被任何 IO 阻塞"。

4. **回归测试必须覆盖 ratatui 真实行为**
   - PR #6363 / #6365 都显式提到"对照 ratatui 源码验证 visual-row / tab-stop 模型"，并补 setup-ink 测试——TUI 兼容性靠实测而不是靠文档假设。

5. **文档与代码必须同步漂移**
   - PR #6373 就是为了修正 #6372 改完后 `ENVIRONMENTS.md` 仍写 `sleep infinity` 的失真——开发者认为**文档错位**和代码 bug 同级严重。

7. **Unsafe / Async / Recursion 三类硬上限**
   - PR #6333 把"unsafe 必须有 SAFETY 注释 / 阻塞 IO 必须走 `tokio::fs` / 递归与读文件必须有预算"作为统一原则——开发者希望这些是仓库的"约定式约束"，而非每次 code review 重新发现。

---

*报告生成时间：2026-09-21 · 数据源：GitHub Issues & Pull Requests 过去 24 小时更新流*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*