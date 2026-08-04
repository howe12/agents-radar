# OpenClaw 生态日报 2026-08-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-04 01:55 UTC

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

# OpenClaw 项目日报 · 2026-08-04

> 数据范围：过去 24 小时（2026-08-03 ~ 2026-08-04）
> 数据源：github.com/openclaw/openclaw Issues / Pull Requests / Releases

---

## 一、今日速览

OpenClaw 今日保持**高强度迭代节奏**：过去 24 小时内共有 **500 条 Issue** 与 **500 条 PR** 发生更新，Issue 关闭 33 条、PR 关闭/合并 168 条，关闭率分别约为 6.6% 与 33.6%。在版本侧，连续发布了两枚补丁 `v2026.7.1-1` 与 `v2026.7.1-2`，集中修复 Codex 会话不终态、Memory Core 启动以及 npm 插件元数据解析问题，呈现"小步快跑、热修优先"的维护姿态。

从议题结构看，**P1 级别问题占比偏高**且集中在四大方向：**Codex/Codex app-server 与 Anthropic Claude CLI 的 turn/completed 失联**、**Realtime Voice 资源无界**、**subagent 完成结果静默丢失**、**会话/上下文状态损坏**（如 `expectedLeafEntryId` 不刷新、Codex binding tombstone）。同时一批"过水坑"类 UX 请求（YAML 配置、MathJax、LaTeX、安卓 Chat-First、Memory Trust Tag）保持活跃，说明社区处于"基础设施稳定 + 产品面探索"双线推进状态。**整体项目健康度评估：中等偏好，但维护者注意力存在 P1 拥挤风险，建议优先关闭 Diamond/Platinum 等级的 session-state 与 message-loss 议题。**

---

## 二、版本发布

今日发布 **2 个补丁版本**（均针对 `v2026.7.1` 系列）：

### 🔖 v2026.7.1-2
**npm 插件元数据解析修复**
- **修复内容**：适配新版 npm 客户端传入的 singleton-array 元数据，使官方追踪插件可正常安装与更新到修复版本。
- **关联 PR**：[#108336](https://github.com/openclaw/openclaw/pull/108336)
- **影响面**：仅影响 npm 渠道官方插件的安装/升级流程；非破坏性变更。
- **迁移注意**：用户无需手动操作，正常 `npm update` 即可获得修复。

### 🔖 v2026.7.1-1
**Codex 进度回复 + Memory Core 启动修复**
- **修复内容**：
  1. Codex progress reply 在已发出进度消息后保持 app-server turn 运行，使其能到达 authoritative terminal response，避免半途停止。
  2. Memory Core 启动时恢复 legacy-index 与 ca…（摘要截断，疑似涉及 derived 索引恢复）。
- **关联 Issue/PR**：[#106961](https://github.com/openclaw/openclaw/issues/106961)、[#108487](https://github.com/openclaw/openclaw/issues/108487)
- **致谢**：@joshavant（Codex 修复）
- **迁移注意**：升级即可，建议同时确认 Memory 数据目录完整。

> ⚠️ 本日 release 标签编号非顺序递增（`-1 → -2`），请升级时按 `-1` → `-2` 顺序滚动，避免 npm 单例元数据校验差异。

---

## 三、项目进展

今日共 **关闭/合并 168 个 PR**，亮点包括：

| 类型 | PR | 标题 | 价值 |
|---|---|---|---|
| 🔒 安全 | [#118854](https://github.com/openclaw/openclaw/pull/118854) | fix(gateway): keep plugin model allowlists static | 修复子代理与 runtime-LLM 静态模型归一化，避免动态归一化导致的授权绕过（[Issue #118853](https://github.com/openclaw/openclaw/issues/118853)） |
| 🧪 QA | [#119032](https://github.com/openclaw/openclaw/pull/119032) | test(qa): prove agent session scope continuity | 补齐 agent runtime 主测试覆盖：turn 间 session scope 隔离 |
| 🧪 QA | [#119021](https://github.com/openclaw/openclaw/pull/119021) | chore(qa): prove workspace mutation tools | 为 `apply_patch` / `edit` 工具补齐主执行证据 |
| 🛠️ CLI | [#119046](https://github.com/openclaw/openclaw/pull/119046) | fix(cli): gateway call honors local --port | `gateway call` 现可识别父命令透传的 `--port`，便于本地非默认端口调试（[Issue #119036](https://github.com/openclaw/openclaw/issues/119036)） |
| 🛡️ Realtime | [#119045](https://github.com/openclaw/openclaw/pull/119045) | fix(xai): stop realtime sessions when playback ack stalls | xAI Realtime 语音在 ack 停滞时主动终止，防止内存膨胀阻塞下一轮回复（Related [#116201](https://github.com/openclaw/openclaw/issues/116201)） |
| 🪟 兼容 | [#106706](https://github.com/openclaw/openclaw/pull/106706) | Harden Hermes daemon adapter: validate model on session resume (AIA-1231) | 恢复持久 ACP 会话时校验模型绑定，避免 stale 模型引用 |

**整体评估**：项目在**质量保障（QA-lab）**、**通道配置 schema 与运行时一致性**、**语音/Realtime 资源管理**、**安全边界（plugin allowlist、sandbox）**四个方向有明显推进。`vincentkoc` 与 `steipete` 仍是当日最活跃维护者，承担了较多 QA 试验与 gateway 修复合入。

---

## 四、社区热点

### 🔥 评论数 Top 5 Issues

| # | 标题 / 链接 | 评论 | 关键诉求 |
|---|---|---:|---|
| 1 | [#116277 (CLOSED)](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash silent reply failure — no reply generated, generic fallback | **100** | DeepSeek 模型偶发"静默无回复"且兜底消息体验差；社区需要**确定性失败提示 + 模型健康监控** |
| 2 | [#116201 (OPEN)](https://github.com/openclaw/openclaw/issues/116201) Realtime voice work can retain unbounded provider and consult state | 52 | Realtime 语音会话在 provider/客户端卡顿时无硬上限，要求**显式资源边界**（旧 consult/frame/audio buffer） |
| 3 | [#7707 (OPEN)](https://github.com/openclaw/openclaw/issues/7707) Feature Request: Memory Trust Tagging by Source | 24 | **记忆投毒防护**：按来源（用户/网页/三方 skill）打信任标签，避免恶意内容污染长期记忆 |
| 4 | [#44925 (OPEN)](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost — no retry, no notification | 23 | Subagent 完成通告在 E31/E42/E45 等模式下静默丢失，需要**重试 + 通知 + 自愈** |
| 5 | [#48788 (OPEN)](https://github.com/openclaw/openclaw/issues/48788) Centralized filename encoding utility (Shift-JIS / EUC-KR / GB18030) | 20 | 飞书等通道文件名编码需架构层统一工具，而非补丁单点修复 |

### 💬 评论最多 PR（节选）
今日 PR 评论数据中规中矩，主要 PR 处于"等待作者补充 proof"或"维护者复审"阶段：

- [#101276](https://github.com/openclaw/openclaw/pull/101276) **feat(exec): deny-over-allow exec approval denylist** — 沿用 [#6615](https://github.com/openclaw/openclaw/issues/6615) 的 STOP-list 概念，提出双主机强制执行。当前规模 XL、需兼容性与安全边界双重证明，处于 `⏳ waiting on author`。
- [#108979](https://github.com/openclaw/openclaw/pull/108979) **fix(security): narrow sandbox parent to exact active session workspace** — 防跨 agent 读取沙盒媒体（[Issue #107972](https://github.com/openclaw/openclaw/issues/107972)），P0 安全修复。
- [#117034](https://github.com/openclaw/openclaw/pull/117034) **feat(audit): add execution identity inspection** — XL 规模审计增强，跨 cli/scripts/agents 多 surface。

### 📈 反应最多 Issues（👍 Top）
- [#42840](https://github.com/openclaw/openclaw/issues/42840) **Feature: MathJax/LaTeX Support to Control UI** 👍 **10** — 数学/科研用户高频诉求
- [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex-backed Telegram turns time out 👍 3
- [#89315](https://github.com/openclaw/openclaw/openclaw/issues/89315) gateway heap grows unbounded (OOM) 👍 3
- [#44925](https://github.com/openclaw/openclaw/issues/44925) Subagent completion silently lost 👍 2
- [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML config support 👍 2

**诉求归纳**：社区当前三大主线痛点是 **Realtime/语音稳定性**、**Codex/Codex app-server turn 终态可靠性**、**subagent 完成结果不丢**；产品层期待集中在 **LaTeX 渲染、YAML 配置、Memory 信任标签**。

---

## 五、Bug 与稳定性

### 🚨 P0（已影响 release-blocker）
| Issue | 标题 | 修复 PR |
|---|---|---|
| [#103804](https://github.com/openclaw/openclaw/issues/103804) | service-env generator 双引号包裹 AWS_REGION/凭据，导致 shell source 解析失败 | 待合入；建议在下个补丁优先处理 |

### 🦞 P1 Diamond/Platinum（高严重度，已有 fix 路径）
| Issue | 标题 | 状态 |
|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash silent reply | ✅ 已关闭 |
| [#116201](https://github.com/openclaw/openclaw/openclaw/issues/116201) Realtime voice unbounded state |

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析

**报告周期**：2026-08-03 ~ 2026-08-04
**样本项目**：13 个（含 2 个无活动仓库）
**核心参照**：OpenClaw

---

## 一、生态全景

当前 AI 智能体/个人 AI 助手开源生态呈现"**头部高强度迭代 + 中尾部维护分散 + 长尾趋于沉寂**"的明显分层。OpenClaw、ZeroClaw、IronClaw、CoPaw 构成第一梯队，单日吞吐 ≥50 条 Issue/PR 的级别，承担着 Agent 基础设施（Realtime 语音、流式工具调用、Memory 信任化、Subagent 编排）的主要演进压力；NanoBot、NanoClaw、NullClaw 处于第二梯队，专注 WebUI 打磨、Provider 兼容、流式链路等垂直方向；Hermes Agent 则代表"大版本上线即伴随回归"的典型质量阵痛样本。与此同时，社区对**Realtime 稳定性、流式工具调用语义一致性、跨 Provider 兼容性、MCP 协议治理、记忆信任与安全审计**五个方向的呼声高度收敛，预示下一阶段 Agent 框架的差异化将主要来自"系统稳态上限"而非"功能数量"。

---

## 二、各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/关闭） | 今日 Release | 健康度 | 当日关键词 |
|---|---|---|---|---|---|
| **OpenClaw** ⭐ | 500 / 33（6.6%） | 332 / 168（33.6%） | ✅ v2026.7.1-1, v2026.7.1-2 | 🟢 中等偏好 | P1 拥挤、Codex turn 终态、Realtime 无界 |
| ZeroClaw | 43 / 7 | 47 / 3 | ❌ | 🟢 高强度 review | v0.9.0 RFC 收口、P1 安全 PR 待合并 |
| IronClaw | 37 / 9 | 32 / 18 | ❌ | 🟡 内部重构强劲 | Reborn Wave3、Epic 关闭、Railway Bug Bash |
| CoPaw | 23 / — | 25 / 25 | ✅ v2.1.0-beta.1 | 🟢 良好 | Beta 发布、ACP 竞态、GPT-5.6 caching |
| Hermes Agent | 40 / 10 | 45 / 5 | ✅ **v0.20.0 "The Herald"** | 🟡 回归风险 | 大版本 3,650 commits、Telegram 挂死 |
| NanoBot | 2 / 0 | 12 / 24（67%） | ❌ | 🟢 良好 | WebUI 收尾、Opus 5 适配、Dream 管线 |
| LobsterAI | 2 / 0 | 5 / 6（1 Revert） | ❌ | 🟡 54% stale | btw tools 回滚、多 Agent 过滤器 |
| NanoClaw | 1 / 0 | 3 / 6 | ❌ | 🟢 中等偏好 | hardened 镜像、approval 持久化、冷会话恢复 |
| PicoClaw | 3 / 5（stale 驱动） | 2 / 3 | ❌ | 🟡 中等偏弱 | staleness 误关、systemd 部署、日文 i18n |
| NullClaw | 1 / 0 | 3 / 2 | ❌ | ⭐⭐⭐☆☆ 中等 | 流式 tool-call、代理凭据泄漏、#915 积压 80d |
| Moltis | 0 / 0 | 1 / 0 | ❌ | 🟠 低活跃 | MCP 托管 bundles（#1183） |
| TinyClaw | — | — | — | ⚫ 无活动 | — |
| ZeptoClaw | — | — | — | ⚫ 无活动 | — |

> **注**：OpenClaw/ZeroClaw/IronClaw/Hermes Agent 因仓库规模较大，单日 50 条为抽样封顶，实际总量应更高。

---

## 三、OpenClaw 在生态中的定位

### 3.1 优势分析

1. **吞吐与产能领先**：当日 Issue 关闭率 6.6%、PR 合并率 33.6%，绝对量级与转化效率均居首。
2. **版本节奏稳健**：连续两个补丁（v2026.7.1-1 / -2）精准切中 Codex 终态、Memory Core 启动、npm 元数据三大故障面，体现"小步快跑"运维能力。
3. **安全闭环成型**：#118854（plugin allowlist）、#108979（sandbox 窄化）、#119045（Realtime ack 终止）同日合入，安全边界推进密度高于多数同行。
4. **QA 基础设施成熟**：`vincentkoc`、`steipete` 主导的 session scope / workspace mutation 工具证据补齐，说明已建立工程化合规链路。

### 3.2 相对劣势与风险

1. **P1 拥挤效应**：评论数 Top 5 中 4 条 P1（Codex turn、Realtime 无界、Subagent 静默丢失、Session 状态损坏），维护者注意力存在单点过载。
2. **社区互动密度低于 Hermes Agent**：Top issue 评论数 100（Hermes 多在 7 左右，但 Hermes 量级不同），说明 OpenClaw 已沉淀大量未消化的真实用户反馈。
3. **与 ZeroClaw/IronClaw 相比缺乏架构级 RFC 治理**：后两者通过 RFC 化议题（Goal mode v1、SOP pane、Rust→Wasm web UI）显式驱动路线，OpenClaw 当前更偏"问题驱动"。

### 3.3 社区规模对比

| 维度 | OpenClaw | ZeroClaw | IronClaw | Hermes Agent |
|---|---|---|---|---|
| 单日 Issue 更新 | **500** ⭐ | 50 | 46 | 50 |
| 单日 PR 更新 | **500** ⭐ | 50 | 50 | 50 |
| 维护者数量 | 多人（vincentkoc、steipete、joshavant） | 多人 | BenKurrek 主导 | 多人 |
| 治理模式 | Issue 驱动 + 高频 hotfix | RFC 驱动 + 决策队列 | Epic 闭环 + Wave 节奏 | 版本批量合入 |
| 版本节奏 | 连续补丁 | 停滞（v0.9.0 在 RFC） | 飞 PR 30d+ 未合并 | 季度级大版本 |

**结论**：OpenClaw 是当下"高产能 + 实战稳定"的最优代表，但在**架构治理显式化**与**P1 拥挤管理**两个维度有可优化空间。

---

## 四、共同关注的技术方向

### 4.1 🔥 Realtime / 语音会话稳定性（OpenClaw + Hermes Agent + ZeroClaw + CoPaw）

| 项目 | 代表 Issue | 核心痛点 |
|---|---|---|
| OpenClaw | #116201 Realtime voice unbounded state | provider/consult 状态无界 |
| OpenClaw | #119045 xAI Realtime ack stall fix | 已合入 |
| Hermes Agent | #66589 / #67498 / #72454 / #78052 | Telegram gateway 永久挂起（v0.20.0 回归）|
| ZeroClaw | #7759 WebSocket 与 turn lifecycle 耦合 | P1 accepted |
| CoPaw | #6608 长 shell 命令阻塞飞书 1.5h | 子进程超时无总闸 |

**共识诉求**：Realtime/长会话必须有"硬性资源边界 + 终端用户可见的进度反馈 + 自动终止 + 重连/重试"完整链路。

### 4.2 🔥 流式工具调用语义统一（NullClaw + CoPaw + NanoBot + IronClaw）

| 项目 | 代表 PR/Issue | 核心痛点 |
|---|---|---|
| NullClaw | #964/#965 native API-level tool calls during streaming | 已合并结构性进展 |
| CoPaw | #5930 SSE 结构化 run outcome | 自动化侧无法感知异常结束 |
| NanoBot | #5230 Gemini 跨 Provider 未签名 tool-call | OPEN |
| OpenClaw | #6588 spawn_subagent 空 batch 误判 | 已闭环 |
| OpenClaw | #44925 subagent 完成结果静默丢失 | 23 评论、待修 |

**共识诉求**：流式响应中 tool-call deltas 必须可序列化、可签名、可在跨 Provider 重放时保持完整语义。

### 4.3 🔥 跨 Provider 模型兼容性（NanoBot + LobsterAI + CoPaw + OpenClaw）

| 项目 | 代表 Issue | 模型 |
|---|---|---|
| NanoBot | #5235 Opus 5 温度参数回归 | Anthropic Opus 5 |
| NanoBot | #5214 DeepSeek Responses 推理项 | DeepSeek |
| LobsterAI | #1206 kimi2.5 私有化部署重复处理 | 自托管 kimi2.5 |
| CoPaw | #6649 GPT-5.6 prompt caching | OpenAI Responses |
| OpenClaw | #116277 DeepSeek v4 Flash 静默回复 | DeepSeek（已闭环）|

**共识诉求**：新模型发布即触发兼容性回归；社区期望建立"新模型发布 → 灰度适配 → 灰度开关"的标准化机制。

### 4.4 🔥 MCP 协议与扩展治理（IronClaw + NanoClaw + Moltis + ZeroClaw）

| 项目 | 代表 Issue | 方向 |
|---|---|---|
| IronClaw | #6481 Manifest-Driven Extension Lifecycle Epic | 扩展生命周期规范化 |
| IronClaw | #7024 MCP 注册鉴权 | 注册期校验 |
| NanoClaw | #3092 远程 Streamable HTTP MCP | 协议传输层 |
| Moltis | #1183 MCP 托管仓库 bundles | 完整 ops 化 |
| ZeroClaw | #9488 统一附件架构 | 跨 channel 模型无关化 |

**共识诉求**：MCP 正从"接入支持"走向"托管+权限+审计+更新回滚"完整平台化阶段。

### 4.5 🔥 Memory / 会话连续性 / 信任化（OpenClaw + NanoClaw + NanoBot + ZeroClaw）

| 项目 | 代表 Issue | 方向 |
|---|---|---|
| OpenClaw | #44925 subagent completion silently lost | 完成结果不丢 |
| OpenClaw | #7707 Memory Trust Tagging by Source | 记忆投毒防护 |
| NanoClaw | #3183/#3184 冷会话恢复 | 连续性 |
| NanoBot | #5231 idle session 归档（Dream 输入） | 长期记忆 |
| ZeroClaw | #8134 session_ttl_hours 重置 | TTL 治理 |
| ZeroClaw | #6998 schema-validated memory consolidation | schema 化 |

**共识诉求**：记忆系统需要"信任标签 + TTL + 跨 session 恢复 + schema 校验"四件套，单纯"长度增长"模式已被淘汰。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈 Agent 平台、QA 实验室、Plugin allowlist | 企业 + 高级开发者 | Codex app-server turn + 多 provider + Hermes ACP |
| **ZeroClaw** | 安全 hardening、RFC 驱动治理 | 安全敏感型开发者 | OTel trace + Decision queue + 强审计 |
| **IronClaw** | 架构重构（Reborn） | 平台/底层开发者 | Rust + WIT contracts + 产品分层架构 |
| **CoPaw** | 桌面端 + 通道适配 | 桌面 Agent 用户 + 集成商 | agentscope + Tauri + ACP delegate |
| **Hermes Agent** | 大版本特性批量 | 规模化采用者 | Skill system + 多 channel + 多 profile |
| **NanoBot** | WebUI 体验 + Dream 记忆 | 终端用户友好型 | i18n + IME 修复 + Dream pipeline |
| **LobsterAI** | 商业化 + 多 Agent UI | 中文市场 + 商业用户 | Electron + 启动积分 + Codex-style UI |
| **NanoClaw** | 容器化 + 治理可审计 | 容器化部署者 | hardened 镜像 + engagement scope + imessage |
| **PicoClaw** | 轻量级 + 单机 | 极简主义者 | 小巧核心 + WebUI 插件化 |
| **NullClaw** | 流式 tool-call + 自托管 | 自托管 LLM + 高级用户 | SSE 解析器 + 代理 pinned curl |
| **Moltis** | MCP 仓库化托管 | 平台运维者 | managed bundles + vault + pinned SSH |

**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-08-04**
**项目：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日呈现 **PR 高频迭代、Issue 低活跃** 的典型中后期开发节奏：过去 24 小时内共处理 36 个 Pull Request，其中 24 个已合并/关闭，合并率约 67%；同时仅有 2 条 Issue 更新且无新版本发布。当日合并内容以 **WebUI 细节修复（i18n、移动端键盘、IME 输入）**、**多 Provider 兼容性增强（Anthropic Opus 5、Gemini 工具调用、DeepSeek Responses）** 与 **小型新 Provider/功能落地（Eden AI、ModelScope 文档、Mattermost 线程策略）** 为主，整体推进节奏稳定。值得关注的信号是 Anthropic Opus 5（2026-07-24 发布）已引发首个温度参数兼容性问题，关联修复 PR (#5236) 已同日提交，响应速度良好。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一个 Release 的版本信息未在数据中提供，建议关注 [Releases 页面](https://github.com/HKUDS/nanobot/releases) 获取后续发布动态。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 3.1 WebUI 用户体验收尾
- **[#5227](https://github.com/HKUDS/nanobot/pull/5227)** `fix(webui): complete i18n audit` — 完成 WebUI 本地化资源审计，修正简/繁中文设置术语（`网页` → `网络`），补齐未翻译 UI 与可访问性标签。
- **[#5228](https://github.com/HKUDS/nanobot/pull/5228)** `fix(webui): show actual local trigger messages` — 让 WebUI 的 session 弹窗显示真实触发消息内容而非命令文本。
- **[#5229](https://github.com/HKUDS/nanobot/pull/5229)** `fix(webui): stabilize thread during IME input` — 修复 IME（中文/日文输入法）输入时文本域抖动与滚动位置跳变问题。
- **[#5226](https://github.com/HKUDS/nanobot/pull/5226)** `fix(webui): dismiss mobile keyboard after send` — 移动端发送后自动关闭虚拟键盘，同时保留桌面端 refocus 行为。

➡️ **评估**：今日对 WebUI 进行了集中打磨，特别是 i18n 与移动端体验，标志 WebUI 正从功能可用向体验可用的成熟阶段过渡。

### 3.2 Provider 兼容性与错误修复
- **[#5214](https://github.com/HKUDS/nanobot/pull/5214)** `fix(providers): keep DeepSeek reasoning items wire-valid` — 修复 OpenAI Responses 路由下 DeepSeek 推理项反序列化失败问题。
- **[#5230](https://github.com/HKUDS/nanobot/pull/5230)** `fix(providers): drop unsigned tool calls when replaying to Gemini` — 处理跨 Provider 切换到 Gemini 时工具调用缺少签名导致的 `400 INVALID_ARGUMENT`（**仍 OPEN**）。
- **[#5215](https://github.com/HKUDS/nanobot/pull/5215)** `fix(gateway): close agent resources deterministically on stop` — 修复网关停止时的 asyncio 资源泄漏与 `Event loop is closed` 报错。

### 3.3 新 Provider / 文档
- **[#4861](https://github.com/HKUDS/nanobot/pull/4861)** `feat(providers): add Eden AI as OpenAI-compatible gateway` — 新增 Eden AI 作为内置多模型网关 Provider。
- **[#5038](https://github.com/HKUDS/nanobot/pull/5038)** `docs(providers): add ModelScope section` — 为内置 ModelScope（魔搭）Provider 补充完整文档与可复制配置示例。

### 3.4 工程化改进
- **[#5213](https://github.com/HKUDS/nanobot/pull/5213)** `fix(plugins): use uv when pip is unavailable` — 在 `uv tool` 安装环境下优雅回退，修复 `nanobot plugins enable` 命令失败问题。
- **[#5141](https://github.com/HKUDS/nanobot/pull/5141)** `fix(cron): validate expression syntax` — 在定时任务创建时立即校验 cron 表达式语法，避免运行时静默失败。

➡️ **整体评估**：今日共推进了 24 个 PR，覆盖 WebUI、Provider、Plugin、Cron、Gateway 等多个模块，项目健康度良好，且没有发现大规模重构或回滚迹象。

---

## 4. 社区热点

今日 Issues/PRs **评论数普遍偏低（多为 0）**，社区讨论度处于低位，但有几个高质量互动值得注意：

| 排名 | 议题 | 互动情况 | 链接 |
|---|---|---|---|
| 1 | **Issue #5235** — Anthropic Opus 5 API 请求被拒 | 1 条评论，新开 | [#5235](https://github.com/HKUDS/nanobot/issues/5235) |
| 2 | **PR #5211** — 跨 session 搜索与 @提及 | 开放中，方向明确 | [#5211](https://github.com/HKUDS/nanobot/pull/5211) |
| 3 | **PR #5234** — 集成 mst-python 元搜索引擎 | 开放中，新 Provider | [#5234](https://github.com/HKUDS/nanobot/pull/5234) |

**诉求分析**：
- 用户对 **新模型第一时间兼容** 的诉求较强——Opus 5 发布不到两周即出现 Issue 与对应修复 PR，响应链完整。
- **跨会话能力**（#5211）和 **元搜索能力**（#5234）反映出用户希望 NanoBot 从"单会话工具"向"持续性助手"演进的期待。
- 总体社区互动处于"低活跃但高质量"状态，没有大面积争论或负反馈。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 - 跨 Provider 兼容性问题（影响功能可用性）
| 编号 | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 因 `omit_temperature` 黑名单缺失导致所有请求被拒 | OPEN | [#5236](https://github.com/HKUDS/nanobot/pull/5236) 已同日提交 |
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini 跨 Provider 切换时未签名工具调用导致 `400 INVALID_ARGUMENT` | OPEN（PR 待合并） | 自带 fix |
| [#5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek Responses 推理项序列化错误 | CLOSED | 自带 fix |

### 🟡 P2 - 用户体验层 Bug
| 编号 | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#5229](https://github.com/HKUDS/nanobot/pull/5229) | IME 输入时滚动位置跳变 | CLOSED | 自带 fix |
| [#5226](https://github.com/HKUDS/nanobot/pull/5226) | 移动端键盘发送后未收起 | CLOSED | 自带 fix |
| [#5222](https://github.com/HKUDS/nanobot/pull/5222) | Telegram 围栏代码块在 `c++`、`html+django` 等语言下被破坏 | OPEN | 自带 fix |
| [#5190](https://github.com/HKUDS/nanobot/issues/5190) | 模块脚本 MIME type 为 `text/plain` 导致前端加载失败 | **CLOSED** ✅ | 已解决 |

### 🟢 稳定性修复
- [#5215](https://github.com/HKUDS/nanobot/pull/5215) 网关关闭时的资源清理
- [#5213](https://github.com/HKUDS/nanobot/pull/5213) uv 环境下的插件启用兼容性
- [#5141](https://github.com/HKUDS/nanobot/pull/5141) 定时任务表达式校验

➡️ **总结**：今日 Bug 处理速度极快，多数 Issue 在提交当日即有对应 PR 或关闭，体现了维护团队的快速响应能力。

---

## 6. 功能请求与路线图信号

| 方向 | 代表 PR/Issue | 状态 | 可能的下一版本纳入概率 |
|---|---|---|---|
| **Anthropic Opus 5 适配** | [#5236](https://github.com/HKUDS/nanobot/pull/5236) | OPEN | **高** — 阻塞所有 Opus 5 用户使用 |
| **跨 Session 搜索与 @ 提及** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | OPEN | **中** — 增强型功能，不阻塞主线 |
| **mst-python 元搜索 Provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | OPEN | **中** — 第三方 Provider 增量 |
| **Mattermost 线程级群组策略** | [#5233](https://github.com/HKUDS/nanobot/pull/5233) | OPEN | **中** — 跟进 #4459 的功能扩展 |
| **空闲 session 归档（Dream 模块输入）** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) | OPEN | **中** — Dream 模块的隐性依赖 |

➡️ **信号**：Provider 多样化、WebUI 国际化与移动端体验、Agent 持续记忆（Dream 流水线）三条主线持续推进，符合"Agent + 多渠道 + 长期记忆"的整体方向。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数普遍较少（多为 0），可提炼的用户痛点有限：

- **whisperity（#5235）** 明确指出：Opus 5 发布后温度参数兼容性回归，"every request still sends" 错误参数，反映用户**对模型版本第一时间适配的高期望**。
- **amkile（#5190）** 报告前端模块脚本因 MIME type 错误加载失败，**反映出部署环境与构建配置的多样性问题**，该 Issue 已关闭，说明已有对应修复。
- 多个 PR 中作者主动添加回归测试（IME 组合、移动端键盘、Telegram 围栏代码、WebSocket 路由等），说明**用户已经在承担 QA 角色并主动补测试**，社区参与度高。

➡️ **满意信号**：Bug 修复链路短、社区作者主动加测试、PR 合并率高。
➡️ **不满意/风险信号**：暂未观察到大规模负反馈；唯一潜在不满来自 Opus 5 兼容性这一外部节奏不可控因素。

---

## 8. 待处理积压

以下为状态为 OPEN、创建/更新日期较早或优先级较高的待处理项，建议维护者关注：

| 编号 | 类型 | 标题 | 创建日期 | 备注 |
|---|---|---|---|---|
| [#5211](https://github.com/HKUDS/nanobot/pull/5211) | PR | feat(session): add cross-session search and mentions | 2026-08-01 | 已开放 3 天，开放型增强功能，建议尽快评审 |
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR | refactor(providers): declare Responses capabilities | 2026-08-01 | 标记 `conflict`，涉及 OpenAI/Copilot/DeepSeek，可能存在合并冲突需协调 |
| [#1550](https://github.com/HKUDS/nanobot/pull/1550) | PR | feat(codex): 在 openai_codex 中同时支持 OAuth 与自定义 Responses 模式 | 2026-03-05 | **长期积压**（已开放近 5 个月），今日已 CLOSED，需确认是否完成合并 |

➡️ **提醒**：
1. **#5204** 标记了 `conflict`，维护者应优先协调分支；
2. **#1550** 长期开放后今日 CLOSED，但状态需明确为"已合并"或"未合并关闭"；
3. **#5235 / #5236** 形成一个完整的"Issue+修复 PR"组合，建议同步合并以尽快解决 Opus 5 用户痛点。

---

## 总结

**项目健康度：良好 ✅**

- **响应速度**：Bug → Fix 链路极短，Opus 5 问题当日即有 PR。
- **合并节奏**：24/36 PR 关闭，合并率约 67%。
- **方向感明确**：WebUI 收尾、Provider 多样化、Dream 记忆管线三条主线清晰。
- **风险点**：Provider 跨模型切换（#5230）兼容性尚未闭环；Anthropic 跟随官方模型节奏需建立机制；#5204 存在合并冲突需协调。

**下一步建议**：优先合并 #5236（解锁 Opus 5 用户）、#5230（修复跨 Provider 切换阻塞）并发布 patch 版本；规划下一版本内容时建议将 WebUI i18n 完成态作为亮点宣发。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-04

## 1. 今日速览

Hermes Agent 过去 24 小时呈现**高活跃度但低净增量**的态势：50 条 Issue 更新（40 活跃 / 10 关闭）、50 条 PR 流转（45 待合并 / 5 关闭）外加一次重大版本发布 **v0.20.0 "The Herald Release"**——含约 3,650 commits、1,400 个已合并 PR、1,200 个已关闭 Issue 与 650+ 贡献者。然而，关键信号集中在**回归缺陷**:多个 v0.20.0 上线后发现的高优先级 Bug（Telegram Gateway 挂起、UTF-8 read_file 误判、Windows venv 阻塞等）正在污染首批采用者体验,多数"已关闭"的 Issue/PR 实际为 **duplicate/invalid 而非修复落地**,项目需要在该版本发布窗口内快速推出 v0.20.1 修复补丁。

---

## 2. 版本发布

### v0.20.0 (v2026.8.3) — "The Herald Release" 
📅 **发布日期:** 2026-08-03 · [Release Notes](#)
> "Hermes is the herald of the gods, an..."

**量化成果**(相对于 v0.19.0):
- ~3,650 commits
- ~1,400 merged PRs
- ~5,200 files changed
- ~559,000 插入 / ~405,000 删除
- **~1,200 issues closed**
- **650+ contributors**

**升级提示与潜在破坏性变更**(基于当日 Issue 信号推断):

| 影响面 | 风险等级 | 参考 Issue | 说明 |
|---|---|---|---|
| Telegram Gateway | 🔴 P1 | [#78052](https://github.com/NousResearch/hermes-agent/issues/78052)、[#72454](https://github.com/NousResearch/hermes-agent/issues/72454) | v0.20.0 gateway 进程内 `Telegram adapter.connect()` 永久挂起,独立 adapter 脚本正常 — 强烈影响自动重启/多路复用场景 |
| `read_file` 工具 | 🟠 P2 | [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) | 0.19.1 起的回归,1KB 多字节字符样本边界导致文本被误判为二进制 |
| Skill 系统 | 🟠 P2 | [#64392](https://github.com/NousResearch/hermes-agent/issues/64392) | 重名 skill 在 list/prompt/skill_view 三处表现不一致 |
| Profile 隔离 | 🟠 P2 | [#10376](https://github.com/NousResearch/hermes-agent/issues/10376) | `--clone` 仍复制 memory,跨 profile 边界可读 |
| 自定义 Provider | 🟠 P2 | [#78072](https://github.com/NousResearch/hermes-agent/issues/78072) | `model.provider` 被错误地设为显示名 |

> ⚠️ **迁移建议:** 现有 v0.19.x 用户如未依赖 v0.20.0 新特性,**建议等待 v0.20.1**,重点关注 Telegram 集成与 Windows 部署场景。

---

## 3. 项目进展

过去 24 小时的**已关闭**(5 条 PR / 10 条 Issue)中,绝大多数为 **duplicate/invalid**,真正落地到 main 的实际修复推进有限。值得关注的两个**结构化进展信号**:

- **Telegram startup 通知回归**已具备修复候选:[PR #78093](https://github.com/NousResearch/hermes-agent/pull/78093) 直接对应 [Issue #66589](https://github.com/NousResearch/hermes-agent/issues/66589) 的 `_send_path_degraded` 竞态,等合入即可视为 0.20.x 闭环。
- **Windows Desktop Update** 形成 PR 三连[#78094](https://github.com/NousResearch/hermes-agent/pull/78094)、[#78095](https://github.com/NousResearch/hermes-agent/pull/78095) 紧接 [#78084](https://github.com/NousResearch/hermes-agent/issues/78084)/[#78089](https://github.com/NousResearch/hermes-agent/issues/78089),围绕 venv-blocker cmdline 120 字符截断问题串成修复集,延续 [#75881](https://github.com/NousResearch/hermes-agent/issues/75881) 之后的二次跟进。

其他重要待合入的 PR(均不在今日 merge 队列):
- [PR #78100](https://github.com/NousResearch/hermes-agent/pull/78100) — `force_display` 解决 `_emit_interim_assistant_message` 去重误判
- [PR #78096](https://github.com/NousResearch/hermes-agent/pull/78096) — npm audit 漏洞精确修补(避免 `npm audit fix` 大规模破坏)
- [PR #57610](https://github.com/NousResearch/hermes-agent/pull/57610) — 跨厂商小模型"progress-placeholder"响应绕过问题

**整体评价:** 项目仍处于"大批量合入 + 漏掉部分边界"的阶段;版本标签推进很快,但质量闭环欠缺。

---

## 4. 社区热点(Top 讨论)

按评论数与昨日互动热度排序:

| # | Issue / PR | 标题(摘) | 评论 | 👍 | 状态 | 链接 |
|---|---|---|---|---|---|---|
| 1 | #66589 | Telegram 启动通知 `send_path_degraded` 竞态 | 7 | 0 | OPEN | [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) |
| 2 | #30220 | `Background Self-Improvement Review` 把内容写错到 memory/skill/user | 7 | 0 | OPEN | [#30220](https://github.com/NousResearch/hermes-agent/issues/30220) |
| 3 | #76886 | `read_file` 1KB 样本切到多字节字符→误报二进制(0.19.1 回归) | 7 | 0 | OPEN | [#76886](https://github.com/NousResearch/hermes-agent/issues/76886) |
| 4 | #67498 | Telegram gateway 永久挂在 `Connecting (attempt 1/8)` | 7 | 1 | **CLOSED** | [#67498](https://github.com/NousResearch/hermes-agent/issues/67498) |
| 5 | #39043 | Signal adapter 补 quote/reply/edit/delete/已读 | 7 | **2** | OPEN | [#39043](https://github.com/NousResearch/hermes-agent/issues/39043) |
| 6 | #29771 | Credential pool 扩展到 Tavily/Exa 等搜索后端 | 5 | 0 | OPEN | [#29771](https://github.com/NousResearch/hermes-agent/issues/29771) |

**诉求解读:** Telegram 生态已成为社区最在意的稳定性瓶颈(#66589、#67498、#72454、#78052 形成 7-comment 级问题簇);"v0.20.0 才出现/复发的回归" 是最新一轮抱怨的共同主线;UTF-8 与文本检测类的工具层问题也极易触发社区共鸣(单 Issue 7 评论无 👍 是"社区只看热闹不投票"的典型信号,但讨论密度反映了潜在影响面)。

---

## 5. Bug 与稳定性

### 🔴 P1(致命)— 已 CLOSED 但需确认修复是否真落地
- **[#67498](https://github.com/NousResearch/hermes-agent/issues/67498) Telegram Gateway 挂死** — fix 路径仍不清晰;关闭原因疑似被 [#72454](https://github.com/NousResearch/hermes-agent/issues/72454) 等同源 Issue 吸收。
- **[#78052](https://github.com/NousResearch/hermes-agent/issues/78052) v0.20.0 Telegram Gateway 挂死** — `closed as duplicate`,指向 [#72454](https://github.com/NousResearch/hermes-agent/issues/72454);**当前 no fix PR 已合并**。
- **[#69216](https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-08-04**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 仓库在过去 24 小时呈现出**典型的存量维护特征**：8 条 Issues 中 5 条被关闭、3 条保持开放，5 条 PR 中 3 条已关闭、2 条等待审核，但**无新版本发布**。值得注意的是，今日大量关闭的条目均带有 `[stale]` 标签（5/5 关闭的 Issues、3/3 关闭的 PRs），说明关闭动作主要由仓库的 staleness 机器人驱动，而非人工决议。项目活跃度中等偏弱，核心维护者响应有限，但有两条**实质性功能 PR (#3316 路由代理上下文修复、#3315 Telegram 私人聊天话题支持)** 仍在等待审核，表明社区贡献管道依然健康。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 上一已知发布版本仍为用户环境报告中的 v0.3.1（参考 [#3281](https://github.com/sipeed/picoclaw/issues/3281)），nightly 提交哈希为 `2cf030d2`。

---

## 3. 项目进展

今日共 3 条 PR 关闭，推进情况如下：

| PR | 标题 | 贡献者 | 评估 |
|----|------|--------|------|
| [#3273](https://github.com/sipeed/picoclaw/pull/3273) | feat(webui): add Japanese (ja) localization | honbou | ✅ **实质性合并**：新增完整 968 行 `ja.json` 翻译资源并注册 i18next/dayjs locale，闭环 [#3272](https://github.com/sipeed/picoclaw/issues/3272)。 |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) | fix(routing): strip leading/trailing underscores in ID normalization | Osamaali313 | ⚠️ 因 staleness 自动关闭，未确认是否合并。修复 `NormalizeAgentID` 与 `NormalizeAccountID` 不符合 `^[a-z0-9][a-z0-9_-]{0,63}$` 的边界剥离问题。 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) | fix scope bug for refresh agy token | sarff | ⚠️ 因 staleness 自动关闭。修复 antigravity provider 令牌刷新时 scope 传参错误导致的 `PERMISSION_DENIED` 错误。 |

**整体评估：** 实质性功能推进有限，主要进展是 WebUI 的日文本地化。两条关键修复 PR（routing 规范化、antigravity auth）的命运因 staleness 机制存在不确定性，建议维护者重新评估。

---

## 4. 社区热点

按互动量排序的热门条目：

1. 🔥 **[#3281](https://github.com/sipeed/picoclaw/issues/3281) – Web UI 输入卡顿**（3 评论，👍1）
   *作者 xpader 报告 WebUI 在历史消息较长时输入框响应严重滞后。* 这是社区**互动量最高**的开放问题，反映了前端性能的实质性痛点。

2. **[#3276](https://github.com/sipeed/picoclaw/issues/3276) – Launcher 支持外部托管网关**（2 评论）
   *作者 honbou 在 systemd 部署场景下提出两个具体诉求：①Launcher 不应强行管理 gateway 生命周期；②遇到未知 channel type 时不应硬失败。*

3. **[#3272](https://github.com/sipeed/picoclaw/issues/3272) – 日文本地化**（2 评论）
   *由 honbou 提出并由 [#3273](https://github.com/sipeed/picoclaw/pull/3273) 闭环，体现"提需求即实现"的健康社区循环。*

**诉求分析：** 头部议题集中在**部署灵活性（systemd 集成、容错处理）**与**前端体验（输入性能、国际化）**两大方向，这两条线对项目从"能跑"走向"好用"具有标志性意义。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 – 可能造成功能完全不可用
- **[#3269](https://github.com/sipeed/picoclaw/issues/3269) – MCP 服务器连接失败导致 agent 循环挂起**（👍1）
  作者 ruiyigen 报告当 MCP server 连不上时，agent loop 会挂死，进而导致聊天界面完全停止回复用户。属于**可靠性严重缺陷**。
  *当前是否有 fix PR：暂无。*

### 🟠 P1 – 特定场景下功能失效
- **[#3301](https://github.com/sipeed/picoclaw/issues/3301) – 非默认 agent 上的 /clear 与自动压缩失效**
  作者 j-v 在 Raspberry Pi 上通过 dispatch rules 将聊天路由到非默认 agent，发现 `/clear` 命令和 session auto-compression 均不生效。
  *关联 PR：[#3316](https://github.com/sipeed/picoclaw/pull/3316) 同作者 j-v 已提交修复，正在等待审核。✅*

- **[#3281](https://github.com/sipeed/picoclaw/issues/3281) – 长历史下 WebUI 输入卡顿**
  *暂无 fix PR。*

### 🟡 P2 – 已通过 staleness 关闭（待维护者复核）
- **[#3264](https://github.com/sipeed/picoclaw/issues/3264) – `SplitMessage` 在超大 fenced-code info string 上死循环**
- **[#3265](https://github.com/sipeed/picoclaw/issues/3265) – Gateway 启动因 deltachat 未知 type 失败**
- **[#3268](https://github.com/sipeed/picoclaw/issues/3268) – `exec` 工具 `action` 参数应默认为 `run`**

⚠️ **健康度提示：** [#3264](https://github.com/sipeed/picoclaw/issues/3264) 描述的是**死循环**类 bug，[#3265](https://github.com/sipeed/picoclaw/issues/3265) 描述的是**启动崩溃**类 bug，二者即便被 staleness 关闭，仍应在下一版本前核实是否已修复，否则将持续影响稳定性口碑。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 实现状态 |
|------|------|----------|
| 日文 WebUI 本地化 | [#3272](https://github.com/sipeed/picoclaw/issues/3272) | ✅ 由 [#3273](https://github.com/sipeed/picoclaw/pull/3273) 完成 |
| Launcher 支持外部托管 gateway（systemd 场景） | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | ⏳ 未实现 |
| Telegram 私人聊天中的 topic 支持 | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | ⏳ PR 待审核 |
| 路由代理上下文管理修复 | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | ⏳ PR 待审核（实质是 bug fix，但同时补齐了功能完整性） |

**路线图信号：** 社区请求集中在 **headless/server 化部署** 与 **多平台聊天适配（Telegram topic、私聊）** 两个方向，与项目从单机玩具走向生产可用产品的演进路径一致。维护者应优先推动 [#3315](https://github.com/sipeed/picoclaw/pull/3315) 与 [#3316](https://github.com/sipeed/picoclaw/pull/3316) 进入下一个版本。

---

## 7. 用户反馈摘要

- **痛点 #1 – 长会话体验劣化**：用户反馈 WebUI 在历史稍长（[#3281](https://github.com/sipeed/picoclaw/issues/3281)）时输入框卡顿，提示前端未对消息列表做虚拟化或分页。
- **痛点 #2 – 部署形态单一**：honbou 在 Ubuntu VM 上跑 systemd 时，Launcher 强行 spawn gateway 进程且对未知 channel 直接硬失败（[#3276](https://github.com/sipeed/picoclaw/issues/3276)），说明容器/server 化场景的容错与生命周期管理仍是短板。
- **痛点 #3 – 第三方 provider 鉴权脆弱**：sarff 在使用 antigravity 时遇到 scope 错误导致 token 刷新失败（[#3267](https://github.com/sipeed/picoclaw/pull/3267)），反映 LLM provider 抽象层的健壮性需要加固。
- **满意点**：honbou 主动贡献 PR 实现日文本地化（[#3273](https://github.com/sipeed/picoclaw/pull/3273)），说明贡献者对项目结构与流程认可，且有较强的归属感。

---

## 8. 待处理积压

提醒维护者关注的、可能因 staleness 误关或长期未动的条目：

| 条目 | 类型 | 风险 |
|------|------|------|
| [#3264](https://github.com/sipeed/picoclaw/issues/3264) – SplitMessage 死循环 | Bug | 🔴 死循环类未确认修复 |
| [#3265](https://github.com/sipeed/picoclaw/issues/3265) – deltachat 启动崩溃 | Bug | 🔴 启动失败未确认修复 |
| [#3268](https://github.com/sipeed/picoclaw/issues/3268) – exec action 默认值 | Bug | 🟠 API ergonomics |
| [#3202](https://github.com/sipeed/picoclaw/pull/3202) – routing ID 规范化 | PR | ⚠️ 可能因 stale 被误关 |
| [#3267](https://github.com/sipeed/picoclaw/pull/3267) – antigravity auth 修复 | PR | ⚠️ 可能因 stale 被误关 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) – MCP 失败挂起 | Bug | 🔴 无 fix PR |
| [#3276](https://github.com/sipeed/picoclaw/issues/3276) – systemd 部署支持 | Feature | 🟠 无 follow-up |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) – WebUI 卡顿 | Bug | 🟠 互动量最高，仍开放 |

**维护者行动建议：**
1. 复核以上被 stale-bot 关闭的 PR 与 Issue，区分"已实现 vs 误关"；
2. 优先审核 [#3316](https://github.com/sipeed/picoclaw/pull/3316) 与 [#3315](https://github.com/sipeed/picoclaw/pull/3315)，二者具备直接合并价值；
3. 为 [#3269](https://github.com/sipeed/picoclaw/issues/3269)（MCP 失败挂起）安排修复——这是当前最严重的可靠性缺陷。

---

*报告基于 GitHub 公开数据自动生成。所有链接指向 sipeed/picoclaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：** 2026-08-04
**数据周期：** 过去 24 小时（基于 2026-08-03 数据快照）

---

## 1. 今日速览

NanoClaw 项目在过去 24 小时内保持中等偏高的开发活跃度，共处理 **10 条** Issue/PR 更新，其中 PR 占绝大多数（9 条）。**3 条 PR 待合并，6 条 PR 已关闭（含合并与拒绝）**，另新增 1 条与 Node.js 版本兼容性相关的运行时报错 Issue（[#3179](https://github.com/nanocoai/nanoclaw/issues/3179)）。整体来看，项目核心团队（core-team）今日动作密集，主要围绕 **容器镜像安全基线刷新、imessage 集成修复、Approval 卡持久化** 等方向推进，没有新版本发布但有较强的"基础设施加固"信号。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日合并/关闭的 6 条 PR 中，有 **4 条** 来自 core-team 或已通过 review 流程被关闭，体现项目在基础设施与稳定性方面取得了实质进展：

| PR | 主题 | 贡献者 | 影响 |
|---|---|---|---|
| [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) | 重新固定 agent 镜像至 hardened-2026-08-02 | @gavrielc | 安全基线升级，镜像体积 611→621 MB，但 NanoClaw 内容层 digest 未变化 |
| [#3180](https://github.com/nanocoai/nanoclaw/pull/3180) | 在更新流程中暴露 hardened 镜像迁移提示 | @gabi-simons | 配合 [#3182](https://github.com/nanocoai/nanoclaw/pull/3182) 让用户感知基础镜像变更 |
| [#3143](https://github.com/nanocoai/nanoclaw/pull/3143) | 保留已解决 Approval 卡内容 | @Koshkoshinsk | 修复审批卡决策后丢失 title/请求详情的回归，提升审计可追溯性 |
| [#3181](https://github.com/nanocoai/nanoclaw/pull/3181) | imessage 通过"向指定线路首条消息"实现 opt-in | @glifocat | 优化 imessage 集成的启用流程 |
| [#3137](https://github.com/nanocoai/nanoclaw/pull/3137) | 修复 engagement 一致性并暴露 self-serve wiring 控制 | @Koshkoshinsk | 群组作用域 Agent 可查询并申请修改 engagement 策略；拒绝非法 JS regex |

> **进度评估：** 项目今日未引入显著的新功能面，但通过 [#3143](https://github.com/nanocoai/nanoclaw/pull/3143)、[#3137](https://github.com/nanocoai/nanoclaw/pull/3137) 等改动在 **Agent 行为可治理性、容器镜像可追溯性、审批链路可审计性** 三个方向上明显向前迈了一步，属于"看不见但很重要"的健康度提升。

---

## 4. 社区热点

由于今日 Issues/PR 评论数普遍为 0–1 条，社区讨论度整体偏低。值得关注的条目如下：

- **Issue [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) — SyntaxError: styleText**  
  - 评论：1 ｜ 👍：0  
  - 用户在 `nanoclaw-v2` 工作区启动 Basics 时即崩溃：`@clack/core@1.2.0` 依赖 Node 内置 `node:util` 的 `styleText` 导出，但用户的 Node 版本尚未提供该导出（`styleText` 自 Node 21.7.0 / 20.12.0 起加入稳定 API）。
  - **诉求信号：** 这是一个**环境/版本要求未在 README 中明确说明**的典型问题，而非真正的代码 bug。

- **PR [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) — feat: support remote Streamable HTTP MCP servers**  
  - 创建：2026-07-19 ｜ 更新：2026-08-03 ｜ Open 状态持续 **16 天**  
  - 仍处于待合入状态，社区对该特性的关注度未在评论数上体现，但从长期挂起可推测其需要进一步协议层 review。

---

## 5. Bug 与稳定性

按严重程度排列今日相关问题：

### 🔴 高 — 影响启动可用性
- **[#3179](https://github.com/nanocoai/nanoclaw/issues/3179)** `SyntaxError: The requested module 'node:util' does not provide an export named 'styleText'`  
  - **现象：** 启动 `nanoclaw-v2` 即崩溃。  
  - **根因：** `@clack/core@1.2.0` 调用的 `styleText` 在较老 Node LTS 上未导出。  
  - **是否有 fix PR：** ❌ 目前无关联 PR。建议方案：文档化最低 Node 版本要求，或在 `@clack/core` 依赖处加条件导入回退。

### 🟠 中 — 影响冷启动会话体验
- **[#3183](https://github.com/nanocoai/nanoclaw/pull/3183)**（Open, fix） `pin cleanupPeriodDays so retention cleanup can't reap cold sessions`  
  - **现象：** 静默 30+ 天的频道收到消息时返回原始 `No conversation found with session ID` 错误。  
  - **修复方案：** 固定 `cleanupPeriodDays`，避免保留策略误删冷会话。  
  - **状态：** ✅ 已提交 fix PR，待合并。

- **[#3184](https://github.com/nanocoai/nanoclaw/pull/3184)**（Open, fix） `rotate on missing transcript instead of resuming into a dead session`  
  - **现象：** 存储的 continuation 找不到 transcript 时，所有后续消息都会失败。  
  - **修复方案：** 检测到 transcript 缺失即轮换 session。  
  - **状态：** ✅ 已提交 fix PR，待合并。

### 🟡 低 — 已合并的稳定性修复
- **[#3143](https://github.com/nanocoai/nanoclaw/pull/3143)** `Preserve resolved approval card content`（已关闭）  
  修复审批卡决策后丢失正文的回归问题。
- **[#3181](https://github.com/nanocoai/nanoclaw/pull/3181)** `fix(imessage): opt in via first message to the assigned line`（已关闭）  
  修复 imessage 启用逻辑。

---

## 6. 功能请求与路线图信号

今日新提出的功能/集成需求较少，但有一项长期悬挂的功能 PR：

- **[#3092](https://github.com/nanocoai/nanoclaw/pull/3092) `feat: support remote Streamable HTTP MCP servers`**（Open, 16 天）  
  - 来自 core-team 贡献者 @amit-shafnir，瞄准 MCP 协议的远程 Streamable HTTP 传输层支持。  
  - **纳入下一版本的概率：中高** — 由 core-team 提交且符合平台扩展方向，但 16 天未合并说明协议兼容性 review 仍未完成。

- **隐含信号：** 多个 fix PR（[#3183](https://github.com/nanocoai/nanoclaw/pull/3183)、[#3184](https://github.com/nanocoai/nanoclaw/pull/3184)）都围绕"会话连续性与冷启动恢复"展开，可推断团队正在为 **长生命周期会话** 做系统性补强，可能为后续更大特性铺垫。

---

## 7. 用户反馈摘要

可获取的 Issues 评论样本有限（仅 [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) 含 1 条评论）。从中可提炼：

- **痛点：环境要求未明示。** 用户在未收到任何提示的情况下遭遇启动崩溃，体验较差。说明项目对 **Node 版本、依赖兼容性** 的前置检查和 README 文档化存在短板。
- **使用场景：** 用户在 JupyterHub (`/home/jovyan`) 环境下运行 `nanoclaw-v2`，提示部分用户可能在受限容器/CI 环境中部署。
- **满意度：** 评论数稀少且无 👍，反映该问题尚未得到社区关注，需维护者主动回应以避免成为"被忽视的入门门槛"。

---

## 8. 待处理积压

提醒维护者关注的长期挂起项：

| 编号 | 类型 | 标题 | 挂起天数 | 链接 |
|---|---|---|---|---|
| [#3092](https://github.com/nanocoai/nanoclaw/pull/3092) | PR (Feature) | 支持远程 Streamable HTTP MCP 服务器 | **16 天** | [查看](https://github.com/nanocoai/nanoclaw/pull/3092) |
| [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) | PR (Fix) | pin cleanupPeriodDays 防冷会话被回收 | **1 天**（需 review） | [查看](https://github.com/nanocoai/nanoclaw/pull/3183) |
| [#3184](https://github.com/nanocoai/nanoclaw/pull/3184) | PR (Fix) | transcript 缺失时轮换 session | **1 天**（需 review） | [查看](https://github.com/nanocoai/nanoclaw/pull/3184) |

> **维护者建议：** 优先 review [#3183](https://github.com/nanocoai/nanoclaw/pull/3183) 与 [#3184](https://github.com/nanocoai/nanoclaw/pull/3184)，二者针对的是同一类"会话连续性"问题，建议合并审查并协调测试覆盖；同时为 [#3179](https://github.com/nanocoai/nanoclaw/issues/3179) 增加 **Node 最低版本说明** 或 **启动期环境校验** 以减少同类 issue。

---

*报告生成时间：2026-08-04 ｜ 数据源：GitHub REST API（nanocoai/nanoclaw）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期：2026-08-04**
**项目：**[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)
**报告类型：开源项目动态日报**

---

## 一、今日速览

NullClaw 在过去 24 小时整体活跃度处于**中等偏低**水平，共产生 1 条 Issue 更新与 5 条 PR 更新，无新版本发布。社区关注点集中在两个方向：一是 **HTTP 代理通道的稳定性**（ArcanePivot 连续提交 2 个相关修复 PR），二是 **流式场景下工具调用的能力补齐**（mtdphn 的两个相关 PR 被关闭）。唯一的活跃 Issue #915（scheduler 授权异常）已积压约 2.5 个月，未见对应修复 PR 关联，提示维护者在该问题上的响应存在延迟。整体来看，项目代码层有持续推进，但社区反馈通道与版本节奏稍显沉寂。

---

## 二、版本发布

**今日无新版本发布。**

建议关注后续对 PR #982、#983（代理相关修复）合并后的版本节奏——这两条 PR 同日提交且主题相近，存在合并为单一补丁版本的可能性。

---

## 三、项目进展

今日共 **关闭 2 条 PR**，均与"流式响应中的工具调用能力"主题相关，标志着该项目在 Agent 流式调用链路上完成一次结构性改进：

### ✅ #964 — Enable native API-level tool calls during streaming（已关闭）
- **作者**：mtdphn
- **价值**：该 PR 解决了 `StreamChatResult` 未保留结构化工具调用增量（tool-call deltas）的问题，使 Agent 能够在**纯流式响应**中执行工具调用，不再依赖非流式回退路径。同时将提供商级能力检查统一下沉。
- **意义**：补齐了流式 API 的工具调用语义，提升 Agent 在长链路任务中的实时性与一致性。
- 🔗 https://github.com/nullclaw/nullclaw/pull/964

### ✅ #965 — Proposal: structured streaming tool-call support for SSE parser（已关闭）
- **作者**：mtdphn
- **价值**：作为 #964 的配套改动，针对 SSE 解析器引入了结构化工具调用的支持，处理模型将 XML 标签留在 `delta.content` 时的兼容路径。
- **意义**：增强了流式解析层的鲁棒性，减少因格式残留导致的解析失败。
- 🔗 https://github.com/nullclaw/nullclaw/pull/965

**整体评估**：今日实质性推进了 Agent 流式调用的核心能力，属于"功能层而非补丁层"的进展，对项目向前发展具有正向贡献。

---

## 四、社区热点

### 🔥 #915 — [bug] Problem with scheduler unauthorized
- **状态**：OPEN
- **评论数**：4 ｜ **👍 反应数**：1
- **创建时间**：2026-05-15（**已积压约 80 天**）
- 🔗 https://github.com/nullclaw/nullclaw/issues/915

**热度分析**：作为今日唯一活跃的 Issue，其 4 条评论与 1 次点赞表明**真实用户在持续跟进而非简单陈述**。背后的诉求集中于：

1. **本地 + 远程 LLM 混合部署的调度链路问题**：用户通过 Ubuntu 运行 NullClaw，将 Ollama（qwen3.6:27b，部署于 RTX 3090）作为外部 LLM 提供方。LLM 本身与基础工具调用工作正常。
2. **scheduler 在 Telegram 渠道下完全失效**：报错为"unauthorized"，既影响定时任务调度，也影响 Telegram 聊天触发流程。
3. **潜在场景**：本地大模型 + 远程通信渠道的组合是自托管用户的典型部署形态，该 Bug 一旦扩散将影响相当一部分用户群。

**建议**：维护者应在下一周期优先响应此 Issue，并补充最小复现模板。

---

## 五、Bug 与稳定性

| 严重度 | 问题 | 链接 | 是否有 fix PR | 说明 |
|---|---|---|---|---|
| 🔴 高 | **#915 scheduler unauthorized**（影响调度与 Telegram 触发） | [Issue](https://github.com/nullclaw/nullclaw/issues/915) | ❌ 无 | 已积压 80+ 天，无任何关联 PR |
| 🟡 中 | **#983 providers 代理路径不安全** | [PR](https://github.com/nullclaw/nullclaw/pull/983) | ✅ 修复中 | 非流式代理 POST 当前可能凭据泄漏到 argv，PR 正在被评审 |
| 🟡 中 | **#982 Telegram 代理传输路径错误** | [PR](https://github.com/nullclaw/nullclaw/pull/982) | ✅ 修复中 | 配置 `proxy` 后未走 curl 通道，导致显式代理下 Telegram API 调用失败 |

**稳定性结论**：今日有 2 条由同一位贡献者（ArcanePivot）提交的**代理通道安全与正确性修复**已进入评审，表明项目近期在"代理场景"上存在尚未根治的缺陷；该路径涉及凭据安全与跨网段通信，影响外部 LLM / Telegram 代理用户，应优先合并。

---

## 六、功能请求与路线图信号

今日无新功能请求 Issue。从 PR 信号来看，以下方向已进入主线讨论：

| 方向 | 信号来源 | 推进阶段 |
|---|---|---|
| **流式工具调用（API 级 + SSE 解析）** | #964、#965（均已关闭） | 已完成核心实现 ✅ |
| **代理通道安全（pinned curl / 临时头文件）** | #983、#982 | 待合并 🟡 |
| **Docker 基础镜像升级（alpine 3.23 → 3.24）** | #956（dependabot 自动提议） | 待合并 🟡，无功能影响 |

**路线图判断**：未来一个版本（若无版本号亦指下一批合并）的可见重点为：
1. 代理场景下的安全加固（凭据不再进入 argv、超时统一、TLS pinned resolve）；
2. 流式调用链路的端到端能力补齐（已基本就位）。

若 #915（scheduler）的根因与认证 token / 代理配置相关，则可能与上述代理类修复形成联动修复。

---

## 七、用户反馈摘要

来自唯一活跃 Issue #915 的真实声音提炼：

- 🟢 **满意点**
  - "LLM is working fine, and tool calling in nullclaw in general also works mostly fine" —— 基础 LLM 通路与常规工具调用体验良好。
  - 用户具备自托管 + 消费级显卡（RTX 3090）部署能力，是项目典型的"高级用户"画像。

- 🔴 **痛点**
  - scheduler 在 Telegram 渠道完全不可用，且无明确错误定位指引，仅显示 "unauthorized"。
  - 用户在 Issue 中已堆叠 4 条评论，说明**经历了多轮自我排查与社区互动**，仍未得到解决方案。
  - 反映出文档/错误信息在"调度+外部渠道"组合场景下缺乏诊断入口。

**使用场景画像**：本地 AI Agent + 远程 LLM（自托管 Ollama）+ Telegram 入口。属于"个人 AI 助手 + 多端触达"的真实落地形态，反馈价值高。

---

## 八、待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 风险 |
|---|---|---|---|---|
| 🟠 Issue | **#915** | scheduler unauthorized | **~80 天**（2026-05-15 起） | 高 — 影响核心调度功能且无关联修复 |
| 🟡 PR | #983 | providers: pinned curl path | 1 天 | 中 — 涉及凭据安全，建议 24h 内响应 |
| 🟡 PR | #982 | telegram: curl transport for proxies | 1 天 | 中 — 与 #983 同主题，建议同步评审 |
| 🟢 PR | #956 | alpine 3.23 → 3.24 | 50 天 | 低 — dependabot 自动维护，积压略长但无风险 |

**提醒维护者**：
- #915 是当前**唯一阻塞真实用户核心功能**的活跃 Issue，建议在下个工作周期内至少给出官方回应（确认/复现/修复计划任一）。
- #983 与 #982 由同一作者在同日就相近主题提交，建议维护者在评审时合并判断，避免来回修改造成贡献者负担。
- #956 作为 dependabot 自动化 PR 积压 50 天偏长，建议周期性批量处理以保持依赖更新节奏。

---

## 附录：数据快照

- **Issues**：1 条活跃 / 0 条关闭
- **PRs**：3 条 OPEN / 2 条 CLOSED
- **Releases**：0
- **报告周期活跃贡献者**：ArcanePivot（2 PR）、mtdphn（2 PR，已关闭）、dependabot[bot]（1 PR）、scabros（1 Issue）
- **项目健康度评估**：⭐⭐⭐☆☆（中等）—— 代码侧有结构性推进，但社区响应与版本发布节奏偏慢，存在积压风险。

---

*本报告由 GitHub 公开数据自动生成，所述链接均可点击跳转至原始 Issue / PR。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-04

## 1. 今日速览

IronClaw 在过去 24 小时呈现"高频内部重构 + 真实环境 Bug 集中暴露"的双重特征：50 条 PR 更新（18 条已合并/关闭，32 条待合并）和 46 条 Issue 更新（9 条关闭、37 条活跃）维持了强活跃度，但当日**无新版本发布**，仓库正集中推进代号为"Reborn"的架构重写（Wave 2 收尾、Wave 3 主战场）。核心贡献者 BenKurrek 单日提交多条 XL 级重构 PR，覆盖沙箱合并、contracts 端口分层、secrets 直接消费者收紧；同期 Railway 托管实例（[ironclaw-qa-testing-libsql.up.railway.app](https://ironclaw-qa-testing-libsql.up.railway.app)）上报 6 条 Bug Bash 工单，反映真实用户场景与重构节奏之间的张力。整体项目健康度：🟡 内部推进强劲但尚需关注用户侧体验回归。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。在飞 PR [`#5598`](https://github.com/nearai/ironclaw/pull/5598)（由 `ironclaw-ci[bot]` 维护）已迭代超过一个月（自 2026-07-03 至今），包含潜在 breaking change：

| Crate | 旧版本 → 新版本 | 兼容性 |
|---|---|---|
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠ API breaking |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ API 兼容 |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠ API breaking |

`ironclaw_common` 已记录 `copy_impl_added` 等破坏性改动，依赖方需关注。今日大量 XL 级重构 PR 仍在评审中，发布窗口可能进一步推迟。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#7070](https://github.com/nearai/ironclaw/pull/7070) | fix(webui): unblock main E2E coverage | ✅ 修复 5 个 WebUI v2 E2E 测试，恢复 main 分支覆盖率门禁 |
| [#7064](https://github.com/nearai/ironclaw/pull/7064) | refactor(loop): shed model gateway & tool disclosure (WS3/WS4) | 🏗️ 纯 move-only 重构，将模型网关剥离至 `ironclaw_loop_host` |
| [#7040](https://github.com/nearai/ironclaw/pull/7040) | refactor(contracts): close WS2 strays & WS2.1 follow-ups | 🏗️ 关闭 WS2 全部 3 个 checklist 行（含 2 处文档陈旧声明更正） |
| [#7049](https://github.com/nearai/ironclaw/pull/7049) | docs: weekly Wednesday release strategy | 📚 新增周更发布策略文档（周一 RC、周二 QA、周三发布） |
| [#7024](https://github.com/nearai/ironclaw/pull/7024) | fix(extensions): resolve custom MCP auth during registration | 🔒 MCP 注册期间解析鉴权，避免包定义误接纳 |
| [#7023](https://github.com/nearai/ironclaw/pull/7023) | dependabot 6 包批量升级 | ⬆️ 依赖更新 |
| [#7079](https://github.com/nearai/ironclaw/pull/7079) | bump fast-uri 3.1.4 → 3.1.5 | 🔒 安全修复（[fast-uri CVE](https://github.com/fastify/fast-uri/releases)） |

### 3.2 已关闭的 Epic Issue（项目级里程碑）

- [`#6284`](https://github.com/nearai/ironclaw/issues/6284) **[EPIC] error-recoverability endgame** — 模型必须从 100% 错误中恢复（15 条评论，重大项目级公约）
- [`#6524`](https://github.com/nearai/ironclaw/issues/6524) **[EPIC] Hermetic capability and journey testing platform** — 端到端能力与用户旅程的确定性覆盖（4 条评论）
- [`#6481`](https://github.com/nearai/ironclaw/issues/6481) **[EPIC] Manifest-Driven Extension Lifecycle** — 扩展生命周期规范化
- [`#6482`](https://github.com/nearai/ironclaw/issues/6482) **[EPIC] Pluggable Memory Providers** — 统一内存提供者契约

> 🟢 四个 Epic 同日关闭，标志着 Reborn 项目在"扩展/内存/测试/错误恢复"四条主线进入收尾阶段。

### 3.3 整体推进度

- **Wave 2 已基本收尾**：[`#7094`](https://github.com/nearai/ironclaw/pull/7094)（extension registry re-layer + `include_str!` 清扫 + 嵌套树覆盖率）一次性关闭所有剩余 WS2 项。
- **Wave 3 进入主战场**：[`#7065`](https://github.com/nearai/ironclaw/pull/7065)（sandbox 合并 + MCP 切到 contracts）、[`#7096`](https://github.com/nearai/ironclaw/pull/7096)（operator secrets 端口化）、[`#7090`](https://github.com/nearai/ironclaw/pull/7090)（host-runtime 三方拆分）、[`#7080`](https://github.com/nearai/ironclaw/pull/7080)（skill-install 迁至 extension_support）等多条 XL 级 PR 正在评审。
- **Wave 3 关键瓶颈**：[`#7084`](https://github.com/nearai/ironclaw/pull/7084)（move `wit/` inside owning crate）的 CI 门禁问题已由 [`#7087`](https://github.com/nearai/ironclaw/issues/7087) 暴露并在同 PR 内自修。

---

## 4. 社区热点

### 4.1 最受关注的 Issue

1. **[`#6284`](https://github.com/nearai/ironclaw/issues/6284) — error-recoverability endgame**（15 条评论，🟢 已关闭）
   发起人 `serrrfirat` 提出"可恢复性契约"五要素：运行存活、错误可见、错误含原因与可执行恢复线索、模型获得响应回合、永不误报成功。这是项目级战略公约，关闭意味着核心团队已就合约条款达成共识。

2. **[`#6524`](https://github.com/nearai/ironclaw/issues/6524) — Hermetic capability & journey testing**（4 条评论，🟢 已关闭）
   解决了"每个能力是否有确定性覆盖"的基础可测性问题。

3. **[`#7087`](https://github.com/nearai/ironclaw/issues/7087) — Reborn PR test planner hard-fails**（3 条评论，🟡 开放）
   发起人 `BenKurrek` 报告 `Detect Reborn test scope` 工作流对 `.claude/`、`Dockerfile`、`crates/AGENTS.md` 等路径硬失败，已在 PR [`#7084`](https://github.com/nearai/ironclaw/pull/7084) `1f66b58` 提交处就地修复。

### 4.2 重要但未受关注的 Issue（评论数 0 但结构性重要）

- [`#7098`](https://github.com/nearai/ironclaw/issues/7098) `local_runtime` 残留误称（191 处、6 个公开 API 符号）
- [`#7095`](https://github.com/nearai/ironclaw/issues/7095) `ironclaw_extension_manager` 仍直连 `ironclaw_secrets`（违反 products-tier 规则 §8.2）
- [`#7092`](https://github.com/nearai/ironclaw/issues/7092) WS2 re-layer `ironclaw_extension_host` 至 loops 仍有 12 个产品文件 + 1 条阻塞边
- [`#7091`](https://github.com/nearai/ironclaw/issues/7091) `HostRuntimeServices` 上 3 个调用者为空的 builder 方法
- [`#7093`](https://github.com/nearai/ironclaw/issues/7093) 17 个跨 crate `include_str!` 站点残留

> 🔍 这些 issue 评论数为 0 但均是 BenKurrek 在落地 WS2/WS6/WS8 checklist 时系统性发现的"陈债"，反映 Reborn 项目正处于"基础设施负债集中清算"阶段。

---

## 5. Bug 与稳定性

### 5.1 真实环境 Bug（Railway 托管实例，bug_bash 标签）

来自 `joe-rlo` 在 [ironclaw-qa-testing-libsql.up.railway.app](https://ironclaw-qa-testing-libsql.up.railway.app) 上的系统化测试：

| 严重度 | Issue | 摘要 | 修复 PR |
|---|---|---|---|
| 🟥 **P1** | [#7069](https://github.com/nearai/ironclaw/issues/7069) | 每个 Google 服务都要重新走授权 | ✅ [`#7077`](https://github.com/nearai/ironclaw/pull/7077)（`henrypark133`）修复 |
| 🟥 **P1** | [#7074](https://github.com/nearai/ironclaw/issues/7074) | 多工具会议研究在调用未注册函数时崩溃 | ❌ 待修 |
| 🟧 **P2** | [#7071](https://github.com/nearai/ironclaw/issues/7071) | 流式响应每帧显示"Reconnecting"状态 | ❌ 待修 |
| 🟧 **P2** | [#7075](https://github.com/nearai/ironclaw/issues/7075) | 失败后 Agent 不响应新问题，继续重试旧任务 | ❌ 待修 |
| 🟧 **P2** | [#7073](https://github.com/nearai/ironclaw/issues/7073) | Agent 在用户回复中泄露内部工具名与路由逻辑 | ❌ 待修 |
| 🟧 **P2** | [#7072](https://github.com/nearai/ironclaw/issues/7072) | Telegram 消息原始 Markdown 不渲染 | ❌ 待修 |

> 🔴 6 条 Bug Bash 工单中仅 1 条有修复 PR，**用户侧修复速度滞后于内部重构速度**。其中 #7075（任务状态机管理失败后行为）和 #7073（响应抽象泄漏）反映出 Agent 运行时稳健性仍是薄弱环节。

### 5.2 开发者侧基础设施 Bug

| Issue | 类型 | 状态 |
|---|---|---|
| [#7087](https://github.com/nearai/ironclaw/issues/7087) | Reborn 测试范围分类器硬失败 | ✅ 已就地修复 |
| [#7085](https://github.com/nearai/ironclaw/issues/7085) | `check-version-bumps.sh` 在 macOS (BSD sed) 静默跳过检查 | ❌ 待修 |
| [#7060](https://github.com/nearai/ironclaw/issues/7060) | WIT/extension 包改动误判 Reborn 作用域 | ❌ 待修 |
| [#7081](https://github.com/nearai/ironclaw/issues/7081) | Docker fail-closed 门禁接到了空气 | ❌ 待修 |
| [#7083](https://github.com/nearai/ironclaw/issues/7083) | `crates/extensions/` 子树覆盖率全黑 | 🟡 关联修复 PR [`#7094`](https://github.com/nearai/ironclaw/pull/7094) |
| [#7078](https://github.com/nearai/ironclaw/issues/7078) | 共享 vendor OAuth scope 上限是店铺级而非调用者级 | ❌ 待修 |
| [#7068](https://github.com/nearai/ironclaw/issues/7068) | MCP `destructiveHint` 缺省值反语义（读 false，spec 默认 true） | ❌ 待修 |
| [#7082](https://github.com/nearai/ironclaw/issues/7082) | `builtin.skill_install` 拒绝合法输入、丢弃合法字段 | ❌ 待修 |
| [#7067](https://github.com/nearai/ironclaw/issues/7067) | `ResourceGovernor` 依赖未窄化（layer matrix 最后两个例外） | 🟡 跟踪中 |
| [#7086](https://github.com/nearai/ironclaw/issues/7086) | `.claude/commands/add-tool

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期**：2026-08-04
**数据周期**：过去 24 小时
**项目仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

过去 24 小时 LobsterAI 仓库呈现"高频内部迭代、低频社区互动"的特征：累计发生 11 次 PR 动态、2 次 Issue 更新，但其中 6 个 PR 在创建当日即被关闭（含 1 次 Revert），表明维护团队正在进行密集的内部修复/重构试验。今日**无新版本发布**，社区侧仅有 2 条陈旧 Issue 被重新触碰（均为 [stale] 状态）。整体来看，项目处于"代码内部活跃、用户端停滞"的双轨状态，需要警惕长期积压问题对社区活跃度的影响。

**活跃度指标**：
- PR 创建/关闭比：6 新建 : 5 待合并 = **当日净增量 1 个待合并**
- 社区 Issue 处理率：0 / 2 = **0%（无任何 Issue 被关闭）**
- 陈旧（[stale]）Issue/PR 比例：7 / 13 = **54%**

---

## 2. 版本发布

🚫 **今日无新版本发布。**

最新正式版本仍为 Issue #1206 中提及的 `v2026.3.30`。建议关注是否会有版本号与本日大量 closed PR 对应的内部构建版本（如 beta）发布。

---

## 3. 项目进展

今日有 **6 个 PR 在 24 小时内被合并或关闭**，推进了多项功能与稳定性修复：

| PR | 标题 | 状态 | 影响领域 |
|----|------|------|----------|
| [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) | feat(sidebar): add multi-agent task activity filter | CLOSED | **新功能**：侧边栏多 Agent 任务活动过滤器（Codex 风格）|
| [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419) | feat(activity): add startup credit campaign | CLOSED | **新功能**：启动积分活动（NetEase UA 推广）|
| [#2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | fix(nsis): re-kill survivor processes on every stop poll round | CLOSED | **稳定性修复**：Windows NSIS 安装器进程清理逻辑加固 |
| [#2421](https://github.com/netease-youdao/LobsterAI/pull/2421) | Liuzhq/fix btw tools | CLOSED | **内部修复**：tools 相关修复 |
| [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) | Liuzhq/fix btw tools | CLOSED | **内部修复**：tools 相关修复（迭代版本）|
| [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | Revert "Liuzhq/fix btw tools" | CLOSED | **回滚**：撤回前述 fix |

**重点解读**：

1. **`btw tools` 出现反复迭代 + Revert**（#2421 → #2422 → #2423）属于典型的"修 bug 引新 bug，再回滚"模式，覆盖 renderer、docs、main、openclaw、cowork、artifacts 六大模块。建议关注是否有跟进 PR 给出最终修复方案。

2. **`multi-agent task activity filter`**（[#2418](https://github.com/netease-youdao/LobsterAI/pull/2418)）是面向多 Agent 工作流的重要 UX 改进，含筛选按钮、折叠隐藏、蓝色指示器等细节，被认为是 Codex 风格的快速任务查找入口。

3. **Windows 安装器进程清理**（[#2420](https://github.com/netease-youdao/LobsterAI/pull/2420)）修复了"Stop-Process 只在轮询前执行一次，导致内核拆解慢或中途重启的进程可能存活逃逸门控"的边缘场景，并增加了进程名/PID/路径的详细日志记录——属于典型的稳定性 hardening。

4. **启动积分活动**（[#2419](https://github.com/netease-youdao/LobsterAI/pull/2419)）涉及登录续期、积分领取等流程，定位为获客活动，可能影响初次使用体验。

---

## 4. 社区热点

今日 Issues/PR 评论数普遍偏低（多数 0~1 条），社区讨论**明显冷却**。相对受关注的话题：

| 排名 | 主题 | 链接 | 评论数 |
|------|------|------|--------|
| 1 | 会话详情导出 Markdown 功能请求 | [Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213) / [PR #1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | 各 1 |
| 2 | 私有化部署 kimi2.5 重复处理 Bug | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | 1 |

**诉求分析**：
- **导出 Markdown** 是少数同时拥有 Issue 和 PR 的功能方向，反映出"用户真实需要 + 贡献者已着手实现"的良性循环。但 PR #1214 仍处于 [OPEN] [stale] 状态长达 4 个月未合入，说明代码评审或冲突解决存在瓶颈。
- **kimi2.5 模型 Bug** 反映私有化部署用户对模型兼容性的关切，且仅在切换其他模型时恢复正常，进一步指向模型层（或调用链路）的问题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Bug | 链接 | 影响范围 | 是否有 Fix PR |
|------|-----|------|----------|--------------|
| 🔴 **高** | 私有化部署 kimi2.5 分析文档时重复回复当前动作（必现） | [Issue #1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | 用户日常分析任务 | ❌ 无 |
| 🟢 **已修复** | Windows NSIS 安装器残留进程逃逸 | [PR #2420](https://github.com/netease-youdao/LobsterAI/pull/2420) | 安装/卸载流程 | ✅ 已关闭 |
| ⚠️ **修复中** | `btw tools` 相关问题（修复被 Revert）| [#2421](https://github.com/netease-youdao/LobsterAI/pull/2421) / [#2422](https://github.com/netease-youdao/LobsterAI/pull/2422) / [#2423](https://github.com/netease-youdao/LobsterAI/pull/2423) | 多模块 | 🔄 反复迭代中 |

**重点提示**：kimi2.5 重复处理 Bug 已存在 4 个月仍未得到响应，属于"高严重度 + 低响应度"的悬挂风险点，建议优先排查。

---

## 6. 功能请求与路线图信号

今日涉及的新功能/改进请求：

| 请求内容 | 状态 | 实现可能 |
|----------|------|----------|
| 会话详情导出 Markdown（[Issue #1213](https://github.com/netease-youdao/LobsterAI/issues/1213)）| 已有完整实现 PR（[#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)），复用 `buildDisplayItems` + `buildConversationTurns`，方案成熟 | 🟢 **高** — 建议优先 Review 合并 |
| Cowork 错误重试按钮（[PR #1208](https://github.com/netease-youdao/LobsterAI/pull/1208)）| 已扩展 `coworkErrorClassify.ts`，覆盖 429 等可重试场景 | 🟡 中 — 待维护者 Review |
| 自定义 Provider 上限提升至 20（[PR #1212](https://github.com/netease-youdao/LobsterAI/pull/1212)）| 根因清晰，修复范围可控 | 🟡 中 |
| Web Search 屏蔽不支持的 Chrome flags（[PR #1209](https://github.com/netease-youdao/LobsterAI/pull/1209)）| 涉及 Chrome 130+ 行为变化，兼容性强 | 🟡 中 |
| Electron 升级 40.2.1 → 43.2.0（[PR #1277](https://github.com/netease-youdao/LobsterAI/pull/1277)）| 跨多个大版本的依赖升级 | 🔴 低 — 风险较高，需充分测试 |

**路线图信号**：从合并的 [#2418](https://github.com/netease-youdao/LobsterAI/pull/2418) 多 Agent 任务过滤器来看，**多 Agent / Cowork 工作流的 UI 增强** 是当前开发重心之一；与此同时，商业化（积分活动 [#2419](https://github.com/netease-youdao/LobsterAI/pull/2419)）也在加速推进。

---

## 7. 用户反馈摘要

由于 Issues 评论数普遍较低，可提炼的有效反馈有限：

1. **文档/会话二次处理体验差**（[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206)）：用户在私有化部署的 kimi2.5 模型下分析源码时，模型会"重复回复当前动作"，造成认知困惑，"重复的情况不清楚是出现 bug 还是继续等待执行"——说明**当前执行状态的可视化与降级机制**亟需改进。

2. **会话复用痛点**（[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213)）：用户反映"仅支持导出为图片，无法以文本格式保存对话内容"，图片格式不便于"后续编辑和检索"。这是知识工作者高频场景，反映当前产品**对会话作为知识资产的定位不足**。

3. **私有化部署 + 自定义模型诉求强烈**（[#1212](https://github.com/netease-youdao/LobsterAI/pull/1212)）：用户希望"保留旧配置的同时切换新 Provider"，硬编码 10 个槽位的限制被认为是关键阻碍——企业用户对模型编排灵活性的需求持续上升。

> **满意度信号**：暂未在公开 Issues 中观察到针对近期版本的明确正向反馈，建议主动收集用户调研。

---

## 8. 待处理积压

⚠️ **以下 Issue/PR 已标记 [stale]，创建于 2026-04-01，距今超过 4 个月未推进，建议维护者重点关注**：

| 类型 | 编号 | 标题 | 创建时间 |
|------|------|------|----------|
| Issue | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | 【bug】私有化部署的 kimi2.5 模型分析文档会重复处理或回复进度 | 2026-04-01 |
| Issue | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | 【功能建议】为会话详情添加「导出为 Markdown」功能 | 2026-04-01 |
| PR | [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208) | feat(cowork): 新增手动重试按钮 | 2026-04-01 |
| PR | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | fix(web-search): web-search-block-unsupported-chrome-flags | 2026-04-01 |
| PR | [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212) | fix(model): allow up to 20 custom providers | 2026-04-01 |
| PR | [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) | 【功能缺失】会话详情新增导出为 Markdown 文件功能 | 2026-04-01 |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump the electron group | 2026-04-02 |

**积压健康度评估**：
- 积压率（stale / total）= **54%**，处于不健康区间
- 全部 5 个待合并 PR 都属于功能性/兼容性改进，**无明显冲突**
- 优先级建议：**#1214（导出 Markdown）→ #1208（Cowork 重试）→ #1206（kimi2.5 Bug）→ 其他**

---

## 📊 项目健康度总结

| 维度 | 状态 | 说明 |
|------|------|------|
| 代码活跃度 | 🟢 健康 | 24 小时内 11 个 PR 动态，迭代密集 |
| 社区响应度 | 🔴 警戒 | 0 Issue 关闭，54% 项标记 stale |
| 发布节奏 | 🟡 观察 | 今日无新版本，需确认是否有内部构建 |
| 稳定性 | 🟡 观察 | Windows 进程清理已加固，btw tools 反复迭代中 |
|

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-08-04**

---

## 1. 今日速览

Moltis 项目今日呈现**低活跃度**状态：过去 24 小时内无新 Issue、无新 Release、Issue 关闭/打开数均为 0，仅有 1 个处于开放状态的 PR 仍在等待维护者审阅。整体而言，项目处于"功能开发待评审"阶段，短期内未见社区反馈波动。从健康度角度看，单 PR 的推进本身具备实质意义（涉及 MCP 服务器的仓库化管理能力），但缺乏 Issue 侧的讨论与审阅互动，建议关注审阅响应时效。

- **Issue 动态**：0 条
- **PR 动态**：1 条待合并
- **Release**：0 个
- **活跃度评级**：⭐⭐☆☆☆（偏低，仅依赖单一 PR 推进）

---

## 2. 版本发布

📭 **今日无新版本发布。**

最近一次发布情况未在本次数据中体现，请关注 [GitHub Releases 页](https://github.com/moltis-org/moltis/releases) 以获取历史版本信息。

---

## 3. 项目进展

🚧 **今日无 PR 合入。** 仓库整体向前推进的速度处于停滞状态，唯一的开放 PR（#1183）尚未进入评审闭环。

---

## 4. 社区热点

### 🔥 PR #1183 — `feat(mcp): add managed repository bundles`
- **作者**：penso
- **状态**：OPEN（待合并）
- **创建**：2026-08-02 ｜ **最近更新**：2026-08-03
- **点赞数**：0 ｜ **评论数**：未定义
- **链接**：[PR #1183](https://github.com/moltis-org/moltis/pull/1183)

**摘要要点**：
- 为 MCP 服务器引入**托管 Git 仓库 bundles**机制，覆盖发现、预览、安装、更新、回滚、移除全生命周期
- 支持 **HTTPS 凭据** 与 **pinned managed SSH transport**
- 与 **vault 生命周期** 集成，支持导入仓库化的 MCP 配置
- 简化了 **web onboarding** 流程

**社区反馈分析**：
该 PR 缺乏社区可见的讨论热度（0 点赞、未定义评论数），可能反映两种情况：一是 PR 内容专业、面向开发者内部使用，普通用户关注度低；二是审阅者尚未充分介入。建议项目维护者主动指派 reviewer，以推进合入或给出明确改进意见。

---

## 5. Bug 与稳定性

✅ **今日无 Bug 报告、无崩溃反馈、无回归问题。**

未发现严重程度相关条目，无需 fix PR 追踪。

---

## 6. 功能请求与路线图信号

📌 **PR #1183 本身就是当前最具信号价值的功能演进**，反映如下路线图趋势：

| 方向 | 信号 | 解读 |
|---|---|---|
| **MCP 生态扩展** | managed repository bundles | 项目正从"支持 MCP 服务器"走向"托管 MCP 服务器"，向企业级/平台化演进 |
| **安全凭据治理** | HTTPS credentials + SSH pinned + vault 集成 | 凭据管理进入纵深阶段，符合安全合规趋势 |
| **Web Onboarding 简化** | 摘要中提及简化流程 | 降低新用户接入门槛，预计将在下一版本中落地 |
| **生命周期完整性** | 发现 → 预览 → 安装 → 更新 → 回滚 → 移除 | 已具备成熟 ops 化特征，可能成为后续默认能力 |

**纳入下一版本的可能性评估**：高。该 PR 范围明确、覆盖完整生命周期，属于可独立交付的功能模块，建议在补充 review 后尽快合入。

---

## 7. 用户反馈摘要

⚠️ **今日无新增 Issue 评论、无新反馈样本。**

由于过去 24 小时社区互动趋近于零，无法提炼具体用户痛点或使用场景。建议结合过往 Issue 历史综合评估用户体验。

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 创建时间 | 风险提示 |
|---|---|---|---|---|
| [#1183](https://github.com/moltis-org/moltis/pull/1183) | PR | OPEN | 2026-08-02 | 已开放 2 天，无审阅互动，建议指派 reviewer |

**提醒**：
- 维护者应优先确认 PR #1183 的评审节奏，避免长期停留在"等待"状态
- 如该 PR 涉及破坏性变更（breaking change），需同步在 Release Notes 中标注迁移指南
- 当前无长期未响应的孤儿 Issue，但建议建立"7 天无响应"自动提醒机制，以防低活跃期问题被遗漏

---

### 📊 总结

Moltis 在 2026-08-04 处于**静默推进期**，唯一亮点是 PR #1183 所代表的 MCP 托管仓库 bundles 能力，将为项目带来更完整的服务器生命周期管理。**项目健康度整体平稳但偏冷**，建议维护团队适度加强审阅参与度，并在下一迭代周期内推动该 PR 合入，以保持路线图节奏。

> 📎 仓库地址：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-04

> 数据来源：agentscope-ai/CoPaw（GitHub 主仓库）
> 统计周期：过去 24 小时（2026-08-03 ~ 2026-08-04）

---

## 1. 今日速览

CoPaw 项目今日处于**发布前的高强度收尾期**，围绕 v2.1.0-beta.1 的验证与已知问题修复同时展开。过去 24 小时共有 23 条 Issue 更新、50 条 PR 更新，并发布 1 个 Beta 版本（v2.1.0-beta.1），整体活跃度处于近一个月来的高位。社区侧关注点集中在 **ACP 协议竞态、模型回退机制、Skill/Skills 页面慢网加载** 等工程性问题，与 2.0.1 实际部署中暴露的兼容性议题高度耦合。综合判断：项目健康度良好，PR 处理吞吐稳定（25/25 平衡），但 2.0.x 与 agentscope 2.0.4.post1 之间的兼容债正在成为新的不稳定来源。

---

## 2. 版本发布

### v2.1.0-beta.1（Beta）

- **发布类型**：Beta，预发布版本
- **关键变更**：
  - `fix(chat)`：修复新建会话时残留的旧 channel identity 泄漏（[#6382](https://github.com/agentscope-ai/QwenPaw/pull/6382)）
  - `feat(inbox)`：在 inbox 侧边栏对新的审批请求添加 wobble 动画与色码徽标点
- **配套验证工单**：[#6656](https://github.com/agentscope-ai/QwenPaw/issues/6656) Release Duty 安装验证，截止时间 2026-08-03 14:35 UTC
- **破坏性变更**：Beta 阶段，尚未标注 breaking change，但仍需关注 Chat/Session 状态机变化对既有 channel 集成的潜在影响
- **迁移注意事项**：
  - 桌面端用户建议先在便携版或独立 workspace 中验证 channel 与 session 隔离逻辑
  - 生产环境不建议直接升级 Beta，建议在 Beta 期间反馈 channel identity 相关回归
  - 已使用 inbox 审批流程的用户，UI 交互将有视觉变化，需对运营文档截图同步更新

---

## 3. 项目进展（已合并 / 已关闭 PR）

| 主题 | PR | 影响 |
|---|---|---|
| 插件平台发布工作流 | [#6661](https://github.com/agentscope-ai/QwenPaw/pull/6661) | 让 plugins 平台的 `Run workflow` 按钮可在 Actions 页面手工触发，提升发布灵活性 |
| Windows tasklist 探针安全加固 | [#6203](https://github.com/agentscope-ai/QwenPaw/pull/6203) | 给 `_is_pid_running()` 增加超时与异常隐藏，修复 Windows 端命令运行的潜在挂起 |
| Real behavior proof 闸门修复 | [#6653](https://github.com/agentscope-ai/QwenPaw/pull/6653) | 修复 CI 中 Evidence 区段被全部剥离的问题（[#6626](https://github.com/agentscope-ai/QwenPaw/issues/6626)），恢复 fenced code block 作为合规证据 |
| Playwright 版本约束 | [#6654](https://github.com/agentscope-ai/QwenPaw/pull/6654) | 将 Playwright 锁在 < 1.62，修复 Tauri macOS 桌面端验证任务 10 分钟 0 输出的阻塞 |
| 桌面端 Python 运行环境 | [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) | 让桌面端 `execute_shell_command` 复用后端自带的 Python 解释器，解决用户本地无 Python / 多 Conda 环境场景（[#6160](https://github.com/agentscope-ai/QwenPaw/issues/6160)） |
| fork PR body 拉取修复 | [#6646](https://github.com/agentscope-ai/QwenPaw/pull/6646) | 修复 `pull_request_target` 下 fork PR body 丢失问题（[#6563](https://github.com/agentscope-ai/QwenPaw/issues/6563)），恢复外部贡献者 CI 通路 |

**整体判断**：今日合并/关闭的 25 条 PR 中以 CI/基础设施修复为主，说明项目正在为 v2.1.0 正式版扫清发布阻塞；同时桌面端 Python 环境、ACP 协议层等用户可感知的功能性修复也已完成落地。Beta 发布节奏稳健。

---

## 4. 社区热点

按评论数与互动度排序的焦点议题：

1. **[#6655 Console 通道不渲染审批提示（3 评论）** - https://github.com/agentscope-ai/QwenPaw/issues/6655）
   - 诉求：console 通道下，高风险命令审批请求未被渲染为可读提示，agent 静默等待 300s 后超时，用户完全无感知
   - 反映 Web UI / Console 通道在交互一致性上的显著差距，是命令执行通道设计上的系统性缺口

2. **[#6649 GPT-5.6 prompt caching 支持（8 评论）** - https://github.com/agentscope-ai/QwenPaw/issues/6649）
   - 诉求：在 Responses API provider 中支持 `prompt_cache_key`、`prompt_cache_options`、`prompt_cache_breakpoint`，降低 Agent 多轮对话延迟与成本
   - 这是 v2.1 周期内 model provider 层最具生产价值的增强诉求之一

3. **[#6537 Skill tags 重启消失回归（11 评论，已关闭）** - https://github.com/agentscope-ai/QwenPaw/issues/6537）
   - 反映 Skill Pool 标签写入路径与启动时 manifest reconcile 路径不一致；评论集中在影响范围与是否进入 2.0.x patch

4. **[#6588 spawn_subagent batch 占位符 bug（6 评论）** - https://github.com/agentscope-ai/QwenPaw/issues/6588）
   - Responses 兼容模型返回空 `batch` 时被误判为批处理模式，已带动 [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595)、[#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658)、[#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) 三条相关 PR 处理

5. **[#6160 独立 Python 环境（4 评论，已关闭）** - https://github.com/agentscope-ai/QwenPaw/issues/6160）
   - 已由 [#6579](https://github.com/agentscope-ai/QwenPaw/pull/6579) 合并落地

**热点归纳**：社区当下诉求集中在 **通道层一致性、模型能力对齐、生产可用性** 三大方向，本质是 2.0 桌面版落地后真实使用场景与设计预期之间的差距正在快速显化。

---

## 5. Bug 与稳定性

按严重程度（阻塞生产 > 频繁触发 > 偶发 UI）排列：

| 严重度 | Issue | 现象 | 是否有修复 PR |
|---|---|---|---|
| 🔴 高 | [#6612 QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容](https://github.com/agentscope-ai/QwenPaw/issues/6612) | proactive/memory-evolving 子系统因 `Msg.content` 类型变更崩溃，工具权限死锁 | 暂无，需 2.0.x patch |
| 🔴 高 | [#6619 ToolCallBlock 缺少 extra_content 字段崩溃](https://github.com/agentscope-ai/QwenPaw/issues/6619) | `openai_chat_model_compat._parse_stream_response` 解析流式响应时 AttributeError | 暂无 |
| 🔴 高 | [#6614 微信 cron 静默失败、~44M tokens 浪费](https://github.com/agentscope-ai/QwenPaw/issues/6614) | 定时推送任务显示 success 但实际未送达，`ret=-2 context_token` 失效 | 暂无 |
| 🔴 高 | [#6608 长 shell 命令绕过超时阻塞飞书会话 1.5h](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 孤儿子进程、无按通道总超时，UI 卡死 | 暂无 |
| 🟠 中 | [#6647 WebView2 崩溃导致桌面端全黑](https://github.com/agentscope-ai/QwenPaw/issues/6647) | STATUS_IN_PAGE_ERROR 0xc0000006，无恢复路径 | 暂无 |
| 🟠 中 | [#6635 Console 页面慢网加载失败（30s 超时）](https://github.com/agentscope-ai/QwenPaw/issues/6635) | `/api/skills` 等 MB 级未压缩响应 vs 固定 30s 前端超时 | 与 [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) 重复 |
| 🟠 中 | [#6633 Skills / Skill Pool 页面慢网加载失败](https://github.com/agentscope-ai/QwenPaw/issues/6633) | 同上，技能内容嵌入列表响应 | 间接相关 [#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650) 已着手拆分 |
| 🟠 中 | [#6625 ACP delegate_external_agent 文本丢失](https://github.com/agentscope-ai/QwenPaw/issues/6625) | 通知与 prompt 响应同 TCP 段时竞争，错误返回 "completed without text output" | [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) 待审 |
| 🟡 低 | [#6588 spawn_subagent 空 batch 误判](https://github.com/agentscope-ai/QwenPaw/issues/6588) | 单任务被当作批处理 | [#6595](https://github.com/agentscope-ai/QwenPaw/pull/6595) / [#6658](https://github.com/agentscope-ai/QwenPaw/pull/6658) / [#6609](https://github.com/agentscope-ai/QwenPaw/pull/6609) |
| 🟡 低 | [#6589 execute_shell_command 大量输出冻结 UI](https://github.com/agentscope-ai/QwenPaw/issues/6589) | 数万行 stdout 一次性渲染阻塞主线程 | 已关闭，但需关注修复落地 |
| 🟡 低 | [#6547 Coding Mode 光标错位](https://github.com/agentscope-ai/QwenPaw/issues/6547) | 代码编辑器上方出现漂浮输入框 | 已关闭 |
| 🟡 低 | [#6565 execute_shell_command 多行命令折叠](https://github.com/agentscope-ai/QwenPaw/issues/6565) | 引号外换行被折叠成空格、PIPE 模式下后台进程卡住 | 暂无 |
| 🟢 提示 | [#6624 自动压缩未触发 summarize_when_compact](https://github.com/agentscope-ai/QwenPaw/issues/6624) | Scroll 自动压缩路径不触发记忆流程，手动 `/compact` 正常 | 暂无，需维护者判断设计意图 |

**稳定性结论**：当前最严重的稳定性债集中在 **2.0.1 ↔ agentscope 2.0.4.post1 之间的 API drift**，直接影响主动式（proactive）与记忆子系统，建议在下一个小版本（2.0.2 或 2.1.0-rc）中优先处理。

---

## 6. 功能请求与路线图信号

按"已有对应 PR / 已有相关讨论 / 仅 Issue"三档归类：

### 🟢 高概率进入下一版本（已有 PR 在途）
- **GPT-5.6 prompt caching 支持**（[#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649)）→ 待 PR 落地，2.1 周期高优
- **模型自动回退 + cooldown**（[#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) / [#2199](https://github.com/agentscope-ai/QwenPaw/pull/2199)）→ 解决 [#2199](https://github.com/agentscope-ai/QwenPaw/issues/2199) / [#1327](https://github.com/agentscope-ai/QwenPaw/issues/1327) / [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089)，系长期社区诉求
- **Skill 列表载荷瘦身 + 详情端点分离**（[#6650](https://github.com/agentscope-ai/QwenPaw/pull/6650)）→ 缓解 [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) / [#6635](https://github.com/agentscope-ai/QwenPaw/issues/6635)
- **Files 页面文件/文件夹 REST API**（[#6651](https://github.com/agentscope-ai/QwenPaw/pull/6651)）→ 补齐 `/files` 路由
- **用户上下文透明穿透**（[#6525](https://github.com/agentscope-ai/QwenPaw/pull/6525)）→ Chat API → Agent → Tool → MCP → SKILL CLI 全链路
- **SSE 结构化 run outcome**（[#5930](https://github.com/agentscope-ai/QwenPaw/pull/5930)）→ 解决 API 自动化（如 Java 服务）侧无法感知异常结束的问题
- **Provider 发现与模型元数据统一**（[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)）→ 关闭 [#6167](https://github.com/agentscope-ai/QwenPaw/issues/6167)

### 🟡 中概率（仅 Issue，需求明确但缺 PR）
- **对话框拖入文件直接读原路径**（[#6642](https://github.com/agentscope-ai/QwenPaw/issues/6642)）→ 用户明确希望对齐其他桌面 agent 工具的体验
- **任务产出物按任务分目录存放**（[#6643](https://github.com/agentscope-ai/QwenPaw/issues/6643)）→ `media/` 目录当前堆积严重
- **多智能体协作引导补齐**（[#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621)）→ 文档与默认行为的鸿沟，用户调试 50+ 轮才发现

### 🔵 长尾观察项
- **对话框拖入文件分行显示**（[#6583](https://github.com/agentscope-ai/QwenPaw/issues/6583)）→ UI 微优化

---

## 7. 用户反馈摘要

- **多智能

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-04

## 📌 今日速览

ZeroClaw 仓库在过去 24 小时保持极高活跃度：**50 条 Issue 更新（43 新开/活跃 + 7 关闭）、50 条 PR 更新（47 待合并 + 3 已处理），且无任何新版本发布**。当前工作高度集中在 **v0.9.0 安全与架构 RFC 收口** 阶段——`#8692` 维护者决策队列、`#7432` v0.9.0 安全/Gateway/breaking-change 跟踪器均在今日更新，多个 P1 安全类 PR（审批授权、OpenAI 代理、缓存边界）等待合并。整体处于"高强度 review、低版本产出"的稳定推进期。

---

## 🚀 版本发布

**今日无新版本发布。** 仓库主要精力投入在 RFC 决策与安全 hardening，未触发 release 流程。最近的版本节奏需结合 milestone 单独追踪（参考 [`#7432` v0.9.0 队列](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）。

---

## 📈 项目进展

今日有 **7 条 Issue 被关闭**，集中在已完成的特性交付与陈旧 issue 清理：

| 编号 | 标题 | 类别 | 链接 |
|---|---|---|---|
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn-level OTel trace correlation（合并入主分支 review） | 增强/可观测性 | Closed |
| [#6002](https://github.com/zeroclaw-labs/zeroclaw/issues/6002) | Telegram + llama.cpp 助手路由错位 | Bug（标记 stale 后关闭） | Closed |
| [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) | 审批超时被记为"操作员拒绝"——**审计轨迹被篡改** | P1 Bug（已 in-progress） | Closed |
| [#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113) | Slack agent lifecycle 可见进度 | 增强（已 in-progress） | Closed |
| [#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) | 重构：抽取 OAuth refresh 重试循环 | Refactor | Closed |
| [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) | **XOR cipher 用于 secrets 加密（CRITICAL）** | 安全 | Closed |

特别值得关注的进展：
- **OTel trace 关联** ([#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641))：嵌套 `llm.call / tool.call / memory.*` span 的提案已闭环，是 [#6009](https://github.com/zeroclaw-labs/zeroclaw/issues/6009) 的自然后续。
- **审计轨迹修复** ([#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642))：审批超时被错误记录为拒绝——这是少有的"**日志撒谎**"类高危缺陷，关闭但保留为 follow-up，预计会带修复 PR 回归。
- **OAuth 重试重构** ([#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162))：减少 provider 路径复制粘贴，提升跨 provider 一致性。
- **XOR 加密 issues 关闭** ([#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1))：CRITICAL 级别的"伪加密"被清出 backlog，预期后续有真正加密方案接入。

**整体判断**：项目在安全、可观测性、provider 一致性三条主线上都完成了一个小里程碑，但 PR 合并数（仅 3）远低于 Issue 关闭数，意味着 **review throughput 是当前的真实瓶颈**。

---

## 🔥 社区热点

按评论数与点赞数综合排序，今日最值得关注的话题：

1. **[#8303 RFC: Goal mode v1 — bounded foreground Matrix work](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)** — 11 条评论，👍1  
   讨论多轮 agent 跨 turn 的持久目标机制，是 ZeroClaw 从"单轮响应"向"长任务"演化的关键设计文档。

2. **[#8692 Tracker: Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — 8 条评论  
   集中处理 RFC/design/release-policy 决策，是项目治理的中枢，今日仍在滚动。

3. **[#9488 RFC: Unified attachment architecture for web chat and channels](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — 8 条评论  
   统一 web chat 与 channel 的附件处理架构，high risk 的 RFC，意味着 channel 层正在做"模型无关化"。

4. **[#6157 Bug: Nextcloud Talk use correct bot message API](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)** — 8 条评论  
   状态仍是 **blocked**，说明 bot 路由未走官方 `ocs/v2.php` API，**S3 minor 但影响用户能否回复**。

5. **[#7232 RFC: Structured Observability Enhancement](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)** — 5 条评论  
   与 [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 互为姊妹提案，**rich event + OTel + bridge refactor**。

6. **[#8132 RFC: Replace React/Vite web UI build with Rust→Wasm framework](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)** — 2 条评论，👍1（**今日唯一有👍 的条目**）  
   强烈信号：**社区希望 web UI 走 Rust→Wasm（Dioxus/Leptos/Yew）**，脱离 Node.js。

7. **[#8424 RFC: Workspace-relative forbidden path patterns + .zeroclawignore](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)** — 7 条评论  
   把 `forbidden_paths` 从"workspace 外"扩展到"workspace 内"（如 `.env`、`rust-toolchain.toml`），回应了真实的安全使用场景。

**诉求分析**：高频讨论主题围绕"agent 长任务能力"、"跨 channel 抽象统一"、"workspace 内敏感文件保护"、"web UI 栈迁移 Rust→Wasm"四个方向，这是 ZeroClaw 走向成熟期最核心的诉求画像。

---

## 🐛 Bug 与稳定性

按严重程度排列（合并 P1 + S1 workflow blocked + 安全类）：

| 严重度 | 编号 | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| **P1 / 审计** | [#9642](https://github.com/zeroclaw-labs/zeroclaw/issues/9642) | 审批超时被记为操作员拒绝 | 已关闭（follow-up） | ⏳ 未见专门 PR |
| **P1 / 网关** | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | WebSocket 生命周期耦合 turn lifecycle | Open，accepted | ⏳ 等待 PR |
| **P1 / Desktop** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop 空白窗口 | Open，needs-author-action | ❌ 无 |
| **P1 / 安全** | [#9574 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9574) | 授权审批响应者 | Open，risk:high | ✅ PR 已提待合并 |
| **P1 / 缓存** | [#9720 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9720) | 强制 response cache 请求边界 | Open，risk:high | ✅ PR 已提待合并 |
| **P1 / Proxy** | [#9606 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9606) | OpenAI Responses 走代理 | Open，risk:high | ✅ PR 已提待合并 |
| **S2 / Channel** | [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) | Telegram 在 tool_call+content 双发时产生重复消息 | Open（刚开） | ⏳ 暂无 |
| **S3 / Channel** | [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | Nextcloud Talk 错用 bot API | Open，blocked | ❌ |
| **P1 / Crypto（已清理）** | [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) | XOR cipher 无效加密 | 已关闭 | ⚠️ 关闭未给出替换实现链接 |

**判断**：今日 PR 中 **4 条 P1 修复（[#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)、[#9720](https://github.com/zeroclaw-labs/zeroclaw/pull/9720)、[#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)、[#9472](https://github.com/zeroclaw-labs/zeroclaw/pull/9472)）同时处于待合并**，是这一波安全 hardening 的核心批次，建议维护者优先 review。

---

## 💡 功能请求与路线图信号

**已被 RFC 化、强烈信号进入下一版本：**

- **[#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) ZeroCode 迁移期间保留 Todo tracker 配置** — 已是 in-progress，跟踪活跃。
- **[#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) zerocode SOP pane MVP（列表 + 运行状态图标）** — 重新缩范围到 MVP，控制/取消延后到 [#9685](https://github.com/zeroclaw-labs/zeroclaw/issues/9685) / [#9686](https://github.com/zeroclaw-labs/zeroclaw/issues/9686)。
- **[#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) Reset stale channel sessions after `session_ttl_hours`** — accepted，待实现。
- **[#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) CI: 改进 Rust 缓存与 critical path** — accepted，影响后续所有 PR 节奏。

**较新、可能进 v0.9.0+ 的请求：**

- **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) Unified attachment architecture** — 社区讨论热，high risk RFC。
- **[#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) SOP capability 权限契约** — v0.9.0 SOP 授权合约，目标是复用主授权管线而非另起炉灶。
- **[#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621) 分阶段 opt-in 产品遥测** — 解决"不知道哪些特性真在用"的元问题。
- **[#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) Schema-validated memory consolidation** — 用 schema 替换 JSON 提示解析，跨 provider 更稳。
- **[#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232) Structured Observability Enhancement** — 与 [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) 配套。
- **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) Workspace-relative forbidden paths + .zeroclawignore** — 用户真实痛点强相关。

**潜在 v1+ 的远期信号：**

- **[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) Rust→Wasm web UI** — 唯一带 👍 的 RFC。
- **[#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367) capability-aware documentation** — 让 agent 知道自己具备什么能力。

---

## 🗣️ 用户反馈摘要

从 Issue 评论与描述中提炼的真实使用场景：

- **"Slack 没有 lifecycle 进度，长请求像卡死"** ([#7113](https://github.com/zeroclaw-labs/zeroclaw/issues/7113)) — Slack 缺乏原生"打字中"反馈机制，导致用户误以为 agent 没在工作。社区期望跨 channel 的"agent working…"提示。
- **"Nextcloud Talk bot 错用 API，导致响应失败"** ([#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157)) — 频道适配器对官方 API 路径不熟。
- **"macOS desktop 安装后窗口消失，权限检测失败"** ([#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527)) — Tauri desktop 端的权限/重启路径有缺陷。
- **"Telegram 在 LLM 同时返回 tool_call + content 时重复发消息"** ([#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718)) — 新开 bug，用户体验可见的"被刷屏"。
- **"workspace 内的 `.env`、`config.yaml` 不能被 agent 避开"** ([#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424)) — 安全敏感的开发者用户反复呼吁内层禁止路径。
- **"希望 ZeroClaw 知道自己在哪个 harness 里运行"** ([#9005](https://github.com/zeroclaw-labs/zeroclaw/issues/9005)) — 把"harness 上下文注入 system prompt"作为基础能力。
- **"维护者缺少真实使用数据"** ([#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621)) — 维护者侧反推：不知道 Lucid/Qdrant 是否真有人在用，导致支持决策困难。

**不满意点**：渠道一致性差（每个 channel 都要单独修一遍）、desktop 体验不成熟、agent 不能识别自身能力边界。**满意信号**：[#9162](https://github.com/zeroclaw-labs/zeroclaw/issues/9162) 的 OAuth 重试重构得到了跨 provider 一致性改善，被用户正面引用。

---

## ⏳ 待处理积压

以下 Issue/PR 已存在较长时间且今日仍活跃，提醒维护者优先 review：

| 编号 | 标题 | 创建时间 | 状态/卡点 | 链接 |
|---|---|---|---|---|
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | WebSocket 与 turn lifecycle 解耦 | 2026-06-16 | P1 accepted，无 PR | Link |
| [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) | `file_download` SSRF gate + allowed_private_hosts | 2026-07-04 | XL size，needs-author-action，stale 候选 | Link |
| [#9069](https://github.com/zeroclaw-labs/zeroclaw/pull/9069) | Dashboard per-agent backend + memory count（stack 7/7） | 2026-07-14 | XL size，rebase 后待 review | Link |
| [#9072](https://github.com/zeroclaw-labs/zeroclaw/pull/9072) | 拆分 memory 主存储 vs 增强连接器 | 2026-07-14 | XL size，trusted contributor | Link |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | Hailo-Ollama 原生 provider | 2026-07-17 | XL size，needs-author-action | Link |
| [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | Matrix 单消息进度草稿 | 2026-06-28 | XL size，trusted contributor，needs-author-action | Link |
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS desktop 空白窗口 | 2026-06-12 | P1，needs-repro | Link |
| [#1](https://github.com/zeroclaw-labs/zeroclaw/issues/1) | XOR cipher | 2026-02-14 | CRITICAL 已关闭但需跟进替换实现 | Link |

**重点提醒**：今日 P1 安全类 PR（[#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)、[#9606](https://github.com/zeroclaw-labs/zeroclaw/pull/9606)、[#9720](https://github.com/zeroclaw-labs/zeroclaw/pull/9720)）已是 v0.9.0 release-blocking 的核心，建议优先 review；XL size 的大型 PR 多次 rebase 后仍占用 review 带宽，需评估是否拆分。

---

*日报基于 2026-08-03 ~ 2026-08-04 GitHub 数据生成。所有链接指向 zeroclaw-labs/zeroclaw 仓库。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*