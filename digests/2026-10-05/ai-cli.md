# AI CLI 工具社区动态日报 2026-10-05

> 生成时间: 2026-10-05 03:31 UTC | 覆盖工具: 9 个

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
**数据日期**：2026-10-05 · **覆盖范围**：9 款主流 AI CLI 工具

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"能力普及 + 工程化深耕"** 的关键阶段：一方面，Subagent、Computer Use、Browser Agent、MCP 等高阶能力从概念走向规模化落地；另一方面，**可靠性、安全治理、跨平台一致性** 正在取代"功能炫技"成为社区主旋律。从今日数据看，9 款工具中 **5 款 24h 内有版本出货**（OpenAI Codex 3 个 alpha、Copilot CLI 1 个预发布、Gemini CLI 与 Qwen Code 各 1 个 nightly），显示迭代节奏依然密集；与此同时，**Subagent 行为撒谎、Context 压缩数据丢失、Windows 进程残留、Token 路由失败** 等深度缺陷集中爆发，反映出 **生产可用性（production readiness）** 仍是各工具尚未跨越的鸿沟。

---

## 二、各工具活跃度对比

| 工具 | 24h Issues | 24h PRs | 24h Release | 社区热度信号 |
|------|-----------|---------|-------------|--------------|
| **Claude Code** | 50（活跃池） | 5 重要 | ❌ 无 | Advisor 故障双 Issue 合计 94 评论 / 157 👍 |
| **OpenAI Codex** | 10 顶选 | 15 全部合入 | ✅ 3 alpha（0.162.0-α.12/13/14） | #25271（Computer Use Windows）48 评论热度第一 |
| **Gemini CLI** | 10 顶选 | 10 重要 | ✅ v0.64.0-nightly | #21409（generalist 挂死）👍8 最高 |
| **GitHub Copilot CLI** | 24（16 开/8 关） | ⚠️ **0** | ✅ v1.0.92-4 | MCP 跨平台问题成新焦点 |
| **Kimi Code CLI** | — | — | ❌ | 24h 完全静默 |
| **OpenCode** | 10 顶选 | 10 重要 | ❌ 无 | #44080（compact 数据丢失）引发数据安全担忧 |
| **Pi** | 10 顶选 | 4（小修） | ❌ 无 | #6665 TUI 单核 100% 被官方 `inprogress` 接手 |
| **Qwen Code** | 10 顶选 | 10 重要 | ✅ v0.24.7-nightly | 3 条 P1 集中在 Managed Agent 并发模型 |
| **DeepSeek TUI** | ~10 | 5（3 关/2 开） | ❌ 无 | Hmbown 单日 5 条 Engine 持久化设计提案 |

> **注**：Issues 数量为各报告"今日重点关注"口径，非仓库全量。Kimi Code CLI 24 小时零活动，建议作为观察项而非决策依据。

---

## 三、共同关注的功能方向

多个工具社区在不同切入点下汇聚到同一议题，呈现明显的"共识需求"。

### 1. Subagent / Agent 子系统的可靠性（≥6 款）
- **Claude Code**：Advisor 工具在长上下文下失效、Hooks 子代理上下文缺失（#69238、#67609、#91910）
- **Gemini CLI**：MAX_TURNS 被报为 GOAL、generalist agent 挂死、自发性调用不足（#22323、#21409、#21968）
- **Copilot CLI**：扩展启动阻塞、模型中途降级（#4966、#5042）
- **OpenCode**：GUI/TUI inbox/steer/queue 行为对齐诉求（#53076）
- **Qwen Code**：Managed Agent ≥8 并发 turn 卡死（#13333 P1）
- **Pi**：CLI/TUI 行为不一致，auto-compaction 失效（#10330）

### 2. Context 压缩与上下文工程（≥5 款）
- **OpenCode**：compact 数据永久丢失 + 配置被静默忽略（#44080 数据安全级、#44094）
- **Claude Code**：Advisor 长上下文失效 + compaction agent 字段缺失
- **Pi**：网络重试后 token 估算暴涨至 33 万（#10287）
- **Qwen Code**：本地模型上下文窗口误判为 1M 导致压缩永不触发（#13415）
- **DeepSeek TUI**：session journal 无界膨胀 + Emergency compaction 打断 save（#6842、#6721）

### 3. Windows 平台一致性（≥4 款）
- **Claude Code**：MSIX 容器 git fsmonitor 残留、Desktop 升级丢会话（#91763、#90867）
- **OpenAI Codex**：Remote Control 注册失败、ACL 拒绝、渲染器崩溃、LaTeX 路径找不到（#32164、#50969、#48311）
- **Copilot CLI**：MCP worker 进程残留、Computer Use 插件不可用（#4972、#5049）
- **Gemini CLI**：Wayland 下 Browser subagent 失败（#21983 P1）

### 4. 安全加固（≥4 款）
- **Gemini CLI**：checkpoint 路径穿越、glob 越权读取、checker env 泄漏（#29521、#29522、#29523）
- **Claude Code**：组织安全策略覆盖插件（PR #99540）+ security-guidance 多条 false positive/negative
- **OpenAI Codex**：Windows deny-read ACL 错误恢复（PR #50940）+ TUI MCP 通知跨线程隔离（PR #50781）
- **OpenCode**：MCP secret provider 应限定到 owning runtime（#5637）

### 5. 认证 / 会话生命周期韧性（≥3 款）
- **Copilot CLI**：每小时 token 失效 + /login 无法根治（#4971）
- **OpenCode**：双 server 进程共享 db 导致 UNIQUE 冲突（#53146）+ permission.replied 事件丢失（#52846）
- **Pi**：OpenAI refresh_token 失效、OAuth 体验差（#10377、#10335）

### 6. MCP 集成的跨 OS 稳定性（≥3 款）
- **Copilot CLI**：macOS 设备 ID 陈旧、Windows 进程残留、Linux bubblewrap 沙箱预检失败（#4998、#4972、#5052）
- **Claude Code**：Mod 渲染跨平台差异 + AbovePrompt 多窗口行为（#99265、#99535）
- **OpenCode**：TUI 侧栏 MCP 启用切换（#40721）

### 7. 模型路由 / 模型 ID 保真（≥3 款）
- **Claude Code**：`/model opusplan` 突然报 "Unsupported model"（#92007）
- **Gemini CLI**：显式 `--model gemini-3-pro-preview` 被静默改写（PR #29420、#29422）
- **Copilot CLI**：HydraFusion 路由失败后被切到低上下文模型（#5042）

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 企业级 Agent 桌面 + Mod 治理 | 大型企业 + 高级开发者 | Hooks/MCP/Mod 三层治理、Advisor 工具链、MSIX 桌面 |
| **OpenAI Codex** | Windows 优先 + Browser/Computer Use 前沿 | 跨平台全栈 + 自动化需求方 | Rust 重写、密集 alpha 迭代、daemon 化、sandbox ACL |
| **Gemini CLI** | Subagent 生态 + AST 工具 | 探索型 + Token 敏感型用户 | 大量 nightly、模型 ID 保真、Wayland 跨平台、Podman rootless |
| **GitHub Copilot CLI** | MCP 一等公民 + 多模型路由 | GitHub 生态绑定 + SDK 集成商 | `copilot config` 子命令化、HydraFusion、pre-release 通道 |
| **OpenCode** | 多 Provider 聚合 + Durability | 模型切换频繁 + 长期工作流 | 原生 Vercel AI Gateway / Venice、SQLite 持久化、GUI+TUI 对齐 |
| **Pi** | 极简 TUI + Provider 适配深度 | CLI 重度用户 + 键盘流开发者 | QuickJS wasm、Intl.Segmenter 优化路径、`pi-ai` 统一抽象 |
| **Qwen Code** | Managed Agent Runtime + 本地模型 + K8s | 私有云 / 国产化 + 高并发托管 | Broker 认证、K8s CSI Runtime、Hosted Harness、llama.cpp 适配 |
| **DeepSeek TUI** | Engine 持久化先驱（设计阶段） | 长任务 + 崩溃恢复敏感者 | Engine durability 五提案、Ratatui UX、Code Mode 治理 |
| **Kimi Code CLI** | 当前静默期，定位待观察 | — | 24h 零活动，需后续样本观察 |

---

## 五、社区热度与成熟度

### 🔥 高活跃度（社区参与度高 + 反馈密度大）
- **Claude Code**：50 条活跃 Issue 中"Advisor 故障线"形成跨 Issue 共识，👍 总数高
- **Gemini CLI**：P1 问题占比突出，#21409 获 👍8 为近期最高，subagent 议题贯穿全榜
- **OpenAI Codex**：#25271 单 Issue 48 评论 + 11 👍，社区关注度集中且有具体技术细节

### ⚡ 快速迭代（版本出货密集 + PR 合入率高）
- **OpenAI Codex**：24h 3 个 alpha + 15 个 PR 全部合入，节奏最强
- **Gemini CLI**：nightly 通道稳定 + 75 项依赖批量更新，自动化程度高
- **Qwen Code**：nightly 通道活跃 + 大量 Managed Agent PR，体现"基建期"密集投入

### 🛠 快速修复型（短闭环 + 治理渐进）
- **Copilot CLI**：8/24 Issue 当日关闭，效率指标优秀；但 PR 静默 24h 提示发版冻结
- **Pi**：当日 4 PR 全部 CLOSED 闭环，TUI 性能问题已被官方标记 inprogress
- **OpenCode**：v2 beta 回归问题（#44094、#45558、#44080）触发多 PR 协同（#50595、#53272、#53266）

### 🌱 早期阶段（设计先行 / 路线图明确）
- **DeepSeek TUI**：维护者 Hmbown 单日 5 条 Issue 勾勒 Engine durability 设计蓝图，0.10.1 整合 PR 评审中
- **Qwen Code**：Kubernetes CSI Runtime（#13289）作为实验性新运行时刚进 PR，平台分布仍在扩张

### 💤 低活跃 / 需观察
- **Kimi Code CLI**：24 小时零活动，无版本、无 Issue、无 PR 公开数据，建议作为观察项

---

## 六、值得关注的趋势信号

### 📡 信号 1：Subagent "可信度治理"成为新战场
- **证据**：Gemini CLI #22323（GOAL 谎言）、Claude Code Advisor #69238/#67609、Qwen Code Managed 并发 P1
- **解读**：社区不再满足于"agent 能跑"，转而要求**终止状态诚实、行为可预测、并发可控**
- **开发者参考**：依赖 agent 自动化的 CI/CD 流水线需明确增加"agent 状态断言"和"超时降级"逻辑

### 📡 信号 2：Context 工程从"功能"升级为"数据安全"
- **证据**：OpenCode #44080（compact 永久丢失原始对话，**数据安全级别**）、Pi #10287（token 估算爆炸 33 万）、Qwen Code #13415（误判 1M 上下文导致压缩永不触发）
- **解读**：长会话场景下，**压缩机制本身就是数据丢失风险源**
- **开发者参考**：长任务工作流应实现"checkpoint 外置存档"或"压缩前 diff 落盘"以应对压缩层 bug

### 📡 信号 3：Windows 已从"次要平台"变成"信用指标"
- **证据**：4 款工具（Claude/Codex/Copilot/Gemini）有 Windows 相关 P1/P2 问题，OpenAI Codex 半数 PR 集中在 Windows 兼容
- **解读**：团队对 Windows 体验的投入开始成为社区评判工具成熟度的关键信号
- **开发者参考**：选型时若以 Windows 为主要工作平台，需重点关注 MSIX 容器、ACL、Daemon 进程生命周期三项指标

### 📡 信号 4：MCP 协议的"运行时宿主稳定性"成为瓶颈
- **证据**：Copilot CLI 三平台问题、OpenCode #5637（secret 应限定到 owning runtime）、Gemini CLI #29523（env 泄漏）
- **解读**：MCP 协议本身趋于稳定，但**各 OS 运行时宿主（sandbox、daemon、ACL）的实现差异**成为新的失败面
- **开发者参考**：MCP 集成商应在 CI 中覆盖 macOS / Windows / Linux 三平台启动

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-10-05**

---

## 1. 热门 Skills 排行（社区关注度最高的 PR）

| # | Skill (PR) | 功能亮点 | 讨论焦点 | 状态 |
|---|---|---|---|---|
| 1 | **proofcore-contract-auditor** ([#1771](https://github.com/anthropics/skills/pull/1298)) | 基于 TON 区块链的智能合约零存储 Merkle 静态分析 + 密码学审计存证 | Web3/Solidity 审计可信度、与 AI 审计工具链的协同 | OPEN |
| 2 | **md2video-audio** ([#1703](https://github.com/anthropics/skills/pull/1703)) | Markdown → 演示稿 → MP4，零成本自动合成拟人化配音 | 视频/有声内容生成的端到端自动化、教育/营销场景适配 | OPEN |
| 3 | **AWT (AI Watch Tester)** ([#822](https://github.com/anthropics/skills/pull/822)) | 给 Claude 视觉 + 浏览器控制能力，零代码生成 E2E 测试 | AI 驱动的端到端测试、视觉理解在测试场景的应用 | OPEN |
| 4 | **blast-radius** ([#1776](https://github.com/anthropics/skills/pull/1776)) | 批量/破坏性写前的 Checklist，分类每条操作的真实影响半径 | 高风险操作的安全护栏、弥补"查询正确 ≠ 批量操作正确"的鸿沟 | OPEN |
| 5 | **pyxel** ([#525](https://github.com/anthropics/skills/pull/525)) | Python 复古游戏开发的 Skill，含 headless 帧检视与状态校验 | AI 编程在游戏/图形领域的可验证开发范式 | OPEN |
| 6 | **skill-quality-analyzer / skill-security-analyzer** ([#83](https://github.com/anthropics/skills/pull/83)) | 元 Skills：从结构/文档/示例/性能/可维护性 5 维评估 Skill 质量 + 安全分析 | "Skill 的 Skill"自举生态、自动化质量门禁 | OPEN |
| 7 | **document-typography** ([#514](https://github.com/anthropics/skills/pull/514)) | 防止 AI 生成文档的孤字/寡段/编号错位等排版缺陷 | 通用、跨场景的文档质量提升，触及每个 Claude 输出 | OPEN |
| 8 | **notion-spec-to-implementation + quantitative-resume-auditor** ([#1245](https://github.com/anthropics/skills/pull/1245)) | 把产品/技术 Spec 自动拆解为可执行的 Notion 任务；财务报表深度审计 | Spec → 任务分解自动化、量化投融资/审计场景 | OPEN |

> 注：所有 Top PR 当前均处于 **OPEN** 状态，反映 Skills 仓库合入门槛较高、审核周期较长。

---

## 2. 社区需求趋势（来自 Issues）

按议题热度归纳，社区诉求集中在以下五个方向：

**🔐 安全与信任**
  - [#492](https://github.com/anthropics/skills/issues/492)（43 💬）社区 Skill 借用 `anthropic/` 命名空间造成**信任边界滥用**；[#1394](https://github.com/anthropics/skills/issues/1394) skill-creator 的 eval-viewer 存在 **innerHTML XSS**；[#1175](https://github.com/anthropics/skills/issues/1175) 涉及 Skill 内嵌访问控制的边界问题。
  - 诉求关键词：命名空间治理、Skill 签名、权限沙箱。

**📤 分发与协作**
  - [#228](https://github.com/anthropics/skills/issues/228)（16 💬，👍8）**企业级 Skill 共享**仍是最高赞需求；[#29](https://github.com/anthropics/skills/issues/29) 反映对 **AWS Bedrock 等多平台**的兼容性诉求。
  - 诉求关键词：组织内 Skill 库、跨平台兼容。

**🧪 评估与触发可靠性**
  - [#556](https://github.com/anthropics/skills/issues/556)（12 💬）`run_eval.py` 对 `claude -p` 的 **触发率为 0%**；[#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 的 `evaluation.py` 对真实 MCP 服务**评分全 0**；[#1383](https://github.com/anthropics/skills/issues/1383) skill-creator 在 Windows 下 benchmark 静默失败。
  - 诉求关键词：触发评测稳定性、跨平台 eval 工具链。

**🧠 高阶 Agent 模式**
  - [#1329](https://github.com/anthropics/skills/issues/1329) **符号化/紧凑化**长时记忆；[#412](https://github.com/anthropics/skills/issues/412) **agent-governance** 安全模式；[#1385](https://github.com/anthropics/skills/issues/1385) **推理质量门**（预校准 → 对抗评审 → 交付验证）。
  - 诉求关键词：长期记忆压缩、Agent 治理、推理质量门禁。

**📚 平台工程化**
  - [#189](https://github.com/anthropics/skills/issues/189)（👍9）插件重复 Skill 污染上下文；[#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` 一次性注入 ~156k tokens 直接耗尽上下文。
  - 诉求关键词：Skill 去重、惰性加载、按需注入。

---

## 3. 高潜力待合并 Skills（评论活跃 / 议题关联 / 落地概率高）

按"功能完备度 + 议题关联度"合流判断的近期高潜力合并候选：

| PR | Skill | 合并价值信号 |
|---|---|---|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder 兼容 mcp>=2** | 修复 [#1668](https://github.com/anthropics/skills/issues/1668) 关键阻塞，社区强烈依赖 MCP 集成能力 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator 直执行 package_skill.py** | 修复开发体验断点，对应 [#1383](https://github.com/anthropics/skills/issues/1383) 的多个报告问题 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 标记 4 个退役模型** | 修复 [#1603](https://github.com/anthropics/skills/issues/1603)，关闭误导用户的安全/版本风险 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | **claude-api / academy-guide 失效 URL 修复** | 文档可达性回归修复，门槛低、价值高 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice 超时改为真错误** | 防止"假成功"误导后续工作流，属于关键可靠性修补 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 隔离 trigger eval + Windows 兼容** | 覆盖 [#1383](https://github.com/anthropics/skills/issues/1383) + [#556](https://github.com/anthropics/skills/issues/556) 的根因，长期价值极高 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当下的核心诉求已从"造更多 Skill"转向"让 Skill 更可信"：**
> 围绕 **命名空间与权限治理（Security）、跨平台/跨人协作分发（Sharing）、以及评估/触发可观测性（Eval Trust）** 三条主线，社区正在倒逼 Skills 从"内容集合"进化为具备身份、签名、版本与质量契约的"小型软件产品"。

---

# Claude Code 社区动态日报
**日期：2026-10-05**

---

## 📌 今日速览

今日 Claude Code 仓库无新版本发布，Issues 与 PR 更新量平稳，社区讨论热度集中在 **macOS/Win desktop 应用稳定性、Advisor 工具故障、Hooks 子代理行为异常** 三大类问题。安全相关插件（`security-guidance`）的多条 Bug 集中涌现，提示新版本的钩子系统仍需打磨；功能需求则向 **会话分组、模型精细化控制、远程控制（Remote Control）/Cowork 体验** 倾斜。

---

## 🚀 版本发布

过去 24 小时内无新 Release。最新可用版本仍为 Issue 中提及的 **2.1.288 / 2.1.289 / 2.1.260** 等分支线。

---

## 🔥 社区热点 Issues

| # | Issue | 平台 | 关键信息 | 反应 | 链接 |
|---|-------|------|---------|------|------|
| 1 | **[BUG] No response from API when Advisor is triggered** | macOS / TUI / API | Opus 4.8 + Advisor 触发 "No response from API" 并持续重试，影响核心工作流 | 💬 67 · 👍 112 | [#69238](https://github.com/anthropics/claude-code/issues/69238) |
| 2 | **Advisor tool returns "unavailable" on claude-fable-5 (>100K tokens)** | macOS / Model / Core | 长上下文场景下 Advisor 失效，影响多轮深度任务 | 💬 27 · 👍 45 | [#67609](https://github.com/anthropics/claude-code/issues/67609) |
| 3 | **[Feature] Disable individual Claude plugin skills** | macOS / Core | 长期高赞 Feature Request：用户希望按粒度关闭插件技能（如 `commit-push-pr`） | 💬 19 · 👍 95 | [#14920](https://github.com/anthropics/claude-code/issues/14920) |
| 4 | **[Windows/MSIX] `git fsmonitor--daemon` 阻塞版本更新重启** | Windows / Desktop | AppX 容器中子进程在强制关闭后残留，导致新版本无法启动（0x80070020） | 💬 17 | [#91763](https://github.com/anthropics/claude-code/issues/91763) |
| 5 | **`/model opusplan` fails with "Unsupported model"** | Windows / Model / VSCode | 使用数月的可用命令突然失败，疑似模型标识符或路由变更 | 💬 9 · 👍 13 | [#92007](https://github.com/anthropics/claude-code/issues/92007) |
| 6 | **Hooks: PreCompact/PostCompact/SessionStart 子代理上下文缺失** | Linux / Hooks / Agents | 子代理 compaction 缺少 agent 字段，`SubagentStop` 触发不存在的 `agent_transcript_path` | 💬 8 | [#91910](https://github.com/anthropics/claude-code/issues/91910) |
| 7 | **[BUG] 外部文件变更系统提示断言不可验证的因由** | Core | "by the user or by a linter" 提示被模型当作事实转述，可能误导后续操作 | 💬 5 | [#71585](https://github.com/anthropics/claude-code/issues/71585) |
| 8 | **Apple Max 20x subscription 被识别为 Pro** | macOS / Auth | 订阅识别错误，可能限制高阶功能使用 | 💬 4 | [#98134](https://github.com/anthropics/claude-code/issues/98134) |
| 9 | **Desktop update 重启丢失运行中会话** | Windows / Desktop | 静默重启恢复了窗口但未恢复 sessions，与 #91763 同根因（#90172 系列拆分） | 💬 4 | [#90867](https://github.com/anthropics/claude-code/issues/90867) |
| 10 | **用户消息被当作隐藏 `thinking` 输出** | Windows / Model / VSCode | 间歇性 BUG：模型本应文本回复的内容变成 thinking 块，用户不可见 | 💬 3 · 👍 7 | [#97504](https://github.com/anthropics/claude-code/issues/97504) |

> **社区反应总览**：Advisor 工具相关的两个 Issue（#69238、#67609）合计贡献了近 100 条评论与 157 个 👍，是当前最热的故障方向，**直接影响核心 Agent 流程可用性**，建议官方优先处理。

---

## 🛠 重要 PR 进展

| # | PR | 说明 | 链接 |
|---|----|------|------|
| 1 | **sec-default: 组织对工具的安全上限覆盖插件** | Policy mod 的 deny 规则现在覆盖用户安装的插件，重要安全加固 | [#99540](https://github.com/anthropics/claude-code/pull/99540) |
| 2 | **web4-governance plugin (R6 workflow)** | 引入基于 T3 trust tensors 的轻量 AI 治理插件，含审计链路 | [#20448](https://github.com/anthropics/claude-code/pull/20448) |
| 3 | **feat: 全局 Hookify 规则支持** | 从 `~/.claude/` 加载全局规则，跨项目生效，hooks 能力扩展 | [#40572](https://github.com/anthropics/claude-code/pull/40572) |
| 4 | **fix(pr-review-toolkit): 修复 agents 的 YAML frontmatter** | 此前 `description` 中含 `Daisy: "..."` 形式导致解析为空，已批量修复 | [#87077](https://github.com/anthropics/claude-code/pull/87077) |
| 5 | **Create SECURITY.md** | 仓库安全策略文件，已关闭归档 | [#1](https://github.com/anthropics/claude-code/pull/1) |

---

## 📈 功能需求趋势

从 50 条活跃 Issue 提炼，开发者最关注的方向：

1. **会话组织与多任务协同** —— Sidebar 分组共享上下文 (#99495)、会话语义阶段标识 (#99551)、为 chip 选择 model/effort (#95190)
2. **模型精细化控制** —— Opus 路由/plan 模型失效修复 (#92007)、Advisor 长上下文适配 (#67609)、按任务选模型 (#95190)
3. **桌面端 & Cowork 体验** —— Windows Desktop 升级/会话持久化 (#90867、#91763、#99541、#99554)、跨平台 mod 渲染一致性 (#99265、#99535)、Mobile 对 VPS/无头服务器支持 (#99525)
4. **插件/Mod 粒度管理** —— 单技能开关 (#14920)、Mod 渲染差异 (#99535)、AbovePrompt 多窗口行为 (#99265)
5. **安全与权限** —— `security-guidance` 多条规则误报/漏报 (#99552、#99553)、组织策略覆盖 (#99540 PR)、AI 生成内容对仓库规则的尊重 (#99549)
6. **Remote Control & 远程会话** —— unarchived 会话无法重新派发 (#98310)
7. **TUI 体验细节** —— Mode 指示器与 hint 独立控制 (#93803)、Voice hold-to-talk 时序 (#99548)

---

## 🎯 开发者关注点与高频痛点

- **Advisor / 长上下文可靠性**：跨 Issue 形成共识，是当前最严重影响生产可用性的问题线。
- **Desktop / MSIX 进程生命周期**：Windows 平台上"升级即会话丢失"、"git fsmonitor 残留"等一连串问题，提示 MSIX 容器进程管理仍是薄弱环节。
- **Hooks 子代理上下文**：compaction、summarizer 阶段缺乏 `agent_id`/`transcript_path` 等元数据，让依赖 hooks 做审计/路由的项目受阻。
- **模型路由透明度**：`/model opusplan` 突然失效，反映模型标识符或后端路由变更未对外同步。
- **权限模式"看似生效实则首次 turn 默认 manual"** (#98345)：自动模式在会话首轮未生效，对无人值守/CI 场景非常不友好。
- **Mod / 桌面渲染一致性**：Code(`format:'diff'`)、AbovePrompt 等桌面端渲染与终端不一致，提示 Desktop 与 CLI 渲染层尚未完全对齐。
- **安全策略 vs 用户插件**：`security-guidance` 规则的多条 false positive/negative (#99552、#99553) 与 PR #99540 一起，勾勒出"组织安全天花板 + 用户插件"治理框架正在成型但仍需打磨。

---

> 📎 **总结**：今日社区呈现"**核心故障高优 / 安全治理加码 / 多任务协同诉求强烈**"三线并行的态势。建议关注者收藏 #69238、#67609（Advisor）与 #14920（插件粒度管理）作为后续进展跟踪锚点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-05**

---

## 今日速览

今日 Codex 处于密集 alpha 迭代节奏，Rust 端在 24 小时内连发三个 alpha 版本（0.162.0-alpha.12/13/14），主要面向工具面与遥测侧的持续优化。社区反馈聚焦在 **Windows 平台稳定性**（远程控制、ACL 拒绝、渲染器崩溃）、**Browser/Computer Use 边界判定**以及 **Dots 与远端会话的版本兼容**；PR 端则有大量 Windows 兼容修复被快速合并，显示团队对 Windows 路径的优先级显著抬升。

---

## 版本发布

过去 24 小时内发布了三个 Rust alpha 版本，均指向 0.162.0 主线：

| 版本 | 链接 |
|------|------|
| rust-v0.162.0-alpha.14 | https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.14 |
| rust-v0.162.0-alpha.13 | https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.13 |
| rust-v0.162.0-alpha.12 | https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.12 |

> 注：当前 release notes 内容极简，核心变更集中在配套合入的 PR 范围（见下文"重要 PR 进展"）。

---

## 社区热点 Issues

按讨论深度与覆盖面选出 10 条最值得关注：

1. **#25271 — Computer Use 无法在 Windows 上识别 Chrome URL（含 chrome://newtab/）**
   - 评论 48，👍 11，热度最高。涉及 Computer Use 的 URL 解析核心能力。
   - https://github.com/openai/codex/issues/25271

2. **#32164 — Windows 上 Remote Control 注册流程永不完成**
   - 评论 18，👍 6。影响 Windows 用户使用 Codex Remote Control 关键能力。
   - https://github.com/openai/codex/issues/32164

3. **#48311 — Windows 内置 LaTeX 编译器失败：找不到平台标准目录**
   - 评论 17，👍 8。影响论文/技术写作场景。
   - https://github.com/openai/codex/issues/48311

4. **#50969 — Windows 桌面 26.930.31730：一天内四次渲染器崩溃**
   - 评论 4。直接关联桌面端稳定性的高严重度缺陷报告。
   - https://github.com/openai/codex/issues/50969

5. **#50769 — Dots GitHub 工具：后续用户授权未被稳定识别**
   - 评论 8，👍 0。反映 dots 工作流中审批状态与作用域混淆。
   - https://github.com/openai/codex/issues/50769

6. **#50157 / #50698 — Dot 无法读取既有本地/远端 Codex 会话（placement format version 1/2 不支持）**
   - 评论 8、3。揭示 dots 与历史会话版本间的兼容性断层，#50698 与 #49729 互相印证。
   - https://github.com/openai/codex/issues/50157 ｜ https://github.com/openai/codex/issues/50698

7. **#32218 — 允许排队一次"储备重置"以在使用额度耗尽时自动兑换**
   - 评论 6，👍 13。Enhancement 类目中获赞最高，反映用户对额度管理自动化的强需求。
   - https://github.com/openai/codex/issues/32218

8. **#50526 — Desktop Guardian 实验重新引入已弃用的 `thread_context`**
   - 评论 5，👍 0。说明新实验配置与现有客户端配置存在未对齐问题。
   - https://github.com/openai/codex/issues/50526

9. **#51004 — Codex CLI 在下载带宽被占满时启动卡死**
   - 评论 1。新版本（0.160.0）回归性问题，影响所有带宽受限环境用户。
   - https://github.com/openai/codex/issues/51004

10. **#37325 — Codex 会把 checkpoint 文案"提升"为权威项目状态并交付不完整工作**
    - 评论 5，👍 0。涉及模型行为的可信度问题，对生产用户尤为警惕。
    - https://github.com/openai/codex/issues/37325

---

## 重要 PR 进展

今日 15 条 PR 均为已关闭（合入主干），按主题归并后的代表性条目：

1. **#50940 — 安全恢复格式错误的 Windows deny-read ACL 状态**
   *修复 #51002/#35228 等 Windows sandbox ACL 报错路径，保留未知限制，不改动受保护文件。*
   https://github.com/openai/codex/pull/50940

2. **#50802 — Windows 守护进程 junction 更新被拒时回退到 `mklink /J`**
   *针对 Windows 策略拒绝进程内 reparse-point 变更的场景，补齐托管守护进程发布路径。*
   https://github.com/openai/codex/pull/50802

3. **#50782 — Windows 守护进程发布遇到瞬态文件锁时进行重试**
   *处理防病毒/扫描器短暂持有新暂存文件的竞态问题。*
   https://github.com/openai/codex/pull/50782

4. **#50803 — 让 `codex remote-control` 走托管守护进程**
   *统一远程控制启动路径，无托管后端时再回退前台服务器。*
   https://github.com/openai/codex/pull/50803

5. **#50913 — 连接的 TUI 新建会话使用服务器端模型默认，避免空目录陷阱*
   https://github.com/openai/codex/pull/50913

6. **#50811 — 新建 TUI 线程遵从服务器端的 reasoning summary 默认**
   *避免客户端配置静默覆盖模型默认。*
   https://github.com/openai/codex/pull/50811

7. **#50962 — 用 feature flag 门控稳定的 environment 工具集暴露**
   *默认关闭，可在 executor 就绪前暴露工具；选择器在就绪状态变化时保持稳定。*
   https://github.com/openai/codex/pull/50962

8. **#50964 / #50943 — 在 turn analytics 中追踪 `tools_change_count`**
   *让后端可按事件 origin/client 维度统计工具集变化频率。*
   https://github.com/openai/codex/pull/50964 ｜ https://github.com/openai/codex/pull/50943

9. **#50977 — 在严格第三方工具 deferral 测试中隔离 tracing**
   *提升测试稳定性，避免并行测试污染 call site interest。*
   https://github.com/openai/codex/pull/50977

10. **#50781 — 限制 TUI MCP 启动通知到所属线程**
    *安全相关：阻止来自不相关线程的 MCP 启动通知建立 TUI 事件通道，杜绝后续跨线程审批注入。*
    https://github.com/openai/codex/pull/50781

---

## 功能需求趋势

从最近 24 小时更新的 issue 与 enhancement 标签中可提炼以下社区方向：

- **Windows 平台一等公民化**：远程控制、ACL 拒绝、守护进程发布、渲染器稳定性——这是当前最集中的痛点，几乎占据今日 Issue 增量的半数。
- **Browser / Computer Use 的策略与作用域治理**：URL 拒绝、站点安全策略、企业管理员策略冲突（#44943、#44881、#49465、#25271），用户希望获得"窄作用域拒绝 + 明确升级/恢复路径"。
- **Rate Limit / Banked Reset 的产品化**：#32218（自动排队）、#32586（避免过期）、#39929（Android 端不可见）共同指向"额度管理需要更自动化与跨端一致"。
- **跨表面（surface）的统一控制面**：#50998 提出"账户状态全局化，但控制仍按表面分裂"的系统性问题，影响 mobile、CLI、web、desktop 协同。
- **Dots / 会话生命周期**：placement format 版本演进导致历史会话不可读（#49729 / #50157 / #50698），用户对会话迁移与持久化提出更高要求。
- **CLI 与 SDK 增强**：`codex exec` 命名（#46804）、CLI 启动在带宽不足时崩溃（#51004）、CLI 通知移动端（#33007）。
- **模型行为可信度**：#37325 引发对 checkpoint 文案被"提升"为权威状态的担忧，属于模型行为治理范畴。

---

## 开发者关注点

综合 PR 与 Issue 高频议题，开发者当前最集中的痛点与需求：

- **Windows 是最大短板**：从 ACL、守护进程发布到渲染器崩溃与 Remote Control 注册失败，Windows 已从"支持"走向"必须可用"的关键节点。
- **策略与作用域冲突的可恢复性**：Browser/Site/工作流安全策略过于刚性，且失败后缺乏明确的"窄作用域授权或升级路径"，开发者被迫绕过或放弃。
- **跨线程 / 跨表面的状态一致性**：包括 MCP 启动通知跨线程、TUI 与 App Server 模型配置不一致、Guardian 实验配置回潮等。
- **遥测可观察性不足**：turn analytics 工具集变化、reasoning summary 默认来源等问题推动 `tools_change_count` 等字段被新增。
- **CLI 体验细节**：`codex exec` 缺少命名、带宽受限时启动卡死、Vim Normal 模式 `/` 行为等，指向非交互/IDE 场景的细节打磨。
- **额度与重置机制的自动化**：banked reset 易过期、Android 端不可见、需手动排队等，反映付费用户希望"少操心"。
- **会话迁移与版本演进**：placement format 升级切断历史会话读取能力，对长期工作流不友好。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-10-05**

---

## 📌 今日速览

Gemini CLI 今日发布 v0.64.0 nightly 版本，PR 流量集中于**安全加固**（glob 路径穿越、checkpoint 越界、checker 环境变量泄漏）和**模型 ID 保护**（阻止 Gemini 3 Pro preview 被静默改写为 3.1）两大方向；社区方面仍以 **subagent 可靠性** 为核心议题——MAX_TURNS 错误上报、generalist agent 卡死、Wayland 下 browser 子代理失败等 P1 问题持续被关注。

---

## 🚀 版本发布

### v0.64.0-nightly.20261005.gfb972b2f8

**类型**：Nightly 自动发版
**变更范围**：相比 2026-10-03 nightly 版本（[对比详情](https://github.com/google-gemini/gemini-cli/compare/v0.64.0-nightly.20261003.gfb972b2f8...v0.64.0-nightly.20261005.gfb972b2f8)）

本次为机器人自动 bump（[PR #29633](https://github.com/google-gemini/gemini-cli/pull/29633)），未附带详细 changelog。该日还同步合入了 75 项 npm 依赖批量更新（[PR #29632](https://github.com/google-gemini/gemini-cli/pull/29632)），覆盖 `@modelcontextprotocol/sdk 1.23.0 → 1.30.1`、`@octokit/rest 22.0.0 → 22.0.1` 等关键包。

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — P1 Bug · 评论 13 · 👍 2
**Subagent 在达到 MAX_TURNS 后错误上报为 GOAL 成功**

子代理 `codebase_investigator` 实际触达最大轮次限制，却仍返回 `Termination Reason: "GOAL"`，掩盖了任务被中断的事实。这是当前 subagent 行为**最关键的可靠性缺陷**之一。社区反应最热烈（13 条评论），属于 `workstream-rollup` 维护者跟踪的 P1 问题，已进入复测阶段。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — P1 Bug · 评论 8 · 👍 8
**Generalist agent 无限挂起**

只要 CLI 调用 generalist agent，连"创建文件夹"这种简单操作也会挂死。用户最长等待一小时后才取消。手动指示模型禁用子代理可绕过。👍 8 是近期 Issues 中最高，说明**普通用户遭遇概率大、痛感强**。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — P2 Enhancement · 评论 9 · 👍 1
**Zero-Dependency OS 沙箱 + Post-Execution Intent Routing**

利用 Gemini 3 模型原生 bash 倾向（grep/cat/sed/awk 串联），在不牺牲安全与 UX 的前提下提升代码探索效率。属于"大型工作量"增强方向，反映社区对**模型原生能力释放**的关注。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — P2 Feature · 评论 7 · 👍 1
**AST 感知的文件读取/搜索/代码库映射 EPIC**

通过引入 AST grep 等方案，让工具调用能精准定位方法边界，减少"读不准"导致的轮次浪费与噪声。该 issue 是同主题 (#22746, #22747) 的父任务，反映对**Token 经济性与精度**的追求。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — P2 Bug · 评论 7
**Gemini 几乎不主动调用自定义 skills 与 sub-agents**

用户已配置 gradle / git skills，但模型在相关任务中仍不会主动触发。社区反映这种"自发性缺失"严重影响技能扩展体系的实用性。属于 subagent 生态的关键缺陷。

### 6. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — P1 Bug · 评论 4 · 👍 1
**Browser subagent 在 Wayland 下报错**

子代理流程被报告为 `Termination Reason: GOAL`，实际是浏览器底层调用失败。这是 P1，意味着在 Linux 桌面用户群（Wayland 越来越主流）中**几乎所有项目无法使用**。

### 7. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — P2 Bug · 评论 4
**Browser Agent 忽略 settings.json 中的 maxTurns 等覆盖项**

`AgentRegistry` 初始化时正确读取了配置，但 Browser Agent 完全不应用。任何用户层调优在 Browser 子代理上都失效——属于 **Agent 配置契约被破坏**。

### 8. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — P3 Feature · 评论 4
**Browser Agent 自动接管与 lock 恢复**

当前 `BrowserManager` 采用"fail-fast"策略，遇到 persistent profile 被锁定就直接失败。希望引入自动接管与孤儿进程清理，提升多会话体验。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — P2 Bug · 评论 3
**工具数 > 128 时触发 400 错误**

随着插件/工具生态扩张，模型上下文里 tool 数量超过模型工具限制即报错（注意摘要里又写 400，超过 400 应为笔误——前者更符合现实）。社区希望引入**上下文内"工具剪枝"机制**。

### 10. [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) — P1 Bug · 评论 3
**get-shit-done 输出钩子导致 CLI 崩溃**

使用第三方 output hook 时，输出即将完成时进程崩溃。这是 P1 级别稳定性问题——任意 output hook 都可能撞上同一崩溃路径，影响所有依赖 hook 的工作流扩展用户。

---

## 🛠 重要 PR 进展

### 1. [#29629](https://github.com/google-gemini/gemini-cli/pull/29629) — 限制流式纯文本高度以消除闪烁
**修复了 MarkdownDisplay 中 streaming 时整屏 clear-and-redraw 问题**，让终端帧高始终短于终端高度。直接提升日常交互体验。

### 2. [#29420](https://github.com/google-gemini/gemini-cli/pull/29420) — 保留显式指定的 Gemini 3 Pro preview 模型名
**修复模型 ID 被 rollout 静默改写**：用户写 `--model gemini-3-pro-preview`，却会被改写为 `gemini-3.1-pro-preview`。这是关键的"用户意图保真"修复。

### 3. [#29422](https://github.com/google-gemini/gemini-cli/pull/29422) — 跨版本解析时保留显式版本化模型 ID
与 #29420 互补，覆盖 `gemini-2.5-flash` 等场景，并修复 Vertex AI 上 3.5 Flash 不可用的问题。

### 4. [#29527](https://github.com/google-gemini/gemini-cli/pull/29527) — 防止请求历史以模型轮次结尾（修复 400 错误）
**修复 `/rewind` 操作、流中断或末尾用户轮次被剥离后产生的 400 Bad Request**：`Requests ending with a model turn are not supported`。属于稳定性与 `/rewind` 体验修复。

### 5. [#29521](https://github.com/google-gemini/gemini-cli/pull/29521) — 修复 checkpoint 路径越界（路径穿越）
checkpoint 标签为 `x/../../secret` 时会被解析到 checkpoint 目录外，构成**严重安全漏洞**。该 PR 把 legacy fallback 路径限制在合法范围内。

### 6. [#29522](https://github.com/google-gemini/gemini-cli/pull/29522) — Glob 工具匹配限制在已校验目录内
**修复 glob 12 上的绝对模式绕过 cwd 的问题**：模式 `/etc/*.conf` 可越过 `dir_path` 校验读取系统文件。安全关键修复。

### 7. [#29523](https://github.com/google-gemini/gemini-cli/pull/29523) — 外部 safety checker 最小化环境与输出封顶
**`CheckerRunner` 曾将 `GEMINI_API_KEY` 与全部环境变量泄漏给第三方 checker**，且 stdout 无大小限制。PR 提供隔离 env + 输出上限，安全治理样板。

### 8. [#29429](https://github.com/google-gemini/gemini-cli/pull/29429) — 透出 Cloud Code API 报告的配额重置窗口
之前 `RESOURCE_EXHAUSTED` 错误中的 `quotaResetTimeStamp`、`quotaResetDelay`、`uiMessage` 从未被读取，用户看不到重置时间。**企业配额可观测性显著提升**。

### 9. [#29423](https://github.com/google-gemini/gemini-cli/pull/29423) — 在 sandbox 中持久化信任配置**
修复 podman/docker sandbox 下 `trustedFolders.json` 写不到宿主的问题，避免每次启动都弹出信任对话框。

### 10. [#29505](https://github.com/google-gemini/gemini-cli/pull/29505) — 支持 rootless Podman with keep-id
修复 rootless Podman 沙箱启动失败，正确保留宿主 UID/GID。是**Linux 容器化体验的关键改进**。

> 另外值得关注：#29432（关闭时拒绝队列中的工具调用，避免批准无法执行的工作）、#29431（TOML 策略规则健壮性）、#29632（依赖批量更新，包含 MCP SDK 跨多个次版本升级）。

---

## 📈 功能需求趋势

将 Issues 按主题聚合，社区关注方向呈现以下分布：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Subagent 体系成熟度** | #22323、#21409、#21968、#22267、#22232、#18287、#20195、#22598 | ⭐⭐⭐⭐⭐ |
| **Browser Agent 体验与跨平台** | #21983（Wayland）、#22267（settings.json）、#22232（lock 恢复） | ⭐⭐⭐⭐⭐ |
| **AST 感知工具 & Token 经济性** | #22745、#22746、#22747、#19561（"Tactful Extraction"） | ⭐⭐⭐⭐ |
| **OS 沙箱与执行安全** | #19873（Zero-Dep Sandbox）、#22672（阻止破坏性行为） | ⭐⭐⭐⭐ |
| **模型与工具上限** | #24246（>128 tools 400）、#21432（Self-Awareness） | ⭐⭐⭐ |
| **任务跟踪范式重构** | #21000、#18836（持久化任务跟踪） | ⭐⭐⭐ |
| **终端渲染性能** | #22466（`\n` 处理）、#21924（resize 无闪烁） | ⭐⭐ |

最强烈信号是 **agent 子系统成熟化**：从子代理可靠性、发现、配置、上下文传递，到浏览器子代理的跨平台覆盖，正在成为社区共建的下一阶段主战场。

---

## 💬 开发者关注点

综合 Issue 与 PR 反馈，开发者的核心痛点可归纳为：

1. **Subagent 行为不一致**
   - 自发性不足（#21968：模型不主动调用 skills/sub-agents）
   - 终止状态撒谎（#22323：MAX_TURNS 被报为 GOAL）
   - 卡死（#21409：generalist agent 挂起）

2. **安全边界反复出现**
   - 路径穿越（#29521 checkpoint、#29522 glob）
   - 环境变量泄漏（#29523 checker）
   - 信任配置在不同沙箱/宿主下未持久化（#29423）
   - 浏览器子代理在 Wayland 直接失败（#21983）

3. **配置与模型 ID 不透明**
   - 显式 `--model` 被静默改写（#29420、#29422）
   - 配额限制看不出何时恢复（#29429）
   - 工具数过多直接 400（#24246）

4. **Token/上下文经济性**
   - 大文件 read 一次性灌满上下文（#19561：建议 surgical read）
   - 反复尝试在随机位置生成临时脚本污染工作区（#23571）
   - 重复 stdout 渲染导致闪烁（#29629、#21924）

5. **Agent 自描述能力不足**
   - 用户询问 CLI 用法/快捷键时，agent 给出的答案不准确（#21432 "Self-Awareness"）
   - 期望 agent 能像"自己的专家"一样指导用户

---

*日报由 GitHub Issues / Pull Requests 公开数据整理生成。如需查阅完整记录或参与讨论，请前往 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-10-05  
**数据来源**：[github/copilot-cli](https://github.com/github/copilot-cli)

---

## 一、今日速览

今日最显著的进展是 **v1.0.92-4 版本发布**，引入了全新的 `copilot config` 子命令体系，并显著优化了首启速度与多 MCP 服务器并发连接性能。社区议题方面，Issue 活跃度维持在高位（24 条更新），**MCP 集成的跨平台稳定性** 成为新的焦点话题——macOS 安全更新后的 `.mcp-writer.binding` 陈旧问题、Windows 上 MCP worker 残留进程、Linux bubblewrap 沙箱预检失败等均暴露出 MCP 在多操作系统下的成熟度挑战。值得关注的反常信号：**过去 24 小时 PR 更新为 0**，版本迭代主要靠自动化预发布通道（如 v1.0.92-4）推进。

---

## 二、版本发布

### 🚀 v1.0.92-4（预发布通道）

**Added（功能新增）**
- 新增 `copilot config` 子命令族，支持对设置进行 `list` / `read` / `set` / `remove` 操作，CLI 配置管理正式具备结构化入口。

**Improved（改进项）**
- **首启性能**：将捆绑 CLI 包的解压操作移至子进程执行，规避主进程阻塞。
- **MCP 并发启动**：在同时连接多个 MCP 服务器场景下，启动响应性得到改善。
- **Canvas 能力**：Canvas action 现在支持返回图像（变更日志被截断，预计后续版本补全说明）。

📎 [v1.0.92-4 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.92-4)

> 解读：`copilot config` 子命令的加入意味着 CLI 从"散落各处"的环境变量 / 配置文件管理走向结构化配置 API，是面向 SDK 集成商与企业管理员的重要信号。

---

## 三、社区热点 Issues（TOP 10）

> 选取综合评论热度、社区赞同数（👍）、影响面与时新性的 10 条最具代表性的议题。

| # | Issue | 状态 | 热度 | 关键价值 |
|---|-------|------|------|---------|
| 1 | **[#640](https://github.com/github/copilot-cli/issues/640)** `read_bash` Invalid session ID 错误 | ✅ 已关闭 | 💬 24 / 👍 10 | **历史高频痛点终于落地**——长期困扰用户的工具调用会话 ID 解析错误，涉及 `sessions` 与 `tools` 双区域 |
| 2 | **[#4998](https://github.com/github/copilot-cli/issues/4998)** macOS 更新后 `.mcp-writer.binding` 设备 ID 陈旧导致 CLI 不可用 | 🔴 开放 | 💬 8 / 👍 8 | **macOS 安全补丁与持久化缓存策略问题**，新会话与恢复会话均受影响，影响面较广 |
| 3 | **[#5008](https://github.com/github/copilot-cli/issues/5008)** 1.0.89 启动时 `Not authenticated` 竞态 | ✅ 已关闭 | 💬 7 / 👍 5 | **版本回归被快速修复**，揭示登录初始化与 model provider attribution 读取之间的竞态 |
| 4 | **[#4946](https://github.com/github/copilot-cli/issues/4946)** 后台 shell 完成通知后 HTTP 400 `content[].thinking` | 🔴 开放 | 💬 5 / 👍 1 | 涉及 `sessions` × `models` 交叉点的边界处理，影响长任务工作流 |
| 5 | **[#2978](https://github.com/github/copilot-cli/issues/2978)** 企业代理下 `session.create` "fetch failed"（v1.0.36 SDK） | 🔴 开放 | 💬 3 / 👍 0 | **横跨 5 个月仍未关闭**——企业网络环境下的 SDK headless 模式连通性问题，对 B 端用户尤为关键 |
| 6 | **[#4972](https://github.com/github/copilot-cli/issues/4972)** Windows 上 MCP worker 通过 wrapper 启动后无法被退出 | 🔴 开放 | 💬 3 | Windows 平台特有的进程生命周期管理缺陷，资源泄漏隐患 |
| 7 | **[#4971](https://github.com/github/copilot-cli/issues/4971)** 每小时出现 `Authorization error`，`/login` 无法根治 | 🔴 开放 | 💬 3 | **认证令牌刷新逻辑缺陷**，严重影响长时间运行的工作流 |
| 8 | **[#4966](https://github.com/github/copilot-cli/issues/4966)** 1.0.88 回归：`joinSession()` 阻塞扩展启动 | ✅ 已关闭 | 💬 2 | SDK 扩展启动时序回归，已被快速处理，反映团队对扩展生态的重视 |
| 9 | **[#5042](https://github.com/github/copilot-cli/issues/5042)** HydraFusion 路由失败后会话被切到低上下文模型 | 🔴 开放 | 💬 1 | **新模型路由架构的早期暴露问题**——会话中途模型降级导致上下文窗口不足 |
| 10 | **[#5051](https://github.com/github/copilot-cli/issues/5051)** 外置 provider 场景下 CLI 约 20 分钟超时 | 🔴 开放 | 💬 1 | 使用 LM Studio 等本地/自托管 provider 时的稳定性边界 |

📌 **补充观察**：今日还有多个低热度但**结构意义重大**的开放 Issue，例如 [#5052](https://github.com/github/copilot-cli/issues/5052)（Linux 沙箱 bubblewrap 预检在 Ubuntu 26.04 失败）、[#4969](https://github.com/github/copilot-cli/issues/4969)（plugin marketplace 严格 Zod 校验，单条 description 超限即整体失败）、[#5049](https://github.com/github/copilot-cli/issues/5049)（Windows 上 Computer Use 插件在 ACP 模式下不可用）。这些"0 评论"的新 Issue 往往预示**下一个版本的修复优先级**。

---

## 四、重要 PR 进展

⚠️ **过去 24 小时 PR 更新数量为 0**。

这是一个**不寻常的静默窗口**。从近期发布节奏（v1.0.92-4）来看，团队仍在通过预发布通道频繁出货，但 PR 合并活动暂歇，可能原因包括：

- 当前处于发版冻结期，等待 v1.0.92 正式 GA；
- 工程资源集中在 v1.0.92-4 的发布候选稳定性收尾；
- 部分修复可能正在内部 review 阶段，尚未同步到 main 分支。

> 建议读者关注后续 24-48 小时的 PR 恢复节奏，以及对应的 issue 关闭活动。

---

## 五、功能需求趋势

综合今日活跃的 24 条 Issue，可以归纳出社区最集中的六大功能方向：

| 趋势 | 代表 Issue | 关注度 |
|------|----------|--------|
| 🔌 **MCP 集成的跨 OS 稳定性** | #4998、#4972、#4991、#5050 | ⬆⬆⬆ |
| 🔐 **认证与会话生命周期韧性** | #4971、#5008、#640、#5051 | ⬆⬆⬆ |
| 🧠 **多模型路由与上下文管理** | #5042、#4970、#5009 | ⬆⬆ |
| 🪟 **Windows 平台一等公民体验** | #4972、#5049、#3496 | ⬆⬆ |
| 🧩 **插件/扩展生态可靠性** | #4969、#5049、#5011 | ⬆⬆ |
| 📎 **多模态与多格式输入** | #5010（HEIC）、v1.0.92-4 Canvas 图像返回 | ⬆ |

**趋势解读**：
- **MCP 已成为 Copilot CLI 最重要的扩展点**，但其可靠性问题正在积累——从 macOS 设备 ID 失效、Windows 进程残留到 Linux 沙箱预检，呈现"跨平台成熟度参差"的局面。
- **多模型路由**（HydraFusion）是新晋议题关键词，预示 GitHub 正在构建更复杂的模型调度层，开发者需要为路由失败场景做更多容错设计。
- **Windows 体验**正在被系统性关注，从复制粘贴、ACP 模式到 MCP 进程管理，社区对 Windows 一等公民地位的诉求越发明显。

---

## 六、开发者关注点

从社区反馈中可以提炼出以下**高频痛点**与**持续诉求**：

### 🔥 高频痛点

1. **跨 OS 的 MCP 集成脆弱性**  
   开发者反馈高度集中在 MCP 接入层——macOS 设备 ID 失效、Windows 进程残留、Cloudflare 远程 MCP 订阅限制、Linux bubblewrap 沙箱预检失败。**MCP 协议本身的稳定性 vs 运行时宿主稳定性之间的鸿沟**是当前最大短板。

2. **认证令牌的"看似有效实则过期"问题**  
   Issue #4971 揭示的"每小时必须重新登录"是开发流程杀手——即便 `/login` 成功也无法根治，疑似后台 token 验证或刷新逻辑存在系统性缺陷。

3. **长会话（>20 分钟）的稳定性边界**  
   无论是外置 provider（#5051）还是内置 routing（#5042），开发者开始触及 CLI 长时间运行的"使用边界"，反映其作为常驻开发伙伴的期望正在形成。

5. **错误信息的"误导性"**  
   #5009 指出"空响应被渲染为 No response was returned"等错误信息与实际状态不符，**降低了调试效率**。

### 💡 高频诉求

- ✅ `/agent`、`/model` 等命令的**自动补全**（#1634，已关闭）
- ✅ **多仓库统一会话**支持加载多个 `.github/copilot-instructions.md`（#5011）
- ✅ **HEIC 等现代图像格式**直接可作为图像输入（#5010）
- ✅ **插件市场**的"宽松解析 + 部分加载"模式（#4969）
- ✅ **OTel/可观测性**中正确的 model 字段归属（#4970）

---

## 📊 数据小结

| 指标 | 数值 |
|------|------|
| 24h 新发布版本 | 1（v1.0.92-4） |
| 24h 活跃 Issues | 24 |
| 其中 Open | 16 |
| 其中 Closed | 8 |
| 24h 活跃 PR | 0 |
| 累计 👍 最高 Issue | #640（10 👍） |
| 历史最长未解决 | #2978（2026-04-26 创建，至今 5+ 个月） |

---

*📅 报告生成时间：2026-10-05 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-05**

---

## 📌 今日速览

今天 OpenCode 社区以 **Permissions 权限请求丢失**与 **/compact 上下文压缩异常** 两条主线为焦点：核心问题 (#52846) 与配套修复 PR (#50595 / #53272) 在 24 小时内齐头并进，v2 beta 的压缩 / 附件相关 issue 持续累积。同时，AI 接入侧迎来重要扩展——原生支持 **Vercel AI Gateway** 与 **Venice** 两大 Provider，移动端 / GUI 与 TUI 行为对齐工作也在批量落地。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。近期关注度较高的修复集中在 v2 beta 分支，建议关注 master 分支的后续 tag。

---

## 🔥 社区热点 Issues

以下按评论数 + 社区影响筛选，共 10 条：

### 1. [#44094] v2 beta 压缩忽略 `agents.compaction.model` 配置 — 13 评论
自从 8 月"shared model request"重构后，手动 / compact 总是使用会话当前模型，悄无声息地忽略用户配置。该 bug 已被多名用户复现，shangweijun 提供详细定位。**这是 v2 beta 中最关键的配置失效类 bug 之一。**
🔗 https://github.com/anomalyco/opencode/issues/44094

### 2. [#50843] GitLab Duo workflow 在自托管环境失败 — 12 评论
GitLab Duo 模型在自托管 GitLab 实例上需要工作目录与项目上下文，同时 OAuth 刷新机制存在隐患。**对企业 / 自托管 GitLab 用户影响明显。**
🔗 https://github.com/anomalyco/opencode/issues/50843

### 3. [#26846] NixOS + WSL 下 OpenCode 段错误 — 10 评论 / 👍16
长期未决的 `segfault` 问题今日被 **关闭**，意味着已通过 nixpkgs 升级或社区修复解决。**该 issue 累积 16 个 👍，是 Windows + NixOS 用户的历史痛点。**
🔗 https://github.com/anomalyco/opencode/issues/26846

### 4. [#40483] DeepSeek v4 Flash Free 在 Windows Desktop 返回空白响应 — 8 评论
Windows 11 + OpenCode Desktop 下 DeepSeek v4 Flash Free 显示 thinking 状态后无内容输出，UI 疑似挂起。**反映某些模型在 Desktop 端的渲染兼容性问题。**
🔗 https://github.com/anomalyco/opencode/issues/40483

### 5. [#40485] `deepseek-v4-flash` 通过 `opencode-go` 返回 403 — 7 评论 / 👍6
同一 key 下 `deepseek-v4-pro` 和 `minimax-m3` 正常，唯独 `deepseek-v4-flash` 返回 403 或挂起。**已关闭，说明已修复；点赞数高表明影响较多订阅用户。**
🔗 https://github.com/anomalyco/opencode/issues/40485

### 6. [#28141] Big Pickle 模型返回 `AI_APICallError` — 6 评论
OpenCode Zen 上的 `big-pickle` 模型突然不可用，而 DeepSeek V4 Flash Free 正常。**模型稳定性的典型案例，反映多模型接入侧需要更强的健康检查。**
🔗 https://github.com/anomalyco/opencode/issues/28141

### 7. [#45558] 拖拽 / 粘贴文件路径触发 `POST /prompt` 500 — 5 评论
v0.0.0-beta-18387 之后，TUI 输入框拖拽文件或粘贴文件路径会使会话启动失败（文件被当作图片附件，触发 Base64 错误）。与 #44094 同属 v2 beta 回归问题。
🔗 https://github.com/anomalyco/opencode/issues/45558

### 8. [#52623] 额度统计异常（中文 Issue） — 5 评论
用户反馈 5 小时未使用 API 却显示 5 小时额度耗尽，周/月额度也异常。**面向中文用户的额度计算 / 时区处理问题，已关闭，疑似已修复。**
🔗 https://github.com/anomalyco/opencode/issues/52623

### 9. [#44080] /compact 静默写入"仅推理"空摘要导致不可逆上下文丢失 — 4 评论
当 compact 使用的模型返回**只包含 reasoning、无 text part** 的响应时，OpenCode 会将其作为成功摘要落地并替换 epoch，造成**原始对话永久丢失**。**这是一个数据安全级别的严重问题。**
🔗 https://github.com/anomalyco/opencode/issues/44080

### 10. [#53146] 双 server 进程共享 `opencode.db` 导致 `session_message.seq` UNIQUE 冲突 — 3 评论
`opencode serve --service` 与 `opencode -c` 嵌入 server 共用一份 SQLite 时，两个进程独立分配 `seq`，后启动进程的计数器使用陈旧最大值，导致会话失败。属于**多实例并发场景的边界 bug**。
🔗 https://github.com/anomalyco/opencode/issues/53146

---

## 🛠 重要 PR 进展

以下 PR 影响面较广，按功能 / 修复主题挑选 10 条：

### 1. [#53270] feat(app): 持久化多个 `/btw` 旁问
将 `/btw` 改为**一次性旁问**：无后续 composer、无回复线程、无草稿；每个问答独立保存为设备本地 tab，并在 reload 后恢复。
🔗 https://github.com/anomalyco/opencode/pull/53270

### 2. [#52643] feat(ai): 原生 Vercel AI Gateway 语言模型
将原评估用途的 Gateway facade 升级为原生 Messages / Responses / Chat Completions 接入；GPT / Muse / Grok 默认走 Responses，其它模型家族默认走 Messages，**完整保留 Gateway 模型 ID 与显式 API 选择**。
🔗 https://github.com/anomalyco/opencode/pull/52643

### 3. [#53271] feat(ai): 原生 Venice Provider
为 `@opencode/ai` 添加 Venice Chat Completions 原生接入，并切换 Core 的 Venice 实现。V2 路径相关（#52809），V1 保持不变。
🔗 https://github.com/anomalyco/opencode/pull/53271

### 4. [#50595] fix(permission): 在清理路径补发 `permission.replied` 事件（关闭 #29422）
当 permission 询问被 ESC / 会话中止或实例释放中断时，pending 条目被删除但**没有发出 `permission.replied` 事件**，客户端永远 404。修复清理路径上的事件发布。
🔗 https://github.com/anomalyco/opencode/pull/50595

### 5. [#53272] fix(app): 客户端将"缺失的 permission 请求"视为终态
服务端事件缺口的客户端侧修复。Web / Desktop 客户端原本只在收到 `permission.replied` 时移除弹窗，新版在请求消失时也将其视为终态。（与 #52846、#50595 协同）
🔗 https://github.com/anomalyco/opencode/pull/53272

### 6. [#53257] fix(app): GUI 全链路支持一次性配对链接
#50970 / #50972 引入的 `/auth/connect/<code>` 单次链接此前只在 connect 屏幕支持，其它 GUI 入口把链接当服务器地址处理。新版让"添加服务器"对话框、桌面端、过期 session 都能正常兑换。
🔗 https://github.com/anomalyco/opencode/pull/53257

### 7. [#53266] fix(core): 压缩摘要时禁止 tool selection
压缩请求要求文本摘要，但原请求**仍启用工具选择**。该 PR 将摘要请求的 tool choice 设为 `none`，**直接缓解压缩后上下文被工具调用污染的问题**。
🔗 https://github.com/anomalyco/opencode/pull/53266

### 8. [#50907] fix(cli): 启动 managed service 时加载保存的环境变量
Desktop 直接调用 `serve --service`，绕过了原本会读取保存环境变量的代码路径。修复后导入服务前会先加载 service 保存的环境变量，**关闭 #50882**。
🔗 https://github.com/anomalyco/opencode/pull/50907

### 9. [#53268] feat(app): 恢复"会话位置不可用"提示
#46695 移除的会话位置提示被带回来：当 session 所在文件夹消失时，时间线 / dock / 侧栏仍渲染，但 composer 变成"选择 worktree 或迁移 session"的提示。
🔗 https://github.com/anomalyco/opencode/pull/53268

### 10. [#53267] feat(app): 优化移动端会话导航与抽屉
窄屏显示 `Session` / `Changes` / `More...` 三个 Tab，`More...` 打开底部抽屉聚合 Files / Terminal / Usage / Session 详情；Files 与 Terminal 改用 `menu` 移动端 kind，switcher 移到编辑器底部。
🔗 https://github.com/anomalyco/opencode/pull/53267

---

## 📈 功能需求趋势

从全部 Issues 提炼，社区当前最关注的几个方向：

| 方向 | 代表 Issue |
|------|------------|
| **🧩 新模型 / Provider 接入** | Vercel AI Gateway (#52643)、Venice (#53271)、OmniRoute (#40706)、Big Pickle (#28141)、DeepSeek 模型清理 (#40777) |
| **🖥 IDE 集成与编辑器感知** | VS Code 扩展无法感知选择 (#40740)、ACP 客户端缺少 `plan` 事件 (#40745)、多 agent 并行可视化 (#40764) |
| **🤖 自动化 / Computer-use** | Codex 式电脑与浏览器自动化 (#40782) |
| **🪟 GUI / TUI 行为对齐** | GUI 与 TUI 的 inbox / steer / queue / revert 对齐 (#53076)、macOS Ctrl+D 二次确认 (#51210) |
| **🗂 MCP 体验改进** | TUI 侧栏点击 MCP 切换启用 (#40721) |
| **⚡️ 内存 / 性能** | macOS 高内存占用 (#40779) |
| **🌐 本地化** | 瑞典语社区翻译 (#40785) |
| **🧠 Context 与 Compaction** | compact 数据丢失 (#44080)、compaction 配置失效 (#44094)、重试误判 400 (#52464) |

---

## 🎯 开发者关注点

汇总 Issue 与 PR 反馈，开发者社区当前最强烈的几个痛点：

1. **v2 beta 回归频繁** —— compaction 配置失效 (#44094)、附件拖拽 500 (#45558)、compaction 数据丢失 (#44080) 三个严重问题集中在 v2 beta，**升级前请

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-05

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) （Issue/PR 链接指向仓库镜像 `earendil-works/pi`）

---

## 一、今日速览

过去 24 小时 Pi 仓库并无新版本发布，但 Issues 与 PR 活跃度明显集中在**日常维护与平台兼容性修复**：多条 bug 报告集中于 Bedrock / Anthropic / Gemini 3 等 provider 的边角行为，PR 端则以小型修复和文档补全为主。值得关注的亮点是 `#6665`（TUI 流式输出 100% 占用单核）已被官方标记为 `inprogress`，性能优化工作正式启动；同时由维护者 `badlogic` 本人发起的 `#10455`（嵌套工具执行 API）标志着 `durable` 子系统的演进进入下一阶段。

---

## 二、版本发布

无（过去 24 小时无新 Release）。

---

## 三、社区热点 Issues（Top 10）

1. **#6665 — TUI 流式输出时占用单核 100%**（OPEN · inprogress · 💬14 · 👍6）
   长会话下 TUI 几乎打满一个 CPU 核心，作者已通过 spindump 锁定热路径：Markdown 渲染 → 自动换行 → `Intl.Segmenter`（ICU 字符分割）。两处关键缺陷：grapheme 分割未缓存、每 chunk Markdown 重建。**为何重要**：这是直接影响所有长会话用户卡顿体验的核心性能问题，且已被维护者确认接手修复。
   https://github.com/earendil-works/pi/issues/6665

2. **#8643 — Bedrock 上 OpenAI 模型拒绝 `toolResult.content` 内的图片**（OPEN · 💬10 · 👍3）
   Bedrock 的 OpenAI 适配器未像 `openai-completions.ts` 那样把图片提升到兄弟 user content 块中。**为何重要**：涉及多模态工具结果在 Bedrock 上的可用性，作者已准备好 fix + regression test，是社区高完成度的 PR candidate。
   https://github.com/earendil-works/pi/issues/8643

3. **#10314 — 全屏模式下 Home/End 默认行为是否合理？**（OPEN · 💬9 · 👍5）
   全屏 TUI 下 Home/End 从「行首/行尾」变成「滚动到顶/底」，打破肌肉记忆。**为何重要**：是一个会影响所有键盘重度用户的 UX 决策，社区投票式讨论（👍5 在纯讨论型 issue 中属高热度）。
   https://github.com/earendil-works/pi/issues/10314

4. **#8301 — 无法在 prompt 队列中交错 `/compact` 与任务**（OPEN · 💬7 · 👍2）
   队列中首次 `/compact` 会立刻启动压缩并取消当前会话。**为何重要**：影响所有用 CLI 跑批量化自动任务的工作流。
   https://github.com/earendil-works/pi/issues/8301

5. **#9134 — Anthropic 适配器静默丢弃自定义工具 schema 的根级 `anyOf`**（OPEN · 💬6）
   注册端保留约束，但发给模型的 `input_schema` 被默默裁剪，导致模型行为与本地校验脱节。**为何重要**：典型的「本地校验与远端 schema 不匹配」类陷阱，影响自定义工具作者。
   https://github.com/earendil-works/pi/issues/9134

6. **#10330 — CLI 模式下自动 compaction 不触发**（OPEN · 💬6）
   `pi --mode json` 下 agent loop 不会自动 compaction（自 #6994 修复后 TUI 正常）。**为何重要**：CLI 与 TUI 行为不一致，是典型的回归，需要修复以恢复长任务无人值守能力。
   https://github.com/earendil-works/pi/issues/10330

7. **#10287 — 网络重试后 `getContextUsage()` 暴涨到 33 万 token**（OPEN · 💬4 · 👍1）
   一次可重试网络错误后，上下文用量从 ~42k 飙到 330,081 token。**为何重要**：直接影响自动 compaction 触发判断和成本估算，是潜在的「静默炸掉上下文」严重 bug。
   https://github.com/earendil-works/pi/issues/10287

8. **#9887 — `read` 工具参数若为字符串类型则在 TUI 报错**（OPEN · 💬6）
   `openrouter:xiaomi/mimo-v2.6-flash` 等模型倾向把 `offset`/`limit` 输出为字符串，TUI 渲染时直接做字符串拼接而非数字相加。**为何重要**：模型输出 schema 不严谨是高频问题，需要客户端做类型防御。
   https://github.com/earendil-works/pi/issues/9887

9. **#9946 — CMD 模式 (`!`) 不遵守 `outputPad` 设置**（OPEN · 💬6）
   即使设为 0，CMD 输出仍带前导空格。**为何重要**：明确的配置不被尊重类问题，影响自动化日志消费。
   https://github.com/earendil-works/pi/issues/9946

10. **#10455 — durable：ToolExecutionApi 支持嵌套工具执行**（OPEN · 💬2 · 维护者本人）
    由 `badlogic` 提出：当前 `ToolExecutionApi` 暴露 registry 但无执行入口，而 `pi-ai` 早已定义 `NestedToolCallRecord` / `ToolResultMessage.nestedCalls`。**为何重要**：维护者亲自挂旗的官方路线图条目，预示下一阶段 Tool API 演进方向。
    https://github.com/earendil-works/pi/issues/10455

---

## 四、重要 PR 进展

> 过去 24 小时仅有 4 条 PR 提交/合并，活跃度偏低，全部已 CLOSED，属小型修复与文档维护：

1. **#10440 — fix(coding-agent): 解析 QuickJS wasm 路径改为每进程一次**（CLOSED）
   修复 #10439：`getQuickJSWasmPath()` 每次 codemode 调用都重新解析路径，`pnpm global update`（per-install hash dir）后导致后续 codemode 全部失败。改为启动期缓存。**意义**：解决 self-update 后功能崩溃这一硬伤。
   https://github.com/earendil-works/pi/pull/10440

2. **#10463 — fix(coding-agent): codemode MCP 测试中期望图片保存标签**（CLOSED）
   因 d677d0ee7 提交新增 `[Image saved to ...]` 标签，CI 测试需相应调整。**意义**：常规 CI 跟进。
   https://github.com/earendil-works/pi/pull/10463

3. **#2597 — docs(coding-agent): 记录 `resources_discover` 事件**（CLOSED）
   文档中此前未列出的事件，容易让 LLM 误以为是幻觉；额外补充一个加载 Claude Code skills 的示例扩展。**意义**：补齐扩展开发文档。
   https://github.com/earendil-works/pi/pull/2597

4. **#10448 — pr for sync**（CLOSED）
   仓库同步 PR，无实质改动。
   https://github.com/earendil-works/pi/pull/10448

---

## 五、功能需求趋势

从本周 Issue 池中归纳出几条明显的需求轴线：

| 方向 | 代表性 Issue |
|---|---|
| **MCP 协议演进** | #10416（Stateless MCP 2026-07-28）、#10291（keychain 存 MCP token） |
| **Provider 兼容性深化** | #8643（Bedrock 多模态）、#9134（Anthropic anyOf）、#9845（Codex maxTokens）、#10287（重试后上下文估算）、#10467（Gemini 3 thought_signature）、#10468（reasoning model 温度参数） |
| **OAuth / 鉴权体验** | #10377（OpenAI refresh_token 失效）、#10335（OpenCode Console OAuth）、#10291（MCP 凭据入 keychain） |
| **TUI/UI 主题与可访问性** | #10314（Home/End 行为）、#9715（全屏选区样式）、#10469（assistant 消息背景）、#9439（overlay 覆盖图片） |
| **性能与可扩展架构** | #6665（TUI 单核占用）、#10455（嵌套工具执行 / durable）、#10466（宿主设置 codemode worker 路径） |
| **可观测性与诊断** | #10457（结构化日志 API） |
| **SDK / RPC 表面** | #9194（队列清理 RPC）、#10454（RPC display-only 文本转换）、#7946（提交消息不等 extension hook） |

---

## 六、开发者关注点

从反馈文本中提炼出的高频痛点：

- **Provider 行为碎片化**：Bedrock / Anthropic / Gemini 3 / OpenAI-Compatible 各有边角问题，特别是工具结果中的多模态内容、reasoning model 的参数裁剪、schema `anyOf` 静默丢弃等。开发者期待更统一的 provider 抽象层。
- **CLI 与 TUI 行为不一致**：auto-compaction、输出 padding 等在 CLI 下回归明显，影响无人值守场景。
- **配置不生效 / 默认行为破坏肌肉记忆**：`outputPad` 被忽略、Home/End 行为改变等问题反映出「配置契约」需要更严格的回归覆盖。
- **网络异常下的状态管理**：`#10282` 网络错误后 token 估算爆炸、`#10379` Bedrock 5 分钟挂起后不重试——可恢复性是当前最被低估的风险。
- **模型输出类型不严谨**：`#9887` 等案例提示客户端需对 `toolCall` 参数做类型防御，而非信任 LLM 输出。
- **自更新生命周期**：`#10439`/`#10440` 暴露了 pnpm/npm global install 后路径失效问题，影响所有长期运行实例。
- **扩展生态可移植性**：`#10466`（宿主设置 wasm 路径）、`#10457`（统一日志 API）、`#10291`（keychain 凭据）共同指向同一个诉求——Pi 需要更明确的「嵌入/打包」契约以服务第三方分发商。

---

*日报基于 GitHub 公开数据自动整理，如需订阅或定制维度请反馈。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-05

---

## 📌 今日速览

今日社区焦点集中在 **Managed Agent Runtime Broker** 的稳定性与功能补齐——大量 PR 围绕托管会话的并发控制、Broker 认证、Workspace 生命周期管理展开，同时 `HostedWorkspaceToolTurnIT` 集成测试在 MySQL 8.4 通道持续出现 409 超时类间歇性失败，CI 抖动成为开发者关注的核心痛点。另一条主线是 **本地模型与目录规范化**：`#13415` 揭示 Qwen Code 假定本地 Qwen3.x 服务具有 1M 上下文窗口导致自动压缩失效，`#13421` 立即给出 llama.cpp 文案识别补丁，闭环速度快。此外 **Kubernetes CSI Runtime**（`#13289`）作为实验性新运行时正式进入 PR 阶段，平台分布方向再下一城。

---

## 🚀 版本发布

### v0.24.7-nightly.20261004.9915c7ff8f

最新 nightly 版本，主要改动：
- **fix(core)**: 将 Code Mode 文本与 lazy tool discovery 对齐（[#12990](https://github.com/QwenLM/qwen-code/pull/12990) by @tanzhenxin）
- **fix(permissions)**: 已批准规则的权限处理

> 标签：nightly 通道，尚未进入 stable。如需稳定构建请使用 0.24.7。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 关键点 | 关注度 |
|---|---|---|---|
| 1 | [#9693](https://github.com/QwenLM/qwen-code/issues/9693) | Qwen Desktop 在 Windows 上即使未激活 MCP 也报告 `-32000 Connection closed`，影响所有 STDIO 传输 MCP 服务器 | ⭐9 评论，已 CLOSED，等待回归测试 |
| 2 | [#13333](https://github.com/QwenLM/qwen-code/issues/13333) ⚠️ P1 | **≥8 并发 Turn 在普通硬件上因 store path 锁队列而卡死**，Managed Agent 高并发场景的关键瓶颈 | ⭐7 评论，OPEN |
| 3 | [#13300](https://github.com/QwenLM/qwen-code/issues/13300) | 收集 `#12855` 合并后遗留的 H0c 评审建议（2 + 12 条），体现项目"Critial-only"渐进治理风格 | ⭐6 评论，OPEN |
| 4 | [#13395](https://github.com/QwenLM/qwen-code/issues/13395) | **Kubernetes 工具运行时**进度跟踪 + 跨平台交付门禁，对应提案 `#12380`、实现 PR `#13289` | ⭐6 评论，OPEN |
| 5 | [#13255](https://github.com/QwenLM/qwen-code/issues/13255) | 集成测试 `packagedHarnessUsesSavedWorkspacesThroughRealBrokerWorkerAndSqlStore` 在 `POST /files/rewind` 上间歇性返回 409 | ⭐6 评论，OPEN |
| 6 | [#13415](https://github.com/QwenLM/qwen-code/issues/13415) | 本地 Qwen3.x 通过 OpenAI 兼容端点被错误假定为 1M 上下文窗口，自动压缩永不触发直到服务报错 | ⭐4 评论，OPEN |
| 7 | [#10692](https://github.com/QwenLM/qwen-code/issues/10692) | `tool_call` dialect XML 工具调用作为纯文本泄漏，fallback 仅恢复 invoke 方言——而 qwen-code 系统提示教的恰恰是这种方言 | ⭐4 评论，OPEN |
| 8 | [#6710](https://github.com/QwenLM/qwen-code/issues/6710) ⚠️ P1 | ACP `/session/:id/continue` 无法区分用户主动取消与进程异常中断，影响 daemon 重启后恢复语义 | ⭐4 评论，长期未关闭 |
| 9 | [#13392](https://github.com/QwenLM/qwen-code/issues/13392) | Desktop/ACP 0.24.7 忽略扩展 `PreToolUse` hook 的 `updatedInput`，#12922 的回归 | ⭐4 评论，OPEN |
| 10 | [#13413](https://github.com/QwenLM/qwen-code/issues/13413) ⚠️ P1 | 托管 Session Store 瞬时不可达会让 Harness **永久停止**写入，Turn 永远无法完成/取消 | ⭐3 评论，OPEN |

**为什么这些重要**：P1 级别的三个 Issue（`#13333`、`#6710`、`#13413`）都直接威胁 **Managed Agent 多会话并发模型** 的可用性；`#13415` 和 `#10692` 则暴露模型集成层和协议解析层的"非显然默认"风险，社区应优先关注。

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 功能/修复摘要 |
|---|---|---|
| 1 | [#13421](https://github.com/QwenLM/qwen-code/pull/13421) | 让 `getContextLengthExceeded` 识别 llama.cpp 服务在 prompt 超限时返回的特定文案，触发响应式压缩路径 |
| 2 | [#13427](https://github.com/QwenLM/qwen-code/pull/13427) | 修复 `/hooks` 对话框 E2E 测试的硬编码超时抖动，主分支 Linux Docker 沙箱可恢复绿 |
| 3 | [#13361](https://github.com/QwenLM/qwen-code/pull/13361) | 加固并诊断 Hosted 冷加载拒绝门，针对 `#13255` 7 次 CI 失败 |
| 4 | [#13033](https://github.com/QwenLM/qwen-code/pull/13033) | **默认延迟加载** Agent/Goal 协调工具（`agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal`），无需 `tools.eager` 即可发现 |
| 5 | [#13210](https://github.com/QwenLM/qwen-code/pull/13210) | 给 Managed Agent Runtime Broker 加上认证 + Broker 颁发的写入凭据，含中英设计文档 |
| 6 | [#13265](https://github.com/QwenLM/qwen-code/pull/13265) | H3 后台 Shell 与 Monitor 运行时（Managed 路径），先有设计文档后有代码 |
| 7 | [#13400](https://github.com/QwenLM/qwen-code/pull/13400) | Hosted 审批输入预览（bounded 8192 UTF-8 字节 + 完整长度 + 截断标志），Java 读取器阶段 |
| 8 | [#13419](https://github.com/QwenLM/qwen-code/pull/13419) | Hosted Store 代理停止中转 hop-by-hop 头（`Connection`/`Keep-Alive`/`Transfer-Encoding` 等） |
| 9 | [#13289](https://github.com/QwenLM/qwen-code/pull/13289) | **实验性 Kubernetes CSI Runtime + 持久化 Worker ACK**，扩展私有 K8s 运行时到 CSI 支持的 Workspace 校验路径 |
| 10 | [#13354](https://github.com/QwenLM/qwen-code/pull/13354) | 可靠的 ACTIVE Workspace 删除（L3）：ACTIVE 关闭只跑 SessionEnd 并保留数据，ACTIVE 删除依次提交 SessionEnd→SessionDelete 并校验 |

**修复主线**：Hosted Harness 冷加载、Session Store 写入、Broker 认证——三者共同构成"Managed Agent 进入生产可用"的关键拼图。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **Managed Agent / 多 Agent 运行时** | `#13333` `#13300` `#13328` `#13395` `#13413` | 社区最大焦点；并发、Broker、托管会话生命周期、Kubernetes 部署齐头并进 |
| **Hosted Session / Store 可靠性** | `#13255` `#13424` `#13370` `#13413` `#13419` | CI 抖动 + 永久 wedge 揭示托管存储的事务/重试语义需系统性收敛 |
| **models.dev 目录规范化** | `#13414` `#13393` `#13209` → `#13299` | 从上下文/输出上限 → 输入模态 → 推理强度等级，统一目录来源 |
| **本地模型（llama.cpp / Qwen3.x）支持** | `#13415` → `#13421` | 上下文窗口识别、超限文案、压缩触发成为新一轮工作区 |
| **Web Shell / Desktop UX** | `#13396` `#12943` `#13392` `#13130` | 记忆面板、自适应导航栏、Hook 输入更新、信任恢复 |
| **Hooks / 权限 / 安全** | `#13412` `#13253` `#13392` | MCP 权限归属、toolSearchBridge 门控、PreToolUse 链路 |
| **文档/CLI 帮助文本** | `#13044` `#13083` `#13188` | "Critical-only"政策下积累的小修补正在集中清算 |

---

## 💬 开发者关注点

1. **CI 间歇性失败是头号痛点**  
   MySQL 8.4 / Java 21 通道的 `HostedWorkspaceToolTurnIT` 系列在 2026-10-02~05 连续触发：`#13255`、`#13370`、`#13424`、`#13386` 几乎都围绕同一集成测试。开发者反复呼吁用 witness test + 硬化而非简单重试（见 `#13361`、`#13401`、`#13419` 的应对）。

2. **"Critical-only"治理范式**  
   多条 PR/Issue（`#13083`/`#13188`、`#12692`/`#13344`/`#13348`、`#12302`/`#13311`）显示出团队在合并后用轮次化评审去拆解遗留建议，开发者需留意"自动接管（`autofix/takeover`）"与"自报告（`review/self-reported`）"标签对应的责任归属。

3. **本地模型"默认假设"的陷阱**  
   `#13415` 把"qwen-code 把 llama.cpp 误当作 1M 上下文"这一长期静默 bug 推到台面，反映出对 OpenAI 兼容端点的 probing 协议仍不完善。`#13421` 已给出修复但仅识别文案，**probe 机制本身仍待解决**。

4. **Kubernetes 多平台交付**  
   `#13395` 跟踪 K8s 工具运行时 + 跨平台门禁，`#13289` 提交 CSI runtime 与持久化 Worker ACK，意味着平台分布策略正从"可选"走向"实验特性"。

5. **Hook 输入更新链路回归**  
   `#13392` 报告 Desktop/ACP 0.24.7 不再尊重 `PreToolUse.updatedInput`，是 `#12922` 的回归；扩展作者群体对此非常敏感，因为这是宿主接管 MCP 传输参数的关键通道。

6. **托管会话写入的"瞬时永久化"风险**  
   `#13413` 描述的"瞬时 Store 不可达→永久 wedge"是 P1 级别，开发者应优先关注 Broker 端的退避与短路策略（与 `#13219` 的"为重试循环设置终态"形成闭环）。

---

> 📊 **日报小结**：Qwen Code 社区今日处于"基建收敛"窗口期——Managed Agent Runtime 从"能跑"走向"扛得住"，CI 与 SDK 稳定性是最大悬念；本地模型、models.dev 目录、Kubernetes 平台化构成下一阶段三个增量方向。

*数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) · 统计窗口：2026-10-04 ~ 2026-10-05*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 | 2026-10-05

> 数据来源:`github.com/Hmbown/DeepSeek-TUI`(注:原始 Issue/PR 链接指向 `codewhale-hq/Codewhale` 仓库,本报告基于实际数据内容生成)

---

## 1. 今日速览

过去 24 小时最显著的趋势是 **Hmbown 本人密集提交 5 条 Engine 持久化相关 Issue**(#6836–#6840),系统性地勾勒出"进程重启后恢复已接受工作流"的设计蓝图。同时,Windows 下 Python UTF-8 中文输出乱码修复(#6834)和 TUI 帮助摘要的 12 语言同步(#6833)均已合并,而 0.10.1 集成 PR(#6815)尚处于评审中,等待社区反馈。

---

## 2. 版本发布

无新 Release。

---

## 3. 社区热点 Issues

### 🔥 引擎持久化与崩溃恢复(Hmbown 主线,5 条)

| # | 标题 | 关键点 |
|---|------|--------|
| [#6836](https://github.com/codewhale-hq/Codewhale/issues/6836) | Engine durability: resume accepted work across process restart | 进程重启后应能恢复已接受的 turn,复用已完成工作 |
| [#6837](https://github.com/codewhale-hq/Codewhale/issues/6837) | Engine: commit execution checkpoints atomically with transcript and results | 检查点需与 transcript、results 原子提交 |
| [#6838](https://github.com/codewhale-hq/Codewhale/issues/6838) | Engine: recover model and tool steps from durable intents and results | 从持久化意图重建模型与工具步骤 |
| [#6839](https://github.com/codewhale-hq/Codewhale/issues/6839) | Engine: persist human waits and continuation deadlines | 持久化"等待审批/输入/动态工具"状态与重启策略 |
| [#6840](https://github.com/codewhale-hq/Codewhale/issues/6840) | Engine: persist child completion delivery and owner acknowledgment | 子任务完成回执的持久化 |

**重要性**:这 5 条构成完整的 Engine durability 设计提案,引用同一审计 commit(`3a78899…f386`),目标是让 Codewhale 在进程崩溃后能恢复到一致状态,而非回到 unknown。是当前最优先的方向。

### 📦 会话与内存管理

- **[#6842](https://github.com/codewhale-hq/Codewhale/issues/6842)** — Session journal has no bound:压缩操作丢弃当前活跃消息,但保留每一份被替换的版本,导致 RAM 持续膨胀。社区用户 `7jrxt42BxFZo4iAnN4CX` 提交,反映长期会话场景的真实痛点。
- **[#6721](https://github.com/codewhale-hq/Codewhale/issues/6721)** — Emergency compaction 对 `save session` 任务的影响:`ronohara` 反馈"save session"命令在执行中被压缩打断,提出改进思路。这是关于可靠性而非 bug 的 FYI。

### 🔐 安全与文档一致性

- **[#5637](https://github.com/codewhale-hq/Codewhale/issues/5637)** — Design: scope MCP secret providers to the owning runtime。`h3c-hexin` 提出:在多线程环境中通过修改 `process env` 注入 MCP 凭证不安全,应限定到所属 runtime。评论 3 条,有讨论热度。
- **[#6841](https://github.com/codewhale-hq/Codewhale/issues/6841)** — Code Mode: retain permitted composition in child catalogs and reconcile documentation。Code Mode 默认开启后,子代理目录中的"允许组合"配置与文档不一致。

### 🚀 分发与安装

- **[#6303](https://github.com/codewhale-hq/Codewhale/issues/6303)** — One easy install from all three doors:统一网站 Mac App、Marketplace 插件、GitHub 仓库三条安装路径的差异。

---

## 4. 重要 PR 进展

| # | 状态 | 标题 | 价值 |
|---|---|---|---|
| [#6815](https://github.com/codewhale-hq/Codewhale/pull/6815) | 🟡 OPEN | 0.10.1 integration: Engine convergence, reviewed TypeScript mods and Ratatui UX | 里程碑 PR,统一 Rust Engine 收敛、TypeScript 改造复用、Ratatui UX |
| [#6835](https://github.com/codewhale-hq/Codewhale/pull/6835) | ✅ CLOSED | docs(web): add the community VS Code GUI to where you can use Codewhale | 网站"在哪些地方可用"补充社区 VS Code GUI(`gaord`) |
| [#6833](https://github.com/codewhale-hq/Codewhale/pull/6833) | ✅ CLOSED | fix(tui): bring the help summaries in twelve packs up to date with English | TUI `/help` 14 条英文摘要压缩到一行,zh-Hans/zh-Hant 等 12 语言同步(`Lstarsky0`) |
| [#6834](https://github.com/codewhale-hq/Codewhale/pull/6834) | ✅ CLOSED | fix(tui): preserve UTF-8 Python output on Windows | Windows 下 `code_execution` 启动 Python 子进程时设置 `PYTHONIOENCODING=utf-8`,修复中文乱码(`Guan0923`) |
| [#6832](https://github.com/codewhale-hq/Codewhale/pull/6832) | 🟡 OPEN | refactor(commands): adopt portable config policy and status shapes (FEAT-027) | 重构 `/permissions` 与 `/status` 使用共享 command Shape,提升可移植性(`aboimpinto`) |

---

## 5. 功能需求趋势

从今日所有 Issue 提炼,社区关注度排序如下:

1. **🥇 Engine 持久化与崩溃恢复**(5 条 Hmbown 本人提交,占今日 Issue 50%)— 当前最核心主线
2. **🥈 会话内存治理**— journal 无界增长、压缩对用户命令的影响
4. **🥉 MCP 安全模型**— 凭证作用域、进程全局环境变量的隐患
5. **Code Mode 跨目录一致性**— 子代理目录中允许组合配置的文档与实现对齐
6. **多渠道安装体验统一**— 网站/Marketplace/GitHub 三端差异
7. **Windows 与多语言兼容性**— UTF-8 编码、帮助摘要多语言同步

---

## 6. 开发者关注点

- **可靠性焦虑**:多个 Issue 围绕"已接受但未完成"的 turn 在异常情况下的命运,反映开发者对长任务稳定性的担忧。
- **内存膨胀**:Session journal 保留全部历史版本是真实工程问题,需要显式的绑定(bound)机制。
- **跨平台体验**:Windows 中文用户乱码、12 语言帮助摘要滞后 — 都是社区直接报告的痛点,均已在本日修复。
- **API 与文档一致性**:Code Mode 在父/子目录中的配置差异需文档跟进,否则用户行为不可预期。
- **生态边界**:社区 GUI 与官方扩展在文档中需明确区分,避免用户混淆。

---

*报告生成时间:2026-10-05 | 数据窗口:过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*