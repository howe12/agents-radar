# AI CLI 工具社区动态日报 2026-09-23

> 生成时间: 2026-09-23 02:50 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具横向对比分析报告
**报告日期**：2026-09-23 ｜ **样本**：9 款主流 AI CLI 工具

---

## 1. 生态全景

当前 AI CLI 工具市场已进入"**模型竞速 + Agent 架构重构**"双主线驱动的发展阶段：头部厂商（Anthropic、OpenAI、Google）密集推送新一代旗舰模型（Opus 5.5、GPT-6 Sol/Luna、Gemini 3.8 Flash），新模型上线首日往往伴随兼容性震荡；同时 **Subagent 编排、长会话压缩、成本可见性**成为跨工具共同的技术债。从社区活跃度看，开源/中立网关型工具（OpenCode、Qwen Code）以高 Issue/PR 比领跑，而商业产品（Claude Code、Copilot CLI）呈现"反馈高、贡献低"的典型用户侧形态。

---

## 2. 各工具活跃度对比

| 工具 | Release | 今日 Issue 更新 | 今日 PR 进展 | 社区反应强度 |
|------|---------|----------------|--------------|--------------|
| **Claude Code** | v2.1.280（Opus 5.5 默认模型） | 50 | 1 | ⚠️ 审慎期待 |
| **OpenAI Codex** | rust-v0.156.1 hotfix + v0.156.0 + 5 个 alpha | ~30（精选） | ~20（精选） | 🔥 高活跃 |
| **Gemini CLI** | v0.62.0-nightly（3.8 Flash） | ~30 | 10（精选） | 🔥 高活跃 |
| **GitHub Copilot CLI** | v1.0.89-0（Opus 5.5 支持） | 10 | 1 | 📊 中等偏低 |
| **Kimi Code CLI** | v1.52.0（Python → TS 迁移引导） | 1 | 6 | 📉 极低（迁移期） |
| **OpenCode** | 无（V2 迭代窗口期） | 50 | 50 | 🔥🔥 极高（双高） |
| **Pi** | v0.87.1（多前沿模型 + Grok 4.7 默认） | 10 | 10 | 🔥 中高 |
| **Qwen Code** | v0.24.4 + v0.24.5-preview.0 + Desktop + 2 nightly | 50 | 10（精选） | 🔥🔥 极高 |
| **DeepSeek-TUI / Codewhale** | v0.10.0（品牌升级） | 10 | 10 | 🔥 中高 |

**关键观察**：
- **OpenCode 与 Qwen Code** 形成"双高引擎"，Issue 与 PR 双向高活跃，呈现健康迭代节奏；
- **Claude Code / Copilot CLI** 出现明显的"反馈-贡献"落差（50:1 与 10:1），反映商业产品的贡献者门槛；
- **Kimi Code CLI** 处于 Python→TS 迁移期，社区活动显著收敛（仅 1 条 Issue 更新）。

---

## 3. 共同关注的功能方向

下表汇总**至少 3 款工具同时关注**的核心议题：

| 议题方向 | 代表工具与具体诉求 |
|---------|-------------------|
| **Subagent / 多 Agent 编排可靠性** | Claude Code（#65796 工作流恢复重跑、#87874 无并发规范）；Gemini CLI（#22323 子代理错误上报为 GOAL、#21409 委派卡死、#21968 Skills 不主动调用）；Qwen Code（#12380 Managed Agent 架构、#12424 per-agent tool policy）；Codewhale（#6036 Fleet/Agent 概念重复、#5479 TUI 子代理视图）|
| **长会话压缩与持久化可靠性** | Claude Code（#65796 自动压缩后状态丢失）；Copilot CLI（#4780 OOM 后无法 resume、#4639 retry storm、#4663 压缩-计费恶性循环）；Kimi CLI（#2336 内存压力下会话损坏 + tool_call 400）；Qwen Code（#12257 本地 notes 压缩）|
| **Windows 桌面端稳定性** | Claude Code（#95264 WS_EX_TOPMOST 卡死、#91618 Worktree 大小写、#92601 ENOENT 死循环）；Codex（#25271 Computer Use Chrome URL 识别、#44696 沙箱 helper 失败、#32492 Finish Windows setup 卡死）；OpenCode（#21277 PowerShell ANSI 转义残留）|
| **成本可见性与配额透明** | Claude Code（#80261 桌面端缺用量指示器 👍22、#95305 send_later 静默耗额度）；Codex（#42987 GPT-6 Astra 两对话耗尽 Plus 配额、#34873 reasoning summary 仅返回标题）|
| **文档与行为一致性** | Pi（#8684 PI_OFFLINE 文档与实际不符；PR #9898 一次性关闭 5 个文档陈旧问题）；Codex（#47056 CLI 元数据刷新导致消息回滚）；Kimi（迁移文档缺口）|
| **多 Provider / 自定义端点** | OpenCode（Kimi/Qwen/OpenRouter 兼容、#50314 SSE 解码）；Pi（#9934 Yolo-Auto 自动发现、#9884 扩展注册模型）；Copilot CLI（#4003/#4840/#3736 BYOK 三件套）|

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 核心赛道 |
|------|---------|---------|---------|
| **Claude Code** | Opus 5.5 长上下文（1M）、桌面端 UX、多 Connector 企业落地 | 企业研发团队、重度 Claude 用户 | 商业旗舰 + 桌面 App |
| **OpenAI Codex** | GPT-6 全家桶、Computer Use、/tui 全屏交互、TTS 语音 | ChatGPT 订阅用户、自动化场景开发者 | 消费级 AI 全栈 |
| **Gemini CLI** | Flash 模型成本优势、AST 感知代码理解、Auto Memory | 成本敏感开发者、大代码库场景 | 长上下文 + 代码理解 |
| **GitHub Copilot CLI** | GitHub 原生集成、BYOK、Auto mode、多扩展 SDK | GitHub 深度用户、企业 SSO 场景 | 平台型 + 多源接入 |
| **Kimi Code CLI** | Python → TS 迁移、ACP 协议、CJK 输入友好 | 中文/亚洲市场开发者、协议早期采用者 | 国际化 + 协议层 |
| **OpenCode** | 多 Provider 网关、AI SDK V2、Codemode 解释器、国产模型接入 | 模型研究者、本地 + 云端混合用户 | 开源中立网关 |
| **Pi** | 文档驱动、扩展 Provider 注册、嵌入式 SDK、Compaction 工程 | 工具链集成方、对文档敏感的开发者 | 可扩展 + 可嵌入 |
| **Qwen Code** | Managed Agent 架构、Web Shell、Live Voice、Linux/WSL 体验 | 通义生态用户、桌面协作场景 | 多 Agent 平台 + Web Shell |
| **Codewhale** | 外部 Memory 后端、Fleet 多代理治理、Chromewhale 浏览器插件 | 多代理实验者、跨端协作需求者 | 多代理 + 浏览器代理 |

**差异化要点**：
- **商业旗舰 vs 开源中立**：Claude Code / Codex 押注新模型首发红利，OpenCode / Pi / Codewhale 主打 Provider 联邦；
- **桌面 App 化趋势**：Claude Code、Codex、Qwen Code 不约而同加码 Desktop 体验，而 OpenCode/Pi 仍坚守 CLI/TUI 主战场；
- **代理架构路线分化**：Qwen Code 提出 Managed Agent 双路径、Codewhale 押注 Fleet、Claude Code 在 Subagent 编排上遭遇可靠性瓶颈，三者代表了多 Agent 的三种解法。

---

## 5. 社区热度与成熟度

### 🏆 第一梯队：高活跃 + 高产出
- **OpenCode**：50 Issue + 50 PR 双高，且大量 Issue 当日闭环，呈现**"快速 issue triage + 持续交付"**的健康开源节奏；
- **Qwen Code**：50 Issue + 10 PR，叠加 Desktop / Web Shell / Managed Agent 三线并进，处于**架构升级窗口期**。

### 🥈 第二梯队：高反馈 + 中产出
- **Claude Code**：50 Issue 仅 1 PR，**"用户反馈井喷、贡献者冷清"**——典型商业产品的成熟期形态；
- **Gemini CLI**：夜间版本节奏快、Issue/PR 结构均衡，属于**稳定迭代阶段**；
- **OpenAI Codex**：模型目录 + TUI + 网络策略三线推进，但 Windows 痛点积压，**问题密度高于修复速度**。

### 🥉 第三梯队：稳定运营 / 特定窗口期
- **Copilot CLI**：v1.0.x 已达 89 个版本，PR 流入放缓，**进入精细打磨期**；
- **Pi**：v0.87.1 多模型同步上线，但社区规模仍属中型；
- **Codewhale**：v0.10.0 品牌升级后处于**新生态建立期**，Issue 以架构债务和长期规划为主。

### 📊 特殊状态
- **Kimi Code CLI**：仅 1 条 Issue + 6 条 PR，处于**Python→TS 迁移静默期**，建议关注迁移文档质量与回滚机制。

---

## 6. 值得关注的趋势信号

### 🔮 信号一：新模型"首日效应"成为系统性风险
Opus 5.5（Claude Code、Copilot、Pi）与 GPT-6（Codex、Pi）上线首日均暴露**兼容性、可用性、可观测性**三类问题：
- Claude Code #95764（Opus 5 工具调用正文被折叠为 thinking）
- Codex #47412（gpt-6-sol 404 未发布）、#46632（请求被静默替换）
- 建议：**新模型上线应预留 1-2 周稳定期**，并将 reasoning_extraction、模型替换策略纳入 CI 回归。

### 🔮 信号三："Agent 黑盒"催生可观测性刚需
所有工具的子代理/会话机制都在不同维度暴露"用户无法判断 Agent 是否真正完成任务"：
- Claude Code 工作流恢复静默重跑（#65796）
- Gemini CLI 子代理错误上报为 GOAL（#22323）
- Copilot CLI 长会话"只能 kill 进程"的硬死锁（#4780/#4755/#4639）
- **趋势**：Agent 终止状态、运行追踪、Token 流向可视化将从"加分项"变为"准入门槛"。

### 🔮 信号三：Windows 桌面端成为新战场
**Claude Code、Codex、OpenCode 三家同步出现 Windows 集中 Bug**，反映：
- 桌面 App 已成主战场（Claude Code、Codex 桌面端 Issue 占比超 30%）；
- Windows 上的稳定性仍落后 macOS，是**企业内网部署的最大阻力**；
- 沙箱 helper、UAC、Worktree 权限是 Windows 上的"老三样"痛点。

### 🔮 信号四：成本可见性需求上升
- Claude Code Desktop 缺用量指示器（#80261 👍22）—— 用户对"算力去哪了"的焦虑显性化；
- Codex GPT-6 Astra 两对话耗尽 Plus 配额（#42987）—— **新模型计费预期落差是新模型采用的最大阻力**；
- Codewhale 提出按组件/模型的 token 核算（#6011）—— 开源工具也开始自建诊断面板。

### 🔮 信号五：协议层与多 Provider 联邦加速
- **ACP 协议**（Kimi Code 大跨度升级 0.8→0.12）、**AI SDK V2**（OpenCode 密集重构）、**MCP 客户端栈**（Codewhale 两栈统一 #6142）—— 协议层正在快速收敛；
- **多 Provider 战略价值凸显**：OpenCode、Pi、Codewhale 同时发力"Provider 注册即扩展点"，未来 6-12 个月，单一模型厂商 CLI 的护城河可能从"模型能力"转向"模型分发能力"。

### 🔮 信号六：文档成为产品竞争力
- Pi 一次 PR（#9898）集中关闭 5 个"文档与代码不符

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据来源：** anthropics/skills 仓库 · **截止日期：** 2026-09-23

---

## 1. 热门 Skills 排行（PR 关注度 TOP）

> 说明：仓库 PR 数据中评论数与点赞数未采集到完整数值，下方排序综合"近期活跃度 + 议题热度 + 实用性"得出。

| # | Skill (PR) | 类别 | 当前状态 | 社区讨论热点 |
|---|---|---|---|---|
| 1 | **skill-creator 触发评估修复** [#1298](https://github.com/anthropics/skills/pull/1298) | 元工具/基础设施 | OPEN | 修复 Windows 兼容、运行时失败被误判为负样本等问题，是 skill-creator 质量系列的延续 |
| 2 | **proofcore-contract-auditor** [#1771](https://github.com/anthropics/skills/pull/1771) | Web3 / 智能合约 | OPEN | 首个面向 Solidity/Rust 合约的链上存证审计 Skill，将审计哈希锚定到 TON 区块链 |
| 3 | **mcp-builder 兼容性修复** [#1742](https://github.com/anthropics/skills/pull/1742) | MCP 工具链 | OPEN | 适配 `mcp>=2.0.0` 的 `streamable_http_client` 重命名与自定义 headers，社区急需 |
| 4 | **md2video-audio** [#1703](https://github.com/anthropics/skills/pull/1703) | 内容创作 | OPEN | Markdown → MP4 + 真人语音旁白的零成本工作流，文档→视频场景关注度高 |
| 5 | **document-typography** [#514](https://github.com/anthropics/skills/pull/514) | 文档质量 | OPEN | 解决 AI 生成文档的孤行/寡行/编号错位，所有文档场景的刚需 |
| 6 | **AWT (AI Watch Tester)** [#822](https://github.com/anthropics/skills/pull/822) | E2E 测试 | OPEN | 零代码 E2E 测试生成 + 浏览器视觉控制，测试自动化方向代表 |
| 7 | **scnet-hpc** [#1615](https://github.com/anthropics/skills/pull/1615) | HPC / 科学计算 | OPEN | 国科网 HPC 集群的 SSH + Slurm 工作流，科研场景典型 |
| 8 | **testing-patterns** [#723](https://github.com/anthropics/skills/pull/723) | 测试方法论 | OPEN | 覆盖 Testing Trophy / 单元 / React / E2E 全栈测试知识体系 |

---

## 2. 社区需求趋势（基于 Issues 提炼）

### 🔥 最高优先级诉求

| 诉求方向 | 代表 Issue | 评论数 | 状态 |
|---|---|---|---|
| **🔒 信任边界与安全治理** | [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 滥用 `anthropic/` 命名空间冒充官方 | **43** | OPEN |
| **🏢 企业级 Skill 共享** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 组织内 Skill 一键分发 | 16 | OPEN |
| **🧪 评估基础设施失效** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0% | 12 | OPEN |
| **🤖 智能体治理模式** | [#412](https://github.com/anthropics/skills/issues/412) agent-governance 安全模式 Skill | 6 | CLOSED |
| **📦 插件去重与打包** | [#189](https://github.com/anthropics/skills/issues/189) document-skills / example-skills 重复安装 | 6 | OPEN |
| **🪟 上下文窗口溢出** | [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` Skill 单次注入 156k tokens | 4 | OPEN |
| **🧠 紧凑记忆表示法** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory（符号化 Agent 状态） | 9 | OPEN |
| **🔗 Skills 协议化为 MCP** | [#16](https://github.com/anthropics/skills/issues/16) 把 Skill 暴露为 MCP Server | 4 | OPEN |
| **✅ 推理质量门控管线** | [#1385](https://github.com/anthropics/skills/issues/1385) 校准 → 对抗评审 → 交付验证三段式 | 4 | OPEN |
| **☁️ 多云 Bedrock 兼容** | [#29](https://github.com/anthropics/skills/issues/29) Skills 在 AWS Bedrock 的可用性 | 4 | OPEN |

### 趋势归纳

- **基础设施层 > 新功能层**：超过 60% 高评论 Issue 集中在"Skill 加载、评估、打包、信任"的工程问题
- **企业落地诉求显著**：组织级共享、权限治理、审计追溯三大主题集中爆发
- **文档/Office 套件是绝对主流**：docx、pdf、pptx、odt、typography 相关 PR 与 Issue 占比最高
- **测试自动化是新兴增长点**：AWT、testing-patterns、run_eval 修复共同构成"测试三角"
- **垂直行业扩展**：Web3（合约审计）、HPC（科研）、游戏（Pyxel）三类专业场景正在渗透

---

## 3. 高潜力待合并 Skills（活跃 OPEN PR）

按"近期更新 + 内容热度 + 落地难度"综合排序，最有可能近期合入主仓库：

| PR | Skill | 最近更新 | 合并概率评估 |
|---|---|---|---|
| [#1769](https://github.com/anthropics/skills/pull/1769) | fix(skill-creator): trigger detection 0% recall | 2026-09-15 | ⭐⭐⭐⭐⭐ 修复关键 bug，与 #1298 形成系列 |
| [#1790](https://github.com/anthropics/skills/pull/1790) | fix(docx): create document.xml.rels when missing | 2026-09-19 | ⭐⭐⭐⭐⭐ 小范围明确修复 |
| [#1765](https://github.com/anthropics/skills/pull/1765) | fix(office): decode redlining diffs as UTF-8 | 2026-09-14 | ⭐⭐⭐⭐⭐ DOCX/PPTX/XLSX 三件套统一修复 |
| [#1734](https://github.com/anthropics/skills/pull/1734) | Detect orphaned docx comments | 2026-09-11 | ⭐⭐⭐⭐ 实用工具补充 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | fix(mcp-builder): mcp>=2 compatibility | 2026-09-19 | ⭐⭐⭐⭐⭐ 阻塞性兼容问题 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): Windows / runtime failures | 2026-09-16 | ⭐⭐⭐⭐ 元工具健壮性提升 |
| [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf): case-sensitive file references | 2026-04-29 | ⭐⭐⭐ 老牌 bug，已搁置数月 |
| [#1776](https://github.com/anthropics/skills/pull/1776) | blast-radius skill（破坏性写操作清单） | 2026-09-18 | ⭐⭐⭐⭐ 与 #492 安全议题呼应，价值高 |
| [#210](https://github.com/anthropics/skills/pull/210) | Improve frontend-design skill | 2026-03-07 | ⭐⭐ 长期 OPEN，需关注是否被新方案取代 |

---

## 4. Skills 生态洞察

> **当前社区最集中的诉求是："Skills 生态已经进入'质量与治理'阶段" —— 在功能扩张（Web3/HPC/游戏/测试）的同时，安全命名空间治理、评估体系可靠性、上下文窗口控制、企业级分发这四大基础设施缺口成为真正的瓶颈，谁先补齐谁就定义下一代 Skill 标准的入场券。**

---

### 附录：建议关注的三大治理议题
1. **#492 命名空间治理** — 43 条评论，是当前最显眼的社区共识缺口
2. **#228 组织内分发** — 8 👍，反映企业付费意愿强烈的真实需求
3. **#556 + #1390 + #1769 评估链路** — 三个 Issue/PR 串联起 skill-creator → run_eval → mcp-builder 的整条评估管线，集体失灵

---

# Claude Code 社区动态日报
**日期：2026-09-23**

---

## 📌 今日速览

v2.1.280 正式发布 **Claude Opus 5.5** 作为默认 Opus 模型（1M 上下文、$4/$20 每 Mtoken），并增强了全屏模式下的鼠标体验（`/skills` 列表滚动与 `/plugin` 状态点击）。社区层面，**多 Connector 账号管理**诉求（#27302）持续高热（253 条评论、387 个 👍），多项 **Mac/Windows 桌面端**、**子智能体编排可靠性**、**使用配额透明化**相关 Issue 成为今日讨论焦点。

---

## 🚀 版本发布：v2.1.280

| 项目 | 内容 |
|---|---|
| **新模型** | 引入 **Claude Opus 5.5**（`claude-opus-5-5`），替代旧版成为默认 Opus 模型 |
| **上下文** | 支持 **1M token** 上下文窗口 |
| **定价** | $4（输入）/ $20（输出）每 Mtoken；缓存读取 **$0.20 / Mtoken** |
| **TUI 改进** | 全屏模式下 `/skills` 列表支持鼠标滚轮滚动；`/plugin` 中技能状态选项可点击切换 |

> 本次发布以"**默认模型升级 + 桌面端交互细化**"为主线，未涉及底层 Agent 协议变更。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 核心要点 | 社区反应 |
|---|---|---|---|
| [#27302](https://github.com/anthropics/claude-code/issues/27302) | **[FEATURE] 多 Connector 账号支持** | 希望同一 Connector 支持绑定多个不同账号（如多套 GitHub/GCP） | 💬 253 / 👍 **387**（长期最热） |
| [#12953](https://github.com/anthropics/claude-code/issues/12953) | **[BUG] 鼠标滚轮错位滚动输入历史** | Windows 平台滚轮翻到了历史输入而非对话消息 | 💬 25 / 👍 21 |
| [#65796](https://github.com/anthropics/claude-code/issues/65796) | **[BUG] Workflow 恢复后从头重跑** | 自动压缩后恢复多 Agent 工作流会**静默重跑已完成 Agent**，浪费算力 | 💬 16 / 👍 0（议题严重但点赞低，典型"沉默多数"） |
| [#80773](https://github.com/anthropics/claude-code/issues/80773) | **[BUG] `claude://resume` 重复打开 Desktop 会话** | 缺少定位现有 Native Tab 的深链协议 | 💬 11 / 👍 1 |
| [#40346](https://github.com/anthropics/claude-code/issues/40346) | **[FEATURE] Hook/工具编程式会话重命名** | 与 GitHub Issue/PR 工作流联动，自动同步会话标题 | 💬 8 / 👍 14 |
| [#80261](https://github.com/anthropics/claude-code/issues/80261) | **[FEATURE] 主界面常驻使用配额指示器** | Desktop 应用缺少用量可视化 | 💬 6 / 👍 **22** |
| [#76841](https://github.com/anthropics/claude-code/issues/76841) | **[BUG] Routines 通知过期后无法回查会话** | 移动端 Routine 通知一旦错过，无法再次定位对应会话 | 💬 6 / 👍 5 |
| [#91618](https://github.com/anthropics/claude-code/issues/91618) | **[BUG] Windows 隔离 Worktree 大小写校验错误** | `D:\` 与 `d:\` 区分导致 worktree 安全检查误拒 | 💬 4 / 👍 0 |
| [#95764](https://github.com/anthropics/claude-code/issues/95764) | **[BUG] Opus 5 工具调用间正文被折叠为 thinking 块** | 自 9/11 起，原本的 prose 被服务器改写为摘要 thinking，代码块被吞 | 💬 1 / 👍 1（**影响 Opus 5.5 迁移风险评估**） |
| [#87874](https://github.com/anthropics/claude-code/issues/87874) | **[讨论] Subagent 编排无并发模型规范** | 无 join / cancel / quiescent-stop，版本间语义静默变更 | 💬 2 / 👍 0（**架构级议题**，呼应 #65796） |

### 其他值得留意的近期新增 Issue

| # | 一句话摘要 |
|---|---|
| [#95264](https://github.com/anthropics/claude-code/issues/95264) | Windows Desktop 窗口间歇性卡在 `WS_EX_TOPMOST` |
| [#92601](https://github.com/anthropics/claude-code/issues/92601) | `security-guidance` 官方插件 hook ENOENT 引发**无限重试循环** |
| [#95960](https://github.com/anthropics/claude-code/issues/95960) | `reasoning_extraction` 误把用户文本识别为推理泄漏 |
| [#94707](https://github.com/anthropics/claude-code/issues/94707) | Desktop 内链接越界文件时显示为可点击但点开后**死路** |
| [#96207](https://github.com/anthropics/claude-code/issues/96207) | macOS 多实例时更新装不上，提示"Update didn't complete" |
| [#95305](https://github.com/anthropics/claude-code/issues/95305) | Claude Code Remote `send_later` 默默耗光额度 |
| [#95305](https://github.com/anthropics/claude-code/issues/95305) | 提示缓存"过期前主动预热"机制提议（keepalive） |

---

## 🛠 重要 PR 进展

> 过去 24 小时内仓库仅更新 1 条 PR。

| # | 状态 | 内容 |
|---|---|---|
| [#95409](https://github.com/anthropics/claude-code/pull/95409) | ⚫ **CLOSED** | 引入 `mods/agents-md`：与 `CLAUDE.md` 同等模式加载 `AGENTS.md`，实现多生态项目指令文件兼容（对应插件 `instructionFiles` 选项） |

**观察**：PR 流入明显放缓（仅 1 条）；而 Issue 端活跃度依然较高（50 条更新）。社区当前以**反馈问题**为主，**贡献代码**的节奏出现落差，可能与 Opus 5.5 默认上线后用户集中回归测试有关。

---

## 📈 功能需求趋势

从近 24h Issue 标签聚合，可识别出以下高优方向：

| 趋势 | 代表 Issue | 解读 |
|---|---|---|
| **多账号 / 多 Connector 管理** | #27302 | 企业级落地刚需，与 Claude Code on the web 协同 |
| **桌面 App UX 完善** | #80261, #80773, #94707, #93779, #96207 | 文件链接、权限持久化、Tab 深链、Update 流程——Desktop 已成主战场 |
| **成本控制 & 缓存策略** | #95728, #96214, #96211, #95305 | 提"prompt-cache keepalive"、"Mods 缓存"、"闲置时跑可选任务"、"send_later 静默耗额度" |
| **Subagent / Workflow 可靠性** | #87874, #65796, #96215 | 多 Agent 模式重启、并发语义、Cron 调度漂移 |
| **会话与上下文管理** | #40346, #84209 | 编程式重命名、Worktree 切换下历史"孤儿化" |
| **Opus 5 → 5.5 迁移兼容性** | #95764, #95960 | reasoning_extraction、thinking/prose 折叠等行为变更风险 |

---

## 🧑‍💻 开发者关注点与痛点

1. **Windows 平台 Bug 集中爆发**
   - 桌面端窗口 `WS_EX_TOPMOST` 卡死（#95264）
   - Worktree 大小写比较（#91618）
   - 官方插件 hook **ENOENT 死循环重试**（#92601）—— 影响 "开箱即用" 体验
   - 反映：**Windows 上的稳定性落后 macOS**，仍是企业内网部署最大阻力。

2. **桌面 App "走出工作目录即死路"**
   - 多个 Issue（#94707、#93779）报告文件链接、文件夹权限都受限于 session CWD。
   - 开发者期待的是**真正的"全机器 Agent"**而非沙盒式编辑。

3. **透明度 vs. 静默消耗**
   - Desktop 缺用量指示器（#80261 👍22）
   - `send_later` 静默跑任务（#95305）
   - Multi-agent resume 重跑（#65796）
   - → 用户对"算力去哪儿了"的焦虑在上升。

4. **官方插件 (`security-guidance`) 成为故障源**
   - 开启 stage 后 ENOENT 死循环，意味着**默认安全策略反过来侵蚀可用性**。

5. **Opus 5.5 上线初体验**
   - 5.5 取代 5 成为默认后，#95764 反映工具调用间正文被吞、桌面端不显示——若不及时修复，会显著拖慢 5.5 的接受度。

---

**📊 数据摘要**：50 条 Issue 更新 / 1 条 PR / 0 条新发布（除 v2.1.280）｜社区情绪：⚠️ **审慎期待** — 模型升级的兴奋被桌面端、Subagent 编排、成本可见性等长期问题所稀释。

> 🔗 全部链接：[**anthropics/claude-code Issues**](https://github.com/anthropics/claude-code/issues) · [**Pull Requests**](https://github.com/anthropics/claude-code/pulls)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-23**

---

## 1. 今日速览

今日 Codex 社区聚焦三大主线：**rust-v0.156.1 hotfix 发布，正式引入 GPT-6 Sol/Luna 模型**，同步推送 rust-v0.157.0 多个 alpha 预发布版本；**Windows 平台问题依旧高发**，尤其是沙箱初始化、Computer Use 浏览器集成、Desktop 多窗口行为等历史 Issue 持续升温；**应用层网络策略（application network policy）作为今日 PR 集群主题**，从远程控制、AWS 鉴权、app-server 请求到 WebSocket 链路全面收紧。此外，今日新开 Issue 暴露了 GPT-6 上线后的若干模型可用性与配额异常问题，值得关注。

---

## 2. 版本发布

### rust-v0.156.1（hotfix，2026-09-23）
- 模型目录中加入 **GPT-6 Sol 与 GPT-6 Luna**，可在模型选择器中切换。
- 限流（rate-limit）切换提示默认推荐 **GPT-6 Luna**。
- 迁移策略：`gpt-5.5`、`gpt-5.6-sol`、`gpt-5.6-terra` → `gpt-6-sol`；`gpt-5.6-luna` → `gpt-6-luna`；`gpt-5.4`、`gpt-5.4-mini` 重定向至 GPT-6 系列。
- 对应 PR：[#47405](https://github.com/openai/codex/pull/47405)、[#47385](https://github.com/openai/codex/pull/47385)

### rust-v0.156.0（正式版）
- 新增可选全屏界面 `/tui`，支持**会话脚本搜索、鼠标选择、右键复制**。
- **语音对话默认开启**，新增 `F8` 切换键、`/voice settings` 配置面板，集成音频组件。
- 对应 PR：[#46732](https://github.com/openai/codex/pull/46732)、[#46734](https://github.com/openai/codex/pull/46734)、[#46883](https://github.com/openai/codex/pull/46883)、[#46895](https://github.com/openai/codex/pull/46895)

### rust-v0.157.0-alpha.4 ~ alpha.10
- 多个 alpha 预发布版本密集迭代，重点在 TUI 体验修复、网关鉴权缓存、模型元数据更新。预发布链路活跃。

---

## 3. 社区热点 Issues（按关注度精选）

| # | 标题 | 评论 | 👍 | 重要性说明 |
|---|------|------|-----|------------|
| [#25271](https://github.com/openai/codex/issues/25271) | **Computer Use 无法在 Windows 上识别 Chrome URL**（即使 chrome://newtab/） | 42 | 10 | 评论数最高；Computer Use 是 Codex 的关键差异化能力，Windows 上的浏览器识别问题直接影响自动化场景落地。 |
| [#25826](https://github.com/openai/codex/issues/25826) | **Windows Desktop 多显示器下最大化窗口跨屏溢出** | 28 | 20 | 👍 数最高；属于普遍存在的桌面 UX 缺陷，影响所有多屏用户。 |
| [#42987](https://github.com/openai/codex/issues/42987) | **GPT-6 Astra Medium 两次对话即耗尽 Plus 5 小时配额** | 27 | 17 | 直接打击 Plus 订阅用户体验，模型消耗速度异常，亟待官方核算与说明。 |
| [#45626](https://github.com/openai/codex/issues/45626) | **Windows Desktop 26.908.70816 首轮后无法继续对话** | 23 | 4 | Send 按钮灰化的核心工作流阻塞，影响新会话与历史会话。 |
| [#31878](https://github.com/openai/codex/issues/31878) | **ChatGPT/Codex 合并后 macOS 侧边栏缺失 Projects** | 19 | 18 | 跨产品整合的回归问题，影响重度依赖 Projects 的用户。 |
| [#44696](https://github.com/openai/codex/issues/44696) | **Windows sandbox helper 全部命令失败（helper_unknown_error）** | 18 | 2 | 沙箱层整体失效，等同 Windows CLI 不可用。 |
| [#32492](https://github.com/openai/codex/issues/32492) | **Windows app 卡在 "Finish Windows setup"，UAC 提示不触发** | 17 | 5 | 首次安装体验直接阻断，新用户难以入门。 |
| [#23527](https://github.com/openai/codex/issues/23527) | **Codex Mobile 无法显示已连接 Mac 宿主的 SSH 远程项目** | 17 | 21 | 👍/评论比最高之一；SSH 远程开发场景跨端联动缺失，影响移动端生产力。 |
| [#40550](https://github.com/openai/codex/issues/40550) | **Windows app 初始化助手 helper_failed / Access Denied** | 15 | 0 | 与 #32492、#47383、#47418 形成"Windows 安装与沙箱初始化"问题簇。 |
| [#34873](https://github.com/openai/codex/issues/34873) | **model_reasoning_summary="detailed" 仅返回标题无正文** | 11 | 12 | 推理可观测性回归，开发者依赖详细总结做调试与审计，影响 CLI 工作流。 |

> 补充关注（今日新增）：[#47412](https://github.com/openai/codex/issues/47412)（gpt-6-sol 404 未发布到全部账户）、[#47415](https://github.com/openai/codex/issues/47415)（Linux/Btrfs 沙箱挂载拒绝）、[#47418](https://github.com/openai/codex/issues/47418)（Windows 升级后 Agent 沙箱不可用）。

---

## 4. 重要 PR 进展

| # | 标题 | 类别 | 要点 |
|---|------|------|------|
| [#47405](https://github.com/openai/codex/pull/47405) | hotfix 0.156.0：GPT-6 Sol/Luna 加入模型目录 | 模型目录 | 同步刷新迁移目标、限流推荐与快照测试。 |
| [#47428](https://github.com/openai/codex/pull/47428) | 在 turn 边界应用继承的环境设置 | 可靠性 | 解决权限更新未及时作用于当前 turn 的问题。 |
| [#47424](https://github.com/openai/codex/pull/47424) | turn 结束时清理待处理异步问题通知 | TUI | 防止遗留通知压制 turn 完成提示。 |
| [#47423](https://github.com/openai/codex/pull/47423) | 后台草稿恢复时保留 Ctrl+R 历史搜索 | TUI | 避免草稿恢复中断正在进行的历史检索。 |
| [#47422](https://github.com/openai/codex/pull/47422) | TUI turn 结束时恢复未发送的问题草稿 | TUI | 改善 interrupted/failed turn 的草稿回放体验。 |
| [#47417](https://github.com/openai/codex/pull/47417) | SSH 下 Terminal.app 使用原生 scrollback（auto 模式） | 终端适配 | Unix/macOS 终端特性识别更鲁棒。 |
| [#47414](https://github.com/openai/codex/pull/47414) | 支持 Shift-click 扩展 transcript 选区 | TUI UX | 全屏 UI 体验补完，配合 #46732 系列。 |
| [#47413](https://github.com/openai/codex/pull/47413) | 按后端缓存解密后的 gateway OAuth 凭据 | 性能/安全 | 减少重复解密开销，single-entry 缓存。 |
| [#47411](https://github.com/openai/codex/pull/47411) | 嵌入式 Codex 启动全程应用共享网络策略 | 安全 | 在 app-server 启动前即生效。 |
| [#47389](https://github.com/openai/codex/pull/47389) | HTTP/WebSocket 全链路强制网络策略 | 安全 | 重定向、body 读取、WebSocket 已建连阶段均受约束；策略撤销后禁止客户端重试。 |

> 关联 PR [#47407](https://github.com/openai/codex/pull/47407)、[#47408](https://github.com/openai/codex/pull/47408)、[#47410](https://github.com/openai/codex/pull/47410) 共同构成**今日网络策略加固集群**，覆盖 app-server、AWS 鉴权与遥测、远程控制三大块。

---

## 5. 功能需求趋势

| 方向 | 主要信号 |
|------|----------|
| **GPT-6 系列模型落地** | 0.156.1 加入 Sol/Luna，#47412/#46632/#47228/#35904 反映 Plus/Pro 账户可用性与"模型替换"问题；Astra 配额消耗异常（#42987）。 |
| **TUI 全屏体验升级** | 0.156.0 新增 `/tui`、transcript 搜索、鼠标选择；今日 PR 持续打磨 Shift-click 选区扩展、Terminal.app scrollback、tmux 鼠标设置（#47399）。 |
| **Windows 桌面稳定性** | 沙箱初始化（#44696/#47383/#47418）、安装助手（#32492/#40550）、Computer Use 浏览器集成（#25271/#45996/#36868）、多屏行为（#25826）、IPC EPIPE（#35985）构成系统性短板。 |
| **跨端/移动能力** | iOS Mobile 显示 Mac 宿主 SSH 项目（#23527）、macOS 侧边栏 Project 回归（#31878）。 |
| **网络与安全策略** | application.network policy 全面铺开，从嵌入式启动到远程控制、AWS、telemetry、app-server 全链路生效。 |
| **模型推理可观测性** | model_reasoning_summary="detailed" 仅返回标题（#34873）；CLI/会话元数据刷新引发消息回滚（#47056）。 |
| **会话生命周期管理** | 上下文压缩永久覆写 rollout 损坏会话（#44363）、Delete All 归档残留（#43106）。 |

---

## 6. 开发者关注点

1. **Windows 沙箱链路是头号痛点**：用户、安装卡组、`helper_failed`/`helper_unknown_error`、权限拒绝、Agent 沙箱创建失败，本质都源于 Windows 提权/UAC 与 helper 进程模型在多版本下的脆弱性；几乎每位受影响者都在反复"Repair + reboot"无果。
2. **GPT-6 上线第一天已暴露三类风险**：
   - **可用性不一致**——同账户下 `gpt-6-sol`/`gpt-6-luna` 404、Plus 账户 Astra 配额异常消耗（#47412、#42987）；
   - **静默模型替换**——请求 `gpt-6-astra` 被服务器替换为 `gpt-5.6-luna`（#46632），破坏可复现性与成本预期；
   - **5.6 系列可见性回退**——`gpt-5.6-luna` 在更新后从选择器消失（#47228、#44841、#35904）。
3. **Computer Use 浏览器集成是高频阻塞点**：Windows 上 Chrome/Edge 无法识别当前 URL（#25271、#45996），macOS 上键盘与粘贴事件被放大为系统级（#36868），直接影响"打开浏览器 → 自动化操作"的主路径。
4. **会话与可观测性存在数据丢失风险**：上下文压缩直接损坏 transcript（#44363）、CLI 元数据刷新导致已回滚消息被恢复（#47056），开发者明确要求"非破坏性"语义。
6. **远程与多端协同仍有明显缺口**：iOS 看不到 Mac 上的 SSH 项目（#23527）、Workspace/Work 误进入（#46282）、Chat↔Work 切换干扰 Google Doc 编辑（#47067），是 ChatGPT/Codex 合并后的余震。
7. **网络策略收紧受认可**：开发者普遍支持更严格的目的地限制与撤销语义（PR #47389/#47407/#47408/#47410/#47411），同时关注其在企业代理环境下的兼容性（#47398 引入 system proxy fallback）。

---

> **报告口径**：基于 openai/codex 仓库 2026-09-23 当日 Releases、Issues（前 30 条热门）与 PRs（前 20 条热门）数据整理；评论数/👍 数反映社区关注强度，非问题严重度的官方判定。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-23
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 迎来了重要版本更新，**Gemini 3.8 Flash 与 3.5 Flash Lite 正式作为最新 GA 模型上线**，标志着模型矩阵再次扩张。与此同时，社区讨论仍集中在 **Agent 可靠性** 上：子代理（subagent）在达到 MAX_TURNS 后的异常上报、Generalist Agent 频繁卡死、Browser Agent 在 Wayland 下的崩溃等 P1 级别问题持续占据热点。安全与隐私（Auto Memory 数据脱敏）、工具调用稳定性（`read-many-files` 误识别二进制文件、文件写入非原子性）也成为今日 PR 修复的重点方向。

---

## 🚀 版本发布

### v0.62.0-nightly.20260923.g62364cb20

本次夜间版本核心变更：

- **新增模型支持**：引入 **Gemini 3.8 Flash**（`gemini-3.8-flash`）和 **Gemini 3.5 Flash Lite**（`gemini-3.5-flash-lite`），将二者提升为 Flash 与 Flash Lite 层级的最新 GA 模型。
- 由 [@DavidAPierce](https://github.com/google-gemini/gemini-cli/pull/29443) 提交，已合并。
- 自动补丁机器人同步发起 cherry-pick 至 `v0.61.0-preview.0`（创建 0.61.0-preview.1）和 `v0.60.0`（创建 0.60.1，后者存在冲突需手动解决）。

📎 [Full Changelog](https://github.com/google-gemini/gemini-cli/compare/v0.62.0-nightly.20260922.gd5b3e3acc...v0.62.0-nightly.20260923.g62364cb20)

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) - Subagent 在 MAX_TURNS 后错误上报为 GOAL 成功 ⭐ P1
**作者**: matei-anghel | 评论: 13 | 👍: 2
`codebase_investigator` 子代理在达到最大轮次限制后仍报告 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了真实的中断状态。**这是 Agent 可观测性的严重缺陷**，可能让用户误以为任务已完成。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) - Generalist Agent 频繁卡死 ⭐ P1
**作者**: turmanticant | 评论: 8 | 👍: 8
当 Gemini CLI 将任务委派给 Generalist Agent 时会无限挂起，包括"创建文件夹"这类简单操作，**最高互动量（8👍）反映出开发者对此问题的普遍共鸣**。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) - 利用 Gemini 3 原生 Bash 能力：零依赖 OS 沙箱与执行后意图路由 ⭐ P2 Enhancement
**作者**: abhipatel12 | 评论: 9
Gemini 3 模型天然训练为 bash 使用者，可链式调用 `grep/cat/sed/awk`。该 EPIC 提议构建零依赖的 OS 级沙箱，**在不牺牲用户体验和安全的前提下充分发挥模型原生能力**。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) - 评估 AST 感知的文件读取、搜索与映射 ⭐ P2
**作者**: gundermanc | 评论: 7
该 EPIC 评估通过 AST 感知工具（精确读取方法边界、减少噪声 token、改进 codebase 导航）能否提升代理效率。**这是提升大代码库理解能力的关键探索方向**。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) - Gemini 极少主动使用 skills 与 sub-agents ⭐ P1
**作者**: rnett | 评论: 6
用户反映即便配置了 gradle/git 等 skills，模型也很少主动调用，必须显式指令才会触发。**反映出 Skill/Subagent 发现机制的可用性短板**。

### 6. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) - Auto Memory 需确定性脱敏并减少日志记录 ⭐ P2 Security
**作者**: SandyTao520 | 评论: 5
Auto Memory 将本地对话内容发送给后台提取模型，即便 prompt 指示模型脱敏，**敏感数据已经进入模型上下文，存在泄露风险**。这是一个亟待修补的安全缺陷。

### 7. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) - Browser Subagent 在 Wayland 下失败 ⭐ P1
**作者**: sigmaSd | 评论: 4 | 👍: 1
Browser Subagent 在 Wayland 环境下异常结束，**反映出 Browser Agent 对显示协议的兼容性不足**。

### 8. [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) - Browser Agent 忽略 settings.json 配置覆盖 ⭐ P2
**作者**: hsm207 | 评论: 4
`maxTurns` 等配置覆盖对 Browser Agent 完全失效，`AgentRegistry` 仅在初始化时读取但未传递给 Browser 子代理。**典型配置传递链路缺陷**。

### 9. [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) - Agent 应主动规避破坏性行为 ⭐ P2
**作者**: abhipatel12 | 评论: 3 | 👍: 1
在复杂 Git 操作和数据库维护场景下，模型可能使用 `git reset --force` 等危险命令。**需要让模型意识到破坏性操作的代价**。

### 10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) - 工具数量超过 400 个时触发 400 错误 ⭐ P2
**作者**: gundermanc | 评论: 3
当可用工具超过 400 个时触发 400 错误，**说明 Agent 需要更智能地进行工具范围裁剪，而非全量推送**。

---

## 🛠️ 重要 PR 进展

### 1. [#29443](https://github.com/google-gemini/gemini-cli/pull/29443) - 新增 Gemini 3.8 Flash 与 3.5 Flash Lite 支持 ✅ 已合并
**作者**: DavidAPierce | Size: XL | P1
本次日报最核心的变更：**正式引入 `gemini-3.8-flash` 与 `gemini-3.5-flash-lite`** 为 Flash / Flash Lite 层级的最新 GA 模型。

### 2. [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) - 修复 `read-many-files` 误识别二进制文件的上下文膨胀 Bug ⭐ P1
**作者**: villahernandez-coder | Size: L
修复因 `String.prototype.includes()` 模糊匹配导致的严重上下文膨胀：图片、PDF、音频等二进制文件被错误识别为"显式请求"并加载进上下文。**这是生产环境中可能导致成本剧增的关键 Bug**。

### 3. [#29448](https://github.com/google-gemini/gemini-cli/pull/29448) - 修复 Windows/WSL/无头环境下的无限鉴权循环 ⭐ P1
**作者**: villahernandez-coder | Size: M-L
解决与 Gemini Code Assist VS Code 扩展的文件争用，并提供加密文件存储作为 keyring 的自动回退。**显著改善企业环境的鉴权可用性**。

### 4. [#29451](https://github.com/google-gemini/gemini-cli/pull/29451) - 限制工具输出大小并优化长时 Agent 循环内存生命周期 ⭐ P1
**作者**: diegogodinezr | Size: L
针对构建脚本、测试套件等高频工具调用场景，**限制工具输出体积并优化 GC，根治长时运行的内存泄漏问题**。

### 5. [#29452](https://github.com/google-gemini/gemini-cli/pull/29452) - 解除工具确认与 IDE diff RPC 的耦合以防 UI 冻结 ⭐ P1
**作者**: elberthcabrales | Size: M
修复在 IDE 集成终端中按 Enter 无响应的问题：**将用户确认派发与 IDE diff 解析解耦，避免无响应 IDE 导致 UI 卡死**。

### 6. [#29244](https://github.com/google-gemini/gemini-cli/pull/29244) - 工具文件写入原子化与同路径串行化 ✅ 已关闭
**作者**: ranjan-del | Size: L
并行工具调用对同一路径的 `replace` 操作会导致数据丢失（两者都报告成功但实际互相覆盖）。**通过原子写入彻底杜绝并发写入竞态**。

### 7. [#29249](https://github.com/google-gemini/gemini-cli/pull/29249) - 修复 `get_internal_docs` 路径前缀绕过 ✅ 已关闭
**作者**: ranjan-del | Size: S-M
原路径遍历防护使用字符串前缀比较，**存在兄弟目录前缀绕过漏洞（安全 CWE-22 类问题），本 PR 已修补**。

### 8. [#29446](https://github.com/google-gemini/gemini-cli/pull/29446) - 区分 MCP 启用配置缺失与 JSON 损坏 ⭐ P1
**作者**: jesussamuel-byte | Size: M
区分 `ENOENT`（配置文件不存在）与 JSON 解析错误，避免被禁用的 MCP 服务器被错误地默认为启用，**保护用户现有配置不被覆盖**。

### 9. [#29450](https://github.com/google-gemini/gemini-cli/pull/29450) - 实现 A2A Server V1→V2 配置迁移
**作者**: jvargassanchez-dot | Size: XL
支持分层 V2 配置架构，同时保持与扁平 V1 配置文件在内存中的透明向后兼容。

### 10. [#29449](https://github.com/google-gemini/gemini-cli/pull/29449) - 新增 PkgDiet 依赖守卫 Skill
**作者**: om-tajne | Size: S
在 `npm install` 前自动查询 PkgDiet MCP 服务器的包健康度、体积与弃用状态，**防止引入低质量依赖**。

---

## 📈 功能需求趋势

综合今日 50 条更新 Issue，社区关注的功能方向可归纳为以下几类：

| 方向 | 占比 | 代表 Issue |
|------|------|-----------|
| **Agent 可靠性与子代理机制** | ~35% | #22323, #21409, #21968, #21763 |
| **Browser Agent 健壮性** | ~15% | #21983, #22267, #22232 |
| **安全 / 隐私 / 沙箱** | ~12% | #26525, #19873, #22672 |
| **Auto Memory 质量** | ~10% | #26522, #26523, #26516 |
| **AST 感知 / 大代码库效率** | ~8% | #22745, #22746, #19561 |
| **IDE 集成与终端 UX** | ~8% | #21924, #21432 |
| **新模型与配置系统** | ~7% | #29443, #29450 |
| **技能 (Skills) 生态** | ~5% | #20195, #29449 |

**核心趋势**：
- **Agent 自治** 是绝对主线（子代理发现、终止状态、委派卡死）
- **安全第一** 在新模型引入后变得更加关键（脱敏、路径遍历、配置损坏）
- **AST 感知 + 长上下文效率** 被视为下一阶段核心竞争力
- **生态开放** 通过 PkgDiet 等 Skills 体现

---

## 💬 开发者关注点

从今日活跃 Issue 与 PR 中提炼出开发者社区的**三大痛点**和**三大高频需求**：

### 🔴 核心痛点

1. **Agent 委派的"黑盒"问题** — 用户无法判断子代理是否真的完成任务（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），且 `/bug` 报告缺失子代理上下文，调试链路断裂。

2. **隐式上下文膨胀带来的成本焦虑** — [#29457](https://github.com/google-gemini/gemini-cli/pull/29457) 揭示 `read-many-files` 会把二进制文件当作文本读取注入上下文；[#29451](https://github.com/google-gemini/gemini-cli/pull/29451) 反映长时 Agent 内存无界增长。**这两个问题直接影响用户的 API 账单**。

3. **子代理/技能被闲置** — [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) 直指 Gemini 几乎不主动调用已配置的 skills / sub-agents，**配置了但用不上让用户挫败感极强**。

### 🟢 高频需求

1. **更精准的工具调用 + 配置传递** — `maxTurns` 等 settings.json 覆盖对子代理不生效（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)），工具数量上限触发 400（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)）。

2. **AST 级别的代码理解能力** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561) 等多个 Issue 表明开发者希望 CLI 具备"手术刀式"的代码读取能力。

3. **更友好的终端交互** — 终端 resize 闪烁（[#21924](https://github.com/google-gemini/gemini-cli/issues/21924)）、UTF-16 代理对截断（[#29304](https://github.com/google-gemini/gemini-cli/pull/29304)）、交互式 prompt 卡死（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）等体验问题持续被反馈。

---

*日报由 GitHub 公开数据自动整理生成。所有链接均指向 `google-gemini/gemini-cli` 仓库。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-23**

---

## 1. 今日速览

今日 Copilot CLI 发布了 v1.0.89-0 预发布版本，正式加入对 Claude Opus 5.5 模型的支持，同时改进了托管 Connector 的授权流程体验。社区反馈集中在**会话稳定性**与**managedSettings 故障级联**两大主题上——多个高优 issue 揭示了长会话压缩、认证刷新、并发配置写入等场景下的系统性风险，需要开发者升级前重点关注。

---

## 2. 版本发布

### v1.0.89-0（预发布）
- **新增**：支持 `claude-opus-5.5` 模型
- **改进**：在 connect/reconnect 过程中以可复制的授权 URL 显示托管 Connector 授权进度

### v1.0.88（2026-09-22）
- **新增**：在直连 Ghostty 和 WezTerm 会话中支持可选的 OSC 777 终端通知
- **修复**：底栏对话框（含 login device code）中的文本选择问题
- **改进**：managed-settings 刷新失败时保留 `/allow-all`，并对缺失路径上的会话审批做精确记忆

> 注：v1.0.88-2 为上述文本选择修复的回滚/重发包。

---

## 3. 社区热点 Issues

| # | Issue | 关注点 | 反应 |
|---|-------|--------|------|
| [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` 使 skill 完全不可达（"Skill not found"） | 破坏 Skill frontmatter 语义，本应 manual-only 却连显式调用都失败 | 💬7 👍9 |
| [#4780](https://github.com/github/copilot-cli/issues/4780) | 会话压缩 OOM 后永久无法 resume（默认 4.3 GB 堆上限） | 长会话硬故障，恢复路径被锁死 | 💬3 👍3 |
| [#4639](https://github.com/github/copilot-cli/issues/4639) | 1.0.80 事件存储耗尽引发 retry storm → GC/压缩循环 → Node OOM | 长会话的资源回收设计缺陷 | 💬3 |
| [#4755](https://github.com/github/copilot-cli/issues/4755) | 排队消息命中 turn 结束时 session 永久 wedge | 队列 lane 与 idle finalize 竞态 | 💬3 |
| [#4556](https://github.com/github/copilot-cli/issues/4556) | `extraKnownMarketplaces` 静默不注册 | server-managed 配置在插件路径被丢弃 | 💬4 |
| [#4432](https://github.com/github/copilot-cli/issues/4432) | `rubber-duck` 模型参数被 task 工具静默覆盖 | 子代理策略被破坏，跨家族复核失效 | 💬3 |
| [#4663](https://github.com/github/copilot-cli/issues/4663) | 失败的压缩逐 turn 原样重试 → 无限计费 + 上下文单调增长 | 计费/重试边界缺乏防护 | 💬2 |
| [#4900](https://github.com/github/copilot-cli/issues/4900) | 并发会话覆写 `~/.copilot/config.json` 导致 `trustedFolders` 丢失 | 配置文件无合并/对账 | 💬2 |
| [#4602](https://github.com/github/copilot-cli/issues/4602) | `managedSettings` 失败关闭级联影响 `store_memory` 与 MCP | 共享根因，第二症状首次披露 | 💬2 |
| [#4919](https://github.com/github/copilot-cli/issues/4919) | `/ask` 在 auto mode 下报"模型不支持" | 1.0.86 上 auto model 选择与 /ask 子模式不兼容 | 💬3 |

**新发现的高优先级问题**（24 小时内新出现）：
- [#4946](https://github.com/github/copilot-cli/issues/4946) 后台 shell 完成通知触发 `HTTP 400 content[].thinking`
- [#4929](https://github.com/github/copilot-cli/issues/4929) 进程内 auth token 永久停止刷新，所有 prompt 失败
- [#4927](https://github.com/github/copilot-cli/issues/4927) GPT-6 Astra 长上下文计费层与能力声明不一致（872k vs 1,050k）

---

## 4. 重要 PR 进展

> ⚠️ 过去 24 小时仅有 1 个 PR 更新，整体提交活跃度偏低。

| # | PR | 说明 |
|---|----|----|
| [#4770](https://github.com/github/copilot-cli/pull/4770) | 文档化 WebSocket responses opt-out | 官方文档补全：当网络阻断或 session 抛 `400 input item ID does not belong to this connection` 时，可显式回退到非 WS 传输路径。 |

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区诉求 |
|------|------------|----------|
| **BYOK / 自定义模型端点** | [#4003](https://github.com/github/copilot-cli/issues/4003)、[#4840](https://github.com/github/copilot-cli/issues/4840)、[#3736](https://github.com/github/copilot-cli/issues/3736) | 自定义 OpenAI 兼容端点、Deepseek 兼容、BYOK thinking 显示 |
| **会话与压缩可靠性** | [#4780](https://github.com/github/copilot-cli/issues/4780)、[#4639](https://github.com/github/copilot-cli/issues/4639)、[#4663](https://github.com/github/copilot-cli/issues/4663) | 堆上限、事件存储耗尽、重试风暴、错误传播 |
| **Auto / 代理交互模式** | [#3595](https://github.com/github/copilot-cli/issues/3595)、[#4919](https://github.com/github/copilot-cli/issues/4919) | AutoPilot 应在决策点暂停等待确认、auto mode 下 `/ask` 兼容性 |
| **MCP / 扩展 SDK 协同** | [#4590](https://github.com/github/copilot-cli/issues/4590)、[#4851](https://github.com/github/copilot-cli/issues/4851)、[#3456](https://github.com/github/copilot-cli/issues/3456) | 多扩展并发 resume、Azure MCP BrokenPipe、OAuth 并发 refresh |
| **托管配置与故障隔离** | [#4556](https://github.com/github/copilot-cli/issues/4556)、[#4900](https://github.com/github/copilot-cli/issues/4900)、[#4602](https://github.com/github/copilot-cli/issues/4602) | managedSettings 失败时不应清空 MCP/记忆/审批 |
| **权限与会话生命周期** | [#4486](https://github.com/github/copilot-cli/issues/4486)、[#4755](https://github.com/github/copilot-cli/issues/4755)、[#4866](https://github.com/github/copilot-cli/issues/4866) | 长会话编辑权限超时、queue wedge、Ctrl-D 误触发关闭 |

---

## 6. 开发者关注点

1. **长会话"硬死锁"成为首要痛点** — [#4780](https://github.com/github/copilot-cli/issues/4780)、[#4755](https://github.com/github/copilot-cli/issues/4755)、[#4639](https://github.com/github/copilot-cli/issues/4639) 共同指向：compaction/queue/event-storage 任一环节失败都可能让 session 进入**只能 kill 进程**的不可恢复状态，且 `--resume` 仍会重入故障。
2. **`managedSettings` 失败关闭的级联效应被多次关联** — [#4602](https://github.com/github/copilot-cli/issues/4602) 明确指出 store_memory、MCP 剥离、`/allow-all` 丢失是同一根因的不同症状；近期 [#4900](https://github.com/github/copilot-cli/issues/4900) 的 config.json 覆写进一步暴露该面缺乏合并语义。
3. **BYOK / 自定义模型仍属"半成品"** — Deepseek 自定义工具类型不识别 ([#4840](https://github.com/github/copilot-cli/issues/4840))、自定义端点压缩不兼容 ([#4646](https://github.com/github/copilot-cli/issues/4646))、BYOK thinking 不显示 ([#3736](https://github.com/github/copilot-cli/issues/3736))，[#4003](https://github.com/github/copilot-cli/issues/4003) 的"对齐 VS Code"诉求已挂起 2 个月。
4. **认证/会话生命周期脆弱** — 长进程 token 不刷新 ([#4929](https://github.com/github/copilot-cli/issues/4929))、并发 OAuth refresh 互杀 ([#3456](https://github.com/github/copilot-cli/issues/3456))、extension 重连清空 hook 处理器 ([#4590](https://github.com/github/copilot-cli/issues/4590))，多扩展/多 SSO 场景仍是高风险区。
5. **新模型能力描述与运行时不一致** — [#4927](https://github.com/github/copilot-cli/issues/4927) 揭示 catalog 中 token 价格层与能力声明出现 17% 偏差，影响上下文管理决策，开发者期待 CLI 端做更严格的一致性校验。
6. **AutoPilot 模式缺少"人在回路"机制** — [#3595](https://github.com/github/copilot-cli/issues/3595) 持续收到关注，社区普遍期望 auto 模式下保留显式确认钩子，而非全自动选择首个推荐。

---

*日报基于 github.com/github/copilot-cli 在 2026-09-23 的公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-23**

---

## 📌 今日速览

今天 Kimi CLI 仓库迎来重要节点：**1.52.0 版本发布，Python 版 kimi-cli 正式转为"迁移引导器"**，引导用户过渡到 TypeScript 重写的 Kimi Code CLI。与此同时，仓库例行依赖批量升级（FastAPI、Rich、Ruff、agent-client-protocol），另有 1 个 CJK 输入法兼容性 Bug 被修复。整体节奏是"平稳收尾 + 生态迁移"。

---

## 🚀 版本发布

### v1.52.0（2026-09-22）
- **核心变更**：`kimi-cli`（Python 包）已归档，包入口被改造为指向新 Kimi Code CLI（TypeScript）的安装引导路径。用户通过 `uv tool install kimi-cli` 会被引导至后续版本。
- **配套**：[PR #2659](https://github.com/MoonshotAI/kimi-cli/pull/2659) 已归档主仓并对 PyPI 上的 `kimi-code` 包做墓碑化处理。
- **开发者影响**：Python 用户需迁移至 TS 版本，建议关注官方迁移文档与新版 CLI 的 API 差异。

🔗 [Release 1.52.0](https://github.com/MoonshotAI/kimi-cli/releases/tag/1.52.0)

---

## 🐛 社区热点 Issues

> 说明：过去 24 小时内仅 1 条 Issue 更新，日报如实呈现。

### [#2336 【Bug】内存压力下会话损坏：恢复时丢失对话 + tool_call 返回 400](https://github.com/MoonshotAI/kimi-cli/issues/2336) — `OPEN`
- **环境**：v1.43.0 / Kimi Code / kimi-for-coding / Linux 6.8.0-111
- **重要性**：这是一个**会话持久化与恢复链路的严重可靠性问题**——在内存压力下不仅会话内容丢失，恢复后还会触发 400 tool_call 错误，意味着用户代码上下文可能被破坏。属于影响"长任务可靠性"的高优问题。
- **社区反应**：👍 0 / 💬 2（处于观察初期）
- **建议关注**：若你是 Kimi Code 长会话用户，建议回退到更稳定版本或密切跟踪修复进展。

---

## 🔧 重要 PR 进展

### 功能与修复类

#### [#2667 【Web】修复 CJK IME 在 Enter 提交时的误触发](https://github.com/MoonshotAI/kimi-cli/pull/2667) — `CLOSED ✅`
- WebKit 在 IME 组字过程中会发出 `keyCode === 229` 的 Enter 事件，原代码可能提交不完整文本。
- 在现有提交边界增加 WebKit 兼容守卫，修复 CJK 用户在 Web 端输入时的"误提交"问题。
- **意义**：中文/日韩用户的高频痛点，得到闭环处理。

#### [#2656 【LLM】为 OpenCode Go 主机发送 `x-opencode-session` 头](https://github.com/MoonshotAI/kimi-cli/pull/2656) — `OPEN`
- 解决 [Issue #2653](https://github.com/MoonshotAI/kimi-cli/issues/2653)：OpenCode Go 官方主机要求稳定的 session 头，否则返回 HTTP 400。
- 自动识别 `opencode.ai / *.opencode.ai` 主机，并在 `openai_legacy` 通道上携带当前 Kimi session id。
- **意义**：跨平台/多厂商 LLM 兼容性的持续打磨，提升稳定性。

#### [#2666 【CLI】入口短路至 Kimi Code 安装器](https://github.com/MoonshotAI/kimi-cli/pull/2666) — `CLOSED ✅`（并入 v1.52.0）
- Python 入口被改造为迁移路径，与 #2659 仓库归档配套。
- **意义**：版本生态切换的"开关" PR。

### 依赖升级类

| PR | 依赖 | 变更 | 状态 |
|---|---|---|---|
| [#2664](https://github.com/MoonshotAI/kimi-cli/pull/2664) | agent-client-protocol | 0.8.0 → 0.12.1 | OPEN |
| [#2662](https://github.com/MoonshotAI/kimi-cli/pull/2662) | fastapi | 0.128.0 → 0.141.1 | OPEN |
| [#2663](https://github.com/MoonshotAI/kimi-cli/pull/2663) | rich | 14.2.0 → 15.0.0 | OPEN |
| [#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665) | ruff | 0.14.14 → 0.16.8 | OPEN |
| [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) | ruff | 0.14.14 → 0.15.0 | OPEN |

> ⚠️ 注意：[#2665](https://github.com/MoonshotAI/kimi-cli/pull/2665) 与 [#884](https://github.com/MoonshotAI/kimi-cli/pull/884) 目标版本不一致，建议合并为单一 PR 避免冲突。

---

## 📈 功能需求趋势

由于今日活跃 Issue 数量极少（仅 1 条），趋势信号主要从 PR 与历史 Issue 中提炼：

1. **🔄 平台/生态迁移体验**（最强信号）
   - Python → TypeScript 的过渡：入口短路、PyPI 墓碑化、文档引导，反映社区正处于"工具链大版本切换"窗口。

2. **🌏 国际化与输入体验**
   - CJK IME 误提交修复（#2667）显示中文/日韩用户对 Web 端体验的高敏感度。

3. **🔌 多 LLM 后端兼容**
   - OpenCode Go session 头修复（#2656）表明 Kimi Code 正在以"openai_legacy / 第三方代理"模式拓展兼容性边界。

4. **🧱 协议层稳定化**
   - `agent-client-protocol` 大跨度升级（0.8 → 0.12），预示 ACP 协议规范正在快速演进。

---

## 💡 开发者关注点

基于今日数据可观察到的痛点与高频需求：

| 关注点 | 表现 |
|---|---|
| **🔁 迁移成本** | 1.52.0 把 Python 包替换为"安装引导器"，原有脚本/工作流可能 break，开发者需评估 TS CLI 是否对个人工作流保持兼容。 |
| **💾 会话持久化可靠性** | Issue #2336 暴露"内存压力下会话损坏 + tool_call 400"，影响长任务稳定性，是当前最值得追踪的 Bug。 |
| **🌐 CJK 输入体验** | WebKit IME 误提交是中文用户的真实痛点，已被修复，但建议关注是否有回归。 |
| **🧹 依赖治理** | Ruff 出现两个目标版本不一致的 PR（#884 vs #2665），以及多项 major bump（Rich 14→15、FastAPI 0.128→0.141），升级前应重点测试。 |
| **🤝 第三方 LLM 接入** | OpenCode 兼容补丁说明开发者把 Kimi Code 当作"通用客户端"在用，跨厂商互通是真实需求。 |

---

*报告生成时间：2026-09-23 · 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-23**

---

## 1. 今日速览

过去 24 小时内 OpenCode 仓库无新版本发布，但社区维护活动密集——50 条 Issue 被集中处理（多数已关闭），同时新增/更新 50 个 PR，重点集中在 **多 Provider 兼容性修复（AI SDK V2、OpenAI 兼容流式响应、Kimi/OpenRouter）**、**后台 Subagent 行为修复** 以及 **TUI 渲染与 Codemode 解释器一致性** 等方面。值得关注的是仓库当前处于 **2.0 迭代窗口期**，大量 V2 路径下的会话、权限、子任务调度问题集中暴露。

---

## 2. 版本发布

无新版本发布。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论/👍 | 关键看点 |
|---|---|---|---|---|
| [#10119](https://github.com/anomalyco/opencode/issues/10119) | VSCode 扩展 "no data provider registered" | CLOSED | 23 / 17 👍 | 长期高赞问题，新版 VSCode 扩展（0.1.1）首屏崩溃，社区反映强烈 |
| [#25130](https://github.com/anomalyco/opencode/issues/25130) | Big Pickle 响应跳转到其他语言 | CLOSED | 11 | Big Pickle 模型行为异常，跨语言输出干扰 |
| [#6479](https://github.com/anomalyco/opencode/issues/6479) | opencode 向上层目录读取 agents.md | CLOSED | 11 | 影响范围大的配置文件搜索行为问题 |
| [#29757](https://github.com/anomalyco/opencode/issues/29757) | Qwen 输出 JSON 而非写入磁盘 | CLOSED | 10 / 2 👍 | 本地模型（Ollama + Qwen2.5-code）的工具调用链路问题 |
| [#36117](https://github.com/anomalyco/opencode/issues/36117) | 服务重启后模型/Provider 列表读取不完整 | OPEN | 5 | V2 路径下 catalog readiness 竞争条件，影响 TUI 启动 |
| [#38378](https://github.com/anomalyco/opencode/issues/38378) | Kimi-K3 /v1/messages 端点失败 | CLOSED | 5 | OpenCode Go 网关下 Anthropic 兼容路径问题，影响国产模型接入 |
| [#21277](https://github.com/anomalyco/opencode/issues/21277) | Windows PowerShell 崩溃后留下 ANSI 转义序列 | CLOSED | 5 | Windows 终端状态恢复问题 |
| [#38770](https://github.com/anomalyco/opencode/issues/38770) | 后台 Subagent 通知静默重置模型选择 | CLOSED | 4 | 实验性后台 Subagent 标志开启后的会话状态污染 |
| [#31219](https://github.com/anomalyco/opencode/issues/31219) | 后台 hook 的 stderr 绘入输入框 | CLOSED | 4 / 3 👍 | TUI 重绘时序缺陷 |
| [#50314](https://github.com/anomalyco/opencode/issues/50314) | openai-compatible 流式解码遇到 `data: null` 中止整轮 | CLOSED | 3 / 1 👍 | 已被 PR #50793 修复，是 Proxy 场景的常见陷阱 |

> 备注：#38771（Session 关闭/删除崩溃）、#38756（提交任务秒级崩溃）、#38738/#38739（serve 监听错误诊断）、#38780（OneDrive 路径下 GUI 不可见）同属 V2 会话/服务稳定性的关联问题，均已关闭。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#50774](https://github.com/anomalyco/opencode/pull/50774) | 前台任务找不到后台 Job 时失败而非误报完成 | CLOSED | 修复 BackgroundJob 注册表丢失场景下的 TaskTool 行为，闭环 #50764 |
| [#50801](https://github.com/anomalyco/opencode/pull/50801) | UI 支持逗号分隔的多字体族 | OPEN | 字体配置从单 family 升级为 CSS-style 列表，闭环 #48259 |
| [#50798](https://github.com/anomalyco/opencode/pull/50798) | V2 Subagents Tab 显示实际生效的模型与变体 | OPEN | 解决子代理面板信息缺失，闭环 #50795 |
| [#50776](https://github.com/anomalyco/opencode/pull/50776) | 工具结果内容格式异常时降级处理 | OPEN | 防止 `unsupportedParts`/`boundImages` 解析崩溃，闭环 #50775 |
| [#50802](https://github.com/anomalyco/opencode/pull/50802) | Codemode 解释器 match/search/参数绑定对齐 JS | OPEN | 三处与原生 JS 行为对齐 |
| [#50791](https://github.com/anomalyco/opencode/pull/50791) | Codemode 增加 Tagged Templates 与 String.raw | CLOSED | 此前会报 `Syntax 'TaggedTemplateExpression' is not supported` |
| [#50793](https://github.com/anomalyco/opencode/pull/50793) | SSE 解码忽略裸 `data: null` 帧 | CLOSED | 直接闭环 #50314，是当日最值得关注的稳定性修复 |
| [#50620](https://github.com/anomalyco/opencode/pull/50620) | opencode mini 恢复共享模型偏好 | OPEN | 修复 TUI 模型状态丢失，闭环 #50376 |
| [#50797](https://github.com/anomalyco/opencode/pull/50797) | 保留 AI SDK V2 Provider 的 usage 与 finishReason | OPEN | 影响 token 计费与自动上下文压缩，闭环 #50338 |
| [#50787](https://github.com/anomalyco/opencode/pull/50787) | 向 TUI 插件暴露 prompt 阶段的模型/Agent 选择 | OPEN | 状态栏插件可读取客户端真实选择，闭环 #50315 |

其它重要但快速合并的 PR：#50788（API 错误改为抛 Error 实例）、#50789（Codemode 文档勘误）、#50790（项目按最近活跃排序）、#50685（AI SDK 文本/推理片段边界归一化）、#50783（CLI/TUI 错误消息统一显示）、#50372（OpenTUI 0.4.5 → 0.5.10 升级）。

---

## 5. 功能需求趋势

| 方向 | 代表性 Issue | 趋势解读 |
|---|---|---|
| **IDE 集成（VSCode 扩展）** | #10119 | 0.1.1 首发即有 23 评论/17 👍，说明 VSCode 集成是社区最强诉求，但稳定性仍待打磨 |
| **多 Provider/AI SDK V2 兼容** | #38378、#29757、#50314、#24636、#50598、#50739 | 同时涉及 Kimi、Qwen、OpenRouter、Crof AI 等，说明 OpenCode 正加速向"统一网关"演进 |
| **会话/项目管理** | #38525、#38699、#38771、#38780、#50790（PR） | 项目分类、命名、排序、删除是 GUI 体验最大短板 |
| **后台 Subagent & 自动化研究** | #38770、#35496、#50774（PR）、#50798（PR） | 实验性后台 Subagent 引发连锁问题，但 `autoresearch` 模式呼声较高 |
| **Codemode 解释器完善** | #50791、#50789、#50802、#50776 | 与原生 JS 语义的差距是 Codemode 走向生产化的关键 |
| **TUI/CLI 健壮性** | #21277、#31219、#38738、#38739、#50372（PR） | Windows、ANSI、错误信息展示、渲染器升级是日常体验的痛点 |
| **AI SDK V2 流式协议细节** | #50793、#50797、#50796、#50685 | 用量统计、压缩预检、片段边界统一化是 V2 接入的"隐形基础设施" |

---

## 6. 开发者关注点

1. **崩溃/稳定性压倒一切**：50 条活跃 Issue 中相当比例与崩溃或渲染异常相关（#38756、#38771、#21277、#31219、#50776、#50739），开发者对"提交任务秒崩"、"会话无法关闭"、"终端留下 ANSI"等问题的容忍度较低。
2. **错误信息可观测性不足**：#38738/#38739 反映 `opencode serve` 把 errno 折叠为 `Unexpected error`，类似诉求在 #50314（流式解码）、#50783（API 错误显示）、#50788（Error 实例化）中持续出现——开发者期望 **更结构化、可分类、可捕获** 的错误链路。
3. **AI SDK V2 迁移阵痛**：#36117、#50598、#50739、#50797、#50796、#50685、#50268 都直指 V2 runner、AI SDK V2 Provider、权限前缘（frontmatter）——这是一次较深度的协议层重构，2.0 升级窗口需重点关注。
4. **模型选择/状态丢失**：#38770、#50769、#50620 显示"模型被自动改写"是高频痛点；开发者希望"明确选择 ≠ 隐式回退"。
5. **多 Provider 国产化**：Kimi、Qwen、DeepSeek、Big Pickle、Crof AI 等国产/本地模型接入与稳定性，是社区最实质的"新模型支持"诉求，远超纯英文社区的增量功能呼声。
6. **GUI 项目组织能力**：#38525 与 #38699 提示，开发者认为当前扁平历史 + 项目层级缺失严重制约多任务切换，希望对齐 Claude Desktop / Codex 的项目→对话模型。

---

*报告基于 anomalyco/opencode 仓库 2026-09-23 数据自动生成*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-23

> 数据来源：github.com/badlogic/pi-mono（earendil-works/pi）

---

## 📌 今日速览

**v0.87.1 版本发布**，正式接入 Claude Opus 5.5、GPT-6 Sol/Luna 等前沿模型，并将 Grok 4.7 设为默认。社区同步迎来 0.86.x 系列的回归问题集中爆发期：LiteLLM 兼容层中流错误、RPC steer 无法关联扩展输入等高频问题被多名用户报告，同时前端性能、Provider 元数据、Anthropic thinking 配置等多个方向都在当日被快速修复关闭。

---

## 🚀 版本发布

### v0.87.1

**新功能**
- **前沿模型支持**：通过 GitHub Copilot 等支持的 Provider，可使用 Claude Opus 5.5、GPT-6 Sol、GPT-6 Luna。详见 [Choose a Model](https://github.com/earendil-works/pi/blob/v0.87.1/packages/coding-agent/docs/models.md#select-a-model)。
- **Grok 4.7 成为默认模型**。

版本链接：https://github.com/earendil-works/pi/releases/tag/v0.87.1

---

## 🔥 社区热点 Issues

> 按 24 小时评论数与影响范围排序

### 1. [#7885](https://github.com/earendil-works/pi/issues/7885) npm 搜索未索引新发布的 pi-packages
- **状态**：CLOSED · 💬13
- 用户发布 `pi-affix-prompt` 后，`npm search` 始终返回空，导致 pi.dev/packages 画廊永远搜不到新包（自 8 月 4 日起无新增名称）。属于生态基础设施问题，直接影响包分发渠道。

### 2. [#8684](https://github.com/earendil-works/pi/issues/8684) `PI_OFFLINE` 静默禁用所有 Provider 模型发现
- **状态**：CLOSED · 💬12
- 文档承诺 `PI_OFFLINE` 仅禁用启动网络操作，实则禁用整会话内 Provider 模型目录发现，属于"文档与行为不一致"的隐蔽坑点，对离线/受限网络用户影响显著。

### 3. [#9843](https://github.com/earendil-works/pi/issues/9843) 0.86.x 在 LiteLLM 代理下中流 `APIConnectionError` 回归
- **状态**：OPEN · 💬10
- 自 0.85.1 升级到 0.86.1 后，TUI/Pendant 在长请求场景下报 OpenAI `Internal server error`。影响 OpenAI 兼容层全部 LiteLLM 用户，复现路径明确，是 0.86 系列关键稳定性问题。

### 4. [#9052](https://github.com/earendil-works/pi/issues/9052) 全屏模式下滚轮滚动速度仅为普通模式 1/3
- **状态**：CLOSED · 💬10 · 👍6
- 用户期待全屏模式"输入框固定在底部"的体验，却被滚动迟滞劝退。修复获 6 票，是 UI 体验向最受关注的诉求之一。

### 5. [#9803](https://github.com/earendil-works/pi/issues/9803) 0.86.0 RPC steer 成功无法关联扩展输入
- **状态**：OPEN · 💬10
- RPC 客户端无法可靠区分"steer A 已处理"与"steer B 已被排队"，直接影响外接 RPC 驱动型桌面集成的可靠性。

### 6. [#9549](https://github.com/earendil-works/pi/issues/9549) 大会话下全屏重渲染每帧重发整段 transcript
- **状态**：OPEN · 💬7
- Windows + 双核环境下，大会话每次调整窗口大小都触发整段 transcript 重绘，单核饱和。属于低资源机器的性能硬伤。

### 7. [#9652](https://github.com/earendil-works/pi/issues/9652) Compaction 因转录思考块被 Claude Fable 拒绝
- **状态**：CLOSED · 💬7
- `/compact` 在 `claude-fable-5` 上失败：Anthropic reasoning_extraction 把转录的思考块当作安全违规拒绝。已通过 [#9908](https://github.com/earendil-works/pi/pull/9908) 修复。

### 8. [#9884](https://github.com/earendil-works/pi/issues/9884) 启动时配置默认模型被 fallback 替换
- **状态**：OPEN · 💬4
- `defaultProvider/defaultModel` 指向扩展注册的模型时，4/20 次启动会被运行时发现的 fallback 模型覆盖，首选配置不可靠。

### 9. [#9690](https://github.com/earendil-works/pi/issues/9690) OpenCode Zen 拒绝 Pi 会话 ID（403）
- **状态**：CLOSED（no-action）· 💬6
- Pi 生成的 session id 不被 OpenCode 识别，需借助 OpenCode 自有会话方式绕过。

### 10. [#9787](https://github.com/earendil-works/pi/issues/9787) SDK 嵌入宿主时 undici 被覆盖
- **状态**：OPEN · 💬2
- 0.86.0 起 `import` 编码代理 SDK 会把嵌套 undici 作为进程全局 dispatcher 注入，导致 Fastify 等宿主中 `fetch` abort/streaming 行为异常，影响嵌入式集成。

---

## 🛠 重要 PR 进展

### 1. [#9934](https://github.com/earendil-works/pi/pull/9934) 新增 Yolo-Auto Provider 与按套餐自动发现
- 状态：CLOSED
- 内置 OpenAI 兼容订阅网关，`/v1/models` 按套餐自动过滤（返回 `qwen3.8-flash / yolo / yolo-small`），扩展内置 Provider 生态。

### 2. [#9908](https://github.com/earendil-works/pi/pull/9908) 修复 Fable 拆分轮总结拒绝（Fixes #9652）
- 状态：CLOSED
- 将对话内容与指令分离，并以"继续式"措辞替换前缀/后缀措辞，缓解 Anthropic reasoning 拒绝 `/compact` 的问题。

### 3. [#9926](https://github.com/earendil-works/pi/pull/9926) Provider 支持自定义展示名
- 状态：CLOSED
- `models.json` 中可配置 `providers[name]`，TUI 状态栏显示更友好的名字而非 Key。

### 4. [#9920](https://github.com/earendil-works/pi/pull/9920) 修复 Codex 重放空签名最终回答（Fixes #9918）
- 状态：CLOSED
- Codex 在 reasoning/tool 旁附带空签名最终消息时，避免其污染后续 replay，清理孤立 reasoning 与 WebSocket continuation 状态。

### 5. [#9921](https://github.com/earendil-works/pi/pull/9921) 新增 `enableShareCommand` 设置
- 状态：CLOSED
- 默认 `true`，项目/agent 设置中可设 `false` 完全禁用 `/share`，对数据敏感的用户/团队友好。

### 6. [#9924](https://github.com/earendil-works/pi/pull/9924) `showHardwareCursor=true` 不再渲染假光标
- 状态：CLOSED
- 尊重 kitty 等终端的 `cursor_shape beam` 设置，告别 TUI 中常见的双层光标问题。

### 7. [#9916](https://github.com/earendil-works/pi/pull/9916) Claude Code 版本升级到 2.1.280
- 状态：CLOSED
- Opus 5.5 要求最低 2.1.280，与 v0.87.1 模型升级保持一致。

### 8. [#9914](https://github.com/earendil-works/pi/pull/9914) 支持移除"相对本地路径"配置的包
- 状态：CLOSED
- `package remove` 此前无法处理 `git/github.com/user/repo` 这类相对本地路径形式，补齐 `normalizePackageSourceForSettings` 写入路径的可移除性。

### 9. [#9902](https://github.com/earendil-works/pi/pull/9902) 切换模型时保留手动思考级别
- 状态：OPEN
- 修复切换模型后用户的 `thinkingLevel` 被全局默认值覆盖；当目标模型等级更高时自动降级以适应上限。

### 10. [#9898](https://github.com/earendil-works/pi/pull/9898) 文档大规模刷新（closes #8684/#8717/#9205/#9358/#9808）
- 状态：CLOSED
- 集中关闭"文档与行为不符"系列 Issue，使文档同时适合用户和 Agent 当上下文消费；附带 13/15 文档评测通过。

---

## 📈 功能需求趋势

| 方向 | 代表 Issues | 趋势解读 |
| --- | --- | --- |
| **前沿模型支持** | v0.87.1 + #9916 | Claude Opus 5.5、GPT-6 已是刚需，版本升级正追求与上游模型同步。 |
| **Provider/插件生态** | #9934、#9926、#9884、#9885 | 自定义 Provider、扩展注册模型、自动发现成为新的核心能力。 |
| **RPC/SDK 嵌入式集成** | #9803、#9787、#9901、#9784 | 扩展 API 暴露 provider stream events、商用 Provider 字段是呼声最高的扩展点。 |
| **性能与 TUI 渲染** | #9549、#9052、#9924 | 全屏模式、硬件光标、大会话重渲染是体验短板。 |
| **思考 / Compaction 能力** | #9652、#9905、#9904、#4129 | `/compact` 策略、Anthropic thinking.display、基于比例的压缩阈值是活跃话题。 |
| **包/扩展管理 UX** | #7885、#9808、#9874、#5024、#9914 | 安装/卸载/正则匹配/打包发布全链路仍有不少摩擦。 |

---

## 🧑‍💻 开发者关注点

1. **回归稳定性是首要痛点**  
   0.86.0 引入了多项用户感知明显的回归（LiteLLM 中流错误、RPC steer 关联丢失、Undici 全局注入）。开发者希望"升级要安全"，期望更清晰的 CHANGELOG 与可选 minor 锁版本机制。

2. **"Provider 注册"才是事实上的扩展点**  
   越来越多需求是"让扩展注册模型"和"在响应里拿回 Provider 私有字段"——例如 #9884 的 startup fallback、#9784 的 Extension API 元信息、#9901 的 stream 事件透出，说明 Pi 正在快速演化为多 Provider 联邦，而 API 层面仍在追赶。

3. **文档就是产品**  
   一次 PR（#9898）集中关闭 5 个"文档与代码不符"问题，反映开发者反复踩坑源于文档陈旧（`PI_OFFLINE`、`get_commands` 字段、`--no-extension` 拼写、glob 语义等）。后续需把"文档评估"纳入 CI。

4. **嵌入式与受限网络场景被低估**  
   Fastify 等宿主中 undici 被覆盖、`PI_OFFLINE` 实际波及模型目录，让"程序化 / 网络受限"两类用户感到薄弱，是下一阶段需要重点打磨的边界。

5. **思考 / Compaction 是个未完结的工程**  
   Anthropic thinking.display 写死、Claude Fable 拒绝转录块、固定 `reserveTokens` 难以表达比例阈值等问题表明，"长上下文压缩" 仍是 open-ended 的方向，PR #9902 与 #9904 已在尝试解耦。

---

*日报由社区活动数据自动汇总。如需进一步聚焦某一方向（例如 Provider 生态或 TUI 性能），请告诉我具体主题。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-23

## 📌 今日速览

Qwen Code 在过去 24 小时内连续发布了 **v0.24.5-preview.0、v0.24.4、两个 nightly 版本以及 Desktop v0.24.4**，迭代节奏密集。本期社区讨论最热烈的方向集中在 **Managed Agent 架构设计、Linux/WSL 剪贴板粘贴体验、ACP/Web Shell 多工作区管理**三大主题；同时围绕 `git commit --amend` 会话豁免机制修复、MCP 大图传输以及终端视图（VP）渲染问题形成了一系列高频 bug 反馈。

---

## 🚀 版本发布

### v0.24.4（稳定版）

无破坏性变更（No known breaking changes），主要更新：

- **Feature**：`feat(core): add monitor tool to system prompt guidance` ([#12408](https://github.com/QwenLM/qwen-code/pull/12408)) — 由 @yilian 提交，在系统提示中引入 monitor 工具指引。
- **Bugfix**：`fix(core,docs): correct what the deferred-tool bridge made stale or untested` ([#12355](https://github.com/QwenLM/qwen-code/pull/12355)) — 修复 deferred-tool bridge 导致的文档陈旧/未覆盖问题。

### v0.24.5-preview.0

预发布版本，主要包含上述同一批 fix/docs 更新（[#12355](https://github.com/QwenLM/qwen-code/pull/12355) 及计划文档记录）。

### Desktop v0.24.4

桌面端同步更新，包含：

- `fix(review): keep unplanned chunks out of coverage, and read the denominator from the plan` ([#12370](https://github.com/QwenLM/qwen-code/pull/12370)) — 修复 review 覆盖率统计异常。
- 同步上游 v0.24.4 的功能与修复。

### Nightly 版本

- `v0.24.4-nightly.20260922.99bf4ce86b` — 集成 #12355 系列修复
- `v0.24.3-nightly.20260922.c5920f479b` — 包含 monitor 工具提示 (#12408) 以及 `feat(daemon): Add batched workspaces` 等功能预览

---

## 🔥 社区热点 Issues

### 1. [#12380 - proposal(serve): Define Managed Agent dual-path architecture](https://github.com/QwenLM/qwen-code/issues/12380)
**作者**：doudouOUC ｜ **评论**：10
定义 Managed Agent 的双路径与分阶段交付架构：在不改变现有 TS Agent 循环的前提下，将模型推理与工具环境供给解耦，并为 Session 引入持久化所有权、Workspace 绑定、可恢复的工具执行及稳定的 WebSocket 连接。**重要性**：这是 Qwen Code 多 Agent 平台的顶层架构提案，社区关注度最高，直接关联 PR [#12358](#pr12358)。

### 2. [#12449 - TUI eats one transcript line per rows-only shrink](https://github.com/QwenLM/qwen-code/issues/12449)
**作者**：SnowCore8 ｜ **评论**：10
在 `ui.useTerminalBuffer: false`（append-only Static）路径下，终端只缩行不重绘时会出现"吃掉一行转写内容"的稳定复现问题（mobile soft keyboard / Termux 场景）。**重要性**：直接影响手机端与 Termux 用户，与 PR [#9305](#pr9305) 的 VP 底部对齐修复同属一类渲染层问题。

### 3. [#12053 - Slim the Goal runtime](https://github.com/QwenLM/qwen-code/issues/12053)
**作者**：qqqys ｜ **评论**：8
两个 `/goal-draft` 会话在单个 Goal turn 内用约 100 次工具调用完成全部任务，表明现有 evidence catalog + checkpoint 机制过度复杂。**重要性**：推动 Goal runtime 简化为"基于当轮证据判断完成度"，属于已关闭但仍处讨论的架构优化议题。

### 4. [#12425 - workflow keyword bridge sentence names hidden tools](https://github.com/QwenLM/qwen-code/issues/12425)
**作者**：yiliang114 ｜ **评论**：8
在 `ToolMode.CodeModeOnly` 下，bundled-reference route resolver 会引用被隐藏的 bridge 工具名称（`tool_search`、`tool_call`），引发不一致。**重要性**：典型的工具模式兼容性问题，与 PR [#12355](https://github.com/QwenLM/qwen-code/pull/12355) 协同修复。

### 5. [#12417 - tracking(cli): Follow up tool execution sandbox settings hardening](https://github.com/QwenLM/qwen-code/issues/12417)
**作者**：doudouOUC ｜ **评论**：7
PR [#12267](https://github.com/QwenLM/qwen-code/pull/12267) 将 Linux bubblewrap 从 CLI 整体隔离下沉到单次工具执行，经过约 5 轮 review 后需要继续加固 sandbox 设置。**重要性**：安全方向高优跟踪项，社区对权限边界审查严格。

### 6. [#12381 - feat(daemon): recover session-create result after HTTP gateway timeout](https://github.com/QwenLM/qwen-code/issues/12381)
**作者**：samuelhsin ｜ **评论**：7
`POST /session` 在网关超时的情况下客户端拿不到 session ID，无法安全提交首个 prompt 或重试创建。**重要性**：是 Web Shell/SDK 模式下高优先 session-management roadmap 项。

### 7. [#12488 - Clipboard paste silently fails on Linux/WSL](https://github.com/QwenLM/qwen-code/issues/12488)
**作者**：CNCSMonster ｜ **评论**：6
当 `wl-paste`/`xclip` 缺失时，`Ctrl+V` 完全静默失败，没有任何错误提示或降级。**重要性**：是本期"Linux 剪贴板"系列问题的源头 issue，催生了 #12489、#12504、#12505、#12503、PR [#12508](#pr12508) 等多个后续修复。

### 8. [#12164 - feat(live): Web Shell as browser Live Host for realtime voice](https://github.com/QwenLM/qwen-code/issues/12164)
**作者**：qqqys ｜ **评论**：5
让 Web Shell 自身作为 `qwen3.5-omni-plus-realtime` 浏览器音频端点，解除仅 Mac 原生客户端独占的限制。**重要性**：Live Voice 平台分发 roadmap，与多工作区/daemon 路由深度耦合。

### 9. [#12424 - bug(core): bundled-reference route ignores per-agent tool policy](https://github.com/QwenLM/qwen-code/issues/12424)
**作者**：yiliang114 ｜ **评论**：5
`resolveBundledReferenceRoute` 仅看 session 级输入，忽略 per-agent tool policy，导致被 skill 拒绝的子 agent 仍收到无法遵循的指针。**重要性**：subagents-tools roadmap 高优项，影响多 Agent 安全隔离。

### 10. [#11908 - ACP oversized notification tears down session](https://github.com/QwenLM/qwen-code/issues/11908)
**作者**：Harkanovac ｜ **评论**：5 ｜ **优先级**：P1
当 `available_commands_update` 通知超过 `MAX_JSON_NODES = 10000` 时，ACP bridge 将其判为 `ndjson_invalid_message`，`SIGKILL` 子进程并丢弃 session，后续请求全部 404。**重要性**：P1 核心稳定性问题，长期未关闭。

---

## 🔧 重要 PR 进展

<a id="pr9305"></a>
### 1. [#9305 - fix(ui): bottom-align short VP content](https://github.com/QwenLM/qwen-code/pull/9305)
**作者**：qwen-code-dev-bot
VP 模式下短内容顶部对齐导致 composer 与最后一条消息之间出现空白。改为底部对齐。修复 #9300，与 Issue [#12449](#issue12449) 同源。

<a id="pr12154"></a>
### 2. [#12154 - feat(web-shell): manage worktrees from git dialog](https://github.com/QwenLM/qwen-code/pull/12154)
**作者**：wenshao
Web Shell 的 git 对话框新增第四个标签页"Worktrees"，可列出每个 worktree 及其分支、HEAD、prunable 状态等徽章。

<a id="pr12258"></a>
### 3. [#12258 - fix(mcp): Support larger Apps, scoped tool calls and isolated origins](https://github.com/QwenLM/qwen-code/pull/12258)
**作者**：samuelhsin
远程 HTTPS 渲染器已在 `d6d532eb8b` 真实环境验证：scoped tool 调用、隔离 origin、更大应用支持等 MCP 客户端能力提升。

<a id="pr12183"></a>
### 4. [#12183 - feat(extensions): load deployment-managed extensions from a directory](https://github.com/QwenLM/qwen-code/pull/12183)
**作者**：jkxiao
新增 `--managed-extensions <root>`，从 root 的直接子目录中发现完整扩展并 in-place 读取 contribution，部署方可完全控制扩展内容。

### 5. [#12466 - feat(web-shell): inspect session tool calls by prompt](https://github.com/QwenLM/qwen-code/pull/12466)
**作者**：ytahdn
在 user message 上加入"按 prompt 关联工具调用"面板：本地化工具名、描述、状态、MCP 徽章、计时；支持 prompt 选择器、刷新、按工具类型筛选。

### 6. [#12434 - feat(web-shell): page back through earlier records in trajectory table](https://github.com/QwenLM/qwen-code/pull/12434) **(已合并)**
**作者**：qqqys
在 #12388 引入的 trajectory table 上增加"Load earlier records"控件，可逐页向前加载历史记录，保留当前阅读位置。

### 7. [#12487 - fix(release): keep manifest layout when bumping versions](https://github.com/QwenLM/qwen-code/pull/12487)
**作者**：yiliang114
`scripts/version.js` 在 bump 版本前快照所有 `package.json`，运行 `pnpm version` 后只覆写版本号字段，避免格式化被破坏。

### 8. [#12463 - fix(core): register session commits so the amend exemption is reachable](https://github.com/QwenLM/qwen-code/pull/12463)
**作者**：yiliang114
接入 `destructive-commands.ts` 中已有的 session-commit registry 三件套（register/dispose/getSessionCommitShas），修复 Issue [#12460](#issue12460) 提到的"Auto 模式下 `git commit --amend` 永远被拦截"问题。

### 9. [#12508 - fix(cli): report clipboard unavailability when the native module throws](https://github.com/QwenLM/qwen-code/pull/12508)
**作者**：yiliang114
`clipboardHasImage()` 当前只在 `!mod` 分支触发 `onUnavailable`。本 PR 让非 Linux 路径下的 `catch` 也走 `onUnavailable`，关闭 Issue [#12505](#issue12505) 中描述的"静默失败"路径。

### 10. [#12358 - feat(managed-agent): Add standalone managed agent stack](https://github.com/QwenLM/qwen-code/pull/12358)
**作者**：doudouOUC
Managed Agents 端到端预览：Harness 抽象、Java 控制面、session-scoped Tool Runtime、持久化 Managed Session 记录、Hosted Harness & Runtime Broker 契约以及独立 Spring Boot 守护。

---

## 📈 功能需求趋势

从近 24 小时更新的 50 条 Issue 中提炼社区最关注的几个方向：

### 1. 🤖 Managed Agent / 多 Agent 平台架构（热度最高）
- #12380、#12358、#11908、#12440、#12164
- 社区在系统性地讨论 TS Agent 循环、Java 控制面、Session 持久化、Workspace 绑定、Live Voice 在 Web Shell 的承载等顶层架构。
- **代表关键词**：`Managed Agent`、`ACP`、`session-management`、`multi-agent`、`Web Shell`、`Live Host`

### 2. 🔒 安全与沙箱加固
- #12417、#12460、#12471
- 工具执行 sandboxing、Auto 模式下 `git commit --amend` 豁免、MCP 大图内联安全边界等多个安全相关讨论同步升温。

### 3. 🖥️ Web Shell / Desktop 体验增强
- #12453（侧边栏图标对齐）、#11966（Desktop 工具块渲染空）、#12444（侧边栏置顶工作区，对应 PR #12452）、PR #12154（worktree 管理）、PR #12466（按 prompt 查看工具调用）
- 桌面/Web 端 UI 与导航体验是高频反馈领域。

### 4. 🐧 Linux/WSL 剪贴板与移动端 TUI
- #12488、#12489 → #12504、#12505、#12503、PR #12508
- 在 PR #12489 合并后又立刻被指出仍有遗漏路径，体现社区对"无反馈即错误"的强烈诉求。

### 5. ⚡ 长会话与上下文压缩
- #12257（本地 notes 压缩 + session history 恢复）、#12053（精简 Goal runtime）、#12472（skill listing 大小限制）
- 持续上下文/context-performance 是核心 roadmap 议题。

### 6. 🔌 MCP 客户端健壮性
- #12496（-32601 误判为传输错误）、#12471（100–128 MiB 图片被吞掉占位）、#12435（typo 静默）、PR #12258（更大 App）
- MCP 在多模型/多 Provider 场景下的错误归类、传输边界成为焦点。

---

## 👨‍💻 开发者关注点

1. **静默失败体验是头号痛点**
   Linux 剪贴板 [#12488](https://github.com/QwenLM/qwen-code/issues/12488)、LSP diagnostics [#12467](https://github.com/QwenLM/qwen-code/issues/12467)、`tools.eager` 拼写 [#12435](https://github.com/QwenLM/qwen-code/issues/12435) 都指向同一个诉求——**宁可显式失败也不要静默吞错**。多个 PR（#12489、#12508、#12435）专门为此补 callback 与告警路径。

2. **错误信息精度不足**
   开发者明显不满意通用化的报错字符串，例如 [#12504](https://github.com/QwenLM/qwen-code/issues/12504) 直接指出 "native clipboard module could not be loaded" 不能区分"工具未找到 / 工具查询失败 / native 模块抛错 / OpenTUI 渲染器"四种情形。

3. **配置层一致性受关注**
   - [#12435](https://github.com/QwenLM/qwen-code/issues/12435)：typo 配置静默激活 allowlist
   - [#12460](https://github.com/QwenLM/qwen-code/issues/12460)：`sessionCommitShas` 未被填充，Auto 模式豁免形同虚设
   - [#10745](https://github.com/QwenLM/qwen-code/issues/10745)：外部编辑器选项在未安装时仍展示
   反映出开发者对**配置 → 行为可观测性**的强诉求。

4. **移动端 / 终端软键盘体验**
   TUI 在 rows-only shrink 时丢行 [#12449](https://github.com/QwenLM/qwen-code/issues/12449)、Web Shell 软键盘下 composer 控件被遮挡（PR #12462）、bundled ink 7.0.3 落后于上游修复——移动端体验是从 PC 到手机迁移的明确短板。

5. **长会话工作流的"连续性"**
   [#12257](https://github.com/QwenLM/qwen-code/issues/12257) 提出"本地 notes + 会话 history 按

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报
**日期：2026-09-23**

---

## 1. 今日速览

项目经历重大品牌升级——**DeepSeek-TUI 正式更名为 Codewhale**（Shannon Labs 旗下产品），legacy `deepseek-tui` 包已弃用，v0.10.0 为更名后首个对外版本。今日社区聚焦于 **v0.9.14 重构冲刺**：MCP 客户端栈统一、巨型源文件拆分、运行时性能门禁缺失等结构性问题集中讨论；功能侧则有 Chromewhale 浏览器插件客户端、Yolo-Auto 兼容主机、ACP 会话运行时等多项新能力陆续落地。

---

## 2. 版本发布

### 🚢 v0.10.0

首个以 Codewhale 身份发布的稳定版本，明确以下变更：
- **命令行 / npm 包 / release-asset**：统一保留小写技术标识 `codewhale`
- **legacy 迁移**：旧 npm 包 `deepseek-tui` 不再发布；v0.8.x 旧 `deepseek` 用户需迁移到 `codewhale`
- **主仓库**：从 `Hmbown/DeepSeek-TUI` 迁移到 `Hmbown/Codewhale`

> 📌 引用："The legacy npm package `deepseek-tui` is deprecated and receives no further releases."

---

## 3. 社区热点 Issues

以下按评论活跃度与战略重要性排序，挑选 10 条最值得关注：

| # | 主题 | 评论 | 重要性 |
|---|------|------|--------|
| [#6011](https://github.com/Hmbown/Codewhale/issues/6011) | **TUI 用量与工具诊断**：按组件/模型的 token 核算、缓存命中率、per-tool 指标、压缩成本与工具调用错误模式 | 9 | ⭐⭐⭐ C11 核心执行单元，诊断与计费基础 |
| [#5586](https://github.com/Hmbown/Codewhale/issues/5586) | **巨型源文件拆分**：`lib.rs(18.7k) / config.rs(12.3k) / client.rs(11.1k) / runtime_threads.rs(9.3k)` | 8 | ⭐⭐⭐ C09 核心任务，可维护性瓶颈 |
| [#6050](https://github.com/Hmbown/Codewhale/issues/6050) | **可插拔 Agent 内存后端**：当前 `MemoryBackend` 仅 `Native/Off`，需引入 `Custom/External/MCP` 槽位 | 6 | ⭐⭐⭐ 长期记忆生态化必经之路 |
| [#6142](https://github.com/Hmbown/Codewhale/issues/6142) | **两套 MCP 客户端栈统一**：`tui/src/mcp`(13.2k) vs `crates/mcp`(4.5k)，共享同名模块 | 5 | ⭐⭐⭐ 0.9.14 重构核心债务 |
| [#2342](https://github.com/Hmbown/Codewhale/issues/2342) | **输出文件支持点击预览**（中文用户反馈） | 5 | ⭐⭐ 用户体验高频呼声 |
| [#6036](https://github.com/Hmbown/Codewhale/issues/6036) | **"Fleet" 与 "Agent" 概念重复**：数据层同时存在两个实体且互相同步，角色/模型书签混杂 | 5 | ⭐⭐ 数据模型设计缺陷 |
| [#4955](https://github.com/Hmbown/Codewhale/issues/4955) | **`--no-sandbox` 本地开发模式**：kernel-level Seatbelt 沙箱每日阻断基础 shell 命令 | 5+1👍 | ⭐⭐ 开发者日用痛点 |
| [#6086](https://github.com/Hmbown/Codewhale/issues/6086) | **Session 草稿本 + 三存储统一寻址**：workshop / scratchpad / Agent Mail 协同 | 4 | ⭐⭐ 创始人方向，外部记忆主线 |
| [#5915](https://github.com/Hmbown/Codewhale/issues/5915) | **Fleet 模型流程**：provider → model → 候选名单 → 角色分配 | 4 | ⭐⭐ 子代理模型治理 |
| [#5479](https://github.com/Hmbown/Codewhale/issues/5479) | **TUI 一级子代理/工作流视图**：实时列表、状态、耗时、token、聚焦、停止 | 3 | ⭐⭐ C01 核心任务 |

---

## 4. 重要 PR 进展

| PR | 主题 | 状态 |
|----|------|------|
| [#6408](https://github.com/Hmbown/Codewhale/pull/6408) | **feat(providers): 新增 Yolo-Auto 兼容主机** —— 扁平费率 OpenAI Chat Completions 网关，无需新增 `ProviderKind` | 🟢 OPEN |
| [#6407](https://github.com/Hmbown/Codewhale/pull/6407) | **Integration: 官网 wave 1 + 0.10.1 CI/自动化合并**（CSS 拆分、GPUI role tokens 等） | 🟢 OPEN |
| [#6406](https://github.com/Hmbown/Codewhale/pull/6406) | **fix(tui): 修复 resume/fork 重复创建 thread/session** —— `POST /v1/sessions/{id}/resume-thread` 不再无条件建新线程 | ✅ CLOSED |
| [#6404](https://github.com/Hmbown/Codewhale/pull/6404) | **fix(api): 暴露用户自定义 `[providers.<name>]` 路由给原生客户端** —— 修复原生选择器看不到用户路由的 bug | ✅ CLOSED |
| [#6405](https://github.com/Hmbown/Codewhale/pull/6405) | **feat(web): 将 docs/work 迁至字典骨架** —— i18n 架构与 docs/mcp、docs/subagents 对齐 | ✅ CLOSED |
| [#6398](https://github.com/Hmbown/Codewhale/pull/6398) | **feat(chrome): Chromewhale —— Manifest V3 侧边栏 Chrome 客户端**，赋予模型 5 种 tab 工具 | ✅ CLOSED |
| [#6400](https://github.com/Hmbown/Codewhale/pull/6400) | **fix(config): 摄取命名空间内的纯模型目录条目** —— 修复 `catalog.models` 不进选型列表的 bug | ✅ CLOSED |
| [#6402](https://github.com/Hmbown/Codewhale/pull/6402) | **refactor(tui): 移除未使用的 feature 阶段与 blanket allow** —— 删除 `Stage::Deprecated/Removed` 死代码 | ✅ CLOSED |
| [#6403](https://github.com/Hmbown/Codewhale/pull/6403) | **test(web): `isZh` 上限由 28 降至 18** —— 收紧国际化回归门禁 | ✅ CLOSED |
| [#6399](https://github.com/Hmbown/Codewhale/pull/6399) | **ci(contract): 重新锁定 runtime-contract 预算** —— 修复 `load_skill` eager 化带来的契约身份差异 | ✅ CLOSED |

> 另见 [#6392](https://github.com/Hmbown/Codewhale/pull/6392)：0.10.0 dogfooding 一次性合并 8 项修复，每项均带失败回归测试，被誉为本次最实用的 PR。

---

## 5. 功能需求趋势

综合全部 Issue，社区诉求集中在 **七大赛道**：

| 赛道 | 代表 Issue | 趋势强度 |
|------|-----------|---------|
| **🧠 外部记忆与 Agent 状态** | #6050、#6086、#5840 系列 | 🔥🔥🔥 长期记忆生态化是当前主线 |
| **🛠️ 多 Agent / Fleet 管理** | #6036、#5915、#5479 | 🔥🔥🔥 角色、模型、shortlist、实时面板四件套 |
| **🏗️ TUI 重构与架构清晰化** | #5586、#6142、#6143、#6148、#5580 | 🔥🔥🔥 0.9.14 重构季 |
| **🌐 新模型/新 Provider** | #6029、#6408（Yolo-Auto） | 🔥🔥 多上游厂商选择 |
| **📐 IDE 集成（ACP）** | #5835、#6160、#6325 | 🔥🔥 Zed/JetBrains/VSCode/Neovim |
| **⚡ 运行时性能门禁** | #6193、#5362、#6203 | 🔥🔥 AST 寻址编辑、bench 缺失 |
| **🌏 中文本地化与体验** | #2323（中文输入法）、#2342（文件点击预览）、#6401（zh-CN 文档） | 🔥🔥🔥 用户量大、呼声持续 |

---

## 6. 开发者关注点（痛点与高频需求）

从评论区与 Issue 摘要提炼的 **开发者真实声音**：

1. **沙箱过度防御 vs 本地开发的取舍**
   *"The kernel-level Seatbelt sandbox is breaking basic shell commands daily, and I've exhausted every workaround."* —— [#4955](https://github.com/Hmbown/Codewhale/issues/4955)
   开发者希望有 `--no-sandbox` 离线开关用于本机开发。

2. **中文输入法兼容性**
   输入拼音时不会被提示隐藏，且弹窗状态下输入字母会"穿透"到模型输入框——[#2323](https://github.com/Hmbown/Codewhale/issues/2323) 已两年未结，是中文用户最大痛点。

3. **代码"过于臃肿"**
   Founder 亲述 *"our code is getting rather chunky"* —— 多个 ~10k+ 行的 `lib.rs / config.rs / client.rs / event_loop.rs` 阻碍迭代效率。

4. **运行时性能无任何度量**
   *"`BUILD_PERFORMANCE.md` 覆盖构建速度，但无 `benches/`、无 criterion、无 iai、无预算常量、无 PR 慢化门禁"* —— [#6193](https://github.com/Hmbown/Codewhale/issues/6193)
   任何性能声称都无证据。

5. **概念重名 + 数据双写**
   *"'fleets' 和 'agents' 我也很困惑——我觉得这是个大问题"* —— [#6036](https://github.com/Hmbown/Codewhale/issues/6036)
   同一实体在数据层存了两份，角色与模型钉扎混在一起。

6. **MCP 协议滞后**
   服务端已协商 2026-07-28 修订版，客户端仍钉死 2024-11-05 且不读 `protocolVersion` —— [#6280](https://github.com/Hmbown/Codewhale/issues/6280)

7. **工具编辑失效的主因是"锚定"**
   `edit_file` 的 `old_string` 找不到/不唯一/格式漂移导致失败，每失败消耗一轮 + 重读 —— [#6203](https://github.com/Hmbown/Codewhale/issues/6203) 引入 `edit_symbol` 用符号寻址。

8. **品牌切换的余波**
   多处 issue 链接从 `DeepSeek-TUI` 跳到 `Codewhale`，用户与贡献者需要持续跟进文档/npm/CLI 三位一体的迁移。

---

> 📡 **日报小结**：今天最大的"新闻"是品牌升级而非新功能——v0.10.0 与 Codewhale 命名标志着项目正式独立。与此同时，开发团队正在并行两条战线：**一条是 0.9.14 的结构性清理**（MCP、Config、event_loop 三处巨文件），**另一条是 0.10 系列的新体验**（Chromewhale、ACP、Yolo-Auto、性能基准）。社区诉求最强烈的方向集中在"外部记忆 + 多代理治理 + 中文本地化"，建议关注后续这几个 Issue 号的 milestone 推移。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*