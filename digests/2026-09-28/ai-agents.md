# OpenClaw 生态日报 2026-09-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-28 03:02 UTC

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

**报告日期：2026-09-28**
**仓库：**[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
**数据周期：过去 24 小时**

---

## 1. 今日速览

OpenClaw 项目近 24 小时维持在**高强度迭代 + 高压力修复并存**的状态：500 条 Issue 更新（新开/活跃 465，关闭 35）与 500 条 PR 更新（待合并 371，合并/关闭 129）同步爆发，且无任何 Release 发布。当前主线集中在 **2026.9.7 发布准备**（参见 #157531），围绕 Gateway 崩溃循环、SQLite 锁竞争、内存泄漏、自动更新链路、移动端准备信号看门狗等 P0 阻断型问题密集修复。整体活跃度评估为 **🔴 极高（稳定承压期）**，Bug 报告与 PR 比例依旧失衡，但自动化修复通道（clawsweeper）正在消化大量积压。

---

## 2. 版本发布

**本周期无新版本发布。**

当前焦点为即将到来的 **2026.9.7**：截至 2026-09-27 已合并 PR 中涵盖 18/21 已识别的 P1 候选修复（隐私/用户数据、移动端同步、Gateway 启动路径等）。Maintainer 尚未给出冻结 RC 的具体时间，但从 PR 流入速度判断，下一稳定版大概率在 7–10 天内发布。本日报暂不展开升级说明。

---

## 3. 项目进展

> **注**：本日被明确标记为"已合并/已关闭"的 129 个 PR 在当前数据流中未公开列表，因此以下进展基于**今日活跃 PR 的命名空间与模块信息**汇总推断的主题性结论。

近 24 小时的 PR 流入主要服务于 **修复 2026.9.6 回归 + 大规模代码整理（"deslop"系列第四遍）+ 移动端体验改善**三条主线，可量化的方向性进展如下：

| 方向 | 代表 PR | 推进内容 |
|---|---|---|
| **Gateway / Server 第四轮代码整理** | [#159856](https://github.com/openclaw/openclaw/pull/159856)、[#159999](https://github.com/openclaw/openclaw/pull/159999)、[#159527](https://github.com/openclaw/openclaw/pull/159527) | 由 @steipete 推动，去除遗留投影重复、前向层与已退役的所有者密钥管道，属于可维护性静默修复 |
| **Cron 一致性 / 重启恢复** | [#159873](https://github.com/openclaw/openclaw/pull/159873)、[#134995](https://github.com/openclaw/openclaw/pull/134995) | 防止一次性 cron 在重启恢复后重复派送；披露调用方范围的 Automation 清单 |
| **Catalog Worker / 内存治理** | [#159935](https://github.com/openclaw/openclaw/pull/159935)、[#160055](https://github.com/openclaw/openclaw/pull/160055) | 隔离 catalog worker 状态与堆；停止目录刷新对已知 provider 的重复重建（关联 #159514 内存泄漏修复） |
| **CI / 工具链加固** | [#160024](https://github.com/openclaw/openclaw/pull/160024)、[#160014](https://github.com/openclaw/openclaw/pull/160014) | 在 Linux 上强制进程树内存上限，为语义检查准备内核内存约束后端 |
| **移动端（iOS / Android）** | [#160025](https://github.com/openclaw/openclaw/pull/160025)、[#160049](https://github.com/openclaw/openclaw/pull/160049)、[#159984](https://github.com/openclaw/openclaw/pull/159984) | iOS 不在 setup 失败后连接、Android 新聊天归属、P0 阻断 |
| **Channel 清理（iMessage/WA/MSTeams/Mattermost/Signal/LINE）** | [#159998](https://github.com/openclaw/openclaw/pull/159998) | 移除重复管道与私有转发层 |
| **审批可观测性** | [#159516](https://github.com/openclaw/openclaw/pull/159516) | Slack 插件审批卡中展示请求方上下文与结果 |
| **测试确定性** | [#159979](https://github.com/openclaw/openclaw/pull/159979)、[#159974](https://github.com/openclaw/openclaw/pull/159974) | 隔离广播 SQL 与 Watch 鉴权时序，避免 flaky CI |

**整体判断**：项目处于"质量负债集中清偿"窗口期，可见功能新增较少（仅 WebUI Lobsterdex +7 角色 [#159815](https://github.com/openclaw/openclaw/pull/159815)），更多精力放在稳定性、可观测性、CI 与测试确定性。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的议题集中在崩溃循环、状态生命周期与发布阻塞类问题：

**Top Issues（按评论量）：**

| 排名 | Issue | 评论数 | 焦点 |
|---|---|---|---|
| 1 | [#159356](https://github.com/openclaw/openclaw/issues/159356) | 25 | llama.cpp 嵌入子进程退出后 manager 仍报 ready，导致 500。这是当日单一议题下最高密度讨论，反映了 RAM 翻倍（4→8 GB）才恢复的实战经验，对所有本地嵌入部署有警示意义 |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 16 | hook/tool 派生的子进程未被回收，长期僵尸累积 → 运行时退化（5 个月积压） |
| 3 | [#157531](https://github.com/openclaw/openclaw/issues/157531) | 15 | **2026.9.7 Fixes Tracker**，社区以该 Issue 为中心协调修复 |
| 4 | [#156112](https://github.com/openclaw/openclaw/issues/156112) | 14 | npm 全局安装下 `openclaw update` 在 "global install swap" 步骤确定性失败 |
| 5 | [#137729](https://github.com/openclaw/openclaw/issues/137729) | 12 | 脚本重放/错误分类中的 `.trim()` 未守卫 | 

**Top PRs（按当前评论量，本次展示窗口内无高评论 PR，所有 PR 均处于"等待 maintainer 审阅 / 等待作者"阶段）：**

影响力最大的几条 PR 虽然评论数不高，但已有明确的 issue 闭合线索：
- [#160056](https://github.com/openclaw/openclaw/pull/160056)（Doctor 修复支持 canonical service home）
- [#160034](https://github.com/openclaw/openclaw/pull/160034)（Testbox 内存提升以通过 Bun runtime 校验）
- [#159688](https://github.com/openclaw/openclaw/pull/159688)（重启恢复失败时回退会话，P1 + telegram 端到端证明）
- [#160049](https://github.com/openclaw/openclaw/pull/160049)（iOS QR setup 失败后阻止错误连接，P0）

**社区诉求总览**：用户对"可重复的更新/迁移路径"和"崩溃后能自我恢复"有强烈共识，对"长期挂着没人动的 PR/Issue"开始出现疲劳。

---

## 5. Bug 与稳定性

按严重程度（标签中含 `impact:ux-release-blocker` / `crash-loop` / `message-loss` / `data-loss` 优先）排列：

### 🔴 P0 阻断级

| Issue | 主题 | 影响 | 是否有进行中的 fix PR |
|---|---|---|---|
| [#157531](https://github.com/openclaw/openclaw/issues/157531) | 2026.9.7 Fixes Tracker | UX Release Blocker | 多个 PR 协同 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 npm 全局 swap 步骤失败 | UX Release Blocker | 未见（待补） |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动 wall-time 随插件数线性增长 | Crash-loop / UX Release Blocker | 未见 |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | plugin-doctor 后 session-state 反复 crash-loop | Crash-loop | 未见 |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows 自动更新三重失败（preflight/$OPENCLAW_STATE_DIR/abandoned） | UX Release Blocker | 未见 |
| [#158126](https://github.com/openclaw/openclaw/issues/158126) | gateway-server-close 偶发 `Worker environment inventory has closed` | Crash-loop | 未见 |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite freelist 错位 15–24h 内复发 + "paralyzed gateway" 模式 | Data/Message Loss + Crash-loop | 未见 |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | gateway worker 状态生命周期不释放 | Message Loss + Crash-loop | 间接 [#159013](https://github.com/openclaw/openclaw/pull/159013) |
| [#157227](https://github.com/openclaw/openclaw/issues/157227) ✅已关闭 | git-to-stable 升级后 service revalidation 失败 | UX Release Blocker | 已闭合（活动追踪） |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | catalog worker 几乎每次请求重建 ≈8 MB ES Module | Crash-loop | ✅ [#159935](https://github.com/openclaw/openclaw/pull/159935)、[#160055](https://github.com/openclaw/openclaw/pull/160055) |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness watchdog SIGTERM 慢启动 gateway | Crash-loop | 未见 |
| [#156917](https://github.com/openclaw/openclaw/issues/156917) | state-lifecycle lease 无心跳，挂起客户端卡 31 min | Crash-loop | 未见 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | 大 DB + 长 reclamation 触发 `database is locked` | UX Release Blocker | 未见 |
| [#154812](https://github.com/openclaw/openclaw/issues/154812) | Gateway RSS 9.32 GiB → host OOM | Crash | 间接 [#160024](https://github.com/openclaw/openclaw/pull/160024) |
| [#152839](https://github.com/openclaw/openclaw/issues/152839) | Synology NAS Docker openat2 ENOSYS 兼容路径缺失 | Crash-loop / Security | 未见 |
| [#154834](https://github.com/openclaw/openclaw/issues/154834) | 失败子代理投递错误上下文持久化 | 未明确 | 间接 |

### 🟠 P1 / 重要回归

| Issue | 主题 | fix PR 状态 |
|---|---|---|
| [#144291](https://github.com/openclaw/openclaw/issues/144291) | 配置热重载中止所有进行中的 agent turn | 未见 |
| [#157986](https://github.com/openclaw/openclaw/issues/157986) | agentTurn automation DataCloneError | 未见 |
| [#123799](https://github.com/openclaw/openclaw/issues/123799) | Codex compact 404 的安全升级 / backport 指引 | 未见 |
| [#157575](https://github.com/openclaw/openclaw/issues/157575) | Managed Gateway heap flag 覆盖 worker 限制 | 未见 |
| [#142271](https://github.com/openclaw/openclaw/issues/142271) | 隔离代理 egress proxy 下 cron agentTurn 无法 exec（Security） | 未见 |
| [#157389](https://github.com/openclaw/openclaw/issues/157389) | feishu 多 lane 丢回复（self-suppression/stall/supersession） | 未见 |
| [#156425](https://github.com/openclaw/openclaw/issues/156425) | Anthropic 路由上 durable context-engine turn 不提交 | 未见 |
| [#84110](https://github.com/openclaw/openclaw/issues/84110) | Codex app-server 续轮重写 prompt → OpenAI 缓存命中骤降 93→47% | 未见（4 月积压） |
| [#95746](https://github.com/openclaw/openclaw/issues/95746) | memory-core dreaming 耗尽本地模型上下文 | 未见 |
| [#126549](https://github.com/openclaw/openclaw/pull/126549) 关联 | Control UI 重连后丢失活动 turn | ✅ PR 在审 |

### 🟡 P2 / 增强与体验

- [#154104](https://github.com/openclaw/openclaw/issues/154104) Matrix 4 E2EE 账户空载 ~50% CPU + ~52 MB/min 写盘（回归）
- [#157989](https://github.com/openclaw/openclaw/issues/157989) Plugin source capture 每次 CLI 重写 1.1–1.4 GB / 每次 Gateway 启动 6.5 GB（SSD 损耗严重）
- [#118793](https://github.com/openclaw/openclaw/issues/118793) Claude CLI session-limit 错误未走 fallback
- [#148789](https://github.com/openclaw/openclaw/issues/148789) 备用链耗尽候选并错误归因
- [#124759](https://github.com/openclaw/openclaw/issues/124759) iOS 显示 reasoning 与 tool activity 时严重卡顿
- [#137508](https://github.com/openclaw/openclaw/issues/137508) Android 键盘弹起遮挡聊天内容

**稳定性结论**：已知 P0 阻断数量仍偏高（10+），且并非全部具备进行中的修复 PR。最大的结构性风险是 **Gateway 生命周期与 SQLite/状态锁**——多 issue 链路互相纠缠，单独 PR 难以闭环。

---

## 6. 功能请求与路线图信号

- **多索引 embedding 内存** ([#63990](https://github.com/openclaw/openclaw/issues/63990))：长期需求，今日仍无实质性推进；按当前节奏很可能在 2026.10 之后排期。
- **M3 thinking 等级补全**（xhigh/adaptive/max）([#89114](https://github.com/openclaw/openclaw/issues/89114))：属于 provider profile 限制，预计需 MiniMax 上游调整后才有可能纳入。
- **`openclaw update status` 补齐插件/迁移风险披露** ([#122019](https://github.com/openclaw/openclaw/issues/122022))：与 #157812 形成强协同需求，**有可能在 2026.9.7 或 .8 纳入**。
- **语义无进展判断用于 loop detection** ([#153819](https://github.com/openclaw/openclaw/pull/153819))：草稿 PR 已在审，配合 #120415 / #120449 缺口有望小幅推进。
- **重复型防护（unsaved display name）** ([#153151](https://github.com/openclaw/openclaw/issues/153151))：WebUI 体验细节，可独立小修。
- **角色 / 视觉资产增量** ([#159815](https://github.com/openclaw/openclaw/pull/159815))：Lobsterdex 42→49，纯娱乐 PR，用户呼声明确，预计快速合并。
- **CLI 后端 loop / 模型回退**：来自 #118793、#148789、#55694 的诉求形成"fallback 与重复检测"统一主题。

---

## 7. 用户反馈摘要

提炼自 Issue 摘要与评论区（**仅基于公开 issue 内容，不推测任何身份信息**）：

**强烈痛点**
- "**升级像拆炸弹**"：#156112、#157812、#152992、#158099 共同表明，从 2026.9.x 任意版本升降均会触发平台特定的更新失败，Windows/macOS/Docker/Synology 各有路径。
- "**崩溃 = 重启，重启 = 再崩**"：#126821、#157160、#156917、#158936 描述的循环中，用户被迫采用"砍掉 watchtower / 禁用 systemd 重启 / 杀死 app" 等非常规手段。
- "**我看到了 OOM，但不知道是谁的 OOM**"：#154812 / #159356 都需要借助宿主 RAM 扩容才恢复，说明 **诊断可观测性不足**是反复出现的回退理由。

**满意度信号**
- 维护者对 "deslop"

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期：2026-09-28**
**覆盖项目：13 个（OpenClaw / NanoBot / Hermes Agent / PicoClaw / NanoClaw / NullClaw / IronClaw / LobsterAI / Moltis / CoPaw / ZeroClaw / TinyClaw / ZeptoClaw）**

---

## 一、生态全景

今日生态呈现**"集中修复期 + 安全加固潮"**的双重特征：13 个项目中 11 个有活跃动态，所有项目均无版本发布，说明社区精力集中在修稳定性、收口债，而非推新功能；**安全类 P0 议题集中爆发**（ZeroClaw 同日新增 3 条 S0、NullClaw A2A 鉴权漏洞、LobsterAI SSRF+任意文件读取），反映**智能体基础设施的"权限/认证/输入边界"正在成为系统化风险点**。从修复密度看，OpenClaw、ZeroClaw、NanoClaw 进入"质量债务集中清偿"窗口，而 NanoBot、Moltis、CoPaw 则维持"高频小步快跑"节奏；TinyClaw、ZeptoClaw 已 24 小时无活动，需观察是否进入维护休眠。整体判断：生态**未现崩盘式衰退，但"更新/安装链路脆弱性"是跨项目的结构性问题**，值得生态层面共同治理。

---

## 二、各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 今日 Release | 健康度评估 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw**（参照） | 500（465 新/活） | 500（371 待合并） | ❌ 无 | 🔴 极高强度承压 | 2026.9.7 发布准备期 |
| **ZeroClaw** | 49 | 50（28% 关闭率） | ❌ 无 | 🟢 中高（安全聚焦） | v0.8.5→0.8.6/0.9.0 治理期 |
| **Hermes Agent** | 50（40 新/活） | 50（1 合入） | ❌ 无 | 🟡 高位但积压重 | v2026.9.24 后批量评审前夜 |
| **NanoClaw** | 1 新 | 37（8 合入） | ❌ 无 | 🟢 中高（核心团队集中修复） | "全修复日" |
| **NanoBot** | 4（3 开） | 18（7 合入） | ❌ 无 | 🟢 A-（健康） | 等待 v0.3.6 patch |
| **NullClaw** | 18 | 10 | ❌ 无 | 🟢 中（安全需升级） | 批量清理 + 渠道加固 |
| **CoPaw** | 10 | 7（5 合入） | ❌ 无 | 🟢 稳健迭代 | 关键 Context 修复日 |
| **LobsterAI** | 13（含 PR） | — | ❌ 无 | ⭐ 3.5/5 | 安全加固 + 文档滞后 |
| **Moltis** | 1 | 3（0 合入） | ❌ 无 | 🟢 良好 | 等待评审激活 |
| **IronClaw** | 1（提案） | 6（多为 Dependabot） | ❌ 无 | 🟡 低-中 | 功能稳定、依赖滚动 |
| **PicoClaw** | 3 | 2（0 合入） | ❌ 无 | 🟡 中低（响应放缓） | 渠道打磨期 |
| **TinyClaw** | 0 | 0 | ❌ 无 | ⚪ 静默 | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ 无 | ⚪ 静默 | 24h 无活动 |

**关键观察**：今日 PR 合入率最高的是 NanoClaw（≈22%）与 NanoBot（39%），而 Hermes Agent 与 IronClaw 几乎无合入（PR 雪崩迹象）；OpenClaw 与 ZeroClaw 的绝对工单量构成第一梯队，但前者承压更高。

---

## 三、OpenClaw 在生态中的定位

### 3.1 体量与节奏
OpenClaw 当日 500 条 Issue 更新 + 500 条 PR 更新，是 ZeroClaw、Hermes Agent（次高，约 50 条级别）的 **约 10 倍量级**；在所观察的项目中属于绝对头部。这种"超大流量"带来三个独有特征：

- **修复通道分层**：clawsweeper 自动化通道承担大量积压清理，是其他项目所不具备的运维模式。
- **多通道多平台覆盖**：iMessage / WhatsApp / MS Teams / Mattermost / Signal / LINE / Slack / Feishu / iOS / Android / Windows / macOS / Docker / Synology / npm 全局等组合，**生态面最广**。
- **发布阻塞数量最多**：今日 P0 阻断 10+ 条且并非全部有 fix PR，结构性风险为"Gateway 生命周期 × SQLite/状态锁"的复合纠缠。

### 3.2 与同类项目的技术路线差异

| 维度 | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | CoPaw |
|---|---|---|---|---|---|
| **核心架构** | Gateway/Server 多通道聚合 | Provider + WebUI + 多渠道 | Cron worker + PM runtime + Desktop | 鉴权/权限 + RPC 入口 + 网关 | Context 管理 + Console |
| **主战场** | 渠道/更新链路/移动端 | Provider 适配/WebUI/Agent | 安装/CVE/UI/合规 | 安全/发布治理/Discord | 长会话/Windows/可移植性 |
| **维护模式** | 集中修复 + 自动化 | 高频小步快跑 | 集中评审 + 缓慢合并 | 安全优先 + 批量收盘 | PR 驱动小版本 |
| **社区健康度** | 🔴 极高承压 | 🟢 A- | 🟡 积压 | 🟢 中高 | 🟢 稳健 |

### 3.3 社区规模对比
OpenClaw 的活跃度是第二梯队的 ~10 倍，且 PR 流入/流出比（约 3:1）显示其**"提交端活跃、维护端吃紧"**的结构——这与 NanoBot（PR/Issue ≈ 4.5:1，结构平衡）形成鲜明对比。Hermes Agent 也呈类似 OpenClaw 的失衡（49 待合并 / 1 合入），说明大型项目普遍面临"评审吞吐瓶颈"。

---

## 四、共同关注的技术方向

下表汇总多项目共同涌现的技术诉求（出现 ≥3 个项目）：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **更新/安装链路稳定性** | OpenClaw、ZeroClaw、Hermes Agent、NullClaw | Windows/macOS/Docker/POWERBUILD/Synology 各有路径失败；v0.8.x → v0.8.5/0.8.6 crates.io 反复失败；用户称"升级像拆炸弹" |
| **鉴权与权限一致性** | ZeroClaw、NullClaw、OpenClaw | A2A Bearer 跨调用者复用（NullClaw #974）；子代理越权访问 owner memory（ZeroClaw #11198）；管理撤销后 session 续期仍可用（#11197）；OpenClaw 配对码首设备鉴权空窗 |
| **Provider/模型生态扩展** | NanoBot、Moltis、NullClaw、OpenClaw | GPT-6 适配、Tsubasa 32K、Eden AI（欧盟）、MiniMax M3 thinking 等级补全；新模型接入时效成为常态诉求 |
| **渠道可靠性与可控性** | OpenClaw、PicoClaw、NanoClaw、NullClaw、Hermes Agent | DingTalk 重连 panic（PicoClaw #3382）；Slack manifest 50→25 截断（Hermes Agent）；Matrix JWKS 大小写（NullClaw）；OneBot 反应可关闭（PicoClaw #3395） |
| **Session/记忆 / 上下文治理** | NanoBot、CoPaw、OpenClaw、ZeroClaw | NanoBot JSONL→SQLite；CoPaw Scroll 折叠（#7853 已修）；OpenClaw catalog worker 内存泄漏；ZeroClaw memory principal 作用域 |
| **Tool Calling / 工具语义保真** | IronClaw、CoPaw、ZeroClaw、Hermes Agent | Turn-0 工具预选（IronClaw #8113）；ToolResultPruner 跳过 media（CoPaw）；map_tool_name_alias 重写（ZeroClaw） |
| **桌面/UI 一致性** | LobsterAI、Hermes Agent、CoPaw、OpenClaw | Deep link 来源校验（#977）、macOS Desktop 重复消息、Files 面板刷新、Windows 双实例守卫 |
| **Windows 平台鲁棒性** | OpenClaw、Hermes Agent、CoPaw、ZeroClaw | Windows update 三重失败（#157812）、Ctrl+C 退码 1073741510（#9028）、REPL 无 IUTF8（#10795）、Office COM 失控（#8002） |
| **文档与配置可发现性** | NullClaw、LobsterAI、Hermes Agent | config.json 字段说明、Qwen3.5-Plus 1M→200K 限制说明、remote.md auth_token 文档 |
| **可观测性与崩溃归因** | OpenClaw、ZeroClaw、Hermes Agent | "OOM 是谁的 OOM"、"parallel_tools 静默丢写"、崩溃后能否自我恢复 |

---

## 五、差异化定位分析

### 5.1 功能侧重矩阵

| 项目 | Agent 核心 | 渠道/UI | 安全/权限 | Provider 生态 | 安装/部署 | 长记忆/上下文 |
|---|---|---|---|---|---|---|
| OpenClaw | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| NanoBot | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Hermes Agent | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐ |
| ZeroClaw | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| NullClaw | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |
| CoPaw | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐ |
| IronClaw | ⭐⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐ |
| LobsterAI | ⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |
| Moltis | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ | ⭐⭐⭐ | ⭐⭐ | ⭐⭐ |

### 5.2 目标用户与场景

- **OpenClaw / PicoClaw / NullClaw**：偏 **C 端 IM 渠道聚合 + 跨平台使用**，适合个人/小团队的"一助手多入口"场景。
- **ZeroClaw / Hermes Agent**：偏 **B 端合规/审计**，强调权限、安全、部署可控；ZeroClaw 的 S0 Bug 节奏反映其在认真做企业级鉴权。
- **NanoBot / IronClaw / Moltis**：偏 **开发者/研究员**，聚焦 Provider 灵活接入、工具调用研究、模型能力识别。
- **CoPaw / LobsterAI**：偏 **桌面端深度用户**，强调长会话、文档编辑、文件/资产管理、本地化体验。
- **NanoClaw**：**内部核心团队驱动**的"系统稳健化"项目，对外开放程度较高但贡献集中度强。

### 5.3 技术架构关键差异
- **OpenClaw**：Gateway 多 Server 拓扑 + SQLite/状态锁 → **当下痛点**：状态机+内存+锁竞争复合纠缠。
- **NanoBot**：JSONL → SQLite 迁移 + Provider 适配层 → **当下痛点**：新模型覆盖时效、Agent 在受限环境下失控（sudo 循环）。
- **ZeroClaw**：Authority recheck + 网关/RPC 统一入站认证 → **当下痛点**：session 续期、principal scope、并发工具写入。
- **IronClaw**：Rust 工具调用框架 + 代码库知识图谱 → **当下痛点**：工具描述占满 prompt、依赖批 PR 雪崩。
- **CoPaw**：Scroll 折叠 + ToolResultPruner + Console 多标签终端 → **当下痛点**：Windows 治理、桌面端个人化能力。
- **LobsterAI**：Electron 桌面 + IPC 边界 + 渲染进程隔离 → **当下痛点**：SSRF / 任意文件读取 / Deep link 校验。

---

## 六、社区热度与成熟度分层

### 6.1 活跃度分层（基于工单量 + 合入率 + 评论密度）

| 层级 | 项目 | 特征 | 阶段判断 |
|

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-28

## 📌 今日速览

NanoBot 今日保持高度活跃开发节奏，过去 24 小时内共有 **18 个 PR** 与 **4 个 Issue** 流转（11 个 PR 待合并、7 个 PR 已合并/关闭，3 个 Issue 仍开放、1 个已关闭）。开发主线明显集中在 **OpenAI GPT-6 模型适配**（Copilot Responses 路由、Codex 模型发现补齐）、**Session 持久化重构**（从 JSONL 转向 SQLite 并将 I/O 移出事件循环）以及 **WebUI 体验打磨**（早期历史分页、iOS PWA、远程实例连接）三条线，整体健康度良好。**未发布新版本**，但已合并的多项 provider / session 修复具备集成进下一个 patch 版本的潜力。

---

## 🚀 版本发布

**今日无新版本发布。** 建议维护者在合适时机集成 #5933（P0 cron 修复）、#5938（P1 Responses 工具参数）、#5937（P1 流终止）以及 GPT-6 系列 provider 修复后发布 v0.3.6 patch。

---

## 📈 项目进展

今日共有 **7 个 PR** 已合并或关闭，推进情况如下：

| PR | 主题 | 影响 |
|----|------|------|
| [#5940](https://github.com/HKUDS/nanobot/pull/5940) | fix(providers): 暴露 Codex 中的 GPT-6 Sol & Luna | 通过将 catalog 客户端版本从 `0.153.4` 升级至 `0.158.0`，补齐被遗漏的 GPT-6 系列模型；配套测试已扩展 |
| [#5944](https://github.com/HKUDS/nanobot/pull/5944) | WebUI GitHub Star 邀请弹窗打磨 | 在 10 种语言中加入橘猫插图与温度化措辞，使用现有设计 token 并加入 hover 微动效 |
| [#5934](https://github.com/HKUDS/nanobot/pull/5934) | WebUI 早期历史分页解锁 + 重试反馈 | 修复"最后一页未填满时无法向上翻页"问题，鼠标滚轮/键盘输入分别提供对应反馈 |
| [#5936](https://github.com/HKUDS/nanobot/pull/5936) | fix(weixin): 静默轮询请求日志 | 通过将 httpx 调整为 WARNING 级别，消除微信渠道每 18 秒刷屏的 INFO 日志（#5900） |
| [#5937](https://github.com/HKUDS/nanobot/pull/5937) | fix(providers): 在终态事件处停止 Responses 流 | 在解析到 `response.completed` / `response.incomplete` 后立即停止 SSE 与 SDK 流；关闭 Azure 与 OpenAI 兼容 provider 的早停流 |
| [#5938](https://github.com/HKUDS/nanobot/pull/5938) | fix(providers): 保留 Responses 请求中可选工具参数 | 修复 strict 默认省略导致 MCP 过滤器被强制为必填的问题，避免 Linear `query` 与 `customView` 等冲突参数被合并调用 |
| [#5865](https://github.com/HKUDS/nanobot/pull/5865) | fix: 在较小 fallback 时保留主上下文窗口 | 256K 主预设不再被 200K fallback 覆盖；同步更新 fallback 文档说明 |

**整体判断**：今日推进较为扎实，尤其在 provider 层的 GPT-6 适配与 Responses 工具语义正确性方面形成闭环，WebUI 与 Discord/WeChat 渠道体验也获得改善。

---

## 💬 社区热点

今日讨论与互动主要集中在以下话题（评论 ≥1 的条目）：

- **[#5898 GPT-6 Copilot 适配](https://github.com/HKUDS/nanobot/issues/5898)**（评论 1）
  v0.3.5 报告通过 GitHub Copilot 调用 GPT-6 系列失败，对应已有修复 PR [#5935](https://github.com/HKUDS/nanobot/pull/5935) 提出将 GPT-6 路由至 Responses API。

- **[#5924 Agent sudo 循环卡死](https://github.com/HKUDS/nanobot/issues/5924)**（评论 1）
  用户反馈 sudo 授权在单 turn 内过期，导致 Agent 进入死循环；且在达到最大迭代次数后仍执着于未执行的命令。**目前尚无对应 PR**，属于"用户真实使用场景痛点"。

- **[#5939 Codex 模型目录缺失](https://github.com/HKUDS/nanobot/issues/5939)**（已关闭）
  同一用户随即在 [#5940](https://github.com/HKUDS/nanobot/pull/5940) 提交修复，展示出"发现即修"的活跃贡献者生态。

诉求分析：社区核心诉求集中在 **新模型（GPT-6）支持时效性**与 **Agent 在受限环境（sudo、长任务）下的健壮性**，前者 NanoBot 响应迅速，后者仍是空白。

---

## 🐛 Bug 与稳定性

按严重程度排序：

| 级别 | Issue / PR | 描述 | 修复状态 |
|------|------------|------|----------|
| **P0** | [#5933](https://github.com/HKUDS/nanobot/pull/5933) | cron 合并动作在 store 写入失败（如 ENOSPC）时丢失 | ✅ 已有 fix PR（待合并）：在清理 `action.jsonl` 之前先保存合并后的 store |
| **P1** | [#5898](https://github.com/HKUDS/nanobot/issues/5898) | GPT-6 通过 GitHub Copilot 调用失败 | 🔧 [PR #5935](https://github.com/HKUDS/nanobot/pull/5935) 路由至 Responses API |
| **P1** | [#5938](https://github.com/HKUDS/nanobot/pull/5938) | Responses 工具 strict 默认行为破坏 MCP 可选参数 | ✅ 已合并 |
| **P1** | [#5937](https://github.com/HKUDS/nanobot/pull/5937) | Responses 流未在终态事件停止，可能丢首字节或拖慢收尾 | ✅ 已合并 |
| **P2** | [#5924](https://github.com/HKUDS/nanobot/issues/5924) | Agent sudo 单 turn 过期导致循环卡死 + 完成后仍执着 | ❌ **尚无对应 PR**，建议优先跟进 |
| **P2** | [#5864](https://github.com/HKUDS/nanobot/pull/5864) | Discord 运行时重置未取消延迟反应任务 | 🔧 已有 fix PR（待合并） |
| **P2** | [#5257](https://github.com/HKUDS/nanobot/pull/5257) | Agent 持续目标在 turn 空闲时仍自动续推 | 🔧 已有 fix PR（已开 54 天，**长期积压**） |
| **回归** | [#5931](https://github.com/HKUDS/nanobot/pull/5931) | Telegram 命令换行/制表符参数被截断，邮箱被误识别 | 🔧 已有 fix PR，新增 12 条回归用例 |
| **回归** | [#5865](https://github.com/HKUDS/nanobot/pull/5865) | Fallback 上下文小于主预算时主窗口被覆盖 | ✅ 已合并 |

需要重点关注的是 [#5924](https://github.com/HKUDS/nanobot/issues/5924)（sudo 死循环），它是今日**唯一没有对应修复 PR 的高影响 Issue**，建议维护者尽快评估。

---

## 🛣️ 功能请求与路线图信号

今日可纳入路线图观察的新增/进行中功能：

- **[#5945 Web Fetch 增加 Unbrowse 后端](https://github.com/HKUDS/nanobot/pull/5945)**（feature, new-provider）
  在 `web_fetch` 工具中加入 [Unbrowse](https://unbrowse.ai) 作为可选后端，按 `Unbrowse → Jina Reader → 本地 readability` 的优先级链执行；未配置 API Key 时行为完全不变。属于能力叠加型扩展，合并门槛较低。

- **[#5941 连接远程 nanobot 实例](https://github.com/HKUDS/nanobot/pull/5941)**（NAN-157）
  实现 Linear 任务 NAN-157：从本地 WebUI 直接发现并连接服务器上已运行的 nanobot，免去额外启动器。属于**远程协作能力**的重要里程碑。

- **[#5943 Session 状态统一迁移至 SQLite](https://github.com/HKUDS/nanobot/pull/5943)**（refactor, P1）
  将 JSONL 替换为 SQLite 作为权威存储，所有运行时状态操作收敛到单一有界 worker，把存储 I/O 完全移出事件循环。这是一项**底层架构升级**，与 [#5580](https://github.com/HKUDS/nanobot/pull/5580) 共同构成 Session 持久化重塑。

- **[#5942 iOS PWA 顶栏色块](https://github.com/HKUDS/nanobot/pull/5942)**（draft）
  关联 #5772 / NAN-162。仍为 Draft，**等待 iPhone / iOS 27 standalone PWA 的前后对比验证**。

信号：下一版本有较大概率引入 **远程连接能力 + Session 存储升级**，建议关注其与稳定性修复的合并顺序。

---

## 📣 用户反馈摘要

从 Issue 评论与描述中提炼的真实用户痛点：

1. **新模型覆盖不及时** —— 用户 [@gqcao](https://github.com/HKUDS/nanobot) 反馈 v0.3.5 无法通过 Copilot 调用 GPT-6 系列，且错误信息对排查帮助有限（"Check the provider configuration or service status"）。希望提升 provider 接入新模型的时效与错误可观测性。

2. **Agent 在受限环境下失控** —— 用户 [@kkayam](https://github.com/HKUDS/nanobot) 反映 sudo 授权窗口过短，导致 Agent 反复请求授权直至耗尽迭代预算；之后即便继续对话，Agent 仍执着于之前未完成的命令，破坏可用性。**强烈期待改进 Agent 的"放弃/重置"语义**。

3. **沉默贡献者 / 修复即闭环** —— [@bingqilinweimaotai](https://github.com/HKUDS/nanobot) 自报自修，在 1 天内完成 #5940，体现项目具备健康的"用户即贡献者"文化。

4. **背景噪音型体验问题** —— [#5900](https://github.com/HKUDS/nanobot/pull/5936) 反映出微信渠道 INFO 级日志每 18s 刷屏，是典型的"不影响功能但严重干扰排障"的体验问题，PR #5936 已通过调整 httpx 级别解决。

---

## ⏳ 待处理积压

| Issue / PR | 创建日期 | 已开天数 | 备注 |
|------------|----------|----------|------|
| [#5257 bound sustained-goal continuation](https://github.com/HKUDS/nanobot/pull/5257) | 2026-08-05 | **54 天** | P2，Agent 行为类，需 review 与合并 |
| [#5580 session: persistence off event loop](https://github.com/HKUDS/nanobot/pull/5580) | 2026-08-28 | **31 天** | P1 Session I/O 重构，与 #5943 高度相关，建议联动 review |
| [#5780 stop sending context compaction notifications](https://github.com/HKUDS/nanobot/pull/5780) | 2026-09-15 | 13 天 | P2，标记为 conflict，需 rebase |
| [#5864 discord: cancel delayed reaction tasks](https://github.com/HKUDS/nanobot/pull/5864) | 2026-09-22 | 6 天 | P2，修复 #5806 |
| [#5924 Agent sudo loop](https://github.com/HKUDS/nanobot/issues/5924) | 2026-09-26 | 2 天 | ⚠️ **尚无 PR**，用户已评论，需要 maintainer 关注 |

**提醒**：维护者应优先处理 [#5257](https://github.com/HKUDS/nanobot/pull/5257)（接近 2 个月）与 [#5580](https://github.com/HKUDS/nanobot/pull/5580)（1 个月）这两条长期未合入的 PR，以及缺少修复方案的 [#5924](https://github.com/HKUDS/nanobot/issues/5924)。

---

> 📊 **日报数据判定结论** —— 高活跃度（PR/Issue 比 4.5:1）、多线程并行（provider / session / webui / channel / cron / agent）、社区自闭环能力强。健康度评分建议：**A-**（若 #5924 与长期积压 PR 能在本周落地，可升至 A）。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-28** | 数据来源：github.com/nousresearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 今日社区活跃度处于**高位运行**状态：过去 24 小时共触发 **50 条 Issue 更新**（40 条新开/活跃，10 条关闭）与 **50 条 PR 更新**（49 条待合并，1 条已合并/关闭），但**未发布新版本**。讨论焦点高度集中在三大主题：**安装/更新管道的稳定性问题**（cron worker、PM runtime、SSH 探测）、**Desktop 端 UI 渲染缺陷**（重复消息、SSR 列表不刷新），以及**长期积压的安全漏洞**（npm 包 12/18 处于高位）。整体而言项目维护节奏紧凑，但积压的 P0/P1 问题与新引入的边缘场景 bug 形成明显对照，需关注 backlog 的消化速度。

---

## 2. 版本发布

**今日无新版本发布**。

最近的稳定版本仍为 `v2026.9.24`（commit `f97608f`），见 [#125885](https://github.com/NousResearch/hermes-agent/issues/125885) 引用的版本号。建议维护者根据下方 49 条待合并 PR 评估下一版本节奏。

---

## 3. 项目进展

今日 **1 条 PR 被合并/关闭**，标志着小型闭环：

- ✅ [#92352](https://github.com/NousResearch/hermes-agent/issues/92352) — Desktop 切换网关后会话列表不刷新（**已关闭**，CLOSE 出现在 9/28 但无明确合并 PR 链接）
- ✅ [#104413](https://github.com/NousResearch/hermes-agent/issues/104413) — hermes update 静默安装 cua-driver 至 `~/.cua-driver/`（已关闭）
- ✅ [#122410](https://github.com/NousResearch/hermes-agent/issues/122410) — `hermes update` 不会 provision Browser Use CLI（已关闭）
- ✅ [#122424](https://github.com/NousResearch/hermes-agent/issues/122424) — `js-yaml@4.3.1` / `yaml<2.9` CVE 固定（已关闭）
- ✅ [#63784](https://github.com/NousResearch/hermes-agent/issues/63784) — macOS 26 node-pty spawn-helper 权限问题（已关闭）
- ✅ [#125463](https://github.com/NousResearch/hermes-agent/issues/125463) — `hermes pm lock --bump` 在 `linux-arm64-bionic` 上崩溃（已关闭）

**整体推进**：今日集中修复了一批围绕 **update/install/runtime provisioning** 链路的边缘案例（Arch 架构映射、Browser Use CLI 缺省、CVE 固定），说明维护团队正在**收敛安装体验**这条主线。但 49 条待合并 PR 堆积意味着下一版本合并窗口即将到来，需要做集中评审。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | **#10421** Turn-level live time context（feature 请求） | 22 | 9 | [链接](https://github.com/NousResearch/hermes-agent/issues/10421) |
| 2 | **#122222** Cron worker 无法导入依赖（自管安装） | 21 | 2 | [链接](https://github.com/NousResearch/hermes-agent/issues/122222) |
| 3 | **#107356** ⚠️ npm 高危漏洞累计 12/18 | 13 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/107356) |
| 4 | **#118029** Managed SSH 安装的 pinned rollout 控制面（feature） | 10 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/118029) |
| 5 | **#122490** bot-to-bot DM delivery 缺 ruamel | 9 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/122490) |
| 6 | **#92352** Desktop 切换网关后 sessions 不刷新（已关闭） | 9 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/92352) |
| 7 | **#123801** macOS Desktop 重复助手回复 | 7 | 0 | [链接](https://github.com/NousResearch/hermes-agent/issues/123801) |

**热点诉求分析**：

- **#10421**（22 评论，9 👍）是**今日社区最强烈的功能诉求**——"会话级时间"已不够用，开发者迫切需要"turn 级"实时时间上下文，以便 agent 在不调用工具的前提下可靠感知"今天""本周""当前时区"。该 Issue 自 4 月提出、9/28 仍有密集更新，属于**核心一致性议题**。
- **#107356** 反映社区对**npm 依赖陈旧**的强烈不满。截至 9/28，漏洞占比已达 **66.7%（12/18 为高危）**，零点赞意味着无人否认问题的严重性，仅是对修复速度的失望。
- **#118029**（10 评论）提出"managed SSH 安装的统一 rollout 控制面"，强调企业部署需要 **deployment review → admission → promotion → recovery** 的安全互锁，是面向 B 端合规场景的扩展。

---

## 5. Bug 与稳定性

按严重程度排序（结合优先级标签）：

### 🔴 P0 — 关键数据损坏

| Issue | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| **#124731** | Persist override 覆盖合并后的 user row，导致未回复消息从 live list 消失 | ❌ 暂无 PR | [链接](https://github.com/NousResearch/hermes-agent/issues/124731) |

### 🟠 P1 — 阻塞主要功能

| Issue | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| **#122222** (P1) | 自管安装上 cron external worker 因 PYTHONPATH 隔离无法导入依赖，所有定时任务失败 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/122222) |
| **#123801** (P1) | macOS Desktop 在 `d0288be5` 上显示重复助手回复 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/123801) |

### 🟡 P2 — 主要回归与功能缺陷

| Issue | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| **#122490** | bot-to-bot DM 投递 runner 继承 store python，缺 ruamel | ⚠️ 相关 [#125305](https://github.com/NousResearch/hermes-agent/issues/125305) 标为 duplicate，待归档 | [链接](https://github.com/NousResearch/hermes-agent/issues/122490) |
| **#124211** | 工具集变更无法触达 Bot Chat（apply-at-creation × never-fork = 永久偏移） | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/124211) |
| **#122112** | `pip.conf` 镜像主机上 `hermes update` 因 UV_INDEX_URL 与 uv.lock 不匹配而硬失败 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/122112) |
| **#123985** | Desktop 在 in-place 压缩后会话早期消息显示两次 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/123985) |
| **#124762** | Slack manifest 生成器夹紧到 50 个 slash 命令（真实上限 25） | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/124762) |
| **#106716** | Desktop SSH 到 Windows remote 时探测命令行超过 8191 字符限制 | ⚠️ [#125076](https://github.com/NousResearch/hermes-agent/pull/125076) 正在审查 | [链接](https://github.com/NousResearch/hermes-agent/issues/106716) |
| **#125920** | xAI grok-4.7 自动压缩在加密推理上 no-op，`structural_backoff` 阻断重试 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125920) |

### 🟢 P3 — 安全 / 边缘场景

| Issue | 描述 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| **#107356** (P3) | 累计 12 个 npm 高危漏洞（`@vitest/mocker` 等） | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/107356) |
| **#125922** | `hermes update` 在 POWERBUILD 上失败 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125922) |
| **#125885** | Telegram chunker 在 prose 后切分 Markdown link | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125885) |
| **#125138** | `hermes update` 内置 `git fetch` 报 `BUG: builtin/pack-objects.c:4991` | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125138) |
| **#125923** | `pre_gateway_dispatch` hook 在 busy-queue 路径上被跳过 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125923) |
| **#125914** | 升级 `hermes-agent` python 包会降级其他包到含漏洞版本 | ❌ | [链接](https://github.com/NousResearch/hermes-agent/issues/125914) |

**稳定性观察**：今日 50 条 Issue 中至少 **12 条直接涉及 `hermes update` / install / runtime provisioning 链路**（#122112/#122222/#122410/#122490/#125121/#125138/#125463/#125605/#125914/#125922/#125928/#106716 等），表明**更新管道是当前最脆弱的一块**。

---

## 6. 功能请求与路线图信号

按需求强度排列：

1. **Turn-level live time context**（[#10421](https://github.com/NousResearch/hermes-agent/issues/10421)，22 评论 / 9 👍）— agent 框架的基础设施提案。**进入下一版本的概率：极高**。
2. **Managed SSH 部署的 pinned rollout 控制面**（[#118029](https://github.com/NousResearch/hermes-agent/issues/118029)，10 评论）— 面向企业部署的合规特性。**进入企业版路线图的概率：中高**。
3. **Gateway 启动时 transcriber 堆栈的 Deadman's switch**（[#123655](https://github.com/NousResearch/hermes-agent/pull/123655) 已提交 PR，关联 Linear LAG-677）— 第二道防线。**合并概率：高（PR 已就绪）**。
4. **Rotate-session 控制 socket verb**（[#125605](https://github.com/NousResearch/hermes-agent/pull/125605)）— 让外部进程能够旋转单个会话，与 `session_reset` 时间策略并列。PR 已开放。
5. **Kanban CLI 路由对端 mission provenance**（[#125930](https://github.com/NousResearch/hermes-agent/pull/125930)）— 保留 `created_by` 来源信息。
6. **Kanban pacing governor 接入 worker spawn**（[#125349](https://github.com/NousResearch/hermes-agent/pull/125349)）— 连接 qwickapps/aos#457 governor。
7. **Linux Desktop 启动失败通知 + 自诊断 skill**（[#125813](https://github.com/NousResearch/hermes-agent/issues/125813)）— 改进错误可见性。
8. **config.yaml 重组**（[#125489](https://github.com/NousResearch/hermes-agent/issues/125489) + PR [#125514](https://github.com/NousResearch/hermes-agent/pull/125514)）— 用户体验型改进，PR 已就绪。

---

## 7. 用户反馈摘要

- **😤 安装/更新体验不堪重负**：用户反复抱怨 `hermes update` 在带 pip 镜像、`uv lock --locked`、Windows job、launchd、`libatomic` 缺失等不同环境下挂掉（[#122112](https://github.com/NousResearch/hermes-agent/issues/122112)、[#125922](https://github.com/NousResearch/hermes-agent/issues/125922)、[#125463](https://github.com/NousResearch/hermes-agent/issues/125463)、[#124929](https://github.com/NousResearch/hermes-agent/pull/124929)）。一位用户在 [@eabase](https://github.com/eabase) 多条 Issue 中表达了对"无人值守 VPS 更新"场景下缺乏透明度的失望。
- **😤 安全债务累积**：[#107356](https://github.com/NousResearch/hermes-agent/issues/107356) 措辞强烈（"Keeps Stacking up"），12/18 高危的比例对关心合规的企业用户尤其刺眼，且今日有新 CVE（[#125914](https://github.com/NousResearch/hermes-agent/issues/125914)）补充进来。
- **😟 Desktop UI 缺陷挫伤日常使用**：macOS 重复消息（[#123801](https://github.com/NousResearch/hermes-agent/issues/123801)）、压缩后消息重影（[#123985](https://github.com/NousResearch/hermes-agent/issues/123985)）、切网关不刷新会话（[#92352](https://github.com/NousResearch/hermes-agent/issues/92352)）三条 Issue 集中暴露 Electron 渲染层在前端状态与后端会话状态同步上的一致性问题。
- **🙂 社区贡献活跃**：今日 49 条待合并 PR 中包含 WhatsApp breakaway 兼容（[#125117](https://github.com/NousResearch/hermes-agent/pull/125117)）、OpenCode relay 容错（[#125944](https://github.com/NousResearch/hermes-agent/pull/125944)）、Discord config 键修复（[#123651](https://github.com/NousResearch/hermes-agent/pull/123651)）等，说明外部开发者对项目的代码所有权正在深化。
- **🧩 工具集与 profile 鸿沟**：[#124211](https://github.com/NousResearch/hermes-agent/issues/124211) 提出"apply-at-creation × never-fork = 永久偏移"是 Bot Mode 的架构性陷阱，反映用户对**canonical 会话生命周期模型**的深度思考，是高质量反馈。

---

## 8. 待处理积压

以下 Issue/PR 长期未被响应，建议维护者本周内关注：

| 编号 | 主题 | 积压时长 | 优先级 | 链接 |
|---|---|---|---|---|
| **#107356** | npm 安全漏洞堆积（12/18 高危） | 18 天（自 9/10） | P3 安全 | [链接](https://github.com/NousResearch/hermes-agent/issues/107356) |
| **#10421** | Turn-level live time context | **166 天**（自 4/15） | P2 核心功能 | [链接](https://github.com/NousResearch/hermes-agent/issues/10421) |
| **#63784** | macOS 26 node-pty 双重 bug | （已关闭，但 macOS 26 兼容性值得后续回归） | — | [链接](https://github.com/NousResearch/hermes-agent/issues/63784) |
| **#106716** | Windows 8191 字符探测失败 | 19 天（自 9/9） | P2 | [链接](https://github.com/NousResearch/hermes-agent/issues/106716) |
| **#124898** | Linux GPU 子进程 fallback | 1 天

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**报告日期：2026-09-28**
**数据周期：过去 24 小时（基于 GitHub 公开数据）**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**低位**。社区端共触发 3 条 Issue 更新与 2 条 PR 更新，**无新版本发布，无 PR 合并或关闭**。值得关注的是 Issue #3395 与 PR #3396 形成"需求+实现"的标准配对，作者 ycsqwan 在同一天提出功能请求并提交对应 PR，社区自驱动力较强；但与此同时，v0.3.1 中重现的 DingTalk 崩溃问题（#3382）至今仍开放，且被标记为 [stale]，存在被遗漏的风险。**整体健康度评估：中等偏低**，维护响应节奏放缓，但渠道（channels）相关功能迭代方向清晰。

---

## 2. 版本发布

**今日无新版本发布。** 最近可识别的版本基线仍为 Issue #3382 中提及的 **v0.3.1（commit 2cf030d2）**，距今已迭代多轮 Issue/PR 而无对应 tag，需关注维护者的发版节奏。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，但有 2 条 PR 仍在开放等待评审：

- **PR #3353 `fix(channels): bound tool feedback animations`** —— 边界化处理工具反馈动画，限制动画时长不超过 5 分钟（对齐 Telegram typing feedback 既有上限），并在首次编辑错误时立即停止。属于**稳定性 / 资源回收**类修复，但当前被标记为 [stale]，自 2026-08-31 提出至今已近一个月未获维护者回应。
  👉 https://github.com/sipeed/picoclaw/pull/3353

- **PR #3396 `feat(channels/onebot): add opt-in toggle for acknowledgement reactions`** —— 与 Issue #3395 同步提出，引入 `reaction_enabled` 配置项（默认 `false`），让用户可关闭 OneBot 通道的自动 emoji 确认反应。这是一份**质量较高、自带问题描述**的 PR，符合"先 issue 后 PR"的良好协作模式，等待 maintainer review。
  👉 https://github.com/sipeed/picoclaw/pull/3396

**项目整体前进幅度：微小**。未有代码合入主线，但渠道层能力（OneBot 反应可控、动画生命周期可控）正在被社区主动打磨。

---

## 4. 社区热点

按评论数与互动度排序，过去 24 小时最具热度的条目是：

| 排名 | 条目 | 类型 | 评论数 | 链接 |
|------|------|------|--------|------|
| 1 | #3287 IRC 长消息支持 | Issue（已关闭） | 14 | https://github.com/sipeed/picoclaw/issues/3287 |
| 2 | #3382 DingTalk 重连 panic | Issue（开放） | 1 | https://github.com/sipeed/picoclaw/issues/3382 |
| 3 | #3395 OneBot 反应可配置 | Issue（开放） | 0 | https://github.com/sipeed/picoclaw/issues/3395 |

**分析**：
- **#3287** 拥有 14 条评论，是 24 小时内讨论最密集的条目，但已被以"陈旧（stale）"为由**关闭**。社区诉求集中于 IRCv3 协议下的 512 字节切片应被识别为同一消息，但其互动未能在 stale 关闭前形成可落地的方案。
- **#3395 → #3396** 虽评论数低，但呈现了"用户提需求 + 同一作者当日提交实现"的强信号，是今日最具行动力的讨论单元。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高危 · 崩溃 / 回归
- **#3382 v0.3.1: DingTalk gateway 流式 SDK 重连时 panic**
  - **现象**：`send on closed channel`，定位 `client.go:161`
  - **影响范围**：DingTalk（Stream Mode）、飞书用户，复现路径稳定
  - **回归来源**：与历史 Issue #973 报告相同 panic 仍未修复
  - **是否已有 fix PR**：❌ 无
  - ⚠️ 该 Issue 同时被标记为 [stale]，维护响应缺失，建议 maintainer 优先介入
  - 👉 https://github.com/sipeed/picoclaw/issues/3382

### 🟡 中危 · 资源/状态泄漏
- **PR #3353 工具反馈动画无界循环**
  - **现象**：channel message 编辑动画在生命周期未清理时可被无限编辑
  - **修复方案**：限制动画 ≤5 分钟 + 首次编辑错误立即停止
  - **是否已有 fix PR**：✅ 有（#3353），但等待合并
  - 👉 https://github.com/sipeed/picoclaw/pull/3353

---

## 6. 功能请求与路线图信号

### 🆕 今日新功能请求
- **#3395 让 OneBot 自动确认反应可配置（`reaction_enabled`）**
  - 作者 ycsqwan 反映：在 NapCat (QQ) 接入下，**每条**群消息都会触发 `set_msg_emoji_like`（emoji 289），硬编码于 `OneBotChannel.ReactToMessage`，无法关闭。
  - 👉 https://github.com/sipeed/picoclaw/issues/3395

### 📌 实现信号
- **PR #3396** 已同步提交该特性的 opt-in 实现，默认 `reaction_enabled=false`，契合"少打扰默认 + 显式开启"的产品哲学。

**路线图判断**：基于已有 PR 的完成度与社区协同度，**#3396 大概率被纳入下一版本（如 v0.3.2 或 v0.4.0）**，属于低风险、可快速合并的小型增强。

---

## 7. 用户反馈摘要

从活跃 Issues 的评论与摘要中提炼：

- **IRC 用户**（#3287）：对长消息被切片误判为多条消息而被打断体验强烈不满；该讨论虽然评论密集（14 条），但最终被自动关闭，未获得解决方案，用户**挫败感较高**。
- **DingTalk / 飞书用户**（#3382）：在 v0.3.1 上**稳定复现**崩溃，#973 已报告同类问题但长期未根治，存在信任流失风险**。
- **QQ / OneBot 用户**（#3395）：对"每条消息自动 +1 emoji"反馈感到**被打扰**，期望"安静运行"的默认行为；社区对该诉求呈赞同态度。
- **总体满意度：**近期社区声音以"功能需要更细粒度开关"、"历史崩溃未修"为主，**满意度中等偏下**，主要痛点集中在 channels 层而非核心 agent 能力。

---

## 8. 待处理积压（维护者提醒）

以下条目长期未获响应，**建议 maintainer 优先关注**：

| 条目 | 类型 | 创建日期 | 状态 | 链接 |
|------|------|----------|------|------|
| #3382 DingTalk 重连 panic | Bug | 2026-09-20 | [stale] | https://github.com/sipeed/picoclaw/issues/3382 |
| #3353 工具反馈动画边界化 | Fix PR | 2026-08-31 | [stale] 未合并 | https://github.com/sipeed/picoclaw/pull/3353 |
| #3287 IRC 长消息 | Feature | 2026-07-22 | 已 stale 关闭 | https://github.com/sipeed/picoclaw/issues/3287 |

**特别提醒**：
- #3382 涉及 v0.3.1 上**稳定复现的崩溃**，且与历史 #973 同源，存在被多个生产环境用户踩到的可能性。
- #3353 是 24 小时内活跃的 PR 之一，且已经历一次更新却仍未被 maintainer 评审，建议在下一次 triage 中明确是否纳入。

---

### 📊 报告小结

| 维度 | 评估 |
|------|------|
| 代码合入节奏 | ⚠️ 停滞（0 合入） |
| Issue 响应 | ⚠️ 偏慢（高优崩溃未响应） |
| 社区自驱力 | ✅ 良好（#3395→#3396 同步推进） |
| 文档/版本节奏 | ⚠️ 无新版本，需关注发版计划 |

**核心建议**：维护者下个迭代窗口宜优先处理 **#3382（DingTalk 崩溃）+ #3353（动画边界）+ #3396（OneBot 反应开关）** 三项，形成一个聚焦"channels 稳定性与可控性"的小型补丁版本发布。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-28

---

## 1. 今日速览

NanoClaw 今日呈现出**高强度"集中修复"特征**：过去 24 小时共产生 **37 次 PR 更新**（29 条待合并、8 条已合并/关闭），仅 1 条新开 Issue，无新版本发布。提交呈现明显的**核心团队推进模式**——`glifocat` 一人贡献了多数 PR（≥16 条），辅以 `barnuri`、`IamAdamJowett` 等其他贡献者；方向高度聚焦于 **Docker 容器挂载语义、setup/安装链路、Iron Proxy 韧性、OpenCode/Claude Provider 行为一致性**。整体属于典型的"修稳定性、收口子"周期，尚未触及下一个版本的功能主题。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时有 **8 条 PR 已合并/关闭**（具体编号未在 top-20 评论排行中显示），**29 条仍待合并**。从仍在 Open 状态、且与今日新 Issue 直接相关的 PR 看，项目在以下方向实质推进：

| 主题 | 代表 PR | 实质推进 |
|---|---|---|
| Linux rootful Docker 删除任务的残留挂载点 | [PR #3952](https://github.com/nanocoai/nanoclaw/pull/3952) | 与 Issue [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) 配对修复，根治 `buildMounts` 引发 `SqliteError: unable to open database file` 的孤儿 active session |
| `/update-nanoclaw` 流程冗余缺陷 | [PR #3913](https://github.com/nanocoai/nanoclaw/pull/3913)、[PR #3910](https://github.com/nanocoai/nanoclaw/pull/3910)、[PR #3948](https://github.com/nanocoai/nanoclaw/pull/3948) | 修复 update 控制器无法 load、gateway 探针误报负、cutover 阶段杀死 Iron proxy 三处串联故障 |
| 代理对话副作用 | [PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918)、[PR #3908](https://github.com/nanocoai/nanoclaw/pull/3908) | 终结"result-door 误发"与"失败通知无限循环"两类对话式回归 |
| Provider 一致性 | [PR #3919](https://github.com/nanocoai/nanoclaw/pull/3919)、[PR #3930](https://github.com/nanocoai/nanoclaw/pull/3930) | OpenCode 在 Iron Proxy 下拒绝不可达本地端点、统一 config/runtime 派生来源 |
| 清理与资源回收 | [PR #3947](https://github.com/nanocoai/nanoclaw/pull/3947)、[PR #3878](https://github.com/nanocoai/nanoclaw/pull/3878) | 删除会话/agent group 时停止对应容器；setup 的 ping agent 容器停止后才删目录 |
| 错误可观测性 | [PR #3946](https://github.com/nanocoai/nanoclaw/pull/3946)、[PR #3905](https://github.com/nanocoai/nanoclaw/pull/3905) | skill-apply 透出真实失败原因；setup 首条测试消息日志可读 |
| 安装/恢复韧性 | [PR #3949](https://github.com/nanocoai/nanoclaw/pull/3949)、[PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883)、[PR #3920](https://github.com/nanocoai/nanoclaw/pull/3920) | Mattermost 回调密钥回退路径、Iron Control 数据库 reinstall 清理、setup 失败辅助 agent 权限收敛 |

净效果：**容器生命周期、update 流程与 OpenCode 路径三条主线被显著收紧；用户最容易撞到的 install/setup 痛点正在被逐一削减。**

---

## 4. 社区热点

> 注：GitHub 数据中今日 PR 评论数字段为 `undefined`（未返回或为 0），无法精确量化社区讨论热度。以下以**"已生成的修复闭环"与"跨模块影响面"**作为热点代理指标。

* **Issue ↔ PR 同日闭环（热度最高的自然信号）：[Issue #3951](https://github.com/nanocoai/nanoclaw/issues/3951) ↔ [PR #3952](https://github.com/nanocoai/nanoclaw/pull/3952)**
  Linux rootful Docker 用户触发的"删除任务→每分钟刷 `SqliteError` 日志"症状，作者 `IamAdamJowett` 当日给出明确修复（pre-create 挂载点为 host 用户）。这是今日**唯一在外部用户报告后当日修复**的闭环。
* **跨 PR 影响面最广的根因：setup / update 链路**
  [PR #3913](https://github.com/nanocoai/nanoclaw/pull/3913)、[PR #3910](https://github.com/nanocoai/nanoclaw/pull/3910)、[PR #3948](https://github.com/nanocoai/nanoclaw/pull/3948)、[PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887) 一组均指向同一个上层信号：**`/update-nanoclaw` 自 gateway 抽取之后不再可靠**。这是一条隐性的"系统级回归"，社区层面虽尚无讨论帖，但内部已在做系统化收口。
* **Provider 行为差异化讨论苗头**
  [PR #3931](https://github.com/nanocoai/nanoclaw/pull/3931)（Claude 加 `minimalContext`）、[PR #3932](https://github.com/nanocoai/nanoclaw/pull/3932)（`/add-lean-tasks`）是一组**新方向 PR**，暗示社区正在讨论"小模型/本地模型跑 scheduled task"的差异化场景，详见 §6。

---

## 5. Bug 与稳定性

按严重度排序（仅列出有可定位修复或在维护者视野内的项）：

| 严重度 | 编号 | 标题 | 是否有 fix PR |
|---|---|---|---|
| 🟥 **High**（持续噪声+数据一致性）| [Issue #3951](https://github.com/nanocoai/nanoclaw/issues/3951) | `ncl tasks delete` 在 Linux rootful Docker 留下孤儿 active session，使 host 每分钟打 `SqliteError` | ✅ [PR #3952](https://github.com/nanocoai/nanoclaw/pull/3952)（当日提出，当日修复） |
| 🟧 **High**（核心命令不可用）| [PR #3913](https://github.com/nanocoai/nanoclaw/pull/3913) | `/update-nanoclaw` 自 gateway 抽取后 update controller 无法 load | ✅ PR 已存，但尚未合并 |
| 🟧 **High**（可靠性）| [PR #3948](https://github.com/nanocoai/nanoclaw/pull/3948) | `/update-nanoclaw` cutover 阶段把 Iron proxy 也 drain 掉，更新后所有 spawn 失败 | ✅ |
| 🟧 **High**（对话副作用）| [PR #3908](https://github.com/nanocoai/nanoclaw/pull/3908) | agent-to-agent 失败通知引发无限互 ping | ✅ |
| 🟧 **High**（对话副作用）| [PR #3918](https://github.com/nanocoai/nanoclaw/pull/3918) | result-door 把 agent 已用 `send_message` 发出的回复再寄一次 | ✅ |
| 🟨 **Medium**（资源泄露）| [PR #3947](https://github.com/nanocoai/nanoclaw/pull/3947) | host reconcile 不扫"会话/agent group 已被删除"对应的容器 | ✅ |
| 🟨 **Medium**（资源泄露）| [PR #3878](https://github.com/nanocoai/nanoclaw/pull/3878) | setup 清理 ping agent 时把容器留下 | ✅（已 5 天未合） |
| 🟨 **Medium**（Provider 行为）| [PR #3919](https://github.com/nanocoai/nanoclaw/pull/3919) | OpenCode 在 Iron Proxy 下接受了一个永远路由不到的本地模型 URL | ✅ |
| 🟨 **Medium**（误判）| [PR #3910](https://github.com/nanocoai/nanoclaw/pull/3910) | `/update-nanoclaw` 因 pnpm workspace warning 误报"No installed gateway could be detected" | ✅ |
| 🟨 **Medium**（密钥可靠性）| [PR #3949](https://github.com/nanocoai/nanoclaw/pull/3949) | Mattermost 运行时校验在 `.env` 缺 `MATTERMOST_CALLBACK_SECRET` 时直接退出 | ✅ |
| 🟨 **Medium**（TLS 信任模型）| [PR #3950](https://github.com/nanocoai/nanoclaw/pull/3950) | Iron Proxy 只信任公共 CA，导致私有名称（如 `*.home.arpa`）本地模型服务无法联通 | ✅（feature 性质） |
| 🟨 **Medium**（安装后状态污染）| [PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883) | reinstall NanoClaw 留下孤儿 Iron Control 数据库 | ✅ |
| 🟨 **Medium**（错误可观测性）| [PR #3946](https://github.com/nanocoai/nanoclaw/pull/3946) | skill-apply 失败只回退成通用 "the step did not complete" 文案 | ✅ |
| 🟨 **Medium**（可观测性）| [PR #3905](https://github.com/nanocoai/nanoclaw/pull/3905) | setup 首条测试消息、OpenCode 鉴权耗时未落日志 | ✅ |
| 🟦 **Low**（测试稳定性）| [PR #3945](https://github.com/nanocoai/nanoclaw/pull/3945) | delivery-poll drain 测试在 CI 争用盘上超时（9 vs 20 sessions） | ✅ |
| 🟦 **Low**（测试稳定性）| [PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887) | `restart-readiness` 测试把探针截到 deadline、丢真实原因 | ✅ |
| 🟦 **Low**（权限硬化）| [PR #3920](https://github.com/nanocoai/nanoclaw/pull/3920) | setup 失败辅助 agent 用的是 CLI 默认（含 bash/edit），上线后风险大 | ✅ |

**总结**：今日为一个"全修复日"——报告的所有 bug 都已配对 PR，无明显未覆盖盲区；但由于 29 条仍待合并，**用户实际能感受到修复仍要等下一波合并窗口**。

---

## 6.

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-09-28**

---

## 1. 今日速览

NullClaw 项目在 2026-09-28 呈现出**批量清理与安全加固**的鲜明特征。24 小时内共有 18 条 Issues 更新、10 条 PR 更新，无新版本发布。重点信号包括：(1) 存在一个**仍处于 OPEN 状态的高危安全问题**——`/a2a` 路由的共享 Bearer Token 跨调用者任务/会话复用缺陷（#974），且修复 PR #1012 仍在待合并；(2) 一批长期待解决的 Issue 被批量关闭（共 16 条），覆盖 Docker Hub 镜像、飞书 WS、Homebrew 服务路径、DingTalk 接收消息等历史积压问题；(3) 审批流（approval_request/approval_response）闭环通过 PR #969 与 #1009 实现。整体评估：**社区治理活跃，安全响应中优先级待提升**。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的 8 条 PR 显著推动了项目在 **渠道可靠性、Provider 生态、跨进程命令安全审批** 三个维度的进展：

| PR | 类别 | 关键进展 |
|---|---|---|
| [#1009](https://github.com/nullclaw/nullclaw/pull/1009) | 🛡️ 安全/执行 | **关闭监督模式下中/高风险 shell 命令直接失败的问题**（闭环 #900），现在会暂停等待 `/approve` 批准 |
| [#969](https://github.com/nullclaw/nullclaw/pull/969) | 🛡️ 安全/Agent | 实现结构化的 `approval_request` / `approval_response` 双轮审批 SSE 流程，覆盖 shell tool 等需要审批的工具调用 |
| [#968](https://github.com/nullclaw/nullclaw/pull/968) | 🐛 渠道修复 | Matrix 渠道的 `next_batch` 游标在重启后会丢失（导致增量同步回退为初始同步），现已持久化；附带测试环境隔离改进 |
| [#958](https://github.com/nullclaw/nullclaw/pull/958) | 🐛 渠道修复 | 修复 MS Teams 渠道因 JWT `serviceurl` claim 大小写不一致导致 403 拒绝的问题，并提高 JWKS 拉取上限 |
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | ✨ Provider | 新增 Eden AI 作为 OpenAI 兼容网关（沿用 NEAR AI/Atlas Cloud 的 provider 模式，托管在欧盟）|
| [#527](https://github.com/nullclaw/nullclaw/pull/527) | ✨ 智能层 | 引入「自适应智能管线」：回合评分器 + 技能路由 + 全栈学习循环 + 邮件/WhatsApp Web 渠道（关联 #183）|
| [#667](https://github.com/nullclaw/nullclaw/pull/667) | ✨ 渠道升级 | Email 渠道从 send-only 升级为支持 IMAP IDLE 推送 + curl 回退轮询的双向通道，附带网络层韧性处理 |
| [#956](https://github.com/nullclaw/nullclaw/pull/956) | 🔧 依赖 | Docker 镜像 Alpine 基底由 3.23 升级到 3.24（Dependabot 自动 PR）|

**整体评估：项目在「监督自治 + 渠道可靠性 + Provider 多样性」三个维度同时向前迈进了显著的一步**，审批流的补齐尤其关键，弥补了规范与实现之间的差距。

---

## 4. 社区热点

按评论数排序的活跃议题：

| 排名 | 编号 | 评论数 | 状态 | 主题与诉求分析 |
|---|---|---|---|---|
| 1 | [#183](https://github.com/nullclaw/nullclaw/issues/183) | 5 | CLOSED | **WhatsApp Web（Baileys）支持呼声最高**——用户希望摆脱 Meta Business Cloud API 的繁琐配置（Business 账号、Access Token、Phone Number ID、Webhook），改用扫码即用的 WhatsApp Web |
| 2 | [#861](https://github.com/nullclaw/nullclaw/issues/861) | 4 | CLOSED | **无头 VPS 上启用 Web UI 的教程缺失**——README 中的「浏览器隧道」描述让用户难理解，反映出 onboarding 文档对新人不友好 |
| 3 | [#764](https://github.com/nullclaw/nullclaw/issues/764) | 4 | **OPEN** | **Agent Skills 官方客户端列表收录请求**——目前仍 OPEN，维护者尚未明确表态，是品牌可见度的低成本提升机会 |
| 4 | [#449](https://github.com/nullclaw/nullclaw/issues/449) | 4 | CLOSED | Docker Hub 官方镜像 + docker-compose 示例；降低部署摩擦的典型诉求 |
| 5 | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 4 | CLOSED | 飞书 WS 断连——渠道稳定性是中文社区的高频痛点 |

**情感诉求侧写**：用户对「配置门槛过高」「文档不友好」「渠道可控性弱」的抱怨集中爆发，呼应了 #613 的诉求——**完善 `config.json` 每个字段的描述与默认值说明**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 标题 | 状态 | 修复 PR |
|---|---|---|---|---|
| 🔴 高 | [#974](https://github.com/nullclaw/nullclaw/issues/974) | **A2A 路由共享 Bearer 允许跨调用者任务与上下文复用** | **OPEN** | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) **OPEN（待合并）** |
| 🟠 中-高 | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 WS 断连 | CLOSED | 未指明单一 fix PR |
| 🟠 中 | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew 升级后服务静默停止（plist 硬编码版本路径）| CLOSED | 未指明单一 fix PR |
| 🟠 中 | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent` — 模型无响应 | CLOSED | 未指明单一 fix PR |
| 🟡 中 | [#408](https://github.com/nullclaw/nullclaw/issues/408) | Tool call 解析破坏合法 JSON（提取到冒号作为工具名）| CLOSED | 未指明单一 fix PR |
| 🟡 中 | [#427](https://github.com/nullclaw/nullclaw/issues/427) | 无法使用自定义 skill（`skill list` 能看到但 agent 无法调用）| CLOSED | 未指明单一 fix PR |
| 🟡 中 | [#376](https://github.com/nullclaw/nullclaw/issues/376) | DingTalk 仅发不收 | CLOSED | 未指明单一 fix PR |
| 🟢 低 | [#900](https://github.com/nullclaw/nullclaw/issues/900) | `approval_request` 规范定义但从未发出，supervised 模式直接失败 | CLOSED | [#1009](https://github.com/nullclaw/nullclaw/pull/1009) + [#969](https://github.com/nullclaw/nullclaw/pull/969) ✅ |
| 🟢 低 | [#957](https://github.com/nullclaw/nullclaw/issues/957) | 配置读取器频繁触发 rate limit | CLOSED | 文档类修复 |

> ⚠️ **维护者重点关注**：🔴 [Issue #974](https://github.com/nullclaw/nullclaw/issues/974)——这是典型的鉴权后跨租户数据泄露（CWE-285/CWE-639），修复 PR #1012 已在 2026-09-27 提交，仍待 review 与合并。

---

## 6. 功能请求与路线图信号

| 需求 | 编号 | 呼声 | 是否已有 PR 推进 | 纳入下一版本的可能性 |
|---|---|---|---|---|
| WhatsApp Web（Baileys 扫码）| [#183](https://github.com/nullclaw/nullclaw/issues/183) | ⭐2 / 💬5 | ✅ [PR #527](https://github.com/nullclaw/pull/527) 已合并自适应管线 + WhatsApp Web 部分 | **高**（已进入主干）|
| Docker Hub 官方镜像 + compose | [#449](https://github.com/nullclaw/nullclaw/issues/449) | ⭐1 / 💬4 | 无显式 PR | **高**（门槛性需求，维护者容易跟进）|
| 完善 `config.json` 字段描述 | [#613](https://github.com/nullclaw/nullclaw/issues/613) | ⭐4 / 💬2 | 无 | **高**（社区情绪正面，4 个 👍）|
| 改进错误信息（`error.ApiError` 解码）| [#619](https://github.com/nullclaw/nullclaw/issues/619) | ⭐1 / 💬4 | 无 | **中** |
| 自适应学习管线 | [#527](https://github.com/nullclaw/nullclaw/pull/527) | — | ✅ 已合并 | **已纳入** |
| JIRA 访问 tool | [#914](https://github.com/nullclaw/nullclaw/issues/914) | ⭐0 / 💬2 | 无 | **中**（企业集成方向）|
| `web_search` 工具增加 ddgs 支持 | [#623](https://github.com/nullclaw/nullclaw/issues/623) | ⭐0 / 💬3 | 无 | **低-中** |
| Agent Skills 官方客户端列表收录 | [#764](https://github.com/nullclaw/nullclaw/issues/764) | ⭐0 / 💬4 | 无 | **低门槛，待维护者响应**（仍 OPEN）|

**路线图预测**：下一版本的可见变更大概率集中在「WhatsApp Web」「Alpine 3.24 / 依赖刷新」「审批流 UX」「Eden AI/Tsubasa（#1013 OPEN）等更多 Provider」「配置文档完善」。

---

## 7. 用户反馈摘要

提炼自今日关闭/活跃 Issue 的真实声音：

- **「Meta Business Cloud API 太重了」**——多个用户（[#183](https://github.com/nullclaw/nullclaw/issues/183)）表达希望直接扫码使用 WhatsApp，而非维护 Business 账号、Token、Webhook。
- **「Homebrew 升级即坏」**——[#354](https://github.com/nullclaw/nullclaw/issues/354) 反映出 `brew upgrade` 沉默破坏服务的体验令人沮丧；plist 硬编码版本路径是常见安装器陷阱。
- **「文档 70% 看了不懂」**——[#861](https://github.com/nullclaw/nullclaw/issues/861) 用户对「Web UI + 浏览器隧道」描述直言难懂，呼应 [#613](https://github.com/nullclaw/nullclaw/issues/613) 的 `config.json` 字段说明诉求。
- **「错误信息没法排查」**——`error.NoResponseContent`、`error.ApiError`、`Channel error` 几乎都是「字面+堆栈」式的低信息量报错，用户在 [#619](https://github.com/nullclaw/nullclaw/issues/619)、[#665](https://github.com/nullclaw/nullclaw/issues/665) 中反复请求更友好的诊断。
- **「Skill 看得见用不了」**——[#427](https://github.com/nullclaw/nullclaw/issues/427) 中用户 skill `list` 看得到，但 agent 工具列表里没有；这是 skill 注册链路与 agent 工具发现之间的隐式契约问题。
- **「DingTalk 单向通道」**——[#376](https://github.com/nullclaw/nullclaw/issues/376) 显示国产办公协同渠道的「能发不能收」是中文用户群普遍痛点。
- **「基准读数过时」**——[#473](https://github.com/nullclaw/nullclaw/issues/473) 用户主动指出 README 中「1MB 二进制 / 1MB 内存」的对比已不准确，建议同步到当前实测数据（值得维护者跟进）。
- **「安全：我的 Bearer 也能读别人的任务」**——[#974](https://github.com/nullclaw/nullclaw/issues/974) 的复现者详细演示了 Bob 用合法 Token 读取/列出 Alice 任务并复用其 context 的过程，反映出企业 / 多租户场景下鉴权粒度的真实担忧。

---

## 8. 待处理积压

| 优先级 | 编号 | 主题 | 创建日 | 状态 | 维护者关注建议 |
|---|---|---|---|---|---|
| 🔴 P0 | [#974](https://github.com/nullclaw/nullclaw/issues/974) | A2A bearer 共享导致跨调用者任务/上下文复用（安全隐患）| 2026-07-10 | OPEN | **修复 PR #1012 已就位，请尽快 review/合并**，并考虑公告受影响版本范围 |
| 🟠 P1 | [#764](https://github.com/nullclaw/nullclaw/issues/764) | 加入 Agent Skills 官方客户端列表 | 2026-04-03 | OPEN | 单条 README/PR 即可达成，等待维护者表态 |
| 🟠 P1 | [#1013](https://github.com/nullclaw/nullclaw/pull/1013) | 新增 Tsubasa chat-completions Provider | 2026-09-28 | OPEN | 与 #990（Eden AI，已合并）同模板，review 阻力应较小 |
| 🟠 P1 | [#1012](https://github.com/nullclaw/nullclaw/pull/1012) | A2A 任务/上下文按 bearer principal 隔离 | 2026-09-27 | OPEN | 与 #974 绑定，建议优先合并 |
| 🟡 P2 | 较老 Issues（#183、#449、#613、#914 等批 CLOSED）| — | — | 已在今日关闭 | 观察后续是否衍生新 Issue |

> 📌 **总结建议**：维护者最该在下个工作日聚焦两件事——**(1) 合并 #1012 关闭 #974 的安全漏洞**；(2) 同步刷新 README 基准数据（#473），避免后续新 Issue 重复提问。

---

*报告生成时间：2026-09-28 ｜ 数据来源：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw) GitHub 公开活动*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：2026-09-28**
**项目：nearai/ironclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 项目今日整体处于**低-中活跃度**的维护性更新状态。过去 24 小时内无新版本发布，社区侧的主要亮点是一份围绕"会话首轮工具选择"的算法提案（Issue #8113），标志着项目在工具调用与上下文工程方向上的持续探索。PR 侧几乎被 Dependabot 的批量依赖更新占据，仅 #8104 被关闭（应为被 #8114 取代），说明仓库处于"积压待合并 + 依赖滚动升级"的常规节奏中。整体来看，项目处于**功能稳定、生态稳步迭代**的阶段，无紧急稳定性事件。

---

## 2. 版本发布

**无新版本发布。** 当前无 Release 动态可汇报。

---

## 3. 项目进展

今日被关闭的 PR 为 **#8104**（[#8104](https://github.com/nearai/ironclaw/pull/8104)），这是一次较早（2026-09-20 创建）的"everything-else group"依赖批量升级，共 29 个 Rust crate。从时间线看，它大概率被今日更新的、规模更大的 **#8114**（[#8114](https://github.com/nearai/ironclaw/pull/8114)）所取代——后者覆盖了 31 个更新，包含了 #8104 中尚未合并的内容，因此被替代关闭属于正常依赖维护流程，不涉及代码回退或破坏性变更。

其他处于 OPEN 的 PR 暂未产生实质性合并动作，但 **#7988**（[#7988](https://github.com/nearai/ironclaw/pull/7988)）于今日刷新——这是一份由 nightly `Codebase Graph Refresh` 工作流自动生成的"代码库知识图谱引导快照"更新，由 `ironclaw-ci[bot]` 提交，属于 CI/基础设施层维护，对运行时无影响，但有助于维护 Agent/助手对项目结构记忆的一致性。

**总结：** 今日净推进 = 1 次依赖批次的滚动升级 + 1 次代码图谱刷新；功能层面无显著前进。

---

## 4. 社区热点

**今日讨论度排行：**

| 排名 | 标题 | 链接 | 评论数 / 关注度 |
|------|------|------|----------------|
| 1 | Proposal: opt-in turn-0 tool selection (BM25F + embeddings) | [#8113](https://github.com/nearai/ironclaw/issues/8113) | 新开 Issue，0 评论但属高质量提案 |
| 2 | chore(deps): bump the everything-else group across 31 updates | [#8114](https://github.com/nearai/ironclaw/pull/8114) | 规模最大的依赖批更新 |

**分析：** 当前最高质量的话题集中在 Issue #8113，作者 CjS77 提出了一种"对话开启时即根据首条用户消息预测所需工具"的方案，采用 BM25F 关键词检索 + Embedding 语义检索的混合打分，仅暴露预测命中的工具加上 4 个"发现桥接"工具（`tool_search`、`tool_describe`、`tool_call`、`result_read`）。诉求背后反映的是当前 LLM 工具调用场景的**上下文爆炸问题**——即工具描述占满 prompt、模型选择工具的能力随工具数量增长而显著下降。该提案虽 0 评论，但议题本身具备较高落地价值，预计会吸引维护者审阅。

---

## 5. Bug 与稳定性

**今日无 Bug、崩溃或回归问题报告。**

- 唯一新增的 Issue #8113 属于**功能提案**而非缺陷报告。
- 现有 PR 全部为依赖滚动升级或 CI 刷新，未引入已知风险。
- 项目整体稳定性面良好。

---

## 6. 功能请求与路线图信号

### Issue #8113 — Turn-0 Tool Selection（[链接](https://github.com/nearai/ironclaw/issues/8113)）

**核心建议：**
- 在会话第 0 轮基于首条用户消息对工具候选做 BM25F + Embedding 混合排序。
- 默认仅暴露"预测工具 + 4 个发现桥接工具"，其余工具按需召回。

**评估：纳入下一版本可能性较高。**

| 评估维度 | 判断 |
|---------|------|
| 与项目既有方向契合度 | 高：项目名称 IronClaw 强调"工具调用 + Agent 编排"，上下文工程是其核心痛点 |
| 实现复杂度 | 中等：BM25F 与 Embedding 均为成熟技术，关键工作是排序融合与桥接工具设计 |
| 已有 PR 准备 | 否，无对应 PR 提交，需作者自行实现 |
| 风险 | 低：opt-in 设计，默认行为不变 |
| 破坏性 | 无 |

**结论：** 若作者给出 PoC 实现或实验数据，进入下一版本（vNext）的可能性较大。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 评论数普遍为 0 或未提供，难以提炼出大量真实用户反馈。以下为可观察到的有限信号：

- **依赖维护节奏反映项目活跃度：** Dependabot 在过去一周内连续提交了 #7834（wasm 组）、#8078（tokio 生态组）、#8103（GitHub Actions 组）、#8104/#8114（everything-else 组）等多批更新，表明维护者**持续跟进上游安全与功能更新**，但仍未合并，说明合并评审节奏偏慢。
- **从作者画像看：** 提案作者 CjS77 为外部贡献者（非 bot），具备实质性技术内容，说明 IronClaw 正在吸引真正使用工具调用能力的实践者贡献。

**用户痛点（从 Issue #8113 提案中可推断）：**
- 工具数量增多后，prompt 中"工具定义"挤占系统提示与历史轮次空间。
- 模型在大量工具中选择目标工具的准确率下降。
- 用户期望一种"按需加载"的工具发现机制。

---

## 8. 待处理积压

按"创建时间久 + 仍 OPEN"排序，提醒维护者关注：

| 链接 | 创建日 | 类型 | 已等待天数 | 备注 |
|------|--------|------|-----------|------|
| [#7834](https://github.com/nearai/ironclaw/pull/7834) | 2026-08-23 | Dependabot (wasm 组 4 项) | ~36 天 | 涉及 wasmtime、wit-component、wit-parser 等关键依赖，长期未合并可能与 Rust toolchain 升级节奏冲突 |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | 2026-08-29 | CI/代码图谱刷新 | ~30 天 | nightly 自动化 PR，若长时间不合并会导致快照与 HEAD 持续漂移 |
| [#8078](https://github.com/nearai/ironclaw/pull/8078) | 2026-09-06 | Dependabot (tokio 生态 2 项) | ~22 天 | tower-http 0.7.0 → 0.7.1，tokio-tungstenite 小幅升级，影响面较小 |
| [#8103](https://github.com/nearai/ironclaw/pull/8103) | 2026-09-20 | Dependabot (actions 8 项) | ~8 天 | 含 actions/setup-node 4.0.2 → 7.0.0（主版本跃迁），需重点 review |
| [#8114](https://github.com/nearai/ironclaw/pull/8114) | 2026-09-27 | Dependabot (everything-else 31 项) | ~1 天 | 规模最大，含 thiserror、uuid、base64 等 31 个 crate 升级 |

**风险提示：** 长期未合并的 Dependabot 批次会产生"PR 雪崩"——后续 Dependabot 扫描会生成新批次而非合并旧批次，导致依赖图谱长期停留在较旧版本，可能错过上游安全补丁。建议维护者按"分组合并"策略集中 review。

---

## 项目健康度评分（编辑评估）

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ★★☆☆☆ | 仅 1 Issue + 6 PR，多为维护性 |
| 社区参与 | ★★☆☆☆ | 评论几乎为零，互动信号弱 |
| 代码节奏 | ★★☆☆☆ | 依赖类 PR 合并缓慢，存在积压 |
| 稳定性 | ★★★★☆ | 无新增 Bug 报告 |
| 创新性 | ★★★☆☆ | Issue #8113 提案具备方向性价值 |

---

*报告生成时间：2026-09-28 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-28

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) · 统计窗口：2026-09-27 至 2026-09-28

---

## 1. 今日速览

LobsterAI 今日呈现"集中清理 + 安全加固"的工作节奏。在过去 24 小时内，项目共处理了 **13 条工单（Issues 与 PRs）**，其中 PR 关闭/合并 7 条，Issues 关闭 3 条，整体合并推进效率较高。值得注意的是，今日工作高度集中在**安全性修复**领域——两处 P0 级 IPC 漏洞（SSRF 与任意文件读取）已在同一天被完整披露、修复并合并闭环。然而，所有标记为 [stale] 的工单表明，仍存在显著的历史积压等待维护者响应，仓库内 Issue/PR 编号跨度（#9xx~#2770）也提示该项目长期保持着高频迭代。

---

## 2. 版本发布

本周期内 **无新版本发布**。基于今日合并的修复与新功能，下个版本或将包含 NSIS 安装路径规范、Vite 热更新修复、流式响应内存泄漏修复以及 Word 文档编辑能力等改进。

---

## 3. 项目进展

今日有 **7 条 PR 被关闭/合并**，覆盖安全加固、UX 优化与构建工具修复三大方向：

| PR | 主题 | 影响 |
|---|---|---|
| [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) | 修复 `api:fetch/stream` SSRF 与 `readFileAsDataUrl` 任意文件读取 | 🔐 **核心安全修复**，关闭 P0 漏洞 |
| [#1038](https://github.com/netease-youdao/LobsterAI/pull/1038) | 修复流式响应 `ReadableStream` reader 泄漏 | 🛡 稳定性提升，避免网络中断/超时/用户停止场景下底层 TCP 连接永久泄漏 |
| [#2769](https://github.com/netease-youdao/LobsterAI/pull/2769) | 修复 Vite watch 忽略 renderer artifact 源码 | 🛠 开发体验：恢复 artifact 面板/Markdown 编辑器的热更新 |
| [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | 新增 Word 文档编辑能力 | ✨ 功能新增，覆盖 renderer/build/docs/main/openclaw/skills/artifacts 多模块 |
| [#1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | Agent 设置面板切换时增加未保存更改提示 | 💡 防误操作 UX 改进 |
| [#1044](https://github.com/netease-youdao/LobsterAI/pull/1044) | Windows NSIS 安装根盘路径规范化 | 🛠 安装体验：根盘路径自动追加 `\\LobsterAI`，避免安装失败 |
| [#979](https://github.com/netease-youdao/LobsterAI/pull/979) | 修复 agent skill 选项列表间距缺失 | 💡 UI 细节优化 |

整体评估：今日是**高质量发展的一天**——安全性、稳定性、UX 三类改进同步推进，且工单从报告到修复的链路完整（Issue → PR → 合并）。

---

## 4. 社区热点

由于多数工单均为 [stale] 历史清理，工单的实时评论活跃度较低。但从话题影响力来看，以下三处为社区关注焦点：

- 🥇 **[#1041 - SSRF + 任意文件读取安全漏洞](https://github.com/netease-youdao/LobsterAI/issues/1041)**  
  反映用户对桌面应用主进程权限隔离与 IPC 边界校验的强烈关注。同一作者同步提交修复 PR #1042 形成完整闭环。

- 🥈 **[#976 - 断网情况下问答提示 timeout 体验问题](https://github.com/netease-youdao/LobsterAI/issues/976)**  
  当前仍 **[OPEN]** 状态，反映用户对"异常场景提示规范性"的诉求。

- 🥉 **[#977 - deep link URL 缺少来源校验](https://github.com/netease-youdao/LobsterAI/issues/977)**  
  仍 **[OPEN]** 状态，与 #1041 同属安全合规主题，提示项目安全审计正在进行中。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 内容 | 状态 |
|---|---|---|
| 🔴 P0 - 严重 | [`api:fetch/stream` SSRF 漏洞](https://github.com/netease-youdao/LobsterAI/issues/1041)：可探测内网、访问云 metadata endpoint（`169.254.169.254`）窃取凭证 | ✅ 已有 fix PR [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) |
| 🔴 P0 - 严重 | [`dialog:readFileAsDataUrl` 任意文件读取](https://github.com/netease-youdao/LobsterAI/issues/1041)：可读取 `/etc/passwd`、`~/.ssh/...` 等敏感文件 | ✅ 已有 fix PR [#1042](https://github.com/netease-youdao/LobsterAI/pull/1042) |
| 🟠 P1 - 高 | [`handleDeepLink` URL 来源未校验](https://github.com/netease-youdao/LobsterAI/issues/977)：可能受恶意 `lobsterai://auth/callback` 链接干扰 | ⏳ 仍 OPEN，暂无关联修复 PR |
| 🟠 P1 - 高 | [流式响应 reader 泄漏](https://github.com/netease-youdao/LobsterAI/pull/1038)：网络中断/超时/用户停止时底层 TCP 连接不释放 | ✅ 已修复 |
| 🟡 P2 - 中 | [断网时双 timeout 提示体验不友好](https://github.com/netease-youdao/LobsterAI/issues/976) | ⏳ 仍 OPEN |
| 🟡 P2 - 中 | [已清除的 Agent 技能切换 Agent 后仍存在](https://github.com/netease-youdao/LobsterAI/issues/1047) | ❌ 已关闭（建议后续回归验证） |
| 🟡 P3 - 低 | [Vite watch 误忽略 renderer artifact 源码](https://github.com/netease-youdao/LobsterAI/pull/2769) 导致热更新失效 | ✅ 已修复 |
| 🟢 P4 - 体验 | [Agent skill 选项列表间距缺失](https://github.com/netease-youdao/LobsterAI/pull/979) | ✅ 已修复 |

---

## 6. 功能请求与路线图信号

| 需求 | 信号来源 | 落地情况 |
|---|---|---|
| **侧边栏任务分类文件夹** | 用户长期诉求 → [PR #978](https://github.com/netease-youdao/LobsterAI/pull/978) | ⏳ 待合并，作者已完成 12 个文件改动（SQLite 迁移 + UI + IPC） |
| **Word 文档编辑能力** | [PR #2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | ⏳ 待合并，跨多个 area 模块的重大功能 |
| **模型上下文窗口可配置** | [Issue #1046](https://github.com/netease-youdao/LobsterAI/issues/1046)（用户希望从 200K 提升至 Qwen3.5-Plus 官方支持的 1M） | ❌ 已关闭，官方文档缺失，**建议维护者主动补充文档或在下次版本增加配置项** |
| **Agent 切换未保存提示** | 用户反馈 → [PR #1045](https://github.com/netease-youdao/LobsterAI/pull/1045) | ✅ 已合并 |

📌 **判断**：`#978`（聊天文件夹）与 `#2770`（Word 文档编辑）均有较完整代码实现，若维护者近期合并，将显著提升下一版本的竞争力。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中可提炼的真实痛点：

- 🗣 **安全边界不透明**：用户对主进程/渲染进程权限划分、IPC 校验机制缺乏文档化说明，希望了解"应用到底拥有哪些系统权限"。
- 🗣 **网络异常下的体验**：断网时同时弹出"连接超时 + 响应超时"两条提示（[#976](https://github.com/netease-youdao/LobsterAI/issues/976)），让用户不清楚下一步该做什么。
- 🗣 **数据一致性问题**：清除 Agent 技能后，切换到其他 Agent 再切回，发现技能依然存在（[#1047](https://github.com/netease-youdao/LobsterAI/issues/1047)），反映出**状态同步或缓存失效**逻辑存在缺陷。
- 🗣 **平台能力受限**：Qwen3.5-Plus 官方支持 1M 上下文窗口，但 LobsterAI 将其限制为 200K（[#1046](https://github.com/netease-youdao/LobsterAI/issues/1046)），且无文档说明限制原因或自定义路径，引起用户不满。
- 🗣 **Agent 误操作**：切换 Agent 时已修改的内容丢失（→ [PR #1045](https://github.com/netease-youdao/LobsterAI/pull/1045)），属于典型"未保存确认缺失"问题。
- 🗣 **Windows 安装路径**：选择根盘（如 `D:\`）作为安装目录时可能安装失败（→ [PR #1044](https://github.com/netease-youdao/LobsterAI/pull/1044)）。

---

## 8. 待处理积压

以下为尚未得到响应或长期 OPEN 的高优项，建议维护者优先关注：

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| 🔴 安全 | [#977](https://github.com/netease-youdao/LobsterAI/issues/977) | deep link URL 缺乏来源合法性校验 | 与 #1041 同类型 IPC 边界漏洞，已知风险但未修复 |
| 🟠 体验 | [#976](https://github.com/netease-youdao/LobsterAI/issues/976) | 断网 timeout 提示不规范 | 影响首次使用用户的留存 |
| 🟡 功能 | [#978](https://github.com/netease-youdao/LobsterAI/pull/978) | 聊天文件夹（PR 待合并） | 代码改动量大，review 工作积压 |
| 🟡 功能 | [#2770](https://github.com/netease-youdao/LobsterAI/pull/2770) | Word 文档编辑（PR 待合并） | 跨 7 个 area，影响面广，需谨慎 review |
| 📝 文档 | [#1046](https://github.com/netease-youdao/LobsterAI/issues/1046) | 上下文窗口限制原因及自定义方法 | 用户明确诉求"补充文档或提供配置项" |

---

### 📊 项目健康度评分（满分 5.0）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐ | 单日处理 13 条工单 |
| 安全性响应 | ⭐⭐⭐⭐⭐ | P0 漏洞当日闭环 |
| 社区响应时效 | ⭐⭐ | 仍存在大量 [stale] 工单 |
| PR review 效率 | ⭐⭐⭐ | 重要功能 PR 等待合并 |
| 文档透明度 | ⭐⭐ | 多项限制/配置无文档说明 |

**综合：3.5 / 5.0** —— 今日安全与稳定性进展令人鼓舞，但社区与文档侧的滞后值得警惕，建议维护者集中清理 stale 工单并对 #977/#976/#1046 给出明确后续计划。

---

*报告由 AI 自动生成，基于 GitHub 公开数据；统计口径以 commit/issue 更新时间为基准。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-28

> 数据来源：GitHub `moltis-org/moltis` 仓库
> 统计周期：2026-09-27 ~ 2026-09-28（24h）

---

## 1. 今日速览

Moltis 今日整体处于**低-中等活跃度**的日常维护状态：1 条 Bug 报告新增、3 条 PR 待合并、0 个版本发布，无已合并或关闭的条目。值得关注的是 Issue #1286 与 PR #1287 形成了一对"Issue + Fix"的典型闭环，作者 `gyje` 在提报问题的同时即提交了修复 PR，显示出良好的协作模式。同时，PR #1288 持续推进 Tsubasa 提供方集成，PR #1280 也迎来最新更新，反映项目在"模型生态扩展"与"工具调度稳定性"两条线上同步推进。**健康度评估：良好 ✅**

---

## 2. 版本发布

本周期内 **无新版本发布**（章节略）。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，所有 3 条 PR 仍处于待合并状态。不过从内容上看，社区贡献方向清晰：

| PR | 类型 | 推进价值 |
|---|---|---|
| [#1288](https://github.com/moltis-org/moltis/pull/1288) | feat | 将 Tsubasa 加入 `setup` 与 OpenAI 兼容注册表，新增 `tsubasa-fast` / `tsubasa-pro` 两个 32K 上下文模型，扩展可选用模型生态 |
| [#1287](https://github.com/moltis-org/moltis/pull/1287) | fix | 修复 `deepseek-flash`（DeepSeek-V4.1-Flash）未被识别为 DeepSeek thinking model 的硬编码启发式缺陷，恢复 Reasoning Effort 切换 |
| [#1280](https://github.com/moltis-org/moltis/pull/1280) | fix | 修复 `active_tools` 为空数组时被错误覆盖 preset 工具控制的问题（关联 #1277），最近一次更新在 2026-09-27 |

整体进度评估：项目在"模型能力识别 + 工具调度健壮性 + 提供方生态"三方面均有候选变更等待落地，但**尚未合入主干**，距离下一次发版仍需维护者评审。

---

## 4. 社区热点

本日 Issues 与 PRs 的互动数据（评论 + 👍）整体偏低，但仍可见**两个值得关注的热点方向**：

- **DeepSeek 推理能力识别问题** — Issue [#1286](https://github.com/moltis-org/moltis/issues/1286)（0 评论、0 👍）与修复 PR [#1287](https://github.com/moltis-org/moltis/pull/1287)（同一作者 `gyje`）形成了"用户提报 → 即时响应"的最短链路。这是过去 24 小时内**最具代表性的社区互动**。
- **新提供方集成请求** — PR [#1288](https://github.com/moltis-org/moltis/pull/1288) 由 `cenab` 提交，反映出社区对扩展模型源（Tsubasa）的实际需求，提议方向明确、变更范围克制。

整体讨论热度仍偏冷，可能与**缺少已合并动作**有关，建议维护者主动 ping 评审以激活对话。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🟡 中 | [#1286](https://github.com/moltis-org/moltis/issues/1286) | `deepseek-flash`（DeepSeek-V4.1-Flash）未触发 Reasoning Effort 切换，原因是 `crates/providers/src/model_capabilities.rs` 中的硬编码模型 ID 启发式仅识别旧版 `deepseek-v4*` 名称 | ✅ 已有修复 PR [#1287](https://github.com/moltis-org/moltis/pull/1287) 待合并 |
| 🟡 中 | [#1280](https://github.com/moltis-org/moltis/pull/1280) | 当 `active_tools` 显式为空数组时，preset 中的工具白/黑名单控制会被错误覆盖，导致预设工具失效 | ✅ 已针对 #1277 提出修复，待合并 |

**结论**：两个 Bug 均已有对应的修复分支，无 P0 级崩溃或回归报告，项目稳定性良好。

---

## 6. 功能请求与路线图信号

- **Tsubasa 提供方支持** — 由 PR [#1288](https://github.com/moltis-org/moltis/pull/1288) 提出，包含 `setup` 引导、OpenAI 兼容注册表项、模板生成与 README 更新。**信号强度：强**，若维护者评审通过，很可能被快速合入下一个小版本。
- **DeepSeek 模型能力自动识别扩展** — 由 PR [#1287](https://github.com/moltis-org/moltis/pull/1287) 体现：硬编码模型 ID 的维护方式正面临可扩展性挑战，未来或将引入更通用的"按 vendor 元数据自动判定 reasoning 支持"的策略。**信号强度：中**，可作为长期演进方向观察。
- **工具预设作用域语义** — PR [#1280](https://github.com/moltis-org/moltis/pull/1280) 揭示出"显式空数组"与"未设置"的语义歧义问题，可能推动后续在文档与 API 中显式定义契约。

---

## 7. 用户反馈摘要

本周期 Issues 评论量为 0，公开反馈较少，但可从议题标题与摘要中提炼如下真实诉求：

- **痛点**：用户对 DeepSeek 最新模型 (`DeepSeek-V4.1-Flash`) 在 Moltis Web UI 中**缺失 Reasoning Effort 切换**表示不满，认为能力识别应当跟上模型迭代节奏。
- **使用场景**：DeepSeek 推理模型用户希望在 UI 上直接控制思考强度；Tsubasa 用户希望无缝接入 OpenAI 兼容协议，免去手动配置。
- **满意度信号**：尽管反馈少，但"Issue 提交即配套 PR 提交"的协作模式（`gyje`）反映出**核心贡献者对项目代码熟悉度高、修复意愿强**，社区氛围偏建设性。

---

## 8. 待处理积压

| 类型 | 编号 | 创建日期 | 距今 | 提醒 |
|---|---|---|---|---|
| PR | [#1280](https://github.com/moltis-org/moltis/pull/1280) | 2026-09-21 | **7 天** | 已更新至 2026-09-27，仍处于 OPEN 状态，建议维护者优先评审并合入，避免与后续重构冲突 |
| Issue | #1277（[#1280](https://github.com/moltis-org/moltis/pull/1280) 所修复） | ~ 7 天前 | ~ 7 天 | 已有配套 PR，应同步关闭 |
| Issue | [#1286](https://github.com/moltis-org/moltis/issues/1286) | 2026-09-27 | 1 天 | 已有配套 PR [#1287](https://github.com/moltis-org/moltis/pull/1287)，合入后可一并关闭 |

**维护者关注建议**：
1. PR [#1280](https://github.com/moltis-org/moltis/pull/1280) 与 [#1287](https://github.com/moltis-org/moltis/pull/1287) 均为纯 Bug Fix 改动，建议优先合入并发布 patch 版本；
2. PR [#1288](https://github.com/moltis-org/moltis/pull/1288) 涉及新提供方，需做一次合规与代码质量评审；
3. 长期看，建议将"模型 reasoning 能力识别"由硬编码改为可配置/可探测，降低此类 Bug 复发概率。

---

*报告生成时间：2026-09-28 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-28

> 数据来源：`agentscope-ai/QwenPaw`（CoPaw）GitHub 仓库
> 统计窗口：过去 24 小时（2026-09-27 ~ 2026-09-28）

---

## 1. 今日速览

CoPaw 在过去 24 小时继续保持**中等偏高**的开发活跃度，共产生 17 条仓库动态（10 条 Issue + 7 条 PR），其中 5 条已关闭。**重要里程碑**是困扰社区已久的图片上下文累积问题（#7853）由其对应修复 PR（#7965）正式关闭，标志着 Scroll 折叠逻辑的一个关键缺陷被修复。整体来看，今日新增问题以**桌面端 UX 与 Windows 兼容性**为主线（双启动、字体大小、Office COM、沙箱策略），同时 Console/WebUI 的多项体验优化 PR 进入待评审或已合并状态，项目处于稳定的迭代改进期。

---

## 2. 版本发布

**今日无新版本发布。** 最近被讨论的版本包括 2.1.0、2.2.0、2.2.1、2.2.2b4、2.2.3b，覆盖正式版与 Beta 渠道。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) | fix(context): reclaim historical media in Scroll and align thinking omission with token counting | ✅ CLOSED | **关键修复**。修复 Scroll 折叠逻辑对仅含短描述的图片结果被错误排除的问题，同时对齐 thinking 块省略与 token 计数。直接关闭长期高热度 Issue #7853。 |
| [#7953](https://github.com/agentscope-ai/QwenPaw/pull/7953) | fix(portability): preserve actionable per-asset import failures | ✅ CLOSED | 改善资产导入的可观测性，保留逐资源的失败信息，便于用户定位导入失败原因。 |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | feat(console): add authenticated multi-tab chat terminal | ✅ CLOSED | **功能新增**。在 Console 共享 chat + files 工作区下引入懒加载 xterm 多标签终端，支持自动建终端、重命名、上下文菜单关闭、调整大小、折叠、有界输出回放，并要求鉴权。显著扩展 Console 的开发/调试能力。 |

**今日净推进评估**：项目在 **Context 管理稳健性**、**Console 体验**、**数据可移植性** 三个方向上均取得实质进展，相当于一个"小版本"的累积价值。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 关注点 |
|---|---|---|---|---|
| 🥇 | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | Bug | 8 | **ToolResultPruner 跳过 media block 导致 base64 图片无界累积**，是当前最热的会话上下文稳定性话题，今日已关闭。 |
| 🥈 | [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | Feature | 3 | 用户希望**手动停用预制模型和频道**，反映"控制面板洁癖"与按需启用的真实诉求。 |
| 🥉 | [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Feature | 2 | 长期议题：**Agent 自管理上下文生命周期 + 自动 checkpoint/reset**，针对 cron 任务与长链路场景下指令遵循度退化问题。 |
| 4 | [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | Feature | 1 | **Aliyun Token Plan 模型缺失 `thinking_param_style`**，导致 Console 思考控件被隐藏。 |
| 5 | [#7998](https://github.com/agentscope-ai/QwenPaw/issues/7998) | Question | 1 | 用户询问**自动压缩触发时机**，希望支持阈值触发而非仅人工触发（已 close-and-review-later）。 |

**热点解读**：用户关注的焦点高度集中于**长会话下的上下文管理**（#7853、#4525、#7998）与**模型/UI 的可控性**（#7957、#7990）。前者直接关系到"Agent 能不能在大量工具调用后保持稳定"，后者反映用户对"显式优于隐式"的偏好。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 关联 Fix |
|---|---|---|---|
| 🔴 高 | [#7853](https://github.com/agentscope-ai/QwenPaw/issues/7853) | `view_image` 产生的 base64 图片永远不被 `ToolResultPruner` 裁剪，长会话必然 OOM 上下文 | ✅ [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) **已合并** |
| 🟠 中-高 | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Windows auto 模式 + 沙箱关闭时，Agent 可执行 `PowerPoint.Application.Quit()` 等 Office COM，**关闭用户的 PowerPoint**。存在安全/破坏性后果。 | ❌ 暂无 |
| 🟡 中 | [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) | Windows 桌面端**无双实例守卫**，双击启动会开第二个窗口并终止首个实例的 live backend | ❌ 暂无 |
| 🟡 中 | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) | Files 面板刷新按钮不会更新已展开目录中的新文件（需整页刷新） | ✅ [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) **PR 已提待合并** |
| 🟢 低 | [#7998](https://github.com/agentscope-ai/QwenPaw/issues/7998) | 用户对自动压缩触发条件理解不清，更像 UX/文档问题 | ✅ 已关闭（Close-and-review-later） |

**稳定度评估**：今日最严重的稳定性问题（#7853）已修复；剩余以 **Windows 桌面端体验类问题**为主，整体可控。

---

## 6. 功能请求与路线图信号

今日收到 4 条明确的 Feature Request：

| Issue | 标题 | 路线图可能性 | 判断依据 |
|---|---|---|---|
| [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | WebUI 消息撤回/编辑 + 工作区快照回滚 | ⭐⭐⭐⭐ 高 | 与"会话可纠错"基础体验强相关，且工作区快照机制可复用现有 Files 能力 |
| [#7999](https://github.com/agentscope-ai/QwenPaw/issues/7999) | 桌面端 UI 字体大小可调节 | ⭐⭐⭐⭐⭐ 极高 | 标签已自带 `good first issue`，实现简单、受益面广（无障碍/高 DPI/投屏） |
| [#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990) | 模型目录补 `thinking_param_style` 声明 | ⭐⭐⭐⭐⭐ 极高 | 纯声明字段补充，几乎零风险，关系 Console 模型可用性 |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 预制模型/频道手动停用 | ⭐⭐⭐ 中 | 与"个人化设置面板"路线契合，但需要 UI 与 catalog 双向改造 |
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Agent 自管理上下文 + 自动 checkpoint/reset | ⭐⭐⭐ 中 | 涉及调度/状态机改动，复杂度较高，与 #7853/#7998 关联紧密，方向正确 |

**信号总结**：可纳入下一版本的"低成本高收益"项为 **#7999（字体调节）+ #7990（thinking_param_style）**；**#7997（消息撤回）** 适合作为下一个小版本的功能亮点。

---

## 7. 用户反馈摘要

- **痛点 A：长会话上下文管理混乱。** 多个用户反馈"100~300 步的会话，前 10 步后上下文就接近满载"，且自动压缩仅在用户主动提交时才触发，Agent 自身调用时不会触发，导致每次推理都在吃满窗口（[#7998](https://github.com/agentscope-ai/QwenPaw/issues/7998)）。这与 #7853 的图片 base64 累积形成"双重打击"。
- **痛点 B：Windows 桌面端鲁棒性不足。** 双启动冲突（#8000）+ Office COM 失控（#8002）共同指向 **Windows 平台缺乏完整的单实例守卫与沙箱治理策略**，需要治理层（governance）与平台层（desktop runtime）的协同加固。
- **痛点 C：模型目录与 Console 控件不同步。** Aliyun Token Plan 模型实际支持 `reasoning_effort` 等参数，但因 `model_catalog.json` 未声明 `thinking_param_style`，前端控件被隐藏，用户无法启用（[#7990](https://github.com/agentscope-ai/QwenPaw/issues/7990)）。**文档/元数据滞后于能力**，是典型的"上游通了下游没通"。
- **痛点 D：可访问性与个性化诉求。** 字体大小不可调（#7999）、模型清单无法收起（#7957），反映出**桌面端个人化能力薄弱**。
- **正面信号**：#7853 的 8 条评论中可见社区对 Scroll 折叠机制的深入讨论，说明核心用户具备较强的工程理解力，有利于项目质量持续提升。

---

## 8. 待处理积压

| 条目 | 类型 | 创建日期 | 距今 | 备注 |
|---|---|---|---|---|
| [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) | Feature | 2026-05-19 | ~4 个月 | **Agent 自管上下文生命周期**。与今日 #7853、#7998 同属"上下文管理"主题，但未指派、长期搁置。**强烈建议维护者评估立项**。 |
| [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) | PR | 2026-08-10 | ~7 周 | **MCP 工具调用超时（`tool_call_timeout`）** 已标记 `[Under Review]`，超过 7 周无合并动作。涉及向后兼容性（保留旧 `timeout` key），需要维护者确认最终 API。 |
| [#8000](https://github.com/agentscope-ai/QwenPaw/issues/8000) | Bug | 2026-09-27 | 1 天 | **Windows 双实例守卫缺失**。与 #8002 同属 Windows 平台治理，建议合并为一个 epic 跟踪。 |
| [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | Bug | 2026-09-28 | 0 天 | **Windows auto 模式下 Office COM 失控**。属于安全/破坏性类别，建议优先响应。 |

**提醒**：维护者关注 [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) 与 [#4525](https://github.com/agentscope-ai/QwenPaw/issues/4525) 的处置——前者是社区已认可的成熟提案，后者是经过 4 个月沉淀的高价值路线图议题。

---

### 📊 项目健康度总评

| 维度 | 评估 |
|---|---|
| 活跃度 | 🟢 中高（17 条动态） |
| 响应速度 | 🟢 关键 Bug 当日有 Fix PR |
| 社区参与 | 🟢 评论深度良好，少量积压 |
| 稳定性 | 🟡 Windows 桌面端需加固 |
| 路线图清晰度 | 🟡 个别 Feature 长期未评审 |

**整体判断**：项目处于**稳健迭代期**，核心 Context 管理能力刚刚迈过一道关键坎，下一阶段重点建议聚焦 **Windows 桌面端治理** 与 **WebUI 消息可编辑/回滚** 两条主线。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-28

---

## 1. 今日速览

ZeroClaw 今日呈现**高活跃度、强安全聚焦**的研发态势：过去 24 小时共 49 条 Issue 更新、50 条 PR 更新，关闭率分别约 18% 和 28%。**当日 0 个版本发布**，但出现两条 **S0 级安全 Bug**（#11198、#11197）以及多条与权限复核（authority recheck）、RPC 内存主体验证、网关鉴权相关的 PR 集中推进。CI 与 crates.io 发布链路正在经历一次系统性修复（#11105 / #11095 栈式回归）。整体来看，项目仍处于 v0.8.5 → v0.8.6/0.9.0 的"安全加固 + 发布治理"窗口期。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。

最近一次正式版本仍为 **v0.8.5**，当前主线工作聚焦在以下三块：
- crates.io 发布链路修复（#9381、#11105、#11095）
- 权限再核验（authority recheck）基础设施（#11205、#11206）
- v0.8.6 / v0.9.0 阶段性的剩余运行时与网关交付（#7432、#10814）

> 建议维护者在下次发版前重点验证 PR #11105/#11095 的合并顺序，避免 release gate 反复抖动。

---

## 3. 项目进展

### 已合并/已关闭 PR（14 条，按风险与影响力排序）

| PR | 主题 | 影响 | 链接 |
|---|---|---|---|
| **#10823** | `config/set-many` 原子批量配置写入 | 将原本多次 RPC 写入合并为一次事务，解决"UID + 权限 profile 等必须同改字段"的不一致窗口 | [#10823](https://github.com/zeroclaw-labs/zeroclaw/pull/10823) |
| **#10824** | RPC 批量入口拒录与授权再核验 | 补齐 #10823 的副作用面，杜绝"denied 项被静默吞掉" | [#10824](https://github.com/zeroclaw-labs/zeroclaw/pull/10824) |
| **#11177** | 网关读取/签发配对码需 owner-only admin token | **修复首设备配对前的鉴权空窗**——任何人到达端口即可拿到 live code | [#11177](https://github.com/zeroclaw-labs/zeroclaw/pull/11177) |
| **#11202** | 网关与 RPC 共享统一入站认证状态 | 终结"两边各自权威、策略互不可见"的架构债 | [#11202](https://github.com/zeroclaw-labs/zeroclaw/pull/11202) |
| **#11121** | 远程 WSS 连接要求 Bearer Token 文档 | 配合 #10259 把 auth_token 写入 `zerocode/remote.md` | [#11121](https://github.com/zeroclaw-labs/zeroclaw/pull/11121) |
| **#11109** | 稳定版发布时同步根目录 `llms.txt`/`llms-full.txt` | 修复 PR #11093 提到的"文档链接指向旧版本" | [#11109](https://github.com/zeroclaw-labs/zeroclaw/pull/11109) |
| **#11071** | Master push 运行去抖（CI 性能） | 在编译机群启动前合并突发推送，节省浪费的 CI 分钟 | [#11071](https://github.com/zeroclaw-labs/zeroclaw/pull/11071) |
| **#8909** | 网关与 Dashboard 插件能力目录 | 把 `GET /api/plugins` 重建在 `zeroclaw-plugins` 包目录上 | [#8909](https://github.com/zeroclaw-labs/zeroclaw/pull/8909) |
| **#11095** | 在版本号 bump 前阻断不可发布的 crate | 把 crates.io 自打包校验前置 | [#11095](https://github.com/zeroclaw-labs/zeroclaw/pull/11095) |
| **#11105** | 恢复 crates.io 发布（v0.8.5 双失败回归修复） | 修复 publisher 脚本自身的 bug | [#11105](https://github.com/zeroclaw-labs/zeroclaw/pull/11105) |

### 阶段判定
项目在"**安全与权限一致性**"维度取得实质性推进：配对码首设备鉴权空窗、`config/set-many` 原子性、入站认证状态双源不一致三个长期债务在同一天被关闭，是 v0.8.6 路线图上少有的高密度收盘日。

---

## 4. 社区热点

### 评论数最高的 Issues

1. **[#8850]**（6 条评论）— *Move optional channels & tools from compile-time feature flags to runtime plugins*
   - 由 JordanTheJet 主导的**架构级追踪器**，目标是让默认二进制瘦身并通过 WASM 插件动态加载渠道/工具。
   - 社区诉求：降低交叉编译与分发体积，让"插件"成为一等公民。配套 PR #8909（能力目录）已合。
   - 🔗 [Issue #8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)

2. **[#9381]**（5 条评论）— *Tracker: crates.io publishing, packaging, cargo-install follow-ups*
   - v0.8.4 之后的发布治理 backlog，今日关闭的 #11105 / #11095 正是本 tracker 的子项。
   - 🔗 [Issue #9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)

3. **[#10523]**（5 条评论，CLOSED）— *Bootstrap 文件截断在 6000 字符对运维不可见*
   - 已关闭，标志 `compact_context` 行为在 UI 层露出提示（需要在数据上验证回归是否真修）。
   - 🔗 [Issue #10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523)

4. **[#11036]**（5 条评论，CLOSED）— *OpenCode `big-pickle` 免费层在 v0.8.4 返回 403 FreeTierError*
   - 真实用户场景：使用 opencode 凭据 + 免费层模型。S2。
   - 🔗 [Issue #11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)

5. **[#9323]**（4 条评论，CLOSED）— *定义执行树迭代预算的所有权*
   - 设计层关注点：`ToolLoop.shared_budget` 当前所有生产根都传 `None`，没有真实约束作用。
   - 🔗 [Issue #9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)

6. **[#7943]**（4 条评论）— *Realtime voice-host 渠道（与 Wyoming 对齐）*
   - `metalmon` 提出的"LLM/agent/RAG/MCP 大脑 + 外部实时语音宿主"抽象，已停留约 **3 个月**，社区对其优先级存在疑问。
   - 🔗 [Issue #7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943)

7. **[#10919]**（4 条评论）— *A2A 与 HTTP 工具测试使用独立锁管理全局代理状态*
   - 来自 #9283 review 反馈的 CI/测试同步一致性问题。
   - 🔗 [Issue #10919](https://github.com/zeroclaw-labs/zeroclaw/issues/10919)

---

## 5. Bug 与稳定性

按严重度排序：

### 🔴 S0 — 数据丢失 / 安全风险（2 条新增，今日最高优先级）

| Issue | 简述 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| **#11198** | 委托子代理的 memory 工具丢失 principal 作用域，子代理可越过 owner 私有 memory plane | ❌ 暂无 | [#11198](https://github.com/zeroclaw-labs/zeroclaw/issues/11198) |
| **#11197** | 管理员被撤销 admin 授权后，同一会话 resume 仍可恢复转发后的环境变量 | ❌ 暂无 | [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) |
| **#11136** | `parallel_tools` 下并发 `file_edit`/`file_write` 到同一路径会静默丢写 | ❌ 暂无（需先决定工具层 vs runtime 层归属） | [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) |

### 🟠 S1 — 工作流阻塞

- **#11180**（in-progress）— `llm_request_payload_off_still_carries_prefix_fingerprints` 在并行 runtime 闸门下读到其他用例的 record。属 flaky test，已 in-progress。
  🔗 [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180)

### 🟡 S2 — 行为降级（节选）

| Issue | 简述 | 链接 |
|---|---|---|
| #10778 | 多模态图片 cap 驱逐会重写更早历史消息，导致 Anthropic 缓存前缀失效 | [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) |
| #10795 | `zeroclaw agent` 交互 REPL 永不启用 IUTF8，多字节字符退格异常 | [#10795](https://github.com/zeroclaw-labs/zeroclaw/issues/10795) |
| #11097 (CLOSED) | 插件 egress remedy 命令不转义 grant 中已有单引号（已修） | [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) |
| #11093 (CLOSED) | 稳定版晋升后根目录 `llms.txt` 不同步（已修） | [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) |
| #11036 (CLOSED) | OpenCode `big-pickle` 免费层 403（已修） | [#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036) |
| #10822 (CLOSED) | `config/set-many` 提案落地，附随 #10823 | [#10822](https://github.com/zeroclaw-labs/zeroclaw/issues/10822) |

### 🟢 S3 — 微小问题

- **#11097**（CLOSED）— 修复已合并。

### 稳定性信号
今日三连 S0 都集中在 **identity & access** 主题（principal scope、session 续期、并发写工具），与今日关闭的 #10824 / #11177 / #11202 高度呼应——说明维护团队对此反应面是清醒的，但**仍有空白需要后续 PR 覆盖**（特别是 #11198、#11197）。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前配套 PR | 进入下一版本的概率 |
|---|---|---|---|
| **Microsoft Teams 渠道**（Bot Framework） | PR #11194（OPEN，wadeling，size:XL） | 自身 | ⭐⭐⭐⭐ 直接落地 |
| **Discord 角色授权**（`allowed_role_ids`） | #9970 | 暂无 | ⭐⭐⭐⭐ 与 v0.8.6 鉴权主线一致 |
| **Stall watchdog 默认开启** | #10168 | 暂无 | ⭐⭐⭐ 文档已有实现，需一个行为变更 PR |
| **Knowledge Graph 作为一等 memory 层**（RFC） | #11053 | 暂无 | ⭐⭐⭐ 设计讨论阶段，纳入 v0.9.0 候选 |
| **Realtime voice-host 渠道**（Wyoming 对齐） | #7943 | 暂无 | ⭐⭐ 受关注但长期停车位，需维护者明确取舍 |
| **Signal "Note to Self"** | #9158 | 暂无 | ⭐⭐ 长期积压（约 2 个月） |
| **`map_tool_name_alias` 不再把 browser/search 重写为 shell** | #11108 | 暂无 | ⭐⭐⭐ 与 #10008 共同属于"工具语义保真"主题，可能性低 |

🔗 关键链接：[#11194](https://github.com/zeroclaw-labs/zeroclaw/pull/11194) · [#9970](https://github.com/zeroclaw-labs/zeroclaw/issues/9970) · [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) · [#11053](https://github.com/zeroclaw-labs/zeroclaw/issues/11053) · [#7943](https://github.com/zeroclaw-labs/zeroclaw/issues/7943) · [#9158](https://github.com/zeroclaw-labs/zeroclaw/issues/9158) · [#11108](https://github.com/zeroclaw-labs/zeroclaw/issues/11108)

---

## 7. 用户反馈摘要

- **🟢 满意/进展感**：
  - 多条 security 修复在同一天内集中收盘（#10824 / #11177 / #11202 / #11109），社区对 v0.8.6 鉴权面重构的推进速度表达认可。
  - CI 去抖（#11071）、crates.io 自打包校验前置（#11095）反映出对**发布链路**的实质优化。

- **🟠 不满/痛点**：
  - **Windows 体验仍有硬伤**：#10795（REPL IUTF8）、#9028（Ctrl+C 强制退出，返回 1073741510）。两条都源自平台 terminal 兼容层，建议列入"Windows 专项修复"批次。
  - **OpenCode 免费层 403**（#11036）反映**第三方 provider 失败时的可读性**需要更强：用户在 v0.8.4 上看到 "All model_providers/models failed" 摘要，几乎无法定位根因。
  - **`compact_context` 6000 字符截断对运维不可见**（#10523）说明**行为变更需要可观察的诊断输出**，而非静默发生。

- **🟡 使用场景**：
  - 真实用户在 OpenCode / GLM 兼容接口上跑零成本模型，说明 ZeroClaw 在**多 provider 切换**上是真实生产场景而非纸面。
  - Discord / Signal / Teams 渠道扩展请求来自团队协作场景。

---

## 8. 待处理积压

| Issue / PR | 主题 | 长期闲置时长 | 建议 |
|---|---|---|---|
| **[#7943]** | Realtime voice-host 渠道（parking-lot） | 约 3 个月 | 维护者明确**纳入/拒绝**并打标签，避免长期模糊 |
| **[#9158]** | Signal "Note to Self" | 约 2 个月 | 单文件小改动，建议排入下一周期 |
| **[#7432]** | Runtime & Gateway 阶段 2/3 tracker | 3 个月以上 | v0.8.6 / 0.9.0 推进期间保持周更 |
| **[#9970]** | Discord 角色授权（accepted，no-stale） | ~1.5 个月 | 已 accepted 但无 PR，建议 kickoff |
| **[#10814]** | Release efficiency tracker | ~15 天 | 与 #11071 / #11095 / #11105 完成后做收口 |
| **[#10212]** | 文档 `switch` 与路由优先级 | ~5 周 | docs-only，可由 docs 贡献者快速 PR |
| **[#10480]** | Recover from rejected image requests（XL，needs-maintainer-review） | ~1 个月 | needs maintainer attention |
| **[#10412]** | 共享 `SessionBackend` 原子所有权契约（XL） | ~1 个月 | 等待 review 进展 |

> 提醒：S0 安全 Bug（#11198、#11197、#11136）在 24 小时内无 fix PR 关联，建议列为**今日维护优先项**。

---

## 📌 TL;DR

- **健康度**：🟢 中高。代码节奏紧凑、安全主线清晰，但 S0 Bug 同日新增 3 条需警惕。
- **下版本预告**：极可能落在 v0.8.6 或 v0.8.5.x 补丁

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*