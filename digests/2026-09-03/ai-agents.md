# OpenClaw 生态日报 2026-09-03

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-03 02:31 UTC

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

# OpenClaw 项目日报 · 2026-09-03

## 1. 今日速览

OpenClaw 在过去 24 小时继续保持极高活跃度：**500 条 Issue 更新（活跃 353 / 关闭 147）与 500 条 PR 更新（待合并 374 / 处理 126）**。社区热度集中于 2026.8.1 升级残留问题（多账号 / 飞书 / Discord 多插件用户首当其冲）、显式多智能体路由（`AgentSelectionRequiredError`）、Telegram 投递链路中的 tombstone 与 watchdog 交互、以及 Slack / Matrix 会话路由反向不可达等议题。**当日无版本发布**，维护者主要精力投入到 PR 合并与 bug 闭环上。整体来看，项目处于"高密度修复 + 多 Agent 体验持续打磨"的阶段，PR 端的准备度（`👀 ready for maintainer look`）显著高于 Issue 端的产品决策（`clawsweeper:needs-product-decision`）积压。

---

## 2. 版本发布

**无新版本发布。** 今日未观察到任何 release tag / draft release 活动。2026.8.1（commit `ea80657`）仍是用户基线，但它是今日多条 P1 报告（[#134570](https://github.com/openclaw/openclaw/issues/134570)、[#134608](https://github.com/openclaw/openclaw/issues/134608)、[#135835](https://github.com/openclaw/openclaw/issues/135835)、[#123073](https://github.com/openclaw/openclaw/issues/123073)、[#134055](https://github.com/openclaw/openclaw/issues/134055)、[#134337](https://github.com/openclaw/openclaw/issues/134337)）的来源版本，下一版本大概率将作为这些回归的"修复集中版"。

---

## 3. 项目进展

### 已关闭的 Issue（含已合并/已修复闭环）

| Issue | 主题 | 状态信号 |
|---|---|---|
| [#134608](https://github.com/openclaw/openclaw/issues/134608) | 2026.8.1 auth 迁移归档 JSON 但凭证不可用 → 永久阻塞 | **已闭环**，定位为回归 |
| [#135305](https://github.com/openclaw/openclaw/issues/135305) | 会话观察器连续失败后自禁用、Slack announce 静默丢弃 | **已闭环** |
| [#134055](https://github.com/openclaw/openclaw/issues/134055) | Slack DM 线程 2026.7.1-2 后失去 thread-scoped session | **已闭环**（回归） |
| [#134337](https://github.com/openclaw/openclaw/issues/134337) | `memory_search` dirty 维护并发写入下反复全量重建 | **已闭环**（已挂 PR） |
| [#124343](https://github.com/openclaw/openclaw/issues/124343) | yield-owned 子智能体完成结果永远不被投递 | **已闭环**（fix-shape 清晰，可入队） |
| [#118625](https://github.com/openclaw/openclaw/issues/118625) | 主会话压缩持有写锁超时导致子智能体结果丢失 | `close:already-fixed`，**已修复** |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack 线程回复因原元组丢失而无法投递 | **已闭环**（挂 PR） |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Windows Docker `OPENCLAW_HOME=/mnt/c/...` + `SANDBOX=1` 重启循环 | **已闭环** |
| [#99551](https://github.com/openclaw/openclaw/issues/99551) | Codex worker 失控加固冲刺（tracker） | 作为 duplicate / child 折叠 |

> **关键信号**：147 条关闭中有相当比例围绕 2026.8.1 升级回归与"会话状态 + 投递"语义修复，说明维护团队对该批问题有意识地在集中清理。

### 已关闭 / 进入合并评估的 PR

- [#136719](https://github.com/openclaw/openclaw/pull/136719) `improve(ui): show linked session participants` — 让 hovercard 显示完整参与方，不再折叠为 "N others"。  
- [#135934](https://github.com/openclaw/openclaw/pull/135934) `fix(android): keep realtime Talk responsive through playback and interruption` — **supersedes [#128101](https://github.com/openclaw/openclaw/pull/128101)**，原作者已挂出真机复现。这是 OpenAI Realtime × Android 全双工场景在物理设备层面的可重复修复。  
- [#135709](https://github.com/openclaw/openclaw/pull/135709) `refactor(release): share stable pin grammar` — 移动端 / Android / iOS 共用 pin 解析器，消除重复实现。

> 整体看，今日在 **Android realtime、Web UI 体验、Release 工具链** 三个方向有可量化的向前一步；面向 Codex 跨平台会话所有权（[#136754](https://github.com/openclaw/openclaw/pull/136754)）、跨 Agent session 默认开启（[#136755](https://github.com/openclaw/openclaw/pull/136755)）等"主动改"型 PR 处于 `👀 ready for maintainer look`，距离合入尚需一次产品决议。

---

## 4. 社区热点

按评论数与反应（👍）综合排序：

| 排名 | 编号 | 主题 | 评论 / 👍 | 标签要点 |
|---|---|---|---|---|
| 1 | [#99551](https://github.com/openclaw/openclaw/issues/99551) | Codex worker 失控加固冲刺（tracker） | 17 / 1 | closed (duplicate) |
| 2 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | Cron 智能体轮次在 DeepSeek 上 stall（`[cron:<id> <name>]` 前缀被降级） | 13 / 0 | 🦞 P1 |
| 3 | [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入到 `sessions_spawn` 子会话（`bundle-mcp` + 多层 allowlist 失效） | 13 / **6** | 🦞 P1 |
| 4 | [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` 在显式 ownership 下泛滥 | 12 / 0 | 🦞 P1 |
| 5 | [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport 在 gateway 重启后不自动重握手（`recovered=1` 误导） | 12 / 1 | 🦪 P2 |
| 6 | [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram 看门狗误 tombstone 待发送的 durable 更新 | 11 / 0 | 🦞 P1 |
| 7 | [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel `openclaw update` 报 `EUNSUPPORTEDPROTOCOL: workspace:*` | 10 / 0 | 🦞 P1 |
| 8 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 钩子 / 工具子进程未回收，zombie 累积 | 10 / 1 | 🦐 P1 |
| 9 | [#45494](https://github.com/openclaw/openclaw/issues/45494) | Cron agent 在 LLM 持续 500 时不会快速失败 | 9 / 0 | 🐚 P2 回归 |
| 10 | [#65374](https://github.com/openclaw/openclaw/issues/65374) | 内建 dreaming 在多 agent 间污染身份 | 9 / **2** | 🐚 P1 |

**诉求解读**：

- **多智能体语义**（[#85030](https://github.com/openclaw/openclaw/issues/85030)、[#126360](https://github.com/openclaw/openclaw/issues/126360)、[#65374](https://github.com/openclaw/openclaw/issues/65374)、[#118018](https://github.com/openclaw/openclaw/issues/118018)）是当前最热讨论集群 — 用户期待显式的 ownership、子会话路由、跨 agent 记忆/工具边界，而不是现在这种"配置存在但悄悄失效"的隐式语义。👍 数最高的 [#85030](https://github.com/openclaw/openclaw/issues/85030)（6 👍）印证这是高复现、高影响的"沉默失败"。  
- **Telegram 投递链路**（[#127229](https://github.com/openclaw/openclaw/issues/127229)、[#128971](https://github.com/openclaw/openclaw/issues/128971)、[#126246](https://github.com/openclaw/openclaw/issues/126246)、[#120735) 形成一片"语义正确但消息消失"的盲区：watchdog、terminal receipt、session observer 之间对 `delivery_ambiguous`、`tombstone` 的判定不一致。
- **Cron / 定时调度**（[#121953](https://github.com/openclaw/openclaw/issues/121953)、[#45494](https://github.com/openclaw/openclaw/issues/45494)、[#84983](https://github.com/openclaw/openclaw/issues/84983)）三条互不相同的根因都在"调度即占用事件循环"或"调度即被外部降级"上，是运维侧的真实痛点。

---

## 5. Bug 与稳定性

### P0 / 数据安全
- [#123327](https://github.com/openclaw/openclaw/issues/123327) **Shared state WAL checkpoint 把索引页直接覆盖 SQLite page 1（本地 ext4 / NVMe 实测两次）** — 头部被索引 leaf 页覆盖，数据库实质损坏。需 P0 关注，无挂 PR，`clawsweeper:needs-info`。

### P1（按议题归类）
| 议题 | Issue | 修复信号 |
|---|---|---|
| 2026.8.1 升级回归（7 类阻塞） | [#134570](https://github.com/openclaw/openclaw/issues/134570) | 仅 1 👍，无 linked PR；多个子问题已 close，整体仍 OPEN |
| API key 耗尽后无法恢复（即使重启 + 充值） | [#135835](https://github.com/openclaw/openclaw/issues/135835) | `clawsweeper:fix-shape-clear`，**可入队**，无 PR |
| Cron 在 DeepSeek 上 stall | [#121953](https://github.com/openclaw/openclaw/issues/121953) | 无 PR，`needs-product-decision` |
| MCP 子会话注入失效 | [#85030](https://github.com/openclaw/openclaw/issues/85030) | 无 PR，`needs-maintainer-review` |
| Telegram watchdog 误 tombstone | [#127229](https://github.com/openclaw/openclaw/issues/127229) | 无 PR |
| dev-channel `EUNSUPPORTEDPROTOCOL: workspace:*` | [#123073](https://github.com/openclaw/openclaw/issues/123073) | 有 linked PR（修复在审） |
| 子进程 zombie 累积 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 无 PR |
| Gateway V8 heap OOM → 自动恢复导致 7 核 dump 循环 | [#115424](https://github.com/openclaw/openclaw/issues/115424) | 无 PR |
| Slack thread 回复可生成但不可投递 | [#96692](https://github.com/openclaw/openclaw/issues/96692) | **已闭环**，有 linked PR |
| `memory_search` dirty 维护并发全量重建 | [#134337](https://github.com/open

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：** 2026-09-03
**覆盖项目：** 10 个（OpenClaw / NanoBot / Hermes Agent / IronClaw / ZeroClaw / CoPaw / NanoClaw / LobsterAI / Moltis / PicoClaw）
**数据基准：** 各项目 GitHub 公开 API 过去 24 小时快照

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正进入 **"密集合入 + 架构收敛"** 的成熟期：一方面，OpenClaw、ZeroClaw 等头部项目单日合并/审阅量达 500 级规模，社区呈现工业化协作特征；另一方面，10 个项目**均未单独进入"产品级稳定"**阶段，普遍在处理多智能体路由、Provider 抽象、状态持久化等共性架构债。可观察到的三条主线趋势是：**多智能体语义显式化**（从"配置存在但悄悄失效"走向"显式 ownership + 投递契约"）、**MCP 工具生态的工业化落地**（涉及安全、白名单、流式回收），以及 **Session/Context 治理成为新的工程重心**（token 估算精度、压缩触发、记忆可追溯性）。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 版本发布 | 核心动作 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 (活 353 / 关 147) | 500 (待 374 / 关 126) | 无 | 2026.8.1 升级回归集中清理；多 Agent 路由；Android Realtime 真机修复 | ⭐⭐⭐⭐⭐ 高活跃 / 治理扎实 |
| **ZeroClaw** | 50 (活 35 / 关 15) | 50 (待 47 / 关 3) | 无 | RFC v5 投票；S0 安全洞修复评审；上下文治理重构 | ⭐⭐⭐⭐ 高活跃 / 架构收敛 |
| **Hermes Agent** | 48 (净增) | 44 (净增) | 无 | state.db 韧性链修复；RealtimeVoiceProvider ABC RFC；MCP 双 PR 并行 | ⭐⭐⭐⭐ 高活跃 / 治理健康 |
| **CoPaw** | 25 (关 9) | 35 (合 10) | **v2.2.0-beta.7** | ReMe embedding 归一化；Console UI 重塑；MCP 安全白名单 | ⭐⭐⭐⭐ 高速迭代 / 节奏明确 |
| **IronClaw** | 10 (关 4) | 26 (合 10) | 无 | Slack/Telegram reply 串流修复；CI 冷编译消除；TS 类型债清理 | ⭐⭐⭐⭐ 治理密集 / 质量导向 |
| **NanoBot** | 2 | 23 | 无 | Context 架构重构；OAuth 持久化；安全路径穿越修复 | ⭐⭐⭐ 中等活跃 / 安全聚焦 |
| **NanoClaw** | 2 | 21 (合 3) | 无 | supply chain 网关；Provider 契约重构；Teams/WhatsApp 修复 | ⭐⭐⭐ 中等活跃 / 核心驱动 |
| **LobsterAI** | 8 (关 6) | 10 (合 3) | 无 | in-app browser 全量回退；IM/Cowork 并发三件套 | ⭐⭐⭐ 中等活跃 / 质量克制 |
| **Moltis** | 2 | 3 | **3 个版本** (20260902.01/.02/.03) | 钩子生命周期派发补齐；reasoning max 档位 | ⭐⭐⭐ 频繁发版 / 单一贡献者 |
| **PicoClaw** | 1 | 1 (关 1) | 无 | QQ 频道协议适配停滞；PR #1349 6 个月未合并 | ⭐⭐ 低活跃 / 渠道受阻 |
| NullClaw / TinyClaw / ZeptoClaw | 0 | 0 | — | 过去 24h 无活动 | ⭐ 静默 |

**关键观察**：OpenClaw 与 ZeroClaw 占据"日活吞吐"绝对头部；Hermes Agent 与 CoPaw 是次梯队主力；NullClaw、TinyClaw、ZeptoClaw 三项目连续静默，建议关注是否进入维护期或归档期。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 与同类对比 |
|---|---|---|
| **单日吞吐** | 500 Issue + 500 PR 更新 | **约为 ZeroClaw 的 10 倍**、Hermes Agent 的 10 倍 |
| **多 Agent 成熟度** | 显式路由（`AgentSelectionRequiredError`）、子智能体投递、子会话 MCP 注入 | 同类中**唯一系统化暴露该议题的项目**（#85030 6 👍 为今日全榜最高） |
| **平台覆盖** | Slack/Telegram/Discord/Feish/Matrix/Android Realtime | Hermes Agent 偏 Linux/Desktop；CoPaw 偏 WeCom/WeChat；PicoClaw 偏 QQ |
| **架构特征** | 会话所有权显式、投递语义（tombstone/watchdog）、多账号 profile | ZeroClaw 走 RFC 治理 + adapter；IronClaw 走 Provider 抽象 |
| **核心议题** | 2026.8.1 升级回归清理 + 投递语义边界 | 强调"沉默失败"是主要工程债 |
| **社区规模** | 评论/反应数据丰富（👍 数显式） | 大多数同类项目缺乏有效的互动数据 |

**OpenClaw 的差异化优势**：
1. **用户场景覆盖最广**——IM 投递、Realtime 语音、cron 调度、多 agent 协作同时在跑；
2. **多智能体语义走在前列**——`AgentSelectionRequiredError` 显式化、子智能体结果丢失修复链（#118625 #124343）等都在其他项目以更模糊形式存在；
3. **"沉默失败"治理意识强**——Telegram watchdog 与 session observer 的判定冲突在 OpenClaw 已被显式标签化（`delivery_ambiguous` / `tombstone`），其他项目（如 ZeroClaw #10563）才刚开始识别同类问题。

**OpenClaw 的相对短板**：单日 147 条关闭中"维护者主动归档 stale"占比待观察；session 路由反向不可达（Slack/Matrix）暴露其分布式设计的复杂性。

---

## 4. 共同关注的技术方向

### 4.1 多智能体语义显式化 ⚡ **最热议题**
| 项目 | 具体诉求 | 代表 Issue |
|---|---|---|
| OpenClaw | 子智能体结果不被投递；MCP 注入失效；显式 ownership | #85030 (#6 👍)、#126360、#65374 |
| CoPaw | 主 agent 需主动查询子 agent 状态；多 agent 协作"主动性" | #7450 (7 评论) |
| IronClaw | 子 agent 审批/认证门禁需触达父 agent inbox | #8046 |
| Hermes Agent | Bot 群聊 Desktop 关闭后继续运行（gateway-owned authority） | #97681 |

**统一诉求**：从"配置存在但悄悄失效"走向"显式 ownership + 投递契约 + 子智能体可观测性"。

### 4.2 MCP 工具生态工业化
| 项目 | 议题 | 状态 |
|---|---|---|
| OpenClaw | MCP loopback 不自动重握手；MCP 子会话注入失效 | #98435、#85030 |
| Hermes Agent | boolean schema 让整服 park；OAuth context.lock 毒化；macOS 300+ node OOM | #81880、#101669/101756 |
| CoPaw | `card.config.tools` 仅展示不生效（安全漏洞） | #7504 已修 |
| ZeroClaw | MCP 工具图像在 OpenAI 兼容端返回 400 | #10501 |
| NanoBot | MCP 工具结果流式缓冲过早清理 | #5637 |

### 4.3 Session / Context 治理
| 项目 | 议题 | 关键 PR/Issue |
|---|---|---|
| OpenClaw | `memory_search` dirty 维护并发全量重建 | #134337 |
| NanoBot | tiktoken 估算比 API 实际值低 30-50%，压缩从不触发 | #5403（已挂 18 天） |
| ZeroClaw | 32K token 硬上限忽略配置；bootstrap 文件 6000 字符静默截断 | #10068、#10523 |
| IronClaw | Loop-host 流式 delta 重复清洗（1000 次→1 次） | #8043 |
| Moltis | 钩子生命周期派发补齐（含 `AgentEnd`/`MessageSent`） | #1257 |

### 4.4 供应链与安全加固
| 项目 | 议题 | 状态 |
|---|---|---|
| NanoClaw | `minimumReleaseAge` 网关被配置位置错误绕过 | #3492（未合并 11 天） |
| NanoClaw | `validateSpec` allowlisted-extra 挂载绕过 | #3680 |
| NanoBot | 会话键路径穿越（`../../etc/passwd`） | #5633（已有 fix） |
| ZeroClaw | independent delegate 绕过 `block_high_risk_commands` | #10188（S0） |
| CoPaw | 安全沙箱被突破；CRITICAL 规则被直接拒绝 | #7511、#7496 |

### 4.5 Provider 抽象与可插拔架构
- **NanoClaw**：`speed` 属性作为 agent group core-owned 配置（zvi-fried 一人驱动 6 个相关 PR）；
- **NanoBot**：Codex OAuth 持久化、prompt cache 亲和性、Copilot OAuth 同源问题；
- **CoPaw**：Provider 兼容层修复（`extra_headers` 转发、工具参数类型校验）。

---

## 6. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特征 |
|---|---|---|---|
| **OpenClaw** | 多智能体协作 + IM 投递 + Android Realtime | 中大型部署 + 多平台接入 | 会话所有权 + 投递语义显式化 |
| **ZeroClaw** | RFC 治理 + 安全契约 + 内存生命周期 | 架构师 + 安全敏感部署 | 治理流程化、ADR 清单可见 |
| **Hermes Agent** | SQLite 韧性 + Realtime Voice + 多端桌面 | 桌面端长期 Bot 部署者 | gateway-owned authority + Footprint Ladder |
| **CoPaw** | v2.2.0 高频迭代 + 中文生态（WeCom/WeChat） | 国内企业 + 多平台接入 | Beta 节奏 + Creator 子项目同步 |
| **IronClaw** | TypeScript 类型债清理 + CI 性能 + Reply 正确性 | 工程化严谨团队 | 修复合入密度高、CI 治理优先 |
| **NanoBot** | Context 治理 + OAuth 跨平台持久化 | 容器化 + 多 Provider 用户 | Memory 模块重构（runner-owned compaction） |
| **NanoClaw** | Supply chain 闸门 + Provider 契约统一 | Fork + 自定义 adapter 部署者 | zvi-fried 单核心维护者驱动 |
| **LobsterAI** | IM/Cowork 并发安全 + 全量回退文化 | 网易系生态用户 | 克制发版、宁回退不仓促 |
| **Moltis** | 钩子生命周期 + 推理档位完备 | 事件驱动集成方 | 日递增版本号、单贡献者密集迭代 |
| **PicoClaw** | QQ 频道（唯一卖点） | QQ 生态用户 | 当前阻塞在协议适配层 |

---

## 6. 社区热度与成熟度

### 第一梯队：高活跃 + 高复杂度（质量巩固阶段）
- **OpenClaw**：日吞吐 500/500，是行业风向标但技术债深；
- **ZeroClaw**：RFC 驱动治理，进入"代码沉淀 + 安全复核"密集期；
- **Hermes Agent**：state.db 韧性显著增强，Realtime Voice 是下个版本主线。

### 第二梯队：高频迭代 + 节奏明确（快速迭代阶段）
- **CoPaw**：v2.2.0-beta.7 已发布，1-2 周内有望 GA；
- **IronClaw**：10 个 PR 合入，CI/类型债系统性清理；
- **NanoBot / NanoClaw**：架构重构 + 安全加固双轮驱动；
- **Moltis**：单日 3 版本，但单一贡献者风险高。

### 第三梯队：维护期 + 局部修复
- **LobsterAI**：质量克制但实质性进展有限；
- **PicoClaw**：QQ 协议适配停滞，活跃度低；
- **NullClaw / TinyClaw / ZeptoClaw**：连续静默，需关注是否进入归档。

---

## 7. 值得关注的趋势信号

### 趋势 1：多智能体语义从"可选"走向"必选"
**信号**：OpenClaw #85030（6 👍 今日全榜最高）、CoPaw #7450、IronClaw #8046、ZeroClaw #9487 RFC v5 都在同一周内显式化多智能体议题。
**对开发者的参考价值**：构建 Agent 框架时，必须在协议层区分主从 agent 的所有权、工具可见性、消息可投递性，否则会被用户视为"沉默失败"。

### 趋势 2：MCP 已从"集成特性"升级为"安全/稳定性主战场"
**信号**：Hermes Agent 同时开 2 个 P2 + 1 个 P1 修复 MCP 问题（#81880、#101669、#101756）；OpenClaw #85030、ZeroClaw #10501、CoPaw #7504 同类。
**对开发者的参考价值**：MCP 子进程生命周期、boolean schema 校验、OAuth 异步上下文、stale 连接回收是 MCP 集成的四个典型陷阱，任何一个都会被生产环境放大。

### 趋势 3：Context 治理正在"标准化"
**信号**：NanoBot #5403 用 API 上报 token 替代本地估算；ZeroClaw #9535 用 `context_compact_ratio` 替代硬编码 32K；IronClaw #8043 减少 1000 次→1 次的 delta 清洗；Moltis #1253 增加 `max` 推理档位。
**对开发者的参考

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-03

## 1. 今日速览

NanoBot 今日维持高度活跃的开发节奏：过去 24 小时共产生 23 条 PR 更新与 2 条 Issue 更新，PR 提交与审阅频次显著高于近一周均值。仓库无新版本发布，但代码侧有 4 条 PR 完成合并/关闭流程，整体仍处于"密集合入 + 安全加固"并行的阶段。从主题分布看，**Provider 与 Channel 基础设施的稳定性**（OAuth 凭据持久化、Matrix 流式重试、Codex 提示缓存亲和性）成为本次更新主轴，**Agent Loop 内存与上下文治理**紧随其后。社区健康度良好，但绝大多数 PR 仍处 OPEN 状态、缺乏评论互动，存在审阅积压风险。

## 2. 版本发布

⚠️ 今日无新版本发布。建议关注合并队列中的高优先级 PR（如 #5625、#5633、#5403）一旦合入，可能触发下一次补丁版本发布。

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 作者 | 影响 |
|---|---|---|---|
| [#5568](https://github.com/HKUDS/nanobot/pull/5568) | refactor(agent): let runner own context compaction | chengyongru | 将本地请求级上下文压缩流程从 Memory 模块下放至 `AgentRunner`，主动对话可在 Runner 内同步触发压缩——这是上下文治理链路的关键架构调整。 |
| [#5623](https://github.com/HKUDS/nanobot/pull/5623) | fix(agent): drop empty active-task groups after tasks finish | wylovelyi | 修复 #5428。修复长生命周期网关中 `_active_tasks` 字典因空集合残留导致的内存泄漏（fixes #5428）。 |
| [#5625](https://github.com/HKUDS/nanobot/pull/5625) | feat(webui): guide first-run AI setup | Re-bin | 改善首启动体验：以中性文案"Choose your AI"替换旧的"Model not configured"警告，并直接复用 Models 设置面板，避免重复引导流。 |

**整体评估**：今日合入的三条 PR 覆盖**架构重构 + 内存稳定性 + 新用户体验**三个维度，项目基线质量稳步抬升。

## 4. 社区热点

| 标题 | 类型 | 互动度 |
|---|---|---|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) [enhancement] Let a runtime-context block opt out of history persistence (`ephemeral` blocks) | Issue | 💬 2 评论、创建于 8/28 |
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) [enhancement] 在 webui 里面展示上下文、模型速度这些信息 | Issue | 创建于 9/2 |

**诉求分析**：
- **#5586** 反映用户对"运行时上下文生命周期"的精细化诉求——目前 `append_runtime_context` 默认将所有块持久化进会话历史（`agent/loop.py:725-731`），无法区分"本次请求可见"与"长期可见"的语义。这是典型的高级用户对"会话控制粒度"的要求。
- **#5631** 是中文社区提交的体验型诉求（"能够直观看到模型的速度和上下文信息"），参考对象为 DeepSeek Harness——说明 WebUI 用户对**可观测性（observability）** 的需求正在凸显。

> 💡 注：因大多数 PR 评论数未在数据中给出，今日 PR 互动度难以横向比较，建议后续日报补全评论数指标。

## 5. Bug 与稳定性

按严重程度排列（**P1 优先处理**）：

### 🔴 P1 高优先级
| PR | 描述 | 修复 PR 状态 |
|---|---|---|
| [#5633](https://github.com/HKUDS/nanobot/pull/5633) **fix(session): reject session keys with path traversal components** | 会话键直接拼接为文件路径，存在 `../../etc/passwd` 路径穿越风险（修复 [#5564](https://github.com/HKUDS/nanobot/issues/5564)）。新增 `JsonlSessionStore.validate_session_key()` 在持久化层统一校验。 | 🟢 **已有 fix PR 待审** |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) **fix(memory): use API-reported prompt tokens to trigger consolidation** | 本地 tiktoken 估算普遍比 API 实际值低 30–50%，导致 token 压缩从未触发，**可能引发上下文窗口静默溢出**（修复 [#5402](https://github.com/HKUDS/nanobot/issues/5402)）。 | 🟢 **已有 fix PR**，但仍 OPEN（已挂起 18 天） |

### 🟡 P2 中优先级
| PR | 描述 |
|---|---|
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) fix(codex): persist OAuth tokens in Nanobot data directory | Codex OAuth 凭据当前依赖 oauth-cli-kit 的平台数据目录，**容器部署可能丢失凭据**。 |
| [#5638](https://github.com/HKUDS/nanobot/pull/5638) fix(copilot): store OAuth token in data directory | GitHub Copilot 同类问题，方案一致。 |
| [#5637](https://github.com/HKUDS/nanobot/pull/5637) fix(matrix): propagate stream delivery failures | Matrix `send_delta()` 吞掉发送失败并过早清理流缓冲，重试策略失效。 |
| [#5632](https://github.com/HKUDS/nanobot/pull/5632) fix(provider): preserve Codex prompt cache affinity | Codex 提示缓存路由键未稳定派生，每次请求都会击穿缓存，**性能与成本均受影响**。 |
| [#5635](https://github.com/HKUDS/nanobot/pull/5635) fix(sdk): preserve queued events on stream close | 关闭已满流队列时丢失最老未读事件。 |
| [#5634](https://github.com/HKUDS/nanobot/pull/5634) fix(channels): bound origin reply fingerprint cache | `ChannelManager._origin_reply_fingerprints` 无界增长，长生命周期网关内存累积。 |
| [#5630](https://github.com/HKUDS/nanobot/pull/5630) fix(agent): add size guardrails to Dream memory files and requests | **回归问题** ⚠️：#5622 移除 `_DREAM_FILE_EMBED_CAP = 8000` 后，Dream 管理的 SOUL.md / USER.md / MEMORY.md 无上限增长，每次请求均注入。 |

**总结**：今日共识别 2 项 P1（**含 1 项安全漏洞**）、7 项 P2 Bug，其中 OAuth 凭据持久化与 Codex 缓存亲和性是当下最值得合并的方向。

## 6. 功能请求与路线图信号

| 来源 | 功能 | 推进状态 |
|---|---|---|
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | ephemeral 运行时上下文块（不持久化） | 🟢 [#5627](https://github.com/HKUDS/nanobot/pull/5627) 已提交实现 PR，可纳入下个版本 |
| [#5631](https://github.com/HKUDS/nanobot/issues/5631) | WebUI 展示上下文/模型速度等元信息 | ⚪ 暂无 PR，建议维护者认领 |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) | MiniMax 音乐生成能力与工具契约发现 | 🟢 PR 已开，挂起 1 个月未合并 |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | Codex Langfuse tracing 支持 | 🟢 PR 已开，原生 SDK 路径，挂起 10 天 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | heartbeat `isolatedSession` 配置（共享会话） | 🟡 **挂起超 2 个月**，需维护者决策 |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | Telegram 富文本流式消息支持 | 🟢 PR 已开，作者声明本周内会自审 |
| [#5620](https://github.com/HKUDS/nanobot/pull/5620) | cron 可配置投递目标 + 批量归档 | 🟢 PR 已开，WebUI 管理界面同步上线 |
| [#5627](https://github.com/HKUDS/nanobot/pull/5627) | 运行时上下文 ephemeral 标记支持 | 🟢 与 #5586 直接对应，可合并 |

**路线图信号**：可观测性（context/速度展示）、模型厂商生态扩展（MiniMax 音乐、Codex 追踪、Copilot/Codex OAuth）、会话级精细控制（ephemeral / heartbeat shared session）是当下社区与贡献者共同推动的三大主题。

## 7. 用户反馈摘要

受 GitHub API 字段限制，今日仅 Issue #5586 显式带有 2 条评论（具体内容未在数据中暴露）。可从已有 Issues 摘要中提炼出以下用户痛点：

- **🔧 高级用户痛点**：现有 `get_history(include_runtime_context=True)` 默认为 `True`，无法表达"仅本次请求可见"的运行时上下文语义，迫使用户接受无差别的历史膨胀。
- **👀 终端用户痛点**（Issue #5631）：WebUI 无法直观查看模型上下文用量与响应速度，与 DeepSeek Harness 等竞品相比**缺少实时可观测性面板**，影响用户对模型表现与成本控制的判断。
- **🐛 隐式性能反馈**：#5402 表明已有用户在长上下文场景下遭遇"压缩未触发 / 上下文窗口溢出"问题，反映对 tiktoken 本地估算精度的信任正在丧失。

> ⚠️ 满意度数据缺失：建议后续采集 PR 评分（👍 / 👎）与 Issue Reactions 字段以丰富反馈维度。

## 8. 待处理积压（提醒维护者关注）

按挂起时长排序：

| # | 标题 | 创建时间 | 挂起时长 |
|---|---|---|---|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | feat(heartbeat): add isolated_session config | 2026-06-26 | **69 天** ⚠️ |
| [#5212](https://github.com/HKUDS/nanobot/pull/5212) | feat: add MiniMax music guidance | 2026-08-02 | 32 天 |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | fix(memory): use API-reported prompt tokens | 2026-08-16 | 18 天 |
| [#5446](https://github.com/HKUDS/nanobot/pull/5446) | fix(codex): persist OAuth tokens | 2026-08-19 | 15 天 |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | feat(provider): langfuse tracing for codex | 2026-08-24 | 10 天 |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | feat(agent): bound reasoning replay | 2026-08-30 | 4 天 |
| [#5586](https://github.com/HKUDS/nanobot/issues/5586) | ephemeral 运行时上下文块（Issue） | 2026-08-28 | 6 天 |

**维护建议**：
1. 重点关注 [#4551](https://github.com/HKUDS/nanobot/pull/4551) 与 [#5403](https://github.com/HKUDS/nanobot/pull/5403)——前者挂起超 2 个月，后者涉及 P1 内存稳定性风险；
2. 多条 Provider 方向 PR（#5212、#5446、#5520、#5638）存在重叠或互补，建议指派一名 Owner 统一评审 Code Provider 主题。

---

📌 **日报小结**：NanoBot 今日在**代码合入频次**与**安全/稳定性议题覆盖度**上表现良好，但**评审与沟通密度**（评论数普遍为 0）以及**长期挂起 PR** 是下一阶段需要重点关注的项目治理指标。建议下一日重点跟踪 P1 修复 PR（#5633、#5403）的合并进展与 WebUI 可观测性诉求（#5631）的认领情况。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-09-03

> 数据源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) · 采样窗口：过去 24 小时

---

## 一、今日速览

Hermes Agent 今日维持高强度迭代节奏：Issues 净增 48 条、PR 净增 44 条，但 **0 个版本发布**，说明仓库进入"密集合并/集中清理"前的预热阶段。讨论焦点集中在三大方向——**state.db/SQLite 稳定性**（多个相关修复被关闭）、**Realtime Voice Provider ABC 标准化**（RFC #77111 引发多 PR 并行）、**MCP 服务器健壮性**（boolean schema / OAuth / stdio 孤儿三类问题）。社区活跃度以 Issue #66616（Skills Index 监控告警，144 条评论）一枝独秀，多个 P1 问题（state.db 物理损坏、Cloud 503、MCP 内存泄漏）已积累成熟 fix PR，治理质量整体健康。

---

## 二、版本发布

**无新版本。** 建议关注 PR #97634（`update_cmd.py` 11,250 行重构为职责分明的模块）一旦合并可能触发 v0.22 系列 pre-release。

---

## 三、项目进展

今日有 **3 个 PR 已关闭/合并**，均为 state.db 与 gateway 稳定性方向的高价值修复：

| PR | 标题 | 影响 |
|---|---|---|
| [#86599](https://github.com/NousResearch/hermes-agent/pull/86599) | **fix(state): drain stale read-only pool after 'file is not a database' self-heal** | 解决兄弟进程截断 state.db 后只读连接池持续报错的自愈路径问题，配合 #87410 形成完整的 SQLite 韧性修复链 |
| [#87410](https://github.com/NousResearch/hermes-agent/pull/87410) | **fix(state): rebuild ordinary B-tree indexes after runtime FTS rebuild** | 在 FTS 重建后修复普通 B-tree 索引（如 `idx_sessions_session_key`）的连锁损伤，对应 #98077 现场报告 |
| [#98583](https://github.com/NousResearch/hermes-agent/pull/98583) | **fix(gateway): reconcile unrecorded streaming previews against visible prefix** | 关闭 #98552：流式响应的 finalize 失败场景下，`delivered_final_matches` 返回 None 导致消息丢失的问题 |

**推进评估：** 三个 PR 均属于"基础设施静默修复"，用户感知低但对生产环境至关重要。今日整体推进可视为"治理债务清理 + 架构铺垫"阶段，距离下一个用户可感版本发布（预计涉及实时语音能力）还需 1–2 周合并窗口。

---

## 四、社区热点

按评论数排序的活跃讨论：

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills Index 监控告警（144 评论）**
   - 自动探针报告 `/docs/api/skills-index.json` 索引陈旧（29.8h vs 26h 上限），关联 `.github/workflows/skills-index.yml` cron 与 deploy 流水线
   - **诉求分析：** 这是一个长期未根治的"静默腐烂"问题——索引本身不影响功能但破坏 Skills Hub 文档可发现性。144 条评论规模暗示已触发自动化扫帚机制（标签 `sweeper:risk-automation`），需要一次性 root-cause 而非继续打补丁

2. **[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — Bot Group Chats after Desktop closes（23 评论）**
   - 用户希望：Bot 加入的群聊在 Desktop 客户端关闭后仍能由 gateway 持续托管。Gateway-owned authority、same-gateway runner、scoped cross-gateway transport 已合入 main，剩下的是把基础接上桌面会话生命周期
   - **诉求分析：** 这是 Hermes 多端部署核心承诺——"Bot 一旦部署就脱离客户端生命周期"。社区对此有明确期待

3. **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111) — RealtimeVoiceProvider ABC RFC（22 评论 👍2）**
   - 触发 AGENTS.md Footprint Ladder L208：当同一类集成 PR ≥ 3 个时，不要逐个合并，而是先设计 ABC + orchestrator
   - 当前已有 PR #95147、#101808、#21504 三个并行实现等待该 ABC 落地

4. **[#20765](https://github.com/NousResearch/hermes-agent/issues/20765) — Voice mode in browser dashboard（9 评论 👍6）**
   - WebRTC 音频捕获补足 SSH/浏览器 PTY 场景下的麦克风权限，👍6 是今日 Issue 最高点赞

---

## 五、Bug 与稳定性

按严重程度（P1 → P3）整理今日新增/活跃的 Bug：

### P1（生产事故级，已有 fix PR）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) | **state.db 物理跨 B-tree 损坏（SQLite 3.50.4 WAL），malformed 检测后仍写入** | ✅ 已关闭，配合 #86599 + #87410 修复链 |
| [#94558](https://github.com/NousResearch/hermes-agent/issues/94558) | **Hermes Cloud agents (sjc)：API 503 "Auth provider nous unreachable"，token 刷新与重启均无效** | ⚠️ 待 fix，需 Cloud 端响应 |
| [#81880](https://github.com/NousResearch/hermes-agent/issues/81880) | **macOS Desktop 下 MCP stdio 子进程累积导致 OOM（300+ node、126 mcp 进程）** | ⚠️ 待 fix |

### P2（功能阻塞）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#101800](https://github.com/NousResearch/hermes-agent/issues/101800) | **Kanban 限流退出哨兵（exit 75）不可达，配额耗尽被误判为干净退出并 crashloop** | ✅ PR [#101816](https://github.com/NousResearch/hermes-agent/pull/101816) 待合并 |
| [#101748](https://github.com/NousResearch/hermes-agent/issues/101748) | **#52945 修复后 HERMES_DESKTOP=1 场景仍服务 Electron renderer 给浏览器** | ⚠️ 待 fix（#52945 已关闭但留缺口） |
| [#76457](https://github.com/NousResearch/hermes-agent/issues/76457) | **`hermes config set` 将 list-of-strings 写成字符串化 JSON literal** | ⚠️ 待 fix |
| [#101644](https://github.com/NousResearch/hermes-agent/issues/101644) | **v0.21.0 /v1/responses named conversation 重复存储历史（2 turns: 3→8 messages）** | ⚠️ 待 fix |
| [#100561](https://github.com/NousResearch/hermes-agent/issues/100561) | **Nix 包未包含 hermes_state_registry 模块导致 gateway 启动失败** | ⚠️ 待 fix |
| [#20548](https://github.com/NousResearch/hermes-agent/issues/20548) | **Feishu root_id fallback 导致所有回复被强制线程化** | ⚠️ 待 fix |
| [#101669](https://github.com/NousResearch/hermes-agent/issues/101669) / [#101756](https://github.com/NousResearch/hermes-agent/issues/101756) | **MCP boolean property schema 让整服 park / OAuth async_auth_flow context.lock 毒化** | ✅ 双 PR 并行修复 [#101804](https://github.com/NousResearch/hermes-agent/pull/101804) [#101810](https://github.com/NousResearch/hermes-agent/pull/101810) |

### P3（体验降级）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#101744](https://github.com/NousResearch/hermes-agent/issues/101744) | `rollback.diff` 4000 字符静默截断且无 `truncated` 标志 | ⚠️ 待 fix |
| [#101783](https://github.com/NousResearch/hermes-agent/issues/101783) | Discord typing 指示器 idle 后持续泄漏（`_keep_typing` 任务泄漏） | ⚠️ 待 fix |
| [#101786](https://github.com/NousResearch/hermes-agent/issues/101786) | Windows 项目级技能在项目会话中无法 / 唤醒（#52945 只修了一半） | ⚠️ 待 fix |
| [#101742](https://github.com/NousResearch/hermes-agent/issues/101742) | Dashboard 打开会话静默跳到子 agent 分支 transcript | ⚠️ 待 fix |
| [#101782](https://github.com/NousResearch/hermes-agent/issues/101782) | Desktop Preview webview 吞掉 `window.open()` 多标签导航 | ⚠️ 待 fix |
| [#69637](https://github.com/NousResearch/hermes-agent/issues/69637) | 异步 delegation turn 重新触发 300s preflight 压缩超时（回归候选） | ⚠️ 待 fix |

**稳定性画像：** P1 现场报告中 1/3 已有合并修复，state.db 韧性显著增强；MCP 方向今日两个独立但相关的 P2 同时被 PR 并行修复，说明该模块已进入主动重构阶段。

---

## 六、功能请求与路线图信号

### Realtime Voice —— 高确定性纳入
- [#77111](https://github.com/NousResearch/hermes-agent/issues/77111)（RFC）
- [#101808](https://github.com/NousResearch/hermes-agent/pull/101808)（TheSmokeDev：contract + orchestrator + 首个 built-in provider）
- [#95147](https://github.com/NousResearch/hermes-agent/pull/95147)（kvnloo：最小 provider-neutral seam）
- [#21504](https://github.com/NousResearch/hermes-agent/pull/21504)（RationallyPrime：Discord Realtime voice 模式）

**判断：** 三个 PR 正在按 AGENTS.md 的 Footprint Ladder 收敛到 ABC，预计作为下个 minor 版本的主打特性。

### 桌面生命周期 / Bot 持久化
- [#97681](https://github.com/NousResearch/hermes-agent/issues/97681)（Bot 群聊 Desktop 关闭后继续运行）
- [#79579](https://github.com/NousResearch/hermes-agent/issues/79579)（Desktop 退出守卫在 remote 模式下说谎）

**判断：** 与"Bot 即基础设施"的产品叙事一致，可能在 0.22 版本以"remote/headless desktop"开关形式落地。

### Cron 能力扩展
- [#20140](https://github.com/NousResearch/hermes-agent/issues/20140)（per-job opt-in `send_message`）
- [#101821](https://github.com/NousResearch/hermes-agent/pull/101821)（cron email 用 job 名作为主题）
- [#101819](https://github.com/NousResearch/hermes-agent/pull/101819)（脚本化 cron 的 bare-platform home target 可连续化）

**判断：** Cron 邮件主题修复门槛低，几乎肯定纳入；`send_message` opt-in 是设计决策而非简单 bug，需要 `needs-decision`。

### Kanban 健壮性
- [#23209](https://github.com/NousResearch/hermes-agent/issues/23209)（任务有效性、preflight dispatch、worker ownership）
- [#101800](https://github.com/NousResearch/hermes-agent/issues/101800) + [#101816](https://github.com/NousResearch/hermes-agent/pull/101816)（限流哨兵）

**判断：** Kanban 正从 prompt 治理转向代码治理，是项目工程成熟度的标志。

### 多模态实时对话
- [#53836](https://github.com/NousResearch/hermes-agent/issues/53836)（Live Multimodal Voice Mode，5 评论 👍4）

**判断：** 用户真实需求明确，与 Realtime Voice 主线重叠，下个版本若合并 RealtimeVoiceProvider，此项大概率被覆盖。

---

## 七、用户反馈摘要

从 Issues 评论中可提炼以下真实用户场景与痛点：

1. **多端/混合部署用户的"Bot 持久性"焦虑**
   - [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) 显示用户明确把 Hermes Bot 部署在 laptop / homelab / VPS 混合拓扑上，并希望 Bot 不被客户端生命周期绑架。社区已经认可 gateway-owned authority 这一架构原则。

2. **macOS Desktop + 16GB 内存用户的稳定性灾难**
   - [#81880](https://github.com/NousResearch/hermes-agent/issues/81880) 报告 300+ node 进程与 126 mcp 进程共存导致 OOM 和 jetsam，间接拖死 `claude --dangerouslySkipPermissions`。说明 MCP 资源回收在桌面端没有强制生命周期。

3. **生产环境 SQLite 用户的"信任裂缝"**
   - [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) 的现场报告极其详尽，包含 forensic recovery 路径——用户在 #86599 / #87410 修复前已不得不手动重建 state.db。这反映项目在"现场文档与自助恢复"方面还有改进空间。

4. **Cron 用户对"消息可追溯性"的失望**
   - [#101821](https://github.com/NousResearch/hermes-agent/pull/101821) 指出所有 cron 邮件都以 `Re: Hermes Agent` 主题到达，让拥有大量定时任务的用户无法分类。简单但严重影响日常使用。

5. **Windows 项目级技能用户的"半修复"挫败感**
   - [#101786](https://github.com/NousResearch/hermes-agent/issues/101786) 用户明确表达"之前已提交一次 bug 但只修一半"——这暴露了 issue-to-fix 的回归测试缺口。

6. **Hermes Cloud 用户的"沉默服务"焦虑**
   - [#94558](https://github.com/NousResearch/hermes-agent/issues/94558) sjc 区域从 8 月 25 日起持续 503，但 token 刷新与实例重启均无效，用户只能等待供应商层面响应。

---

## 八、待处理积压

按"重要性 × 停滞时长"提醒维护者关注：

| Issue | 标题 | 等待时间 | 标签 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | **Skills index 持续陈旧** | 已存在 ≥ 47 天 | sweeper:risk-automation |
| [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) | **RealtimeVoiceProvider ABC RFC 决策**

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期：** 2026-09-03
**数据来源：** github.com/sipeed/picoclaw
**报告周期：** 过去 24 小时

---

## 一、今日速览

PicoClaw 项目在过去 24 小时整体活跃度较低，Issues 与 PRs 各仅 1 条更新，且无新版本发布。社区讨论焦点集中在 QQ 频道适配功能上：一条关于 QQ 频道认证失败的 Bug 报告（[#3349](https://github.com/sipeed/picoclaw/issues/3349)）正在累积评论，而一条针对 QQ 频道附件解析与回复的增强 PR（[#1349](https://github.com/sipeed/picoclaw/pull/1349)）已被关闭。整体来看，项目处于"维护期 + 局部修复"状态，健康度中等，但 QQ 渠道集成明显成为当前的薄弱环节。

---

## 二、版本发布

**今日无新版本发布。** 上一版本状态未在本次数据中体现，建议关注仓库的 Releases 页面以获取最新版本信息。

---

## 三、项目进展

今日有 1 条 PR 被关闭，具体情况如下：

### ✅ 已关闭 PR：[#1349 feat(qq): support parsing and replying to more attachment types](https://github.com/sipeed/picoclaw/pull/1349)
- **作者：** aishannon
- **类型：** enhancement（功能增强）
- **领域：** channel / Go
- **创建时间：** 2026-03-11（约 6 个月前提交）
- **关闭时间：** 2026-09-02

**变更内容摘要：**
1. 支持解析 QQ 频道 Emoji 结构；
2. 支持处理 QQ 频道的语音、图片、视频、文件等入站消息；
3. 支持使用本地语音、图片、视频、文件附件进行回复（发送前自动上传）；
4. 优先使用 Markdown 消息回复，失败时降级处理。

**分析：** 该 PR 历经约 6 个月后被关闭，长期未合并（0 👍、无有效评论记录）说明维护者可能认为实现方式与项目路线不符，或与当前的 QQ Bot SDK 不兼容。结合今日活跃的 [#3349](https://github.com/sipeed/picoclaw/issues/3349) Bug 来看，QQ 频道集成可能存在底层协议/认证层面的根本性问题，导致该增强方向暂时搁置。该 PR 未被合并，但项目并未明显向前推进 QQ 渠道能力。

---

## 四、社区热点

### 🔥 唯一活跃 Issue：[#3349 QQ 频道无法正常使用](https://github.com/sipeed/picoclaw/issues/3349)
- **状态：** OPEN / BUG
- **作者：** bxwl5
- **创建：** 2026-08-30 ｜ **更新：** 2026-09-02
- **评论数：** 2 ｜ **👍：** 0
- **严重程度：** 高（功能完全不可用）

**核心问题：** 用户在 Docker 版本与 Linux x86 版本上均无法使用 QQ 频道功能，Gateway 日志持续报出 WebSocket 认证失败：

```
failed to get websocket info: code:401, text:{"message":"请求头Authorization参数格式错误",
"code":11241,"err_code":40011005,"trace_id":"362f9cb61315dbe886b44b5bfca9cf99"}
```

**诉求分析：** 这是 QQ 频道 Bot 与 PicoClaw 对接的关键链路问题，错误码 `11241` 与 `err_code 40011005` 提示 Authorization 请求头未按 QQ 开放平台最新规范传递。这反映出 PicoClaw 当前对 QQ 频道协议的适配可能存在版本滞后，用户既无法连接也无法降级使用，体验较差。

---

## 五、Bug 与稳定性

### 🐞 [严重] QQ 频道认证失败导致功能完全不可用
- **链接：** [#3349](https://github.com/sipeed/picoclaw/issues/3349)
- **影响范围：** 所有尝试接入 QQ 频道的部署（Docker 与 Linux x86 二进制均复现）
- **错误特征：** WebSocket 握手阶段即返回 HTTP 401，提示 Authorization 请求头格式错误
- **是否有修复 PR：** ❌ 暂无关联修复 PR，今日关闭的 PR #1349 属于附件解析方向，并未触及认证/连接层
- **建议优先级：** 🔴 高 — 应作为下个版本必修项

> 注：除上述 Bug 外，今日无其他崩溃、回归或稳定性报告。

---

## 六、功能请求与路线图信号

虽然今日没有显式的新功能请求 Issue，但综合已有信号，QQ 频道的完整能力建设是用户与贡献者共同关注的焦点：

| 方向 | 信号来源 | 可能性 |
|------|----------|--------|
| QQ 频道基础连接/认证修复 | Issue #3349 持续活跃 | 高（强制） |
| QQ 频道多媒体附件支持 | PR #1349（已关闭但代表需求） | 中（需重新设计） |
| QQ 协议适配层升级 | 错误码显示上游协议变化 | 高 |

**路线图研判：** 项目下一阶段若要恢复 QQ 渠道用户信任，需优先完成认证层修复，再评估是否吸收 #1349 的能力扩展（参考其实现思路）。建议维护者主动联系该 PR 作者 aishannon，避免社区贡献流失。

---

## 七、用户反馈摘要

来自 [#3349](https://github.com/sipeed/picoclaw/issues/3349) 的真实用户反馈：

- **痛点 1：跨平台一致性失败**
  > "目前测试过docker版本和Linux x86版本" 均复现同一错误 — 用户已尝试多种部署方式，凸显问题具有普遍性。

- **痛点 2：缺乏错误可读性**
  > Gateway 日志直接暴露 QQ 内部 trace_id 与 raw 错误码，普通用户难以自助排查，需要更友好的诊断信息。

- **使用场景：** 用户明确希望将 PicoClaw 部署为 QQ 频道内的自动化助手（典型 AI Agent 集成场景），但被阻断在最基础的握手阶段。

- **满意度：** 极低 — 无任何正向反馈，2 条评论均为问题讨论或寻求帮助。

---

## 八、待处理积压

| 编号 | 类型 | 创建时间 | 状态 | 风险提示 |
|------|------|----------|------|----------|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | PR（增强） | 2026-03-11 | 已关闭（未合并） | ⚠️ 6 个月生命周期、0 评论反馈，贡献者未获得明确结论，存在贡献者流失风险 |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | Issue（Bug） | 2026-08-30 | 开放中 | ⚠️ 高优先级 Bug 已开 4 天仍无维护者响应，需尽快 triage |

### 🚨 维护者建议

1. **立即响应 #3349**：QQ 频道认证错误属于阻塞性 Bug，建议指派维护者 24 小时内确认根因（很可能是 QQ 开放平台 Authorization 头规范变更）。
2. **明确 #1349 处置策略**：建议对长期未合并的贡献给出明确说明（关闭原因 / 重做建议），以维护开源社区协作氛围。
3. **建立 QQ 频道协议兼容矩阵**：在文档中标注已验证的 QQ Bot 协议版本，便于用户自助诊断。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 24 小时仅 1 条 PR 关闭 |
| 社区响应度 | ⭐⭐☆☆☆ | 活跃 Bug 4 天未获维护者回复 |
| 版本节奏 | ⭐☆☆☆☆ | 当日无新版本 |
| 渠道稳定性 | ⭐☆☆☆☆ | QQ 频道存在阻塞性 Bug |
| **综合** | **⭐⭐☆☆☆ 中等偏弱** | 建议进入下一开发周期前优先修复 QQ 协议适配 |

---

*报告生成时间：2026-09-03 ｜ 数据基准：GitHub 公开 API 快照*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-09-03

---

## 1. 今日速览

NanoClaw 项目今日呈现**中等偏高**的开发活跃度：过去 24 小时共 21 个 PR 更新、2 个 Issue 更新，其中 18 个 PR 仍待合并、3 个已关闭，**无新版本发布**。社区贡献集中在三条主线：(1) **供应链与安全加固**——`minimumReleaseAge` 网关、挂载安全绕过等高优先级修复；(2) **provider 抽象重构**——围绕 Codex/OpenCode 等多 provider 契约的统一，由核心贡献者 zvi-fried 主导；(3) **delivery / channels 健壮性**——处理断连适配器、Teams 用户命名空间、外发 MIME 类型等细节缺陷。项目整体在向"核心可控 + provider 可插拔"架构收敛，但仍有相当数量的 PR 处于积压待审状态。

---

## 2. 版本发布

**无新版本发布。** 24 小时内未检测到新的 release tag。

---

## 3. 项目进展（今日合并/关闭的 PR）

今日有 3 个 PR 关闭，性质涵盖**重复修复合并、安全策略落地、测试用例调整**：

| PR | 类型 | 影响 | 链接 |
|---|---|---|---|
| **#2973** | 修复（供应链安全） | 与 #3492 同主题，将 `minimumReleaseAge: 4320` 从 `pnpm:` 块中提至顶层，激活"新发布包需等 3 天方可安装"的供应链闸门；#2973 关闭表明 #3492（更新版本 + 回归测试）成为优选合并路径 | [PR #2973](https://github.com/qwibitai/nanoclaw/pull/2973) |
| **#3672** | 修复（测试） | `add-slack` 的 skill-directives 测试补全，使其与 slack-raw-text 行为对齐 | [PR #3672](https://github.com/qwibitai/nanoclaw/pull/3672) |
| **#3593** | 重构（测试） | Codex provider 的 `speed → service_tier` 渲染测试被 #3592 吸收，单独测试 PR 已无存在必要 | [PR #3593](https://github.com/qwibitai/nanoclaw/pull/3593) |

**整体判断**：今日项目在**实质性功能前进**上较为有限——三个被关闭的 PR 中，两个属于重复/合并清理，仅 #2973 / #3492 推进了关键安全策略落地。距离一个完整 release 仍有较多积压待消。

---

## 4. 社区热点

按互动量与时间新鲜度排序：

- **[Issue #3529 — `update-nanoclaw` skill 刷新破坏本地 adapter](https://github.com/qwibitai/nanoclaw/issues/3529)**（2 条评论，作者 glifocat）
  - 痛点：升级 skill 时，框架误判 `src/channels/index.ts` 中的 import 全部来自 skill，导致**用户自研的 adapter 要么验证失败要么被覆盖**，且**无 opt-out 机制**。
  - 信号：这是影响下游 Fork / 自定义部署者的关键升级路径问题。

- **[PR #3703 — 断连适配器不应消耗投递次数](https://github.com/qwibitai/nanoclaw/pull/3703)**（今日新建）
  - 抓住 `ChannelAdapter.isConnected()` 合约未被遵循的语义漏洞，反映社区对 adapter 契约一致性的关注。

- **[PR #3702 — `ncl tasks run` 应立即触发而非等下个 resync](https://github.com/qwibitai/nanoclaw/pull/3702)**（今日新建）
  - 关注 CLI 命令响应时延，反映开发者对核心调度回路"快路径"的诉求。

- **[PR #3592 — 新增 `speed` 推理属性（core-owned）](https://github.com/qwibitai/nanoclaw/pull/3592)**（多 area 涉及）
  - 由 zvi-fried 提出，建议在 agent group 上新增与 `model` / `effort` 平级的 `speed` 字段，由 provider 声明合法取值；是 provider 契约重构的一部分。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度（安全/正确性）

1. **[PR #3680 — `validateSpec` allowlisted-extra 挂载绕过](https://github.com/qwibitai/nanoclaw/pull/3680)**（作者 prathish-ks）
   - 标签：`area/security`, `area/credentials`, `area/containers`
   - 影响：容器挂载白名单存在逻辑绕过，可能允许未授权路径注入。已有 fix PR 提案，建议优先 review。

2. **[PR #3492 — `minimumReleaseAge` 实际未生效](https://github.com/qwibitai/nanoclaw/pull/3492)**（作者 amit-shafnir，与 #2973 同源）
   - 影响：`CLAUDE.md` 声明的"新版本需等 3 天"策略因配置键位置错误未激活，构成**文档-实现不一致**与潜在的供应链风险。已有 fix PR。

### 🟡 中严重度（功能异常）

3. **[PR #3703 — 断连 adapter 消耗投递重试次数](https://github.com/qwibitai/nanoclaw/pull/3703)**
   - 投递层未尊重 `isConnected()` 合约，导致已断连的 channel 浪费 3 次重试。已有 fix PR。

4. **[PR #3674 — Teams 不接受无 MIME 的外发文件](https://github.com/qwibitai/nanoclaw/pull/3674)**（作者 orgads）
   - 标签：`area/sessions`, `area/channels`
   - 影响：delivery 层未携带 MIME type，Teams 拒收。已有 fix PR。

5. **[PR #3596 — Teams 带冒号的用户 ID 命名空间不一致](https://github.com/qwibitai/nanoclaw/pull/3596)**（作者 orgads）
   - 标签：`area/channels`, `area/core`
   - 影响：card click 鉴权与 sender 解析对同一 ID 的命名空间判断不一致。已有 fix PR。

6. **[PR #3597 — gateway proxy 拦截 host.docker.internal 导致 HTTP MCP 不可达](https://github.com/qwibitai/nanoclaw/pull/3597)**（作者 orgads）
   - 标签：`area/containers`
   - 影响：网关 provider 启用时，宿主机本地 HTTP MCP 不可达。已有 fix PR。

### 🟢 低严重度（体验/测试）

8. **[PR #3673 — spawn-based mailbox 检查超时过短](https://github.com/qwibitai/nanoclaw/pull/3673)**（测试稳定性）
9. **[PR #3702 — `ncl tasks run` 延迟最多 60s 启动](https://github.com/qwibitai/nanoclaw/pull/3702)**（UX 延迟）

---

## 6. 功能请求与路线图信号

- **[Issue #3701 — `validateSpec` 是否接受 gateway 声明的凭证通道？](https://github.com/qwibitai/nanoclaw/issues/3701)**（作者 davekim917，今日新建）
  - 场景：维护一个运行 24 个 agent 组的 Fork（基于 OneCLI 网关模型，按请求在代理边界注入凭证）。
  - 诉求：希望 `contributedEnv` 之外再开一条"gateway-declared credential lane"，便于占位符替换和元数据传递。
  - 路线图契合度：与 #3680（validateSpec 安全强化）方向一致，但侧重点是扩展性**而非**收紧；维护者需判断是否作为下一版本的 provider 契约补充。

- **[PR #3592 — `speed` 属性作为 agent group 的 core-owned 配置](https://github.com/qwibitai/nanoclaw/pull/3592)**
  - 由 zvi-fried 牵头，与 #3584 / #3588 / #3591 / #3585 / #3586 一同构成 provider 契约统一计划。CLI 层 `ncl groups config update --speed <tier>` 已被设计，对 agent 调用方与 `--timezone` 同样走审批门。
  - 预计随 provider 抽象整体成熟后并入下一版本。

- **[PR #3573 — AIML API 集成请求](https://github.com/qwibitai/nanoclaw/pull/3573)**（作者 hugoaimlapi）
  - 第三方 provider 接入申请，类别为 Feature skill；尚未看到 review 信号。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼的真实使用场景与痛点：

| 痛点 | 来源 | 场景描述 |
|---|---|---|
| **升级路径破坏自定义 adapter** | [Issue #3529](https://github.com/qwibitai/nanoclaw/issues/3529) | 用户在 Fork 中维护自有 channel adapter，但 `update-nanoclaw` skill 刷新时将其误识为 skill 产物，造成**升级即破坏**且无逃生通道 |
| **CLI 命令响应慢** | [PR #3702](https://github.com/qwibitai/nanoclaw/pull/3702) | `ncl tasks run` 触发后最多需等待 `SWEEP_INTERVAL_MS`(60s) 才真正开始执行，用户期望"按需即跑" |
| **多 agent 组网关部署受限** | [Issue #3701](https://github.com/qwibitai/nanoclaw/issues/3701) | 24 个 agent 组 × 各自凭证集的部署者发现当前 `contributedEnv` 模式不足以表达复杂的注入语义 |
| **Agent 被工具"骗"以为操作成功** | [PR #3427](https://github.com/qwibitai/nanoclaw/pull/3427) | `send_card` 在 Chat SDK bridge 静默丢弃 callback action 时仍报告成功，造成 agent 行为偏差（待合并） |
| **WhatsApp 入站媒体路径不可读** | [PR #3113](https://github.com/qwibitai/nanoclaw/pull/3113) | 容器无法读取 WhatsApp 暂存的入站媒体文件 |

**满意度信号**：PR 评论数据缺失（`评论: undefined`）使得定量满意度难以测量；但 zvi-fried 一人连续产出 6 个相关 PR（#3584 #3585 #3586 #3588 #3591 #3592 #3593），显示核心维护者对当前重构方向**投入度高**。

---

## 8. 待处理积压

**长期未合入但对项目健康度重要**的开放项：

| 编号 | 创建日期 | 状态摘要 | 风险 |
|---|---|---|---|
| [PR #3492](https://github.com/qwibitai/nanoclaw/pull/3492) | 2026-08-23（11 天） | 关键供应链修复仍未合并，但 #2973 已关闭让位 | 高（安全） |
| [PR #3427](https://github.com/qwibitai/nanoclaw/pull/3427) | 2026-08-21（13 天） | agent-runner 误导性工具语义修复未合并 | 中（行为正确性） |
| [PR #3113](https://github.com/qwibitai/nanoclaw/pull/3113) | 2026-07-21（~6 周） | WhatsApp 入站媒体修复长时间未 review | 中 |
| [Issue #3529](https://github.com/qwibitai/nanoclaw/issues/3529) | 2026-08-25（9 天） | 自定义 adapter 升级破坏问题，无明确 fix 路线 | 高（影响 Fork 用户） |
| [PR #3573](https://github.com/qwibitai/nanoclaw/pull/3573) | 2026-08-27（7 天） | AIML API 集成请求无 review 信号 | 低（社区生态） |

**维护者建议关注顺序**：
1. 推进 #3492 / #3680 安全类合并；
2. 回应 #3529，明确"用户自定义 adapter 升级逃生通道"的官方态度；
3. 为 #3427、#3113 这类积压超过一周的功能修复指派 reviewer。

---

### 项目健康度总结

| 维度 | 评估 |
|---|---|
| **代码活跃度** | 🟢 中高（21 PR/日，主要由 zvi-fried 与 orgads 驱动） |
| **安全态势** | 🟡 有多个未合并的高优先级 fix（#3492、#3680） |
| **架构演进** | 🟢 provider 契约重构方向清晰 |
| **社区响应** | 🟡 互动数据缺失，多个 PR 评论为 0，review 带宽可能不足 |
| **版本节奏** | 🔴 24 小时内无 release，安全 fix 持续积压，**建议尽快发版** |

---

*数据来源：GitHub Issues & Pull Requests 公开 API | 报告生成时间：2026-09-03*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-09-03**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 在过去 24 小时呈现出**高活跃、强基础设施化**的态势：共产生 10 条 Issue 更新（6 新开/活跃、4 已关闭）和 26 条 PR 更新（16 待合并、10 已合并/关闭），无新版本发布。整体活动聚焦于三个方向——**前端 `@ts-nocheck` 类型债清理**（#8032 ~ #8036 组成系统化攻关矩阵，相关 PR #8038 ~ #8040 已落地）、**CI 流水线性能与稳定性优化**（`Reborn` 冷编译问题修复 #8050、smoke test 监听就绪 #8045、macOS 兼容 #7991），以及**核心 Agent 行为正确性修正**（reply 串流、memory 错误分类、prompt cache 黑名单）。项目当前健康度评估为**良好**——存量技术债正在被结构化偿还，关键用户可感知的错误（Slack/Telegram 渐进式回复错位）已合入修复。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日共 **10 条 PR 完成合入或关闭**，覆盖文档、CI、依赖、CLI、Channel 与 LLM 缓存等多个维度。以下为对项目推进最具实质意义的合入：

### 3.1 修复 Agent 关键交互 Bug
- **[#8051](https://github.com/nearai/ironclaw/pull/8051)** `fix(reply)` **[已关闭]** —— 核心团队成员 BenKurrek 修复了 Slack/Telegram 渐进式回复"把每次模型调用的流式文本全部拼接"的严重错误。`51582d3930` 上的 Live QA 显示 bot 答出了 "Let me find the conversation first. Your latest message to Firat was: hello." 这种让用户迷惑的"叙述式"答复。修复后语义被严格限定为"当前模型调用的文本"。这是当下用户最容易感知到的体验 bug 之一，影响所有使用渠道回复的场景。
- **[#7985](https://github.com/nearai/ironclaw/pull/7985)** `fix(memory)` **[仍 OPEN]** —— 将"缺失文档"从 `FailureKind::InputEncode`（暗示"参数错误请重试"）修正为正确的域错误。该 PR 与今日 Issue #8041 描述的是同一类系统性错误模式（错误分类导致模型走错恢复路径），是修复 Issue #8041 的关键前置。

### 3.2 CI 流水线性能与稳定性显著提升
- **[#8050](https://github.com/nearai/ironclaw/pull/8050)** `ci: stop cold-compiling every Reborn lane` **[已关闭]** —— 通过稳定 Cargo home、按需推送缓存、稳定 toolchain、热原地变异门禁，让每条 PR 与 merge-queue 入口不再冷编译全部依赖闭包；修复了最重 bucket 在单个 job 内被编译两次的问题。这是当前合并吞吐量的关键瓶颈修复。
- **[#8045](https://github.com/nearai/ironclaw/pull/8045)** `fix(ci): wait for CLI listener readiness in smoke tests` **[已关闭]** —— CLI smoke test 现在要求在诊断 serve banner 后必须有真实 loopback TCP 连接；将原来分散的五秒连接重试统一到单一有界连接器。
- **[#8042](https://github.com/nearai/ironclaw/pull/8042)** `fix(cli,ci): keep serve alive when stderr closes` **[已关闭]** —— 修复了曾将 #8006 弹出 merge queue 两次（run 33642416400）、并以 5/6 命中率打击该 PR 拉取请求的 serve smoke flake。

### 3.3 渠道能力扩展
- **[#8006](https://github.com/nearai/ironclaw/pull/8006)** `feat(channels): add durable progressive replies and native Slack Agent UI` **[已关闭]** —— 提供了一个通用的 `ReplyDocument`（display text / reasoning / 附件 + 边界内构造），并实现了原生 Slack Agent UI。该 PR 同时引入了 provider-neutral 的回复缝合点，是渠道体验层面的实质性升级。

### 3.4 依赖例行刷新
- **[#8003](https://github.com/nearai/ironclaw/pull/8003)** `chore(deps): bump the everything-else group across 1 directory with 17 updates` **[已关闭]** —— Rust 通用依赖批更新（uuid 1.24.0→1.26.0、base64 0.22.1→0.23.1、toml 等）。[#8049](https://github.com/nearai/ironclaw/pull/8049) 持续推进至 19 个更新，仍 OPEN。

**整体判断：** 项目今天在**正确性**（#8051、#7985）、**研发吞吐**（#8050、#8045、#8042）、**渠道能力**（#8006）三条主线上都向前迈出了可量化的一步。

---

## 4. 社区热点

> 说明——今日所有 Issue/PR 的评论数与点赞数均为 0，因此"热点"以**主题重要性、复审价值、跨模块影响**作为判断维度。

### 4.1 议题级热点
- **[Issue #8041](https://github.com/nearai/ironclaw/issues/8041)** `A tool failure whose kind is wrong sends the model somewhere it cannot recover` —— 由 standardtoaster 提出，是今日**最值得关注**的议题。其揭示的不是个例 bug，而是 `FailureKind` 闭集词汇中各变体隐含"命运"的系统性设计缺陷：`InputEncode` 暗示"参数错请改正重试"、`UnknownCapability` 暗示"能力不在请去发现"，若工具失败被归类错，模型会进入无法恢复的状态。这与已 OPEN 的 PR #7985 同一作者、同一问题域——一个先合 PR、再合 Issue，或同步推进，将显著降低 Agent 在真实场景下的不可恢复率。
- **[Issue #8032 ~ #8036](https://github.com/nearai/ironclaw/issues/8032)** `@ts-nocheck` 债清理五连击 —— italic-jinxin 在一天内同时开 5 个 issue 系统化拆解 WebUI v2 中 170 个文件、约 61,800 行 TypeScript / TSX 上的 `@ts-nocheck` 债务（暴露约 1,354 条诊断）。这种**自顶向下的债清理路线图**在社区治理中较为少见，反映了项目对前端代码质量与可演进性的明确承诺。

### 4.2 PR 级热点
- **[#8039](https://github.com/nearai/ironclaw/pull/8039)** `refactor(webui): type production components and hooks` **[OPEN, size: XL]** —— 移除 64 个生产组件/hooks/pages 的 `@ts-nocheck`，添加显式的 React Query、outlet-context、DOM、timer、ref、setup-flow、authentication payload 类型与 `@hot-labs/near-connect` 的最小环境声明。
- **[#8038](https://github.com/nearai/ironclaw/pull/8038)** `refactor(webui): type and validate frontend API boundaries` **[OPEN, size: XL]** —— 在请求 URL 构造前拒绝缺失的 thread/run/gate 标识符；用类型化对象边界和运行期解码器替代宽松的 JSON 传输结果，覆盖 device-link、pairing、notification setup、suggestions、projects、settings、workspace 响应。
- **[#8010](https://github.com/nearai/ironclaw/pull/8010)** `feat(webui): session-event transport unification and web-app run-completion notifications` **[OPEN, size: XL]** —— 端到端实现 `2026-08-13-webapp-run-notifications.md` 设计：统一 WebUI 会话事件传输（类型化流契约 + 一个 bearer 鉴权的多路复用 SSE 流）+ 持久化的 web-app 运行完成通知。
- **[#8046](https://github.com/nearai/ironclaw/pull/8046)** `feat(subagent): a child's approval/auth gate reaches the owner's inbox (R3 slice 3a)` **[OPEN, size: L]** —— 解决子代理在自身审批/凭据门禁处被阻塞时对父级完全不可见的问题——这是 subagent 体验链路的真实盲区。

### 4.3 诉求解读
从议题/PR 矩阵看，社区当下三类核心诉求：**①模型错误恢复路径的可解释性与正确性**（#8041、#7985）、**②前端代码可演进性**（#8032~#8036 + #8038~#8040）、**③渠道与子代理的可观测性**（#8010、#8046、#8051、#8006）。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 标题 | 状态 | 已有 fix PR |
|---|---|---|---|---|
| 🔴 高 | [#8041](https://github.com/nearai/ironclaw/issues/8041) | A tool failure whose kind is wrong sends the model somewhere it cannot recover | OPEN | 部分（[#7985](https://github.com/nearai/ironclaw/pull/7985) 解决 memory 场景，但系统性问题仍未开 fix） |
| 🟠 中-高 | [#8051](https://github.com/nearai/ironclaw/pull/8051) | Slack/Telegram 渐进式回复串流拼接错误 | 已关闭（已合入修复） | ✅ |
| 🟠 中 | [#7985](https://github.com/nearai/ironclaw/pull/7985) | `NativeMemoryService::read` 将"文档缺失"误报为 `InputEncode` | OPEN（待合并） | ✅（本 PR 即修复） |
| 🟠 中 | [#8042](https://github.com/nearai/ironclaw/pull/8042) | CLI serve smoke flake + Railway containment `readlink -m` macOS 不兼容 + merge queue 上的命名变异体门禁 | 已关闭 | ✅ |
| 🟡 中 | [#8045](https://github.com/nearai/ironclaw/pull/8045) | CLI listener readiness 在 banner 后无真实 TCP 连接验证 | 已关闭 | ✅ |
| 🟡 中 | [#7991](https://github.com/nearai/ironclaw/pull/7991) | Pre-push gate 在 macOS checkout 上失败（GNU `readlink -m` + 一项 CI 脚本） | OPEN | ✅（PR 本身即修复，待合） |
| 🟡 中 | [#7989](https://github.com/nearai/ironclaw/pull/7989) | `list_dir` 在路径不存在时仅返回 "list_dir failed"，不告知哪条路径失败 | OPEN | ✅ |
| 🟢 低-中 | [#8044](https://github.com/nearai/ironclaw/pull/8044) | `supports_prompt_cache` 仅 allowlist 已有的 Claude 系列前缀，新家族（`claude-fable-*`、`claude-mythos-*`）被静默降级 | OPEN（待合并） | ✅ |
| 🟢 低-中 | [#8050](https://github.com/nearai/ironclaw/pull/8050) | CI Reborn lane 冷编译 + 最重 bucket 单 job 内重复编译 | 已关闭 | ✅ |

**整体观察：** 今日稳定性主题围绕"CI 链路可靠性"和"Agent 行为正确性"两条主线——前者已通过合入的 #8050/#8042/#8045 显著缓解，后者中 #8051 已合、#7985 待合、#8041 系统性问题尚无 fix 落地。**#8041 是当前最需要被追踪的稳定性隐患**。

---

## 6. 功能请求与路线图信号

今日公开的新功能需求相对克制，主要通过 PR 形式表达，未出现独立的高赞 feature request issue。可识别的路线图信号：

- **WebUI 类型化与统一设计系统（高确定）**：[#8032](https://github.com/nearai/ironclaw/issues/8032) ~ [#8036](https://github.com/nearai/ironclaw/issues/8036) + PR #8038/#8039/#8040 是典型的"系列化、阶段化、可追踪"路线图，预期未来 1~2 周内陆续合入。
- **WebApp 运行完成通知（高确定）**：[#8010](https://github.com/nearai/ironclaw/pull/8010) 配套设计文档 `docs/internal/design/2026-08-13-webapp-run-notifications.md` 已存在，进入 OPEN 评审即有望进入下一批合入。
- **Subagent 可观测性（中等确定）**：[#8046](https://github.com/nearai/ironclaw/pull/8046) 标注为 R3 slice 3a，意味着 R3 计划后续还有 slice 3b/c 等。
- **LLM 缓存策略扩展（中等确定）**：[#8044](https://github.com/nearai/ironclaw/pull/8044) 提议对 Claude 新家族用 denylist（而非 allowlist）+ 在 OpenAI Responses 上发 `prompt_cache_key`，属于基础设施性增强。
- **Loop-host 流式性能（中等确定）**：[#8043](https://github.com/nearai/ironclaw/pull/8043) 提议合并流式文本更新而非每 delta 重做全量清洗，1,000 个 delta 的 16 KiB 文本从 1,000 次重处理降为 ~1 次。
- **依赖常态化更新（高确定）**：[#7835](https://github.com/nearai/ironclaw/pull/7835)、#8047、#8048、#8049 均处于 OPEN 状态，将在 dependabot 节奏下陆续合入。

**建议：** 维护者可在下一个 sprint 优先合入 #7985（修复 Issue #8041 的最小可行路径）、#8043（性能改进、低风险）、#8044（基础设施增强、低风险）。

---

## 7. 用户反馈摘要

今日 Issue 与 PR 数据中的评论/点赞信号极少，难以进行严格意义上的用户反馈聚合。可从 Issue 内容中提炼的**真实痛点**与**使用场景**如下：

- **痛点 1（Agent 错误

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-03

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) 过去 24 小时 GitHub 活动

---

## 一、今日速览

LobsterAI 在过去 24 小时内呈现"**清旧账、上新活**"的典型治理节奏：8 条 Issue 中 6 条历史问题被批量关闭（均为 stale，存活 4-5 个月后归档），剩余 2 条转为长期开放；PR 端活跃度更高，10 条更新中含 **3 条已落地**与 **7 条待合并**，涵盖安全加固、并发竞态修复、新功能（Docker 探针、全文搜索）和一次较大规模的浏览器功能回退。整体项目健康度中等：维护者正集中精力清理积压并补齐底层缺陷，但**没有版本发布**，用户侧可感知的版本变化为零。

**关键指标：**
- Issue 关闭率：**75%**（6/8）
- PR 流转率：**30%**（3/10 完成，7/10 在途）
- 核心关注点：IM/Cowork 并发安全、MCP 安全边界、新版浏览器功能回退

---

## 二、版本发布

**无新版本发布。** 仓库当前没有新的 Release 标签生成。结合 PR #2597 对 `release/2026.8.31` 分支的内嵌浏览器（in-app browser）功能回退操作来看，团队当前可能正围绕 2026.8.31 后继版本（推测为 2026.9.x）的发版节奏进行内部清理，尚未到可发布状态。

---

## 三、项目进展

### 3.1 已关闭 PR（3 条）

| PR | 作者 | 类型 | 影响范围 |
|---|---|---|---|
| [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | btc69m979y-dotcom | **回退** | renderer / main / openclaw / cowork / artifacts |
| [#2598](https://github.com/netease-youdao/LobsterAI/pull/2598) | liuzhq1986 | Bug 修复 | renderer（Windows 引导流程） |
| [#2596](https://github.com/netease-youdao/LobsterAI/pull/2596) | liuzhq1986 | 埋点修复 | renderer / docs / cowork |

**关键动作解析：**

1. **#2597 — 移除 2026.8.31 发布的内嵌浏览器功能**（影响面极广，触及 renderer/main/openclaw/cowork/artifacts 五大模块）。这是今日最重要的"反向进展"，说明 #2574 引入的 in-app browser 功能未达到发版标准，被整体回退至 2026.8.31 之前的行为。原分支与合并历史被保留以便后续 reapply，意味着该功能并未被永久砍掉，而是**推迟到后续版本窗口**。
2. **#2596 — 聊天登录 CTA 点击埋点**：将聊天登录引导的转化数据接入 onboarding 分析事件，并同步更新了使用分析规范。属于产品体验数据基建。
3. **#2598 — Windows 引导修复**：作者 liuzhq1986 同一天提交并关闭了一条与平台兼容性相关的修复。

> **推进评估：**今日主要"完成"的工作以**回退和埋点**为主，实质性新功能落地为零。考虑到 #2597 涉及 5 个模块的代码变动，今天的代码净增长大概率是**负值**，反映出团队对质量的克制态度。

---

## 四、社区热点

### 4.1 评论最活跃的 Issue（已关闭）

1. **[#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)** — 6 条评论 ★最高
   - 标题：提问后不运行，也不显示任何信息
   - 反映：用户发送消息后**完全无反馈**，属于最影响体验的"沉默失败"类问题
   - 状态：已 stale 关闭

2. **[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)** — 3 条评论
   - 标题：模型无法获取上传的文件
   - 反映：新版本中上传文件后模型**无法识别上下文**，与旧版"自动放入 project 目录"的体验出现回归

3. **[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)** — 3 条评论
   - 标题：最新版本无论输入什么都回复相同内容
   - 反映：版本 2026.4.3 的严重功能故障，用户附上了完整日志压缩包

### 4.2 诉求分析

被关闭的 6 条 Issue 虽然都标 stale，但**评论质量与共鸣度并不低**——尤其是 #1569 的 6 条评论、#1561/#1566 各 3 条评论，说明真实用户曾在这些问题上反复求助。集中体现三类核心痛点：
- 失败时的**可观测性**缺失（不报错、不响应）
- 文件/上下文感知**回归**
- 服务条款/UI 文案**正确性**

> ⚠️ 维护者倾向以"stale"策略批量关闭老 Issue，但**未明确公告替代方案或修复版本**，可能引发老用户回流时的困惑。

---

## 五、Bug 与稳定性

### 严重程度分类

| 等级 | Issue / PR | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) / [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | IM 并发处理导致**重复会话创建 + 消息响应丢失** | ✅ [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) 已提出 per-conversation 互斥锁方案 |
| 🔴 高 | [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | `CoworkRunner.startSession/continueSession` **无重入保护** | ✅ 同 PR 即修复（per-session 执行序列化） |
| 🟠 中 | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 跨 provider 切换模型后立即发消息**偶发"模型服务调用失败"** | ✅ 同 PR 修复（消除 configService.updateConfig() 的 fire-and-forget） |
| 🟠 中 | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 网络环境变化触发网关反复重启 | ❌ 仅 Issue，无明确修复 |
| 🟠 中 | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 任意输入都返回相同回复 | ❌ 已 stale 关闭，无对应修复 |
| 🟡 低 | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 上传文件未被模型识别 | ❌ 已 stale 关闭 |
| 🟡 低 | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后无任何反馈 | ❌ 已 stale 关闭 |
| 🟡 低 | [#1096](https://github.com/netease-youdao/LobsterAI/issues/1096) | Markdown 转 PDF 页面弹出多余窗口 | ❌ 无对应 PR |

### 重点关注：并发与竞态"三件套"

今天 PR 列表中最引人注目的是 **3 个独立的并发安全修复**，覆盖：
- IM 入口层（[#1100](https://github.com/netease-youdao/LobsterAI/pull/1100)）
- CoworkRunner 执行层（[#1090](https://github.com/netease-youdao/LobsterAI/pull/1090)）
- 配置切换层（[#1101](https://github.com/netease-youdao/LobsterAI/pull/1101)）

这表明 IM/Cowork 链路是当前**已知稳定性短板**，三条修复都指向同一个根因：**异步入口缺乏串行化**，建议合并时做整体回归测试，避免彼此覆盖。

---

## 六、功能请求与路线图信号

### 6.1 来自 Issue 的需求

- **[#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)** — 输入框添加"停止当前话题 / 压缩上下文"快捷按钮
  - 反映上下文超长或后端 bug 时用户缺乏**快速恢复手段**
  - 关联价值：与上节并发修复形成互补——前者解决"卡死后能恢复"，后者解决"为什么会卡死"
  - ⚠️ **未发现对应实现 PR**，建议产品侧评估

### 6.2 已实现 / 在途的新功能 PR

| PR | 功能 | 落地概率 |
|---|---|---|
| [#1125](https://github.com/netease-youdao/LobsterAI/pull/1125) | 会话内容**全文搜索 + 关键词高亮** | 🟢 高（功能完整、UI/UX 考虑周到） |
| [#1103](https://github.com/netease-youdao/LobsterAI/pull/1103) | Docker sandbox **就绪探针**与状态展示 | 🟢 高（明确为后续执行模式开关铺路） |
| [#1102](https://github.com/netease-youdao/LobsterAI/pull/1102) | 定时任务开关按钮的 **i18n tooltip** | 🟢 高（改动小、国际化完整 zh/en） |
| [#2597](https://github.com/netease-youdao/LobsterAI/pull/2597) | in-app browser 功能（**回退**，未来窗口再上） | 🟡 中（推迟但未放弃） |

**路线图信号总结：**
- 短期：稳定性（#1090/#1100/#1101）和安全（#2590）优先
- 中期：搜索能力增强（#1125）和沙箱化能力前置（#1103）
- 长期：内嵌浏览器（已被推迟至少一个版本）

---

## 七、用户反馈摘要

### 7.1 主要痛点

1. **"看不到发生了什么"**（#1569、#1566）
   - 用户在提交问题后既无前端反馈也无日志线索，是最影响信任度的体验黑洞
   - 建议：即使是失败状态，也应给出明确的错误提示或重试入口

2. **"新版反而变差"**（#1561、#1566）
   - 多个用户反馈 2026.4.x 版本相较早期版本在文件感知、回复多样性上**出现回归**
   - 强烈提示：发版前需在历史核心

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-03

> 数据来源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)
> 报告周期：2026-09-02 至 2026-09-03

---

## 1. 今日速览

Moltis 项目今日呈现**高频迭代态势**：单日内连续发布 3 个版本（`20260902.01` → `.02` → `.03`），同时伴随 2 个新 Issue 与 3 个新 PR 涌入，整体活跃度评估为 **中高**。所有今日新增条目均由同一贡献者 **GTanger** 提出，议题高度聚焦于**钩子（hooks）生命周期完整性**与**推理（reasoning）能力扩展**两大方向。值得注意的是，当前所有 Issue 与 PR 均处于 OPEN 状态、无任何评论或点赞，处于"刚刚提出"的极早期阶段。

---

## 2. 版本发布

今日发布了 3 个版本，遵循 `YYYYMMDD.NN` 的日递增版本号模式：

| 版本 | 发布时间 | 备注 |
|------|----------|------|
| [20260902.01](https://github.com/moltis-org/moltis/releases/tag/20260902.01) | 2026-09-02 | 作为 Issue #1255 / #1254 的复现基准 |
| [20260902.02](https://github.com/moltis-org/moltis/releases/tag/20260902.02) | 2026-09-02 | 增量修复 |
| [20260902.03](https://github.com/moltis-org/moltis/releases/tag/20260902.03) | 2026-09-02 | 最新发布 |

⚠️ **健康度提示**：单日内发布 3 个版本（`01 → .02 → .03`）表明项目处于密集修复或试验阶段。**破坏性变更、迁移指南及更新内容均未在 release notes 中体现**，建议用户在升级前密切关注每个版本的 commit diff（仓库未提供详细变更日志）。从节奏看，该项目目前采用类似滚动发布的日版本号策略。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，所有 3 个 PR 均为新提交，处于待评审阶段。但从内容上看，今日的工作已为下一版本准备了实质性改进：

- 🪝 **钩子系统完善**（PR [#1257](https://github.com/moltis-org/moltis/pull/1257)）：`fix(hooks): complete lifecycle dispatch` —— 一次性补齐三处缺失：① 派发此前仅声明但从未触发的 `AgentEnd` / `MessageSending` / `MessageSent` 事件；② 为 `BeforeToolCall`、`AfterToolCall`、`ToolResultPersist` 注入可选 `tool_call_id` 字段；③ 保持旧 JSON payload 兼容性。这是本期最重要的进展之一。

- 🧠 **推理能力扩展**（PR [#1253](https://github.com/moltis-org/moltis/pull/1253)）：`feat(reasoning): add max effort level` —— 在 `ReasoningEffort` 共享 schema 中新增 `max` 档位，配套 `@reasoning-max` 模型后缀解析、OpenAI Codex Responses API 透传、不支持 provider 自动降级处理，同时在前端推理选择器、i18n 与 broadcast channel 中同步暴露。

- 📦 **依赖维护**（PR [#1256](https://github.com/moltis-org/moltis/pull/1256)）：由 dependabot 自动提交，将 `crates/web/ui` 中的 `browserslist` 从 4.28.2 升级至 4.28.8，常规安全/兼容性维护。

> **整体推进评估**：项目在"钩子可靠性"和"推理档位完备性"两个方向上同步迈出关键一步。

---

## 4. 社区热点

由于所有 Issue/PR 均为今日新开（评论数 0、👍 数 0），尚无法从互动数据中提炼真正的"热点"。但从**主题聚焦度**看，下列条目构成了今日最具讨论潜力的议题：

| 排名 | 条目 | 主题 | 链接 |
|------|------|------|------|
| 1 | Issue #1255 | 钩子事件声明却永不派发（Bug） | [链接](https://github.com/moltis-org/moltis/issues/1255) |
| 2 | PR #1257 | 钩子生命周期派发补齐 + tool_call_id（Fix） | [链接](https://github.com/moltis-org/moltis/pull/1257) |
| 3 | Issue #1254 | 钩子 payload 缺少稳定工具调用 ID（Feature） | [链接](https://github.com/moltis-org/moltis/issues/1254) |
| 4 | PR #1253 | 新增 max 推理档位（Feature） | [链接](https://github.com/moltis-org/moltis/pull/1253) |

**诉求分析**：用户（GTanger）显然在构建或测试基于 Moltis 钩子的**进程级事件响应管线**。其连续提出的两个 Issue 暴露了同一类需求——**端到端关联一次工具调用、并可靠监听 Agent 与消息生命周期**。这反映出社区用户正在将 Moltis 的钩子系统用于**可观测性、外部集成、审计**等场景。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 是否已有 Fix | 状态 |
|--------|------|------------|------|
| 🟠 **中** | [`AgentEnd` / `MessageSending` / `MessageSent` 钩子声明但永不派发](https://github.com/moltis-org/moltis/issues/1255) | ✅ 已对应 PR [#1257](https://github.com/moltis-org/moltis/pull/1257) | Issue OPEN, PR OPEN |

**影响面评估**：该 Bug 直接破坏了下游集成方对 Agent 完整生命周期的监听能力（如对话回合结束、消息发送前/后拦截），但**不影响核心对话功能**。幸运的是，修复 PR 已同步提交，预期很快合并。建议维护者优先 review PR #1257。

---

## 6. 功能请求与路线图信号

| 请求 | 类型 | 已对应 PR？ | 路线图可能性 |
|------|------|-----------|-------------|
| [Issue #1254](https://github.com/moltis-org/moltis/issues/1254)：钩子 payload 中携带稳定的 tool call ID | 互操作性 / 可观测性 | ✅ 已并入 PR [#1257](https://github.com/moltis-org/moltis/pull/1257) | **极高**（已实现） |
| [PR #1253](https://github.com/moltis-org/moltis/pull/1253)：reasoning 档位新增 `max` | 模型能力扩展 | ➖ 自身即为实现 PR | **极高**（已实现） |

**信号判断**：本期两份功能需求均已转化为可直接合并的实现，**几乎可以确定进入下一发布版本**（如 `20260903.x`）。两者都体现了项目向"**更细粒度的事件可观测性**"与"**更精细的推理档位控制**"方向演进的趋势。

---

## 7. 用户反馈摘要

⚠️ **数据局限说明**：当前所有 Issues 评论数均为 0，无公开评论可供提炼。下文仅基于 Issue 摘要文本推断：

- 🧩 **使用场景信号**：用户在 [Issue #1254](https://github.com/moltis-org/moltis/issues/1254) 中明确提到 *"Moltis shell hooks are process-per-event"* —— 表明用户正在构建**进程级、事件驱动的 Shell 钩子管线**，希望实现"一次工具调用跨多个生命周期阶段的关联追踪"。
- 🐛 **复现态度积极**：用户在 [Issue #1255](https://github.com/moltis-org/moltis/issues/1255) 中提供了完整的 preflight checklist，注明已搜索重复 Issue、已使用最新版本 `20260902.01` 复现、probe 无敏感数据 —— **反映出高质量的 bug 报告范式**，对维护者非常友好。
- 🤝 **隐性满意度**：用户在同一天内连续提出 2 个 Issue + 2 个 PR（含 1 个依赖 PR），说明该用户对项目投入度高、信任度强，**愿意为项目贡献代码而非仅提诉求**。

---

## 8. 待处理积压

> 当前所有 Issue 与 PR 均创建于过去 24 小时内，**尚无真正意义上的长期积压条目**。下列为维护者**应优先关注**的项目：

| 优先级 | 条目 | 关注理由 |
|--------|------|----------|
| 🔴 高 | [PR #1257](https://github.com/moltis-org/moltis/pull/1257) | 修复关键钩子 Bug 并补齐功能，建议 24h 内 review |
| 🟡 中 | [PR #1253](https://github.com/moltis-org/moltis/pull/1253) | 新功能实现，需验证多 provider 兼容性 |
| 🟢 低 | [PR #1256](https://github.com/moltis-org/moltis/pull/1256) | 常规依赖升级，可批量合并 |
| 🟡 中 | [Issue #1255](https://github.com/moltis-org/moltis/issues/1255) | 待 PR #1257 合并后关闭 |
| 🟡 中 | [Issue #1254](https://github.com/moltis-org/moltis/issues/1254) | 待 PR #1257 合并后关闭 |

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 迭代活跃度 | ⭐⭐⭐⭐⭐ | 单日 3 版本 + 3 PR + 2 Issue |
| 社区参与度 | ⭐⭐ | 仅单一贡献者活跃，缺乏多用户讨论 |
| 文档/发布说明 | ⭐⭐ | Release notes 缺失，迁移风险不透明 |
| Bug 修复响应 | ⭐⭐⭐⭐ | Bug 出现即附带 PR，闭环速度快 |
| 路线图透明度 | ⭐⭐⭐ | 仅能从 PR 标题推测方向 |

---

*报告生成时间：2026-09-03 · 数据基于 GitHub 公开 API 拉取*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报

**报告日期**：2026-09-03  
**数据周期**：过去 24 小时  
**仓库**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

CoPaw 今日处于 **v2.2.0 Beta 系列高频迭代期**，正式发布 `v2.2.0-beta.7`，重点修复 ReMe 长期记忆的 embedding 维度归一化问题。社区活跃度处于高位：过去 24 小时共处理 25 条 Issue 更新（关闭 9 条）和 35 条 PR 更新（合并/关闭 10 条），整体**节奏健康**。Issues 中多 agent 调度、Cron 任务可靠性、长上下文丢失、企业微信流式输出卡顿成为社区集中吐槽点；PR 侧则集中在 Console UI 重塑、Provider 兼容修复、Agent 模型路由等 v2.2.0 GA 前置工作上。安全相关 Issue（沙箱被突破、CRITICAL 规则被直接拒绝）虽然评论不多，但严重程度高，值得维护者尽快回应。

---

## 2. 版本发布

### 🚀 v2.2.0-beta.7

**发布日期**：2026-09-02  
**Release 页面**：[v2.2.0-beta.7](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.7)

**主要变更**：

| 类别 | 内容 | PR |
|---|---|---|
| fix(memory) | 归一化不同后端的 embedding 维度，避免 ReMe 等内存后端在切换 Provider 时出现维度不一致错误 | [#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465) (@jinliyl) |
| chore | 版本号升级至 v2.2.0b7 | [#7485](https://github.com/agentscope-ai/QwenPaw/pull/7485) (@cuiyuebing) |
| fix(webui) | 为 M* 系列组件追加 Dark Mode 覆盖样式 | 仓库 release notes |

**已知问题**：  
- Issue [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) 报告 `v2.2.0-beta.7 Desktop` 安装后 `/memory/status` 返回 500，说明该版本可能引入了新的回归问题，请升级用户留意。
- Release Duty 验证 Issue [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503) 已开，截止时间 2026-09-02 14:50 UTC。

**升级建议**：  
- 建议用户先在测试环境验证 ReMe 长期记忆与 Memory Resource 接口，特别是从 b5/b6 跨版本升级时；
- 自定义 embedding 后端的用户应确认维度归一化对自身模型的影响。

---

## 3. 项目进展

### 已合并/已关闭的重要 PR

| PR | 标题 | 作者 | 影响 |
|---|---|---|---|
| [#7508](https://github.com/agentscope-ai/QwenPaw/pull/7508) | feat(skill): Update make-skill to v2 (DO NOT MERGE) | @Leirunlin | 标记为 "DO NOT MERGE"，已关闭 |
| [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489) | fix(desktop): preserve PyInstaller multiprocessing runtime hook | @jinglinpeng | 修复 macOS Desktop 端 StdIO MCP 调用触发多进程导致后端重启的严重问题 |
| [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | MCP clients page section container renders white background in dark mode | @Marlin-Phone | Dark Mode UI bug 已关闭 |

### 关键进行中工作（评审/待合并）

- **Console UI 重塑**：[#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) 重构侧边栏与设置体验，整合插件注册/扩展点；[#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501) 落地 Agent 模型路由配置（thinking level、子 agent 模型、回退策略）；[#7499](https://github.com/agentscope-ai/QwenPaw/pull/7499) 统一侧边栏图标风格。三 PR 配套 [#7376](https://github.com/agentscope-ai/QwenPaw/issues/7376) 的视觉规范。
- **MCP 安全加固**：[#7504](https://github.com/agentscope-ai/QwenPaw/pull/7504) 在 agent runtime 路径上强制按工具白名单启用 MCP 工具——修复了 2.0 Driver 重写后 `card.config.tools` 仅用于展示、关闭的工具仍可被调用的安全漏洞。
- **Provider 兼容层**：[#7500](https://github.com/agentscope-ai/QwenPaw/pull/7500) 在 OpenAI 兼容 provider 连接测试阶段转发 `extra_headers`；[#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) 修复字符串类型工具参数被模型误输出为数字时的校验失败。
- **AgentScope Chat SDK 1.2 适配**：[#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) 升级 `@agentscope-ai/chat` 至 1.2.0-beta 版本，对接新结构化 `beforeSubmit`、不可变请求快照、取消回调等 API。
- **ACP Windows 体验**：[#7401](https://github.com/agentscope-ai/QwenPaw/pull/7401) 修复 Windows 上 `python -m qwenpaw acp` 工作区引导期间事件循环冻结导致数分钟无响应的问题。
- **隐私与诊断**：[#7494](https://github.com/agentscope-ai/QwenPaw/pull/7494) 把 host 绝对路径从聊天可见文本剥离，避免敏感信息泄漏到对话流。
- **企业平台引入**：[#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) pawport 引入流程初版——可从 Codex/Qoder 一键导入指令、技能、插件、项目、近期工作。
- **Creator 子项目 1.1.2**：[#7486](https://github.com/agentscope-ai/QwenPaw/pull/7486) 把 fork 中的 Creator 1.1.2（运行时通知总线、异步委派、T2V/I2V/S2V 调度、Windows 硬化、Docker 部署）正式向上游同步。
- **v2.2.0 发布说明**：[#7348](https://github.com/agentscope-ai/QwenPaw/pull/7348) 仍在评审中，建议维护者尽快合入以便 GA 公告。

**整体进度评估**：v2.2.0 GA 前的多个阻塞性 UI/UX 与稳定性问题已在闭环推进；Console UI 重塑进入代码评审阶段，预测 **1-2 周内可进入 RC**。

---

## 4. 社区热点

按评论数排序，最受关注的 Issue/PR：

| 排名 | 编号 | 标题 | 评论数 | 状态 |
|---|---|---|---|---|
| 1 | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 主 agent+多子 agent 时，用户不问"进度如何"主 agent 不主动查询子 agent 状态 | 7 | OPEN |
| 2 | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console 流式输出中重复大量相同文本块 | 6 | CLOSED |
| 3 | [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令容易逃逸安全防护 | 5 | OPEN |
| 4 | [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding/indexing 任务静默失败 | 4 | OPEN |
| 5 | [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | 连接测试失败：API error when connecting to model 'xxx' | 4 | CLOSED |
| 6 | [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 局域网 LLM Server 频繁 client disconnect 致超时 | 3 | OPEN |
| 7 | [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | agent cron + share_session=true 长时间运行失败、超时任务卡死 | 3 | CLOSED |
| 8 | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义 Provider 加载失败（max_tokens 字段迁移） | 3 | OPEN |
| 9 | [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | DashScope Embedding index 始终显示未保存 | 3 | CLOSED |

**诉求分析**：

- **多 agent 协作的"主动性"**：[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) 揭示了用户对主 agent 应主动汇报/监控子 agent 状态的强烈期待，而非被动等待询问；
- **长任务/长上下文可靠性**：[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) 早期上下文丢失对长文档处理用户是**致命性打击**，直接关乎"任务能否继续"；
- **安全机制存在绕过路径**：[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) + [#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) + [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) 三连击，社区对**安全语义一致性**的担忧上升；
- **Channel 体验**：[#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) 暴露 WeCom 与 WeChat 通道在流式输出上的实现差异。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 关键/数据/安全

| 编号 | 标题 | 是否已有 fix PR |
|---|---|---|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | QwenPaw2 安全沙箱被突破 | ❌ |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令容易逃逸 | ❌ |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 长上下文早期记录彻底丢失，任务无法继续 |  |
| [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | macOS StdIO MCP spawn 子进程重新进入 backend_guard 杀死活跃后端（已 CLOSED，对应 fix [#7489](https://github.com/agentscope-ai/QwenPaw/pull/7489)） | ✅ |

###  P1 — 重要功能异常

| 编号 | 标题 | 是否已有 fix PR |
|---|---|---|
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `v2.2.0-beta.7 Desktop` `/memory/status` 返回 500 | （刚发版回归，需重点关注） |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 多 agent 任务无进度主动查询机制 | ❌ |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | 局域网 LLM 频繁 client disconnect 导致重试超时 | ❌ |
| [#7507](https://github.com/agentscope-ai/QwenPaw/issues/7507) | WeCom 通道流式输出逐字符 150ms 节流过慢 | ❌ |
| [#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512) | 会话进行中无法切换到另一会话 | ❌ |
| [#7483](https://github.com/agentscope-ai/QwenPaw/issues/7483) | agent cron share_session 长时间运行失败（已 CLOSED） | ✅ |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | cron 任务在 misfire_grace 窗口内重复调度 | ❌ |
| [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | 后端升级重启后 cron 非计划补发；cancelled 任务不写收件箱通知；console 收件箱自动已读 |  |

###  P2 — 一般体验问题

| 编号 | 标题 | 是否已有 fix PR |
|---|---|---|
| [#7496](https://github.com/agentscope-ai/QwenPaw/issues/7496) | CRITICAL 规则被直接拒绝而非触发询问 | ❌ |
| [#7493](https://github.com/agentscope-ai/Qwen

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-03

## 1. 今日速览

ZeroClaw 今日继续保持**高密度 RFC 治理 + 安全深度修复**的双轮驱动节奏。过去 24 小时共发生 **50 条 Issue 更新**（35 条活跃/新开，15 条关闭）与 **50 条 PR 更新**（47 条待合并，3 条已合并/关闭），**无新版本发布**。从讨论热度看，会话持久化、内存生命周期、沙箱策略、WASM 插件观察者等架构级 RFC 仍是社区主线；同时安全领域出现多条高风险 fix PR（delegate 越权、Windows CLI 环境、MCP 工具结果处理等）。整体健康度评估：**活跃度高、架构收敛进行中、稳定性隐患需密切关注**。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时没有新的 Release 标签或构建产物推送。这意味着所有 47 条待合并 PR 都尚未进入可发布的快照，项目正处于"代码沉淀 / RFC 表决 / 安全复核"密集期，属于节奏性蓄力阶段。

---

## 3. 项目进展

今日仅有少量 PR 完成合并/关闭，但有几条对架构影响重大：

| PR | 主题 | 影响 |
|---|---|---|
| [#10243](https://github.com/zeroclaw-labs/zeroclaw/pull/10243) | Retire/supersede legacy HMAC node transport | 移除长期未使用的 HMAC 节点传输模块与配置项 `NodeTransport`/`sign_request`/`verify_request`，减面工程 |
| [#10510](https://github.com/zeroclaw-labs/zeroclaw/pull/10510) | mdBook 升级至 0.5.4 | 文档工具链升级，引入键盘可达的图像缩放 |
| [#9760](https://github.com/zeroclaw-labs/zeroclaw/pull/9760) | Web Quickstart 显示通道描述符默认值 | Quickstart 表单与 CLI/TUI 行为对齐 |

此外，多条高风险修复 PR 处于**"待合并 + needs-author-action"**阶段（见第 5 节），维护者即将在下一窗口集中审议 #9745、#9746、#9574、#10188 等核心安全相关 PR。

整体而言：**项目向前推进有限但扎实**，三个小合并不浮于表面，正在清理历史遗留与文档长期债务。

---

## 4. 社区热点

按评论数排序的今日最热议题，均围绕**架构与治理**展开：

1. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — *RFC: Runtime-owned conversation sessions and transport surface adapters*（32 评论，作者 NiuBlibing）
   - 已迭代至 Revision 5，明确替换 Revision 4 投票快照；社区正在重新登记讨论窗口与快照
2. **[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)** — *RFC: Decouple memory lifecycle policy from storage backends*（25 评论）
   - 已被 `status:accepted`，定位 Memory trait 与治理/合并策略的边界
3. **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)** — *RFC: Granular sandbox policy — filesystem and network restrictions*（22 评论，in-progress）
   - 试图收敛应用层 `SecurityPolicy` 与 OS 沙箱（Bubblewrap / Landlock / Seatbelt）的策略漂移
4. **[#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)** — *RFC: separate authoritative memory storage from optional enrichment connectors*（19 评论）
   - maintainer takeover revision 后被 `accepted`，明确存储/增强的架构边界
5. **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)** — *RFC: Make wire protocol first-class in provider construction*（19 评论）
6. **[#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909)** — *RFC: Computer-use support for desktop screen interaction*（16 评论）
7. **[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)** — *Tracker: Session-persistence contract ownership and layer ordering*（15 评论）
8. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)** — *Tracker: Maintainer decision queue*（14 评论）
9. **[#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050)** — *RFC: Verbatim channel send over the gateway*（13 评论，`accepted`）

**诉求分析：** 社区目前的核心呼声可以归纳为三条主线——
- **会话/状态契约的归属混乱**（#9487、#9600），四个并行 workstream 都在触碰同一份契约但无人 owner；
- **内存层级的清晰分层**（#6850、#9103），durability 与 lifecycle 必须解耦；
- **安全策略的可验证一致性**（#6996、#6909），应用层与 OS 层要给出端到端可证明的行为。

---

## 5. Bug 与稳定性

**今日新增/活跃的 P1 高优先级 Bug：**

| 严重度 | Issue | 描述 | 是否有对应 fix PR |
|---|---|---|---|
| **S0**（数据丢失/安全风险） | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) | independent delegate 绕过自身 `block_high_risk_commands = true`，高危命令（如 `rm`）可执行 | ✅ [#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)（fix(runtime): enforce independent delegate approval policy，needs-maintainer-review） |
| **S1**（工作流阻塞） | [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | 离开 Web 仪表盘聊天窗口后 Agent 被判定为 user-interrupt 而停止循环 | ❌ 暂无明确 PR |
| **S1**（兼容/契约破坏） | [#10501](https://github.com/zeroclaw-labs/zeroclaw/issues/10501) | MCP 工具返回的图像在 `role:"tool"` 消息中被塞入 image_url，OpenAI 兼容端点返回 400 | 部分修复中 ([#10566](https://github.com/zeroclaw-labs/zeroclaw/pull/10566)，materialize type:image/audio) |
| **S2**（降级行为） | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | `compact_context` 在 6000 字符处静默截断 AGENTS.md/SOUL.md 等 bootstrap 文件，运维无感 | ❌ 暂无 |
| **S2** | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | Interactive agent 会话硬性 32K token 上限，忽略 `max_context_tokens = 131072` | ✅ [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（anchor context compaction to model window ratio，needs-author-action） |
| **S2** | [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) | ZeroCode transcripts 历史裁剪后丢失持久化轮次（已关闭 → 已修） | ✅ |

**今日关闭/已修的 Bug：**
- [#9855](https://github.com/zeroclaw-labs/zeroclaw/issues/9855) Matrix 通道绕过 `/.well-known/matrix/client` 解析 — S0，已修 ✅
- [#10193](https://github.com/zeroclaw-labs/zeroclaw/issues/10193) Matrix `stream_reasoning="full"` 与生成式 thinking 状态冲突 — 已修 ✅
- [#10456](https://github.com/zeroclaw-labs/zeroclaw/issues/10456) MCP SSE reader 超长事件后残留后缀 — 已修 ✅
- [#10147](https://github.com/zeroclaw-labs/zeroclaw/issues/10147) 显式 `config init` 分区跨 CLI 进程无法完成 — 已修 ✅

整体看，**S0/S1 级别的两条核心安全/工作流阻塞**（#10165、#8559）都已有或接近有 fix 方案，但都尚未合并到 master，建议维护者优先评审。

---

## 6. 功能请求与路线图信号

**多通道会话（高确定性，纳入下一版本概率高）：**
- [#9353](https://github.com/zeroclaw-labs/zeroclaw/pull/9353) Web 支持每 agent 多会话（创建/恢复/重命名/删除），`/new` 走同一转移路径。

**Context 智能压缩（高确定性）：**
- [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) 引入 `runtime_profiles.<name>.context_compact_ratio`，依据所选模型窗口动态确定 trim 预算，替代硬编码 32K；与 #9713（history-trim 暴露 token 账目）配套，构成下一代上下文治理。

**MCP 多模态管线（中确定性）：**
- [#10566](https://github.com/zeroclaw-labs/zeroclaw/pull/10566) 将 MCP `type:image/audio` 工具结果物化为 `[IMAGE:…]`/`[Document:…]`，与既有 #9196 的 resource/blob 管线对齐。

**Egress 授权仪式（高影响力，需维护者评审）：**
- [#9584](https://github.com/zeroclaw-labs/zeroclaw/pull/9584) 把插件安装/列表纳入 egress grant ceremony，Audacity88 已就当前 diff 校正了 fresh-install 权限与校验语义。

**同会话消息序列化（中确定性）：**
- [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) 在 `interrupt_on_new_message = false` 下，同范围消息串行化，避免并发轮次。

**内存可追溯性（高 ROI 低风险）：**
- [#10567](https://github.com/zeroclaw-labs/zeroclaw/pull/10567) 给召回的记忆条目打上"召回日期"戳，区分近期/历史知识。
- [#10563](https://github.com/zeroclaw-labs/zeroclaw/pull/10563) 对声称已执行但无工具调用的回执做 re-sample 与标记，堵"工具回执伪造"反模式。

**信号归纳：** 路线图明显向 **"上下文治理 + 安全契约 + 多模态 MCP + 多会话 Web"** 四象限收敛；文档/治理类 PR（#10288、#10366）同步推进，保证 RFC 流程可持续。

---

## 7. 用户反馈摘要

从今日活跃 Issue 的描述中可提炼出以下真实痛点：

- **"上下文悄悄消失"** —— 多位用户指出 #10523（bootstrap 文件 6000 字符静默截断）和 #10068（32K 硬上限）的体验接近"系统吞噬信息"，期望透明的 token 账目和可配置的 compact 阈值；社区已用脚投票 #9535、#9713。
- **"agent 在我离开后假装没事发生"** —— #8559 描述的"关闭聊天窗口 = 中断循环"被多次反映为不符合预期的 user intent，社区希望后台长任务不被前台 UI 状态绑架。
- **"delegate 不听话"** —— #10165 暴露的"独立 delegate 忽略自身风险画像"是开发者信任沙箱的核心痛点，关联 #10391（filesystem 工具尊重目标 workspace）共同构成"delegate 安全契约"诉求。
- **"工具回执与叙述对不上"** —— #10563 描述的"模型口头说做了 X 但没发工具调用"引发多次反馈，期望 runtime 主动 re-sample 标记。
- **"记忆没有日期"** —— #10567 反映的"召回知识外观一致、无法分辨新旧"是高频长期痛点，尤其影响长期跨会话任务。
- **"MCP 多模态在 OpenAI 兼容端失败"** —— #10501 直击供应商差异问题，社区明确希望由 ZeroClaw 抽象层兜底。
- **"维护者决策可见性"** —— #8692 跟踪器本身就是为了缓解"提了 RFC 不见动静"的社区焦虑，**positive signal**：作者在持续更新责任分配与状态。

**综合满意度信号：** 社区对 ZeroClaw 维持 RFC 流程、显式归档决策记录（#8691 ADR 清单）整体积极，但对**长时间未合并的安全 fix PR（needs-author-action、needs-maintainer-review）**表达了隐性不满，期望更短的反馈回路。

---

## 8. 待处理积压

按风险/影响力排序的"老而未决"问题，提醒维护者：

- **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)**（创建于 2026-07-28，32 评论，high risk）—— Runtime-owned sessions RFC v5 投票快照尚未启动，是会话契约归属问题的**根本阻塞点**。
- **[#10188](https://github.com/zeroclaw-labs/zeroclaw/pull/10188)**（needs-maintainer-review）—— 修复 S0 安全洞 #10165 的核心 PR，需加快评审。
- **[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)** 与 **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)**（XL size，risk:high）—— 知识图谱与 session/discord 工具的 per-agent 所有权改造，needs-author-action 状态持续，应安排集中评审窗口。
- **[#9574](https://github.com/zeroclaw-labs/zeroclaw/pull/9574)**（

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*