# OpenClaw 生态日报 2026-09-19

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-19 02:39 UTC

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

**日期：2026-09-19**

---

## 1. 今日速览

OpenClaw 项目今日维持高强度运转，过去 24 小时共产生 500 条 Issue 更新（其中 149 条已关闭）和 500 条 PR 更新（229 条已合并/关闭），并发布版本 **v2026.9.5**。从问题分布看，**Gateway 主线程阻塞与 SQLite I/O 积压**仍是社区最关心的痛点，多个 P0/P1 issue 围绕 RSS 内存泄漏、WAL 失控、Gateway 长时间无法 ready 展开；与此同时，维护团队（@steipete 主导）集中提交了一批"把 SQLite/SQL 工作从 Gateway 线程移出"的 refactor PR，方向高度一致。整体活跃度处于历史高位，项目健康度偏向"高负载下的稳定性修复期"。

---

## 2. 版本发布

### 🚀 v2026.9.5（已发布）

**核心亮点：** 更安全的升级路径与历史保留

- **Doctor 保留会话历史与重复修复状态**：避免升级过程中合法的 retained history 被判为 invalid 而中断 ([#149741](https://github.com/openclaw/openclaw/issues/149741))
- **完成含 invalid retained history 的升级**：修复了过去升级被历史卡住的问题 ([#149956](https://github.com/openclaw/openclaw/issues/149956))
- **避免 Gateway 仍在启动时反复被 stall/stop**：解决了升级过程中 gateway 被误杀导致的雪崩 ([#148901](https://github.com/openclaw/openclaw/issues/148901), [#149308](https://github.com/openclaw/openclaw/issues/149308))

**升级建议：** 由于本次重点在 Doctor 与升级链路，9.4 用户可较安全升级；9.3 以下版本建议先确认 [#142586](https://github.com/openclaw/openclaw/issues/142586) 的孤儿 task_delivery_state 外键已处理。**破坏性变更**：无明确公开。

---

## 3. 项目进展（今日重要合并/关闭）

| 类别 | PR / Issue | 意义 |
|------|-----------|------|
| 升级修复 | [#152120](https://github.com/openclaw/openclaw/pull/152120) **fix: repair stale Gateway service definitions during updates** | 修复 Discord 报告的 systemd 缺失 `KillMode=mixed` 及 Windows 任务 owner 丢失问题 |
| 升级修复 | [#150898](https://github.com/openclaw/openclaw/pull/150898) **fix(update): reconcile a managed service pinned to another install** | 解决 CLI 安装位置变化后 managed Gateway 仍指向旧二进制的问题（关闭 [#150744](https://github.com/openclaw/openclaw/issues/150744)）|
| Gateway 线程重构 | [#152319](https://github.com/openclaw/openclaw/pull/152319) 把 skill usage/curator SQL 移出 Gateway 线程 | 直接缓解 Gateway 主线程饥饿 |
| Gateway 线程重构 | [#152377](https://github.com/openclaw/openclaw/pull/152377) async 状态操作的 host SQLite 等待 | 设备 token / 任务生命周期锁不再阻塞调用线程 |
| Gateway 线程重构 | [#151685](https://github.com/openclaw/openclaw/pull/151685) task settlement 移至 state worker | 终态持久化异步化 |
| Gateway 线程重构 | [#152005](https://github.com/openclaw/openclaw/pull/152005) profile enumeration 移出 Gateway 线程 | 缓解 profile picker 触发的主线程阻塞 |
| Doctor/升级 | [#152337](https://github.com/openclaw/openclaw/pull/152337) 避免加载已完成/失败的 plugin migration reports | 配合 v2026.9.5 |
| SQLite | [#152302](https://github.com/openclaw/openclaw/pull/152302) idle 进程下恢复已完成的 backup | 备份链路可靠性提升 |
| 投递 | [#152379](https://github.com/openclaw/openclaw/pull/152379) shutdown 时排空投递队列 | 减少 shutdown 期间的丢消息风险 |
| Windows | [#151157](https://github.com/openclaw/openclaw/pull/151157) 保留 Scheduled Task owner | 修复 Windows 升级期间 task 被误杀的问题 |

**项目推进评估：** 今日提交与合并的 PR 高度集中于一个明确主题——**把 SQLite/同步 I/O 工作从 Gateway 主线程剥离**。这是对过去数月累积的"Gateway RSS 膨胀 / 启动 12 分钟 / /health 全部超时"类问题（[#91588](https://github.com/openclaw/openclaw/issues/91588), [#148529](https://github.com/openclaw/openclaw/issues/148529), [#149538](https://github.com/openclaw/openclaw/issues/149538)）的系统性回应。若这批重构顺利合并，OpenClaw 的 Gateway 稳定性将迈出一大步。

---

## 4. 社区热点

按评论数排序的最热 Issues：

1. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（30 评论）** — OpenClaw 泄漏 hook/tool 子进程导致僵尸进程堆积。属于"静默恶化型"问题，长期运行后性能衰退明显。
2. **[#91588](https://github.com/openclaw/openclaw/issues/91588)（26 评论）** — Gateway 内存泄漏（350MB → 15.5GB/数天），触发 OOM & launchd 反复重启。**P1 银贝壳**，无新 fix PR。
3. **[#149361](https://github.com/openclaw/openclaw/issues/149361)（22 评论）** — WebUI 性能与稳定性 umbrella issue，汇集桌面/移动端的页面卡顿与崩溃报告。
4. **[#48003](https://github.com/openclaw/openclaw/issues/48003)（20 评论）** — `messages.queue.mode: steer` 不能 mid-turn 注入消息，回退到"整轮结束才处理"。根因指向 commit `9889c6da5` 引入的 `KeyedAsyncQueue`。
5. **[#149538](https://github.com/openclaw/openclaw/issues/149538)（19 评论）** — main `1611ca6d` Gateway 报 ready 但所有 `/health` 探测超时，event loop 被饿死，632-agent 集群复现。
6. **[#112423](https://github.com/openclaw/openclaw/issues/112423)（17 评论）** — 大 SQLite transcript 清理阻塞 gateway event loop。**P1 钻石龙虾**。
7. **[#150201](https://github.com/openclaw/openclaw/issues/150201)（16 评论，已关闭）** — Windows 2026.9.3 升级候选快照失败，Gateway SQLite check 超时。
8. **[#137332](https://github.com/openclaw/openclaw/issues/137332)（15 评论）** — mixed terminal requester-settle batches 在 ownership check 后无限重试。
9. **[#139710](https://github.com/openclaw/openclaw/issues/139710)（15 评论）** — mid-turn plugin 重新生成覆盖了系统 agent turn 和 planner 兜底。
10. **[#148529](https://github.com/openclaw/openclaw/issues/148529)（12 评论，已关闭）** — 2026.9.4 在 632-agent 集群下启动耗时 ~12 分钟（2026.7.1-2 仅 ~2 秒）。

**背后诉求分析：** 用户核心痛点已经非常集中——**"Gateway 在规模化部署下的资源管理与线程调度"**，具体表现为内存泄漏、僵尸进程、event loop 饥饿、SQLite WAL 失控。大量企业用户（涉及 632-agent 舰队、Windows/WSL2、macOS arm64 多种环境）都遇到了相似问题，强烈期待一个底座性的修复，而非个案补丁。

---

## 5. Bug 与稳定性

### 🔴 P0（影响发布/升级阻塞）

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| P0 🦐 | [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 但不服务，所有 /health timeout | No new fix PR |
| P0 🦐 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 1.4–2.8 GB 不收敛，阻塞 Gateway 启动（Windows）| 待定 |
| P0 🦐 | [#151467](https://github.com/openclaw/openclaw/issues/151467) | 自我升级死锁 + 回滚 cron 失败（v6.33 → v9.4，Oracle Linux aarch64）| 待定 |
| P0 🦞 | [#143334](https://github.com/openclaw/openclaw/issues/143334) | 丢失的 subagent completion 让 requester 卡在 settle-yield | 待定 |
| P0 🦞 | [#152252](https://github.com/openclaw/openclaw/issues/152252) | Config 写入 `meta.migrations.utilityModelSeparation` 让旧 Gateway exit 78 | 待定 |
| P0 🦞 | [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite corruption 在 15–24h 内复发（含"paralyzed gateway"模式）| 待定 |
| P0 🦞 | [#142586](https://github.com/openclaw/openclaw/issues/142586) | Doctor 检测到孤儿 task_delivery_state 外键但无恢复路径（已关闭）| 已合并 |

### 🟠 P1（运行/可用性）

| 严重度 | Issue | 描述 | Fix PR |
|--------|-------|------|--------|
| P1 🦪 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏 → 僵尸 | 无新 PR |
| P1 🦪 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 泄漏至 15.5GB → OOM | 部分缓解中（PR #152319/#152377 方向相关）|
| P1 🦞 | [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 transcript 清理阻塞 event loop | 待定 |
| P1 🦞 | [#134993](https://github.com/openclaw/openclaw/issues/134993) | 2026.8.1 升级后文件系统发现陷入 busy loop | 待定 |
| P1 🦪 | [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026.9.4 回归：reply 因 "no active tool authority snapshot" 丢失 | 待定 |
| P1 🐚 | [#138632](https://github.com/openclaw/openclaw/issues/138632) | 2026.9.1 requester settle wake 丢弃已完成子代理结果 | 待定 |
| P1 🦪 | [#123799](https://github.com/openclaw/openclaw/issues/123799) | 受 Codex compact 404 影响的生产部署需要回退指引 | 待定 |

**评估：** P0 问题中超过半数与**升级/启动路径**相关（[#150201](https://github.com/openclaw/openclaw/issues/150201), [#152252](https://github.com/openclaw/openclaw/issues/152252), [#142586](https://github.com/openclaw/openclaw/issues/142586), [#151467](https://github.com/openclaw/openclaw/issues/151467)），v2026.9.5 已针对其中部分做出修复，但 [#149538](https://github.com/openclaw/openclaw/issues/149538) 这类"ready 但不服务"的最关键问题仍无 fix PR 跟进，建议维护者优先关注。

---

## 6. 功能请求与路线图信号

- **[#10687](https://github.com/openclaw/openclaw/issues/10687) 动态模型发现（OpenRouter 等）** — 老牌增强请求（自 2026-02 起），👍 3，呼声稳定但 PR 缺位，暗示维护者对"模型目录动态化"持谨慎态度。
- **[#9986](https://github.com/openclaw/openclaw/issues/9986) 在 context length exceeded 时触发 fallback** — 用户普遍认为应当纳入主线行为，已有零散讨论但未排期。
- **[#9912](https://github.com/openclaw/openclaw/issues/9912) `maxTurns`/`maxToolCalls` 配置项** — 解决 KIMI K2 等模型无止境迭代导致成本失控，与近期子代理/任务系统重构方向契合。
- **[#9637](https://github.com/openclaw/openclaw/issues/9637) TUI 可访问性：禁用 emoji/Unicode** — 无障碍场景，呼声稳定。
- **[#149361](https://github.com/openclaw/openclaw/issues/149361) WebUI 性能与稳定性 umbrella** — 当前 WebUI 团队（@vyctorbrzezowski、@roboclaw-bot）正集中出 PR（如 [#151709](https://github.com/openclaw/openclaw/pull/151709), [#150426](https://github.com/openclaw/openclaw/pull/150426), [#152316](https://github.com/openclaw/openclaw/pull/152316)），下一版本预计会显著改善。
- **[#152385](https://github.com/openclaw/openclaw/pull/152385) compaction: 用 typed judgments 上报可能的上下文丢失** — 由 [@jason-allen-oneal](https://github.com/jason-allen-oneal) 提出，与 [#152362](https://github.com/openclaw/openclaw/pull/152362) 共同搭建 compaction 的"类型化判断"基础，可能进入 2026.10 月度版本。
- **[#77886](https://github.com/openclaw/openclaw/issues/77886) 受保护配置变更的所有者审批流** — 安全方向呼声稳定，但 PR 缺失。

**路线图预测：** 下一稳定版（2026.10.x）大概率包含：①Gateway 主线程异步化重构成果；②WebUI 体验修复；③compaction 智能化；④升级链路进一步加固。**动态模型发现**、**maxTurns 配置**虽呼声高，但当前维护优先级低于稳定性，预计短期不会合入。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实用户声音：

- **"Gateway 在规模化部署下完全不可用"**：多位 600+ agent 集群用户（[#148529](https://github.com/openclaw/openclaw/issues/148529), [#149538](https://github.com/openclaw/openclaw/issues/149538)）反映从 2026.7.1-2 升级到 9.4 后启动从 2 秒退化到 12 分钟、ready 但无法服务、RSS 失控。一位用户写道："RSS climbs until the host runs out of memory"——这是目前**最尖锐的稳定性反馈**。
- **"Doctor 反而成了升级的拦路虎"**：升级到 9.x 时 Doctor 检测到"orphan foreign key"或"invalid retained history"就中断，但**没有可用的恢复路径**，迫使用户回退版本（[#142586](https://github.com/openclaw/openclaw/issues/142586)）。v2026.9.5 正是回应这一反馈。
- **"升级静默把服务绑定到旧二进制"**：[#150744](https://github.com/openclaw/openclaw/issues/150744)（

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态 · 横向对比分析报告

**报告周期：2026-09-18 ~ 2026-09-19**
**样本项目：13 个**（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw/QwenPaw、ZeptoClaw、ZeroClaw）

---

## 一、生态全景

今日生态呈现明显的**三梯队分层结构**：第一梯队（OpenClaw、ZeroClaw、CoPaw、Hermes Agent、LobsterAI）维持高强度迭代，正处于"稳定性收敛 + 架构加固"的关键周期；第二梯队（NanoBot）保持中等活跃度，聚焦多端一致性修复；尾部项目（NanoClaw、PicoClaw、IronClaw、Moltis、ZeptoClaw）活跃度偏低但聚焦细分场景。**整体风向已从"功能扩张"转向"底座可靠性"**——Gateway 资源管理、SQLite/事件循环健康、升级链路安全性、提示注入防护成为社区共同焦虑，单纯功能 PR 难以获得关注红利。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 已合并/关闭 | 版本发布 | 健康度 | 当前阶段 |
|------|-----------|---------|------------|---------|--------|----------|
| **OpenClaw** | 500 | 500 | 149/229 | **v2026.9.5** | 🟢 高负载修复期 | 规模化稳定性收敛 |
| **ZeroClaw** | 22 | 50 | 6 Issues / 14 PRs | ❌ | 🟢 高水位 | 安全 + Provider 兼容并行 |
| **CoPaw (QwenPaw)** | 23 | 48 | 7 Issues | **v2.2.2-beta.1** | 🟢 Beta 收口期 | 安全加固 + Hub 路线 |
| **Hermes Agent** | 50 | 50 | 17 / 19 | ❌ | 🟢 平台边界打磨 | 跨平台工程化深水区 |
| **LobsterAI** | 6 | 22 | 8 PRs | ❌（分支已合版） | 🟢 高强度集中修复 | 全链路健壮性 |
| **NanoBot** | 5 | 14 | 5 PRs | ❌ | 🟢 良好 | 跨会话路由 + 通道对等 |
| **NanoClaw** | 7 | 4 | 0 | ❌ | 🟡 积压停滞 | 归档生命周期债务 |
| **PicoClaw** | 1 | 4 | 1 PR | ❌ | 🟡 stale 项积压 | 多 Channel 适配 |
| **IronClaw** | 1 | 2 | 0 | ❌ | 🟡 评审资源紧张 | 多 Provider 抽象 |
| **Moltis** | 0 | 1 | 0 | ❌ | 🟡 等待评审 | Provider 补全 |
| **ZeptoClaw** | 0 | 3 | 2 PRs | ❌ | 🟢 维护者驱动 | 兼容 + 安全 |
| **NullClaw** | 0 | 0 | 0 | ❌ | ⚪ 沉寂 | — |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ 沉寂 | — |

**关键观察**：
- **第一梯队 5 个项目**今日合计产生 ~1,250 条 Issues/PR 更新，占样本总量 ~90%
- **仅 2 个项目**有版本动作（OpenClaw 发布、CoPaw 发布 Beta），但 LobsterAI 的 Release 分支已合版暗示近期将正式发版
- **超过 40% 的项目**（5/13）当日活跃度低于 5 条事件，呈现明显长尾

---

## 三、OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 同类项目（ZeroClaw / Hermes / CoPaw） |
|------|----------|--------------------------------------|
| **规模** | 500+ 事件/日，单项目吸纳约 60% 生态活动 | 22-117 条事件/日 |
| **版本节奏** | v2026.9.5（明确迭代号 + 月度节奏） | ZeroClaw/Hermes 无版本；CoPaw 进入 Beta |
| **平台覆盖** | macOS / Windows / Linux / WSL2 / aarch64 全栈 | Hermes 同样强调跨平台，但 PR 节奏不及 |
| **维护者广度** | @steipete 等核心维护者 + 大型协作团队 | 维护者结构较单点 |
| **企业暴露面** | 632-agent 集群、生产 Oracle Linux/Windows 部署 | 以桌面 / 中小规模为主 |

### 技术路线差异

OpenClaw 当前的核心叙事是 **"Gateway 主线程异步化 + 升级链路加固"**：
- [#152319](https://github.com/openclaw/openclaw/pull/152319)、[#152377](https://github.com/openclaw/openclaw/pull/152377)、[#151685](https://github.com/openclaw/openclaw/pull/151685)、[#152005](https://github.com/openclaw/openclaw/pull/152005) 四个 PR 同步推进"SQLite/SQL 工作从 Gateway 线程剥离"
- 对应 [#91588](https://github.com/openclaw/openclaw/issues/91588)（RSS 15.5GB）、[#148529](https://github.com/openclaw/openclaw/issues/148529)（632-agent 启动 12 分钟）、[#149538](https://github.com/openclaw/openclaw/issues/149538)（ready 但不服务）等 P0 痛点

相比之下，**ZeroClaw** 侧重 Provider 多模态边界与运行时协调层重构（#10621 XL 规模）；**CoPaw** 强攻 Hub 多租户与提示注入防护；**Hermes Agent** 深耕 macOS fd/Windows zombie 等平台边界。

### 社区规模对比

OpenClaw 的社区指标（评论数 30+ 的热门 Issue 多条、P1 银贝壳/钻石龙虾等特殊标签体系、issue 体操 PR #113887 风格）显示出**远超同类项目的社区深度**。即便 ZeroClaw、CoPaw 在数据量上接近，社区交互密度仍低于 OpenClaw。

---

## 四、共同关注的技术方向

跨项目横向观察，以下技术方向在多个仓库同步涌现，构成当前生态的**共性痛点**：

| 技术方向 | 涉及项目 | 代表性诉求 |
|----------|----------|-----------|
| **Gateway/事件循环稳定性** | OpenClaw、LobsterAI、ZeroClaw | 主线程饥饿、event loop 饿死、僵尸进程泄漏（OpenClaw #91588/#97616、LobsterAI #2707/#2708） |
| **Provider 多模态边界** | ZeroClaw、CoPaw、OpenClaw、ZeptoClaw | 多模态图像在跨 provider 时被丢（ZeroClaw #10908）、Anthropic 签名 reasoning 被改写（ZeroClaw #10952）、`view_image` base64 无界累积（CoPaw #7853） |
| **SQLite/数据库生命周期** | OpenClaw、Hermes、NanoClaw | WAL 失控（OpenClaw #143524）、transcript 损坏（Hermes #115571）、归档无限增长（NanoClaw #3716/#3735） |
| **推理模型参数透传** | OpenClaw、ZeroClaw、ZeptoClaw、IronClaw | reasoning_content 解析（ZeptoClaw #703）、thinking 控制抽象（IronClaw #7537）、reasoning_effort 转发（ZeroClaw #10916） |
| **跨会话/会话状态一致性** | NanoBot、Hermes、ZeroClaw、OpenClaw | 串话 Bug（NanoBot #5798）、mid-turn 注入失败（OpenClaw #48003）、live session 跨 profile 串号（Hermes #100117） |
| **升级/启动路径加固** | OpenClaw、LobsterAI、Hermes | Gateway 升级被误杀（OpenClaw #148901/#149308、LobsterAI #2707）、自我升级死锁（OpenClaw #151467）、自更新误报（Hermes #115466） |
| **子代理/多 Agent 架构** | OpenClaw、LobsterAI、NanoBot、ZeroClaw | requester 永远卡在 settle-yield（OpenClaw #143334）、子代理可见性（LobsterAI #2703）、session 身份转发（ZeroClaw #10963） |
| **提示注入 / 供应链安全** | ZeroClaw、CoPaw、ZeptoClaw | Git 解析器绕过审批（ZeroClaw #9627/#10966）、持久化注入删除 skills（CoPaw #7859）、Panel 暴力破解（ZeptoClaw #702） |
| **IM/Channel 通道对等性** | NanoBot、PicoClaw、LobsterAI、CoPaw | Discord replyToMessage 对齐 Telegram（NanoBot #5800/#1663）、QQ 富媒体（PicoClaw #1349）、微信投递回执（LobsterAI #2717） |
| **Tool Schema 净化与严格后端** | ZeptoClaw、CoPaw、ZeroClaw | 本地模型工具调用兼容性（ZeptoClaw #701）、字面量绕过截断（CoPaw #7871）、seam sanitizer（ZeroClaw #10952） |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构差异 |
|------|----------|----------|-------------|
| **OpenClaw** | 全栈桌面 AI Agent + Gateway + 多 Channel | 中大型自托管用户、生产部署 | 单体 + Gateway 主线，强调 SQLite/I/O 治理 |
| **ZeroClaw** | 多 Provider 适配 + 安全沙箱 | 追求 Provider 中立性、SRE 场景 | 运行时协调层 + 风险分类器架构 |
| **CoPaw (QwenPaw)** | 桌面协作 + Cowork + Hub 多租户路线 | 团队/企业用户、Qwen 生态 | Electron 桌面端 + 子代理可观测性 |
| **Hermes Agent** | 跨平台工程化（macOS/Windows/Linux） | 跨平台自托管、研究型用户 | 平台边界精细化 + Profile 作用域 |
| **LobsterAI** | 桌面 AI 协作客户端 + IM 整合 | 网易内部 + C 端 IM 用户 | Electron + OpenClaw 集成 + Cowork 风格化 |
| **NanoBot** | 多端一致性 + 通道对等 | 多设备工作流用户 | 轻量化 Agent Loop 抽象 |
| **NanoClaw** | 会话归档 / watchdog | 关注长期运行的运维 | 单一核心问题暴露，无明显架构演进 |
| **PicoClaw** | QQ/Feishu/DeltaChat 多 IM | 中国 IM 生态用户 | Go 实现 + Provider 抽象 + Channel 适配器 |
| **IronClaw** | OAuth 扩展 + 多 Provider 标准化 | NEAR AI + 第三方 LLM 用户 | Provider Adapter 模式 |
| **ZeptoClaw** | 本地推理模型兼容 + Panel 安全 | 本地化部署 / 隐私敏感 | OpenAI 兼容层 + 严格 schema 强转 |
| **Moltis** | OpenAI 兼容 Provider 补全 | Groq/推理速度敏感用户 | Provider 注册表驱动 |

**关键差异**：
- **架构重心**：OpenClaw/ZeroClaw/Hermes 强调运行时稳定性；CoPaw/LobsterAI 强调桌面 UI 与协作体验；ZeptoClaw/IronClaw/Moltis 强调 Provider 兼容性
- **企业就绪度**：OpenClaw > ZeroClaw > CoPaw > Hermes > 其他（按多租户、审计、权限能力评估）
- **本地化部署友好度**：ZeptoClaw > Hermes > OpenClaw > ZeroClaw（按本地推理模型支持深度评估）

---

## 六、社区热度与成熟度

### 分层结构

```
┌─────────────────────────────────────────────────────┐
│ 高活跃 · 大规模协作（≥50 事件/日）                    │
│ OpenClaw · ZeroClaw · CoPaw · Hermes Agent          │
│ 特征：长期 backlog、高评论密度、版本节奏明确          │
├─────────────────────────────────────────────────────┤
│ 中等活跃 · 集中修复期（10-30 事件/日）                │
│ LobsterAI · NanoBot                                │
│ 特征：单日合并 PR 数高、社区小而精                    │
├─────────────────────────────────────────────────────┤
│ 低活跃 · 细分场景维护（<10 事件/日）                  │
│ NanoClaw · PicoClaw · IronClaw · Moltis · ZeptoClaw│
│ 特征：维护者驱动、外部贡献者少、stale 项积累         │
├─────────────────────────────────────────────────────┤
│ 沉寂（0 事件/日）                                    │
│ NullClaw · TinyClaw                                │
│ 特征：停滞或归档状态                                 │
└─────────────────────────────────────────────────────┘
```

### 成熟度信号

- **处于"快速迭代阶段"的**：CoPaw（Hub 多租户新方向）、IronClaw（多 Provider 抽象）、NanoBot（多端一致性）。这些项目 PR 数量稳定但版本号仍在 0.x / 2.2-beta 阶段。
- **处于"质量巩固阶段"的**：OpenClaw、ZeroClaw、Hermes。这些项目活跃度极高但本质是"把已有功能做稳"，新功能 PR 占比下降。
- **处于"积压治理阶段"的**：NanoClaw（归档生命周期）、LobsterAI（Release 合版）。这些项目首要任务是清理历史债务而非扩张。

---

## 七、值得关注的趋势信号

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-19

> 数据来源：HKUDS/nanobot GitHub 仓库
> 数据周期：2026-09-18（过去 24 小时）

---

## 一、今日速览

NanoBot 今日活跃度处于**较高水平**，24 小时内共产生 **19 条更新事件**（5 条 Issue + 14 条 PR），无新版本发布。从结构上看，今日呈现出典型的 **"修复驱动型"工作日**特征：14 条 PR 中有 12 条以 `fix`/`bug` 为标签，且其中 5 条已在当日关闭/合并，闭环效率突出。贡献者集中度较高，`chengyongru` 一人提交 6 条 PR，`yu-xin-c`、`wzrayyy` 等核心维护者亦持续输出。WebUI、Agent Loop、Discord/Telegram 通道是今日三大主要战场，体现出多端体验与跨会话一致性正在成为当前迭代重心。整体项目健康度评估为 **良好**。

---

## 二、版本发布

**今日无新版本发布。**

社区当前使用版本以 `0.3.5` 为主线（参见 #5798 用户报告），距离上一正式版本已有一定迭代积累，但尚未触发新的 release tag 流程。维护者似在等待若干关键修复（特别是跨会话响应、恢复协调器、WebUI 移动端适配等）合入主分支后，再统一发版。

---

## 三、项目进展（已合并/关闭的 PR）

今日共 **5 条 PR 完成关闭**，项目获得实质性推进：

| PR | 标题 | 类别 | 意义 |
|---|---|---|---|
| [#5794](https://github.com/HKUDS/nanobot/pull/5794) | fix: cross-session response delivery in agent loop | Bug 修复 | **高优先级** —— 修复了用户消息在不同 Session 之间串话的核心缺陷，回应了社区长期痛点 #5798 |
| [#5800](https://github.com/HKUDS/nanobot/pull/5800) | feat(discord): add replyToMessage parity with Telegram | 新功能 | 关闭长达 6 个月的 #1663，实现 Discord 通道对 Telegram `replyToMessage` 的功能对齐 |
| [#5810](https://github.com/HKUDS/nanobot/pull/5810) | fix(webui): show all channels when only WebUI is enabled | WebUI 修复 | 解决"仅启用 WebUI 时通道设置页隐藏其他通道"的可用性问题 |
| [#5812](https://github.com/HKUDS/nanobot/pull/5812) | fix(agent): run explicit recovery continuations | Agent 修复 | 恢复流程的可靠执行，减少意外会话丢失 |
| [#5495](https://github.com/HKUDS/nanobot/pull/5495) | feat(channels): add native Linear agent channel | 新功能 | 关闭！原生 Linear Agent 通道（OAuth + PKCE、Webhook、SQLite 队列、WebUI 面板）—— **注：标记为 closed 且有 conflict，可能为作者主动撤回或需 rebase，需关注后续动作** |

**进展评估**：今日在「消息路由正确性」「Discord/Telegram 通道一致性」「WebUI 设置可用性」三个方向均取得明确进展。#5794 直接对应 #5798 用户报告的串话 Bug，影响面较广，合并价值显著。

---

## 四、社区热点

按互动量与议题代表性排序：

1. **[#5798 回复串会话问题](https://github.com/HKUDS/nanobot/issues/5798)** —— 评论 1 次，0 👍
   用户 `wowowowowowowowonojieba` 报告 0.3.5 版本出现跨会话串回复现象，明确指出"0.3.0 没有这个问题"。该议题与今日合并的 #5794 同源，是今日最具代表性的用户痛点。

2. **[#5771 WebUI 移动端需两次点击才能打开会话](https://github.com/HKUDS/nanobot/issues/5771)** —— 评论 1 次
   `morandot` 在 iPhone Air / iOS 27 环境下反馈侧边栏 Session 列表首次点击无响应。已配套 PR [#5805](https://github.com/HKUDS/nanobot/pull/5805)（`wang1408` 提交，状态 OPEN）。

3. **[#1663 Discord replyToMessage parity with Telegram](https://github.com/HKUDS/nanobot/issues/1663)** —— 已关闭
   历经 6 个月、跨越 PR #5800 终结，反映社区对 **Telegram/Discord 通道功能对等性** 的长期诉求。

**诉求分析**：社区当前聚焦于 **多端一致性**（移动端 WebUI 体验、跨通道功能对等）和 **会话隔离正确性**（消息路由、恢复机制）。点赞数普遍偏低（多为 0），提示项目可能未充分运用 👍 反应机制收集热度信号，建议维护者在社区运营中加强引导。

---

## 五、Bug 与稳定性

按严重程度（高→低）排列：

### 🔴 高优先级

1. **[#5798 回复串会话问题](https://github.com/HKUDS/nanobot/issues/5798)** —— 已在 0.3.5 出现，0.3.0 未出现
   - **影响**：Agent Loop 消息分发路径可能将本应发往 Session A 的回复投递到 Session B，破坏用户多会话工作流
   - **修复 PR**：[#5794](https://github.com/HKUDS/nanobot/pull/5794) ✅ **今日已关闭**
   - **状态**：等待下一版本发布落地

2. **[#5808 WebUI follow-ups canceled by /stop replay after gateway restart](https://github.com/HKUDS/nanobot/issues/5808)** —— `main@ea9d13cb` 可复现
   - **影响**：`RecoveryCoordinator` 在 gateway 重启后会将已被显式取消的 follow-up 重新入队，导致用户取消行为失效
   - **修复 PR**：[#5809](https://github.com/HKUDS/nanobot/pull/5809) ✅ OPEN（yu-xin-c 提交，已对应）

3. **[#5806 Discord runtime leaves reaction tasks alive after stop](https://github.com/HKUDS/nanobot/issues/5806)** —— `main@4420ad58` 可复现
   - **影响**：`_reset_runtime_state()` 未清理 `_working_emoji_tasks` 与 `_pending_reactions`，可能导致资源泄漏或僵尸任务
   - **修复 PR**：[#5807](https://github.com/HKUDS/nanobot/pull/5807) ✅ OPEN

### 🟡 中优先级

4. **[#5771 移动端 Session 列表需两次点击](https://github.com/HKUDS/nanobot/issues/5771)**
   - **影响**：移动端 WebUI 体验降级，触摸事件被隐藏的 action 区域吞掉
   - **修复 PR**：[#5805](https://github.com/HKUDS/nanobot/pull/5805) ✅ OPEN

### 🟢 低优先级

5. **PR #5780（OPEN）[wzrayyy]** —— 关闭自动压缩上下文的通知噪音；建议引入配置开关
6. **PR #5813（OPEN）** —— gateway 重连后 WebUI 仍显示旧的"需要重启"提示
7. **PR #5814（OPEN）** —— WebUI 中间回答与最终回答之间的 footer 间距异常

**Bug-修复配对率**：今日 5 条相关 Bug 中，4 条已有对应 Fix PR（且 #5794 已闭合），配对率达 **80%**，维护者响应速度与质量均处于较高水平。

---

## 六、功能请求与路线图信号

今日涉及的功能性 PR/Issue：

| 议题 | 类型 | 状态 | 路线图信号 |
|---|---|---|---|
| [#1663 / #5800 Discord replyToMessage](https://github.com/HKUDS/nanobot/pull/5800) | 新功能 | ✅ 已合并 | **强信号** —— 通道功能对等化进入持续推进阶段 |
| [#5495 原生 Linear Agent 通道](https://github.com/HKUDS/nanobot/pull/5495) | 新功能 | ⚠️ Closed (conflict) | 需 rebase 后重开；Linear 集成需求确认但实现细节待打磨 |
| [#5815 Jev shell safeguard（基于 OpenRouter Decisions API）](https://github.com/HKUDS/nanobot/pull/5815) | 新功能 | OPEN | **方向性信号** —— AI Agent 安全护栏正在被提上议程，opt-in 设计谨慎 |
| [#5811 Subagent 私有会话重构](https://github.com/HKUDS/nanobot/pull/5811) | 重构 | OPEN | 架构层面统一 AgentLoop 与子代理路径，长期利好 |
| [#5780 压缩通知配置化](https://github.com/HKUDS/nanobot/pull/5780) | 改进 | OPEN | 用户体验细化方向 |

**路线图研判**：下一版本大概率包含 **跨会话路由修复、Discord replyToMessage、移动端 WebUI 触摸优化、follow-up 恢复正确性** 等内容。Linear 通道与 Jev 护栏属于"前瞻性"工作，可能进入 0.3.6 或 0.4.0 候选。

---

## 七、用户反馈摘要

| 来源 | 提炼要点 |
|---|---|
| #5798 | **痛点**：用户多任务并行时被打断，工作流被串话破坏；**情绪**：明显不满（"0.3.0 没有这个问题"暗示回退感） |
| #5771 | **场景**：手机端（iPhone Air / iOS 27）作为 NanoBot WebUI 的使用场景存在；**痛点**：首次点击无视觉反馈，感知为"应用卡死" |
| #5780 PR 评论 | **诉求**：自动压缩通知频繁打扰用户，希望默认关闭或提供开关；**态度**：理性提出改进建议 |
| #5495 / #5800 | **诉求**：用户期望 Telegram/Discord/Linear 等通道具备功能对等性与原生集成能力，倾向"开箱即用"而非自行适配 |

**总体反馈特征**：用户对 **多端一致性** 和 **跨会话行为可预测性** 的期望显著上升；移动端体验从"可选"逐渐演变为"必需"。

---

## 八、待处理积压（提醒维护者关注）

1. **[#5495 原生 Linear Agent 通道 PR](https://github.com/HKUDS/nanobot/pull/5495)** —— 已标记 `conflict` 被关闭，建议作者 rebase 后重开，避免长尾流失。

2. **历史 Issue 巡检建议**：除 #1663（已结）外，仍需关注是否存在其他 2025 年的长期未响应 Issue，建议维护者做一次全面 backlog 清理。

3. **PR #5811（重构）** —— `chengyongru` 的 subagent 私有会话重构属于架构级改动，可能引发较大 review 工作量，建议维护者尽早分配 reviewer。

4. **PR #5815（Jev 护栏）** —— 涉及 OpenRouter 第三方 API 与安全策略，建议明确文档、错误处理与降级路径，避免成为下一个"难以维护的特性"。

---

### 📌 一句话总结

> NanoBot 在没有新版本发布的日子里，靠 **14 条 PR + 5 条 Issue** 维持着强劲迭代节奏，重点修复跨会话串话与移动端 WebUI 体验，并推动 Discord/Linear 通道功能对等化。下一个版本值得期待。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：2026-09-19**
**项目地址：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 在过去 24 小时保持高强度迭代节奏，仓库共处理 100 条工单（50 个 Issue + 50 个 PR），其中 36 条已关闭（17 Issues + 19 PRs），合并/关闭率约 36%。社区当日焦点集中在 cron 任务可靠性、跨平台（Windows/macOS/Linux）兼容性与会话/状态一致性三条主线；维护者团队（@teknium1、@Finn763 等）持续以"修一处、根因一处"的风格合入大量 bug fix。值得注意的是：当日 **0 个新版本发布**，但仍有 1 个 **P1 级数据损坏 issue（#115571）处于 open 状态**，需要密切关注。

---

## 2. 版本发布

无新版本发布。

提示：当前主分支在多个 PR 收敛后已累计大量修复（特别是 Windows 安装/macOS fd 扫描/profile 作用域），社区预期下一次发布（推测 v0.21.4 或 v0.22.0）将是一次较大的稳定性收口。

---

## 3. 项目进展

今日合并/关闭的 PR 中，**18 条为 bug fix**，**1 条为性能改进（#103509 ci.yaml 稳定性）**。代表性进展：

| 类别 | PR | 内容 | 影响 |
|------|----|----|------|
| 平台稳定性 | [#115589](https://github.com/NousResearch/hermes-agent/pull/115589) | macOS `libproc` fd 扫描加 1s fail-open 截止 | 修复 macOS 高 fd 数场景下 sqlite 连接卡顿 20s+ 问题；附 2 个 red-first 回归测试 |
| 平台稳定性 | [#115585](https://github.com/NousResearch/hermes-agent/pull/115585) | Windows `_pid_exists` 跳过 POSIX zombie 探测 | 单调用从 ~7ms 降至接近 0，修复 Windows 死会话清理性能 |
| 会话状态 | [#113235](https://github.com/NousResearch/hermes-agent/pull/113235) + [#113265](https://github.com/NousResearch/hermes-agent/pull/113265) | 串行化 dashboard 启动 reconcile + 关闭时 join 工作线程 | 配套修复 #113186 的 SQLite segfault 的一半根因 |
| 配置/CLI | [#103509](https://github.com/NousResearch/hermes-agent/pull/103509) | ci.yaml 偶发 0 jobs dispatch 修复 | CI 流水线从"假失败"转为可信失败 |
| 桌面端 | [#107741](https://github.com/NousResearch/hermes-agent/pull/107741) | 桌面端透出昂贵模型二次确认 | 修复之前静默回退选定模型的隐式行为 |
| Desktop | [#95676](https://github.com/NousResearch/hermes-agent/pull/95676) | SSH 远程切换 profile 时拆除旧 transport | 修复 SSH profile 切换后连接断流的回归 |
| 代理核心 | [#107600](https://github.com/NousResearch/hermes-agent/pull/107600) | `auxiliary.*` auto provider 在无外部 provider 时回落到本机配置模型 | 修复纯自托管用户跑 kanban/curator/vision 时找不到模型的隐蔽 bug |
| Gateway | [#100117](https://github.com/NousResearch/hermes-agent/pull/100117) | Live session registry 按 profile 作用域 + 未知 profile fail-closed | 修复跨 profile 会话串号的严重会话污染问题 |
| 插件目录 | [#108798](https://github.com/NousResearch/hermes-agent/pull/108798) | Hermes Talk 加入插件目录 | 社区终端/Discord/Dashboard 语音接口可发现性提升 |

**整体判断：** 本日合入的修复集中于"操作系统/平台边界 + 会话状态作用域 + CI 可观测性"三大长尾痛点，项目稳定度有肉眼可见的推进，但因没有当日发版，用户侧尚未受益。

---

## 4. 社区热点

按评论数与互动密度排序：

- 🥇 **[#113887](https://github.com/NousResearch/hermes-agent/issues/113887)（9 条评论，已关闭）** — 维护者 @cervantesh 在 @teknium1 逐行复核后将 268 条"陈旧/被取代 PR"重新切片为可操作分组。这是一次高质量的 issue 体操，体现了社区在 PR 生命周期管理上的成熟流程。
- 🥈 **[#109573](https://github.com/NousResearch/hermes-agent/issues/109573)（7 条评论，仍 OPEN）** — `_pending_fleet_restart_needed()` 不验证后继重启是否真的完成就返回 True，属于 fleet 级"假阳性重启"。这是一个治理类 bug，需要在 dispatch 层加证据链。
-  **[#69495](https://github.com/NousResearch/hermes-agent/issues/69495)（6 条评论，仍 OPEN，2026-07-22 创建）** — cron prompt 注入的 `[SILENT]` 指令会让 LLM 在没新内容时退出，且无法定制。触及 cron + LLM 行为契约的核心，社区呼声较高但长期未根治。
- [#112729](https://github.com/NousResearch/hermes-agent/issues/112729)、[#111910](https://github.com/NousResearch/hermes-agent/issues/111910)、[#114526](https://github.com/NousResearch/hermes-agent/issues/114526)、[#76292](https://github.com/NousResearch/hermes-agent/issues/76292)（各 5 条评论）— 集中在 cron worker 启动、kanban 授权恢复、插件克隆认证、Matrix 邀请状态校验四条交叉场景。

**诉求解读：** 用户已经不再满足于"功能能不能跑"，而是开始深入到错误恢复、状态一致性、跨平台契约层面，反映出项目已进入"工程化深水区"。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 — 数据损坏
- **[#115571](https://github.com/NousResearch/hermes-agent/issues/115571)（OPEN，v0.21.0）** — Worker transcript 写入出现 messages 表结构性损坏（row IDs 错乱 + 索引不一致），读只读 integrity verdict 已确认损坏。**当前未见对应修复 PR**，是今日最高优先级 issue。建议维护者在下次发版前完成数据库迁移/校验路径加固。

### 🟠 P2 — 功能/可用性
- **[#109573](https://github.com/NousResearch/hermes-agent/issues/109573)** — fleet 重启假阳性（OPEN，无 fix PR）
- **[#100645](https://github.com/NousResearch/hermes-agent/issues/100645)** — Windows Scheduled Task 启动的 gateway 被误判为 SCM 服务，更新 Access Denied（OPEN，duplicate）
- **[#101380](https://github.com/NousResearch/hermes-agent/issues/101380)** — 微信音频 `MEDIA:` 附件静默丢失，根因是 `send_voice` 拒绝 `is_voice` 关键字（OPEN，无 fix PR）
- **[#97494](https://github.com/NousResearch/hermes-agent/issues/97494)** — Chronos 拒绝托管在 Nous Cloud 的 agent 提交 cron，返回 403（OPEN，无 fix PR）
- **[#115466](https://github.com/NousResearch/hermes-agent/issues/115466)** — self-update v0.21.1→v0.21.3 因前后模块签名不一致（`_find_stale_dashboard_pids` `scope_home` 参数）导致 fleet tail 中止（OPEN，无 fix PR）

### 🟡 P3 — 体验/边界
- **[#110053](https://github.com/NousResearch/hermes-agent/issues/110053)** Langfuse 占位 key 静默失败（OPEN）
- **[#113186](https://github.com/NousResearch/hermes-agent/issues/113186)** SQLite segfault in test runner（OPEN，但 [#115587](https://github.com/NousResearch/hermes-agent/pull/115587) 已修复 runner 侧半边问题）
- **[#115505](https://github.com/NousResearch/hermes-agent/issues/115505)** Android IME 输入重复/Backspace 回滚（OPEN，无 fix PR）

**已修复并合入的代表 P2/P3：**
- [#112095](https://github.com/NousResearch/hermes-agent/issues/112095) — 子代理 vision_analyze 死循环（4M token 浪费）
- [#113537](https://github.com/NousResearch/hermes-agent/issues/113537) — 上下文压缩把一次性指令晋升为长期约束
- [#114645](https://github.com/NousResearch/hermes-agent/issues/114645) — background_review 默认 600k token 远超标配本地模型
- [#114509](https://github.com/NousResearch/hermes-agent/issues/114509) / [#114564](https://github.com/NousResearch/hermes-agent/issues/114564) — cron worker zombie、kanban attachment 共享路径误删
- [#114012](https://github.com/NousResearch/hermes-agent/issues/114012) — Codex OAuth 多 profile refresh token 竞态

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 是否已有 PR | 评估 |
|------|-------|------------|------|
| 移动端 App（iOS 远控桌面会话） | [#50745](https://github.com/NousResearch/hermes-agent/issues/50745) | 无 | 长期挂起（2026-06-22 创建至今），属"愿景型"请求 |
| 仪表盘 Web 端 GFM 表格渲染（TUI 已有） | [#115539](https://github.com/NousResearch/hermes-agent/issues/115539) | 无，但 TUI 已有实现可移植 | **纳入下版本可能性高**，差距明确 |
| 外部 context engine 接收 `max_tokens` + 压缩事件 | [#115517](https://github.com/NousResearch/hermes-agent/issues/115517) | 无 | 插件作者亲述需求，扩展点清晰，路线图价值高 |
| 桌面插件 SDK 表面隔离（admission lint + policy） | — | [#115579](https://github.com/NousResearch/hermes-agent/pull/115579) OPEN | 安全加固，落地中 |
| 不再借用 Codex CLI / Claude Code 登录 | [#113023](https://github.com/NousResearch/hermes-agent/issues/113023) | [#115586](https://github.com/NousResearch/hermes-agent/pull/115586) OPEN | 用户隐私/合规诉求，PR 已就位 |
| Hermes Talk 插件目录化 | — | [#108798](https://github.com/NousResearch/hermes-agent/pull/108798) 已合 | ✅ 落地 |
| Artifact Relay 社区插件（私密发布 Markdown/HTML） | [#100706](https://github.com/NousResearch/hermes-agent/issues/100706) | 无 | 隐私向工作流缺口，需求存在 |

**路线图信号：** 0.21.x 仍在"稳定化 + 权限边界"周期；下一版本较可能加入 Web 表格渲染、Auth 选择开关、桌面插件 SDK 隔离。

---

## 7. 用户反馈摘要

从评论与上下文提炼：

- ** 运维侧痛点（高频）：**
  - "我跑 self-update，更新实际成功了但 tail 报失败，运维脚本陷入 false alarm。" — [#115466](https://github.com/NousResearch/hermes-agent/issues/115466)
  - "Windows 任务计划启动的 gateway，被错认成服务，update 直接拒绝。" — [#100645](https://github.com/NousResearch/hermes-agent/issues/100645)
  - "本地 macOS 高 fd 数进程一连 sqlite 就卡 20 秒。" — [#115583](https://github.com/NousResearch/hermes-agent/issues/115583)（已被 #115589 修复）
  - "纯自托管用户跑 kanban / vision 找不到 model，因为 auto provider 解析不到外部 provider。" — [#107600](https://github.com/NousResearch/hermes-agent/issues/107600)（已修）

- **🤖 行为契约类痛点：**
  - "cron prompt 里塞的 [SILENT] 让 LLM 不输出任何东西，且我不能关

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**: 2026-09-19
**项目地址**: [github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平。过去 24 小时内仅有 1 个 Issue 更新（[Issue #3355](https://github.com/sipeed/picoclaw/issues/3355)）和 4 个 PR 活动，其中 3 个仍处于待合并状态、1 个被关闭，无新版本发布。社区贡献主要集中在 **Channel 适配层**（QQ、DeltaChat）和 **Provider 扩展**（opencode-go）方向，前端性能问题（[PR #3347](https://github.com/sipeed/picoclaw/pull/3347)）也受到持续关注。整体来看，项目处于稳步迭代阶段，但 Issue/PR 的点赞数普遍为 0，反映社区参与度与反馈响应仍有提升空间。

---

## 2. 版本发布

⚠️ **本节无内容**：过去 24 小时内无新版本发布。最近一次可追溯的版本参考为用户在 Issue 中提及的 `nightly-50-gbbf6893c`，项目主线仍依赖 nightly 构建版本迭代。

---

## 3. 项目进展

今日关闭的 PR 推动了一项**重要的 Channel 能力扩展**：

| PR | 标题 | 作者 | 状态 | 影响 |
|---|---|---|---|---|
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | aishannon | 🟢 已关闭 | QQ Channel 消息能力增强 |

**#1349 解析**：该 PR 为 QQ Channel 增加了以下能力：
1. 解析 QQ Channel 的 emoji 结构
2. 处理来自 QQ Channel 的语音、图片、视频、文件等入站消息
3. 支持使用本地语音、图片、视频、文件附件进行回复（发送前先上传）
4. 优先使用 Markdown 消息回复，失败时降级处理

虽然该 PR 被标记为 CLOSED（而非 Merged），但提交时间为 2026-03-11，期间历经 6 个月反复迭代最终关闭，项目整体在 QQ 生态适配上**向前迈进了一步**，建议关注后续是否有重构或拆分版本合入主线。

---

## 4. 社区热点

按互动量与近期活跃度排序：

| 排名 | 编号 | 标题 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [Issue #3355](https://github.com/sipeed/picoclaw/issues/3355) | [BUG]连接飞书报错 (config.json contains unknown field(s)) | 2 | 0 | OPEN (stale) |
| 2 | [PR #3347](https://github.com/sipeed/picoclaw/pull/3347) | fix laggy interface | - | 0 | OPEN |
| 3 | [PR #3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider | - | 0 | OPEN (stale) |

**热点诉求分析**：
- **配置兼容性诉求**（#3355）：用户在配置飞书（Feishu）频道时遇到 schema 校验失败，提示 `app_id` 字段未识别。这反映出配置文件 schema 在多版本迭代中可能存在**字段重命名或路径调整**未及时同步文档的情况。
- **Web UI 性能优化**（#3347）：提交者明确表示并非 TS/Node 专业开发者，但仍基于实测定位到 chat 区域文本量增大时的卡顿问题，这种**跨语言贡献**值得鼓励。
- **Provider 生态扩展**（#3371）：OpenCode Go 作为新增 Provider，社区希望保留对 OpenCode 模型的访问通道，并自动根据 model ID 路由到正确的端点族。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 **中** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书 Channel 配置校验失败：`channel_list.feishu.app_id` 被识别为 unknown field，导致连接失败 | ❌ 无对应 Fix PR（用户已在 Issue 中附上自研解决方案） |

**详细说明**：
- **复现环境**：PicoClaw `nightly-50-gbbf6893c`，Go 1.25.13，启用 Feishu Channel
- **错误信息**：`config.json contains unknown field(s): channel_list.feishu.app_id`
- **当前状态**：Issue 自 2026-09-01 创建，标记为 stale（17 天未更新），仅有 2 条评论、0 点赞
- **风险评估**：属于**配置 Schema 演进未平滑迁移**类问题，对升级用户的影响较大，但因用户已附解决方案，实际阻塞度可控

---

## 6. 功能请求与路线图信号

综合今日活跃 PR 分析，未来版本可能纳入的功能方向：

| 方向 | PR | 信号强度 | 说明 |
|---|---|---|---|
| **QQ Channel 富媒体增强** | [#1349](https://github.com/sipeed/picoclaw/pull/1349) | 🔥 高 | 尽管被关闭，但 QQ 作为重要 IM 入口，能力补全是长期方向 |
| **OpenCode Provider 支持** | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 🟡 中 | 增加 `opencode-go` provider，保留对 OpenCode 模型的兼容 |
| **Web UI 性能优化** | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | 🟡 中 | 长文本渲染卡顿问题，影响日常使用体验 |
| **DeltaChat 重构** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 🟢 常规 | 清理遗留代码 -200 LOC，统一命名（`invite_link` → `join_invite_link`），改进文档 |

**维护者建议**：
- `#3371` 标记为 stale，需尽快评审，否则会失去贡献者信心
- `#3347` 涉及前端 TS/Node 代码，建议邀请前端维护者协助 review

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户反馈：

**痛点 1：配置迁移缺乏引导**
- 用户在飞书连接失败时花费时间排查，最终发现是配置文件 schema 变更
- 期望：**版本升级时自动迁移配置文件**，或在 changelog 中明确标注字段变更

**痛点 2：跨平台前端性能**
- Web UI 在桌面和移动端浏览器（Brave）均存在长文本卡顿
- 期望：**虚拟滚动或文本分块渲染**等现代前端优化手段

**满意点**：
- 用户对 PicoClaw 的 Channel 生态丰富度表示认可（Feishu、QQ、DeltaChat 多端适配）
- 自带 Provider 抽象层使得扩展新模型服务（如 OpenCode）相对友好

**不足点**：
- stale 标签频繁出现，Issue 响应周期较长（#3355 已 17 天未更新）
- 贡献者对 review 周期感知模糊（#1349 历经半年才关闭）

---

## 8. 待处理积压

以下为长期未得到响应的关键条目，建议维护者优先处理：

| 编号 | 类型 | 标题 | 创建时间 | 等待时长 | 风险 |
|---|---|---|---|---|---|
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | PR | feat(providers): add opencode-go provider | 2026-09-08 | 11 天 | 🟡 贡献者流失风险 |
| [#3355](https://github.com/sipeed/picoclaw/issues/3355) | Issue | [BUG]连接飞书报错 | 2026-09-01 | 18 天 (stale) | 🟡 用户体验阻断 |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | PR | fix laggy interface | 2026-08-27 | 23 天 | 🟢 体验优化 |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | refactor(deltachat) | 2026-07-03 | 78 天 | 🟢 代码质量 |

**维护者行动建议**：
1. **本周内**对 #3371 和 #3355 给出明确反馈或合并意向
2. **两周内**对 #3347 安排前端 reviewer 评审
3. **下次迭代**考虑将 #3222 的 DeltaChat 重构纳入，以减少技术债务

---

## 总结

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐☆☆☆ | Issue/PR 数量低于近期均值 |
| **代码健康度** | ⭐⭐⭐⭐☆ | 有主动重构（#3222）和性能优化（#3347） |
| **社区响应** | ⭐⭐☆☆☆ | 存在 stale 积压，反馈周期较长 |
| **生态扩展** | ⭐⭐⭐⭐☆ | 多 Channel、多 Provider 持续扩展 |
| **整体健康度** | ⭐⭐⭐☆☆ | 项目处于稳定迭代期，但需加强社区运营 |

**PicoClaw 当前定位**：一个由 Sipeed 维护、面向 AI Agent 与个人助手场景的开源项目，主打 Go 语言实现 + 多 Channel 适配 + 多模型 Provider 抽象。今日数据显示项目**主线稳定但社区活跃度有波动**，建议维护者重点关注 stale 项的清理与新晋贡献者的引导。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-09-19**

---

## 1. 今日速览

NanoClaw 仓库今日处于"活跃讨论但无实质推进"的状态：过去 24 小时共有 7 条 Issue 更新（含 3 条今日新开）、4 条 PR 更新，但 0 条 PR 合并/关闭、0 个新版本发布。社区热度集中在"会话归档无限增长"这一长期未根治的稳定性问题，并新增 3 条针对 CLI 行为缺陷和文档缺失的反馈。整体而言反馈通道畅通，但核心维护者合并动作停滞，需关注积压增长。

---

## 2. 版本发布

今日无新版本发布。最近版本仍为 Issue #3855、#3854 中提及的 `2.3.0`，以及归档问题中报告的 `2.1.53`。

---

## 3. 项目进展

今日 **无 PR 被合并或关闭**，所有 4 条 PR 均保持 OPEN：

| PR | 作者 | 主题 | 创建日 | 状态 |
|---|---|---|---|---|
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | gavrielc | slug-aware macOS statusbar | 2026-08-20 | 待合并（>30 天） |
| [#3852](https://github.com/nanocoai/nanoclaw/pull/3852) | samueldg | Slack manager token 轮换 | 2026-09-18 | 待合并 |
| [#3851](https://github.com/nanocoai/nanoclaw/pull/3851) | ionescu77 | Codex Responses 传输可配置 | 2026-09-18 | 待合并 |
| [#3850](https://github.com/nanocoai/nanoclaw/pull/3850) | ionescu77 | Codex HTTP/SSE transport 修复 | 2026-09-18 | 待合并 |

项目今日未向前推进任何代码改动。

---

## 4. 社区热点

按评论数排序的活跃 Issue：

- **[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)** — `conversations/` 归档无限增长，无保留/轮换/上限（3 评论）
- **[#3716](https://github.com/nanocoai/nanoclaw/issues/3716)** — `PreCompact` 每次触发全量重写一个无界文件，导致生产 OOM crash loop（3 评论）
- **[#3714](https://github.com/nanocoai/nanoclaw/issues/3714)** — 操作员环境变量覆盖（auto-compact window、transcript rotation）无法到达 session 容器（1 评论）
- **[#3455](https://github.com/nanocoai/nanoclaw/issues/3455)** — claim-stuck watchdog 误杀正在忙的 turn 而非真正卡死的（1 评论）

**诉求分析**：#3735 与 #3716 实质为同一根因（`archiveTranscriptFile` 缺乏生命周期管理），是当前最集中的社区诉求，且 #3716 已被作者明确定位为"生产环境 OOM crash loop 的真实原因"。#3714 是 #1820 的后续，说明该类配置穿透问题已存在超过一个修复周期仍未闭环。

---

## 5. Bug 与稳定性

按严重程度排列：

**🔴 高严重（生产影响）**

| Issue | 描述 | 已有 fix PR？ |
|---|---|---|
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | `PreCompact` 全量重写 + 无清理 → 生产 OOM crash loop | ❌ 无 |
| [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | watchdog 永久阻塞 session 且无自恢复（重试同错） | ❌ 无 |
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | 归档目录在 agent group 生命周期内无限增长 | ❌ 无 |

**🟡 中严重（功能正确性）**

| Issue | 描述 | 已有 fix PR？ |
|---|---|---|
| [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | 三个操作员覆盖 env 完全无法下发到容器 | ❌ 无 |
| [#3855](https://github.com/nanocoai/nanoclaw/issues/3855) | `ncl groups config update --model` 接受任意字符串且 exit 0，无校验、无发现机制 | ❌ 无 |
| [#3854](https://github.com/nanocoai/nanoclaw/issues/3854) | `groups/<folder>/CLAUDE.md` 编辑在 spawn 时被静默覆盖，`groups restart` 无任何提示 | ❌ 无 |

**稳定性信号**：上述 6 条 Bug 均无对应修复 PR 在排队，且 #3716、#3455、#3735 已被报告超过 1 周未被合入修复，存在明显的稳定性债务。

---

## 6. 功能请求与路线图信号

- **模型注册表 / 校验机制**（隐含于 [#3855](https://github.com/nanocoai/nanoclaw/issues/3855)）：用户希望 CLI 能校验 `--model` 参数并提供发现机制（`ncl models list` 或 schema）。
- **CLI 文档与实际同步**（[#3853](https://github.com/nanocoai/nanoclaw/issues/3853)）：`CLAUDE.md` 中的 `ncl` 表已落后于 `ncl help` 输出，至少缺 `policies`、`messaging-groups send`、`sessions history` 三类子命令。建议作为低风险文档 PR 优先合并。
- **配置覆盖链路修复**（[#3714](https://github.com/nanocoai/nanoclaw/issues/3714)）：明确指向需要 host→container env 透传机制，是 #1820 之后的二次曝光，纳入下一版本概率较高。
- **归档生命周期管理**（[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)/[#3716](https://github.com/nanocoai/nanoclaw/issues/3716)）：retention/rotation/cap 是稳定的下个版本刚需。

---

## 7. 用户反馈摘要

**真实痛点（来自 Issue 原文与评论）**：
- **磁盘与内存耗尽**：归档目录随 agent group 生命周期无限增长，触发生产 OOM（[#3716](https://github.com/nanocoai/nanoclaw/issues/3716)、[#3735](https://github.com/nanocoai/nanoclaw/issues/3735)）。
- **配置不生效**：操作员在 host 设置的三个 env 变量实际进不到容器，必须 patch 代码（[#3714](https://github.com/nanocoai/nanoclaw/issues/3714)）。
- **静默数据丢失**：用户编辑 `CLAUDE.md` 后被静默覆盖，且无任何日志/警告（[#3854](https://github.com/nanocoai/nanoclaw/issues/3854)）。
- **错误输入被接受**：`--model` 写错也不会报错，难以诊断（[#3855](https://github.com/nanocoai/nanoclaw/issues/3855)）。

**使用场景**：多 fleet 部署、生产环境代理工作流、Slack 直接模式 provisioning（[#3852](https://github.com/nanocoai/nanoclaw/pull/3852)）、企业代理部署（Codex Responses 通过代理的可靠性，[#3851](https://github.com/nanocoai/nanoclaw/pull/3851)）。

**满意度信号**：未观察到正面反馈；新增 Issue 全部为缺陷或文档缺口，提示近期版本（2.1.53 → 2.3.0）引入/暴露的问题尚未清理。

---

## 8. 待处理积压

按滞留时长排列，需维护者优先关注：

| 编号 | 类型 | 标题（节选） | 创建日 | 滞留 |
|---|---|---|---|---|
| [#3420](https://github.com/nanocoai/nanoclaw/pull/3420) | PR | slug-aware statusbar | 2026-08-20 | **30 天** |
| [#3455](https://github.com/nanocoai/nanoclaw/issues/3455) | Issue | claim-stuck watchdog 误杀 | 2026-08-23 | 27 天 |
| [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | Issue | PreCompact 归档导致 OOM | 2026-09-04 | 15 天 |
| [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | Issue | 操作员 env 覆盖不生效 | 2026-09-04 | 15 天 |
| [#3735](https://github.com/nanocoai/nanoclaw/issues/3735) | Issue | 归档无上限增长 | 2026-09-07 | 12 天 |

**风险提示**：归档与 watchdog 类问题均涉及生产可用性，且无对应 fix PR 在审；建议维护者将 #3735+#3716 视为同一项工作优先处理，并将 #3853（纯文档）作为低风险快速合并项缓解积压观感。

---

*报告生成时间：2026-09-19 · 数据来源：NanoClaw GitHub Issues/PRs*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**: 2026-09-19
**数据范围**: 过去 24 小时（2026-09-18 ~ 2026-09-19）
**项目仓库**: [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日处于**低活跃度**状态，过去 24 小时仅有 1 个 Issue 被更新、2 个 PR 处于待合并状态，未发生任何合并/关闭事件，也没有新版本发布。从数据结构来看，项目处于**持续打磨与积压消化**阶段——Issue #7537（LLM 思考力度控制）已进入讨论迭代后期，PR #8102（OAuth 扩展激活修复）与 PR #7456（Reborn 存储重构 XL 规模）均处于待 review 状态，需要维护者投入评审资源以推动进度。整体健康度良好但节奏偏慢，建议关注积压 PR 的评审响应。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。如需了解历史 Release 信息，请访问 [Releases 页面](https://github.com/nearai/ironclaw/releases)。

---

## 3. 项目进展

今日**无 PR 合并或关闭**。所有活跃 PR 均处于待合并状态：

- 🔗 [#8102 fix(extensions): resolve provider-instance readiness live, administrator configuration first](https://github.com/nearai/ironclaw/pull/8102)
- 🔗 [#7456 fix(reborn): make durable storage profile-agnostic](https://github.com/nearai/ironclaw/pull/7456)

**进度评估**：项目今日未推进任何已合并的代码变更，未出现里程碑式的前进。建议维护者集中精力评审现有 PR，特别是 PR #7456（创建已 39 天，标记为 XL 规模 + medium 风险，跨越 sandbox/ci/docs/dependencies 多个作用域），其延迟合并可能影响后续 Reborn 配置文件切换功能的可用性。

---

## 4. 社区热点

### 🔥 热点 Issue

#### [#7537 feat(llm): generic per-request thinking/effort control (provider-native mapping incl. DeepSeek chat_template_kwargs)](https://github.com/nearai/ironclaw/issues/7537)
- **状态**: OPEN | **创建**: 2026-08-12 | **更新**: 2026-09-18
- **标签**: `enhancement` · `scope: llm`
- **评论数**: 2 | **👍**: 0
- **作者**: serrrfirat

**诉求分析**：该 Issue 提议为 LLM 请求路径添加**通用的思考/力度控制（thinking/effort control）层**，每个 Provider Adapter 将通用级别映射到其原生参数。触发场景是 DeepSeek V4 Flash 通过 NEAR AI 推理时输出过于冗长（"0731 checkpoint got verbose"），但设计目标是 **provider 无关**的抽象层，这意味着 IronClaw 希望在未来支持多供应商时能统一管理推理行为，而不必为每个 Provider 编写独立逻辑。这反映出项目向**多 LLM 后端标准化**方向演进的战略意图。

### 🔥 热点 PR

- 🔗 [#8102](https://github.com/nearai/ironclaw/pull/8102) — 修复 Web UI 配置的 OAuth Provider 无法激活的 Bug，属于**用户体验关键路径**问题
- 🔗 [#7456](https://github.com/nearai/ironclaw/pull/7456) — Reborn 持久化存储重构，**架构级变更**

---

## 5. Bug 与稳定性

### 🔴 高优先级 Bug

#### [#8102 fix(extensions): resolve provider-instance readiness live, administrator configuration first](https://github.com/nearai/ironclaw/pull/8102)
- **严重程度**: 🟠 中-高（影响生产可用性）
- **创建**: 2026-09-18 | **作者**: henrypark133
- **状态**: OPEN（已有修复 PR）

**问题描述**：当操作员通过 **Web UI（管理员配置）** 而非环境变量配置 Google OAuth Client 时，Gmail/Google Calendar **无法在任意部署上激活**。OAuth 流程完整跑通（consent、code、token exchange），但在最后激活阶段失败，提示 `Provider...`（具体错误信息摘要被截断）。这是一个**配置优先级与实时就绪状态解析**的回归或缺陷。

**影响范围**：所有使用 Web UI 管理 OAuth 凭据的部署实例；用户能完成授权但无法使用扩展，属于"流程可用但功能不可用"的负面体验。

**修复状态**：✅ **已有 Fix PR**（#8102），等待评审合并。

---

## 6. 功能请求与路线图信号

### 主要功能请求

| 编号 | 功能 | 信号强度 | 路线图可能性评估 |
|------|------|----------|------------------|
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | LLM 通用思考/力度控制 | 🟢 强（已细化到 Provider 映射层） | **高** — 该请求由社区开发者 serrrfirat 提出，且已设计出 provider-native mapping 抽象，说明有一定实现思路；项目若计划支持 DeepSeek 等国内/第三方模型，此功能将构成基础设施 |

**路线图推断**：
- IronClaw 正从"单一 NEAR AI 后端"向"多 Provider 抽象"演进
- 通用 thinking 控制、Provider 原生参数映射都是**多模型时代的标准需求**
- 预计此类 LLM 抽象层增强会进入下一个 minor 版本

---

## 7. 用户反馈摘要

今日 Issue/PR 评论数量有限（#7537 仅 2 条评论），可提炼的真实用户反馈如下：

### 痛点场景

1. **🔧 运维配置断层**：用户（管理员）倾向于通过 Web UI 配置 OAuth 而非环境变量，但当前路径下 Gmail/Google Calendar 扩展激活失败（[#8102](https://github.com/nearai/ironclaw/pull/8102)）。这反映出 **GUI 配置与底层 provider readiness 检查之间存在不一致**，对偏好低代码运维的用户构成阻碍。

2. **🤖 LLM 输出冗长**：DeepSeek V4 Flash 在 0731 checkpoint 上变得过于啰嗦（"got verbose"），需要 fine-grained 的思考力度控制能力（[#7537](https://github.com/nearai/ironclaw/issues/7537)）。用户希望在不同 Provider 间获得一致的"省力"开关。

### 使用场景
- 企业/团队部署 IronClaw 时，管理员倾向使用 Web 控制台进行 OAuth 提供方注册
- 开发者使用 IronClaw 接入多种 LLM（含 DeepSeek、NEAR AI、第三方）进行推理时，需要差异化控制

### 满意度信号
- 👍 反应数全部为 0 → ⚠️ **需警惕**：可能反映关注度低而非满意度高，建议维护者主动征求社区反馈。

---

## 8. 待处理积压 ⚠️

### 长期未响应的重要项

| 编号 | 类型 | 标题 | 创建日期 | 等待天数 | 风险评估 |
|------|------|------|----------|----------|----------|
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | PR | fix(reborn): make durable storage profile-agnostic | 2026-08-10 | **39 天** | 🟠 中-高（XL 规模 + medium 风险 + 跨 sandbox/ci/docs/dependencies） |
| [#7537](https://github.com/nearai/ironclaw/issues/7537) | Issue | feat(llm): generic per-request thinking/effort control | 2026-08-12 | **37 天** | 🟡 中（enhancement，等待实现共识） |

### 维护者提醒 🔔

1. **PR #7456 严重超期**：作为标记为 `size: XL`、`risk: medium` 的架构级变更，等待 39 天仍无评审动作。这可能：
   - 阻塞依赖 Reborn profile 切换的下游功能
   - 引入合并冲突风险（后续 PR 可能与该重构冲突）
   - **建议优先安排核心维护者 review**

2. **PR #8102 是关键 Bug 修复**：Gmail/Google Calendar 是高频使用的扩展集成，OAuth 激活失败直接影响用户日常使用。建议**加速评审并在确认后尽快合并发布补丁版本**。

3. **Issue #7537 需明确设计走向**：2 条评论表明已讨论，但缺乏明确 RFC 结论。建议维护者或发起人明确是否进入"设计已锁定 / 等待实现"阶段，给社区清晰信号。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h Issues 更新 | 1 | 🟢 正常 |
| 24h PR 更新 | 2 | 🟢 正常 |
| 24h 合并/关闭数 | 0 | 🔴 **需关注** |
| 24h Release 数 | 0 | 🟡 无新版本但有积压 Bug |
| 平均 PR 等待时间 | 39 天（#7456） | 🔴 **过长** |
| 社区互动（👍 反应） | 0 | 🟡 沉默 |

**综合评级**: 🟡 **稳定但节奏偏慢** — 项目维护活跃，但评审资源可能紧张，建议核心维护者优先处理积压 PR 与关键 Bug 修复。

---

*报告生成时间: 2026-09-19 | 数据来源: GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-19**

---

## 1. 今日速览

LobsterAI 在过去 24 小时整体呈现**高强度集中修复态势**：22 个 PR 集中创建/合并，8 个 PR 已关闭（含一个 Release PR），开发活跃度处于高位。议题侧表现疲弱，6 条 Issues 全部为 OPEN 状态且仅 1 条有实际讨论，其余 5 条均为 6 个月前创建的"陈旧议题"被自动复活。无新版本发布，但 `release/2026.9.18` 分支已完成合并，预示下一正式版本已进入收尾阶段。整体项目健康度良好，开发节奏紧凑，主要精力集中在 **OpenClaw 网关稳定性、Windows 安装/升级兼容、Cowork 协作能力**三大方向。

---

## 2. 版本发布

**本周期无新版本。**

补充说明：PR [#2715](https://github.com/netease-youdao/LobsterAI/pull/2715) `Release/2026.9.18` 已在昨日合并关闭，表明 **2026.9.18 发布分支的工程化打包/合版工作已完成**，但尚未在 GitHub Releases 页面产生新的 release tag，建议关注者留意数日内可能的正式版本推送。该 Release PR 涉及 `renderer / docs / main / openclaw / cowork / im / artifacts` 等全量模块，是一次综合性发布。

---

## 3. 项目进展

今日合入/关闭的重要 PR（共 8 个），围绕**协作能力升级、IM 渠道修复、启动恢复加固**三条主线推进：

| PR | 标题 | 意义 |
|---|---|---|
| [#2715](https://github.com/netease-youdao/LobsterAI/pull/2715) | Release/2026.9.18 | 综合性发布分支合版 |
| [#2718](https://github.com/netease-youdao/LobsterAI/pull/2718) | fix: weixin qq qr login channel routing | 修复微信/QQ 二维码登录的渠道路由 |
| [#2717](https://github.com/netease-youdao/LobsterAI/pull/2717) | feat: scheduled task weixin delivery receipt | 定时任务新增微信投递回执 |
| [#2702](https://github.com/netease-youdao/LobsterAI/pull/2702) | fix: openclaw workspace setup recovery | OpenClaw 工作区初始化异常恢复 |
| [#2703](https://github.com/netease-youdao/LobsterAI/pull/2703) | feat: subagent session visibility | 子代理会话可见性增强（重要的多 Agent 可观测性能力） |
| [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) | feat(cowork): turn workspace review, inline question dock and Tasks panel | Cowork 引入工作区审阅、内联提问坞、Tasks 面板（Codex 风格会话改造） |
| [#2701](https://github.com/netease-youdao/LobsterAI/pull/2701) | fix(openclaw): harden startup recovery and Feishu secret routing | 启动阻塞与飞书凭据错位修复 |
| [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) | 已见上表 | — |

**总体评估**：本次合入将 LobsterAI 向"成熟的桌面 AI 协作客户端"又推进一步 —— Cowork 体验完成 Codex 化改造、子代理可观测性增强、IM 渠道路由/回执补齐、OpenClaw 启动恢复链路加固。项目整体处于**功能强化 + 稳定性收敛并行的双轮驱动期**。

---

## 4. 社区热点

⚠️ **需要指出的是：今日所有 PR 的评论数均为 0（即"undefined"），社区参与度极低**。这通常意味着：(a) PR 由核心维护者直接推送，外部贡献者较少介入；(b) 仓库当前以内部迭代为主，社区尚未被充分激活。

**最活跃 Issue**：[#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) `fix(user_plugins): persist hooks field in syncToDisk`
- 唯一有 2 条评论的 Issue，作者 maxbxkj 在 2026-09-11 提交、昨日（09-18）更新
- **诉求**：hooks 配置在 Gateway 重启后丢失，根因定位精准（`getUserPlugins` 未返回 hooks 字段），并附完整修复方案
- **意义**：反映外部贡献者具备深度诊断能力，并主动提出 schema/同步层修复路径 —— 这是高质量社区参与的信号

其余 [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015)、[#1016](https://github.com/netease-youdao/LobsterAI/issues/1016)、[#1023](https://github.com/netease-youdao/LobsterAI/issues/1023)、[#1024](https://github.com/netease-youdao/LobsterAI/issues/1024)、[#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) 均被标记为 `[stale]`，由 stale-bot 在昨日自动重新打开（更新于 2026-09-18），但实际是 6 个月前（2026-03-30）创建的旧议题，详见第 8 节。

---

## 5. Bug 与稳定性

**按严重程度（高 → 低）排列**：

### 🔴 高严重度：启动失败类
- **[#2719](https://github.com/netease-youdao/LobsterAI/pull/2719)** — 跨版本升级数据残留导致启动失败（含 Windows 卸载重装场景）  
  影响：每次启动失败，用户体验崩塌。已提出修复：清理 `openclaw.json` 旧字段、迁移损坏的 user_plugins、跳过孤儿网关锁。**有 fix PR**。

### 🟠 中高严重度：网关可用性
- **[#2707](https://github.com/netease-youdao/LobsterAI/pull/2707)** — 网关恢复后立即崩溃会被无限重启  
  根因：`doStartGateway()` 在首次 readiness 成功后即重置计数器。**有 fix PR**。
- **[#2708](https://github.com/netease-youdao/LobsterAI/pull/2708)** — 网关重启延迟时新建会话被错误拒绝  
  根因：`scheduleDeferredGatewayRestart` 在重启窗口期一律拒绝新会话。**有 fix PR**。
- **[#2709](https://github.com/netease-youdao/LobsterAI/pull/2709)** — Windows 上 OpenClaw SQLite staging 目录创建失败  
  触发条件：PowerShell 被安全软件拦截 / Constrained Language Mode / 无 C# 编译器。已加 fallback。**有 fix PR**。

### 🟡 中等严重度：付费/媒体生成逻辑缺陷
- **[#2714](https://github.com/netease-youdao/LobsterAI/pull/2714)** — 聊天模型可绕过用户意图直接触发付费图像/视频生成  
  当前 `resolveMediaGenerationGate` 只校验"是否选中了媒体模型"，未校验用户是否显式请求。**有 fix PR（待审）**。

### 🟢 较低严重度：构建/迁移/平台兼容
- **[#2706](https://github.com/netease-youdao/LobsterAI/pull/2706)** — Windows PowerShell 5.1 安装器 Skills 备份失败  
  `Measure-Object` 在 `$ErrorActionPreference='Stop'` 下抛出，备份路径走 fallback。**有 fix PR**。
- **[#2705](https://github.com/netease-youdao/LobsterAI/pull/2705)** — 数据迁移备份还原因 `EBUSY` 失败（Chromium persist partitions）  
  需在备份/还原中跳过 `userData/Partitions`。**有 fix PR**。
- **[#2704](https://github.com/netease-youdao/LobsterAI/pull/2704)** — macOS 上 4 个测试因 `/var` symlink 失败  
  **有 fix PR（测试侧）**。
- **[#2711](https://github.com/netease-youdao/LobsterAI/pull/2711)** — SKILL.md frontmatter 非法 YAML 导致版本号丢失  
  影响：技能市场误判升级提示。**有 fix PR**。
- **[#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)** — hooks 字段持久化丢失  
  暂无对应 PR 链接（Issue 内已给出实现草案）。

**整体判断**：几乎所有今日报告的稳定性问题都已配套 fix PR，且覆盖面（启动 → 网关 → 安装 → 数据迁移 → 媒体策略 → 测试）极为系统化，反映出维护团队对"全链路健壮性"的高度重视。

---

## 6. 功能请求与路线图信号

| PR | 功能点 | 路线图定位 |
|---|---|---|
| [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716) | Cowork 新增 Auto / Max 模型模式 | **强信号**：每会话路由策略本地派生，用户可在 Settings 覆盖 |
| [#2713](https://github.com/netease-youdao/LobsterAI/pull/2713) | 技能市场标签页显示结果计数 | **明确 UX 改进** |
| [#2712](https://github.com/netease-youdao/LobsterAI/pull/2712) | 重新导入已安装技能前询问 | **防误操作体验** |
| [#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) | MCP 每服务器 toolFilter 与并行工具调用 | **打通 OpenClaw 已有能力**（配置同步只写 command/url/headers 是历史欠账） |
| [#2703](https://github.com/netease-youdao/LobsterAI/pull/2703) | 子代理会话可见性 | **多 Agent 可观测性**（已合并） |
| [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) | Cowork 工作区审阅/提问坞/Tasks 面板 | **Codex 风格会话改造**（已合并） |
| [#2717](https://github.com/netease-youdao/LobsterAI/pull/2717) | 定时任务微信投递回执 | **IM 渠道可靠投递**（已合并） |

**预测**：下一版本（`2026.9.18` 正式发布或其后续 hotfix）大概率会落地 [#2716](https://github.com/netease-youdao/LobsterAI/pull/2716)、[#2713](https://github.com/netease-youdao/LobsterAI/pull/2713)、[#2712](https://github.com/netease-youdao/LobsterAI/pull/2712)、[#2710](https://github.com/netease-youdao/LobsterAI/pull/2710) —— 它们都集中在"会话路由 + 技能管理 + MCP 控制面"这条主线上。

**值得关注的外部需求**：
- [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) 提议将 `src/main/main.ts` 拆分为 `core/lifecycle/security` 等子模块（社区开发者 zwj-cheer 提供完整重构蓝图）。**维护负担信号明显**，建议评估。

---

## 7. 用户反馈摘要

由于 Issue 评论密度极低，可提炼的真实用户痛点主要来自 Issue 正文：

1. **网易内网 Registry 不可达是高频痛点**（[#1015](https://github.com/netease-youdao/LobsterAI/issues/1015)、[#1025](https://github.com/netease-youdao/LobsterAI/issues/1025)）  
   外部开发者构建时因 `npm.nie.netease.com` 不可达被阻塞 5 分钟；`scripts/ensure-openclaw-plugins.cjs` 未做可达性检查。  
   **建议**：增加 timeout + 进度提示，或将内网插件改为可选 install hook。

2. **登录态下发失败**（[#1016](https://github.com/netease-youdao/LobsterAI/issues/1016)）  
   网易员工走 Portal 登录后，客户端未通过 deep link (`lobsterai://`) 收到 token。这暴露了**外部身份源 ↔ Electron 客户端**之间的回调协议健壮性问题，影响所有网易内部用户。

3. **讯飞 Claude 接口 token 上限硬编码**（[#1023](https://github.com/netease-youdao/LobsterAI/issues/1023)）  
   引擎设置 token limit 接近 97280，超过讯飞 90000 上限；用户希望暴露更多引擎参数。**典型"厂商接入参数化"诉求**。

4. **main.ts 单文件膨胀**（[#1024](https://github.com/netease-youdao/LobsterAI/issues/1024)）  
   社区开发者明确表达"维护起来困难"，并已用 AI 生成了重构草图。**反映项目已进入"中型工程治理"阶段**。

5. **hooks 持久化丢失**（[#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)）  
   外部贡献者不仅定位根因，还给出 schema/同步层完整修复路径 —— 这是一种**高质量的痛点反馈形式**，值得在协作流程上给予响应激励。

---

## 8. 待处理积压（提醒维护者关注）

⚠️ 以下 5 条 Issue 创建于 **2026-03-30**（距今近 6 个月），于昨日被 stale-bot 自动标记后更新，目前全部 OPEN，**几乎无实质进展**：

| Issue | 主题 | 重要性 | 链接 |
|---|---|---|---|
| [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) | `main.ts` 应拆分 | ★★★（工程债 + 社区贡献者已给方案） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1024) |
| [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) | 构建卡死 5 分钟 | ★★★（阻塞外部贡献者上手） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1025) |
| [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015) | `npm.nie.netease.com` 打包失败 | ★★（同 #1025 同源） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1015) |
| [#1016](https://github.com/netease-youdao/LobsterAI/issues/1016) | 网易员工登录态未下发 | ★★（影响内部用户） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1016) |
| [#1023](https://github.com/netease-youdao/LobsterAI/issues/1023) | 讯飞 API token 上限 | ★（影响小众厂商接入） | [链接](https://github.com/netease-youdao/LobsterAI/issues/1023) |

**建议**：
- 对 [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024)、[#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) 这两条外部贡献者已提供完整解决方案的 Issue，至少给出回应（accept / reject / 排期），避免挫伤社区参与意愿；
- [#1015](https://github.com/netease-youdao/LobsterAI/issues/1015) 与 [#1025](https://github.com/netease-youdao/LobsterAI/issues/1025) 实为同根问题，可合并处理；
- [#1016](https://github.com/netease-youdao/LobsterAI/issues/1016) 涉及核心登录链路，建议维护者优先排查。

---

## 附录 · 项目健康度卡片

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐⭐ | 22 PR / 日，集中度高 |
| 社区参与度 | ⭐⭐ | PR 评论几乎为 0，Issue 反馈密度低 |
| Bug 响应速度 | ⭐⭐⭐⭐⭐

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-19

> 数据来源：[moltis-org/moltis](https://github.com/moltis-org/moltis)
> 统计周期：过去 24 小时（2026-09-18 ~ 2026-09-19）

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位**——过去 24 小时内无新增或活跃 Issue、无版本发布，仅有 1 条来自社区贡献者 Kaboka22 的待合并 Pull Request（[#1276](https://github.com/moltis-org/moltis/pull/1276)），且该 PR 尚未收到任何评论或反应。整体来看，项目当日处于"社区静默、维护低频"的状态，没有紧急修复或版本推送压力。

| 指标 | 数值 | 趋势判断 |
|---|---|---|
| 新开/活跃 Issue | 0 | 🟢 异常安静 |
| 已关闭 Issue | 0 | — |
| 待合并 PR | 1 | 🟡 等待评审 |
| 已合并 PR | 0 | — |
| 新版本发布 | 0 | — |

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发版情况未在本次数据中呈现，建议关注 [Releases 页面](https://github.com/moltis-org/moltis/releases) 获取历史发布记录。

---

## 3. 项目进展

### 🔄 待评审 PR

**[#1276 Add Groq as OpenAI-compatible provider + fix empty-required strict schemas](https://github.com/moltis-org/moltis/pull/1276)**
- **作者**: Kaboka22（社区贡献者）
- **状态**: OPEN（待合并），0 评论，0 👍
- **类型**: 修复 + 功能增强

**关键内容**：
1. **功能新增**：将 Groq 正式注册为 OpenAI 兼容的一级 Provider（此前未列入 `OPENAI_COMPAT_PROVIDERS`，导致聊天请求被错误地 fallback 到 genai 模块）。
2. **Bug 修复**：修复了之前 genai fallback 路径下仅注册单一模型、丢弃 tool schemas、模型 ID 路由错乱的问题。
3. **Schema 修复**：附带修复"空必填字段的 strict schema"校验问题。

**项目推进评估**：这是一条**质量较高**的合并请求，同时解决了"功能不可用"和"JSON Schema 校验"两个实际问题。若被合并，将显著改善 Groq 用户的使用体验。然而由于目前尚无 reviewer 反馈，**维护者尚未介入**，建议项目 Owner 优先关注此 PR 的代码评审。

---

## 4. 社区热点

今日**无活跃讨论**。唯一一条 PR 尚处于"无人评论"状态，Issues 板块完全空白。可参考的社区热度信号极度缺乏，项目可能正处于一个低交互周期或贡献者集中提交窗口前的间歇期。

---

## 5. Bug 与稳定性

**重点 Bug：Groq Provider 完全不可用（高严重度）**

| 项 | 内容 |
|---|---|
| 严重等级 | 🔴 **High**（核心 Provider 功能失效） |
| 影响范围 | 所有配置使用 Groq 作为后端的 Moltis 用户 |
| 根因 | Groq 未注册到 OpenAI 兼容 Provider 列表，请求被错误路由至 genai fallback |
| 症状 | 仅能使用单一模型、tool/function calling 全部丢失、模型 ID 路由异常 |
| 修复 PR | ✅ [#1276](https://github.com/moltis-org/moltis/pull/1276)（待合并） |

**建议**：此 Bug 已具备 fix PR，维护者应尽快评审合入，避免持续影响 Groq 用户。

---

## 6. 功能请求与路线图信号

从仅有的数据中可观察到一条**隐性的功能诉求**——用户希望 Moltis 原生、正式地支持 Groq 作为推理后端，而非通过兼容性兜底间接支持。这反映出社区对**多模型后端生态扩展**的需求。PR #1276 的提交本身就是这一诉求的具象化体现，一旦合并，可视为"下一版本"对 Groq 支持的正式承诺。

若项目方有公开路线图（[Projects / Milestones](https://github.com/moltis-org/moltis/projects)），建议将"完善 OpenAI 兼容 Provider 列表"纳入未来迭代规划，覆盖更多类似 Groq 的推理服务商。

---

## 7. 用户反馈摘要

由于今日无 Issues 评论、无 PR 评论数据，**无法从文字反馈中提炼用户痛点**。不过从 PR #1276 的描述中可以反推用户场景：

- **用户场景**：开发者倾向于使用 Groq 作为 LLM 后端（可能因其推理速度快、价格便宜）。
- **当前痛点**：配置 Groq 后功能残缺（无 tool calling、模型选择受限），实际体验"几乎不可用"。
- **贡献动机**：Kaboka22 选择直接提交修复 PR，说明社区贡献者具备较强的技术诊断能力并愿意回哺项目，是项目健康度的积极信号。

---

## 8. 待处理积压

| 类别 | 数量 | 备注 |
|---|---|---|
| 待合并 PR | **1** | [#1276](https://github.com/moltis-org/moltis/pull/1276) — 急需维护者评审 |
| 待响应 Issue | 0 | 暂无积压 |
| 待发布版本 | 0 | — |

**提醒**：虽然待办总数仅为 1，但该 PR 涉及核心 Provider 的功能修复，**等待时间越长，对 Groq 用户的影响就越久**。建议项目维护者在 24-48 小时内完成首轮评审（approve / request changes / merge）。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐☆☆☆ | 今日仅 1 条 PR，提交频次偏低 |
| 社区互动 | ⭐☆☆☆☆ | 0 评论、0 反应，需激活讨论氛围 |
| 问题响应速度 | N/A | 无 Issue 数据无法评估 |
| 版本节奏 | N/A | 今日无版本发布 |
| 贡献者质量 | ⭐⭐⭐⭐☆ | 外部贡献者提交了高质量修复 PR |

**总评**：Moltis 今日处于"安静但有亮点"的状态——社区整体低活跃，但出现了一条值得快速响应的实质性改进。建议维护者把握窗口期，及时评审 PR #1276 以激励社区贡献热情，同时考虑通过 `good first issue` 标签或公开路线图引导更多互动。

---

*报告生成时间：2026-09-19 · 数据来源：GitHub API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：2026-09-19**

> 注：用户提供仓库链接为 `agentscope-ai/CoPaw`，但实际数据指向 `agentscope-ai/QwenPaw` 仓库。本日报基于 QwenPaw 仓库的实际数据撰写，链接均为该仓库地址。

---

## 1. 今日速览

项目处于 **v2.2.2-beta.1 发布窗口的高强度迭代期**，活跃度显著高于近期均值：过去 24 小时共有 23 条 Issue 更新、48 条 PR 更新，1 个 Beta 版本发布。从结构看，**Bug 修复与安全加固类 PR 占绝对主导**（约 70%），反映出 2.2.x 正式版上线后社区正集中暴露稳定性与安全风险；新功能侧则集中在 `pawapp` Creator（视频生成控制面）与 Scroll 记忆架构的稳健化方向。整体项目处于"修缺陷 + 加固 + 局部演进"的健康状态，Issue 关闭率（7/23 ≈ 30%）与 PR 合并节奏（约 33%）均处于活跃区间，但待合并 PR 积压 32 条需关注。

---

## 2. 版本发布

### v2.2.2-beta.1（Beta，2026-09-18 发布）

**主要变更：**
- **feat(console)** 改进分组聊天历史展示（[#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)，@zhaozhuang521）
- **feat(memory)** 统一 ReMe 斜杠命令（[#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444)，@jinliyl）
- **chore** 版本号升至 2.2.2b1（@cuiyuebing）

**已知相关风险（基于已开 Issue）：**
- `qwenpaw-pet 0.1.1` 插件与此版本存在兼容性问题（[#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856)：插件丢失 `actor` 参数导致工具审批流程中断）
- Windows 单元测试存在两处已知失败（[#7870](https://github.com/agentscope-ai/QwenPaw/pull/7870) 正在修复）
- Scroll 上下文驱逐可能丢失工具密集型区间内的用户回合（[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)）

**升级建议：** 当前为 Beta 渠道，主要面向 release-duty 安装验证（[Release Duty #7849](https://github.com/agentscope-ai/QwenPaw/issues/7849)）；生产用户建议观望至 v2.2.2 正式版。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

| PR | 标题 | 影响领域 |
|---|---|---|
| [#7223](https://github.com/agentscope-ai/QwenPaw/pull/7223)（已关闭） | 刷新 DeepSeek 模型目录，按厂商下线移除 `deepseek-chat/reasoner`、接入 `deepseek-v4-flash/pro` | **供应商适配**：确保模型目录与上游对齐，避免调用已下线模型 |
| [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869)（待合并） | OpenCode Go 端点补齐 `x-opencode-session-id` 请求头 | **供应商适配**：修复 [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) MissingSessionID 报错 |
| [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842)（待合并） | 隔离同步钩子、增加事件循环滞后看门狗 | **稳定性**：修复插件同步阻塞导致实例冻结 40s 的严重故障（[#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840)） |
| [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864)（待合并） | 防护技能目录免受提示注入删除 | **安全**：直接对抗 [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) 的持久化注入攻击 |
| [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854)（待合并） | 修复 Driver 重载期间策略更新丢失 | **并发安全**：解决 [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) 的 read-modify-write race condition |
| [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872)（待合并） | Scroll 跨压缩保留被中断的请求 | **记忆可靠性**：修复 [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) 上下文窗口丢请求问题 |
| [#7871](https://github.com/agentscope-ai/QwenPaw/pull/7871)（待合并） | 防止字面量 `<<<TRUNCATED>>>` 标记绕过输出截断 | **安全/稳定**：60KB 输出绕过 50KB 限制 |
| [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867)（待合并） | Console 文件区标签激活时重新校验内容 | **UI 一致性**：修复 [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) |
| [#7865](https://github.com/agentscope-ai/QwenPaw/pull/7865)（待合并） | Console 流中途死亡自愈 | **稳定性**：补充 chat stream 死锁自愈路径 |
| [#7723](https://github.com/agentscope-ai/QwenPaw/pull/7723)（待合并） | `stream_one` 失败时发出错误事件 | **可观测性**：客户端可区分失败回合与正常结束 |

### 整体推进评估
**今日推进质量较高**：修复链路"Issue → PR"闭合率良好（多组 Issue 已配对 fix PR），尤其是安全/并发/事件循环三大类高危问题都有专属 PR 跟进。**新功能 PR 较少且单点突破**（Creator 视频控制面 [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) / [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875)），表明团队资源优先用于 2.2.2 稳定化。

---

## 4. 社区热点

### 高互动 Issue
- **[#7318 QwenPaw Hub 多租户版路线讨论](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — 30 条评论，👍4
  - 长期高热议题：社区呼吁团队版已持续多周，Hub（多租户版）被定位为对 [#2324 多用户访问与管理员托管技能](https://github.com/agentscope-ai/QwenPaw/issues/2324) 的官方回应。
  - 诉求集中在：多用户隔离、管理员托管 skills、权限/审计、配额/账单、跨用户记忆隔离。

### 较活跃 Issue
- **[#7859 持久化提示注入攻击](https://github.com/agentscope-ai/QwenPaw/issues/7859)** — 4 条评论
  - 攻击载体为工具结果尾部追加的 system-reminder，诱使 agent 永久删除所有 skills。社区反响体现用户对供应链/技能目录安全的强烈担忧。
- **[#7853 ToolResultPruner 跳过媒体块导致上下文爆炸](https://github.com/agentscope-ai/QwenPaw/issues/7853)** — 4 条评论
  - `view_image` 的 base64 不可变累积，撑爆模型上下文。这是多模态场景下的硬性架构缺陷，影响所有长会话用户。
- **[#7840 插件共享事件循环导致实例冻结](https://github.com/agentscope-ai/QwenPaw/issues/7840)** — 4 条评论，👍1
  - 用户报告实测冻结 ~40s，影响所有 channel 与 agent。直接破坏了"插件可扩展"的根基。
- **[#7814 Console SSE `null` 载荷与失败流不终止](https://github.com/agentscope-ai/QwenPaw/issues/7814)** — 4 条评论

### 热点诉求分析
社区诉求呈**两极分化**：一方面强烈推动**企业/团队能力**（Hub、权限、审计），另一方面高度关注**安全与稳定性**（注入防护、资源隔离、上下文管理）。这反映出项目同时面对"个人用户深度化"与"团队场景化"两个方向的扩张压力。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（功能不可用 / 安全风险）

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7859](https://github.com/agentscope-ai/QwenPaw/issues/7859) | 持久化提示注入试图删除所有 skills | ✅ [#7864](https://github.com/agentscope-ai/QwenPaw/pull/7864) |
| [#7840](https://github.com/agentscope-ai/QwenPaw/issues/7840) | 插件同步阻塞冻结整个实例 40s | ✅ [#7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) |
| [#7876](https://github.com/agentscope-ai/QwenPaw/issues/7876) | DeepSeek 拒绝 `input_audio`（422），音频回退分类器失效，会话永久中断 | ❌ 暂无 |
| [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | session-sync 跳过 86 个孤立文件，retention purge `database disk image is malformed` | ❌ 暂无 |
| [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | ToolResultPruner 跳过 `type="data"` 媒体块，base64 无界累积撑爆上下文 | ❌ 暂无 |

### 🟠 中等（功能降级 / 一致性问题）

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP 关闭回退可能静默跳过会话清理并泄漏事件循环 | ❌ 暂无 |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | Driver card 后台 reload 覆盖并发策略写入 | ✅ [#7854](https://github.com/agentscope-ai/QwenPaw/pull/7854) |
| [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | qwenpaw-pet 0.1.1 丢失 `actor` 参数破坏工具审批 | ❌ 暂无 |
| [#7847](https://github.com/agentscope-ai/QwenPaw/issues/7847) | 字面量 `%` 编码文件名可能命中错误文件 | ❌ 暂无 |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | Scroll 驱逐丢掉工具密集区间内的用户回合 | ✅ [#7872](https://github.com/agentscope-ai/QwenPaw/pull/7872) |
| [#7866](https://github.com/agentscope-ai/QwenPaw/issues/7866) | 文件区 tab 缓存陈旧，session card 已更新但 tab 未刷新 | ✅ [#7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) |
| [#7599](https://github.com/agentscope-ai/QwenPaw/issues/7599) | OpenCode Go 套餐调用报 `MissingSessionID` | ✅ [#7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) |

### 🟡 轻微（UI / 边缘场景）
- [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813)（已关闭）/ [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814)：Console SSE `null` payload
- [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812)（已关闭）：桌面端启动后斜杠命令作用于 fallback session
- [#7837](https://github.com/agentscope-ai/QwenPaw/issues/7837)（已关闭）/ [#7838](https://github.com/agentscope-ai/QwenPaw/issues/7838)（已关闭）：Scroll 驱逐索引与 sandbox 不可用场景

**Bug 总结：** 23 条 Issue 中 7 条已关闭，5 条有对应 fix PR 待合并，11 条仍处开放状态。**关键缺口在 #7853（多模态上下文）、#7876（DeepSeek 音频）、#7839（DB 损坏）三个高危项上无 fix PR**，建议优先派单。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 现有实现信号 | 纳入下一版本可能性 |
|---|---|---|---|
| **QwenPaw Hub 多租户版**（团队/管理员场景） | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（30 评论） | 已宣布 2.2.0 推出 Hub | ✅ 高（已立项） |
| **Creator 视频生成控制面** | [#7874](https://github.com/agentscope-ai/QwenPaw/pull/7874) / [#7875](https://github.com/agentscope-ai/QwenPaw/pull/7875) | 实现 + 文档同步提交 | ✅ 高（已进入 PR） |
| **Agent 自主上下文管理**（驱逐平滑交接） | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 设计讨论阶段 | 🟡 中（2.2.x 后续或 2.3） |
| **OpenAI Responses 提示缓存** | [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668)（已开 26 天未合并） | PR 已存在 | 🟡 中（需 GPT-5.6+ 适配） |
| **Driver 能力刷新非阻塞化** | [#6381](https://github.com/agentscope-ai/QwenPaw/pull/6381)（已开 2 月） | PR 已存在 | 🟡 中 |
| **飞书思考卡片自动折叠** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570)（已关闭，用户已自证可行方案） | 社区已提供 patch | 🟢 高（低风险可直接采纳） |
| **统一 ReMe 斜杠命令** | v2.2.2-beta.1 已包含 | 已发布 | ✅ 完成 |

**信号总结：** v2.2.2 之后的功能重点是**多租户 Hub** 与

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-09-19** ｜ **仓库：qhkm/zeptoclaw**

---

## 1. 今日速览

ZeptoClaw 今日整体处于**低活跃度、高质量维护**状态。过去 24 小时内无新 Issue 提交或关闭，也无新版本发布；唯一动态来自 3 个 Pull Request，其中 2 个已关闭合入、1 个仍待合并。所有 PR 均由仓库主作者 `qhkm` 提交，缺乏外部社区参与，说明项目目前仍处于维护者主导的内部迭代阶段，未出现大规模外部贡献信号。项目代码改动聚焦于 **Provider 层兼容性与 Panel 端安全加固**两大方向，整体健康度良好，但社区活跃度有提升空间。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 建议关注 `main` 分支后续是否会基于 PR #701、#703 触发补丁版本（如 `v0.x.y`）的发布。

---

## 3. 项目进展

今日关闭/合并的关键 PR 如下，体现了项目在 **多 Provider 兼容** 与 **工具调用健壮性** 方面的持续打磨：

### ✅ PR #703 — 推理模型响应解析增强 [已关闭]
- **链接**：https://github.com/qhkm/zeptoclaw/pull/703
- **关键变更**：针对 OpenAI 兼容端点上推理模型（reasoning model）的回复，原有代码仅解析 `content` 字段，在 token 预算耗尽或模型未生成可见答案时，`content` 可能为 `null` 导致回复被 `unwrap_or_default()` 吞为 `""`。新增对 `reasoning_content` 字段的读取，修复了推理链路上的"静默丢回复"问题。
- **意义**：这是对 vLLM / TGI / OpenRouter 等兼容端推理模型的重要兼容性补全，提升了项目在本地推理后端场景下的可用性。

### ✅ PR #701 — 工具 Schema 净化与参数类型强转 [已关闭]
- **链接**：https://github.com/qhkm/zeptoclaw/pull/701
- **关键变更**：
  - 在 `ToolRegistry::definitions*()` 出站路径统一调用 `utils::tool_schema::sanitize_schema()`，确保所有 Tool Schema 在送入 Provider 前经过清洗；
  - `src/tools/mcp/wrapper.rs` 对外部 MCP 服务器的 `input_schema` 直接透传，插件路径同样适用；
  - 对严格/本地后端（strict / local backends）的模型工具参数进行类型强转（coerce）。
- **意义**：直接解决了本地小模型（参数严格匹配型）与 MCP 工具集成时的常见报错（如 JSON Schema 不合规、类型不匹配），是项目"本地化部署"叙事的重要里程碑。

### 🔄 推进幅度
今日 2 个 PR 合并将项目在 **多 Provider 推理兼容性 + 本地模型工具调用** 方向向前推进了一步，但仍属于增量改进，未涉及架构级重构。

---

## 4. 社区热点

📊 **今日社区互动为零。**

- 3 个 PR 的 👍 数均为 0；
- 无 Issue 评论数据；
- 仓库主作者 `qhkm` 是唯一的 PR 提交者。

**分析**：项目在公开层面尚未形成活跃的外部贡献者社区。这可能与项目阶段（早期/中期）、可见度或定位（高度工具化的 AI Agent 框架）有关。**建议运营侧**考虑添加 `CONTRIBUTING.md`、完善文档站或在相关 AI Agent 社区发布 v0.x 里程碑公告，以吸引外部 reviewer 与贡献者。

---

## 5. Bug 与稳定性

### 🛡️ 安全修复（重要）
- **PR #702 — Panel 密码登录限速 [待合并]**
  - **链接**：https://github.com/qhkm/zeptoclaw/pull/702
  - **严重程度**：🔴 **高**（安全相关）
  - **问题描述**：ZeptoClaw 公开 Panel 的密码登录接口此前不限制密码尝试次数，仅靠 bcrypt 计算成本作为唯一刹车，存在被暴力枚举的风险。
  - **修复方案**：在 60 秒滑动窗口内，每个 socket 对端 IP 最多允许 5 次登录尝试，第 6 次返回 `HTTP 429` 并附带 `Retry-After: 60`，限速在 JSON 解析与密码校验之前生效。
  - **状态**：️ **PR 已创建但尚未合并**，建议维护者优先审阅此安全修复。

### 🐛 兼容性 Bug（非安全）
- **PR #703 已修复**：推理模型在 `content` 为 `null` 时回复被吞，导致用户在前端看到"空回复"。**已有 fix PR（已合并）**。
- **PR #701 已修复**：本地/严格后端因 Tool Schema 不规范而拒绝调用或返回报错。**已有 fix PR（已合并）**。

**整体评估**：今日未发现新的崩溃或回归问题报告，已有 PR 修复链路通畅。

---

## 6. 功能请求与路线图信号

由于今日无外部 Issue 提交，**功能请求信号完全来自仓库主作者自己的 PR**。可观察到的路线图方向：

| 方向 | 信号来源 | 可能的下一步 |
|------|----------|--------------|
| **本地推理模型兼容** | PR #703（reasoning_content）、PR #701（schema sanitize + coerce） | 后续可能扩展到更多本地后端（Ollama、LM Studio、llama.cpp server）的端到端测试 |
| **Panel 安全加固** | PR #702（登录限速） | 可能进一步加入 IP 黑名单、2FA、CAPTCHA 等机制 |
| **MCP 工具生态** | PR #701 中对 MCP `input_schema` 透传的处理 | 暗示对 MCP 协议更深度集成的规划 |

**判断**：基于今日 PR 的方向，下一个版本（若发布）大概率会是一个 **Provider / Tooling 兼容性补丁版**，而非功能大版本。

---

## 7. 用户反馈摘要

⚠️ **今日无可分析的用户反馈**——无外部 Issue、无 PR 评论数据。

仅有的可推断场景来自 PR 摘要描述的用户痛点：

1. **本地推理用户痛点**（PR #703 暗示）：使用 vLLM/TGI 等 OpenAI 兼容服务运行 DeepSeek-R1、QwQ 等推理模型时，前端偶发"无回复"，但实际模型有 `reasoning_content` 输出。
2. **本地小模型 + 工具调用用户痛点**（PR #701 暗示）：在严格 schema 校验的本地后端下，工具调用频繁因参数类型不匹配（如字符串/数字混用）失败。
3. **自托管 Panel 部署者痛点**（PR #702 暗示）：将 Panel 暴露在公网时，对密码登录暴力破解缺乏防护。

---

## 8. 待处理积压

### 🔴 紧急 — 需维护者优先处理
- **PR #702 — Panel 密码登录限速**
  - **链接**：https://github.com/qhkm/zeptoclaw/pull/702
  - **风险**：属于安全加固类 PR，延迟合并意味着生产环境部署的 Panel 仍暴露于暴力枚举风险下。
  - **建议**：建议维护者尽快审阅合并，并考虑在 Release Notes 中明确标注为 Security 修复。

### 📋 其他观察
- 无长期未关闭的 Issue；
- 无外部贡献者 PR 积压；
- 项目当前 PR 流转效率较高（当日提交、当日合并），内部响应链路通畅。

---

## 📌 健康度总评

| 维度 | 评级 | 说明 |
|------|------|------|
| 代码活跃度 | 🟡 中 | 有内部迭代但缺乏外部贡献 |
| 社区参与度 | 🔴 低 | 0 Issue、0 外部 PR、0 评论 |
| 安全响应 |  良好 | 已主动识别并提交安全修复 PR |
| 兼容性维护 | 🟢 良好 | 推理模型 + 本地后端 + MCP 全面覆盖 |
| 流程效率 | 🟢 优秀 | PR 当日流转率高 |

**总结**：ZeptoClaw 今日呈现出一个 **维护者驱动、技术债务可控** 的中小型开源项目典型形态。代码质量层面持续进步，但社区生态建设是下一阶段值得投入的方向。

---
*报告生成时间：2026-09-19 ｜ 数据来源：GitHub API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-19

> 数据窗口：2026-09-18 ~ 2026-09-19（24 小时）  
> 数据源：GitHub Issues / Pull Requests  
> 仓库：`zeroclaw-labs/zeroclaw`

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时继续保持高强度迭代节奏：22 条 Issues 更新（16 活跃 / 6 关闭）、50 条 PR 更新（36 待合并 / 14 已合并或关闭），但**无新版本发布**。工作集中在三条主线——**Provider 传输与多模态修复**（Anthropic、OpenAI-Compatible、Reliable）、**ZeroCode/ACP 客户端体验改进**（重复响应、Config 刷新、Token 统计）以及**Security/Sandbox 风险分类器强化**（特别是 Git 子命令解析）。新增 3 条 Issue 中包含 1 个 **S0 级安全风险**（#10966），延续了近一周的 Git 解析器漏洞系列。整体项目活跃度处于**高水位**，但合并 PR 中 XL 级别变更密集，存在一定的 review 拥塞风险。

---

## 2. 版本发布

⚠️ **过去 24 小时内无新 Release 发布。** 多个关键修复（#9635 Git 风险分类器、#10672 ZeroCode 去重、#10911 配置原子发布等）虽已关闭 PR 但尚未打 tag，建议关注下一次版本节奏。

---

## 3. 项目进展

过去 24 小时共有 **6 个 PR 关闭**，主要进展如下：

| PR | 标题 | 影响 |
|---|---|---|
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | `fix(config)`: 在风险分类器中解析 Git 全局选项后的子命令 | **高价值** — 修复 `git -C / --git-dir` 绕过审批门的问题，配套关闭 Issue #9627 |
| [#10672](https://github.com/zeroclaw-labs/zeroclaw/pull/10672) | `fix(zerocode)`: 避免重复流式响应 | 修复 ZeroCode 在 `TurnComplete` 到来前重复渲染已完成回复的问题 |
| [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864) | `fix(providers)`: 关闭 OpenCode session header 后续 | 修复 `x-opencode-session` 头被错误丢弃导致无 affinity 头请求 |
| [#10775](https://github.com/zeroclaw-labs/zeroclaw/pull/10775) | `fix(rpc)`: 模式替换失败时保留 live 会话 | 同 ID Chat/ACP 替换出错时不再丢失原会话 |
| [#10800](https://github.com/zeroclaw-labs/zeroclaw/pull/10800) | `test(rpc)`: 校准调度栈防护到 1.5 MiB | 将 #10735 后的回归测试阈值收紧到 2% |
| [#10119](https://github.com/zeroclaw-labs/zeroclaw/pull/10119) | `feat(dev)`: 将 anti-slop 作为共享 PR 门禁 | 仓库质量门禁（status: parking-lot，尚未合并进 master） |

**同步关闭的 Issue**：#9627（Git 风险分类器绕过）、#9649（agent parity 行 1 sealed state）、#10667（ZeroCode 重复响应）、#10709（Astra 设置文档）、#10736（pre-output 流失败跳过非流式回退）、#10772（zeroclaw-eval archive 测试独立化）。

**整体推进评估**：项目在「Provider 兼容层」「ZeroCode 客户端」「Security 策略」三个面向均有实质闭环，但核心架构类 PR（#10911 配置原子发布 +3,390/-1,475 行、#10621 运行时生命周期协调 XL）仍处于 OPEN 状态，距离发布还有距离。

---

## 4. 社区热点

按评论数排序，活跃讨论集中在以下议题：

| 排名 | Issue | 评论 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | #4853 | 8 | 从 `.well-known/agent-skills` 索引安装 skills 的 RFC | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) |
| 2 | #8850 | 4 | 将可选 channels/tools 从编译期 feature flag 迁移到运行时 WASM 插件 | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| 3 | #9649 | 3 | agent 策略 parity row 1 测试封印 | [#9649](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) |
| 3 | #10736 | 3 | Reliable provider pre-output 流失败跳过非流式回退 | [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) |
| 3 | #10908 | 3 | 工具结果中的图片标记被提升为附件、丢失来源 | [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) |

**诉求分析**：
- **#4853** 是项目最老的活跃 Issue 之一（创建于 2026-03-27），讨论与 `agentskills/agentskills` 上游 RFC 对齐的 `.well-known` URI 标准，社区希望与 Cloudflare、Vercel 等生态保持一致。
- **#8850** 反映社区对「二进制瘦身后通过运行时插件扩展」架构的强烈兴趣——这是减少默认构建体积的核心路径。
- **#10908** 与今日新增的 **#10952**（Anthropic thinking 签名被 seam sanitizer 改写）形成同一类问题：**多模态/工具结果管线在跨 provider 边界时缺乏来源保留**，是近一周最热的工程痛点。

---

## 5. Bug 与稳定性

### 🔴 S0 — 数据丢失 / 安全风险（已修复或新增）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#9627](https://github.com/zeroclaw-labs/zeroclaw/issues/9627) | `git -C / --git-dir` 全局选项绕过风险分类器与审批门 | [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) | ✅ 已关闭 |
| [#10966](https://github.com/zeroclaw-labs/zeroclaw/issues/10966) | Git `--attr-source` 可隐藏变更性子命令绕过审批分类 | — | 🆕 待修复 |

### 🟠 S2 — 降级行为（多个尚无 Fix PR）

| Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | 工具结果中的图片标记无来源地升格为附件 | [#10903](https://github.com/zeroclaw-labs/zeroclaw/pull/10903) 部分覆盖 | OPEN |
| [#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) | seam sanitizer 改写 tool-call envelope 内已签名 reasoning，Anthropic 拒绝重放 | — | 🆕 待修复 |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output 流失败时声明了非流式回退但实际未发请求 | — | ✅ Issue 关闭 |
| [#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667) | ZeroCode 在 prompt 完成先于 TurnComplete 时重复响应 | [#10672](https://github.com/zeroclaw-labs/zeroclaw/pull/10672) | ✅ 已修复 |
| [#10951](https://github.com/zeroclaw-labs/zeroclaw/issues/10951) | ZeroCode Config 保存后字段列表刷新两次 | — | OPEN |
| [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` 配置在运行时被忽略 | — | OPEN |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | `interruption_scope_key` 在组件边界外键碰撞 | — | OPEN |

**稳定性信号**：
- Git 解析器已成为**漏洞高发带**，一周内连续报告两条 S0（#9627 已修复、#10966 新增），维护者需要专门评估 Git 全局选项扫描器是否需要全面重构。
- Provider 多模态管线存在**跨 provider 不一致**（Anthropic 签名 reasoning vs. 通用 sanitize），#10903/#10904 仅覆盖了部分场景。
- ZeroCode/ACP 客户端的体验类 bug（重复渲染、Config 双重刷新）正在逐个收尾。

---

## 6. 功能请求与路线图信号

过去 24 小时新增的 Feature Request / RFC：

| Issue | 类型 | 概要 | 路线图概率 |
|---|---|---|---|
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | RFC | 「Agent 向人类提问」的单一持久原语（基于 SOP gate 复用） | 🟡 中 — 与 #6971/#8583 同主题 |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | RFC | 出站消息的 delivery receipt 机制 | 🟡 中 — 切中当前 channel 模块最大空白 |
| [#10963](https://github.com/zeroclaw-labs/zeroclaw/issues/10963) | Feature | 将 session 身份转发给 delegate 子 agent | 🟢 高 — 与 #10601/#10643 同主线 |
| [#10962](https://github.com/zeroclaw-labs/zeroclaw/issues/10962) | Feature | 通过 gateway `/ws/chat` 转发工具结果 payload | 🟢 高 — 客户端急需，已被 #10197 等多条线涉及 |

**已有 PR 推动中的对应方向**：
- **运行时协调层**：[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) XL 级别变更，目标是把 daemon RPC / gateway / channels / ACP admission / CLI 的 live-config 统一收口（#10911 是其配置发布切片）。
- **ACP 中断恢复**：[#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) 持久化中断 turn，0.8.6 里程碑路径上。
- **Provider 兼容层增强**：[#10916](https://github.com/zeroclaw-labs/zeroclaw/pull/10916) 为非 OpenAI 推理模型（GLM-5.3 / Kimi / DeepSeek）转发 `reasoning_effort`；[#10724](https://github.com/zeroclaw-labs/zeroclaw/pull/10724) 引入可配置 Anthropic `cache_ttl`（stacked on #10623）。
- **ZeroCode UI 整合**：[#10879](https://github.com/zeroclaw-labs/zeroclaw/pull/10879) 把 Sessions Queue 与 Plan 合并到一个 dock。
- **ZeroRelay 浏览器注册前端**：[#10525](https://github.com/zeroclaw-labs/zeroclaw/pull/10525) Phase 1（relay-terminated、删除自研 TLS 栈）。

**判断**：下一版本（推测 0.8.6）很可能率先吸收：**Git 风险分类器全系列修复**（#9635 已合并，#10966 待补）、**ZeroCode UI 整合**（#10879）、**Provider `reasoning_effort` 透传**（#10916）、**ACP 中断恢复**（#10197）。架构级 PR（#10621、#10911、#10525）可能推迟到 0.9.0。

---

## 7. 用户反馈摘要

从 Issue 评论与正文提炼的真实用户场景与痛点：

1. **多模态图像链路断裂**（#10908、#10903、#10952、#10480）
   - 用户场景：调用 `image_info` 或其他工具后，多模态图像在下游 provider 请求中**被静默丢弃**或**被改写签名**导致 Anthropic 拒绝。
   - 痛点：图像只能在 user turn 末尾的连续工具批中存活，跨 provider 时 seam sanitizer 不知情。

2. **ZeroCode 配置与预算反馈失效**（#10950、#10951）
   - 用户场景：在 ZeroCode 配置 `cost.warn_at_percent` 却没有警告出现；保存 Config 后字段列表被双重刷新。
   - 痛点：**配置项被识别但运行时未消费**（CostTracker::check 中无相关分支）——典型的「声明/执行断层」。

3. **客户端无法获得工具结果**（#10962）
   - 用户场景：在 0.8.4 上通过 gateway `/ws/chat` 流观察到工具开始/结束帧，但拿不到工具返回内容。
   - 痛点：客户端被迫做重复抓取；ZeroClaw 协议层的缺失字段阻碍上层 UX。

4. **代理子任务的会话身份缺失**（#10963）
   - 用户场景：`delegate` 派生子 agent 时，子 prompt 仅由 LLM 编写的 `context` 构成，不携带 parent session 标识。
   - 痛点：审计、限流与可观测性无法串联父子调用。

5. **零代码可重复响应**（#10667 → #10672）
   - 用户反馈：ACP 持久化只有一条 assistant 消息，但 ZeroCode TUI 显示两条。
   - 痛点：客户端状态机与持久层生命周期未对齐。

6. **出站消息可达性不可知**（#10929）
   - 用户场景：agent 发出消息后没有任何 receipt，运维无法判定是否真正送达。
   - 痛点：**当前 `SendMessage` API 完全没有 id 字段**——结构性问题。

7. **Git 安全审批可绕过**（#9627、#10966）
   - 用户场景：使用 `git --attr-source <read-verb-named-value>` 之类的全局选项，可让 mutating subcommand 隐藏为只读子命令。
   - 痛点：S0 级，反映策略分类器需要**shell-dialect 感知的统一解析器**（#9635 已修复 #9678 的部分）。

---

## 8. 待处理积压

以下重要 Issue/PR 已长期处于 OPEN 状态，建议维护者优先关注：

| Issue/PR | 标题 | 创建日期 | 等待时长 | 标签 |
|---|---|---|---|---|
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 从 `.well-known/agent-skills` 索引安装 skills | 2026-03-27 | **~6 个月** | status:in-progress / parking-lot |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime & Gateway 交付追踪（v0.8.6 / v0.9.0） | 2026-06-09 | **~3 个月** | tracker |
| [#8691](https://github.com/zeroclaw-labs/zeroclaw/issues/8691) | ADR 清单与已接受 RFC 决策记录 | 2026-07-04 | **~2.5 个月** | docs / tracker |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 可选 channels/tools 迁移到运行时 WAS

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*