# OpenClaw 生态日报 2026-07-08

> Issues: 241 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-08 06:22 UTC

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

# OpenClaw 项目动态日报

**报告日期**：2026-07-08
**数据范围**：过去 24 小时 GitHub 活动

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高频低推进**的态势：过去 24 小时共 241 条 Issues 动态、500 条 PR 动态，但 0 个新版本发布、仅 ~130 个 PR 被合并/关闭（26%），大量新 PR 处于"needs proof"等待证明状态。Issues 侧以历史积压讨论为主，未关闭比例高达 97%（235/241），社区热点聚焦**性能回归**（`openclaw doctor --fix` 较 5.19 版慢 4–5 倍）、**多 Agent 编排不稳定**以及**消息/媒体丢失**类 P1 问题。项目整体活跃度极高，但核心维护者响应似乎在瓶颈期，建议关注 stale 标记的长期未处理 Issues（参见第 8 节）。

---

## 2. 版本发布

**无新版本发布。**

今日无 Release 记录。考虑到多个高优先级 Bug 报告（如 #85333 性能回归）已具完整复现且开放已久，下一版本（2026.5.21 / 2026.6.x 系列补丁）有望集中修复 P1 问题。

---

## 3. 项目进展

今日最值得关注的两项已合并/关闭 PR：

- **[PR #91663](https://github.com/openclaw/openclaw/pull/91663)** — `fix(backup)`: 清理中断 backup 留下的 stale `.tmp` 临时归档文件，避免磁盘占用累积。该 PR 关闭，合并风险标签为 🚨 availability（mark waiting on author 状态）。
- **[PR #102059](https://github.com/openclaw/openclaw/pull/102059)** — `refactor(voice-call)`: 本地化 voice-call 插件内部 TypeScript 声明，缩减插件对外暴露面，属代码卫生类改进。

处于"automerge armed"（🚀）状态、有望自动合入的 PR：

- **[PR #101748](https://github.com/openclaw/openclaw/pull/101748)** — 文档：解释 PR 自动化工作流（钻石龙虾评分，🐚）。
- **[PR #102007](https://github.com/openclaw/openclaw/pull/102007)** — `fix(agents)`: 扩展 exec 截断 UTF-16 安全。
- **[PR #100845](https://github.com/openclaw/openclaw/pull/100845)** — `fix(cli)`: 一次性 agent --local 运行在 OTel 启用时不再丢失遥测。

**整体推进评估**：仓库每日新增 PR 数量（500）远超合并能力（~130），sweeper-bot（clawsweeper）的 automerge 流水线是当前主要的合并承载体，但仅覆盖少量符合 automerge 标准的 PR。功能层面无显著新功能合入，更多是 bugfix 与重构。

---

## 4. 社区热点

### 评论最多（≥10 条）Issues
| # | Issue | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | 🐚 P1 性能回归 | openclaw doctor --fix 4-5x slower on 2026.5.20 vs 2026.5.19（55s → 229s+） | 15 | 1 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 🦞 P1 | 多 Agent 编排不稳定：并发 add/config 覆盖、session-lock 失败、子工作脱离 | 13 | 1 |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | 🦞 P2 Feature | 增加 `tools.web.fetch.allowPrivateNetwork` 允许内网访问 | 13 | 11 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) | 🦞 P2 Feature | 网关层 per-agent 成本预算强制执行 | 12 | 1 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | 🦞 stale P1 | Feishu：read 图像工具结果在最终出站载荷前丢失媒体 | 12 | 0 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | 🦞 P1 | Write 工具缺少 append 模式 —— 孤立 cron 会话会覆盖共享文件 | 11 | 1 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | 🦞 P1 回归 | google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined or null to object" | 10 | 3 |
| [#38439](https://github.com/openclaw/openclaw/issues/38439) | 🐚 P2 | Webchat `/avatar/{agentId}` 端点 404，即使 IDENTITY.md 中已定义头像 | 10 | 1 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | 🐚 P1 | A2A `sessions_send` 双向回环导致重复消息 | 10 | 0 |

**诉求分析**：
- **性能**是当前最大痛点（#85333 单条 15 评论），指向 2026.5.20 commit `e510042` 引发的 session snapshot 路径遍历瓶颈。
- **多 Agent 编排**虽仅有 1 个 👍，但 13 条评论显示有大量运行场景实战细节。
- **👍 最高的非 Bug 类**是 #39604（11 👍），内网访问能力受企业/自托管用户强烈需求。

### 评论最多（活跃）PR
- **[PR #98402](https://github.com/openclaw/openclaw/pull/98402)** — `fix(infra)`: channel ingress queue 中 `parseJson` 对损坏 JSON 容错（🐚 评分，影响 message-delivery + availability），🟢 ready for maintainer look。
- **[PR #75662](https://github.com/openclaw/openclaw/pull/75662)** — `fix(agents)`: 暂停 yielded 主会话运行（XL，跨 6f3b5f86 修复的扩展），已 ready for maintainer。
- **[PR #89040](https://github.com/openclaw/openclaw/pull/89040)** — `perf`: 消除 embedded_run bootstrap 时 14–22 秒的事件循环停顿（🐚 评分，XL）。

---

## 5. Bug 与稳定性

按严重程度（P1 > impact-crash-loop / data-loss / security）排列：

### P1 — 严重回归 / 数据丢失 / 安全

| Issue | 标题 | 类别 | 是否已有 Fix PR |
|---|---|---|---|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | `openclaw doctor --fix` 4-5x 性能下降 | 性能回归 | ❌ 无 |
| [#38327](https://github.com/openclaw/openclaw/openclaw/issues/38327) | Gemini 3.1 Pro "null/undefined" 崩溃 | 回归 | ❌ 无 |
| [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu read image 媒体丢失 | 媒体丢失 | ❌ 无（stale） |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DM 仍泄漏到 `agent:main:main` | 行为 Bug | ❌ 无 |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | Write 缺少 append，cron 覆盖共享文件 | 数据丢失 | ❌ 无 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send 双向重复消息 | 消息丢失 | ❌ 无 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram 会话污染 | 路由 Bug | ❌ 无 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 Agent 编排不稳定 | 并发 / lock | ❌ 无 |
| [#44294](https://github.com/openclaw/openclaw/issues/44294) | ACP 错误统一映射为 `end_turn` | 错误语义 | ✅ ([PR #44294](https://github.com/openclaw/openclaw/issues/44294)) |
| [#44289](https://github.com/openclaw/openclaw/issues/44289) | secretref 参考文档需代码生成 | 文档漂移 | ✅ |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | / 多种 | | |
| [#45718](https://github.com/openclaw/openclaw/issues/45718) | Session bloat: skillsSnapshot / systemPromptReport 累计无界增长 | 会话膨胀 → 上下文溢出 | ✅ linked |
| [#92057](https://github.com/openclaw/openclaw/issues/92057) | 多会话/多 Agent 负载下网关变慢或超时 | 性能 | ❌ 无 |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama 远程流不消费 — chat 中 `model_call:started` 不前进 | 流式 | ❌ 无 |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 孤立 cron agentTurn "setup timed out" 失败 | 启动路径 | ❌ 无 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 多 Agent 并发下所有 LLM 同时超时 | 瓶颈 | ❌ 无 |

### P2 — 安全 / 消息丢失 / UX 摩擦

| Issue | 标题 | Fix PR 状态 |
|---|---|---|
| [#45765](https://github.com/openclaw/openclaw/issues/45765) | `OPENCLAW_HOME=~/.openclaw` 产生嵌套目录 | ❌ stale (8 评论) |
| [#43996](https://github.com/openclaw/openclaw/issues/43996) | Sandbox 容器 `no-new-privileges` 即时退出 | ❌ 无 |
| [#40440](https://github.com/openclaw/openclaw/issues/40440) | Telegram 群组历史媒体仅占位文本 | ❌ 无 |
| [#39847](https://github.com/openclaw/openclaw/issues/39847) | Echo contamination：stripInboundMetadata 未调用 | ✅ linked |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | #39182 heartbeat 漂移修复引发 Telegram 阻塞 | ✅ linked |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | 402 计费错误导致内联 apiKey 无退避的无限重试 | ✅ linked |
| [#46252](https://github.com/openclaw/openclaw/issues/46252) | Cost dashboard 漏算 `.jsonl.reset.*` 归档 | ✅ linked |
| [#46031](https://github.com/openclaw/openclaw/issues/46031) | `auth.order` 对 GitHub Copilot 不生效 | ✅ linked |
| [#44910](https://github.com/openclaw/openclaw/issues/44910) | OpenAI Codex 错误泄漏进用户聊天 | ❌ 无 |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu `message` send 被 poll schema 污染 | ❌ 无 |
| [#40880](https://github.com/openclaw/openclaw/issues/40880) | `MEDIA_MAX_BYTES=5MB` 硬编码不可配置 | ❌ 无 |
| [#42819](https://github.com/openclaw/openclaw/issues/42819) | Browser 缓存目录路径漂移 | ✅ linked |

**稳定性总结**：P1 积压以**回归与媒体/消息丢失**为主（约 7 条无 fix PR），其中 #85333 的性能退化涉及大量生产 VPS 部署，是当前最迫切的修复点。

---

## 6. 功能请求与路线图信号

### 1) 高 👍 信号（≥ 8）— 高概率进入路线图

- **[#39604](https://github.com/openclaw/openclaw/issues/39604)** — `tools.web.fetch.allowPrivateNetwork`（11 👍，13 评论）— 内网/Web Fetch 启用开关。属企业/自托管场景刚需。
- **[#42840](https://github.com/openclaw/openclaw/issues/42840)** — Control UI MathJax/LaTeX 支持（9 👍，8 评论）— 教育/科研使用场景。

### 2) 中等强度 — 已有 linked PR 或讨论充分

- **[#42475](https://github.com/openclaw/openclaw/issues/42475)** — 网关层 per-agent 成本预算（12 评论）。
- **[#42026](https://github.com/openclaw/openclaw/issues/42026)** — RFC: 分布式 Agent Runtime（控制面/计算面拆分）。
- **[#43454](https://github.com/openclaw/openclaw/issues/43454)** — Gateway 生命周期 hooks（onSubagentComplete 等）。
- **[#38626](https://github.com/openclaw/openclaw/issues/38626)** — Subagent 生命周期可观测性 + 异步监督。
- **[#40786](https://github.com/openclaw/openclaw/issues/40786)** — Backup CLI .gitignore 排除模式。
- **[#44395](https://github.com/openclaw/openclaw/issues/44395)** — 记忆搜索的标题感知分块 + 实体抽取。
- **[#87325](https://github.com/openclaw/openclaw/issues/87325)** — Azure Foundry GPT Realtime Talk 支持。

### 3) UX 类

- **[#44431](https://github.com/openclaw/openclaw/issues/44431)** — Browser tool 7 项改进（含 CSS 选择器支持）。
- **[#45758](https://github.com/openclaw/openclaw/issues/45758)** — YAML 配置文件格式支持。
- **[#45564](https://github.com/openclaw/openclaw/issues/45564)** — `/new`、`/reset` 添加确认步骤。

**路线图推断**：`allowPrivateNetwork` (#39604) 与 Feishu/Telegram 媒体处理修复（#41744、#40440、#42820）最可能进入下一版本；分布式 Runtime（#42026）属于 RFC 阶段，预计短期内不进入实现。

---

## 7. 用户反馈摘要

### 核心痛点（基于评论内容提炼）

1. **生产环境性能稳定性下降**
   - 用户 @samson1357924 在 Oracle Cloud（4 vCPU / 24 GB）跑 `openclaw doctor --fix`：5.19 → 5.20 单次执行从 55 秒涨到 229 秒，二次运行时间更长。怀疑 session snapshot 路径遍历实现引入的 O(n) 退化。

2. **多 Agent 生产化"几乎不可用"**
   - 用户 @waliddafif（#43367）：4 类并发故障——`agents add` 配置被并发覆盖、session-lock 持续失败、子工作"脱离"（lost）、fallback 模型全部耗尽。评论中其他用户确认复现。

3. **Agent 工具"过于自信"的副作用**
   - 多个 Issue 显示 LLM 自填错误 schema 字段触发 Feishu 消息被拒（#42820）、Cron 触发 OOM（#40001 因无 append 模式覆盖）、Telegram 群组图片仅占位符（#40440）。

4. **第三方模型/Provider 兼容性盲区**
   - Gemini 3.1 Pro 回归（#38327）、Google Antigravity 频触发反滥用（#44134）、Ollama 流式未消费（#94251）、OpenAI Codex 错误泄漏（#44910）——用户希望模型名称、Provider 行为有**前置校验**而不是在使用中失败。

5. **观测性不足**
   - 用户 @dwinster3（#42026）、@SyrS-AI 等都在呼吁"看到子 agent 在做什么"。缺少年龄化的 timeline、failure attribution、artifact pointers，催生 #38626 / #43454 等 hook/observability 提案。

6. **隐式成本风险**
   - 用户 @justmy2satoshis（#39807）：6 小时、5206 次失败的 agent run 烧掉 API credit。failover / fallback 路径缺少 token-bucket 与指数退避被多个 Issue 反复指出。

### 满意度信号

- ✅ 多 Agent / Subagent 模型方向获肯定（在 P1/Bug 列表中表现为"想用"而非"想撤"）。
- ✅ 用户对 ClawSweeper auto-merge 与 labeling 体系表示赞赏（issue 中频繁引用标签，反向印证流程清晰）。
- ❌ CLI 的错误信息（如 Telegram 路由、Cost dashboard 计数）被多名用户认为是"几乎不可信"。

---

## 8. 待处理积压（提醒维护者）

按时间 + 严重程度筛选的长期未响应 Issues：

| # | Issue | 严重 | 创建日期 | 状态 |
|---|---|---|---|---|
| [#44294](https://github.com/openclaw/openclaw/issues/44294) | ACP backend 错误统一映射 → `end_turn` | 🦞 P2 | 2026-03-

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析

**报告日期**：2026-07-08  
**数据范围**：13 个开源项目过去 24 小时 GitHub 动态  
**分析视角**：技术决策者与开发者

---

## 1. 生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"高活跃、强分化、安全债集中暴露"**三大特征：一方面，主流项目（OpenClaw、CoPaw、ZeroClaw、IronClaw）单日 PR 流量普遍在 30-500 量级，反映开发热度持续高涨；另一方面，多个项目（NullClaw、Moltis、ZeptoClaw）已 24 小时无活动，**生态头部效应加剧**；与此同时，由同一安全研究员 YLChen-007 在 NanoBot、NanoClaw、TinyClaw、LobsterAI 四个项目集中提交 16 条 Loopback/未鉴权类安全披露，**暴露出本地控制平面的"零信任缺失"是行业级系统性问题**，而非单点缺陷。

---

## 2. 各项目活跃度对比

| 项目 | Issues 数 | PR 数 | Release | 合并/关闭率 | 24h 健康度 | 阶段定位 |
|---|---|---|---|---|---|---|
| **OpenClaw**（核心参照） | 241 | 500 | ❌ | PR ~26% / Issue 3% | ⚠️ 高频低推进 | 超大规模 / 维护瓶颈期 |
| **NanoBot** | 14 | 32 | ❌ | Issue 57% / PR 44% | ✅ 强收敛 | 中型 / 安全基线收口 |
| **Hermes Agent** | 仅新增 | 50 | ✅ v0.18.1+v0.18.2 | PR 30% | 🟡 大量技术债清理 | 大型 / 稳定快照期 |
| **PicoClaw** | 7 | 5 | ❌ | Issue 28% / PR 40% | ⚠️ stale 率高 | 小型 / 维护乏力 |
| **NanoClaw** | 1 | 21 | ❌ | PR ~38% | ✅ 文档驱动 | 中型 / 文档重整期 |
| **IronClaw** | 6 | 50 | ❌（PR #5598 待发） | PR 24% | ✅ 内部推进为主 | 大型 / 蓄势发版 |
| **LobsterAI** | 5 | 17 | ✅ 2026.7.7 | Issue/PR 双高 | 🔴 3 条严重安全 | 中型 / 功能+安全并行 |
| **TinyClaw** | 9（全是安全） | 0 | ❌ | 0% | 🔴 严重承压 | 小型 / 安全应急期 |
| **CoPaw** | 17 | 36 | ✅ v2.0.0-beta.3 | 高 | ⚠️ P0 回归 | 中型 / beta 密集迭代 |
| **ZeroClaw** | 10 | 50 | ❌（v0.8.3 蓄势） | PR 低 | ✅ 后台蓄力 | 大型 / XL PR 待评审 |
| NullClaw | 0 | 0 | ❌ | — | ⚫ 静默 | 停滞/弃坑信号 |
| Moltis | 0 | 0 | ❌ | — | ⚫ 静默 | 停滞/弃坑信号 |
| ZeptoClaw | 0 | 0 | ❌ | — | ⚫ 静默 | 停滞/弃坑信号 |

**关键观察**：
- **OpenClaw 是唯一"超大规模"项目**：单日 PR 量（500）≈ Hermes Agent + IronClaw + ZeroClaw 三家之和，PR 合并率仅 26%，形成"提交远大于合并"的结构性瓶颈。
- **3 个项目 24 小时零活动**（NullClaw、Moltis、ZeptoClaw），可能反映品牌命名丛（"Claw"系列）内部的资源集中趋势。
- **TinyClaw 进入安全应急期**：24 小时 0 个 PR、9 条未修复安全 Issue，是当日最严重风险点。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势
- **Issue/PR 量级遥遥领先**：日均 PR 500 条是 Hermes Agent（50）、ZeroClaw（50）、IronClaw（50）的 **10 倍**。
- **未关闭 Issue 比例 97%**，说明产品已大规模铺开，但维护响应能力已被压至极限。
- **automerge 流水线**（sweeper-bot / clawsweeper）是当前主要合并载体，体现工程治理成熟度。

### 3.2 技术路线差异
| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw |
|---|---|---|---|---|
| 渠道接入 | 全（Feishu/Telegram/WhatsApp/A2A/ACP/Vertex 等 10+） | 较全（侧重 WhatsApp/Telegram） | Telegram + OpenAI Bridge | 含 Zalo Bot、钉钉 DM |
| 核心场景 | 单机多 Agent + 多 Provider | TUI/Desktop 双端 | SOP 可视化工作流 | AgentScope 框架集成 |
| 安全模型 | 标签驱动（🐚/🦞）+ 评分 | 传统 Issue/PR | RFC + AuthProvider 注册表 | 工具守卫（tool_guard） |
| 自动合并 | ✅ sweeper-bot | ❌ | ❌ | ❌ |

### 3.3 社区规模对比
- **OpenClaw 贡献者密度**远超同类，但维护者响应瓶颈突出（"#85333 性能回归" 15 评论仍 OPEN）。
- **Hermes Agent 单日汇总 660 个 PR 的 tag**，反映其同样具备企业级工程化能力，但维护节奏更稳健。
- OpenClaw 的"高频低推进"是规模红利与维护瓶颈的双刃剑，**对深度集成方而言是优势（生态完整），对一般用户而言是劣势（响应迟缓）**。

---

## 4. 共同关注的技术方向

### 4.1 Loopback 控制平面鉴权（跨 4 项目集中爆发）
- **涉及项目**：NanoBot（#4825/#4826/#4827）、NanoClaw（#2970）、TinyClaw（#286/#288/#292/#294）、LobsterAI（#2286/#2287/#2288）
- **共同诉求**：`/webui/bootstrap`、`POST /api/message`、`PUT /api/settings` 等本地端点对未鉴权客户端完全开放，可被同机/同网络进程伪造动作。
- **行业意义**：**这是 2026 年本地 AI 工具的"原罪"**——产品默认信任 localhost，但容器/PID 命名空间共享、CICD 注入等场景下假设不成立。YLChen-007 的批量披露实质上是一次"行业级安全审计"。

### 4.2 多 Agent 编排与可观测性
- **涉及项目**：OpenClaw（#43367、#38626、#43454）、LobsterAI（#2285 已合入子代理委托）、Hermes Agent（PR #60638 Dockview 重构）
- **共同诉求**：并发 add/config 覆盖、session-lock 失败、子工作"脱离"、缺少生命周期 hook、无法看到子 Agent 在做什么。
- **路线图信号**：OpenClaw RFC #42026"分布式 Agent Runtime"、Hermes Agent Desktop 重构、LobsterAI 子代理白名单是同一主题的不同实现路径。

### 4.3 MCP（Model Context Protocol）生态治理
- **涉及项目**：NanoBot（#4506/#4764/#4842/#4843 重组 MCP 重连模型）、ZeroClaw（#8496 延迟 MCP 访问策略、#6699 tool_filter_groups 失效）
- **共同诉求**：MCP idle timeout 自动回收、异步取消作用域、过滤器实际未生效、schema 克隆导致 RSS 无界增长（ZeroClaw #8642）。
- **行业意义**：MCP 已成为 Agent 工具层的"事实标准"，但**治理（生命周期、过滤、内存）正在成为新的工程债**。

### 4.4 WebUI 体验迭代
- **涉及项目**：NanoBot（#4831 prompt rail 修复）、NanoClaw（#2909/#2958 设置向导模板化）、Hermes Agent（#38846 i18n 扩 15 语言、#60659 侧边栏交互）
- **共同诉求**：窄屏适配、多语言、首次会话引导、侧边栏信息架构、文件 diff 视图。

### 4.5 Provider/模型兼容性
- **涉及项目**：OpenClaw（#38327 Gemini 3.1 Pro、#94251 Ollama 流）、PicoClaw（#3153 豆包、#3196/#3197 OAuth）、CoPaw（#5774 Gemini 格式端点）、Hermes Agent（#58393/#60722 自定义 provider 选择器）
- **共同诉求**：模型名称前置校验、Tool Call XML 解析、Provider 行为差异抽象层。

---

## 5. 差异化定位分析

| 维度 | OpenClaw | NanoBot | Hermes Agent | PicoClaw | NanoClaw | LobsterAI | CoPaw | ZeroClaw | IronClaw |
|---|---|---|---|---|---|---|---|---|---|
| **目标用户** | 全场景通用 | 个人/小团队 | 多端企业 | 嵌入式 | CLI/开发者 | 中文个人助理 | Qwen/AgentScope 用户 | 高级工程用户 | 内部工程化 |
| **核心架构** | 单机多 Agent + 大插件 | Python 单体 | Rust+TS 桌面/TUI | Rust 极简 | TypeScript + SDK | 全栈桌面 | AgentScope 2.0 集成 | Rust 多 crate | Rust 微服务 |
| **语言** | TypeScript | Python | Rust/TS | Rust | TypeScript | TypeScript | Python | Rust | Rust |
| **部署形态** | CLI / Docker | pip | Docker/PyPI | 二进制 | npm | Electron 桌面 | Python | 二进制 | crate workspace |
| **安全姿态** | 标签化 | 默认鉴权收紧 | 依赖升级驱动 | 弱 | 默认宽松 | 紧急修补 | 工具守卫 | 多层防护 | CAS 化路径 |
| **成熟度** | 中后期 | 中期 | 大后期 | 早期 | 中期 | 中后期 | beta 期 | 中后期 | 中后期 |

**关键差异**：
- **Rust 阵营**（Hermes/Pico/Zero/Iron）侧重性能、类型安全、依赖治理；**TypeScript 阵营**（OpenClaw/NanoClaw/LobsterAI）侧重生态与 WebUI 灵活性。
- **LobsterAI 是唯一面向中文市场的产品**（钉钉/飞书/QQ 多通道），与 OpenClaw 的国际版图形成对照。
- **ZeroClaw 在 SOP 可视化工作流上独树一帜**（#8590 节点图编辑器），其他项目尚未跟进。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：超大规模、迭代旺盛
- **OpenClaw**（500 PR/日）：已具备产业级规模，但维护瓶颈明显，建议关注 stale 标记。
- **ZeroClaw / IronClaw / Hermes Agent**（50 PR/日量级）：已进入"密集蓄力 + 集中发版"节奏。

### 🟡 第二梯队：中活跃、收敛明显
- **NanoBot**（32 PR/日，Issue 关闭率 57%）：安全闭环做得到位，适合关注其设计模式。
- **CoPaw**（36 PR/日 + beta.3）：快速迭代中，但 P0 回归（#5846）暴露测试覆盖不足。
- **LobsterAI**（17 PR/日 + 1 Release）：功能与安全双线推进，本地安全债需紧急处理。
- **NanoClaw**（21 PR/日，38% 合并率）：文档重整期，质变型进展。

### ⚪ 第三梯队：低活跃或停滞
- **PicoClaw**（7 Issue + 5 PR，5/7 stale）：维护精力不足，路线图信号弱。
- **TinyClaw**（0 PR，9 条安全 OPEN）：进入"安全应急期"，需紧急响应。
- **NullClaw / Moltis / ZeptoClaw**（0 活动）：可能已实质停滞，建议从生态观察列表中降级。

---

## 7. 值得关注的趋势信号

### 7.1 趋势一：本地 AI 工具进入"安全重构期"
- YLChen-007 在 4 个项目同步披露 16 条 Loopback 类漏洞，**暴露出行业对"localhost 可信"假设的系统性反思**。
- **对开发者的启示**：默认开启鉴权、按 token/mTLS 校验、对外文档化部署安全姿态，应成为本地 Agent 工具的"出厂设置"。

### 7.2 趋势二：MCP 从"协议标准"走向"治理债"
- NanoBot、ZeroClaw 多个 Issue 指向 MCP 资源生命周期管理失序（idle、cancel、内存）。
- **对开发者的启示**：MCP server 实现需内置 idle timeout、心跳、cancellation scope、schema dedup；接入方需准备可观测性钩子。

### 7.3 趋势三：多 Agent 协作成为"必修课"而非"加分项"
- OpenClaw（RFC #42026）、LobsterAI（#2285 已合入）、Hermes Agent（#60638 重构）共同押注。
- **对开发者的启示**：生命周期 hook、并发 session-lock、子 Agent 可观测性、不确定性 fallback 是 2026 下半年的关键能力栈。

### 7.4 趋势四：版本"汇总 tag"模式回归
- Hermes Agent v0.18.1/v0.18.2 在 7 天内回滚 660 个 PR 后发 tag，反映**"半年聚合 + 稳定快照"**成为大型项目的发布哲学。
- **对开发者的启示**：依赖此类项目时，应固定到具体 tag 而非追踪 main HEAD；CI 需对快照做完整的可重现验证。

### 7.5 趋势五：Rust 在 AI Agent 工具层的渗透加速
- Hermes Agent、PicoClaw、ZeroClaw、IronClaw 全部选择 Rust 实现，TypeScript 仅在"必须 WebUI 集成"时保留。
- **对开发者的启示**：性能敏感型 Agent runtime（多 Agent 编排、长会话、可观测性 hook）正在向 Rust 迁移；TypeScript 阵营则在 CLI/WebUI/插件层保持优势。

### 7.6 趋势六：可视化工作流（SOP）成为新战场
- ZeroClaw PR #8590（节点图编辑器 + git_forge）是当日最大单 PR，**将"确定性执行"提升为产品差异点**。
- **对开发者的启示**：可视化 + Git 化的工作流编辑，可能成为下一阶段 Agent 产品形态的关键分水岭。

---

## 结语

今日生态呈现"**头部活跃、中部收敛、长尾停滞**"的健康分化格局。OpenClaw 作为参照标杆，其规模优势（500 PR/日）与维护瓶颈（26% 合并率）的张力，**正是整个行业在快速扩张期必须面对的共同挑战**。同时，由 YLChen-007 引发的"Loopback 安全潮"标志着本地 AI 工具的设计哲学正从"开发友好"向"生产可用"迁移。**对技术决策者而言**，建议将"鉴权默认开启 + MCP 治理 + 多 Agent 可观测性"列为 2026 下半年的技术债优先级；**对开发者而言**，Rust runtime + 可视化工作流 + 安全审计能力，将是下一阶段差异化竞争的关键能力栈。

---

*报告生成基于 2026-07-08 13 个项目 24 小时 GitHub 公开数据。所有 Issue/PR 链接均可在原始日报中追溯。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-08

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 采样窗口：过去 24 小时

---

## 一、今日速览

NanoBot 今日整体呈现**高活跃、强收敛**的态势：过去 24 小时共有 14 条 Issue 与 32 条 PR 发生更新，Issue 关闭率达 **57%**（8/14），PR 关闭/合并率达 **44%**（14/32）。当日热点高度集中于**安全审计与 WebUI 体验优化**两大主题，多个与 WebUI bootstrap 鉴权、OpenAI 兼容接口鉴权、Slack 依赖缺失、LLM 流式中断相关的关键缺陷获得处理或确认修复。值得关注的反向信号是：仍有 6 条 Issue 与 18 条 PR 处于 Open 状态，部分 P1 安全/崩溃类问题（如 #4825）尚未合并，社区维护者需加快审查节奏。

---

## 二、版本发布

**今日无新版本发布。** 当前主线版本仍为社区在 Issue #4013、#4823 中提及的 0.2.x 系列（0.2.0 / 0.2.2）。

---

## 三、项目进展（已合并/关闭的关键 PR）

| PR | 标题 | 影响域 | 关键价值 |
|---|---|---|---|
| [#4669](https://github.com/HKUDS/nanobot/pull/4669) | fix: require api key for serve | 安全（P1） | 关闭 OpenAI 兼容 `/v1/chat/completions` 的未鉴权访问（#4078），并补齐 CLI 测试 |
| [#4830](https://github.com/HKUDS/nanobot/pull/4830) | Fix missing aiohttp slack dependency in pyproject.toml | 构建（P1） | 修复 Slack 插件因 `aiohttp` 缺失无法启用的问题（#4829） |
| [#4831](https://github.com/HKUDS/nanobot/pull/4831) | fix(webui): keep prompt rail out of narrow chat columns | WebUI | 修复窄屏下 prompt 侧栏错位 |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | Gate sustained goals behind explicit runtime mode | 架构（P1） | 将长任务/目标工具从常驻面板收口为运行时门控（与 #4844 配套推进） |
| [#3517](https://github.com/HKUDS/nanobot/pull/3517) | fix(weixin): refresh context_token via getconfig | 通道 | 修复 cron 触发与重启后微信消息静默丢失问题 |
| [#3378](https://github.com/HKUDS/nanobot/pull/3378) | feat: add camera_capture tool | 工具能力 | 新增基于 OpenCV 的摄像头采集工具，默认禁用，需显式配置开启 |
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | Security: OpenAI-compatible chat completions unauth | 安全 | 由 #4669 关闭 |
| [#4611](https://github.com/HKUDS/nanobot/issues/4611) | DNS rebinding TOCTOU in SSRF validation | 安全 | 关闭 |
| [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827) | WebUI bootstrap token 泄露 | 安全 | 关闭 |

**整体评估**：今日在**安全基线、依赖完整性、WebUI 体验、目标运行时收口**四个方向均有实质性推进，安全相关 Issue 集中结案体现了维护者对披露的快速响应。

---

## 四、社区热点

按评论数排序的活跃讨论：

1. **[#2463](https://github.com/HKUDS/nanobot/issues/2463)** — *"Architectural issue: nanobot does not preserve the exact prompt prefix it previously sent"*（13 条评论）
   - 创作者 [ronny-rentner](https://github.com/ronny-rentner) 提出 nanobot 持久化的会话历史与实际发送给模型的 prompt prefix 不一致，与 OpenAI 协议存在结构性冲突。**今日被自动标记为 stale 并关闭**，表明社区目前不优先处理此类架构性争议，但对调用语义严谨性敏感的开发者仍有诉求。

2. **[#4013](https://github.com/HKUDS/nanobot/issues/4013)** — *"Error calling LLM: stream stalled for more than 90 seconds"*（6 条评论）
   - 用户 [mxnbf](https://github.com/mxnbf) 反馈从 0.1.5post2 升级至 0.2.0 后出现 `/goal` 触发的 90 秒流式超时，AI 被迫需要"继续"才能推进。关闭状态显示维护者已给出方向，但用户对默认流式策略的合理性仍存疑。

3. **[#4823](https://github.com/HKUDS/nanobot/issues/4823)** — *"whatsapp - groups"*（3 条评论）
   - 0.2.2 后 WhatsApp 群组 allowlist 行为回归，回复会扩散到号码所在的所有群组。该问题**目前为 OPEN 且无关联 fix PR**，是今日未受保护需求的代表性回归。

4. **WebUI 安全三连** — [#4825](https://github.com/HKUDS/nanobot/issues/4825) / [#4826](https://github.com/HKUDS/nanobot/issues/4826) / [#4827](https://github.com/HKUDS/nanobot/issues/4827)
   - 由 [YLChen-007](https://github.com/YLChen-007) 集中披露 loopback 下 `/webui/bootstrap` 可被任意本地进程铸造鉴权 token。两条已关闭（[#4826](https://github.com/HKUDS/nanobot/issues/4826)、[#4827](https://github.com/HKUDS/nanobot/issues/4827)），[#4825](https://github.com/HKUDS/nanobot/issues/4825) 仍 OPEN——三类披露呈现"同一根因、多次披露"的模式，建议合并跟踪。

**背后诉求**：企业/本地用户对**默认鉴权姿态**、**升级回归**、**协议层语义一致性**的容忍度正在下降，运维侧对"锁紧默认"的呼声高于"宽松默认"。

---

## 五、Bug 与稳定性

按严重度排序（已标注是否存在关联 fix PR）：

| 严重度 | Issue | 现象 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#4825](https://github.com/HKUDS/nanobot/issues/4825) | WebUI bootstrap 未鉴权铸造 API token（OPEN） | ❌ 未见 |
| 🔴 高 | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp 群组回复扩散回归（OPEN） | ❌ 未见 |
| 🟠 中 | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | LLM 流式 90 秒超时（CLOSED） | ⚠ 关闭但未见明确修复 |
| 🟠 中 | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI 首条消息被发送到无关已存在会话（OPEN） | ❌ 未见 |
| 🟠 中 | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` 静默吞掉 `prepare_call` 校验错误（OPEN） | ✅ [#4837](https://github.com/HKUDS/nanobot/pull/4837) 待合并 |
| 🟠 中 | [#4800](https://github.com/HKUDS/nanobot/issues/4800) | `.strip()` 在多模态 `list[dict]` content 上崩溃（OPEN） | ✅ [#4837](https://github.com/HKUDS/nanobot/pull/4837) 待合并 |
| 🟢 低 | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | Slack 依赖缺 `aiohttp`（CLOSED） | ✅ [#4830](https://github.com/HKUDS/nanobot/pull/4830) 已合 |
| 🟢 低 | [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix 设备在 Element 显示 Untrusted（OPEN） | ❌ 未见 |

**信号**：今日有 3 条"多模态/异步取消类"崩溃（#4800、#4805、#4842）集中暴露，提示 nanobot 在消息载荷多态性与异步资源生命周期管理上仍存在系统性的鲁棒性短板。

---

## 六、功能请求与路线图信号

| 提案 | 关联 PR | 进入下版本的概率 |
|---|---|---|
| WebUI 文件编辑 diff 视图 | [#4828](https://github.com/HKUDS/nanobot/pull/4838)（OPEN） | 高（与 WebUI 体验迭代同向） |
| MCP server idle timeout 自动回收 | [#4506](https://github.com/HKUDS/nanobot/pull/4506)（OPEN，conflict） | 中（与 #4764、#4842、#4843 共同重塑 MCP 重连模型） |
| 摄像头采集工具 | [#3378](https://github.com/HKUDS/nanobot/pull/3378) | **已合并**（今日关闭） |
| Provider-hosted web search 本地兜底 | [#3741](https://github.com/HKUDS/nanobot/issues/3741) | 中（Closed 但需求真实存在） |
| CSI-u Shift+Enter 多行输入回归修复 | [#4832](https://github.com/HKUDS/nanobot/pull/4832) | 高（纯回归修复） |
| QQ 指数退避重连 | [#4838](https://github.com/HKUDS/nanobot/pull/4838) | 高（P2 单点修复） |
| Telegram 流式溢出 HTML 解析 | [#4839](https://github.com/HKUDS/nanobot/pull/4839) | 高（P1，针对 #4637） |
| 红帽系证书路径支持 | [#4845](https://github.com/HKUDS/nanobot/pull/4845) | 高（部署场景明确，欧拉/麒麟） |

**路线图趋势**：MCP 重连/取消作用域（#4764/#4842/#4843）、目标运行时收口（#4833/#4844）、WebUI 自动化可观测性（#4822/#4828）正在形成三个清晰的迭代轴。

---

## 七、用户反馈摘要

- **满意信号**：[mxnbf](https://github.com/mxnbf) 在 #4013 中明确表达 "0.1.5post2 (for the webui), its been very good (way to say ty)"，但随后版本破坏其使用体验，提示**升级友好度**是用户情绪的关键杠杆。
- **痛点 1：WhatsApp 群组行为回归**："i try not go into detail, because i can see where this is heading. Currently group allow is broken."（[#4823](https://github.com/HKUDS/nanobot/issues/4823)）—— 用户对群组消息误发有强烈隐私担忧。
- **痛点 2：LLM 流式超时降级可用性**："this renders any real work useless. i have to ask it too keep going"（[#4013](https://github.com/HKUDS/nanobot/issues/4013)）—— 长任务默认被切成 90 秒窗口对生产工作流影响显著。
- **痛点 3：Matrix 设备信任链缺失**（[#4841](https://github.com/HKUDS/nanobot/issues/4841)）—— Element 客户端普及了 cross-signing，但 nanobot bot 设备缺乏配套验证路径，"Untrusted" 警告难以清除。
- **痛点 4：依赖完整性**（#4829）—— Slack 可选依赖漏装导致用户首次启用时即失败，影响首次体验。
- **隐含诉求**：从 [#2463](https://github.com/HKUDS/nanobot/issues/2463) 的 13 条评论可见，**调用语义透明性**对深度集成方至关重要；将这种议题标记为 stale 关闭可能错失重要架构反馈。

---

## 八、待处理积压

以下 Issue/PR 已开放较长时间或具备较高影响力，需维护者重点关注：

| 编号 | 类型 | 滞留时长 | 风险 |
|---|---|---|---|
| [#4825](https://github.com/HKUDS/nanobot/issues/4825) | 安全 P1 | 1 天（未合并同类披露的 fix） | 与 #4826/#4827 同根因，三连披露中唯一 OPEN，若不收敛易造成社区信任损耗 |
| [#4823](https://github.com/HKUDS/nanobot/issues/4823) | 回归 Bug | 1 天，无关联 PR | 影响 WhatsApp 群组用户日常使用 |
| [#4841](https://github.com/HKUDS/nanobot/issues/4841) | 平台兼容 | <1 天 | Matrix E2EE 是高频部署场景，需尽快给出设备验证路径 |
| [#4805](https://github.com/HKUDS/nanobot/issues/4805) / [#4800](https://github.com/HKUDS/nanobot/issues/4800) | Bug | 已合并修复合并 PR [#4837](https://github.com/HKUDS/nanobot/pull/4837)，需 review | 阻塞多模态场景稳定性 |
| [#4506](https://github.com/HKUDS/nanobot/pull/4506) | 增强 PR | 13 天 OPEN，conflict 标记 | 与 MCP 重连生态（#4764/#4842/#4843）联动，需协调合并 |
| [#4078](https://github.com/HKUDS/nanobot/issues/4078) | 历史安全 | 40 天 | 虽已由 #4669 关闭，但 fix 本身（[#4669](https://github.com/HKUDS/nanobot/pull/4669)）仍 OPEN 等待合并 |
| [#3741](https://github.com/HKUDS/nanobot/issues/3741) | 功能请求 | 近 2 个月被关闭 | provider-hosted web search 需求真实存在，关闭前应确认替代方案 |

---

## 总结

NanoBot 今日在**安全闭环**与**依赖完整性**上交出了较为扎实的答卷，但**MCP 异步资源管理**、**多模态载荷处理**、**WebUI 鉴权与消息路由**三处仍是反复触雷的高发区。建议维护者优先合并 #4669（安全）、#4837（崩溃）、#4830（依赖）三个 P1 PR，并在下一版本前对 #4825 / #4823 给出明确修复路线图。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-07-08** | 数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## ① 今日速览

Hermes Agent 今日进入 **高频维护与修复周期**：24 小时内产出 50 条 PR 更新（35 条待合并 / 15 条关闭），Issues 侧则全部为新增或活跃状态，**0 条关闭**，反映 Issue 处理流水线较 PR 侧明显滞后。当日发布了 v0.18.1 与 v0.18.2 双版本（均为 7 月 7 日），累计回滚自 v0.18.0 起的约 **660 个 PR**，标志着上游准备出一个面向 Docker / PyPI / 托管部署的稳定快照。整体健康度：**活跃但偏向技术债清理与安全补丁**，功能新增节奏有所放慢（仅 15% PR 属于新功能）。

---

## ② 版本发布

### v0.18.2 / v2026.7.7.2 — 紧急补丁 (2026-07-07)
- **核心变更**：`fix(whatsapp): unpin Baileys from git commit, use published 7.0.0-rc13`
- **发布动机**：修复 Docker tagged 构建中 WhatsApp Baileys 依赖被钉在 git commit 上、导致 tagged 镜像构建失败的问题
- **影响**：仅影响 WhatsApp 平台依赖；建议所有使用 `v0.18.1` Docker 镜像的下游消费者升级到此版

### v0.18.1 / v2026.7.7 — 稳定快照 (2026-07-07)
- **核心定位**：自 v0.18.0 (7 月 1 日) 起 ~660 个 PR 的**汇总 tag**，不含新功能
- **变更范围**：bug 修复、稳定性增强、in-progress 特性收口
- **破坏性变更**：官方表述未声明 BC break，但仍需关注因 ~660 PR 累计产生的潜在行为漂移
- **迁移注意**：依赖 Docker 镜像或 PyPI 包的下游应固定到此 tag，并对比与 `main` HEAD 的差异以避免后续漂移

---

## ③ 项目进展

今日 15 条 PR 进入已合并/关闭状态，重点方向：

| 类别 | 代表 PR | 推进内容 |
|---|---|---|
| **安全依赖升级** | [#60697](https://github.com/NousResearch/hermes-agent/pull/60697) (closed)、[#60676](https://github.com/NousResearch/hermes-agent/pull/60676) (closed)、[#60728](https://github.com/NousResearch/hermes-agent/pull/60728) | cryptography 48.0.1、starlette 1.3.1、cbor2/msgpack/tornado 升级，关闭多个高/中危 CVE |
| **环境变量安全** | [#60680](https://github.com/NousResearch/hermes-agent/pull/60680) | 将 HASS_TOKEN 从 Tier-1 无条件剥离降级为条件剥离，修复 [#60667](https://github.com/NousResearch/hermes-agent/issues/60667) |
| **工具与插件** | [#20713](https://github.com/NousResearch/hermes-agent/pull/20713) | 新增 `end_turn` 插件工具合约，允许工具批处理表达终止意图 |
| **CLI 行为** | [#51797](https://github.com/NousResearch/hermes-agent/pull/51797) | 一次性会话保留 safe-mode / ignore-rules 隔离语义 |

值得关注但**仍待合并**的 PR：
- [#60638](https://github.com/NousResearch/hermes-agent/pull/60638)：Desktop 重构为基于 Dockview 布局树的**贡献驱动壳层 + 插件 SDK**，影响面较大
- [#38846](https://github.com/NousResearch/hermes-agent/pull/38846)：Desktop i18n 从 4 语言扩展到 **15 语言**（混合 JSON + TypeScript）
- [#60730](https://github.com/NousResearch/hermes-agent/pull/60730)：网关 OIDC 客户端凭据中继（无需 Nous Portal 的自托管场景）

整体而言：项目在 **安全姿态、桌面端架构升级、TUI 长消息可达性** 三个方向有明显推进，但 PR 合并率（15/50 = 30%）较一般，说明 **评审瓶颈或合并门槛趋严**。

---

## ④ 社区热点

按评论数与互动热度：

### 🔥 高讨论 Issues
- **[#16185](https://github.com/NousResearch/hermes-agent/issues/16185)** — Telegram 语音消息未自动转写（4 评论，跨 4/26—7/8 持续跟进）。用户预期 Hermes Agent 通过 faster-whisper 自动转写，但 STT 未被触发。
- **[#60659](https://github.com/NousResearch/hermes-agent/issues/60659)** — Desktop 折叠侧边栏悬停揭示不可靠（3 评论，今日新增）。触发带仅 14px，间隔 10px + 130ms 延迟导致快速/大幅鼠标移动失效。
- **[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)** — `/model` 命令对自定义 provider 仅显示一个模型（3 评论）。
- **[#42042](https://github.com/NousResearch/hermes-agent/issues/42042)** — Desktop 请求为 Local/自定义端点增加 API Key 字段（3 评论）。

### 🔥 高讨论 PRs
- **[#60697](https://github.com/NousResearch/hermes-agent/pull/60697)** — 依赖安全升级（已关闭，作者 AIalliAI）
- **[#60676](https://github.com/NousResearch/hermes-agent/pull/60676)** — Starlette CVE 修复（已关闭）

**核心诉求观察**：
1. **自定义模型 provider / 模型选择器**在 Desktop 与 CLI 上同时存在至少 4 个相关 Issue（[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)、[#42042](https://github.com/NousResearch/hermes-agent/issues/42042)、[#58393](https://github.com/NousResearch/hermes-agent/issues/58393)、[#60722](https://github.com/NousResearch/hermes-agent/issues/60722)），表明该模块存在**系统性回归**，需维护者集中排查而非逐 Issue 修补。
2. **侧边栏揭示机制**的体验问题在 [#60659](https://github.com/NousResearch/hermes-agent/issues/60659) 已有 PR [#60733](https://github.com/NousResearch/hermes-agent/pull/60733) 提出"可视 grip"修复方案。

---

## ⑤ Bug 与稳定性

按严重度（官方标签）排序：

| 严重度 | Issue | 概要 | 已有 fix？ |
|---|---|---|---|
| **P2** | [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) | Telegram 语音消息未触发自动转写 | ❌ |
| **P2** | [#57896](https://github.com/NousResearch/hermes-agent/issues/57896) | 多路复用网关下 feishu websocket 被错误视为端口绑定平台 | ❌ |
| **P2** | [#58393](https://github.com/NousResearch/hermes-agent/issues/58393) | Desktop 自定义 OpenAI 兼容 provider 在模型选择器中不可见/不可选 | ❌ |
| **P2** | [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) | `/model` 对自定义 provider 仅显示一个模型 | ✅ [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) 待合并 |
| **P2** | [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) | Memory 压缩 P1 故障率 71.4%（105/147），86 条未压缩积压（德语区 SysOps 报告） | ❌ |
| **P2** | [#60726](https://github.com/NousResearch/hermes-agent/issues/60726) | 多路复用开启时 `/background` 抛 `UnscopedSecretError` | ❌ |
| **P3** | [#60659](https://github.com/NousResearch/hermes-agent/issues/60659) | Desktop 折叠侧边栏悬停触发不可靠 | ✅ [#60733](https://github.com/NousResearch/hermes-agent/pull/60733) |
| **P3** | [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) | Desktop 缺少 Local/自定义端点 API Key 输入字段 | ❌ |
| **P3** | [#58269](https://github.com/NousResearch/hermes-agent/issues/58269) | feishu 适配器将 markdown 表格强制转为纯文本 | ❌ |
| **P3** | [#60722](https://github.com/NousResearch/hermes-agent/issues/60722) | MoA 预设被 `_filter_explicit_provider_rows` 过滤后从 Desktop 模型选择器消失（由 commit `37a4cf90` 引入回归） | ❌ |

**未结 P2 问题：5 条**，全部为 7 月以来新报告或仍未关闭，其中 [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) 涉及 **Memory 核心组件稳定性降级**，值得维护者优先关注。

---

## ⑥ 功能请求与路线图信号

| 信号 | Issue | 是否已有 PR | 进入下一版本可能性 |
|---|---|---|---|
| **工具描述语义澄清** | [#60735](https://github.com/NousResearch/hermes-agent/issues/60735) — `schema.description` vs `register_tool(description)` 文档语义 | ❌ | 高（文档级） |
| **Profile 级别预加载技能** | [#60734](https://github.com/NousResearch/hermes-agent/issues/60734) — Feishu/WeChat 每次会话都需重载技能 | ❌ | 中 |
| **Desktop 侧边栏信息架构** | [#60732](https://github.com/NousResearch/hermes-agent/issues/60732) — Repository vs Branch 层级视觉冗余 | ❌ | 中（依赖 [#60638](https://github.com/NousResearch/hermes-agent/pull/60638) 重构落地） |
| **Desktop 自定义端点 API Key 字段** | [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) | ❌ | 高（衔接 [#58393](https://github.com/NousResearch/hermes-agent/issues/58393)） |
| **`end_turn` 插件合约** | [#20713](https://github.com/NousResearch/hermes-agent/pull/20713) | ✅（PR 已提） | 中（接口类扩展） |
| **OIDC 自托管身份中继** | [#60730](https://github.com/NousResearch/hermes-agent/pull/60730) | ✅（PR 已提） | 中（企业场景） |

**路线图信号**：下个 minor 版本（v0.19.x）预计会围绕 **Desktop 体验整合（i18n + 模型选择器 + 侧边栏）+ 自定义 provider 一致性修复**展开。

---

## ⑦ 用户反馈摘要

从评论中提炼的痛点与诉求：

- **多路复用/Profile 隔离稳定性**（[#60726](https://github.com/NousResearch/hermes-agent/issues/60726)、[#57896](https://github.com/NousResearch/hermes-agent/issues/57896)）：用户在启用 `multiplex_profiles` 后遭遇 `UnscopedSecretError`、feishu 配置被误判等问题，反映**配置作用域语义尚未在文档/SDK 中完全统一**。
- **Desktop 与本地模型 / 自定义 provider 的"最后一公里"**（[#42042](https://github.com/NousResearch/hermes-agent/issues/42042)、[#58393](https://github.com/NousResearch/hermes-agent/issues/58393)、[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)、[#60722](https://github.com/NousResearch/hermes-agent/issues/60722)）：多位用户在 4 条独立 Issue 中均反馈**自定义 OpenAI 兼容 provider 在 UI 上可见性/可选择性差**，且桌面模型选择器存在一致性回归。
- **TUI 长响应可达性**（[PR #55611](https://github.com/NousResearch/hermes-agent/pull/55611)、[#60727](https://github.com/NousResearch/hermes-agent/pull/60727)、[#60731](https://github.com/NousResearch/hermes-agent/pull/60731)）：用户反馈"长回复无征兆消失"、"WebSocket 静默挂起"，提示 macOS 休眠、代理超时场景下客户端恢复能力差。
- **WhatsApp / Telegram / Feishu 平台适配器**：[#16185](https://github.com/NousResearch/hermes-agent/issues/16185) 显示 Telegram 语音转写能力未真正落地；[#58269](https://github.com/NousResearch/hermes-agent/issues/58269) 揭示 feishu 适配器仍有"全消息降级"的旧 fallback。
- **Memory 系统可靠性**（[#47464](https://github.com/NousResearch/hermes-agent/issues/47464)）：71.4% 的错误率与 86 条积压属于**运营级 P1 事件**，需要立即诊断。

**满意度**：用户对 v0.18.x 汇总 tag 抱有期待，但对回归问题（[#60722](https://github.com/NousResearch/hermes-agent/issues/60722) MoA 预设被过滤器吞掉）表达不满。

---

## ⑧ 待处理积压与维护提醒

- **[#47464](https://github.com/NousResearch/hermes-agent/issues/47464)**（已 22 天活跃）：P1 Memory 压缩服务故障率飙升至 71.4%，德语区 SysOps 报告处于 `watching` 状态，建议尽快分诊并公开 RCA。
- **[#16185](https://github.com/NousResearch/hermes-agent/issues/16185)**（活跃 73 天）：Telegram 语音消息自动转写，跨 v0.12 → v0.18 仍未实现，长期累积可见但优先级仅 P2。
- **[#20582](https://github.com/NousResearch/hermes-agent/issues/20582)**（活跃 63 天）：自定义 provider 模型选择问题，已在 [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) 出现 fix 但尚未合并，存在被新回归（[#60722](https://github.com/NousResearch/hermes-agent/issues/60722)）覆盖的风险。
- **[#25119](https://github.com/NousResearch/hermes-agent/pull/25119)**（PR 挂起 56 天）：WhatsApp

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-07-08** | 数据时间窗口：过去 24 小时

---

## 1. 今日速览

PicoClaw 在过去 24 小时内的整体活动处于**中等偏低水平**：累计 7 条 Issue 更新、5 条 PR 更新，无新版本发布。值得关注的是，新增 Issue 数量明显放缓（仅 1 条 #3232），但**积压的 stale Issue 占比偏高**（7 条中有 5 条已被标记为 stale），表明维护者精力有限、社区响应存在滞后。今日关闭了 2 条 PR（含一个新增当日即关闭的 #3234）和 2 条 Issue，整体仍呈净负积压趋势，项目**维护健康度需要关注**。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。最新版本仍为历史发布的 v0.3.1（在 Issue #3232 中用户确认正在使用）。

---

## 3. 项目进展

### ✅ 今日关闭 / 合并的重要 PR

| PR | 标题 | 类型 | 影响 |
|----|------|------|------|
| [#3234](https://github.com/sipeed/picoclaw/pull/3234) | CHORE: anthropic_messages 嵌入图片媒体 | 修复（已关闭） | 使视觉（vision）模型可见用户消息中的图片；解决模型"看不到图"问题 |
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | feat: 添加 Android ADB 远程操作工具 | 新功能（已关闭） | 实验性功能，增加移动设备控制原语；状态为关闭暗示可能未合并或需重构 |

### 🔄 在途关键 PR

- **[#3222](https://github.com/sipeed/picoclaw/pull/3222)**：`refactor(deltachat)` 净减 -320 行代码的清理重构（引用官方中继列表、删除遗留特性、重命名 API）
- **[#3233](https://github.com/sipeed/picoclaw/pull/3233)**：专门为 #3222 提供向后兼容修复，说明 #3222 引入了破坏性变更
- **[#3226](https://github.com/sipeed/picoclaw/pull/3226)**：修复 `write_file` 主动"指导"模型覆盖已有 MEMORY.md 的危险行为

**整体评估**：项目在 deltachat 渠道重构和安全工具行为上有所推进，但尚无新版本释出，**对外可感知的进展有限**。

---

## 4. 社区热点

按评论数 / 互动量排序：

| 排名 | 条目 | 类型 | 评论 | 👍 | 关注点 |
|------|------|------|------|-----|--------|
| 1 | [#3093](https://github.com/sipeed/picoclaw/issues/3093) | Feature Request | 5 | 1 | 要求加入 SimpleX/Wire/Tox 通讯网关，今日已关闭 |
| 2 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Bug | 3 | 0 | Volcengine 豆包 Tool Call 文本泄漏，疑似 provider 解析漏洞 |
| 3 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | Bug | 2 | 0 | NanoKVM (v2.4.0) 集成 PicoClaw 后 GPT 不可用 |
| 4 | [#3159](https://github.com/sipeed/picoclaw/issues/3159) | Bug | 2 | 0 | Agent 任务重复执行，已关闭 |

**诉求分析**：沟通渠道扩展（#3093）和 provider 兼容性（#3153、#3195）是用户呼声最高的两类问题，反映 PicoClaw 在多模型支持上的**生态适配仍是核心痛点**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度
- **[#3153](https://github.com/sipeed/picoclaw/issues/3153)** Volcengine Doubao Seed tool_call 文本泄漏
  - 影响：`doubao-seed-2.0-pro` 模型返回的 `<seed:tool_call>` XML 未被解析执行，直接暴露给用户
  - 状态：OPEN，**尚无修复 PR**
  - 已 16 天无维护者响应，被标记 stale

- **[#3232](https://github.com/sipeed/picoclaw/issues/3232)** 无 fallback 模型时 rate limiting 失效
  - 影响：单模型配置下 RPM 控制完全失效，生产环境**潜在超额调用**风险
  - 状态：OPEN（今日新开），**尚无修复 PR**
  - 报告版本：v0.3.1，影响面广

### 🟡 中等严重度
- **[#3195](https://github.com/sipeed/picoclaw/issues/3195)** NanoKVM 上 OpenAI GPT 不可用
  - 影响：NanoKVM (2.4.0 新功能) 与 PicoClaw 集成路径上的配置不兼容
  - 状态：OPEN，**尚无修复 PR**

- **[#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197)** Codex / AntyGravity OAuth 登录失效（重复报告）
  - 状态：OPEN，疑似 OAuth 流程变更或凭证格式问题

### 🟢 低严重度（有关联 PR）
- ~~**#3159 任务重复问题**~~：已关闭

### 🔧 安全相关 PR
- **[#3226](https://github.com/sipeed/picoclaw/pull/3226)**：`write_file` 缺少防御性提示，"教唆"模型破坏性覆盖；该 PR 为该类问题提供修复

---

## 6. 功能请求与路线图信号

### 已关闭 / 归档的功能请求
- **[#3093](https://github.com/sipeed/picoclaw/issues/3093)** SimpleX/Wire/Tox 网关：5 条评论 + 1 👍 是今日最热功能请求，今日被关闭。**建议关注关闭原因**（被合并 / 推迟 / wontfix），以判断未来是否纳入路线图。

### 实验性 / 在途功能
- **[#3157](https://github.com/sipeed/picoclaw/pull/3157)** Android ADB 工具：状态关闭但功能定位清晰（设备列表、截图、UI 层级、tap/swipe），可视为**移动控制能力的早期信号**，未来可能以更稳定的形态回归。

### 路线图推测
- deltachat 渠道重构（PR #3222 + #3233）显示维护团队正在**清理历史债务**而非扩张功能，预计 v0.4 系列版本将以"稳定化"为主旋律。
- 若 #3232 rate limiting 问题被修复，可能伴随下一个版本发布。

---

## 7. 用户反馈摘要

| 用户痛点 | 证据 | 情绪 |
|---------|------|------|
| **多模型兼容性差** | #3153 豆包、#3195 GPT、#3196/#3197 OAuth | 不满，挫败感 |
| **嵌入式部署障碍** | #3195 NanoKVM 用户无法按文档完成基础配置 | 不满，文档与实现脱节 |
| **Agent 行为不可预测** | #3159 "agent 重复执行前序任务" | 不满，信任受损 |
| **生产安全顾虑** | #3226 write_file 提示词暗示破坏性操作 | 担忧 |
| **视觉模型支持缺失** | #3234 修复暴露此前图片被静默丢弃 | 失望 |

**关键洞察**：用户反馈集中在"基础可靠但边缘场景脆弱"——核心模型路径可用，但**新型 provider、嵌入式场景、多模态**三个方向均需投入。

---

## 8. 待处理积压 ⚠️

维护者需关注以下**长期未响应**条目：

### 高优先级积压
| 条目 | 类别 | 等待天数 | 建议行动 |
|------|------|---------|---------|
| [#3153](https://github.com/sipeed/picoclaw/issues/3153) | BUG | ~16 天 | 需 triage（已 stale） |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | BUG | ~8 天 | 影响 NanoKVM 新功能口碑 |
| [#3196](https://github.com/sipeed/picoclaw/issues/3196) | BUG | ~8 天 | 与 #3197 重复，建议合并 |
| [#3197](https://github.com/sipeed/picoclaw/issues/3197) | BUG | ~8 天 | 同上 |

### 待审阅 PR 积压
- [#3222](https://github.com/sipeed/picoclaw/pull/3222) deltachat 大型重构，等待 review
- [#3226](https://github.com/sipeed/picoclaw/pull/3226) write_file 安全修复，等待 review
- [#3233](https://github.com/sipeed/picoclaw/pull/3233) 向后兼容补丁，依赖 #3222 合并策略决定

### 关闭但未释出
- [#3232](https://github.com/sipeed/picoclaw/issues/3232) 今日新开，建议**与下个版本捆绑修复**

**维护者建议**：当前 5/7 Issue 被自动标 stale、PR 平均响应滞后，**建议发起一次集中 triage pass**，特别是 deltachat 重构的去留决定——这直接影响 #3233 的必要性和后续 API 稳定性。

---

*报告基于 2026-07-08 过去 24 小时 GitHub 数据生成。统计项：7 Issues / 5 PRs / 0 Releases。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期**：2026-07-08
**数据周期**：过去 24 小时
**数据源**：GitHub (qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日呈"安全驱动 + 文档重整"双主线格局：提交了一个高危本地 webhook 安全披露（Issue #2970），触发社区对 loopback 鉴权缺陷的关注；PR 侧活跃度较高，21 条 PR 中已合并/关闭 8 条，**主要集中在文档纠错与 provider 兼容性修复**（由 glifocat 主导的 5 篇 docs/SDK 修复集中落地），另有 13 条处于待审状态。无新版本发布。整体而言项目处于维护密集期，提交节奏稳定，质量侧重点从"功能堆叠"转向"安全加固与代码-文档一致性"。

---

## 2. 版本发布

**无新版本发布。**

跳过该章节。

---

## 3. 项目进展

今日已合并/关闭 PR 共 8 条，重点推进方向如下：

| 方向 | PR | 核心价值 |
|---|---|---|
| **CLI 缺陷修复** | [#2804](https://github.com/qwibitai/nanoclaw/pull/2804) | 修复 `ncl messaging-groups create` 因 `instance NOT NULL` 约束直接失败的死链，使 CLI 路径恢复可用 |
| **Discord 适配** | [#2922](https://github.com/qwibitai/nanoclaw/pull/2922) | 解包 forwarded-message 快照，使代理可正确看到转发内容 |
| **Provider 兼容** | [#2965](https://github.com/qwibitai/nanoclaw/pull/2965) | 将 `rate_limit_event` 匹配为 SDK 顶层消息类型，跟随 `@anthropic-ai/claude-agent-sdk` 0.3.x 升级 |
| **文档同步** | [#2964](https://github.com/qwibitai/nanoclaw/pull/2964) | 将 SDK deep-dive 从 0.2.x 升级到 0.3.197（基于真实包验证） |
| **文档同步** | [#2963](https://github.com/qwibitai/nanoclaw/pull/2963) | 重写 architecture.md 与 agent-runner-details.md 中与代码脱节的章节 |
| **文档同步** | [#2962](https://github.com/qwibitai/nanoclaw/pull/2962) | 同步 DB schema/实体文档与 migrations 010–018 |
| **文档同步** | [#2961](https://github.com/qwibitai/nanoclaw/pull/2961) | 修复 README/CONTRIBUTING/CLAUDE.md 等过时陈述（如移除已交付 skill 的招揽文案） |
| **流程测试** | [#2919](https://github.com/qwibitai/nanoclaw/pull/2919) | 标签为"LargePRTest"，已关闭 |

**整体评估**：今日净增的是"代码与文档一致性"的实质性提升——单次提交由 glifocat 一人完成 4 篇系统性 docs 校对，反映仓库存在文档长期脱节问题，本次清理是质变型进展。功能侧单条关键 bug 修复（#2804、#2922、#2965）使三个核心链路（CLI、Discord、provider 错误识别）恢复/改善。

---

## 4. 社区热点

今日评论/互动数据均为 0 或 undefined，缺少显式热度信号。但从议题本身聚焦度看，**最值得关注的当属 Issue #2970**：

- **[Issue #2970 — Local action forgery via unauthenticated forwarded gateway loopback webhook](https://github.com/qwibitai/nanoclaw/issues/2970)**（OPEN，2026-07-07）
  作者 YLChen-007 提交的安全披露指出：NanoClaw 启动了一个仅 localhost 可达的 webhook 用于接收 forwarded gateway 交互事件，但**未对发送方进行身份认证**就信任消息内容，导致同机进程可伪造本地动作。这是典型 loopback 信任假设漏洞（CWE-306 范畴），攻击面虽限于同机用户，但因 webhook 语义是"受信任的 gateway 转发"，一旦失守等于旁路核心权限模型。

**潜在诉求**：社区期望项目对所有 inbound 通道（含 loopback）统一施加鉴权层，并提供 webhook secret/HMAC 等标准化机制。**目前尚无对应修复 PR 提交**，需关注后续动向。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高危（安全）

1. **[#2970](https://github.com/qwibitai/nanoclaw/issues/2970)** — Unauthenticated loopback webhook（见上）
   **状态**：仅有披露，无 fix PR。建议优先响应。

2. **[PR #2800](https://github.com/qwibitai/nanoclaw/pull/2800)** — `ncl groups create --folder ../../etc` 路径穿越 (CWE-22)
   作者 sturdy4days，OPEN（自 2026-06-17 起），需要 `assertValidGroupFolder` 等校验器拦截 `..` 段。
   **状态**：已有修复 PR，但未合并，积压 21 天。

3. **[PR #2973](https://github.com/qwibitai/nanoclaw/pull/2973)** — `minimumReleaseAge` 被误置于 `pnpm:` key 下导致供应链时间门控未生效
   作者 sturdy4days，OPEN，2026-07-07 提出。
   **状态**：修复 PR 已就位但待审。

### 🟠 中危（功能失效/崩溃）

4. **[PR #2975](https://github.com/qwibitai/nanoclaw/pull/2975)** — webhook 端口 EADDRINUSE 时整个 host 被拉崩
   作者 wuisabel-gif，OPEN，2026-07-08 提出。`server.listen()` 未注册 `error` 监听器，单端口占用即导致消息轮询/投递/sweep 全停。
   **状态**：已有 fix PR。

5. **[#2804](https://github.com/qwibitai/nanoclaw/pull/2804)** — `ncl messaging-groups create` 完全失败（**已关闭**）
   今日已修复。

6. **[PR #2966](https://github.com/qwibitai/nanoclaw/pull/2966)** — Provider 错误被错误标记为 `completed`，掩盖失败 ack
   作者 glifocat，OPEN（草稿），与 agent-runner poll-loop 行为相关。

### 🟡 低危（文档/约定）

7. **[PR #2729](https://github.com/qwibitai/nanoclaw/pull/2729)** — Telegram 配对文档中的 status-block 名称对不上 setup 步骤输出（自 2026-06-11 起 OPEN，积压 27 天）

---

## 6. 功能请求与路线图信号

今日 OPEN 状态的功能/增强类 PR（含强烈路线图信号）：

| PR | 内容 | 路线图信号 |
|---|---|---|
| **[#2909](https://github.com/qwibitai/nanoclaw/pull/2909)** | 设置向导中模板化流程 + 首个 agent 标记（amit-shafnir） | Agent Templates 系列第二部分，已与 #2890（模板加载器）配套，**路线图概率：高** |
| **[#2958](https://github.com/qwibitai/nanoclaw/pull/2958)** | Teams-CLI-first credentials 流程（Koshkoshinsk） | 用 `teams login` + `teams app create --json` 替代 ~7 步 Azure 门户指引，与 SSF 重组一致 |
| **[#1598](https://github.com/qwibitai/nanoclaw/pull/1598)** | `add-remote-storage` skill：WebDAV/S3 via rclone + systemd（glifocat） | 自 2026-04-02 起 OPEN 已**超过 3 个月**，是当前最老的未合并 PR，需维护者明确取舍 |
| **[#2972](https://github.com/qwibitai/nanoclaw/pull/2972)** | Wizard UX 改进 + add-slack Socket Mode 修复（Koshkoshinsk） | 包含 4 个子提交，触及配对卡片、spinner 异步化等体验问题 |
| **[#2971](https://github.com/qwibitai/nanoclaw/pull/2971)** | `ncc` 工具 skill：host 运维与健康 CLI（zivisaiah） | 工具型 skill，无源码改动，合并成本低 |
| **[#2873](https://github.com/qwibitai/nanoclaw/pull/2873)** | 将 pre-flight 与 credentials 拆分，使 `/update-skills` 可刷新代码（glifocat） | 解决 #2868，运维体验改善 |

**判断**：#2909 与 #2958 互为设置向导迭代的两个分支，合并概率较高；#1598 因长期未响应，可能成为路线图分水岭的判定点（接收 vs. 关闭）。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 评论数均为 0 或 undefined，**无新显式用户反馈**。可从披露与修复内容侧推断的隐式痛点：

- **痛点 A：CLI 死链（已修复）**：`messaging-groups create` 长期抛 `NOT NULL` 错误，意味着真实用户在过去数周无法通过 CLI 创建消息组（[#2804](https://github.com/qwibitai/nanoclaw/pull/2804)）。
- **痛点 B：文档/实际行为脱节**：glifocat 单日提交 4 篇文档纠错，说明维护者自身也意识到仓库文档"反向工程"过时较严重；对终端用户而言，这意味着 SKILL.md 不可机械遵循。
- **痛点 C：本地 webhook 信任模型模糊**：Issue #2970 反映出"localhost 即可信"假设在多租户/共享主机/容器侧共享 PID/network 命名空间时存在脆弱性。
- **痛点 D：大型 PR 难以评审**：#2919（"LargePRTest"）虽为测试流程，恰好印证社区对如何评审大体量变更缺乏稳定流程。
- **痛点 E：loopback webhook 缺失 error 监听**（#2975）：单点 EADDRINUSE 拖垮整个 host 是运维侧明显痛点。

---

## 8. 待处理积压

按重要性 + 滞留时间排序，提醒维护者关注：

| 滞留 | 项 | 风险 | 链接 |
|---|---|---|---|
| **96 天** | PR #1598 add-remote-storage skill | 长期未响应可能影响贡献者信心 | [链接](https://github.com/qwibitai/nanoclaw/pull/1598) |
| **27 天** | PR #2729 add-telegram 文档配对名不一致 | 用户走完 setup 后对照文档失败 | [链接](https://github.com/qwibitai/nanoclaw/pull/2729) |
| **21 天** | PR #2800 `groups create --folder` 路径穿越（CWE-22） | **安全修复积压**，风险评级高 | [链接](https://github.com/qwibitai/nanoclaw/pull/2800) |
| **11 天** | PR #2873 skills pre-flight/credentials 拆分 | 与 #2868 关联，影响运维 | [链接](https://github.com/qwibitai/nanoclaw/pull/2873) |
| **6 天** | PR #2909 设置向导模板化 | 路线图待合并 | [链接](https://github.com/qwibitai/nanoclaw/pull/2909) |
| **2 天** | PR #2966 provider 错误记为 completed | 错误语义混淆，影响可观测性 | [链接](https://github.com/qwibitai/nanoclaw/pull/2966) |
| **1 天** | PR #2975 EADDRINUSE 拖垮 host | 修复 PR 已就位，待审 | [链接](https://github.com/qwibitai/nanoclaw/pull/2975) |
| **1 天** | PR #2973 `minimumReleaseAge` 供应链门控未激活 | **安全配置类**，建议优先合入 | [链接](https://github.com/qwibitai/nanoclaw/pull/2973) |
| **1 天** | PR #2974 approvals: claim before handler（防双跑） | 竞态修复，重要 | [链接](https://github.com/qwibitai/nanoclaw/pull/2974) |
| **1 天** | Issue #2970 unauthenticated loopback webhook | **高危披露，无修复 PR** | [链接](https://github.com/qwibitai/nanoclaw/issues/2970) |

**维护者建议优先级**：
1. 立即响应 Issue #2970，给出缓解建议或时间线。
2. 合入 PR #2973（配置修复，无侵入性）与 #2974（并发安全）。
3. 合入 PR #2800 路径穿越修复，关闭 21 天的安全积压。
4. 对 PR #1598 给出明确处置（合并/关闭/拆分），避免贡献者沉默流失。

---

## 附录：项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issues 新增 | 1 | 正常（其中 1 条安全披露） |
| 24h PRs 新增/活跃 | 21 | 高活跃度 |
| 24h PR 合并/关闭率 | 8 / 21 ≈ **38%** | 良好 |
| 文档纠错 PR 数 | 4 | 反映仓库历史欠账 |
| 安全相关 PR/Issue | 4 | 需重点跟踪 |
| 长期积压（>30 天） | 2 | PR #1598、#2729 |
| 新版本发布 | 0 | 处于"修整期"，符合当前节奏 |

**综合判断**：项目处于**健康但需关注安全债**的阶段。文档清理已迈出关键一步，但安全相关积压（#2800、#2970）若不在一周内消化，可能在公开披露窗口期放大风险。建议维护者本周聚焦：(1) 关闭 #2970 安全披露；(2) 合入 #2973/#2974/#2800；(3) 对 #1598 给出处置结论。

---

*报告生成时间：2026-07-08 | 数据来源：GitHub API | 报告口径：过去 24 小时活跃数据 + 历史积压提醒*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-07-08**
**仓库：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日呈现**高活跃度、内部推进为主**的开发态势。过去 24 小时共产生 50 条 PR 更新（38 待合并 / 12 已关闭）和 6 条 Issue 更新（5 活跃 / 1 已关闭），无新版本发布但有一项重要的发布准备 PR (#5598) 正在待合并中。贡献者结构以核心团队（ilblackdragon、henrypark133、pranavraja99、zetyquickly）为主，dependabot 推送了一轮 16 项依赖升级。整体看，Reborn 栈的子代理（subagent）基础设施、WebUI v2 Slack 重构、依赖现代化三条主线齐头并进，CI 与集成测试存在若干已知 flaky，但均已落入修复轨道，项目健康度良好。

---

## 2. 版本发布

**今日无新版本发布。**

但需重点关注的是仍 OPEN 状态的发布准备 PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（`chore: release`），一旦合并将产生以下版本变更：

| Crate | 当前版本 | 目标版本 | 兼容性 |
|---|---|---|---|
| ironclaw_common | 0.4.2 | 0.5.0 | ⚠ **API 破坏性变更** |
| ironclaw_safety | 0.2.2 | 0.2.3 | ✓ 向后兼容 |
| ironclaw_skills | 0.3.0 | 0.4.0 | ⚠ **API 破坏性变更** |
| ironclaw | 0.24.0 | 0.29.1 | 主版本迭代 |
| ironclaw_skill_learning | 0.1.0 | 0.1.1 | ✓ 向后兼容 |

**迁移提示**：`ironclaw_common` 与 `ironclaw_skills` 包含破坏性变更，下游使用者需关注 CHANGELOG 与迁移指南后再升级。

---

## 3. 项目进展

今日共 **4 条 PR 进入关闭/合并状态**，全部为低风险，主要在测试稳定性、文档定稿与依赖治理层面推进：

- **[#5749](https://github.com/nearai/ironclaw/pull/5749) feat(filesystem): CAS-guarded `delete_if_version` on RootFilesystem**（henrypark133）
  为文件系统层补齐 CAS（Compare-And-Swap）删除原语，弥补 `put` 已有 CAS 前置条件但 `delete` 是盲删的不对称设计。这是子代理 await-edge 交付设计（P1.0b PR1 合并门禁）的基础依赖件，已合并落地。

- **[#5748](https://github.com/nearai/ironclaw/pull/5748) docs(reborn): canonical subagent thread-harness design**（henrypark133）
  为 Reborn 栈子代理完成投递与持久化层（含崩溃恢复、审批/鉴权门控）补齐 canonical 设计文档，结束该话题的方案选型阶段。

- **[#5789](https://github.com/nearai/ironclaw/pull/5789) fix(reborn): deterministic pairing-code TTL clock — kill `slack_pairing_redeem` expired-code flake**（henrypark133）
  根因是测试使用 `#[tokio::test(start_paused = true)]` + 虚拟时间推进过期，但生产路径用 `chrono` 的 wall-clock TTL，两套时钟不同步导致 CI 间歇失败。修复统一为确定性时钟，闭环了 [#5787](https://github.com/nearai/ironclaw/issues/5787)。

- **[#5550](https://github.com/nearai/ironclaw/pull/5550) chore(deps): bump the everything-else group（13 updates）**（dependabot）
  一轮 13 项依赖升级已合入，包括 `agent-client-protocol 0.10.4 → 1.1.0`、`webpki-roots` 等。

**整体评估**：项目在「文档定稿 → 接口对称 → 测试稳定 → 依赖升级」四个层面完成了完整的"小步快跑"，是健康的工程节奏。

---

## 4. 社区热点

今日活跃讨论主要集中在两类话题：

**A. 模型网关"能力不可用"守卫误判（最高优先级讨论）**

- **[#5782](https://github.com/nearai/ironclaw/pull/5782) fix(reborn): unavailable-capability guard misfires on code refs**（pranavraja99）
  问题描述清晰：模型网关的 `unavailable_requested_capability_guard` 扫描用户消息中疑似"能力 id"的 token（如 `playwright.sync_api`），一旦命中即抑制**全部**工具调用。这导致用户写代码示例时被误判为请求未注册的能力，整轮交互被中断。

- **[#5817](https://github.com/nearai/ironclaw/pull/5817) fix(reborn): don't treat decimal numbers as requested capability ids**（pranavraja99）
  同源问题的二次复发：`is_likely_capability_reference` 把任意 `x.y` 形式 token（如版本号 `1.2`、坐标 `40.7128,-74.0060`）都当作能力 id 处理。

**诉求分析**：用户在调试或编程场景中频繁被错误拒绝，反映出"模型调用守卫"缺乏上下文感知能力，属于体验类高优先级痛点。

**B. Slack OAuth / WebUI v2 重大重构**

- **[#5643](https://github.com/nearai/ironclaw/pull/5643) feat(reborn): land Slack personal OAuth and WebUI v2 Slack remodel**（BenKurrek）
  把原本叠层的多个 PR（#5643–#5646）合并为一个底座 PR，覆盖 CI 中跑 WebUI v2 JS 测试、Slack 个人 OAuth 基础、用个人 OAuth 取代 pairing code、拒绝旧版 Slack 配置字段等。`size: XL / risk: medium`，覆盖 channel/cli、channel/web、tool、pairing、ci、docs、dependencies 多模块。

**诉求分析**：这反映了产品方向上从"管理员发放 pairing code"向"标准 OAuth 授权"的范式转换，意图对齐主流 SaaS 集成体验。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高优先级

- **[#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E failed**（github-actions[bot，自 2026-05-27 起持续出现）
  凌晨 04:16 UTC 的 Nightly E2E 工作流 `Full E2E / E2E (web-regressions)` 失败，commit `fab83e9f`，仍未给出修复 PR。该 Issue 历史较长、bot 自动开单且零评论，疑似处于"开单后无人认领"状态，**维护者应介入排查**。

### 🟡 中优先级

- **[#5702](https://github.com/nearai/ironclaw/issues/5702) GitHub issue search/create 返回 HTTP 403**（[bug_bash_P2]，joe-rlo，4 条评论）
  Agent 的 GitHub 集成在搜索/创建 Issue 时即便配置正确仍报 `operation_failed`。这是阻塞性功能故障，目前**尚未有修复 PR**。

### 🟢 低优先级 / 已修复

- **[#5705](https://github.com/nearai/ironclaw/issues/5705) Terminal icon 无法禁用**（[bug_bash_P3]，joe-rlo）
  聊天 UI 中的终端图标缺少设置开关，与 [#5555](https://github.com/nearai/ironclaw/issues/5555) 浮窗重叠问题相关但独立，**无 fix PR**。

- **[#5557](https://github.com/nearai/ironclaw/issues/5557) Logs deep link 需点击两次才加载会话**（[bug_bash_P3]，joe-rlo）
  URL 已携带 thread/run ID 但首次进入 Logs 页仍显示"Select conversation"，重复点击才生效。**无 fix PR**。

- **[#5787](https://github.com/nearai/ironclaw/issues/5787) flaky: `slack_pairing_redeem_rejects_expired_code`**（henrypark133）
  **已闭环**：[#5789](https://github.com/nearai/ironclaw/pull/5789) 合并关闭该 Issue。

### 📊 CI 失败分布

今日自动生成的故障分类报告 **[#5788](https://github.com/nearai/ironclaw/issues/5788) Daily ironclaw failure taxonomy — 2026-07-08**（pranavraja99）记录了 pinchbench 等套件的非通过用例分布，建议维护者跟进。

---

## 6. 功能请求与路线图信号

从已 OPEN 的 PR 可清晰读出下一阶段路线图：

| 方向 | 代表 PR | 信号强度 |
|---|---|---|
| **可配置工具/WASM 工具市场** | [#5499](https://github.com/nearai/ironclaw/pull/5499) WASM tool install from zip + [#5525](https://github.com/nearai/ironclaw/pull/5525) 私有安装 | ⭐⭐⭐ |
| **子代理（subagent）基础设施** | #5749（已合并）+ #5748（设计文档已合并）| ⭐⭐⭐ |
| **Slack 个人 OAuth 范式** | [#5643](https://github.com/nearai/ironclaw/pull/5643) | ⭐⭐ |
| **Reborn 栈测试夹具现代化** | #5807-#5815 ilblackdragon 一系列 setter 链重构 | ⭐⭐ |
| **依赖治理常态化** | [#5816](https://github.com/nearai/ironclaw/pull/5816) 16 项升级 | ⭐ |

**用户层功能请求**：从 joe-rlo 在 bug_bash 阶段提交的 #5705、#5702 等看，用户希望在"现有功能完备性"（GitHub 集成、UI 自定义）层面收尾，再进入下一波特性。

---

## 7. 用户反馈摘要

由于大部分 Issue 评论数较少（0-4 条），公开用户声音有限。可提炼的痛点如下：

- **🔴 工具调用被误抑制**：用户写代码（`from playwright.sync_api import ...`）时模型被网关误判，导致整轮失败（[#5782](https://github.com/nearai/ironclaw/pull/5782)）。
- **🔴 关键集成不可用**：GitHub 集成无法搜索/创建 Issue 阻塞日常工作流（[#5702](https://github.com/nearai/ironclaw/issues/5702)）。
- **🟡 UI 细节缺失**：终端图标无法关闭、深链接首次点击不生效，反映用户对 UI 一致性的关注（[#5705](https://github.com/nearai/ironclaw/issues/5705) / [#5557](https://github.com/nearai/ironclaw/issues/5557)）。
- **🟢 配对流程新体验**：Slack 个人 OAuth 取代 pairing code 的重构得到推动，说明用户偏好标准 OAuth 而非手工码配对。

**满意度信号**：[#5789](https://github.com/nearai/ironclaw/pull/5789) 与 [#5787](https://github.com/nearai/ironclaw/issues/5787) 的快速闭环说明核心团队对 CI flaky 类问题响应及时。

---

## 8. 待处理积压

| Issue/PR | 类型 | 开放时长 | 关注度 | 建议 |
|---|---|---|---|---|
| [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | CI | ~42 天（自 2026-05-27 起多次复现）| 0 评论 | **高优** — 长期无人接手，建议指定 owner |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) GitHub 集成 HTTP 403 | Bug (P2) | 2 天 | 4 评论 | **中优** — 阻塞型功能，缺修复 PR |
| [#5705](https://github.com/nearai/ironclaw/issues/5705) Terminal icon 无法禁用 | Bug (P3) | 2 天 | 2 评论 | 中优 |
| [#5557](https://github.com/nearai/ironclaw/issues/5557) Logs deep link | Bug (P3) | 6 天 | 2 评论 | 中优 |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) `chore: release` | Release | 5 天 | — | 待核心维护者最终 sign-off |
| [#5499](https://github.com/nearai/ironclaw/pull/5499) / [#5525](https://github.com/nearai/ironclaw/pull/5525) WASM 工具 | Feature (XL) | 7-8 天 | — | 已构成系列，建议合并评审 |

**提醒**：[#4108](https://github.com/nearai/ironclaw/issues/4108) 是目前积压最久、风险最高的条目（持续失败的 Nightly E2E），维护者应优先介入。

---

## 附录：今日数据仪表盘

```
活跃 Issue:  5 OPEN  /  1 CLOSED
活跃 PR:    38 OPEN  / 12 CLOSED
新发布:      0
核心贡献者:  ilblackdragon (9 PR), henrypark133 (4 PR), pranavraja99 (3 PR),
            zetyquickly (2 PR), BenKurrek (1 PR), dependabot (2 PR)
依赖升级:    16 项进行中（#5816），13 项已合入（#5550）
```

*报告生成基于 2026-07-08 24 小时窗口的 GitHub 公开数据。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-07-08
**数据周期**：过去 24 小时
**项目地址**：[github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 项目今日保持高活跃度，发布了 **2026.7.7 新版本**，带来定时任务卡片重构与 xAI (Grok) OAuth 登录支持。社区侧同时出现 **3 条 [Security] 级别的安全披露**（来自同一报告者 YLChen-007），涉及本地文件泄露与未鉴权令牌代理等关键风险，**安全态势需要维护者高度关注**。在过去 24 小时内，共有 17 个 PR 关闭/合并、5 个 Issue 新开/活跃、1 个严重故障 Issue 关闭，整体迭代节奏紧凑，但安全响应优先级应当前置。

---

## 2. 版本发布

### 🚢 LobsterAI 2026.7.7（已发布）

**主要变更**：
- **定时任务列表卡片重构** ([#2273](https://github.com/netease-youdao/LobsterAI/pull/2273))：新增状态徽标、开关、搜索与乐观 UI 反馈，渲染层体验升级。
- **Provider 扩展** ([#XXXX](https://github.com/netease-youdao/LobsterAI/pull))：新增 **xAI (Grok) OAuth 登录支持**，进一步丰富模型生态。
- 同步合入 release/2026.7.6 分支内容：定时任务、OpenClaw 集成、邮件技能配置、MCP 导入、Provider 设置、Cowork UX、运行时稳定性等多模块更新 ([#2291](https://github.com/netease-youdao/LobsterAI/pull/2291))。

**破坏性变更**：根据 release/2026.7.6 描述，邮件技能 (`imap-smtp-email`) 已升级为多账户管理；保留对旧版单账户 `.env` 兼容，但 UI 与设置入口发生调整。**迁移注意事项**：用户应检查 `~/.lobsterai` 下的邮件相关配置文件是否仍按单账户形式存在，必要时通过新的"邮箱账户管理"页面重新登记。

---

## 3. 项目进展

过去 24 小时内共有 **13 个 PR 关闭/合并**，项目在多个方向同时推进：

### 3.1 协作能力增强（重大功能）
- **子代理委托协作** ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285))：新增 Agent 协作设置，支持显式子代理白名单，被委托的子代理运行以 Cowork 子会话形式落地，可保持持续对话。**这是本日报中最具战略意义的 PR**，标志着 LobsterAI 从单 Agent 工具向"多 Agent 协作框架"演进。

### 3.2 定时任务体系持续打磨
- **Cron 自定义调度** ([#1347](https://github.com/netease-youdao/LobsterAI/pull/1347))：可视化 Cron 构建器 + 原始表达式编辑，支持常用快捷示例。
- **通知目标用户可选** ([#2290](https://github.com/netease-youdao/LobsterAI/pull/2290))。
- **时间控件优化** ([#1404](https://github.com/netease-youdao/LobsterAI/pull/1404))：替换原生 `<input type="time">` 与 `select`，统一应用主题。
- **IM 通知渠道空回退** ([#1406](https://github.com/netease-youdao/LobsterAI/pull/1406))：解决 `#1329` 的下拉项缺失问题。

### 3.3 体验修复与稳定性
- **Cowork 引导路由稳定化** ([#2292](https://github.com/netease-youdao/LobsterAI/pull/2292))：Codex 风格排队 steers、临时会话替换、流状态作用域收敛。
- **附件多选保持全部文件** ([#1402](https://github.com/netease-youdao/LobsterAI/pull/1402))：修复 `#1384` 的循环闭包 bug。
- **i18n 补全 `delete` 键** ([#1403](https://github.com/netease-youdao/LobsterAI/pull/1403))。
- **添加菜单宽度还原** ([#2268](https://github.com/netease-youdao/LobsterAI/pull/2268))。
- **分析事件准确性修正** ([#2245](https://github.com/netease-youdao/LobsterAI/pull/2245))：补全技能、IM、侧边栏、自定义模型等埋点。
- **压缩重试挂起清理** ([#2289](https://github.com/netease-youdao/LobsterAI/pull/2289))。
- **请求 ID 改用 `crypto.randomUUID()`** ([#1401](https://github.com/netease-youdao/LobsterAI/pull/1401))：消除 SSE 流可被预测的安全风险。**这是一项重要的安全加固**。

### 3.4 邮件技能多账户化
- **邮件技能多账户支持** ([#2275](https://github.com/netease-youdao/LobsterAI/pull/2275))：新增账户管理、默认账户、连通性测试、删除确认等 UI，保留旧版 `.env` 兼容。

**项目整体评估**：功能层面稳步推进，从"工具型"向"协作平台"演进的路径清晰；安全与稳定性投入显著增加。

---

## 4. 社区热点

### 🔥 三大安全披露（来自同一报告者 YLChen-007，2026-07-07 集中提交）

| Issue | 标题 | 风险等级 |
|---|---|---|
| [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | 未鉴权本地令牌代理可重放服务器模型 API 凭据 | **严重** |
| [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM 出站媒体流支持助手生成的绝对路径 → 本地文件外泄 | **严重** |
| [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | HTML 预览服务器跟随根目录内符号链接 → 任意本地文件泄露 | **高** |

**诉求分析**：三条均涉及**本地安全模型边界**，提示 LobsterAI 在 Loopback HTTP、本地文件路径、HTML 预览沙箱三处存在信任域过宽问题。建议维护者**优先分配 CVE 编号并发布安全公告**，必要时提供静默热修复版本。

### 💬 讨论活跃
- [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) **4.1 网关反复重启**（7 条评论，今日 CLOSED）：用户 danielmonlite 自 4 月份升级到 4.1 后陷入无限重启循环，并附有 qwen3.5-plus LLM 无法调用、web-extractor 启动冲突等次生问题。今日终于关闭，但需追溯是否在 2026.7.x 版本中真实修复。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 是否已有 fix |
|---|---|---|---|
| 🔴 严重 | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) | 4.1 网关无限重启循环 | 今日 CLOSED，需追踪关联修复 PR |
| 🔴 严重 | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | 未鉴权本地令牌代理 → 凭据重放 | ❌ 待修复 |
| 🔴 严重 | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM 任意本地文件外泄 | ❌ 待修复 |
| 🟠 高 | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | 预览沙箱符号链接绕过 | ❌ 待修复 |
| 🟡 中 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 Agent USER.md 内容联动（疑似共享存储 bug） | ❌ 待修复 |
| 🟡 中 | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名称重复无校验 | ❌ 待修复 |
| 🟢 已修复 | [#1384](https://github.com/netease-youdao/LobsterAI/issues/1384) | 多选附件仅保留最后一项 | ✅ [#1402](https://github.com/netease-youdao/LobsterAI/pull/1402) |
| 🟢 已修复 | [#1361](https://github.com/netease-youdao/LobsterAI/issues/1361) | 中文 UI 显示英文 `delete` | ✅ [#1403](https://github.com/netease-youdao/LobsterAI/pull/1403) |
| 🟢 已修复 | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | IM 通知渠道下拉项缺失 | ✅ [#1406](https://github.com/netease-youdao/LobsterAI/pull/1406) |
| 🟢 已加固 | SSE 请求 ID 可预测 | — | ✅ [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401) |

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 进入下一版本的概率 |
|---|---|---|
| **多 Agent 子代理委托协作** | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) | **已合入**（极高 ✅） |
| **多 Agent 个性化（独立 USER.md / "关于你"）** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | **高**，子代理协作合入后此问题更突出，预计 2026.7.8 或 2026.7.9 处理 |
| **Skills 管理** | [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | 中，已开放 3 个月，路线图位置待确认 |
| **定时任务名称唯一性校验** | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 高，验证逻辑简单，应随下一批 UX 改进合入 |
| **Electron 升级至 43.x** | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) dependabot | 中，需评估 Electron 43 兼容性影响 |
| **TakoAPI 目录徽标** | [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) | 中（外部 PR，需维护者判断） |

**战略信号**：邮件多账户 ([#2275](https://github.com/netease-youdao/LobsterAI/pull/2275)) + 子代理协作 ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285)) 两条线表明 LobsterAI 正集中力量打造 **"个人 AI 助理操作系统"** 形态，下一阶段可能进入 IM 生态整合（如飞书、钉钉、企微）与外部 API 网关扩展期。

---

## 7. 用户反馈摘要

### 7.1 痛点
- **升级即瘫痪**（[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)）：4.1 升级后无法启动，且与 qwen3.5-plus 自定义 LLM、web-extractor 启动条件、自动配置模型等**多个耦合问题**互相纠缠，用户形容"彻底瘫痪"。**反映升级路径缺乏充分的兼容性测试与回滚指引**。
- **多 Agent 失个性化**（[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）：修改任一 Agent 的 USER.md 会同步覆盖全部 Agent，**破坏了多 Agent 隔离的产品承诺**。这是 2026.7.7 之后用户首次明显反弹。
- **定时任务缺校验**（[#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)）：用户上传截图表明存在同名任务并存的情况，可能导致后写覆盖或调度冲突。

### 7.2 安全研究人员反馈
- 报告者 YLChen-007 一次性提交 3 条结构清晰、可复现的本地提权 / 信息泄露漏洞，**描述质量专业**，显示社区已有外部安全研究者开始系统审计 LobsterAI 的本地安全模型。建议**建立 SecurityPolicy 与漏洞赏金机制**。

### 7.3 满意/正向信号
- 多个 PR 评论表明开发者对日常功能修复响应及时（[#1402](https://github.com/netease-youdao/LobsterAI/pull/1402) 等包含 `Made with` 标识，提示贡献者使用 LobsterAI 自身或类似工具撰写 PR）。
- 2026.7.7 版本合入了大量 UX 改进，社区应能直观感受到"定时任务模块"的成熟度提升。

---

## 8. 待处理积压

| Issue/PR | 标题 | 创建时间 | 风险 |
|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | dependabot: Electron 40 → 43 升级 | 2026-04-02 | 长期未决，依赖升级缺失评审 |
| [#1346](https://github.com/netease-youdao/LobsterAI/pull/1346) | Skills 管理重构 | 2026-04-02 | 开放 3 个月，标记 stale |
| [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347) | Cron 自定义调度 | 2026-04-02 | 长期开放，疑似已并入 main 但 PR 仍未关闭，需清理 |
| [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名称重复无校验 | 2026-04-02 | 简单校验未处理 |
| [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) / [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) / [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | 三条安全披露 | 2026-07-07 | **建议维护者 24 小时内响应并分配 CVE** |
| [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 Agent USER.md 联动 | 2026-07-07 | 影响核心使用体验，建议 1 周内修复 |
| [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) | TakoAPI 目录徽标 | 2026-07-08 | 外部 PR，需维护者判断 |

---

## 📊 项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活跃度 | 6 | 🟢 正常 |
| 24h PR 流转量 | 17 | 🟢 高活跃 |
| 新版本发布 | 1 | 🟢 持续迭代 |
| 待合并 PR | 4 | 🟡 关注长期开放 PR |
| 严重安全披露 | 3 | 🔴 **需紧急响应** |
| 用户反弹 | 1（#2293） | 🟡 体验信号需关注 |

**总体评估**：**功能侧 8/10，安全侧 4/10**。LobsterAI 在多 Agent 协作、定时任务、邮件技能等多条产品线持续推进，但本地安全模型（Loopback HTTP、文件路径、HTML 沙箱）暴露出系统性设计问题，建议在 2026.7.8 紧急安全补丁中集中修复并发布安全公告。

---

*本报告基于 GitHub 公开数据自动生成，链接均为仓库原地址。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报
**日期：2026-07-08**
**项目：TinyAGI/tinyagi (TinyClaw)**

---

## ⚠️ 今日速览

**项目正面临一次大规模安全披露事件，整体健康度严重承压。** 过去 24 小时内，由同一安全研究员 YLChen-007 一口气提交了 **9 个高危安全漏洞报告**，全部标记为 `[Security]`，且全部处于 OPEN 状态、零关闭。**当日无任何 PR 提交、无任何版本发布、无任何维护者响应。** 这是一组高度相关的"未认证访问控制平面"系列漏洞，涉及路径穿越、终端转义注入、本地文件外泄、Claude CLI 危险权限绕过、Agent 提示词覆盖、守护进程重启等核心攻击面，建议维护团队立即启动 CVE 评估与应急响应流程。

---

## 版本发布

无新版本发布。当前未发布任何修复版本，存在暴露窗口风险。

---

## 项目进展

**今日无任何 PR 提交、合并或关闭。** 9 个安全 Issue 均未产生对应的修复 PR，项目整体推进处于停滞状态。建议维护者：

1. 立即对所有 9 个报告进行复现验证
2. 优先处理 API 认证/授权层（`POST /api/message`、`PUT /api/settings`、SSE 事件流、配对管理路由）
3. 移除 Anthropic CLI 的 `--dangerously-skip-permissions` 默认参数
4. 考虑发布 `0.x.y` 紧急安全补丁版本

---

## 🔥 社区热点

今日 9 个新开 Issue 全部由 [@YLChen-007](https://github.com/YLChen-007) 提交，构成一次协调性安全披露（coordinated disclosure）。按攻击面聚合可分为四类：

### 1. 控制平面未授权访问（核心问题，4 个 Issue）
- [#286](https://github.com/TinyAGI/tinyagi/issues/286) — 未认证本地控制 API 允许持久化设置变更、Agent 提示词覆盖、SSE 事件流访问
- [#288](https://github.com/TinyAGI/tinyagi/issues/288) — 未认证本地控制平面泄露实时事件并允许持久化设置修改
- [#292](https://github.com/TinyAGI/tinyagi/issues/292) — 未认证管理 API 允许持久化设置与 Agent 提示词修改
- [#294](https://github.com/TinyAGI/tinyagi/issues/294) — 未认证控制平面路由允许系统提示词覆盖与守护进程重启

**诉求分析：** 这四个问题本质同源——控制平面完全没有认证边界。`PUT /api/settings` 与 `POST /api/message` 等特权端点对 localhost 之外/之内的客户端均不设防，可导致提示词注入、设置篡改、服务重启。

### 2. 路径穿越与文件外泄（2 个 Issue）
- [#293](https://github.com/TinyAGI/tinyagi/issues/293) — Agent ID 路径穿越逃逸配置的 workspace root（通过 `id=".."`）
- [#289](https://github.com/TinyAGI/tinyagi/issues/289) — 通过出站通道附件外泄任意本地文件（`files[]` 接受攻击者控制的本地路径）

### 3. CLI 工具链与终端注入（2 个 Issue）
- [#291](https://github.com/TinyAGI/tinyagi/issues/291) — Anthropic Adapter 无条件以 `--dangerously-skip-permissions` 启动 Claude CLI，绕过危险工具确认
- [#290](https://github.com/TinyAGI/tinyagi/issues/290) — `POST /api/message` 内容直接拼接至操作员终端，受控 ANSI 转义序列可伪造/污染日志

### 4. 配对与渠道管理（1 个 Issue）
- [#287](https://github.com/TinyAGI/tinyagi/issues/287) — 未认证配对管理 API 允许任意批准挂起渠道发送方

**整体诉求：** 这是一次系统性的"零信任缺失"审计结果，攻击者画像为能访问 API 的任意未认证客户端（含 localhost 与跨主机场景）。社区短期内可能围绕"是否回滚主干"、"是否禁用默认 daemon"展开讨论。

---

## 🚨 Bug 与稳定性（安全专题）

> 本日 9 个新增 Issue **全部为安全漏洞报告**，按 CVSS 影响维度近似排序如下：

| 严重度 | Issue | 标题 | 攻击面 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 严重 | [#291](https://github.com/TinyAGI/tinyagi/issues/291) | Anthropic Adapter 禁用 Claude 危险工具确认 | `--dangerously-skip-permissions` | ❌ |
| 🔴 严重 | [#293](https://github.com/TinyAGI/tinyagi/issues/293) | Agent ID 路径穿越 | Agent ID `..` 越权 | ❌ |
| 🔴 严重 | [#294](https://github.com/TinyAGI/tinyagi/issues/294) | 系统提示词覆盖 + 守护进程重启 | 控制平面路由 | ❌ |
| 🟠 高危 | [#289](https://github.com/TinyAGI/tinyagi/issues/289) | 任意本地文件外泄 | `files[]` 附件 | ❌ |
| 🟠 高危 | [#286](https://github.com/TinyAGI/tinyagi/issues/286) | 持久化设置/提示词/事件流访问 | 控制 API + SSE | ❌ |
| 🟠 高危 | [#288](https://github.com/TinyAGI/tinyagi/issues/288) | 实时事件泄露 + 设置修改 | REST + SSE | ❌ |
| 🟠 高危 | [#292](https://github.com/TinyAGI/tinyagi/issues/292) | 持久化设置与提示词修改 | 管理 API | ❌ |
| 🟡 中危 | [#287](https://github.com/TinyAGI/tinyagi/issues/287) | 配对管理 API 绕过 | Pairing routes | ❌ |
| 🟡 中危 | [#290](https://github.com/TinyAGI/tinyagi/issues/290) | 终端转义注入/日志伪造 | 终端日志输出 | ❌ |

**所有 9 个漏洞均无对应修复 PR。** 这是一次"披露后尚未修补"的状态，对外部部署实例存在直接利用风险。

---

## 功能请求与路线图信号

本日无新增功能请求（feature request）类 Issue，全部活动为安全披露。

**隐含的路线图信号（来自安全报告反向推导）：**

1. **强制 API 认证层** — 应在 `POST /api/message`、`PUT /api/settings`、SSE 端点、配对管理路由前增加 token / mTLS 校验
2. **Workspace 沙箱加固** — Agent ID 校验需白名单 + 真实路径解析后必须落在配置的 workspace root 内
3. **Anthropic Adapter 收紧** — 移除无条件 `--dangerously-skip-permissions`，改为按调用方上下文决策
4. **日志输出安全化** — 终端打印需对不可信内容做 ANSI/控制字符过滤
5. **附件出站审计** — `files[]` 需校验文件存在性 + 白名单 + 大小限制

这些"安全硬化"很可能作为下一版本（预计 `0.x` 安全补丁）的核心内容。

---

## 用户反馈摘要

由于所有 9 个 Issue 评论数均为 0、点赞数均为 0，**当前没有来自终端用户的使用体验反馈**。可观察的"声音"仅来自单一安全研究员的披露文本。从披露描述中可提炼的隐含用户痛点：

- **本地开发体验与生产暴露的边界不清**：控制平面被描述为"localhost-oriented"，但端口绑定策略与外部可达性并未文档化
- **多渠道配对流程缺乏显式授权**：配对码可以被任意 API 调用者批准，缺少操作员确认环节
- **Claude CLI 集成默认走"高权限"模式**：与终端用户对 CLI 工具的"危险操作需确认"直觉不符

---

## 待处理积压与紧急关注清单

> 以下为本次安全披露的全量待办，**建议维护者 24 小时内逐一确认**：

| # | 链接 | 类型 | 状态 |
|---|---|---|---|
| #286 | [Unauthenticated Local Control API Allows Persistent Settings Mutation, Agent Prompt Overwrite, and Event Stream Access](https://github.com/TinyAGI/tinyagi/issues/286) | Security | OPEN |
| #287 | [Unauthenticated Pairing Management API Allows Arbitrary Approval of Pending Channel Senders](https://github.com/TinyAGI/tinyagi/issues/287) | Security | OPEN |
| #288 | [TinyAGI exposes an unauthenticated local control plane that leaks live events and allows persistent settings modification](https://github.com/TinyAGI/tinyagi/issues/288) | Security | OPEN |
| #289 | [TinyAGI allows unauthenticated API callers to exfiltrate arbitrary local files via outbound channel attachments](https://github.com/TinyAGI/tinyagi/issues/289) | Security | OPEN |
| #290 | [TinyAGI Terminal Escape Injection via POST /api/message Allows Operator Log Spoofing](https://github.com/TinyAGI/tinyagi/issues/290) | Security | OPEN |
| #291 | [TinyAGI Anthropic Adapter Disables Claude Dangerous-Tool Confirmation for Unauthenticated POST /api/message Requests](https://github.com/TinyAGI/tinyagi/issues/291) | Security | OPEN |
| #292 | [TinyAGI unauthenticated administrative API allows persistent settings and agent prompt modification](https://github.com/TinyAGI/tinyagi/issues/292) | Security | OPEN |
| #293 | [TinyAGI unauthenticated agent ID path traversal escapes the configured workspace root](https://github.com/TinyAGI/tinyagi/issues/293) | Security | OPEN |
| #294 | [TinyAGI unauthenticated control-plane routes allow system prompt overwrite and daemon restart](https://github.com/TinyAGI/tinyagi/issues/294) | Security | OPEN |

**提醒：** 全部 9 个 Issue 自 2026-07-07 创建至今无维护者响应、无 triage 标签、无 milestone 分配。建议：
1. 公开确认收到披露并致谢
2. 标记 `security`、影响版本、复现 PoC 是否已收
3. 协调披露时间表（typical 90 天）
4. 准备 SECURITY.md 与发布说明

---

## 📊 整体健康度评估

| 维度 | 评分 | 备注 |
|---|---|---|
| 提交活跃度 | ⭐⭐ | 仅安全披露，无常规开发活动 |
| 维护响应度 | ⭐ | 0 响应、0 修复、0 标签 |
| 安全态势 | 🔴 严重 | 9 个高危/严重漏洞集中披露，无补丁 |
| 社区沟通 | ⭐ | 无评论、无反应 |
| 发布节奏 | ⭐ | 24 小时内无新版本 |

**综合判断：** 项目进入"安全应急期"。建议运营方在补丁发布前，对外文档与 README 增加部署安全提示（如反向代理 + 防火墙、绑定 `127.0.0.1`、`Authorization` 头说明），并考虑在 GitHub Release 中提供 mitigation 指南。

---

*报告生成时间：2026-07-08 · 数据源：TinyAGI/tinyagi GitHub Issues API*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报

> **数据源说明**：原始 GitHub 数据来自仓库 `agentscope-ai/QwenPaw`（与您提供的 `agentscope-ai/CoPaw` 名称不一致，下文统一以 **CoPaw (QwenPaw repo)** 表述，如需确认请核对仓库名）。

📅 **报告日期**：2026-07-08
📊 **活跃度评估**：⭐⭐⭐⭐ 高活跃（17 Issues + 36 PRs，单日吞吐量大，beta 阶段修复密集）

---

## 1. 今日速览

CoPaw 处于 v2.0 密集 beta 迭代期，24 小时内完成 16 个 PR 合并/关闭、10 个 Issue 关闭，同时新开/激活 7 个 Issue 与 20 个待合并 PR，整体节奏处于"快速发版 + 集中修回归"阶段。**v2.0.0-beta.3 已正式发布**，但当天即报告了"关闭模式仍弹审批"等回归问题（#5846），说明新版本在审批/工具安全链路上仍有未覆盖的边界。今天最重要的进展是 `scroll` 上下文压缩策略的连续修复（#5765、#5747、#5848），直接闭环了 3 个相关 Issue。社区对新功能（Zalo Bot、长文本上传、grep 增强）也保持积极贡献，首发贡献者（first-time-contributor）数量较多。

---

## 2. 版本发布

### 🚀 v2.0.0-beta.3（已发布）

| 项 | 内容 |
|---|---|
| 发布类型 | Beta |
| 关联安装验证 | [Issue #5833](https://github.com/agentscope-ai/QwenPaw/issues/5833) |
| Release 链接 | https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3 |

**变更摘要（已知部分）**：
- **CI 修复**：`fix(ci): guard empty extra_flags expansion for bash 3.2 on macOS` ([#5743](https://github.com/agentscope-ai/QwenPaw/pull/5743)) — 解决 macOS 默认 bash 3.2 下空参数展开的语法差异。
- **鉴权增强**：`feat(auth): enhance rate limiting with multi-dimensional protection` ([#5738](https://github.com/agentscope-ai/QwenPaw/pull/5738)) — 引入多维度限流保护。
- 其余 changelog 描述在源数据中截断，需到 Release 页确认完整 PR 列表。

**已知风险与回归**：
- 🔴 [Issue #5846](https://github.com/agentscope-ai/QwenPaw/issues/5846)：v2.00b3 在"关闭模式（所有工具自动执行无需审批）"下，**仍会弹出审批弹窗**，导致任务无法自动运行。这是 beta.3 发布的同一天就出现的高优先级回归，强烈建议在升级前确认是否命中。
- ⚠️ 与 beta 相关的 scroll 压缩 bug 已通过 #5765 在代码层修复，但用户仍需升级到更新版本才能感受到效果。

**升级建议**：生产环境暂不建议直接覆盖 beta.3，建议等待 #5765、#5843、#5847 等关键修复合入后的下一个版本。

---

## 3. 项目进展（重要合并/关闭 PR）

| PR | 状态 | 关键内容 | 影响面 |
|---|---|---|---|
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | CLOSED | **fix(scroll)**：保护 active turn、加入分级压力缓解、让 recall 失败显式化。Supersede #5747，闭环 #5746、#5778、#5776 | ⭐⭐⭐⭐ 解决了 2.0 期间最严重的"上下文压缩跑偏"问题 |
| [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) | CLOSED | scroll 压缩保护 active turn（已被 #5765 取代，作为 phase-1） | scroll 策略鲁棒性 |
| [#5838](https://github.com/agentscope-ai/QwenPaw/pull/5838) | CLOSED（待确认） | **升级 AgentScope 到 2.0.4、ReMe 0.4.0.8**，增强 session 中断行为 | ⭐⭐⭐ 依赖链升级，影响所有 runtime 行为 |
| [#5675](https://github.com/agentscope-ai/QwenPaw/pull/5675) | CLOSED | **删除 console 输入框硬编码 10k 字符上限**，对应 #5670 | ⭐⭐⭐ 改善长文本/长代码/长调研场景 |
| [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) | CLOSED | 启用长文本上传回归配置；chat 升级到 `@agentscope-ai/chat@1.1.72-beta...`；将 `maxLength` 恢复为 10000 | ⭐⭐ 与 #5675 配套，兼顾性能与兼容 |
| [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) | CLOSED | **fix(tool_guard)**：将 `find ... -delete` 识别为危险命令，对应 #5842 | ⭐⭐⭐ 关闭一处 file_guard 旁路 |
| [#5839](https://github.com/agentscope-ai/QwenPaw/pull/5839) | CLOSED | pyproject 增加静态 `[project.urls]`，让 GitHub 依赖图能关联到本仓库 | 项目可发现性、供应链透明度 |
| [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) | CLOSED | 版本 bump 到 2.0.0b4 | 推进下一个 beta |

**整体进度评估**：今天 v2.0 的核心体验问题（scroll 压缩跑偏、文件守卫旁路、上下文限制）几乎被一锅端掉，**项目向"可发布生产版"的目标迈出了实质性的一步**，但审批/工具安全的边界（#5846）暴露出回归用例覆盖仍不充分。

---

## 4. 社区热点

按评论数 / 👍 / 关注度排序的 Top 议题：

1. **#5401 🔥🔥🔥（15 评论）** — Console 在含大量工具调用历史的会话下前端崩溃，根因是后端将 `tool_use`/`tool_result` 转换为 `type: "data"` 而前端只处理 `type: "tool_use"`/`"tool_result"`。  
   [Issue #5401](https://github.com/agentscope-ai/QwenPaw/issues/5401)  
   **诉求**：API 与前端对"data 块"的理解需要统一；属于跨模块契约问题。**仍 OPEN**。

2. **#5479 🔥🔥（6 评论）** — 大会话 JSON 文件 >500KB 直接白屏"渲染此页面时发生了意外错误"，用户只能删除会话。  
   [Issue #5479](https://github.com/agentscope-ai/QwenPaw/issues/5479)  
   **诉求**：长会话需要分块/虚拟滚动/渐进式加载。**仍 OPEN**，与 #5401 共同构成"前端性能"主线。

3. **#5725 🔥（5 评论）** — Console 流式输出过程中浏览器卡顿（与 DeepSeek 对比）。  
   [Issue #5725](https://github.com/agentscope-ai/QwenPaw/issues/5725)  
   **诉求**：前端渲染节流 / 增量 DOM 更新。已 CLOSED，应已合入缓解方案。

4. **#5416（5 评论）** — 部分模型把回复内容写到 `thinking`/`reasoning_content`，`content` 为空，用户看不到回复。  
   [Issue #5416](https://github.com/agentscope-ai/QwenPaw/issues/5416)  
   **诉求**：在 UI 兜底显示 `reasoning_content`。已 CLOSED。

5. **#5746（4 评论）** — scroll 压缩折叠当前任务导致模型回复旧消息。  
   [Issue #5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)  
   **诉求**：压缩策略必须保护 active turn。已被 #5765 修复 → CLOSED。

**诉求归纳**：用户对"长会话/长历史/大上下文"的稳定性高度敏感，**前端渲染性能**和**压缩策略正确性**是 2.0 GA 之前必须解决的两大主线。

---

## 5. Bug 与稳定性

按严重程度排序（结合受影响面、复现稳定性、是否有 fix PR）：

| 严重度 | Issue | 简述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P0 | [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) | v2.0.0b3"关闭模式"仍弹审批，自动化任务阻塞 | ❌ 暂无（当天新开） |
| 🔴 P0 | [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 大工具历史会话前端白屏 | ❌ 暂无 fix |
| 🔴 P0 | [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | >500KB 会话文件前端崩溃 | ❌ 暂无 fix（与 #5401 同类） |
| 🟠 P1 | [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | Windows AppContainer 沙箱 ACE 污染系统目录，导致 Hermes Desktop GPU 进程崩溃 | ❌ 暂无 |
| 🟠 P1 | [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | 跨 provider 同名模型时，前端压缩阈值显示错误 | ❌ 暂无 |
| 🟠 P1 | [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) | `find -delete` 绕过 file_guard | ✅ [#5843](https://github.com/agentscope-ai/QwenPaw/pull/5843) |
| 🟠 P1 | [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | 钉钉 DM `/stop` 缺乏用户级隔离，跨用户取消任务 | ❌ 暂无 |
| 🟡 P2 | [#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) | Google 渠道 Gemini 格式端点报错 | ✅ 已 CLOSED |
| 🟡 P2 | [#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776) | 长生命周期 IM 会话中陈旧 pin 消息被当作 active task | ✅ 被 #5765 一并修复 |
| 🟡 P2 | [#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778) | scroll 压缩后上下文丢失 | ✅ 被 #5765 一并修复 |
| 🟡 P2 | [#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) | `reasoning_content` UI 兜底缺失 | ✅ 已 CLOSED |

**稳定性结论**：今天关闭的多为 scroll 压缩与 IM 渠道相关历史问题，但**新出现 3 个 P0（#5846、#5401、#5479）均无 fix PR**，其中 #5846 属于 v2.0.0-beta.3 的同发布日回归，**应在下个 patch 版本中优先处理**。#5401 + #5479 的本质都指向"前端在大数据量下不可用"，建议作为一个统一专项。

---

## 6. 功能请求与路线图信号

已看到与功能请求直接对应的 PR 正在被合入，**路线图吸纳速度较快**：

| 用户诉求 | 对应 PR（OPEN/CLOSED） | 状态 |
|---|---|---|
| 取消/放宽输入框字符限制（#5670） | [#5675](https://github.com/agentscope-ai/QwenPaw/pull/5675) + [#5845](https://github.com/agentscope-ai/QwenPaw/pull/5845) | ✅ 已合并 |
| coding 模式可选隐藏文件夹（#5785） | — | ⚠️ 已 CLOSED 但未见 fix PR，可能通过配置

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-08

## 1. 今日速览

ZeroClaw 项目今日延续了高强度的迭代节奏：**24 小时内 50 个 PR 仍待合并，10 条 Issue 保持活跃（含 2 条关闭）**，但没有新的 Release 标记出现。社区提交的代码量集中在**安全加固、渠道集成、Agent 重构、SOP 可视化编辑**四大方向，多个 XL/高风险 PR 已进入待评审状态（如多用户鉴权栈 #8672、SOP 节点图编辑器 #8590、OpenAI 桥接通道 #8710）。整体来看项目处于 **v0.8.x 中期密集合并期**，维护者对安全、内存稳定性和渠道扩展的投入显著增加。

---

## 2. 版本发布

**无新版本发布。** 当前 master 分支仍处于 v0.8.x 迭代窗口，社区关注的功能性 Release 尚未产出。Issue #8073 作为 v0.8.3 的可观测性/CI/文档/依赖追踪器已被激活，但未生成对应 tag。

---

## 3. 项目进展

今日合并/关闭的 PR 共 5 条，主要集中在 **zerocode 设置可见性修复** 与 **Telegram 文档/绑定错误纠正** 两类轻量级提交：

| PR | 说明 | 影响 |
|---|---|---|
| [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) | zerocode Channels 配置新增 "Global Settings" 入口，暴露 `show_tool_calls` / `ack_reactions` / `message_*` 等根级字段 | 修复 Issue #8757，提升配置可发现性 |
| [#8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820) | 同一根因的修复（`8757 channels root settings`） | 与 #8822 重复关闭，闭环 |
| [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822) | 同上，独立贡献路径 | 已关闭 |
| [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) | 修复 `bind-telegram` 错误信息中错误的 kebab-case 配置键名（Issue #8797） | 修正错误提示使用 `bot_token` 而非 `bot-token` |
| [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) | 扩充 Telegram 在 `chat-others.md` 中的安装步骤、peer-group 示例与 `bind-telegram` 说明（Issue #8810） | 文档可读性提升 |

**整体推进评估：** 今日合并量较低，但**后台积压的高价值 PR 矩阵**（安全、SOP、可观测性、SSRF 防护、Agent 重构）显示项目正在密集"蓄力"，预计后续 1-2 周内会出现一次集中的 v0.8.3 集成提交。

---

## 4. 社区热点

**最活跃 Issue — [Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)**（9 条评论，P1）
作者 @nick-pape 报告 `[agent] tool_filter_groups` 对真实 MCP 工具完全失效，存在两个独立缺陷：(1) 调度时过滤器对 MCP 工具使用前缀匹配但实际路径错配；(2) 与 `deferred_loading` 没有任何联动。**这是当前社区反馈最强烈的"功能看似工作实则无效"的反直觉问题**，自 5 月创建以来持续获得关注。

**SOP 编辑器追踪 — [Issue #8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736)** / [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)
作为今日规模最大（XL）的 PR，#8590 带来 SOP 节点图编辑器、live run 覆盖、通道 fan-in、严格保存校验引擎，并配合 `git_forge` 统一 forge 工具。Issue #8736 作为追踪任务枚举已交付的功能点，**这是 ZeroClaw 向"可视化工作流"演进的标志性提交**。

**v0.8.3 追踪器激活 — [Issue #8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)**
维护者 @Audacity88 重新激活 v0.8.3 跟踪器，聚焦可观测性 / CI / 文档 / 依赖 / 安装 / 发布支持等支持性工作，**为后续集中合并铺路**。

**Canvas UI 改造 — [Issue #8828](https://github.com/zeroclaw-labs/zeroclaw/issues/8828)**
@NiuBlibing 提出将 Canvas 从独立页面改造为聊天页右侧可折叠侧栏（按需自动展开 + 手动折叠），改善工作流连续性。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 P1 / High Risk（功能失效或内存膨胀）
- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — `tool_filter_groups` 对 MCP 工具失效（双重 Bug）。**暂无对应 fix PR**，仅有间接关联。
- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — MCP/工具 schema 克隆导致 Agent 循环 RSS 无界增长（从 #5542 拆分）。**暂无 fix PR**，但相关治理正分散在多个重构中推进。

### 🟠 S2 / 行为降级
- **[Issue #8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)** — Telegram 文档示例错误（key 名错配）。**已有 fix PR [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)**（文档扩充），但根因尚未完整闭环。

### 🟡 S3 / 轻微问题
- **[Issue #8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797)** — `bind-telegram` 提示中配置键名错误。**已有 fix PR [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)**。
- **[Issue #8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)** — skill_manage 缺少 `create` 动作（CLOSED，需求被接受并合并思路）。

### 安全相关（虽未挂 Bug 标签，但属于修复中的真实风险）
- **[PR #8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690)** — `/model --agent` 缺少按发送方授权（Issue #8044，P1）→ 待合并
- **[PR #8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824)** — `/ws/nodes` WebSocket 升级认证使用 `==` 比较，存在时序侧信道 → 待合并
- **[PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826)** + **[#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827)** — `image_gen` SSRF 三层防护（URL 校验 + 解析后 IP DNS 重绑定检查）→ 待合并

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 状态 | 路线图判断 |
|---|---|---|---|
| SOP 可视化节点图编辑器 | [#8736](https://github.com/zeroclaw-labs/zeroclaw/issues/8736) / [PR #8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | XL PR 待合并 | **高确定性纳入 v0.8.3 或 v0.9**，已配套 Tracker |
| 多用户鉴权（AuthProvider 注册表、permission profiles、principal 隔离） | [PR #8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | XL PR 待合并 | **强烈信号**：对应 RFC #7141，是后续多租户基础 |
| OpenAI Bridge 通道（暴露 `/openai/{alias}/v1/models`、`/v1/chat/completions` SSE） | [PR #8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) | XL PR 待合并 | 与 Home Assistant、第三方工具生态对接，**进入 v0.8.3 高概率** |
| Canvas 改造成聊天页右侧可折叠侧栏 | [#8828](https://github.com/zeroclaw-labs/zeroclaw/issues/8828) | 0 评论，新提案 | 取决于前端维护者优先级 |
| 日志持久化与轮转配置热重载 | [#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) | 已 accepted | 进入 v0.8.3（依赖 #8307 落地） |
| Skills `prompt_injection_mode` 运行时档案覆盖 | [PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) | S 待合并 | 多 Agent 安装必需，**高确定性纳入** |
| 图像生成 SSRF 全链路防护 | [PR #8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) + [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827) | 待合并 | 安全刚需，必合 |
| 网关默认 HTTP 安全响应头 | [PR #8829](https://github.com/zeroclaw-labs/zeroclaw/pull/8829) | 待合并（bbot 扫描 13 项发现，已闭合 11 项） | 必合 |
| skill_manage 新增 `create` 动作 | [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) | CLOSED | 已有处理路径，进入下一窗口 |
| Agent 拆分历史循环契约 | [PR #8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) | 待合并 | #7846 重构 PR-1，**核心架构演进** |
| max-iteration 优雅总结计量 | [PR #8821](https://github.com/zeroclaw-labs/zeroclaw/pull/8821) | 待合并（基于 #8806） | S21 P2，下一窗口 |
| 延迟 MCP 工具访问策略统一源 | [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | 待合并 | 与 #6699 强相关，**进入合并有助于 #6699 收敛** |
| WeChat 通道移除 Markdown 转纯文本转换 | [PR #8656](https://github.com/zeroclaw-labs/zeroclaw/pull/8656) | 待合并 | 小修复，几乎必合 |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与正文）

1. **"功能看似生效实则失效"的反直觉体验** — [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)
   `tool_filter_groups` 通过 schema 校验却对 MCP 工具完全失效，且没有任何警告/日志。用户在生产环境配置过滤器后误以为已生效，**这是工具链信任问题的典型代表**。

2. **配置键名错配导致 onboarding 卡壳** — [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) / [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810)
   `bind-telegram` 提示使用不存在的 kebab-case 配置键，与实际 CLI 不识别。Issue #8810 评论中用户更直言"if not implemented correctly, slop remains slop"——**反映出 Rust 实现正确性与文档/CLI 提示一致性之间的张力**。

3. **运行时内存膨胀** — [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)
   MCP 工具 schema 克隆导致 RSS 在长会话中无界增长，叠加 WSL2 下的 restart-storm，构成连续 OOM 链。

4. **运行时 Agent 创建技能的体验断点** — [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)
   Agent 只能借助 `file_write` 创建 `<slug>.md`，但随后 `skill_manage` 拒绝编辑，**形成"能写不能管"的死循环**。

### 满意 / 积极信号
- SOP 节点图编辑器（#8590）作为大型可视化工作流提交，**说明社区对工作流确定性执行的需求强烈且愿意配合共建**。
- 多名维护者（@singlerider、@Audacity88、@wangmiao0668000666）持续高密度提交安全/重构类 PR，**项目治理健康**。

### 使用场景信号
- 多 Agent 安装场景 → 推动 [#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) 运行时档案覆盖
- 第三方 OpenAI 客户端对接 → 推动 [#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) OpenAI Bridge
- 大型可视化工作流编辑 → 推动 [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) SOP 编辑器
- 长会话稳定性 → 推动 [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) 内存治理与 [#8784](https://github.com/zeroclaw-labs/zeroclaw/pull/8784) 历史契约重构

---

## 8. 待处理积压

### 长期开放且影响核心的 Issue
- **[Issue #6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — 自 2026-05-16 起开放近两个月，9 条评论，**P1 风险但无专属 fix PR**，仅间接由 #8496 部分缓解。**维护者应优先指派 owner**。
- **[Issue #8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)** — 从 #5542 拆出的内存增长根因，自 7 月初创建，1 条评论。**与 #6699 同属 Agent 循环稳定性大议题，建议合并治理**。

### 积压的 XL/高风险 PR（建议本轮维护者 review 重点）
| PR | 主题 | 风险 |
|---|---|---|
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | 多用户鉴权 + permission profiles | XL/High |
| [#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | SOP 节点图编辑器 + git_forge | XL/High |
| [#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) | OpenAI Bridge 通道 | XL/High（已标 needs-maintainer-review） |
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | 延迟 MCP 访问策略统一源 | L/High |

### 长期未合并的非阻塞性 PR
- **[PR #8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235)** — skills `prompt_injection_mode` 运行时档案覆盖（自 6 月下旬开放），S 规模、Low 风险，**应优先合入以释放多 Agent 用户**。

### 维护者提醒
- v0.8.1 集成/通道/Provider/工具追踪器 [

</details>