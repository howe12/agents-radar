# AI CLI 工具社区动态日报 2026-08-26

> 生成时间: 2026-08-26 00:55 UTC | 覆盖工具: 9 个

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
**日期：2026-08-26 | 工具覆盖：9 款主流 AI CLI**

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"代理体系成熟化"与"基础设施承压"并行**的阶段：一方面，主流工具普遍完成"模型/工具/MCP"三件套的基础搭建，开始向**多 Provider 一等公民化、Agent 生命周期治理、外部监督接口**等高阶能力演进；另一方面，**Windows 桌面稳定性、tool-call 鲁棒性、上下文生命周期管理**成为横跨几乎所有工具的结构性痛点，呈现"战略快、基础设施慢"的典型成长期特征。安全维度（OAuth/SSRF/凭证清理/扩展注入）与可观测性（遥测、会话状态、compaction 质量）从"加分项"升级为"准入门槛"。

---

## 二、各工具活跃度对比

| 工具 | 新版本 | Issues 关注 | PR 合入 | 整体节奏 |
|---|---|---|---|---|
| **Claude Code** | 2 个（v2.1.245/246） | Top 10 + 50 条聚类 | 1 | 重点修复期，权限/桌面/规则系统 |
| **OpenAI Codex** | 3 个 alpha（0.150.0-α.9/.10/.11） | Top 10 + 50 条聚类 | 10（bot 自动化） | 高频迭代 + PR 批量化 |
| **Gemini CLI** | 3 个（v0.58-preview/v0.57/nightly） | Top 10 | 10 | 双轨：稳定版 + 预览版并行 |
| **Copilot CLI** | 1 个（v1.0.81-10） | Top 10 + 45 条聚类 | 1 | 预发布质量波动 |
| **Kimi Code** | 0 | 2（P0 严重） | 0 | 🔴 异常低谷，疑似质量危机 |
| **OpenCode** | 1 个（v1.18.23） | Top 10 | 10 | 战略推进期 |
| **Pi** | 0 | **50** | **31** | ⚡ 内部迭代最活跃 |
| **Qwen Code** | 0 | Top 10 | 10 | `/review` 工业化攻坚 |
| **DeepSeek TUI** | 0（v0.9.12 RC 前夜） | 11+ | **23** | 控制面/UX 打磨收尾 |

> **数据观察**：Pi 与 Codex 在 PR 数量上领跑，但 Pi 是**功能性 PR**密集（adapter/工具/compaction），Codex 是**自动化合并**密集（copyberry[bot]）。Kimi Code 的"零动态"叠加 P0 写入 Bug，提示该工具在 2026-08 后已出现明显的工程化停滞信号。

---

## 三、共同关注的功能方向

### 1. 🔌 MCP 协议治理（Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode、Qwen Code）
- **共识**：MCP 已成为事实标准，但各家的稳定性参差不齐
- **典型诉求**：
  - draft-07 JSON Schema 兼容性（Claude Code #86142，已修）
  - 检测 vs 实际连接不一致（Copilot CLI #4542）
  - OAuth 跨平台兼容（Google Workspace issuer 斜杠问题 #4606）
  - MCP SSE 兼容性（Qwen Code #10056）
  - 控制台/UI 与 MCP 实际状态不一致（Codex #40715）
- **信号**：MCP 正从"功能丰富"走向"协议契约化"阶段

### 2. 🪟 Windows 平台体验（Claude Code、Codex、Gemini CLI、Pi、Copilot CLI、Qwen Code）
- **共识**：Windows 是几乎所有工具的最大质量债
- **典型诉求**：
  - MSIX 打包签名链路（Claude Code #80444/#85901）
  - 26.820 系列集中崩溃（Codex #39443/#40700/#34026/#40715）
  - PowerShell 5.1 vs pwsh 版本识别（Pi #8582）
  - Windows 长路径 PR diff 污染（Gemini CLI #28926）
  - worktree 归档 os error 32（Copilot CLI #4593）
  - Windows `@`-file TOCTOU 防护（Qwen Code #8227）

### 3. 🤖 Tool-call 鲁棒性（Claude Code、OpenCode、Gemini CLI、Pi、Codex）
- **共识**：从"能调通"升级为 P0 级议题
- **典型诉求**：
  - 修复畸形 tool 参数前置（OpenCode PR #45002）
  - 一行一词 O(n²) 流式解析（Pi #7698）
  - Qwen tool-call 返回空名字导致会话中止（OpenCode #33618）
  - 编辑工具 mismatch 错误信息误导（OpenCode PR #45092、Pi #8654）
  - 子代理 GOAL 状态错报（Gemini CLI #22323）

### 4. 🧠 上下文与压缩逻辑（Claude Code、Qwen Code、Kimi、Pi、OpenCode、Gemini CLI）
- **共识**：长会话稳定性已成跨工具共性瓶颈
- **典型诉求**：
  - compaction 预算未按上下文窗口缩放（Pi #8651）
  - /compact 静默失败（Claude Code #89040）
  - 退化摘要丢弃（Pi #8652）
  - OOM 与 tmux 终端错乱（Qwen Code #9198）
  - Auto Memory 无限重试（Gemini CLI #26522）
  - 上下文压缩后任务复活（Kimi #2523）

### 5. 🔒 企业安全与合规（Claude Code、Codex、Gemini CLI、Copilot CLI、OpenCode）
- **典型诉求**：
  - CVP 已批准仍被拦截（Claude Code #84352）
  - MCP OAuth 企业 IdP（Codex PR #40739/#40722）
  - MCP OAuth 元数据发现 SSRF（Gemini CLI PR #29081）
  - 扩展静默注入环境变量（Gemini CLI PR #28863）
  - Git remote 凭证清理（Codex PR #40713）
  - a2a-server 硬编码凭据（Gemini CLI PR #29067）

### 6. 🖥️ 桌面端体验补课（Claude Code、Codex、OpenCode、Copilot CLI）
- **典型诉求**：
  - Cmd+F 消息搜索（OpenCode #19143，👍8）
  - 控制其他设备选项卡（Codex #28919）
  - 流式 shell 输出（OpenCode PR #45106）
  - 深链接打开会话（OpenCode PR #45103）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | 权限工程 / 规则系统 / 企业合规 | 严肃工程团队、企业 | Anthropic 原生 + Permissions DSL + 网络防护 |
| **OpenAI Codex** | MCP OAuth 化 / 子代理编排 / 多端 | OpenAI 生态企业、桌面用户 | Rust 重写 + 自动化 PR 流水线 |
| **Gemini CLI** | AST 感知 / Auto Memory / 子代理成熟度 | 长会话代码理解、研究型用户 | Google 原生 + a2a-server + Gemini 3 |
| **Copilot CLI** | BYOK / IDE 集成 / GitHub 生态 | GitHub 重度用户、多模型需求 | 插件面板 + 模型选择器扩展 |
| **Kimi Code** | （近期失效）中文文档体验 | 国内用户 | 沉寂期，需关注修复节奏 |
| **OpenCode** | 多 Provider 一等公民 / 桌面打磨 | 自托管、跨模型、多端用户 | Effect/Zod + Groq/DeepInfra/Cerebras/Together/Azure CLI 全矩阵 |
| **Pi** | Provider 适配层 / Compaction / 流式 | 高级开发者、跨平台用户 | 多 adapter 抽象 + 强可恢复性 |
| **Qwen Code** | `/review` 工业化 / Web Shell | 代码评审密集、远程协作 | 阿里生态 + 多 Agent 协同 |
| **DeepSeek TUI** | 外部监督 / 无人值守 / Provider 中立 | DevOps、SRE、自动化场景 | Unix 套接字控制 + JSONL 事件流 + gix 替代 git CLI |

> **关键差异点**：
> - **Codex 与 OpenCode** 都在做"多 Provider 一等公民化"，但 Codex 偏 OpenAI 协议兼容，OpenCode 偏推理供应商中立
> - **Gemini CLI 与 Pi** 都在死磕 compaction 与流式渲染，但 Gemini 偏 AST 智能，Pi 偏工程可恢复性
> - **DeepSeek TUI 是唯一明确把"外部监督/无人值守"作为一等能力的工具**，定位独特

---

## 五、社区热度与成熟度评估

### 第一梯队（战略清晰 + 高频输出）
- **OpenAI Codex** — PR 全自动化批量推进，0.150 迭代线高频刷新，但**Windows 质量债最重**
- **OpenCode** — 单日合并 5 个新 Provider，战略节奏最快，但**生产可用性承压**（Zen 网关 500、自动更新器 266GB）
- **Pi** — 50 条 Issue + 31 条 PR，内部迭代最活跃，但**0.84.3 扩展加载失效**暴露 release 工程化短板

### 第二梯队（成熟稳定 + 渐进改进）
- **Claude Code** — 双版本精准打击（glibc 2.44 + 通配符权限安全），TUI/规则/桌面三大方向均有 P0 议题
- **Gemini CLI** — v0.57 收尾 + v0.58 preview 启动，子代理/Auto Memory/安全三线推进
- **Qwen Code** — `/review` 工业化 4 PR 同框，Web Shell 作为新控制台战略明朗

### 第三梯队（结构性问题 + 节奏不稳）
- **Copilot CLI** — v1.0.81 prerelease 集中爆发多个回归，社区处于"功能丰富、稳定性不足"
- **DeepSeek TUI** — 23 个 PR + 11 条 Issue 节奏紧凑，v0.9.12 RC 前夜，但相对小众

### 第四梯队（🔴 预警）
- **Kimi Code** — 24 小时内 0 Release / 0 PR / 仅 2 Issue，叠加 **#2617 P0 写入虚假成功**，是当前生态最值得警惕的"沉默型危机"案例

---

## 六、值得关注的趋势信号

### 📡 信号 1：Tool-call 鲁棒性已成为 P0 级行业议题
- **数据支撑**：OpenCode、Pi、Gemini CLI、Claude Code、Qwen Code 均有 tool-call 相关 P0/P1
- **判断**：未来 6 个月，"tool 参数前置修复 + 流式解析 O(1) 化 + 编辑工具错误信息诚实化"将成为各工具的军备竞赛焦点
- **参考价值**：自研 Agent 框架的团队应优先建设 **tool-call schema 校验前置层**

### 📡 信号 2：MCP 正在从"功能"走向"协议契约"
- **数据支撑**：MCP draft-07 兼容性、OAuth 跨平台、检测-连接一致性等问题普遍
- **判断**：MCP 急需**版本兼容策略 + 一致性测试套件**；各家将逐步收敛到 JSON Schema 2020-12 + OAuth 2.1 基线
- **参考价值**：选型 MCP 服务商时优先考虑**协议版本合规性**，而非功能丰富度

### 📡 信号 3：上下文生命周期管理是新的"性能战场"
- **数据支撑**：compaction 预算缩放、SKILL 上下文卸载、Auto Memory 收敛等问题几乎每家都有
- **判断**：从"compaction 是优化项"升级为"compaction 是核心架构"，与 KV-cache、前缀命中率、token 经济性深度耦合
- **参考价值**：长会话 Agent 需在产品设计阶段就规划**三段式上下文治理**（加载/压缩/遗忘）

### 📡 信号 4：外部监督 / 无人值守成为新前沿
- **数据支撑**：DeepSeek TUI 整套控制套接字/生命周期 outbox/`/relaunch` 矩阵；Codex Worktree 线程所有权；OpenCode 深链接打开会话
- **判断**：未来一年将出现**"AI CLI 即服务"**的产品形态，CLI 不再仅是终端工具，而是**可被外部编排的进程**
- **参考价值**：关注**Unix 套接字 + JSONL 事件流 + REST 控制面**这一组合范式

### 📡 信号 5：多 Provider 一等公民化进入"加速期"
- **数据支撑**：OpenCode 单日合并 Groq/DeepInfra/Cerebras/Together AI/Azure CLI 5 家；Pi 新增 Opper、SiliconFlow；Codex 持续打磨 OpenRouter/自定义 provider
- **判断**：自托管推理生态正在脱离"代理网关"模式，转向**"推理路由 + Provider 抽象层"**的标准架构
- **参考价值**：选型 CLI 时优先选择**协议中立**的工具，避免被单一供应商绑定

### 📡 信号 6：安全从"功能点"升级为"系统特性"
- **数据支撑**：Gemini CLI 单日 3 个安全 PR（SSRF、a2a 凭据、扩展注入）；Codex Git 凭证清理；OpenCode 历史会话格式修复
- **判断**：安全特性正在从补丁式响应转为**协议层防御**（OAuth SSRF、扩展 consent、凭证脱敏成为新基线）
- **参考价值**：在企业内部分发 AI CLI 时，**升级审计清单**应包含安全 PR diff

### 📡 信号 7：Windows 桌面是结构性短板，需"专项治理"

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-08-26 | 来源：anthropics/skills**

---

## 1. 热门 Skills 排行（按社区关注度）

| 排名 | PR | Skill 名称 | 核心功能 | 当前状态 |
|---|---|---|---|---|
| 🥇 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 关键修复** | 修复 `run_eval.py` 始终报告 0% recall 的问题（关联 [#556](https://github.com/anthropics/skills/issues/556)，12 评论），同时修复 Windows 流读取、触发检测、并行 worker；这是 description 优化循环能真正生效的前提 | OPEN |
|  | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 自动防止 AI 生成文档的"孤行/寡行/编号错位"等排版问题 | OPEN |
| 🥉 | [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 零成本多 Agent 编排：把机械任务下放给 headless [opencode](https://opencode.ai) 子代理，主模型只做规划/审阅/合并 | OPEN |
| 4 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit v1.3.0** | 输出前的自审计：先做机械文件校验，再按四维推理质量门控检查（适用任意项目） | OPEN |
| 5 | [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | SCNet 国家级超算集群操作（基于 Profile 的 SSH + Slurm 工作流） | OPEN |
| 6 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全栈测试模式（Testing Trophy + AAA + React Testing Library + E2E + 契约测试） | OPEN |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 两个元 Skill：跨 5 维度评估 Skill 质量、对 Skill 做安全审计 | OPEN |
| 8 | [#568](https://github.com/anthropics/skills/pull/568) | **ServiceNow 平台 Skill** | 覆盖 ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub | OPEN |

**讨论热点提炼：**
- **元能力修复**排名第一：#1298 修复的不是某个具体 Skill，而是"如何评估 Skill"的根基——评价管线本身就是噪声，所有基于它的 description 优化都在盲飞。
- **质量门控类**集中爆发：#1367、#83 都瞄准"输出可信度"，呼应 Issue #1385 的"三阶段质量门控管道"提案。
- **企业级平台**被持续提报：ServiceNow (#568)、SAP-RPT-1-OSS (#181) 显示 Skill 正在从个人开发者工具进入企业 IT 范畴。

---

## 2. 社区需求趋势（Issues 信号）

| 趋势 | 代表 Issue | 评论数 | 共识程度 |
|---|---|---|---|
| 🔒 **命名空间信任与安全治理** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 伪装成 anthropic/ 官方命名空间 | **43** / 👍2 | 最高优先级，已被多次独立报告 |
| 🏢 **组织级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 上缺少企业 Skill 库/直链分享 | 16 / 👍8 | 高互动，且 8 个赞说明落地呼声强 |
| 🧪 **可用的评估/测试管线** | [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#1602](https://github.com/anthropics/skills/pull/1602) | 12+4 | 评测体系全面失效（0% recall、0/N 评分）是当前最大技术债 |
|  **上下文与状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory、[#1487](https://github.com/anthropics/skills/issues/1487) claude-api 单次注入 156k tokens 爆窗 | 9+4 | 长期 Agent 的核心瓶颈 |
| 🔗 **Skill ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) 把 Skill 暴露为 MCP | 4 | 协议层愿景，多次被提 |
| 📦 **企业系统接入** | [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint、 [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock | 4+4 | 私有化部署刚需 |
| 🤝 **多代理协作** | Hivemind [#1628](https://github.com/anthropics/skills/pull/1628)、[#1385](https://github.com/anthropics/skills/issues/1385) 三段质量门控 | 4 | 新兴方向 |
|  **文档生成质量** | 排版 (#514)、ODT 支持 (#486)、Word 跟踪变更冲突 (#541)、DOCX 空白重排 (#12) | 多 PR/Issue 簇 | 老问题，新提交密集 |

---

## 3. 高潜力待合并 Skills（近期可能落地）

按"功能缺口明显 + 已有 Issue 支撑 + 技术准备度高"排序：

1. **[#1298 skill-creator 修复](https://github.com/anthropics/skills/pull/1298)** — 阻塞整个 description 优化闭环，合并后 [#556](https://github.com/anthropics/skills/issues/556)、[#202](https://github.com/anthropics/skills/issues/202)（已关闭）等问题将被一并解决。**最高落地优先级**。
2. **[#83 skill-quality-analyzer + skill-security-analyzer](https://github.com/anthropics/skills/pull/83)** — 直接呼应 [#492](https://github.com/anthropics/skills/issues/492) 的命名空间安全诉求，是治理工具链的关键一环。
3. **[#1628 Hivemind](https://github.com/anthropics/skills/pull/1628)** — 零成本多代理理念新颖，且与 [#16](https://github.com/anthropics/skills/issues/16)（Skill→MCP）路线互补。
4. **[#1367 self-audit v1.3.0](https://github.com/anthropics/skills/pull/1367)** — 与 [#1385](https://github.com/anthropics/skills/issues/1385) 质量门控提案对齐，落地难度低。
5. **[#568 ServiceNow](https://github.com/anthropics/skills/pull/568)** — 覆盖广度罕见（ITSM/ITOM/SecOps/ITAM/FSM/SPM…），对企业用户极具吸引力。
6. **[#1615 scnet-hpc](https://github.com/anthropics/skills/pull/1615)** — 超算场景专属，填补科研用户空白。
7. **[#486 ODT Skill](https://github.com/anthropics/skills/pull/486)** — 补齐 LibreOffice / ISO 标准格式（与 [#538](https://github.com/anthropics/skills/pull/538) PDF 修复形成完整办公文档套件）。
8. **[#723 testing-patterns](https://github.com/anthropics/skills/pull/723)** — 内容成熟，可立即用于工程实践。

> 提示：所有上述 PR 当前均为 **OPEN**，且没有一个给出评论数；但 [#1298](https://github.com/anthropics/skills/pull/1298)、[#514](https://github.com/anthropics/skills/pull/514)、[#1628](https://github.com/anthropics/skills/pull/1628)、[#1367](https://github.com/anthropics/skills/pull/1367) 因影响范围大，被官方/社区盯上的概率最高。

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是"Skill 生态的工业化基础"——安全命名空间治理（#492）、可用的自动化评估管线（#556）、企业级分发与共享（#228）——即从"单个 Skill 怎么写"升级到"Skill 生态如何被信任、被度量、被规模化分发"。**

辅助观察：
- **Meta-Skill 崛起**：质量分析、安全审计、自审计、推理门控——社区正自发补齐"Skill 自身的工程化能力"。
- **平台化趋势**：Hivemind、ServiceNow、SAP、SharePoint、Bedrock——Skills 正在从"提示词片段"变成"可编排的企业能力单元"。
- **Windows / 编码 / 评测** 是当前三大隐性技术债，三个修复 PR（#1298、#1099、#1050）指向同一脚本家族，合并后将释放整条 description 优化链路。

---

# Claude Code 社区动态日报
**日期：2026-08-26**

---

## 📌 今日速览

今日双版本发布聚焦 **Linux glibc 2.44 兼容性修复** 与 **Bash 通配符权限规则的安全提示**，社区最热烈的讨论依旧是 #84352（已通过网络安全验证的组织仍遭遇 cyber safeguard 拦截，单日评论 155 条）；桌面端 Windows MSIX、TUI 终端交互以及模型规则遵从性相关的回归与设计缺陷持续成为开发者焦点。

---

## 🚀 版本发布

### v2.1.246
- **新增**：在 `/permissions` 中加入 **Auto mode** 标签页，用于查看与编辑自动模式分类器规则
- **新增**：启动时对 `Bash(git * main)` 这类"通配符在子命令前"的允许规则发出警告 —— 因为它们会同时匹配插入到子命令前的选项
- 摘要被截断，预计还有更多 Auto mode 相关变更

### v2.1.245
- **修复**：在 glibc 2.44 的 Linux 发行版（如 Arch Linux、CachyOS、Fedora Rawhide）上启动崩溃

> 两个版本相邻发布，体现团队对 glibc 2.44 升级潮与权限策略安全性两个问题的快速响应。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|---|---|---|---|
| 1 | [#84352](https://github.com/anthropics/claude-code/issues/84352) **CVP 已批准组织仍触发网络防护拦截** | 155 | 24 | 🔴 **企业级阻塞**：合规审批流程与产品行为不一致，影响已通过验证的企业用户，亟待官方协调 |
| 2 | [#80444](https://github.com/anthropics/claude-code/issues/80444) **Windows 桌面 GPU 致命崩溃 + MSIX 包不可启动** | 56 | 9 | 🔴 桌面端在多驱动下复现，修复需 Repair，影响 Windows 主力用户 |
| 3 | [#65833](https://github.com/anthropics/claude-code/issues/65833) **v2.1.150 后 TUI 滚轮失效** | 41 | **99** | 🟠 **点赞最高**：回归类问题，影响所有 TUI 用户，体验严重降级 |
| 4 | [#86142](https://github.com/anthropics/claude-code/issues/86142) **MCP draft-07 outputSchema 客户端拒绝** | 29 | 12 | 🟠 已 CLOSED，影响所有遵循旧版 JSON Schema 的 MCP 服务 |
| 5 | [#85891](https://github.com/anthropics/claude-code/issues/85891) **Windows 桌面窗口 always-on-top** | 25 | 37 | 🟡 无对应设置项，用户体验违反 Windows 平台惯例 |
| 6 | [#66516](https://github.com/anthropics/claude-code/issues/66516) **macOS 桌面窗口 always-on-top** | 22 | 2 | 🟡 跨平台同类问题，被标 invalid 但用户持续反馈 |
| 7 | [#61012](https://github.com/anthropics/claude-code/issues/61012) **Pro 套餐无活跃使用仍反复达到用量上限** | 18 | 8 | 🟠 商业信任问题，配额计数疑似存在 bug |
| 8 | [#82049](https://github.com/anthropics/claude-code/issues/82049) **Claude.ai magic link 邮件延迟 2-5 分钟** | 14 | 25 | 🟡 自 7 月起持续恶化，影响登录与会话恢复链路 |
| 9 | [#87804](https://github.com/anthropics/claude-code/issues/87804) **.claude/rules/ 缺少 prompt-topic 触发** | 13 | 0 | 🟢 增强请求，指向"按主题条件加载"这一普遍规则工程缺口 |
| 10 | [#85901](https://github.com/anthropics/claude-code/issues/85901) **MSIX 缺 CodeIntegrity.cat 导致容器销毁** | 11 | 1 | 🟠 已 CLOSED，但暴露打包签名链路的安全风险 |

**社区反应观察**：
- **点赞/评论比** 最高的是 #65833（2.4）和 #85891（1.48），表明 **TUI/桌面交互回归** 类问题最容易激起共鸣
- **企业/合规** 相关问题（#84352）虽热度高但点赞偏低，反映用户处于"被阻塞但无力推动"的状态
- 已 CLOSED 的 #86142（MCP draft-07）是少数被快速修复的协议兼容性问题

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时仅 **1 条** PR 更新，远少于 Issues 活跃度，反映社区贡献集中于 issue 反馈、代码合入节奏放缓。

| # | PR | 作者 | 内容 |
|---|---|---|---|
| 1 | [#89404](https://github.com/anthropics/claude-code/pull/89404) **validate-agent.sh 修复 set -e 误报** | @bcherny | 修复 [#83803](https://github.com/anthropics/claude-code/issues/83803) 中 plugin-dev 自身 agent 文件校验失败的三处 `set -euo pipefail` 交互 bug：`((x++))` 在 0→1 时退出码为 1 导致脚本中止；不再在首个 warning 时终止校验 |

---

## 📈 功能需求趋势

通过对 50 条 Issues 的标签聚类，可提炼出当前社区最关注的 5 个方向：

### 1. 🖥️ 桌面端（Desktop）— **最热点**
- Windows MSIX 打包签名链路（Code Integrity、文件锁、服务进程）
- GPU/Electron 进程稳定性
- 跨平台窗口行为（always-on-top）
- **iOS Simulator 与 Xcode 27 兼容性**（#79991）

### 2. ⌨️ TUI 终端交互回归
- 滚轮行为变化（#65833）
- 输入框**完全缺失文本选择能力**（#80734）
- SGR 鼠标模式退出泄漏（#79015）
- OSC 8 超链接丢失（#79839）

### 3. 🧠 模型行为与规则系统
- **"渐进式违规"检测**：CLAUDE.md 中的禁令对单步小动作不触发（#89464）
- 限制型规则的 binding 弱于扩张型规则（#89244）
- **prompt-topic 触发器缺失**：`.claude/rules/` 只能按 paths 触发（#87804）
- Skill-scoped hooks 作用域精细化（#89669）

### 4. 🔌 MCP / 集成协议
- draft-07 JSON Schema 兼容性（已修）
- Slack 连接器在 Settings 显示但对 routines/MCP 不可见（#89665）
- Chrome 扩展设备名持久化（#89302）

### 5. ⚙️ 性能与稳定性
- grep wrapper（ugrep）在 bounded-repeat 正则下内存爆炸（#78027）
- /compact 在超大对话中静默失败（#89040）
- Windows bundled Node v26.3.0 流式 ECONNRESET（#89663）

---

## 💡 开发者关注点（痛点高频词）

| 痛点 | 代表 Issue |
|---|---|
| **回归无人跟进** | #65833（滚轮 6 月至今）、#82801（hooks 持久化已被 stale-bot 关一次） |
| **Windows MSIX / 打包生态** | #80444、#85901、#73694、#82277 — 同一问题多角度复现 |
| **规则工程不闭环** | #87804、#89244、#89464、#89669 — 规则表达力不足 |
| **协议兼容断点** | #86142、#89665 — MCP 与外部连接的兼容性需要更明确版本策略 |
| **配额计费透明度** | #61012、#82049 — Pro 用户对"未使用却耗尽"难以排查 |

### 给生态的信号
- **TUI 输入体验**正成为口碑分水岭：缺失文本选择、滚轮行为变化等"基础编辑器能力"缺失会被迅速放大。
- **MSIX 是 Windows 桌面版的结构性风险点**，社区已经自发总结出 0x80073d02 / 0x3CFC / 0x060C201E 等一串错误码，意味着需要打包签名层面的专项治理。
- **规则系统**正从"加载"走向"作用域 + 触发条件"的精细化阶段（paths → topics，skill hooks 生命周期），是下一个值得投入的工程方向。

---

*报告基于 anthropics/claude-code 仓库 2026-08-25 ~ 2026-08-26 公开数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-26**

---

## 📌 今日速览

Codex 今天高频迭代 **0.150.0-alpha** 系列版本（连续发布 alpha.9/.10/.11 三个构建），同时 PR 端围绕 **MCP OAuth 企业化、SQLite 遥测持久化、Bazel 测试基础设施**密集合并。社区侧 Windows 桌面端的崩溃/启动失败/沙箱异常依然是焦点，**standalone `codex-setup.exe` 安装器**请求点赞数突破 187，社区呼声持续走高。

---

## 🚀 版本发布

| 版本 | 状态 | 说明 |
|---|---|---|
| `rust-v0.150.0-alpha.9` | Alpha | 0.150 迭代线 |
| `rust-v0.150.0-alpha.10` | Alpha | 0.150 迭代线 |
| `rust-v0.150.0-alpha.11` | Alpha | 0.150 迭代线 |

> 三个 alpha 版本均在 24 小时内发布，未提供详细 changelog，属于高频修复型迭代。可关注后续 0.150.0 正式版以获得完整变更说明。

---

##  社区热点 Issues（Top 10）

### 1. [#13993](https://github.com/openai/codex/issues/13993) — Windows 独立安装器 `codex-setup.exe`
- **81 评论 / 187 👍** | 长期置顶 feature request
- 企业环境、离线部署、政策限制下 Microsoft Store 安装困难，用户呼吁提供传统 `.exe` 安装包。社区情感强烈，是当前点赞数最高的 Windows 议题。

### 2. [#34035](https://github.com/openai/codex/issues/34035) — 永久取消 5 小时用量上限
- **14 评论 / 140 👍**
- 用户要求将 2026-07-12 起临时移除的 Plus/Pro/Business 5 小时限制固化为默认政策，仅保留周配额。

### 3. [#13018](https://github.com/openai/codex/issues/13018) — Codex App 支持删除会话 ⭐ **已关闭**
- **29 评论 / 105 👍**
- 需求简单但用户苦之久已：目前只能归档而非删除，需要手动清理 `~/.codex/archived_sessions/`。

### 4. [#28919](https://github.com/openai/codex/issues/28919) — Windows Codex 缺少「控制其他设备」选项卡
- **44 评论 / 42 👍**
- Settings > Connections 中缺失远程控制 tab，导致无法在 Windows 桌面端管理其他设备上的 Codex。

### 5. [#38350](https://github.com/openai/codex/issues/38350) — Web 端定时任务自动暂停
- **40 评论**
- ChatGPT Web 中多个周期性定时任务在成功执行后被自动切回 paused 状态，无用户操作触发，属高优先级稳定性 bug。

### 6. [#40715](https://github.com/openai/codex/issues/40715) — Windows 26.820 MCP 传输失败
- **17 评论 / 9 👍** | 🆕 8-26 更新
- 稳定版 `26.820.60940` 出现 `invalid transport in mcp_servers.codex_app`，Beta `26.727.40816` 正常。回归风险显著。

### 7. [#34026](https://github.com/openai/codex/issues/34026) — Windows 线程卡在「思考中」
- **14 评论**
- 26.715.4045.0/2305.0 中已完成线程持续显示 thinking，新消息排队且无法启动 turn。

### 8. [#25179](https://github.com/openai/codex/issues/25179) — 子代理陈旧缓存堆积
- **21 评论**
- 长会话中 Codex 桌面端子代理列表无法可靠关闭/清理。

### 9. [#17598](https://github.com/openai/codex/issues/17598) — 自定义模型提供方下子代理编排失效
- **14 评论**
- 使用非 OpenAI 自定义 provider 时 native subagent 编排异常，影响 BYOK 场景。

### 10. [#39819](https://github.com/openai/codex/issues/39819) — 工具调用可视化开关 ⭐ **已关闭**
- **3 评论 / 10 👍**
- 请求将折叠/展开工具调用视图作为 `config.toml` 选项，便于调试。

---

## 🛠 重要 PR 进展（Top 10）

> 今日 PR 全部由 `copyberry[bot]` 自动化合并，呈批量化形态。

### 1. [#40742](https://github.com/openai/codex/pull/40742) — 准备隔离 Guardian 评审会话
- 为同步 Guardian review 增加策略 prompt 和输出契约，支持父模型回退与低推理强度选项。

### 2. [#40739](https://github.com/openai/codex/pull/40739) — 企业 IdP 身份解析（MCP OAuth）
- 针对存储的 enterprise IdP 会话，校验 issuer、公客户端认证与 ID-JAG 交换能力，并绑定 OIDC 身份声明。

### 3. [#40722](https://github.com/openai/codex/pull/40722) — 企业 ID-JAG 交换（MCP OAuth）
- 实现两步非交互交换：从企业 IdP 获取 ID-JAG，换取 resource-bound MCP bearer token。

### 4. [#40737](https://github.com/openai/codex/pull/40737) — 保留 MCP 工具输出为 typed content
- 将非结构化 MCP 结果转为 typed function-call output items，避免文本化全部 content 数组。

### 5. [#40728](https://github.com/openai/codex/pull/40728) — MCP 服务器使用附件自有权限
- 为 executor 环境附加的 MCP 服务器解析并捕获独立 permission profile，避免继承线程全局沙箱权限。

### 6. [#40726](https://github.com/openai/codex/pull/40726) — SQLite 日志持久化遥测
- 为 SQLite log sink 增加 batch 大小、写入延迟、失败率、丢弃条目等可观测性。

### 7. [#40718](https://github.com/openai/codex/pull/40718) — Bazel 仓库支持 pinned Codex releases
- 模块扩展自动下载 checksum-pinned Linux x86_64 包，并生成 `codex` 与 `package` filegroup。

### 8. [#40716](https://github.com/openai/codex/pull/40716) — Worktree 线程所有权元数据
- `WorktreeManager` 支持把托管 linked worktree 绑定到 thread 并读取 owner，版本化的 `codex-thread.json` 写入 Git 元数据。

### 9. [#40713](https://github.com/openai/codex/pull/40713) — 清理 Git remote 中的凭证
- 新增 `SanitizedGitUrl`，在 remote URL 进入 turn/thread 元数据前剥离用户名/密码/token，**安全增强**。

### 10. [#40720](https://github.com/openai/codex/pull/40720) — 跨换行保留 composer 超链接
- 检测可见 HTTP(S) URL，将完整 OSC 8 目标附加到每个 wrap 片段，包括屏幕外滚动部分。

---

##  功能需求趋势

通过对所有 50 条 Issue 的标签与摘要聚类，社区关注点呈现以下格局：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **Windows 平台体验** | #13993、#28919、#40715、#34026、#40700、#39443 | 🔥🔥🔥🔥🔥 |
| **安装/分发方式** | #13993、#28392 | 🔥🔥🔥🔥 |
| **会话与子代理生命周期管理** | #13018、#25179、#37041、#40219、#40674 | 🔥🔥🔥🔥 |
| **用量与计费策略** | #34035、#31818 | 🔥🔥🔥 |
| **MCP / OAuth 企业能力** | #17598、#40715、#23411 | 🔥🔥🔥 |
| **Hooks 与可扩展性** | #21615、#32491、#23411 | 🔥🔥 |
| **跨平台沙箱与稳定性** | #39251、#35555、#40630 | 🔥🔥 |
| **远程 / 协作体验** | #28919、#40710（PR） | 🔥🔥 |

---

## 💬 开发者关注点

### 痛点 Top 3
1. **Windows 桌面端稳定性雪崩** —— 同一日窗口内 #39443 (chrome.dll 崩溃)、#40700 (启动失败)、#40715 (MCP 回归)、#34026 (线程卡死)、#39251 (沙箱恢复失败) 集中出现，26.820 系列被多次点名。Windows 已是 Codex 当前最大的质量债。
2. **子代理 / 会话状态机难以收敛** —— 子代理陈旧缓存无法关闭、已删除会话幽灵重出、历史 subagent 反复 rehydrate，提示桌面端的会话-子代理状态同步模型需要重构。
3. **遥测与诊断不足** —— 多个 issue 反馈 SQLite 锁竞争、MCP 进程泄漏、CLI 启动失败缺乏可观测性，今天的 PR #40726、#40724、#40735、#40714 集中补齐遥测维度，社区诉求得到响应。

### 高频需求
- **独立 Windows 安装器**（持续 5 个月，热度不降）
- **删除会话而非仅归档**（已被关闭，下个版本有望落地）
- **永久取消 5 小时窗口**（用户体量极大）
- **BYOK / 自定义 provider 下的子代理兼容**
- **Hook 系统的 IDE 集成信任链**（与 #18391 修复模式一脉相承）

### 安全亮点
PR #40713（清理 Git remote 凭证）值得所有本地集成 Codex 的团队留意——若你的工作流曾把包含 token 的 remote URL 写入 turn 元数据，建议升级后审计持久化数据。

---

*报告生成基于 GitHub `openai/codex` 仓库过去 24 小时数据，仅供参考。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期**：2026-08-26

---

## 📌 今日速览

Gemini CLI 今日发布 **v0.57.0 正式版** 与 **v0.58.0-preview.0** 预览版，社区活跃度维持高位，重点议题集中在**子代理（Subagent）稳定性、Auto Memory 机制与安全加固**三个方向。PR 侧则集中于**扩展安装并发安全、MCP OAuth SSRF 防护、VSCode 伴侣进程 hang 修复**等多项高优先级问题。

---

## 🚀 版本发布

| 版本 | 类型 | 关键变化 |
|------|------|----------|
| **v0.58.0-preview.0** | 预览 | 包含 symlink 解析、write policy 安全检查器声明等核心修复 |
| **v0.57.0** | 正式 | 修复 Cloud Workstations OAuth 代理 URI 动态解析、IDE 连接目录不匹配吞错等问题 |
| **v0.56.0-nightly.20260825.g812f7a2bc** | Nightly | 修复 a2a-server 陈旧取消错误、write policy 顶层安全检查器声明 |

详细 changelog 可在对应 Release Notes 中查阅：[v0.58.0-preview.0](https://github.com/google-gemini/gemini-cli/releases) · [v0.57.0](https://github.com/google-gemini/gemini-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 子代理 MAX_TURNS 后被错误标记为 GOAL 成功** ⭐ P1 · 13 评论
   子代理在达到最大轮次限制后仍报告 `status: "success"`，掩盖了真实的中断状态，影响 `codebase_investigator` 等关键子代理的可靠性。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 挂起** ⭐ P1 · 8 评论 · 8 👍
   委派给 generalist agent 时经常无限挂起，文件夹创建等简单操作都可能卡死，用户需明确禁止委派才能绕过。

3. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱 + 后执行意图路由** ⭐ P2 · 8 评论
   利用 Gemini 3 模型的原生 bash 倾向，结合 POSIX 工具链实现安全沙箱，是核心增强提案。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取、搜索与映射** ⭐ P2 · 7 评论
   Epic 级需求：探索基于 AST 的工具链能否精确读取方法边界、降低 token 消耗与轮次开销。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 未能主动使用 Skills 与子代理** ⭐ P2 · 6 评论
   未明确提示时，模型几乎不会自动调用自定义 skills 与 sub-agents，影响工作流自动化体验。

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话** ⭐ P2 · 5 评论
   提取 agent 在"看起来低信号"的会话上跳过读取逻辑，导致这些会话被反复推上候选列表。

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令执行后卡在 "Waiting input"** ⭐ P1 · 4 评论 · 3 👍
   简单 shell 命令执行完毕后仍显示等待用户输入，shell 状态无法正确回到空闲态。

8. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 日志与确定性脱敏** ⭐ P2（安全） · 4 评论
   Auto Memory 会将本地转录本发送给模型并可能泄露密钥，需引入确定性脱敏与日志收敛。

9. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Wayland 下 Browser 子代理失败** ⭐ P1 · 4 评论
   Wayland 桌面环境下 Browser Subagent 直接失败，无法正常启动浏览器交互流程。

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — symlink 形式的 agent 文件不被识别** ⭐ P2 · 4 评论
    `~/.gemini/agents/filename.md` 若为符号链接则无法被识别为子代理，影响用户用 dotfiles 管理配置的工作流。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#28955](https://github.com/google-gemini/gemini-cli/pull/28955) — 更新依赖、添加 MCP 配置、集成 ECC bundle** ⭐ P1 · XL
   大型依赖与 MCP 配置更新，属于基础设施级变更。

2. **[#29089](https://github.com/google-gemini/gemini-cli/pull/29089) — `BaseLlmClient` 中将 `abortSignal` 透传到 `retryWithBackoff`** ⭐ P2
   修复会话摘要、聊天压缩等场景下取消信号丢失导致的重试失控问题。

3. **[#28863](https://github.com/google-gemini/gemini-cli/pull/28863) — 扩展环境变更需用户同意并清洗变量**
   修复扩展更新绕过 consent 检查并注入未授权环境变量到 MCP 子进程的安全漏洞。

4. **[#29088](https://github.com/google-gemini/gemini-cli/pull/29088) — 修复 VSCode 伴侣 `stop()` 在 MCP 长连接下挂起**
   `GET /mcp` 长连接导致 `IdeServer.stop()` 永不返回，VS Code 扩展停用被阻塞。

5. **[#29087](https://github.com/google-gemini/gemini-cli/pull/29087) — 防止并发扩展安装竞态**
   通过 `proper-lockfile` 防止两个 CLI 进程同时安装/更新同一扩展导致文件交错损坏。

6. **[#28984](https://github.com/google-gemini/gemini-cli/pull/28984) — 76 项 npm 依赖批量升级**
   涵盖 `@modelcontextprotocol/sdk`、`simple-git` 等关键包的安全/性能更新。

7. **[#29081](https://github.com/google-gemini/gemini-cli/pull/29081) — 防止 MCP OAuth 元数据发现中的 SSRF**
   强制远程 OAuth 端点使用 HTTPS，loopback 例外；按 RFC 9728/8414 校验 origin。🔒 **重要安全修复**

8. **[#29067](https://github.com/google-gemini/gemini-cli/pull/29067) — 移除 a2a-server 中误导性的 securitySchemes 与硬编码凭据**
   修复 AgentCard 暴露的安全元数据与硬编码 token 的问题。🔒

9. **[#28930](https://github.com/google-gemini/gemini-cli/pull/28930) — 移除不安全的 `diff.external` 空值覆盖** ⭐ P1
   Git 不把空字符串视为未设置，导致外部 diff 工具被错误启用。

10. **[#29084](https://github.com/google-gemini/gemini-cli/pull/29084) — v0.57.0 自动生成 Changelog**

---

## 📈 功能需求趋势

通过对全部 Issues 的语义聚类，社区当前关注的功能方向集中在以下几个主题：

| 主题 | 代表 Issue | 关注度 |
|------|------------|--------|
| **🐛 子代理（Subagent）稳定性与可靠性** | #22323、#21409、#21763、#22267、#20195 | ⭐⭐⭐⭐⭐ |
| **🧠 Auto Memory 体系完善** | #26522、#26525、#26523、#26516 | ⭐⭐⭐⭐ |
| **🌳 AST 感知的代码理解** | #22745、#22746、#19561 | ⭐⭐⭐⭐ |
| **🔒 安全加固（OAuth/扩展/A2A）** | #26525、#28208、#29067、#29081 | ⭐⭐⭐⭐ |
| **🌐 Browser Agent 鲁棒性** | #22232、#21983、#22267 | ⭐⭐⭐ |
| **🛡 OS 级沙箱与权限治理** | #19873、#22672 | ⭐⭐⭐ |
| **⚡ 性能与 token 经济性** | #19561、#21924、#24246 | ⭐⭐⭐ |
| **🤖 Agent 自我认知 / 元能力** | #21432、#22598、#21000 | ⭐⭐ |

**核心信号**：社区已经从"功能补齐"迈入**"代理体系成熟化"阶段**，重点关注子代理鲁棒性、记忆系统可靠性与代码智能（AST）三大方向。

---

## 💬 开发者关注点

根据 Issues 与 PR 反馈，开发者集中反馈以下痛点：

1. **🔁 子代理生命周期不可控**
   - MAX_TURNS 后状态错报、generalist agent 挂起、subagent 上下文缺失（bug 报告不包含子代理上下文）—— 代理可观测性与可控性是核心痛点。

2. **🧩 扩展/MCP 生态的安全信任链**
   - 扩展静默注入环境变量、a2a-server 暴露硬编码凭据、MCP OAuth SSRF 风险 —— 第三方扩展的可信执行成为新焦点。

3. **🛑 状态机卡死问题频发**
   - Shell 命令后假 "Waiting input"、VSCode 伴侣 `stop()` hang、浏览器 agent 在 Wayland 下失败 —— 长连接与进程状态机管理是稳定性短板。

4. **📉 上下文与 token 浪费**
   - 大文件读取"消防水龙头式"灌入上下文、生成随机临时脚本导致 workspace 噪声 —— 社区呼吁更精细的 token 经济性策略（如 Tactful Extraction）。

5. **🤖 模型"主动性"不足**
   - 不被显式提示时，模型几乎不调用自定义 skills/sub-agents；也不会主动引导用户使用正确的 CLI flag/hotkey —— 需要更好的 prompt 工程与自我认知训练。

6. **🪟 跨平台开发体验**
   - Windows 长路径问题导致 PR diff 污染（#28926）、Windows 下 13 个 vitest 用例直接失败（#28832）—— 跨平台 CI 与本地体验仍有显著差距。

---

> 📊 **日报小结**：今日 Gemini CLI 整体处于 v0.57 收尾与 v0.58 预览启动的过渡期，**子代理稳定性 + 内存系统 + 安全加固**构成主线，安全相关 PR 数量明显上升，建议持续关注 a2a-server 与 MCP OAuth 相关的后续演进。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-26**
**数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

今日社区焦点集中在 **v1.0.81 预发布版本的多个 Bug** —— `store_memory`、workspace `.mcp.json` 自动连接、prerelease 升级卡顿等问题集中爆发。与此同时，**插件面板（Plugins Dashboard）正式全量开放**，`x` 键统一作为删除键的交互改进也已上线。值得关注的还有长期高呼声特性 **#13（Vi/Vim 输入模式）** 仍处于 Open 状态，累计获 74 个 👍 与 8 条评论。

---

## 🚀 版本发布

### v1.0.81-10（今日发布）

- **新增**：插件面板向所有用户开放。通过 `/plugin`、`/mcp`、`/skills` 即可进入。需关闭可设置环境变量 `PLUGINS_DASHBOARD=false` 或使用 `copilot plugins` 命令。
- **改进**：`x` 键现已成为全场景统一的删除键，覆盖 `/sandbox config`、`/settings`、`/mcp`、会话对话框以及 diff 命令栏等多个界面。

此外，**PR #4607（[dereklegenzoff](https://github.com/github/copilot-cli/pull/4607)）** 已在准备 **v1.0.81-11** 的公开发布，仅做提交时间戳前移的例行操作，预计下一个版本即将推出。

---

## 🔥 社区热点 Issues

| # | Issue | 热度 | 关键看点 |
|---|---|---|---|
| 1 | **[#13](https://github.com/github/copilot-cli/issues/13)** CLI 应支持 Vi/Vim 输入模式 | 👍74 / 💬8 | **长期高呼声特性**，自 2025-09 创建以来持续受关注，反映出大量 Vim 用户对 CLI 模态编辑体验的诉求。 |
| 2 | **[#4535](https://github.com/github/copilot-cli/issues/4535)** v1.0.81 预发布中 `store_memory` 失败 | 💬6 | 影响所有 1.0.81 预发布用户，错误信息为 `Instance id is required`，**memory writer 在缺少 instance id 时被错误调用**，阻塞上下文记忆功能。 |
| 3 | **[#3709](https://github.com/github/copilot-cli/issues/3709)** `/model` 应支持在同一会话内切换多模型（含 BYOK/本地） | 👍28 / 💬6 | BYOK 模式下 `COPILOT_MODEL` 锁定单模型，且 `/model` 选择器无法列出本地 BYOK 提供方模型，**模型灵活性严重受限**。 |
| 4 | **[#4035](https://github.com/github/copilot-cli/issues/4035)** Voice installer 拉取私有 Azure Artifacts 触发 401 | 💬4 | 启用语音模式时安装器尝试从私有源拉取 `Microsoft.AI.Foundry.Local.Core 1.2.3`，而该包公开在 nuget.org 上，**安装逻辑需修正**。 |
| 5 | **[#4542](https://github.com/github/copilot-cli/issues/4542)** workspace `.mcp.json` 被检测但未在 agent 会话中连接 | 💬2 / 👍1 | `copilot mcp list/get` 显示 `Enabled`，但实际交互会话中并不可用，**检测与连接存在不一致**，影响多人协作仓库。 |
| 6 | **[#3380](https://github.com/github/copilot-cli/issues/3380)** 新增 `--disable-repo-mcps` 全局开关 | 💬2 | 当前仅支持按名称 `--disable-mcp-server`，无法整体忽略仓库自带的 `.mcp.json` / `.github/mcp-config.json`，**在不可信仓库场景下存在风险**。 |
| 7 | **[#4560](https://github.com/github/copilot-cli/issues/4560)** 模型为 `auto` 时 reasoning effort 始终为 `null` 且无法配置 | 💬1 | `auto` 路由模式强制关闭推理努力度，即便用户主动设置也会被忽略，**影响使用 `auto` 时的复杂任务表现**。 |
| 8 | **[#4590](https://github.com/github/copilot-cli/issues/4590)** 扩展 SDK 重连会 dispose 会话的 hook 处理器 | 💬1 | 多扩展激活场景下，每次 MCP host 重载都会重建扩展队列，导致 `Hook processor is not configured for session id` 报错。 |
| 9 | **[#4593](https://github.com/github/copilot-cli/issues/4593)** Windows 上 worktree 会话归档失败（os error 32） | 💬1 | Windows 平台 `The process cannot access the file...`，**进程树未先停止即删除 worktree**，属于 Windows 平台回归。 |
| 10 | **[#4605](https://github.com/github/copilot-cli/issues/4605)** `latest-prerelease` 升级逻辑将用户卡在 1.0.81-9 | 💬0 | 由于多个预发布版本共享同一 `created_at`，GitHub 排序将 -10 排在 -2 之后，导致 `copilot update prerelease` 拒绝升级，**直接影响今日发布的 v1.0.81-10 触达用户**。 |

> ⚠️ 此外还有几条与新版直接相关的紧急反馈值得关注：**[#4604](https://github.com/github/copilot-cli/issues/4604)** 用户配置的 `api.githubcopilot.com/mcp/` 服务在 1.0.81-10 丢失注入的 Copilot token；**[#4606](https://github.com/github/copilot-cli/issues/4606)** Google Workspace MCP OAuth 因 issuer 末尾斜杠不匹配而失败；**[#4603](https://github.com/github/copilot-cli/issues/4603)** 提议为重复的 Copilot 指令文件（如 `CLAUDE.md`、`AGENTS.md`）添加用户级排除。

---

## 🛠️ 重要 PR 进展

过去 24 小时内仓库仅记录到 **1 条 PR** 更新：

- **[#4607](https://github.com/github/copilot-cli/pull/4607)** — `dereklegenzoff` *Prepare public prerelease v1.0.81-11*（已 Closed）
  > 仅做仓库提交时间戳前移操作，用于发布下一预发布版本。属于发布流程的例行 chore，并非功能性变更。

📉 **PR 活动显著低迷**：今日仅有版本发布准备型 PR，社区尚未提交实质性代码修复（如 #4535、#4542、#4593 等均无对应 PR），建议关注后续修复节奏。

---

## 📈 功能需求趋势

综合今日活跃的 Issues，社区关注方向呈现以下聚类：

| 方向 | 代表 Issue | 趋势说明 |
|---|---|---|
| **🧩 MCP 体系完善** | #4542、#3380、#4604、#4606 | MCP 是当前最热的子系统，涵盖检测/连接不一致、整体开关、token 注入、OAuth 兼容等多项问题，**生态成熟度亟需提升**。 |
| **🤖 模型选择与路由** | #3709、#4560、#4272 | `/model` 命令能力扩展、BYOK/本地模型支持、auto 路由 reasoning 配置、企业灰名单等多维度呼声，**模型灵活性是核心痛点**。 |
| **⌨️ 编辑器体验** | #13、#3323 | Vim 模式、ask_user escape hatch 等高频 UX 需求，反映出 CLI 用户对**键盘驱动工作流**的强烈偏好。 |
| **💾 会话与上下文持久化** | #1153、#3537、#4268、#4590、#4593 | 跨设备/跨人会话共享、退出摘要回归、worktree 会话归档、hook 处理器生命周期等议题集中，**session 子系统稳定性进入重点打磨期**。 |
| **🛠️ 安装与配置** | #4035、#4492、#4560、#4605 | 涉及语音依赖源、桌面端 WebView2、auto 模式配置以及升级链路，**1.0.81 预发布版本正在暴露多个质量短板**。 |
| **📝 指令文件管理** | #4603 | 自动加载 `CLAUDE.md`、`AGENTS.md` 引发重复内容，**需要去重或排除机制**。 |

---

## 👨‍💻 开发者关注点

从 45 条今日更新 Issue 与社区反馈来看，可归纳出以下开发者痛点与高频需求：

1. **预发布版本质量波动明显** — v1.0.81 系列集中暴露了 memory store、prerelease 升级逻辑、token 注入等多处回归，#4535、#4605、#4604 直接影响升级路径，**建议生产环境谨慎使用 prerelease**。

2. **MCP 协议仍处于"功能丰富、稳定性不足"阶段** — 多个 Issue 显示 MCP 检测、连接、鉴权、OAuth 跨平台兼容（Google Workspace）均存在断层，**这是社区反馈最高频的子系统**。

3. **Vim/键盘流用户长期未被满足** — #13 历经近一年仍未关闭、点赞数最高，**CLI 模态编辑体验是显著的产品差距**。

4. **多模型与 BYOK 灵活性受限** — 同一会话内切换模型、列出本地模型、auto 模式下推理控制等诉求集中，体现开发者希望 **Copilot CLI 像 Claude Code 一样具备模型编排能力**。

5. **跨平台一致性缺失** — Windows 专属问题（worktree 归档 #4593、桌面端 WebView2 #4492）频现，**Linux/macOS 与 Windows 行为对齐仍是交付重点**。

6. **会话共享与企业级能力** — #3537（跨设备/跨人会话）与 #1153（会话上下文导出）反映出**企业团队协作的强烈需求**，而当前架构以单机 JSONL 为主，距离落地尚有距离。

---

*日报生成基于 github.com/github/copilot-cli 公开数据，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-08-26
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

过去 24 小时 Kimi CLI 仓库活跃度较低，未有版本发布或 PR 合并，但社区报告了一个影响 v0.38.0 的**严重功能性 Bug** —— Edit/Write 工具在 macOS 上虚假返回成功却未实际写入文件，导致用户工作流完全中断。另一个长期存在的上下文压缩相关 Bug（#2523）仍在等待修复。

---

## 🚀 版本发布

⚠️ **过去 24 小时无新版本发布。**

---

## 🔥 社区热点 Issues

> ⚠️ 说明：过去 24 小时仅 2 条 Issue 被更新，数量较少，以下为全部内容。

### 1. [#2617] Edit/Write 工具报告成功但从未实际写入磁盘（v0.38.0，macOS）🚨 P0
- **作者**: @tizerluo
- **状态**: OPEN
- **热度**: 2 条评论
- **链接**: [MoonshotAI/kimi-cli#2617](https://github.com/MoonshotAI/kimi-cli/issues/2617)
- **重要性**: ⭐⭐⭐⭐⭐ **极高**
  - 这是当前最紧急的问题。`Edit` 和 `Write` 工具在返回 "File created successfully" / "The file has been updated..." 后**完全没有修改磁盘文件**，意味着 CLI 在 v0.38.0 上对 macOS 用户完全丧失了文件操作能力。
  - 100% 可复现，问题起始时间明确（2026-08-25 ~17:00 UTC），疑似新版本回归。
  - **建议**: 维护者应优先回滚或紧急修复，并在 release notes 中明确提示受影响用户降级。

### 2. [#2523] 上下文压缩 Bug —— Kimi Code 重新打开已完成并删除的任务
- **作者**: @Frogzter
- **状态**: OPEN（自 2026-07-20 起未解决）
- **热度**: 1 条评论
- **链接**: [MoonshotAI/kimi-cli#2523](https://github.com/MoonshotAI/kimi-cli/issues/2523)
- **重要性**: ⭐⭐⭐
  - 该 Bug 涉及上下文压缩（context compaction）逻辑，导致已删除/已完成的任务被错误复活，污染会话历史。
  - 虽然评论数少，但属于**沉默性正确性问题**（silent correctness bug），长期不修复会严重影响上下文管理的可靠性。
  - **建议**: 用户在升级版本前应留意上下文压缩后的任务列表是否出现异常条目。

---

## 🔧 重要 PR 进展

⚠️ **过去 24 小时无 PR 更新或合并。**

---

## � 功能需求趋势

由于 Issue 数量有限，本次趋势分析基于上述 2 条 Issue 及历史观察：

| 方向 | 趋势 | 说明 |
|------|------|------|
| **文件操作可靠性** | 🔴 强烈关注 | #2617 暴露了核心工具的写入可靠性问题，文件 I/O 是 CLI 最基础的能力 |
| **上下文与会话管理** | � 持续关注 | #2523 反映上下文压缩逻辑存在边界缺陷，长期未被根治 |
| **平台兼容性（macOS）** | 🟠 隐性风险 | 当前关键 Bug 仅出现在 macOS，跨平台测试覆盖度可能不足 |

---

## 👨‍💻 开发者关注点

综合社区反馈，开发者当前最集中的痛点包括：

1. **🔴 写入操作的"虚假成功"问题**
   - 工具返回值与磁盘实际状态不一致，且无任何错误提示。这是最危险的失败模式 —— 用户在不知情的情况下继续后续操作，可能导致大量工作成果丢失。
   - **诉求**: 期待增加"校验机制"（如写入后立即回读校验，或返回真实文件状态）。

2. **🟠 上下文压缩的语义正确性**
   - 压缩算法不应"复活"已被删除的任务，需更严格的状态机校验。

3. **🟡 平台差异导致的隐性 Bug**
   - macOS 专属问题提示官方在 CI / 测试矩阵上可能存在缺口，建议完善 macOS 端的文件操作集成测试。

---

## 📊 数据概览

| 指标 | 数量 |
|------|------|
| 新发布版本 | 0 |
| 活跃 Issues | 2 |
| 活跃 PRs | 0 |
| 高优先级 Bug | 1（#2617） |

---

> 📎 **附注**: 本报告基于过去 24 小时的 GitHub 事件流生成。如需查看完整 Issue 历史趋势，建议结合 GitHub Insights 或 7 日滚动数据进行综合分析。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-26**

---

## 📌 今日速览

今日 OpenCode 生态呈现**两条主线并行**：一是 v1.18.23 紧急修复 Cloudflare AI Gateway 路由问题并继续推动多 Provider 一等公民化（Groq/DeepInfra/Cerebras/Together AI/Azure CLI）；二是 **Zen/Go 网关在调用 tool 时大面积出现 "Endpoint is unavailable"**，已成为过去 24 小时社区最高频痛点。此外，v2 自动更新器因误判过期在某用户机器上吃满 **266 GB** 缓存的极端案例引发关注。

---

## 🚀 版本发布

### v1.18.23（2026-08-25 发布）

**Core · Bugfixes**
- 修复 Cloudflare AI Gateway 路由：第三方 provider 的非-Workers 模型现在可通过 Gateway REST API 正常工作（@superhighfives）
- 修复 Anthropic 通过 Cloudflare AI Gateway：将 `claude-haiku-4.5` 等点号分隔的模型 ID 转换为 Anthropic 所需的 dashed slug 格式

> 评价：该版本聚焦网关兼容性，是面向企业代理场景的关键补丁，建议使用 Cloudflare AI Gateway 的用户尽快升级。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么值得关注 |
|---|-------|------|----------------|
| 1 | **[#44300](https://github.com/anomalyco/opencode/issues/44300)** Zen API `x-preview-f-free` / `ox-alpha-free` 在含 `tools` 时返回 "Endpoint is unavailable" | 💬13 👍5 | 13 条评论，是当前热度最高的 issue，影响所有使用 Zen 免费模型 + 工具链的用户 |
| 2 | **[#33618](https://github.com/anomalyco/opencode/issues/33618)** Qwen 3.7 Plus/Max（经 OpenRouter）出现 unknown/invalid tool calls | 💬10 👍4 | 长期未解的回归问题，工具调用返回空名字导致会话中止，影响 Qwen 新模型推广 |
| 3 | **[#19143](https://github.com/anomalyco/opencode/issues/19143)** [FEATURE] 桌面端消息搜索（Cmd+F / Ctrl+F） | 💬9 👍8 | Desktop App 用户长期呼声，长会话定位困难，痛点明确 |
| 4 | **[#35434](https://github.com/anomalyco/opencode/issues/35434)** 自 v1.17.13 起 TUI 多问题 tool call 静默失败（已关闭） | 💬7 👍0 | 标记为 #34116 的回归，`question` 工具在 ≥2 题时回车无响应，反映版本回归管控需加强 |
| 5 | **[#44850](https://github.com/anomalyco/opencode/issues/44850)** Ox Alpha Free 在调用 tool 时报 "Endpoint is unavailable" | 💬7 👍2 | 与 #44300 同源问题，今日再度出现，说明服务端未完全恢复 |
| 6 | **[#17846](https://github.com/anomalyco/opencode/issues/17846)** `--log-level DEBUG` 实际上不输出任何日志（macOS） | 💬6 👍2 | 涉及日志轮转逻辑，10 个日志文件后失效，直接影响开发者排查问题 |
| 7 | **[#14524](https://github.com/anomalyco/opencode/issues/14524)** [FEATURE] 模型选择器展示价格信息 | 💬5 👍11 | **👍数全场最高**，社区强烈期待成本可视化，PR 已就位待合并 |
| 8 | **[#43277](https://github.com/anomalyco/opencode/issues/43277)** Session 永久卡死，重启/重启服务均无法恢复 | 💬5 👍0 | 严重可用性 bug，session 状态跨重启无法清理，潜在数据丢失风险 |
| 9 | **[#45087](https://github.com/anomalyco/opencode/issues/45087)** [2.0] 自动更新器吃满 266 GB——每 10 分钟重装一次 | 💬4 👍0 | 极端但真实的资源失控案例，`opencode2 serve --service` 长跑场景下 in-memory 版本与磁盘版本校验逻辑冲突 |
| 10 | **[#7712](https://github.com/anomalyco/opencode/issues/7712)** [FEATURE] 编辑上下文删除消息（已关闭） | 💬4 👍12 | **👍数第二高**，反映上下文编辑是高频功能需求 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 内容 | 关键点 |
|---|----|------|--------|
| 1 | **[#45107](https://github.com/anomalyco/opencode/pull/45107)** `feat(core): add directory projects` | 无 marker 的目录被识别为独立 OpenCode 项目，使用基于规范化绝对路径的确定性 ID | 仓库发现优先级保留，扩展多项目管理能力 |
| 2 | **[#45106](https://github.com/anomalyco/opencode/pull/45106)** `fix(app): stream running shell tool output` | 桌面端会话 UI 通过已有 shell 输出端点流式推送正在运行的 agent 输出，使用增量游标轮询 | 桌面体验对齐 TUI，不改动 core/server |
| 3 | **[#45108](https://github.com/anomalyco/opencode/pull/45108)** `feat(ai): add native Groq and DeepInfra providers` | 新增 Groq 与 DeepInfra 一等公民 provider，基于现有 OpenAI Chat 协议 | 持续扩展开箱即用模型供应商列表 |
| 4 | **[#45098](https://github.com/anomalyco/opencode/pull/45098)** `feat(ai): add native Cerebras and Together AI providers` | 与上一条同源，Cerebras 与 Together AI 也成为一等公民 provider | 一个 PR 拉通 4 家推理供应商，战略推进明显 |
| 5 | **[#45103](https://github.com/anomalyco/opencode/pull/45103)** `feat(desktop): open existing sessions from deep links` | 桌面端支持 `opencode://open-session?server=...&session=...` 深链接，关闭 #44167 | 跨设备/外部链接分享会话成为可能 |
| 6 | **[#45094](https://github.com/anomalyco/opencode/pull/45094)** `fix(ai): preserve provider-defined responses item ids` | 替换 item 类型特定 allowlist，保留 provider 下发的 message/reasoning/function-call/hosted-tool ID | 改善 Responses API 兼容性，避免多 Provider 串扰 |
| 7 | **[#44705](https://github.com/anomalyco/opencode/pull/44705)** `fix(session): coerce legacy string tool-part input` | 修复 1.14 旧格式 tool-part `state.input` JSON 字符串无法被 1.18 解析的问题，关闭 #44688 | **历史会话向前兼容** 是用户信任关键 |
| 8 | **[#45002](https://github.com/anomalyco/opencode/pull/45002)** `feat(core): repair malformed tool arguments before validation` | 新增内部插件在 Effect/Zod/Standard/JSON Schema 校验前修复常见畸形 tool 参数 | 显著提升 agent 鲁棒性，且不破坏正常校验权威性 |
| 9 | **[#45086](https://github.com/anomalyco/opencode/pull/45086)** `feat(core): support Azure CLI authentication` | Azure Provider 支持 Microsoft Entra ID via 现有 Azure CLI 会话，保留 API key fallback | 企业 Azure 用户的关键集成 |
| 10 | **[#45092](https://github.com/anomalyco/opencode/pull/45092)** `fix(opencode): clarify edit not-found error to reflect fuzzy fallbacks` | 修正 `edit` 工具报错信息：实际重试 8 种模糊匹配但仍报"精确空白匹配必需" | 小修复但解决典型误导性错误信息 |

---

## 📈 功能需求趋势

从近 24 小时的 Issues/PR 中提炼出**五大方向**：

1. **🧩 多 Provider 一等公民化（战略主线）** — 单日合并/新增 Groq、DeepInfra、Cerebras、Together AI、Azure CLI 5 家，意味着 OpenCode 正在摆脱"代理网关"角色，向**自托管推理生态**转型。
2. **🖥️ Desktop App 体验补课** — Cmd+F 搜索、MCP 服务器配置（[#40335](https://github.com/anomalyco/opencode/issues/40335)）、深链接打开会话、流式 shell 输出、目录选择器修复 —— 桌面端已从"能跑"进入"打磨"阶段。
3. **🔍 上下文与成本可见性** — [#7712](https://github.com/anomalyco/opencode/issues/7712) 上下文编辑（👍12）与 [#14524](https://github.com/anomalyco/opencode/issues/14524) 模型价格显示（👍11）是当前**双 👍 王**，二者均指向"用户对使用过程的可控感"诉求。
4. **🌐 国际化与本地化** — [#42447](https://github.com/anomalyco/opencode/issues/42447) 添加希伯来语（he）locale，社区开始主动贡献翻译。
5. **🛡️ 工具调用鲁棒性** — [#45002](https://github.com/anomalyco/opencode/pull/45002) 修复畸形 tool 参数、[#33618](https://github.com/anomalyco/opencode/issues/33618) Qwen tool-call 异常、[#35434](https://github.com/anomalyco/opencode/issues/35434) TUI 多问题工具回归 —— **tool-call 稳定性已成 P0 级议题**。

---

## 🧑‍💻 开发者关注点

**高频痛点（按出现频次排序）：**

| 痛点 | 代表 Issue | 状态 |
|------|-----------|------|
| **Zen/Go 网关 tool 调用 500/不可用** | [#44300](https://github.com/anomalyco/opencode/issues/44300)、[#44850](https://github.com/anomalyco/opencode/issues/44850)、[#44910](https://github.com/anomalyco/opencode/issues/44910)、[#45020](https://github.com/anomalyco/opencode/issues/45020)、[#45073](https://github.com/anomalyco/opencode/issues/45073) | 多 Issue 重复爆发，服务端稳定性告急 |
| **v2 自动更新器资源失控** | [#45087](https://github.com/anomalyco/opencode/issues/45087)（266 GB） | 内存版本与磁盘版本状态不一致导致死循环更新 |
| **桌面端 UI 卡死** | [#43355](https://github.com/anomalyco/opencode/issues/43355)（ResizeObserver 死循环）、[#35494](https://github.com/anomalyco/opencode/issues/35494)（TUI 在 XFCE 冻结） | 跨 TUI/Desktop 的渲染线程问题 |
| **平台兼容性问题** | Windows console 闪烁 [#42440](https://github.com/anomalyco/opencode/issues/42440)、IME 首字符破坏 [#39632](https://github.com/anomalyco/opencode/issues/39632)、Windows 工作区路径锁定 [#33995](https://github.com/anomalyco/opencode/issues/33995) | Windows + 非英文输入用户群体被忽略 |
| **历史会话兼容** | [#44705](https://github.com/anomalyco/opencode/pull/44705) PR 修复 1.14→1.18 数据格式断裂 | 用户对升级数据丢失高度敏感 |

**总结性观察：** 当下 OpenCode 的核心矛盾已从"功能完备度"转向"**生产可用性**"——网关稳定性、自动更新逻辑、桌面渲染兼容三大方向同时承压；而战略侧的多 Provider 扩展与桌面端体验打磨进展顺利，呈现出**战略快、基础设施慢**的典型成长期特征。建议 v2 团队在下个迭代周期优先收敛 Zen/Go 网关与更新器这两条阻塞主线。

---
*数据窗口：2026-08-25 ~ 2026-08-26 UTC | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-26

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：过去 24 小时

---

## 📌 今日速览

过去 24 小时内 Pi 仓库共 **50 条 Issue** 与 **31 条 PR** 更新，**无新版本发布**。社区活动集中在三个方向：① **Windows 平台兼容性问题集中爆发**（内置 PowerShell 工具、taskkill ENOENT、TUI 全屏渲染等）；② **多模型 Provider 适配细节修复**（OpenAI Responses tool_choice、Bedrock 图像传输、OpenRouter reasoning、Codex thread-id）；③ **流式输出与压缩逻辑的稳定性优化**（一行一词渲染 O(n²)、compaction 预算缩放、退化摘要丢弃）。

---

## 🚀 版本发布

无新版本发布。最近正式版仍为 **pi 0.84.3**（0.84.3 已暴露扩展加载问题，见 [#8620](#)）。

---

## 🔥 社区热点 Issues

| # | 标题 | 状态 | 评论 | 重要性 |
|---|------|------|------|--------|
| [#7547](https://github.com/badlogic/pi-mono/issues/7547) | [Windows] 如何在 Windows 上使用 Pi？遇到了哪些问题？ | OPEN | **49** | ⭐⭐⭐ 维护者发起的需求收集贴，是 Windows 平台体验的"主战场"，决定后续投入方向 |
| [#8584](https://github.com/badlogic/pi-mono/issues/8584) | TUI 行损坏：长工具输出后助手文本每行只渲染一个词 | CLOSED | 9 👍5 | ⭐⭐⭐ 已修复。典型流式渲染 bug，触发频率高，社区点赞数最高 |
| [#5886](https://github.com/badlogic/pi-mono/issues/5886) | AgentSession 结算/续接与助手尾部生命周期 bug（meta） | OPEN | 9 👍4 | ⭐⭐⭐ 由 mitsuhiko 提出的元 issue，串联了一类"transcript 已失效仍继续 agent"的核心架构缺陷 |
| [#7855](https://github.com/badlogic/pi-mono/issues/7855) | Pi 突然停止并提示 "Response was truncated before completion." | CLOSED | 7 👍4 | ⭐⭐ OpenAI 兼容 API（含本地 VLLM）的截断响应被当作终态，影响任意 OpenAI 兼容后端 |
| [#4742](https://github.com/badlogic/pi-mono/issues/4742) | 内置 SiliconFlow Provider（国际 + 中国双端点） | CLOSED | 7 | ⭐⭐ Qwen/GLM/DeepSeek 等开源模型入口，影响国内/海外大量潜在用户 |
| [#8582](https://github.com/badlogic/pi-mono/issues/8582) | 内置 PowerShell 工具在交互模式下误用 Windows PowerShell 5.1 | CLOSED | 6 | ⭐⭐ Windows 11 用户直接命中，pwsh 已安装却被绕开 |
| [#8468](https://github.com/badlogic/pi-mono/issues/8468) | GitHub Copilot 登录超时 | CLOSED | 6 | ⭐ 修复需依赖 PR #8254 合入后才正式生效，跟踪 release 节奏 |
| [#7049](https://github.com/badlogic/pi-mono/issues/7049) | 升级 Undici 到 8.8.0 修复 plain-HTTP 代理转发 | CLOSED | 5 | ⭐⭐ 公司内网 HTTP 代理用户的强需求 |
| [#6596](https://github.com/badlogic/pi-mono/issues/6596) | Node.js 24 下 `spawn(taskkill)` 报 ENOENT | OPEN | 5 | ⭐⭐ 已 inprogress，使用绝对 System32 路径 + error handler 方案在评审 |
| [#8456](https://github.com/badlogic/pi-mono/issues/8456) | Gemini 3.7 Flash 在 MINIMAL 思维链下拒绝 /tree 分支摘要 | CLOSED | 4 👍2 | ⭐ Gemini 适配层 reasoning 字段缺失导致 |

**关注度较低但值得追踪：**
- [#8651](https://github.com/badlogic/pi-mono/issues/8651) compaction reserve 未按上下文窗口缩放，小模型被误压缩
- [#7698](https://github.com/badlogic/pi-mono/issues/7698) 工具调用流式解析 O(n²)（已修，影响 6 个 adapter）
- [#8654](https://github.com/badlogic/pi-mono/issues/8654) edit 工具 mismatch 错误缺少恢复指引，造成反复重试
- [#8636](https://github.com/badlogic/pi-mono/issues/8636) 长会话累积图像触发 vision 模型 media_budget_exceeded
- [#8620](https://github.com/badlogic/pi-mono/issues/8620) **0.84.3 所有全局扩展加载失败**，升级前请注意

---

## 🛠 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#8650](https://github.com/badlogic/pi-mono/pull/8650) | fix(ai): 无工具时省略 Responses `tool_choice` | CLOSED | 修复 Grok `/compact` 与溢出压缩 400 错误，与 [#8633](#) 互补 |
| [#8642](https://github.com/badlogic/pi-mono/pull/8642) | fix(ai): 将 Bedrock OpenAI 模型的工具结果图像上提到 user content | CLOSED | 解决 `us.openai.gpt-5.6-sol` 等模型拒绝 `toolResult.content` 内嵌图的问题 |
| [#8641](https://github.com/badlogic/pi-mono/pull/8641) | bash 可用时仍加载 skills | CLOSED | 修复 #8551：仅 `read` 不可用、`bash` 可用时也加载技能，并补充系统提示回归测试 |
| [#8639](https://github.com/badlogic/pi-mono/pull/8639) | feat(ai): 新增 Opper Provider | CLOSED | 内置 OpenAI 兼容 Provider（OPPER_API_KEY），自动从 models.dev 生成目录 |
| [#8635](https://github.com/badlogic/pi-mono/pull/8635) | fix(ai): 惰性设置中保留 aborted stop reason | OPEN | 修复 #8409，让中止信号穿透惰性流包装器 |
| [#8629](https://github.com/badlogic/pi-mono/pull/8629) | feat: 增加 eager 工具执行 | CLOSED | 仅对最终化、可安全丢弃的本地 `read` 工具在 `toolcall_end` 提前启动，命中即复用 |
| [#8627](https://github.com/badlogic/pi-mono/pull/8627) | fix(coding-agent): cwd 敏感工具使用 ctx.cwd | CLOSED | read/write/edit/grep 等在扩展注册时使用真实 session cwd，避免扩展内的路径偏差 |
| [#8570](https://github.com/badlogic/pi-mono/pull/8570) | fix(ai): 保留 Codex thread-id 亲和头 | CLOSED | 与现有 prompt_cache_key/session-id 一起发送，提升 Codex 缓存命中率 |
| [#8623](https://github.com/badlogic/pi-mono/pull/8623) | fix(coding-agent): read 工具不再把末尾换行计为一行 | CLOSED | 修复 #7329 的 off-by-one，截断提示、分页续读、tool result 计数三处同时受益 |
| [#8614](https://github.com/badlogic/pi-mono/pull/8614) | fix(ai): 派生 OpenRouter reasoning 控制 | CLOSED | 修复 #8454，与 #8456 思路一致但走 OpenRouter 适配层 |

**其他值得关注：**
- [#8547](https://github.com/badlogic/pi-mono/pull/8547) TUI 编辑器点击移动光标（OPEN，鼠标体验补全）
- [#8616](https://github.com/badlogic/pi-mono/pull/8616) JPEG 中非 EXIF 的 APP1 段继续扫描（OPEN）
- [#8615](https://github.com/badlogic/pi-mono/pull/8615) 保留交错 user content 顺序（OPEN）
- [#8613](https://github.com/badlogic/pi-mono/pull/8613) 隔离并发的 /share 会话临时目录（OPEN）

---

## 📈 功能需求趋势

1. **Windows 一等公民体验** — #7547 维护者主动征询 + #8582/#6596/#8306 三连真实 bug，目标是把 Windows 从"能跑"提升到"out of the box"。
2. **多 Provider 矩阵收敛** — SiliconFlow、Opper、DeepSeek-v4-flash-vision 三个 Provider 在同一窗口内被推进，OpenAI 兼容生态持续扩张。
3. **流式渲染健壮性** — 围绕 streaming 阶段的行渲染、reasoning_details 合并、tool-call 解析形成一组修复集群。
4. **压缩（compaction）逻辑细化** — #8651（预算缩放）、#8652（退化摘要丢弃）、#8653（reasoning effort 截断）三连补丁，提示社区正系统化打磨压缩路径。
5. **视觉/多模态能力深化** — 多张 issue 同时围绕图像：vision 上下文预算、Bedrock 图像上提、Codex `file_id` 化、累积图像清理等。

---

## 🧑‍💻 开发者关注点

- **平台差异**：Windows 是最高频痛点（PowerShell 版本、taskkill、ENOENT、图像刷新）；Node.js 24 + npm 11.16.0 两个运行时升级同时带来兼容性问题（[#6596](#)、[#6600](https://github.com/badlogic/pi-mono/issues/6600)）。
- **Provider 协议碎片化**：OpenAI Responses vs Chat Completions、Codex thread-id、Bedrock 对 OpenAI 模型 ID 的特殊行为、Gemini reasoning 字段——同一类问题（"工具/图像/推理字段如何序列化"）在多家 Provider 上反复出现。
- **大模型与小模型的尺度差异**：compaction 固定 token 预算在小上下文窗口模型上直接爆掉；流式 O(n²) 在长输出下成为瓶颈——社区明显倾向于"按上下文窗口缩放"的策略。
- **扩展生态可靠性**：0.84.3 暴露全局扩展加载失败（[#8620](#)），以及 `pi update --extensions` 被新 npm 阻塞脚本阻断，反映扩展机制在 release 工程化层面仍较脆弱。
- **可恢复性体验**：edit 工具 mismatch 反复重试、压缩产生退化摘要、agent 在 git rebase 后挂死——开发者更希望系统在失败时给出"明确的恢复指引"而非"沉默的重试循环"。

---

*日报基于 GitHub 公开数据自动整理，观点仅供参考。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-26** ｜ 数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

---

## 📌 今日速览

过去 24 小时内仓库无新版本发布，研发节奏集中在 **Bug 修复** 与 **`/review` 体系的能力补齐**：P1 级问题 `/effort max` 导致 OpenAI 兼容提供商 session 崩盘已正式关单；Windows 文件读取安全、`/loop` 后台 cron 可观测性、`clampReasoningEffort` 边界等核心问题持续推进。同时，`/review` 流水线（增量轮次、覆盖率账本、prose-exec 审计、fork 子代理）与 Web Shell（紧凑视图独占、Token 用量面板、Git 更新冲突解决）两条主线 PR 持续高强度合入，CI/自托管 Runner 稳定性也在被系统性加固。

---

## 🚀 版本发布

今日 **无新版本发布**。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 状态 | 为何值得关注 |
|---|---|---|---|---|
| 1 | [#9459](https://github.com/QwenLM/qwen-code/issues/9459) `/effort max` 在 OpenAI 兼容提供商上直接打挂整个 session | **P1** | 已关闭 | 高优核心 Bug，`clampReasoningEffort()` 未对 `max` 做边界裁剪，导致后续所有请求 400 评论 10 条，社区关注度最高 |
| 2 | [#8097](https://github.com/QwenLM/qwen-code/issues/8097) 后台 Agent 协调缺陷：重复工作、过早完成、`send_message` 非交互 | P2 | 开放 | 多 Agent 协作的三大经典故障合集，与 roadmap/multi-agent 直接挂钩 |
| 3 | [#6762](https://github.com/QwenLM/qwen-code/issues/6762) Skill 上下文生命周期管理（Feature Request） | P2 | 开放 | 解决 SKILL.md 进入对话历史后无法卸载/压缩导致上下文膨胀，是 OOM/性能问题的根源之一 |
| 4 | [#9198](https://github.com/QwenLM/qwen-code/issues/9198) 跑出 OOM；tmux 终端按键错乱 | P2 | 开放 | 真实环境（1T 内存服务器）下长会话崩盘，且引发终端渲染异常，对比 Kimi Code 体验差异明显 |
| 5 | [#9309](https://github.com/QwenLM/qwen-code/issues/9309) `/compress-fast` 后再次 `/compress` 行为异常 | P3 | 已关闭 | 上下文压缩链路的核心缺陷，关单后建议关注是否有回归验证 |
| 6 | [#6094](https://github.com/QwenLM/qwen-code/issues/6094) qqbot cron + blockStreaming 重复消息 + botOpenId 时序 | P2 | 已关闭 | 渠道集成稳定性的代表问题，揭示 cron/blockStreaming/onResponseChunk 之间的状态机缺口 |
| 7 | [#5823](https://github.com/QwenLM/qwen-code/issues/5823) `/loop` cron 静默触发，模型无法列出/停止自己的计划任务 | P2 | 开放 | 后台自动化关键痛点：模型对自己产生的副作用缺乏可见性与控制权 |
| 8 | [#8227](https://github.com/QwenLM/qwen-code/issues/8227) Windows `@`-file 读取丢失 `O_NOFOLLOW`，dev/ino 校验可空 | P2 | 开放 | Windows 平台 TOCTOU/symlink 防护弱于 #7206 PR 修复，是跨平台安全一致性必修项 |
| 9 | [#4055](https://github.com/QwenLM/qwen-code/issues/4055) QC 在简单需求上自循环 10 分钟无法答复 | – | 开放 | 用户体感最强的"卡死"类问题，长期未关闭，反映 loop detection 与压缩的协同缺陷 |
| 10 | [#9733](https://github.com/QwenLM/qwen-code/issues/9733) Loop detection 在验证周期上误报，终止后无法自动恢复 | P2 | 开放 | 长任务自动化的可靠性杀手，#4055 的根本原因之一 |

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 类型 | 关键内容 |
|---|---|---|---|
| 1 | [#9659](https://github.com/QwenLM/qwen-code/pull/9659) `feat(review)` 内容锚定增量轮次 | Feature | 将 #9190 的 20 个 review / 166 条行内评论重新落地到 `main`，是 `/review` 增量化的 Part 1 |
| 2 | [#9761](https://github.com/QwenLM/qwen-code/pull/9761) `feat(review)` 延后建议可恢复 | Feature | round 6 进入收敛姿态后，把"非必要"建议从 inline 移入 PR Body 延后列表，便于工具二次捞取 |
| 3 | [#9717](https://github.com/QwenLM/qwen-code/pull/9717) `feat(review)` 新增 prose-execution 与 counter-frame 审计 | Feature | 补齐 #9655 复盘中的 #9707 提案 3/4，专门审查 SKILL.md / Agent 定义类指令文件的执行风险 |
| 4 | [#9768](https://github.com/QwenLM/qwen-code/pull/9768) `feat(review)` 覆盖率成为密封账本 | Feature | chunk coverage 自带身份与缺口原因，区分"读了什么"与"发了什么" |
| 5 | [#9995](https://github.com/QwenLM/qwen-code/pull/9995) `fix(cli)` 保留中转媒体的桥接超时 | Fix | 图片/音频/资源附件使用各自桥的 timeout & 重试策略，无附件消息沿用旧 10s |
| 6 | [#10050](https://github.com/QwenLM/qwen-code/pull/10050) `fix(ci)` 测试间让出事件循环 | Fix | 解决 vitest RPC timeout（autofix 套件 219 测试 ~66s 同步阻塞） |
| 7 | [#9974](https://github.com/QwenLM/qwen-code/pull/9974) `fix(core)` 三处工作流生命周期缺陷 | Fix | 取消运行真正结束 run 等独立可回退修复打包合并 |
| 8 | [#10049](https://github.com/QwenLM/qwen-code/pull/10049) `feat(skills)` 扩展技能键按扩展名命名空间化 | Feature | 解决多扩展同名 skill 冲突：`<extension>:<name>` 贯穿 Skill tool、slash 注册、`skills.disabled` |
| 9 | [#9980](https://github.com/QwenLM/qwen-code/pull/9980) `feat(providers)` 编辑前加载模型推荐 | Feature | Token/Coding Plan 在向导到达 Model IDs 步骤时，鉴权后请求一次 OpenAI 兼容模型列表，可取消 |
| 10 | [#9769](https://github.com/QwenLM/qwen-code/pull/9769) `feat(web-shell)` 工作区脏状态不再卡死 Git 更新 | Feature | 拉取被脏工作树阻塞时，分支选择器底部切换为含 stash / 提交两步方案的解决面板 |

> 此外活跃推进的还有 [#9993](https://github.com/QwenLM/qwen-code/pull/9993)（Web Shell 紧凑视图独占）、[#9940](https://github.com/QwenLM/qwen-code/pull/9940)（review 复检走原 thread）、[#9988](https://github.com/QwenLM/qwen-code/pull/9988)（Web Shell Token 用量面板）、[#8583](https://github.com/QwenLM/qwen-code/pull/8583)（Web Shell Session Workflow Cockpit）。

---

## 📈 功能需求趋势

从近 24h Issues + PR 看，社区诉求高度集中在以下方向：

1. **`/review` 体系工业化** — 增量轮次、内容锚定、覆盖率账本、prose/counter-frame 审计、建议延后可恢复，正在把 review 从一次性工具改造成可持续审计流水线（[#9659](https://github.com/QwenLM/qwen-code/pull/9659)、[#9761](https://github.com/QwenLM/qwen-code/pull/9761)、[#9717](https://github.com/QwenLM/qwen-code/pull/9717)、[#9768](https://github.com/QwenLM/qwen-code/pull/9768)）。
2. **Web Shell 作为统一控制台** — Workflow Cockpit、Token 用量面板、紧凑视图独占、脏工作树 Git 更新、SID 抽屉响应式修复，呈现"桌面化 + 远程化"双轨产品形态。
3. **上下文/Token 生命周期治理** — SKILL 上下文卸载与压缩（[#6762](https://github.com/QwenLM/qwen-code/issues/6762)）、LLM span 上暴露 usage 分解（[#10015](https://github.com/QwenLM/qwen-code/issues/10015)）、前缀缓存命中率修复（[#9230](https://github.com/QwenLM/qwen-code/issues/9230)）。
4. **多 Agent 与后台任务可观测性** — 后台 agent 协调 gap（[#8097](https://github.com/QwenLM/qwen-code/issues/8097)）、`/loop` cron 静默（[#5823](https://github.com/QwenLM/qwen-code/issues/5823)）、`sessionRotation` 通道会话上限（[#8927](https://github.com/QwenLM/qwen-code/pull/8927)）。
5. **跨提供商/多模型适配** — OpenRouter/DeepSeek/兼容提供商边界问题集中爆发（[#9459](https://github.com/QwenLM/qwen-code/issues/9459)、[#9757](https://github.com/QwenLM/qwen-code/issues/9757)、[#10027](https://github.com/QwenLM/qwen-code/issues/10027)、[#9980](https://github.com/QwenLM/qwen-code/pull/9980)）。
6. **平台 & 协议扩展** — Windows 符号链接安全加固、原生 DAP 调试协议集成（[#10051](https://github.com/QwenLM/qwen-code/issues/10051)）、MCP SSE 兼容性（[#10056](https://github.com/QwenLM/qwen-code/issues/10056)）。
7. **CI/CD 基础设施加固** — 自托管 Runner 防 ENOSPC（[#10035](https://github.com/QwenLM/qwen-code/issues/10035)）、autofix 扫描迁移持久池（[#10055](https://github.com/QwenLM/qwen-code/pull/10055)）、ossutil 复合 Action 抽象（[#10019](https://github.com/QwenLM/qwen-code/issues/10019)）。

---

## 💡 开发者关注点

1. **长会话稳定性是当前最大痛点**：OOM（[#9198](https://github.com/QwenLM/qwen-code/issues/9198)）、自循环（[#4055](https://github.com/QwenLM/qwen-code/issues/4055)）、Loop detection 误杀（[#9733](https://github.com/QwenLM/qwen-code/issues/9733)）三者同根——缺乏有效的上下文生命周期管理与回路中断-恢复机制。社区在 [#6762](https://github.com/QwenLM/qwen-code/issues/6762) 已经给出系统化方案。
2. **多 Agent 协同缺乏合同**：后台 Explore 子代理与父代理之间的工作去重、消息可达性、过早完成判定都没有原子化保证，开发者需要显式的协议层（[#8097](https://github.com/QwenLM/qwen-code/issues/8097) + `/review` 的 fork 子代理化 [#9784](https://github.com/QwenLM/qwen-code/issues/9784)）。
3. **权限/工具集不收敛到 API 请求**：`permissions.allow` 只改了 `/tools` 显示，模型实际拿到的 schema 仍是全集——这意味着上下文污染、token

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI 社区动态日报

**日期**: 2026-08-26
**数据来源**: github.com/Hmbown/DeepSeek-TUI（实际活跃仓库为 CodeWhale，同一维护者 Hmbown）

---

## 📌 今日速览

v0.9.12 发布周期进入收尾阶段：集成分支 #5576 已声明"代码完成"，剩余工作为版本号与发布说明门槛。社区活动围绕**外部监督能力**（控制套接字 / 生命周期 outbox / /relaunch 三件套由 M-Maciej 收尾合并）、**TUX 可观测性**（焦点块操作、上下文成本归属）以及**中文文档与 Git 性能**展开。今日共有 23 个 PR 更新，CLOSED 状态占多数，节奏紧凑。

---

## 🚀 版本发布

过去 24 小时无新 Release。v0.9.11 已于 2026-08-23 发布；v0.9.12 正处于 RC 前的 blocker 清理期。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 评论数 | 关注点 |
|---|-------|------|--------|--------|
| [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | OPEN | 16 | 本期最高互动条目，跟踪 TUI crate 拆分工作的所有子 EPIC、FEAT 与 PR；任何结构调整都会回到这里 |
| [#5588](https://github.com/Hmbown/CodeWhale/issues/5588) | **Provider neutrality: 18 DeepSeek 专属门槛应转为中立** | OPEN | 5 | v0.9.12 关键审计：扫描 2,281 行 279 文件中的 "deepseek" 出现处，发现 18 个概念上属于"provider 中立"却被 DeepSeek 锁定的行为门；首项 NVIDIA NIM 环境泄露已修 |
| [#4394](https://github.com/Hmbown/CodeWhale/issues/4394) | **Compaction: 发布并强制结构化生存契约** | OPEN | 4 | 高龄核心议题（自 2026-07-16 持续），讨论压缩实现中缺失的 Plan/Todo/subagent 显式契约层 |
| [#5583](https://github.com/Hmbown/CodeWhale/issues/5583) | **Workflow responseSchema 失败需有界修复与原始输出回执** | CLOSED | 4 | 工作流 responseSchema 报错时丢弃了有界修复机会；CLOSED 说明已有 PR 落地 |
| [#5582](https://github.com/Hmbown/CodeWhale/issues/5582) | **Workflow owner 快照把 Degraded 折叠进 Completed** | CLOSED | 4 | 状态投影 bug，影响运维可观测性，已修 |
| [#5533](https://github.com/Hmbown/CodeWhale/issues/5533) | **Feature: 监督运行的受控面** | OPEN | 3 | 提出 per-session 控制套接字（消息 / 中断 / 重启 / 状态）以及 RuntimeBackendKind::External；被 PR #5594 实现关闭 |
| [#5532](https://github.com/Hmbown/CodeWhale/issues/5532) | **/relaunch — 切换运行中会话到当前 binary** | CLOSED | 4 | 终结 `/update` 后需用户手动重启的体验断层；已由 PR #5593 实现 |
| [#5531](https://github.com/Hmbown/CodeWhale/issues/5531) | **本地生命周期事件 outbox (JSONL + webhook)** | CLOSED | 3 | 为无人值守的 TUI 会话提供 turn_stalled / turn_failed 等事件流；已由 PR #5592 实现 |
| [#5551](https://github.com/Hmbown/CodeWhale/issues/5551) | **TUI: 焦点块动作 y/Y/Enter/r** | CLOSED | 3 | 解决转录区无块级操作的痛点（目前仅 Tasks 轨有 y/Y）；PR #5608 已合并实现 |
| [#5601](https://github.com/Hmbown/CodeWhale/issues/5601) | **全新安装配置 MiniMax / Xiaomi 模型返回 404** | CLOSED | 3 | 中文用户首次安装时模型 URL 硬编码 bug；典型"内置 URL 错误"类问题，影响新用户体验 |

**荣誉提名**：[#5482](https://github.com/Hmbown/CodeWhale/issues/5482)（EPIC(docs): 文档本地化为中文）、[#5568](https://github.com/Hmbown/CodeWhale/issues/5568)（沙箱全盘可读，需 opt-in 拒绝列表）、[#5567](https://github.com/Hmbown/CodeWhale/issues/5567)（Fleet 全局成本/Token 上限）均已 CLOSED。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 关键内容 |
|---|----|------|----------|
| [#5576](https://github.com/Hmbown/CodeWhale/pull/5576) | **0.9.12 integration: must-fix + UX fixes** | OPEN | v0.9.12 集成分支，已含 72 个 commit，**所有发布阻塞项代码完成**，等待版本号 + changelog/RC 门槛通过即可合并（追踪器 #5573） |
| [#5616](https://github.com/Hmbown/CodeWhale/pull/5616) | **fix(tui): git_status/git_diff 移出异步执行线程** | CLOSED | GitStatusTool/GitDiffTool 在 async `execute()` 中调用阻塞 `std::process::Command::output()`，会吊死整个 tokio worker pool；改为独立线程 |
| [#5608](https://github.com/Hmbown/CodeWhale/pull/5608) | **feat(tui): 焦点转录块操作** | CLOSED | 实现 #5551：`y` 复制内容、`Y` 复制元数据/回执、`Enter` 全屏查看、`r` 原始 Markdown；作者 wuisabel-gif 已获 #5619 recurring PR 访问权 |
| [#5613](https://github.com/Hmbown/CodeWhale/pull/5613) | **docs(i18n): 修正英文文档错误并补充 zh_hans 二级翻译** | CLOSED | 校对发现 `provider_defaults.rs` / `child_env.rs` / `fleet.rs` 与文档矛盾；同步新增 zh_hans 翻译 |
| [#5610](https://github.com/Hmbown/CodeWhale/pull/5610) | **fix(tui): Windows verbatim-path 操作数穿越 POSIX 分词** | CLOSED | 修复 FEAT-019（#5609）在 Windows CI 上 `enforce_readonly_workspace_operands` 的两个失败用例 |
| [#5611](https://github.com/Hmbown/CodeWhale/pull/5611) | **feat(tui): 展示工具与 MCP schema 成本** | CLOSED | 由 wuisabel-gif 的 #5603 重基；context inspector 列出每个内置工具与每个 MCP 服务公告的 schema token 估算 |
| [#5609](https://github.com/Hmbown/CodeWhale/pull/5609) | **refactor(tui): 内存命令组采用 command shapes (FEAT-019)** | CLOSED | `/note`、`/memory` 切换到 FEAT-014/015 引入的外部命令形式 |
| [#5594](https://github.com/Hmbown/CodeWhale/pull/5594) | **control socket — part d (final)** | CLOSED | 关闭 #5533：Unix 独占、newline-framed JSON-RPC 套接字，默认关闭，光默认 opt-in |
| [#5593](https://github.com/Hmbown/CodeWhale/pull/5593) | **/relaunch — part c** | CLOSED | 关闭 #5532：`/update` 装新 binary 后自动切到新 binary |
| [#5592](https://github.com/Hmbown/CodeWhale/pull/5592) | **lifecycle outbox — part b** | CLOSED | 关闭 #5531：JSONL 事件流覆盖交互 TUI 与 `codewhale exec` headless 两种模式 |

**其余依赖升级 (OPEN)**：`rio-vt` 0.5.19→0.5.25（#5539）、`similar` 3.1.2→3.2.0（#5540）、`docker/setup-buildx-action` 4.2.0→4.3.0（#5537）、`tower-http` 0.6.11→0.7.0（#5387）。

---

## 📈 功能需求趋势

| 方向 | 代表议题 | 社区热度 |
|------|----------|----------|
| **外部监督 / 无人值守运行** | 控制套接字、生命周期 outbox、`/relaunch`、turn_stalled 事件 | 🔥🔥🔥🔥🔥 |
| **Provider 中立化（多模型）** | 18 个 DeepSeek 专属行为门审计；Opencode Go 模型自动同步 #5607 | 🔥🔥🔥🔥 |
| **成本与 Token 可观测性** | 工具 / MCP schema 成本 #5553；Fleet 全局成本上限 #5567；post-turn usage 丢失 #5597 | 🔥🔥🔥🔥 |
| **TUI UX 细节打磨** | 焦点块操作、@path 行范围、隐藏文件 prefix、剪贴板备份、教程 /tour、上下文属性 | 🔥🔥🔥🔥 |
| **文档本地化（中文）** | EPIC #5482，Tier-2 翻译 #5613 | 🔥🔥🔥 |
| **Git 性能 / 替换 git CLI** | 后台 git 探测锁问题 #5617；用 gix (gitoxide) 替代 #5618 | 🔥🔥🔥 |
| **沙箱与权限硬化** | 沙箱全盘可读 #5568；只读 inspection 子代理 #5595；写声明锁 #5562；MCP OAuth 401 #5572；child approval ID 复用 #5615 | 🔥🔥 |
| **架构重构** | TUI crate 分解 EPIC #5316；command shapes 推进 FEAT-019 | 🔥🔥 |

---

## 💬 开发者关注点

1. **"自动重启"是头号体验断层**：`/update` 之后用户必须手动重启是普遍痛点，叠加控制套接字、生命周期事件形成"无人值守 TUI"完整工具链（M-Maciej 三件套为典型范例）。
2

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*