# AI CLI 工具社区动态日报 2026-08-29

> 生成时间: 2026-08-29 05:09 UTC | 覆盖工具: 9 个

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



---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-29 | 数据源：github.com/anthropics/skills**

> ⚠️ **数据说明**：本次抓取的 50 条 PR 数据显示评论数均为 `undefined`、点赞为 0，推测为 GitHub API 排序字段未返回。因此 PR 排名采用 **"关联 Issue 评论数 + 创建/更新时间 + 话题热度"** 作为代理指标综合判断。Issues 数据完整。

---

## 1. 热门 Skills 排行（按社区关注度综合排序）

| 排名 | PR / Skill | 功能 | 关联热度 | 状态 |
|---|---|---|---|---|
| 🥇 | **#1298 — skill-creator 评测修复**<br>修复 `run_eval.py` 永远报 0% recall 的核心 bug | skill 描述优化基础设施 | 关联 Issue #556（12 评论，7 👍）<br>10+ 独立复现 | OPEN |
| 🥈 | **#514 — document-typography**<br>检测并修复 AI 生成文档中的孤字/孤段/编号错位 | 通用文档质量提升 | 2026-03 持续被讨论，影响所有生成式文档场景 | OPEN |
|  | **#1099 / #1050 — Windows 兼容修复**<br>修复 `run_eval.py` 在 Windows 子进程管道读取崩溃 | skill-creator 跨平台可用性 | 关联 Issue #556 系列，Windows 用户群体核心痛点 | OPEN |
| 4 | **#1628 — Hivemind 多 Agent 编排**<br>用 free 模型 headless worker 承担机械任务 | 多 Agent 编排 / 降本 | 2026-08-21 最新 PR，符合"贵模型管规划、便宜模型管执行"的趋势 | OPEN |
| 5 | **#1367 — self-audit (v1.3.0)**<br>交付前机械验证 + 四维推理质量门控 | 输出质量保障 | 关联 Issue #1385（4 评论），质量门控话题延续 | OPEN |
| 6 | **#83 — skill-quality-analyzer & skill-security-analyzer**<br>技能元分析（结构/安全/质量五维评估） | Skills 元能力 | 关联 Issue #492（43 评论，安全信任边界最热议题） | OPEN |
| 7 | **#568 — ServiceNow 平台技能**<br>覆盖 ITSM/ITOM/SecOps/ITAM/FSM/CSDM 全模块 | 企业 IT 服务管理 | 2026-03 提交，2026-08 仍在更新，企业级场景代表 | OPEN |
| 8 | **#723 — testing-patterns**<br>覆盖 Testing Trophy / AAA / RTL / Vitest 全栈测试模式 | 测试工程方法论 | 2026-03 持续讨论，测试生成是高频诉求 | OPEN |

**社区讨论焦点**：
- **skill-creator 自身的"评测失灵"是最关键技术债**——所有依赖 `run_eval.py` 的描述优化（#556）都跑在噪音上，#1298 / #1099 / #1050 / #1602 都在围剿同一根因。
- **文档质量类技能（typography / ODT / docx 修复）** 关注度高，因为"所有 Claude 生成的文档都会中招"（#514 原话）。

---

## 2. 社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 评论数 | 信号强度 |
|---|---|---|---|
| 🔐 **信任与安全边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 skill 冒充官方 `anthropic/` 命名空间 | **43** | 🔥🔥🔥 压倒性第一 |
| 🏢 **企业内协作与共享** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 组织级 skill 共享 | 16（8 👍） | 🔥🔥 |
|  **基础设施 Bug** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% 触发率 | 12（7 👍） | 🔥🔥🔥 |
|  **Agent 自治理 / 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory<br>[#412](https://github.com/anthropics/skills/issues/412) agent-governance | 9 / 6 | 🔥🔥 |
| 📦 **分发与命名空间冲突** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复 | 6（9 👍） | 🔥 |
|  **Context Window 失控** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次性注入 156k token | 4 | 🔥🔥 |
| 🛡️ **质量门控 / 自审计** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate Pipeline | 4（1 👍） |  |
| 🔌 **互操作协议** | [#16](https://github.com/anthropics/skills/issues/16) Skill 暴露为 MCP<br>[#29](https://github.com/anthropics/skills/issues/29) 接入 AWS Bedrock | 4 / 4 |  |
| 📄 **文档格式健壮性** | [#12](https://github.com/anthropics/skills/issues/12) docx 空白字符重排 | 4（1 👍） |  |

**趋势聚类**：
1. **从"造更多 skill"转向"让 skill 可信可用"**——安全、评测、共享、命名空间四个 Issues 占据热度前 4 中的 3 个。
2. **企业落地诉求浮现**——ServiceNow、SharePoint、AWS Bedrock、ITSM/ITAM 等企业场景在 PR 与 Issue 中高频出现。
3. **Context 经济学**——`compact-memory`、`claude-api` 注入 156k token、文档优化都指向同一诉求：**让昂贵 context 不被低价值内容浪费**。

---

## 3. 高潜力待合并 Skills（近期落地概率高）

以下 PR 同时具备"话题热度 + 持续维护 + 明确外部需求"，近期被合入概率较高：

| PR | Skill | 落地驱动力 | 最后更新时间 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测彻底重写 | 阻塞 #556，10+ 复现，描述优化闭环核心 | 2026-06-23 |
| [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | run_eval.py Windows 兼容 | Windows 用户群基本盘，1-line fix 风险极低 | 2026-05-24 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役老模型 ID | 闭环 Issue #1603 + 关联 #1487 context 危机，纯文档更新 | 2026-08-26 |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写引用修正 | 8 处明确错配，零风险 | 2026-04-29 |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 特殊字符校验 | 防止静默解析失败，文档化即可 | 2026-04-16 |
| [#541](https://github.com/anthropics/skills/pull/541) | docx 追踪修订 w:id 冲突 | 解决文档损坏，根因清晰 | 2026-04-16 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | 闭环 Issue #452，社区健康分从 25% 提升 | 2026-03-19 |

**判断依据**：这些 PR 要么是"阻塞型 bug fix"（#1298、#1607），要么是"低风险文档/校验修复"（#538、#539），要么满足明确的社区健康目标（#509）。相比之下，#1628 Hivemind、#568 ServiceNow 等大型新增 PR 涉及更广评审面，落地节奏会慢。

---

## 4. Skills 生态洞察（一句话总结）

> **社区已经从"贡献新 Skill"转向"修基础设施"——最集中的诉求是：让 Skill 生态系统本身变得可信（安全命名空间）、可评（评测信号有效）、可控（Context 占用可控）、可分享（组织级分发），而非继续堆砌新 Skill。**

**对应的四大治理缺口**：
1. 🔴 **信任缺口**（#492，43 评论）— 命名空间混淆是头号风险
2. 🟠 **评测缺口**（#556，12 评论）— 描述优化跑在噪音上
3. 🟡 **Context 缺口**（#1487）— Skill 自重耗尽窗口
4.  **分发缺口**（#228，16 评论）— 企业内仍是手工作业

这四个缺口恰好构成下一阶段 Skills 生态的"治理基建"，比单纯增加新 Skill 更具战略价值——也是 Anthropic 官方需要率先给出框架级回应（而非依赖 PR 解决）的方向。

---

# Claude Code 社区动态日报
**日期**：2026-08-29
**数据源**：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 一、今日速览

今日最重要的动态是 **v2.1.251 版本发布**，引入了 `PreModelSwitch` / `PostModelSwitch` 钩子事件以及远程会话的子代理工具调用实时流式传输能力，扩展了开发者对模型切换和远端协作的可控性。

社区舆情方面，**网络安全防护（Cyber Safeguard）的误判问题**持续升温——多起 Issue（#84352、#90501、#90499、#88927）报告 CVP 已批准的企业组织或正常研发任务被错误拦截，已形成高密度反馈；与此同时，**Windows 桌面端的静默更新机制导致进程遗留、AppX 容器冲突**也引发多位开发者集中反馈（#53247、#89680、#90172）。

---

## 二、版本发布

### v2.1.251 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.251)

**核心变更**：

1. **新增模型切换钩子**：`PreModelSwitch` 与 `PostModelSwitch` 两个事件，允许以 `block`、`confirm` 或 `annotate` 方式拦截或注解模型切换，便于企业级策略注入与审计。
2. **SessionStart 恢复钩子增强**：恢复会话时现可接收"会话陈旧度"和"预估重新缓存成本"，为长时间挂起后的成本控制提供依据。
3. **子代理工具流式传输**：前台子代理的工具调用与执行结果可实时流式推送至 **Remote Control** 会话，远程观察代理执行的延迟显著降低。

> ⚠️ 更新说明文字被截断（"…live streaming of a foreground subagent's tool calls and results to Remote Con"），完整变更日志需参考 release 页面。

---

## 三、社区热点 Issues

| # | Issue | 主题 | 评论 / 👍 | 为何重要 |
|---|-------|------|-----------|----------|
| [#84352](https://github.com/anthropics/claude-code/issues/84352) | CVP 已批准组织仍被网络安全防护拦截 | 164 / 25 | **本月最热**：合规已通过的 Anthropic 客户反复遭遇阻断，业务影响显著 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | Windows 桌面端启动失败（HRESULT 0x80070020） | 30 / 19 | 揭示静默更新遗留 Silo/Job Object 引发 AppX 容器锁定，只能重启恢复 |
| [#61682](https://github.com/anthropics/claude-code/issues/61682) | GitHub 连接器显示已连接但无工具暴露 | 27 / 24 | MCP 集成链路异常，影响核心协作工作流，开发者高度关注 |
| [#34835](https://github.com/anthropics/claude-code/issues/34835) | TUI 消息排队机制（已关闭） | 20 / **27** | 高赞同的功能请求——允许在 AI 思考中预输入后续指令 |
| [#11627](https://github.com/anthropics/claude-code/issues/11627) | Claude Code for Web 支持 .NET 9/10 SDK（已关闭） | 15 / **75** | **本月获赞最高**的功能请求，体现 .NET 生态的强烈需求 |
| [#77071](https://github.com/anthropics/claude-code/issues/77071) | Windows Pro 版 Dispatch 标签页缺失 | 18 / 2 | 桌面端 UI 异常，影响付费用户体验 |
| [#74170](https://github.com/anthropics/claude-code/issues/74170) | MSIX 安装失败（HRESULT 0x80073CF9） | 10 / 1 | Windows 安装链路持续性问题 |
| [#78229](https://github.com/anthropics/claude-code/issues/78229) | 计划任务生成的会话无法固定/不在 Recents 中 | 9 / 0 | 影响 Routines（自动化工作流）场景的可用性 |
| [#88405](https://github.com/anthropics/claude-code/issues/88405) | `.claude/rules/` 符号链接未自动加载 | 7 / 4 | 与官方文档明确冲突，破坏多项目规则共享的常规用法 |
| [#88094](https://github.com/anthropics/claude-code/issues/88094) | Remote Control 被默认开启 | 6 / 8 | 安全敏感问题：远程控制被静默启用引发用户担忧 |

**延伸关注的同主题簇**：

- **Cyber Safeguard 误判集群**：[#90501](https://github.com/anthropics/claude-code/issues/90501)、[#90499](https://github.com/anthropics/claude-code/issues/90499)、[#88927](https://github.com/anthropics/claude-code/issues/88927)——同一用户 sworrl 集中反馈 Opus 4.8 误报"投毒消息""数据库进程冲突验证""引用核验"等合法操作为网络安全威胁。
- **Stealth Restart 衍生问题**：[#89680](https://github.com/anthropics/claude-code/issues/89680)、[#90172](https://github.com/anthropics/claude-code/issues/90172)——Windows 静默重启破坏运行中的会话，造成"Can't reach your computer"。

---

## 四、重要 PR 进展

过去 24 小时仓库中仅更新 **1 个 PR**，整体 PR 活动较为清淡：

### [#87079 fix(security-guidance): make `**` glob patterns match zero-depth paths](https://github.com/anthropics/claude-code/pull/87079)

- **作者**：anishsamant
- **状态**：OPEN
- **内容**：`security-patterns.json` 中的 `**` glob 模式当前依赖 `fnmatch` 匹配，而裸 `*` 已能跨越 `/`，导致 `**/*.ts` 这种规则会**静默遗漏顶层文件**——这在安全规则场景下尤其危险（漏匹配 = 安全未生效）。该 PR 修复了语义不一致问题。
- **价值**：属于"沉默失败型"的安全缺陷修复，触及核心安全语义，合并优先级应较高。

> 📌 如需更全面的 PR 趋势，建议关注近一周窗口而非仅 24 小时。

---

## 五、功能需求趋势

通过对今日高互动 Issues 的语义聚类，社区关注的功能方向可归纳为以下几条主线：

### 1. **企业合规与安全策略接口**（高强度需求）
- 模型切换钩子（已在 v2.1.251 落地）
- Cyber Safeguard 的误判申诉通道与白名单机制（#84352、#90501、#90499、#88927）
- 远程控制的默认状态可配置化（#88094）

### 2. **使用量与成本可视化**（跨多平台一致性需求）
- 桌面端持久化用量条（#80261）
- `/usage` 命令的程序化访问（#80732，已关闭）
- USAGE BARS（#83092，已关闭）

### 3. **TUI 体验增强**
- 消息队列与预输入（#34835）
- 鼠标支持与点击导航（#87769，已关闭）
- 终端尺寸自适应（#80123）

### 4. **多语言/多框架 SDK 生态扩展**
- .NET 9/10 SDK（#11627，👍 75，是本月最高赞）
- 暗示 Rust、Go、Java 等生态可能存在相似诉求

### 5. **桌面端可靠性与更新机制**
- Stealth update 引发的进程孤儿、容器冲突、会话丢失（#53247、#89680、#90172）
- 安装链路 MSIX 错误（#74170）
- Dispatch/Browser 标签页缺失（#77071、#87659）

### 6. **会话管理与组织**
- 子会话自动归属父级分组（#82788）
- 计划任务生成的会话纳入 Recents 并可固定（#78229）
- macOS 会话同步至 iOS 与 Dispatch API（#85285）

---

## 六、开发者关注点

### 🔴 痛点类（影响核心工作流）

1. **Windows 桌面端静默更新是当前最大的可靠性痛点**。多条 Issue 指向同一根因——静默升级未清理旧进程/AppX 容器，导致新版本无法启动、运行中会话丢失。开发者建议至少应提供"更新前确认"或"显式回滚提示"。
2. **Cyber Safeguard 误判已成"阻塞合规工作"的实际问题**。同一报告者 sworrl 连续提交多份结构化 Request ID 复现报告，说明已建立稳定的复现-反馈链路，但目前缺乏明确的申诉 / 人工复核 SLA。
3. **MCP 集成链路不稳定**。GitHub 连接器显示已连接却不暴露工具（#61682），影响最常见的协作场景。

### 🟡 高频诉求类

1. **用量与成本透明度不足**。桌面端缺乏持久化指示器，CLI 缺乏机器可读的 `/usage` 出口，长任务下开发者无法预估成本。
2. **TUI 仍偏"单向输入"**。鼠标交互、消息排队、动态窗口适配三大类功能被反复请求，说明命令行用户对交互效率的预期正在向 IDE 体验收敛。
3. **文档与实际行为不一致**。例如 #88405 的 `.claude/rules/` 符号链接问题——文档明确承诺支持但代码未实现，会误导用户配置。
4. **.NET 生态长期被忽视**。#11627 累计 75 👍，是社区呼声最高但被关闭的请求之一，开发者可能需要转向其他 AI 工具。

### 🟢 正面信号

- v2.1.251 引入的**模型切换钩子**正中企业开发者下怀，可在不修改主流程的前提下注入策略与审计，是生态化的关键一步。
- **Remote Control 子代理流式传输**对远程协作场景是显著体验提升。

---

*本日报基于 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-08-29**

---

## 一、今日速览

Codex 团队昨日在 Rust 端密集发布 **0.151.0-alpha 系列共 5 个版本**（alpha.7.1 → alpha.12），合并 **46 个 PR**，其中绝大多数由 `copyberry[bot]` 自动提交，聚焦 TUI/CLI、模型目录、执行器插件和上下文管理。社区侧的热点则高度集中在 **Windows 桌面端的稳定性问题**（Pet 覆盖层、DWM 句柄泄漏、终端启动失败、Computer Use / Chrome 原生主机握手失败等），以及 **GPT-5.6 在 Code Mode 下独立调用串行化导致 token 浪费** 的性能话题。

---

## 二、版本发布

> 过去 24 小时共发布 5 个 Rust 端 alpha 版本，均为预发布分支，无官方 changelog 摘要。

| 版本 | 类型 | 备注 |
|---|---|---|
| rust-v0.151.0-alpha.7.1 | pre-release | 补丁版本 |
| rust-v0.151.0-alpha.9 | pre-release | — |
| rust-v0.151.0-alpha.10 | pre-release | — |
| rust-v0.151.0-alpha.11 | pre-release | — |
| rust-v0.151.0-alpha.12 | pre-release | 最新 alpha |

发布节奏表明 0.151.0 正式版即将进入收尾阶段，建议关注 Rust 端后续的 changelog 与 CLI 0.151.0 对齐情况。

---

## 三、社区热点 Issues（Top 10）

### 1. [#39903](https://github.com/openai/codex/issues/39903) — 关闭 "Ran N commands" 折叠（44 评论 / 👍65）
用户希望 TUI/CLI 增加选项，始终展开显示已执行命令而非折叠。**互动量第一**，👍 数也最高，反映出开发者对"可审计性"的强烈需求。

### 2. [#35050](https://github.com/openai/codex/issues/35050) — GPT-5.6 串行化独立 Code Mode 调用（29 评论 / 👍40）
报告明确指出，通过显式批量调用可降低 **加权使用量 27–45%**。这是当前最具技术价值的性能问题之一，直接关系到成本控制。

### 3. [#41049](https://github.com/openai/codex/issues/41049) — code-mode host 在握手阶段退出（36 评论）
Windows 上 GPT-5.6 模型完全不可用，握手异常导致本地命令执行通道失效，影响范围广。

### 4. [#25271](https://github.com/openai/codex/issues/25271) — Computer Use 在 Windows 无法读取 Chrome URL（26 评论）
即使在新标签页 `chrome://newtab/` 也无法正确识别 URL，Computer Use 在 Windows 平台的功能严重受限。

### 5. [#37104](https://github.com/openai/codex/issues/37104) — Windows/WSL 集成终端静默失败（23 评论）
PTY/WSL 启动前终端就静默退出，底栏与侧栏均无法打开，标注为 `Papercuts 2026` 项目。

### 6. [#34227](https://github.com/openai/codex/issues/34227) — Windows Pet 覆盖层命中区域与可见 mascot 偏移（20 评论）
Pet 功能体验问题持续累积，运行时间越长偏移越大。

### 7. [#33192](https://github.com/openai/codex/issues/33192) — Windows 10 DWM Composition 句柄累积（15 评论）
包含工具调用的 Codex 任务会导致 DWM `Composition` 句柄持续增长，存在潜在资源泄漏。

### 8. [#40611](https://github.com/openai/codex/issues/40611) — 启用 Advanced Account Security 后陷入登录循环（12 评论）
为保留 Daybreak Blue 访问权限而开启高安全级别后，App 完全不可用，影响付费用户。

### 9. [#40002](https://github.com/openai/codex/issues/40002) — Android Remote 大小写敏感路径校验失败（11 评论）
跨平台路径处理缺陷导致可信 Windows 项目验证失败。

### 10. [#35050 / #39903 之外最高优先级补充]
- [#41059](https://github.com/openai/codex/issues/41059)（15 评论）— Windows 26.820.9563.0 Desktop headless
- [#41450](https://github.com/openai/codex/issues/41450)（3 评论）— 一条 AGENTS.md 规则降低 81.6% token

后者作为今日新增议题尤为亮眼：用户给出了**零补丁即时缓解方案**，并提供可复现的 token 放大测试，是 35050 性能话题的强有力佐证。

---

## 四、重要 PR 进展（Top 10）

| PR | 主题 | 影响 |
|---|---|---|
| [#41467](https://github.com/openai/codex/pull/41467) | TUI 模型选择器从 app-server 异步刷新 | 修复启动目录与当前账号可用模型不一致的过期缓存 |
| [#41464](https://github.com/openai/codex/pull/41464) | 更新会话元数据时保留权限 | 避免会话元数据更新触发不必要的沙箱路径重投影 |
| [#41461](https://github.com/openai/codex/pull/41461) | `send_user_message_async` 描述从模型目录派生 | 支持中段切换模型后的描述一致性 |
| [#41457](https://github.com/openai/codex/pull/41457) | Ultra 推理使用目录中的 proactive 多代理指令 | 多代理协同模式更具一致性 |
| [#41456](https://github.com/openai/codex/pull/41456) | 执行器插件 hook 支持 app 目标 | 允许 Browser/Computer Use 插件的 `Stop`/`SubagentStop` hook |
| [#41454](https://github.com/openai/codex/pull/41454) | 同一目标连续三次 exec 失败后阻断 | 防止执行主机故障导致无限失败循环 |
| [#41452](https://github.com/openai/codex/pull/41452) | 上报 code-mode host 请求时长 | 精细化的代码模式耗时埋点（剔除客户端空闲时间） |
| [#41448](https://github.com/openai/codex/pull/41448) | 澄清 Default 协作模式的问题处理 | 允许 `request_user_input` 用于提升产出质量的可选问题 |
| [#41447](https://github.com/openai/codex/pull/41447) | 支持 `openai/elicitation` 表单请求 | 新版 MCP elicitation 协议实现 |
| [#41421](https://github.com/openai/codex/pull/41421) | MCP 工具级 `output_token_limit` | 单工具粒度的输出限制，避免淹没上下文 |

辅助补充：#41416（app-server 通知媒体过滤）、#41413（历史项查找优化）、#41436（PTY 子进程终端查询响应）、#41427（函数调用输出通知剥离媒体）均面向稳定性与性能。

---

## 五、功能需求趋势

从 50 条 Issues 提炼出社区最关注的方向：

1. **Windows 桌面端稳定性（占比 ~50%）**
   涵盖 DWM 句柄泄漏、Pet 覆盖层、WSL 集成终端、Chrome 原生主机、Computer Use 等。Windows 已成为 Codex 桌面端的**主要矛盾来源**。

2. **Computer Use / 浏览器自动化**
   跨平台 Chrome 控制几乎处于"半残"状态：URL 检测、native host 版本校验、点击崩溃、SIGTRAP 形成完整故障链。

3. **Token 效率与性能**
   GPT-5.6 串行化调用（35050）、AGENTS.md 减少 81.6% token（41450）、历史项查找优化（41413）。**性能/成本问题正从"抱怨"转为"可量化证据"**。

4. **MCP 生态扩展**
   openai/elicitation 表单支持、per-tool output_token_limit、allowlist 执行器 hook —— 团队正在快速补齐 MCP 周边能力。

5. **多代理 / Goal 系统**
   executor plugin hook 体系扩张、连续失败阻断、proactive 指令目录化 —— 多代理执行框架正逐步成熟。

6. **远程控制与跨设备**
   Android Remote 路径校验、app-server WebSocket 重置 —— 远程体验尚未稳定。

7. **本地模型 / 自定义后端**
   Ollama 非 localhost 支持已关闭（#8240），SSH Executor 仍是未实现的功能请求（#9923）。

---

## 六、开发者关注点（痛点与高频需求）

- **🔴 Windows 是首要痛点**：从 26.715 到 26.825 的多个 build 中持续出现崩溃、无 GUI、句柄泄漏、Pet 渲染异常等，开发者要求建立 **Windows 专项回归测试**的呼声强烈。
- **🟡 可观测性与审计性**："Ran N commands" 折叠问题（#39903）表明开发者希望**完整看到模型执行了哪些命令**，而非仅看结果摘要。
- **🟡 Token 成本可解释性**：35050 + 41450 让"加权使用量放大"成为公开议题，社区期待 Codex 给出**官方批量调用建议**或在模型侧做并行调度。
- **🟢 MCP 协议深化**：openai/elicitation、output_token_limit、plugin hook 都是开发者最直接的"工具集成诉求"。
- **🟢 自托管路径**：Ollama + SSH Executor 仍是长期呼声，反映出部分用户希望 Codex 不被锁定在 OpenAI 账号体系内。
- **🟢 账户安全与认证**：Advanced Account Security 触发的登录循环（#40611）说明安全策略与桌面端集成尚未打通。

---

> **数据来源**：[github.com/openai/codex](https://github.com/openai/codex) Issues / Pull Requests / Releases（采样时间窗口：2026-08-28 ~ 2026-08-29）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-08-29**
**数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## 一、今日速览

今日 Gemini CLI 发布 nightly 版本 `v0.59.0-nightly.20260829`，核心修复聚焦于**受限模式下的工作区信任机制**与 **MCP 服务器过滤**，强化了 fail-closed 安全语义。社区议题仍高度关注 **Subagent 行为可靠性**、**Auto Memory 系统质量**与 **Browser Agent 稳定性**，多个长期 P1 Bug 持续滚动；与此同时，PR 端密集落地**安全加固**（Windows ACL、OAuth IdP 防混淆、NTFS 8.3 短路径、SSE 流解析）和**配置/MCP 健壮性**改进。

---

## 二、版本发布

### 🚀 v0.59.0-nightly.20260829.g0bd1d4397

- **核心变更**：修复 `gemini-cli-a2a-server` 在 untrusted/restricted 环境下的 fail-closed 工作区信任判定，并过滤仓库级 `mcpServers`，防止启动期意外进程执行。
- **贡献者**：[@luisfelipe-alt](https://github.com/luisfelipe-alt) — [PR #29099](https://github.com/google-gemini/gemini-cli/pull/29099)
- **变更范围**：[Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.59.0-nightly.20260828.g3c311beac...v0.59.0-nightly.20260829.g0bd1d4397)

---

## 三、社区热点 Issues

以下按评论活跃度与影响面精选 10 条，反映当前最迫切的需求与困扰。

| # | Issue | 主题 | 评论 | 重要性 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **Subagent 在 MAX_TURNS 后仍报告 GOAL success**，掩盖中断事实 | 13 | P1 Bug，影响子代理可观测性与错误处理链路 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **Generalist agent 永久挂起**，甚至创建文件夹这类简单操作也会卡死 | 8 | P1 Bug，需强制不用 sub-agent 才可绕过，社区高赞（👍8） |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **零依赖 OS 沙箱 + 事后意图路由**，让 Gemini 3 模型原生 bash 能力发挥同时保障安全 | 8 | P2 增强提案，呼应模型"bash-native"训练特性 |
| 4 | [#28004](https://github.com/google-gemini/gemini-cli/issues/28004) | **shell 工具完成后重复回传 tool result**，与确定性 Gemini-compatible provider 相关 | 7 | P2 Bug，影响兼容提供商生态 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **AST-aware 文件读取/搜索/映射**对子代理工具效率的评估 EPIC | 7 | P2 调研类 EPIC，潜在降低 token 噪声与回合数 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **Gemini 不会主动调用 skills / sub-agents**，需用户显式指令 | 6 | P2 Bug，制约 skills/sub-agents 实际落地效果 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **Auto Memory 对低信号 session 无限重试** | 5 | P2 Bug，涉及记忆系统效率 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **shell 命令完成后卡在 "Waiting input"** | 4 | P1 Bug，常见于简单 CLI 命令（👍3） |
| 9 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **browser_agent 需自动接管/锁恢复**，避免 persistent 模式"fail-fast" | 4 | P3 增强，提升浏览器子代理鲁棒性 |
| 10 | [#29122](https://github.com/google-gemini/gemini-cli/issues/29122) | **`hooks migrate` 错误复制 Claude `timeout`（秒→毫秒单位错换）** | 1 | P2 Bug，跨工具迁移兼容性陷阱 |

**其他活跃议题**：`#26525` Auto Memory 日志与确定性脱敏、`#21983` browser subagent 在 Wayland 失败、`#20079` `~/.gemini/agents/*.md` 软链不被识别为子代理、`#24246` 工具数超 400 触发 400 错误（标题与正文存在歧义，社区反复澄清）。

---

## 四、重要 PR 进展

| # | PR | 类型 | 内容 |
|---|---|---|---|
| 1 | [#29115](https://github.com/google-gemini/gemini-cli/pull/29115) | 🔒 安全 | **修复 Windows/POSIX 系统级配置的不安全加载**：Windows 使用 PowerShell 进行 ACL 校验，防止本地提权与跨用户命令执行 |
| 2 | [#29117](https://github.com/google-gemini/gemini-cli/pull/29117) | 🔒 安全 | **OAuth IdP mix-up 防护**：实现 RFC 9207 `iss` 参数校验，防止 token 泄漏到错误 IdP |
| 3 | [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | 🔒 安全 | **NTFS 8.3 短文件名（SFN）路径遍历缓解**：在 `AllowedPathChecker` 路径归一化中识别 `git~1`、`vscode~1` 等短名 |
| 4 | [#29120](https://github.com/google-gemini/gemini-cli/pull/29120) | 🛡 加固 | **WebFetch 目标地址校验与连接路由**：异步 DNS 解析 + Undici 传输连接器直接绑定解析地址，保留 TLS |
| 5 | [#28971](https://github.com/google-gemini/gemini-cli/pull/28971) | 🐛 修复 | **MCP 工具名截断后保持唯一性**：原 `前30+后30` 截断策略非单射，导致同名冲突；现 `ToolRegistry.registerTool` 保证唯一 |
| 6 | [#29099](https://github.com/google-gemini/gemini-cli/pull/29099) ✅ 已合入 | 🔒 安全 | **fail-closed workspace trust + 受限模式 mcpServers 过滤**（今日 nightly 主体变更） |
| 7 | [#29106](https://github.com/google-gemini/gemini-cli/pull/29106) | 🐛 修复 | **SSE 解析器 EOF 时补发最终事件**：原 `CodeAssistServer.requestStreamingPost()` 在无末尾空行时静默丢弃 `finishReason`/usage |
| 8 | [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | 🐛 修复 | **shellExecutionService 防 `handleExit` 重入**：Node.js spawn 失败时 `error` 与 `close` 事件串行触发，现加 re-entrancy 守护 |
| 9 | [#29118](https://github.com/google-gemini/gemini-cli/pull/29118) | 🐛 修复 | **GitHub 扩展仓库解析**：仅剥离尾部 `.git`，避免误伤 `blog.github.io` 这类含 `.git` 的合法仓库名 |
| 10 | [#29121](https://github.com/google-gemini/gemini-cli/pull/29121) | 🤖 自动化 | **nightly 版本 bump（0.59.0-nightly.20260829.g0bd1d4397）**，由 `gemini-cli-robot` 自动发起 |

---

## 五、功能需求趋势

从 Issues 与 PR 整体走向看，社区关注点呈现以下几条主线：

1. **🔒 安全与隔离加固（热度最高）**
   - 工作区 trust fail-closed（[#29099](https://github.com/google-gemini/gemini-cli/pull/29099)）
   - 系统级配置 ACL 校验（[#29115](https://github.com/google-gemini/gemini-cli/pull/29115)）
   - OAuth RFC 9207 `iss` 校验（[#29117](https://github.com/google-gemini/gemini-cli/pull/29117)）
   - NTFS 8.3 短名路径防御（[#29116](https://github.com/google-gemini/gemini-cli/pull/29116)）
   - Web fetch DNS 绑定（[#29120](https://github.com/google-gemini/gemini-cli/pull/29120)）
   - 零依赖 OS 级沙箱 + 事后意图路由（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）

2. **🧠 Auto Memory 系统质量**
   - 低信号 session 重试机制（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)）
   - 确定性脱敏与日志削减（[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   - 非法 inbox patch 的隔离（[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)）
   - 综合追踪（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)）

3. **🤖 Subagent 行为与可观测性**
   - MAX_TURNS 错误遮蔽（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
   - subagent 主动调用不足（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）
   - bug 报告缺失子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
   - `/chat share` 中可见 subagent trajectory（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - 本地 subagent Sprint 1（[#20195](https://github.com/google-gemini/gemini-cli/issues/20195)）

4. **🌐 Browser Agent 稳定性**
   - Wayland 失败（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
   - `settings.json` 覆盖被忽略（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）
   - 会话自动接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）

5. **⚙️ 工具与上下文效率**
   - 工具数量上限（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）
   - AST-aware 文件读取/搜索/映射调研（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)）
   - MCP 工具命名冲突（[#28971](https://github.com/google-gemini/gemini-cli/pull/28971)）

6. **🖥 终端体验**
   - shell 卡死（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)、[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）
   - `\n` 转义处理（[#22466](https://github.com/google-gemini/gemini-cli/issues/22466)）
   - 终端 resize 高性能无闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）

---

## 六、开发者关注点

综合 Issue 摘要与社区反馈，开发者的核心痛点集中于以下方向：

1. **Subagent 不可靠** — 无论是 generalist agent 的无限挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）还是 MAX_TURNS 后的状态误报（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)），都让开发者必须显式绕过子代理，削弱了 CLI 自动化价值。

2. **技能/子代理调用惰性** — 多数自定义 skills 与 sub-agents 需要用户在 prompt 中显式触发（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），缺乏自我触发与上下文路由，影响 productivity。

3. **安全相关一次性问题密集** — 一次性 PR 显示本周期安全团队驱动了系统性加固（ACL、OAuth、NTFS、SFN、SSE、WebFetch），反映企业用户对供应链与本地提权风险关注上升。

4. **Auto Memory 信号噪声比差** — 低信号会话反复触发、确定性脱敏缺失、非法 patch 静默丢弃（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)），长期记忆"漏斗"亟待收敛。

5. **跨工具迁移的隐式约定差异** — `hooks migrate` 中 Claude Code `timeout` 单位错换（[#29122](https://github.com/google-gemini/gemini-cli/issues/29122)）提醒迁移工具需显式声明语义差异。

6. **可观测性缺口** — `/bug` 不携带 subagent 上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）、`/chat share` 未暴露 subagent trajectory（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)），诊断与回归成本偏高。

7. **"bash-native" 模型未被充分利用** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 指出 Gemini 3 训练偏 POSIX 工具链，需 OS 沙箱+意图路由才能安全释放；[#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 反向印证模型在受限下乱写临时脚本，导致工作区污染。

---

> 📌 **建议关注**：若你正在跟进 Gemini CLI，应重点跟踪 **Auto Memory 系统收敛**、**Subagent 错误传播链修复**以及 **零依赖 OS 沙箱** 三个方向——它们直接关系到 CLI 在企业场景中的可信部署与日常使用流畅度。

*日报由社区数据自动聚合生成，所有数据点均可通过上述 GitHub 链接溯源。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-29**

---

## 📌 今日速览

今日 Copilot CLI 发布 **v1.0.82-1** 版本，修复了认证失败时仅提示 `/login` 而不展示具体错误码（如 401）的问题，社区反馈积极。Issues 方面，**#4612（FileWatch 失控循环导致 13GB 日志和 TUI 卡死）** 和 **#4533（并行子代理下 TUI 事件丢失）** 成为最受关注的性能/稳定性问题；多项 1.0.81 引入的回归问题集中暴露，涉及 chroma-mcp 兼容、Windows 沙箱、Enterprise 模型列表 URL 等。

---

## 🚀 版本发布

### v1.0.82-1
- **修复**：认证失败时直接显示具体的错误信息（如 `401 Bad credentials`），而不是仅抛出模糊的 `/login` 提示
- 🔗 [Release 详情](https://github.com/github/copilot-cli/issues?q=label%3Arelease%3Av1.0.82-1)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#4612](https://github.com/github/copilot-cli/issues/4612) — FileWatch 失控循环致 TUI 冻结 + 13GB 调试日志 ⛔
**严重级别：极高**  
长会话恢复后进入 `No connection accepted a host event {"kind":"FileWatch"}` 的紧密循环，Rust 运行时持续刷写调试日志至 13GB，终端 UI 完全失去响应。属于阻塞级稳定性故障，已被官方标记 triage。👍 1 | 💬 7

### 2. [#4480](https://github.com/github/copilot-cli/issues/4480) — Atlassian MCP OAuth 在 1.0.79 起的回归 ✅ 已关闭
1.0.79 之后连接 `https://mcp.atlassian.com/v1/mcp` 在 OAuth discovery 阶段失败，提示 `Incompatible authorization server (RFC 8414 §3.3)`。属于明确回归（1.0.71 可用），社区反应热烈。👍 6 | 💬 7

### 3. [#4527](https://github.com/github/copilot-cli/issues/4527) — GHEC 数据驻留租户下 `copilot -p` 触发 401
**企业级严重问题**  
带数据驻留的 GHEC（`<tenant>.ghe.com`）租户中，非交互模式（`copilot -p`）启动即失败，但交互模式正常。根因是提示模式获取 model-catalog 时调用了 `api.githubcopilot.com` 而非租户端点。👍 4 |  2

### 4. [#4533](https://github.com/github/copilot-cli/issues/4533) — 并行子代理启动后 TUI 失去事件响应
在 prerelease `1.0.81-4/5` 中，当一轮触发并行 subagent 块时，终端 UI 立刻停摆（输入与滚动均死），但 Rust 运行时仍在持续发起模型调用。这是 #4612 之外的另一类 TUI 解耦故障。💬 4

### 5. [#4165](https://github.com/github/copilot-cli/issues/4165) — Windows 上 `copilot --resume` 冷启动卡死
直接从 PowerShell 运行 `--resume` 时，TUI 始终停在 `Resuming session...`；但先启动一次再恢复可绕过。属于平台特定的会话恢复路径缺陷。💬 5

### 6. [#1392](https://github.com/github/copilot-cli/issues/1392) — LSP 服务器缺少可配置的 `initializeTimeout` ⭐
大型 C# 解决方案下，OmniSharp LSP 在默认超时内无法完成初始化，每次都报错。LSP 配置需新增 `initializeTimeout` 字段。长期未解决但社区呼声高。👍 5 | 💬 3

### 7. [#2930](https://github.com/github/copilot-cli/issues/2930) — 功能请求：本地自动记忆（Agent 主动写入，无远端存储）⭐
企业出于合规禁用 Copilot Memory 后，CLI 失去任何知识积累手段。该提案要求 Agent 可主动将本地笔记写入本地存储，作为远端 Memory 的替代/补充。👍 3 | 💬 2

### 8. [#4614](https://github.com/github/copilot-cli/issues/4614) — macOS MallocStackLogging 警告在 v1.0.80 仍然存在
每次子进程启动都打出 `MallocStackLogging: can't turn off malloc stack logging because it was not enabled.` 的诊断噪音，影响体验。👍 3 | 💬 1

### 9. [#4647](https://github.com/github/copilot-cli/issues/4647) — v1.0.81 与 chroma-mcp 兼容性破坏 🔥
升级到 1.0.81 后 chroma-mcp 完全无法连接。该问题与 #4649（tool search 行为异常）一起，表明 1.0.81 在 MCP 协议路径上存在较大改动但回归测试不足。

### 10. [#4649](https://github.com/github/copilot-cli/issues/4649) — Tool search 在 Grok/Gemini 上行为异常（#4588 后续）
GPT 在 #4588 修复后从 43.1k → 21.0k token，但 Grok 仍报"已启用"却未真正 defer（57.7k vs 21.0k），Gemini 始终未启用 tool search。两个模型家族各有不同的 bug 模式，反映 provider 适配层覆盖不全。

---

## 🛠️ 重要 PR 进展

> 注：过去 24 小时内仅 1 条 PR 更新，且与 CLI 核心功能无直接关联：

### [#4497](https://github.com/github/copilot-cli/pull/4497) — Trusted invalid-label writer 处理 fork PR 关联 ✅ 已关闭
更新 trusted invalid-label writer 的 fork PR workflow run 处理逻辑：当 GitHub 未填充 run 的 PR 关联时，通过 trusted workflow-run 元数据搜索并要求匹配唯一开启的 PR。该 PR 已合并关闭，属于内部自动化管道的健壮性改进。

📭 *若需更早的 PR 进展，建议在 GitHub 上按 `is:pr updated:>2026-08-28` 过滤。*

---

## 📈 功能需求趋势

从过去 24 小时的 Issues 提炼出社区最关注的方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **MCP 协议稳定性** | #4480, #4647, #4650, #4189 | 🔥🔥🔥🔥🔥 |
| **Windows 平台兼容性** | #4165, #4652, #4653, #4648 | 🔥🔥🔥🔥 |
| **企业/Enterprise 支持** | #4527, #4654, #4650 | 🔥🔥🔥🔥 |
| **本地化与离线能力** | #2930, #3904 | 🔥🔥🔥 |
| **模型路由与 BYOK** | #4651, #4649, #4645 | 🔥🔥🔥 |
| **LSP/工具链配置** | #1392 | 🔥🔥 |
| **Agent 扩展性（Plugins）** | #4655, #4640 | 🔥🔥 |
| **认证错误可观测性** | v1.0.82-1 已修复 | 🔥 |

**最显著趋势**：**MCP 协议栈在多个版本迭代中累积了大量回归**，1.0.81 似乎是关键转折点；同时 **Windows 平台的多项局部缺陷**（resume 挂死、AltGr 输入丢失、25H2 沙箱警告、低对比度输入框）正在集中暴露，可能预示一次平台专项修复。

---

## 💬 开发者关注点

1. **认证失败的"无声"体验**是开发者的最大痛点之一 —— 多条 Issue（#4527、#4650、#4654、#4657）都指向"看不到为什么 401/403"。v1.0.82-1 的修复方向正确，社区希望这一改动扩展到 Enterprise / `--agent` / `--delegate` 等更多场景。

2. **回归测试覆盖不足**：v1.0.81 一日内集中爆发 chroma-mcp 不兼容、Enterprise 模型列表 URL 错误、tool search 行为变化等多个回归，社区担忧 prerelease 通道的验证不够全面。

3. **TUI 与运行时的解耦问题反复出现**：#4612 与 #4533 都呈现"运行时仍在工作但 UI 已死"的模式，说明终端渲染层与事件循环之间的解耦存在系统性问题。

4. **企业合规诉求持续增长**：数据驻留（#4527）、企业 MCP 策略（#4650）、本地记忆（#2930）显示，越来越多团队在将 Copilot CLI 推向生产环境，对隔离性与可控性的要求显著上升。

5. **键盘/输入层细节缺失**：AltGr 吞键（#4653）、低对比度渲染（#4648）反映 CLI 在国际化与无障碍方面仍有大量边缘场景未覆盖。

6. **Agent Plugins 1.0 生态尚在磨合**：#4655 显示开发者对官方 Agent Plugins 规范与 Copilot CLI 实际发现路径之间的预期存在偏差，规范文档需同步更新。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 采集窗口：过去 24 小时（截至 2026-08-29）*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-08-29**
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

今日社区动态以**安全议题为主线**：一个高危安全问题（#2625）已迅速关闭并修复，同时一个依赖安全更新 PR（#2622）正在推进。另有两条用户反馈聚焦于**配额计费异常**（#2626）和**第三方 LLM 提供商配置文档缺失**（#2624），反映出付费用户在计费透明度与异构模型接入方面的实际痛点。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅 3 条 Issue 更新，以下为全部值得关注的内容。

### 1. [#2625 - Security: MCP 工具调用绕过内置敏感文件保护（已关闭）](https://github.com/MoonshotAI/kimi-cli/issues/2625)
- **状态**：CLOSED · 👍 0 · 💬 1
- **重要程度**：⭐⭐⭐⭐⭐
- **核心内容**：内置 `Read` 工具拒绝读取 `.env`、SSH 私钥、凭据存储等敏感文件，但 **MCP 工具调用不受该内容级防护**，且在 auto-approve 模式下还会跳过审批提示。攻击者可借助接受文件路径参数的 MCP 服务器读取任意文件。
- **社区反应**：发布当日即关闭，说明 Moonshot 安全响应链路高效；此为典型的"安全护栏旁路"（security guardrail bypass），对依赖 MCP 集成的用户影响显著。

### 2. [#2626 - 配额消耗异常：cache_read 每轮计费且 cache_creation 始终为 0（>10倍放大）](https://github.com/MoonshotAI/kimi-cli/issues/2626)
- **状态**：OPEN · 👍 0 · 💬 0
- **重要程度**：⭐⭐⭐⭐⭐
- **核心内容**：年付订阅用户报告 5 小时配额窗口在轻量使用下几分钟内消耗约 40%。日志显示 `cache_read` 每轮都计入消耗，而 `cache_creation` 始终为 0，推测存在>10 倍的计费放大问题。
- **社区反应**：0 评论，但作为付费用户核心权益问题，预期将引发后续讨论。涉及配额计量逻辑的可信度，对所有订阅用户至关重要。

### 3. [#2624 - docs: openai_legacy hosted /v1 示例文档（区别于 openai_responses 与 /login）](https://github.com/MoonshotAI/kimi-cli/issues/2624)
- **状态**：OPEN · 👍 0 · 💬 0
- **重要程度**：⭐⭐⭐
- **核心内容**：用户指出现有 `providers.md` 中 `openai_legacy`（Chat Completions 兼容）的描述存在三个易错点：`type` 必须为 `openai_legacy` 而非 `openai_responses`；针对 hosted `/v1` 的正确配置示例缺失；与 `/login` OAuth 流程的差异未说明。
- **社区反应**：由 cursor[bot] 自动提交，指向文档可用性问题。反映了第三方/自托管提供商的接入门槛。

---

## 🔧 重要 PR 进展

> 注：过去 24 小时仅 1 条 PR 更新。

### 1. [#2622 - deps: 将 pykaos 中的 asyncssh 升级至 2.23.1（修复 GHSA-2wxc-x7rj-hg8f）](https://github.com/MoonshotAI/kimi-cli/pull/2622)
- **状态**：OPEN · 👍 0
- **核心内容**：`packages/kaos/pyproject.toml` 中将 `asyncssh` 从 2.21.1 升级到 2.23.1，同步更新 `uv.lock`，修复 OSV 报告的 GHSA-2wxc-x7rj-hg8f 与 GHSA-qr67-gv47-xwwh 两个已知漏洞。
- **意义**：体现项目对供应链安全的主动管理，建议优先 review 合并。

---

## 📈 功能需求趋势

从今日 Issue 分布提炼以下方向（数据样本有限，仅供参考）：

| 趋势方向 | 代表 Issue | 说明 |
|---------|-----------|------|
| **安全与权限模型** | #2625, #2622 | MCP 旁路、依赖 CVE——安全护栏需覆盖到所有工具调用路径 |
| **计费/配额透明度** | #2626 | 缓存命中率与配额消耗的对应关系需要可观测、可审计 |
| **多提供商互操作** | #2624 | OpenAI Chat Completions/Responses/OAuth 三类端点的明确文档指引 |

---

## 👨‍💻 开发者关注点

1. **MCP 生态的安全边界**：随着 MCP 服务器成为扩展主流，"工具沙箱" 必须从内置工具延伸至第三方工具，统一执行同一套敏感路径与审批策略。
2. **缓存与计费可观测性**：付费用户对 `cache_read` / `cache_creation` 比例异常高度敏感——任何不透明或反直觉的配额消耗都会快速演变为信任问题。
3. **文档与配置陷阱**：`openai_legacy` vs `openai_responses` vs `/login` 三种模型接入路径并存，文档需要提供清晰的选型矩阵，避免用户在错误模式下调试耗时。
4. **依赖卫生**：社区已出现自发提交的安全 PR（#2622），表明项目通过外部贡献也能维持供应链健康度，建议继续保持 Dependabot/手动巡检节奏。

---

*日报由 AI 分析师自动生成 · 数据时间窗口：2026-08-28 ~ 2026-08-29*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-08-29

## 一、今日速览

今日 OpenCode 发布了 **v1.18.25**，修复了 Azure CLI 登录不再依赖 Bun 的认证链路问题；社区热点集中在 **性能与稳定性**——GPT 系列响应缓慢、所有模型偶发性卡死、Desktop 1.17.11 引发的 GUI/会话数据丢失仍被广泛讨论。**Linux 剪贴板 PRIMARY 选区**的支持成为今日 PR 协同攻关的焦点，三个相关 PR (#6370 / #32370 / #44938) 已基本收敛方案。

---

## 二、版本发布

### v1.18.25 — 已发布

- **Core · Bugfix**：Azure CLI 登录流程不再强依赖 Bun，可通过任意运行时完成身份验证。
- 对长期使用 Azure OpenAI 的企业用户/代理/VPN 场景友好，降低部署前置条件。

---

## 三、社区热点 Issues

| # | Issue | 状态 | 关注度 | 要点 |
|---|-------|------|--------|------|
| [#29079](https://github.com/anomalyco/opencode/issues/29079) | GPT Models takes too long to respond | **CLOSED** | 💬119 👍52 | 社区最热单：GPT-5.x 简单 prompt 偶发分钟级响应，已关闭说明已合并修复。 |
| [#5750](https://github.com/anomalyco/opencode/issues/5750) | Tool use id bug | **CLOSED** | 💬14 👍3 | 多图上传触发工具调用 ID 冲突，已长期跟进的稳定性问题终于关闭。 |
| [#42700](https://github.com/anomalyco/opencode/issues/42700) | TUI 每次启动泄露 ~21MB .so | **OPEN** | 💬7 | Arch Linux tmpfs 用户会被耗尽，TUI 后续启动失败，目前仍未合并修复方案。 |
| [#22792](https://github.com/anomalyco/opencode/issues/22792) | vLLM + Qwen3-Coder 陷入压缩循环 | **CLOSED** | 💬6 👍3 | 本地 vLLM 兼容层下，模型反复输出压缩摘要，反映 OpenAI-compatible 协议的差异兼容难。 |
| [#29397](https://github.com/anomalyco/opencode/issues/29397) | Zen 全面变慢 + Esc 不可中断 | **CLOSED** | 💬6 👍7 | Zen 路由近全线模型受影响，中断机制失效，社区一度恐慌。 |
| [#23461](https://github.com/anomalyco/opencode/issues/23461) | `opencode upgrade` 403 / 不读 `GITHUB_TOKEN` | **OPEN** | 💬5 👍2 | 代理/VPN 环境下升级失败，匿名请求触发 GitHub API 速率限制。 |
| [#17427](https://github.com/anomalyco/opencode/issues/17427) | Workspace 删除脚本能力 | **CLOSED** | 💬5 👍1 | 数据库型 Web 项目希望 workspace 关闭时自动清理测试库。 |
| [#34223](https://github.com/anomalyco/opencode/issues/34223) | Web UI 文件树开关被 `desktop()` 门控隐藏 | **CLOSED** | 💬5 | 浏览器模式下设置入口缺失，Web 与 Desktop 配置未解耦。 |
| [#15680](https://github.com/anomalyco/opencode/issues/15680) | 向插件暴露 worktree 生命周期事件 | **CLOSED** | 💬4 👍3 | 插件生态期望感知 worktree 创建/删除/重置，是生态扩展的关键能力。 |
| [#46088](https://github.com/anomalyco/opencode/issues/46088) | 自部署模型新会话偶发 ECONNRESET | **OPEN** | 💬3 | 200K 上下文远未用尽仍断流，疑似客户端长连接管理问题，今日新增。 |

> 此外，**#34402（一次 prompt 消耗 21 美元无输出）**、**#34426 / #34471（Desktop 1.17.11 GUI 破损 + 会话数据丢失）**、**#34445（更新导致 `~/.local/share/opencode` 被重建、历史迁移丢失）** 共同揭示了 1.17.11 升级窗口期的稳定性事故。

---

## 四、重要 PR 进展

| PR | 状态 | 说明 |
|----|------|------|
| [#46086](https://github.com/anomalyco/opencode/pull/46086) `feat(infra): deploy beta web app with SST` | CLOSED | 通过 SST 与现有 `deploy` workflow 发布 `beta.opencode.ai`，按 `v2` promote 触发。 |
| [#46090](https://github.com/anomalyco/opencode/pull/46090) `fix(app): preserve Windows panel top outlines` | CLOSED | 为 Windows 内容面板顶部预留 1 CSS px，避免外描边被裁切。 |
| [#32370](https://github.com/anomalyco/opencode/pull/32370) `feat(tui): linux_clipboard_selection config` | OPEN | 在 #6370 基础上扩展 primary/both 模式 + primary-read + wl-copy MIME 修复，三方 PR 已收敛。 |
| [#44938](https://github.com/anomalyco/opencode/pull/44938) `paste primary selection on middle click` | CLOSED | 终端中键粘贴 PRIMARY 选区，wl-paste → xclip → xsel 兜底链。 |
| [#6370](https://github.com/anomalyco/opencode/pull/6370) `enable primary clipboard copy for Wayland/X11` | OPEN | 增加 `clipboard.linux.enablePrimaryCopy`，默认行为不变。 |
| [#46085](https://github.com/anomalyco/opencode/pull/46085) `fix(shell): bound Windows post-exit pipe draining` | OPEN | 修复 Windows 下 `bunx agent-browser` 子进程持有 stdout/stderr 导致 shell 不退出。 |
| [#46087](https://github.com/anomalyco/opencode/pull/46087) `fix(core): bound consumed job history` | OPEN | Job 注册表历史上限 100 条 / 16 MiB，按完成顺序淘汰，避免内存累积。 |
| [#46084](https://github.com/anomalyco/opencode/pull/46084) `fix(ai): isolate response tool call identities` | OPEN | Open Responses function call 外部 `call_id` 稳定后，避免 item ID / 输出索引冲突造成的参数丢失。 |
| [#36068](https://github.com/anomalyco/opencode/pull/36068) `accept Ollama reasoning field in OpenAI Chat deltas` | CLOSED | Ollama 输出推理字段为 `reasoning` 而非 `reasoning_content`，Effect Schema 静默丢弃修复。 |
| [#46089](https://github.com/anomalyco/opencode/pull/46089) `refactor(util): make layer graphs opaque and composable` | OPEN | LayerNode 集合式覆写 API 抹去源-替换关系，重构为不可透传、可组合的图层图。 |

> 备注：kitlangton 在 #46072/#46076/#46077/#46078/#46079/#46080/#46081/#46082/#46083 连续提交了一批面向 codemode、core、tui 的小幅 refactor 与鲁棒性加固（避免 Object.assign 循环、复用 BOM-stripped 文本、复用 Markdown 字节计数等），整体提升了内核稳定性。

---

## 五、功能需求趋势

1. **Linux/Wayland 桌面体验**：PR #6370、#32370、#44938 协同推进 PRIMARY 选区中键粘贴，反映 Linux TUI 用户长期被忽略的体验缺口。
2. **插件与扩展生态**：
   - worktree 生命周期事件（#15680）已落地；
   - 项目级 `opencode.json` 中显式配置 MCP server（#30933）；
   - per-agent compaction 控制（#34510）希望精细化。
3. **本地/自部署模型兼容**：vLLM + Qwen3-Coder（#22792）、Ollama 推理字段（#36068）、NVIDIA 模型（#46046）、自部署 ECONNRESET（#46088）——社区正在以"小修复 PR"逐个补齐 provider 兼容面。
4. **升级与数据迁移安全**：1.17.11 之后多个 issue（#34445 / #34471 / #34426）暴露 SQLite 迁移路径不健壮，**升级可靠性和数据保全**成为下一阶段用户最敏感的诉求。
5. **Web/Desktop 配置解耦**（#34223）：浏览器用户被 `desktop()` 门控阻挡，需要"桌面优先"以外的体验路径。

---

## 六、开发者关注点

- **性能与中断**：GPT 慢响应（#29079）、Zen 全模型变慢（#29397）、Esc 不可中断——生产可用性的头号痛点。
- **账单异常**：#34402（一次提示 21 美元无输出）触发信任危机，社区希望补充 prompt 成本预估与硬性上限。
- **升级事故**：1.17.11 引入的 SQLite 迁移在多个用户场景下导致历史会话消失（#34445 / #34471），期望出现**带 dry-run 的迁移工具与回滚机制**。
- **Desktop 稳定性**：GUI 渲染线程同步 diff 解析卡顿（#34437）、Solid.js 信号循环挂起（#34421）、大 diff 冻结（#34437）——Electron 渲染线程与计算密集任务解耦是当务之急。
- **TUI 资源管理**：#42700 揭示 `/tmp` 资源回收缺位，#38366 多实例并发崩溃（macOS arm64 + Bun segfault）指向运行时层稳定性。
- **隐藏文件 @mention 能力**：#33976 反馈 `.agents/` 等隐藏文件无法被提及，影响自定义 skill 的引用体验。

---

> **数据范围**：以上仅基于过去 24 小时内有更新的 Issue/PR 标题与摘要。要深入跟踪单条 issue / PR，请点击对应 GitHub 链接。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-29

## 📌 今日速览

今日社区发布了 **v0.84.4** 新版本，带来终端能力覆盖与扩展 UI 事件两大新特性。同时，#6879 auto-compaction 失效这一长期高关注问题（24 评论、20 👍）已通过 PR #8782 修复并关闭，标志着 compaction 流程稳定性迈上新台阶。开发者讨论热点集中在 **TUI 渲染健壮性**（窄终端、Kitty 协议、macOS Terminal.app 崩溃）与 **扩展 API 增强**（provider 注册时机、模型运行时暴露、UI 对话框事件）两大方向。

---

##  版本发布

### v0.84.4（2026-08-29）

**新特性：**
- **Terminal capability overrides**：允许用户手动覆盖检测到的终端超链接、图像和真彩色（truecolor）支持。详见 [Capability Overrides 文档](https://github.com/earendil-works/pi/blob/v0.84.4/packages/coding-agent/docs/terminal-setup.md#capability-overrides)
- **Extension UI prompt events**：新增扩展侧的 UI 提示事件，便于扩展拦截和处理用户交互

⚠️ 注意事项：v0.84.4 在 80–88 列的窄终端上存在启动崩溃问题（[#8806](https://github.com/earendil-works/pi/issues/8806)），相关修复已在 PR #8805 中并入。

---

##  社区热点 Issues（Top 10）

| # | Issue | 状态 | 关注度 | 简要 |
|---|-------|------|--------|------|
| 1 | [#6879](https://github.com/earendil-works/pi/issues/6879) auto-compaction never triggers | ✅ CLOSED | 24💬 20👍 | **本期最热**。agentic turn 超 2 小时、上下文超 100% 才在 373k tokens 触发 API 拒绝，PR #8782 通过 "post-tool 触发下次压缩" 修复 |
| 2 | [#8584](https://github.com/earendil-works/pi/issues/8584) TUI 行损坏 | 🟢 OPEN | 22 9👍 | 长工具输出后流式渲染呈"每行一词"，疑似宽字符包络宽度计算错误，影响体感显著 |
| 3 | [#2870](https://github.com/earendil-works/pi/issues/2870) 遵循 XDG Base Directory | ✅ CLOSED | 20💬 **52👍** | 全期最高赞 issue！要求将配置/缓存/状态目录迁到 `$XDG_CONFIG_HOME` 等标准路径，避免污染 `$HOME` |
| 4 | [#7130](https://github.com/earendil-works/pi/issues/7130) Kitty 退格吞 2 字符 | ✅ CLOSED | 12💬 | Kitty 协议 release 事件未被过滤，导致退格解析为两次，常见于 Kitty/Alacritty 用户 |
| 5 | [#8166](https://github.com/earendil-works/pi/issues/8166) DeepSeek tool_calls 400 | ✅ CLOSED | 11💬 | 扩展在工具批处理中途注入 custom message 后，下一轮触发 `tool must follow tool_calls` 400 错误 |
| 6 | [#7128](https://github.com/earendil-works/pi/issues/7128) PI_* 默认指令过度调用 bash | 🟢 OPEN | 11💬 13👍 | 默认系统提示加入"检查 PI_* 环境变量"后，模型倾向于无谓地跑 env 检查命令 |
| 7 | [#7553](https://github.com/earendil-works/pi/issues/7553) Compaction 思考等级/模型可配置 |  OPEN | 9💬 | 当前 compaction 无条件复用会话思考等级，推理模型用户的摘要预算不可分；讨论中 |
| 8 | [#8620](https://github.com/earendil-works/pi/issues/8620) 0.84.3 全局扩展加载失败 | 🟢 OPEN | 6💬 | 升级 0.84.3 后 `~/.pi/agent/extensions/` 下所有引用 `@earendil-works/pi-coding-agent` 的扩展报 "Cannot find module" |
| 9 | [#8806](https://github.com/earendil-works/pi/issues/8806) 0.84.4 窄终端启动崩溃 | ✅ CLOSED | 2💬 | v0.84.4 在 88 列终端硬抛 `Rendered line 37 exceeds terminal width (95 > 88)`，影响所有窄屏用户 |
| 10 | [#8808](https://github.com/earendil-works/pi/issues/8808) 图像绕过 resize 流水线 | ✅ CLOSED | 1💬 | RPC 调用粘贴 4832×2756 Retina 截图后原图入库，超过 20 张图片触发 Anthropic 400 拒绝 |

**特别关注：[#8791](https://github.com/earendil-works/pi/issues/8791) 暴露 ModelRuntime 给扩展**（1💬 3👍），提议 `ExtensionContext` 暴露 `modelRuntime` 只读属性，是构建 in-process agent session 扩展的关键缺口。

---

##  重要 PR 进展（Top 10）

| # | PR | 状态 | 内容 |
|---|----|----|------|
| 1 | [#8782](https://github.com/earendil-works/pi/pull/8782) fix(coding-agent): compact before post-tool model requests | ✅ CLOSED | 仅在 agent loop 继续时执行 `prepareNextTurn`，使阈值 compaction 能在下次 provider 请求前生效。**关闭 #6879** |
| 2 | [#8805](https://github.com/earendil-works/pi/pull/8805) fix(tui): adaptive truncate instead of crash on narrow terminals | ✅ CLOSED | `TuiMainScreen.doRender` 由硬抛错改为自适应截断，解决 v0.84.4 在 80–88 列终端的启动崩溃（#8806） |
| 3 | [#8811](https://github.com/earendil-works/pi/pull/8811) feat: add startup composer | ✅ CLOSED | 新增 `StartupComposer`，在启动阶段即可接收输入并延续至正常交互模式，支持信任检查/选择/输入对话框 |
| 4 | [#8812](https://github.com/earendil-works/pi/pull/8812) fix(coding-agent): flush extension provider registrations | ✅ CLOSED | 扩展 `registerProvider` 之前是延迟到 AgentSession 绑定后才应用，导致初始模型解析时找不到扩展 provider；修复 #8810 |
| 5 | [#8787](https://github.com/earendil-works/pi/pull/8787) fix(ai): limit codex sse fallback to oversized websocket frames | ✅ CLOSED | 将 Codex WebSocket→SSE 降级限制为仅 WebSocket 1009（消息过大），避免对其他预流错误误降级 |
| 6 | [#8786](https://github.com/earendil-works/pi/pull/8786) fix(tui): match skill commands by bare name | ✅ CLOSED | 斜杠补全 fuzzy 匹配时改为匹配 skill 名称而非完整 `skill:<name>`，修复 `/idea` 错误首选 `skill:deep-research`（#8813） |
| 7 | [#8784](https://github.com/earendil-works/pi/pull/8784) fix(ai): per-model max_tokens cap for MiniMax-M3 | ✅ CLOSED | MiniMax-M3 在 OpenRouter/GMICloud 路由拒绝 max_tokens>524288，为该模型单独封顶 524288 |
| 8 | [#8795](https://github.com/earendil-works/pi/pull/8795) feat(coding-agent): add artifact verification repair gate | ✅ CLOSED | 新增可选的"项目工件验证修复闸门"扩展：未通过确定性验证时扣留成功令牌，并触发有界修复轮次 |
| 9 | [#6848](https://github.com/earendil-works/pi/pull/6848) fix: add retry logic to compaction summarization | ✅ CLOSED | 为 `completeSummarization` 增加指数退避有界重试，应对流中途瞬时 socket 死亡，关闭 #6647 |
| 10 | [#8790](https://github.com/earendil-works/pi/pull/8790) feat(coding-agent): extensions changelog | 🟢 OPEN | 在 `PiManifest` 新增 `changelogPath`，支持包相对 changelog 解析与 `CHANGELOG.md` 回退；处理流程与 Pi 自带 changelog 一致 |

**仍在开放中值得关注：**
- [#8800](https://github.com/earendil-works/pi/pull/8800) **feat(tui): search improvements** — Ctrl+Shift+F 开/关搜索、Esc 关闭、alt mode UI 优化
- [#8799](https://github.com/earendil-works/pi/pull/8799) **feat(tui): prettier Working... spinner** — spinner 移入输入框边框、匹配思考等级颜色、支持重试
- [#8572](https://github.com/earendil-works/pi/pull/8572) **feat(ai): amazon bedrock mantle** — Bedrock Mantle API 支持（等待 API key 权限 e2e 测试）
- [#8678](https://github.com/earendil-works/pi/pull/8678) **feat(tui): edit selected prompt text** — 让编辑器接收鼠标选择，支持 Backspace 删除选中文本

---

##  功能需求趋势

从过去 24 小时 48 条 issue 中提炼出 6 个最集中的功能方向：

### 1. 🖥️ 终端兼容性与 TUI 健壮性（热度最高）
- 窄终端（80–88 列）崩溃 / 行宽计算错误（#8806, #8584）
- 特定终端协议解析问题（Kitty #7130、macOS Terminal.app #8771）
- TUI 体验改进（spinner、滚动条、搜索 #8800/8799/8801）

### 2. 🧠 Compaction / 上下文管理
- 触发时机与阈值（#6879 已修复）
- 思考等级/模型可独立配置（#7553）
- 摘要请求对 OpenAI Responses / Bedrock 等模型的兼容性（#8774, #8804）
- 重试与稳定性（#6848 已合并）

### 3. 🧩 扩展 API 增强
- 暴露 ModelRuntime（#8791）
- Provider 注册时机（#8810 → #8812 已修复）
- UI 对话框事件（#7147 已合并）
- 队列续接检测（#8349 OPEN）

### 4. 🤖 模型/Provider 支持扩展
- Bedrock Mantle（#8572）、MiniMax-M3 max_tokens（#8784）
- Mistral Conversations 对 GLM-5.2 工具调用解析（#8387）
- DeepSeek tool_call 消息协议（#8166 已修复）

### 5. 🖼️ 图像与文件附件处理
- 粘贴图像绕过 resize 流水线（#8808 已修复）
- Windows 路径回退显示（#8809 已修复）
- @ 文件补全的嵌套路径模糊匹配（#8807 OPEN）

### 6. ⚙️ 配置与权限治理
- XDG Base Directory（#2870 已关闭，52 👍）
- settings.json `permissions` 块 + sandbox/审批矩阵（#8802 OPEN）
- pnpm `minimumReleaseAge` 传递（#8792 OPEN）
- `/model` 仅显示用户已配置模型（#8478 已关闭）

---

##  开发者关注点

基于社区反馈，开发者当前最强烈的痛点和需求集中在以下方面：

### 🔴 高频痛点

1. **"我的扩展在升级后就坏了"** — [#8620](https://github.com/earendil-works/pi/issues/8620) 反映 0.84.3 升级后所有全局扩展加载失败。说明 **打包/解析路径的向后兼容性** 是扩展生态稳定的关键瓶颈。Rosingrind 的 #8812 修复方向（flush provider registrations before initial model resolution）是正确范式。

2. **"压缩什么时候才真正生效？"** — [#6879](https://github.com/earendil-works/pi/issues/6879) 揭示 compaction 的实际触发时机与用户预期脱节；同时 [#7553](https://github.com/earendil-works/pi/issues/7553) 表明**思考预算不可分**是推理模型用户的硬伤。Compaction 正在从"能用"走向"可调"阶段。

3. **"窄终端 = 启动崩溃"** — [#8806](https://github.com/earendil-works/pi/issues/8806) + [#8584](https://github.com/earendil-works/pi/issues/8584) 显示 TUI 在边缘宽度上既不优雅也不稳定。开发者对**软失败（截断/换行/缩放）**的需求大于硬错误。

4. **"终端兼容性测试矩阵不够"** — Kitty (#7130)、macOS Terminal.app (#8771)、Windows 路径 (#8809) 等跨平台问题持续出现。建议增加 CI 端的 terminal-width fuzzing。

### 🟢 高频需求

1. **扩展需要更多"看得见的状态"** — ModelRuntime 暴露（#8791）、UI 对话框事件（#7147）、provider 注册时序（#8810）、队列续接检测（#8349）—— 核心诉求是**让扩展能更好地感知和编排 Agent 生命周期**。

2. **"我希望模型行为更可控"** — [#7128](https://github.com/earendil-works/pi/issues/7128) 默认 system prompt 过度引导 bash 调用、#8796 工件验证修复闸门、#8802 权限矩阵—— 开发者期待更细粒度的**策略层（policy）控制**而非依赖提示词措辞。

3. **"路径与配置应当遵循系统约定"** — [#2870](https://github.com/earendil-works/pi/issues/2870)（52 👍，全期最高）虽已关闭，但其精神延伸到 #8792（pnpm minimumReleaseAge）、#8349、#8802 等—— 开发者普遍要求**降低对 $HOME 的污染、跨平台一致、可审计**。

4. **"补全和搜索应该更聪明"** — [#8813](https://github.com/earendil-works/pi/issues/8813) skill 补全排序、#8807 嵌套文件模糊匹配、#8800 搜索 UX—— TUI 交互细节成为提升日用体验的密集战场。

---

> 📊 **数据来源**：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：2026-08-28 ~ 2026-08-29
> 
> 💡 本期最大亮点：#6879 关闭 + #8782 合并 = compaction 流程关键 bug 闭环；v0.84.4 即发布即修（#8805 紧随其后），反映项目维护节奏紧凑。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-29**

---

## 📌 今日速览

今日 Qwen Code 完成了 **v0.22.3 稳定版**的发布，主要亮点是 Channels 的 owner-scoped 命名会话能力以及 CUA Driver v0.20.2 的多平台预编译产物（macOS 已签名/公证，Linux/Windows 提供 x86_64 与 arm64）。社区关注点集中在 **WebShell UI 迁移收尾**（VS Code companion 切版引发了一批渲染/会话状态相关的 P1/P2 问题）和 **CI/Autofix 基础设施稳定性**（发布流水线 Linux 任务改用 ECS runner、takeover 循环熔断器等）。此外，**hook 系统的四个信任边界漏洞**正在由 #10427 集中修复，安全主题热度较高。

---

## 🚀 版本发布

### v0.22.3（稳定版）
主要变更：
- **Channels 新增 owner-scoped 命名会话**：每个聊天最多管理 8 个持久化任务（[#10198](https://github.com/QwenLM/qwen-code/pull/10198)）。
- **Daemon 扩展安装**：支持绝对本地路径安装，拒绝相对路径以提升安全性。
- **CUA Driver v0.20.2**：作为 `packages/cua-driver` 的 vendored 预编译产物发布；macOS 提供签名/公证的 universal binary 与 `QwenCuaDriver.app`，Linux（x86_64 + arm64，glibc ≥ 2.31）和 Windows（x86_64 + arm64）为未签名版本。
- Node.js 端的 `@qwen-c…` 工作流同步发布。

### v0.22.3-nightly.20260829.e5cb60ad48
- WebShell：分支选择器旁显示 Git 状态提示（[#10397](https://github.com/QwenLM/qwen-code/pull/10397)）。
- Review 模块：发出 St…（增量）。

---

## 🔥 社区热点 Issues

| # | Issue | 评论数 | 关注理由 |
|---|-------|--------|---------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | TUI 启动 banner 首屏偶发缺失顶部 ~3 行 | 11 | 多年陈旧 UI 渲染问题，与 pending provider update 相关，状态长时间未收敛。 |
| [#9981](https://github.com/QwenLM/qwen-code/issues/9981) | PR #9406 的延后 review 发现项汇总 | 6 | 反映 review→autofix 工作流的"延后处理"机制正在常态化，揭示维护边界。 |
| [#8432](https://github.com/QwenLM/qwen-code/issues/8432) | 百炼个人 Token Plan 模型列表不同步，图像/视频生成失败 | 5 | 国内用户高频链路（P2，已 ready-for-human），直接影响 `/auth` 选型准确性。 |
| [#8897](https://github.com/QwenLM/qwen-code/issues/8897) | `--approval-mode` / `--auth-type` 缺失 `--help` 文档（已关闭） | 5 | 典型的 CLI 可发现性问题，闭合说明已修复，对后续文档自动化是积极信号。 |
| [#10075](https://github.com/QwenLM/qwen-code/issues/10075) | 0.22.1 中 `permissions.allow` 配置导致 edit/write_file 工具消失（P1，已关闭） | 4 | P1 安全/可用性回归，已关闭意味着 0.22.1 → 0.22.3 之间已有修复，需关注 release notes 完整性。 |
| [#10385](https://github.com/QwenLM/qwen-code/issues/10385) | WebShell 编辑消息使用窗口本地 turn index 触发 P1 bug | 3 | WebShell 切版遗留的高危数据一致性 bug，影响消息编辑/rewind 语义。 |
| [#10380](https://github.com/QwenLM/qwen-code/issues/10380) | OpenAI 兼容网关返回 HTTP 413 时 auto-compaction 无法恢复 | 3 | 长会话在反向代理部署下的可用性陷阱，社区报告活跃。 |
| [#10435](https://github.com/QwenLM/qwen-code/issues/10435) | 新版在本地 llama-server 上触发 grammar 解析失败 | 3 | 本地推理用户的 P2 阻断，说明 sampler/grammar 路径与新版本存在不兼容。 |
| [#10406](https://github.com/QwenLM/qwen-code/issues/10406) | WebShell 在 daemon 不可达时进入无限 re-render | 3 | 嵌入式宿主状态机问题，反映 React effect 与持久错误状态的耦合治理。 |
| [#10210](https://github.com/QwenLM/qwen-code/issues/10210) | Agent Team 的 `team_delete` 在文件系统清理失败时仍报成功 | 4 | multi-agent roadmap 下重要的失败语义正确性问题，可能导致后续状态污染。 |

**社区反应**：今日 Issue 互动以维护者 wenshao、yiliang114、qqqys 三人主导，反映出 autofix/延后 review 流水线（`autofix/takeover`）显著加快了 triage 节奏；与之相对的，多个 WebShell 切版相关 bug 被识别为"review scope cap"导致修复被拆分。

---

## 🛠 重要 PR 进展

| PR | 标题 | 重点 |
|----|------|------|
| [#10427](https://github.com/QwenLM/qwen-code/pull/10427) | `fix(hooks):` 修复 hook 执行的四个信任边界漏洞 | 本周最关键的安全修复，是 #8396 的单 commit 重启：HTTP hooks 不再 follow redirect；脚本 hooks 通过 stdin 传参；签名校验；网络出口受限。 |
| [#9811](https://github.com/QwenLM/qwen-code/pull/9811) | `refactor(vscode-ide-companion):` 完成 WebShell UI 切版 | 范式级重构——把 companion 完全挂载到工作区级 `qwen serve` daemon 上，由 loopback + per-process token 保护，催生了一批后续修复 PR（#10405/#10406/#10416/#10385/#10391）。 |
| [#10183](https://github.com/QwenLM/qwen-code/pull/10183) | `feat(memory):` 结构化按需 recall | 将 managed auto-memory 从平铺 prompt 升级为两级 ref/title 树 + 查询聚焦子树 + 专用 tool，是记忆体系的下一阶段演进。 |
| [#10024](https://github.com/QwenLM/qwen-code/pull/10024) | `feat(web-shell):` 通过托管平台分享 HTML artifact | Cloudflare → Vercel → Netlify 三段渐进接入流程，给 WebShell 增加对外交付能力。 |
| [#10122](https://github.com/QwenLM/qwen-code/pull/10122) | `feat(autofix):` takeover 循环熔断器 | 通过发布收敛信号的机器可读码，让外部消费方能识别 review 收敛状态，给 takeover loop 一个正式出口（呼应 #10107 的诉求）。 |
| [#10036](https://github.com/QwenLM/qwen-code/pull/10036) | `fix(ci):` 发布流水线 Linux 任务改走 ECS runner | 将 `prepare / quality / integration_none / integration_docker` 四类任务路由到 `ecs-qwen` 自托管池，提升发布可控性。 |
| [#10123](https://github.com/QwenLM/qwen-code/pull/10123) | `fix(ci):` 抢救被 supersede 的 review 任务 | 修复 #10110：取消策略只在 `closed` 时触发，`synchronize` 时排队 PENDING，避免在飞 review 被浪费。 |
| [#10007](https://github.com/QwenLM/qwen-code/pull/10007) | `fix(core):` 在 `O_NOFOLLOW` 缺失平台保持 no-follow 读取保护 | 跨平台"不跟随符号链接"的统一抽象；将已确认的 `O_NOFOLLOW` 调用点路由到它，并保留 macOS HFS+/APFS 与 Windows 的兼容回退。 |
| [#10425](https://github.com/QwenLM/qwen-code/pull/10425) | `feat(web-shell):` 从绑定 PR 的 closing references 派生 issue 绑定 | 自动将 `Fixes #N` 链接纳入 session 状态，把 PR ↔ issue 拓扑自动化，是会话→项目管理可视化的关键一步。 |
| [#9682](https://github.com/QwenLM/qwen-code/pull/9682) | `refactor:` 加深架构所有权边界 | 五大高频变更接缝的边界收紧：ACP transport 安全、workspace 限定路由的 trusted-runtime 选择策略等。 |

---

## 📈 功能需求趋势

从 Issues 主题分布可清晰看到五条主线：

1. **WebShell 完整化**（IDE/VSCode 集成）—— 多条 sidebar/pinned/session-switch/QR 入口等增强（#10399, #10405, #10406, #10416, #10432），表明 WebShell 已经成为事实上的 GUI 主线。
2. **Channels / 会话生命周期**—— owner-scoped 会话（#10198）、`sessionRotation`（#8927）、pinned 会话分组（#10391/#10416），"会话"作为产品核心对象的语义在持续被丰富。
3. **Memory / 记忆体系**—— 结构化按需 recall（#10183）、managed hosting 分享（#10024）、peg-native 格式错误（#10461）。
4. **本地推理/三方网关兼容**—— llama-server grammar 失败（#10435）、HTTP 413 auto-compaction（#10380），说明社区对"非官方 Qwen endpoint"接入的需求显著。
5. **CI/Review 基础设施自愈**—— autofix takeover 收敛（#10122）、心跳 shim 原子化（#10452）、ECS runner 路由（#10036）、review dedup 提前（#10121/#10105），整个内部机器化工作流走向成熟。

---

## 🎯 开发者关注点

- **WebShell 切版的 UX 稳定性**是今日最高频痛点：sidebar pinned/group、session switch overlay、消息 rewind、daemon 不可达时的 re-render 等多线并发，社区已开启 `autofix/takeover` 与 `review/self-reported` 双轨加速修复。
- **信任边界与安全**再度成为焦点：hook 系统的四个漏洞（#10427）、`git config` `include.path` 解析绕过（#10441）、heredoc 权限收敛（#10446）、no-follow reads 跨平台覆盖（#10007），显示出"配置 ↔ 代码执行"攻击面正在被系统性审视。
- **CLI 可发现性**（#8897 已关闭）作为"小但恼人"的开发者体验问题首次浮出水面，提示后续 release 工程可能需要自动校验 `--help` 与注册项的一致性。
- **本地/三方推理的兼容测试**（llama-server grammar、OpenAI 网关 413）呼吁在 release pipeline 增加非官方 endpoint smoke test。
- **Submodule 工作流的硬性 .git 限制**（#10448）反映对"显式优于隐式"的偏好：用户希望以 `git rev-parse` 替代单一文件存在性判断。

---

*数据范围：GitHub `QwenLM/qwen-code` 仓库 2026-08-28 → 2026-08-29 的 Releases、Issues、Pull Requests。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-29**

> 注：本期数据涉及项目仓库 `Hmbown/DeepSeek-TUI`，但所列所有 Issue / PR 实际归属 `Hmbown/CodeWhale`，疑似项目已更名或迁移，下文以"项目仓库"统称。

---

## 一、今日速览

v0.9.12 发布窗口进入冲刺阶段，里程碑追踪 Issue #5573 单日更新且定义了 P0 must-fix 集合；与此同时，社区关注的"Plugin UX 对齐 Claude Code"主题（#5579）已正式关闭，多个相关 PR 并入主线。PR 端表现尤为活跃：过去 24 小时共有 46 个 PR 更新，覆盖 TUI 体验打磨、Auth 统一、Provider 原生搜索扩展、依赖批量升级等多个方向，社区进入 v0.9.12 集成收尾期。

---

## 二、版本发布

**无新版本发布。** 当前主干工作分支为 `codex/v0912-integration-20260823`，目标发布 v0.9.12；尚未生成 Tag / Release。

---

## 三、社区热点 Issues（共 6 条，全部梳理）

| # | Issue | 状态 | 为什么值得关注 |
|---|---|---|---|
| **[#5573](https://github.com/Hmbown/CodeWhale/issues/5573)** v0.9.12: milestone tracker | OPEN | 16 条评论 | **本期最重要议题**：明确列出 P0 must-fix（money & safety）、Ship target、完整 release chain 验收标准（docs/tag/assets/npm/website），是 v0.9.12 全部进度的总指挥。 |
| **[#5316](https://github.com/Hmbown/CodeWhale/issues/5316)** EPIC-005: CodeWhale TUI Crate Decomposition | OPEN | 18 条评论 | 顶层 Epic 追踪 Issue，承载所有子 EPIC 与 FEAT 的进展汇报，并记录本工作线下所有 PR。社区关注度最高、持续最久的架构级议题。 |
| **[#5579](https://github.com/Hmbown/CodeWhale/issues/5579)** Plugin UX parity with Claude Code | **CLOSED** | 3 条评论 | 用户明确要求"reloading plugins, recommending plugins"等能力对齐 Claude Code，本期已关闭；相关 PR #5663 也已合入，标志 TUI 插件体验阶段性达标。 |
| **[#4402](https://github.com/Hmbown/CodeWhale/issues/4402)** v0.9.2 Attention UX: focus-aware notifications | OPEN | 2 条评论 | 提出"注意力契约"概念——把 turn-complete 通知、终端 title busy/completed、task/background state 串成统一语义，长期 UX 改进项。 |
| **[#5668](https://github.com/Hmbown/CodeWhale/issues/5668)** /copy for the last completed model output | OPEN | 2 条评论 | 用户高频小痛点：长轮次后无法一键复制最近一次模型输出，需要手工选中文本。新增 `/copy` TUI 命令即可解决。 |
| **[#5681](https://github.com/Hmbown/CodeWhale/issues/5681)** Extend provider-native web search to DeepSeek/Qwen/Kimi/Z.AI/MiMo | OPEN | 0 条评论 | **本期新增议题**：当前仅 OpenAI / Anthropic / xAI 走 provider-native 搜索，本议题要求扩展到第一方 DeepSeek、阿里 ModelStudio/Qwen、Moonshot/Kimi、Z.AI/BigModel、Xiaomi MiMo 路由。已配套 PR #5686（Moonshot/Kimi 部分）。 |

---

## 四、重要 PR 进展

### 4.1 TUI / CLI 功能增强
- **[#5663](https://github.com/Hmbown/CodeWhale/pull/5663)** `feat(tui): suggest plugins from the prompt, not only /plugin suggest` ✅ CLOSED — 用户写 prompt 时若提及 Supabase 等关键词，自动 toast 提示下一步，作为 #5579 UX 的延伸。  
- **[#5703](https://github.com/Hmbown/CodeWhale/pull/5703)** `feat(tui): match Operate to landed CWC OperateRecord` 🔵 OPEN — 将 `cw · operate` 对齐 CWC 已落地的 `OperateRecord`（camelCase 字段），统一 REST API：`GET/POST/PATCH /v1/operate`、`PUT /plan`、`POST /keepalive`、`POST /cancel`。  
- **[#5701](https://github.com/Hmbown/CodeWhale/pull/5701)** `feat(cli): Daytona cloud-agent dispatch` 🔵 OPEN — 新增 `codewhale dispatch` / `/dispatch`（别名 `cloud-agent`），允许本地 `cw` 通过明确 `github` / `cnb` / `gitee` 远端调用 Daytona 云端 agent，缺失凭证即 fail-closed，密钥仅存于 env / keyring。  
- **[#5706](https://github.com/Hmbown/CodeWhale/pull/5706)** `feat(tui): headless PR review with GitHub posting` ✅ CLOSED — `codewhale review --pr N [--post]` 执行无头 PR 复审；带 `--post` 时以专属 GitHub App 身份 `codewhale-agent[bot]` 发布一条 COMMENT（含摘要 + 行内评论），锚定 PR head SHA。  
- **[#5699](https://github.com/Hmbown/CodeWhale/pull/5699)** `fix(tui): first-class shells on the work strip` ✅ CLOSED — 后台 shell 与 subagent 同级，`▾ Shells N` 在工作条可导航；`/jobs cancel all` 与 `/jobs cancel-all` 同时生效，`shell_*` id 作为取消目标。  
- **[#5702](https://github.com/Hmbown/CodeWhale/pull/5702)** `feat(config): Route Contract Phase 1 — wire RouteResolver` 🔵 OPEN — `resolve_runtime_options` 改走 `RouteResolver` 输出 `ReadyRouteCandidate`；删除 47-arm 的 `ProviderArg` CLI 镜像；`--provider` 接受任意 catalog route id（`parse_route_kind`）。  
- **[#5402](https://github.com/Hmbown/CodeWhale/pull/5402)** `fix(tui): restore session cost when live pricing is unverifiable` ✅ CLOSED — 修复 #5241：当 live pricing 不可验证（含 `api.codewhale.net/session` 返回 503 `control_plane_not_attached`）时，会话成本不再永远停留在 `unverified_live_pricing`，改为诚实地回退路径。

### 4.2 Auth / Web / 文档
- **[#5704](https://github.com/Hmbown/CodeWhale/pull/5704)** `fix(auth): one login path that stores session and Daytona slot` ✅ CLOSED — 修复原 logout 仅清空 provider key、却未清 Codewhale 账户 session 与 Daytona token 的问题；TUI 新增 `/login` 命令；移除 TUI 二进制残留的 `login_*` 边角代码。  
- **[#5707](https://github.com/Hmbown/CodeWhale/pull/5707)** `docs: GitHub App setup guide for Codewhale Agent reviews` 🔵 OPEN — 新增 `docs/GITHUB_APP.md`，平实语言说明如何以 `codewhale-agent[bot]` 身份发布 PR review，覆盖 App 创建、两个 repo 权限、Install、三项 repo 设置（`CODEWHALE_APP_ID` 等）。  
- **[#5647](https://github.com/Hmbown/CodeWhale/pull/5647)** `fix(web): rescue pricing and legal routes` ✅ CLOSED（取代 #5639，CI 干净 commit metadata）— 让本地化 `/pricing` 成为真实页面：开源免费、hosted Member 仅描述无购买按钮（生产计费 dormant）；legal 路径统一到 Shannon Labs 正文。  
- **[#5700](https://github.com/Hmbown/CodeWhale/pull/5700)** `feat(web): local GT pipeline for website and docs` ✅ CLOSED — 引入 General Translation 作为网站/文档 i18n 流水线，落到现有 `web/lib/i18n/dictionaries` 运行时（不引入第二套 i18n 系统），从 live dictionaries 种子 `web/gt-catalog/{en,zh}.json`。

### 4.3 Provider / 依赖批量升级（节选）
- **[#5686](https://github.com/Hmbown/CodeWhale/pull/5686)** `feat(web): add Moonshot and Kimi native search` 🔵 OPEN — 配套 #5681，新增 Moonshot/Kimi 产品路由：K3 Formula tools/fibers、旧版 K2.6 `$web_search`、Kimi Code membership `/search`；限定 provider-controlled 执行 ≤ 4 轮 / 8 次工具调用，拒收未声明工具，仅从引用中恢复。  
- **[#5695](https://github.com/Hmbown/CodeWhale/pull/5695)** `chore(deps): bump schemaui 0.12.3 → 0.12.4` 🔵 OPEN（dependabot）  
- **[#5694](https://github.com/Hmbown/CodeWhale/pull/5694)** `chore(deps): bump rio-vt 0.5.25 → 0.5.26` 🔵 OPEN（dependabot）  
- **[#5671](https://github.com/Hmbown/CodeWhale/pull/5671)** `chore(deps-dev): bump typescript 5.9.3 → 7.0.2` 🔵 OPEN（dependabot）  
- **[#5673](https://github.com/Hmbown/CodeWhale/pull/5673)** `chore(deps): bump next 15.5.21 → 16.3.3` 🔵 OPEN（dependabot，含安全修复）  
- **[#5670](https://github.com/Hmbown/CodeWhale/pull/5670)** `chore(deps-dev): bump tailwindcss 3.4.19 → 4.3.3` 🔵 OPEN（dependabot）  
- **[#5705](https://github.com/Hmbown/CodeWhale/pull/5705)** `chore: remove verified-dead code and unused dependencies` ✅ CLOSED — 删除 2 个未用依赖 + 9 个死函数，**+4 / −143 行**涉及 13 文件，并瘦身 `Cargo.lock`；每处删除均给出验证证据。

---

## 五、功能需求趋势

从本期活跃议题与 PR 提炼，社区最关注的功能方向呈现以下五大主线：

1. **Plugin / UX 对齐 Claude Code**：用户期待 TUI 在 reload、recommend、prompt 内主动建议等能力向 Claude Code 看齐（#5579 闭环 + #5663 合入）。
2. **Provider 原生能力扩展**：网页搜索从 OpenAI/Anthropic/xAI 扩展到 **DeepSeek、Qwen、Kimi、Z.AI/BigModel、Xiaomi MiMo** 五大第一方路由（#5681 + #5686），并配套模型/路由表达统一化（#5702 Route Contract Phase 1）。
3. **注意力与可读性 UX**：将 turn-complete 通知、终端 title busy/completed、background state 整合为"注意力契约"，让 TUI 在失焦/回归时行为可预期（#4402）。
4. **终端/工作条交互细节**：增加 `/copy`（#5668）、工作条一等公民 Shell（#5699）、统一 Auth & 退出路径（#5704）等"小而具体"的 TUI 微改进。
5. **云端 Agent / 自动化协作**：Daytona cloud-agent dispatch（#5701）+ GitHub App 身份的无头 PR Review（#5706 + #5707）形成"本地 → 云端 → 代码托管平台"端到端闭环。

---

## 六、开发者关注点

综合 Issues 评论与 PR 描述中的高频词汇，开发者当前的反馈与诉求集中在以下几点：

- **诚实/可信的产品路径**：本期多个 PR 强调"fail-closed"、"honest page"、"no Buy button"、"unverified_live_pricing"等措辞，反映社区对**生产计费休眠期对外展示**、**不可验证状态不假装成功**等诚信设计有强烈共识（#5701、#5705、#5402、#5647）。
- **多 Provider 一等公民**：从 CLI 入口到搜索、到路由解析，都在做"对所有 catalog provider 一视同仁"的统一抽象（#5702 Route Contract、#5681/#5686 搜索、#5703 Operate 对齐）。
- **后台任务可见性**：subagent 与后台 shell 同级暴露在工作条，且需可单独取消（#5699），反映开发者对"运行中工作是否可控"的长期焦虑。
- **认证与状态机一致性**：原来 logout 只清 provider key 而保留 session 与 Daytona token 的"半截退出"被视为明显 bug（#5704），说明开发者非常看重登录态的语义完整性。
- **依赖治理常态化**：dependabot PR 覆盖 schemaui、rio-vt、typescript、next（含安全修复）、tailwindcss 等，体现 v0.9.12 周期内对**依赖卫生**与**安全修复**的同步推进（#5695 / #5694 / #5671 / #5673 / #5670）。
- **文档配套先行**：与新功能一同交付的 `docs/GITHUB_APP.md`（#5707）说明社区期待"功能 → 文档"同步节奏，避免像过去某些 issue 中提到的"发现了找不到用法"的尴尬。

---

*日报基于 GitHub 公开数据整理，仅反映过去 24 小时窗口的项目动态。如需对某一议题深挖，可直接点击对应 # 号跳转。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*