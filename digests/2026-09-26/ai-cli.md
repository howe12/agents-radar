# AI CLI 工具社区动态日报 2026-09-26

> 生成时间: 2026-09-26 03:00 UTC | 覆盖工具: 9 个

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
**数据周期**：2025-10 至 2026-09 | **截止日期**：2026-09-26

> ⚠️ **数据说明**：本期 PR 列表的评论/点赞字段显示为 `undefined`，无法按评论数严格排序。以下榜单综合「**功能代表性、社区讨论热度、更新活跃度**」三个维度筛选，Issues 板块的评论数据完整可用。

---

## 一、热门 Skills 排行（Top 8）

| # | Skill（PR） | 类别 | 状态 | 热度信号 |
|---|-----------|------|------|---------|
| 1 | **pyxel**（#525，2026-03-05 提交，最近更新 09-22） | 游戏开发 / 创意编程 | 🟢 OPEN | 长期更新未合并，覆盖 Python retro game 全流程 |
| 2 | **proofcore-contract-auditor**（#1771，2026-09-15） | Web3 / 智能合约安全 | 🟢 OPEN | 新晋热点：Solidity/Rust 合约静态分析 + TON 区块链存证 |
| 3 | **md2video-audio**（#1703，2026-09-01） | 多媒体生成 | 🟢 OPEN | Markdown → MP4 零成本工作流 |
| 4 | **AWT - AI Watch Tester**（#822，2026-03-31，最近更新 09-19） | E2E 测试 | 🟢 OPEN | 视觉驱动零代码浏览器测试 |
| 5 | **scnet-hpc**（#1615，2026-08-20） | HPC / 集群运维 | 🟢 OPEN | 国科网 HPC + Slurm 任务编排 |
| 6 | **document-typography**（#514，2026-03-04） | 文档质量 | 🟢 OPEN | 解决 AI 生成文档的孤行/寡行/编号错位 |
| 7 | **testing-patterns**（#723，2026-03-22，最近更新 09-21） | 测试方法论 | 🟢 OPEN | 测试金字塔 + React Testing Library |
| 8 | **notion-spec-to-implementation + quantitative-resume-auditor**（#1245，2026-09-24） | 工作流 / HR Tech | 🟢 OPEN | 规格文档 → Notion 任务 + 量化简历审计 |

**讨论焦点**：
- 🎮 **创意与多媒体**（pyxel、md2video-audio）：社区强烈希望 Claude 突破"代码与文档"的边界，进入游戏、视觉内容生成领域。
- 🔐 **专业纵深**（proofcore、scnet-hpc、awt）：出现明显的"行业 Skill 化"趋势，每个 Skill 切入一个垂直场景并做到闭环。
- 📄 **文档质量**（document-typography、notion-spec）：暴露 AI 生成物的"格式失控"是高频痛点。

---

## 二、社区需求趋势（基于 Issues 评论热度）

| 排名 | Issue | 评论数 | 核心诉求 |
|----|------|-------|--------|
| 🥇 | [#492](https://github.com/anthropics/skills/issues/492) Security: Community skills distributed under `anthropic/` namespace | **43** | 🛡️ **供应链信任危机**——社区 Skill 冒充官方 Skill 引发权限滥用担忧 |
| 🥈 | [#228](https://github.com/anthropics/skills/issues/228) Enable org-wide skill sharing in Claude.ai | **16** | 🏢 **企业级分发**——组织内 Skill 共享库 / 分享链接缺失 |
| 🥉 | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` trigger rate = 0% | **12** | ⚙️ **基础设施 bug**——技能评估脚本存在严重缺陷 |
| 4 | [#62](https://github.com/anthropics/skills/issues/62) All my skills have disappeared | **10** | 🗑️ **可靠性 / 用户资产丢失** |
| 5 | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory skill proposal | **9** | 🧠 **上下文压缩**——长任务符号化记忆 |
| 6 | [#202](https://github.com/anthropics/skills/issues/202) skill-creator 应遵循最佳实践（CLOSED） | **8** | 📚 skill-creator 自身需要重构 |
| 7 | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 重复安装 | **6** | 📦 插件打包/分发问题 |
| 8 | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` skill 一次性注入 156k tokens | **4** | 💥 **上下文窗口爆炸** |
| 9 | [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 评估 0/N | **4** | 🔧 MCP 评估管线 bug |
| 10 | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate Pipeline proposal | **4** | ✅ 推理质量三段门控 |
| 11 | [#16](https://github.com/anthropics/skills/issues/16) Expose Skills as MCPs | **4** | 🔌 Skill 协议化为 MCP 接口 |
| 12 | [#29](https://github.com/anthropics/skills/issues/29) Usage with AWS Bedrock | **4** | ☁️ 跨平台集成 |
| 13 | [#1362](https://github.com/anthropics/skills/issues/1362) web-artifacts-builder pnpm ≥10 兼容性 | **3** | 🔨 工具链维护缺位 |

### 提炼出的 5 大需求方向

1. **🔒 信任与安全（最强烈）**：43 条评论的 #492 揭示社区对「Skill 假冒官方」已形成系统性焦虑，安全审计、命名空间隔离是头号议题。
2. **🏢 企业化能力**：org sharing（#228）、Bedrock（#29）、SharePoint（#1175），社区正在试图把 Skills 推进到企业 IT 体系。
3. **⚙️ 元基础设施可靠性**：评估脚本 0% 触发率（#556）、MCP 评估失灵（#1390）、Skill 凭空消失（#62）—— Skill 自身体系（含 skill-creator）质量堪忧。
4. **🧠 上下文与记忆管理**：compact-memory（#1329）、claude-api 注入 156k token（#1487）共同指向「上下文工程」已成为 Skill 设计核心约束。
5. **🌐 互操作与协议化**：将 Skill 包装为 MCP（#16）、解决 Skill 与 MCP 的接口边界，反映出社区正在探索 Agent 工具的统一抽象层。

---

## 三、高潜力待合并 Skills

以下 PR **仍在 OPEN 状态、最近 30 天内有更新或功能重要性高**，最有可能在短期内落地：

| PR | Skill | 最近更新 | 亮点 | 链接 |
|---|------|--------|------|------|
| **#1792** | fix(docx): LibreOffice 超时检测 | 2026-09-25 | 直接修复 docx Skill 关键回归 bug | [→](https://github.com/anthropics/skills/pull/1792) |
| **#1734** | Detect orphaned docx comments | 2026-09-25 | 补全 docx 评论丢失场景 | [→](https://github.com/anthropics/skills/pull/1734) |
| **#1245** | notion-spec-to-implementation + resume auditor | 2026-09-24 | 双场景实用 Skill，工作流类代表 | [→](https://github.com/anthropics/skills/pull/1245) |
| **#525** | pyxel retro game | 2026-09-22 | 创意编程领域标志性 Skill | [→](https://github.com/anthropics/skills/pull/525) |
| **#723** | testing-patterns | 2026-09-21 | 测试方法论体系化 | [→](https://github.com/anthropics/skills/pull/723) |
| **#822** | AWT E2E tester | 2026-09-19 | 视觉驱动测试，覆盖新场景 | [→](https://github.com/anthropics/skills/pull/822) |
| **#1742** | mcp>=2 streamable_http_client 兼容性 | 2026-09-19 | MCP 关键依赖升级修复 | [→](https://github.com/anthropics/skills/pull/1742) |
| **#1790** | fix(docx): document.xml.rels 自动创建 | 2026-09-19 | docx 关系文件完整性修复 | [→](https://github.com/anthropics/skills/pull/1790) |
| **#1776** | blast-radius（破坏性操作 checklist） | 2026-09-18 | 与 #492 安全焦虑直接呼应 | [→](https://github.com/anthropics/skills/pull/1776) |

> 📌 **观察**：docx 相关修复 PR 在 9 月密集出现（#1792、#1734、#1790），表明 Office 文档处理链路正在被系统性加固。

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是「让 Skills 从『零散脚本集合』进化为『可信赖的企业级 Agent 工具协议』**——具体表现为：① 强烈要求建立 Skill 的**信任与安全边界**（43 条评论的 #492）；② 迫切需要**元基础设施自身可靠**（skill-creator、eval 管线、docx 兼容性）；③ 探索 Skill ↔ MCP ↔ 长上下文记忆的**统一互操作层**。

---

**附加建议**：建议关注者订阅 `anthropics/skills` 的 [Issues 标签 `security`](https://github.com/anthropics/skills/issues?q=is%3Aissue+security)、`enterprise` 与 `proposal`，这三个标签涵盖了未来 6 个月最有可能改变 Skills 生态走向的讨论。

---

# Claude Code 社区动态日报
**日期**：2026-09-26 | **数据源**：github.com/anthropics/claude-code

---

## 📌 今日速览

- **Mods 可扩展性框架进入交付阶段**：Issue #91870 收到官方更新，社区"ship in weeks"承诺落地，过去24小时仍是讨论最热烈的功能话题（217条评论）。
- **v2.1.283 正式发布**：新增 `x-claude-code-prompt-id` 网关提示头（用于 LLM 网关按 prompt 分组请求）和 `availableModelsMatch` 受管设置。
- **多 Connector 账户支持呼声依旧最高**：Issue #27302 评论数突破256条，👍390，仍是社区长期呼吁的头号特性。

---

## 🚀 版本发布

### v2.1.283（今日发布）

| 新增能力 | 说明 |
|---|---|
| `x-claude-code-prompt-id` 网关提示头 | 通过环境变量 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 启用，方便 LLM 网关按用户单次 prompt 对请求进行聚合分析 |
| `availableModelsMatch` 受管设置 | 当设为 `"exact"` 时，`availableModels` 条目将仅允许模型名称**精确匹配**，避免近似名称造成的误用 |

> 其他变更未在本次 release notes 中详细披露，建议关注 [Release v2.1.283](https://github.com/anthropics/claude-code/releases) 后续更新。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|---|---:|---:|---|
| 1 | **[#27302]** 支持同一 Connector 的多账户（Claude / Claude Code on the Web） | 256 | 390 | 全社区呼声最高的特性，跨平台覆盖 CLI、Web、Desktop；影响团队/个人双账号使用场景 |
| 2 | **[#91870]** Mods：让 Claude 扩展性提升 10 倍 | 217 | 126 | 官方承诺数周内交付 function hooks，是 Claude Code 未来架构演进的核心方向 |
| 3 | **[#33323]** TUI 任务队列（多 prompt 顺序/并行排队） | 23 | 56 | 高频开发痛点，Codex CLI 已实现，社区强烈呼吁跟进 |
| 4 | **[#97305]** 模型将 "verifiable" 误写为 "falsifiable"（4个月内重现4次） | 6 | 1 | 项目级纠正无法迁移，反映出词级语义错位的稳定性问题 |
| 5 | **[#97336]** MCP 工具结果被静默替换为 `<<ccr:...,html,NNNB>>` 占位符 | 3 | 0 | 严重影响模型对工具输出的可读性，影响面广（两家无关服务器都触发） |
| 6 | **[#81571]** Telegram 频道插件：第二个会话杀掉运行中的 poller | 3 | 0 | 频道插件可靠性问题，会导致整个 channel 永久瘫痪 |
| 7 | **[#78719]** 频道插件 MCP 在 marketplace 刷新后启动失败，需 `/mcp Reconnect` | 3 | 0 | 与 #81571、#80822、#97314 形成"插件 MCP 失败"系列问题簇 |
| 8 | **[#91953]** Auto-mode 分类器阻断用户已授权的部署，并累积拒绝状态 | 2 | 0 | 涉及权限模型本身的设计缺陷，影响自动化工作流 |
| 9 | **[#94728]** 恢复后台子代理时丢失 prompt 缓存 | 2 | 2 | 直接影响 token 成本与上下文连续性 |
| 10 | **[#97335]** 被拒绝的请求产生的缓存永不重用，导致 Pro 限额迅速耗尽 | 0 | 0 | 缓存命中策略与 safeguard 拒绝逻辑耦合，新发现的成本/限额问题 |

> 完整 Issue 列表：[anthropics/claude-code/issues](https://github.com/anthropics/claude-code/issues)

---

## 🛠️ 重要 PR 进展

> 过去24小时仅有 5 个 PR 更新，核心贡献者 `poteat` 主导了 Mods / sec-default / diff 三个方向的提交。

| PR | 作者 | 状态 | 内容 |
|---|---|---|---|
| **[#97334]** sec-default：对话保留的行数可超出用户档位 | poteat | OPEN | Mods 引擎事件 `session.append` 落地后即可合入，扩展安全默认策略 |
| **[#97241]** sec-default：系统提示的分段可超出用户档位 | poteat | OPEN | 与 #97334 配套，依赖 `prompt.compose` 引擎事件，需等官方 CLI 携带该事件 |
| **[#97293]** Mods：声明携带 `process.run` 截断标志与 `fs.list` 条目的 `mtimeMs` | poteat | OPEN | 让 Mods 适配 npm CLI 释放的新字段；测试桩同步更新 |
| **[#96953]** diff：focus hook 兼容引擎实际注册的插件名 | poteat | **CLOSED** ✅ | 修复 diff 插件因注册名为 `cc-plugin-diff` 而导致 hook 失配的 bug |
| **[#41611]** add the missing source to claude code | tornikeo | OPEN | 补全缺失源代码（社区长期未推进的贡献） |

> 趋势：Mods 框架的 PR 已经形成"等引擎事件 → 加 mod → 加 sec-default"的三段式推进模式，是官方扩展性战略的工程化体现。

---

## 📈 功能需求趋势

从近30条高热度 Issue 中提炼，社区关注的功能方向按优先级排序：

1. **🔧 扩展性与插件生态**（热度最高）
   - Mods / hooks / plugins（#91870 217条评论）
   - 任务队列与多任务调度（#33323）
   - 自定义工具与 MCP 增强（多个相关 Issue）

2. **🔐 多账户与认证**
   - 多 Connector 账户（#27302，390 👍）
   - OAuth / Entra 兼容（#94804）
   - 安全提示模板（#96860）

3. **🧠 模型稳定性与一致性**
   - 词级语义错位（#97305 "falsifiable" / "verifiable"）
   - 输出风格跟随问题（#96601 Opus 5.5 改回英文）
   - 模型记忆/过程被擅自修改（#97179）
   - 安全过滤器误判（#97330）

4. **⚙️ 性能与成本控制**
   - 缓存命中策略与 safeguard 拒绝耦合（#97335）
   - 后台子代理缓存丢失（#94728）
   - 会话限制触顶（#97326）

5. **📦 平台与打包**
   - macOS 多身份/多副本问题（#97338）
   - Windows / WSL 适配（#91953、#96860）
   - 桌面端 Cowork 启动挂死（#97329）

6. **🤖 自动化工作流**
   - Auto-mode 权限分类器（#91953）
   - 远程会话交互（#97326）

---

## 💬 开发者关注点

通过对 Issue 与 PR 评论的归类，开发者社区目前聚焦以下痛点：

### 1. **MCP / 插件生态的可靠性薄弱**
围绕 `plugin:telegram` 形成的问题簇（#81571、#78719、#80822、#97314、#97336）暴露了**全局缓存污染、机器级失败传播、stdio MCP 启动时序**三类深层次缺陷。任何一次单点失败都可能拖垮所有会话与频道机器人。

### 2. **缓存策略与计费耦合不透明**
#94728、#97335 都指向同一个本质问题：**prompt cache 的生命周期与 safeguard / 状态机行为耦合**，开发者难以预测何时会复用缓存、何时会重写全部上下文，导致成本失控和限额触顶。

### 3. **Auto-mode 权限模型边界模糊**
#91953 揭示了 classifier 在"用户已授权"与"auto 拒绝"之间的优先级混乱，多个会话内拒绝状态还会累积，缺乏回退机制。

### 4. **Mods 是官方押注的下一站架构**
Issue #91870 的官方更新（"shipping in N weeks"）+ poteat 在 PR 中对 sec-default、prompt.compose、session.append 事件链的精确编排，表明 **Mods 即将成为 Claude Code 的官方扩展性主战场**，值得所有做插件/集成的开发者提前关注。

### 5. **词级语义错位与模型"自作主张"**
#97305、#97179、#97328 都反映出 **Opus 5 / 5.5 在长程一致性、用户过程遵守**方面仍有可观测缺陷，且项目级纠正无法自动迁移。

### 6. **多账户是刚需而非 nice-to-have**
#27302 以 256 评论 / 390 👍 一骑绝尘，反映出**企业开发者强烈需要"工作/个人"或"多团队"账户并行**，目前任何 hack 都会被官方未来能力收敛。

---

## 📊 数据快照

- **过去24小时 Issue 更新数**：50 条（展示 30 条最热）
- **过去24小时 PR 更新数**：5 条（OPEN 4 / CLOSED 1）
- **最新 Release**：v2.1.283
- **最高评论 Issue**：#27302（256 条）
- **最高点赞 Issue**：#27302（390 👍）
- **核心贡献者**：`poteat`（Mods / sec-default / diff 三线推进）

---

*日报由社区数据自动生成，仅作信息聚合，不构成官方声明。点击链接查看原文以获取最新讨论。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-26**

---

## 1. 今日速览

过去 24 小时，OpenAI Codex 发布了 **1 个稳定版（v0.157.1）+ 7 个 alpha/pre-release 版本**，仓库同步合入了 20 个 PR（绝大多数由自动化机器人 `copyberry[bot]` 提交并快速关闭），社区问题热度集中在 **Windows 平台的 daemon 与控制台窗口行为**。最引人注目的事件是认证类 Issue #48237 一日内累计 **94 条评论、102 个 👍**，大量用户报告 `sk-svcacct` 服务账号凭据突然触发 401 Unauthorized，疑似服务端配置变更或凭据失效引发大面积故障。

---

## 2. 版本发布

| 版本 | 性质 | 说明 |
|---|---|---|
| `rust-v0.157.1` | 稳定版 | 仅 chore 类型提交，PR 索引为空，changelog 暂不可解析 |
| `rust-v0.158.0-alpha.15 / 15.1` | alpha | 0.158 系列的多次迭代 |
| `rust-v0.159.0-alpha.1 / 2 / 3` | alpha | 0.159 系列开启预热，共三个迭代 |

> 提示：稳定版 0.157.1 几乎无可读的 release notes，建议关注下个 alpha 的 changelog。完整对比：[0.157.0 → 0.157.1](https://github.com/openai/codex/compare/rust-v0.157.0...rust-v0.157.1)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 主题 | 评论 | 👍 | 重要性 |
|---|---|---|---|---|---|
| 1 | [#48237](https://github.com/openai/codex/issues/48237) | **401 Unauthorized / `sk-svcacct` 凭据失效** | 94 | 102 | 🔥 最高热度，影响面疑似全平台，关键词"URGENT"在 #48305 中复现 |
| 2 | [#25826](https://github.com/openai/codex/issues/25826) | Windows 多显示器最大化窗口溢出到相邻屏幕 | 35 | 21 | 老 issue 持续未修复，影响多屏用户日常使用 |
| 3 | [#48016](https://github.com/openai/codex/issues/48016) | Windows 上 `codex-cli 0.157.0` 启动失败 | 22 | 15 | 0.157 升级后的回归 |
| 4 | [#44342](https://github.com/openai/codex/issues/44342) | Windows Desktop 现有聊天被 `pending codex-home` 阻塞 | 19 | 7 | 关联 daemon 配置与本地 config 加载 |
| 5 | [#48074](https://github.com/openai/codex/issues/48074) | Windows 安装 Codex daemon 后终端窗口闪烁 | 14 | 17 | 与 #48090/#48114/#48238 联动，反映 daemon 进程 stdio 泄漏 |
| 6 | [#40125](https://github.com/openai/codex/issues/40125) | `create_thread` 间歇将 Full Access worktree 子会话降级为 managed approval | 13 | 3 | 权限策略不一致，潜在安全/可用性影响 |
| 7 | [#48090](https://github.com/openai/codex/issues/48090) | Windows managed daemon 启动 CLI 时弹出两个可见控制台窗口 | 11 | 2 | 直接对应 PR #48272 的修复场景 |
| 8 | [#25443](https://github.com/openai/codex/issues/25443) | Codex Desktop 在 refresh token revoked 时卡死 | 11 | 0 | 与当前 401 风暴形成对照，是 auth 状态机的历史顽疾 |
| 9 | [#48171](https://github.com/openai/codex/issues/48171) | **[Linux]** 26.924.20706 升级后无法打开历史聊天（卡 Loading） | 6 | 9 | Linux Desktop 用户近期集中爆发 |
| 10 | [#48212](https://github.com/openai/codex/issues/48212) | **[Linux Desktop]** 任务卡在 "Starting your task"，CLI 正常 | 5 | 6 | 与 #46639 macOS 同类症状，构成跨平台"桌面 app-server 启动卡死"模式 |

> 另外值得关注：**#48313（Windows 白屏）、#48333（启动 spinner 卡死）、#48325（发送消息弹出多个控制台）** 均在 9-26 当日创建，显示 Windows 26.924.1866.0 包存在连续发布质量问题。

---

## 4. 重要 PR 进展（Top 10）

> 提示：以下 PR 均显示为 `[CLOSED]`，作者均为自动化机器人 `copyberry[bot]`，代表合入后快速关闭或被反向引用。

| # | PR | 修复/功能 | 关联 Issue |
|---|---|---|---|
| 1 | [#48318](https://github.com/openai/codex/pull/48318) | **TUI 重连改为按共享截止时间继续重试**（不再受 5 次硬限） | 长时网络抖动恢复 |
| 2 | [#48272](https://github.com/openai/codex/pull/48272) | **Windows daemon 启动不再继承 launcher stdio** | #48090、#48074、#48325 |
| 3 | [#48238](https://github.com/openai/codex/pull/48238) | **本地 Windows MCP 服务器使用 `CREATE_NO_WINDOW`** | #44768 钩子弹出控制台窗口 |
| 4 | [#48229](https://github.com/openai/codex/pull/48229) | 抽取 `responses_error.rs`：分类 `response.failed` 与限流重试延迟 | 错误信息可观测性 |
| 5 | [#48224](https://github.com/openai/codex/pull/48224) | Compaction 时保留 `model + cyber_access_program` 配对 | 服务端拒绝 model/program 失配 |
| 6 | [#48222](https://github.com/openai/codex/pull/48222) | 截断 code-mode 调用保留 late result 元数据 | 输出/结果一致性 |
| 7 | [#48213](https://github.com/openai/codex/pull/48213) | Linux CLI 测试隔离可执行 fixture 副本 | 解决 `ETXTBSY` 竞态 |
| 8 | [#48211](https://github.com/openai/codex/pull/48211) | 全屏 TUI 外部编辑器交接时保持 Codex 可见 | 改进 draft 编辑体验 |
| 9 | [#48198](https://github.com/openai/codex/pull/48198) | **执行环境代理配置**：携带 `NetworkProxyConfig.enabled` 进入受控网络 | 受限命令离线场景 |
| 10 | [#48176](https://github.com/openai/codex/pull/48176) | **沙盒可写根下保护 `.aws` 目录** | 防止凭据辅助可执行被改写 |

补充亮点：**#48187** 修复 zsh `RC_QUOTES` 别名引用解析；**#48190** 对 agent message board 的 SSE 帧做大小限制，防止恶意/异常帧无限累积；**#48174** 在 turn/compaction 分析中保留 `limit_window`，区分 5 小时与周级限额。

---

## 5. 功能需求趋势

从 50 条当日活跃 Issue 的标签聚类看，社区关注点呈以下分布：

| 方向 | 占比/代表 | 重点内容 |
|---|---|---|
| **🪟 Windows 平台稳定性** | 绝对主导（约 60% 标签含 `windows-os`） | daemon 控制台窗口闪烁、启动失败、白屏、卡 spinner、鼠标序列泄漏 |
| **🔐 认证与凭据** | #48237 / #48305 / #25443 | `sk-svcacct` 服务账号 401、refresh token 失效、auth 状态机不可恢复 |
| **🐧 Linux Desktop 体验** | #48171 / #48212 | 历史会话加载失败、任务卡 "Starting your task" |
| **🖥️ TUI / 终端兼容性** | #48030 / #48127 | JetBrains Rider / Konsole / Wayland 鼠标序列与中键粘贴回归 |
| **🧪 沙盒与权限** | #46441 / #40125 / #48176（已修） | Windows 沙盒 ACL 错误、Full Access 降级、`.aws` 保护 |
| **🧵 会话/历史管理** | #42917 / #44342 / #46639 | macOS ghost 条目、聊天加载卡死、worktree 阻塞 |
| **🧰 Daemon 行为可控性** | #48195（enhancement） | 希望 `daemon_auto_start` 默认关闭或首次询问 |
| **🤖 MCP 工具兼容** | #38979 | `content annotations` 非整数 priority 触发 "Unexpected response type" |

> 趋势总结：**"Codex 想当 OS 级常驻服务，但 Windows/Linux 桌面端的进程生命周期、stdin/stdout、auth 状态机还没有为这个目标做好准备"** —— 这是当天所有热门 Issue 的共同主线。

---

## 6. 开发者关注点

综合 Issue 文本与 PR 说明，开发者社区反馈集中在以下痛点：

1. **🔴 Daemon 自动启动引发的"鬼影进程"**
   多位 Windows 用户在 0.157.0 后看到残留控制台窗口、空闪烁终端；要求将 `daemon_auto_start` 设为 opt-in（[#48195](https://github.com/openai/codex/issues/48195)）。已由 PR #48272 局部缓解。

2. **🔴 401 风暴阻断生产工作流**
   `sk-svcacct...` 服务账号凭据突然失效（[#48237](https://github.com/openai/codex/issues/48237)、[#48305](https://github.com/openai/codex/issues/48305)），用户明确表示"全部 Codex 工作无法继续"，并怀疑服务端/平台配置变更。

3. **🟠 Linux Desktop 26.924.20706 升级翻车**
   历史聊天不可加载 + 任务卡 "Starting your task"，CLI 不受影响 —— 指向 app-server 与本地 config 加载逻辑的回归（[#48171](https://github.com/openai/codex/issues/48171)、[#48212](https://github.com/openai/codex/issues/48212)）。

4. **🟠 TUI 跨终端兼容性**
   Wayland/Konsole 中键粘贴、JetBrains Rider 集成终端的鼠标序列被原样打印，开发者要求针对 0.157.0 的回归尽快恢复（[#48127](https://github.com/openai/codex/issues/48127)、[#48030](https://github.com/openai/codex/issues/48030)）。

5. **🟡 沙盒 + 凭据安全**
   Windows 工作区所有者为 `BUILTIN\Administrators` 时 `SetNamedSecurityInfoW error 5`（[#46441](https://github.com/openai/codex/issues/46441)）；PR #48176 已主动将 `.aws` 列入受保护路径，开发者欢迎该方向。

6. **🟡 错误可观测性**
   限流窗口（5h/周）信息丢失、MCP 注释优先级类型校验过严、auth 错误后无法自动恢复 —— 反映开发者希望 Codex 把"为什么失败"做到第一类返回，而非隐藏在终端日志中。

---

**📌 建议关注清单**
- 若你在用 `sk-svcacct` 服务账号 → 关注 [#48237](https://github.com/openai/codex/issues/48237) 与官方后续补丁版本。
- Windows 用户 → 暂缓升级到 26.924.1866.0，等待 #48272/#48238 进入正式版。
- Linux Desktop 用户 → 在 #48171/#48212 修复前，可回退到上一稳定 CLI 版本。
- IDE 集成（JetBrains/Wayland）用户 → 关注 0.158 alpha 修复 #48030/#48127 的合并进展。

---

*日报基于 GitHub 公开数据自动汇总；版本与时间以仓库实际发布时间为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-26**
**数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)**

---

## 📌 今日速览

今日社区焦点集中在 **Agent 体系的稳定性** 与 **底层修复** 两条主线：子智能体（Subagent）在中断、超时、错误恢复等场景下的异常状态仍被广泛讨论，多个高优 Issue 持续上榜；同时一批关于 **文件操作原子化、认证循环、调度器安全执行** 的核心 PR 进入审查冲刺阶段，nightly 版本号已推进至 0.63.0。

---

## 🚀 版本发布

**v0.63.0-nightly.20260926.g2fe7c2d3f** 已发布

- 由 [@gemini-cli-robot](https://github.com/google-gemini/gemini-cli/pull/29509) 自动 bump
- 关键合并：移除了无效的 `diff.external` 配置覆写（[#29467](https://github.com/google-gemini/gemini-cli/pull/29467)）
- 作为 nightly 构建版本，仍处于快速迭代窗口

🔗 [Release 链接](https://github.com/google-gemini/gemini-cli/pull/29471) ｜ [Bump PR](https://github.com/google-gemini/gemini-cli/pull/29509)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 为什么重要 |
|---|-------|--------|------|-----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在达到 MAX_TURNS 后仍报 GOAL success | p1 | 13 | 真实失败被掩盖为成功，严重影响用户对子代理的信任与调试 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 后置执行意图路由 | p2 | 9 | 借助 Gemini 3 的 bash 亲和性探索更安全的原生 POSIX 工具链 |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂死 | p1 | 8 | 简单建文件夹操作即可触发长时间挂起，用户体验灾难（👍8） |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取 / 搜索 / 代码库映射评估 | p2 | 7 | 跨多个 EPIC 的关键探索，可能显著降低 token 消耗 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不会主动调用 skills 与子代理 | p2 | 6 | 反映自定义能力"被闲置"，是配置生态化的核心障碍 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 确定性脱敏与日志收敛 | p2 | 5 | 直接关联用户隐私与凭据安全 |
| 7 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 `settings.json` 覆盖 | p2 | 4 | 配置优先级失效，导致 maxTurns 等关键参数失效 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) Browser Agent 会话接管与锁恢复 | p3 | 4 | 从 fail-fast 转向自愈式，提升长会话鲁棒性 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | p1 | 4 | 阻碍 Linux 桌面用户的核心使用场景 |
| 10 | [#26516](https://github.com/google-gemini/gemini-cli/issues/26516) Memory 系统缺陷与质量改进追踪 | p2 | 2 | 社区对 Auto Memory 整体质量的统一跟进入口 |

**社区反应观察**：p1 级 Issue 中约 70% 与"Agent 行为不可预测"相关，子代理的状态可见性与错误恢复机制成为用户最迫切的诉求。

---

## 🛠 重要 PR 进展（Top 10）

| PR | 标题 | 关键点 |
|----|------|--------|
| [#29402](https://github.com/google-gemini/gemini-cli/pull/29402) | **持久化状态写入故障安全化** | 临时文件 + `fsync` + 原子重命名，杜绝截断 JSON 静默清空 state.json |
| [#29387](https://github.com/google-gemini/gemini-cli/pull/29387) | 单个畸形扩展目录不再导致所有扩展加载失败 | 将 `security.*` 校验移入 try/catch，提升扩展生态容错 |
| [#29400](https://github.com/google-gemini/gemini-cli/pull/29400) | 修复会话恢复时重复的 `functionResponse` 消息 | 解决 `-r` 重连后工具响应重复触发的问题 |
| [#29399](https://github.com/google-gemini/gemini-cli/pull/29399) | 编辑时保留无关注释 | 强化 replace 工具契约，并新增行为回归 eval |
| [#29398](https://github.com/google-gemini/gemini-cli/pull/29398) | MCP 初始工具发现增加短超时 | 关闭 #28355，避免 ID 错配时等待 10 分钟 |
| [#29397](https://github.com/google-gemini/gemini-cli/pull/29397) | 修复中断回合导致的会话上下文污染与无限循环 | SIGINT/超时/中止工具执行后的合成 assistant 回合处理 |
| [#29394](https://github.com/google-gemini/gemini-cli/pull/29394) | **调度器层强制用户"暂停"指令** | 在调度层拦截写类工具，绕过 prompt 级指令的不可靠性 |
| [#29386](https://github.com/google-gemini/gemini-cli/pull/29386) | A2A 服务 `express.json` 中间件顺序修复 | 解决 `req.body` 为 undefined 的问题 |
| [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) | 修复 Windows/WSL/无头环境下的无限认证循环 | keyring 故障自动降级到加密文件存储 |
| [#29499](https://github.com/google-gemini/gemini-cli/pull/29499) | 文件工具操作串行化与写入原子化 | 解决并行子代理并发改写同一文件导致的丢失更新 |

**趋势**：本批 PR 普遍具备 **p1 优先级 + XL/M 大体积** 特征，主题集中在"在更底层解决上层 Agent 的不可靠行为"——这与 Issue 端的诉求高度一致。

---

## 📈 功能需求趋势

通过对 30 条活跃 Issue 的聚类分析，当前社区最关注的方向如下：

1. **🔍 AST 感知的代码理解**（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）
   - 期望用更少 token 完成更精确的代码定位，降低"context rot"

2. **🧠 Auto Memory 系统质量**（[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)）
   - 一组 2026-05 的高质量 issue 在今天集中被推进，集中在**确定性脱敏、避免重复提取、无效补丁隔离**

3. **🖥 Browser Agent 的鲁棒性**（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - 涉及 Wayland 兼容、配置覆盖、会话接管、轨迹分享四大子方向

4. **🛡 沙箱与执行安全**（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)、[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)、[#29394](https://github.com/google-gemini/gemini-cli/pull/29394)）
   - "用户叫停但 Agent 仍执行破坏性命令"是反复出现的痛点

5. **📊 子代理可观测性**（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）
   - 错误状态语义、bug 报告上下文、`/chat share` 轨迹共享

---

## 👨‍💻 开发者关注点

综合 Issue 与 PR 内容，目前开发者社区的高频痛点可归纳为五类：

1. **🪦 子代理状态语义不清** —— 失败/中断/超时未与"成功"明确区分，导致上层应用与人工调试都建立在错误前提上（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）

2. **⚙️ 配置优先级与扩展容错** —— `settings.json` 被忽略、畸形扩展拖垮全局加载等问题的根源是**校验与降级路径错位**（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)、[#29387](https://github.com/google-gemini/gemini-cli/pull/29387)）

3. **💾 并发文件操作与状态一致性** —— 多子代理并行写同一文件、状态文件截断、认证循环等都被归类为 **"看起来小但能丢数据"** 的高优问题（[#29402](https://github.com/google-gemini/gemini-cli/pull/29402)、[#29499](https://github.com/google-gemini/gemini-cli/pull/29499)）

4. **🧠 Token 效率与上下文卫生** —— 临时脚本遍地、firehose 式读取、in-context todo 列表膨胀，反映出对**"外科手术式读取"** 的强烈需求（[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）

5. **🪟 跨平台兼容性盲点** —— Wayland、Windows/WSL、headless 环境的认证与浏览器子代理失效问题被持续报告（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)、[#29448](https://github.com/google-gemini/gemini-cli/pull/29448)）

---

*本日报基于 GitHub 公开数据自动生成。完整 Issue/PR 列表可在 [gemini-cli 仓库](https://github.com/google-gemini/gemini-cli) 查看。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-26** | **数据源：github.com/github/copilot-cli**

---

## 📌 今日速览

今日 Copilot CLI 发布了 **v1.0.89-4** 版本，重点引入**路由层级自动推荐**与**模型切换反馈机制**。社区热度持续高涨，过去 24 小时有 46 条 Issue 更新，其中认证失败、Skill 不可达、自定义系统提示词精简等议题最受关注。仓库当日 **0 条新 PR 活动**，呈现出"问题反馈密集、修复提交放缓"的态势。

---

## 🚀 版本发布

### [v1.0.89-4](https://github.com/github/copilot-cli/releases/tag/v1.0.89-4-4)

**新增功能**
- 🧭 **自动路由层级推荐**：CLI 会基于当前上下文自动推荐合适的 routing tier，并支持快捷键或点击切换
- 💬 **手动切换模型后的反馈**：从用户手动选择的模型切换走时，自动弹出简短反馈提示，便于团队收集体验数据

**改进**
- 🔌 **直连插件可独立启停**：被标记为禁用的插件将停止加载（修复此前即使禁用仍会重复加载的问题）

---

## 🔥 社区热点 Issues

### 1. [#4438 disable-model-invocation: true 导致 Skill 完全不可达](https://github.com/github/copilot-cli/issues/4438)
- **状态**：OPEN | 👍 11 | 💬 8
- **重要性**：影响所有 `SKILL.md` 带 `disable-model-invocation: true` 的项目，是一个直接破坏声明式 Skill 配置语义的 Bug，CLI 与文档/用户预期出现严重背离。

### 2. [#2627 支持可配置的精简系统提示词（节省 ~20.5K token 开销）](https://github.com/github/copilot-cli/issues/2627)
- **状态**：OPEN | 👍 **20**（本月最高赞）| 💬 5
- **重要性**：当前系统提示词固定占用约 20,500 token，相当于 200K 上下文的 10%。叠加 ~8,500 token 的工具说明，对长上下文任务和成本敏感用户形成明显负担，是社区呼声最高的 **性能/成本类需求**。

### 3. [#4929 进程级认证 token 永久失效，需重启](https://github.com/github/copilot-cli/issues/4929)
- **状态**：OPEN | 👍 0 | 💬 6
- **重要性**：长会话中 token 停止刷新后所有 prompt 与 `/ask` 立刻报鉴权错误，`/login` 无法原地恢复，必须 kill 进程重连。对企业用户与长时间任务影响极大。

### 4. [#232 增加 --system-prompt 命令行参数](https://github.com/github/copilot-cli/issues/232)
- **状态**：OPEN | 👍 11 | 💬 6
- **重要性**：与 #2627 互为补充，诉求一致——为命令行调用提供独立于仓库指令文件的系统级指令注入通道。

### 5. [#4775 Mission Control Dashboard 链接 404](https://github.com/github/copilot-cli/issues/4775)
- **状态**：OPEN | 👍 2 | 💬 6
- **重要性**：Dashboard 前端把 session 链接指向不存在的 `/copilot/tasks/<uuid>`，实际路径是 `/agents/tasks/<uuid>`，破坏 GitHub 官方产品链路的一致性，影响跨产品协作体验。

### 6. [#4680 自定义 OpenAI 兼容端点发送了错误模型 ID](https://github.com/github/copilot-cli/issues/4680)
- **状态**：OPEN | 👍 0 | 💬 4
- **重要性**：CLI 不携带配置中的模型名（如 `mimo-v2.5`），而是硬编码 `gpt-5.4-nano`，导致任何自定义第三方端点直接死亡，阻断 BYOK 生态。

### 7. [#4082 Copilot CLI 与 Desktop App 跨端会话同步](https://github.com/github/copilot-cli/issues/4082)
- **状态**：OPEN | 👍 9 | 💬 2
- **重要性**：macOS 用户同时在 CLI 和 Desktop 间切换时，会话无法互通。这是 **跨设备/跨客户端体验** 的代表性诉求，反映出 Copilot 套件割裂的现状。

### 8. [#4710 copilot-file-search 失控线程耗尽 CPU 与磁盘](https://github.com/github/copilot-cli/issues/4710)
- **状态**：OPEN | 👍 0 | 💬 2
- **重要性**：在 `--yolo` 模式下，session 标为 idle 后后台 `copilot-file-search` 线程仍持续运行且无限写入诊断日志，属于资源/稳定性类严重缺陷。

### 9. [#4907 MCP 周期重连消息淹没会话历史](https://github.com/github/copilot-cli/issues/4907)
- **状态**：OPEN | 👍 0 | 💬 2
- **重要性**：MCP server 每次重连都会向主对话插入 "is taking longer than expected to connect" + "connected" 等噪音，长期会话极易被对话历史污染，是 MCP 集成的体验顽疾。

### 10. [#4960 企业托管自定义模型在 /model 中显示但无法选择](https://github.com/github/copilot-cli/issues/4960)
- **状态**：OPEN | 👍 0 | 💬 2
- **重要性**：企业通过 OpenAI 兼容 provider 注册的自定义模型在 UI 上可见可选，但实际点选无效，与 #4680 共同构成 **Enterprise 自定义模型可用性** 的两条关键阻断路径。

---

## 🛠 重要 PR 进展

⚠️ **过去 24 小时内仓库无 PR 更新记录**。从社区反馈推断，近期 PR 工作可能集中在以下方向（尚未进入合并区间的可见活动）：

- Skill 系统 `disable-model-invocation` 路径修复（对应 #4438、#4637）
- 进程级 token 刷新机制（对应 #4929）
- 自定义端点模型 ID 透传（对应 #4680）
- 插件 marketplace 校验放宽（对应 #4969）
- `/ask` 窗口自适应高度（对应 #4951）

如需追踪具体提交，建议直接关注 [Copilot CLI PRs 列表](https://github.com/github/copilot-cli/pulls)。

---

## 📈 功能需求趋势

| 趋势类别 | 代表性 Issue | 关注度 |
|---|---|---|
| **系统提示词精简 & CLI 化** | [#2627](https://github.com/github/copilot-cli/issues/2627) [#232](https://github.com/github/copilot-cli/issues/232) [#1527](https://github.com/github/copilot-cli/issues/1527) | 🔥🔥🔥 极高（token 开销与定制自由度） |
| **Skill / Agent 系统健壮性** | [#4438](https://github.com/github/copilot-cli/issues/4438) [#4637](https://github.com/github/copilot-cli/issues/4637) [#4838](https://github.com/github/copilot-cli/issues/4838) [#3123](https://github.com/github/copilot-cli/issues/3123) | 🔥🔥🔥 极高（headless / skill 解析多路径冲突） |
| **认证与长会话稳定性** | [#4929](https://github.com/github/copilot-cli/issues/4929) [#4103](https://github.com/github/copilot-cli/issues/4103) | 🔥🔥 高 |
| **MCP 生态集成** | [#4089](https://github.com/github/copilot-cli/issues/4089) [#4907](https://github.com/github/copilot-cli/issues/4907) [#4946](https://github.com/github/copilot-cli/issues/4946) | 🔥🔥 高 |
| **跨端/跨产品体验** | [#4082](https://github.com/github/copilot-cli/issues/4082) [#4775](https://github.com/github/copilot-cli/issues/4775) | 🔥🔥 高 |
| **自定义/企业模型支持** | [#4680](https://github.com/github/copilot-cli/issues/4680) [#4960](https://github.com/github/copilot-cli/issues/4960) [#4887](https://github.com/github/copilot-cli/issues/4887) | 🔥🔥 高 |
| **输入/编辑交互改进** | [#2199](https://github.com/github/copilot-cli/issues/2199) [#3138](https://github.com/github/copilot-cli/issues/3138) [#4787](https://github.com/github/copilot-cli/issues/4787) | 🔥 中 |
| **Windows 终端渲染** | [#3501](https://github.com/github/copilot-cli/issues/3501) | 🔥 中（已闭合，回归风险点） |

---

## 💬 开发者关注点

1. **Token 经济性焦虑** —— 社区对系统提示词 + 工具定义动辄 29K+ token 的"硬性开销"怨声载道，要求可裁剪、可旁路。`--system-prompt` 这类 CLI 选项是呼声最集中的"低成本改进"。

2. **Skill/Agent 行为的不确定性** —— `disable-model-invocation` 与 `skill()` 工具、slash 显式调用、headless `-p` 模式之间出现多种互相冲突的解析路径；模型在 Plan Mode 越权实现功能（#1569）等老问题仍在复发，开发者对 Agent 可控性、可观察性需求强烈。

3. **认证/MCP 长会话稳定性塌方** —— Token 失效必须重启（#4929）、MCP 重连刷屏（#4907）、后台 shell 完成触发 400（#4946）、私有仓库 marketplace 鉴权失败（#4103），可见对**长时间无人值守场景**的可靠性，工程化诉求已超过功能诉求。

4. **自定义/企业模型可用性鸿沟** —— OpenAI 兼容端点被硬编码模型名（#4680）、企业模型仅展示不可选（#4960）、Auto 模式下 `/ask` / `/btw` 报错（#4887），三连击反映出 **BYOK 与 Enterprise 模型路由尚未准备好"开箱即用"**。

5. **跨端体验割裂** —— CLI ↔ Desktop 会话不同步、Copilot Web Mission Control 链接 404，说明 GitHub 自家产品矩阵的"任务/会话"概念尚未统一，开发者需要更强的 [任务-会话-设备三元一致性](https://github.com/github/copilot-cli/issues/4082)。

6. **小交互痛点高频化** —— Ctrl+Backspace 删词（#2199）、编辑中切换模型不丢草稿（#3138）、`/ask` 窗口自适应（#4951）、滚动条字符错位（#3501，已修）、Dictation 周期性吞字（#4787）等"看似微小但每分钟遭遇"的问题累计起来显著拉低日常使用信心。

---

> 📊 **小结**：v1.0.89-4 的模型路由自动化是良好开始，但社区当前最痛的并非"模型怎么选"，而是 **如何让长任务不掉链、Skill/Agent 行为可预期、自定义模型真正可用**。建议团队排期时优先处理认证刷新、Skill 解析一致性、系统提示词精简三类问题。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-26

---

## 📌 今日速览

今日 OpenCode 仓库共更新 **50 条 Issues** 与 **50 条 Pull Requests**，整体进入以**修补与稳定性收敛**为主的阶段——没有新版本发布，但多个面向 V2 架构的修复 PR（如 `codemode` 边界收紧、WebSocket 流失败计数、MCP OAuth 跨进程串行化）集中出现，反映团队正在系统性地收尾由 V1 → V2 迁移遗留的兼容性问题。社区讨论焦点集中在 **使用量与配额可视化**、**Desktop 应用在 Windows 下的稳定性**、以及 **第三方/海外模型 Provider 兼容性**三大方向。

---

## 🚀 版本发布

无（最近 24 小时内未发布新版本）。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 👍 | 价值判断 |
|---|-------|------|------|----|----------|
| 1 | [#9281](https://github.com/anomalyco/opencode/issues/9281) **统一使用量跟踪 `/usage`** | CLOSED | 12 | **34** | 呼声最高的 Feature Request：OAuth 登录后看不到配额消耗，被合并入 #9545 统一推进。 |
| 2 | [#29703](https://github.com/anomalyco/opencode/issues/29703) **更改项目路径不丢会话** | CLOSED | 10 | **25** | 第二高赞：用户重命名/移动目录即丢失全部历史，影响核心使用体验。 |
| 3 | [#13877](https://github.com/anomalyco/opencode/issues/13877) **`/sessions` 只显示近期会话** | CLOSED | 11 | 7 | TUI 关键 UX 缺陷：老会话被截断可见列表，长期用户无法回溯。 |
| 4 | [#35839](https://github.com/anomalyco/opencode/issues/35839) **第三个实例启动会删掉全局 CLI（Windows）** | CLOSED | 7 | 0 | 严重 Windows 回归：日常多窗口用户被"静默卸载"工具。 |
| 5 | [#28596](https://github.com/anomalyco/opencode/issues/28596) **工具调用死循环** | CLOSED | 6 | 0 | 模型在 exec/工具上无限重复同参数，影响 Agent 可用性。 |
| 6 | [#37381](https://github.com/anomalyco/opencode/issues/37381) **Composer 添加消息队列与中断控制** | CLOSED | 6 | 0 | 流式输出期间无法排队下一条 prompt，迫使频繁打断。 |
| 7 | [#27928](https://github.com/anomalyco/opencode/issues/27928) **远程附加会话出现重复消息** | CLOSED | 5 | 0 | Server/远程连接模式下的关键同步 Bug。 |
| 8 | [#36134](https://github.com/anomalyco/opencode/issues/36134) **启动时直接进入 Session Picker（如 `-r`/`--resume`）** | CLOSED | 5 | 2 | 解决 `ses_...` ID 难记的日常痛点。 |
| 9 | [#51430](https://github.com/anomalyco/opencode/issues/51430) **Desktop 本地回环连接链接（loopback）** | **OPEN** | 4 | 0 | 当日新开，已被 PR #51431 接走实现。 |
| 10 | [#38931](https://github.com/anomalyco/opencode/issues/38931) **`tui.json` 支持 `cursor_style` 配置** | CLOSED | 4 | 0 | TUI 体验细节：硬编码方块光标忽略终端原生配置。 |

> 说明：今日榜单中 **Windows Desktop 稳定性类** Issue 数量异常密集（#35839 / #36833 / #36234 / #39119 / #39141 等），是社区关注度最集中的方向之一。

---

## 🛠 重要 PR 进展（精选 10 条）

| # | PR | 方向 | 亮点 |
|---|----|------|------|
| 1 | [#51436](https://github.com/anomalyco/opencode/pull/51436) **`fix(core)`: 后台 shell 轮询指令收紧** | 行为优化 | 重写 agent 在命令转入后台后收到的轮询建议，减少无效轮询，与近期会话中 agent 反复轮询的趋势直接对应。 |
| 2 | [#51407](https://github.com/anomalyco/opencode/pull/51407) **`fix(codemode)`: 替换串/参数/递归/thenable 边界收敛** | 安全与稳定性 | 递归与分配审计首组补丁——六处精确局部修复，曾一致跑到 `timeoutMs`。 |
| 3 | [#51405](https://github.com/anomalyco/opencode/pull/51405) **`feat(cli)`: `--session-id` 指定创建会话** | 新功能 | 解决外部启动器（多路复用器、Agent host）创建带 ID 会话的需求，闭合 #50464。 |
| 4 | [#51426](https://github.com/anomalyco/opencode/pull/51426) **`feat(core)`: Agent Manager + Task Graph 管线** | 平台架构 | **阶段性大 PR**：10 个生命周期状态、`multiagent-run`、任务图，标志平台向"agent-first"演进。 |
| 5 | [#51431](https://github.com/anomalyco/opencode/pull/51431) **`fix(desktop)`: 保留已选目录并提议本地连接链接** | Desktop | 直接接住 #51430 的设计提案，并修 #50821 显式目录选择；与 #29869 / #43316 联动。 |
| 6 | [#51422](https://github.com/anomalyco/opencode/pull/51422) **`fix(core)`: 恢复 `instructions` 配置解析** | 回归修复 | V2 漏移植 legacy 解析器，补回同时闭合 #51341 与 #51262。 |
| 7 | [#51429](https://github.com/anomalyco/opencode/pull/51429) **`feat(usage)`: 用量显示币种可配置** | 新功能 | 续接曾被关闭的 #41208，让成本展示脱离硬编码 USD，闭合 #32485。 |
| 8 | [#51433](https://github.com/anomalyco/opencode/pull/51433) **`fix(desktop)`: Windows 添加 About 菜单** | 小修补 | 国际化 Help > About，触发 Electron 原生关于对话框，闭合 #51085。 |
| 9 | [#50994](https://github.com/anomalyco/opencode/pull/50994) **`fix(core)`: MCP OAuth 跨进程串行化刷新** | 安全 | 修复后台服务、`acp`、`run --standalone` 共享凭据并发刷新导致的 refresh token 失效（#34520）。 |
| 10 | [#46131](https://github.com/anomalyco/opencode/pull/46131) **`fix(opencode)`: `auth.json` 锁内原子写入** | 安全 | 两处独立 commit，分别解决 env snapshot 误持久化与并发覆盖丢凭据（#46128）。 |

> 其他值得跟进：#51435（`rawPlaceholders` TUI 透传）、#49691（bash 路径反斜杠转义）、#50955（WebSocket 流失败计数）、#40149（工作树外绝对路径权限匹配）、#50911（MCP 数字 timeout 兼容）。

---

## 📈 功能需求趋势

从本期 50 条 Issue 提炼，社区诉求呈现如下结构：

| 方向 | 代表 Issue | 占比与观察 |
|------|------------|-----------|
| **用量/成本可视化** | #9281、#51429 | 出现"统一 `/usage` + 币种可配"的闭环，社区希望摆脱"逐 provider 去看 dashboard"。 |
| **会话管理与持久化** | #13877、#29703、#36134、#51405、#39149、#27928 | 占比最大：会话列表、路径迁移、启动恢复、ID 指定、跨设备同步——是当前最迫切的产品线。 |
| **Desktop 稳定性（尤其 Windows）** | #35839、#36833、#36234、#39119、#39141、#51433、#51430、#51431 | 8 条相关 Issue / PR，集中在崩溃、CLI 残留、工作目录切换、布局冻结。 |
| **Provider 兼容性扩展** | #39072（Synthetic）、#39087（SiliconFlow SSE）、#39124/39153/51424（Kimi/Go）、#39178（Zen 慢）、#39098（Kimi 乱码）、#36021（GLM-5.2 中文流） | 长尾但密集：国内/小众 provider 与 SSE schema、计费事件、错误处理的对齐需求显著上升。 |
| **Agent / 工具调用鲁棒性** | #28596、#33848、#39118、#39143、#37381 | "循环调用 / crash / 结构化输出关不掉 / 没法排队下一句"反映 V2 范式下 agent 控制面尚未完全成熟。 |
| **TUI / IDE 体验细节** | #38931（光标）、#51435（占位符透传）、#37381（队列） | 小但高频，关乎日常开发者手感。 |

---

## 👨‍💻 开发者关注点（高频痛点）

1. **Windows 是当前最大短板**：第三方实例把全局 CLI "静默卸载"、Desktop 频繁崩溃、跨工作目录切换冻结、卸载后 workspace 残留——每条都涉及核心可用性。
2. **凭据与并发安全成为新焦点**：同一周内 `auth.json` 原子写入、UTF-8 凭据编码（#46225）、MCP OAuth 跨进程刷新、配置文件原子写入（#50899）扎堆出现，反映 V2 多进程模型带来的新攻击面。
3. **远程 / 多设备使用仍是"半成品"**：附加会话出现重复消息、Windows 多目录同仓库切换失败、Desktop loopback 连接要靠 issue/PR 拼凑——体验割裂明显。
4. **Provider 适配是长期工程债**：Synthetic、

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-26

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：过去 24 小时

---

## 一、今日速览

过去 24 小时内 Pi 仓库无新版本发布，但社区活跃度维持高位：50 个 Issue 与 13 个 PR 获得更新。修复焦点集中在 **TUI 终端健壮性**（stdout 异常处理、扩展输出污染、鼠标/滚轮配置），同时 mitsuhiko 提交了备受关注的 **Codemode + MCP** 与 **Virtual Models** 两项大型实验性功能 PR。多个影响计费正确性的 Bug 被定位和修复（OpenRouter 2-3 倍价差、OpenAI Fast 档位计费错误）。

---

## 二、版本发布

⚠️ 过去 24 小时无新 Release。社区讨论和 PR 中引用的最新基线版本为 **v0.87.1**。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 评论 | 重要程度 |
|---|---|---|---|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | **[bug]** ESC 中断思考后卡在 "Working..." 状态 | 15 | ⭐⭐⭐ 自 v0.84.0 起持续一个月的稳定复现 Bug，必须 `pi -c` 重启才能恢复，影响大量重度用户。 |
| [#7885](https://github.com/earendil-works/pi/issues/7885) | **[生态]** npm 搜索自 8 月 4 日起不再索引新发布的 pi-package | 15 | ⭐⭐⭐ 直接影响 pi.dev/packages 画廊的完整性与扩展生态可见性，长期未修复。 |
| [#9803](https://github.com/earendil-works/pi/issues/9803) | **[bug]** 0.86.0 RPC steer 回归：扩展输入处理与队列无法关联 | 11 | ⭐⭐⭐ 破坏外部 RPC 客户端对 steer 结果的可靠性，已标记 CLOSED 但属关键回归。 |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | **[bug]** mistral-conversations 空内容 delta 打开空文本块（GLM 5.x 重放失败） | 7 | ⭐⭐ 解决 GLM 5.2 走原生 Mistral 通道时丢失提示缓存的长期 workaround 问题。 |
| [#8913](https://github.com/earendil-works/pi/issues/8913) | **[OPEN]** fullscreen 模式无条件启用 1003 鼠标追踪，无 opt-out | 6 | ⭐⭐ 影响 SSH、终端复用场景下的鼠标劫持问题，渲染层已有 `mouse` 选项但调用点未传入。 |
| [#3790](https://github.com/earendil-works/pi/issues/3796) | **[last-read]** 思维强度反向循环快捷键 | 6 | ⭐⭐ 用户体验高频诉求，5–6 级思维档位"超调"问题困扰重度用户。 |
| [#9980](https://github.com/earendil-works/pi/issues/9980) | **[bug]** OpenRouter 顶部开源模型计费偏差 2-3 倍 | 5 | ⭐⭐⭐ 直接影响用户账单，原因是模型目录使用最廉价 provider 价格，热门开源模型几乎全部中招。 |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | **[bug]** llama.cpp Responses API 工具调用重复与损坏 | 5 | ⭐⭐ 阻碍本地 LLM 后端的关键能力，原始 SSE 数据被精确还原。 |
| [#9579](https://github.com/earendil-works/pi/issues/9579) | **[bug]** 溢出图片恢复固定 16 MiB 预算超过小 provider 请求限制 | 5 | ⭐⭐ 暴露 hard-coded 容量对异构 provider 生态的不适配。 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | **[bug]** 自动压缩把全部 thinking 块塞进摘要 prompt，长会话必爆上下文 | 5 | ⭐⭐⭐ 推理模型重度用户必踩雷点，DeepSeek V4.1 等自托管模型完全无法完成 compaction。 |

**社区反应总览**：上述 Bug 中，#10031 与 #10033 是"日常使用级"痛点（每个深度用户都会遇到），#9980/#9974/#10034 则影响**计费与可观测性**——开发者对"实际花多少钱"的透明度极为敏感。值得注意的是 OPEN 状态的 #8913 与 #9980 涉及核心架构决策，未在 24 小时内关闭，说明维护团队仍在评估方案。

---

## 四、重要 PR 进展（精选 10 条）

| # | PR | 作者 | 内容亮点 |
|---|---|---|---|
| [#10057](https://github.com/earendil-works/pi/pull/10057) | fix(tui): stdout 断开时不退出进程 | mariobgsp | 修复 #10056，`EPIPE/ECONNRESET` 不再触发 `process.exit(1)`，丢失终端不再伪装为崩溃。 |
| [#10051](https://github.com/earendil-works/pi/pull/10051) | feat(client): MCP OAuth 动态客户端注册错误映射 | Kishan1835 | 新增 `oauth-errors.ts` 与 `auth-wrapper.ts`，让不支持 DCR 的 MCP 服务器给用户可操作的错误提示。 |
| [#10050](https://github.com/earendil-works/pi/pull/10050) | fix(coding-agent): 扩展 console 输出不再覆盖 TUI | autopeasant | 修复 #10002，将扩展 `console.*` 与原始 stdout/stderr 写入重定向到 TUI 渲染层之外，避免布局错乱。 |
| [#10040](https://github.com/earendil-works/pi/pull/10040) | **feat(coding-agent): Codemode + MCP** | mitsuhiko | ⭐ 大型 PR，让 Jev 等模型获得良好沙箱；MCP 支持整体引入，社区关注度极高。 |
| [#10035](https://github.com/earendil-works/pi/pull/10035) | **feat: Virtual Models（实验性）** | mitsuhiko | 实验性虚拟模型抽象层，可能为多模型路由、级联策略铺路。 |
| [#10044](https://github.com/earendil-works/pi/pull/10044) | fix(ai): openai SDK 升级至 7.19.0 | davidbrai | 添加 `fast` service tier 类型以正确计价 GPT-6 Fast 模式，回应 #10034。 |
| [#10039](https://github.com/earendil-works/pi/pull/10039) | fix(coding-agent): 自定义主题支持 truecolor | christianklotz | 解决环境变量与终端能力冲突时的色彩模式解析。 |
| [#10037](https://github.com/earendil-works/pi/pull/10037) | perf: 折叠历史工具输出 | gerynugrh | 长会话渲染性能优化，配合 #10033 compaction 修复形成完整上下文治理闭环。 |
| [#10027](https://github.com/earendil-works/pi/pull/10027) | fix(ai, coding-agent): 流式健壮性、推理夹紧、压缩有效性、编辑恢复 | rahulrajaram | 来自日常使用的累计健壮性修复集，覆盖 OpenRouter 与本地网关。 |
| [#6933](https://github.com/earendil-works/pi/pull/6933) | fix: 默认禁用 undici 空闲超时以兼容本地 LLM | 3194603353 | 默认 idle timeout 由 5 分钟改为 0，修复 vLLM/LM Studio/llama.cpp/Ollama 慢评估场景下的连接中断。 |

---

## 五、功能需求趋势

从 Issues 中提炼的高频方向：

1. **🖥️ TUI 体验精细化** —— 鼠标追踪可关闭（#8913）、滚轮步长可配置（#9758）、主题 truecolor 支持（#10039）、扩展输出隔离（#10002/#10050）。社区从"能用"转向"好用"。
2. **💰 成本透明度与计费正确性** —— OpenRouter 价差（#9980）、OpenAI Fast 档位（#10034/#10044）。多 provider 时代下"到底花了多少钱"成为开发者最敏感指标。
3. **🧠 思维强度控制体验** —— 反向循环（#3790/#6281）、Anthropic `thinking.display` 可控（#9905）。推理模型普及带来的 UX 缺口。
4. **🧩 扩展/插件生态** —— MCP + Codemode（#10040）、虚拟模型（#10035）、本地 LLM 兼容性（#6933）、Slash 命令参数补全（#1481）。
5. **🗜️ 长会话治理** —— 压缩触发逻辑（#10033）、历史工具输出折叠（#10037）、会话落盘时机（#10000）。是推理模型用户的硬需求。
6. **🌐 跨平台与远程场景** —— Windows Git Bash（PR #1）、Alacritty/SSH 特殊键失效（#10042）。

---

## 六、开发者关注点

通过 Issue/PR 文本分析，开发者反馈集中在以下痛点：

- **"卡死在 Working…" 类稳定性 Bug 是高频痛点**：#10031、#9918、#10048（in-flight 流拆除）、#9840（Kimi 退出挂起）—— 流式生命周期管理仍是当前风险面。
- **Provider 异构性带来的边缘情况**：#9674（Mistral）、#9974（llama.cpp）、#9980/#10034（OpenRouter/OpenAI）、#9962（自定义 provider 启动竞态）—— 多 provider 抽象的"细节漏洞"是开发者社区投入大量精力的方向。
- **"会话丢失" 恐惧**：#10000（首轮失败会话全部丢失）、#10048（流拆除丢 turn）、#10033（compaction 永久卡死）—— 不可逆数据丢失类 Bug 引发强烈共鸣。
- **可观测性诉求**：#9098（暴露 RPC prompt disposition）、#9980（计费透明）、#9980、#9905（thinking.display 暴露）—— 开发者希望"系统对自己诚实"。
- **生态流量入口受阻**：#7885（npm 索引停滞 6 周以上）反映扩展作者对分发链路的高度依赖，一旦断开直接影响采用率。

---

**日报小结**：今日 Pi 仓库处于"密集维护 + 实验性大 PR 并行"的状态。Codemode/MCP/Virtual Models 三项战略性功能（均由 mitsuhiko 推动）若合并，将显著扩展 Pi 的能力边界；同时 TUI 健壮性、计费准确性、长会话治理等"基本盘"问题被密集修复。建议持续关注 #10031、#10033、#9980 三条与重度用户日常体验强相关的 Bug 走向。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-09-26**

---

## 📌 今日速览

今天的核心动态聚焦于 **Managed Agent 架构落地**——围绕提案 #12380 的多个阶段切片（W0b、W0c、O1a）密集提交，伴随 Qwen Code v0.24.6、Desktop v0.24.6 和 sdk-typescript v0.1.16 三件套发布。同时，**Windows 平台兼容性问题集中爆发**（自更新丢可执行位、ripgrep 报错、Windows 10 PowerShell 升级失败），以及 **PreToolUse Hook 竞争条件**安全漏洞被关闭，社区反馈呈现"架构演进 + 平台修缮"并行的态势。

---

## 🚀 版本发布

### v0.24.6（主版本）
- **SDK TypeScript v0.1.16**：捆绑 CLI 0.24.6/0.24.5，自动发布
- **Desktop v0.24.6**：修复 `serve` 会话创建失败诊断信息丢失（[#12331](https://github.com/QwenLM/qwen-code/pull/12331)），新增 SDK Java 托管运行时
- 无破坏性变更

### v0.24.5-nightly.20260925.c3a4058a0c
- 新增 Hosted Harness 私有客户端（[#12654](https://github.com/QwenLM/qwen-code/pull/12654)）
- Java 运行时 broker 守护测试固定

🔗 [v0.24.6 Release](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 评论数 | 重要性说明 |
|---|------|--------|--------|-----------|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Managed Agent 双路径架构与分阶段交付提案 | P2 | 24 | **本月最热**：定义 Managed Agent 总体架构，关联 W0a/W0b/W0c/O1 多切片 PR，是多智能体路线的"总纲" |
| [#12416](https://github.com/QwenLM/qwen-code/issues/12416) | Remote-SSH：POST /session 全部 EPIPE 失败 | **P1** | 13 | **生产环境阻塞**：Companion 0.24.2 + Remote-SSH 完全不可用，独立 CLI 正常，定位桥接通道问题 |
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | Web Terminal "PTY not available" + macOS 代码签名阻断 | **P1** | 14 | 已关闭，Web Shell 关键功能在 macOS/Remote 环境完全不可用，影响开发者首次体验 |
| [#8586](https://github.com/QwenLM/qwen-code/issues/8586) | 后台 Agent 的 `activeWork` 追踪与恢复 | P2 | 10 | 多智能体长期运行的关键能力，补齐后台 Agent 跨前台提示的恢复路径 |
| [#472](https://github.com/QwenLM/qwen-code/issues/472) | `is_background` 字段缺失/类型错误（In-Process 引擎） | — | 14 | **历史悠久**：2025-08 至今，shell 工具背景运行报错，社区反复反馈仍未根治 |
| [#12679](https://github.com/QwenLM/qwen-code/issues/12679) | 新装全局包 ripgrep 无可执行位，自更新无法自愈 | **P1** | 4 | 全新安装即触发，所有搜索/扫描功能不可用，根因在 npm 包打包未保留执行位 |
| [#12683](https://github.com/QwenLM/qwen-code/issues/12683) | PreToolUse 多 hook 时 deny 被 allow 静默覆盖 | **P1 安全** | 4 | **高危安全漏洞**：竞争条件下后完成的 hook 覆盖前者 deny 决策，已关闭修复 |
| [#12723](https://github.com/QwenLM/qwen-code/issues/12723) | O1 阶段：tool-result 引用契约与本地捕获适配器 | P2 | 4 | Managed Agent 关键一步：让工具完整输出可寻址、可恢复 |
| [#12169](https://github.com/QwenLM/qwen-code/issues/12169) | Batch API 上传绕过固定 dispatcher（代理环境全失败） | P2 | 5 | 企业网络/中间人 TLS 环境批量 API 上传全部失败，其他接口正常 |
| [#10603](https://github.com/QwenLM/qwen-code/issues/10603) | ToolSearch 触发 llama.cpp 完整 prompt 重新处理 | P2 | 5 | 性能问题：工具搜索触发不必要的 prefill，本地推理体验受损 |

---

## 🛠 重要 PR 进展

| # | 类型 | 说明 |
|---|------|------|
| [#12730](https://github.com/QwenLM/qwen-code/pull/12730) | 文档 | 规划 Managed Agent 工作区执行与工具输出切片（W0c-1/W0c-2/O1a），系统梳理下一步切片边界 |
| [#12729](https://github.com/QwenLM/qwen-code/pull/12729) | 新功能 | 定义 `managed-tool-result/1` 契约，让工具输出捕获为不可变段并按引用寻址——Managed Agent 阶段 O1 的关键拼图 |
| [#12725](https://github.com/QwenLM/qwen-code/pull/12725) | 发布 | sdk-typescript v0.1.16 自动发布 PR |
| [#12718](https://github.com/QwenLM/qwen-code/pull/12718) | 修复 | 修复 Windows 145 + macOS 2 个夜间 CI 红腿：容忍 win32 directory-sync 拒绝、修复大小写/非 UTF-8 文件系统测试 fixture |
| [#12713](https://github.com/QwenLM/qwen-code/pull/12713) | 新功能 | 启用私有 Hosted Harness 无工具文本回合——Java 客户端可创建/加载 Managed Session、SSE 读取、取消回合 |
| [#12709](https://github.com/QwenLM/qwen-code/pull/12709) | 新功能 | W0b 切片：允许接收工作区绑定但未执行的 Session，固化七字段绑定与冻结配置引用 |
| [#12705](https://github.com/QwenLM/qwen-code/pull/12705) | 修复 | `web_fetch` HTTP→HTTPS 升级失败时新增 `EHOSTUNREACH/ENETUNREACH` 触发回退（解决 [#12699](https://github.com/QwenLM/qwen-code/issues/12699)） |
| [#12698](https://github.com/QwenLM/qwen-code/pull/12698) | 新功能 | ACP Bridge 同时支持 Legacy 和 Managed 双引擎，服务器端选路，共享 Session 接纳与 ID 预留 |
| [#10949](https://github.com/QwenLM/qwen-code/pull/10949) | 新功能 | 后台 Agent View：`qwen sessions peek/answer/stop` 子命令三件套，配合 #10943 的 `--bg` 启动 |
| [#12582](https://github.com/QwenLM/qwen-code/pull/12582) | 新功能 | 跨机 Agent 运行：Runtimes 页面发起单次加入令牌，绑定 Codex/Claude Code 跨机器协作，A2A 协议外部分享 |

---

## 📈 功能需求趋势

1. **🏗️ Managed Agent 架构（最高热度）**
   - 围绕 #12380 提案形成 6+ 个关联 Issue/PR：W0a 工作区绑定、W0b 无执行接纳、W0c 执行目录、O1 工具结果契约、F 阶段测试覆盖
   - 社区共识：双路径架构（保留 TS agent loop + 模型推理与工具环境解耦）、Session 持有 Workspace 绑定、工具可恢复、WebSocket 稳定通信

2. **🤝 跨引擎与跨机器协作**
   - 与 Codex、Claude Code 互操作（[#12582](https://github.com/QwenLM/qwen-code/pull/12582)）
   - A2A 协议外部分享 Agent
   - Computer Use 跨机远程桌面中继（[#11799](https://github.com/QwenLM/qwen-code/pull/11799)）

3. **🪟 Windows 平台体验**
   - 自更新机制（[#12679](https://github.com/QwenLM/qwen-code/issues/12679)、[#12668](https://github.com/QwenLM/qwen-code/issues/12668)、[#12727](https://github.com/QwenLM/qwen-code/issues/12727)、[#12687](https://github.com/QwenLM/qwen-code/issues/12687)）
   - 非 UTF-8 系统代码页编码检测（[#8278](https://github.com/QwenLM/qwen-code/issues/8278)）
   - ripgrep、PTY 等系统依赖的可执行位与打包

4. **🔍 Web Fetch 与网络韧性**
   - HTTP→HTTPS 升级回退路径补全（[#12699](https://github.com/QwenLM/qwen-code/issues/12699)、[#12720](https://github.com/QwenLM/qwen-code/issues/12720)）
   - AggregateError 多地址分类
   - Batch API 走代理 dispatcher

5. **🔐 权限与安全**
   - PreToolUse Hook 竞争条件（[#12683](https://github.com/QwenLM/qwen-code/issues/12683)）
   - MCP 服务器规则碰撞避免（[#12531](https://github.com/QwenLM/qwen-code/pull/12531)）
   - heredoc 与权限规则匹配（[#9417](https://github.com/QwenLM/qwen-code/pull/9417)）

6. **🎨 Web Shell / Desktop UI**
   - 当前选中 Session 无法删除（[#12619](https://github.com/QwenLM/qwen-code/issues/12619)，已关）
   - Live Voice 新建任务路由错误（[#12620](https://github.com/QwenLM/qwen-code/issues/12620)，已关）
   - /context 估算状态下 `Messages` 行误导（[#12606](https://github.com/QwenLM/qwen-code/issues/12606)）

---

## 💬 开发者关注点

**核心痛点**

1. **后台 Agent 失控恢复缺失**（#8586、#10949、#10943）：长时间运行的后台会话无法观测、无法回答提问、无法优雅停止，被多次强调为"生产可用性"瓶颈。

2. **WSL/Remote-SSH 场景断裂**（#12416）：Companion + 远程开发是主流工作流，但桥接通道稳定性差、独立 CLI 与 Companion 行为不一致，导致用户被迫回退到裸 CLI。

3. **自更新链路脆弱**（#12679、#12668、#12727、#12687）：同一类问题在 24 小时内从 4 个不同用户、不同角度被复现，说明 `qwen --update` → `npm` → 解包流程未做端到端验证。

4. **Web Terminal 在 macOS 直接不可用**（#11872）：@lydell/node-pty 未捆绑 + 代码签名阻断预构建依赖，导致 macOS 用户首次打开 Web Shell 即遭遇 PTY 错误。

5. **后台会话恢复后 hook 静默覆盖安全决策**（#12683）：这是 Hook 系统的设计级缺陷，社区呼吁不仅修复 bug，还应引入 hook 决策聚合语义。

6. **In-Process 引擎 `is_background` 历史遗留**（#472）：14 条评论、跨一年仍未根治，反映 In-Process 引擎与文档/Schema 长期脱节。

7. **文档死链与扩展性指南缺失**（#12716）：用户文档 7 处 404，涉及 GitHub Action、Extensions、Privacy 页面，影响新用户 onboarding。

---

> 📊 **数据口径**：基于 QwenLM/qwen-code 仓库 2026-09-25 ~ 2026-09-26 更新数据，共统计 47 条活跃 Issue、50 条活跃 PR。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-09-26
**数据来源**：[Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)（注：相关 Issue/PR 主要指向 [Hmbown/Codewhale](https://github.com/Hmbown/Codewhale) 仓库，疑似关联项目）

---

## 1. 今日速览

今天社区的核心动态集中在 **0.10.1 版本的"修复之夜"批次合并**：多个针对首次运行体验、信任机制、运行时稳定性的关键修复 PR 已关闭合并，包括首次运行 onboarding（#6592）、MCP/插件代码模式统一审批门（#6583）、turn-loop guard 统一（#6588）等。同时，TypeScript + Cordis 扩展宿主（#6600）作为 Phase 1 开放，标志着扩展架构正式向 DeepSeek Harness (DSH) 模型迁移。社区也在热烈讨论一些高优先级问题，如多 TUI 会话导致的 CPU 自旋（#6573）和"指令来源可追溯"机制（#6585）。

---

## 2. 版本发布

过去 24 小时内无新版本发布。最新版本仍为已发布的 0.10.0，社区目前处于 0.10.1 的修复与信任/运行时分支合并阶段。

---

## 3. 社区热点 Issues（精选 10 条）

| # | 编号 | 标题 | 状态 | 重要性 |
|---|------|------|------|--------|
| 1 | [#6566](https://github.com/Hmbown/Codewhale/issues/6566) | **首次运行：新用户看不到 onboarding；首条消息丢失或重复** | 已关闭 | 🔴 高：直接阻碍新用户体验，发现 80x24/160x45/zh_CN 下多个面向开发者的问题 |
| 2 | [#6573](https://github.com/Hmbown/Codewhale/issues/6573) | **多 TUI 会话争抢 Subagents Store 导致 CPU 自旋** | 开放 | 🔴 高：FreeBSD 15 上多个空闲进程占满 CPU，可能跨平台 |
| 3 | [#6585](https://github.com/Hmbown/Codewhale/issues/6585) | **让"谁的指令生效"可验证：指令与记忆溯源** | 开放 | 🟠 高：创始人批准方向，涉及指令文件与记忆的快照不可变性、代理文本作为声明 |
| 4 | [#6562](https://github.com/Hmbown/Codewhale/issues/6562) | **MCP/插件代码模式：单一共享审批门** | 已关闭 | 🟠 高：基于 81 个会话、11,574 次工具调用的研究；MCP 占 3% 调用但 71% token 成本，Cursor 模式节省 46.9% token |
| 5 | [#6510](https://github.com/Hmbown/Codewhale/issues/6510) | **codewhale exec 无 --auto 绕过 Engine，双 prompt 路径** | 已关闭 | 🟠 高：揭示了 exec 与 review 路径的"第二权威"问题 |
| 6 | [#6603](https://github.com/Hmbown/Codewhale/issues/6603) | **可选 Decision Gate 加速常规代理决策** | 开放 | 🟡 中：为每条消息唤醒大模型浪费 1-3 秒和成本 |
| 7 | [#6528](https://github.com/Hmbown/Codewhale/issues/6528) | **凭证设置：剥离粘贴键的不可见字符** | 已关闭 | 🟡 中：BOM、零宽空格导致 401，需指明 provider/host/key 来源 |
| 8 | [#6500](https://github.com/Hmbown/Codewhale/issues/6500) | **模型选择：固定模型与加入 Fleet 均失效** | 已关闭 | 🟡 中：模型选择子菜单的两个动作均不工作 |
| 9 | [#6582](https://github.com/Hmbown/Codewhale/issues/6582) | **hooks：shell tool_call_after 的 stdin 结构化执行回执** | 开放 | 🟡 中：MemWhale 插件需求，希望在标准输入上接收命令/退出码/输出 |
| 10 | [#6563](https://github.com/Hmbown/Codewhale/issues/6563) | **codewhale config set 静默接受拼写错误** | 已关闭 | 🟢 中：`calm_mode` 写入错误位置，did-you-mean 使用陈旧键列表 |

**社区反应**：今日 15 个更新 Issue 中 12 个已关闭，显示社区与维护者处理效率极高；多数已关闭 Issue 在 24 小时内即获修复并合入 PR。

---

## 4. 重要 PR 进展（精选 10 条）

### 已合并的关键修复

| # | 编号 | 标题 | 说明 |
|---|------|------|------|
| 1 | [#6592](https://github.com/Hmbown/Codewhale/pull/6592) | **fix(tui): 首次运行连接模型，消息不丢失，工作条 + 失败默认关闭** | 关闭 #6566：无密钥启动直接打开 provider picker；Esc 可返回；approval 保存失败回退到失败关闭状态 |
| 2 | [#6583](https://github.com/Hmbown/Codewhale/pull/6583) | **feat(codemode): 通过单一审批门进行 MCP/插件调用** | 关闭 #6562：嵌套调用通过 `plan_tool_calls` 与 `request_tool_approval`，统一授权与分组 |
| 3 | [#6588](https://github.com/Hmbown/Codewhale/pull/6588) | **fix(runtime): turn-loop guard 覆盖子代理与 RLM 循环** | 关闭 #6510：单一测试 `single_turn_loop.rs` 覆盖 `create_message*` 家族，子代理与 RLM 循环纳入同一护栏 |
| 4 | [#6586](https://github.com/Hmbown/Codewhale/pull/6586) | **refactor(split): codewhale-runtime crate 边界收敛 RS-0..RS-7** | 创建 `codewhale-runtime`，将无 UI 依赖的模块迁移并加边界 ratchet，防止 UI 泄漏回运行时 |
| 5 | [#6587](https://github.com/Hmbown/Codewhale/pull/6587) | **fix(tui): 右键覆盖所有表面；行为符合承诺** | 修复右键在转写、菜单等表面失效问题；Open in editor 保持在工作区内 |
| 6 | [#6584](https://github.com/Hmbown/Codewhale/pull/6584) | **fix: 移除不防具体危害的能力限制** | "一层仅在指明其防范的危害时才保留"原则下的能力审计清理 |

### 仍开放的关键工作

| # | 编号 | 标题 | 说明 |
|---|------|------|------|
| 7 | [#6600](https://github.com/Hmbown/Codewhale/pull/6600) | **feat(extensions): TypeScript + Cordis 扩展宿主 Phase 1（标志位后）** | 创始人方向：插件/MCP/可扩展性统一迁向 DSH 模型，Rust 内核保持权威 |
| 8 | [#6601](https://github.com/Hmbown/Codewhale/pull/6601) | **fix(trust): 凭证静态遮蔽、诚实审批超时、默认失败关闭** | B1/B3 信任分支：进入 transcript 即遮蔽凭证，授权超时显式失败 |
| 9 | [#6602](https://github.com/Hmbown/Codewhale/pull/6602) | **fix(runtime): 撤销修复、审批等待、运行时 hooks、编辑完整性** | B2-B7 运行时修复批次：快照缺失提交时撤销修复；hooks 在运行时线程上生效 |
| 10 | [#6580](https://github.com/Hmbown/Codewhale/pull/6580) | **feat(runtime-api): 在指定回合分叉线程** | 新端点 `POST /v1/threads/{id}/fork-at-turn`；VSCode 客户端部分单独交付 |

---

## 5. 功能需求趋势

从今日 15 条 Issue 中提炼出社区最关注的方向：

1. **首次用户体验（Onboarding）** — #6566 揭示全新用户安装后"无 onboarding、首条消息丢失/重复"是最高优先级问题，已通过 #6592 合并修复
2. **MCP 与插件生态** — #6562（代码模式 + 单一审批门）、#6583（嵌套调用统一授权）显示社区正推动 MCP 集成从"原始调用"走向"代码即编排"
3. **可扩展性架构迁移** — #6600（TypeScript + Cordis）标志 Rust 核心向 DSH 模型过渡，扩展层与权威内核边界明确
4. **性能与延迟** — #6573（CPU 自旋）、#6603（Decision Gate）反映对"每条消息唤醒大模型"成本的不满
5. **信任与可追溯** — #6585（指令来源溯源）、#6601（凭证遮蔽、超时失败关闭）、#6528（凭证不可见字符）形成完整信任链
6. **协作功能** — #6580（线程分叉）、#6589（安全 `/share`、worktree 清理、per-thread provider 切换）强化多用户/多代理协作场景
7. **运行时/UI 分层** — #6586（`codewhale-runtime` crate）正式确立 UI 与运行时边界，ratchet 防止反向依赖

---

## 6. 开发者关注点

社区反馈中的高频痛点：

- **🆕 新用户冷启动**：onboarding 缺失、provider picker/密钥错误信息"开发者化"、首条消息丢失或重复提交（#6566）
- **🌀 资源争用**：多个 TUI 会话同时打开时，Subagents Store 锁导致空闲进程 CPU 自旋（#6573）
- **🔐 凭证输入脆弱**：网页复制的 API key 含 BOM/零宽空格导致 401 错误，错误信息不指明 provider/host 来源（#6528）
- **⚙️ 配置静默失败**：`config set` 接受拼写错误并写入错误位置（如 `settings.toml` vs `config.toml`），`did-you-mean` 提示陈旧（#6563）
- **🤖 模型操作失效**：模型选择菜单的"固定"与"加入 Fleet"动作均不生效（#6500）
- **🧩 双权威风险**：`exec` 在无 `--auto` 时完全绕过 Engine，导致 review 与 exec 路径使用两套不同的 prompt 与审计（#6510）
- **📋 缺少会话回执**：开发者希望从现有 session 记录直接生成"会话做了什么"的回执列表，便于审计与对账（#6591）

---

**日报小结**：今日是 0.10.1 修复批次的高效合并日——14 条 PR 中 11 条为已关闭状态，重点修复集中在首次运行、运行时/UI 分层、信任与凭证、扩展架构迁移四大方向。开放 Issue 显示社区正密切关注性能（CPU 自旋）、决策成本（Decision Gate）和可追溯性（指令来源）三大中长期议题。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*