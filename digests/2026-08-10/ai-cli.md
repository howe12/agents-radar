# AI CLI 工具社区动态日报 2026-08-10

> 生成时间: 2026-08-10 01:14 UTC | 覆盖工具: 9 个

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

# 2026-08-10 AI CLI 工具生态横向对比分析

---

## 一、生态全景

当前 AI CLI 工具赛道已进入 **"功能成熟期 + 工程化深水区"**：单点能力（多模型、子代理、MCP、TUI）已成各工具标配，真正的竞争壁垒集中在**企业级稳定性、跨端一致性、长会话可观测性**三大方向。今日动态显示，**安全分类器反噬（Claude Code）、Windows 兼容性（Codex/Qwen/OpenCode）、MCP 协议韧性（Copilot/Codex/Qwen）** 是横跨整个生态的共性痛点；而 **多 Agent 协作（Gemini/Qwen/OpenCode/DeepSeek）与持久化记忆（Kimi/Gemini/Claude Code）** 则成为新一轮产品分化的主战场。

---

## 二、各工具活跃度对比

| 工具 | Release | Issues 更新 | PR 进展 | 综合活跃度 |
|------|---------|-------------|---------|-----------|
| **Claude Code** | ❌ 无 | 50+（Top 10 高热度） | 4（多为文档/小修） | ⭐⭐⭐⭐ 高问题密度 |
| **OpenAI Codex** | ❌ 无 | 50（Top 10 含 150👍） | 6（5 已合并） | ⭐⭐⭐⭐⭐ 最强工程节奏 |
| **Gemini CLI** | ✅ nightly | 50（Top 10 多 P1） | 20+（含 13 个依赖升级） | ⭐⭐⭐⭐⭐ 依赖治理密集 |
| **GitHub Copilot CLI** | ❌ 无 | 25（5 条今日新建） | 0 | ⭐⭐⭐ 社区驱动为主 |
| **Kimi Code CLI** | ❌ 无 | 2 | 1 | ⭐⭐ 低活跃（仓库规模小） |
| **OpenCode** | ❌ 无 | 10+（累计高 👍） | 10（V2 架构收尾） | ⭐⭐⭐⭐ 架构演进密集 |
| **Pi** | ❌ 无 | 10+ | 10（多数已合并） | ⭐⭐⭐⭐ 高效修复 |
| **Qwen Code** | ✅ nightly | 22 | 50（含 RFC 落地） | ⭐⭐⭐⭐⭐ PR 产出最猛 |
| **DeepSeek TUI (CodeWhale)** | ⏳ v0.9.6 待发 | 49 | 4（全部发布链） | ⭐⭐⭐ 版本冲刺期 |

> **观察**：Qwen Code 与 Gemini CLI 今日产出 PR 数最多（50+/20+），但 Codex 在"高点赞需求"上占据绝对优势（#17827 单条 150 👍）；Kimi Code CLI 与 DeepSeek TUI 处于规模化前的精细打磨阶段。

---

## 三、共同关注的功能方向

下表汇总**跨多个工具**出现的共性诉求：

| 方向 | 涉及工具 | 具体诉求 |
|------|---------|---------|
| **🤖 多 Agent / 子代理体系** | Gemini CLI（#22323、#21409、#21968）、Qwen Code（#8718 RFC + #8804 `/coordinate`）、OpenCode（#13715、#5287）、DeepSeek TUI（#5270 统一任务面板）、Codex（#33885、#36211） | 子代理可观测性、状态可移植、CLI/TUI/Remote 三端平权、权限挂起修复 |
| **🔌 MCP 协议稳定性** | Claude Code（#66084）、Codex（#15299）、Copilot CLI（#4421 60s 硬超时、#4419 解析期丢服务器）、Qwen Code（#8784 404 终结连接）、Kimi（PR #739） | 启动韧性、可选通知流容错、动态工具刷新、跨 Provider 兼容性 |
| **🧠 持久化记忆 / 跨会话上下文** | Kimi Code（#1283，27 评论战略级议题）、Gemini CLI（#26516/26522/26523/26525 Auto Memory 系列）、Claude Code（#28745 跨目录恢复，76 👍） | 自动 + 手动记忆、低信号会话去重、会话可移植 |
| **💻 Windows 平台兼容性** | Codex（30+ 条高评论 Issue 中超 1/3）、Qwen Code（#7118 PowerShell 校验、#8615 EISDIR）、OpenCode（#41436 需管理员）、DeepSeek TUI（#5023 IME） | 安装器、Desktop 启动、终端 IME、权限模型 |
| **🖥️ TUI / 终端体验升级** | Codex（#17827 150 👍 状态栏）、Pi（#7720/#7616/#7866）、DeepSeek TUI（#5293 授权默认值、#5314 复制）、OpenCode（#41350 加载动画） | 可配置状态栏、翻页/滚动、剪贴板、IME、视觉一致性 |
| **🔁 跨端同步** | Claude Code（#81658 Cowork 消失）、Codex（#5609 63 👍 长期刚需）、Copilot CLI（远程/桌面同步） | CLI / Desktop / Web / Mobile 会话数据一致 |
| **🛡️ 安全分类器边界** | Claude Code（45% Issue 集中爆发 #67246 + sworrl 20+ 报告） | 白名单机制、误判申诉通道、`/model` 覆盖权 |
| **📦 模型目录与服务端同步** | Copilot CLI（#4390、#4422 Claude/Kimi 目录失踪）、Pi（#7870 远程覆盖）、DeepSeek TUI（#5034、#5244） | 启用的模型可见、provider/model 原子切换 |

> **关键洞察**：**MCP 协议稳定性**与**多 Agent 可观测性**是当下最高频的共性需求，几乎所有主流工具都在补齐这两块短板。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 安全分类、Cowork 协作、桌面 + Remote Control | 企业级长任务用户、合规敏感行业 | 强化 Opus 4.8 安全语义，多端扩张但稳定性滞后 |
| **OpenAI Codex** | OpenAI 生态闭环、ChatGPT 三端同步、TUI 可观测性 | OpenAI 重度用户、ChatGPT Pro 订阅 | 内部 Bot 驱动精细打磨，依赖 Responses WebSocket 长连接 |
| **Gemini CLI** | 子代理 + 自动记忆、AST-aware 代码库理解 | Google Cloud / Workspace 体系用户 | dependabot 主导的依赖治理、行为评估体系（#24353）建设 |
| **GitHub Copilot CLI** | GitHub 原生集成、组织模型目录、企业策略 | GitHub Enterprise / Copilot Business 用户 | MCP 启动韧性、企业级 fail-closed 策略边界 |
| **Kimi Code CLI** | ACP 协议、多 Provider 适配、中文长上下文 | 中文长上下文场景用户、ACP 集成方 | MoonshotAI 自家模型为核心，向多 Provider 扩展 |
| **OpenCode** | 跨 Provider 多模型、IDE 深度集成、OpenCode Go 订阅 | 跨模型重度用户、IDE 切换开发者 | V2 架构拆分（App/Desktop/Core/TUI/SDK/server），订阅服务化 |
| **Pi** | 本地模型（llama.cpp）、TUI 扩展性、远程会话协议 | 本地推理爱好者、终端极客 | 独立小团队、快速 PR 闭环、强调扩展 API |
| **Qwen Code** | 多 Agent 协调（`/coordinate`）、Kimi/MiMo 第三方接入、本地控制（QR 配对） | 中文 LLM 生态用户、多 Agent 编排需求方 | `autofix/takeover` CI 双轨、Turn-based SessionRuntime 统一 |
| **DeepSeek TUI (CodeWhale)** | "subtractive runtime"、compaction 契约、可复现发布 | Rust 重度用户、复杂长会话场景 | Cargo crate 发布顺序强制校验、`SOURCE_DATE_EPOCH` 安全构建 |

**核心差异化路径**：
- **生态绑定型**：Claude Code（Anthropic）、Codex（OpenAI）、Copilot CLI（GitHub）、Kimi（MoonshotAI）——深度依赖单一上游
- **中立平台型**：OpenCode、Pi、DeepSeek TUI —— 以多 Provider/本地模型为核心卖点
- **生态扩张型**：Qwen Code、Gemini CLI —— 在自家模型基础上主动接入第三方（Kimi、MiMo）

---

## 五、社区热度与成熟度

### 成熟度梯队

| 梯队 | 工具 | 判断依据 |
|------|------|---------|
| **第一梯队（功能 + 生态成熟）** | Claude Code、OpenAI Codex | 单 Issue 点赞数突破 150、PR 处理流程成熟、用户量级最大 |
| **第二梯队（快速迭代期）** | Gemini CLI、Qwen Code、OpenCode | PR 产出密集、依赖升级频繁、架构正在重写（V2）/统一（Turn-based） |
| **第三梯队（精细打磨期）** | GitHub Copilot CLI、Pi | 社区反馈驱动、聚焦稳定性与可观测性 |
| **第四梯队（早期成长）** | Kimi Code CLI、DeepSeek TUI (CodeWhale) | 单日 Issue 数少（2/10），但战略议题集中 |

### 社区活跃度信号

- **最强单议题热度**：Codex #17827（150 👍，39 评论）—— **可配置状态栏**是 TUI 用户跨工具的"沉默刚需"
- **最严重系统性事件**：Claude Code Opus 4.8 安全分类器误判风暴（45% Issue 占比，单日 20+ 集中报告）
- **最高战略价值议题**：Kimi Code #1283（跨会话记忆系统，27 评论持续活跃）
- **最大架构演进**：OpenCode `dev` → `v2` 大合并（#41460）、Qwen Code Turn-based SessionRuntime 统一（#8775）

---

## 六、值得关注的趋势信号

### 1. 🛡️ AI 安全过滤器的"过度防御"成为行业级反噬
Claude Code Opus 4.8 将 AD/ADFS 运维、Defensive Security、日志分析等合法工程场景一刀切标记为 `cyber` 并强制切换模型/终止会话，是首个被广泛曝光的"安全过滤器反噬"事件。**对开发者的启示**：选用 AI 工具时，安全策略的可配置性（白名单 + 申诉通道）应成为评估项之一，而不仅是默认安全。

### 2. 🔌 MCP 协议从"特性"变为"基础设施"，但稳定性欠账
5 个主流工具（Claude Code/Codex/Copilot/Qwen/Kimi）今日均报告 MCP 相关问题，覆盖**启动超时（60s 无重试）、解析期 fail-closed、可选通知流 404 终结、JSON Schema 元数据不兼容**。**趋势判断**：MCP 已成为事实标准，但协议韧性（重试/退避/容错）将成为下一轮差异化重点。

### 3. 🤖 多 Agent 协作从"加分项"变为"必答题"
Qwen Code 直接以 RFC（#8718）形式立项并落地 `/coordinate`（#8804），DeepSeek TUI 将"统一任务面板"列为 v0.9.5 主线（#5270），Gemini CLI 持续打磨 codebase_investigator 子代理可观测性。**对开发者的启示**：评估 CLI 工具时，子代理的状态可移植性、权限边界、轨迹可观测性应纳入核心指标。

### 4. 💻 Windows 仍是 AI CLI 的"重灾区"
Codex 30+ 高评论 Issue 中超 1/3 与 Windows 相关，Qwen Code 多个 P1（#8615 Desktop EISDIR、#7118 PowerShell 校验），OpenCode #41436 需管理员权限。**趋势判断**：跨平台工程债集中在 Windows 上，选用企业级工具时需特别验证 Windows 路径。

### 5. 🧠 持久化记忆成为下一波产品分水岭
Kimi Code #1283（27 评论战略议题）、Gemini CLI Auto Memory 系列（4 条批量立项）、Claude Code 跨目录恢复（#28745 76 👍）——三者均指向同一诉求：**跨会话上下文连续性**。**对开发者的启示**：未来 6 个月，"记忆质量 + 安全脱敏 + 低信号去重"将成为 CLI 工具的关键差异化。

### 6. 📊 TUI 可观测性正在向 IDE 级体验靠拢
Codex #17827（150 👍 可配置状态栏）位居全生态单议题热度榜首，Pi、DeepSeek TUI、OpenCode 均在补齐 PageUp/PageDown、加载动画、IME 等终端细节。**趋势判断**：TUI 不再是"够用就行"，而是与 IDE/桌面端体验对标的核心战场。

### 7. ⚙️ "工程化治理"成为头部工具的共同选择
Gemini CLI 引入组件级评估体系（#24353 76 项 behavioral eval）、Qwen Code 推行 `autofix/takeover` CI 双轨、DeepSeek TUI 强制校验 20-crate 发布顺序（#5306）。**行业信号**：头部工具已从"快速迭代"转向"系统化防挂死"，基础设施韧性投入加大。

---

> 📌 **决策建议**
>
> - **企业级长任务用户**：优先关注 Claude Code 安全分类器白名单机制与 Codex 跨端同步进展
> - **多 Agent 编排需求**：Qwen Code 的 `/coordinate`（已落地）与 DeepSeek TUI 的统一任务面板（v0.9.5）值得关注
> - **多 Provider / 本地模型**：OpenCode V2 与 Pi 的 llama.cpp 支持是中立平台的代表
> - **中文 LLM 生态**：Kimi Code CLI 仍是 MoonshotAI 用户的主选，Qwen Code 在第三方接入（Kimi/MiMo）上更激进
> - **所有决策者**：建议建立"MCP 启动韧性、跨端同步、Windows 兼容性"三轴评估矩阵

---

*报告基于 2026-08-10 GitHub 公开数据，覆盖 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI (CodeWhale) 九个仓库。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-08-10*

---

## 1. 热门 Skills 排行（Top PRs）

> 说明：PR 评论数字段为 `undefined`，社区讨论热度主要通过 **关联 Issue 评论数 + 跨 PR 引用 + Issue 反向链接** 综合判定。

| # | Skill / PR | 功能定位 | 社区讨论焦点 | 状态 |
|---|---|---|---|---|
| 1 | **[#1298](https://github.com/anthropics/skills/pull/1298)** fix(skill-creator): run_eval.py 0% recall | 修复 skill-creator 描述优化循环失效的根因 | **当前第一热点**：关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍）+ 10+ 独立复现；同主题 PR 还有 #1099、#1050、#1323、#1261、#1169。开发者普遍反映 description 优化在"对抗噪声" | OPEN |
| 2 | **[#514](https://github.com/anthropics/skills/pull/514)** document-typography | 检测/修复 AI 生成文档的排版问题（孤行、寡行、编号错位） | 痛点真实且普遍，PR 长期未合引发关注 | OPEN |
| 3 | **[#83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer & skill-security-analyzer | 元技能：评估 Skill 五维质量 + 安全审计 | 直接呼应 Issue [#492](https://github.com/anthropics/skills/issues/492)（**43 评论 / 安全最高优先级**） | OPEN |
| 4 | **[#210](https://github.com/anthropics/skills/pull/210)** Improve frontend-design skill | 重构前端设计 Skill 提升可执行性 | 解决 Skill "可读但不可执行"的诟病，呼应 Issue [#202](https://github.com/anthropics/skills/issues/202)（已关闭但讨论活跃） | OPEN |
| 5 | **[#486](https://github.com/anthropics/skills/pull/486)** ODT Skill | OpenDocument 文本创建/模板填充/解析 | 开源办公套件支持，呼声长期未落地 | OPEN |
| 6 | **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit (v1.3.0) | 输出前自审：机械验证 + 四维推理质量门禁 | 实现 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提议，质量门禁成新方向 | OPEN |
| 7 | **[#723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 测试哲学 + 单元/组件/E2E/契约/可访问性 | 补齐"开发者最常用却缺失"的一环 | OPEN |
| 8 | **[#1302](https://github.com/anthropics/skills/pull/1302)** color-expert | 命名体系、色彩空间、可访问性对比的"颜色专家" | 设计系统刚需，作用域明确 | OPEN |

---

## 2. 社区需求趋势（按议题热度聚合）

| 趋势方向 | 代表议题 | 诉求核心 |
|---|---|---|
| 🔒 **安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492)（43 👍2） | 社区 Skill 冒用 `anthropic/` 命名空间，用户被诱导授权 → 亟需官方签名/命名空间治理机制 |
| 🏢 **企业级协作分发** | [#228](https://github.com/anthropics/skills/issues/228)（16 👍8） | 摆脱手工传 `.skill` 文件；需求：组织级 Skill 库 / 共享链接 |
| 🛠️ **skill-creator 体验崩坏** | [#556](https://github.com/anthropics/skills/issues/556)（12 👍7）、[#1169](https://github.com/anthropics/skills/issues/1169) | `run_eval.py` 永远 0% 触发率，描述优化完全失效，Windows 平台不可用 |
| 🧠 **Agent 状态与长期记忆** | [#1329](https://github.com/anthropics/skills/issues/1329)（9） | 提出 compact-memory 符号化压缩代理状态；规划产物累积无生命周期（[#1417](https://github.com/anthropics/skills/issues/1417) → #1479） |
| 🏛️ **Agent 治理 / 安全模式** | [#412](https://github.com/anthropics/skills/issues/412)（6，已关闭） | 策略执行、威胁检测、信任评分、审计追踪 |
| 🧩 **互操作性** | [#16](https://github.com/anthropics/skills/issues/16)（4） | Skills 暴露为 MCP，统一 AI 软件接口协议 |
| 🪟 **跨平台/集成** | [#29](https://github.com/anthropics/skills/issues/29)（4） | AWS Bedrock 调用、SharePoint 对接（[#1175](https://github.com/anthropics/skills/issues/1175)） |
| 🧪 **质量门禁与可观测** | [#1385](https://github.com/anthropics/skills/issues/1385)（4） | Pre-task 校准 → 对抗性审查 → 交付验证三段管线 |
| 🪶 **Skill 内容体积控制** | [#1487](https://github.com/anthropics/skills/issues/1487)（4） | `claude-api` Skill 单次注入 ~156k tokens 直接撑爆上下文 |
| 📄 **文档生成鲁棒性** | [#12](https://github.com/anthropics/skills/issues/12)（4 👍1） | docx/OOXML 空白重排导致 Word 不可读 |

> **聚合结论**：社区诉求已从"补功能型 Skill"转向 **"质量 / 安全 / 治理 / 分发"四大基建层**。

---

## 3. 高潜力待合并 Skills

> 全部展示 PR 均为 OPEN，依据"关联高评论 Issue / 跨 PR 引用 / 提交质量"筛选近期可能落地的候选：

| PR | Skill | 合并潜力判断 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval recall 修复 | ⭐⭐⭐⭐⭐ 阻塞面最广，10+ 复现；如合入将带动 #1099/#1050/#1323/#1261 合并 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows subprocess pipe 修复 | ⭐⭐⭐⭐ 与 #1298 同主题，解决 `WinError 10038` |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess + encoding | ⭐⭐⭐⭐ 两行修复、覆盖 Windows 11 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | 触发评估命令文件隔离 | ⭐⭐⭐⭐ 修复 [#1260](https://github.com/anthropics/skills/issues/1260)，防止污染用户项目 |
| [#538](https://github.com/anthropics/skills/pull/538) | PDF Skill 大小写修复 | ⭐⭐⭐⭐⭐ 纯低风险合并候选（大小写敏感文件系统兼容性） |
| [#539](https://github.com/anthropics/skills/pull/539) | YAML 未加引号校验 | ⭐⭐⭐⭐⭐ skill-creator 健壮性补丁 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx 跟踪变更 w:id 冲突 | ⭐⭐⭐⭐ 修复文档损坏，影响范围明确 |
| [#83](https://github.com/anthropics/skills/pull/83) | quality/security 分析器 | ⭐⭐⭐⭐ 紧扣 #492 安全热点，可能被官方加速采纳 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | ⭐⭐⭐⭐⭐ 关闭 [#452](https://github.com/anthropics/skills/issues/452)，零技术风险 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | ⭐⭐⭐ 紧贴 #1417，规划产物生命周期管理（已被官方多次点名） |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | ⭐⭐⭐ 完整实现 #1385 提议，但需官方对"质量门禁"定调 |

---

## 4. Skills 生态洞察

> **一句话总结**：当前社区最集中的诉求是 **"Skill 信任与质量基础设施"** —— 即在追求更多 Skill 数量之前，亟需解决 **命名空间冒用（安全）、描述优化失效（工具链）、超量注入（性能）、分发协作（生态）** 四大底层问题；与此同时，`skill-creator` 的健壮性（含 Windows 兼容性）已从"开发者抱怨"升级为"生态阻塞点"。

---

# Claude Code 社区动态日报
**日期：2026-08-10**

---

## 📌 今日速览

今日社区焦点高度集中于 **Claude Code 安全分类器的误判风暴**——大量用户报告 Opus 4.8 安全过滤器将合法的工程讨论、AD/ADFS 运维、Defensive Security 工作误判为"网络安全/生物"类风险，并强行切换模型或中断会话，#67246 议题引发广泛共鸣。同时，跨平台同步失效、桌面端 30 天保留策略导致会话数据丢失等高危 Bug 持续发酵；功能层面呼声最高的仍是 **跨目录恢复会话**（#28745 获 76 👍，仍悬而未决）。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 链接 | 关注度 |
|---|-------|------|--------|
| 1 | **UI 多语言本地化支持**（#31413）<br>`[enhancement] [area:ui]` —— 社区呼吁加入 UI 本地化，目前界面仅英文，对非英语用户极不友好。已有 13 条评论、8 👍，维护者尚未给出明确时间表。 | [Issue #31413](https://github.com/anthropics/claude-code/issues/31413) | ⭐⭐⭐⭐ |
| 2 | **安全分类器静默切换模型且 `/model` 无法覆盖**（#67246）<br>`[bug] [platform:macos] [area:model]` —— Fable 5 安全分类器将正常工程讨论误判为"网络安全/生物"，强行切换至 Opus 4.8，且 `/model` 命令无效。此 Bug 严重影响长任务工作流，关联后续大量 sworrl 提交的误判报告。 | [Issue #67246](https://github.com/anthropics/claude-code/issues/67246) | ⭐⭐⭐⭐⭐ |
| 3 | **允许从不同目录恢复会话**（#28745）<br>`[enhancement] [area:cli]` —— 当原目录被删除（git worktree 清理、目录重命名）后无法恢复会话。**76 👍 居今日榜首**，是悬而未决最久的需求之一。 | [Issue #28745](https://github.com/anthropics/claude-code/issues/28745) | ⭐⭐⭐⭐⭐ |
| 4 | **跨平台同步失效导致 Cowork 会话消失**（#81658）<br>`[bug]` —— Desktop / Web / Android 三端同步疑似服务端故障，用户协作会话凭空消失，属严重可用性问题。 | [Issue #81658](https://github.com/anthropics/claude-code/issues/81658) | ⭐⭐⭐⭐ |
| 5 | **Remote Control 浏览器端响应需手动刷新**（#85240）<br>`[bug]` —— iPad Safari/Chrome、macOS Safari 均复现，Assistant 回复永不渲染直至强制刷新，每次必现。 | [Issue #85240](https://github.com/anthropics/claude-code/issues/85240) | ⭐⭐⭐⭐ |
| 6 | **MCP `tools/list_changed` 不刷新延迟工具索引**（#66084）<br>`[bug] [area:mcp]` —— 在 2.1.165 仍可复现，与 #4118、#60626 同源，影响交互式会话的 MCP 工具发现。 | [Issue #66084](https://github.com/anthropics/claude-code/issues/66084) | ⭐⭐⭐ |
| 7 | **VSCode Fork 后新标签页空白且会话列表不可见**（#85008）<br>`[bug]` —— 2.1.226 版本回归问题，空闲状态下触发，#31831 已关闭但根因未修复。 | [Issue #85008](https://github.com/anthropics/claude-code/issues/85008) | ⭐⭐⭐ |
| 8 | **桌面端 30 天保留策略误删会话，留下"幽灵条目"**（#81100）<br>`[bug]` —— 与 CLI 端 #59248 同源但 Desktop 端独有的数据丢失路径，#62959 曾被标记 stale 关闭。 | [Issue #81100](https://github.com/anthropics/claude-code/issues/81100) | ⭐⭐⭐⭐ |
| 9 | **被拒绝的 PowerShell 工具仍被执行**（#83760）<br>`[bug]` —— 权限系统严重安全风险：deny 决策被绕过，工具实际执行。 | [Issue #83760](https://github.com/anthropics/claude-code/issues/83760) | ⭐⭐⭐⭐ |
| 10 | **插件版本解析越界到 `~/.claude` HEAD 导致重复克隆**（#82712）<br>`[bug]` —— 无 `.git` 目录的 marketplace + `version: null` 触发文件系统向上回溯，引发每次提交重新克隆。 | [Issue #82712](https://github.com/anthropics/claude-code/issues/82712) | ⭐⭐⭐ |

> 📣 **补充关注：安全分类器误判集体报告**
> 用户 **sworrl** 在 8 月 9 日集中提交了 **20+ 条 ClAudit 误判报告**（#85375–#85392），涉及 AD/ADFS 运维、日志轮转、Defensive Security 技能、M365/Graph 鉴权、task-notification 等合法场景，均被 Opus 4.8 标记为 `cyber` 并强制终止会话。这是近期最严重的"安全过滤器反噬"事件，建议关注后续合并或官方响应。代表案例：[#85384](https://github.com/anthropics/claude-code/issues/85384)、[#85389](https://github.com/anthropics/claude-code/issues/85389)、[#85392](https://github.com/anthropics/claude-code/issues/85392)。

---

## 🛠️ 重要 PR 进展

| # | PR | 链接 | 说明 |
|---|-----|------|------|
| 1 | **security-guidance: 模型引用升级至 Opus 5 / Sonnet 5**（#85409）<br>将内置 `security-guidance` 插件 README 与 `llm.py` 中过时的 Opus 4.7 / Sonnet 4.6 默认值同步到当前模型版本。 | [PR #85409](https://github.com/anthropics/claude-code/pull/85409) |
| 2 | **fix(plugin-dev): 解析 block scalar agent 描述**（#85323）<br>承接 #83803，修复 `validate-agent.sh` 对 YAML `description: \|` / `description: >` 多行值的测量方式。 | [PR #85323](https://github.com/anthropics/claude-code/pull/85323) |
| 3 | **fix(skills): 插件/钩子 skill 使用合规命名**（#85243）<br>修正 8 个内置 skill 的 `name:` 字段（移除带空格的 Title Case），统一为 spec-conformant 命名。 | [PR #85243](https://github.com/anthropics/claude-code/pull/85243) |
| 4 | **[Plugin] 新增 `agent-session-commit` 插件**（#17395）<br>**已关闭**。引入 `AGENTS.md` 作为项目权威指令文件，提供 `/session-commit` 手动与 Stop 钩子自动触发，迭代 `AGENTS.md`。 | [PR #17395](https://github.com/anthropics/claude-code/pull/17395) |

> ⚠️ 今日 PR 总数仅 4 条，社区代码侧活跃度偏低，建议跟进是否有 Claude Code 仓库迁移或权限调整。

---

## 📈 功能需求趋势

从本期 50 条 Issue 中提炼的社区关注方向：

| 方向 | 占比 | 代表 Issue |
|------|------|-----------|
| **🚨 安全分类器误判 / 模型强制切换** | ~45% | #67246、#85375–#85392 |
| **🌐 UI / 体验本地化与多语言** | ~10% | #31413 |
| **🔁 会话管理与可移植性** | ~8% | #28745、#81100 |
| **🔌 MCP / 插件生态** | ~10% | #66084、#82712、#85243、#85323 |
| **💻 Desktop / VSCode / Remote Control** | ~15% | #81658、#85008、#85240、#81100 |
| **🛡️ 权限与执行可靠性** | ~7% | #83760、#85401 |
| **🧠 模型版本与文档同步** | ~5% | #85409 |

**核心洞察：**
1. **安全过滤器的"过度防御"成为首要痛点**——Opus 4.8 对合法工程对话的过度敏感导致大量 session 中断，开发者效率被严重拖累。
2. **桌面端与跨端同步稳定性下滑**——Desktop 数据丢失（30 天保留）、Cowork 同步消失、Remote Control 渲染问题，呈现"平台扩张但稳定性没跟上"的典型症状。
3. **会话可移植性需求迫切**——`/resume` 在目录变更后即失效，是长期悬而未决的 Top 需求。
4. **模型升级节奏快，文档/插件同步滞后**——Opus 5 / Sonnet 5 已上线，但内置 `security-guidance` 等插件仍引用旧模型。

---

## 💡 开发者关注点

1. **"我只是想正常写代码，为什么被安全拦截？"**
   sworrl 系列报告集中反映了 Defensive Security、AD/ADFS 运维、日志分析等"灰色关键词"被一刀切误判。开发者呼吁：**安全分类器应支持白名单 + 误判申诉通道**，而非简单 `session-halted`。

2. **"桌面端越来越像 Web 产品，但数据生命周期反而更短"**
   CLI/Desktop 的 30 天保留策略、`~/.claude` HEAD 解析等行为让用户的会话与插件配置变得脆弱。开发者建议：**保留策略应可配置、删除前应有二次确认**。

3. **"Fork 会话为什么永远做不到位？"**
   VSCode 2.1.226 中 Fork 后会话空白、Remote Control 需手动刷新，开发者质疑会话状态序列化层的一致性。

4. **"MCP 工具的实时性"**
   `tools/list_changed` 不能刷新 `ToolSearch` 索引，意味着新挂载的 MCP 工具只能在重启后可用，与 MCP 协议承诺的"动态发现"不符。

5. **"权限 deny 不是终点，是起点"**
   #83760 暴露的"拒绝的工具仍被执行"是权限模型的严重 bug，开发者要求公开审计日志与执行回放能力。

---

> 📊 **日报小结**：今日 Claude Code 社区处于"安全反噬 + 多端稳定性退化"的叠加压力期。建议核心团队优先处理：(1) Opus 4.8 安全分类器白名单机制；(2) Desktop 30 天保留策略；(3) `/resume` 跨目录支持；(4) 会话 Fork 一致性修复。
>
> 报告生成时间：2026-08-10 ｜ 数据源：`anthropics/claude-code` GitHub 仓库

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-08-10**

---

## 📌 今日速览

今日 Codex 仓库无新版本发布，但社区活跃度依然高涨——过去 24 小时内有 50 个 Issue 被更新，6 个 PR 被处理（5 个已合并关闭）。**Windows 平台稳定性问题持续成为焦点**，多条 Computer Use、WSL 终端、桌面应用崩溃相关 Bug 在 8 月新版（26.80x 系列）发布后集中爆发；同时开发者对**多 Agent 子代理能力、TUI 增强、跨平台会话同步**的需求讨论热烈。

---

## 🚀 版本发布

> 过去 24 小时内无新 Release 发布。社区当前主要版本：
> - **Codex Desktop**：`26.803.5235.0` / `26.803.41515`
> - **Codex CLI**：`0.147.0`
> - **IDE 扩展**：`26.721.41059`

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 重要性 |
|---|-------|-----|-----|--------|
| [\#17827](https://github.com/openai/codex/issues/17827) | **可自定义状态栏**（TUI） | 39 | **150** | 🔴 极高呼声 |
| [\#11011](https://github.com/openai/codex/issues/11011) | 线程切换严重卡顿（App） | 21 | 19 | 🟠 性能回归 |
| [\#15299](https://github.com/openai/codex/issues/15299) | MCP 主动通知路由进 CLI 会话 | 15 | 14 | 🟠 MCP 生态扩展 |
| [\#23527](https://github.com/openai/codex/issues/23527) | iOS 端不显示 Mac SSH 远程项目 | 13 | 19 | 🟠 移动端体验 |
| [\#20802](https://github.com/openai/codex/issues/20802) | macOS 桌面线程切换回归（已关闭） | 8 | 5 | 🟡 已修复参考 |
| [\#5349](https://github.com/openai/codex/issues/5349) | 请求密码弹窗失效（长期未修） | 8 | 3 | 🟡 工具调用 Bug |
| [\#24195](https://github.com/openai/codex/issues/24195) | Windows skill 校验器缺 PyYAML | 7 | 3 | 🟡 技能系统 |
| [\#5609](https://github.com/openai/codex/issues/5609) | 跨平台聊天记录同步 | 6 | **63** | 🟠 高票需求 |
| [\#37104](https://github.com/openai/codex/issues/37104) | Windows WSL 终端启动失败 | 6 | 1 | 🔴 Windows 关键 |
| [\#37398](https://github.com/openai/codex/issues/37398) | 桌面打开本地会话慢 5 秒 | 6 | 6 | 🟠 性能瓶颈 |

**重点解读：**

- **#17827** 长期占据热度榜首（150 👍），用户期望在终端底部实时展示 token 用量、模型名、速率限制、Git 分支等关键信息，与 Claude Code 对标功能差距明显。
- **#11011 / #37398** 反映桌面应用性能存在明显回归，owner-discovery 超时机制可能是根因。
- **#23527** 揭示了移动端与 Mac 主机通过 SSH 的项目发现链路尚未打通。
- **#5609** 是历史最久的高赞 Feature Request 之一，呼声仅次于 #17827，反映多端协同的刚需。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 关键变更 |
|---|----|----|---------|
| [\#37747](https://github.com/openai/codex/pull/37747) | 限定 Cursor 项目路径解析 | ✅ 已合并 | 🔒 **安全修复**——避免解析时递归扫描大型目录树 |
| [\#37745](https://github.com/openai/codex/pull/37745) | code-mode host 新增 gRPC TCP 传输 | ✅ 已合并 | 支持 `grpc://IP:PORT` 端点，便于动态端口发现 |
| [\#37723](https://github.com/openai/codex/pull/37723) | 会话配置加载失败新增 I/O 子类型 | ✅ 已合并 | 为 `failed_to_load_session_config` 增加 `ErrorKind` 分类（`invalid_data` / `not_found` / `permission_denied`） |
| [\#37709](https://github.com/openai/codex/pull/37709) | TUI 编写器换行空白修复 | ✅ 已合并 | grapheme-safe 换行，避免溢出空白独占一行 |
| [\#37654](https://github.com/openai/codex/pull/37654) | exec-server 暴露环境配置读取能力 | ✅ 已合并 | 新增 `environmentConfigRead` capability，向后兼容旧执行器 |
| [\#31817](https://github.com/openai/codex/pull/31817) | 自动更新 models.json | 🟢 开放中 | GitHub Actions 定时刷新模型清单 |

> 💡 今天的 PR 全部来自内部 Bot（`copyberry[bot]`），显示出 8 月初的迭代集中在**安全加固、传输协议扩展、TUI 细节打磨**三个方向。

---

## 📈 功能需求趋势

通过对今日活跃 Issue 的梳理，社区诉求集中在以下方向：

1. **🖥️ TUI / 终端体验升级**（占比最高）
   - 可配置状态栏（#17827）
   - 终端/TUI 换行、键位、渲染细节（#37709、#37004）

2. **🤖 多 Agent 子代理体系**
   - 子线程的纠正与引导（#33885）
   - 子代理完成后的队列消息处理（#32353）
   - `close_agent` 工具在 VS Code 多 Agent schema 中缺失（#36211）

3. **🔗 跨端同步 & MCP 生态**
   - ChatGPT 网页 / VSCode / Codespaces 会话同步（#5609）
   - MCP 通知主动推入 Codex 会话（#15299）

4. **🎮 Computer Use 能力补齐**
   - Windows 上 `list_windows` / `list_apps` 失败（#37595、#37281、#37734）
   - 平台差异问题突出

5. **⚙️ 企业 & 自定义模型**
   - 模型别名映射支持网关模型 ID（#21594）
   - 自动化任务离线补偿机制（#24327）

6. **🔧 性能与稳定性**
   - 多条线程切换 / 会话加载慢的回归 Bug（#11011、#37398、#20802）
   - 目标自动续跑的无限循环问题（#34248）

---

## 👨‍💻 开发者关注点

**最痛的高频反馈：**

1. **Windows 是当前的最大短板**
   今日 30 条高评论 Issue 中，超过三分之一与 Windows 相关，覆盖 Computer Use 失败（#37595、#37281、#37734、#37752）、WSL 终端无法启动（#37104、#37741）、SQLite 不回收空间（#35823）等。8 月初的几个新版本在 Windows 上问题集中爆发。

2. **桌面端「owner-discovery 超时」导致体验卡顿**
   #11011 与 #37398 直指同一根因——5 秒等待是固定超时，而非真实加载耗时，社区希望提供可配置或更激进的回退策略。

3. **macOS 27 + Chromium 149 兼容性问题**
   #30928 报告 `CrBrowserMain EXC_BREAKPOINT/SIGTRAP` 崩溃，并伴随 app-server 内存飙升，需要 Chromium 框架层更新。

4. **CLI WebSocket 重连不彻底**
   #33163 指出网络恢复后仍复用"死亡"的 Responses WebSocket，导致下一轮调用失败——典型的长连接状态机缺陷。

5. **长期未修复的 Tool Call 问题**
   #5349（密码弹窗失效）已经挂了近 10 个月，反映工具调用链路在某些 OS / Shell 场景下的脆弱性。

6. **会话同步是"沉默的大多数"刚需**
   #5609 凭借 63 👍 稳居长期高赞榜前 3，说明企业 / 重度用户对 ChatGPT Web、Codex App、VSCode Extension 三端一致的诉求非常强烈。

---

> 📊 **日报小结**：今天的 Codex 仓库呈现"**PR 平静、Issue 沸腾**"的态势——内部 Bot 在做精细打磨，而社区在 Windows 稳定性、TUI 体验、多 Agent 编排、跨端同步四个方向集中反馈。建议关注者优先跟进 #17827（状态栏）和 #11011 / #37398（性能回归），并留意后续 Windows 26.80x 系列的补丁发布。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-10**

---

## 1. 今日速览

今日 Gemini CLI 仓库动态以**依赖批量更新**和**存量 Bug 推进**为主线：dependabot 单日合入 13 个版本升级 PR（涵盖 js-yaml、puppeteer-core、@google/genai 等核心依赖）；社区讨论热度仍聚焦于 **Subagent（子代理）行为异常**与 **Auto Memory（自动记忆）系统**两大方向，多个 P1 级问题进入"need-retesting"阶段等待回归验证。

---

## 2. 版本发布

今日仅发布 **nightly 版本**：

- **v0.56.0-nightly.20260809.gcf22ac7e8**（夜间构建）
  - 完整变更：<https://github.com/google-gemini/gemini-cli/compare/v0.56.0-nightly.20260808.gcf22ac7e8...v0.56.0-nightly.20260809.gcf22ac7e8>
  - 备注：官方未提供详细 changelog，需通过 diff 自行核对

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 重要性 | 社区反应 |
|---|-------|--------|----------|
| **#22323** | [Subagent 达到 MAX_TURNS 后仍上报 GOAL 成功，掩盖中断](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1 · Bug**。`codebase_investigator` 子代理在触及最大轮次后仍报告 `status: "success"`，误导主代理判断，p1 高优 | 12 评论 / 2 👍，状态已更新为 `need-retesting` |
| **#21409** | [Generalist agent 无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1 · Bug**。一旦降级到 generalist agent 即陷入永久挂起，连简单的目录创建都会卡住 | 8 评论 / **8 👍**（高赞同），说明问题广泛存在 |
| **#24353** | [Robust component level evaluations（EPIC）](https://github.com/google-gemini/gemini-cli/issues/24353) | **P1 · 基础设施**。推进组件级评估体系，已积累 76 项 behavioral eval 测试 | 7 评论，里程碑式跟进 |
| **#22745** | [评估 AST 感知的文件读取/搜索/映射](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2 · Feature**。探索通过 AST 工具减少噪声、精准定位代码段，是 codebase_investigator 演进方向 | 7 评论 / 1 👍，影响后续 agent 质量 |
| **#21968** | [Gemini 几乎不会主动使用 skills 和 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2 · Bug**。用户自定义 skills 在未显式提示时几乎不被调用，影响扩展生态 | 6 评论，体验类痛点 |
| **#1095** | [`git commit` 建议信息中反引号处理错误](https://github.com/google-gemini/gemini-cli/issues/1095) | **P2 · 已关闭**。长生命周期 issue，标记 `need-information` 后今日关闭 | 5 评论 / 2 👍 |
| **#26522** | [Auto Memory 不应无限重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2 · Bug**。Auto Memory 提取 Agent 跳过低信号会话后，会被反复重新索引 | 5 评论，与下述多条 memory 工单同源 |
| **#25166** | [Shell 命令完成后仍卡在 "Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1 · Bug**。简单命令（如 `echo`）执行完成后进程挂起 | 4 评论 / 3 👍，阻塞用户体验 |
| **#22232** | [Browser agent 会话接管与锁恢复](https://github.com/google-gemini/gemini-cli/issues/22232) | **P3 · Feature**。当前 `fail-fast` 策略对持久化会话不够鲁棒，需要自动恢复机制 | 4 评论，配套修复 #22267 |
| **#21983** | [Browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983) | **P1 · Bug**。Linux Wayland 环境兼容性缺失，agent 静默失败 | 4 评论 / 1 👍 |

**观察**：今日累计 50 条 Issue 更新，但**前 10 条均集中在 agent 子系统与 memory 子系统**，其余 20 条普遍低热度，呈现出"双主线、小尾巴"的分布。

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 内容要点 |
|---|----|---------|
| **[#28746](https://github.com/google-gemini/gemini-cli/pull/28746)** | dependabot: 一次性升级 74 个 npm 依赖（XL） | 涉及 `@modelcontextprotocol/sdk` 1.23→1.30、`simple-git`、`google-auth-library` 等核心包 |
| **[#28749](https://github.com/google-gemini/gemini-cli/pull/28749)** | `@google/genai` 1.30.0 → 2.15.0 | 官方 SDK 大版本升级，需重点回归 |
| **[#28751](https://github.com/google-gemini/gemini-cli/pull/28751)** | `google-auth-library` 10.9.0 → 11.0.0 | 鉴权库主版本变更 |
| **[#28752](https://github.com/google-gemini/gemini-cli/pull/28752)** | `puppeteer-core` 24 → 25.4.0 | 浏览器自动化依赖升级，关系到 browser agent 行为 |
| **[#28747](https://github.com/google-gemini/gemini-cli/pull/28747)** | `@a2a-js/sdk` 0.3.11 → 1.0.1 | A2A 协议 SDK 升至 1.0 正式版 |
| **[#28744](https://github.com/google-gemini/gemini-cli/pull/28744)** | fix(acp): 修复 `loadSession` 在 resume 前开启新聊天导致 session 文件污染 | **P1**，直接修复 #28693，影响 ACP 集成稳定性 |
| **[#28738](https://github.com/google-gemini/gemini-cli/pull/28738)** | feat: 允许 agents 调用 agents（`size/l`, `help wanted`） | 解决 #22092，允许子代理通过 `tools:` frontmatter 递归委派，是 subagent 体系关键能力 |
| **[#28743](https://github.com/google-gemini/gemini-cli/pull/28743)** | fix(core): 保留 resolved model config 中的 `systemInstruction` 与 `tools` | 修复 `GeminiChat.sendMessageStream` 覆盖模型级配置的问题 |
| **[#28742](https://github.com/google-gemini/gemini-cli/pull/28742)** | fix(caretaker-agent): 将两个 triage-worker skill 的 `name` 改为合法字符 | 修正 Agent Skills 规范违反（`code_explorer`、`spec_generator` 含下划线） |
| **[#26540](https://github.com/google-gemini/gemini-cli/pull/26540)** | fix(core): 修复 policy engine 影响工具审批的关键 bug | **P1/P2**，修复正则空字节 bug，解决 `YOLO`/`AUTO_EDIT` 模式下反复弹审批的问题 |

---

## 5. 功能需求趋势

从过去 24 小时活跃 Issue 提炼，开发者社区诉求呈现以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Subagent 体系成熟化** | #22323、#21409、#21968、#22093、#21763、#22267、#20195、#22598、#21000 | ⭐⭐⭐⭐⭐（最高） |
| **Auto Memory / 持久记忆系统健壮性** | #26522、#26523、#26525、#26516 | ⭐⭐⭐⭐（同一作者批量立项） |
| **Browser Agent 跨平台/会话管理** | #21983、#22232、#22267 | ⭐⭐⭐ |
| **AST-aware 代码库理解工具** | #22745、#22746、#24353 | ⭐⭐⭐ |
| **Agent 安全性与权限** | #22672（抑制破坏性操作）、#26525（脱敏）、#22093（permission 异常） | ⭐⭐⭐ |
| **CLI 终端渲染性能** | #21924、#24935、#22465 | ⭐⭐ |
| **Agent 自描述/自调用能力** | #21432、#22598 | ⭐⭐ |
| **回归测试与 Eval 基础设施** | #24353、#22232 | ⭐⭐ |

---

## 6. 开发者关注点

汇总 Issue 高频反馈后，可归纳出三大痛点：

1. **🤖 Subagent 可观测性与可控性不足**
   - 挂起无响应（#21409）、结果状态与实际行为不一致（#22323）、无主动调用 skills（#21968）、`/bug` 不包含子代理上下文（#21763）——开发者难以理解"agent 在干什么"。
   - 配套呼声：subagent 轨迹分享（#22598）、symlink agent 支持（#20079）、`/chat share` 增强。

2. **🧠 Auto Memory 是新焦点**
   - 开发者 SandyTao520 一次性提交 4 个相关 Issue（#26516/26522/26523/26525），覆盖：**低信号会话循环、patch 校验、确定性脱敏、日志抑制**。
   - 反映社区对"长期记忆"质量与安全边界的高度关注。

3. **🖥️ Shell / 终端交互的"卡死感"**
   - 多条 Issue 描述类似症状：命令执行完后 UI 仍停留在 "Waiting input"（#25166）、外部编辑器退出后屏幕错乱（#24935）、`vite create` 交互提示卡住（#22465）。
   - 修复集中在 `terminalBuffer` 与 Ink 渲染层（#21924 提及 `RenderStatic` 迁移）。

**社区情绪**：整体处于"功能已成型、细节需打磨"的阶段，开发者对 subagent/memory 的产品形态认可，但对稳定性与透明度持续提出强诉求；维护者侧正在通过**评估体系**（#24353）与**规格化**（#28742）双管齐下治理质量。

---

*日报基于 github.com/google-gemini/gemini-cli 过去 24 小时数据生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-10**

---

## 1. 今日速览

过去 24 小时内 Copilot CLI 仓库**无新版本发布、无 PR 合并**，但社区问题活跃度显著上升，**25 条 Issue** 被更新。值得关注的是：**Anthropic Claude 系列模型在企业账户下大面积失效**（#4422、#4390），**MCP 协议层稳定性问题集中暴露**（#4421、#4419、#4370），以及**多会话/并行执行场景的可靠性缺陷**（#4420、#4416、#4423）成为今天的三大主线。

---

## 2. 版本发布

今日无新 Release。最新稳定版本仍为近期发布的 v1.0.x 系列，社区反馈主要围绕 v1.0.28、v1.0.79-1 等版本上的 MCP / 模型目录 / `/remote` 行为差异。

---

## 3. 社区热点 Issues（Top 10）

按 **点赞量、评论活跃度、严重程度** 综合排序：

### 🔥 #1857 — 允许在执行前取消或移除已排队的消息
- **作者**：dorlugasigal | 👍 26 | 💬 9
- **重要性**：本期点赞数最高的 Feature Request。`Ctrl+Q` / `Ctrl+Enter` 排队的消息无法取消，开发者希望能在 agent 空闲、`/compact` 等时机撤回。
- **社区反应**：长期高赞需求，多次被引用讨论。
- 链接：https://github.com/github/copilot-cli/issues/1857

### 🔥 #4422 — CLI 模型选择下全部 Claude 模型被禁用
- **作者**：joelpou | ⏰ 今日新建
- **重要性**：个人 Enterprise 账户下，Claude Sonnet 5 / 4.8 等**所有 Claude 模型**报"This model is disabled by your organization"，回退 CLI 版本无效，昨天还能用。
- **影响**：直接阻断大量依赖 Claude 的工作流，与 #4390 高度相关。
- 链接：https://github.com/github/copilot-cli/issues/4422

### 🔥 #4421 — MCP initialize 握手 60s 硬超时、npx stdio 服务器约 29% 会话失败且永不恢复
- **作者**：devinj-msft | ⏰ 今日新建
- **重要性**：**没有任何重试/退避**，失败后整个会话生命周期内该服务器都不会再被拉起；对大量 npx 启动的 MCP 服务器而言约 **29% 的会话启动失败**。
- **意义**：MCP 生态稳定性的关键瓶颈。
- 链接：https://github.com/github/copilot-cli/issues/4421

### 🔥 #2751 — 组织仓库下 `/remote` 报"could not resolve repository"
- **作者**：Hsuanhe-chang | 👍 13 | 💬 8
- **重要性**：v1.0.28 中 `/remote` 在 GitHub 组织仓库下的普遍性故障，影响远程会话场景的核心可用性。
- 链接：https://github.com/github/copilot-cli/issues/2751

### 🔥 #4390 — 已启用的组织模型在目录中缺失（Claude Sonnet 5/Opus 5、Kimi K3）
- **作者**：Rogn | ⏰ 8-06 创建，今日更新
- **重要性**：组织管理员明确启用的模型在 CLI 模型目录中不出现；所有 Anthropic 模型同步不可用，是 #4422 的"上游版本"。
- 链接：https://github.com/github/copilot-cli/issues/4390

### ⚠️ #4416 — 并行 Explore 子代理因单一模型桶 429 集中失败，无自动切换
- **作者**：FBakkensen | ⏰ 今日新建
- **重要性**：并行 task tool 全部命中 `claude-haiku-4.5` 桶，触发 per-model 突发限制；尽管存在 `eligibleForAutoSwitch`，**未触发自动模型切换**。
- **影响**：直接限制多代理并行能力。
- 链接：https://github.com/github/copilot-cli/issues/4416

### ⚠️ #4419 — Managed-settings 解析期使用空 allow list 永久丢弃用户 MCP 服务器
- **作者**：devinj-msft | ⏰ 今日新建
- **重要性**：CLI 在解析托管设置时，会安装一个 `managedAllowedMcpServerLists: [[]]`（一个空列表）的"临时拒绝一切"MCP 策略；**任何在该窗口期注册的 MCP 服务器会被永久拒收**，即使该账户**并无托管策略**。
- **意义**：策略系统与 MCP 启动时序的耦合缺陷。
- 链接：https://github.com/github/copilot-cli/issues/4419

### ⚠️ #4423 — 新建会话时 kickoff prompt 被静默丢弃
- **作者**：russrimm | ⏰ 今日新建
- **重要性**：worktree / 分支 / CLI 会话已成功配置，但**初始 prompt 永远不会下发到 agent**，会话闲置、prompt 文本丢失。
- **影响**：从桌面 app 启动新会话的可用性。
- 链接：https://github.com/github/copilot-cli/issues/4423

### ⚠️ #4420 — 并行工具调用响应顺序非确定，harness 丢失请求关联
- **作者**：Stono | ⏰ 今日新建
- **重要性**：并行工具响应可能**不携带原始 request id**，caller 端的关联完全丢失，导致 bot 行为混乱。
- **链接**：https://github.com/github/copilot-cli/issues/4420

### ⚠️ #4415 — copilot-cli 高 CPU 占用（等待 sleep 时仍 100%）
- **作者**：MateuszStefek | ⏰ 今日新建
- **重要性**：agent 处于 `sleep 550` 等纯等待状态时，进程仍占满一核 CPU，提示存在**忙等循环或事件循环缺陷**。
- 链接：https://github.com/github/copilot-cli/issues/4415

---

## 4. 重要 PR 进展

过去 24 小时内**无活跃 PR 更新**。本期无可报告的合并/审查动态。

---

## 5. 功能需求趋势

通过对今日更新的 25 条 Issue 提炼，社区关注度集中在以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **MCP 协议稳定性** | #4421、#4419、#4370、#4371、#4408 | ★★★★★ |
| **新模型支持与目录同步**（Claude 5、Kimi K3） | #4390、#4422、#4256（cache_control） | ★★★★★ |
| **企业 / 托管策略 / 鉴权** | #4419、#4408、#4409、#4371 | ★★★★☆ |
| **多代理 / 并行执行可靠性** | #4416、#4420、#4419 | ★★★★☆ |
| **`/remote` 远程会话** | #2751、#2922、#4409 | ★★★★☆ |
| **Hooks / Plugins 扩展体系** | #1730、#4410 | ★★★☆☆ |
| **Auto-mode 自定义** | #4411、#4412 | ★★★☆☆ |
| **本地化与可访问性**（zh-CN） | #4407、#4417 | ★★☆☆☆ |
| **性能与 CPU 占用** | #4415、#4414 | ★★☆☆☆ |
| **会话恢复 / 上下文回放** | #4413、#4423 | ★★☆☆☆ |

**核心趋势**：社区需求从"能不能跑通"过渡到"企业级稳定性"——**MCP 协议韧性、模型目录一致性、企业策略边界**是当前三大工程化诉求。

---

## 6. 开发者关注点与高频痛点

整理今日 issue 反馈，开发者集中反映以下痛点：

1. **MCP 服务器"启动即失败"问题普遍化**
   - 60s 硬超时无重试（#4421）、解析期 fail-closed（#4419）、OAuth 3LO URL elicitation 不支持（#4371）、Enterprise 账户下 `github-mcp-server` OAuth 发现失败（#4408），构成"启动四连坑"。

2. **模型目录与服务端配置不同步**
   - 组织已启用 Claude Sonnet 5/Opus 5、Kimi K3，但在 CLI 中显示禁用（#4390、#4422）；Anthropic 后端未启用 `cache_control` 断点（#4256 已关闭但问题仍存），导致昂贵上下文重复计费。

3. **企业策略 UX 不透明**
   - `cli_remote_control_enabled: false` 时桌面端不提示，仅 422 失败（#4409）；`/remote` 报"not in a GitHub repository"误导开发者以为是 git 平台问题（#2922）。

4. **并行与多代理的稳定性短板**
   - 探索型子代理 429 集中触发却未自动切模型（#4416）；并行工具响应丢失关联（#4420）；kickoff prompt 在新会话中消失（#4423）——三者共同限制了"重负载 agent 编排"的可信度。

5. **本地体验层需求强烈**
   - HUD/上下文面板不可配置（#4418）、对话框需 GUI 化（#4417）、zh-CN 本地化（#4407）显示本地化、UI 与可观测性正在成为下一波呼声。

6. **性能基线问题**
   - 等待状态下 CPU 100%（#4415）、BYOK 自定义提供方在请求出站前就被 403（#4414），提示事件循环与请求生命周期仍有粗粒度缺陷。

---

> 📌 **编辑建议**：建议 Copilot CLI 团队下一周期优先处理 **MCP 启动韧性**（重试 / 退避 / 配置化超时）、**模型目录与服务端策略同步**、**多代理并行关联完整性** 这三个高影响面，将对社区满意度的边际改善最大。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-10**

---

## 📌 今日速览

过去 24 小时 Kimi Code CLI 仓库无新版本发布。社区活动呈现两个焦点：一是老牌高热议题 [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 持久化记忆系统功能请求持续活跃（27 条评论），二是新提交的 [Issue #2598](https://github.com/MoonshotAI/kimi-cli/issues/2598) ACP 流式响应静默挂死问题引发对 0.34.0 稳定性的关注。同时一个来自 1 月份的 [PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739) 被重新推进。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**，本节省略。

---

## 🔥 社区热点 Issues

> **数据说明**：过去 24 小时内更新的 Issue 共 **2 条**，由于数量有限，以下全部列出与解读。

### 1. [Issue #2598 — ACP/print 流式响应静默挂死](https://github.com/MoonshotAI/kimi-cli/issues/2598)
- **状态**：OPEN（新增）
- **作者**：ai-agent-workbench｜**创建/更新**：2026-08-09｜**评论**：0
- **重要性**：⭐⭐⭐⭐⭐ 实质性生产缺陷
- **为什么值得关注**：报告 0.34.0 版本在 `kimi acp` 模式下与 api.kimi.com 流式对话中**偶发连接挂死**——内容 delta 已全部到达，但 `[DONE]`/finish 终端帧始终不来，且 CLI **无流式空闲超时配置项**，挂死轮会被下一条消息静默顶替，已流出数据丢失（wire.jsonl 中无 `content.part`/`usage.record`）。作者明确指出 0.31.1 之前修复仅覆盖 Esc 场景，此为**另一代码路径的回归**。
- **社区反应**：新提交尚未产生评论，但证据链非常完整（症状、复现路径、配置项缺失验证、wire 层取证）。

### 2. [Issue #1283 — Memory System：跨会话持久化上下文](https://github.com/MoonshotAI/kimi-cli/issues/1283)
- **状态**：OPEN（持续活跃）
- **作者**：CatKang｜**创建**：2026-02-27｜**更新**：2026-08-09｜**评论**：27｜**👍**：0
- **重要性**：⭐⭐⭐⭐⭐ 长期战略级功能需求
- **为什么值得关注**：提议实现完整的 Memory System，包含**自动记忆**（AI 管理的笔记）与**手动记忆**（用户通过指令自定义）。直接解决 CLI 工具"每次启动都从零开始"的根本痛点。
- **社区反应**：27 条评论说明社区参与度高，是当前仓库讨论最热的功能议题之一。

---

## 🛠️ 重要 PR 进展

> **数据说明**：过去 24 小时内更新的 PR 共 **1 条**，详情如下。

### [PR #739 — fix(kosong): 剥离 Google GenAI 工具参数中的 JSON Schema 元数据](https://github.com/MoonshotAI/kimi-cli/pull/739)
- **状态**：OPEN
- **作者**：xiaoju111a｜**创建**：2026-01-28｜**更新**：2026-08-09
- **关联 Issue**：Resolves [#734](https://github.com/MoonshotAI/kimi-cli/issues/734)
- **修复内容**：Google GenAI provider 调用包含标准 JSON Schema 元数据字段（如 `$schema`、`additionalProperties` 等）的 MCP 工具（如 Exa MCP）时触发校验错误。该 PR 在 `kosong` 模块对工具参数做规范化剥离。
- **关注意义**：体现 Kimi CLI 向**多 Provider 生态**扩展过程中的兼容打磨，是 MCP + 多模型组合可用性的关键补丁。

---

## 📈 功能需求趋势

从近期活跃议题提炼出两个清晰的方向：

| 趋势 | 代表性议题 | 解读 |
|---|---|---|
| **跨会话持久化与上下文管理** | [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) | 记忆系统是当前社区呼声最高的功能方向，关系到 CLI 在重复性任务中的"可学习性" |
| **多 Provider / 多生态兼容** | [PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739) | 与 Google GenAI、MCP 等非默认生态的对齐需求上升，社区正主动适配更广泛的工具栈 |
| **ACP 协议可靠性** | [#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598) | 新出现的稳定性问题暴露 ACP 模式下的边界场景覆盖不足 |

---

## 💬 开发者关注点

基于今日活跃数据，开发者反馈的痛点与高频需求集中在以下方面：

1. **流式响应的可靠性与可观测性**（[#2598](https://github.com/MoonshotAI/kimi-cli/issues/2598)）
   - 终端帧缺失、无空闲超时、错误不可见——三方交流场景下用户体验受损

2. **超时/取消机制的缺失**
   - 用户没有官方文档中的"流式空闲超时"配置入口；异常恢复路径只能通过"再发一条消息"绕过

3. **跨会话工作流的连续性**（[#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283)）
   - 缺乏项目惯例、用户偏好等长期上下文的持久化层，每次会话冷启动

4. **多 Provider 兼容性边角问题**（[PR #739](https://github.com/MoonshotAI/kimi-cli/pull/739)）
   - JSON Schema 元数据等 schema 层语义差异需要在 provider adapter 层逐项抹平

5. **测试与回归覆盖不足**
   - #2598 指明这是 0.31.1 修复未覆盖的另一路径，提示 ACP 模式下需更系统的异常路径用例库

---

*报告基于 GitHub 公开数据生成，覆盖 MoonshotAI/kimi-cli 仓库。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-10

## 📌 今日速览

今日 OpenCode 社区核心动态围绕 **OpenCode Go 订阅服务** 与 **V2 架构演进** 双线展开：一方面，DeepSeek V4 Flash 模型在 Console Go 网关层出现"模型名前导空格"导致 HTTP 400 的连锁故障，多个相关 Issue 被集中关闭；另一方面，官方推进 `dev` → `v2` 的大规模合并 PR（#41460），标志着 V2 已进入收尾阶段。开发者反馈集中在剪贴板兼容、TUI 启动冻结、嵌套子代理权限挂起等高频痛点上。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。** 最近一次发布请参考官方仓库 Releases 页面。

---

## � 社区热点 Issues

| # | Issue | 评论 | 👍 | 关注理由 |
|---|-------|------|-----|----------|
| [#4283](https://github.com/anomalyco/opencode/issues/4283) | Copy To Clipboard is not working | 122 | 110 | **热度最高**，跨越近 9 个月仍未解决，影响所有平台用户 |
| [#7602](https://github.com/anomalyco/opencode/issues/7602) | [FEATURE] Native Model Fallback / Failover | 29 | 107 | 当前仅支持同 ID 兜底，跨模型自动切换是大量代理工作流刚需 |
| [#785](https://github.com/anomalyco/opencode/issues/785) | 禁用流式模式 | 29 | 38 | 长期未关闭（2025-07 创建），影响使用 Credal 等非流式代理的用户 |
| [#12472](https://github.com/anomalyco/opencode/issues/12472) | Native Claude Code hooks 兼容 | 17 | 38 | 已有 rules/skills 兼容，补齐 hooks 可大幅降低 Claude Code 迁移成本 |
| [#24649](https://github.com/anomalyco/opencode/issues/24649) | OpenCode Go 自托管 vs 第三方边界澄清 | 17 | 32 | 已 CLOSED，揭示 Go 计划定价与基础设施透明度是付费用户关切点 |
| [#34743](https://github.com/anomalyco/opencode/issues/34743) | Xcode 27 ACP 忽略 opencode.json 配置 | 15 | 0 | macOS 27 + Xcode 27 beta 集成链路回归，涉及 LMStudio/Ollama 用户 |
| [#13715](https://github.com/anomalyco/opencode/issues/13715) | 嵌套子代理权限请求静默挂起 | 11 | 24 | 多代理架构核心缺陷，PR #36046 已提交修复 |
| [#39838](https://github.com/anomalyco/opencode/issues/39838) | DeepSeek V4 Flash 突然失效 | 9 | 11 | 与今日多起 Go 网关 bug 同源，已 CLOSED |
| [#30221](https://github.com/anomalyco/opencode/issues/30221) | "terminated" UnknownError | 9 | 4 | 所有 Go 订阅会话稳定复现，定位网络/上游问题 |
| [#16226](https://github.com/anomalyco/opencode/issues/16226) | 仅发送按钮触发 prompt（禁用回车发送） | 9 | 0 | 已 CLOSED，反映长 prompt 用户对误触的强需求 |

---

## 🛠️ 重要 PR 进展

| PR | 类型 | 内容摘要 |
|----|------|----------|
| [#41460](https://github.com/anomalyco/opencode/pull/41460) | 架构同步 | `dev` → `v2` 大规模合并，保留 V2 独有架构（App/Desktop/Core/TUI/SDK/server） |
| [#37584](https://github.com/anomalyco/opencode/pull/37584) | Bug fix | 限制 `SessionPrompt` 循环中连续溢出压缩次数，关闭 #27924 |
| [#40427](https://github.com/anomalyco/opencode/pull/40427) | 性能优化 | 实验性渲染器优化：初始渲染器入口内存 **7.45MB → 1.82MB（-75.5%）** |
| [#39358](https://github.com/anomalyco/opencode/pull/39358) | New feature | V2 Session 一级 archive 操作，记录 `session.archived` 事实并投影到 `time.archived` |
| [#41452](https://github.com/anomalyco/opencode/pull/41452) | Bug fix | 对齐 GitHub Copilot Responses 无状态续传，持久化推理项 ID（已 CLOSED） |
| [#40997](https://github.com/anomalyco/opencode/pull/40997) | 重构 | 用 `Form.Fields` 替换集成提示，统一 OAuth/Key 校验下沉到 Core |
| [#41455](https://github.com/anomalyco/opencode/pull/41455) | Bug fix | 在模型上下文保留本地附件 `source.path`，关闭 #41454 |
| [#36046](https://github.com/anomalyco/opencode/pull/36046) | Bug fix | 渲染嵌套子代理的权限提示，关闭 #13715 长期挂起问题（已 CLOSED） |
| [#36042](https://github.com/anomalyco/opencode/pull/36042) | New feature | TUI 侧边栏新增子代理状态面板 |
| [#36052](https://github.com/anomalyco/opencode/pull/36052) | New feature | 基于 worktree 的工作区切换 + stash-based warp CLI 子命令（已 CLOSED） |

---

## � 功能需求趋势

1. **IDE / 编辑器深度集成**
   - Claude Code hooks 兼容（#12472）
   - Xcode ACP 配置加载修复（#34743）
   - VS Code 扩展剪贴板修复（#39588）

2. **多模型弹性与降级**
   - 原生 Model Fallback / Failover（#7602，👍 107）
   - 流式开关（#785）
   - 自定义 OpenAI 兼容 provider 的 reasoning 选项透传（#27361）

3. **会话与记忆管理**
   - 持久化会话守护进程 + 零工具调用记忆召回（#41453）
   - V2 一级 Session 归档（#39358 PR）
   - `/clear` 替代 `/new` 命令（#38392）

4. **桌面 / TUI UX**
   - Desktop 多窗口/标签页（#14657）
   - Animated BusyWave 加载指示器（#41350 PR）
   - 子代理状态侧边栏（#36042 PR）

5. **附件与多模态**
   - question 工具 UI 支持图片拖放/粘贴（#31791）
   - 路径型 MCP 工具保留剪贴板图片路径（#36051 PR，已 CLOSED）

---

## � 开发者关注点与痛点

| 痛点 | 代表 Issue |
|------|-----------|
| **剪贴板跨平台兼容** | #4283（终态）、#39588（VS Code 扩展 Mac）— 仍是社区最强呼声 |
| **OpenCode Go 计费 / 网关 Bug** | #41300、#41306、#41314、#41322、#41430 — 模型名前导空格、Stripe 已扣款未开通、HTTP 400 多发 |
| **TUI / Desktop 启动卡死** | #41284（macOS M1 空白屏）、#41436（Windows 需管理员） |
| **推理参数透传丢失** | #27361、#41294 — 自定义 provider 下 `reasoning` 字段不进请求体 |
| **嵌套子代理架构缺陷** | #13715、#34743 — 权限挂起、配置不生效，反映多代理模型仍欠打磨 |
| **免费额度模糊** | #32971、#41448 — Zen 免费模型限速提示与实际不一致，影响 Hermes 等第三方客户端 |
| **Windows 权限模型** | #41436 — 非管理员运行时请求静默挂起，阻碍 npm 安装路径普及 |

---

> 📎 **日报说明**：数据源为 GitHub `anomalyco/opencode` 仓库过去 24 小时更新的 Issues/PRs，按评论数与社区互动排序筛选。多数高热度 Issue 跨多日累积，请结合 Issue 时间戳判断时效性。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-10

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) ｜ 采样窗口：过去 24 小时

---

## 📌 今日速览

今日 Pi 仓库动态以 **Bug 收敛 + 扩展/TUI 体验打磨** 为主线。Issues 侧围绕 **llama.cpp 本地模型启动失败**、**Mac 长会话 CPU 飙升**、**TUI 滚动与渲染边界处理** 等高频痛点集中讨论；PR 侧则给出了对应修复，包括 llama.cpp 模型目录缓存、`copyOnSelect` 选项、PageUp/PageDown 翻页、以及 GitHub Copilot 限流登录问题等，值得升级验证。

---

## 🚀 版本发布

过去 24 小时 **无新 Release**。当前主线仍是 0.84.x（最新问题中多次出现 v0.84.1）。

---

## 🔥 社区热点 Issues（Top 10）

1. **#6922 [已关闭] Default model 不能设为 llama.cpp 模型** — 14 👍，10 评论  
   当 `defaultProvider=llama.cpp` 且 `defaultModel` 指向 ini 中模型时，启动即报 "No models available" 并退出，是近期最受关注的本地模型可用性问题。  
   👉 [earendil-works/pi#6922](https://github.com/earendil-works/pi/issues/6922)

2. **#7730 [Open] Mac OS 长会话高 CPU 占用（50–110%）** — 6 👍，6 评论  
   内存稳定 600–800MB，但 CPU 随会话长度持续飙高，疑似与上下文或会话历史管理相关，影响长时间编程任务体验。  
   👉 [earendil-works/pi#7730](https://github.com/earendil-works/pi/issues/7730)

3. **#6948 [已关闭] 内置 llama.cpp provider 启动 race condition** — 4 评论  
   `settings.json` 中 `defaultProvider/defaultModel` 在启动时未生效，是 #6922 的根因之一，PR #7072 已提交修复。  
   👉 [earendil-works/pi#6948](https://github.com/earendil-works/pi/issues/6948)

4. **#3159 [已关闭] edit tool timeout 终止** — 4 评论  
   Qwen 27b 在 edit 工具调用中频繁出现 "terminated"，怀疑底层超时阈值过低。  
   👉 [earendil-works/pi#3159](https://github.com/earendil-works/pi/issues/3159)

5. **#7323 [已关闭] `pi update --models` 单次请求卡顿即整体失败** — 4 评论  
   15 秒超时；任何一次瞬时网络抖动会让整个目录刷新失败，应改造成容错重试。  
   👉 [earendil-works/pi#7323](https://github.com/earendil-works/pi/issues/7323)

6. **#7720 [Open] 希望在 TUI 全屏模式下禁用「选中即复制」** — 4 评论  
   新 TUI 模式默认 `select → 复制` 容易误覆盖剪贴板，需要配置项。  
   👉 [earendil-works/pi#7720](https://github.com/earendil-works/pi/issues/7720)

7. **#7616 [已关闭] TUI 聊天区在工具块超视口时跳屏且无 PageUp/PageDown** — 3 评论  
   微分渲染器在 `firstChanged < prevViewportTop` 时整屏清屏，导致回看历史困难。  
   👉 [earendil-works/pi#7616](https://github.com/earendil-works/pi/issues/7616)

8. **#7740 [Open] `/reload` 后 session_start 注册的自定义 tool 渲染失效** — 3 评论  
   加载顺序导致 MCP 类扩展在 reload 后被调用时不再走 `renderCall/renderResult`，影响自定义 UI。  
   👉 [earendil-works/pi#7740](https://github.com/earendil-works/pi/issues/7740)

9. **#6922 的姊妹贴 #7869 [已关闭] AI21 API 已退役（HTTP 410）** — 2 评论  
   用户突然全量收到 "This API has been retired" 错误，建议内置 provider 增加废弃检测或迁移提示。  
   👉 [earendil-works/pi#7869](https://github.com/earendil-works/pi/issues/7869)

10. **#7862 [已关闭] RPC 并发会话替换存在竞态** — 2 评论  
    `handleInputLine` 异步未串行化，`new_session/switch_session/fork/clone` 可并发替换 `AgentSessionRuntime`，导致运行时被并发拆卸，提示扩展作者注意。  
    👉 [earendil-works/pi#7862](https://github.com/earendil-works/pi/issues/7862)

> 其他值得扫一眼的高质量 issue：#7864（`ExtensionContext.exec` 无法强制 SIGKILL 抗 SIGTERM 子进程）、#7863（管道 stdin 与提示拼接缺少分隔符）、#7849（带 `pi-package` 关键字的 npm 包未进入 gallery 搜索）、#7870（远程目录覆盖 `z-ai/glm-5.2` 真实 1M context）、#7868（渲染行宽超终端直接 abort session）。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **#7872 feat(coding-agent): 在 session_start 暴露上下文文件** — 已关闭  
   把加载的 `AGENTS/CLAUDE` 上下文文件经由 `session_start` 事件暴露给扩展，附带文档与单测，便于扩展作者基于上下文做条件判断。  
   👉 [earendil-works/pi#7872](https://github.com/earendil-works/pi/pull/7872)

2. **#7072 fix(coding-agent): 缓存 llama.cpp 模型目录** — 已关闭，修复 #6948  
   解决 llama.cpp 模型在异步刷新期间未能即时用于默认模型的竞态问题，启动期即可正确解析。  
   👉 [earendil-works/pi#7072](https://github.com/earendil-works/pi/pull/7072)

3. **#7866 feat(tui): `TuiAltScreen` 增加 `copyOnSelect` 选项** — 已关闭  
   直接对应 #7720，允许关闭全屏模式下的「选中即复制」。  
   👉 [earendil-works/pi#7866](https://github.com/earendil-works/pi/pull/7866)

4. **#7865 fix(tui): SelectList/模型选择器支持 PageUp/PageDown** — 已关闭  
   基础 `SelectList` 与模型选择器补齐翻页键绑定，呼应 #7616 的历史滚动诉求。  
   👉 [earendil-works/pi#7865](https://github.com/earendil-works/pi/pull/7865)

5. **#7344 feat(protocol): 新增远程会话线协议** — 已关闭  
   新建 `@earendil-works/pi-protocol` 包，含验证过的远程会话命令/事件/快照/错误，以及定长 CBOR + 增量 length-prefixed 帧，支持浏览器侧安全运行。  
   👉 [earendil-works/pi#7344](https://github.com/earendil-works/pi/pull/7344)

6. **#7858 fix(coding-agent): 路由扩展命令不依赖 `expandPromptTemplates`** — 已关闭，修复 #7859  
   `pi.sendUserMessage()` 之前因 `expandPromptTemplates: false` 跳过命令处理，使文档中"工具排队重载命令"的模式失效；本次修复让命令路由独立于模板展开。  
   👉 [earendil-works/pi#7858](https://github.com/earendil-works/pi/pull/7858)

7. **#7857 feat(agent): `sendUserMessage` 暴露 `expandPromptTemplates`** — **Open**  
   让扩展作者可选开启模板展开，从而触发扩展命令；维护者担忧可能产生连锁副作用，值得关注后续讨论。  
   👉 [earendil-works/pi#7857](https://github.com/earendil-works/pi/pull/7857)

8. **#7856 fix(ai): 校验阶段修复 JSON 双序列化的结构化工具参数** — 已关闭  
   解决部分 provider 把对象/数组再次序列化为字符串时校验直接抛 `must be object` 的硬错误，恢复对真实错误的透传。  
   👉 [earendil-works/pi#7856](https://github.com/earendil-works/pi/pull/7856)

9. **#7851 / #7844 fix(provider): 顺序启用 GitHub Copilot 模型策略，避免 429** — 已关闭  
   模型多的 Copilot 组织此前并发启用全部模型会撞限流；改为顺序启用或彻底移除登录时的批量启用，是 #7850 的直接修复。  
   👉 [earendil-works/pi#7851](https://github.com/earendil-works/pi/pull/7851) ｜ [earendil-works/pi#7844](https://github.com/earendil-works/pi/pull/7844)

10. **#7853 fix(coding-agent): 修正 RPC 示例中的 `--no-extensions` 笔误** — 已关闭  
    小但实用，避免扩展作者复制粘贴错误标志。  
    👉 [earendil-works/pi#7853](https://github.com/earendil-works/pi/pull/7853)

---

## 📈 功能需求趋势

从最近 24h 的 Issue 文本归纳，社区关注度最高的方向依次为：

| 方向 | 代表 Issue | 热度信号 |
| --- | --- | --- |
| **TUI 渲染与交互体验** | #7720、#7616、#7740、#7495、#7861、#7868、#7852、#6527 | 8+ 条聚集，是当前最密集的主题 |
| **本地模型（llama.cpp）默认/启动体验** | #6922、#6948（已被 #7072 修复） | 启动期可用性问题，最高点赞 |
| **扩展系统稳定性** | #7864、#7863、#7862、#7740、#7859、#7857 | 关注 session_start/命令路由/进程回收 |
| **Provider 容错与目录一致性** | #7323、#7854、#7870、#7869、#7867 | 模型目录、远程覆盖、错误识别 |
| **新模型/新 Provider** | #7847（Qwen Token Plan 中国区个人版） | 区域化订阅接入诉求 |
| **长会话性能与自动压缩** | #7730、#7848 | CPU 占用与压缩后任务中断 |
| **跨会话 / Harness 能力** | #7845（移植 oh-my-pi 的四条能力） | 流规则、子代理、advisor、跨会话记忆 |
| **桌面宿主集成** | #7860（EPIPE）、#7852（点击定位） | 作为子进程被外部 UI 嵌入时的问题 |

---

## 🧑‍💻 开发者关注点（高频痛点）

1. **TUI 滚动/视图抖动是日常使用最大摩擦**  
   多个 Issue 描述一致：在长输出、流式生成、reload 或工具块扩张时，视图会"抢回底部"或整屏清空；社区普遍要求 PageUp/PageDown 历史浏览、保持编辑器可见、可禁用自动复制等。`#7866` + `#7865` 是当日最直接的回应。

2. **本地模型默认启动链路脆弱**  
   `#6922` + `#6948` 揭示出 `defaultProvider/defaultModel` 在异步模型刷新时存在竞态，PR `#7072` 用缓存兜底；后续在 #7870 又出现"远程目录覆盖本地正确字段"问题，建议扩展/工具作者警惕 `MutableModels.refresh` 的行为差异（见 #7854）。

3. **扩展 API 与文档不同步**  
   `#7859` 与 `#7858` 暴露 `extensions.md` 中的"工具排队命令消息"模式实际无法工作，已修复；`#7740` 则指出 `/reload` 后 `session_start` 注册的 hook 顺序被破坏。开发者应关注 `#7857` 的后续讨论（`expandPromptTemplates` 暴露的影响范围）。

4. **进程/IO 边界鲁棒性不足**  
   `#7864`（SIGTERM 无法升级为 SIGKILL）、`#7863`（管道输入无分隔符拼接）、`#7860`（EPIPE 未处理）三类问题都集中在"Pi 作为子进程被外部宿主调用"的场景，是把 Pi 嵌入桌面端/SDK 化时必须先解决的硬伤。

5. **Provider 兼容与限流策略需要"软失败"语义**  
   Copilot 429（#7850/7851/7844）、AI21 退役（#7869）、OpenAI Codex 上下文溢出被当成瞬时错误（#7867）、远程目录覆盖真实值（#7870）——社区希望 Pi 能区分「跳过」「尝试过但失败」「目录错误」并支持针对性重试或覆盖。

6. **长会话资源占用与压缩语义**  
   `#7730`（CPU）与 `#7848`（自动压缩后中断任务）指向同一根因：上下文/会话长度管理缺乏可观测指标，开发者期待加入 per-model thinking level 持久化（#7871）之类的细粒度控制。

7. **跨 harness 能力缺口**  
   `#7845` 提议将 oh-my-pi 中的 stream rules、子代理 `task/review`、advisor、跨会话记忆纳入 Pi 主线，PR #7823 已自动关闭；可作为下一阶段 roadmap 的风向标。

---

*日报由 GitHub Issues/PR 公开数据整理生成；如需追踪特定话题或方向，可在仓库订阅 label 后持续观察。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-10

## 一、今日速览

今日 Qwen Code 发布了 `v0.21.8-nightly.20260810.55e20db328` 夜间版本，社区同时在 **多 Agent 协作架构**、**第三方模型接入（Kimi / Xiaomi MiMo）**、**桌面端与 Web Shell 稳定性**三条主线密集推进，多个 P1/P2 级别的 CI 与平台 Bug 在当日得到修复或关闭。

---

## 二、版本发布

**v0.21.8-nightly.20260810.55e20db328** 已发布（commit `55e20db328`）。当前 nightly 阶段变更摘要：

- **feat(core)** 新增 **Qoder 插件扩展** 支持（[PR #8661](https://github.com/QwenLM/qwen-code/pull/8661)），由 @callmeYe 提交
- **feat(ci)** 根据区域负责人（area owner）**自动指派 Issue**（PR 仅披露部分）

> 该版本为夜间构建，建议在测试环境验证后再接入生产链。

---

## 三、社区热点 Issues（精选 10 条）

| # | 标题 / 优先级 | 关键看点 |
|---|---|---|
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | **proposal: Direct External Context Provider Profile** (P3, 12 评论) | 提议为 Qwen Code 增加私有 monorepo 上下文供给方的"直连模式 + Auto Recall"互斥配置；讨论集中在企业级私有知识库集成路径 |
| [#8718](https://github.com/QwenLM/qwen-code/issues/8718) | **RFC: Native coordination for independent Qwen sessions** (P2, 8 评论) | 关键 RFC —— 让多个独立 Qwen 会话由 Leader 分发 worker 并保持交互；多 Agent 协作路线图的官方起点之一 |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | **proposal: Enterprise external-memory integration profile** (P3, 7 评论) | 与 #7585 呼应的企业外部记忆方案，主张"文档先行 + 增量兼容测试"，不改动 Core API |
| [#7118](https://github.com/QwenLM/qwen-code/issues/7118) | **Windows 独立安装器在 Get-FileHash 不可用时失败** (P2, 6 评论, 👍3) | 真实用户痛点，`powershell.exe` 无法解析 `Get-FileHash` 时 SHA-256 校验崩溃；标记 `welcome-pr` |
| [#8615](https://github.com/QwenLM/qwen-code/issues/8615) | **Desktop 0.1.0 / Windows 启动崩溃 EISDIR** (P1, 已关闭, 6 评论) | Windows x64 安装包打开工作区即触发 `EISDIR lstat 'C:'`；P1 级别，已关闭说明修复已合入 |
| [#8784](https://github.com/QwenLM/qwen-code/issues/8784) | **Streamable HTTP MCP：可选 GET/SSE 返回 404 会拖垮整条连接** (P2, 5 评论) | 客户端对可选通知流的探测应当容忍 404 而非终止整条 MCP 连接；与 MCP 规范合规性直接相关 |
| [#8721](https://github.com/QwenLM/qwen-code/issues/8721) | **`npm test` 因未知 flag 无法启动** (P2, 5 评论) | `make test` 报 `EUNKNO` 错误；本地开发者入门摩擦点 |
| [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | **Web 终端下 TUI 持续闪烁/撕裂** (P3, 4 评论) | Alibaba Cloud Workbench 等无 `COLORTERM` 的环境受 `useTerminalBuffer: true` 影响，需要自适应 |
| [#8822](https://github.com/QwenLM/qwen-code/issues/8822) | **Main CI 失败：`monitor.test.ts` … should call monitor tool when asked to watch a command** (P2, 4 评论) | 主干 E2E 持续失败，已由 dev bot 自动建档并标记 autofix/skip |
| [#8678](https://github.com/QwenLM/qwen-code/issues/8678) | **fix(serve): 大型 restore 超时时保留当前会话** (P1, 2 评论) | 关联 PR #8691 已合并，完成超时契约与可观测性部分；剩余 PR2/3 待跟进 |

> 关注焦点：P1 级别的"会话超时/恢复"（#8678）与"Windows 桌面端崩溃"（#8615）均已在最近合入修复或被关闭，平台稳定性在快速收敛。

---

## 四、重要 PR 进展（精选 10 条）

### 功能类

1. **[#8804 feat(cli): native multi-agent coordination](https://github.com/QwenLM/qwen-code/pull/8804)** — 在现有 Agent Team runtime 与 Agent View 之上新增 `/coordinate <goal>` 入口；显式放弃另起 supervisor/PTY 路线，是 #8718 RFC 的首个落地实现。
2. **[#8368 feat(auth): Kimi 与 Xiaomi MiMo 第三方 Provider](https://github.com/QwenLM/qwen-code/pull/8368)** — 在 `/auth` → Third-party Providers 中加入 Kimi（China / International / Coding Plan）与小米 MiMo（按量 + 多区域），扩展中文 LLM 生态接入。
3. **[#7567 feat(cli): /advisor 命令](https://github.com/QwenLM/qwen-code/pull/7567)** — 复用 `/btw` 的 fork-cache 机制，向审查模型发起只读的第二意见对话评审。
4. **[#8732 feat(cli): Goal v3 在 ACP 会话中落地](https://github.com/QwenLM/qwen-code/pull/8732)** — 将 ACP/Web Shell 的 `/goal` 从 Stop-hook 替换为与 CLI 一致的 Goal v3 状态机，支持 create/status/edit/pause/resume/replace/clear 全套语义。
5. **[#8740 feat(serve): 多客户端 /cdp 隧道共享 Chrome bridge](https://github.com/QwenLM/qwen-code/pull/8740)** — `CdpTunnelRegistry` 支持 N 路并发客户端共用一个 Chrome；非 daemon 进程也能"搭车"使用。
6. **[#8403 feat(audit): legacy code audit workflow](https://github.com/QwenLM/qwen-code/pull/8403)** — 实现 #8397 设计：新增 `/audit <dir> [--effort low|medium|high]`，无需 diff/PR 即可审计现有模块。

### 修复 / 性能类

7. **[#8818 fix(core): 捕获所有 OpenAI-compatible 端点上的 content-only 思考标签泄漏](https://github.com/QwenLM/qwen-code/pull/8818)** — 将原本 vendor-specific 的兜底升级为默认行为，关闭两处绕过路径；解决 #6666 等历史问题。
8. **[#8276 fix(core): 延迟工具发现期间保持 prompt cache 稳定](https://github.com/QwenLM/qwen-code/pull/8276)** — `tool_search` 在结果中呈现匹配 schema，并引入 `deferred_tool_call` 桥接后续真实调用，显著降低 token 浪费。
9. **[#8816 fix(ci): 看守静默挂死的沙箱并回收泄漏容器](https://github.com/QwenLM/qwen-code/pull/8816)** — `run-agent.mjs` 增加 `QWEN_IDLE_TIMEOUT_MS`（默认 20 分钟）idle 看守，识别"启动态挂死"并 emit 独立错误码。
10. **[#8798 fix(web-shell): 协调 mid-turn 消息与 daemon 状态](https://github.com/QwenLM/qwen-code/pull/8798)** — 让 daemon 成为已接受 mid-turn 消息的权威所有者；按稳定消息 ID 去重，刷新/切会话后恢复队列；防止 idle 后重复提交。

---

## 五、功能需求趋势

从 22 条更新 Issue + 50 条 PR 中可以提炼出以下社区诉求方向（按热度排序）：

1. **多 Agent 协作与编排** — 最热的架构话题。#8718 RFC、#8769 的 `/review` 工作流引擎化、#8804 的 `/coordinate` 入口、#8775 的 Turn-based SessionRuntime 统一，四件套共同指向"原生多 Agent 协作"。
2. **企业级扩展与私有上下文** — #7585（Direct External Context Provider）与 #7449（External Memory Profile）从两端描绘企业部署形态，均强调"文档先行 + 不破坏 Core API"。
3. **第三方模型生态** — Kimi / Xiaomi MiMo Provider (#8368) 推动中文生态扩展；OpenAI-compatible 端点的 thinking-tag 兜底 (#8818) 让任意兼容端点都可安全接入。
4. **桌面与本地控制 (Local Control)** — #8595 (QR-code 配对)、#8802 (macOS 窗口恢复)、#8806 (Local Control 打开当前会话) 形成完整的桌面端 + 手机接管闭环。
5. **会话生命周期与可观测性** — #8678 (大恢复超时)、#8411 (跨传输 sessionId 协调)、#8775 (推理循环统一) 共同夯实 daemon / serve 路径。
6. **审计与质量工作流** — #8403 `/audit` 工作流、`/review` 编排重构 (#8769)、ACP 适配 Goal v3 (#8732)，让 CLI 能力在更多表面复用。
7. **CI 自动化与基础设施韧性** — autofix/takeover 标签的 PR 密度极高（沙箱 watchdog #8816、triage timeout #8810、Linux lane 工具链 #8792、loader denylist #8763 等），CI 自愈与防挂死成为工程焦点。

---

## 六、开发者关注点

| 痛点类别 | 代表 Issue / PR | 说明 |
|---|---|---|
| **Windows / 桌面端稳定性** | [#7118](https://github.com/QwenLM/qwen-code/issues/7118)、[#8615](https://github.com/QwenLM/qwen-code/issues/8615)、[#8802](https://github.com/QwenLM/qwen-code/pull/8802)、[#8806](https://github.com/QwenLM/qwen-code/pull/8806) | PowerShell 兼容性差、Desktop 启动崩溃、macOS 窗口行为不符合预期；真实用户高频场景 |
| **CI 抖动与基础设施** | [#8721](https://github.com/QwenLM/qwen-code/issues/8721)、[#8822](https://github.com/QwenLM/qwen-code/issues/8822)、[#8799](https://github.com/QwenLM/qwen-code/issues/8799)、[#8816](https://github.com/QwenLM/qwen-code/pull/8816) | 本地测试启动失败、E2E 主干偶发失败、沙箱 2 小时静默挂死；团队正以 autofix + watchdog 思路系统化治理 |
| **MCP 协议兼容性** | [#8784](https://github.com/QwenLM/qwen-code/issues/8784) | Streamable HTTP 的可选探测流 404 不应终结连接；规范遵从度是后续 MCP 生态接入的基础 |
| **终端/TUI 适配性** | [#8659](https://github.com/QwenLM/qwen-code/issues/8659) | Web 终端（Workbench / xterm）需要 fallback 渲染路径，避免 `useTerminalBuffer` 强制重绘 |
| **SDK 行为可观察性** | [#8823](https://github.com/QwenLM/qwen-code/issues/8823) | 隐藏的未识别诊断信息会改写 transcript reducer 状态，影响 Web Shell 渲染 |
| **多 Agent / 会话管理边界** | [#8775](https://github.com/QwenLM/qwen-code/issues/8775)、[#8718](https://github.com/QwenLM/qwen-code/issues/8718) | 各 surface（TUI / headless / ACP / serve / AgentCore）的推理循环分裂为多份实现，社区希望统一到 Turn-based SessionRuntime |
| **推理内容字段契约** | [#6666](https://github.com/QwenLM/qwen-code/issues/6666)、[#8818](https://github.com/QwenLM/qwen-code/pull/8818) | `<think>` 标签泄漏到 `content` 是真实线上问题；目前已升级为默认兜底，跨 OpenAI-compatible 端点统一处理 |

---

> 📌 **小贴士**：今日很多 PR 都带 `autofix/takeover` 标签，说明 Qwen Code 已经在 CI 环节引入"自动修复代理 + 人工接管"的双轨机制。如有兴趣贡献，可优先关注带 `welcome-pr` 标签的 [#7118](https://github.com/QwenLM/qwen-code/issues/7118)、[#8659](https://github.com/QwenLM/qwen-code/issues/8659)、[#6666](https://github.com/QwenLM/qwen-code/issues/6666) 三条。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报
**日期：2026-08-10**

> 📌 **说明**：本期数据中，所有 Issue 与 PR 链接均指向 `Hmbown/CodeWhale`，说明该仓库已从早期 "DeepSeek-TUI" 品牌过渡为 **CodeWhale** 命名空间；本期日报沿用外部品牌名称，但所有链接以仓库实际现状为准。

---

## 1. 今日速览

今天最重要的信号是 **v0.9.6 发布流水线正在密集收尾**——同一窗口内连续合并了 PR #5313（release 准备）、#5308（CNB 镜像下载链接修复）、#5306（Cargo crate 发布顺序校验），意味着 v0.9.6 "subtractive runtime" 版本即将落地。与此同时，v0.9.5 的里程碑跟踪（#5266）和统一任务面板（#5270）继续推进，而社区用户层面仍被 **context compaction 行为不透明**（#5096、#5239）和 **provider/model 切换留下脏状态**（#5034、#5250）反复困扰，TUI 安全默认值回退（#5293）成为少数带 👍 反馈的体验类诉求。

---

## 2. 版本发布

**过去 24 小时内无新 Release tag**，但 v0.9.6 已经"事实就绪"：

- **PR #5313** `chore(release): prepare v0.9.6` — 已合并，明确 v0.9.6 是"subtractive runtime"发行：压缩一次 provider summary + 显式 successor handoff，去除 harness 创建的中间障碍，同时保留显式 budget、deadline、cancellation 与真实的 provider 状态。
- **PR #5308** `fix(release): use CNB asset download URLs` — 已合并，修正 CNB 镜像仓库 slug 与 `/-/releases/download/vX.Y.Z/` 路径，避免 mirror mode 拿到 HTML 而非二进制。
- **PR #5306** `fix(release): validate crate publication order` — 已合并，发布前强制校验 20 个 crate 的顺序（`codewhale-core` 必须在 `codewhale-tui` 之前），闭环处理重复/缺失/版本混乱/依赖反转。

> ⏳ 等待项目方随后推送 v0.9.6 tag，预计是当日最大事件。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|---|---|---|---|
| **#3205** | [v0.9.3: Fleet model classes, loadout auto, semantic route roles](https://github.com/Hmbown/CodeWhale/issues/3205) | CLOSED | 13 | 本期评论数最多的"设计纲领型"issue，把 TUI/CLI/exec/subagents/Fleet 的 model+thinking 选型收敛到一处，并定义 Fleet "loadout auto" 概念——是后续所有路由/角色功能的源头。 |
| **#4022** | [v0.9.3: CLI/TUI parity for subagent & runtime control](https://github.com/Hmbown/CodeWhale/issues/4022) | CLOSED | 9 | 给"控制面"立宪：TUI sidebar 不能再是 subagent 控制的唯一入口，CLI 与未来云端必须平权。属于架构级承诺，影响中长期演进。 |
| **#4949** | ["Constitution" 中文译法讨论](https://github.com/Hmbown/CodeWhale/issues/4949) | OPEN | 8 | 罕见的、由中文贡献者发起的术语治理讨论：该项目多语言政策走向的"风向标"，建议中文开发者关注并投票。 |
| **#5293** | [TUI: make deny-by-default approval selection configurable](https://github.com/Hmbown/CodeWhale/issues/5293) | OPEN | 4 (+1 👍) | **0.9.4 起授权弹窗的高亮默认从"Allow"变为"Deny"**，被报告为可引发误操作的 UX 回退；本期唯一被点赞的体验类 issue。 |
| **#5096** | [Compaction gain not visible（收益不可见）](https://github.com/Hmbown/CodeWhale/issues/5096) | OPEN | 4 | 用户发现 `/compact` 后 token 计数不下降；与 #5239、#5134、#5244 串联出"1M 模型被偷偷按 128K 阈值压缩"的体验黑洞。 |
| **#5034** | [Switching providers can retain an unrelated default model](https://github.com/Hmbown/CodeWhale/issues/5034) | OPEN | 4 | 切到 OpenAI 后默认模型仍为 `gpt-5.5`——provider/model 解析未作为原子动作，是 provider 管理议题的典型脏状态 bug。 |
| **#5270** | [v0.9.5: unified tasks surface](https://github.com/Hmbown/CodeWhale/issues/5270) | OPEN | 3 | 把 shell + subagents + durable workers 收敛为一个"运行中的事"列表，是 v0.9.5 最重要的产品面合并。 |
| **#4394** | [Compaction: publish & enforce a structured survival contract](https://github.com/Hmbown/CodeWhale/issues/4394) | OPEN | 3 | 提出"压缩后必须保留意图/决策/证据/工具连续性的显式契约"——是 v0.9.5 是否能解决 #5096 体验问题的关键设计。 |
| **#5209** | [`File(action=edit)` 静默接受错误参数并伪造成功](https://github.com/Hmbown/CodeWhale/issues/5209) | OPEN | 3 | 用户每处要重试 3–5 次的"假成功 edit"，是当前 agent 体验最影响信任感的底层 bug 之一。 |
| **#5287** | [TUI/Fleet: sub-agent 显示身份应使用 fleet/session 名](https://github.com/Hmbown/CodeWhale/issues/5287) | OPEN | 2 | 同一个 sub-agent 在 TUI 各处显示成 `agent_xx`、自动鲸鱼昵称或调度名三套身份，操作员无法对齐心智模型。 |

**简短提到的其他活跃项**：[#576 Fork UX](https://github.com/Hmbown/CodeWhale/issues/576)（`/fork` 进入 TUI）、[#5023 IME 候选窗跳动](https://github.com/Hmbown/CodeWhale/issues/5023)（Windows 11）、[#5314 复制包含 rail 装饰字符](https://github.com/Hmbown/CodeWhale/issues/5314)、[#5102 截图/图像多模态读取](https://github.com/Hmbown/CodeWhale/issues/5102)、[#5047 API key 仅落入工作仓不安全](https://github.com/Hmbown/CodeWhale/issues/5047)、[#5250 多 provider key 难以分开保存](https://github.com/Hmbown/CodeWhale/issues/5250)。

---

## 4. 重要 PR 进展

过去 24 小时只有 **4 条 PR 更新**，但全部都是 release infrastructure 级别：

| PR | 标题 | 状态 | 关键内容 |
|---|---|---|---|
| **#5313** | [chore(release): prepare v0.9.6](https://github.com/Hmbown/CodeWhale/pull/5313) | ✅ CLOSED | 正式切到 v0.9.6 changelog；定位"subtractive runtime"——一次 provider summary + committed successor handoff，删除 harness 造成的冻结，不动预算/取消/真实 provider 状态。 |
| **#5308** | [fix(release): use CNB asset download URLs](https://github.com/Hmbown/CodeWhale/pull/5308) | ✅ CLOSED | 修正下载路径 `codewhale.net/codewhale/.../-/releases/download/vX.Y.Z/`，避免 mirror 拿到 HTML；保留显式 mirror 优先级与 v0.9.6 取消 assertion 的兼容性。 |
| **#5306** | [fix(release): validate crate publication order](https://github.com/Hmbown/CodeWhale/pull/5306) | ✅ CLOSED | 在 `cargo publish` 任何 crate 之前，对照锁定的 cargo metadata 强制校验 20-crate 发布顺序；要求 `codewhale-core` 先于 `codewhale-tui`、禁止重复/缺失/版本混合/依赖反转。 |
| **#5281** | [build(deps): bump jsonschema 0.46.10 → 0.49.6](https://github.com/Hmbown/CodeWhale/pull/5281) | 🟢 OPEN | Dependabot 升级 Python `jsonschema`；是少数非发布链路的依赖 PR，建议关注是否引入 schema 严格化导致的兼容性问题。 |

---

## 5. 功能需求趋势

把过去 24h 的 49 条 issue 合并归类，社区关注度（按评论数加权）大致呈如下谱系：

1. **🧠 Context / Compaction（最高频）** — #3205、#4394、#5043、#5096、#5239、#5134、#5244
   - "1M 模型却被 128K 阈值偷偷压缩"成为头号用户痛点
   - 需求从"能压缩"演进到"压缩必须可观测、必须保住意图/决策/证据/工具状态"
2. **🔌 Provider / Model 管理** — #5034、#5244、#5250、#5134、#5281
   - 切换 provider 时 model 串错、未知 model id 静默降级、多 key 共存、context window 误判——说明 provider 层抽象尚未真正稳定
3. **🖥️ TUI 体验一致性** — #5293、#5287、#5314、#5023、#576、#3364、#5102
   - 焦点项：授权弹窗默认值安全语义、sub-agent 身份显示、复制消息清除 rail 装饰、IME 候选窗位置、Fork 入口、edit 错误更可读、图像/截图预览
4. **🏗️ Rust 重构 / 模块拆分** — #3312、#3313、#3952、#3956、#3957（隐含）
   - 7,000+ 行的 `runtime_threads.rs`、5,000+ 行的 `chat.rs`、`ui.rs::run_event_loop` 都被拆分成"store / executor / events / types"四象限——为后续 LLM harness 稳定性打底
5. **🤖 Sub-agent / Fleet 工作流** — #3205、#4022、#5098、#5270、#5287
   - 路线已收敛到"TUI/CLI/Remote 三平权"、"任务面板统一"、"loadout 自动"
6. **🔐 安全与可复现** — #5047、#5293、#5312
   - API key 全局落盘而非 working repo、`SOURCE_DATE_EPOCH` 替换硬编码 archive 时间戳
7. **🌍 国际化与文档治理** — #4949（中英术语统一）、#4022（文档先行）

---

## 6. 开发者关注点（痛点 + 高频需求）

提炼自多条 issue 评论与社区描述：

- **"压缩发生了什么？"不可见**：`/compact` 后 token 不

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*