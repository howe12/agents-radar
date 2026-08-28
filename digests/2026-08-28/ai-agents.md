# OpenClaw 生态日报 2026-08-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-28 08:29 UTC

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

# OpenClaw 项目动态日报 · 2026-08-28

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时继续保持极高活跃度：累计 **1,000 条** Issue/PR 更新（Issues 500 / PRs 500），整体新开/活跃占 67%、关闭率约 30%，健康度处于"高吞吐、强治理"区间。当前仓库处于 **v2026.8.1-beta.3** 窗口期内（[Issue #125626](https://github.com/openclaw/openclaw/issues/125626) 仍有 22 条讨论），无新版本发布。今日社区焦点集中在三条主线：**Codex 集成稳定性**（多会话超时、OAuth、app-server 注册失败）、**Gateway 内存/性能治理**（heap 膨胀、并发 WS 1006、cron 静默失败）、**会话状态正确性**（steer 模式、消息丢失、上下文窗口）。社区已贡献超过 350 个待合并 PR，由 `steipete`、`joshavant`、`jesse-merhi` 等核心维护者集中批阅，反映出本周期属于"集中收尾 + 下一里程碑蓄势"阶段。

---

## 2. 版本发布

**今日无新版本发布。**

当前主线最新 beta 为 **v2026.8.1-beta.3**（commit `5831b807`），最新 main 为 `004b06b6a02f0aa5ddcee488caa9c51d38e6d017`，尚未形成 GA 版本。维护者正在多个 P0/P1 Bug 修复合并完成后推进正式发布。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR（推进能力面）

| PR | 说明 | 影响面 |
|---|---|---|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | **fix(gateway): keep conversation delivery within agent bindings** — 多 agent 场景下 conversation 工具不再能向任意目标投递，避免越权/串扰 | Discord / Slack / Telegram / iMessage / Matrix / Mattermost / Feishu（跨通道） |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **feat(security): require acknowledgement for install policy warnings** — 安装策略 `warn` 必须由操作员确认后才执行 | macOS / CLI / Gateway 安全边界 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | **fix(ui): avoid session catalog refresh storms** — 浏览器 focus/presence 事件不再触发重复全量刷新 | Web UI 可用性 |
| [#129728](https://github.com/openclaw/openclaw/pull/129728) | **fix(cli): preserve structured core send failures** — `failed` / `partial_failed` 不再被吞，调试可见 | CLI 可观测性 |
| [#106760](https://github.com/openclaw/openclaw/issues/106760)（对应修复） | Telegram 多 content block 文案不再被静默擦除 | 消息投递正确性 |
| [#103884](https://github.com/openclaw/openclaw/issues/103884)（对应修复） | Codex runtime 中 GPT-5.6 Sol 报"newer Codex required"被恢复 | Codex × 模型路由 |
| [#106914](https://github.com/openclaw/openclaw/issues/106914)（对应修复） | `models list` 在缺失 cost 字段时的 TypeError 回归已修复 | CLI 可用性 |
| [#116010](https://github.com/openclaw/openclaw/issues/116010)（对应修复） | 128k 上下文硬编码上限解除 | 会话容量 |

> 整体看，今天收口的 PR 把"**跨 agent 投递边界**"、"**安全确认**"、"**UI 刷新风暴**"三条主线推进至稳定，带动了 8 个高优先级 Issue 同步关闭，项目向前迈出约 **一整个 beta 周期内的体验层修复**。

---

## 4. 社区热点

### 🔥 评论最多的 Issues（按热度）

| # | 评论数 | 主题 | 链接 |
|---|---|---|---|
| 1 | 23 | **Per-agent cost budget enforcement at the gateway**（feature）— 防止单 agent 失控消费 | [#42475](https://github.com/openclaw/openclaw/issues/42475) |
| 2 | 22 | **v2026.8.1 beta feedback**（release validation）— 当周期最重要反馈池 | [#125626](https://github.com/openclaw/openclaw/issues/125626) |
| 3 | 21 | **Codex PreToolUse hook relay CPU 100%+ 拖垮网关** | [#91009](https://github.com/openclaw/openclaw/issues/91009) |
| 4 | 20 | **Steer mode 不再在 turn 中注入消息** | [#48003](https://github.com/openclaw/openclaw/issues/48003) |
| 5 | 18 | **Codex-backed Telegram turn/completed 不达成**（2026.5.27 回归） | [#87744](https://github.com/openclaw/openclaw/issues/87744) |
| 6 | 12 | `write`/`exec` 长会话后参数被静默丢弃 | [#53408](https://github.com/openclaw/openclaw/issues/53408) |

### 🔥 关注度/点赞高的提案

| # | 👍 | 主题 | 链接 |
|---|---|---|---|
| 1 | 5 | **Theme Customization System**（主题定制） | [#28300](https://github.com/openclaw/openclaw/issues/28300) |
| 2 | 4 | Codex Telegram turn-completed 修复 | [#87744](https://github.com/openclaw/openclaw/issues/87744) |
| 2 | 4 | GPT-5.6 Sol Codex runtime 支持 | [#103884](https://github.com/openclaw/openclaw/issues/103884)（已修） |
| 2 | 4 | Steer mode 注入修复 | [#48003](https://github.com/openclaw/openclaw/issues/48003) |

### 诉求解读

- **"我们要可观测、要可控"**：Budget 提案 + 错误中明示 provider（[#51336](https://github.com/openclaw/openclaw/issues/51336)）+ task 状态面板（[#52640](https://github.com/openclaw/openclaw/issues/52640)）三连击，指向同一类诉求：**operator 在多 agent/多 channel 拓扑中需要"看得到、限得住"**。
- **"Codex 是头号痛点集成"**：本日 Codex 相关 Issue 占据 P0/P1 的近一半（#91009/#87744/#86215/#99947/#112248/#103884），是 v2026.8.1 GA 的最大风险面。
- **"CLI/TUI 体验还需要补课"**：滑动跳屏（[#44130](https://github.com/openclaw/openclaw/issues/44130) 👍3）、Sessions 排序（[#51028](https://github.com/openclaw/openclaw/issues/51028)）、Session 标签（[#55249](https://github.com/openclaw/openclaw/issues/55249)）构成体验层呼声。

---

## 5. Bug 与稳定性

### P0（崩溃/系统级）

| # | 严重程度 | 摘要 | 是否已有 fix PR |
|---|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 🐚 platinum hermit · crash-loop | Codex `PreToolUse` 钩子派生的 `openclaw-hooks relay` 进程吃满 CPU，导致 Gateway RPC 长时间 stall | 暂无（`linked-pr-open` 标记维护者待指派）|

### P1（功能失效/数据丢失）— 严重程度降序

| # | 摘要 | fix PR |
|---|---|---|
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | `messages.queue.mode: "steer"` 不能在 turn 中插队 | 待定（`needs-product-decision`）|
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex + Telegram turn 不达终态（2026.5.27 回归）| 暂无 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) | Codex OAuth 401 可持续数小时未告警、无 profile 切换 | 暂无 |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway 静默内存从 558MB 涨到 1073MB+，cron 静默失败 | [#131653](https://github.com/openclaw/openclaw/pull/131653)（`fix(gateway): reduce memory pressure with large session histories`，open · 🦞 · XL） |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 在 Gateway 重启后未自动重握手，`recovered=1` 误导 | 暂无（待 PR）|
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长会话后 `write`/`exec` 参数全空 | 暂无 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 嵌入 runner 大参数工具调用超时断连 | 暂无 |
| [#86215](https://github.com/openclaw/openclaw/issues/86215) / [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DM 在 Gateway 重启后静默丢失（多账户 socket mode）| 暂无 |
| [#99947](https://github.com/openclaw/openclaw/issues/99947) | codex harness 镜像 session-history 失败、子会话/failover 失稳 | 暂无 |
| [#100941](https://github.com/openclaw/openclaw/issues/100941) | 并发工具扇出导致 in-process WS 1006，误报 Gateway 崩溃 | 暂无 |
| [#118185](https://github.com/openclaw/openclaw/issues/118185) | 单 turn 由两个写者写入 transcript，语义不一致 | [#125838](https://github.com/openclaw/openclaw/issues/125838)（已有 PR #131023 进行中）|
| [#53008](https://github.com/openclaw/openclaw/issues/53008) | memoryFlush 阻塞主 lane 10+ 分钟 | 暂无 |
| [#41165](https://github.com/openclaw/openclaw/openclaw/issues/41165) | Telegram DM 漏到 `agent:main:main` | 暂无（`linked-pr-open`）|
| [#106914](https://github.com/openclaw/openclaw/issues/106914) | `models list` TypeError（sonnet-5 缺 cost）| **已修 ✅** |
| [#103884](https://github.com/openclaw/openclaw/issues/103884) | GPT-5.6 Sol 误报需要新 Codex | **已修 ✅** |
| [#125344](https://github.com/openclaw/openclaw/issues/125344) | memory-core embedding workers 无 idle TTL 漏进程，挤垮 cgroup | 暂无（`needs-maintainer-review`）|
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | "next-turn runtime context" 偶尔作为独立 turn 发出 | 暂无 |
| [#112248](https://github.com/openclaw/openclaw/issues/112248) | `@openclaw/codex` 启动崩溃 → `/codex` 静默 no-op | **已修 ✅** |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DM 在 Gateway 重启后大规模静默丢失（19 账户） | 暂无，新发（紧急）|

### 今日报告但已修复的回归

`#106914`（CLI 启动崩溃）、`#103884`（模型路由）、`#106760`（Telegram 多 block）、`#112248`（codex 插件注册）、`#116010`（128k 上限）—— 五个高频痛点在 24h 内被消化，修复速率与生产事故率基本对齐。

---

## 6. 功能请求与路线图信号

### 即将进入下一版本的强信号（已有对应 PR）

| 提案 | 关联 PR | 信号 |
|---|---|---|
| [#52640](https://github.com/openclaw/openclaw/issues/52640) 持久化任务状态面板 | 暂无，但 Discord 长 turn 体验已被官方纳入"先做 Discord、再做抽象" | 🟡 路线图 |
| [#42475](https://github.com/openclaw/openclaw/issues/42475) Gateway 级单 agent 成本预算 | 暂无（`needs-product-decision`） | 🟡 RFC |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) 多 Slot Memory 架构 | 暂无（"多 provider 协同"是 2026 H2 公开愿景） | 🟡 |
| [#71058](https://github.com/openclaw/openclaw/issues/71058) 单 Gateway 多 Teams bot | 暂无 | 🟡 |
| [#88154](https://github.com/openclaw/openclaw/issues/88154) Slack Modal 支持 | 暂无（await maintainer）| 🟡 |
| [#28300](https://github.com/openclaw/openclaw/issues/28300) 主题自定义系统（👍5）| 暂无，但 Control UI 主题正则批量小修持续提交（如 [#131483](https://github.com/openclaw/openclaw/pull/131483)）| 🟢 |

### 仍在 RFC / 设计阶段

- [#71736](https://github.com/openclaw/openclaw/issues/71736) Control

---

## 横向生态对比

# 2026-08-28 个人 AI 助手/自主智能体开源生态横向对比分析

## 一、生态全景

个人 AI 助手与自主智能体开源生态已整体进入**"架构收敛期"**：13 个观察项目中，8 个仍有显著迭代（PicoClaw 进入维持期，NanoClaw/NullClaw/TinyClaw/ZeptoClaw 完全静默）。主流项目的开发重心已从"功能堆叠"转向**记忆持久化契约、跨通道语义、Provider/插件协议、多 Agent 编排边界**等基础设施层议题；社区共性诉求集中在"**可观测、可控、安全可靠**"三条主线。值得注意的是，**OpenClaw 单仓日吞吐（1000 条 Issues/PRs 更新）已接近第二梯队 5-10 倍量级**，生态头部效应显著加剧。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 今日 Release | Issue 关闭率 | PR 合并/关闭率 | 健康度 | 阶段定位 |
|------|-----------|---------|-------------|------------|---------------|--------|----------|
| **OpenClaw** | 500 | 500 | 无（v2026.8.1-beta.3 收口中） | ~30% | ~30% | 🟢 极强吞吐 + 强治理 | 头部·收尾/蓄势 |
| **CoPaw** | 31 | 50 | 无（v2.2.0 准备中） | ~52% | ~46% | 🟢 高强度迭代 | v2.2.0 冲刺 |
| **ZeroClaw** | 21 | 50 | 无（v0.8.5 周稳定线 8/30 截止） | ~10% | ~2% | 🟡 架构密集讨论 | RFC 评审期 |
| **IronClaw** | 33 | 48 | 无 | ~24% | ~65% | 🟢 高位迭代 | 架构 + 记忆层 |
| **Hermes Agent** | 47 | 42 | ✅ **v0.20.6 (~525 PRs 滚动)** | ~6% | ~19% | 🟢 发布稳定 | 密集合并 |
| **LobsterAI** | 7 | 12 | ✅ **2026.8.26** | ~29% | 100% | 🟢 稳健迭代 | 安装器/Renderer |
| **NanoBot** | 1 | 25 | 无 | 0% | ~40% | 🟢 架构治理期 | 重构稳健 |
| **Moltis** | 0 | 2 | ✅ **20260827.01** | — | 100% | 🟢 小而稳 | 质量巩固 |
| **PicoClaw** | 3 | 7 | 无 | 0% | ~14%（5 条 dependabot 被 stale 关闭） | 🔴 低活跃维持 | 边缘风险 |
| **NanoClaw** | — | — | — | — | — | ⚪ 无数据 | — |
| **TinyClaw** | — | — | — | — | — | ⚪ 无活动 | — |
| **NullClaw** | — | — | — | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | — | — | — | ⚪ 无活动 | — |

**关键观察**：
- 头部 8 个活跃项目中有 **5 个今日无新版本发布**，均处于"密集合入 + 蓄势下一里程碑"状态。
- 真正发布的有 **Hermes（滚动打包）/LobsterAI（installer 修复）/Moltis（安全加固）**，共同特征是**问题驱动而非功能驱动**。
- **PicoClaw 的健康度恶化最显著**：5 条 dependabot PR 被 stale 批量关闭，社区贡献仅 1 条（PR #3347），anthropic-sdk-go/aws-sdk-go-v2 等核心依赖版本滞后。

---

## 三、OpenClaw 在生态中的定位

### 规模优势（绝对量级）
- **日吞吐 ≈ 第二梯队的 10 倍**：500+500 vs CoPaw 31+50 / ZeroClaw 21+50 / IronClaw 33+48
- **跨通道覆盖最广**：Discord / Slack / Telegram / iMessage / Matrix / Mattermost / Feishu（7 个通道）
- **模型/Provider 接入最深**：Codex 集成稳定性已成为 v2026.8.1 GA 的最大风险面（#91009/#87744/#86215/#99947/#112248/#103884）

### 技术路线差异
| 维度 | OpenClaw | Hermes | IronClaw | CoPaw | ZeroClaw |
|------|----------|--------|----------|-------|----------|
| 架构主线 | 多 agent × 多通道网关 | Skills 生态 × 浏览器自主 | Reborn 记忆层 × WASM 插件 | 多租户 × 多端（Desktop/移动） | WASM 运行时 × Wire Protocol |
| 治理特征 | 强中央治理（核心维护者批阅） | 创始人驱动（Teknium 本人） | 架构 epic 拆解（#7276 → 7 子任务） | 头部产品预告 + 文档先行 | RFC Rev. 多轮修订 + AI 辅助起草 |
| 主要痛点 | Codex 集成稳定性 | Desktop macOS 启动 | Gmail 通道未投影 | Desktop 启动慢（247.5s） | Channel 记忆与并发模型 |

### 社区规模对比
OpenClaw 的 issue 编号已突破 **#131000+**，单日 1000 条更新意味着日活维护者数量**远超其他项目**。相比之下，CoPaw 编号 #7300+、ZeroClaw 编号 #10400+、IronClaw 编号 #7900+——**OpenClaw 生态沉淀量约为第二梯队的 15-20 倍**。这意味着它承担着"行业事实标准"的角色，其架构选择（如 per-agent budget #42475、多 Slot memory #60572）将影响整个生态方向。

---

## 四、共同关注的技术方向

### 1. **记忆持久化与跨会话学习**（涉及 7/8 活跃项目）
| 项目 | 具体诉求 |
|------|---------|
| OpenClaw | 多 Slot Memory (#60572)、memoryFlush 阻塞主 lane (#53008)、embedding workers 漏进程 (#125344) |
| NanoBot | 可插拔召回后端 (#5570)、默认显式召回 (#5571)、consolidationRatio 固化 (#5575) |
| IronClaw | Reborn 自学习 epic (#7276 → 7 子任务)、content hash 防并发覆盖 (#7907) |
| Hermes | Project-scoped MEMORY.md (#33638)、curator rollback 完整性 (#96962) |
| ZeroClaw | Runtime-owned 会话契约 (#9487)、ZeroCode ACP 转录持久化分页 (#10380) |
| CoPaw | memory_manager 零停机重载 (#7364)、ReMe 0.4.1.9 集成 (#7133) |
| LobsterAI | memory-core 嵌入 runner 大参数工具调用超时 (#53540，OpenClaw 报告同源) |

**共识信号**：记忆层是整个生态**最大未解问题**，尚未形成统一方案（多 Slot / pluggable / auto-promote / hash-protected 路径各异）。

### 2. **多通道语义一致性**（涉及 6/8 活跃项目）
- **Telegram**：OpenClaw 多 content block 静默擦除 (#106760)、IronClaw `/start` 配对提示错乱 (#7956)、ZeroClaw 线程切碎对话记忆 (#10237)
- **Slack**：OpenClaw DM 重启后丢失 19 账户 (#131150)、IronClaw `thread_broadcast` 门禁解除 (#7941)
- **企业微信/飞书**：Hermes 区分稳定 ID vs 内容回退 (#85824)、NanoBot 飞书流式卡片 (#5567)
- **IRC**：PicoClaw 长消息拆分 (#3287)

**共识信号**：用户对"**消息颗粒度与多轮上下文完整性**"的需求远高于当前实现水平。

### 3. **OAuth/MCP 认证可靠性**（涉及 4/8 活跃项目）
- OpenClaw Codex OAuth 401 持续数小时无 profile 切换 (#86215)
- NanoBot MCP OAuth token 过期不刷新 (#5573)、凭据保护 (#5338)
- IronClaw MCP OAuth 缺 `resource` 参数 (#7940)、CIMD vs DCR 优先级
- Hermes Skills 索引 29.8h 未更新（自动化巡检失灵）

**共识信号**：MCP 生态的**认证层可靠性**已成为新晋基础设施风险面。

### 4. **上下文窗口与压缩**（涉及 4/8 活跃项目）
- OpenClaw 128k 硬编码上限解除 (#116010)
- IronClaw Gmail 24 KiB MIME 头导致 19.7s 推理 (#7891)、Pi-style 压缩屏障 (#7824)
- ZeroClaw 压缩预算锚定模型窗口比例 (#9535)
- Hermes headroom-ai 工具输出压缩集成 (#39691, 17 👍)

**共识信号**：随着上下文从 128k 走向 1M+，**"按需投影 + 压缩屏障"**正在取代简单截断。

### 5. **多 Agent 编排边界**（涉及 5/8 活跃项目）
- OpenClaw per-agent cost budget (#42475, 23 评论)、conversation delivery bindings (#126424)
- NanoBot per-spawn model presets (#5561)
- Hermes Kanban dispatcher 授权闸门 (#82689)
- PicoClaw delegate/spawn/subagent 动态模型覆盖 (#3330)
- CoPaw TaskTracker 统一并发语义 (#7309)、multi-agent 对话历史为空 (#2814)

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-08-28

> 数据源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
> 报告周期：过去 24 小时（截至 2026-08-28）

---

## 1. 今日速览

NanoBot 今日继续保持**高活跃度的内部重构期**：24 小时内共产生 **25 条 PR 更新**与 **1 条新 Issue**，PR 合并/关闭率达到 **40%（10/25）**，表明社区评审与维护者合入节奏稳定。议题与 PR 的主题高度集中在 **Agent/Memory 重构、TUI 体验优化、MCP OAuth 健壮性**三个方向，其中核心贡献者 `chengyongru` 单人贡献了多条 P1/P2 级别的改动，呈现出以**架构治理为主线**的开发状态。无新版本发布，预计短期内仍处于功能重构与缺陷修补的迭代周期。

---

## 2. 版本发布

**今日无新版本发布。** 鉴于合并的 PR 中包含多项 `refactor`（如 #5574、#5569、#5575）以及 `p1` 级别的行为变更（如 #5572 默认并发策略调整），维护者可能正在蓄力一个整合性的小版本。建议关注后续 1–2 天是否有版本号发布。

---

## 3. 项目进展（今日已合并/关闭的重要 PR）

| PR | 标题 | 优先级 | 影响 |
|---|---|---|---|
| [#5572](https://github.com/HKUDS/nanobot/pull/5572) | fix(agent): default request concurrency to unlimited | **P1** | 移除 `NANOBOT_MAX_CONCURRENT_REQUESTS` 未设置时的隐式上限，WebUI 多用户场景吞吐能力提升 |
| [#5574](https://github.com/HKUDS/nanobot/pull/5574) | refactor(providers): make fallback attempts explicit | P2 | 引入不可变 `ProviderAttempt`，fallback 链路变得可追踪、可单测 |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | refactor(agent): extract tool execution boundary | P2 | 把工具调用准备/执行/批处理/错误观察从 `AgentRunner` 抽出，`AgentRunner` 回归 ReAct 主循环本质 |
| [#5575](https://github.com/HKUDS/nanobot/pull/5575) | refactor(memory): remove consolidation ratio | P2 | 移除 `consolidationRatio` 配置，固化"每个 user turn 回溯归档 8 条历史"的确定性策略 |
| [#5576](https://github.com/HKUDS/nanobot/pull/5576) | fix(tui): preserve full UI in Herdr panes | P2 | Herdr 面板回归与独立终端一致的 TUI 布局（注：已被 #5577 替代） |
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | fix(providers): mark stripped images as unviewable | bug | 关闭一条长达 **2 个月以上的旧 Issue**（#4345），修复剥离图片时可能泄露路径的问题 |

**整体判断**：今日合并的 PR 让项目的 AgentRunner、Memory、Provider 三大子系统都向"职责更清晰、可测试性更强"的方向迈进一步，属于典型的**架构债务清理日**。

---

## 4. 社区热点（讨论最活跃/最值得关注）

| 条目 | 类型 | 标题 | 评论数 | 关注度 |
|---|---|---|---|---|
| [#5567](https://github.com/HKUDS/nanobot/issues/5567) | Issue | 飞书渠道应整合多轮回复为单条流式卡片消息 | **2** ⭐ | ⭐⭐⭐ |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | PR | feat(spawn): per-spawn model presets | 讨论继承自 #4291/#4231 | ⭐⭐⭐ |

**诉求分析**：
- **#5567** 反映了多渠道 Agent 在 IM 上的**消息颗粒度问题**——工具提示、进度更新、最终回复被拆成多条消息，用户体验割裂。提议借力飞书 CardKit 流式卡片能力做"一条用户消息 → 一条 Agent 消息"的对应。该议题在 24 小时内即收获 2 条评论，处于活跃讨论期。
- **#5561** 是热度持续累积的 **#4231/#4291** 的替代实现，引入 `spawnPresets` 白名单机制，作者明确致谢了此前评审中 @aiguozhi123456 的设计方向与 @chengyongru 的评审分析，体现了社区**设计共识的形成过程**。

---

## 5. Bug 与稳定性

按严重程度（以 PR 标签的 priority 与影响面为参考）排序：

### 🔴 高优先级（涉及稳定性/平台兼容）
- **[#5483](https://github.com/HKUDS/nanobot/pull/5483)** [OPEN] `fix(session): prevent deleted sessions from being recreated by delayed messages`
  会话被删除后，跨会话延迟投递仍可能"复活"该会话，属回归性 bug。**已有 fix PR**。

- **[#5382](https://github.com/HKUDS/nanobot/pull/5382)** [OPEN] `fix(session): retry os.replace() on transient Windows PermissionError`
  Windows 平台下 `os.replace()` 偶发 `[WinError 5] Access is denied`，已被确认在 gateway 日志中**触发过两次网关级崩溃**。**已有 fix PR**，标注 `conflict` 待解决。

### 🟡 中优先级（功能失效/数据安全）
- **[#5573](https://github.com/HKUDS/nanobot/pull/5573)** [OPEN] `fix(mcp): refresh expired OAuth tokens automatically`
  MCP OAuth token 过期不会自动刷新，跨重启失效。**已有 fix PR**。

- **[#5338](https://github.com/HKUDS/nanobot/pull/5338)** [OPEN] `fix(mcp): preserve credentials when OAuth store read fails`
  存储读失败被当作空存储，可能**覆盖其他服务器的凭据**，属数据安全级别隐患。**已有 fix PR**。

- **[#5339](https://github.com/HKUDS/nanobot/pull/5339)** [OPEN] `fix(webui): reject discarded temporary chat messages`
  用户在请求中途"放弃临时聊天"时，请求仍可能被恢复并持久化为普通聊天。**已有 fix PR**。

### 🟢 低优先级（UI/可观测性）
- **[#5504](https://github.com/HKUDS/nanobot/pull/5504)** [OPEN] `fix(ui): surface model retry status (NAN-34)`
  UI 层不展示模型重试状态/倒计时，用户对"为何慢"无感知。**已有 fix PR**。

**整体看**：所有今日活跃的 Bug 都有对应的 fix PR 在排队中，**无未跟进的高危 Bug**。

---

## 6. 功能请求与路线图信号

**新功能需求**：
- **[#5567 Issue](https://github.com/HKUDS/nanobot/issues/5567)**：飞书渠道统一流式卡片消息体验 — 这是首次明确针对"中文 IM 渠道 UX 一致性"提出的诉求，**可能被纳入下一版本**。
- **[#5570](https://github.com/HKUDS/nanobot/pull/5570) feat(memory): add pluggable recall backend** + **[#5571](https://github.com/HKUDS/nanobot/pull/5571) feat(memory): require explicit recall by default**：两个 PR 共同构成"可插拔记忆后端 + 默认显式召回"的组合拳，#5571 为 **P1** 级别，说明 Memory 架构升级是近期路线图重点。
- **[#5537](https://github.com/HKUDS/nanobot/pull/5537) feat(my): persist session focus across turns**：把 `focus` 作为跨轮次甚至跨重启的短连续性线索，回应了 Issue #3292 中关于"agent 上下文连续性"的用户诉求。
- **[#5561](https://github.com/HKUDS/nanobot/pull/5561) feat(spawn): per-spawn model presets**：允许对子 agent 指定模型预设，满足**多模型协同工作流**的高级用户需求。

**路线图信号**：可以预见下个版本聚焦 **Memory 显式召回 + 多渠道 UX 统一 + Spawn 模型预设**三大主题。

---

## 7. 用户反馈摘要

由于今日仅 #5567 一条 Issue 拥有真实评论（2 条），用户痛点高度集中：

> **核心痛点**：多轮 Agent 回复在 IM 渠道被拆散为多条消息，破坏了"一问一答"的心智模型。

**典型场景**：用户在飞书发送一条请求后，看到 agent 接连发送「正在调用工具…」、「思考中…」、「最终结果…」三条独立消息，体感非常碎片化，尤其在移动端体验更差。

**用户期望**：保持 `用户发 1 条 → Agent 回 1 条` 的对应关系，借助 CardKit 流式卡片能力做**单条消息内的内容渐进更新**。

> 配套的 [#5504](https://github.com/HKUDS/nanobot/pull/5504) 也在解决类似的"透明度"诉求——重试状态在原位更新而非新增消息，方向一致。

---

## 8. 待处理积压（提醒维护者关注）

| 条目 | 类型 | 创建日期 | 距今 | 备注 |
|---|---|---|---|---|
| [#4346](https://github.com/HKUDS/nanobot/pull/4346) | PR(已关闭) | 2026-06-15 | ~74 天 | ✅ **今日关闭**，是积压清理的正面信号 |
| [#5382](https://github.com/HKUDS/nanobot/pull/5382) | PR | 2026-08-13 | 15 天 | 标记 `conflict`，需解决合并冲突后再评审 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR | 2026-08-13 | 15 天 | 标记 `conflict`，memory consolidation 相关 |
| [#5396](https://github.com/HKUDS/nanobot/pull/5396) | PR | 2026-08-14 | 14 天 | 标记 `conflict`，Pyright 抑制收敛工作 |
| [#5338](https://github.com/HKUDS/nanobot/pull/5338) | PR | 2026-08-11 | 17 天 | **安全相关**（凭据保护），建议优先评审 |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) | PR | 2026-08-11 | 17 天 | WebUI 临时聊天策略，建议优先评审 |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | PR | 2026-08-24 | 4 天 | 关联 NAN-34 项目内部编号，可能有 SLA 期望 |

**积压健康度评估**：
- **超长积压（>30 天）几乎被清零**，#4346 长达 74 天的 PR 今日关闭是显著的治理成果。
- **3 条 conflict PR** 仍是合并阻力，建议维护者在下一轮集中清理。
- **#5338**（凭据保护）虽未贴 `p1` 标签，但属于**安全敏感**，建议尽快评审。

---

## 📊 健康度总览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h 新增 Issue | 1 | 🟢 正常 |
| 24h PR 总数 | 25 | 🟢 高 |
| PR 关闭/合并率 | 40% | 🟢 良好 |
| 长期积压 PR（>30 天） | 0（关闭 #4346 后） | 🟢 优秀 |
| P1 级别 PR | 2 条开放（#5571、#5504 关联 NAN-34） | 🟡 待评审 |
| 安全相关未合并 PR | 1 条（#5338） | 🟡 建议关注 |
| 新版本发布 | 0 | 🟢 重构期符合预期 |
| 核心贡献者集中度 | chengyongru 一人多线作战 | 🟡 **巴士因子风险**，建议引入更多评审者 |

**结论**：NanoBot 项目当前处于**架构治理驱动的稳健迭代期**，活跃度与代码健康度均处于较好水平，建议维护者关注核心贡献者单人负荷，并加速评审冲突 PR 与安全相关 PR。

---

*报告生成时间：2026-08-28 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-08-28**
**数据周期：过去 24 小时**
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日保持高强度开发节奏：v0.20.6 (v2026.8.27) 正式发布，将自 v0.20.5 以来的 ~525 个 PR 滚动打包为稳定版本，供 Docker 镜像、托管部署与全新安装使用。社区端 Issues/PRs 合计 100 条更新，活跃度处于高位；当日新增/活跃 Issues 47 条、关闭 3 条；PR 端 42 条待合并、8 条已合/关闭。讨论热度集中在 Skills 索引健康度、Mistral 提供商接入、压缩路径 bug，以及来自 Teknium 本人提交的"模型盲 vault 自动登录"系列 PR。整体项目处于"密集合并 + 补丁发布 + 重大新机制引入"三轨并行的健康状态。

---

## 2. 版本发布

### 🏷️ Hermes Agent v0.20.6 (v2026.8.27)

- **发布日期**：2026-08-27
- **版本类型**：Patch（累积合并版）
- **核心说明**：将自 v0.20.5 以来约 **525 个 PR** 滚动合并打包为稳定 tag，专为下游消费者（Docker 镜像、托管部署、新装环境）准备
- **破坏性变更**：无（patch 版本）
- **迁移注意事项**：下游基于 commit hash 锁定 v0.20.5 的部署可平滑升级至 v0.20.6；建议 Docker 用户拉取 `v2026.8.27` 标签以获得一致快照
- **Release 链接**：[GitHub Release](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.27)

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响面 |
|----|------|--------|
| [#85824](https://github.com/NousResearch/hermes-agent/pull/85824) | fix(weixin): 区分稳定消息 ID 去重与内容回退去重（5 秒重投递窗口） | 企业微信消息投递体验 |
| [#85823](https://github.com/NousResearch/hermes-agent/pull/85823) | fix(gateway): 保留 provider request_overrides | Gateway 跨 provider 配置不再丢失 `extra_body.tools` 等元数据 |
| [#85822](https://github.com/NousResearch/hermes-agent/pull/85822) | fix(codex): 暴露无 phase 的 interim 进度 | Codex/Responses 兼容 provider 流式输出 |
| [#96250](https://github.com/NousResearch/hermes-agent/pull/96250) | 集成 governed worker / worktree / PR 维护升级 | 跨 5+ 组件的大范围治理 |

**进展评估**：今日落地的 PR 多为 Gateway 边界与消息投递一致性修复，配合 v0.20.6 的滚动打包发布，项目稳定性向前迈进了实质性一步。Teknium 本人今日连开两个里程碑级 PR（[#96988](https://github.com/NousResearch/hermes-agent/pull/96988) 模型盲 vault 自动登录、[#96984](https://github.com/NousResearch/hermes-agent/pull/96984) 交易条款绑定审批），将"浏览器自主操作安全边界"提升到新的设计高度。

---

## 4. 社区热点

###  最热 Issue：Skills 索引陈旧
- **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)** — 110 条评论，`degraded`
- Skills Hub `/docs/skills` 依赖 `/docs/api/skills-index.json`，索引已 **29.8 小时**未更新（阈值 26h）
- 由自动化巡检 sweeper 触发，反映出 `skills-index.yml` (cron 6/18 UTC) 与 `deploy-site.yml` 的协同失效

### 👍 高赞 Feature 请求
- **[#20859](https://github.com/NousResearch/hermes-agent/issues/20859)** — **27 👍 / 12 评论**：Mistral 作为 LLM provider 的原生支持；用户论据是 Mistral 用户基数大于部分已支持 provider，且其语音模型已部分集成
- **[#39691](https://github.com/NousResearch/hermes-agent/issues/39691)** — **17 👍 / 12 评论**：集成 headroom-ai 做工具输出压缩，解决 conversation-level 压缩开销大的问题

###  高讨论度 RFC
- **[#77111](https://github.com/NousResearch/hermes-agent/issues/77111)** — 9 评论：4 个 duplex-voice PR 同时竞争合并，触发 `AGENTS.md` Footprint Ladder 规则；呼吁引入 `RealtimeVoiceProvider` ABC 抽象
- **[#82689](https://github.com/NousResearch/hermes-agent/issues/82689)** — 4 评论：Kanban dispatcher 在 ~1s 内执行有副作用任务而无授权闸门，涉及 ADB/UI 自动化删除等高风险操作

**诉求总结**：社区当前最强烈的诉求集中在 **新 provider 接入**、**更高效的压缩路径**、以及 **Skills/语音/Kanban 等架构层面的接口抽象**，呈现典型的"功能广度扩张 → 架构抽象收敛"周期。

---

## 5. Bug 与稳定性（按严重程度排列）

### P1（紧急）
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#60323](https://github.com/NousResearch/hermes-agent/issues/60323) | Desktop 本地后端在 macOS 漏报 `HERMES_BACKEND_READY` 90s 超时 | 待跟进 |
| [#96309](https://github.com/NousResearch/hermes-agent/issues/96309) | macOS (arm64) `hermes update` 后 Desktop 启动卡 90s，`SIGTERM` 后端 | 待跟进 |
| [#96775](https://github.com/NousResearch/hermes-agent/issues/96775) | 通用压缩路径：中断的 preflight 压缩无持久退避，下轮仍撞同一策略 | 待跟进 |
| [#96962](https://github.com/NousResearch/hermes-agent/issues/96962) | curator rollback 仅恢复 `SKILL.md`，不恢复 `references/` `scripts/` 配套文件 | 待跟进 |

### P2（重要）
| Issue | 描述 | Fix PR |
|-------|------|--------|
| [#96924](https://github.com/NousResearch/hermes-agent/issues/96924) | 跨 provider fallback 后视觉模型仍在 stale provider 上 | 待跟进 |
| [#96965](https://github.com/NousResearch/hermes-agent/issues/96965) | 交互式 CLI 把未解析的自定义 provider 别名发给后端 | 待跟进 |
| [#96918](https://github.com/NousResearch/hermes-agent/issues/96918) | iOS WebKit Web dashboard 点击 session 无反应 | 待跟进 |
| [#83992](https://github.com/NousResearch/hermes-agent/issues/83992) | Python 3.14 下 `DaemonThreadPoolExecutor._adjust_thread_count` 引用已移除属性 | 待跟进 |
| [#72082](https://github.com/NousResearch/hermes-agent/issues/72082) | 后台自检 review 在只读 scope turn 中写 skill 库 | 待跟进 |

### P3（一般）
- [#96975](https://github.com/NousResearch/hermes-agent/issues/96975) macOS 缺 `/bin/true` → 已有修复 [#96986](https://github.com/NousResearch/hermes-agent/pull/96986)
- [#96800](https://github.com/NousResearch/hermes-agent/issues/96800) AMD RDNA4 + Wayland 下 Electron 渲染卡顿（可用 `ELECTRON_EXTRA_LAUNCH_ARGS` 绕过）
- [#96976](https://github.com/NousResearch/hermes-agent/issues/96976) `hermes doctor` 把健康的 WAL 与 PATH 解析 launcher 误报
- [#79001](https://github.com/NousResearch/hermes-agent/issues/79001) Desktop 启动 404 已删除会话（renderer localStorage 未清理）

**稳定性观察**：今日 P1 Bug 集中在 **Desktop macOS 启动路径** 与 **压缩/curator 状态恢复**，呈现"会话状态生命周期"类问题的集中爆发；其中 [#96989](https://github.com/NousResearch/hermes-agent/pull/96989)（Windows 启动崩溃）已有修复 PR 待合并。

---

## 6. 功能请求与路线图信号

| 信号强度 | 请求 | 关联 PR |
|----------|------|---------|
| 🟢 强 | **Vault 模型盲浏览器登录**：agent 从本地加密 vault 拿凭证，模型看不到密码 | [#96988](https://github.com/NousResearch/hermes-agent/pull/96988) ⭐ 核心提交：Teknium 本人 |
| 🟢 强 | **交易条款绑定审批语义**：避免 YOLO 结账与重复打扰 | [#96984](https://github.com/NousResearch/hermes-agent/pull/96984) 配套文档 PR |
| 🟢 强 | **Mistral provider 原生支持** | 无；27 👍 |
| 🟡 中 | **headroom-ai 工具输出压缩** | 无；17 👍 |
| 🟡 中 | **WhatsApp 群聊观察未 @ 消息**（对齐 Telegram） | 无 |
| 🟡 中 | **Project-scoped MEMORY.md**（按 cwd/项目过滤） | 无 |
| 🟡 中 | **Polish (pl) 语言包**（完整 3450 行） | [#96937](https://github.com/NousResearch/hermes-agent/issues/96937)（翻译已就绪） |
| 🟡 中 | **首次启动 telemetry consent 流程** | [#69526](https://github.com/NousResearch/hermes-agent/issues/69526) |
|  弱 | **HA watch_entities 转发到其他 messaging platform** | 无 |
| 🔵 弱 | **MCP 目录新增 Magnific** | 无 |

**路线图预测**：Teknium 今日连发的 [#96988](https://github.com/NousResearch/hermes-agent/pull/96988) + [#96984](https://github.com/NousResearch/hermes-agent/pull/96984) + Issues [#96970](https://github.com/NousResearch/hermes-agent/issues/96970)/[#96971](https://github.com/NousResearch/hermes-agent/issues/96971)（已 CLOSED）构成清晰的"OpenInstinct 模型盲 vault 自动填表 → Hermes 浏览器/计算使用流程"移植路线，下一 minor 版本很可能把 vault-backed 模型盲凭证作为头牌功能。Mistral provider 与 headroom-ai 也具备进入 v0.20.7 的高概率。

---

## 7. 用户反馈摘要

**核心痛点**：
1. **桌面端 macOS 启动脆弱**：多个独立用户报告本地后端启动 90s 超时（P1 集中爆发），社区明显对 Desktop 的 macOS 体验不满
2. **中国网络环境**：Issue [#46839](https://github.com/NousResearch/hermes-agent/issues/96839)（中文，已关闭）反映国内 GitHub 访问受限导致桌面端安装反复失败，建议安装程序支持虚拟网卡代理或程序内分流
3. **Skills 索引失灵**：用户感知 Skills Hub 文档陈旧，间接影响技能可发现性
4. **Kanban 自治失控**：dispatcher 1 秒内执行有副作用任务，缺乏审计/授权闸门（涉及 ADB 控制手机的真实危险场景）
5. **CLI 别名解析**：自定义 provider 别名未规范化为真实模型名即发往后端，被拒绝

**积极反馈/满意点**：
- v0.20.6 滚动合并 ~525 PR 印证社区对"稳定可消费 release"的高度需求
- Teknium 本人快速回应 OpenInstinct 灵感并落地 Phase 1 移植，社区对 vault 安全机制反响正面
- 波兰语翻译完整度（3450 行 / 41 章节）显示 i18n 社区贡献积极性

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 类型 | 静默天数 | 备注 |
|------|------|----------|------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 自动化巡检 bug | ~10 | 评论 110 但实质进展缓慢，Skills 索引重建需手动排查 |
| [#20859](https://github.com/NousResearch/hermes-agent/issues/20859) | Feature 请求 | ~30 | 27 👍，Mistral 提供商接入长期未被认领 |
| [#68499](https://github.com/NousResearch/hermes-agent/pull/68499) | Bug PR（delegation 生命周期） | ~38 | 跨 TUI/Desktop/Gateway，影响面广，标签含 `blast-broad`，应优先合并 |
| [#70859](https://github.com/NousResearch/hermes-agent/pull/70859) | Bug PR（重启投递重试） | ~35 | 重建在 main 最新提交上，建议复审 |
| [#39691](https://github.com/NousResearch/hermes-agent/issues/39691) | Feature 请求 | ~24 | 17 👍，headroom-ai 集成已具备技术共识 |
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | Feature 请求（project-scoped memory） | ~62 | 长期被标 `needs-decision` |
| [#38710](https://github.com/NousResearch/hermes-agent/issues/38710) | Feature 请求（WhatsApp 群消息观察） | ~55 | 与 Telegram 已实现功能对齐，期望值高 |

**建议**：维护者可优先为 #68499（delegation 生命周期）与 #66616（Skills 索引）分配 owner；这两条长期积压对项目健康度信号影响最大。

---

*报告生成时间：2026-08-28 | 数据来源：GitHub Issues & Pull Requests API*
*本报告仅基于公开数据进行分析，不构成投资或技术建议。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-28**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**低位**水平。过去 24 小时内共有 10 条记录更新（3 条 Issue + 7 条 PR），但绝大部分为自动化操作：6 条 PR 均为 dependabot 提交的依赖升级，其中 5 条因超过 stale 期限被自动关闭，2 条社区 Feature 请求 Issue 也以 `[stale]` 标签被关闭。**真正的社区实质性贡献仅有 1 条**——PR #3347 针对 Web UI 长文本卡顿的修复。仓库整体呈现出"自动化维护持续运行、社区主动贡献匮乏"的状态，需要维护者关注社区活跃度的提振。

---

## 2. 版本发布

🚫 **今日无新版本发布。**

---

## 3. 项目进展

今日合入/关闭的 PR 中，值得关注的内容较少，但仍有以下推进：

### ✅ 用户体验修复（进行中）
- **[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)** — `fix laggy interface`（OPEN 待合并）
  - 修复 Web UI 在聊天区存在大量文本时出现的卡顿问题
  - 作者已在 `picoclaw-launcher` 中构建测试，桌面与移动端 Brave 浏览器均验证有效
  - **意义**：这是今日唯一的非自动化 PR，是社区开发者直接响应用户痛点的成果，建议维护者优先 review

### 🔄 依赖升级批次（均已 CLOSED）
以下 5 条 dependabot PR 因 stale 被自动关闭，依赖升级未进入主干：
- [PR #3336](https://github.com/sipeed/picoclaw/pull/3336) — aws-sdk-go-v2/bedrockruntime 1.53.3 → 1.57.1
- [PR #3335](https://github.com/sipeed/picoclaw/pull/3335) — aws-sdk-go-v2/config 1.32.25 → 1.32.35
- [PR #3334](https://github.com/sipeed/picoclaw/pull/3334) — anthropic-sdk-go 1.55.1 → 1.62.0
- [PR #3333](https://github.com/sipeed/picoclaw/pull/3333) — mautrix 0.27.0 → 0.29.0
- [PR #3332](https://github.com/sipeed/picoclaw/pull/3332) — aws-sdk-go-v2 1.42.0 → 1.43.4

⚠️ **健康度警示**：anthropic-sdk-go、aws-sdk-go-v2 等核心 SDK 已有较新的版本发布，但 PicoClaw 仍停留在较旧版本。依赖升级被 stale 机制批量关闭，可能导致安全补丁与新模型能力滞后。

### 📦 历史 PR 清理
- **[PR #1555](https://github.com/sipeed/picoclaw/pull/1555)** — `fix: merge PR #1390 #1389 #1383 #1381`（CLOSED）
  - 该 PR 创建于 2026-03-14，长期未合并，今日被关闭。仓库 PR 积压清理取得进展

---

## 4. 社区热点

### 🔥 最活跃讨论：[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)
**标题**：[Feature] Better support long messages in IRC  
**评论数**：8 条 | **状态**：OPEN（唯一未关闭的 Issue）

**诉求分析**：
- IRC 协议默认限制单条消息 512 字节，换行符代表新消息
- 当用户发送长消息时，IRC 客户端会自动拆分，但 PicoClaw 将其视为多条独立消息处理
- 用户希望 PicoClaw 能识别 IRCv3 长消息机制（如 `draft/message-split` 或 `draft/chathistory`），将其还原为单一连贯消息

**价值判断**：这是今日唯一具备实质性社区讨论的 Issue，说明 IRC 用户群体对消息完整性的需求较为强烈。建议维护者给出明确响应（accept/needs-design/wontfix），避免该 Issue 也进入 stale 状态。

---

## 5. Bug 与稳定性

### 🐛 Web UI 卡顿（用户已提供修复）
- **问题描述**：Web UI 在长对话场景下出现明显卡顿
- **严重程度**：中（影响日常使用体验，但不阻塞功能）
- **修复 PR**：[#3347](https://github.com/sipeed/picoclaw/pull/3347)（OPEN，待合并）
- **状态**：✅ 已有社区开发者提供 fix，建议优先 review 合并

### 📉 依赖陈旧风险
- anthropic-sdk-go、aws-sdk-go-v2、mautrix 等多个核心依赖停留在 7 月底至 8 月初版本
- 严重程度：低-中（不影响当前运行，但存在安全与功能滞后风险）
- **建议**：维护者应主动合并 dependabot PR，或调整 stale 超时时间

---

## 6. 功能请求与路线图信号

今日关闭的 2 条 Feature Issue 均标记为 `[stale]`，反映以下未被纳入路线图的社区诉求：

| Feature 请求 | 链接 | 状态 | 潜在价值 |
|---|---|---|---|
| 支持任意模型使用 `/audio/transcriptions` 端点 | [#3331](https://github.com/sipeed/picoclaw/issues/3331) | CLOSED (stale) | ⭐⭐⭐ 解决 ASR 模型选择受限 |
| `delegate`/`spawn`/`subagent` 工具支持动态模型覆盖 | [#3330](https://github.com/sipeed/picoclaw/issues/3330) | CLOSED (stale) | ⭐⭐⭐⭐ 增强多代理编排灵活性 |

**路线图信号**：
- 多代理工具链的灵活性（#3330）是 AI Agent 框架的核心能力，建议维护者评估重新开启
- ASR 模型扩展（#3331）反映了语音功能用户对现代模型（如 Whisper V3、GPT-4o-transcribe）的需求
- IRC 长消息支持（#3287）虽未关闭，但缺乏维护者表态，存在被 stale 风险

---

## 7. 用户反馈摘要

从今日 Issues 评论中提炼的真实用户声音：

1. **Web UI 用户体验痛点**（[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)）
   - "Web UI 在长对话下卡顿" → 已通过社区开发者主动修复
   - 用户场景：桌面 + 移动端 Brave 浏览器均受影响

2. **IRC 协议完整性需求**（[#3287](https://github.com/sipeed/picoclaw/issues/3287)）
   - 用户对 IRC 消息被截断/拆分表示不满
   - 期望 PicoClaw 在协议层尊重 IRCv3 长消息规范

3. **模型灵活性的诉求**（[#3330](https://github.com/sipeed/picoclaw/issues/3330), [#3331](https://github.com/sipeed/picoclaw/issues/3331)）
   - 用户对"工具硬编码模型"的现状不满
   - 期望调用时动态指定模型，体现 AI Agent 的"可编排性"

**整体满意度**：偏低。社区贡献多停留在"自助式 fix"层面，缺乏维护者对功能请求的明确反馈循环。

---

## 8. 待处理积压

以下条目需要维护者主动关注，避免进一步流失社区贡献：

### 🔴 优先级 P0（影响活跃 Issue）
- **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — IRC 长消息支持  
  创建 36 天仍 OPEN，且是今日唯一活跃 Issue，维护者应给出明确回应

### 🟡 优先级 P1（依赖升级积压）
被 stale 关闭的 5 条 dependabot PR 涉及关键 SDK（Anthropic、AWS Bedrock、Matrix），建议：
- 立即 review [PR #3334](https://github.com/sipeed/picoclaw/pull/3334)（anthropic-sdk-go）以获取最新 Claude 模型能力
- 调整 stale 机器人超时策略，避免批量关闭有效依赖升级

### 🟢 优先级 P2（社区信号）
- [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) — 唯一社区主动贡献，等待维护者 review
- 评估重新开启被 stale 关闭的 [Issue #3330](https://github.com/sipeed/picoclaw/issues/3330)（动态模型覆盖），该请求与 AI Agent 工具链发展方向高度契合

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐☆☆☆ | 仅 1 条实质性 PR |
| 社区参与度 | ⭐⭐☆☆☆ | 讨论集中在单一 Issue |
| 维护响应度 | ⭐☆☆☆☆ | 5 条依赖 PR、2 条 Feature 被批量 stale |
| 版本发布节奏 | — | 今日无新版本 |
| 依赖健康度 | ⭐⭐☆☆☆ | 多个核心 SDK 版本落后 |

**总体评价**：项目进入"低活跃度维持期"。依赖升级机制运转正常（dependabot 持续提交），但社区贡献与维护者响应均较弱，建议关注 PR #3347 的合并以激活社区反馈循环。

---

*报告生成时间：2026-08-28 | 数据来源：GitHub API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-28

> 数据来源：github.com/nearai/ironclaw ｜ 报告时间窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 项目在过去 24 小时保持高强度迭代节奏，共产生 **33 条 Issue 更新**（含 8 条关闭）与 **48 条 PR 更新**（含 31 条已合并/关闭），但**无新版本发布**。讨论焦点高度集中在三条主线：①**性能与上下文开销**（Gmail MIME 头注入导致 14.3 秒额外推理）；②**Reborn 架构下的跨会话记忆与自我学习管线**（#7276 引发的 8 个子 Issue 形成完整 epic 链）；③**CI 与依赖治理**（dependabot 与集成测试批量合并）。整体活跃度处于高位，但 PR 关闭/合并比仅约 64%，提示审核压力较大。

---

## 2. 版本发布

**无新版本发布**。当前仍处于持续合入主线阶段，未触发发布动作。

---

## 3. 项目进展

今日合并/关闭 31 条 PR，重点进展包括：

| PR | 主题 | 影响维度 |
|---|---|---|
| [#7944](https://github.com/nearai/ironclaw/pull/7944) | feat(gmail): surface semantic message output | Gmail 通道在模型暴露前完成 HTML→Markdown、base64 解码、语义头部筛选 |
| [#7954](https://github.com/nearai/ironclaw/pull/7954) | feat(threads): add cumulative compaction context barrier | 线程压缩输出改为累积式上下文屏障，支持跨 loop run 折叠 |
| [#7907](https://github.com/nearai/ironclaw/pull/7907) | fix(memory): reject stale full-document rewrites | 写入前必须提供 `expected_content_hash`，杜绝并发覆盖 |
| [#7943](https://github.com/nearai/ironclaw/pull/7943) | ci: compile integration batches once | CI 单 runner 批量编译，缩短 PR/merge group 集成耗时 |
| [#7941](https://github.com/nearai/ironclaw/pull/7941) | fix(slack): admit a broadcast mention | 解除 `thread_broadcast` 子类型门禁，Slack "Also send to channel" 收件正常 |
| [#7963](https://github.com/nearai/ironclaw/pull/7963) | feat(github): decode repository file content | GitHub Contents API base64 在生产者端解码，UTF-8 文本直接暴露 |
| [#7906](https://github.com/nearai/ironclaw/pull/7906) | dependabot: everything-else 13 项更新 | uuid/base64/toml 等 crate 升级 |

**推进的整体方向**：①**通道层语义化**（Gmail/GitHub 在边界完成投影）；②**记忆层防并发丢失**（content hash 校验）；③**上下文成本控制**（累积压缩屏障 + 循环恢复）；④**CI 提速与依赖卫生**。项目在"安全可靠的持久化智能体"路线上稳步推进，单日合并量高于常态水平。

---

## 4. 社区热点

按评论数与活跃度排序：

- **#7891 — [perf] unprojected capability payloads + 24 KiB head-slice cost 14.3s of inference on two emails**（10 条评论）  
  [链接](https://github.com/nearai/ironclaw/issues/7891)  
  一次 `gmail.get_message` 调用被无差别注入 49,152 字节 MIME 原始头，整轮对话消耗 **19.7 秒（19.2 秒为模型推理）**。议题暴露了 Reborn 通道在投影层未做"按需裁剪"的设计缺陷，社区诉求指向：能力输出必须经过能力契约裁剪后才能进入 prompt。

- **#7824 — Context projection: Pi-style compaction barrier**（4 条评论）  
  [链接](https://github.com/nearai/ironclaw/issues/7824)  
  PinchBench 数据显示旧 shell baseline 仅 55.1M 输入 token（$2.52），PR #7491 后膨胀到 227.7M（$10.31）。议题要求引入 Pi 风格的"压缩屏障 + 结构化摘要 + 溢出恢复"。

- **#6590 — serve fails on Windows**（3 条评论）  
  [链接](https://github.com/nearai/ironclaw/issues/6590)  
  Windows 下 `local-dev` 与 `local-dev-yolo` profile 因 workspace 根目录与默认 `/skills` 重叠而启动失败。影响 Windows 开发者入门体验。

- **#3278 — [CLOSED] MissionService integration with TurnCoordinator**（3 条评论）  
  [链接](https://github.com/nearai/ironclaw/issues/3278)  
  已关闭，标志着 Reborn Mission 接入层的规划段完成。

- **#7276 — Reborn: auto-promote conversation facts into durable memory**（2 条评论）  
  [链接](https://github.com/nearai/ironclaw/issues/7276)  
  跨会话记忆 epic 的母议题，今日触发 #7947/#7948/#7949/#7950/#7951/#7952/#7953 七个子任务，呈现典型的"epic 拆分"模式。

**背后诉求总结**：性能（prompt 体积膨胀）+ 上下文管理（压缩屏障）+ 跨会话持久化（自我学习记忆），三者形成 Reborn 路线图的三角支柱。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **High** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | Gmail `get_message` 未投影即注入 24 KiB MIME 头，单次 19.7 秒 | Open（讨论中） |
| **High** | [#6590](https://github.com/nearai/ironclaw/issues/6590) | Windows `ironclaw serve` 在 local-dev 与 local-dev-yolo 下完全无法启动 | Open |
| **Medium** | [#7956](https://github.com/nearai/ironclaw/issues/7956) | Telegram `/start` 在未配对时错误返回命令清单而非配对提示 | Open |
| **Medium** | [#7955](https://github.com/nearai/ironclaw/issues/7955) | Telegram 个人账户绑定在缺少 `telegram_api_id/hash` 时只显示通用 "Something went wrong" | Open |
| **Medium** | [#7856](https://github.com/nearai/ironclaw/issues/7856) | MCP 工具发现静默跳过 camelCase 工具名 | Open |
| **Medium** | [#7940](https://github.com/nearai/ironclaw/issues/7940) | MCP OAuth 缺少 `resource` 参数，忽略 CIMD 优先于 DCR | Open |
| **Low** | [#7903](https://github.com/nearai/ironclaw/issues/7903) | Reborn 主机-沙箱命令管道每次都要手工新增 CLI 接入 | Open（需决策） |
| **Closed** | [#7776](https://github.com/nearai/ironclaw/issues/7776) | `memory.write` 全文档重写覆盖并发写入 | 已通过 [#7907](https://github.com/nearai/ironclaw/pull/7907) 修复 |
| **Closed** | [#5671](https://github.com/nearai/ironclaw/issues/5671) | `LeakDetector` 在脱敏输出时按 string/key 重建 | 已关闭（修复落地） |
| **Closed** | [#4491](https://github.com/nearai/ironclaw/issues/4491) | Slack 进度改用 Slack AI 流式 | 已关闭 |

**稳定性信号**：过去 24 小时无 P0 级崩溃报告；P1 集中在 Reborn 性能/Windows 兼容性两条主线，已分别被 #7891 与 #6590 跟踪。 [#7907](https://github.com/nearai/ironclaw/pull/7907) 与 [#7941](https://github.com/nearai/ironclaw/pull/7941) 证明记忆并发与 Slack 广播两个回归已闭环。

---

## 6. 功能请求与路线图信号

**Roborn 自学习记忆管线**（[#7276](https://github.com/nearai/ironclaw/issues/7276) 衍生 epic 链）已形成完整切片：

| Issue | 内容 | 状态 |
|---|---|---|
| [#7947](https://github.com/nearai/ironclaw/issues/7947) | 共享路由器、Settings、候选存储 | Open，对应 [#7958](https://github.com/nearai/ironclaw/pull/7958) PR 已 OPEN |
| [#7948](https://github.com/nearai/ironclaw/issues/7948) | 稳定 commit / feedback / forget 能力 | Open |
| [#7949](https://github.com/nearai/ironclaw/issues/7949) | 确定性准入 + 自动/审批晋升 | Open |
| [#7950](https://github.com/nearai/ironclaw/issues/7950) | native / mem0 / Mnesis 三家能力适配器 | Open |
| [#7951](https://github.com/nearai/ironclaw/issues/7951) | 已准入提供方的有界主动召回 | Open |
| [#7952](https://github.com/nearai/ironclaw/issues/7952) | 学习审查路由到 skill 蒸馏 | Open |
| [#7953](https://github.com/nearai/ironclaw/issues/7953) | 可观测性、评估、提供方迁移门禁 | Open |

该 epic 链表明下一里程碑**大概率包含记忆层重构 + 跨会话持久化能力**，PR [#7958](https://github.com/nearai/ironclaw/pull/7958) 可能是首条入主线的切片。

**其它进入实现的请求**：

- [#7968](https://github.com/nearai/ironclaw/pull/7968) MCP 工具结果规范化（Open）— 与 #7891 的性能诉求相互呼应。
- [#7961](https://github.com/nearai/ironclaw/pull/7961) 隐私受约束的租户 BI 遥测（Open）— 反映商业化前的可观测性投入。
- [#7969](https://github.com/nearai/ironclaw/issues/7969) / [#7970](https://github.com/nearai/ironclaw/issues/7970) / [#7971](https://github.com/nearai/ironclaw/issues/7971) NEAR AI 模型能力发现与 WebUI 呈现（均 Open）— 形成从后端到前端的最小能力标签链路。

**优先级推断**：记忆层 + MCP 边界投影 + 模型能力标签这三组最有可能合入下一版本；Windows 兼容 [#6590](https://github.com/nearai/ironclaw/issues/6590) 与 Gmail 性能 [#7891](https://github.com/nearai/ironclaw/issues/7891) 属于"必修"。

---

## 7. 用户反馈摘要

- **#7185（被 #7276 引用）的用户原话**：用户**期望在普通对话中提供的信息和确认在后续对话中可用**，当前实现将整段转录留在短时命名空间，会话结束即丢失。
- **#7891（性能痛点）**：开发者在两次 Gmail 调用上花费近 20 秒、其中 19 秒被无价值的 MIME 头消耗，反映出"通道契约未做按需投影"是用户最直接的体感问题。
- **#6590（Windows 痛点）**：用户尝试 `local-dev` 与 `local-dev-yolo` 两个入门 profile 全部失败，入门门槛被路径校验拦截，影响贡献者招募。
- **#7955 / #7956（Telegram 体验）**：管理员未配置 API 凭据时，用户被通用错误页拦截；未配对 `/start` 收到命令清单而不是配对提示。属于"使用流程缺乏状态敏感的错误文案"。
- **#4491（已闭环）**：用户希望 Slack 进度使用平台原生 AI 流式，临时方案已通过 PR #4490 上线，本议题正式关闭。

**满意度信号**：本地开发体验（Windows）+ 通道性能（Gmail）是当下负面反馈集中区；记忆持久化是中长期满意度瓶颈。

---

## 8. 待处理积压

以下 Issue/PR 长期未响应，建议维护者优先关注：

| 条目 | 创建时间 | 状态 | 风险点 |
|---|---|---|---|
| [#6590](https://github.com/nearai/ironclaw/issues/6590) Windows 启动失败 | 2026-07-23（>1 个月） | Open | 阻塞 Windows 贡献者 |
| [#5671](https://github.com/nearai/ironclaw/issues/5671) LeakDetector 重建 | 2026-07-06（近 2 个月） | Closed | 已修复但迭代慢 |
| [#7939](https://github.com/nearai/ironclaw/issues/7939) 抢救 10 个过期 `abbyshekit` PR 中的有效内容 | 2026-08-27 | Open | 含测试用例与失败场景，需人工拣选 |
| [#7864](https://github.com/nearai/ironclaw/issues/7864) 自学习写 Epic | 2026-08-25 | Open | 顶层 epic，需要里程碑定义 |
| [#7903](https://github.com/nearai/ironclaw/issues/7903) 持久化每用户沙箱执行器（决策 spike） | 2026-08-26 | Open | 涉及信任主机边界，需要架构决策 |

**维护者建议**：①为 [#6590](https://github.com/nearai/ironclaw/issues/6590) 指派 Windows 路径校验 Owner；②在 [#7276](https://github.com/nearai/ironclaw/issues/7276) epic 上公布里程碑切分（[#7947](https://github.com/nearai/ironclaw/issues/7947) → [#7958](https://github.com/nearai/ironclaw/pull/7958) 已是首条 PR）；③关闭 [#7939](https://github.com/nearai/ironclaw/issues/7939) 时同步公开 salvage 清单，避免后续考古成本。

---

### 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ★★★★☆ | 48 PR / 33 Issue，单日高位 |
| 缺陷响应速度 | ★★★★☆ | P1 多在讨论；P0 未见 |
| 路线图清晰度 | ★★★★☆ | Reborn epic 已分解为可合并切片 |
| 跨平台覆盖 | ★★☆☆☆ | Windows 仍是阻塞项 |
| 文档/迁移 | ★★★☆☆ | 多处"取决于环境变量"未文档化 |
| **综合** | **★★★★☆** | 核心功能快速迭代，平台广度与 Windows 体验是下一阶段重点 |

> 本日报基于 2026-08-27 ~ 2026-08-28 的 GitHub 公开数据生成，所有链接均为 github.com/nearai/ironclaw 下的真实条目。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**报告日期：2026-08-28**

---

## 1. 今日速览

LobsterAI 今日整体活跃度较高，过去 24 小时共有 **12 条 PR 关闭**（0 待合并）和 **7 条 Issue 更新**（2 仍开放），同时发布了 **1 个新版本 2026.8.26**。本次提交集中在三个方向：Windows 安装器加固、Renderer 渲染层体验优化（资料库缩略图、列表查询切换、模型收起折叠）以及旧问题的批量清理（5 条 stale Issues 关闭）。项目仍处于高频迭代阶段，PR 关闭/合并节奏快，但仍有 2 条关于"积分意外消耗"的开放 Issue 值得社区关注。

---

## 2. 版本发布

### 🚢 LobsterAI 2026.8.26
**发布日期：2026-08-26**

本版本聚焦 Windows 安装器静默安装体验的修正，主要变更：

- **fix(installer): support silent upload-first web builds** (#2511)
  适配 upload-first 模式的 Web 构建产物在静默安装场景下的兼容性。
- **fix(installer): hide banner for dictbind silent package** (#2512)
  隐藏 dictbind 静默安装包的横幅界面，保持零 UI 行为。
- **修复发布资源管理提示** —— 订阅状态展示分享额度与站点删除额度等（详见 #2559）。

**破坏性变更**：无明显破坏性变更，主要为体验修正。
**迁移注意事项**：从老版本升级到 2026.8.26 的用户，建议留意安装器行为（详见 #2561 中提到的"升级时清空项目目录"问题）。

🔗 [查看完整 Release](https://github.com/netease-youdao/LobsterAI/releases/tag/2026.8.26)

---

## 3. 项目进展

今日 12 条 PR 全部处于已关闭/已合并状态，主要推进方向如下：

| 方向 | PR | 描述 |
|------|-----|------|
| **安装器加固** | [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566) | Windows 安装器截断载荷硬化处理 |
| | [#2560](https://github.com/netease-youdao/LobsterAI/pull/2560) | 移除全渠道静默安装进度条，遵循 `/S` 零 UI 契约 |
| **Renderer 体验优化** | [#2568](https://github.com/netease-youdao/LobsterAI/pull/2568) | 折叠"更多模型"区块 + 同步侧边栏横幅排期（带版本门控与缓存恢复） |
| | [#2564](https://github.com/netease-youdao/LobsterAI/pull/2564) | More Models 折叠特性 |
| | [#2565](https://github.com/netease-youdao/LobsterAI/pull/2565) | 资料库列表查询切换与重新加载状态优化（避免闪烁、骨架屏统一、可访问性增强） |
| | [#2559](https://github.com/netease-youdao/LobsterAI/pull/2559) | 修复资料库缩略图渲染（栅格图/PPTX），完善发布资源管理提示 |
| **应用更新** | [#2551](https://github.com/netease-youdao/LobsterAI/pull/2551) | App 更新时保留 ready state，避免状态丢失 |
| **缺陷修复（已 stale 关闭）** | [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | 定时任务"立即运行"交互反馈补全（乐观更新 + Gateway 同步） |
| | [#1166](https://github.com/netease-youdao/LobsterAI/pull/1166) | 防止创建同名自定义 agent |
| **测试覆盖补全** | [#1165](https://github.com/netease-youdao/LobsterAI/pull/1165) | 为 `openclawMemoryFile` / `openclawLocalTimeContextPrompt` 新增 75 个 Vitest 单测 |
| **分支整理** | [#2567](https://github.com/netease-youdao/LobsterAI/pull/2567)、[#2563](https://github.com/netease-youdao/LobsterAI/pull/2563) | Liuzhq/fix 2026.8.24 修复分支合入 |

**综合评估**：项目在"安装器健壮性"与"渲染层用户体验"两条主线持续推进，今日重点是修复了多个静默安装体验问题并完成一批 stale 历史 PR 的清理工作，整体向前迈进了稳健的一步。

---

## 4. 社区热点

今日最值得社区关注的开放 Issue：

- 🔥 **[#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) —— 升级时清空整个项目目录**
  作者 dreamsdesign | 评论：1
  摘要：升级过程中清除了安装目录内的整个 projects 文件夹，损失约 2000 credits。
  **诉求**：用户对升级流程的数据安全提出严重质疑，希望升级不再破坏项目数据。

- 🔥 **[#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) —— f 单词误触发积分扣除**
  作者 dreamsdesign | 评论：0
  摘要：每次使用 f 开头词汇即扣 200 credits，损失约 800 credits。
  **诉求**：用户怀疑存在内容审核过度拦截，希望明确积分扣除规则或关闭不当过滤。

两条 Issue 均由同一用户 dreamsdesign 在 2026-08-27 提出，反映其对"积分消耗规则不透明"的强烈不满，可能代表更广泛的用户痛点。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 fix PR |
|--------|-------|------|---------------|
| 🔴 高 | [#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) | 升级清空 projects 目录（2000 credits 损失） | ❌ 暂未关联 |
| 🟠 中 | [#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) | 用词过滤异常消耗积分（800 credits 损失） | ❌ 暂未关联 |
| 🟡 低（已关闭） | [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 触发网关反复重启 | ✅ 3.31 版本后已修复（Issue 已关闭） |
| 🟡 低（已关闭） | [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 版本强制沙箱无法关闭 | ✅ 用户回滚 3.30 解决，Issue 已关闭 |
| 🟡 低（已关闭） | [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍可运行 | ✅ Issue 已关闭 |

**关键观察**：
- 今日 Installer 方向已有 [#2566](https://github.com/netease-youdao/LobsterAI/pull/2566)、[#2560](https://github.com/netease-youdao/LobsterAI/pull/2560) 等修复落地，但与 #2561 描述的"升级清空目录"问题相关性需进一步确认。
- 旧版本稳定性问题（3.31 版本相关）已通过关闭 Issue 完结。

---

## 6. 功能请求与路线图信号

- 📌 **[#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) —— 支持多个自定义模型提供商**
  作者 neoliuhua | 创建于 2026-03-31，今日 stale 关闭
  **需求**：当前仅支持一个自定义模型提供商，用户希望在切换/弃用自定义模型时保留旧配置。
  **路线图判断**：该项虽然被标记 stale 关闭，但"多模型配置管理"是 LLM 应用普遍诉求，未来版本重新开放概率较高。今日 #2568/#2564 的"更多模型折叠"改造也在间接为多模型场景做准备。

- 📌 **#2568 的 "More Models Collapse" 特性**
  将可选模型分组并默认折叠，是朝着"模型生态丰富化"方向迈出的可见一步。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

**🔴 强不满**
- 用户 @dreamsdesign 对积分消耗机制表达强烈不满，在 24 小时内连开 2 条 Issue，指责升级/内容审核机制造成意外损失。
- 用户 @773780238（#1173）怀疑软件在用户电脑上"偷偷留后门"，反映用户对卸载彻底性的强烈不信任感。

**🟡 困惑与不解**
- 用户 @syrphid（#1179）对 3.31 强制沙箱策略感到困惑，找不到关闭按钮，反映出重大版本变更需要更清晰的 UI 提示和文档说明。

**🟢 关注点（中性）**
- 用户 @HsiYaTung（#1180）反映修改自建 agent 图标会触发网关重启，揭示了 agent 元数据变更的连锁反应问题。
- 用户 @neoliuhua（#1174）的多自定义模型诉求反映进阶用户的配置管理需求。

**整体画像**：用户群体对"透明度"和"数据安全"高度敏感，任何积分消耗、文件删除、后台进程残留等"看不见的行为"都极易引发质疑与投诉。建议团队在变更类操作前提供更明确的告知与回滚机制。

---

## 8. 待处理积压

**长期未响应 / 今日集中清理的 stale 项**：

| Issue / PR | 标题 | 状态 |
|------------|------|------|
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 强制沙箱无法关闭 | ⚪ stale 已关闭（3 月创建，今日关闭） |
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | 卸载后程序仍运行 | ⚪ stale 已关闭 |
| [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 多自定义模型提供商 | ⚪ stale 已关闭 |
| [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 agent 网关反复重启 | ⚪ stale 已关闭 |
| [#1162](https://github.com/netease-youdao/LobsterAI/issues/1162) | Vitest 单测补充 | ✅ 配套 PR #1165 已合并 |
| [#1163](https://github.com/netease-youdao/LobsterAI/pull/1163) | 定时任务"立即运行"反馈 | ✅ 已合并 |

**当前仍开放的 Issue（建议维护者优先响应）**：

- 🔴 [#2561](https://github.com/netease-youdao/LobsterAI/issues/2561) — 升级清空项目目录（涉及数据丢失与积分损失）
- 🔴 [#2562](https://github.com/netease-youdao/LobsterAI/issues/2562) — f 词汇异常扣积分（涉及积分机制透明度）

---

### 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| **迭代活跃度** | ⭐⭐⭐⭐⭐ | 24h 12 PR 关闭 + 1 版本发布 |
| **PR 处理效率** | ⭐⭐⭐⭐ | 待合并 PR 为 0，处理及时 |
| **Issue 响应度** | ⭐⭐⭐ | 历史 stale 积压今日清理，新 Issue 暂无官方回复 |
| **稳定性** | ⭐⭐⭐ | 仍有 2 条关于积分/数据安全的高严重度开放 Issue |
| **用户体验关注** | ⭐⭐⭐⭐⭐ | 安装器、渲染层、缩略图等多处体验改进持续推进 |

**建议关注**：
1. 优先响应 #2561、#2562 这两条涉及用户实际损失的开放 Issue；
2. 排查 #2561 描述的"升级清空 projects 目录"是否与 #2566/#2560 的安装器加固存在关联；
3. 持续推进 stale Issue 清理机制，避免类似 #1179/#1173 类问题长期积压。

---

*报告基于 2026-08-28 过去 24 小时 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-08-28
**数据周期**：过去 24 小时
**项目地址**：[moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 今日整体处于**低频维护态**——Issues 无新增，PR 活跃度也偏低（仅 2 条），但两个 PR 都聚焦于**安全与互操作性**这两个关键领域，且都已在当日关闭/合并，表明维护团队对提交响应迅速。项目发布了日期化版本 `20260827.01`，结合持续合入的修复，整体推进节奏**稳健**。社区讨论热度极低（无活跃 Issue、无新增 PR 评论），属于典型的小项目"安静开发期"。综合评估：项目**健康度良好**，代码合入效率高，但需关注社区参与度。

---

## 2. 版本发布

### 📦 版本 `20260827.01`

- **发布日期**：2026-08-27
- **类型**：日期化构建版本
- **变更要点**：从 PR 合入节奏推断，本版本主要收录了以下两项关键修复：
  - 沙箱镜像与容器构建前的输入校验强化（PR #1222）
  - 工具调用 schema 的 OpenAI 兼容性修复（PR #1232）
- **破坏性变更**：无明显记录，但权限模型做了收紧（仅 operator administrator 可执行包检查与镜像构建）
- **迁移注意事项**：如果现有部署使用了非管理员身份触发容器构建或包检查流程，升级后需重新评估权限配置；Webhook 与 MCP 工具的 schema 行为若有上游依赖，需重新校验
- **链接**：[Release 20260827.01](https://github.com/moltis-org/moltis/releases/tag/20260827.01)

---

## 3. 项目进展

### 🔧 PR #1222 —— 修复：校验沙箱镜像请求
- **作者**：tsauvajon
- **状态**：✅ 已关闭（合并）
- **核心变更**：
  1. 在使用容器或 Dockerfile 之前**校验镜像引用与包名**输入
  2. 将包检查和镜像构建**限制为 operator administrator**
  3. **保留**密码、Passkey、可信 loopback 身份的管理员访问权
- **价值**：这是一项**安全加固 PR**，直接降低了潜在的容器逃逸、镜像混淆、恶意包注入风险。属于"防御纵深"级别的关键修复。
- **链接**：[PR #1222](https://github.com/moltis-org/moltis/pull/1222)

### 🔧 PR #1232 —— 修复：使 object schema 兼容 OpenAI 严格模式
- **作者**：IlyaBizyaev
- **状态**：✅ 已关闭（合并）
- **核心变更**：
  1. OpenAI 严格工具 schema 要求 `additionalProperties=false`，未声明字段会导致 Codex 发送 `null` 或空值
  2. 显式声明 webhook patch 字段
  3. 将 MCP 环境变量表示为固定的 name/value 条目
- **价值**：**互操作性修复**。解决了在 OpenAI 后端（特别是 Codex）下工具调用数据丢失的实际问题，是面向生产环境可用性的重要改进。
- **链接**：[PR #1232](https://github.com/moltis-org/moltis/pull/1232)

**整体进展评估**：项目今日在**安全**与**跨供应商兼容**两个方向上各前进一步，属于"质量提升型"commit，而非新功能开发。

---

## 4. 社区热点

⚠️ **今日无活跃 Issue，无新的 PR 评论，无明显社区讨论热点**。

- 所有新合入 PR 的 **👍 数量均为 0**（多数合并时尚处评审期）
- 评论数均为 `undefined` 或无新评论
- 可能原因：项目体量较小（推测为新晋开源项目）、社区尚在建设期，或问题反馈渠道分散

**建议**：维护者可考虑通过开启 Discussions 区、或在 PR 中显式邀请社区评审，来激活早期社区参与。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 是否已有 fix |
|---------|------|------------|
| 🟠 **中-高** | 沙箱镜像/包名校验缺失，存在潜在的恶意输入风险 | ✅ PR #1222 已合入 |
| 🟠 **中-高** | OpenAI 严格 schema 下 Codex 工具调用数据丢失（patch/MCP env 变量） | ✅ PR #1232 已合入 |

**稳定性结论**：今日两个 PR 都属于"**已被解决**"的稳定性/安全性问题。**无未修复的崩溃、回归报告**。整体稳定性状况良好。

---

## 6. 功能请求与路线图信号

今日**未观察到明确的新功能请求**（无新 Issue）。但从合入的 PR 可推断项目的两大主线方向：

| 方向 | 信号来源 | 战略含义 |
|------|---------|---------|
| **安全与权限治理** | PR #1222 的 operator administrator 概念 | 项目正系统化权限模型，可能在后续版本继续完善 RBAC |
| **多 LLM 供应商兼容** | PR #1232 显式声明 webhook/MCP schema | 表明项目目标是成为**模型无关**的个人 AI 助手运行时 |

**建议关注**：未来版本可能继续沿着这两条线演进——尤其值得期待权限模型的进一步细化（如按工作区分级、多租户），以及更多 OpenAI/Anthropic/本地模型间的兼容层。

---

## 7. 用户反馈摘要

⚠️ **今日无活跃 Issue 评论可提炼**。无法呈现原始用户痛点。

可参考的**间接信号**（来自 PR 描述）：
- PR #1232 描述了 **OpenAI Codex 用户**作为受影响群体的存在 → 推断 **OpenAI 生态是本项目重要用户来源**
- PR #1222 提到 **trusted loopback identities** → 项目支持本地调用场景，**强调本地优先体验**

---

## 8. 待处理积压

由于今日 PR 更新中两条均**已关闭**，且无活跃 Issue，**当前观察到的"积压"为空**。

**但建议维护者重点关注**：
- ✅ PR #1222、#1232 合并后是否需要补**回归测试**与**CHANGELOG 条目**
- ✅ `20260827.01` 版本发布说明是否在 GitHub Release 页面详细列出了上述两个修复（普通用户难以从版本号直接了解）
- ✅ 长期观察：尽管今日 Issue 为 0，但项目维护者应定期复盘过去一周的开放 Issue，避免因短期"安静"掩盖长期积压

---

## 📊 总结指标

| 指标 | 数值 |
|------|------|
| 今日新开 Issue | 0 |
| 今日活跃 Issue | 0 |
| 今日已关闭 Issue | 0 |
| 今日新开 PR | 0（但有 2 个更新至关闭） |
| 今日已合并 PR | 2 |
| 今日合并率 | 100%（2/2） |
| 今日新版本 | 1（`20260827.01`） |

**整体健康度评估：🟢 健康**
小体量项目进入稳健维护期，安全与互操作性两条主线齐头并进。建议下一阶段重点关注社区运营与文档沉淀。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：** 2026-08-28
**数据周期：** 过去 24 小时
**报告人：** 开源项目分析师

---

## 1. 今日速览

CoPaw 仓库过去 24 小时内继续保持高强度迭代节奏，共产生 **31 条 Issues 更新**（新开/活跃 15 条、关闭 16 条）和 **50 条 PR 更新**（待合并 27 条、已合并/关闭 23 条），活跃度处于**高位运行**。当日重点围绕 **v2.2.0 版本准备**展开：包括 Release Notes 草稿（#7348）、原生移动端体验草案（#7378）、File Guard 治理强化（#7375）以及多项 Desktop 启动性能问题的持续治理。无新版本发布。Issue 关闭率（16/31 ≈ 52%）与 PR 关闭/合并率（23/50 ≈ 46%）均反映出维护团队对社区反馈和代码评审响应积极，项目健康度整体良好。

---

## 2. 版本发布

当日**无新版本发布**。但维护者已开始整理 v2.2.0 的发布说明草稿，相关 Issue #7318 预告了 **QwenPaw Hub 多租户版**将于该版本推出。

---

## 3. 项目进展

当日有 **6 条重要 PR 完成关闭/合并**，显著推进了项目稳定性、治理能力与用户体验：

| PR | 说明 | 影响 |
|---|---|---|
| [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) | **Desktop 与 Docker 基础镜像 Python 升级 3.11 → 3.13**（含 OpenSSL 3.0.x → 3.5.x） | 修复了运营商 DPI 重置 TLS 握手的关键问题（#7298），涉及 5 个 Desktop workflow 中 9 处 Python 版本固定；是 v2.2.0 桌面端的底层基础。 |
| [#7375](https://github.com/agentscope-ai/QwenPaw/pull/7375) | **File Guard 路径在主动策略评估中强制生效**（fixes #7362） | 修复了"已配置文件保护但仍可读取 .qwenpaw.secret 等敏感路径"的安全回归，补齐了 `GovernancePolicy` 对 `ToolGuardEngine` 路径的覆盖。 |
| [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) | **Console Chat API 拒绝冲突负载**（fixes #5344） | `/api/console/chat` 在 Agent 忙时不再静默丢弃消息，修复了用户消息"已发送但未执行"的长期痛点。 |
| [#7337](https://github.com/agentscope-ai/QwenPaw/pull/7337) | **分离模型输出能力与请求上限** | 防止自动发现的模型能力元数据被错误地用作 `max_tokens` 请求限制，避免用户配置的请求预算被悄悄覆盖。 |
| [#7309](https://github.com/agentscope-ai/QwenPaw/pull/7309) | **TaskTracker 改用结构化事件** | 统一任务追踪与同会话并发语义，配合 #6273 的统一行为，使前端可重建一致的连接快照。 |
| [#7374](https://github.com/agentscope-ai/QwenPaw/pull/7374) | **Assistant 过程消息自动折叠** | 流式期间自动按相邻文本边界分组并折叠推理/工具调用步骤，显著改善长对话可读性。 |

**整体判断：** 当日合并的 PR 在 TLS 底层、安全治理、API 行为、并发模型、UI 可读性五个层面同时推进，相当于"打地基、修漏洞、重塑交互"齐头并进；这些都是 v2.2.0 质量基线的关键拼图。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues

- **#7318 – QwenPaw Hub 多租户版将在 2.2.0 推出** [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7318)
  - 评论数 **10**，👍 1
  - 核心维护者 rayrayraykk 发起的产品向讨论帖，邀请社区对多租户方向提建议。引用了 #2324 等历史多用户管理诉求。**这是 v2.2.0 的官方预告贴，社区影响力最大。**

- **#7298 – Desktop/Docker 内置 TLS 栈被运营商 DPI 阻断** [🔗](https://github.com/agentscope-ai/QwenPaw/issues/7298)
  - 评论数 **8**
  - OpenSSL 3.0.x 在某些运营商网络下被强制重置，且 Desktop 无备用方案。已通过 PR #7328 修复。**反映了"打包 Python 版本"这一基础设施选型对真实部署环境的深远影响。**

### 4.2 讨论较活跃的已关闭 Issues（完成度高的话题）

- **#2814** 多 agent 对话历史为空（[🔗](https://github.com/agentscope-ai/QwenPaw/issues/2814)）—— 7 评论，已关闭
- **#4770** 左侧会话界面列顺序调整（[🔗](https://github.com/agentscope-ai/QwenPaw/issues/4770)）—— 6 评论，已关闭
- **#4237** 聊天内 Shell 命令可观测性（[🔗](https://github.com/agentscope-ai/QwenPaw/issues/4237)）—— 5 评论，已关闭
- **#6273** 统一任务追踪语义（[🔗](https://github.com/agentscope-ai/QwenPaw/issues/6273)）—— 5 评论，已关闭
- **#6083** Desktop 工作区快捷访问按钮（[🔗](https://github.com/agentscope-ai/QwenPaw/issues/6083)）—— 5 评论，已关闭

**诉求分析：** 这批高讨论度 Issue 集中反映了三个核心诉求——(1) **多 agent 协作的可观察性与正确性**；(2) **桌面端用户体验的进一步打磨**（列顺序、快捷访问、运行中命令可视）；(3) **会话/任务/并发模型的统一性**。三者均与 v2.2.0 路线图高度吻合。

---

## 5. Bug 与稳定性

### 5.1 严重（影响主要工作流，已/有 fix PR）

| Issue | 描述 | fix PR 状态 |
|---|---|---|
| [#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) | Desktop/Docker 内置 OpenSSL 3.0.x 被运营商 DPI 重置，Desktop 无 workaround | ✅ [#7328](https://github.com/agentscope-ai/QwenPaw/pull/7328) 已关闭（Python 3.13 升级） |
| [#5344](https://github.com/agentscope-ai/QwenPaw/issues/5344) | `/api/console/chat` 返回 200 但 agent 忙时静默丢弃消息 | ✅ [#7299](https://github.com/agentscope-ai/QwenPaw/pull/7299) 已关闭 |
| [#7362](https://github.com/agentscope-ai/QwenPaw/issues/7362) | 文件保护未生效，配置后仍可读取 .qwenpaw.secret 等 | ✅ [#7375](https://github.com/agentscope-ai/QwenPaw/pull/7375) 已关闭 |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | Desktop 同步调用冻结 118–135s，timeout 失效 | ❌ 尚无 PR |
| [#7364](https://github.com/agentscope-ai/QwenPaw/issues/7364) | 零停机重载复用已关闭的 memory_manager，永久破坏 memory_search | ❌ 尚无 PR |
| [#7367](https://github.com/agentscope-ai/QwenPaw/issues/7367) | 仅启用 console 渠道时启动 30–45s（lark_oapi 单包导入 ~18.5s） | ❌ 尚无 PR |
| [#7370](https://github.com/agentscope-ai/QwenPaw/issues/7370) | wecom 渠道 base64 图片 → OSError [Errno 36] | ❌ 尚无 PR |

### 5.2 中等（影响体验或边缘场景）

| Issue | 描述 |
|---|---|
| [#7360](https://github.com/agentscope-ai/QwenPaw/issues/7360) | Desktop 2.2.0b1 启动耗时 ~247.5s（约 4 分钟）—— 与 #7363、#7367、#7023 形成"启动慢三件套" |
| [#7023](https://github.com/agentscope-ai/QwenPaw/issues/7023) | 启动关键路径上同步安装 Chromium，无 skip/lazy-load |
| [#7302](https://github.com/agentscope-ai/QwenPaw/issues/7302) | 钉钉渠道关闭工具/思考信息后仍发送空消息并触发未读提醒 |
| [#4217](https://github.com/agentscope-ai/QwenPaw/issues/4217) | 同 cron 同时触发的 share_session 并发任务返回空回复 |
| [#7296](https://github.com/agentscope-ai/QwenPaw/issues/7296) | OpenAI Responses 多轮在 stateless 上游失败（reasoning item 过期） |
| [#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379) | 中文文件名 PDF（十几个中文字）处理失败 |
| [#7376](https://github.com/agentscope-ai/QwenPaw/issues/7376) | 2.2.0b1 主界面图标不一致（已合并 PR 待观察） |

### 5.3 整体评估

**好消息：** 三大高严重度 Bug（#7298、#5344、#7362）当日均有 PR 修复并关闭。
**隐患：** Desktop **启动性能**正在演变成一个跨版本的主题（#7360 + #7363 + #7367 + #7023 四个相关 Issue 集中在同一窗口打开），v2.2.0b1 显然未完全收敛；**异步/同步混用**与**重载生命周期管理**也开始浮现为新的稳定性信号。

---

## 6. 功能请求与路线图信号

### 6.1 明确进入 v2.2.0 候选

- **QwenPaw Hub 多租户版**（[🔗 #7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）：官方预告 2.2.0。
- **原生移动端**：[#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378)（草案，标 DO NOT MERGE）—— Expo/React Native 客户端，Chats/Agents/Community/Workbench 四个面板。**意味着维护者已在为多端体验做技术储备。**
- **每会话模型覆盖**（[🔗 #5992](https://github.com/agentscope-ai/QwenPaw/pull/5992)）：opt-in，允许同一 Agent 在不同对话中使用不同 LLM。
- **工作区预加载 Skills**（[🔗 #7183](https://github.com/agentscope-ai/QwenPaw/pull/7183)）：opt-in preload 核心常用 Skills，对齐 Claude Code subagents 设计。
- **长对话分页 + 虚拟化**（[🔗 #7361](https://github.com/agentscope-ai/QwenPaw/pull/7361)）：#7049 后端能力 + 前端虚拟化转写。
- **v2.2.0 发布说明**（[🔗 #7348](https://github.com/agentscope-ai/QwenPaw/pull/7348)）：Release notes 起草中。

### 6.2 可能纳入下一窗口

- **ReMe 0.4.1.9 集成 + embedding 热更新**（[🔗 #7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)）
- **超大单行工具结果裁剪 + 工作区 artifact 保留**（[🔗 #7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)）
- **Agent 文件路由修复**（[🔗 #7351](https://github.com/agentscope-ai/QwenPaw/pull/7351)）：修复 Profile/Daily/知识库上传到错误目录（fixes #7322）。
- **Chat UI 升级至 AgentScopeRuntimeWebUI 1.2.0**（[🔗 #7382](https://github.com/agentscope-ai/QwenPaw/pull/7382)）
- **Shell 子进程 PATH 注入用户本地 bin**（[🔗 #7057](https://github.com/agentscope-ai/QwenPaw/pull/7057)）
- **钉钉流式心跳与健康检查强化**（[🔗 #7381](https://github.com/agentscope-ai/QwenPaw/pull/7381)）

### 6.3 社区呼声但尚无 PR

- **React 循环工具结果自动简化/裁剪**（[🔗 #7316](https://github.com/agentscope-ai/QwenPaw/issues/7316)）—— 控制上下文长度的工具设计提案。
- **QQ 对话重启后丢失最后记忆**（[🔗 #7297](https://github.com/agentscope-ai/QwenPaw/issues/7297)）—— 渠道消息持久化问题。
- **升级流程对 HDD 用户不友好**（[🔗 #6380](https://github.com/agentscope-ai/QwenPaw/issues/6380)）—— NAS 场景下 1.5h 更新。

---

## 7. 用户反馈摘要

| 维度 | 用户原声提炼 | 涉及 Issue |
|---|---|---|
| **Desktop 启动慢** | "启动大约 247 秒，差不多 4 分钟"、"同步阻塞事件循环 118–135s"、"只有 console 渠道也 30–45s

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-28

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时保持极高活跃度，共 **21 条 Issue 更新 + 50 条 PR 更新**，但合并/关闭比例较低（仅 2 个 Issue + 1 个 PR 关闭）。社区讨论仍以**架构层面 RFC 修订**为主旋律：会话持久化契约（#9487 / #9488 / #9600）、Provider Wire Protocol（#8396）、WASM 插件运行时（#10076）继续推进版本演化；同时 v0.8.5 周稳定线（#9459）将于 8 月 30 日截止，目前仍处于"按周出 ready 工作"模式。整体判断：**项目处于架构密集讨论 + Bug 修复并行的中后期开发阶段，未出现阻塞性主线事故**。

---

## 2. 版本发布

**今日无新版本发布。** 当前活跃里程碑为 v0.8.5 有限周稳定线（[Issue #9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)），截止日期为 **2026-08-30**，intake 已在 8 月 4 日冻结。

---

## 3. 项目进展

今日**仅 1 条 PR 关闭 + 2 条 Issue 关闭**，整体推进节奏受架构 RFC 评审周期制约。具体如下：

### 已关闭 PR
- **[#10413](https://github.com/zeroclaw-labs/zeroclaw/pull/10413)** `test(channels): keep Telegram photo upload test offline` — 由 [@ump45nose](https://github.com/ump45nose) 提交，将 `telegram_send_photo_bytes_builds_correct_form` 中的真实 `api.telegram.org` 请求替换为本地 Wiremock endpoint，避免 CI 网络依赖。属于测试质量改进。

### 已关闭 Issue
- **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)** `[Support]: Disable cachePoint for Bedrock Nova 2 Lite model` — 用户 [@ngamradt](https://github.com/ngamradt) 反馈 Bedrock Nova 2 Lite 模型随机报缓存错误、希望关闭缓存功能。Issue 已 closed（in-progress → accepted），对应支持已落地。
- **[#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329)** `[Bug]: Resilient wrapper truncation shadows loop-level context overflow recovery for OpenAI-compatible providers` — OpenAI 兼容 Provider 的上下文溢出被 Resilient 包装层截断，loop 级恢复路径从未触发。Bug 已 closed，意味着已有修复方案或被并入相关 PR。

### 关键在途 PR（高优先级但尚未合并）
- **[#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)** `fix(multimodal): add pixel-level image validation` — 用 `image` crate 做完整解码，杜绝坏图进入 provider 请求。`needs-author-action` 状态，仍待提交者处理反馈。
- **[#9527](https://github.com/zeroclaw-labs/zeroclaw/pull/9527)** `ci(rust): bump routine toolchains and builders to 1.98.0` — 将日常构建工具链升级到 Rust 1.98.0（2026-08-20 发布），源码最低支持保持 1.96.0。等同版本节奏维护工作。
- **[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)** `feat(runtime): anchor context compaction to model window ratio` — XL 级大改动，使上下文压缩预算与所选模型窗口成比例，而非固定 32K 绝对值。
- **[#10064](https://github.com/zeroclaw-labs/zeroclaw/pull/10064)** `fix(channels/telegram): self-destruct approval cards after an operator tap` — Telegram 工具审批卡片点击后自动销毁。

整体看，**主线向前推进力度有限**，但绝大多数"在途"PR 已进入 `needs-author-action` 或 `needs-maintainer-review` 等待阶段，瓶颈在评审而非开发。

---

## 4. 社区热点

按评论数排序，今日最活跃议题均集中在**架构层 RFC**：

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | **27** | RFC: Runtime-owned conversation sessions and transport surface adapters |
| 2 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | **21** | RFC: Unified attachment architecture for web chat and channels |
| 3 | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | **15** | RFC: Make wire protocol first-class in provider construction |
| 4 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | **14** | [Tracker]: Maintainer decision queue for RFCs and design issues |
| 5 | [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | **14** | [Tracker]: Session-persistence contract ownership and layer ordering |

### 诉求分析

- **#9487 / #9488 / #9600 三件套**：[@NiuBlibing](https://github.com/NiuBlibing) 主导的统一会话/附件架构 RFC 已经历多轮修订。#9487 在 8-03 完成 Rev. 2（落地 #9487/#9488/#9600 的所有权边界、强类型 ingress envelope、持久化接纳与"模糊结果"语义），今日再次活跃更新；诉求核心是**消除会话持久化与通道适配之间的契约所有权真空**。
- **#8396**：[Taswen](https://github.com/Taswen) 主理的 Provider Wire Protocol 一等公民化 RFC，今日已更新到 2026-08-28 修订稿，受 FND-003 Rev. 15（#9496）规范约束。AI 辅助起草（Claude / Copilot），人类 sponsor 审核。
- **#8692**：维护者决策队列跟踪器，明确这是 RFC/设计 Issue 进入接受/拒绝/延期/拆分前的统一入口。

社区情绪可总结为：**对架构一致性高度敏感，对契约所有权归属有强烈共识需求**。

---

## 5. Bug 与稳定性

按严重程度（Severity）排列今日活跃/新增的 Bug：

### P1（高严重度 — workflow 阻塞或安全问题）

| Issue | 组件 | 描述 | 是否有修复 |
|---|---|---|---|
| [#10324](https://github.com/zeroclaw-labs/zeroclaw/issues/10324) | runtime/cron | cron 手动触发与运行历史读取在 agent 重命名场景下仍是 check-then-act 竞态。归为 S2 而非 S0 故意为之（需运维重命名才能触发）。已有 follow-up | 暂无独立 PR，关联 #9947 跨 agent 边界同类问题 |
| [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | provider/compatible | Anthropic 兼容网关拒绝 tool result 中的 `image_url` 块，但用户消息直接附带图片时正常。S1 workflow blocked | 暂无 PR |

### P2（中高严重度）

| Issue | 组件 | 描述 | 关联 PR |
|---|---|---|---|
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | channels/telegram | Telegram 回复线程将对话记忆切碎为按 thread 隔离的桶，丢失多轮上下文 | 暂无 |
| [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) | runtime/daemon | 终端 fallback 文本绕过 live delivery 合约 | 暂无 |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | runtime/daemon | 同会话内第二条消息在首轮未结束时启动并行 run，导致重复工作与重复回复 | [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411)（serialize same session messages） |
| [#10286](https://github.com/zeroclaw-labs/zeroclaw/issues/10286) | zerocode/tui | 历史裁剪后恢复的 ZeroCode 转录缺失被裁剪的轮次 | [#10380](https://github.com/zeroclaw-labs/zeroclaw/pull/10380)（restore persisted ACP transcripts） |

### P3（轻微）

| Issue | 组件 | 描述 |
|---|---|---|
| [#10326](https://github.com/zeroclaw-labs/zeroclaw/issues/10326) | provider/reliable | Reliable 流式错误上报的模型名是请求模型而非实际 pinned 模型 |

### 已修复
- **[#10329](https://github.com/zeroclaw-labs/zeroclaw/issues/10329)**（OpenAI 兼容 provider 的 resilient wrapper 截断问题）已关闭。

### 稳定性观察
P1/P2 bug 中**至少 2 个已有明确 PR 关联**（#10408  #10411、#10286 ↔ #10380），其余多为**契约/语义层面缺陷**，需等待对应 RFC（如 #9487）落地后根治。

---

## 6. 功能请求与路线图信号

### 今日新增 Feature 请求

| Issue | 提议 | 落地可能性 |
|---|---|---|
| [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419) | **`POST /webhook` SSE 流式响应**（agent loop 期间增量推送 assistant token） | **高** — 已有 [#10411](https://github.com/zeroclaw-labs/zeroclaw/pull/10411) 同会话序列化 PR，作者 [@dakaii](https://github.com/dakaii) 的命名风格与 webhook 场景契合 |
| [#10244](https://github.com/zeroclaw-labs/zeroclaw/issues/10244) | ZeroCode Agent 删除与批量清理 | 中 — in-progress 状态，需配合 agent lifecycle 删除路径 |
| [#10421](https://github.com/zeroclaw-labs/zeroclaw/issues/10421) | ZeroCode 持久化 ACP 转录分页加载 | 高 — 与 [#10380](https://github.com/zeroclaw-labs/zeroclaw/pull/10380)（已 open）紧密关联，Audacity88 主线工作 |

### 已有 RFC 推进中的功能

- **[#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076)** RFC: Composable WASM Plugin Runtime — NiuBlibing 起草，扩展当前 WASM Component Model host 表面，纳入 Rust HookHandler 观测、扩展 API 边界。
- **[#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997)** `feat(channels/telegram): add secure model picker` — 提供分组分页的 inline keyboard，由 [@morningstarnasser](https://github.com/morningstarnasser) 提交。`status:blocked` 等待解阻塞。
- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809)** `feat(providers): support multiple models per provider profile` — XL 级，使单 provider profile 可承载多个模型 alias。
- **[#10402](https://github.com/zeroclaw-labs/zeroclaw/pull/10402)** `feat(tools): add Serply web search provider` — 新增 Serply 作为 `web_search_tool` 提供方。

**路线图信号**：下一版本大概率会包含 *WASM 插件架构*、*ACP 转录持久化分页*、*Webhook SSE 流式输出* 三块；Provider 多模型、Telegram 模型选择器可能在 RFC 落地后进入 v0.9.x。

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论与摘要中提炼真实痛点：

1. **Bedrock Nova 2 Lite 用户 [@ngamradt](https://github.com/ngamradt)（#8720，已关闭）**：明确希望"通过配置文件关闭 cachePoint"，反映 **Provider-specific 配置开关粒度仍不够**。
2. **Telegram 重度用户场景（#10237）**：多线程回复导致对话记忆被切成独立桶，**多轮上下文在 channel 上体验明显下降**，是 Channel 层经典痛点。
3. **Hosted Path A 开发者 [@dakaii](https://github.com/dakaii)（#10419）**：当前 `POST /webhook` 必须等待完整 JSON `{response}`，希望 SSE 流式增量返回；体现 **Web 集成方对流式 UX 的强需求**。
4. **运维侧 [@wromansky](https://github.com/wromansky)（#10324）**：cron 与 agent 重命名存在 TOCTOU 竞态；**运维操作的并发安全已被前序 #9947 揭示但未根除**。
5. **同会话并发用户 [@volodkindv](https://github.com/volodkindv)（#10408）**：会话活跃期间收到新消息会启动并行 run，导致重复消耗与重复回复；反映 **runtime 并发控制仍存在直觉外的行为**。
6. **社区赞助方 [@NiuBlibing](https://github.com/NiuBlibing)**：连续主导多个高优 RFC（#9487、#9488、#10076），并以 Codex 协作起草，**社区已形成"AI 辅助 + 人类 sponsor 审核"的标准 RFC 工作流**。

总体满意度判断：**架构演进方向被社区高度认同，但 Channel 层的记忆与并发模型仍是用户感知的最大短板**。

---

## 8. 待处理积压

以下 Issue/PR 已存在较长时间且仍未合并/关闭，需维护者关注：

### 长期未关闭的架构 RFC

| 编号 | 创建日 | 主题 | 状态 |
|---|---|---|---|
| [Issue #9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 2026-07-28 | Runtime-owned conversation sessions | Rev. 2，27 评论 |
| [Issue #9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 2026-07-28 | Unified attachment architecture | Rev. 9，21 评论 |
| [Issue #8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | 2026-06-27 | Wire protocol first-class | 已修订，15 评论 |

### 高优 Stale-Candidate PR（待作者行动）

| PR | 创建日 | 主题 | 标记 |
|---|---|---|---|
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | 2026-08-04 | 区分 absent vs empty `allowed_tools`（安全关键） | `stale-candidate`, XL |
| [#9724](https://github.com/zeroclaw-labs/zeroclaw/pull/9724) | 2026-08-04 | `always_ask` 在 Full autonomy 下生效 | `stale-candidate`,

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*