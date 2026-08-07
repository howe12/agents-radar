# OpenClaw 生态日报 2026-08-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-07 02:21 UTC

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

# OpenClaw 项目日报 · 2026-08-07

## 1. 今日速览

OpenClaw 今日活跃度处于**高位运行**状态：过去 24 小时内共触动 500 条 Issues 与 500 条 PR，关闭/合并率为 Issues 14% (70/500)、PR 19.6% (98/500)，未关闭比例与昨日基本持平。**没有新版本发布**，但仍有 2 个 P0 级紧急 Bug 处于开放状态（DB 迁移失败与 token 计数膨胀导致数据丢失），需要维护者立即关注。讨论热度集中在 DeepSeek 模型兼容性、跨平台客户端（Linux/Windows）、Session/Compaction 稳定性与多渠道消息投递失序四个方向。本日吞吐量大但关闭率偏低，**维护积压风险上升**。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内未发布新的 Release 或 Pre-release。建议关注分支上已开放但未合并的 XL 级 PR（#117456 LINE 通道重构、#120109 tests 重构、#116462 skills 双作用域引用），它们有可能进入 2026.8.x 周期。

---

## 3. 项目进展

### 合并/关闭概况
- 已关闭 Issues：**70 条**（含 2 条 P1、3 条 P2）
- 已合并/关闭 PR：**98 条**

### 重要已关闭 Issue
| Issue | 标题 | 意义 |
|-------|------|------|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | **关闭 80 👍**，跨平台客户端请求关闭（暗示已落地或列入路线图） |
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply failure | DeepSeek v4 Flash 静默失败问题已修复 |
| [#117471](https://github.com/openclaw/openclaw/issues/117471) | `openclaw cron remove` 误报 "id not found" | CLI 错误信号问题已修复 |
| [#76492](https://github.com/openclaw/openclaw/issues/76492) | `openclaw agent` CLI 静默 fallback 到 embedded | 诊断探针的隐性行为已修复 |

### 重要已关闭 PR
- [#120110](https://github.com/openclaw/openclaw/pull/120110) `fix(gateway): derive lock and coordinator paths from the resolved state dir` — 修复 Gateway 锁路径在 `OPENCLAW_STATE_DIR` 指向其他目录时仍写 `os.tmpdir()` 的问题，关闭沙箱场景下的污染可能。

### 维护者主导推进（Open PR，重要里程碑）
- [#120108](https://github.com/openclaw/openclaw/pull/120108) `fix: prevent duplicate and lost agent delivery`（L, maintainer）— 修复三类生产环境投递故障：合成 sub-agent turn 无效化 Claude CLI 会话、消息工具发送失去幂等键。
- [#120109](https://github.com/openclaw/openclaw/pull/120109) `refactor(test): table-drive near-duplicate cases in agent and auto-reply suites`（XL, maintainer）— 审计标记的 5 个测试套件用例结构化重构。
- [#120107](https://github.com/openclaw/openclaw/pull/120107) `fix(release): prevent prerelease upgrade QA from missing official plugins`（XL, maintainer）— 防止预发布升级 QA 在 `doctor` 阶段因未发布版本漏掉官方插件。
- [#117456](https://github.com/openclaw/openclaw/pull/117456) `fix(line): honor provider message action and delivery contracts`（XL, maintainer, P1）— 修复 LINE 通道中 7 个互不兼容的 provider 契约。

**整体评估**：维护者 steipete 与 vincentkoc 今日主导了 6+ 条 XL/L 级 PR，覆盖 Gateway、Release 包、Test 重构、macOS 设置与 LINE 通道；项目稳定性面在持续推进，但 P0/P1 关键 Bug 仍待修复。

---

## 4. 社区热点

### 讨论度 Top 5
| 排名 | Issue | 评论 | 👍 | 主题 |
|------|-------|-----|-----|------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows Clawdbot Apps | 116 | 80 | 跨平台客户端扩展 |
| 2 | [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash silent reply | 114 | 0 | 模型兼容性 |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 28 | 0 | 记忆安全/信任分级 |
| 4 | [#27445](https://github.com/openclaw/openclaw/issues/27445) `announceTarget` for sub-agent | 12 | 5 | 多代理工作流编排 |
| 5 | [#88657](https://github.com/openclaw/openclaw/issues/88657) DeepSeek V4 Flash incomplete turn | 10 | 1 | 模型回放安全 |

### 诉求分析
- **跨平台呼声强烈**：[#75](https://github.com/openclaw/openclaw/issues/75) 以 80 👍 成为本周最受认可诉求，反映 Linux/Windows 用户长期未被覆盖。
- **第三方模型兼容性焦虑**：DeepSeek v4 Flash 出现 2 个高热度问题（[#116277](https://github.com/openclaw/openclaw/issues/116277)、[#88657](https://github.com/openclaw/openclaw/issues/88657)），涉及 silent failure 和 incomplete turn；社区呼吁补齐 OpenRouter 路径下的回放保护。
- **记忆安全**：[#7707](https://github.com/openclaw/openclaw/issues/7707) 体量虽不大但诉求严肃——通过 `Source` 标签防止 Memory Poisoning 攻击，反映企业级用户对 prompt injection 防御的重视。
- **多代理编排**：[#27445](https://github.com/openclaw/openclaw/issues/27445) 揭示 sub-agent 完成通告路由需求增长，主代理需要接管多步工作流的协调权。

---

## 5. Bug 与稳定性

### 🔴 P0 — 阻塞级（需立即响应）
| Issue | 简要 | 影响 | Fix PR |
|-------|------|------|--------|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid` | **Gateway 拒绝启动** | ❌ 无 |
| [#118772](https://github.com/openclaw/openclaw/issues/118772) | 2026.7.1+ sessionEntry.totalTokens 膨胀导致 4–8% 上下文爆掉 → 误触发 compaction | **数据丢失** | ❌ 无 |

### 🟠 P1 — 高优先级
| Issue | 简要 | 影响 | Fix PR |
|-------|------|------|--------|
| [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动 2026.7.1→2026.7.2 回归 2.5 倍（1-vCPU 容器） | 性能/UX | ❌ 无 |
| [#115700](https://github.com/openclaw/openclaw/issues/115700) | `chat.send` 报 "thread switched branches"，`expectedLeafEntryId` 未刷新 | UX 阻塞 | ❌ open PR 待合并 |
| [#90789](https://github.com/openclaw/openclaw/issues/90789) | claude-cli backend 注入 "No response requested." 同步消息，Telegram 静默无日志 | 消息丢失 | ❌ 无 |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | WhatsApp 并发 @ 自动 visible 模式下，前一条回复被 cancel fence 拦截 | 消息丢失 | ❌ 无 |
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | Pre-flight compaction 被硬封顶 60s，忽略 `compaction.timeoutSeconds` | 会话状态 | ❌ 无 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE reply token 过期 + 缺 push fallback | 消息丢失 | ❌ 无 |
| [#101445](https://github.com/openclaw/openclaw/issues/101445) | Ollama 嵌入式 agent 报 `payloads=0 tools=0` 而本地响应含 tool_calls | 消息丢失 | ❌ 无 |
| [#115546](https://github.com/openclaw/openclaw/issues/115546) | CLI-budget compaction 100% 失败，4.9s 起 abort | 会话状态 | ❌ 无 |
| [#117209](https://github.com/openclaw/openclaw/issues/117209) | `AuthProfileStoreUnreadable` 在 snapshot 失败后粘滞 | 认证/会话 | ❌ 无 |
| [#117445](https://github.com/openclaw/openclaw/issues/117445) | `@openclaw/feishu` 解码入站 DM 为 "?"，`undefined.catch` 抛错 | 消息丢失 | ❌ 无 |
| [#109881](https://github.com/openclaw/openclaw/issues/109881) | Bedrock 缺 thinking-signature 回放保护，Claude 4+ 会话永久中断 | 会话状态 | ❌ 无 |
| [#119333](https://github.com/openclaw/openclaw/issues/119333) | Codex `request_user_input` 在 Default 模式暴露但运行时拒绝 | 行为不符 | ❌ 无 |

### 🟡 P2 — 中等优先级（节选）
- [#119796](https://github.com/openclaw/openclaw/issues/119796) Windows vitest teardown `EBUSY unlink` on agent state DB（影响 CI）
- [#119557](https://github.com/openclaw/openclaw/issues/119557) Chat delta throttle 缺 trailing flush（吞吐问题）
- [#86119](https://github.com/openclaw/openclaw/issues/86119) Subagent/cron 嵌入式 run 后 node worker 进程泄漏
- [#118560](https://github.com/openclaw/openclaw/issues/118560) WebChat canvas 主会话 reset 后隐藏早期消息
- [#77625](https://github.com/openclaw/openclaw/issues/77625) `reasoningDefault=stream` 触发反馈循环
- [#77685](https://github.com/openclaw/openclaw/issues/77685) Feishu streaming card 多内容交付 bug
- [#58139](https://github.com/openclaw/openclaw/issues/58139) `memory-lancedb` 在 Windows Docker bind mount 失败
- [#117609](https://github.com/openclaw/openclaw/issues/117609) 嵌入式助手阶段缺 transient 错误重试
- [#114154](https://github.com/openclaw/openclaw/issues/114154) bundle-mcp 工具通过 policy 与 health，但 agent 不打包

### 🔧 平台/兼容性
- [Windows 启动挂起](https://github.com/openclaw/openclaw/issues/102755) — Windows + WSL 构建第二次启动不清理会卡死（beta blocker）。
- [#119087](https://github.com/openclaw/openclaw/issues/119087) 1-vCPU 容器冷启动回归。

**结论**：今日大量 P1 Bug 缺少对应 Fix PR（多数挂着 `clawsweeper:no-new-fix-pr` 标签），需要维护者发起分支或合并社区已开 PR。

---

## 6. 功能请求与路线图信号

### 高价值 Feature Request
| 需求 | Issue | 关联 PR | 优先级 |
|------|-------|---------|--------|
| Linux/Windows 客户端 | [#75](https://github.com/openclaw/openclaw/issues/75) | — | 已关闭，可能进入 2026.8.x |
| Per-spawn 工具限制（DMZ Web Search） | [#15032](https://github.com/openclaw/openclaw/issues/15032) | — | P2，倾向进入安全子模块 |
| 记忆信任源标签 | [#7707](https://github.com/openclaw/openclaw/issues/7707

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**数据周期**：2026-08-06 ~ 2026-08-07  
**覆盖项目**：13 个（OpenClaw、NanoBot、Hermes Agent、IronClaw、ZeroClaw、CoPaw、NanoClaw、PicoClaw、LobsterAI、NullClaw、TinyClaw、Moltis、ZeptoClaw）

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正进入**"分层收敛期"**：头部项目（OpenClaw、CoPaw、IronClaw、ZeroClaw、Hermes Agent）24h 内合计处理 350+ PR/Issue，已形成稳定的多渠道、多 Provider、多 Agent 协作底座；中部项目（NanoBot、NanoClaw、LobsterAI）聚焦垂直场景（WebUI、调度、消费者端）做差异化打磨；尾部项目（PicoClaw、NullClaw、TinyClaw、Moltis、ZeptoClaw）出现静默化趋势。整体技术关注点高度趋同——**会话稳定性、跨平台客户端、安全凭据隔离、可观测性、子代理编排**是 2026 年 8 月生态的五大主旋律。无新版本集中发布，但**IronClaw v1.1.0** 作为首个稳定版信号意义重要。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Issue 关闭率 | PR 合入率 | 版本发布 | 健康度 | 当前阶段 |
|------|-----------|---------|------------|----------|---------|--------|---------|
| **OpenClaw** | 500 | 500 | 14% (70/500) | 19.6% (98/500) | ❌ | ⚠️ 积压 | 规模扩张期 |
| **CoPaw** | 34 (17 闭) | 50 (29 闭) | 50% | 58% | ❌ | 🟢 良好 | 快速迭代 |
| **IronClaw** | 50 (23 闭) | 50 (17 闭) | 46% | 34% | ✅ **v1.1.0** | 🟢 良好 | 稳定版打磨 |
| **ZeroClaw** | 35 (11 闭) | 50 (7 闭) | 31% | 14% | ❌ | 🟡 中等 | RFC 治理期 |
| **Hermes Agent** | 50 (2 闭) | 50 (3 闭) | 4% | 6% | ❌ | 🟡 中等 | 重构期 |
| **NanoBot** | 10 | 17 (5 闭) | — | 29% | ❌ | 🟢 健康 | 渐进增强 |
| **NanoClaw** | 2 (1 闭) | 14 (8 闭) | 50% | 57% | ❌ | 🟢 健康 | 快速迭代 |
| **LobsterAI** | 5 (0 闭) | 2 (0 闭) | 0% | 0% | ❌ | ⚠️ 停滞 | 维护期 |
| **PicoClaw** | 0 | 2 (1 闭) | — | 50% | ❌ | ⚠️ 静默期 | 沉淀期 |
| **NullClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | — | — | — | ⚪ 休眠 | 停滞 |

**关键观察**：
- **OpenClaw** 吞吐量远超第二梯队（500/500），但关闭率最低，**积压风险最高**（500 Issues 未关 vs IronClaw 27、CoPaw 17）。
- **CoPaw 与 NanoClaw** 是当日 PR 合入率最高的两个项目（>55%），维护节奏健康。
- **Hermes Agent** 表面吞吐高（50/50），但实际合入仅 3 条，长尾积压明显（20 个 god-file 重构 epic 进行中）。
- **IronClaw** 是当日唯一发布版本的项目，且关闭率达 46%，体现成熟期项目"少量高质"特征。

---

## 3. OpenClaw 在生态中的定位

### 规模与吞吐量
OpenClaw 是生态中**绝对的头部项目**：24h Issues 量（500）≈ IronClaw + Hermes Agent + ZeroClaw 三者之和（135）的 3.7 倍；PR 量（500）同样碾压式领先。这种规模优势使其成为行业事实参考基准，但也带来**响应延迟上升**——关闭率仅 14%，远低于 CoPaw（58%）、NanoClaw（57%）。

### 技术路线差异
| 维度 | OpenClaw | IronClaw | ZeroClaw | Hermes Agent | CoPaw |
|------|----------|----------|----------|--------------|-------|
| **核心架构** | 多渠道 Gateway + Session/Compaction | v1.1 稳定版 + Inspector 可观测性 | daemon + ZeroCode CLI | god-file 分片重构中 | AgentScope 2.0 harness |
| **可观测性** | ⚠️ 缺失（用户呼吁） | ✅ Inspector 套件已落地 | 🟡 partial | ❌ | 🟡 partial |
| **渠道支持** | 最多（TG/Line/WhatsApp/Feishu/Discord/Weixin） | Slack/Discord 重点 | Telegram 重点 | Feishu/Lark 重点 | Matrix/TG/WeChat |
| **协议/标准** | 自有 Gateway | Hosted MCP 注册 | A2A 出站（RFC #9106） | Plugin Interface 扩展 | AG-UI 协议（#6337） |
| **治理模式** | 维护者 steipete/vincentkoc 主导 + 高 PR 吞吐 | 多贡献者 + RFC 跟踪器 | RFC 重流程（#6808 Rev.24） | andrexibiza epic 驱动 | 维护者密集评审 |

### 社区规模对比
- OpenClaw：跨平台诉求（[#75](https://github.com/openclaw/openclaw/issues/75) 80 👍）+ DeepSeek 兼容性焦虑反映**企业级 + 跨平台用户基础**；
- IronClaw：NEAR AI 系生态，强调 Slack/Hosted MCP 商业化路径；
- ZeroClaw：偏 devops/安全工程师视角，RFC 治理与 daemon 可靠性；
- CoPaw：中文社区（agentscope-ai）+ 学术派（AgentScope/ReMe 记忆子系统）；
- Hermes Agent：NousResearch 系 + Discord 社区驱动，强调插件/xAI 生态。

**结论**：OpenClaw 是**"全栈多渠道个人助手"**定位的领跑者，但已显现出"规模-质量"权衡压力；IronClaw 在 v1.1.0 后向**"可观测性优先的稳定平台"**演进；ZeroClaw 走**"安全+治理"**路线；CoPaw 主攻**"AgentScope 兼容 + 中文场景"**。

---

## 4. 共同关注的技术方向

### ① 跨平台客户端扩展
- **OpenClaw** [#75](https://github.com/openclaw/openclaw/issues/75) — 116 评论 / 80 👍（已关闭，进入路线图）
- **Hermes Agent** [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) — Windows Desktop 0.20.0 回归
- **OpenClaw** [#119087](https://github.com/openclaw/openclaw/issues/119087) — 1-vCPU 容器冷启动回归
**诉求**：Linux/Windows 客户端与桌面端稳定性是横跨多项目的最高优先级。

### ② 安全与凭据隔离
- **NanoBot** [#5269](https://github.com/HKUDS/nanobot/pull/5269) / [#5270](https://github.com/HKUDS/nanobot/pull/5270) — P1，Provider API Key 全局 os.environ 写入
- **ZeroClaw** [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) — `execute_pipeline` confused deputy 高危修复
- **ZeroClaw** [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) — WhatsApp Web allowed_groups 空列表误放行
- **OpenClaw** [#7707](https://github.com/openclaw/openclaw/issues/7707) — Memory Trust Tagging 防 Memory Poisoning
**诉求**：从凭据隔离、agent 权限沙箱到 memory 信任分级，安全防线正在多项目同步加固。

### ③ 多 Provider / 模型回退与上下文窗口
- **ZeroClaw** [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) — Per-model capability & context-window
- **CoPaw** [#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) — Provider 模型级 fallback + cooldown
- **NanoBot** [#5198](https://github.com/HKUDS/nanobot/issues/5198) — 会话内模型切换失败
- **PicoClaw** [#3200](https://github.com/sipeed/picoclaw/pull/3200) — Configurable default fallback chain
- **OpenClaw** [#116277](https://github.com/openclaw/openclaw/issues/116277) / [#88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek v4 Flash 兼容性
- **LobsterAI** [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) — 模型级 contextWindow/maxTokens
**诉求**：多模型路由成为基础设施级标配，DeepSeek 等第三方模型兼容性焦虑蔓延。

### ④ 会话稳定性与 Compaction
- **OpenClaw** [#118772](https://github.com/openclaw/openclaw/issues/118772) P0 — sessionEntry.totalTokens 膨胀导致 4-8% 数据丢失
- **OpenClaw** [#95553](https://github.com/openclaw/openclaw/issues/95553) — Pre-flight compaction 60s 硬封顶
- **IronClaw** [#5707](https://github.com/nearai/ironclaw/issues/5707) — Routine 创建响应暴露内部实现
- **CoPaw** [#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) — 长会话空响应不报错
- **ZeroClaw** [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) — context_compact_ratio 按模型窗口比例
**诉求**：长会话 Compaction 是当前最普遍的稳定性痛点，涉及 token 计数、timeout 硬编码、空响应处理多个维度。

### ⑤ MCP / 工具生态
- **IronClaw** v1.1.0 — Hosted MCP 注册 + IronHub 深度链接
- **ZeroClaw** [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) — WASM 工具 wall-clock 截止
- **CoPaw** [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) / [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) — MCP 超时与定期失效
- **Hermes Agent** [#64182](https://github.com/NousResearch/hermes-agent/issues/64182) — Plugin Interface Expansion
- **NanoClaw** [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) — Tavily MCP skill
**诉求**：MCP 已成生态共识协议，但超时配置、命名规范、缓存失效仍是高频痛点。

### ⑥ 子代理编排与 Routine 调度
- **OpenClaw** [#27445](https://github.com/openclaw/openclaw/issues/27445) — `announceTarget` for sub-agent
- **NanoBot** [#4290](https://github.com/HKUDS/nanobot/issues/4290) — Cronjob 提前结束（已 58 天）
- **IronClaw** [#5836](https://github.com/nearai/ironclaw/issues/5836) / [#5508](https://github.com/nearai/ironclaw/issues/5508) — Routine 调度失败
- **NanoClaw** [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) / [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) — 调度任务失败重触发 + 显式告警
**诉求**：sub-agent 完成通告 + cron 调度结果回流是自动化场景的关键路径，多项目并行打补丁。

### ⑦ 可观测性
- **IronClaw** Inspector 套件 [#7235](https://github.com/nearai/ironclaw/pull/7235) / [#7236](https://github.com/nearai/ironclaw/pull/7236) / [#7239](https://github.com/nearai/ironclaw/pull/7239) / [#7277](https://github.com/nearai/ironclaw/pull/7277)
- **OpenClaw** [#5701](https://github.com/openclaw/openclaw/issues/5701)（IronClaw）— Activity 面板实时更新
**诉求**：从"Prompt Inspection → 模型调用 latency → Tool 执行轨迹"的完整可观测链路，是 IronClaw v1.1 后的明确信号，OpenClaw 尚未跟进。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构 |
|------|---------|---------|--------------|
| **OpenClaw** | 全渠道 Gateway + Session/Compaction | 跨平台终端用户、企业多渠道客服 | 自有 Gateway 协议 + SessionState DB |
| **IronClaw** | 可观测性 + Hosted MCP + Slack 集成 | 运维/企业用户、xAI 生态 | v1.1 稳定版 + Inspector 套件 + NEAR 协议 |
| **ZeroClaw** | 安全策略 + RFC 治理 + 沙箱 | DevOps / 安全工程师 | daemon + ZeroCode CLI + ZeroClaw sandbox |
| **Hermes Agent** | God-file 分片 + 插件生态 + xAI 对齐 | 插件开发者、研究社区 | 重构中的模块化架构 + Plugin Interface |
| **CoPaw** | AgentScope 2.0 兼容 + 中文场景 + ReMe 记忆 | 中文开发者、学术派 | AgentScope harness + harness lifecycle |
| **NanoBot** | WebUI 性能 + 安全凭据 + Matrix 渠道 | 个人用户、WebUI 重度用户 | WebUI 预压缩 + session 内存隔离 |
| **NanoClaw** | 升级事务化 + Telegram 智能化 + skill 隔离 | 轻量级自动化用户 | 技能生命周期管理 + 调度重试 |
| **LobsterAI** | 浏览器自动化 + Agent 管理 | 消费者、教育用户 | Chrome 网关 + 工作区模板 |
| **PicoClaw** |

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-08-07**
**项目主页**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 项目今日处于**高度活跃期**，24 小时内新增/更新 **17 个 Pull Request** 与 **10 个 Issue**，PR 体量与昨日相比显著放大。社区工作重心集中在三条主线：**安全与凭据隔离**（API Key 泄露修复 2 个 P1 PR）、**会话/Session 健壮性**（P0 数据竞争修复 + 多个 session 隔离增强）、**渠道适配**（Matrix/Weixin 兼容性）。当日有 5 个 PR 已合并/关闭，整体推进节奏稳健，无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 影响领域 | 优先级 |
|----|------|----------|--------|
| [#5262](https://github.com/HKUDS/nanobot/pull/5262) | perf(webui): reduce cold-start payload | WebUI 性能 | P1 |
| [#5259](https://github.com/HKUDS/nanobot/pull/5259) | fix(webui): enforce memory-only temporary sessions | WebUI 隐私 | — |
| [#5267](https://github.com/HKUDS/nanobot/pull/5267) | fix(webui): tighten interactive motion | WebUI 体验 | — |
| [#5261](https://github.com/HKUDS/nanobot/pull/5261) | feat(webui): drag sidebar sessions | WebUI 交互 | — |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | fix(matrix): send non-empty POST body on room join | Matrix 兼容 | P2 |

**亮点解读**：
- **WebUI 性能优化** [#5262](https://github.com/HKUDS/nanobot/pull/5262)：通过预压缩 gzip 兄弟资源 + 抽出 React 运行时，显著降低冷启动负载。
- **临时会话内存隔离** [#5259](https://github.com/HKUDS/nanobot/pull/5259)：作为 [#5252](https://github.com/HKUDS/nanobot/pull/5252)（临时聊天模式）的栈式补丁，确保临时会话不落盘。
- **Matrix Continuwuity 兼容** [#5248](https://github.com/HKUDS/nanobot/pull/5248)：修复 nio 库空 POST body 导致加入房间失败的兼容问题。

> 💡 项目整体向前推进明显，特别是在 WebUI 性能 / 隐私、Matrix 渠道兼容性方向上形成了小版本级改进集群。

---

## 4. 社区热点

### 🔥 评论最活跃

1. **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)** — 会话内无法切换模型（3 条评论）
   - 痛点：用户期望在不重配置整个实例的情况下切换模型；当前 UI 模型 blip 不可点击，`/model` 命令亦无响应。
   - 影响范围：所有需要在同一实例跑多模型对比/回退的用户。

2. **[Issue #4290](https://github.com/HKUDS/nanobot/issues/4290)** — Cronjob 提前结束（2 条评论）
   - 痛点：subagent 完成工作后，主代理无机会消费 subagent 的结果，导致后续工作流失败。**已存在 58 天仍未修复**，是当前最待解决的长期痛点之一。

### 🔒 安全/隐私话题（社区关注度升温）

- **[Issue #5278](https://github.com/HKUDS/nanobot/issues/5278)** — Session history 不应驻留在 agent workspace 内（PR #713 引发的回溯讨论）
- **[PR #5270](https://github.com/HKUDS/nanobot/pull/5270)**（P1）— CLI app 子进程环境变量隔离
- **[PR #5269](https://github.com/HKUDS/nanobot/pull/5269)**（P1）— Provider API Key 不再写入全局 os.environ

这两份安全 PR 揭示了多 provider 实例下凭据相互泄露/覆盖的隐患，社区对此类安全议题反应积极。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 标识 | Issue/PR | 描述 | 是否有 fix PR |
|--------|------|----------|------|----------------|
| 🔴 P0 | 会话数据竞争 | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台任务（如 `maybe_generate_webui_title`）在 `await provider.chat_with_retry` 期间持有的 `Session` 引用，会被 `/new` 命令的 `clear()→save()→invalidate()` 覆盖，导致后续回合创建新会话时丢失数据 | ✅ 有（#5271） |
| 🔴 P0 | Token 消耗失控 | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 无明显用户操作 2 小时消耗百万 token，缺少 token 消费明细日志 | ❌ 尚无 fix |
| 🟠 P1 | Provider 凭据泄露 | [#5269](https://github.com/HKUDS/nanobot/pull/5269) | `OpenAICompatProvider._setup_env()` 将 API Key 写入进程全局 `os.environ`，多 provider 实例相互覆盖 | ✅ 有 |
| 🟠 P1 | CLI 子进程凭据泄露 | [#5270](https://github.com/HKUDS/nanobot/pull/5270) | `CliAppService.run` 以 `env=os.environ.copy()` 启动外部 CLI app，将 provider API Key 泄露至不受信任子进程 | ✅ 有 |
| 🟡 P2 | Cronjob 提前结束 | [#4290](https://github.com/HKUDS/nanobot/issues/4290) | subagent 完成后主代理未消费结果就退出（**已存在 58 天**） | ❌ 无 |
| 🟡 P2 | 模型切换失效 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | UI 模型 blip 不可点击、`/model` 命令无响应 | ❌ 无 |
| 🟡 P2 | Matrix 不加入房间（已修） | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Continuwuity 拒绝空 POST body | ✅ [#5248](https://github.com/HKUDS/nanobot/pull/5248) |
| 🟡 P2 | 历史接口媒体 URL 缺失 | [#5264](https://github.com/HKUDS/nanobot/issues/5264) | `/api/sessions/{key}/messages` 对 media root 外的附件不返回 `media_urls` | ✅ [#5268](https://github.com/HKUDS/nanobot/pull/5268) |
| 🟡 P2 | Session 裁剪丢弃主动投递消息 | [#5273](https://github.com/HKUDS/nanobot/issues/5273) | `retain_recent_legal_suffix`/`enforce_file_cap` 会丢掉用户回复之前的 `_channel_delivery`（cron/job 通知）消息 | ✅ [#5272](https://github.com/HKUDS/nanobot/pull/5272) |
| ⚪ 低 | 工具接受 NaN/Infinity | [#5265](https://github.com/HKUDS/nanobot/pull/5265) | `Tool._cast_value()` 接受 `"NaN"`/`"Infinity"` 字符串 | ✅ [#5265](https://github.com/HKUDS/nanobot/pull/5265) |

---

## 6. 功能请求与路线图信号

| 功能/请求 | 关联 Issue/PR | 进入下一版本概率 |
|-----------|---------------|------------------|
| **会话级临时文件隔离** | [#5276](https://github.com/HKUDS/nanobot/issues/5276) | 🟢 高 — 与 #5278 安全话题、当前 Workspace 隔离策略方向一致 |
| **Session history 不再存于 agent workspace** | [#5278](https://github.com/HKUDS/nanobot/issues/5278) | 🟢 高 — 安全回溯需求，社区共识强 |
| **Matrix 线程上下文独立化**（类 Discord/Slack thread） | [#5275](https://github.com/HKUDS/nanobot/issues/5275) | 🟡 中 — 与 #5274 一起推进渠道统一化 |
| **Matrix reply 功能对齐** | [#5274](https://github.com/HKUDS/nanobot/issues/5274) | 🟡 中 |
| **会话内模型切换** | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 🟡 中 — 多模型推理已是标配需求 |
| **Token 消耗可观测性** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | 🟢 高 — 实用诉求大，门槛低 |
| **WebUI 模型预设编辑器内联展开** | [#5277](https://github.com/HKUDS/nanobot/pull/5277) | 🟢 高 — PR 已就绪 |
| **临时聊天模式** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) | 🟢 高 — PR 已合并（#5259 栈式补丁） |
| **Meta-Search 聚合搜索 provider（mst-python）** | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 🟢 高 — P1 + 测试完备 |
| **Dream 空闲会话归档** | [#5231](https://github.com/HKUDS/nanobot/pull/5231) | 🟡 中 |
| **共享交互式 Project Terminal** | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | 🟡 中 — PR 标记 `conflict`，需解决合并冲突 |

---

## 7. 用户反馈摘要

- **💢 凭据泄露焦虑**：2 个 P1 安全 PR 揭示了用户对多 provider 实例间凭据相互覆盖的深切担忧，社区对"安全默认"配置期望强烈。
- **💢 模型切换体验差**（[#5198](https://github.com/HKUDS/nanobot/issues/5198)）：用户反映 UI 点击模型 blip 无反应，且 `top-choice model` 行为不符合云端 SaaS 体验——希望可在会话内灵活切换，与 Cloud SaaS 一致。
- **💢 Token 成本不可视**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）：实测"无明显活动 2 小时百万 token"，用户要求按调用级别披露 token 消耗，用于定位异常。
- **💢 历史附件不可重读**（[#5264](https://github.com/HKUDS/nanobot/issues/5264)）：WebSocket 实时流与历史接口在媒体文件签名行为上不一致，刷新即丢失签名 URL——破坏了无缝回溯体验。
- **💢 Cron + subagent 工作流断裂**（[#4290](https://github.com/HKUDS/nanobot/issues/4290)）：长期痛点，自动化任务中的 subagent 回流路径不稳定。
- **😊 Matrix 兼容性改进节奏快**：[#5247](https://github.com/HKUDS/nanobot/issues/5247) 报告后 2 天内即有 [#5248](https://github.com/HKUDS/nanobot/pull/5248) PR，社区响应速度获认可。
- **🔒 隐私/沙箱诉求叠加**：从 workspace 权限、session 存储路径到临时会话不落盘，社区对"不同会话/项目间的隔离"已成为共识级需求。

---

## 8. 待处理积压（提醒维护者）

### ⚠️ 长期未修复的关键 Issue

- **[#4290](https://github.com/HKUDS/nanobot/issues/4290)** — 创建于 **2026-06-10**，已 **58 天**未修复。Cronjob + subagent 回路未消费结果，影响所有自动化场景。**建议设立 P1 优先级**。
- **[#5198](https://github.com/HKUDS/nanobot/issues/5198)** — 创建于 2026-07-31，会话内模型切换失败。多次评论无 PR 响应。

### ⚠️ 待合并 PR 风险评估

- **[#5253](https://github.com/HKUDS/nanobot/pull/5253)**（P2）— 共享交互式 Project Terminal，标记 `conflict`，需解决冲突后评审。
- **[#5231](https://github.com/HKUDS/nanobot/pull/5231)** — Dream 空闲会话归档，社区期待已久。
- **[#5234](https://github.com/HKUDS/nanobot/pull/5234)**（P1）— mst-python meta-search provider，测试完备但尚未合并。

### ⚠️ 安全 PR 应优先合并

- **[#5269](https://github.com/HKUDS/nanobot/pull/5269)**（P1）— Provider 凭据全局 os.environ 写入。
- **[#5270](https://github.com/HKUDS/nanobot/pull/5270)**（P1）— CLI 子进程凭据泄露。
- **[#5271](https://github.com/HKUDS/nanobot/pull/5271)**（P0）— 后台任务陈旧保存覆盖会话数据。

> 这三项均涉及凭据/数据安全的硬性风险，建议在下一个小版本中作为 **patch release** 优先合入。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 17 PR + 10 Issue，节奏密集 |
| 安全响应 | ⭐⭐⭐⭐ | 2 个 P1 安全 PR 并行处理 |
| Bug 修复 SLA | ⭐⭐⭐ | 大多数 bug 当日或次日有 fix PR，但 #4290 已超 58 天 |
| 社区参与 | ⭐⭐⭐⭐ | 多名贡献者并行：LHMQ878、Re-bin、chengyongru、whisperity 等 |
| 版本节奏 | ⭐⭐ | 无新版本，feature 集群可能预示下一切版 |
| 总体 | ⭐⭐⭐⭐ | 健康，多线并进，安全议题关注度高 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-08-07**
**项目地址：** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 仓库今日继续保持高强度开发节奏：过去 24 小时共更新 50 条 Issues（48 条新开/活跃、2 条关闭）和 50 条 PR（43 条待合并、7 条已合并/关闭），但 **无新版本发布**。当前工作重心高度集中在两大主题：一是覆盖全仓库 20 个 god-file 的"分片重构"epic（[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)），二是持续堆积的 Feishu/Lark 平台交互卡片缺陷（错误码 200340/220340/200343 等）。整体来看项目社区活跃度高、健康度尚可，但存在较明显的长尾积压——多个 P2 缺陷已存续 3-4 个月未根治。

---

## 二、版本发布

**无新版本发布。**

最近一次发布（v0.20.0）后出现了若干用户反馈的回归问题（详见下文 Bug 部分），维护团队当前在 issue-tracker 上密集识别这些问题，但尚未推送修复版本。

---

## 三、项目进展（今日合并/关闭的 PR）

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#80699](https://github.com/NousResearch/hermes-agent/pull/80699) | Desktop 工具（pane / 内嵌浏览器 / reactions）在远程与云端后端启用 | Bug 修复 | 修复 Hermes Desktop 连接到普通 URL 网关或 Hermes Cloud 时六个桌面工具被屏蔽的问题 |
| [#79868](https://github.com/NousResearch/hermes-agent/pull/79868) | launchd plist 重载时不再丢失 gateway label | Bug 修复 | 解决 macOS 下 `launchctl bootstrap` 后 gateway 失联的稳定性问题 |
| [#80709](https://github.com/NousResearch/hermes-agent/pull/80709) | 修复 `read_file` 在 UTF-8 截断于字节 1000 时的二进制误判 | Bug 修复 | 避免合法 UTF-8 文本被错误识别为二进制（PR 已被关闭，疑为重复，已被 [#80717](https://github.com/NousResearch/hermes-agent/pull/80717) "从 kimi-code 移植" 方案取代） |

**整体推进判断：** 项目整体保持向前推进，但今日的合并量较少（仅 3 条关键修复可见已合并/关闭），大量 PR 处于待合并状态。安全/会话状态相关修复（[#80444](https://github.com/NousResearch/hermes-agent/pull/80444)、[#78970](https://github.com/NousResearch/hermes-agent/pull/78970)、[#77162](https://github.com/NousResearch/hermes-agent/issues/77162)）的合并速度，将是衡量下一个 release 是否能解决 P2 问题的关键。

---

## 四、社区热点

按评论数排序的热门话题：

1. **[#78647 Epic: 分片全部 20 个 god 文件](https://github.com/NousResearch/hermes-agent/issues/78647)** — 53 条评论，andrexibiza 发起的全仓库级重构 epic。Policy 明确"all god files are sharded, never reverted"，目标是将动辄数千上万行的单文件（如 `auth.py` 9,180 行、`kanban_db.py` 10,275 行、`telegram/adapter.py` 10,147 行、`context_compressor.py` 6,789 行）按职责拆分。
   *诉求：* 提升可维护性、便于社区贡献、降低单 PR 改动冲突。

2. **[#64182 Plugin Interface Expansion 跟踪](https://github.com/NousResearch/hermes-agent/issues/64182)** — 27 条评论，teknium1 主理。汇总 7 月 Discord 频道中社区对插件接口的扩展建议。
   *诉求：* 让长队列 PR 的贡献者可以发布稳定、公共的插件契约。

3. **[#78645 Shard `agent/context_compressor.py`](https://github.com/NousResearch/hermes-agent/issues/78645)** — 19 条评论。承接 epic [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) 的第一个具体切片。

4. **[#80424 Grok/xAI 功能对齐元问题](https://github.com/NousResearch/hermes-agent/issues/80424)** — 9 条评论。把 Hermes 的 Grok/xAI 接入面与官方 xAI 开发者平台（Models、Chat/Responses、Function calling、Reasoning、Streaming、Imagine、Voice/TTS）全面对齐。
   *诉求：* 让 Hermes 作为 xAI 的客户端拥有完整能力覆盖。

5. **[#79407 Desktop 0.20.0 回归：底部操作面板消失](https://github.com/NousResearch/hermes-agent/issues/79407)** — 8 条评论。升级到 0.20.0 后整个 Command Center / Gateway / Sub-agent 状态区缺失，Desktop 退化为 viewer-only。
   *诉求：* 修回归、降级或为 Windows 用户给出临时方案。

**其他活跃讨论：** [#78637](https://github.com/NousResearch/hermes-agent/issues/78637)、[#7675](https://github.com/NousResearch/hermes-agent/issues/7675)（Feishu 三合一）、[#78632](https://github.com/NousResearch/hermes-agent/issues/78632) 等均保持稳定讨论热度。

---

## 五、Bug 与稳定性（按严重程度）

### P2 严重缺陷

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#80710](https://github.com/NousResearch/hermes-agent/issues/80710) | Windows 下 Desktop 自更新失败时损坏现有 Python 运行时 | ❌ 无（08-07 新开） |
| [#80699](https://github.com/NousResearch/hermes-agent/pull/80699) | Desktop 工具在远程/云端后端被屏蔽（PR 已合并 ✅） | ✅ [#80699](https://github.com/NousResearch/hermes-agent/pull/80699) |
| [#80652](https://github.com/NousResearch/hermes-agent/issues/80652) | MCP stdio bridge 在 `args: null` 时 TypeError，进入 connecting→parked 死循环 | ❌ 无 |
| [#80646](https://github.com/NousResearch/hermes-agent/issues/80646) | `agent_context` 硬编码 "primary"，导致 provider 上下文跳过逻辑形同虚设 | ❌ 无 |
| [#80259](https://github.com/NousResearch/hermes-agent/issues/80259) | Desktop 消息 reaction 在远程桌面会话被禁用 | ❌ 无 |
| [#79628](https://github.com/NousResearch/hermes-agent/issues/79628) | `use_gateway: true` 抛弃有效直连凭据（web/tts/browser） | ❌ 无 |
| [#79407](https://github.com/NousResearch/hermes-agent/issues/79407) | Desktop 0.20.0 底部操作面板完全消失 | ❌ 无 |
| [#25886](https://github.com/NousResearch/hermes-agent/issues/25886) | Feishu 卡片授权按钮 200343 失败 | ❌ 无（4 个月） |
| [#13924](https://github.com/NousResearch/hermes-agent/issues/13924) | Feishu 命令审批按钮 220340 失败 | ❌ 无（4 个月） |
| [#38305](https://github.com/NousResearch/hermes-agent/issues/38305) | Feishu 200340 在 v0.15.2 仍存在，PR #10256 未合 | ⚠️ 修复 PR 未合 |
| [#10073](https://github.com/NousResearch/hermes-agent/issues/10073) | Feishu Mobile 命令审批 200340 | ❌ 无（4 个月） |

### P3 缺陷与回归

- [#79339](https://github.com/NousResearch/hermes-agent/issues/79339) `MemoryProvider.sync_turn` 在 0.20.0 不再被调用——外部 memory 后端静默断流（**v0.20.0 回归**）。
- [#80596](https://github.com/NousResearch/hermes-agent/issues/80596) 学习图把外部安装的 skill 标记为"learned"，导致 use_count 虚高。
- [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) Desktop SSH 模式版本检查参数顺序错误，把正常安装判为不支持。
- [#77286](https://github.com/NousResearch/hermes-agent/issues/77286) Windows Desktop 更新程序报错提交。
- [#41331](https://github.com/NousResearch/hermes-agent/issues/41331) Email 平台 IMAP/SMTP 登录用户名硬编码，破坏自定义域名。
- [#80522](https://github.com/NousResearch/hermes-agent/issues/80522) zero-match casing probe 仅提示不返回路径，导致弱模型反复重搜（实测 +6 轮）。

**观察：** P2 缺陷中 Feishu/Lark 相关占据近一半，但**仅有一处存在未合并修复**（#10256）；其余均无对应修复 PR 或对应修复 PR 仍在审查中。

---

## 六、功能请求与路线图信号

| 请求 | 已有 PR？ | 评估 |
|---|---|---|
| **Grok/xAI 全功能对齐** ([#80424](https://github.com/NousResearch/hermes-agent/issues/80424)) | ❌ | 元问题已建立，预期将作为下个版本大主题之一 |
| **Plugin Interface Expansion** ([#64182](https://github.com/NousResearch/hermes-agent/issues/64182)) | ❌ | 跟踪型 issue，预期会拆出多个子 PR |
| **per-job `deliver_profile` 用于 cron 多路复用** ([#70849](https://github.com/NousResearch/hermes-agent/issues/70849)) | ❌ | QQ Bot 多 profile 用户的强诉求 |
| **Desktop 长粘贴转 `.txt` 附件** ([#66622](https://github.com/NousResearch/hermes-agent/issues/66622)) | ✅ [#80716](https://github.com/NousResearch/hermes-agent/pull/80716) | 借鉴 ChatGPT Work，10k+ 字符自动转附件 chip |
| **Laravel LSP for `.blade.php`** ([#75718](https://github.com/NousResearch/hermes-agent/issues/75718)) | ✅ [#75720](https://github.com/NousResearch/hermes-agent/pull/75720) | 已有 PR 待合 |
| **Revelata deepKPI 金融分析 skills** ([#80592](https://github.com/NousResearch/hermes-agent/pull/80592)) | ✅ [#80592](https://github.com/NousResearch/hermes-agent/pull/80592) | 已 PR 至 `optional-skills/finance/revelata-deepkpi/` |
| **MCP 服务器 record/replay fixtures** ([#80475](https://github.com/NousResearch/hermes-agent/pull/80475)) | ✅ [#80475](https://github.com/NousResearch/hermes-agent/pull/80475) | 提升测试覆盖 |
| **`auth_type=none` 提供方配置** ([#80633](https://github.com/NousResearch/hermes-agent/pull/80633)) | ✅ [#80633](https://github.com/NousResearch/hermes-agent/pull/80633) | 解决免认证 provider 解析 |

**路线图信号：** 项目明显在向"插件生态扩展（plugins/MCP）+ xAI 客户端深耕 + Desktop UX 学习 ChatGPT Work"三方向推进；安全强化（[#77484](https://github.com/NousResearch/hermes-agent/issues/77484)、[#77162](https://github.com/NousResearch/hermes-agent/issues/77162)、[#80444](https://github.com/NousResearch/hermes-agent/pull/80444)）也是持续主线。

---

## 七、用户反馈摘要

- **Windows Desktop 用户在 0.20.0 上遭遇最严重的回归**（[#79407](https://github.com/NousResearch/hermes-agent/issues/79407)、[#80710](https://github.com/NousResearch/hermes-agent/issues/80710)、[#77286](https://github.com/NousResearch/hermes-agent/issues/77286)、[#74411](https://github.com/NousResearch/hermes-agent/issues/74411)）：从底部面板丢失到更新损坏运行时、Windows SSH 版本探测误报，多个用户表达"v0.20.0 不能用"的情绪。
- **Feishu/Lark 用户对长期不修的卡片授权 bug 表达不满**（[#13924](https://github.com/NousResearch/hermes-agent/issues/13924)、[#25886](https://github.com/NousResearch/hermes-agent/issues/25886)、[#38305](https://github.com/NousResearch/hermes-agent/issues/38305)、[#10073](https://github.com/NousResearch/hermes-agent/issues/10073)、[#7675](https://github.com/NousResearch/hermes-agent/issues/7675)）：4 个月前开出的同类问题仍未根治，企业用户已被迫使用 `/approve session` 命令绕过。
- **Memory Provider 插件作者反馈 0.20.0 后完全静默断流**（[#79339](https://github.com/NousResearch/hermes-agent/issues/79339)）：没有任何日志报错，属于危险型回归。
- **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期**：2026-08-07
**数据来源**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日项目活跃度处于**低位**。过去 24 小时内无新增 Issue、无新版本发布，仅有 2 条 Pull Request 发生状态变更（1 条关闭、1 条仍待合并）。整体来看，项目当日处于"沉淀期"——社区互动非常有限（PR 点赞与评论均显示未定义/为 0），但仍有跨季度推进的功能性增强正在被缓慢合入主干。**健康度评估：⚠️ 关注维护节奏，社区响应偏慢。**

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时没有新的 Release tag 推送。若需了解历史版本迭代节奏，建议关注仓库的 [Releases 页面](https://github.com/sipeed/picoclaw/releases)。

---

## 3. 项目进展

### ✅ 已关闭 PR（1 条）

| 编号 | 标题 | 作者 | 状态 | 链接 |
|------|------|------|------|------|
| #1349 | feat(qq): support parsing and replying to more attachment types | @aishannon | CLOSED | [#1349](https://github.com/sipeed/picoclaw/pull/1349) |

**进展说明**：
PR #1349 是一个跨期较长的功能增强（创建于 2026-03-11，关闭于 2026-08-06，跨度近 5 个月）。该 PR 为 QQ Channel 渠道补齐了以下能力：

- 支持解析 QQ Channel 表情包结构
- 支持接收来自 QQ Channel 的语音、图片、视频、文件消息
- 支持回复本地语音、图片、视频、文件附件（发送前先上传）
- 回复策略：优先使用 Markdown，失败时降级处理

**项目整体向前迈进**：QQ 渠道的多模态消息收发能力得到完善，PicoClaw 在 QQ 平台上的适配度提升。但需注意：该 PR 当前为 **CLOSED** 状态，未明确标注 "MERGED"，建议关注是合入主干还是被作者关闭/撤回。

---

## 4. 社区热点

由于今日 0 条 Issues 活跃、2 条 PR 均无评论（评论数显示 `undefined`）且 **0 个 👍**，社区热度极低，**没有可量化的讨论焦点**。

可被列为"近期值得跟踪"的项目：

- **PR #3200**（feat(models): add configurable default fallback chain）—— 由用户 @lc6464 提出，已开放 1 个月仍未合入，**📌 建议关注后续推进**，详见第 6 节。 [链接](https://github.com/sipeed/picoclaw/pull/3200)

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告、无崩溃/回归问题反馈。**

⚠️ 需要提醒的是：今日 0 条 Issue 活动并不必然代表项目无问题，更可能是社区反馈通道冷清，建议维护者主动核查上周 Issue 处理情况。

---

## 6. 功能请求与路线图信号

### 🔍 仍待合并的 PR

| 编号 | 标题 | 作者 | 创建时间 | 链接 |
|------|------|------|----------|------|
| #3200 | feat(models): add configurable default fallback chain | @lc6464 | 2026-07-01 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) |

**功能解读**：
该 PR 提议在 Web UI 中为模型管理页面添加**可配置的默认 Fallback Chain（回退链）**，并通过后端 API 持久化。用户可：

- 设置默认模型
- 添加多个回退模型
- 调整回退顺序
- 保存完整链路

**落地可能性**：该功能契合当前多模型路由的常见需求（避免单点故障、应对服务商限流），属于"合理且可落地"的增强。但由于已经开放 1 个月仍处于 OPEN 状态且无评论互动，**落地节奏偏慢**，建议维护者评估工作量并给出反馈。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数量为 0、PR 互动也为 0，**无法从公开评论中提炼真实用户痛点**。

可从已关闭 PR #1349 的描述中推断的用户需求场景：
- 使用 QQ Channel 的开发者希望支持**富媒体收发**（图片、语音、视频、文件），而非仅限于文本
- 用户期望**回复策略有优雅降级**（Markdown 优先，失败后降级），提升跨平台一致性

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 等待时长 | 链接 |
|------|------|------|----------|------|
| #3200 | PR | feat(models): add configurable default fallback chain | 约 1 个月（2026-07-01 至今） | [#3200](https://github.com/sipeed/picoclaw/pull/3200) |

🔔 **维护者提醒**：
- PR #3200 等待时长已超过 4 周，且无任何评论互动，符合"长期未响应"判定标准
- 建议维护者：① 给出 review 反馈或合并决议；② 若需返工则明确 blocker；③ 若暂不纳入则说明原因
- 同时建议排查仓库内历史超 30 天未关闭的 Issue 与 PR，评估整体积压情况

---

## 📊 健康度小结

| 维度 | 状态 | 说明 |
|------|------|------|
| 活跃度 | ⚠️ 低 | 24h 内仅 2 条 PR 状态变更 |
| 社区响应 | ⚠️ 偏慢 | PR #3200 超期未响应 |
| 稳定性 | ⚪ 数据不足 | 无 Bug 报告 |
| 功能推进 | ✅ 缓慢但有进展 | QQ 渠道多模态能力补齐 |
| 版本节奏 | ⚪ 无变化 | 24h 内无新 Release |

**总体评价**：PicoClaw 当前处于**低活跃、低反馈**的静默期。维护者应主动与 PR 作者和社区用户沟通，避免长尾 PR 持续堆积；同时建议在下次发版前清点积压 PR，提升项目响应透明度。

---

*报告生成时间：2026-08-07 | 数据口径：GitHub 公开 API 24h 增量*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：2026-08-07**

---

## 1. 今日速览

NanoClaw 在过去 24 小时内呈现出**高活跃度、强维护响应**的态势：14 条 PR 集中更新，8 条已合并/关闭，关闭率达到约 57%；同时有 2 条 Issue 更新（1 关闭、1 新开）。核心维护者 `glifocat` 与社区贡献者 `yairixStudio` 是主要推动力，前者主导了升级流程事务化、清理失效 Qodo/Google MCP 技能等架构性工作，后者集中提交了 Telegram 与调度模块的多条修复。无新版本发布，说明本次变更仍处于主干累积阶段，距离下个稳定版本可能还需 1-2 个工作周期。

---

## 2. 版本发布

**本期无新版本发布。** 当前所有变更均合并至主干但尚未触发发版，建议关注下周的版本节奏。

---

## 3. 项目进展

今日合并/关闭的 8 条 PR 推动了 NanoClaw 在**可靠性、消息处理、调度机制**三方面的整体前进：

**🛡️ 升级与技能生命周期（核心团队主导）**
- [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) — `chore(skills): remove stale qodo and Google MCP skills`：清除了依赖未配置 SaaS 集成的失效技能，与同窗口关闭的 Issue [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) 形成完整闭环。
- [#2873](https://github.com/nanocoai/nanoclaw/pull/2873) — `fix(skills): split pre-flight from credentials`：使 `/update-skills` 能够独立刷新代码部分，降低技能更新失败概率。

**⏱️ 调度模块强化（贡献者 yairixStudio 系列修复）**
- [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) — 失败后重新触发循环任务，解决永久失败任务被"卡住"不再调度的问题。
- [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) — 将永久失败的调度任务显式通知用户，避免问题被静默吞掉。
- 两条合并形成"重新触发 + 显式告警"的完整恢复链路。

**💬 Telegram 通道智能化（yairixStudio 集中交付）**
- [#2213](https://github.com/nanocoai/nanoclaw/pull/2213) — 接受无 caption 的纯媒体消息（图片/视频/文件），修复了被静默丢弃的输入通道。
- [#2644](https://github.com/nanocoai/nanoclaw/pull/2644) — 在 `extractReplyContext` 中识别回复对象为 bot 的情况，填充 `isReplyToBot` 字段。
- [#2643](https://github.com/nanocoai/nanoclaw/pull/2643) — 修复 router 在 `pattern` 模式下对 @mention / DM / reply-to-bot 触发失灵的回归问题。

**🧹 数据隔离**
- [#2591](https://github.com/nanocoai/nanoclaw/pull/2591) — 用户 ID 命名空间化由裸冒号改为带 channel-type 前缀，避免跨通道 ID 碰撞风险。

**综合评估**：今日合并内容约 **60% 为修复类，30% 为重构/清理，10% 为能力扩展**，项目向"稳定优先"方向稳步迈进。

---

## 4. 社区热点

尽管所有 Issue/PR 的评论数均为 0、`👍` 反应也尚未显现，从更新密度与关注度来看，本期热点集中在以下两条与升级流程强相关的讨论：

- 🔥 [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) **（已关闭）** —— `glifocat` 报告两个内置 Qodo 技能依赖未初始化的 SaaS 集成，且会拦截正常编码请求。该议题同时推动了 [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) 的合并，体现维护者"问题—修复"高度耦合的高效响应。
- 🔥 [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) **（开放）** —— 紧随其后，`/update-nanoclaw` 在切流失败时仍返回成功，存在 SQLite 数据库、gitignored 配置、外部组件的恢复盲区。该议题直接驱动了同作者撰写的修复 PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)。

**诉求分析**：核心社区诉求聚焦于**升级链路的事务性与可恢复性**，反映用户对"无人值守自动更新"场景下系统稳健性的高度关注。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 描述 | 状态 |
|---------|------|------|------|
| 🟠 **高**（数据一致性 / 升级安全） | [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) | `/update-nanoclaw` 在未完成可恢复切流时即返回成功，Git 回滚点不覆盖 SQLite / gitignored 配置 / 外部组件，存在 4 类失败窗口 | ✅ 已有修复 PR [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)（待合并） |
| 🟠 **高**（集成可用性） | [#3171](https://github.com/nanocoai/nanoclaw/issues/3171) | Qodo 系列技能读取未初始化的 API key，拦截正常编码请求 | ✅ 已通过 [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) 关闭 |
| 🟡 **中**（凭证 / OneCLI 绕行） | [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | `use-native-credential-proxy` 在真实 launchd/systemd 安装中静默回退至 OneCLI 网关 | ⏳ PR 仍开放 |
| 🟡 **中**（CLI 挂载） | [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) | `groups config add-mount` 缺少 `--rw` 标志，无法配置读写挂载 | ⏳ PR 仍开放 |
| 🟢 **低**（能力扩展） | [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | Telegram Chat SDK 升级以支持富消息 | ⏳ PR 仍开放 |

**总结**：本期没有遗留的"已报告无修复"的高危 Bug；唯一待处理的严重项 [#3194](https://github.com/nanocoai/nanoclaw/issues/3194) 已由同一作者提交配套修复，整体稳定性处于可控状态。

---

## 6. 功能请求与路线图信号

- **🔌 新集成能力**
  - [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) — `feat: add Tavily MCP tool skill`：由 `manisrinivasan2k1` 提交，将 Tavily 搜索接入 MCP 工具集，无需修改源码，符合 utility skill 规范。**纳入下一版本概率高**，因为 PR 已结构化、遵循贡献指南。
- **🛠️ CLI 增强**
  - [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) — `add --rw flag to groups config add-mount`：填补 groups 配置读写控制的能力空白，与容器化/隔离部署场景高度契合。
- **🏗️ 架构可扩展性**
  - [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) — `refactor: add host seams for skill-owned capabilities`：为核心代码引入"宿主接缝"，让 skill 可以拥有更多专属能力而不污染主仓。**这是面向多 skill 长期生态的方向性重构**，被纳入下个版本可能性较大。

---

## 7. 用户反馈摘要

由于本期 Issue/PR 评论数均为 0、点赞未公开，反馈主要从 Issue/PR 描述中提炼：

- **痛点 1：升级体验的"假成功"** — 用户（`glifocat`，从描述语境看更像内部/核心维护者视角）担忧 `/update-nanoclaw` 在底层失败窗口下仍标记成功，影响生产环境信任度。
- **痛点 2：失败调度的"静默性"** — [#2678](https://github.com/nanocoai/nanoclaw/pull/2678) 与 [#2679](https://github.com/nanocoai/nanoclaw/pull/2679) 反映：循环任务一旦永久失败就被静默丢弃，用户难以感知。两个 PR 合并后，用户体验应得到显著改善。
- **痛点 3：Telegram 体验细节** — [#2213](https://github.com/nanocoai/nanoclaw/pull/2213)（纯媒体消息丢失）、[#2643](https://github.com/nanocoai/nanoclaw/pull/2643)（pattern 模式下 @mention 不响应）、[#2644](https://github.com/nanocoai/nanoclaw/pull/2644)（reply-to-bot 无法识别）三条共同体现**对话机器人与即时通讯语义对齐的精细化诉求**，今日已集中修复。
- **隐含满意度信号**：`yairixStudio` 在同一窗口内连发 4 条相关修复并全部合并，显示该贡献者对项目反馈循环满意度较高，处于高产期。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日期 | 待处理天数（截至 2026-08-07） | 优先级提示 |
|------|------|----------|------------------------------|-----------|
| [#2705](https://github.com/nanocoai/nanoclaw/pull/2705) | PR — 修复 OneCLI 绕行 | 2026-06-07 | **约 61 天** | 🔴 长期挂起，建议核心维护者评审 |
| [#3149](https://github.com/nanocoai/nanoclaw/pull/3149) | PR — `add-mount --rw` 标志 | 2026-07-29 | 约 9 天 | 🟡 中等积压 |
| [#3190](https://github.com/nanocoai/nanoclaw/pull/3190) | PR — Tavily MCP skill | 2026-08-05 | 约 2 天 | 🟢 正常窗口 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | PR — 架构接缝重构 | 2026-08-04 | 约 3 天 | 🟢 正常窗口 |
| [#3193](https://github.com/nanocoai/nanoclaw/pull/3193) | PR — Telegram Chat SDK 升级 | 2026-08-06 | 约 1 天 | 🟢 正常窗口 |

**重点提醒**：[#2705](https://github.com/nanocoai/nanoclaw/pull/2705) 已悬置超 60 天，作为涉及安装期凭证链路的修复，建议维护者尽快安排评审或给出搁置说明，以免阻塞后续相关重构。

---

> 📊 **项目健康度评估**：**B+ → A-**
> 活跃度高、核心维护者响应及时、Bug 修复链路完整；扣分项主要来自一条超过 60 天的待评审 PR，以及新引入的升级事务化能力尚处于待合并状态。下一版本如能合并 [#3195](https://github.com/nanocoai/nanoclaw/pull/3195)、[#3190](https://github.com/nanocoai/nanoclaw/pull/3190)，将进一步提升整体健壮性与扩展能力。

*本报告基于 2026-08-06 ~ 2026-08-07 的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期：** 2026-08-07  
**项目：** [nearai/ironclaw](https://github.com/nearai/ironclaw)  
**数据周期：** 过去 24 小时  

---

## 1. 今日速览

IronClaw 今日发布了自 1.0.0 以来的首个稳定版本 **v1.1.0**，项目活跃度维持高位：过去 24 小时内共 50 条 Issues 更新（27 新开/活跃、23 关闭），50 条 PR 更新（33 待合并、17 已合并/关闭）。典型 QA bug 节奏明显，整体呈现"成熟稳定 + 持续打磨"的双轨节奏。值得关注的是核心贡献者 `italic-jinxin` 正在推进一组 4 个 XL 级 [Inspector 系列 PR](#section-4)，围绕运维可观测性形成完整闭环；同期 Slack 投递、Routine 调度、文件系统检索等关键路径均由对应负责人提交修复或重构，社区已进入 v1.1.x 的快速迭代窗口。

**健康度评估：** 🟢 良好 — 关闭率 46%（Issues 23/50、PRs 17/50），无长期积累的停滞 PR；P1 严重缺陷大多在当日得到关闭。

---

## 2. 版本发布

### 🚀 ironclaw-v1.1.0 — 发布于 2026-08-06

**版本性质：** 自 1.0.0 以来的首个稳定版本，基于 `1.1.0-rc.1` 并合并其后的修复。

**核心更新（Headline Work — Extension Reach）：**

| 模块 | 更新内容 |
|---|---|
| **Hosted MCP** | 支持注册任意 hosted MCP servers，扩展 Agent 工具生态 |
| **IronHub 深度链接** | 支持从 IronHub 深度链接直接安装扩展 |
| **跨频道文件附件** | 持久化文件附件，确保文件可在多个渠道间穿透传递 |
| **Slack 集成** | 改进 Slack 相关流程（详见 Release Notes 末尾被截断描述） |

**破坏性变更：** 未在摘要中明确披露，建议查阅完整 [Release Notes](https://github.com/nearai/ironclaw/releases)。  
**迁移注意事项：** 鉴于涉及 hosted MCP 注册语义变更（参见今日 PR #7253），建议关注官方迁移说明。

---

## 3. 项目进展

过去 24 小时共有 17 个 PR 进入合并/关闭状态，以下为推进核心能力的关键 PR：

| PR | 作者 | 内容 | 影响 |
|---|---|---|---|
| [#7235](https://github.com/nearai/ironclaw/pull/7235) *(CLOSED)* | italic-jinxin | feat(inspector): operator inspection API + live updates | 运维可观测性入口，端点/快照/实时流打通 |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) *(CLOSED)* | thisisjoshford | docs: 强化 docs/ 发布边界 + 内部文档归集 | 修复 `docs/design/` 与 `docs/research/` 泄露为公开隐藏页的隐患 |
| [#7303](https://github.com/nearai/ironclaw/pull/7303) *(CLOSED)* | henrypark133 | fix(docker): 编排器镜像安装 curl | 修复 staging 节点 `docker.io/nearaidev/ironclaw:1.1.0` 误报 unhealthy |
| [#7289](https://github.com/nearai/ironclaw/pull/7289) *(CLOSED)* | serrrfirat | fix(memory): libSQL FTS 自然语言查询净化 | 关闭 [Issue #7275](https://github.com/nearai/ironclaw/issues/7275)，恢复生产路径下的持久记忆召回 |

**整体进展判断：** 项目在 v1.1.0 稳定版的同一窗口内快速向 v1.2 方向推进，重点方向集中在三层：(1) **可观测性**（Inspector 套件）、(2) **文档治理**（Publication Boundary + Guidance Unification，参见 PR #7306）、(3) **核心稳定性**（Slack 投递、Routine 调度、libSQL FTS）。

---

## 4. 社区热点

按评论数排序，过去 24 小时讨论最活跃的议题：

### 🔥 Issues（评论 ≥ 3）

| Issue | 评论 | 标题 | 关注点 |
|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | 4 | 审批通知在通知历史中消失而非保留 | 用户对自动化权限审批的可追溯性需求 |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | 4 | GitHub Issue 搜索/创建功能返回 HTTP 403 | 集成鉴权/权限粒度问题 |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | 3 | Reborn routine 在需要 Slack DM 阅读时失败 + capability_info 重试循环 | Routine 与能力系统的边界缺陷 |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) *(CLOSED)* | 3 | Telegram 在 v0.28.1 不能从 UI 自动配对 | Pairing 流程文档与实现不一致 |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | 3 | Activity 面板隐藏工具细节且运行中不更新 | 实时反馈可见性 |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | 3 | Slack 断开请求被 agent 错误拒绝 | Agent 对内置操作的语义识别 |

### 🔥 PRs（PR #7236 / #7277 / #7239 形成 [Inspector 套件](https://github.com/nearai/ironclaw/issues/7220)）

- [#7236](https://github.com/nearai/ironclaw/pull/7236) — Inspector Debug Panel shell + live diagnostics client
- [#7277](https://github.com/nearai/ironclaw/pull/7277) — 模型调用统计（计数、延迟、token、缓存、每模型分布）
- [#7239](https://github.com/nearai/ironclaw/pull/7239) — Prompt Inspection + Prompt Tab
- [#7235](https://github.com/nearai/ironclaw/pull/7235) — Operator Inspection API + 实时流（已 CLOSED）

**诉求分析：** 用户与运维方对"**透明化**"的诉求高度集中 — 无论是审批通知的留存、Activity 面板的实时细节、还是 Prompt/模型调用可观测性，本质都在要求 Agent 行为可追溯、可审计。这与近 24 小时集中合并的 Inspector 套件形成正向呼应。

---

## 5. Bug 与稳定性

### 🔴 P1（严重）

| Issue | 状态 | 标题 | 是否有修复 PR |
|---|---|---|---|
| [#5877](https://github.com/nearai/ironclaw/issues/5877) | **CLOSED** ✅ | Slack 通知投递到错误用户（安全/隐私） | 关注后续修复 |
| [#5504](https://github.com/nearai/ironclaw/issues/5504) | **CLOSED** ✅ | Routine 创建挂起，无返回结果或错误 | 关注后续修复 |
| [#5456](https://github.com/nearai/ironclaw/issues/5456) | OPEN ⚠️ | Routine 运行因 runner lease 过期失败（90s 阈值过紧） | 暂无显式关联 PR |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | **CLOSED** ✅ | Telegram 自动配对失败 | 关注后续修复 |

### 🟠 P2（中等）

| Issue | 状态 | 标题 | 是否有修复 PR |
|---|---|---|---|
| [#5553](https://github.com/nearai/ironclaw/issues/5553) | OPEN | 审批通知消失 | ❌ |
| [#5702](https://github.com/nearai/ironclaw/issues/5702) | OPEN | GitHub 集成 HTTP 403 | ❌ |
| [#5522](https://github.com/nearai/ironclaw/issues/5522) | OPEN | Reborn + Slack DM 能力缺失 | ❌ |
| [#5701](https://github.com/nearai/ironclaw/issues/5701) | OPEN | Activity 面板隐藏细节 | ❌（PR #7305 部分相关） |
| [#5834](https://github.com/nearai/ironclaw/issues/5834) | OPEN | Slack 断开被错误拒绝 | PR [#7300](https://github.com/nearai/ironclaw/pull/7300) 部分相关 |
| [#5707](https://github.com/nearai/ironclaw/issues/5707) | OPEN | Routine 创建响应暴露内部实现细节 | ❌ |
| [#5836](https://github.com/nearai/ironclaw/issues/5836) | OPEN | Routine 每次调度运行均失败 "No thread attached" | ❌ |
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | OPEN | Slack 投递目标未找到 | PR [#7300](https://github.com/nearai/ironclaw/pull/7300) 部分相关 |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) | OPEN | 新建聊天延迟随历史增长 | ❌ |
| [#5510](https://github.com/nearai/ironclaw/issues/5510) | OPEN | 无法删除旧 Routine | ❌ |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) | OPEN | 多次工具失败后变通用 "invalid result" | ❌ |
| [#5776](https://github.com/nearai/ironclaw/issues/5776) | OPEN | 长输出提示超时降级为 "invalid result" | ❌ |
| [#5507](https://github.com/nearai/ironclaw/issues/5507) | **CLOSED** ✅ | 失败运行展示 "No thread attached" 阻塞调试 | ✅ |
| [#5838](https://github.com/nearai/ironclaw/issues/5838) | **CLOSED** ✅ | 上下文压缩错误即使工具执行成功 | ✅ |

### 🟡 P3（次要）

[#5557](https://github.com/nearai/ironclaw/issues/5557)、[#5704](https://github.com/nearai/ironclaw/issues/5704)、[#5705](https://github.com/nearai/ironclaw/issues/5705)、[#5706](https://github.com/nearai/ironclaw/issues/5706) 均已 ✅ CLOSED，展现 QA 团队对 UI 细节问题的高效响应。

**稳定性信号：** 24 小时内关闭 23 个 Issues，P1 缺陷关闭率 75%（3/4），剩余 P1 缺陷 [Issue #5456](https://github.com/nearai/ironclaw/issues/5456) 涉及 runner lease 阈值设计，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

### 明确的新功能 PR

| PR | 功能 | 路线图信号 |
|---|---|---|
| [#7236](https://github.com/nearai/ironclaw/pull/7236) / [#7277](https://github.com/nearai/ironclaw/pull/7277) / [#7239](https://github.com/nearai/ironclaw/pull/7239) | **Inspector 套件**（Debug Panel、模型调用统计、Prompt 检查） | 强烈信号：项目在 v1.1.0 之后优先补齐可观测性。关联设计 Issue [#7220](https://github.com/nearai/ironclaw/issues/7220) |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | WASM 工具的 Nostr 主机函数（`near:agent@0.4.0`） | WASM 沙箱生态扩展，新增高价值密钥签名能力 |
| [#7157](https://github.com/nearai/ironclaw/pull/7157) | 显式 channel delivery 工具（两车道 + 通知 channel） | 解决 Routine 通知/会话生命周期管理混乱，**强烈可能合入 1.2.0** |
| [#7214](https://github.com/nearai/ironclaw/pull/7214) | Docker 与 Railway 显式 sandbox profile | 部署灵活性提升 |
| [#7259](https://github.com/nearai/ironclaw/pull/7259) | docs/ 发布边界 + CI 门禁 | 文档治理体系化 |
| [#7306](https://github.com/nearai/ironclaw/pull/7306) | Guidance Unification（单一事实源 + 测量驱动 loader） | 文档治理延续 |
| [#7236](https://github.com/nearai/ironclaw/pull/7236) | OAuth 登录位次调整 | 体验优化 |

### 从用户反馈中识别的潜在需求

- **通知可追溯性**（#5553）→ 已有 [Inspector 套件](https://github.com/nearai/ironclaw/pull/7236) 部分覆盖
- **Routine 删除能力**（#5510）→ 待 PR
- **Activity 实时更新**（#5701）→ [PR #7305](https://github.com/nearai/ironclaw/pull/7305) 仅处理样式，未覆盖实时性
- **Runner lease 阈值调整**（#5456）→ 待 PR

---

## 7. 用户反馈摘要

从高评论数 Issues 中提炼的真实痛点：

###

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**日期**：2026-08-07
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 一、今日速览

LobsterAI 今日整体活跃度处于**中等偏低**水平，过去 24 小时内社区有持续互动但项目侧推进缓慢。Issues 端新增/活跃 5 条（含 3 条 2026-08-06 至 08-07 新开），但全部仍处 OPEN 状态，无任何关闭；PR 端有 2 条仍在等待合并，未产生新的合并或关闭动作，亦无新版本发布。值得关注的是，仍有 2 条历史 Issue/PR 被标记为 `[stale]` 但今日仍有更新动作，提示这些陈旧工单可能需要维护者介入做归档或重新分类。

---

## 二、版本发布

⚠️ **今日无新版本发布**。上一次可考版本为用户在 Issue #2443 中提到的 `LobsterAI 2026.8.5.0`，距离本次日报约 2 天。

---

## 三、项目进展

⚠️ **今日无 PR 合入**，项目代码层无显式推进。

不过仍有 2 条待合并 PR 处于活跃状态，均挂在主仓库分支并近期更新：

| PR | 标题 | 作者 | 状态 | 链接 |
|---|---|---|---|---|
| #1197 | Feature/Agent 管理页面交互优化 | leefinder | OPEN（stale） | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| #1199 | feat(model): add context window and token settings | leedalei | OPEN（stale） | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |

- **#1197**（[#1197](https://github.com/netease-youdao/LobsterAI/pull/1197)）：针对 Agent 管理页面删除操作路径过深、侧边栏体验不佳的优化 PR，当前与主分支存在合并冲突，需要作者 rebase。
- **#1199**（[#1199](https://github.com/netease-youdao/LobsterAI/pull/1199)）：新增「按模型粒度的 contextWindow 与 maxTokens 设置」并在 Cowork/OpenClaw 配置中传递上下文元数据，是基础设施级别的能力补齐。

📌 建议维护者集中处理这两条 PR 以解锁实际功能落地。

---

## 四、社区热点

按评论与互动密度排序的今日热点：

### 1. Issue #1196 — 不要强制建立 6 个系统文件（1 条评论）
- **链接**：[#1196](https://github.com/netease-youdao/LobsterAI/issues/1196)
- **核心诉求**：用户 `daiqi1235` 吐槽切换工作目录时被强制写入 AGENTS.md、USER.md 等 6 个文件，污染工作区且删除后还会重建。建议学习 Claude Code 模式，改为全局 `agents.md` + 用户自定义 system prompt，或放到隐藏目录中。
- **背后反映**：多 Agent 项目工程化规范与用户工作区整洁度的冲突，是不少 AI 编程类工具的共性痛点。

### 2. Issue #1198 — 网关重启失败且后续对话不可用（1 条评论）
- **链接**：[#1198](https://github.com/netease-youdao/LobsterAI/issues/1198)
- **核心诉求**：用户 `Cathylkx` 反馈 Chrome 启动后仍提示「浏览器服务不可用」，网关重启进度条中途消失，看不到最终状态，但 LobsterAI 仍推荐后续操作，体验割裂。
- **背后反映**：浏览器自动化子系统的健康检查与 UI 状态同步存在问题，稳定性信号偏弱。

### 3. PR #1197 — Agent 管理页面交互优化（设计图 + 复刻）
- **链接**：[#1197](https://github.com/netease-youdao/LobsterAI/pull/1197)
- **关注度**：附有详细截图与原 PR 链接（[#1176](https://github.com/netease-youdao/LobsterAI/pull/1176)），说明社区此前已提交过类似方案但因合并冲突被搁置，是社区呼声较高的体验改进。

---

## 五、Bug 与稳定性

按严重程度从高到低排列：

| 等级 | Issue | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|---|
| 🔴 高 | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) | 网关重启到一半进度条消失、状态未知，后续模型提示「不可用」 | ❌ 无 | — |
| 🟡 中 | [#2443](https://github.com/netease-youdao/LobsterAI/issues/2443) | **模型 ID 含斜杠**的自定义 OpenAI 兼容 Provider（如 SiliconFlow 的 `deepseek-ai/DeepSeek-V4-Flash`）无法在 UI 选中 | ❌ 无 | — |
| 🟢 低 | [#2442](https://github.com/netease-youdao/LobsterAI/issues/2442) | LobsterAI exec 内嵌 shell 仍是 PowerShell 5.1（Windows 系统自带）而非 PS 7.4 | ❌ 无（属于架构讨论） | — |

🔧 **建议优先修复**：
1. **#2443 模型 ID 解析 Bug**：影响所有「模型 ID 带 `/`」的 OpenAI 兼容服务商（SiliconFlow、Hugging Face 等），属于典型输入校验缺陷，修复成本较低、用户面广。
2. **#1198 浏览器服务健康检查**：直接影响核心自动化链路，需要复现路径分析。

---

## 六、功能请求与路线图信号

| Issue | 请求者 | 建议方向 | 与现有 PR 的契合度 |
|---|---|---|---|
| [#2444](https://github.com/netease-youdao/LobsterAI/issues/2444) | PYUDNG | 输入框「编辑模式」开关：进入后默认 Enter 换行、Ctrl+Enter 发送，并考虑 Markdown WYSIWYG | 🆕 全新交互诉求，**目前无对应 PR**，建议纳入 UX backlog |
| [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) | daiqi1235 | 支持全局 AGENTS.md 与隐藏目录化系统文件 | 🆕 全新诉求，可作为长期可配置化方向 |
| [#1197 (PR)](https://github.com/netease-youdao/LobsterAI/pull/1197) | leefinder | Agent 管理页面删除/侧边栏交互优化 | ✅ PR 已就绪，**只差 rebase 合入** |
| [#1199 (PR)](https://github.com/netease-youdao/LobsterAI/pull/1199) | leedalei | 模型级 contextWindow/maxTokens 设置 | ✅ PR 已就绪，对应上下文控制诉求 |

📈 **路线图预测**：
- **短期可落地**：#1197、#1199 — 已有成熟 PR，处理好合并冲突即可进入下一版本。
- **中期可规划**：#2444 编辑模式切换、#1196 系统文件组织重构 — 均为高频反馈但需设计权衡。
- **基础设施议题**：将 exec shell 升级至 PS 7.4（#2442）虽是低优，但能在长期改善脚本执行能力。

---

## 七、用户反馈摘要

综合所有活跃 Issue 的评论与描述，提炼出以下真实用户痛点：

1. **「工作区被工具侵占」**（#1196）：用户希望工具按需使用本地目录，而非默认铺满模板文件，尤其在多项目切换时显得凌乱。
2. **「状态可见性差」**（#1198）：子服务（浏览器、网关）异常时 UI 反馈不完整，用户不知道是「还在重启」还是「已经失败」，需改进健康状态展示。
3. **「自定义 Provider 不够灵活」**（#2443）：随着 OpenAI 兼容 API 生态扩张（SiliconFlow、Hugging Face 等），模型 ID 含特殊字符（`/`）的场景需要被支持，否则用户被迫改用其他工具。
4. **「长 Prompt 编辑体验差」**（#2444）：写长 prompt 时频繁按 Shift+Enter 易误触发送，用户希望提供「编辑模式」显式切换。
5. **「Shell 版本陈旧」**（#2442）：用户希望使用更新的 PowerShell 7.4 以获得更好脚本能力，但 LobsterAI 暂未暴露此配置项。

---

## 八、待处理积压

以下工单/请求**已创建较长时间（2026-04-01）**，至今未关闭，需维护者主动干预：

| 类型 | 编号 | 标题 | 当前状态 | 链接 |
|---|---|---|---|---|
| Issue | #1196 | 不要强制建立 AGENTS.md 等 6 个文件 | OPEN + stale | [#1196](https://github.com/netease-youdao/LobsterAI/issues/1196) |
| Issue | #1198 | 网关重启异常 / 模型不可用 | OPEN + stale | [#1198](https://github.com/netease-youdao/LobsterAI/issues/1198) |
| PR | #1197 | Agent 管理页面交互优化 | OPEN + stale，需 rebase | [#1197](https://github.com/netease-youdao/LobsterAI/pull/1197) |
| PR | #1199 | feat(model): add context window and token settings | OPEN + stale | [#1199](https://github.com/netease-youdao/LobsterAI/pull/1199) |

🚨 **提醒维护者**：4 条 stale 工单占用了 80% 的项目陈旧积压，建议：
- 对 #1197、#1199 安排 review 与合并冲突解决；
- 对 #1198 复现 Bug 并给出官方回应；
- 对 #1196 给出产品立场说明（即使是 Wontfix，也应明确回复）。

---

## 附录：健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h 新开 Issues | 3 条 | 中等 |
| 24h 关闭 Issues | 0 条 | ⚠️ 偏低 |
| 24h 合并 PR | 0 条 | ⚠️ 停滞 |
| Stale 工单占比 | 4 / 7 ≈ 57% | ⚠️ 较高 |
| 新版本发布 | 0 | 正常窗口期 |
| Bug 类工单 | 3 条 | 中等 |

📊 **综合评估**：项目处于**维护期**，社区反馈持续涌入但代码侧推进缓慢，需警惕 stale 占比上升导致贡献者流失。

---

*报告生成时间：2026-08-07 | 数据周期：2026-08-06 ~ 2026-08-07*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：2026-08-07**
**项目：** agentscope-ai/CoPaw（GitHub 仓库标识：`QwenPaw`）
**报告范围：过去 24 小时（2026-08-06 ~ 2026-08-07）**

---

## 1. 今日速览

CoPaw 今日继续保持**高活跃度**的开发节奏：过去 24 小时共产生 34 条 Issue 更新（17 新开/活跃 + 17 已关闭）和 50 条 PR 更新（21 待合并 + 29 已合并/关闭），整体 close/commit 比约 1:1.7，吞吐量健康。**当日无新版本发布**，但合并了一批面向 **AgentScope 2.0 兼容、Provider/MCP 可靠性、Memory(ReMe) 子系统健壮性**的关键修复 PR。从 Issue 分布看，2.0.1 版本仍是用户主要跑量版本，**长会话上下文管理（窗口溢出、空响应、`tool_calls`/`tool_result` 错配）**与 **MCP 工具稳定性（超时、命名、缓存失效）**是当前社区最迫切的两类痛点，其中多起已被对应 PR 关闭。

---

## 2. 版本发布

**无新版本发布。** 当前 main 分支合并活动持续，没有新的 tag/release。建议关注 2.1.0b1 → 2.1.0b2 → 2.1.0 GA 的推进节奏（[#6775](https://github.com/agentscope-ai/QwenPaw/issues/6775) 用户反馈 Windows 桌面端被杀毒软件报毒，可能是 2.1.0 beta 渠道分发的连带问题，需要尽快澄清安全签名/下载源说明）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| 方向 | PR | 说明 |
|---|---|---|
| Provider 工具调用还原 | [#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) **fix(providers): return typed tagged tool calls** — 闭 | 将 thinking/text 标签中提取出的 tool call 重新装配为 AgentScope 2.0 `ToolCallBlock`，保留原始 JSON 参数，并流式分配唯一 ID。**推进 Responses-API + Thinking/Tag 双标签路径的工具还原** |
| Harness 优雅降级 | [#6664](https://github.com/agentscope-ai/QwenPaw/pull/6664) **fix(harnesses): degrade gracefully without Codex CLI** — 闭 | 在未安装 Codex CLI 的环境下不再崩溃，属于提升装机兼容性的修复 |
| 编辑器输入目标修正 | [#6530](https://github.com/agentscope-ai/QwenPaw/pull/6530) **fix: editable per-tool call limit names** — 闭 | 修复工具调用限制名称的前端可编辑性（小而关键） |
| Scroll/Memory 生命周期对齐 | [#6611](https://github.com/agentscope-ai/QwenPaw/pull/6611) **refactor(context): align Scroll and memory with AgentScope lifecycle** — 闭 | 大重构：将 Scroll 收敛为唯一上下文协议，对齐 AgentScope 的 state/toolkit/middleware/context hook。**这是为长会话稳定性、Memory 自动持久化打地基的工作** |
| 共享文件系统持久化 | [#6744](https://github.com/agentscope-ai/QwenPaw/pull/6744) **fix(config): harden agent config persistence on shared filesystems** — 闭 | 把 `agent.json` / `access_control.json` 的迁移改为原子写，OSSFS/FUSE 等共享存储不再被半写文件污染。**为云端/团队协作部署铺路** |

整体看，**「AgentScope 2.0 适配」+「持久化/配置健壮性」+「Provider 工具还原」**是今日主线，从合并角度看是扎实的"看不见但关键的底层工作日"。

---

## 4. 社区热点（讨论最活跃）

按 24 小时评论数 / 跨多日总评论数排序：

- **[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) 增加频道的重试功能（closed, 8 评论）** — 自建 Matrix + QwenPaw 频道经常因启动时序问题掉线，需手动重新保存。**诉求**：频道启动期重试 / 健康检测。**信号**：Channel 层可靠性是高优先级功能面。
- **[#6588](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` 把空 `batch` 占位当批处理（closed, 6 评论）** — Responses-兼容上游返回空 `batch`，QwenPaw 误入 batch 模式。**诉求**：把"非 None"判别改为"显式列表"判别，避免空对象触发批处理路径。
- **[#6601](https://github.com/agentscope-ai/QwenPaw/issues/6601) 长会话"空响应"不报错（open, 5 评论）** — 框架层 bug：上下文逼近窗口上限时某些模型空响应，QwenPaw 不抛错，会话彻底失联。**诉求**：把"空字符串响应"显式判定为可重试错误。
- **[#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) DeepSeek thinking 多轮 `reasoning_content` 丢失（closed, 5 评论）** — OpenAI formatter 跳过 ThinkingBlock 后 `retry_chat_model.py` 仅在首次触发补救，后续轮次失败。
- **[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612) QwenPaw 2.0.1 与 agentscope 2.0.4.post1 不兼容（open, 3 评论）** — Msg.content 类型与工具权限死锁，proactive/memory 子系统全面崩溃。

**背后诉求主线**：用户高度关注 **"QwenPaw + 上层 AgentScope 升级组合使用时的稳定性"** 与 **"多轮长会话不掉线"**。

---

## 5. Bug 与稳定性报告

按严重程度排序：

### 🔴 严重（功能不可用 / 数据丢失）

- **[#6612](open)](https://github.com/agentscope-ai/QwenPaw/issues/6612) QwenPaw 2.0.1 × agentscope 2.0.4.post1 不兼容** — proactive / memory-evolving 全路径崩溃（Msg.content 类型错 + 工具权限死锁）。已有 **partial fix PR [#6615](https://github.com/agentscope-ai/QwenPaw/pull/6615)**（处理 JSON 损坏 + load_agent_config 健壮性），但死锁与类型错问题未完全覆盖。
- **[#6768](open)](https://github.com/agentscope-ai/QwenPaw/issues/6768) Agent 完成多步任务后进入死循环，会话挂死数小时** — 用户消息被接收但不被处理。无对应 fix PR。

### 🟠 高（大功能模块不可靠）

- **[#6732(open)](https://github.com/agentscope-ai/QwenPaw/issues/6732) MCP 工具规律性失效** — 几小时后无法被自动调用，必须重启 Docker。无 fix PR。
- **[#6756(open)](https://github.com/agentscope-ai/QwenPaw/issues/6756) `run_tool_batch` 总是报 `No toolkit available in current context`** — ContextVar 注入时序问题，无 fix PR。
- **[#6775(open)](https://github.com/agentscope-ai/QwenPaw/issues/6775) Malwarebytes 报 Windows 桌面端含 Trojan Loader** — 用户已开始卸载。**非功能性，但会直接影响新用户增长**。无 fix PR，需要发布方澄清签名/哈希。
- **[#6726(open)](https://github.com/agentscope-ai/QwenPaw/issues/6726) 长 console 会话 20–30+ 工具调用后 400 报错** — tool 角色消息与 tool_calls 不匹配，无 fix PR。

### 🟡 中（体验降级 / 数据可恢复）

- **[#6588](closed)](https://github.com/agentscope-ai/QwenPaw/issues/6588) `spawn_subagent` 空 batch 占位 → 已有 [#6605](https://github.com/agentscope-ai/QwenPaw/pull/6605) ✅
- **[#6667(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6667) DeepSeek thinking 多轮 → 修复思路见相关 PR
- **[#6700(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6700) 超大工具输出卡死会话 → 已关闭（需要 stdout/历史分页）
- **[#6476(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6476) Matrix E2E 加密不可用 → olm/vodozemac 安装链路径已有解决
- **[#6698(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6698) v2.1.0b1 browser SDK `open()` 必崩 → 已关闭
- **[#6557(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6557) MCP 工具名以 `-` 开头触发 Kimi 400 → 命名规范化
- **[#6762(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6762) 长 shell 命令不换行（CodeMirror 缺 `lineWrapping`）→ 已关闭
- **[#6687(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6687) OpenRouter 多模态探测覆盖文档为 false → 已关闭
- **[#6731(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6731) `execute_shell_command` 传 `sandbox_config` 时 dataclass `.replace()` 崩溃
- **[#6707(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6707) thinking 上游 + 历史 tool 调用 → `reasoning_content` 中继失败
- **[#6708(closed)](https://github.com/agentscope-ai/QwenPaw/issues/6708) 上游 SSE 流内 503 事件未被识别为可重试

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 是否已有跟进 PR |
|---|---|---|
| **频道重试 / 健康检测** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ❌ 关注度高但尚无专门 PR |
| **体验优化：取消"未检测到多模态"粗暴提示** | [#6452](https://github.com/agentscope-ai/QwenPaw/issues/6452) closed | 部分关闭 |
| **会话窗口左上角标题 UI 优化 / 历史标题质量** | [#6736](https://github.com/agentscope-ai/QwenPaw/issues/6736) closed, [#6737](https://github.com/agentscope-ai/QwenPaw/issues/6737) open | UX 层面呼声密集（#6737 仍 open） |
| **WeChat 审批中文化（Approve/Deny → 中文）** | [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) open | 跟 [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) 修复同行，小工作量 |
| **MCP 可配置超时（per-client + 调用级）** | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) open | ❌ 急需，与 #6732 同源问题 |
| **历史超大工具输出截断 + 历史分页** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700) closed | 部分跟进 |
| **AG-UI 协议端点 `/protocol/agui/chat`** | 待 PR | ✅ **[#6337](https://github.com/agentscope-ai/QwenPaw/pull/6337) feat(agui): expose AG-UI protocol** OPEN 但 ready-for-human-review |
| **Provider 模型级 fallback + 冷却** | —— | ✅ **[#6659](https://github.com/agentscope-ai/QwenPaw/pull/6659) feat(providers): model fallback with cooldown** OPEN，Under Review |
| **ReMe Embedding 模型完整生命周期 + 文档** | —— | ✅ **[#6772](https://github.com/agentscope-ai/QwenPaw/pull/6772) feat(memory) + [#6771](https://github.com/agentscope-ai/QwenPaw/pull/6771) docs(memory)** 双 PR OPEN |
| **EU 其他语种（匈牙利语）** | [#6765](https://github.com/agentscope-ai/QwenPaw/issues/6765) open | i18n 路线，长期 |
| **Chrome tab 生命周期可配置** | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) open | 桌面端 Browser SDK 体验类 |
| **MCP 2026-07-28 无状态规范支持** | [#6761](https://github.com/agentscope-ai/QwenPaw/issues/6761) open | 兼容性大问题，破坏性变更，尚无 PR |

**最有可能进入下一版本的信号**：
1. **`#6337` AG-UI 端点** — 标签 `ready-for-human-review`，社区生态扩展关键一步
2. **`#6659` 模型 fallback + cooldown** — 直接缓解多个 provider 稳定性 bug（#6707、#6708）
3. **`#6771` + `#6772` Embedding 完整链路** — 让 Memory 功能真正"开箱即用"
4. **`#6724` MCP 超时** — 对应社区强呼声 + 同源 MCP 失稳问题

---

## 7. 用户反馈摘要

**真实痛点（提炼自 Issue 描述）：**

- 🇨🇳 **中文用户对每日任务的现实依赖**：[#6755](https://github.com/agentscope-ai/QwenPaw/issues/6755) 用户因星期/日期判断错乱，会议被定错到周六——**说明有生产级日程场景在用 QwenPaw**，对日期正确性敏感度高。
- 🔄 **专业运维 / 部署视角**：[#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684)、[#6612](https://github.com/agentscope-ai/QwenPaw/issues/6612)、[#6760](https://github.com/agentscope-ai/QwenPaw/issues/6760) 用户对 `qwenpaw task` CLI、Docker 升级路径、自建 Matrix 等"工程性"细节高度

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期**：2026-08-07
**数据周期**：过去 24 小时
**项目**：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日维持高强度的工程治理与问题清剿节奏：过去 24 小时共更新 **35 条 Issue**（24 条活跃 / 11 条关闭）与 **50 条 PR**（43 条待合并 / 7 条合并或关闭），**未发布新版本**。当日工作重心呈"三条战线"并行：一是**安全侧清理**（per-agent tool gating、SOP 静默丢错、cron update 静默丢弃），二是**协议与网关收口**（A2A 出站、WebSocket 保活、上下文压缩比锚定），三是**流程治理**（RFC #6808、#9496 等仍在持续修订，v0.9.0 跟踪器推进）。整体活跃度高于近一周均值，项目处于**密集 review 与合并前夜**状态。

---

## 2. 版本发布

无新版本发布。当前主线版本为 **v0.8.4**（含 #9800、#9799 等已暴露但未修复缺陷，建议下一补丁版本优先纳入）。

---

## 3. 项目进展

今日共有 **6 条重要 PR 合并或关闭**，整体推进幅度可观：

| PR | 主题 | 关联 Issue | 价值 |
|---|---|---|---|
| [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) | fix(tools): enforce agent policy in pipelines | [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | **高危安全修复**：闭合 `execute_pipeline` 的 confused deputy 漏洞，子工具现受调用方 agent 的 `ToolAccessPolicy` 约束 |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) | fix(channels): cap Telegram bot commands | [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | 修复 Telegram `setMyCommands` 在内置+技能+工具 >100 时的 `BOT_COMMANDS_TOO_MUCH` 拒绝 |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | fix(providers): remove unconditional strip_think_tags | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | 修复 compatible provider 静默吞掉 `<think>` 标签内容（MiniMax 等推理模型） |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | fix(providers): exclude Nova 2 from Bedrock prompt caching | [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | 修复 Bedrock `nova-2-lite-v1:0` 因误启用 cachePoint 报 `400 extraneous key` |
| [#9329](https://github.com/zeroclaw-labs/zeroclaw/pull/9329) | refactor(zerocode): derive slash commands from shared catalogue | [#9172](https://github.com/zeroclaw-labs/zeroclaw/issues/9172) | 统一 ZeroCode 斜杠命令来源，消除自动补全/解析/共享身份三处分散定义 |
| [#9659](https://github.com/zeroclaw-labs/zeroclaw/pull/9659) | fix(docs): disambiguate contextual protected literals | [#9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657) | 修复 mdBook 把"Signal"等通用词误判为产品名 |

**今日闭环 Issue 亮点**：#7947（confused deputy 高危）、#9172（ZeroCode 斜杠命令来源）、#657（Kimi Code provider 支持）、#1（XOR cipher 加密告警，CWE-327）。

---

## 5. 社区热点

按评论数排序的活跃议题，反映出当前最被关注的讨论：

| 排名 | Issue | 标题 | 评论 | 关注焦点 |
|---|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 19 | 0.8.0→0.8.3 治理 RFC，已 Rev.24，是项目流程演进的核心议题 |
| 2 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue tracker | 11 | 维护者对 RFC/设计 issue 的决策队列，是项目治理的中枢 |
| 3 | [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) | RFC: A2A outbound client (A2ATool) | 11 | 补齐 #3566 拆分后的出站方向，agent 主动调用外部 A2A 智能体 |
| 4 | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker config during ZeroCode migration | 11 | ZeroCode 所有权迁移中的 Todo 配置保留 |
| 5 | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance & reply contract for internal agent turns | 10 | 内部启动 turn 的来源/会话绑定/回复契约，已 Rev.2 |
| 6 | [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) | Per-model capability & context-window config | 8 | 解决 context window 误用 32k 默认、vision 误判问题 |
| 7 | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | Treat empty WhatsApp Web allowed_groups as permit-none | 7 | **安全**：空 allowlist 误放行所有群组 |

**诉求解读**：今日讨论集中于三个长期议题——**流程治理**（#6808/#9496 系列 RFC 反复修订）、**安全边界**（tool gating、allowed_groups 默认语义）、**协议完备性**（A2A 出站、上下文预算）。

---

## 6. Bug 与稳定性

按严重程度排序的当前高风险问题：

### 🔴 高危（建议尽快修复）

| Issue | 摘要 | 是否有 fix PR |
|---|---|---|
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `verifiable-intent` 的 `evaluate_constraints` 在调用方提供的 fulfillment 上校验约束，绕过凭证链验证 | ❌ 无 |
| [#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) | `execute_pipeline` 绕过 per-agent tool gating（confused deputy） | ✅ 已合并 [#9737](https://github.com/zeroclaw-labs/zeroclaw/pull/9737) |
| [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | 长生命周期 ephemeral daemon 17 小时消耗 140-177% CPU，泄漏数据库句柄 | ❌ 无（今日新开） |
| [#9800](https://github.com/zeroclaw-labs/zeroclaw/issues/9800) | ZeroCode TUI 收到 SIGTERM 后未还原终端原始模式与鼠标追踪 | ❌ 无（今日新开） |
| [#9784](https://github.com/zeroclaw-labs/zeroclaw/issues/9784) | 多步骤 SOP 中途被标记 failed 但无审计事件 | ❌ 无 |
| [#9786](https://github.com/zeroclaw-labs/zeroclaw/issues/9786) | SOP.toml 字段错误被静默丢弃，list/validate 均无报错 | ❌ 无 |
| [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `[sop] sops_dir` 文档默认路径不被 daemon 实际采用，SOP 子系统永不加载 | ❌ 无 |
| [#9770](https://github.com/zeroclaw-labs/zeroclaw/issues/9770) | `cron update` 静默丢弃对 declarative job 六个列的修改 | ❌ 无 |

### 🟡 中危

| Issue | 摘要 | 是否有 fix PR |
|---|---|---|
| [#9783](https://github.com/zeroclaw-labs/zeroclaw/issues/9783) | `SopEngine::finish_run` 接收 failure reason 但直接丢弃 | ❌ 无 |
| [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | cron 触发的 SOP 无法执行网络工作（缺 HTTP 能力） | ❌ 无 |
| [#8950](https://github.com/zeroclaw-labs/zeroclaw/issues/8950) | Telegram setMyCommands 超 100 拒绝 | ✅ [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) |
| [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | compatible provider 误删 `<think>` 内容 | ✅ [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) |
| [#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) | Bedrock Nova 2 cachePoint 错误 | ✅ [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) |

### 🟢 已修复
- [#9672](https://github.com/zeroclaw-labs/zeroclaw/issues/9672) `cron add --help` 示例全部不可用（已关闭）
- [#9657](https://github.com/zeroclaw-labs/zeroclaw/issues/9657) protected-literal 误判（已关闭）
- [#9763](https://github.com/zeroclaw-labs/zeroclaw/issues/9763) onepassword 测试在 CI 下 flaky（已关闭）

---

## 7. 功能请求与路线图信号

### 已具备 PR 的高价值功能

| 方向 | PR | 信号意义 |
|---|---|---|
| **安全策略** | [#9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776) `forbidden_paths` 支持 workspace-relative glob | 扩展沙箱策略表达力，**很可能纳入 v0.9.0**（与 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 跟踪器契合） |
| **协议扩展** | [#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) Grok Build ACP provider | 增加 xAI 系模型接入，typed provider family 设计 |
| **网络协议** | [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) Telegram 媒体组批处理 | 大幅改善相册类用户体验，XL 改动 |
| **网关保活** | [#9701](https://github.com/zeroclaw-labs/zeroclaw/pull/9701) WebSocket ping interval | 解决中间代理闲置断连问题 |
| **上下文治理** | [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) `context_compact_ratio` 按模型窗口比例压缩 | 与 [#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100) 双向呼应 |
| **插件沙箱** | [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) WASM 导出按 wall-clock 截止 | 堵住插件资源耗尽风险，XL 改动 |

### 路线图指标
- **v0.9.0 跟踪器** [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 仍在滚动，今日新增无内容但保持活跃。
- **RFC 简化** [#9496](https://github.com/zeroclaw-labs/zeroclaw/issues/9496)（7 天讨论期 / 全票通过 / 手动投票协调）反映社区对治理摩擦的明确不满。

---

## 8. 用户反馈摘要

提炼自 Issue 评论与场景描述：

- **痛点 1：静默失败无处不在** —— 多个高优 issue（#9779、#9786、#9770、#9783、#9784）集中在"SOP/cron 模块失败时不记录、不告警、不提示"，用户反复强调"hard-to-diagnose"，这是目前**用户感知最差的一类问题**。
- **痛点 2：文档与代码不一致** —— #9672 的 `cron add --help` 三个示例全部报错；#9779 的 `sops_dir` 默认值与文档不符；#9780 的 cron SOP 网络能力承诺与实现不一致。文档可信度问题累积。
- **痛点 3：Bedrock Nova 2 随机失败** —— #8720 用户（ngamradt）反映使用 `us.amazon.nova-2-lite-v1:0` 出现缓存错误，希望通过配置禁用。
- **痛点 4：Telegram 频道命令注册失败** —— #8950 用户在 macOS arm64 v0.8.2 上每次启动都看到 `BOT_COMMANDS_TOO_MUCH`，菜单从未注册成功。
- **正向反馈** —— #657 的 Kimi Code provider 支持请求被落地，#7947 的安全研究 issue 在合理时间内合并修复，说明维护者对社区报告响应高效。

---

## 9. 待处理积压

提醒维护者关注

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*