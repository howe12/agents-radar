# AI CLI 工具社区动态日报 2026-09-09

> 生成时间: 2026-09-09 02:34 UTC | 覆盖工具: 9 个

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
**数据周期**：2026-09-09 · **覆盖工具**：9 款主流 AI CLI

---

## 1. 生态全景

当前 AI CLI 生态已从"功能补齐"阶段进入"工程化深耕"阶段。各家产品形态趋同（终端 + Desktop + 插件生态），但侧重点分化明显：**Anthropic 与 GitHub 聚焦编辑器内体验与权限模型，OpenAI 押注 Computer Use + Voice，Google 主打 Auto Memory 与 AST 感知代码理解，Qwen/OpenCode 在 Web Shell 与桌面扩展化上发力，Pi/DeepSeek TUI 走多 Provider 路由路线**。与此同时，**Windows 平台稳定性、Agent 可靠性（挂起/超时/状态失真）、跨会话可观测性**成为跨产品共性短板，行业重心正从"模型能做什么"转向"工具能否在生产环境长期可信运行"。

---

## 2. 各工具活跃度对比

| 工具 | 热点 Issue 数 | PR 数 | 今日 Release | 仓库成熟度信号 |
|------|--------------|------|-------------|----------------|
| **Claude Code** | 10（#91870 单帖 147 评论） | 1 | v2.1.265 + v2.1.266（hotfix） | 稳定版迭代，热度集中在 issue |
| **OpenAI Codex** | 10（#26892 单帖 89 评论） | 10 | rust-v0.154.0-alpha.7 / .8 | 仍处 alpha，PR 密集合并基础设施 |
| **Gemini CLI** | 10（#21409 P1 挂起） | 10（6 已关闭） | v0.59.0 + v0.60.0-preview + v0.61.0-nightly | 三条发布线并行，节奏快 |
| **GitHub Copilot CLI** | 10（#13 Vim 76 👍 已关） | 4（3 已关闭） | v1.0.84-2 / .3 | v1.x 稳定期，社区诉求强烈 |
| **Kimi Code CLI** | 0 | 1（PR #2595 Open） | 无 | 低活跃度日 |
| **OpenCode** | 10（#6096 TPS 73 👍） | **20+** | 无 | 当日合并量最大，Desktop 架构重构 |
| **Pi (pi-mono)** | 10（4 条同源 x-opencode-session） | 17 | 无 | 上游变更触发级联修复，PR 密度高 |
| **Qwen Code** | 10（#11303 P1 conhost 泄漏） | 10 | v0.23.1（含破坏性变更） + v0.23.2-preview + SDK x2 | 预览/SDK 同步推进 |
| **DeepSeek TUI** | 9（全部 OPEN） | 3 | 无 | 维护者驱动型，Issue 集中度高 |

**关键观察**：OpenCode（20+ PR）与 Pi（17 PR）是当日工程密度最高的两款工具；Kimi Code 当日几乎"静默"；Claude Code 出现"Issue 热、PR 冷"的倒挂，反映维护重心仍在 bug 修复而非功能扩展。

---

## 3. 共同关注的功能方向

以下需求在 **3 个及以上工具**的社区中被同时提出，是当前 AI CLI 工具的"集体刚需"：

### 3.1 Agent 执行可靠性与终态判定
- **Claude Code #65961**：模型无视停止指令持续生成冗长注释（203 👍，全场最高）
- **Gemini CLI #21409 / #22323**：generalist agent 永久挂起；`MAX_TURNS` 误报 `GOAL` 成功
- **DeepSeek TUI #6013**：呼吁独立 Goal Gate 二次校验，不盲信模型自报状态
- **OpenAI Codex #43998**：递归删除命令导致源码永久丢失（无确认、无回收站）
- **共识**：Agent 的"自我报告"不可信，需要框架层提供超时、确认、独立校验

### 3.2 MCP 集成的"最后一公里"
- **Copilot CLI**：OAuth 与 Entra ID 不兼容（#4582）、会话恢复时 MCP 连接过早取消（#4753）、取消协议未实现（#4759）
- **OpenAI Codex #43947 / #43971**：OAuth 刷新需主动信号、进程池泄漏
- **Qwen Code #11241**：Playwright Browser SDK 走持久 Node REPL
- **Pi**：多 Provider 适配时 MCP 路径重复
- **共识**：MCP 已成为通用集成层，但鉴权/取消/错误反馈仍不成熟

### 3.3 跨会话可观测性与成本归因
- **OpenCode #6096 / #36216**：TPS 实时展示、token 缓存元数据
- **Pi #6881**：provider 报告费用透传（`usage.cost.total`）
- **DeepSeek TUI #6011**：跨会话 token / 缓存命中率 / 工具成本归因
- **共识**：单会话视角已不够，开发者要把 AI 工具纳入生产环境的成本核算

### 3.4 TUI 编辑体验对齐
- **Copilot CLI #13**：Vim 模式（76 👍，已关闭）→ **已落地**
- **Codex #36439**：鼠标点击定位光标（对比 Claude Code 落后）
- **Pi #9052 / #8919 / #9359**：全屏模式滚轮慢、footer 留白、TruncatedText 计算
- **共识**：TUI 不再是"够用即可"，正成为产品差异化要素

### 3.5 Windows 平台稳定性
- **OpenAI Codex**：#25178（截图失败）、#34841（沙箱 ACL 损坏）、多个回归
- **Copilot CLI #4756 / #4742**：Desktop 1.1.15 并发 Local 会话冲突
- **Qwen Code #11303**：conhost.exe 泄漏 347 个子进程 / 2.8 GB
- **共识**：Windows 桌面端是所有工具的"质量短板"，CI 矩阵需扩充

### 3.6 桌面端与终端的体验对齐
- **Claude Code #41456 / #92825 / #92646**：状态栏缺失、会话丢失、子代理无法续接
- **Codex #29008**：macOS 缺少权限审批原生通知
- **Gemini CLI #21983**：Browser Agent 在 Wayland 下失败
- **共识**：用户已把 Desktop 当日常入口，但功能 parity 不足

### 3.7 多 Provider / 多模型路由
- **OpenCode**：Gemma 4 Ollama、Requesty、Bedrock GPT-5.6、DeepSeek websearch 全有兼容性问题
- **Pi #5363 / #9338 / #9323**：Bedrock Mantle、Kimi Responses、Fireworks 都需独立 provider
- **DeepSeek TUI #6007 / #5976**：OpenRouter Vendor 选择、计费覆盖
- **Copilot CLI #2943**：OpenRouter 集成（14 👍）
- **共识**：Provider 适配成本高，社区呼吁统一适配层

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线差异化 |
|------|---------|---------|--------------|
| **Claude Code** | 极致可扩展性 | 高阶开发者 / 平台工程师 | Function Hooks 提案（#91870）+ 插件目录热加载，定位"可编程中间件" |
| **OpenAI Codex** | 多模态生产力 | 全栈 / 桌面端用户 | Voice + Computer Use 双线押注，app-server 状态机加固 |
| **Gemini CLI** | 长上下文代码智能 | 大型代码库探索者 | AST 感知文件读取（#22745）+ Auto Memory 自动提取 |
| **Copilot CLI** | GitHub 生态入口 | 企业 / GitHub 深度用户 | 多模型路由（OpenRouter）+ 强化 MCP 集成 |
| **Kimi Code CLI** | 数据完整性优先 | 对文件安全敏感的用户 | 拒绝非 UTF-8 编辑（PR #2595），宁可失败也不损坏 |
| **OpenCode** | IDE 化全场景 | 重度 CLI 用户 / 跨设备开发者 | Desktop 扩展化架构（5 个 `@opencode/plugin-*-desktop` 包）+ SSH 持久化 |
| **Pi** | Provider 中立的多协议网关 | 需多模型路由的高级用户 | provider-neutral 抽象 + 扩展 API + OAuth 订阅用量查询 |
| **Qwen Code** | Web 全场景 + 本地模型 | 国内开发者 / 本地模型用户 | Web Shell 全场景化 + Playwright Browser SDK + 结构化按需召回记忆 |
| **DeepSeek TUI** | 目标驱动工作流 | 追求 Agent 可控性的用户 | `/goal` 模式 + Goal Gate 二次校验（提案中）+ 多 Provider 精确路由 |

**关键洞察**：
- **"可扩展性"成为头部工具的共同赛点**：Claude Code 的 Function Hooks、OpenCode 的 Desktop 扩展 SDK、Gemini CLI 的 SkillManager 都在试图把"插件"从 manifest-only 升级为可编程中间件
- **"可观测性"是新兴差异化**：Pi 的 `usage.cost.total`、OpenCode 的 TPS、DeepSeek TUI 的跨会话统计
- **Kimi 是唯一把"数据完整性"作为产品哲学公开化的工具**

---

## 5. 社区热度与成熟度

### 5.1 活跃度梯队

| 梯队 | 工具 | 信号 |
|------|------|------|
| **第一梯队（高活跃 + 高密度）** | OpenCode、Pi | PR 数 17-20+，单日有架构级重构 |
| **第二梯队（稳定 + 高诉求）** | Claude Code、Copilot CLI | 稳定版号（v2.1 / v1.0），Issue 集中但 PR 收敛 |
| **第三梯队（快速迭代）** | OpenAI Codex、Gemini CLI、Qwen Code | 多条发布线并行（alpha/preview/nightly），PR 与 bug 修复并进 |
| **第四梯队（社区信号弱）** | Kimi Code、DeepSeek TUI | Issue/PR 量少，由核心维护者驱动 |

### 5.2 成熟度信号

- **企业可用性**：Claude Code（v2.1+）、Copilot CLI（v1.0+）已达生产可用级别，但都存在频繁回归
- **快速演进**：Gemini CLI、Qwen Code 仍处预览/nightly 阶段，不建议生产
- **生态扩张期**：OpenCode 通过 Desktop 扩展 SDK 进入"平台化"阶段，Pi 通过 provider-neutral 抽象尝试成为"瑞士军刀"
- **维护者依赖度高**：Kimi Code、DeepSeek TUI 的 Issue/PR 高度集中在 1-2 位贡献者，存在 bus factor 风险

### 5.3 社区健康度指标

| 工具 | 关闭 Issue 比例 | PR 关闭率 | 长期高赞议题回应 |
|------|----------------|-----------|----------------|
| Copilot CLI | 低（#13 关闭但耗时 1 年） | 中 | 慢 |
| Claude Code | 高（hotfix 当日响应） | 低（PR 提交少） | 快 |
| Gemini CLI | 中 | 高（6/10 当日关闭） | 中 |
| OpenCode

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止日期**：2026-09-09 | **样本**：Top 20 PRs + Top 15 Issues

---

## 一、热门 Skills 排行（按社区关注度）

### 🥇 #1 PR #1298 — skill-creator 评测系统核心修复
- **功能**：修复 `run_eval.py` 永远报告 0% recall 的致命 Bug，并解决 Windows 子进程读取、trigger detection、并行 worker 等连锁问题
- **讨论热点**：直接对应高热度 Issue #556（12 评论），已积累 10+ 独立复现。描述优化循环目前正"基于噪声优化"，影响所有 skill 的 description 调优
- **状态**：OPEN（创建于 2026-06-10，最近更新 06-23）
- **链接**：https://github.com/anthropics/skills/pull/1298

### 🥈 #2 PR #83 — Skill 质量与安全分析器（meta-skills）
- **功能**：在 marketplace 中新增两个元技能——`skill-quality-analyzer`（五维质量评分：结构、文档、示例等）和 `skill-security-analyzer`
- **讨论热点**：呼应 Issue #492（43 评论，关于 anthropic 命名空间信任边界滥用），是社区安全感建设的重要补充
- **状态**：OPEN（创建于 2025-11-06，跨度较长）
- **链接**：https://github.com/anthropics/skills/pull/83

### 🥉 #3 PR #1628 — Hivemind：零成本多智能体编排
- **功能**：让 Claude Code 将机械性任务委派给 headless [opencode](https://opencode.ai) workers（跑在免费模型上），主模型只做规划/审查/合并
- **讨论热点**：核心洞察是"贵模型的稀缺资源是 context 而非智能"，与当前 Skills 调用成本焦虑形成强共鸣
- **状态**：OPEN（2026-08-21 创建）
- **链接**：https://github.com/anthropics/skills/pull/1628

### 4️⃣ PR #1367 — self-audit：四维推理质量门禁（v1.3.0）
- **功能**：交付前自动审计 AI 输出——先做机械文件验证，再按损坏严重度顺序进行四维推理审查
- **讨论热点**：直接对应 Issue #1385（"Reasoning Quality Gate Pipeline"提案，4 评论）。号称 universal，适用于任何项目/技术栈/模型
- **状态**：OPEN（2026-06-28 创建）
- **链接**：https://github.com/anthropics/skills/pull/1367

### 5️⃣ PR #514 — document-typography 排版质量控制
- **功能**：防止 AI 生成文档中的孤儿词、寡头段（widow）、编号错位等排版问题
- **讨论热点**：影响"Claude 生成的每一个文档"，切入点虽小但高频痛点
- **状态**：OPEN（2026-03-04 创建）
- **链接**：https://github.com/anthropics/skills/pull/514

### 6️⃣ PR #1627 — buffer-api：社交媒体 GraphQL 排程 Skill
- **功能**：为 Buffer GraphQL API 提供跨代理（Claude/Cursor/Codex/OpenClaw/Hermes/n8n）可移植的排程/分析能力
- **讨论热点**：体现 Skills 作为"Agent 时代通用 API 封装"的新范式（呼应 Issue #16）
- **状态**：OPEN（2026-08-21 创建）
- **链接**：https://github.com/anthropics/skills/pull/1627

### 7️⃣ PR #723 — testing-patterns 全栈测试模式
- **功能**：覆盖 Testing Trophy 模型、AAA 模式、React Testing Library、Playwright 等完整测试栈
- **讨论热点**：工程团队标准诉求，与"代码审查/测试生成"需求趋势强相关
- **状态**：OPEN（2026-03-22 创建）
- **链接**：https://github.com/anthropics/skills/pull/723

### 8️⃣ PR #486 — ODT（OpenDocument）读写转换
- **功能**：.odt/.ods 文档创建、模板填充、ODT→HTML 解析，定位 ISO 开源文档标准
- **讨论热点**：填补 LibreOffice/ODF 在 AI 工作流中的空白，是欧洲/政府/学术场景刚需
- **状态**：OPEN（2026-03-01 创建）
- **链接**：https://github.com/anthropics/skills/pull/486

---

## 二、社区需求趋势（基于 Issues 提炼）

| 趋势方向 | 代表 Issue | 评论热度 | 核心诉求 |
|---------|-----------|---------|---------|
| 🔒 **信任与安全边界** | [#492](https://github.com/anthropics/skills/issues/492) | **43** ⭐ | 社区 skill 借用 `anthropic/` 命名空间造成信任混淆，亟需官方审核/隔离机制 |
| 🏢 **企业级协作与分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | 团队/组织内 Skill 共享目前靠人工传文件，缺少企业级 Library |
| 🛠️ **基础设施可靠性** | [#556](https://github.com/anthropics/skills/issues/556), [#1487](https://github.com/anthropics/skills/issues/1487), [#1390](https://github.com/anthropics/skills/issues/1390) | 12/4/4 | `run_eval.py` 0% 触发、`claude-api` skill 注水 156k tokens、mcp-builder 评测全错——评测与上下文管理是基础设施级痛点 |
| 🧠 **长上下文/记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 提案 `compact-memory`，用符号化记法压缩 agent 持久状态 |
| 🤖 **Agent 安全治理** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED） | 6 | 治理、威胁检测、信任评分、审计追踪——安全可控的多 agent 系统 |
| 🔌 **互操作协议** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 将 Skills 暴露为 MCP，使任意软件都能消费同一套 AI 能力 |
| 🧹 **去重与插件卫生** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` 与 `example-skills` 重复内容撑爆 context |
| ☁️ **跨平台兼容** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | 在 AWS Bedrock 上使用 Skills 的官方支持 |

**总结**：社区在向"**企业级、可治理、可互操作**"演进——安全信任、组织分发、跨平台运行已成为下一阶段的核心期待。

---

## 三、高潜力待合并 Skills（活跃 OPEN PR）

按"议题相关性 × 工程影响"排序：

| PR | Skill | 影响面 | 关联 Issue | 优先级 |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | ⭐⭐⭐⭐⭐ 阻塞整个描述优化闭环 | #556 | **极高** |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality-analyzer / skill-security-analyzer | ⭐⭐⭐⭐⭐ 解决 #492 信任危机 | #492 | **极高** |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 推理质量门禁 | ⭐⭐⭐⭐ 通用交付质量保障 | #1385 | 高 |
| [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind 多代理编排 | ⭐⭐⭐⭐ 降本范式创新 | — | 高 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | ⭐⭐⭐ 高频小痛点 | — | 中 |
| [#723](https://github.com/anthropics/skills/pull/723) | testing-patterns | ⭐⭐⭐ 工程团队刚需 | — | 中 |
| [#486](https://github.com/anthropics/skills/pull/486) | ODT 文档处理 | ⭐⭐⭐ 补齐开源文档标准 | — | 中 |
| [#1627](https://github.com/anthropics/skills/pull/1627) | buffer-api | ⭐⭐ 跨代理互操作范式 | #16 | 中 |

> **观察**：所有 20 条热门 PR 均未合并，社区贡献已严重积压，建议 Anthropic 加速 triage 流程。

---

## 四、Skills 生态洞察（一句话）

> **当前社区最集中的诉求是"Skills 的工业化"——从分散的 Prompt 模板，进化为可信赖、可治理、可度量、可在企业级规模分发的基础设施，而评测体系（`run_eval.py`）失灵与命名空间信任危机是阻碍这一进程的两大拦路虎。**

---

# Claude Code 社区动态日报
**2026-09-09**

---

## 📌 今日速览

- **v2.1.266 紧急修复发布**：针对 v2.1.265 引入的 LLM-gateway/代理环境回归问题快速回滚，影响 `CLAUDE_CODE_USE_GATEWAY` 用户。
- **Function Hooks 提案引爆社区**：#91870 以 147 条评论、86 个 👍 领跑当日热点，被视为插件系统"10 倍能力升级"的契机。
- **Desktop 与 Cowork 体验问题集中暴露**：今日新增多条高优先级 issue，涵盖文件夹选择丢失、会话记录丢失、子代理中断等数据完整性与 UI 缺陷。

---

## 🚀 版本发布

### v2.1.266（紧急修复）
- **修复 v2.1.265 回归**：未文档化的 `CLAUDE_CODE_USE_GATEWAY` 环境变量不再单独触发 Cloud-gateway 强制登录行为，恢复了原本需同时设置 `ANTHROPIC_BASE_URL` 与 `ANTHROPIC_AUTH_TOKEN` 才生效的语义。  
  👉 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.266)

### v2.1.265（功能更新）
- **遥测对齐**：为通过 Claude Apps gateway 发送遥测的 Claude Desktop 与 Cowork 增加 `user.email` 与 `user.groups`，与终端会话保持一致。
- **插件目录支持**：`--plugin-dir` 现可指向插件集合文件夹，自动加载其中所有含 manifest 的子目录，新增/移除插件无需重启。  
   [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.265)

> ⚠️ 该版本引发了上述网关回归，因此被 v2.1.266 取代。已升级用户建议立即更新。

---

## 🔥 社区热点 Issues

| # | Issue | 关注度 | 重要性 |
|---|-------|--------|--------|
| [#91870](https://github.com/anthropics/claude-code/issues/91870) | **Function Hooks - 让插件强大 10 倍** | 💬147 👍86 | ⭐⭐⭐⭐⭐ |
| [#65961](https://github.com/anthropics/claude-code/issues/65961) | **Claude 默认生成冗长代码注释，忽略停止指令** | 💬31 👍203 | ⭐⭐⭐⭐⭐ |
| [#27242](https://github.com/anthropics/claude-code/issues/27242) | **压缩/plan-mode 清除后无任何方式回顾历史上下文** | 💬18 👍85 | ⭐⭐⭐⭐ |
| [#76694](https://github.com/anthropics/claude-code/issues/76694) | **Cowork: 新建项目的"选择文件夹"入口消失** | 💬16 👍19 | ⭐⭐⭐⭐ |
| [#41456](https://github.com/anthropics/claude-code/issues/41456) | **Desktop 应用缺少状态栏** | 💬15 👍62 | ⭐⭐⭐⭐ |
| [#70684](https://github.com/anthropics/claude-code/issues/70684) | **Sandbox SOCKS5 代理与 BSD nc 不兼容，SSH git 操作崩溃** | 💬7 👍24 | ⭐⭐⭐ |
| [#92825](https://github.com/anthropics/claude-code/issues/92825) | **Desktop 会话记录静默丢失，cliSessionId 被置空且无恢复路径** | 💬4 | ⭐⭐⭐⭐ |
| [#89690](https://github.com/anthropics/claude-code/issues/89690) | **modelPicker 跳过 opusplan 行，导致 Opus Plan Mode 完全不可选** | 💬5 | ⭐⭐⭐ |
| [#92646](https://github.com/anthropics/claude-code/issues/92646) | **Claude Desktop 完全屏蔽 SendMessage，子代理无法续接** | 💬3 | ⭐⭐⭐ |
| [#69267](https://github.com/anthropics/claude-code/issues/69267) | **Skill 的 `effort:` frontmatter 文档存在但运行时无效** | 💬2 | ⭐⭐⭐ |

**简评：**

- **#91870 Function Hooks**：核心想法是引入参数化 `$` 对象 + Express/Koa 风格的 `next` 续延模型，让插件既能深度修改 Claude Code 行为，又能通过副作用追踪保证安全。社区普遍认为是当前插件系统的"进化方向"。
- **#65961** 当日 👍 数（203）全场最高，反映"模型过度啰嗦"是开发者最高频痛点之一。
- **#27242** 指出三类场景（compact 后、plan-mode 清空、branch 切换）下历史上下文只能从 `transcript.jsonl` 翻找，UI 无任何入口。
- **#92825** 是 #79044 的延续，Desktop 用户报告会话在某些条件下 cliSessionId 被清空，转录文件无法关联，恢复无门。

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|----|------|
| [#63686](https://github.com/anthropics/claude-code/pull/63686) | **Stale/Autoclose 超时从 14 天延长到 90 天** | ✅ CLOSED | 修改 `scripts/issue-lifecycle.ts`，将 stale 标记与自动关闭的窗口从 14 天提升至 90 天，给长期讨论更充足的时间。 |

> 📭 过去 24 小时内仅有 1 条 PR 更新，仓库活跃度集中在 issue 端。维护团队近期主要忙于 bug 修复（v2.1.266 hotfix 即是例证）。

---

##  功能需求趋势

从过去 24 小时的 issue 分布提炼：

1. ** Hooks / Plugins 可扩展性（最热门）**
   - Function Hooks 提案试图引入可编程中间件模型（#91870），是目前最具共识的演进方向。
   - 同时存在多个 plugin 缺陷（#92601 hook ENOENT 死循环、#69267 skill frontmatter 无效）。

2. **🖥 Desktop / Cowork 体验对齐**
   - 状态栏缺失（#41456，62 👍）
   - 文件夹入口丢失（#76694）
   - 项目聊天排序混乱（#87723）
   - 执行模式（Local/Remote）可见性（#92885）
   - 远程模式下重启 App 会杀死后台任务（#92687）

3. ** 模型行为可控性**
   - 冗长注释无法关闭（#65961，203 👍）
   - Opus 过度投入简单调试任务消耗配额（#92970）
   - 模型从无关上下文"推断"出对禁止文件夹的访问权限（#92947）
   - 显式指令被"Closed Weighted Training"覆盖（#92352）

4. **🔍 TUI / 历史会话可访问性**
   - Compact 后无法回看历史（#27242）
   - 桌面端会话转录丢失（#92825）
   - 桌面端 `ListAgents` 提示使用不存在的 `SendMessage` 工具（#92134）

5. **🔐 沙箱与权限模型**
   - SOCKS5 代理破坏 SSH（#70684）
   - 后台模式权限对话框仅显示 Deny（#92974）
   - 桌面浏览器忽略网站白名单（#91495）

6. **🧰 基础设施细节**
   - 抑制更新通知但不关闭自动更新（#91356）
   - 修复 GrowthBook clientKey 400（#92966，回归问题）
   - 修复 Chat/Cowork 合并后的"选择文件夹"UI（#76694）

---

## 💬 开发者关注点

从反馈中提取的高频痛点：

1. **"Desktop ≠ Terminal" 的体验落差**
   开发者越来越把 Desktop 当作日常入口，但发现其缺少状态栏、会话恢复、子代理续接等终端核心能力。一连串 issue（#41456 / #92825 / #92646 / #92134）反映了对**功能 parity** 的强烈诉求。

2. **模型"听不懂"显式指令**
   不论是 CLAUDE.md、memory 还是 skill 中明确写"只回答所问"，模型仍会追加解释、推断用户未表达的意图（#92971、#92947、#92352、#65961）。社区呼吁更严格的指令遵循机制，而不是依赖 prompt 反复纠正。

3. **更新带来回归**
   近期几乎每个小版本都伴随回归问题（v2.1.265 → v2.1.266、#92292 symlink 回归、#92966 GrowthBook 复发）。开发者对**自动化测试覆盖度**和**回滚速度**提出更高期待。

4. **插件系统能力天花板**
   v2.1.265 已经允许 `--plugin-dir` 加载目录，社区仍不满足——Function Hooks（#91870）反映出"插件应能修改运行时行为"的下一步期待，超越当前 manifest-only 的能力边界。

5. **数据可访问性 / 可恢复性**
   多个 issue 都指向"数据存在但 UI 无法访问"（#27242、#92825、#79044 的延续），这是开发者对工具**可信度**的根本要求。

6. **配额与成本透明度**
   Fable 5.1 不可达（#91488）、Opus 配额消耗异常（#92970）显示，社区希望更直观的成本归因与模型替代路径。

---

> 📅 **下期看点**：建议关注 #91870 Function Hooks 提案的官方回应、#65961 注释啰嗦问题的修复进展，以及 Desktop 端是否在后续小版本恢复会话转录可恢复性。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

今天 Codex 仓库的核心动态集中在 **Windows 平台稳定性** 与 **app-server 生命周期管理** 两类问题：用户长期关注的 Windows Computer Use 截图失败、Windows 沙箱恢复异常等 Bug 仍在持续讨论中；同时，0.154.0-alpha 系列发布了两个 Rust 预发布版本，合并了 20 余项针对 app-server 优雅关闭、事务化状态变更、Voice 资源签名打包等基础设施改进，呈现出"夯实底盘"的工程节奏。值得注意的是，今日出现的 **#43998（数据丢失 Bug）** 与 **#43971（MCP 进程池泄漏）** 引发开发者关注，建议近期升级前留意。

---

## 🚀 版本发布

过去 24 小时内发布两个 Rust 预发布版本：

| 版本 | 链接 |
|---|---|
| rust-v0.154.0-alpha.8 | https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.8 |
| rust-v0.154.0-alpha.7 | https://github.com/openai/codex/releases/tag/rust-v0.154.0-alpha.7 |

0.154.0-alpha 系列聚焦于 app-server 状态机的健壮性，包括优雅关闭期间的新工作阻塞、线程 RPC 与委托工作同步、SQLite 事务化 attachment 等（详见 PR #43949、#43950、#43959、#43943）。如需在生产环境使用，请等待稳定版。

---

## 🔥 社区热点 Issues

以下为过去 24 小时内讨论最活跃、影响面较大的 Issue：

### 1. #26892 ⭐31 💬89 [已关闭]
**`gpt-5.5` 元数据可显示但请求返回 404「Model not found」**
本地模型列表声称 `gpt-5.5` 可用，但实际请求持续返回 404，而 `gpt-5.4` 正常；Desktop 与 CLI 复现一致。这是过去三个月热度最高的模型可用性问题，89 条评论说明社区对**模型元数据与实际服务可用性一致性**的强烈诉求。
🔗 https://github.com/openai/codex/issues/26892

### 2. #25178 ⭐23 💬49 [开放]
**Windows 10 22H2 下 Computer Use 截图失败（SetIsBorderRequired）**
调用 `get_window_state` 请求截图时崩溃，错误码 `0x80004002`，但窗口列举、激活、键盘输入等功能正常。Computer Use 是 Codex 重要的差异化能力，该 Bug 严重影响 Windows 用户的体验完整性。
🔗 https://github.com/openai/codex/issues/25178

### 3. #42663 ⭐5 💬12 [开放]
**Remote SSH 环境下 VS Code Server Node 22 无法解析 `using` 导致扩展激活失败**
新版 ChatGPT 扩展（26.5901.22334）在远程 Ubuntu 主机上启动失败，原因是远端 Node 22 不支持 C# 风格 `using` 语句。这是**IDE 扩展 + 远程开发**交叉场景的兼容性回归。
🔗 https://github.com/openai/codex/issues/42663

### 4. #43058 💬9 [开放]
**gpt-6-astra 提示词被误判为违反使用政策**
v0.153.4 下使用 `gpt-6-astra` 时即便合规提示也被拒，社区怀疑新模型的安全分类器过于激进。此类问题会影响开发者对该模型的信任度与采用意愿。
🔗 https://github.com/openai/codex/issues/43058

### 5. #34841 💬9 [开放]
**Windows 沙箱在 `deny_read_acl_state.json` 损坏为 22 字节 NUL 时无法恢复**
系统崩溃可能将沙箱 ACL 状态文件清零，沙箱随后永久失效且无自我修复机制。**沙箱可恢复性** 是企业级部署的关键指标。
🔗 https://github.com/openai/codex/issues/34841

### 6. #36439 ⭐4 💬5 [开放]
**Codex CLI 提示输入框支持鼠标点击定位光标**
相比 Claude Code，Codex CLI 仍只能通过键盘在多行 prompt 中移动光标，编辑体验落后。这一细节功能获得 4 颗 👍，反映社区对**TUI 编辑体验**的期待。
🔗 https://github.com/openai/codex/issues/36439

### 7. #42757 💬5 [开放]
**macOS 上 `cua_repl` trusted worker 丢失 `NODE_REPL_TRUSTED_SERVICES` 并在 Browser 附加前崩溃**
Computer Use 的 Browser 附加链路在 macOS 25.6 上不稳定，影响 app 内浏览器集成。
🔗 https://github.com/openai/codex/issues/42757

### 8. #38762 💬4 [开放]
**`migrate-rollouts` 迁移后子代理线程投影历史为空**
0.148.0-alpha.9 起的本地存储迁移会丢弃子代理线程的历史投影，属于**离线状态迁移**的可靠性问题。
🔗 https://github.com/openai/codex/issues/38762

### 9. #29008 ⭐3 💬4 [开放]
**macOS Codex Desktop 在等待权限审批时缺少原生通知**
当 Codex 在等待用户授权时常常在后台运行，用户容易错过。开发者明确要求 native macOS 通知横幅，提升**人机协作节奏**。
🔗 https://github.com/openai/codex/issues/29008

### 10. #43998 💬1 🚨 [开放 · 严重数据丢失]
**递归删除导致用户项目源代码永久丢失**
Codex 执行了不安全的递归删除命令，导致源代码被永久清除，且无备份恢复机制。**这是今日最严重的问题**，所有 Windows 用户在执行删除类操作前应提高警惕，建议官方尽快发布修复。
🔗 https://github.com/openai/codex/issues/43998

---

## 🛠️ 重要 PR 进展

### 1. #44002 — 封装已执行工具调用元数据记录
引入 `ExecutedToolCalls` 抽象，集中化特性检查、调用记录与结果来源查找，影响 session、tool runtime、MCP 与 Code Mode 调用方。是**工具调用可观测性**的一次重要重构。
🔗 https://github.com/openai/codex/pull/44002

### 2. #43994 — 切换线程时清除过期 transcript
修复线程切换后历史事件污染新线程 replay 的问题，提升**会话边界正确性**。
🔗 https://github.com/openai/codex/pull/43994

### 3. #43983 — macOS 发布包中打包签名后的语音资源
为 Apple Silicon 与 Intel 构建、签名并公证 `codex-voice-host`，并将其纳入主包与 DMG。**语音能力正式进入 macOS 正式分发通道**。
🔗 https://github.com/openai/codex/pull/43983

### 4. #43959 — 优雅关闭期间阻塞新的 app-server 工作
通过关闭 gate 阻止客户端请求与自动续接在 draining 期间启动新工作，并统计"准备中/提交中"请求。**改进服务关停语义**。
🔗 https://github.com/openai/codex/pull/43959

### 5. #43950 — app-server 线程 RPC 持续到委托工作完成
修复线程启动、resume、rollback 比其请求处理器提前结束的问题，避免连接排空过早完成。
🔗 https://github.com/openai/codex/pull/43950

### 6. #43949 — 状态运行时新增事务化线程 attachment 变更
用 SQLite 事务实现 `add_thread_attachment` / `remove_thread_attachment`，重复添加幂等。**StateRuntime 的可靠性升级**。
🔗 https://github.com/openai/codex/pull/43949

### 7. #43954 — 缓存受保护 shell 快照并加固清理路径
避免凭据代理命令每次重建快照，同时清理退出 shell 仍持有管道的子进程，防止凭据泄露。
🔗 https://github.com/openai/codex/pull/43954

### 8. #43947 — MCP OAuth 刷新失败时暴露重连信号
区分普通错误与"需要重新认证"，使 MCP 工具调用可主动提示用户重连。
🔗 https://github.com/openai/codex/pull/43947

### 9. #43948 — 在 doctor 中展示 app-server 更新配置
让 `codex doctor` 显示后台服务器的自动更新开关与间隔，**诊断可观测性增强**。
🔗 https://github.com/openai/codex/pull/43948

### 10. #43942 — Worktree 浏览器展示所有者详情并增加确认删除
显示所有者线程标题、相对更新时间、归档/不可用状态；新增带确认的删除流程，提升**多线程协作的可控性**。
🔗 https://github.com/openai/codex/pull/43942

---

## 📈 功能需求趋势

从今日 Issues 提炼出社区关注的功能方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Windows 平台稳定性** | #25178, #34841, #42520, #37212 | 🔥🔥🔥 |
| **模型元数据一致性 / 新模型可用性** | #26892, #43058 | 🔥🔥🔥 |
| **Computer Use 与浏览器控制** | #25178, #42757 | 🔥🔥 |
| **会话/线程历史持久化** | #44000-#43981 系列（同一作者批量提交）, #38762 | 🔥🔥 |
| **TUI 编辑体验** | #36439, #41626 | 🔥 |
| **macOS 桌面体验** | #29008, #42757 | 🔥 |
| **MCP / OAuth 集成** | #43971, #43947 (PR) | 🔥 |
| **IDE 扩展远程开发** | #42663 | 🔥 |
| **数据安全（删除/沙箱）** | #43998, #34841 | 🔥🔥 |

值得注意的"信号事件"：**单一作者 takakif-creator 在 24 小时内批量提交了约 18 条相同主题**（Codex Desktop reader 暴露持久化 per-message 时间戳）的 enhancement 请求，说明这是社区长期未被满足的需求，可作为后续规划的输入。

---

## 👨‍💻 开发者关注点

综合今日 Issue / PR 反馈，开发者社区集中表达以下痛点：

1. **数据安全是头号焦虑**：`#43998` 报告的递归删除导致源码永久丢失事件，引发了开发者对 Codex 默认删除策略的强烈不信任。强烈建议官方在破坏性操作前增加二次确认与回收站机制。

2. **Windows 仍是体验短板**：截图失败、沙箱 ACL 损坏、Chrome 集成配置残留、升级后项目分组丢失……Windows 桌面 App 的边界情况明显多于 macOS，**企业 Windows 用户群体**是最大的受影响面。

3. **模型可用性透明度**：gpt-5.5 元数据与实际服务不同步问题暴露了客户端缺乏对**模型下线的优雅降级**，开发者希望前端能区分"已下线"与"暂时不可用"。

4. **Voice 与 Computer Use 成为新焦点**：macOS 语音资源签名打包（#43983）与 Computer Use 截图失败（#25178）同时出现，说明 OpenAI 正把多模态交互作为 Codex 的下一阶段差异化能力，开发者既要能力也急需稳定性。

5. **基础设施稳定性优先于新功能**：今日合并的 20 个 PR 中，超过一半涉及 app-server 生命周期、SQLite 事务、State 运行时健壮性。社区普遍认可这一"夯实底盘"的节奏，但同时期待功能可见性的同步推进。

6. **MCP 生态需要更细粒度的认证反馈**：OAuth token 过期后用户应被明确告知"需要重新授权"，而非沉默失败（#43947 PR + #43971 进程泄漏）。

---

*本日报基于 GitHub 公开数据生成，所有数据截止 2026-09-09 当日。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

今日 Gemini CLI 同步推进 **v0.59.0 正式版**、**v0.60.0-preview.0 预发布**及 **v0.61.0 nightly** 三条发布线，核心变更聚焦沙箱安全加固、子智能体可靠性以及 MCP/认证流程修复。社区议题则集中爆发在 **Auto Memory 系统稳定性**、**子智能体执行挂起**与 **Browser Agent 在 Linux/Wayland 环境下的兼容性**三大方向——其中 Auto Memory 相关 Issue 由维护者 SandyTao520 在 5 月集中提出后，今日仍为社区高关注焦点。

---

## 🚀 版本发布

| 版本 | 类型 | 主要内容 |
|---|---|---|
| [v0.59.0](https://github.com/google-gemini/gemini-cli/releases) | 稳定版 | 常规自动化 Changelog 与版本号 bump，无显著新特性 |
| [v0.60.0-preview.0](https://github.com/google-gemini/gemini-cli/releases) | 预发布 | 修复 web fetch 工具的目标校验与连接路由；MCP OAuth 流程强制执行 RFC 9207 颁发者身份识别 |
| [v0.61.0-nightly.20260909.ged2ac40df](https://github.com/google-gemini/gemini-cli/releases) | Nightly | 缓解 Windows NTFS 8.3 短文件名（SFN）路径问题；沙箱容器内隔离 settings 目录 |

**观察**：v0.60 预览版的安全相关修复（OAuth 颁发者校验、web fetch 路由）反映出团队对供应链与身份验证链路的持续收紧。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** — *Subagent recovery after MAX_TURNS 错误地报告为 GOAL 成功*（💬13，👍2，P1）
   关键可靠性 Bug：`codebase_investigator` 子智能体在达到最大回合限制时仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了中断事实。长期未修复，已被标记 `need-retesting`。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** — *Zero-Dependency OS 沙箱 & 后执行意图路由*（💬9，👍1，P2）
   提议利用 Gemini 3 模型原生 bash 亲和性，构建无依赖操作系统级沙箱，平衡安全与 UX。Workstream-rollup 中的旗舰级增强提案。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** — *Generalist agent 挂起*（💬8，👍8，P1）
   一旦 CLI 委派给 generalist agent 即无限挂起，最长等待 1 小时仍未恢复。👍 数与评论数并列最高，反映用户极度受困。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** — *评估 AST 感知文件读取/搜索/映射的影响*（💬7，👍1，P2）
   Epic 级提案：用 AST 工具替代粗粒度 read_file，减少 context rot 与 tokens 消耗。社区已讨论 `tilth`、`glyph` 等备选。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** — *Gemini 很少主动调用 skills 与子智能体*（💬6，👍0，P2）
   即便配置了 gradle、git 等描述清晰的 skills，模型也不会主动调用，只有在显式指示后才使用。揭示了 **agent 自驱能力** 的核心短板。

6. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** — *Shell 命令结束后仍卡在 "Waiting input"*（💬4，👍3，P1）
   高频交互卡顿类问题：简单 CLI 命令已结束，但终端 UI 一直显示等待用户输入，影响日常使用流畅度。

7. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)** — *Auto Memory 增加确定性脱敏并减少日志*（💬5，👍0，P2，security）
   Auto Memory 后台提取 Agent 会先将 transcript 内容送入模型上下文再让模型脱敏，存在泄露风险。属于安全优先级 Issue。

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)** — *Auto Memory 避免对低信号 session 无限重试*（💬4，👍0，P2）
   Auto Memory 提取 Agent 因 `read_file` 失败而反复回到同一索引项，引发无限循环。

9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** — *Browser Agent 韧性增强：自动接管与锁恢复*（💬4，👍0，P3，feature）
   当前 BrowserManager 采取 fail-fast 策略，当 persistent 模式遇到已锁定的浏览器实例时直接失败，缺少自动接管机制。

10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)** — *Browser 子智能体在 Wayland 下失败*（💬4，👍1，P1）
    Browser agent 在 Wayland 桌面环境下报 "Termination Reason: GOAL" 失败，Linux 桌面用户主流配置，影响面广。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| 1 | [#29067](https://github.com/google-gemini/gemini-cli/pull/29067) | ✅ CLOSED | **fix(a2a-server)**：移除误导性的 securitySchemes 与硬编码凭据，让 agent metadata 与"本地开发无认证"设计一致 |
| 2 | [#29089](https://github.com/google-gemini/gemini-cli/pull/29089) | ✅ CLOSED | **fix(core)**：将 `abortSignal` 透传至 `retryWithBackoff`，修复 SessionSummaryService、分类器等的取消语义 |
| 3 | [#29088](https://github.com/google-gemini/gemini-cli/pull/29088) | ✅ CLOSED | **fix(vscode-ide-companion)**：解决 `IdeServer.stop()` 因长连接 MCP 流无法 drain 导致 VS Code 扩展无法正常 deactivate |
| 4 | [#29087](https://github.com/google-gemini/gemini-cli/pull/29087) | ✅ CLOSED | **fix(cli)**：基于 `proper-lockfile` 防止两个 CLI 进程并发安装/更新同一扩展时的竞态 |
| 5 | [#29063](https://github.com/google-gemini/gemini-cli/pull/29063) | ✅ CLOSED | **fix(core)**：修复非交互模式下 Plan Mode 永久等待用户反馈导致 hang 的问题（`-p` + `-y` 组合） |
| 6 | [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) | 🟢 OPEN | **fix(cli), security**：修复 macOS Seatbelt 等受限环境下启动 CLI 时崩溃（`useGitBranchName` hook 在受限 `.git` 目录下） |
| 7 | [#29156](https://github.com/google-gemini/gemini-cli/pull/29156) | 🟢 OPEN | **fix(core)**：停止将 `GIT_CONFIG_GLOBAL/SYSTEM` 指向 `/dev/null`，让 shell 命令可访问用户真实 git 配置 |
| 8 | [#29155](https://github.com/google-gemini/gemini-cli/pull/29155) | 🟢 OPEN | **fix(core)**：`isEmpty()` 正确解码 BOM 内容（UTF-16/UTF-32），修复 `validatePlanContent` 误判 |
| 9 | [#29151](https://github.com/google-gemini/gemini-cli/pull/29151) | 🟢 OPEN | **fix(core)**：SkillManager 大小写不敏感匹配，解决 workspace skill 覆盖内置/扩展 skill 的命名冲突 |
| 10 | [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | 🟢 OPEN | **fix(sandbox)**：加固沙箱文件系统边界，用净化后的配置替代宿主目录挂载，统一使用 realpath 解析 |

**整体观察**：今日 6 个已关闭 PR 全数为 **P1/P2 Bug 修复**，集中在身份认证、资源清理、子进程竞态——属于"补课式"工程化修复，质量信号积极。

---

## 📈 功能需求趋势

从今日活跃议题（含 P3 长期跟踪）提炼出社区最关注的五个方向：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| 🛡️ **沙箱与安全加固** | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | RFC 9207、SFN 缓解、OAuth 校验同时推进；Issue 提案跨 Nightly 多个 PR 落地 |
| 🧠 **Agent 自驱能力与子智能体** | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | 社区反复要求 agent 自动调用 skills/sub-agents、轨迹可见、配置可覆盖 |
| 🌳 **AST 感知代码理解** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) | 围绕"如何把 36.6k baseline tokens 降下来"展开，社区已提名 `tilth` / `glyph` |
| 💾 **Auto Memory 系统** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | 同一维护者集中治理 4 个相关 Bug，主题为重试、脱敏、补丁校验 |
| 🌐 **Browser Agent 韧性** | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267) | Lock 恢复、Wayland 兼容、配置覆盖三类问题并列，提示底层 BrowserManager 重构压力 |

---

## 💬 开发者关注点（痛点 & 高频需求）

1. **🚨 Agent 挂起与状态失真**
   `#21409`（generalist agent 永久 hang）、`#25166`（shell 完成后 UI 卡 Waiting input）、`#22323`（MAX_TURNS 误报 GOAL）三连——反映出 **agent 执行链路缺乏统一超时与终态判定机制**，是当前最尖锐的可靠性痛点。

2. **🔁 Auto Memory 系统的"自我循环"风险**
   多个 SandyTao520 提出的 Issue 揭示 Auto Memory 提取 Agent 容易陷入"低信号 session 反复重试 → 反复失败"的循环，且脱敏在内容入模型上下文之后才发生，存在 **隐私与稳定性双重风险**。

3. **🧩 子智能体配置不生效**
   `#22267`（Browser Agent 忽略 settings.json 的 maxTurns）、`#20079`（symlink 不被识别为子智能体）——配置层与运行层之间存在 **注册/合并逻辑漏洞**，影响企业级部署。

4. **🐚 Shell 工具与 Git 生态的过度隔离**
   `#29156` 反映出此前 ShellExecutionService 为安全考虑将 `GIT_CONFIG_*` 指向 `/dev/null`，副作用波及所有 shell 命令。**安全与功能性的边界** 需要更细颗粒度。

5. **🪟 Linux 桌面（Wayland）/ 非主流环境兼容**
   Browser Agent 在 Wayland 下失败、macOS Seatbelt 下崩溃（`#29163`）、NTFS SFN 路径问题（`#29116`）——平台覆盖度问题持续出现，提示 **CI 跨平台测试矩阵需要扩充**。

6. **📊 上下文效率与"firehose"问题**
   `#19561`（Tactful Extraction）、`#22745`（AST 感知）——开发者对每回合 36k+ tokens 的基线不满，期望 **层次化、手术式**的代码检索路径。

---

*日报由 Gemini CLI 社区数据自动生成，欢迎反馈与改进建议。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-09-09
**仓库：** github.com/copilot-cli
**数据来源：** github.com/github/copilot-cli

---

## 📌 今日速览

今日 Copilot CLI 发布了 **v1.0.84-2 / v1.0.84-3** 两个补丁版本，重点完善了 Vim 编辑模式（社区呼声最高的 Issue #13 终于关闭）与 MCP OAuth 连接稳定性。同时，Issue 活跃度居高不下，**会话（Session）**、**MCP 集成**、**权限管理（Permissions）** 仍是社区反馈最密集的三大方向，其中会话恢复失败、TUI 性能问题、Windows 桌面端的 Local 会话创建冲突被多位用户标为重点。

---

## 🚀 版本发布

### v1.0.84-3（修复）
- `/copy` 命令现在会一并包含任务完成消息（如有）
- 使用 OAuth 认证的 MCP 服务器在会话启动阶段连接更加稳定

### v1.0.84-2（新增 / 改进）
- **Vim 模式正式全量开放**：在 Composer 中执行 `/vim` 或将 `editorMode` 设置为 `vim` 即可启用模态编辑，键入时会在 UI 中显示当前模式
- **Windows 沙箱改进**：在受支持的策略下，交互式 shell 命令被拒绝时会被记录到 blocked accesses 日志中

🔗 [查看所有 Release](https://github.com/github/copilot-cli/releases)

---

## 🔥 社区热点 Issues

以下按"问题影响力 + 社区反馈热度"综合排序，挑选出 10 个最值得关注的话题：

### 1. [#13 Vim 输入模式支持](https://github.com/github/copilot-cli/issues/13) — ✅ 已关闭
- **状态：** CLOSED | 👍 76 | 💬 11
- **重要性：** 长期高赞需求（创建于 2025-09-25），在 v1.0.84-2 中已正式落地。这是过去一年里呼声最高的编辑器功能之一，本次合并体现了 GitHub 对社区长期诉求的响应速度。
- **社区反应：** 大量 Vim/Neovim 用户长年累月跟进此帖，76 个 👍 是仓库内罕见的"百赞级"Issue。

### 2. [#4756 Windows 必须先归档所有闲置会话才能创建新 Local 会话](https://github.com/github/copilot-cli/issues/4756) — 🟢 Open
- **状态：** OPEN | 👍 19 | 💬 6
- **重要性：** 影响 Windows Copilot Desktop 1.1.15 的核心工作流；用户期望在同一项目中并行多个 Local 会话，但当前逻辑强制独占。

### 3. [#4742 Desktop 1.1.15 无法在同一项目中开启第二个 Local 会话](https://github.com/github/copilot-cli/issues/4742) — 🟢 Open
- **状态：** OPEN | 👍 5 | 💬 10
- **重要性：** 与 #4756 同源的并发会话缺陷，评论区出现多个用户的复现报告，疑似 1.1.15 的回归问题。

### 4. [#2861 `/compact` 在 Opus 4.6 上连续三次返回空响应](https://github.com/github/copilot-cli/issues/2861) — 🟢 Open
- **状态：** OPEN | 👍 4 | 💬 6
- **重要性：** 触及会话压缩这一关键可靠性路径；Opus 4.6 是付费用户的常用模型，3 次自动重试全失败会直接打断长任务。

### 5. [#2943 OpenRouter 模型集成](https://github.com/github/copilot-cli/issues/2943) — 🟢 Open
- **状态：** OPEN | 👍 14 | 💬 3
- **重要性：** 长期高赞需求（创建于 2026-04-24），用户希望 Copilot CLI 复用 GitHub Copilot Chat 已支持的 OpenRouter 通道。👍 14 表明用户对"多模型路由"有持续需求。

### 6. [#4664 长会话恢复时 Node.js 堆内存溢出崩溃](https://github.com/github/copilot-cli/issues/4664) — 🟢 Open
- **状态：** OPEN | 👍 2 | 💬 7
- **重要性：** 直接导致历史会话不可用；Node 进程已逼近系统限制，触发崩溃的时间点在恢复阶段而非运行时，是会话加载层的架构性问题。

### 7. [#4612 FileWatch 事件死循环冻结 TUI 并撑爆日志（13 GB）](https://github.com/github/copilot-cli/issues/4612) — 🟢 Open
- **状态：** OPEN | 👍 1 | 💬 9
- **重要性：** 影响"恢复后会话"的可用性：TUI 卡死后只能 kill 进程，且日志无界增长可能耗尽磁盘。

### 8. [#1787 按类型可折叠的输出区块（思考 / 工具 / 消息）](https://github.com/github/copilot-cli/issues/1787) — 🟢 Open
- **状态：** OPEN | 👍 2 | 💬 2
- **重要性：** 体现社区对 TUI 信息密度管理的诉求，在长 Agent 任务中能显著提升可读性。

### 9. [#3772 MCP 注册表需要 OAuth/Token 鉴权读取](https://github.com/github/copilot-cli/issues/3772) — 🟢 Open
- **状态：** OPEN | 👍 5 | 💬 1
- **重要性：** 企业级部署 MCP 的核心阻塞点。Azure API Center 等注册表不能匿名暴露，社区希望 Copilot CLI 支持带凭据的注册表读取。

### 10. [#1724 实时展示 Agent 内部 TODO 列表](https://github.com/github/copilot-cli/issues/1724) — 🟢 Open
- **状态：** OPEN | 👍 11 | 💬 1
- **重要性：** Agent 可视化的典型诉求（👍 11 表明关注度很高），参考对象是 opencode 等同类工具的侧边栏实现。

---

## 🛠️ 重要 PR 进展

过去 24 小时 PR 更新较少，以下 4 条仍值得记录：

### 1. [#4770 文档化 WebSocket 响应端点的关闭方式](https://github.com/github/copilot-cli/pull/4770) — 🟢 Open
- **作者：** 1fanwang
- **要点：** 当模型宣告的 WebSocket 响应通道不可用（网络封锁或出现 `400 input item ID does not belong to this connection`）时，存在一个可用的"逃生口"配置，但官方文档并未说明。本 PR 旨在补齐文档。

### 2. [#4761 install 脚本在不支持的操作系统上给出明确报错](https://github.com/github/copilot-cli/pull/4761) — ✅ Closed
- **作者：** 1fanwang
- **要点：** 修复 FreeBSD 上的误导性提示"Windows detected but winget not found"。让 `install.sh` 正确识别并拒绝不支持的操作系统。

### 3. [#4762 install: report unsupported operating systems](https://github.com/github/copilot-cli/pull/4762) — ✅ Closed
- **作者：** devm33
- **要点：** 与 #4761 目标相同——让安装脚本将非 macOS / Linux 平台标记为 unsupported。两个 PR 均已合并，说明该修复已落地。

### 4. [#4100 安全性修复](https://github.com/github/copilot-cli/pull/4100) — ✅ Closed
- **作者：** huangyoufeng76-debug
- **要点：** 仅描述为"安全性"，具体内容未公开；可能是安全相关的内部补丁。

> 注：今日活跃 PR 数量较少（仅 4 条），其中 3 条已关闭。下表保留了展示需求中的前 4 条最值得关注的 PR。

---

## 📈 功能需求趋势

通过对过去 24 小时活跃 Issue（含历史被顶上来的）的主题归类，社区诉求主要集中在以下方向：

| 趋势方向 | 代表性 Issue | 关注度信号 |
|---|---|---|
| **MCP 生态深化**（OAuth、取消、Profiles、注册表鉴权、工具发现） | #3772、#2235、#4759、#4753、#4582、#4773 | 数量最多，跨认证 / 企业 / 协议层 |
| **会话（Session）可靠性** | #4612、#4664、#4505、#4755、#2836、#4753 | 高频"恢复失败 / 卡死 / OOM" |
| **多模型 / 多供应商接入** | #2943（OpenRouter）、#4623（Gemini 兼容性） | 👍 14 等长尾高赞 |
| **TUI 体验改进**（Vim、可折叠区、CPU 占用、Todo 侧栏） | #13、#1787、#1724、#4750 | Vim 模式已落地，可折叠/TODO 是下一波 |
| **权限策略与 YOLO 模式** | #4757、#4696、#4609 | 涉及 fail-closed、超时失效、docker 沙箱绕过 |
| **桌面端 / 跨平台稳定性** | #4742、#4756、#4614、#4765、#4531 | Windows 桌面 1.1.15 回归问题集中爆发 |

---

## 👨‍💻 开发者关注点

总结过去 24 小时内开发者反馈中的高频痛点：

1. **MCP 集成的"最后一公里"**
   - OAuth 流程与 Entra ID 不兼容（#4582）
   - 会话恢复时 MCP 连接被过早取消，~1s vs ~16s 的退化（#4753）
   - MCP 取消协议未实现（#4759）
   - 已加载命名空间被重复发现时报"Found 0 tools"，误导 Agent 跳过工作流（#4773）

2. **长会话的脆弱性**
   - JS 堆内存溢出（#4664）、FileWatch 死循环（#4612）、stale connection item ID（#4505）、session 永久 wedge（#4755）。这些 Bug 都指向同一事实：**会话恢复路径缺乏边界保护**，一旦历史会话变大或被中断，恢复过程自身就成为崩溃源。

3. **Windows 桌面端的并发缺陷**
   - 1.1.15 升级后无法并行多个 Local 会话（#4742、#4756），不少用户需要每次手动归档后才能继续工作。

4. **权限策略过于激进或过于保守**
   - `--yolo` 在无托管策略账号上仍被 fail-closed 永久禁用（#4757）
   - 长时间闲置后 `--yolo` 自动失效（#4696）
   - 反过来，Docker 沙箱中又完全跳过工具审批（#4609）
   - 两侧用户的报告表明：**权限策略在"宽松/严格"两端都缺乏可预测性**。

5. **TUI 资源占用与可读性**
   - 闲置时也持续占用 1–4 个 CPU（#4750），可折叠输出区、实时 TODO 等需求被反复提及。

6. **多模型兼容性问题被低估**
   - Gemini 模型对 MCP 工具 schema 中 union type 的 `items` 报错（#4623），GPT/Claude 不受影响 —— 提示官方在引入新模型时需要更系统的 schema 兼容性测试。

---

*日报基于 github.com/github/copilot-cli 过去 24 小时数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报  
**日期：2026-09-09**  
**数据范围：过去24小时**

## 1. 今日速览

过去24小时内，Kimi Code CLI 没有新版本发布，也没有 Issue 更新。当前唯一值得关注的动态是 PR **#2595** 的持续更新：项目正在修复 `StrReplaceFile` 在处理非 UTF-8 文件时可能静默替换并破坏原文件内容的问题。整体来看，今日社区活动较少，重点集中在数据完整性和文件编码安全。

## 2. 版本发布

过去24小时内无新版本发布。

## 3. 社区热点 Issues

过去24小时内没有更新的 Issue，因此暂无值得列出的 Issue，也无法基于本期数据筛选出 10 个热点问题。

仓库地址：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

## 4. 重要 PR 进展

### 1. [#2595 fix(StrReplaceFile): refuse to edit files that are not valid UTF-8](https://github.com/MoonshotAI/kimi-cli/pull/2595)

- **状态**：Open
- **作者**：shoemoney
- **更新日期**：2026-09-08
- **内容**：`StrReplaceFile` 原本会以 `errors="replace"` 方式解码整个文件，再将修改后的字符串写回。这样一来，即使文件中的无效 UTF-8 字节位于编辑范围之外，也可能在写回时变成 Unicode 替换字符 `U+FFFD`，造成不可逆的数据损坏。
- **修复方向**：当文件不是合法 UTF-8 时拒绝编辑，避免 CLI 对文件内容进行隐式转换。
- **关联问题**：解决 #2591。
- **社区反应**：当前记录为 0 个赞，未提供有效评论数据。

该 PR 反映了开发工具中一个重要的问题：编辑器或命令行工具应优先保证原始文件内容不被静默修改，而不是通过替换非法字符继续执行操作。

## 5. 功能需求趋势

由于过去24小时内没有新的或更新的 Issue，本期无法可靠统计社区整体的功能需求趋势。仅从 PR #2595 可以观察到以下方向：

- **文件编码安全**：需要明确识别并处理非 UTF-8 文件。
- **内容完整性保护**：在执行写回操作前增加校验，避免无效字节被不可逆替换。
- **更安全的默认行为**：对于无法安全解析的文件，宁可拒绝操作，也不应自动降级处理。

以上结论仅代表今日唯一活跃 PR，不能视为全量社区需求趋势。

## 6. 开发者关注点

### 避免静默数据损坏

开发者特别关注工具是否会修改原始文件内容。对非 UTF-8 文件使用替换字符虽然可以继续执行，但可能导致不可逆的数据丢失，因此更安全的做法是在写回前进行校验并拒绝编辑。

### 文件解析失败时的可预测行为

当输入文件无法按预期编码读取时，CLI 应提供明确、可理解的失败行为，而不是继续处理并返回看似成功的结果。

### 提升编辑工具的可信度

该修复有助于提升 Kimi Code CLI 在处理非标准或异常文件时的可靠性，减少因工具行为导致的意外内容变化和排障成本。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-09**

---

## 📌 今日速览

今天是 OpenCode 仓库的密集提交日，虽无新版本发布，但合并了 **20+ 个 PR**，涉及 CLI 重构、Desktop 扩展化架构、SSH 远程连接、Compaction 优化等重大变更。Issue 端亮点集中在 **模型 Provider 兼容性**（Gemma 4、Kimi、Bedrock GPT-5.6）和 **Desktop/UX 体验**（SSH、子会话链接、终端行为）。社区讨论最热烈的功能仍是 **TPS（Tokens/sec）实时展示**（73 👍）。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 重要原因 |
|---|-------|------|----------|
| 1 | **[#20995](https://github.com/anomalyco/opencode/issues/20995)** Gemma 4 (e4b) via Ollama 工具调用失败 | 36 评论 / 48 👍 | 流式 `tool_calls` 解析失败的兼容性问题，影响本地 Ollama 用户最广，已 CLOSED |
| 2 | **[#6096](https://github.com/anomalyco/opencode/issues/6096)** 实验性 TPS（Tokens/秒）显示 | 21 评论 / 73 👍 | 全场最高点赞，反映用户对性能可视化需求强烈，已 CLOSED |
| 3 | **[#16344](https://github.com/anomalyco/opencode/issues/16344)** Requesty provider 未加载已审批模型 | 12 评论 | 模型目录与账号授权不一致，影响企业级 Provider 接入 |
| 4 | **[#9532](https://github.com/anomalyco/opencode/issues/9532)** Claude 频繁出现 tool calling 错误 | 8 评论 | `unavailable tool` 错配是 Claude 用户高频遇到的可用性 bug |
| 5 | **[#36119](https://github.com/anomalyco/opencode/issues/36119)** Apply Patch 权限视图只显示首个文件 | 7 评论 | 多文件 patch 时的权限审批盲区，安全相关 |
| 6 | **[#31907](https://github.com/anomalyco/opencode/issues/31907)** Desktop 端 `display_thinking` 快捷键 | 6 评论 / 8 👍 | 思考块可视化快捷键的缺失影响日常效率 |
| 7 | **[#34543](https://github.com/anomalyco/opencode/issues/34543)** DeepSeek websearch 连接失败 | 5 评论 | Schema 校验错误，需 Provider 端修复 |
| 8 | **[#33896](https://github.com/anomalyco/opencode/issues/33896)** v2 插件注册的 Skill 无法被 `/skills` 发现 | 5 评论 | 阻塞 v2 插件生态，核心功能 bug |
| 9 | **[#22655](https://github.com/anomalyco/opencode/issues/22655)** Web UI 浏览深层目录时崩溃 | 5 评论 | 项目选择器稳定性，影响多项目用户 |
| 10 | **[#47296](https://github.com/anomalyco/opencode/issues/47296)** Bedrock GPT-5.6 缓存输入双计导致频繁 Compaction（**OPEN**） | 3 评论 | **今日仍开放**，计费与自动压缩链路问题 |

---

## 🛠 重要 PR 进展

| PR | 标题 | 亮点 |
|----|------|------|
| [#48058](https://github.com/anomalyco/opencode/pull/48058) | `fix(core): trim compaction summary prompt` | 修剪 GPT 系列压缩摘要提示，长会话摘要从 30k 字符显著瘦身 |
| [#48057](https://github.com/anomalyco/opencode/pull/48057) | `feat(opencode): port Astra system prompt from v2` | 将 V2 的 Astra 系统提示迁移至主线，专门服务 GPT-6 模型路由 |
| [#48056](https://github.com/anomalyco/opencode/pull/48056) | `feat(cli): add V2 uninstall command` | 恢复 `opencode2 uninstall`，兼容 V1 的 `keep-config/keep-data/dry-run` 行为 |
| [#48055](https://github.com/anomalyco/opencode/pull/48055) | `refactor(cli): move import and export under session` | CLI 命名空间整理，`session import`/`session export` 语义更清晰 |
| [#42248](https://github.com/anomalyco/opencode/pull/42248) | `fix(core): preserve prompt cache affinity` | 修复 OpenRouter Provider 不传 session cache key 的缓存亲和性 bug |
| [#42919](https://github.com/anomalyco/opencode/pull/42919) | `fix(opencode): apply long context config pricing` | 本地成本计算补齐长上下文阶梯定价 |
| [#47455](https://github.com/anomalyco/opencode/pull/47455) | `fix(app): link background subagents to their sessions` | 后台/已完成子代理跳转回子会话，父 Tab 状态保留 |
| [#47753](https://github.com/anomalyco/opencode/pull/47753) | `feat(desktop): add SSH server connections` | **Desktop 重大新功能**：SSH 主机持久化、自动重连、本地 HTTP 隧道 |
| [#48043](https://github.com/anomalyco/opencode/pull/48043) | `refactor(session): remove message content mutation API` | 移除实验性的助手消息内容改写 API，回滚 #45015 |
| [#48050](https://github.com/anomalyco/opencode/pull/48050) | `feat(cli): add auth account switching and targeted logout` | 多账号切换与定向登出，账号管理更精细 |
| [#47661](https://github.com/anomalyco/opencode/pull/47661) | `perf(core): stop writing duplicate snapshot events in local mode` | 本地模式下停止重复快照写入，启动提速数十秒、RSS 减少 ~224MB |
| [#48048](https://github.com/anomalyco/opencode/pull/48048) | `feat: add DeepSeek Harness ACP backend` | 新增可选的 DeepSeek Harness ACP 后端，默认仍为原生 OpenCode 执行 |
| [#47935–#48045](https://github.com/anomalyco/opencode/pull/47935) | **Desktop 扩展化架构**（5 个 PR 系列） | @Hona 推动的扩展 SDK 与 Manager：Terminal / Context / Review-File / Browser 全部拆分为独立 `@opencode/plugin-*-desktop` 包，宿主负责布局、面板、原生 surface，扩展通过公开 Slot/Plugin API 挂载 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布提炼出以下方向：

1. **Provider/模型兼容**：Gemma 4、Requesty、DeepSeek websearch、Bedrock GPT-5.6 计费、Kimi 多步推理 — 模型路由和协议适配仍是最大痛点。
2. **Desktop UX 增强**：SSH 连接（已落地）、双击最大化窗格、嵌入式终端 `Ctrl-C` 行为、思考块快捷键、`/skills` 命令可见性 — 用户越来越把 OpenCode 当 IDE 用。
3. **可观测性 / 性能指标**：TPS、token 元数据（缓存输入）、Compaction 提示精简 — 越来越多人关注成本与延迟。
4. **会话与权限**：多目录授权、会话持久化误承诺、自动 Compaction 触发条件 — 企业级使用场景下"持久可信"的呼声很强。
5. **插件与扩展生态**：v2 插件 Skill 注册、Desktop 扩展 SDK — 平台化方向明确。

---

## 💡 开发者关注点

- **痛点 #1：Provider 协议差异** — 流式 `tool_calls`、`reasoning_content`、cached input 双计等问题在不同 Provider 间反复出现，开发者需要一个统一适配层。
- **痛点 #2：CLI/会话 API 一致性** — 多个 PR 集中在 CLI 命令重组（`session import/export`、`auth switch`、`opencode2 uninstall`），说明命令空间正被快速规范化。
- **痛点 #3：长会话性能** — Compaction 摘要膨胀（30k 字符）、本地模式重复快照写盘（启动慢、RSS 高）——核心引擎在大上下文场景仍有明显优化空间。
- **高频需求**：跨设备的远程接入（#47753 SSH 已直接回应）、子代理可视化跳转（#47455）、TPS 与 token 元数据（#6096、#36216）——**实时反馈 + 远程协作** 是当前最强的产品方向。

---

*数据范围：GitHub `anomalyco/opencode` 仓库 2026-09-08 ~ 2026-09-09 更新内容。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-09

> 数据源：[earendil-works/pi](https://github.com/badlogic/pi-mono) · 过去 24 小时活跃 Issues 50 条、PR 17 条

---

## 📌 今日速览

今天社区的焦点几乎被 **OpenCode Zen 强制 `x-opencode-session` 请求头** 这一上游变更所占据，至少 4 条相关 Issue/同时报告了在 provider 直连、扩展 API、后台摘要三条路径上的失败。同时，**启动性能优化**再次回到议程中心，#9360 提出"按需延迟加载扩展包"的方案，对标 jcode 启动延迟目标；多项 **TUI 全屏模式体验回归** 也持续获得关注。

---

## 🚀 版本发布

*无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

### 1. [\#5363](https://github.com/badlogic/pi-mono/issues/5363) — 新增 amazon-bedrock-mantle provider
**状态**：OPEN · inprogress · 💬19 · 👍15
Bedrock Mantle 模型走 OpenAI 兼容协议，与现有 Converse API 不兼容，社区需要独立 provider 实现。本期热度最高的 Feature 请求，PR 已进入评审阶段。

### 2. [\#7444](https://github.com/badlogic/pi-mono/issues/7444) — WebSocket 重试只覆盖两个错误码
**状态**：CLOSED · 💬10
`openai-codex-responses.js` 的重试循环仅处理 `previous_response_not_found` 与 `websocket_connection_limit_reached`，其余 `response.failed` 直接抛错中断。社区强烈呼吁扩展重试白名单。

### 3. [\#8823](https://github.com/badlogic/pi-mono/issues/8823) — Esc 在流式输出时常无法取消请求
**状态**：CLOSED · 💬10
流式过程中按 Esc 只是注册了中止信号，HTTP 请求常常要等 provider 自然结束，影响用户交互响应感。

### 4. [\#9052](https://github.com/badlogic/pi-mono/issues/9052) — 全屏模式滚轮速度比普通模式慢 3 倍
**状态**：OPEN · 💬7 · 👍3
从普通模式切到全屏模式后滚动体验明显劣化，原因是全屏 dock 的滚动缓冲区复用方式不同。

### 5. [\#9230](https://github.com/badlogic/pi-mono/issues/9230) — opencode-go 缺少 `x-opencode-session` 请求头
**状态**：CLOSED · 💬6
OpenCode Go 自 2026-09-06 起强制要求稳定会话 ID 头，Pi 当前实现未透传，导致请求失败。这是今日最广泛传播的"上游破坏性变更"。

### 6. [\#7445](https://github.com/badlogic/pi-mono/issues/7445) — openai-responses 把 developer 角色绑定到 model.reasoning
**状态**：OPEN · inprogress · 💬6
`supportsDeveloperRole: true` 模型本应始终使用 `developer` 角色，但当前实现仍受 reasoning 标志影响，存在提示行为不一致问题。

### 7. [\#5581](https://github.com/badlogic/pi-mono/issues/5581) — `pi.sendMessage({triggerTurn:true})` 绕过 `before_agent_start`
**状态**：OPEN · inprogress · 💬5
自定义消息通过 `_runAgentPrompt` 直接驱动 agent loop，跳过了扩展可观察的事件，影响权限/上下文注入扩展。

### 8. [\#7739](https://github.com/badlogic/pi-mono/issues/7739) — 设定对标 jcode 的启动时间预算
**状态**：OPEN · 💬4
按 jcode 基准设定启动延迟与内存预算，并以可重复的 PTY 启动测量来持续收敛差距。

### 9. [\#9290](https://github.com/badlogic/pi-mono/issues/9290) — 扩展通过 `modelRegistry.complete()` 调用 opencode-go 失败
**状态**：CLOSED · 💬4
同上 `x-opencode-session` 事件，但发生在扩展 API 路径，影响所有使用 ctx.modelRegistry 的扩展。

### 10. [\#9302](https://github.com/badlogic/pi-mono/issues/9302) — 后台摘要缺 opencode 系列请求头
**状态**：OPEN · inprogress · 💬3
navigateTree / compaction 走 auth-only header 源，未注入会话 ID 头，每次都会触发 400 MissingSessionID。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [\#6881](https://github.com/badlogic/pi-mono/pull/6881) — `feat(ai)`：使用 provider 报告的费用
当响应包含计费信息时直接以 `usage.cost.total` 为准，缺失时回退到目录价。`openai-completions` 已实现 `cost_details.upstream_inference_cost`（BYOK 上游分摊）。状态：OPEN inprogress，是社区最关心的成本透明度改进。

### 2. [\#9345](https://github.com/badlogic/pi-mono/pull/9345) — `feat(ai)`：暴露 Anthropic OAuth 使用量
新增 provider-neutral 订阅用量查询 API 与 Anthropic OAuth 适配器，含 5 分钟令牌分区缓存与请求去重。

### 3. [\#9341](https://github.com/badlogic/pi-mono/pull/9341) — 更新运行时依赖（含 minimatch）
更新 `minimatch` 等运行时依赖，保留 `diff` / `openai` / `highlight.js` 版本，刷新根锁文件与 shrinkwrap。

### 4. [\#9351](https://github.com/badlogic/pi-mono/pull/9351) — 修复远程编辑预览闪烁
编辑工具在使用注入的远程操作时，行先短暂变红再被远端 diff 覆盖。修复预览与最终 diff 的衔接。

### 5. [\#9350](https://github.com/badlogic/pi-mono/pull/9350) — `findExecutableOnPath` / `commandExists` 去 fork
原实现在多线程进程中 `fork()` 可能死锁（尤其 Android 平台），改为不派生子进程的查找方式。

### 6. [\#9344](https://github.com/badlogic/pi-mono/pull/9344) — 所有者安全的 UI 覆盖 API
为主题、footer、编辑器引入 owner-based 覆盖，主题临时所有权显式清除，避免扩展相互覆盖残留。

### 7. [\#9337](https://github.com/badlogic/pi-mono/pull/9337) — 限制 Case 3 压缩估算 + 失败回合的 getContextUsage
将下游 fork 中三个已修复的压缩与上下文显示 bug 上提到官方主线，避免 `pi update` 后回归。

### 8. [\#8635](https://github.com/badlogic/pi-mono/pull/8635) — lazy setup 中保留 aborted stop reason
将中止信号透传到 lazy 流式包装层；中止后再次 auth setup 失败应报告为 aborted。修复 #8409。

### 9. [\#8627](https://github.com/badlogic/pi-mono/pull/8627) — cwd 敏感工具统一使用 `ctx.cwd`
read / write / edit / glob / grep 等工具优先使用 ExtensionContext 中的会话 cwd，避免扩展调用时路径错误。

### 10. [\#9316](https://github.com/badlogic/pi-mono/pull/9316) — 三个小修合一
合并修复：① #8919 全屏模式 footer 最小尺寸为 0；② #8717 / #8720（详情见 PR）。

> 其他值得关注的 PR：#9347/#9346（Gondolin undici 安全更新）、#9329（识别 Orca 终端为 Kitty-image 兼容）、#9319（`MouseRegion.invalidate` 防御）、#9310（切换 session 清除选区）。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issues |
|---|---|
| **新增 Provider / 模型协议** | #5363（Bedrock Mantle）、#9338（kimi-coding Responses）、#9230/#9290/#9302/#9326（OpenCode Zen 适配）、#9323（Fireworks 配置） |
| **启动性能与延迟加载** | #7739（对标 jcode）、#9360（扩展包 lazy load，~4.2s 加载开销） |
| **TUI 全屏模式体验** | #9052（滚轮慢）、#8919（footer 空白行）、#9359（TruncatedText 超宽）、#9339（硬件光标错位） |
| **扩展 API 增强** | #5581（triggerTurn 旁路）、#9290（modelRegistry）、#9236（ack 用户消息投递）、#8718（steer RPC 事件） |
| **取消/中止语义** | #8823（Esc 不取消）、#9340（abort 后自动压缩）、#8635（aborted stop reason） |
| **配置与状态管理** | #6406（只读目录锁文件）、#6415（lastChangelogVersion 入运行时文件）、#4212（settings 拆分） |

---

## 💬 开发者关注点（社区痛点）

1. **上游变更追踪脆弱**：OpenCode Zen 单方面加 header 即对所有调用方造成级联故障，#9230/#9290/#9302/#9326 同时出现，反映出 Pi 在多个调用路径（直连 provider / 扩展 API / 后台摘要）共享的"鉴权头部来源"缺乏集中抽象。
2. **流式取消语义不统一**：Esc、WebSocket 重试、abortCompaction、lazy setup 中止分别由不同代码路径处理，#8823、#7444、#9340、#8635 都指向同一个底层诉求——"中止应该是一次性、可观察、贯穿所有层的语义"。
3. **启动时间成为对标焦点**：jcode README 基准成为衡量 Pi 性能的公共参照（#7739），#9360 进一步量化了 4.2s 模块加载开销，社区已不再满足于功能完整，开始追求"开箱即用"的延迟与内存体验。
4. **TUI 全屏模式仍有长尾问题**：自切换全屏模式以来，多个版本陆续暴露滚轮、footer 留白、硬件光标、`TruncatedText` 计算等回归，#9052、#8919、#9339、#9359 显示该模式尚未完全达到普通模式的可信度。
5. **Provider 适配成本高**：每接入一个新模型协议（Bedrock Mantle、Kimi Responses、Fireworks）都需要在 Pi 内部独立 provider、API 兼容层和鉴权三处同步修改，#5363、#9338、#9323 表现出重复工作量。

---

*日报由 Pi 社区动态助手自动整理生成，数据口径为 GitHub Issues/PR 在过去 24 小时的更新活动。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-09

## 📌 今日速览

过去 24 小时内，Qwen Code 集中发布了 v0.23.1 稳定版（含一处破坏性变更：废弃 `@qwen-code/webui`）以及配套的 SDK TypeScript v0.1.9 / v0.1.10，同时推送了 v0.23.2-preview.0。社区关注度最高的议题集中在 **Windows 平台的 ConPTY / conhost.exe 进程泄漏**（10 条评论的 P1 bug），以及 **Release 工作流绕过 CI 校验直接发版**的工程治理问题；PR 端则围绕 Web Shell 体验打磨和 **Playwright Browser SDK** 这一新能力展开。

---

## 🚀 版本发布

| 版本 | 类型 | 关键内容 |
|---|---|---|
| **v0.23.2-preview.0** | 预览 | CI 修复：隔离子进程密集型 E2E 以降低 fork runner 压力（#11388） |
| **v0.23.1** | 稳定 | ⚠️ **Breaking Change**：废弃 `@qwen-code/webui`（#9812）；另含若干 Feature/Bug 修复 |
| **sdk-typescript-v0.1.9** | SDK | 捆绑 CLI 0.23.0；`memory.enableManagedAutoMemory` 现在按用户设置尊重 managed-memory 可用性（#6941） |
| **sdk-typescript-v0.1.10** | SDK | 捆绑 CLI 0.23.1；延续上一版本的内存与提示缓存修复 |

完整变更日志：<https://github.com/QwenLM/qwen-code/releases>

---

## 🔥 社区热点 Issues

> 挑选标准：评论数、优先级（P1/P2）、对用户实际影响、与近期版本的关联度。

### 1. [#11303](https://github.com/QwenLM/qwen-code/issues/11303) — P1 · Windows conhost.exe 进程泄漏（10 条评论）
qwen-cli 在 **VS Code Companion** 扩展下泄漏 headless `conhost.exe` (ConPTY) 进程，~12 小时后达到 **347 个子进程 / 约 2.8 GB** 内存占用。这是当前最高热度的 issue，已衍生出 #11352（node-pty 端不可修复的部分）和 #11313（conout-worker 端的修复）。

### 2. [#11352](https://github.com/QwenLM/qwen-code/issues/11352) — P1 · node-pty 无法在 JS 层修复的 ConPTY 泄漏
把 #11303 中"无法在我们这侧修复"的部分拆出来单独追踪，因为被 pin 的 `@lydell/node-pty` 1.2.0-beta.10 在 shell 自然退出时，`onExit` 回调前 batton 已被擦除，导致 `ClosePseudoConsole` 不可达。

### 3. [#11410](https://github.com/QwenLM/qwen-code/issues/11410) — P1 · v0.23.1 后 Windows 11 本地模型连接失败
用户在 Win 11 更新后通过 LM Studio 调用本地模型直接收到 **API Error 400**；v0.23.1 之前一切正常。这是一条直接影响"本地模型"使用场景的回归 bug。

### 4. [#11420](https://github.com/QwenLM/qwen-code/issues/11420) — P2 · Release 工作流从未查阅主干的 CI 结论
2026-09-08 的 nightly 版本从一个 **已红 1h41m 的 commit** 直接构建发布。`resolve-commit` 步骤只跑 `git rev-parse HEAD`，未读取同 SHA 的 CI verdict。

### 5. [#10820](https://github.com/QwenLM/qwen-code/issues/10820) — P2 · Release 重复运行主干已通过的 unit 套件
同一 commit 在 push 阶段已跑过 CI 的 unit suite，release workflow 又在最紧张的 runner 上重跑一遍，是 release 失败的最大单一来源。建议复用已有的绿色 CI 结论。

### 6. [#11205](https://github.com/QwenLM/qwen-code/issues/11205) — P2 · 主干内容过滤审查屏丢失了 6 项加固
在主分支合并 #9742 时，#10421 中已审查并加固的 16 个 round 的过滤屏内容被覆写，丢失了 **read order / EACCES / U+FFFD / spawn timeout / candidate cap / retention** 等 6 项硬化。需回溯对比。

### 7. [#11386](https://github.com/QwenLM/qwen-code/issues/11386) — P2 · Daemon 工作区扩容超过 25 个
当前实测闲置主机的成本并不支持"必须做完整 LRU"的硬前置；建议 **解耦注册与运行时**，用 LRU live set 处理超过 25 工作区的扩容场景。9 月 8 日已给出实测基线更新。

### 8. [#10685](https://github.com/QwenLM/qwen-code/issues/10685) — P2 · Channel 服务 pidfile 把回收的 PID 当作原进程
`process.kill(pid, 0)` 只能证明"有进程拥有此 PID"，无法证明"还是原服务"。对应 PR #10687 已用 Linux process-start token 给出修复方案。

### 9. [#11405](https://github.com/QwenLM/qwen-code/issues/11405) — P2 · 带 pattern 的 deny 规则让模型"放弃整个工具"
配置 `deny: ["Bash(npm view *)", "Read(//**/node_modules/**)"]` 后，错误提示过于强烈，模型会理解为"该工具被完全禁用"，而非仅拒绝匹配项。

### 10. [#11022](https://github.com/QwenLM/qwen-code/issues/11022) — ✅ 已关闭 · 请求发布含内存/缓存修复的 SDK
请求发布含 `#6941` / `#8464` 等修复的新 SDK；**已在 sdk-typescript-v0.1.9 / v0.1.10 中发布**，该 issue 已关闭。

---

## 🛠 重要 PR 进展

### 1. [#11396](https://github.com/QwenLM/qwen-code/pull/11396) — Web Shell 计划任务支持按模型与分组路由
在"每次运行新建会话"模式下，允许调度任务选择一个已配置的模型和已有的/新建的会话分组；路由信息与任务一起持久化，并在 **Run now** 中复用。

### 2. [#11241](https://github.com/QwenLM/qwen-code/pull/11241) — 新增 Playwright Browser SDK
模型可直接调用的 Browser SDK，运行在持久 Node REPL 中，控制现有 Chrome 会话；定位方式融合 **语义 Playwright locator / DOM snapshot 引用 / 视觉坐标**三种形式，参考 Codex Browser Use 的 API 设计。

### 3. [#10183](https://github.com/QwenLM/qwen-code/pull/10183) — Managed memory 演化为结构化按需召回
把自动记忆从"扁平正文重的 prompt"重构为 **结构化 push/pull 召回协议**，记忆语料变更时下发 ref/title 两级树，查询时下发子树元数据，并提供专用显式召回工具。

### 4. [#11348](https://github.com/QwenLM/qwen-code/pull/11348) — ModelStudio Standard/Token Plan 默认开启 `web_search`
内置 `web_search` 工具在模型已支持的情况下自动启用，**不再需要三个独立开关**。Provider preset 声明端点是否提供 DashScope 服务端搜索工具。

### 5. [#11276](https://github.com/QwenLM/qwen-code/pull/11276) — Web Shell Web 预览面板与历史保存
新增可访问的 Web 预览面板，支持桌面/移动宽度、刷新和外开；独立 Web Shell 默认启用，嵌入式宿主可显式选择。

### 6. [#11387](https://github.com/QwenLM/qwen-code/pull/11387) — DWS 已完成响应投递重试
把"已完成响应投递"与"源 agent turn 执行"解耦：响应在首次发送前持久化，后台以 **指数退避（上限 5 分钟）** 重试，重试与首次发送共用同一幂等 UUID。

### 7. [#10687](https://github.com/QwenLM/qwen-code/pull/10687) — Channel pidfile 防 PID 回收误判
pidfile 现在持久化 **Linux 进程启动 token**，每次读取/信号/等待时校验；PID 已被回收时视为过期，绝不向新持有者发信号。

### 8. [#11251](https://github.com/QwenLM/qwen-code/pull/11251) — 暴露 assistant turn settlement 生命周期
为 daemon-authoritative assistant turn settlement 提供可选宿主回调：上报 session 与 prompt identity、completed/cancelled/failed 状态、stop reason 与最终消息，**在终结通知投递后再发送**。

### 9. [#11238](https://github.com/QwenLM/qwen-code/pull/11238) — Web Shell Session Overview 导航增强
每个会话显示其工作区、分支与 PR 链接；状态筛选与分支/PR 搜索让定位"需要关注"的会话更直接；状态图标紧凑化。

### 10. [#11163](https://github.com/QwenLM/qwen-code/pull/11163) — Web Shell 工作区分支选择器管理 git remotes
在左侧栏 workspace git pill 或 composer 分支 chip 打开的 popover 中新增 **Manage Remotes** 面板：列出 fetch/push URL、新增 remote、二次确认删除。

---

## 📈 功能需求趋势

综合 Issues 与 PR 方向，社区当前最关注的能力方向可归纳为：

| 方向 | 关注点 / 代表性条目 |
|---|---|
| **Web Shell 全场景化** | 计划任务路由（#11396）、Web 预览（#11276）、Session Overview（#11238）、Git remotes（#11163）、DWS 投递（#11387）—— 几乎占据 PR 半数 |
| **浏览器能力 / Agent 工具扩展** | Playwright Browser SDK（#11241）打开浏览器内操作通道；与 Anthropic / Codex 同类功能对标 |
| **Windows 平台可靠性** | conhost.exe / ConPTY 泄漏（#11303、#11352）、Win 11 更新破坏本地模型（#11410）成为 P1 重灾区 |
| **CI/CD 与发布治理** | release 复用绿色 verdict（#10820）、release 不查 CI 直接发（#11420）、macOS E2E 重试（#11134）、ECS runner 超时（#10921） |
| **记忆与上下文管理** | 结构化按需召回（#10183）、managed auto memory 设置尊重（#6941 已发布）；自动压缩模型可配置（#6019） |
| **守护进程 / 多工作区扩容** | Daemon 工作区突破 25 上限（#11386）、ACP 模式保留（#11395）、IPC 限流（#11277） |
| **本地/自托管模型接入** | LM Studio 等本地后端在 v0.23.1 出现回归（#11410），社区对本地模型友好度敏感 |
| **可观测性与 CLI 体验** | `customHeaders ${session_id}` 模板（#10995 ✅ 已关）、`/model --compaction`（#6019） |

---

## 💬 开发者关注点

从 Issues / PR 的反馈与讨论中，可以提炼出几个反复出现的高频痛点：

1. **Windows 平台是当前最大质量短板** — ConPTY 进程泄漏、Win 11 更新与新版 CLI 的兼容性回退，是近期 P1/P2 议题的主要来源，且部分被 pin 的第三方依赖（node-pty）限制了在 JS 层修复的能力。
2. **CI 失败被直接带入 Release** — 多条 issue 指出 release workflow 不消费主干 CI 的 verdict、不

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-09-09** | **数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 📌 今日速览

今日社区活动集中在 **Codewhale 0.9.13 版本集成** 与**多维度 TUI 体验增强**两条主线：核心贡献者 Hmbown 提交的 PR #6002 正在整合 0.9.13 的关键修复（含 OpenRouter 厂商选择、定价校验、分页路由等），同时一批面向 Goal Gate 校验、Session Picker UX、用量诊断的 enhancement Issue 被密集提出，反映社区对**多 Provider 计费准确性**、**目标驱动模式的可靠性**与**长期会话可观测性**的关注显著上升。

---

## 🚀 版本发布

> ⚠️ 过去 24 小时内无新版本发布。建议关注即将到来的 **Codewhale 0.9.13**（PR #6002 已开放集成）。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时更新共 9 条 Issue，以下按重要性排序全部列出。

### 1. [#5976] Cost 显示 "unknown" — Provider 计费覆盖不完整
**标签**：`bug`　| **作者**：Hmbown　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/5976)
**为什么重要**：Founder 实测发现 Concentrate 路由在指标栏显示 `cost: unknown`，而该 Provider 在模型选择器中是有模型、上下文与能力描述的。**计费透明性是多 Provider 工具的信任基石**，同类问题可能蔓延到其他未维护定价的 Provider。

### 2. [#6007] OpenRouter 模型厂商（Vendor）原生选择
**标签**：`enhancement`　| **作者**：7jrxt42BxFZo4iAnN4CX　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6007)
**为什么重要**：OpenRouter 单个模型背后可能有多个上游 Vendor，社区需要按质量/延迟/家族特性**精确绑定 Vendor**。当前只能通过修改 model string 实现，体验不优雅。该需求与 PR #6002 中的"OpenRouter vendor selection"形成上下游联动。

### 3. [#6009] `/models` 命令仅返回首页 — 缺少分页支持
**标签**：`bug`　| **作者**：nsfoxer　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6009)
**为什么重要**：后台目录刷新与 `/models` 命令只发起单次 `GET /v1/models`，未处理 OpenAI 风格的 `has_more / after` 游标分页，导致 **Provider 模型数量超过默认页大小时大量模型被截断**。这是影响模型发现完整性的功能性 Bug。

### 4. [#6015] Fleet 子代理自适应防卡死 + 更宽只读 Shell 语法
**标签**：`enhancement, documentation`　| **作者**：7jrxt42BxFZo4iAnN4CX　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6015)
**为什么重要**：只读子代理（Scout/Reviewer/Planner）在当前默认值下会**卡死并浪费 token**，且不应让每个用户手动修改 `[subagents]` 配置来修复。社区呼吁"合理的默认值"，体现工程团队对**开箱即用体验**的追求。

### 5. [#6014] Session Picker UX 全面升级
**标签**：`enhancement`　| **作者**：7jrxt42BxFZo4iAnN4CX　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6014)
**为什么重要**：列出 4 个具体痛点：空自动会话污染列表、当前会话无高亮、列表无分页滚动、列表面板过窄。这是高频入口（`Ctrl-R / /sessions`）的可用性修补，体现社区对**细节打磨**的成熟反馈文化。

### 6. [#6013] Goal Gates — 目标完成/阻塞状态的独立校验
**标签**：`enhancement`　| **作者**：7jrxt42BxFZo4iAnN4CX　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6013)
**为什么重要**：`/goal` 是 Codewhale 的**持久目标模式**，当前完全信任模型自报状态。社区提出需要独立的"Goal Gate"机制进行二次校验，并新增 post-verify 阶段与弹性设计。**这是对 AI Agent 可靠性的深度思考**——不盲信模型输出。

### 7. [#6011] 用量 & 工具诊断 — Token 核算 + 工具调用错误模式
**标签**：`enhancement`　| **作者**：7jrxt42BxFZo4iAnN4CX　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/6011)
**为什么重要**：现有 `/tokens /cost /context report` 都是**会话级、仅实时**，会话结束后无法回答"上周 token/缓存/钱花在哪"。社区强烈诉求**跨会话可观测性**——按组件、按模型、缓存命中率、按工具的成本归因。这是 TUI 工具走向"专业级"的必经之路。

### 8. [#4168] 用户自定义模型配置段（Architecture D-4）
**标签**：`enhancement, rust, tui, ux, reliability`　| **作者**：Hmbown　| **状态**：OPEN
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/4168)
**为什么重要**：要求新增 `[[models]]` 配置段，让用户**无需修改编译期 catalog 即可声明本地/私有/定制模型**。这是 Codewhale 0.8.68 文档中提出的架构演进，反映社区对**配置化扩展能力**的长期需求。

### 9. [#2955] v0.8.56: 校准 OpenAI Codex Provider 用量遥测
**标签**：`documentation, enhancement`　| **作者**：Hmbown　| **状态**：CLOSED ✨
🔗 [查看 Issue](https://github.com/Hmbown/Codewhale/issues/2955)
**为什么重要**：Codex CLI 记录了缓存输入 token 和推理输出 token，而 Codewhale 的 Harbor 流仅报告聚合输入/输出，导致**对比不公平**。今日已关闭——表明该 telemetry 对齐工作已完成或纳入发布计划。

---

## 🛠️ 重要 PR 进展

> 注：过去 24 小时共 3 个 PR 更新，全部列出。

### 1. [#6002] 集成 Codewhale 0.9.13 贡献者修复与发布验证 ⭐
**作者**：Hmbown　| **状态**：OPEN
🔗 [查看 PR](https://github.com/Hmbown/Codewhale/pull/6002)
**内容**：综合性集成 PR，合并 0.9.13 贡献者成果并修复集成测试中发现的 CLI/TUI/Runtime API/Bundled Computer Use 问题。**涵盖**：Provider 目录分页与精确路由、OpenRouter Vendor 选择、输出限制、定价校验。该 PR 是当前社区最关键的里程碑。

### 2. [#6012] 修复 Session 自动标题生成时泄露 runtime 信封
**作者**：SparkofSpike　| **状态**：OPEN
🔗 [查看 PR](https://github.com/Hmbown/Codewhale/pull/6012)
**内容**：自动生成的 Session 标题错误显示了 `<codewhale:runtime_event kind="operate_contract" ...>` 等内部 runtime 信封。修复方案是**跳过 runtime handoff 消息**，仅基于真实用户提示生成标题。属于典型的 Chat-template 边界处理问题。

### 3. [#5982] 模型绑定 Key 脱敏的确认式 Opt-out
**作者**：SparkofSpike　| **状态**：OPEN
🔗 [查看 PR](https://github.com/Hmbown/Codewhale/pull/5982)
**内容**：Codewhale 默认对凭据类信息做强制脱敏，但**开发场景下会造成不便**（如：浏览器扩展需要把后端生成的 API key 粘贴到扩展）。新增 `[redaction] model_bound` 的"确认式 opt-out"，平衡**安全默认 vs 开发灵活性**。

---

## 📈 功能需求趋势

从近期 Issue 提炼出以下高关注方向：

| 趋势方向 | 代表 Issue | 热度 |
|---------|-----------|------|
| **🎯 多 Provider 精确路由与计费** | #5976、#6007、#6009、#4168 | ⭐⭐⭐⭐⭐ |
| **📊 跨会话可观测性（用量/成本/诊断）** | #6011 | ⭐⭐⭐⭐ |
| **🤖 Agent 可靠性（Goal Gate、子代理防卡死）** | #6013、#6015 | ⭐⭐⭐⭐ |
| **🎨 TUI 体验打磨（Picker、面板、会话管理）** | #6014、#6012 | ⭐⭐⭐ |
| **🔧 自定义模型与配置化扩展** | #4168 | ⭐⭐⭐ |
| **🔐 安全与开发灵活性的平衡** | #5982 | ⭐⭐ |

**关键洞察**：社区正从"能用"转向"专业级"——重点已不再是基础功能补齐，而是 **AI Agent 工作流的可靠性、可观测性与可控性**。

---

## 💡 开发者关注点

1. **🎯 精确路由与透明计费**
   开发者普遍反感"黑盒"的 Provider 行为——计费显示 unknown、模型列表截断、Vendor 无法绑定，本质都是**信任问题**。

2. **🤖 不应盲信 Agent 自我报告**
   Goal Gate（#6013）背后的诉求是：**模型说"完成了"≠ 真的完成了**。开发者希望框架层提供独立校验机制。

3. **⚙️ 默认值的合理性**
   Scout/Reviewer/Planner 卡死（#6015）说明**糟糕的默认值比缺失功能更糟糕**。社区呼吁"框架层智能默认 + 可选覆盖"的设计哲学。

4. **📉 长期成本可追溯**
   单会话视角已不够用。开发者想知道"这周 token 怎么花的、哪个模型/工具最烧钱"，反映出**AI 工具正被纳入生产环境成本核算**。

5. **🔒 安全默认 vs 开发灵活的张力**
   #5982 的讨论显示一刀切的强制脱敏不适合所有场景，需要**带确认的 opt-out 路径**。

---

## 📅 后续关注

- PR **#6002** 集成进展 → 决定 0.9.13 发布节奏
- Issue **#5976** 计费校验方案 → 影响所有非主流 Provider 的可用性
- Issue **#6013** Goal Gate 设计 → 关系到 `/goal` 模式的成熟度

---

*日报由 DeepSeek TUI 社区动态分析生成 | 数据截止 2026-09-09*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*