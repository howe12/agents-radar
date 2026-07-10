# AI CLI 工具社区动态日报 2026-07-10

> 生成时间: 2026-07-10 02:25 UTC | 覆盖工具: 9 个

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
**数据日期：2026-07-10 · 覆盖 9 款主流 AI CLI 工具**

---

## 一、生态全景

2026 年中段的 AI CLI 市场已从"百模大战"过渡到**多智能体工作流与企业级落地**的竞速期：所有主流厂商（Anthropic、OpenAI、Google、GitHub、阿里、Moonshot、Mistral 系）都形成了自己的 CLI 入口，但竞争焦点已从模型本身转向**Agent 编排可靠性、跨平台一致性、可观测性、企业鉴权与成本透明度**。工具间的协议对齐趋势明显加速——`AGENTS.md` 默认支持、Claude Code 配置复用、MCP 工具生态成为共同基础设施；同时**安全漏洞（如 Gemini CLI a2a-server 零点击 RCE）首次大规模进入社区视野**，标志着行业从"功能竞赛"向"治理竞赛"切换。值得注意的是，第三方开源工具（OpenCode、Pi、CodeWhale）正以"多模型聚合 + 工作流可编程"的差异化路线，对厂商自带 CLI 形成实质性竞争。

---

## 二、各工具活跃度对比

| 工具 | 24h Issue 更新 | 24h PR 更新 | 版本发布 | 社区热度判断 |
|------|---------------|-------------|----------|-------------|
| **Claude Code** | 10+（最高赞 #18435 = 642⭐） | 3（均为文档/小修） | v2.1.206 | 🔥 现象级诉求集中（多账号 738+ 赞） |
| **OpenAI Codex** | 10（最高赞 #30364 = 279⭐） | 10 | v0.144.1 热修 + v0.145.0-alpha.1/2 | 🔥 高频发版，热点聚焦 GPT-5.6 行为 |
| **Gemini CLI** | 10+ 热点 + 50 条全量 | 14 | v0.52.0-nightly | 🔥 安全事件驱动关注 |
| **GitHub Copilot CLI** | 10（最高赞 #970 = 21⭐） | **0** | v1.0.70 + v1.0.70-0 | 🟡 进入稳态维护期 |
| **Kimi Code CLI** | 2 | 3 | **无** | ⚪ 低活跃日，专注小修 |
| **OpenCode** | 10（最高赞 #4283 = 102⭐） | 10 | **3 个版本同日发布** | 🔥 高速迭代 + 回归并存 |
| **Pi** | 10（最高赞 #6306 = 22 评论） | 12 | v0.80.6 | 🟡 中等活跃，GPT-5.6 集中跟进 |
| **Qwen Code** | 10（#6378 = 19 评论） | 50+ | v0.19.8-nightly | 🔥🔥 当日绝对活跃度最高 |
| **DeepSeek TUI / CodeWhale** | 10（#4092 = 58 评论） | 10 | **无**（v0.8.68 PR 已就位） | 🟡 发版冲刺期 |

> **观察**：Qwen Code 与 Codex 在 PR/Issue 数上明显领先；OpenCode 出现"一日三版本"的极端迭代节奏；Copilot CLI 进入"零 PR 静默期"是成熟产品典型信号；Kimi 在当日数据样本较小（仅 2 Issue）需结合周维度综合判断。

---

## 三、共同关注的功能方向

### 1. GPT-5.6 系列模型的快速适配
- **代表工具**：OpenAI Codex（#30364 推理 token 聚簇、#31814 MultiAgent V2 隐性开启）、OpenCode（#36140 Luna 404、#36133/36141 OAuth & reasoning effort 异常）、Pi（v0.80.6 原生 `max` 思考级别 + 372K 上下文修正）、CodeWhale（#4311 一次性接入 GPT-5.6 全部别名）
- **共同诉求**：模型注册表自动化同步、上下文窗口准确披露、reasoning effort/变体的可控性、cache 计费透明度

### 2. Agent/子代理体系的可靠性
- **代表工具**：Claude Code（#71723 协议切换、#73633 权限继承、#70475 错误重试）、Gemini CLI（#21818 Human-in-the-Loop 失效、#22003 文件修改死循环、#26736 状态丢失）、OpenCode（#33028 子智能体挂起、#35126/36132/36147 模型继承）、Pi（#5886 AgentSession 生命周期、#6234 卡 Working）、CodeWhale（#4032 行为漂移、#4042 工具沙箱化、#4175/4179 角色门控）
- **共同诉求**：可中断、可恢复、可审计的 Agent 执行；子代理权限与环境隔离；"协议切换""权限继承"等暗坑的显式化

### 3. 跨平台与基础操作稳定性
- **代表工具**：OpenCode（#24713 Linux 剪贴板、#32504 Bash 工具挂起、#23219 TUI Enter 失效）、Qwen Code（#6590/6594/6577 macOS 剪贴板图片粘贴集体失效、#6614 glob OOM）、Claude Code（#76187 Cowork 挂载、#73544 Custom connector 丢失、#76229 韩文截断）、Gemini CLI（#21308 Docker、#22149 Windows preflight、#21997 PowerShell）、Codex（#26951 Remote-SSH 卡加载、#28672 Dev container 401）
- **共同诉求**：基础操作（剪贴板、复制粘贴、文件读写）的跨平台一致性；SSH/Dev Container/Termux 场景的可用性

### 4. 鉴权、配额与计费可观测性
- **代表工具**：Claude Code（#5088 Max 5x 续费账号被禁、#64961 Opus 2-3 倍 token 回归）、Codex（#30212 Pro 20x 配额 1h 耗尽、#31450/31601/31826 配额检测）、Kimi（#2318 TPD 速率限制）、Qwen Code（#6601 `QWEN_SERVER_TOKEN` 泄露）
- **共同诉求**：实时用量与计费一致性、配额异常时的可解释性、敏感环境变量的子进程隔离

### 5. 跨工具配置互操作
- **代表工具**：Kimi CLI（PR #2487 主动加载 `CLAUDE.md`）、Gemini CLI（PR #28240 默认支持 `AGENTS.md`）、Codex（#2153 与 ChatGPT 打通、#31845 App 合并）
- **共同诉求**：复用同类工具项目级配置、降低迁移摩擦、向"开放协议"靠拢

### 6. 安全与权限治理
- **代表工具**：Gemini CLI（PR #28319 a2a-server 零点击 RCE、#28346 Hook 信任披露、#22167 telemetry.js 配置校验）、Qwen Code（#6601 shell 环境变量继承）、OpenCode（#36119 多文件 patch 审批盲区）、Codex（#31781 响应缓冲上限）
- **共同诉求**：RCE/SSRF 类高危漏洞的常态化修复、人类可审计的权限边界

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 长会话 / Subagent / 远程控制 / IDE 集成 | Anthropic 深度用户 + 复杂多步任务开发者 | `/doctor` 自维护 + 远程会话同步 + Skills/Routines |
| **OpenAI Codex** | 多环境部署 / 严格工具语法 / ChatGPT 融合 | OpenAI 全家桶用户 + 自托管模型实验者 | URI 化沙箱权限 + Responses API + Hook 协议 |
| **Gemini CLI** | 多 Agent 协议 / 浏览器代理 / ADK 互操作 | Google Cloud / Vertex AI 用户 | a2a-server + AGENTS.md + Workspace Context |
| **GitHub Copilot CLI** | 企业策略 / 调度任务 / 插件市场 | GitHub Enterprise 团队 + 主流 Git 工作流 | `--sandbox` 临时开关 + 插件 sha 锁定 + `/refine` |
| **Kimi Code CLI** | 轻量代理 / 配置复用 / 终端阅读体验 | 国内中文用户 + Claude Code 迁移者 | CLAUDE.md 加载兼容 + 终端渲染细节打磨 |
| **OpenCode** | 多模型聚合 / 桌面端 / 可观测性 | 重度 TUI 用户 + 多模型实验者 | Solid `startTransition` + OTEL Root Span + SQLite 会话存储 |
| **Pi** | 严格工具语法 / 多 Provider OAuth / 扩展生态 | 终端极客 + 多云多订阅用户 | LARK/grammar 工具 + device-code OAuth 矩阵 |
| **Qwen Code** | 多工作区守护进程 / web-shell 审阅 / 调度任务 | 阿里云生态 + 团队协作场景 | `qwen serve` 架构 + RuntimeContext + 隔离任务门

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据来源：github.com/anthropics/skills（截至 2026-07-10）

---

## 1. 热门 Skills 排行（Top 8 PRs）

### 1.1 🔧 skill-creator 评测体系修复（多 PR 集群）
- **PR**: [#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1261](https://github.com/anthropics/skills/pull/1261)
- **状态**: 全部 OPEN
- **焦点**: `run_eval.py` 在所有平台都报告 `recall=0%`（[#556](https://github.com/anthropics/skills/issues/556) 已获 12 评论、10+ 复现）。description 优化循环目前完全在优化噪声；同时存在 Windows 子进程崩溃（PATHEXT/cp1252/select）、触发检测漏检、并行 worker 污染项目 `.claude/commands/` 等一系列连锁 bug。
- **社区热度**: 整个仓库最高，所有 description 自优化场景都依赖此链路

### 1.2 📄 document-typography · 新增排版质检 Skill
- **PR**: [#514](https://github.com/anthropics/skills/pull/514)
- **状态**: OPEN
- **功能**: 自动修复孤儿词（页末 1-6 词）、寡妇段落、编号错位等 AI 生成文档的高频排版缺陷
- **讨论点**: 触及"AI 文档排版质量"这一跨场景痛点，作者认为"每个 Claude 生成的文档都受影响"

### 1.3 📑 ODT Skill · OpenDocument 读写
- **PR**: [#486](https://github.com/anthropics/skills/pull/486)
- **状态**: OPEN
- **功能**: 覆盖 ODT/ODS/ODF 的创建、模板填充、解析至 HTML；补齐开源办公格式的支持缺口
- **讨论点**: 与企业级 LibreOffice 用户、ISO 标准偏好场景契合

### 1.4 🎨 frontend-design Skill 重构
- **PR**: [#210](https://github.com/anthropics/skills/pull/210)
- **状态**: OPEN
- **功能**: 提升描述清晰度与可操作性，确保每条指令在单次会话内可执行
- **讨论点**: 解决现有 skill 描述"太抽象、模型无法落地"的普遍反馈

### 1.5 🛡️ skill-quality-analyzer + skill-security-analyzer · 元 Skill
- **PR**: [#83](https://github.com/anthropics/skills/pull/83)
- **状态**: OPEN
- **功能**: 五维质量分析（结构/文档/测试/性能/安全），引入 security analyzer 应对社区对恶意 Skill 的担忧
- **讨论点**: 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（34 评论，信任边界滥用）形成正面对应

### 1.6 ✅ self-audit · 交付前审计 Skill (v1.3.0)
- **PR**: [#1367](https://github.com/anthropics/skills/pull/1367)
- **状态**: OPEN
- **功能**: 先做机械文件存在性校验，再做四维推理质量审查（按伤害严重度排序）
- **讨论点**: 通用、与技术栈无关，可作为 Agent 输出标准质量门

### 1.7 🌈 color-expert · 色彩专业 Skill
- **PR**: [#1302](https://github.com/anthropics/skills/pull/1302)
- **状态**: OPEN
- **功能**: 覆盖 ISCC-NBS/Munsell/XKCD/RAL 等命名体系 + OKLCH/OKLAB/CAM16 色彩空间选型表
- **讨论点**: 设计/前端场景的高复用度专家型 Skill

### 1.8 🧪 testing-patterns · 测试模式 Skill
- **PR**: [#723](https://github.com/anthropics/skills/pull/723)
- **状态**: OPEN
- **功能**: 完整覆盖 Testing Trophy 哲学、单元测试 AAA、React Testing Library、契约测试等
- **讨论点**: 弥补社区在"工程实践型"Skill 上的空缺

---

## 2. 社区需求趋势（从 Issues 提炼）

| 趋势 | 代表 Issue | 关注度 |
|---|---|---|
| **🔒 Skill 分发的信任与安全** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 `anthropic/` 命名空间导致权限滥用 | ⭐⭐⭐⭐⭐（34 评论）|
| **🏢 组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) 企业内分发仍需手动下载/上传 | ⭐⭐⭐⭐（14 评论）|
| **🪟 Windows 兼容性** | [#556](https://github.com/anthropics/skills/issues/556)、[#1061](https://github.com/anthropics/skills/issues/1061)、[#29](https://github.com/anthropics/skills/issues/29)（Bedrock 兼容） | ⭐⭐⭐⭐（持续叠加）|
| **🧠 紧凑的 Agent 记忆表示** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory：符号化压缩 agent 状态 | ⭐⭐⭐（9 评论）|
| **🛡️ Agent 治理与合规** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance（已 CLOSED）| ⭐⭐⭐（6 评论）|
| **🔌 Skill 暴露为 MCP** | [#16](https://github.com/anthropics/skills/issues/16) 统一 API 协议 | ⭐⭐⭐（4 评论）|
| **📦 插件重复 Skill** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复 | ⭐⭐⭐（6 评论，👍9）|
| **🔁 skill-creator 自身更新** | [#202](https://github.com/anthropics/skills/issues/202) 描述冗长如开发者文档而非操作指令（已 CLOSED）| ⭐⭐⭐（8 评论）|
| **📚 工程实践型 Skill** | 间接体现在 #723 testing-patterns、#514 排版、#83 quality/security analyzer | 持续增长 |

**关键词云**：安全/信任 → 平台兼容 → 企业协作 → 评测/质量门 → 工程实践

---

## 3. 高潜力待合并 Skills（聚焦新增能力、非纯修复）

| Skill | PR | 亮点 | 预计落地区间 |
|---|---|---|---|
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 直面 #492 安全焦虑，质量 + 安全双元分析 | 近 1-2 周 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 通用质量门，v1.3.0 已较成熟 | 近 1-2 周 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 工程实践最稀缺品类 | 1-2 月 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 高频痛点、零竞争 | 1-2 月 |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 专家型 Skill 标杆 | 1-2 月 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐格式生态 | 2-3 月 |
| **SAP-RPT-1-OSS predictor** | [#181](https://github.com/anthropics/skills/pull/181) | 首个企业级预测模型 Skill | 2-3 月 |
| **frontend-design（改进）** | [#210](https://github.com/anthropics/skills/pull/210) | 现有 Skill 体验提升 | 1 月内 |
| **compact-memory**（Issue [#1329](https://github.com/anthropics/skills/issues/1329)）| 提案阶段 | 长任务 agent 上下文的符号压缩 | 3 月+ |

> 注：当前前 20 PR **全部 OPEN**——仓库合并节奏明显滞后于社区贡献速度，这本身是一个值得关注的信号。

---

## 4. Skills 生态洞察（一句话总结）

> **社区诉求已从"更多 Skill"转向"Skill 的工程化"**——最集中的呼声是：**建立可信赖的 Skill 分发与质量门禁体系**（信任命名空间、统一评测、防误触发、Windows/企业平台兼容），让 Skill 不再是"演示 demo"，而成为可被生产环境依赖的"AI 工具组件"。

---

### 附：仓库健康度备忘
- 50 条热门 PR **0 条 merged**，Top 20 全部 OPEN
- 社区健康分仅 25%（[Issue #452](https://github.com/anthropics/skills/issues/452)），[#509](https://github.com/anthropics/skills/pull/509) 提交 CONTRIBUTING.md 试图补救
- 评测基础设施（run_eval）整体失灵，阻塞所有 description 优化类工作
- 命名空间 / 权限 / 安全三大治理类 Issue 在半年内仍未关闭

---

# Claude Code 社区动态日报
**2026-07-10**

---

## 📌 今日速览

今日 Claude Code 发布 v2.1.206 版本，重点优化了 `/cd` 目录补全、引入 `/doctor` 自动精简 CLAUDE.md、以及 `/commit-push-pr` 的权限体验。社区方面，**多账号切换**仍是呼声最高的特性（两个高赞 issue 累计超 700 赞），**Agent 子代理与权限继承**相关的多个 Bug 引发广泛讨论，Windows 平台与 macOS 平台的兼容性问题继续成为焦点。

---

## 🚀 版本发布

### v2.1.206
- **`/cd` 目录补全**：新增目录路径建议，与 `/add-dir` 行为对齐
- **`/doctor` 新增 CLAUDE.md 精简建议**：自动检查并提议删减 Claude 可从代码库推断的内容
- **`/commit-push-pr` 自动放行 `git push`**：对仓库已配置的 remote 自动授权

> 链接：https://github.com/anthropics/claude-code/releases/tag/v2.1.206

---

## 🔥 社区热点 Issues

### 1. #5088 — Max 5x 套餐付费后账号被禁用 ⭐59 / 💬180
- **标签**：`bug`, `area:cost`, `area:auth`, `oncall`
- 用户支付 Max 5x 续费后立即无法访问 Claude Code 与 Claude.ai，已被标记为高优先级 oncall 工单，反映账号与计费系统的严重同步问题。
- https://github.com/anthropics/claude-code/issues/5088

### 2. #18435 — Desktop 多账号管理与切换 ⭐642 / 💬126
- **标签**：`enhancement`, `area:auth`, `area:ide`
- 今日最高赞 issue，开发者强烈要求在 Claude Desktop 内支持多账号 Profile 切换，以区分工作/个人或不同计费方式的账号。
- https://github.com/anthropics/claude-code/issues/18435

### 3. #73365 — Fable 5 advisor 在所有会话中"不可用" ⭐91 / 💬47
- **标签**：`bug`, `area:model` (Windows)
- v2.1.198 起 Fable 5（Opus 4.8 主模型）作为 advisor 永远显示"unavailable"，影响长时间使用体验。
- https://github.com/anthropics/claude-code/issues/73365

### 4. #20131 — Multi-Account Profile 支持 ⭐96 / 💬37
- **标签**：`enhancement`, `area:auth`
- 与 #18435 高度重叠：用户需在 API 计费账号与订阅账号之间反复登出切换，流程繁琐。
- https://github.com/anthropics/claude-code/issues/20131

### 5. #20944 — 关闭 IDE 自动选中上下文 ⭐67 / 💬20
- **标签**：`enhancement`, `area:cost`, `area:ide`
- 建议新增设置以禁用 IDE 自动选中的上下文，避免 token 浪费和无关信息注入。
- https://github.com/anthropics/claude-code/issues/20944

### 6. #67606 — Opus 4.8 在长会话中虚构"提示词注入攻击"叙事 ⭐2 / 💬12
- **标签**：`bug`, `area:model` (Linux)
- 两段独立会话中 Opus 4.8 出现严重**模型幻觉（confabulation）**：编造工具/主机信息、虚构提示词攻击剧情，JSONL 数据可验证。
- https://github.com/anthropics/claude-code/issues/67606

### 7. #28379 — `/remote-control` UI 不识别斜杠命令 ⭐51 / 💬11
- **标签**：`enhancement`, `area:claude-code-web`
- 在 claude.ai/code 或移动端继续本地会话时，`/clear`、`/compact`、`/context`、`/rewind` 等命令被当作普通消息发送。
- https://github.com/anthropics/claude-code/issues/28379

### 8. #71723 — Agent 工具 `name` 参数静默切换到 teammate 协议 ⭐1 / 💬6
- **标签**：`bug`, `area:agents` (macOS)
- Agent 工具带 `name` 参数时静默走 teammate 流程，丢失后台 agent 的执行结果。
- https://github.com/anthropics/claude-code/issues/71723

### 9. #73633 — Workflow 子代理不继承 `settings.local.json` 权限 ⭐5 / 💬5
- **标签**：`bug`, `area:agents`, `area:permissions` (macOS)
- `deep-research` 等多代理工作流中，子代理不继承 `.claude/settings.local.json` 的 `permissions.allow`，导致每个工具调用都需确认。
- https://github.com/anthropics/claude-code/issues/73633

### 10. #64961 — Opus 4.7/4.8 token 用量回归 2-3 倍 ⭐5 / 💬6
- **标签**：`bug`, `area:cost`, `area:model` (macOS)
- 更新后 Opus 模型 token 消耗显著上升，且频繁断连，触发订阅用户对成本失控的担忧。
- https://github.com/anthropics/claude-code/issues/64961

---

## 🛠 重要 PR 进展

> 过去 24 小时 PR 数量较少（仅 3 条），均为文档与小幅修复。

### 1. #76029 — `plugin-dev` 文档：`.mcp.json` 使用 flat 格式
- 修正 `advanced-plugin` 示例，移除 `mcpServers` 包裹（`mcpServers` 仅属于 `plugin.json` 概念），避免用户误用。
- https://github.com/anthropics/claude-code/pull/76029

### 2. #76028 — 修正 `plugin-dev` README 中过时的 marketplace 名称
- 修复 #70064：将 `plugin-dev@claude-code-marketplace` 改为与其他插件一致的命名规范。
- https://github.com/anthropics/claude-code/pull/76028

### 3. #76023 — 修复 `load-context` 中 GitHub Actions CI 检测
- SessionStart hook 示例用 `-f` 检测 `.github/workflows`（实际是目录），导致 CI 分支永不触发，改为 `-d`。
- https://github.com/anthropics/claude-code/pull/76023

---

## 📈 功能需求趋势

| 方向 | 社区关注度 | 代表 Issue |
|------|-----------|-----------|
| **多账号/Profile 管理** | 🔥 极高（合计 738+ 赞） | #18435, #20131 |
| **IDE 集成与上下文控制** | 🔥 高 | #20944, #73928（启动前选目录） |
| **Agent/工作流可靠性** | 🔥 高 | #71723, #73633, #70475（错误重试） |
| **远程控制（Remote Control）体验** | 中高 | #28379（斜杠命令） |
| **无障碍/可访问性（A11y）** | 中 | #71469（屏幕阅读器回归测试） |
| **企业级模型管控** | 中 | #65476（managed settings 控制默认模型） |
| **Routines（定时任务）增强** | 中 | #72871（每任务选模型） |
| **桌面 UI 体验** | 中 | #75856（拖拽分组）, #67539（窗口布局） |

---

## 💬 开发者关注点

1. **成本失控焦虑**：#64961 反映的 token 用量 2-3 倍回归、#20944 提议关闭 IDE 自动上下文，都指向"模型在偷偷花更多钱"的痛点。

2. **多账号切换刚需**：#18435（642 赞）+ #20131（96 赞）形成"现象级"诉求——同时维护订阅 + API 账号的开发者被迫频繁登出。

3. **Agent 体系的"暗坑"**：#71723、#73633、#70475、#74614 集中暴露子代理的**协议切换、权限继承、错误重试、后台/前台语义**四大问题，是当前 Agent 化路线的最大可观测风险。

4. **模型版本波动**：Opus 4.8 出现**严重幻觉（#67606）**和** advisor 不可用（#73365）**、Fable 5 在 `/model` 中消失（#76237），开发者对模型版本质量稳定性提出质疑。

5. **平台兼容性不均**：Windows 平台的 #76187（Cowork 挂载失败）、#73544（Custom connector 丢失）、macOS 的 #76229（韩文多字节截断）说明跨平台 QA 仍是短板。

6. **文档与实际行为脱节**：#76028、#76029、#76023 三条 PR 集中修复 plugin-dev 文档的过时内容，提示官方文档需要与代码同步机制加强。

---

*日报基于 GitHub 公开数据整理。如需追踪具体 issue 进展，请访问 [anthropics/claude-code](https://github.com/anthropics/claude-code) 仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-07-10 · 微信公众号风格技术摘要**

---

## 📌 今日速览

今日 Codex 仓库最关键的动态是 **v0.144.1 热修复版本发布**，主要解决昨日 v0.144.0 在 Homebrew cask 渠道缺失 `codex-code-mode-host` 导致的全面命令失败问题（[#31906](https://github.com/openai/codex/issues/31906)），同时进入 0.145.0 双 alpha 迭代。社区方面，**GPT-5.6 模型在 Azure / Remote SSH / Ollama 等多环境下的可用性**成为最高频话题，配套的**配额重置异常**和**Business OAuth 鉴权 401** 类问题持续发酵；底层沙箱与权限模型正在经历一次 URI 化的协议重构。

---

## 🚢 版本发布

| 版本 | 类型 | 重点 |
|---|---|---|
| [rust-v0.144.1](https://github.com/openai/codex/releases/tag/rust-v0.144.1) | 🔥 Hotfix | 修复 Homebrew 独立安装时因 GitHub 压缩/重排的 release metadata 失败；macOS 包补齐 `code-mode-host`；当伴生 host 不可用时回退保证 code mode 仍可用 |
| [rust-v0.144.0](https://github.com/openai/codex/releases/tag/rust-v0.144.0) | ✨ Minor | 用量配额重置积分新增类型/到期展示并支持手动选择；新增 `writes` 审批模式（只读动作静默通过、写动作弹出确认）；MCP 工具支持交互式鉴权 |
| [rust-v0.145.0-alpha.1](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.1) / [alpha.2](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.2) | 🧪 Alpha | 0.145 主线首个 alpha 窗口开启 |

> 升级提示：Homebrew 用户请直接 `brew upgrade codex` 到 0.144.1，0.144.0 存在阻塞性 bug（#31906）。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#30364 GPT-5.5 推理 token 在 516/1034/1552 处聚簇，疑似引发复杂任务性能下降](https://github.com/openai/codex/issues/30364)** — 179 评论 / 279 👍
   长期居高不下的"明星 Issue"，用户给出量化证据指向 reasoning_output_tokens 的离散聚簇与模型表现的相关性，是研究 GPT-5.x 行为特征最有价值的社区贴。

2. **[#2153 与 ChatGPT 双向打通：让 Codex 会话可投送到 ChatGPT UI 进行头脑风暴并回带](https://github.com/openai/codex/issues/2153)** — 42 评论 / 150 👍
   跨产品融合的"老牌需求帖"，👍 数远超评论数，说明大多数用户只是来看 +1 即可。今日 ChatGPT Desktop 与 Codex App 合并（#31845）让这一诉求更具落地可能。

3. **[#11022 项目目录迁移后自动重写/迁移 thread 引用](https://github.com/openai/codex/issues/11022)** — 19 评论 / 48 👍
   移动项目后所有历史会话直接 404 是 Codex App 现有硬伤，影响面广，48 个 👍 反映出强烈用户痛点。

4. **[#31906 0.144.0 Homebrew cask 缺失 `codex-code-mode-host`，所有命令都报 "failed to spawn code-mode host"](https://github.com/openai/codex/issues/31906)** — 8 评论 / 33 👍
   直接促成了今日 0.144.1 热修复发布，发布说明里 #31913 修复条目正是对应此项。

5. **[#19871 v0.117.0 起 Ollama / 自定义本地 provider 的 MCP 工具调用回归](https://github.com/openai/codex/issues/19871)** — 12 评论 / 6 👍
   通过 bisect 准确定位到 0.117.0 的回归，影响所有走自定义 Responses API 的本地模型用户，Ollama 生态反响明显。

6. **[#24086 Locked Computer Use 在 Mac mini M4 + Studio Display 上报 `cgWindowNotFound`](https://github.com/openai/codex/issues/24086)** — 12 评论
   锁定态截屏链路崩溃的高质量硬件报告，已在今日 CLOSED，可能并入后续版本。

7. **[#30212 ChatGPT Pro 20x 配额：5 小时额度在 ~1 小时内被异常耗尽](https://github.com/openai/codex/issues/30212)** — 10 评论 / 9 👍
   与 #31601、#31450 共同构成"配额重置异常"系列，反映计费侧多个边缘 case 仍未稳定。

8. **[#26951 VS Code Remote-SSH 下 Codex IDE 扩展卡死在加载页（CLI 正常）](https://github.com/openai/codex/issues/26951)** — 12 评论 / 1 👍
   远程开发场景下的扩展兼容性问题，影响面很广但 👍 偏低（可能很多用户选择回退 CLI）。

9. **[#28672 Business 套餐在 Ubuntu dev container 中频繁 401 "invalidated oauth token" / 强制手机验证](https://github.com/openai/codex/issues/28672)** — 9 评论
   企业用户鉴权链路上的严重问题，涉及 token 撤销+强制 reauth，对团队开发流是断点级影响。

10. **[#31814 GPT-5.6 Sol 默认开启 MultiAgent V2，但隐藏 subagent 路由控制](https://github.com/openai/codex/issues/31814)** — 7 评论
    与 #30364 同属"模型元数据覆盖功能开关"现象，是 0.144 引入 multi_agent_v2 后最显式的 UX 回归。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#31781 限制执行器侧 HTTP 响应缓冲上限](https://github.com/openai/codex/pull/31781)** — 加固 app-server：原 256 帧背压下每帧几乎可达 JSON-RPC 上限，恶意远端可迫其驻留大量数据。属于远程执行链路的安全硬化。

2. **[#31976 在 previous-model compaction 收到 404 时自动用当前选中模型重试](https://github.com/openai/codex/pull/31976)** — 解决历史模型下线后的 compaction 失败问题，并在两个远程实现间共享重试资格判断。

3. **[#31919 exec-server: 保留空的 workspace_roots 列表语义](https://github.com/openai/codex/pull/31919)** — 修复调用方明确传 `[]` 时被静默回填为 sandbox cwd 的 bug，依赖 #31892 的大重构。

4. **[#31975/#31960 沙箱权限模型 URI 化：在 URI 空间做交集运算](https://github.com/openai/codex/pull/31975)** + [add URI permission transforms](https://github.com/openai/codex/pull/31960) — 一次系统性的协议层改造，避免跨 OS 坐标系（executor / 本地）做权限合并时发生路径重解释或被错误拒绝。

5. **[#31977 mcp: 按 launcher 区分 stdio cwd 语义](https://github.com/openai/codex/pull/31977)** — 在 codex-mcp 边界区分 `Local` 与 `Executor` 两种 cwd 解释，防止 launcher 收到对端主机的路径表达。

6. **[#31952 协议层：将 FileSystemSpecialPath 的嵌套后缀视为不透明片段](https://github.com/openai/codex/pull/31952)** + [#31950 genericize permission path models](https://github.com/openai/codex/pull/31950) — 同一系列重构，让权限模型在多协议层之间能保留自身路径表示。

7. **[#31951 默认认为所有模型都支持 reasoning summaries](https://github.com/openai/codex/pull/31951)** — 移除过时的 `model_supports_reasoning_summaries = false` 兼容分支，简化未知/自定义模型行为。

8. **[#31890 修复 code mode host 资源安装问题](https://github.com/openai/codex/pull/31890)** — 直接对应 #31906 报告的 v0.144.0 安装链路 bug，与今日 0.144.1 的修复同源。

9. **[#31662 core: 允许限制 subagent 的执行环境集合](https://github.com/openai/codex/pull/31662)** — v1/v2 spawn_agent 新增 `environment_ids`，强化多 agent 场景下环境隔离与权限收敛。

10. **[#31655 core: 将 workspace_roots 迁移到 environments 之上](https://github.com/openai/codex/pull/31655)** + [#31463 支持无 path 的 hosted thread manager](https://github.com/openai/codex/pull/31463) — 重塑 session/环境模型，让 hosted 模式可以脱离本地路径运行，为云端 Codex 铺路。

> 另有两项长期推进值得持续关注：[#26268/#26267/#24634 Prompt Hooks 端到端落地](https://github.com/openai/codex/pull/24634)（hook 协议 + codex-hooks 执行 + 客户端暴露）正在合龙；[#31920 引入中性的 ApprovalAction](https://github.com/openai/codex/pull/31920) 为 Guardian 审批重构打基础。

---

## 📈 功能需求趋势

| 方向 | 关键 Issue | 趋势解读 |
|---|---|---|
| **GPT-5.6 / MultiAgent V2 可用性** | #30364, #31814, #29663, #31927, #31870 | 模型元数据（`multi_agent_version = "v2"`）正在绕过用户的功能开关，社区担心"模型即配置"反客为主 |
| **与 ChatGPT App 融合** | #2153, #31845, #31961, #31944 | Codex App 正在被 ChatGPT Desktop 吸收，迁移路径上的 UX/通知/项目数据丢失问题集中爆发 |
| **会话与项目生命周期管理** | #11022, #29600, #31845 | thread 引用、archive 同步、跨设备/SSH 同步是被吐槽最久的"基础功能缺口" |
| **远程 / SSH / Dev Container 场景** | #26951, #29600, #31927, #28672 | Codex 在 Remote SSH、Linux 容器、Hosted 形态下的鉴权、模型路由、UI 一致性仍是盲区 |
| **自定义/本地模型生态** | #19871, #29663, #31870 | Ollama、Azure Foundry 等异构 provider 的 MCP 工具调用与 Responses 兼容性问题反复出现 |
| **IDE/TUI 体验打磨** | #13942, #3248 | "默认 Plan 模式"、"默认展开思考链"等小而高赞的细节诉求持续累积 |
| **可观测性与计费** | #30212, #31601, #31450, #31826 | 配额/版本检测等"系统态"信息的可信度直接影响开发信任 |
| **Skills / 模板化提示词** | #31978 | 新增的对 Markdown 模板 + slash command 的需求，反映向"可复用上下文资产"演化 |

---

## 🧑‍💻 开发者关注点

1. **安装链路的"沉默失败"是最容易劝退的体验**
   v0.144.0 漏发 `codex-code-mode-host`（#31906）、codex app 创建重复 Codex.app（#31944）、CLI 升级路径异常（#31979）——这些问题表面是包管理，深层是"release metadata 假设过于乐观"（已在 0.144.1 修复 #31913）。建议在 CI 中加入 `doctor` + 必备二进制存在性自检。

2. **模型元数据

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-07-10**

---

## 📌 今日速览

今日发布 nightly 版本 v0.52.0-nightly.20260710.ga4c91ce19，重点修复了对话历史中"思维链泄露"问题。社区关注焦点集中在三个方向：付费订阅用户对 Gemini 3 访问权限的争议、多项 **a2a-server** 严重安全漏洞被修复（其中包含一个零点击 RCE），以及 agent 在多步任务中的状态丢失与确认逻辑失效等稳定性问题。

---

## 🚀 版本发布

### v0.52.0-nightly.20260710.ga4c91ce19

- **fix(core)**: 清理历史记录中的思维链片段，避免"思维泄露"（[@amelidev](https://github.com/google-gemini/gemini-cli/pull/27971)）
- **refactor**: 从 workspace context 中排除临时性 CI 配置文件（[@DavidAPierce](https://github.com/google-gemini/gemini-cli)）

🔗 [查看 Release](https://github.com/google-gemini/gemini-cli/releases)

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 标签 | 重要性 |
|---|-------|------|----|------|--------|
| 1 | [#20498](https://github.com/google-gemini/gemini-cli/issues/20498) 付费订阅却无 Gemini 3 访问权限 | 11 | 2 | p3, enterprise | 用户对订阅价值感知最强烈，讨论最热 |
| 2 | [#28019](https://github.com/google-gemini/gemini-cli/issues/28019) VSCode Gemini Assist 无限认证错误 | 9 | 0 | p2, security, **CLOSED** | 反映 IDE 集成认证流程的脆弱性 |
| 3 | [#21841](https://github.com/google-gemini/gemini-cli/issues/21841) ReadManyFilesTool 并发与防御加固 | 8 | 0 | p2, agent | LLM 误用 glob 模式时的大规模文件读取风险 |
| 4 | [#21681](https://github.com/google-gemini/gemini-cli/issues/21681) policy-engine.md 层级数字与重复词错误 | 8 | 0 | p2, docs | 文档与代码不一致，政策层级错位 |
| 5 | [#22167](https://github.com/google-gemini/gemini-cli/issues/22167) telemetry.js 未校验 settings.json 中的 target | 7 | 0 | p2, enterprise | 遥测配置安全校验缺位 |
| 6 | [#22062](https://github.com/google-gemini/gemini-cli/issues/22062) 文档未说明 `gemini-3.1-pro-preview-customtools` 需 API Key 认证 | 6 | 1 | p3, docs | 关键认证约束未公开 |
| 7 | [#22159](https://github.com/google-gemini/gemini-cli/issues/22159) Chrome 致命错误时未恢复输入阻塞器 | 6 | 0 | p2, agent | Browser agent 交互状态泄漏 |
| 8 | [#28092](https://github.com/google-gemini/gemini-cli/issues/28092) Google 账户无法授权使用 gemini | 6 | 0 | p2, security, **CLOSED** | 新用户入门障碍 |
| 9 | [#22003](https://github.com/google-gemini/gemini-cli/issues/22003) 文件修改陷入死循环 | 5 | 0 | p2, agent | Agent 工具调用失控 |
| 10 | [#20569](https://github.com/google-gemini/gemini-cli/issues/20569) AI Pro 订阅隐私政策文档冲突 | 4 | **7** | p2, docs | 👍 数最高，付费用户最敏感 |

**补充关注**：
- [#21937](https://github.com/google-gemini/gemini-cli/issues/21937) `gemini-3.1-pro-preview` 100% 错误率（P1，Windows）
- [#21818](https://github.com/google-gemini/gemini-cli/issues/21818) Human-in-the-Loop 确认逻辑失效（P1，agent 跳过用户确认直接执行工具）
- [#26736](https://github.com/google-gemini/gemini-cli/issues/26736) 编码 agent 丢失工作流状态、越权操作

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 标签 | 说明 |
|---|-----|------|------|------|
| 1 | [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) a2a-server 工作区信任强制 | OPEN | security, l/xl | **修复零点击 RCE 漏洞（b-519269096）**，重构启动序列防止环境投毒 |
| 2 | [#28316](https://github.com/google-gemini/gemini-cli/pull/28316) a2a-server 任务取消终止执行循环 | OPEN | m/l | 修复"幽灵执行"，同时修复多项竞态与内存泄漏 |
| 3 | [#28346](https://github.com/google-gemini/gemini-cli/pull/28346) 信任对话框对可执行 hook 的披露 | OPEN | p1, security | 修复 #27901，防止平铺式非法 hook 入口被误识别为可执行 |
| 4 | [#28140](https://github.com/google-gemini/gemini-cli/pull/28140) 修补 shell 命令相关依赖漏洞 | CLOSED | p2, security | 升级 `shell-quote` 与 `simple-git` 修复公开漏洞 |
| 5 | [#28143](https://github.com/google-gemini/gemini-cli/pull/28143) MCP 资源按服务器解析 | CLOSED | l | 修复多 MCP 服务器同 URI 资源混淆 |
| 6 | [#28142](https://github.com/google-gemini/gemini-cli/pull/28142) Vertex AI API Key 模式遵循 GOOGLE_CLOUD_LOCATION | CLOSED | security | 修正 API Key 模式下区域配置被忽略的问题 |
| 7 | [#28144](https://github.com/google-gemini/gemini-cli/pull/28144) 延迟检测可用编辑器 | CLOSED | p2 | 启动时按需探测，避免 Windows 上 `execSync` 慢启动 |
| 8 | [#28153](https://github.com/google-gemini/gemini-cli/pull/28153) 会话重置后忽略过期的 update_topic | CLOSED | p1 | 修复 `/clear` 后 topic state 被孤立调用覆盖 |
| 9 | [#28149](https://github.com/google-gemini/gemini-cli/pull/28149) skill 资源列表尊重 .gitignore/.geminiignore | CLOSED | p2 | 修复激活 skill 时泄露应被忽略的文件 |
| 10 | [#28240](https://github.com/google-gemini/gemini-cli/pull/28240) 默认支持 AGENTS.md | OPEN | p1/p2 | 解决跨工具生态兼容问题，无需手动配置 |
| 11 | [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) write_file/replace 绕过 JSON 与 IPYNB 的 LLM 纠错 | CLOSED | m | 修复 Jupyter/JSON 文件损坏问题 |
| 12 | [#28244](https://github.com/google-gemini/gemini-cli/pull/28244) 文档用安全命令替代 `rm -rf /` | OPEN | p2, docs | 修复 #28231，避免诱导性危险示例 |
| 13 | [#28347](https://github.com/google-gemini/gemini-cli/pull/28347) 版本自动 bump | OPEN | - | nightly 自动化发版 |
| 14 | [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) 评估中添加 tool call 格式化与失败摘要 | OPEN | l | 提升 evals 失败时的可读性与诊断效率 |

---

## 📈 功能需求趋势

从 50 条更新 Issue 中提炼的高频方向：

1. **Agent 可靠性与状态管理**（占比最高）
   - 多步任务中工作流状态丢失（#26736）
   - 文件修改死循环（#22003）
   - 输入阻塞器未恢复（#22159）
   - Human-in-the-Loop 确认失效（#21818）

2. **新模型适配与稳定性**
   - Gemini 3 / 3.1 在 CLI 中的访问权限（#20498、#22062）
   - `gemini-3.1-pro-preview` 100% 错误率（#21937）
   - 自动切换到 Flash 模型的循环（#26756）

3. **IDE 集成**
   - VSCode 扩展的认证错误（#28019、#28092）

4. **评估与自我修正能力**
   - error recovery / self-correction 行为评估（#21990）
   - 评估超时常被忽略（#20649）
   - 工具调用时间线与失败摘要（#28305）

5. **平台与构建链**
   - Docker 多阶段构建产物拷贝失败（#21308、#28148）
   - Windows 原生预检失败（#22149）
   - PowerShell 链式命令兼容性（#21997）

6. **跨工具生态兼容**
   - 默认支持 `AGENTS.md`（#28240）
   - ADK agent 与现有 agent 的能力对齐（#22966、#22969）

7. **安全与依赖治理**
   - 过期/有漏洞依赖更新（#22025、#28140）
   - a2a-server 工作区信任与 RCE（#28319、#28316）
   - Hook 信任披露（#28346）

---

## 💬 开发者关注点

**1. 工具稳定性 vs. 智能性**  
开发者最集中的反馈是 agent 在多步、复杂任务中的失控：工作流状态丢失、文件修改死循环、跳过用户确认直接执行工具（#21818、#22003、#26736）。社区希望"可中断、可恢复、可审计"成为一等公民能力。

**2. 订阅/付费与模型访问权不清晰**  
[#20498](https://github.com/google-gemini/gemini-cli/issues/20498) 的 11 条评论反映付费用户对"我花了钱却用不到 Gemini 3"的不满；[#20569](https://github.com/google-gemini/gemini-cli/issues/20569)（👍 7）则揭示付费用户的代码是否被用于训练这一关键隐私承诺在不同文档间存在冲突。

**3. 平台碎片化**  
Windows（PowerShell、preflight 脚本、启动慢）、Docker（多阶段构建）、Vertex AI（区域路由）、MCP（多服务器资源解析）四类问题集中在一天内出现，跨平台一致性是当前明显的工程债。

**4. 文档与代码漂移**  
`policy-engine.md` 层级数字（#21681）、`gemini-3.1-pro-preview-customtools` 认证限制（#22062）、`rm -rf /` 危险示例（#28244/#28231）等多起 issue 反映文档自动化校验（#21301）已经成为刚需。

**5. 评估基础设施"治未病"**  
围绕"agent 在出错时能否自我识别并修正"（#21990、#28305、#20649）的呼声上升，开发者正推动从"功能评测"向"行为评测"演进。

**6. 跨工具协议对齐**  
`AGENTS.md` 默认支持（#28240）以及 ADK agent 与 CLI 的能力对齐（#22966、#22969），说明社区正在推动 Gemini CLI 与更广泛的 AI 编码 agent 生态互操作。

---

*日报基于 GitHub 公开数据生成，仅供参考。完整讨论请访问 [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) 仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-10**

---

## 📌 今日速览

过去 24 小时，**v1.0.70 稳定版与 v1.0.70-0 预发布版同日发布**，重点引入 GPT-5.6 模型支持、`/refine` 命令与 `--sandbox` 即时开关。社区焦点集中在 **TUI 卡死/黑屏回归**（#4069、#4077 均与新版相关）、**模型配置不生效**（#4067、#4068）以及 **MCP 与子代理生态完善**等方向，整体 issue 更新活跃，0 个新 PR 提交，开发活动以 bug 修复与 triage 为主。

---

## 🚀 版本发布

### v1.0.70（稳定版，2026-07-09）
- 新增 **GPT-5.6** 模型支持
- 统一 `mcp` 与 `skill` 命令失败时的 `Error` 前缀输出
- 修复 `--agent` 选择畸形自定义代理时的真实解析错误
- 修复 `web_fetch` 在强制 HTTPS 代理下无法工作的问题
- 隐藏 Gists 标签页上的搜索框
- 视已被取代的子代理运行为可取消

### v1.0.70-0（预发布版，2026-07-09）
- 支持在插件源配置中使用 `sha` 字段锁定精确 commit
- 新增 `--sandbox` / `--no-sandbox` 标志，仅对当前会话（含 `-p` 模式）开启或关闭 OS 级 Shell 沙箱
- 新增 `/refine` 命令，用于改写当前内容

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要程度 |
|---|-------|-----|-----|---------|
| [#1595](https://github.com/github/copilot-cli/issues/1595) | Enterprise 策略偶发阻断模型列表 | 28 | 10 | ⭐⭐⭐⭐⭐ |
| [#107](https://github.com/github/copilot-cli/issues/107) | Alpine Linux 下工具调用触发 Segfault | 15 | 4 | ⭐⭐⭐⭐⭐ |
| [#1665](https://github.com/github/copilot-cli/issues/1665) | 支持项目/仓库级插件作用域（已关闭） | 13 | 18 | ⭐⭐⭐⭐ |
| [#970](https://github.com/github/copilot-cli/issues/970) | macOS Gatekeeper 拦截 Copilot（企业安全策略） | 7 | 21 | ⭐⭐⭐⭐ |
| [#4069](https://github.com/github/copilot-cli/issues/4069) | TUI 在 1.0.70-0 中途卡死（WSL2 + Windows Terminal） | 6 | 7 | ⭐⭐⭐⭐ |
| [#2792](https://github.com/github/copilot-cli/issues/2792) | 计划与执行阶段自动切换模型 | 4 | 14 | ⭐⭐⭐⭐ |
| [#4019](https://github.com/github/copilot-cli/issues/4019) | 内置 `web_fetch` 不支持 HTTP 代理（已关闭） | 3 | 0 | ⭐⭐⭐ |
| [#2627](https://github.com/github/copilot-cli/issues/2627) | 可配置系统提示以削减固定 token 开销 | 3 | 18 | ⭐⭐⭐⭐ |
| [#3024](https://github.com/github/copilot-cli/issues/3024) | MCP 服务器过多导致持续压缩 | 2 | 0 | ⭐⭐⭐ |
| [#1675](https://github.com/github/copilot-cli/issues/1675) | 检查点恢复 `git clean -fd` 永久删除未跟踪文件 | 2 | 0 | ⭐⭐⭐⭐ |

**重点解读：**

- **#1595** 是社区长期高热话题，Enterprise 用户的 Copilot 策略与可用模型不一致，影响 `/models` 列表与模型调用。
- **#107** 跨度近 10 个月仍未根治的 Alpine 镜像下 Segfault，对 CI 容器化场景影响严重。
- **#1665** 虽已关闭但获得 18 个 👍，反映社区对**项目级插件作用域**的强烈需求，可能进入路线图。
- **#4069** 与 #4077 几乎同期出现，均指向 **1.0.70-0 TUI 在 Windows/WSL 下的回归**，需重点关注官方补丁。
- **#1675** 是潜在**数据丢失风险**，`SnapshotManager` 的 `git clean -fd` 会清空所有未跟踪文件，已影响真实用户。
- **#2627** 在低评论下拿到 18 👍，说明**上下文经济性**是开发者共识痛点。

---

## 📥 重要 PR 进展

> ⚠️ 过去 24 小时内 **仓库无 PR 更新或合并**。社区讨论集中在 issue triage 上，开发侧动作较少，建议关注下周是否随 v1.0.70 正式版推出修复 PR。

---

## 📈 功能需求趋势

按主题聚类分析今日 32 条 issue，社区最关注的方向如下：

1. **🧠 模型与配置灵活性（占比最高）**
   - 默认模型切换（#2792）、子代理模型默认（#2193）、`/fleet` 模型策略
   - 模型族解析（#4068）：用 `opus` / `sonnet` 替代固定版本号
   - BYOK 自定义请求头（#3399）

2. **🖥️ TUI 与终端稳定性**
   - #4069、#4077：1.0.70-0 在 Windows Terminal / WSL2 下黑屏/卡死
   - #4070：高亮复制时输入行被注入乱码
   - #4071：`/session` 列表回归到只显示当前会话（ExP 实验开关问题）

3. **🔌 MCP 与代理生态**
   - #3024：MCP 过多导致上下文爆掉
   - #4076：研究子代理的 MCP 工具不可配置
   - #1665（已关闭）：插件作用域扩展

4. **📦 上下文与 Token 优化**
   - #2627：系统提示与工具定义占据 ~29k tokens，需可裁剪
   - #4068：模型族抽象减少配置漂移

5. **🏢 企业与安全**
   - #1595：策略阻断模型访问
   - #970：macOS Gatekeeper 误拦
   - #4065：外发保护过度拦截合法内容

6. **⏰ 调度与队列**
   - #4078、#4079：`/every` / `/after` 调度触发后任务队列被中断

---

## 🛠️ 开发者关注点

总结过去 24 小时反馈，开发者最集中的痛点为：

- **🔴 稳定性回归** — 1.0.70-0 在 Windows/WSL 环境出现 TUI 卡死与黑屏，影响日常使用；多个用户需要 `--resume` 才能恢复，暴露出 streaming 与 JSON-RPC transport 健壮性不足。
- **🔴 数据安全** — 检查点恢复机制使用 `git clean -fd`，存在误删未跟踪文件的风险；建议增加 `--include-untracked` 选项或单独快照机制。
- **🟡 模型配置不生效** — `settings.json` 中的 `model` 字段启动时未应用，会话回退到 `claude-sonnet-5` 默认；社区呼吁支持模型族（`opus` / `sonnet`）作为稳定别名。
- **🟡 上下文开销过大** — 启动即消耗 ~20.5k tokens 提示 + ~8.5k 工具说明，在 200K 窗口下占比近 15%，对长任务和小窗口模型都不友好。
- **🟡 调度与队列交互缺陷** — `/every` / `/after` 调度触发后，agent 未继续消费现有任务队列，属于新功能早期 bug。
- **🟢 跨平台兼容性** — Alpine/musl 镜像下 Segfault、macOS Gatekeeper 阻断、HTTP 代理支持等仍是企业环境落地的硬性门槛。
- **🟢 生态扩展诉求** — 项目级插件、BYOK 自定义头、研究代理 MCP 工具化等，指向"更可组合、可团队化"的演进方向。

---

*本日报基于 github.com/github/copilot-cli 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**报告日期：2026-07-10**
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 1. 今日速览

今日社区活跃度较低，仓库在过去 24 小时内**无新版本发布**，仅有 2 条 Issue 和 3 条 PR 有更新。开发者活动主要集中在两个方向：一是兼容性与生态适配（支持 `CLAUDE.md` 配置文件的自动加载），二是稳定性修复（处理 BrokenPipeError、字符串处理边界条件）。整体呈现"小修小补、稳态维护"的特征，无重大功能变更或突破性讨论。

---

## 2. 版本发布

⚠️ **过去 24 小时内无新 Release 发布。**

如需了解最新版本，请前往 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 查看历史版本。

---

## 3. 社区热点 Issues

> 说明：今日仅有 2 条 Issue 在过去 24 小时内有更新，以下为完整列表。

### 🔹 #2458 [OPEN] [enhancement] Add option to ignore ssl certificate
- **作者**：dmorsin
- **更新时间**：2026-07-09
- **评论数**：5
- **链接**：[Issue #2458](https://github.com/MoonshotAI/kimi-cli/issues/2458)

**问题摘要**：用户所在的企业环境部署了 MITM 杀毒软件，会在 SSL 连接中插入自有证书进行流量解包，导致 Kimi CLI 登录时证书校验失败，期望增加跳过 SSL 证书校验的可选项。

**为什么值得关注**：这是企业用户在内网合规审计、防火墙统一管控场景下的典型诉求，涉及安全与可用性的平衡，对国内政企市场推广具有普遍参考价值。5 条评论表明社区已有一定讨论热度。

---

### 🔹 #2318 [OPEN] [bug] request reached organization TPD rate limit, current: 1505241
- **作者**：globalvideos272-lab
- **更新时间**：2026-07-09
- **评论数**：1  **👍**：1
- **链接**：[Issue #2318](https://github.com/MoonshotAI/kimi-cli/issues/2318)

**问题摘要**：用户报告在使用 Kimi 2.6（kimi 2.6 版本）时遭遇组织级 TPD（Token Per Day）速率限制，疑似为限流计算逻辑 Bug。

**为什么值得关注**：命中速率限制是开发者日常使用中的高敏感事件，且可能是限流统计 Bug 而非真实超限，1 个点赞表明有开发者遇到过类似问题。涉及账号配额的准确性，对用户体验影响显著。

---

## 4. 重要 PR 进展

> 说明：今日共有 3 条 PR 更新，以下为完整列表，按议题重要性排序。

### 🌟 #2487 [OPEN] feat(agent): support loading CLAUDE.md alongside AGENTS.md
- **作者**：nankingjing
- **更新时间**：2026-07-09
- **链接**：[PR #2487](https://github.com/MoonshotAI/kimi-cli/pull/2487)

**变更内容**：在 `src/kimi_cli/soul/agent.py` 的 `load_agents_md()` 函数中新增对 `CLAUDE.md` 与 `.claude/CLAUDE.md` 的发现与加载逻辑，使已配置 Claude Code 的项目可被 Kimi CLI 自动继承。

**值得关注的原因**：**生态兼容性的重要一步**。通过复用 Claude Code 的项目级配置，Kimi CLI 大幅降低了存量用户的迁移成本，是其在 AI CLI 工具红海市场争夺用户的关键举措。Closes #2401 说明这是社区长期诉求。

---

### 🔧 #2324 [OPEN] fix(web): handle BrokenPipeError in SessionProcess.send_message
- **作者**：Ricardo-M-L
- **更新时间**：2026-07-09
- **链接**：[PR #2324](https://github.com/MoonshotAI/kimi-cli/pull/2324)

**修复内容**：在 `src/kimi_cli/web/runner/process.py` 的 `SessionProcess.send_message` 中，由于子进程可能在 `start()` 与 `write` 之间退出，向 `process.stdin` 写入并 `drain()` 时会抛出 `BrokenPipeError`。该 PR 增加了异常防护。

**值得关注的原因**：典型的**竞态条件**修复，提升 Web 模式下长时间空闲后交互的稳定性，避免用户遭遇无明显错误的崩溃。

---

### 🔧 #2449 [OPEN] fix(string): strip newlines in shorten_middle before the length check
- **作者**：Ricardo-M-L
- **更新时间**：2026-07-09
- **链接**：[PR #2449](https://github.com/MoonshotAI/kimi-cli/pull/2449)

**修复内容**：`shorten_middle(text, width, remove_newline=True)` 在短输入场景下会**先进行长度检查再折叠换行符**，导致本应被压缩为单行的 key argument 仍残留换行符。修复后调整为"先去除换行再检查长度"。

**值得关注的原因**：影响工具调用关键参数在 UI 中的展示美观度，是 CLI 输出可读性的细节打磨，体现了对终端渲染体验的重视。

---

## 5. 功能需求趋势

由于今日数据样本较小（仅 2 条 Issue），趋势分析需结合近期整体方向：

| 方向 | 代表议题 | 趋势判断 |
|------|---------|---------|
| **企业网络兼容性** | #2458（SSL 证书绕过） | 📈 上升，企业部署场景需求显现 |
| **配额/限流机制优化** | #2318（TPD 计算准确性） | 📈 上升，关系到商业用户核心体验 |
| **跨工具生态兼容** | #2487（加载 CLAUDE.md） | 📈 强势，PR 已落地 |

**核心洞察**：社区关注点正从"基础功能可用"向"**企业级可用性**"和"**跨生态互操作**"迁移。

---

## 6. 开发者关注点

基于今日更新的 Issue 和 PR 反馈，开发者关注的痛点可归纳为：

1. **🔐 企业环境适配**：内网 MITM、SSL 证书管控、防病毒软件拦截等企业合规场景下的连接问题突出，期望工具提供更灵活的证书与网络配置选项。

2. **📊 限流与计费透明度**：TPD（每日 Token）配额计算存在不准确风险，开发者希望获得更清晰的限流提示与精确的用量统计。

3. **🔄 跨工具配置复用**：希望 Kimi CLI 能识别并复用 Claude Code 等同类工具的 `CLAUDE.md` 项目配置，降低重复配置成本。

4. **⚙️ 稳定性细节**：Web 模式下的进程通信（BrokenPipeError）、字符串处理（换行折叠）等底层细节仍是影响生产环境可靠性的隐患，需要持续打磨。

5. **📝 终端输出可读性**：工具调用参数的单行展示等 UI 细节虽小，但直接影响开发者日常使用体验。

---

> 📌 **备注**：今日数据量较少，分析结论的代表性有限，建议结合近 7 日趋势综合判断。如需深度复盘某条 Issue/PR 的历史脉络，可进一步拉取数据。

*报告生成时间：2026-07-10 | 数据周期：过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-10**

---

## 📌 今日速览

OpenCode 在过去 24 小时内连续发布 v1.17.16、v1.17.17、v1.17.18 三个版本，密集修复 GPT-5.6 系列模型兼容性与桌面端体验问题。社区方面，**长时间未关闭的高优 Issues 持续积压**——剪贴板失效、`/undo` 不回滚、CPU 占用过高三大经典痛点仍未根治；同时 GPT-5.6 系列模型接入问题集中爆发，开发者对**桌面端稳定性、新模型支持、可观测性（OTEL）**的关注度显著上升。

---

## 🚀 版本发布

### v1.17.18（最新）
- **Core 修复**：解决 GitHub Copilot 返回零计费批处理大小时导致崩溃与价格异常的问题
- **改进**：为 Meta Muse Spark 增加模型特定的系统提示

### v1.17.17
- **Core 修复**：改进 Meta 模型在 reasoning 变体与 provider 请求中的处理逻辑
- **Desktop 修复**：修复模型选择器标签中被截断的字符下行部分（descenders）
- **Desktop 改进**：新增可关闭的 Tabs 引导弹窗，刷新 Help 入口

### v1.17.16
- **Core 修复**：暴露 Grok 模型的 reasoning effort 变体；改进 xAI prompt cache 路由与 Responses 模型的 PDF 支持
- **Desktop 改进**：首页项目支持"打开所在文件夹"操作；Composer 新增文件/命令添加菜单

📦 [v1.17.18 Release](https://github.com/anomalyco/opencode/releases/tag/v1.17.18) · [v1.17.17](https://github.com/anomalyco/opencode/releases/tag/v1.17.17) · [v1.17.16](https://github.com/anomalyco/opencode/releases/tag/v1.17.16)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#4283](https://github.com/anomalyco/opencode/issues/4283) — 剪贴板复制失效
- **反应**：💬 109 评论 | 👍 102 赞（社区点赞数最高）
- 选中响应文本后无法复制到剪贴板，跨越多版本仍未根治，是 OpenCode 最被诟病的体验缺陷。

### 2. [#4704](https://github.com/anomalyco/opencode/issues/4704) — `/undo` 与 `/timeline undo` 不回滚文件编辑
- **反应**：💬 22 | 👍 19
- 即使在 Git 项目中执行 undo，文件实际修改未被还原，破坏"安全实验"的核心承诺。

### 3. [#30086](https://github.com/anomalyco/opencode/issues/30086) — 新版本 CPU 占用飙升
- **反应**：💬 19 | 👍 12
- 7 天前开始，多会话并发能力从 10+ 降至 3 个，光标卡顿，影响重度用户日常使用。

### 4. [#24713](https://github.com/anomalyco/opencode/issues/24713) — Linux 终端复制仅显示弹窗但剪贴板未更新
- **反应**：💬 11 | 👍 7
- 与 #4283 同源的 Linux 平台特定症状，提示错误提示造成误导。

### 5. [#36140](https://github.com/anomalyco/opencode/issues/36140) — GPT-5.6 Luna 通过 ChatGPT OAuth 返回 404
- **反应**：💬 5 | 👍 6
- 内置 provider 列出 `gpt-5.6-luna` 但请求失败，相同账号使用其他 GPT-5.6 变体正常，疑似 OpenCode 模型注册表未对齐官方。

### 6. [#33028](https://github.com/anomalyco/opencode/issues/33028) — 子智能体在 bash 调用后无限挂起
- **反应**：💬 5 | 👍 2
- 多个模型（glm-5.2、minimax-m3）触发，stream 不超时，必须手动 Esc 或杀进程，影响多 Agent 工作流。

### 7. [#34087](https://github.com/anomalyco/opencode/issues/34087) — Desktop 应用无响应
- **反应**：💬 5 | 👍 2
- 输入 → Thinking → 无输出，go/zen 模型均复现，1.16.2 版本回归问题。

### 8. [#36178](https://github.com/anomalyco/opencode/issues/36178) — SQLite 迁移遗漏 Windows 路径规范化后的 JSON 会话
- **反应**：💬 3
- 升级至 1.17.16 后，仅迁移少量历史会话，原 JSON 会话和消息丢失，数据迁移可靠性受质疑。

### 9. [#35686](https://github.com/anomalyco/opencode/issues/35686) — Desktop v1.17.14 陷入无限启动崩溃循环
- **反应**：💬 4
- 提示 `Notification server not found`，UI 无法清除，Reload Webview 无效。

### 10. [#36119](https://github.com/anomalyco/opencode/issues/36119) — Apply Patch 权限视图仅显示首个文件
- **反应**：💬 5
- 多文件批量修改时用户无法审查后续文件改动，存在安全审批盲区。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#36182](https://github.com/anomalyco/opencode/pull/36182) — 会话创建状态用 `startTransition` 批量提交
- **状态**：OPEN
- 用 Solid 的 `startTransition` 包裹 auto-accept、tab handoff、提交重定向等状态变更，避免中间态闪烁。

### 2. [#36179](https://github.com/anomalyco/opencode/pull/36179) — 为每个 prompt 创建独立 OTEL Root Span
- **状态**：OPEN · 关闭 [#32920](https://github.com/anomalyco/opencode/issues/32920)
- 解决此前整个会话共享一条 trace 的问题，实现按 prompt 隔离的可观测性。

### 3. [#36176](https://github.com/anomalyco/opencode/pull/36176) — 修复新会话水合时首条用户消息丢失
- **状态**：OPEN · 关闭 [#35988](https://github.com/anomalyco/opencode/issues/35988)
- 在 `session.sync()` 前进入会话视图，避免 MCP 启动慢导致的初次消息渲染缺失。

### 4. [#36042](https://github.com/anomalyco/opencode/pull/36042) — TUI 侧栏展示子智能体状态
- **状态**：OPEN · 新功能
- 内置子会话面板，便于跟踪多 Agent 工作流中 child session 的执行情况。

### 5. [#36172](https://github.com/anomalyco/opencode/pull/36172) — 预加载更多 timeline 消息
- **状态**：OPEN
- 初次请求从 2 条提升至 20 条，同时保留 200 条历史抓取，缓解 timeline 渲染空白。

### 6. [#36175](https://github.com/anomalyco/opencode/pull/36175) — 标记用户进程为 OpenCode Agent
- **状态**：OPEN
- 为 V2 核心 shell 子进程与 PTY 终端设置 `AGENT=1`、`OPENCODE=1` 环境变量，遵循 Codex 统一规范。

### 7. [#36180](https://github.com/anomalyco/opencode/pull/36180) — 简化工具准入流程
- **状态**：CLOSED（已合并）
- 工具准入收敛为 `materialize(permissions?)`，移除未使用的 model 轴，统一注册生成测试。

### 8. [#36169](https://github.com/anomalyco/opencode/pull/36169) — 清理压缩（compaction）流程
- **状态**：CLOSED（已合并）
- 手动压缩编排下沉到 service 层，统一失败上报，简化流式错误处理。

### 9. [#36096](https://github.com/anomalyco/opencode/pull/36096) — TUI 模型变体循环从 `default` 起跳正确
- **状态**：CLOSED · 修复 [#36095](https://github.com/anomalyco/opencode/issues/36095)
- 解决 `default` 真实变体导致 Ctrl+T 跳过 `high`/`max` 的循环逻辑错误。

### 10. [#36163](https://github.com/anomalyco/opencode/pull/36163) — 恢复弹性压缩能力
- **状态**：CLOSED（已合并）
- 始终尝试手动压缩与 provider overflow 恢复，配置模型限额仅作用于预测式自动压缩，保留流式错误细节。

---

## 📈 功能需求趋势

通过对过去 24 小时 Issues 的归类分析，社区关注的功能方向呈以下分布：

| 方向 | 代表 Issues | 热度 |
|------|------------|------|
| **GPT-5.6 / 新模型接入** | #36140, #36141, #36133 | 🔥🔥🔥 |
| **桌面端稳定性** | #35686, #34087, #23219 | 🔥🔥🔥 |
| **多 Agent / 子智能体** | #33028, #36147, #35126, #36132 | 🔥🔥🔥 |
| **LSP / 编辑器集成** | #36162（容器化 LSP） | 🔥🔥 |
| **数据迁移 / 存储** | #36178（SQLite 迁移） | 🔥🔥 |
| **网络 / TLS / 自定义 Provider** | #35365（自签证书）, #35432（tool_call=false）, #35855（自动拉取模型 ID） | 🔥🔥 |
| **可观测性 / OTEL** | 关联 PR #36179 | 🔥 |
| **权限审批 UX** | #36119（多文件 patch 审批） | 🔥 |

**核心趋势**：OpenCode 正在从单一 CLI 工具向**多模型生态 + 多 Agent 工作流 + 企业级可观测性**演进，社区对新模型快速接入、Agent 调度可控性、以及桌面端稳定性的呼声最为强烈。

---

## 🧑‍💻 开发者关注点

汇总过去 24 小时开发者反馈中的高频痛点：

1. **🔪 剪贴板 / Undo 等"基础操作"长期失修**
   - #4283、#24713（剪贴板）和 #4704（undo）均为数月前提交，🆙 点赞数过百却仍未根治，开发者最迫切的需求反而是这种"应该能用"的底层能力。

2. **⚡ 性能回归引发重度用户警觉**
   - #30086 中提到的"无法并发多会话"问题直接影响生产力，开发者开始怀疑后续版本的回归控制流程。

3. **🤖 GPT-5.6 系列模型同时出现 404 / Auth 错误 / reasoning effort 缺失**
   - #36133、#36140、#36141 三个 Issue 在同一天出现，反映 OpenAI 新模型发布时 OpenCode 模型注册表的同步滞后，**自动化模型注册同步**成为新刚需（与 #35855 "Fetch custom model IDs automatically" 呼应）。

4. **🧬 Subagent 模型继承 / 环境变量覆盖缺失**
   - #35126、#36132、#36147 集中讨论子 Agent 无法独立指定模型的问题，已通过 #36147 的 `OPENCODE_SUBAGENT_MODEL` 环境变量提案部分解决，但完整闭环尚未落地。

5. **💾 升级路径上的数据迁移风险**
   - #36178（SQLite 丢失 JSON 会话）、#36178、#34821（V2 目录附件 mime 错误）让用户对升级心存顾虑，开发者希望有更平滑的回退与迁移机制。

6. **🪟 Windows / Linux 平台特定 Bug 集中**
   - #23219（TUI Enter 无效）、#32504（Bash 工具挂起）、#35365（自签 TLS）、#24713（Linux 剪贴板）显示跨平台一致性仍是 OpenCode 的薄弱环节。

7. **🔌 自托管 Provider 的边界支持**
   - #35365（自签证书）、#35855（自动发现 `/v1/models`）、#35432（`tool_call: false` 不生效）说明企业自托管场景对 OpenCode 的要求远超当前开箱即用范围。

---

> 💡 **总结**：OpenCode 当前处于**功能高速迭代与回归控制之间的拉锯期**。一方面模型覆盖、Agent 调度、可观测性等高级能力快速推进；另一方面剪贴板、Undo、性能等基础体验仍是"未兑现承诺"。社区期待团队在持续扩张功能边界的同时，能重新投入资源解决这些**跨版本遗留痛点**。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-10

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono)

---

## 📌 今日速览

今日 Pi 社区进入 **GPT-5.6 全面适配阶段**——`max` 思考级别随 v0.80.6 正式发布并原生支持 GPT-5.6 与自适应 Claude 模型，配套的 Codex 模型目录（Sol/Terra/Luna）与 372K 上下文窗口修正也已落地。与此同时，OpenAI 严格工具/语法（Strict Tools）成为讨论度最高的元议题，开发者对工具加载机制、AgentSession 生命周期稳定性的关注度持续走高。

---

## 🚀 版本发布

### v0.80.6（最新）
- 新增 **`max` 思考级别**，作为 `xhigh` 之上的可选档位，原生支持 GPT-5.6 及自适应 Claude 模型
- 覆盖 CLI（`--thinking max`）、SDK、RPC 与模型选择器
- 自定义主题可通过 `thinkingMax` 字段声明支持
- 📖 [CLI Reference](https://github.com/earendil-works/pi) 

### v0.80.5（昨日）
- 常规维护版本

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 重要程度 |
|---|-------|--------|----------|
| 1 | **#6306 [to-discuss] Support Strict Tools / Grammar** — 22 评论 | ⭐⭐⭐⭐⭐ | 当前 SDK 缺乏"自由形式"工具与语法感知工具的表达能力，OpenAI 已支持自定义 LARK/Rust 正则，需对齐 |
| 2 | **#2023 [bug] Add `pi.runWhenIdle()` to schedule work after agent settled** — 13 评论，5 👍 | ⭐⭐⭐⭐ | 修复扩展生态核心缺口：让扩展在 Agent 完全 idle 后再调度后续工作 |
| 3 | **#6234 [bug] Escape leaves Pi stuck in Working when extension context hook never settles** — 11 评论 | ⭐⭐⭐⭐ | TUI 卡死的高频痛点，暴露扩展事件/上下文钩子的生命周期缺陷 |
| 4 | **#5886 AgentSession settlement/continuation and assistant-tail lifecycle bugs** — 5 评论，2 👍 | ⭐⭐⭐⭐ | 元问题：汇总 AgentSession 在结算/续跑阶段的递归 Bug 群 |
| 5 | **#5263 Make in-session model and thinking-level changes ephemeral by default** — 6 评论，6 👍 | ⭐⭐⭐⭐ | 改进交互体验：会话内切换默认不污染全局设置 |
| 6 | **#6465 Add GPT-5.6 Sol, Terra, and Luna to OpenAI Codex model catalog** — 5 评论 | ⭐⭐⭐⭐ | 跟进行业头部模型目录，反映社区对新模型的渴求速度 |
| 7 | **#6376 Thinking blocks inappropriately stripped in newer Claude models** — 5 评论 | ⭐⭐⭐ | Claude 4.7/4.8 思考块处理回归，已由 #6457 修复 |
| 8 | **#6210 /scoped-models cannot select model ids containing brackets** — 6 评论 | ⭐⭐⭐ | 模型选择器正则匹配的实用 Bug |
| 9 | **#6378 Context length exceeded with no fix path** — 3 评论，1 👍 | ⭐⭐⭐ | 反映大上下文场景下的可用性问题，需更友好的降级/压缩引导 |
| 10 | **#5858 Use "instructions" field for openai-responses system prompt** — 7 评论 | ⭐⭐⭐ | 与 OpenAI 最新接口规范对齐的请求 |

> 注：#6434（修复空推理内容渲染，4 👍）、#4973（提示模板多行参数回归，3 👍）虽然讨论量略低但已有具体修复，是值得关注的"已闭环"案例。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|-----|------|
| 1 | **#6474 feat(ai): support message-anchored tool loading** | mitsuhiko 的 PoC：在消息级别动态引入工具，避免初始请求塞满所有工具。**声明暂不合并**，作为方案探索 |
| 2 | **#6457 fix: send anthropic thinking blocks when thinking text is empty** | 修复 #6376，适配 Claude 4.7/4.8 新行为 |
| 3 | **#6471 fix(ai): correct GPT-5.6 Codex context window** | 将 GPT-5.6 Sol/Terra/Luna 上下文窗口从 272K 修正为 **372K** |
| 4 | **#6460 feat(ai): add xAI Grok SuperGrok OAuth provider** | 新增 `xai-oauth` 订阅登录通路，复用 device-code OAuth |
| 5 | **#6463 fix(coding-agent): cancel auto-retry when switching models** | 修复 `/model` 切换时旧重试逻辑残留的潜在 Bug |
| 6 | **#6441 Refresh MiniMax M3 parameters** | 更新 MiniMax M3 定价（$0.60 / $2.40 / $0.12 缓存读）与 `/anthropic/v1` base URL |
| 7 | **#6427 feat(coding-agent): add prompt cache miss tracking** | 跨轮比较缓存命中，闲置超 TTL 或模型切换时输出 transcript 告警 |
| 8 | **#6470 feat(coding-agent): expand ~ in shellPath setting** | 让 `shellPath` 支持 `~`，对齐 `getSessionDir()` 行为，关闭 #6458 |
| 9 | **#6467 fix(package-manager): restore missing git package deps** | 解决 pnpm 用户 git 包 `node_modules` 缺失导致的加载失败 |
| 10 | **#6449 Add ResourceExhausted as a retryable error** | 429/资源耗尽错误加入自动重试分类 |
| 11 | **#6216 feat: Add Amazon Bedrock Mantle OpenAI Responses provider** | 通过 OpenAI Bedrock Provider 接入 Bedrock Mantle，新增企业级通道 |
| 12 | **#6440 fix: reload keybindings before creating custom editor** | 修复首次启动自定义编辑器时键绑定未生效（需 `/reload`）问题 |

---

## 📈 功能需求趋势

从今日 Issues 提炼出 **6 条主线**：

1. **🤖 头部模型快速适配**  
   GPT-5.6 系列（Sol/Terra/Luna）目录补齐、上下文窗口修正、`max` 思考级别落地，体现 Pi 团队对 OpenAI/Claude 新模型的快速跟进节奏。

2. **🧩 工具与语法生态**  
   #6306 严格工具/LARK 语法、#6474 消息锚定动态加载——社区在向"工具按需注册、按语法约束"演进。

3. **🔐 多样化登录与提供商**  
   xAI SuperGrok OAuth (#6461/#6460)、Amazon Bedrock Mantle (#6216)、Together.ai 弃用迁移 (#6132) 显示多云多订阅并行成为常态。

4. **⚡ 性能与会话管理**  
   #5804 Fast Sessions（SQLite 会话存储）、#6469/#6427 缓存追踪与账单准确性、#6431 重试分类——性能与成本透明度并重。

5. **🪟 TUI/UX 一致性**  
   思考块渲染（#6434、#6454、#6376）、`/reload` 描述对齐（#6395）、Ctrl-P 行为（#6456）——交互层细节打磨是高频诉求。

6. **🛡 AgentSession 生命周期稳定性**  
   #5886、#6234、#2023、#6363——围绕 Agent "idle/settled" 语义的扩展接口与状态机收敛，是当前最大可靠性热点。

---

## 👨‍💻 开发者关注点

- **可恢复的错误处理更精细**：bun fetch socket drop、ResourceExhausted、stale pre-compaction usage 等多种"瞬态失败"被反复提出，社区期望统一的 `isRetryableAssistantError` 分类与可见的自动重试策略。
- **扩展生态的安装/加载陷阱**：git 包依赖缺失（#6467）、全局包与本地开发版本冲突（#6466）、扩展注册位置与文档不符（#6400）——新扩展作者"踩坑集中"。
- **配置灵活性**：compaction provider/model（#6442）、shellPath 波浪号（#6458）、session 内模型/思考级别默认值（#5263）——希望在保持全局默认的前提下，提供更精细的本地覆盖能力。
- **上下文预算与缓存可观测性**：GPT-5.6 1.25× cache write 计费变化（#6469）、pre-compaction 残留（#6464）、context length 不可恢复（#6378）——长会话场景下的预算管理与提示是开发者最迫切的需求。
- **键绑定与本地化一致性**：Ctrl-P 历史命令（#6456）、`/reload` 行为（#6395、#6440）、键绑定可翻译（#6446）——日常交互的"跨工具迁移摩擦"。

---

*日报生成时间：2026-07-10 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-10

## 今日速览

今日社区活跃度持续走高，过去 24 小时内更新了 **32 条 Issue** 和 **50 条 PR**，并发布了 **v0.19.8-nightly.20260710** 新版本。主要看点包括：**多工作区守护进程架构的 RFC 引发 19 条评论热议**，**macOS / Windows 上剪贴板粘贴图片功能集体失效** 成为跨平台高频反馈痛点，**web-shell 体验增强**集中出现 7+ 个 PR，**v0.19.8 引入的 `--debug` 日志文件丢失 bug** 也已被修复合入。

---

## 版本发布

### v0.19.8-nightly.20260710.205430235
- 🛠 **修复子代理工具调用死循环**（[#6543](https://github.com/QwenLM/qwen-code/pull/6543)）：阻止 subagent 在工具调用上反复循环的缺陷。
- 🧹 **修复会话历史链断裂检测**：会话管理器现在能识别并标记断裂的历史链（`fix(session)`）。
- 📦 同步发布 **cua-driver-rs v0.7.1**：prebuilt 二进制支持相对坐标方案；macOS 已签名 + 公证（universal binary + `QwenCuaDriver.app`），Linux / Windows 仍为未签名版本。

---

## 社区热点 Issues

> 按评论数与影响面精选 10 条

### 1. [RFC] 单守护进程支持多工作区 [#6378](https://github.com/QwenLM/qwen-code/issues/6378) 💬19
作者 `doudouOUC` 提出的架构级 RFC，建议让单个 `qwen serve` 守护进程同时托管多个 workspace，并保留旧版单 workspace 兼容行为。这是 `qwen serve` 演进的关键设计讨论，**评论数最高**，社区正围绕 channel worker 生命周期、资源隔离等问题展开。

### 2. [功能缺失] 对话中无法上传/拖拽图片和文档 [#6560](https://github.com/QwenLM/qwen-code/issues/6560) 💬18
用户 `pixuan1989` 反馈 v0.19.8 起无法通过 Ctrl+V 粘贴或拖拽上传图片/文档，体验退化严重。**与 #6590、#6577、#6594 形成跨平台联动**，是当前最具代表性的 UX 回归。

### 3. [Bug] JetBrains Qwen Code ACP agent 不接收用户 prompt [#6581](https://github.com/QwenLM/qwen-code/issues/6581) 💬8
IntelliJ IDEA + Ollama 配置下，CLI 正常工作但 ACP 集成只收到 bootstrap context 而无用户消息。**暴露 IDE 集成的鲁棒性问题**，对 JetBrains 用户影响明显。

### 4. [BUG] 连接到 Qwen Coder 出现 Internal Error [#6565](https://github.com/QwenLM/qwen-code/issues/6565) 💬7
多语言（中/日）界面下的认证/连接错误，截图显示 `Internal Error`。**典型需信息类问题**，需补充客户端版本与认证方式。

### 5. [Tracking] 全量热重载系统（skills / extensions / MCP / 配置）[#3696](https://github.com/QwenLM/qwen-code/issues/3696) 💬5 ⭐P1
作者 `yiliang114` 的长期 tracking issue，目标是无需重启会话即可让 skills、extensions、MCP、LSP、配置变更生效。**代表社区对“开发态流畅性”的核心诉求**。

### 6. [BUG] v0.19.8 `--debug` 打印日志路径但文件未创建 [#6600](https://github.com/QwenLM/qwen-code/issues/6600) 💬4 ⭐P2
CLI 提示 `Logging to: ~/.qwen/debug/<session-id>.txt` 但文件从未落盘，`latest` 软链也指向不存在目标。**最新 release 即发即坏的典型**，修复见 PR #6605。

### 7. [BUG] qwen3.7-max 在主回复中泄漏 `<analysis>` / `<summary>` 标签 [#6595](https://github.com/QwenLM/qwen-code/issues/6595) 💬3 ⭐P2
长上下文或复杂工具调用场景下，最新旗舰模型会将内部标签直接写入用户可见输出，导致后续动作中断。**新模型集成初期的典型输出解析问题**。

### 8. [BUG] macOS standalone 安装 Ctrl+V 粘贴图片失效 [#6590](https://github.com/QwenLM/qwen-code/issues/6590) 💬3 ⭐P2
根因明确：原生模块 `@teddyzhu/clipboard` 未打入 standalone 安装包的 `lib/node_modules`，导致剪贴板图片功能完全静默失效。**已合并修复的同类 issue 是 #6594**。

### 9. [BUG] Glob 工具在大路径下 OOM [#6614](https://github.com/QwenLM/qwen-code/issues/6614) 💬2 ⭐P1
子 agent 调用 `glob **` 扫描大型仓库时 Node 进程因堆内存耗尽崩溃，**且发生在输出截断之前**。高优先级性能与稳定性问题。

### 10. [Security] Shell 子进程继承敏感环境变量 [#6601](https://github.com/QwenLM/qwen-code/issues/6601) 💬2 ⭐P1
`process.env` 中的 `QWEN_SERVER_TOKEN`、API Key 等可能泄露到 shell 命令输出。**安全风险显式被列为 P1 且欢迎 PR**。

---

## 重要 PR 进展

### 1. [feat(serve)] 每轮 system-reminder 的运行时上下文注入 [#5847](https://github.com/QwenLM/qwen-code/pull/5847)
引入 per-session KV `RuntimeContext`，由 daemon API / SDK 写入后在每轮以 `<system-reminder>` 块注入。**为多工作区 RFC（#6378）提供关键基础能力**。

### 2. [feat(scheduled-tasks)] 隔离任务的前置条件门控 [#6619](https://github.com/QwenLM/qwen-code/pull/6619)
隔离型 scheduled-task 可携带可选 precondition；每次触发先用普通 cron 轮次评估，仅当判定 `DECISION: YES` 时才派发到新子会话。**显著降低误触发开销**。

### 3. [refactor(cli)] 重写 Fleet View 以对齐 Claude Code agent UI [#6451](https://github.com/QwenLM/qwen-code/pull/6451)
多会话管理视图重写：统一交互模式、修复集成 CI 失败、对齐主流 CLI UX。**面向多 agent 工作流的关键界面升级**。

### 4. [feat(hooks)] 新增 `MessageDisplay` 中段流式钩子 [#6489](https://github.com/QwenLM/qwen-code/pull/6489)
在 `Stop`（仅末端触发一次）之前提供持续触发的 `MessageDisplay` 事件。**填补 IDE/ACP 集成无法增量观察 assistant 回复的空白**，对应 issue #6488。

### 5. [feat(serve)] daemon 管理的 channel workers（`qwen serve --channel`）[#5976](https://github.com/QwenLM/qwen-code/issues/5976)
RFC 性质的功能请求：`qwen serve` 拥有 channel worker 进程生命周期。**与 #6378 一起构成 serve 架构演进的主线**。

### 6. [feat(web-shell)] Markdown 表格可读性增强 [#6626](https://github.com/QwenLM/qwen-code/pull/6626)
密度切换、全局长文本展开/收起、紧凑行细节、斑马纹、悬浮 tooltip。**web-shell 数据呈现能力升级**。

### 7. [feat(web-shell)] 右侧 artifact 审阅面板 [#6591](https://github.com/QwenLM/qwen-code/pull/6591)
编辑过的文件以独立 turn card 呈现，附行级统计、可展开 diff、可拖拽审阅面板与文件列表导航。**将 agent 操作产物纳入可视化审阅流**。

### 8. [feat(web-shell)] 调度任务 prompt 引用选择器 [#6589](https://github.com/QwenLM/qwen-code/pull/6589)
在 scheduled-task 编辑器中可打开 extension / skill / MCP picker，并以 inline composer 风格标签插入。**降低运维配置出错率**。

### 9. [feat(cli)] 模型热切换快捷键（Alt+S / Ctrl+F）[#6486](https://github.com/QwenLM/qwen-code/pull/6486)
新增 `model.toggleModel` 设置与全局热键，状态栏实时反映，跨 turn 持久化。**面向多模型实验 / 成本控制场景**。

### 10. [fix(cli,core)] 还原默认 debug 日志文件

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-07-10**

---

## 一、今日速览

今天是 **CodeWhale v0.8.68 版本发布的关键节点**：Release PR #4327 已就位，所有功能工作与 CI 优化均已完成合并，进入最终发版阶段。与此同时，#4092 作为 v0.8.68 的"执行看板"主包持续承载社区协调（58 条评论），xAI/Grok 集成、Termux/Android arm64 官方支持、TUI 性能修复均已陆续 CLOSED 落地，社区节奏明显从"开发冲刺"切换至"发版验收"。

---

## 二、版本发布

无新版本发布，但 v0.8.68 Release PR #4327 已于今日 CLOSED 准备就绪，包含：

- Workspace crates、Cargo.lock、npm wrapper、README/安装脚本的版本号与 changelog 更新
- 合并了来自 #4243（parking_lot 迁移）、#3902（五个 TUI 热路径修复）、#4025 + #4310（CI 关键路径优化）、#4314（xAI OAuth）、#4315（Termux 构建）、#4323（定价数据修正）等关键 PR
- 公共文档/站点语言最终对齐

> [PR #4327](https://github.com/Hmbown/CodeWhale/pull/4327)

---

## 三、社区热点 Issues

| # | Issue | 评论数 | 重要性 |
|---|---|---|---|
| 1 | [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) v0.8.68 执行看板（lane 顺序、依赖、agent 协议） | 58 | **核心协调枢纽**：所有 open milestone issue 都挂载唯一 `lane-*` 标签，是任何 agent 接入 v0.8.68 的唯一入口；7月7日的 triage packet 已被其取代 |
| 2 | [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) CodeWhale 不遵守 Constitution（反复写临时脚本） | 30 | **行为规范争议**：用户反馈 agent 持续生成临时脚本而非复用既定流程，挑战时总能自圆其说；触发 #4313 Constitution 再平衡的根因之一 |
| 3 | [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) 子 agent 环境级工具沙箱化（已 CLOSED） | 12 | **安全里程碑**：跨 session/sub-agent/Fleet worker/MCP server 强制执行 `tool_restrictions`，确认 `--disallowed-tools` 已被实现 |
| 4 | [#4014](https://github.com/Hmbown/CodeWhale/issues/4014) 高扇出会话下 TUI 卡顿与内存压力（已 CLOSED） | 10 | **性能痛点**：30+ 并行子 agent 时打字延迟、终端渲染停顿、宿主机内存压力，已由 #3902 修复 |
| 5 | [#4178](https://github.com/Hmbown/CodeWhale/issues/4178) Stopship 工作流作为 Fleet-backed lane（dogfood） | 9 | **架构验证**：用真实 stopship issue 端到端验证 Fleet/Workflow/Lane/Runtime 模型，避免概念混淆 |
| 6 | [#4257](https://github.com/Hmbown/CodeWhale/issues/4257) xAI (Grok) 一级 provider 支持（已 CLOSED） | 9 | **模型生态扩展**：填补 xAI/Grok 集成空白，由 #4314 通过 device-code OAuth 落地 |
| 7 | [#4175](https://github.com/Hmbown/CodeWhale/issues/4175) Fleet/Workflow/Lane/Runtime 产品模型规范化 | 8 | **架构基石**：明确"Workflow 管顺序、Fleet 管谁、AgentProfile 管配置"的分层，防止概念坍缩 |
| 8 | [#4242](https://github.com/Hmbown/CodeWhale/issues/4242) Termux 运行时 QA（shell/PTY/config/TUI 启动） | 7 | **平台覆盖**：在真实 Termux 环境下验证 Android arm64 构建，确保官方支持到位 |
| 9 | [#4236](https://github.com/Hmbown/CodeWhale/issues/4236) 官方 Termux / Android arm64 支持 Epic | 7 | **平台覆盖**：解决 Linux arm64 release 资产在 Termux 上 ABI 错误的问题，由 #4315 修复 |
| 10 | [#4179](https://github.com/Hmbown/CodeWhale/issues/4179) Workflow 阶段门控与 Fleet 角色间交接 | 7 | **协作机制**：scout → implementer → reviewer → verifier → release_lead 的 block/approve 语义，明确角色交接 |

---

## 四、重要 PR 进展

| PR | 标题 | 意义 |
|---|---|---|
| [#4327](https://github.com/Hmbown/CodeWhale/pull/4327) | release: v0.8.68 | **发版封板**：所有功能/CI 工作已完成合并，仅承担版本号/changelog/文档语言收口 |
| [#3902](https://github.com/Hmbown/CodeWhale/pull/3902) | 修复五个 TUI 渲染/输入热路径（#3896–#3900） | **性能大修**：Tasks sidebar 每帧重复计算、文件树同步 `read_dir`、transcript deep clone 等五个 issue 一次性解决 |
| [#4310](https://github.com/Hmbown/CodeWhale/pull/4310) | 缩减 PR 关键路径并停止每次合并重建 nightly | **CI 提速**：基准测量 19m30s（其中 5m26s 排队），通过运行器分配优化显著压缩迭代周期 |
| [#4025](https://github.com/Hmbown/CodeWhale/pull/4025) | 对惰性脚本做 light 分类并停止为轻量 PR 分配 macOS/Windows runner | **CI 资源**：8m53s 的 macOS 全测试、13m59s 的 Windows 全测试被正确跳过，单脚本变更不再触发重型构建 |
| [#4314](https://github.com/Hmbown/CodeWhale/pull/4314) | xAI device-code OAuth 入口（#4257） | **OAuth UX**：`codewhale auth xai-device` + TUI `/auth xai-device` 命令 + provider 安装引导，终端临时还原处理到位 |
| [#4315](https://github.com/Hmbown/CodeWhale/pull/4315) | 构建 Termux 目标并停止 rustls JVM panic（#4236, #4242） | **Android 原生支持**：为 `aarch64-linux-android` 启用 bindgen（NDK sysroot），修复 rquickjs 绑定缺失问题 |
| [#4243](https://github.com/Hmbown/CodeWhale/pull/4243) | 将 runtime_threads map 迁移至 parking_lot::Mutex（#4149） | **并发优化**：完成 v0.8.68 §6.1 / B1.2 热锁位置迁移，contributor 先认领再动手的工作流范例 |
| [#4313](https://github.com/Hmbown/CodeWhale/pull/4313) | v0.8.67 ablation 后 Constitution 再平衡 | **行为规范**：≈4,665 → 516 词的过度精简导致评测变差，本次回退到 ≈936 词的中间态，恢复动量、因果调试、硬约束等关键引导 |
| [#4323](https://github.com/Hmbown/CodeWhale/pull/4323) | 2026-07-09 定价新鲜度审计 Parts A-C | **数据准确性**：glm-5.1、kimi 等模型定价基于官方页面与 OpenRouter 公共 API 双重核验后修正 |
| [#4311](https://github.com/Hmbown/CodeWhale/pull/4311) | 新增 GPT-5.6 与 Muse Spark 路由 | **模型矩阵**：OpenAI GPT-5.6 系列（`gpt-5.6` 别名、`-sol`/`-terra`/`-luna`）+ Meta Model API `muse-spark-1.1` 全 provider 覆盖 |

---

## 五、功能需求趋势

从 v0.8.68 全量 issue 与 PR 提炼的社区诉求方向：

1. **架构分层规范化（最高频）** — Fleet / Workflow / Lane / Runtime 的职责边界（#4175 及其 6 个 phase 子任务）。Workflow 管 WHAT ORDER、Fleet 管 WHO、AgentProfile 管配置 的分离原则贯穿整个里程碑。

2. **TUI 性能与渲染效率** — 高扇出会话下的卡顿（#4014）、Tasks sidebar 双倍计算（#3898）、文件树同步 IO（#3900）、transcript deep clone（#3896）、hot lock 迁移（#4149/#4243）等共 5 个性能 issue 被一次性清理。

3. **新模型/Provider 接入** — xAI/Grok device-code OAuth（#4257/#4314）、GPT-5.6 全系列、Muse Spark（#4311）、定价数据新鲜度审计（#4323）反映社区对模型生态广度的强烈诉求。

4. **平台覆盖扩展** — Termux/Android arm64 官方支持（#4236/#4242/#4315）从社区请求演进为 Epic，体现移动场景的明确需求。

5. **Setup 体验闭环** — 提供商配置向导（#3875）、MCP/skills/plugins 步骤（#3407）、设置迁移工具（#4086 TormentNexus 扩展）显示 onboarding 仍是重点。

6. **CI/CD 效率** — PR 关键路径优化（#4310）、light/heavy 分类（#4025）、Rust 1.97 lint 修复（#4312/#4321/#4322）反映 v0.8.68 冲刺期对迭代速度的极致追求。

7. **安全与合规** — 工具沙箱化（#4042）、RustSec + cargo-deny 安全审计 CI（#4272）显示安全基建的常态化推进。

---

## 六、开发者关注点

**痛点：**

- **Constitution 行为漂移**（#4032 → #4313）：v0.8.67 把 Constitution 从 ≈4,665 词砍到 516 词后，agent 反而更频繁地"自创脚本"而非复用既定流程。社区实测发现过度精简会丢失动量、因果调试、硬约束等关键行为锚点，最终回退到 936 词的中间态。
- **长会话状态膨胀**（#4217）：`.codewhale/state/subagents.v1.json` 在持续运行数天/数周后会涨到约 30 万行且从不收缩，`worker_records` 无时间/状态清理机制，开发者只能手动清空后重启。
- **MCP 发现脆弱性**（#4308）：部分 MCP 服务（如 IntelliJ IDEA 配套）仅实现 `tools/list`，原逻辑将 `resources/list`/`prompts/list` 作为强制流程导致连接挂起；同时 `codewhale-tui mcp tools <server>` 输出会完整打印工具多行描述，刷屏严重。

**高频需求：**

- **CI 迭代速度**：v0.8.68 冲刺期 CI 是迭代瓶颈，社区强烈诉求更智能的 runner 分配与关键路径压缩
- **agent 行为可预期性**：通过 Constitution + Fleet 角色契约 + Workflow 门控形成多层防护，避免 agent"自由发挥"
- **文档/词汇统一**（#4135）：to-do / Tasks / Strategy / Workflow 等用户可见词汇需统一语义边界，避免 UI 与 prompt 表达分裂
- **子 agent 可见性**（#4134/#4133）：消除 `unknown child` UI，统一每个委派单元的可见产物，规范 spawn 元数据传递

---

> *本日报基于 2026-07-10 当日 GitHub 数据自动生成。数据来源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*