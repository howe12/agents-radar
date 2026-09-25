# AI CLI 工具社区动态日报 2026-09-25

> 生成时间: 2026-09-25 02:57 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-09-25  
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI  
**数据窗口**：过去 24 小时

---

## 一、生态全景

当前主流 AI CLI 工具已从"功能堆叠期"全面进入"**可靠性深水区**"——单日合入 14 个 PR 的 DeepSeek、引入 Managed Runtime v2 契约的 Qwen、上线 GPT-6 系列的 Codex 同时发布，说明各厂商正以**架构演进**与**稳定性修复**作为双主线推进。社区焦点从早期"功能可用性"转向"**Agent 生命周期可观测性、Provider 兼容矩阵、长会话内存治理、Windows 跨平台一致性**"四大共性痛点；与此同时，**决策路由（Decision Router）、MCP Code Mode、可插拔 Agent Memory** 等新范式正同步在多家工具中出现预兆。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | 活跃 Issues | 活跃 PRs | 关键事件 |
|------|---------|------------|----------|---------|
| **Claude Code** | v2.1.282 | ~50（TOP10 列表） | ~10 | 新增 `maxProseWidth`、遥测变量透明化；同日 TUI 输入冻结回归（#96931） |
| **OpenAI Codex** | v0.157.0 + v0.158.0-alpha.7~12 | ~50（TOP10 列表） | ~10 | GPT-6 Sol/Luna 上线、亚马逊 Bedrock 接入、全屏转录默认开启 |
| **Gemini CLI** | v0.62.0-nightly | ~50（TOP10 列表） | ~10 | MCP enablement 解析修复、Agent 并发竞态修复合入 |
| **GitHub Copilot CLI** | v1.0.89-3/2（预发布） | ~50（TOP10 列表） | **1** | Ask-user 表单状态保持；OOM 簇 Issue 高发（#4699/#4725/#4780） |
| **Kimi Code CLI** | 无 | **0** | 1 | 仅 `asyncssh` 安全升级 PR（修复 2 个 GHSA） |
| **OpenCode** | 无 | 50 | 50 | 集中关闭 20+ 旧 Issue；Codemode 补齐 WeakMap/WeakSet |
| **Pi** | 无 | ~50（TOP10 列表） | 11 | 批量关闭旧 Issue 引发争议（#10008）；OTel 导出器合入 |
| **Qwen Code** | v0.24.5 + SDK v0.1.15 + Desktop v0.24.5 | ~50（TOP10 列表） | ~10 | 启动提速 2.2×、RSS ↓60%（#12622）；Managed Runtime v2 契约落地 |
| **DeepSeek TUI** | 无（v0.10.0 既有） | 19 关闭 | **14 合入** | 子代理预算/digest 修复、Auto Router `/router` 上线 |

> **活跃度第一梯队**：DeepSeek TUI（PR/Issue 比 0.74）、OpenCode（双向 50/50）、Claude Code、Codex、Gemini、Qwen Code。  
> **接近休眠**：Kimi Code CLI（无 Issue、无 Release）；**异常偏低**：GitHub Copilot CLI（仅 1 个 PR）。

---

## 三、共同关注的功能方向

下表汇总跨工具高频共性诉求（出现 ≥ 3 家）：

| 方向 | 代表工具 | 具体诉求 |
|------|---------|---------|
| **🤖 Agent/Subagent 生命周期可靠性** | Claude、Codex、Gemini、OpenCode、Pi、Qwen、DeepSeek | "假成功"（#22323）、子代理无限挂起（#21409）、子代理不自动压缩（#6504）、会话恢复工具响应重复（#29366） |
| **🪟 Windows 跨平台稳定性** | Claude、Codex、OpenCode、DeepSeek、Pi | 设备桥握手超时（#96911）、ConPTY 进程泄漏（#11303）、Ctrl+V 粘贴失败（#38455）、多行粘贴回归（#6427）、`shellPath` 非确定性回退（#9361） |
| **🔌 Provider / 模型兼容矩阵扩展** | Claude、Codex、OpenCode、Pi | Kimi/Vertex/Copilot/GitLab Duo 集成断裂（#23887/#26205/#50843/#38982）、Bedrock 图片拒绝（#8643）、Azure Foundry（#9714） |
| **🧠 上下文压缩与窗口管理** | Claude、OpenCode、Pi、DeepSeek | 压缩后自定义指令丢失（#96422）、自动压缩阈值过早触发（#51238）、压缩炸 token cap（#9512）、emergency pass 误触发（#6540） |
| **📦 长会话内存治理（OOM）** | Copilot、Codex、Claude | 14 小时 3 次 V8 堆耗尽（#4699）、Windows Renderer 内存泄漏（#46690）、`totalTokensReminder` 静默破缓存（#90018） |
| **🧩 MCP 集成鲁棒性** | Codex、Gemini、Pi、DeepSeek | `list_changed` 缓存未失效（#33266）、MCP handler 无效重建（#47988）、Code Mode 降低 token（#6562/#11854） |
| **⚙️ Auto Mode / 权限行为可预测** | Claude、Codex | `auto` 反降级到 Bash（#92178）、`--yolo` 预认证被吞（#4844） |
| **📈 成本/Token 计量透明化** | Claude、Codex、Pi | prompt-cache 静默失效（#90018）、配额可视化跨端不一致（#47637/#18355）、OpenRouter 缓存会话丢失（#10022） |
| **🪝 会话管理与恢复** | Copilot、Gemini、Claude、OpenCode | `--resume` 不可逆（#4780）、`session prune` 命令缺失（#51254）、`/fork` 支线会话（#2058） |

**最集中的三大共识**：① Subagent 不能撒谎"成功"；② Windows 不能崩；③ 长会话不能 OOM。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业级安全 + 跨设备协作（Cowork） | 团队 / 企业 / 桌面协作用户 | Secure Enclave 签名、设备桥 `wss://bridge.claudeusercontent.com`、Auto Mode 权限分类器 |
| **OpenAI Codex** | 模型驱动 + 多模态企业接入 | GPT-6 早期采用者 / Bedrock / 企业 | Chat Completions + Responses 双路径、Seatbelt/Bubblewrap sandbox、Computer Use |
| **Gemini CLI** | 浏览器子代理 + 代码智能 | Linux/Android 开发者、研究类用户 | Browser Subagent on Wayland、AST-aware 工具评估、Auto Memory 抽取模型 |
| **GitHub Copilot CLI** | GitHub 原生集成 + 插件生态 | 已绑定 GitHub 生态的开发者 | Actions/CI 原生、Marketplace、技能（Skills）注入机制 |
| **Kimi Code CLI** | （低活跃期） | 既有 Moonshot 用户 | `uv` 依赖管理、Python 工具链 |
| **OpenCode** | 多 Agent 通信 + 可插拔 Memory | 复合工作流开发者 | Codemode JS 解释器、`session.model.select` 钩子、Prime Agent/RLM 思路 |
| **Pi** | 扩展生态 + 可观测性 | 工具链集成者 / 高级定制者 | `before_agent_start`/`session_shutdown` 钩子、OTel 导出、颜色 API 暴露 |
| **Qwen Code** | 生产级架构 + 双路径 Runtime | 大型企业 / Java SDK 集成者 | Managed Runtime v2（execute/status/cancel 契约）、TS + Java 双轨、Tauri 取代 Electron |
| **DeepSeek TUI** | 决策路由 + 审计驱动工程治理 | 高阶单兵 / 内部 founder-driven 团队 | `/router`（System One 决策闸门）、Jev 路由、pluggable `MemoryBackend`、`needs-triage` 审核机制 |

**关键差异点**：
- **架构派系**：Qwen 与 Claude 走"重型 Runtime + 设备/凭据治理"，Codex/OpenCode/DeepSeek 走"轻量 Client + 强 Router"，Pi 走"可扩展插件"，Gemini 走"模型原生工具亲和"。
- **决策闸门**：DeepSeek 已合入 `/router`，Qwen 在 `Issue #12589` 提议 `/superfast`，Gemini 在 `PR #29482` 推 Decision Gate——同一思路三家并行落地。
- **MCP 策略分化**：Codex 强化 handler 复用（#47988），DeepSeek 直接 Code Mode（#6562），Qwen 引入 `tools.mode` 枚举（#11854），Gemini 修复 enablement 解析——证明 MCP 正在从"接入"阶段进入"治理"阶段。

---

## 五、社区热度与成熟度

### 5.1 社区活跃度梯队

| 梯队 | 工具 | 判断依据 |
|------|------|---------|
| **第一梯队（高活跃 + 高迭代）** | DeepSeek TUI、OpenCode、Claude Code、Codex、Gemini、Qwen Code | 日均 ≥10 PR 或重大版本发布；Issue 数 50 量级；回复速率快 |
| **第二梯队（中等活跃 + 缓慢迭代）** | Pi、GitHub Copilot CLI | Pi 有 11 个 PR 但无 Release；Copilot 仅 1 个 PR，预发布节奏明显放慢 |
| **第三梯队（休眠期）** | Kimi Code CLI | 0 Issue、0 Release、1 安全 PR；社区处于观察期 |

### 5.2 成熟度信号

- **成熟信号**：v2.1.282 引入 `maxProseWidth`（Claude）、Managed Runtime v2 契约（Qwen）、DeepSeek 集中治理 OOM 与审计——三者均体现**生产可用性**已替代**功能完整度**成为优先级。
- **不成熟信号**：Codex 0.158.0 仍在 alpha.12 阶段高频合并；Copilot CLI PR 流量近乎停滞（1 个）；Kimi 完全停滞——三者或暗示**主线重构**或**战略收缩**。
- **争议信号**：Pi 维护者批量 auto-close 旧 Issue 引发社区质疑（#10008），体现治理透明度问题；Claude Code 同日上线即回归（#96931）反映**预发机制缺失**。

---

## 六、值得关注的趋势信号

### 6.1 趋势一：Decision Router 成为新一轮"低延迟成本优化"共识
- **DeepSeek**：`/router` + Jev 已合入（#6539），OpenRouter/TypeSafe 双集成
- **Qwen**：`/superfast` System One 决策闸门（#12589）
- **Gemini**：可选快速 Decision Gate（PR #29482）
- **OpenCode**：`session.model.select` 钩子（#50965）允许每步动态选模型
- **开发者启示**：未来 AI CLI 的"主模型"将逐步演化为**主 LLM + 轻量分类器**的串联架构，建议在自研 Agent 中预留路由层抽象。

### 6.2 趋势二：MCP 从"接入清单"进入"治理与降本"阶段
- **Codex**：handler 复用（#47988）+ binding 严格匹配（#47981）
- **DeepSeek**：Code Mode（#6562）——founder 数据：MCP 占 3% 调用、71% token
- **Qwen**：`tools.mode` 三态枚举（#11854）
- **Pi**：OTel 导出器进入官方生态（#10009）
- **开发者启示**：将 MCP 工具直接喂给主模型的"扁平调用"模式成本不可持续，应评估"**Code Mode 整合 + 静态绑定缓存**"路径。

### 6.3 趋势三：Subagent 可靠性成为多 Agent 架构的核心瓶颈
- Claude（Dispatch 主对话离线，#45937）、Gemini（`#22323` 假成功、`#21409` 挂起）、OpenCode（兄弟代理通信模型问题）、Qwen（`#8097` 子代理重复工作）、DeepSeek（`#6504` 强截断不压缩）——**5 家同时暴露**
- **开发者启示**：Subagent 必须输出**显式终止语义**（success/timeout/cancelled）+ **结构化 digest 交付物**，而非简单 boolean success。

### 6.4 趋势四：Windows 跨平台是"系统性债务"
- 6/9 工具均在 Windows 端暴露严重阻塞性 Bug：设备桥超时（Claude）、sandbox 失败（Codex）、Con

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)



---

# Claude Code 社区动态日报 · 2026-09-25

---

## 📌 今日速览

今日社区焦点集中在 **v2.1.282 发布后的回归问题** 与 **Cowork 设备桥接稳定性** 上。Windows/macOS Desktop 的 WebSocket 握手超时、Secure Enclave 签名失败导致大量用户无法链接会话；同时 `auto mode` 权限分类器、上下文压缩丢失自定义指令等长期痛点继续累积讨论。开发者对本次版本中 `maxProseWidth` 与遥测变量透明化的改进普遍认可。

---

## 🚀 版本发布

### v2.1.282（今日发布）

**主要更新：**
- 新增 `maxProseWidth` 设置：在宽终端下限制 Claude 正文输出宽度，表格与代码块保持完整宽度
- 启动提示、`/status` 与 `claude doctor` 新增列出项目设置文件中被忽略的遥测变量条目

🔗 [Release v2.1.282](https://github.com/anthropics/claude-code/releases/tag/v2.1.282)

> ⚠️ **已知回归**：[#96931](https://github.com/anthropics/claude-code/issues/96931) 报告 2.1.282 在会话开始 0–90 秒后输入框停止响应键盘事件，2.1.281 正常。点击 Ctrl-C 无效，进程仍在但 UI 完全冻结，建议暂时回退版本。

---

## 🔥 社区热点 Issues（TOP 10）

### 1. [#45937](https://github.com/anthropics/claude-code/issues/45937) — Dispatch 主对话永久离线（💬 42 | 👍 16）
**平台**：macOS · **模块**：Cowork / Desktop  
**核心问题**：即便在同一台 Desktop 上提示，主 Dispatch 对话仍显示"This desktop appears offline"，但独立的 Cowork 任务却可正常运行。  
**为何重要**：这是社区讨论度最高的问题，已持续半年未解，体现出主对话与 Cowork 子任务在连接状态判定上存在架构级不一致。

### 2. [#96911](https://github.com/anthropics/claude-code/issues/96911) — Windows Desktop 设备桥接握手超时 18 分钟（💬 9 | 👍 0）
**平台**：Windows · **模块**：Cowork / Desktop  
**核心问题**：客户端向 `wss://bridge.claudeusercontent.com` 发送 connect 帧后未收到 `authenticated` 应答，每次都以 `handshake timeout` 结束；重启+更新后可自愈。  
**为何重要**：与今日多个同类问题形成"设备桥接大面积故障"群发事件，是当日最受关注的 Windows 端问题。

### 3. [#90018](https://github.com/anthropics/claude-code/issues/90018) — totalTokensReminder 引发 prompt-cache 失效（💬 8 | 👍 2）
**模块**：Cost / Core  
**核心问题**：默认开启的 `totalTokensReminder` 在工具循环中使 prompt-cache 命中率断崖式下跌；关闭后恢复增量命中。  
**为何重要**：直接影响 API 成本，是少有的"开了就亏钱"的开关。社区呼吁文档明示其副作用。

### 4. [#96918](https://github.com/anthropics/claude-code/issues/96918) — Windows 链接计算机卡在"Asleep or app closed"（💬 6 | 👍 0）
**平台**：Windows · **模块**：Desktop / Routines  
**核心问题**：链接计算机永久卡在睡眠状态，云会话与计划任务报"not connected to the bridge"；重启、重新登录、设备移除、应用更新均无效。  
**为何重要**：直接影响 Windows 用户使用 Routines（定时任务）的能力，属于可用性阻断。

### 5. [#92178](https://github.com/anthropics/claude-code/issues/92178) — Auto Mode 反而压制 Read/Edit/Write（💬 6 | 👍 8）
**平台**：Windows · **模块**：Tools / Permissions  
**核心问题**：`defaultMode: "auto"` 下模型被推向 Bash 而非 Read/Edit/Write，且 TodoWrite 工具不可用，结果质量下降。  
**为何重要**：Auto Mode 本意是减少确认，结果却偏离最佳路径；👍 数高于评论数说明大量用户"无声点赞"。

### 6. [#78160](https://github.com/anthropics/claude-code/issues/78160) — 密码硬阻断破坏开发测试流（💬 5 | 👍 14）
**模块**：Model / Security  
**核心问题**：Claude 完全拒绝输入密码，即便用户明确指示登录 localhost 自身应用。  
**为何重要**：👍 数高达 14，社区强烈呼吁"自有开发环境的权限门控式 opt-in"，与今天 #96949 形成同一议题的两端。

### 7. [#96887](https://github.com/anthropics/claude-code/issues/96887) — macOS Cowork "无法链接会话"（💬 4 | 👍 0）
**平台**：macOS · **模块**：Cowork  
**核心问题**：自 Desktop 2.9939.2 起 Secure Enclave 签名失败（OSStatus -25308），`td-v2 attestation` 不可用，所有云 Cowork 会话失败。  
**为何重要**：与 #96919 共同指向 Desktop 2.9939.2 的回归，影响所有 macOS Team 用户。

### 8. [#96931](https://github.com/anthropics/claude-code/issues/96931) — v2.1.282 输入框键盘事件丢失（💬 3 | 👍 0）
**平台**：Linux · **模块**：TUI  
**核心问题**：2.1.282 每会话 0–90 秒后输入框完全停止响应；2.1.281 正常。  
**为何重要**：今日发布的版本即带严重回归，社区已有人回退。

### 9. [#88692](https://github.com/anthropics/claude-code/issues/88692) — 卸载重装后 ant-did 失配（💬 2 | 👍 0）
**平台**：Windows · **模块**：Desktop  
**核心问题**：Windows 重装 Claude Desktop 会生成新的 `ant-did` 设备身份但保留 `remoteToolsDeviceName`，导致历史会话永久孤立。  
**为何重要**：典型"重装即失效"的破坏性体验，无任何迁移工具。

### 10. [#96919](https://github.com/anthropics/claude-code/issues/96919) — Cowork 设备桥握手回归（💬 1 | 👍 0）
**平台**：macOS · **模块**：Cowork  
**核心问题**：2026-09-24 20:14 ET 起 Mac Cowork 设备桥握手始终失败。  
**为何重要**：与 #96911（Windows）形成跨平台同步故障画像，指向 `wss://bridge.claudeusercontent.com` 后端或协议变更。

---

## 🔧 重要 PR 进展（TOP 10）

### 1. [#96930](https://github.com/anthropics/claude-code/pull/96930) — telemetry 测试插件命名 collector 流
`meddling`/`swallowing` 插件通过 `{ to: 'collector' }` 将遥测事件路由到 collector 流，避免与其他流混淆。仅测试变更。

### 2. [#96917](https://github.com/anthropics/claude-code/pull/96917) — telemetry.log/mark 拆分为独立 hook
将原先 `engine.create` 中的两种方法拆为 `telemetry.log` 与 `telemetry.mark` 两个 hook，提升可组合性。

### 3. [#96364](https://github.com/anthropics/claude-code/pull/96364) — 嵌套 AGENTS.md 分页不再误判为已交付
修复超 token 限制的整文件 Read 被自动分页后，后续 Read 不再错误认为该 AGENTS.md 已被附加。

### 4. [#96363](https://github.com/anthropics/claude-code/pull/96363) — diff 工具加 `--no-color`
避免 `color.ui=always` 时 ANSI 转义清空 hunk 行内容，同时保留 `--shortstat`/`--numstat` 头部。

### 5. [#96487](https://github.com/anthropics/claude-code/pull/96487) — 遥测行携带引擎版本号
使用 `$.session.version()` 在 2.1.281+ 构建中暴露 `{ version, base?, builtAt? }`，弥补外部构建版本字段缺失。

### 6. [#95423](https://github.com/anthropics/claude-code/pull/95423) — diff 仅在可写命令后重取
`diff` 模块识别 shell 工具返回的 `isReadOnly`，对只读命令跳过重取，减少面板无意义刷新。

### 7. [#96570](https://github.com/anthropics/claude-code/pull/96570) — command.run hook 改用字面命令名
将命令匹配从命名常量改为字面量，让引擎的 hooks 模块扫描器能正确识别启动期阻塞命令。

> 💡 **PR 整体趋势**：本周 PR 几乎全部由 `poteat` 提交，集中在 telemetry 重构、diff 工具稳健化、AGENTS.md 协议细节三类"底层清洁工作"，没有面向用户的大特性。

---

## 📈 功能需求趋势

从今日 50 条 Issue 中提炼出的社区诉求方向：

| 方向 | 代表 Issue | 热度 |
|------|------------|------|
| **🔐 凭据/密钥安全管理** | #78160, #96949, #88165 | ⭐⭐⭐⭐⭐ |
| **🪟 Windows Desktop 稳定性** | #96911, #96918, #88692, #96942, #96945 | ⭐⭐⭐⭐⭐ |
| **🤝 Cowork 设备桥/会话链接** | #45937, #96887, #96919, #96918 | ⭐⭐⭐⭐⭐ |
| **⚙️ Auto Mode 行为可预测性** | #92178, #96943 | ⭐⭐⭐⭐ |
| **💸 成本/Token 计量透明化** | #90018, #96565, #96939, #96940 | ⭐⭐⭐⭐ |
| **🧠 上下文压缩保留指令** | #96422, #96950 | ⭐⭐⭐ |
| **🔗 GitHub 集成稳定性** | #96938, #96944, #96946, #96948 | ⭐⭐⭐ |

**最强烈的社区呼声**：希望引入"凭据代理/Secrets Locker"机制，使模型永远看不见密码明文，同时为开发者提供可控的登录白名单（域名/应用/模拟器）。

---

## 👨‍💻 开发者关注点 & 痛点

**1. 版本回归的蝴蝶效应**  
2.1.282 发布当天即出现 TUI 输入冻结（#96931）、与 2.9939.2 Desktop 版本叠加的设备桥握手故障（#96911、#96918、#96919、#96887）。开发者呼吁建立"灰度发布+预发通道"机制。

**2. Auto Mode 名不副实**  
`defaultMode: "auto"` 反而频繁降级到 Bash 且不允许 TodoWrite（#92178），让"自动化"初衷落空；同时分类器对 `allow` 列表解析不一致（#96943）。社区建议引入 dry-run 与决策日志。

**3. 上下文压缩的无声信息丢失**  
#96422 与 #96950 显示长会话压缩后项目指令/前置助手文本可能丢失，模型继续基于有损摘要运行；开发者希望有"压缩前后 diff"提示。

**4. 重装/迁移无路径**  
#88692（Windows 重装失配）、#94687（macOS 自动更新后麦克风权限）共同指向"本机状态不可迁移"问题，开发者期待官方导出/导入设备档案的工具。

**5. 成本透明度不足**  
#90018（prompt-cache 静默失效）、#96940（缓存日 vs 实时日单位混淆）、#96565（"Usage keeps getting worse"）表明即便 v2.1.282 增加了遥测变量透明化，距离"可核算的计费仪表盘"仍有距离。

**6. 凭据流是合规与可用性的最大公约数**  
无障碍用户（#88165）、酒店/物业行业自研应用（#96943）、QA 测试场景（#96949）三方独立诉求汇聚到同一结论：**"完全不输入密码"和"能登录测试环境"之间缺一条官方路径**。这是 Anthropic 产品层面最值得回应的一项。

---

> 📊 **数据时间窗**：过去 24 小时（2026-09-24 ~ 2026-09-25）  
> 📦 **数据来源**：[anthropics/claude-code](https://github.com/anthropics/claude-code) Issues / PRs / Releases

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-25**

---

## 一、今日速览

今日 Codex 仓库发布了 **v0.157.0 稳定版**，正式引入 GPT-6 系列模型（Sol、Luna）、Amazon Bedrock 支持以及全屏转录（fullscreen transcripts）功能，v0.158.0 同步推进至 alpha.12。社区讨论热度集中在 Windows 桌面端的稳定性问题（连续崩溃、内存泄漏、sandbox 启动失败），同时围绕 IDE 体验回归、新模型在桌面端缺位、MCP 缓存一致性等议题形成多支讨论主线。底层工程方向上，开发者团队正持续优化 sandbox、语音会话、多 agent 编排与计费模型的健壮性。

---

## 二、版本发布

### 🔖 rust-v0.157.0（稳定版）
本次为重要功能版本，主要更新：

- **GPT-6 系列上线**：新增 GPT-6 Sol 与 Luna，引入模型迁移提示（migration prompts）以兼容旧模型 PR #47332、#47347
- **Amazon Bedrock 接入**：通过 `x-amzn-mantle-client-agent` 头保留 Code Mode 的客户端标识
- **全屏转录默认开启**：启动提示（tips）移入转录区域，自动启用后台 server 启动（PR #47178、#47414）
- **多平台与体验优化**：Btrfs daemon socket 校验、文件引用支持图片编辑、Pro Max 套餐识别、Pro 套餐展示名称调整

🔗 [查看 Release](https://github.com/openai/codex/releases/tag/rust-v0.157.0)

### 🔖 rust-v0.158.0-alpha.7 ~ alpha.12
0.158.0 主线已快速推进至 alpha.12，从命名推测新增多项安全、并发与运行时调优改动。多个 alpha 同时落地说明主线改动密度较高，建议关注下一个 beta/rc 节点。

> 其他已关闭的内部 PR 中包含"机制关闭"类窗口（安全导向与重构），属于隐式版本边界信号。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 评论 / 👍 | 为什么重要 |
|---|-------|----------|-----------|
| 1 | [#20214](https://github.com/openai/codex/issues/20214) **Codex App 在 Windows 11 Pro 上频繁卡顿/冻结** | 112 / 87 | 持续时间跨越数月的高分高讨论 Issue，反映 Windows 桌面端是其稳定性短板；硬件充足仍出现卡死。 |
| 2 | [#3141](https://github.com/openai/codex/issues/3141) **沙箱内 GPU 访问支持** | 39 / 62 | 👍/评论比极高（社区高度认同），直接限制 Codex 在 ML / 推理场景中的应用范围，是核心 sandbox 扩展诉求。 |
| 3 | [#29343](https://github.com/openai/codex/issues/29343) **Chrome 插件 / Browser / Computer Use 拒绝与部分站点交互** | 35 / 12 | 多客户端共享的安全策略导致浏览器自动化出现"静默拒绝"，影响 telemetry 与企业 SaaS 场景。 |
| 4 | [#25826](https://github.com/openai/codex/issues/25826) **Windows 桌面端多显示器模式下最大化窗口溢出** | 34 / 20 | 长期未修复，回归体验问题，影响专业开发者日常使用。 |
| 5 | [#44696](https://github.com/openai/codex/issues/44696) **Windows sandbox helper 初始化失败（helper_unknown_error）** | 21 / 2 | 阻止 `exec_command` 与文件读取，几乎完全阻断 CLI 工作流，是 Windows 端阻塞性 bug。 |
| 6 | [#18396](https://github.com/openai/codex/issues/18396) **TUI 提供隐藏工具调用/输出能力** | 17 / 40 | 👍比例高，CLI 高频用户对"信号噪声"敏感，是 TUI 可读性优化的代表性需求。 |
| 7 | [#15807](https://github.com/openai/codex/issues/15807) **VSCode 插件无法多窗口启动 Codex Agent** | 11 / 15 | 影响 VS Code 中并行多任务的基本工作流，长期未修复。 |
| 8 | [#47511](https://github.com/openai/codex/issues/47511) **Desktop 缺失 git commit & push 按钮** | 10 / 27 | 26.917 版本回归引发，伴随 #47897 同源请求，社区强烈呼吁恢复显式控件。 |
| 9 | [#37722](https://github.com/openai/codex/issues/37722) **Windows OpenSSH Session 0 中 sandbox 启动的根因确认** | 8 / 0 | 由用户独立完成了 A-B-A 因果测试，定位到 elevated bootstrap 缺少 Window Station/Desktop 继承，对 Windows sandbox 修复具有重要参考价值。 |
| 10 | [#33266](https://github.com/openai/codex/issues/33266) **MCP tools/list_changed 通知未失效缓存** | 8 / 9 | 在 `tool_search_always_defer_mcp_tools` 特性开启时尤为突出，影响外部 MCP server 动态工具更新可见性。 |

> 其他观察到的活跃议题还包括 #47972（GPT-6 模型在 Windows Desktop 模型选择器中缺失）、#46690（Windows Renderer 内存泄漏导致崩溃，回滚 26.903.9818.0 可恢复）、#47969（Mac 应用登录后报"无权访问 Work"）。

---

## 四、重要 PR 进展（Top 10）

| # | PR | 主题 | 价值点 |
|---|----|------|--------|
| 1 | [#47988](https://github.com/openai/codex/pull/47988) **MCP handlers 在等效 binding 间复用** | MCP 性能优化 | 避免元数据未变时重建 handler 与 tool search 索引，显著降低 MCP 刷新开销。 |
| 2 | [#47984](https://github.com/openai/codex/pull/47984) **多 agent spawn 延迟与失败埋点** | 可观测性 | 新增 `codex.multi_agent.spawn.phase.duration_ms` 等指标，覆盖 residency、fork、child create、durability、input admission 等阶段。 |
| 3 | [#47981](https://github.com/openai/codex/pull/47981) **从 advertised tool identity 直接准备 MCP 调用** | MCP 鲁棒性 | 跳过完整 runtime binding，按 server / tool / connector 严格匹配，过滤当前工具筛选。 |
| 4 | [#47975](https://github.com/openai/codex/pull/47975) **语音恢复阶段过滤陈旧语音答案** | 语音会话正确性 | 修复语音失败/队列溢出/中断时老答案作为新问答的文本回放，避免误回放。 |
| 5 | [#47974](https://github.com/openai/codex/pull/47974) **跨 writable root 保留 .git 目录保护** | Sandbox 安全加固 | 防止 pointer 解析到其他可写 root 中的 Git 目录后被 seatbelt / bubblewrap 间接提权。 |
| 6 | [#47971](https://github.com/openai/codex/pull/47971) **Pro Max 套餐识别与展示名更新** | 商业化 | 增加 `promax` 协议识别，prolite / pro / promax 分别显示为 Pro / Pro (More) / Pro (Max)。 |
| 7 | [#47970](https://github.com/openai/codex/pull/47970) **暴露运行中 turn 的当前 environment selections** | API 拓展 | 新增 `CodexThread::current_turn_environment_selections(expected_turn_id)`，修正 `active_turn_*` 不反映后续更新的旧行为。 |
| 8 | [#47968](https://github.com/openai/codex/pull/47968) **Btrfs 设备号不匹配时蒙混 daemon socket** | Sandbox 兼容性 | 子卷的 `st_dev` 与 mountinfo 不同时，仅在打开目录与 inode 同设备时放行。 |
| 9 | [#47967](https://github.com/openai/codex/pull/47967) **Flex 容量失败作为独立终止错误** | 计费失败语义 | 识别 `flex_unavailable`，HTTP 429 与流式 `error`/`response.failed` 一致化处理，避免无效重试。 |
| 10 | [#47957](https://github.com/openai/codex/pull/47957) **将工具调用观测值限制在出站 Responses 消息预算内** | 大上下文稳健性 | 15 MiB 上限下，对过大的工具调用做上下文级裁剪，Code Mode cell 在裁剪后保持一致性。 |

> 另可关注：#47962（Cargo/Bazel rustc 启用透明大页）、#47946（为 ephemeral session 增加 in-memory agent message board）、#47943（移除 Windows world-writable 审计死代码）。

---

## 五、功能需求趋势

从近期 Issues/PR 提炼出最集中的诉求方向：

1. **GPT-6 模型全平台覆盖（高频）**
   - 多条 issue 反映模型在 Desktop、IDE 扩展上的"缺位"或"命名不一致"，如 #47972、#47444。
   - PR #47971 显示官方正在补齐 `promax` 与 Pro 套餐分级。

2. **Sandbox / 安全能力扩展（高频）**
   - #3141 要求沙箱内 GPU 访问，#37067、#37722、#44696 则反映 sandbox 在 macOS/Windows/OpenSSH 等真实环境下的可用性问题。
   - PR 侧 #47974（Git 保护）、#47968（Btrfs）持续加固 sandbox 默认安全策略。

3. **Windows 桌面端体验回归（高频）**
   - 内存泄漏（#46690）、渲染崩溃（#20214、#47632）、窗口多屏溢出（#25826）、sandbox 失败（#44696）、回归丢失的 commit/push 按钮（#47511、#47897）形成密集反馈。

4. **MCP 生态一致性**
   - #33266 缓存失效问题，以及 PR #47988、#47981 在 handler 复用与调用准备上的改进，体现出"外部 MCP 工具动态变更"的可靠性正成为重要议题。

5. **多 Agent 与可观测性**
   - PR #47984、#47970、#47952、#47946 共同指向多 agent 编排、运行时设置可见性与短暂会话的元数据存储能力。

6. **UI 控件回归与可见性**
   - 多条 issue（#47511、#47897、#47486、#47578）显示"曾经可见的 UI 控件/菜单消失"已成一种稳定的回归模式，社区对 Desktop 与 VSCode 扩展菜单的一致性提出强诉求。

7. **计费与配额可视化**
   - #47637（98% 配几分钟被消耗）、#47788（5 小时重置时间错位）、#18355（剩余 2% 报已达上限）反映计费端到端可视化与跨端一致性问题。

---

## 六、开发者关注点

- **Windows 是当前开发体验的主要瓶颈**：从 sandbox 启动失败、renderer 内存爆炸、Computer Use 重复键事件到多显示器溢出，开发者被迫"回退老版本"或绕开 Windows 平台，这是当下最迫切的诉求。
- **平台间 UI 行为不一致**：同一功能（如 Usage 入口、模型选择器、Commit/Push 按钮）在 Desktop / IDE 扩展 / CLI 中存在差异，社区期待以更严格的"功能矩阵"约束发布流程。
- **MCP 缓存与工具动态更新**：被越来越多人用作集成入口，但其 `list_changed` 通知语义与 `tool_search_always_defer` 路径下的刷新策略仍存在漏洞，需要文档与行为双重明确。
- **可观测性与诊断**：用户愿意提供 A/B 测试、日志、repro server 等"准补丁级"协助（如 #37722、#33266），社区已出现"自下而上"的根因分析文化，官方应考虑设置对应的 issue 模板与承认机制。
- **新模型带来的"迁移阵痛"**：GPT-6 Sol/Luna 上线伴随模型选择器与状态栏告警未清理（#47444）等小问题，建议官方提供"模型切换 checklist"与默认版本控制，避免一刀切。
- **第三方与自动化诉求**：GPU 访问、Linux sandbox 行为、Codespaces / OpenSSH Session 0 等场景代表开发者将 Codex 嵌入更深工程链路的趋势，需要官方长期投入 sandbox 的"可组合性"。

---

*数据来源：[openai/codex](https://github.com/openai/codex) • 统计窗口：过去 24 小时*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-25**

---

## 📌 今日速览

今日 Gemini CLI 发布了 **v0.62.0-nightly** 版本，社区活跃度集中在 Agent 体系的稳定性修复上，尤其是文件操作的并发竞态问题（PR #29495）和会话恢复时的工具响应重复问题（PR #29366）成为最受关注的修复点。Issues 方面，社区持续聚焦于 **Subagent 可靠性**、**Auto Memory 系统健壮性** 以及 **Browser Agent 在 Wayland 下的兼容性** 三类痛点。

---

## 🚀 版本发布

**v0.62.0-nightly.20260925.gbedef96ef** 已发布（[PR #29496](https://github.com/google-gemini/gemini-cli/pull/29496)）

主要变更：
- 同步 v0.61.0-preview.1 与 v0.61.0 正式版的 changelog（[PR #29469](https://github.com/google-gemini/gemini-cli/pull/29469)、[#29472](https://github.com/google-gemini/gemini-cli/pull/29472)）
- 修复 MCP 配置启用缺失与格式错误无法区分的问题（`fix(cli): distinguish missing MCP enablement config from malformed`）

---

## 🔥 社区热点 Issues（精选 10 条）

### 1. [#22323 - Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级：P1 | 评论：13 | 类型：Bug**
> 子代理 `codebase_investigator` 在触及最大轮次限制前返回结果时，仍上报 `status: "success"` 与 `Termination Reason: "GOAL"`，**掩盖了真实的执行中断**，严重影响调试与回溯。

### 2. [#19873 - 零依赖 OS 沙箱与执行后意图路由](https://github.com/google-gemini/gemini-cli/issues/19873)
**优先级：P2 | 评论：9 | 类型：Enhancement (Large)**
> 利用 Gemini 3 模型对 POSIX 工具链的原生亲和力，构建 OS 级沙箱 + 后置意图路由，在不牺牲 UX 与安全的前提下释放模型的 Bash 能力。社区反响积极，是近期最重要的安全增强提案。

### 3. [#21409 - Generalist Agent 挂起问题](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级：P1 | 评论：8 | 👍：8 | 类型：Bug**
> 当 CLI 委派给 generalist agent 时会无限挂起（即使是简单的文件夹创建），社区热度极高（8 点赞）。明确指示模型不使用子代理可临时规避。

### 4. [#22745 - AST 感知的文件读取、搜索与映射](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级：P2 | 评论：7 | 类型：Epic/Feature**
> 评估引入 AST 感知工具的潜在收益（精确方法边界读取、减少 token 噪音、提升 codebase_investigator 能力），属于"代码智能增强"方向的关键 EPIC。

### 5. [#21968 - Gemini 很少主动使用 Skills 和 Sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级：P2 | 评论：6 | 类型：Bug**
> 用户反馈 Gemini 几乎不会主动调用自定义 skills（如 gradle、git）与子代理，除非显式提示。影响开箱即用的多代理体验。

### 6. [#26525 - Auto Memory 添加确定性脱敏并减少日志泄露](https://github.com/google-gemini/gemini-cli/issues/26525)
**优先级：P2 | 评论：5 | 类型：Security Bug**
> Auto Memory 在将转录内容发送至后台抽取模型时，可能携带未脱敏的密钥，存在隐私与安全风险。

### 7. [#21983 - Browser Subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级：P1 | 评论：4 | 👍：1 | 类型：Bug**
> 浏览器子代理在 Wayland 显示协议下报错退出，Linux 桌面用户（非 X11）使用受阻。

### 8. [#22267 - Browser Agent 忽略 settings.json 覆盖配置](https://github.com/google-gemini/gemini-cli/issues/22267)
**优先级：P2 | 评论：4 | 类型：Bug**
> `AgentRegistry` 正确读取 settings 但 Browser Agent 完全忽略 `maxTurns` 等配置覆盖，配置语义不一致。

### 9. [#24246 - 工具数超过 128 时触发 400 错误](https://github.com/google-gemini/gemini-cli/issues/24246)
**优先级：P2 | 评论：3 | 类型：Bug**
> 当可用工具总数超过约 400 时后端报错，社区期望 agent 能更智能地按上下文裁剪启用工具集。

### 10. [#20079 - `~/.gemini/agents/*.md` 软链接无法被识别为 agent](https://github.com/google-gemini/gemini-cli/issues/20079)
**优先级：P2 | 评论：4 | 类型：Bug**
> 使用符号链接组织自定义子代理配置文件时无法加载，影响 dotfiles 用户的常见工作流。

---

## 🛠️ 重要 PR 进展（精选 10 条）

### 1. [#29495 - 修复文件工具的并发竞态与原子写入](https://github.com/google-gemini/gemini-cli/pull/29495)
**P1 | L Size | 今日合并**
> 对 `packages/core` 中并发工具调用（尤其是并行子代理）产生的 read-modify-write 竞态进行串行化，并保证文件写入的原子性，**修复潜在的静默丢失更新问题**。

### 2. [#29482 - 在主模型前引入可选的快速 Decision Gate](https://github.com/google-gemini/gemini-cli/pull/29482)
**L/XL Size | 新提案**
> 在用户消息进入主模型前增加一个几十毫秒级判别器，对消息类型做"快路"分类，简单请求可走精简路径，**有助于降低延迟与 token 消耗**。

### 3. [#29448 - 修复 Windows/WSL/无头环境下的无限鉴权循环](https://github.com/google-gemini/gemini-cli/pull/29448)
**P1 | M/L Size | 进行中**
> 解决与 VS Code 扩展等伴生工具的文件争用，并在 keyring 不可用时自动回退到加密文件存储（修复 #28341）。

### 4. [#29366 - 会话恢复时停止重复回放工具响应](https://github.com/google-gemini/gemini-cli/pull/29366)
**P1 | L Size | 进行中**
> 使用 `-r`、session browser 或 ACP 恢复会话时，`functionCall`/`functionResponse` 配对校验会失败，且每次恢复还会额外写入一份重复内容到录制文件中。

### 5. [#29368 - 修复 ACP 会话按 ID 加载但无可恢复内容的问题](https://github.com/google-gemini/gemini-cli/pull/29368)
**P1 | M Size | 进行中**
> 即使 session 文件缺失"可恢复"内容也应能按 ID 正确解析加载路径（修复 #29288）。

### 6. [#29376 - 停止 Windows IDE 检测在 Unix ps 上的回退](https://github.com/google-gemini/gemini-cli/pull/29376)
**Core | M Size | 进行中**
> `getIdeProcessInfoForWindows()` 在快照超时后会回退到不存在的 Unix `ps` 调用，修复该检测逻辑的平台错配。

### 7. [#29375 - 使用有状态解码器处理 DevTools HTTP 流响应](https://github.com/google-gemini/gemini-cli/pull/29375)
**P2 | M Size | 进行中**
> `ActivityLogger.patchNodeHttp()` 此前对每个 chunk 独立解码，多字节 UTF-8 字符可能因 chunk 边界被切分而损坏。

### 8. [#29282 - 登录后立即持久化 OAuth 凭据](https://github.com/google-gemini/gemini-cli/pull/29282) ✅ **已关闭**
**P2 | S/M Size**
> 修复浏览器/用户码登录完成后 OAuth 凭据未立即持久化导致下次启动重复要求登录的问题。

### 9. [#29278 - 修复 `expandEnvVars` 临时键的环境冲突](https://github.com/google-gemini/gemini-cli/pull/29278) ✅ **已关闭**
**P2 | S Size**
> `expandEnvVars()` 使用了与调用者环境可能冲突的临时键，导致输入字符串被环境覆盖时无法正确展开。

### 10. [#29374 - 补充 extensions 配置类别的文档](https://github.com/google-gemini/gemini-cli/pull/29374)
**P3 | XS Size | 进行中**
> `extensions.disabled` 与 `extensions.workspacesWithMigrationNudge` 此前在配置参考文档中缺失。

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 的归类，社区当前的关注重点可归纳为以下方向：

| 方向 | 代表 Issue | 热度 |
|------|-----------|------|
| **Subagent / Agent 体系稳定性** | #22323、#21409、#21968、#21763、#20195 | ⭐⭐⭐⭐⭐ |
| **Browser Agent 鲁棒性** | #21983、#22267、#22232 | ⭐⭐⭐⭐ |
| **Auto Memory 系统** | #26516、#26522、#26523、#26525 | ⭐⭐⭐⭐ |
| **代码智能（AST-aware）** | #22745、#22746 | ⭐⭐⭐ |
| **安全与沙箱** | #19873、#26525 | ⭐⭐⭐ |
| **持久化任务追踪** | #18836、#21000 | ⭐⭐⭐ |
| **Token 经济性 / 外科式读取** | #19561 | ⭐⭐ |
| **工具数量与上下文管理** | #24246 | ⭐⭐ |
| **CLI 自描述与自我认知** | #21432 | ⭐⭐ |
| **终端渲染性能** | #21924 | ⭐⭐ |

**整体方向**：社区正在从"功能堆叠期"转向"**Agent 可靠性与可观测性深水区**"——围绕 Subagent 生命周期、Auto Memory 的健壮性、Browser Agent 的多平台适配展开密集讨论。

---

## 💬 开发者关注点（痛点与高频需求）

1. **🧨 可靠性 > 功能**
   - "Agent 假成功"（#22323）、"Agent 无限挂起"（#21409）、"Session 恢复后工具响应重复"（#29366）成为最紧迫的体验痛点。
   - 开发者明确表达：**宁可 agent 报错失败，也不希望它误报成功**。

2. **🔍 Subagent 可观测性不足**
   - Bug report 不包含子代理上下文（#21763）
   - `/chat share` 无法共享 subagent 轨迹（#22598）
   - Settings 配置对 subagent 不生效（#22267、#21968）

3. **🐧 Linux/Wayland 兼容性被忽视**
   - 浏览器子代理仅在 Wayland 失败（#21983），社区呼吁跨显示协议兼容。

4. **🧠 Auto Memory 的"幽灵"问题**
   - SandyTao520 一人连发 4 个 Auto Memory 相关 issue（#26516、#26522、#26523、#26525），反映出 **内存系统在低信号会话、重试循环、无效 patch 隔离、脱敏等方面存在系统性缺陷**。

5. **🔐 鉴权链路脆弱**
   - Windows/WSL/无头环境出现无限 OAuth 循环（#29448、#28341），登录凭据未及时持久化（#29282）。

6. **⚙️ 配置系统语义不统一**
   - `.gemini/agents/` 软链接不识别（#20079）
   - `settings.json` 覆盖项对部分 agent 无效（#22267）
   - 开发者期望 **"配置即承诺"**，任何在 settings 中声明的值都应被尊重。

7. **📊 工具数量膨胀的边界**
   - 工具数超 400 触发后端 400（#24246），社区建议 agent 引入"按需启用"或分组裁剪机制。

---

**日报小结**：今日 Gemini CLI 的主线是 **"夜间构建 + Agent 体系修补"**。从趋势看，开发团队正集中火力解决 Subagent 并发、Session 恢复、鉴权稳定性三类核心问题；而社区呼声最高的方向是 **AST-aware 代码智能、Auto Memory 健壮化、跨平台 Browser Agent 适配**——这些大概率会成为 v0.62 之后路线图的关键候选。

> 📎 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**📅 2026-09-25 | 数据来源：github.com/github/copilot-cli**

---

## ⚡ 今日速览

今天 GitHub Copilot CLI 发布了 **v1.0.89-3/2** 预发布版本，主要修复了 Ask-user 表单的状态保持问题，并增强了 Windows 沙箱支持。社区方面，**长期运行的会话内存溢出（OOM）问题持续高发**，多个开发者报告在 `--resume`、压缩（compaction）和事件导出重试场景下反复撞到 V8 4 GiB 堆上限；与此同时，**会话管理、插件 Marketplace 和认证刷新**成为讨论热度最高的三大议题。

---

## 🚀 版本发布

### [v1.0.89-3](https://github.com/github/copilot-cli/releases)（最新）
- **Fixed**：Ask-user 表单中"Other"自定义答案在不同问题间保持独立，不再相互覆盖。

### [v1.0.89-2](https://github.com/github/copilot-cli/releases)
- **Added**：
  - MCP 预注册 OAuth 客户端现在遵循 `oauthScopes` 配置。
  - 本地会话中，在空聊天输入框连续按两次 `Esc`，可撤回尚未开始回答的提示词，并将其从对话中移除。
- **Improved**：在受支持的 Windows 版本上，沙箱化命令的处理能力增强（变更日志被截断）。

> 💡 本次为预发布版本（prerelease），生产环境用户建议等待 stable 发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#4742 — Desktop 1.1.15 无法创建第二个 Local 会话](https://github.com/github/copilot-cli/issues/4742) 👤 DannyBe99
- **状态**：OPEN | **评论**: 11 | **👍**: 5
- **重要性**：Desktop App 自动更新后出现严重回归，影响多分支并行工作流的核心场景；多个开发者确认复现，社区互动活跃度高。

### 2. [#2058 — 新增 `/fork` 命令用于"支线任务"](https://github.com/github/copilot-cli/issues/2058) 👤 grantborthwick
- **状态**：CLOSED | **评论**: 10 | **👍**: 10
- **重要性**：满分好评的 Feature Request；解决"侧问"打断主目标的长期痛点，需求明确，可能已并入路线图。

### 3. [#4535 — `store_memory` 在 v1.0.81 预发布版中失败](https://github.com/github/copilot-cli/issues/4535) 👤 DavidTeju
- **状态**：CLOSED | **评论**: 9 | **👍**: 1
- **重要性**：原生 memory writer 缺少必需的 instance ID，揭示了内部 Agent 系统调用契约缺陷。

### 4. [#4699 — 长时间 `--resume` 会话 OOM 崩溃](https://github.com/github/copilot-cli/issues/4699) 👤 pedoch
- **状态**：OPEN | **评论**: 6 | **👍**: 7
- **重要性**：14 小时内崩溃 3 次，高点赞数；还附带暴露了 **Node 诊断报告写入当前目录**导致仓库污染的副作用 bug。

### 5. [#4725 — 频繁 JavaScript 堆内存溢出（Linux）](https://github.com/github/copilot-cli/issues/4725) 👤 jbulow
- **状态**：OPEN | **评论**: 6 | **👍**: 1
- **重要性**：与 #4699、#4780 形成 OOM 集群，证实这是当前版本的**系统性稳定性问题**。

### 6. [#2058]**（重申）**与 [#4780 — 会话压缩永久卡死](https://github.com/github/copilot-cli/issues/4780) 👤 simukka
- **状态**：OPEN | **评论**: 2 | **👍**: 3
- **重要性**：会议触达压缩阈值后陷入崩溃循环，session 永久不可恢复——**对长任务用户是灾难性故障**。

### 7. [#4775 — Mission Control 仪表板链接 404](https://github.com/github/copilot-cli/issues/4775) 👤 dai
- **状态**：OPEN | **评论**: 5 | **👍**: 2
- **重要性**：Web 端路径 `/copilot/tasks/<uuid>` 与实际 `/agents/tasks/<uuid>` 不一致，明显的**前后端契约漂移**。

### 8. [#4905 — Desktop App 会话数分钟后死亡](https://github.com/github/copilot-cli/issues/4905) 👤 TwoPatient
- **状态**：OPEN | **评论**: 5 | **👍**: 4
- **重要性**：`GitHub credential registration is no longer available` 错误导致 `github-mcp-server` 目录过期变致命，反映 OAuth token 生命周期管理有漏洞。

### 9. [#4929 — 进程本地认证 Token 停止刷新](https://github.com/github/copilot-cli/issues/4929) 👤 NGloreous
- **状态**：OPEN | **评论**: 5 | **👍**: 0
- **重要性**：长时间运行进程永久丢失认证，`/login` 无法恢复，**只能重启**——与 #4905、#3682 形成认证稳定性三角。

### 10. [#4535 / #2753 — 插件技能（Skills）未注入主 agent](https://github.com/github/copilot-cli/issues/2753) 👤 zzatang
- **状态**：OPEN | **评论**: 3 | **👍**: 0
- **重要性**：Marketplace 安装的 skills 在 `/skills` UI 可见但未注入系统提示，沉默失败类型 bug，对插件生态影响大。

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时仅有 **1 个 PR** 被更新/合并，PR 流量明显放缓，可能与新版分支策略相关。

### [#4948 — 升级 `actions/github-script` 依赖 pin](https://github.com/github/copilot-cli/pull/4948) 👤 klockhoffbjorn-collab
- **状态**：OPEN
- **内容**：将 `actions/github-script` 固定到 v9.0.0 最新提交，仓库无运行时依赖清单，`actions/stale` 已是最新，`git diff --check` 通过。
- **意义**：纯供应链安全维护型 PR，体现仓库对 CI 依赖的常规巡检纪律。

---

## 📈 功能需求趋势

从全部 50 条近期活跃 Issue 中提炼的社区诉求方向：

| 趋势方向 | 代表 Issue | 社区信号 |
|---------|-----------|---------|
| **稳定性 / OOM 治理** | #4699、#4725、#4780、#4639、#4663 | 🔴 最高优先级，4 GiB 堆上限与失败重试风暴成为系统性问题 |
| **会话管理与恢复** | #4742、#2058、#4755、#4780、#2170 | 🟠 高热度，"支线会话不打断主线"、搜索历史是高频需求 |
| **插件 / Marketplace 生态** | #2753、#4556、#2399 | 🟠 技能沉默失败、Marketplace 不注册、缺乏 sparse checkout |
| **认证与 Token 刷新** | #4905、#4929、#3682 | 🟠 BYOK 不重启刷新 OAuth、进程内 Token 过期恢复 |
| **MCP 集成与目录** | #3934、#4851、v1.0.89 MCP OAuth | 🟡 MCP 注册表校验、政策拦截、Azure MCP 兼容性 |
| **企业级权限与策略** | #4522、#4844、#3934 | 🟡 `sandbox.enabled=false` 被覆盖、`--yolo` 在预认证窗口被吞 |
| **Windows / 跨平台兼容** | #3534、#4683、#3276 | 🟡 PowerShell ConstrainedLanguage、WSL2、Rocky Linux GLIBC |
| **网络与 HTTP/2** | #3948、#3304 | 🟢 `web_fetch` 失败、HTTP/2 session 销毁后无退避 |
| **输入与 UI 体验** | #4116、#2170 | 🟢 选中复制含装饰边框、时间线搜索 |

---

## 💬 开发者关注点总结

### 🔴 首要痛点：长会话内存与恢复不可逆
- 多名开发者独立报告 V8 堆耗尽（#4699、#4725、#4780），且**失败重试无退避**（#4639、#4663），导致账单成本失控。
- 压缩（compaction）失败 → 重试风暴 → OOM → session 永久不可 `--resume`，是**当前最严重的可靠性缺陷**。

### 🟠 高频需求：会话分支与"不打断主线"
- `/fork` 命令（#2058）10 个 👍、10 条评论，是社区共识最强的功能请求。
- 会话楔死（wedging）（#4755）、队列消息丢失也是并发场景下的痛点。

### 🟠 插件生态"沉默失败"成信任障碍
- 多个 Issue（#2753、#4556）显示插件/技能被发现但不生效，**没有用户可见错误**，开发者难以诊断。

### 🟡 企业与权限场景边缘行为不稳定
- `--yolo` 在预认证 fail-closed 窗口被吞（#4844）；`sandbox.enabled=false` 在策略未确定时被强制开启（#4522）——这对**受管设备/MDM 用户**影响显著。

### 🟢 跨平台细节亟需打磨
- Windows PowerShell ConstrainedLanguage（#4683）、WSL2 剪贴板（#3534）、Rocky Linux GLIBC（#3276）覆盖企业主力环境，但 Windows 沙箱在 v1.0.89-2 中已获改进，是积极信号。

---

## 📌 小结

今日 Copilot CLI 围绕 **"1.0.89 预发布 + 长期会话 OOM"** 两条主线运行。版本层面带来 OAuth 作用域与 Windows 沙箱改进；社区层面 OOM 会话簇、插件沉默失败、认证刷新断裂构成三大需要优先处理的稳定性议题。建议关注 v1.0.89 stable 释出节奏，以及 #4844（`--yolo`）、#4780（compaction 不可逆）的修复进展。

---

*日报基于 GitHub 公开数据生成 · 覆盖时间窗口：2026-09-24 → 2026-09-25*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-09-25  
**数据来源**: [github.com/MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日仓库活跃度较低，过去 24 小时内**无新版本发布、无 Issue 更新**，仅有一项安全相关的依赖升级 PR 被关闭。社区整体处于平稳期，建议关注后续版本规划与功能提案动态。

---

## 🚀 版本发布

*无* —— 过去 24 小时内无新 Release 发布。

---

## 🔥 社区热点 Issues

*无* —— 过去 24 小时内无 Issues 更新或新建。

> 💡 **建议**: 由于近期 Issue 活动较少，建议直接浏览 [Issues 列表](https://github.com/MoonshotAI/kimi-cli/issues) 获取全量社区讨论与功能需求。

---

## 🔧 重要 PR 进展

### #2622 — deps: bump asyncssh to 2.23.1 in pykaos ✅ CLOSED

- **链接**: [MoonshotAI/kimi-cli#2622](https://github.com/MoonshotAI/kimi-cli/pull/2622)
- **作者**: [katsugtgz](https://github.com/katsugtgz)
- **状态**: 已合并关闭
- **内容摘要**:
  - 将 `packages/kaos/pyproject.toml` 中 `asyncssh` 从 `2.21.1` 升级至 `2.23.1`
  - 同步更新 `uv.lock` 锁定文件
  - 修复两个安全公告：
    - **GHSA-2wxc-x7rj-hg8f**
    - **GHSA-qr67-gv47-xwwh**
- **意义**: 该 PR 属于例行安全维护，修复了 `asyncssh` 库的历史漏洞，对依赖 `pykaos` 工作空间包的用户有直接影响，建议升级至包含此修复的最新版本。

> ⚠️ 由于仅 1 个 PR 更新，**今日 PR 列表不展开至 10 条**。可关注 [Pull Requests 页面](https://github.com/MoonshotAI/kimi-cli/pulls) 获取更多历史与待审 PR。

---

## 📈 功能需求趋势

⚠️ **数据不足** —— 过去 24 小时无 Issue 更新，无法从当前样本中提取有效的功能需求趋势。

从历史背景来看，Kimi Code CLI 作为 Moonshot AI 的开发者工具，社区长期关注方向通常包括：

- **IDE / 编辑器集成**（VS Code、JetBrains 等）
- **新模型接入**（Kimi K2 / K3 等模型能力扩展）
- **Agent 工作流增强**（多步任务规划、工具调用链）
- **性能与上下文管理**（长上下文压缩、响应速度）
- **沙箱与执行安全**（如本次 asyncssh 升级所反映的安全意识）

> 建议查阅近 7 / 30 天的 Issue 趋势以获取更准确的需求画像。

---

## 💬 开发者关注点

⚠️ **数据不足** —— 当前 24 小时内无 Issue / PR 评论数据，无法归纳开发者痛点。

从本日的唯一活动（安全依赖升级）可侧面观察到的信号：

- **供应链安全仍是基础关注点**：即便是低活跃期，团队也及时响应 GHSA 安全公告并完成升级，体现成熟的安全运维流程。
- **依赖治理工具链稳定使用**：`uv.lock` 的同步更新说明项目使用 `uv` 进行 Python 依赖管理，开发者可参考该模式进行本地环境复现。

---

## 📊 数据小结

| 维度 | 数量 |
|------|------|
| 新 Release | 0 |
| Issue 更新 | 0 |
| PR 更新 | 1（已关闭） |
| 涉及安全公告 | 2 个（GHSA） |

**结论**: 今日为典型低活跃日，唯一亮点是安全依赖的及时修复。建议持续关注下周的版本发布与 Issue 活跃度变化。

---

*报告生成时间: 2026-09-25 | 数据窗口: 过去 24 小时*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-25**

---

## 📌 今日速览

过去 24 小时 OpenCode 仓库无新版本发布，社区活跃度集中在 **Issue 清理** 与 **核心 bug 修复**：超过 20 个旧 Issue 被集中关闭（多数为已修复的 Bug 报告），同时合并了一批针对 TUI、桌面端、上下文压缩与 Codemode 解释器的修复 PR。开发者关注焦点明显集中在 **上下文窗口管理**（自动压缩、模型输出限制）、**子代理通信模型**、**Provider 兼容性**（Kimi、Vertex、GitLab Duo、GitHub Copilot）三大方向。

---

## 📦 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 评论数 | 👍 | 重要性 |
|---|-------|-------|-----|--------|
| 1 | [#23887](https://github.com/anomalyco/opencode/issues/23887) OpenCode Go + Kimi K2.6/K2.5 返回 "Provider returned error" | 43 | 14 | 🔴 最高热度，反映 OpenCode Go 订阅下特定模型兼容性问题，社区反应强烈 |
| 2 | [#11829](https://github.com/anomalyco/opencode/issues/11829) **FEATURE**: RLM 上下文管理（将上下文视为外部可查询环境）| 9 | 12 | 🟢 基于 MIT arXiv:2512.24601 的前沿思路，社区普遍认可其方向 |
| 3 | [#50843](https://github.com/anomalyco/opencode/issues/50843) GitLab Duo workflow 在自托管实例上失败 | 8 | 0 | 🟡 仅有的 OPEN 高评论 Issue，涉及 OAuth 过期与上下文传递两个问题 |
| 4 | [#15789](https://github.com/anomalyco/opencode/issues/15789) **FEATURE**: 便携式包装脚本（无需全局安装）| 6 | 8 | 🟢 解决企业/CI 环境部署痛点，社区反响好 |
| 5 | [#33066](https://github.com/anomalyco/opencode/issues/33066) explore agent 完成后 build agent 持续转圈不结束（1.14.x–1.17.x）| 6 | 1 | 🟡 多版本复现的顽固 bug，影响多 agent 编排体验 |
| 6 | [#38455](https://github.com/anomalyco/opencode/issues/38455) Windows CMD 下 TUI 无法用 Ctrl+V 粘贴 | 5 | 0 | 🟡 Windows 用户基础体验阻塞 |
| 7 | [#38964](https://github.com/anomalyco/opencode/issues/38964) **FEATURE**: 兄弟子代理需经父代理中转通信 | 4 | 0 | 🟢 揭示 fan-in 模式下不必要的父代理开销 |
| 8 | [#38963](https://github.com/anomalyco/opencode/issues/38963) **FEATURE**: 子代理无法向生成者提问 | 4 | 1 | 🟢 改善多 agent 决策阻塞问题 |
| 9 | [#37255](https://github.com/anomalyco/opencode/issues/37255) Desktop 1.18.2 升级后模型无回复 | 4 | 3 | 🔴 升级导致的严重功能丧失 |
| 10 | [#22781](https://github.com/anomalyco/opencode/issues/22781) **FEATURE**: 会话标题默认应使用本地时间 | 4 | 3 | 🟢 简单但高频的人性化改进 |

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 内容要点 |
|---|----|----|---------|
| 1 | [#51238](https://github.com/anomalyco/opencode/pull/51238) fix(core): 适配模型输出上限与压缩溢出恢复 | Bug Fix | 主输出上限提升至 256k，压缩输出上限提升至 32k；自动压缩默认在输入窗口 90% 启动 |
| 2 | [#51250](https://github.com/anomalyco/opencode/pull/51250) fix(tui): 上下文百分比采用有效输入上限 | Bug Fix | 修复 gpt-5.3-codex 等小 `limit.input` 模型下 TUI 显示错误的上下文百分比 |
| 3 | [#51257](https://github.com/anomalyco/opencode/pull/51257) feat(codemode): 新增 WeakMap / WeakSet | Feature | 补齐 Codemode 解释器常用内置数据结构，支持按对象记忆化与遍历去重 |
| 4 | [#51254](https://github.com/anomalyco/opencode/pull/51254) / [#51255](https://github.com/anomalyco/opencode/pull/51255) feat(cli): 新增 `session prune` 命令 | Feature | CLI 与 v2 CLI 均支持按时间删除老旧会话族，预览 → 确认 → 执行的安全流程 |
| 5 | [#51248](https://github.com/anomalyco/opencode/pull/51248) fix(core): 刷新 EffectFlock 心跳时间戳 | Bug Fix | 修复定时器复用首次心跳时间导致后续周期错位的缺陷（closes #51179） |
| 6 | [#51240](https://github.com/anomalyco/opencode/pull/51240) fix(desktop): 浮层下方保持浏览器页可见 | Bug Fix | 菜单/弹层遮挡时浏览器页不再整片消失，显示占位并保留 z-index 处理 |
| 7 | [#51210](https://github.com/anomalyco/opencode/pull/51210) / [#51243](https://github.com/anomalyco/opencode/pull/51243) fix(tui): `fs.watch` 抛错/异步错误时不崩溃 | Bug Fix | 捕获 ENOSPC 等同步异常与运行期 watcher error，降级为本地刷新 |
| 8 | [#51245](https://github.com/anomalyco/opencode/pull/51245) fix(core): 解析 frontmatter 时绕过 gray-matter 内容缓存 | Bug Fix | 修复 YAML 解析失败后缓存污染、后续解析结果错误的问题 |
| 9 | [#50619](https://github.com/anomalyco/opencode/pull/50619) fix(acp): 在 ACP 目录加载前恢复 `plugin.awaitActivation` | Bug Fix | 还原异步 provider 发现流程，修复 ACP session/new 加载目录不全 |
| 10 | [#50965](https://github.com/anomalyco/opencode/pull/50965) feat(core): 新增 `session.model.select` 钩子 | Feature | 允许插件在每步执行前动态选择模型，实现分级路由（如小模型做摘要）|

---

## 📈 功能需求趋势

从过去 24 小时更新的 Issue 中提炼出以下五大社区关注方向：

### 1. 🧠 上下文管理与智能压缩
- [#11829](https://github.com/anomalyco/opencode/issues/11829) RLM 外部上下文环境
- [#40838](https://github.com/anomalyco/opencode/issues/40838) Prime Agent / RLM 风格思考
- 配套 PR #51238、#51235、#51021 集中优化自动压缩触发阈值与输出上限

### 2. 🤖 多 Agent 编排与通信模型
- [#38964](https://github.com/anomalyco/opencode/issues/38964) 兄弟子代理直接通信
- [#38963](https://github.com/anomalyco/opencode/issues/38963) 子代理反问父代理
- [#38967](https://github.com/anomalyco/opencode/issues/38967) Task 分发的上下文控制
- [#31868](https://github.com/anomalyco/opencode/issues/31868) 自定义主代理参与 plan mode
- [#38961](https://github.com/anomalyco/opencode/issues/38961) AGENTS.md 声明适用代理
- [#38948](https://github.com/anomalyco/opencode/issues/38948) 2.0 subagent tab 重启后恢复

### 3. 🔌 Provider / 模型兼容性
- [#23887](https://github.com/anomalyco/opencode/issues/23887) OpenCode Go + Kimi
- [#37496](https://github.com/anomalyco/opencode/issues/37496) Kimi Code API schema
- [#26205](https://github.com/anomalyco/opencode/issues/26205) Vertex + WSL2
- [#50843](https://github.com/anomalyco/opencode/issues/50843) GitLab Duo 自托管
- [#38982](https://github.com/anomalyco/opencode/issues/38982) GitHub Copilot 400 错误

### 4. 🖥️ 桌面 / TUI 体验
- [#37255](https://github.com/anomalyco/opencode/issues/37255) Desktop 1.18.2 卡死
- [#38455](https://github.com/anomalyco/opencode/issues/38455) Windows 粘贴
- [#38820](https://github.com/anomalyco/opencode/issues/38820) Desktop 右键删会话
- [#39029](https://github.com/anomalyco/opencode/issues/39029) SSH 鼠标滚动行为异常

### 5. 🌍 部署与本地化
- [#15789](https://github.com/anomalyco/opencode/issues/15789) 便携式启动脚本
- [#38280](https://github.com/anomalyco/opencode/issues/38280) 多语言界面
- [#22781](https://github.com/anomalyco/opencode/issues/22781) 本地时区

---

## 💬 开发者关注点与高频痛点

| 类别 | 典型痛点 | 代表 Issue / PR |
|------|---------|----------------|
| **上下文压缩过早触发** | 小窗口模型每步都触发压缩；thinking budget 突破 | #51238、#51235、#51021 |
| **TUI 稳定性** | `fs.watch` 抛错崩溃、Ctrl+C 重启 subagent 丢失、SSH 下鼠标滚动行为错误 | #51210、#51243、#38948、#39029 |
| **桌面端升级回归** | Desktop 1.18.2 后消息有去无回，浮层遮挡浏览器页 | #37255、#51240 |
| **Provider 集成断裂** | Kimi/Vertex/Copilot/GitLab Duo 在特定场景 400/404 错误或 token 过期 | #23887、#37496、#26205、#50843、#38982 |
| **子代理通信开销** | 兄弟子代理必须经父代理中转；遇到决策点只能猜测或失败 | #38964、#38963 |
| **会话管理不便** | 无 CLI prune、无右键删除会话、缺本地时区 | #51254/#51255、#38820、#22781 |
| **跨平台体验** | Windows CMD 无法粘贴、多语言界面缺失 | #38455、#38280 |
| **Agent 安全/约束** | 第三方 uncensored 模型用 HEREDOC/脚本绕过 Plan 模式 | #38807 |

---

> 📊 **数据说明**：本日报基于 anomalyco/opencode 仓库过去 24 小时更新的 50 条 Issue 与 50 条 PR 整理，重点参考评论数、点赞数与是否仍为 OPEN 状态。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-25

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 统计窗口：过去 24 小时

---

## 📌 今日速览

今日 Pi 仓库**无新版本发布**，但 Issues 与 PR 流量显著：50 条 Issue 被更新（其中近三分之一已被关闭/归档），11 条 PR 进入评审。社区焦点集中在 **Provider 兼容性回归**（OpenAI/Bedrock/Mistral/Vertex 多家适配器同时出现问题）、**TUI 渲染抖动**（长会话、全屏重绘、内联图像比例），以及 **扩展 API 一致性**（`before_agent_start`、`session_shutdown`、`setActiveTools` 等钩子的边界条件被集中暴露）。值得关注的是，维护者开始批量 [auto-close](https://github.com/earendil-works/pi/issues/10008) 旧 Issue，引发用户公开质疑 triage 流程。

---

## 🚀 版本发布

> 过去 24 小时无新 Release。最新版本仍为此前发布的 **0.87.x** 系列（pi-ai / coding-agent）。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 为什么重要 |
|---|------|------|------|-----------|
| [#9361](https://github.com/earendil-works/pi/issues/9361) | Windows: `shellPath` 在扩展加载时被非确定性地忽略 | OPEN | 11 | **影响所有 Windows 用户** 的 bash 工具解析行为，11 条评论仍未合入修复，社区反映可复现性强。 |
| [#8896](https://github.com/earendil-works/pi/issues/8896) | `/export` HTML 静默丢弃 `display:false` 上下文 | CLOSED | 8 | **导出审计能力受损**，已通过 [#10020](https://github.com/earendil-works/pi/pull/10020) 修复，闭环速度快。 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock OpenAI 模型拒绝 `toolResult.content` 内嵌图片 | OPEN | 7 | 作者已准备好 PR + 回归测试，涉及 Bedrock 多模态管线。 |
| [#9674](https://github.com/earendil-works/pi/issues/9674) | Mistral 对话流：空 content delta 触发 GLM 5.x 400 错误 | OPEN | 7 | 与早期 [#8069](https://github.com/earendil-works/pi/issues/8069) 形成连环 issue，**Mistral 原生缓存被绕路**。 |
| [#9255](https://github.com/earendil-works/pi/issues/9255) | `TuiMainScreen` 长会话全屏重绘风暴 | OPEN | 7 | 流式思考尾巴导致 `doRender()` 每帧走 `fullRender`，**长会话体验肉眼可见的抖动 / 文本重叠**。 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | pi-ai 向兼容 Provider 发送 OpenAI 专有字段 | OPEN | 6 | 影响所有 OpenAI-compatible 自托管接入，错误码 400/422。 |
| [#9566](https://github.com/earendil-works/pi/issues/9566) | 模型上下文默认值错误取 128k | OPEN | 5 | ⭐ **点赞最高的 Issue（3 👍）**，直接导致 llama 本地模型 cost/maxTokens 失真。 |
| [#9512](https://github.com/earendil-works/pi/issues/9512) | GPT-6 Astra `max` 推理下压缩命中输出上限 | OPEN | 5 | 长上下文压缩失败，影响旗舰模型可靠性。 |
| [#10008](https://github.com/earendil-works/pi/issues/10008) | "维护者能不能人工看 Bug 而不是自动关闭？" | CLOSED | 4 | **元 Issue**：反映社区对批量 auto-close 政策的不满，已合入当前对话模式。 |
| [#9997](https://github.com/earendil-works/pi/issues/9997) | `session_shutdown` 永不 resolve 导致退出挂死 | CLOSED | 3 | 扩展 API 容错问题，**TUI 冻屏 + 0% CPU** 的典型陷阱。 |

---

## 🛠 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 内容 |
|---|------|------|------|
| [#10020](https://github.com/earendil-works/pi/pull/10020) | HTML 导出增加 hidden-message 切换 | CLOSED | 解决 [#8896](https://github.com/earendil-works/pi/issues/8896)，同时保留 Tools/Thinking 切换状态。 |
| [#10021](https://github.com/earendil-works/pi/pull/10021) | bash 调用中 heredoc / inline script 语法高亮 | OPEN | 针对新版 Opus/Fable 模型不愿用内置 edit 工具的场景，**提升 diff 可读性**。 |
| [#9957](https://github.com/earendil-works/pi/pull/9957) | Kitty 图片按形变最小化选尺寸 | CLOSED | 改进内联图片在 TUI 中的纵横比渲染（[#8938](https://github.com/earendil-works/pi/issues/8938) 的后续）。 |
| [#10016](https://github.com/earendil-works/pi/pull/10016) | abort 后唤醒 follow-up 队列 | OPEN | 修复 abort 路径下 `triggerTurn: true` 消息被丢弃的问题。 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | Azure Foundry Chat Completions 支持 | OPEN | **新增 DeepSeek V4 Pro 接入路径**，闭合 Azure Responses-only 局限。 |
| [#8398](https://github.com/earendil-works/pi/pull/8398) | TUI 颜色值与主题样式重构 | CLOSED | 暴露颜色 API 给 Agent 做颜色数学，**为非终端 UI（如 Web/GTK）铺路**。 |
| [#10009](https://github.com/earendil-works/pi/pull/10009) | `pi-otel` OTLP/HTTP 导出器 | CLOSED | 兑现 [#10006](https://github.com/earendil-works/pi/issues/10006)，**可观测性正式进入官方生态**。 |
| [#9995](https://github.com/earendil-works/pi/pull/9995) | 并行 abort 时 `tool_result` 丢失修复 | CLOSED | 修复 [#9994](https://github.com/earendil-works/pi/issues/9994)，保证 `finalizedCalls` 与事件流一致。 |
| [#9993](https://github.com/earendil-works/pi/pull/9993) | Vertex AI 新增 Anthropic Claude 支持 | CLOSED | Vertex Model Garden 通过 GCP 凭据调用 Claude Opus/Sonnet/Haiku。 |
| [#9988](https://github.com/earendil-works/pi/pull/9988) | `read` 工具 line range 强制 Number 转换 | CLOSED | 修复 [#9887](https://github.com/earendil-works/pi/issues/9887)，`"13"` 不再被字符串拼接成 `2512`。 |

---

## 📈 功能需求趋势

从 50 条活跃 Issue 中提炼出的社区诉求排序：

1. **🏗 Provider 兼容性矩阵扩展** —— 最高频诉求
   - OpenAI 异步工具调用（[#9113](https://github.com/earendil-works/pi/issues/9113)）
   - Bedrock 图片工具结果（[#8643](https://github.com/earendil-works/pi/issues/8643)）
   - Vertex Claude（[#9993](https://github.com/earendil-works/pi/pull/9993) ✅）、Azure Foundry（[#9714](https://github.com/earendil-works/pi/pull/9714)）、Mistral 原生缓存（[#9674](https://github.com/earendil-works/pi/issues/9674)）
   - OpenRouter 路由（[#10022](https://github.com/earendil-works/pi/issues/10022)）、Anthropic 订阅（[#10019](https://github.com/earendil-works/pi/issues/10019)）

2. **🎨 TUI / 渲染健壮性**
   - 长会话全屏重绘（[#9255](https://github.com/earendil-works/pi/issues/9255)）、图像比例（[#8938](https://github.com/earendil-works/pi/issues/8938)）、退出光标恢复（[#10026](https://github.com/earendil-works/pi/issues/10026)）、bash 截断报告（[#10015](https://github.com/earendil-works/pi/issues/10015)）

3. **🧩 扩展 API 一致性 / 生命周期**
   - `before_agent_start` 中 `forceSystemPrompt` 与 `setActiveTools` 冲突（[#9932](https://github.com/earendil-works/pi/issues/9932)）
   - 自定义 continuation 在 `agent_end` 中无法被检测（[#8349](https://github.com/earendil-works/pi/issues/8349)）
   - 同名工具未替换内置（[#9071](https://github.com/earendil-works/pi/issues/9071)）
   - npm `main`/`exports` 解析失败（[#9817](https://github.com/earendil-works/pi/issues/9817)）

4. **📦 模型元数据准确性**
   - 默认 128k 上下文（[#9566](https://github.com/earendil-works/pi/issues/9566)）、Ollama 行为回归（[#9858](https://github.com/earendil-works/pi/issues/9858)）

5. **📊 可观测性 / 工具链**
   - OTel 导出器（[#10006](https://github.com/earendil-works/pi/issues/10006) → [#10009](https://github.com/earendil-works/pi/pull/10009) ✅）
   - 文档中硬编码本地路径触发网关过滤（[#10004](https://github.com/earendil-works/pi/issues/10004)）

---

## 💬 开发者关注点

- **🤖 模型驱动代码质量参差**：`openrouter:xiaomi/mimo-v2.6-flash` 等模型把 `offset`/`limit` 输出成字符串（[#9887](https://github.com/earendil-works/pi/issues/9887)），`GPT-6 Astra` 在 max 推理下压缩炸 token cap（[#9512](https://github.com/earendil-works/pi/issues/9512)）。**鲁棒的客户端类型防御** 成为新刚需。
- **🪟 跨平台仍是痛点**：Windows 上 `shellPath` 非确定性回退（[#9361](https://github.com/earendil-works/pi/issues/9361)）、X11 clipboard 写入伪 `.png`（[#9786](https://github.com/earendil-works/pi/issues/9786)）、Windows 扩展启动崩溃（[#10025](https://github.com/earendil-works/pi/issues/10025)）。
- **🪝 扩展生命周期陷阱**：`session_shutdown` 永不 resolve → 进程冻死（[#9997](https://github.com/earendil-works/pi/issues/9997)）；`agent_end` 中 `sendMessage` 的 `deliverAs: followUp` + `triggerTurn: true` 在 abort 后被丢（[#10016](https://github.com/earendil-works/pi/pull/10016)）。**扩展作者呼吁更明确的钩子时序文档**。
- **📉 治理焦虑**：[#10008](https://github.com/earendil-works/pi/issues/10008) 的出现提示——**Issue 自动关闭流程与用户预期不匹配**，社区期望维护者人工介入 triage 关键回归。
- **⚖️ 计费 / 缓存可见性**：OpenRouter 压缩请求因 `cacheRetention: "none"` 丢失 `x-session-id`，导致**无法在控制台日志关联同一会话**（[#10022](https://github.com/earendil-works/pi/issues/10022)）；工具集变更导致系统 prompt 头移动 → **重新计费**（[#10024](https://github.com/earendil-works/pi/issues/10024)），开发者开始关注成本可预测性。

---

*日报由 AI 辅助生成 · 数据快照时间：2026-09-25 · 仓库：* [badlogic/pi-mono](https://github.com/badlogic/pi-mono)

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**: 2026-09-25 · **数据来源**: github.com/QwenLM/qwen-code

---

## 📌 今日速览

Qwen Code v0.24.5 正式发布,SDK TypeScript v0.1.15 与 Desktop v0.24.5 同步配套发布,Java SDK 持续推进 Managed Runtime v2 契约落地。今日社区关注度集中在**架构演进**(Managed Agent 双路径设计、SDK v2 Runtime 契约)与**用户体验修复**(Windows ConPTY 进程泄漏、TUI React 渲染崩溃、Web Terminal PTY 不可用)两大主线,性能优化类 PR 表现活跃,启动时间与内存占用取得显著改进。

---

## 🚀 版本发布

### v0.24.5(稳定版)
- **Feat(channels)**: 解耦 group-member 访问与 senderPolicy([#12475](https://github.com/QwenLM/qwen-code/pull/12475))
- **Feat(sdk-java)**: 新增 Hosted Harness 私有客户端([#12654](https://github.com/QwenLM/qwen-code/pull/12654))
- **Fix(serve)**: 保留 session 创建失败诊断信息([#12331](https://github.com/QwenLM/qwen-code/pull/12331))
- 完整变更:[Release v0.24.5](https://github.com/QwenLM/qwen-code/releases/tag/v0.24.5)

### 配套版本
| 包 | 版本 | 说明 |
|---|---|---|
| qwen-code CLI | v0.24.5 | 稳定版 |
| qwen-code nightly | v0.24.5-nightly.20260924.ffea2d024e | 夜间构建 |
| sdk-typescript | v0.1.15 | 捆绑 CLI 0.24.5 |
| desktop | v0.24.5 | Tauri 桌面端 |

---

## 🔥 社区热点 Issues

### 1. [#12380](https://github.com/QwenLM/qwen-code/issues/12380) - Managed Agent 双路径架构提案
**评论: 18** · 状态: OPEN · P2
**为什么重要**: 这是当前社区最热议题,定义了 Managed Agent 阶段性架构,涉及会话持久所有权、Workspace 绑定、可恢复工具执行与稳定 WebSocket 通信,是 v0.24.x 系列的路线图核心。

### 2. [#11303](https://github.com/QwenLM/qwen-code/issues/11303) - Windows ConPTY 进程泄漏
**评论: 17** · 状态: OPEN · P1 · 待人工处理
**为什么重要**: 12 小时运行后泄漏 347 个 conhost.exe 进程、占用 ~2.8GB 内存,直接影响 VS Code Companion 用户长期使用体验。

### 3. [#11500](https://github.com/QwenLM/qwen-code/issues/11500) - TUI 在多后台 agent 完成时静默退出
**评论: 16** · 状态: OPEN · P1
**为什么重要**: 触发 Minified React error #185(最大更新深度超限),由 Ink useBoxMetrics setState 循环导致,与 #11756(#185 虚拟化历史崩溃)为同源问题。

### 4. [#11872](https://github.com/QwenLM/qwen-code/issues/11872) - Web Terminal 显示 "PTY not available"
**评论: 14** · 状态: OPEN · P1
**为什么重要**: `@lydell/node-pty` 已声明但未打包,macOS 代码签名阻止本地预构建,直接影响 Web Terminal 用户体验。

### 5. [#11119](https://github.com/QwenLM/qwen-code/issues/11119) - 后台 shell 输出在 daemon 会话回收时静默丢失
**评论: 10** · 状态: OPEN · P1
**为什么重要**: 守护进程托管的 Web Shell 会话中,后台 shell 输出与唤醒通知丢失导致会话卡死,影响自动化工作流可靠性。

### 6. [#8596](https://github.com/QwenLM/qwen-code/issues/8596) - 弃用 Electron 桌面端,desktop-shell 重命名为 desktop
**评论: 10** · 状态: OPEN · P2
**为什么重要**: 反映 Tauri 取代 Electron 的战略方向,[#12653](https://github.com/QwenLM/qwen-code/pull/12653) 已开始落地重命名。

### 7. [#8097](https://github.com/QwenLM/qwen-code/issues/8097) - 后台 agent 协调缺陷
**评论: 9** · 状态: OPEN · P2
**为什么重要**: 暴露三个相关故障:父 agent 重复子 agent 工作、过早完成判定、非交互式 send_message 失效,是多 agent 系统的核心痛点。

### 8. [#12416](https://github.com/QwenLM/qwen-code/issues/12416) - Remote-SSH POST /session 失败
**评论: 8** · 状态: OPEN · P1
**为什么重要**: Companion 0.24.2 在 Remote-SSH 场景下每次创建会话均报 `EPIPE` / `BridgeChannelClosedError`,独立 CLI 正常,影响远程开发场景。

### 9. [#12381](https://github.com/QwenLM/qwen-code/issues/12381) - 恢复 HTTP 网关超时后的 session-create 结果
**评论: 7** · 状态: OPEN · P2
**为什么重要**: 网关超时场景下客户端无 session ID,无法提交首条 prompt,直接关联 Web Shell 与 SDK 的鲁棒性。

### 10. [#12589](https://github.com/QwenLM/qwen-code/issues/12589) - System One 决策闸门(/superfast)
**评论: 6** · 状态: OPEN · P3 · 需讨论
**为什么重要**: 提议在用户每一轮都唤醒完整 System Two LLM 之前加一道轻量分类闸门,可显著降低成本与延迟,代表了推理优化的新思路。

> 完整 50 条 Issue 见 [GitHub Issues 列表](https://github.com/QwenLM/qwen-code/issues)

---

## 🛠️ 重要 PR 进展

### 1. [#12622](https://github.com/QwenLM/qwen-code/pull/12622) - 启动时间减半,RSS 削减 60%
**作者**: tanzhenxin
**亮点**: 采用 measure-first 方法(参考 Claude.ai 加速实践),首次启动 `qwen` 提速约 2.2–2.4 倍,内存占用降低 60%,配套 [#12405](https://github.com/QwenLM/qwen-code/issues/12405) 一并推进一次性无头场景性能。

### 2. [#12492](https://github.com/QwenLM/qwen-code/pull/12492) - Agent 准备式 Batch API 工作流(/batch-api)
**作者**: yiliang114
**亮点**: `/batch-api <task>` 命令让 agent 自动判断任务是否适合批处理、抽样文件、写计划,并配套 `qwen batch run/collect/retry/list` 子命令,补齐 Batch API 的 agent 集成能力。

### 3. [#12630](https://github.com/QwenLM/qwen-code/pull/12630) - Managed Runtime v2 execute/status/cancel 契约
**作者**: doudouOUC
**亮点**: 定义 v2 共享契约,status 只读且无记录时返回 HTTP 200 + unknown,settled 响应必须包含 result。是 Java SDK Runtime 的基础设施。

### 4. [#11854](https://github.com/QwenLM/qwen-code/pull/11854) - 混合 code mode (hybrid)
**作者**: DragonnZhang
**亮点**: 引入 Codex 对齐的 `tools.mode` 枚举(`direct`/`code_mode`/`code_mode_only`),在保留普通工具直接调用的同时暴露隔离的 `exec` JavaScript 工具,实现工具调用范式扩展。

### 5. [#12559](https://github.com/QwenLM/qwen-code/pull/12559) - 匹配 Ink 的 OpenTUI 弹窗几何与补全截断
**作者**: chiga0
**亮点**: OpenTUI 渲染器统一弹窗区域与裁剪逻辑,解决补全下拉挤压 composer 的问题,是 OpenTUI 渲染稳定性的关键补丁。

### 6. [#12649](https://github.com/QwenLM/qwen-code/pull/12649) - 固定 @lydell/node-pty-linux-arm64 依赖
**作者**: yiliang114
**亮点**: 修复 [#11872](https://github.com/QwenLM/qwen-code/issues/11872),补齐 linux-arm64 预构建版本固定,并将现有 fatal 闸门接入 `release.yml` 归档构建。

### 7. [#12653](https://github.com/QwenLM/qwen-code/pull/12653) - 重命名 packages/desktop-shell 为 packages/desktop
**作者**: yiliang114
**亮点**: 落地 [#8596](https://github.com/QwenLM/qwen-code/issues/8596) 提议,同步更新 CI、构建、品牌资源与 eslint 忽略,完成 Electron → Tauri 的命名切换。

### 8. [#12627](https://github.com/QwenLM/qwen-code/pull/12627) - 调和并采用已恢复的 Runtime 绑定
**作者**: doudouOUC
**亮点**: Broker 重启后可恢复持久化的 READY 绑定,解决 lease 不存于任何进程活集导致的 `runtime_reconciliation_required` 失败关闭问题。

### 9. [#12637](https://github.com/QwenLM/qwen-code/pull/12637) - Java SDK Runtime 传输层 v2 工具操作
**作者**: doudouOUC
**亮点**: HttpRuntimeTransport 新增 execute/status/cancel,以 (sessionId, promptId, callId, argsDigest) 为键并严格解析,补齐 Java SDK 的 Managed Runtime 客户端能力。

### 10. [#12636](https://github.com/QwenLM/qwen-code/pull/12636) - Web Shell 侧栏允许删除当前会话
**作者**: yiliang114
**亮点**: 解除 Web Shell 侧栏 session 行的 `disabled={busy || isCurrent}` 限制,关联 [#12669](https://github.com/QwenLM/qwen-code/issues/12669) 进一步支持无 workspace 独立会话的"先离开再删除"流程。

> 其他值得关注的 PR:[#12540](https://github.com/QwenLM/qwen-code/pull/12540)(/context 账务收尾)、[#12531](https://github.com/QwenLM/qwen-code/pull/12531)(MCP 服务规则不再授权冲突服务)、[#12605](https://github.com/QwenLM/qwen-code/pull/12605)(shell 模式不再污染一次性系统提示前缀)。

---

## 📈 功能需求趋势

通过分析所有 50 条更新 Issue,可识别出以下社区最关注的功能方向:

### 🏗️ 1. Managed Runtime 与双路径 Agent 架构(热度最高)
- 核心 Issue: [#12380](https://github.com/QwenLM/qwen-code/issues/12380)(18 评论)、[#12381](https://github.com/QwenLM/qwen-code/issues/12381)、[#12053](https://github.com/QwenLM/qwen-code/issues/12053)
- Java SDK 围绕 Hosted Harness / Managed Runtime v2 密集提交([#12654](https://github.com/QwenLM/qwen-code/pull/12654)、[#12630](https://github.com/QwenLM/qwen-code/pull/12630)、[#12627](https://github.com/QwenLM/qwen-code/pull/12627)、[#12637](https://github.com/QwenLM/qwen-code/pull/12637))
- **趋势**:Qwen Code 正从 TypeScript 单路径走向"TS 主路径 + Managed Runtime 双轨"的生产级架构。

### 🖥️ 2. 桌面端演进(Electron → Tauri)
- [#8596](https://github.com/QwenLM/qwen-code/issues/8596) 提议 + [#12653](https://github.com/QwenLM/qwen-code/pull/12653) 落地
- Web Shell 多个小修(滚动条 gutter、删除当前会话、Live 草稿回退)
- **趋势**:Tauri 桌面 shell 全面接管 Electron 命名与发布渠道。

### ⚡ 3. 性能优化(启动/内存/延迟)
- [#12405](https://github.com/QwenLM/qwen-code/issues/12405)、[#12589](https://github.com/QwenLM/qwen-code/issues/12589)、[#12235](https://github.com/QwenLM/qwen-code/issues/12235)
- [#12622](https://github.com/QwenLM/qwen-code/pull/12622) 启动加速 2.2×,RSS ↓60%
- **趋势**:从"功能完成度"转向"生产可用性能",measure-first 文化形成。

### 🤖 4. 多 Agent 与后台任务协调
- [#8097](https://github.com/QwenLM/qwen-code/issues/8097)(子 agent 工作重复/过早完成)、[#11119](https://github.com/QwenLM/qwen-code/issues/11119)(后台 shell 输出丢失)、[#12207](https://github.com/QwenLM/qwen-code/issues/12207)(通知延迟/丢包)、[#12470](https://github.com/QwenLM/qwen-code/issues/12470)(maxParallelAgentsByModel 对前台 agent 失效)
- **趋势**:多 agent 系统已从"能跑"进入"鲁棒性修复"阶段。

### 🔌 5. IDE 集成与平台兼容性
- VS Code 多根工作区([#12628](https://github.com/QwenLM/qwen-code/issues/12628))、Remote-SSH 会话创建([#12416](https://github.com/QwenLM/qwen-code/issues/12416))、Windows ConPTY 泄漏([#11303](https://github.com/QwenLM/qwen-code/issues/11303))、macOS PTY 签名([#11872](https://github.com/QwenLM/qwen-code/issues/11872))、Linux 剪贴板([#12505](https://github.com/QwenLM/qwen-code/issues/12505))
- **趋势**:跨平台兼容性仍是 P1 高频痛点。

### 🧠 6. 推理成本与上下文效率
- [#12589](https://github.com/QwenLM/qwen-code/issues/12589)(System One 决策闸门)、[#12579](https://github.com/QwenLM/qwen-code/issues/12579)(本地 LLM token 浪费)、[#12235](https://github.com/QwenLM/qwen-code/issues/12235)(/context 账务)
- **趋势**:面向本地小模型与低成本部署的"轻量化决策"成为新焦点。

---

## 💡 开发者关注点

综合 50 条 Issue 与 50 条 PR 的讨论热度,社区开发者的核心痛点与高频需求可归纳为:

| 痛点 / 需求 | 代表性议题 | 频率 |
|---|---|---|
| **TUI 渲染崩溃与 React 错误** | [#11500](https://github.com/QwenLM/qwen-code/issues/11500)、[#11756](https://github.com/QwenLM/qwen-code/issues/11756) | 高(同源 React #185) |
|

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**报告日期**：2026-09-25
**数据源**：github.com/Hmbown/DeepSeek-TUI
**项目**：Codewhale（DeepSeek TUI）

---

## 📌 今日速览

今天 Codewhale 仓库动态以 **v0.10.0 回归修复集中提交** 为核心特征——单日内 14 个 PR 合入、19 个 Issue 关闭，覆盖子代理生命周期、模型路由、压缩（compaction）可靠性、Windows 兼容性等多个曾导致 founder 报告的高优先级 bug。审核驱动的安全硬化议题（`needs-triage` 标签）首次批量浮现，呈现系统化的工程质量治理方向，同时 `agent memory pluggable`、`/router + Jev`、`settings by conversation` 等产品级 feature 提案陆续进入设计阶段。

---

## 🚀 版本发布

过去 24 小时无新版本发布。最近一次正式版本为 **v0.10.0**（此前多个 Issue 与 PR 明确以 "0.10.0 regression" 字样描述问题），今日合入的修复预计将并入下一个小版本。

---

## 🔥 社区热点 Issues（Top 10）

> 以"社区关注度（评论数）+ 议题影响力（founder 报告 / 安全性 / 体系性）+ 改动面"综合排序。

### 1. [#6050](https://github.com/Hmbown/Codewhale/issues/6050) — Pluggable agent memory：可插拔后端抽象层
- **标签**：`enhancement`、`feature`
- **社区反应**：5 条评论（昨日最高）
- **为什么重要**：当前 `MemoryBackend` 仅有 `Native` / `Off` 两档，无法接入第三方方案。该 Issue 提出以 `CausalMemory` 与 `mem0` 为参考实现，统一所有记忆后端的接入面，是 Codewhale 朝生态化方向的关键一步。

### 2. [#6504](https://github.com/Hmbown/Codewhale/issues/6504) — 子代理在 100k / step 输入上限被击毙且永不压缩
- **标签**：`bug`（已关闭）
- **社区反应**：3 条评论
- **为什么重要**：founder 实战报告——`deepseek-flash` 上的 explore 子代理 56 秒后失败，子代理不会像父代理那样自动压缩上下文。修复（[PR #6549](https://github.com/Hmbown/Codewhale/pull/6549)）今日合入，社区认可这是高级用户工作流稳定性的核心保障。

### 3. [#6427](https://github.com/Hmbown/Codewhale/issues/6427) — v0.10.0 Windows 终端多行粘贴回归
- **标签**：`bug`
- **社区反应**：2 条评论
- **为什么重要**：#5981 的多行粘贴修复在 Windows Terminal 上被重新破坏，粘一行就提交一次。多平台稳定性的典型回归。

### 4. [#6109](https://github.com/Hmbown/Codewhale/issues/6109) — 构建跨端的"确定性视听宠物"
- **标签**：开放（feature）
- **社区反应**：2 条评论
- **为什么重要**：提出在浏览器、TUI、原生宿主之间共享一套 Engine 事件权威、一个确定性世界 / 分数 / 回放模型，是品牌的视觉化长期工程。跨端一致性是其核心挑战。

### 5. [#6421](https://github.com/Hmbown/Codewhale/issues/6421) — v0.10.0 中 deepseek-flash 误报不支持图像
- **标签**：`bug`（已关闭）
- **社区反应**：2 条评论
- **为什么重要**：是"`Models.dev` JSON 已更正但 `bundled_offerings()` 手工行未同步"的元数据同步缺陷。模型能力标注的源头治理问题（修复：[PR #6521](https://github.com/Hmbown/Codewhale/pull/6521)）。

### 6. [#6566](https://github.com/Hmbown/Codewhale/issues/6566) — 首跑体验：新用户看不到 onboarding，首条消息丢失或重复
- **标签**：`bug`（开放，founder 报告）
- **为什么重要**：首次运行审计（throwaway HOME + mock provider）显示 `initial_onboarding_state` 缺位、provider picker / key 错误 / 审批卡均为开发者视角的开发者用语——是用户激活漏斗（activation funnel）的硬阻塞。

### 7. [#6565](https://github.com/Hmbown/Codewhale/issues/6565) — 后台任务：footer 信息碎片化、agent 名不一致、needs-you 不显示、cache 率被折叠默认值掩盖
- **标签**：`bug`（开放）
- **为什么重要**：覆盖 15 个"后台任务反馈"面 + cache 率展示的横向审计，是产品可见性（visibility）的体系化整改。

### 8. [#6562](https://github.com/Hmbown/Codewhale/issues/6562) — Code Mode for MCP / 插件：先发现后绑定
- **标签**：开放，feature
- **为什么重要**：参考 Cloudflare Code Mode、Anthropic "code execution with MCP"、Cursor schema folders；founder 81 次会话 / 11,574 次工具调用数据显示 MCP 占 3% 调用量却占 71% token。Code Mode 被视为降低 MCP 调用 token 的核心策略。

### 9. [#6560](https://github.com/Hmbown/Codewhale/issues/6560) — 审计：未信任输入缺乏资源限制 / DoS 控制
- **标签**：`needs-triage`、`audit`
- **为什么重要**：明确把 fan-out / cardinality / 任务计数 / 登录尝试 / 摄入速率 / 请求体大小纳入 DoS 防御清单，是审核驱动的系统化硬化首次批量铺开。

### 10. [#6555](https://github.com/Hmbown/Codewhale/issues/6555) — 审计：持久化写入非崩溃原子（tmp+rename 缺 fsync / 部分提交）
- **标签**：`bug`、`needs-triage`、`audit`
- **为什么重要**：状态、会话、ledger、目标、job 记录被以非唯一写入路径写入——这是数据一致性的根本风险点，反映出"耐久状态写入协议"的整体缺陷。

---

## ✅ 重要 PR 进展（Top 10）

> 以"修复高影响力 bug / 新能力 / 产品可见性提升"为筛选维度。

### 1. [#6567](https://github.com/Hmbown/Codewhale/pull/6567) — 官网 header 与安装 hero 升级至 GPUI Beta（开放）
- 将官网 header、图标控件、移动端菜单、shell / npm 安装选择器全部接入 GPUI 设计语言；Sign in 成为唯一账户入口。

### 2. [#6539](https://github.com/Hmbown/Codewhale/pull/6539) — `feat(auto)`：官方模型路由 `/router` 与 Jev
- 新增 `[auto.router] kind = "decision"` 模式（默认 `chat`），通过 OpenRouter 或 TypeSafe 集成 Jev，每个 Auto turn 调一次 System One，按 fast / strong + 思考层级输出概率化选择与置信度。**关闭 [#6525](https://github.com/Hmbown/Codewhale/issues/6525)**。

### 3. [#6544](https://github.com/Hmbown/Codewhale/pull/6544) — `fix(compaction)`：停止 fallback 窗口误触发紧急 pass、复用本轮缓存前缀
- 失败根因：本地 ollama / qwen3:4b dogfood 会话触发 `emergency` pass，15/16 compaction 失败；修复后无生产窗口再失败，且 summary 调用从 ~219k token / 0% 缓存命中率降为合理水平。**关闭 [#6540](https://github.com/Hmbown/Codewhale/issues/6540)**。

### 4. [#6549](https://github.com/Hmbown/Codewhale/pull/6549) — `fix(agents)`：子代理预算耗尽时保留确定性 digest 作为可交付物
- 在 bounded hand-back turn 之前，将 digest 写入 `.codewhale/state/subagent-results/<sha256(agent_id)>.md`，独立于 model 报告成功与否。**关闭 [#6536](https://github.com/Hmbown/Codewhale/issues/6536)**。

### 5. [#6519](https://github.com/Hmbown/Codewhale/pull/6519) — `fix(tui)`：失焦时继续绘制（macOS）；Esc 提示只在能关 workbar 的位置出现
- 修复 4a633a0 在 macOS 第二窗口下假装冻结；并修正 Esc 提示文案误导用户以为它关 workbar 的问题。**关闭 [#6502](https://github.com/Hmbown/Codewhale/issues/6502)**。

### 6. [#6537](https://github.com/Hmbown/Codewhale/pull/6537) — `fix(tui)`：`/model` 默认按"当前→pin / Fleet→最近"展示；废弃 `enabled_models`
- 解决 pin 被默认隐藏、列表还停留在 GLM-5.2 等老模型的问题。**关闭 [#6533](https://github.com/Hmbown/Codewhale/issues/6533)**。

### 7. [#6520](https://github.com/Hmbown/Codewhale/pull/6520) — `fix(tui)`：工作流卡片可一眼读懂，移除全面板下划线 hover
- 标题一行（不再截整段 prompt）、`phase 2/2 plan · 5 running` 取代字符密集的字形条、移除"健康时也告警色"的问题。**关闭 [#6503](https://github.com/Hmbown/Codewhale/issues/6503)**。

### 8. [#6527](https://github.com/Hmbown/Codewhale/pull/6527) — `fix(app-server)`：移除 `/tool` 端点及其背后"空第二权威"
- `POST /tool` 用了一个空 `ToolRegistry` 和本地审批映射，等于在 Engine 之外重造了一套审批流。**直接关闭该路由**，统一回到 Engine。**关闭 [#6505](https://github.com/Hmbown/Codewhale/issues/6505)**。

### 9. [#6524](https://github.com/Hmbown/Codewhale/pull/6524) — `fix(client)`：每条 Chat Completions 路由都把推理字段视为 Thinking
- 修复 `delta.reasoning_content` / `reasoning` / `reasoning_details` 只在 provider 白名单 + 离线目录标记同时满足时才被渲染的"双重门控"漏洞。**关闭 [#6501](https://github.com/Hmbown/Codewhale/issues/6501)**。

### 10. [#6552](https://github.com/Hmbown/Codewhale/pull/6552) — `fix(audit)`：DSH 集成审计写入自身 home，测试不再污染真实 `audit.log`
- 5 个 `integration.dsh.*` 审计事件绕过 hermetic home 处理，污染真实 `~/.codewhale/audit.log`；修复后 DSH 单元测试不再触及真实日志。**关闭 [#6534](https://github.com/Hmbown/Codewhale/issues/6534)**。

---

## 📈 功能需求趋势

从今日活跃 Issue 提炼社区最关注的功能方向：

| 方向 | 代表性 Issue / PR | 当前阶段 |
|---|---|---|
| **可插拔 Agent Memory**（causal-memory / mem0） | [#6050](https://github.com/Hmbown/Codewhale/issues/6050) | 设计中，5 条评论 |
| **官方模型路由 `/router`（decision router + Jev）** | [#6525](https://github.com/Hmbown/Codewhale/issues/6525) / [PR #6539](https://github.com/Hmbown/Codewhale/pull/6539) | 已合入 |
| **Settings by Conversation（提议式 + 审批卡）** | [#6564](https://github.com/Hmbown/Codewhale/issues/6564) | Founder ask 阶段 |
| **MCP Code Mode + 插件发现/绑定共享门** | [#6562](https://github.com/Hmbown/Codewhale/issues/6562) | 设计研究阶段，founder 数据驱动 |
| **Web 搜索后端扩充（TinyFish）** | [#6532](https://github.com/Hmbown/Codewhale/issues/6532) | 已关闭（提案合入） |
| **跨端确定性视听宠物 / 共享世界模型** | [#6109](https://github.com/Hmbown/Codewhale/issues/6109) | 持续追踪 |
| **粘入的 API Key 规范化（不可见字符剔除）** | [PR #6550](https://github.com/Hmbown/Codewhale/pull/6550)（开放） | 开放，准备合入 |
| **第一跑体验 / Onboarding 重建** | [#6566](https://github.com/Hmbown/Codewhale/issues/6566) | 已审计，待实施 |
| **GPUI 公网站设计语言统一** | [PR #6567](https://github.com/Hmbown/Codewhale/pull/6567)（开放） | 开放 |
| **持久化原子写 / 资源限制 / 子代理清理 / Token-side 幂等** | [#6555](https://github.com/Hmbown/Codewhale/issues/6555)、[#6556](https://github.com/Hmbown/Codewhale/issues/6556)、[#6557](https://github.com/Hmbown/Codewhale/issues/6557)、[#6558](https://github.com/Hmbown/Codewhale/issues/6558)、[#6559](https://github.com/Hmbown/Codewhale/issues/6559)、[#6560](https://github.com/Hmbown/Codewhale/issues/6560)、[#6561](https://github.com/Hmbown/Codewhale/issues/6561) | 审核 Backlog，待 triage |

---

## 🛠 开发者关注点

从 Issue 摘要、PR 描述与 founder 报告交叉归纳，开发者社区的痛点和共识高度集中在以下几个方面：

1. **子代理（sub-agent）生命周期可靠性**：100k/step 强截断 + 缺乏自动压缩 + digest 仅在手回提示内——这是今日首个被关闭的高优先级 Issue（[#6504](https://github.com/Hmbown/Codewhale/issues/6504)），反映"多 agent 工作流"已经成为核心使用场景

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*