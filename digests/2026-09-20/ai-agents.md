# OpenClaw 生态日报 2026-09-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-20 02:51 UTC

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

# OpenClaw 项目日报 · 2026-09-20

> 数据周期：过去 24 小时 · 数据源：GitHub Issues / Pull Requests / Releases

---

## 1. 今日速览

OpenClaw 在过去 24 小时维持**高强度开发节奏**：累计 1,000 条 Issues 与 PRs 更新，活跃/新开 601 条，已关闭 399 条，整体关闭率约 **40%**。同时发布 Linux 渠道版本 **v2026.9.5**。需要警惕的是，**v2026.9.5 升级链路上密集爆发出多个 P0 级故障**（npm 更新失败、Codex 会话迁移卡死、auth 配置丢失等），导致单日投诉集中在升级体验与稳定性问题上。维护者（以 `steipete`、`roboclaw-bot`、`RomneyDa` 为代表）正同步推进"将 SQLite/IO 工作从 Gateway 主线程剥离"的大规模重构，体现项目对运行时稳定性的系统性投入。项目整体处于**"高频迭代 + 多线稳定性债"**阶段。

---

## 2. 版本发布

📦 **v2026.9.5**（linux-stable 渠道）已发布

- [AppImage](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.AppImage)
- [Debian package](https://github.com/openclaw/openclaw/releases/download/v2026.9.5/OpenClaw-2026.9.5-amd64.deb)
- 对应 commit：`ec9c1a1`

**⚠️ 已知升级风险**：从 2026.9.4 → 2026.9.5 的升级链路被多个 P0 Issue 标记为不可用：

- [`#152759`](https://github.com/openclaw/openclaw/issues/152759) — `doctor-failed` 导致升级静默失败
- [`#152891`](https://github.com/openclaw/openclaw/issues/152891) — `runtime-verification-failed`
- [`#153049`](https://github.com/openclaw/openclaw/issues/153049) — 同样 `doctor-failed`
- [`#153177`](https://github.com/openclaw/openclaw/issues/153177) — `finalize:targetConfigConvergence` 失败
- [`#152744`](https://github.com/openclaw/openclaw/issues/152744)（已关闭）— Codex retained-state 迁移停滞
- [`#152968`](https://github.com/openclaw/openclaw/issues/152968)（已关闭）— Codex OAuth profile 丢失，全部 lane 401

**迁移建议**：在 v2026.9.5 回滚机制未稳定前，建议生产环境暂留 2026.9.4，关注追踪 Issue [`#145252`](https://github.com/openclaw/openclaw/issues/145252) 中维护者提供的恢复指引。

---

## 3. 项目进展

今日合并/关闭的代表性 PR 显示项目正围绕**"Gateway 主线程瘦身"**与**"升级/Doctor 流程可靠性"**两条主线推进：

| PR | 主题 | 价值 |
|---|---|---|
| [`#153159`](https://github.com/openclaw/openclaw/pull/153159) | `improve: move Board writes off the Gateway thread` | 缓解 Board 写入阻塞主线程 |
| [`#153194`](https://github.com/openclaw/openclaw/pull/153194) | `refactor(sessions): persisted member writes off the Gateway thread` | 会话成员写入异步化 |
| [`#153325`](https://github.com/openclaw/openclaw/pull/153325) | `refactor(sessions): hydrate saved transcripts off thread` | 历史会话水合不再阻塞 |
| [`#153216`](https://github.com/openclaw/openclaw/pull/153216) | `refactor(sessions): await model and thinking persistence` | 模型与 thinking 持久化统一走 agent DB worker |
| [`#153027`](https://github.com/openclaw/openclaw/pull/153027) | `fix(doctor): repair official plugin drift after manual core installs` | 解决 Doctor 修不了官方插件漂移的老问题 |
| [`#153027` / `#153296`](https://github.com/openclaw/openclaw/pull/153296)（已关闭） | 保持 GraphQL 配额耗尽时 PR 身份校验可用 | 提升 CI 抗配额扰动能力 |
| [`#153362`](https://github.com/openclaw/openclaw/pull/153362) | `fix(release): preserve 2026.8.33 update and validation safety` | P0，针对 Discord `/new`/`/reset` 旁路与投递确认竞态 |
| [`#153326`](https://github.com/openclaw/openclaw/pull/153326) | `fix(agents): resolve auto runtime before lease key` | P0，修复 2026.9.5 上 auto runtime 导致的主线程 livelock |

整体来看，维护者已把**核心稳定性相关的重构排到了 PR 队列前端**，这是项目健康度的重要信号：先止血，再迭代。

---

## 4. 社区热点

**讨论最活跃的 Issues（按评论数）**：

1. 🔥 [`#149361`](https://github.com/openclaw/openclaw/issues/149361) — **Umbrella: WebUI 性能与稳定性**（50 评论, P2）
   - 维护者 `vyctorbrzezowski` 维护的索引帖，覆盖桌面/移动端 WebUI 的若干子问题（含 [`#149727`](https://github.com/openclaw/openclaw/issues/149727) 测量滚动补偿引发的额外历史加载）。诉求集中在 WebUI 流畅度。

2. 🔥 [`#97616`](https://github.com/openclaw/openclaw/issues/97616) — **OpenClaw 泄漏未收割的 hook/tool 子进程**（30 评论, P1）
   - `openclaw-hooks`、`bash`、`codex` 等子进程累积为 zombie，runtime 退化。长期未根治。

3. 🔥 [`#144911`](https://github.com/openclaw/openclaw/issues/144911) — **MCP server init 超时拉垮 Gateway**（30 评论, P1）
   - stdio MCP server 在 30s 内未完成 `initialize` 触发未处理 promise 拒绝，整网关崩溃。

4. 🔥 [`#91588`](https://github.com/openclaw/openclaw/issues/91588) — **Gateway 内存泄漏：350MB → 15.5GB**（27 评论, P1）
   - 数日内 RSS 持续增长最终 OOM 反复重启，`launchd-handoff` 循环。

5. 🔥 [`#152744`](https://github.com/openclaw/openclaw/issues/152744) — **2026.9.5 Codex retained-state 迁移永远不收敛**（19 评论, 已关闭, P0）
   - 升级后 session catalog 永久 "cold"，列表为空，归档报 "thread not loaded"。

6. 🔥 [`#115908`](https://github.com/openclaw/openclaw/issues/115908) — **Transcript projection livelock**（18 评论, P1）
   - 持续写入下重建不收敛，主线程被占数十秒，所有 channel transport 停滞。

7. 🔥 [`#112423`](https://github.com/openclaw/openclaw/issues/112423) — **大 SQLite transcript 清理阻塞事件循环**（18 评论, P1）

8. 🔥 [`#152759`](https://github.com/openclaw/openclaw/issues/152759) — **2026.9.4 → 2026.9.5 升级 `doctor-failed`**（15 评论, P0）

**讨论最活跃的 PRs（评论数普遍为 0，部分无评论的 PR 仍然有 maintainer 标注或截图证据支撑推进）**：

- [`#153289`](https://github.com/openclaw/openclaw/pull/153289) — `fix(macos): preserve Chrome setup across native app upgrades`（steipete）
- [`#150348`](https://github.com/openclaw/openclaw/pull/150348) — `fix(config): write mixed include-owned catalogs and agent entries`
- [`#119291`](https://github.com/openclaw/openclaw/pull/119291) — `feat(plugins): experimental FaceTime realtime voice bridge`（XL, security-boundary）
- [`#153277`](https://github.com/openclaw/openclaw/pull/153277) — `fix: stabilize task reads, chat interactions, and async tests`

> 注：评论数可能反映 PR 提交时区与样本采集口径的差异，但这些 PR 均带 `status: 👀 ready for maintainer look` 或截图证据，已进入评审阶段。

---

## 5. Bug 与稳定性

按严重程度排序的 P0/P1 关键稳定性问题：

| 严重度 | Issue | 现象 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **P0** | [`#153257`](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 把稳定环境拖入 8 小时故障恢复 | ❌ 无 |
| 🔴 **P0** | [`#152759`](https://github.com/openclaw/openclaw/issues/152759) | `openclaw update` 2026.9.4→2026.9.5 `doctor-failed` | ❌ 无 |
| 🔴 **P0** | [`#152891`](https://github.com/openclaw/openclaw/issues/152891) | `runtime-verification-failed` | ❌ 无 |
| 🔴 **P0** | [`#153049`](https://github.com/openclaw/openclaw/issues/153049) | 升级 `doctor-failed` | ❌ 无 |
| 🔴 **P0** | [`#153177`](https://github.com/openclaw/openclaw/issues/153177) | `finalize:targetConfigConvergence` | ❌ 无 |
| 🔴 **P0** | [`#152981`](https://github.com/openclaw/openclaw/issues/152981) | 2026.9.5 Gateway 启动挂在 `sidecars.model-runtime` ~17 分钟 | ❌ 无 |
| 🔴 **P0** | [`#145252`](https://github.com/openclaw/openclaw/issues/145252) | 2026.9.3 / 2026.9.4 更新-升级-恢复可靠性追踪 | ❌（追踪 Issue） |
| 🔴 **P0** | [`#151467`](https://github.com/openclaw/openclaw/issues/151467) | v6.33 → v9.4 自升级死锁，回滚 cron 失败 | ❌ 无 |
| 🟠 **P1** | [`#97616`](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏，zombie 累积 | ❌ 无 |
| 🟠 **P1** | [`#144911`](https://github.com/openclaw/openclaw/issues/144911) | MCP server init 超时未处理 promise 拒绝致 Gateway 崩溃 | ❌ 无 |
| 🟠 **P1** | [`#91588`](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB → 15.5GB，OOM 反复 | ❌ 无 |
| 🟠 **P1** | [`#115908`](https://github.com/openclaw/openclaw/issues/115908) | Transcript projection reconcile livelock | ❌ 无 |
| 🟠 **P1** | [`#112423`](https://github.com/openclaw/openclaw/issues/112423) | SQLite transcript 清理阻塞 event loop | ❌ 无 |
| 🟠 **P1** | [`#134993`](https://github.com/openclaw/openclaw/issues/134993) | 2026.8.1 升级后 busy loop 占满一核 | ❌ 无 |
| 🟠 **P1** | [`#138139`](https://github.com/openclaw/openclaw/issues/138139) | `providerConfigMatchesRuntimeSnapshot` 递归哈希致事件循环饿死 | ❌ 无 |
| 🟠 **P1** | [`#104719`](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki 兜底全量重解析忽略工具 deadline | ✅ `clawsweeper:linked-pr-open` |
| 🟠 **P1** | [`#104992`](https://github.com/openclaw/openclaw/issues/104992) | transcript `***` 脱敏在 resume 时被回放到模型上下文 | ❌ 无 |
| 🟡 **P1/P2** | [`#153067`](https://github.com/openclaw/openclaw/issues/153067) | Gateway 稳态每 ~5s 重拷整张 state DB（~5.9 TB/天） | ❌ 无 |

**评估**：今日 P0 几乎全部集中在 **升级链路**，且**多数尚无 fix PR**——这是项目当前的**主要风险敞口**。

---

## 6. 功能请求与路线图信号

正在被 PR 接住的潜在功能方向：

| 方向 | Issue | 关联 PR |
|---|---|---|
| Node.js 主版本变更下的升级体验 | [`#107930`](https://github.com/openclaw/openclaw/issues/107930)（已关闭） | 已被追踪到 [`#145252`](https://github.com/openclaw/openclaw/issues/145252) |
| 实验性 FaceTime 实时

---

## 横向生态对比

# 2026-09-20 AI 智能体与个人 AI 助手开源生态横向对比分析

---

## 1. 生态全景

当前 AI 智能体/个人 AI 助手开源生态呈现**"三梯队并行"格局**：

- **第一梯队（高强度迭代）**：OpenClaw、Hermes Agent、ZeroClaw、CoPaw 在过去 24 小时内均刷新 30-1000 条 Issues/PRs，处于"高频特性演进 + 系统性稳定性债"并存阶段；
- **第二梯队（债务清偿/方向收敛）**：NanoBot、LobsterAI、Moltis 主要做"清理与统一"工作（修复关键 Bug、关闭陈旧 PR、统一架构），新功能以准备阶段为主；
- **第三梯队（停滞/低活跃）**：PicoClaw（官网 TLS 证书过期 9 天）、NanoClaw（PR 21-22 天未合）、IronClaw（单 PR 开放 40 天）、NullClaw / TinyClaw / ZeptoClaw 过去 24 小时零活动，整体进入维护静默期。

跨项目共性主题集中在四块：**自更新链路的脆弱性**、**WebUI/前端稳定性**、**Provider/插件化架构重构**、**Agent 工具审批与安全边界**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 关闭率 | Release | 健康度 | 关键特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 1000（含活跃/关闭） | — | ~40% | ✅ v2026.9.5（Linux） | ⚠️ 迭代强、P0 集中 | 升级链路 6 个 P0 几乎无 fix PR；主线程瘦身重构 |
| **Hermes Agent** | 50 | 50 | ~56% | ❌ |  中等偏上 | teknium1 一次性提交 Provider 插件栈 7 PR；Python 3.14 簇待合 |
| **ZeroClaw** | 34（11 关闭/23 活跃） | 50（3 关闭） | ~6%（PR） | ❌ |  活跃但积压 | 4 大架构 RFC 被接受；2 条 S0 安全 Bug 无 fix |
| **CoPaw** | 11（11 活跃） | 13（1 关闭） | ~8% | ❌ |  良好 | 架构（#7874）+ 性能（#7829/7868）+ 扩展点（#7880）三线推进 |
| **NanoBot** | 2（1 关闭） | 29（9 关闭） | ~31% |  | 🟢 良好 | WebUI 投影统一（#5819）+ 自更新（#5817）架构级推进 |
| **LobsterAI** | 1（1 关闭） | 6（全部关闭） | 100% | ❌ | 🟢 中等偏上 | 典型"批量清理日"，3 项关键 Bug 已修复 |
| **Moltis** | 4（1 关闭） | 1（0 关闭） | ~25% | ❌ | 🔴 需关注 | 高严重度 Bug #1205 开放 35 天无 fix |
| **NanoClaw** | 0 | 4（0 关闭） | 0% | ❌ |  积压 | 安全 PR #3680 滞留 21 天 |
| **IronClaw** | 0 | 1（0 关闭） | 0% | ❌ |  停滞 | 新贡献者 PR #7499 开放 40 天 |
| **PicoClaw** | 1（0 关闭） | 0 | 0% | ❌ |  基础设施失守 | 官网 TLS 证书过期 9 天且 stale |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | — | ❌ |  静默 | 24h 零活动 |

**整体观察**：第一梯队合计承担了生态 95% 以上的代码变动；梯队内部健康度差异主要体现在**"是否进入版本发布节奏"** 与 **"是否回应长周期 Issue"** 两个维度。

---

## 3. OpenClaw 在生态中的定位

### 规模与活跃度

OpenClaw 单日 1,000 条 Issues/PRs 更新，远超同梯队项目（Hermes/ZeroClaw 均约 50-100 条），社区规模**约 10-20 倍**于第二、三梯队。在统计的 13 个项目中，OpenClaw 是**唯一仍保持日级别 Release 节奏**的项目（v2026.9.5）。

### 技术路线差异

| 维度 | OpenClaw | Hermes Agent | ZeroClaw | CoPaw |
|---|---|---|---|---|
| 主线程模型 | 主线程瘦身重构（Board/Sessions 写入异步化） | Provider 插件化栈 | 运行时持有会话 + WASM 插件运行时 | PawApp 控制面重构 |
| 升级路径 | 完整 doctor + finalize 流水线（当前 P0 集中爆发） | 自更新链路 v0.21.x 多平台失稳 | 无新版本 | 静默期 |
| 渠道覆盖 | 桌面/移动 WebUI | 多 gateway 协作 + 跨设备 | WhatsApp Web 6+ 缺陷集中 | Console + 多标签终端 |
| 安全治理 | Doctor 流程修复 | — | 2 条 S0 暴露（ApprovalManager 缺失、Git --attr-source 逃逸） | kimi-code ACP runner 边界盲区 |

### 社区规模对比

OpenClaw 单日活跃评论最高的 Issue（#149361 WebUI umbrella）已达 **50 评论**，是同梯队头部热度的 1.5-2 倍；其维护者群体（steipete、roboclaw-bot、RomneyDa 等）展现出明确的**"先止血后迭代"** PR 排序纪律——这是当前生态中较为罕见的项目管理成熟度信号。

### 风险敞口

OpenClaw 当前**主要风险敞口集中在升级链路**，6 个 P0 中 5 个指向 v2026.9.4→v2026.9.5，且多数无 fix PR。这是相对于 Hermes（update 问题已闭环 #115466）、NanoBot（自更新 PR #5817 待合）较为突出的薄弱环节，但维护团队已通过追踪 Issue #145252 提供恢复指引，整体可控。

---

## 4. 共同关注的技术方向

### 4.1 自更新（self-update）/ 升级链路可靠性
- **OpenClaw**：v2026.9.4→v2026.9.5 升级 6 个 P0（#152759、#152891、#153049、#153177、#152981、#145252）
- **Hermes Agent**：v0.21.0→v0.21.3 升级 4+ Issue（#115638、#115466、#116497、#116173），其中 `fleet_restart_pending` 标记无法解除、Windows SCM 拒绝、UAC 重复弹出
- **NanoBot**：自更新作为高频痛点已被 PR #5817 接住（新增 `nanobot update` + SHA-256 校验 Bun runtime）
- **OpenClaw #151467**：v6.33 → v9.4 自升级死锁，回滚 cron 失败

**诉求共识**：从"能更新"演进到"更新可恢复、可回滚、可审计"，是当前生态的**首要工程债**。

### 4.2 WebUI / Console 稳定性与统一
- **OpenClaw #149361**：WebUI umbrella（50 评论）+ 子问题 #149727 滚动补偿
- **NanoBot #5819**：`refactor(webui): unify live and replay event projection`，将 TS thread event projector 确立为 UI 语义唯一所有者
- **CoPaw #7815 / #7888**：Console lazy chunk 加载失败不可恢复、React commitPlacement 报错导致整页卡死

**诉求共识**：实时投递与持久化 replay 走同一个 reducer / projector，避免事件双源导致的 UI 不一致与崩溃。

### 4.3 Provider / 模型插件化架构
- **Hermes Agent #116408**：teknium1 一次性提交 7 个 stacked PR（OAuth 形插件注册、每模型能力声明、错误分类、selector 可见、PKCE 登录等）
- **NanoBot #5666 / #5453**：aimlapi.com 接入 + 商汤日日新接入（商务合作型）
- **Moltis #1276**：Groq 提升为一等公民 provider
- **NanoClaw #3857**：pi agent provider

**诉求共识**：从"硬编码 provider 列表"走向"插件化注册 + 能力声明 + 选模型 selector 统一"，避免 monkey-patch 式扩展带来的安全/维护成本。

### 4.4 Agent 工具审批与安全边界
- **ZeroClaw #10968**：cron/heartbeat/headless SOP/spawn_subagent 等无人值守回合未构建 ApprovalManager → **S0**
- **ZeroClaw #10966**：Git `--attr-source` 选项让"只读"子命令词隐藏实际可变操作绕过审批 → **S0**
- **NanoBot #4072**：ExecTool (`restrict_to_workspace=True`) 通过相对符号链接越界读取 → **P1，开放 4 个月**
- **NanoClaw #3680**：allowlisted-extra mount bypass in validateSpec → 安全 PR 开放 21 天
- **CoPaw #7881**：kimi-code ACP runner 对 Write(new file) 与 Bash 完全盲区
- **OpenClaw #116562**（Hermes 同源思路）：`@file:/@folder:/@diff` 在 token gate 之前读入无界数据

**诉求共识**：Agent 在无人值守、多渠道、复杂工具组合下，**审批模型的一致性**与**输入数据的边界校验**成为安全基础设施的核心议题。

### 4.5 Gateway / 主线程性能与内存治理
- **OpenClaw #91588**：Gateway RSS 350MB → 15.5GB OOM
- **OpenClaw #115908 / #112423 / #134993 / #138139**：transcript projection livelock、SQLite cleanup 阻塞 event loop、busy loop 占满一核、providerConfigMatchesRuntimeSnapshot 递归哈希饿死事件循环
- **Hermes #115542**：37 GB state.db 上 `quick_check` 无进度续约导致永久重启循环
- **CoPaw #7829 / #7868**：chat 依赖拆分 + locale 懒加载 + per-request build 缓存

**诉求共识**：主线程瘦身 + 异步 worker + 不可变产物缓存是共同解药。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 桌面/移动全栈 + 多渠道 gateway + doctor 升级流水线 | 中高级开发者 / 自托管重度用户 | Doctor 升级 + 主线程瘦身双引擎；channel transport 多 |
| **Hermes Agent** | 多 gateway 协作 + Provider 插件化 + Bot 群聊 | 企业 / 跨设备协同 / 多 provider 切换用户 | Plugin 注册 → OAuth → 能力声明 → selector → 401 刷新五段式 |
| **NanoBot** | WebUI 体验 + Memory 子系统 + 多渠道消息语义 | 个人开发者 / 长会话用户 | recovery journal + self-update + 事件投影统一 |
| **ZeroClaw** | 架构奠基（runtime-owned session + WASM plugin + 追加式事件流） | 早期采用者 / 架构贡献者 | RFC 驱动（Rev 5/10）+ 强安全治理 |
| **CoPaw (QwenPaw)** | Console 前端稳健性 + 多标签终端 + 治理扩展点 | 桌面 AI 助手用户 / 治理接入方 | PawApp 控制面 + xterm 多标签 + escalation-only hooks |
| **LobsterAI** | 数据可靠性 + 跨平台构建 + per-session MCP 控制 | 生产环境企业用户 | SQLite 完整性修复 + 定时任务迁移兜底 |
| **Moltis** | Groq provider + Heartbeat/Cron 调度 | 资源敏感 / 多调度策略用户 | active_hours + tool_controls 配置一致性 |
| **NanoClaw** | 轻量 in-process provider + 安全 mount 边界 + 健康检查 CLI | CLI 重度用户 / 自动化运维 | mount-security + sweep timeout + ncl health |
| **IronClaw** | IdentyClaw Passport 主机接缝 + 实践者工具链 | 沙箱化部署用户 | host-mediated 集成 + Node CLI deploy 套件 |

---

## 6. 社区热度与成熟度分层

### 快速迭代阶段（Tier 1）
- **OpenClaw / Hermes Agent / ZeroClaw / CoPaw**：日级别刷新、PR 队列长、架构演进密集。共同特征：**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-20

## 1. 今日速览

NanoBot 今日开发活跃度处于**中高水平**：过去 24 小时 Issues 互动较少（仅 2 条，其中 1 条已关闭），但 PR 流量非常密集（29 条更新，其中 9 条已合并/关闭，20 条仍待评审）。社区贡献者持续围绕 **WebUI 体验重构**、**Memory 子系统稳定性**、**多渠道（Email/Telegram/Matrix）消息语义**展开工作。今日无 Release 发布。值得关注的是一条长期未修复的 **安全 Issue #4072**（ExecTool 相对符号链接绕过）已开放近 4 个月仍未关闭，属于待处理积压重点。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共 **9 条 PR 已合并/关闭**，集中在三个方向：

### 🔒 可靠性修复
- **#5809 fix(agent): discard stopped follow-up recovery journal**（已关闭） — 在显式取消会话时快照 durable follow-up ID，并在 worker 停止后只确认该快照，避免已取消的 WebUI follow-up 被 `RecoveryCoordinator` 错误地重新入队。**该 PR 直接闭环了 Issue #5808**（WebUI follow-ups canceled by /stop replay after gateway restart），是今天最重要的 bug 修复闭环。
  - 链接：https://github.com/HKUDS/nanobot/pull/5809

### 🎨 WebUI 一致性
- **#5816 feat(webui): polish provider setup and unify settings controls**（已关闭） — 统一了 settings、模型选择器、Overview 与 composer 中的 provider logo 视觉（紧凑圆角 tile、保留品牌色、移除白边），同时统一了 32px 设置控件样式。涉及 Models、Web search、Transcription、Image Generation 等多个设置面板的视觉一致性。
  - 链接：https://github.com/HKUDS/nanobot/pull/5816

### 🧹 仓库整理
- **#5818 chore: remove CLAUDE.md**（已关闭） — 删除仓库级 CLAUDE.md，属于纯文档清理。
  - 链接：https://github.com/HKUDS/nanobot/pull/5818

> **评估**：今日推进虽然不多，但每一项都属于"清理债务"性质（修复已确认 bug + UI 统一 + 文档清理），整体项目健康度略有提升。

---

## 4. 社区热点

### 🔥 最受关注的开放 PR
- **#5819 refactor(webui): unify live and replay event projection**（新开，今日 0 评论但议题重大）— 将"无 React 的 TypeScript thread event projector"确立为 delta/reasoning/tool progress/file edit/message/compaction/turn-end 等 UI 语义的唯一所有者，让 WebSocket 实时投递和持久化 thread replay 走同一个 reducer，并提供 `projection=...` 选项。**这是 WebUI 架构级别的统一工作**，可能为后续 WebUI 性能与一致性改进奠定基础。
  - 链接：https://github.com/HKUDS/nanobot/pull/5819

- **#5817 feat: add stable and source self-update flows** — 新增 `nanobot update`（拉取最新稳定版 PyPI release）、`--dev` / `--update-dev`（仅 fast-forward 源码更新）、并引入经过 SHA-256 校验的私有 Bun runtime（不再依赖 Node）。**这是用户长期诉求的一站式自更新体验**。
  - 链接：https://github.com/HKUDS/nanobot/pull/5817

### 🧠 Memory 子系统改进集群
- **#5403 [P1] fix(memory): use API-reported prompt tokens to trigger consolidation** — 修复了本地 tiktoken 估算在现代模型上低估 30-50% token 导致压缩永远不触发的关键 bug。是当前挂起的 P1 级别 issue。
  - 链接：https://github.com/HKUDS/nanobot/pull/5403

### 🤝 商务合作型 PR
- **#5666 feat(providers): add aimlapi.com as an OpenAI-compatible gateway provider** — Hugo (aimlapi.com) 提出 50/50 分润合作。属于商务拓展型 PR，维护者需要评估政策与合规。
  - 链接：https://github.com/HKUDS/nanobot/pull/5666
- **#5453 feat(providers): add SenseNova (商汤日日新) provider** — 商汤日日新 OpenAI 兼容接入。
  - 链接：https://github.com/HKUDS/nanobot/pull/5453

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| 🟠 **P1** | [#5403](https://github.com/HKUDS/nanobot/pull/5403) | tiktoken 估算低估导致 Memory consolidation 在现代模型上不触发 | **PR 待合并**，关联 Issue #5402 |
| 🟠 **P1 安全** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) | ExecTool (`restrict_to_workspace=True`) 可通过工作区内相对符号链接越界读取 | **无 fix PR**，开放 4 个月 |
| 🟡 P2 | [#5808](https://github.com/HKUDS/nanobot/issues/5808) | WebUI `/stop` 后重启 gateway 导致已取消 follow-up 被重新入队 | **已闭环**（#5809 已关闭）✅ |
| 🟡 P2 | [#5748](https://github.com/HKUDS/nanobot/pull/5748) | runtime checkpoint 仅在工具调用集"开始前"和"全部完成后"持久化，中间退出无法区分已完成结果与未完成 | **PR 待合并**（关联 #5747）|
| 🟡 P2 | [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `WeakValueDictionary` 在 GC 后导致 per-session consolidation lock 身份不稳定 | **PR 待合并** |
| 🟡 P2 | [#4820](https://github.com/HKUDS/nanobot/pull/4820) | `external_lookup_signature` 把 truthy 非字符串 URL（如 `123`）强制为 `web_fetch:123` 污染缓存 | **PR 待合并** |
| 🟡 P2 | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 持续目标（sustained goal）两端缺陷：无终止条件被错误记录为 active；turn idle 后继续触发 | **PR 待合并** |
| 🟡 P2 | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | iOS Safari PWA 首次点击会被 `:hover` 链吞掉；侧边栏 session 需要两次点击 | **PR 待合并** |
| 🟢 P2 | [#5260](https://github.com/HKUDS/nanobot/pull/5260) | MemoryStore 把 runtime 产物纳入被跟踪工作区，导致冗余变更 | **PR 待合并** |

---

## 6. 功能请求与路线图信号

### 很可能进入下个版本的功能
- **WebUI 事件投影统一**（#5819）— 架构级重构，影响后续所有 WebUI 演进路线。
- **稳定/源码自更新**（#5817）— `nanobot update` 是用户高频痛点。
- **WebUI iOS PWA 体验修复**（#5641）— 直接关系到 PWA 用户留存。
- **Provider 选择器搜索**（#5776）— Models、Web search、Transcription、Image Generation 共享组件同步受益。

### 可能在评审中的功能
- **Provider 移除控制**（#5352）— 引入删除内置 provider 的确认流，避免误删。
- **Email 渠道按收件人别名过滤**（#5606）— 解决共享邮箱多别名误处理。
- **Telegram 自托管 Bot API**（#4919）— 满足企业内网与自托管用户。
- **Matrix 回复关联原消息**（#5292）— 提升 Room 内 bot 交互可读性。

### 商业合作型功能（需维护者评估）
- aimlapi.com 接入（#5666）+ SenseNova 接入（#5453）— 与 P1 Memory 修复、Backlog 治理形成 trade-off。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数普遍为 0，公开讨论样本较少，但可以从 PR/Issue 描述中提炼以下用户场景与诉求：

### 真实使用场景
- **共享邮箱多别名**：用户反映 `assistant@example.com` 和 `team@example.com` 落到同一邮箱时无法按发送地址区分（#5606）。
- **自托管 Telegram**：企业内网部署需要指向自建 Bot API server（#4919）。
- **iOS PWA 用户**：侧边栏需要两次点击才能进入 session 严重影响移动端体验（#5641）。

### 明确不满/痛点
- **Memory 压缩不触发**：本地估算与 API 实际 token 数偏差 30-50%，导致上下文超窗也从不压缩（#5403）—— 是当前最严重的"功能失效"用户痛点。
- **符号链接越权读取**：`restrict_to_workspace=True` 形同虚设的安全问题（#4072）—— 安全信任危机。
- **重复取消失败**：`/stop` 后 follow-up 仍然在重启后被复活（#5808），破坏用户对取消行为的预期。

### 满意度信号
- 多个新供应商接入意愿（aimlapi、SenseNova）说明生态扩展正在获得正向反馈。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 标题 | 打开日 | 风险点 |
|---|---|---|---|---|
| [#4072](https://github.com/HKUDS/nanobot/issues/4072) | **安全** | ExecTool 通过相对符号链接绕过 workspace 限制 | 2026-05-29 | 🟠 4 个月未修复，安全漏洞 |
| [#5402](https://github.com/HKUDS/nanobot/pull/5403) → **#5403** | **P1 Bug** | Memory consolidation 在现代模型上不触发 | 2026-08-16 | 🟠 P1 级别未合并 |
| [#4702](https://github.com/HKUDS/nanobot/pull/4919) → **#4919** | 渠道功能 | Telegram 自托管 Bot API | 2026-07-14 | 🟡 长期功能请求 |
| [#5747](https://github.com/HKUDS/nanobot/pull/5748) → **#5748** | 可靠性 | runtime 中断后已完成的工具副作用无法恢复 | 2026-09-12 | 🟡 数据完整性 |
| [#5402](https://github.com/HKUDS/nanobot/pull/5403) | P1 依赖 | Memory 压缩触发条件错误（关联 PR #5403） | 2026-08-16 | 🟡 用户高频痛点 |
| [#5819](https://github.com/HKUDS/nanobot/pull/5819) | 架构 | WebUI 事件投影统一 | 2026-09-20 | 🟢 新开，需架构评审 |

> **重点提醒**：**#4072 安全 Issue 已开放近 4 个月**，属于建议优先处理的积压项，建议维护者尽快评估并发布 fix。

---

### 整体健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | PR 流量大，多个 P2 项在动 |
| 稳定性 | ⭐⭐⭐ | P1 Memory 累积延迟、长期安全 Issue 待处理 |
| 社区参与 | ⭐⭐⭐⭐ | 新供应商接入意愿高，社区贡献多元 |
| 文档与一致性 | ⭐⭐⭐⭐ | WebUI 视觉与事件投影正在统一 |
| 路线图清晰度 | ⭐⭐⭐ | 自更新、Provider 体系、WebUI 重构三条主线清晰 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报 · 2026-09-20

---

## 1. 今日速览

Hermes Agent 项目今日整体处于高强度维护状态，**24 小时内 Issues 与 PR 各刷新 50 条**，呈现出明显的"修 bug 优先 + 大型特性 PR 栈集中提交"的态势。无新版本发布，但出现一波由 `teknium1` 主导、针对模型 Provider 插件架构重构的 PR 栈（围绕 #116408 拆分），预示下一版本将引入插件化 Auth/选模型能力。同时 **Python 3.14 兼容性问题**形成 Issue 簇（至少 5 个重复 issue 集中出现），但社区已提交对应修复 PR #83433 长期搁置未合入，需维护者重点关注。整体活跃度高、健康度中等偏上，但**积压问题**值得警惕。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### 3.1 已合并/关闭 PR（28 条中的代表性推进）

今日合并/关闭的 PR 中，主要集中在稳定性、桌面端兼容性、cron/工具链细节优化。亮点包括：

- **[#83433](https://github.com/NousResearch/hermes-agent/pull/83433)** Python 3.14 兼容支持 —— 解决了 `DaemonThreadPoolExecutor` 在 3.14 下崩溃（`AttributeError: '_initializer'`）、litert bridge、requires-python 上限以及 3.14 CI lane。**关联 5 个重复 Issue**（#59896/#69359/#76621/#80857/#100982），影响面大，但仍 OPEN 待合并。
- **[#114606](https://github.com/NousResearch/hermes-agent/pull/114606)** MCP `tools/list` TTL 缓存刷新 —— 长连接 MCP 会话现在能按 SEP-2549 提示自动刷新变更的工具列表。
- **[#114620](https://github.com/NousResearch/hermes-agent/pull/114620)** WSLg 渲染失败回退到 X11 —— Electron 1002 启动错误时自动回退。
- **[#114121](https://github.com/NousResearch/hermes-agent/pull/114121)** Desktop TTS 中文填充词清理（嗯/哼）。
- **[#110616](https://github.com/NousResearch/hermes-agent/pull/110616)** state.db 被替换时 JSONL fallback 写入上限。
- **[#111792](https://github.com/NousResearch/hermes-agent/pull/111792)** macOS Desktop 非活跃窗口释放 vibrancy。
- **[#111889](https://github.com/NousResearch/hermes-agent/pull/111889)** Cron OpenRouter `:free` 模型下架自动重试。
- **[#114632](https://github.com/NousResearch/hermes-agent/pull/114632)** 修正 skills 中不存在的脚本引用。

### 3.2 Provider 插件架构重大重构栈（OPEN）

`teknium1` 一次性提交了 7 个相互 stacked 的 Provider 插件架构改进 PR，构成完整"Wave 1 of #116408"：

| PR | 主题 |
|---|---|
| [#116553](https://github.com/NousResearch/hermes-agent/pull/116553) | OAuth 形插件通过 profile 注册/登录/刷新 |
| [#116570](https://github.com/NousResearch/hermes-agent/pull/116570) | 每模型能力声明一次，picker/视觉路由统一 |
| [#116572](https://github.com/NousResearch/hermes-agent/pull/116572) | 插件自身 API 错误分类 + 401 刷新 |
| [#116575](https://github.com/NousResearch/hermes-agent/pull/116575) | 已准入插件在 `hermes model` 与 Desktop 选择器可见 |
| [#116576](https://github.com/NousResearch/hermes-agent/pull/116576) | 声明式 OAuth PKCE 登录（基于 ProviderProfile hooks） |

**意义**：此栈落地后，第三方 provider 插件将告别 monkey-patch，注册/认证/能力声明/选择器呈现/刷新全部由 core-owned 钩子统一管控，显著降低插件维护成本与安全边界风险。**但 7 个 PR 同步 OPEN 带来 review 负担**，维护者需协调合并顺序。

---

## 4. 社区热点

### 4.1 Issues 热度榜

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 28 | 2 | **Bot 群聊在 Desktop 关闭后仍可继续工作** |
| 🥈 | [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) | 13 | 2 | Email 网关按规范化主题隔离会话（可选） |
| 🥉 | [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | 8 | 0 | `fleet_restart_pending` 标记在 `hermes update` 崩溃时无法解除 |
| 4 | [#107918](https://github.com/NousResearch/hermes-agent/issues/107918) | 7 | 1 | Web Dashboard TUI 在自定义 provider 已配置时仍显示 "Setup Required"（已 CLOSED） |
| 5 | [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) | 6 | 0 | v0.21.1→v0.21.3 自更新末尾 `TypeError` 中断 tail |

**背后诉求分析**：
- **Bot 群聊 + 跨设备延续（#97681）** 反映 Hermes 用户对**多 gateway 协作、移动场景会话延续**的强烈需求，是当前核心体验缺口之一；
- **Email 会话隔离（#26277）** 体现企业/团队用户对按主题区分多线沟通的真实痛点；
- **多个 update 相关 Issue（#115638/#115466/#116497/#116173）** 集中爆发说明 **v0.21.x 自更新链路存在系统性脆弱**，用户从 0.21.0 → 0.21.3 升级通道不稳。

### 4.2 PR 关注度

除 [#83433](https://github.com/NousResearch/hermes-agent/pull/83433)（Python 3.14 修复）和 Provider 插件栈外，社区还重点关注：

- [#116440](https://github.com/NousResearch/hermes-agent/pull/116440) Bot-to-Bot DM 线程显示（贴合 #97681 的诉求）
- [#116439](https://github.com/NousResearch/hermes-agent/pull/116439) 工具搜索 deferral 注册（关闭 #116404）
- [#116442](https://github.com/NousResearch/hermes-agent/pull/116442) `/usage` 增加 GitHub Copilot 配额（#116397）
- [#116444](https://github.com/NousResearch/hermes-agent/pull/116444) Discord `/命令` 长文本走文件附件（绕开 Nitro 限制）
- [#116449](https://github.com/NousResearch/hermes-agent/pull/116449) Desktop 滚动抢占修复（#116273）

---

## 5. Bug 与稳定性

### P1（严重）
| Issue | 描述 | 状态 |
|---|---|---|
| [#107918](https://github.com/NousResearch/hermes-agent/issues/107918) | Web Dashboard TUI 在 Docker + 自定义 provider 已配时误显 "Setup Required" | **已 CLOSED** ✅ |

### P2（重要）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#115638](https://github.com/NousResearch/hermes-agent/issues/115638) | `fleet_restart_pending` 标记在 `hermes update` 中途崩溃时无法清除 | ❌ 无 |
| [#115466](https://github.com/NousResearch/hermes-agent/issues/115466) | 自更新 v0.21.1→v0.21.3 末尾 `_find_stale_dashboard_pids()` 参数错误中断 tail | ❌ 无 |
| [#116497](https://github.com/NousResearch/hermes-agent/issues/116497) | `hermes update` v0.21.0→v0.21.3 post-update 清理 traceback（与上同源） | ❌ 无 |
| [#116213](https://github.com/NousResearch/hermes-agent/issues/116213) | Cron preflight 无法从 `credential_pool` 解析 openai-codex OAuth | ❌ 无 |
| [#49567](https://github.com/NousResearch/hermes-agent/issues/49567) | Docker + `HERMES_DASHBOARD=1` 启动 dashboard 监听 0.0.0.0 后被 auth 拦截 | ❌ 无（3 个月未修） |
| [#115542](https://github.com/NousResearch/hermes-agent/issues/115542) | 37 GB `state.db` 上 `quick_check` 无进度续约导致永久重启循环 | ❌ 无 |
| [#116446](https://github.com/NousResearch/hermes-agent/issues/116446) | LSP 单次 timeout 毒化整个 workspace；5s 稳态预算施加在需要 ~55s 的冷启动服务 | ❌ 无 |
| [#116467](https://github.com/NousResearch/hermes-agent/issues/116467) | Desktop/CLI 切换 model 时静默丢弃有效上下文上限 | ❌ 无 |
| [#116483](https://github.com/NousResearch/hermes-agent/issues/116483) | Desktop `clarify` 工具问题表单从不渲染（用户只看到 spinner） | ❌ 无 |
| [#116173](https://github.com/NousResearch/hermes-agent/issues/116173) | Windows `hermes update` 因无关 SCM 服务 `QueryServiceConfigW` 拒绝而中止 | ❌ 无 |
| [#116550](https://github.com/NousResearch/hermes-agent/issues/116550) | Windows `hermes gateway setup` 重复询问安装提示并重发 UAC | ❌ 无 |
| [#116551](https://github.com/NousResearch/hermes-agent/issues/116551) | systemd `hermes-gateway.service` 把计划内重启误记为 `exit-code` 失败 | ❌ 无 |
| [#116562](https://github.com/NousResearch/hermes-agent/issues/116562) | `@file:/@folder:/@diff` 在 token gate 之前读入无界数据（安全风险） | ❌ 无 |

### P3（一般）
- [#116568](https://github.com/NousResearch/hermes-agent/issues/116568) Discord admission gate 静默丢弃 @他人消息 → **已有 fix PR [#116581](https://github.com/NousResearch/hermes-agent/pull/116581)** ✅
- [#105560](https://github.com/NousResearch/hermes-agent/issues/105560) Windows `computer_use` 从 UIA 帧推断不可用 `bounds_scale`
- [#115306](https://github.com/NousResearch/hermes-agent/issues/115306) Google AI Studio `AQ.` 前缀 Gemini key 失效
- [#116443](https://github.com/NousResearch/hermes-agent/issues/116443) macOS TUI `Ctrl+D` 不退出、`Cmd+D` 与 Ghostty 冲突
- [#116458](https://github.com/NousResearch/hermes-agent/issues/116458) Bot 群聊成员失败统一渲染为 "hit an error"，slot-timeout 与崩溃不可区分

### Python 3.14 兼容簇（5 条重复 OPEN）
- [#59896](https://github.com/NousResearch/hermes-agent/issues/59896) / [#69359](https://github.com/NousResearch/hermes-agent/issues/69359) / [#76621](https://github.com/NousResearch/hermes-agent/issues/76621) / [#80857](https://github.com/NousResearch/hermes-agent/issues/80857) / [#100982](https://github.com/NousResearch/hermes-agent/issues/100982)
- **修复 PR [#83433](https://github.com/NousResearch/hermes-agent/pull/83433) 仍 OPEN**，最早创建于 2026-08-10 已逾 40 天未合入。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 路线图信号 |
|---|---|---|
| Bot 群聊跨 gateway 协作 / Desktop 关闭仍工作 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 已有相关 PR #116440，方向正确但仅是线程显示，下一步需后台侧轮询 |
| Email 按规范化主题会话隔离 | [#26277](https://github.com/NousResearch/hermes-agent/issues/26277) | 长期未决（4 个月），需维护者明确优先级 |
| 自动解档活动会话 | [#89325](https://github.com/NousResearch/hermes-agent/issues/89325) | 简单补丁即可 |
| TUI 暴露 `inline_images=false` 开关 | [#116511](https://github.com/NousResearch/hermes-agent/issues/116511) | 实现已存在，仅需暴露参数 |
| 消息平台上非编码技能降级为 names-only | [#108081](https://github.com/NousResearch/hermes-agent/issues/108081) | 与 #116570 能力声明重构可能联动 |
| MEMORY.md 作为记忆文档链锚点 | [#116564](https://github.com/NousResearch/hermes-agent/issues/116564) | 扩展 2,200 字限制为链式引用 |
| Provider 插件统一 OAuth PKCE/选模型/能力声明 | [#116408 系列](https://github.com/NousResearch/hermes-agent/issues/116408) | **重大路线图项**，teknium1 已开 PR 栈，**下一版本极可能纳入**。

---

## 7. 用户反馈摘要

从 Issue 评论与摘要中提炼真实使用场景与痛点：

1. **升级焦虑**：多名用户在 macOS / Windows / Docker 上从 v0.21.0~0.21.1 升级到 v0.21.3 时遇到 update 链路中断（#115466、#116497、#116173、#116550），反复出现 traceback / 重复询问 / 权限弹窗 —— 用户对**自更新可靠性已产生不信任**。

2. **企业用户的工作流诉求**：
   - `#26277` 用户明确表达"邮件会话需按项目主题隔离"，反映 B2B 场景。
   - `#97681` 28 条评论中用户希望"Bot 群聊在多 gateway、跨设备保持协作" —— 体现**多 agent 协同 + 移动办公**正在成为核心用例。

3. **模型/Provider 配置 UX 困惑**：
   - `#107918` 用户在 Docker 中已配好自定义 provider 却被 Dashboard 误报"Setup Required" → 显示**配置状态展示与实际生效存在割裂**。
   - `#115306` Gemini `AQ.` 前缀 key 突然失效（commit `1e4952ddba` 引入），**回归测试覆盖不足**。

4. **Discord 平台摩擦**：
   - `#116444` 用户痛点直击 Discord 平台机制：免费用户无法粘贴 2000+ 字符，必须借助文件附件 —— 体现了 Hermes 在**受限 IM 平台**上的真实工程妥协。
   - `#116568` 用户发现 `@他人` 的消息被静默丢弃，与无 mention 时处理不同，反映**黑名单/准入逻辑存在边缘 case**。

5. **Python 3.14 生态**：多个

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-09-20  
**数据范围**: 过去 24 小时  
**仓库**: [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时活跃度**极低**，代码层面几乎处于停滞状态：0 个新版本发布，0 个 PR 更新，Issues 仅有 1 条更新。值得注意的是，这条唯一的活跃 Issue 并非功能或 Bug 议题，而是标记为 **CRITICAL** 的基础设施问题——项目官网 `picoclaw.io` 的 TLS 证书已于 **2026-09-10 过期**，导致站点对所有浏览器不可用，但该 Issue 同时被标记为 **stale**，表明维护者尚未做出实质性响应。整体来看，项目今日的健康度信号偏负面，建议运维侧立即介入处理证书问题，避免品牌信任度持续受损。

---

## 2. 版本发布

无（今日无新版本发布，省略该章节）。

---

## 3. 项目进展

今日**无 PR 更新**，代码仓库未产生任何合并、关闭或评审活动，项目代码层面的迭代进度为零。考虑到过去 24 小时无任何代码变更提交，PicoClaw 在功能演进和 Bug 修复维度上今日**未向前迈进**。

---

## 4. 社区热点

今日唯一活跃的议题即为社区最高关注点：

- 🔥 **[#3377] TLS certificate for picoclaw.io expired on 2026-09-10 — site is down for every browser**
  - 链接: https://github.com/sipeed/picoclaw/issues/3377
  - 作者: @dimonb | 创建: 2026-09-12 | 最新更新: 2026-09-19
  - 评论数: 1 | 👍: 1 | 标签: `OPEN`, `stale`, `CRITICAL`

**诉求分析**：用户明确指出这是**时效敏感**的问题，证书已过期近 10 天，所有 TLS 客户端均拒绝连接，相当于项目官网完全瘫痪。这并非开发问题，而是典型的**运维失职**——证书自动续期机制（Let’s Encrypt 或类似 CA 的自动签发）显然未正常工作。该 Issue 仅获得 1 个点赞和 1 条评论，关注度并不算高，但严重程度（CRITICAL）与实际影响（站点彻底不可用）之间存在明显落差，社区反响可能被严重低估。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 编号 | 状态 | 是否有 Fix PR |
|---------|------|------|------|--------------|
| 🔴 **CRITICAL** | 官网 TLS 证书过期，picoclaw.io 对所有浏览器/客户端不可达 | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | OPEN · stale | 无 |

**补充说明**：严格来说，#3377 不属于代码 Bug，而是**运维/基础设施类**问题。但其对外的影响等同于“官网宕机”——新用户无法访问主页、潜在贡献者无法查看文档、SEO 与品牌曝光均受影响。建议维护者优先处理，无需代码改动，仅需：

1. 手动续期证书（或排查自动续期 cron / certbot 任务为何失效）；
2. 启用证书到期前的告警监控；
3. 考虑接入更可靠的自动续期方案（如 Caddy、acme.sh + systemd timer）。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**，Issues 列表中未观察到用户提交的新特性提案。结合过去 24 小时 0 PR、0 发布的整体态势，目前**无法从数据中推断出明确的下个版本路线图信号**。若需评估路线图，建议扩大时间窗口至 7–30 天进行趋势观察。

---

## 7. 用户反馈摘要

由于今日仅有 1 条 Issue 处于活跃状态，用户反馈样本极度有限。可提取的信息如下：

- **🔴 痛点：官网不可达**
  - 用户 @dimonb 在 [#3377](https://github.com/sipeed/picoclaw/issues/3377) 中直接反馈站点对所有浏览器失效，强调 “time-sensitive”（时效敏感），暗示问题已拖延多日。
  - 仅 1 条评论、1 个 👍，说明可能尚未被广泛传播，或用户已习惯通过其他渠道（如 GitHub README、镜像链接）绕过官网。

- **使用场景推断**：从 Issue 描述中的 “every browser and every TLS client now refuses the connection” 可知，用户在使用 `picoclaw.io` 进行日常访问（可能为查阅文档、下载资源或获取最新版本）。

- **满意度信号**：低评论+低点赞+上 stale 状态，三重信号均指向**用户对该 Issue 的响应速度不满意**，但又未形成规模化抱怨。这种“沉默的不满”往往是项目运营滑坡的早期信号。

---

## 8. 待处理积压

以下为需要维护者**重点关注**的长期未响应项目：

| 类型 | 编号 | 标题 | 创建/更新 | 风险点 |
|------|------|------|-----------|--------|
| 🔴 Critical · stale | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | TLS certificate for picoclaw.io expired | 创建 9 天前 / 更新 1 天前 | 官网持续不可用，品牌信任流失；stale 标记说明机器人已判定无响应 |

**维护者建议**：

1. **立即处理 #3377**——作为 CRITICAL 级别问题，它应被优先级最高处理。stale 标记虽表明系统检测到无活动，但人工复核应优先于自动化标签。
2. **复盘证书续期失效根因**——是一次性疏忽，还是续期任务持续失败？建议检查最近一次成功续期的时间、相关 cron / systemd timer 日志、CA 提供商账户余额/状态。
3. **建立证书到期前的预警机制**（建议到期前 30 天、14 天、7 天、1 天多通道告警），避免同类问题再次发生。
4. **公开披露处理进展**：在 #3377 中回复根因分析与改进计划，必要时在 README 中提供临时镜像链接（如 GitHub Pages）以缓解用户访问中断。

---

## 附录：今日健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐☆☆☆☆ | 0 PR、0 Release |
| Issue 响应度 | ⭐⭐☆☆☆ | 唯一 Issue 已 9 天未实质性解决且被标 stale |
| 社区参与度 | ⭐⭐☆☆☆ | 仅 1 条评论、1 个点赞 |
| 基础设施可用性 | ⭐☆☆☆☆ | 官网 TLS 证书过期，完全不可达 |
| 综合健康度 | ⚠️ **需关注** | 建议优先解决运维问题，激活代码迭代节奏 |

---

*本报告基于 GitHub 公开数据自动生成，所有链接均为社区可访问的公开资源。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-09-20
**项目主页**：[github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 过去 24 小时整体活跃度处于**中低水平**：Issues 端完全静默（0 条新开、0 条活跃、0 条关闭），PR 端有 4 条仍处于 Open 状态等待审查，**无任何合并或关闭动作**，也无新版本发布。值得关注的是，4 条 PR 中包含 1 项安全修复（挂载权限绕过）、1 项影响慢速本地模型的可用性修复（sweep 超时）以及 2 项功能增强（新 provider 与健康检查 CLI），维护团队对这些 PR 的推进节奏将直接影响下一版本的稳定性与功能完整性。

---

## 2. 版本发布

**今日无新版本发布。**

当前版本发布管道处于静默期，建议关注 PR #3646、#3680、#3856、#3857 的合并进展，它们很可能构成下个 release 的核心内容。

---

## 3. 项目进展

⚠️ **过去 24 小时内无 PR 被合并或关闭**，所有活跃 PR 均仍处于 OPEN 状态。以下是按更新时间排列的待审查 PR：

| # | PR | 类型 | 作者 | 创建→更新 | 状态 |
|---|----|----|------|-----------|------|
| 1 | [#3857 feat(providers): add pi agent provider](https://github.com/qwibitai/nanoclaw/pull/3857) | Feature | Z-Mackintosh | 2026-09-19 | OPEN |
| 2 | [#3856 feat(cli): add `ncl health`](https://github.com/qwibitai/nanoclaw/pull/3856) | Feature | prathish-ks | 2026-09-19 | OPEN |
| 3 | [#3646 fix(sweep): configurable idle timeout](https://github.com/qwibitai/nanoclaw/pull/3646) | Bug Fix | glifocat | 2026-08-29 → 09-19 | OPEN |
| 4 | [#3680 fix(mount-security): close allowlisted-extra bypass](https://github.com/qwibitai/nanoclaw/pull/3680) | Security Fix | prathish-ks | 2026-08-30 → 09-19 | OPEN |

**整体评估**：项目在功能扩展（pi provider、health CLI）与安全/稳定性加固（mount bypass、sweep 超时）上呈双线推进，但都尚未通过审查，项目向前推进幅度有限，建议维护者尽快分配 reviewer。

---

## 4. 社区热点

由于所有 PR 的评论数据标记为 `undefined`、点赞数均为 0，**当前没有可量化的"热点讨论"**。从 PR 涉及的相关引用看，#3856 显式 **关闭 Issue #2504**（健康检查需求），#3857 与历史讨论 #80、#1163 相关联，可推断社区在过去数月中持续呼吁以下两项能力：

- **本地运行时的健康/诊断能力**（#2504 → #3856）：用户希望在不依赖主进程的情况下判断系统状态。
- **更多 agent provider 选择**（#80 / #1163 → #3857）：尤其是可作为 in-process SDK 集成的轻量 agent。

> 📌 建议维护者通过 PR 评论、Issue 互动等渠道重新激活社区参与度。

---

## 5. Bug 与稳定性

今日无新报告的 Bug，但有两项**重要的存量修复**等待合并：

### 🔴 高优先级 — 安全性 Bug

**[#3680 fix(mount-security): close allowlisted-extra mount bypass in validateSpec](https://github.com/qwibitai/nanoclaw/pull/3680)**
- **作者**：prathish-ks
- **标签**：area/security, area/credentials, area/containers
- **描述**：关闭 `validateSpec` 中允许额外挂载的绕过路径，涉及容器、凭据、provider 安全
- **影响范围**：可能允许攻击者绕过允许列表挂载到不该访问的路径
- **状态**：✅ 已有 fix PR 待合并（创建 2026-08-30，已停留 20+ 天）

### 🟡 中优先级 — 可用性 Bug

**[#3646 fix(sweep): make the idle timeout configurable and apply it to both kill paths](https://github.com/qwibitai/nanoclaw/pull/3646)**
- **作者**：glifocat
- **标签**：area/core, area/providers, area/agent-runner
- **问题**：sweep 的 30 分钟硬编码超时在本地慢模型场景下会误杀仍在进行的 turn（心跳仅依赖 provider stream 事件）
- **修复**：将超时改为可配置，并覆盖两条 kill 路径
- **状态**：✅ 已有 fix PR 待合并（创建 2026-08-29，已停留 22 天）

---

## 6. 功能请求与路线图信号

| 信号 | 对应 PR | 关联 Issue | 进入下版本可能性 |
|------|--------|-----------|----------------|
| 本地只读健康检查 CLI（`ncl health`） | [#3856](https://github.com/qwibitai/nanoclaw/pull/3856) | #2504 | 🟢 高（明确关闭 issue） |
| Pi Coding Agent 作为可安装 provider | [#3857](https://github.com/qwibitai/nanoclaw/pull/3857) | #80, #1163 | 🟡 中（需 review in-process SDK 设计） |
| 可配置 sweep idle timeout | [#3646](https://github.com/qwibitai/nanoclaw/pull/3646) | — | 🟢 高（属于稳定性修复） |
| 挂载白名单绕过修复 | [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) | — | 🟢 高（安全必修） |

**路线图研判**：若 4 条 PR 在近期合并，下一版本将显著强化**安全基线**（mount bypass）、**本地模型体验**（sweep timeout）与**CLI 可观测性**（health）三大方向，同时新增 **pi provider** 作为生态扩展。

---

## 7. 用户反馈摘要

由于 Issues 与 PR 评论数据均未提供实质内容，今日无法从一手评论中提炼用户痛点。仅能根据 PR 描述推断出以下**场景化反馈信号**：

1. **本地慢模型用户**：sweep 30 分钟硬超时会"误杀"运行中的任务，反映出本地推理场景下的可用性缺陷（→ #3646）。
2. **运维/集成用户**：现有 `ncl` 命令均依赖主进程存活，缺乏独立的健康检查手段，影响自动化监控集成（→ #3856 / #2504）。
3. **安全敏感用户**：挂载白名单在某些路径下可被绕过，需要更严格的 `validateSpec` 校验（→ #3680）。
4. **provider 多样化诉求**：希望引入 pi 作为轻量级 in-process agent（→ #3857）。

> ⚠️ 上述结论基于 PR 摘要推断，缺乏评论互动验证，建议维护者主动收集补充反馈。

---

## 8. 待处理积压

| PR | 标题 | 创建至今 | 主要标签 | 风险 |
|----|------|---------|---------|------|
| [#3646](https://github.com/qwibitai/nanoclaw/pull/3646) | fix(sweep): configurable idle timeout | **22 天** | core, providers, agent-runner | 影响所有本地慢模型用户体验 |
| [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) | fix(mount-security): close allowlisted-extra bypass | **21 天** | security, containers, credentials | 安全风险长期未修复窗口扩大 |
| [#3856](https://github.com/qwibitai/nanoclaw/pull/3856) | feat(cli): `ncl health` | 1 天 | ncl-cli | 已显式 closes #2504 |
| [#3857](https://github.com/qwibitai/nanoclaw/pull/3857) | feat(providers): pi agent | 1 天 | providers, agent-runner, skills | 需 review SDK 集成方案 |

### 🔔 维护者提醒

- **#3646 与 #3680 已停留超过 3 周**，尤其 #3680 涉及**安全绕过**，建议优先分配 reviewer。
- 当前 PR/Issue 评论数与点赞数均为 0 或 undefined，**社区互动处于冰点**，建议在合并时主动留言以提升贡献者留存。
- 4 条 PR 中有 2 条来自同一贡献者 **prathish-ks**（#3680 与 #3856），核心维护者承担了较重的安全与 CLI 工作，建议扩大 reviewer 池分散风险。

---

*报告基于 2026-09-20 当日 GitHub 公开数据生成，数据来源：GitHub REST API。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-09-20**
**项目：nearai/ironclaw**

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**低位**。过去 24 小时内 Issues 板块无任何新开、活跃或关闭的工单；Pull Requests 板块仅 1 条更新记录且仍处于待合并状态；Release 板块无新版本发布。整体来看，项目处于相对平静的维护期，但仍有 1 项来自新贡献者的 XL 规模功能 PR 正在等待评审，表明社区贡献管道并未完全停滞。**健康度评估：需关注**——主要表现为新贡献者 PR 长期处于开放状态（创建于 2026-08-11，已过去约 40 天），缺乏维护者响应信号。

---

## 2. 版本发布

**本节今日无内容。**

过去 24 小时未发布任何新版本（无 Release / Tag 更新）。如需了解历史版本，请参考 [Releases 页面](https://github.com/nearai/ironclaw/releases)。

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

过去 24 小时内唯一更新的 PR [#7499](https://github.com/nearai/ironclaw/pull/7499) 仍为 **OPEN** 状态，未推进至合并阶段。项目今日在代码合并层面无实质进展。

| 指标 | 数值 |
|------|------|
| 合并 PR | 0 |
| 关闭 PR | 0 |
| 新合并提交 | 0 |

---

## 4. 社区热点

今日无 Issues 更新，PR 板块仅 1 条活跃讨论。由于缺乏多日数据交叉参照，"热点"维度仅能基于更新时间和互动度推断：

### 🔥 当前唯一活跃 PR

**[#7499 feat(identyclaw): host-mediated Passport for practitioners](https://github.com/nearai/ironclaw/pull/7499)**
- **作者**：discernible-io（新贡献者）
- **创建时间**：2026-08-11（约 40 天前）
- **最近更新**：2026-09-19（昨日）
- **规模 / 风险**：XL / 低风险
- **范围**：docs、dependencies
- **👍 反应数**：0
- **评论数**：undefined（数据缺失）

**分析**：尽管 PR 反应数为 0，但作者在昨日仍主动更新了内容，说明提交者仍在积极完善该 PR。诉求核心是**为 IronClaw 实践者降低接入 IdentyClaw Passport 的门槛**——通过引入 `builtin.idcp` 主机接缝和策略授权机制，让无 shell 环境的进程级 IronClaw agent 无需安装扩展即可调用 Passport 能力，并配套提供 `deploy/identyclaw/` 目录下的 Node CLI 工具包与可选的本地回环助手（监听 `:3921`）。这是一个面向**开发者体验（DX）**的赋能型贡献，方向契合当前 agent 框架"轻量化、可托管"的演进趋势。

---

## 5. Bug 与稳定性

**今日无相关报告。**

- 过去 24 小时无新 Bug 报告
- 无崩溃、回归或稳定性相关工单
- 无关联 fix PR

**结论**：从可观察数据看，项目当前无已知活跃的稳定性问题。建议结合历史 Issues 检索以排除已有但未在采样窗口内更新的工单。

---

## 6. 功能请求与路线图信号

唯一可观察的功能信号来自 PR [#7499](https://github.com/nearai/ironclaw/pull/7499)，其方向性意义如下：

### 信号 1：Host-mediated 集成范式
- **内容**：通过 `builtin.idcp` 与策略层 `AskAlways` 例外机制，让 processless agent 直接调用 IdentyClaw Passport
- **路线图可能纳入度**：⭐⭐⭐（中高）
  - 优势：低风险（docs + deps scope）、符合 agent 沙箱化趋势、提供完整 deploy 套件
  - 障碍：作者为新贡献者，缺乏维护者背书；XL 规模需要充分评审

### 信号 2：Practitioner Tooling 套件
- **内容**：`deploy/identyclaw/` 下的 Node CLI + loopback helper（`:3921`）
- **路线图可能纳入度**：⭐⭐
  - 需要观察是否有核心维护者表态支持

**建议**：维护者应在 1-2 周内对 [#7499](https://github.com/nearai/ironclaw/pull/7499) 给出明确评审反馈，避免新贡献者流失。

---

## 7. 用户反馈摘要

**今日无新用户反馈数据。**

Issues 板块无新增评论；PR [#7499](https://github.com/nearai/ironclaw/pull/7499) 的评论数为 undefined，无法提取社区声音。**数据缺口提示**：建议日报系统补充 PR 评论数与最近评论摘要字段，以提升反馈维度可观察性。

---

## 8. 待处理积压

### ⚠️ 重点关注项

**[#7499 feat(identyclaw): host-mediated Passport for practitioners](https://github.com/nearai/ironclaw/pull/7499)**
- **状态**：OPEN 已 40 天
- **风险**：新贡献者首次贡献，若长期无响应可能影响社区参与积极性
- **建议**：维护者尽快分配 reviewer，输出首轮评审意见

### 其他积压
- 由于今日 Issues 与 PR 总活跃数为 1，无法可靠统计历史积压。
- 建议建立**长期未响应（>30 天）Issue/PR 自动提醒机制**，避免类似 PR 长期挂起。

---

##  关键指标看板

| 维度 | 数值 | 趋势 |
|------|------|------|
| Issues 新增（24h） | 0 | — |
| Issues 关闭（24h） | 0 | — |
| PR 新增（24h） | 0 | — |
| PR 合并（24h） | 0 | ↓ |
| PR 关闭（24h） | 0 | — |
| Release 发布（24h） | 0 | — |
| 社区反应（👍）总数 | 0 | — |
| 待评审 PR | ≥ 1 | ↑ |

---

##  维护者建议

1. **优先响应 [#7499](https://github.com/nearai/ironclaw/pull/7499)**：超过 40 天的开放期对新贡献者体验极为不利，建议 48 小时内给出评审反馈。
2. **激活社区信号**：当前 0 个 👍、评论数据缺失，需通过 issue 模板或 PR 模板引导贡献者补充说明。
3. **节奏复盘**：连续低活跃可能反映项目进入平台期，建议主动发布 roadmap 公开 issue 引导社区讨论方向。

---

*数据来源：GitHub REST API（nearai/ironclaw）*
*报告生成时间：2026-09-20*
*数据采样窗口：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期：2026-09-20**
**项目仓库：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现典型的 **"批量清理日"** 特征：在 24 小时内关闭了 **6 个长期陈旧的 PR** 与 **1 个陈旧 Issue**，但 **0 个新 PR 待合并、0 个新版本发布**，整体处于**维护/清理阶段而非功能开发高峰**。从合并内容看，本次关闭涉及 3 个重要 Bug 修复（SQLite 数据完整性、Windows 构建失败、定时任务数据丢失）、1 个性能重构（CoworkSessionDetail 拆分）与 1 个体验优化（删除 agent 后自动刷新），实质性推进了项目稳定性。社区层面互动较弱（无新开 Issue、新 PR 均为昨日状态化关闭），整体项目健康度评估为 **中等偏上**——历史债务被批量处理，但缺少新一轮开发动能。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 无新 Release tag 创建。建议关注下一次发版时是否将今日合并的关键修复（特别是 #1072 SQLite 修复、#1075 Windows 构建修复、#1076 定时任务迁移修复）打包为补丁版本（patch release），因为这三处问题均涉及 **数据丢失或构建阻断**，对生产环境影响较大。

---

## 3. 项目进展

今日共 **6 个 PR 全部进入"已关闭"状态**（无待合并 PR），具体进展如下：

| PR | 标题 | 类别 | 价值评估 |
|---|---|---|---|
| [#1072](https://github.com/netease-youdao/LobsterAI/pull/1072) | SQLite 存储层三处数据完整性修复 | 🐛 Bug 修复 | ⭐⭐⭐⭐⭐ 关键修复，关 [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) |
| [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) | Windows 构建在安装 WSL 时失败 | 🐛 Bug 修复 | ⭐⭐⭐⭐ 关键构建修复 |
| [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) | 定时任务 Run History 迁移失败导致数据丢失 | 🐛 Bug 修复 | ⭐⭐⭐⭐ 数据丢失修复 |
| [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) | 删除当前 agent 后自动刷新任务列表 | 🐛 UX Bug 修复 | ⭐⭐⭐ 体验优化 |
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 重构 CoworkSessionDetail 单文件（2100+ 行拆分） | ♻️ 重构 | ⭐⭐⭐⭐ 性能与可维护性 |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | 支持 per-session MCP 开关控制 | ✨ 新功能 | ⭐⭐⭐⭐ 重要功能 |

**推进评估：** 项目今日在 **数据可靠性、跨平台构建、UI 一致性** 三个维度均取得实质进展，特别是 SQLite 层修复（开启 `PRAGMA foreign_keys`、原子写入、`storeInitPromise` 超时恢复）属于底层基础设施级改进。但 **所有 PR 均带 [stale] 标签且无 reviewer 互动**，合并质量把控存疑，建议维护者复查这批 PR 的实际合并内容与测试覆盖。

---

## 4. 社区热点

今日 **评论活跃度极低**：
- 唯一仍有评论交互的 Issue 是已关闭的 [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071)（2 条评论）
- 唯一仍为 OPEN 状态的 [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014)（1 条评论）来自第三方工具 [Dispatch](https://dispatch.visionairy.biz) 自动探测，**实质为机器人消息，非真实社区诉求**

**诉求分析：**
- **#1014** 的核心诉求是 **改善项目的可发现性（Discoverability）**——通过 Claude Code skill 描述让 AI 代理运行时能在任务切换时主动推荐 LobsterAI 的 `technology-search` 技能。该 Issue 自 2026-03-29 创建至今未被任何 maintainer 响应，属长期忽略。
- **#1071**（已关闭）反映用户对 **生产环境数据可靠性** 的高度关注，与 [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076)（定时任务迁移数据丢失）形成呼应，**揭示 SQLite + 文件迁移路径是当前可靠性薄弱环节**。

---

## 5. Bug 与稳定性

按严重程度排列今日涉及的稳定性问题：

| 严重级别 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 **极高** | SQLite `ON DELETE CASCADE` 失效 → 孤儿消息无限累积；`save()` 非原子写 → 崩溃损坏；`storeInitPromise` 超时后永久故障 | ✅ 已合并修复（#1072） | [#1071](https://github.com/netease-youdao/LobsterAI/issues/1071) |
| 🔴 **高** | 定时任务 Run History 迁移写入失败仍标记完成 → **历史数据永久丢失** | ✅ 已合并修复（#1076） | [#1076](https://github.com/netease-youdao/LobsterAI/pull/1076) |
| 🟠 **中** | Windows 安装 WSL 后编译脚本路径错误 → **完全阻断 Windows 构建** | ✅ 已合并修复（#1075） | [#1075](https://github.com/netease-youdao/LobsterAI/pull/1075) |
| 🟡 **低** | 删除当前使用 agent 后，左侧任务列表不刷新（显示陈旧数据） | ✅ 已合并修复（#1077） | [#1077](https://github.com/netease-youdao/LobsterAI/pull/1077) |

**关键风险点：**
- 修复 #1072 中"防御性显式删除子行"应作为短期方案，长期需确保 `PRAGMA foreign_keys = ON` 在每个连接打开时均被重新设置（部分驱动默认 per-connection 状态）。
- 修复 #1076 提示存在 **无错误计数的批量迁移逻辑** 模板，建议全面审计 `src/` 下其他 `migrate*` 函数是否有类似缺陷。
- 三项极高/高严重度问题均有对应 fix PR 落地，**当前稳定性债已得到集中清偿**，但建议在下次 Release notes 中显式标注以便用户感知。

---

## 6. 功能请求与路线图信号

**今日唯一未关闭的功能性议题：** [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) — Add a description to improve Dispatch discoverability
- 诉求：为 `technology-search` Claude Code skill 增加可被 AI 代理运行时（如 Dispatch）发现的元数据
- **优先级评估：低**（属于生态可发现性，非核心功能）

**从已合并 PR 推测下一版本路线图：**

| 信号来源 | 方向 | 可能进入下一版本的概率 |
|---|---|---|
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) per-session MCP 控制 | MCP 细粒度权限管理 | 🟢 高（已合并即落地） |
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) CoworkSessionDetail 拆分 | 前端代码治理、渲染性能 | 🟢 高（已合并即落地） |
| 三项稳定性 fix（#1072 / #1075 / #1076） | 数据可靠性与跨平台兼容 | 🟢 高（强烈建议进 patch release） |
| #1014 技能可发现性描述 | AI Agent 生态接入 | 🟡 中（需 maintainer 主动跟进） |

---

## 7. 用户反馈摘要

由于今日所有交互都集中在陈旧状态化关闭，**真实新增用户反馈极为有限**。可提炼的关键反馈要点：

- **数据完整性焦虑（来自 #1071）：** 用户在审计代码层面主动发现 SQLite 层三处可靠性缺陷，反映**核心用户对底层数据安全的担忧**，并主动撰写 PR（#1072）参与修复，体现高质量社区贡献。
- **跨平台构建痛点（来自 #1075）：** Windows + WSL 环境下的构建脚本路径冲突，说明 **Windows 开发者群体的环境多样性**未被充分测试。
- **定时任务数据丢失（来自 #1076）：** 揭示**从 SQLite 向 OpenClaw JSONL 的迁移路径**缺少错误兜底，是数据丢失高发区。
- **UI 状态一致性（来自 #1077）：** 删除操作后的多组件状态同步问题，提示前端 store-reducer 设计需要更严格的"级联失效"约定。

⚠️ 注意：以上反馈主要来自 **PR 描述与 Issue 摘要**，未见公开评论区的真实用户体验评价，**情绪指标缺失**。

---

## 8. 待处理积压

以下 Issue/PR 需要维护者重点关注：

| 状态 | 编号 | 标题 | 滞留时长 | 优先级建议 |
|---|---|---|---|---|
| 🟢 OPEN / [stale] | [#1014](https://github.com/netease-youdao/LobsterAI/issues/1014) | Add a description to improve Dispatch discoverability | ≈6 个月（2026-03-29 至今） | 低，但建议回复避免再被 stale 化 |

**维护者建议事项：

- 当前 **待合并 PR 队列为空**（0 open），仓库处于"无 PR 待审"状态，**维护者应主动发起或寻找下一批功能 PR** 以维持开发节奏，避免社区贡献者流失。
- 所有今日关闭的 PR 均带 [stale] 标签且评论数为 `undefined`（即 0 条 reviewer 评论），**建议维护者复盘：这些是经严格 Code Review 后合并，还是 GitHub Stale Bot 自动批量关闭？** 若属后者，存在未经评审代码进入主干的风险。
- 推荐建立 **GitHub Actions / Stale Bot 配置审查流程**，避免正常 PR 因 6 个月无活动被误关（虽然本次关闭的 PR 内容均与主干合并，但流程合规性需审计）。

---

**报告生成时间：** 2026-09-20  
**数据来源：** GitHub REST API（Issues / Pull Requests / Releases）  
**说明：** 本报告所有日期与时间均基于仓库元数据，分析结论仅基于公开数据，无法覆盖未在 GitHub 体现的私有协作或线下沟通。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-09-20
**数据范围**：过去 24 小时
**项目仓库**：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 今日整体活跃度处于**低位**水平：4 个 Issue 更新、1 个 PR 更新、0 个版本发布，**未合并任何 PR**。今日议题明显集中在两个主题——**Heartbeat 模块的代码缺陷审计**（由同一贡献者 jbutler1980 主导，发现了 active_hours 未生效、tool_controls 硬编码两个独立问题）以及**agent 工具调度逻辑的边界 bug**（spawn_agent 对空数组的反直觉处理）。值得关注的是编号靠前的老 Issue #1205（8 月 16 日提出）与今日关闭的 #1278 在同一问题上形成"用户报告 → 根因定位 → 文档闭环"的完整链条，说明项目维护机制运行正常，但功能性问题本身仍未解决。

---

## 2. 版本发布

**无新版本发布**。

---

## 3. 项目进展

### 今日已关闭 / 合并的重要 PR

**无 PR 合并**。

今日唯一在飞的 PR [#1276](https://github.com/moltis-org/moltis/pull/1276)（Kaboka22 提交）仍处于 OPEN 状态，但提交内容具有较高价值：

- **Groq 提升为一等公民提供商**：此前 Groq 会回退到 genai 兜底实现（仅一个模型、不支持工具、`openai/...` 路由到 OpenAI），现已支持完整模型注册、工具调用和模型发现。
- **零参数工具 schema 严格化**：Groq Compound 被标记为"不支持工具"，避免无效调用。
- **mutation 结果解析修复**：补齐 Groq 响应解析路径上的解析失败问题。

> ⚠️ 该 PR 自 9 月 19 日创建后无任何评论或审查反馈，**等待维护者 review**。

### 文档与 Bug 闭环

Issue [#1278](https://github.com/moltis-org/moltis/issues/1278)（jbutler1980）于今日关闭。该 Issue 指出 `docs/src/configuration-reference.md` 中 `heartbeat.active_hours` 被描述为强制生效但实际从未被求值（`is_within_active_hours` 函数除自测模块外无任何调用方），与 #1205 构成同一根因的两个视角。该 Issue 已 CLOSED，但具体关闭方式（文档修正 vs. 代码修复 vs. 误关闭）未在数据中说明，需关注。

---

## 4. 社区热点

### 评论最活跃

| 排名 | Issue / PR | 评论数 | 👍 |
|------|-----------|--------|-----|
| 1 | [#1278](https://github.com/moltis-org/moltis/issues/1278) heartbeat.active_hours 未生效（已关闭） | 1 | 0 |
| 1 | [#1205](https://github.com/moltis-org/moltis/issues/1205) Heartbeat 忽略 active_hours 持续运行 | 1 | 0 |

### 热点诉求分析

今日热度主要集中在 **heartbeat 模块的可靠性**上。两个核心问题：

- **#1278**（已关）：从代码与文档不一致角度切入——配置项被承诺但未被执行，是典型的"接口契约漂移"问题。
- **#1205**（仍开放）：用户实测 bug——heartbeat 应在非活跃时段停止但实际持续运行，直接影响**资源占用与运行成本**。

两个 Issue 形成了"用户面观察 + 工程师根因定位"的协同模式，社区贡献者 jbutler1980 通过代码审计补充了实现层面的证据链，提升了该 bug 的可修复性。

---

## 5. Bug 与稳定性

### 🔴 严重 — 仍在持续运行 / 资源浪费

**[#1205](https://github.com/moltis-org/moltis/issues/1205) Heartbeat 忽略 active_hours 持续运行**
- **严重程度**：高
- **影响**：heartbeat 进程本应在配置的非活跃时段停止，实测持续运行；可能引发 API 调用计费异常、电量与资源消耗不可控
- **状态**：OPEN（自 2026-08-16 起已开放 **35 天**，仅 1 条评论）
- **修复 PR**：❌ 无
- **关联**：今日关闭的 #1278 已提供根因证据

### 🟠 中等 — 静默失败 / 功能失效

**[#1277](https://github.com/moltis-org/moltis/issues/1277) spawn_agent 将 `active_tools: []` 视为空白名单**
- **严重程度**：中
- **影响**：用户期望"传空数组意味着不限制工具"，代码却将其解读为"禁止所有工具"，导致子 agent 获得零工具而无法完成任务
- **状态**：OPEN（创建于 2026-09-19，0 评论）
- **修复 PR**：❌ 无
- **建议修复方向**：明确区分 `None`（不限）与 `Some(vec![])`（白名单为空），或在配置层加入显式语义

**[#1279](https://github.com/moltis-org/moltis/issues/1279) heartbeat 注册时硬编码 `Default::default()`，无法设置 tool_controls**
- **严重程度**：中
- **影响**：`CronPayload::AgentTurn` 已支持 `tool_controls` 字段并被正确传递，但心跳调度路径上注册时硬编码默认值，导致心跳任务的工具控制配置**全局失效**
- **状态**：OPEN（创建于 2026-09-19，0 评论）
- **修复 PR**：❌ 无
- **建议**：将 heartbeat 的注册路径对齐 cron，让 `tool_controls` 一致传递

### 严重程度总览

| 严重度 | 数量 | 是否有修复 PR |
|--------|------|---------------|
| 🔴 高 | 1 | ❌ |
| 🟠 中 | 2 | ❌ |
| 总计   | 3 | ❌ |

**稳定性信号**：今日所有报告的 Bug 均无对应修复 PR 进入 review，bug 修复响应链尚未启动。

---

## 6. 功能请求与路线图信号

### PR #1276：Groq 一等公民化（实质性功能推进）

[PR #1276](https://github.com/moltis-org/moltis/pull/1276) 提出三项互相关联的改进：

1. **Groq 全模型支持**：模型发现、工具调用、动态路由
2. **工具能力标注**：Groq Compound 标记为不支持工具，避免无效调用
3. **mutation 结果解析回归修复**：补齐响应解析路径

**纳入下一版本可能性**：⭐⭐⭐⭐（高）。该 PR 是单提交、聚焦功能补全，无 API 破坏性变更迹象，适合在近期小版本中合并。但需维护者确认：
- 是否引入新的 provider 配置项（向后兼容性）
- Groq 模型列表是否需要白名单/黑名单机制
- mutation 解析修复是否覆盖其他 OpenAI-兼容提供商

### 隐含的功能需求

从 Bug 报告中可识别出以下未被显式提出的功能需求：

- **Heartbeat 全配置项应被强制生效**（#1205 + #1278）：用户期望配置即承诺
- **子 agent 工具策略的明确语义**（#1277）：需要文档化 `active_tools` 各取值含义
- **Heartbeat 与 Cron 的工具控制一致性**（#1279）：两个调度器应共享同一执行语义

---

## 7. 用户反馈摘要

由于今日多数 Issue 评论数 ≤1，深度用户反馈样本有限，可提取信号如下：

### 痛点

- **配置项"看似生效"实则失效**（#1205, #1278）：用户在文档中看到 `active_hours` 后会自然假设其工作，发现失效时体验落差大且难排查——配置层缺乏"未生效告警"
- **空数组语义歧义**（#1277）：用户传 `active_tools: []` 的意图与系统理解相反，子 agent 静默失败而非报错——错误处理可观测性不足
- **Heartbeat 与 Cron 行为不一致**（#1279）：同样是 AgentTurn 调度，两个入口行为不同——内部抽象层 API 不统一

### 场景

- 用户希望 Heartbeat 仅在工作时间触发以节省成本（#1205）
- 用户希望对子 agent 实施工具白名单/黑名单控制（#1277, #1279）
- 用户希望 Groq 作为低成本 OpenAI 替代品能获得完整工具支持（PR #1276）

### 满意度

数据样本中暂未出现明确表达满意或推荐的用户声音。

---

## 8. 待处理积压提醒

### ⏰ 长期未响应（≥30 天）

| Issue | 标题 | 开放天数 | 评论 | 严重度 |
|-------|------|----------|------|--------|
| [#1205](https://github.com/moltis-org/moltis/issues/1205) | Heartbeat ignores configured active hours and runs continuously | ~35 天 | 1 | 🔴 高 |

**提醒维护者**：#1205 已有 35 天历史且属高严重度 Bug，今日 #1278 虽已关闭但根因（`is_within_active_hours` 无调用方）实质上印证了 #1205 的报告——建议尽快合并或拆分修复 PR。

### 📋 待审查 PR

| PR | 标题 | 待审查天数 | 评论 | 👍 |
|----|------|-----------|------|-----|
| [#1276](https://github.com/moltis-org/moltis/pull/1276) | Groq as a first-class provider, strict zero-parameter tool schemas, and mutation results that parse | 1 天 | 0 | 0 |

**提醒维护者**：PR #1276 提交仅 1 天，可视为正常 review 窗口；但内容涉及多个 provider 与 schema 变更，建议优先安排 maintainer review 以避免贡献者流失。

---

## 附录：项目健康度速览

| 维度 | 状态 | 备注 |
|------|------|------|
| Issue 流转 | ✅ | 用户报告 → 代码根因定位 → 文档闭环路径完整 |
| PR 审查 | ⚠️ | 唯一 PR 等待 review，0 评论 |
| Bug 修复响应 | 🔴 | 3 个 Bug 均无对应修复 PR |
| 版本发布 | ⚪ | 今日无发布 |
| 社区参与度 | 🟡 | 活跃贡献者少（核心 jbutler1980、Kaboka22），单人多次提交集中度高 |
| 文档一致性 | 🔴 | 配置项文档与实现存在 drift（#1278 关闭但 #1205 仍开放） |

**整体评价**：项目保持运转且有真实用户反馈，但**Bug 修复响应链滞后**，长期开放的高严重度 Issue 需优先处理。Heartbeat 模块建议作为下一个迭代的稳定性重点。

---

*本报告由 AI 自动生成，数据来源 GitHub Issues / PRs 公开 API。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-20

> 数据来源：agentscope-ai/QwenPaw 仓库 GitHub 活动（注意：仓库实际名为 QwenPaw，文档对外品牌为 CoPaw）

---

## 一、今日速览

过去 24 小时项目活跃度处于**中高水平**：新增/活跃 Issues 共 11 条（全部 OPEN）、PR 共 13 条（12 开放、1 关闭），无新版本发布。维护者端聚焦在 **Console 前端稳定性**（chunk 加载错误恢复、聊天流中断恢复、依赖懒加载）与 **Agent/Provider 容错**（音频/文件回退、OpenCode 协议头）两条主线上；社区端则暴露出**聊天历史太短、模型供应商体验问题、MCP 配置灵活性**等真实使用痛点。整体看，项目处于"密集修复 + 局部架构升级（pawapp 控制面）"并行推进的状态，健康度良好，但**用户报告的多个 Bug 仍无对应修复 PR**，存在积压风险。

---

## 二、版本发布

🚫 **无新版本发布**。当前最新稳定版本为 **v2.2.1**（社区 Issues 多以此版本为基准复现），部分 Issue（如 #7883）明确指出 2.2.1 上问题仍可复现。

---

## 三、项目进展

### 已关闭
- **#7863** [fix(ci): stabilize Windows reload and snapshot tests](https://github.com/agentscope-ai/QwenPaw/pull/7863) — 唯一当日关闭的 PR。修复 Windows 上 Uvicorn reload 子进程无法导入 `reload_app` 的问题，并锁定 LF 检出以保障快照 SHA-256 校验稳定。该项合并提升了 CI 在跨平台下的可信度。

### 待合并但具有结构性意义的 PR
- **#7874** [feat(pawapp): redesign the SDK and app control plane](https://github.com/agentscope-ai/QwenPaw/pull/7874) — 重构 PawApps 的 Host 控制面，补齐公私权限边界、任务所有权、幂等派发与恢复、配置读取等关键缺口。属于**架构级演进**，若合入将显著提升 Agent ↔ App 协作的安全性与可恢复性。
- **#7861** [feat(console): add authenticated multi-tab chat terminal](https://github.com/agentscope-ai/QwenPaw/pull/7861) — 在聊天/文件工作区下方挂载懒加载 xterm 多标签终端，支持会话级工作目录、自动建终端、菜单关闭、resize、折叠与受控回放。补齐了"会话内可操作终端"的空白。
- **#7880** [feat(plugins): add escalation-only tool policy hooks](https://github.com/agentscope-ai/QwenPaw/pull/7880) — 暴露"仅升级（escalation-only）"的预工具调用策略钩子，与 #7878 诉求强呼应，为外部分类器/组织策略接入提供官方扩展点。
- **#7829** [perf(console): split chat dependencies and lazy-load locales](https://github.com/agentscope-ai/QwenPaw/pull/7829) — 将 `@agentscope-ai/chat` 拆出独立 chunk，并把非英文 locale 改为按需加载；Markdown 资源亦保持懒加载。直接优化首屏体积与 TTI。
- **#7868** [perf(runtime): cache immutable artifacts on the per-request build hot path](https://github.com/agentscope-ai/QwenPaw/pull/7868) — 每个请求的 `AgentBuilder.build` 重复解析 `policy.yaml`、扫描文件系统；该 PR 将不可变产物缓存化。**首次贡献者**提交的"小但有杠杆"的性能补丁。

**项目整体向前迈进的判断**：架构侧（#7874）与扩展点侧（#7880）各前进一步，前端性能（#7829、#7868）有实质优化，但**当前无任何 PR 进入已合并状态**（除 CI 修复 #7863），意味着这些改进还停留在"代码已写、合入待审"阶段，距用户可感知的版本发布仍有距离。

---

## 四、社区热点

| 排名 | Issue/PR | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [Issue #7815 Console 无法从 lazy chunk 加载失败中恢复](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 5 | 前端稳健性 |
| 2 | [Issue #7878 暴露插件可见的 pre-tool-call policy hook](https://github.com/agentscope-ai/QwenPaw/issues/7878) | 3 | 扩展性诉求 |
| 3 | [Issue #7888 Chat 页卡死 "Something went wrong"](https://github.com/agentscope-ai/QwenPaw/issues/7888) | 2 | 前端崩溃 |
| 4 | [Issue #7884 聊天记录历史太短](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 2 | 用户体验 |
| 5 | [Issue #7599 OpenCode Go 套餐 MissingSessionID](https://github.com/agentscope-ai/QwenPaw/issues/7599) | 2 | 模型供应商 |

**背后诉求分析**：
- **#7815 / #7888** 共同指向 Console 的**错误边界不可恢复**：用户一旦碰到 chunk/渲染异常，没有自我修复路径只能硬刷新，是典型的"前端可靠性感知的负面事件"。
- **#7878 + PR #7880** 形成强需求—响应闭环，说明社区已有第三方分类器/合规组织希望在不 fork 的前提下接入治理流水线。
- **#7884** 是一份情绪强烈的"体验吐槽"，反映出长会话场景下的上下文回溯需求与现状存在显著落差。

---

## 五、Bug 与稳定性

按严重程度排列（🔴 高 / 🟠 中 / 🟡 低），并标注是否有对应 fix PR：

| 等级 | Issue | 现象 | 是否有 fix PR |
|---|---|---|---|
| 🔴 | [#7888 Chat 页 React commitPlacement 报 NotFoundError](https://github.com/agentscope-ai/QwenPaw/issues/7888) | 浏览器扩展在 React 托管文本节点外注入 `<font>`，导致 `insertBefore` 失败，整个 Chat 页卡在 "Something went wrong"，但 Settings/Files/Models 路由不受影响 | ✅ [PR #7889](https://github.com/agentscope-ai/QwenPaw/pull/7889)（同一作者提交，已对应） |
| 🔴 | [#7815 Console lazy chunk 加载失败无法恢复](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 错误边界 retry 机制无效，所有页面切换都停留在错误屏，必须硬刷新 | ❌ 无对应 PR |
| 🟠 | [#7883 tool 返回 PDF 被序列化为 OpenAI 嵌套 file part](https://github.com/agentscope-ai/QwenPaw/issues/7883) | DeepSeek 拒绝并报 `file must have a file_id or file_data`；声称 #7597 修复在 #7621 后仍未根治，2.2.1 可复现 | ✅ [PR #7885](https://github.com/agentscope-ai/QwenPaw/pull/7885)（针对同类媒体拒绝信号做回退） |
|  | [#7890 零停机 reload 丢失插件 runtime hook](https://github.com/agentscope-ai/QwenPaw/issues/7890) | `register_runtime_hook` 在 reload 后静默丢失，但 middleware 正常；reload 语义应与重启等价 | ❌ 无对应 PR |
|  | [#7879 MCP 授权流程对静态 Bearer Key 类型 server 不友好](https://github.com/agentscope-ai/QwenPaw/issues/7879) | 企查查 QCC 等 11 项服务在 OAuth 握手阶段因缺 `client_id/resource` 无法接入 | ❌ 无对应 PR |
|  | [#7881 kimi-code ACP runner 绕过边界与破坏性命令检查](https://github.com/agentscope-ai/QwenPaw/issues/7881) | Edit 被拦截，但 Write(new file) 与 Bash 完全盲区 | ❌ 无对应 PR |
| 🟡 | [#7882 OpenCode 免费模型 API 调用 403](https://github.com/agentscope-ai/QwenPaw/issues/7882) | `omen-alpha` 等模型被 UI 标为"免费"，但 API 报 FreeTierError；属客户端限定行为 | ✅ [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（发送 OpenCode session 头，部分缓解） |
|  | [#7599 OpenCode Go MissingSessionID](https://github.com/agentscope-ai/QwenPaw/issues/7599) | v2.2.0，OpenCode Go 套餐模型连接测试 400 | ✅ [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（同上方向） |
|  | [#7877 会话级工作目录面板 UI 问题](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 浏览可视区仅 ~3 行、"最近项目"恒为空且无写入入口、选目录后"应用"仍禁用 | ❌ 无对应 PR |

**整体评估**：🔴/🟠 高严重度 6 项，其中仅 2 项有 fix PR；维护者对 Console 错误边界类问题响应迅速（#7888 → #7889 当日同源 fix），但**#7815（5 评论、关注度高）**至今无修复，存在舆论扩散风险。

---

## 六、功能请求与路线图信号

| 需求 | 关联 Issue | 关联 PR | 落入下版本的概率 |
|---|---|---|---|
| 插件可见的 pre-tool-call policy hook（governance 决策预言机） | [#7878](https://github.com/agentscope-ai/QwenPaw/issues/7878) | [#7880](https://github.com/agentscope-ai/QwenPaw/pull/7880) | 🟢 高（PR 已就绪，且被标记 "ready for maintainer review"） |
| PawApps 控制面重构 | — | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) |  中（架构变更较大，需 RFC/讨论） |
| 多标签鉴权终端 | — | [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) |  中高（功能完整度高） |
| 聊天历史记录延长 | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | ❌ | 🟡 中（用户诉求强烈，但需权衡存储/性能） |
| MCP 支持非 OAuth 鉴权（静态 Bearer Key） | [#7879](https://github.com/agentscope-ai/QwenPaw/issues/7879) | ❌ | 🟡 中（影响企业 MCP 接入面） |

---

## 七、用户反馈摘要

- **长会话上下文保留不足（#7884）**：用户原话"讨论过的问题，回头往上翻，看不到了……咱聊天记录多存点，做不到么？知道这个体验多差么"。反映出 CoPaw 在"作为长期助手"的核心场景中体验未达预期，是粘性层面的关键短板。
- **MCP 接入门槛偏高（#7879）**：企查查 QCC 等主流企业 MCP 仍为静态 Bearer Key 鉴权，但 CoPaw 的 MCP 配置面板只能走 OAuth 路径，企业用户**配不通**。
- **OpenCode 套餐使用受阻（#7599 / #7882）**：同一供应商出现两个不同错误（MissingSessionID、FreeTierError），且 UI 标签与实际行为不一致，用户难以判断能否使用。
- **"免费模型"语义失真（#7882）**：列表显示免费但 API 拒绝请求，会损害新用户对系统可信度的判断。
- **Console 健壮性吐槽（#7815 / #7888）**：用户被迫硬刷新 = 上下文丢失，与"长会话体验差"的痛点叠加放大。
- **正面信号**：#7861 的"会话内多标签终端"、#7880 的"治理扩展点"等设计被外部需求强烈佐证，说明**架构方向契合社区预期**。

---

## 八、待处理积压

维护者建议优先关注以下仍处 OPEN 状态、且尚无修复 PR 的条目：

| Issue | 创建日期 | 滞留天数 | 关键原因 |
|---|---|---|---|
| [#7599 OpenCode Go MissingSessionID](https://github.com/agentscope-ai/QwenPaw/issues/7599) | 2026-09-07 | 13 天 | 用户已确认 v2.2.0 复现；#7869 仅补 session 头，能否彻底解决待确认 |
| [#7815 Console lazy chunk 不可恢复](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 2026-09-16 | 4 天 | 5 条评论、用户感知强烈的可靠性问题，无对应 PR |
| [#7877 工作目录面板 UI 三连问题](https://github.com/agentscope-ai/QwenPaw/issues/7877) | 2026-09-19 | 1 天 | 影响新版本会话工作流体感，纯前端修复成本可控 |
| [#7879 MCP OAuth 握手不支持 Bearer Key](https://github.com/agentscope-ai/QwenPaw/issues/7879) | 2026-09-19 | 1 天 | 阻断企业 MCP 生态接入 |
| [#7881 kimi-code ACP runner 边界检查不均](https://github.com/agentscope-ai/QwenPaw/issues/7881) | 2026-09-19 | 1 天 | 涉及权限/破坏性命令盲区，**安全相关**，建议提级处理 |
| [#7890 零停机 reload 丢 runtime hook](https://github.com/agentscope-ai/QwenPaw/issues/7890) | 2026-09-20 | 0 天 | 与"reload 语义应等价于重启"的预期冲突，影响插件生态一致性 |

---

### 📌 维护者一句话建议
当日代码侧推进力度强（性能、架构、扩展点多线并进），但**用户侧两个高严重度问题（#7815、#7599）已滞留超过一周且无 fix PR**；同时 **#7881 的安全边界盲区** 建议在下一个 patch 版本（v2.2.2 或 v2.3.0）中优先处置，避免与 #7884 的"体验吐槽"形成共振放大。

---

*报告基于公开 GitHub 活动生成；数据时间窗口为 2026-09-19 ~ 2026-09-20。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期**：2026-09-20
**数据周期**：过去 24 小时
**项目地址**：github.com/zeroclaw-labs/zeroclaw

---

## 一、今日速览

ZeroClaw 项目今日处于 **高活跃、低版本** 的开发节奏：过去 24 小时 Issues 更新 34 条（11 条关闭、23 条新开/活跃），PR 更新 50 条（仅 3 条已合并/关闭，47 条仍待合并），但 **无任何新版本发布**。讨论热点集中在四块：(1) 一批重大架构 RFC（会话、附件、WASM、事件历史）持续走流程；(2) WhatsApp Web 通道在 mentions、图像下载、缩略图、投票回传、群组创建等方面集中爆发缺陷；(3) S0 级安全 Bug 浮出水面（非交互回合无 ApprovalManager、Git `--attr-source` 逃逸审批）；(4) Anthropic 缓存 TTL、provider 传输层、代理子循环审批等关键技术债陆续进入 PR。整体而言项目 **架构演进密集、安全治理收紧、通道缺陷集中**，健康度评估为 **活跃但需关注积压**。

---

## 二、版本发布

⚠️ 过去 24 小时 **无新版本发布**。最新版本仍为既有发布序列，标签与变更说明未在本次数据中刷新。

---

## 三、项目进展

今日合并/关闭的关键 PR 共 3 条（其中 1 条为关闭 + 1 条合并入 master 等）。值得关注的推进：

- **PR #10809**（已关闭）：[fix(zerocode): restore macOS Control shortcut aliases](https://github.com/zeroclaw-labs/zeroclaw/pull/10809) — 修复 #10479 将 macOS 主键改为 Command 后，丢失的 Control 字面别名，使快捷键绑定表与帮助文本保持准确。
- **PR #10640**（已关闭）：[feat(channels): add passive Telegram group context](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) — 为 Telegram 群聊增加 opt-in 的 `passive_group_context`（默认关闭），使未点名但授权的群组文本可作为静默上下文，避免被 `mention_only` 闸门误丢弃。
- **关闭的 Issue #9487 / #9488 / #10076 / #10526**（4 条高强度 RFC 被接受/收敛），将"运行时持有的会话"、"统一文件/附件"、"WASM 插件运行时"、"追加式会话事件历史"等架构决策推进到接受阶段，构成下一阶段实现的基础。

> 📊 评估：今日的项目"前进"主要由 **架构 RFC 接受 + 小型修复** 组成，大型代码变更（XL 尺寸 PR 共 7 条）尚停留在待合并状态，**未形成可发布版本**。

---

## 四、社区热点

按评论数与讨论密度排序的焦点议题：

| 排名 | Issue | 评论数 | 主题 | 状态 |
|---|---|---|---|---|
| 🥇 | [#9487 Runtime-owned conversation sessions](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | 39 | 运行时持有的会话与传输面适配 RFC（Rev 5） | CLOSED |
| 🥈 | [#9488 Unified file/attachment architecture](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | 32 | 统一文件与附件架构 RFC（Rev 10） | CLOSED |
| 🥉 | [#8692 Maintainer decision queue](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 | RFC/设计议题的维护者决策队列 Tracker | OPEN |
| 4 | [#10076 Composable WASM plugin runtime](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 15 | 可组合 WASM 插件运行时 RFC | CLOSED |
| 5 | [#10526 Append-only session event history](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | 12 | 追加式会话事件历史、回放、衍生流 RFC | CLOSED |
| 6 | [#8046 Optional Telegram webhook mode](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | 5 | Telegram Webhook 备选模式 | OPEN |
| 7 | [#10531 Delegate sub-agent progress](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | 4 | 父代理可见委派子代理进度 | OPEN |

**诉求分析**：
- 前 5 名中 4 条为架构级 RFC，作者均为 **NiuBlibing**，说明项目正处于"架构奠基期"，社区关注点在长期形态而非短期修复。
- [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) 与 [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 都已迭代到 Rev 5/10，反映讨论极为密集且修订频繁。
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 是少有的 OPEN Tracker，表明 **维护者面对大量 RFC 已显决策压力**，需要专门的决策队列来收敛。

---

## 五、Bug 与稳定性

按严重程度从高到低排序今日浮现的 Bug：

### 🚨 S0（数据丢失 / 安全风险）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | cron/heartbeat/headless SOP/spawn_subagent 等 **无人值守回合未构建 ApprovalManager**，导致风险画像中的工具审批静默失效 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git `--attr-source` 选项可让一个被建模为"只读"的子命令词隐藏实际可变操作，绕过审批分类 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) |

### 🟧 S1（工作流阻塞）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| [#8627](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) | WhatsApp Web 的 `whatsapp-web` 设备关联被 WhatsApp 新增的 passkey/SHORTCAKE 链接闸门阻断，配对 QR 后无法完成关联 | 暂无（长期开放） | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8627) |

### 🟨 S2（功能降级）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| [#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) | 入站图像未下载，agent 收到字面 `[Image]` 文本，视觉能力失效 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10972) |
| [#10985](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) | Dashboard 发起的回合重建 channel 实例，绑定会话的通道工具无法触达 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10985) |
| [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) | 出站 WhatsApp 图像缺 `jpegThumbnail`/尺寸，手机端显示空卡片 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10981) |

### 🟩 S3（体验降级）

| Issue | 描述 | Fix PR | 链接 |
|---|---|---|---|
| [#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) | WhatsApp Web 双向 mentions 失效：入站是裸 JID 数字，出站无 `mentionedJid` | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10973) |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | seam sanitizer 重写带签名的推理内容，Anthropic 重放拒绝 | 暂无 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) |

> 📌 关键观察：**两条 S0 安全 Bug 均无对应 fix PR**，需维护者优先处置。WhatsApp Web 通道 6 个相关 Bug 集中爆发，反映该通道的维护压力。

---

## 六、功能请求与路线图信号

按实现就绪度（已有 PR 配套）排序：

### 🟢 高可能纳入下个版本（已有 PR 在跑）

| 功能 | Issue | 配套 PR | 评估 |
|---|---|---|---|
| WhatsApp 群组创建与邀请 | [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | 待开 | 与现有 `channel_room` 对齐，接口已就绪 |
| WhatsApp 群组问卷（polls） | [#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983) / [#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987) | [#10988 (Draft)](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) | 受限于 `whatsapp-rust` 0.7，标记为 Draft |
| WhatsApp PDF 首页预览 | [#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812) | [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) | opt-in `document_thumbnails`，低风险 |
| Anthropic 1 小时 prompt-cache TTL | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | [#10895（已修 rolling breakpoint）](https://github.com/zeroclaw-labs/zeroclaw/pull/10895) | 缓存策略升级方向明确 |
| Telegram voice peer 解析 | — | [#10942](https://github.com/zeroclaw-labs/zeroclaw/pull/10942) | 修复 sender identity 比对错误 |
| Cron/Heartbeat 抖动窗口 | [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) | 待开 | 防同时触发的常见模式 |
| 主机级并发限制 | [#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) | 待开 | 多 agent 部署刚需 |
| 子代理 session 身份传递 | [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | 待开 | 与 #10531 配对解决委派可见性 |

### 🟡 中期方向（已有 RFC 但实现工作量大）

- 委派子代理进度回报 ([#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)) — 需与 gateway /ws/chat 流改造协同
- 主动发送消息的送达回执 ([#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)) — 跨 channel 抽象
- 持久的人机提问原语 ([#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)) — 复用 SOP gate 模式

### 🔵 信号但尚无 PR

- Telegram Webhook 模式 ([#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046)，p3，icebox)
- WhatsApp Web 群组问卷投票回传 ([#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)) — 等待底层库升级

---

## 七、用户反馈摘要

从 Issues 评论与摘要中提炼的真实诉求：

- **架构焦虑**：社区对"会话/附件/WASM/事件流"四块基础架构反复修订（Rev 5、Rev 10），表明贡献者担心 **底层模型一旦定型难以回退**，期望充分讨论。([#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487), [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488))
- **WhatsApp Web 完整度**：今日单日 6 条相关问题（[#10972](https://github.com/zeroclaw-labs/zeroclaw/issues/10972)、[#10973](https://github.com/zeroclaw-labs/zeroclaw/issues/10973)、[#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977)、[#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981)、[#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983)、[#10812](https://github.com/zeroclaw-labs/zeroclaw/issues/10812)、[#10987](https://github.com/zeroclaw-labs/zeroclaw/issues/10987)）显示 **WhatsApp Web 用户群正在快速扩张但通道成熟度不足**，尤其图像预览、mentions、投票、群组四大场景均有断点。
- **可见性不足**：父代理对子代理"黑盒"的痛点反复被提（[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531)、[#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963)、[#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962)），社区希望 **流式而非结果式** 拿到工具/子代理产出。
- **送达不确定**：[#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) 暴露"消息是否真的送达"是空缺能力，对话场景下这是关键信任指标。
- **配置校验时机**：sleep/复用与持久化配置写入缺乏统一校验入口（[#10499](https://github.com/zeroclaw-labs/zeroclaw/pull/10499)）— 用户曾因之踩坑。
- **provider 传输层稳健性**：[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) 关于 Anthropic 默认 5 分钟 TTL 的不满、 [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) 关于 sanitizer 破坏 reasoning 的回归 — 表明 **provider 层细节影响模型调用成功率**，用户期待更稳定的语义保证。
- **多 agent 共部署**：[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970) 反映"一台机器跑很多 agent"的实际部署痛点。

---

## 八、待处理积压

提醒维护者关注长期未响应或积压条目

| Issue / PR | 标题 | 风险/规模 | 链接 |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs | 持续 3+ 月，影响 RFC 流转 |

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*