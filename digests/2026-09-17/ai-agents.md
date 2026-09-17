# OpenClaw 生态日报 2026-09-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-17 02:54 UTC

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

# OpenClaw 项目日报 · 2026-09-17

---

## 1. 今日速览

OpenClaw 今日保持极高的社区活跃度，过去 24 小时内共 **500 条 Issue 更新**（330 新开/活跃、170 已关闭）和 **500 条 PR 更新**（286 待合并、214 已合并/关闭），但 **0 个新版本发布**。从数据上看，社区正处于 **2026.9.3 → 2026.9.4 升级周期的"维护与回填"阶段**：P0 级别的升级故障报告仍占 Issue 头部，多个更新链路的回归被反复追踪；同时一批 P1/P2 的 Gateway 内存、Zombie 进程、MCP 崩溃等长期隐患被社区成员以完整证据复现并提出修复 PR，项目整体处于"高压稳定期"——流量很大，但推进节奏可观测、修复路径清晰。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。社区仍停留在 `2026.9.3 / 2026.9.4` 周期内，由机器人 `roboclaw-bot` 维护的协调追踪 Issue [#145252](https://github.com/openclaw/openclaw/issues/145252) 持续记录更新/升级/Doctor/迁移/回滚/重启的可靠性问题。

---

## 3. 项目进展

今日已合并/关闭的 PR 共 214 条，以下为对项目推进有实质意义的条目：

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| [#150455](https://github.com/openclaw/openclaw/pull/150455) | `fix(ci): restore cold checkout and Control UI startup validation` | 恢复主 CI 的冷检出与 Control UI 启动校验，保证 PR 验证基线 | [PR](https://github.com/openclaw/openclaw/pull/150455) |
| [#150424](https://github.com/openclaw/openclaw/pull/150424) | `fix(ui): keep file preview copy out of the startup bundle` | 修复 [#149287](https://github.com/openclaw/openclaw/issues/149287) 引入的启动包超预算问题，恢复主线与 PR 验证 | [PR](https://github.com/openclaw/openclaw/pull/150424) |
| [#146719](https://github.com/openclaw/openclaw/issues/146719) | Windows `2026.9.3 → 2026.9.4` 更新在扩展长度路径下 mkdir 失败 | 已关闭，修复在候选快照阶段 `$OPENCLAW_STATE_DIR` 未展开的问题 | [Issue](https://github.com/openclaw/openclaw/issues/146719) |
| [#145929](https://github.com/openclaw/openclaw/issues/145929) | Auth profile logout 因自更新中断而永久报 `lock-may-be-busy` | 已关闭，自更新中断后的锁状态恢复路径已修复 | [Issue](https://github.com/openclaw/openclaw/issues/145929) |
| [#118018](https://github.com/openclaw/openclaw/issues/118018) | 子代理完成事件可投递到已被替换的请求者生命周期 | 已关闭，子代理请求者生命周期边界已收紧 | [Issue](https://github.com/openclaw/openclaw/issues/118018) |
| [#111985](https://github.com/openclaw/openclaw/issues/111985) | `memory-core` 将 ChatGPT/Codex OAuth token 直接打到 OpenAI embeddings | 已关闭（安全边界修复） | [Issue](https://github.com/openclaw/openclaw/issues/111985) |
| [#111578](https://github.com/openclaw/openclaw/issues/111578) | 升级后 `OPENCLAW_GATEWAY_AUTH_TOKEN` 从 service-env 再次丢失 | 已关闭，CLI 本地认证一并修复 | [Issue](https://github.com/openclaw/openclaw/issues/111578) |
| [#98437](https://github.com/openclaw/openclaw/issues/98437) | MCP loopback 每天产生数千条 `conflicting schema definitions` 警告 | 已关闭，方案为构建期合并而非 per-init 校验 | [Issue](https://github.com/openclaw/openclaw/issues/98437) |
| [#94147](https://github.com/openclaw/openclaw/issues/94147) | macOS 每秒重建 `CLLocationManager` 导致 TCC 权限疯狂请求 | 已关闭 | [Issue](https://github.com/openclaw/openclaw/issues/94147) |
| [#87407](https://github.com/openclaw/openclaw/issues/87407) | Anthropic provider `UND_ERR_SOCKET` 后静默回退到 OpenAI/Codex | 已关闭 | [Issue](https://github.com/openclaw/openclaw/issues/87407) |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI 大附件处理栈溢出（`RangeError: Maximum call stack`） | 已关闭 | [Issue](https://github.com/openclaw/openclaw/issues/90098) |
| [#31331](https://github.com/openclaw/openclaw/issues/31331) | Docker 安装 + Sandbox 无法挂载 workspace | 已关闭 | [Issue](https://github.com/openclaw/openclaw/issues/31331) |

**整体评估**：今日的项目推进以**清理升级周期遗留 + 安全/稳定性收尾**为主，CI 基础设施恢复、UI 启动包预算控制、Anthropic 回退安全边界、OAuth token 泄漏这四项都属于"如果不做，下个版本会更痛"的卡点；其集体关闭说明维护团队正在为下一版本（推测为 `2026.9.5` 或月度大版本）腾出 backlog。

---

## 4. 社区热点

今日讨论最热烈的线程集中在 **Gateway 进程生命周期** 与 **2026.9.x 升级链**：

- 🥇 [#97616](https://github.com/openclaw/openclaw/issues/97616)（30 评论）— OpenClaw 泄漏 hook/tool 子进程导致 zombie 累积与运行时劣化。社区已形成稳定复现路径，覆盖 `openclaw-hooks / bash / codex` 等子进程。这是 P1 + crash-loop + message-loss 三标签叠加的"代表性稳定性债务"。
- 🥈 [#91588](https://github.com/openclaw/openclaw/issues/91588)（25 评论）— Gateway 内存泄漏 350 MB → 15.5 GB（2–3 天），触发 OOM + launchd-handoff 重启循环。issue-rating 为 `🦪 silver shellfish`。
- 🥉 [#144911](https://github.com/openclaw/openclaw/issues/144911)（24 评论）— stdio MCP server `initialize` 30s 超时后，子进程清理路径抛出 `service child cleanup identity lost` 未处理拒绝，导致整个 Gateway 进程崩溃。
- [#111897](https://github.com/openclaw/openclaw/issues/111897)（19 评论）— 同一 session lane 的两次并发执行同时完成，重复/冗余回复。
- [#126360](https://github.com/openclaw/openclaw/issues/126360)（17 评论）— 在 `agents.ownership: "explicit"` 下，logbook 插件、Control UI 全局 RPC、系统 agent turn 都缺失 `agentId` 目标，导致 `AgentSelectionRequiredError` 刷屏。
- [#149361](https://github.com/openclaw/openclaw/issues/149361)（14 评论）— WebUI 性能与稳定性持续研究，作者明确表态"不接受也不合入任何研究修正"，小修被压到协调批次。
- [#150201](https://github.com/openclaw/openclaw/issues/150201)（14 评论）— Windows `2026.9.3` 更新候选快照失败，Gateway SQLite check 超时。
- [#137332](https://github.com/openclaw/openclaw/issues/137332)（13 评论）— 混合 terminal requester-settle 批次在 ownership check 后无限重试。

**诉求归纳**：社区当前最强烈的呼声集中在两点——**Gateway 进程生命周期/资源回收的可观测性**（zombie、内存、子进程清理），以及**多 agent ownership 模型的错误处理路径**（`AgentSelectionRequiredError`、session lane 并发、requester 替换）。两者都直接指向 `agents.ownership: "explicit"` 这一新配置带来的回归面。

---

## 5. Bug 与稳定性

### 🔴 P0 — 阻塞发布 / 严重崩溃

| Issue | 标题 | 修复 PR | 链接 |
|---|---|---|---|
| [#150201](https://github.com/openclaw/openclaw/issues/150201) | Windows `2026.9.3` 更新候选快照失败 + Gateway SQLite check 超时 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/150201) |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | `main (1611ca6d)`：Gateway ready 但 `/health` 全部超时，event loop 被饿死（632-agent fleet） | [#150354](https://github.com/openclaw/openclaw/pull/150354)（PR，已评审）/ [#150223](https://github.com/openclaw/openclaw/pull/150223)（PR，已评审） | [Issue](https://github.com/openclaw/openclaw/issues/149538) |
| [#146394](https://github.com/openclaw/openclaw/issues/146394) | 更新失败：`global-install-failed (2026.9.3)`，linux/arm64 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/146394) |
| [#144739](https://github.com/openclaw/openclaw/issues/144739) | `2026.9.3 → 2026.9.4` npm 更新在 schema-17 candidate state 上跑 2026.9.3 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/144739) |
| [#148681](https://github.com/openclaw/openclaw/issues/148681) | 更新失败：`finalize:doctor (2026.9.4)`，linux/x64 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/148681) |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 文件型 provider cooldown 在充值后仍阻塞用户数小时（Anthropic 402 billing 错误链） | 待跟进（设计层面） | [Issue](https://github.com/openclaw/openclaw/issues/70903) |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 协调追踪：`2026.9.3 / 2026.9.4` 更新/升级/恢复可靠性 | （协调 issue） | [Issue](https://github.com/openclaw/openclaw/issues/145252) |

### 🟠 P1 — 主要功能受损 / 内存与崩溃

| Issue | 标题 | 修复 PR | 链接 |
|---|---|---|---|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server `initialize` 30s 超时导致 Gateway 全量崩溃（`service child cleanup identity lost`） | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/144911) |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 350MB → 15.5GB，OOM 循环 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/91588) |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 → zombie 累积 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/97616) |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | `2026.9.4` regression：同 session 第二次 run 替换 in-flight turn 时 reply 丢失（`no active tool authority snapshot`） | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/148707) |
| [#148529](https://github.com/openclaw/openclaw/issues/148529) | `2026.9.4` Gateway 在 632-agent fleet 启动耗时约 12 分钟（2026.7.1-2 为 ~2 秒） | [#150354](https://github.com/openclaw/openclaw/pull/150354)、[#150223](https://github.com/openclaw/openclaw/pull/150223) | [Issue](https://github.com/openclaw/openclaw/issues/148529) |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | `context-overflow-midturn-precheck` 估算过高（~2.3–2.6×），错误触发截断恢复 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/101929) |
| [#134925](https://github.com/openclaw/openclaw/issues/134925) | ARM64/Raspberry Pi：Gateway 主线程每次 agent turn 满 ~100% CPU | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/134925) |
| [#118839](https://github.com/openclaw/openclaw/issues/118839) | `restart recovery claim changed before agent adoption` 在 `2026.7.2-beta.7` 复发 | 待跟进 | [Issue](https://github.com/openclaw/openclaw/issues/118839) |

### 🟡 P2 — 行为/UX 异常

| Issue | 标题 | 链接 |
|---|---|---|
| [#111897](https://github.com/openclaw/openclaw/issues/111897) | 同 lane 并发重复/冗余回复 | [Issue](https://github.com/openclaw/openclaw/issues/111897) |
| [#146004](https://github.com/openclaw/openclaw/issues/146004) | 子代理完成触发无 channel 的 dashboard 心跳 turn（`2026.9.3` 回归） | [Issue](https://github.com/openclaw/openclaw/issues/146004) |
| [#143278](https://github.com/openclaw/openclaw/issues/143278) | 心跳内部输出泄漏到 Telegram 用户聊天（`2026.9.3`） | [Issue](https://github.com/openclaw/openclaw/issues/143278) |
| [#143632](https://github.com/openclaw/openclaw/issues/143632) | 入站 iMessage 在 session context 中重复投递 2–3 次（去重未生效，body 含序列化 envelope） | [Issue](https://github.com/openclaw/openclaw/issues/143632) |
| [#143632](https://github.com/openclaw/openclaw/issues/143632)、[#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core：reindex 锁每启即持有，索引不可重建，19 GB 孤立 temp DB 堆积 | [Issue](https://github.com/openclaw/openclaw/issues/136311) |
| [#138409](https://github.com/openclaw/openclaw/issues/138409) | `gateway-active-work` 将 controller session 计为 blocker，插件更新时死锁 | [Issue](https://github.com/openclaw/openclaw/issues/138409) |
| [#123009](https://github.com/openclaw/openclaw/issues/123009) | 原生 Codex 订阅每 5 分钟重检仍被持续封锁 | [Issue](https://github.com/openclaw/openclaw/issues/123009) |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | memory 文件 watcher 永不重索引；`memory status` 谎报 `Dirty: no` | [Issue](https://github.com/openclaw/openclaw/issues/119411) |
| [#137729](https://github.com/openclaw/openclaw/issues/137729) | 转录回放/错误分类

---

## 横向生态对比

# 个人 AI 助手与智能体开源生态横向对比分析报告
**报告日期：2026-09-17** | **覆盖项目：13 个** | **数据窗口：过去 24 小时**

---

## 1. 生态全景

2026 年 9 月中旬，个人 AI 助手/自主智能体开源生态呈现**"高活跃、强分化、聚焦稳定性与多 Agent 编排"**的整体态势：以 OpenClaw、ZeroClaw、CoPaw 为代表的旗舰项目持续吸收主要社区流量（单日 500/50/24 条 Issue 更新），NanoBot、NanoClaw、Hermes Agent 处于密集打磨期，而 PicoClaw、NullClaw、TinyClaw、ZeptoClaw、IronClaw 则进入维护静默期。**所有 13 个项目今日均无新版本发布**，反映出当前行业普遍处于"积压收敛 + 架构重构 + 升级周期治理"的节奏中，技术焦点从"功能扩展"向**记忆子系统解耦、Gateway 资源生命周期、MCP 可靠性、跨平台升级原子化、Provider 协议兼容**等基础设施层下沉，预示下一轮版本发布将围绕这些"卡点"集中爆发。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | Release | 待合并 PR | 合并/关闭 PR | 健康度 | 阶段定位 |
|---|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (330 新/活跃 + 170 关闭) | 500 (286 待 + 214 闭) | 0 | 286 | 214 | ⭐⭐⭐⭐⭐ | 高压稳定期 / 旗舰标杆 |
| **ZeroClaw** | 50 | 50 | 0 | 48 | 2 | ⭐⭐⭐☆☆ | 架构收敛期 / RFC 密集 |
| **Hermes Agent** | 50 (33+17) | 50 (44+6) | 0 | 44 | 6 | ⭐⭐⭐⭐☆ | 多线 Bug 修复 + 平台加固 |
| **CoPaw** | 24 (15+9) | 37 (25+12) | 0 | 25 | 12 | ⭐⭐⭐⭐☆ | 快速迭代 / 2.2.x 冲刺 |
| **NanoClaw** | 2 | 34 (25+9) | 0 | 25 | 9 | ⭐⭐⭐⭐☆ | 高强度治理 / 网关冲刺 |
| **NanoBot** | 3 | 20 (16+4) | 0 | 16 | 4 | ⭐⭐⭐⭐☆ | 密集打磨 / 修复导向 |
| **LobsterAI** | 9 (0 新 + 9 关闭) | 18 (15 关闭 + 3 合并) | 0 | 0 | 18 | ⭐⭐⭐☆☆ | Stale 清理 + 核心维护 |
| **Moltis** | 2 (1 新 + 1 关闭) | 3 (2 待 + 1 关闭) | 0 | 2 | 1 | ⭐⭐⭐☆☆ | 中等偏低 / 工程内功 |
| **PicoClaw** | 1 | 3 (1 待 + 2 stale 关闭) | 0 | 1 | 2 | ⭐☆☆☆☆ | 维护静默期 |
| **NullClaw** | 1 (关闭) | 0 | 0 | 0 | 0 | ☆☆☆☆ | 静态 / 零活跃 |
| **IronClaw** | 0 | 0 | 0 | 0 | 0 | — | 无活动 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 0 | — | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | 0 | — | 无活动 |

**汇总指标**：13 个项目累计 640+ 条 Issue 更新、715+ 条 PR 更新、0 个新版本发布；PR 待合并总数约 **447 条**，其中 OpenClaw 占 64%。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与流量

OpenClaw 单日 Issue/PR 更新量（500+500）相当于 **Hermes Agent 与 ZeroClaw 之和**（100+100），是 CoPaw 的 5 倍（24+37）、NanoBot 的 12 倍（3+20）。从 PR 待合并队列看，OpenClaw（286 条）超过 CoPaw、ZeroClaw、NanoClaw、NanoBot 四者之和（114 条），社区规模优势显著。

### 3.2 技术路线差异

| 维度 | OpenClaw | 同类项目（CoPaw / ZeroClaw / NanoClaw） |
|---|---|---|
| **核心抽象** | Gateway + Memory-core + MCP + 多 Provider | 类似（CoPaw），或更聚焦（ZeroClaw 主打 ZeroCode） |
| **多 Agent 模型** | `agents.ownership: "explicit"` + logbook + 子代理 | CoPaw 主打 Hub 多租户；ZeroClaw 引入 Goal Mode |
| **更新机制** | 完整 Doctor/Snapshot/Migration/Rollback 链路 | NanoClaw 仅 pnpm fallback；Hermes Agent stage-and-swap 仍有锁问题 |
| **记忆系统** | memory-core（独立子系统）+ watcher + reindex | ZeroClaw 正在 RFC 解耦；NanoBot 仅基础 consolidation |
| **桌面端** | WebUI + Control UI 双形态 | CoPaw、ZeroClaw 均强调桌面端；Hermes Agent 桌面更新是 P2 痛点 |
| **安全边界** | 显式 OAuth token 隔离、Anthropic fallback 限制 | 类似（CoPaw shell 逃逸；Hermes auth.json 黑名单） |

### 3.3 社区成熟度对比

OpenClaw 的社区已形成**多角色生态**：核心维护者 + `roboclaw-bot` 协调追踪 + 协调追踪 Issue（#145252）+ 大量 P0/P1/P2 分级体系 + 跨平台（Windows/macOS/Linux/ARM64）覆盖；同类项目多数仍处于"核心维护者单打独斗"或"社区贡献被 stale 误杀"的状态（如 PicoClaw、LobsterAI）。

---

## 4. 共同关注的技术方向

下列议题在**至少 3 个项目**中以不同形态出现，构成行业共性技术债务：

| # | 议题方向 | 涉及项目 | 代表性诉求 |
|---|---|---|---|
| 1 | **Gateway / 进程生命周期与资源回收** | OpenClaw、NanoClaw、CoPaw、ZeroClaw | OpenClaw zombie 累积 + 内存泄漏 350MB→15.5GB；NanoClaw Bun spawnSync 6h 挂死；CoPaw 三路径叠加 OOM；ZeroClaw daemon 跨平台启动失败 |
| 2 | **多 Agent 路由与 ownership 边界** | OpenClaw、NanoBot、CoPaw、LobsterAI | OpenClaw `AgentSelectionRequiredError` 刷屏；NanoBot 跨 session 消息错投；CoPaw subAgent 100% timeout；LobsterAI IM 并发重复 session |
| 3 | **MCP（Model Context Protocol）可靠性** | OpenClaw、Hermes Agent、Moltis | OpenClaw stdio MCP 30s 超时全 Gateway 崩溃；Hermes `ToolListChanged` 不可见；Moltis 远程 MCP 启动失败永不重试 |
| 4 | **记忆子系统架构与持久化** | OpenClaw、ZeroClaw、NanoBot | OpenClaw memory watcher 不重索引、19GB 孤立 temp DB；ZeroClaw RFC #6850/#9048/#9103 三线讨论解耦；NanoBot consolidation 丢失回退字符 |
| 5 | **Windows 平台稳定性与升级原子性** | OpenClaw、Hermes Agent、ZeroClaw | OpenClaw Windows 升级 mkdir 失败 + SQLite check 超时；Hermes Agent "升级即 GUI 崩溃"成为 Windows 用户最大恐惧；ZeroClaw Task Scheduler 启动 daemon 失败 |
| 6 | **Provider 多协议兼容与缓存透传** | OpenClaw、ZeroClaw、NanoBot | OpenClaw Anthropic `UND_ERR_SOCKET` 静默回退；ZeroClaw PR #10623 Anthropic prompt-cache 透传；NanoBot OpenAI 兼容 stream 字段非严格布尔 |
| 7 | **Cron 调度正确性与告警去噪** | NanoBot、Hermes Agent、LobsterAI | NanoBot cron 字段并存/过去时间/at 三连发 Bug；Hermes 重复失败告警；LobsterAI pollOnce 无重入保护 |
| 8 | **CI 资源保护与超时兜底** | NanoClaw、NanoBot | NanoClaw registry-skills 挂死 6h → 20min 上限 + async spawn；NanoBot SSRF proxy 测试在 macOS/Windows 代理环境脆弱 |
| 9 | **安全边界与凭证隔离** | OpenClaw、Hermes Agent、CoPaw | OpenClaw OAuth token 直打 embeddings（已修）；Hermes auth.json 写入黑名单 + secret_capture 面板；CoPaw shell 逃逸 7 项检查默认开启 |
| 10 | **会话历史/搜索可检索性** | LobsterAI、CoPaw | LobsterAI 仅匹配标题 → PR #1125 全文搜索 + 高亮；CoPaw 多 session 路由失序 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 助手 + 多 Agent + 跨平台桌面 | 高级个人用户 / 小团队 / 跨平台开发者 | Gateway + Memory-core + Doctor/Snapshot/迁移链路；`agents.ownership: explicit` 模型 |
| **ZeroClaw** | 架构严谨性 + RFC 驱动 + 多入口（CLI/TUI/Task Scheduler） | 重视设计一致性的工程团队 | 显式 Memory trait 三层解耦（存储/整合/治理）；Goal Mode v1/v2/v3 三阶段规划 |
| **Hermes Agent** | 桌面端 + 多平台适配器（Feishu/Weixin） | 中国/亚洲 IM 重度用户 + 桌面开发者 | Hermes 桌面壳 + per-turn 鉴权头 + lark-oapi 1.7.3 锁定 |
| **CoPaw** | Hub 多租户 + QwenPaw 生态 + Console UX | 企业/团队协作 + 多用户管理 | Hub 模型网关 + 成员治理 + 用量仪表板；Workbench 外壳重构 |
| **NanoClaw** | 可替换网关（Iron Proxy）+ setup 健壮性 | 运维/部署敏感型用户 | OneCLI 默认 + Iron Proxy 可选；setup.sh 多发行版 fallback |
| **NanoBot** | 多 Provider + cron/工具链 + TUI 体验 | 中小团队 / CLI 重度用户 | TUI 有界 FIFO 批量；per-session 消息序列化 |
| **LobsterAI** | OpenClaw 生态配套 + IM 集成 + Skills | 网易有道用户 + 中文用户 | OpenClaw 修复/迁移链路加固；钉钉/IM 路由 |
| **Moltis** | 沙箱安全 + 构建性能 + Hermes 风格命令 | 安全敏感型企业部署 | per-agent 沙箱强制；BuildKit cargo cache mounts |
| **PicoClaw** | 轻量 + Telegram 优先 + 远程配对（gbr/1） | 移动端 / 远程控制需求 | 极简架构 + 自定义协议 gbr/1 |
| **NullClaw** | 探索性（litter 移动 GUI fork） | — | 几乎无代码活动 |

---

## 6. 社区热度与成熟度分层

### 🟢 第一梯队：大规模旗舰（快速迭代 + 复杂协调）
- **OpenClaw**：500 Issue + 500 PR/日，治理体系最完整，瓶颈在升级链路与 Gateway 资源
- **ZeroClaw**：50 Issue + 50 PR/日，**设计收敛期**，RFC 密集（4 条记忆 + 3 条 Goal Mode），决策队列（#8692）需流程化

### 🟡 第二梯队：中高活跃 / 密集打磨（质量巩固阶段）
- **Hermes Agent**：50 Issue + 50 PR/日，但**合并率仅 12%**（6/50），大量平台加固 PR 待评审；安全 PR 密度显著上升

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-17

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) | 采样窗口：过去 24 小时

---

## 1. 今日速览

NanoBot 今日处于**高活跃、强修复导向**的状态：过去 24 小时有 20 个 PR 更新、3 个 Issue 更新，其中 4 个 PR 已关闭，但 16 个 PR 仍在排队等待合并，重点集中在 **Bug 修复与稳定性加固**（约 65% 的 PR 与 bug/回归相关）。多笔 PR 标注为 `priority: p1/p2`，且涉及会话路由、cron 调度、provider failover、工具编辑等多个核心路径，说明项目正处于一个**密集打磨阶段**。无新版本发布，整体健康度良好，社区贡献节奏稳定。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一次发版已过去较长时间，结合今日合并的修复密度，社区有可能在近期（例如本周内）发布 patch 版本（v0.x.y 修订），建议关注 release 页面：[HKUDS/nanobot Releases](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展

今日合并/关闭 4 个 PR，覆盖**前端、测试基础设施、文档与代码质量**四个方向：

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#5789](https://github.com/HKUDS/nanobot/pull/5789) | docs: refresh README WebUI screenshots | 文档 | 刷新 README 中的 WebUI 截图，覆盖新主题、多窗格工作台、MCP 目录、Automations 日历等新功能视图，对新用户理解项目能力有直接帮助 |
| [#5791](https://github.com/HKUDS/nanobot/pull/5791) | fix(tui): keep input responsive during agent output | Bug / 性能 | 以有界 FIFO 批量方式排空网关输出，避免在 Agent 输出期间 TUI 输入回调被饿死，是 TUI 体验的重要修复 |
| [#5756](https://github.com/HKUDS/nanobot/pull/5756) | test(security): keep proxy-clearing fixtures hermetic on hosts with OS-level proxies | 安全测试 | 修复 SSRF/proxy 测试在 Windows 注册表或 macOS SystemConfiguration 配置系统代理下的脆弱性，提升跨平台 CI 稳定性 |
| [#2595](https://github.com/HKUDS/nanobot/pull/2595) | refactor: rename tool progress text variable for clarity | 重构（因冲突关闭） | 关闭原因是合并冲突，说明主干已有更大变更，需要重新 rebase |

**总体推进评估：** 项目在**会话路由可靠性、TUI 响应性、安全测试可重复性、文档完整性**四个维度都有实质推进；今日的合并使前端与基础设施质量明显提升，但底层 bug 修复仍在累积中（见第 5 节）。

---

## 4. 社区热点

今日互动量最高的 Issue 是长期悬而未决的 **#4419**：

- **[#4419](https://github.com/HKUDS/nanobot/issues/4419)** — *Feature: Automatic reasoning effort escalation* — 创建于 2026-06-20，已积累 **5 条评论**。诉求是希望 NanoBot 支持 reasoning 模型的「自动思考深度」机制（默认 + 升级），呼应 OpenAI o 系列、Anthropic extended thinking 等主流推理模型对 `reasoning_effort` 的支持。该 Issue 提出已有近 3 个月，**仍未被合并或正式拒绝**，需要维护者给出明确答复。

- **[#5731](https://github.com/HKUDS/nanobot/issues/5731)** — *Add AnySearch extract as a web_fetch backend* — 由 AnySearch 团队提出，希望将其搜索能力作为 `web_fetch` 的可选后端（key 可选、匿名配额）。这是典型的**第三方集成诉求**，与之前 #5505 已建立的集成通道一脉相承。

- **[#5790](https://github.com/HKUDS/nanobot/issues/5790)** — *代码仓库*（已关闭）— 中文用户请求代码仓库邀请链接，已被快速关闭。

**诉求分析：** 社区的关注点正从「功能丰富度」转向「推理质量与第三方工具集成」，反映用户群体已从早期尝鲜进入**深度使用阶段**。

---

## 5. Bug 与稳定性

今日聚焦的是**会话路由与编辑工具**两个高危区域。以下按严重程度排列：

### 🔴 P1（高严重度）
| PR | 问题 | 状态 |
|---|---|---|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | **fix(agent): serialize and batch per-session messages** — 修复多 session 并发时父子回合未串行化、消息快照被截断等问题。 | 已开 PR，无 fix PR 编号冲突 |
| [#5794](https://github.com/HKUDS/nanobot/pull/5794) | **fix: cross-session response delivery in agent loop** — 用户在 Session A 发消息后立刻切到 Session B，A 的响应可能错投到 B。 | 同源根因（session 派发顺序） |

> 这两个 PR 高度相关，根因都在 `agent loop` 的 `_dispatch` 路径，建议合并时一同 review，避免重复修改同一文件。

### 🟠 P2（中等严重度，按子系统分组）
**工具（tools）类：**
- [#5796](https://github.com/HKUDS/nanobot/pull/5796) — `edit_file` 在行内替换中剥离分隔空白，可能连接相邻 token 改变语义
- [#5795](https://github.com/HKUDS/nanobot/pull/5795) — `edit_file` 退路匹配丢失缩进并插入多余空行
- [#5793](https://github.com/HKUDS/nanobot/pull/5793) — `list_dir` 递归时若根目录或父目录名为 `build`/`dist` 等，会错误隐藏内容

**Cron 调度类（三连发）：**
- [#5766](https://github.com/HKUDS/nanobot/pull/5766) — `cron` 工具接受 `every_seconds`/`cron_expr`/`at` 多字段并存但只取首个，静默丢弃其余字段
- [#5762](https://github.com/HKUDS/nanobot/pull/5762) — `cron` 接受过去的 `at` 时间但作业永远不触发，`next_run_at_ms=None` 致 timer 漏选

**Provider/网关类：**
- [#5765](https://github.com/HKUDS/nanobot/pull/5765) — OpenAI 兼容 `stream` 字段非严格布尔判断，`"false"` 也会开启 SSE
- [#5769](https://github.com/HKUDS/nanobot/pull/5769) — NIM 风格的 `RuntimeError("timed out after 300s")` 未触发 fallback
- [#5764](https://github.com/HKUDS/nanobot/pull/5764) — 主 provider 冷却结束后并发请求可能一起打到尚未恢复的主 provider
- [#5797](https://github.com/HKUDS/nanobot/pull/5797) — Parallel MCP 集成未带 `nanobot/<version>` User-Agent，影响平台侧使用统计

**子 Agent：**
- [#5152](https://github.com/HKUDS/nanobot/pull/5152) — 子 Agent 部分完成结果未标记，父回合长期挂起

**记忆与安全：**
- [#5379](https://github.com/HKUDS/nanobot/pull/5379) — memory consolidation 在切分 `history.jsonl` 时丢失原始回退字符
- [#5652](https://github.com/HKUDS/nanobot/pull/5652) — gateway 新增签名 webhook，绕过 agent loop 直接投递终态通知（功能叠加安全）

**观察：** 多个 PR 来自同一位贡献者（FanouZeng-TT 在 cron/API 上连发 3 个、KailBug 在 edit_file 上连发 2 个），说明**测试驱动发现了一类系统性缺陷**，亟需合并以稳定整体质量。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 当前进展 | 进入下一版本的概率 |
|---|---|---|---|
| OpenRouter 原生图像生成 API | [#5718](https://github.com/HKUDS/nanobot/pull/5718) | PR 已开，覆盖更多模型与 provider | ⭐⭐⭐⭐ 高 |
| Langfuse tracing for Codex | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | PR 已开，针对 Codex 独特的 httpx+OAuth 传输 | ⭐⭐⭐⭐ 高 |
| Signed direct delivery webhook | [#5652](https://github.com/HKUDS/nanobot/pull/5652) | PR 已开，CI/监控/计费等可信系统集成场景 | ⭐⭐⭐ 中 |
| AnySearch 作为 `web_fetch` 后端 | [#5731](https://github.com/HKUDS/nanobot/issues/5731) | 仅为 Issue 提案 | ⭐⭐⭐ 中 |
| 自动 reasoning effort 升级机制 | [#4419](https://github.com/HKUDS/nanobot/issues/4419) | 仅讨论，无 PR | ⭐⭐ 视维护者倾向 |
| Parallel MCP User-Agent 标识 | [#5797](https://github.com/HKUDS/nanobot/pull/5797) | PR 已开 | ⭐⭐⭐⭐⭐ 几乎必合并 |

**信号解读：** 项目路线图明显在向**多 Provider 适配、可观测性、企业级集成**方向延伸；图像生成、可观测性 tracing、Webhook 这三块已有 PR 落地，预计将成为近期版本的主要新特性。

---

## 7. 用户反馈摘要

由于今日 3 个 Issue 中只有 1 个获得超过 1 条评论（#4419 有 5 条），社区声音相对收敛，但可提取如下痛点：

- **多 session 错乱（#5794 反映场景）：** 用户在 A 会话发消息后切到 B 会话，A 的回复错投到 B —— 这是 Agent loop 并发模型的 UX 杀手，会显著降低用户对多任务并行工作的信任。
- **TUI 输入卡顿（#5791 反映场景）：** 在 Agent 长输出过程中，用户输入反馈不及时，影响交互节奏。
- **Reasoning 模型深度控制缺位（#4419）：** 进阶用户希望系统能在"轻量答复"和"深度推理"之间自动升级，但目前必须人工配置。
- **#5790 中文用户请求：** 表明项目已开始吸引中文开发者社区，文档/沟通渠道的双语化需求可能上升。

---

## 8. 待处理积压

以下是**最值得关注、却长期未推进**的条目：

| 编号 | 类型 | 标题 | 创建日期 | 待办 |
|---|---|---|---|---|
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Feature | Automatic reasoning effort escalation | 2026-06-20 | **悬而未决 89 天**，5 条评论无 maintainer 答复，建议尽快给出路线图或转为 RFC |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | PR (regression fix) | mark partial completion results | 2026-07-28 | 等待合并约 50 天，子 Agent 挂起问题持续 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR (memory fix) | preserve full consolidation input | 2026-08-13 | 等待合并约 35 天，长会话记忆累积风险持续 |
| [#2595](https://github.com/HKUDS/nanobot/pull/2595) | PR (refactor) | rename tool progress text variable | 2026-03-28 | **已被关闭（冲突）**，作者需要 rebase 后重开 |

**对维护者的提醒：**
1. 今日新开 PR 中，**#5792（P1）和 #5794** 是同一根因族，建议安排优先 review 与合并；
2. [#5797](https://github.com/HKUDS/nanobot/pull/5797) 是来自 Parallel 集成方的标准协作请求，合并门槛低，建议快速 ack；
3. [#4419](https://github.com/HKUDS/nanobot/issues/4419) 已挂起近 3 个月，无论是接受、拒绝还是转化为 RFC，都建议给出正式结论，避免 Issue 无限期积压影响社区信心。

---

*报告生成时间：2026-09-17 · 数据驱动 · 仅基于公开 GitHub 数据*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-17**

---

## 1. 今日速览

Hermes Agent 今日进入高强度迭代节奏，过去 24 小时共触发 **50 条 Issue 更新**（新开/活跃 33 条、关闭 17 条）与 **50 条 PR 更新**（待合并 44 条、合并/关闭 6 条），但**今日无新版本发布**。社区议题高度集中在三类问题上：**Windows 平台稳定性**（桌面端更新导致 GUI 崩溃、CUDA 兜底失败）、**网关与平台适配器健壮性**（Feishu WS 静默失活、taskkill 误杀、Weixin 多媒体投递丢失）、以及 **CLI/配置层 UX 缺陷**（`config set` 静默写入字面量字符串、`config get` 出现幻影键）。整体看，项目处于"多线 Bug 修复 + 平台加固"并行的运营阶段，健康度中等偏上，**安全相关 PR（auth store 写入拦截、密钥捕获面板化）正陆续落地**。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近一次发布信息未在数据中提供，建议关注 NousResearch/hermes-agent Releases 页面。

---

## 3. 项目进展

今日有 **6 个 PR 合并/关闭**，并有多个高价值 PR 进入待审/活跃状态，显著推进了平台兼容性与安全边界。

| PR | 标题 | 类型 | 意义 |
|---|---|---|---|
| [#113122](https://github.com/NousResearch/hermes-agent/pull/113122) | Feishu/Lark 机器人重新接收 WebSocket 事件：lark-oapi 锁定 1.7.3 | bug fix (P2) | 修复飞书机器人"静默忽略所有消息"的长期顽疾，**整合了 #103980 与 #78268 的修复成果**，社区多运营者已验证可用 |
| [#113686](https://github.com/NousResearch/hermes-agent/pull/113686) | cron: 抑制重复失败告警 | bug fix (P2) | 解决 cron 失败任务每次运行都重复推送同一告警的问题，运营侧噪音显著下降 |
| [#113685](https://github.com/NousResearch/hermes-agent/pull/113685) | cron: 每个失败事件仅告警一次 | bug fix (P2) | 与 #113686 平行 PR（`whyyagswhy` 提交），同方向修复，**两者竞争或需协调** |
| [#108727](https://github.com/NousResearch/hermes-agent/pull/108727) | 安全：拒绝 file-tool 写入 Hermes auth 凭证库 | security (P3) | 把 `auth.json` 加入既有的精确路径写黑名单，**关闭了一个凭证提权路径** |
| [#113652](https://github.com/NousResearch/hermes-agent/pull/113652) | 修复：把 agent 捕获的密钥保留在 chat 与 argv 之外 | feature/security (P3) | 引入 `secret_capture` 工具，所有 API Key/Token/Password 通过掩码面板流转，**显著降低密钥泄露面** |
| [#113134](https://github.com/NousResearch/hermes-agent/pull/113134) | 修复 npm 漏洞（browserslist、baseline-browser-mapping、colord、sanitize-html、vitest） | security (P3) | 清空 `hermes doctor` 报告的两条 npm 漏洞警告（root + web 工作区） |
| [#110169](https://github.com/NousResearch/hermes-agent/pull/110169) | 添加巴西葡萄牙语（pt-BR）本地化 | feature/i18n | 已关闭，标记为 duplicate |

**待合并的高价值 PR**（仍 open）：
- [#113047](https://github.com/NousResearch/hermes-agent/pull/113047) – 受信任 MCP 调用的按 turn 鉴权头，避免 Bearer 出现在模型可见参数与会话历史
- [#111505](https://github.com/NousResearch/hermes-agent/pull/111505) – Codex 跨流式 item ID 轮转时保留函数调用参数（GitHub Copilot Responses 实测）
- [#107031](https://github.com/NousResearch/hermes-agent/pull/107031) – Windows 桌面端首 turn `prompt.submit` 在存在"无法证伪的兄弟会话租约"时保留桌面会话主张
- [#113111](https://github.com/NousResearch/hermes-agent/pull/113111) – DeepSeek 辅助任务先选 `json_object` 再下发，去除一次确定性的 HTTP 400
- [#108116](https://github.com/NousResearch/hermes-agent/pull/108116) – per-model fast-mode 覆盖，配置层与 reasoning_overrides 对齐
- [#109187](https://github.com/NousResearch/hermes-agent/pull/109187) – Desktop 拖入文件夹即作为工作区打开

**整体推进度评估**：项目在**飞书/微信平台加固、cron 告警去噪、密钥安全边界**三条线上有实质推进，**安全相关 PR 密度明显上升**，是一个偏稳健的迭代日。

---

## 4. 社区热点

| 议题 | 链接 | 评论数 | 关注点 |
|---|---|---|---|
| #94196 Desktop gateway 切换要求 "Save and reconnect" 才能恢复本地后端；ws_orphan_reap 反复断连 | [Issue #94196](https://github.com/NousResearch/hermes-agent/issues/94196) | 10 | **多 profile + Cloud 注册**用户的核心痛点，体现"切换 → 撕裂 → 心跳孤儿"链路 |
| #86565 Desktop 会话点一直蓝色，阻塞审批时不转琥珀色 | [Issue #86565](https://github.com/NousResearch/hermes-agent/issues/86565) | 8 | 状态语义错误：用户无法看到会话在等输入，**影响操作及时性** |
| #113683 每天更新 Linux backend 让 Windows GUI 失效 | [Issue #113683](https://github.com/NousResearch/hermes-agent/issues/113683) | 5 | 跨平台升级流程缺乏原子性，**更新即破坏 GUI 是 P2 体验灾难** |
| #6566 把 base_url 校验扩展到 custom_providers / STT/TTS | [Issue #6566](https://github.com/NousResearch/hermes-agent/issues/6566) | 4 | 自定义提供方配置健壮性，源自 #6551 的后续 |
| #113667 agent 在 gateway 内 `taskkill /F /IM python.exe` 自杀 | [Issue #113667](https://github.com/NousResearch/hermes-agent/issues/113667) | 3 | lifecycle guard 缺少镜像名分支，**自残风险** |
| #113640 Weixin `send_voice()/send_video()` 丢弃 `**kwargs` | [Issue #113640](https://github.com/NousResearch/hermes-agent/issues/113640) | 3 | 微信通道多媒体投递静默失败 |
| #64712 Feishu 适配器在 Lark SDK 重连耗尽后卡死 | [Issue #64712](https://github.com/NousResearch/hermes-agent/issues/64712) | 3 | 与 #113662 同源，预计随 PR #113122 一起被治愈 |

**诉求归纳**：今日讨论最热的并非"想要新功能"，而是**平台工作流断裂**——用户在"切换网关 / 升级 / 等待审批"这些常规动作中遇到**不可预期、不可恢复**的状态错乱，说明产品在多 profile、多网关、跨 OS 升级这些"次要路径"上的工程债正在反噬主线体验。

---

## 5. Bug 与稳定性

按严重程度排序：

### P1（高优）
- **[#107031 (PR)](https://github.com/NousResearch/hermes-agent/pull/107031)** – Windows 桌面端首 turn `prompt.submit` 失败：在存在任何"无法证伪的兄弟会话租约"时抛出"could not safely reserve this session"。已有 fix PR，**待合并**。

### P2（中高）
- **[#94196](https://github.com/NousResearch/hermes-agent/issues/94196)** – Desktop 网关切换撕裂本地后端，需手动 "Save and reconnect"；`ws_orphan_reap` 持续断连。**评论数最高（10），影响面广，目前尚无 fix PR 关联**。
- **[#86565](https://github.com/NousResearch/hermes-agent/issues/86565)** – 会话状态点语义错：阻塞审批时应琥珀色却维持蓝色。**无 fix PR**。
- **[#113683](https://github.com/NousResearch/hermes-agent/issues/113683)** – 升级 Linux backend 后 Windows Web Breaks。**无 fix PR**，用户描述"每次修复方法都不一样"——这是更新器一致性问题。
- **[#113667](https://github.com/NousResearch/hermes-agent/issues/113667)** – agent 在受监管的 gateway 内 `taskkill /F /IM python.exe` 自杀，lifecycle guard 没有镜像名分支。**无 fix PR**。
- **[#113640](https://github.com/NousResearch/hermes-agent/issues/113640)** – Weixin 多媒体静默丢失且 tool 仍报成功。**无 fix PR**。
- **[#113238](https://github.com/NousResearch/hermes-agent/issues/113238)** – Windows 11 上 bundled llama.cpp 在 RTX 4090 Laptop 初始化 CUDA 失败，Qwen 9B 退到 CPU/RAM。**无 fix PR**。
- **[#98005](https://github.com/NousResearch/hermes-agent/issues/98005)** – 渲染端 #38015 已修，但 gateway 侧 `sessions.changed` 仍在 idle mtime 抖动上重复广播，#40433 修复不完整。**有线索，缺新 PR**。
- **[#65428](https://github.com/NousResearch/hermes-agent/issues/65428)** – MCP `ToolListChanged` 在工具循环内不可见，直到下一条用户消息。**无 fix PR**。
- **[#109798](https://github.com/NousResearch/hermes-agent/issues/109798)** – cron 任务调用远程 MCP 工具，**工具列表中途永久消失**（Composio 复现），需 repro。**无 fix PR**。
- **[#100723](https://github.com/NousResearch/hermes-agent/issues/100723)** – Windows 桌面端 WebSocket 重连风暴 → auth.json 文件锁竞争 → Nous OAuth 会话被吊销。**有复现路径，待 repro**。
- **[#64712](https://github.com/NousResearch/hermes-agent/issues/64712) / [#113662](https://github.com/NousResearch/hermes-agent/issues/113662)** – Feishu WS 失活不可检测。**已有 PR #113122 锁定 lark-oapi 1.7.3，预计随版本合入。**
- **[#101878 (Issue, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/101878)** – Windows 上 stage-and-swap 期间 Hermes.exe 文件锁导致更新失败。**已关闭**（伴随修复 commit `1398c0f5ca`）。

### P3（中低 / 已合并）
- **[#112816 (Issue, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/112816)** – TUI gateway inline stdio RPC 处理器无异常保护。**已关闭**。
- **[#112348 (Issue, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/112348)** – `hermes config get` 无法区分"活的"与"幻影"配置键。**已关闭**。
- **[#101878](https://github.com/NousResearch/hermes-agent/issues/101878)** – Windows 桌面 stage-and-swap 锁。**已关闭**。
- **[#112367 (Issue, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/112367)** – `test_delegate_timeout_cleanup` 测试在 main 上确定性红。**已关闭**。
- **[#111770 (Issue, CLOSED)](https://github.com/NousResearch/hermes-agent/issues/111770)** – 不完整 / 部分 turn 被报告为 `completed` exit 0。**已关闭**。
- **[#113683](https://github.com/NousResearch/hermes-agent/issues/113683)** – cron 重复告警。**已有 PR #113686 / #113685 双线修复**。
- **[#107650 (PR, open)](https://github.com/NousResearch/hermes-agent/pull/107650)** – Desktop 插件页面 header 行残留文案 + profile 下拉溢出窗口。**待合并**。
- **[#107848 (PR, open)](https://github.com/NousResearch/hermes-agent/pull/107848)** – Desktop 在 `tool.start` 与 `clarify.request` 赛跑时澄清问题卡在 spinner。**待合并**。

**稳定性观察**：今日关闭的 Issue 中，**至少 4 个是配置/CLI 层的"沉默错"**（写错、读错、提示错），它们单独看是 P3，但叠加起来是**用户对 CLI 信任度的持续磨损**。Windows + cron + 飞书/微信是今日"三联脆弱带"。

---

## 6. 功能请求与路线图信号

- **[#6566](https://github.com/NousResearch/hermes-agent/issues/6566)** – 把 `validate_base_url()` 扩展到 `custom_providers` / STT / TTS 配置节。**已有 `validate_base_url()` 中心化函数，顺手做即可**，建议下个版本纳入。
- **[#108116 (PR)](https://github.com/NousResearch/hermes-agent/pull/108116)** – per-model fast-mode 覆盖。**对标 reasoning_overrides 的同款工程范式**，社区会欢迎。
- **[#108553 (PR)](https://github.com/NousResearch/hermes-agent/pull/108553)** – 可贡献的 welcome 草稿区。**降低第三方贡献摩擦**，利好生态。
- **[#109187 (PR)](https://github.com/NousResearch/hermes-agent/pull/109187)** – Desktop 拖入文件夹即打开为工作区。**桌面端 UX 补全**，等待合并。
- **[#113652 (PR)](https://github.com/NousResearch/hermes-agent/pull/113652)** – 密钥捕获面板化 + 工具化（`secret_capture`）。**与 #108727 共同构成"密钥安全"主旋律**，强烈建议下个版本一并发布。
- **[#113047 (PR)](https://github.com/NousResearch/hermes-agent/pull/113047)** – 每 turn 鉴权头（trusted MCP）。**企业场景刚需**。
- **[#113042 (PR, CLOSED)](https://github.com/NousResearch/hermes-agent/pull/113042)** – `email-archive-research` 与 `vendor-spec-email` 两个 skill。**Skills 生态扩展**，已关闭状态不明，建议跟踪是否合入。
- **[#110169 (PR, CLOSED)](https://github.com/NousResearch/hermes-agent/pull/110169)** – pt-BR 本地化。**已关闭为 duplicate**，i18n 流程可能需要规范化。

**路线图信号**：项目正在往"**安全优先 + 平台加固 + Skills 生态**"三线并进。**Windows 桌面端的更新体验**与**飞书/微信多平台一致性**有望成为下个版本的主轴。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

1. **"升级即崩溃"是 Windows 用户最大的恐惧**（#113683、#100723、#101878）：
   > "Every time I update the backend GUI. the Windows Web Breaks. I keep trying different things and eventually it works, but its different things ever time."
   反映出**更新器的回滚路径不统一**，用户被迫自行 hack。

2. **状态语义失真让用户"看不到自己在等什么"**（#86565、#98005）：
   > "the session's status dot

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-09-17
**数据周期**: 过去 24 小时

---

## 1. 今日速览

PicoClaw 今日活跃度处于**较低水平**，过去 24 小时仅有 1 条 Issue 和 3 条 PR 发生状态变更，且**所有变更条目均带有 `[stale]` 标记**，表明这些项目长时间未获作者回复或维护者跟进，被仓库的 stale 机器人自动处理。在变更的 4 条记录中，3 条已被关闭（1 Issue + 2 PR），仅 1 条 PR 仍保持 OPEN 状态。**无新版本发布**，社区贡献节奏明显放缓，项目可能进入了一个相对沉寂的维护期。

---

## 2. 版本发布

️ **今日无新版本发布。**

建议关注主分支提交动态和 Releases 页面，确认是否有尚未标记的发版计划。

---

## 3. 项目进展

今日共有 **2 条 PR 被关闭**（均带 stale 标记，非主动合并）：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | fix(telegram): 将对机器人自身消息的回复视为隐式提及 | CLOSED (stale) |  关闭非合并 |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | fix(telegram): 在回复文件消息时重新附加引用的文档 | CLOSED (stale) | 🟡 关闭非合并 |

**分析**：这两条 PR 均由贡献者 `hugodeco` 在 2026-09-01 提交，专门修复 Telegram 渠道的两个可用性问题——群组回复识别与文档附件传递。它们的内容质量较高且针对性强，但因作者未在 stale 阈值内回应而被关闭，**并非代码质量问题被驳回**。维护者若认为这些修复有价值，可考虑直接 reopen 并推进合并，以免社区贡献流失。

---

## 4. 社区热点

由于今日所有条目均带有 `stale` 标记，**实际互动度极低**——评论数几乎为零，无新增点赞。值得关注的是昨日（2026-09-16）的更新批次：

- **Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343)** — 4 条评论（已关闭）。该 Issue 报告了一个比较严重的 Telegram 工具反馈动画失控问题，引发了短暂的讨论。
- **PR [#3344](https://github.com/sipeed/picoclaw/pull/3344)** — 仍保持 OPEN，提议新增 Build Remote Agent 手机配对协议（`gbr/1`）。

**诉求分析**：社区目前的关注点集中在 **Telegram 渠道稳定性** 和 **多端/远程控制能力** 两条线上，但因维护响应节奏放缓，相关讨论并未形成有效闭环。

---

## 5. Bug 与稳定性

###  已关闭 Issue（严重程度评估）

**[#3343 — Tool feedback animation 可在 turn 失败后无限编辑 Telegram 消息](https://github.com/sipeed/picoclaw/issues/3343)**
- **报告者**: @raine | **创建**: 2026-08-22 | **关闭**: 2026-09-16（stale 自动关闭）
- **严重程度**: 🔴 **高** — 涉及 Telegram 服务端限流与潜在账号风控
- **问题概述**:
  - 在一次 agent turn 失败后，工具反馈动画仍持续每 3 秒调用一次 `editMessageText`
  - 在数天内累计产生 **超过 228,000 次** 编辑尝试
  - 触发 Telegram 服务端 `retry_after` 限流
- **Fix PR**: ❌ 无关联修复 PR
- **建议**: 该 Bug 因 stale 机制被自动关闭，存在潜在风险。**维护者应主动 reopen 并优先修复**，否则任何 Telegram 部署都可能受到限流波及。

### 🟡 已关闭 PR（潜在的修复方案流失）

| PR | 修复内容 | 状态 |
|---|---|---|
| [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Telegram 群组中对机器人消息的回复应被识别为隐式 @ 提及 | CLOSED (stale) |
| [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Telegram 回复文件消息时丢失文档附件 | CLOSED (stale) |

两条修复均为 Telegram 渠道功能缺陷，但因 stale 被关闭，建议维护者评估后恢复。

---

## 6. 功能请求与路线图信号

### 仍 OPEN 的 PR — 远程代理配对

**[#3344 — 新增 Build Remote Agent 手机配对（gbr/1）](https://github.com/sipeed/picoclaw/pull/3344)**
- **作者**: @LinespottingPrivate | **创建**: 2026-08-23 | **状态**: OPEN (stale)
- **核心内容**:
  - 引入 **Build Remote Agent** 配对设备适配器，允许手机 spectate 桌面 agent
  - 自定义协议 `gbr/1`
  - 依赖 MIT 协议的 `gbr-agent` v0.6.0+，通过 `pair`（QR + 8 位码）和 `run` 命令工作
  - 仅绑定 `http://127.0.0.1:8788` 或 stdio，强调安全边界

**路线图信号判断**：
- 该 PR 引入了**第三种配对协议**（与现有协议并列），架构上有扩展性
- 若维护者认可 `gbr/1` 作为新的远程控制协议方向，可能在下一版本中合并
- 但目前 PR 已 stale，**需要作者或维护者主动推进**才能进入评审流程
- 总体来看，PicoClaw 的远程化与多端协同正在成为社区关注的功能方向

---

## 7. 用户反馈摘要

由于今日几乎无新增评论，仅 Issue #3343 在昨日（2026-09-16）有 4 条讨论记录：

- 🐛 **真实痛点**：Telegram 渠道的"无终止重试"机制会导致严重的资源浪费（228K+ 调用）和被服务端风控的风险。这反映出 **agent 取消/中止状态在 Telegram 适配层未正确传播**。
- ⚠️ **稳定性焦虑**：当一个看似无害的"loading 动画"功能引发限流时，暴露了缺乏超时和上限保护的隐患，用户对生产环境部署的信心可能受影响。
- 💬 **使用场景**：该 Issue 的报告者明确在生产场景使用 PicoClaw 的 Telegram 集成，**说明该项目已有真实生产用户**，而非仅是 demo 项目。

---

## 8. 待处理积压

以下是因 stale 机制被关闭但**值得维护者主动复查**的条目：

| 类型 | 编号 | 标题 | 当前状态 | 建议动作 |
|---|---|---|---|---|
| 🐛 Bug | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation 无限编辑 | CLOSED (stale) | 🔥 **优先 reopen 并修复** |
|  Fix PR | [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Telegram 隐式提及识别 | CLOSED (stale) | 评估后 reopen / 合并 |
|  Fix PR | [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Telegram 文档引用恢复 | CLOSED (stale) | 评估后 reopen / 合并 |
| ✨ Feature PR | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | gbr/1 远程配对协议 | OPEN (stale) | 联系作者确认维护意向 |

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐☆☆☆ | 24h 仅 4 条变更，全部 stale 处理 |
| **代码流入** | ⭐⭐☆☆☆ | 无新合并，社区贡献因 stale 流失 |
| **Bug 响应** | ⭐☆☆☆ | 严重 Bug 因 stale 自动关闭，无 fix PR |
| **社区参与** | ⭐⭐☆☆☆ | 评论数与点赞数均极低 |
| **发版节奏** | N/A | 无近期版本发布数据 |

**总结**：PicoClaw 当前可能处于维护期或社区低谷期。建议维护者团队：
1. **优先处理 #3343** 这类具有生产影响的高严重度 Bug
2. **审视 stale 自动关闭策略**，避免优质 PR 被误杀
3. 主动联系 PR 作者（特别是 `hugodeco` 和 `LinespottingPrivate`），确认贡献意向
4. 考虑发布一个补丁版本，包含 Telegram 渠道的相关修复，以恢复社区信心

---

*报告基于 GitHub 公开数据生成，数据时间窗口为 2026-09-16 至 2026-09-17。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-17

> 数据周期：过去 24 小时（2026-09-16 至 2026-09-17）｜数据源：github.com/qwibitai/nanoclaw

---

## 一、今日速览

NanoClaw 今日进入**高强度集中治理期**：24 小时内 PR 更新 34 条（合并/关闭 9 条、待合并 25 条），Issues 新增/活跃 2 条，无新版本发布。当前活跃工作高度集中在两条主线——**Iron Proxy 网关集成**（#3817、#3818、#3825 等多条 PR 联动）与 **Bun `spawnSync` 6 小时 CI 挂死 Bug 的应急止血**（#3839、#3841、#3842、#3836）。维护者 glifocat 与 zvi-fried 是这两条主线的主要推动者，反映出核心团队正在为下一次版本发布进行"功能合入 + 基础设施加固"的并行冲刺。整体活跃度较过去一周显著上升，但伴随多处高风险 PR 同时打开，**代码审查压力较大**，建议关注合并节奏与回归风险。

---

## 二、版本发布

⚠️ **今日无新版本发布**。结合主线合入情况（Iron Proxy 网关、Webhook 测试加固、setup 修复等），下一次发版窗口可能围绕"网关可替换 + CI 稳定性"主题进行打包。

---

## 三、项目进展

### ✅ 今日合并/关闭的 PR（9 条，按重要性排列）

| PR | 标题 | 作者 | 影响面 |
|---|---|---|---|
| [#3843](https://github.com/qwibitai/nanoclaw/pull/3843) | fix(iron-proxy): complete WebSocket handshakes and keep upstream framing in the tunnel | glifocat | 🟢 Iron Proxy 网关：在跑通 Codex provider 端到端时发现两个前置代理问题，已为 #3817 的合并扫清阻塞 |
| [#3836](https://github.com/qwibitai/nanoclaw/pull/3836) | ci(registry-skills): bound the skill test jobs at 20 minutes | glifocat | 🟢 关键的 CI 止血：把 registry-skills 测试任务限时 20 分钟，避免再次出现"挂死 6 小时"占用 runner |
| [#3824](https://github.com/qwibitai/nanoclaw/pull/3824) | refactor(gateway): add provider credential connections | glifocat | 🟢 引入共享的"凭据连接"接口，让 provider 可描述鉴权而不必直接调用网关管理 API（重构 PR） |
| [#101](https://github.com/qwibitai/nanoclaw/pull/101) | Add GitHub integration skill | Alakazam03 | 🟡 长期未决（创建于 2026-02-06）后被关闭；社区贡献的 GitHub 集成 skill 流程已告一段落 |

> 注：另有 5 条 PR 在过去 24 小时被合并/关闭，但因未列入展示名单未详述，建议查阅仓库 PR 列表以获取完整变更。

### 🚀 重要 Open PR（推进中的功能/重构）

- **[#3817](https://github.com/qwibitai/nanoclaw/pull/3817) `feat(skills): add the Iron Proxy gateway`** —— zvi-fried：把 Iron Control 作为可选网关加入（OneCLI 仍为默认）。这是本轮"网关可替换"战略的旗舰 PR，正在被多条子 PR（#3818、#3825、#3824、#3843）补强。
- **[#3815](https://github.com/qwibitai/nanoclaw/pull/3815) `refactor(gateway): centralize the credential gateway contract`** —— zvi-fried：把凭据网关契约与人审生命周期集中化，影响 channels / providers / sessions / security 等 11 个 area，属跨模块大重构。
- **[#3781](https://github.com/qwibitai/nanoclaw/pull/3781) `feat(agent-runner): enforce tools-only delivery`** —— glifocat：让 `tools-only` 投递模式对那些"无法稳定输出 final-text envelope"的 provider 也能可靠工作。
- **[#3713](https://github.com/qwibitai/nanoclaw/pull/3713) `feat(config): record a per-agent-group delivery mode`** —— glifocat：通过 `container_configs.delivery_mode`（migration 26）记录每个 agent group 的投递契约，与 #3781 配套。
- **[#3844](https://github.com/qwibitai/nanoclaw/pull/3844) `fix(setup): replace broken sudo retry with user-owned npm prefix fallback`** —— DorZvulun：修复 Fedora/Debian/Ubuntu 用系统包安装 Node 时 `setup.sh` 的 pnpm 回退永久失败问题（EACCES）。
- **[#3841](https://github.com/qwibitai/nanoclaw/pull/3841) `fix(opencode): run the memory hook with async spawn so bun test cannot wedge`** —— glifocat：把 add-opencode 的 memory hook 改为 async spawn，绕开 Bun 1.4.0 `spawnSync` 6 小时挂死。
- **[#2301](https://github.com/qwibitai/nanoclaw/pull/2301) `feat(add-github): polling mode, git access question, safe OneCLI secret merge`** —— ira-at-work：为 NAT/防火墙后的运维场景增加 30 秒轮询的 GitHub 集成（Mode B）。
- **[#2634](https://github.com/qwibitai/nanoclaw/pull/2634) `feat: add add-paws4claws skill`** —— ira-at-work：新增 paws4claws AWS 凭据代理守护进程的运维 skill。

### 整体推进度评估

**向前迈进约 1 个小版本所需工作量的 35%~45%**。Iron Proxy 网关从"概念 PR"（#3817）进入"子模块修复收尾"阶段（#3843 已合、#3818/#3825 待合）；CI 稳定性方面从"无限挂死"压到"20 分钟限时 + async spawn 兜底"，但 upload-trace 路径仍有遗留（见 #3842）。whatsapp / setup / webhook 测试加固等多条独立 PR 也在持续合入。

---

## 四、社区热点

由于今日所有展示 PR 的评论字段均为 `undefined`（疑似数据采集问题），无法用评论数做严格意义上的"社区热度"排序。**但从交互活跃度（合入速度、被引用次数、关联 PR 数）综合判断**，以下为本日真正的"热点话题"：

| 议题 | 代表 PR/Issue | 讨论诉求 |
|---|---|---|
| 🟥 **Iron Proxy 网关** | [#3817](https://github.com/qwibitai/nanoclaw/pull/3817) / [#3825](https://github.com/qwibitai/nanoclaw/pull/3825) / [#3818](https://github.com/qwibitai/nanoclaw/pull/3818) / [#3824](https://github.com/qwibitai/nanoclaw/pull/3824) / [#3843](https://github.com/qwibitai/nanoclaw/pull/3843) | 社区/团队诉求：让 OpenCode、Codex 等 provider 摆脱对 OneCLI 的硬依赖，提供可替换的网关选项；#3843 的"WS 握手 + 上行帧"问题暴露了 Iron Proxy 在真实流量下的健壮性短板 |
| 🟧 **Bun `spawnSync` 挂死 + CI 失控** | [#3839](https://github.com/qwibitai/nanoclaw/issues/3839) / [#3841](https://github.com/qwibitai/nanoclaw/pull/3841) / [#3842](https://github.com/qwibitai/nanoclaw/issues/3842) / [#3836](https://github.com/qwibitai/nanoclaw/pull/3836) | 运维诉求：GitHub 默认 6 小时 runner 超时被人为延长/CI 资源被无效占用；亟需通过架构级 async spawn + CI 超时上限双管齐下解决 |
| 🟨 **WhatsApp 边界处理** | [#3752](https://github.com/qwibitai/nanoclaw/pull/3752) / [#3751](https://github.com/qwibitai/nanoclaw/pull/3751) | 用户体验诉求：保证聊天中的待回答问题全部可答、屏蔽 @newsletter JID 对入站流程的污染（horsehcj 持续打磨 whatsapp channel） |

---

## 五、Bug 与稳定性

| 严重度 | 问题 | Issue | Fix PR 状态 |
|---|---|---|---|
| 🔴 **P0** | `registry-skills: add-opencode reapply pass` 在 `bun test` 中挂死直到 6 小时取消，根因为 Bun 1.4.0 `spawnSync` 丢失子进程 exit 后 100% CPU 自旋 | [#3839](https://github.com/qwibitai/nanoclaw/issues/3839) | ✅ 已有 fix PR [#3841](https://github.com/qwibitai/nanoclaw/pull/3841) (open) — 改用 async spawn；CI 兜底 [#3836](https://github.com/qwibitai/nanoclaw/pull/3836) 已合入 |
| 🟠 **P1** | `upload-trace` 仍通过 Bun `spawnSync` 调用 curl，可能再次阻塞 poll loop（#3839 同根问题在另一路径复发） | [#3842](https://github.com/qwibitai/nanoclaw/issues/3842) | ❌ 暂无 fix PR，待办 |
| 🟡 **P2** | `setup.sh` 在 Fedora/Debian/Ubuntu 系统包安装的 Node 上 pnpm 回退永久 EACCES 失败 | — (PR-only) | ✅ [#3844](https://github.com/qwibitai/nanoclaw/pull/3844) 已提 PR |
| 🟡 **P2** | Webhook 端口恢复测试使用随机端口，可能与 fixture 自有端口冲突导致 `EADDRINUSE`/`ECONNREFUSED` | [#3803](https://github.com/qwibitai/nanoclaw/pull/3803) | ✅ 修复 PR 已提，待合 |
| 🟢 **P3** | `service` 安装在 per-home-encrypted 系统上 linger 行为不正确 | — (PR-only) | ✅ [#2681](https://github.com/qwibitai/nanoclaw/pull/2681) 已提 PR（已开放 3 个月，建议加速） |

**根因模式**：今日 Bug 高度集中在"Bun 1.4.0 同步子进程 API 不健壮 + 测试/CI 缺少超时兜底"这一组合，团队已开始结构性应对，但 #3842 表明还有未触及的代码路径。

---

## 六、功能请求与路线图信号

| 需求方向 | 证据 | 路线图可能性 |
|---|---|---|
| **可替换的网关（OneCLI 之外）** | [#3817](https://github.com/qwibitai/nanoclaw/pull/3817) Iron Proxy 进入合入冲刺 | ⭐⭐⭐⭐⭐ 高（已进入主分支冲刺） |
| **OpenCode 通过 Iron Proxy 鉴权** | [#3825](https://github.com/qwibitai/nanoclaw/pull/3825) 复用共享凭据接口 | ⭐⭐⭐⭐⭐ 高（与 #3817 同步） |
| **Setup 流程拆分为 simple/advanced** | [#3818](https://github.com/qwibitai/nanoclaw/pull/3818) 简单安装保持 OneCLI 默认，高级安装暴露网关选择 | ⭐⭐⭐⭐ 中高 |
| **GitHub 集成支持 NAT/防火墙后的轮询模式** | [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) Mode B 30s 轮询 | ⭐⭐⭐ 中（长期未合，需核心团队复审） |
| **AWS 凭据代理（paws4claws）** | [#2634](https://github.com/qwibitai/nanoclaw/pull/2634) | ⭐⭐⭐ 中 |
| **按 provider 能力选择 delivery 模式** | [#3713](https://github.com/qwibitai/nanoclaw/pull/3713) + [#3781](https://github.com/qwibitai/nanoclaw/pull/3781) | ⭐⭐⭐⭐ 中高（agent runner 演进方向） |
| **容器 mount 只读加固** | [#3196](https://github.com/qwibitai/nanoclaw/pull/3196) | ⭐⭐⭐ 中（安全类，长期开放） |

**信号解读**：维护者本阶段重点押注在"网关可替换 + 安装体验 + CI 稳定性"三大主题，社区贡献者（ira-at-work）推动的 GitHub/扩展集成类需求目前优先级居次。

---

## 七、用户反馈摘要

> 注：今日展示的所有 Issues 评论数均为 0，无法从评论中提炼社区原话。以下反馈基于 PR/Issue 描述中**作者主动披露的使用场景与痛点**：

- 🔥 **CI 资源浪费的强烈不满**：#3839 作者描述"6 小时后被取消"——意味着每次挂死至少消耗一整台 runner 时长，CI 成本与反馈周期都受到显著影响。#3836 的"20 分钟限时"是团队对这一痛点的直接回应。
- 🛠️ **多发行版 Linux 安装失败的可用性问题**：#3844 明确点名 Fedora 43（`nodejs-22.22.2` RPM）、Debian/Ubuntu 等系统包 Node 安装场景下 `setup.sh` 完全跑不通，对非 Homebrew/nvm 用户是硬阻塞。
- 📱 **WhatsApp 频道细节打磨**：#3751（屏蔽 newsletter JID）和 #3752（保证每个待回答问题都可答）显示 horsehcj 在持续提升 WhatsApp 入站边界的鲁棒性，呼应用户对"消息归类"和"问答不丢"的需求。
- 🔌 **Iron Proxy 真实场景暴露的前置代理缺陷**：#3843 描述 Codex provider 端到端跑通时发现 WS 握手/上行帧问题，说明 Iron 集成已不只在纸面设计上，而是进入真实流量验证阶段——但这意味着**Iron Proxy 上线前还需至少一轮集成测试加固**。

---

## 八、待处理积压（提醒维护者关注）

| 类型 | 编号 | 标题 | 开放时长 | 提醒 |
|---|---|---|---|---|
| 🟥 PR | [#2301](https://github.com/qwibitai/nanoclaw/pull/2301) | feat(add-github): polling mode, git access question, safe One

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-09-17**

---

## 1. 今日速览

NullClaw 项目今日活跃度处于**较低水平**。过去 24 小时内仅有一条 Issue 被关闭，无新 Issue 提交、无 PR 活动、无新版本发布。整体呈现"零代码变动、零社区互动"的静态状态，项目维护进入了一个相对沉寂的窗口期。从健康度角度看，这种短暂的低活跃属于开源项目的正常波动，但建议维护者关注后续节奏恢复。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

距离上一个可见的版本节奏可参考项目 Releases 页面：nullclaw/nullclaw/releases

---

## 3. 项目进展

⚠️ **今日无任何 PR 合并或关闭。**

代码层面今日无推进。建议关注 PR 队列中是否存在积压未处理项（详见第 8 节）。

---

## 4. 社区热点

### Issue #999（已关闭）
**标题：** Explore forking litter's mobile GUI into human-guard-rail as a NullClaw client
**链接：** [nullclaw/nullclaw#999](https://github.com/nullclaw/nullclaw/issues/999)
**作者：** Azdwarf5Azdwarf
**互动量：** 💬 1 条评论 | 👍 0 个反应
**状态：** ✅ 已关闭

**分析：** 该 Issue 是社区成员 Azdwarf5Azdwarf 提出的一项**架构探索性提案**，建议将 [litter (0xSero/litter)](https://github.com/0xSero/litter) 的移动端 GUI 方案移植到 human-guard-rail 项目中，作为 NullClaw 的移动客户端。litter 采用了 Swift/Kotlin 薄 UI + Rust 核心（通过 UniFFI 绑定）、与 Codex/Local Studio 服务器通信的架构。从该 Issue 被关闭、但仅 1 条评论、0 反应来看，**社区关注度有限**，讨论深度不高，可能是维护者评估后认为短期内不具备实施条件，或已合并到其他内部讨论中。

---

## 5. Bug 与稳定性

⚠️ **今日无 Bug 报告、崩溃报告或回归问题。**

当前未见稳定性问题反馈。维护者可在 issue 模板中补充复现步骤、版本号、环境信息字段，以便未来快速归类。

---

## 6. 功能请求与路线图信号

**唯一信号来源：Issue #999（已关闭）**

- **提议方向：** 移动端客户端（iOS + Android），采用 Rust 核心 + 原生薄 UI 的混合架构
- **潜在价值：** 若落地，可显著扩展 NullClaw 的使用场景，从桌面/CLI 延伸至移动 agentic-coding
- **落地概率评估：** ❌ **较低** —— 该 Issue 已被关闭，无后续 PR 跟进，互动量极低，可能未被列入近期路线图

**建议：** 若社区确实对移动端有需求，可考虑在 Discussions 板块发起 RFC（Request for Comments），汇集更多意见后再决定。

---

## 7. 用户反馈摘要

由于今日唯一被关闭的 Issue 仅含 1 条评论，且为方案性讨论而非用户体验反馈，**今日未提取到有效的用户痛点或满意度信号**。

从仅有的内容推测：
- **使用场景：** 关注者期待 NullClaw 拥有类似 litter 的跨端能力（移动 + 桌面）
- **未满足的需求：** 当前 NullClaw 缺乏官方移动客户端，移动场景的 agentic-coding 仍是空白

---

## 8. 待处理积压

️ **维护者关注提醒：**

| 类型 | 状态 | 链接 |
|------|------|------|
| 待合并 PR | **0 条** | — |
| 待响应 Issue（活跃） | **0 条** | — |
| 今日新开 Issue | **0 条** | — |

当前积压为空，但建议维护者：
1. **确认 Issue #999 关闭原因**，是否需要补充说明或转入 Discussion
2. **检查项目整体 backlog**，避免长期未响应 Issue 在沉默中累积
3. **考虑在 README 或官网发布路线图草案**，增强社区对项目方向的信心

---

## 📊 数据总览

| 指标 | 数值 | 趋势 |
|------|------|------|
| 新开 Issue | 0 | — |
| 关闭 Issue | 1 | ⬇️ |
| 待合并 PR | 0 | — |
| 合并 PR | 0 | — |
| 新 Release | 0 | — |
| 社区互动总量 | 1 条评论 | ⬇️ 极低 |

---

**报告生成时间：** 2026-09-17
**数据来源：** GitHub API (nullclaw/nullclaw)
**整体健康度评估：** 🟡 中性偏低（短期低活跃，需观察后续节奏）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-17**
**项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 仓库今日呈现典型的"陈旧工单批量清理 + 新功能持续推进"的双轨节奏。过去的 24 小时内，9 条历史 Issue 和 15 条历史 PR 全部因长期无更新被 GitHub stale bot 自动关闭（创建时间均为 2026-03-31，已搁置约 5.5 个月），同时有 3 条 9 月 16 日新建的活跃 PR（#2688、#2689、#2690）被合并/关闭，标志着 OpenClaw 修复链路、共享状态迁移和认证代理绕过三大方向取得阶段性进展。**项目活跃度评估：中等**——核心维护者（fisherdaddy、Mind-Hand、0xFLX、kayo5994 等）仍在持续推进，但社区侧 Issue/PR 流动性偏低，无新用户反馈流入。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时 Releases 区为空。如需了解最新版本，请访问项目 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)。

---

## 3. 项目进展

今日合并/关闭的 PR 中，以下 3 条为 2026-09-16 新建的高价值提交，**代表项目当前的真实推进方向**：

### 🟢 核心功能推进

- **PR #2690 — feat(openclaw): add repair snapshot rollback and agent media migration handling**
  - 作者：fisherdaddy
  - 关键改动：按阶段（preparation / snapshot / doctor / configuration / gateway）跟踪 Quick Repair 失败点，支持从修复前快照回滚
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/2690
  - **价值**：显著提升 OpenClaw 修复流程的可靠性，避免修复失败后状态不可恢复的尴尬

- **PR #2689 — feat(openclaw): migrate shared state schema before startup repair**
  - 作者：fisherdaddy
  - 关键改动：新增 prepare-startup 兼容模式，在 Doctor/配置修复前先备份并迁移 OpenClaw SQLite schema
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/2689
  - **价值**：消除"老配置迁移必须依赖可读配置文件"的强耦合问题

- **PR #2688 — fix(auth): bypass LobsterAI proxy credential cooldowns**
  - 作者：Mind-Hand
  - 关键改动：豁免托管 Provider 受 OpenClaw 凭证冷却限制，区分上游服务故障与用户错误
  - 链接：https://github.com/netease-youdao/LobsterAI/pull/2688
  - **价值**：解决上游模型鉴权/计费失败会"株连"其他 LobsterAI 模型 5 小时不可用的问题

### 🟡 同期被 stale bot 关闭的 PR（已搁置约 5.5 个月）

15 条历史 PR 集中清理，涉及 CoworkRunner 并发安全、IM 路由、SSE 流解析、MCP 定时器等多个长期未跟进的方向。**这些 PR 的方案设计仍有参考价值**，维护者可在未来重启相关工作时参考其实现思路。

---

## 4. 社区热点

**今日无活跃讨论的 Issue/PR。** 全部 9 条 Issue 均已因 stale 状态自动关闭，过去 24 小时无新增 Issue、无新评论。社区侧处于静默期，可能反映：

- 用户主要在企业内网/IM 渠道反馈，未回流到 GitHub
- Stale bot 策略（典型为 6 个月无活动自动关闭）执行过于激进，挤压了合理工单的存活空间

建议关注 **PR #1125（会话全文搜索 + 关键词高亮）** 的需求表达——搜索功能仅匹配标题而无法检索消息内容是高频痛点。

---

## 5. Bug 与稳定性

按严重程度排列（数据来自被关闭的 stale Issue 及对应修复 PR）：

| 严重度 | 问题 | Issue | 修复 PR | 状态 |
|--------|------|-------|---------|------|
| 🔴 高 | **IM 消息并发处理导致重复会话创建和消息响应丢失**——`IMCoworkHandler.processMessage()` 无串行化，两条并发消息会重复创建 cowork session | [#1099](https://github.com/netease-youdao/LobsterAI/issues/1099) | [#1100](https://github.com/netease-youdao/LobsterAI/pull/1100) | 方案就绪（per-conversation 异步互斥锁），PR 已被 stale 关闭 |
| 🔴 高 | **CoworkRunner startSession/continueSession 无重入保护**，并发调用导致流式消息损坏和消息重复 | [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) | [#1090](https://github.com/netease-youdao/LobsterAI/pull/1090) | 方案就绪（per-session 序列化），PR 已被 stale 关闭 |
| 🔴 高 | **定时任务 pollOnce() 无重入保护 + stopPolling() 后继续发送幽灵事件** | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | 方案就绪（pollInFlight + pollGeneration 计数器），PR 已被 stale 关闭 |
| 🟠 中 | **钉钉定时任务 IM 通知路由因含前缀的 conversationId 始终无法送达** | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | 方案就绪，PR 已被 stale 关闭 |
| 🟠 中 | **跨 provider 切换模型后立即发消息偶发"模型服务调用失败"**（fire-and-forget 竞态） | — | [#1101](https://github.com/netease-youdao/LobsterAI/pull/1101) | 方案就绪，PR 已被 stale 关闭 |
| 🟠 中 | **Anthropic SSE 流式解析未做行缓冲，高吞吐下数据丢失** | [#922](https://github.com/netease-youdao/LobsterAI/issues/922) | [#1130](https://github.com/netease-youdao/LobsterAI/pull/1130) | 方案就绪（与 OpenAI 路径对齐的 sseBuffer），PR 已被 stale 关闭 |
| 🟠 中 | **MCP stop() 中 force-close 定时器未取消，会误关新建 server** | — | [#1127](https://github.com/netease-youdao/LobsterAI/pull/1127) | 方案就绪，PR 已被 stale 关闭 |
| 🟡 低 | **表格 Table 顶部和底部有不名意义的留白**（Tailwind 默认边距） | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | [#1122](https://github.com/netease-youdao/LobsterAI/pull/1122) | 方案就绪，PR 已被 stale 关闭 |
| 🟡 低 | **Lobster AI 无法关闭**（已退出登录安装新版本仍弹窗） | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | — | **无对应修复 PR** |
| 🟡 低 | **新建重名 agent 后任务记录未自动拉取** | [#1139](https://github.com/netease-youdao/LobsterAI/issues/1139) | — | **无对应修复 PR** |

**关键洞察**：今日清理的 PR 中有 8 条已经包含**完整可合并的修复方案**，却因 5.5 个月无活动被 stale 关闭。这是典型的维护资源不足导致的"方案沉没"，建议维护者**优先评审并重新开启这些 PR**——这相当于一个零成本的稳定性提升机会。

---

## 6. 功能请求与路线图信号

已关闭 Issue 中的功能请求，结合是否已有 PR 实现评估纳入下版本的可能性：

| 功能请求 | 已有 PR？ | 进入下版本的概率 | 链接 |
|----------|-----------|------------------|------|
| 工具权限弹窗支持键盘快捷键（Enter 确认 / Escape 拒绝，对 destructive 禁用 Enter） | ✅ PR #1119 方案完整 | 🟢 **高** | [Issue #1117](https://github.com/netease-youdao/LobsterAI/issues/1117) / [PR #1119](https://github.com/netease-youdao/LobsterAI/pull/1119) |
| 会话出错后支持一键 Retry 重发最后一条消息 | ✅ PR #1121 方案完整 | 🟢 **高** | [Issue #1120](https://github.com/netease-youdao/LobsterAI/issues/1120) / [PR #1121](https://github.com/netease-youdao/LobsterAI/pull/1121) |
| 会话内容全文搜索 + 关键词高亮 + 上下文摘要 | ✅ PR #1125 方案完整 | 🟢 **高** | [PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125) |
| Tool error 高亮 + 跳转到最新消息按钮 | ✅ PR #1138 方案完整 | 🟡 中（UX 改进类） | [PR #1138](https://github.com/netease-youdao/LobsterAI/pull/1138) |
| 定时任务启停按钮添加 tooltip | ✅ PR #1102 方案完整 | 🟡 中 | [PR #1102](https://github.com/netease-youdao/LobsterAI/pull/1102) |
| Settings 添加 Docker 沙箱就绪探测 + 状态展示 | ✅ PR #1103 方案完整 | 🟡 中 | [PR #1103](https://github.com/netease-youdao/LobsterAI/pull/1103) |
| OpenClaw 配置变更在 gateway workload drain 后 flush | ✅ PR #1113 方案完整 | 🟡 中 | [PR #1113](https://github.com/netease-youdao/LobsterAI/pull/1113) |
| 改进 MD 转 PDF 体验（避免多开标签页、拦截会员弹窗） | ❌ 无 | 🔴 低（依赖第三方服务） | [Issue #1096](https://github.com/netease-youdao/LobsterAI/issues/1096) |

**路线图建议**：所有"已有 PR 方案完整"的功能请求应优先纳入下一版本——这相当于把 5.5 个月的社区贡献一次性变现。

---

## 7. 用户反馈摘要

从已关闭 Issue 的描述中提炼的真实痛点：

### 😣 体验摩擦

- **键鼠切换成本高**：权限弹窗完全依赖鼠标操作，"打乱了键盘驱动的编码流"（[Issue #1117](https://github.com/netease-youdao/LobsterAI/issues/1117)）
- **会话错误无恢复路径**：网络错误/超时/工具异常后只能"手动复制 Prompt → 回到首页 → 新建会话 → 粘贴重发"（[Issue #1120](https://github.com/netease-youdao/LobsterAI/issues/1120)）
- **历史会话难检索**：搜索只能匹配标题，"历史会话很多时难以找到包含特定内容的会话"（[PR #1125](https://github.com/netease-youdao/LobsterAI/pull/1125)）
- **表格/排版细节影响观感**：Table 顶部底部不明留白，破坏文档整洁度（[Issue #1112](https://github.com/netease-youdao/LobsterAI/issues/1112)）

### 😣 平台集成不稳定

- **IM 消息丢失/重复**：用户感知到"快速连续发消息时偶发响应缺失或重复"（[Issue #1099](https://github.com/netease-youdao/LobsterAI/issues/1099)）
- **钉钉定时任务无法送达**：用户报告"定时任务跑成功但 IM 收不到通知"（[Issue #1105](https://github.com/netease-youdao/LobsterAI/issues/1105)）
- **MD 转 PDF 体验劣化**：调用在线服务时打开 3 个浏览器标签页不关闭 + 出现会员框（[Issue #1096](https://github.com/netease-youdao/LobsterAI/issues/1096)）

### 😣 安装与状态管理

- **升级残留状态**："已关闭并退出登录 Lobster，安装最新版本时还是弹'Lobster AI 无法关闭'"（[Issue #1124](https://github.com/netease-youdao/LobsterAI/issues/1124)）
- **Agent 切换缓存不一致**：新建重名 agent 后"任务记录不自动加载，需切换其他 agent 再切回"（[Issue #1139](https://github.com/netease-youdao/LobsterAI/issues/1139)）

---

## 8. 待处理积压

**关键观察**：过去 24 小时无新 Issue 提交（活跃=0），9 条历史 Issue 全部被 stale 关闭（已关闭=9），18 条历史 PR 全部被关闭（已合并/关闭=18，待合并=0）。

虽然从数字上看"积压清零"，但**这是一种表象性的清零**，背后存在系统性风险：

### 🔴 需维护者立即关注

1. **重启 8 条已就绪的修复 PR**：#1090、#1100、#1101、#1106、#1108、#1119、#1121、#1122、#1125、#1127、#1130、#1138、#1102、#1103、#1113 均有完整 commit、CI 通过、仅因无后续活动被 stale 关闭。**这些是零成本可合并的成果**。
2. **重新评估 2 条无修复 PR 的 Issue**：[#1124](https://github.com/netease-youdao/LobsterAI/issues/1124)（升级残留状态）、[#1139](https://github.com/netease-youdao/LobsterAI/issues/1139)（Agent 切换缓存）目前无对应 PR，需要维护者或社区贡献者认领。
3. **调整 stale bot 策略**：6 个月无活动即关闭对中小型开源项目过于激进，建议改为 9-12 个月，或允许[stale] 标签工单有 30 天宽限期。
4. **社区活跃度告警**：今日 0 新 Issue、0 新评论，说明项目对外反馈渠道可能已失灵，建议在 IM 用户群、官网等渠道设置 GitHub 反馈入口提示。

### 🟡 中长期风险

- **作者集中度**：今日合并的 3 条活跃 PR 全部来自核心维护者（fisherdaddy × 2、Mind-Hand × 1），外部贡献者（0xFLX、kayo5994、YDXyydsyyds、choyuenga 等）提交的 PR 因 stale 关闭。维护者需考虑如何激活社区贡献者生态。
- **OpenClaw 模块复杂度上升**：过去 24 小时 PR 中 OpenClaw 相关改动密集（#2689、#2690、#1113），涉及 schema 迁移、配置同步、状态修复等多个高风险操作，建议加强该模块的回归测试覆盖。

---

## 附录：完整数据链接索引

- 项目主页：https://github.com/netease-youdao/LobsterAI
- Issues 列表：https://github.com/netease-youdao/LobsterAI/issues
- Pull Requests 列表：https://github.com/netease-youdao/LobsterAI/pulls
- Releases 列表：https://github.com/netease-youdao/LobsterAI/releases

**报告生成时间**：2026-09-17
**数据来源**：GitHub REST API（Issues / Pulls / Releases）
**统计窗口**：2026-09-16 00:00 UTC ~ 2026-09-17 00:00 UTC（24 小时）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-09-17
**数据来源**：github.com/moltis-org/moltis
**仓库**：moltis-org/moltis

---

## 1. 今日速览

Moltis 项目今日活跃度处于**中等偏低水平**，24 小时内无新版本发布。Issues 方面新开 1 条（远程 MCP 服务启动失败后无法重试），关闭 1 条历史 Bug（沙箱节点添加后无法运行）。PR 方面较为活跃：合并/关闭 1 条来自 4 月份的大型功能 PR（#926 slash 命令合集），新增 2 条分别聚焦沙箱安全策略与镜像构建缓存优化的待合并 PR。整体来看，项目在 **沙箱安全** 与 **构建性能** 两条技术线上有持续推进，社区反馈也有新的可靠性诉求被提上日程。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 已关闭 PR

- **PR #926** — `feat: add /btw, /fast, /insights, /steer, /queue commands and auxiliary model config`
  作者：[penso](https://github.com/penso) | 创建于 2026-04-29 | 关闭于 2026-09-16
  链接：https://github.com/moltis-org/moltis/pull/926

  这是一个长期挂起（近 5 个月）的功能合集 PR，引入了 5 个受 Hermes Agent 启发的新型斜杠命令（`/btw`、`/fast`、`/insights`、`/steer`、`/queue`）以及辅助模型配置脚手架。最终以关闭状态结束（未明确说明合并或拒绝，从"未定义评论数+0 👍"判断可能已被关闭未合入）。该 PR 的关闭标志着这一组实验性交互命令暂被搁置，后续维护者可能需要重新评估或拆分提交。

### 待合并 PR

- **PR #1272** — `feat(sandbox): per-agent mounts, run_as and a forced sandbox`
  作者：[Bergmann89](https://github.com/Bergmann89) | 创建于 2026-09-16
  链接：https://github.com/moltis-org/moltis/pull/1272

  为 agent 预设的 `[sandbox]` 块新增三个 per-agent 安全控制项：`sandbox.mounts`（额外主机目录绑定）、`sandbox.run_as`（容器运行用户身份）、`sandbox.force`（强制必须运行在沙箱中）。这是对 Moltis 沙箱隔离模型的精细化扩展，强化多 agent 场景下的权限边界。

- **PR #1270** — `feat(build): cache cargo across image builds, and script building the image`
  作者：[Bergmann89](https://github.com/Bergmann89) | 创建于 2026-09-15
  链接：https://github.com/moltis-org/moltis/pull/1270

  将 cargo target 目录与 crate registry 改为 BuildKit cache mounts，避免源码变更触发整棵依赖树重编译。维护者提到一次冷构建耗时可观，本次优化可显著缩短增量构建时间，对开发体验与 CI 效率均有直接提升。

**项目整体进展评估**：今日贡献集中在工程基础设施层面（构建缓存、沙箱权限模型），属于"内功修炼"。同时关闭了一笔大型功能债务 PR #926，避免代码长期处于悬而未决状态。整体向更稳定、更安全、更高效的方向推进。

---

## 4. 社区热点

今日 Issues/PRs 评论数普遍较低（多数为 0-1 条），社区讨论未现明显焦点。但有两项值得关注：

- **Issue #1246**（已关闭）—— 沙箱节点添加后无法运行的 Bug 报告，获得了 1 条评论交互，属于用户主动反馈的问题。
  链接：https://github.com/moltis-org/moltis/issues/1246

- **Issue #1271**（新开）—— 远程 MCP 服务器失败后无重试机制的报告，话题直指生产环境可靠性，可能引发后续运维方向讨论。
  链接：https://github.com/moltis-org/moltis/issues/1271

**诉求分析**：用户最关心的核心痛点从"功能可用"逐步转向"生产可靠性"（MCP 重连、状态恢复），反映出 Moltis 正在从原型阶段迈向可生产部署阶段。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 状态 | 是否有修复 PR |
|--------|-------|------|--------------|
| 🟢 已解决 | [#1246](https://github.com/moltis-org/moltis/issues/1246) can't run on sandbox after a node is added | ✅ 已关闭 | 已有修复（合并/关闭时间内） |
| 🟡 待处理 | [#1271](https://github.com/moltis-org/moltis/issues/1271) A remote MCP server that fails at startup is never retried, and a lost session ends every later call | 🔴 开放（高严重度） | ❌ 暂无 |

**重点关注 Issue #1271**：
该 Bug 影响远程 MCP（基于 streamable HTTP）的可用性：
1. **启动失败不重试**：`McpManager::start_enabled` 在 `failed to start MCP server` 后放弃，`mcp_health.rs` 中的健康监控仅针对"曾经运行过"的服务器，无法恢复初始失败案例。
2. **会话丢失导致后续调用全失败**：一次失败的会话似乎会被持久化或缓存，导致所有后续调用连环失败。

这是典型的 **分布式系统状态恢复缺陷**，对生产部署影响显著——单次瞬时网络抖动可能导致 MCP 工具链永久不可用。强烈建议维护者优先排查。

---

## 6. 功能请求与路线图信号

今日没有显式的功能请求 Issue，但 PR 中传递了清晰的路线图信号：

- **PR #1272（沙箱精细化）**—— 标志 Moltis 沙箱系统从"全局开关"走向"per-agent 策略"，预示后续可能引入完整的沙箱策略文件（policy DSL）和多租户能力。这是面向企业部署的关键信号。
- **PR #1270（构建缓存）**—— 表明项目进入工程化打磨阶段，构建/CI 体验开始受到重视。
- **PR #926（被关闭）**—— `/btw`、`/fast`、`/insights`、`/steer`、`/queue` 这类"对话体验增强"功能暂时未通过，可能意味着维护者认为当前优先级低于稳定性与基础设施。

**预测**：下一版本（若发布）大概率聚焦沙箱能力增强（PR #1272）与构建优化（PR #1270），并可能同时包含针对 #1271 的 MCP 重连修复。

---

## 7. 用户反馈摘要

由于评论数量有限，可提炼的真实用户痛点如下：

- **场景**：用户在生产环境中部署 Moltis 20260913.02，使用远程 MCP over streamable HTTP。
- **痛点**：MCP 服务启动失败后无任何自动恢复机制；一次性失败导致整套 MCP 调用永久中断。
- **需求**：期望 health monitor 覆盖"初始启动失败"的服务器，实现会话级别的状态恢复与重试退避策略。

- **场景**：Issue #1246 报告者在沙箱环境添加节点后无法运行 Moltis（用户：`maop`）。
- **痛点**：操作节点变更后沙箱执行路径异常。
- **状态**：该问题已获修复并关闭。

总体来看，用户满意度难以从少量评论中判断，但**新 Bug 集中在企业级部署场景**，反映出当前用户群体正从"玩具玩家"转向"生产使用者"，对稳定性期望显著提高。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 备注 |
|------|------|------|---------|------|
|  新增 | [#1271](https://github.com/moltis-org/moltis/issues/1271) | A remote MCP server that fails at startup is never retried... | 2026-09-16 | 高严重度，影响远程 MCP，建议优先响应 |
| 🆕 新增 | [#1272](https://github.com/moltis-org/moltis/pull/1272) | feat(sandbox): per-agent mounts, run_as and a forced sandbox | 2026-09-16 | PR 待 review |
| 🆕 新增 | [#1270](https://github.com/moltis-org/moltis/pull/1270) | feat(build): cache cargo across image builds... | 2026-09-15 | PR 待 review |

**对维护者的提醒**：
1. **#1271 MCP 重连 Bug** 应作为下一个迭代的最高优先级，因其直接影响生产可用性。
2. 两位来自 **Bergmann89** 的 PR（#1272、#1270）在 9 月 15-16 日连续提交，建议批量 review 以减少来回。
3. PR #926 已关闭，建议维护者在关闭评论中说明拆分或重新提交的指引，避免贡献者（penso）的后续工作失去方向。

---

**报告生成时间**：2026-09-17
**健康度评估**：🟡 **中等** —— 工程基础设施持续推进，但生产可靠性（MCP 重连）出现新缺口，需关注。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-17

> 数据来源：github.com/agentscope-ai/CoPaw 过去 24 小时 Issues / PRs 动态
> 报告生成：2026-09-17

---

## 一、今日速览

CoPaw 过去 24 小时活跃度处于**中高水位**：Issues 净更新 24 条（其中 9 条已关闭），PRs 净更新 37 条（25 条仍待合并、12 条已合并/关闭），整体呈"大量 PR 涌入 + 社区集中反馈"的态势。无新版本发布，开发资源集中在 2.2.x 版本的稳定性打磨与 2.2.0 Hub 多租户版的前置准备。今日有多个高价值 PR 合并落地，包括 **ACP 委托修复**、**Workbench 外壳重构**、**shell 逃逸安全检查默认开启**等；与此同时，内存泄漏、SSE 流中断、Console 懒加载崩溃等稳定性问题集中浮现，已成为本轮反馈的最强主题。

---

## 二、版本发布

**无新版本发布**。当前官方版本线仍为 `v2.2.1`，2.2.0 系列正在快速迭代。从 PR 走向看，2.2.0 主要面向 Hub 多租户能力的成型，下一个补丁版本预计将集中修复 Console / SSE / 内存相关的稳定性问题。

---

## 三、项目进展（已合并 / 已关闭 PR）

| PR | 标题 | 影响范围 |
|---|---|---|
| [#7783](https://github.com/agentscope-ai/CoPaw/pull/7783) | fix(ACP): Improves the experience of delegating work to external ACP runners | 修复 ACP 委派外部 runner 时文本重复/碎片化问题，改善 Agent 间协作体验 |
| [#7790](https://github.com/agentscope-ai/CoPaw/pull/7790) | feat(console): add unified chat workbench shell | Console 引入会话级可调工作台（Files/Changes/Terminal/Tools），重构能力 Tab |
| [#7382](https://github.com/agentscope-ai/CoPaw/pull/7382) | feat(chat): adapt AgentScopeRuntimeWebUI 1.2 and stabilize queues | 适配上游 WebUI 1.2，修复首条消息发送/会话切换竞态，稳定队列 |
| [#7120](https://github.com/agentscope-ai/CoPaw/pull/7120) | security: enable shell evasion checks by default + regression test | **7 项 shell 逃逸检查全部默认开启**，显著提升命令执行安全性 |
| [#4171](https://github.com/agentscope-ai/CoPaw/pull/4171) | feat: add memory-distill tool plugin with title-diffing distillation engine | 新增 memory-distill 工具插件，标题差分蒸馏引擎（声称 ~92% 噪声过滤） |

整体评价：项目在 **安全加固、Console UX、Agent 协作** 三个方向均有实质性推进。其中 shell 逃逸默认开启是显著的安全里程碑，建议在 2.2.x 的 release note 中突出标注。

---

## 四、社区热点

### 4.1 [#7318](https://github.com/agentscope-ai/CoPaw/issues/7318) — QwenPaw Hub 多租户版 2.2.0 路线图征集
- 评论：**29** | 👍：4 | 状态：OPEN | 更新：2026-09-16
- **热度第一**：维护者 rayrayraykk 公开征集社区对 Hub 多租户版的需求。引用了 #2324 等多个前期 issue。
- **诉求分析**：从个人助手到团队/组织部署的诉求明显升级，社区呼声集中在"多用户访问 + 管理员统一管理 skills/凭据/模型"。今日合并的 PR [#7779](https://github.com/agentscope-ai/CoPaw/pull/7779)（Hub 模型网关、成员治理、用量仪表板）正是对这一热点的直接响应。

### 4.2 [#7678](https://github.com/agentscope-ai/CoPaw/issues/7678) — spawn subAgent 全部超时失败
- 评论：9 | 状态：OPEN
- v2.2.0 上 subAgent 调用 100% timeout，**即便超时设置很长也无效**。日志显示为 8/24 旧记录，未能定位到真实会话。属于关键功能完全失效级别，但目前尚无 PR 对应。

### 4.3 [#7722](https://github.com/agentscope-ai/CoPaw/issues/7722) — 容器内存耗尽（~1MB/s 增长直至 OOM）
- 评论：5 | 状态：OPEN
- 报告者明确指出**不是单点而是三条叠加路径**：无界流缓冲 + keep-alive 实例堆叠 + doom-loop gate 绕过。属于深度技术报告，提供了 controlled repro + minimal fixes，可作为下一版 Memory Profile 优化的重点输入。

---

## 五、Bug 与稳定性（按严重程度）

### 🔴 严重（影响核心功能 / 数据丢失 / 资源耗尽）

1. **[#7722](https://github.com/agentscope-ai/CoPaw/issues/7722) — 内存三路径叠加耗尽直至 OOM（v2.2.0）**
   - 报告含受控复现与最小修复方案，**尚无对应 fix PR**，建议维护者优先处理。

2. **[#7678](https://github.com/agentscope-ai/CoPaw/issues/7678) — spawn subAgent 100% 超时失败**
   - 核心 Agent 编排能力失灵，**无对应 PR**，应纳入紧急修复队列。

3. **[#7818](https://github.com/agentscope-ai/CoPaw/issues/7818) — UI 频繁卡死 + 内存占用率极高**
   - 附截图，结合 #7722 形成"前端 + 后端双重内存压力"的可观察证据。

### 🟠 高（功能不可用但有 workaround）

4. **[#7815](https://github.com/agentscope-ai/CoPaw/issues/7815) — Console 懒加载分片失败后无法恢复**
   - 错误边界 retry 机制无法生效，唯一恢复手段为整页刷新。
   - 与 [#7813](https://github.com/agentscope-ai/CoPaw/issues/7813)、[#7814](https://github.com/agentscope-ai/CoPaw/issues/7814) **形成 SSE 流健壮性三件套**：同一作者 wjt0321 当日连发 3 个相关 issue，强烈建议合并评审。

5. **[#7799](https://github.com/agentscope-ai/CoPaw/issues/7799) — v2.2.1 Console 不显示 Agent 发送的图片（已关闭）**
   - 流式期间短暂可见后消失，疑似 [#5320](https://github.com/agentscope-ai/CoPaw/issues/5320) 复发。已关闭但需确认修复版本是否已发布。

6. **[#7812](https://github.com/agentscope-ai/CoPaw/issues/7812) — 桌面启动后立即执行 /compact 命中 fallback session（空内存）**
   - 影响所有 slash command 的会话路由正确性。

### 🟡 中（边界场景 / 体验降级）

7. **[#7813](https://github.com/agentscope-ai/CoPaw/issues/7813) — SSE `null` 字面量载荷导致整个流冻结**
8. **[#7814](https://github.com/agentscope-ai/CoPaw/issues/7814) — `_strip_event_headlines` 序列化 `null`，且失败无终止事件**
9. **[#7650](https://github.com/agentscope-ai/CoPaw/issues/7650) — 频道参数无法透传 MCP 工具**（标 wontfix 待商榷）
10. **[#7726](https://github.com/agentscope-ai/CoPaw/issues/7726) — ACP `trusted: true` 静默回退到交互式 prompt**（已关闭）
11. **[#7730](https://github.com/agentscope-ai/CoPaw/issues/7730) — 插件目录读取失败时跳出离线 fallback**（已关闭）
12. **[#6472](https://github.com/agentscope-ai/CoPaw/issues/6472) — 2.0.0→2.0.1 升级后 JSON 文件不显示行号**（已关闭）
13. **[#7720](https://github.com/agentscope-ai/CoPaw/issues/7720) — Creator 用 `GATED` 隐藏 prompt-sync 阻塞器**（已关闭）
14. **[#7693](https://github.com/agentscope-ai/CoPaw/issues/7693) — Creator 多图生成"审核通过"会永久卡死 RUNNING 任务**（已关闭）

> **观察**：稳定性问题集中爆发在 **Console 前端懒加载、SSE 流处理、内存管理**三条线索上，建议维护者下一次 sprint 明确定一个"Console 健壮性"主题 PR 集。

---

## 六、功能请求与路线图信号

| Issue | 诉求 | 与现有 PR 关联 |
|---|---|---|
| [#7318](https://github.com/agentscope-ai/CoPaw/issues/7318) | Hub 多租户版（成员治理、模型网关、技能托管） | 已对应 [#7779](https://github.com/agentscope-ai/CoPaw/pull/7779)（Hub 模型网关 + 治理 + 用量仪表板），方向已纳入 2.2.0 路线图 |
| [#6318](https://github.com/agentscope-ai/CoPaw/issues/6318) | **支持按 conversation 级别指定模型** | 无对应 PR，**强烈建议纳入下个迭代**，与 Hub 模型网关形成完整能力栈 |
| [#7801](https://github.com/agentscope-ai/CoPaw/issues/7801) | 聊天模式切换：Discuss vs Execute | 无对应 PR，属于 UX 增量功能 |
| [#7809](https://github.com/agentscope-ai/CoPaw/issues/7809) | Tool approval 卡片 / 通知的 i18n 支持 | 无对应 PR，已有 [#7752](https://github.com/agentscope-ai/CoPaw/pull/7752)（vi/pt-BR 语言）作为前置工作 |
| [#7800](https://github.com/agentscope-ai/CoPaw/issues/7800) | 任务完成 / 中断 / 请求许可时底栏标签橙色高亮（#7263 未完全理解） | 无对应 PR |
| [#7797](https://github.com/agentscope-ai/CoPaw/issues/7797) | 产物只输出任务目标产出物，清理中间文件 | 无对应 PR（已关闭，但需求可能复开） |
| [#7804](https://github.com/agentscope-ai/CoPaw/issues/7804) | management（提报模板过简，需求模糊，已关闭） | 维护者建议重新细化后重提 |
| [#7817](https://github.com/agentscope-ai/CoPaw/issues/7817) | 飞书 p2p `230101` 错误根因分析 + 框架层改进建议 | 无对应 PR，技术深度高，建议采纳 |
| [#7768](https://github.com/agentscope-ai/CoPaw/issues/7768) | 云端部署绑定 GitHub 账号活跃度要求说明（已关闭） | 文档类，已关闭 |

**路线图研判**：
- **2.2.0 Hub 版** 正在成型，模型网关 + 成员治理为先发能力。
- **Conversation 级模型选择** 是被低估的高需求（[#6318](https://github.com/agentscope-ai/CoPaw/issues/6318) 7 条评论、长期挂起），建议作为 2.2.x 后续版本的核心体验改进。
- **国际化（i18n）** 已有 PR 在修语言切换断裂（[#7752](https://github.com/agentscope-ai/CoPaw/pull/7752)），但 Tool approval 文本仍硬编码英文，下一版应一并治理。

---

## 七、用户反馈摘要

### 痛点集中区
- **"明明设了 131k 上限，每次都爆 271k"**（[#7810](https://github.com/agentscope-ai/CoPaw/issues/7810)）—— 上下文压缩阈值不生效，用户自助排查无果。这是**最普遍且最影响日常使用**的问题之一。
- **"任务跑到一半 UI 卡死 / 内存爆掉"**（[#7818](https://github.com/agentscope-ai/CoPaw/issues/7818)、[#7722](https://github.com/agentscope-ai/CoPaw/issues/7722)）—— 长任务稳定性是当前 P0 痛点。
- **"Spawn subAgent 全失败"**（[#7678](https://github.com/agentscope-ai/CoPaw/issues/7678)）—— 多 Agent 工作流的关键功能失灵。
- **"图片发完就消失"**（[#7799](https://github.com/agentscope-ai/CoPaw/issues/7799)）—— Agent 工具输出在流式结束后丢失，疑似 #5320 回归。
- **"桌面启动后立刻用 /compact 得到空内存"**（[#7812](https://github.com/agentscope-ai/CoPaw/issues/7812)）—— 启动期路由竞争，影响所有 slash command。
- **"27 寸显示器上看不到右下角许可弹窗"**（[#7800](https://github.com/agentscope-ai/CoPaw/issues/7800)）—— 桌面端大屏场景的视觉提醒缺失。
- **"频道参数怎么透传给 MCP 工具"**（[#7650](https://github.com/agentscope-ai/CoPaw/issues/7650)）—— 用户明确不希望由 LLM 改写，凭据类信息应框架层透传。

### 使用场景信号
- 用户在**桌面端 Windows**（[#7799](https://github.com/agentscope-ai/CoPaw/issues/7799)）、**桌面端 macOS**（[#7726](https://github.com/agentscope-ai/CoPaw/issues/7726)）、**Docker 容器**（[#7817](https://github.com/agentscope-ai/CoPaw/issues/7817)、[#7722](https://github.com/agentscope-ai/CoPaw/issues/7722)）、**云端部署**（[#7768](https://github.com/agentscope-ai/CoPaw/issues/7768)）多端使用。
- 长任务（[#

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期：2026-09-17**
**数据周期：过去 24 小时**

---

## 1. 今日速览

ZeroClaw 今日延续了高强度的设计驱动节奏，过去 24 小时内共 50 条 Issue 与 50 条 PR 发生更新，无新版本发布。讨论热点高度集中于**记忆子系统架构解耦**与**Goal Mode 演进路线**两条主线，配套的多项 RFC 与 Tracker 仍在维护者决策队列中流转。今日仅 1 个 Issue 与 2 个 PR 关闭，整体处于"广开议题、谨慎合并"的状态，PR 积压显著（48 条待合并 vs 2 条关闭）。代码侧最大进展是 OpenAI 兼容提供商的 Anthropic 提示缓存透传能力随 PR #10623 落地。

---

## 2. 版本发布

本周期内无新 Release。

---

## 3. 项目进展

今日有 2 条 PR 合并/关闭，对应推动以下能力进入主线：

| PR | 标题 | 影响 |
|---|---|---|
| [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) | `feat(providers): Anthropic prompt-cache passthrough for OpenAI-compatible providers` | 为 OpenAI 兼容协议增加 opt-in `cache_passthrough` 开关，向下穿透 `cache_control` 块，显著降低使用第三方代理时 Anthropic 模型的重复 token 成本。属于 XL 级别高风险改动 |
| [#10866](https://github.com/zeroclaw-labs/zeroclaw/pull/10866) | `fix(config): satisfy clippy 1.98 byte_char_slices in pairing confusables` | 一行 lint 修复，消除 clippy 1.98 新增 `byte_char_slices` 在 `-D warnings` 下的编译阻断 |

另有关闭 Issue [#10619](https://github.com/zeroclaw-labs/zeroclaw/issues/10619) 与上述 PR 配套，标志着「provider-transport」主题下的一次完整闭环（需求→实现→关闭）。

整体看，今日是**功能性交付较少但关键基础设施成型**的一天。Anthropic OAuth 存储档案支持（[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)）虽未合并，但已就位等待 maintainer 审核。

---

## 4. 社区热点

今日评论最活跃的议题全部为 RFC 与 Tracker 类型，反映项目正处于架构集中讨论期：

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy from storage backends | 25 | 记忆生命周期与存储后端解耦 |
| 2 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 — bounded foreground Matrix work | 22 | 目标模式 v1 边界 |
| 3 | [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) RFC: separate authoritative memory storage from optional enrichment connectors | 19 | 记忆存储与富化连接器分离 |
| 4 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) RFC: Separate conversation history from agent-curated long-term memory | 16 | 会话历史与长期记忆分离 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) [Tracker] Maintainer decision queue for RFCs and design issues | 15 | 维护者决策队列追踪 |

**诉求分析**：前 4 条全部聚焦"记忆子系统"边界——`Memory` trait 当前混用了存储、整合、治理三个生命周期决策，社区希望明确分层，使各 Gateway/Channel 不再重复实现。`Goal mode` 方向同样密集，v1/v2/v3 三阶段 RFC（[#8303、#9702、#9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703)）勾勒出"前台任务→持久延续+Web 控制→异步子任务监管"的演进路径。[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 维护者决策队列的存在说明 RFC 体量已超出维护者个人处理带宽，需要流程化机制。

---

## 5. Bug 与稳定性

按严重程度排列（今日活跃或新开的 Bug 类条目）：

### 🔴 P1 高优先级
| Issue | 组件 | 描述 | 是否已有 Fix |
|---|---|---|---|
| [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | runtime/daemon | Telegram 频道经 quickstart 与 zerocode 配置后，`channels doctor` 仍报错"未配置"，机器人不响应 | 配套 E2E 覆盖 [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) 已 in-progress |
| [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | daemon | `compact_context` 模式下 bootstrap 文件（AGENTS.md/SOUL.md/IDENTITY.md/USER.md）在 6000 字符处静默截断，无任何警告 | 暂无 |
| [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | zerocode/tui | ZeroCode 无法连接由 Windows Task Scheduler 启动的 daemon | 相关 PR [#10928](https://github.com/zeroclaw-labs/zeroclaw/pull/10928) 已开 |
| [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | zerocode/tui | Code/ACP 流式输出在进程异常退出时丢失（S0 数据丢失） | 配套修复 [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) 待 review |

### 🟡 P2 中等优先级
| Issue | 描述 | 状态 |
|---|---|---|
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | `nix run` 安装路径缺乏文档 | help wanted / good first issue |
| [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) | 图像附件导致整个历史缓存前缀失效（不仅是新消息） | PR [#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623) 已合并 |
| [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) | Windows 下 `control_plane` 活跃度测试与进程拆解竞争 | in-progress |

**稳定性观察**：今日 P1 级别问题集中在 ZeroCode/ACP 通道的**持久化可靠性**与**跨平台 daemon 启动**两条线，与 ZeroClaw 多入口（CLI/TUI/Task Scheduler/Telegram）的扩展趋势一致。

---

## 6. 功能请求与路线图信号

**最可能进入下一版本的功能**：

1. **Anthropic OAuth 存储档案**（[#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)，XL 风险） — 已就位并标 trusted contributor，待 maintainer 终审。
2. **config/set-many 原子批量写入 RPC**（[#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) + 权限闸 [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824)） — 栈式 PR，status: accepted，距离合并仅一步之遥。
3. **ZeroCode 会议 URL 点击支持**（[#10386](https://github.com/zeroclaw-labs/zeroclaw/pull/10386)） — 体验型改进，已开 PR。

**正在汇聚中的中期方向**：
- **Goal mode 全套**：v1（[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303)）+ v2 Web 控制面（[#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702)）+ v3 异步监管（[#9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703)，目前 blocked），形成产品化目标跟踪能力。
- **配置变更溯源**（[#10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)） — 配置保存后哪些消费者实际采纳变更将可审计。
- **运行时通道来源追踪**（[#10891](https://github.com/zeroclaw-labs/zeroclaw/issues/10891)） — 将受信通道来源注入到模型消息与转向控制，强化 [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) 合约。

**新增 RFC 提案（今日新开）**：
- [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) — "Agent 问人类问题"应统一为一个持久原语
- [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) — 出站消息投递回执

---

## 7. 用户反馈摘要

**真实痛点**：

- **首次运行配置不可见**：「快速上手后 `channels doctor` 还说没配置好」（[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505)）。用户对 daemon 与 CLI 之间的状态一致性感官较差。
- **本地模型选择门槛高**：「跑本地模型还得自己拼凑硬件需求、量化、上下文、工具支持」（[#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549)）——社区正在引入 `llmfit` 缓解。
- **ZeroCode 会话管理不友好**：「很难管理会话，复制消息只能用两个 ASCII 按钮」（[#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141)）。
- **bootstrap 文件静默截断无反馈**：「`compact_context` 把我的 6000+ 字符文件切了，没有任何告警」（[#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)）。
- **Windows 安装文档缺口**：「`cargo binstall zeroclaw` 路径没说清楚」（[#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269)）。

**正面信号**：来自 PR 与 RFC 讨论中的反馈显示，Anthropic prompt cache 透传（[#10623](https://github.com/zeroclaw-labs/zeroclaw/pull/10623)）被多名用户视为"高价值改动"；`local_small` 运行时画像（[#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287)）获得 2 个 👍，表明本地优先用户群体在持续增长。

---

## 8. 待处理积压

下列条目值得维护者优先关注：

| 项 | 标题 | 风险 | 首次提出 | 阻塞点 |
|---|---|---|---|---|
| [#9703](https://github.com/zeroclaw-labs/zeroclaw/issues/9703) | RFC: Goal mode v3 — asynchronous child supervision | high | 2026-08-03 | status: blocked |
| [#5287](https://github.com/zeroclaw-labs/zeroclaw/issues/5287) | compact local_small runtime profile and prompt-budget contract | high | 2026-04-04 | status: in-progress 已 5 个月 |
| [#8894](https://github.com/zeroclaw-labs/zeroclaw/issues/8894) | Discoverable ZeroCode session archiving controls | medium | 2026-07-09 | 暂无配套 PR |
| [#6810](https://github.com/zeroclaw-labs/zeroclaw/issues/6810) | User-facing feature and support matrix | low | 2026-05-20 | 文档类，长期 accepted |
| PR [#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977) | fix(tools): confine filesystem mutations to workspace | high | 2026-08-13 | needs-maintainer-review，XL |
| PR [#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381) | fix(security): resolve host launchers before workspace cwd | high | 2026-08-26 | needs-maintainer-review，XL |
| PR [#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) | feat(runtime): coordinate agent lifecycle mutations | high | 2026-09-04 | needs-maintainer-review，XL |
| PR [#9214](https://github.com/zeroclaw-labs/zeroclaw/pull/9214) | feat(eval): live execution mode | high | 2026-07-20 | needs-author-action，整个 evals 栈式 PR 链 |

**维护者警示**：当前 48 条 PR 待合并、49 条 Issue 活跃，其中至少 6 条标记 `needs-maintainer-review` 且风险等级为 high。建议优先聚焦"安全/工具边界"（[#9977](https://github.com/zeroclaw-labs/zeroclaw/pull/9977)、[#10381](https://github.com/zeroclaw-labs/zeroclaw/pull/10381)、[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621)）这三条 XL 改动，可一次性关闭多类长期风险敞口。

---

**整体健康度评估**：⭐⭐⭐☆☆（中等偏上）
项目处于**架构收敛期**，讨论密度高、合并速率低，记忆子系统与 Goal Mode 两条主线尚未落地代码；Bug 报告集中在多入口/跨平台一致性。建议维持每周至少关闭 3-5 条 RFC 评审、合并 2-3 条高风险 PR 的节奏，避免决策队列（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）进一步堆积。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*