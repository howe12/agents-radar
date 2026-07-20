# AI CLI 工具社区动态日报 2026-07-20

> 生成时间: 2026-07-20 02:25 UTC | 覆盖工具: 9 个

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
**报告周期**：2026-07-19 ~ 2026-07-20
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI (CodeWhale)

---

## 1. 生态全景

当前 AI CLI 工具整体进入 **"功能广度趋同、体验深度分化"** 的关键阶段。**Subagent 多智能体协作**、**TUI 性能治理**、**多模型 Provider 适配**、**IDE/编辑器深度集成** 已成为横跨各家的四大主战场，而 **可观测性（Observability）** 与 **权限模型精细化** 正在从加分项升级为下一阶段的准入门槛。各工具普遍面临"快速迭代 vs. 跨平台/跨 Provider 稳健性"的张力——Codex 单日合并 16 项 TUI 性能 PR、Gemini CLI 跨大版本升级 TypeScript 7.0/Vitest 4、OpenCode 全力推进 2.0 事件总线重构，都是这一阶段的典型表征。

---

## 2. 各工具活跃度对比

| 工具 | Release 数 | Issues 更新 | PR 更新 | 主要维护方 | 阶段特征 |
|------|:---:|:---:|:---:|---|---|
| **Claude Code** | 1 (v2.1.215) | 50 | 17 | 官方 + Codeturion | 高活跃 + 强功能广度 |
| **OpenAI Codex** | 0 | 50 | 17 (16 已合并) | 官方 + copyberry[bot] | 高活跃 + TUI 集中治理 |
| **Gemini CLI** | 1 (nightly) | 50 | 23 | 官方 + Dependabot 主导 | 高活跃 + Subagent/Auto Memory 演进 |
| **GitHub Copilot CLI** | 0 | 21 | 1 (历史) | 官方 | 反馈超前于修复 |
| **Kimi Code CLI** | 0 | 5 | 8 | 官方 + Nas01010101 | 小而精，回归集中修复 |
| **OpenCode** | 0 | 50 | 50 | 官方 (thdxr/rekram1-node) | 极高活跃 + 2.0 重构 |
| **Pi** | 0 | 32 | ~10 | earendil-works | ACP 合入 + 多 Provider 扩展 |
| **Qwen Code** | **2** (v0.20.0 + preview) | 31 | 50 | 官方 (wenshao 等) | 双版本并行 + Web/Subagent 路线图 |
| **DeepSeek TUI (CodeWhale)** | 0 | 6 | 16+ | Hmbown 单人主导 | v0.9.1 紧急维护期 |

> 📊 **数据观察**：OpenCode 与 Qwen Code 处于"双高"区间（50 Issues + 50 PRs），是当前投入强度最大的两个项目；Copilot CLI 与 Kimi CLI 出现"Issue 远超 PR"的反馈堆压现象；DeepSeek TUI (CodeWhale) 处于单人维护的高速迭代期，但仓库体量与社区覆盖度仍偏小。

---

## 3. 共同关注的功能方向

下表汇总在 **至少 3 个工具** 中出现共振的诉求：

| 共性方向 | 涉及工具 | 核心诉求 |
|----------|----------|----------|
| **TUI 渲染性能与稳定性** | Codex, OpenCode, Gemini, Kimi, Pi, DeepSeek TUI | 长会话/多 agent 下的卡顿、增量渲染、跨平台（ARM64/Wayland/Windows Terminal）兼容性 |
| **Subagent / 多智能体可靠性** | Claude Code, Gemini CLI, Qwen Code, DeepSeek TUI | 终止语义、状态隔离（#7156 主会话模型被覆盖）、超时降级、可观测性 |
| **IDE / 编辑器深度集成** | Claude Code, Codex, Pi, Copilot CLI | VS Code 焦点行为、ACP 模式（Zed/JetBrains）、会话作为编辑器 Tab、模型/思考指示器 |
| **可观测性与审计** | Codex, Copilot CLI, OpenCode, Qwen Code | MultiAgentV2 加密破坏审计（👍99）、OpenTelemetry skill span、ACP token 用量、SSE 订阅泄漏 |
| **多 Provider 适配** | OpenCode, Pi, Kimi, Qwen Code | DeepSeek/NVIDIA NIM/Kimi/Anthropic-compatible 端点能力对齐、thinking 合约差异、cache 块计数 |
| **安全与权限模型精细化** | OpenCode (CWE-601), DeepSeek TUI (Full Access), Kimi (deny 覆盖), Claude Code (autoUpdate 静默覆盖) | OAuth 回调白名单、refspec 粒度判定、规则匹配可预期性、用户配置不被静默修改 |
| **Web / 联网搜索** | Qwen Code (#7215 web_search), OpenCode, DeepSeek TUI | 原生联网、provider-native 搜索后端、SSRF 防护、引用证据 |
| **Hooks / 扩展生态** | Claude Code, Kimi | Hook 文档与实现脱节、MessageDisplay 流式事件、示例缺前缀 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | **企业级 Agent CLI 标杆** | 复杂工程 + 严格质量门禁 | Hook/Plugin 体系最成熟，IDE 整合是社区最高呼声（#15942 👍403） |
| **OpenAI Codex** | **OpenAI 生态桌面 + CLI 双端** | ChatGPT Plus/Pro 用户 + CLI 重度用户 | Electron 桌面端稳定性是当前痛点；CLI 端 TUI 性能是攻坚重点 |
| **Gemini CLI** | **多智能体协作平台** | 复杂任务编排 + 长任务自动化 | Subagent + Auto Memory + AST 感知代码理解三大方向 |
| **GitHub Copilot CLI** | **GitHub 生态一体化入口** | GitHub 深度用户 + 企业团队 | 与 GPT-5.6/Claude 多模型适配、ACP 协议、Enterprise 路由 |
| **Kimi Code CLI** | **轻量 + 长期会话** | 长文档/跨会话工作流 | Hooks/Web 模式/Moonshot API 双重编码兜底 |
| **OpenCode** | **开源 + 多 Provider 自由切换** | 本地模型 + 多云开发者 | 2.0 事件总线重构、Provider 适配最开放（DeepSeek/Kimi/NVIDIA NIM） |
| **Pi** | **可编程 Agent 平台** | 扩展开发者 + 自定义 Provider 用户 | ACP 模式合入（历时 6 个月）、扩展 API 进入活跃期 |
| **Qwen Code** | **国内模型生态对标 Claude Code** | 国内开发者 + 企业私有化 | 双版本并行、Web/Channels/Subagent 路线图密集 |
| **DeepSeek TUI (CodeWhale)** | **DeepSeek API 终端体验优化** | DeepSeek 模型用户 | 权限语义精细化、Windows 加固、sub-agent 沙箱 |

> 🎯 **关键差异**：Claude Code 与 Qwen Code 走"功能广度 + 质量门禁"路线；OpenAI Codex 与 Gemini CLI 走"原生模型 + 平台化"路线；OpenCode 与 Pi 走"开源 + 扩展性"路线；Kimi CLI 走"小而美专注长期会话"路线。

---

## 5. 社区热度与成熟度

### 🔥 高活跃度梯队（双 50 量级）
- **OpenCode**（50 Issues + 50 PRs）：仓库热度最高，处于 2.0 架构演进期，但出现 1 个 CWE-601 安全 Issue 和 1 个 DoS 风险报告，需关注治理节奏。
- **Qwen Code**（31 Issues + 50 PRs）：双版本并行（v0.20.0 + v0.20.1-preview），工程化最透明。
- **Gemini CLI**（50 Issues + 23 PRs）：依赖大升级集中（TypeScript 7.0、Vitest 4、ESLint 10），短期存在兼容性风险。
- **Claude Code**（50 Issues + 17 PRs）：Codeturion 等社区维护者主动收敛"承诺—实现"漂移，正向信号明显。

### 🛠 深度治理梯队
- **OpenAI Codex**（50 Issues + 16 PR 全 TUI）：单日 16 项 TUI 性能 PR 是本期最密集的工程治理事件，方向集中在"少克隆、少分配、缓存复用"。
- **Pi**（32 Issues）：v0.80.10 回归集中修复、ACP 落地、Upstage Solar/OpenCode Go 双 Provider 合并。

### 🟡 反馈堆压梯队
- **GitHub Copilot CLI**（21 Issues / 1 PR）：Plan Mode 回归、队列管理、Claude 适配 400 错误等问题堆积，PR 流入明显滞后。
- **Kimi Code CLI**（5 Issues / 8 PRs）：体量小但 PR 修复比高（160%），质量稳定。

### 🟢 单人维护梯队
- **DeepSeek TUI (CodeWhale)**（6 Issues / 16+ PRs）：维护者 Hmbown 一人主导 v0.9.1 紧急维护，**bus factor = 1 是核心风险**。

### 成熟度信号
- **最成熟**：Claude Code（Hook/Plugin 文档体系最完整）、OpenAI Codex（CLI 性能治理最系统）。
- **快速迭代**：OpenCode（2.0 重构）、Gemini CLI（依赖跨大版本）、Qwen Code（路线图密集）。
- **需关注治理**：Copilot CLI（反馈超前于修复）、CodeWhale（单人维护）。

---

## 6. 值得关注的趋势信号

### 🚨 趋势 1：Subagent 状态隔离成为新的"信任门槛"
Gemini CLI 的 `MAX_TURNS` 错误上报 GOAL/success（#22323）、Qwen Code 的主会话模型被静默覆盖（#7156）、Claude Code 的 worktree 兄弟会话被销毁（#77268）、DeepSeek TUI 的 sub-agent `agent_wait` 卡死（#1425）——**4 家工具同时在 Subagent 的状态边界上出现 P1 级问题**。这意味着"能不能跑多 agent"已成过去式，"能不能让多 agent 不互相污染/不静默失败"才是新阶段的竞争点。

### 🚨 趋势 2：TUI 性能治理成为 CLI 重度用户最强烈诉求
Codex 单日合并 16 项 TUI PR 创下本期记录，OpenCode/Kimi/Gemini/Pi 也均把 TUI 渲染热路径（Markdown layout、增量渲染、缓存复用）列入高优先级。**长会话 + 多 agent + 流式输出** 三者叠加正在打破传统 TUI 的性能预算。

### 🚨 趋势 3：可观测性从"加分项"升级为"准入门槛"
Codex 的 MultiAgentV2 加密回归（👍99）、Copilot CLI 的 OpenTelemetry skill span 需求（#3725）、OpenCode 的 OpenAI cache writes 报 0（#37745）——**3 个独立工具的社区同时把"审计/可观测性"列为生产化阻碍**。企业级落地对可追溯性的诉求正在逼迫工具方重新平衡"加密 vs. 调试可读性"。

### 🚨 趋势 4：多 Provider 适配成本成为隐性税
OpenCode 为 DeepSeek V4 / NVIDIA NIM / Kimi 各家 thinking 合约差异写适配胶水代码；Copilot CLI 在 `--add-dir` 下遭遇 Anthropic cache 块计数 400 错误（#4185）；Pi 为 DeepSeek V4 无 usage 数据做防御编程（#6818）——**Provider 适配已从"差异化优势"演变为"必须维护的兼容性矩阵"**，未来可能出现"Provider 适配框架"或"统一 thinking 合约规范"作为新基建。

### 🚨 趋势 5：用户配置被静默修改正在成为信任危机
Claude Code 的 `autoUpdates: false` 仍被自更新（#75607 👍8）、Kimi 的 deny 覆盖 allow 文档不一致（#2508）、OpenCode 的 Stripe 支付成功但余额 0（#37790）——**3 个工具同现"用户配置/状态被静默修改"类问题**，社区对"可控性、可解释性"诉求正在从零散反馈升级为系统性议题。

### 🚨 趋势 6：IDE 集成从"扩展"变"战场"
Pi 的 ACP 模式（Zed/JetBrains）历时 6 个月合入、Claude Code 的 VS 2026 集成（#15942 👍403 长期置

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-07-20 | 数据源：[anthropics/skills](https://github.com/anthropics/skills)**

---

## 1. 热门 Skills 排行

> 排序逻辑：综合 PR 评论量、关联 Issue 数量、修复紧迫度。

### ① skill-creator 评测体系修复集群（最热门）
**代表 PR**：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)、[#1169](https://github.com/anthropics/skills/pull/1169)、[#1061](https://github.com/anthropics/skills/pull/1061)

- **功能**：修复 `run_eval.py` 永远返回 `recall=0%` 的核心 Bug，并解决 Windows 下的子进程、编码、流读取兼容性问题。
- **社区热点**：这是当前仓库最焦灼的问题——`description` 自动优化循环（`run_loop.py` / `improve_description.py`）完全失效，10+ 独立复现（[#556](https://github.com/anthropics/skills/issues/556)）。换言之，整个 Skill 描述调优机制正在"对着噪声优化"。
- **状态**：全部 OPEN。多 PR 并行修复，说明社区尚未收敛到单一根因。

### ② Document 相关 Skills（文档处理是刚需）
**代表 PR**：
- [#514 document-typography](https://github.com/anthropics/skills/pull/514) —— 自动修复 AI 生成文档中的孤行/寡行/编号错位
- [#486 ODT skill](https://github.com/anthropics/skills/pull/486) —— OpenDocument 创建与解析
- [#541 fix(docx): w:id 冲突](https://github.com/anthropics/skills/pull/541) —— 防止 DOCX tracked change 破坏书签
- [#538 fix(pdf): 大小写引用](https://github.com/anthropics/skills/pull/538) —— 修复 Linux 下 PDF Skill 链接断裂

- **社区热点**：文档场景（PDF/DOCX/ODT）是 Skill 落地最频繁的领域，但稳定性差——大量"看似琐碎"的大小写、ID 冲突、引号问题导致技能直接失效。
- **状态**：全部 OPEN。

### ③ Meta Skills：Skill 自审与质量分析
**代表 PR**：
- [#83 skill-quality-analyzer & skill-security-analyzer](https://github.com/anthropics/skills/pull/83)
- [#1367 self-audit](https://github.com/anthropics/skills/pull/1367) —— "机械验证 + 四维推理质量门"

- **功能**：前者从结构/文档/示例/可维护性/安全性五个维度审计 Skill；后者在交付前自动验证文件 + 推理质量。
- **社区热点**：呼应 Issue [#492](https://github.com/anthropics/skills/issues/492)（39 评论，社区第一热帖）关于信任边界与 Skill 安全审计的强烈诉求。
- **状态**：全部 OPEN。

### ④ testing-patterns
**PR**：[#723](https://github.com/anthropics/skills/pull/723)

- **功能**：覆盖测试哲学（Testing Trophy）、单元测试、React 组件测试、集成/E2E 的完整测试栈最佳实践。
- **社区热点**：呼应"如何让 AI 写出更可靠测试"的普遍痛点；与代码审查、测试生成类需求直接相关。
- **状态**：OPEN。

### ⑤ color-expert
**PR**：[#1302](https://github.com/anthropics/skills/pull/1302)

- **功能**：覆盖 7+ 色彩命名系统（ISCC-NBS、Munsell、XKCD、RAL 等）与色彩空间选用表（OKLCH、OKLAB、CAM16）。
- **社区热点**：前端/设计场景下"色彩命名一致性 + 空间选择"是高频痛点。
- **状态**：OPEN。

### ⑥ pyxel（复古游戏开发）
**PR**：[#525](https://github.com/anthropics/skills/pull/525)

- **功能**：基于 [pyxel-mcp](https://github.com/kitao/pyxel-mcp) 提供 write → run_and_capture → inspect → iterate 的游戏开发闭环。
- **社区热点**：MCP + Skill 组合模式的代表性案例；游戏/创意场景的 Skill 化趋势。
- **状态**：OPEN（已维护 4 个月仍未合入，活跃度下降）。

### ⑦ SAP-RPT-1-OSS（企业级表格预测）
**PR**：[#181](https://github.com/anthropics/skills/pull/181)

- **功能**：在 SAP 业务数据上调用 SAP 表格基础模型做预测分析。
- **社区热点**：企业 ERP + 预测 AI 的典型场景，代表 Skill 向 B 端垂直领域渗透。
- **状态**：OPEN。

---

## 2. 社区需求趋势（Issues 提炼）

| 方向 | 代表 Issue | 评论数 | 核心诉求 |
|---|---|---|---|
| **🔐 安全与信任** | [#492 社区 Skill 冒充 anthropic/ 命名空间](https://github.com/anthropics/skills/issues/492) | **39** | 划分官方 vs 社区 Skill 的信任边界，避免权限提升滥用 |
| **🏢 企业级共享** | [#228 组织内 Skill 共享](https://github.com/anthropics/skills/issues/228) | 14 | 在 Claude.ai 内提供组织级 Skill 库/直链分享 |
| **🧰 skill-creator 工具链可靠性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) | 12 / 3 | `run_eval.py` 触发率 0%，优化回路完全失效 |
| **🪟 Windows 兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) / [#1050](https://github.com/anthropics/skills/pull/1050) | 3 | 子进程 PATHEXT、cp1252 编码、pipe select 三大 Unix-first 假设 |
| **📦 打包与去重** | [#189 document-skills 与 example-skills 重复](https://github.com/anthropics/skills/issues/189) | 6 | 插件安装引入重复 Skill，挤占上下文窗口 |
| **🧠 智能体记忆压缩** | [#1329 compact-memory](https://github.com/anthropics/skills/issues/1329) | 9 | 长时间任务的符号化状态表示，节省上下文 |
| **🛡️ Agent 治理** | [#412 agent-governance](https://github.com/anthropics/skills/issues/412) | 6 | 策略执行、威胁检测、审计追踪（已 CLOSED，需求仍在） |
| **🧩 互操作性** | [#16 Skill 暴露为 MCP](https://github.com/anthropics/skills/issues/16) | 4 | 把 Skill 包装为 MCP，让外部系统可调用 |
| **☁️ 多平台接入** | [#29 Bedrock 接入](https://github.com/anthropics/skills/issues/29) | 4 | 在 AWS Bedrock 上使用 Skill |
| **🔍 推理质量门** | [#1385 三阶段质量门](https://github.com/anthropics/skills/issues/1385) | 3 | 交付前/中/后多阶段质量把关 |

**结论**：需求集中于三类——**信任与安全**、**企业化部署能力**、**工具链自身可靠性**。

---

## 3. 高潜力待合并 Skills

> 满足"评论活跃 / 关联 Issue 多 / 解决明确痛点 / 跨平台通用"中至少三项的 OPEN PR。

| Skill | PR | 潜力理由 |
|---|---|---|
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 解决 100% AI 生成文档的版式问题，零外部依赖，价值面广 |
| **ODT skill** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐 ODF 生态，与 PDF/DOCX 形成完整办公文档矩阵 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 测试是开发者最高频诉求，覆盖前端 + 通用 |
| **color-expert** | [#1302](https://github.com/anthropics/skills/pull/1302) | 设计类 Skill 的稀缺品类，自包含、复用价值高 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 直接命中 #492 的安全/质量诉求，是生态级基础设施 |
| **skill-quality-analyzer + skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 同上，Skill 生态的"看门人" |
| **CONTRIBUTING.md** | [#509](https://github.com/anthropics/skills/pull/509) | 解决 #452 社区健康度问题，门槛极低、价值极高 |

> **特别说明**：所有 skill-creator 修复 PR（[#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323) 等）一旦合入，将立即解锁整个 Skill 自动调优生态，属于"一旦合并则生态级受益"的最高优先级批次。

---

## 4. Skills 生态洞察

> **一句话总结**：社区当前最集中的诉求是——**在 Skill 数量爆炸式增长之前，亟需建立"信任根 + 评测闭环"两道基础设施**（命名空间安全治理 + skill-creator 评测回路修复），否则生态将先于产品失稳。

---

# Claude Code 社区动态日报
**📅 2026-07-20**

---

## 1. 今日速览

今日最大动静来自 v2.1.215 版本对 `/verify` 与 `/code-review` 技能的默认行为调整——这两个原本由 Claude 自动调用的技能，升级后需用户手动触发，立即引发社区反弹（#79282）。与此同时，Claude Code 桌面端与 Windows 平台集中爆发多个回归性问题，覆盖图像附件处理（#79273）、VS Code 编辑器焦点行为（#79287）、worktree 父仓库污染（#79234、#79237）等高危场景，社区对此类隐性破坏表达了强烈担忧。开发者方面，Telegram 频道、状态栏 per-model 限速暴露、Agent 并行可视化等长尾需求持续升温。

---

## 2. 版本发布

### 🚀 v2.1.215（24 小时内发布）

**核心变更**：
- 取消了 Claude 自动调用 `/verify` 与 `/code-review` 技能的行为。用户须显式输入 `/verify` 或 `/code-review` 才能触发。

**社区反响**：
- 立即出现反对声音 [#79282](https://github.com/anthropics/claude-code/issues/79282)：依赖这两个技能做自动化质量门禁的用户被迫改为手动输入，希望保留自动触发能力或在 settings 中提供开关。
- 顺带引发多个关联回归报告（[#79287](https://github.com/anthropics/claude-code/issues/79287)、[#79275](https://github.com/anthropics/claude-code/issues/79275) 等），后续官方需重点排查。

---

## 3. 社区热点 Issues

| 排序 | Issue | 主题 | 关键看点 |
|------|-------|------|---------|
| 1 | [#15942](https://github.com/anthropics/claude-code/issues/15942) | **Visual Studio 2026 集成** | 💬 141 / 👍 403 —— 社区呼声最高的 IDE 整合需求，长期未推进，需官方明确路线图。 |
| 2 | [#64108](https://github.com/anthropics/claude-code/issues/64108) | **Opus 长会话工具调用泄漏为文本** | 💬 16 / 👍 30 —— 影响 Opus CLI 用户的关键可靠性问题，"court" 杂项 token + 原始 `<invoke>` 出现在 transcript 中表明存在解析层面的 bug。 |
| 3 | [#28986](https://github.com/anthropics/claude-code/issues/28986) | **VS Code 扩展显示当前模型与思考模式指示器** | 💬 9 / 👍 58 —— IDE 可观测性短板，影响多模型切换场景下的可调试性。 |
| 4 | [#64624](https://github.com/anthropics/claude-code/issues/64624) | **实时 Steer：生成中途发消息无需排队** | 💬 8 —— "Interrupt and steer" 文档承诺但未实现，标记 duplicate 多次仍反映出对流式交互的核心期待。 |
| 5 | [#75607](https://github.com/anthropics/claude-code/issues/75607) | **`x-cc-atis` 服务端实验静默移除 Opus 4.8 思考摘要 + 关闭 autoUpdate 仍被自更新** | 💬 6 / 👍 8 —— 同时引发隐私/可控性争议，是仅有的"用户设置被静默覆盖"类报告，应高度优先。 |
| 6 | [#77268](https://github.com/anthropics/claude-code/issues/77268) | **Worktree 回收销毁兄弟会话（含锁定+未提交数据）** | 💬 2 / 🏷 data-loss —— 高危数据丢失路径，#79234 报告父仓库状态被改、PR #79237 已提交修复。 |
| 7 | [#78527](https://github.com/anthropics/claude-code/issues/78527) | **v2.1.210 回归：PreToolUse `prompt` hook 拒绝后整轮终止** | 💬 1 —— 文档承诺 `ok:false` 应返回工具错误，实际行为不一致，影响安全审查脚本落地。 |
| 8 | [#79273](https://github.com/anthropics/claude-code/issues/79273) | **Windows 上处理图像附件 CLI 静默退出（exit code 1）** | 💬 0 —— 2.1.215 报告，100% 可复现，影响 Claude Desktop Win 用户。 |
| 9 | [#77846](https://github.com/anthropics/claude-code/issues/77846) | **statusLine 暴露 `rate_limits.model_scoped`（per-model weekly）** | 💬 2 —— v2.1.80 后暴露了 plan 级，但像 Fable 等模型的 weekly 窗口仍不可见，堵住了多模型配额监控。 |
| 10 | [#79276](https://github.com/anthropics/claude-code/issues/79276) | **Telegram 频道入站消息无法进入会话（出站正常）** | 💬 0 —— 插件 `server.ts` 已收到事件但未生成 `<channel>` turn，说明 channel-MCP 与 session 装配之间缺少事件消费链路。 |

---

## 4. 重要 PR 进展

| PR | 类型 | 内容摘要 |
|----|------|---------|
| [#79237](https://github.com/anthropics/claude-code/pull/79237) | 🛠 Bugfix | 为 spawn 添加 `_is_isolated_worktree` 守卫，避免 spawn_task/chip 把 `git checkout -b` 落到共享父仓库根目录。闭环 #79234 与 #77268。 |
| [#79211](https://github.com/anthropics/claude-code/pull/79211) | 🛠 Bugfix | 删除 `rule_engine.py` 中 `_extract_field` 内残留的 `re` 语法片段，修复 hook 模块加载失败导致下游误判计算任务的问题。 |
| [#79210](https://github.com/anthropics/claude-code/pull/79210) | 🛠 Bugfix | `/model` 选择器在持久化前剥离 ANSI 转义片段，避免把带 `[1m` 的样式化字符串写入 `settings.json`。 |
| [#79152](https://github.com/anthropics/claude-code/pull/79152) | 🛠 Bugfix | 调整 `/dedupe` 中的 Statsig 指标上报条件，仅在真正发出重复评论时上报 `github_duplicate_comment_added`。 |
| [#79151](https://github.com/anthropics/claude-code/pull/79151) | 🛠 Bugfix | `auto-close-duplicates.ts` 接收任意用户的 👎 反馈即阻止自动关闭，与 dedupe bot 文案一致。 |
| [#79150](https://github.com/anthropics/claude-code/pull/79150) | 📚 Docs | 让 code-review README 与当前基于 validation 的命令实现对齐（旧文档仍提 80 分阈值、blame agent 等已废弃设计）。 |
| [#79149](https://github.com/anthropics/claude-code/pull/79149) | 📚 Docs | 修正 commit-push-pr README 中"分析分支全量历史"等过期表述。 |
| [#79148](https://github.com/anthropics/claude-code/pull/79148) | 🛠 Bugfix | 为 hookify 示例规则文件补齐 `hookify.` 前缀，否则按文档拷贝后会静默失效。 |
| [#79140](https://github.com/anthropics/claude-code/pull/79140) | 🛠 Bugfix | ralph-wiggum 两个命令改用 `disable-model-invocation`，替代从未被读取的 `hide-from-slash-command-tool`，避免模型自调用 `/ralph-loop` 引发死循环。 |
| [#54094](https://github.com/anthropics/claude-code/pull/54094) | 🛠 Bugfix | 五个内置插件 hook 命令对 `${CLAUDE_PLUGIN_ROOT}` 加引号，修复含空格路径下 `/bin/sh` 词法切分失败问题。 |

---

## 5. 功能需求趋势

| 方向 | 信号强度 | 代表 Issue |
|------|---------|-----------|
| **IDE / 编辑器深度集成** | 🔥🔥🔥🔥🔥 | [#15942](https://github.com/anthropics/claude-code/issues/15942)（VS 2026）累计 👍403 仍置顶；[#28986](https://github.com/anthropics/claude-code/issues/28986)（模型/思考指示器）+58；VS Code focus 行为回归 [#79287](https://github.com/anthropics/claude-code/issues/79287) 暴露了 IDE 适配面正在变多。 |
| **多模型/模型可观测性** | 🔥🔥🔥🔥 | 模型选择器缺失（[#79285](https://github.com/anthropics/claude-code/issues/79285)）、Fable→Opus 自动降级（[#79272](https://github.com/anthropics/claude-code/issues/79272)）、per-model 限速暴露（[#77846](https://github.com/anthropics/claude-code/issues/77846)）、思考摘要被服务端实验静默删除（[#75607](https://github.com/anthropics/claude-code/issues/75607)）。 |
| **并行 Agent / 多会话** | 🔥🔥🔥🔥 | Agents 视图用颜色区分主从会话（[#79281](https://github.com/anthropics/claude-code/issues/79281)）、worktree 隔离（[#79234](https://github.com/anthropics/claude-code/issues/79234) / [#79237](https://github.com/anthropics/claude-code/pull/79237)）、worktree 销毁兄弟会话（[#77268](https://github.com/anthropics/claude-code/issues/77268)）。 |
| **TUI 交互 / 流式控制** | 🔥🔥🔥 | 实时 steer（[#64624](https://github.com/anthropics/claude-code/issues/64624)）、`/verify` 自动触发被取消（[#79282](https://github.com/anthropics/claude-code/issues/79282)）。 |
| **跨平台兼容性** | 🔥🔥 | Intel Mac kernel panic（[#74805](https://github.com/anthropics/claude-code/issues/74805)）、Windows 图像附件崩溃（[#79273](https://github.com/anthropics/claude-code/issues/79273)）、Windows Terminal 长 URL 折行（[#79277](https://github.com/anthropics/claude-code/issues/79277)）、`/doctor` 依赖 jq（[#79275](https://github.com/anthropics/claude-code/issues/79275)）。 |
| **Channels / 外部接入** | 🔥🔥 | Telegram 入站不通（[#79276](https://github.com/anthropics/claude-code/issues/79276)）、Cowork 浏览器选择器（[#79283](https://github.com/anthropics/claude-code/issues/79283)）。 |

---

## 6. 开发者关注点

- **静默改变用户配置的信任危机**：[#75607](https://github.com/anthropics/claude-code/issues/75607) 报告 `autoUpdates: false` 仍被自更新，并伴随未告知的服务端 A/B 实验删除思考摘要。该条已成为社区对"可控性、可解释性"议题的核心锚点。
- **高危数据丢失路径未拦截**：`spawn_task` 创建的 worktree 目录可能不是真正的 git worktree，进而把 `git checkout -b` 跑回共享主 checkout（[#79234](https://github.com/anthropics/claude-code/issues/79234)）；并发的兄弟会话 worktree 会被回收销毁（[#77268](https://github.com/anthropics/claude-code/issues/77268)，已标 `data-loss`）。开发者需要更明确的工作区边界与"软隔离 + 确认"机制。
- **IDE/Win/macOS 平台长尾 bug 凸显测试矩阵不足**：v2.1.215 单日就出现 Windows 图像附件崩溃、Intel Mac kernel panic、Windows Terminal URL 折行、`/doctor` 缺 jq、桌面端 focus 行为改变等多个平台特异性问题，呈"一刀切回归"模式。
- **Hook / Plugin 体系文档与实现脱节**：[#78527](https://github.com/anthropics/claude-code/issues/78527)（`prompt` hook 行为变更）、[#79148](https://github.com/anthropics/claude-code/pull/79148)（hookify 示例缺前缀）、[#54094](https://github.com/anthropics/claude-code/pull/54094)（`CLAUDE_PLUGIN_ROOT` 未引号）共同指向——hook 文档、示例脚本、loader 行为三者存在系统性偏差，建议官方做一次 hook API 文档审计。
- **模型自动降级与策略不透明**：Fable→Opus 在"安全/政企"任务上自动降级（[#79272](https://github.com/anthropics/claude-code/issues/79272)、[#79279](https://github.com/anthropics/claude-code/issues/79279)、[#79249](https://github.com/anthropics/claude-code/issues/79249)）多次复现，开发者难以预判产出质量。
- **本地化与多语言细节**：[#79284](https://github.com/anthropics/claude-code/issues/79284) 反映非英语页面脚部结构缺失近 65% 内链，社区 i18n 资源压力显现。
- **正向信号**：今日 PR 多来自 Codeturion，集中修复 dedupe 行为、`/dedupe` 指标噪音、README 与实现脱节等问题；显示社区维护者正在主动收敛"承诺—实现"漂移。

---

*日报基于 2026-07-20 GitHub 数据生成（1 个 Release、50 条 Issue、17 条 PR），覆盖核心趋势与高优先维护窗口。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-20**

---

## 📌 今日速览

今日 Codex 社区关注度最高的是 Windows 桌面端长期存在的性能与稳定性问题——多份高互动 Issue 集中在 AppHang、HID 设备枚举卡死、WMI/WMI Provider Host CPU 飙升以及 `taskkill.exe`/`conhost.exe` 进程残留等主题。与此同时，社区最热门的「点赞」票集中在 macOS 上 `syspolicyd`/`trustd` CPU 失控（👍 256）以及 MultiAgentV2 加密负载破坏任务审计（👍 99）两项长期缺陷。在 PR 端，过去 24 小时共合并 16 项 PR，几乎全部由 copyberry[bot] 提交，主题高度集中在 **TUI 渲染性能优化**（避免克隆、缓存复用、增量渲染），反映出团队当前正集中清理 TUI 路径上的冗余开销。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

> 依据评论数与 👍 数综合排序，挑出 10 个最值得关注的话题。

### 1. macOS 桌面端触发 syspolicyd/trustd 失控占用 CPU 与内存
- **#25719** · 评论 66 · 👍 **256**（社区热度榜首）
- Codex Desktop for macOS 反复触发 `syspolicyd`/`trustd` 进程，造成 CPU 与内存长时间异常占用。👍 数远高于其他 Issue，表明大量 Plus 用户均被波及；社区反馈已持续一个多月未得到根本解决。
- 🔗 https://github.com/openai/codex/issues/25719

### 2. Windows 11 Pro 上 Codex App 频繁卡顿/掉帧
- **#20214** · 评论 54 · 👍 68
- 即便在 Ryzen 5 5600 + 32GB RAM 的充足资源下，Windows 应用仍频繁出现 stutter/freezing，影响长时间使用体验。
- 🔗 https://github.com/openai/codex/issues/20214

### 3. Windows 端 serialport.node 反复延迟加载导致严重 UI 卡顿（已关闭）
- **#33375** · 评论 46 · 👍 30 · **状态：CLOSED**
- 报告 Codex Windows 应用因 `serialport.node` 延迟加载持续失败而出现严重 UI 延迟，问题已关闭，建议关注是否在后续版本彻底修复。
- 🔗 https://github.com/openai/codex/issues/33375

### 4. Windows 启动后 HID 设备枚举卡住导致主进程永久阻塞
- **#33780** · 评论 39 · 👍 8
- 26.715.2305.0 版本中，Electron 主进程在 `HID.node → hid.dll` 枚举一个不响应的 HID 设备时永久挂起，App 进入「Not Responding」。
- 🔗 https://github.com/openai/codex/issues/33780

### 5. Windows Browser Use 打开页面时 CrBrowserMain 崩溃（0xC0000005）
- **#32683** · 评论 25 · 👍 7
- Codex 启用 In-app Browser 后，在 Windows 上访问任意页面即在 `chrome.dll+0x2e08f46` 处发生访问违例崩溃，影响 ChatGPT Pro (20x) 高阶用户。
- 🔗 https://github.com/openai/codex/issues/32683

### 6. Windows 沙箱下 apply_patch 失败
- **#30009** · 评论 24 · 👍 7
- 文件编辑在 Windows 沙箱模式下因 sandbox 相关错误失败，是影响日常编码主流程的稳定性问题。
- 🔗 https://github.com/openai/codex/issues/30009

### 7. Windows App 反复 spawn git.exe 并留下孤儿进程
- **#17229** · 评论 24 · 👍 6
- Codex Windows App 反复执行 `git.exe status --porcelain=v1 -z`，并遗留大量 `conhost.exe` 孤儿进程，造成资源泄露。
- 🔗 https://github.com/openai/codex/issues/17229

### 8. Codex CLI 流式断连错误（已关闭）
- **#13811** · 评论 22 · 👍 1 · **状态：CLOSED**
- `stream disconnected before completion: error sending request for url (https://chatgpt.com/backend-api/codex/responses)` 错误在 3 月集中爆发，问题已关闭。
- 🔗 https://github.com/openai/codex/issues/13811

### 9. MultiAgentV2 加密消息破坏任务审计可读性（回归）
- **#28058** · 评论 21 · 👍 **99**
- 合并 PR #26210（加密 multi-agent v2 消息负载）后，0.137.0 之后的版本中任务审计轨迹变为不可读，影响调试与合规。
- 🔗 https://github.com/openai/codex/issues/28058

### 10. Windows 26.715 出现约 15s 的 AppHang / 10s 响应循环
- **#33884** · 评论 15
- 26.715 版本引入新的周期性「无响应」节律，叠加 0xC000007F 类崩溃后进一步放大对系统 UI 的影响。
- 🔗 https://github.com/openai/codex/issues/33884

---

## 🛠️ 重要 PR 进展

> 过去 24 小时 PR 共 17 条，绝大多数已合并，且高度集中于 TUI 渲染/订阅路径的性能优化。

### 1. 避免冗余 TUI subagent 元数据请求
- **#34234** · 已合并
- 跳过 fresh/forked 线程的回填，仅在 resume 后回填，降低不必要的 `thread/read` 调用。
- 🔗 https://github.com/openai/codex/pull/34234

### 2. 重新测量 transcript overlay 中的动态单元格
- **#34232** · 已合并
- 修复状态输出刷新后高度被缓存裁剪的可视化溢出问题。
- 🔗 https://github.com/openai/codex/pull/34232

### 3. 为分页线程持久化名称
- **#34229** · 已合并
- 新增可空 `name` 列，使分页线程拥有独立于派生标题/预览的稳定展示名。
- 🔗 https://github.com/openai/codex/pull/34229

### 4. 仅对当前 exec turn 回填 completion items
- **#34226** · 已合并
- 多 agent exec 共享事件流时，避免对非主 turn 的 `turn/completed` 通知触发回填。
- 🔗 https://github.com/openai/codex/pull/34226

### 5. TUI 差异渲染避免克隆 file changes
- **#34224** · 已合并
- `DiffSummary` 直接消费+排序，共享行数计算，减小渲染热路径开销。
- 🔗 https://github.com/openai/codex/pull/34224

### 6. 缓存 finalized Markdown 历史渲染
- **#34223** · 已合并
- 对 finalized agent 消息和提议计划按宽度缓存渲染结果，减少重复 layout。
- 🔗 https://github.com/openai/codex/pull/34223

### 7. 避免缓冲与 replay 无关的 thread 通知
- **#34222** · 已合并
- 不再为 raw response items、realtime audio 等不被消费的 replay 通知分配缓冲，释放内存。
- 🔗 https://github.com/openai/codex/pull/34222

### 8. 区分 TUI 命令完成与输出
- **#34218** · 已合并
- 输出 delta 先于命令完成到达时不应将命令标记为 inactive，修复中断处理时序问题。
- 🔗 https://github.com/openai/codex/pull/34218

### 9. 保留 visualization context 下的增量渲染
- **#34217** · 已合并
- 修复一旦传入 visualization context 即触发整段 Markdown 完整重渲染的问题。
- 🔗 https://github.com/openai/codex/pull/34217

### 10. 加速 TUI Markdown layout
- **#34216** · 已合并
- 批量分配 Markdown 表宽、跨 span URL 检测、复用 flattened styled-line 数据以提速 adaptive wrapping。
- 🔗 https://github.com/openai/codex/pull/34216

> 同期还合并了：#34206（MCP 图片不再常驻历史单元）、#34204（避免克隆缓冲历史行）、#34199（侧会话启动的 liveness race）、#34198（侧会话不带继承 turns）、#34197（Markdown collector 作为流式源）、#34194（渲染时不再克隆 thread 数据）等十余项 TUI 性能 PR。
> 唯一仍 OPEN 的 PR 是 **#30235**——在 Unix 上把 `git status` 放入独立进程组并按 group 杀超时进程，呼应 Issue #17229。

---

## 📈 功能需求趋势

从今日更新的 50 条 Issue 中可识别出以下社区关注的重点方向：

1. **桌面端稳定性与性能**（占比最高）
   - Windows：AppHang、HID 枚举阻塞、WMI 风暴、`taskkill.exe`/`conhost.exe` 残留、长会话卡死。
   - macOS：`syspolicyd`/`trustd` 失控、Mobile Remote 同步闪烁、`logs_2.sqlite` 高频 TRACE 写入。
2. **TUI / 终端体验**
   - 流式 Markdown 渲染、scrollback 丢行、可视化上下文下的重渲染、长对话布局性能。
3. **VS Code / IDE 扩展**
   - 打开 Codex 会话为独立编辑器 tab（#20951）、Remote-SSH 加载失败（#27597）、Linux webview `ERR_FAILED`（#32530）、面板空白（#32388）。
4. **多 Agent 与可观测性**
   - MultiAgentV2 加密导致审计不可读（#28058），反映社区对任务可追溯性的强烈诉求。
5. **会话/隐私管理**
   - Codex Cloud 归档会话缺少显式删除控制（#24610），开发者关注数据保留与隐私合规。
6. **沙箱与补丁链路**
   - Windows sandbox 下 `apply_patch` 失败（#30009、#31220），文件编辑主流程受阻。
7. **MCP 集成**
   - 仅含 tool、无 resource 的 MCP 服务器（如 Context7）无法被发现（#14242）；MCP 图片/资源在历史中的内存管理。
8. **Skill 与扩展机制**
   - 符号链接下嵌套 `SKILL.md` 递归注册（#22275）。

---

## 🧭 开发者关注点

- **跨平台稳定性是当前最大痛点**：Windows 桌面端被多个高分 Issue 反复点名，社区对 ChatGPT/Codex 共享 Electron 底座带来的副作用（设备枚举、进程管理、日志 IO）意见集中。👍 256 的 macOS Issue 表明 Plus/Pro 用户已把桌面端的「资源耗尽」视为影响生产力的首要问题。
- **TUI 是 CLI 重度用户的核心战场**：今日合并的 16 项 PR 全部围绕 TUI 渲染热路径，集中在「少克隆、少分配、缓存复用、避免不必要重渲染」四点；说明 Codex 团队已把 CLI 端大对话/多 agent 场景下的卡顿列入高优先级治理清单。
- **可观测性与审计需求被低估**：MultiAgentV2 的加密回归拿到 👍 99，说明企业级与重度用户非常在意 agent 任务的可追溯性，加密和审计之间的平衡正在成为下一阶段的设计焦点。
- **VS Code 集成仍存在「不如 CLI/Claude Code」的体验差**：呼声最高的扩展功能请求（#20951 👍 30）是「将会话打开为完整编辑器 tab」，反映开发者期待更深度的工作区级集成。
- **沙箱 + 文件编辑链路是生产可用性的卡点**：`apply_patch` 在 Windows sandbox 下的反复失败（#30009、#31220）意味着即使桌面应用可用，核心编码流程仍可能在企业策略/沙箱环境下被阻断，需要更细粒度的错误提示与降级路径。
- **隐私与数据生命周期**：归档会话缺删除入口（#24610 👍 15）显示开发者已经把 Codex 视为长期上下文载体，期望平台提供明确的「真正删除」语义，而不仅是 archive。

---

*数据来源：github.com/openai/codex · 抓取窗口：2026-07-19 ~ 2026-07-20*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-20**

---

## 📌 今日速览

今日 Gemini CLI 发布 `v0.52.0-nightly.20260720.gacae7124b` 夜间版本，仓库活跃度持续高涨，过去 24 小时内 50 个 Issue 与 23 个 PR 被更新。社区关注焦点高度集中在 **Subagent（子智能体）系统的稳定性** 与 **Auto Memory（自动记忆）机制的改进** 上，多个 P1 级 Bug 反映出子智能体在悬挂、错误报告、终止语义等方面仍存在明显短板；PR 端则由 Dependabot 的批量依赖升级（TypeScript 7.0、ESLint 10、Vitest 4 等）主导。

---

## 🚀 版本发布

### v0.52.0-nightly.20260720.gacae7124b

自动化发布的 nightly 版本，提交哈希 `gacae7124b`。变更日志对比上一夜间版本（`20260719`）的差异可在以下链接查看：
👉 [Release v0.52.0-nightly.20260720.gacae7124b](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260719.gacae7124b...v0.52.0-nightly.20260720.gacae7124b)

> ⚠️ 夜间版本面向尝鲜用户与 CI 验证，生产环境建议等待稳定版。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功 ⭐P1
- **11 条评论** | 👍 2
- `codebase_investigator` 子智能体在达到最大轮次限制时仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了实际的中断。**这是子智能体可观测性的核心语义问题**，影响后续工作流的判断。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 永久悬挂 ⭐P1 | 👍 8（最高赞）
- **7 条评论** | 👍 8
- 当 Gemini CLI 委派给 generalist agent 时会无限挂起，连简单的文件夹创建都无法完成。**这是社区呼声最高的痛点**，8 个赞反映了大量用户遇到该问题。

### 3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 构建稳健的组件级评估体系 ⭐P1
- **7 条评论**
- 在已有 76 个 behavioral eval 测试、6 个 Gemini 模型上运行的基础上，**升级为更系统的"组件级评估"基础设施**，是从手工回归走向自动化的关键 EPIC。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索/映射的价值 ⭐P2
- **7 条评论**
- 探索通过 AST 感知的工具（tilth、glyph 等）**精确读取方法边界、降低 token 噪声、改进 codebase_investigator**，是平台智能化方向的重要议题。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不使用自定义 skills 与 sub-agents ⭐P2
- **6 条评论**
- 反馈 Gemini 默认不会主动调用用户自定义的 skill/sub-agent，只有显式指令才会触发。**关系到"开箱即用"的能力下沉**，是产品体验层的重要议题。

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话 ⭐P2
- **5 条评论**
- Auto Memory 对被判定为"低信号"的会话**无法完成标记**，导致同一会话会无限循环。SandyTao520 提交的 Auto Memory 系列 Bug 之一。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input" ⭐P1 | 👍 3
- **4 条评论**
- 即使简单 shell 命令已完成，CLI 仍显示为 active 并等待用户输入。**直接影响几乎所有 CLI 用户**，是核心使用体验问题。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 ⭐P1
- **4 条评论**
- Wayland 桌面环境下浏览器子智能体无法启动，是 **Linux 桌面用户的重要兼容性问题**。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — `~/.gemini/agents/` 中的 symlink 不被识别为 agent ⭐P2
- **4 条评论**
- 用户希望通过 symlink 共享 agent 配置，**典型"配置管理"诉求**，阻塞 dotfiles 工作流。

### 10. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) — Agent 应主动阻止破坏性行为 ⭐P2
- **3 条评论**
- 建议让 Agent 在 `git reset --force` 等危险操作前提示或优先选择更安全的替代方案。**关系到 Agent 的"安全护栏"建设**，是用户信任度的关键。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#28446](https://github.com/google-gemini/gemini-cli/pull/28446) — OAuth token 改用原生 fetch 修复 "Premature close" ⭐P1
- **area/security** | size/m
- 修复某些 headless VPS 上 `gemini login` 在 token 交换时崩溃的问题，**修复 Issue #28440**，对 CI/CD 与远程开发场景影响重大。

### 2. [#28386](https://github.com/google-gemini/gemini-cli/pull/28386) — 修复 VS Code 激活 Disposables 跟踪 bug ⭐P2
- **area/core** | size/m
- 修复 Issue #27790：VS Code 配套扩展的 `context.subscriptions.push(...)` 因逗号表达式只追踪最后一个 Disposable，导致资源泄漏。

### 3. [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) — 新增 Windows PowerShell 故障排查文档 ⭐P2
- **area/core** | size/s
- 补充 Windows 全局 npm 安装后 PowerShell 中 `gemini` 命令无法运行的解决方案，**改善 Windows 入门体验**。

### 4. [#28456](https://github.com/google-gemini/gemini-cli/pull/28456) — 批量升级 75 个 npm 依赖 ⚠️XL
- **dependencies** | size/xl
- Dependabot 一次性更新 75 个依赖包，包含 marked、@google/genai 等核心库，需关注潜在兼容性风险。

### 5. [#28461](https://github.com/google-gemini/gemini-cli/pull/28461) — TypeScript 5.8.3 → 7.0.2 ⚠️L
- **dependencies-dev** | size/l
- 跨大版本升级 TypeScript 到 7.0，**可能引入编译错误**，开发者需关注。

### 6. [#28459](https://github.com/google-gemini/gemini-cli/pull/28459) — @google/genai 1.30.0 → 2.11.0 ⭐S
- **dependencies** | size/s
- Google 官方 GenAI SDK 升级到 2.x 大版本，**是核心 API 依赖**，需关注 API 变化。

### 7. [#28458](https://github.com/google-gemini/gemini-cli/pull/28458) — Vitest 3.1.1 → 4.1.10 ⚠️XL
- **dependencies** | size/xl
- 测试框架跨大版本升级，可能影响 CI 行为。

### 8. [#28462](https://github.com/google-gemini/gemini-cli/pull/28462) — ESLint 9.24.0 → 10.7.0 ⭐M
- **dependencies-dev** | size/m
- Lint 工具升级，可能带来新规则检查，影响贡献者提交。

### 9. [#28463](https://github.com/google-gemini/gemini-cli/pull/28463) — @agentclientprotocol/sdk 0.16.1 → 1.2.1 ⭐S
- **dependencies** | size/s
- Agent Client Protocol SDK 升级到 1.x，**与 IDE/编辑器集成相关**。

### 10. [#28450](https://github.com/google-gemini/gemini-cli/pull/28450) — 升级 actions-dependencies 组（含 google-github-actions/run-gemini-cli）
- 批量升级 lychee-action、compressed-size-action 与 google-github-actions/run-gemini-cli，**直接影响 GitHub Actions CI 工作流**。

> ℹ️ 大批量依赖升级（#28456、#28458、#28461）建议关注后续回归测试报告。

---

## 📈 功能需求趋势

从今日 50 条活跃 Issue 提炼出以下五大方向：

| 方向 | 代表 Issue | 社区关注度 |
|------|-----------|-----------|
| **🤖 Subagent 系统稳定性** | #22323, #21409, #21763, #22093, #22267, #21983 | ⭐⭐⭐⭐⭐ 最高 |
| **🧠 Auto Memory / 记忆系统** | #26516, #26522, #26523, #26525 | ⭐⭐⭐⭐ 高度集中（同一作者批量提交）|
| **🌳 AST 感知代码理解** | #22745, #22746, #24353 | ⭐⭐⭐⭐ EPIC 级别调研 |
| **🛡 权限与安全护栏** | #22672, #26525, #22093 | ⭐⭐⭐ 长期方向 |
| **🖥 平台兼容 / 终端渲染** | #25166, #21983, #21924, #24935 | ⭐⭐⭐ 影响实际可用性 |

**核心洞察**：当前社区已从"能用"进入"好用"阶段——**子智能体的可观测性、终止语义、跨平台兼容性** 成为最迫切的改进方向；同时 SandyTao520 提交的 Auto Memory 系列 Issue 预示着该项目正在构建更完善的"记忆与上下文"基础设施。

---

## 💬 开发者关注点

综合 Issue 评论与 PR 反馈，开发者社区主要痛点归纳如下：

### 🔴 高频痛点
1. **Subagent 挂起无响应** — 即使简单任务（建文件夹）也会无限挂起，无超时/恢复机制（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)、[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）
2. **错误的状态报告** — 子智能体在失败时仍报告 `GOAL/success`，破坏上层编排逻辑（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）
3. **Shell 假死** — 命令已完成但仍卡在"等待输入"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）
4. **Subagent 默认不被触发** — 显式指令才能调用，无法"开箱即用"（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）

### 🟡 体验改进需求
5. **Wayland 浏览器兼容**（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）
6. **Symlink 配置文件识别**（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）
7. **终端缩放时闪烁与性能**（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）
8. **Windows PowerShell 安装体验**（[#28447](https://github.com/google-gemini/gemini-cli/pull/28447)）

### 🟢 长期能力诉求
9. **Agent 自描述能力** — CLI 应准确传达自身标志、热键（[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）
10. **子智能体轨迹可分享** — `/chat share` 支持子智能体上下文（[#22598](https://github.com/google-gemini/gemini-cli/issues/22598)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)）

> 💡 **结论**：Gemini CLI 当前正处于从"工具型 CLI"向"多智能体协作平台"演进的关键期。**短期最需要解决的是 Subagent 的可靠性问题**（终止语义、超时、可观测性），**中长期投资方向则是 Auto Memory 与 AST 感知的代码理解能力**。

---

*日报基于 GitHub 公开数据生成 · 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-20**

---

## 📌 今日速览

今日 Copilot CLI 仓库活跃度集中在 **Issue 端**——共 21 条 Issue 更新，但 **无新版本发布**，PR 端仅有 1 条 2023 年的历史 PR 被关闭。讨论焦点集中在 **GPT-5.6 与 Plan Mode 的回归问题**、**队列消息管理**（连续 3 条相关 Issue）以及 **Claude 子代理与 `--add-dir` 的兼容性问题**。社区反映出对交互体验打磨和模型稳定性的强烈期待。

---

## 🚀 版本发布

⚠️ **过去 24 小时内无新版本发布。**

---

## 🔥 社区热点 Issues

### 1. [#1857](https://github.com/github/copilot-cli/issues/1857) — 允许取消/删除已排队的消息
- **作者**: dorlugasigal | 👍 **24** | 💬 8
- **状态**: OPEN（高赞）
- **摘要**: 使用 `Ctrl+Q` / `Ctrl+Enter` 排队的消息在 Agent 繁忙时无法取消或移除，会按顺序自动执行。
- **关注点**: 这是目前仓库**获赞最高的活跃 Issue**，反映出队列管理已成为 TUI 交互的明显痛点，并催生了后续多个衍生 Issue（#4179、#4182）。

### 2. [#4188](https://github.com/github/copilot-cli/issues/4188) — Plan Mode 回归：阻断 shell 命令
- **作者**: wsilveiranz | 💬 0 | **更新于今天**
- **摘要**: 最新版本中 Plan Mode 阻断了 `gh` 等 CLI 工具调用，影响问题创建/读取等规划流程。
- **关注点**: 这是 **今日新增** 的回归报告，与 #4172 高度相关——可视为 Plan Mode 系列问题的爆发点，开发者应重点关注。

### 3. [#4024](https://github.com/github/copilot-cli/issues/4024) — Voice 模式：所有内置 ASR 模型静默失败
- **作者**: sylvanc | 💬 **13** | 👍 0
- **摘要**: `/voice` 命令成功录音但返回空文本转写，涉及 `nemotron_speech`（RNNT）路由 bug。
- **关注点**: 评论数仅次于 #1857，说明语音输入是社区关注的新兴场景；该 bug 涉及 Foundry Local Core 多模态路由，影响全部 3 个内置模型。

### 4. [#4172](https://github.com/github/copilot-cli/issues/4172) — GPT-5.6 模型退出 Plan Mode 不稳定
- **作者**: ma-ts | 💬 1
- **摘要**: 使用 GPT-5.6 模型创建 Plan 后，常卡在 "Plan saved to plan.md..." 而不提示用户执行。
- **关注点**: 与新模型集成相关的关键稳定性问题，提示 Copilot CLI 在拥抱 GPT-5.6 系列时存在交互层缺陷。

### 5. [#4185](https://github.com/github/copilot-cli/issues/4185) — `--add-dir` 导致 Claude 子代理调用失败
- **作者**: spqian | 💬 0
- **摘要**: 启动时携带 `--add-dir` 时，所有运行在 Anthropic (Claude) 模型上的子代理请求立即失败：`400 A maximum of 4 blocks with cache_control ... Found 5`。
- **关注点**: 这是 **Anthropic 模型适配层的明确 bug**，涉及 prompt cache 控制块计数，影响所有 `--add-dir` 用户。

### 6. [#4183](https://github.com/github/copilot-cli/issues/4183) — 自动压缩无法避免 CAPI 5MB 请求体限制
- **作者**: jay-tau | 💬 0
- **摘要**: 长会话即使 token 容量未满，序列化后请求体可能突破 CAPI Responses 独立的 5MB 上限，自动压缩机制无法防止。
- **关注点**: 揭示了 **context 窗口 vs. 请求体大小** 两套限制的差异，是 Agent 长会话架构的关键短板。

### 7. [#4180](https://github.com/github/copilot-cli/issues/4180) — TUI 忽略 PTY 键盘输入（破坏自动化工具链）
- **作者**: jmirandasq | 💬 0
- **摘要**: 当通过程序化 PTY（agent orchestrators、tmux、expect 等）运行 TUI 时，所有按键输入（除 Ctrl+C）均被忽略。
- **关注点**: 直接影响 **Agent-to-Agent 编排场景**，对构建在 Copilot CLI 之上的自动化基础设施是阻断性问题。

### 8. [#3725](https://github.com/github/copilot-cli/issues/3725) — 为 OpenTelemetry traces 增加 skill 级别 span
- **作者**: Alexk2309 | 💬 1
- **摘要**: 当前 skill 调用产生的 tool calls 平铺在根 invoke_agent span 下，无法追溯到具体 skill。
- **关注点**: 代表社区对 **可观测性（Observability）** 的明确需求，是企业落地生产化使用的重要前置条件。

### 9. [#4179](https://github.com/github/copilot-cli/issues/4179) — 点击已排队消息以编辑
- **作者**: petrroll | 💬 1
- **摘要**: TUI 已支持多种鼠标点击，但点击已排队消息无法进入编辑。
- **关注点**: 与 #1857 形成「队列管理三件套」，反映社区对 TUI 鼠标交互一致性的期待。

### 10. [#4174](https://github.com/github/copilot-cli/issues/4174) — ACP server 未暴露 token/上下文用量
- **作者**: maxplangg | 💬 0
- **摘要**: `copilot --acp` 模式下，任何协议消息均未携带 token 使用、上下文消耗或成本信息。
- **关注点**: ACP 协议作为 **Agent 编辑器集成** 的标准通道，缺乏用量元数据将限制其在 Zed、JetBrains 等 IDE 中的深度集成。

---

## 📥 重要 PR 进展

⚠️ **过去 24 小时内仅 1 条 PR 更新，且为历史归档：**

- [#1](https://github.com/github/copilot-cli/pull/1) — *Create ownership.yaml*（已 CLOSED，2023 年提交）

**今日无活跃的 PR 提交或合并。** 这意味着所有 21 条更新均为 Issue 端，开发者反馈尚未流入代码层。建议关注维护者何时开始着手处理 Plan Mode 回归（#4188、#4172）这一当前最紧迫的问题群。

---

## 📈 功能需求趋势

从今日活跃 Issue 中可提炼出以下社区关注的功能方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **队列/排程管理** | #1857, #4179, #4182 | 🔥🔥🔥（多 Issue 联动） |
| **Plan Mode 体验打磨** | #4188, #4172, #4173 | 🔥🔥🔥（GPT-5.6 兼容性） |
| **可观测性 (OpenTelemetry)** | #3725 | 🔥🔥 |
| **多模型适配（Claude / GPT-5.6 / Nemotron）** | #4185, #4172, #4024 | 🔥🔥 |
| **企业版路由与身份** | #4177 | 🔥 |
| **ACP 协议增强** | #4174 | 🔥 |
| **桌面应用启动性能** | #4176 | 🔥 |
| **语音/多模态输入** | #4024 | 🔥 |
| **自动化与编排兼容性** | #4180 | 🔥 |

---

## 🛠️ 开发者关注点

综合今日社区反馈，开发者最集中的痛点集中在以下五个方面：

1. **Plan Mode 行为不一致** —— 在新 GPT-5.6 模型上退出流程不可靠（#4172、#4188），且子代理可能继承陈旧的写入门控（#4173）。这削弱了 Plan→Implement 工作流的确定性。

2. **多模型后端的协议兼容性** —— Claude 模型在 `--add-dir` 下报 400 缓存块超限（#4185），暴露 Anthropic prompt cache 块计数与 Copilot CLI 的不匹配。

3. **会话管理的边界条件** —— CAPI 5MB 请求体限制无法被自动压缩覆盖（#4183）；ACP 协议不暴露 token 用量（#4174）；PTY 自动化被 TUI 拒绝（#4180）。这三类问题共同指向 Copilot CLI 在 **长会话与编排化使用场景** 上的成熟度不足。

4. **TUI 一致性与可用性** —— 队列消息无法编辑（#4179）、`/btw` 中无法粘贴图片（#4181）、复制路径仅复制空白（#4184）——表面看是小问题，但反映出 1.0.72 版本在细节交互上的退化。

5. **新模型与新功能的质量门** —— Voice 模式全部 ASR 模型静默失败（#4024）说明 Nemotron 语音栈尚未完成端到端验证。

> 💡 **维护建议**：今日 Issue 分布呈典型"反馈超前于修复"的态势——建议优先合并与 **Plan Mode + GPT-5.6** 相关的修复 PR，避免社区信任度在 1.0.x 持续下滑。

---

*本日报基于 GitHub Copilot CLI 仓库 2026-07-19 至 2026-07-20 之间的公开数据自动生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-20**

---

## 📌 今日速览

过去 24 小时内仓库活跃度较高，社区聚焦于 **会话管理（session/context）相关的稳定性修复**：连续出现多个围绕 `/undo`、`/fork`、`web` 模式上传去重、系统提示冻结等问题的 Issue 与对应修复 PR，由开发者 **Nas01010101** 集中提交。同期，Hooks 系统迎来了 **`MessageDisplay` 中途流式事件** 的提案与实现，扩展了外部消费者实时响应模型回复的能力。此外，开发者对"远程控制"特性的呼声依然强烈（Issue #1282 👍13）。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。如需了解最新版本，可参考仓库 `main` 分支或最近一次稳定版。

---

## 🔥 社区热点 Issues

| # | 标题 | 作者 | 👍/💬 | 重要性 |
|---|---|---|---|---|
| [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | **[Feature]** Remote Control — 跨设备续接本地会话 | CatKang | 13 / 5 | ⭐⭐⭐ 长期高呼声功能，建议社区重点跟进 |
| [#2508](https://github.com/MoonshotAI/kimi-cli/issues/2508) | **[Bug]** 权限规则顺序语义矛盾：deny 无视文档声明始终覆盖 allow | Julzilla | 0 / 1 | ⭐⭐⭐ 涉及安全模型，建议官方澄清文档与行为 |
| [#2521](https://github.com/MoonshotAI/kimi-cli/issues/2521) | **[Bug]** Windows 版 herdr 中方向键无法选择选项 | RambleRainbow | 0 / 0 | ⭐⭐ Windows 平台可用性问题，影响交互体验 |
| [#2517](https://github.com/MoonshotAI/kimi-cli/issues/2517) | **[Bug]** `/undo`、`/fork` 在压缩或转向会话中裁剪位置错误 | Nas01010101 | 0 / 0 | ⭐⭐⭐ 涉及会话核心机制，根因已定位并有对应 PR |
| [#2511](https://github.com/MoonshotAI/kimi-cli/issues/2511) | **[Feat]** Hooks 新增中途流式事件（MessageDisplay） | yanchenko | 0 / 0 | ⭐⭐ 完善 Hooks 生态，已有 PR 跟进 |

> ⚠️ 过去 24 小时仅有 5 条 Issue 更新，已全部覆盖。

---

## 🛠 重要 PR 进展

| # | 标题 | 作者 | 状态 | 要点 |
|---|---|---|---|---|
| [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | **fix(session):** 将 fork/undo 上下文裁剪对齐到 wire turns | Nas01010101 | 🟢 OPEN | 解决 #2517、#1974，并间接修复 #2049 历史不一致问题；新增回归测试 |
| [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | **fix(app):** 会话恢复时刷新冻结的系统提示 | Nas01010101 | 🟢 OPEN | 解决 #2420，恢复会话后可正确加载新加入的 skills / AGENTS.md |
| [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | **fix(web):** 持久化上传 `.sent` 标记 | Nas01010101 | 🟢 OPEN | 解决 #2413，`kimi web` 重启后不再重复发送历史文件/图片 |
| [#2515](https://github.com/MoonshotAI/kimi-cli/pull/2515) | **perf(kosong):** 缓冲流合并并避免对每个 delta 深拷贝 | parthgupta9999 | 🟢 OPEN | 将流式合并由 O(n²) 优化，消除 `model_copy(deep=True)` 的开销，长响应性能显著提升 |
| [#2513](https://github.com/MoonshotAI/kimi-cli/pull/2513) | **fix(kosong):** 递归解码双重编码的 tool-call 参数 | nitishagar | 🟢 OPEN | Moonshot API 返回的 `function.arguments` 嵌套值存在双重 JSON 编码，新增 `decode_tool_arguments` 工具统一处理 |
| [#2514](https://github.com/MoonshotAI/kimi-cli/pull/2514) | **fix(skill):** 技能发现时忽略 plugins 容器的杂散 markdown | nitishagar | 🟢 OPEN | 修正 plugins 目录被当作通用 skills 根目录扫描的逻辑，遵循文档定义 |
| [#2512](https://github.com/MoonshotAI/kimi-cli/pull/2512) | **feat(hooks):** 新增 `MessageDisplay` 中途流式事件 | yanchenko | 🟢 OPEN | 关闭 #2511，模型回复流式输出时持续触发，可用于 TTS/增量日志/进度 UI |
| [#2516](https://github.com/MoonshotAI/kimi-cli/pull/2516) | Create kimi-cli（skills & plugins） | owndababoubi1993-cyber | 🔴 CLOSED | 与仓库本身重复，已被关闭；提醒贡献者先在 Issue 中与维护者对齐再提 PR |

---

## 📈 功能需求趋势

从近 24 小时的 Issue 与 PR 中可观察到以下方向：

1. **跨设备 / 远程控制** — Issue #1282 长期高热度（👍13），用户期望摆脱本地终端束缚。
2. **Hooks 生态扩展** — #2511/#2512 提出 `MessageDisplay` 中途流式事件，补齐实时观测能力，对接 TTS / 直播式 UI 等场景。
3. **会话与上下文健壮性** — `undo`、`fork`、系统提示冻结、上传去重等问题的集中爆发，反映用户对"长期、跨会话工作流"可靠性要求上升。
4. **Web 模式体验打磨** — `kimi web` 的文件去重、系统提示刷新成为新焦点，Web 端使用率提升。
5. **性能优化** — 流式合并深拷贝问题是社区开发者自发贡献的典型性能痛点。

---

## 💡 开发者关注点

- **会话一致性与可恢复性**：`/undo`、`/fork`、`web` 重启、恢复会话时上下文漂移是最集中的痛点，开发者期望"恢复即如初见"。
- **平台兼容性**：Windows 下 herdr 的方向键交互问题暴露 TUI 库在 Windows 上的兼容性短板。
- **权限模型可预期性**：Issue #2508 指出文档与实际行为（deny 覆盖 allow）不一致，开发者期望规则匹配"首次命中即生效"的直觉语义。
- **Hooks 可观测性**：希望在模型生成过程中而非仅回合结束获得回调，以便做实时反馈。
- **流式数据处理效率**：长对话下的深拷贝 / 字符串拼接成为隐性瓶颈。
- **API 兼容性**：Moonshot API 的双重编码 `function.arguments` 需要客户端健壮性兜底。

---

*日报基于 GitHub 公开数据自动生成，仅反映过去 24 小时活跃内容。建议结合 PR 评审进度与 Issue 维护者回复综合判断。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期**：2026-07-20
**数据来源**：[anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 一、今日速览

今日 OpenCode 仓库进入密集修复期，没有新版本发布，但社区活跃度依然高涨：过去 24 小时有 50 条 Issue 更新和 50 条 PR 动态。社区焦点集中在三大方向——**多模型提供商适配**（DeepSeek、Kimi、NVIDIA NIM）、**TUI 终端渲染稳定性**（ARM64、render loop、黑屏）以及 **2.0 架构演进**（事件流总线、SSE 客户端重构）。同时出现 1 个安全相关 Issue（CWE-601 开放重定向）和 1 个 DoS 风险报告，建议核心维护者优先关注。

---

## 二、版本发布

过去 24 小时无新版本发布，跳过此章节。建议关注即将到来的 v1.18.x 补丁对 Desktop 端 sqlite 崩溃、Desktop npm install 的修复落地情况。

---

## 三、社区热点 Issues

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) Auto-discover models from OpenAI-compatible provider endpoints**
   25 条评论、182 👍。热度最高的功能请求。当前 LM Studio、Ollama、llama.cpp 等本地提供商的模型需要手动在 `opencode.json` 中逐个配置，社区强烈期待自动发现机制，是 YOLO 本地化部署体验的关键卡点。

2. **[#7801](https://github.com/anomalyco/opencode/issues/7801) [FEATURE] Plan Mode 自动切换到 Build Mode**
   8 条评论、26 👍。Plan 模式准备就绪时自动进入 Build 模式执行确认，目前需要二次确认被认为浪费 token、流程割裂。

3. **[#19130](https://github.com/anomalyco/opencode/issues/19130) Windows ARM64 原生：OpenTUI 通过 bun:ffi dlopen TinyCC 失败**
   11 条评论。ARM64 原生二进制命令可用但 TUI 报错，影响 Snapdragon X 系列用户在 Windows 11 上的体验，是平台覆盖的重要缺口。

4. **[#35265](https://github.com/anomalyco/opencode/issues/35265) ResourceExhausted: Worker 本地总请求限制**
   9 条评论。延续 #34613/#34657 讨论，限流插件仍未合并，长期阻碍高并发工作流。

5. **[#22422](https://github.com/anomalyco/opencode/issues/22422) 内存泄漏告警（CLOSED）**
   9 条评论。`MaxListenersExceededWarning` 报告 EventTarget 潜在泄漏，已关闭，但相关讨论仍在 EventEmitter/EventTarget 资源治理中持续。

6. **[#9955](https://github.com/anomalyco/opencode/issues/9955) TUI 垂直空间浪费严重**
   8 条评论、17 👍。顶部、底部组件过厚、上下留白过多；用户希望对照其他 CLI Agent 进行紧凑布局优化。

7. **[#37814](https://github.com/anomalyco/opencode/issues/37814) Bug 报告：上传大/二进制文件触发持久崩溃循环（DoS 风险）**
   上传 4M 字符 Burp Suite 日志后客户端 OOM、持久化崩溃循环。属于**安全/稳定性双类别**，建议尽快限制文件大小或转为流式处理。

8. **[#37807](https://github.com/anomalyco/opencode/issues/37807) 控制台 /auth/authorize 开放重定向漏洞 (CWE-601)（CLOSED）**
   安全研究者在 `packages/console/app/src/routes/auth/authorize.ts` 发现 OAuth 流程中 `continue` 参数可导致钓鱼攻击，已关闭，修复细节待审计。

9. **[#37745](https://github.com/anomalyco/opencode/issues/37745) OpenAI cache writes 始终报告为 0**
   自 OpenAI 5.6 起 cache writes 开始计费，但 OpenCode 仍报 0，cache reads 正常。对账单错误直接影响成本可见性。

10. **[#37790](https://github.com/anomalyco/opencode/issues/37790) OpenCode Go 订阅支付成功但余额显示不足**
    Stripe 扣款成功但工作区仍提示 "Insufficient balance"，导致付费用户无法使用，影响核心商业功能信誉。

---

## 四、重要 PR 进展

1. **[#37828](https://github.com/anomalyco/opencode/pull/37828) refactor: 抽出共享 util 包**（thdxr）
   新增 `@opencode-ai/util`，将 host/runtime 基础设施从 Core 中剥离，CLI/Core/Server/TUI/Simulation/SDK Next/V1 均改为直接引用，移除对 Core 的 DB/event/project/session 依赖测试。**关键基础设施重构**，影响后续 2.0 边界划分。

2. **[#37775](https://github.com/anomalyco/opencode/pull/37775) fix(codemode): 对齐字符串、数组、Date 行为**（rekram1-node）
   关闭 `interpreter-support.md` 中的 4 个 JS 语义差距：promise 返回的 `replace/replaceAll` 同步强制转换、`Array.prototype.sort` 保留尾部空洞等。Code Mode 的语义可信度提升。

3. **[#37833](https://github.com/anomalyco/opencode/pull/37833) fix(provider): 适配 NVIDIA NIM 上 DeepSeek 请求**
   修复 DeepSeek V4 (flash/pro) 在 NVIDIA NIM 上挂起的问题（closes #24264），扩展多 provider 兼容矩阵。

4. **[#37696](https://github.com/anomalyco/opencode/pull/37696) feat(opencode): 在 Anthropic 兼容端点上为 kimi 系列使用 adaptive thinking effort**
   Kimi/Moonshot 的 Anthropic-compatible 端点实现自适应思维合约 (`thinking.type="adaptive"`)，对接后体验更佳。

5. **[#37831](https://github.com/anomalyco/opencode/pull/37831) fix(github): 解析不可变 OIDC sub claim**
   适配 GitHub Actions OIDC `repo:owner@id/name@id:...` 格式，加强 Octokit 失败处理与 token 交换错误一致性。

6. **[#37834](https://github.com/anomalyco/opencode/pull/37834) fix(desktop): 处理 stderr 上的 async EPIPE**
   关闭终端时 desktop 应用不再因未捕获 EPIPE 崩溃（closes #37749）。

7. **[#37822](https://github.com/anomalyco/opencode/pull/37822) fix(core): 启动时自动恢复损坏的 sqlite**
   数据库文件损坏不再直接崩溃，改为自动恢复路径（closes #37821），显著提升离线/异常关机鲁棒性。

8. **[#36286](https://github.com/anomalyco/opencode/pull/36286) refactor(tui): 移除死代码 session renderer**
   清理旧的 `AssistantMessage` 与 `ExplorationSummary` 渲染链路，是 2.0 TUI 重构的延续（closes #36269）。

9. **[#37832](https://github.com/anomalyco/opencode/pull/37832) fix(desktop): 切换会话时刷新遗留 session 面板**
   修复切换项目后复用旧 session 面板导致内容陈旧的问题（closes #37534）。

10. **[#37830](https://github.com/anomalyco/opencode/pull/37830) fix(app): 在新布局注册打开项目快捷键（Cmd+O）**
    新版 titlebar 缺少 `project.open` 注册，文件夹选择器无法打开（closes #37829），属于新布局回归修复。

---

## 五、功能需求趋势

通过对 50 条 Issue 的归类分析，社区当前关注的功能方向呈以下分布：

| 类别 | 代表 Issue | 关注度 |
|---|---|---|
| **多模型提供商生态扩展** | #6231, #37745, #37815, #36826, #37790 | ⭐⭐⭐⭐⭐ |
| **TUI/UX 体验优化** | #9955, #37803, #19130, #8820, #26459 | ⭐⭐⭐⭐⭐ |
| **Plan Mode 与 Agent 编排** | #7801, #37789, #27511, #36654, #20699 | ⭐⭐⭐⭐ |
| **稳定性与资源治理** | #22422, #35265, #36445, #36443, #37579 | ⭐⭐⭐⭐ |
| **Cross-platform / 跨平台** | #19130, #26459, #37774 (musl) | ⭐⭐⭐ |
| **2.0 架构升级** | #36445, #36443, #37131 | ⭐⭐⭐ |
| **集成与插件生态** | #37656 (Heym), #37837 (director), #37806 | ⭐⭐ |

**核心趋势总结**：
- **本地模型自动发现** 是呼声最高的"杀手级"功能，长期挂在热度榜首。
- **TUI 体验**已从"能跑"转向"好用"，对 ARM64 Windows、Web-VSCode、musl 等边缘平台的覆盖要求上升。
- **Agent 控制精细化**：Plan/Build 一键流转、Subagent 续会话、Suspend/Resume，反映用户希望更细粒度掌控 agent 生命周期。
- **2.0 事件流总线重构**已进入"清扫"阶段（死代码移除、SSE 客户端 cleanup、订阅按 client interest 切分）。

---

## 六、开发者关注点（痛点与高频需求）

1. **付费/订阅状态不同步** — OpenCode Go 付费成功但余额为 0 是社区当前最尖锐的商信问题，需优先排查 webhook 与 Stripe session 间的一致性。
2. **OpenAI 计费口径错误** — cache writes 报 0 导致账单偏差直接损害用户对 OpenCode 的财务可信度，建议在 #37745 上线紧急修复。
3. **资源泄漏与崩溃循环** — EventTarget 内存泄漏、SQLite corruption、Large file OOM 是阻碍生产稳定部署的三大结构性缺陷。
4. **新架构切换摩擦** — 2.0 时代的事件总线订阅、SSE 重连、ID stripping 在切换过程中暴露边界不清问题，开发者期望尽快看到统一规范（PR #37828 是积极信号）。
5. **多 Provider 适配成本** — DeepSeek、kimi、NVIDIA NIM、Anthropic-compatible 各家 thinking 合约差异大，社区希望"补一个适配层"而非每家 provider 都写一遍胶水代码。
6. **Web / Desktop 与本地 CLI 的能力对齐** — `opencode web` 在空白项目下无法 New Session、新布局丢失 `Cmd+O`、Clipboard 在 code-server 不工作等小问题累积，反映 web/desktop 端回归测试矩阵存在缺口。
7. **DoS 与安全** — `#37814` 大文件上传 OOM 与 `#37807` CWE-601 开放重定向提示社区需要引入输入尺寸上限、URL 白名单等防御性默认策略。

---

> 📌 **维护者行动建议**：本周优先合并 #37822（sqlite 恢复）、#37745（OpenAI cache 计费）、#37790（Go 订阅同步）、#37814（文件大小限制），并锁定 #37828（util 抽取）的发布窗口，以支撑 2.0 重构落地。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期：2026-07-20** | 数据来源：github.com/badlogic/pi-mono

---

## 📌 今日速览

今日 Pi 仓库以 **Bug 集中修复** 为主线：v0.80.10 暴露的多处问题（`--system-prompt` 失效、模型状态丢失、compaction 后队列消息丢失、`assistant.usage` 未定义导致会话崩溃）均已得到官方或社区修复并关闭。同时 **Upstage Solar、OpenCode Go** 两个新 Provider 合并入库，**ACP 模式（Zed/JetBrains 集成）** 历经 6 个月终于合入主干，扩展生态进一步成熟。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布。从近期合入的 PR 推断，下个版本预计为 **0.80.11 或 0.81.0**，重点修复 v0.80.10 的若干回归问题。

---

## 🔥 社区热点 Issues

按关注度（评论数 + 👍）排序，精选 10 条：

| # | Issue | 状态 | 亮点 |
|---|-------|------|------|
| 1 | [#5023](https://github.com/earendil-works/pi-mono/issues/5023) Terminal 莫名滚到开头 | CLOSED | 9 条评论，长达近 2 个月未解决的"幽灵滚动"问题终于关闭，反映 TUI 渲染层存在深层次 bug |
| 2 | [#6210](https://github.com/earendil-works/pi-mono/issues/6210) `/scoped-models` 无法选含 `[]` 的模型 ID | OPEN | 8 条评论，模型选择器对 glob 模式与字面字符解析冲突，影响自定义模型命名空间 |
| 3 | [#6792](https://github.com/earendil-works/pi-mono/issues/6792) 大文件编辑 CPU 100% | CLOSED | 7 条评论，附带 CPU profile；500+ 行 Markdown 编辑触发性能瓶颈，对长文档工作流影响显著 |
| 4 | [#1871](https://github.com/earendil-works/pi-mono/issues/1871) 并行启动时错误的"无 API key"提示 | CLOSED | 6 条评论，`pi-subagents` 并行模式下锁竞争导致认证模块误报，掩盖真实错误 |
| 5 | [#6774](https://github.com/earendil-works/pi-mono/issues/6774) Ctrl+G 外置编辑器在 tmpdir 拥挤时启动慢 | CLOSED | 5 条评论，建议改用 `mkdtemp` 私有子目录 |
| 6 | [#6675](https://github.com/earendil-works/pi-mono/issues/6675) `pi update --self` 单次失败即放弃 | OPEN | 5 条评论，缺乏退避重试机制对网络不稳定用户不友好 |
| 7 | [#5341](https://github.com/earendil-works/pi-mono/issues/5341) Pi 通过 SSH 连接远程容器 | CLOSED | 5 条评论，将本地 Pi 与远程 ExecutionEnv 桥接，远程开发体验的关键一步 |
| 8 | [#3605](https://github.com/earendil-works/pi-mono/issues/3605) 扩展读取原始响应流的 Hook | CLOSED | 4 条评论，为自定义进度 UI 等扩展能力铺路 |
| 9 | [#6768](https://github.com/earendil-works/pi-mono/issues/6768) Copilot Enterprise 无法 compaction | CLOSED | 4 评论/2 👍，421 Misdirected Request 等异常阻断企业用户核心功能 |
| 10 | [#6841](https://github.com/earendil-works/pi-mono/issues/6841) **长会话内存无界增长（今日新增）** | CLOSED | 15GB 服务器上单会话占用 300–650MB RSS 并触发 swap thrashing，揭示持久内存模型的设计缺陷 |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|-----|------|------|
| 1 | [#6828](https://github.com/earendil-works/pi-mono/pull/6828) OpenCode Go Responses 模型支持 | CLOSED | 为 `models.dev` 映射的 Grok 4.5 补全 OpenAI Responses API 实现 |
| 2 | [#6834](https://github.com/earendil-works/pi-mono/pull/6834) 共享 UUIDv7 并用于 Codex | CLOSED | 将 uuidv7 上提至 `pi-ai`，作为 Codex provider 默认请求 ID 生成策略 |
| 3 | [#6837](https://github.com/earendil-works/pi-mono/pull/6837) GPT-5.6 Codex 上下文窗口对齐 272K | CLOSED | 修复 Pi 默认 372K（基于旧元数据）与官方客户端不一致的问题 |
| 4 | [#6818](https://github.com/earendil-works/pi-mono/pull/6818) 守卫 `assistant.usage` 未定义 | CLOSED | 解决 DeepSeek V4 等 provider 不返回 usage 时会话永久崩溃的严重问题 |
| 5 | [#836](https://github.com/earendil-works/pi-mono/pull/836) **ACP 模式（Zed/JetBrains 集成）** | CLOSED | 历经 6 个月，`--mode acp` 接入 Agent Client Protocol，Pi 正式支持 Zed/JetBrains 编辑器 |
| 6 | [#6824](https://github.com/earendil-works/pi-mono/pull/6824) 新增 Upstage Solar 内置 Provider | CLOSED | 4 款模型（solar-mini/pro2 等），其中 pro2 支持 reasoning |
| 7 | [#6775](https://github.com/earendil-works/pi-mono/pull/6775) Compaction/分支摘要失败重试 | OPEN | 修复 #6647，扩展自动重试覆盖 compaction 路径，作者向 @badlogic 询问是否需要 UI 提示 |
| 8 | [#6840](https://github.com/earendil-works/pi-mono/pull/6840) 新增共享 `contentText` 工具 | CLOSED | 关闭 #6839，统一多 provider 内容文本提取逻辑 |
| 9 | [#6823](https://github.com/earendil-works/pi-mono/pull/6823) Upstage Solar Provider（重复提交） | CLOSED | 与 #6824 重复，已被合并方替代 |
| 10 | [#6828](https://github.com/earendil-works/pi-mono/pull/6828) 已在前述 | — | 涉及 Provider 兼容性矩阵的类型修复 |

---

## 📈 功能需求趋势

综合 32 条 Issue，可归纳出以下五大方向：

1. **IDE 与编辑器深度集成** 🖥️
   - ACP 模式（Zed/JetBrains）落地 [#836]
   - SSH 远程容器执行 [#5341]
   - 外置编辑器启动体验优化 [#6774]

2. **Provider 与模型生态扩展** 🌐
   - Upstage Solar [#6824]、OpenCode Go [#6828] 内置化
   - GPT-5.6 Codex 上下文窗口对齐 [#6837]
   - 本地模型一键连接（LAN 自动发现）[#6305]

3. **大文件与长会话性能** ⚡
   - 大文件 CPU 飙高 [#6792]
   - 长会话内存泄漏 [#6841]
   - SessionManager 无谓 IO [#6793]
   - 路径通配符性能（`src/**/*.ts`）[#6817]

4. **扩展 API 增强** 🧩
   - 重试生命周期可观测 [#6836, #6827]
   - 流式原始响应 Hook [#3605]
   - 平行工具调用批量判断 [#6816]
   - 消息渲染组件可替换 [#6821]

5. **TUI/UX 细节打磨** ✨
   - 滚动导航提示可隐藏 [#6833]
   - Markdown 表格边框主题化 [#6826]
   - Tab 补全不带尾随空格 [#5593]
   - 手动重试命令 [#6810]
   - Question tool（交互问卷）[#6829]

---

## 💬 开发者关注点

**核心痛点（按反馈频次排序）：**

- **🔴 会话持久化的可靠性** — 0.80.10 暴露了多个与 session.jsonl 读写相关的回归（孤儿 toolResult #6832、模型状态被默认值覆盖 #6822、compaction 后队列消息丢失 #6820），开发者担心长任务的可恢复性。

- **🔴 跨 Provider 兼容性脆弱** — DeepSeek V4 无 usage 数据 [#6819]、Copilot Enterprise compaction 421 错误 [#6768]、Codex 上下文窗口错配 [#6838]，凸显多 provider 适配缺乏统一防御性编程。

- **🟡 自动化运维的鲁棒性** — `pi update --self` 一次失败即终止 [#6675]、并行启动误报 [#1871]，影响 CI/CD 与无人值守场景。

- **🟡 编辑体验的细节缺陷** — Tab 补全尾随空格 [#5593]、`--system-prompt` 不生效 [#6825]、Ctrl+G tmpdir 拥挤 [#6774]，这些"小问题"显著影响日常使用流畅度。

- **🟢 扩展生态进入活跃期** — 围绕 agent 重试生命周期、原始流、平行工具的 Hook 提案 [#6836, #3605, #6816] 表明第三方扩展作者正推动 Pi 从 CLI 工具向可编程 Agent 平台演进。

---

> **编辑点评**：Pi 在 0.80 版本周期内功能扩展迅速（ACP、多 Provider、SSH），但暴露的回归也表明快速迭代与稳健性之间需要更严格的回归测试覆盖。建议团队短期聚焦"会话可恢复性 + 跨 Provider 防御编程"，中长期将扩展 API 文档化与稳定化作为差异化竞争点。

*日报由 GitHub Issues/PR 数据自动汇总整理*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期**：2026-07-20

---

## 📌 今日速览

Qwen Code 今日发布 **v0.20.0 正式版**及 **v0.20.1-preview.7215** 预览版，重点围绕守护进程（daemon）日志轮转、subagent 模型隔离与 ACP（Agent Client Protocol）会话并发安全展开。社区最热的两个未解决问题均聚焦于 subagent 行为缺陷：主会话模型被静默覆盖（#7156）以及 `/goal` 命令阻塞用户输入（#7181），反映 subagent 体系仍是当前最受关注的稳定性痛点。同时，**web_search 内置工具**（#7215）和 **Channels 多平台适配器**（#7266）进入合入阶段，社区期待已久的"原生联网搜索"即将落地。

---

## 🚀 版本发布

### v0.20.0（正式版）
- **新增特性**：bounded daemon log rotation（守护进程日志轮转，#6969）等核心优化
- **Breaking Changes**：无
- 完整变更列表覆盖大量性能与稳定性改进，建议所有用户升级

### v0.20.1-preview.7215（预览版）
- **autofix 增强**：label-driven takeover and release 机制，修复 forced-dispatch 绿色无操作问题（#7165，@wenshao）
- 适合提前体验自动化修复流程改进的用户

---

## 🔥 社区热点 Issues

| # | Issue | 重要程度 | 关键点 |
|---|-------|---------|--------|
| [#7156](https://github.com/QwenLM/qwen-code/issues/7156) | **P1**: Subagent 执行期间静默覆盖主会话模型 | ⭐⭐⭐⭐⭐ | 继 #7119 后通过新代码路径仍触发 400 错误，11 条评论，OPEN 状态，影响所有使用 subagent 的用户 |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | 守护进程冷启动与 `qwen serve` 延迟优化 | ⭐⭐⭐⭐ | 11 条评论，已进入 in-progress；早期 daemon 冷启动 ~2.5s vs CLI ~0.7s，listener/health 路径已大幅优化 |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | **P2**: MCP server 工具与资源列表获取超时 | ⭐⭐⭐⭐ | Fastmail MCP 鉴权通过但工具枚举永远超时，welcome-pr 标签欢迎社区贡献 |
| [#4801](https://github.com/QwenLM/qwen-code/issues/4801) | 独立的 `web_search` 工具 | ⭐⭐⭐⭐ | CLOSED（已被 #7215 PR 解决），反映用户对脱离 `web_fetch` 的真正搜索能力需求强烈 |
| [#3841](https://github.com/QwenLM/qwen-code/issues/3841) | WebSearch 工具支持（DashScope enable_search） | ⭐⭐⭐ | CLOSED；指出 Qwen Code 是 5 大主流 Code Agent CLI 中唯一缺 WebSearch 的产品 |
| [#6569](https://github.com/QwenLM/qwen-code/issues/6569) | **P2**: Subagent 可观测性增强 | ⭐⭐⭐⭐ | 当前 subagent 执行过于浓缩，缺乏实时查看与人工介入机制，归入 subagents-tools / multi-agent 路线图 |
| [#6237](https://github.com/QwenLM/qwen-code/issues/6237) | **P2**: Plan Mode 内容泄漏 | ⭐⭐⭐ | `exit_plan_mode` 的 plan 内容泄漏到后续 assistant 回复文本，影响所有 Plan Mode 用户 |
| [#6996](https://github.com/QwenLM/qwen-code/issues/6996) | 自定义 OpenAI 兼容 provider 始终报 Connection error | ⭐⭐⭐ | CLOSED；真实错误原因在日志前被丢弃，3 条评论 |
| [#7198](https://github.com/QwenLM/qwen-code/issues/7198) | 内置 qwen3.8-max-preview 模型 | ⭐⭐⭐ | CLOSED；用户希望新模型自动纳入内置列表而非手动配置 |
| [#7181](https://github.com/QwenLM/qwen-code/issues/7181) | **P1**: `/goal` 循环阻塞用户输入 | ⭐⭐⭐⭐ | 处于 active 状态时无法 `/goal clear` 或中断，2 条评论已 in-progress |

---

## 🛠 重要 PR 进展

| PR | 功能/修复 | 影响面 |
|----|----------|--------|
| [#7215](https://github.com/QwenLM/qwen-code/pull/7215) | **内置 `web_search` 工具**（基于 DashScope Responses API） | ⭐⭐⭐⭐⭐ 终结 #4801/#3841 历史 issue；opt-in 设计，无需 MCP 服务器 |
| [#7237](https://github.com/QwenLM/qwen-code/pull/7237) | **ACP/daemon 并发会话写入隔离** | ⭐⭐⭐⭐⭐ P0 级别；从 #7166 抽取独立落地，使用原子硬链接租约防止并发覆盖 |
| [#7266](https://github.com/QwenLM/qwen-code/pull/7266) | **Channels：GitHub/GitLab/Gitea 轮询适配器** | ⭐⭐⭐⭐ 新增多平台通知接入能力，附带 cursor 修复与完整文档 |
| [#7262](https://github.com/QwenLM/qwen-code/pull/7262) | 守护进程恢复 worktree 会话隔离 | ⭐⭐⭐⭐ 修复 #7221 重启后会话丢失问题，`sessionBelongsToCurrentProject` 工作树隔离恢复 |
| [#7256](https://github.com/QwenLM/qwen-code/pull/7256) | 移除 agent 子进程环境变量中的 `QWEN_SERVER_TOKEN` | ⭐⭐⭐⭐ 安全修复 #6601；防止 shell subprocess 泄漏守护进程 bearer 凭证 |
| [#7239](https://github.com/QwenLM/qwen-code/pull/7239) | 补齐 OpenAI 兼容 provider 缺失的 `reasoning_tokens` | ⭐⭐⭐ 解决 #7236（llama.cpp 思考 token 统计缺失）；流式响应采用有界整数估算 |
| [#7257](https://github.com/QwenLM/qwen-code/pull/7257) | SDK 关闭迭代器时中止 SSE 请求 | ⭐⭐⭐⭐ 修复 #7238 REST+SSE 订阅泄漏导致 daemon HTTP 429 |
| [#7265](https://github.com/QwenLM/qwen-code/pull/7265) | OS 唤醒/SIGCONT 后 TUI 重绘 | ⭐⭐⭐ 通过 `useWakeRepaint` hook 修复 macOS 休眠、`Ctrl+Z → fg` 后界面失同步 |
| [#7248](https://github.com/QwenLM/qwen-code/pull/7248) | Plan mode 入界强制 | ⭐⭐⭐⭐ `enter_plan_mode` 在多工具批次中作为执行边界，避免后续工具污染 |
| [#7250](https://github.com/QwenLM/qwen-code/pull/7250) | 自动更新时安全重启 | ⭐⭐⭐ 在活跃回合、队列输入、后台任务、team/arena 会话全部结束后再安装更新 |

---

## 📈 功能需求趋势

从过去 24 小时更新的 31 条 Issue 与 50 条 PR 中提炼出社区最关心的方向：

1. **🔍 原生联网搜索能力** — 多年呼声，#3841/#4801 均已落地为 PR #7215；这意味着 Qwen Code 即将补齐与 Claude Code、Cline 等竞品的工具差距
2. **🤖 Subagent 体系完善** — 至少 5 个相关 issue（#6569、#7156、#7242、#7254、#7222），集中在 **可观测性**、**模型隔离**、**资源争用** 三个子方向，是当前最活跃的路线图领域
3. **🌐 Channels 多平台集成** — 路线图 `background-automation` 与 `roadmap/subagents-tools` 双向汇流；Web Shell Channels 管理（#7209）+ GitHub/GitLab/Gitea 适配器（#7266）构成完整生态
4. **🐧 Web Shell 能力扩展** — worktree 隔离会话（#7221）、Git 提交历史浏览器（#7204）、完整 Channel 管理（#7209）共同将 `qwen serve` 推向"轻量 IDE"
5. **🚀 新模型快速跟进** — qwen3.8-max-preview 请求（#7198）当天关闭，模型列表与百炼 Token Plan 的同步节奏在加快
6. **🛡 安全与凭证管理** — 移除子进程敏感环境变量（#7256）、OAuth 设备流 URL 单行 OSC 8 输出（#7255）等细节受到关注
7. **⚡ 性能与冷启动** — daemon cold start（#4748）、eager-closure 懒加载审计（#7264）、MCP 工具枚举超时（#7147）形成性能三角

---

## 💬 开发者关注点

通过对 issue 摘要与 PR 描述的高频词汇统计，开发者社区当前最集中的痛点包括：

- **Subagent 行为不可控**：模型被覆盖（#7156）、资源被主 agent 占用（#7254）、扩展提供的 subagent 可被修改（#7242）三个问题指向同一根源——**subagent 与主 session 的状态边界未严格隔离**。PR #7237（并发写入隔离）和 PR #7248（Plan mode 边界）是正面回应。

- **错误日志/错误链路丢失**：#6996（OpenAI 兼容 provider 报 Connection error 而真实原因被丢弃）、#7238（SSE 订阅者泄漏直到 HTTP 429）反映了**可观测性短板**——失败时的根因定位成本过高。

- **MCP 集成的成熟度**：#7147（Fastmail MCP 工具列表永远超时）说明与第三方 MCP 服务器的兼容性仍需打磨，特别是认证成功后的实际工具枚举阶段。

- **多语言支持与可访问性细节**：#7253（加泰罗尼亚语翻译更新）、#7255（OAuth URL 单行输出支持复制点击）显示社区正在从"功能可用"向"细节可用"演进。

- **Windows 平台缺陷**：#7139（`qwen serve` Docker sandbox 容器 cwd 错误）继续是 Windows 用户的主要痛点，需要在沙箱路径处理上投入更多。

- **CI/发布流程透明化**：#4786（合并重复的 issue triage workflow）、PR #7251（自动跳过纯 CI 内部变更的发布说明）表明项目工程化正走向成熟。

---

*日报生成基于 GitHub QwenLM/qwen-code 仓库过去 24 小时数据，共追踪 31 条 Issue 更新、50 条 PR 提交、2 个版本发布。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**📅 2026-07-20** | 数据窗口：过去 24 小时

> ⚠️ **说明**：本期数据来源于 `Hmbown/CodeWhale` 仓库（数据来源标题标注为 DeepSeek-TUI），以下链接均指向 CodeWhale 实际仓库。

---

## 一、今日速览

过去 24 小时仓库进入 **v0.9.1 紧急维护期**：维护者 Hmbown 一人贡献了 36 个 PR 的大部分改动，并在当日合并关闭 16 个 PR、同时新开 2 个针对 Full Access 与 PowerShell 调用的 hotfix。今日主题高度集中在三件事——**Full Access 权限姿态的精确化**（git push 不再被误判为 publish-like）、**Windows / PowerShell 安全加固**、以及 **Blue Stage 设计语法与本地化的全面落地**。

---

## 二、版本发布

**过去 24 小时无新 Release。**

但从近期合并内容推断，v0.9.1 已进入修尾阶段，下个 patch 版本预计将包含 Full Access 修正（#4596）、PowerShell 安全调用（#4593）、sidebar 滚动修复（#4594）。

---

## 三、社区热点 Issues（共 6 条，均为过去 24 小时更新）

> 注：过去 24 小时仓库仅有 6 条 Issue 被更新，以下为全部精选；另有 16 条 PR 进入讨论，故社区热度集中在代码侧。

### 🔒 1. [#4042] Environment-level tool sandboxing for sub-agents
- **状态**：CLOSED | **评论**：16 | **标签**：security, sandbox, subagents, v0.9.0
- **作者**：JayBeest
- **亮点**：本期讨论量最高的 Issue，确认 `--disallowed-tools` 已可用，并追踪 session / sub-agent / Fleet worker / MCP server 全栈的工具限制运行时强制。沙箱语义在 v0.9.0 路线图上属于核心安全能力。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4042

### 🐛 2. [#1425] 执行大文本处理工程后会话中断卡死
- **状态**：OPEN | **评论**：3
- **作者**：AiurArtanis
- **亮点**：实测 300 万字小说分析场景——10 个 sub-agent 启动后因 `agent_wait` 超时导致整个会话卡死。这是个典型的 **sub-agent 编排超时** 问题，与 #4042 的沙箱/工具限制话题相关联，对长任务用户至关重要。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/1425

### ⚡ 3. [#4568] 新版斜杠指令响应迟缓
- **状态**：OPEN | **评论**：1
- **作者**：whp233
- **亮点**：用户感知到的 **回归性性能问题**，新版 `/xxx` 命令响应明显卡顿，怀疑与近期性能优化（#4584、#4585 等）产生回退。值得 v0.9.1 关注。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4568

### 🪟 4. [#4564] Windows `--model` / `--toolsets` 被合并为单一参数
- **状态**：OPEN | **评论**：1
- **作者**：alozano978-spec
- **亮点**：Windows + npm global install 下 CLI 标志解析错误，与今日 #4593 PowerShell 调用加固属同一生态问题，建议通过 `CODWHALE_MODEL` / `CODWHALE_TOOLSETS` 环境变量补充。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4564

### 🚦 5. [#4595] Full Access 模式下 feature-branch git push 仍触发审批
- **状态**：OPEN | **评论**：0
- **作者**：Hmbown（自报）
- **亮点**：权限姿态的精确度问题——所有 `git push` 被一刀切判为 publish-like，破坏 Full Access 的语义。已被 #4596 当日修复。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4595

### 📜 6. [#4594] v0.9.1 顶栏/侧边栏列表无法滚动到底部
- **状态**：OPEN | **评论**：0
- **作者**：Hmbown（自报）
- **亮点**：典型 TUI 列表渲染 bug：10 项 To-do 列表无法滚动到底。v0.9.1 发布后冒出的 UI 回归。
- 🔗 https://github.com/Hmbown/CodeWhale/issues/4594

---

## 四、重要 PR 进展（精选 10 条）

### 🛠 修复类

#### [#4596] fix(tui): make Full Access truly full access for publish-like shell
- **作者**：Hmbown | **状态**：OPEN
- 修复 #4595。`git push` 改为基于 refspec 的细粒度判定，force/delete/tag/mirror/all/prune 与 `+refspecs` 才视为 publish-like，常规 feature-branch push 不再误判。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4596

#### [#4593] fix(tui): harden PowerShell invocation for safe Windows execution
- **作者**：Hmbown | **状态**：OPEN
- 全量 PowerShell spawn 统一加 `-NoLogo -NoProfile -NonInteractive`，并正确捕获 `$LASTEXITCODE`，与 #4564 同一治理方向。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4593

#### [#4592] fix(tui): align every K3 route with its verified per-route contract
- **作者**：Hmbown | **状态**：CLOSED
- K3 路由能力从「全局」修正为「按路由」，open-platform kimi-k3 与 kimi.com/code 会员档分别对齐 models.dev 官方数据。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4592

#### [#4591] fix(tui): advertise Alt+V for details, never bare v
- **作者**：Hmbown | **状态**：CLOSED
- 移除所有「裸 `v` 打开详情」的可见文案，统一为 `Alt+V` / `⌥V`，避免与 Vim 模式冲突。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4591

#### [#4582] fix: bypass MCP tool deferral when trust_mode or Bypass approval is active
- **作者**：Angel-Hair | **状态**：CLOSED
- Full Access Agent 模式下 MCP 工具不再被默认 `defer_loading=true`，修复「YOLO 等价权限却少工具」的体验割裂。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4582

### ✨ 功能类

#### [#4588] feat(mcp): hot-reload the live tool pool
- **作者**：Hmbown | **状态**：CLOSED
- `/mcp reload` 走引擎自有 pool，原子切换配置变更、保留运行时新增 server，并对初始化畸形配置可恢复。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4588

#### [#4581] feat(tui): export safe structured conversations
- **作者**：Hmbown | **状态**：CLOSED
- `/export` 默认走剪贴板，导出结构化 API 消息流（角色、顺序、tool call/result、路由元数据），自动剔除隐藏指令/推理/签名并对类密钥值脱敏。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4581

#### [#4580] feat(web): add tool-wide citation evidence
- **作者**：Hmbown | **状态**：CLOSED
- 为 search / fetch / image / web.run 结果生成会话级确定性引用 ref，过 SSRF 防护 fetch，凭证 URL 自动脱敏并去重。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4580

#### [#4579] feat(web): add provider-native search backend
- **作者**：Hmbown | **状态**：CLOSED
- 仅对 OpenAI / Anthropic / xAI 三家已文档化的 provider-native 搜索开放后端，三态路由能力（supported / unsupported / unknown）严格 fail-closed。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4579

#### [#4577] feat(web): bounded backend failover and query cache
- **作者**：Hmbown | **状态**：CLOSED
- 搜索后端有界故障转移（用户选择 → DuckDuckGo → Bing 仅当显式启用），15 分钟会话级查询缓存，失败降级可视化收据。
- 🔗 https://github.com/Hmbown/CodeWhale/pull/4577

> 另有关闭的设计与性能 PR：#4590（session/route picker 本地化）、#4589（行为引导提示）、#4587（官网对齐 Blue Stage）、#4586（首运行控制发现）、#4585（读工具调用合并）、#4584（debt gate 移出 system prefix）、#4583（Blue Stage 默认主题语法）。依赖更新由 Dependabot 提交 #4495（rust-i18n 4.2.1）、#4494（ignore 0.4.30）。

---

## 五、功能需求趋势

从今日 Issue + PR 整体看，社区需求集中在四个方向：

1. **🔐 安全与权限姿态（最热）**
   - sub-agent 沙箱（#4042）、Full Access 语义精确化（#4595/#4596）、PowerShell 安全调用（#4593）、MCP 工具可见性（#4582）。
   - 共识：权限模型从「粗粒度 posture」走向「按 refspec / 按 trust_mode / 按 sub-agent」的细粒度强制。

2. **⚡ 性能与稳定性**
   - 重复只读调用合并（#4585）、debt gate 移出系统前缀（#4584）、用户报回归（#4568）、sub-agent 超时卡死（#1425）。
   - 长任务场景（百万字级、10+ sub-agent 并发）成为性能验证基准。

3. **🌐 Web 与检索能力**
   - provider-native 搜索（#4579）、引用证据（#4580）、故障转移 + 缓存（#4577）、路由能力事实层（#4578）。
   - 共识：所有 web 能力必须 fail-closed，且 SSRF 防护与凭证脱敏是底线。

4. **🎨 体验与本地化**
   - Blue Stage 设计语法默认化（#4583）、首运行引导（#4586）、行为提示（#4589）、picker 本地化（#4590）、结构化导出（#4581）。
   - 共识：从「能跑」转向「可读、可发现、可导出」。

---

## 六、开发者关注点

汇总今日 Issue 与 PR 评论中的开发者痛点：

| 痛点 | 代表 Issue/PR |
|---|---|
| **权限姿态语义模糊** | Full Access 仍弹审批（#4595）、MCP 工具被 defer（#4582） |
| **Windows 生态兼容性差** | CLI 标志解析（#4564）、PowerShell 调用未加固（#4593） |
| **sub-agent 编排超时无降级** | 大文本处理卡死（#1425）、沙箱强制不彻底（#4042） |
| **性能回归感知明显** | `/xxx` 响应迟缓（#4568） |
| **TUI 渲染边界 bug** | 顶栏/侧栏无法滚到底（#4594） |
| **网络能力 fail-closed 不足** | provider-native 搜索需严格三态路由（#4579） |

**高频需求**：
1. **跨平台一致的权限语义**——Full Access 在 macOS/Linux/Windows 上行为必须等价；
2. **长任务超时与重试策略**——sub-agent `agent_wait` 需可配置与降级；
3. **CLI 参数解析鲁棒性**——支持前置 flag + 环境变量双轨；
4. **可视化降级收据**——web / MCP 失败需要明确反馈而非静默；
5. **可导出的结构化会话**——便于审计与回归测试。

---

*日报基于 GitHub Issues/PRs 公开数据生成，仅供参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*