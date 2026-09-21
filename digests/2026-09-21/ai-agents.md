# OpenClaw 生态日报 2026-09-21

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-21 02:48 UTC

- [OpenClaw](https://github.com/openclaw/openclaw)
- [NanoBot](https://github.com/HKUDS/nanobot)
- [Hermes Agent](https://github.com/nousresearch/hermes-agent)
- [PicoClaw](https://github.com/sipeed/picoclaw)
- [NanoClaw](https://github.com/qwibitai/nanoclaw)
- [NullClaw](https://github.com/nullclaw/nullclaw)
- [IronClaw](https://github.com/nearai/ironclaw)
- [LobsterAI](https://github.com/netease-youdao/LobsterAI)
- [TinyClaw](https://github.com/TinyAGI/tinyagi)
- [Moltis](https://github.com/moltis-org/moltis)
- [CoPaw](https://github.com/agentscope-ai/CoPaw)
- [ZeptoClaw](https://github.com/qhkm/zeptoclaw)
- [ZeroClaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## OpenClaw 项目深度报告



---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析

**报告日期：2026-09-21**
**样本项目：NanoBot / Hermes Agent / PicoClaw / NanoClaw / NullClaw / IronClaw / LobsterAI / Moltis / CoPaw / ZeroClaw（共 10 个活跃项目，TinyClaw / ZeptoClaw / OpenClaw 数据静默或缺失）**

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态在 2026-09-21 呈现**"分层活跃 + 路线分化"**的整体态势：以 **NanoBot、ZeroClaw、CoPaw、LobsterAI** 为代表的少数头部项目进入**高频迭代周期**（单日 PR+Issue 总更新 ≥ 50 条），承担前沿能力探索与商业化试水；以 **NanoClaw、Hermes Agent** 为代表的中型项目处于**密集收尾期**（合并率 65–93%），专注修复 v2 改造遗留缺陷；以 **PicoClaw、NullClaw、IronClaw、Moltis** 为代表的小型项目活跃度偏低，依赖维护者或 Dependabot 维持基本节奏；**TinyClaw、ZeptoClaw** 当日无任何活动。今日生态内**仅有 2 个新版本发布**（LobsterAI 4 个、CoPaw 1 个），绝大多数项目处于"功能堆积-未发布"状态，提示 PR review 吞吐已成为通用瓶颈。社区关注焦点高度收敛于**Provider 协议层正确性、WebUI/桌面端体验、Memory 与上下文压缩、安全授权模型、商业化与多租户 Hub** 五大方向。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 合并/关闭 PR | OPEN PR 积压 | 新版本 | 健康度评级 | 关键信号 |
|---|---|---|---|---|---|---|---|
| **CoPaw** | 25 | 35 | 高（多关键修复已合并） | 中 | ✅ **v2.2.2-beta.3** | 🟢 高 | 多租户 Hub RFC（31 评论）+ Release Duty 安装校验 |
| **ZeroClaw** | 50 | 50 | 6（12%） | **44 条 🔴** | ❌ | 🟡 中高 | PR review 严重积压，安全类 PR 占比高 |
| **NanoBot** | 3 | 54 | 35（65%） | 19 条 | ❌ | 🟢 高 | Provider 生态扩张 + Agent Loop 重构 |
| **Hermes Agent** | 26 | 50 | 10（20%） | 40 条 | ❌ | 🟡 中 | Desktop SIGTRAP P1 无修复 + 插件系统治理 |
| **NanoClaw** | 1 | 41 | 38（92.7%） | 3 条 | ❌ | 🟢 高（合并率） | v2 遗留清理收尾，OpenCode 一等化 |
| **LobsterAI** | 3 | 14 | 7（50%） | 7 条 | ✅ **4 个版本/7 天** | 🟢 高 | 商业化（订阅+试用）+ WebAuthn + OpenClaw 兼容 |
| **PicoClaw** | 6 | 5 | 2（40%） | 3 条 stale | ❌ | 🟠 中低 | DingTalk panic 回归，stale 率高 |
| **IronClaw** | 0 | 8 | 3（含 dependabot） | 5 条 | ❌（RC 准备中） | 🟡 中 | 1.4.1-rc.1 发布在即，Bug 当日闭环 |
| **NullClaw** | 1 | 0 | 0 | — | ❌ | 🟠 低 | 唯一 Issue #1000 是错误信息可读性 enhancement |
| **Moltis** | 0 | 1 | 0 | 1 条 | ❌ | 🟠 低 | Tools 语义精确性修复待合并 |
| **TinyClaw** | 0 | 0 | 0 | — | ❌ | 🔴 静默 | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | — | ❌ | 🔴 静默 | 24h 无活动 |

**整体观察**：
- **合并率梯队**：NanoClaw（92.7%）> NanoBot（65%）> LobsterAI（50%）> ZeroClaw（12%）。合并率低的项目（ZeroClaw / Hermes）瓶颈在 review 吞吐，不在代码供给。
- **版本发布**：CoPaw（1）与 LobsterAI（4 个/7 天）是仅有的"持续发版"项目，其余项目**累积大量未发布修复**。
- **静默项目**：TinyClaw、ZeptoClaw 当日零活动，需关注是否进入维护期或停摆。

---

## 3. OpenClaw 在生态中的定位

> ⚠️ **数据说明**：今日 OpenClaw 仓库动态摘要为空（仅给出参考链接 github.com/openclaw/openclaw），无法基于今日数据直接对比。以下定位基于其下游生态（LobsterAI 持续将其升级至 v2026.8.1、NanoBot 引用其 WebUI 协议事件规范、CoPaw 沿用其 Provider 接入范式）的间接信号推断。

**OpenClaw 在本日生态中扮演"上游基座"角色**：

| 维度 | OpenClaw 的角色 | 证据 |
|---|---|---|
| **下游采用面** | 至少 3 个项目直接消费其版本/IPC/协议 | LobsterAI 9.14 升级至 OpenClaw v2026.8.1；NanoBot WebUI 协议复用 `/webui-thread` 事件规范；CoPaw Provider 路径沿用 OpenAI 兼容惯例 |
| **架构中心性** | 网关、Provider、WebUI 三层契约的事实标准 | LobsterAI 多 PR 围绕 "OpenClaw 兼容性修复 / schema 迁移 / 凭据迁移 / Windows 网关退出" 推进 |
| **商业化出口** | LobsterAI 以 OpenClaw 为内核叠加产品层（订阅、WebAuthn、能力市场） | #2720（订阅）+ #2726（能力市场）+ #2723（passkey） |
| **与同类差异** | 不参与 Provider 协议层修补竞赛（由 NanoBot 承担），不主导 RFC（由 ZeroClaw 承担），不追求 WebUI 视觉迭代（由 CoPaw/NanoBot 承担） | — |

**关键差异**：
- vs **NanoBot**：OpenClaw 是"被集成方"，NanoBot 是"协议修补与 Provider 扩张先锋"。
- vs **ZeroClaw**：OpenClaw 无 RFC 流程（设计由 maintainer 主导），ZeroClaw RFC 流程成熟（Top 30 几乎全部 accepted）。
- vs **Hermes Agent**：OpenClaw 是桌面端**使用者**（被 LobsterAI/CoPaw 桌面端调用），Hermes 自建 Electron 桌面且今日仍在处理 SIGTRAP P1 崩溃。

**社区规模对比**：基于下游消费密度判断，OpenClaw 是**本日生态中触达面最广的核心基座**，但**自身可见活跃度（PR/Issue 直接更新）最低**——这是一种典型的"上游基座 → 下游放大"模式。

---

## 4. 共同关注的技术方向

下表汇总跨项目涌现的高频诉求：

| 技术方向 | 涉及项目 | 共同诉求 | 代表性 Issue/PR |
|---|---|---|---|
| **Provider 协议层正确性** | NanoBot / NanoClaw / ZeroClaw / LobsterAI | SSE 流式事件处理（`response.reasoning_text.*`）、超时分类、OpenAI 兼容路由的 `chat_id` 串扰、Provider 恢复路径 | NanoBot #5833-#5834（reasoning 事件丢失）、#5769（NIM 超时）、#5838（chat_id 路由错乱） |
| **Memory / 上下文管理** | NanoBot / ZeroClaw / NanoClaw | API 上报 token vs 本地 tiktoken 偏差致压缩不触发；对话历史 ≠ 长期记忆；JSONL 全表扫描性能 | NanoBot #5403 P1（已开放 36 天）、ZeroClaw #6850（memory lifecycle/storage 解耦）、NanoClaw #5509（FTS5 镜像） |
| **OAuth / 凭据管理** | NanoBot / Hermes Agent / IronClaw / LobsterAI / PicoClaw | Web UI 配置 vs 环境变量优先级、OAuth 失败提示可执行化、Microsoft 委托 OAuth、PicoClaw OAuth scopes 修复 | NanoBot #5836 / #5609、IronClaw #8102、LobsterAI 9.15 xAI 凭据迁移、PicoClaw #3378 |
| **安全 / 权限契约** | Hermes Agent / ZeroClaw / CoPaw / PicoClaw | 运行时 capability contract、shell 命令分级确认（Claude Code 模式）、inbound auth、git allowed roots、Bluesky/Reddit 发送方授权 | Hermes #55811、ZeroClaw #7155 / #7141 / #7142 / #10337、CoPaw #7318（多租户 Hub）、PicoClaw（投递目标授权） |
| **WebUI / 桌面端体验** | NanoBot / Hermes Agent / NanoClaw / PicoClaw | 临时会话保活、UI 噪声、Markdown 链接、statusbar 平台适配、Linux/Wayland Electron 崩溃 | NanoBot #5823 / #5837、Hermes #100573（SIGTRAP P1）、NanoClaw #3420、PicoClaw #3281 |
| **子代理 / Agent Loop 架构** | NanoBot / ZeroClaw / CoPaw | 子代理在私有 Session 中执行、execution-tree 迭代预算、bounded goal mode | NanoBot #5811、ZeroClaw #8303 / #10351、CoPaw（DoomLoopGate 修复） |
| **多语言 / i18n** | NanoBot / Hermes Agent | UI 文案本地化、非英语 STT barge-in | NanoBot #5367（10 语言）、Hermes #117801 / #92192 |
| **商业化与多租户 Hub** | LobsterAI / CoPaw | 订阅/试用、能力市场、多租户架构 | LobsterAI #2720 / #2726、CoPaw #7318 |

**核心归纳**：本日生态内**最强的两条共识**是 ① **Provider 协议细节正确性**（6 项目共同关注，流式 reasoning / 超时识别是反复重灾区）；② **Memory / 上下文压缩的正确性**（NanoBot P1 bug 已开放 36 天仍未合并，是当前生态最长的技术债之一）。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 上游基座（网关/Provider/WebUI 事实标准） | 下游集成方、产品方 | 不主导 RFC；下游消费密度最高；自身活跃度低 |
| **NanoBot** | Provider 生态扩张 + 协议层修补先锋 | 高级用户、模型路由研究者 | OpenAI 兼容路径快速接入（新 Provider < 1 天合入）；WebUI 事件协议重构（`/webui-thread`） |
| **Hermes Agent** | 桌面端 + 插件生态 | 桌面重度用户、插件开发者 | Electron + Chromium 自渲染；plugin loader `sys.modules` 快照；Lazy skill loading 呼声高（👍 4） |
| **NanoClaw** | v2 收尾 + OpenCode 一等化 + macOS 深耕 | macOS 桌面用户、OpenCode 用户 | Chat SDK Bridge 卡片；OpenCode 协议深度集成；多条通道并行修复 |
| **ZeroClaw** | 架构 RFC + 安全纵深防御 | 企业部署、安全敏感团队 | 完整 RFC 流程（Rev 3/6）；inbound auth + security pipeline 双里程碑；execution-tree 预算治理 |
| **CoPaw** | 多租户 Hub + Provider 矩阵 | 企业 / Hub 部署方 | AgentScope Platform 内建 Provider；多租户 RFC #7318（31 评论）；Release Duty 制度化 |
| **LobsterAI** | 商业化产品层（订阅 + 能力市场） | 终端用户、C 端订阅 | 与 OpenClaw 解耦演进；以 WebAuthn、订阅、能力市场构建差异护城河 |
| **PicoClaw** | 轻量级 + 边缘部署 | 个人 / 小团队 / IoT | Tracks 67-75 路线图聚焦 agentic web3 / module trust；今日 DingTalk panic 暴露稳定性短板 |
| **IronClaw** | WASM 扩展运行时 + 企业自托管 | 自托管运维、企业 IT | Rust + WASM 扩展（wasmtime/wasi/wit-component）；Web UI OAuth 优先；1.4.1-rc.1 即将发布 |
| **NullClaw** | 多模型适配器（含 Ollama） | 本地模型用户 | Issue 1024 触及错误信息可读性；维护节奏偏慢 |
| **Moltis** | 工具调用语义精确性 | 工具链研究者 | preset → turn → call 多层继承/覆盖模型 |

**架构关键差异**：
- **执行循环**层面，ZeroClaw 显式建模 "execution-tree iteration budget"（#10351），NanoBot 重构 "subagent → shared AgentLoop"（#5811），CoPaw 引入 "DoomLoopGate"——三者代表三种不同治理思路。
- **扩展机制**层面，IronClaw 用 WASM（wasmtime 生态），Hermes 用 Python 插件（依赖契约问题 #117432 / #117807），LobsterAI 用 macOS entitlements + WebAuthn。
- **Provider 抽象**层面，NanoBot 走"OpenAI 兼容快速接入 + 协议层修补"，ZeroClaw 走"可插拔 inbound auth + canonical principals"，CoPaw 走"内建 Provider 矩阵（AgentScope Platform）"。

---

## 6. 社区热度与成熟度分层

按"活跃度 × 合并效率 × 路线图清晰度"三维评估，将 10 个活跃项目分为四层：

### 🟢 第一梯队：高频迭代 + 高合并率（产品成熟期）
- **CoPaw**（v2.2.2-beta.3 已发，25+35 更新，多租户 Hub RFC 主导）
- **LobsterAI**（7 天 4 版本，商业化产品层成熟）
- **NanoBot**（54 PR / 65% 合并率，Provider 生态高速扩张）
- **NanoClaw**（41 PR / 92.7% 合并率，v2 收尾期，OpenCode 一等化方向明确）

### 🟡 第二梯队：高吞吐但合并瓶颈（架构重构后期）
- **ZeroClaw**（50+50 更新但 PR 合并率仅 12%，44 条 OPEN，安全架构待发布 v0.9.0）
- **Hermes Agent**（26+50 更新，10 PR 关闭但 40 OPEN，Desktop P1 无修复）

### 🟠 第三梯队：低活跃 + 维护驱动（质量巩固阶段）
- **IronClaw**（仅 8 PR / 3 合并 + 5 dependabot，1.4.1-rc.1 发布在即，Bug 当日闭环）
- **PicoClaw**（6+5 更新，文档为主，代码活跃度不足，stale 率高）
- **NullClaw**（1 Issue / 0 PR，社区动能不足，但 #1000 错误信息改进诉求清晰）
- **Moltis**（1 PR / 0 Issue，Tools 语义修复待合并）

### 🔴 第四梯队：静默期
- **TinyClaw** / **ZeptoClaw**（24h 零活动，需关注是否进入维护期或停摆）

**成熟度判断**：
- **产品成熟期**（梯队一）项目正在用高频发版抢夺用户心智，但需警惕"功能堆积-发布滞后"。
- **架构重构后期**（梯队二）项目设计已收敛但落地受阻，PR review 是核心瓶颈。
- **质量巩固期**（

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-09-21**
**数据来源：HKUDS/nanobot GitHub 仓库**

---

## 1. 今日速览

NanoBot 今日进入了一个明显的高强度开发周期，过去 24 小时内共有 **54 个 PR 更新**、**3 个 Issue 更新**，但**无新版本发布**。从吞吐量看，已合并/关闭 35 个，待合并 19 个，比例健康（合并率约 65%），说明代码评审节奏高效、社区协作活跃。今日的核心议题集中在 **WebUI 体验打磨**（导航保留、OAuth、UI 噪声）、**新 Provider 接入**（Unifically、Baizhi Agent Toolkit）、**Provider 协议层缺陷修复**（SSE reasoning 事件、超时分类）以及 **P1 级 Memory 缺陷** 的持续推进。

---

## 2. 版本发布

无新版本发布。如需了解最新稳定版本，请访问仓库 Releases 页面。
🔗 https://github.com/HKUDS/nanobot/releases

---

## 3. 项目进展

今日有多个值得关注的功能被合并或关闭，项目整体在"**WebUI 现代化 + Provider 生态扩展 + Agent 内部架构重构**"三条主线上同步推进。

### 3.1 Provider 生态扩展
- **#5832 — 新增 Unifically Provider**（已关闭/合并）：在 OpenAI 兼容路径上添加 `UNIFICALLY_API_KEY` 与 `https://api.unifically.com/v1`，作者自述为 Unifically 团队成员，路径与此前 Novita (#3927) 接入方式一致。
  🔗 https://github.com/HKUDS/nanobot/pull/5832
- **#5830 — 新增 Baizhi Cloud Agent Toolkit MCP 预设**（已关闭/合并）：WebUI Apps 中新增 Baizhi 预设，免去用户手写 MCP 配置，通过 Streamable HTTP 暴露 `websearch_search`、`web_scrape`、`web_extract`。
  🔗 https://github.com/HKUDS/nanobot/pull/5830

### 3.2 WebUI 协议层重构收尾
- **#5823 — 移除 WebUI 旧消息投影层**（已关闭/合并）：作为 #5819 的后续，彻底删除 `replay_transcript_to_ui_messages` 与 Python 拥有的 UI 折叠规则，`/webui-thread` 统一返回规范 `events`。
  🔗 https://github.com/HKUDS/nanobot/pull/5823
- **#5831 — 减少已完成 turn 的 UI 噪声**（已开放）：用 hover/focus 情境式控件替代持久 footer chrome，保持触屏、键盘与 reduced-motion 体验。
  🔗 https://github.com/HKUDS/nanobot/pull/5831
- **#5836 — 让 OAuth 重新认证可执行**（已关闭/合并）：区分 OAuth 凭据被拒绝与临时目录失败，授权失败时给"Sign in again"，网络/限流时仍可使用缓存选项。
  🔗 https://github.com/HKUDS/nanobot/pull/5836
- **#5837 — 跨页面导航保留临时聊天**（已开放）：在回复正在运行、或工作台卸载原始面板时，避免临时会话丢失消息或跳回欢迎页。
  🔗 https://github.com/HKUDS/nanobot/pull/5837

### 3.3 Agent 内核重构
- **#5811 — 子代理在私有 Session 中执行**（已开放，标记 conflict）：移除独立 subagent runner 与 prompt-building 路径，统一走共享 `AgentLoop` 与压缩路径，保留 `spawn`/SDK 契约。
  🔗 https://github.com/HKUDS/nanobot/pull/5811
- **#5835 — 修复 response-source runner 测试的契约**（已关闭/合并）：补齐 `consume_history` 回调以适配上下文压缩成为强制步骤后的契约要求，CI 由红转绿。
  🔗 https://github.com/HKUDS/nanobot/pull/5835

### 3.4 自更新与发布流程
- **#5817 — 新增 stable 与 source 自更新流程**（已开放，conflict）：`nanobot update` 获取最新稳定版；显式 `--dev` / `--update-dev` 支持 fast-forward-only 检出；自动引导 SHA-256 校验的 Bun 运行时，移除 Node 依赖。
  🔗 https://github.com/HKUDS/nanobot/pull/5817

---

## 4. 社区热点

由于本次数据集中 PR 的评论数多显示为 0 或未公开，"最活跃"主要按 **recency + 主题热度 + 优先级标签** 综合评估：

| 排名 | 主题 | 编号 | 链接 | 热度原因 |
|---|---|---|---|---|
| 1 | Memory token 用 API 上报值触发压缩 | PR **#5403**（P1） | https://github.com/HKUDS/nanobot/pull/5403 | P1 级长期未合 bug；本地 tiktoken 比 API 报告低 30–50%，导致压缩永远不触发 |
| 2 | SSE `response.reasoning_text.*` 事件丢失 | Issue **#5833** + PR **#5834** | https://github.com/HKUDS/nanobot/issues/5833 · https://github.com/HKUDS/nanobot/pull/5834 | Provider 协议层的不对称缺陷，影响 Grok / Codex 流式体验 |
| 3 | Subagent 重构 | PR **#5811** | https://github.com/HKUDS/nanobot/pull/5811 | 触及 spawn/SDK 契约的大型重构 |
| 4 | NIM 风格超时分类与 failover | PR **#5769** | https://github.com/HKUDS/nanobot/pull/5769 | 基于异常消息文本来识别 timeout，影响 NVIDIA NIM 等 provider 的容错 |
| 5 | Session 搜索性能（FTS5） | Issue **#5509** | https://github.com/HKUDS/nanobot/issues/5509 | 会话数变多后 JSONL 全表扫描变慢 |

**诉求分析**：社区最强烈的关注点是 **Provider 协议层的细节正确性**（流式事件、超时识别、reasoning 累积），其次是 **WebUI 工程化**（事件协议、临时会话保活），并对 **长期 P1 内存压缩缺陷** 有持续等待感。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重等级 | 问题 | 编号 | 状态 | 是否已有 fix PR |
|---|---|---|---|---|
| **P1** | 本地 tiktoken 估算比 API 真实值低 30–50%，导致上下文压缩永远不触发 | https://github.com/HKUDS/nanobot/issues/5402 → PR #5403 | 待合并 | ✅ 是 (#5403) |
| **P2** | Discord 通道停止时未清理 working-emoji 延迟任务与待处理 reaction 状态 | PR #5807 | 待合并 | ✅ 是 (#5807) |
| **P2** | SSE Responses consumer 丢弃 `response.reasoning_text.delta/.done` 事件（SDK consumer 有处理） | Issue #5833 → PR #5834 | 待合并 | ✅ 是 (#5834) |
| **P2** | 所有 OpenAI 兼容请求被路由到 `chat_id="default"`，导致 session_id、cron、subagent 等键全部错乱 | PR #5838 | 待合并 | ✅ 是（自身就是 fix） |
| **P2** | NVIDIA NIM 等超时被包在 `RuntimeError` 中，无法被 `*Timeout*` 类名匹配 | PR #5769 | 待合并 | ✅ 是（自身就是 fix） |
| **P2** | 邮件通道：IMAP 消息被 filter 拒绝前已被标记 `\Seen` | PR #5605 | 待合并 | ✅ 是（自身就是 fix） |
| **P2** | TUI 中 Markdown 链接不可点击 | PR #5829 | 待合并 | ✅ 是（依赖 @opentui/core 0.5.10 → 0.5.11） |

**整体判断**：今日**未发现新的崩溃/严重回归**，绝大部分 P2 Bug 均已自带 fix PR 进入评审，社区对缺陷修复的响应非常及时。唯一长期未合的 **P1 内存压缩缺陷 (#5403)** 已存在超过一个月，应优先跟进。

---

## 6. 功能请求与路线图信号

### 6.1 用户新提出的功能请求
- **#5524 — WebUI 会话结束通知铃声**（good first issue，开放）
  🔗 https://github.com/HKUDS/nanobot/issues/5524
  期望：默认关闭，Settings 开关；每次 agent turn 完成播放短促提示音。
  信号：作为 good first issue，社区参与门槛低，预计可在下个小版本窗口内被认领。

### 6.2 已开放但被主线改进覆盖
- **#5509 — Session 搜索性能（FTS5 索引镜像）**（开放）
  🔗 https://github.com/HKUDS/nanobot/issues/5509
  设计：维护 SQLite FTS5 索引与 JSONL 异步构建，作为搜索镜像。
  信号：与今日 #5823 "移除旧消息投影" 的方向一致（皆用结构化数据替代原始数据扫描），实现路径清晰，进入下一版本的概率高。

### 6.3 已并行提交且开放
- **#5825 — 可复用 JEV 客户端**（OpenRouter Decisions 客户端与配置边界）
  🔗 https://github.com/HKUDS/nanobot/pull/5825
  与 **#5815 — 可选 Jev shell 防护** 共同构成 OpenRouter Decisions API 的渐进式落地。
- **#5609 — Microsoft 委托 OAuth（Office365/Outlook）**
  🔗 https://github.com/HKUDS/nanobot/pull/5609
  应 Microsoft 即将强制 OAuth 取代 basic auth 的政策窗口，邮件通道的接入面持续扩大。
- **#5367 — Agent 活动文案 10 语言本地化**
  🔗 https://github.com/HKUDS/nanobot/pull/5367
  切换语言即时更新，仍保留原始工具值（路径、命令、URL、查询、结果、错误）。

**路线图信号**：下一版本的可见方向 = **WebUI 体验升级 + Provider 矩阵扩张 + Memory/上下文管理修正 + 多语言 + 邮件通道 OAuth 化**。

---

## 7. 用户反馈摘要

从今日可读的 issue 评论与 PR 描述中可提炼的痛点：

- **WebUI 长任务等待无感**（Issue #5524）：用户在 agent 执行工具调用、文件编辑、shell 命令等长任务时，因页面无明显提示，需要刷新或盯着屏幕。**期望**：在不打扰的前提下给出非视觉通道（铃声）。
- **历史会话搜索线性扫描变慢**（Issue #5509）：几百个 session 即显著变慢。**期望**：FTS5 镜像索引、异步构建。
- **Provider 协议层的不对称性令人困惑**（Issue #5833）：同一份 Responses API，SDK 路径处理 `reasoning_text`，SSE 路径却丢弃，导致 xAI Grok、OpenAI Codex 用户在不同路径下看到不同的 reasoning 流。
- **OAuth 失败时缺少可执行提示**（PR #5836 描述）：用户面对的不是凭据错误而是网络/Catalog 故障时，看到"OAuth 被拒绝"会陷入死循环。
- **Discord 的 emoji 状态泄漏**（PR #5807）：用户停止运行时看到 working-emoji 卡住或 reaction 残留，破坏体验一致性。
- **API 路由错配导致键位漂移**（PR #5838）：每个 session_id 都进入 `chat_id="default"`，使得 cron 绑定、subagent 起源、消息工具目标全部错乱到 `api:default`，对系统行为产生隐性蔓延风险。
- **IMAP `\Seen` 过早标记**（PR #5605）：被 self-sent / SPF/DKIM / allow-list 过滤掉的消息同样被标记 `\Seen`，影响邮件服务器上的"未读"语义，对工作流可观测性不利。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 主题 | 状态 | 链接 | 关注理由 |
|---|---|---|---|---|---|
| **#5403** | PR（P1） | 用 API 上报 token 触发 memory 压缩 | 已开放 36 天 | https://github.com/HKUDS/nanobot/pull/5403 | P1 长期未合，被 conflict 标记，存在阻塞 main CI 的历史 |
| **#5367** | PR | WebUI Agent 活动 10 语言本地化 | 已开放 39 天 | https://github.com/HKUDS/nanobot/pull/5367 | conflict 标记；面向所有 10 种支持语言，与 WebUI 体验路线图强相关 |
| **#5609** | PR | Microsoft 委托 OAuth for Office365/Outlook | 已开放 22 天 | https://github.com/HKUDS/nanobot/pull/5609 | 受 Microsoft 弃用 basic auth 的政策时间窗口压力 |
| **#5605** | PR | 邮件通道只在真投递后才 `\Seen` | 已开放 22 天 | https://github.com/HKUDS/nanobot/pull/5605 | 与 #5609 配套，建议一起

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-09-21

> 数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) GitHub Issues / Pull Requests
> 报告生成时间：2026-09-21

---

## 1. 今日速览

Hermes Agent 项目今日进入 **高度活跃期**：过去 24 小时 Issues 与 PRs 各刷新 50 条，新开/活跃 26 条 Issues、关闭 24 条；40 条 PR 待合并、10 条已关闭。项目**无新版本发布**。从分类看，今日增量主要聚焦在 **桌面端 (Desktop) 稳定性**（Electron / Chromium 异常、Windows 粘贴、Google Workspace 链接 passkey 弹窗等）、**会话与网关 (Gateway) 状态机**（A2A 丢消息、LSP 超时、Bug Chat turn 锁、压缩 lineage）、**插件生态治理**（system prompt 注册失效、Python 依赖契约、目录页面生成），以及一个面向开发者的"feat(webapp)"——将 Desktop 渲染层直接以浏览器模式提供服务。综合来看，这是一个**修复密集、兼有功能延展**的开发日，但**无任何 release 标记**，说明所有改动均尚未进入发布候选。

---

## 2. 版本发布

**今日无新版本发布。** 仓库未在 2026-09-21 推送任何 tag / release。

---

## 3. 项目进展（已关闭的 PR）

过去 24 小时共有 10 条 PR 关闭（部分为完成合并后关闭，部分为放弃合并关闭），其中具有代表性的推进：

| PR | 标题 | 状态 | 推进意义 |
|---|---|---|---|
| [#117669](https://github.com/NousResearch/hermes-agent/pull/117669) | fix(desktop): large text pastes attach from HERMES_HOME/composer-pastes (#117149, supersedes #117150) | 已关闭 | 修复 Windows Desktop 大段文本粘贴"访问被拒"问题 [#117149](https://github.com/NousResearch/hermes-agent/issues/117149)，将 paste 文本落到 `HERMES_HOME/composer-pastes/` 而非当前 cwd，根因 + 修补，并 supersede #117150 |
| [#117301](https://github.com/NousResearch/hermes-agent/pull/117301) | fix(desktop): Custom Endpoints Applies-to chips and keyed Model providers | 已关闭 | 桌面设置面板的"应用于"chips 改为读取**当前 profile 的 endpoints**，并改用 profile-级 `.env` 而非裸 `os.getenv()`，与 `get_env_value_prefer_dotenv` 行为一致（对应 #77007 的修复方向） |
| [#117661](https://github.com/NousResearch/hermes-agent/pull/117661) | fix(desktop): link titles never load a sign-in wall in the hidden renderer (#117323) | 已关闭 | 修复 Desktop 渲染 Google Workspace 链接时弹出 OS passkey 弹窗，改为在 curl 层提前探测登录墙、隐藏 Chromium 不再加载。salvage 来自 #117388 |
| #117803 | fmt(js): `npm run fix` auto-fix | 自动 PR | 由 bot 在 `npm run fix` 工作流触发，预计 CI 通过即自动 squash 合并 |

> 注：#105519（plugin loader `sys.modules` 快照）、#117613（temp dir 豁免 stale overwrite 阻断）、#117728（压缩 lineage 重新可见）、#117786（per-profile turn lock）、#117807（plugin Python 依赖契约）等 PR 仍 OPEN，构成本日的工作积压。

---

## 4. 社区热点

按评论数排序的活跃讨论 Issues / PRs：

| 排名 | 编号 | 👍 | 评论 | 主题 | 链接 |
|---|---|---|---|---|---|
| 1 | #100573 | 0 | 9 | **P1 崩溃**：Linux/Wayland 上 Electron 40.10.2 Desktop 反复 SIGTRAP，根因 `std::string_view::substr()` 越界 | [link](https://github.com/NousResearch/hermes-agent/issues/100573) |
| 2 | #58746 | 2 | 7 | `hermes update` 应拉取最新 stable 而非 `main` 分支 | [link](https://github.com/NousResearch/hermes-agent/issues/58746) |
| 3 | #55811 | 0 | 6 | 高风险工具执行的**运行时强制 capability contract** | [link](https://github.com/NousResearch/hermes-agent/issues/55811) |
| 4 | #62780 | 1 | 6 | 跨 CLI / Desktop / Telegram / Discord 的**统一会话模型** | [link](https://github.com/NousResearch/hermes-agent/issues/62780) |
| 5 | #35060 | 0 | 6 | Home Assistant 集成的 `deliver` 目标可配置 | [link](https://github.com/NousResearch/hermes-agent/issues/35060) |
| 6 | #2045 | 4 | 5 | **Lazy skill loading**：从 system prompt 中移除 skill 列表，改为按需工具调用（高👍） | [link](https://github.com/NousResearch/hermes-agent/issues/2045) |
| 7 | #117432 | 0 | 4 | `PluginContext.register_system_prompt_section()` 注册后**永远不会被 render**（标记 invalid） | [link](https://github.com/NousResearch/hermes-agent/issues/117432) |
| 8 | #95529 | 0 | 3 | 插件注册的 toolset 触发 "Unknown toolsets" 警告（cli.py 校验在 plugin 发现之前执行） | [link](https://github.com/NousResearch/hermes-agent/issues/95529) |
| 9 | #116944 | 0 | 2 | **A2A reply 文本丢失**，`message/send`、`message/stream` 在流式路径上都返回空内容 | [link](https://github.com/NousResearch/hermes-agent/issues/116944) |

**诉求归纳**：
- **稳定 + 安全**：能力契约 (`#55811`)、session 状态机 (turn 锁、压缩 lineage)、统一会话 (`#62780`)
- **开发者体验**：`hermes update` 走 stable (`#58746`)、lazy skill loading (`#2045`，社区高支持)
- **扩展性**：HA 集成可投递目标 (`#35060`)、plugin 注册真正生效 (`#117432`、`#95529`)
- **跨平台可用性**：非英语 STT barge-in (`#117801`)、多语言文档 (`#92192`、`#93632`)

---

## 5. Bug 与稳定性

按严重程度与可修复性排列：

### 🔴 P1（最高优先级）

| Issue | 现象 | 平台 | 是否有修复 PR |
|---|---|---|---|
| [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) | Desktop `SIGTRAP` 反复崩溃，`std::string_view::substr()` 越界死路径 | Desktop / Arch Linux / Wayland | ❌ 暂无 |

### 🟠 P2（高优先级）

| Issue | 现象 | 影响面 | 是否有修复 PR |
|---|---|---|---|
| [#116944 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/116944) | A2A `message/send` & `message/stream` 流式路径**丢消息** | 跨平台消息投递 | ❌ 暂无对应 PR OPEN |
| [#117710](https://github.com/NousResearch/hermes-agent/issues/117710) | `POST /api/sessions/{id}/chat` 在 `custom:` provider 上仅能工作一次，会话持久化丢失 provider → 第二轮 500 | Gateway + 自定义 provider | ❌ |
| [#117802](https://github.com/NousResearch/hermes-agent/issues/117802) | turn-recovery ASCII fallback 误判 Unicode 错误，**不可逆地剥除整段 non-ASCII 内容**（state.db 持久化层） | 任何含非 ASCII 的会话 | ❌ |
| [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) | 见上 | Desktop | ❌ |
| [#117800](https://github.com/NousResearch/hermes-agent/issues/117800) | `_hmwa_first_contact_notes()` 向**所有生产环境新用户**泄露基础设施细节（cron、跨平台消息、`/sethome` 语法） | 生产 Gateway | ❌ |
| [#117810](https://github.com/NousResearch/hermes-agent/issues/117810) | `title_generation` 在 Volcengine Ark Coding Plan 上因硬编码 `reasoning_config={"enabled": False}` 触发 HTTP 400，未被推理拒绝重试链捕获 | 该 provider 用户 | ❌ |
| [#117806](https://github.com/NousResearch/hermes-agent/issues/117806) | 显式 model pin 时 429 用量耗尽 → 重试 3 次仍在主 provider → 会话死亡，**绕过 `fallback_providers`** | 多 provider / 高频用户 | ❌ |
| [#116944](https://github.com/NousResearch/hermes-agent/issues/116944) | 见上 | A2A 客户 | ❌ |
| [#117149 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117149) | Windows 大文本粘贴 → "access denied" | Desktop on Windows | ✅ [#117669](https://github.com/NousResearch/hermes-agent/pull/117669) 已关闭 |
| [#117323 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117323) | Google Workspace 链接 → OS passkey 弹窗 | Desktop | ✅ [#117661](https://github.com/NousResearch/hermes-agent/pull/117661) 已关闭 |
| [#117696](https://github.com/NousResearch/hermes-agent/issues/117696) | `profiles.list` 返回字段违反自身 result contract（缺 `previous_names`） | TUI + Profile | ❌ |
| [#117529 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117529) | Desktop update 在 SSH/VPS Gateway 隧道下抢走本地 Telegram polling | macOS + VPS | ❌ |
| [#77007 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/77007) | `is_provider_explicitly_configured` 用 `os.getenv` 而非 live dotenv | Auth | ✅ 由 [#117301](https://github.com/NousResearch/hermes-agent/pull/117301) 部分修复 |

### 🟡 P3（一般优先级）

| Issue | 现象 | 是否有修复 PR |
|---|---|---|
| [#117432 (invalid)](https://github.com/NousResearch/hermes-agent/issues/117432) | `render_system_prompt_sections` 从未被调用，plugin 注册失效 | ❌ |
| [#116446 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/116446) | LSP 单次诊断超时永久禁用整个 workspace；冷 LSP 5s 预算 vs ~55s 实际需求 | ❌ |
| [#117285 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117285) | Desktop chat 区闪烁 / remount（`addRange` range-not-in-document） | ❌ |
| [#117375 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117375) | Desktop 加载态下 chat composer 消失 | ❌ |
| [#117433 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117433) | `hermes kanban show --json` 不输出 `max_runtime_seconds` | ❌ |
| [#117229 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/117229) | kanban `request_review` 把 `assignee` 当 implementer 写回，rejection 回灌给 reviewer | ❌ |
| [#117793](https://github.com/NousResearch/hermes-agent/issues/117793) | llama.cpp "context size (N tokens)" 短语未被 context-overflow 模式匹配 | ❌ |
| [#117784](https://github.com/NousResearch/hermes-agent/issues/117784) | WSL 环境中 `bash` 裸调用写 drvfs 路径，3 个测试在 Windows 上失败 | ❌ |
| [#117801](https://github.com/NousResearch/hermes-agent/issues/117801) | 桌面端硬编码英语 stop-word、非可配置 barge-in 触发器 → 非英语 STT 用户 RU 体验断裂 | ❌ |

**整体观察**：P1/P2 队列今日累计仍在 7 条 OPEN，且**大多无对应 PR**（Desktop SIGTRAP、A2A 丢消息、custom provider 单次会话、非 ASCII 不可逆剥除、模型 pin 绕过 fallback、生产环境基础设施泄露、Volcengine Ark HTTP 400）。这些构成下一版本的 **强制候选清单**。

---

## 6. 功能请求与路线图信号

| 类型 | Issue / PR | 👍 | 落地概率评估 |
|---|---|---|---|
| **跨平台统一会话** | [#62780](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-09-21**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 今日整体活跃度为**中等偏低**：24 小时内共更新 6 条 Issue（4 开 / 2 闭）、5 条 PR（3 待合并 / 2 已关闭），**无新版本发布**。最值得关注的信号是 DingTalk 网关 panic 问题出现回归——[#3382](https://github.com/sipeed/picoclaw/issues/3382) 报告早前 [#973](https://github.com/sipeed/picoclaw/issues/973) 同类 bug 在 v0.3.1（commit 2cf030d2）上仍可复现，提示此前修复并未真正落地。文档层面 [#3383](https://github.com/sipeed/picoclaw/pull/3383) v0.11.0 冲刺计划已归档，社区贡献通道仍处于开放但响应偏慢状态。

---

## 2. 版本发布

**无新版本发布**。当前可推断的最新发布版本仍为 **v0.3.1**（参考 [#3382](https://github.com/sipeed/picoclaw/issues/3382) 复现信息）。建议维护者尽快发布 v0.3.2 或后续补丁版本，以解决回归 panic 问题。

---

## 3. 项目进展

今日**无代码层面 PR 合并**，推进主要集中在文档与流程规范：

| PR | 状态 | 影响 |
|---|---|---|
| [#3367](https://github.com/sipeed/picoclaw/pull/3367) `docs: add Pilot MCP setup example` | 已关闭 | 合并 Pilot MCP 设置命令与健康检查说明至 quick start，降低新用户接入门槛 |
| [#3383](https://github.com/sipeed/picoclaw/pull/3383) `docs: v0.11.0 sprint plan` | 已关闭 | 归档 Tracks 67–75 设计文档（ordering DAG、决策记录、风险登记），并将 checklist 同步至 `.todo.md` |

**评估**：项目工程治理（文档、冲刺规划）正向规范化推进，但代码层面的活跃度不足，多个待合并 PR 已停留超过 10 天（[#3354](https://github.com/sipeed/picoclaw/pull/3354)、[#3353](https://github.com/sipeed/picoclaw/pull/3353)）。

---

## 4. 社区热点

按评论数排序：

1. **[#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 输入卡顿（13 评论 / 👍 2 / stale）**
   - 用户 [xpader](https://github.com/xpader) 报告在 v0.3.1 + Web UI 渠道下，**会话历史较长时输入框响应迟滞**。
   - 反映真实使用痛点，13 条评论表明社区关注度高，但已被标记为 stale。

2. **[#3287](https://github.com/sipeed/picoclaw/issues/3287) — IRC 长消息支持（13 评论 / 👍 0 / stale）**
   - [superuser-does](https://github.com/superuser-does) 建议按 IRCv3 规范将超长/多行消息作为**单一连贯消息**处理。
   - 已有对应实现 PR [#3354](https://github.com/sipeed/picoclaw/pull/3354)，但因 PR 仍为 stale open 状态，问题实质上尚未闭环。

**诉求分析**：两个最热议题都涉及**长上下文/长消息处理链路**（UI 端 + 渠道端），说明 PicoClaw 在会话规模扩大时的端到端体验仍有明显短板。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **严重（回归）** | [#3382](https://github.com/sipeed/picoclaw/issues/3382) | DingTalk Stream SDK 重连时 panic（`send on closed channel`，`client.go:161`），v0.3.1 + dingtalk-stream-sdk-go v0.9.1 仍可复现 [#973](https://github.com/sipeed/picoclaw/issues/973) 同类问题 | ❌ 无 |
| 🟠 **中等** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 在长历史会话下输入卡顿 | ❌ 无 |
| ✅ **已关闭** | [#973](https://github.com/sipeed/picoclaw/issues/973) | QQ/DingTalk 过夜在线后 panic 退出 | 关闭但未真正修复（见 #3382）

**稳定性提示**：`#3382` 是新提交但代表已知问题回归，建议维护者优先排查 `dingtalk-stream-sdk-go` v0.4.0 → v0.9.1 之间的兼容变更，并在 issue 中关联原始 #973。

---

## 6. 功能请求与路线图信号

| 功能 | Issue | 对应 PR | 进入下一版本可能性 |
|---|---|---|---|
| OpenAI 兼容 provider（自托管路由如 9Router） | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 无 | 🟡 中等（实现成本低，社区呼声存在） |
| IRCv3 多行消息合并 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 🟢 高（PR 已就绪待合并） |
| OpenCode Go session header | [#3369](https://github.com/sipeed/picoclaw/issues/3369) | 无明确关联 | 🟡 中等（已关闭） |
| 工具反馈动画生命周期绑定 | — | [#3353](https://github.com/sipeed/picoclaw/pull/3353) | 🟢 高（PR 已就绪待合并） |
| OAuth 刷新 token 使用配置 scopes | — | [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 🟢 高（修复类，PR 已就绪） |

**信号总结**：v0.11.0 路线图文档（[#3383](https://github.com/sipeed/picoclaw/pull/3383)）显示 Tracks 67–75 聚焦于 "agentic web3 / module trust / ACP/mesh depth"，属于前沿能力建设；但**面向现有用户的基础体验问题（UI 性能、渠道稳定性）优先级可能偏低**，需关注社区反馈。

---

## 7. 用户反馈摘要

**真实用户痛点**：

- 🐢 **Web 体验**：长会话下输入卡顿（[#3281](https://github.com/sipeed/picoclaw/issues/3281)），影响核心交互流畅度。
- 🔌 **企业部署稳定性**：DingTalk 过夜运行后服务 panic 退出（[#3382](https://github.com/sipeed/picoclaw/issues/3382)），阻碍 7×24 部署场景。
- 💬 **IRC 渠道语义丢失**：多行/长消息被截断为多条独立消息（[#3287](https://github.com/sipeed/picoclaw/issues/3287)），破坏对话上下文连贯性。
- 🔧 **自托管 LLM 集成受限**：缺乏 OpenAI 兼容 provider 支持（[#3366](https://github.com/sipeed/picoclaw/issues/3366)），用户希望对接 9Router 等自托管路由。

**使用场景**：可见 PicoClaw 正从"个人玩具"向"小型团队/企业 7×24 部署"演进，但稳定性与长会话体验尚未跟上这一趋势。

---

## 8. 待处理积压 ⚠️

**提醒维护者关注以下长期未响应项**：

| 编号 | 类型 | 创建日期 | 状态 | 备注 |
|---|---|---|---|---|
| [#3378](https://github.com/sipeed/picoclaw/pull/3378) | PR | 2026-09-12 | stale, 待合并 | OAuth scopes 修复，9 天无动作 |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | PR | 2026-08-31 | 待合并 | IRCv3 multiline 配套 PR |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | PR | 2026-08-31 | 待合并 | 工具反馈动画修复 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | 2026-07-21 | stale, 13 评论 | 距今 2 个月无实质响应 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | 2026-07-22 | stale, 13 评论 | 距今 2 个月，PR 已就绪未合并 |

**健康度提示**：3 个 PR 与 2 个高评论 Issue 同时进入 stale 状态，社区响应中位者充裕性下降。建议维护者对 [#3382](https://github.com/sipeed/picoclaw/issues/3382) 回归问题给出明确响应，并对 [#3354](https://github.com/sipeed/picoclaw/pull/3354)/[#3353](https://github.com/sipeed/picoclaw/pull/3353) 给出 review 反馈。

---

*报告生成时间：2026-09-21 · 数据源：PicoClaw GitHub 仓库（sipeed/picoclaw）*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-21

---

## 1. 今日速览

NanoClaw 今日呈现"高强度合入、低强度新增"的典型维护日特征。**过去 24 小时共产生 41 条 PR 更新，其中 38 条已合并/关闭（占比 92.7%），3 条仍 OPEN 待审**；Issues 端仅新增 1 条关于 WhatsApp 群组发送者身份识别的报告，未触发新的需求讨论。仓库整体处于**集中清理与 bug 收尾阶段**，无新版本发布，核心工作流仍停留在 v2.3.0 主线（`main 7902716b`，`channels 224827b9`）。从合入节奏看，仓库活跃度健康，但增量贡献相对有限，建议关注 3 条 OPEN PR 的审阅进展与 1 条未分类 Bug 的处置。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 仓库主线仍为 v2.3.0（`main 7902716b` / `channels 224827b9`），后续合入的修复尚未打 tag，建议关注下个补丁版本的窗口。

---

## 3. 项目进展

今日共 **38 条 PR 关闭**，合入工作高度集中在**通道层（Channels）**与**OpenCode Provider**两块修复上，以下为代表性进展：

| 主题 | PR | 状态 | 价值 |
|---|---|---|---|
| WhatsApp 连接防抖（避免鉴权失败后无限重连） | [#746](https://github.com/qwibitai/nanoclaw/pull/746) | CLOSED | 修复 #748，提升服务韧性 |
| WhatsApp 群组 @-mention 检测（`contextInfo.mentionedJid`） | [#2565](https://github.com/qwibitai/nanoclaw/pull/2565) | CLOSED | 改进多人群聊中的意图路由 |
| OpenCode Provider：`message.part.delta` 文本回落 | [#3463](https://github.com/qwibitai/nanoclaw/pull/3463) | OPEN | 修复流式响应竞态（#2985） |
| OpenCode：恢复 resume 会话空转 + 进程组清理 | [#3346](https://github.com/qwibitai/nanoclaw/pull/3346) / [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) | CLOSED | 提升长任务稳定性 |
| 多目标群组默认回复目的地 | [#2328](https://github.com/qwibitai/nanoclaw/pull/2328) | CLOSED | 改善用户体验 |
| SDK 自动压缩后注入目的地提示 | [#2327](https://github.com/qwibitai/nanoclaw/pull/2327) | CLOSED | 减少上下文丢失 |
| Chat SDK Bridge 支持 `send_card` 展示卡片 | [#2265](https://github.com/qwibitai/nanoclaw/pull/2265) | CLOSED | 解锁 MCP `interactive` 工具 |
| 注入日期/时间上下文到所有 agent 提示 | [#701](https://github.com/qwibitai/nanoclaw/pull/701) | CLOSED | 解决 #698 |
| 巨型 JSONL 会话轮转防容器超时 | [#700](https://github.com/qwibitai/nanoclaw/pull/700) | CLOSED | 解决 #697 |
| CLI：`ncl groups create` / `ncl wirings create` 自动补齐 companion 行 | [#2416](https://github.com/qwibitai/nanoclaw/pull/2416) | CLOSED | 改善 CLI 易用性 |
| CI 仓库重命名后仓库守卫失效 | [#2402](https://github.com/qwibitai/nanoclaw/pull/2402) | CLOSED | 恢复 CI 流水线 |
| 替换 `sqlite3` CLI 为 better-sqlite3 包装 | [#2309](https://github.com/qwibitai/nanoclaw/pull/2309) | CLOSED | 降低外部依赖 |
| iCloud Tools Skill（CalDAV/CardDAV/IMAP/SMTP） | [#706](https://github.com/qwibitai/nanoclaw/pull/706) | CLOSED | 拓展苹果生态集成 |
| macOS statusbar slug 感知 | [#3420](https://github.com/qwibitai/nanoclaw/pull/3420) | **OPEN** | 配套 v2 安装标识重构 |
| `update-nanoclaw` 安装 `~/.local/bin/ncl` 软链 | [#2356](https://github.com/qwibitai/nanoclaw/pull/2356) | CLOSED | 解决 #2355 |
| Karpathy LLM Wiki Skill v2 兼容 | [#2322](https://github.com/qwibitai/nanoclaw/pull/2322) | CLOSED | 维护 skill 生态 |
| host-sweep SQLite 时间戳按 UTC 解析 | [#2288](https://github.com/qwibitai/nanoclaw/pull/2288) | CLOSED | 修复时区 bug |
| `manage-channels` SKILL.md 注入规范化 SQL | [#2290](https://github.com/qwibitai/nanoclaw/pull/2290) | CLOSED | 改善文档质量 |
| `migrate-v2` 探测正确 OneCLI 健康端点 | [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) | CLOSED | 修复 v2 迁移工具 |

**整体评估**：合入以小型 Fix 为主，单条 PR 平均改动范围较小，**说明仓库目前正在密集收拾 v2 改造遗留问题**，并未推进重大架构演进。今日合入对外部用户的"可感知价值"集中在：① WhatsApp 行为修复（重连、@提及）；② OpenCode 长会话可靠性提升；③ 新增 `send_card` 展示能力。

---

## 4. 社区热点

由于今日 Issues/Comments 数据为空（仅 1 条新 Issue、0 评论），暂未形成显著的"热门讨论"。从 PR 视角看，**讨论密度最高的潜在热点**集中在这 3 条仍 OPEN 的 PR 上：

- **#3420 [OPEN, core-team]** — [macOS statusbar slug-aware 修复](https://github.com/qwibitai/nanoclaw/pull/3420)：作者 gavrielc，stacked on #3408。属于 v2 安装标识（`com.nanoclaw-v2-<installSlug>`）重构的衍生工作，反映 macOS 安装链路存在**标签不同步导致状态栏监听空服务**的根因问题，是平台用户最易感知的失效之一。
- **#3463 [OPEN]** — [OpenCode Provider 文本流回落](https://github.com/qwibitai/nanoclaw/pull/3463)：作者 wakqasahmed，修复 #2985。涉及**流式响应 ~78ms 竞态窗口**导致 `session.idle` 提前跳出循环的问题，对使用 OpenCode 的开发者影响显著。

> 📌 现状：今日 PR 评论数据缺失（`评论: undefined`），建议结合实际审阅意见评估下一步。

---

## 5. Bug 与稳定性

### 🔴 新报告（未分类 → 需关注）

- **#3858 [OPEN, kind/bug, triage/unresolved]** — [Agent 无法从原生适配器识别发送者 display name](https://github.com/qwibitai/nanoclaw/issues/3858)
  - **影响**：WhatsApp 群组内每个入站消息到达模型时只携带 JID（如 `1234567890@s.whatsapp.net`），缺失联系人/群成员的 display name。
  - **严重程度**：**中**。功能未完全不可用，但在多人群聊中模型无法区分说话者，影响记忆/上下文归因、@mention 推断等下游逻辑。
  - **环境**：v2.3.0 + `main 7902716b` + `channels 224827b9`，Linux。
  - **是否有 fix PR**：❌ 暂无对应 PR，今日合入的 WhatsApp 相关 PR（#746、#2565）均未触及联系人元数据层。
  - **建议处置优先级**：高。属于**通道契约层缺陷**，可能影响其他原生适配器（Telegram/Signal/Discord 等）相同行为，建议纳入下个补丁修复窗口。

### 🟢 已修复（今日合入的相关稳定性改进）

| 缺陷 | Fix PR |
|---|---|
| WhatsApp 鉴权失败导致服务反复重启 | [#746](https://github.com/qwibitai/nanoclaw/pull/746) |
| OpenCode 流式响应丢失文本（~78ms 竞态） | [#3463](https://github.com/qwibitai/nanoclaw/pull/3463)（OPEN 待合并） |
| OpenCode resume 会话空转 | [#3346](https://github.com/qwibitai/nanoclaw/pull/3346) |
| OpenCode 进程清理 / IDLE_TIMEOUT 配置化 | [#2152](https://github.com/qwibitai/nanoclaw/pull/2152) |
| 巨型 JSONL 会话导致容器超时 | [#700](https://github.com/qwibitai/nanoclaw/pull/700) |
| SQLite 时间戳按本地时间解析导致时区漂移 | [#2288](https://github.com/qwibitai/nanoclaw/pull/2288) |
| v2 迁移工具探测错误健康端点 | [#2287](https://github.com/qwibitai/nanoclaw/pull/2287) |

---

## 6. 功能请求与路线图信号

今日**未收到新的功能请求 Issue**。从 PR 端可推断路线图信号：

- **macOS 平台深耕**：#3420 配合 #3408 形成"v2 安装标识 + 平台组件 slug 化"的双层重构，意味着 macOS 路径被作为 v2.3.x 的明确打磨目标。
- **OpenCode 作为一等 Provider**：今日围绕 OpenCode 的修复数量最多（4+ 条），包括竞态、会话恢复、进程组清理、IDLE_TIMEOUT 等，**反映该项目正把 OpenCode 列为对标 Claude/OpenAI 之外的第二主路径**。
- **iCloud 集成（#706 已 CLOSED）**：新增 iCloud Tools Skill，标志 macOS/Apple 生态技能包持续扩张。
- **Chat SDK 卡片（#2265）**：MCP `interactive` 工具链下沉到所有 Chat SDK 通道，互动 UI 能力将普及。

> 📊 概率评估：下一版本（推测 v2.3.1 或 v2.4）大概率会包含 #3420、#3463 的合并，以及 #3858 的修复。

---

## 7. 用户反馈摘要

由于今日 Issues 评论均为 0，**直接用户声音稀缺**。从 Issue 文本可提炼如下场景与痛点：

- **痛点 #1：多人群聊中"谁在说话"不可识别**（#3858）
  > "In a WhatsApp group, the agent cannot tell participants apart by name. Every inbound message reaches the model with the phone JID as the sender and no display name."
  - 场景：用户在 WhatsApp 群组中部署 NanoClaw，希望其能识别不同发言者以提供上下文感知回复。
  - 满意度：未明示，但从描述看属于"功能未达预期"。
  - 期望：模型能拿到 `pushName` / 群成员昵称，而非裸 JID。

- **痛点 #2（间接，来自 #3463/#2985）**：OpenCode 流式响应在 ~78ms 边界出现文本截断。
  - 场景：长会话/复杂 agent turn。
  - 期望：即便 `session.idle` 先于最终 snapshot 触发，也能保留已生成文本。

> ⚠️ 今日缺乏用户正向反馈样本，建议在下次发布前通过 Discussion/RFC 主动收集使用体验。

---

## 8. 待处理积压

以下条目建议维护者优先处理：

| 类别 | 编号 | 标题 | 风险点 |
|---|---|---|---|
| OPEN Bug | [#3858](https://github.com/qwibitai/nanoclaw/issues/3858) | Agent 看不到 WhatsApp 显示名 | 无 fix PR，距报告 < 24h，建议本周响应 |
| OPEN PR (core-team) | [#3420](https://github.com/qwibitai/nanoclaw/pull/3420) | macOS statusbar slug-aware | 已 stacked on #3408，需先确认 #3408 状态 |
| OPEN PR | [#3463](https://github.com/qwibitai/nanoclaw/pull/3463) | OpenCode 文本流回落 | 修复关键竞态，等待审阅 |
| 老 PR（历史 Blocked） | [#701](https://github.com/qwibitai/nanoclaw/pull/701) / [#700](https://github.com/qwibitai/nanoclaw/pull/700) / [#706](https://github.com/qwibitai/nanoclaw/pull/706) / [#746](https://github.com/qwibitai/nanoclaw/pull/746) | 多个 Status: Blocked | 今日已全部 CLOSED，需确认是被合并还是被关闭/重开 |

> 💡 提示：今日有大量 2026-03~05 月创建、长期标注 "Blocked/Pending Closure" 的老 PR 集中 CLOSED（如 #700/#701/#706/#746 等），建议维护者发布一份**"v2 时代遗留清理总结"**，向社区解释哪些被合并、哪些被放弃、对应 Issue 状态如何，以避免贡献者疑惑。

---

### 📈 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐ | 38/41 PR 关闭，合入节奏稳定 |
| 社区互动度 | ⭐⭐ | Issues/PR 评论数据空缺，互动信号弱 |
| 增量创新度 | ⭐⭐ | 以修复为主，未见大型 Feature |
| 稳定性 | ⭐⭐⭐ | 关键通道与 Provider 修复持续累积 |
| 路线图清晰度 | ⭐⭐⭐⭐ | OpenCode 一等化、macOS 深耕方向明确 |

**结论**：NanoClaw 当前处于**"稳健收尾 + 平台打磨"**阶段，建议下一步聚焦：① 处置 #3858；② 推动 #3420/#3463 合入；③ 发布遗留清理总结以提升社区透明度。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：** 2026-09-21
**数据来源：** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 项目今日活跃度处于**低活跃**状态。过去 24 小时内仅有 1 条 Issue 更新，无 PR 提交，无版本发布。社区互动层面也较为冷清，新开 Issue 仅获得 0 个点赞和 1 条评论。整体来看，项目处于日常维护或静默开发阶段，未见明显的功能迭代或重大修复动作。考虑到 Issue #1000 编号已达四位数（暗示仓库 Issue 总量已超过 1000 条），项目历史积淀较深，但近期社区动能略显不足。

---

## 2. 版本发布

无新版本发布。本节略。

---

## 3. 项目进展

**今日无 PR 合并或关闭，代码层无推进。** 项目代码库在 2026-09-20 至 2026-09-21 期间未发生任何合并、关闭或审阅活动，无法评估功能或修复层面的具体进展。建议关注维护者是否在分支上有未推送的本地提交，或等待后续 PR 开放。

---

## 4. 社区热点

**今日唯一活跃 Issue：**

🔹 **[#1000 ollama incompatibility notification](https://github.com/nullclaw/nullclaw/issues/1000)**（OPEN · enhancement）
- 作者：aaafgcfg
- 创建/更新时间：2026-09-20
- 评论数：1 | 👍：0

**议题分析：** 该 Issue 是仓库的第 1000 号，具里程碑意义。作者请求当 Ollama 模型不支持 tools（工具调用）能力时，系统应输出明确的提示通知，而非笼统地显示 "adapter error"。这一诉求反映出用户对**错误信息可读性**和**调试友好性**的强烈需求——作者甚至使用 Wireshark 进行抓包分析，足见问题的排查成本之高。当前社区反响尚不热烈（0 点赞），但议题本身指向一个具体可落地的改进点，具备较高的实施价值。

---

## 5. Bug 与稳定性

严格意义上，今日未报告新的崩溃或回归 Bug，但 **Issue #1000 间接暴露了一个**错误处理层面的体验性问题**：

| 严重程度 | 问题描述 | 状态 | 是否有修复 PR |
|---------|---------|------|--------------|
| 🟡 中 | 当 Ollama 模型不支持 tools 时，仅返回无描述的 "adapter error"，缺乏上下文信息 | OPEN（作为 enhancement 提交） | ❌ 无 |

**评估：** 该问题不导致功能不可用，但会显著增加用户调试成本，属于**体验性 Bug**。维护者可考虑将其从 enhancement 转化为 Bug，并提供对应的修复 PR。

---

## 6. 功能请求与路线图信号

**信号采集：**

| 需求项 | 来源 | 提出方式 | 可纳入下一版本的概率 |
|--------|------|---------|-------------------|
| Ollama 模型兼容性检测与通知机制 | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | 显式 enhancement | ⭐⭐⭐⭐ 高（实现成本低，价值清晰） |

**路线图判断：** 该需求仅涉及错误信息的扩展输出与前置能力探测（HTTP 请求前检查 Ollama `/api/show` 的 `capabilities` 字段），改动范围小，对核心架构无侵入。同时与 NullClaw 作为 AI Agent 框架对多模型适配器的定位高度契合，**有较大概率被纳入下一个小版本迭代**。建议维护者回复 Issue 给出实施意向，进一步激活社区参与。

---

## 7. 用户反馈摘要

从 Issue #1000 的评论与描述中可提炼以下用户反馈：

- **痛点：** 错误信息过于笼统（"adapter error"），缺少根因说明，用户被迫使用专业抓包工具（Wireshark）定位问题。
- **使用场景：** 用户尝试将 Ollama 作为本地模型后端接入 NullClaw，并依赖其工具调用（tools / function calling）能力。
- **核心诉求：** 在适配器层（adapter layer）增加模型能力嗅探（capability sniffing）能力，对不兼容场景给出**可操作的错误提示**（例如：「当前模型 `xxx` 不支持 tool calls，请选择支持 function calling 的模型，如 `qwen2.5` 系列」）。
- **满意度：** 隐含不满——用户明确表示 "it's hard to understand, why it is not working"，反映出当前错误处理在 UX 上的欠缺。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 当前状态 | 提醒事项 |
|------|------|---------|---------|---------|
| [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | enhancement | 2026-09-20 | OPEN · 24h 内未获维护者响应 | 维护者应至少给出初步回复（acknowledge / label / assign），避免新提交 Issue 沉没 |

**积压预警：** 由于仅检索到今日窗口数据，无法对长期未响应 Issue 做完整统计。但建议项目维护者定期审视：
1. 历史 Issue 中是否存在高赞、高评论但长期未关闭的议题；
2. 是否设置 issue triage 流程（如自动标签、机器人欢迎语）；
3. 是否需要公开 roadmap 或 project board，提升社区透明度。

---

## 📊 附：项目健康度快照

| 指标 | 数值 | 评估 |
|------|------|------|
| 日活跃 Issue | 1 | 🟢 正常（低活跃，非异常） |
| 日活跃 PR | 0 | 🟡 需关注（无代码层动作） |
| 24h 新发布版本 | 0 | ⚪ 静默期 |
| 社区互动（评论+点赞） | 1 | 🟡 偏低 |
| 错误信息可读性 | 存疑 | 🟠 待优化（见 #1000） |

**总评：** NullClaw 今日处于**低速运转**状态，代码层无推进，但社区贡献者提出了一个明确且可落地的改进点。维护者宜把握这一信号，以低成本改动激活社区参与度。

---

*本报告基于 2026-09-20 至 2026-09-21 期间 GitHub 公开数据生成，由 AI 智能体开源项目分析师自动汇编。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-21

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub 仓库
> 报告生成时间窗口：过去 24 小时（2026-09-20 ~ 2026-09-21）

---

## 1. 今日速览

IronClaw 今日整体活跃度处于**中等偏低**水平，仓库在 24 小时内**没有任何 Issue 新开、关闭或评论活动**，社区互动趋于静默。Pull Request 侧则有 8 条变动，但其中 6 条为 **Dependabot 自动依赖更新**，实质性的人工代码变更仅 2 条。最值得关注的是：(a) 维护者 henrypark133 提交了 **1.4.1-rc.1 发布前置版本号调整**（[#8105](https://github.com/nearai/ironclaw/pull/8105)），预示下一轮发布窗口已临近；(b) 同一位维护者此前提交的 Gmail/Google Calendar 扩展激活 Bug 修复 PR [#8102](https://github.com/nearai/ironclaw/pull/8102) 已关闭落地。综合判断：**项目处于"依赖整理 + 发布准备"节奏，主体功能面无明显推进，但健康度良好。**

---

## 2. 版本发布

**今日无正式 Release 发布。**

但发布管线已进入预备状态：

- **1.4.1-rc.1 版本号定位**：[#8105](https://github.com/nearai/ironclaw/pull/8105)（OPEN）将 `ironclaw` 包版本号调整为 `1.4.1-rc.1`，以便 `Cut Ironclaw Release` workflow 在合并提交上正确打 tag。
- **前置依赖约束**：由于 `cut_ironclaw_release.py` 会校验 manifest 中的候选版本号与请求版本号是否一致，该 PR 必须在 release workflow 触发**之前**合入。

📌 **建议关注**：维护者目前正准备 RC（候选发布），如无阻断性 Bug，预计未来 1-2 天内可能出现 `ironclaw-v1.4.1-rc.1` tag。

---

## 3. 项目进展

今日合并/关闭的 **3 条 PR** 中，仅 1 条涉及实际功能代码：

| PR | 类型 | 影响范围 | 链接 |
|----|------|----------|------|
| [#8102](https://github.com/nearai/ironclaw/pull/8102) | **Bug 修复** | 扩展系统：Gmail / Google Calendar OAuth 激活 | ✅ 已关闭 |
| [#8099](https://github.com/nearai/ironclaw/pull/8099) | 依赖更新 | Rust 通用组 25 项 bump | ✅ 已关闭 |
| [#8079](https://github.com/nearai/ironclaw/pull/8079) | 依赖更新 | GitHub Actions 组 6 项 bump | ✅ 已关闭 |

**核心进展 #8102**：修复了管理员通过 **Web UI（administrator configuration）** 而非环境变量配置 Google OAuth 客户端时，Gmail / Google Calendar 扩展无法激活的问题。原 Bug 表现为：OAuth 流程（授权、code 交换、token 获取）全部成功完成，但激活阶段失败并抛出 `Provider...` 错误。该修复使得**运行时实时解析 provider-instance 的 readiness**，优先采用管理员配置。这是一项面向**自托管部署用户**的重要可用性提升。

📌 今日合并未涉及新功能特性，主要是"稳定性增强 + 依赖维护"，项目整体向前**小幅迈进**。

---

## 4. 社区热点

⚠️ **今日社区互动数据异常静默**：

- 所有 8 条 PR 的 `👍` 反应数均为 **0**
- 评论数（comments）字段全部为 `undefined`，即**无任何评论产生**
- 过去 24 小时无新 Issue

**可能解读**：
1. 项目当前主要由维护者 + Dependabot 驱动，外部贡献者参与度低；
2. 周末/节假日效应（具体原因待观察）；
3. 仓库处于版本发布前的"代码冻结-整理期"，活跃贡献者减少交互。

📌 建议维护者考虑在下一个 PR/Issue 中主动 `@` 标记相关 reviewer 推动讨论，以保持社区热度。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR | 链接 |
|--------|------|------|--------|------|
| 🔴 **High** | Web UI 配置 Google OAuth 后 Gmail/Calendar 无法激活 | 已修复（今日关闭 #8102） | ✅ [#8102](https://github.com/nearai/ironclaw/pull/8102) |

**#8102 详细分析**：
- **触发条件**：Operator 通过 Web UI（而非环境变量）配置 Google OAuth client credentials
- **症状**：OAuth 全流程成功 → 扩展激活失败 → 抛出 `Provider...` 错误
- **根因**：`provider-instance` 的 readiness 解析逻辑没有正确处理管理员配置路径
- **修复策略**：实时解析 provider-instance readiness，并**优先**采用 administrator configuration
- **影响面**：所有自托管 IronClaw 并使用 Web UI 配置 Google OAuth 的用户

📌 **今日无新增 Bug 报告**，且最重要的一条 Bug 已闭环，**稳定性面处于积极状态**。

---

## 6. 功能请求与路线图信号

⚠️ **今日无新功能请求**（过去 24 小时 Issues 数量为 0）。

**间接信号**（从已有 PR 推断路线图走向）：

1. **1.4.1-rc.1 发布候选**（[#8105](https://github.com/nearai/ironclaw/pull/8105)）：表明 1.4.1 是一个**补丁级（patch）版本**，主要承载 Bug 修复和小幅优化，而非大特性。
2. **依赖全面升级**：wasmtime / wasi / wit-component / wit-parser 等 WASM 相关包准备升级（[#7834](https://github.com/nearai/ironclaw/pull/7834)），暗示**WASM 扩展运行时仍是项目核心能力之一**。
3. **GitHub Actions 大版本跳变**：`actions/setup-node` 从 `4.0.2` → `7.0.0`，属于 major version bump，可能涉及 CI 行为变化，需关注是否影响 release workflow。

📌 综合判断：**1.4.1 版本定位为"稳定性 + 扩展系统健壮性"补丁**，近期不太可能出现重大新功能。

---

## 7. 用户反馈摘要

⚠️ **数据空白**：今日无 Issue 新增，也无任何 PR 评论，因此**无真实用户痛点、场景或满意度数据可提炼**。

唯一可关联的"准用户反馈"来源于 #8102 的 Bug 现象描述：
- 用户/操作员的典型场景：**自托管 IronClaw + Web UI 集中管理 OAuth 凭据**（而非 .env 文件）
- 痛点：管理界面配置后无法生效，迫使运维回退到环境变量方式

📌 这是项目**自托管/企业化部署路径**上的典型用户画像，建议在官方文档中补充"Web UI OAuth 配置"使用说明。

---

## 8. 待处理积压

以下 PR **OPEN 超过 7 天**，尚未合并，需要维护者关注：

| PR | 标题 | 创建日期 | 积压天数 | 链接 |
|----|------|----------|----------|------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | wasm 组 4 项依赖更新（size: L, risk: medium） | 2026-08-23 | **29 天** 🔴 | [链接](https://github.com/nearai/ironclaw/pull/7834) |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | tokio-ecosystem 组 2 项依赖更新 | 2026-09-06 | 15 天 | [链接](https://github.com/nearai/ironclaw/pull/8078) |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | actions 组 8 项依赖更新 | 2026-09-20 | 1 天 | [链接](https://github.com/nearai/ironclaw/pull/8103) |
| [#8104](https://github.com/nearai/ironclaw/pull/8104) | everything-else 组 29 项依赖更新 | 2026-09-20 | 1 天 | [链接](https://github.com/nearai/ironclaw/pull/8104) |
| [#8105](https://github.com/nearai/ironclaw/pull/8105) | chore(release): cut 1.4.1-rc.1 | 2026-09-21 | 0 天 | [链接](https://github.com/nearai/ironclaw/pull/8105) |

🔴 **特别关注 [#7834](https://github.com/nearai/ironclaw/pull/7834)**：积压 **29 天**，且标签显示 `size: L, risk: medium`，涉及 wasmtime/wasi/wit-component/wit-parser 四个核心 WASM 包的更新。由于影响 WASM 扩展运行时，建议维护者：
1. 在 RC 之前完成 review 与合并测试；
2. 如与 [#8104](https://github.com/nearai/ironclaw/pull/8104) 存在版本冲突，需协调合并顺序。

📌 **健康度提醒**：当前共 **5 条待合并 PR**，均为依赖/发布相关，无功能性 backlog；长期积压主要是依赖升级，技术债风险可控但需持续跟进。

---

## 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|------|------|------|
| **代码活跃度** | ⭐⭐⭐☆☆ | 仅 1 条实质功能 PR 合并 |
| **社区互动** | ⭐☆☆☆☆ | 0 评论、0 反应、0 Issue |
| **Bug 处理速度** | ⭐⭐⭐⭐☆ | 关键 Bug 当周闭环 |
| **发布节奏** | ⭐⭐⭐⭐☆ | 1.4.1-rc.1 推进中 |
| **依赖维护** | ⭐⭐⭐⭐⭐ | Dependabot 高频自动更新 |

**整体评价**：项目处于**稳定的维护性阶段**，核心功能成熟，Bug 处理及时，但社区参与度和外部贡献较少，需要关注长期贡献者生态。

---

*报告基于 GitHub 公开数据自动生成，数据时间为 2026-09-21。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-09-21** | **数据来源：github.com/netease-youdao/LobsterAI**

---

## 一、今日速览

LobsterAI 项目今日保持高活跃度，过去 24 小时共有 14 个 PR 更新、3 个 Issue 更新，并伴随 4 个新版本发布（2026.9.14 / 9.15 / 9.17 / 9.20）。维护主力 @fisherdaddy 与 @alison-xx 持续推进 OpenClaw 网关稳定性、浏览器能力扩展及订阅商业化相关工作。PR 关闭/合并节奏稳定（7 关闭 + 7 待合并），Issue 端以历史遗留 stale 议题为主，未见新增严重故障报告。整体健康度良好，呈现"集中修复 + 持续发版"的稳态。

---

## 二、版本发布

近一周共发布 4 个版本，迭代密集：

| 版本 | 日期 | 主要变化 |
|------|------|---------|
| **2026.9.20** | 9.20 | 子代理（subagent）会话可见性、内置浏览器 passkey/WebAuthn 支持、定时任务调度相关增强 |
| **2026.9.17** | 9.17 | OpenClaw 共享状态 schema 迁移、修复快照回滚、agent media 迁移处理 |
| **2026.9.15** | 9.15 | OpenClaw 兼容性修复、xAI 鉴权凭据迁移至规范化的 SQLite 存储 |
| **2026.9.14** | 9.14 | 升级 OpenClaw 至 v2026.8.1、改进 artifact 工作流、支持 markdown 编辑 |

**迁移与注意事项：**
- **OpenClaw 升级链（9.14 → 9.15 → 9.17 → 9.20）**：涉及多次 schema 迁移和凭据存储切换（xAI auth → SQLite），升级前建议备份 `~/.openclaw` 目录，并关注 #2729 中提到的 Windows gateway 退出检测修复。
- **2026.9.20 引入 passkey/WebAuthn**：macOS 端需配置新的 entitlements，重新打包时需确认签名/公证链路。
- **PR #2724 已移除 cowork 后台任务（background jobs）特性**：下游若依赖此能力需提前适配。

> 详见 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)

---

## 三、项目进展（已合并/关闭 PR）

| PR | 标题 | 意义 |
|----|------|------|
| [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) | fix(openclaw): recover Windows gateway exits and repair startup | 修复 Windows 平台 OpenClaw 网关 `SIGKILL` 后未确认退出的问题，并修补一键修复链路上的两个阻塞点 |
| [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) | fix: openclaw sqlite readonly result file | 解决 SQLite 结果文件只读导致的写入失败 |
| [#2725](https://github.com/netease-youdao/LobsterAI/pull/2725) | Release/2026.9.18 | 发布 2026.9.18 候选版本（覆盖 renderer/build/main/openclaw/cowork/im/artifacts 等多个领域） |
| [#2724](https://github.com/netease-youdao/LobsterAI/pull/2724) | refactor(cowork): remove background jobs feature | 移除 cowork 后台任务模块，清理 OpenClaw `tasks.list/cancel` 网关调用、相关 IPC 通道与 i18n 资源 |
| [#2723](https://github.com/netease-youdao/LobsterAI/pull/2723) | feat(browser): add passkey/WebAuthn support for the in-app agent browser | 新增浏览器 passkey 服务、页面观察器、preload bridge 及 macOS WebAuthn 集成 |
| [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) | fix(scheduled-task): preserve Weixin target casing and explain resend rejection | 保留 Weixin 通道原生大小写，修复重发前的目标归一化，并对会话过期/额度耗尽给出可读提示 |
| [#2720](https://github.com/netease-youdao/LobsterAI/pull/2720) | feat(subscription): add one-cent trial and low-credit purchase offers | 商业化里程碑：新增 ¥0.01 试用活动、低余额购买优惠、频控与埋点体系 |

**总结：** 本批次显著推进了三块能力——
1. **OpenClaw 跨平台稳定性**（Windows 网关退出确认 + SQLite 只读修复）；
2. **浏览器与身份认证**（WebAuthn/passkey 落地 macOS）；
3. **订阅商业化体系成型**（试用 + 低余额优惠 + 埋点）。

---

## 四、社区热点

| 议题 | 链接 | 评论 | 关注点 |
|------|------|------|--------|
| [#1068 删除 agent 后任务列表未自动刷新](https://github.com/netease-youdao/LobsterAI/issues/1068) | 2 | UI 状态同步缺陷，今日已 CLOSED |
| [#1007 Agent Engine 无限重启](https://github.com/netease-youdao/LobsterAI/issues/1007) | 1 | 长期稳定性诉求，期望通过配置解决 |
| [#1003 Notion MCP 环境变量丢失](https://github.com/netease-youdao/LobsterAI/issues/1003) | 1 | MCP Bridge 启动子进程未注入环境变量导致 401 |

**诉求分析：**
- 用户对 **Agent 管理界面的状态一致性** 敏感（#1068），删除/切换后未自动刷新属于明显体验缺陷；
- **MCP Bridge 的环境变量传递** (#1003) 是外部工具集成的关键路径，问题一旦出现即影响生产可用性；
- **Agent Engine 反复重启** (#1007) 反映出生产环境对稳健运行的强需求，用户期望获得可控的配置开关或自愈能力。

---

## 五、Bug 与稳定性

| 严重度 | 问题 | 状态 |
|--------|------|------|
| 🔴 高 | Agent Engine 无限重启（#1007） | **Open**，尚未定位根因，无关联 fix PR |
|  中 | Notion MCP 启动时未传递 Token，鉴权 401（#1003） | **Open**，怀疑 MCP Bridge `child_process.spawn` 未传/未正确传 env |
| 🟡 低 | 删除 agent 后任务列表未自动刷新（#1068） | **CLOSED**（标记 stale，已关闭） |

**已落地修复：**
- Windows 网关重启失败 [#2729](https://github.com/netease-youdao/LobsterAI/pull/2729) ✅
- SQLite 只读 result file [#2728](https://github.com/netease-youdao/LobsterAI/pull/2728) ✅
- Weixin 重发目标大小写丢失 [#2722](https://github.com/netease-youdao/LobsterAI/pull/2722) ✅

---

## 六、功能请求与路线图信号

| 提案 | PR/Issue | 纳入下一版本的概率 |
|------|---------|-------------------|
| **数字员工 / 专家团队 / 能力市场** | [#2726](https://github.com/netease-youdao/LobsterAI/pull/2726) | 🟢 高——Open，待合并，规模大 |
| **IM 配置热更新（无需重启 gateway）** | [#2721](https://github.com/netease-youdao/LobsterAI/pull/2721) | 🟢 高——解决痛点，明确指向运行时生效 |
| **OpenClaw entry hooks 持久化** | [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) | 🟢 高——修复 #2654 衍生问题 |
| **预设 Agent 模板扩展（+6）** | [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | 🟡 中——stale 较久，但场景明确 |
| **Prompt 模板库（变量填充 + 复制）** | [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | 🟡 中——用户价值清晰，长期未响应 |
| **可扩展 artifacts 预览管线** | [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | 🟡 中——HTML/React/Mermaid 实时预览 |
| **斜杠触发技能选择器** | [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | 🟡 中——输入体验增强 |

**路线图观察：** 近期 PR 出现明显向"产品化 + 商业化"倾斜的迹象——#2720（订阅/试用）+ #2726（能力市场）+ #2721（IM 热更新）共同勾勒出"市场 + 支付 + 运行时可观测/可控制"的下一阶段骨架。

---

## 七、用户反馈摘要

- **@OnePieceJoker (#1068)**：删除当前 agent 后，主界面的任务列表未自动切换到新 agent 的数据；当仅剩 main agent 时体验割裂。期望：**操作后状态应自动同步**。今日已关闭，疑似已在主线修复但未在 issue 中补充 commit 引用。
- **@cv696 (#1003)**：Notion MCP 在 Bridge 中启动失败，反复尝试配置 Token/环境变量名仍返回 401。痛点：**MCP Bridge 层而非用户配置层**出现问题，社区自行排查门槛高。
- **@HsiYaTung (#1007)**：Agent Engine 频繁无限重启，影响生产使用；用户希望能给出**配置层面的解决方案或防护策略**，而非只能被动重启应用。

整体反馈显示用户在 **agent 生命周期管理、外部工具集成链路、引擎自愈能力** 三方面期待更高可控性与一致性。

---

## 八、待处理积压提醒

以下议题/PR 已标注 `[stale]` 超过 5 个月，维护者建议优先 review：

| 类别 | 编号 | 标题 | 创建日期 |
|------|------|------|---------|
| Issue | [#1003](https://github.com/netease-youdao/LobsterAI/issues/1003) | Notion MCP 环境变量未传递 | 2026-03-28 |
| Issue | [#1007](https://github.com/netease-youdao/LobsterAI/issues/1007) | Agent Engine 无限重启 | 2026-03-29 |
| PR | [#1008](https://github.com/netease-youdao/LobsterAI/pull/1008) | +6 预设 Agent 模板 | 2026-03-29 |
| PR | [#1009](https://github.com/netease-youdao/LobsterAI/pull/1009) | Prompt 模板库 | 2026-03-29 |
| PR | [#1011](https://github.com/netease-youdao/LobsterAI/pull/1011) | 可扩展 artifacts 预览管线 | 2026-03-29 |
| PR | [#1013](https://github.com/netease-youdao/LobsterAI/pull/1013) | 斜杠技能选择器 | 2026-03-29 |

**维护建议：**
1. #1003/#1007 为外部可见的产品稳定性议题，建议至少给出"是否在最新版本已修复 / 计划哪个版本修复"的官方回复；
2. 4 个 stale PR 均聚焦"输入体验 + 模板化能力"，与 #2726 的能力市场方向高度契合，可考虑在路线图中统一规划，避免零散合并带来的架构分散。

---

> **报告说明**：本报告基于公开 GitHub 数据自动整理，链接均为 `github.com/netease-youdao/LobsterAI` 仓库真实地址。数据时间窗：2026-09-20 ~ 2026-09-21。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 — 2026-09-21

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低水位**状态。过去 24 小时内 Issue 通道完全静默（新开/活跃/关闭均为 0），Pull Request 通道仅有 1 条新增（#1280，目前 OPEN 状态，尚未合并）。无新版本发布。整体来看，项目处于**维护性迭代阶段**——没有大规模的功能推进，开发者精力集中在对工具调用（tools）配置逻辑的精确性修复上。健康度评估：**平稳但需关注节奏**，单日提交量偏低，建议关注维护者响应周期是否正常。

---

## 2. 版本发布

🚫 **本节今日省略**——过去 24 小时内无任何新版本发布（无 Release Tag，无 GitHub Release 记录）。

---

## 3. 项目进展

### 📌 PR #1280 — `fix(tools): preserve preset tools for empty active_tools`（OPEN，未合并）
- **作者**：[@mikemikimike](https://github.com/mikemikimike)
- **状态**：待合并（OPEN），0 评论、0 👍 反应
- **创建/更新时间**：2026-09-21
- **修复对象**：[Issue #1277](https://github.com/moltis-org/moltis/issues/1277)
- **链接**：[moltis-org/moltis#1280](https://github.com/moltis-org/moltis/pull/1280)

**技术要点**：
- 将显式为空的 `active_tools` 数组**视为无 per-turn 覆盖**，从而保留预设（preset）的工具控制策略；
- 非空的 per-turn 工具列表继续受 preset 的 allow/deny 策略约束（语义保持）；
- 旨在消除"用户配置为空数组时被误判为禁用全部工具"的歧义行为。

**推进评估**：该 PR 属于**精确行为修复**（precision fix），并不新增能力，但提升了 tools 子系统的**可预测性**。由于尚未合并、未触发任何 review 对话，项目今日实质性的功能前进幅度可视为**接近于零**。

---

## 4. 社区热点

| 指标 | 数值 |
|------|------|
| 今日新开/活跃 Issue | 0 |
| 今日新开/活跃 PR | 1（#1280） |
| 评论总数 | 0（数据缺失，标记为 `undefined`） |
| 总 👍 数 | 0 |

**分析**：今日社区处于完全静默期，无讨论热点。可观察到的唯一信号来自 PR #1280 修复的 Issue #1277，但该 Issue 本身也未在今日产生新评论。社区参与度信号不足以推断用户诉求趋势。

---

## 5. Bug 与稳定性

### 🐛 Bug 修复追踪

| 严重程度 | Bug 编号 | 描述 | 关联 Fix PR | 状态 |
|----------|----------|------|-------------|------|
| 🟡 中 | [#1277](https://github.com/moltis-org/moltis/issues/1277) | `active_tools` 为空数组时工具控制行为不符合预期（可能误清空 preset 已配置的工具） | [PR #1280](https://github.com/moltis-org/moltis/pull/1280) | Fix 已提交，**未合并** |

**评估**：
- 该 Bug 影响 tools 子系统的配置一致性，但不太可能导致服务崩溃或数据丢失，归类为**功能性/逻辑性**问题。
- Fix PR 已就位但尚未进入评审/合并流程，**闭环风险存在**，建议维护者优先 review。

---

## 6. 功能请求与路线图信号

⚠️ **信号不足**——今日无新功能请求提交，无法识别新增路线图候选。结合 PR #1280 的方向可做如下推断：

- **工具控制语义精细化** 仍是当前迭代主线：维护者正在系统性地清理 tools 配置层的边界情况（empty array、preset allow/deny 作用域），可能预示未来版本会强化 preset → turn → call 的多层继承/覆盖模型。
- 鉴于本日数据样本极小，路线图判断应**保持谨慎**，建议结合近 7 日趋势综合评估。

---

## 7. 用户反馈摘要

⚠️ **本节数据为空**——今日无任何 Issue 评论或 PR 互动可供分析。无法提炼用户痛点、场景或满意度信号。

**保留建议**：可回溯 [Issue #1277](https://github.com/moltis-org/moltis/issues/1277) 的原始描述以获取该 Bug 的用户上下文，作为后续反馈积累的起点。

---

## 8. 待处理积压

### 🔴 需维护者立即关注

| 类型 | 编号 | 等待时长 | 紧迫度 |
|------|------|----------|--------|
| 待合并 PR | [#1280](https://github.com/moltis-org/moltis/pull/1280) | 当日新提交 | 🟡 中 |

**风险提示**：
- PR #1280 创建于今日但**尚未收到任何 review 反馈**，若长期搁置将延迟 #1277 Bug 的修复闭环；
- 由于今日 Issue 通道完全静默，无法判断是否存在"已报告但未在数据快照中体现"的待响应积压；
- 建议维护者建立 **T+1 review SLA**（每日处理前日新增 PR），避免单点积压演变为长期债。

---

### 📊 项目健康度仪表盘

```
活跃度       ▓▓░░░░░░░░  极低
合并节奏     ░░░░░░░░░░  无合并
社区参与     ▓░░░░░░░░░  静默
Bug 闭环     ▓▓▓░░░░░░░  进行中（PR 未合并）
版本输出     ░░░░░░░░░░  无
```

**总结**：今日 Moltis 项目呈现典型的"维护型低活跃日"特征。唯一动态 PR #1280 体现了工具配置层的代码质量改进，但项目整体的向前推进幅度有限。**建议**：维护者当日应至少对 PR #1280 进行 triage 与初步 review，以保持 Bug 修复链路的响应势能。

---

*报告基于 2026-09-21 GitHub 数据快照生成，所有链接均指向 moltis-org/moltis 仓库。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-09-21

> 数据来源：GitHub `agentscope-ai/CoPaw`（注：仓库历史 Issue / PR 多沿用旧名称 *QwenPaw*，引用时保留原标题以确保链接可达）

---

## 1. 今日速览

CoPaw 进入 **v2.2.2-beta.3** 发布冲刺的密集修复期，过去 24 小时共有 **60 项更新**（25 条 Issue + 35 条 PR），活跃度高于近期均值。结构性信号有三个：

- **一次新版本发布**（v2.2.2-beta.3），配套发出 Release Duty 安装校验 Issue #7891（4 小时内要求全平台绿灯），说明 2.2.2 系列已进入准 GA 节奏。
- **多项关键修复 PR 已落地或正在合入**：DoomLoopGate 误升级、qwenpaw-pet 审批链路、DeepSeek 音频/PDF 序列化、E2E 选择器回归、Tool 卡"执行中"死锁等——意味着官方正在集中清理影响日常使用的高频路径。
- **多租户 Hub 路线图讨论 #7318 热度不减**（31 条评论，4 👍），是当前社区最关心的方向性议题。

整体评估：**项目健康度向好**——bug 流入量高但响应链路短，新功能与基础设施 PR 同步推进，CI/测试覆盖率侧也有实质性提交。

---

## 2. 版本发布

### v2.2.2-beta.3（Beta）
- 发布页：https://github.com/agentscope-ai/CoPaw/releases/tag/v2.2.2-beta.3
- 截止校验：2026-09-20 07:07 UTC（Release Duty Issue #7891）

**变更内容（基于已捕获的提交片段）：**
- `fix(console): restore assistant response actions` —— PR #7851（@zhijianma）：恢复控制台中助手回复消息上的操作按钮（推测与 #7502 重构回归相关）。
- `fix(e2e): re-anchor console selectors broken by the #7502 redesign and harden session-list assertions` —— 重新定位被 #7502 设计改版破坏的控制台 E2E 选择器，并加固会话列表断言。

**迁移 / 兼容性提示：**
- 这是一个 **Beta** 构建，**不建议生产环境升级**。建议在桌面端与 Docker Hub 部署中分别跑安装校验清单（#7891 中四个 checkpoint）。
- 由于 #7502 重构影响面较大，建议回归以下三类场景：① 助手消息操作按钮；② 会话列表/切换；③ 文件区文件标签页（参见 PR #7902）。

---

## 3. 项目进展（已关闭 / 已合并 PR）

| 类别 | PR | 摘要 | 影响 |
|---|---|---|---|
| 审批链路修复 | [#7904](https://github.com/agentscope-ai/QwenPaw/pull/7904) | `fix(pet): forward approval actor to native service`，修复 #7856 中 `qwenpaw-pet 0.1.1` 丢 `actor` 参数致审批全量失败的问题 | 解锁桌面端插件工作流 |
| 体系结构扩展 | [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | `feat(providers): add AgentScope Platform as built-in provider`（OpenAI 兼容，默认 base URL `https://platform.agentscope.io/compatible-mode/v1`，含 Logo 与「Get API Key」入口） | 多 Provider 战略又一落子 |
| 音频容灾 | [#7886](https://github.com/agentscope-ai/QwenPaw/pull/7886) / [#7887](https://github.com/agentscope-ai/QwenPaw/pull/7887) | 让音频回退分类器识别 `input_audio` 的 `unknown variant` 错误，触发重试与能力学习路径（修 #7876） | 修复一个 `.wav` 即永久卡死会话的严重链路 |
| 桌面端 UX | [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | 桌面版聊天输出自动识别本地路径、点击打开系统文件管理器（关闭 #4830） | 桌面体验补齐 |
| Loop 稳定性 | [#7345](https://github.com/agentscope-ai/QwenPaw/pull/7345) | 修复强制停止后工具卡永远停在「执行中」的回归（关闭 #7321） | 高频 UX 问题 |
| 测试覆盖 | [#7894](https

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-21

---

## 📋 今日速览

ZeroClaw 仓库今日进入"设计收尾 + 落地冲刺"阶段。过去 24 小时共有 **50 条 Issue 更新（关闭 33 条 / 新开或活跃 17 条，关闭率 66%）** 与 **50 条 PR 更新（仅 6 条合并或关闭，44 条仍待合并）**。Issue 端大量 RFC（Request for Comments）类设计讨论完成闭环，但 PR 端的"待合并积压"显著增加，且无新版本发布。整体看项目处于**架构重构后期**，安全、网关、内存与 ACP 多个主线并行推进，但合并节奏有所放缓，建议维护者关注 PR review 排队。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时未发布任何 Release。建议关注 PR #10817（`fix(release): fail closed during version preparation`）与 PR #10815（`fix(release): order versioned dev dependencies before publication`）——这两条合并后，下一次发布流程将更加稳健。

---

## 📈 项目进展

过去 24 小时合并或关闭的 PR 共 6 条，最具代表性的是：

| PR | 标题 | 影响 |
|---|---|---|
| [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | `fix(browser): make full browser automation opt-in, separate from browser_open` | 安全加固，过去 `[browser] enabled=true` 会同时暴露 `browser_open` 与完整 Chrome 自动化工具，后者被默认强制加入 auto-approve 列表；本 PR 拆分为两个开关 |
| 其他 5 条合并/关闭 PR | （详细数据未在 Top 20 中展示） | 涉及通道、构建、文档修补 |

**进展评估**：今日推进量较轻，单条安全类 PR 落地意义重大但整体节奏偏慢。考虑到 44 条 PR 仍处于 OPEN 状态，**合并吞吐已成为当前瓶颈**。

---

## 🔥 社区热点（按评论数排序）

1. **[#6850 — Decouple memory lifecycle policy from storage backends](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)**（26 评论）
   - 诉求：将"记忆生命周期治理"与"后端存储"解耦，避免每个网关/通道重复实现整合与治理逻辑。属于 memory 主线核心 RFC，今日已关闭。

2. **[#8603 — ZeroClaw Chat Completions profile](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)**（25 评论）
   - 诉求：暴露 OpenAI Chat Completions 协议，让 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等客户端可直接对接。**对生态扩张意义重大**。

3. **[#7155 — Per-execution confirmation tier for high-risk shell commands](https://github.com/zeroclaw-labs/zeroclaw/issues/7155)**（24 评论）
   - 诉求：借鉴 Claude Code 的 allow/ask/deny 模式，为 shell 高危命令增加分级确认机制。P1 优先级，已进入 Revision 3。

4. **[#8303 — Goal mode v1: bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)**（23 评论）
   - 诉求：让代理可在多轮内持续追求一个有界目标，重写 v1 提案收窄至前台 Matrix 工作。

6. **[#8780 — Realtime speech-to-speech channel for Gemini Live](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)**（22 评论）
   - 诉求：基于 broker 契约的实时语音通道，以 Gemini Live 为首个目标模型。

**诉求分析**：Top 5 几乎全部集中在"架构边界"——memory / 网关 / 安全 / agent loop / 通道。社区期待 ZeroClaw 通过 RFC 流程确立清晰的设计契约，再驱动 PR 实现。

---

## 🐛 Bug 与稳定性

今日在 Open PR 中标记为 `bug` 的关键修复（按风险排序）：

| 严重度 | PR | 标题 | 影响面 |
|---|---|---|---|
| 🔴 高 | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | `fix(runtime): recover from rejected image requests` | 修复图像请求被拒绝（HTTP 400）后的代理恢复逻辑，覆盖 Anthropic/Compatible/Router provider |
| 🔴 高 | [#10931](https://github.com/zeroclaw-labs/zeroclaw/pull/10931) | `fix(service): bound Windows task stdout and stderr logs` | Windows 调度任务日志无界增长的修复，影响所有 Windows 用户 |
| 🔴 高 | [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | `fix(security): resolve host launchers before workspace cwd` | 涉及 native/Docker/Firejail/Bubblewrap 启动器对 workspace cwd 的解析顺序，安全敏感 |
| 🔴 高 | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | `fix(tools): honor allowed roots for git operations` | Git 操作未受 allowed roots 约束的安全缺陷 |
| 🔴 高 | [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | `fix(channels): require sender authorization for Bluesky and Reddit` | 跨多个通道（Bluesky/Reddit 等）的发送方授权问题 |
| 🟡 中 | [#10982](https://github.com/zeroclaw-labs/zeroclaw/pull/10982) | `fix(channels/whatsapp-web): attach inline previews to outgoing images` | WhatsApp 通道发送图片无缩略图导致预览卡片为空 |
| 🟡 中 | [#10803](https://github.com/zeroclaw-labs/zeroclaw/pull/10803) | `fix(providers): give single-candidate stream recovery its retry budget` | 流式恢复的 retry budget 分配问题 |
| 🔴 高 | [#9830](https://github.com/zeroclaw-labs/zeroclaw/pull/9830) | **已关闭**：`fix(browser): make full browser automation opt-in` | 浏览器自动化强制暴露问题已修复 ✅ |

**整体看**：Bug 修复集中在 security / runtime 两条线，Windows 服务日志、git 越权、provider 恢复、浏览器自动化的潜在高危问题均在排队合并。

---

## 💡 功能请求与路线图信号

结合现有 RFC 与 PR，下一版本（推测 v0.9.0）可能落地的功能：

| 方向 | 证据来源 | 成熟度 |
|---|---|---|
| **OpenAI Chat Completions 协议适配** | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC 已 accepted，预期率先实现 |
| **Shell 命令分级确认 (Claude Code 模式)** | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | P1，RFC Rev 3 已确认 |
| **Pluggable inbound auth + canonical principals** | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | 状态 `in-progress`，明确目标为 Identity & Access milestone |
| **Runtime-owned security decision pipeline** | [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) | Rev 6，目标 v0.9.0 安全架构 |
| **Computer-use 桌面交互** | [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | Rev 2 含安全澄清 |
| **A2A outbound client (A2ATool)** | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | 派生于 #3566 |
| **SOP capability permission contract** | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) | Rev 3，目标 v0.9.0 SOP 授权 |
| **WhatsApp Web 通道功能完善** | PR [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979)（create_room/late）、[#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980)（PDF 预览）、[#10984](https://github.com/zeroclaw-labs/zeroclaw/pull/10984)（native polls） | 多 PR 并行，开发态活跃 |

**路线图信号**：v0.9.0 主线已明确锁定在"安全架构 + 身份访问"双里程碑；Web 通道与 Chat Completions 协议有望成为 0.9.x 版本的用户增长点。

---

## 🗣️ 用户反馈摘要

从 Issues 评论中提炼的真实诉求：

- **生态兼容压力**：OpenAI 协议适配（#8603）的诉求贯穿 Open WebUI、Aider、LangChain 等多个生态客户端，表明社区希望"接入既有客户端"而非"重建客户端"。
- **安全焦虑**：#7155（shell 命令分级）、#7141（inbound auth）、#7142（security pipeline）、#6971（security posture）的并进说明社区运营方对当前安全边界"看得见但不放心"，希望建立可视化、可审计、可叠加的纵深防御。
- **记忆可靠性**：memory 主线（#6850、#9048、#9103）共同诉求是"对话历史 ≠ 长期记忆"，目前实现将二者混入同一后端，导致检索与治理困难。
- **WhatsApp 体验问题**：多条 PR 反馈手机端预览缺失（图片/PDF 无 thumbnail）、native polls 降级为文本，提示移动端 UX 仍有差距。
- **ACP 健壮性**：#10197（持久化中断轮次）、#10596（ACP transcript 分页）反映用户对"代理崩溃后状态能否恢复"高度敏感。
- **通道发送方授权**：#9428 修复 Bluesky/Reddit 授权问题，提示部分通道当前默认信任发送方，存在被滥用风险。
- **效率/成本治理**：#10804（delegated sub-loop 成本跟踪）、#10222（单工具 provider 轮次）、#10351（execution-tree 迭代预算）三条集中于"代理越权调用与成本失控"。

**总体满意度信号**：架构设计深度获认可（RFC 体系成熟），但用户对"功能落地节奏"和"安全边界明确性"仍有不满。

---

## ⏳ 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 状态 |
|---|---|---|---|---|
| 决策跟踪 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs and design issues | 2026-07-04 | **OPEN**，是 Top 30 中唯一仍开放的关键 Issue |
| 大型 PR | [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | canonical sandbox_policy schema with application-layer enforcement | 2026-06-17 | 仍 open，已 96 天 |
| 大型 PR | [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | enforce execution-tree iteration budgets | 2026-08-25 | 仍 open，标签 `needs-maintainer-review` |
| 大型 PR | [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | recover from rejected image requests | 2026-08-30 | 仍 open，标签 `needs-maintainer-review` |
| 大型 PR | [#9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428) | require sender authorization for Bluesky and Reddit | 2026-07-27 | 仍 open，标签 `needs-maintainer-review` |
| 大型 PR | [#10337](https://github.com/zeroclaw-labs/zeroclaw/pull/10337) | honor allowed roots for git operations | 2026-08-25 | 仍 open，标签 `needs-maintainer-review` |
| 大型 PR | [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) | persist interrupted turn progress | 2026-08-20 | 仍 open，标签 `needs-maintainer-review` |
| 大型 PR | [#10596](https://github.com/zeroclaw-labs/zeroclaw/pull/10596) | paginate persisted ACP transcripts | 2026-09-03 | 仍 open，标签 `needs-maintainer-review` |

**维护者建议**：
- 至少 7 条高风险/大尺寸 PR 处于 `needs-maintainer-review` 状态，平均等待时间超过 20 天，部分超过 90 天。
- 建议对 #7821（sandbox_policy）、#10337（git allowed roots）等**安全敏感** PR 优先处理，避免安全债累积。
- #8692 决策队列的存在表明 maintainer 工作流瓶颈已显式可见，可考虑拆分 review 责任或招募更多 code owner。

---

## 🩺 项目健康度速评

| 指标 | 数值 | 评估 |
|---|---|---|
| Issue 关闭率 | 66% | 🟢 良好 |
| PR 合并率 | 12%（6/50） | 🔴 偏低 |
| 新版本发布 | 0 | 🟡 平稳 |
| RFC 流程健康度 | Top 30 几乎全部 accepted | 🟢 优秀 |
| 安全类 PR 占比 | 高（约 35% 的 open PR 涉及 security） | 🟢 方向正确 |
| PR review 积压 | 44 条 OPEN | 🔴 需关注 |
| 贡献者活跃度 | Audacity88、RustLangLatam、JordanTheJet、MannXo、vrurg 等多人持续提交 | 🟢 健康 |

**总结**：ZeroClaw 当前处于"设计已收敛、落地需加速"的关键节点。Issue 与 RFC 端运转良好，但 PR review 吞吐瓶颈明显。下一步的关键动作应是**清理 PR 积压**与**发布 v0.9.0 安全架构里程碑**。

---

*报告生成时间：2026-09-21 · 数据来源：GitHub API · 项目地址：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*