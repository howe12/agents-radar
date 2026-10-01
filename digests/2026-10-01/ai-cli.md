# AI CLI 工具社区动态日报 2026-10-01

> 生成时间: 2026-10-01 03:34 UTC | 覆盖工具: 9 个

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
**数据日期**：2026-10-01（Codex 例外，2026-04-10）

---

## 一、生态全景

当前 AI CLI 工具市场已从"单一智能体"演化为"**协议 + 沙箱 + 多端协同**"的三维竞争格局：开源派（OpenCode、Pi、Qwen、Gemini）以**MCP 生态治理**与**Provider 适配广度**为护城河；商业派（Claude Code、Codex、Copilot CLI）则集中精力修补**权限/审批精度**与**平台稳定性**。今日最显著的信号是——**安全边界的精细化**（误判拦截、未信任工作区、引号转义绕过）已成为所有玩家共同的核心战场，而 **MCP 健壮性**则成为跨工具复用的最大脆弱面。

---

## 二、各工具活跃度对比

| 工具 | 维护方 | Issues | PRs | Release | 主要矛盾 |
|------|--------|--------|-----|---------|----------|
| **Claude Code** | Anthropic | 50 | 9 | v2.1.286 | 安全误判"污染会话"、Remote Control 资源泄漏 |
| **OpenAI Codex** | OpenAI | 10+ | 50（bot 自动化）| rust-v0.159.3 + 多个 alpha | Windows 启动死锁、0.157 app-server 架构回归 |
| **Gemini CLI** | Google | 50 | 10+ | v0.64.0-nightly | 子代理可靠性、未信任工作区破坏 settings.json |
| **Copilot CLI** | GitHub | 12 | **0** | v1.0.90 + v1.0.91-0 | MCP writer-lock 失效、400 错误频发 |
| **Kimi Code CLI** | MoonshotAI | **0** | 0 | 无 | 24h 无活动 |
| **OpenCode** | anomalyco | 50 | 50 | v1.18.34 | "a.name 诅咒"错误信息不可读、Bedrock thinking block 回归 |
| **Pi** | badlogic/earendil-works | 10 | 10 | v0.99.2 | TUI 长转录抖动、Provider 流中断永久挂起 |
| **Qwen Code** | QwenLM | 10 | 10 | v0.24.7-nightly | Managed Agent 多阶段架构推进、Shell 权限绕过 |
| **DeepSeek TUI** | Hmbown | 12 | 29 | 无正式发布 | 流式重试预算硬编码、卡顿恢复 UI/引擎分裂 |

> **观察**：OpenAI Codex 的 PR 数（50）虽居首，但**全部由 `copyberry[bot]` 自动化生成**，反映其人工评审外延工作的低活跃度；Copilot CLI "0 PR + 2 Release"则呈现"代码静默期"的发布驱动型节奏。

---

## 三、共同关注的功能方向

### 1. 🔐 安全边界与权限精度（**全员关注**）
- **Claude Code**（#95326、#63751、#84689、#98556）：响应级 cyber-safeguard 误判覆盖网络安全→通用会话
- **Gemini CLI**（#29466、#29458、#29583）：未信任工作区 `gemini mcp add` 静默擦除 settings、粘贴 `@path` 展开泄露密钥
- **Qwen Code**（#13106、#12280）：`cd ... > .qwen/settings.json` 与引号 + 后台运算符组合绕过 Write 拒绝规则
- **共性诉求**：从"一刀切拦截"转向"语义级操作树 + 上下文感知的最小授权"

### 2. 🔌 MCP 生态成熟化（**开源派集中**）
- **OpenCode**（#52414、#52418、#51946）：MCP DELETE 未发送、SIGTERM 孤立子进程、错误信息不可读
- **Pi**（#10266、#10239、#10186）：OAuth scope 空串拒签、codemode 工具名碰撞
- **DeepSeek TUI**（#6802、#6803）：MCP `tools/call` 复用通用预算被过早终止
- **Gemini CLI**：MCP 工具爆炸（>400）触发 400 错误
- **共性诉求**：OAuth 健壮性、错误自描述、生命周期终结、独立预算隔离

### 3. 🤖 Agent 子代理可观测性（**Gemini / Qwen 主导**）
- **Gemini**（#22323、#21409、#21968）：MAX_TURNS 后仍报 success、Generalist agent 永久挂起、Skills 不被主动调用
- **Qwen**（#12380、#12867、#12952）：Managed Agent Stage D/G/H 多阶段推进
- **Claude Code**（#82056、#94675）：auto-memory 加载状态不可知、UserPromptSubmit 缺 prompt_source 标记
- **共性诉求**：意图/状态/边界的**结构化报告**，而非"自我宣称成功"

### 4. 💰 成本可视化与缓存控制
- **Claude Code**（#97567、#98557、#98576）：Cloud 会话静默消耗信用、prompt cache 异常下探
- **OpenCode**（#34344、#40064）：免费模型配额 VPN 绕过、GO 订阅阻塞
- **共性诉求**：Token floor、cache 命中率、rate limit 实际执行的**透明仪表盘**

### 5. 🪟 终端 / TUX 体验与可访问性
- **Pi**（#9255、#10050）：长转录暴力抖动、扩展 stdout 污染 TUI
- **DeepSeek TUI**（#6652、#6650）：果冻式滚动滞后、Ctrl+T 漂移
- **Gemini**（#29520、#29586）：滚动位置重置、Ctrl+C 被吞
- **Copilot CLI**（#2205、#4894）：Terminator 鼠标滚动错乱、长会话 scrollback 跳起点
- **共性诉求**：差分渲染的边界稳定性 + 中断信号传播链完整性

---

## 四、差异化定位分析

| 维度 | Claude Code / Codex / Copilot（商业派） | OpenCode / Pi / Qwen / Gemini（开源派） |
|------|--------------------------------------|-------------------------------------|
| **核心壁垒** | 旗舰模型深度集成 + 企业级合规 | Provider 适配广度 + 协议中立 |
| **目标用户** | 企业研发团队、商业付费用户 | 个人开发者、多模型爱好者、嵌入式集成 |
| **演进主线** | 权限/审批 UX（v2.1.286 权限栈计数、v1.0.91 只读流水线证据）| MCP 治理 + 多模型/多云接入（Bedrock GovCloud、Vertex、Muse Spark） |
| **典型痛点** | "过度保守的安全分类器" | "Provider 协议碎片化、回归测试缺失" |
| **商业模式** | 订阅 + Cloud Credit（成本不可控成痛点） | 社区驱动 + 可选托管服务 |
| **技术路线** | 封闭 + 旗舰模型绑定 | 开放 SDK（Qwen 引入 models.dev、Pi 提供 agiquery 嵌入式） |

**工具特色切片：**
- **Claude Code**：唯一明确强调 **Remote Control 多端协同**（#91087、#98504、#98583）与 **Claude in Chrome 站点策略**（#95326）
- **Codex**：唯一大规模部署 **copyberry[bot] 自动化 PR 合并**，反映内部 CI/质量门禁成熟度
- **Gemini CLI**：唯一把 **AST 感知工具链**（#22745/22746/22747）作为战略性 Issue 公开讨论
- **OpenCode**：唯一把 **错误信息自描述**（#52418）作为 P1 优先级——"a.name 诅咒"成为开源派共同记忆
- **Pi**：唯一提供 **编程式 Provider 配置**（#10235）与 **可嵌入式 agiquery 集成模式**——"被其他 Agent 调度"的中间件定位
- **Qwen Code**：唯一系统化推进 **Managed Agent 多阶段交付**（Stage B/D/F/G/H/M2/O3/O4）——平台化野心最显

---

## 五、社区热度与成熟度

### 🟢 高活跃 + 高成熟（规模化运营）
- **OpenAI Codex**：50 PR 全自动 + 稳定/alpha 双线版本管理 + 多端（Desktop/Web/Android/IDE）协同——成熟度最高
- **Claude Code**：50 Issues + 9 PR + 双 PR 通道（diff 面板与 CI/安全）双线并进，PR 节奏反映"质量门控严格"
- **Gemini CLI**：50 Issues + 持续 nightly 版本 + 多个 P1 安全 PR 并发——快速迭代中的安全加固期

### 🟡 中活跃 + 高创新密度
- **OpenCode**：50 Issues + 50 PR + v1.18.34 维护版本——开源派中 PR 流量最高，但"a.name 诅咒"暴露错误处理层尚未成熟
- **Qwen Code**：10 Issues + 10 PR，但议题集中度极高——Managed Agent 多阶段提案显示"集中兵力办大事"
- **Copilot CLI**：Issues 不多但 👍 数极高（#1973=29、#3282=31）——社区诉求强烈但开发节奏受 v1.0.9x 发布周期约束

### 🟠 低活跃 / 早期 / 静默
- **Pi**：10 Issues + 10 PR，PR 全部已合并，节奏健康但规模有限——典型"独立开发者精品"项目
- **DeepSeek TUI**：12 Issues + 29 PR，PR/Issue 比 2.4:1 极不平衡——可能反映代码侧重构密集，但用户触点未跟上
- **Kimi Code CLI**：24h 无活动——建议关注是否处于路线图调整期

---

## 六、值得关注的趋势信号

### 🔮 趋势 1：从"功能堆叠"转向"边界精度"
**信号**：Claude Code 的安全误判、Gemini 的未信任工作区擦除、Qwen 的引号绕过共同指向——**粗放的拦截/放行已无法满足开发者**，行业正在从 binary 权限转向"操作语义树 + 上下文最小授权"。
**对开发者的参考**：选择 CLI 工具时，应优先评估其**权限模型的语义层级**（如 Qwen 的 `resolveCdTargetCwd` 是否捕获 redirect、Claude 的 cyber-safeguard 是否支持申诉字段）。

### 🔮 趋势 2：MCP 从"能力扩展"变为"可靠性瓶颈"
**信号**：OpenCode（#52418）、Pi（#10266）、DeepSeek（#6802）、Gemini（#24246）四款独立工具在同一天报告 MCP 相关问题，且症状高度相似（生命周期终结、错误信息、预算隔离）。
**对开发者的参考**：评估 MCP server 时必须把"**会话终结协议、错误自描述、预算隔离**"作为基础设施级要求。

### 🔮 趋势 3：Agent 体系进入"可观测性竞赛"
**信号**：Gemini 的 subagent 自我宣称成功（#22323）、Claude 的 auto-memory 加载状态不可知（#82056）、Qwen 的 telemetry 静默丢失（#13062）、Pi 的 fork 会话迁移脆弱（#10224）——**Agent 的可信度正在被状态可观测性定义**。
**对开发者的参考**：长任务 / 生产化场景下，工具的**意图/状态/边界报告能力**将比模型能力更关键。

### 🔮 趋势 4：Provider 适配层成为开源派最大隐性成本
**信号**：OpenCode 报告 Bedrock Opus 5 thinking block 被拒（#46729/#51481）、Zen 429 被吞（#48988）、DeepSeek interleaved reasoning（#35689）；Pi 报告 Anthropic 静默丢弃根 anyOf（#9134）、OpenAI Responses 字符集限制（#9852）——每次模型大版本升级都伴随一波兼容性损伤。
**对开发者的参考**：依赖多模型路由时，**版本升级前的回归测试覆盖**应当作为生产准入门槛。

### 🔮 趋势 5：嵌入式 / 可编程化正在重塑工具边界
**信号**：Pi 提供 agiquery 嵌入式集成模式（#10235）、`--base-url`/`--api-type` 端点覆盖（#10233）、编程式 Provider 配置；OpenCode 把 `session.compaction` 下放到 plugin SDK（#52385）——**CLI 工具正在从"被调用"演化为"被编排"**。
**对开发者的参考**：未来构建 Agent 平台时，应优先选择**提供编程式 Provider / SDK 暴露能力**的工具作为调度中枢。

---

## 📌 一句话总结

> **2026-Q4 的 AI CLI 生态已经从"模型谁更强"转向"边界谁更精细"**——安全语义、MCP 可靠性、Agent 可观测性、Provider 适配鲁棒性，这四条战线正在重新定义开发者选型的优先级。商业派以**纵深安全模型**取胜，开源派以**横向协议中立**立足，中间层（可嵌入式、SDK 化）正在成为新的战略要地。

---

*报告生成时间：2026-10-01｜数据窗口：各工具过去 24 小时公开 GitHub 数据*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截至 2026-10-01）

> 数据源：[anthropics/skills](https://github.com/anthropics/skills) | 抽样：Top 20 PRs + Top 15 Issues
> 注：原始数据中评论数与 👍 计数显示为 `undefined`/`0`，以下热度排序结合了 **Issue–PR 交叉引用、问题严重性、更新时间与社区痛点匹配度**。

---

## 1. 热门 Skills 排行

| # | Skill / PR | 核心能力 | 热度来源 | 状态 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估与 Windows 兼容修复** — [PR #1298](https://github.com/anthropics/skills/pull/1298) | 修复 trigger eval 多 worker 竞争、Windows `select()` 失败、运行时报错被误判为非触发器等 | 命中 [Issue #556](https://github.com/anthropics/skills/issues/556)（0% 触发率）、[Issue #1383](https://github.com/anthropics/skills/issues/1383)（benchmark 静默失败）三大痛点 | 🟢 OPEN |
| 2 | **mcp-builder MCP v2 兼容修复** — [PR #1742](https://github.com/anthropics/skills/pull/1742) | 适配 `mcp>=2.0` 中 `streamable_http_client` 重命名与自定义 headers 配置方式 | 直接修复 [Issue #1668](https://github.com/anthropics/skills/issues/1668)，与 [Issue #1390](https://github.com/anthropics/skills/issues/1390)（evaluation.py 0/N 打分）同属 MCP 工具生态核心 | 🟢 OPEN |
| 3 | **document-typography 排版质检** — [PR #514](https://github.com/anthropics/skills/pull/514) | 防止 AI 生成文档出现孤词换行、寡头段落、编号错位 | 高频长尾痛点（影响每份文档），开放近 7 个月仍 OPEN，社区"刚需但非紧急" | 🟢 OPEN |
| 4 | **AWT (AI Watch Tester)** — [PR #822](https://github.com/anthropics/skills/pull/822) | 零代码 E2E 测试，赋予 Claude 视觉 + 浏览器控制能力 | 与 [PR #723 testing-patterns](https://github.com/anthropics/skills/pull/723) 共同构成测试主题热度 | 🟢 OPEN |
| 5 | **testing-patterns** — [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy 模型、单元测试、React 组件测试全栈 | 持续更新至 2026-09，长生命周期高关注 | 🟢 OPEN |
| 6 | **skill-quality-analyzer + skill-security-analyzer** — [PR #83](https://github.com/anthropics/skills/pull/83) | 元 Skill：5 维度质量评估 + 安全审计 | 完美呼应 [Issue #492](https://github.com/anthropics/skills/issues/492)（命名空间信任边界滥用），社区呼声极高 | 🟢 OPEN |
| 7 | **notion-spec-to-implementation + quantitative-resume-auditor** — [PR #1245](https://github.com/anthropics/skills/pull/1245) | 把 Spec 拆解为 Notion 可执行任务；简历量化审计 | 跨产品工作流自动化典型场景 | 🟢 OPEN |
| 8 | **blast-radius 破坏性写前清单** — [PR #1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写入前的检查清单（归档、撤销、批量邮件） | 命中 [Issue #412 agent-governance](https://github.com/anthropics/skills/issues/412) 治理诉求 | 🟢 OPEN |

---

## 2. 社区需求趋势（基于 Issues）

| 需求方向 | 代表 Issue | 讨论强度 |
|---|---|---|
| 🔐 **Skills 安全与信任边界** | [#492 anthropic/ 命名空间滥用](https://github.com/anthropics/skills/issues/492)（43 评论 / 2👍）、[#1394 eval-viewer XSS](https://github.com/anthropics/skills/issues/1394) | ⭐⭐⭐⭐⭐ |
| 🏢 **企业级分发与协作** | [#228 组织级 Skill 共享](https://github.com/anthropics/skills/issues/228)（16 评论 / 8👍，👍赞率最高） | ⭐⭐⭐⭐⭐ |
| 🧪 **评估体系可靠性** | [#556 run_eval.py 0% 触发率](https://github.com/anthropics/skills/issues/556)（12 评论 / 7👍）、[#1390 MCP 评估 0/N](https://github.com/anthropics/skills/issues/1390)、[#1383 benchmark 静默失败](https://github.com/anthropics/skills/issues/1383) | ⭐⭐⭐⭐⭐ |
| 🧠 **Agent 长期记忆 / 上下文治理** | [#1329 compact-memory 提案](https://github.com/anthropics/skills/issues/1329)、[#1487 claude-api 注入 156k tokens](https://github.com/anthropics/skills/issues/1487) | ⭐⭐⭐⭐ |
| 📦 **Skill 生命周期管理** | [#62 Skills 莫名消失](https://github.com/anthropics/skills/issues/62)（10 评论）、[#189 插件重复安装](https://github.com/anthropics/skills/issues/189)（6 评论 / 👍 9） | ⭐⭐⭐⭐ |
| 🛡️ **Agent Governance / 风险控制** | [#412 agent-governance](https://github.com/anthropics/skills/issues/412)（CLOSED）、[#1175 SharePoint 安全](https://github.com/anthropics/skills/issues/1175) | ⭐⭐⭐ |
| 🔧 **Skill 创建工具自身成熟度** | [#202 skill-creator 最佳实践](https://github.com/anthropics/skills/issues/202)（CLOSED）、[#1385 三阶段质量门](https://github.com/anthropics/skills/issues/1385) | ⭐⭐⭐ |

**核心趋势归纳**：社区需求正从"加新功能"转向"补基础设施工具"——**安全/信任、评估/触发可靠性、跨用户分发、上下文与记忆治理**成为四大主线诉求。

---

## 3. 高潜力待合并 Skills

以下 PR 在内容价值与社区痛点上具备最强落地预期，建议优先 review：

1. **[PR #1298 skill-creator 触发评估修复](https://github.com/anthropics/skills/pull/1298)** —— 同时打通 #556 / #1383 两个高赞 Issue，是 skill-creator 可用性的关键补丁。
2. **[PR #1742 mcp-builder v2 兼容](https://github.com/anthropics/skills/pull/1742)** —— MCP 生态升级阻塞，合并即可解锁真实 MCP server 评估（关联 #1390）。
3. **[PR #83 skill-quality/security-analyzer](https://github.com/anthropics/skills/pull/83)** —— 元 Skill，落地后直接服务于 #492 命名空间治理与整体质量基线。
4. **[PR #1776 blast-radius](https://github.com/anthropics/skills/pull/1776)** —— 补齐"破坏性操作前最后一道闸"，契合 agent-governance 方向（#412）。
5. **[PR #514 document-typography](https://github.com/anthropics/skills/pull/514)** —— 高频痛点、低风险，悬置近 7 个月应尽快合并。
6. **[PR #822 AWT](https://github.com/anthropics/skills/pull/822)** + **[PR #723 testing-patterns](https://github.com/anthropics/skills/pull/723)** —— 测试主题双胞胎，可考虑作为 testing 子目录一次落地。

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最焦虑的不是"Skills 能做什么"，而是"Skills 如何被信任、可靠触发与安全分发"——围绕评估可靠性、命名空间治理、组织级共享与上下文注入控制的基建型需求，正在压过新功能请求，成为 anthropics/skills 仓库下一阶段的主旋律。**

---

### 📎 附录：报告方法说明
- 由于源数据评论/点赞字段缺失，热度排序采用 **三因子加权**：① Issue–PR 交叉引用强度；② Issue 👍赞率（可获取部分）；③ 末次更新时间与悬置时长。
- 所有 50 条 PR 中 **100% 仍为 OPEN 状态**，反映仓库当前 review 吞吐已显著落后于社区贡献速度，是隐性的次级信号。

---

# Claude Code 社区动态日报

**日期：2026-10-01** | 数据来源：github.com/anthropics/claude-code

---

## 一、今日速览

今日 Claude Code 发布 **v2.1.286**，重点优化权限提示栈（"2 of 5"）与全屏列表的鼠标交互。社区方面，**安全分类器误判**仍是核心痛点——涉及合法安全研究、邮件、网络扫描等多个场景的误封；**会话与远程控制稳定性**问题集中爆发，多个新 Issue 指向 Remote Control 在重启/崩溃后无法恢复会话、孤儿会话永不回收；**多用户实时协作**等长期 feature request 持续获得点赞。

---

## 二、版本发布

### v2.1.286（今日发布）

- **权限提示栈计数**：当多个权限请求叠加时，提示框显示类似 "2 of 5" 的进度指示
- **全屏模式鼠标支持**："N more" 列表行支持点击跳转、悬停与按下状态
- **进程相关 Bug 修复**：若干 Claude Code 进程问题

> 备注：完整 changelog 需访问 [Releases](https://github.com/anthropics/claude-code/releases)

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 关注度 | 重要性 |
|---|-------|--------|--------|
| [#82056](https://github.com/anthropics/claude-code/issues/82056) | 会话无法判定 auto-memory 索引是否完整加载 | 64 评论 | ★★★★★ 长期高活跃议题，影响会话自省能力 |
| [#95326](https://github.com/anthropics/claude-code/issues/95326) | Claude in Chrome 在 reddit.com 全面被安全拦截 | 18 评论 / 22 👍 | ★★★★★ 自 9-18 起全站工具被屏蔽，影响面广 |
| [#60082](https://github.com/anthropics/claude-code/issues/60082) | 单会话实时多用户协作（VS Code Live Share 式）| 12 评论 / 21 👍 | ★★★★☆ 团队协作需求强烈 |
| [#63751](https://github.com/anthropics/claude-code/issues/63751) | AUP/cyber-safeguard 在自有软件硬化场景误判，且"会话级污染"| 17 评论 / 9 👍 | ★★★★ 误判会污染整个会话，影响所有后续调用 |
| [#84689](https://github.com/anthropics/claude-code/issues/84689) | CVP 已批准组织仍被 cyber safeguards 拦截 | 19 评论 / 5 👍 | ★★★★ 申诉表单无字段，流程闭环缺失 |
| [#94675](https://github.com/anthropics/claude-code/issues/94675) | `UserPromptSubmit` 在子代理/系统注入消息上无 `prompt_source` 标记，存在 prompt-injection 面 | 6 评论 | ★★★★ 安全模型问题，hooks 无法区分来源 |
| [#64575](https://github.com/anthropics/claude-code/issues/64575) | Agents 视图（FleetView）缺少搜索/筛选 | 5 评论 / 8 👍 | ★★★ 多会话用户强需求 |
| [#91087](https://github.com/anthropics/claude-code/issues/91087) | Remote Control 崩溃后会话永不回收 | 3 评论 | ★★★ 状态机/资源泄漏问题 |
| [#97567](https://github.com/anthropics/claude-code/issues/97567) | Cloud 会话无限重排每小时 PR check-in，悄悄消耗信用 | 3 评论 | ★★★ 成本控制缺陷 |
| [#98556](https://github.com/anthropics/claude-code/issues/98556) | 响应级安全分类器对完全良性回合误触发 | 2 评论 | ★★★ 已是系列问题，但场景从网络安全扩展到通用 session 确认 |

**关键观察**：安全分类器误判（#95326、#63751、#84689、#98556、#98579）呈"家族式"分布，覆盖浏览器扩展、企业审批、桌面应用、Linux 命令行等多个面，反映出当前 cyber-safeguard 策略对开发者工作流的过度干预。

---

## 四、重要 PR 进展（共 9 条，今日主要活跃）

### 已合并（CLOSED）

- [#98445](https://github.com/anthropics/claude-code/pull/98445) **diff 面板性能优化**：每次工具调用后从启动 50 个 git 进程读取 hunks 降至 1 个，Windows 受益最明显
- [#98357](https://github.com/anthropics/claude-code/pull/98357) **diff 面板合并检测**：自动感知外部完成的 merge，且不再每 2 秒轮询 git
- [#98374](https://github.com/anthropics/claude-code/pull/98374) **diff 面板 rebase 状态修复**：rebase 完成后正确重新读取 diff
- [#97952](https://github.com/anthropics/claude-code/pull/97952) **CI 安全加固**：为 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 添加出站防火墙 runner 与 Claude Action 最小权限
- [#39417](https://github.com/anthropics/claude-code/pull/39417) SKILL.md 增补前端设计准则

### 进行中（OPEN）

- [#98555](https://github.com/anthropics/claude-code/pull/98555) **diff 对话框**：列出文件时不再打开每一个 diff；关闭时不输出空内容
- [#94847](https://github.com/anthropics/claude-code/pull/94847) **diff 面板**：首次编辑时仅在有可列文件时才打开面板，避免对 worktree 外/ignore 文件的空面板
- [#97293](https://github.com/anthropics/claude-code/pull/97293) **mods 声明**：`$.process.run` 结果携带 `isStdoutTruncated` / `isStderrTruncated`，`$.fs.list` 条目携带 `mtimeMs`
- [#96434](https://github.com/anthropics/claude-code/pull/96434) **security-guidance 改进**：评审时排除被 `Read` deny/ask 规则覆盖的文件与已知密钥文件，子代理获得与 `disallowed_tools` 一致的规则

> 趋势：今日 PR 高度聚焦在 **diff 面板的体验与性能**（4/9），以及 **CI/安全边界加固**（2/9）。

---

## 五、功能需求趋势

综合 50 条 Issue 与 PR 提炼：

1. **多用户实时协作** —— 类似 Google Docs / VS Code Live Share 的同会话多人编辑（#60082 持续获得 👍）
2. **会话/Agent 管理 UI 增强** —— FleetView 搜索/筛选、Desktop Code 标签页对 routine 会话的支持（#64575、#77784、#98386）
3. **diff 面板与 TUX 工作流优化** —— 性能、行为可预测性、键盘绑定（#98555、#94847、#98580）
4. **安全审查精度提升** —— security-guidance 排除敏感文件、误判白名单机制（#96434、#84689、#63751）
5. **会话状态可观测性** —— auto-memory 加载状态、提示来源标记（#82056、#94675）
6. **Claude in Chrome 站点策略细化** —— 浏览器扩展的域名级别安全策略需要更细粒度（#95326）
7. **成本可视化与控制** —— cache 命中率、rate limit 真实执行、Cloud 信用消耗透明度（#97567、#98557、#98576）
8. **Remote Control 高可用** —— 跨重启/跨设备的会话保持（#91087、#98504、#98583）

---

## 六、开发者关注点与痛点

### 🔴 高频痛点

- **Cyber-safeguard 误判成灾**：合法的安全研究（蓝队侦察、漏洞修复、curl 测试）、自有软件硬化、密钥管理全部被一刀切拦截。多个 Issue 表明，一次误判会"污染整个会话"，所有后续调用都被影响。
- **响应级/工具级安全分类器过度保守**：从网络安全扩展到通用 session 确认回复也会被中途截断（#98556）。
- **Remote Control 不可靠**：崩溃后会话永不回收、跨重启后 `environment_deleted`、bridge 环境 ID 不稳定（#91087、#98504、#98583）。

### 🟡 中频关注

- **成本不可预测**：prompt cache 异常下探到 7,085 token floor、weekly rate limit 未实际拦截、Cloud session 静默消耗信用（#98557、#98576、#97567）。
- **会话边界模糊**：`UserPromptSubmit` 无法区分"用户输入"与"子代理/系统注入"消息，给 prompt-injection 留下表面（#94675）。
- **认证与 token 管理**：无法撤销已签发的 Claude Code 授权 token，awsAuthRefresh 流程回退（#98582、#82426）。

### 🟢 改进信号

- **i18n 缺陷**：Desktop Code 标签页对非 ASCII（如 Korean）斜杠命令拒绝发送（#98577）。
- **平台兼容**：Windows MSIX 打包限制 Chromium `--disable-direct-composition` 应用（#79220）。
- **GitHub 集成不稳**：Connector 显示已连接但实际不可用、设置页无搜索（#98562、#98586）。
- **提交审计**：开发者希望 `Claude-Session` trailer 默认 opt-in 而不是强制（#98581）。

---

**报告生成时间**：2026-10-01 ｜ 数据窗口：过去 24 小时
**统计基线**：Issues 50 条 / PRs 9 条 / Releases 1 条

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-04-10** | 数据来源：github.com/openai/codex

---

## 📌 今日速览

今日 Codex 仓库活跃度极高，**24 小时内合并/关闭了 50 个 PR（全部由 `copyberry[bot]` 自动化机器人提交）**，主线聚焦在守护进程稳定性、exec-server 文件系统重构以及 AWS Bedrock GovCloud 支持。社区方面，**Windows 平台稳定性问题集中爆发**，多个 26.924 / 26.928 版本的应用启动死锁问题持续发酵，最热门 Issue 关注度突破 52 条评论。功能请求层面，"恢复分支选择"、"禁用 Pets"、"关闭欢迎语"等 UI 反向需求成为讨论焦点。

---

## 🚀 版本发布

### rust-v0.159.3（稳定版）
- **新功能**：通过 ChatGPT 登录的本地会话新增"完成账号安全设置"可选提醒（#49744）
- 属于 0.159 分支的安全向 backport，建议 Windows / 共享设备用户跟进

### Alpha 系列快速迭代
- `rust-v0.161.0-alpha.6` / `alpha.5` / `alpha.4` — 连续发版，0.161 主线正在密集集成新功能
- `rust-v0.160.0-alpha.6.2` — 0.160 分支补丁迭代中

---

## 🔥 社区热点 Issues

| # | 标题 | 评论 | 👍 | 为什么重要 |
|---|------|------|------|-----------|
| [#48043](https://github.com/openai/codex/issues/48043) | Codex CLI 0.157.0 在 Windows 启动失败（守护进程权限错误） | 52 | 40 | **0.157 回归性破坏**，影响所有 Windows 用户，0.156.1 是最后一个正常版本 |
| [#48333](https://github.com/openai/codex/issues/48333) | Windows Desktop 26.924 启动卡死在 spinner | 27 | 9 | app-server 与 GUI 进程协调失效，需手动终止子进程才能恢复 |
| [#34349](https://github.com/openai/codex/issues/34349) | 请求允许完全禁用 Pets 功能 | 23 | **81** | **👍数最高的 Issue**，反映大量用户反感桌面宠物功能 |
| [#48555](https://github.com/openai/codex/issues/48555) | Android 远程授权陷入死锁 | 21 | 16 | 跨账号会话污染导致配对失败，影响手机远程用户 |
| [#48466](https://github.com/openai/codex/issues/48466) | Windows 26.924 冷启动长时间 Loading | 19 | 4 | 与 #48333 同一根因，频繁重启才行 |
| [#49464](https://github.com/openai/codex/issues/49464) | VS Code 扩展缺少 GPT-6.1 Sol 模型选择 | 8 | 25 | **已关闭**，但暴露 IDE 扩展与 App/CLI 的模型同步延迟 |
| [#48500](https://github.com/openai/codex/issues/48500) | 托管 app-server 导致 hooks 错挂终端面板 | 10 | 10 | 0.157 引入的 `managed-daemon` 架构副作用，hooks 环境变量归属错乱 |
| [#49497](https://github.com/openai/codex/issues/49497) | Codex Web 首条消息失败"无法确定项目根" | 7 | 17 | 云端任务路径解析异常，云环境与本地工程映射出问题 |
| [#49532](https://github.com/openai/codex/issues/49532) | 把分支选择功能加回 Codex App | 7 | 19 | UI 改版移除重要工作流功能，社区强烈反对 |
| [#48991](https://github.com/openai/codex/issues/48991) | 允许关闭花哨的"欢迎消息" | 7 | 11 | **已关闭**，吐槽"Speak, friend, and enter"等中二开屏语 |

---

## 🛠️ 重要 PR 进展

> 今日 PR 高度集中，全部由 `copyberry[bot]` 自动化机器人提交并合并，主要围绕 **守护进程韧性** 与 **exec-server 重构**。

| PR | 主要变更 |
|---|----------|
| [#49846](https://github.com/openai/codex/pull/49846) | 为每轮捕获宿主扩展数据；新增 `turn_extension_init` 与 `WithTurnExtensionData` |
| [#49843](https://github.com/openai/codex/pull/49843) | 守护进程诊断日志保留 + 更新器日志纳入错误报告，修复 stderr 截断 |
| [#49836](https://github.com/openai/codex/pull/49836) | 语音会话支持选择麦克风通道，避免多声道设备录到回放音 |
| [#49819](https://github.com/openai/codex/pull/49819) | 守护进程启动与更新器在 cwd 被删除后可恢复 |
| [#49818](https://github.com/openai/codex/pull/49818) | 沙箱文件打开改用专用 `FsHelperOpenParams`，移除复用 `FsReadFileParams` 的历史包袱 |
| [#49817](https://github.com/openai/codex/pull/49817) | 新增 Bedrock GovCloud 需求检查 RPC（实验性） |
| [#49813](https://github.com/openai/codex/pull/49813) | 支持 AWS GovCloud 区域（us-gov-east-1 / us-gov-west-1）作为 Bedrock Mantle 端点 |
| [#49812](https://github.com/openai/codex/pull/49812) | Shadow skill 排序移出回合准备路径，转为后台 worker（最多 2 并发）|
| [#49809](https://github.com/openai/codex/pull/49809) | 重连恢复时保留 `--yolo` 等显式启动权限，避免审批/沙箱策略被重置 |
| [#49807](https://github.com/openai/codex/pull/49807) | API Key 模型发现功能标记为稳定并默认启用，回退逻辑加固 |

其他值得注意的改动：`#49814`（本地 agent 树协调关闭）、`#49810`（粘贴缓冲过期后正确处理回车）、`#49806`（协议层向后兼容未知 Codex 错误变体）、`#49804`（macOS 用 ⌃⇧⌥、Linux 用 ^ 渲染 TUI 快捷键提示）。

---

## 📈 功能需求趋势

通过聚类 50 条 Issue，社区当前最关注的方向：

1. **🪟 Windows 平台稳定性（占比 ~40%）** — 启动死锁、app-server 僵尸进程、GUI 卡死、冷启动缓慢，是当前最强烈的痛点
2. **🤖 Computer Use / Browser 自动化** — Windows 截图 `FrameArrived` 超时、Chrome 拦截 `application/json` 导航、Computer tasks 缺少浏览器/桌面 MCP 工具
3. **🔗 多端协同（Desktop ↔ Mobile ↔ Web ↔ Cloud）** — Dot 任务在 desktop 打不开、Android 配对死锁、Codex Web 项目根解析失败、proxy 环境下 WebSocket 断开
4. **🎛️ UI / 体验反向需求** — 禁用 Pets、删除欢迎语、恢复分支选择、键盘快捷键冲突（`⌥+␣` 与 macOS 系统冲突）
5. **🏛️ 企业级 / 合规需求** — AWS GovCloud 区域支持（B）已被官方合并，反映公共部门客户逐步增多
6. **♿ 无障碍 / 国际化** — TUI 屏幕阅读器友好模式长期未解决（#20489）
7. **🧠 模型能力差异** — VS Code 扩展滞后于 App/CLI 的模型上新（GPT-6.1 Sol）

---

## 💬 开发者关注点

**核心痛点：app-server 架构重写的连锁反应**

0.157 引入的"每 `CODEX_HOME` 共享 `codex app-server --managed-daemon`"模型本意是提升性能，但暴露出三类典型 bug：
- **环境变量污染**：hooks 继承首个 TUI 客户端的环境（#48500），导致事件归属错乱
- **进程生命周期**：detached 启动后 cwd 删除 / stderr 截断丢失诊断（#49819、#49843）
- **重连一致性**：显式启动权限、`--yolo` 等在 reconnect 后失效（#49809）

**高频反馈关键词**

- "regression"（回归）— 出现于 0.157 → 0.158 → 0.159 的多条 Issue
- "Windows" — 几乎一半 Issue 与该平台相关
- "app-server" / "managed-daemon" — 新架构的副作用集中爆发
- "stale / cache" — 跨账号/重启导致的陈旧状态问题

**社区呼吁**

1. 加快 Windows 专属回归测试覆盖率
2. 提供"开箱即用"的 app-server 隔离模式开关
3. UI 改版前进行更广泛的社区沟通（分支选择、Pets 等）

---

*日报基于 openai/codex 仓库过去 24 小时数据自动生成，链接均为 GitHub Issue / PR 永久地址。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-10-01** | **数据来源：google-gemini/gemini-cli**

---

## 📌 今日速览

今日 Gemini CLI 发布了 v0.64.0 nightly 版本，重点修复了 `@` 符号在代码中的 CPU 挂起问题以及文件写入的原子性问题。社区方面，**Agent 子代理系统**和**安全/沙箱边界**仍是两大焦点：多个 P1 Issue 涉及子代理在 MAX_TURNS 后错误上报成功、generalist agent 永久挂起、Browser Agent 忽略 settings.json 配置等；与此同时，针对 untrusted 工作区破坏 `.gemini/settings.json`、粘贴文本触发 `@path` 展开导致文件泄露等安全 PR 集中涌现，显示出团队对权限边界和资源安全的重点加固。

---

## 🚀 版本发布

### v0.64.0-nightly.20261001.gc6bccb7ec

| 类别 | 修复内容 | 作者 | PR |
|------|---------|------|-----|
| CLI | 防止 `@` 符号在代码中导致 CPU 挂起并吞掉引号 | @elberthc-byte | [#29557](https://github.com/google-gemini/gemini-cli/pull/29557) |
| Core | 文件工具操作串行化，写入改为原子操作 | @elberthc-byte | [#29434](https://github.com/google-gemini/gemini-cli/pull/29434) |

> 版本号变更的 PR 见 [#29587](https://github.com/google-gemini/gemini-cli/pull/29587)。

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误上报 GOAL 成功 【P1】
- **核心问题**：`codebase_investigator` 子代理在达到最大回合限制后仍报告 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了任务实际未完成的事实。
- **社区反应**：13 条评论，2 个 👍，仍处 `status/need-retesting` 阶段。
- **重要性**：直接影响 Agent 行为可信度和可靠性评估。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 永久挂起 【P1】
- **核心问题**：每次委托给 generalist agent 时都会无限期挂起，连简单的文件夹创建操作都需要等待一小时后手动取消。
- **社区反应**：8 条评论，**8 个 👍**（点赞数最高），反映用户频繁遇到。
- **重要性**：是 Agent 体系的阻断性故障。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 基于模型的 Bash 原生能力 + 零依赖 OS 沙箱 【P2 / 大型特性】
- **核心思路**：Gemini 3 模型天然以 bash 用户方式训练，建议引入 Zero-Dependency OS 沙箱与 Post-Execution Intent Routing，让模型自由链式调用 POSIX 工具又不损害用户安全。
- **重要性**：是 Agent 工具调用架构的战略性提案。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取、搜索与代码库映射 【P2】
- **核心思路**：评估用 AST 工具替代/增强当前基于行的文件读取、搜索与代码库映射，降低 token 消耗并提升精确度。
- **重要性**：与上游的 codebase_investigator 紧密相关，是性能与上下文的双重优化方向。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 极少主动使用 Skills 与子代理 【P2】
- **核心问题**：即使为常见任务（如 gradle、git）配置了描述清晰的 skills，模型也很少主动调用，仅在用户明确指令时才使用。
- **社区反应**：6 条评论，反映"配置了但用不上"的普遍挫败感。

### 6. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) — Browser Agent 忽略 settings.json 覆盖 【P2】
- **核心问题**：`AgentRegistry` 在初始化阶段正确读取并合并了 settings.json 中的覆盖（如 `maxTurns`），但 Browser Agent 在运行中完全忽略这些配置。

### 7. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser 子代理在 Wayland 下失败 【P1】
- **核心问题**：Wayland 显示环境下 browser subagent 直接失败终止。
- **重要性**：直接影响 Linux 桌面用户的可用性。

### 8. [#29574](https://github.com/google-gemini/gemini-cli/issues/29574) — ReadFile 读取图片时 400 Bad Request 【Core / 小型】
- **核心问题**：使用内置 `ReadFile` 工具检查 `.png` 等图片文件时触发 `Requests ending with a model turn are not supported`，CLI 进入 HTTP 400 循环错误状态。

### 9. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数 > 128 时触发 400 错误 【P2】
- **核心问题**：可用工具超过约 400 个后，CLI 直接报 400；期望 Agent 能智能裁剪上下文工具范围。
- **重要性**：在 Skills + Subagents 大量扩展后将是高发问题。

### 10. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 软链接形式的 agent 文件不被识别 【P2】
- **核心问题**：`~/.gemini/agents/filename.md` 若为符号链接则不会被识别为子代理，影响 dotfiles 同步场景。

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 1. [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) — 用 glob 匹配替代 `read-many-files` 的模糊子串匹配 【P1 / L-XL】
- **关键修复**：解决关键 context-bloat bug（b/561554390 / #29045），避免图片、PDF、音频等二进制文件被错误地"显式包含"。
- **意义**：是上下文成本与 Token 消耗的核心优化。

### 2. [#29466](https://github.com/google-gemini/gemini-cli/pull/29466) — 阻止未信任工作区擦除自己的 settings.json 【P1】
- **安全修复**：在未受信任目录下执行 `gemini mcp add` 时，原本会**静默销毁** `.gemini/settings.json` 仅保留新写入的 key。此 PR 修复该数据丢失隐患。

### 3. [#29458](https://github.com/google-gemini/gemini-cli/pull/29458) — 默认禁止粘贴文本中的 `@path` 展开 【P1 / 安全】
- **安全修复**：粘贴 `user@host:~/project$ cat @id_rsa` 这类 shell 文本会触发 `@path` 展开并上传敏感文件。将 `ui.escapePastedAtSymbols` 默认改为 `true`。

### 4. [#29459](https://github.com/google-gemini/gemini-cli/pull/29459) — 将取消信号传播到 shell 注入命令 【P1】
- **稳定性修复**：自定义命令中的 `!{...}` 注入使用全新的 `AbortController().signal`，调用方的取消永远传不到子进程——挂起命令无法被中止。此 PR 修复信号传播链。

### 5. [#29460](https://github.com/google-gemini/gemini-cli/pull/29460) — 长 OAuth URL 换行截断修复 【P1 / 安全】
- **修复**：长 Google OAuth URL 在终端换行时被截断导致 `Error 400: invalid_request` 鉴权失败。改用 OSC 8 终端超链接保持完整 URL。

### 6. [#29583](https://github.com/google-gemini/gemini-cli/pull/29583) — 未信任工作区强制只读 workspace settings 【P1】
- **安全修复**：在未验证工作区中，对 `.gemini/settings.json` 强制实施确定性只读边界，防止 `gemini mcp add` 等命令以"遗漏式同步"覆盖配置。

### 7. [#29520](https://github.com/google-gemini/gemini-cli/pull/29520) — 流式输出期间保留滚动位置 【P1-P2】
- **UX 修复**：流式响应、工具确认、扩展查看时滚动位置会重置，导致用户难以回头查看历史。

### 8. [#29586](https://github.com/google-gemini/gemini-cli/pull/29586) — 确保 Ctrl+C 紧急中止能抵达取消处理器 【P2 / Help wanted】
- **紧急修复**：活动操作期间 `Ctrl+C` 可能被吞掉或污染，导致用户无法中断运行中的 Agent 或流式输出（b/561556027）。

### 9. [#29532](https://github.com/google-gemini/gemini-cli/pull/29532) — 配额错误分类时尊重 RetryInfo 的零延迟 【P1-P2】
- **修复**：原本 `classifyGoogleError()` 会丢弃服务器返回的 `RetryInfo: 0`，把"立即重试"的常规限流误判为终止性配额错误，触发错误的降级/积分流程。

### 10. [#29580](https://github.com/google-gemini/gemini-cli/pull/29580) — ACP `session/load` 会话解析与监听器清理 【P1】
- **修复**：恢复没有对话回合的新建会话时，ACP `session/load` 报错 `Invalid session identifier`；同时修复会话解析失败时的监听器泄漏。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中提炼出的社区焦点方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|----------|
| **🤖 Agent 子代理能力** | #22323、#21409、#21968、#22598、#18836、#18287 | 最强热点，集中在子代理的可靠性、可观测性、并发协作与轨迹可见性 |
| **🔐 安全沙箱与权限边界** | #19873、#29466、#29458、#29583、#22672 | 已上升为优先事项——未信任工作区、破坏性命令拦截、零依赖 OS 沙箱 |
| **🌳 AST 感知工具链** | #22745、#22746、#22747 | 探索用 AST grep 等工具降低 token 消耗、提升搜索/读取精度 |
| **🪟 Browser Agent 体验** | #22267、#22232、#21983 | Browser Agent 的 settings 覆盖、会话接管、Wayland 兼容性问题集中暴露 |
| **⚙️ 工具治理与上下文优化** | #24246、#29457、#19561 | 工具数量上限、模糊匹配导致上下文膨胀、"Tactful Extraction"式外科读 |
| **📋 任务跟踪持久化** | #21000、#18836 | 替换 WriteToDo 的 in-context 跟踪，转向基于文件的 CRUD 跟踪 |
| **🖥️ 终端 UX 与性能** | #21924、#29520、#29586、#22466 | 滚动性能、resize 闪烁、Ctrl+C 可靠性、终端转义行为 |
| **📡 ACP / 非交互模式** | #29580 | ACP 协议的会话生命周期管理正在被强化 |

---

## 💬 开发者关注点

综合高赞 Issue、热门 PR 和评论反馈，开发者社区的**核心痛点与高频需求**可以归纳为以下五点：

1. **Agent 行为的可解释性不足** — 子代理在异常路径下"自我宣称成功"（如 #22323）、Agent 几乎不主动使用已配置 Skills（#21968），开发者需要更明确的状态/意图报告。

2. **未信任工作区的安全模型仍是软肋** — 多项 P1 安全 PR（#29466、#29458、#29583）指向同一个事实：默认未信任的工作区在 `gemini mcp add`、粘贴展开、配置同步等场景下存在静默破坏或泄露风险。

3. **取消/中断信号链不完整** — `!{...}` 注入子进程、Ctrl+C 在活动操作期间、shell 注入的预算管理，开发者难以在 Agent 失控时可靠中断（#29459、#29586）。

4. **上下文成本成为扩展性瓶颈** — 工具数 > 400 时报 400（#24246）、`read-many-files` 模糊匹配导致二进制文件被注入上下文（#29457）、大文件 firehose（#19561），社区呼吁 AST 感知 + 工具范围裁剪。

5. **Terminal UX 的"最后一公里"** — 滚动位置丢失、resize 闪烁、Ctrl+R 高亮错位（#29358）、`\n` 转义错误（#22466）——这些"小问题"在实际使用中累积为高摩擦成本。

---

> 📅 *日报基于 github.com/google-gemini/gemini-cli 过去 24 小时公开数据生成，欢迎转发与引用。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期**：2026-10-01
**数据范围**：github.com/github/copilot-cli 过去 24 小时

---

## 一、今日速览

今日 Copilot CLI 社区最核心的动态是 **v1.0.90 正式版发布**，新增 GPT-6.1 Sol 模型支持与 `--mcp-github-auth` MCP 授权作用域管控，同时 v1.0.91-0 pre-release 进一步收紧了对只读 Shell 流水线的执行审查机制。社区层面，反馈量最大的问题集中在 **400 错误频发、互动模式工具白名单缺失、BYOK 多模型切换受阻**三大类，反映出用户在稳定性、权限精细化、模型灵活性三方面的集中诉求。

---

## 二、版本发布

### 🚀 v1.0.90（正式版，2026-09-30 发布）
**核心更新**：
- 新增 **GPT-6.1 Sol** 模型可选
- 新增 `--mcp-github-auth` 参数，将 GitHub 账号授权作用域限制在已批准的 MCP server 来源
- 新增会话级只读目录审批（read-only directory approvals）
- 修复：恢复被打断会话后权限提示仍可应答

### 🧪 v1.0.91-0（pre-release）
**改进**：
- 完整、可静态分析的只读 shell 流水线可进入"执行证据审查"流程；不完整或未绑定的流水线需显式审批
**修复**：
- Windows 下 Node/npm EACCES socket 拒绝场景下提供沙箱网络绕过

### 🔧 v1.0.90-6 / v1.0.90-7（pre-release）
- 紧凑时间线中点击扩展的工具调用即可折叠
- 按住 Space / `Ctrl+X V` 时语音模式未开启或未就绪会给出解释
- 恢复会话后权限提示仍可应答

---

## 三、社区热点 Issues

| # | 标题 | 评论 / 👍 | 重要性说明 |
|---|------|-----------|-----------|
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI 持续报 400 invalid request body（code review 场景） | 32 / 13 | 24h 内最热门 issue，反映服务端校验或 CLI 请求构造存在持续性问题，严重影响 diff 审查场景 |
| [#1973](https://github.com/github/copilot-cli/issues/1973) | Feature：Interactive 模式工具白名单 | 16 / 29 | 👍 数极高，社区渴望介于"每工具手动审批"与"全部放行"之间的中间态，呼声强烈 |
| [#3282](https://github.com/github/copilot-cli/issues/3282) | 多 BYOK 模型支持（已 CLOSED） | 12 / 31 | 👍 排名靠前，关注 BYOK 用户在多模型环境下的切换痛点，TUI 内无法热切换问题已被关闭跟踪 |
| [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation:true` 导致 Skill 完全不可达 | 10 / 11 | 揭示 Skill 配置语义与可达性之间的不一致，用户显式调用同样失败 |
| [#2205](https://github.com/github/copilot-cli/issues/2205) | Terminator 终端下鼠标滚动行为错乱 | 14 / 16 | 影响历史回看，鼠标滚轮错误绑定到输入历史，对重度 CLI 用户体验破坏明显 |
| [#5008](https://github.com/github/copilot-cli/issues/5008) | 1.0.89 启动报 "Failed to read model provider attribution: Not authenticated" | 5 / 4 | 1.0.89 引入的回归，启动竞态导致每个交互会话开头错误重复两次 |
| [#4998](https://github.com/github/copilot-cli/issues/4998) | macOS 更新重启后 `.mcp-writer.binding` 设备 ID 失效导致 CLI 完全不可用 | 3 / 1 | 严重影响 macOS 用户，关键 bug 多次复现，与 [#5026](https://github.com/github/copilot-cli/issues/5026) 同一根因 |
| [#3595](https://github.com/github/copilot-cli/issues/3595) | AutoPilot 模式应在需要用户确认时暂停 | 3 / 2 | 提出"半自动"工作流诉求，自动 vs 手动之间缺乏渐进态 |
| [#4851](https://github.com/github/copilot-cli/issues/4851) | Azure MCP 注册表校验失败（BrokenPipe） | 3 / 7 | 企业 Azure MCP 集成一夜失效，影响生产可用性 |
| [#5024](https://github.com/github/copilot-cli/issues/5024) | 原生 Opus 5.5 调用 400（`fallback-credit-2026-07-01` 头被拒） | 0 / 0 | 24h 内最新上报，5/5 复现率，涉及 Anthropic beta 头兼容，需快速跟进 |
| [#5025](https://github.com/github/copilot-cli/issues/5025) | Figma 远程 MCP：`get_code_connect_map` 始终返回空 | 0 / 0 | 同账号、同文件下其他 MCP 客户端可正常获取，仅 Copilot CLI 为空，疑为客户端侧问题 |
| [#2203](https://github.com/github/copilot-cli/issues/2203) | 恢复 0.0.421 之前的"任务中途切换到 AutoPilot"快捷键行为 | 2 / 11 | 11 个 👍，高需求但低活跃度，反映老用户对该工作流的依赖 |

---

## 四、重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新**。当前所有修复/合并动作集中在 v1.0.90 系列与 v1.0.91-0 pre-release 的发布流程上，代码侧暂处于静默期。建议关注下周的常规 PR 流入节奏，特别是与 MCP、权限审批相关的修复（#4542、#4556、#3688、#3366 均已 CLOSED，预期会有对应合入）。

---

## 五、功能需求趋势

通过对近 24 小时活跃 issue 的归类，社区关注度最高的方向如下：

1. **🔌 MCP 集成稳定性**（议题密度最高）
   - 涵盖：macOS 设备 ID 锁失效（#4998, #5026）、Azure / Figma / 自定义注册表失败（#4851, #5025, #4949）、OAuth 发现路径异常（#4662）、marketplace 注册静默失败（#4556）、工作区 `.mcp.json` 检测与连接不一致（#4542）。
   - 趋势：MCP 已成 CLI 主战场，配套的鉴权、注册表、设备锁仍显脆弱。

2. **🤖 多模型 / BYOK 管理**
   - #3282、#2554、#5024 共同指向：多 BYOK 模型配置、子代理模型切换、新模型（Opus 5.5、GPT-6.1 Sol）兼容性。
   - 趋势：模型生态快速扩张，CLI 配置层尚未跟上多模型、动态切换的诉求。

3. **🛡️ 权限与审批 UX**
   - #1973（白名单）、#3595（AutoPilot 暂停）、#2203（中途切换）三者都表达同一诉求：**默认安全但允许"渐进式放权"** 的工作流，而非二值开关。

4. **📜 Skills / Agents 配置一致性**
   - #4438（Skill 不可达）、#3688（agents 与 skills / mcp.json 的解析根目录不一致）、#4440（`.claude/rules` 互通）显示仓库级配置来源正变得分散，跨工具互操作性是新痛点。

5. **🖥️ 终端渲染与回看体验**
   - #2205（滚动行为）、#4894（长会话 scrollback 跳到起点）、#4995（请求/响应高亮与折叠）、#5015（键盘可访问 pager）—— 一组高度相关的可访问性与浏览效率诉求。

---

## 六、开发者关注点

**当前最尖锐的痛点（按频率排序）**：

| 痛点 | 代表 Issue |
|------|-----------|
| 🔁 MCP writer-lock 在 macOS 重启后失效，导致 CLI 全功能不可用 | #4998 / #5026 |
| 📡 MCP 注册表（Azure / Figma / 自定义）连接/校验失败 | #4851 / #4949 / #5025 |
| ⏱️ 长会话 resume 时 scrollback 跳到起点、滚动条无法回到当前位置 | #4894 / #4995 |
| 🔐 Interactive 模式缺乏"工具白名单 / 半自动"中间态 | #1973 / #3595 |
| 🧠 多 BYOK 模型配置 + 子代理异模型 + 新模型（Opus 5.5）兼容 | #3282 / #2554 / #5024 |
| 🚫 只读 shell 流水线审批粒度过粗 | v1.0.91-0 改进方向 |
| 🧩 Skills / Agents / `.mcp.json` 解析根目录不一致 | #4438 / #3688 |

**总结**：本期社区反馈呈现出"MCP 与模型两条主线并行爆发"的特征——MCP 一侧从注册表到本地锁全面承压，模型一侧则因新版本/新供应商快速接入而暴露配置兼容问题。叠加仍待解决的权限审批粒度与终端 UX 痛点，**短期优先级建议聚焦 MCP 健壮性与多模型配置 UX**，这两块是当下高赞、高频、高严重度的交集。

---

*本日报基于公开 GitHub 数据自动生成，仅供技术参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-10-01**

---

## 📌 今日速览

今日 OpenCode 发布 v1.18.34 维护版本，重点修复 macOS 27+ 二进制签名问题；社区侧的核心矛盾集中在 **"错误信息不透明"** —— 多个高频 Issue（#49365、#48965、#48988、#49570）指向同一个 TypeError `evaluating 'a.name'`，被开发者戏称为 "a.name 诅咒"，已通过 PR #49229（默认超时）、PR #52418（MCP 自描述错误）等多个修复逐步收敛。同时，**MCP 生态治理**（#52418、#52414、#51946）和 **GUI 插件化重构**（#52369）是核心代码演进的两条主线。

---

## 🚀 版本发布

### v1.18.34（2026-10-01）

**Core 修复：**
- 模型请求中携带命名空间化的 `session` 与 `parent-session` 身份头
- 重新签名本地编译的 macOS 二进制，确保在 **macOS 27+** 上稳定运行（@ryangamerdev 贡献）
- 使用 Developer ID 签名 macOS CLI 发布版二进制

感谢 3 位社区贡献者。

---

## 🔥 社区热点 Issues

### 1. [#25884](https://github.com/anomalyco/opencode/issues/25884) — OpenAI `server_is_overloaded` 流错误未自动重试（已关闭）
**作者**：johnwaldo | 💬 15 | 👍 11
**重要性**：高。OpenAI 兼容接口返回瞬时 `service_unavailable_error` 时，OpenCode 不会自动重试，导致体验断崖式下降。讨论区汇集了多个云服务商的类似处理范式（指数退避、抖动），最终方案值得其他 provider 参考。

### 2. [#49365](https://github.com/anomalyco/opencode/issues/49365) — 升级后 `TypeError: undefined is not an object (evaluating 'a.name')`（已关闭）
**作者**：MiguVT | 💬 11
**重要性**：高。这是今天最集中的"a.name 诅咒"源头 issue，附带了高质量的 debug 日志，影响所有 agent 调用。

### 3. [#37704](https://github.com/anomalyco/opencode/issues/37704) — daxothy 脖子太短（已关闭）
**作者**：opencode-agent[bot] | 💬 9 | 👍 22
**重要性**：轻松一刻。由官方 bot 推动的社区 meme issue，22 赞证明社区文化建设良好，也展示了 issue 模板的多样性。

### 4. [#20322](https://github.com/anomalyco/opencode/issues/20322) — FEATURE：跨会话学习的原生 auto-memory（已关闭）
**作者**：lleontor705 | 💬 9 | 👍 7
**重要性**：高。呼应 #32658，是 **持久化记忆** 这一长期呼声的具体方案，涉及 schema 设计与会话索引。

### 5. [#46729](https://github.com/anomalyco/opencode/issues/46729) — Bedrock thinking block 参数被拒（已关闭）
**作者**：januaryjon | 💬 8 | 👍 14
**重要性**：高。从 1.18.25→1.18.26 升级后，Amazon Bedrock 上 Opus 5 调用直接 fail，是 Bedrock 用户的硬阻塞。

### 6. [#34344](https://github.com/anomalyco/opencode/issues/34344) — 免费模型配额无限刷漏洞（已关闭）
**作者**：hf994tydsg-cmyk | 💬 7
**重要性**：安全敏感。指出 IP 维度的速率限制可通过 VPN 轮换绕过，影响 DeepSeek V4 Flash、mimo v2.5 等免费模型计费。

### 7. [#41551](https://github.com/anomalyco/opencode/issues/41551) — FEATURE：添加 Muse Spark / Muse Code provider（**仍 OPEN**）
**作者**：hades200082 | 💬 6 | 👍 11
**重要性**：中。Meta 发布的 coding harness，是社区最关注的 provider 增量需求之一；作为 OPEN 状态，值得关注后续进度。

### 8. [#39847](https://github.com/anomalyco/opencode/issues/39847) — FEATURE：模型托管位置透明化（已关闭）
**作者**：christianhelle | 💬 6 | 👍 23
**重要性**：高。**23 赞** 是今日 issue 中最高，反映用户对 **数据主权** 的强烈诉求——尤其是欧盟用户发现 DeepSeek V4 突然不可用后。

### 9. [#51481](https://github.com/anomalyco/opencode/issues/51481) — Bedrock Opus 5.5 子代理中 thinking block 被拒（已关闭）
**作者**：guss77 | 💬 5
**重要性**：高。Anthropic 原生路由会自动设置 `prefix_mismatch_behavior: "drop"`，Bedrock 路由缺失对应逻辑，导致长会话子代理全量崩溃。

### 10. [#48965](https://github.com/anomalyco/opencode/issues/48965) — `SystemPrompt.environment` 在每次 prompt 时崩溃（已关闭）
**作者**：mejiro-rin | 💬 4 | 👍 **22**
**重要性**：高。👍 数仅次于 #39847，是同一类 `a.name` 错误的另一表现分支，影响所有 prompt 提交前的环境渲染。

---

## 🛠 重要 PR 进展

### 1. [#52418](https://github.com/anomalyco/opencode/pull/52418) — MCP 错误信息自描述（OPEN）
让 `MCP server is not connected`、`Connection closed` 等错误携带服务器名与失败原因，结束"无日志无法定位"的现状。

### 2. [#49229](https://github.com/anomalyco/opencode/pull/49229) — Provider 默认超时改为 5 分钟（OPEN）
重新实现 #46917，将响应头等待与流式 chunk 间隙的默认超时统一为 300,000ms，并对持续有数据的流重置计时器。

### 3. [#52369](https://github.com/anomalyco/opencode/pull/52369) — GUI 特性迁入内置扩展（OPEN）
`packages/app` 与 `packages/desktop` 只保留 region/tab/command/storage/dialog 等宿主概念，所有功能通过统一 SDK 作为 GUI extension 加载——架构级演进。

### 4. [#52414](https://github.com/anomalyco/opencode/pull/52414) — 关闭时终结 legacy MCP 会话（已关闭）
修复了远程 MCP 连接仅 abort transport HTTP 流、而未发送 MCP `DELETE` 的问题，避免 Streamable HTTP 会话在服务端悬挂过期。

### 5. [#51946](https://github.com/anomalyco/opencode/pull/51946) — SIGTERM 时停止 MCP 子进程（OPEN）
`opencode serve` 之前无 SIGTERM/SIGINT 处理器，导致 `docker run` 等 MCP 子进程在停止时被孤立。

### 6. [#51947](https://github.com/anomalyco/opencode/pull/51947) — VCS handler 等待插件激活（OPEN）
冷启动调用 `GET /api/vcs` 仍会返回 `{"branch":{}}` 的根因修复——VCS provider 在异步插件激活中注册，需 await。

### 7. [#43069](https://github.com/anomalyco/opencode/pull/43069) — `opencode serve --no-auth` 选项（OPEN）
新增 `--no-auth` 与 `OPENCODE_AUTH=false`，用于受管控部署与服务注册场景。

### 8. [#52385](https://github.com/anomalyco/opencode/pull/52385) — Plugin 暴露 session compaction（已关闭）
把现有的 `session.compaction` 能力下放到 plugin SDK，关闭 #52409，是 #49389 多步计划的第一步。

### 9. [#52413](https://github.com/anomalyco/opencode/pull/52413) — 不可解码的 service 配置不再静默读取为空（OPEN）
`ServiceConfig.read` 之前对缺失文件与解码失败都返回 `{}`，会覆盖真实配置；现在能正确抛错。

### 10. [#52416 / #52415](https://github.com/anomalyco/opencode/pull/52416) — Issue/PR 合规宽限期延长至 72 小时（已关闭）
自动化清理策略调整为：警告后 72 小时再关闭，给贡献者更充足时间补全模板字段；过期 issue/PR 清理节奏不变。

---

## 📈 功能需求趋势

通过分析今日活跃 issues 与 PR，社区关注点按热度排序如下：

| 方向 | 热度 | 代表 Issue/PR |
|------|------|---------------|
| **Provider 生态扩展** | 🔥🔥🔥 | #41551 (Muse Spark)、#50844 (GitLab Duo) |
| **持久化记忆 / 跨会话学习** | 🔥🔥🔥 | #20322、#32658 |
| **错误可观测性 / 自我描述错误** | 🔥🔥🔥 | #52418、#48965、#48988、#49365 |
| **数据主权与模型托管透明** | 🔥🔥 | #39847 |
| **MCP 健壮性** | 🔥🔥 | #52414、#52418、#51946、#23506 (TLS skip) |
| **TUI / Desktop UX** | 🔥🔥 | #32370 (Linux 主选择缓冲区)、#43128 (可配置快捷键)、#39862 (面板拖拽) |
| **订阅/计费稳定性** | 🔥 | #40064 (GO 订阅阻塞)、#34344 (配额绕过) |
| **主题与个性化** | 🔥 | #52398 (ZenBlue) |
| **Plugin 能力下沉** | 🔥 | #52385、#52369 |

---

## 💢 开发者关注点与痛点

通过对今日 issue 摘要与 PR 描述的语义聚类，开发者反馈集中在以下五个高频痛点：

1. **错误信息不可读** —— "Unexpected server error. Check server logs for details." 与 `TypeError: undefined is not an object (evaluating 'a.name')` 是被引用最多的两句话。多个根因相同的 issue 都被这层外壳掩盖，迫使用户必须 `--log-level DEBUG` 才能定位问题。PR #52418、#49229 是直接回应。

2. **Provider 兼容性回归** —— Bedrock thinking block（#46729、#51481）、DeepSeek interleaved reasoning（#35689）、Anthropic normalize（#25774）、Zen 429 被吞（#48988）共同表明：**provider 适配层在快速演进中缺乏回归测试**，每次跨大版本升级都伴随一波兼容性损伤。

3. **macOS 与 Android 平台一致性** —— v1.18.34 紧急修 macOS 27+ 签名；Android PWA 通知（#49961）、Bionic/Bun 下 splitting:true 崩溃（#49262）显示移动端覆盖度仍弱。

4. **CLI / TUI 在极端路径下的脆弱性** —— `$EDITOR` 带空格（#52323）、`/editor` 路径引号（#51787）、空输入回车误发送（#40106）、Linux 主缓冲区（#32370）都是小细节，但持续累积说明 TUI 输入层仍缺乏端到端测试。

5. **订阅与计费透明度** —— #40064、#48792、#34344 三连指出 GO/Zen 订阅失败、配额被绕过等问题，反映商业化路径中的产品成熟度短板。

---

> 📊 **日报数据基线**：基于 50 条最新 issue、50 条最新 PR 与 1 个版本发布聚合生成。链接全部指向 `anomalyco/opencode` 仓库原始页面。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-01

> 数据来源：`badlogic/pi-mono`（earendil-works/pi），采样窗口：过去 24 小时

---

## 📌 今日速览

v0.99.2 发布，将 MCP 服务器"移到后台"以减少首提示阻塞；社区最关心的仍是 **TUI 渲染性能**（长转录暴力抖动）和 **MCP OAuth/工具命名** 一系列收尾问题；同时 Anthropic、Azure Foundry、Vertex AI 等多家 Provider 适配工作进入合并节奏。

---

## 🚀 版本发布

### v0.99.2 — MCP 不再喧宾夺主

- 使用默认 `codemode` 暴露方式的 MCP 服务器**不再**出现在 `codemode` 的工具描述中，也不再阻塞首条提示。
- 改为在系统提示中以独立段落简短展示，脚本通过 `searchTools()` / `describeName()` 主动查找。
- 详情见 [Release v0.99.2](https://github.com/earendil-works/pi/releases/tag/v0.99.2)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 反应 |
|---|---|---|---|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **思考中被 ESC 中断后卡在 "Working..."** | 自 v0.84.0 起的回归，多机复现，仅 `CTRL+c` + `pi -c` 能恢复 | 💬18 👍2 |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | **context size 错误默认 128k** | `models.json` 中 id 与 provider 已有模型重合时，context/cost/maxTokens 全部取错 | 💬9 👍4 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | **TUI 长转录暴力抖动/字符重复** | `firstChanged < prevViewportTop` 路径每帧触发 fullRender | 💬8 👍1 |
| [#8331](https://github.com/earendil-works/pi/issues/8331) | **Provider 流中断时 Agent 永久挂起** | Anthropic 529 期间 4 个长会话冻死；`streamAssistantResponse` 的 `for await` 永等 | 💬6 👍2 |
| [#10162](https://github.com/earendil-works/pi/issues/10162) | **输入图片过多导致 Agent 任务中断** | 多图场景与 auto-compaction 协同问题，破坏"长时间托管"用法 | 💬6 |
| [#10212](https://github.com/earendil-works/pi/issues/10212) ✅已关闭 | **新会话首条响应阻塞 8–10s（MCP 启动）** | 0.99.1 引入，与 extensions 无关 | 💬6 |
| [#10172](https://github.com/earendil-works/pi/issues/10172) ✅已关闭 | **MCP OAuth 需支持 `authServerMetadataUrl`** | 影响从其他实现迁移过来的用户 | 💬5 |
| [#9134](https://github.com/earendil-works/pi/issues/9134) | **Anthropic 适配器静默丢弃根 anyOf** | 自定义工具 schema 在 strict/non-strict 路径上都被截断 | 💬5 |
| [#10186](https://github.com/earendil-works/pi/issues/10186) ✅已关闭 | **MCP 认证链接增加 OSC-8 可点击区** | TUI 中长 OAuth 链接换行体验差 | 💬4 👍2 |
| [#10257](https://github.com/earendil-works/pi/issues/10257) ✅已关闭 | **切换到 Codex 时自定义工具 ID 报错** | `fc_` 前缀历史被错误回放为 `ctc_` 自定义工具调用 | 💬4 |

**值得多看一眼：**
- [#10266](https://github.com/earendil-works/pi/issues/10266) / [#10219](https://github.com/earendil-works/pi/issues/10219)：MCP OAuth 在 token 响应 `scope: ""` 时直接拒签，影响 Atlassian 等多家 server。
- [#10239](https://github.com/earendil-works/pi/issues/10239)：MCP 工具名 `read-file` 与 `read_file` 在 codemode 中碰撞，会**调错工具**。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 主题 | 价值 |
|---|---|---|
| [#10242](https://github.com/earendil-works/pi/pull/10242) ✅ | **Anthropic Provider：使用 SDK 工作负载身份联合** | 关闭 #10177，企业/云端身份链路原生化 |
| [#10241](https://github.com/earendil-works/pi/pull/10241) ✅ | **MCP codemode 工具名消歧** | 关闭 #10239，按 codemode id 跟踪所有权，配合 hash 后缀防误调 |
| [#10232](https://github.com/earendil-works/pi/pull/10232) ✅ | **durable：SQLite 改为异步** | 适配器可脱离 harness 运行时；`SqliteExecutor` 提供 `run/get/all` |
| [#10235](https://github.com/earendil-works/pi/pull/10235) ✅ | **编程式 Provider 配置（嵌入式 agiquery 场景）** | 上层拥有端点/方言/凭据，按请求注入 pi |
| [#10233](https://github.com/earendil-works/pi/pull/10233) ✅ | **`--base-url` / `--api-type` 运行级端点覆盖** | 不再为一次性代理/Gateway 改 `models.json` |
| [#10225](https://github.com/earendil-works/pi/pull/10225) ✅ | **edit 工具拒绝重叠匹配** | 关闭 #9697，`split()` 不再绕开唯一性检查 |
| [#10224](https://github.com/earendil-works/pi/pull/10224) ✅ | **fork 会话前迁移旧格式记录** | 关闭 #9950，v1 多消息 fork 不再只剩最后一条 |
| [#10223](https://github.com/earendil-works/pi/pull/10223) ✅ | **拒绝非法 session 文件后保留活动会话** | 关闭 #10227，避免消息被追加到 `{}` 文件 |
| [#10194](https://github.com/earendil-works/pi/pull/10194) ✅ | **Anthropic OAuth 增加 copy-code 登录方式** | 远程主机 / 无浏览器场景可用 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) 🟡 | **Azure Foundry Chat Completions 部署支持** | 关闭 #9645，让 DeepSeek V4 Pro 等模型可用 |

**尚在 OPEN、值得跟踪：**
- [#10197](https://github.com/earendil-works/pi/pull/10197) **统一包制品校验**：单一 manifest 驱动、内容寻址产物，本地校验更接近发布件。
- [#10050](https://github.com/earendil-works/pi/pull/10050) **扩展控制台输出不再串入 TUI**：修复扩展 `console.*` / `process.stdout` 破坏差分渲染的问题（关闭 #10002）。

---

## 📈 功能需求趋势

从 Issue/PR 文本归纳出当前社区最关注的方向：

1. **MCP 生态成熟化** — OAuth 完善（scope、metadata）、TUI 体验（OSC-8 链接）、codemode 命名消歧，是当下最高频主题。
2. **多 Provider 与企业接入** — Anthropic（WIF、Vertex）、Azure Foundry（Chat Completions）、kimi-coding 等适配并发，反映"自托管 + 企业身份"成为真实需求。
3. **长任务可靠性** — 流中断挂起、Thinking ESC 卡死、上下文默认 128k、图片超限中断，集中在"pi 能不能托管跑一晚"。
4. **TUI 渲染性能** — 长转录抖动、颜色泄漏、扩展 stdout 污染，本质都是差分渲染边界问题。
5. **可嵌入 / 编程式 Provider** — `--base-url`、`--api-type`、agiquery 集成模式，说明 pi 正走向"被其他 Agent 调度"的位置。

---

## 🎯 开发者关注点与痛点

- **会话持久化迁移链路脆弱**：`forkFrom` 写 v3 header 但跳过 v2 迁移（#9950 / #10224），老数据 fork 即损坏——开发者难以信任历史会话。
- **Edit/工具的语义边界不严密**：重叠匹配通过校验（#9697）、codemode 同名工具误调（#10239），都属于"看起来能跑、关键 case 静默错误"的类型。
- **Provider 协议碎片化**：OpenAI Responses 对工具名的字符集限制（`:`、`-`）（#9852）、Nemotron/Qwen 的 `$ref` 展开（#10270）、GLM 的 reasoning vs reasoning_content 回放（#10262）——表明"接更多 provider"的边际成本正在抬高。
- **MCP OAuth 健壮性**：多家 server 在 `scope` 空串下全挂，社区开始用同类 issue 同时开多张 ticket（#10266 与 #10219），反映对官方认证路径稳定性的不信任。
- **首次启动延迟的隐性回归**：0.99.1 的 8–10s 阻塞（#10212）由 v0.99.2 缓解，但说明"扩展/MCP 启动开销"未做显式预算，是后续版本值得跟踪的健康指标。

---

*日报生成时间：2026-10-01｜覆盖仓库：`earendil-works/pi`（原 `badlogic/pi-mono`）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-10-01

## 📌 今日速览

今日 Qwen Code 社区围绕 **Managed Agent 架构演进**形成明显热点——Stage D/G/H/M2 等多个子阶段的提案与 PR 同步推进，涵盖 Session 历史外置、Workspace 绑定会话生命周期、ACP 子进程托管等核心议题。同时，**Shell 权限语义安全**与 **LSP 诊断可靠性**两类 P1/P2 问题获得实质性修复跟进，CI 与测试体系也迎来多笔改进。

---

## 🚀 版本发布

**v0.24.7-nightly.20260930.57e720bc97** 已发布，主要变更：
- `fix(core)`：Code Mode 文本与 lazy tool discovery 对齐（[#12990](https://github.com/QwenLM/qwen-code/pull/12990)，作者 @tanzhenxin）
- `fix(permissions)`：已批准的权限规则在异步场景下的语义修正

> 完整 release notes：[Release v0.24.7-nightly.20260930.57e720bc97](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.7-nightly.20260930.57e720bc97)

---

## 🔥 社区热点 Issues

1. **[#12380](https://github.com/QwenLM/qwen-code/issues/12380) — Managed Agent 双路径架构与分阶段交付提案（38 评论）**
   最高讨论度的设计提案，定义 Managed Agent 的 TypeScript agent loop + 独立推理 + 持久 Session 所有权 + WebShell 集成架构。是 Stage B/D/F/G/H 的总纲，已衍生出多条子追踪 issue。

2. **[#12867](https://github.com/QwenLM/qwen-code/issues/12867) — Stage D 后续：持久生命周期、Turns、Actions（11 评论）**
   在 #12793（D1–D3）交付基础上，推进 durable lifecycle、`java_durable` admission profile 与 `AgentDefinition`，是 Managed Agent 走向生产化的关键一步。

3. **[#13019](https://github.com/QwenLM/qwen-code/issues/13019) — 远程发布目录过期候选的安全恢复（8 评论）**
   针对 #12894 中 segment PUT 在 CANDIDATE 状态下过期时的回放风险，提出安全恢复机制，关乎数据完整性。

4. **[#13062](https://github.com/QwenLM/qwen-code/issues/13062) — 投机性 accept 失败时缺失遥测事件（8 评论）**
   投机跟随 + 文件复制失败时，`SpeculationEvent` 在 `.then()` 分支被静默吞掉，导致 RUM 数据缺失，影响产品质量分析。

5. **[#13030](https://github.com/QwenLM/qwen-code/issues/13030) — Hosted Workspace 新增只读搜索工具 profile（8 评论）**
   在 Hosted Harness 中允许 `list_directory` / `glob` / `grep_search` 三件套，扩展 Hosted 环境能力。

6. **[#13106](https://github.com/QwenLM/qwen-code/issues/13106) — [P1/安全] `cd ... > .qwen/settings.json` 绕过 Write 拒绝规则（5 评论）**
   `resolveCdTargetCwd` 丢弃了 `extractRedirects` 的结果，导致重定向目标的权限检查被静默跳过。属于高优先级安全漏洞。

7. **[#12042](https://github.com/QwenLM/qwen-code/issues/12042) — api-history 投影丢失 provenance 字段（6 评论）**
   `detectTurnInterruption()` 在 `Content[]` 投影过程中丢失了 `'system'`/`'real_user'` 标识，造成通知形态误分类。

8. **[#12952](https://github.com/QwenLM/qwen-code/issues/12952) — Stage G：权威 Session 历史外部化与 writer fencing（5 评论）**
   补齐 Stage G 的追踪 issue，聚焦 Session 历史外部化与故障接管前的写入隔离证明。

9. **[#12467](https://github.com/QwenLM/qwen-code/issues/12467) — LSP 诊断在拉取失败时仍报"干净"（4 评论）**
   语言服务器失败/未就绪时仍返回 `No diagnostics found` 且 `is_error=false`，误导模型与用户。已在 #13128 中修复。

10. **[#13130](https://github.com/QwenLM/qwen-code/issues/13130) — Qwen Code Desktop 工作区全部变为 untrusted（3 评论）**
    用户报告所有 workspace 突然被标记为 untrusted/read-only，UI 无明显恢复路径，影响 Desktop 端可用性。

---

## 🛠️ 重要 PR 进展

1. **[#13128](https://github.com/QwenLM/qwen-code/pull/13128) — LSP 失败诊断显式标为 error**（@yiliang114）
   修复 #12467：`NativeLspService.diagnostics()` 与 `workspaceDiagnostics()` 在无 ready server 时直接 reject，避免误报清洁状态。

2. **[#13135](https://github.com/QwenLM/qwen-code/pull/13135) — Workspace-bound Session 可靠关闭**（@doudouOUC）
   通过现有 public/WebShell 生命周期操作实现 idle `hosted-workspace-files/1` 会话的幂等关闭（202 + CLOSED）。

4. **[#13115](https://github.com/QwenLM/qwen-code/pull/13115) — Broker 恢复声明续期**（@wenshao）
   修复 #13017 跟踪的 SDK Java 抖动门：恢复路径不再因单次操作声明丢失而被 fence。

6. **[#12280](https://github.com/QwenLM/qwen-code/pull/12280) — 引号隐藏 `&` 时仍执行 Write 拒绝规则**（@he-yufeng）
   修复 #12246：解决 `'x\'';echo ' & echo {} > settings.json` 此类引号 + 后台运算符组合绕过 deny 规则的问题。

8. **[#12958](https://github.com/QwenLM/qwen-code/pull/12958) — 移除内部模型请求的硬编码 temperature**（@holny）
   适配 OpenAI GPT-6 等现代提供方要求，避免 reasoning 模式下因 `temperature` 参数被拒绝。

10. **[#11959](https://github.com/QwenLM/qwen-code/pull/11959) — 引入 models.dev 目录解析模型限额与模态**（@yiliang114）
    CLI 内置精简快照 + 24h 缓存/ETag 后台刷新，16 MiB 全量下载上限，提供更可靠的上下文窗口信息源。

12. **[#13112](https://github.com/QwenLM/qwen-code/pull/13112) — Workspace-bound Session 创建者支持 submit/cancel/rename**（@yiliang114）
    解决 G0 后 Hosted Session 仅能跑一个 Turn 的限制，让创建者可继续与之交互。

14. **[#13084](https://github.com/QwenLM/qwen-code/pull/13084) — 保护 Session 拥有的工具输出退役**（@doudouOUC）
    O4-1：固定预算 DB reader 租约 + 独立 PUT 重试 + 前台 Shell 候选观测；Session 删除原子化退役。

16. **[#13131](https://github.com/QwenLM/qwen-code/pull/13131) — 在私有 ACP 子进程中托管 Managed 会话 (M2)**（@wenshao）
    实现 #12861 普通宿主 Managed 引擎设计的 M2 切片，提供 Managed host + 守护通道工厂。

18. **[#13104](https://github.com/QwenLM/qwen-code/pull/13104) — 添加 SerpApi 到 Web 搜索 MCP 服务列表**（@pulkitchowdry）
    第三方贡献，扩展 docs/developers/tools/web-search.md 支持范围。

20. **[#13007](https://github.com/QwenLM/qwen-code/pull/13007) — 压缩 Core 测试套件而不删测试**（@tanzhenxin，⚠️ 已关闭）
    现状下 CLI + Core 测试/支持代码近 200 万行，本次尝试精简；当前已关闭，可能被拆分重做。

---

## 📈 功能需求趋势

从近 24 小时 Issues/PR 中提炼社区关注的功能方向：

| 方向 | 代表 Issue/PR | 热度信号 |
| --- | --- | --- |
| **Managed Agent / 多 Agent 平台化** | #12380、#12867、#12952、#13131、#13112、#13135、#13084 | 占比最高，覆盖 B/D/G/H/M2/O3/O4 全阶段 |
| **安全 & 权限语义加固** | #13106、#12280、#12770、#13133 优先级坑 #13132 | 含 1 个 P1 安全问题，2 个 P2 性能/安全 |
| **可靠性与可观测性** | #13062、#12467 → #13128、#13125、#13132 | 遥测缺失、错误状态误报、长会话延迟均被关注 |
| **模型与提供商生态** | #11959（models.dev）、#12958（去硬编码 temperature）、#13104（SerpApi） | 新模型（GPT-6）适配与第三方目录集成 |
| **WebShell / Desktop UX** | #13096、#13124、#13130、#9305、#11151 | 上下文快照渲染、文件历史保留、键盘删除 chips 等细节 |
| **测试与 CI 体系** | #13007、#12650、#13103、#13047、#12497、#12714 | 测试压缩、yamllint 降级、突变测试、CI 失败修复 |

---

## 💬 开发者关注点

1. **Managed Agent 的"完成度焦虑"**——从 Stage D/G/H 同步推进可看出，社区高度关注架构稳定性而非快速堆功能，多次 PR 都采用 "Critical-only" 策略推迟非阻塞建议（如 #13045/#13046/#13047/#13049），反映出对**评审纪律与回归控制**的重视。

2. **Shell 权限语义的边界复杂度**——#13106 与 #12280 都揭示了**引号 + 重定向 + 后台运算符**组合绕过 deny 规则的隐蔽路径，是开发者反复踩坑的高频点，权限模型需要更结构化的"操作语义树"。

3. **LSP/语言服务器的可信信号**——#12467、#13128 表明社区强烈呼吁"失败即明示"，反对将"无法获取"伪装为"干净结果"，这对模型决策链的安全至关重要。

4. **后台子代理并发与第三方模型适配**——#12959 提示并行 subagent 易触发 400，#12958 提示硬编码 `temperature` 与 GPT-6 不兼容，**新模型适配**和**并发治理**成为两条并行的开发者痛点。

5. **桌面端信任配置恢复路径缺失**——#13130 反映 Qwen Code Desktop 的信任机制缺乏可视化恢复手段，建议引入明确的"重新标记 workspace 为 trusted"入口。

6. **遥测与隐私一致性**——#12770（扩展闭包事件忽略 `usageStatisticsEnabled`）显示开发者期望**隐私开关严格生效**，而非"形同虚设"。

---

*日报基于 GitHub 公开数据生成，覆盖 2026-10-01 过去 24 小时内 QwenLM/qwen-code 仓库的 Release、Issue、PR 动态。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-01**

> 注：本期日报数据来源仓库为 `Hmbown/DeepSeek-TUI`，但所列 Issues 与 PRs 均归属于其上层项目 `Hmbown/Codewhale`（推测为同一代码空间或关联组件），下文沿用数据中的链接。

---

## 1. 今日速览

今日社区活跃度集中在三个方向：**v0.10.1 发布集成的多批合并（PR #6782）**、**流/重试/传输层可配置化的修复落地（#6784 等）**，以及**重试与卡顿恢复机制可观测性的集中讨论**。新 Issue 中，**中文汉化组招募（#6804）** 标志着本地化社区建设正式启动，值得持续关注。

---

## 2. 版本发布

过去 24 小时内无正式 Release tag 发布。但 **v0.10.1 集成分支 `wave/0.10.1-next`（PR #6782）** 已更新至 head `ce1ecc8dc`，包含 5 个本地验证批次（batch 3–6），预计近期合入 `main` 后会触发标签发布。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | **#5316** EPIC-005: CodeWhale TUI Crate Decomposition（伞状 Epic）<br>30 条评论，为本期最高互动；FEAT-026 已交付 PR #6793，正等待托管 CI 验证。<br>🔗 https://github.com/Hmbown/Codewhale/issues/5316 | ⭐⭐⭐ 架构级重构 |
| 2 | **#6804** 号召：成立汉化组 — 由用户 SparkofSpike 发起，呼吁用爱发电同步中英文档，覆盖 CodeWhale 等多个开源项目。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6804 | ⭐⭐⭐ 社区建设 |
| 3 | **#6700** 暴露流式重试预算与传输超时为配置项 — 描述当前参数硬编码为 `const`，代理/弱网环境无法调优。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6700 | ⭐⭐⭐ 运维可调优 |
| 4 | **#6795** 提供商内联错误帧绕过所有重试预算 — OpenRouter 等会在 HTTP 200 响应中塞入 `error` chunk，导致 turn 在第一帧即死。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6795 | ⭐⭐⭐ 流式可靠性 |
| 5 | **#6800** 卡顿恢复仅停留在 UI 层 — 引擎仍持有卡死的 turn，下一条消息被 60 秒 dispatch 拒绝，输入冻结。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6800 | ⭐⭐⭐ 引擎-UI 一致性 |
| 6 | **#6796** 重试尝试对终端用户不可见 — 转写不显示是否在重试或预算耗尽，操作员无法区分三种状态。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6796 | ⭐⭐⭐ 可观测性 |
| 7 | **#6652** 长时间运行后 TUI 滚动出现"果冻"式滞后 — 用户在 3-4 小时后可稳定复现，疑似渲染增量更新失衡。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6652 | ⭐⭐ UX 性能 |
| 8 | **#6650** Ctrl+T 切换思考强度快捷键异常 — 连按 3 次无反应，第 4 次才切换。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6650 | ⭐⭐ UX Bug |
| 9 | **#6803** 失败的工具调用不写 tool_result，重启后线程变为不可发送 — 持久化层遗留 `status: "failed"` 但无对应结果。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6803 | ⭐⭐ 数据完整性 |
| 10 | **#6801** API Route 可选提供方接入申请 — 维护者请求官方 sign-off 以新增 `API Route` 为可选 AI Provider，符合 CONTRIBUTING 准入流程。<br>🔗 https://github.com/Hmbown/Codewhale/issues/6801 | ⭐⭐ 生态扩展 |

> 另：#6546（待办清单无法管理）已于今日 CLOSED，#6792（FEAT-026 完成 session 组命令形态）已与 #6793 联动进入评审。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 内容要点 |
|---|----|---------|
| 1 | **#6805** feat(plugins): 支持已审核的 OAuth AI 提供方<br>插件可通过 `extensions.net.codewhale.providers` 声明 OpenAI 兼容端点与公共 OAuth 客户端，复用现有 Chat Completions 与流式通道，不再需伴生代理进程。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6805 | 🟢 功能扩展 |
| 2 | **#6782** v0.10.1 集成（wave/0.10.1-next）<br>合并 5 个本地验证批次，涵盖 UI 视图修复、durability 收尾工作，预计作为 0.10.1 发布候选。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6782 | 🟢 发布集成 |
| 3 | **#6793** refactor(commands): 完成 session 组形态（FEAT-026）<br>实现 17 个命令的会话组边界抽取，包括 `/structcopy`；解决 #5316 伞状 Epic 的最后一片切片。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6793 | 🟢 重构 |
| 4 | **#6784** fix(config): 规范化流式、重试与传输设置<br>新增统一的 `[stream]` 表，12 个类型化键覆盖 open/chunk/connect 超时、HTTP/1 pinning、流预算、TCP keepalive 与 HTTP/2 PING 配置；Refs #6700。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6784 | 🟢 配置化（已 CLOSED） |
| 5 | **#6802** Land #6741: MCP tools/call 独立预算与一次性 deadline<br>为 MCP 工具调用分配专属请求预算，停止因复用通用预算而过早掐断长任务。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6802 | 🟢 MCP 改进 |
| 6 | **#6799** Land asto18089 队列（#6736–#6744 七连 PR）<br>因 fork 分支拒绝维护者推送（HTTP 403），按 `cw-land` 流程在集成分支上完成所需修复，逐个以原 head 合并保留贡献归属。<br>🔗 https://github.com/Hmbown/Codewhale/pull/6799 | 🟡 流程修复 |
| 7 | **#6771** fix(runtime-api): 保留文件模式、允许 PUT 预检、撤销被拒的提供方切换、列出全部 memory<br>修复 Runtime API 文件系统、提供方切换与 memory 路由的若干缺陷。（已 CLOSED）<br>🔗 https://github.com/Hmbown/Codewhale/pull/6771 | 🟢 稳定性 |
| 8 | **#6759** fix(tools): shell 任务保留、输出增量、子进程生命周期<br>长任务结束后仍可调用、轮询返回新增字节、非交互命令收到 EOF、取消/超时负责子进程清理。（已 CLOSED）<br>🔗 https://github.com/Hmbown/Codewhale/pull/6759 | 🟢 工具链 |
| 9 | **#6761** feat(providers): 新增 Cheaper Inference 描述行<br>通过现有 bundled provider 路径接入，复用 Chat Completions 与目录发现端点。（已 CLOSED）<br>🔗 https://github.com/Hmbown/Codewhale/pull/6761 | 🟢 提供方生态 |
| 10 | **#6408** feat(providers): 新增 Yolo-Auto 兼容主机<br>以 `YOLO_AUTO_API_KEY` + `https://yolo-auto.com/v1` + `qwen3.8-flash` 接入命名自定义提供方。（已 CLOSED）<br>🔗 https://github.com/Hmbown/Codewhale/pull/6408 | 🟢 提供方生态 |

---

## 5. 功能需求趋势

通过对 12 条 Issue 与 29 条 PR 的语义聚类，社区关注点呈现以下方向：

1. **可观测性与可配置化（热度最高）**：重试预算、传输超时、卡顿恢复状态、内联错误帧处理等被反复要求"暴露到 UI 与配置"——这是 #6700 / #6795 / #6796 / #6800 / #6784 共同指向的同一主线。
2. **AI 提供方生态扩张**：Cheaper Inference、Yolo-Auto、API Route（待审批）、OAuth 插件机制（#6805）持续涌入，呈现"bundle + descriptor"标准化接入的趋势。
3. **MCP / 工具调用韧性**：#6802（独立预算）、#6803（失败 tool_result 持久化）、#6759（shell 任务生命周期）共同指向工具执行链路的鲁棒性。
4. **TUI 长会话性能**：#6652（果冻滚动）、#6650（快捷键漂移）反映长时间会话的渲染与输入累积问题。
5. **架构解耦与 crate 拆分**：#5316 / #6793 / #6792 系列——把会话组从 main 抽出，为独立 crate 化做准备。
6. **本地化与文档**：#6804 汉化组招募凸显中文社区组织化诉求；多个 web 页面（runtime/community/FAQ）的 dictionary spine 化（#6797 / #6794 / #6798）则是 i18n 工程化推进。

---

## 6. 开发者关注点与高频痛点

> 摘录自 Issue 与 PR 讨论区的核心反馈：

- **"看不见"是头号痛点**：重试、卡顿恢复、内联错误帧——这三类事件在 transcript/UI 中无任何痕迹，开发者只能在外部抓包或盲等。
- **硬编码常量阻碍部署**：编译期 `const` 让代理、容器化、跨地区网络无法调优，被多次贴上"必须配置化"的标签。
- **UI 与引擎状态分裂**：UI "恢复"了卡死的 turn，但引擎仍在持锁，导致 60s 静默拒绝——开发者期望"一处真源"。
- **持久化层数据一致性**：失败的工具调用缺少 `tool_result_for`，重启后线程不可发送，会话可靠性受损。
- **长会话渲染退化**：连续运行数小时后滚动延迟，说明渲染缓存与增量更新需要按真实宽度（含 scroll rail）刷新。
- **贡献准入门槛**：API Route（#6801）等第三方提供方需先获得维护者 sign-off，OAuth 插件机制（#6805）的引入或可降低这一摩擦。
- **fork 协作摩擦**：`asto18089` 七个 PR 因 fork 分支拒绝维护者推送被迫走 `cw-land` 集成分支流程（#6799、#6802），凸显去中心化贡献的托管约束。

---

*日报基于过去 24 小时 GitHub 数据自动生成。如需追溯原始 Issue/PR，请点击对应编号链接。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*