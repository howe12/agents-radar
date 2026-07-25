# OpenClaw 生态日报 2026-07-25

> Issues: 463 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-25 02:04 UTC

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

# OpenClaw 项目日报 · 2026-07-25

> 数据范围：2026-07-24 至 2026-07-25
> 数据源：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 仓库今日保持 **极高活跃度**：过去 24 小时共有 463 条 Issues 更新（355 条活跃/新开、108 条关闭）与 500 条 PR 更新（203 条待合并、297 条合并/关闭），合并/关闭比约 1.46，处理效率显著。无新版本发布，开发重点仍集中在 2026.7.2-beta 系列的稳定性打磨上。从内容分布看，**会话恢复卡死（`clawsweeper-recovery-stuck`）、多 Provider 兼容性、网关配置写入原子性** 是当前三大攻坚方向，单日出现的多项同质修复（Proxy、TTS base64、MCP schema）显示出维护者正以"小颗粒、快迭代"的方式消化 backlog。

---

## 2. 版本发布

**今日无新版本发布。**

仓库内可见的最新构建号为 `2026.7.2-beta.5`，处于 QA 验证阶段（参考 [#113461](https://github.com/openclaw/openclaw/issues/113461)）。当前 stable 通道为 `2026.7.1`，但该版本因 [#107220](https://github.com/openclaw/openclaw/issues/107220) 的 gateway 启动 crash-loop 已被快速修复，建议升级前查阅 release notes。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（含今日动向）

| PR | 主题 | 影响 |
|---|---|---|
| [#113450](https://github.com/openclaw/openclaw/pull/113450) | **feat(ui): render chat notice rows as markdown** | Control UI 系统提示行支持 Markdown 渲染，关闭 |
| [#113461](https://github.com/openclaw/openclaw/pull/113461) | fix(qa): capture multi-session runtime tools | 解锁 2026.7.2-beta.5 验证阻塞 |
| [#113460](https://github.com/openclaw/openclaw/pull/113460) | chore: stabilize session cost usage cache warmup test | 修复 compact-small-8 校验的偶发失败 |
| [#113226](https://github.com/openclaw/openclaw/pull/113226) | fix: workflow sanity audit passes on main | 解除主分支工作流审计对无关 PR 的连带阻塞 |

### 关键修复/增强（已合并或接近合并）

- **网关配置原子性**：[#110397](https://github.com/openclaw/openclaw/pull/110397) `fix(gateway): preserve restart intent across coalesced config writes` —— 关闭 [#105623](https://github.com/openclaw/openclaw/issues/105623)，确保合并写入不会丢失 restart intent，避免重启意图被新 payload 覆盖。
- **SQLite 状态防护**：[#113459](https://github.com/openclaw/openclaw/pull/113459) `fix(sqlite): prevent stale verifier quarantine after database replacement` —— 关联 [#113306](https://github.com/openclaw/openclaw/issues/113306)，修复验证后数据库被替换导致的误隔离。
- **飞书账号选择**：[#113417](https://github.com/openclaw/openclaw/pull/113417) `fix: reject invalid channel account selections` —— 显式账号 ID 现在必须匹配已启用账号，不再被静默回退到默认账号。
- **会话 fork 越权**：[#103148](https://github.com/openclaw/openclaw/pull/103148) `fix(sessions): enforce exact owner equality for all parent session use and narrow catch` —— P0 安全修复，阻止 write-scoped 插件越权 fork/link 其他插件会话读取全量 transcript。
- **Anthropic OAuth 提前刷新**：[#113395](https://github.com/openclaw/openclaw/pull/113395) `fix(auth): refresh Anthropic OAuth tokens inside the pre-expiry margin window` —— 关闭 [#103846](https://github.com/openclaw/openclaw/issues/103846)，避免 token 在 5 分钟刷新窗内因意外中断而未被刷新。

整体看，项目在 **会话安全、Provider 兼容性、网关写入原子性** 三个方向上向前推进了显著一步。

---

## 4. 社区热点（评论数最多）

| 排名 | Issue | 评论 | 👍 | 概要 |
|---|---|---|---|---|
| 1 | [#102020](https://github.com/openclaw/openclaw/issues/102020) | 16 | 1 | 跨通道、位置依赖的"reply session initialization conflicted"（同一 session 第二条消息失败） |
| 2 | [#86996](https://github.com/openclaw/openclaw/issues/86996) | 14 | 2 | Active Memory + Codex app-server 组合下的延迟、hook 超时、启动中止 |
| 3 | [#94228](https://github.com/openclaw/openclaw/issues/94228) | 14 | 2 | Native Anthropic 路径下重放历史 `thinking` blocks 导致工具线程彻底 brick（400 Invalid signature） |
| 4 | [#92043](https://github.com/openclaw/openclaw/issues/92043) | 13 | 3 | 180s 单次墙钟压缩超时对合法长压缩的"反复死刑"（`#91361` 副作用） |
| 5 | [#107220](https://github.com/openclaw/openclaw/issues/107220) | 10 | 1 | 2026.7.1 gateway 启动 crash-loop（已关闭，legacy memory sidecar 冲突处理不一致） |
| 6 | [#110950](https://github.com/openclaw/openclaw/issues/110950) | 10 | 2 | "Everything is a cron"——将 heartbeat/watchers/cron 统一为同一原语（已关闭） |
| 7 | [#67419](https://github.com/openclaw/openclaw/issues/67419) | 10 | 2 | Bootstrap 文件每轮重新注入，浪费 20-30% tokens |
| 8 | [#7722](https://github.com/openclaw/openclaw/issues/7722) | 10 | 4 | Filesystem Sandboxing Config（`tools.fileAccess`） |
| 9 | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 10 | 3 | OpenRouter 等高变动 Provider 的全动态模型发现 |
| 10 | [#47975](https://github.com/openclaw/openclaw/issues/47975) | 10 | 1 | 子 agent 会话在完成后仍持久化，主会话失响应 |

**诉求分析**：Top 10 中有 8 条与 **会话/恢复机制可靠性** 强相关，社区对"会话卡死后无法干净恢复"已形成共识；`thinking` block 重放问题、压缩超时、跨通道回复冲突三者共同指向**长上下文+长生命周期 agent 的状态管理**，是当前最迫切的痛点。

---

## 5. Bug 与稳定性

### P0 / 严重回归
| Issue | 描述 | 状态 |
|---|---|---|
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | 2026.7.1 启动 crash-loop（legacy memory `meta`/`chunks` 冲突致命化 vs `files` 自动解决） | **已关闭**（fix 已发布） |
| [#90378](https://github.com/openclaw/openclaw/issues/90378) | 5.28 → 6.1 cron 静默迁移 SQLite 后新作业默认 `delivery.mode=announce` 触发通道错误 | OPEN，已有 linked PR |

### P1（按主题归类）
**会话/恢复**
- [#102020](https://github.com/openclaw/openclaw/issues/102020) 第二条消息"reply session initialization conflicted"——**无 fix PR**
- [#86996](https://github.com/openclaw/openclaw/issues/86996) Active Memory+Codex 路径全面劣化（latency/hook/启动/gateway stall）——**无 fix PR**
- [#94228](https://github.com/openclaw/openclaw/openclaw/issues/94228) Anthropic `thinking` block 重放 brick 线程——已有 linked PR（[#94228 链接 PR](#)）
- [#47975](https://github.com/openclaw/openclaw/issues/47975) 子 agent 持久化导致主会话无响应——**无 fix PR**
- [#91564](https://github.com/openclaw/openclaw/issues/91564) Telegram forum topic 永久黑洞（恢复后未触发 `Inbound message`）——**无 fix PR**
- [#92043](https://github.com/openclaw/openclaw/issues/92043) 180s 压缩超时无部分复用——**无 fix PR**

**Provider 兼容**
- [#94251](https://github.com/openclaw/openclaw/issues/94251) Ollama 远程 provider 流式不被消费——已有 linked PR
- [#53540](https://github.com/openclaw/openclaw/issues/53540) 大参数工具调用导致"Network connection lost"——**无 fix PR**
- [#95840](https://github.com/openclaw/openclaw/issues/95840) `contextPruning cache-ttl` 在 OpenAI 模型上永不触发——**无 fix PR**
- [#106786](https://github.com/openclaw/openclaw/issues/106786) `gpt-5.6-*` 在 ChatGPT-OAuth 路由上静默回退——**无 fix PR**
- [#45494](https://github.com/openclaw/openclaw/issues/45494) Cron 在 LLM 持续 5xx 时不快速失败——**无 fix PR**

**数据/安全**
- [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore 缺端到端崩溃/身份保证——✅ fix PR [#113459](https://github.com/openclaw/openclaw/pull/113459) 今日就绪
- [#94536](https://github.com/openclaw/openclaw/issues/94536) PR #92231 修复仍漏案例（commitment `sent` 但未投递）——**无 fix PR**
- [#45573](https://github.com/openclaw/openclaw/issues/45573) 群聊会话未持久化（166+ 消息只记录 1 session）——**无 fix PR**
- [#51049](https

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告周期：** 2026-07-24 至 2026-07-25
**监测项目：** 11 个（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）

---

## 1. 生态全景

当下个人 AI 助手/自主智能体开源生态呈现 **"头部高强度收敛 + 尾部急速分层"** 的并存格局：OpenClaw、IronClaw、ZeroClaw、LobsterAI 四巨头维持日均 30+ Issues / 50 PR 量级的高速迭代，CoPaw 与 Hermes Agent 处于次高位活跃，半数项目（PicoClaw、NanoClaw、Moltis、ZeptoClaw）已进入"单点维护 / 定向打磨"节奏，而 NullClaw、TinyClaw 已陷入静默。今日共 2 个版本发布（LobsterAI 2026.7.23、CoPaw v2.0.1+v2.0.1-beta.3），新功能交付与回归修复呈双线并行。**社区核心痛点已从"能不能跑通"转向"长会话可靠性、跨渠道投递一致性、Provider 兼容性"**——这标志着生态正从 PoC 阶段向生产可用的成熟期过渡。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 版本发布 | 合并/关闭 | 健康度 | 备注 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 463 (355 活跃/108 关闭) | 500 (203 待合并/297 合闭) | ❌ | 297 | ⭐⭐⭐⭐⭐ | 极高活跃，2026.7.2-beta.5 QA 中 |
| **IronClaw** | 32 (活跃/关闭) | 50 | ❌ | 19 | ⭐⭐⭐⭐ | v1 发布临界点，渠道 P1 阻塞 |
| **ZeroClaw** | 47 | 50 | ❌ | 10 | ⭐⭐⭐⭐⭐ | v0.8.3→v0.9.0 治理强化期 |
| **LobsterAI** | 19 (全 stale 复活) | 50 | ✅ **2026.7.23** | 43 | ⭐⭐⭐⭐ | 功能交付强，Issue 治理弱 |
| **CoPaw (QwenPaw)** | 50 (28 新/22 关闭) | 36 | ✅ **v2.0.1 + v2.0.1-beta.3** | 14 | ⭐⭐⭐ | v2 升级回归反馈汇集 |
| **Hermes Agent** | 50 (32 新/18 关闭) | 50 (42 待合并/8 关闭) | ❌ | 8 | ⭐⭐⭐⭐ | TTS 子系统集中修复 |
| **NanoBot** | 4 | 24 | ❌ (v0.3.0 准备中) | 20 | ⭐⭐⭐⭐ | v0.3.0 发版冲刺 |
| **NanoClaw** | 0 | 7 | ❌ | 1 | ⭐⭐ | 评审瓶颈，5 日级 PR 滞留 |
| **Moltis** | 0 | 2 | ❌ | 0 | ⭐⭐⭐ | Slack 通道专项 PR 待审 |
| **ZeptoClaw** | 2 | 2 | ❌ | 1 | ⭐⭐ | 单一维护者（qhkm）单点风险 |
| **PicoClaw** | 1 | 1 (+7 stale 关) | ❌ | 1 | ⭐⭐ | 平稳偏静，stale 清理 |
| **NullClaw** | 0 | 0 | ❌ | 0 | ⚪ | 完全静默 |
| **TinyClaw** | 0 | 0 | ❌ | 0 | ⚪ | 完全静默 |

**关键观察：** 头部 4 个项目承担了全生态约 75% 的 Issue 流量与 78% 的 PR 流量；NullClaw/TinyClaw 已事实性停摆。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势对比

| 维度 | OpenClaw | 同类最强对手 | 差异 |
|---|---|---|---|
| 日活 Issue 量 | **463** | IronClaw 32, ZeroClaw 47 | **量级碾压**（10x+） |
| 日合并 PR | **297** | LobsterAI 43, IronClaw 19 | 5-7x 吞吐量 |
| 合并/关闭比 | **1.46** | LobsterAI 6.1, ZeroClaw 0.25 | 健康合理（不高不低） |
| 维护者团队 | 多元 PR 作者 | LobsterAI 集中 | 社区分散度更优 |
| Release 节奏 | 2026.7.2-beta.5 验证 | ZeroClaw v0.8.3 稳定 | 接近 GA 节奏 |

### 3.2 技术路线差异

- **OpenClaw**：综合型全功能 agent runtime，强调"会话安全 + Provider 兼容 + 网关写入原子性"三线并进，已沉淀相对完整的 RFC-治理-P0 修复-P1 清理成熟工作流。
- **IronClaw**：聚焦 v1 发布冲刺，错误可恢复性契约（#6284 Epic）成为价值主张，量化评测先行（#6664 能力覆盖率按"结果"计）。
- **ZeroClaw**：以 RFC 治理 + CODEOWNERS + risk 标签为差异化护城河，向"严肃基础设施"演进。
- **LobsterAI**：商业化产品级（网易有道），构建链 + 协作渲染是护城河，但 Issue 治理积压严重。
- **CoPaw**：阿里 agentscope 生态的 PawApp 平台战略，PawApp SDK + Kanban 开箱即用是其差异化。

### 3.3 社区规模

OpenClaw 在 Top10 社区热点 Issue 中有 8 条与**会话/恢复可靠性**直接相关，社区对"长上下文+长生命周期 agent 状态管理"已形成共识——这是其他项目尚未充分触及的领域，也是 OpenClaw 真正领先的技术深水区。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 核心诉求 |
|---|---|---|
| **🔴 会话/恢复可靠性** | OpenClaw（#102020/#86996/#94228/#47975）、NanoClaw（#3126）、LobsterAI（#1849） | 长生命周期 agent 状态管理、压缩超时、fork 越权防御 |
| **🟠 Slack/Telegram 渠道投递语义** | IronClaw（#6645/#6644/#6643）、Moltis（#1165/#1166）、ZeroClaw（#9198/#9315） | "报告成功但实际未送达"是跨平台系统性问题 |
| **🟠 Provider 兼容矩阵** | OpenClaw（#94251/#53540/#95840/#106786）、NanoBot（#4867）、ZeroClaw（#9335/#9338） | OpenAI/Ollama/ChatGPT-OAuth 全动态发现与降级 |
| **🟠 Shell 沙箱与凭据隔离** | ZeroClaw（#9247/#9328）、ZeptoClaw（#645）、OpenClaw（#103148） | Workspace 边界绕过、子代理凭据泄漏、subprocess secrets |
| **🟡 MCP 集成稳定性** | CoPaw（#2999/#6405）、NanoClaw（#3124）、OpenClaw、Moltis | 工具命名空间冲突、server 不可用可见性、Cancel 错误 |
| **🟡 流式输出（跨渠道）** | ZeptoClaw（#648）、Moltis（#1165/#1166）、PicoClaw（#3201）、OpenClaw | Telegram/QQ/Slack 流式成为标配需求 |
| **🟡 Windows 编码与本地化** | Hermes Agent（#68369/#51691/#65123/#38119）、IronClaw（#9290） | UTF-8 BOM、GBK/cp1252、HubLockFile 读取引擎 |
| **🟡 WebUI 渲染性能** | OpenClaw（#113450）、NanoBot（#4696/#4963）、CoPaw（#6307）、IronClaw（#6628-#6631） | 流式 Markdown 平滑呈现、SSE 重复解析、Code 分割 |
| **🟢 Agent 自主性** | NanoBot（#5074/#5075）、OpenClaw、CoPaw（#6455） | 子代理行内协商、授权任务直通验证、多模型并行 |

**信号：** 这 9 个方向中前 5 个均属于"生产可用性"问题——表明生态已普遍越过"创新功能"阶段，进入"打磨质量"阶段。

---

## 5. 差异化定位分析

| 项目 | 技术栈 | 目标用户 | 核心差异化 | 规模分层 |
|---|---|---|---|---|
| **OpenClaw** | 多语言 | 全栈开发者 | 综合型 agent runtime + 强会话安全 | 旗舰级 |
| **IronClaw** | Rust | 企业 / 严肃工程 | 可信度量 + 错误可恢复性契约 | 旗舰级 |
| **ZeroClaw** | Rust | 治理成熟团队 | RFC 流程 + 强审计 + WASM 插件 | 旗舰级 |
| **LobsterAI** | Electron | 商业化产品用户 | 桌面端 + Cowork 协作 + Windows 链 | 旗舰级 |
| **CoPaw (QwenPaw)** | 多语言 | 阿里生态用户 | PawApp 平台 + agentscope 集成 | 中型 |
| **Hermes Agent** | Python | 桌面端用户 | TTS/语音 + Windows 桌面 | 中型 |
| **NanoBot** | Python | 移动/WebUI 用户 | 轻量级 + WebUI 视觉一致性 | 小型-中型 |
| **Moltis** | 多语言 | Slack 重度用户 | Slack 通道深度优化 | 小型 |
| **PicoClaw** | Go | 嵌入式/IoT | 紧凑二进制 + 跨渠道 | 小型 |
| **NanoClaw** | 多语言 | 团队级部署 | 时区粒度 + 简洁 agent | 小型 |
| **ZeptoClaw** | Rust | 极简开发者 | 单二进制 + 渠道流式 | 极小（高风险） |

**架构关键差异：**
- **OpenClaw/ZeroClaw/CoPaw** 走"大而全"路线（核心引擎 + 插件生态 + RFC 治理）
- **IronClaw** 走"严密契约"路线（错误可恢复性 + 能力覆盖率证据化）
- **NanoBot/Moltis/PicoClaw** 走"小而精"路线（聚焦单一渠道或单一 UI）
- **ZeptoClaw** 走"单兵作战"路线（⚠️ 已出现 Bus Factor 风险）

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代阶段（High-velocity）
- **OpenClaw**、**IronClaw**、**ZeroClaw**、**LobsterAI**
- 特征：日 30+ Issues + 50 PRs、新功能密集、版本/beta 滚动
- 风险：合并压力下的回归面、Issue 治理积压（LobsterAI 19 条全部 stale 复活）

### 🟡 质量巩固阶段（Consolidation）
- **Hermes Agent**、**NanoBot**、**CoPaw**
- 特征：进入子系统深度修复（TTS、桌面端、WebUI），开始为下个里程碑做收尾
- 风险：v2.0 升级信任受损（CoPaw #5980/#6307）

### 🟠 单点维护阶段（Single-maintainer）
- **Moltis**、**ZeptoClaw**、**PicoClaw**、**NanoClaw**
- 特征：单一作者或小团队，专项 PR 集中，外部社区参与度低
- 风险：评审瓶颈（NanoClaw 5 日级 PR）、Bus Factor（ZeptoClaw 100% 由 qhkm 维护）

### 🔴 静默阶段（Stalled）
- **NullClaw**、**TinyClaw**
- 特征：连续 24 小时 0 活动
- 处置建议：归档或重启

**成熟度梯队：** OpenClaw ≈ IronClaw ≈ ZeroClaw > LobsterAI > CoPaw > Hermes Agent > NanoBot > NanoClaw > Moltis ≈ PicoClaw > ZeptoClaw > NullClaw ≈ TinyClaw

---

## 7. 值得关注的趋势信号

### 7.1 行业趋势

1. **"会话状态管理" 成为 P0 战场**
   OpenClaw Top 10 议题中 8 条与之相关，跨项目普遍出现"长上下文+长生命周期"问题。**Agent 状态管理是下一代基础设施的核心命题**，传统 web 应用的 session 模型已不适用。

2. **"可信度量" 从口号走向工程化**
   IronClaw #6664（能力覆盖率按"结果"而非"能力"计数）、Hermes Agent #67343（确定性评测 harness）、ZeroClaw #6808（work lanes RFC）共同指向——**评测基础设施成为产品成熟度的硬指标**。

3. **"渠道投递语义" 暴露系统级缺陷**
   IronClaw #6645（Slack 报告成功但 DM 未送达）、Moltis #1166（premature-ack）、ZeroClaw #9198（Discord typing 卡死）——**"报告成功但实际失败"是当前最危险的可靠性问题**，因为它直接侵蚀用户对 agent 的信任。

4. **"Windows/编码工程" 成为必答题**
   Hermes Agent 7/15 未关闭 Bug 与 Windows 编码强相关、IronClaw #9290 Windows 安装包崩溃——**跨平台工程化是真正的护城河**，仅支持 Mac/Linux 的项目正在被边缘化。

5. **"Agent 自主性" 从"允许"走向"默认"**
   NanoBot #5075（授权任务直通验证）、OpenClaw subagent 演进、CoPaw #6455

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-25

## 1. 今日速览

NanoBot 仓库在最近 24 小时呈现出 **极高活跃度**：合计 4 条 Issue 更新、24 条 PR 更新，无新版本发布。其中 20 条 PR 已被合并/关闭，4 条仍待处理，最值得关注的是 [PR #5081](https://github.com/HKUDS/nanobot/pull/5081) 正在为 **v0.3.0** 做发布准备，标志项目即将进入下一里程碑。Issue 侧 2 闭 2 开，Agent 与 WebUI 双线并进，整体节奏明显呈现"为发版冲刺"的态势。

## 2. 版本发布

**今日无新版本发布**，但 [PR #5081 (chore(release): prepare v0.3.0)](https://github.com/HKUDS/nanobot/pull/5081) 已开启。该 PR 计划：
- 将包版本与源码 fallback 版本从 `0.2.2` 升至 `0.3.0`
- 修复 composer 模型徽章在自适应宽度下的固定 92px 槽位问题
- 保留长按预设切换器的不可见尺寸副车

**迁移注意事项**：根据 [PR #5053](https://github.com/HKUDS/nanobot/pull/5053) 的上下文，v0.2.3 将作为最后一个包含旧 `maxMessages` 清理与旧 channel 入口点警告的版本；警告与迁移窗口将在 v0.2.4 移除。v0.3.0 预计将带来 Agent 行为（子代理行内协商、授权任务直通验证）与 WebUI 视觉体系（SVG 品牌资产、流式 Markdown 平滑呈现）的全面升级。

## 3. 项目进展

今日合并/关闭 20 条 PR，覆盖 **Agent 能力、Provider 兼容、WebUI 体验、品牌资产** 四大方向：

**Agent 内核增强**
- [#5074 feat(agent): support inline subagent consultation](https://github.com/HKUDS/nanobot/pull/5074) — `spawn` 工具新增 `wait` 参数，支持行内子代理协商、返回结果直通
- [#5075 feat(agent): carry authorized tasks through verification](https://github.com/HKUDS/nanobot/pull/5075) — 将明确用户请求视为授权，编码与产物类任务直通实现与验证，仅对不可逆操作保留确认
- [#5049 fix(agent): deliver non-streamed finalization responses](https://github.com/HKUDS/nanobot/pull/5049) — 修复流式通道对非流式最终响应包的丢弃缺陷

**Provider 兼容与修复**
- [#5073 fix(providers): preserve multimodal tool outputs](https://github.com/HKUDS/nanobot/pull/5073) — 保留 OpenAI Responses 工具输出中的文本/图片/文件块，避免 base64 被序列化为惰性 JSON
- [#4567 fix(weixin): stream LLM calls + buffer reply delivery](https://github.com/HKUDS/nanobot/pull/4567) — 补齐 WeChat `streaming` 配置字段并缓冲回复以规避 relay bug
- [#5050 feat(xai): surface hosted X Search activity](https://github.com/HKUDS/nanobot/pull/5050) — 将 xAI Responses SSE 中的 `x_search` 生命周期事件结构化为 agent activity

**WebUI 体验打磨**
- [#5078 feat: launch first-time setup in webui](https://github.com/HKUDS/nanobot/pull/5078) — 桌面安装器直接启动本地 WebUI 取代终端 onboarding，TTY/无头环境保留旧路径
- [#5077 feat(webui): switch model presets from the composer](https://github.com/HKUDS/nanobot/pull/5077) — composer 内长按竖滑循环切换预设，移动端 dock 风格动效
- [#5076 fix(webui): honor custom gateway port with Vite](https://github.com/HKUDS/nanobot/pull/5076) — 通过 gateway 提供的 WebSocket URL 保留自定义端口
- [#5071 fix(webui): show quoted context after follow-up send](https://github.com/HKUDS/nanobot/pull/5071) — 用专用引用标记保留选中助手文本为引用上下文
- [#5060 fix(webui): polish responsive layouts and settings search](https://github.com/HKUDS/nanobot/pull/5060) — 移动端设置改用紧凑选择器，保留桌面导航
- [#5031 fix(webui): avoid mobile welcome composer overlap](https://github.com/HKUDS/nanobot/pull/5031) — 修复移动端欢迎页 heading 与 composer 重叠
- [#4963 feat(webui): polish agent output and app discovery](https://github.com/HKUDS/nanobot/pull/4963) — 统一工具日志为单行活动语言，迁移流式答案至 Streamdown

**品牌资产 SVG 化**
- [#5080 feat(brand): migrate README and WebUI assets to SVG](https://github.com/HKUDS/nanobot/pull/5080) — README/WebUI 切到对齐的 SVG，移除 PNG 资源
- [#5079 Add nanobot logo (SVG)](https://github.com/HKUDS/nanobot/pull/5079) — 新增 `images/nanobot_logo.svg` (~5KB)

**维护性变更**
- [#5072 Revert "fix: preserve pending message runtime context"](https://github.com/HKUDS/nanobot/pull/5072) — 因 #4665 基于 pre-`RuntimeContextProvider` 架构实现被回退
- [#5053 chore: pin migration TODOs to v0.2.4](https://github.com/HKUDS/nanobot/pull/5053) — 将清理 TODO 钉到 v0.2.4

整体而言，项目在 **Agent 自主性、多模态兼容、WebUI 视觉一致性** 三个维度均有实质性推进。

## 4. 社区热点

[#4867 — Preserve exact prompt prefix to enable caching in Ollama](https://github.com/HKUDS/nanobot/issues/4867) 是今日当之无愧的讨论焦点：**23 条评论**，由 The-Markitecht 提出。核心诉求：每次调用 Ollama 本地模型（32GB VRAM）时，Nanobot 都会额外增加 60 秒延迟，"完全不可用"。用户希望保留精确的 prompt 前缀以启用 prompt cache。该 Issue 已于今日 **关闭**。

其他较活跃的讨论：
- [#4637 Telegram long message splits](https://github.com/HKUDS/nanobot/issues/4637) — 4 条评论，反映长 Markdown 消息在 Telegram 分段时除尾段外的中间段落无法正确渲染，已关闭
- [#4858 Refactor dynamic tool provider lifecycle out of AgentLoop](https://github.com/HKUDS/nanobot/issues/4858) — 2 条评论，提议将 MCP-specific 生命周期从 AgentLoop 抽象出通用 dynamic tool provider 框架，仍 OPEN

背后共性诉求：**本地/低成本模型路径的可玩性**（Ollama 缓存）、**长内容多通道的完整性**（Telegram 分段）、**架构解耦以适配新 provider**（MCP 抽象）。

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#4064](https://github.com/HKUDS/nanobot/issues/4064) | pending mid-turn 消息注入到 active run 时丢失 sender/channel/chat runtime 上下文 | OPEN（自 2026-05-29，1 👍，1 评论），原修复 #4665 已被 [#5072](https://github.com/HKUDS/nanobot/pull/5072) 回退，**需重新基于 `RuntimeContextProvider` 架构实现** |
| 🟠 中 | [#4858](https://github.com/HKUDS/nanobot/issues/4858) | MCP-specific 状态/生命周期泄漏到 `AgentLoop`，存在架构回归风险 | OPEN |
| 🟡 低-中 | [#5049](https://github.com/HKUDS/nanobot/pull/5049) | 流式通道丢弃非流式最终响应包（源于 #2365 的抑制机制与 #2 之后空响应恢复的交互） | 已合并 ✅ |
| 🟡 低 | [#5073](https://github.com/HKUDS/nanobot/pull/5073) | OpenAI Responses 多模态工具输出被 base64→JSON 退化 | 已合并 ✅ |
| 🟡 低 | [#4567](https://github.com/HKUDS/nanobot/pull/4567) | WeChat 通道因 `streaming` 字段被 pydantic 静默丢弃，被迫走非流式 + relay bug | 已合并 ✅ |
| ⚪ 已回退 | [#5072](https://github.com/HKUDS/nanobot/pull/5072) | #4665 修复因架构不匹配被回退 | 已合并（revert）|

**结论**：核心崩溃/数据丢失级 bug 已全部修复合入；遗留 #4064 仍待基于新架构重做修复，是当前 stability backlog 的头号风险。

## 6. 功能请求与路线图信号

正在排队的功能请求与开放 PR：

1. **Globalping MCP 预设** — [#4383](https://github.com/HKUDS/nanobot/pull/4383)（OPEN，自 2026-06-17）由 flxxyz 提出，将全球分布式网络测量平台 Globalping 加入内置 MCP 预设，存在合并冲突需解决，**有较大概率进入下一版本**
2. **WebUI 流式 Markdown 平滑呈现** — [#4696](https://github.com/HKUDS/nanobot/pull/4696)（OPEN）通过 rAF 缓冲调度、阅读速度 + 积压压力追速 + 标点停顿，配合左→右渐显动画，**契合 v0.3.0 视觉升级方向**
3. **动态工具提供者生命周期抽象** — [#4858](https://github.com/HKUDS/nanobot/issues/4858)（OPEN）将 MCP-specific 代码剥离 `AgentLoop`，为后续接入新 provider（如远程工具网关）铺路，**属于架构性长线投入**

**信号**：v0.3.0 路线图明显以 **Agent 自主性 + WebUI 视觉一致性 + Provider 多样化** 为三大支柱，#4383 / #4696 / #4858 均与之一致或互补，存在被纳入 v0.3.0 或紧随其后的 v0.3.x 点版本的可能。

## 7. 用户反馈摘要

来自真实 Issue 评论的痛点提炼：

- **本地模型延迟"完全不可用"**（[#4867](https://github.com/HKUDS/nanobot/issues/4867)）：32GB VRAM + Ollama 的用户反馈每个 turn 额外 +60s，与同模型非 Nanobot 调用对比"流畅"差距悬殊。**这意味着"启用 prompt cache"对本地/低成本部署路径是生死攸关的体验问题**
- **Telegram 长消息分段渲染失败**（[#4637](https://github.com/HKUDS/nanobot/issues/4637)）：除尾段外的中间段无法正确渲染 Markdown，影响 Telegram 通道信息密度
- **MCP 在 AgentLoop 中耦合**（[#4858](https://github.com/HKUDS/nanobot/issues/4858)）：维护者自陈架构泄露将限制未来接入新 provider

**正向信号**：PR #5078（WebUI 首次设置）、#5077（composer 切预设）、#4963（活动语言统一）的合并表明维护团队对"降低首次使用摩擦 + 提升可发现性"的反馈已有实质性响应。

## 8. 待处理积压

提醒维护者重点关注的长期未结项：

| 编号 | 标题 | 创建日期 | 状态 |
|---|---|---|---|
| [#4064](https://github.com/HKUDS/nanobot/issues/4064) | Bug: pending mid-turn messages lose runtime context | 2026-05-29 | OPEN 已近

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-25

## 1. 今日速览

Hermes Agent 仓库今日继续保持高活跃度：过去 24 小时有 50 条 Issue 变动（32 条活跃/新开，18 条关闭）与 50 条 PR 变动（42 条待合并，8 条已关闭）。无新版本发布，但代码层面有明显进展——尤其是 TTS（文本转语音）子系统集中合入了 4 条修复 PR，CLI/配置管理层涌现出大量"小而精"的人机工程改进 PR。Windows 平台与 UTF-8 编码相关 Bug 仍是今日 Issue 关闭潮的主要构成，整体呈现"集中修复 + 持续堆积"的并行节奏。项目健康度评估：**活跃度良好，编码/会话稳定性问题仍是首要技术债**。

---

## 2. 版本发布

今日无新版本发布。最近一次桌面端正式版本为 **v0.19.0**（被 Issue #68474 关联提及），该版本在 Windows 上触发了 `state.db` 被清零的严重回归（详见下文 Bug 部分）。

---

## 3. 项目进展

### 已合并/关闭的重要 PR（8 条）

**TTS/语音子系统集中修复（4 条全部关闭）**，作者均为 `beardedeagle`，集中在 2026-07-24 当天合并：

- [#70535](https://github.com/NousResearch/hermes-agent/pull/70535) `fix(tts): batch synchronous provider playback` — 同步 TTS provider 走整批回放路径，避免合成断片
- [#70601](https://github.com/NousResearch/hermes-agent/pull/70601) `fix(voice): serialize batch TTS playback to prevent audio overlap` — 单一 worker 线程串行播放，杜绝多段音频叠加
- [#70851](https://github.com/NousResearch/hermes-agent/pull/70851) `fix(tts): carry leftover bytes for misaligned PCM streaming chunks` — 修复 OpenAI PCM 流式 int16 帧未对齐崩溃
- [#70497](https://github.com/NousResearch/hermes-agent/pull/70497) `fix(cli): prevent duplicate TTS response rendering` — 关闭重复渲染回调

**其他关闭的 PR：**

- [#70586](https://github.com/NousResearch/hermes-agent/issues/70586)（关联 PR 关闭）— Desktop 重新打开含 `async_delegation_complete` 消息的 session 时 TypeError，已修复
- [#69559](https://github.com/NousResearch/hermes-agent/issues/69559) — Agent 在工具调用完成后无限挂起（跨 3 家 provider 复现），已关闭

### 总体推进判断

- **TTS 子系统**短期内集中清掉了 4 个 bug，说明维护团队对用户体验侧问题响应迅速
- **会话状态/重载**相关（`async_delegation_complete`、steer metadata、Cyrillic 搜索）正在被系统性修补
- **Config 体验**（`config show` 隐藏字段、dotted key 解析、`config edit` 无编辑器提示）出现一波"小修小补"，是正面信号但也暴露配置层长期缺乏完整审计

---

## 4. 社区热点

按评论数排序的当日讨论焦点：

| 排名 | Issue | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) | Desktop boot fails on 15s readiness timeout | 6 | 0 |
| 2 | [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) | Windows bootstrap installer unsigned Hermes.exe blocked | 5 | 1 |
| 3 | [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) | state.db zeroed during v0.19.0 update on Windows | 5 | 0 |
| 4 | [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) | Feature: MCP Smart Loading (umbrella) | 4 | 0 |
| 5 | [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) | memory_tool _read_file BOM 未剥离 | 3 | 0 |
| 6 | [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) | Desktop gateway reachability check 失败 | 3 | 0 |
| 7 | [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) | Non-UTF-8 MEMORY.md uncaught UnicodeDecodeError | 3 | 0 |

**诉求分析：**

1. **Windows 桌面端稳定性**是绝对焦点，前 3 名 Issue 全部命中 Windows Desktop 安装/升级路径
2. **MCP 启动策略**（#66473）社区已联署多次讨论，要求懒加载、按预算分配工具、按 session 隔离
3. **编码鲁棒性**——同一根因（`read_text()` 无显式 `errors`/BOM 处理）触发了至少 6 条独立 Issue，社区对"沉默失败"表达强烈不满（参见 #10878、#10879、#57754、#53833、#65123、#51691）
4. **#50210 收获唯一点赞**——签名缺失导致 Smart App Control 拦截是企业部署真痛点

---

## 5. Bug 与稳定性

按严重程度排列，今日影响最大的 Bug：

### 🔴 P1 — 升级灾难性数据丢失
- [#68474](https://github.com/NousResearch/hermes-agent/issues/68474) **state.db 被全零覆盖（95MB null bytes）**：v0.19.0 升级过程中 SQLite session 数据库被完全清零，**95MB 用户会话数据无法恢复**。即便存在 pre-update snapshot，用户历史会话仍遭不可逆破坏。**无对应修复 PR**，需立即关注。
- [#50210](https://github.com/NousResearch/hermes-agent/issues/50210) **Windows bootstrap 产出的 Hermes.exe 未签名**：Smart App Control / Code Integrity 直接拦截，企业用户无法部署。**无修复 PR**。

### 🟠 P2 — 桌面/CLI 启动与可达性
- [#60144](https://github.com/NousResearch/hermes-agent/issues/60144) Desktop 在 7 个 MCP server + 21 个 platform adapter 场景下超过 15s readiness 超时即崩溃（**已关闭**，应已修）
- [#69230](https://github.com/NousResearch/hermes-agent/issues/69230) Desktop Settings → Gateway Remote 探测误报"无法连通"，但 curl/浏览器正常（**OPEN**，needs-repro）
- [#10878](https://github.com/NousResearch/hermes-agent/issues/10878) `memory_tool._read_file` 不剥离 BOM，导致 `\ufeff` 进入 system prompt（**OPEN**）
- [#10879](https://github.com/NousResearch/hermes-agent/issues/10879) 非 UTF-8 MEMORY.md 直接抛 uncaught UnicodeDecodeError → agent 以"空记忆"启动（**已关闭**，但 #53833 / #57754 等同类未关闭）
- [#68369](https://github.com/NousResearch/hermes-agent/issues/68369) 中文 Windows 下 `hermes skills check` 因 `HubLockFile.load()` 用 `read_text()` 默认 GBK 崩溃（**已关闭**）
- [#51691](https://github.com/NousResearch/hermes-agent/issues/51691) `skill_view` 在 Windows Desktop 中文环境全量失败（**已关闭**）
- [#65123](https://github.com/NousResearch/hermes-agent/issues/65123) `.env` 含 UTF-8 BOM 时**首 key 静默丢失**，无任何告警（**已关闭**）
- [#38119](https://github.com/NousResearch/hermes-agent/issues/38119) Copilot ACP fs shim 缺显式 UTF-8 编码（**已关闭**）
- [#48428](https://github.com/NousResearch/hermes-agent/issues/48428) kimi-coding 触发 httpx brotli 流式解码 bug（**OPEN**）

### 🟡 P3 — 体验性回归
- [#42785](https://github.com/NousResearch/hermes-agent/issues/42785) cron `no_agent` stdout 在 Windows cp1252 下乱码（**已关闭**）
- [#42384](https://github.com/NousResearch/hermes-agent/issues/42384) cron stdout 含 emoji 在 pythonw 下整段被丢（**OPEN**）
- [#49451](https://github.com/NousResearch/hermes-agent/issues/49451) `read_file` 为每个换行结尾文件多显示一行空行（**OPEN**）
- [#62849](https://github.com/NousResearch/hermes-agent/issues/62849) Dockerfile 不兼容 Podman/Buildah（**OPEN**）
- [#38414](https://github.com/NousResearch/hermes-agent/issues/38414) `install.sh` 不校验 Node.js 架构（x86_64 误装到 ARM64，**OPEN**）
- [#71026](https://github.com/NousResearch/hermes-agent/issues/71026) `/insights` 因字符串减 int 抛 TypeError（**OPEN**）
- [#35266](https://github.com/NousResearch/hermes-agent/issues/35266) `hermes status` 对 Z.AI/GLM 漏检 `ZAI_API_KEY`（**OPEN**）
- [#47504](https://github.com/NousResearch/hermes-agent/issues/47504) Profile 命名 dialog 允许大写但不发警告（**OPEN**）
- [#11032](https://github.com/NousResearch/hermes-agent/issues/11032) `SubdirectoryHintTracker` 漏判 `cd backend && ls`（**OPEN**）
- [#47107](https://github.com/NousResearch/hermes-agent/issues/47107) `write_file/patch` 拒绝写自身 `~/.hermes/.env`（**OPEN**）
- [#60313](https://github.com/NousResearch/hermes-agent/issues/60313) `AppData\Local\hermes\config.yaml` 与 `~/.hermes/config.yaml` 双源导致 MCP OAuth 配置静默失效（**OPEN**）

**Bug 模式总结：** 7/15 个未关闭 Bug 都与 Windows 编码（GBK/cp1252/BOM）或 Windows Desktop 安装路径直接相关。维护者应优先对 `_read_file` / `read_text` 等高频文件读取入口做一次**集中式编码契约审查**。

---

## 6. 功能请求与路线图信号

### 大型 / 社区关注的功能请求

- [#66473](https://github.com/NousResearch/hermes-agent/issues/66473) **MCP Smart Loading**（伞形 issue，整合 #63626 / #6839 / #45955）—— 启动时按需连接 MCP server、按预算裁剪工具、按 session 隔离作用域、按需触发 server。涉及 `comp/agent` + `tool/mcp` + `area/sessions`，已被标 `innovation`，**已关闭**（但无明显落地 PR，需确认是否被拆分为多 PR 进入路线图）
- [#69128](https://github.com/NousResearch/hermes-agent/issues/69128) **集成 Microsoft Agent Governance Toolkit (AGT)** —— 提案整合 53+ governance 类 issue 作为可选治理插件。**OPEN**，👍1。属于 `needs-decision` 级别战略提案。
- [#26709](https://github.com/NousResearch/hermes-agent/issues/26709) **agents.defaults.skills / gateway.auto_skills**：每 session 自动注入技能，目前缺失此声明机制。**OPEN**。

### 小型功能请求（可能被纳入下个补丁版本）

- [#39173](https://github.com/NousResearch/hermes-agent/issues/39173) Desktop cron 投递目标下拉框硬编码（应改为动态）— **OPEN**

### 与路线图强相关的 PR

- [#60852](https://github.com/NousResearch/hermes-agent/pull/60852) 会话 system prompt 快照去重（SHA-256 哈希表），性能 + 存储空间双优 —— 高价值数据层重构
- [#67343](https://github.com/NousResearch/hermes-agent/pull/67343) `feat(evals): deterministic evaluation harness`（7 suites / 29 scenarios）—— 评测基础设施落地，路线图级别
- [#61646](https://github.com/NousResearch/hermes-agent/pull/61646) Cyrillic 全文检索走 trigram 索引 —— 国际化可观测性补全
- [#61013](https://github.com/NousResearch/hermes-agent/pull/61013) `/steer` steer 元数据持久化 —— 解决 fork/compaction 丢状态

---

## 7. 用户反馈摘要

> 以下提炼自 Issues 评论与摘要中的真实用户表述。

- **数据丢失的恐惧**（#68474）：一位 Windows 用户从 v0.18 升 v0.19.0 后，9950 万字节的会话数据库被全部置零。即便保留 snapshot，"会话连贯性"已永久丢失，信任度受损严重。
- **"静默失败"是头号痛点**：编码异常被 catch 后**无任何日志**，运维侧完全黑盒——`MemoryStore`、`.env` BOM、ACP fs shim 都属此类。用户多次在评论中表达："Agent 没有 memory 但我不知道为什么"。
- **Windows 本土化不足**：中文系统环境下多处默认 GBK/cp1252 解码导致 `skills check`、`skill_view`、`cron` stdout 崩溃。一位用户写道："HubLockFile.load() 的 read_text() 不传 encoding 是中文 Windows 上几乎必踩的雷。"
- **桌面安装链路脆弱**：bootstrap 产物未签名 → Smart App Control 拦截 → 企业用户**根本无法启动**应用。这是唯一获 👍 的 Windows 类 issue，反映阻塞而非抱怨。
- **MCP 启动压力**：开启 7 个 MCP server 即触发 15s readiness 超时，说明默认启动策略对桌面端硬件/IO 不友好。
- **配置体验改善信号**：今日 7 条 `#7112x` 系列 PR 全是配置 UX 改进，反映社区**集中提出"补完 CLI"的诉求**——`config show` 字段不全、dotted key 含点号失败、`config edit` 无编辑器时只

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-07-25

## 📌 今日速览

PicoClaw 今天整体处于**低强度维护节奏**：当日新增 1 个 Open Issue（[#3292](https://github.com/sipeed/picoclaw/issues/3292)）和 1 个 PR（[#3293](https://github.com/sipeed/picoclaw/pull/3293)），后者在创建当日即被关闭，推测已被合入或由维护者直接处理。同时仓库对一批长期无响应的 PR 执行了 stale 清理（7 条 PR 关闭），社区互动量较昨日（24 小时仅 1 条新评论）进一步回落，**健康度判定：🟡 平稳偏静，无重大风险**。

---

## 🚀 版本发布

无新版本发布。本期数据窗口内 Release 数量为 0，建议关注 0.3.x 系列的下一里程碑。

---

## 🛠 项目进展

### 当日新增并已关闭的关键 PR

- **[#3293 merge: fix bug of input box on chat page](https://github.com/sipeed/picoclaw/pull/3293)**（作者：Acdfmwaopuio，2026-07-25 开/关）
  - 直接对应同日新开 Issue [#3292](https://github.com/sipeed/picoclaw/issues/3292) 的"输入框聚焦时 CPU 占用过高"问题
  - 状态闭环迅速，反映维护者对前端性能问题响应及时

### 当日关闭的 stale PR（社区贡献沉淀）

下列 PR 均被标记 `[stale]` 后关闭，属于仓库例行清理，不代表内容被否决，作者可随时 reopen 推进：

| PR | 主题 | 作者 | 类型 |
|---|---|---|---|
| [#3247](https://github.com/sipeed/picoclaw/pull/3247) | feat(i18n): 捷克语新增 `chat.enableCodeWrap/disableCodeWrap` 翻译 | KrtCZ | 本地化 |
| [#3246](https://github.com/sipeed/picoclaw/pull/3246) | fix: 安全与健壮性硬化（MQTT TLS 默认校验、OAuth 超时、bounded search） | corporatepiyush | 安全加固 |
| [#3245](https://github.com/sipeed/picoclaw/pull/3245) | refactor(skills): 单遍 `escapeXML` | corporatepiyush | 重构/性能 |
| [#3244](https://github.com/sipeed/picoclaw/pull/3244) | refactor(seahorse): 摘要 XML 装配减分配 | corporatepiyush | 重构/性能 |
| [#3243](https://github.com/sipeed/picoclaw/pull/3243) | refactor(seahorse): 压缩字符串助手改用 `strings.Builder` | corporatepiyush | 重构/性能 |
| [#323](https://github.com/sipeed/picoclaw/pull/323) | fix(discord): 处理字符限制并维持 typing 状态 | Andyi955 | 渠道修复 |

> 💡 **观察**：[#3246](https://github.com/sipeed/picoclaw/pull/3246) 的 MQTT TLS 默认校验修复具有较高安全价值，建议维护者在 stale 关闭前评估是否可拆分 cherry-pick 合并。

---

## 🔥 社区热点

按当前评论量与时效性排序：

1. **[#2796 历史记录仅显示最后一条用户消息](https://github.com/sipeed/picoclaw/issues/2796)** — 7 条评论，**已关闭**
   - 长期讨论焦点。用户期望"消息压缩"只作用于送入 LLM 的上下文，而非 UI 历史展示
   - 关闭原因带 `[stale]`，未见明确修复 PR 跟进，**实质问题可能仍未解决**

2. **[#3201 Support streaming output for QQ channel](https://github.com/sipeed/picoclaw/issues/3201)** — 4 条评论，**已关闭**
   - QQ 用户对实时逐 token 输出的强烈需求
   - 关闭原因亦为 `[stale]`，功能缺口未补齐

3. **[#3292 聊天界面输入框聚焦时 CPU 占用高](https://github.com/sipeed/picoclaw/issues/3292)** — 新开
   - 报告环境：PicoClaw 0.3.1 / Go 1.26 / Debian / Firefox Web 端
   - 已有 PR [#3293](https://github.com/sipeed/picoclaw/pull/3293) 闭环

**诉求分析**：社区当前最强烈的两类诉求集中在 ① 国产 IM 渠道（QQ）的体验一致性、② 历史会话/前端性能的稳定性。

---

## 🐛 Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🟡 中 | [#3292](https://github.com/sipeed/picoclaw/issues/3292) | Web 聊天界面输入框聚焦时 CPU 高占用（0.3.1 / Firefox） | OPEN | [#3293](https://github.com/sipeed/picoclaw/pull/3293) 已闭环 |
| 🟠 中-高 | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 多轮用户消息在历史记录中只显示最后一条（数据呈现缺陷） | CLOSED (stale)，**疑似未实质修复** | ❌ 无 |

> ⚠️ 建议将 [#2796](https://github.com/sipeed/picoclaw/issues/2796) 重新打开或由维护者出明确结论，否则会被误认为"已修复"。

---

## 💡 功能请求与路线图信号

- **QQ 渠道流式输出**（[#3201](https://github.com/sipeed/picoclaw/issues/3201)）— 通道已具备 `StreamingCapable` 接口设计（Telegram、Pico WebSocket 已实现），补齐 QQ 实现属于相对低成本的功能，预计**有望纳入下一 minor 版本**。
- **zh-TW 繁体中文本地化**（[#3261](https://github.com/sipeed/picoclaw/pull/3261)）— 仍 OPEN，属于纯新增本地化资源，对核心代码无侵入，合并阻力小。
- **捷克语补全**（[#3247](https://github.com/sipeed/picoclaw/pull/3247)）— stale 已关，若社区重启可快速合并。

---

## 💬 用户反馈摘要

- **痛点 1：历史会话数据可靠性** —— 用户在多个会话间切换时，发现历史消息被"压缩/截断"显示，对话的完整上下文丢失。用户明确建议将"压缩"严格限定在模型上下文层面，与 UI 历史展示解耦。
- **痛点 2：Web 前端性能** —— 在 Firefox + Debian 环境下，仅聚焦输入框即触发高 CPU，提示可能存在频繁重渲染或事件循环未节流问题。
- **痛点 3：QQ 体验滞后** —— QQ 渠道至今无流式输出，与 Telegram 形成落差，影响国内用户日常使用感受。
- **满意度信号**：Discord 渠道 PR（[#323](https://github.com/sipeed/picoclaw/pull/323)）虽已 stale 关闭，但反映出社区仍有人在主动完善渠道细节，维护者对贡献者较为友好。

---

## 📦 待处理积压

| 类型 | 编号 | 标题 | 状态 | 风险 |
|---|---|---|---|---|
| PR | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | Add zh-TW locale and Traditional Chinese translations | OPEN (stale 风险) | 🟢 低，本地化资源，合并即可 |
| Issue | [#2796](https://github.com/sipeed/picoclaw/issues/2796) | 历史记录只显示最后一条用户消息 | CLOSED (stale)，**疑似未修** | 🟠 中，建议重新评估 |
| Issue | [#3201](https://github.com/sipeed/picoclaw/issues/3201) | QQ 渠道流式输出 | CLOSED (stale)，**功能未实现** | 🟡 中 |
| PR | [#3246](https://github.com/sipeed/picoclaw/pull/3246) | 安全与健壮性硬化（MQTT TLS 等） | CLOSED (stale) | 🟠 中-高，建议 cherry-pick |

> 📨 **提醒维护者**：本周 stale 清理动作值得肯定，但请重点复核安全相关 PR（[#3246](https://github.com/sipeed/picoclaw/pull/3246)）与高频用户痛点（[#2796](https://github.com/sipeed/picoclaw/issues/2796)），避免因标签导致有效贡献流失。

---

*报告基于 GitHub Issues / Pull Requests 公开数据自动生成，数据快照时间：2026-07-25。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-25

> 数据来源：GitHub (github.com/qwibitai/nanoclaw) | 统计周期：过去 24 小时

---

## 1. 今日速览

NanoClaw 今日进入**纯 PR 驱动的工作日**。在 Issues 端完全静默（0 条新开/活跃/关闭）的情况下，社区贡献依然保持了中等强度的活跃：过去 24 小时内共有 **7 条 PR 流转**，其中 **6 条仍待合并**、**1 条被关闭**（属于误开 PR）。提交者涵盖 **5 位贡献者**，核心团队成员（glifocat、amit-shafnir）贡献了 4 条，外部贡献者（Koshkoshinsk、shixi-li）贡献了 2 条。无新版本发布，项目当前处于**密集打磨与缺陷修复阶段**，未出现明显主线方向调整。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。无版本变更，跳过此节。

---

## 3. 项目进展

### ✅ 已关闭 PR（1 条）
| PR | 标题 | 作者 | 说明 |
|---|---|---|---|
| [#3123](https://github.com/qwibitai/nanoclaw/pull/3123) | Pacific changes. Wrong PR. | iamarunkumark | 作者自述为"错误的 PR"，创建当日即关闭。属于误操作，已被清理。 |

> 💡 **影响评估**：本日实质合并为 0，无主线推进。仓库整体处于"积压待评审"状态。

### 🟡 重要待合并 PR（按主题归类）

**🔧 缺陷修复（5 条）**
| PR | 标题 | 作者 | 涉及模块 |
|---|---|---|---|
| [#3126](https://github.com/qwibitai/nanoclaw/pull/3126) | fix(agent-runner): never deliver silence when a nudged chat turn stays bare | glifocat | agent-runner |
| [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | fix(opencode): main compatibility, custom-endpoint transport, memory parity | glifocat | opencode 兼容性 |
| [#3124](https://github.com/qwibitai/nanoclaw/pull/3124) | fix: report unavailable MCP servers | shixi-li | MCP 集成 |
| [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) | fix(chat): keep typing active for processing turns | amit-shafnir | chat UI |
| [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) | fix(templates): prepend all top-level context Markdown | amit-shafnir | 模板系统 |

**✨ 新功能（1 条）**
| PR | 标题 | 作者 | 功能描述 |
|---|---|---|---|
| [#3125](https://github.com/qwibitai/nanoclaw/pull/3125) | feat: per-agent-group timezone override | Koshkoshinsk | 引入 IANA 时区覆盖机制（migration 020），CLI 命令：`ncl groups config update --timezone <IANA>`，并对接审批门控 |

> 📊 **推进评估**：本日仓库在前沿功能（时区覆盖）与稳定性（agent-runner、chat、opencode、MCP、templates）双向推进，但**缺乏实际合并动作**，节奏偏慢。建议维护者优先评审 #3090、#3093、#3124 这类已提交多日的"老 PR"。

---

## 4. 社区热点

📭 **今日 Issues 端无任何更新**（0 条新开 / 0 条活跃 / 0 条关闭），无法形成传统意义上的 Issues 热点。

**间接热度信号（来自 PR 评论与点赞）**：

- **互动活跃度偏低**：所有 7 条 PR 的 `👍` 数均为 **0**，评论字段均为 **undefined**。意味着目前这些 PR 尚未引发广泛社区讨论。
- **可观察的关注点**：MCP 相关修复（[#3124](https://github.com/qwibitai/nanoclaw/pull/3124)）与 chat 体验修复（[#3093](https://github.com/qwibitai/nanoclaw/pull/3093)）通常最容易引发用户共鸣，未来 24-48 小时可能产生讨论。
- **潜在诉求**：结合 PR 主题，社区当前最迫切的诉求集中在 **"代理运行沉默问题"**（用户希望对话不应被无回应地终结）与 **"MCP 不可用时的可见性"**（用户希望故障透明化）。

> ⚠️ 维护者提示：Issues 端连续静默可能并非真的"无问题"，建议主动在 Discord/Slack 等渠道征集反馈，避免信号丢失。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重级别 | 对应 PR | 问题描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **高** | [#3126](https://github.com/qwibitai/nanoclaw/pull/3126) | agent-runner 在 chat turn 被 nudge 后仍保持空白，导致用户收到"沉默"回复（体验破坏性） | ✅ 已有 fix PR（待合并） |
| 🟠 **中** | [#3124](https://github.com/qwibitai/nanoclaw/pull/3124) | MCP server 不可用时系统未向用户报告（隐性故障，调试困难） | ✅ 已有 fix PR（待合并） |
| 🟠 **中** | [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | opencode 主线兼容性破裂，自定义端点传输层与 memory 行为不一致 | ✅ 已有 fix PR（待合并） |
| 🟡 **低** | [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) | 处理中的 chat turn "typing" 指示器中断，影响交互流畅感 | ✅ 已有 fix PR（待合并） |
| 🟡 **低** | [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) | 模板系统未正确前置顶层 context Markdown，可能导致 prompt 上下文错位 | ✅ 已有 fix PR（待合并） |

> 📈 **整体稳定性观察**：今日的 Bug 全部有对应的 in-flight fix PR，无"裸奔"的开放 Bug。但**全部 5 个 fix 仍 OPEN**，用户实际拿不到补丁。建议维护者按"影响面 × 严重度"建立合并优先级，最高优先为 #3126（用户感知最强）和 #3122（兼容性主线问题）。

---

## 6. 功能请求与路线图信号

由于 Issues 端无活动，本节主要基于 PR 中的 `feat:` 提交来推断路线图方向。

| 信号 | PR | 路线图归属推测 |
|---|---|---|
| 🆕 **per-agent-group 时区覆盖** | [#3125](https://github.com/qwibitai/nanoclaw/pull/3125) | 表明项目正在强化**多 agent 编排能力**与**企业/团队级配置粒度**。CLI 命令 + 审批门控的设计，暗示这属于"管理层"基础设施。 |
| 🆕 **MCP server 不可用时的报告机制** | [#3124](https://github.com/qwibitai/nanoclaw/pull/3124) | MCP 是社区看重的扩展点，透明化失败是关键可靠性功能，建议纳入下个 minor 版本。 |
| 🆕 **opencode 兼容性 / 自定义端点** | [#3122](https://github.com/qwibitai/nanoclaw/pull/3122) | 表明 opencode 集成正在收敛，可能影响"个人/企业部署"分支路线。 |

> 🎯 **进入下个版本的概率排序**：#3125（功能完整，含 migration）> #3124（MCP 稳定性）> #3126（明确 UX 修复）> 其余按维护者排期。

---

## 7. 用户反馈摘要

⚠️ **本周期无 Issues 评论数据可分析**。无法提炼真实用户原声。

**可推测的用户痛点**（基于 PR 标题与描述反推）：

1. **"agent 不回应"** → 来自 #3126 的修复目标，用户期望对话在被 nudge 后必须产出可见结果。
2. **"MCP 静默失败"** → 来自 #3124，用户希望知道哪个 server 挂了、出错原因。
3. **"typing 状态闪烁"** → 来自 #3093，长任务场景下的 UI 反馈可信度问题。
4. **"时区错误"** → 来自 #3125 的动机：用户/团队有跨时区协作需求，全局时区不够灵活。

> 🧭 由于缺少 Issues 一手反馈，**强烈建议运营侧开启月度用户调研**（或整理 Discord/邮件列表中的反馈），以替代稀缺的 Issues 信号。

---

## 8. 待处理积压

**长期未关闭的 PR（≥ 5 日未更新）**：

| PR | 创建日期 | 距今 | 状态 | 风险 |
|---|---|---|---|---|
| [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) | 2026-07-19 | 5 天 | OPEN | 与近期 chat 相关 PR 形成潜在冲突面，需维护者裁决 |
| [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) | 2026-07-19 | 5 天 | OPEN | 模板系统 PR，触及 prompt 上下文链路，评审成本较高 |

**长期未响应 Issue**：
- 📭 无（Issues 端连续静默）

> 🚨 **积压健康度**：总体可控，但已出现"5 日级"的 PR 滞留。考虑到这两条 PR 都来自核心贡献者（amit-shafnir），**维护者侧可能存在评审瓶颈**。建议发起一次专项 triage 会议。

---

## 📌 维护者建议清单（Top 5）

1. 优先合并 [#3126](https://github.com/qwibitai/nanoclaw/pull/3126)（用户感知最强的 UX 修复）。
2. 启动 [#3090](https://github.com/qwibitai/nanoclaw/pull/3090) 与 [#3093](https://github.com/qwibitai/nanoclaw/pull/3093) 的评审闭环，避免核心成员 PR 长期滞留。
3. 评估 [#3125](https://github.com/qwibitai/nanoclaw/pull/3125) 是否作为下个 minor 版本的核心特性。
4. 主动在社区渠道发起"问题征集"，弥补 Issues 端信号缺失。
5. 关闭 [#3123](https://github.com/qwibitai/nanoclaw/pull/3123) 类误开 PR 的提交引导（PR 模板中可增加"是否在正确仓库"的确认项）。

---

*报告生成时间：2026-07-25 · 基于 GitHub 公开数据 · 仅反映过去 24 小时窗口*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-25

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) · 统计周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日延续 v1.0.0 发布前的高强度冲刺节奏，**24 小时内更新 32 条 Issue 与 50 条 PR**，社区活跃度处于历史高位。围绕 v1 launch checklist 的实战缺陷集中浮现（6 条关闭、4 条新开），同时多个核心 Epic（错误可恢复性、Skill 发现、Manifest V3）继续推进。整体看，项目处于 **"临门一脚 + 高密度收尾"** 状态——主线功能稳定，但渠道集成（Slack/Telegram）与 WebUI 体验细节仍是发布前的主要风险点。

---

## 2. 版本发布

**今日无新版本发布。** 与 [PR #5598](https://github.com/nearai/ironclaw/pull/5598)（chore: release）相关的发布管线（`ironclaw_common` 0.4.2→0.5.0、`ironclaw_skills` 0.3.0→0.4.0 含 API breaking changes）仍处 OPEN 状态，等待核心评审落地。

---

## 3. 项目进展

今日共 **19 条 PR 合并/关闭**，重点推进：

| PR | 主题 | 影响 |
|---|---|---|
| [#6663](https://github.com/nearai/ironclaw/pull/6663) | `cargo run` 默认进入 WebUI serve | 修复本地开发入口割裂，提升开箱体验 |
| [#6664](https://github.com/nearai/ironclaw/pull/6664) | 能力覆盖率按"结果"而非"能力"计数 | 揭露"123/123 tested"假象，强制每条能力必须有真实执行证据 |
| [#6637](https://github.com/nearai/ironclaw/pull/6637) | Reborn 存储全景与目标关系模型文档化 | 为后续存储迁移提供权威设计文档 |
| [#6482](https://github.com/nearai/ironclaw/issues/6482) | Epic: Pluggable Memory Providers | 已关闭，落地内存提供方抽象 |
| [#6490](https://github.com/nearai/ironclaw/issues/6490) | Manifest V3 契约与迁移路径 | 已关闭，扩展面词汇表定稿 |

**主线推进判断：** 项目从"特性堆砌"转向"可信度量"，覆盖率计算方式的重构（#6664）是今日最具方法论意义的进展——它把"测过"和"测实了"区分开来，对未来回归防护意义重大。

---

## 4. 社区热点

按评论数排序的活跃议题：

1. **[#6284 Epic — Error Recoverability Endgame](https://github.com/nearai/ironclaw/issues/6284)** · 5 评论 · OPEN
   - 作者 [serrrfirat](https://github.com/serrrfirat) 提出"模型必须 100% 恢复所见错误"的契约，定义 5 条验收准则：存活、可观测、含根因+成功路径、保留决策回合、永不误报 success。

2. **[#6544 Slack Personal OAuth Redirect URI 无 UI/CLI 配置](https://github.com/nearai/ironclaw/issues/6544)** · 4 评论 · 已关闭
   - 作者 [sergeiest]( 暴露托管环境关键缺陷：Slack OAuth 重定向 URL 无法持久化，触发 503。这是 v1 发布阻塞项之一。

3. **[#6524 Epic — Hermetic Capability & Journey Testing Platform](https://github.com/nearai/ironclaw/issues/6524)** · 3 评论 · OPEN
   - 与 #6284 同源诉求：建立"密闭式"能力与用户旅程测试平台，机械回答"每条能力都有确定性覆盖吗？"。

4. **[#6656 禁用 v1.0.0 前的升级路径](https://github.com/nearai/ironclaw/issues/6656)** · 2 评论 · 已关闭
   - 由于尚未提供 pre-reborn → v1 的迁移通路，临时在 agent.near.ai 屏蔽旧版升级。

5. **[#6521 staging 环境缺失 ironclaw CLI](https://github.com/nearai/ironclaw/issues/6521)** · 2 评论 · 已关闭
   - staging 镜像未随包 CLI，运维动作受限，已修复。

**诉求归纳：** 社区讨论集中在两类——(a) **可观测性与可信度量**（错误恢复、覆盖率真实性），(b) **v1 上线路径的最后阻塞项**（OAuth、CLI、升级门禁）。

---

## 5. Bug 与稳定性

按严重程度整理今日报告的 Bug：

### 🔴 P1（影响核心功能）
| Issue | 标题 | 实例 | 是否已有 Fix PR |
|---|---|---|---|
| [#6645](https://github.com/nearai/ironclaw/issues/6645) | Slack send_message 报告成功但 DM 实际未送达 | Railway staging | ❌ 无（Activity log 显示 `outbound_delivery_t…` 异常） |
| [#6644](https://github.com/nearai/ironclaw/issues/6644) | Telegram 回复投递到错误用户消息 | Railway staging | ❌ 无 |
| [#6643](https://github.com/nearai/ironclaw/issues/6643) | Telegram 配对后消息进入黑洞 | Railway staging | ❌ 无 |

### 🟡 P2（体验/UI 问题）
| Issue | 标题 | 是否已有 Fix PR |
|---|---|---|
| [#6649](https://github.com/nearai/ironclaw/issues/6649) | Tool 活动面板在响应结束后才渲染 | ❌ |
| [#6648](https://github.com/nearai/ironclaw/issues/6648) | 工具失败消息重复且措辞不一 | ❌ |
| [#6646](https://github.com/nearai/ironclaw/issues/6646) | Agent 忽略 Google Sheets 写入动作 | ❌ |
| [#6651](https://github.com/nearai/ironclaw/issues/6651) | 回复后 UI 重复显示原始问题 | ❌ |

### 🟠 中等（数据可信度）
| Issue | 标题 | 是否已有 Fix PR |
|---|---|---|
| [#6650](https://github.com/nearai/ironclaw/issues/6650) | AQI 数据凭空捏造（hallucination from cached web sources） | ❌ |
| [#6614](https://github.com/nearai/ironclaw/issues/6614) | Slack OAuth binding 持续 `BindingRequired` | ✅ 已关闭 |
| [#6642](https://github.com/nearai/ironclaw/issues/6642) | `ironclaw models list` 显示陈旧 provider/model | ❌ |

**健康度判断：** 渠道通道（Slack/Telegram）的失败语义错位是 v1 前最大风险——`report success but no delivery` 类问题若未在发布前收敛，将直接破坏用户对代理可靠性的信任。

---

## 6. 功能请求与路线图信号

今日 50 条 PR 中包含多项指向明确功能方向的提案：

**即将合并落地（XL/OPEN，评审成熟）：**
- [#6616](https://github.com/nearai/ironclaw/pull/6616) — 精简 composition 扩展宿主，淘汰产品 workflow facade（ilblackdragon 主导，架构级重构）
- [#6659](https://github.com/nearai/ironclaw/pull/6659) — Trace 重放按精确 tool_call_id 绑定（提升回归确定性）
- [#6665](https://github.com/nearai/ironclaw/pull/6665) — Capability 失败诊断可操作化（typed `ModelDiagnostic`，4096 字节上限 + 密钥清洗）
- [#6530](https://github.com/nearai/ironclaw/pull/6530) — 终止前有限警告轮次（避免 `NoProgressDetected` 直接 kill）
- [#6531](https://github.com/nearai/ironclaw/pull/6531) — Admin OAuth 配置运行时生效

**中长期路线图（Epic 级，仍在演化）：**
- [#6284](https://github.com/nearai/ironclaw/issues/6284) — 错误可恢复性终局目标
- [#6524](https://github.com/nearai/ironclaw/issues/6524) — 密闭测试平台
- [#6565](https://github.com/nearai/ironclaw/issues/6565) — Skill 发现/路由/激活可靠性
- [#6641](https://github.com/nearai/ironclaw/issues/6641) — Skill 自创建设计文档
- [#6666](https://github.com/nearai/ironclaw/issues/6666) — 进程日志内核迁入 `ironclaw_processes`

**WebUI 性能优化集群（[italic-jinxin](https://github.com/italic-jinxin) 主导，4 个独立 PR）：**
- [#6628 Epic](https://github.com/nearai/ironclaw/issues/6628) · [#6629 路由级代码分割](https://github.com/nearai/ironclaw/issues/6629) · [#6630 静态资源压缩](https://github.com/nearai/ironclaw/issues/6630) · [#6631 Markdown/流式渲染优化](https://github.com/nearai/ironclaw/issues/6631)

---

## 7. 用户反馈摘要

从 Issue 评论与复现路径中提炼的真实痛点：

- **OAuth 配置体验断层（[sergeiest](https://github.com/sergeiest)）**："redirect URL 无法持久化导致 Slack auth 503" — 反映了托管环境下"该有 UI 的地方没有 UI"的运维摩擦，是 v1 checklist 的高频抱怨来源。
- **模型幻觉正在污染可信代理形象（[#6650](https://github.com/nearai/ironclaw/issues/6650)）**：用户明确挑战数据来源，agent 仍产出 AQI=199 这种虚假数值，且无法自证。**这是产品口碑风险最高的问题。**
- **工具失败语义不一致（[#6648](https://github.com/nearai/ironclaw/issues/6648)、[#6645](https://github.com/nearai/ironclaw/issues/6645)、[#6643](https://github.com/nearai/ironclaw/issues/6643)）**：报告成功但实际失败 / 重复报错 / 消息进入黑洞 —— 用户对"代理到底有没有做"的判断被严重干扰。
- **TUI/CLI 配置优先级反转（[#6642](https://github.com/nearai/ironclaw/issues/6642)）**：注释与代码行为不符，造成用户误判配置来源。
- **国际化未落地（[#6623](https://github.com/nearai/ironclaw/issues/6623)）**：失败消息硬编码英文，切换语言后仍出现，破坏多语言用户预期。
- **WebUI 可访问性缺失（[#6621](https://github.com/nearai/ironclaw/issues/6621)）**：扩展配置弹窗不管理键盘焦点，键盘用户可"穿越"模态 —— 是无障碍合规风险。

**总体情绪：** 用户对核心能力（OAuth、Skill 执行、多渠道）期望高，但落地细节的"最后一公里"反复磨损信任。

---

## 8. 待处理积压

以下为开放时间长或影响范围大的待办，建议维护者优先 review：

| 编号 | 类型 | 创建时间 | 关键性 | 备注 |
|---|---|---|---|---|
| [#4058](https://github.com/nearai/ironclaw/pull/4058) | PR (XL) | **2026-05-25** | 关键 | KMS 曲线能力 fail-closed on custodial-mainnet ship-gate，已挂起 2 个月 |
| [#4060](https://github.com/nearai/ironclaw/pull/4060) | PR (M) | 2026-05-25 | 高 | attested-signing 续延上下文断言 — 全栈一致性 review 待闭环 |
| [#4104](https://github.com/nearai/ironclaw/pull/4104) | PR (XL) | 2026-05-27 | 高 | 授权过期 + tenant-key + 一致性重试，trait 级持久化跟进项 |
| [#4055](https://github.com/nearai/ironclaw/pull/4055) | PR (XL) | 2026-05-25 | 中 | `TrustEnrollment` ceremony — 外部钱包 raiser 解锁项 |
| [#4054](https://github.com/nearai/ironclaw/pull/4054) | PR (L) | 2026-05-25 | 中 | 多租户隔离测试套件 |
| [#5563](https://github.com/nearai/ironclaw/pull/5563) | PR (XL) | 2026-07-02 | 中 | WebUI 设计系统 token + /playground，**新贡献者 PR，等候 core 评审** |
| [#6635](https://github.com/nearai/ironclaw/issues/6635) | Issue | 2026-07-24 | 中 | CI 中 Docker 镜像构建被剥离，发布 DAG 缺一环 |

**维护者建议：** 
1. **首批冲刺** #6645 / #6644 / #6643（渠道 P1）以解除 v1 发布阻塞；
2. **第二批** [#4058](https://github.com/nearai/ironclaw/pull/4058) KMS 系列（已搁置 60+ 天，避免与 mainnet ship-gate 节奏脱节）；
3. **第三批** [#5563](https://github.com/nearai/ironclaw/pull/5563) 设计系统（新贡献者首次大 PR，处理迟滞会影响社区贡献循环）。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 50 PR/日，属项目历史高位 |
| 主线稳定性 | ⭐⭐⭐ | v1 临近但渠道缺陷集中浮现 |
| 社区响应 | ⭐⭐⭐⭐ | Bug 当日即有处理动向，但 P1 缺乏 fix PR |
| 文档与可观测性 | ⭐⭐⭐⭐ | #6284 / #6524 / #6637 等 Epic 显示团队重视可信度量 |
| 发布就绪度 | ⭐⭐⭐ | v1 launch checklist 仍有 3+ P1 项未解 |

**结论：** IronClaw 处于 v1 临界点，建议将"渠道交付语义"与"模型幻觉抑制"作为最后 7 天的最高优先级攻坚项。

---

*日报由 AI 智能体开源项目分析师基于 GitHub 公开数据自动生成。如需某条目深度分析，请回复对应编号。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-07-25

> 数据范围：2026-07-24 至 2026-07-25 ｜ 数据来源：github.com/netease-youdao/LobsterAI

---

## 一、今日速览

LobsterAI 项目今日维持高度活跃的迭代节奏：单日 PR 更新达 50 条（其中 43 条已完成合并/关闭），并伴随新版本 `2026.7.23` 发布；Issues 端则出现明显放缓，过去 24 小时新开/活跃的 19 条 Issue 全部为存量 stale 项被机器人或定时任务重新激活，并非新增问题——Issue 通道 0 关闭、0 新建的事实表明**问题响应闭环正在积压**。整体来看，项目在功能交付与构建/稳定性修复层面推进顺畅，但在用户反馈响应、长期 Issue 治理、关键安全 PR 收尾方面存在显著滞后。

---

## 二、版本发布

### 🦞 LobsterAI 2026.7.23（已发布）

核心改动亮点（依据 Release Notes + 相关 PR 摘要回溯）：

| 类别 | 改动 |
|---|---|
| **AI 皮肤** | 改进 AI skin 创建流程，#2361 |
| **Cowork 协作** | 支持浏览器多注释附件，#2366 |
| **构建/发布** | 增加显式的 Wind（Windows）渠道入口（#2361 系列） |
| **Cowork 稳定性** | 大会话渲染优化（折叠 tool-result 64K → 16K、memoize 派生显示、新增 Diagnostics ZIP 导出），#2264 |
| **Cowork 子代理** | 子代理 tool 历史同步、面板时间戳修复，#2299 / #2261 |
| **构建链** | Windows exe 内部签名（#2327）、安装器自愈解压（#2326）、Chrome 进程泄漏修复（#2328） |
| **定时任务/IM** | 企微/钉钉群聊 ID 大小写保留、run history 修复（#2314、#2306、#2231） |
| **底层兼容** | `String.replaceAll` 改为 ES2020 正则（#2309） |

**升级建议**：从更早版本跨级升级时，重点验证 cron 定时任务（IM 群聊投递大小写行为变化）与 Windows 安装器（新签名链）相关回归。无明确数据库迁移风险。

---

## 三、项目进展（今日合并/关闭 PR）

今日 50 条 PR 中共 **43 条已合并或关闭**，可识别的关键推进：

### 🔧 协作与稳定性（主线推进）
- **#2264** [CLOSED] – 优化大 session 渲染与诊断导出，显著降低 tool-heavy 场景下的渲染开销 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2264)
- **#2299** [CLOSED] – 子代理 child tool 历史同步 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2299)
- **#2261** [CLOSED] – 子代理面板时间戳修复 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2261)

### 🛡 构建与 Windows 链（重磅修复）
- **#2327** [CLOSED] – 对 Windows app exe（不再仅 NSIS 安装器）执行内部签名——直接缓解安全软件冻屏导致的首启挂起 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2327)
- **#2326** [CLOSED] – 安装器自愈式解压（系统 tar 优先 + 10 分钟看门狗回落） ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2326)
- **#2328** [CLOSED] – 浏览器并发启动/搜索序列化，杜绝 Chrome 进程泄漏 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2328)
- **#2340** [CLOSED] – 回滚 #2337 模型禁用逻辑 ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2340)

### 📡 IM/定时任务
- **#2306 / #2314 / #2231** [CLOSED] – IM 群聊投递、run history、群聊 ID 大小写一致性三连修 ➜ [#2306](https://github.com/netease-youdao/LobsterAI/pull/2306) · [#2314](https://github.com/netease-youdao/LobsterAI/pull/2314) · [#2231](https://github.com/netease-youdao/LobsterAI/pull/2231)

### 🤖 新能力引入
- **#2382** [CLOSED] – Cowork 模型超时处理（330s 服务器端超时 + 30s 本地长时等待提示 + SSE 终态分类日志） ➜ [链接](https://github.com/netease-youdao/LobsterAI/pull/2382)

**整体评估**：今日主线（构建链 + 协作渲染 + IM 投递）在 2026.7.23 版本获得集中收尾，项目向前迈进的幅度较大。

---

## 四、社区热点

按评论数与议题代表性排序：

| 序号 | 议题 | 评论数 | 时间跨度 | 焦点 |
|---|---|---|---|---|
| 🔥1 | [#1813 DeepSeek V4 LLM request failed](https://github.com/netease-youdao/LobsterAI/issues/1813) | 7 | 4/24 → 7/24 | 模型 schema/tool payload 被 provider 拒绝，DeepSeek 用户群核心痛点 |
| 🔥2 | [#1849 追问时出现 NO_REPLY 或早停](https://github.com/netease-youdao/LobsterAI/issues/1849) | 3 | 4/28 → 7/24 | 任务被提前 complete 但模型仍在输出，根因怀疑完成判定逻辑 |
| 🔥3 | [#1878 微信 IM 接口扫码后无法输验证码](https://github.com/netease-youdao/LobsterAI/issues/1878) | 3 | 4/30 → 7/24 | openclaw 端数字验证 UI 缺失，阻塞 IM 接入流程 |
| 🔥4 | [#1796 Write/Edit 工具总是失败](https://github.com/netease-youdao/LobsterAI/issues/1796) | 2 | 4/22 → 7/24 | 升级后仍存在，影响最基础的 agent 操作 |
| 🔥5 | [#1797 增加批量删除对话功能](https://github.com/netease-youdao/LobsterAI/issues/1797) | 1（👍1）| 4/23 → 7/24 | 唯一获得 +1 的诉求，反映上下文管理刚需 |

**诉求背后**：今日热点几乎全部锁定在"**核心使用路径被打断**"——LLM 调用、写入工具、IM 接入——而非美化/小特性。这表明项目当前痛点在功能可用性，而非 UX 增量。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 P0-安全 | [#1885 邮箱 SKILL 路径穿越](https://github.com/netease-youdao/LobsterAI/issues/1885) | `imap.js` 下载附件未对文件名过滤，可写入任意路径 | ❌ 暂无专门 PR |
| 🔴 P0-阻塞 | [#2017 本地运行内置 OpenClaw runtime 缺失](https://github.com/netease-youdao/LobsterAI/issues/2017) | 提示"未检测到内置 OpenClaw runtime（cfmind）" | ❌ 文档/构建侧 |
| 🟠 P1-核心 | [#1813 DeepSeek V4 无法使用](https://github.com/netease-youdao/LobsterAI/issues/1813) | Provider 拒绝 schema/tool payload | ❌ |
| 🟠 P1-核心 | [#1796 Write tool 持续失败](https://github.com/netease-youdao/LobsterAI/issues/1796) | 连续多天复现 | ❌ |
| 🟠 P1-连接 | [#1993 AI engine connection lost](https://github.com/netease-youdao/LobsterAI/issues/1993) | 桌面端持续掉线，IM Bot 路径正常——隔离性差 | ❌ |
| 🟡 P2-模型 | [#1988 阿里百炼 qwen3.6-plus 被强制改写](https://github.com/netease-youdao/LobsterAI/issues/1988) | 系统覆盖 coding plan 配置，强制调用网易模型 | ❌ |
| 🟡 P2-中断 | [#1849 追问 NO_REPLY/早停](https://github.com/netease-youdao/LobsterAI/issues/1849) | 完成判定时序错误 | ❌ |
| 🟡 P2-UI | [#1971 会话页滚动异常](https://github.com/netease-youdao/LobsterAI/issues/1971) | Mermaid 渲染触发的虚拟滚动不稳 | ❌ |
| 🟢 P3-体验 | [#1920 / #1921 UI 空状态缺少 icon 与描述](https://github.com/netease-youdao/LobsterAI/issues/1920) | Skeleton 与空状态不一致 | ❌ |

**观察**：今日 Issues 中 **0 条** 有对应已合并的 fix PR，stale 标签仍挂在所有条目上。安全类 #1885 路径穿越漏洞至今未获 PR 关联，建议优先处理。

---

## 六、功能请求与路线图信号

| 建议 | 已有/相关 PR | 进入下版本概率 |
|---|---|---|
| **Kimi K3 模型支持** | ✅ [#2381 已开放 PR](https://github.com/netease-youdao/LobsterAI/pull/2381) | ★★★ 即将合并 |
| **LiteLLM 作为 AI 网关** | ✅ [#2193 已开放 1 个月](https://github.com/netease-youdao/LobsterAI/pull/2193) | ★★★ 大概率近期合并 |
| **批量删除对话**（[#1797](https://github.com/netease-youdao/LobsterAI/issues/1797)） | ❌ | ★★ 社区 +1 但需求小 |
| **UI 整体重新设计**（[#1836](https://github.com/netease-youdao/LobsterAI/issues/1836)） | ❌ | ★ 与皮肤优化线相关，优先级待定 |
| **Hermes Agent 接入**（[#1880](https://github.com/netease-youdao/LobsterAI/issues/1880)） | ❌ | ★ |
| **openhuman 引擎**（[#2016](https://github.com/netease-youdao/LobsterAI/issues/2016)） | ❌ | ★ |
| **OpenClaw 实时落盘事件**（[#2036](https://github.com/netease-youdao/LobsterAI/issues/2036)） | ❌ | ★★ 与 #2039/#2040/#2041 形成"记忆/事件系统"专题簇 |

**专题信号**：用户 [@woxinsj](https://github.com/woxinsj) 连续在 5/22–5/23 提出 #2036/#2039/#2040/#2041 四连发，形成清晰的 **OpenClaw 记忆与事件系统重构**议程。社区自发形成专题簇在 OSS 项目中较少见，可能催生下个版本设计文档。

---

## 七、用户反馈摘要

**核心痛点**
1. **写操作不可靠**：多用户报告 Write/Edit 工具升级后仍失败（[#1796](https://github.com/netease-youdao/LobsterAI/issues/1796)），影响 Agent 最基本能力——这是"AI 智能体"产品的 P0 信任指标。
2. **模型通道被锁定**：[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) 暴露配置被系统强制改写的现象，用户感到"被绑死在网易模型上"，损害多模型策略自由的卖点。
3. **连接稳定性差**：[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) 桌面端 vs IM Bot 表现不一致，反映进程/会话生命周期管理还需打磨。
4. **IM 微信接入链路断裂**：[#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 验证码 UI 缺失，企业微信用户无法闭环。

**正面信号**
- 项目对 Windows 安装链（[#2326](https://github.com/netease-youdao/LobsterAI/pull/2326)、#2327）做了系统性加固，反映构建侧工程化水平提升。
- 子代理/大 session 渲染系列合并（#2264/#2299/#2261）说明团队重视重度用户场景。

---

## 八、待处理积压（提醒维护者关注）

### 🔴 长期未响应（>60 天）安全与 P0 类
- [kayo5994 的 3 个安全 PR 仍 OPEN（自 2026-04-27 起）](https://github.com/netease-youdao/LobsterAI/pulls?q=is%3Apr+author%3Akayo5994+is%3Aopen)：
  - [#1831 脱敏主进程与 IM 模块的敏感日志](https://github.com/netease-youdao/LobsterAI/pull/1831)（80+ 天）—— Bearer token / API key / SSE 内容写入 electron-log
  - [#1832 限制 store:* IPC 越权访问](https://github.com/netease-youdao/LobsterAI/pull/1832)（80+ 天）—— `auth_tokens`、`github_copilot_github_token` 明文可被读/覆盖
  - [#1833 shell.openExternal scheme 白名单](https://github.com/netease-youdao/LobsterAI/pull/1833)（80+ 天）—— 拒 `file:`/`javascript:`/`data:`
- [Issue #1885 邮箱 SKILL 路径穿越](https://github.com/netease-youdao/LobsterAI/issues/1885)（80 天，无关联 PR）

### 🟠 中长期功能 PR
- [PR #2193 LiteLLM AI Gateway Provider](https://github.com/netease-youdao/LobsterAI/pull/2193)（32 天未审）
- [PR #1835 去除 continueSession 重复系统错误](https://github.com/netease-youdao/LobsterAI/pull/1835)（89 天）
- [PR #1879 保留手动 plugin load path](https://github.com/netease-youdao/LobsterAI/pull/1879)（83 天）

### 🟡 已 stale 但仍有用户互动
- [#1813](https://github.com/netease-youdao/LobsterAI/issues/1813) [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) [#1796](https://github.com/netease-youdao/LobsterAI/issues/1796) [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) 均仍被用户活跃评论，社区在等待回复信号。

---

## 📊 项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 功能交付 | ⭐⭐⭐⭐⭐ | 50 PR/日，节奏极佳 |
| 构建/性能 | ⭐⭐⭐⭐ | Windows 链系统性加固 |
| 安全响应 | ⭐⭐ | 关键安全 PR 滞留 80+ 天，与近期高强度合并节奏不匹配 |
| Issue 治理 | ⭐⭐ | 19 条全部 stale，0 关闭/响应，闭环缺失 |
| 社区信号 | ⭐⭐⭐ | 形成了 "OpenClaw 记忆系统" 专题簇，有机增长 |
| **综合** | **⭐⭐⭐** |

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-25

> 数据周期：2026-07-24 至 2026-07-25 | 数据来源：GitHub API

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位平稳**状态：无新版本发布、无新 Issue 提交、Issues 处理量为零。但社区贡献保持定向产出——开发者 **penso** 在 24 小时内连续提交了 **2 个聚焦 Slack 集成的 PR**（#1165、#1166），形成清晰的叠加式功能改进链。整体来看，项目当日呈现"无噪声、专注打磨"的小步快跑节奏，PR 均处于待评审状态，尚无合并动作。

---

## 2. 版本发布

**今日无新版本发布**，跳过本节。

---

## 3. 项目进展

⚠️ **今日无 PR 合并/关闭**。以下为已提交但仍在评审中的重要 PR：

### 🔹 PR #1165 — Slack 消息确认机制 + 反应触发器
- **状态**：OPEN | 作者：penso | 👍 0
- **链接**：[moltis-org/moltis#1165](https://github.com/moltis-org/moltis/pull/1165)
- **核心改进**：
  - 针对 Slack Bot 无法显示"正在输入"指示器的痛点，新增**消息确认反应（acknowledgment reactions）**作为视觉反馈信号
  - 新增**入站反应触发器（inbound reaction triggers）**
  - 修复一处**已确认的错误消息 Bug**——线程回复中可能将消息发往错误的会话
- **技术灵感**：来源于 `hermes-agent` 项目（openclaw/hermes 对比分析）

### 🔹 PR #1166 — Slack 第二阶段优化 + 重连监控 + 提前确认 Bug 修复
- **状态**：OPEN | 作者：penso | 👍 0
- **链接**：[moltis-org/moltis#1166](https://github.com/moltis-org/moltis/pull/1166)
- **核心改进**：
  - 作为 #1165 的后续叠加 PR（base 分支 `third-effect`），实现 **8 项 Slack 集成改进**
  - 包含**阶段反应（phase reactions）**、**重连监管（reconnect supervision）**、**Block Kit 渲染**
  - **修复 Bug**：`chat.send` 调用在派生 agent 运行后立即返回（fire-and-forget），导致消息在 agent 实际处理前就被发送——属"提前确认"问题

**整体推进评估**：两个 PR 共同将 Moltis 的 Slack 集成能力从"基础收发"提升至"具备完整用户反馈链路 + 健壮性保障"的水平，是 Slack 通道的一次系统性升级。

---

## 4. 社区热点

今日项目**无 Issues 活动、无 PR 评论**（评论数标记为 `undefined`，实际计数为 0）。社区互动指标（👍 / 💬）均为零。

**分析**：这意味着两个 PR 仍处于"刚提交未被关注"阶段。考虑到二者涉及的功能改进较为专业（Slack 协议层 + Bug 修复），建议维护者及时分配 reviewer 推进评审，避免 PR 因长期搁置产生合并冲突。

---

## 5. Bug 与稳定性

| # | Bug 描述 | 严重度 | 来源 PR | 是否已有 Fix |
|---|---------|-------|--------|------------|
| 1 | **线程回复发往错误会话**（Slack 频道中可能将消息发至非预期线程/会话） | 🟠 高 | [#1165](https://github.com/moltis-org/moltis/pull/1165) | ✅ 已包含修复 |
| 2 | **消息提前确认（premature-ack）**：agent 尚未开始处理即向用户返回消息确认 | 🟠 高 | [#1166](https://github.com/moltis-org/moltis/pull/1166) | ✅ 已包含修复 |

**评估**：两个 Bug 均属"用户感知型"问题——前者会让消息错发，后者会给出错误进度反馈。虽然严重度标记为高，但得益于 PR 作者将修复与功能改进一并打包提交，**风险可控、修复路径明确**。

---

## 6. 功能请求与路线图信号

通过分析两个 PR 的功能方向，可推断出 Moltis 当前在 **Slack 通道**的路线图焦点：

| 方向 | 体现能力 | 落地 PR |
|-----|---------|--------|
| **用户感知反馈** | 通过 reaction 替代 typing indicator | #1165 |
| **交互扩展性** | reaction-based 触发器，丰富人机交互模式 | #1165 |
| **结构化消息渲染** | Block Kit 支持 | #1166 |
| **连接健壮性** | 长连接断线后的自动重连监管 | #1166 |
| **多阶段进度可视化** | phase reactions 让用户看到处理阶段 | #1166 |

**预测**：由于 #1166 显式标记为 #1165 的 follow-up 并实现 8 项改进，说明 Slack 通道是当前迭代的**优先方向**。下一版本（若发布）很可能将这两批改动以单一 feature release 形式合并。

---

## 7. 用户反馈摘要

⚠️ **今日无新 Issue、无 PR 评论数据**，无法从用户侧提炼直接反馈。

仅有的信号来自 PR 描述中作者对用户痛点的转述：
- *"Slack bots cannot show a typing indicator, so users had no signal that a message was received and is being worked on"* — 反映 Slack 用户对**反馈即时性**的期待
- *"confirmed wrong-message bug in threaded replies"* — 表明**线程回复场景**在生产环境中已有用户遭遇过问题

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 提醒 |
|-----|-----|------|---------|-----|
| 🔴 PR | [#1165](https://github.com/moltis-org/moltis/pull/1165) | feat(slack): acknowledge messages with reactions and add reaction triggers | 2026-07-24 | **基座 PR**，#1166 依赖其合并，建议优先评审 |
| 🔴 PR | [#1166](https://github.com/moltis-org/moltis/pull/1166) | feat(slack): phase reactions, reconnect supervision, Block Kit, and a premature-ack bugfix | 2026-07-24 | 叠加在 #1165 之上，存在**链式冲突风险**，若基座变更需同步重基 |

**对维护者的建议**：
1. 🔍 **优先指派 reviewer 处理 #1165**，作为整条 Slack 改进链的入口
2. 🔄 若对 #1165 提出重大修改建议，需同步通知 #1166 作者准备重基
3. 📌 评估是否将这两组改动合并为 Slack 集成的 **milestone / release notes** 单独发版

---

### 📊 项目健康度速览

| 指标 | 数值 | 评价 |
|-----|------|------|
| Issues 处理速率 | 0 / 0 | —（无新增） |
| PR 待合并量 | 2 | ⚠️ 需关注评审周转 |
| PR 合并/关闭率 | 0% (0/2) | 🟡 正常（提交当日尚未评审） |
| Bug 修复闭环 | 2/2 含在 PR 中 | ✅ 良好 |
| 版本发布 | 0 | ⚪ 无活动 |
| 社区互动 | 0 评论 / 0 反应 | ⚠️ 待激活 |

> **总评**：项目处于"静默打磨期"，单一贡献者（penso）正在进行 Slack 通道的系统性升级，整体方向清晰、质量可控。**核心风险**是评审链路是否畅通——2 个叠加 PR 若延误评审，合并冲突概率将快速上升。

---
*报告生成时间：2026-07-25 | 数据源：[GitHub API](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-07-25 ｜ 数据来源：agentscope-ai/QwenPaw 仓库**

> **说明：** 用户指定的仓库为 `agentscope-ai/CoPaw`，但所提供的 Issues / PR / Releases 数据均指向 `agentscope-ai/QwenPaw` 仓库（CoPaw 在生态层面对应 QwenPaw 项目）。本报告基于提供的实际数据生成，所有链接指向 QwenPaw 仓库。

---

## 1. 今日速览

CoPaw（QwenPaw）今日呈现**高活跃、版本密集**的态势：过去 24 小时共处理 **50 条 Issue 更新**（28 条新开/活跃、22 条关闭）与 **36 条 PR 更新**（22 条待合并、14 条已合并/关闭），并连续发布 **v2.0.1-beta.3 与 v2.0.1** 两个版本。社区讨论集中在 v2.0.0 升级后的回归问题（性能开销、SSH/MCP 缺失）、新功能诉求（多模型并行、内置知识库、Agent 隔离），以及大量 UX 优化建议。整体看，项目处于 **v2.0 重大版本后的密集修复 + 功能扩展期**，活跃度较高，但 v2.0 兼容性反馈显示仍有显著待解决问题。

---

## 2. 版本发布

### 🚀 v2.0.1（正式版）
链接：[Release v2.0.1](#)

**新增内容：**
- **PawApp Platform**：插件可在 QwenPaw 上构建富交互 UI 的 mini-app 平台
- **PawApp SDK & Kanban App**：内置看板任务管理应用，项目管理开箱即用

**附带的 Beta 修复（v2.0.1-beta.3）：**
- `perf(console)`：稳定聊天选项 memo，减少 SSE 重复解析（[#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393)）
- `chore`：版本号升至 v2.0.1（[#6404](https://github.com/agentscope-ai/QwenPaw/pull/6404)）

**⚠️ 迁移注意事项：**
- v2.0.0 升级用户应留意社区反馈的多个回归问题（见下文 Bug 章节），部分问题在 v2.0.1 中可能尚未修复
- 已使用 v1.x Profiles 与 SSH Offline 功能的用户应暂缓升级或保留旧版客户端
- PawApp SDK 为新插件接口，第三方插件作者需适配

---

## 3. 项目进展

今日合并/关闭的重要 PR 体现了项目的三大推进方向：**稳定性增强、第三方生态扩展、核心能力升级**。

| PR | 状态 | 方向 | 关键贡献 |
|---|---|---|---|
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) `feat(scroll)` | CLOSED | 上下文管理 | Scroll 重构为"分级压缩 + 持久化任务连续性"管道，history.db 仍是 source of truth |
| [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118) `feat(channels)` | CLOSED | 渠道扩展 | 新增 Zalo Bot Platform 渠道（长轮询，免 Webhook），关闭 [#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776) |
| [#5698](https://github.com/agentscope-ai/QwenPaw/pull/5698) `feat(tools)` | CLOSED | 工具升级 | `run_tool_batch` 适配 agentscope 2.0，新增控制流原语支持复杂多步工作流 |

**整体评估：** 三项合并均为重大底层变更，对长期可维护性有显著提升；但属于"内功"层改进，短期不直接体现给终端用户。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的 Issue 集中反映 v2.0 升级后的**核心功能缺失与性能回退**。

| Issue | 评论数 | 关注点 |
|---|---|---|
| [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | 7 | **v2.0.0 缺失 SSH Offline、Profiles 返回 404** —— 从 v1.1.12 升级后关键功能不可用 |
| [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | 7 | **每次简单对话额外 ~2 秒固定开销**，与模型延迟无关，疑似请求路径架构变更引起 |
| [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | 3 | OpenAI 兼容模型的 `max_tokens` 参数不生效 |
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | 3 | **MCP 重复注册 + list_tools() 导致 CancelledError**（高优 Bug，已存续 3+ 个月） |
| [#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) | 3 | 升级 2.0 后 MCP 工具持续提示 "Tool not found" |
| [#6401](https://github.com/agentscope-ai/QwenPaw/issues/6401) | 3 | 定时任务复用用户会话时会覆盖历史记录（已关闭） |
| [#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408) | 2 | 希望支持撤销/重新编辑上一轮对话 |
| [#6341](https://github.com/agentscope-ai/QwenPaw/issues/6341) | 2 | 删除 channel 后新建智能体仍默认指向已删除频道（已关闭） |
| [#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407) | 2 | ReAct Agent 保存上下文时将 tool_call/tool_result 混入 assistant 消息，触发 OpenAI API 400 错误 |
| [#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392) | 2 | 智能体级别 token 统计功能诉求 |

**诉求分析：**
1. **v2.0 升级"破坏性"体验差**：[#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) 与 [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 形成两条主线（功能缺失 + 性能回退），反映 v2.0 在企业/重度用户场景中存在兼容性问题。
2. **MCP 生态不稳定**：[#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)、[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405) 显示 MCP 工具调用在 v2.0 后出现持续报错，社区对 MCP 体验下降明显。

---

## 5. Bug 与稳定性

按严重程度排列（无现有 fix PR 的标记 ⚠️）：

### 🔴 P0 - 严重（影响核心功能）
- **[#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)** ⚠️ v2.0.0 SSH Offline、Profiles 404
  - v1.1.12 → v2.0.0 升级后多个核心功能不可用，**无 fix PR**
- **[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)** ⚠️ 每次回复固定 ~2s 开销
  - 性能回退，对话体验劣化，**无 fix PR**

### 🟠 P1 - 重要（影响部分用户/场景）
- **[#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999)** ⚠️ MCP list_tools 重复注册触发 CancelledError（已存续 110+ 天）
- **[#6407](https://github.com/agentscope-ai/QwenPaw/issues/6407)** ⚠️ ReAct Agent 上下文序列化导致 OpenAI API 400
- **[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)** ⚠️ MCP 工具 "Tool not found"（v2.0.0.post3 Docker 版）
- **[#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258)** ⚠️ OpenAI 模型 max_tokens 不生效
- **[#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** ⚠️ v2.0.1 在 Edge + Wayland 下高 CPU 占用，疑似大结果集渲染/WS 推送触发

### 🟡 P2 - 一般
- **[#6457](https://github.com/agentscope-ai/QwenPaw/issues/6457)** ⚠️ 任务模式运行后历史记录异常增多
- **[#6458](https://github.com/agentscope-ai/QwenPaw/issues/6458)** ⚠️ Cron 任务工具安全检查默认 OFF，通知粒度不足

**修复覆盖度：** 今日报告的 8 个主要 Bug 均**暂无对应公开 fix PR**（#6401、#6341 已关闭），稳定性风险敞口较大。

---

## 6. 功能请求与路线图信号

### 高需求（评论数 ≥ 2 或场景明确）
- **[#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)** 🆕 **Agent 完全隔离（隐私）**：跨 Agent 记忆泄露，被评为"非常不合理"，涉及多 Agent 部署的隐私合规。**优先级最高**。
- **[#6432](https://github.com/agentscope-ai/QwenPaw/issues/6432)** 🆕 **内置知识库（RAG）**：拖入 PDF/DOCX/TXT/MD/CSV 即自动检索，作者称"local AI apps 中被请求最多的能力"。
- **[#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455)** 🆕 **单 Agent 多模型并行**：用于事实核验、多视角汇总。
- **[#6408](https://github.com/agentscope-ai/QwenPaw/issues/6408)** **对话轮次撤销/重编辑**：参考 Cherry Studio / ChatGPT 的 `/undo` 设计。
- **[#6392](https://github.com/agentscope-ai/QwenPaw/issues/6392)** **智能体级 token 统计**。

### UX 改进类（成本低、易纳入下个版本）
- **[#6454](https://github.com/agentscope-ai/QwenPaw/issues/6454)** 🆕 选中文本增加右键"复制"菜单
- **[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)** 🆕 上传中文文件名保留中文，避免 URL 编码乱码
- **[#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452)** 🆕 优化"当前模型未检测到多模态能力"提示

### 与现有 PR 对齐（较可能进入下个版本）
- 知识库/RAG 需求 ↔ 当前无对应 PR，但与 v2.0.1 PawApp 平台方向契合
- Agent 隔离 ↔ [#6397](https://github.com/agentscope-ai/QwenPaw/pull/6397) 已引入第三方 agent 架构（Codex/Qoder），隔离需求或可在该架构中实现
- 多模型并行 ↔ 当前无对应 PR，但功能边界明确，社区可能很快跟进

---

## 7. 用户反馈摘要

**痛点归纳：**
1. **v2.0 升级信任受损**："Several features that were present in v1.1.12 are completely inaccessible in v2.0.0"（[#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980)）—— 用户反映关键工作流被破坏，404 错误未给出指引。
2. **性能感受下降**："approximately 2 seconds of fixed overhead on every simple conversational reply"（[#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307)）—— 与模型延迟无关的固定开销最令人困惑。
3. **MCP 集成不稳定**：多名用户反映 v2.0 后 MCP 工具名被改写为 `[mcp-key]__[tool_name]` 后持续报 "Tool not found"（[#6405](https://github.com/agentscope-ai/QwenPaw/issues/6405)），且 [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) 的 CancelledError 问题已存在超过 100 天。
4. **隐私担忧**：群聊 Bot 能访问单聊 Agent 记忆甚至修改其设置（[#6461](https://github.com/agentscope-ai/QwenPaw/issues/6461)），用户措辞强烈（"非常的不合理"）。
5. **中文用户体验细节**：文件名乱码（[#6453](https://github.com/agentscope-ai/QwenPaw/issues/6453)）、Windows 下 PowerShell 多行命令被吞掉（已有 [#6412](https://github.com/agentscope-ai/QwenPaw/pull/6412) fix PR 待合并）等本地化问题。

**满意信号：**
- v2.0.1-beta.3 的 console 性能优化（[#6393](https://github.com/agentscope-ai/QwenPaw/pull/6393)）显示团队积极响应性能反馈
- PawApp 平台与 Kanban 内置应用获得期待（v2.0.1 release notes）
- Scroll 重构（[#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323)）体现对长对话稳定性的投入

---

## 8. 待处理积压

| 编号 | 首次创建 | 类型 | 状态 | 风险评估 |
|---|---|---|---|---|
| [#2999](https://github.com/agentscope-ai/QwenPaw/issues/2999) | 2026-04-06（110 天） | Bug | OPEN | **严重** ——

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报 - 2026-07-25

> 数据范围：2026-07-24 ~ 2026-07-25 | 仓库：[qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 📋 今日速览

ZeptoClaw 今日整体活跃度**中等偏低**：过去 24 小时共 4 条工单动态（2 Issues + 2 PRs），**全部由维护者 qhkm 一人提交或处理**，社区外部参与度几乎为零（评论数与 👍 数最高也仅为 2/0）。今日实质性进展是 Telegram 流式响应功能从 Issue → PR → 合并的端到端闭环，但两条 **P1 级别的安全与 CI 修复**仍处待处理状态，且未发布新版本。需重点关注维护者单点风险与工单积压。

---

## 🚀 版本发布

今日**无新版本发布**。尽管 PR [#648](https://github.com/qhkm/zeptoclaw/pull/648) 已合并入主干，尚未触发 release tag 切割。

---

## 📈 项目进展

**今日已关闭/合并的重要 PR：**

### ✅ PR #648 - feat(telegram): stream gateway responses [CLOSED]
🔗 https://github.com/qhkm/zeptoclaw/pull/648

- 引入 **channel-neutral 的累积式出站流阶段**（架构级改进）
- Telegram 网关响应通过单一预览消息渐进式编辑实现实时流式输出
- 保留 reply 与 forum-topic 路由、UTF-16 长度限制、HTML 最终渲染、长响应续传机制
- 预览失败后停止中间编辑，保证健壮性
- 与 [Issue #647](https://github.com/qhkm/zeptoclaw/issues/647) 同步于 2026-07-24 关闭——表明该功能已完成合并入库

> **项目健康度评估**：功能层面向前推进了一项面向用户体验的核心能力（实时流式响应），且 "channel-neutral" 的措辞暗示未来将向其他 channel 扩展。但 PR review 信号为零（无评论、无 👍），缺乏外部验证。

---

## 💬 社区热点

今日社区热度**极低**，外部贡献者反馈几乎缺位：

| 排名 | 条目 | 评论数 | 👍 |
|------|------|--------|-----|
| 1 | [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) | 2 | 0 |
| 2 | 其他全部 | 0 | 0 |

**诉求分析**：
- 唯一的"功能请求"由维护者 **qhkm 自主提出并自主实现**（[Issue #647](https://github.com/qhkm/zeptoclaw/issues/647) → [PR #648](https://github.com/qhkm/zeptoclaw/pull/648)），呈现典型的"单兵作战 + 自我闭环"开发模式
- 项目目前仍处于**"维护者内部规划 → 自驱动开发"**阶段，尚未形成活跃的外部社区生态

---

## 🐛 Bug 与稳定性

按严重程度降序排列：

### 🔴 1. Issue #646 - chore(ci): restore Clippy and cargo-deny checks on current toolchain
🔗 https://github.com/qhkm/zeptoclaw/issues/646 ｜ **P1-critical** ｜ OPEN

- **基础问题**：Rust 1.97.1 在现有 channel / provider / binary-plugin 代码中报告 **5 个新增 Clippy 警告**
- **供应链风险**：`cargo-deny` 拒绝当前已锁定的 `quick-xml 0.39.2` 与 `lopdf 0.40.0`（**存在已知漏洞**）
- **触发源头**：由 [PR #645](https://github.com/qhkm/zeptoclaw/pull/645) 在 CI 上暴露出
- **是否有修复 PR**：❌ 暂无独立 fix PR，Issue 已定义修复 scope，等待维护者推进

### 🔴 2. PR #645 - fix(runtime): scrub subprocess secrets and reap timed-out process trees
🔗 https://github.com/qhkm/zeptoclaw/pull/645 ｜ **P1 安全/稳定** ｜ OPEN

- **安全风险**：Runtime 执行 shell 命令时继承 ZeptoClaw 完整进程环境 → **provider keys 与无关凭证可能泄漏到模型生成的命令中**
- **稳定性风险**：`Command::output()` future 在 timeout 后未一致地终止并回收子进程（含 Docker 容器派生进程）→ 资源泄漏
- **状态**：PR 仍 OPEN，**等待 review 与合并**
- ⚠️ 与 [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) 形成**强耦合**——前者触发了后者的 CI 失败

---

## 💡 功能请求与路线图信号

### Issue #647 - feat(telegram): stream agent responses with progressive message edits
🔗 https://github.com/qhkm/zeptoclaw/issues/647 ｜ P2-high ｜ **CLOSED**

- **请求内容**：在 Telegram 网关会话中复用 `StreamEvent` 路径，对 agent 响应做缓冲与渐进式编辑，单条消息按有界节奏刷新；处理 forum-topic、reply 路由、UTF-16 安全溢出、HTML 最终渲染等
- **落地情况**：✅ 已通过 [PR #648](https://github.com/qhkm/zeptoclaw/pull/648) 实现并合并
- **路线图信号**：
  - PR #648 摘要明确写到 "**channel-neutral cumulative outbound stream phases**"，强烈暗示下一阶段流式能力会扩展至其他 channel（如 Discord、Slack 等）
  - 但同日 Issue 开、同日关，review 信号为零，**未来 release tag 是否纳入此功能尚需观察**

---

## 📣 用户反馈摘要

因工单评论数普遍为零，今日可提炼的真实用户信号极其有限：

- 仅 [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) 拥有 **2 条评论**（今日最高），但具体内容未在元数据中披露，无法判断倾向
- 其余工单评论与点赞数均为 0，**用户场景与痛点信息严重缺失**
- 维护者本人对子进程密钥泄漏与 CI 基线失败使用 **P1 / P1-critical** 标签，表明其对**凭证安全**与**持续集成健康度**的高度警觉——这从侧面反映了项目目前的基础设施短板

> 💡 **建议**：维护者可在下次发版说明中主动征集用户场景，或在 Discord/Slack 同步建立反馈入口，以补足社区信号缺失的盲点。

---

## 📌 待处理积压

提醒维护者关注以下**长期未关闭且优先级高**的条目：

| # | 类型 | 优先级 | 状态 | 标题 | 链接 |
|---|------|--------|------|------|------|
| #645 | PR | 🔴 P1 | OPEN | fix(runtime): scrub subprocess secrets and reap timed-out process trees | [🔗](https://github.com/qhkm/zeptoclaw/pull/645) |
| #646 | Issue | 🔴 P1-critical | OPEN | chore(ci): restore Clippy and cargo-deny checks on current toolchain | [🔗](https://github.com/qhkm/zeptoclaw/issues/646) |

### ⚠️ 风险提示

1. **耦合风险**：[PR #645](https://github.com/qhkm/zeptoclaw/pull/645) 直接触发了 [Issue #646](https://github.com/qhkm/zeptoclaw/issues/646) 中的 CI 基线问题。建议维护者**采取如下任一顺序**：
   - 路线 A：先解决 #646 中升级/替换 `quick-xml`、`lopdf` 与 Clippy fix，再合 #645
   - 路线 B：将 #646 的修复打包进 #645 的 CI 修复 commit，**一次性合入**

2. **单点维护者风险（Bus Factor）**：今日全部 4 条工单的作者与执行者均为 **qhkm** 一人，无共同维护者、无 reviewer。项目对单一人员的高度依赖是当前**最大的可持续性风险**。

3. **合并后置风险**：[PR #648](https://github.com/qhkm/zeptoclaw/pull/648) 已合并但未发布新版本，在外部用户能获取此功能之前，存在**已修代码与线上可分发版本脱节**的风险窗口。

---

*本报告基于 2026-07-24 ~ 2026-07-25 期间的 GitHub 公开数据自动生成。所有链接均指向 https://github.com/qhkm/zeptoclaw 对应条目。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：** 2026-07-25
**数据来源：** [zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 仓库今日维持极高活跃度，24 小时内 Issues 更新 47 条、PR 更新 50 条，合并/关闭 10 条 PR、关闭 8 条 Issue，无新版本发布。社区关注集中在 **安全加固**（shell 沙箱绕过、SSRF、landlock 自限、verifiable-intent fail-open）、**架构治理**（统一插件目录、wire protocol 一等公民、ADR 审计）以及 **goal/controller 大型特性栈**（来自 vrurg 的多条 XL 级 PR 协同推进）。整体看，项目处于 v0.8.x → v0.9.0 的关键过渡期，安全议题密度显著上升，但流程纪律（RFC 模板、risk 标签、CODEOWNERS）运转良好。

---

## 2. 版本发布

**今日无新版本发布。** 当前稳定版仍为 v0.8.3，下一个里程碑为 v0.9.0，相关协调见 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（auth / security / gateway / breaking-change 跟踪器）。

---

## 3. 项目进展

今日合并/关闭的关键 PR 与 Issue 推动了以下方向：

| 类别 | 内容 | 链接 |
|---|---|---|
| 流程审计 | 关闭 [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074)，跟踪 2026-03-28 批量回滚 c3ff635 丢失的 153 个 commit 恢复工作 | [#6074](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |
| 依赖治理 | Dependabot 合并 [`anchore/sbom-action`](https://github.com/anchore/sbom-action) 升级（[#9305](https://github.com/zeroclaw-labs/zeroclaw/pull/9305)），配合 [#9344](https://github.com/zeroclaw-labs/zeroclaw/pull/9344) 锁定 SHA 并更新维护者动作清单 | [#9305](https://github.com/zeroclaw-labs/zeroclaw/pull/9305), [#9344](https://github.com/zeroclaw-labs/zeroclaw/pull/9344) |
| 配置稳定性 | 修复 `config set` 在 `risk_profiles`/`peer_groups`/Telegram 等非 provider map 段无法创建别名（[#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834)），以及 `save_dirty` 丢弃含点号 map key 写入（[#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)） | [#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834), [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) |
| 沙箱修复 | 关闭 landlock 自限 daemon（[#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204)），`full` autonomy 下 shell 工具被拒（[#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434)） | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204), [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) |
| 通道稳定性 | 修复 Telegram 通道别名热重载后丢失（[#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236)），ACP console 思维流被打碎问题（[#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116)） | [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236), [#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116) |
| 子代理隔离 | [#7266](https://github.com/zeroclaw-labs/zeroclaw/pull/7266) 修了一半后，关闭 [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) 中 `resolve_brain` 仍转发 coordinator API key 到子代理的剩余问题 | [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) |
| 文档 | 合并 SOP 布尔条件比较的文档澄清（[#8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679)） | [#8679](https://github.com/zeroclaw-labs/zeroclaw/pull/8679) |

整体判断：项目在配置层、通道层与安全层的"积压小问题"批量清理上迈进了实质性一步，多个 P1 Bug 已闭环。

---

## 4. 社区热点

按评论数排序，最受关注的议题：

- **[#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) — RFC: Work Lanes / Board Automation / Label Cleanup（14 评论，治理 RFC，Rev. 22）**
  当前状态已 Accepted 并进入 0.8.0-beta-1 → 0.8.3 滚动落地阶段。社区反复迭代的核心诉求是 **降低维护者手工分类负担** 同时保持工作流可追溯。

- **[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) — RFC: "Everything is a plugin"（4 评论）**
  提议把 Integrations（channels + providers + tools + platforms）和 Wasmtime/WIT 插件目录合并为统一目录，high-risk 架构变更。

- **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — RFC: Wire Protocol 一等公民（3 评论）**
  由 Taswen 提交，聚焦 provider 构造与接入流程的协议一致性，避免术语混淆。

- **[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) — nested `set_prop` 把非法值遮蔽为"unknown property"（3 评论）**
  揭示配置错误归因不友好，社区希望错误信息能区分"路径不存在"与"值非法"。

**诉求分析：** 当前讨论热度集中在 **架构治理**（RFC）与 **配置 UX 改进** 上。社区呼吁"少猜、多解释"，错误信息应能准确归因。

---

## 5. Bug 与稳定性

按严重程度排序（已合并 fix 的标注 ✅）：

| 严重度 | Issue | 摘要 | 状态 |
|---|---|---|---|
| **S0** | [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell 工具不强制 workspace 边界，符号链接可越权读/写 | **OPEN**，无 PR |
| **S1** | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows 桌面安装包启动失败，缺 `TaskDialogIndirect` | **OPEN**，help wanted |
| **S1** | [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 cron 作业 `delivery.mode` 硬编码为 `"none"`，输出被丢弃但状态记 `ok` | **OPEN**，PR [#9350](https://github.com/zeroclaw-labs/zeroclaw/pull/9350) ✅ 已提交 |
| **S1** | [#6434](https://github.com/zeroclaw-labs/zeroclaw/issues/6434) | `[autonomy] level = "full"` 下 shell 工具仍被拒 | ✅ 已关闭 |
| **S1** | [#9204](https://github.com/zeroclaw-labs/zeroclaw/issues/9204) | Landlock 沙箱误锁 daemon 自身 | ✅ 已关闭，依赖 PR [#9114](https://github.com/zeroclaw-labs/zeroclaw/pull/9114)（Open，待合） |
| **S2** | [#7623](https://github.com/zeroclaw-labs/zeroclaw/issues/7623) | 委派给 Codex/OAuth 子代理仍泄漏 coordinator API key | ✅ 已关闭 |
| **S1**（安全） | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `vi_verify` 在无凭证链验证下评估约束，fail-open | **OPEN**，PR [#9327](https://github.com/zeroclaw-labs/zeroclaw/pull/9327) ✅ 已提交 |
| **S2**（安全） | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 调和 `cargo audit` 与 `cargo deny` 的忽略列表，治理 wasmtime-wasi CVE | **OPEN**，in-progress |
| **S3** | [#7904](https://github.com/zeroclaw-labs/zeroclaw/issues/7904) | `SKILL.md` 的 `always: true` 在 compact prompt 模式下失效 | **OPEN** |
| **S3** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Dashboard 重载 daemon 后 Discord "typing" 指示器卡死 | **OPEN** |
| **S3** | [#8834](https://github.com/zeroclaw-labs/zeroclaw/issues/8834) | `config set` 无法在非 provider map 段创建新别名 | ✅ 已关闭 |
| **S3** | [#9236](https://github.com/zeroclaw-labs/zeroclaw/issues/9236) | 新的 Telegram 别名在 reload 后被丢弃 | ✅ 已关闭 |
| **S3** | [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) | `save_dirty` 静默丢弃含点号 map key 的写入 | ✅ 已关闭 |
| **S3** | [#9116](https://github.com/zeroclaw-labs/zeroclaw/issues/9116) | ACP console 把思维流拆成 1–2 词 | ✅ 已关闭 |

**安全面归纳：** 今日最关键的 S0/S1 安全问题是 **shell 工作区边界绕过**（[#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)）和 **vi_verify fail-open**（[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)），二者均已有对应 fix PR 在审。

---

## 6. 功能请求与路线图信号

今日新增或活跃的需求点中，与现有 PR 匹配度较高、最可能进入下一版本的有：

- **[#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) — 支持 `data` 包装的 OpenAI-compatible chat 响应**（[brokensnow2](https://github.com/brokensnow2) 提出）→ 与 [#9347](https://github.com/zeroclaw-labs/zeroclaw/pull/9347)（models.dev 上下文窗口传递）同期推进，指向 OpenAI-compatible provider 通用化。
- **[#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) — Crusoe Managed Inference 作为一等 OpenAI-compatible 提供商**（PR 已开）→ 沿用 NEAR AI #6842 的 8 文件模板。
- **[#8228](https://github.com/zeroclaw-labs/zeroclaw/issues/8228) — DingTalk 通道流式消息**（high-risk）→ 解决长响应延迟痛点。
- **[#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047) — 明确 ZeroCode Code 会话历史与持久化记忆的隔离**（in-progress）→ 文档与 UX 同步澄清。
- **[#9315](https://github.com/zeroclaw-labs/zeroclaw/issues/9315) — Telegram 文件下载按 HTTP 状态分类永久/瞬时失败**（blocked）→ 已有 [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) 作为前置，依赖合并后即可推进。
- **[#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) — RFC: AI 辅助 PR 预审与重审**（needs-maintainer-review）→ 治理向，跟 #6808 的 label cleanup 配套。
- **[#9349](https://github.com/zeroclaw-labs/zeroclaw/pull/9349) — `AgentEnd` 事件上报 per-turn `cost_usd`**（observability）→ 立刻改善下游成本归因。
- **Goal 系统栈**：[#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687)、[#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)、[#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)、[#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)、[#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)（[vrurg](https://github.com/vrurg) 主导）→ 5 条 XL 级 PR 构成完整 goal 控制器/验证器/通道接入栈，是 v0.9.0 主线候选。

---

## 7. 用户反馈摘要

从今日活跃议题中可提炼的痛点：

- **配置错误"信息黑洞"** — `set_prop` 路径错时一律报 `Unknown property`，无法区分"路径不存在"与"值非法"（[#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285)）；含点号的 model ID（`gpt-4.1`、`claude-3.5-sonnet`、`anthropic/claude-3.5-sonnet`）写入静默失败（[#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240)）。用户对"返回 success 但实际丢数据"零容忍。
- **跨设备/平台一致性** — Windows 桌面安装包在 v0.8.3 启动即崩（[#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)）；Discord typing 指示器 dashboard 重载后卡死（[#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198)）。
- **cron 静默丢弃输出** — CLI 添加的 cron 作业运行状态记 `ok` 但输出被丢弃，用户毫无感知（[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)）。这类"看似成功实则失败"的反馈会严重侵蚀信任。
- **shell 工具越权** — Workspace 内符号链接可绕过边界读/写外部目录（[#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247)），用户对工具间一致性期望强烈。
-

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*