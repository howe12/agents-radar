# OpenClaw 生态日报 2026-09-27

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-27 03:05 UTC

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

**报告日期**：2026-09-27
**数据范围**：过去 24 小时（截至 2026-09-27）
**数据源**：[openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 项目今日呈现**高强度 issue 流入 + 大量 PR 提交**的双高态势：过去 24 小时共产生 **500 条 Issue 更新**（475 新开/活跃、25 已关闭）和 **500 条 PR 更新**（366 待合并、134 已合并/关闭），但**无新版本发布**。PR 合并/关闭率约 26.8%，处于活跃但产出节奏偏紧的状态。讨论焦点高度集中在 **2026.9.5 / 2026.9.6 两个版本的回归与稳定性问题**——尤其是 Gateway 内存泄漏、插件源捕获（plugin source capture）磁盘压力、update/migration 路径失败以及多通道（WhatsApp / Feishu / Discord / Telegram）消息丢失等 P0 级问题。维护者 steipete（疑似核心 maintainer）单日提交了 20+ 个 PR，覆盖 sessions / gateway / code-mode / scripts / refactor 等多个领域，显示项目正在密集进行 2026.9.x 之后的**热修复与重构并行阶段**。**项目健康度评估：中等偏紧**——用户侧的崩溃/回归报告持续涌入，但 PR 端有系统性的应对动作。

---

## 二、版本发布

**今日无新版本发布。**

上一可识别版本仍为 2026.9.5 / 2026.9.6 体系（多份 Issue 中提及），从 Issue 流判断，团队当前正处于"先修问题、再发新版本"的密集修复阶段，未发布新的 release tag。

---

## 三、项目进展

今日关闭/合并的 PR 数量可观（134 条），以下是**对项目稳定性与功能性影响最显著的几项**：

### 已合并/关闭的重要 PR

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| [#159328](https://github.com/openclaw/openclaw/pull/159328) | perf(sessions): keep lists responsive during large history reads | 解决大转录页阻塞 session 列表刷新（SQLite reader worker 共享问题） | [↗](https://github.com/openclaw/openclaw/pull/159328) |
| [#159286](https://github.com/openclaw/openclaw/pull/159286) | perf(gateway): warm session rows before reporting ready | 修复 Gateway ready 后 session 列表立即卡顿 | [↗](https://github.com/openclaw/openclaw/pull/159286) |
| [#159221](https://github.com/openclaw/openclaw/openclaw/pull/159221) | fix: stop repeating HTTP 400 requests with transient inner codes | 减少对 `rate_limit_exceeded` 等瞬态码的盲目重试 | [↗](https://github.com/openclaw/openclaw/pull/159221) |
| [#159307](https://github.com/openclaw/openclaw/pull/159307) | test(qa-lab): avoid executable launcher fixture races | 修复 QA Lab 中 ETXTBSY 风格的 fixture 竞争 | [↗](https://github.com/openclaw/openclaw/pull/159307) |
| [#157577](https://github.com/openclaw/openclaw/pull/157577) | fix(test): reap detached children in isolated Vitest runs | 在容器 PID=1 下使用 Podman init 收割僵尸子进程 | [↗](https://github.com/openclaw/openclaw/pull/157577) |

### 重点待合并 PR（仍 OPEN）

- [#155356](https://github.com/openclaw/openclaw/pull/155356) **fix(gateway): restore scheduled CLI execution with protected secret egress** — P1，security-boundary，关闭 [#154278](https://github.com/openclaw/openclaw/issues/154278)。
- [#147746](https://github.com/openclaw/openclaw/pull/147746) **fix(config): retain producer ownership during read compensation** — XL，重在解决异步配置校验期间的环境变更被意外回滚。
- [#151608](https://github.com/openclaw/openclaw/pull/151608) **fix(daemon): inspect registered Gateway services accurately** — XL，让 doctor/status/update 正确发现 Windows 注册的真正服务而非默认 launcher。
- [#158992](https://github.com/openclaw/openclaw/pull/158992) **fix: spawned workers take over the chat you were talking in** — Telegram / Feishu / LINE 路由接管问题（supersedes #157975），P1。
- [#158257](https://github.com/openclaw/openclaw/pull/158257) **ci: move PR verification to hosted runners** — XL，CI 成本与容量优化。
- [#159190](https://github.com/openclaw/openclaw/pull/159190) **perf(memory): bound workspace provenance and dreaming reads** — 减少 memory-core 工作区扫描范围。
- [#158473](https://github.com/openclaw/openclaw/pull/158473) **fix: skip retained deleted agent stores during plugin cleanup** — 修复 [#157645](https://github.com/openclaw/openclaw/issues/157645) 导致的关停失败。
- [#158724](https://github.com/openclaw/openclaw/pull/158724) **fix(codex): use stock broker network profile** — security-boundary，调整 Codex 网络配置。
- [#159360](https://github.com/openclaw/openclaw/pull/159360) **fix(node): paired nodes fail to restart after setup code expires** — security-sensitive-changed，修复配对节点 setup code 过期后无法重启。
- [#159348](https://github.com/openclaw/openclaw/pull/159348) **improve: reduce Gateway blocking during image delivery** — 将图片元数据写入从事件循环迁移到 worker。

### 整体评估

维护者正在**密集进行 sessions / gateway / update / memory / codex / channel 六大领域的热修复与重构**。项目整体向前推进明显，但合入节奏（约 27%）相对 500 条 PR 总量仍显滞后，多个 P0/P1 fix PR（如 #155356、#158992）仍处"ready for maintainer look"或"needs proof"阶段，建议加快评审。

---

## 四、社区热点

### 评论数 Top 5 Issues（社区关注度最高）

1. **[#153257](https://github.com/openclaw/openclaw/issues/153257)** — "OpenClaw 2026.9.5 Turned a Stable Environment Into an 8-Hour Failure Recovery Session" — **41 评论**，P0，🦐 gold shrimp，2026.9.5 升级引发长时间故障恢复。**诉求**：呼吁维护者正视 9.5 升级路径的风险，并提供可靠的回滚/恢复流程。
2. **[#111897](https://github.com/openclaw/openclaw/issues/111897)** — "Two concurrent runs for the same session lane both complete and deliver duplicate/redundant replies" — **20 评论**，P1，🦪 silver shellfish。**诉求**：澄清与 #54488 的关系（"session lane starvation"），完善并发 lane 的最终派发语义。
3. **[#114612](https://github.com/openclaw/openclaw/issues/114612)** — "SQLite unbounded growth: memory_index_chunks + memory_embedding_cache tables have no retention policy" — **16 评论**，P2，🦞 diamond lobster。**诉求**：建立 retention/eviction 策略，避免长期部署磁盘爆满。
4. **[#157067](https://github.com/openclaw/openclaw/issues/157067)** — "Windows isolated cron setup passes an uncloneable environment Proxy" — **14 评论**，P1，🦞 diamond lobster。**诉求**：修复 native Windows 上 isolated AgentTurn cron 启动失败的 root cause。
5. **[#113306](https://github.com/openclaw/openclaw/issues/113306)** — "SQLite snapshot restore lacks end-to-end crash and identity guarantees" — **13 评论**，P2，🦞 diamond lobster。**诉求**：快照 restore 的持久性、目录创建与 identity guard 的真正原子保证。

### 共性诉求提炼

- **2026.9.5 → 2026.9.6 升级路径被多份 issue 反复点名**，社区对"无缝升级"已失去信心，急需一个**带回滚保证的 update 协议**。
- **session / lane 并发与去重**仍是高发讨论区，与 ACP、sessions_spawn、waits 多处行为耦合。
- **memory-core 数据生命周期**首次进入 Top 讨论，反映长期部署用户的真实痛点。

---

## 五、Bug 与稳定性

按严重程度排列的今日高优先级问题（按 P0 → P1 → P2 顺序）：

### 🔴 P0 级（崩溃/升级阻塞/数据丢失风险）

| Issue | 简述 | 是否有 fix PR | 链接 |
|---|---|---|---|
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 "global install swap" 失败（直接 npm install 成功），影响 2026.9.4→9.5 | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/156112) |
| [#157325](https://github.com/openclaw/openclaw/issues/157325) | 卡住的 agent-DB 资源导致所有 agent 回复失败，需重启 gateway | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/157325) |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | model-catalog worker 泄漏 `openclaw-plugin-build-*` 源捕获（1–3 GB/min） | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/156571) |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 2026.9.5 Gateway 启动耗时与启用插件数线性增长，120s budget 紧张 | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/155859) |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway 在 `plugin-doctor-post-session-state` 上 crash-loop，即便 `busyTimeoutMs=0` 也无法恢复 | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/157160) |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 在 V8 heap 外失控增长，触发 OOM 和 shutdown timeout | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/154812) |
| [#158114](https://github.com/openclaw/openclaw/issues/158114) | 中断的启动迁移导致 gateway 永久无法启动（"startup migration lease was lost"） | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/158114) |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | Gateway 关停步骤 `gateway-server-close` 偶发失败（"Worker environment inventory has closed"） | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/158126) |
| [#156424](https://github.com/openclaw/openclaw/issues/156424) | shared-state `audit_events` 索引损坏导致 gateway 瘫痪但进程仍存活 | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/156424) |
| [#154679](https://github.com/openclaw/openclaw/issues/154679) | 2026.6.5→9.5 升级被中断导致 doctor/repair 无法恢复 | 待跟进 | [↗](https://github.com/openclaw/openclaw/issues/154679) |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | 2026.9.4 `

---

## 横向生态对比

# 2026-09-27 个人 AI 助手/智能体开源生态横向对比分析

---

## 1. 生态全景

今日生态呈现"**头部承压、腰部修缮、尾部休眠**"的三层结构：**OpenClaw 与 ZeroClaw** 以 500/500 与 50/50 的双高吞吐领跑，但都陷入 P0 回归危机与版本停摆；**Hermes Agent / NanoClaw / NanoBot / LobsterAI** 处于稳定修缮期，PR 数量可观但合并节奏收紧；**PicoClaw / IronClaw / NullClaw / CoPaw / Moltis** 进入低活跃维护；**TinyClaw 与 ZeptoClaw** 24h 零活动。**13 个项目无一家发布新版本**——这是值得警惕的同步信号，反映出生态整体处于"修 bug > 发版本"的稳态压力测试阶段。共性痛点集中在**多通道稳定性、升级路径可信度、内存生命周期管理、Windows 桌面端一致性**四类。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PR（待合并/合并） | 今日 Release | 健康度评级 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（475/25） | 500（366/134） | ❌ | ⚠️ 中等偏紧 | 回归危机 + 密集热修 |
| **ZeroClaw** | 50（活跃/关闭混合） | 50（活跃/关闭混合） | ❌ | ⚠️ 中等偏紧 | 身份架构里程碑 + S0 积压 |
| **Hermes Agent** | 50（28/22） | 50（40/10） | ❌ | ✅ 中等 | 稳定收敛 + 架构 RFC |
| **NanoClaw** | 4（4/0） | 27（23/4） | ❌ | ⚠️ 中等偏紧 | Skill 爆发 + 升级回归 |
| **NanoBot** | 4 | 13（11/2） | ❌ | ✅ 中等 | 边界鲁棒性修缮 |
| **LobsterAI** | 6（0/6） | 10（1/0/9 stale 关闭） | ❌ | 🔴 偏低 | Stale 机器人清扫期 |
| **CoPaw** | 5（3/2） | 3（3/0） | ❌ | ✅ 中等 | 日常维护 |
| **PicoClaw** | 1（1/0） | 3（1/2） | ❌ | ⚠️ 偏低 | 低活跃 + stale PR 风险 |
| **NullClaw** | 0 | 5（5/0） | ❌ | ⚠️ 中等偏低 | 修复就绪 + 合并滞后 |
| **IronClaw** | 1（1/0） | 1（1/0） | ❌ | ⚠️ 偏低 | 维护空窗期 |
| **Moltis** | 0 | 1（1/0） | ❌ | ⚠️ 低 | 静默期 |
| **TinyClaw** | 0 | 0 | ❌ | 🔴 休眠 | 完全无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ | 🔴 休眠 | 完全无活动 |

> **数据洞察**：今日生态总吞吐约 **1125 条 Issue/PR 更新，但 0 个 Release tag**——版本节奏明显落后于代码提交节奏，是生态层面的共性压力。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与活跃度

OpenClaw 以 **500 Issue + 500 PR** 的双 500 吞吐占据绝对头部地位，是次席 ZeroClaw/Hermes Agent（各 50+50）的 **10 倍**。这一规模对应的不是简单的"用户更多"，而是**多通道网关 + 插件体系 + sessions 引擎 + migration pipeline** 的复杂架构导致的并发 bug 表面积。

### 3.2 与同类项目的核心差异

| 维度 | OpenClaw | ZeroClaw | NanoBot | Hermes Agent | NanoClaw |
|---|---|---|---|---|---|
| **架构重心** | 多通道 gateway + plugin 生态 | 身份/认证 + Memory | 学术派（HKUDS） | Authority/Refusal 语义层 | Skill 框架 |
| **维护者画像** | steipete 单核 + 社区 | JordanTheJet 单核 | HKUDS 团队 | Nous Research | barnuri 单核 |
| **典型 P0 痛点** | Gateway 内存泄漏、plugin 源捕获 | 子代理审批 fail-closed | Cron DST 错位 | Windows 升级 split-brain | Signal 密钥落盘、baileys 钉死漏洞 |
| **版本基线** | 2026.9.5/9.6（回归） | v0.8.4/0.8.5（停滞） | 频繁修缮 | v0.21.5+2441 | v2.4.0（升级退化） |

### 3.3 优势

- **覆盖通道最广**（WhatsApp / Feishu / Discord / Telegram / LINE / Slack），社区能反馈的边界场景最多；
- **核心维护者响应密度极高**（steipete 单日 20+ PR），即便回归危机也有可见的修复动作；
- **P0 问题被显式分级**（gold shrimp / silver shellfish / diamond lobster），社区情绪可视化程度领先。

### 3.4 风险

- **回归密度远超合并密度**（PR 合并率仅 26.8%），P0/P1 修复多滞留"needs proof"阶段；
- **2026.9.5/9.6 升级路径被多份 issue 点名**，用户对"无缝升级"已失去信心（Issue #153257 等 41 评论）。

---

## 4. 共同关注的技术方向

以下方向在多项目中**同时**出现，属生态级共识：

### 4.1 多通道（IM）稳定性——5 个项目共同痛点

| 项目 | 通道相关典型 Issue |
|---|---|
| OpenClaw | WhatsApp/Feishu/Discord/Telegram 消息丢失（多 P0） |
| ZeroClaw | WhatsApp `suppress_voice` 被忽略（#10922）、`create_room`/`invite_user` 缺位（#10977） |
| NanoClaw | Signal 私钥落盘（#2520）、baileys RC 漏洞钉死（#3941） |
| NullClaw | Discord bot 自循环（#1010） |
| NanoBot | Feishu 内部 checkpoint 泄露（#5903）、bot-to-bot 丢弃（#5929） |
| PicoClaw | QQ 通道协议滞后（#3394） |

**共识信号**："通道即产品"的现实下，**每个 IM 平台都有自己独特的协议陷阱**，通用抽象层（如 chat-sdk-bridge）成为分水岭。

### 4.2 升级/迁移路径可信度——4 个项目共性

| 项目 | 升级相关 issue |
|---|---|
| OpenClaw | 2026.9.4→9.5 `update` swap 失败（#156112）、6.5→9.5 中断无法修复（#154679） |
| NanoClaw | `/update-nanoclaw` 回归（#3943）、lockfile integrity 丢失（#3942） |
| Hermes Agent | macOS Terminal update 后 `/Applications` 过期（#52339） |
| ZeroClaw | v0.8.5 移除 token-driven 压缩，用户配置失效（#10780） |

**共识信号**：用户对"无痛升级"已不抱期望，**rollback 保证 + 幂等迁移协议**成为下一代个人 AI 助手的必备能力。

### 4.3 内存/Memory 生命周期——4 个项目

- OpenClaw：SQLite `memory_index_chunks` / `memory_embedding_cache` 无 retention（#114612）；
- NullClaw：归档副本被错误召回污染当前会话（#1005）；
- NanoClaw：`memory-core` 工作区扫描需 bounding（#159190 PR）；
- Hermes Agent：本地冷归档 RFC（#91005）。

**共识信号**：Memory 从"功能项"升级为"运维债"，长期部署用户最先触雷。

### 4.4 跨平台（Windows/macOS/Linux）一致性——3 个项目

- Hermes Agent：**80% 开放 Issue 集中在 Windows + 更新链路**，部分用户被迫回退 WSL；
- OpenClaw：Windows isolated cron 启动失败（#157067）、Windows 注册服务发现错位（#151608 PR）；
- ZeroClaw：Windows `ONLOGON` 弹出控制台窗口（#10991）、venv sys.path 残留（#123965）。

**共识信号**：macOS/Linux 一致但 Windows 失谐是**通用结构性矛盾**，远超个人 AI 助手单一项目的修复能力。

### 4.5 Cron / 调度引擎——3 个项目

- OpenClaw：Gateway 调度 CLI 受 secret egress 保护（PR #155356）；
- NanoBot：Cron 不感知 DST，跨时区错位 1 小时（PR #5922）；
- CoPaw：用户要求新增"直接执行脚本/Shell"任务类型（#4963，搁置 115 天）。

**共识信号**：Cron 从"基础组件"演化为"扩展瓶颈"，用户对运维自动化诉求强烈。

### 4.6 Provider/模型抽象——3 个项目

- ZeroClaw：Cheaper Inference 接入（#11103）、转录提供商级联（#10900）；
- NanoClaw：`/add-lean-tasks`（#3932）、`minimalContext` provider option（#3931）；
- OpenClaw：`model-catalog` 泄漏源捕获（#156571）。

**共识信号**："**便宜模型跑日常，贵模型跑难活**"的多档模型路由成为新基线。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 架构特征 | 关键差异化 |
|---|---|---|---|---|
| **OpenClaw

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-27

---

## 1. 今日速览

NanoBot 项目今日处于**高活跃开发期**，过去 24 小时共产生 4 条新 Issue 与 13 条 PR 更新，但**无新版本发布**。从 PR 提交节奏看，社区贡献者（尤其 2gg-bit 一人就贡献了 7 条 bug 修复 PR）正集中清理一批边界条件与跨平台兼容性问题；维护者侧重于 Feishu/Lark 通道的功能完善与 MCP/Linear 集成相关工作的收尾。整体而言，项目处于"修 bug 与扩功能并行"的状态，代码库健康度良好，但积压的待审 PR 数量较多（11 条 open），合并节奏有待加快。

---

## 2. 版本发布

⚠️ **无新版本发布**。建议关注 open PR 合并进度，预计下一版本将集中消化本周的 bug 修复批次。

---

## 3. 项目进展

今日有 2 条 PR 进入 closed 状态（具体合并与否需以 GitHub 实际状态为准）：

| PR | 标题 | 贡献者 | 意义 |
|---|---|---|---|
| [#5916](https://github.com/HKUDS/nanobot/pull/5916) | fix(mcp): load all pages of server tools before registration | KailBug | 修复 MCP 服务端 `tools/list` 分页加载不完整的问题，确保 `enabledTools` 中指定的工具始终可用 |
| [#5919](https://github.com/HKUDS/nanobot/pull/5919) | feat(linear): manage member access and simplify workspace connections | Re-bin | 在 WebUI 内提供 Linear 工作区的成员访问管理，避免每个成员单独交换配对码 |

**整体评估**：这两条 PR 推进了 MCP 集成稳健性和 Linear 协作便利性，属于"打基础"类型的进展。Feishu 通道的 bot-to-bot 消息支持（[#5930](https://github.com/HKUDS/nanobot/pull/5930)）已与对应 Issue [#5929](https://github.com/HKUDS/nanobot/issues/5929) 形成配对，预计短期内可进入审查。

---

## 4. 社区热点

按评论数排序的活跃议题：

1. **[#5908](https://github.com/HKUDS/nanobot/issues/5908) — WebUI 流式输出时显示实时 tokens/sec**（4 条评论，coinwh）
   - 用户痛点：流式生成时无法判断模型是否正常工作或卡死
   - 这是 WebUI 用户体验层面的高呼声需求，反映了社区对**透明度与可观测性**的诉求

2. **[#5903](https://github.com/HKUDS/nanobot/issues/5903) — Feishu 通道内部会话检查点消息泄露给用户**（3 条评论，lan5635）
   - 影响聊天产品体验的明显 bug，注释中提示已被标记为 `"_hidde..."`（隐藏字段）但仍实际下发
   - 涉及隐私与产品打磨，属于"应该尽快修复"类

**诉求分析**：社区当前主要关注两点——**WebUI 可观测性**（看到模型运行状态）和**通道质量**（Feishu 行为符合预期）。这两类诉求都偏用户体验侧，反过来说明核心 agent 引擎稳定性得到了认可。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（高优先级）
- **[PR #5922](https://github.com/HKUDS/nanobot/pull/5922)** — Cron 下次运行时间计算使用了非夏令时感知的时区对象
  - 影响所有未显式设置 `tz` 的定时任务，可能导致跨时区/跨夏令时错位 1 小时
  - **已有 fix PR**，由 2gg-bit 提交

### 🟡 P2（中优先级）
| 类型 | 链接 | 简述 | 是否有 fix |
|---|---|---|---|
| 通道 | [Issue #5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent 在 sudo 循环中卡死，单次 sudo 授权不足 | ❌ |
| 通道 | [Issue #5903](https://github.com/HKUDS/nanobot/issues/5903) | Feishu 内部会话标记泄露给用户 | ❌ |
| 通道 | [Issue #5929](https://github.com/HKUDS/nanobot/issues/5929) | Feishu 群组中丢弃 bot-to-bot 消息 | ✅ [PR #5930](https://github.com/HKUDS/nanobot/pull/5930) |
| 文件 I/O | [PR #5925](https://github.com/HKUDS/nanobot/pull/5925) | Windows 下 `write_file` 重复回车 / 隐式 CRLF | ✅ |
| 抓取 | [PR #5926](https://github.com/HKUDS/nanobot/pull/5926) | URL 大小写归一化导致不同路径被误判重复 | ✅ |
| 字符集 | [PR #5928](https://github.com/HKUDS/nanobot/pull/5928) | 邮件未知 charset 致 `LookupError` 中断轮询 | ✅ |
| Provider | [PR #5923](https://github.com/HKUDS/nanobot/pull/5923) | 图片 base64 非 ASCII 抛 `ValueError` 漏捕获 | ✅ |
| 调度 | [PR #5921](https://github.com/HKUDS/nanobot/pull/5921) | 已关闭的 `RotatingTextOutput` 仍能重写文件 | ✅ |
| 工具 | [PR #5920](https://github.com/HKUDS/nanobot/pull/5920) | 按 token 截断产生 `�` 替换字符（中文/Emoji） | ✅ |
| 工具 | [PR #5918](https://github.com/HKUDS/nanobot/pull/5918) | JSON Schema 联合类型参数被错误转换 | ✅ |
| 通道 | [PR #5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat 非数字 `file_size` 导致图片被丢弃 | ✅ |
| 后台 | [PR #5927](https://github.com/HKUDS/nanobot/pull/5927) | 通知评估器把字符串 `"false"` 当真值 | ✅ |

**整体观察**：今日 bug 高度集中在**边界字符（Unicode/CRLF/URL 大小写/字符集）**与**异常路径处理**两类问题，提示社区在补全鲁棒性测试覆盖。这与一个趋于成熟的项目特征一致——基础功能稳定后，关注点转向"看似能用但有暗坑"的细节。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 与现有 PR 的关联 | 纳入可能性评估 |
|---|---|---|---|
| WebUI 流式输出实时 tokens/sec | [Issue #5908](https://github.com/HKUDS/nanobot/issues/5908) | 无对应 PR | ⭐⭐⭐ 高（呼声明确，实现成本低） |
| Feishu 群组 bot-to-bot 消息 | [Issue #5929](https://github.com/HKUDS/nanobot/issues/5929) | ✅ [PR #5930](https://github.com/HKUDS/nanobot/pull/5930) 已就绪 | ⭐⭐⭐⭐ 极高（PR 同步提交） |
| Linear 工作区成员管理 | [PR #5919](https://github.com/HKUDS/nanobot/pull/5919) | 已 closed | ⭐⭐⭐⭐ 看具体合并结果 |

**信号**：Feishu 通道正在成为重点投入方向（本周 3 条相关议题），可能预示着项目对**国产 IM 平台适配**的优先级提升。

---

## 7. 用户反馈摘要

基于 Issue 评论与描述可提炼：

- **痛点一：流式生成不可观测** — 用户明确表达"无法判断模型是否正常工作或停滞"的焦虑，反映 WebUI 缺少**性能可视化层**
- **痛点二：内部状态泄露** — Feishu 用户对内部会话检查点被作为普通消息发出感到困惑，期望通道层做更严格的**消息分类过滤**
- **痛点三：sudo 授权周期不匹配 agent 行为** — 用户描述 agent 在达到最大迭代次数后会"执着于无法完成的命令"，暗示需要重新设计**授权生命周期**与**错误反馈回路**
- **积极信号**：bug 描述质量普遍较高（附有最小复现/根因分析），说明用户群体具备一定技术背景，项目的**用户-贡献者转化漏斗**运转良好

---

## 8. 待处理积压

截至发稿，**11 条 PR 处于待合并状态**，建议维护者优先关注：

1. **[PR #5922](https://github.com/HKUDS/nanobot/pull/5922)** — 唯一 P1，影响所有使用默认时区的 cron 调度任务
2. **[PR #5930](https://github.com/HKUDS/nanobot/pull/5930)** — 已与 Issue #5929 配对，等待审查
3. **[PR #5925](https://github.com/HKUDS/nanobot/pull/5925)** — Windows 文件写入回归，影响所有 Windows 用户
4. **[Issue #5924](https://github.com/HKUDS/nanobot/issues/5924)** — sudo 循环 bug 当前**无对应 fix PR**，需要维护者或社区认领

**风险提示**：2gg-bit 单日提交 7 条 PR 的高密度意味着维护者面临较重的 review 负担，建议采用批量合并或拆分 CI 检查的方式加快流转，避免贡献者积极性受挫。

---

> 📅 报告生成时间：2026-09-27
> 📊 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub API
> 🤖 由 AI 项目分析师自动生成

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-27**

---

## 1. 今日速览

Hermes Agent 今日继续保持高活跃度的工程迭代节奏，过去 24 小时共有 **50 条 Issues 更新（28 新开/活跃，22 关闭）** 与 **50 条 PR 更新（40 待合并，10 合并/关闭）**，Issue / PR 关闭率分别达到 44% 和 20%。今日工作重心集中在 **Desktop 应用兼容性、跨平台更新链路、Windows 安装升级稳定性** 以及 **agent/gateway 核心架构缺陷** 等方向。无新版本发布，代码变更主要落地在 main 分支上的热修与即将进入审查的修复。整体显示项目处于 **缺陷收敛 + 架构补强** 的稳态阶段。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版本仍为 `v0.21.5+2441`，主要变更在 main 分支以 PR 形式持续合入，预计在下一次常规发版时一并打包。

---

## 3. 项目进展

今日共有 **10 个 PR 已合并或关闭**，其中多数为对线上缺陷的快速修复，关键推进如下：

| PR | 标题 | 关键意义 |
|---|---|---|
| [#124713](https://github.com/NousResearch/hermes-agent/pull/124713) | fix(desktop): model snapshot adoption no longer strands catalog defaults behind a stale allowlist | 修复 Desktop 模型选择器在快照前后的 allowlist 兼容性问题，避免默认模型被冻结 |
| [#124276](https://github.com/NousResearch/hermes-agent/pull/124276) / [#115193](https://github.com/NousResearch/hermes-agent/pull/115193) / [#124095](https://github.com/NousResearch/hermes-agent/pull/124095) / [#123948](https://github.com/NousResearch/hermes-agent/pull/123948) | execute_code loop 哈希 / npm 版本探测 | 三连发的紧急修复，关闭长期卡住线上用户的多个 P1/P2 缺陷 |
| [#124486](https://github.com/NousResearch/hermes-agent/pull/124486) | fix(agent): let background delegation yield the parent turn | 修复后台 `delegate_task` 抢占父轮次的语义缺陷 |

整体推进：**Desktop 端 5 项 UI/UX 修复、agent 核心循环 3 项语义修复、install/update 链路 2 项跨平台修复**——项目在「让安装可用、让会话稳定」这条线上稳定收敛。

---

## 4. 社区热点

### 4.1 热度最高的 Issues

1. **[#95028](https://github.com/NousResearch/hermes-agent/issues/95028)** Hermes Authority Execution Layer（评论 13）— 维护者 andrexibiza 发起的元 Issue，明确指出 12 个分散问题本质上是 **同一个架构缺陷**，呼吁以统一的执行层授权架构解决。
2. **[#52339](https://github.com/NousResearch/hermes-agent/issues/52339)** Terminal 更新使 `/Applications/Hermes.app` 过期（评论 12）— macOS 用户长期遭遇的「分脑（split-brain）」状态。
3. **[#95750](https://github.com/NousResearch/hermes-agent/issues/95750)** Refusal Algebra —— 后果性操作的类型化语义（评论 9）。
4. **[#103410](https://github.com/NousResearch/hermes-agent/issues/103410)** TUI 实时压缩热重载崩溃（评论 9）。

### 4.2 热度最高的 PR

- **[#124692](https://github.com/NousResearch/hermes-agent/pull/124692)** 新增端到端 git smart-HTTP 升级测试套件
- **[#122081](https://github.com/NousResearch/hermes-agent/pull/122081)** P3 评级补丁集中清理：更新检查、Screen 拷贝、MCP 活性检测
- **[#121420](https://github.com/NousResearch/hermes-agent/pull/121420)** Desktop 端口宣告启动预算统一化
- **[#121603](https://github.com/NousResearch/hermes-agent/pull/121603)** 在线 updater PID 命名而非重入锁

### 4.3 诉求分析
- **跨平台一致性**仍是讨论焦点：macOS、Windows、Linux 三端 Desktop / 更新 / gateway 启动失败模式各异。
- **架构层语义收敛**诉求强劲：#95028、#95750 两份 RFC 已获多次引用，表明维护者认识到「以代数量化拒绝/授权」是替代布尔值长期债的关键。
- **测试覆盖**成为新热点：#124692 引入真实 git 远程的 e2e，是目前升级路径上的关键缺口。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（影响主链路，需紧急修复）

| Issue | 描述 | 修复 |
|---|---|---|
| [#80569](https://github.com/NousResearch/hermes-agent/issues/80569) (CL) | Windows Desktop 安装后出现重复启动项，update 后可能僵尸复活 | ✅ #124095 已合并 |
| [#119323](https://github.com/NousResearch/hermes-agent/issues/119323) (CL) | api_server 平台静默丢弃 `transform_llm_output` 内容 | ✅ 修复合入 |
| [#107685](https://github.com/NousResearch/hermes-agent/issues/107685) (CL) | Windows 自更新在携带自己修复的运行上报 FAIL | ✅ #123948 / #124095 已合并 |
| [#52339](https://github.com/NousResearch/hermes-agent/issues/52339) (CL) | Terminal 更新后 `/Applications/Hermes.app` 过期 | ✅ 修复合入 |

### 🟠 P2（已识别根因，但散落在多个文件）

| Issue | 描述 | 状态 |
|---|---|---|
| [#123109](https://github.com/NousResearch/hermes-agent/issues/123109) | Bootstrap gateway 被分类错误，自删 PID/lock | 无 PR |
| [#123463](https://github.com/NousResearch/hermes-agent/issues/123463) | Windows 严格 PID 校验误杀 online gateway | 无 PR |
| [#122425](https://github.com/NousResearch/hermes-agent/issues/122425) | managed env workspace 不同步、无 `install-stamp.json` | 无 PR |
| [#124318](https://github.com/NousResearch/hermes-agent/issues/124318) | Windows updater 自己产生的 gateway 进程对内不可见 | 无 PR |
| [#123344](https://github.com/NousResearch/hermes-agent/issues/123344) | 次级 managed env 缺 stamp → 持久 `vunknown` | 无 PR |
| [#123345](https://github.com/NousResearch/hermes-agent/issues/123345) | terminal `notify=true` 被验证器错误拒绝 | 无 PR |
| [#123965](https://github.com/NousResearch/hermes-agent/issues/123965) | Windows venv sys.path 残留 → Group Chat worker 死锁 | 无 PR |
| [#124654](https://github.com/NousResearch/hermes-agent/issues/124654) | `hermes update` 的 git fetch 忽略 `SSL_CERT_FILE` | 无 PR |

### 🟡 P3（影响体验）

| Issue | 描述 |
|---|---|
| [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) (OP) | TUI 外部上下文引擎 LCEngine 实时压缩崩溃 |
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) (OP) | kanban rate-limit 后 retry 成功但永远不被 dispatch 到 reviewer |
| [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) (OP) | terminal 背景提示文档错误（工具名应为 `process_manage`） |
| [#124582](https://github.com/NousResearch/hermes-agent/issues/124582) (OP) | memory tool replace 静默覆盖整条 |
| [#101638](https://github.com/NousResearch/hermes-agent/issues/101638) (OP) | kanban review lane 重提停在 parking 的卡片 |
| [#124687](https://github.com/NousResearch/hermes-agent/issues/124687) (OP) | TUI OSC-11 启动时皮肤闪烁（DEFAULT_THEME） |
| [#123343](https://github.com/NousResearch/hermes-agent/issues/123343) (OP) | httpx2 2.7.0 命中 PYSEC-2026-3844..3849 六个 CVE |

**累计今日**：`已修复 / 关闭 22 条 + 待修复开放 28 条`，其中 **80% 的开放 Issue 集中在 Windows 与更新链路**。

---

## 6. 功能请求与路线图信号

| Issue | 类型 | 当前状态 |
|---|---|---|
| [#91005](https://github.com/NousResearch/hermes-agent/issues/91005) (OP) | **Verified 本地冷归档**：为软归档逻辑会话提供可验证的本地冷存路径 | 需求清晰，已有 PR 雏形建议，是 sessions 体验补丁 |
| [#118156](https://github.com/NousResearch/hermes-agent/issues/118156) (CL) | Desktop 归档条目自动复活 | ✅ 已关闭，无需新特性 |
| [#124713](https://github.com/NousResearch/hermes-agent/pull/124713) | model snapshot adoption | ✅ 已合并 |
| [#124487 系列]**（架构）** | Authority Execution Layer / Refusal Algebra（#95028、#95750） | 当前为 RFC 阶段，维护者关注度高，**具备被纳入 v0.22 路线图的可能性** |

**信号**：用户对「冷归档 + 完整生命周期」「Desktop 恢复会话」「架构层语义收敛」的呼声清晰，前两项有望在下一 release window 合并。

---

## 7. 用户反馈摘要

### 7.1 真实用户痛点
- **macOS Desktop 与 CLI 升级错位**：用户在终端 `hermes update` 后发现 `/Applications/Hermes.app` 没变，导致日常使用 `hermes desktop` 启动陈旧二进制，多次反馈「重新安装也没用」。
- **Windows 用户痛感最强**：从 #80569、#107685、#103222、#123109、#123463、#124318、#123965 系列可见，Windows 端在「更新成功 + 实际可用」之间存在大量持续缺陷，部分用户被迫回退到 WSL 使用 CLI。
- **重复 session 无法清理**：#118216 揭示 ACP 会话永驻 `state.db` 导致 sidebar 越积越多。
- **group chat worker 不健康**：#123965 报告每次启动 Group Chat 都 5 次重启，用户已无力处理。

### 7.2 满意度信号
- `#124713` 合并后改善了 Desktop 模型选择器的快照统一；
- `#124717` 解决了硬删除会话在下一条入站消息上「复活」的困扰；
- 多名用户在 e2e 测试（#124692）下赞赏项目对真实路径的回归检测。

### 7.3 抱怨总结
> 用户最常说的词是 *split-brain*、*stale*、*can't update*、*returns forbidden*——几乎都集中在「更新链路不可信、跨端状态不同步」。

---

## 8. 待处理积压

**维护者需关注**的长期开放项：

| Issue / PR | 创建时间 | 风险 |
|---|---|---|
| [#119070](https://github.com/NousResearch/hermes-agent/issues/119070) | 9-22 | rate-limit → retry 成功后 dispatcher 永久阻塞，**核心调度语义**有缺陷 |
| [#122425](https://github.com/NousResearch/hermes-agent/issues/122425) | 9-25 | managed env workspace 与主检出漂移，**影响每多 manager 部署** |
| [#124318](https://github.com/NousResearch/hermes-agent/issues/124318) | 9-26 | 与 #123109 / #123463 高度耦合，**需要在同一个 sprint 内统一修** |
| [#123343](https://github.com/NousResearch/hermes-agent/issues/123343) | 9-26 | 6 个 CVE 命中还未升 pin（[deps]） |
| [#124582](https://github.com/NousResearch/hermes-agent/issues/124582) | 9-27 | memory tool replace **无警告的数据丢失** |
| [#124654](https://github.com/NousResearch/hermes-agent/issues/124654) | 9-27 | corporate proxy / `SSL_CERT_FILE` 升级即坏，**企业用户阻塞** |

这些应在下一次发布窗口前给出明确 owner 或合入短期 patch，以避免它们进入长期债。

---

**总评**：Hermes Agent 今日整体状态可用「**稳定收敛、架构蓄势**」概括。宏观问题（执行层授权、类型化拒绝语义）已经被维护者主动提起工程化方案；中观问题（Desktop / 更新链路）有切实合入；微观体验问题（UI 细节、文档、命名）由社区持续喂入。建议下一周期重点投入 **Windows 升级链路 e2e 覆盖** 与 **CVE 依赖修复**。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**报告日期：2026-09-27**
**数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度**偏低**。过去 24 小时内仅有 1 条新 Issue 提交、3 条 PR 状态更新（其中 2 条关闭、1 条仍标记为 stale 待处理），且**无新版本发布**。从议题内容看，QQ 通道相关问题再次成为用户关注焦点，而一个针对 Web UI 卡顿的修复 PR 已开放近一个月未获维护者响应，**社区响应存在积压风险**，建议维护团队尽快清理 stale 标记的 PR 以保持仓库健康度。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次的版本节奏请参考仓库 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 进行核对。

---

## 3. 项目进展

今日有 2 条 PR 被关闭，结合历史背景分析如下：

| PR | 标题 | 状态 | 分析 |
|---|---|---|---|
| [#3310](https://github.com/sipeed/picoclaw/pull/3310) | Feat/auto pr | 已关闭 | 提交说明仅为 "picoclanker did this"，疑似自动化机器人提交（picoclanker），质量与意图存疑，关闭属合理处置。 |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | 已关闭 | 来自 [aishannon](https://github.com/aishannon)，涉及 QQ 频道表情、语音/图片/视频/文件附件解析与回复能力。该 PR 创建于 2026-03-11，跨度逾 6 个月才被关闭，长期未推进说明 QQ 通道维护资源较为紧张。 |

**整体评估**：今日项目推进较为有限，未有实质性功能合并落地。QQ 通道附件解析能力是社区长期诉求（见 #3394），但相关 PR 已关闭而新 Issue 又再次提出，反映该方向存在需求未满足的缺口。

---

## 4. 社区热点

**今日互动量整体较低**（无评论、无 👍 反应），可关注的对象如下：

- 🔥 **[Issue #3394](https://github.com/sipeed/picoclaw/issues/3394)** – QQ 机器人接口已更新，但 QQ 聊天通道的接口似乎未同步更新
  - 用户 [qinglt](https://github.com/qinglt) 提出，外部 QQ 平台协议变动后，PicoClaw 的 QQ 通道适配存在滞后。
  - **诉求分析**：典型的"上游依赖变化"问题，属于生态适配需求，非代码 Bug，但严重程度取决于 QQ 机器人接口的破坏程度。

- 🔥 **[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)** – fix laggy interface（[stale]）
  - 提交者 [iMilnb](https://github.com/iMilnb) 修复 Web UI 在大量文本下的卡顿问题，并已实测桌面端与移动端浏览器（Brave）验证有效。
  - **价值点**：贡献者明确声明非 TS/node 开发者，修复基于分析与测试完成，社区贡献诚意较高。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 问题描述 | 关联 Fix |
|---|---|---|---|
| 🟡 中 | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 通道接口未跟上 QQ 机器人官方更新，可能导致连接失败或消息丢失 | ❌ 无关联 PR |
| 🟢 低 | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | Web UI 长文本卡顿 | ✅ 已有 Fix PR（开放中，stale） |

**说明**：今日无崩溃或回归类严重 Bug 报告，整体稳定性良好。#3347 的修复 PR 长期未合并，建议维护者优先 review，验证后纳入下一补丁版本。

---

## 6. 功能请求与路线图信号

**今日可识别的功能信号主要来自 QQ 通道方向**：

1. **QQ 通道协议适配升级**（来自 [#3394](https://github.com/sipeed/picoclaw/issues/3394)）
   - 用户期望维护团队主动跟进 QQ 机器人官方接口变更，避免被动兼容。
   - **可能性评估**：⭐⭐⭐⭐ – QQ 通道作为重要即时通讯入口，跟进上游是刚需，预计会被纳入近期路线图。

2. **QQ 频道多媒体附件支持**（历史上 [#1349](https://github.com/sipeed/picoclaw/pull/1349)）
   - 尽管该 PR 已被关闭，但其涵盖的表情/语音/图片/视频/文件解析与本地附件上传后回复能力，正是 #3394 反映场景的延伸。
   - **可能性评估**：⭐⭐⭐ – 需求真实存在，但 PR 已关闭，建议维护者重新评估方案或邀请新贡献者接手。

3. **Web UI 性能优化**（来自 [#3347](https://github.com/sipeed/picoclaw/pull/3347)）
   - 长对话场景下的渲染性能改进。
   - **可能性评估**：⭐⭐⭐⭐⭐ – 已有现成 Fix，纳入成本极低。

---

## 7. 用户反馈摘要

今日 Issues 评论为 0，PR 评论无数据，**直接反馈信号较弱**。从提交内容可间接提炼以下痛点：

- 😟 **痛点 1：QQ 通道滞后于官方平台** – 用户 [qinglt](https://github.com/qinglt) 在 #3394 中明确表达"希望修复"诉求，反映用户对即时通讯通道稳定性的高度敏感。
- 😟 **痛点 2：Web UI 长会话性能瓶颈** – PR #3347 提交者 [iMilnb](https://github.com/iMilnb) 强调其在桌面与移动端实测修复有效，说明该问题真实影响日常使用体验。
- 🤖 **痛点 3：自动化 PR 噪声** – PR #3310 由 bot（picoclanker）生成后即被关闭，反映仓库可能存在自动化工具生成的低质量 PR 干扰 review 流程。

---

## 8. 待处理积压提醒

| 编号 | 类型 | 创建日期 | 距今 | 风险点 |
|---|---|---|---|---|
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | PR（stale） | 2026-08-27 | 约 1 个月 | 已被 GitHub 标记为 stale，存在因长期不活跃被机器人关闭的风险；建议维护者尽快 review。 |

**积压评估**：当前积压量可控，但 QQ 通道方向的需求（#3394 + #1349 关闭事件）若不主动响应，可能在 QQ 机器人接口再次升级时演变为集中爆发的连接故障。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | Issues/PR 数量少，无新版本 |
| 响应度 | ⭐⭐☆☆☆ | stale PR 存在，关键 Issue 待响应 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无严重 Bug 报告 |
| 社区参与 | ⭐⭐⭐☆☆ | 有外部贡献者（iMilnb、aishannon），但 merge 率低 |
| **综合** | **⭐⭐⭐☆☆** | 整体平稳但需主动维护跟进 |

---

*报告生成时间：2026-09-27 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**: 2026-09-27
**项目**: [nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)
**分析窗口**: 过去 24 小时（截至 2026-09-27）

---

## 1. 今日速览

NanoClaw 过去 24 小时呈现**高强度开发活跃**态势：27 条 PR 涌入（其中 23 条待合并、4 条已关闭），4 条 Issue 全部为新开或当日活跃。值得关注的是，**全部 4 条 Issue 均涉及 `/update-nanoclaw` 工作流或 WhatsApp 依赖链路**，呈现出明显的回归性问题集中爆发；同时**没有新版本发布**，版本节奏与代码提交节奏出现背离。整体看，项目处于"功能快速扩张 + 升级路径不稳"的张力状态，建议维护者优先处理 v2.4.0 的若干回归 bug。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前 main 分支停留在 `d4ff64f4`，channels 分支 `224827b9`，版本仍为 v2.4.0。结合 Issue #3941、#3942、#3943 等描述的回归问题，下一个补丁版本（推测 v2.4.1）应当优先消化这些阻塞用户升级路径的 bug。

---

## 3. 项目进展

### 当日已关闭 PR（4 条）

| PR | 标题 | 影响面 | 状态 |
|---|---|---|---|
| [#3025](https://github.com/nanocoai/nanoclaw/pull/3025) | fix(container): 提升 agent SDK 32000 输出 token 上限 | container / agent-runner | 已关闭 |
| [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) | feat(skill): `/add-litellm` 极简模型路由器 | skills / providers | 已关闭 |
| [#3895](https://github.com/nanocoai/nanoclaw/pull/3895) | fix(agent-runner): 修复 `send_card` URL pattern 在 llama.cpp 语法下不可解析 | agent-runner / tools | 已关闭（修复性 PR） |

> ⚠️ **数据局限提示**：上述 3 条 PR 显示 `[CLOSED]` 状态，无法从当前数据中确认是否合并入主干。建议维护者复查 #3025、#2949 是否仅关闭未合并——若未合并，则与 #3895 一并视为"未推进的修复/特性"。

### 当日活跃 PR 中值得关注的推进方向

- **底层抽象重构**：`#3925`（provider-wrapper seam）、`#3926`（chat-sdk-bridge postCard hook）、`#3931`（minimalContext provider option）、`#3934`（error sink seam）构成一组**架构性 seam 改造**，为上层 skill 提供可插拔接口，是接下来一周合并窗口的关键基础设施 PR。
- **`send_card` 能力升级**：`#3927`（collapsible section children）→ `#3940`（Slack Block Kit 渲染）形成**功能依赖链**，需要按 #3926 → #3927 → #3940 的顺序合入。
- **运维可观测性**：`#3939`（turn traces）、`#3935`（error reports）、`#3936`（Telegram 进度消息）形成面向运维的完整能力包。

---

## 4. 社区热点

> 数据局限：当前 GitHub 数据未提供点赞/评论数的精确排序，以下按"问题影响面 × 近期活跃度"排序。

### 🔥 高优先级关注（安全 + 升级阻塞）

1. **[#2520](https://github.com/nanocoai/nanoclaw/issues/2520) — Signal Protocol 会话密钥泄露到日志**
   - 创建于 **2026-05-17**，已滞留 **132 天**未解决
   - 涉及 `privKey / rootKey / chainKey` 写入 `logs/nanoclaw.log`
   - 安全性问题、影响所有 WhatsApp 用户

2. **[#3941](https://github.com/nanocoai/nanoclaw/issues/3941) — `@whiskeysockets/baileys@7.0.0-rc.9` 仍被钉住，受 GHSA-qvv5-jq5g-4cgg（消息伪造）影响**
   - `channels` 分支与 `/update-nanoclaw` 流程每次都会重新钉住该版本
   - 用户**无法通过常规升级路径修复安全漏洞**

3. **[#3943](https://github.com/nanocoai/nanoclaw/issues/3943) — `/update-nanoclaw` 在 #3750 之后出现回归**
   - 控制器导入了 `setup/gateways/` 与 npm 依赖，文档化的抽取流程未提供
   - `prepare` 阶段崩溃：`MODULE_NOT_FOUND`

4. **[#3942](https://github.com/nanocoai/nanoclaw/issues/3942) — `/update-nanoclaw validate` 重写 pnpm-lock.yaml 时丢失 git 依赖的 `integrity` 哈希**

**诉求分析**：四张工单共同指向**升级/更新路径在 v2.4.0 上严重退化**——`/update-nanoclaw` 流程既无法正确解析文档，又破坏 lockfile，还持续钉住已知有漏洞的依赖版本。bmultini 单人在 24h 内连开 3 条相关 Issue，反映从 v2.3.x 升级到 v2.4.0 已成为用户的关键痛点。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 是否已有 Fix |
|---|---|---|---|
| 🔴 高（安全） | [#2520](https://github.com/nanocoai/nanoclaw/issues/2520) | Signal 私钥/根密钥/链密钥泄露到日志文件 | ❌ 无 Fix PR（滞留 132 天） |
| 🔴 高（安全） | [#3941](https://github.com/nanocoai/nanoclaw/issues/3941) | 钉住存在消息伪造漏洞的 baileys rc 版，每次 update 重新钉回 | ❌ 无 Fix PR |
| 🟠 中（升级阻塞） | [#3943](https://github.com/nanocoai/nanoclaw/issues/3943) | `/update-nanoclaw` 控制器模块找不到（回归） | ❌ 无 Fix PR |
| 🟠 中（依赖完整性） | [#3942](https://github.com/nanocoai/nanoclaw/issues/3942) | lockfile integrity 哈希丢失 | ❌ 无 Fix PR |
| 🟡 中（功能受限） | [#3895](https://github.com/nanocoai/nanoclaw/pull/3895) | `send_card` URL pattern 在 llama.cpp grammar 下失败 | ✅ 已有 Fix PR（已关闭） |

**稳定性信号**：
- v2.4.0 的升级路径当前处于**功能性退化**状态；
- 两条安全相关 Issue 都**无 Fix PR 跟进**，其中 #2520 已超 4 个月未响应，是积压最严重的工单；
- 唯一已有关闭的修复 PR（#3895）关注的是 llama.cpp 兼容性，问题面较窄。

---

## 6. 功能请求与路线图信号

当日活跃的 23 条待合并 PR 几乎全是 **skill / utility 类特性**，明显勾勒出下一阶段路线图：

### A. 自我管理与运维类（强运营信号）
- [#3937](https://github.com/nanocoai/nanoclaw/pull/3937) `/add-repo-self-edit` — 管理员批准下，agent 可对 NanoClaw 自身源码提交 git patch，破坏构建/重启失败时自动回滚
- [#3929](https://github.com/nanocoai/nanoclaw/pull/3929) `/add-scheduled-update` — 无人值守定时更新宿主
- [#3928](https://github.com/nanocoai/nanoclaw/pull/3928) `/contribute-upstream` — 帮助 fork 将本地特性回传上游
- [#3935](https://github.com/nanocoai/nanoclaw/pull/3935) `/add-error-reports` — 将宿主自身故障推送到指定 chat
- [#3934](https://github.com/nanocoai/nanoclaw/pull/3934) error sink seam — 行为中性的基础设施

### B. 可观测性类
- [#3939](https://github.com/nanocoai/nanoclaw/pull/3939) `/add-turn-traces` — 每轮 agent 操作写入中心 DB
- [#3936](https://github.com/nanocoai/nanoclaw/pull/3936) Telegram 长 turn 时显示"Working on it…"实时进度

### C. 成本与多 provider 类
- [#3932](https://github.com/nanocoai/nanoclaw/pull/3932) `/add-lean-tasks` — 小模型/本地模型下低上下文运行定时任务
- [#3931](https://github.com/nanocoai/nanoclaw/pull/3931) `minimalContext` provider option
- [#3925](https://github.com/nanocoai/nanoclaw/pull/3925) provider-wrapper seam + 重试/备份模型
- [#3930](https://github.com/nanocoai/nanoclaw/pull/3930) OpenCode 配置/凭证/环境一致性
- [#3944](https://github.com/nanocoai/nanoclaw/pull/3944) `/add-typesafe-tool` 通过 OpenRouter 调用 Jev
- [#2949](https://github.com/nanocoai/nanoclaw/pull/2949) `/add-litellm` 模型路由器（已关闭，状态待确认）

### D. 通道能力扩展
- [#3938](https://github.com/nanocoai/nanoclaw/pull/3938) `/add-voice-replies` — 语音回复，默认离线
- [#3940](https://github.com/nanocoai/nanoclaw/pull/3940) Slack `send_card` 折叠区 Block Kit 渲染
- [#3927](https://github.com/nanocoai/nanoclaw/pull/3927) `send_card` 支持 collapsible section 子项
- [#3926](https://github.com/nanocoai/nanoclaw/pull/3926) chat-sdk-bridge 暴露 postCard hook
- [#3933](https://github.com/nanocoai/nanoclaw/pull/3933) `/add-flows` — 用图结构表达 pre-task 脚本

**路线图信号解读**：
项目正在系统化地把自己变成**"可自我运维、可被多模型驱动、可被多通道消费"**的中间件层。最有战略价值的 PR 群是 `error sink seam → /add-error-reports`、`provider-wrapper seam → /add-typesafe-tool`、`postCard hook → collapsible sections`，构成"观测 × 多 provider × 多通道富渲染"三条主轴。**barnuri 单人在 24h 内提交 15 条 PR**，需要维护者评估 review 带宽风险。

---

## 7. 用户反馈摘要

数据集中可见的真实用户声音主要来自 bmultini（Issue #3941/#3942/#3943）和 participo（Issue #2520）：

- **痛点 1：升级流程不再可信**
  > "Updating from v2.3.0 to v2.4.0, `prepare` crashes with MODULE_NOT_FOUND"
  > "Skill refresh during `/update-nanoclaw validate` rewrites pnpm-lock.yaml and drops the integrity hash"

  用户明确表达：**v2.4.0 的升级过程破坏了供应链完整性**——既是文档-代码漂移，也是 lockfile 完整性破坏。

- **痛点 2：安全响应链断裂**
  > "channels still pins `@whiskeysockets/baileys@7.0.0-rc.9`, affected by GHSA-qvv5-jq5g-4cgg (message spoofing); every `/update-nanoclaw` re-pins it"

  用户感受到的是：**明知有漏洞却无法通过官方升级通道修复**，这会严重侵蚀信任。

- **痛点 3：密钥落盘不可见**
  > "logs/nanoclaw.log captures libsignal-node SessionEntry dumps containing privKey/rootKey/chainKey buffers on every WhatsApp session close"

  这是**长期被搁置的安全告警**（4 个月），反映维护者在长尾安全 issue 上响应迟缓。

- **隐含积极信号**：javexed、barnuri 持续高频提交 skill 类 PR，且 PR 模板遵循 `[follows-guidelines]`，说明**社区贡献者的开发纪律良好**；`/add-*` 类技能的密集涌现意味着**用户对 NanoClaw 作为"Agent 宿主框架"的能力扩展需求旺盛**。

---

## 8. 待处理积压

### 🔴

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期**：2026-09-27
**数据周期**：过去 24 小时

---

## 1. 今日速览

NullClaw 今日处于典型的**维护与稳定性修复周期**：Issues 板块零活跃，所有动态集中在 Pull Requests 端，过去 24 小时内有 5 个 fix 类型 PR 处于待合并状态，全部由核心贡献者 `vernonstinebaker` 提交。无新版本发布。整体活跃度中等偏低，但 PR 内容质量较高，集中于记忆召回、Provider 错误处理、CLI 交互、Agent 内存泄漏与 Discord 自循环等具体痛点，呈现出明确的"质量收敛"特征。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去 24 小时**无 PR 被合并或关闭**，但有 1 个新 PR 提交：

- **PR #1011** [OPEN] — `fix(agent): free parsed tool call when a later allocation fails`
  链接：<https://github.com/nullclaw/nullclaw/pull/1011>
  修复 `parseXmlToolCalls` 中的内存泄漏路径：当列表追加或后续分配失败时，已解析的 `name`/`arguments` 字符串会泄漏，且错误路径遗漏了 `tool_call_id` 的释放。属于底层稳定性改进。

今日整体进展幅度：**小幅推进**。项目未向前迈出显著的功能性步伐，但累积了多个低层次的健壮性修复，等待 maintainer 评审。

---

## 4. 社区热点

由于今日无 Issues 评论、PR 互动数也均为 0（无 👍、无评论），社区讨论处于静默状态。

**值得关注的"沉默 PR"**：
- **PR #970** — 创建于 **2026-06-29**，至今已挂起约 **90 天**。这是关于 `nullclaw agent` REPL 中方向键、Backspace、Home/End 等 TTY 编辑能力的基础交互修复，长期未被合并会影响交互式用户体验。
  链接：<https://github.com/nullclaw/nullclaw/pull/970>

社区诉求信号：方向键失效是 REPL 用户的强痛点，90 天未响应暗示该项目在 PR 评审节奏上可能存在瓶颈。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 议题 | 关联 PR | 状态 |
|---------|------|--------|------|
| 🔴 高 | Discord bot 自循环：开启 `allow_bots=true` 时 bot 自身回复被回灌到 agent，且当回复以 bot 自身 `@`-mention 开头时还会触发 `require_mention`，形成无限循环 | #1010 | 已开放 PR，未合并 |
| 🟠 中 | Provider 非 2xx 响应体被过早释放（`HttpStatusError` 后 body 丢失），错误诊断需抓包 | #1004 | 已开放 PR，未合并 |
| 🟠 中 | 记忆召回污染：归档副本被错误地召回到 prompt 和 `memory_recall` 工具，导致模型将当前消息当作历史；会话搜索中 `LIMIT` 早于 session 过滤使全局归档行覆盖当前会话 | #1005 | 已开放 PR，未合并 |
| 🟡 中 | Agent `parseXmlToolCalls` 内存泄漏（见上文 #1011） | #1011 | 已开放 PR，未合并 |
| 🟢 低 | REPL 方向键失效、无历史导航 | #970 | 已开放 PR，未合并 |

**总结**：所有报告的 Bug 都已有对应的 fix PR，**暂无开放 Issues / 未修复 Bug**。主要风险在于 PR 评审与合并的时效性。

---

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issues，亦无功能增强 PR。

从已挂起 PR 推断的潜在方向：
- **CLI 体验升级**：#970 的 REPL 行编辑器暗示路线图中包含更丰富的交互式 Agent 体验（光标移动、历史回溯、词级跳转），但已被搁置 90 天。
- **Provider 错误可观测性**：#1004 反映出"对第三方模型提供方错误响应的可诊断性"是近期发力点。
- **多通道 ingress 鲁棒性**：#1010 表明 Discord 等消息通道的防护设计仍需补全（自消息回环是常见多通道代理陷阱）。

---

## 7. 用户反馈摘要

今日 Issues 与 PR 评论区均无用户发言，无新反馈数据可提炼。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 挂起时长 | 链接 |
|------|------|------|----------|---------|------|
| PR | #970 | fix(cli): handle arrow keys in agent REPL | 2026-06-29 | ~90 天 | <https://github.com/nullclaw/nullclaw/pull/970> |
| PR | #1005 | fix(memory): keep archived conversation shards out of live turns | 2026-09-24 | 3 天 | <https://github.com/nullclaw/nullclaw/pull/1005> |
| PR | #1004 | fix(providers): log scrubbed provider error bodies on non-2xx | 2026-09-24 | 3 天 | <https://github.com/nullclaw/nullclaw/pull/1004> |
| PR | #1010 | fix(discord): ignore messages the bot itself posted | 2026-09-26 | 1 天 | <https://github.com/nullclaw/nullclaw/pull/1010> |
| PR | #1011 | fix(agent): free parsed tool call when a later allocation fails | 2026-09-26 | 1 天 | <https://github.com/nullclaw/nullclaw/pull/1011> |

**提醒维护者关注**：
- **#970** 为首要积压项，挂起 90 天，REPL 基础交互能力属于"低风险高收益"修复，建议优先评估合并。
- 近期 #1005、#1004、#1010、#1011 四个 fix 均涉及真实场景下的稳定性问题（记忆污染、错误可观测性、消息循环、内存泄漏），合并后将显著提升项目健壮度。

---

## 项目健康度总评

| 维度 | 评级 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐ | 24h 内 5 个新/活跃 PR，集中在单一贡献者 |
| 评审与合并节奏 | ⭐⭐ | 0 合并，最老 PR 挂起 90 天，存在瓶颈 |
| Bug 响应能力 | ⭐⭐⭐⭐ | 所有已知 Bug 均有对应 PR，方向正确 |
| 版本发布节奏 | ⭐⭐ | 无新版本，用户无法及时获得修复 |
| 社区互动 | ⭐ | Issues 与 PR 均无评论互动 |

**综合判断**：项目处于"修复就绪、合并滞后"阶段，PR 储备充裕但缺乏评审与发布动作，建议尽快合并 #970、#1010、#1005 并发布补丁版本。

---

*报告生成基于 GitHub 公开数据，时间窗口：2026-09-26 至 2026-09-27。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-09-27**
**项目：nearai/ironclaw**

---

## 1. 今日速览

IronClaw 项目今日呈现出典型的"低活跃期"状态——过去 24 小时内仅有 1 条 Issue 被新创建、1 条 PR 被更新，无任何版本发布。仓库整体节奏趋缓，主要动作为社区外部贡献者发起的一项新功能提案（NEAR 代币发射台 MCP 扩展），以及一条由 nightly CI 流水线触发的代码库知识图谱自动刷新 PR。综合来看，项目处于维护性运行模式，核心开发活跃度有限，建议关注者将注意力放到长期待合并项上。

---

## 2. 版本发布

⚠️ 无新版本发布。过去 24 小时仓库未产出新的 Release 或 Tag。

---

## 3. 项目进展

📌 **今日无任何 PR 被合并或关闭。** 唯一获得更新的 PR 为 #7988（已开放约 1 个月，2026-08-29 创建，最新更新 2026-09-27），该 PR 由 `ironclaw-ci[bot]` 自动发起，属于**代码库记忆（codebase-memory）知识图谱的例行刷新**：

- 性质：CI / 基础设施
- 风险等级：低（XS 级别）
- 贡献者：core（机器人账号）
- 链接：<https://github.com/nearai/ironclaw/pull/7988>

> 评估：今日项目在功能、修复、性能优化等实质性进展方面几乎为零。代码库图谱的刷新属于"内务性"维护，对外可见的功能价值有限。该 PR 自 8 月底创建至今约一个月仍未被合并，提示项目审阅节奏偏慢。

---

## 4. 社区热点

🔥 **今日唯一被打开的 Issue 即为社区关注焦点：**

### Issue #8112 — Feature: NEARA hosted-MCP extension (keyless NEAR token launchpad tools)
- 作者：iwaterheater（社区外部贡献者）
- 创建时间：2026-09-26
- 评论：0 | 👍：0
- 链接：<https://github.com/nearai/ironclaw/issues/8112>

**诉求分析：**
该 Issue 由 NEARA 团队/相关方提出，希望为 IronClaw agents 增加对 NEAR 代币发射台（launchpad）的直接操作能力。具体场景包括：
1. 列出并报价新发行的 NEAR 代币；
2. 发起新代币发射（launch）；
3. 对已发射代币进行交易。

技术细节：NEARA 是部署在 NEAR 主网上的发射台，新币采用 1B 固定供应量设计，全部供应量以锁仓集中流动性（Rhea DCL）形式开放。提案要求通过 **hosted-MCP 扩展**实现 **keyless** 接入，这意味着 IronClaw agents 将能在无需用户暴露私钥的情况下调用 NEAR 链上金融工具。

**潜在意义：** 这是首个明确指向"AI Agent × DeFi"交叉场景的官方扩展提案，若被接纳，将显著拓宽 IronClaw 在加密原生工作流中的应用边界。

---

## 5. Bug 与稳定性

✅ **今日未报告任何 Bug、崩溃或回归问题。**

---

## 6. 功能请求与路线图信号

### 📥 正式提出的功能请求

| 编号 | 标题 | 状态 | 优先级信号 |
|------|------|------|------------|
| #8112 | NEARA hosted-MCP extension (keyless NEAR token launchpad) | OPEN（新建） | 来自生态合作伙伴，具有可执行性 |

**路线图判断：**
- 该提案以 MCP（Model Context Protocol）扩展形式提交，与 IronClaw 已有的工具接入范式保持一致，技术路径清晰；
- "keyless" 关键词暗示将引入 NEAR 的账户抽象或会话密钥机制，符合近年 NEAR 生态主推的方向；
- ⚠️ **尚无对应实现 PR**，也未见核心维护者的公开回应，因此暂无法判断是否会被纳入下一版本。建议跟踪核心维护者的 triage 评论。

---

## 7. 用户反馈摘要

由于今日无任何 Issue/PR 收到评论（Issue #8112 评论数为 0，PR #7988 评论数未定义），**社区无新反馈可提炼**。

仅有的间接信号：
- Issue #8112 的存在本身表明外部生态（NEARA）已主动寻求与 IronClaw 集成，反映出项目的**工具可组合性正在吸引 DeFi 场景的合作方**；
- PR #7988 持续挂起 1 个月未被合并，可能意味着核心团队当前**评审资源紧张**或对自动化 PR 的优先级判定保守。

---

## 8. 待处理积压 ⚠️

### 🔴 长期未响应项

| 类型 | 编号 | 标题 | 创建至今 | 当前状态 |
|------|------|------|----------|----------|
| PR | #7988 | chore(agents): refresh codebase knowledge graph | ~29 天 | OPEN，待合并 |

**维护者提醒：**
- **PR #7988** 已开放近一个月，虽属自动化例行任务（风险低、size XS），但其阻塞会直接导致 nightly `Codebase Graph Refresh` workflow 的累积快照失准，进而影响 agent 内部对仓库结构的理解准确性。建议**本周内合并**，避免后续批量积压。
- 当前仓库**无任何标记为 "good first issue" 的引导项出现**，对希望参与贡献的社区新人吸引力不足，可考虑在 Issue 看板中主动补足。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐☆☆☆ | 仅 1 条新 Issue，0 条新 PR |
| 审阅响应速度 | ⭐⭐☆☆☆ | PR #7988 滞留 ~29 天 |
| 社区参与度 | ⭐⭐⭐☆☆ | 外部生态方主动提案 |
| 稳定性 | ⭐⭐⭐⭐⭐ | 今日零 Bug 报告 |
| 版本节奏 | N/A | 今日无发布 |

**总评：** IronClaw 当前处于"低强度维护 + 生态探索"阶段。短期无功能交付压力，但需关注积压项清理与社区首次回应的及时性。

---

*报告生成时间：2026-09-27 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-27

## 1. 今日速览

项目今日活跃度显著偏低，处于"维护空窗期"。过去 24 小时内全部 6 条 Issue 更新和 10 条 PR 更新均来自 stale 机器人自动关闭行为，无新 Issue 提交、无新版本发布、无真实社区互动。仅有 1 个新 PR (#2769) 处于待合并状态。更值得警惕的是，多个针对高严重度 Bug（鉴权登出、AI 会话锁死、Modal 交互阻塞等）的修复 PR 同时被 stale-bot 关闭，说明这些已知问题在代码库中很可能仍未被根本解决，需要维护者立即介入复核。

## 2. 版本发布

无新版本发布。

## 3. 项目进展

**今日唯一在合并队列中的新工作：**

- **PR #2769（OPEN）**：[fisherdaddy] 修复 Vite watch 忽略 renderer artifact 源
  - 提交于 3f2ad8e4 的 `**/artifacts/**` 排除规则误匹配到 `src/renderer/components/artifacts/`，导致 `electron:dev` 模式下 artifact 面板、其渲染器以及 Markdown 编辑器无法热更新
  - 改用绝对路径锚定仓库根目录的 artifacts 目录
  - 关联标签：`area: renderer`
  - [链接](https://github.com/netease-youdao/LobsterAI/pull/2769)

**当日创建即关闭（需维护者确认是否已合入主干）：**

- **PR #2768**（[fisherdaddy](https://github.com/netease-youdao/LobsterAI/pull/2768)）：openclaw gateway 启动超时延长 —— 涉及 main 与 openclaw 模块
- **PR #2767**（[fisherdaddy](https://github.com/netease-youdao/LobsterAI/pull/2767)）：重构 Markdown 实时编辑引擎，拆分为 `markdownLiveStructure` / `markdownEditorCommands` / `markdownLiveWidgets` 三个模块 —— 涉及 renderer、docs、artifacts

**Stale 自动关闭的修复 PR 池（关键风险信号）：**

以下 8 个针对真实缺陷的修复 PR 随对应 Issue 一同被 stale 机器人关闭，而非由维护者主动合并或拒绝：

| PR | 模块 | 修复内容 |
|---|---|---|
| [#1049](https://github.com/netease-youdao/LobsterAI/pull/1049) | auth | fetchWithAuth 并发 401 时共享 refreshToken 槽 |
| [#1052](https://github.com/netease-youdao/LobsterAI/pull/1052) | openclaw | 两处竞态导致 AI 会话永久无法启动 |
| [#1054](https://github.com/netease-youdao/LobsterAI/pull/1054) | renderer | Modal 关闭按钮被顶部栏 drag 区域拦截 |
| [#1056](https://github.com/netease-youdao/LobsterAI/pull/1056) | cowork | 移除生产代码中的 debug `console.log` |
| [#1057](https://github.com/netease-youdao/LobsterAI/pull/1057) | memory | 过滤 Anthropic judge 响应中的 thinking 块 |
| [#1058](https://github.com/netease-youdao/LobsterAI/pull/1058) | scheduled-task | 防止 JSONL 写入失败时的数据丢失 |
| [#1059](https://github.com/netease-youdao/LobsterAI/pull/1059) | platform | Windows 平台默认浏览器识别 |
| [#1065](https://github.com/netease-youdao/LobsterAI/pull/1065) | scheduled

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-27**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位**。过去 24 小时内，Issues 端无任何新开或活跃条目，PR 端仅有一条文档相关的更新（PR #1285）处于待合并状态，且尚无任何评论或点赞互动。无新版本发布。整体来看，项目处于维护性微调阶段，无重大功能推进或社区讨论热点。

---

## 2. 版本发布

今日**无新版本发布**。本节省略。

---

## 3. 项目进展

今日**无 PR 合并或关闭**。唯一更新的 PR（#1285）仍处于待合并状态，未对代码库产生实质性变更。

- 处于待合并状态：
  - **[PR #1285](https://github.com/moltis-org/moltis/pull/1285)** — `docs: add RepoCloud one-click deploy button`（作者：cosark）
    - 内容：在 README.md 的 Cloud Deployment 表格中新增 RepoCloud 一键部署按钮，与 DigitalOcean 按钮格式保持一致，链接指向 https://repocloud.io/details/Moltis/
    - 影响：纯文档变更，不涉及代码逻辑；有助于降低用户的部署门槛，但需维护者确认格式与现有表格规范一致后再合入。

**项目整体推进程度**：今日项目仅向前推进了极小一步（一份待合并的部署文档补充），可视为"几乎原地踏步"。

---

## 4. 社区热点

今日**无高互动 Issues 或 PR**。唯一更新的 PR #1285 评论数与点赞数均为 0，反映社区参与度极低。背后可能的原因包括：

- 项目刚进入维护期或功能稳定期，开发者活跃度回落；
- Issues 端无新增讨论，社区缺乏新刺激点；
- 该 PR 属于边缘性文档补充，未能引发关注。

---

## 5. Bug 与稳定性

今日**无 Bug 报告、无崩溃或回归问题**。Issues 端无任何新条目。项目在稳定性维度上无新增信号。

---

## 6. 功能请求与路线图信号

今日**无新功能请求**。从唯一活跃的 PR #1285 推断的信号：

- **云部署生态扩展** 仍是项目的持续关注方向：Moltis 已在文档中提供多种一键部署选项（DigitalOcean 等），新增 RepoCloud 说明维护者希望进一步覆盖长尾云服务商。
- 建议维护者评估：是否有计划在未来的版本说明中系统性整理"支持的部署平台矩阵"，以提升可发现性。

---

## 7. 用户反馈摘要

今日 Issues 端**无任何新评论或反馈**，无法提炼用户痛点与场景。维护者如需了解用户真实使用情况，建议：

- 主动回顾过去 1–2 周已关闭的 Issues，梳理用户共性反馈；
- 关注 Discussions 区（如已启用）的用户讨论。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 提醒 |
|------|------|------|------|------|
| PR | [#1285](https://github.com/moltis-org/moltis/pull/1285) | docs: add RepoCloud one-click deploy button | OPEN（创建于 2026-09-26） | 创建已 1 天，0 评论、0 点赞，建议维护者安排 review 以避免文档 PR 长期挂起 |

**提醒**：虽然 PR #1285 仅为一行文档变更，但作为面向用户的部署入口信息，建议在 1–2 个工作日内完成 review 与合并，以保持贡献者积极性。

---

## 项目健康度评估

| 维度 | 评分（5 分制） | 说明 |
|------|----------------|------|
| 代码活跃度 | ⭐⭐ | 仅 1 条文档 PR，0 条 Issue |
| 社区参与度 | ⭐ | 0 评论、0 点赞、0 互动 |
| 发布节奏 | — | 今日无发布，无法评估 |
| 维护响应性 | ⭐⭐ | 待观察积压 PR 是否及时处理 |
| 整体健康度 | **⭐⭐（一般）** | 今日为典型低活跃日，需关注是否有持续下行趋势 |

> 📌 **结论**：今日 Moltis 项目处于"静默期"。在缺乏上下文（如近期是否有大版本发布导致的需求回落）的情况下，建议维护者保持对 PR #1285 的及时响应，并主动在社区渠道释放下一阶段规划信号，以维持贡献者信心。

---

*报告生成时间：2026-09-27 | 数据来源：GitHub API（moltis-org/moltis）*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期：** 2026-09-27
**数据来源：** github.com/agentscope-ai/CoPaw
**统计周期：** 过去 24 小时

---

## 1. 今日速览

过去 24 小时内，项目呈现**中等活跃度**，整体趋势以问题反馈与缺陷修复为主。Issue 层面共 5 条更新，其中新开/活跃 3 条、关闭 2 条；PR 层面新增或更新 3 条，均处于待合并状态，无任何合并或关闭动作，亦无新版本发布。今日最显著的特征是：**用户反馈集中于控制台（Console）与 UI 交互层面**，包括文件面板刷新异常、上下文压缩失效、任务计数器不一致等；后端/通道层则有 2 个精细修复 PR 提交（i18n、企微 Markdown 解析），反映维护者正在稳步清理社区报告的具体问题。整体而言，项目处于"积极响应、稳步推进"的状态，但 PR 合并节奏放缓值得留意。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 过去 24 小时未见任何 Release 标签或版本变更事件。最新版本仍为社区 Issue 中提及的 `2.2.2b4`（commit `3822ec71`）与桌面端 `2.2.3b`。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，3 条待合并 PR 均处于 OPEN 状态：

| PR | 标题 | 作者 | 状态 |
|---|---|---|---|
| [#7993](https://github.com/agentscope-ai/CoPaw/pull/7993) | `fix(i18n): add two missing error strings used by unguarded call sites` | Bruce-Yii | 待合并 |
| [#7992](https://github.com/agentscope-ai/CoPaw/pull/7992) | `fix(wecom): stop treating prose containing a pipe as a markdown table` | Bruce-Yii | 待合并 |
| [#7956](https://github.com/agentscope-ai/CoPaw/pull/7956) | `feat(console): unify settings UX and smooth conversation transitions` | rayrayraykk | 待合并 |

**进展评估：**

- **[#7993](https://github.com/agentscope-ai/CoPaw/pull/7993)** — 修复 i18next 翻译键缺失导致的错误提示回退为键名问题，涉及 `MailAccessControlDrawer.tsx` 与 `Inbox/index.tsx` 中 7 处调用点。属于典型的"细节打磨"，提升多语言环境下的错误提示体验。
- **[#7992](https://github.com/agentscope-ai/CoPaw/pull/7992)** — 修复企微通道 `format_markdown_tables()` 的过度匹配问题，普通文本中包含竖线（`|`）即被误判为表格。属于**通道兼容性修复**，对中文用户正文里出现 `||`、`A|B` 这类写法尤为关键。
- **[#7956](https://github.com/agentscope-ai/CoPaw/pull/7956)** — 推进 Console 设置项 UX 统一，对齐 `design.md` 设计语言，修复工作区选择器溢出与切换会话时的欢迎屏闪烁。属于**前端体验提升**，体量较大，建议维护者优先 review。

整体判断：今日代码层面推进有限，但 PR 队列健康，3 条变更方向明确、风险可控。建议维护者在下一工作窗口集中处理合并。

---

## 4. 社区热点

按评论数与最近活跃时间综合排序：

### 🔥 [#4963 — Cron: Support direct script/shell execution task type](https://github.com/agentscope-ai/CoPaw/issues/4963)
- **类型：** Feature / Enhancement
- **状态：** OPEN | 创建于 2026-06-04（已搁置 ~4 个月）
- **评论：** 4 | 👍：0
- **热点分析：** 用户 `@feng183043996` 提出 Cron 任务目前仅支持 `text`（固定文本推送）与 `agent`（AI 处理后回复）两种类型，缺少**直接执行脚本/Shell 命令**的能力。这反映出大量运维场景（如定时清理、数据备份、健康检查）无法脱离 AI 代理直接调度。4 条评论说明社区对自动化运维有持续讨论，但 0 赞与长时间无更新表明**该 feature 已陷入"讨论多、推动难"的僵局**，需维护者明确 roadmap 态度。

### 🔥 [#7994 — 上下文显示状态信息不及时更新和不压缩](https://github.com/agentscope-ai/CoPaw/issues/7994)
- **类型：** Bug | [Close-and-review-later]
- **状态：** CLOSED | 创建于 2026-09-27
- **热点分析：** 中文用户 `@xiaohushi512` 报告两处桌面端（win10, v2.2.3b）问题：
  1. 上下文显示的环形进度条在切换对话后不刷新，需退出程序重新进入；
  2. 上下文窗口显示 91.7K / 131.1K 远超 0.5 阈值比例，但点击压缩按钮无响应。
  
  被标记为 *Close-and-review-later* 暗示维护者认为其价值高但需延后处理。此为**典型桌面端状态同步 bug**，影响核心使用体验。

### 🔥 [#7991 — TaskTracker zombie entries inflate running_task_count](https://github.com/agentscope-ai/CoPaw/issues/7991)
- **类型：** Bug
- **状态：** OPEN | 创建于 2026-09-26
- **热点分析：** `@yylxdzz` 指出 Dashboard 显示 "2 running tasks"，但 `/api/chats` 仅返回 1 个 `status="running"` 的会话，说明 `TaskTracker._runs` 存在僵尸条目，全局计数器与单聊天计数器作用域不一致。属于**数据一致性 bug**，对运维监控与用户信任度影响较大，尚无 PR 跟进。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue | 描述 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 **高** | [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) | TaskTracker 僵尸条目导致运行任务计数虚高，与 API 返回数据不一致，影响监控可信度 | ❌ 无 |
| 🟠 **中** | [#7995](https://github.com/agentscope-ai/CoPaw/issues/7995) | Files 面板 refresh 按钮无法更新已展开文件夹的状态，新文件需整页刷新才能出现 | ❌ 无 |
| 🟠 **中** | [#7994](https://github.com/agentscope-ai/CoPaw/issues/7994) | 桌面端上下文进度条不刷新、压缩功能失效（v2.2.3b） | ❌ 无（已 Close-and-review-later） |
| 🟢 **低** | [#7804](https://github.com/agentscope-ai/CoPaw/issues/7804) | 管理类增强请求（未指明具体 bug） | — 已 CLOSED |

**稳定性评估：** 今日无崩溃级（Crash）或安全相关报告。Bug 多集中于**前端状态同步**与**指标统计一致性**，属典型 UX/数据完整性问题。建议维护者优先安排 [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) 的复现与 PR。

---

## 6. 功能请求与路线图信号

### 📌 强信号：Cron 脚本/Shell 直执行能力 ([#4963](https://github.com/agentscope-ai/CoPaw/issues/4963))

- **诉求：** 在现有 `text`、`agent` 之外，新增直接执行脚本/Shell 命令的 Cron 任务类型，绕开 AI 代理。
- **用户场景：** 定时清理日志、调用健康检查、备份数据、推送监控指标等纯运维场景。
- **路线图判断：** ⚠️ **信号强但推进停滞**。该 Issue 已存在近 4 个月、积累 4 条评论讨论，但 0 赞、无对应 PR、无维护者响应。考虑到其他 PR 涉及的 settings UX 统一、Console 平滑过渡等正在推进，**该需求极有可能被纳入 v2.3.x 路线图**，但需维护者在 Issue 内明确表态以激活社区贡献。

### 📌 隐含信号：Settings/Console UX 系统化重构 ([#7956](https://github.com/agentscope-ai/CoPaw/pull/7956))

- 作者 `rayrayraykk` 正在推出一项较大体量的 Console 设置 UX 统一工作，并引用了 `design.md` 设计语言文件。这暗示项目**正系统化推进 Console 体验升级**，可能为后续更多功能铺路。

---

## 7. 用户反馈摘要

综合今日 Issues 中的真实评论与描述，提炼如下：

| 痛点/场景 | 出现位置 |
|---|---|
| **上下文窗口状态不同步** | `桌面端 2.2.3b`：用户期望切换会话后进度条立即反映新会话的数据，目前需重启程序 |
| **上下文压缩功能失效** | 即便超过阈值比例（用户设置为 0.5），压缩按钮仍报"少于 3 个对话"且不执行 |
| **Files 面板需整页刷新** | 已展开的文件夹在添加新文件后，refresh 按钮无法更新视图，迫使用户使用浏览器整页刷新 |
| **任务计数器不一致** | 仪表盘的 running_task 数与 `/api/chats` API 返回值冲突，造成信任危机 |
| **企业微信通道 Markdown 误判** | 普通文本中的 `\|` 被错误地改写为表格，破坏可读性 |
| **多语言错误提示回退为键名** | i18next 缺少两处关键键，导致错误提示显示 `common.operationFailed` 等开发符号 |

**满意度观察：** 用户满意度呈现**两极化**——通道层、桌面端核心场景存在明显体验断点；而 PR 中正在打磨的 Console 体验、企微 Markdown 修复等细节，反映维护者对社区反馈是积极响应的。**改进的杠杆点在于：尽快修复状态同步类 Bug，并明确长期 feature（如 Cron 直执行）的 roadmap 态度。**

---

## 8. 待处理积压

以下 Issue/PR 长期未得到响应或推进，建议维护者优先关注：

| 序 | 条目 | 类型 | 创建日期 | 搁置时长 | 风险/影响 |
|---|---|---|---|---|---|
| 1 | [#4963](https://github.com/agentscope-ai/CoPaw/issues/4963) | Feature | 2026-06-04 | **~115 天** | 高价值社区诉求，无 PR、无维护者表态 |
| 2 | [#7804](https://github.com/agentscope-ai/CoPaw/issues/7804) | Enhancement | 2026-09-16 | 11 天 | 已 CLOSED，但描述模糊（仅写"management"），需确认是否妥善解决了提问者诉求 |
| 3 | [#7994](https://github.com/agentscope-ai/CoPaw/issues/7994) | Bug | 2026-09-27 | 1 天 | 标记为 Close-and-review-later，属于**显式延期**，应在下一冲刺窗口复盘 |
| 4 | [#7956](https://github.com/agentscope-ai/CoPaw/pull/7956) | PR (Feat) | 2026-09-23 | 4 天 | 体量较大的 UX 重构 PR，等待 review 与合并 |
| 5 | [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) | Bug | 2026-09-26 | 1 天 | 数据一致性高严重度 Bug，无对应 PR，需尽快分配维护者 |

---

### 📊 项目健康度综合评分

| 维度 | 评分（5 分制） | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | Issue/PR 数量稳定，社区反馈及时 |
| 合并效率 | ⭐⭐☆☆☆ | 今日无 PR 合并，连续 3 条 PR 排队待 review |
| 缺陷响应 | ⭐⭐⭐☆☆ | 新 Bug 报告与标记延期并存，关键 Bug 缺 PR |
| Roadmap 透明度 | ⭐⭐☆☆☆ | 长期 feature（如 #4963）缺少官方表态 |
| 社区信号强度 | ⭐⭐⭐⭐ | 用户反馈具体、复现路径清晰，价值密度高 |

**总体评价：项目处于健康的"日常维护期"，短期风险可控，但中长期需加强 PR 合并节奏与 roadmap 沟通，避免社区贡献者流失。**

---

*本报告基于 2026-09-27 公开 GitHub 数据自动生成。报告内容仅反映数据快照，不构成投资或决策建议。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-27

## 1. 今日速览

ZeroClaw 项目今日保持高强度治理节奏：**50 条 Issue 与 50 条 PR 同步刷新，活跃度处于近月峰值**。最值得关注的是覆盖身份/认证体系的 #8289 安全重构栈（#10268→#10270→#10274→#10275→#10321 共 5 个 XL 级 PR）今日集体关闭，疑似以堆叠合并方式合入 master，标志着"私有主体内存 + 路由层认证 + 浏览器 PKCE + Nevis/iam_policy 退役"的端到端身份架构落地。同时，P1/S0 级别的安全与数据丢失隐患仍是社区焦点（`ApprovalManager` 缺失、`file_edit` 并发写入丢更新、Git `--attr-source` 策略绕过），修复节奏平稳但积压明显。整体项目健康度：**架构推进积极，质量/安全债中等偏重，版本发布节奏放缓**（已连续多日无新版本）。

---

## 2. 版本发布

**无新版本发布**。距离上一个可推断的稳定基线 v0.8.4/v0.8.5 已有多日；考虑到 #10780 明确指出 v0.8.5 移除了 token 驱动的上下文压缩（导致 `keep_recent`/`collapse_tool_results` 失效），以及 #10991 提到的 Windows 服务行为缺陷，**下一次发布（疑似 v0.8.6 或 v0.9.0）大概率将集中处理安全回归 + 上下文管理回归**。维护者应考虑在版本说明中明确标注：
- 上下文压缩行为变更（用户/集成方需重写工作流）
- Windows `ONLOGON` 任务的控制台窗口行为
- Daemon 模式下 channel 工厂注册回归（详见 #11055）

---

## 3. 项目进展

### 3.1 重大里程碑：#8289 身份/认证架构栈完成

这是今日最显著的进展。该栈由 `JordanTheJet` 主导，分 6 个阶段提交，今日**全部 5 个待合并分支（#10268、#10270、#10274、#10275、#10321）同步关闭**，结合它们各自"Stacked on"前序分支（#10259、#10263、#10265 已合并）的描述，几乎可以确认是**通过 squash/merge 一次性入主**：

| PR | 阶段 | 主题 | 链接 |
|---|---|---|---|
| [#10268](https://github.com/zeroclaw-labs/zeroclaw/pull/10268) | 4 | 私有主体内存 + 存储级平面隔离（+2644/−177） | closed |
| [#10270](https://github.com/zeroclaw-labs/zeroclaw/pull/10270) | 5 | 无浏览器 OIDC 设备授权 + client_credentials | closed |
| [#10274](https://github.com/zeroclaw-labs/zeroclaw/pull/10274) | 5 | 路由层认证 + 配置面主体消费（+1810/−369） | closed |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) | 6 | 退役 Nevis/iam_policy，提供配置垫片 + 双 IdP 回滚证据 | closed |
| [#10321](https://github.com/zeroclaw-labs/zeroclaw/pull/10321) | 5 | 浏览器 PKCE + 跨端点注册 API（+6075/−98） | closed |

**意义**：ZeroClaw 的身份与访问控制从单 IdP（Nevis）转向"多 IdP + 私有主体存储 + 浏览器原生 PKCE + 设备授权"模型，覆盖 CLI/Gateway/Memory 全栈。同时拆除了遗留的 `iam_policy` 模块（净减 1385 行）。这是项目向"可被企业部署"迈进的实质性一步。

### 3.2 重要的 Bug 修复已合入

- **[#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) 子代理审批强制（fail-closed）**：CLOSED。修复 bounded child loop 在无 `ApprovalManager` 时将 prompt-required 工具执行放行的问题——这是 P1/S0 级别的安全回归。
- **[#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) Git `--attr-source` 策略绕过**：CLOSED。修复了 `--attr-source=<value>` 的子选项扫描漏过 mutating 子命令的问题。
- **[#10787](https://github.com/zeroclaw-labs/zeroclaw/issues/10787) Anthropic 529 单候选流恢复**：CLOSED。`provider_retries` 现在被单候选流恢复路径尊重，overload 不再立即失败。
- **[#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) WhatsApp Web `suppress_voice` 忽略**：CLOSED。
- **[#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) Windows advisory job 三连失败**：CLOSED（仅 cron 改动触发）。
- **[#10826](https://github.com/zeroclaw-labs/zeroclaw/issues/10826) ZeroCode 会话根目录保留**：CLOSED。
- **[#11142](https://github.com/zeroclaw-labs/zeroclaw/pull/11142) `fix(plugins): 转义 grant 补救中的撇号**：CLOSED（XS）。

### 3.3 测试/文档类质量提升

今日大量 XS 级 PR 集中提交（#11139、#11140、#11141、#11153–#11160、#11192），主要为：
- 文档归位（多智能体指南迁入 Agents 区，#11139）
- 测试稳定性（payload capture 按 trace id 隔离，#11192；共享 runtime proxy 状态守卫，#11140；qdrant 时间窗先于 limit 应用，#11143）
- 内存威胁扫描误报收敛（URL + 凭据词同框不再误报，#11144）

这些 PR 反映出维护者正在做"减少误报 + 提升测试隔离"的工程化收敛。

---

## 4. 社区热点

按评论数排序的热门 Issue：

| 排名 | Issue | 标题 | 评论 | 状态 |
|---|---|---|---|---|
| 1 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Maintainer decision queue for RFCs and design issues | **15** | OPEN |
| 2 | [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) | WhatsApp Web: implement create_room and invite_user | 5 | OPEN |
| 3 | [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) | WhatsApp Web ignores suppress_voice on TTS | 5 | CLOSED |
| 4 | [#10793](https://github.com/zeroclaw-labs/zeroclaw/issues/10793) | 三连 Windows 测试失败 | 4 | CLOSED |
| 5 | [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) | OpenCode big-pickle 403 FreeTierError v0.8.4 | 4 | OPEN |
| 6 | [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon 未注册 channel-map factory（P1, blocked） | 4 | OPEN |

**诉求分析**：
- **#8692 主导讨论**：维护者正用 Issue Tracker 形式维护 RFC/设计决策队列，活跃度最高说明设计阶段争议多，需要 maintainer 介入裁决。
- **WhatsApp Web 成为"问题热点"**：#10977、#10922、#10976、#11059、#10812 五条相关问题集中出现（其中两条已关闭），反映该 channel 在 TTS、@提及、群组管理三类核心交互上仍有结构性缺口。
- **OpenCode 提供商回归（#11036）**：v0.8.4 后免费档 `big-pickle` 模型在所有提供商尝试后报 403，疑似请求体或认证头变更导致——这是用户首次大规模反映"升级后无法继续工作"的实际场景。

---

## 5. Bug 与稳定性

按严重程度排序的活跃 Bug：

### S0 - 数据丢失 / 安全风险（必须立即修复）
| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | `parallel_tools` 下并发 `file_edit`/`file_write` 同一路径静默丢一个 | OPEN（09-27 新开） | ❌ |
| [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | `cron`/`heartbeat`/`headless SOP`/`spawn_subagent` 缺少 `ApprovalManager` | OPEN | ❌ |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git `--attr-source` 隐藏 mutating 子命令 | ✅ CLOSED | 已修 |

### P1（应在下个版本修复）
| Issue | 标题 | 状态 | 修复 PR |
|---|---|---|---|
| [#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) | Daemon 未注册 channel-map factory（webhook/cron/SOP turn 无 channel） | OPEN/blocked | ❌ |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | v0.8.5 移除 token 驱动的上下文压缩 | OPEN | ❌ |
| [#10991](https://github.com/zeroclaw-labs/zeroclaw/issues/10991) | Windows `ONLOGON` 调度任务弹出控制台窗口 | OPEN | ❌ |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | 多模态图像上限淘汰重写早期历史消息，Anthropic 缓存前缀失效 | OPEN | ❌ |
| [#10643](https://github.com/zeroclaw-labs/zeroclaw/issues/10643) | 子代理审批强制 | ✅ CLOSED | 已修 |

### P2（已退化但可工作）
- [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) OpenCode big-pickle 403（`needs-repro`）
- [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) WhatsApp suppress_voice ✅
- [#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059) WhatsApp force_voice 未被尊重
- [#10976](https://github.com/zeroclaw-labs/zeroclaw/issues/10976) WhatsApp @提及双向解析损坏
- [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) Matrix `send_via` 将用户 ID 当房间名
- [#11020](https://github.com/zeroclaw-labs/zeroclaw/issues/11020) ACP `TodoWrite` 计划持久化静默失败
- [#11021](https://github.com/zeroclaw-labs/zeroclaw/issues/11021) ACP 硬取消后 `session_end` 不保证 exactly-once
- [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108) `map_tool_name_alias` 将浏览器/搜索重写为 shell

**结论**：3 个 S0 中已修 1 个；剩余 2 个（#11136、#10968）尚未出现对应 fix PR，需要维护者重点关注。

---

## 6. 功能请求与路线图信号

| 优先级 | Issue | 类别 | 状态 | 进入下版本的可能性 |
|---|---|---|---|---|
| 高 | [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) Cheaper Inference 作为 OpenAI 兼容提供商 | 新提供商 | OPEN, in-progress | ⭐⭐⭐⭐（已 in-progress，下版本有望） |
| 高 | [#10977](https://github.com/zeroclaw-labs/zeroclaw/issues/10977) WhatsApp Web `create_room`/`invite_user` | Channel 完整化 | OPEN | ⭐⭐⭐⭐ |
| 中 | [#10969](https://github.com/zeroclaw-labs/zeroclaw/issues/10969) Cron/心跳抖动窗口防同帧并发 | 调度稳定性 | OPEN | ⭐⭐⭐ |
| 中 | [#10933](https://github.com/zeroclaw-labs/zeroclaw/issues/10933) MiniMax TTS / STT 提供商家族（cn vs intl） | 新提供商 | OPEN, parking-lot | ⭐⭐ |
| 中 | [#10900](https://github.com/zeroclaw-labs/zeroclaw/issues/10900) 转录提供商级联（按序 fallback） | 鲁棒性 | OPEN, parking-lot | ⭐⭐⭐ |
| 中 | [#10909](https://github.com/zeroclaw-labs/zeroclaw/issues/10909) ZeroCode composer 标准文本编辑 | UX | OPEN, in-progress | ⭐⭐⭐⭐ |
| 中 | [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) delegate 子代理转发会话身份 | 安全/审计 | OPEN, parking-lot | ⭐⭐ |
| 中 | [#11074

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*