# OpenClaw 生态日报 2026-10-09

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-09 04:04 UTC

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

# OpenClaw 项目日报 · 2026-10-09

---

## 1. 今日速览

OpenClaw 仓库今日进入高频活跃期：过去 24 小时共有 500 条 Issue 与 500 条 PR 发生状态变化，新发布版本 **v2026.9.9**（185 commits / 112 PRs / 92 contributors）。从标签结构看，多个老牌 P0/P1 阻塞型 Issue 在今日集中关闭（#142585、#167376、#164074、#165686、#146887 等），说明 v2026.9.7 → v2026.9.8 → v2026.9.9 连续三个版本都在密集修复升级路径与 Gateway 事件循环相关问题。新报告的 P0 问题则集中在 Gateway 启动阻塞、plugin source-capture 资源放大、agent-DB 资源锁死等长期痛点。整体健康度：**中等偏紧** —— 维护团队在快速消化升级链路缺陷，但 Gateway 主线程阻塞、Doctor 迁移逻辑、Webhook/A2A 边缘路径仍有结构性待办。

---

## 2. 版本发布

### v2026.9.9

- 发布时间：2026-10-09
- 规模：185 commits · 112 PRs · 92 contributors
- 完整变更说明：[docs.openclaw.ai/releases/2026](https://docs.openclaw.ai/releases/2026)（数据中 release notes 文本被截断，下方分析基于相关 Issue/PR 推断）

**值得关注的修复方向**（基于被合并/关闭的关联 Issue 推断）：

| 主题 | 关联 Issue |
|---|---|
| Windows Gateway 高 CPU / 事件循环饿死（2026.9.8 回归） | [#165686](https://github.com/openclaw/openclaw/issues/165686) |
| LXC 容器内 `FICLONE` EPERM 导致 update 失败 | [#164113](https://github.com/openclaw/openclaw/issues/164113) |
| Update 2026.9.8→2026.9.9 在 package-swap 失败 / 恢复权限不安全 | [#167376](https://github.com/openclaw/openclaw/issues/167376) |
| Native update recovery 在 retained fingerprint 变化时卡住 | [#164074](https://github.com/openclaw/openclaw/issues/164074) |
| WebChat 会话 transcript 每轮被覆盖 | [#77012](https://github.com/openclaw/openclaw/issues/77012) |
| 并发 A→A turn 引发 session tree 分叉 + Anthropic 拒收 | [#98790](https://github.com/openclaw/openclaw/issues/98790) |
| Doctor 在合法 legacy workspace 缺 canonical rows 时拒绝升级 | [#142585](https://github.com/openclaw/openclaw/issues/142585) |

**升级注意事项**：
- 从 2026.9.8 升级到 2026.9.9 时如遇 `package-swap — Exit code: 1; Package publication recovery permissions are unsafe`，参见 [#167376](https://github.com/openclaw/openclaw/issues/167376) 的根因说明（已在新版本修复）。
- 部署在 Proxmox unprivileged LXC 的用户（seccomp 拦截 ioctl）此前完全无法升级，v2026.9.9 起应恢复正常升级通道。
- 仍在 2026.9.7/2026.9.8 且 Windows Gateway 长时间高 CPU 占用的用户应优先升级；[#165686](https://github.com/openclaw/openclaw/issues/165686) 是该回归的官方修复版本目标。

---

## 3. 项目进展

今日值得关注的已合并/关闭 PR（按影响力排序）：

| PR | 说明 |
|---|---|
| [#167577](https://github.com/openclaw/openclaw/pull/167577) **fix(agents): break prepared catalog worker fingerprint import cycle** | 解决了 madge 在 `check-guards-architecture` 上对多个无关 PR 引入的误报 import cycle，解除 #167234 等 PR 的合并阻塞。 |
| [#167234](https://github.com/openclaw/openclaw/pull/167234) **fix(line,tlon): redact credentials reflected in remote API error bodies** | 跟进 #141317 的诊断信息脱敏模式，修复 LINE / Tlon 在 API 错误回显时泄漏凭证的问题。 |
| [#167599](https://github.com/openclaw/openclaw/pull/167599) **docs(agents): let implementers own narrow verified exceptions** | 把"已经限定边界的常规修复决策"下放给实现 agent 处理，减少对维护者的审批阻塞。 |

合并方向结构性进展：

- **Gateway / Agent 工作线程边界重构持续推进**：[#167541](https://github.com/openclaw/openclaw/pull/167541)、[#167598](https://github.com/openclaw/openclaw/pull/167598)、[#167578](https://github.com/openclaw/openclaw/pull/167578)、[#167547](https://github.com/openclaw/openclaw/pull/167547)、[#166981](https://github.com/openclaw/openclaw/pull/166981) 这一系列 PR 都在把 SQLite 工作从 Gateway 主线程迁移到 worker，同时保留 authority / freshness / FIFO / settlement / durability 不变量。这是 [#160959](https://github.com/openclaw/openclaw/issues/160959)（plugin capture 分钟级阻塞事件循环）的系统性解决方案。
- **Provider fallback 错误归因修复**：[#156650](https://github.com/openclaw/openclaw/pull/156650)（关闭 [#155627](https://github.com/openclaw/openclaw/issues/155627)）把本地 worker 超时与 provider 模型超时区分开。
- **Rollover drain timeout 归因到阻塞 session owner**：[#167342](https://github.com/openclaw/openclaw/pull/167342) 修复了 [#167078](https://github.com/openclaw/openclaw/issues/167078)，让 15s 排干预算超时时操作员能定位责任会话。
- **CLI 边界加固**：[#145539](https://github.com/openclaw/openclaw/pull/145539)、[#145524](https://github.com/openclaw/openclaw/pull/145524)、[#145575](https://github.com/openclaw/openclaw/pull/145575)、[#167399](https://github.com/openclaw/openclaw/pull/167399) 一组小修，覆盖 `usage.cost` 空白日期、`tui --timeout-ms` 静默忽略、`channels login/logout` 写入全局插件 auto-enable、`connect --target-file` 删除畸形 UTF-8 文件等边界问题。
- **Doctor 与 Web UI 体验修复**：[#157415](https://github.com/openclaw/openclaw/issues/157415)（Doctor --fix 拒绝外部 acpx/codex 迁移）、[#157597](https://github.com/openclaw/openclaw/pull/157597)（Team mode 保留命名 session group）、[#167590](https://github.com/openclaw/openclaw/pull/167590)（iOS Safari 重复附件按钮）。

> 整体方向：项目正在沿 **"Gateway 主线程零 SQLite / 零长耗时操作"** 这条主线做大规模重构，配合升级路径与 CLI 边界的零碎硬化。功能可见度层面，用户面变化不大，但底层可靠性在稳步爬升。

---

## 4. 社区热点

今日评论数 / 互动最高的若干讨论：

| 链接 | 评论数 | 主题 |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 24 | 同步 agent 持久化 / transcript 维护阻塞 Gateway 事件循环（规模场景）。最长生命周期 P1 之一。 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 21 | Doctor 在 2026.9.3 升级时拒绝合法 legacy workspace。今日已关闭。 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 18 | hook/tool 子进程未收割，zombie 累积导致运行时退化。仍 OPEN。 |
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 16 | 2026.9.7 Fixes Tracker（meta tracking issue）。 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 16 | agent-DB 资源卡死导致全部 agent 回复失败，直至重启 gateway。仍 OPEN。 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 15 | WhatsApp 1:1 入站图片将主 lane 卡 3 分钟。仍 OPEN。 |
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | 14 | sessions_spawn → claude-cli 子会话 ~350ms 内必失败。 |
| [#53628](https://github.com/openclaw/openclaw/issues/53628) | 14 | Docker 中 `${XDG_CONFIG_HOME}` 在安装 skill 时不被展开。 |
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | 13 | Control UI Avatar 始终显示破图（多 PR 已关联但仍 OPEN）。 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | 13 | Native update recovery 卡在 publication-complete。今日已关闭。 |

**诉求提炼**：

- **"升级不可信"** 是当前最大的社区情绪：用户在 [#167376](https://github.com/openclaw/openclaw/issues/167376)、[#164113](https://github.com/openclaw/openclaw/issues/164113)、[#164074](https://github.com/openclaw/openclaw/issues/164074)、[#146887](https://github.com/openclaw/openclaw/issues/146887) 中反复描述"在生产环境升级时被坑了"。
- **"Gateway 一卡就全卡"**：[#119720](https://github.com/openclaw/openclaw/issues/119720)、[#157325](https://github.com/openclaw/openclaw/issues/157325)、[#162211](https://github.com/openclaw/openclaw/issues/162211)、[#160959](https://github.com/openclaw/openclaw/issues/160959) 都在描述同一个架构性问题 —— 主线程上的同步工作没有边界。
- **"多 agent / Webhook 边缘路径不靠谱"**：[#11665](https://github.com/openclaw/openclaw/issues/11665)（Webhook 应复用 session 却总是新建）、[#44309](https://github.com/openclaw/openclaw/issues/44309)（A2A 一方投递模式）、[#149133](https://github.com/openclaw/openclaw/issues/149133)（heartbeat 唤醒误入交互 session）反映了多 agent 拓扑下的状态边界模糊。

---

## 5. Bug 与稳定性

按严重程度排序（仅列今日仍 OPEN 或今日新出现的高严重度项）：

### 🦞 P0 / Diamond lobster

| Issue | 状态 | 说明 | 是否有 fix PR |
|---|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | OPEN | 同步持久化阻塞 Gateway 事件循环（规模场景） | 无独立 PR，多个工作线程迁移 PR 在系统性解决 |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | OPEN | agent-DB 卡死 → 全 agent 回复失败，须重启 | 未见关联 fix |
| [#160959](https://github.com/openclaw/openclaw/issues/160959) | OPEN | Gateway 在 plugin capture 时分钟级阻塞事件循环（2026.9.6 回归） | [#162226](https://github.com/openclaw/openclaw/pull/162226)（model-catalog worker 不丢弃增量插件）部分相关 |
| [#145203](https://github.com/openclaw/openclaw/issues/145203) | OPEN | openai-completions SSE 挂死 48.5 分钟，watchdog 不触发 | 未见关联 fix |
| [#157255](https://github.com/openclaw/openclaw/issues/157255) | OPEN | lane timeout 后 turn claim 不释放，session 永久 wedge 90+ 分钟 | 未见关联 fix |

### 🦐 P0 / Gold shrimp

| Issue | 状态 | 说明 |
|---|---|---|
| [#154572](https://github.com/openclaw/openclaw/issues/154572) | OPEN | sessions_spawn → claude-cli 必失败 ~350ms |
| [#162211](https://github.com/openclaw/openclaw/issues/162211) | OPEN | 启动时 Gateway 事件循环阻塞 40–200s，被健康监控误判为断开并重启循环 |

### 🐚 / 🦪 P1 回归与边缘路径

| Issue | 状态 | 说明 |
|---|---|---|
| [#41201](https://github.com/openclaw/openclaw/issues/41201) | OPEN | Control UI Avatar 破图（多 PR 仍 OPEN） |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | OPEN | WhatsApp 1:1 图片入站 lane 卡 3 分钟 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OPEN | 子进程 zombie 累积 |
| [#84569](https://github.com/openclaw/openclaw/issues/84569) | **今日关闭** | WhatsApp session 在长 model_call 后 stall，reply 未送达 |
| [#157415](https://github.com/openclaw/openclaw/issues/157415) | **今日关闭** | Doctor --fix 拒绝对外部 acpx/codex 做 post-session plugin 迁移 |
| [#165686](https://github.com/openclaw/openclaw/issues/165686) | **今日关闭** | Windows 升级 2026.9.8 后 Gateway 高 CPU / 事件循环饿死 |
| [#167376](https://github.com/openclaw/openclaw/issues/167376) | **今日关闭** | 2026.9.8→2026.9.9 upgrade 在 package-swap 失败 |
| [#164113](https://github.com/openclaw/openclaw/issues/164113) | **今日关闭** | LXC 容器内 update 因 FICLONE EPERM 失败 |
| [#164074](https://github.com/openclaw/openclaw/issues/164074) | **今日关闭** | Native update recovery 在 retained fingerprint 变化时卡住 |
| [#146887](https://github.com/openclaw/openclaw/issues/146887) | **今日关闭** | 2026.9.3→2026.9.4 四阶段升级失败 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | **今日关闭** | Doctor 拒绝合法 legacy workspace 迁移 |
| [#98790](https://github.com/openclaw/openclaw/issues/98790) | **今日关闭** | 并发 A→A turn 分叉 session tree，Anthropic 拒收 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | **今日关闭** | WebChat transcript 每轮被覆盖（v5.2 回归） |

---

## 6. 功能请求与路线图信号

- **多 provider / 模型 onboarding** [#81960](https://github.com/openclaw/openclaw/issues/81960)（7 评论）：用户希望首次安装即可配置多 provider / 多模型。当前 `openclaw onboard` 仅支持单一默认值。**信号**：已被多 issue 反复提及，路线图信号明确，但 PR 暂未出现。
- **A2A 单向 dispatch 模式** [#44309](https://github.com/openclaw/openclaw/issues/44309)（12 评论）：希望 `sessions_send` 支持"投放不回复"的 handoff 模式。**信号**：交互密度高，是 swarm / 编排型用户的关键诉求。
- **Slack Modal 原生支持** [#88154](https

---

## 横向生态对比

# 2026-10-09 个人 AI 助手 / 自主智能体开源生态横向对比分析

---

## 1. 生态全景

当下开源个人 AI 助手生态呈现明显的"**头部集中、尾部分化**"格局：**OpenClaw 以单日 500 Issue + 500 PR 的吞吐体量形成单极**，Hermes Agent、NanoBot、CoPaw、ZeroClaw 构成第二梯队的活跃带，而 PicoClaw、NanoClaw、IronClaw、Moltis、TinyClaw、ZeptoClaw 等项目处于"维护或探索"阶段，整体声量有限。**可靠性主线**：本月跨项目爆发的核心矛盾高度同构——"**Provider/API 一致性**"（GPT-6 路由、Responses API、tool serialization）与"**升级/更新链路可信度**"（Doctor 误判、Telegram 429 重试、Desktop update hand-off）是当前社区最强烈的两条结构性诉求，且尚未在任何项目中得到根治。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h） | PRs（24h） | Release | 主要特征 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 | ~500 | **v2026.9.9** | 三日内连续三个版本修升级链路 / Gateway 阻塞 | 🟡 中等偏紧 |
| **Hermes Agent** | 50 | 50 | **v0.21.6** | ~2,100 PR 合入，43 条 PR 待合并 | 🟡 高活跃 + 高拥堵 |
| **NanoBot** | 5 | 26 | 无（v0.3.6 临近） | Provider 兼容性修复集中爆发 | 🟢 良好 |
| **ZeroClaw** | 17 | 50 | 无（v0.8.6 候集中） | 测试信号可信度 + 设计文档沉淀 | 🟡 评审流水线积压 |
| **CoPaw / QwenPaw** | 28 | 36 | 无（v2.2.2-beta.4 收尾） | 测试基础设施 + Console 崩溃修复 | 🟢 良好 |
| **LobsterAI** | 0 | 20 | 无 | 14 条 PR 关闭（含 11 条 stale 清理） | 🟡 治理中 |
| **NullClaw** | 0 | 5 | 无 | 5 条新 PR 同日提交，零评审 | 🟡 提交活跃 / 闭环弱 |
| **NanoClaw** | 1 | 3 | 无 | SQLite 恢复死锁无 fix PR | 🔴 严重 bug 待 owner |
| **IronClaw** | 2 | 2 | 无 | 提案+实现捆绑式推进 | 🟡 正常 |
| **Moltis** | 2 | 0 | 无 | 安全漏洞闭环 + 生态接入咨询 | 🟢 改善中 |
| **PicoClaw** | 0 | 2 | 无 | 静默期，PR #3347 已 stale | 🔴 积压风险 |
| **TinyClaw / ZeptoClaw** | 0 | 0 | 无 | 过去 24h 无活动 | ⚪ 休眠 |

**量级差异**：OpenClaw 单日吞吐约为第二梯队（Hermes / NanoBot / ZeroClaw）的 **10 倍**，与 Hermes 同档（50 量级）相比是绝对头部。

---

## 3. OpenClaw 在生态中的定位

### 量化对照
- **社区规模**：OpenClaw 当日活跃度 ≈ Hermes × 10 ≈ NanoBot × 20 ≈ PicoClaw × 250
- **版本节奏**：连续三天（9.7→9.8→9.9）密集修复，单版本 92 contributors / 112 PRs，是 Hermes v0.21.6 之外的另一显著"量产版本"
- **贡献者结构**：92 名单版本贡献者反映出**多智能体协作开发生态**（agents 作为 implementation contributors），是其它项目未见的规模化模式

### 技术路线差异
| 维度 | OpenClaw | Hermes Agent | ZeroClaw | NanoBot | CoPaw |
|---|---|---|---|---|---|
| **架构核心** | Gateway 主线程 + Worker 迁移 | Desktop 优先 + Cloud 同步 | Runtime contracts + Tool tier | WebUI + Provider 路由 | Console + Tauri Desktop |
| **状态管理** | SQLite + Lane / Session tree | Authority Execution Layer | Daemon + RPC | Chat SDK 多通道 | beta4 Console UI |
| **多通道** | WhatsApp/Slack/WebChat/Webhook/A2A | Discord/Slack/Desktop | Telegram 优先 | QQ/Slack/Sendblue | Desktop/LAN |
| **AI 协同** | 实现 agent 拥有"限定边界修复"自治 | Operator-scoped kanban | Jev classifier 预选工具 | Dream/Heartbeat 循环 | 视图层 + 测试驱动 |

### 核心优势
1. **最大的多 agent 协作贡献者池**：#167599 已制度化"已限定边界的修复决策由实现 agent 自治"，领先业界
2. **结构性重构决心最强**：Gateway 主线程零 SQLite 已是跨 PR (#1190#167541+#167599) 双阶段（多核工程件拆态化）
4. **P0 修复透明度最高**：v2026.9.9 版本说明中明确列举 8 个根因 fix 与升级注意事项，远超其它项目

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Provider/API 一致性** | NanoBot、ZeroClaw、CoPaw、NullClaw、IronClaw | GPT-6/Responses API 路由、tool serialization 字段、SDK 3.8 `by_alias`、reasoning tokens 记账 |
| **升级/更新链路可靠性** | OpenClaw、Hermes、CoPaw、ZeroClaw | package-swap 失败、Desktop update hand-off PID 错、recovery 卡 fingerprint、Doctor 误判 |
| **后台行为静默化 / 可观测性** | NanoBot、ZeroClaw、CoPaw、LobsterAI | Compaction 死循环消耗 API、dream/heartbeat 空转、library 启动 ENOENT 噪音、Trace ID 全链路 |
| **多通道触达** | OpenClaw、NanoBot、NullClaw、IronClaw | Sendblue iMessage、QQ 引用消息、WebChat transcript、Discord 心跳墙钟漂移 |
| **推理模型一等公民** | NullClaw、NanoBot、CoPaw | `reasoning_mode` 区分"思考耗尽"与"生成失败"、compactModelPreset 独立选型 |
| **测试基础设施** | ZeroClaw、CoPaw、OpenClaw | wiremock 抖动隔离、e2e 选择器过时、guard architecture import cycle 误报 |
| **安全边界 / 凭证管理** | Moltis、OpenClaw、LobsterAI、Hermes | CWE-306 vault 认证、API key 误判 OAuth、导出密钥硬编码、Anthropic `sk-ant-usr-` 前缀分流 |
| **Web UI / TUI 体验** | PicoClaw、LobsterAI、OpenClaw、CoPaw | 大量文本卡顿、附件按钮重复、SVG 宽高错误、PPT 缩略图布局 |

**最强共识**：跨 6+ 项目的 **Provider/API 一致性** 问题（GPT-6/Responses 路由 + SDK 字段漂移）是当前生态最高频的痛点，OpenAI/xAI/Copilot 上下游任一变更即会在多个项目同步产生 Issue。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 完整的多通道 agent 平台 + 升级治理 | 生产环境部署者 + 多 agent 编排者 | Gateway 主线程 / worker 迁移 / lane session tree |
| **Hermes Agent** | Desktop 应用 + 云同步 + 操作员授权 | 桌面优先的终端用户 | kanban 操作员作用域 / authority execution layer |
| **NanoBot** | WebUI + Provider 兼容性 | 模型/Provider 切换频繁的开发者 | Skills marketplace + 通道插件 |
| **ZeroClaw** | 运行时契约 + 工具体系 | 生产级 bot 运维 / 流水线 | Tool tier / RPC drain / daemon 模式 |
| **CoPaw** | 多模态 + 国产化 + 测试驱动 | 企业内网 / Linux 桌面用户 | Tauri2 (考虑转 Electron) / 测试套件 41% 提速 |
| **LobsterAI** | Cowork 治理 + PPT/Office 协同 | 办公场景用户 | Cowork session + office artifacts |
| **NullClaw** | 流式 agent + MCP 生态 | MCP 尝鲜者 + 推理模型用户 | std.zig + 原生 tool-call 解耦 |
| **IronClaw** | Loop-host 架构 + 第三方通道扩展 | 私域消息整合者 | Jev classifier 预选 + host-owned credentials |
| **NanoClaw** | Docker 容器内 Bot | 弱运维容器云 / VM 部署 | SQLite outbound + Docker 驱动 |
| **Moltis** | Vault 凭证 + 安全合规 | 隐私敏感型用户 / 企业 IT | moltis-providers 抽象层 |
| **PicoClaw** | 轻量 provider 路由 | 嵌入式 / 边缘场景 | OpenCode Go session header |

**关键观察**：OpenClaw 与 Hermes Agent 是仅有的两个**显式支持"AI 智能体作为贡献者参与开发"**的项目（前者通过 #167599 制度化，后者通过 PR pipeline 实践），这反映出"AI 写 AI 代码"已开始从实验走向工程化。

---

## 6. 社区热度与成熟度分层

### 🟢 第一梯队：大规模快速迭代（每日 100+ 事件）
- **OpenClaw**：唯一突破 1000 事件 / 日的体量；处于"功能完善 + 架构重构"双轨期
- **Hermes Agent**：v0.21.6 量化合入，但 PR 拥堵严重，需关注评审流水线健康

### 🟡 第二梯队：活跃中等规模（每日 20-50 事件）
- **NanoBot**：v0.3.6 即将发布，Provider 兼容性是核心战场
- **ZeroClaw**：v0.8.6 release-gate 集备中，S1 缺陷集中但缺乏 fix PR
- **CoPaw / QwenPaw**：beta4 收尾期，测试基础设施建设投入显著

### 🟠 第三梯队：低活跃 / 单点突破
- **LobsterAI**：正在进行 stale PR 治理（11 条 3 月 PR 集中清理），属仓库治理阶段
- **NullClaw**：贡献者活跃但评审缺位，积压风险上升
- **NanoClaw**：1 条严重 bug（SQLite 死锁）无 owner
- **IronClaw**：提案+实现捆绑式推进，节奏可控
- **Moltis**：安全闭环 + 1 条生态接入信号

### 🔴 第四梯队：积压 / 休眠
- **PicoClaw**：PR #3347 已 stale 43 天，存在被机器人关闭的风险
- **TinyClaw / ZeptoClaw**：过去 24 小时无任何活动

**成熟度信号**：从"仓库治理动作"看，LobsterAI（启用 stale bot）、NanoClaw（CI namespace 统一）、OpenClaw（fingerprint + worker migration 制度化）三个项目走在治理纪律的前列；从"工程严谨度"看，ZeroClaw（runtime contracts 文档沉淀）、CoPaw（测试套件 -41% 耗时）是质量巩固的代表。

---

## 7. 值得关注的趋势信号

### 🔥 趋势一：**"后台自治行为的产品化"成为下一战场**
NanoBot #6106 / #5781 / #6029、ZeroClaw #11618、CoPaw #8109、LobsterAI #2814 共同指向：**用户对"AI 自主行为"从期待转向焦虑**，诉求是"**默认静默 + 必要时可追溯**"。这与 Anthropic、OpenAI 在 agent 控制权上的行业讨论完全同步。**对开发者的启示**：任何后台循环（compaction / heartbeat / dream / 持久化）都需要明确的 budget 控制、可观测 trace、独立预算模型（compactModelPreset 是先例）。

### 🔥 趋势二：**"Provider 兼容性"已成为多模型智能体的隐性税**
仅 2026-10-09 一天，NanoBot 就有 7 个 PR 用于修复 GPT-6 路由、xAI reasoning、Codex 传输、SDK by_alias 等问题。**对开发者的启示**：多 provider 适配不是"加几行代码"那么简单，需要架构层面支持 `(item_id, call_id)` 双路由

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-10-09**

---

## 1. 今日速览

NanoBot 今日继续保持高度活跃的开发节奏，过去 24 小时共产生 26 个 PR 更新和 5 个 Issue 更新，其中 PR 合并/关闭 11 个、Issue 关闭 3 个，活跃度处于高位。从工作内容看，本日主线明显聚焦于两个方向：**Provider/Responses API 一致性治理**（GPT-6 路由、Reasoning 事件、工具调用序列化、Codex 传输恢复等）和**上下文压缩（Compaction）体验优化**（静默压缩、Slack 占位编辑、WebUI 路径处理）。两条主线均直接回应用户高频反馈，整体项目健康度良好，无新版本发布但修复密度高。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前最新可用版本仍为 **v0.3.5**。需要注意的是，多个已合并的修复（如 #6107、#6102、#5863、#5834、#6051、#6020、#5935、#5906、#6089）尚未包含在已发布版本中，提示下一个补丁版本（推测 v0.3.6）很可能即将到来。

---

## 3. 项目进展

今日合并/关闭的 PR 集中在「Provider 兼容」与「WebUI 体验」两大方向，显著推进了项目稳定性：

| PR | 类型 | 关键内容 |
|---|---|---|
| [#6107](https://github.com/HKUDS/nanobot/pull/6107) | Provider 修复 | 统一 Responses / Chat Completions / Anthropic Messages / Bedrock Converse 的 1MB 内联图像批量准备，恢复 Codex 传输（针对大型图片批次延迟首字节、连接超时）|
| [#5863](https://github.com/HKUDS/nanobot/pull/5863) / [#5834](https://github.com/HKUDS/nanobot/pull/5834) | Provider 修复 | SSE Responses 消费者现在正确处理 `response.reasoning_text.delta/done` 事件，使 xAI Grok / OpenAI Codex 的推理增量正常透传 |
| [#6051](https://github.com/HKUDS/nanobot/pull/6051) | Provider 修复 | Responses API 工具参数事件按 `item_id` 路由（而非仅 `call_id`），修复多工具并行场景下的串扰 |
| [#6020](https://github.com/HKUDS/nanobot/pull/6020) | Provider 修复 | OpenAI SDK 3.8.0 后 `ResponseFunctionToolCall.async_` 需 `by_alias=True`，修复字段序列化失败 |
| [#5935](https://github.com/HKUDS/nanobot/pull/5935) | Provider 修复 | GitHub Copilot GPT-6 模型路由到 Responses API，避免 Chat Completions 不支持的问题 |
| [#5906](https://github.com/HKUDS/nanobot/pull/5906) / [#6105](https://github.com/HKUDS/nanobot/pull/6105) | Provider 修复 | OpenCode Go 的 muse-spark contributor 模型改用 Responses，否则 `/chat/completions` 返回 500 |
| [#6089](https://github.com/HKUDS/nanobot/pull/6089) | WebUI 改进 | 用应用内目录选择器替换原生 workspace 选择器，统一圆角风格、对齐对话框，并优化 Composer 操作 |
| [#6102](https://github.com/HKUDS/nanobot/pull/6102) | WebUI 修复 | SkillHub 技能详情链接缺失 `/skills/` 路径段，已修复 |

**整体评价**：今日合并的 11 个 PR 中，约 7 个属于 Provider 兼容性修复，反映社区近期在多种 LLM 提供商（OpenAI / xAI / Copilot / OpenCode / Codex / DeepSeek）落地中遇到了大量 API 差异问题。这是一次系统性的稳定性扫尾，项目整体向前迈进了相当显著的一步。

---

## 4. 社区热点

按评论数与跨 PR/Issue 关联度排序：

1. **[#6106](https://github.com/HKUDS/nanobot/issues/6106) - 空会话上 Compaction 死循环导致 API 异常消耗（4 评论，已关闭）**
   用户 `SPHINXUSS` 报告空会话/无消息场景下 compaction 以 15 分钟为周期空转一整晚，耗尽 API 配额。这条 Issue 推动了静默 compaction 的设计共识。

2. **[#5781](https://github.com/HKUDS/nanobot/issues/5781) - Dream 循环 25–111 分钟卡在重复 read_file（4 评论，已关闭）**
   用户 `BrianMwangi21` 指出 `dream.maxIterations` 配置已弃用，全局 200 次迭代上限导致长时间空转，揭示了后台 Dream/Heartbeat 的可控性缺陷。

3. **[#6029](https://github.com/HKUDS/nanobot/issues/6029) - 后台压缩广播打扰用户（3 评论，已关闭）**
   用户 `npike` 要求后台 idle/dream cycle 触发的压缩通知保持静默，与 #6106/#5781 共同构成「静默后台 compaction」功能请求集群。

4. **[#6084](https://github.com/HKUDS/nanobot/issues/6084) - Slack 压缩通知每次产生两条永久消息（3 评论，仍 OPEN）**
   用户 `ccaryotakis` 报告 `idleCompactAfterMinutes` 触发后，"Compressing context…" 与 "Context compacted." 两条消息均永久存在于 DM 中。已有修复 PR [#6110](https://github.com/HKUDS/nanobot/pull/6110) 通过 `chat.update` 实现原地编辑。

5. **[#6006 → #6007](https://github.com/HKUDS/nanobot/pull/6007)** - QQ 频道缺失引用消息透传，正在 PR 中修复。

**热点背后的诉求**：今日社区最关心的是 **「自动化后台行为不应打扰用户」**——无论是空会话压缩、Dream 死循环、还是 Slack 频道的永久消息噪音，都指向同一个产品哲学诉求：nanobot 的后台维护应当对用户「无感但可追溯」。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 问题 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#6106](https://github.com/HKUDS/nanobot/issues/6106) | 空会话上 compaction 死循环消耗 API 配额（已关闭） | ✅ 静默压缩已合并（#5780 系列） |
| 🟠 中 | [#5781](https://github.com/HKUDS/nanobot/issues/5781) | Dream 心跳 1-2 小时卡在同一 read_file 循环（已关闭） | ⚠️ 需结合静默压缩 |
| 🟠 中 | [#6084](https://github.com/HKUDS/nanobot/issues/6084) | Slack 频道压缩产生两条永久消息 | ✅ [#6110](https://github.com/HKUDS/nanobot/pull/6110) 已提交 |
| 🟡 低 | [#6108](https://github.com/HKUDS/nanobot/pull/6108) | 网关拒绝 `/tmp` 等绝对路径消息 | ✅ PR 待合并 |

历史回归风险已通过今日 11 个 Provider 相关修复显著降低，特别是 Codex 传输恢复（[#6107](https://github.com/HKUDS/nanobot/pull/6107)）和 GPT-6 路由修复（[#5935](https://github.com/HKUDS/nanobot/pull/5935)）解决了多个长期困扰用户的问题。

---

## 6. 功能请求与路线图信号

今日功能请求主要分布在以下方向，对应 PR 进度：

| 功能 | 来源 | 当前状态 | 路线图可能性 |
|---|---|---|---|
| **专用于 compaction 的 Provider/Model（`compactModelPreset`）** | [#6109](https://github.com/HKUDS/nanobot/pull/6109) | PR Open | 🟢 高（PR 已就绪、优先级 p2）|
| **WebUI 可信本地扩展机制** | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | PR Open | 🟢 高（明确 security 标签）|
| **Sendblue iMessage/SMS 通道** | [#6081](https://github.com/HKUDS/nanobot/pull/6081) | PR Open | 🟡 中（新通道，可能进入下一版本）|
| **Workspace 选择器 Windows 优化（驱动器/新建/快捷方式）** | [#6111](https://github.com/HKUDS/nanobot/issues/6111) | 新 Issue | 🟡 中（无 PR）|
| **每预设声明请求 API（Models preset editor）** | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | PR Open（p1）| 🟢 高（最高优先级）|
| **会话历史 FTS5 加速** | [#5826](https://github.com/HKUDS/nanobot/pull/5826) | PR Open（性能） | 🟢 高 |
| **CoreWeave Inference 自定义 Provider 文档** | [#6103](https://github.com/HKUDS/nanobot/pull/6103) | PR Open | 🟢 高（文档）|
| **DeepSeek hosted web_search 在 Chat Completions 下剥离** | [#6104](https://github.com/HKUDS/nanobot/pull/6104) | PR Open | 🟢 高 |

**路线图信号**：`compactModelPreset`（#6109）、`Models preset editor`（#5204）、Sendblue 通道（#6081）三条线索最有希望进入下一版本，前两个解决了 Provider 选型的精细化问题，后者扩展了触达渠道。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实痛点：

- **💸 财务焦虑**（`SPHINXUSS` @ #6106）：用户对「后台行为在不知情情况下烧 API」高度敏感，呼吁默认即「静默+可观测」而非「广播通知」。
- **😩 后台失控感**（`BrianMwangi21` @ #5781）：用户对 Dream 任务的预期是「短、可控」，但实际遇到 1-2 小时无进展循环，期望 `dream.maxIterations` 真正生效。
- **📱 移动端/通道整洁**（`ccaryotakis` @ #6084）：Slack DM 用户对永久占位消息零容忍，期望消息流"干净"。
- **🪟 Windows 桌面体验短板**（`KailBug` @ #6111）：重构后的 workspace 选择器在 Windows 上缺少驱动器列表、文件夹创建与"桌面/文档"等常用位置快捷方式，体感不如旧版。

**满意方向**：用户对 QQ 引用消息缺失（#6006）、DeepSeek web_search 配置问题（#6085 → #6104）等已识别问题反馈清晰，社区维护响应迅速，PR 通常 1-3 天内出现。

---

## 8. 待处理积压

以下重要议题长期未结，维护者应优先关注：

| 编号 | 创建时间 | 状态 | 关注理由 |
|---|---|---|---|
| [#5204](https://github.com/HKUDS/nanobot/pull/5204) | 2026-08-01 | Open（p1）| **优先级最高的开放 PR**，涉及 Models preset 请求 API 声明化，但已开放超过 2 个月 |
| [#5826](https://github.com/HKUDS/nanobot/pull/5826) | 2026-09-20 | Open | FTS5 会话历史搜索性能优化，影响大历史量用户 |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | 2026-10-04 | Open | WebUI 扩展机制，涉及 security 标签，需安全审计 |
| [#6007](https://github.com/HKUDS/nanobot/pull/6007) | 2026-10-02 | Open | QQ 引用消息透传，修复用户实际功能缺失 |
| [#6084](https://github.com/HKUDS/nanobot/issues/6084) | 2026-10-06 | Open | 已有修复 PR #6110，但需确认与已合并 #5780 的兼容性 |
| [#6109](https://github.com/HKUDS/nanobot/pull/6109) | 2026-10-08 | Open | `compactModelPreset` 是社区高频诉求的直接落地 |
| [#6081](https://github.com/HKUDS/nanobot/pull/6081) | 2026-10-05 | Open | Sendblue iMessage 通道，新触点 |

**特别提醒**：PR #5204 已挂起超过 60 天且被标记为 p1，是当前 backlog 中最严重的瓶颈。

---

**报告生成时间**：2026-10-09
**数据来源**：HKUDS/nanobot GitHub Repository
**覆盖周期**：过去 24 小时（2026-10-08 ~ 2026-10-09）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-10-09**
**数据周期：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 项目今日保持高度活跃，共发生 **50 条 Issue 更新**（48 新开/活跃，2 已关闭）与 **50 条 PR 更新**（43 待合并，7 已合并/关闭），并发布了一个补丁版本 **v0.21.6**。社区关注度集中且方向明确：**更新链路（install/update）相关 Bug** 成为头号热点，多个 P1/P2 问题涉及 macOS Desktop 更新按钮、Windows Scheduled Task 漂移、`solstice` provider 加载失败等，叠加效应明显。整体上项目处于"密集修复 + 持续重构"阶段，PR 流入量（~2,100 PRs 自 v0.21.5）远超 Issues 关闭速度，需关注维护者负担与回归控制。

---

## 2. 版本发布

### v0.21.6（2026-10-08 发布）

- **性质**：补丁版本（Patch），合并自 v0.21.5 以来的约 **2,100 个 PR**，作为 Docker 与 Hermes Cloud 的稳定标签版本
- **范围**：本期精选 changelog 推迟至 **v0.22.0** 发布
- **已知问题**：[#135217](https://github.com/NousResearch/hermes-agent/issues/135217) 报告 `hermes --version` 仍显示 v0.21.5 的发布日期 `2026.9.24`，因为 `__release_date__` 常量未随 patch bump 更新
- **迁移注意**：官方未给出破坏性变更公告，建议以 changelog 暂缺状态下保守升级，重点回归测试 Desktop 更新、Solstice 加载、Windows 网关三条路径

---

## 3. 项目进展

今日明确推进的方向（按重要性排列）：

### 已关闭 / 已合并
- **[PR #124749](https://github.com/NousResearch/hermes-agent/pull/124749)**（已关闭）：修复 dashboard Files 页面因 dangling symlink 整体 500 崩溃——一处死链曾阻断整个目录列举 [#127305](https://github.com/NousResearch/hermes-agent/issues/127305)
- **[Issue #135383](https://github.com/NousResearch/hermes-agent/issues/135383)**（已关闭）：`solstice` provider 重复刷日志的问题被同源 PR [#134235](https://github.com/NousResearch/hermes-agent/pull/134235) 涵盖，已合并处理

### 重点待合并 PR（高价值）
- **[PR #134235](https://github.com/NousResearch/hermes-agent/pull/134235)**：从五个角度抑制 `solstice/httpx` provider 警告（懒加载传输、`config` 导入去发现、版本探测不导入应用图等），关联主 issue [#134107](https://github.com/NousResearch/hermes-agent/issues/134107)（38 评论，最高热度）
- **[PR #84409](https://github.com/NousResearch/hermes-agent/pull/84409)**（P1）：通过 schtasks 让 Windows 网关 post-update spawn 跳出父 job，闭环 [#84185](https://github.com/NousResearch/hermes-agent/issues/84185) 的诚实上报与冷启动两条路径
- **[PR #133281](https://github.com/NousResearch/hermes-agent/pull/133281)**（P0）：持久化原生 vision media，使 SQLite 重载后 prompt-cache prefix 不再失配——直接影响 token 成本与延迟
- **[PR #135195](https://github.com/NousResearch/hermes-agent/pull/135195)**（P2）：web 层将 19 位 snowflake ID 序列化为字符串，避免 JS Number 精度损失；闭环 [#123439](https://github.com/NousResearch/hermes-agent/issues/123439)
- **[PR #135430](https://github.com/NousResearch/hermes-agent/pull/135430)**：将 TUI launcher 的 `NODE_ENV=production` 从网关隔离，修复 npm 静默跳过 devDeps（如 Vitest）问题 [#135419](https://github.com/NousResearch/hermes-agent/issues/135419)
- **[PR #135408](https://github.com/NousResearch/hermes-agent/pull/135408)**：重建时保留插件自有 extras（如 mem0 的 `postgres` extra），解决 uv `--all-packages` 误扩散
- **[PR #135428](https://github.com/NousResearch/hermes-agent/pull/135428)**：为操作员加固过的 Windows Scheduled Task 提供 reconcile opt-out [#127977](https://github.com/NousResearch/hermes-agent/issues/127977)
- **[PR #135401](https://github.com/NousResearch/hermes-agent/pull/135401)**（P2）：TUI/gateway 优雅关闭时正确清理 turn marker，避免下次启动误判

### 整体评估
**项目健康度**：高活跃 + 高拥堵。单日 50 PR 中 43 待合并，PR backlog 显著扩大。已合并的修复虽小（如 #124749），但带动了周边 6+ 条 issue 闭环，是高杠杆的清理。值得肯定的是 P0 性能修复（#133281）与 P1 安全边界修复（#84409）同时在推进，说明核心维护者注意力未漂移。

---

## 4. 社区热点

按评论数排序（Top 10），反映社区关注焦点：

| 排名 | Issue | 标题 | 评论数 | 链接 |
|---|---|---|---|---|
| 1 | #134107 | `solstice` provider 加载失败导致 TUI 被警告刷屏 | 38 | [查看](https://github.com/NousResearch/hermes-agent/issues/134107) |
| 2 | #133992 | macOS Desktop update hand-off 锁自冲突（回归 #78119 / #87514） | 23 | [查看](https://github.com/NousResearch/hermes-agent/issues/133992) |
| 3 | #131859 | `CreatePullRequest` API 权限异常（issue/fork PR 正常） | 13 | [查看](https://github.com/NousResearch/hermes-agent/issues/131859) |
| 4 | #103481 | 跨会话 cache prefix + 压缩调度架构反馈 | 11 | [查看](https://github.com/NousResearch/hermes-agent/issues/103481) |
| 5 | #135255 | Microsoft Store 版本追踪 | 7 | [查看](https://github.com/NousResearch/hermes-agent/issues/135255) |
| 6 | #79198 | 跨平台会话组（session key 重映射） | 7 | [查看](https://github.com/NousResearch/hermes-agent/issues/79198) |
| 7 | #29309 | AWS Bedrock Bearer Token 在辅助客户端不可用 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/29309) |
| 8 | #66543 | Custom provider 推理 effort 应映射各模型支持档位 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/66543) |
| 9 | #102725 | 同 base_url+同 model 的不同 api_mode 总是 heal 到第一条 | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/102725) |
| 10 | #134602 | Desktop 更新按钮：hand-off 自身的 custodian 被拒（exit 2） | 5 | [查看](https://github.com/NousResearch/hermes-agent/issues/134602) |

**诉求分析**：
- **更新链路质量（#134107 / #133992 / #134602 / #134268 / #135405 / #135210）**：6 条相关 issue 集中爆发，暴露 Desktop 与 CLI 之间的 update 协调机制脆弱——custodian/hand-off/lock 三方对同一进程的判定不一致。这是社区最迫切的痛点。
- **可观测性与可诊断性（#127305 / #135217）**：用户希望 `hermes config show` 枚举全部 key、希望版本号显示真实发布日期——共同指向 "产品化成熟度"
- **跨平台一致性（#29309 / #66543 / #102725）**：用户在 Bedrock、自定义 OpenAI-compatible provider 上反复遭遇同一类「主路径 OK、辅助路径错位」的问题

---

## 5. Bug 与稳定性

按严重程度排列（P1 → P3）：

### P1（安全边界 / 主链路阻塞）
- **[#133856](https://github.com/NousResearch/hermes-agent/issues/133856)**：`sk-ant-usr-` 前缀的 Anthropic API key 被误判为 OAuth token，导致 `_auth_style()` 返回 `"oauth"`——支付付费 key 走 OAuth 路径，安全与计费双重风险。**尚无对应 fix PR**
- **[#135210](https://github.com/NousResearch/hermes-agent/issues/135210)**：macOS Desktop Installer 在 "Install Command and Apps + Desktop" 阶段因 `solstice` 缺 `httpx` 失败。**与 #134107 同根，复用 [#134235](https://github.com/NousResearch/hermes-agent/pull/134235) 修复**
- **[#132329](https://github.com/NousResearch/hermes-agent/issues/132329)**：Desktop 在上下文压缩（compaction）中途误报 "The reply was cut off"，实际后端会话未掉线。**尚无对应 fix PR**
- **[PR #84409](https://github.com/NousResearch/hermes-agent/pull/84409)**：Windows 网关 post-update spawn 已被父 job 限制（功能修复，待合并）

### P2（功能降级 / 配置一致性）
- **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992)** / **[#134602](https://github.com/NousResearch/hermes-agent/issues/134602)** / **[#134268](https://github.com/NousResearch/hermes-agent/issues/134268)** / **[#135405](https://github.com/NousResearch/hermes-agent/issues/135405)**：macOS Desktop 更新按钮全部 exit 2；根因均为 hand-off 导出错误 PID（`HERMES_UPDATE_HANDOFF_PID`），属同一回归族。**尚无集中 fix PR**
- **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)**：`gh pr create` API 报权限错误，issue/fork 仍可——权限范围变更疑似主因
- **[#29309](https://github.com/NousResearch/hermes-agent/issues/29309)**：Bedrock Bearer Token 在 title-gen/compression 等辅助客户端不可用（已 5 个月未修）
- **[#125040](https://github.com/NousResearch/hermes-agent/issues/125040)** / **[#135425](https://github.com/NousResearch/hermes-agent/issues/135425)**：Terminal tool PATH 把 PM 私有 Python 置于 venv 之前，破坏 Python skill 脚本；**#125040 的修复仅覆盖 POSIX，Windows 端 #135425 仍未解决**
- **[#127977](https://github.com/NousResearch/hermes-agent/issues/127977)**：Windows 加固版 Scheduled Task 永远被判 drifted。**已由 [#135428](https://github.com/NousResearch/hermes-agent/pull/135428) 提供 opt-out**
- **[#66543](https://github.com/NousResearch/hermes-agent/issues/66543)** / **[#102725](https://github.com/NousResearch/hermes-agent/issues/102725)**：自定义 provider 的推理 effort 映射与 identity heal 缺陷
- **[#127305](https://github.com/NousResearch/hermes-agent/issues/127305)**：`hermes config show` 仅渲染硬编码子集且无全 key 枚举命令
- **[#123439](https://github.com/NousResearch/hermes-agent/issues/123439)**：Config UI 19 位 ID 精度损坏。**已由 [#135195](https://github.com/NousResearch/hermes-agent/pull/135195) 修复，待合并**
- **[PR #135401](https://github.com/NousResearch/hermes-agent/pull/135401)**：TUI shutdown 留下 turn marker 导致下次启动误判（待合并）

### P3（边缘场景 / 体验瑕疵）
- **[#134107](https://github.com/NousResearch/hermes-agent/issues/134107)**（38 评论）：`solstice` 加载刷屏——已由 [#134235](https://github.com/NousResearch/hermes-agent/pull/134235) 修复
- **[#135217](https://github.com/NousResearch/hermes-agent/issues/135217)**：v0.21.6 显示 v0.21.5 日期
- **[#135419](https://github.com/NousResearch/hermes-agent/issues/135419)**：npm 静默跳过 devDeps（Vitest）。**已由 [#135430](https://github.com/NousResearch/hermes-agent/pull/135430) 修复**
- **[#97662](https://github.com/NousResearch/hermes-agent/issues/97662)**：Discord clarify 按钮可能早于 gateway 超时
- **[#134844](https://github.com/NousResearch/hermes-agent/issues/134844)**：`opencode-go` 将 Claude Haiku 5.5 错误路由到 `/v1/chat/completions`

### 严重程度汇总
| 等级 | 数量 | 已有 fix PR |
|---|---|---|
| P1 | 4 | 2（#134235 兼修 #135210、#84409 兼修 #132329 相关链路） |
| P2 | 11 | 5 |
| P3 | 6 | 4 |

**评估**：P1 主链路问题（更新、计费、安抚类用户）已有 50% 修复覆盖；P2 中存在多个回归族（Desktop 更新 PID 错误族）缺乏统一 root-cause fix，存在合并风险。

---

## 6. 功能请求与路线图信号

### 已实现 / 在途 PR（高纳入概率）
- **[PR #102875](https://github.com/NousResearch/hermes-agent/pull/102875)**：bubblewrap 后端，per-command bwrap 沙盒——Linux 用户的强安全诉求，预计近期合入
- **[PR #135429](https://github.com/NousResearch/hermes-agent/pull/135429)**：plugin-catalog 新增 Memory Shield（v1.1.0）——Plugin Catalog 持续扩张
- **[PR #135431](https://github.com/NousResearch/hermes-agent/pull/135431)**：`hermes kanban authorize-existing-pr` 操作员作用域的单次授权——完善 kanban 操作体验
- **[PR #130586](https://github.com/NousResearch/hermes-agent/pull/130586)**：Discord `/help` 命令支持可选 query 参数
- **[PR #102085](https://github.com/NousResearch/hermes-agent/pull/102085)**：durable authority primitives（Authority Execution Layer 子集）——与 #95028 联动，是路线图明确方向

### 新功能诉求（待评估）
- **[#135255](https://github.com/NousResearch/hermes-agent/issues/135255)**（7 评论）：**Microsoft Store 发布追踪**——明确上架 Gate，用户已在内测，预示 v0.22.x 或 v0

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：** 2026-10-09
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 项目今日社区活跃度处于**低位**。过去 24 小时内无新增或活跃 Issue，无 PR 合并或关闭，无新版本发布。仅有 2 个此前已存在的 PR 在昨日（10-08）有更新动作，今日（10-09）整体处于静默状态。维护者侧未见明显处理动作，建议结合 [项目 Pulse](https://github.com/sipeed/picoclaw/pulse) 持续观察后续是否恢复活跃度。

---

## 2. 版本发布

无新版本发布。本节略过。

---

## 3. 项目进展

⚠️ **今日无任何 PR 被合并或关闭**，项目代码层面无实质性推进。

过去 24 小时仅有的 2 条 PR 更新均为"OPEN 状态持续挂起"，并未形成可合并的进展。项目健康度的代码前进指标今日为 **0**。

详细状态如下：

| PR | 状态 | 距离创建 | 说明 |
|---|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | OPEN | 31 天 | 新增 opencode-go provider（待合并） |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | OPEN（stale） | 43 天 | 修复 Web UI 卡顿（已被标记 stale） |

---

## 4. 社区热点

过去 24 小时内互动量最高的讨论集中在以下两个 PR（均于 10-08 更新）：

- **🔥 PR [#3371 - feat(providers): add opencode-go provider](https://github.com/sipeed/picoclaw/pull/3371)**
  作者 EMTumariscal。该 PR 引入了 OpenCode Go（`https://opencode.ai/zen/go/v1`）专用 provider，使 PicoClaw 能继续使用 OpenCode Go。实现亮点是**按模型 ID 自动路由**到对应的端点族，并附带 `x-opencode-session` 请求头以传递当前会话上下文。

- **🔥 PR [#3347 - fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)**
  作者 iMilnb。该 PR 修复了聊天区文本量大时 Web UI 卡顿的问题，作者已自行构建 `picoclaw-launcher` 验证，在桌面和移动端 Brave 浏览器均无卡顿。需注意作者自述**非 TypeScript/Node 开发者**，修改基于分析推断，可能需要维护者侧代码评审把关。

> ⚠️ 两条 PR 均显示 0 赞、无评论数据，**社区实际参与度极低**，缺乏第三方审阅意见。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 链接 | 修复 PR 状态 |
|---|---|---|---|
| 🟡 中 | Web UI 在大量文本时出现明显卡顿（桌面 + 移动端） | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | 已有 fix PR，**OPEN（stale）** |

- **PR [#3347](https://github.com/sipeed/picoclaw/pull/3347)** 已存在 43 天仍未合并，且已被 GitHub 自动标记为 **stale**（无活动），存在被机器人关闭的风险。这是一段稳定性的关键修复，建议维护者优先 review。
- 今日无新崩溃或回归问题报告。

---

## 6. 功能请求与路线图信号

- **PR [#3371](https://github.com/sipeed/picoclaw/pull/3371)** 本身即代表了一个明确的方向信号：**持续扩展多 provider 支持**，特别是 OpenCode Go 这种带 session 上下文的轻量 Go 端点。这意味着项目在模型路由与 session 管理方向上正在构建更细粒度的支持。
- 若 [#3371](https://github.com/sipeed/picoclaw/pull/3371) 被合并，可成为下一版本中"Provider 扩展"章节的重要组成。
- 今日无新功能请求（Feature Request 类 Issue）提出。

---

## 7. 用户反馈摘要

由于今日无 Issue 评论数据，公开可见的真实用户反馈有限。仅能从 PR 描述中提炼以下信息：

- **用户场景：** 桌面 + 移动浏览器（Brave）使用 PicoClaw Web UI 的用户在大量文本时遭遇卡顿 → 反映出 **Web 端性能是当前用户体验的痛点之一**。
- **贡献者画像：** 非 TypeScript/Node 专业开发者也在尝试贡献，说明项目**对外部贡献者仍保持开放**，但同时也意味着评审负担更多落在维护者侧。

---

## 8. 待处理积压 ⚠️

以下 PR 已长时间未响应，维护者建议关注：

- **🚨 [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) - fix laggy interface**
  - **已 43 天未合并**，且**已被 GitHub 标记为 stale**
  - 涉及 Web UI 性能问题，对终端用户体验影响较大
  - **风险：** 若继续无活动，可能被 stale-bot 自动关闭
  - **建议：** 维护者尽快进行代码评审（特别关注作者为非 TS 开发者这一点）

- **🟡 [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) - feat(providers): add opencode-go provider**
  - **已 31 天未合并**，新功能类 PR 等待 review
  - 涉及第三方 provider 集成，需要评估对现有 provider 架构的影响
  - **建议：** 安排维护者 review 并就端点路由逻辑提供反馈

---

## 📊 项目健康度总结

| 指标 | 状态 |
|---|---|
| Issue 处理响应 | 🟢 无积压（今日无活跃 Issue） |
| PR 合并吞吐 | 🔴 **0 个 PR 合并 / 过去 24h** |
| 社区互动度 | 🟡 极低（0 评论 / 0 赞） |
| 版本发布节奏 | 🟡 无新版本 |
| Stale 风险 | 🔴 PR #3347 已被标记 stale |
| 整体评估 | **🟡 偏低活跃，需关注积压 PR** |

---

*本报告基于 GitHub 公开数据生成，数据时间窗口：2026-10-08 ~ 2026-10-09。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-10-09**
**数据周期：过去 24 小时**
**项目仓库：[nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 今日整体活跃度处于**中低水位**：1 条新 Issue 报告，3 条 PR 流转，其中 2 条当日关闭、1 条仍待评审。无新版本发布，仓库整体处于迭代整理阶段（CI 收敛 + 容器运行时修复 + 一个长期挂起 Skill 被关闭）。从议题构成看，今天的工作重心集中在**基础设施层稳健性**（SQLite 日志恢复、Docker 容器回收时序、GitHub Actions Runner 命名空间统一），属于典型的"打地基"型 PR 日，对外部用户感知有限，但有助于降低后续功能开发的不确定性。

---

## 2. 版本发布

**今日无新版本发布。** 仓库未触发任何 tag 或 release 流程，预计下一次可发版窗口需等待 PR #4057（Docker 驱动修复）合并后形成的功能切片。

---

## 3. 项目进展

今日合入或关闭的关键 PR 共有 2 条，均指向项目长期可维护性：

| PR | 标题 | 状态 | 价值评估 |
|---|---|---|---|
| [#4058](https://github.com/qwibitai/nanoclaw/pull/4058) | `ci: move all jobs to namespace-profile-paradixe` | **CLOSED** | 落实 2026-10-08 创始人批准的新规：所有 Actions job 必须运行于自托管 `namespace-profile-paradixe` 或 s6 runner，禁用 GitHub 托管 label。这是仓库治理层面的硬规则落地，长期可降低供应链与账单成本，但短期内若有自托管 runner 容量问题可能拖慢 CI。 |
| [#2459](https://github.com/qwibitai/nanoclaw/pull/2459) | `feat(skill): add /add-voice-transcription-chat-sdk` | **CLOSED**（自 2026-05-13 起挂起约 5 个月） | 该 PR 提议为 Discord / Slack / Teams / Webex / Google Chat 等 Chat SDK 通道接入本地 whisper.cpp 语音转写，无云依赖。今日被关闭，未见合并声明。若功能本身仍有价值，关闭信号意味着**该能力可能改走另一条路径**（参见同源关联 #2317）。 |

**整体推进判断**：项目未在功能侧获得显著前进，但在 CI 一致性与治理纪律上完成了一次清理动作，方向正确。

---

## 4. 社区热点

今日所有 Issue / PR 的 `comments` 与 `👍` 字段均为 **0 / 0**，社区讨论强度可忽略不计。**不存在具备"热点"属性的条目。** 这与项目本身（基础设施型 Bot 容器）受众偏窄、用户互动主要发生在 Discord 而非 GitHub 的特征相符。建议维护者在日报之外，单独跟踪 Discord 端的反馈以补齐信号源。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重：SQLite 只读态死锁（无 fix PR）
- **Issue [#4056](https://github.com/qwibitai/nanoclaw/issues/4056)**：`bug: stranded outbound.db-journal after host reboot is never recovered; readonly poll fails every tick forever`
- **报告者**：mshirel ｜ **创建/更新**：2026-10-08
- **严重程度**：**High**。宿主或 VM 在容器对 `outbound.db` 进行中间写时掉电，遗留的 `outbound.db-journal` 永远不会被动清理，因为只有当新容器 spawn 才会以读写模式重新打开该 DB。在此之前，主机的只读投递轮询会以 `SQLITE_READONLY` 在每个 tick 失败，形成永久失败循环。
- **影响面**：影响所有依赖 `outbound.db` 出站投递的通道；本质上是**故障后恢复路径缺失**，且与"无人值守、长生命周期"的使用场景直接冲突。
- **修复状态**：**尚无对应 fix PR**。这是今日最值得维护者优先处理的一项。

### 🟡 中等：Docker 容器回收时序竞争（已有 fix PR，待合并）
- **PR [#4057](https://github.com/qwibitai/nanoclaw/pull/4057)**：`fix(docker-driver): wait out in-flight --rm auto-removal on stop`
- **作者**：musashinm ｜ **状态**：OPEN，待评审
- **问题**：`DockerHandle.stop()` 在 Docker 自身的 `--rm` 自动回收尚未完成时调用 `docker rm --force`，被守护进程拒绝，导致 teardown 被错误上报为失败。
- **进展信号**：已有针对性修复 PR，建议维护者加速评审以进入下个补丁版本。

### 🟢 轻量：CI Runner 命名空间不一致
- 已通过 PR [#4058](https://github.com/qwibitai/nanoclaw/pull/4058) 闭合处理，不计入活跃 bug。

---

## 6. 功能请求与路线图信号

今日直接提出"新功能"诉求的 PR 仅 #2459 一条，但**该 PR 已被关闭**，因此从治理角度看：

- **语音转写通道（whisper.cpp 本地化）**：需求曾长期存在（#2459 提案），但关闭后需观察是否有替代实现（如同源 #2317 的姊妹路径）。若仍无任何 headway，建议在路线图 issue 中显式标记为 `needs-design` 或 `declined` 以避免重复造轮。
- **基础设施侧"自动恢复"诉求**：Issue #4056 的本质诉求是"宿主/容器失败后系统应当自愈"，这与社区对自治 Bot 平台的期望一致，可视为一条隐性的功能/可靠性路线信号——后续或衍生出"启动时数据库健康自检"等扩展任务。

---

## 7. 用户反馈摘要

今日所有新开与流转的条目**评论数均为 0**，无法从 GitHub 端提炼真实用户的口述痛点。可观察的间接信号如下：

- **mshirel（Issue #4056 报告者）**：通过精确的 SQLite 错误码（`SQLITE_READONLY`）定位到"无人值守场景下的恢复路径缺失"，反映出**至少有一批用户将 NanoClaw 部署在需要长期自愈的环境中**（VM / 边缘节点 / 弱运维容器云），而非本地玩具式部署。
- **musashinm（PR #4057 作者）**：能识别 `--rm` 自动回收与 `docker rm --force` 的时序竞争，说明贡献者画像偏**有 Docker / 容器运行时实战背景**，对仓库质量是积极信号。

> 提示：缺乏 Discord、Slack 等下游社区的一手反馈。建议在下次日报中补全非 GitHub 渠道的反馈采集。

---

## 8. 待处理积压

| 条目 | 类型 | 挂起时长 | 提醒事项 |
|---|---|---|---|
| [PR #2459](https://github.com/qwibitai/nanoclaw/pull/2459) | Feature | **约 148 天**（2026-05-13 → 2026-10-08 才关闭） | 已关闭但需复盘：长期挂起后被关闭的功能型 PR，是否应在 SLA（如 60 天）内触发 maintainer 决策？建议维护者沉淀一份"超期 PR 处理规程"。 |
| [Issue #4056](https://github.com/qwibitai/nanoclaw/issues/4056) | Bug | 新开 | 当前**无 assignee、无 fix PR**。鉴于其严重程度（只读态永久死锁），建议维护者在 48 小时内挂上 `priority: high` 标签并指派 owner。 |
| [PR #4057](https://github.com/qwibitai/nanoclaw/pull/4057) | Bug fix | 新提交 | 待评审状态，建议与 #4056 合并排期，作为下一个小版本（patch release）的核心候选。 |

---

### 项目健康度速评
- **代码流入**：✅ 正常（修复 + 治理 PR 均有）
- **社区互动**：⚠️ 偏低（GitHub 端近零评论，需补 Discord 等渠道数据）
- **故障响应**：⚠️ 关注（1 条严重 bug 暂无 owner）
- **治理纪律**：✅ 提升（CI Runner 命名空间规则落地）
- **发版节奏**：➖ 持平（今日无 release）

**综合判定**：项目处于**稳态迭代期**，基础设施层加固方向正确，但需对 #4056 这类高严重度无 owner 议题保持警惕，避免其滑入积压队列。

---

*本日报基于 GitHub 公开数据自动汇总生成，所有链接均指向 `nanocoai/nanoclaw` 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期**: 2026-10-09
**项目**: [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 在过去 24 小时内呈现"PR 集中提交、零关闭"的活跃但搁置状态。社区贡献者（尤其是 [vernonstinebaker](https://github.com/vernonstinebaker)）一次性提交了 3 个面向核心链路（流式调用、推理模型、Discord 心跳）的功能性 PR，新增 1 个文档补充与 1 个 TLS/HTTPS 兼容性增强。**Issues 端完全静默（0 新开、0 关闭）**，所有 PR 均处于待审状态且尚无评审评论或点赞，整体处于"代码先行、讨论滞后"的开发节奏。

---

## 2. 版本发布

无新版本发布。最近一次发版情况未在本次数据中体现，建议维护者确认是否需要推进版本节奏以积压等待中的特性。

---

## 3. 项目进展

今日没有 PR 被合并或关闭，但有 **5 个新提交处于 OPEN 状态等待审阅**，从提交内容看，NullClaw 在以下几个方向上取得实质推进：

| 方向 | PR | 关键进展 |
|---|---|---|
| 流式工具调用 | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 解耦原生 tool-call 与流式回调，使支持流中原生工具调用的 Provider 可正常触发 |
| 推理模型支持 | [#1050](https://github.com/nullclaw/nullclaw/pull/1050) | 新增 `reasoning_mode` 配置项，让 Qwen3/GLM/R1 等纯推理响应能被正确识别 |
| Discord 心跳可靠性 | [#1049](https://github.com/nullclaw/nullclaw/pull/1049) | 修正按 sleep 计数推进 deadline 的错误，改用墙钟时间 |
| HTTPS 兼容性 | [#1051](https://github.com/nullclaw/nullclaw/pull/1051) | 新增 `NULLCLAW_CA_BUNDLE` 环境变量，解决最小根文件系统下系统 CA 扫描失败 |
| 文档/MCP 集成 | [#1052](https://github.com/nullclaw/nullclaw/pull/1052) | 增加 Parallel Search MCP 可选示例，零密钥开箱 |

> 评估：5 个 PR 均涉及真实痛点（推理模型静默失败、Discord 后台进程心跳漂移、精简容器 TLS），代码层面有实质推进，**项目整体在"协议完整性"和"生产稳定性"两条线上稳步向前**，但缺少维护者审阅闭环，建议尽快进入评审流程。

---

## 4. 社区热点

今日所有 5 个 PR 的 `评论` 与 `👍` 字段均为 `undefined` / `0`，**社区尚未形成讨论热点**。从潜在影响面排序：

- 🔥 **[#1050 reasoning_mode](https://github.com/nullclaw/nullclaw/pull/1050)** — 直接解决推理模型 `finish_reason=length` + `content:null` 被错误判为失败的行业普遍痛点，预期会吸引大量使用 Qwen3/DeepSeek-R1 类模型的用户关注。
- 🔥 **[#971 原生工具调用解耦](https://github.com/nullclaw/nullclaw/pull/971)** — 解除流式场景下的能力阉割，是 agent 框架核心特性升级；该 PR 自 6 月开放，今日再次活跃更新，存在长期挂起风险。
- 📝 **[#1052 Parallel Search MCP 文档](https://github.com/nullclaw/nullclaw/pull/1052)** — 由外部贡献者 [georgeatparallel](https://github.com/georgeatparallel) 提交，反映 NullClaw 在 MCP 生态集成上的吸引力。

> 维护者建议：主动 @ 社区核心用户或发起 review request，可显著加快 PR 流转速度。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | PR 状态 | 链接 |
|---|---|---|---|
| 🟠 **高** | Discord 心跳线程以 sleep 计数推进 deadline，受 OS timer coalescing 影响漂移，导致连接静默断连 | ✅ 已有 fix PR 待审 | [#1049](https://github.com/nullclaw/nullclaw/pull/1049) |
| 🟡 **中** | 推理模型（Qwen3/GLM/R1）在推理耗尽 token 时返回 `content:null`，被识别为失败而非有效响应 | ✅ 已有特性 PR 待审 | [#1050](https://github.com/nullclaw/nullclaw/pull/1050) |
| 🟡 **中** | 在精简 rootfs（Android 沙箱、distroless 容器）下 `std.http` 懒扫描系统 CA 失败，所有 HTTPS 请求 TLS 层报错 | ✅ 已有 fix PR 待审 | [#1051](https://github.com/nullclaw/nullclaw/pull/1051) |
| 🟢 **低** | 流式回调挂载时强制关闭原生工具调用，导致能力受限 | ✅ 已有重构 PR 待审 | [#971](https://github.com/nullclaw/nullclaw/pull/971) |

> 今日没有新报告的独立 Issue，**所有已知稳定性问题均已有对应修复路径**，关键在于评审与合并节奏。

---

## 6. 功能请求与路线图信号

虽然没有显式的 feature request Issue，但从 PR 内容可以推断社区关切的方向：

1. **MCP 生态可发现性** — [#1052](https://github.com/nullclaw/nullclaw/pull/1052) 表明用户期望 NullClaw 与 MCP 服务（如 Parallel Search）有"零摩擦"接入，预计官方文档站或 README 会扩展 MCP examples 板块。
2. **推理模型一等公民** — [#1050](https://github.com/nullclaw/nullclaw/pull/1050) 暗示维护者已将 reasoning 模型纳入正式支持矩阵，路线图信号清晰。
3. **生产级部署兼容性** — [#1051](https://github.com/nullclaw/nullclaw/pull/1051) 表明容器化、Android 端、轻量部署场景需求上升，CA/HTTPS 故事需要补齐。

> 预计 **下一版本**（若近期发版）很可能合并 #971、#1049、#1050 三项核心能力升级。

---

## 7. 用户反馈摘要

Issues 端零活跃，无新评论可提炼。但从 PR 描述中可还原真实使用场景与痛点：

- **"推理模型用户"**：希望系统能正确区分"思考耗尽 token"与"生成失败"，避免误判为请求失败 ([#1050](https://github.com/nullclaw/nullclaw/pull/1050))。
- **"Discord bot 运维者"**：背景进程下心跳丢失导致连接静默死亡 ([#1049](https://github.com/nullclaw/nullclaw/pull/1049))。
- **"容器/边缘部署用户"**：Android 沙箱、scratch 镜像里 TLS 完全不可用，需要覆盖机制 ([#1051](https://github.com/nullclaw/nullclaw/pull/1051))。
- **"MCP 集成尝鲜者"**：希望用最少配置接入 Web Search / Fetch 类工具 ([#1052](https://github.com/nullclaw/nullclaw/pull/1052))。

---

## 8. 待处理积压

| 风险等级 | 项目 | 积压时长 | 链接 | 备注 |
|---|---|---|---|---|
| 🔴 **高** | PR #971（原生 tool call 流式支持） | **约 3 个月**（创建于 2026-06-29） | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 已两次更新但始终未获评审，长期挂起 |
| 🟡 **中** | 5 个新 PR 均 0 评论 | 1 天 | 全部 | 缺少维护者首轮反馈 |

> 🚨 **维护者提醒**：[#971](https://github.com/nullclaw/nullclaw/pull/971) 是当前积压最久的 PR，涉及 agent loop 核心改动，建议优先安排评审以释放贡献者积极性。

---

### 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 贡献活跃度 | ⭐⭐⭐⭐ | 5 个高质量 PR 同日提交 |
| 维护响应度 | ⭐⭐ | 0 条评审/合并，存在积压风险 |
| 社区参与度 | ⭐⭐ | Issues 与 PR 评论双双为零 |
| 代码质量信号 | ⭐⭐⭐⭐⭐ | PR 描述完整，含 Problem/Change/Summary 结构 |
| **综合** | **⭐⭐⭐ (3.5/5)** | 开发动能充足，闭环偏弱 |

---

*报告生成时间：2026-10-09 | 数据源：GitHub API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-10-09**
**数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 在过去 24 小时内呈现**低强度但主题聚焦**的活跃态势：共产生 2 条新 Issue 与 2 条 PR 更新，**全部处于 Open 状态，无任何合并/关闭动作，也无新版本发布**。社区关注点高度集中于两个方向——一是基于昨日 benchmark 的失败模式分类（自动化诊断），二是围绕 **Sendblue iMessage/SMS 扩展**的提案与配套实现同步推进。整体来看，项目处于「提案 → 实现」的中间阶段，需要维护者介入以推进合并节奏。

---

## 2. 版本发布

**无新版本发布。** 建议关注下次发布是否会将 Sendblue 扩展或 Jev tool-selection 能力纳入。

---

## 3. 项目进展

**今日无 PR 合并/关闭**，项目净推进量为 0。但有两项实质性工作正在评审中：

- **[PR #8119](https://github.com/nearai/ironclaw/pull/8119)** — `feat(loop-host): opt-in turn-start tool selection with a Jev classifier`
  规模：XL，风险：medium，scope 涉及 docs 与 dependencies，由新贡献者 CjS77 提交。
  该 PR 在模型首次调用前由分类器预测可能需要的延迟工具，从而避免一次 `tool_search` 往返。该能力若合并，将显著降低首轮延迟并改善工具可用性。
- **[PR #8127](https://github.com/nearai/ironclaw/pull/8127)** — `feat: add Sendblue iMessage and SMS extension`
  由 lookevink 提交，与今日新开的 [Issue #8130](https://github.com/nearai/ironclaw/issues/8130) 提案配套，完整实现了 Sendblue 集成（手机配对、认证 webhook、终端回复、DM 目标持久化），并把 API 凭证保留在 host 端。

---

## 4. 社区热点

虽然今日评论数均为 0，但话题本身的关注度集中：

- **[Issue #8130](https://github.com/nearai/ironclaw/issues/8130)** + **[PR #8127](https://github.com/nearai/ironclaw/pull/8127) — Sendblue iMessage/SMS 集成**
  这是今日最明确的话题。同一作者在 48 小时内先提提案、再提交完整实现，属于「提案 + PR 捆绑式推进」。诉求清晰：**在不暴露用户凭证的前提下，为 host 增加原生 iMessage/SMS 通道**。这种模式往往能加速合并，但仍需维护者从安全边界、依赖许可证、扩展接口一致性三方面把关。
- **[PR #8119](https://github.com/nearai/ironclaw/pull/8119)** — 另一关注焦点
  作为 XL 级改动，它触及循环宿主（loop-host）的核心控制流，属于需要核心维护者亲自评审的范畴。

---

## 5. Bug 与稳定性

严格意义上的「Bug 报告」今日无新增。但 [Issue #8129](https://github.com/nearai/ironclaw/issues/8129) — **Daily ironclaw failure taxonomy — 2026-10-08** 提供了重要的稳定性信号：

- **officeqa 套件出现 25 个 non-pass 任务**，作者判断**绝大多数属于模型质量问题**（DeepSeek-V4-Flash 导航行为），而非框架缺陷。
- 评估：**低严重度**，因为它揭示的是上游模型行为，不是 IronClaw 自身的回归。
- **是否有修复 PR：** 否，且本就不需要框架侧修复；但建议维护者将该报告纳入趋势追踪，连续多日若 non-pass 数上升则需进一步诊断。

---

## 6. 功能请求与路线图信号

| 功能请求 | 来源 | 已有实现 | 纳入下一版本的概率 |
|---|---|---|---|
| Sendblue iMessage/SMS 扩展 | [Issue #8130](https://github.com/nearai/ironclaw/issues/8130) | [PR #8127](https://github.com/nearai/ironclaw/pull/8127) ✅ | **高** — 提案与实现同时成熟 |
| turn-start 工具预选（Jev 分类器） | [PR #8119](https://github.com/nearai/ironclaw/pull/8119) | 同 PR | **中等** — XL 改动需核心维护者评审 |

**信号解读：**「host-owned credentials」+「可选扩展」是当前产品路线的明确锚点。Sendblue 扩展如果通过，将成为继现有对话/回复生命周期之后的第一个第三方通道扩展，可能树立后续扩展（WhatsApp、Telegram、RCS 等）的参考实现。

---

## 7. 用户反馈摘要

由于今日 Issue/PR 评论数均为 0，缺乏直接的社区文本反馈。可从议题摘要中提炼的间接信号如下：

- **使用场景：** 企业/个人用户希望将 IronClaw 作为统一消息入口，覆盖 iMessage/SMS 等私域通道（来自 [Issue #8130](https://github.com/nearai/ironclaw/issues/8130)）。
- **安全偏好：** 用户明确希望凭证保留在 host 端，不上传或外泄（来自 [Issue #8130](https://github.com/nearai/ironclaw/issues/8130)）。
- **性能期望：** 长上下文会话中希望避免多余的 `tool_search` 往返（来自 [PR #8119](https://github.com/nearai/ironclaw/pull/8119)）。
- **满意度指标：** 暂无负面反馈；自动化失败分类报告（[#8129](https://github.com/nearai/ironclaw/issues/8129)）表明项目已建立自我观测能力，是成熟度的正向信号。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 已开放天数 |
|---|---|---|---|---|
| PR | [\#8119](https://github.com/nearai/ironclaw/pull/8119) | opt-in turn-start tool selection with a Jev classifier | 2026-09-29 | **10 天** |
| PR | [\#8127](https://github.com/nearai/ironclaw/pull/8127) | add Sendblue iMessage and SMS extension | 2026-10-06 | 3 天 |

**提醒：**
- [PR #8119](https://github.com/nearai/ironclaw/pull/8119) 已开放 **10 天**，且为新贡献者的 XL 级提交，是**积压最久、最需要维护者介入**的条目。建议安排评审或给出明确反馈以降低贡献者流失风险。
- [PR #8127](https://github.com/nearai/ironclaw/pull/8127) 与 [Issue #8130](https://github.com/nearai/ironclaw/issues/8130) 形成自然闭环，维护者可一并审阅。

---

### 维护者行动建议（汇总）

1. **优先评审 PR #8119** —— 已积压 10 天且涉及核心控制流，新贡献者体验关键。
2. **统一审阅 Sendblue 提案（#8130）+ 实现（#8127）** —— 评估安全边界与扩展 API 一致性。
3. **跟踪失败分类趋势** —— 将 [Issue #8129](https://github.com/nearai/ironclaw/issues/8129) 类日报接入 CI 趋势看板。
4. **发布节奏** —— 当前无版本发布，建议在下一次合并窗口集中整合 Sendblue 扩展与 Jev 分类器。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-09

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> 统计周期：2026-10-08 ~ 2026-10-09 (UTC)

---

## 1. 今日速览

LobsterAI 仓库过去 24 小时内 **没有 Issue 动态、没有版本发布**，唯一的活跃信号来自 PR 通道：共记录到 **20 条 PR 变动**（14 条已关闭 / 6 条仍处于 OPEN 状态），呈现明显的"**新鲜 PR 快速结算 + 历史 stale PR 大批量清理**"双轨特征。其中真正属于本轮开发窗口的"新提交"仅有 3 条（#2815、#2814、#2813），均在 10 月 8 日当日创建并当日关闭；其余 11 条关闭均为 2026 年 3 月累积的 stale PR 由机器人或维护者集中清理。整体活跃度可判定为 **「中低强度冲刺 + 仓库治理」**，主线功能仍在持续打磨，但社区诉求端（Issues）处于静默期，需关注是否有 Issue 收集机制缺失的可能。

---

## 2. 版本发布

⏸ 今日无新 Release。距离上一次版本发布的具体内容需参照 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)，本日报数据中未包含版本号相关字段。

---

## 3. 项目进展

### 3.1 本轮新提交并已关闭的 PR（核心增量）

| PR | 标题 | 领域 | 价值评估 |
|---|---|---|---|
| [#2815](https://github.com/netease-youdao/LobsterAI/pull/2815) | fix(library): skip deleted artifact dirs when watching and purge expired missing items | library / main | 🔧 **稳定性修复**。用户每次启动 LobsterAI 都会因 Library 模块监听已删除目录而刷屏 `[Library] Unable to watch an indexed artifact directory. Error: ENOENT`，日志堆积 53 行 / 启动。本 PR 从根上跳过失效路径并定时清理过期条目。 |
| [#2814](https://github.com/netease-youdao/LobsterAI/pull/2814) | feat(cowork): trace LLM requests and show per-turn usage | cowork / openclaw / renderer | 🚀 **可观测性增强**。Cowork 每轮回复展示真实积分消耗，可下钻查看模型请求、Token、缓存命中率、Trace ID；引入 W3C Trace ID 贯穿客户端、服务端与账本日志。 |
| [#2813](https://github.com/netease-youdao/LobsterAI/pull/2813) | feat(office): show slide thumbnails pane by default with compact collapsible header | office / artifacts | 🎨 **体验优化**。PPT 编辑器侧栏从固定 184px 改为可折叠，缩略图区与正文分布更合理，消除横向滚动条遮挡。 |

### 3.2 3 月 stale PR 集中清理（仓库治理）

以下 11 条 PR 均在 2026-10-08 被关闭，距首次提交已半年以上，大多带有 `[stale]` 标签：

- [#566](https://github.com/netease-youdao/LobsterAI/pull/566) – IM Settings I18n 缺失补全
- [#599](https://github.com/netease-youdao/LobsterAI/pull/599) – 修复智谱 GLM-4.7 等模型连接测试误报
- [#603](https://github.com/netease-youdao/LobsterAI/pull/603) – Cowork 输入框 `/` 唤起技能选择
- [#647](https://github.com/netease-youdao/LobsterAI/pull/647) – 修复 `continueSession` 重复错误消息
- [#649](https://github.com/netease-youdao/LobsterAI/pull/649) – IM 添加 POPO 配置文档链接
- [#697](https://github.com/netease-youdao/LobsterAI/pull/697) – Cowork 消息回滚 + 编辑重生成
- [#749](https://github.com/netease-youdao/LobsterAI/pull/749) – `ToolCallGroup` / `AssistantMessageItem` / `ThinkingBlock` 加 `React.memo`
- [#762](https://github.com/netease-youdao/LobsterAI/pull/762) – 自定义模型 API 格式新增"自动检测"
- [#768](https://github.com/netease-youdao/LobsterAI/pull/768) – Opik 可观测性集成（Settings 新增 Observability 标签）
- [#788](https://github.com/netease-youdao/LobsterAI/pull/788) – 定时任务迁移去重（closes #775）
- [#790](https://github.com/netease-youdao/LobsterAI/pull/790) – 移除导出密钥硬编码密码，改由用户自设

📌 **解读**：本次清理动作非常关键——它意味着 LobsterAI 的 **stale bot 已经启用** 并触达 3 月初的存量 PR。维护者可能已在 GitHub 侧配置了 stale 策略（典型为 60 天无活动自动标记 / 关闭）。这是项目治理走向成熟的一个积极信号。

⚠️ **注意**：由于所有关闭 PR 的 `merged` 状态字段未在数据中给出，无法确认 11 条 stale PR 是被 **合并** 还是被 **直接关闭未合并**。从语义上看 "stale bot auto-close" 更可能未合并，建议维护者跟进核查这批 PR 中是否含有应纳入但被误清的实质性贡献（特别是 #599 模型连接测试修复、#647 错误去重、#788 定时任务修复、#790 安全相关等高价值项）。

---

## 4. 社区热点

本轮数据中所有 PR 的 `评论数 = undefined`、`👍 = 0`，**原始数据不支持真实社区热度排行**。以下结合 **主题覆盖度** 和 **跨模块影响面** 给出主观热度评估：

| 排名 | PR | 主题 | 讨论潜力 |
|---|---|---|---|
| 🥇 | [#2814](https://github.com/netease-youdao/LobsterAI/pull/2814) | Cowork LLM 用量可观测 + Trace 链路 | 高 — 触达"积分扣费透明度"长期用户疑问 |
| 🥈 | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | MCP stdio / `shell.openExternal` 安全加固 | 高 — 安全相关，但已停滞 1 个月以上 OPEN |
| 🥉 | [#2815](https://github.com/netease-youdao/LobsterAI/pull/2815) | Library 启动日志噪音 | 中 — 几乎所有重度用户都会遇到 |

📌 **诉求分析**：用户最关心三件事——**积分花在哪了**（#2814 命中）、**日志干净度**（#2815 命中）、**安全边界**（#2590 命中）。这恰好构成 LobsterAI 走向企业级落地的三大障碍。

---

## 5. Bug 与稳定性

| 严重度 | 标题 | 链接 | 状态 |
|---|---|---|---|
| 🟠 中 | Library 启动时持续输出 ENOENT 错误（每条目一行） | [#2815](https://github.com/netease-youdao/LobsterAI/pull/2815) | 已有 fix PR，状态 CLOSED（需确认是否合并） |
| 🟠 中 | `continueSession` 失败时重复推送两条错误消息 | [#647](https://github.com/netease-youdao/LobsterAI/pull/647) | 已有 fix，stale 关闭，**疑被误清** |
| 🟠 中 | 智谱 GLM-4.7 / 类 OpenAI 兼容协议模型"测试连接"误报失败 | [#599](https://github.com/netease-youdao/LobsterAI/pull/599) | 已有 fix，stale 关闭，**疑被误清** |
| 🟠 中 | 定时任务 SQLite → OpenClaw 迁移在瞬时网关错误后会产生重复任务 | [#788](https://github.com/netease-youdao/LobsterAI/pull/788) (closes [#775](https://github.com/netease-youdao/LobsterAI/issues/775)) | stale 关闭，**需复核** |
| 🔴 高 | MCP stdio 子进程命令 / 参数无 shell 元字符校验；renderer 提供的 URL 无协议白名单即传给 `shell.openExternal` | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | **仍 OPEN，无 fix 合入**，距今已逾 38 天 |
| 🟢 低 | 导出 API Key 时使用硬编码密码 `lobsterai-APP` | [#790](https://github.com/netease-youdao/LobsterAI/pull/790) | stale 关闭，**疑被误清**——此为安全相关建议密切关注 |

📌 **结论**：今日并无新的 Bug 报告（Issue 通道沉寂），但 **9 月初就提出的高危 MCP 安全加固 PR #2590 仍 OPEN**，且属于"执行第三方命令"的高敏感面，**建议维护者优先评估**。

---

## 6. 功能请求与路线图信号

由于 Issues 端今日零活跃，信号全部来自 PR 通道，可以观察到以下趋势：

### 6.1 已具备雏形的能力（值得在 Release Notes 中重点宣传）

- **Cowork 交互完善**：斜杠命令（#603）、消息回滚 / 编辑重生成（#697）、书签收藏系统（#725 OPEN）、用量 Trace（#2814）、去除重复错误（#647）——围绕"对话可治理"已形成完整闭环
- **Settings 智能化**：API 格式自动检测（#762）、连接测试误报修复（#599）、导出密码用户自设（#790）
- **可观测性**：Opik 集成（#768）+ Trace ID 串联（#

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-10-09

## 1. 今日速览

Moltis 项目今日活跃度较低，仓库在过去 24 小时内仅有 2 条 Issue 动态（1 条新开、1 条已关闭），PR 与版本发布均为零，整体处于"低活跃维护期"状态。值得关注的亮点是昨日关闭的 **#1177**（Vault 凭证库解锁/恢复接口缺失身份认证的 CWE-306 安全漏洞），这是一项高严重度的安全修复闭环；同时收到 **A2Agent** 模型网关方发起的接入合作询问 **#1296**，或预示生态集成通道正在拓展。项目整体可视为"安全态势改善、社区接入试探中"的阶段，未观察到大规模代码改动或版本节奏。

## 2. 版本发布

本周期（2026-10-09）无新版本发布，无需展开版本说明、破坏性变更或迁移提示。

> 建议：维护者可参考 #1177 的安全修复口径，在下一次发版前确认是否在 CHANGELOG 中明确标注安全加固条目，以方便依赖方评估升级。

## 3. 项目进展

过去 24 小时内无 PR 合并或关闭，未观察到面向用户的代码层面的推进。

但若把窗口轻微放宽至昨日（2026-10-08），可记录一项关键闭环：

- **#1177 已关闭** — 由 [Practice100101](https://github.com/moltis-org/moltis/issues/1177) 于 2026-07-30 提交的安全漏洞报告（Vault Unlock / Recovery 端点缺认证），经历约 70 天后被关闭。结合 Issue 模板中要求填写会话上下文等校验项，可能意味着仓库已补齐认证保护或对风险做出确认。建议维护者在关闭后追加一条简短说明（已修复 / 已缓解 / 不复现），以提升后续审计可追溯性。

## 4. 社区热点

由于今日 Issue 评论与点赞均为 0，最受关注的话题以**新讨论热度**衡量而非传统的互动量：

- **#1296 [新开] Test an A2Agent profile through Moltis provider setup**
  - 作者：A2agent-ai ｜ 创建时间：2026-10-09
  - 链接：<https://github.com/moltis-org/moltis/issues/1296>
  - 关注度：⭐ 0 / 💬 0
  - 内容摘要：A2Agent 团队（A2agent-ai）是 OpenAI / Anthropic 兼容的模型网关方，希望在 Moltis 独特的 `moltis-providers` 抽象层下验证一条最小可行的接入路径（首选自定义 endpoint，备选 provider preset）。
  - 诉求分析：这是一条典型的 **B2B 集成接入咨询**，体现了上游生态对 Moltis provider 体系的关注。如果 Moltis 团队提供清晰的"自定义 endpoint"模板，将显著降低新网关/中转服务的接入摩擦，对长期生态扩张有正面信号。

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高（安全） | [#1177](https://github.com/moltis-org/moltis/issues/1177) | Vault Unlock/Recovery Endpoints Missing Authentication (CWE-306) | 已关闭（2026-10-08） | 未在公开数据中显示 |

详细说明：

- **#1177（CWE-306 认证缺失）** — CWE-306 指"关键功能缺少对用户身份的认证"，常见于 admin/恢复类端点，可能允许未授权访问敏感凭证。Issue 关闭本身是好消息，但当前日报数据未披露伴随 PR。建议维护者在该 Issue 下补充：
  - 修复所引用的 commit / PR 链接
  - 影响的版本范围与建议升级版本
  - 缓解措施（如暂时通过反向代理加鉴权）
  
  这对于依赖方做安全评估至关重要，也避免社区因"静默修复"而产生不信任感。

今日**未出现新提交的崩溃、回归或功能异常报告**。

## 6. 功能请求与路线图信号

**显式功能请求 / 集成意向**

- **#1296 — A2Agent Profile 接入路径验证**（[链接](https://github.com/moltis-org/moltis/issues/1296)）
  - 这不是传统意义上的"功能请求"，而是一项**生态接入合作信号**。如果 Moltis 团队确认支持 "自定义 endpoint" 即足够，将不必扩展 provider preset，意味着工作量可控。
  - **是否纳入下一版本**：存在较高概率。若文档侧能在 `moltis-providers` 中补充"自定义 OpenAI 兼容 endpoint"小节（甚至只需 README 一段），即可兑现接入路径，无需发版或仅发布 patch 版本。

**隐式信号**

- #1177 的安全修复闭环可能反向推动"凭证库操作审计日志"成为下一个用户/合规诉求点，目前尚无相关 issue 提出，可作为路线图的潜在观察项。

## 7. 用户反馈摘要

由于今日 Issues 评论数均为 0，无法提炼到详细的用户对话情绪。以下是从 Issue 文本中读取的**结构性观察**：

- **#1296（A2agent-ai）**：语气专业、建设性，明确说明"先尝试最小路径（自定义 endpoint），不够再讨论预设"，体现合作方希望降低 PR/Merge 门槛的典型心态。➡ **痛点**：provider 文档化程度可能不充分，新接入方需要先与维护者对话才能确认可行路径。➡ **满意度信号**：尚未发生交互，无满意/不满意判定。
- **#1177（Practice100101）**：使用了规范的 bug 模板（含 Preflight Checklist、最新版本检查、是否包含会话上下文等），是**高质量安全报告**的范本。➡ **痛点**：Vault 端点长期处于"无鉴权"状态，社区在 70 天后才看到闭环，速度较慢。

整体来看，今日**没有来自终端用户的功能吐槽或报错求助**，社区反馈量处于低水位。

## 8. 待处理积压

基于当前可见数据，需要维护者关注的项目包括：

1. **#1296（待响应）** — 新接入咨询，等待维护者答复"自定义 endpoint 是否为最低支持路径"。**链接**：<https://github.com/moltis-org/moltis/issues/1296>
   - 提醒：延迟响应可能让外部团队将 Moltis 视为"接入成本不明"的项目，建议在 3 个工作日内给出明确答复。
2. **#1177 关闭后未补公开说明** — 虽然已关闭，但 Issue 评论/正文尚未补充修复细节，是**沟通层面**的待办事项。**链接**：<https://github.com/moltis-org/moltis/issues/1177>
3. **PR 流水线空载** — 已连续一段时间无 PR 活动（过去 24 小时为 0），建议维护者确认是否有内部仓库或私有分支在并行迭代，并适时将变更回流入主分支以保持社区可见度。

---

**总体健康度评分（主观）**：⭐⭐⭐☆☆（3 / 5）
- 优点：关键安全漏洞已闭环、出现新生态集成信号。
- 不足：版本节奏停滞、PR 流水线无活动、新 Issue 响应尚未启动。

> 报告数据范围：2026-10-08 ~ 2026-10-09（UTC，基于 GitHub Issue/PR 时间戳），由 AI 智能体与个人 AI 助手开源项目分析师自动生成。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-10-09

> 数据来源：`agentscope-ai/QwenPaw`（标题沿用社区对 CoPaw 的旧称 / 当前仓库别名）
> 报告窗口：过去 24 小时（基于 2026-10-08 ~ 2026-10-09 的活动）

---

## 1. 今日速览

CoPaw 项目今日整体**活跃度处于高水平**，Issues 通道 28 条更新（13 关闭 / 15 仍在流转），PR 通道 36 条（25 待合并 / 11 已关闭）。当前主线版本为 **v2.2.2-beta.4**，围绕该 Beta 的回退问题集中爆发——"页面加载失败"、"crypto.randomUUID 崩溃"、"设置页布局错乱"等高优先级 Bug 几乎全部针对 Beta 4 报告，其中 `crypto.randomUUID` 与 LAN/Tailscale HTTP 场景相关的问题 (#8073 / #8147) 已通过 #8146 在当日被合入修复。社区反馈集中在**聊天记录丢失、上下文压缩、长会话追溯**三个长期痛点（#8134 单条评论已达 10），维护者响应速度良好，但仍有 25 个 PR 在排队等待评审。

---

## 2. 版本发布

无新版本发布。当前仍在 Beta 阶段的 **v2.2.2-beta.4** 仍处于安装验证收尾期，相关跟踪 Issue #8053 尚未关闭。

---

## 3. 项目进展

### 当日已合并 / 关闭的关键 PR

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| **#8146** | `fix(console): support terminal UUIDs on HTTP origins` | 修复 #8147 与 #8073 —— Chat 页在 LAN/Tailscale HTTP 源上因 `crypto.randomUUID()` 在非安全上下文不可用导致崩溃。引入 `crypto.getRandomValues()` 回退方案 | https://github.com/agentscope-ai/QwenPaw/pull/8146 |
| **#8144** | 同上修复的重复提交 | （同日关闭） | https://github.com/agentscope-ai/QwenPaw/pull/8144 |
| **#8141** | `fix(qwenpaw-data): keep UI host types package-local` | 解耦 QwenPaw-Data 插件的发布构建与主仓库 console 源码树，TypeScript 编译期找不到 `react` 的问题被解决 | https://github.com/agentscope-ai/QwenPaw/pull/8141 |
| **#7380** | `test: cut suite wall clock 41% and drop zero-value tests` | 测试套件运行时间下降 41%，1,064 个集成测试贡献了原 85% 的耗时 | https://github.com/agentscope-ai/QwenPaw/pull/7380 |
| **#8054** | `test(e2e): audit and harden full browser coverage` | 修复 E2E 中伪装通过的多条用例：会话置顶校验、PTY 中断竞态、Files/Heartbeat/Models 等过时选择器 | https://github.com/agentscope-ai/QwenPaw/pull/8054 |
| **#8083** | `feat(tools): add view_audio tool for audio understanding` | 补全多模态工具矩阵，与 `view_image` / `view_video` 对齐 | https://github.com/agentscope-ai/QwenPaw/pull/8083 |
| **#7089** | `ci(datapaw): add a standalone version-driven release pipeline` | 为 datapaw 插件搭建独立版本驱动的发布流水线（参考 `creator-release.yml`），解决 #6940 遗留的"插件未纳入主仓库发布节奏"问题 | https://github.com/agentscope-ai/QwenPaw/pull/7089 |

### 整体评估

项目在"测试基础设施完善 + Console 漏洞修复 + 新工具补齐"三条线上同步推进。当日关闭的 11 个 PR 中，有 6 个对**测试/CI 稳定性**有实质贡献，1 个补齐**音频理解**能力，2 个修复**beta 4 暴露的 Console 崩溃**。这表明维护团队正在为 v2.2.2 正式版"清扫门庭"。

---

## 4. 社区热点

按评论数与情绪强度排序：

### 🔥 #8134 —— 历史最热
- **标题**：[bug] 聊天记录和大模型上下文窗口关联
- **作者**：happieme ｜ **评论**：10 ｜ 👍：0
- **链接**：https://github.com/agentscope-ai/QwenPaw/issues/8134
- **热度解析**：用户情绪激烈（标题中出现"什么时候能修理好？？？？？？？？？"），认为聊天记录丢失与 LLM 上下文窗口不应耦合。这与昨日被关闭的 #8131（同一作者的近似主题）、更早的 #7884 是**同一个长期抱怨**，社区已演变为"反复提交"。维护者目前**未在 PR 端给出明确修复分支**。

### #8120 —— Beta 4 用户普遍遭遇
- **标题**：[bug] 频繁 页面加载失败
- **作者**：henryliuwork ｜ **评论**：3
- **链接**：https://github.com/agentscope-ai/QwenPaw/issues/8120
- 报告人称"几台设备都遇到"，配合 #8073、#8109，可形成 Beta 4 的"页面加载稳定性"问题簇。

### #8116 —— need-info 标签
- **标题**：[invalid, need-info] message queue 消息队列的严重问题
- **作者**：happieme ｜ **评论**：2
- **链接**：https://github.com/agentscope-ai/QwenPaw/issues/8116
- 用户投诉消息队列"半年没修好"，并被自动打上 `need-info` 标签维护者求复现步骤——**这是一个维护者需要主动澄清的信号**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 简述 | 是否有对应 Fix PR |
|---|---|---|---|
| 🔴 P0 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | V2.2.2.beta4 LAN 访问本地服务时 Chat 页打不开 | ✅ [#8146](https://github.com/agentscope-ai/QwenPaw/pull/8146) 当日合并 |
| 🔴 P0 | [#8147](https://github.com/agentscope-ai/QwenPaw/issues/8147) | 切换 Agent 后 Console 崩溃：`crypto.randomUUID is not a function` | ✅ [#8146](https://github.com/agentscope-ai/QwenPaw/pull/8146) 同一修复 |
| 🔴 P0 | [#8109](https://github.com/agentscope-ai/QwenPaw/issues/8109) | 流错误导致子 Agent 会话 100% 全部丢失 | ❌ **无对应修复 PR，待关注** |
| 🟠 P1 | [#8148](https://github.com/agentscope-ai/QwenPaw/issues/8148) | Reasoning fold / 压力微压缩在声明大 context_size 的模型上**永远不触发** | ❌ 无 PR |
| 🟠 P1 | [#8122](https://github.com/agentscope-ai/QwenPaw/issues/8122) | 2.2.2 beta4 Windows 桌面端设置界面布局错乱 | ❌ 无 PR |
| 🟠 P1 | [#8123](https://github.com/agentscope-ai/QwenPaw/issues/8123) | Daily Paper 在模型摘要被截断时整批失败，无逐篇重试 | ❌ 无 PR |
| 🟠 P1 | [#8125](https://github.com/agentscope-ai/QwenPaw/issues/8125) | llama.cpp `has_update()` 静默回滚用户已安装 runtime（第 3 次复发，#7633 25 天无 PR） | ❌ **长期复发** |
| 🟠 P1 | [#8129](https://github.com/agentscope-ai/QwenPaw/issues/8129) | 图像缩放丢失 EXIF orientation，导致模型收到的图方向错误 | ❌ 无 PR |
| 🟡 P2 | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) | WebView2 下 SVG 宽高收到非数字 `"small"`，日志错误刷屏 | ❌ 无 PR |
| 🟡 P2 | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | 页面加载失败高频出现 | ❌ 无 PR |
| 🟡 P2 | [#8116](https://github.com/agentscope-ai/QwenPaw/issues/8116) | 消息队列误投递、跨会话误标记 | ❌ 被打 need-info 待补充 |

**数据洞察**：今日关闭的 13 个 Issues 中，**#8073 / #8147 / #8022 / #7883 / #8042 / #8064 / #8046 / #8022 / #8074** 这 9 个是先前 Beta 测试期累积的 P0/P1 修复，平均获回应时间约 9–17 天。其中 **DeepSeek provider 系列 Bug**（#7883、#8022、#8042、#8064）一次性集中关闭，说明 #7621 之后的 provider 适配补丁工作终于落地。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 实现概率 | 关联 PR |
|---|---|---|---|
| [#8015](https://github.com/agentscope-ai/QwenPaw/issues/8015) | Skill / Plugin 市场源可配置（自托管、内网、离线） | 🟢 高 —— 直接命中企业部署场景，与 v2.2.2 路线图相关 | — |
| [#8142](https://github.com/agentscope-ai/QwenPaw/issues/8142) | 从 Tauri2 切换到 Electron，提升**麒麟 V10 桌面**等 Linux 发行版兼容性 | 🔴 低 —— 切换桌面框架属于大手术，但国产化适配是合理诉求 | — |
| [#8139](https://github.com/agentscope-ai/QwenPaw/issues/8139) | 新增 You.com 作为 keyless `web_search` 提供方 | 🟡 中 —— 易实现，且符合"多源可选"趋势；用户公开声明利益相关 | — |
| [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | 增加 `view_audio` 内置工具（补齐多模态） | ✅ 已实现 | [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) 当日关闭 |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | skill-pool 下载改为可取消的后台任务（含进度） | 🟢 高 | [#8055](https://github.com/agentscope-ai/QwenPaw/pull/8055) Under Review，size/L |
| [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | 在 Appearance & language 下增加官方"reduced effects"档位 | ✅ PR 已就绪 | [#8137](https://github.com/agentscope-ai/QwenPaw/pull/8137) Open，size/M |
| [#8140](https://github.com/agentscope-ai/QwenPaw/issues/8140) | 更新 README | 🟢 高（社区协作型） | — |
| [#8132](https://github.com/agentscope-ai/QwenPaw/pull/8132) | 新增发布评估工作流与 QwenPaw Index | — 项目级性能基础设施 | Open，size/XXXL |

**信号汇总**："离线/内网部署"、"Linux 国产化"、"性能分级开关"是社区提出的三个**路线图方向**，都已有 PR 在排队，最有可能在 v2.2.3 或 v2.3 命中。

---

## 7. 用户反馈摘要

### 真实痛点
- **聊天记录的"无感蒸发"**（#8134 / #7884 / #8131）：用户对压缩策略与可见历史的脱节极度不满。同一作者 happieme 在 20 天内重复提交 3 次，反映**没有收到任何维护者解释为什么历史被删、保留多久**。
- **多设备一致性**：#8120 报告人 "几台设备都遇到"，但仍无 PR 接手——Beta 4 的多设备稳定性被用户先于维护者发现。
- **流式错误即会话蒸发**（#8109、#7884）：这是产品级体验问题，子 Agent 流错误 100% 丢失内容被定性为"严重"。
- **DST / 时区**（#8046）：`_process_local_tz()` 解析出固定偏移而不是携带 DST 规则的 zone，导致 transcript 时间戳偏移。属低频但专业用户痛点。

### 满意信号
- 用户 Moonlit-Pages（#8064）、makeryuan-MK（#7883）、djj532（#8022）等在 Issue 中提供了**完整的复现日志、模型 ID、环境版本**，是高质量反馈。
- 用户 passionworkeer（#8046）对源码级别的细节给出建议，质量极高，社区技术氛围良好。

### 情绪风险
- 作者 happieme 在 #8134 中连续使用 **8 个问号 + 多个感叹号**，投诉语气激烈；维护者若不再做一次正式回应，存在用户流失风险。

---

## 8. 待处理积压（提醒维护者关注）

| 长期未响应项 | 类型 | 等待时长 | 链接 |
|---|---|---|---|
| **#8125** | llama.cpp `has_update()` 第三次复发，关联 #7633 25 天无 PR | ~10 天 | https://github.com/agentscope-ai/QwenPaw/issues/8125 |
| **#7633** | 同问题根因 Issue | 25 天+ | https://github.com/agentscope-ai/QwenPaw/issues/7633 |
| **#8015** | Skill/Plugin 市场源可配置（自托管 / 内网） | 10 天 | https://github.com/agentscope-ai/QwenPaw/issues/8015 |
| **#7931** | PR `feat(chat): add durable paginated transcript history`（XXXL） | 17 天 | https://github.com/agentscope-ai/QwenPaw/pull/7931 |
| **#8055** | PR `fix(skills): offload pool download copy`（L，Under Review） | 9 天 | https://github.com/agentscope-ai/QwenPaw/pull/8055 |
| **#8072** | PR `fix(e2e): isolate stateful browser tests`（XL） | 8 天 | https://github.com/agentscope-ai/QwenPaw/pull/8072 |
| **#7869** | PR `fix(providers): carry the session header on connection checks`（S） | 21 天 | https://github.com/agentscope-ai/QwenPaw/pull/7869 |
| **#7762 / #7865 / #7723 / #7807 / #7868** | 5 个 first-time-contributor PR（控制台流恢复、错误事件、模块懒加载、缓存） | 16–27 天 | （合集） |
| **#8116** | 消息队列问题维护者打 need-info 后未跟进 | 2 天 | https://github.com/agentscope-ai/QwenPaw/issues/8116 |

### 维护者建议优先级排序

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期：2026-10-09**
**项目：github.com/zeroclaw-labs/zeroclaw**

---

## 一、今日速览

ZeroClaw 仓库今日活跃度处于**高位**：过去 24 小时有 17 条 Issue 更新、50 条 PR 更新，且无任何关闭动作，呈现典型的"高吞吐 / 阻塞待审"特征。PR 队列已累积 43 条待合并，明显高于平时，提示 PR 评审流水线可能出现积压。从结构看，多个 v0.8.6 release-gate 标记的 PR 已就位（#11629、#11308、#11305、#11090），表明团队正密集筹备下一个补丁版本；同时多份 S1 级（workflow blocked）缺陷今日浮出水面，主要集中在 Telegram channel、ZeroCode TUI 与 config 内存泄漏路径，整体维护压力偏向"稳定性收口"而非"新功能扩张"。

---

## 二、版本发布

**今日无新版本发布。**

不过有 4 个 PR 已显式标记 `release:v0.8.6`，结合项目节奏，预计 v0.8.6 发布窗口在近期：

| PR | 类型 | 内容 |
|---|---|---|
| [#11629](https://github.com/zeroclaw-labs/zeroclaw/pull/11629) | fix(log) | config patch 通知持久化后退出（避免丢失） |
| [#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308) | feat(tools) | 类型化内置工具清单与分级管理（XL） |
| [#11305](https://github.com/zeroclaw-labs/zeroclaw/pull/11305) | docs(tools) | 工具分级与保留核心集说明 |
| [#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090) | docs(runtime) | 运行时组合契约设计文档 |

**迁移注意事项**（基于 PR #11265 的变更面）：若 v0.8.6 一并合入 CLI 用户名册密码生命周期命令，需关注 `security.password_auth` 是否从 inputs 转为 authorization inputs 的语义变化，相关合并提交 `9707c30981` 已做名称调和。

---

## 三、项目进展（已关闭 PR）

过去 24 小时共有 7 条 PR 关闭，主要由 **IftekharUddin**、**drbparadise** 推动，多数为测试稳定化与文档沉淀：

- **[#11349](https://github.com/zeroclaw-labs/zeroclaw/pull/11349)**（daemon/rpc 测试）：在 RPC drain reload 测试中重新持有广播钩锁，修复了 #10621 测试迁移时遗漏的旧守卫。当前 PR 解决的是测试"看似通过实际假阳"的风险。
- **[#11395](https://github.com/zeroclaw-labs/zeroclaw/pull/11395)**（rpc 测试）：将 6 个针对 HTTP 500 的提示词分发测试跳过 provider retries，避免不可靠的 wiremock 抖动污染信号。
- **[#11380](https://github.com/zeroclaw-labs/zeroclaw/pull/11380)**（skills 测试）：让创建者缓存时间戳变得确定，告别依赖短睡眠得到不同 mtime 的脆弱做法。
- **[#11396](https://github.com/zeroclaw-labs/zeroclaw/pull/11396)**（hardware 测试）：管道持有者测试改为从 fixture 应答读取超时时间，修复 macOS 端约 5% 失败率的偶发用例。
- **[#11305](https://github.com/zeroclaw-labs/zeroclaw/pull/11305)**（docs）：为 93 个工具名称授予 tier，并保留核心集说明，作为 #11308 的前置文档。
- **[#11090](https://github.com/zeroclaw-labs/zeroclaw/pull/11090)**（docs）：运行时组合契约提案，依赖 #11092（已合并于 09-28），是 #11174 的设计前置。
- **[#11469](https://github.com/zeroclaw-labs/zeroclaw/pull/11469)**（安全修复，risk:high）：识别 Unix 主机上的 null 设备 (`/dev/null`)，此前 `cfg!(windows)` 误判会让 *nix 上 null 设备的"已解析可读"检查出现奇怪差异。

> 整体看，今日的"项目进展"主要发生在**测试信号可信度**与**设计文档沉淀**两端。围绕工具分级（#11308）与运行时组合（#11090）的两块设计已具备进入 v0.8.6 的成熟度。

---

## 四、社区热点

按评论数量与关注度排序：

| 排名 | 议题 | 链接 | 评论 | 信号 |
|---|---|---|---|---|
| 1 | [#8692 维护者决策队列跟踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | 15 条 | RFC 与设计议题的官方分流入口，长期高活跃 |
| 2 | [#9887 多模态大图降采样](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 5 条 | 当前被标 `parking-lot`，缺乏 owner 推动 |
| 3 | [#11594 firejail_args 未生效](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | 3 条 | 高优配置项 silent-no-op，信任风险 |
| 4 | [#9592 路由切换后探测 stale 配置](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | 3 条 | 状态 in-progress，已在推进 |
| 5 | [#11586 ZeroCode 失败会话变绿](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | 3 条 | TUI 健康指示灯误导 |
| 6 | [#8691 ADR 清单跟踪器](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | 2 条 | 决策记录审计面 |
| 7 | [#11254 A2A 协议 crate RFC](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 2 条 | 跨边界重构，跨职能决策 |
| 8 | [#10863 Telegram 语音重试阻塞](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) | 2 条 | S1 生产事故，含 PR #10640 复现链 |

**背后诉求分析**：本月社区讨论的热点明显集中在三块 —— **"信任面/可观测性"**（决策跟踪、ADR 清单）、**"Channel 稳定性"**（Telegram 限速/重试问题爆发）、**"TUI 体验"**（ZeroCode 视觉与队列行为），这三块共同指向"ZeroClaw 越来越接近生产可用，但最后一公里的错误信号、回放信息、限流尊重仍需补课"。

---

## 五、Bug 与稳定性

按严重度倒序排列：

### S1 — workflow blocked（生产阻塞）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#11614](https://github.com/zeroclaw-labs/zeroclaw/issues/11614) | `map_key_sections` 在 `Box::leak` 上每次调用泄漏 schema path，守护进程内存持续增长 | ❌ 暂无 |
| [#11615](https://github.com/zeroclaw-labs/zeroclaw/issues/11615) | Telegram 发送路径忽略 429 `retry_after`，立即重试复合限流并可能丢消息 | ❌ 暂无 |
| [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) | 被拒语音更新被 Telegram 轮询无限重试，阻塞后续消息 | 在 [#10640](https://github.com/zeroclaw-labs/zeroclaw/pull/10640) 中有相关复现/PR |

### S2 — degraded behavior（降级可用）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | `firejail_args` 在 schema 中暴露但运行时未挂到调用 | ❌ 暂无 |
| [#9592](https://github.com/zeroclaw-labs/zeroclaw/issues/9592) | 模型路由保存新 provider 别名后探测仍读旧 `self.config` | 🔄 in-progress |
| [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode ask_user 在不回复的情况下被清除，600s 超时 | ❌ 暂无 |
| [#11618](https://github.com/zeroclaw-labs/zeroclaw/issues/11618) | ZeroCode 在 `SESSION_BUSY` 拒绝时静默丢失排队消息 | ❌ 暂无 |

### S3 — minor（轻微）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | ZeroCode 重启后失败会话变绿 | ❌ 暂无 |

### 业务正确性

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | 成本账本丢弃 provider `total_tokens`，含 reasoning token 的 Gemini 等被少算 | ❌ 暂无 |
| [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | 同回合重复"已批准 shell"调用触发 `repeated prompt-required` 并中止 ACP 会话 | ❌ 暂无 |

> **维护者警示**：今日新报的 5 条 S1/S2 中，没有任何一条已挂上 fix PR。如果 v0.8.6 release-gate 计划近期发版，建议优先纳入 **#11614 内存泄漏** 与 **#11615 Telegram 重试** 两项作为补丁基线。

---

## 六、功能请求与路线图信号

| 需求 | 来源 | 现状 | 路线概率 |
|---|---|---|---|
| 大图降采样而非整图丢弃 + 0 关闭多模态限额 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | `parking-lot` 状态，缺乏 owner | 中（标签多模态/risk:high，但被搁置） |
| ZeroCode transcript 显示消息时间 | [#11620](https://github.com/zeroclaw-labs/zeroclaw/issues/11620) | [#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622) 已开 PR | 高 |
| 按实例/主机抑制重复 plugin egress 拒绝记录 | [#11626](https://github.com/zeroclaw-labs/zeroclaw/issues/11626) | ❌ 暂无 PR | 中 |
| 命令白名单支持 glob 匹配 | [#11598](https://github.com/zeroclaw-labs/zeroclaw/pull/11598) | 已开 PR（XS/S） | 高 |
| A2A 协议 crate（`zeroclaw-a2a`） | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | RFC 阶段，跟踪 #3566 雨伞 | 中高（依赖 #9106/#7763/#8274 已落地） |
| 工具分级与保留核心集 | [#11308](https://github.com/zeroclaw-labs/zeroclaw/pull/11308) | XL PR，release-gate:v0.8.6 | 高 |
| CLI 名册密码全生命周期命令 | [#11265](https://github.com/zeroclaw-labs/zeroclaw/pull/11265) | XL PR，do-not-merge | 待评审 |

**路线信号**：v0.8.6 候选集中于"工具体系重整（分级 + 清单）"与"运行时文档沉淀"，下一版本大概率围绕这两条主线。ZeroCode 时间戳可视化和命令白名单 glob 也具备合并到同窗次的体积优势。

---

## 七、用户反馈摘要

- **#8692 跟踪器活跃 15 条评论**：维护者决策队列是事实上的"瓶颈过滤器"，议题频繁在 accepted / blocked / parking-lot 之间游走，社区关注点在"决策透明可追溯"，而非纯技术细节。
- **#10863（含 PR #10640）**：用户 RO-mix 报告 Telegram 频道**真实生产事故**，表明 ZeroClaw 在被用作 bot 值班流水线的场景下，Telegram 限流与重试行为必须按 RFC 规范遵循 `retry_after`。
- **#11615 同期再现同类问题**：短短数日连续两条 Telegram 429 重试相关问题，强烈暗示该路径缺少统一治理，需作为**系统性缺陷**而非个别 bug。
- **#11614 内存泄漏**：仓库 onboarding/config 路径，每调用一次泄漏一次 Box，运维用户显然已经在守护进程长跑场景下感受到。
- **#11612 行为安全测试反馈**：DefuzeX 团队借 KUMA SDK 报出，agent loop 在已批准命令重跑时的中止逻辑偏严格，可能影响"幂等重复运行"的工作流。
- **#11613 成本账本**：当用户使用 Gemini（thinking tokens 隐藏在 `total_tokens`）时，每次都被少计费，财务/可观测性双输，社区诉求是"先记账完整，再考虑显示"。
- **#11620 / #11622**：用户希望看出消息**何时**发生，因为同一会话中自动化任务、用户追加和长工具调用经常交错，目前屏幕无法排序。

整体情绪：**对 ZeroClaw 的能力侧满意度较高，但对其"最后 5%" 的错误信号、限流尊重和资源管理侧显著焦虑。**

---

## 八、待处理积压

### Issue 侧

| Issue | 标题 | 创建时间 | 风险信号 |
|---|---|---|---|
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 多模态大图降采样 | 2026-08-10 | **已 60 天，且处于 `parking-lot`**，标签 risk:high 却无 owner |
| [#8692](https://github.com/zer

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*