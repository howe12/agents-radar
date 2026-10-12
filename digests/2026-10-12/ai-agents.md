# OpenClaw 生态日报 2026-10-12

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-12 03:46 UTC

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

**报告日期：2026-10-12**
**项目：OpenClaw (github.com/openclaw/openclaw)**
**报告人：AI 项目分析师**

---

## 1. 今日速览

OpenClaw 今日继续保持极高的社区活跃度，过去 24 小时共产生 **500 条 Issue 更新**（335 新开/活跃 + 165 已关闭）和 **500 条 PR 更新**（332 待合并 + 168 已合并/关闭），并发布了一个新的 beta 版本 **v2026.10.5-beta.1**。从数据分布看，**Issue 与 PR 数量对等且均接近饱和状态**，反映出项目处于"高速迭代 + 高用户反馈"双轨并行阶段。今日关闭率约 33%（Issue）和 33.6%（PR），闭环效率尚可，但仍有大量 P0/P1 级别的稳定性问题处于开放状态。整体而言，项目**热度过高但健康度承压**，核心矛盾集中在"Gateway 稳定性"与"Updater 可恢复性"两大主题上。

---

## 2. 版本发布

### v2026.10.5-beta.1 已发布

**版本主题：Safer Updates（更安全的更新机制）**

官方说明摘录：
> 更新机制在跨设备、跨文件系统、Windows 提权以及中断激活场景下能够正常完成，并能从陈旧的租约或变动的证据中恢复，而不是将安装停留在"半完成"状态或阻塞后续更新。

**修复的相关 Issue（部分公开）：** #164636、#164769、#165257、#165863 等

**潜在影响：**
- 解决了近期多个 "更新永久卡死"、"managed handoff lease database identity changed"、"deleted temporary handoff database blocks package recovery" 类问题（如 #167771、#167506、#167557）。
- 涉及 updater-runtime-retention 阶段在 LXC 容器内的 FICLONE EPERM 问题（[#164113](https://github.com/openclaw/openclaw/issues/164113)，已关闭）。
- 涉及 update 后健康检查的 false-negative（`ECONNREFUSED`）导致 Gateway 被错误停服问题（[#139082](https://github.com/openclaw/openclaw/issues/139082)）。

**升级建议：** Beta 版，**生产环境暂不建议升级**；建议在 staging 环境先验证，重点观察：
- 多磁盘 / 跨文件系统部署
- Windows + UAC 提权链路
- 长时间运行未重启的实例
- 处于"update-recovery-pending"残留状态的实例

---

## 3. 项目进展（今日合并/关闭的重要 PR 与 Issue）

### 3.1 已关闭的高价值 Issue（修复已落地）

| ID | 主题 | 严重度 |
|---|---|---|
| [#157630](https://github.com/openclaw/openclaw/issues/157630) | 显式 `--max-old-space-size` 静默覆盖 worker `resourceLimits` | P1 |
| [#167771](https://github.com/openclaw/openclaw/issues/167771) | 更新被 `update-recovery-pending` 永久阻塞且无修复路径 | P0 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | LXC 容器内 `FICLONE EPERM` 导致更新失败 | P0 |
| [#164188](https://github.com/openclaw/openclaw/issues/164188) | `package-swap` 权限失败未识别被拒对象 | P2 |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | `gateway-server-close` 步骤偶发失败导致 unit 残留 failed | P0 |
| [#167506](https://github.com/openclaw/openclaw/issues/167506) | 删除的临时 handoff 数据库阻塞包恢复及后续更新 | P0 |
| [#157575](https://github.com/openclaw/openclaw/issues/157575) | Managed Gateway heap flag 覆盖 worker old-space 限制 | P1 |
| [#123265](https://github.com/openclaw/openclaw/issues/123265) | `role:"custom"` 运行时上下文被错误序列化为 `role:"user"` 消息 | P1 |
| [#147420](https://github.com/openclaw/openclaw/issues/147420) | MCP computer tool 路径下执行锁永不释放（`COMPUTER_HOST_BUSY`） | P1 |
| [#136175](https://github.com/openclaw/openclaw/issues/136175) | 2026.8.2 全量本地 memory reindex 饱和 CPU | P1 |
| [#164098](https://github.com/openclaw/openclaw/pull/164098) 等 | release / state / sessions 系列重构 PR | — |

### 3.2 已关闭的 PR（merged/closed）

- **#169398** – chore(ui): 刷新 Control UI locales
- **#169310** – perf(state): 在数据库 admissions 中复用文件系统检查（被作者关闭，但作为参考提交保留）

### 3.3 关键解读

今日 close 的 P0 几乎全部集中在 **update / handoff lease / shutdown 健壮性** 这一条主线上，与新发布版本 `2026.10.5-beta.1` 主题完全一致。**这是 OpenClaw 自 2026.9.5 以来"update 链路"问题的集中收尾。**

同时，**Worker 内存/堆策略** 系列（P1）今天一次性关闭了 [#157630](https://github.com/openclaw/openclaw/issues/157630) 和 [#157575](https://github.com/openclaw/openclaw/issues/157575) 两个孪生 issue，说明维护团队已经把 worker heap policy 列入了 release-quality 重点。

---

## 4. 社区热点

### 4.1 评论最多 / 影响最广的 Issue

| 排名 | ID | 评论数 | 主题摘要 | 标签 |
|---|---|---|---|---|
| 1 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | **122** | Agent SQLite WAL 在数天内增长至 1.4–2.8 GB，阻塞 gateway 启动（Windows 2026.9.2/9.3） | P0, 🦪, message-loss, crash-loop |
| 2 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | **38** | Gateway 严重内存泄漏，RSS 从 350 MB 涨至 15.5 GB（launchd-handoff 重启循环） | P0, 🦪, crash-loop |
| 3 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | **18** | OpenClaw 泄漏未回收的 hook/tool 子进程，形成 zombie 累积 | P1, 🐚, crash-loop |
| 4 | [#148707](https://github.com/openclaw/openclaw/issues/148708) | **18** | "Reply operation has no active tool authority snapshot" 导致回复丢失 | P1, 🐚, session-state, message-loss |
| 5 | [#157989](https://github.com/openclaw/openclaw/issues/157989) | **15** | Plugin source capture 每 CLI 命令写 1.1–1.4 GB、Gateway 启动写 6.5 GB，SSD 损耗 | P1, 🐚, crash-loop |
| 6 | [#160521](https://github.com/openclaw/openclaw/issues/160521) | **15** | Gateway crash：`Worker environment inventory has closed` → unhandled rejection | P0, 🦞, crash-loop |
| 7 | [#160959](https://github.com/openclaw/openclaw/issues/160959) | **13** | 2026.9.6 起 Gateway 启动在捕获大型外部插件时阻塞数分钟 | P0, 🦞, crash-loop |
| 8 | [#145309](https://github.com/openclaw/openclaw/issues/145309) | **12** | `claude-cli` 后端忽略 `CLAUDE_CONFIG_DIR`，导致 transcript 找不到 | P1, 🦞 |
| 9 | [#104719](https://github.com/openclaw/openclaw/issues/104719) | **12** | memory-wiki supplement 穷尽式回退忽略工具 deadline | P1, 🦞 |
| 10 | [#168955](https://github.com/openclaw/openclaw/issues/168955) | **10** | 2026.10.1 启动回归：ready 1030s vs 410s（Windows）；sidecars.control-ui-assets 阻塞 477s | P1, 🦪 |

### 4.2 评论最多的 / 关注度最高的 PR

| ID | 主题 | 大小 |
|---|---|---|
| [#169063](https://github.com/openclaw/openclaw/pull/169063) | **perf(agents): remove automatic tool payload secret masking**（安全敏感变更） | XL |
| [#169375](https://github.com/openclaw/openclaw/pull/169375) | refactor: 合并 UI 与 package lifecycle bookkeeping（wave-2） | XL |
| [#169553](https://github.com/openclaw/openclaw/pull/169553) | perf(sessions): transcript bookkeeping 迁移到 worker owner | XL |
| [#169579](https://github.com/openclaw/openclaw/pull/169579) | refactor(sessions): 子节点与元数据读操作迁到 worker | XL |
| [#169581](https://github.com/openclaw/openclaw/pull/169581) | refactor(gateway): GitHub publication worker cutover | XL |
| [#169580](https://github.com/openclaw/openclaw/pull/169580) | fix(state): Gateway state 消费者走 worker | XL |
| [#141004](https://github.com/openclaw/openclaw/pull/141004) | feat(audit): 记录观察到的 runtime skill 使用情况 | XL |
| [#157500](https://github.com/openclaw/openclaw/pull/157500) | feat: workers / 节点使用选定 GitHub 身份 | XL |
| [#169520](https://github.com/openclaw/openclaw/pull/169520) | refactor(agent): 整合 runtime 与 worktree bookkeeping | XL |
| [#150148](https://github.com/openclaw/openclaw/pull/150148) | feat(ui): WebChat 实时流式显示 reasoning | L |
| [#169519](https://github.com/openclaw/openclaw/pull/169519) | perf(gateway): plugin 注册之间让出事件循环 | M |
| [#169563](https://github.com/openclaw/openclaw/pull/169539) | fix: 解析 agent workspace 之外的 plugin-discovered models | M |
| [#166568](https://github.com/openclaw/openclaw/pull/166568) | fix: media delivery 复用 response index 时保留 assistant 答案 | XL |
| [#169562](https://github.com/openclaw/openclaw/pull/169562) | fix(onboarding): setup detection 每次都全量重扫 | S |

### 4.3 背后诉求分析

热点话题呈现三大集中方向：

1. **存储与进程资源失控（占热点 60%+）**：WAL 膨胀、RSS 泄漏、child process 泄漏、SSD 写放大 —— 这是 P0 的主要来源，社区情绪集中在"我的磁盘怎么又满了 / 网关又挂了"。
2. **Gateway 启动 / 更新链路脆弱**：plugin capture 阻塞、control-ui-assets 慢启动、handoff lease 卡死 —— 反映运维侧的最大摩擦。
3. **Worker / State 架构重构集中爆发**：steipete 今日提交的 7 个 XL PR 形成 "cutover wave"，目标是把所有 SQLite I/O 从 Gateway 主线程迁出。这是一个**有意识的架构大重构**，可能伴随一定的合并风险（多个 PR 带 `merge-risk: 🚨 compatibility` 与 `merge-risk: 🚨 session-state` 标记）。

---

## 5. Bug 与稳定性

### 5.1 P0 级（影响 crash-loop / 升级阻塞）

| Issue | 主题 | 是否已有 fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 持续膨胀（Windows 2026.9.2/9.3） | ❌ 无 |
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 泄漏到 15.5 GB 触发 OOM | ❌ 无 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | Gateway crash: state DB read-admission seal 关闭导致 unhandled rejection | ❌ 无 |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 启动在大型插件 capture 时阻塞数分钟 | ❌ 无（plugin capture 系列问题） |
| [#167557](https://github.com/openclaw/openclaw/issues/167557) | Deferred plugin data/settings migration 不收敛 + handoff lease DB identity changed | ❌ 无 |
| [#139082](https://github.com/openclaw/openclaw/issues/139082) | 更新后健康检查 false-negative 让 Gateway 停服 | ❌ 无 |

### 5.2 P1 级（影响 message-loss / session-state / 回归）

| Issue | 主题 | 是否已有 fix PR |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 泄漏未回收的 hook/tool 子进程 | ❌ 无 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | Reply operation has no active tool authority snapshot（2026.9.4 回归） | ❌ 无 |
| [#157989](https://github.com/openclaw/openclaw/issues/157989) | Plugin source capture SSD 磨损 | ❌ 无 |
| [#145309](https://github.com/openclaw/openclaw/issues/145309) | claude-cli 忽略 CLAUDE_CONFIG_DIR | ✅ linked-pr-open |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki supplement 忽略 deadline | ✅ linked-pr-open |
| [#158788](https://github.com/openclaw/openclaw/issues/158788) | Cron agent 在 Windows 上 DataCloneError | ❌ 无 |
| [#159512](https://github.com/openclaw/openclaw/issues/159512) | claude-cli 子代理完成时 resume hash 双失效 | ❌ 无 |
| [#126950](https://github.com/openclaw/openclaw/issues/126950) | Telegram 不透明 callback 被静默丢弃 | ❌ 无 |
| [#166665](https://github.com/openclaw/openclaw/issues/166665) | 失败的 byte-triggered compaction 自我抑制，transcript 无界增长 | ❌ 无 |
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 2026.10.1 启动时间 ~1030s vs ~410s | ❌ 无 |

### 5.3 严重度评估

**总体评估：稳定性问题处于"高发期但有收敛迹象"。**

- 6 个 P0 中有 3 个（#167506、#167771、#139082 类）已在 2026.10.5-beta.1 的 Safer Updates 中得到部分修复预期，**预计下个 stable 版本 P0 数量会下降 40–50%**。
- 内存与 WAL 类（#143524、#91588、#97616）是"陈年老大难"，无 PR 关联，**维护者需重点关注**。
- 多项 P1 都标记了 `clawsweeper:no-new-fix-pr` 与 `clawsweeper:needs-maintainer-review`，**说明目前缺乏足够的工程带宽**。

---

## 6. 功能请求与路线图信号

### 6.1 明确的增强需求（来自 Issue）

| Issue | 功能 | 社区反应 |
|---|---|---|
| [#14785](https://github.com/openclaw/openclaw/issues

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告
**报告日期：2026-10-12 · 涵盖 13 个开源项目**

---

## 1. 生态全景

2026-10-12 当日的开源个人 AI 助手/智能体生态呈现**显著的"两极分化"态势**：以 OpenClaw、ZeroClaw、CoPaw/QwenPaw 为代表的"重工程型"项目已进入 PR 流量峰值，单日 PR 处理量在 21–500 之间，正处于版本冲刺期；而 IronClaw、TinyClaw、Moltis、ZeptoClaw、LobsterAI 等多个项目当日**完全无活动**，进入了静默维护期；介于两者之间的 NanoBot、Hermes Agent、NanoClaw、NullClaw、PicoClaw 各自以不同节奏推进。从技术焦点看，**会话内存治理、可恢复自更新、WASM 插件托管、多通道 IM 路由** 是跨项目共识最高的四个主题，反映出整个生态正从"功能能用"过渡到"生产可信"阶段。

---

## 2. 各项目活跃度对比

| 项目 | 新 Issue | 待合并 PR | 今日合并/关闭 | 版本发布 | 健康度评估 | 主要特征 |
|---|---:|---:|---:|---|---|---|
| **OpenClaw** | 335 | 332 | 168 | **v2026.10.5-beta.1** | 🔴 高热承压 | Gateway/Update 链路集中收尾 |
| **ZeroClaw** | 16 | 41 | 2 | 无 | 🟡 release-gate 紧张 | WASM 插件 + 持久化记忆双主线 |
| **Hermes Agent** | ~25* | 47 | 3 | 无 | 🟡 需求旺/闭环慢 | Skills/Desktop/Gateway 三线失衡 |
| **CoPaw/QwenPaw** | 10 | 9 | 12 | 无 | 🟢 周内峰值 | MCP/插件市场/桌面端多线推进 |
| **NanoBot** | 1 | 17 | 5 | 无 | 🟢 良好 | 自更新/WebUI/Provider 三轨 |
| **NanoClaw** | 2 | 4 | 8 (合并 7 + 关闭 1) | 无 | 🟢 收口快 | Slack/容器/调度器清理 |
| **NullClaw** | 2 | 1 | 0 | 无 | 🟢 技术质量高，社区参与窄 | 单一作者主导 session 治理 |
| **PicoClaw** | 2 | 2 | 0 | 无 | 🟡 待响应超时 | 单贡献者，自带修复 |
| **IronClaw** | 0 | 4 | 3 | 无 | 🟠 纯依赖维护期 | Dependabot 单轨 |
| **LobsterAI** | 0 | 0 | 1 (stale 关闭) | 无 | 🔴 进入静默期 | Stale PR 清理 |
| **TinyClaw** | 0 | 0 | 0 | 无 | ⚫ 无活动 | — |
| **Moltis** | 0 | 0 | 0 | 无 | ⚫ 无活动 | — |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚫ 无活动 | — |

*注：Hermes Agent 的 50 条 Issue 中包含历史活跃，不全为当日新增。

---

## 3. OpenClaw 在生态中的定位

**优势维度：**
- **社区规模与吞吐领先**：500 条 Issue + 500 条 PR 日处理量，是生态中绝对头部，单日合并 168 PR，是 ZeroClaw（2）、CoPaw（12）、NanoBot（5）的 8–80 倍以上。
- **版本节奏健康**：v2026.10.5-beta.1 是生态中**当日唯一发版项目**，且 change log 主题明确（Safer Updates），说明工程化发版流程运转。
- **架构自审主动**：今日合并的 7 个 XL 级 worker/state cutover PR 显示维护者**有意识地在做架构大重构**，主动把 SQLite I/O 迁出 Gateway 主线程，治理决心强。
- **跨平台覆盖最广**：comment 列表显示 Windows/macOS/Linux 三大平台 + LXC 容器 + UAC 提权等部署形态均有用户实例。

**劣势/承压维度：**
- **P0 问题量级独大**：WAL 膨胀（#143524，122 评论）、RSS 泄漏（#91588，38 评论）、plugin capture SSD 损耗（#157989）—— 这三个 P0 **生态内独一无二**，反映其复杂性带来的特有故障域。
- **架构 cutover 风险**：XL PR 集中的 worker cutover wave 多个带 `merge-risk: 🚨` 标记，**短期合并风险高于其他项目**。
- **Update 链路反复**：v2026.10.5-beta.1 之前累积的 lease database / handoff / recovery 残留类 P0 数量，反映**自更新治理是其历史弱项**，目前正以集中爆发方式修补。

**技术路线差异：**
- OpenClaw 是 **"Gateway + Worker + State DB"** 三层架构，引入 SQLite 状态数据库做事务边界；
- NanoBot、NanoClaw 是 **"单进程 + Provider 适配"** 轻量级；ZeroClaw 走 **"WASM 沙箱 + Capability 传播"**；CoPaw/QwenPaw 是 **"Desktop App + MCP + 插件市场"** 形态。
- 即：OpenClaw 在生态中扮演"准企业级 Gateway 网关"的角色，与轻量级个人助手（NanoBot、PicoClaw）和桌面级 IDE（CoPaw/QwenPaw）形成清晰的产品层级划分。

**社区规模量级对比：**
OpenClaw 单一项目当日的 PR 流量 ≈ ZeroClaw + NanoBot + NanoClaw + Hermes Agent + CoPaw + NullClaw + PicoClaw 全部加和的 1.4 倍。**没有任何项目接近其规模**。

---

## 4. 共同关注的技术方向

| 共性方向 | 涉及项目 | 具体诉求聚焦点 |
|---|---|---|
| **会话历史/持久化记忆治理** | OpenClaw (#143524)、NullClaw (#1053/#1055)、ZeroClaw (#8891/#10755/#11655)、NanoBot (Provider 抽象) | 长期会话的 context 边界、compaction write-back、auto-compaction 实际生效、provenance 保留 |
| **可恢复自更新** | OpenClaw (v2026.10.5-beta.1)、NanoBot (#5817/#6168)、Hermes (#136281 stable.json 404)、PicoClaw (无更新机制但缺) | 跨设备/容器/Windows 的 handoff lease、更新期 health check false-negative、Updater 残留状态清理 |
| **Gateway 内存/进程资源** | OpenClaw (#91588 RSS、#97616 子进程)、ZeroClaw (#11615 Telegram retry)、PicoClaw (#3422 长轮询) | RSS 泄漏、child process 泄漏、HTTP 连接超时、429 重试策略 |
| **WASM 插件 / 扩展系统** | ZeroClaw (#11228/#11261/#11347)、OpenClaw (plugin capture 系列) | 签名、staged admission、TLS 硬化、CLI update 子命令、quickstart 集成 |
| **多通道 IM 适配** | NanoBot (Telegram/Mattermost/Weixin)、NanoClaw (Slack/Signal)、OpenClaw、ZeroClaw (Telegram/Lark)、CoPaw (MCP-tool) | 各通道协议细节（callback 数据、Telegram 新建 topic 无 thread_id 等）、DM/Channel 语义分流 |
| **Provider/Model 抽象** | NanoBot (#6155/#6156/#6159)、Hermes (#6626 Gemma4)、CoPaw (#7990 Aliyun Token Plan)、OpenClaw (multiple backend) | reasoning_effort 字段透传、命名连接复用、本地模型 tool calling 兼容性 |
| **桌面端体验** | CoPaw (#5569 白屏、#8137 reduced effects)、Hermes (#129993 重复渲染、#136681 iframe)、NanoBot (WSL 启动) | 启动白屏、CSP/Iframe 嵌入、可访问性偏好、跨端打包 |
| **文档与代码漂移** | Hermes (#87048/#87552 等)、NanoBot (#6165 onboarding 抱怨)、PicoClaw (无文档) | skills 路径错误、`python3` 不存在的跨平台文档、CI 验证缺失 |
| **Web UI / Settings 系统化** | NanoBot (#6161/#6162/#6158)、OpenClaw (WebChat 实时流)、CoPaw (per-chat 审批持久化) | 设置项归位、通知失败可操作化、实时流式显示 |
| **Windows 平台质量** | OpenClaw (#168955 启动时间)、Hermes (#87048/#88945)、ZeroClaw (#11665 安装器) | 启动慢、`CREATE_NO_WINDOW`、`python3` 命令、签名/WSL 支持 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能 Personal Agent Gateway + 桌面/CLI | 中大型部署、跨平台用户、技术决策者 | Gateway/Worker/State 三层架构，SQLite WAL 状态机，强调 update recovery |
| **ZeroClaw** | 可扩展 WASM 插件 + 持久化记忆 | 追求可验证安全沙箱的高级用户 | WASM (cranelift) + capability 显式传播 + 多通道 plugin runtime |
| **CoPaw/QwenPaw** | 桌面 IDE 形态 + MCP 生态 + 多端覆盖 | 偏好 GUI 的生产力用户、Qwen 模型用户 | Desktop App + 插件市场 (版本路由) + MCP tool registry |
| **NanoBot** | 自更新 + 多通道 + Provider 灵活性 | 重视"内嵌可用性"的自托管用户 | 单进程设计、ReMeLight 可选 memory、`@every` 调度 |
| **Hermes Agent** | Skills 目录 + 多语言生态 + Desktop | Skills 重度用户、本地化协作 | Plugin Catalog + 多语言翻译包 + Desktop app |
| **NanoClaw** | Slack 优先 + 容器化部署 + 自动化 | Slack 重度团队、企业自动化 | 容器挂载统一 (`/workspace/agent`)、Node 化示例脚本 |
| **PicoClaw** | 极简 Go 网关 + 手工部署 | 进阶个人用户、单主机场景 | 纯 Go、无外部依赖、HTTP 长轮询 |
| **NullClaw** | Zig 性能极致 + session 紧凑治理 | 性能敏感、追求代码质量的开发者 | Zig 语言 + 7491/7500 测试覆盖 + max_history_messages 边界 |
| **IronClaw** | NearAI 生态对齐 | NearAI 用户 | Rust 生态、对 Anthropic Claude Action 紧跟 |
| **LobsterAI** | 中文教育/学习助手 | 中文学习用户 | — |

**关键架构差异点：**
- **持久化栈**：OpenClaw（SQLite WAL）vs ZeroClaw（RAG + typed row）vs NullClaw（session store with sequence guard）vs NanoBot（可选 memory）
- **扩展性**：WASM（ZeroClaw）vs Plugin Market（CoPaw）vs Skills Catalog（Hermes）vs Provider 抽象（NanoBot）
- **进程模型**：Gateway-Worker 分离（OpenClaw）vs 单进程（NanoBot/PicoClaw）vs Desktop App（CoPaw/Hermes）

---

## 6. 社区热度与成熟度

### 🔥 快速迭代阶段（PR 流量峰值、版本冲刺）

- **OpenClaw**：500 PR 中 168 合并 + 1 beta 发布，release-gate 冲刺明显。
- **ZeroClaw**：43 PR 中 41 待合并 + 6 RFC + Tracker #8891 持续拉通，**进入 v0.8.6/v0.9.0 关键节点**。
- **CoPaw/QwenPaw**：31 项更新中 12 PR 合并，多个历史长期积压 PR（#2520、#5569、#5732）一次性关闭，**v2.2.2 候选构建临近**。
- **Hermes Agent**：50 条 Issue + 50 条 PR 但仅 3 PR 合并，**"需求旺/闭环慢"特征显著**，部分 Issue（#6626）已挂置 6 个月未解。

### 🔧 质量巩固阶段（修复合并比高、外部依赖低）

- **NanoClaw**：12 PR 中 8 合并，**合并率 67%**，聚焦 Slack/容器/调度器的语义收敛和清理，呈现"减法式"维护哲学。
- **NanoBot**：22 PR 中 5 合并，以小颗粒度修复为主，节奏稳健。
- **NullClaw**：1 PR + 2 Issue 高度聚焦，单一作者（vernonstinebaker）纵深推进 session 边界，**深度优于广度**。

### 🪫 维护/静默阶段

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-10-12**
**项目：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 今日呈现 **高 PR 强度 + 低 Issue 反馈** 的开发节奏。社区在 24 小时内提交了 22 个 Pull Request，其中 5 个已完成合并/关闭，17 个仍待审；同时仅新增 1 条用户 Issue。整体 PR 覆盖自更新、WebUI、通道适配、Cron、Provider 兼容等多个领域，多名贡献者（Re-bin、chengyongru、KailBug、Hugo-DDT 等）并行推进工作，项目活跃度处于较高水平。今日未发布新版本，多个 P1 级别修复正在流转中但尚未落地。

---

## 2. 版本发布

今日无新版本发布。多个面向下一版本的功能与修复 PR 仍在评审阶段（详见下文 §3、§6）。

---

## 3. 项目进展

今日共关闭/合并 5 个 PR，项目在自更新链路、WSL 适配、Telegram 适配、工作区访问提示与通道清理方面均取得实质推进：

| PR | 标题 | 作者 | 意义 |
|---|---|---|---|
| [#5817](https://github.com/HKUDS/nanobot/pull/5817) | feat: add stable and source self-update flows | chengyongru | 建立 `nanobot update` 稳定/源码双模式自更新能力，作为后续集成分支的基础 |
| [#6169](https://github.com/HKUDS/nanobot/pull/6169) | fix(channels): remove retired outbound metadata compatibility | chengyongru | 清理 Mattermost/Weixin 适配器中的遗留兼容代码，修复 `ProgressEvent` 提前触发的回归 |
| [#6150](https://github.com/HKUDS/nanobot/pull/6150) | fix(webui): support WSL browser launch and clearer startup output | chengyongru | 修复 WSL 环境下 WebUI 无法调用 Windows 浏览器的问题 |
| [#6149](https://github.com/HKUDS/nanobot/pull/6149) | fix(telegram): classify remote media URLs by path extension | Wenyan0315 | 修复带 query string 的远程媒体 URL 被误判为 `document` 的问题 |
| [#6113](https://github.com/HKUDS/nanobot/pull/6113) | fix(agent): report current workspace access before tool use | Re-bin | 让模型在调用工具前即可获知当前工作区与沙箱状态，减少误操作 |

综合来看，项目今天在 **自更新体系成型、WSL/Linux 桌面体验完善、多通道兼容代码瘦身** 三个方向上都有清晰推进。

---

## 4. 社区热点

由于今日多数 PR/Issue 的评论数仍为 0 或未统计，"热点" 主要体现在 **内容影响力** 而非评论热度上：

- **[Issue #6165](https://github.com/HKUDS/nanobot/issues/6165)** — `jerkstorecaller` 反映官方 Docker 镜像 `docker compose up` 后无法正常工作，并批评 onboarding 文档质量。这是今日唯一来自终端用户的真实反馈，触及"开箱即用"这一核心体验指标，**建议维护者优先响应**。
- **[PR #6168](https://github.com/HKUDS/nanobot/pull/6168)** — Re-bin 提交的大型集成分支，将精确版本更新器、真实 WebUI 流程、默认安装器与 RC 打包整合到一条验收分支之上，承接 #5817 与 #6154 的工作，是近期最受关注的特性集成。
- **[PR #5817](https://github.com/HKUDS/nanobot/pull/5817)** — 自更新流程的奠基性 PR，已于今日关闭并被 #6168 承接。

社区诉求集中在两条线：①希望产品能"开箱即用、稳定自更新"；②希望 WebUI 在不同桌面环境（WSL、Linux、macOS）下都能顺畅启动。

---

## 5. Bug 与稳定性

按严重程度整理今日相关 Bug 与对应修复 PR：

### 🔴 P1（高优先级，已挂修复 PR）
- **Cron 定时任务在网关重启后丢失待执行任务**  
  - Issue/PR：[#6167](https://github.com/HKUDS/nanobot/pull/6167)（Hugo-DDT）  
  - 根因：`CronService._recompute_next_runs()` 与 `register_system_job()` 在每次启动时都从 `now` 重新计算 `every` 任务的下一执行点，**尚未合并**。

- **子代理绕过父会话的禁用工具限制（安全相关）**  
  - Issue/PR：[#6112](https://github.com/HKUDS/nanobot/pull/6112)（KailBug，标记为 conflict）  
  - 父会话拒绝 `write_file` 后，子代理仍可写入文件。**PR 当前存在合并冲突**，需要维护者介入解决。

### 🟡 P2（已挂修复 PR，多为通道/Provider 兼容问题）
- **WebUI Settings 的 Restart 按钮产生空聊天记录**：[#6162](https://github.com/HKUDS/nanobot/pull/6162)
- **Dream commit 恢复时遗漏被重新创建的已删除文件**：[#6164](https://github.com/HKUDS/nanobot/pull/6164)
- **GLM 模型 `reasoningEffort: "none"` 被静默忽略**：[#6155](https://github.com/HKUDS/nanobot/pull/6155)
- **MiMo Responses 接口同样过滤 `"none"`**：[#6156](https://github.com/HKUDS/nanobot/pull/6156)
- **Provider 重试等待事件被通道无条件丢弃**：[#6163](https://github.com/HKUDS/nanobot/pull/6163)
- **浏览器通知开关失败无可操作提示**：[#6158](https://github.com/HKUDS/nanobot/pull/6158)
- **飞书助手创建与配对回复恢复**：[#6157](https://github.com/HKUDS/nanobot/pull/6157)
- **Web 代理控件归位至 Web access 设置页**：[#6161](https://github.com/HKUDS/nanobot/pull/6161)
- **默认 Docker 镜像无法启动**：[#6165](https://github.com/HKUDS/nanobot/issues/6165)（暂无对应修复 PR）

整体看，今日 Bug 修复链路覆盖度高，多数 P2 项已有对应 PR；但 **P1 仍待合入，Docker 镜像问题暂未有 PR 认领**。

---

## 6. 功能请求与路线图信号

今日的功能性 PR 集中在 **自更新体系、WebUI 体验、Provider/模型精细化控制** 三大方向，体现出以下路线图信号：

1. **可恢复的自更新将成为下一个里程碑**  
   - [PR #6168](https://github.com/HKUDS/nanobot/pull/6168) 整合了 #5817 的版本更新与 #6154 的 RC 打包流程，目标是把"用户能在应用内完成可恢复更新"作为官方验收标准。

2. **WebUI 设置层级正在系统化重构**  
   - 多个 PR 集中调整 WebUI 导航：[#6162](https://github.com/HKUDS/nanobot/pull/6162)（设置重启移出聊天历史）、[#6161](https://github.com/HKUDS/nanobot/pull/6161)（Web 代理归位）、[#6158](https://github.com/HKUDS/nanobot/pull/6158)（通知失败可操作化）。Re-bin 正在主导这轮 UI/UX 整合。

3. **Provider 抽象层进一步细粒度化**  
   - [PR #6159](https://github.com/HKUDS/nanobot/pull/6159)（每模型预设请求覆盖）、[PR #6160](https://github.com/HKUDS/nanobot/pull/6160)（图像请求复用命名连接）— 显示 NanoBot 正强化"同一网关多 Provider 多模型"的精细配置能力。

4. **飞书等本土通道体验补齐**  
   - [PR #6157](https://github.com/HKUDS/nanobot/pull/6157) 恢复"再添加一个飞书助手"与配对回复可恢复性，反映国内 IM 通道仍是重点投入领域。

---

## 7. 用户反馈摘要

今日仅 [#6165](https://github.com/HKUDS/nanobot/issues/6165) 一条来自终端用户的反馈，且尚无评论。可提炼的痛点如下：

- **Docker 开箱即用失败**：`git clone && docker compose up` 的标准流程得不到一个能工作的 Nanobot，违背 Docker 镜像的预期价值。
- **Onboarding 文档质量差**：用户原话抱怨"被迫读 docker-compose 与 Dockerfile 才能诊断"，说明新用户首次接触项目的门槛偏高。
- **无满意/不满意评分参考**（评论为 0、👍 为 0），维护者宜主动联系 reporter 跟进以获取更多上下文。

---

## 8. 待处理积压

需要维护者重点关注的几项：

| 项目 | 类型 | 状态 | 链接 |
|---|---|---|---|
| #6112 | P1 安全 PR | 标记为 **conflict**，自 10-09 起未合入 | [链接](https://github.com/HKUDS/nanobot/pull/6112) |
| #6165 | 用户 Issue | 唯一未回复的 Issue，Docker 镜像可用性问题 | [链接](https://github.com/HKUDS/nanobot/issues/6165) |
| #6168 | 大型集成 PR | 综合性验收分支，评审面广、合并前需要充分回归 | [链接](https://github.com/HKUDS/nanobot/pull/6168) |
| #6166 | 架构边界测试 | 提议为 Gateway/WebUI/TUI 客户端事件模块加入可执行 import 边界规则，属于中长期架构治理 | [链接](https://github.com/HKUDS/nanobot/pull/6166) |
| #6170 | 命令处理重构 | 区分"已处理但无回复"与"普通输入"，涉及核心 AgentLoop 行为 | [链接](https://github.com/HKUDS/nanobot/pull/6170) |

---

### 总结

NanoBot 今日开发节奏紧凑且方向清晰：**自更新收尾、WebUI/UX 整合、Provider 与通道兼容性修复** 三线并行。健康度评估为 **良好**，但需警惕两点风险：① P1 Bug（cron 重启丢失、子代理权限绕过、Docker 启动失败）若累积不修将影响产品口碑；②大型集成 PR #6168 的评审与回归压力较大，建议分批合入以降低风险。

*日报生成于 2026-10-12，数据来源：GitHub 公开 API。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：2026-10-12**
**项目地址：** [github.com/nousresearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 今日呈现**高活跃、低合并**的状态：过去 24 小时内共有 50 条 Issue 与 50 条 PR 更新，但**仅 3 条 PR 完成合并/关闭、0 条 Issue 关闭、0 个新版本发布**，待合并 PR 积压 47 条。社区讨论热点高度集中在 **Skills 体系（脚本路径/文档漂移/安全）**、**Desktop 客户端（UI 渲染/插件目录）** 与 **Telegram Gateway（消息路由/会话状态）** 三大领域，反映出 Skills 生态与多通道集成在快速迭代中出现明显磨合阵痛。整体健康度评估：**中下**——需求端持续旺盛，但代码侧闭环速度偏慢，部分长生命周期问题（如 #6626 Gemma 4 工具调用）已悬而未决逾半年。

---

## 二、版本发布

**本周期内无新版本发布。** 最近一次版本为 v0.20.5（参见 Issue #91542 中的版本号引用），当前 `main` 分支处于持续集成状态。

---

## 三、项目进展

过去 24 小时内仅 3 条 PR 完成合并/关闭，进展较为有限：

| PR | 状态 | 说明 |
|---|---|---|
| [#136940](https://github.com/NousResearch/hermes-agent/pull/136940) | **CLOSED** | feat(lsp): support bun as package manager for language servers — 已关闭（推测未通过审查或被替代方案取代） |
| [#136943](https://github.com/NousResearch/hermes-agent/pull/136943) | OPEN | docs(skills): drop the nonexistent toolsets= argument from delegate_task examples |
| [#136937](https://github.com/NousResearch/hermes-agent/pull/136937) | OPEN | fix(skills): read the pane before answering the Claude Code trust dialog |

需要注意的是，**已提交的 47 条待合并 PR 中有大量高质量修复**（详见下文"待处理积压"），但尚未进入合并通道，代码侧的吞吐瓶颈较为明显。

---

## 四、社区热点

按评论数排序，今日讨论最活跃的议题：

### 🔥 Top 1（13 评论）[#129993](https://github.com/NousResearch/hermes-agent/issues/129993)
**Desktop：助手回复在同一轮渲染两次**（持久化只有一次）。这是桌面端 UI 渲染逻辑与持久化层不一致的典型案例，触及「sweeper:risk-session-state」风险标签，可能与折叠步骤块的 React/Vue 组件重渲染有关，影响用户对回复可信度的判断。

### 🔥 Top 2（13 评论，👍 4）[#6626](https://github.com/NousResearch/hermes-agent/issues/6626)
**Gemma 4 工具调用支持**（创建于 2026-04-09，悬置半年）。用户报告 vLLM 部署的 `google/gemma-4-E4B-it` 在 Hermes Agent 中无法正确解析 tool call，需求侧强烈但维护侧响应不足，**反映本地/开源模型工具调用兼容性是结构性短板**。

### 🔥 Top 3（12 评论）[#136567](https://github.com/NousResearch/hermes-agent/issues/136567)
**Telegram DM Topics：新建主题的首条消息无 `message_thread_id`，被 lobby 错误路由到上一个主题**。这是一个非常细微但高频踩坑的多通道协议细节问题，bot DM 启用 Forum（Threads）后，新主题首条消息在 Telegram 协议层就是无 thread 的，需要 Hermes 的 lobby 恢复逻辑正确处理。

### Top 4（7 评论）[#136281](https://github.com/NousResearch/hermes-agent/issues/136281)
**`hermes-assets.nousresearch.com/releases/channels/stable.json` 返回 404**。这是更新检查通道的基础设施故障，**直接影响所有用户的版本检测**，严重程度被低估（P2）。

### Top 5–10
- [#60551](https://github.com/NousResearch/hermes-agent/issues/60551)（6 评论）config.yaml 写入保护与 `hermes config set` 标量/列表处理错误
- [#29584](https://github.com/NousResearch/hermes-agent/issues/29584)（5 评论）productivity/maps skill 路径错误
- [#118116](https://github.com/NousResearch/hermes-agent/issues/118116)（4 评论）Kanban 每个 board 独立的 in-progress 上限
- [#88945](https://github.com/NousResearch/hermes-agent/issues/88945)（3 评论）Windows 平台 spawn 进程时无 `CREATE_NO_WINDOW` 标志
- [#136930](https://github.com/NousResearch/hermes-agent/issues/136930)（3 评论）`agent_close` 静默中断后台任务，Telegram 无恢复通知
- [#91542](https://github.com/NousResearch/hermes-agent/issues/91542)（3 评论）grounded-citations skill 缺 `scripts/_hermes_home.py`

**社区诉求集中度分析：** Skills 文档与实现漂移、Desktop UI 渲染、Gateway 协议细节，是当前社区反馈最密集的三个领域。

---

## 五、Bug 与稳定性

按严重程度（标记 + 跨版本影响面）排序：

### 🔴 P2 严重（建议优先修复）

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#136281](https://github.com/NousResearch/hermes-agent/issues/136281) | 更新通道 `stable.json` 404，所有用户受影响 | ❌ 无 |
| [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) | Desktop 回复重复渲染 | ❌ 无 |
| [#136567](https://github.com/NousResearch/hermes-agent/issues/136567) | Telegram 新建主题首消息被错误路由 | ❌ 无 |
| [#136681](https://github.com/NousResearch/hermes-agent/issues/136681) | Desktop 插件目录 iframe 因 `X-Frame-Options: DENY` 渲染空白 | ❌ 无 |
| [#131624](https://github.com/NousResearch/hermes-agent/issues/131624) | Desktop stage-and-swap 升级中途 SIGTERM 正在运行的 app | ❌ 无 |
| [#128937](https://github.com/NousResearch/hermes-agent/issues/128937) | `resvg-py==0.4.0` 缺少 publish time，**所有插件启用被阻塞** | ❌ 无 |
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | Gemma 4 工具调用解析失败（**已悬置 6 个月**） | ❌ 无 |
| [#136930](https://github.com/NousResearch/hermes-agent/issues/136930) | `agent_close` 静默中断后台任务 | ❌ 无 |
| [#60551](https://github.com/NousResearch/hermes-agent/issues/60551) | config.yaml 写入保护误拒绝，列表键写为字符串 | ❌ 无 |
| [#88945](https://github.com/NousResearch/hermes-agent/issues/88945) | Windows spawn 弹出控制台窗口 | ❌ 无 |

### 🟡 P3 中等

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#106671](https://github.com/NousResearch/hermes-agent/issues/106671) | GitHub skill 残留拆分布局路径、不安全认证回退 | ❌ 无 |
| [#106672](https://github.com/NousResearch/hermes-agent/issues/106672) | requesting-code-review 在 review-only 请求中可能 commit | ❌ 无 |
| [#87552](https://github.com/NousResearch/hermes-agent/issues/87552) | hermes-agent skill 包含安全敏感过时指引 | ❌ 无 |
| [#29584](https://github.com/NousResearch/hermes-agent/issues/29584) | productivity/maps skill 路径错误 | ❌ 无 |
| [#122464](https://github.com/NousResearch/hermes-agent/issues/122464) | pdf skill 表格单元格不换行、超出页面 | ❌ 无 |
| [#91542](https://github.com/NousResearch/hermes-agent/issues/91542) | grounded-citations skill 缺脚本 | ❌ 无 |
| [#88660](https://github.com/NousResearch/hermes-agent/issues/88660) | 6 个 skill bug（3 功能 + 3 文档） | ❌ 无 |
| [#87048](https://github.com/NousResearch/hermes-agent/issues/87048) | blocked-page-recovery 仍用 `python3`（Windows 不存在） | ❌ 无 |
| [#84432](https://github.com/NousResearch/hermes-agent/issues/84432) | Codex skill 错误要求 PTY 和 Git | ❌ 无 |

**关键观察：** 在 30 条被分析的 Issue 中，**已找到关联 fix PR 的不足 5 条**，且无一条已被合并。Bug 修复的代码侧响应速度严重滞后于报告速度。

---

## 六、功能请求与路线图信号

### 较可能进入下一版本

| 需求 | 对应 PR/Issue | 信号强度 |
|---|---|---|
| **会话边界触发后台 memory review** | [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | 🟢 中：触及 memory/sessions/compression 核心模块，是 `memory.nudge_interval` 的自然延伸 |
| **Desktop model picker 显示 context window** | [#136656](https://github.com/NousResearch/hermes-agent/issues/136656) | 🟢 中：纯 UI 增强、需求明确 |
| **Thai 语言包 hermes-lang-th** | PR [#136934](https://github.com/NousResearch/hermes-agent/pull/136934) | 🟢 高：Plugin Catalog PR 已就绪、覆盖率 99.9% |
| **hermes-tabular 表格 ML 插件** | PR [#136938](https://github.com/NousResearch/hermes-agent/pull/136938) | 🟢 高：Plugin Catalog PR 已就绪 |
| **per-board in-progress 上限覆盖** | [#118116](https://github.com/NousResearch/hermes-agent/issues/118116) | 🟡 中：自动化报告 bot 已归档 |
| **bun 作为 LSP 包管理器** | PR [#136940](https://github.com/NousResearch/hermes-agent/pull/136940) | 🟡 中：已被关闭，可能需要重新设计或与上游策略对齐 |

### 值得关注的"沉默需求"

- **Local model tool calling 兼容矩阵**（Gemma 4 等）：[#6626](https://github.com/NousResearch/hermes-agent/issues/6626) 长期未解，社区多次呼吁官方提供兼容性表格。
- **Desktop 插件目录 iframe 嵌入问题**：[#136681](https://github.com/NousResearch/hermes-agent/issues/136681) 揭示 docs 站改 CSP 后未同步调整嵌入策略，说明跨端部署的协调流程有缺位。

---

## 七、用户反馈摘要

### 🔴 痛点高频词

1. **"脚本路径不存在"** —— 多名用户在不同 skills（maps、pdf、grounded-citations、github、codex）上撞到路径错误或不存在的 Python 脚本，说明 **skills 打包/安装流程缺乏 CI 验证**。
2. **"文档与代码不一致"** —— [#125183](https://github.com/NousResearch/hermes-agent/issues/125183)、[#125131](https://github.com/NousResearch/hermes-agent/issues/125131)、[#109730](https://github.com/NousResearch/hermes-agent/issues/109730)、[#109731](https://github.com/NousResearch/hermes-agent/issues/109731)、[#101754](https://github.com/NousResearch/hermes-agent/issues/101754)、[#136926](https://github.com/NousResearch/hermes-agent/issues/136926)、[#87048](https://github.com/NousResearch/hermes-agent/issues/87048) 等多条都指向同一顽疾：手维护的 markdown 文档与代码漂移，且**没有版本戳**。
3. **"Windows 体验劣化"** —— [`python3` 不存在](https://github.com/NousResearch/hermes-agent/issues/87048)、[控制台窗口闪烁](https://github.com/NousResearch/hermes-agent/issues/88945) 等反映 Windows 平台质量门偏低。
4. **"安全敏感过时指引"** —— [#87552](https://github.com/NousResearch/hermes-agent/issues/87552) 与 [#106671](https://github.com/NousResearch/hermes-agent/issues/106671) 指出部分 skill 仍指引用户把凭证写入 `config.yaml` 或绕过 runtime 防护。

### 🟢 积极信号

- **Thai 本地化 PR 显示社区翻译协作意愿强**（3 表面 99.9% 覆盖）。
- **hermes-tabular 插件 PR** 体现专业领域（表格 ML）的生态扩展。
- **用户提交了大量自带 patch 的 issue**（如 [#88660](https://github.com/NousResearch/hermes-agent/issues/88660) 附 3 个功能修复的 inline diff），说明核心用户具备较高技术能力、维护者只需"按下合并键"。

---

## 八、待处理积压

以下 Issue/PR 创建时间较早、影响面广、维护者应优先关注：

### ⏰ 半年以上未关闭

| Issue | 创建 | 主题 | 影响 |
|---|---|---|---|
| [#6626](https://github.com/NousResearch/hermes-agent/issues/6626) | **2026-04-09**（6 个月） | Gemma 4 工具调用 | 本地/开源模型用户基本可用性 |
| [#29584](https://github.com/NousResearch/hermes-agent/issues/29584) | 2026-05-21（近 5 个月） | maps skill 路径错误 | maps skill 完全不可用 |
| [#31597](https://github.com/NousResearch/hermes-agent/issues/31597) | 2026-05-24 | 会话边界 memory review | 长期功能诉求 |
|

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-10-12

> 数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub 仓库
> 统计周期：2026-10-11 ~ 2026-10-12（过去 24 小时）

---

## 一、今日速览

PicoClaw 今日呈现典型的 **"单贡献者驱动型"低频活跃**：过去 24 小时共产生 2 条新 Issue 与 2 条配套修复 PR，全部由同一用户 `sstpnk` 提交，且呈"一 Bug 一 PR"的标准修复模式。项目 **无新版本发布，无历史 Issue 关闭，无评论与点赞互动**，整体处于维护者待评审阶段。两条 Bug 均聚焦于 **运行时静默失败** 这一类高风险缺陷——cron 任务吞掉错误、Telegram 长连接无超时——如不修复将直接影响生产环境可观测性与可用性，健康度需重点关注。

---

## 二、版本发布

无新版本发布。最新版本仍为 Issue #3423 中提到的 **v0.3.1 (commit `2cf030d2`)**。

---

## 三、项目进展

**今日无 PR 合并或关闭**，但有 2 条修复 PR 已提交待评审：

| PR | 标题 | 状态 | 影响模块 |
|---|---|---|---|
| [#3424](https://github.com/sipeed/picoclaw/pull/3424) | `fix(telegram)`: bound hung long-poll requests with HTTP timeouts | 待合并 | Telegram 通道 |
| [#3425](https://github.com/sipeed/picoclaw/pull/3425) | `fix(cron)`: report failed jobs as errors instead of ok | 待合并 | Cron 调度 |

**推进评估**：若两条 PR 在下一版本（推测 v0.3.2 或 v0.4.0）顺利合并，可视为对 **v0.3.1** 的关键补丁闭环。但目前停留在"已提交、未评审"状态，**实际推进进度 = 0**，建议维护者尽快指派 reviewer。

---

## 四、社区热点

由于 Issues 与 PRs 的评论数均为 **0**、点赞数均为 **0**，严格意义上"社区讨论"尚未形成。当前热点实质上是 `sstpnk` 提交的以下 2 条 Bug 报告：

1. 🔥 [#3422 Telegram 通道静默失活](https://github.com/sipeed/picoclaw/issues/3422) — 长轮询 HTTP 客户端无超时设置，导致 gateway 进程看似健康但实际永久收不到消息。
2. 🔥 [#3423 Cron 状态永远显示成功](https://github.com/sipeed/picoclaw/issues/3423) — `cron/jobs.json` 中 `lastStatus` 字段永远为 `ok`，掩盖真实失败。

**诉求分析**：两条问题都暴露了 **可观测性缺失（observability blind spots）**——系统对失败"装作不知道"。这是网关类（gateway）项目的经典痛点，也是用户最不可接受的运行时行为之一。

---

## 五、Bug 与稳定性

| 严重度 | Issue | 标题 | 根因 | 是否已有 fix PR |
|---|---|---|---|---|
| 🔴 **严重** | [#3422](https://github.com/sipeed/picoclaw/issues/3422) | Telegram 长轮询无超时 | `http.Client` 未设置 `Timeout`；半开连接下请求永久挂起 | ✅ [PR #3424](https://github.com/sipeed/picoclaw/pull/3424) |
| 🟠 **高** | [#3423](https://github.com/sipeed/picoclaw/issues/3423) | Cron 失败但状态误报 ok | `cronService.SetOnJob` 回调返回 `(result, nil)`，错误被吞 | ✅ [PR #3425](https://github.com/sipeed/picoclaw/pull/3425) |

**稳定性评估**：
- ✅ 好消息：两个 Bug 均"自带修复"，修复方案明确，无重大重构。
- ⚠️ 风险点：#3422 描述的是 **半开连接（SOCKS 代理/隧道场景）下的致命级故障**，在生产代理环境中可造成消息永久丢失，建议作为 P0 处理。
- ⚠️ #3423 会污染所有 cron 任务的运行历史，掩盖告警，需修复后建议提供数据回填或迁移说明。

---

## 六、功能请求与路线图信号

今日 **未出现显性功能请求（feature request）**。但从两条 Bug 可推断出隐性路线图信号：

1. **可观测性（Observability）增强** —— 失败状态、健康检查、连接探活等可能成为下一阶段重点。
2. **网络层韧性（Network Resilience）** —— 长连接超时、重连退避、代理场景兼容。
3. **配置项扩展** —— PR #3424 引入 HTTP 超时配置，未来可能允许用户在 `config.yaml` 中调整 cron 与 channel 的超时阈值。

建议维护者在下次发版说明中明确是否将这两条修复合并、是否同时增强日志/监控链路。

---

## 七、用户反馈摘要

⚠️ **反馈数据极度稀薄**：所有新 Issue/PR 的评论数为 0，点赞数为 0。

可提取的"准用户场景"：
- **sstpnk** 的使用场景显示其同时关注 **Cron 自动化 + Telegram 集成 + 代理网络**（见 #3422 提及的 SOCKS 代理场景），属于较深度的进阶部署用户。
- 该用户具备直接阅读 Go 源码并定位到具体函数（如 `CronTool.ExecuteJob`）的能力，**说明项目已有较高门槛的早期采纳者群体**，但尚未形成大众化社区反馈。

📌 **建议**：维护者可主动 `cc` 或 `mention` 关键用户征求意见，加速 PR 评审。

---

## 八、待处理积压

| 类型 | 编号 | 标题 | 等待时间 | 紧迫性 |
|---|---|---|---|---|
| 🐛 Bug | [#3422](https://github.com/sipeed/picoclaw/issues/3422) | Telegram 长轮询无超时 | ~1 天 | 🔴 高 |
| 🐛 Bug | [#3423](https://github.com/sipeed/picoclaw/issues/3423) | Cron 状态误报 ok | ~1 天 | 🟠 中高 |
| 🔧 PR | [#3424](https://github.com/sipeed/picoclaw/pull/3424) | Telegram 超时修复 | ~1 天 | 🔴 高 |
| 🔧 PR | [#3425](https://github.com/sipeed/picoclaw/pull/3425) | Cron 错误修复 | ~1 天 | 🟠 中高 |

📢 **提醒维护者**：
- 所有 4 条均为同一人昨日提交，**等待首次响应（first response）已超过 24 小时**。
- PR 中出现了 `рџ"ќ`（乱码 emoji）字符，建议提交者修复 README/描述的 UTF-8 编码，但这不应阻塞合并评审。
- 建议为两条 PR 各指派至少 1 名 reviewer，争取在本周内合并并发布补丁版本。

---

## 📊 健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| Issue 吞吐 | 2 新 / 0 关闭 | ⚠️ 净增 |
| PR 吞吐 | 2 新 / 0 合并 | ⚠️ 待评审积压 |
| 首次响应时间 | > 24h | 🔴 超标 |
| 社区互动 | 0 评论 / 0 👍 | ⚠️ 冷启动 |
| Bug 自带修复率 | 100% (2/2) | ✅ 良好 |
| 新版本发布 | 0 | ➖ 持平 |

**综合判定**：🟡 **需关注**。修复质量高但流程响应慢，建议加快 PR 评审以保持贡献者积极性。

---

*报告生成时间：2026-10-12 · 基于公开 GitHub 数据分析*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-10-12

> 数据来源：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw) · 采样窗口：过去 24 小时（2026-10-11 至 2026-10-12）

---

## 1. 今日速览

NanoClaw 今日处于**高度活跃的常规迭代期**。24 小时内共处理 14 个事项（2 个 Issue、12 个 PR），PR 合并/关闭率达 **67%（8/12）**，明显高于 Issues 关闭率（0/2）。提交内容围绕 **Slack 通道语义修正**、**Python→Node 技能脚本迁移** 与 **AgentMail 邮件通道落地** 三条主线推进，开发节奏紧凑且收口迅速，但伴随两个 **/update-nanoclaw 升级路径相关** 的 Bug 报告，社区稳定性需关注。

---

## 2. 版本发布

无新版本发布。最近一次发版需结合仓库历史另行核查。

---

## 3. 项目进展（今日合并/关闭 PR）

今日 **8 个 PR 完成落地**，重点功能与修复如下：

| PR | 标题 | 影响域 | 意义 |
|---|---|---|---|
| [#4072](https://github.com/qwibitai/nanoclaw/pull/4072) | fix(slack): a person's DM sent through an app reaches their agent | channels | 修复"通过 App 发送的本人 DM 被当作 bot 丢弃"的边界 bug，恢复 Slack 真实用户通路 |
| [#4071](https://github.com/qwibitai/nanoclaw/pull/4071) | feat(slack): channels-only bot 把 DM 引导回 channel | channels | 明确"仅服务频道"的 Slack bot 语义：内部 DM 改为引导而非冒充私人助理；外部 DM 不再回复 |
| [#4077](https://github.com/qwibitai/nanoclaw/pull/4077) | chore: rewrite operational Python examples as Node | skills / containers | 在无 `python3` 的精简镜像上仍可执行示例脚本；统一技能调用栈为 Node |
| [#4073](https://github.com/qwibitai/nanoclaw/pull/4073) | chore(channels): merge main into channels | channels | 主干与 channels 分支同步，使用 merge commit 保留合入基线，避免后续 squash 冲突 |
| [#4070](https://github.com/qwibitai/nanoclaw/pull/4070) | feat(permissions): decline 可跳过 owner FYI | security / skills | 为 channels-only bot 等场景提供"静默拒绝"选项，避免对 owner 造成噪声 |
| [#2255](https://github.com/qwibitai/nanoclaw/pull/2255) | fix(container): 替换 `/workspace/group` → `/workspace/agent` | containers / docs | 清扫 v2 mount 路径残留引用，统一容器 skills、debug、SPEC/SECURITY 文档 |
| [#2237](https://github.com/qwibitai/nanoclaw/pull/2237) | feat(scheduling): `@every:<ms>` 区间重复 | scheduling | 调度系统在 cron 之外新增毫秒级 `@every` 表达式，锚定 `process_after` 防漂移 |
| [#3062](https://github.com/qwibitai/nanoclaw/pull/3062) | fix(signal): 发送已读回执 | channels | signal-cli 默认仅发送达回执；新参数 `--send-read-receipts` 让发件方看到"已读" |

> **整体推进度**：Slack 通道语义闭环（身份判定 + 行为收敛 + 权限耦合）已基本完成；调度器、Signal 通道、容器路径文档三类历史欠账同时被清扫，项目健康度持续向上。

---

## 4. 社区热点

24 小时内没有 Issue/PR 出现明显评论或反应数（全部为 0），但 **讨论密度最高的几个工单集中在 Slack 工作流改造**：

- [#4078 Carry the sender's and the bot's workspace on inbound messages](https://github.com/qwibitai/nanoclaw/pull/4078) — 仍 OPEN。它要解决 [#4071](https://github.com/qwibitai/nanoclaw/pull/4071) 依赖的 Slack 上下文断点（chat-sdk bridge 提前丢弃 `message.raw`），是当前 **Slack 域"能否正确判断内/外网"** 的根因级 PR，影响后续所有 DM 路由逻辑。
- [#4075 feat: add /add-agentmail-tool skill](https://github.com/qwibitai/nanoclaw/pull/4075) — 配合 [#3743 AgentMail 通道适配器](https://github.com/qwibitai/nanoclaw/pull/3743)，共同构成"AgentMail = 工具 + 通道"双轨方案，是社区对"agent 拥有独立邮箱"诉求的回应。
- [#4077 Chore/node not python](https://github.com/qwibitai/nanoclaw/pull/4077) — 标签覆盖 17 个 area，反映维护者把它视为"跨域一致性清理"，本身就是当下的最广泛关注的的工程动作。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0（阻塞升级路径）
- **[#4076 Updates don't rebuild per-group images](https://github.com/qwibitai/nanoclaw/issues/4076)** — `/update-nanoclaw` 重建 agent 镜像后，已安装 `packages_apt` 的群组仍在沿用旧镜像，导致 ffmpeg/ghostscript 等扩展失效。影响所有自定义包配置的群组。**尚无关联 fix PR**。

- **[#4074 group-skills test hardcodes file mode 644 under umask 002](https://github.com/qwibitai/nanoclaw/issues/4074)** — `src/group-skills.test.ts` 在默认 umask `002` 环境下挂掉，**直接阻断 `/update-nanoclaw validate`**，任何用户运行更新校验都会失败。**尚无关联 fix PR**。

### 🟡 P1（功能行为偏差）
- (历史已修复，本日重新确认) [#4072 Slack DM 误判为 bot；[#3062](https://github.com/qwibitai/nanoclaw/pull/3062) Signal 未发已读回执 — 均已合并。

> ⚠️ **稳定性质疑**：两个 P0 Bug 都与 `/update-nanoclaw` 升级链路耦合，但 PR [#4073 main → channels merge](https://github.com/qwibitai/nanoclaw/pull/4073) 已在推进，未见同步修复 Issue。建议维护者把 [#4074](https://github.com/qwibitai/nanoclaw/issues/4074) 视为阻断性补丁优先处理。

---

## 6. 功能请求与路线图信号

| 需求方向 | 代表性 PR/Issue | 落地概率评估 |
|---|---|---|
| Agent 拥有独立邮箱 | [#3743](https://github.com/qwibitai/nanoclaw/pull/3743)（通道）+ [#4075](https://github.com/qwibitai/nanoclaw/pull/4075)（工具） | **高** — 同一作者 billyshipp 双轨推进，互补性强 |
| Slack 工作区身份透传 | [#4078](https://github.com/qwibitai/nanoclaw/pull/4078) | **高** — 与已合并的 [#4071](https://github.com/qwibitai/nanoclaw/pull/4071) 是同一问题的两面 |
| 调度器毫秒级 `@every` | [#2237](https://github.com/qwibitai/nanoclaw/pull/2237) | **已合并** ✅ |
| Telegram `allowedUpdates` 显式固定 | [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) | **中** — 解决 channel-post 黑洞问题，但已积压近 2 个月仍未合 |

---

## 7. 用户反馈摘要

24 小时内 Issue 评论数均为 0，但从 Issue/PR 描述中可读出以下**真实用户痛点**：

- **升级体验脆弱** — 用户 `billyshipp` 同时报告两个与 `/update-nanoclaw` 直接耦合的 Bug（[#4074](https://github.com/qwibitai/nanoclaw/issues/4074)、[#4076](https://github.com/qwibitai/nanoclaw/issues/4076)），意味着 **"升级一次走通"在当前 commit 上是困难的任务**。这是 CI/升级链路欠防御性测试的典型表现。
- **Slack 边界混淆** — 多个 PR（[#4071](https://github.com/qwibitai/nanoclaw/pull/4071)、[#4072](https://github.com/qwibitai/nanoclaw/pull/4072)、[#4078](https://github.com/qwibitai/nanoclaw/pull/4078)）共同指向同一类痛点：**Slack app 与真人用户难以区分，channels-only bot 与 personal agent 语义需要被显式建模**。这是用户对"bot 该有的边界感"的明确呼声。
- **容器镜像精简化的代价** — [#4077](https://github.com/qwibitai/nanoclaw/pull/4077) 表明，agent 容器不再附带 `python3` 后，部分技能脚本会 `command not found`。维护者选择将示例脚本迁回 Node —— 用户的隐含反馈是"精简镜像值得，但技能要可执行"。

---

## 8. 待处理积压

| 编号 | 类型 | 创建日 | 标题 | 风险 |
|---|---|---|---|---|
| [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) | PR (area/channels) | 2026-08-22 | fix(telegram): pin explicit `allowedUpdates` | **积压 51 天**，Telegram channel-post 被黑洞的潜在数据丢失风险 |
| [#3743](https://github.com/qwibitai/nanoclaw/pull/3743) | PR (area/channels, area/skills) | 2026-09-08 | feat: add AgentMail email channel adapter | **积压 34 天**，与 [#4075](https://github.com/qwibitai/nanoclaw/pull/4075) 形成互补但未合并 |
| [#4075](https://github.com/qwibitai/nanoclaw/pull/4075) | PR (area/skills) | 2026-10-11 | feat: add `/add-agentmail-tool` skill | 同作者双轨方案中尚未合入的另一半 |
| [#4078](https://github.com/qwibitai/nanoclaw/pull/4078) | PR (area/core) | 2026-10-11 | Carry sender's and bot's workspace on inbound | Slack 上下文修复的关键前置 |
| [#4074](https://github.com/qwibitai/nanoclaw/issues/4074) | Issue | 2026-10-11 | group-skills test 644 vs umask 002 | **直接阻塞 `/update-nanoclaw validate`** |
| [#4076](https://github.com/qwibitai/nanoclaw/issues/4076) | Issue | 2026-10-11 | Updates don't rebuild per-group images | 群组包扩展在升级后失效 |

> 📌 **维护者建议优先关注**：
> 1. 处理 [#4074](https://github.com/qwibitai/nanoclaw/issues/4074) 修复测试对 umask 的依赖（最小改动，恢复升级链路）。
> 2. 评审 [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) — 已积压近 2 个月，存在静默数据丢失风险。
> 3. 决策 [#4078](https://github.com/qwibitai/nanoclaw/pull/4078) 与 [#4071](https://github.com/qwibitai/nanoclaw/pull/4071) 的合入顺序，避免 Slack 边界语义出现半成品状态。

---

*本报告由 AI 自动生成，所有链接均指向 github.com/qwibitai/nanoclaw 仓库。如需追溯原始工单，请点击对应 PR/Issue 编号。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：2026-10-12**
**数据周期：过去 24 小时**
**仓库：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)**

---

## 1. 今日速览

NullClaw 今日整体活跃度偏低，但社区互动呈现高度聚焦特征。**过去 24 小时内仅产生 2 个新 Issue 和 1 个新 PR**，且全部来自同一作者 `vernonstinebaker`，主题高度统一——均围绕 **Session 历史记录与内存边界管理** 这一核心模块展开。无版本发布，无 PR 合并记录。项目在 Zig 构建环境下保持健康状态，PR #1054 的验证显示 **7491/7500 测试通过（9 skipped），0 失败、0 内存泄漏**，代码质量基线良好。整体来看，项目处于**专题化、纵深化**的迭代阶段，而非横向扩张。

---

## 2. 版本发布

**无新版本发布。**

当前周期未触发版本构建，详见 [Releases 页面](https://github.com/nullclaw/nullclaw/releases)。

---

## 3. 项目进展

**今日无 PR 合并或关闭记录**。但有一条处于待合并状态的实质性修复工作：

- **[PR #1054 `fix(session): bound restored history to max_history_messages`](https://github.com/nullclaw/nullclaw/pull/1054)**（状态：OPEN，作者：vernonstinebaker）
  - 该 PR 修复了会话恢复时历史记录**无界加载**的问题，将恢复范围限制为最近 `max_history_messages` 条。
  - 验证已完成：`zig build test --summary all` 全量测试通过，零失败、零泄漏。
  - **项目推进评估**：这是针对长期会话（long-lived session）上下文管理的一次关键加固。虽未合并，但验证充分、目标明确，距离合入仅一步之遥。

---

## 4. 社区热点

今日讨论集中度极高，**2 个 Issue 共 6 条评论**全部聚焦在"会话历史无界增长"这一主题链上：

| 排名 | 标题 | 评论数 | 链接 |
|------|------|--------|------|
| 1 | #1055 [enhancement] memory: bound the persisted session transcript | 3 | [查看](https://github.com/nullclaw/nullclaw/issues/1055) |
| 2 | #1053 Session history is reloaded unbounded; auto-compaction cannot bound per-request context | 3 | [查看](https://github.com/nullclaw/nullclaw/issues/1053) |
| 3 | #1054 fix(session): bound restored history to max_history_messages | 0 | [查看](https://github.com/nullclaw/nullclaw/pull/1054) |

**热点诉求分析**：
- 用户/贡献者 `vernonstinebaker`（同时也是 #1053、#1054、#1055 的作者）系统性地拆解了一个**内存膨胀问题**：auto-compaction 仅作用于内存中的 `agent.history`，但 `persistTurn` 仍每轮追加，且 compact 结果未写回 store，导致**会话恢复时重新加载全量历史**。
- 这是一个典型的"治标不治本"修复暴露二阶问题的过程：#1054 解决了恢复侧，但 #1055 进一步指出**存储侧仍无界**，需要"compaction write-back + sequence guard"机制。
- 这种"提 Issue → 提 PR → 提增强 Issue"的链式动作，反映出贡献者对项目内存管理模块的**深度参与和系统性思考**。

---

## 5. Bug 与稳定性

**今日新报告的 Bug 相关条目**（按严重程度排序）：

### 🔴 高优先级（功能性 Bug，已关联修复 PR）
- **[#1053 Session history is reloaded unbounded](https://github.com/nullclaw/nullclaw/issues/1053)**
  - **症状**：长期会话中，每次请求的 context 无界增长。
  - **根因**：`auto-compaction` / `trimHistory` 仅修改内存，`max_history_messages` 形同虚设（store 全量恢复时绕过该限制）。
  - **影响范围**：所有使用 session 持久化的生产场景，长会话场景下 token 消耗失控、响应延迟上升。
  - **修复状态**：✅ 已有修复 PR [\#1054](https://github.com/nullclaw/nullclaw/pull/1054) 待合并。

### 🟡 中优先级（性能 / 资源管理 Bug，Enhancement 形态）
- **[#1055 Bound the persisted session transcript](https://github.com/nullclaw/nullclaw/issues/1055)**
  - **症状**：`persistTurn` 每轮追加 user+assistant，存储无增长上限。
  - **影响**：长期会话的存储占用线性增长，存在磁盘 / 内存资源耗尽风险。
  - **修复状态**：⏳ 尚未提交 PR，目前为 Enhancement 提议阶段。

### 稳定性指标（来自 PR #1054 验证数据）
- 测试通过率：**99.88%**（7491/7500）
- 跳过测试：9（可能为平台相关或环境特定）
- 失败：0
- 内存泄漏：0

> **结论**：项目代码质量稳定，但 session 持久化层存在设计层面的一致性缺陷，需要 PR #1054 + 后续 #1055 的组合拳来彻底闭环。

---

## 6. 功能请求与路线图信号

| 需求编号 | 描述 | 关联 PR | 入版本可能性 |
|----------|------|---------|-------------|
| [#1055](https://github.com/nullclaw/nullclaw/issues/1055) | 为持久化 session 转录设置边界（compaction write-back + sequence guard） | 无（PR #1054 仅解决恢复侧） | **高** — 是 #1054 修复的逻辑后继，闭环必需 |

**路线图信号解读**：
- 当前 PR #1054 已为 `max_history_messages` 赋予实际意义，但要让"边界"在 session 全生命周期中真正生效，**还必须把 compact 结果写回 store**，并加上**序列号守卫（sequence guard）**防止乱序写入引发数据竞态。
- 这是典型的"两阶段提交"风格演进：先止血（恢复侧），再根治（存储侧）。从提交节奏看，作者大概率会在 PR #1054 合并后立即推进 #1055。
- **预期下一版本**（若发布）将包含 "session 边界" 主题的两个 commit。

---

## 7. 用户反馈摘要

由于今日所有 Issue 均为同一作者发起，**真实社区反馈样本有限**，但从评论内容可提炼出以下技术诉求：

- **痛点 1：配置项与实际行为脱节**
  > `max_history_messages` 存在但不起作用。
  
  用户期望配置即承诺（configuration as contract），而非装饰性参数。

- **痛点 2：内存优化不可见**
  > Auto-compaction 仅优化内存视图，存储层照样膨胀。
  
  反映用户对**端到端资源可观测性**的需求。

- **痛点 3：长期会话不可持续**
  > Long-lived session 的 context 无界增长。
  
  这是 AI Agent 项目的普遍痛点，NullClaw 用户明确提出后已有明确修复路径。

- **满意度信号**：PR #1054 的验证数据（7491/7500 通过，0 泄漏）显示维护者对代码质量有**严格自审**习惯，这是项目健康度的正向信号。

---

## 8. 待处理积压

| 编号 | 类型 | 状态 | 风险 | 行动建议 |
|------|------|------|------|----------|
| [#1054](https://github.com/nullclaw/nullclaw/pull/1054) | PR | OPEN，0 评论 | 中 — 阻塞 #1053 闭环 | **建议维护者优先 Review**：验证已充分，逻辑清晰 |
| [#1053](https://github.com/nullclaw/nullclaw/issues/1053) | Issue | OPEN，3 评论 | 中 — 已有 fix PR 待合 | 合并 PR #1054 后可自动关闭 |
| [#1055](https://github.com/nullclaw/nullclaw/issues/1055) | Issue | OPEN，3 评论 | 中 — 长期会话存储膨胀 | 等待 #1054 合并后启动 #1055 PR |

> ⚠️ **维护者关注提醒**：当前 session/memory 模块的 3 个条目构成**强依赖链**（#1055 → #1054 → #1053），建议按顺序处理以避免重复工作。零评论的 PR #1054 是当前最关键的单点阻塞项。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码质量 | ⭐⭐⭐⭐⭐ | 测试通过率 99.88%，零泄漏 |
| 社区活跃度 | ⭐⭐ | 仅 1 名作者贡献，外部参与者缺位 |
| 响应及时性 | ⭐⭐ | PR 0 评论，无第三方 Review |
| 路线清晰度 | ⭐⭐⭐⭐ | session 边界主题演进路径明确 |
| 版本节奏 | ⭐⭐ | 无新版本发布，迭代偏慢 |

**综合评估**：项目技术债处理有条不紊，但**社区参与面过窄**（单作者包办所有当日活动），需关注贡献者多元化与外部 Review 引入。

---

*本报告基于 GitHub 公开数据自动生成。所有链接指向 [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) 仓库。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-10-12**
**数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日项目活跃度极低，呈现典型的**依赖维护期**状态。过去 24 小时内无任何新 Issue 创建或更新，0 个新版本发布，全部 7 条 PR 活动均来自 Dependabot 自动化机器人提交的依赖升级。社区层面无新讨论、无用户反馈流入。整体而言，项目处于"例行维护、暂缓功能开发"的平稳阶段，无显著推进信号。

---

## 2. 版本发布

**今日无新版本发布。** 近期版本动态保持静默。

---

## 3. 项目进展

今日**实质性功能开发为零**。所有变更均为依赖更新，自动关闭的 3 个 PR 也仅为依赖批量升级的合并入仓，归纳如下：

| PR | 范围 | 关键升级 | 状态 |
|---|---|---|---|
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | Rust 依赖（everything-else 组，31 项） | thiserror 2.0.20→2.0.21、uuid 1.24.0→1.26.1、base64 等 | ✅ 已关闭 |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | GitHub Actions（8 项） | anthropics/claude-code-action 1.0.183→1.0.228、actions/setup-node 4.0.2→7.0.0 | ✅ 已关闭 |
| [#8123](https://github.com/nearai/ironclaw/pull/8123) | Rust 依赖（tokio 生态，3 项） | tokio-test 0.4.5→0.4.6、tower-http、tokio-tungstenite | ✅ 已关闭 |

**评估**：依赖基线得到系统性更新，安全风险面收窄，但项目功能层面**未向前推进任何一步**。

---

## 4. 社区热点

今日**无任何社区讨论热点**。所有 PR 评论数均为 0，👍 反应数均为 0，无新 Issue，无用户互动。值得注意的是：

- **#7834**（wasm 组依赖更新，[链接](https://github.com/nearai/ironclaw/pull/7834)）已开放超过 50 天（自 2026-08-23），至今零互动；
- 今日新开的 3 个 Dependabot PR（[#8134](https://github.com/nearai/ironclaw/pull/8134)、[#8132](https://github.com/nearai/ironclaw/pull/8132)、[#8133](https://github.com/nearai/ironclaw/pull/8133)）同样无任何评论。

**分析**：社区参与度处于低位，PR 流转呈现"机器提交—等待人工合入"的单向模式，缺少维护者与贡献者的实时讨论。

---

## 5. Bug 与稳定性

**今日无任何 Bug 报告、崩溃记录或回归反馈。** 由于无新 Issue 流入，也无相关修复 PR 出现。

**潜在风险提示（虽非今日问题，但需关注）**：
- [PR #7834](https://github.com/nearai/ironclaw/pull/7834) 涉及 wasmtime / wasmtime-wasi / wit-component / wit-parser 的升级，归类为 **medium risk**，已悬置超 50 天，存在潜在兼容性陈旧风险。

---

## 6. 功能请求与路线图信号

**今日无任何新功能请求。** 缺乏用户诉求输入，无法对下一版本路线图做出有意义推断。

依赖层面的批量更新（[#8134](https://github.com/nearai/ironclaw/pull/8134) 包含 34 项更新）暗示维护者仍倾向于"集成分批升级"策略，这或将是近期可预见的最主要"变更面"。

---

## 7. 用户反馈摘要

**无用户反馈可提炼。** 今日 Issues 与 PR 评论均为空，无法识别痛点、使用场景或满意度信号。建议维护者主动在社区渠道（Discord、Discussion 区）发起互动以打破沉寂。

---

## 8. 待处理积压

以下为需要维护者重点关注的**长期悬置项**：

| 类型 | 编号 | 标题 | 开放时长 | 风险标签 |
|---|---|---|---|---|
| PR | [#7834](https://github.com/nearai/ironclaw/pull/7834) | chore(deps): bump the wasm group with 4 updates | ~50 天 | size: L, risk: medium |
| PR | [#8134](https://github.com/nearai/ironclaw/pull/8134) | chore(deps): bump the everything-else group with 34 updates | 新开待审 | — |
| PR | [#8132](https://github.com/nearai/ironclaw/pull/8132) | chore(deps): bump the tokio-ecosystem group with 4 updates | 新开待审 | — |
| PR | [#8133](https://github.com/nearai/ironclaw/pull/8133) | chore(deps): bump the actions group with 10 updates | 新开待审 | — |

**建议**：
1. **#7834** 已悬置近 2 个月且风险为 medium，建议优先 review 或与 wasmtime 上游同步；
2. 今日新开 3 个 dependabot PR 可考虑批量快速合入，避免 Dependabot 队列积压；
3. 整体缺乏功能开发活动，建议在 Issue 模板或社区渠道激活用户反馈通路。

---

## 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐ | 仅自动化依赖更新，无人工代码变更 |
| 社区参与度 | ⭐ | 无评论、无反馈、无互动 |
| 依赖卫生 | ⭐⭐⭐⭐ | 持续系统化更新，依赖基线较新 |
| 风险管控 | ⭐⭐⭐ | 有 medium-risk 项长期挂起，需关注 |
| 综合 | ⭐⭐ | 维护期但社区生态静默 |

---

*本报告基于 2026-10-12 当日 GitHub 公开数据生成，由 AI 智能体开源项目分析助手产出。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-10-12**
**项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目今日呈现**极低活跃度**状态。过去 24 小时内，Issues 端完全静默（新增/活跃 0 条、关闭 0 条），PR 端仅有一条历史 PR 被标记为 [stale] 后关闭，无新版本发布。整体而言，项目当日**没有实质性的功能推进或问题修复**，社区交互几乎为零，可能反映出项目进入维护期或社区关注度阶段性回落。

---

## 2. 版本发布

**今日无新版本发布**，本节略。

---

## 3. 项目进展

**今日无 PR 被合并**，项目代码层面**无任何实质性推进**。

唯一动态为 PR [#978](https://github.com/netease-youdao/LobsterAI/pull/978)（`Feature/add chat folder`）被系统/维护者关闭。该 PR 由贡献者 Yang1k 于 2026-03-27 提交，距今约 6.5 个月，因长期无更新、无评论（评论 0、点赞 0），被标记为 [stale] 后关闭。该功能涉及侧边栏会话文件夹分组管理、后端 SQLite 迁移等 12 个文件改动，未能进入合并流程，**对项目前进贡献为 0**。

---

## 4. 社区热点

**今日无任何活跃讨论的 Issue 或 PR。**

社区热度指标（基于近 24 小时）：
- 活跃 Issue：0
- 新评论：0
- PR 互动：0
- 点赞/反应：0

相较于正常迭代期，本日社区参与度处于**历史低位**。建议关注项目是否进入维护/沉寂阶段，或仅是工作日效应导致的短暂低潮。

---

## 5. Bug 与稳定性

**今日无任何新 Bug、崩溃或回归问题报告。**

- 新开 Bug Issue：0
- 崩溃报告：0
- 性能回归报告：0

从已有数据无法直接推断项目稳定性，但鉴于无新反馈上报，短期可视为**暂无已知未解决问题**。

---

## 6. 功能请求与路线图信号

今日关闭的 PR [#978](https://github.com/netease-youdao/LobsterAI/pull/978) 本身代表了一个明确的功能请求信号——**侧边栏会话文件夹分类管理**，涉及 12 个文件的较大改动（包括 `sqliteStore.ts` 数据库迁移、前端 UI 调整等）。

- **需求真实性**：作者已完成完整实现，但因社区反馈缺失（0 评论、0 👍）被关闭。
- **被纳入下一版本的概率**：较低。该 PR 已 stale 关闭，若功能仍有需求，**需要新 PR 重新发起并补充测试用例、截图与社区共识**，否则难以重启。
- **维护者意向**：无法从今日数据判断，建议在仓库 Discussions 区发起需求讨论以获取维护者反馈。

---

## 7. 用户反馈摘要

由于今日**无任何新评论**，无新增用户痛点、使用场景或满意度数据可提取。

唯一可参考的历史信号来自 PR #978 的功能描述："任务数量较多时进行分组管理" 反映出用户对**会话组织能力**存在实际需求，但该信号在关闭后已衰减。

---

## 8. 待处理积压

| 类型 | 编号/描述 | 状态 | 建议 |
|------|-----------|------|------|
| Stale PR 关闭 | [#978](https://github.com/netease-youdao/LobsterAI/pull/978) 聊天文件夹功能 | 已关闭 | 若需求仍存在，建议作者重新提交并补充交互截图与测试 |
| 社区活跃度 | 全维度指标为 0 | 持续低活跃 | 维护者可通过公告、Roadmap 更新或处理积压 issue 激活社区 |
| 缺乏公开路线图 | 无近期 Release/里程碑可见 | 长期 | 建议维护者发布 v0.x 路线图，增强贡献者信心 |

**维护者提醒**：
- 长期无新 Issue / PR 提交可能预示项目进入维护期，建议主动在 README 或 Discussions 中说明项目状态。
- 若有计划中的版本，可通过创建 GitHub Milestone 引导社区贡献方向。

---

## 附录：今日数据总览

| 指标 | 数值 |
|------|------|
| 新开 Issue | 0 |
| 活跃 Issue | 0 |
| 关闭 Issue | 0 |
| 新开 PR | 0 |
| 合并/关闭 PR | 1 |
| 待合并 PR | 0 |
| 新版本发布 | 0 |
| 总互动（评论+点赞） | 0 |

**整体健康度评估：🟡 关注** —— 项目无错误信号但活跃度显著偏低，建议维护者主动释放项目状态信号或推动积压项。

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

# CoPaw 项目日报 · 2026-10-12

> 数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) (Issue 链接实际指向 `agentscope-ai/QwenPaw` 仓库)
> 报告周期：2026-10-11 至 2026-10-12

---

## 1. 今日速览

CoPaw/QwenPaw 仓库进入近一周以来活跃度最高的一天，**24 小时内累计产出 31 条更新**（10 条 Issue、21 条 PR），其中 PR 的合并/关闭比例为 **12/21 ≈ 57%**，显示维护团队在快速消化积压。值得注意的是，多条历史 PR（最早追溯到 2026-03）今天集中关闭或合并，意味着 **v2.2.1 后续版本可能正在集中合入稳定性补丁**。Issues 端出现一批 v2.2.1 用户报告的运行时 Bug（codex 后端断连、Skill 二进制文件损坏、插件批量更新遗漏），社区反馈密度显著上升。

---

## 2. 版本发布

**无新版本发布。**

从 Issue 与 PR 内容观察，下一版本预期包含：MCP 导入可用性增强、Ollama/llama-server 兼容性修复、记忆系统新增 `none` 后端、插件市场按版本路由等合并项。可合理推测 **v2.2.2 或 v2.3.0 候选构建**正在合流，但尚未打 tag。

---

## 3. 项目进展

今天合并/关闭的 12 条 PR 中，有多项对项目工程化能力是显著推动：

| PR | 标题 | 价值 |
|---|---|---|
| [#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) | feat(desktop): eliminate startup white screen with instant splash loading | 桌面端启动白屏从 5–30s 缩短为两阶段无缝加载 |
| [#5732](https://github.com/agentscope-ai/QwenPaw/pull/5732) | feat: add 'none' memory backend to disable memory system | 用户可一键在控制台关闭 ReMeLight，无需手改配置 |
| [#5661](https://github.com/agentscope-ai/QwenPaw/pull/5661) | feat: filter plugin market and CDN catalog by QwenPaw version compatibility | 插件市场与 CDN 目录按版本过滤，**避免 v1.x/v2.x 用户互装不兼容插件** |
| [#5612](https://github.com/agentscope-ai/QwenPaw/pull/5612) | Fix/plugin market version routing | 前后端 + CDN 发布流水线全链路修复版本路由 |
| [#2520](https://github.com/agentscope-ai/QwenPaw/pull/2520) | fix(models): preflight active model and surface provider compute errors | 模型激活前可用性探测，提前暴露 provider 错误 |
| [#2783](https://github.com/agentscope-ai/QwenPaw/pull/2783) | fix(runner): auto-recover context overflow with compaction retry | 上下文溢出自动压缩重试 + 双语恢复消息 |
| [#2052](https://github.com/agentscope-ai/QwenPaw/pull/2052) | fix(mcp): degrade connection errors to tool level failure | MCP 连接失败降级为工具级失败，ReAct 仍可继续 |
| [#1978](https://github.com/agentscope-ai/QwenPaw/pull/1978) / [#1848](https://github.com/agentscope-ai/QwenPaw/pull/1848) | MCP 导入体验改进 | 模板填充、描述保留、流式 HTTP alias 兼容 |
| [#1977](https://github.com/agentscope-ai/QwenPaw/pull/1977) | fix(runtime): harden mcp teardown and cron/channel exception handling | 运行时关停路径硬化 |
| [#1480](https://github.com/agentscope-ai/QwenPaw/pull/1480) | fix(ollama): default to 127.0.0.1 and surface original connection errors | 修复 IPv6 优先导致 Ollama 超时 |
| [#1883](https://github.com/agentscope-ai/QwenPaw/pull/1883) | feat(agents-square): add source browsing and import flow | Agents Square 浏览+导入全链路 |

**整体评估**：项目在 **MCP 体系完善、模型路由可靠性、桌面端体验、插件市场治理** 四个方向上同时取得实质性推进，跨多个长期积压议题合并显示维护节奏在加快。

---

## 4. 社区热点

按评论数与互动量排序：

1. **[[Bug] v2.1.1b2 missing `_qwenpaw_remote_backend` — 全部工具不可用](https://github.com/agentscope-ai/QwenPaw/issues/7311)** — 评论 5 条，今日已 **CLOSED**。Windows 10 用户反映 Desktop 安装包内置模块缺失，重装无效。该问题自 2026-08-26 提出至今历时近 2 个月才关闭，是本批中等待最久的话题，关闭后是否能同步发布修复包需要后续关注。

2. **[[Feature] Aliyun Token Plan 模型 `thinking_param_style` 缺失导致 Console 思考控件隐藏](https://github.com/agentscope-ai/QwenPaw/issues/7990)** — 评论 3 条。诉求核心是 Aliyun Token Plan 端点支持 reasoning_effort / thinking_budget / enable_thinking，但官方 `model_catalog.json` 漏声明，导致 UI 控件消失。

3. **[[Feature] 内置 tavily provider 无 API-key 配置面](https://github.com/agentscope-ai/QwenPaw/issues/8174)** — 评论 2 条。付费用户无法使用自有配额，被迫走匿名 keyless 端点。

4. **[[Feature] 会话级变更通知](https://github.com/agentscope-ai/QwenPaw/issues/8181)** — 评论 1 条但诉求强烈：希望前后端建立会话级长链接，避免硬刷新。

**诉求分析**：今日热点集中在 **模型目录元数据完整性**、**第三方 API 接入面**、**前端实时同步体验** 三类，反映用户已经从"能不能跑"升级到"跑得好、跑得对、用得顺手"的更高诉求。

---

## 5. Bug 与稳定性

按严重度排序：

| 严重度 | Issue | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 高 | [#8173 Codex 后端重启后静默断连 + 僵尸任务](https://github.com/agentscope-ai/QwenPaw/issues/8173) | QwenPaw 重启后，codex-backend 与新生成的 app-server 链接断裂，消息排队但 turn 永不启动；遗留永久性 zombie `running` 条目阻塞所有恢复路径，仅 `chat/stop` 可救 | ❌ 暂无 |
| 🔴 高 | [#8179 从 GitHub 安装 skill 静默损坏二进制文件](https://github.com/agentscope-ai/QwenPaw/issues/8179) | `qwenpaw skills install` 时非 UTF-8 字节被替换为 U+FFFD，图片/字体不可读 | ❌ 暂无 |
| 🟠 中 | [#8175 `ProviderManager.active_model` 启动不加载 + 静默 `except`](https://github.com/agentscope-ai/QwenPaw/issues/8175) | 多 agent 部署下服务型 cron (dream) 每晚必失败；问题叠加：active_model 启动不加载 + `_load_agent_model_settings` 静默吞异常 | ❌ 暂无 |
| 🟠 中 | [#8176 插件商店 "一键全部更新" 仅更新官方插件](https://github.com/agentscope-ai/QwenPaw/issues/8176) | 第三方插件永远得不到更新；UI 也未声明此限制 | ❌ 暂无 |
| 🟡 低 | [#7311 missing `_qwenpaw_remote_backend`](https://github.com/agentscope-ai/QwenPaw/issues/7311) | v2.1.1b2 安装包缺失模块 | ✅ 已 CLOSED |
| 🟢 增强 | [#8177 Web Console basename 硬编码 `/console`](https://github.com/agentscope-ai/QwenPaw/issues/8177) | 反向代理子路径部署受阻 | ❌ 暂无 |

**稳定性观察**：v2.2.1 引入的若干能力（codex 后端、skills 安装、插件批量更新）均暴露 Bug，建议维护者在补丁版本前优先核实 **Skill 安装链路、codex 后端重启恢复、插件更新列表源** 三条路径。

---

## 6. 功能请求与路线图信号

| 诉求 | 对应 PR | 预期落地版本判断 |
|---|---|---|
| 会话级变更通知（实时刷新）[#8181](https://github.com/agentscope-ai/QwenPaw/issues/8181) | 暂无 | ⏳ 提议阶段，需架构评审 |
| Aliyun Token Plan 模型思考控件 [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 暂无 | ⚡ 数据修复，门槛低，**很可能进入下个小版本** |
| tavily 付费 API key 配置 [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | 暂无 | ⚡ 配置面扩展，**有望随下个 web_search 迭代进入** |
| Web Console basename 可配置 [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | 暂无 | 🛠 涉及前端 router + 反代文档，**预计进入自托管部署相关版本** |
| per-session 审批级别服务端持久化 [#8180](https://github.com/agentscope-ai/QwenPaw/issues/8180) | [#8182 (XL, 待合并)](https://github.com/agentscope-ai/QwenPaw/pull/8182) | ⚡ PR 已就绪，**强信号：下个版本即纳入** |
| HarmonyOS 原生客户端 | [#8164 (XXXL, 待合并)](https://github.com/agentscope-ai/QwenPaw/pull/8164) | 🆕 大型 PR，处于待审，**可能作为独立 App 子仓库先行合并** |
| Console "reduced effects" 视觉层 [#8135→#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) | [#8137 (M, 待审)](https://github.com/agentscope-ai/QwenPaw/pull/8137) | ⚡ **即将合并** |
| 嵌套/分类化 skill 目录 | [#8178 (L, 待合并)](https://github.com/agentscope-ai/QwenPaw/pull/8178) | ⚡ 首贡献者 PR，**合并可能性较高** |
| coding-cli 管理端点（worker 容器） | [#8156 (L, 待合并)](https://github.com/agentscope-ai/QwenPaw/pull/8156) | 🛠 多 agent 部署所需，**下个版本窗口** |
| 工具取消原因保留 + 循环继续 | [#8183 (L, 待合并)](https://github.com/agentscope-ai/QwenPaw/pull/8183) | ⚡ **稳定性刚需，合并优先级高** |

**路线图信号**：下一版本重点明显偏向 **「稳定性 + 自托管 + 多端覆盖」**：HarmonyOS 客户端、reduced effects、嵌套 skill、coding-cli 管理、per-chat 审批持久化、工具取消语义硬化 —— 围绕生产可用性的多个维度同时推进。

---

## 7. 用户反馈摘要

- **生产环境痛点**：Docker 容器内多 agent 部署用户反馈 [#8175](https://github.com/agentscope-ai/QwenPaw/issues/8175) 表示「错误噪音长期无人察觉」，诉求运行时异常不要被静默 `except Exception: pass` 吞掉。
- **付费场景被阻断**：[#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) 反映「付费 Tavily 用户无法消耗自有配额」，属于商业化路径阻塞。
- **数据驱动失望**：[#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) 中用户明确反馈"上游支持 reasoning_effort 但目录不声明"，体现对官方目录权威性的高度依赖。
- **桌面端体验改善**：[#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) 的关闭结合 [#5569](https://github.com/agentscope-ai/QwenPaw/pull/5569) 的合并，预示桌面端启动体验正在快速修补。
- **自托管诉求增强**：[#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) 「反向代理子路径部署」代表社区对**多服务复用单域名**这一真实场景的明确需求。
- **正面信号**：[#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) 主动新增「reduced effects」档位，说明社区用户的无障碍/性能偏好已被纳入官方设计。

---

## 8. 待处理积压

需维护者重点关注：

- **[#7973 fix(agents): recover from rejected media URLs](https://github.com/agentscope-ai/QwenPaw/pull/7973)** — 自 2026-09-24 创建已近 3 周未合并，OpenAI 兼容 provider 媒体 URL 400 错误的恢复路径仍未落地。
- **[#7654 fix(agent): 识别 llama-server/DashScope URL 音频拒绝](https://github.com/agentscope-ai/QwenPaw/pull/7654)** — 自 2026-09-09 起积压逾月，是 [#7015](https://github.com/agentscope-ai/QwenPaw/pull/7015) 后续修复，分类器盲点导致整回合失败。
- **[#8164 feat(apps): HarmonyOS 原生客户端 (XXXL)](https://github.com/agentscope-ai/QwenPaw/pull/8164)** — 仓库首个 HarmonyOS 客户端 PR，规模庞大，需明确评审节奏与里程碑。
- **[#7990 Aliyun Token Plan `thinking_param_style`](https://github.com/agentscope-ai/QwenPaw/issues/7990)** — 自 2026-09-25 开 Issue 至今未确认修复，属于"小但高 ROI"的数据声明问题。
- **历史长期未响应 Issue**：建议管理员在下次 triage 时确认 [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) 关闭是否同步推送修复包至 Windows 桌面端用户。

---

> **健康度总评**：🟢 项目活跃度近一周峰值；🟡 Bug 修复节奏快但 v2.2.1 暴露面扩大；🟢 路线图清晰且大型 PR 已就绪。维护者建议优先关注"待合并 PR 评审提速"与"v2

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-10-12**
**项目：zeroclaw-labs/zeroclaw**

---

## 1. 今日速览

ZeroClaw 今日维持高强度的工程迭代节奏，过去 24 小时共触达 **16 条 Issue 与 43 条 PR**，无新版本发布。协作热度集中于两条主线：一是面向 **v0.8.6/v0.9.0** 的 WASM 插件托管链路上线（涉及签名、egress 审计、staged admission、CLI 安装等一组堆叠 PR），二是 **持久化记忆子系统** 的设计收敛（Tracker #8891 仍在持续拉通 RAG、confirmation、categorization 三类合并冲突）。整体活跃度评估为 **高强度、有节奏但接近 release-gate 承压**，目前 PR 待合并队列 41 条，标志近期将有一次合并高峰。

---

## 2. 版本发布

无新增 Release。**v0.8.6 与 v0.9.0** 仍为追踪目标，相关交付物集中在 PR #11261、#11262、#11309、#11347、#11228 等堆叠分支，等待 release-gate 通过。

---

## 3. 项目进展

今日最关键的一个已完成项是 PR #11531（CLOSED，作者 tidux）：

- **[#11531](https://github.com/zeroclaw-labs/zeroclaw/pull/11531) — `fix(tunnel): report the URL tailscale actually serves the gateway on`**
  修复了 `tunnel_provider = "tailscale"` 时 Gateway 公告 URL 与 Tailscale 实际服务端口不一致（公告为 `<local_port>`，实际是 HTTPS 443）的偏差。这是一个小但重要的可用性回归修正，使运维侧的"端到端可加白的入口"重新对账。
  - 体量：XS，风险 medium
  - 价值：消除安全策略与实际监听面之间的不对齐

另有第二条被合并/关闭的 PR 不在展示的 Top 20 内（仅 41/43 待合并，2 条收尾）。

整体上，今日 ZeroClaw 在 **"tunnel/通道""plugin 系统""runtime capability 传播"** 三个方向都有 PR 进入审查或合并收尾状态。项目向前推进的方向：

1. **WASM 插件正式进入 release 产物**：PR #11347 将 `plugins-wasm-cranelift` 加入 `dist_extra_features`，配合 #11261 的 staged admission、#11228 的 TLS 硬化、#11309 的 quickstart 集成、#11262 的 `zeroclaw plugin update` 子命令，组成端到端的插件交付链。
2. **运行时 capability 收紧**：PR #11174（capability-taking turn constructors）与 PR #10391（bounded delegate）共同把"代答 / SOP / cron / delegate"等跨 turn 入口的权限面拉到同一基线，等 #11090 落地后即可释放。
3. **用户体验拾遗**：#11660（web chat 输入框 focus）、#11669（Lark `post` 富文本解析）、#11659（snake_case 上下文溢出码）三处小修同日落地，体现日常维护密度在上升。

---

## 4. 社区热点

按 24 小时评论与互动密度排序：

| 排名 | 编号 | 标题 | 评论 | 关注点 |
|---|---|---|---|---|
| 1 | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) | Tracker: Persistent memory — 拉通 curation/relevance/operability 三大平面 | 10 | 记忆子系统最大公约数问题，多 PR 联动对齐 peer agent runtime 水平 |
| 2 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Tracker: Runtime & gateway delivery — v0.8.6 + v0.9.0 | 6 | RFC #5574 Phase 2/3 落地的"真相之源" |
| 3 | [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | RFC: `search_routes` — hint-based provider routing for `web_search_tool` | 4 | 镜像既有 `model_routes` 的搜索侧路由能力 |
| 3 | [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | RFC: Knowledge corpus — RAG for the agent | 4 | 文档级私有知识检索 |
| 3 | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | [Bug p1] `firejail_args` 已声明但未传递给 firejail 调用 | 4 | 配置面 vs 实际执行的脱节 |
| 6 | [#10755](https://github.com/zeroclaw-labs/zeroclaw/issues/10755) | Memory: 合并 typed row 时保留偏好来源（provenance） | 3 | 与 PR #10007 反复回扣的语义问题 |
| 6 | [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) | Cron shell jobs 输出原始 stdout | 3 | 讨论 #8395 触发，呼声稳定 |

**分析：**
- 热门话题高度集中在 **"持久化记忆"** 这一垂直方向，#8891 已是连续多日 Top 1；
- 围绕 **v0.8.6/v0.9.0** 的 Tracker #7432 与 #11074、#11235 这两条 RFC 形成"搜索侧 + 知识库侧"的"双投影"结构，预示下一阶段 web/RAG 是被反复投币的方向；
- #11594 进入高优列表本身具有信号意义——它在配置 schema 中宣告却未真正生效，属于"沉默失败"类问题，社区的反应说明对此类风险敏感度在上升。

---

## 5. Bug 与稳定性

按严重度排序（今日新增或被显著更新的 Bug）：

| 严重度 | 编号 | 标题 | 是否有 fix PR | 备注 |
|---|---|---|---|---|
| **P1 / S1 workflow blocked** | [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | Telegram 发送链路忽略 429 `retry_after`，立即重试放大限流并丢回复 | ❌ 待修 | 影响 channel:telegram，关键交互路径 |
| **P1 / S2 degraded** | [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | `firejail_args` 已声明并暴露于 config schema，但从未下发到 firejail | ❌ 待修 | 沙箱防护宣传与现实不一致 |
| **P2 / S2 degraded** | [#10755](https://github.com/zeroclaw-labs/zeroclaw/issues/10755) | 记忆合并 typed 时吞掉来源（provenance） | 部分（讨论依赖 PR #10007） | 语义正确性 |
| **P2 / S2 degraded** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | `embedding_provider = "none"`（默认）时 core conflict supersede 误隐藏无关 Core 记忆 | ❌ 待修 | 影响所有未启用向量嵌入用户 |
| **P3 / S3 minor** | [#11658](https://github.com/zeroclaw-labs/zeroclaw/issues/11658) | Web 聊天框在回复结束后未夺回焦点 | ✅ [#11660](https://github.com/zeroclaw-labs/zeroclaw/pull/11660) | 同 PR 即修复 |

**稳定性观察：**
- 两条 **P1** Bug 都未配套 fix PR，若任一通道（Telegram）有真实流量，存在放大限流到丢业务的连续风险窗口，建议维护者优先指派 owner。
- 沙箱配置与运行时脱节（#11594）是典型"安全宣传 vs 实际"问题，优先级高于其 P2 表面等级。
- 记忆相关问题集中在"语义保真"而非"崩溃"，但累积影响产品核心体验。

---

## 6. 功能请求与路线图信号

今日新增 6 条 Feature 类请求，按热度归并：

### 高可能进入下一版本

- **[#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) `search_routes`**（已有 RFC + 4 条评论）— 与既有 `model_routes` 对称，落地阻力小，最可能纳入 v0.9.0 之后的 release。
- **[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) Knowledge Corpus / RAG**（RFC + 4 条评论）— 与 Tracker #8891 持久化记忆主题同频，已具备"子系统"体量，可能作为记忆平面扩展名进入 roadmap。
- **[#11668](https://github.com/zeroclaw-labs/zeroclaw/issues/11668) `MAX_BODY_SIZE` 可配置** — 已有 PR #11660 等"小优化"文化铺垫，A2A 长上下文 relay 场景具体明确，预计进入 PR 排程很快。
- **[#11657](https://github.com/zeroclaw-labs/zeroclaw/issues/11657) `consolidation_category` 可配置** — 与 Tracker #8891、#10755、#11655 同一记忆线程，是"立刻可解的卡扣"。

### 中等可能

- **[#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) Cron shell raw stdout** — 已 accepted，但 5 月以来未动，需维护者发起。
- **[#11667](https://github.com/zeroclaw-labs/zeroclaw/issues/11667) Turn 跨代理继承 command policy** — 设计问题，依赖 PR #10391 合并。

### 长周期愿景型

- **[#11662](https://github.com/zeroclaw-labs/zeroclaw/issues/11662) Channels 与 Core 解耦（IPC/MQTT 等）** — 方向正确，但牵涉性大。
- **[#11664](https://github.com/zeroclaw-labs/zeroclaw/issues/11664) Level 5 Dark Factory（多代理协同）** — 长期方向，与 agent channel:core、delegate 子系统绑定。
- **[#11665](https://github.com/zeroclaw-labs/zeroclaw/issues/11665) Better Windows Support** — 安装器签名 + Docker + WSL 三段式，跨平台可发现性的关键短板。

---

## 7. 用户反馈摘要

从最新评论中可提炼的真实痛点与诉求：

- **"沉默失败"零容忍情绪上升**：#11594 用户明确指出"文档承诺 / schema 暴露 / 实际不生效"三重落差；这反映社区正把"安全配置可观测性"列为硬性要求。
- **Telegram 通道：丢消息是真痛点**：#11615 中 "reply can be lost entirely" 直接命中业务连续性，比 429 重试更值得关注。
- **Web Dashboard UX 微痛点被持续报**：#11658 的"回复结束需要先点输入框"非常具体，PR #11660 同日给出修复，社区修复闭环速度理想。
- **多代理协作下的"上下文太长被拒"**：#11668 反馈"relay 长上下文问题在 <1s 内被 length limit 裸字符串拒"，暴露多代理 A2A 缺少结构化错误码。
- **Windows 入门体验重负**：#11665 反映"Windows 安装文档太长"，与 ZeroClaw 跨平台战略定位存在张力。
- **记忆合并用户语义被悄悄覆盖**：#10755、#11655 共同刻画"用户偏好被自动合并吞掉"的张力，社区对记忆正确性的敏感度高于合并便利性。

满意度信号：Memory Tracker #8891 已能稳定聚集 RFC + Bug + PR 三类工单，体现社区对该方向有清晰锚点，是好项目治理表现。

---

## 8. 待处理积压（提醒维护者关注）

按"高严重度 / 长期未动 / 风险高"筛选：

| 编号 | 类型 | 关键风险 | 建议动作 |
|---|---|---|---|
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | P1 Bug | Telegram 业务可丢消息 | 48h 内指派 owner |
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | P1 Bug / security | firejail 配置脱节与"安全宣传"不符 | 评估是否短期内绑 PR 修复 |
| [#10755](https://github.com/zeroclaw-labs/zeroclaw/issues/10755) | memory 语义 | 与 PR #10007 反复回扣未收敛 | 推动 #10007 重审或拆解 |
| [#8409](https://github.com/zeroclaw-labs/zeroclaw/issues/8409) | Feature accepted | 5 月以来未推进 | 列入下个 sprint |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | XL PR (needs-author-action) | 阻塞 #11667 等依赖 | 与 #11090 协同推进 |
| [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221) | XL PR (needs-author-action) | v0.8.6 默认内置工具集 | 配合 release-gate 走 |
| [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) | XL PR (needs-author-action, security) | 插件 TLS 加固 | 优先级上提 |
| [#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261) | XL PR, 堆叠基准 | 阻塞 #11262 等 | 维护者尽快判定 merge-order |
| [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | memory 默认行为 | 默认用户均受影响 | 进入 #8891 tracker |
| [#11304](https://github.com/zeroclaw-labs/zeroclaw/pull/11304) | XL PR (status:blocked) | egress 审计完整性 | 解除阻塞信号 |

**整体健康度判断：** PR 流入与变更密度显示项目处于 release-gate 前的高速冲刺期，但 P1 bug 未配套 fix PR + 多条 XL 堆叠分支处于 `needs-author-action` / `blocked` 状态，说明维护者侧的代码审查带宽正成为短期瓶颈。这是接下来一周最需要被缓解的风险点。

---

*报告基于公开 GitHub 数据，所有链接指向 zeroclaw-labs/zeroclaw 仓库对应工单。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*