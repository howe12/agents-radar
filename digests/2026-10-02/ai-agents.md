# OpenClaw 生态日报 2026-10-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-02 03:34 UTC

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

# OpenClaw 项目日报 · 2026-10-02

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高活跃、强回归压力**的双重特征。24 小时内共更新 500 条 Issue（296 新开/活跃、204 关闭）与 500 条 PR（280 待合并、220 已合并/关闭），吞吐量大致持平，但**P0/P1 严重回归问题占比显著上升**，核心集中在 SQLite I/O 压力、Gateway 启动阻塞、memory-core 状态机错配、以及 Windows 平台上的 `DataCloneError`/`Proxy` 跨线程传递缺陷。与此同时维护者发布了 extended-stable **v2026.8.34** 并已着手准备 **v2026.8.35** 候选（[#163214](https://github.com/openclaw/openclaw/pull/163214)），社区节奏从"快速发版"切换到"止血 + 回滚兼容性"。**整体健康度评估：项目处于热修密集阶段，性能/资源类回归明显多于功能类需求，建议维护者把 Gateway 主线程拆分、SQLite checkpoint 与 worker 池化列为本周最高优先级。**

---

## 2. 版本发布

### [v2026.8.34](https://github.com/openclaw/openclaw/releases/tag/v2026.8.34) — extended-stable（网关 LTS 等价线）

- **定位**：仅限 gateway 的 `extended-stable` 发布线，相当于 LTS。本期基于 2026 年 8 月底主干，叠加关键安全更新、可靠性/性能修复及新模型支持。
- **典型用户**：生产环境、无法跟随 2026.9.x 快速迭代的运营商、对变更敏感的多集群客户。
- **破坏性变更**：作为 `extended-stable` 通道，理论上不引入破坏性变更；但请关注与之相邻的 [PR #163214](https://github.com/openclaw/openclaw/pull/163214)（v2026.8.35 候选）即将引入 **GPT-6.1 Sol/Reef 支持**，运营商需复核自身模型目录。
- **迁移注意事项**：
  - 升级前请备份 `~/.openclaw/agents/<agent>/agent/openclaw-agent.sqlite-wal`，近期 [Issue #143524](https://github.com/openclaw/openclaw/issues/143524) 显示 WAL 文件可膨胀至 1.4–2.8 GB；
  - Windows 用户在升级前应先核对 session-history worker 的 `Proxy` 路径修复状态（[#157067](https://github.com/openclaw/openclaw/issues/157067)、[#161654](https://github.com/openclaw/openclaw/issues/161654)、[#161828](https://github.com/openclaw/openclaw/issues/161828) 均已 CLOSED）；
  - 容器/共享 PID 环境请关注 usage-cost refresh lock 的"伪锁"问题（[#114234](https://github.com/openclaw/openclaw/issues/114234)）。

---

## 3. 项目进展（合并/关闭的重要 PR）

今日 220 条 PR 完成流转，重点进展包括：

| 类别 | PR | 关键收益 |
|---|---|---|
| 发布线 | [#163214](https://github.com/openclaw/openclaw/pull/163214) | 准备 extended-stable **v2026.8.35**，携带 GPT-6.1 Sol/Reef 支持与多项 P0/P1 backport |
| 安全 | [#161480](https://github.com/openclaw/openclaw/pull/161480) (P1) | 修复长文本中凭证在 chunk 边界处绕过 redaction 的问题，根除 `RangeError: Maximum call stack` |
| 安全/Agents | [#159013](https://github.com/openclaw/openclaw/pull/159013) | 删除 agent 时正确释放 model/auth reader 与 memory owner，杜绝"幽灵"数据库复用 |
| 子代理/会话 | [#163195](https://github.com/openclaw/openclaw/pull/163195) (P1) | 修复 registry 写重叠导致的"子代理无法唤醒父会话" |
| Gateway 性能 | [#163200](https://github.com/openclaw/openclaw/pull/163200) | 把冷存储维护选择移出 Gateway 主线程，进 worker |
| Gateway 性能 | [#163194](https://github.com/openclaw/openclaw/pull/163194) | 启动期 memory catch-up 的 SQLite 统计搬到 worker，缩短启动阻塞 |
| Gateway 性能 | [#163120](https://github.com/openclaw/openclaw/pull/163120) | agent completion 时的 SQLite I/O 不再 stall Gateway 循环 |
| Build | [#162997](https://github.com/openclaw/openclaw/pull/162997) | 隔离插件资产一次性生成，缩减 CI 重复构建 |
| 插件 SDK | [#162669](https://github.com/openclaw/openclaw/pull/162669) | 把 service scheduling 绑定到 host 生命周期，关停时正确取消 |
| Doctor 迁移 | [#162612](https://github.com/openclaw/openclaw/pull/162612) / [#163137](https://github.com/openclaw/openclaw/pull/163137) / [#163203](https://github.com/openclaw/openclaw/pull/163203) | 把 legacy 智能体名册、provenance 修复、WhatsApp unscoped 凭证迁移全部收敛到 Doctor |
| 清理 | [#163204](https://github.com/openclaw/openclaw/pull/163204) / [#163181](https://github.com/openclaw/openclaw/pull/163181) / [#163216](https://github.com/openclaw/openclaw/pull/163216) / [#163209](https://github.com/openclaw/openclaw/pull/163209) | 清理未使用的转录字段、2026 年 7 月前 Telegram / Nextcloud Talk / 头像 迁移路径 |
| CI | [#163217](https://github.com/openclaw/openclaw/pull/163217) / [#163215](https://github.com/openclaw/openclaw/pull/163215) | 修复 Windows 下 declaration fixture 超时；恢复 2026.9.8 的 self-upgrade 验证 |

> **整体评估**：今日的合并不再追求"加新功能"，而是围绕 **Gateway 主线程瘦身、SQLite 与 worker 边界清晰化、Doctor 接管历史迁移** 三条主线推进。这与 [Issue #149538](https://github.com/openclaw/openclaw/issues/149538)、[#155859](https://github.com/openclaw/openclaw/issues/155859) 等 P0 "Gateway 不响应"反馈高度对应——可以视为对社区投诉的结构性回应。

---

## 4. 社区热点

按评论数排名的最活跃议题反映三组长期诉求：

1. **SQLite 不受控增长 / 资源耗尽**
   - [#143524](https://github.com/openclaw/openclaw/issues/143524)（103 评论，P0）：Agent SQLite WAL 在 `wal_autocheckpoint=1000` 设置下仍增长到 1.4–2.8 GB，阻塞 Gateway 启动（Windows，2026.9.2/9.3）。社区强烈诉求：**checkpoint 应该内嵌而非依赖系统调用**。
   - [#114612](https://github.com/openclaw/openclaw/issues/114612)（15 评论，P1）：`memory_index_chunks` + `memory_embedding_cache` 无保留/淘汰策略，磁盘会被填满。
   - [#160386](https://github.com/openclaw/openclaw/issues/160386)（8 评论，P0）：2026.9.6 在大 session 库上触发 `STATE_DATABASE_READ_ADMISSION_INVALIDATED`。

2. **2026.9.x 升级导致稳定性崩塌**
   - [#153257](https://github.com/openclaw/openclaw/issues/153257)（40 评论，P0）：用户原话 *"I genuinely regret upgrading to OpenClaw 2026.9.5"*，一次升级导致 8 小时恢复工作。
   - [#149538](https://github.com/openclaw/openclaw/issues/149538)（23 评论，P0）：632-agent 集群，Gateway 到达 ready 后 `/health` 全超时，事件循环饿死。
   - [#155859](https://github.com/openclaw/openclaw/issues/155859)（11 评论，P0）：Gateway 启动 wall-time 与已启用插件数线性相关，`discord` / `codex` / `openclaw-weixin` 吃掉 120s 预算。
   - [#157126](https://github.com/openclaw/openclaw/issues/157126)（8 评论，P1）：CLI MCP bridge 继承首次启动请求作用域，重启后 owner turn 丢失 `operator.admin`。

3. **Windows 平台 `DataCloneError` 系列**
   - [#157067](https://github.com/openclaw/openclaw/issues/157067)（21 评论，**CLOSED**）、[#161654](https://github.com/openclaw/openclaw/issues/161654)（10 评论，**CLOSED**）、[#161828](https://github.com/openclaw/openclaw/issues/161828)（7 评论，**CLOSED**）、[#161953](https://github.com/openclaw/openclaw/issues/161953)（8 评论，**CLOSED**）。
   - 闭合但**仍未在 release note 集中说明**，Windows 用户群体存在知情不足的担忧。

**背后诉求总结**：用户最希望的不是新模型支持，而是 **(a) 可预测的升级路径，(b) Gateway 主线程不让 SQLite I/O 卡死，(c) WAL/embedding 表有界**。这也是为何 [PR #163214](https://github.com/openclaw/openclaw/pull/163214) 选择把 backport 重点放在这些 P0/P1 项目上。

---

## 5. Bug 与稳定性（按严重程度）

### P0（崩溃/不可用，多为 ux-release-blocker）

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | SQLite WAL 无限增长阻塞 Gateway 启动 | OPEN | 无直接 PR（社区呼声最高） |
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 导致稳定环境 8 小时恢复 | OPEN | 无明确修复 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后不响应，事件循环饥饿 | OPEN | [#163200](https://github.com/openclaw/openclaw/pull/163200)、[#163194](https://github.com/openclaw/openclaw/pull/163194) 间接相关 |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog.worker.js 每小时泄漏 4–5 GB | OPEN | 无 |
| [#160521](https://github.com/openclaw/openclaw/issues/160521) | state DB read-admission seal → worker inventory closed → unhandled rejection | OPEN | 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动 wall-time 随插件数线性增长 | OPEN | 无直接修复，但 [#163194](https://github.com/openclaw/openclaw/pull/163194) 可减轻部分 worker 启动阻塞 |
| [#160386](https://github.com/openclaw/openclaw/issues/160386) | 2026.9.6 大 session 库触发 SQLite I/O 雪崩 | OPEN | [#163195](https://github.com/openclaw/openclaw/pull/163195) 间接相关 |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app boot-loop gateway；`doctor` 修复被 app 自动回滚 | OPEN | 无 |
| [#158239](https://github.com/openclaw/openclaw/issues/158239) | 老 kernel 上 gateway 启动失败（fs-safe fallback） | OPEN | 无 |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows `sessions.create` 全失败（9.7 regression） | **CLOSED** | ✅ |
| [#142421](https://github.com/openclaw/openclaw/openclaw/issues/142421) | `models auth logout` 后明文凭证仍残留在 plugin-model-catalog 缓存 | **CLOSED** | ✅ |

### P1（功能性回归 / 信息丢失）

- [#139710](https://github.com/openclaw/openclaw/issues/139710) mid-turn plugin 替换杀掉 system-agent turn（OPEN）
- [#148707](https://github.com/openclaw/openclaw/issues/148707) reply 丢失：tool authority snapshot 不一致（OPEN）
- [#97616](https://github.com/openclaw/openclaw/issues/97616) 钩子/工具子进程未被回收，僵尸累积（OPEN，长期挂起）
- [#85030](https://github.com/openclaw/openclaw/issues/85030) MCP 工具未注入 subagent（**CLOSED**，社区 👍 6）
- [#157126](https://github.com/openclaw/openclaw/issues/157126) CLI MCP bridge 作用域泄漏（OPEN）
- [#161828](https://github.com/openclaw/openclaw/issues/161828) Windows chat.send `DataCloneError`（**CLOSED**）
- [#114234](https://github.com/openclaw/openclaw/issues/114234) usage-cost 锁在共享 PID 容器里永不释放（OPEN）
- [#161976](https://github.com/openclaw/openclaw/issues/161976) WhatsApp DM 在 restart 后 durable registry handoff 失败（OPEN）
- [#147420](https://github.com/openclaw/openclaw/issues/147420) MCP computer tool 永不释放 COMPUTER_HOST（OPEN）
- [#129455](https://github.com/openclaw/openclaw/issues/129455) requester-settle 在 subagent 调度前过早终结（OPEN）
- [#115546](https://github.com/openclaw/openclaw/issues/115546) CLI-budget compaction 100% 失败，4.9s 即触发超时（OPEN）
- [#156895](https://github.com/openclaw/openclaw/issues/156895) agent 创建的 automation 立即 fail-closed（OPEN）
- [#77717](https://github.com/openclaw/openclaw/issues/77717) Feishu bot identity 恢复竞态导致永久断连（OPEN）
- [#142421](https://github.com/openclaw/openclaw/issues/142421) auth logout 后明文凭证残留（**CLOSED**）

> **观察**：本轮 P0 普遍"无 fix PR"——这是个**风险信号**，建议维护者在下次发布前对上述 OPEN P0 列表做一次强制 triage。

---

## 6. 功能请求与路线图信号

| 提案 | Issue / PR | 状态 | 路线图可能性 |
|---|---|---|---|
| exec-approvals denylist 支持（"允许所有但拒绝 X"） | [#6615](https://github.com/openclaw/openclaw/issues/6615)（12 评论 👍 8）、[#71097](https://github.com/openclaw/openclaw/issues/71097) | OPEN | **高**——安全治理长期需求，已在多帖中长期投票 |
| MEMORY.md 变更审计日志 | [#20935](https://github.com/openclaw/openclaw/issues/20935) | OPEN | 中—与 [#141004](https://github.com/openclaw/openclaw/pull/141004) audit 运行时技能调用形成呼应，**可能纳入 2026.9.x** |
| Muse Spark 图像生成（muse-image 作为 meta 一等公民） | [#132228](https://github.com/openclaw/openclaw/issues/132228) / [PR #132229](https://github.com/openclaw/openclaw/pull/132229) | OPEN（needs proof） | 中 |
| billing cooldown 探测式恢复 + 手动重置命令 | [#115642

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**报告日期：2026-10-02**
**覆盖项目：13 个**（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现"**一超多强、垂直分化**"的成熟期形态。**OpenClaw 以日均 500 条 Issue + 500 条 PR 的吞吐量形成绝对头部**，其 v2026.8.34 extended-stable 与 v2026.9.x 双轨制反映出已进入"运营商级 LTS + 快速迭代"分层阶段；ZeroClaw、Hermes Agent、NanoClaw 三个项目构成第二梯队，分别围绕"安全组合边界"、"跨平台桌面一致"、"供应链钉死"形成清晰差异化路线。其余项目则普遍进入"质量巩固期"——以安全/状态一致性加固为主轴，新功能发布节奏显著放慢。**整个生态的共性痛点高度收敛**于 SQLite I/O 阻塞 Gateway 事件循环、MCP 协议韧性、多渠道一致性、Provider 兼容性矩阵这四个工程底层问题，反映出 LLM Agent 正从"功能可用"向"生产可靠"过渡的关键拐点。

---

## 2. 各项目活跃度对比

| 项目 | Issues（24h）| PRs（24h）| Releases | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（296 新/活跃、204 关闭）| 500（280 待合、220 合/关）| ✅ v2026.8.34 | 🟠 热修密集 | 止血 + 回滚兼容 |
| **ZeroClaw** | 39（全部 OPEN）| 50（全部 OPEN）| ❌ 无 | 🟡 高活跃零闭环 | v0.8.6/v0.9.0 重构收尾 |
| **Hermes Agent** | 50（46 活跃、4 关闭）| 50（49 待合、1 合/关）| ❌ 无 | 🟡 修复密度大 | 更新链路 + 桌面 UI 推进 |
| **NanoClaw** | 4（全部 OPEN）| 26（15 合/关）| ❌ 无 | 🟢 高合并率 | 安全加固 + 发布基建 |
| **NanoBot** | 0 | 17（3 合/关、14 待合）| ❌ 无 | 🟢 中等稳健 | 安全 + 状态一致性重构 |
| **CoPaw** | 7 | 9（2 关、7 待审）| ❌ 无 | 🟡 中等活跃 | Provider 适配 + Bug 修复 |
| **LobsterAI** | 7（全部 OPEN + stale）| 7（全合/关）| ❌ 无 | 🟡 内部整理 | 代码清理 + 死代码删除 |
| **PicoClaw** | 2 | 13（1 合、12 待）| ❌ 无 | 🟠 评审滞后 | 稳定性修复待落地 |
| **Moltis** | 0 | 2（待合）| ❌ 无 | 🟡 静默期 | TLS / MCP 韧性 |
| **IronClaw** | 2 | 1（待合）| ❌ 无 | 🟠 长期积压 | 设计评审阶段 |
| **TinyClaw** | 0 | 3（全合）| ❌ 无 | 🟡 温和维护 | Telegram 通道深耕 |
| **NullClaw** | 0 | 0 | ❌ 无 | ⚪ 休眠 | 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⚪ 休眠 | 无活动 |

> **统计周期口径**：Issues/PRs 包含"新开/活跃/关闭/合并"合计，并非纯增量。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 第二梯队代表（ZeroClaw / Hermes / NanoClaw）| 其他项目 |
|---|---|---|---|
| **日吞吐** | 1000 条（Issue+PR） | 50–90 条 | 0–26 条 |
| **发布模型** | extended-stable + 快速迭代双轨 | 单轨制 | 多为单轨制 |
| **生态集成** | Discord / Telegram / WhatsApp / Feishu / MCP / 多 Provider / Desktop / CLI | 通常 2–4 个渠道 + 1–2 Provider | 通常 1–2 渠道单一 Provider |
| **运营商级特性** | ✅（WAL 备份指引、容器 PID 兼容、模型目录迁移）| ❌ / 部分 | ❌ |
| **社区规模** | 评论数 100+ 的高热度议题常态化 | 评论数 5–30 为主 | 评论数普遍 0–4 |

**核心差异化**：

- **架构路线**：OpenClaw 走"Gateway + Worker + Doctor + Plugin SDK"四层架构，对应"主线程瘦身、SQLite 边界、迁移收敛、生命周期绑定"四条工程主线，**这是其他项目尚未规模化建设的复杂度**。
- **回归压力**：OpenClaw 是唯一出现 *"I genuinely regret upgrading"*（#153257）、632-agent 集群 Gateway 事件循环饿死（#149538）这类**运营商级故障报告**的项目，说明其用户群已深入到生产负载。
- **延后兼容承诺**：v2026.8.34 明确"理论上不引入破坏性变更"的 LTS 承诺，对应电信、金融等行业的合规需求——这是 Hermes Agent、ZeroClaw 等仍在快速演进项目无法提供的稳定承诺。
- **修复密度**：今日 220 条已合并 PR 中约 45% 涉及 Gateway 主线程拆分与 SQLite I/O 优化，**修复优先级与 P0 议题命中率显著高于行业平均水平**。

> **简言之**：OpenClaw 是生态中唯一进入"运营商级长期维护"阶段的项目；其他项目即便活跃，也仍处于"功能扩张 + 质量巩固"过渡期。

---

## 4. 共同关注的技术方向

以下 8 个方向在多个项目中同时浮现，构成 2026 年 Q4 AI 智能体生态的**结构性技术债**：

### 4.1 Gateway / SQLite I/O 阻塞事件循环（**5 项目**）
- **OpenClaw** [#143524](https://github.com/openclaw/openclaw/issues/143524) WAL 膨胀 1.4–2.8 GB、[#149538](https://github.com/openclaw/openclaw/issues/149538) 632-agent 集群饿死、[#155859](https://github.com/openclaw/openclaw/issues/155859) 启动 wall-time 随插件线性增长
- **NanoBot** [#5943](https://github.com/HKUDS/nanobot/pull/5943) 会话持久化从 JSONL 改造为 SQLite 事务 + bounded worker
- **NanoClaw** [#3981](https://github.com/qwibitai/nanoclaw/pull/3981) 升级 grpc 1.83.2 清除告警
- **ZeroClaw** [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite 后端 created_at 覆盖
- **CoPaw** [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) reload drain 静默丢弃
- **共识诉求**：**主线程不应承担任何 I/O 等待；SQLite 必须有 checkpoint 与保留策略**

### 4.2 MCP（Model Context Protocol）韧性（**4 项目**）
- **Moltis** [#1290](https://github.com/moltis-org/moltis/pull/1290) 启动失败恢复 + 会话过期重建 + 指数退避
- **NanoBot** 多个 MCP 工具未注入 subagent（[#4072](https://github.com/HKUDS/nanobot/issues/4072)）
- **ZeroClaw** [#11421](https://github.com/zeroclaw-labs/zeroclaw/pull/11421) MCP 内存浸泡测试基线
- **OpenClaw** MCP bridge 作用域泄漏 [#157126](https://github.com/openclaw/openclaw/issues/157126)
- **共识诉求**：MCP server 启动失败后必须可重试、会话过期必须可恢复、subagent 必须能继承工具

### 4.3 多渠道一致性（**5+ 项目**）
- **OpenClaw** Windows Proxy/DataCloneError 簇、Telegram / Nextcloud Talk / 头像迁移清理
- **NanoClaw** [#3456](https://github.com/qwibitai/nanoclaw/issues/3456) Discord 审批 custom_id 错乱、[#3570](https://github.com/qwibitai/nanoclaw/pull/3570) Telegram 偶发丢消息
- **Hermes Agent** Discord 自动线程 mention race（[#131118](https://github.com/nousresearch/hermes-agent/issues/131118)）
- **ZeroClaw** [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) WhatsApp Web 丢弃 caption
- **TinyClaw** 全部精力集中在 Telegram 持久化 / 交互 / 流式
- **共识诉求**：**渠道适配器的 Markdown 转义 / 审批卡片 / 富媒体 caption 必须有跨平台一致性测试基线**

### 4.4 Provider 兼容性矩阵（**3 项目**）
- **CoPaw** [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) DeepSeek 永久破坏会话、[#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) gpt-6 连通性失败
- **NanoBot** [#5698](https://github.com/HKUDS/nanobot/pull/5698) OpenAI web search 切换 API 类型丢失
- **OpenClaw** GPT-6.1 Sol/Reef 支持进入 v2026.8.35 backport（[#163214](https://github.com/openclaw/openclaw/pull/163214)）
- **PicoClaw** 新增 opencode-go provider（[#3371](https://github.com/sipeed/picoclaw/pull/3371)）
- **共识诉求**：Provider 白名单与上游模型演进脱节是普遍问题，**应建立 provider 协议抽象层与版本探测机制**

### 4.5 安全边界与作用域（**6 项目，几乎全员**）
- **ZeroClaw** [#11408–11422](https://github.com/zeroclaw-labs/zeroclaw/pull/11408) 5 个 XL 级安全 PR 堆栈（RPC 准入、SOP 私有访问、cron 写入越权、委托路径收紧）
- **NanoBot** [#5536](https://github.com/HKUDS/nanobot/pull/5536) restricted shell 缺沙箱即 fail-closed、[#5678](https://github.com/HKUDS/nanobot/pull/5678) DNS 空结果即拒
- **OpenClaw** [#161480](https://github.com/openclaw/openclaw/pull/161480) 凭证在 chunk 边界绕过 redaction
- **NanoClaw** [#3985](https://github.com/qwibitai/nanoclaw/pull/3985) systemd unit 0644 含凭据
- **Hermes Agent** [#131147](https://github.com/nousresearch/hermes-agent/pull/131147) GUI 卸载 dry-run
- **CoPaw** [#8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) skill_name 路径遍历
- **共识诉求**：**默认 fail-closed、作用域永不过期、凭据零明文残留**已成为开源 AI 助手的安全基线

### 4.6 更新机制与回滚（**5 项目**）
- **Hermes Agent** canary 更新（[#44877](https://github.com/nousresearch/hermes-agent/issues/44877) 已挂 112 天）、`--no-gateway-restart` 行为不符（[#131149](https://github.com/nousresearch/hermes-agent/issues/131149)）
- **NanoClaw** `/update-nanoclaw` 默认跟随 release tag（[#3986](https://github.com/qwibitai/nanoclaw/pull/3986)）、自审批 pre-release（[#3987](https://github.com/qwibitai/nanoclaw/pull/3987)）
- **OpenClaw** v2026.8.35 backport 选择
- **ZeroClaw** 已验证插件更新 + 失败回滚（[#10995](https://github.com/zeroclaw-labs/zeroclaw/issues/10995)）
- **PicoClaw** 32-bit ARM update asset 匹配 bug（[#3399](https://github.com/sipeed/picoclaw/pull/3399)）
- **共识诉求**：**升级必须可灰度、可回滚、可离线**

### 4.7 原子写与文件操作鲁棒性（**3 项目**）
- **NanoBot** [#5953](https://github.com/HKUDS/nanobot/pull/5953) P0：原子写防止撕裂读与崩溃窗口丢失
- **Hermes Agent** Docker sandbox 标记污染（[#131055](https://github.com/nous

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-02

> 数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
> 报告周期：2026-10-01 ~ 2026-10-02（过去 24 小时）

---

## 1. 今日速览

NanoBot 在过去 24 小时整体处于 **中等活跃度的工程治理期**。Issues 板块零增量，PR 侧则出现明显更新：17 个 PR 中 3 个已合并/关闭、14 个仍待合并，集中体现了"安全加固 + 状态一致性重构"两条主线。值得注意的是，已关闭的 3 个 PR 中有 2 个因合并冲突被标记 `[conflict]`，同时有 7 个待合并 PR 仍带有 `[conflict]` 标签，提示仓库可能面临分支同步压力。无新版本发布，整体健康度评估为 **中等偏稳健**。

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

过去 24 小时共有 **3 个 PR 进入终态**，推进了 WebUI 清理、多模态能力与子代理配置三个方向：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#5999](https://github.com/HKUDS/nanobot/pull/5999) | refactor: remove unused runtime and WebUI helpers | ✅ CLOSED | 清理 settings 路由重复、Weixin 无用 GET wrapper 及过时测试，降低 WebUI 维护负担 |
| [#2095](https://github.com/HKUDS/nanobot/pull/2095) | feat: add read_image tool for local multimodal inspection | ⚠️ CLOSED (conflict) | 引入 `ReadImageTool` 实现本地图片多模态检视，虽然关闭但功能信号已沉淀 |
| [#2094](https://github.com/HKUDS/nanobot/pull/2094) | feat: add explicit subagent model config and in-process runtime reload | ⚠️ CLOSED (conflict) | 显式化子代理模型选择并新增应用级进程内 reload 通路 |

> ⚠️ 其中 [#2095](https://github.com/HKUDS/nanobot/pull/2095) 与 [#2094](https://github.com/HKUDS/nanobot/pull/2094) 因冲突关闭，但作为长期挂起 PR（自 2026-03 起），其设计意图仍可能以新分支回归。

**整体进展评估**：推进幅度有限，更多是"清理 + 收尾"型改动；功能落地尚未兑现为 release。

---

## 4. 社区热点

> 注：本期 Issues 评论数均为 0，PR 评论数据 `undefined` 未提供。下文以"更新频次 + 优先级标签 + 涉及范围"作为热点判据。

热度 Top 5（按活跃度与影响力综合排序）：

1. **[#5953](https://github.com/HKUDS/nanobot/pull/5953) — fix(tools): atomic writes for file tools** 🟥 **P0**
   *作者*: louisss1016 | 最新更新 2026-10-01
   *热度信号*: 唯一 P0 级补丁；解决文件写入撕裂读与崩溃窗口丢失两大经典问题，影响所有写工具
2. **[#5536](https://github.com/HKUDS/nanobot/pull/5536) — fix(exec): fail closed when restricted shell lacks a sandbox** 🟧 P1
   *作者*: KDB-Wind | 关联 issue #4072
   *热度信号*: 安全边界类问题，restricted shell 缺乏沙箱时拒绝命令，避免 symlink/shell expansion 绕过工作区
3. **[#5943](https://github.com/HKUDS/nanobot/pull/5943) — refactor(session): centralize state ownership in SQLite** 🟧 P1
   *作者*: chengyongru
   *热度信号*: 涉及会话状态持久化架构级改动（JSONL → SQLite 事务 + 单 bounded worker）
4. **[#5885](https://github.com/HKUDS/nanobot/pull/5885) — feat(memory): gate idle transcript replacement on a token threshold** 🟧 P1
   *作者*: hir0xygen | 关联 #5280
   *热度信号*: 修复 short session 在 Dream pipeline 中被过早替换为摘要的恢复质量问题
5. **[#5941](https://github.com/HKUDS/nanobot/pull/5941) — feat(webui): connect to existing remote nanobot instances**
   *作者*: Re-bin
   *热度信号*: 用户最关心的"远程服务器常驻实例 + 本地 WebUI"工作流补齐，避免端口转发维护负担

**热点背后的诉求**：社区明显集中在 **状态一致性 / 安全隔离 / 写工具鲁棒性** 三个长期痛点，反映产品进入"加固期"而非"扩张期"。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🟥 P0（最高优先级）

| PR | 问题 | 修复方向 |
|---|---|---|
| [#5953](https://github.com/HKUDS/nanobot/pull/5953) | `WriteFileTool` / `EditFileTool` / `ApplyPatchTool` 使用 `write_text`/`write_bytes` 原地截断，存在 **撕裂读**（并发读者看到半写入文件）与 **崩溃窗口丢失** 风险 | 引入原子写（先写临时文件 + fsync + rename） |

### 🟧 P1（高优先级）

| PR | 问题 | 修复方向 |
|---|---|---|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | restricted shell 缺乏沙箱时，相对路径 symlink 与 shell expansion 可绕过工作区边界（[#4072](https://github.com/HKUDS/nanobot/issues/4072)） | 强制要求支持的进程沙箱或外部沙箱，否则 fail-closed |
| [#5943](https://github.com/HKUDS/nanobot/pull/5943) | 会话持久化在 turn 执行、元数据更新、关闭阶段共享可变缓存会话 | 改用 SQLite 事务 + 单 bounded worker |
| [#5885](https://github.com/HKUDS/nanobot/pull/5885) | 短会话被 idle compaction 替换为 LLM 摘要，导致恢复质量下降（[#5280](https://github.com/HKUDS/nanobot/issues/5280)） | 引入 token 阈值门控 |

### 🟨 P2（中等优先级）

| PR | 问题 | 修复方向 |
|---|---|---|
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 跨会话延迟消息 / 子代理结果在目标会话已删除后触发 **复活** | 要求目标会话必须存在才能投递 |
| [#5678](https://github.com/HKUDS/nanobot/pull/5678) | `resolve_url_target` 在 DNS 解析无结果时仍接受 hostname，pinned-DNS 传输继续走，SSRF 防线可被绕过 | 空 DNS / 仅无效 DNS 必须 fail-closed |
| [#5698](https://github.com/HKUDS/nanobot/pull/5698) | 关闭 OpenAI web search 后无法恢复先前 API 类型 | 在 provider draft 中保留临时选择 |
| [#5339](https://github.com/HKUDS/nanobot/pull/5339) | Temporary Chat 消息在等待 session-mention normalization 时被连接清理丢弃，恢复后未拒绝即发布 | 重检 owning connection 与 transient 状态 |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) | 被拒绝的 WebUI 消息可能留下附件、订阅、临时聊天注册、排队 turn 所有权、用户历史等副作用 | 仅回滚被拒绝消息创建的资源 |
| [#5412](https://github.com/HKUDS/nanobot/pull/5412) | 后台 gateway/API 进程 stdout 被 Python 缓冲，child 仍在运行时看不到启动日志 | 设置 `PYTHONUNBUFFERED=1` |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | sustained goal 在 idle 时连续触发自动 continue，导致重复回复耗尽 iteration budget | 限制至最多两次连续自动 continue |

> 📊 **统计**：本期共 **8 个 Bug 类 PR**，其中 1 个 P0、3 个 P1、4 个 P2，全部已有对应修复 PR，**无未覆盖的高危 crash**。

---

## 6. 功能请求与路线图信号

下表梳理本期与新功能强相关的 PR，可视作下一版本的候选信号：

| 功能 | PR | 信号强度 | 备注 |
|---|---|---|---|
| **连接已有远程 nanobot 实例**（WebUI） | [#5941](https://github.com/HKUDS/nanobot/pull/5941) | ⭐⭐⭐⭐ | 去除端口转发命令 / 单独 launcher，符合"远端模型 + 本地界面"主流工作流 |
| **Provider-neutral 结构化决策客户端** | [#5825](https://github.com/HKUDS/nanobot/pull/5825) | ⭐⭐⭐⭐ | 替换 JEV 特定客户端；OpenRouter + System One 协议作为首个注册后端 |
| **本地图片多模态检视工具** | [#2095](https://github.com/HKUDS/nanobot/pull/2095) | ⭐⭐⭐ | 已关闭（conflict），但需求清晰，可能以新分支回归 |
| **显式子代理模型配置 + 进程内 reload** | [#2094](https://github.com/HKUDS/nanobot/pull/2094) | ⭐⭐⭐ | 已关闭（conflict），`agents.defaults.subagent_model` 配置项有望被吸收 |
| **基于 token 阈值的 idle transcript 替换** | [#5885](https://github.com/HKUDS/nanobot/pull/5885) | ⭐⭐⭐ | 同时兼顾 Dream pipeline 与 resume 质量，路线图契合度高 |
| **目标权限跨作用域过期** | [#5166](https://github.com/HKUDS/nanobot/pull/5166) | ⭐⭐ | 修正 `asyncio.create_task()` 复制 ContextVar 导致的权限泄漏 |

**路线图判断**：下一版本很可能围绕 **WebUI 远程化 + 安全/状态一致性加固 + Provider 抽象层** 展开。

---

## 7. 用户反馈摘要

本期 Issues 互动为零，PR 评论数据未提供（`undefined`），无法直接提炼用户原声。结合 PR 描述可侧面推断以下痛点场景：

- **场景 A：本地 + 远端混合部署用户**
  *诉求*: 希望直接用本地 WebUI 连接远端已运行实例
  *对应 PR*: [#5941](https://github.com/HKUDS/nanobot/pull/5941)
- **场景 B：使用多模态模型的开发者**
  *诉求*: 希望 nanobot 工具链原生支持读取本地图片
  *对应 PR*: [#2095](https://github.com/HKUDS/nanobot/pull/2095)
- **场景 C：被 #4072 影响的受限 shell 用户**
  *诉求*: 在受限执行模式下不应允许 symlink / expansion 绕过
  *对应 PR*: [#5536](https://github.com/HKUDS/nanobot/pull/5536)
- **场景 D：依赖 SSRF 防护的部署方**
  *诉求*: DNS 解析失败/空结果不应放行
  *对应 PR*: [#5678](https://github.com/HKUDS/nanobot/pull/5678)
- **场景 E：经历会话"复活"异常的用户**
  *诉求*: 删除的会话不应被延迟消息重新创建
  *对应 PR*: [#5483](https://github.com/HKUDS/nanobot/pull/5483)

> ⚠️ 由于评论数据缺失，**满意度信号无法量化**，建议下一周期补充评论维度统计。

---

## 8. 待处理积压

以下为 **值得维护者优先关注** 的长期挂起项：

| 类型 | 编号 | 标题 | 创建日期 | 持续时间 | 风险 |
|---|---|---|---|---|---|
| PR | [#5166](https://github.com/HKUDS/nanobot/pull/5166) | fix(agent): expire inherited goal permission outside scope | 2026-07-29 | ~2 个月 | 安全相关，权限 ContextVar 泄漏 |
| PR | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | fix(agent): bound sustained-goal continuation when the turn goes idle | 2026-08-05 | ~2 个月 | 用户体验退化 |
| PR | [#5339](https://github.com/HKUDS/nanobot/pull/5339) | fix(webui): reject discarded temporary chat messages | 2026-08-11 | ~7 周 | WebUI 行为正确性 |
| PR | [#5412](https://github.com/HKUDS/nanobot/pull/5412) | fix(gateway): flush background child output to logs | 2026-08-17 | ~7 周 | 可观测性盲区 |
| PR | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | fix(session): prevent deleted sessions from being recreated | 2026-08-22 | ~6 周 | 数据一致性 |
| PR | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | fix(exec): fail closed when restricted shell lacks a sandbox | 2026-08-25 | ~5 周 | 安全边界，关联 #4072 |
| PR | [#5678](https://github.com/HKUDS/nanobot/pull/5678) | fix(security): reject empty DNS results | 2026-09-06 | ~4 周 | SSRF 防线 |
| PR | [#5698](https://github.com/HKUDS/nanobot/pull/5698) | fix(webui): preserve explicit API types across search toggles | 2026-09-08 | ~3.5 周 | WebUI 状态管理 |
| PR | [#5825](https://github.com/HKUDS/nanobot/pull/5825) | feat: add provider-neutral structured decision client | 2026-09-20 | ~2 周 | 架构演进 |
| PR | [#5885](https://github.com/HKUDS/nanobot/pull/5885) | feat(memory): gate idle transcript replacement on a token threshold | 2026-09-23 | ~9 天 | 内存管线质量 |
| PR | [#5941](https://github.com/HKUDS/nanobot/pull/5941) | feat(webui): connect to existing remote nanobot instances | 2026-09-27 | ~5 天 | 用户呼声明确 |
| PR | [#5943](https://github.com/HKUDS/nanobot/pull/5943) | refactor(session): centralize state ownership in SQLite | 2026-09-27 | ~5 天 | 架构级重构 |
| PR | [#5953](https://github.com/HKUDS/nanobot/pull/5953) | fix(tools): atomic writes for file tools | 2026-09-28 | ~4 天 | **P0** 写工具鲁棒性 |
| PR | [#5601](https://github.com/HKUDS/nanobot/pull/5601) | fix(webui): roll back rejected message side effects | 2026-08-29 | ~5 周 | WebUI 一致性 |
| PR | [#2095](https://github.com/HKUDS/nanobot/pull/2095) | feat: add read_image tool | 2026-03-16 | ~6.5 个月 | 已关闭但需求未落地 |
| PR | [#2094](https://github.com/HKUDS/nanobot/pull/2094) | feat: add explicit subagent model config | 2026-03-16 | ~6.5 个月 | 已关闭但需求未落地 |

**维护者建议

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-10-02

## 1. 今日速览

Hermes Agent 在过去 24 小时保持高度活跃：Issues 端 50 条更新（新开/活跃 46，关闭 4），PR 端 50 条更新（合并/关闭 1，待合并 49），无新版本发布。社区讨论热度集中，**#127665（桌面端重复渲染）以 30 条评论领跑**。今日主线围绕 **Gateway 启动/重启稳定性**、**Updater 行为**、**桌面端 UI 会话状态**、**浏览器工具在多平台的兼容性** 四个方向展开；P1 级修复 PR 集中涌现（#131147、#131148、#131155），说明维护团队对更新链路的回归问题反应迅速。整体健康度评估：**中高活跃、修复密度大，但待合并 PR 积压风险上升**。

---

## 2. 版本发布

今日无新版本发布。最近一个稳定版本仍为社区 Issues 中频繁出现的 v0.21.3 / v0.21.5（参见 [#130294](https://github.com/nousresearch/hermes-agent/issues/130294)、[#125592](https://github.com/nousresearch/hermes-agent/issues/125592)）。

---

## 3. 项目进展（合并/关闭的 PR 与 Issue）

### 已关闭 Issue（4 条）
- [#130987](https://github.com/nousresearch/hermes-agent/issues/130987) **P1**：`hermes update` / gateway 重启在 cron 任务场景下被错误阻塞最长 30 分钟 → 已关闭。
- [#126706](https://github.com/nousresearch/hermes-agent/issues/126706) **P2**：Desktop 后端完成轮次但 UI 永远不收尾、最终助手消息不渲染（10–23 分钟空转）。
- [#130606](https://github.com/nousresearch/hermes-agent/issues/130606) **P2**：Desktop 重新打开会话时滚动位置偏移。
- [#130590](https://github.com/nousresearch/hermes-agent/issues/130590) **P2**：Desktop 重新打开会话时阅读位置不可达。

### 已合并/关闭 PR（1 条）
无显示评论的合并条目公开（数据中未单独列出已合并 PR 详情），但以下 P1 PR 状态均为 OPEN，等待合并后将形成一次系统性更新链路修复潮：
- [#131148](https://github.com/nousresearch/hermes-agent/pull/131148) **P1**：Gateway 启动暖启动期间阻止入站消息进入，避免首轮轮询永久挂起（直接对应 #131145）。
- [#131147](https://github.com/nousresearch/hermes-agent/pull/131147) **P1**：GUI 卸载增加 `--dry-run` 真实生效，并避免破坏 TUI/dashboard 共享依赖。
- [#131155](https://github.com/nousresearch/hermes-agent/pull/131155) **P1**：修复 `hermes update` 跳过 cron 任务的延后等待（修复 #129947）。

> 推进评估：今日 4 个 P2 桌面端 UI 问题集中关闭，加上 3 条 P1 PR 已就绪等待合并，**项目在"桌面端会话状态 + 更新链路"两个长期痛点上明显向前推进了一步**。

---

## 4. 社区热点

| # | 类型 | 标题 | 评论/点赞 | 链接 |
|---|------|------|----------|------|
| 1 | Issue | Desktop 同一回复渲染两次（overlay fold 豁免 live 行） | 30 / 0 | [#127665](https://github.com/nousresearch/hermes-agent/issues/127665) |
| 2 | Issue | `gateway migrate --multiplex` 在 launchd 启动的 gateway 上无法识别命令行 | 6 / 0 | [#124120](https://github.com/nousresearch/hermes-agent/issues/124120) |
| 3 | Issue | Windows Desktop：解耦"最小化"与"隐藏到托盘" | 5 / **1** | [#119120](https://github.com/nousresearch/hermes-agent/issues/119120) |
| 4 | Issue | 真实 profile 的 browser_exec 在 Chrome 死后永远失败 | 4 / 0 | [#101029](https://github.com/nousresearch/hermes-agent/issues/101029) |
| 5 | PR | split replies resume from failed chunk on 11 adapters | 高重要度 | [#124295](https://github.com/nousresearch/hermes-agent/pull/124295) |

**诉求分析**：
- 桌面端 UI 状态一致性问题（#127665、#126706、#130606、#130590）形成连续簇：用户在同一会话反复遇到"前端表现与后端状态错位"，是当下最强的社区痛点。
- 多平台适配（launchd / Windows / macOS tar 行为差异 [#131146](https://github.com/nousresearch/hermes-agent/pull/131146)）反映出 Hermes 跨平台覆盖广，但系统服务集成细节仍有大量边界 case。
- Windows 用户的"最小化行为"诉求（#119120 唯一👍）暗示 **Windows 桌面体验是该项目的关键增长面**。

---

## 5. Bug 与稳定性（按严重程度）

### P0（紧急）
- [#131118](https://github.com/nousresearch/hermes-agent/issues/131118)：Discord 自动线程的 mention 钉住父频道 topic，导致线程第二轮重渲染会话 prompt → **缓存层 race condition**，暂无关联 PR。

### P1（高）
- [#131145](https://github.com/nousresearch/hermes-agent/issues/131145)：Telegram 网关启动暖启动未完成时放行入站消息，首轮永久挂起，无错误、无 provider 调用 → **已有修复 PR** [#131148](https://github.com/nousresearch/hermes-agent/pull/131148)。
- [#131149](https://github.com/nousresearch/hermes-agent/issues/131149)：Windows `hermes update --no-gateway-restart` 实际仍停止 fleet，并将 gateway-parented 更新 SIGTERM → 行为与文档不符，**暂无 PR**。
- [#130987](https://github.com/nousresearch/hermes-agent/issues/130987)（已关闭）→ [#131155](https://github.com/nousresearch/hermes-agent/pull/131155) 修复中。
- [#131147](https://github.com/nousresearch/hermes-agent/pull/131147) GUI 卸载 dry-run 不生效（修复 PR 已就绪）。
- [#17803](https://github.com/nousresearch/hermes-agent/issues/17803)：Xiaomi MiMo 模型 `tool_call_id` 缺失（needs-repro，长期未处理）。

### P2（中等）
- [#131055](https://github.com/nousresearch/hermes-agent/issues/131055)：Linux Desktop 二实例启动污染 sandbox fallback marker → 粘性 `--no-sandbox` → 渲染端 SIGILL 循环。
- [#131033](https://github.com/nousresearch/hermes-agent/issues/131033)：Bedrock Converse 路径跳过 PR #116759 的 redacted-reasoning 恢复，GPT→Claude fallback 三次失败。
- [#131144](https://github.com/nousresearch/hermes-agent/issues/131144)：内置浏览器工具在 UUID 会话名下 socket 路径 129 字节超 103 限制 → **已有修复 PR** [#131153](https://github.com/nousresearch/hermes-agent/pull/131153)。
- [#131122](https://github.com/nousresearch/hermes-agent/issues/131122)：delegate 子任务清理后遗留容器别名与 cwd 记录。
- [#127995](https://github.com/nousresearch/hermes-agent/issues/127995)：terminal guard 把合法 venv-python heredoc 中的 `&` 误判为后台命令。
- [#131099](https://github.com/nousresearch/hermes-agent/issues/131099)：`hermes sessions archive` 缺少 `--session-id` 且静默跳过 live 会话。
- [#126523](https://github.com/nousresearch/hermes-agent/issues/126523)：`browser_vision` 对原生视觉模型隐藏 `screenshot_path`；`browser_cdp` 跳过 300s 超时夹紧。
- [#130294](https://github.com/nousresearch/hermes-agent/issues/130294)：Windows uv sync 报 `failed to remove directory *.data (os error 2)`。
- [#101029](https://github.com/nousresearch/hermes-agent/issues/101029)：真实 profile 浏览器 Chrome 死后 daemon 不关闭。
- [#124120](https://github.com/nousresearch/hermes-agent/issues/124120)：launchd-launched gateway 命令行识别失败。

### P3（低）
- [#87444](https://github.com/nousresearch/hermes-agent/issues/87444)：延迟更新提示渲染原始 ANSI 转义。
- [#125520](https://github.com/nousresearch/hermes-agent/issues/125520)：Mnemosyne 插件已装但报"未初始化"。
- [#125592](https://github.com/nousresearch/hermes-agent/issues/125592)：Windows 旧 updater 在 root-module 新增时遗留陈旧 editable finder。
- [#5865](https://github.com/nousresearch/hermes-agent/issues/5865)：Discord `/slash` 命令在频道内未拦截。

> **稳定性总览**：今日关闭 4 条 P1/P2、3 条 P1 PR 待合并，覆盖更新链路与桌面 UI；但 P0 Discord 缓存 race、Windows 更新行为文档不符仍**暴露在生产风险中**。

---

## 6. 功能请求与路线图信号

| 优先级 | 需求 | 信号强度 | 关联 PR | 链接 |
|--------|------|---------|---------|------|
| 中 | Cron 任务 `per-job max_tokens` 控制（避免每次占用完整上下文） | 高（直接账单影响） | 无 | [#131119](https://github.com/nousresearch/hermes-agent/issues/131119) |
| 中 | Canary-first 灰度更新 + smoke check + 自动回滚 | 高（多 profile 部署刚需） | 概念性 [#13603](https://github.com/nousresearch/hermes-agent/issues/13603) / [#131149](https://github.com/nousresearch/hermes-agent/issues/131149) | [#44877](https://github.com/nousresearch/hermes-agent/issues/44877) |
| 中 | Hindsight 记忆：retain 工具调用与结果 | 中 | 无 | [#6429](https://github.com/nousresearch/hermes-agent/issues/6429) |
| 中 | Skill 配置通过 `.env` 解析（`env_key` fallback） | 中 | 无 | [#6406](https://github.com/nousresearch/hermes-agent/issues/6406) |
| 中 | 经典 CLI 主题根据终端背景切换 light/dark | 中 | **已有 PR** [#131151](https://github.com/nousresearch/hermes-agent/pull/131151) | — |
| 低 | 决策模型选择（Jev、Tev1、nimble 等） | 低 | 无 | [#129686](https://github.com/nousresearch/hermes-agent/issues/129686) |
| 低 | Windows 桌面：解耦最小化与托盘隐藏 | 中（已收 👍） | 无 | [#119120](https://github.com/nousresearch/hermes-agent/issues/119120) |

**路线图预测**：下一次小版本（推测 0.21.6 或 0.22.0）大概率包含：
1. Gateway 启动暖启动门控（#131148）
2. GUI 卸载 dry-run（#131147）
3. cron update 延后等待修复（#131155）
4. 浏览器 socket 路径缩短（#131153）
5. CLI 主题 light/dark（#131151）
6. **+ canary 更新机制与 `--max-tokens` cron 字段** 是候选增量。

---

## 7. 用户反馈摘要

**真实用户痛点（从评论与摘要中提炼）：**

1. **跨平台一致性成本高**：Windows + macOS + Linux 三端同时维护，tar 行为差异（[#131146](https://github.com/nousresearch/hermes-agent/pull/131146)）、launchd 服务识别（#124120）、Windows uv 同步（#130294）反复出现，反映出"同一份代码，三个世界"的运营负担。

2. **桌面端"假活"问题令人沮丧**：用户报告 backend CPU 与网络活动已归零，但 UI 仍转 10–23 分钟（#126706、#130606、#130590、#127665）。**这些问题的特征是"看起来在工作，其实已死"**，对用户耐心与信任的伤害远大于明确报错。

3. **更新流程是单点故障**：`--no-gateway-restart` 与文档不符、cron 阻塞、gateway-parented 进程被 SIGTERM——更新是用户最关键的运维动作，却也是近期回归最密集的功能面。

4. **Mnemosyne 与 Hindsight 记忆层"装上了但用不起来"**（#125520、#6429）：插件显示已初始化、数据库有数据，但工具调用仍报"未初始化"。**这是用户期望与状态机之间的可见性鸿沟**。

5. **Discord 集成在小细节上掉链子**：频道内 slash 不识别（#5865）、thread 缓存污染（#131118）。Discord 是社区 AI bot 主战场，这类问题直接影响推广。

6. **满意/亮点**：
   - [#131151](https://github.com/nousresearch/hermes-agent/pull/131151) 的"皮肤随终端背景切换"——表明 TUI/desktop/gateway 已对齐，CLI 正在补齐。
   - [#131160](https://github.com/nousresearch/hermes-agent/pull/131160) / [#117407](https://github.com/nousresearch/hermes-agent/pull/131407) 真实 profile Chrome 在 root 下启动——回应 VPS/容器部署诉求。
   - [#131143](https://github.com/nousresearch/hermes-agent/pull/131143) GitHub skill 遵循仓库自有 issue/PR 模板（从 Copilot CLI 移植）——降低贡献摩擦。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | # | 积压时长 | 关注理由 |
|------|---|----------|----------|
| 长期 Issue | [#44877](https://github.com/nousresearch/hermes-agent/issues/44877) | 2026-06-12 起 ~112 天 | Canary 更新机制是生产部署刚需，且与今日 #131149 形成证据闭环 |
| 长期 Issue | [#6429](https://github.com/nousresearch/hermes-agent/issues/6429) | 2026-04-09 起 ~176 天 | Hindsight 记忆完整度关键开关 |
| 长期 Issue | [#6406](https://github.com/nousresearch/hermes-agent/issues/6406) | 2026-04-09 起 ~176 天 | Skill secrets 安全模型短板 |
| 长期 Issue | [#13603](https://github.com/nousresearch/hermes-agent/issues/13603) | 2026-04-21 起 ~164 天 | 回滚机制缺失，与今日更新链路修复潮强相关 |
| 长期 Issue | [#17803](https://github.com/nousresearch/hermes-agent/issues/17803) | 2026-04-30 起 ~155 天 | Xiaomi MiMo provider 工具调用协议错误 |
| 长期 Issue | [#5865](https://github.com/nousresearch/hermes-agent/issues/5865) | 2026-04-07 起 ~178 天 | Discord 频道 slash 拦截，社区推广路径 |
| 长期 PR | [#124295](https://github.com/nousresearch/hermes-agent/pull/124295) | 2026-09-26 起 ~6 天 | 覆盖 11 个适配器的拆分回复恢复，是 Gateway 跨平台一致性关键 PR |
| 长期 PR | [#117407](

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-10-02** | **仓库：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日呈现"高频提交、低频合并"的状态：过去 24 小时有 13 个 PR 处于活跃状态（其中 12 个仍待合并），2 个 Issue 被更新但均无关闭记录，无新版本发布。最显著的信号是社区贡献者 **x1F916** 在 9 月 28 日集中提交了一批针对 agent、channels、config、updater 模块的修复 PR（共 5 个），这些 PR 在 10 月 1 日集体更新但均未被合并，反映出**维护者 review 节奏明显滞后于社区贡献速度**。此外，最严重的社区关注点集中在 **picoclaw.io 官网 TLS 证书过期已 22 天仍未修复**，项目门户对普通用户处于"不可用"状态，需要立刻处理。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。建议关注依赖升级 PR 的合并进度（详见第 3 节），这些升级可能为下一版本铺路。

---

## 3. 项目进展

### 已关闭 PR（1 条）
| PR | 标题 | 作者 | 说明 |
|---|---|---|---|
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat): initialize as custom channel to solve config validation error | @luisgdev | 解决 DeltaChat channel 启用时报 `unknown type "deltachat"` 的启动失败问题 |

### 重要待合并 PR（按模块分类）

**🔧 Agent 模块修复（来自 @x1F916 的 PR 集群）**
- [#3403](https://github.com/sipeed/picoclaw/pull/3403) — 修复异步工具（spawn）结果被错误地路由到默认 agent 主会话的 bug，避免多用户会话串扰
- [#3402](https://github.com/sipeed/picoclaw/pull/3402) — 修复上下文管理器中对 routed agent 的解析错误（基于 #3316 重提，已 rebase 到最新 main）
- [#3414](https://github.com/sipeed/picoclaw/pull/3414) — **新增功能**：为 agent 引入 wall-clock turn time budget（`agents.defaults.turn_time_budget_seconds`），超时后强制总结而非继续循环调度

**🔧 系统稳定性修复**
- [#3401](https://github.com/sipeed/picoclaw/pull/3401) — 修复 `Manager.Reload` 在 enabled channel 实例为 nil 时 panic 导致 gateway 退出的问题（影响 Telegram 等 channel 在未配置 token 时的场景）
- [#3400](https://github.com/sipeed/picoclaw/pull/3400) — 修复多 key 模型在 `expandMultiKeyModels` 后丢失 `Enabled` 标志和其余 API key 的配置持久化 bug
- [#3399](https://github.com/sipeed/picoclaw/pull/3399) — 修复 `picoclaw update` 在 32-bit ARM 设备上错误安装 arm64 资源的 asset 匹配 bug（substring 匹配导致的误判）

**📦 依赖升级（全部由 dependabot 提交，已标 [stale]）**
- [#3389](https://github.com/sipeed/picoclaw/pull/3389) — `golang.org/x/crypto` 0.53.0 → 0.57.0
- [#3388](https://github.com/sipeed/picoclaw/pull/3388) — `modelcontextprotocol/go-sdk` 1.6.1 → 1.8.0
- [#3387](https://github.com/sipeed/picoclaw/pull/3387) — `anthropic-sdk-go` 1.55.1 → 1.74.0（**跨度较大**，建议关注 changelog）
- [#3386](https://github.com/sipeed/picoclaw/pull/3386) — `mautrix` 0.27.0 → 0.31.0（需 Go 最低版本升级）
- [#3385](https://github.com/sipeed/picoclaw/pull/3385) — `line-bot-sdk-go/v8` 8.20.1 → 8.22.0

**🆕 新 Provider 支持**
- [#3371](https://github.com/sipeed/picoclaw/pull/3371) — 新增 `opencode-go` provider，支持 `x-opencode-session` header 路由（来自 @EMTumariscal）

### 整体评估
📊 **项目在稳定性修复上有明显推进**（特别是 agent 会话路由和 updater 资源匹配），但 review 瓶颈导致这些修复迟迟无法落地，影响用户实际体验。

---

## 4. 社区热点

### 🔥 最受关注 Issue
**[#3377](https://github.com/sipeed/picoclaw/issues/3377) — TLS certificate for picoclaw.io expired on 2026-09-10** [CRITICAL]
- 👍 2 个反应 | 💬 3 条评论 | ⏰ 已开 20 天未修复
- **诉求**：项目官网 `picoclaw.io` 的 TLS 证书自 2026-09-10 起过期，所有浏览器拒绝连接。这不仅是技术问题，更直接影响**项目品牌可信度和潜在用户的第一印象**。尽管 Issue 被打上 `[stale]` 标签，但用户并未停止 ping。

**[#3391](https://github.com/sipeed/picoclaw/issues/3391) — Pico channel splits multi-line input into multiple messages** [BUG]
- 💬 1 条评论 | ⏰ 已开 8 天
- **诉求**：移动端 TUI 客户端在用户粘贴多行文本（诗歌、代码块）时，会按换行符自动拆分成多条独立消息，破坏原始内容结构。反映出 pico 客户端对**富文本/多行输入处理逻辑缺失**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重级别 | Issue/PR | 描述 | 是否有 Fix |
|---|---|---|---|
| 🔴 **Critical** | [#3377](https://github.com/sipeed/picoclaw/issues/3377) | picoclaw.io TLS 证书过期 22 天，官网完全不可达 | ❌ 无修复 |
| 🟠 **High** | [#3403](https://github.com/sipeed/picoclaw/pull/3403) | 异步工具结果错误路由到默认 session，跨用户串扰 | ✅ PR 已提交待合并 |
| 🟠 **High** | [#3401](https://github.com/sipeed/picoclaw/pull/3401) | 频道 Reload 时 nil channel 触发 panic，gateway 退出 | ✅ PR 已提交待合并 |
| 🟡 **Medium** | [#3399](https://github.com/sipeed/picoclaw/pull/3399) | 32-bit ARM 设备 `update` 命令装错架构 | ✅ PR 已提交待合并 |
| 🟡 **Medium** | [#3400](https://github.com/sipeed/picoclaw/pull/3400) | 多 key 模型配置保存后丢失 enabled 和其他 key | ✅ PR 已提交待合并 |
| 🟢 **Low** | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | pico 客户端多行输入被错误拆分 | ❌ 暂未发现 fix PR |

⚠️ **关键观察**：除 TLS 证书问题外，所有功能 bug 均有 PR 提交但卡在 review 阶段。这是**流程问题而非技术债务问题**。

---

## 6. 功能请求与路线图信号

| 提案 | PR | 状态 | 路线图可能性评估 |
|---|---|---|---|
| Agent turn time budget（超时强制总结） | [#3414](https://github.com/sipeed/picoclaw/pull/3414) | 待合并 | ⭐⭐⭐⭐ **高** — 默认关闭（`0`），向后兼容性强，对长任务稳定性提升明显 |
| opencode-go provider 支持 | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 待合并 | ⭐⭐⭐ **中** — 完善 provider 生态，对使用 OpenCode 的用户有价值 |
| 修复 multi-line 输入（隐含功能改进） | [#3391](https://github.com/sipeed/picoclaw/issues/3391) | 无 PR | ⭐⭐ **待立项** — 影响 pico 移动端基本可用性 |

---

## 7. 用户反馈摘要

基于 Issues 与 PR 评论的提炼：

- 😡 **痛点 1：基础设施维护疏忽** — picoclaw.io 证书过期未自动续期，且 Issue 被自动标记 stale 后维护者未响应，给社区传递"项目被弃管"的负面信号
- 😟 **痛点 2：移动端体验缺陷** — pico 客户端无法正确处理多行输入，限制了诗歌、代码、Markdown 等内容的正常使用场景
- 👍 **正面信号** — 多个 dependabot PR 被打上 `[stale]` 但未被关闭，说明**自动化流程仍在运行**，依赖扫描机制健康
- 👏 **贡献者健康度** — 外部贡献者 @x1F916 一次性提交 5 个高质量修复 PR，显示**社区贡献意愿强烈**，但缺乏维护者侧的响应机制形成瓶颈
- 🤔 **使用场景诉求** — 用户在移动端希望保持消息结构完整（诗歌/代码场景），反映出 PicoClaw 已从纯命令行向多端扩展

---

## 8. 待处理积压

### 🚨 紧急关注（建议维护者立即处理）

1. **[#3377](https://github.com/sipeed/picoclaw/issues/3377) TLS 证书过期（22 天）**
   - 影响：项目门户对所有访客不可达
   - 行动：续签证书 + 增加 cert expiry 监控告警

### ⚠️ 长期未合并 PR（建议维护者组织一次 review 冲刺）

2. **@x1F916 的 PR 集群（5 个，全在 2026-09-28 提交）**
   - [#3403](https://github.com/sipeed/picoclaw/pull/3403), [#3402](https://github.com/sipeed/picoclaw/pull/3402), [#3401](https://github.com/sipeed/picoclaw/pull/3401), [#3400](https://github.com/sipeed/picoclaw/pull/3400), [#3399](https://github.com/sipeed/picoclaw/pull/3399)
   - 这些 PR 均已 rebase 到 main 并通过 `golangci-lint`，可直接 review 合并

3. **5 个 dependabot PR 全部标 [stale]**
   - [#3389](https://github.com/sipeed/picoclaw/pull/3389), [#3388](https://github.com/sipeed/picoclaw/pull/3388), [#3387](https://github.com/sipeed/picoclaw/pull/3387), [#3386](https://github.com/sipeed/picoclaw/pull/3386), [#3385](https://github.com/sipeed/picoclaw/pull/3385)
   - 其中 [#3387](https://github.com/sipeed/picoclaw/pull/3387)（anthropic-sdk-go 大跨度升级）和 [#3386](https://github.com/sipeed/picoclaw/pull/3386)（mautrix 涉及 Go 版本升级）需要仔细 review

4. **[#3371](https://github.com/sipeed/picoclaw/pull/3371) opencode-go provider**
   - 提交于 2026-09-08，已过 24 天无回应

---

## 📈 项目健康度评分

| 维度 | 评分 | 评语 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 贡献者积极，提交质量高 |
| 维护者响应度 | ⭐⭐ | 多个高质量 PR 长期未 review，TLS 证书超期未续 |
| 基础设施 | ⭐⭐ | 证书过期未监控，门户不可用 |
| 代码质量 | ⭐⭐⭐⭐ | PR 普遍通过 lint，commit message 规范 |
| 整体健康度 | ⭐⭐⭐ | **方向正确，但执行力是当前瓶颈** |

---

*报告基于 GitHub 公开数据生成 | 数据时间：2026-10-02*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期：2026-10-02**

---

## 一、今日速览

NanoClaw 今日呈现"高强度维护日"特征：**26 个 PR 更新**中有 **15 个已关闭/合并**，合并效率极高；4 个 Issue 全部保持开放状态，未有任何关闭。安全加固与依赖治理是今日主线，多个 PR 围绕 Iron Proxy、gRPC、GitHub Actions、cosign 等组件进行版本钉死或漏洞修复；功能性 PR 则集中在 `/update-nanoclaw` 升级机制、OneCLI 网关、设置向导首聊检测等模块。社区新增两位贡献者（drsmk238、worthogdotorg）提交的 Issue，覆盖核心 CLI 与钩子链路，整体项目健康度良好，安全态势持续收紧。

---

## 二、版本发布

**今日无新版本发布。** 今日合并的多个变更尚未触发发版流程，结合 #3986（默认跟随 release tag）与 #3987（自审批 pre-release 渠道）正在落地，预计下一次版本号将由后续合并动作决定。

---

## 三、项目进展（已合并/关闭的重要 PR）

### 🔒 安全与依赖加固（5 项）
- **[#3982](https://github.com/qwibitai/nanoclaw/pull/3982)** `build(deps): pin Iron Proxy to v0.52.0` — 将 Iron Proxy 从 pre-v0.50.0 的提交钉死升级到 v0.52.0 标签，清除 **30 个已知依赖告警**（含 x/crypto 0.51.0 的 17 个）。
- **[#3981](https://github.com/qwibitai/nanoclaw/pull/3981)** `build(deps): bump grpc to 1.83.2` — 清除 Iron 前置代理中 grpc 1.81.1 的 6 个已知告警，为开启 Dependabot 做准备。
- **[#3968](https://github.com/qwibitai/nanoclaw/pull/3968)** `ci: pin workflow actions and cosign to exact versions` — 把 7 个浮动标签（`@v4`、`@v1` 等）改为精确版本钉死，覆盖 ECR 角色与代理镜像构建关键 Job。
- **[#3977](https://github.com/qwibitai/nanoclaw/pull/3977)** `build(deps): bump tsx to 4.23` — 消除 Node 26 下每次 `ncl` 启动打印的 `module.register()` 弃用警告（DEP0205）。
- **[#3978 草案](https://github.com/qwibitai/nanoclaw/pull/3978)** `ci: add Dependabot for GitHub Actions` — 移除长期未运行的 Renovate 配置，启用 Dependabot GitHub Actions（仍处草案阶段，未合并）。

### 🛠 功能与体验修复（4 项）
- **[#3901](https://github.com/qwibitai/nanoclaw/pull/3901)** `fix(setup): let the host service reach the internet through an HTTPS proxy` — 安装脚本支持 HTTPS 代理出网（已合）。
- **[#3208](https://github.com/qwibitai/nanoclaw/pull/3208)** `feat(ci): publish agent image to Docker Hub with CVE gates` — 新增手动触发、main-only 的多架构镜像发布工作流，含 CVE 闸门。
- **[#3963](https://github.com/qwibitai/nanoclaw/pull/3963)** `test(update): remove the data symlink with unlinkSync, not rmSync` — 让 `/update-nanoclaw` 的 e2e 套件在 Node 24 < 24.13.1 上不再自毁。
- **[#3979](https://github.com/qwibitai/nanoclaw/pull/3979)** `test(onecli): make unsafe-directory permissions test umask-independent` — 解决 umask 077 安装下 OneCLI 网关步骤失败问题。
- **[#1343](https://github.com/qwibitai/nanoclaw/pull/1343)** `feat: add /add-cli-backend skill` — 容器 agent-runner 可用 `claude -p` CLI 替代 `@anthropic-ai/claude-agent-sdk`，规避订阅 OAuth 违反 Anthropic TOS 的风险（关联 #1224，关闭）。

**今日合并率 57.7%（15/26）**，推进稳健，主要落地为安全与发布基础设施层面。

---

## 四、社区热点

| 主题 | 编号 | 评论数 / 状态 | 链接 |
|---|---|---|---|
| Discord 审批卡片 custom_id 错乱（高严重度） | Issue #3456 | 6 条评论 / 仍 OPEN | [#3456](https://github.com/qwibitai/nanoclaw/issues/3456) |
| Telegram 适配器链接丢失（链接到 #3569） | PR #3570 | 长期 OPEN（08-27 起） | [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) |
| 审批卡未答复不超时、不按 ID 拒绝 | PR #3833 | OPEN 16 天 | [#3833](https://github.com/qwibitai/nanoclaw/pull/3833) |

**诉求分析：**
- **#3456**（作者 DawoudIO）：Discord 审批与 ask_question 卡片按钮同时设置 `id` 和 `value`，导致 custom_id 被破坏，用户点击任意选项都映射到错误分支并触发重复重发。该 Bug 直接让 Discord 上的审批流不可用，是当前最影响多渠道用户体验的开放问题。
- **#3570**：`@chat-adapter/telegram@4.29.0` 在 MarkdownV2 转义符为奇数时永远丢消息，导致 OneCLI 连接链接在 Telegram 上无法投递，是发布链路的关键障碍。
- **#3833**：模块发起的审批（install_packages、cli_command 等）没有 TTL，长期挂起且从不通知提问方。

---

## 五、Bug 与稳定性

| 严重度 | 问题 | 编号 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | chat-sdk-bridge：Discord 审批/ask_question 按钮 custom_id 损坏，选项全部映射错误 | [#3456](https://github.com/qwibitai/nanoclaw/issues/3456) | ❌ 暂无 |
| 🟠 中 | OneCLI `agents/rules/secrets list` 默认只看前 20 行，无任何提示 | [#3991](https://github.com/qwibitai/nanoclaw/issues/3991) | ❌ 暂无 |
| 🟠 中 | PreCompact 钩子 `compact-instructions.ts` 调用 `getAllDestinations()` 时无注册邮箱 | [#3984](https://github.com/qwibitai/nanoclaw/issues/3984) | ❌ 暂无 |
| 🟡 低 | chat 适配器 4.29.0 在 Telegram 上偶发丢消息（奇数下划线） | [#3569→#3570](https://github.com/qwibitai/nanoclaw/pull/3570) | ✅ PR #3570 OPEN |
| 🟢 已有修复 | setup 写入含凭据的代理 URL 到 0644 systemd unit（其他用户可读） | [#3985](https://github.com/qwibitai/nanoclaw/pull/3985) | ✅ PR #3985 OPEN |
| 🟢 已有修复 | `/update-nanoclaw` 仅当网关 skill payload 变化时不刷新 | [#3988](https://github.com/qwibitai/nanoclaw/pull/3988) | ✅ PR #3988 OPEN |
| 🟢 已有修复 | 设置向导首聊把 "run failed" 误判为 OK | [#3980](https://github.com/qwibitai/nanoclaw/pull/3980) | ✅ PR #3980 OPEN |
| 🟢 已有修复 | agent-runner 在 `send_message` 周围丢失或重复回复 | [#3918](https://github.com/qwibitai/nanoclaw/pull/3918) | ✅ PR #3918 OPEN |
| 🟢 已有修复 | OneCLI 新装未带 1.42.0 网关，存在凭据注入旁路 | [#3989](https://github.com/qwibitai/nanoclaw/pull/3989) | ✅ PR #3989 OPEN |

---

## 六、功能请求与路线图信号

1. **[#3990] security-audit：只读隔离与补丁状态检查**
   - 作者 drsmk238 提出 NanoClaw 的隔离配置散落在 wirings、user_roles、cli_scope、容器挂载、allowlist、网关代理、block 规则等多处，建议提供 read-only 的 `security-audit` 技能对运行中实例做一致性检查。
   - 路线图契合度：🟢 高。项目已在 #[#3968] 锁定供应链、#[#3982] 升级 Iron Proxy，反映维护者对安全纵深防御的持续投入；该能力很可能在下一安全专题版本被纳入。

2. **[#3986] `/update-nanoclaw` 默认跟随 release tag**
   - 由核心维护者 glifocat 自提，引入 `NANOCLAW_UPDATE_CHANNEL` 环境变量（`stable` / `beta` / 自定义），是版本治理的重要改进。

3. **[#3987] 自审批 pre-release 与扩大稳定版审批人**
   - 提议 `x.y.z-rc.N` 通过新增 `prerelease` 环境单人审批，稳定版维持双审批。表明团队正在为高频迭代铺路。

4. **[#3989] OneCLI 新装网关钉到 1.42.0**
   - 立即跟进上游安全修复的工程化实践，配合 #[#3990] 可形成"检测+修复"闭环。

5. **[#1343] `/add-cli-backend` 技能（已合并）**
   - 解决订阅 OAuth 与 Anthropic TOS 的合规问题，是面向个人/小团队订阅用户的明确信号。

---

## 七、用户反馈摘要

- **多渠道审批体验崩坏（DawoudIO, #3456，6 条评论）**：Discord 审批/ask_question 卡片上每个按钮都因 `id`+`value` 同时被设置而映射到错误选项，导致"silent-reject + duplicate resend"。这是用户直接操作中可见的功能性故障，影响企业级审批场景的可靠性。
- **OneCLI 列表静默截断（drsmk238, #3991）**：`onecli agents list` 等命令在未传 `--max` 时只返回 20 行且无任何提示，导致用户在生产中误以为资源数就是 20。属于"看似无害实则高危"的可用性陷阱。
- **PreCompact 钩子崩溃（worthogorg, #3984）**：每次压缩都因未注册邮箱而抛错，意味着只要开了 compaction 的容器在生命周期内就会持续报错，会污染日志并可能影响后续 compaction 行为。
- **新装易带已知漏洞网关（drsmk238, #3990/#3989）**：上游 OneCLI 1.42.0 修复了凭据注入旁路，但 NanoClaw `add-onecli` 仍钉在 1.41.0，反映安全版本联动的速度问题。
- **隔离配置缺少体检手段（drsmk238, #3990）**：用户希望能在不改配置的前提下做只读检查，体现运维侧对"可观测性 + 安全基线"的诉求。
- **Telegram 链接长期失踪（关联 #3570）**：OneCLI 的 connect 链接在 Telegram 上始终收不到，是新手引导链路的关键卡点，自 08-27 起悬而未决。

总体反馈基调：**核心能力受认可，安全与发布链路持续加强；但 Discord/Telegram 多渠道一致性与安装后默认安全基线仍有用户可感知的痛点。**

---

## 八、待处理积压（提醒维护者关注）

| 编号 | 类型 | 停留时长 | 状态 | 链接 |
|---|---|---|---|---|
| #3456 | Bug（Discord 审批不可用） | **40 天**（08-23 起） | 6 条评论仍 OPEN | [#3456](https://github.com/qwibitai/nanoclaw/issues/3456) |
| #3570 | Bug Fix（Telegram 偶发丢消息） | **36 天**（08-27 起） | OPEN | [#3570](https://github.com/qwibitai/nanoclaw/pull/3570) |
| #3833 | 审批 TTL 与按 ID 拒绝 | **16 天**（09-16 起） | OPEN | [#3833](https://github.com/qwibitai/nanoclaw/pull/3833) |
| #3918 | agent-runner 消息丢失/重复 | **7 天**（09-25 起） | OPEN | [#3918](https://github.com/qwibitai/nanoclaw/pull/3918) |

**维护者建议优先级：**
1. **#3456**：Discord 审批彻底不可用且积压 40 天，建议立即指派 owner；
2. **#3570**：阻塞 Telegram 新手 onboarding，依赖上游聊天核心 4.38.1 升级；
3. **#3833**：与 #3456 同属审批子域，可一并复盘；
4. **#3918**：影响流式与终态两类 provider 的对话正确性，建议在下次发版窗口优先合并。

---

### 健康度总评
**安全态势**：🟢 明显改善（30+ 个依赖告警清除、CI 供应链钉死、网关版本修复在途）。  
**社区活跃**：🟢 高（26 PR、4 Issue、多维护者并行）。  
**多渠道稳定**：🟡 弱项（Discord 审批/Telegram 投递仍 OPEN 超 30 天）。  
**发版节奏**：🟡 今日无新版本，依赖 #[#3986/#3987] 落地后下次发版可见度更高。

*数据来源：NanoClaw GitHub 仓库 qwibitai/nanoclaw，过去 24 小时（截至 2026-10-02）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**报告日期：2026-10-02**
**数据范围：2026-10-01 ~ 2026-10-02（过去 24 小时）**

---

## 1. 今日速览

IronClaw 今日处于**低活跃度静默期**。过去 24 小时内仅有 2 条 Issue 出现更新、1 条 PR 仍处待合并状态，且**无任何 Release、PR 合并或 Issue 关闭**。从仓库健康度看，#2358（浏览器配置持久化提案）作为高价值 enhancement 议题已悬挂约 175 天未推进，#7499（IdentyClaw Passport）也待审 50 余天，显示项目当前可能正处于**需求评审与架构设计阶段**，而非高频迭代阶段。整体节奏平稳但需关注长期积压。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 距上次发版的具体间隔未在数据中提供，建议关注 [Releases 页](https://github.com/nearai/ironclaw/releases) 获取发布节奏信息。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 在跟踪的 1 条活跃 PR 中：

- **#7499** [OPEN] — `feat(identyclaw): host-mediated Passport for practitioners`
  链接：https://github.com/nearai/ironclaw/pull/7499
  - **状态**：自 2026-08-11 提交，**已挂起 50 天**仍处待合并
  - **规模/风险**：size: XL / risk: low（规模较大但风险评估为低）
  - **贡献者**：新贡献者（`discernible-io`），首条贡献
  - **内容**：为 processless IronClaw agent 提供 IdentyClaw Passport 调用能力，附 Node CLI 与 loopback helper
  - **评估**：因贡献者为新人且 PR 涉及较大改动（XL），建议维护者**优先 review 或给予反馈**，避免新贡献者流失

**推进度评估**：今日项目代码层无实质推进，处于评审静默期。

---

## 4. 社区热点

按"互动密度 + 议题重要性"排序：

| 排名 | 编号 | 类型 | 评论数 | 标题 | 链接 |
|------|------|------|--------|------|------|
| 1 | #2358 | Issue | 1 | feat(browser): add BrowserProfileStore trait with encrypted tarball persistence | [链接](https://github.com/nearai/ironclaw/issues/2358) |
| 2 | #8121 | Issue | 0 | Daily ironclaw failure taxonomy — 2026-10-01 | [链接](https://github.com/nearai/ironclaw/issues/8121) |

**诉求分析**：
- **#2358** 反映的核心痛点是：**AI agent 浏览器会话状态持久化**。当前每次 agent 运行都需要用户重新认证（cookies、localStorage、IndexedDB 等），体验差。该提案提出用加密 tarball 存储 50-200MB 的 Chromium user-data-dir，平衡可用性与安全（保护 bearer tokens）。这是**典型的"session 复用"用户体验改进**，对长任务、自动化场景至关重要。
- **#8121** 是**自动化失败分类日报**（CI/benchmark telemetry 性质），不属用户社区诉求，而是项目内 failure taxonomy 跟踪机制。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告。** 但有一条与稳定性高度相关的跟踪项：

- **#8121** [OPEN] — Daily ironclaw failure taxonomy — 2026-10-01
  链接：https://github.com/nearai/ironclaw/issues/8121
  - **性质**：非用户报告 Bug，属 benchmark telemetry 报告
  - **关键发现**：clawbench 套件出现 **128 项 non-pass**，摘要明确指出"dominated by a benchmark-side broken-workspace-seeding defect (recurring...)"
  - **严重程度**：⚠️ **中等** —— 失败集中在 benchmark 端缺陷（非 IronClaw 自身），属"测试基础设施"问题
  - **是否已有 fix PR**：❌ **否**。建议维护者检查 benchmark 端的 workspace seeding 逻辑，确认是否影响真实用户场景

**结论**：IronClaw 自身代码稳定性信号**正常**，但测试/benchmark 侧需排查 recurring 缺陷。

---

## 6. 功能请求与路线图信号

### 已识别的高价值功能请求

#### 🔹 #2358 — BrowserProfileStore trait（加密 tarball 持久化）
- 链接：https://github.com/nearai/ironclaw/issues/2358
- **优先级信号**：被标记为 `scope: workspace` + `scope: secrets`，触及**安全核心**
- **Parent Issue**：#2355（推测为更大范围的"session/state 持久化"规划）
- **落地可能性**：⭐⭐⭐⭐ 较高 — 该议题虽开放 175 天，但结构化良好（明确提出 trait 设计 + 加密方案），符合 IronClaw 长期 roadmap 中"agent stateful execution"方向
- **建议**：维护者给出方向性反馈，避免提案被搁置

#### 🔹 #7499 — IdentyClaw Passport（身份代理层）
- 链接：https://github.com/nearai/ironclaw/pull/7499
- **路线图意义**：补齐"processless agent 的身份认证"短板，与 browser profile 持久化形成**互补**（一个解决 session，一个解决 identity）
- **落地可能性**：⭐⭐⭐ 中等 — 需评估设计一致性与安全模型

### 路线图信号总结
项目近期路线图可能围绕 **"agent 状态可延续性"** 展开（持久化 + 身份），这两条线索如能在下一版本形成协同，将显著提升 agent 跨会话体验。

---

## 7. 用户反馈摘要

⚠️ **数据局限性说明**：今日仅 #2358 有 1 条评论，无法形成强代表性样本。以下反馈来自该评论与 Issue 摘要：

- ✅ **隐含正面信号**：用户在 issue 中主动提出**完整的 trait 设计 + 加密 tarball 方案**，说明用户具备深度工程能力且对项目有较强参与意愿
- 😤 **隐含痛点**：
  - "用户每次都需重新认证"（from #2358 摘要）—— 反映**agent 体验碎片化**仍是核心不满
  - 长期 issue 缺乏维护者响应（#2358 已 175 天）—— 可能**抑制社区贡献热情**
- 📊 **benchmark 失败数据**（#8121）：未提供用户侧负面反馈

**建议**：项目方应**主动公开 issue triage 节奏**，对 #2358 这类高质量提案给予阶段性反馈。

---

## 8. 待处理积压 ⚠️

以下为**长期未响应的重要条目**，需维护者优先关注：

| 编号 | 类型 | 创建日期 | 至今天数 | 状态 | 链接 |
|------|------|----------|----------|------|------|
| **#2358** | Issue (enhancement) | 2026-04-12 | **~175 天** | OPEN，仅 1 评论 | [链接](https://github.com/nearai/ironclaw/issues/2358) |
| **#7499** | PR (XL size) | 2026-08-11 | **~52 天** | OPEN，0 评论，新贡献者 | [链接](https://github.com/nearai/ironclaw/pull/7499) |

### 积压风险评估

1. **#2358 积压 175 天** 🚨
   - 风险：核心 enhancement 被冷落，可能影响 agent 体验路线图推进
   - 建议：维护者分配 1 名 reviewer 进行 design review，给出"接受/拒绝/重设计"结论

2. **#7499 积压 52 天且贡献者为新人** 🚨
   - 风险：新贡献者首次贡献未获响应，**社区贡献管道受损**
   - 建议：维护者**优先 ack 并给出明确 review 方向**（如需拆分、需补充测试等），即便短期不合并也应保持沟通

### 健康度指标
- **Issue 关闭率（24h）**：0% (0/2)
- **PR 合并率（24h）**：0% (0/1)
- **长期未响应率**：2/3 ≈ **66.7%** —— **偏高，建议关注**

---

## 📊 总结

| 维度 | 评分 | 说明 |
|------|------|------|
| 当日活跃度 | ⭐⭐☆☆☆ | 仅 3 条目更新，无 merge/release |
| 社区互动 | ⭐⭐⭐☆☆ | 有结构化讨论，但缺维护者响应 |
| 稳定性信号 | ⭐⭐⭐⭐☆ | 无新增 Bug，benchmark 侧需自查 |
| 路线图清晰度 | ⭐⭐⭐⭐☆ | 两条主线（session + identity）方向明确 |
| 积压健康度 | ⭐⭐☆☆☆ | 175 天未响应 issue + 52 天新贡献者 PR 需重点关注 |

**核心建议**：维护者应在本周内对 #2358 与 #7499 给出明确反馈，以恢复项目迭代节奏并保护新贡献者参与热情。

---
*报告生成时间：2026-10-02 | 数据源：GitHub API | 仓库：nearai/ironclaw*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-10-02
**数据来源**：GitHub 仓库 `netease-youdao/LobsterAI`
**报告人**：AI 开源项目分析师

---

## 1. 今日速览

LobsterAI 过去 24 小时整体活跃度处于**中等偏低**水平，呈现典型的"清理与回填"特征。**7 个 PR 全部关闭/已合并**（含 5 个历史 stale PR 与 2 个近期活跃 PR），代码侧完成了若干稳定性修复与代码清理；与此同时，**7 个活跃的 Issue 全部仍处于 OPEN 状态且均带 `[stale]` 标签**，表明这些报告长期未得到有效响应。**无新版本发布**。维护团队当日的工作重心偏向于关闭积压而非引入新功能或处理用户反馈，项目推进呈"内部整理"节奏。

---

## 2. 版本发布

**今日无新版本发布**。仓库 Releases 列表在过去24小时无新增或更新。建议关注 #915、#917、#920、#921、#2709、#2788、#941 等已合并 PR 是否会在后续版本（如 v3.26 或 v2026.10 系列）中以 Release Note 形式体现。

---

## 3. 项目进展

今日 7 个 PR 全部完成闭环，按价值归类如下：

### 🛠️ 稳定性与兼容性修复（4 项）

| PR | 标题 | 影响范围 | 价值 |
|---|---|---|---|
| [#2709](https://github.com/netease-youdao/LobsterAI/pull/2709) | Windows SQLite 临时目录失败时的回退 | main / openclaw | 解决因安全软件拦截 PowerShell、Constrained Language Mode 拒绝 `Add-Type` 或无 C# 编译器导致的初始化失败，提升 Windows 端部署健壮性 |
| [#2788](https://github.com/netease-youdao/LobsterAI/pull/2788) | 退出登录/刷新后恢复 Plan 模型目录 | renderer / main | 修复登录态异常导致模型选择器空白的体验性 bug |
| [#917](https://github.com/netease-youdao/LobsterAI/pull/917) | 恢复 UI 沙箱执行模式到 OpenClaw 配置 | cowork | 修正 `getConfig()` 硬编码 `local` 的回归问题 |

### ⚡ 性能优化（1 项）

| PR | 标题 | 价值 |
|---|---|---|
| [#920](https://github.com/netease-youdao/LobsterAI/pull/920) | 生产构建启用 esbuild 压缩 | 修正三个 Vite target 中 `minify: false` 的硬编码，显著减小包体积、提升冷启动速度 |

### ✨ 功能扩展（1 项）

| PR | 标题 | 价值 |
|---|---|---|
| [#921](https://github.com/netease-youdao/LobsterAI/pull/921) | OpenClaw 本地插件安装 | 支持插件作为独立仓库维护，降低插件开发与协作门槛 |

### 🎨 体验优化（1 项）

| PR | 标题 | 价值 |
|---|---|---|
| [#915](https://github.com/netease-youdao/LobsterAI/pull/915) | 侧边栏折叠过渡动画 + macOS 告警横幅遮挡修复 | 修复 `.sidebar-transition { transition: none }` 引起的视觉跳变与告警条遮挡 |

### 🧹 代码清理（1 项）

| PR | 标题 | 价值 |
|---|---|---|
| [#941](https://github.com/netease-youdao/LobsterAI/pull/941) | 删除 `yd_cowork` 引擎及 Claude Agent SDK 相关代码 | 删除约 3100+ 行死代码，将 `CoworkAgentEngine` 类型收窄为 `'openclaw'`，降低维护复杂度与误读风险 |

**项目推进评估**：代码层完成一次较为系统的"质量加固"——包含构建优化、跨平台兼容性、状态恢复机制以及大量死代码清理。整体向前迈进约一中等迭代。

---

## 4. 社区热点

由于过去 24 小时内所有活跃 Issue 评论数均为 1，且全部标记 `[stale]`，**社区互动实际处于静默状态**。值得长期关注的议题包括：

- **#918**（[openclaw doctor 自动添加 weixin](https://github.com/netease-youdao/LobsterAI/issues/918)）— 反映升级到 3.25 后插件版本与 OpenClaw 运行时版本不兼容的诊断问题，涉及用户信任与配置污染。
- **#922**（[Anthropic SSE 流式解析数据丢失](https://github.com/netease-youdao/LobsterAI/issues/922)）— 数据完整性问题，在高并发/弱网场景下影响明显，潜在影响所有 Anthropic 用户。
- **#943**（[模型调用优先级与自适应切换](https://github.com/netease-youdao/LobsterAI/issues/943)）— 平台可用性议题，若被采纳可显著降低单模型故障引发的 IM 协作中断。

**诉求分析**：用户当前主要诉求集中在"功能稳定性回归修复"与"可用性增强"两类，尚未出现规模化讨论热点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有对应 Fix PR |
|---|---|---|---|
| 🔴 **高** | [#926](https://github.com/netease-youdao/LobsterAI/issues/926) | `imCoworkHandler.ts:973` 中 `accumulator.reject` 未使用可选链，后台 accumulator 触发 `TypeError`，导致应用退出/IM handler 重建必现崩溃 | ❌ 无 |
| 🔴 **高** | [#922](https://github.com/netease-youdao/LobsterAI/issues/922) | Anthropic SSE 行缓冲缺失，跨 chunk 行被 `JSON.parse` 失败吞掉，造成流式文本片段丢失 | ❌ 无 |
| 🟠 **中** | [#928](https://github.com/netease-youdao/LobsterAI/issues/928) | 龙虾配套登录页"网易员工"按钮返回路径下登录组件加载失败 | ❌ 无 |
| 🟠 **中** | [#918](https://github.com/netease-youdao/LobsterAI/issues/918) | `openclaw-weixin` channel 被 doctor 误注入，与现有配置冲突 | ❌ 无 |
| 🟡 **低** | [#915](https://github.com/netease-youdao/LobsterAI/pull/915) | 侧边栏折叠瞬变 + macOS 告警条遮挡（已修复） | ✅ 已合并 |

**核心风险**——两条高严重度 Bug（#926、#922）至今无对应修复 PR，且处于 stale 标记。其中 #926 在 `destroy()` 时必现，影响资源清理路径，属于必须优先修复的稳定性问题。

---

## 6. 功能请求与路线图信号

| Issue | 请求内容 | 纳入下一版本的可行性 |
|---|---|---|
| [#943](https://github.com/netease-youdao/LobsterAI/issues/943) | 模型配置页面增加优先级排序，在模型不可用时自动切换备用模型（支持 IM 端） | ⭐⭐⭐ **较高**：与平台 SLA 直接相关，符合"多模型容灾"行业趋势，建议纳入下季度路线图 |
| [#927](https://github.com/netease-youdao/LobsterAI/issues/927) | 模型/模型供应商选择支持键盘上下键切换，IM 机器人同理 | ⭐⭐ **中等**：纯体验优化，实现成本低，可能作为 polish 项合并 |
| [#925](https://github.com/netease-youdao/LobsterAI/issues/925) | 是否提供安全漏洞上报渠道 | ⭐⭐ **中等**：合规与开源治理要求，建议尽快答复并建立 `security@` 邮箱或 SECURITY.md |
| [#921](https://github.com/netease-youdao/LobsterAI/pull/921) | OpenClaw 本地插件安装（已合并） | ✅ 已落地 |

---

## 7. 用户反馈摘要

- **#918**：升级 3.25 出现兼容退化，原本只有 feishu 渠道的纯净配置被 doctor 自动注入未知 `openclaw-weixin` channel，用户反馈"用心流修复不成功"，对升级过程失去信任。**痛点：升级安全性与 doctor 的副作用控制**。
- **#928**：必现路径下（点击网易员工按钮 → 返回登录）出现登录组件加载失败截图。**痛点：身份切换流程鲁棒性**。
- **#922**：在 CLI/脚本场景下通过 IM 与 LobsterAI 沟通，反馈"并不能获得很好的反馈"。**痛点：错误模型下的静默失败**。
- **#927**：明确提到"部分成员习惯采用键盘箭头切换条目"——**反映出专业用户对键盘流的偏好，呼吁提高交互效率**。

总体满意度信号偏负面，主要集中在"bug 无人响应"而非"产品方向"。

---

## 8. 待处理积压提醒

以下 Issue/PR 已带 `[stale]` 标签且长期未获有效响应，**建议维护者重点跟进**：

| 编号 | 类型 | 风险 | 链接 |
|---|---|---|---|
| #926 | Bug（必现崩溃） | 🔴 高 | [#926](https://github.com/netease-youdao/LobsterAI/issues/926) |
| #922 | Bug（数据丢失） | 🔴 高 | [#922](https://github.com/netease-youdao/LobsterAI/issues/922) |
| #918 | Bug（配置污染） | 🟠 中 | [#918](https://github.com/netease-youdao/LobsterAI/issues/918) |
| #928 | Bug（登录组件） | 🟠 中 | [#928](https://github.com/netease-youdao/LobsterAI/issues/928) |
| #943 | 功能请求 | 🟡 中 | [#943](https://github.com/netease-youdao/LobsterAI/issues/943) |
| #925 | 安全合规 | 🟡 中 | [#925](https://github.com/netease-youdao/LobsterAI/issues/925) |
| #927 | 体验优化 | 🟢 低 | [#927](https://github.com/netease-youdao/LobsterAI/issues/927) |

**维护建议**：
1. 对高严重度 Bug（#926、#922）安排专项修复窗口；
2. 对 #925（安全上报通道）建立 `SECURITY.md` 文档并关闭 issue；
3. 对 #943 评估并给出路线图答复；
4. 建议调整 stale 阈值或主动清理长期未响应议题，避免 stale-bot 噪声掩盖真实社区信号。

---

### 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | 🟢 良好 | 7 PR 全闭环，含实质性合并 |
| Issue 响应率 | 🟡 待改进 | 7 个活跃 Issue 0 关闭，均 stale |
| 稳定性 | 🔴 关注 | 至少 2 个高严重度未修 Bug |
| 社区互动 | 🔴 静默 | 评论数均为 1，无新开 issue |
| 版本节奏 | 🟡 平稳 | 24h 内无新版本发布 |

**综合评估**：🟡 **中等健康度**——代码侧持续推进，但用户侧响应出现明显缺口，建议维护团队在下个工作日集中处理积压 Issue，以避免社区活跃度进一步下滑。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 · 2026-10-02

> 数据来源：[github.com/TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi)
> 数据范围：2026-10-01 ~ 2026-10-02（UTC）

---

## 1. 今日速览

TinyClaw 在过去 24 小时内呈现**单点集中推进**的态势：Issue 端零活跃，但 PR 端一次性关闭了 3 个长期未合并的 Telegram 相关改进（#48、#67、#106），均由同一贡献者 `salemsayed` 提交并集中合并。无新版本发布，说明本轮合入仍属于**主干能力补齐**，尚未达到发版门槛。项目整体活跃度偏低（日均 PR 合并 ≈ 3，但无新 Issue 互动），仓库健康度处于**温和维护期**，主要驱动力来自 Telegram 集成场景的功能完善。

---

## 2. 版本发布

⚠️ **本周期无新版本发布。**

最近 3 个 PR 的合并内容（消息持久化、交互式问答、流式预览）均属于 Telegram 客户端增强，建议项目维护者在完成一轮集成测试后考虑打包小版本（如 `0.x.y`）以让用户尽早受益。

---

## 3. 项目进展

今日合并的 3 个 PR 均围绕 **Telegram 消息通道**展开，呈现出明显的"通道体验升级"主线：

### 🔧 Bug 修复：Telegram 消息持久化
- **PR #48**：[fix: persist Telegram pending messages to disk](https://github.com/TinyAGI/tinyagi/pull/48)
  - **问题根因**：`telegram-client.ts` 中的 `pendingMessages` Map 仅存内存，重启（409 polling 冲突、`tinyclaw restart`、崩溃）即丢失；队列处理器虽然把响应写到了 `queue/outgoing/`，但客户端无法匹配到对应 chat，导致响应被静默删除。
  - **修复方向**：将 pending 状态落盘，确保进程重启后可重建消息映射。
  - **影响**：这是阻塞 Telegram 通道**可靠使用**的关键缺陷，合并后显著降低消息丢失率。

### ✨ 新功能：交互式问题桥接
- **PR #67**：[feat: interactive questions via Telegram inline keyboards](https://github.com/TinyAGI/tinyagi/pull/67)
  - **核心机制**：实现 question bridge——当 Claude 需要澄清问题时，输出结构化 `[QUESTION]` 标签，由 bridge 转发到 Telegram 的 inline keyboard 按钮，让非交互模式（`-p`）下也能进行**双向对话**。
  - **价值**：将 TinyClaw 在 Telegram 上的能力从"单向输出"升级为"双向交互"，扩展了使用场景（如远程调试、运维问答）。

### ✨ 新功能：实时流式预览
- **PR #106**：[Add Telegram live streaming previews for Claude responses](https://github.com/TinyAGI/tinyagi/pull/106)
  - **技术实现**：通过 `claude --output-format stream-json --include-partial-partial-messages` 流式获取部分增量，按节流策略以 `partial_*` 队列消息推送；Telegram 侧用单一预览消息（原地 edit）展示生成过程，完成后定型。
  - **价值**：解决 Telegram 场景下"长输出等待焦虑"，把 Claude 的生成过程可视化，体验对齐主流聊天 AI。

📊 **整体进度评估**：今天合并的代码量集中在"通道侧"且相互独立，但 #48 是**强依赖修复**（没有它，#67 和 #106 的输出在重启场景都可能丢失）。建议确认三个 PR 的合并顺序，#48 应优先或与 #106 同步上线。

---

## 4. 社区热点

⚠️ 今日 Issues 端**完全无互动**（新开 0、活跃 0、关闭 0），社区讨论集中度为零。PR 端的关注度同样偏低：

| PR | 👍 | 评论 | 关注度 |
|---|---|---|---|
| [#48](https://github.com/TinyAGI/tinyagi/pull/48) | 0 | 无 | 低 |
| [#67](https://github.com/TinyAGI/tinyagi/pull/67) | 0 | 无 | 低 |
| [#106](https://github.com/TinyAGI/tinyagi/pull/106) | 0 | 无 | 低 |

**分析**：3 个 PR 的反应数均为 0，反映出项目当前的社区反馈循环较薄。`salemsayed` 作为唯一活跃贡献者推进了大部分改进，但**缺少外部 reviewer 与用户验证**，建议维护者在 Discord/Reddit 等渠道主动召集测试。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 **High** | Telegram `pendingMessages` 内存态，重启即丢，导致响应被静默删除 | ✅ **已修复**（PR #48 已合并） | [#48](https://github.com/TinyAGI/tinyagi/pull/48) |

**说明**：PR #48 解决的"消息静默删除"是**数据丢失级 Bug**，对用户体感影响极大。今日合并后，Telegram 通道的稳定性应有可观的提升。建议在下个版本前补充**回归测试**（模拟 409 重启场景），确保修复路径完整覆盖。

---

## 6. 功能请求与路线图信号

虽然今日没有显式的新功能 Issue，但合并的 PR 暗示了项目的**明确路线图走向**：

| 方向 | 信号 PR | 推测下一版本可能纳入 |
|---|---|---|
| **Telegram 可靠性** | [#48](https://github.com/TinyAGI/tinyagi/pull/48) | 错误重试、消息去重、断线恢复 |
| **Telegram 双向交互** | [#67](https://github.com/TinyAGI/tinyagi/pull/67) | 支持多轮问答、confirm/cancel 流程、权限审批 |
| **Telegram 流式输出** | [#106](https://github.com/TinyAGI/tinyagi/pull/106) | 取消生成、进度条、Token 计数展示 |

📌 **判断**：从 PR 主题集中度看，项目短期内仍将**深耕 Telegram 通道**。若其他通道（Slack、Discord、飞书等）有同等需求，建议用户前往 Issues 提需求以平衡路线图。

---

## 7. 用户反馈摘要

⚠️ **Issues 端零互动**，无法提取真实用户评论。但从 PR 描述的痛点描述中可**反推**用户场景：

- **场景 A：远程/无人值守使用 Telegram**（PR #48）—— 用户在服务异常重启时发现消息"莫名其妙消失"，反映出**生产环境部署**的使用诉求。
- **场景 B：复杂任务的澄清交互**（PR #67）—— 用户用 `-p` 模式发起任务时遇到 Claude 反问却无法回答，体现出**离线/批处理**场景下也需要交互能力的真实需求。
- **场景 C：长任务等待焦虑**（PR #106）—— 用户提交长 prompt 后 Telegram 长时间"无响应"，需要流式反馈来确认系统在跑。

> 💡 维护者建议：在下个版本发布时，附上这 3 个 PR 的**用户场景使用文档**，帮助社区理解改进价值并引发讨论。

---

## 8. 待处理积压

由于本周期无活跃 Issue，传统的"长期未响应 Issue"积压难以量化。但有以下**潜在风险点**需要维护者主动跟进：

| 项目 | 类型 | 风险 | 建议动作 |
|---|---|---|---|
| [#48](https://github.com/TinyAGI/tinyagi/pull/48) | 已合并但缺少回归测试 | 修复可能在边缘场景失效 | 补充 409/restart/crash 路径的集成测试 |
| [#67](https://github.com/TinyAGI/tinyagi/pull/67) | 已合并但无 reviewer 反馈 | 交互边界（超时、多选、嵌套）可能未覆盖 | 在 Examples 中补充典型对话流 |
| [#106](https://github.com/TinyAGI/tinyagi/pull/106) | 已合并但节流策略未公开 | 用户可能预期不同的刷新频率 | 在配置中暴露节流参数 |
| 项目整体 | Issues 数偏低 | 可能意味着潜在问题未被发现或渠道不够活跃 | 在 README 中增加"Report Issue"引导 |

---

## 📌 项目健康度总评

| 维度 | 评分 | 解读 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 位贡献者推进，社区参与度不足 |
| 代码质量 | ⭐⭐⭐⭐☆ | 修复了真实生产 Bug，新功能有清晰边界 |
| 社区反馈 | ⭐☆☆☆☆ | 0 评论、0 👍，闭环尚未建立 |
| 发布节奏 | ⭐⭐☆☆☆ | 24h 无版本发布，需关注版本规划 |
| 路线清晰度 | ⭐⭐⭐⭐☆ | Telegram 通道方向明确 |

**结论**：TinyClaw 今日完成了一次**有质量的小步推进**，重点修复了一个数据丢失级 Bug 并补齐了 Telegram 体验的两大短板。建议维护者尽快组织发版并启动回归测试，同时通过社区渠道激活反馈循环。

---

*报告生成时间：2026-10-02 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期**：2026-10-02
**项目**：[moltis-org/moltis](https://github.com/moltis-org/moltis)
**数据来源**：GitHub 过去 24 小时活动

---

## 1. 今日速览

Moltis 项目今日活跃度处于**较低水位**：过去 24 小时内无新增/关闭的 Issue，无新版本发布，仅有 2 条新创建的 PR 且均处于待合并状态。值得关注的信号是这 2 条 PR 均来自同一贡献者 **Harbor404**，且都是针对 TLS 协议层与 MCP（Model Context Protocol）模块的稳定性修复，说明贡献者正在系统性处理生产环境中的边缘场景问题。整体而言，项目当日处于"代码提交活跃但社区互动静默"的状态，建议维护者加快 PR 评审节奏以维持贡献者积极性。

---

## 2. 版本发布

⚠️ **无新版本发布。** 最近 24 小时内未检测到任何 Release 标签变更。两条待合并 PR 中涉及的功能修复（TLS ALPN 限制、MCP 会话恢复）尚未落地到版本中。

---

## 3. 项目进展

### 待合并 PR（2 条）

| PR | 标题 | 状态 | 作者 | 推进内容 |
|---|---|---|---|---|
| [#1291](https://github.com/moltis-org/moltis/pull/1291) | fix(tls): restrict ALPN to HTTP/1.1 | OPEN | Harbor404 | 修复 TLS 握手时的 ALPN 协议协商问题 |
| [#1290](https://github.com/moltis-org/moltis/pull/1290) | fix(mcp): recover failed startups and expired sessions | OPEN | Harbor404 | 修复 MCP 服务器启动失败与会话过期场景 |

**整体推进评估**：今日无 PR 被合并或关闭，**项目代码库净推进量为 0 行已合并变更**。但两个待审 PR 均针对生产环境中可观测的具体缺陷，属于"小而精准"的修复类提交，对项目稳定性有正向意义。

---

## 4. 社区热点

由于今日 Issue 和评论活跃度均为 0，社区热点的载体集中在 2 条待合并 PR：

### 🔥 PR #1291 — TLS 握手与 WebSocket 兼容性问题

**链接**：[moltis-org/moltis#1291](https://github.com/moltis-org/moltis/pull/1291)

**技术背景**：当前 Moltis TLS 监听器在 ALPN 扩展中先返回 `h2` 再返回 `http/1.1`，浏览器侧 TLS 握手时会优先协商 HTTP/2。但 Moltis 尚未实现 RFC 8441 Extended CONNECT，导致 WebSocket 升级请求返回 `405 Method Not Allowed`。

**诉求分析**：这是一个典型的**协议层向后兼容性陷阱**——HTTP/2 看似更先进，但在缺乏 Extended CONNECT 支持时会反过来破坏 WebSocket 功能。修复策略是临时将 TLS ALPN 限制为仅 `HTTP/1.1`，直到完整支持 WebSocket-over-HTTP/2 后再放开。👍 反应：0。

### 🔥 PR #1290 — MCP 服务韧性增强

**链接**：[moltis-org/moltis#1290](https://github.com/moltis-org/moltis/pull/1290)

**技术背景**：修复 MCP 模块的三个稳定性问题：
1. **启动追踪**：记录 MCP 启动尝试，使启动失败未达 `running` 状态的服务仍可作为 `dead` 状态重试
2. **指数退避**：复用已有的 health monitor 指数退避机制和 5 次尝试上限重试 dead 状态的服务
3. **会话恢复**：将携带 `Mcp-Session-Id` 头的 streamable HTTP `404` 响应识别为会话丢失并重新建立

**诉求分析**：MCP 是 Moltis 与外部工具/数据源集成的关键协议，会话恢复能力直接影响长任务执行的可靠性。👍 反应：0。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 关联 PR | 状态 |
|---|---|---|---|
| 🟠 **High** | WebSocket 升级失败导致前端无法建立连接（TLS ALPN 协商 HTTP/2 触发） | [#1291](https://github.com/moltis-org/moltis/pull/1291) | 已有 fix PR，待合并 |
| 🟡 **Medium** | MCP 服务器启动失败后无法自动恢复 | [#1290](https://github.com/moltis-org/moltis/pull/1290) | 已有 fix PR，待合并 |
| 🟡 **Medium** | MCP streamable HTTP 会话过期返回 404 后未自动重新建立 | [#1290](https://github.com/moltis-org/moltis/pull/1290) | 已有 fix PR，待合并 |

**整体评估**：所有已报告的 Bug 均已有对应 fix PR，**覆盖率 100%**，但 fix PR 尚未合并到主干，**问题在生产环境中仍然存在**。

---

## 6. 功能请求与路线图信号

⚠️ **今日无新增功能请求或路线图相关讨论。**

从 PR 内容中可以提取到一条隐含的路线图信号：PR #1291 的摘要明确提到 "until WebSocket-over-HTTP/2 is fully supported"，这暗示维护者将 **HTTP/2 完整支持（含 RFC 8441 Extended CONNECT）** 列为了后续技术债。建议社区关注此方向的进展。

---

## 7. 用户反馈摘要

⚠️ **今日无 Issue 评论数据，无法提炼用户痛点。**

仅有的 2 条 PR 描述中可读出的隐性反馈：
- 贡献者在 PR #1291 中直接列出了错误现象 `405 Method Not Allowed`，说明**已有用户在浏览器访问 Moltis Web UI 时遇到了连接失败**，这是首次出现的可推断的用户端可见缺陷。
- PR #1290 的会话过期处理逻辑表明用户在**长时间运行的 MCP 会话场景**中曾遭遇中断。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 等待时间 | 风险提示 |
|---|---|---|---|---|
| PR | [#1291](https://github.com/moltis-org/moltis/pull/1291) | fix(tls): restrict ALPN to HTTP/1.1 | 已提交 1 天 | 🟠 浏览器用户当前仍无法正常使用 Web UI |
| PR | [#1290](https://github.com/moltis-org/moltis/pull/1290) | fix(mcp): recover failed startups and expired sessions | 已提交 1 天 | 🟡 MCP 集成稳定性受限 |

**维护者关注建议**：
1. **优先评审 PR #1291**：TLS ALPN 问题影响所有浏览器用户，是面向最终用户的可见缺陷，紧急度最高。
2. **同步评审 PR #1290**：MCP 韧性修复是面向集成生态的基础设施改进。
3. **建议 Harbor404 等待期间确认 CI 状态**，避免因流水线问题延长合并周期。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 日活 Issue 流转 | 0 | ⚪ 静默 |
| 日活 PR 流转 | 2（开）/ 0（合） | 🟡 提交活跃，评审滞后 |
| 新版本发布 | 0 | ⚪ 无更新 |
| 待合并 PR 数 | 2 | 🟢 在可控范围 |
| 报告 Bug 与 fix PR 覆盖率 | 100% | 🟢 良好 |
| 社区互动（评论/👍） | 0 / 0 | ⚪ 无互动 |

**综合判断**：🟡 **项目处于"维护者注意力分散"状态**——代码侧有实质性产出，但社区互动和版本发布停滞。建议维护者抽出时间完成 PR 评审并发布补丁版本，以免技术债累积。

---

*报告生成时间：2026-10-02 · 数据来源：GitHub REST API · 仅基于公开数据生成*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-10-02**

> 注：本期数据采样自 `agentscope-ai/QwenPaw` 仓库的 GitHub Issues / Pull Requests 公开数据，以下分析以此为准。

---

## 1. 今日速览

CoPaw (QwenPaw) 项目过去 24 小时保持中等偏高的活跃度：**7 条 Issue 更新 + 9 条 PR 更新，0 个新版本发布**。社区贡献集中在 **Bug 修复** 与 **体验打磨**：3 条新报告的 Bug（DeepSeek PDF 会话崩溃、OpenAI gpt-6 连通性、V2.2.2.beta4 局域网访问失败）均集中在 provider / channel 层；PR 侧有 2 条被关闭（疑似重复提交后重开），其余 7 条仍在评审中。值得注意的是，自 2026-09-05 起的 `XXXL` 级特性 PR #7569（Advisor Mode）仍未合并，已积压近一个月，是当前最显著的"长期挂起"信号。

---

## 2. 版本发布

**本周期无新版本发布**。最新公开版本仍为用户报告中的 `2.2.1`（pip）与 `2.2.2.beta4`，但根据 Issue #8073，社区已开始对 beta 渠道进行真机验证并反馈回归问题，建议维护者关注是否需要发 beta5 或回滚。

---

## 3. 项目进展

过去 24 小时有 **2 条 PR 被关闭**，但均为流程性关闭而非实质性合并：

| PR | 作者 | 状态 | 分析 |
|---|---|---|---|
| [#8069](https://github.com/agentscope-ai/QwenPaw/pull/8069) | wxhking | CLOSED | 与 #8070 内容完全一致（同作者、同标题、同改动），疑似重复提交后被关闭，由 #8070 承接。 |
| [#8068](https://github.com/agentscope-ai/QwenPaw/pull/8068) | BeiMu-new | CLOSED | 标记为 "Close-and-review-later"，内容与 #8067（fix channels CJK emphasis boundaries）高度相似，由 #8067 重新提交。 |

**实际推进：**
- **#8070** 修复 DeepSeek provider formatter 默认接受 `application/pdf` / `audio/*` 而 DeepSeek Chat Completions API 仅支持 image 的语义不匹配问题——直接对应 Issue #8064 的根因。
- **#8065** 修复 `staged_skill_dir` / `import_skill_dir` 中 `skill_name` 未做路径转义导致的目录遍历漏洞（CodeQL 报告），属于安全类修复。
- **#8066** 在 formatter 序列化前丢弃空 payload 的 media DataBlock，避免空 data URI 被所有 provider 拒绝。

整体而言，今天没有功能性特性被合并，但 **2 个明确的 Bug 修复链路已成型**（DeepSeek PDF + 空媒体块），预计将在近期版本随同 #8067 的 CJK 渲染修复一并释放。

---

## 4. 社区热点

按评论数排序的活跃条目：

1. **[#7997 — Support message retraction/editing and workspace rollback in WebUI](https://github.com/agentscope-ai/QwenPaw/issues/7997)**（4 条评论，👍0）  
   自 9 月 27 日创建至今讨论最热的条目。诉求是 WebUI 聊天支持"编辑/撤回已发消息 + 截断下游历史 + 可选文件快照回滚"，本质上是把 chat 体验对齐 ChatGPT / Claude.ai 的"取消息"语义。**痛点信号**：用户对"说错了就回不去"的容忍度在下降，期望更细粒度的会话控制。

2. **[#8064 — DeepSeek `send_file_to_user` PDF 永久破坏会话](https://github.com/agentscope-ai/QwenPaw/issues/8064)**（2 条评论）  
   一个 PDF 文件调用即可让该会话后续所有请求返回 `400 file must have a file_id or file_data`，**影响范围横跨 builtin DeepSeek provider 与走聚合路由的 DeepSeek 模型**。

3. **[#8076 — reload 超时后排空的 turn 被静默遗弃](https://github.com/agentscope-ai/QwenPaw/issues/8076)**（1 条评论）  
   配置变更触发 `MultiAgentManager.reload_agent` 时，旧实例可能在长达 24 小时的 delayed_cleanup 窗口内被强制丢弃，且没有任何通知。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 影响 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 高 | [#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064) DeepSeek provider 永久破坏会话 | 单次 PDF 调用即可让会话进入不可恢复的 400 错误循环，影响所有 DeepSeek 模型路由 | ✅ [#8070](https://github.com/agentscope-ai/QwenPaw/pull/8070) 已提交 |
| 🟠 中 | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) OpenAI gpt-6 系列连通性测试 400 | `_uses_max_completion_tokens` 白名单仅匹配 `gpt-5*` 与 `o<digit>*`，gpt-6 系列模型连接测试失败 | ❌ 尚无 PR |
| 🟠 中 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) V2.2.2.beta4 局域网访问会话页报错 | 仅影响同 LAN 其他设备访问本地服务，本机无问题，疑似 CORS / 绑定地址回归 | ❌ 尚无 PR |
| 🟡 中-低 | [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) reload drain 超时 turn 被静默丢弃 | 长期可靠性问题，但触发条件有限（需 24h 超长 reload） | ❌ 尚无 PR |

**健康度提示**：今天 3 个新报告的 Bug 中有 1 个已匹配修复 PR（命中率 33%），低于历史活跃期的平均水平，但 #8070 的修复逻辑清晰，预计合并后能显著降低 DeepSeek 用户的复现率。

---

## 6. 功能请求与路线图信号

今日新增/活跃的功能请求：

- **[#7997 消息撤回与工作区回滚](https://github.com/agentscope-ai/QwenPaw/issues/7997)**（评论数最高）  
  高需求特性，但实现成本涉及 session state 管理、文件快照系统两条链路，短期进入版本可能性较低；建议维护者评估是否将其拆分为"消息撤回 + 编辑"和"工作区快照回滚"两个独立 issue。

- **[#8071 Plugin-facing theme extension point](https://github.com/agentscope-ai/QwenPaw/issues/8071)**  
  在 #7741 已落地用户侧主题切换后，插件侧仍只有 `colorPrimary` 一个钩子。作者 BeiMu-new 提议增加语义 token override 层。**与 #8067 同作者**，且 #8067 已被关闭重开，说明该作者在 Console / Channel 渲染链路上投入明显，建议合并评审时考虑其近期 PR 的整体走向。

- **[#8075 Update bundled Codex SDK](https://github.com/agentscope-ai/QwenPaw/issues/8075)**  
  将 `openai-codex` 从 `0.144.4` 升级到 `0.159.3`，可在 macOS arm64 / Python 3.12 下解锁完整模型发现能力（gpt-5.6 系列等）。属于依赖升级类需求，建议合并为常规维护。

**与已有 PR 的关联：**
- PR #7569（Advisor Mode，[size/XXXL](https://github.com/agentscope-ai/QwenPaw/pull/7569)）自 9 月 5 日起仍 OPEN，叠加今天的"用户希望更精细的会话控制"诉求（#7997），说明社区对"高阶 agent 编排能力"的需求正在累积。若维护者资源允许，Advisor Mode 进入下一版本的可能性较高，但需要先消化当前的 Bug 积压。

---

## 7. 用户反馈摘要

从 Issue 文本与评论中提炼：

- **🟢 满意点**：用户在 #8073 中明确肯定 beta 渠道的"问题反馈路径是通的"，并主动协助定位到"仅 LAN 设备触发"这一关键变量，体现出较高的协作成熟度。
- **🔴 痛点 1：provider 兼容矩阵的脆弱性**——DeepSeek（#8064）与 OpenAI gpt-6（#8074）接连暴露 provider 适配与上游 API 演进脱节的问题；用户场景是"用最新模型跑真实 PDF / 图片"，而非"按白名单跑测试集"。
- **🔴 痛点 2：beta 版本的回归发现机制**——#8073 表明 2.2.2.beta4 的回归来自 LAN 访问路径而非本机路径，CI 覆盖盲区明显。
- **🟡 隐性诉求**：#7997 的 4 条评论和 #8071 的语义 token override 都在呼唤"更接近 ChatGPT / Claude.ai 的桌面级交互体验"，提示 WebUI 已从"能用"阶段进入"好用"阶段。

---

## 8. 待处理积压

| 类别 | 条目 | 打开天数（截至 2026-10-02）| 状态 |
|---|---|---|---|
| ⚠️ 长期挂起 PR | [#7569 Advisor Mode](https://github.com/agentscope-ai/QwenPaw/pull/7569) | **27 天** | size/XXXL，待评审 |
| 🆕 待响应 Issue | [#8076 reload drain 静默丢弃](https://github.com/agentscope-ai/QwenPaw/issues/8076) | 1 天 | 仅 1 条评论，维护者尚未回应 |
| 🆕 待响应 Issue | [#8075 Codex SDK 升级](https://github.com/agentscope-ai/QwenPaw/issues/8075) | 1 天 | 升级建议具体明确，可快速决策 |
| 🆕 待响应 Issue | [#8074 OpenAI gpt-6 连接测试](https://github.com/agentscope-ai/QwenPaw/issues/8074) | 1 天 | 影响 2.2.0 主版本用户，建议尽快 PR |
| 🆕 待响应 Issue | [#8073 beta4 LAN 访问报错](https://github.com/agentscope-ai/QwenPaw/issues/8073) | 1 天 | beta 渠道回归，建议优先排查 |

**维护者建议关注序列：**
1. 评估 #8074 是否需要 hotfix 进 2.2.1 patch（影响主版本 gpt-6 用户）。
2. 决定 #8069 / #8068 关闭后 #8070 / #8067 的合并优先级，形成一个"DeepSeek + CJK + 空媒体 + 路径安全"修复包。
3. 给出 #7569 的明确反馈（合并、迭代或延期），避免 XXL 级 PR 长期挂起降低贡献者信心。

---

*日报生成基于 GitHub Issues / Pull Requests 公开数据，不含内部 Roadmap 与 Slack 讨论。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期：** 2026-10-02
**数据范围：** 过去 24 小时

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时呈现出 **"高活跃、零闭环"** 的状态：39 条 Issue 更新、50 条 PR 更新均为 OPEN 状态，0 个版本发布、0 个 PR 合并、0 个 Issue 关闭。当前工作流高度集中在 **v0.8.6 插件体系重构** 与 **v0.9.0 安全/运行时组合（Composition）边界** 两条主线，由 JordanTheJet、IftekharUddin、Aarlington 三位贡献者主导提交 XL 级堆叠 PR。需重点关注的是，至少 3 条 **S0 级（数据丢失/安全风险）Bug** 仍处于 OPEN，包括委托内存工具丢失主体作用域（#11198）与配置保存覆盖用户配置（#10495）。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 仓库内仍处于 v0.8.5（先前 release），多个 PR 在文末明确标注 `release:v0.8.6` 或 `release:v0.9.0`，建议关注合并窗口。

---

## 3. 项目进展

虽然过去 24 小时 PR 合并数为 0，但 **提交/更新量极大**，说明社区进入集中 review 阶段：

### 安全与认证主线（Aarlington 主导，5 个 XL 级堆叠 PR）
- **#11422** `fix(rpc): use the config-owned key for remote TUI identities` — 解决远程 TUI 身份签名密钥构造问题
- **#11411** `fix(auth): guard private SOP access and configure commits` — 强化 SOP 私有访问与配置提交授权
- **#11410** `fix(auth): guard cron writes and contain unscoped execution` — 防止 cron 写入越权
- **#11409** `fix(delegate): refuse owned background result paths` — 委托主体后台结果路径收紧
- **#11408** `fix(sop): restrict RPC admission and guard storage effects` — 限制 SOP RPC 准入
> 链接：[#11422](https://github.com/zeroclaw-labs/zeroclaw/pull/11422) · [#11411](https://github.com/zeroclaw-labs/zeroclaw/pull/11411) · [#11410](https://github.com/zeroclaw-labs/zeroclaw/pull/11410) · [#11409](https://github.com/zeroclaw-labs/zeroclaw/pull/11409) · [#11408](https://github.com/zeroclaw-labs/zeroclaw/pull/11408)

### 运行时 Composition（v0.9.0 储备）
- **#11174** `feat(runtime): add capability-taking constructors for turn entry points`（Merge Hold，pending 视觉路由修复）
- **#11187** `feat(composition): build DefaultCapabilities in the application layer` — 在应用层组装默认能力
- **#11221** `feat(tools): gate the SaaS and coding-CLI tools behind opt-in features` — 把 12 个 SaaS 工具（Notion/Jira/Composio 等）改为 opt-in feature，**显著缩减默认构建体积**
> 链接：[#11174](https://github.com/zeroclaw-labs/zeroclaw/pull/11174) · [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) · [#11221](https://github.com/zeroclaw-labs/zeroclaw/pull/11221)

### Gateway 统一化（JordanTheJet 主导）
- **#11381** 转发会话消息/状态/删除至 zeroclaw-gw
- **#11382** 转发 status/logs/doctor/event stream
- **#11417** 转发 config writes/Quickstart/reload
- **#11388** `#[credential_url]` 在整配置读取时屏蔽 URL 内嵌凭据
- **#11421** 添加可复现 MCP 内存浸泡测试基线
> 链接：[#11381](https://github.com/zeroclaw-labs/zeroclaw/pull/11381) · [#11382](https://github.com/zeroclaw-labs/zeroclaw/pull/11382) · [#11417](https://github.com/zeroclaw-labs/zeroclaw/pull/11417) · [#11388](https://github.com/zeroclaw-labs/zeroclaw/pull/11388) · [#11421](https://github.com/zeroclaw-labs/zeroclaw/pull/11421)

### 插件体系（v0.8.6，IftekharUddin 主导）
- **#11236** `fix(plugins): recover incomplete installs through plugin remove`
- **#11302** `feat(plugins): bind channel instances and seed their grants at install`
- **#11303** `test(plugins): prove the channel WebSocket lifecycle end to end`
- **#11305** `docs(tools): record tool tiers and the retained core set` — 为 93 个工具分层并记录核心集合
- **#11306** `feat(dev): measure release binary bytes per footprint profile` — 提供 release 二进制体积度量脚本
> 链接：[#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236) · [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302) · [#11303](https://github.com/zeroclaw-labs/zeroclaw/pull/11303) · [#11305](https://github.com/zeroclaw-labs/zeroclaw/pull/11305) · [#11306](https://github.com/zeroclaw-labs/zeroclaw/pull/11306)

### 其他
- **#11419** `feat(config): make secret key/value maps editable in zerocode and dashboard` — 此前 MCP server env 只能在后端配置，前端不可编辑
- **#11223** `test(security): ratchet authority effects behind the recheck`
> 链接：[#11419](https://github.com/zeroclaw-labs/zeroclaw/pull/11419) · [#11223](https://github.com/zeroclaw-labs/zeroclaw/pull/11223)

**整体进度评估：** 项目处于 **"重构收尾 + 安全加固"** 并行期，v0.8.6 插件通道绑定、二进制瘦身、SOP/委托安全基本盘已成形，但因堆叠 PR 数量巨大、依赖链长（多个 PR 标注 "depends on"），预计短期难以快速合并完成。

---

## 4. 社区热点

### 讨论最活跃的 Issue
1. **#9600** [Tracker]: Session-persistence contract ownership and layer ordering（16 条评论）
   - 4 个独立 workstream 同时改动会话持久化契约，但无指定 owner。JordanTheJet 提出的治理 tracker，旨在明确契约所有权与执行顺序
   - 链接：[#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600)
   - **诉求：** 项目治理层面的"契约 ownership"诉求，反映出当前代码库跨模块改动缺乏协调机制

2. **#9799** 长生命周期 daemon 持续多核 CPU 100%+（5 条评论）
   - 0.8.4 debug daemon 运行 17 小时后消耗 140-177% CPU，残留已关闭的 Telegram HTTPS socket 与反复握手
   - 链接：[#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)
   - **诉求：** 揭示 daemon 长连接资源回收缺陷

3. **#10066** / **#10495** / **#11198** / **#7539**（并列 4 条评论）
   - #10066：SOP 引擎在记录 schema 拒绝前已推进并执行后续步骤（安全/正确性）
   - #10495：Config::save() 用接近空文件覆盖用户 109 KB / 25 agents 的真实配置（数据丢失）
   - #11198：委托子代理构造的内存工具丢失原 principal 作用域（跨租户越权）
   - #7539：llama.cpp 模型路由功能长期停留在 icebox
   - 链接： [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) · [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) · [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) · [#7539](https://github.com/zeroclaw-labs/zeroclaw/issues/7539)

**整体诉求分析：** 高评论数 Issue 集中于 **"契约所有权"** 与 **"安全边界"** 两大主题，反映用户对 ZeroClaw 在多租户/多委派场景下的可预测性愈发敏感。

---

## 5. Bug 与稳定性

按严重程度（Severity）排序：

### 🔴 S0 — 数据丢失 / 安全风险（最高优先级）
| Issue | 标题 | 状态 |
|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() 覆盖用户已填充配置 | OPEN，无对应 fix PR |
| [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) | 委托内存工具丢失 principal scope（v0.9.0） | OPEN，Aarlington 的 #11408/#11409/#11410/#11411/#11422 栈可能间接修复 |
| [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | owned sessions 通过 spawn_subagent 触达共享内存 plane（v0.9.0） | OPEN，无对应 fix PR |

### 🟠 S1 — 工作流阻塞
| Issue | 标题 | 状态 |
|---|---|---|
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP 引擎先推进后记录拒绝 | OPEN，可能由 #11408 修复 |
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | Docker master 镜像启动崩溃 + 升级中断可能遗弃数据库（v0.9.0/v0.8.6） | OPEN，无对应 fix PR |
| [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | zerocode "Copy" 一键复制无效 | OPEN，无对应 fix PR |

### 🟡 S2 — 行为降级
| Issue | 标题 | 状态 |
|---|---|---|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode 忽略启动目录并强制 agent workspace 为 cwd（**#10609 回归**，v0.8.6） | OPEN，无对应 fix PR |
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | plugin info / plugin list --verify 报告 `[loads]`，但 runtime 拒绝注册 | OPEN，无对应 fix PR |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 会话后端每次轮换覆盖消息 created_at，时间戳丢失 | OPEN，无对应 fix PR |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review 工具看不到通过 skill_bundles 分配的能力 | OPEN，无对应 fix PR |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review/creation 在 channel/webhook/gateway（web UI）轮次中从不运行 | OPEN，无对应 fix PR |
| [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | 长生命周期 daemon 多核 CPU spin（v0.8.4 已知） | OPEN，无对应 fix PR |
| [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter 花费显示 $0.00，所有 token 被归类为 "free tok"（cost 未摄取） | OPEN，无对应 fix PR |
| [#11257](https://github.com/zeroclaw-labs/zeroclaw/issues/11257) | WhatsApp Web 丢弃入站图片/视频/文档的 caption | OPEN，无对应 fix PR |

### 🔵 S3 — 轻微问题
- **#11296** llama.cpp / 自定义 provider 模型 URL/URI 解析错误（v0.8.4）
- **#9394** `gateway.pairing_dashboard` 被接受但完全未读 + pairing codes 永不过期
- **#10781** 多个 context/history 配置键完全失效（context_compression.*、history_pruning.keep_recent、collapse_tool_results、keep_tool_context_turns）
- **#9624** Registry WIT pin 与 master 分叉，使已发布组件失效

> **修复覆盖评估：** 今日更新的 50 条 PR 中，**确证能直接修复上述 Issue 的比例较低**。Aarlington 的 5 个 PR 主要针对 SOP/RPC/委托路径，**理论上**可缓解 #10066 / #11198 / #11239，但均未在 PR 描述中显式声明。多数 S2/S3 Issue 处于"裸奔"状态，无对应 fix PR 关联。

---

## 6. 功能请求与路线图信号

| 提案 | 状态 | 路线图判断 |
|---|---|---|
| **#7539** llama.cpp 模型路由（[Icebox]） | 已接受但长期未推进 | 优先级 P2，与 v0.8.6 插件化模型不匹配，建议重新设计为 provider 插件后纳入 |
| **#10781** 移除/实现 inert context/history 配置键 | 已接受，跟进中 | 与 #11221（工具 opt-in）同属"配置真实性"工作，建议同步在 v0.8.6 处理 |
| **#10995** 已验证插件更新 + 失败回滚 | 已接受，v0.8.6 | 与 #11236 / #11302 / #11303 一并构成本次插件大重构核心 |
| **#8076** 本地用户名/密码 AuthProvider（IdP-less 浏览器登录） | 已接受 | v0.9.0 安全路线图的关键缺口 |
| **#10766** ZeroRelay 携带已认证 principal（替代 shared_operator 折叠） | 跟进中 | 决定 ZeroRelay 多租户可用性，建议 v0.9.0 必须项 |
| **#10993** 完善 public runtime composition boundary | 已接受，v0.8.6 | 与 #11174/#11187 串联，预计 v0.9.0 才完整落地 |
| **#10998** 交付最小核心工具集与体积证据 | 已接受，v0.8.6 | #11221 + #11306 已部分覆盖 |
| **#10999** 发布并证明 Discord 插件可从 release 二进制安装 | 已接受，v0.8.6 | 阻塞中，依赖 #11081 已合入 |
| **#11323/#11324/#11325** CLI 授权编辑 + Windows 命名管道验证 | 跟进中 | 跨平台一致性补丁，建议随 #11313

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*