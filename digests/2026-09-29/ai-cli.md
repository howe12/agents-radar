# AI CLI 工具社区动态日报 2026-09-29

> 生成时间: 2026-09-29 03:41 UTC | 覆盖工具: 9 个

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
**统计日期：2026-09-29**

---

## 1. 生态全景

2026 年 9 月末，主流 AI CLI 工具整体进入**高频迭代与架构演进并行**的阶段：头部工具（Copilot CLI、Codex、Claude Code）在 24 小时内发布 1–5 个版本，新兴工具（OpenCode、Qwen Code、Pi）则把工程力量集中在架构级 Feature（Managed Agent 平台、HITL 分级权限、Codemode/MCP 集成）上。社区关注的痛点高度收敛于 **MCP/OAuth 认证脆弱性**、**子代理可靠性**、**跨平台 TUI 兼容性** 与 **推理模型的上下文管理** 四大方向；数据安全（静默写入陈旧内容、会话默认 30 天删除）则成为付费用户最敏感的底线问题。差异化竞争中，**单一模型厂商 CLI** 强调与生态闭环（Claude Code Skills、Codex Remote Control、Qwen Hosted Shell），而**多 provider 中立工具**（OpenCode、Pi、DeepSeek TUI）则以 Provider 路由稳定性与协议适配作为竞争主轴。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Issues | 今日 PR | 今日 Release | 主要动作 |
|------|------------|---------|--------------|----------|
| **Claude Code** | 10（高互动） | 6 | 1（v2.1.284，含回归） | 升级 Sonnet 5.5，Auto-Memory/跨端同步/Win 体验 |
| **OpenAI Codex** | 10 | 10 | 4（v0.158.0 稳定 + 3 个 0.159/0.160 预发布） | TUI 复制粘贴修复、MCP OAuth 客户端密钥 |
| **Gemini CLI** | 10 | 10 | 1（v0.63.0-nightly） | 修认证死循环，子代理可靠性系列修复 |
| **GitHub Copilot CLI** | 10 | **0** | **5**（v1.0.89 系列 + v1.0.90 预发布） | OAuth Token 刷新、PR 模板、`.claude/rules` 兼容 |
| **Kimi Code CLI** | — | — | — | **过去 24 小时无活动** |
| **OpenCode** | 10 | 10 | 1（v1.18.33） | Provider 超时、MCP 启动检测、HITL Phase 7 合并 |
| **Pi** | 10 | 11 | 0 | Codemode + MCP、llama.cpp 受管模式、Provider 兼容扩张 |
| **Qwen Code** | 10 | 10 | 0 | Managed Agent 双引擎、Auto Memory 2.0、Web Shell 轨迹 |
| **DeepSeek TUI** | 10 | 10 | 1（v0.10.1 补丁） | 流层重试可配置、OpenCode Zen 路由、钩子 receipt |

> **观察**：Copilot CLI 单日发布 5 版但 PR 数为 0，提示其走"内部预发布通道为主"路径；Codex 同时跑稳定版与三条预发布线，迭代最为密集；Kimi Code 完全沉寂，是当日唯一零活跃的工具。

---

## 3. 共同关注的功能方向

### 3.1 MCP / OAuth 认证体系脆弱（最广共识）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | OAuth 与 token 缓存一致性 |
| OpenAI Codex | #13852 Supabase OAuth 刷新循环；v0.158.0 新增预注册客户端密钥 |
| GitHub Copilot CLI | #4929/#4971 token 不刷新、#4968 redirect URI 端口错配、#4606 Google Workspace 失败 |
| Gemini CLI | v0.63.0 修认证死循环 |
| OpenCode | #51979 MCP OAuth 并发刷新 single-flight 修复 |
| DeepSeek TUI | 新增 `DEEPSEEK_TOOL_EXECUTION_RECEIPT` 钩子（提升认证/调用链可观测性） |

→ **共识诉求**：长进程下认证稳定、Token 刷新机制可靠、跨服务（MCP / Datadog / Google / Supabase）OAuth 开箱即用。

### 3.2 子代理（Subagent）可靠性与可观测性

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #97665 Subagent compaction 丢失尾部记录 |
| Gemini CLI | #22323 MAX_TURNS 误报 GOAL 成功、#21409 Generalist Agent 挂死 |
| Qwen Code | #12380 Managed Agent 双路径架构、#12931 Code Mode 并发化 |
| OpenCode | #50798 v2 tab 暴露子代理模型/变体 |

→ **共识诉求**：Termination Reason 区分、子代理 UI 可见性、错误信号保真。

### 3.3 TUI 跨平台体验（复制粘贴、终端兼容）

| 工具 | 代表议题 |
|------|---------|
| OpenAI Codex | #48125/#47996 0.157.0 复制粘贴回归；#49112 X11 PRIMARY 修复 |
| OpenCode | #44007 后台 tab 权限请求卡死；#38585 Win+A 键位被 OS 抢占 |
| DeepSeek TUI | #6697/#6704 跳到最新消息按钮、文本背景黑化 |
| Gemini CLI | #29436 引号中 `@` 触发 100% CPU 挂起 |

→ **共识诉求**：iTerm2 / Warp / kitty / Windows Terminal / WSL / Wayland 行为一致；不可见字符与终端协议需更严格校验。

### 3.4 推理模型的上下文与 compaction 治理

| 工具 | 代表议题 |
|------|---------|
| Pi | #9409 推理模型上下文上限 wedge；#10033 compaction 把 thinking 全文塞入摘要 |
| OpenAI Codex | #43781/#47041 GPT-6 Astra 无害输入被拒 |
| Claude Code | 引入 Sonnet 5.5（1M 上下文）后用量统计与配额追踪需求激增 |
| Qwen Code | #12028 非对话 context token 治理 |

→ **共识诉求**：thinking 块生命周期可控、compaction 不破坏 reasoning chain、reasoning effort 跨 provider 一致传递。

### 3.5 数据完整性与可恢复性（底线诉求）

| 工具 | 代表议题 |
|------|---------|
| Claude Code | #62476 30 天静默删除会话；#93482 Cowork 写入陈旧内容；#97665 Subagent 尾部丢失 |
| Qwen Code | #12970 `invalid_tool_params` 误诊为 `max_tokens` 截断；#12961 `<system-reminder>` 静默截断 |
| Pi | #10074 非 ASCII 工具参数被破坏为控制字符 |

→ **共识诉求**：写入必须可验证、错误类型不可被分类器掩盖、转录/历史可追溯。

### 3.6 Windows / macOS / Linux 平台一致性

几乎所有工具（Claude Code、Codex、Copilot CLI、OpenCode、Qwen Code）都把"**Windows 体验短板**"列为高优 Bug 密集区；macOS 主要痛点集中在签名（#70647）与 Remote Control（Codex #36946）；Linux 痛点则在 NixOS（Copilot #3392、#1838）、Wayland（Gemini #21983）、Debian 包（Codex #48602）等非主流环境。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | Skills/Plugins 生态、Auto-Memory、Desktop-CLI 协同 | Anthropic 重度用户、追求长期记忆的项目复盘者 | 长上下文 + Skills 一等公民；近期把"跨端统一"作为差异化壁垒 |
| **OpenAI Codex** | 桌面 + Remote Control + Web 闭环 | OpenAI 模型深度用户、GUI 偏好者 | "稳定版 + 3 条预发布线"快速迭代；MCP OAuth 完善度高 |
| **Gemini CLI** | 子代理生态、AST-aware 上下文治理 | Google Cloud / Gemini 模型用户、Agent 编排爱好者 | Local Subagent Sprint 持续；AST-aware 读取是 top-down 编辑 |
| **GitHub Copilot CLI** | PR 工作流、`.claude/rules` 兼容、多模式配置 | GitHub 原生用户、企业 DevOps | "高频预发布 + 零 PR"封闭开发模式；模式（plan/autopilot）粒度最深 |
| **OpenCode** | 多 Provider 中立、Plugin/HITL 生态 | 跨模型研究者、本地/云混合部署者 | Provider 路由是"黑盒" → 持续透明化；HITL 5 级 Phase 7 已合并 |
| **Pi** | Provider 兼容扩张、Codemode/MCP、llama.cpp 本地推理 | 自托管玩家、研究型用户 | "QuickJS 中执行模型生成 JS"的沙箱执行；本地推理 + OpenAI-compat 全覆盖 |
| **Qwen Code** | Managed Agent 平台、Auto Memory 2.0、Web Shell 观测 | 阿里云生态、企业级托管 Agent 需求者 | "Legacy + Managed 双路径"架构，Hosted Shell 先于本地 Managed |
| **DeepSeek TUI** | 推理模型优化、TUI 微观体验、网络可靠性 | DeepSeek 模型用户、终端纯净体验追求者 | 流层重试可配置；钩子 Receipt schema 化（行业最早之一） |

---

## 5. 社区热度与成熟度

### 🔥 第一梯队：高频迭代 + 高互动量
- **OpenAI Codex**：4 个版本/日 + 10 PR + 10 高互动 Issue，社区情绪强烈（"#48125 我他妈的不能复制"），反映**用户规模大、痛点敏感度高**。
- **GitHub Copilot CLI**：单日 5 个版本，认证相关 Issue 单日 6 条被关/更新，团队响应速度高但暴露**底层 OAuth/Token 设计尚未稳定**。
- **Claude Code**：1M 上下文 Sonnet 5.5 上线引爆用量统计与配额讨论；v2.1.284 同日引入回归（sandbox glob 卡死、Enter 语义变化）反映**发布节奏收紧与回归面扩大并存**。

### 🏗️ 第二梯队：架构演进期
- **Qwen Code**：无版本但 10 PR 全部指向 Managed Agent 平台主线（Hosted Shell / MCP Runtime / 后台 agent 暴露），处于**平台化工程收尾期**。
- **OpenCode**：v1.18.33 + HITL Phase 7 合并 + 多 Provider 路由重构，处于**生态护城河构建期**。
- **Pi**：Codemode + MCP 是本周最大架构演进（QuickJS WASM worker 内执行模型生成的 JS），处于**协议抽象期**。

### 🔧 第三梯队：稳定性主导
- **Gemini CLI**：P1 子代理挂死、P1 Wayland 兼容、P1 get-shit-done 末期崩溃——社区反馈集中在**核心场景稳定性**，架构演进动作温和（仅一次 nightly 修认证死循环）。
- **DeepSeek TUI**：v0.10.0 → v0.10.1 24h 紧急补丁，TUI 渲染 + 网络可靠性是主轴，处于**早期快速打磨期**。

### ⚠️ 沉寂信号
- **Kimi Code CLI**：24h 零活动，是当日唯一完全沉寂的明星项目，需关注是否进入维护期。

---

## 6. 值得关注的趋势信号

### 趋势 1：MCP 从"连得上"进入"质量打磨期"
所有头部工具的 MCP 相关 Issue 已从最初的"连接失败"过渡到 **OAuth token 刷新、redirect URI 错配、并发竞态、stdio secret 占位符、catalog 路由失修** 等深水区。DeepSeek TUI 的 `DEEPSEEK_TOOL_EXECUTION_RECEIPT`、OpenCode 的 single-flight 刷新合并、Codex 的 `--oauth-client-secret` 支持都指向同一方向：**MCP 的工程化标准正在被反复定义**。

> **对开发者的参考价值**：依赖 MCP 的项目应预设 token 刷新重试、可观测 receipts 与 catalog 动态发现能力。

### 趋势 2：推理模型正在重塑上下文管理
Claude Sonnet 5.5（1M 上下文）、GPT-6 Astra、DeepSeek V4.1、Qwen 等推理模型普及后，**auto-compaction 反复失败、thinking 块污染摘要、reasoning effort 跨 provider 不一致** 成为新基准痛点。Pi 的 `reasoning effort` 跨 Bedrock 修复、Qwen Code 的非对话 context 治理、Claude Code 的 Auto-Memory 阈值可配置需求都印证：**长上下文 ≠ 白嫖**，必须配套治理工具。

> **对开发者的参考价值**：选择 CLI 时应把"推理模型的 thinking 块生命周期管理"列为必看项，而非仅比较上下文窗口数字。

### 趋势 3：跨端统一（Desktop / CLI / Web / Remote）成为差异化壁垒
Claude Code 把 Skills 跨 Desktop-CLI 同步作为 #20697（157 👍 历史最高）推进；Qwen Code 用 `GET

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
*数据截止：2026-09-29 | 数据源：anthropics/skills*

> ⚠️ **数据说明**：本次提供的 PR 评论数均为 undefined，因此热门 PR 排序结合了 *创建/更新时间、关联 Issue 热度、功能重要性* 三维信号综合判断。Issues 数据完整，按真实评论数排序。

---

## 一、热门 Skills 排行（按社区关注度）

| # | Skill | PR | 核心功能 | 状态 | 社区关注点 |
|---|-------|----|---------|------|-----------|
| 1 | **proofcore-contract-auditor** | [#1771](https://github.com/anthropics/skills/pull/1771) | Solidity/Rust 智能合约静态分析 + TON 区块链零存储 Merkle 协议锚定审计证明 | 🟢 OPEN | Web3 场景首个审计类 Skill，引入链上存证，话题度高 |
| 2 | **AWT (AI Watch Tester)** | [#822](https://github.com/anthropics/skills/pull/822) | 基于视觉 + 浏览器控制的零代码 E2E 测试生成 | 🟢 OPEN | 测试自动化方向代表，链接社区长期关注的测试痛点 |
| 3 | **md2video-audio** | [#1703](https://github.com/anthropics/skills/pull/1703) | Markdown → Marp → MP4 视频 + 拟人语音旁白（零成本） | 🟢 OPEN | 内容创作场景热门方向，差异化明显 |
| 4 | **blast-radius** | [#1776](https://github.com/anthropics/skills/pull/1776) | 批量/破坏性写操作前的检查清单（删行、撤销权限、群发邮件等） | 🟢 OPEN | 直接呼应 Issue #1385 的"质量门"理念，治理类 |
| 5 | **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 检测孤儿/寡妇段落、编号错位等排版缺陷 | 🟢 OPEN | 文档生成基础痛点，所有 AI 文档用户受益 |
| 6 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy、单元/组件/E2E 全栈测试哲学 | 🟢 OPEN | 与 AWT 形成"测试方法论 + 工具"互补 |
| 7 | **notion-spec-to-implementation + quantitative-resume-auditor** | [#1245](https://github.com/anthropics/skills/pull/1245) | 双 Skill 合并提交：Notion 规格拆解为可执行任务 / 简历量化指标审计 | 🟢 OPEN | 产品研发 + 求职场景，覆盖企业工作流 |
| 8 | **pyxel** | [#525](https://github.com/anthropics/skills/pull/525) | Python 复古游戏开发 + 无头输入驱动帧检测 | 🟢 OPEN | 创意/娱乐向 Skill 长尾需求代表 |

---

## 二、社区需求趋势（Issues 提炼）

按评论数 Top 议题反映出五大集中诉求：

| 诉求方向 | 代表 Issue | 评论数 | 热度 |
|---------|-----------|-------|-----|
| 🔒 **信任边界与安全** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 anthropic/ 命名空间 | **43** | 🔥🔥🔥🔥🔥 |
| 🏢 **组织级共享机制** | [#228](https://github.com/anthropics/skills/issues/228) org-wide skill sharing | 16 | 🔥🔥🔥🔥 |
| 🐛 **Skill 触发可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% / [#1383](https://github.com/anthropics/skills/issues/1383) benchmark 静默失败 | 12+4 | 🔥🔥🔥🔥 |
| 🧠 **Context Window 与状态压缩** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api 一次注入 156k tokens / [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory 提案 | 4+9 | 🔥🔥🔥 |
| 🛠 **评估与治理质量** | [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder eval 0/N / [#1394](https://github.com/anthropics/skills/issues/1394) eval-viewer XSS / [#1385](https://github.com/anthropics/skills/issues/1385) Quality Gate Pipeline | 4×3 | 🔥🔥🔥 |

**次要趋势**：
- 📦 **插件去重**：[#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复
- 💾 **数据丢失恐慌**：[#62](https://github.com/anthropics/skills/issues/62) 用户自定义 Skill 莫名消失
- 🌐 **跨平台兼容**：Windows 下 skill-creator trigger eval 失效（#1383、#1298 双向呼应）

---

## 三、高潜力待合并 Skills（近期可能落地）

按"问题严重度 + 已有关联 Issue 推动力"排序：

| PR | Skill | 阻塞因素 | 落地概率 |
|----|-------|---------|---------|
| [#1742](https://github.com/anthropics/skills/pull/1742) | **mcp-builder mcp≥2 兼容** | 修复 `streamable_http_client` 重命名 + 自定义 headers，与 Issue [#1390](https://github.com/anthropics/skills/issues/1390) eval 失同步推进 | ⭐⭐⭐⭐⭐ |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 退役模型标记** | 文档级修复，影响所有 claude-api 用户 | ⭐⭐⭐⭐⭐ |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 触发评估隔离 + Windows 兼容** | 直接修复 Issue [#1383](https://github.com/anthropics/skills/issues/1383) 六项问题中的关键项 | ⭐⭐⭐⭐ |
| [#1792](https://github.com/anthropics/skills/pull/1792) | **docx LibreOffice 超时验证** | 解决 false-success 报告，影响所有 docx 用户 | ⭐⭐⭐⭐ |
| [#541](https://github.com/anthropics/skills/pull/541) | **docx w:id 书签冲突修复** | 防止文档损坏（高风险修复） | ⭐⭐⭐⭐ |
| [#538](https://github.com/anthropics/skills/pull/538) | **pdf 大小写路径修正** | 极小但卡 case-sensitive 文件系统的实用修复 | ⭐⭐⭐⭐⭐ |
| [#1681](https://github.com/anthropics/skills/pull/1681) | **skill-creator 直接执行 package_skill.py** | 与 [#1298](https://github.com/anthropics/skills/pull/1298) 同源问题，打包修复包 | ⭐⭐⭐⭐ |

---

## 四、Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"Skill 的可信流通与可靠触发"——既要解决第三方 Skill 冒充官方造成的信任危机（Issue #492）、企业级安全共享机制（#228），又要根治 skill-creator 评估链路上 Windows 兼容、0% 触发率、XSS、benchmark 静默失败等基础可靠性问题（#556/#1383/#1394）；这两条主线之外，Web3 审计、AI 测试自动化、文档质量与 Context Window 管理是当前最高价值的 Skill 创新方向。**

---

*报告生成依据：anthropics/skills 仓库 Top-20 PR + Top-15 Issue 公开数据。*

---

# Claude Code 社区动态日报
**日期：2026-09-29**
**数据源：GitHub anthropics/claude-code**

---

## 📌 今日速览

**v2.1.284 发布**，默认模型升级为 **Claude Sonnet 5.5**（1M 上下文、$2/$10 per Mtok），并改进了 Auto Mode 在读取工作目录外文件前的确认交互；但同日即有用户报告该版本在 Linux 下因 sandbox glob 展开器同步遍历 `~/**/…` 的 `denyRead` 模式导致首次回车后 TUI 永久冻结。社区关注度最高的议题集中在 **Auto-Memory 阈值可配置**、**Claude Desktop 与 CLI 之间的 Skills 同步**、**Subagent 自动压缩丢失尾部记录** 以及 **会话历史被默认 30 天静默删除** 这几个长期未解的问题。

---

## 🚀 版本发布

### v2.1.284（24 小时内发布）

**主要变更：**
- **新增 Claude Sonnet 5.5**（`claude-sonnet-5-5`），现已在 API 上作为默认 Sonnet 模型
  - 上下文窗口：**1M tokens**
  - 定价：**$2 / $10 per Mtok**（输入/输出）
  - 缓存读取：**$0.20/Mtok**
- **Auto Mode 增强**：在工作目录外执行读取操作前的回答选项新增 "Yes, but ask again next time"

**已知回退（升级注意）：**
- Linux 环境下启用 `~/**/…` 形式的 denyRead 模式后，首次发送消息即卡死（#98023，回归），可回退至 v2.1.280
- 另有用户报告 v2.1.284 引入的 agents-md 截断读取与 diff 强制着色两项改动体验不佳，已通过 PR #98018 一并回退

---

## 🔥 社区热点 Issues

> 按社区关注度（评论数 + 👍 数）排序，挑选 10 条最值得跟踪的议题。

### 1. [#91188](https://github.com/anthropics/claude-code/issues/91188) — Auto-Memory MEMORY.md 压缩提醒阈值应可调
**分类**：enhancement / memory | **评论 58**
社区呼声最高的需求：当前 MEMORY.md 自动压缩阈值（前 200 行 / 25KB）为硬编码，社区希望可以自行配置或单独禁用。Auto-Memory 是 Claude Code 的核心长期记忆机制，阈值不可控会限制长项目使用。

### 2. [#20697](https://github.com/anthropics/claude-code/issues/20697) — Claude Desktop 与 Claude Code CLI 之间的 Skills 同步（**👍 157**）
**分类**：enhancement / core | **评论 49**
历史最长、获赞最多的特性请求之一：用户在 Desktop 上配置的 Skills 不能在 CLI 中复用，反之亦然。Skills 是 Claude Code 生态扩展的关键载体，跨端同步直接影响开发者工作流。

### 3. [#62476](https://github.com/anthropics/claude-code/issues/62476) — 默认 30 天静默删除会话转录
**分类**：bug / data-loss | **评论 25 / 👍 27**
潜在的数据丢失问题：对话记录被悄悄删除而没有清晰提示或保留选项。对依赖 Claude Code 进行长期项目复盘的开发者而言，这是工作成果被误删的隐患。

### 4. [#70647](https://github.com/anthropics/claude-code/issues/70647) — macOS 原生安装包未签名导致 "damaged and can't be opened"
**分类**：bug / installation / macos | **评论 15**
影响所有 macOS 用户安装体验：原生安装器生成的 `ClaudeCode.app` 缺少 `_CodeSignature/`，Gatekeeper 直接拒绝打开。

### 5. [#93482](https://github.com/anthropics/claude-code/issues/93482) — Cowork `device_commit_files` 报告成功却写入陈旧内容（数据丢失）
**分类**：bug / data-loss / cowork | **评论 15**
严重数据完整性问题：Cowork 的 device_commit_files 在覆盖写入时反馈成功，但磁盘内容落后一个 commit；mtime 又是新的，难以察觉。属于静默数据丢失类 Bug。

### 6. [#57998](https://github.com/anthropics/claude-code/issues/57998) — Windows 下 CLAUDE_DATA_DIR 重定位
**分类**：enhancement / windows / desktop | **评论 15 / 👍 25**
Windows 用户希望能把 `%APPDATA%\Claude\` 重定向到非系统盘或受 OneDrive 同步的目录，便于备份和迁移。

### 7. [#81776](https://github.com/anthropics/claude-code/issues/81776) — `claude --cloud` 始终走 bundle-upload 而非远端 GitHub 绑定
**分类**：core | **评论 8**
即便 `/web-setup` 完成且仓库已绑定 Web UI，CLI 仍只产生 bundle 会话。影响 Claude Code 的 cloud 远程协作能力。

### 8. [#93239](https://github.com/anthropics/claude-code/issues/93239) — Enter 在工作中变成"中断"而非"排队"（回归）
**分类**：bug / windows / desktop / regression | **评论 4**
明确标识为回归，影响所有 Desktop 用户的工作流：用户本想排队下一条指令，结果被解释为中断。

### 9. [#94478](https://github.com/anthropics/claude-code/issues/94478) — Windows 桌面应用每秒 fork ~17 个 git 进程（内核池泄漏 ~6 GB/天）
**分类**：bug / windows / performance | **评论 4**
性能与系统稳定性问题：单窗口桌面应用每秒启动 15–20 个 `git.exe` + `conhost.exe`，在特定 mac/win 边界场景下放大内核泄漏，影响整台机器的可用性。

### 10. [#97665](https://github.com/anthropics/claude-code/issues/97665) — Subagent 自动压缩：保留段尾部记录永远不被写入子代理转录
**分类**：bug / agents / macos | **评论 2**
Subagent 的 compaction 边界指向的"最后一条消息"在磁盘上根本不存在；与 #97316 相关的转录恢复链路在子代理路径上完全失效，会导致上下文重建时丢失关键历史。

---

## 🛠️ 重要 PR 进展

> 仅 6 条 PR 在过去 24 小时内更新，全部值得跟踪。

### 1. [#94847](https://github.com/anthropics/claude-code/pull/94847) — diff: 仅在有文件可列时才打开 diff 面板
**作者**：bcherny | **状态**：OPEN
改进 diff 面板的开启时机：之前是首次 Edit/Write/NotebookEdit 即自动打开并显示 "No tracked changes" 空态。改为在能列出文件后才打开，避免无效的视觉噪音。

### 2. [#98018](https://github.com/anthropics/claude-code/pull/98018) — mods: 回退 agents-md 截断读取与 diff 强制着色两项改动
**作者**：poteat | **状态**：CLOSED
一次性回退 #96363 与 #96364，反映社区对近期两项 mods 体验下降的反馈；mods 行为回归到更早的状态。

### 3. [#96364](https://github.com/anthropics/claude-code/pull/96364) — agents-md: 嵌套 AGENTS.md 的整文件 Read 不再视为"已交付"
**作者**：poteat | **状态**：CLOSED（已被 #98018 回退）
修复原本的整文件 Read 在超过 Read 工具 token 上限被自动分页时、模型仅看到第一页就被认为是"已交付"导致嵌套 AGENTS.md 被反复附带的偏差。

### 4. [#96363](https://github.com/anthropics/claude-code/pull/96363) — diff: 加 `--no-color` 避免强制的 git 着色清空 diff 内容
**作者**：poteat | **状态**：CLOSED（已被 #98018 回退）
当用户的 `color.ui=always` / `color.diff=always` 配置开启时，mod 调用的 `git diff` 内容被 ANSI 转义淹没，导致 hunk 匹配失败；已回退意味着还有副作用。

### 5. [#97952](https://github.com/anthropics/claude-code/pull/97952) — ci: 调用 Claude 的 GitHub Actions 工作流安全加固
**作者**：qing-ant | **状态**：OPEN
针对 `claude-issue-triage.yml`、`claude-dedupe-issues.yml`、`claude.yml` 三个工作流进行加固：
- 引入 **egress-firewall runner**，限制出站流量
- 收紧权限与令牌作用域
- 防止工作流被滥用为渗透 Anthropic API 的跳板

### 6. [#31204](https://github.com/anthropics/claude-code/pull/31204) — 新增 AI Learning Roadmap 交互式画布应用
**作者**：AM-Bear | **状态**：CLOSED
基于 React + Vite 的可视化 AI 学习路径编辑器，节点-边图结构 + 完整 localStorage 持久化。已关闭，未被采纳。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中提炼出社区最关注的五大方向：

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|---------|
| **🧠 长期记忆 / Auto-Memory** | #91188 | 🔥🔥🔥🔥🔥 长期高居榜首 |
| **🖥️ Desktop 与 CLI 生态统一** | #20697、#57998、#96867 | 🔥🔥🔥🔥 跨端体验割裂 |
| **🪟 Windows 体验优化** | #57998、#93239、#94478、#97894 | 🔥🔥🔥🔥 Bug 密集 |
| **⚡ 性能与资源消耗** | #94478（git 进程风暴）、#98023（sandbox glob 卡死） | 🔥🔥🔥 高优先级回归 |
| **🤖 Subagent / Agent 机制** | #93482、#95601、#97665 | 🔥🔥🔥 可靠性与数据完整性 |

**新兴需求**：
- **新模型支持（Sonnet 5.5 / Fable / Opus 5.5）**：定价、用量统计与配额追踪相关问题集中出现（#97997、#91939）
- **Mobile ↔ Desktop 协同**（#96867）：希望从手机端启动 Desktop 会话
- **配置可移植性**（#98051）：用户希望在多台 PC 间迁移 `~/.claude` 时保留完整历史

---

## 💡 开发者关注点

社区反馈中浮现的高频痛点：

### 1. **数据安全与可恢复性是底线问题**
- **30 天静默删除对话转录**（#62476）
- **Cowork 写入陈旧内容**（#93482）
- **Subagent 压缩丢失尾部记录**（#97665）
- **Heatmap 数据因只有 CLI 写 stats-cache 而永久丢失**（#87772）
- **session 索引无法反映已存在的 transcripts**（#97894）

👉 反映出用户对 Claude Code 作为长期工作伙伴的**可追溯性与可恢复性**有极高期待，任何静默数据丢失都会被高度关注。

### 2. **回归问题让升级变成风险**
v2.1.284 发布同日即出现 sandbox glob 卡死（#98023）、Enter 键语义改变（#93239），加上 PR #98018 紧急回退两项 mods 改动，说明近期发版节奏在收紧的同时也引入了更多回归面。

### 3. **平台差异化 Bug 严重失衡**
- Windows：键盘语义变化（#93239）、git 进程风暴（#94478）、session 列表为空（#97894）、Fable 用量误计（#97997）
- macOS：未签名安装包（#70647）、桌面应用每 7–10 分钟冻结（#92785）、隐式自更新导致 Remote Control 断连（#95276）
- Linux：sandbox glob 卡死（#98023）

👉 **Windows 是当前 Bug 密度最高的平台**，而 macOS 上的稳定性问题对"日常主用机"用户伤害最大。

### 4. **新模型的用量统计与定价透明度**
Sonnet 5.5、Opus 5.5、Fable 5.1 上线后，社区出现多起"实际未调用某模型但被计费 / 配额误计"的报告（#97997、#91939）。在多模型并存、按用量计费的场景下，**可解释的用量面板**是付费用户的强需求。

### 5. **Skills / Plugins / MCP 的可发现性与互操作性**
- Skills 在 Desktop 与 CLI 间不同步（#20697）
- Plugin 内置的 MCP server 与 user-scope server 同 URL 时会触发警告（#98035）
- 跨端配置缺乏统一入口

👉 社区期望 Claude Code 把"扩展"当成一等公民，而不是每个表面（CLI / Desktop / Web）各搞一套。

---

*本日报由 GitHub Issues / PR / Releases 数据自动汇总生成，所有链接指向 anthropics/claude-code 仓库。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-09-29**

---

## 1. 今日速览

Codex 今日发布了稳定版 **v0.158.0**，重点改进了 TUI 的复制粘贴体验（支持复制时选中、右键粘贴以及 Markdown 格式保留），并新增了对需要预注册客户端密钥的 MCP 服务认证支持。社区焦点高度集中在 **Windows 桌面端稳定性** 与 **0.157.0 引入的 TUI 复制粘贴回归**——这两类问题占据了 Issues 与 PR 列表的大量位置，相关修复（如 X11 PRIMARY 选择支持、Linux 终端兼容性）已开始陆续合入。

---

## 2. 版本发布

### 🔖 rust-v0.158.0（稳定版）

**TUI 体验升级**
- 新增 `copy-on-select` 与右键粘贴配置，复制选中的对话内容时会保留 Markdown 格式（PR #47639、#47896、#48118）。

**MCP 认证扩展**
- 支持连接需要预注册 OAuth 客户端密钥的 MCP 服务，可通过 `codex mcp add --oauth-client-secret ...` 配置。

> 此外还发布了 `0.160.0-alpha.3`、`0.160.0-alpha.2`、`0.159.0-alpha.13` 三个预发布版本，标志着 0.159/0.160 系列的密集迭代正在进行。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关键说明 |
|---|---|---|
| [#25220](https://github.com/openai/codex/issues/25220) | **Windows EFS 加密 WindowsApps 导致插件不可用** | 影响 Computer Use、Browser、Chrome、LaTeX 等所有内置插件，44 条评论，跨多版本复现，是 Windows 平台最棘手的兼容性问题之一。 |
| [#42739](https://github.com/openai/codex/issues/42739) | **Windows 桌面更新后侧栏本地项目消失** | 36 条评论，更新后 Projects 显示为空，但 Recents 与磁盘文件仍存在，疑似索引或同步逻辑回归。 |
| [#48422](https://github.com/openai/codex/issues/48422) | **Windows shell 子进程控制台窗口闪烁** | 29 条评论 + 31 👍（高赞），每次会话/轮次都会弹出可见控制台窗口，体验干扰严重。 |
| [#13852](https://github.com/openai/codex/issues/13852) | **Supabase MCP OAuth 刷新循环** | 24 条评论，token 在 `initialize` 阶段反复失败，需频繁重认证，反映 MCP OAuth 流程的稳定性问题。 |
| [#48125](https://github.com/openai/codex/issues/48125) | **0.157.0 复制文本失败**（已关闭） | 16 评论 + 17 👍，"我他妈的不能复制" 的爆点反馈，已通过 PR #49112 等修复。 |
| [#47996](https://github.com/openai/codex/issues/47996) | **macOS iTerm2 Cmd+C 不再复制选中文本** | 14 评论 + 17 👍，0.157.0 升级后的关键回归，与 #48125 共同暴露了 TUI 输入处理变更的连锁影响。 |
| [#48466](https://github.com/openai/codex/issues/48466) | **Windows 26.924 冷启动卡在 Loading** | 11 条评论，重启 app-server 才能恢复 UI，疑似 app-server 启动顺序或握手问题。 |
| [#40558](https://github.com/openai/codex/issues/40558) | **macOS Remote iOS 加载桌面线程失败** | 9 评论，由于 "active-writer conflict"，远端线程列表存在但无法加载。 |
| [#36946](https://github.com/openai/codex/issues/36946) | **macOS Remote Control 无法启用** | 8 评论 + 8 👍，Remote Control 在 macOS 端启用失败，影响跨设备协同体验。 |
| [#48602](https://github.com/openai/codex/issues/48602) | **Linux 桌面 26.924.22138 任务卡死** | 8 评论 + 8 👍，回退到 26.915.31945 后恢复，疑似 Debian 包中 app-server 与 desktop 的兼容回归。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 说明 |
|---|---|---|
| [#49112](https://github.com/openai/codex/pull/49112) | **X11 PRIMARY 选择与中键粘贴支持** | 直接回应 #47996 / #48125 等复制粘贴回归：选区发布到 `PRIMARY`，并支持中键粘贴。 |
| [#49147](https://github.com/openai/codex/pull/49147) | **简化云任务 base URL 归一化** | 用 `trim_end_matches('/')` 替换循环逻辑并扩展回归覆盖。 |
| [#49144](https://github.com/openai/codex/pull/49144) | **TUI 中保留服务端推理摘要与 verbosity 设置** | 避免本地默认值覆盖服务端/线程持久化设置。 |
| [#49145](https://github.com/openai/codex/pull/49145) | **在 `/status` 中为服务端连接隐藏推理摘要设置** | 与 #49144 互补，确保 UI 显示与生效值一致。 |
| [#49138](https://github.com/openai/codex/pull/49138) | **向 turn lifecycle 暴露原始错误详情** | 错误钩子可拿到 `CodexErrorDetails`，含 usage-limit reset 与速率限制快照。 |
| [#49135](https://github.com/openai/codex/pull/49135) | **将显式 provider 模型目录视为权威** | 修复 provider 模型目录可能包含过期/不存在模型的问题，严格按前缀+suffix 匹配。 |
| [#49130](https://github.com/openai/codex/pull/49130) | **将内容过滤引导移入 Responses 重试处理器** | 让 `StepContext` 在重试决策前能写入模型相关提示。 |
| [#49127](https://github.com/openai/codex/pull/49127) | **预算前去重 cloud 与 executor 技能列表** | 优先展示模型可见的 cloud 技能，提升预算效率与目录清晰度。 |
| [#49119](https://github.com/openai/codex/pull/49119) | **为内容过滤重试添加恢复引导** | 针对 `content_filter` 拦截增加针对性提示与替代建议。 |
| [#49105](https://github.com/openai/codex/pull/49105) | **重连后恢复 TUI 中未发送输入** | 区分 unsent 与 unconfirmed 消息，重连后自动恢复未发送队列。 |

---

## 5. 功能需求趋势

从近期 Issues 提炼，社区关注的功能方向如下：

1. **TUI/CLI 输入体验完善** —— 复制粘贴跨平台一致（iTerm2、mate-terminal、Warp、X11/中键）、未发送输入恢复（#49105）、会话内清空上下文（#19829，9 👍）、TUI 状态栏的成本/预算指标（#38721）。
2. **远程控制 / 多端协同** —— macOS Remote Control 启用失败（#36946）、iOS 远端线程加载（#40558）、Android 配对循环（#49132）、SSH 密码登录（#44446）。
3. **MCP 与认证生态** —— Supabase OAuth 刷新循环（#13852）、provider auth 存储文档修正（#49118）、OAuth 客户端密钥支持（v0.158.0）。
4. **新模型行为调试** —— GPT-6 Astra / GPT-5.6 Sol 对无害输入拒绝（#43781、#47041），社区期待更可解释的内容过滤提示（#49119、#49130）。
5. **桌面端稳定性** —— Windows/Linux 启动卡死、sandbox 用户初始化（#17458）、In-app Browser 坐标偏移（#48581）、本地定时任务失败（#49142）。
6. **插件与扩展** —— 内置插件在 EFS 加密环境的兼容性（#25220）、manifest 缓存复用（#49099）、HTTP 连接池复用（#49100）。

---

## 6. 开发者关注点（高频痛点）

- **平台碎片化导致体验割裂**：Windows（sandbox、EFS、控制台窗口闪烁、Computer Use、Browser Use 坐标）、macOS（Remote Control、iTerm2 复制）、Linux（Fedora/Debian 桌面回归、mate-terminal 兼容性）各自有阻塞级问题，开发者在不同平台间切换时频繁踩坑。
- **TUI 复制粘贴回归影响面广**：0.157.0 引入的输入处理变更导致 iTerm2、Warp、SSH+Ubuntu、mate-terminal 等多种环境复制异常，社区情绪强烈（"I CANT FUCKING COPY TEXT"），已通过 v0.158.0 + PR #49112 修复，需关注 0.158 是否在所有终端彻底收敛。
- **桌面/CLI 版本耦合问题**：app-server 与 desktop 包版本不匹配时（#48492、#48896），会出现"冷启动卡死"、"renderer root never mounts"等难以诊断的故障，开发者呼吁更清晰的版本契约与降级路径。
- **GPT-6 Astra 的"假阳性"策略拒绝**：无害 prompt 被标记为策略违规（#43781、#47041），影响开发工作流，期待更明确的错误归因（已部分由 #49119、#49130 推进）。
- **MCP OAuth 体验粗糙**：长生命周期服务的 token 刷新机制不稳定（#13852），影响与 Supabase 等外部服务的连续集成。
- **增强诉求集中在"可观测性 + 上下文管理"**：希望在 TUI 内直接看到花费/预算（#38721），并能在不结束会话的前提下清空上下文（#19829，9 👍）。

---

*数据来源：[github.com/openai/codex](https://github.com/openai/codex) · 报告生成于 2026-09-29*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-29**

---

## 📌 今日速览

今日核心动态集中在**子代理（Subagent）系统的稳定性修复**与**认证流程加固**：v0.63.0 nightly 发布修复了由文件争用、headless keyring 与 supervisor 状态丢失引发的认证死循环；同时 Issues 板块中关于子代理错误地报告 GOAL 成功、Generalist Agent 挂死、Browser Agent 失效等 P1 问题持续升温，凸显多代理协同仍是当前最受关注的痛点领域。

---

## 🚀 版本发布

### [v0.63.0-nightly.20260929.gfe6350238](https://github.com/google-gemini/gemini-cli/releases/tag/v0.63.0-nightly.20260929.gfe6350238)

主要变更：
- **[fix(auth)] 防止认证死循环** ([PR #29448](https://github.com/google-gemini/gemini-cli/pull/29448))：修复因文件争用、headless keyring 与 supervisor 状态丢失导致的无限认证循环（[#28341](https://github.com/google-gemini/gemini-cli/issues/28341)）。

完整变更：[Compare Link](https://github.com/google-gemini/gemini-cli/compare/v0.63.0-n...v0.63.0-nightly.20260929.gfe6350238)

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 评论 | 为什么重要 |
|---|-------|--------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 达到 MAX_TURNS 后错误上报为 GOAL 成功 | P1 | 13 | 隐蔽性极强的可靠性 bug，子代理未真正完成分析就报告成功，掩盖了中断事实，影响调试与结果可信度 |
| 2 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 利用模型 Bash 亲和力：零依赖 OS 沙箱与执行后意图路由 | P2 | 9 | 高赞大型 enhancement，契合 Gemini 3 原生 POSIX 工具链训练，可显著提升安全性与 UX |
| 3 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist Agent 挂死 | P1 | 8 (👍8) | 高赞 P1 bug，Generalist Agent 子任务委派后无限挂起，连简单建文件夹都失败，社区影响面广 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取、搜索与映射的影响评估 | P2 | 7 | Epic 级议题，围绕精确方法边界读取、降低 turn 与 token 噪声，是效率优化的重要方向 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动调用 skills 与 sub-agents | P2 | 6 | 模型在自定义 skills/sub-agents 上的"惰性"使用问题，限制了用户扩展能力的实际发挥 |
| 6 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) Browser Agent 忽略 settings.json 覆盖（如 maxTurns） | P2 | 4 | 配置优先级 bug，导致 AgentRegistry 读取与运行时行为不一致，用户难以约束 Browser Agent |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | P1 | 4 | P1 兼容性问题，Wayland 用户无法正常使用 Browser subagent，终止原因误报 GOAL |
| 8 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) 工具数 >128 触发 400 错误 | P2 | 3 | 规模化使用门槛问题，大量自定义工具时直接 API 失败，需智能工具裁剪机制 |
| 9 | [#22186](https://github.com/google-gemini/gemini-cli/issues/22186) get-shit-done output hook 导致崩溃 | P1 | 3 | P1 稳定性 bug，特定 hook 工作流末期崩溃，影响社区热门扩展 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应停止/抑制破坏性操作 | P2 | 3 | 安全与体验议题，模型偶发使用 `git reset --force` 等危险命令，需引导更安全的替代方案 |

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|----|------|------|
| 1 | [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) **fix(auth): 防止认证死循环** | 已合并发布 | 修复文件争用、headless keyring 与 supervisor 状态丢失引发的无限认证循环（随 v0.63.0-nightly 发布） |
| 2 | [#29333](https://github.com/google-gemini/gemini-cli/pull/29333) **fix(core): 校验约定路径的策略目录权限** | CLOSED | `filterSecurePolicyDirectories` 原本只校验系统目录，现扩展到用户/工作区目录 |
| 3 | [#29336](https://github.com/google-gemini/gemini-cli/pull/29336) **fix(core): 加固非系统策略目录写权限** | CLOSED | 修复 [#29311](https://github.com/google-gemini/gemini-cli/issues/29311)，POSIX/Windows 下支持当前用户所有权校验 |
| 4 | [#29328](https://github.com/google-gemini/gemini-cli/pull/29328) **fix(a2a-server): 尊重 LOG_LEVEL 并脱敏凭据** | CLOSED | a2a-server 日志硬编码 `level: 'info'`、未脱敏敏感凭据的两项安全修复 |
| 5 | [#29332](https://github.com/google-gemini/gemini-cli/pull/29332) **fix(core): 限制单次调用扩展沙箱的次数** | CLOSED | 修复沙箱递归导致的栈溢出（heap OOM）致命错误 |
| 6 | [#29327](https://github.com/google-gemini/gemini-cli/pull/29327) **fix(sdk): 真正生效 AgentShellOptions 的 env 与 timeoutSeconds** | CLOSED | `SdkAgentShell.exec` 此前完全忽略 env 与超时字段，`sleep 30` 配 `timeoutSeconds:1` 仍会等待 30 秒 |
| 7 | [#29436](https://github.com/google-gemini/gemini-cli/pull/29436) **fix(cli): 修复引号中 `@` 导致的 100% CPU 挂起** | OPEN | stdin/粘贴内容包含 `"@scope/pkg"` 时，`AT_COMMAND_PATH_REGEX_SOURCE` 反复匹配导致 CPU 满载 |
| 8 | [#29440](https://github.com/google-gemini/gemini-cli/pull/29440) **fix(core): web-fetch 引用采用 UTF-8 偏移** | OPEN | 非 ASCII（中文、emoji）响应的引用错位，与 web-search 逻辑对齐 |
| 9 | [#29435](https://github.com/google-gemini/gemini-cli/pull/29435) **fix(cli,core): 防止会话退出时的进程挂起** | OPEN | 修复 stdin 未 pause/unref、MCP transport 未关闭导致的 Node 事件循环不退出 |
| 10 | [#29546](https://github.com/google-gemini/gemini-cli/pull/29546) **feat(cli): 非交互模式支持 `/skill-name` 激活** | OPEN | 在非交互 slash 命令路径注册 `SkillCommandLoader`，使 `/skill-name` 在 CI/脚本场景中可激活 skills |

> 同期还修复了 `piped-stdin` 500ms 超时静默吞输入 ([#29329](https://github.com/google-gemini/gemini-cli/pull/29329))、嵌套 `.gitignore` 末尾斜杠的锚定错误 ([#29324](https://github.com/google-gemini/gemini-cli/pull/29324))、`maxChars<=0` 反向扩容 ([#29542](https://github.com/google-gemini/gemini-cli/pull/29542))，以及依赖升级 `ip-address 10.2.0 → 10.7.2`（[CVE 修复](https://github.com/google-gemini/gemini-cli/pull/29543)）。

---

## 📈 功能需求趋势

从 Issues 数据提炼出的社区关注焦点：

1. **子代理（Subagent）体系成熟化** — 占比最高的话题，包括发现机制（settings.json、symlink 支持）、并行协作（[#18287](https://github.com/google-gemini/gemini-cli/issues/18287)）、轨迹可观测性（`/chat share` [#22598](https://github.com/google-gemini/gemini-cli/issues/22598)）、可靠性恢复（MAX_TURNS [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）以及 Local Subagent Sprint 迭代。
2. **效率与上下文治理** — AST 感知读取/搜索（[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#22747](https://github.com/google-gemini/gemini-cli/issues/22747)）、Tactful Extraction 外科手术式读取（[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)）、用持久文件任务跟踪替换 WriteToDo（[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)）。
3. **平台与安全加固** — 零依赖 OS 沙箱（[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)）、限制危险命令、工作区策略文件（[#18397](https://github.com/google-gemini/gemini-cli/issues/18397)）、终端 resize 无闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）。
4. **Browser Agent 稳健性** — settings.json 优先级（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、会话接管与锁恢复（[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)）、Wayland 兼容（[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)）。
5. **工具与模型协同** — 工具规模上限（>128 即 400，[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）、Agent 自我认知（CLI flags/hotkeys 自描述，[#21432](https://github.com/google-gemini/gemini-cli/issues/21432)）。
6. **评估体系** — 内部 eval 稳定性与可观测性（[#23166](https://github.com/google-gemini/gemini-cli/issues/23166)）、steering eval 修复（[#23313](https://github.com/google-gemini/gemini-cli/issues/23313)）。

---

## 💬 开发者关注点

1. **挂死与资源泄漏是头号痛点** — `#21409` Generalist Agent 挂死、`#22186` get-shit-done 末期崩溃、`#29435` 会话退出挂起、`#29436` `@` 引号导致的 100% CPU 占据大量反馈；开发者期望 CLI 在所有场景下都能干净退出。
2. **子代理行为"语义正确性"缺失** — 开发者反复报告模型在 MAX_TURNS、错误中断、状态报告上给出"GOAL success"等错误信号（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21983](https://github.com/google-gemini/gemini-cli/issues/21983)），期望更精细的 Termination Reason 区分与可观测性。
3. **配置与扩展机制的"最后一公里"问题** — symlink 不识别（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）、settings.json 不生效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、skills/sub-agents 不会自动启用（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），提示 AgentRegistry 与发现层需要更明确的优先级与默认行为。
4. **Workspace 卫生** — [#23571](https://github.com/google-gemini/gemini-cli/issues/23571) 指出模型在被限制 shell 时仍会在随机位置写 tmp 脚本，开发者呼吁模型收敛写文件路径或将其集中到 `.gemini/` 沙箱目录。
5. **安全与凭据治理** — a2a-server 日志硬编码 `level:'info'` 且未脱敏凭据（[#29328](https://github.com/google-gemini/gemini-cli/pull/29328)）、策略目录权限校验不全（[#29333](https://github.com/google-gemini/gemini-cli/pull/29333)、[#29336](https://github.com/google-gemini/gemini-cli/pull/29336)），强调企业场景下需要更严格的默认安全姿态。
6. **V1→V2 配置迁移** — [#29450](https://github.com/google-gemini/gemini-cli/pull/29450) 在 a2a-server 引入层次化 V2 schema 并保留 V1 兼容，体现项目正在向更结构化的配置体系演进，开发者需要关注迁移窗口期的兼容性风险。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成于 2026-09-29*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-29**

---

## 📌 今日速览

Copilot CLI 在过去 24 小时内进入高频迭代节奏，**连续发布 5 个版本（v1.0.89 系列与 v1.0.90 预发布版）**，重点修复 OAuth 令牌缓存、PR 模板支持、Claude Code 规则文件加载等问题。与此同时，社区集中爆发的反馈集中在 **认证/Token 刷新失效** 与 **MCP OAuth 流程** 两大主题，单日有 6 个相关 Issue 被关闭或更新，提示这两个方向是当前团队的核心修复重点。

---

## 🚀 版本发布

### v1.0.90-1（最新预发布）
- **修复**：MCP OAuth 登录（如 Datadog）正确复用仍处于有效期的缓存 Token
- **修复**：Session resume 后，已撤回的运行中提示词不再恢复

### v1.0.90-0
- 综合修复与小变更

### v1.0.89（2026-09-28 正式版）
- 左键点击 `ask_user` / elicitation 表单输入框时，光标定位到点击位置
- 新增对 `.claude/rules` 中 Claude Code 规则文件作为自定义指令的支持
- 侧边栏中已完成但未打开的 Session 显示蓝色圆点提示

### v1.0.89-7
- 修复与小变更

### v1.0.89-6
**改进**
- PR 创建现在遵循仓库 PR 模板，保留必需章节与 checklist 结构
- 可通过 `TGREP_FILE_COUNT_THRESHOLD` 配置自动索引搜索的激活阈值

**修复**
- Shell 输出不再显示多余的命令补全元数据
- Timeline 相关问题修复（详情截断）

---

## 🔥 社区热点 Issues

> 以下按评论数与点赞数综合排序，反映社区关注度。

### 1. [#1274](https://github.com/github/copilot-cli/issues/1274) CLI 频繁返回 400 错误（29 评论 · 12 👍）
执行代码评审时约 95% 请求触发 invalid request body 错误，疑似服务端校验或 CLI 请求构造问题。**评论数最多、长期未关闭** 的 issue，反映基础稳定性痛点。

### 2. [#4929](https://github.com/github/copilot-cli/issues/4929) 进程内 Auth Token 停止刷新（13 评论）
长时间运行的 Copilot CLI 进程会永久丢失认证，所有 prompt 与 `/ask` 立即报错；`/login` 无效，必须重启并恢复 Session。与 #4971 同一根因，属于 P0 级可靠性问题。

### 3. [#3392](https://github.com/github/copilot-cli/issues/3392) NixOS 上 Bash 工具失效（5 评论 · 13 👍 · ✅ 已关闭）
v1.0.49+ 在 NixOS 触发 `Failed to start bash process`。点赞数高说明对 Linux 发行版用户影响面大，本次可能被某个 patch 关闭。

### 4. [#1838](https://github.com/github/copilot-cli/issues/1838) Nix/direnv 环境下 I/O 死锁挂起（7 评论 · 12 👍 · ✅ 已关闭）
在 direnv 管理的 Nix flake 项目中，bash 工具无限挂起直至超时。已关闭，可能随 Bash 工具的整体修复一并解决。

### 5. [#2958](https://github.com/github/copilot-cli/issues/2958) Plan 模式 vs Autopilot 模式独立默认模型（5 评论 · 16 👍 · ✅ 已关闭）
**点赞数最高的特性请求**，希望按交互模式配置默认模型，社区认可度高，本次关闭预示该能力正在/已经实现。

### 6. [#1250](https://github.com/github/copilot-cli/issues/1250) Windows 下 `copilot` 命令静默失败（5 评论 · 4 👍 · ✅ 已关闭）
Windows 11 上 `getCACertificates('system')` 报错且不输出任何信息，诊断困难。Windows 平台兼容性的长期痛点。

### 7. [#4971](https://github.com/github/copilot-cli/issues/4971) 每小时触发 Authorization 错误（3 评论）
与 #4929 症状高度相似，提示 **Token 轮换/刷新机制存在系统性缺陷**，需团队在更高层面修复。

### 8. [#4606](https://github.com/github/copilot-cli/issues/4606) Google Workspace MCP OAuth 失败（3 评论）
原生 HTTP MCP 认证在 Google 官方 Workspace MCP 端点上失败，issuer 末尾斜杠不匹配。OAuth 兼容性问题典型案例。

### 9. [#4968](https://github.com/github/copilot-cli/issues/4968) OAuth redirect URI 端口不匹配（2 评论）
CLI 发布的 CIMD 文档声明固定 loopback 端口，但运行时绑定临时端口，导致大多数 MCP 服务器登录失败。**架构层问题**，影响范围广。

### 10. [#4972](https://github.com/github/copilot-cli/issues/4972) Windows：MCP worker 进程在退出时未终止（3 评论）
通过包装器启动 MCP 时，session 退出后子进程残留在系统中。Windows 平台进程管理问题，影响系统整洁度。

---

## 🔧 重要 PR 进展

**过去 24 小时内无 PR 更新。**

这与近 5 个版本的高频发布形成反差，可能意味着：
- 当前迭代周期已完成合入，处于下个周期的规划阶段；
- 大量修复直接走内部预发布通道（v1.0.89-6/7、v1.0.90-0/1），未走 PR 流程。

---

## 📈 功能需求趋势

从当日活跃 Issue 中提炼，社区关注度集中在以下方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|---------|
| **MCP OAuth 与认证** | #4968、#4606、#4985、#4983、#4929、#4971 | 🔥 **最高优先级**，单日 6+ 相关 Issue，覆盖 CIMD、issuer 校验、Token 刷新等子方向 |
| **多模型与模式配置** | #2958、#3070 | 模型选择粒度需求提升，按模式（plan/autopilot）独立配置是热门特性 |
| **平台兼容性（NixOS / Windows）** | #3392、#1838、#1250、#4972、#2997 | Windows 与非主流 Linux 发行版用户体验仍是短板 |
| **UI/渲染细节** | #2216、#1936、#1726、#3014 | 暗色主题对比度、Markdown 渲染精度、状态栏刷新等细节问题 |
| **Agent 工作流稳定性** | #3322、#3042、#3434、#2258 | Plan 模式后行为、Permission 双重确认、Session 恢复一致性 |
| **安全合规** | #4442（adm-zip CVE）、#3602（SDK 改 env） | 供应链安全与进程隔离持续受关注 |

---

## 💬 开发者关注点

通过 30 个高互动 Issue 的痛点归纳：

### 1. 认证体系脆弱，Token 刷新链路存在系统性缺陷
最突出的高频反馈。`#4929`、`#4971`、`#4968`、`#4606` 都指向 OAuth/Token 处理的不同环节，且互不重叠，说明问题点分散而非单一 bug。**开发者期望**：长进程下认证稳定、OAuth 流程对主流服务（Google、Datadog、Miro 等）开箱即用。

### 2. MCP 生态进入"质量打磨期"
新版本（MCP）相关 Issue 已从"连不上"过渡到"OAuth 不通过、redirect URI 错配、stdio secret 占位符不传递、worker 进程泄漏"等深水区问题。**开发者期望**：MCP 接入流程透明、跨平台行为一致、敏感凭据正确传递。

### 3. 平台一致性体验不足
NixOS、direnv、Windows、VS Code 集成终端各自存在不同的卡点。**开发者期望**：减少"在我的机器上能跑"的场景，至少在报错时给出可诊断信息（Windows 静默退出尤其被诟病）。

### 4. 模式化配置诉求强烈
`#2958`（点赞 16）与 `#3070` 都指向按场景/模式定制模型与行为，反映 Copilot CLI 已从单一交互工具演进为 **多模式 IDE-like 客户端**，需要更细粒度的配置粒度。

### 5. Agent 输出细节需要"对齐开发者意图"
如 `#4986`（忽略 no-em-dash 指令）、`#3322`（plan 模式后 system message 自相矛盾），开发者越来越关心 **指令遵循度** 与 **行为可预测性**，这是从"能用"走向"可靠"的关键信号。

---

*报告基于 2026-09-28 至 2026-09-29 的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-29

## 1. 今日速览

OpenCode 发布 v1.18.33，重点修复 Cloudflare AI Gateway 超时、MCP 浏览器启动检测、调试日志凭据脱敏及 Gemini 思考内容处理。社区方面，开发者反馈集中在**多 Provider 集成稳定性**（NVIDIA、Gemini、xAI、DeepSeek）和 **TUI/Desktop UI 体验**（背景标签页权限、移动端侧边栏、键位冲突）两大方向。同时，"Plugin 不可达的 Session 能力"和"Human-in-the-Loop 分级权限"两项架构级 Feature Request 持续推进。

---

## 2. 版本发布

### v1.18.33（今日发布）

**Core Bugfixes**
- **Cloudflare AI Gateway 超时对齐**：模型响应与流式传输现在正确遵守 provider 响应与流超时（@danlapid）
- **MCP 浏览器启动失败可观测**：启动器立即退出时，失败信息会被正确上报
- **调试配置输出脱敏**：凭据与敏感请求头在 debug 输出中自动脱敏
- **Gemini 思考内容**：相关修复已合并（详情被截断，建议查看 [Release Notes](https://github.com/anomalyco/opencode/releases/tag/v1.18.33)）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 关键点 |
|---|---|---|---|---|
| [#39653](https://github.com/anomalyco/opencode/issues/39653) | GPT-5.6 Sol 服务端过载错误 | CLOSED | 17 / 👍11 | **今日最高热度**。用户持续遭遇 `server overloaded` 错误，Pi 与 Codex 模型不受影响，已关闭表明已修复或被分流转到其他渠道 |
| [#49389](https://github.com/anomalyco/opencode/issues/49389) | 5 项 Session 能力在 Plugin 中不可达 | OPEN | 7 / 👍4 | **架构级 Feature**。作者列举出 5 个核心功能（只读枚举、隐藏/临时会话、工具上下文等），Plugin 无法访问，影响生态扩展 |
| [#39256](https://github.com/anomalyco/opencode/issues/39256) | `variants` 子配置命名规范澄清 | CLOSED | 6 | 文档长期缺失 camelCase/snake_case 规范，今日关闭（PR #51983 在跟进翻译侧） |
| [#38655](https://github.com/anomalyco/opencode/issues/38655) | 更新后无法切换 plan/build 模式 | CLOSED | 6 | 影响 1.18.x 多版本用户的回归问题，build 模式被强制默认 |
| [#37762](https://github.com/anomalyco/opencode/issues/37762) | Ollama Responses 响应异常 | CLOSED | 9 | Windows 11 + Ollama + OpenCode Desktop 组合下的 Responses API 失效，已关闭 |
| [#51759](https://github.com/anomalyco/opencode/issues/51759) | 项目标签 + 按项目分组 Session | OPEN | 5 | 新标签页 UI 下，跨项目会话混在扁平栏内，用户期望按项目分组 |
| [#39527](https://github.com/anomalyco/opencode/issues/39527) | 响应时间从秒级退化到 10 分钟 | CLOSED | 5 | 用户描述 "ask 'hi' 等 10 分钟才回复"，覆盖重装仍无效 |
| [#44007](https://github.com/anomalyco/opencode/issues/44007) | TUI `--auto` 在后台标签权限请求时卡住 | OPEN | 4 | 后台 tab 需切到前台才能继续，PR #44009 正在合并修复 |
| [#39771](https://github.com/anomalyco/opencode/issues/39771) | 网络错误应快速失败并精简输出 | CLOSED | 4 | 国内用户场景：GitHub HTTPS 阻塞、SSH 通畅；默认 60–120s 超时过长 |
| [#37666](https://github.com/anomalyco/opencode/issues/37666) | NVIDIA GLM-5.2 HTTP 429 错误 | CLOSED | 4 | NVIDIA API Router 中 GLM-5.2 返回 429，直连 OK——典型的代理路由限流问题 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|---|---|
| [#44009](https://github.com/anomalyco/opencode/pull/44009) | `fix(tui): auto-approve background tab permissions` | 关闭 #44007。将自动审批响应器从当前会话路由迁移到 tab 上下文，--auto 模式下后台标签不再卡死 |
| [#51981](https://github.com/anomalyco/opencode/pull/51981) | `fix(ai): enable explicit caching on more message protocol routes` | Alibaba、Cloudflare AI Gateway、Meta、MiniMax、Moonshot、ZAI Coding Plan 六条 Messages 路由启用默认缓存策略 |
| [#51996](https://github.com/anomalyco/opencode/pull/51996) | `perf(core): speed up and harden snapshot capture` | 一次性联动 5 个相关 Issue（#44511、#36093、#42237、#48848、#43390）的快照捕获性能/健壮性优化 |
| [#51959](https://github.com/anomalyco/opencode/pull/51959) | `fix(ai): bind Bedrock Claude thinking blocks by default` | Claude 5.1+ 将 thinking 签名绑定到 system/tools/messages；Bedrock 路由对齐 Anthropic 的 `block_binding` 行为 |
| [#50798](https://github.com/anomalyco/opencode/pull/50798) | `feat(tui): show effective subagent model and variant in v2 tab` | v2 子代理标签显示子会话实际使用的模型与推理变体，提升多代理可观测性 |
| [#51989](https://github.com/anomalyco/opencode/pull/51989) | `fix(ui): render $..$ and same-line $$..$$ math` | 关闭 #51725。#34850 之后被遗弃的内联数学渲染恢复，并保留对货币符号的反误判能力 |
| [#51979](https://github.com/anomalyco/opencode/pull/51979) | `fix(opencode): share concurrent MCP OAuth refreshes with a single-flight fetch` | 远程 MCP 轮换 refresh token 时的并发刷新合并为 single-flight，避免 burst 失败 |
| [#50283](https://github.com/anomalyco/opencode/pull/50283) | `fix(core): expose model reasoning capability` | 修复 models.dev `reasoning` 标志被丢弃、app mapper 硬编码 `false` 的问题，模型能力正确曝光 |
| [#51978](https://github.com/anomalyco/opencode/pull/51978) | `fix(ai): show provider error bodies when no message field is recognized` | 修复 provider 返回无 `error.message`/`message` 字段时只显示 `HTTP N` 的体验缺陷 |
| [#51967](https://github.com/anomalyco/opencode/pull/51967) | `feat(permission): add human-in-the-loop confirmation levels` | **已合并**。Fase 7 HITL：5 级确认（`AUTO/SAFE/BALANCED/STRICT/CUSTOM`），作为权限系统之上的附加层 |

---

## 5. 功能需求趋势

从 50 条 Issues 中提炼出的社区关注焦点：

### 🔌 Provider 生态与稳定性（最高频）
- **NVIDIA Router 限流**：GLM-5.2 等模型在 OpenCode 内被限流但直连正常
- **Gemini 多版本差异**：`gemini-3.6-flash` 上游失败而 `3.5-flash` 正常
- **xAI Responses 路径变更**：#51964/#51976/#51977 一组 PR 正在重新梳理 Responses 变体
- **DeepSeek 提前放弃**：社区反复报"asks something then gives up"
- **Bedrock Claude thinking block 绑定**：Claude 5.1+ 模型升级带来的协议侧需求

### 🖥️ Desktop / TUI UI 体验
- **Tab 架构演进**：项目标签 (#51759)、后台 tab 权限 (#44007)、多 tab 拖拽区不足 (#41646)
- **移动端适配**：窄屏下侧边栏未关闭 (#37746)
- **快捷键冲突**：Windows 下 `Win+A` 被 OS 抢占 (#38585)、新布局下 `mod+shift+w/mod+o` 失效 (#39785)
- **主题跟随**：终端主题切换后需重启才能跟随 (#38506)

### 🔐 权限与 Human-in-the-Loop
- **Phase 7 HITL 分级**：5 级确认策略 + 9 维自定义 (#51966/#51967 已合并)
- **Policy 与 Free Tier 冲突**：自定义 agent 上 `deny shell *` 反触发 "only used from within OpenCode" (#50627)

### 🧠 模型能力与缓存
- **Reasoning 能力曝光**：`models.dev reasoning` 标志被丢弃 (#50283 已修复)
- **多路由显式缓存**：6 条消息协议开启缓存 (#51981)
- **GLM-5.2 缓存行为不稳定**：session 标识缺失 (#37598)
- **图片上下文爆炸**：浏览器自动化场景下图片累积触发 413 (#48095)

### 🧩 Plugin 可达性
- **5 项 Session 核心能力对 Plugin 不可达** (#49389)：写侧枚举、隐藏会话、工具上下文等

### 📚 文档与本地化
- **`variants` 命名规范**：camelCase vs snake_case 长期不明 (#39256/#51987)
- **i18n 术语对齐**：zh/zht 翻译错误 (#51983)

### 🛠️ 可靠性
- **doom_loop 检测漏洞**：跨步骤的重复调用未触发 (#51965)
- **long-running shell 阻塞会话** (#39769)
- **网络超时过长 + 无快速失败** (#39771)
- **MCP OAuth 并发刷新竞态** (#51979 已修)
- **macOS 客户端 ENETUNREACH** (#39316)

---

## 6. 开发者关注点（高频痛点）

1. **Provider 路由是"黑盒"**：同一个模型在 OpenCode 内失败但直连 OK，说明错误体未透传（已被 #51978 修复），且路由 ID 命名混乱（已被 #51976 修复）
2. **Free Tier 触发条件反人类**：自定义 agent 拒绝 shell 反被误判"非 OpenCode 内调用"（#50627）
3. **跨平台体验割裂**：Windows 键位被 OS 抢占、移动端侧边栏未关闭、macOS LAN ENETUNREACH
4. **Plugin 扩展边界模糊**：核心能力未暴露给 Plugin，作者 ualtinok 列出 5 项缺失
5. **HITL 与现有权限系统耦合**：Phase 7 设计为附加层，需避免双系统互斥
6. **多代理可观测性不足**：子代理实际模型/变体未在 UI 暴露（已被 #50798 修复）
7. **Image / 上下文爆炸**：浏览器自动化场景下图片上下文被截断的不稳定行为（已被 #51986 修复）
8. **会话级 bug 难以诊断**：doom_loop 检测不到跨步骤重复调用，依赖堆栈读取模型不全

---

> 📊 **日报数据源**：github.com/anomalyco/opencode（过去 24 小时 50 Issues + 50 PRs）

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-29

> 数据来源：GitHub `earendil-works/pi` 仓库；统计窗口：过去 24 小时

---

## 1. 今日速览

今日社区热度集中在 **reasoning 模型与多 provider 兼容性**：推理模型在上下文上限时被永久卡死（#9409）、Anthropic 工具调用中的非 ASCII 编码被静默损坏（#10074）等问题持续发酵；与此同时，**Codemode / MCP 集成**（#10040）与 **llama.cpp 管理模式**（#10122）两大特性 PR 进入评审，是本周最具影响力的功能演进。版本侧今日无新 release。

---

## 2. 版本发布

**无新版本发布。**（过去 24 小时未发布任何 release）

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 重要原因 |
|---|---|---|---|---|
| [#10031](https://github.com/earendil-works/pi/issues/10031) | 用 ESC 停止 thinking 后偶发卡在 "Working..." | OPEN | 17 | **本周讨论量第一**，跨平台复现，自 v0.84.0 起出现，影响核心交互体验，需 `Ctrl+C` + `pi -c` 才能恢复。 |
| [#9508](https://github.com/earendil-works/pi/issues/9508) | pi-ai 向 OpenAI 兼容 provider 发送 OpenAI 专用字段/角色/auth | OPEN | 8 | 直接导致多个第三方兼容端点返回 400/422，生态兼容性问题，影响所有自托管/代理用户。 |
| [#3159](https://github.com/earendil-works/pi/issues/3159) | edit 工具超时被 terminated（Qwen 27b） | CLOSED | 9 | 高讨论度，反映出模型规模上升后 edit 工具超时阈值不足的普遍问题。 |
| [#10033](https://github.com/earendil-works/pi/issues/10033) | 自动 compaction 把全部 thinking 文本塞入摘要提示词，超出上下文 | CLOSED | 7 | DeepSeek V4.1 等推理模型上 compaction 永远失败，是上下文管理的关键缺陷。 |
| [#9974](https://github.com/earendil-works/pi/issues/9974) | llama.cpp 返回的 Responses API 工具调用被错误去重/破坏 | CLOSED | 6 | 直接影响 llama.cpp 本地推理用户的工具使用正确性。 |
| [#9905](https://github.com/earendil-works/pi/issues/9905) | Anthropic 上 `thinking.display` 始终硬编码为 "summarized" | CLOSED | 6 | 用户无法控制或省略该字段，且类型定义也不允许 `omitted`。 |
| [#9409](https://github.com/earendil-works/pi/issues/9409) | 推理模型在上下文上限处永久 wedge（auto-compaction 救不回） | OPEN | 4 | 持续输出 `length` + `output:16`，compaction 报 "Truncated response recovery failed"，会话被永久冻死。 |
| [#10074](https://github.com/earendil-works/pi/issues/10074) | Claude 编辑模型工具参数中非 ASCII（韩文等）被破坏为控制字符 | OPEN | 4 | **存在静默文件损坏风险**，已持续约 3 周，触发大量重试。 |
| [#10077](https://github.com/earendil-works/pi/issues/10077) | llama.cpp 模型的 contextWindow 被重置为 128000 | OPEN | 3 | presets.ini 中的 ctx-size 不被尊重，影响 llama.cpp 用户预期的上下文配置。 |
| [#10072](https://github.com/earendil-works/pi/issues/10072) | built-in-tool-renderer 示例意外删除系统提示中的工具列表 | OPEN | 2 | 官方示例影响模型行为（移除系统提示中工具字段），[inprogress] 标记说明正在修复。 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 说明 |
|---|---|---|---|
| [#10040](https://github.com/earendil-works/pi/pull/10040) | **feat: Codemode + MCP** | OPEN | **本期最重大的架构演进**：新增 `packages/codemode`，在 QuickJS WASM worker 中执行模型生成的 JS，调用 pi 工具、支持 session store 与模型目录查询。 |
| [#10122](https://github.com/earendil-works/pi/pull/10122) | **feat: 受管 llama.cpp server 模式** | OPEN | `/login llama.cpp` 现在可让 pi 自启 llama-server；detached 进程监督随机端口+API key，按 pi 进程引用计数启停。 |
| [#9714](https://github.com/earendil-works/pi/pull/9714) | feat: Azure Foundry Chat Completions deployments 支持 | OPEN | 修复 Azure 仅实现 Responses API 的问题，让 DeepSeek V4 Pro 等 Foundry 部署可用。 |
| [#9993](https://github.com/earendil-works/pi/pull/9993) | feat: Vertex AI provider 增加 Anthropic Claude 支持 | CLOSED | 让 Google Cloud ADC/API Key 用户也能在 Vertex AI Model Garden 用 Claude Opus/Sonnet/Haiku。 |
| [#10142](https://github.com/earendil-works/pi/pull/10142) | fix: 把 reasoning effort 发送给 Bedrock Converse 上的 OpenAI 模型 | OPEN | 修复 Bedrock 上 OpenAI 模型始终跑在 `medium` 的问题（closes #9331）。 |
| [#10146](https://github.com/earendil-works/pi/pull/10146) | fix: 编辑器恢复时保留粘贴文本 | OPEN | 解决 0.87.1 上大粘贴块在恢复时被替换为 `[paste #x +y lines]` 字面量。 |
| [#10136](https://github.com/earendil-works/pi/pull/10136) | fix: macOS 粘贴 Finder 文件路径而非图标 | CLOSED | Ctrl+V 现在粘贴真实路径而非 1024×1024 Finder 图标（closes #9999）。 |
| [#10135](https://github.com/earendil-works/pi/pull/10135) | fix: 归一化 compaction usage，防止恢复时 footer 崩溃 | CLOSED | compaction writer 直接写入 `summaryUsage` 导致恢复挂掉的回归修复。 |
| [#10134](https://github.com/earendil-works/pi/pull/10134) | fix: 在 built-in-tool-renderer 示例中保留工具提示字段 | CLOSED | 对应 #10072 的修复：示例仅保留 `description/parameters/execute`，现补回缺失的工具字段。 |
| [#10123](https://github.com/earendil-works/pi/pull/10123) | feat: 给远程 responder 提供类型化 TUI 弹窗 | CLOSED | `select/confirm/input/editor` 弹窗先发给远端，5 分钟超时，回退到本地 TUI。 |
| [#10113](https://github.com/earendil-works/pi/pull/10113) | 智能保留 shell tail 截断中有用的行 | CLOSED | bash/PowerShell tail 截断时，若保存文件 ≤120k 字符且设置了 `SUPERCOMPRESS_API_KEY`，则压缩后保留相关行。 |

---

## 5. 功能需求趋势

从今日 50 条 Issue 与 13 条 PR 中提炼出的社区关注方向：

- **🧠 推理模型（Reasoning models）治理**：上下文上限 wedge、thinking 文本膨胀、自动 compaction 失败、思考预算控制成为最集中议题（#9409, #10033, #9905, #10137, #10142）。
- **🔌 Provider 兼容性扩张**：Azure Foundry Chat Completions、Vertex AI Claude、Bedrock OpenAI 推理、OpenAI-compatible 清理、llama.cpp 受管模式（#9714, #9993, #10142, #9508, #10122）。
- **🛠️ 扩展系统成熟化**：类型化 TUI 弹窗、authContext 透传、virtual model 注册、Codemode/MCP 接入（#10123, #10112, #10040, PR #10035 已关闭）。
- **🖥️ TUI/终端稳定性**：Kitty keyboard 协议在 SSH/退出时的转义序列泄漏、SGR 鼠标序列拆分、macOS + tmux 帧

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-29

## 1. 今日速览

今天是 Managed Agent 双引擎架构的关键一天。社区主线持续围绕 Hosted Shell 远程结果交付、Runtime Broker 整数精度与 Context 安装校验、Code Mode 并发执行展开密集修复；同时 Auto Memory 结构化召回进入 main 分支上线前的收尾阶段。`qwen serve` 的后台 agent 暴露与 Web Shell 轨迹检视面板等"可观测性"能力也在本周加速落地。

---

## 2. 版本发布

过去 24 小时无新版本。值得注意的是 #12880 中提到的 v0.24.6-nightly.20260927 发布曾因 `integration_none` 任务失败而中断，CI 已在后续版本恢复。

---

## 3. 社区热点 Issues

按评论数与影响力筛选 10 条最值得关注：

| # | Issue | 关注理由 |
|---|---|---|
| [#12380](https://github.com/QwenLM/qwen-code/issues/12380) | Managed Agent 双路径架构提案 | 37 评论，是当前架构演进的"母舰"Issue，决定 Legacy + Managed 共存策略，Stage D/E 全部挂载其下。 |
| [#12416](https://github.com/QwenLM/qwen-code/issues/12416) | Remote-SSH POST /session `EPIPE` 崩溃（P1） | 17 评论，直接阻断 VS Code Remote-SSH + Companion 0.24.2 用户新建会话，影响面大。 |
| [#12737](https://github.com/QwenLM/qwen-code/issues/12737) | Stage B 双引擎 Host 集成 | 13 评论，调度决策明确——本地 `qwen serve` Managed 推迟到 Hosted 切片之后。 |
| [#12028](https://github.com/QwenLM/qwen-code/issues/12028) | 非对话 Context Token 治理 | 11 评论，长上下文场景下 system prompt + tool schema + skill listing 占比过高的"看不见的成本"。 |
| [#12856](https://github.com/QwenLM/qwen-code/issues/12856) | Aux-model 选择器以 `\0` 拼接 `baseUrl` 导致凭据泄漏 | 6 评论，五处配置存在凭据外泄风险，是本周最严重的安全信号。 |
| [#11019](https://github.com/QwenLM/qwen-code/issues/11019) | AUTO 模式下用户审批无法到达分类器（P2） | 4 评论，生产事故动作被永久阻断的回归，已被多人复现。 |
| [#12928](https://github.com/QwenLM/qwen-code/issues/12928) | 内部模型请求硬编码 `temperature: 0.2` | 4 评论，导致 GPT-6 Astra 端点 400 错误，反映模型适配层的鲁棒性问题。 |
| [#12970](https://github.com/QwenLM/qwen-code/issues/12970) | `invalid_tool_params` 被误诊为 `max_tokens` 截断 | 3 评论，多调用回合下整批工具执行失败，模型陷入无效重试循环。 |
| [#12961](https://github.com/QwenLM/qwen-code/issues/12961) | 未闭合的 `<system-reminder>` 静默截断用户消息 | 3 评论，`indexOf` 扫描器缺陷，文本完整性问题。 |
| [#10151](https://github.com/QwenLM/qwen-code/issues/10151) | Auto Memory 结构化召回与无损迁移 | 6 评论，承载 #12947 / #12853 / #12913 / #12929 / #12938 一整条收尾链路，是"记忆子系统"的主线 PR。 |

---

## 4. 重要 PR 进展

| PR | 内容 |
|---|---|
| [#12894](https://github.com/QwenLM/qwen-code/pull/12894) | Managed-Agent：Hosted Shell 远程结果交付（O2）—— 限定 stdout/stderr、不可变 catalog/Session receipt、Tool v3 路由与 Hosted 恢复。 |
| [#12946](https://github.com/QwenLM/qwen-code/pull/12946) | H1：实现私有 Hosted MCP Runtime —— stdio / Streamable HTTP / SSE 连接由 Runtime 持有凭据，模型只拿到 pin 住的 schema。 |
| [#12971](https://github.com/QwenLM/qwen-code/pull/12971) | Web Shell：原地检视 trajectory 记录 —— 请求/工具调用/消息可切换视图、有界展开、复制展示字段。 |
| [#12972](https://github.com/QwenLM/qwen-code/pull/12972) | Runtime Broker：整数精确读取 —— 握手/存储记录统一走"JSON 解析器返回类型即数字"的精确规则。 |
| [#12975](https://github.com/QwenLM/qwen-code/pull/12975) | 关闭 #12761 中延期 W0c-2 的 7 项发现 —— Context 安装会检查 Session 记录所处状态，拒绝在释放/释放中阶段写数据。 |
| [#12909](https://github.com/QwenLM/qwen-code/pull/12909) | CUA：macOS 上可选开启子窗口截图 —— `includeChildWindows: true` 仅改变视觉覆盖，原生目标与可访问性控件不变。 |
| [#10954](https://github.com/QwenLM/qwen-code/pull/10954) | `qwen serve` 暴露 supervisor 正在运行的后台 agent —— `GET /background-agents` 给出 sessionId/name/state/current task。 |
| [#12931](https://github.com/QwenLM/qwen-code/pull/12931) | Code Mode：安全工具调用并发化 —— 引导改用 `Promise.allSettled`，每条调用保留自身结果。 |
| [#9466](https://github.com/QwenLM/qwen-code/pull/9466) | Rewind 映射锚定到稳定 prompt 身份 —— 历史条目 / 持久化记录 / 模型侧 history 共享同一 identity，分叉/恢复/压缩快照可一致回滚。 |
| [#10916](https://github.com/QwenLM/qwen-code/pull/10916) | 重复相同工具错误自动终止回合 —— 错误指纹命中即触发既有 `LoopDetected` 路径。 |

补充：#12968（事件回放合并后复盘）已 CLOSED；#12913（Memory 迁移进度保留）已 CLOSED；#12920 文档确认本地 Managed 引擎推迟到 Hosted 切片之后。

---

## 5. 功能需求趋势

综合 Issues 与 PR 标题提炼出的社区关注方向：

- **Managed Agent 平台化交付**（热度最高）：双路径架构 → Hosted Shell / MCP / 后台 agent 暴露，覆盖"开发态 → 托管态"的全链路，是 qwen-code 当前最大的工程主线。
- **Auto Memory 2.0**：以 #10151 为锚的结构化召回、无损迁移、迁移调度、提取频率门控（#11471）共同构成"记忆子系统"完整改造。
- **Context / Token 治理**：非对话上下文（#12028）、Skills 列表按需注入（#12835 已 CLOSED）、Auto Memory rollout readiness（#12947）共同回应"长上下文 ≠ 白嫖"。
- **可观测性与开发者体验**：Web Shell 轨迹检视（#12971）、`hideStatusBar`（#12354）、底部对齐（#9305）、`/background-agents` API（#10954）。
- **凭据与隐私安全**：Aux-model 选择器 NUL 拼接 `baseUrl` 凭据泄漏（#12856）、MCP reconnect 强制上报 `session_start`（#12844 已 CLOSED）、Extension 生命周期遥测遵守 opt-out（#12789）。
- **多通道扩展**：邮箱 IMAP/SMTP 通道提案（#8281），延续 Web/IM 等渠道布局。
- **Code Mode 工具治理**：lazy discovery（#12898/#12973）、并发安全（#12931）、错误重试诊断（#12970）。

---

## 6. 开发者关注点

从反馈中归纳的痛点与高频需求：

- **模型适配鲁棒性**：内部请求硬编码 `temperature`、自定义 `baseUrl` 携带 userinfo 等"端点假设"反复引发回归，呼吁按模型逐项收敛协议层配置（#12928、#12856）。
- **CLI/编辑器链路稳定性**：Remote-SSH Companion EPIPE（#12416）、OpenTUI Slash 命令把自身 dispatch 当作"忙"（#12960）、`system-reminder` 截断（#12961）反映出跨进程/终端边界的容错细节仍需打磨。
- **内存与上下文性能的可解释性**：长上下文下"我到底烧了多少 token"对用户不透明，#12028 跟踪 issue 和 #12947 收尾路线都指向"可测量、可治理"的演进。
- **后台任务感知**：Agent View supervisor 的运行态此前无法外部观察，#10954 把"我派出去的 agent 在干嘛"变成 REST API。
- **错误信号保真**：#12970 把工具参数错误误诊为 `max_tokens` 截断，导致模型无意义重试——开发者普遍期望错误类型与修复路径直接、不可被错误分类器掩盖。
- **Hosted vs 本地节奏**：官方明确本地 `qwen serve` Managed 推迟到 Hosted 切片之后（#12920、#12737），社区需对"何时能跑本地双引擎"形成清晰预期。

> 备注：以上所有链接均指向 `QwenLM/qwen-code` 仓库对应 Issue / PR，可在 GitHub 上追踪最新状态。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-29**

---

## 今日速览

今日社区最关键的进展是 **v0.10.1 补丁版本发布**（#6708），主要用于移除默认的"每轮 1 小时硬性时钟限制"，回应操作员在 release check 中发现的误终止问题。同时，v0.10.0 暴露的多项 TUI 渲染缺陷（SSE 流打开失败无重试、最新消息跳转按钮渲染异常、文本背景黑化等）已有对应修复 PR 进入 review，OpenCode Zen 目录模型的 wire 路由失修也得到同步修复。

---

## 版本发布

### v0.10.1 — [#6708](https://github.com/Hmbown/Codewhale/pull/6708)
- **移除每轮对话的默认硬性时钟限制**（#6703）：此前长任务会在整 1 小时被强制终止，无论是否仍在推进。
- 同步收录 #6664（gaord）与 #6666（aboimpinto）的致谢条目。
- 修复 CHANGELOG 与版本号统一 bump。

---

## 社区热点 Issues

> 选取维度：评论数、最近活跃度、修复优先级与覆盖面。

### 1. [#6699](https://github.com/Hmbown/Codewhale/issues/6699) — ⭐ 核心稳定性
**SSE 响应头尚未到达即失败，导致整轮直接终止且无任何重试**
- 其他网络失败都有 bounded retry，唯独「stream open 阶段」失败直接放弃。
- 已由 #6711 修复（引擎层增加 stream-open 重试并把预算暴露为配置项）。
- 重要性：在不可靠网络/代理场景下，这是"一抖动就丢整轮"的关键体验缺口。

### 2. [#6700](https://github.com/Hmbown/Codewhale/issues/6700) — ⚙️ 可运维性
**流重试预算与传输超时硬编码为 `const`，无任何配置入口**
- 当前所有时长/重试相关参数都写死在二进制中，不可靠网络上的运维没有任何调节手段。
- 与 #6699 一并修复（#6711），由 [7jrxt42BxFZo4iAnN4CX](https://github.com/7jrxt42BxFZo4iAnN4CX) 提交。

### 3. [#5316](https://github.com/Hmbown/Codewhale/issues/5316) — 🧱 架构主线（29 评论）
**EPIC-005：CodeWhale TUI Crate 分解（Umbrella）**
- 当前唯一仍以 Linear 作为执行权威的总线，绑定了 C03–C10 的 owner、依赖顺序与完成证据。
- 下属 #6706（debug 命令组可移植化重构）与 #6707（其对应 PR）正持续推进。

### 4. [#6697](https://github.com/Hmbown/Codewhale/issues/6697) — 🐛 TUI 渲染
**"跳到最新消息"按钮渲染异常：出现多条横线**
- 由 [luestr](https://github.com/luestr) 反馈，hover layer 把 `UNDERLINED` 注入了 Link 目标的所有 cell，按钮是 3x3 圆角矩形就被三行划线。已由 #6714 修复。

### 5. [#6704](https://github.com/Hmbown/Codewhale/issues/6704) — 🐛 TUI 渲染
**长时间 focus 后 TUI 文本背景变黑**
- 运行约半小时后界面出现黑色背景块（附截图），与 #6697 一并由 #6714 修复（移除共享 hover 规则并修复 detail target 处的"黑洞"）。

### 6. [#6705](https://github.com/Hmbown/Codewhale/issues/6705) — 🔌 模型路由
**opencode-zen：111 个目录模型中有 58 个被判定为 "unproven endpoint"**
- Codewhale 只识别 curated list 里的模型 id，新目录模型无法派发。
- 已由 #6710 修复：改用 Zen 实时 `/models` 端点维护 wire 映射（main 实际剩 83 个 id）。

### 7. [#6690](https://github.com/Hmbown/Codewhale/issues/6690) — 💸 计费正确性
**v0.10.0 上 OpenRouter 始终显示 "rate unavailable"**
- `~`-别名 id 破坏 provider-lake 刷新，主路径忽略 `custom_models` 覆盖。
- 由 [sfalvarez](https://github.com/sfalvarez) 反馈，v0.10.1 已关闭。

### 8. [#6689](https://github.com/Hmbown/Codewhale/issues/6689) — 🪝 钩子可观测性
**`tool_call_after` 钩子拿不到 shell 真正执行了什么**
- 缺少：admission 后的 effective command、shell 工具运行时间、working directory 等。
- 由 [wuisabel-gif](https://github.com/wuisabel-gif) 提交，#6713 已实现 `DEEPSEEK_TOOL_EXECUTION_RECEIPT` schema-1 文档。

### 9. [#6688](https://github.com/Hmbown/Codewhale/issues/6688) — 🖥️ CLI 健壮性
**`codewhale exec` 只通过 argv 传 prompt，约 128 KiB 触发 E2BIG**
- 实测 Linux 7.2.3：131071 字节通过，131072 字节 E2BIG；argv+env 上限约 2 MiB。
- 提议改 stdin / 临时文件 / 显式环境变量通道。

### 10. [#6698](https://github.com/Hmbown/Codewhale/issues/6698) — 🧪 CI 健康
**`main` 上 shared-process workspace gate 红了，而 nextest CI 仍绿**
- 由 [aboimpinto](https://github.com/aboimpinto) 报告：在 clean `main@0bfe04e` 上集成 #6672 后失败，与 FEAT-029 无关。已由 #6712 移除 9 个 TUI lib test 的共享进程竞态。

---

## 重要 PR 进展

### 功能与可观测性

- **#6713** — [`feat(hooks): export a post-admission execution receipt`](https://github.com/Hmbown/Codewhale/pull/6713)
  - 关闭 #6689。`tool_call_after` 与失败时的 `on_error` 现在会收到 `DEEPSEEK_TOOL_EXECUTION_RECEIPT`（schema-1 JSON），包含 admitted command、起始 cwd、完成/中断状态等。

- **#6408** — [`feat(providers): add Yolo-Auto compatible host`](https://github.com/Hmbown/Codewhale/pull/6408)
  - 由 [harryvgiunta](https://github.com/harryvgiunta) 提交，参考 #6289 wire 调研。Yolo-Auto 作为数据驱动的 OpenAI Chat Completions 网关描述符加入，无 `ProviderKind` 变体。

- **#6701 / #6709 / #6625 / #6683** — [`feat(web): 多页面 i18n 字典化 (#5337)`](https://github.com/Hmbown/Codewhale/pull/6701)
  - [Lstarsky0](https://github.com/Lstarsky0) 一系列贡献：contribute、feed、session-media、docs-vocabulary 等页面去 fork 化，统一接到字典脊柱。

### 稳定性与可用性

- **#6711** — [`fix(engine): retry stream-open failures; make stream budgets configurable`](https://github.com/Hmbown/Codewhale/pull/6711)
  - 关闭 #6699，引用 #6700。补齐 stream-open 失败的重试，并把预算/超时暴露为可配置。

- **#6714** — [`fix(tui): no hover rules on the jump button; no black holes behind the detail target`](https://github.com/Hmbown/Codewhale/pull/6714)
  - 关闭 #6697，引用 #6704。修复按钮 hover 三行划线与 detail 后的黑底。

- **#6710** — [`fix(opencode-zen): route catalog-proven models on their declared wire`](https://github.com/Hmbown/Codewhale/pull/6710)
  - 关闭 #6705。改为基于 Zen 实时 `/models` 端点维护路由。

- **#6712** — [`fix(tests): remove shared-process races behind the #6698 gate flakes`](https://github.com/Hmbown/Codewhale/pull/6712)
  - 逐一列出失败 identity、原因与修复方式，恢复 main 的 Linux full-workspace gate。

- **#6707** — [`refactor(commands): make the complete debug group portable (FEAT-029)`](https://github.com/Hmbown/Codewhale/pull/6707)
  - 关闭 #6706。14 个 debug 命令全部加入可移植源闭包（`/tokens /cost /receipts /balance /cache /preview-request /tools /change /system /context /edit /diff /undo …`）。

### 性能与内容

- **#6646** — [`perf(tui): stop walking the whole item store to list or open a thread`](https://github.com/Hmbown/Codewhale/pull/6646)
  - [gaord](https://github.com/gaord) 提交。140-thread / 61,441 项 / 294 MB 场景下打开 thread 由 **1.3s warm / 6.7s cold** 降至仅一次目录读。

- **#6645 / #6682（已合并）/ #6621（已合并）** — [Runtime `/undo` 链路完成](https://github.com/Hmbown/Codewhale/pull/6645)
  - 关闭 #6621、#6659。线程拥有自己回合上的 restore point，HTTP 线程绑定到 live snapshot session，undo 不再"全树还原"。

- **#6662 / #6663** — [`docs(i18n): 完成 EPIC #5482 的 Tier-2 / Tier-3 文档`](https://github.com/Hmbown/Codewhale/pull/6662)
  - 合并顺序：先 #6662 后 #6663；含 ZH-Hans README、TOOL_SURFACE、CATALOG_REFRESH 的本地链接与重编号同步。

---

## 功能需求趋势

从过去 24 小时新增/更新的 28 条 Issue 提炼，社区关注集中在以下方向：

| 方向 | 代表 Issue | 趋势说明 |
| --- | --- | --- |
| **网络可靠性与可配置性** | #6699, #6700, #6654 | "流层重试/超时/资源生命周期"成为头号痛点，社区明确希望把硬编码参数暴露为配置 |
| **多 Provider 兼容与路由正确性** | #6695 (Tsubasa), #6705 (opencode-zen), #6690 (OpenRouter), #6616 (AICraft) | 新 Provider 描述符、轻量 wire 接入成为主流增量方式，而非新增 `ProviderKind` 变体 |
| **TUI 渲染与可访问性细节** | #6697, #6704, #6545 | hover / 焦点 / 背景色等微观 UI 问题被高频反馈，需要从共享渲染层根因修复 |
| **CLI / 命令边界** | #6688 | 128 KiB argv 上限已无法满足大型 prompt 输入，需引入 stdin / 文件 / env 多通道 |
| **可观测性（钩子 / Receipt）** | #6689, #6705 | shell 工具"实际跑过什么"成为第三方集成与计费对账刚需 |
| **架构可移植性** | #5316, #6706 (FEAT-029) | debug 命令组与 TUI crate 分解继续推进，"可移植源闭包"

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*