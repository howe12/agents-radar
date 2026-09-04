# OpenClaw 生态日报 2026-09-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-04 02:25 UTC

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

# OpenClaw 项目日报

**日期：2026-09-04**

---

## 1. 今日速览

OpenClaw 今日发布 **v2026.9.1** 稳定版，过去 24 小时内社区活跃度维持高位：500 条 Issue 更新（活跃/新开 364、关闭 136）与 500 条 PR 更新（待合并 410、合并/关闭 90）同步推进，整体节奏与近一周持平。社区讨论焦点仍然集中在 **SQLite/memory-core 数据层稳定性**、**Windows 升级与 doctor 修复流程**、**CLI-backend (claude-cli) 行为一致性** 以及 **macOS/iOS 信任与网关切换** 几类长尾问题上；新版本将 Mermaid 图表渲染能力下沉到 Web/原生客户端，显示出产品继续向"全平台一致体验"演进。值得关注的是，过去 24 小时内仍有 4 条 P0 级 Issue（SQLite 损坏、Windows 升级阻塞、Linux WebKit 崩溃、共享状态 WAL 损坏）处于 OPEN 状态，项目稳定性风险尚未完全释放。

---

## 2. 版本发布

### v2026.9.1（发布于 2026-09-03，日报日窗口内）

🔗 [Release 链接](https://github.com/openclaw/openclaw/releases/tag/v2026.9.1)

**主要亮点**

- **全平台 Mermaid 图表渲染**：Mermaid 代码块现在可在 Control UI 以及 macOS / iOS / Android 原生应用中渲染为图表，移动端支持放大预览和渲染失败时的重试。([#134913](https://github.com/openclaw/openclaw/issues/134913), [#135746](https://github.com/openclaw/openclaw/issues/135746), [#135470](https://github.com/openclaw/openclaw/issues/135470), [#135342](https://github.com/openclaw/openclaw/issues/135342))
- **从安装到对话的链路改进**（官方 highlights 标题截断，完整内容建议查阅 release notes）。

**破坏性变更 / 迁移提示**

- 发布说明 (highlights) 被截断，从随附 PR [#137637](https://github.com/openclaw/openclaw/pull/137637)（`fix(release): fail fast on publish prerequisites and harden the release flow`）可以推断：维护者已识别出 9.1 发布流程中暴露的多个发布前置条件缺陷，单次发布损失约 6 小时，本次仅做流程加固，不引入运行时行为变化。
- 升级前建议在 Windows / WSL2 环境下特别留意 SQLite 完整性（参考 [#126821](https://github.com/openclaw/openclaw/issues/126821)），并在升级后运行 `openclaw doctor --fix`，但需注意 [#134938](https://github.com/openclaw/openclaw/issues/134938)（doctor --fix 死锁）虽已 CLOSED，Windows 用户应确认 [#136203](https://github.com/openclaw/openclaw/issues/136203) 与 [#137377](https://github.com/openclaw/openclaw/issues/137377) 中描述的遗留状态是否在本地清理完成。

---

## 3. 项目进展

今日没有超大 PR 合入主干，但合并/关闭矩阵体现出项目在多个高风险路径上"小步快跑"：每个 PR 都聚焦于一个明确的缺陷或运营痛点，单点修复闭环清晰。

**代表性已合并/关闭 PR（按修复领域）**

| PR | 标题 | 影响领域 |
|---|---|---|
| [#137637 (CLOSED)](https://github.com/openclaw/openclaw/pull/137637) | `fix(release): fail fast on publish prerequisites and harden the release flow` | 发布工程，使 2026.9.1 暴露的 6 小时发布故障在下一版本前置失败 |
| [#134307 (CLOSED)](https://github.com/openclaw/openclaw/issues/134307) | OAuth MCP servers absent on `claude-cli` | 多后端一致性 |
| [#125344 (CLOSED)](https://github.com/openclaw/openclaw/issues/125344) | memory-core / codex 进程无 idle TTL 泄漏 | 资源回收 |
| [#124284 (CLOSED)](https://github.com/openclaw/openclaw/issues/124284) | vLLM openai-completions + thinking 子代理失败（XML 工具调用损坏） | 模型兼容性回退 |
| [#135970 (CLOSED)](https://github.com/openclaw/openclaw/issues/135970) | codex 插件 `dist/extensions/codex` 缺失 `node_modules` | 安装/分发 |
| [#134938 (CLOSED)](https://github.com/openclaw/openclaw/issues/134938) | doctor --fix 在 legacy exec-approvals 卡死 | 升级修复路径 |
| [#134179 (CLOSED)](https://github.com/openclaw/openclaw/issues/134179) | Gateway 无法启动：legacy `exec-approvals.json` 未导入/未隔离 | 升级迁移 |
| [#137377 (CLOSED)](https://github.com/openclaw/openclaw/issues/137377) | Windows doctor --fix 最后一步失败 | Windows 升级 |

**整体推进程度**：项目从"集中暴露稳定版问题"过渡到"逐个收口 P0/P1"阶段，过去 24 小时共关闭 136 条 Issue 与 90 条 PR（合并或关闭）。从修复密度来看，**升级/迁移路径**与**memory-core 资源治理**是当前最有效的两条推进主线。

---

## 4. 社区热点

按评论数排序的 TOP 讨论：

1. **[#125626](https://github.com/openclaw/openclaw/issues/125626)（24 条评论，OPEN，maintainer）** — *OpenClaw 2026.8.1 beta 反馈贴*。这是 release validation 标准贴，承载了 beta 周期内社区汇总的几乎所有 regression 报告，相当于 8.1 版本的"健康仪表盘"。维护者已标记为 P2 并加入 release-validation 标签，预计在 8.1 标记 stable 后归档。
2. **[#114612](https://github.com/openclaw/openclaw/issues/114612)（11 条评论，OPEN）** — *memory-core SQLite 无限增长*。用户以生产实例给出实测证据，要求对 `memory_index_chunks` 与 `memory_embedding_cache` 增加保留/淘汰策略。这是长期债务类问题，对应 PR [#137816](https://github.com/openclaw/openclaw/pull/137816)（`sweep legacy .tmp-<uuid> reindex shadows`）今日新开，但仅清理影子文件、不解决主表保留。
3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)（10 条评论，1 👍，OPEN）** — *Hook/工具子进程泄漏为僵尸*。与 [#125344](https://github.com/openclaw/openclaw/issues/125344)、[#86119](https://github.com/openclaw/openclaw/issues/86119) 形成"进程泄漏三联报告"，反映了 gateway 在资源回收上的系统性短板。尚无直接 fix PR。
4. **[#110190](https://github.com/openclaw/openclaw/issues/110190)（9 条评论，1 👍）** — *运行时上下文载体位置导致模型严重混淆*。定位非常具体：~15K 的 session metadata 被错误地插入到用户真实消息之后，造成 token 浪费和推理漂移；与 [#123265](https://github.com/openclaw/openclaw/issues/123265)、[#123652](https://github.com/openclaw/openclaw/issues/123652) 共同指向 runtime context carrier 设计问题，是当前 P1 中讨论最密集的一类。
5. **[#39406](https://github.com/openclaw/openclaw/issues/39406)（9 条评论，1 👍）** — *抑制瞬态工具错误警告的配置项*。这条诉求背后是大量用户的 UX 摩擦：agent 重试成功但中途失败信息仍被推送给用户，造成"假错误"。
6. **[#72741](https://github.com/openclaw/openclaw/issues/72741)（9 条评论，1 👍，security/enhancement）** — *外部安全/护栏检查的标准接口*。来自企业用户的强需求，目前仍为 OPEN 状态，是平台化方向的重要信号。

**诉求分析**：今日热点可归纳为三条主线——(a) **数据层/资源治理的长期债务**（#114612、#97616、#86119、#125344）；(b) **会话与上下文模型的语义正确性**（#110190、#123265、#123652、#118185）；(c) **面向企业/多渠道的安全与体验补强**（#72741、#39406、#125764、#135704）。

---

## 5. Bug 与稳定性

按严重程度排序的开放 Bug：

### 🔴 P0（发布阻塞 / 数据完整性）

| Issue | 简述 | 是否有 fix PR |
|---|---|---|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | **SQLite corruption 反复出现**（2026.8.1-beta.2，WSL2），全新重建 DB 在 15–24h 内再次 freelist miscount，伴随"瘫痪 gateway"模式（拒服务但不退出） | ❌ 无 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | **Windows de-DE 2026.8.2 升级阻塞**：Doctor maintenance 卡住，遗留 workspace 状态未清理 | ✅ [#137683](https://github.com/openclaw/openclaw/pull/137683) 已 OPEN（仅修复 deep scan 语言检测） |
| [#123327](https://github.com/openclaw/openclaw/issues/123327) | **Shared state WAL checkpoint 把索引页覆盖到 page 1**（Raspberry Pi 5 / NVMe / ext4），连续两次发生 | ❌ 无 |
| [#136148](https://github.com/openclaw/openclaw/issues/136148) | **Linux Desktop 2026.8.2 AppImage WebKitWebProcess SIGABRT**（Hyprland/Wayland + XWayland），空白窗口 | ❌ 无 |

### 🟠 P1（功能/可用性严重退化）

- [#97616](https://github.com/openclaw/openclaw/issues/97616) — Hook/工具子进程泄漏为僵尸 — 无 PR
- [#110190](https://github.com/openclaw/openclaw/issues/110190) — runtime context carrier 错位 — 无 PR
- [#123799](https://github.com/openclaw/openclaw/issues/123799) — Codex compact 404 升级/回退指引 — 无 PR
- [#115642](https://github.com/openclaw/openclaw/issues/115642) — billing cooldown 持续 5h，建议基于 probe 恢复 — 无 PR
- [#118185](https://github.com/openclaw/openclaw/issues/118185) — claude-cli 同一回合被写入 transcript 两次 — 无 PR（[`clawsweeper:linked-pr-open`]）
- [#125570](https://github.com/openclaw/openclaw/issues/125570) — Skill Workshop update 覆盖 live skill description，路由静默失效 — 无 PR
- [#126906](https://github.com/openclaw/openclaw/issues/126906) — `tools.deny` 静默禁用 memory 持久化 — 无 PR
- [#127176](https://github.com/openclaw/openclaw/issues/127176) — Windows 上 CLI/Node Host 设备元数据交替变更 — 无 PR
- [#127148](https://github.com/openclaw/openclaw/issues/127148) — Codex `sessions.compact` 占用第二个 app-server 触发 active-writer 冲突 — 无 PR
- [#127239](https://github.com/openclaw/openclaw/issues/127239) — deepseek-v4-flash context window 回退到硬编码 200k（catalog 实际 1M）— 无 PR
- [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram 适配器网络失败后 dead-letter 一次，无重试/对账 — 无 PR
- [#135111](https://github.com/openclaw/openclaw/issues/135111) — 间歇性 `malformed JSON arguments` on claude-sonnet-5 — 无 PR
- [#136311](https://github.com/openclaw/openclaw/issues/136311) — memory-core 重索引锁被 Gateway 持续占有，索引不可重建；19GB 孤儿 temp DB — 无 PR
- [#136175](https://github.com/openclaw/openclaw/issues/136175)（1 👍） — 2026.8.2 全量 memory 重新索引打满 CPU 阻塞诊断 — 无 PR

### 🟡 P2（中度 / 体验）

- [#125079](https://github.com/openclaw/openclaw/issues/125079) — WhatsApp 入站崩溃（作者已主动撤回中心论断，但 Bug 仍 OPEN）— 无 PR
- [#125640](https://github.com/openclaw/openclaw/issues/125640) — Memory index 在 item-count 批限制上仍失败（#80226 实质未修）— 无 PR
- [#126631](https://github.com/openclaw/openclaw/issues/126631) — 沙箱 skills bind-mount 创建 root-owned 目录，uid 1000 被锁 — 无 PR
- [#123265](https://github.com/openclaw/openclaw/issues/123265) — `display:false` 的 custom 运行时上下文被序列化为尾随 user 消息 — 无 PR
- [#137705](https://github.com/openclaw/openclaw/openclaw/issues/137705) — Telegram 流式路径泄漏原始 `[label](file:///)` Markdown（impact:security）— 无 PR
- [#126874](https://github.com/openclaw/openclaw/issues/126874) — **Windows CI 仅运行 66/10979 测试文件**，skipped 的 checks-windows 仍被计为通过 — 无 PR（流程性问题）

### ✅ 已 CLOSED 的高价值修复

- [#125344](https://github.com/openclaw/openclaw/issues/125344) — memory-core / codex app-server 进程无 idle TTL（memory-core 资源治理）
- [#124284](https://github.com/openclaw/openclaw/issues/124284) — vLLM `openai-completions` 子代理失败
- [#134307](https://github.com/openclaw/openclaw/issues/134307) — `auth: "oauth"` MCP servers 在 claude-cli 下缺失
- [#134938](https://github.com/openclaw/openclaw/issues/134938) — doctor --fix 死锁在 legacy exec-approvals
- [#134179](https://github.com/openclaw/openclaw/issues/134179) — Gateway 启动时 legacy exec-approvals.json 未导入/未隔离
- [#137377](https://github.com/openclaw/openclaw/issues/137377) — Windows doctor --fix 最后重启步骤失败
- [#135970](https://github.com/openclaw/openclaw/issues/135970) — codex 插件缺少 node_modules

**健康度提示**：P0 队列中 4 条 OPEN、0 条有直接修复 PR；建议维护者优先对 #126821（SQLite 反复损坏）和 #136148（Linux 桌面启动崩溃）分配 owner。

---

## 6. 功能请求与路线图信号

按"是否已有 PR 跟进 / 是否反映明确方向"筛选：

| Issue | 标题 | 跟进 PR | 方向判断 |
|---|---|---|---|
| [#72741](https://github.com/openclaw/openclaw/issues/72741) | 外部安全/护栏检查的标准接口 | ❌ | 平台化方向，企业用户呼声最高，**强烈建议纳入下一稳定版路线图** |
| [#39406](https://github.com/openclaw/openclaw/issues/39406) | 抑制瞬态工具错误警告 | ❌ | 体验补强，门槛低 |
| [#127208](https://github.com/openclaw/openclaw/issues/127208) | 新增 `/followup

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告

**日期：2026-09-04** ｜ 数据来源：13 个项目的官方 GitHub 仓库日报

---

## 一、生态全景

2026-09-04 当日，生态呈现明显的**"头部加速 + 尾部沉寂"**的两极分化：第一梯队（OpenClaw、ZeroClaw、Hermes Agent、CoPaw/QwenPaw）单日 issue/PR 更新均在 30–500 量级，第二梯队（NanoBot、NanoClaw、IronClaw）维持中高强度迭代，而 NullClaw、TinyClaw、Moltis、ZeptoClaw、LobsterAI 等 5 个项目当日 0 活动，生态集中度抬升明显。

从议题分布看，**内存/数据层稳定性、Provider 抽象、沙箱安全、多渠道一致性、可观测性**五个主题在多项目间同步爆发，说明生态已从"功能比拼"进入**"基础设施质量 + 平台化能力"**的下半场竞争；多条主线已形成跨项目共识（详见第四节），意味着后续差异化空间将更多来自**工程治理能力**与**目标场景精度**。

---

## 二、各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 已关闭/合并 | Release | 阶段判断 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（364 活 / 136 关） | 500（410 待 / 90 关） | 226 | **v2026.9.1** ✅ | 质量巩固期 | ⭐⭐⭐⭐⚪ |
| **ZeroClaw** | 50 | 50（**全部待合并**） | 14 issues / **0 PR** | 无 | 评审密集 + 修复积压 | ⭐⭐⭐⚪⚪ |
| **Hermes Agent** | 50（46/4） | 50（48/2） | 6 | 无 | 修 bug + 大重构并行 | ⭐⭐⭐⭐⚪ |
| **CoPaw (QwenPaw)** | 30（22/8） | 29（20/9） | 17 | **v2.2.0** ✅ | 重大版本刚发布 + 集中修复 | ⭐⭐⭐⭐⚪ |
| **NanoClaw** | 5（4/1） | 23（20/3） | 4 | 无 | 结构性重构期 | ⭐⭐⭐⭐⚪ |
| **NanoBot** | 4 | 25（12/13） | 14 | 无 | 高收敛期 | ⭐⭐⭐⭐⚪ |
| **IronClaw** | 7（4/3） | 18（9/9） | 12 | 无 | 类型化战役 + LLM 性能 | ⭐⭐⭐⭐⚪ |
| **PicoClaw** | 5 | 8（7/1） | 1 | 无 | 长尾维护 + Stale 偏多 | ⭐⭐⚪⚪⚪ |
| **NullClaw** | 0 | 0 | 0 | — | 沉寂 | ⚪⚪⚪⚪⚪ |
| **TinyClaw** | 0 | 0 | 0 | — | 沉寂 | ⚪⚪⚪⚪⚪ |
| **Moltis** | 0 | 0 | 0 | — | 沉寂 | ⚪⚪⚪⚪⚪ |
| **ZeptoClaw** | 0 | 0 | 0 | — | 沉寂 | ⚪⚪⚪⚪⚪ |
| **LobsterAI** | — | — | — | — | 数据缺失 | — |

**关键观察**：ZeroClaw 50 条 PR 合并吞吐为零、待合并队列阻塞是其最大风险信号；OpenClaw 与 CoPaw 是当日**唯二**完成正式 release 的项目；OpenClaw 单日 500+500 的活跃量约为生态中位数的 **10 倍**。

---

## 三、OpenClaw 在生态中的定位

### 1. 规模维度
OpenClaw 当日 Issue/PR 更新均为 **500 条**，体量是 Hermes Agent / ZeroClaw（均为 50/50）的 **10 倍**，是 NanoBot（4/25）的近 **20 倍**。这种规模优势带来两个后果：(a) 真实用户场景覆盖最广，因此 P0 风险面也最宽（4 条 P0 OPEN、SQLite 反复损坏、Windows/Linux 多平台崩溃）；(b) 单点修复密度高（24h 关闭 136 issue + 90 PR），证明维护链路运转有效。

### 2. 与同类项目的关键差异

| 维度 | OpenClaw | NanoBot | NanoClaw | Hermes Agent | ZeroClaw | CoPaw |
|---|---|---|---|---|---|---|
| **平台覆盖** | macOS/iOS/Android/Win/Linux/Web 全平台 | Web + 多 IM 通道 | CLI + 多 IM + Web | Desktop 重（Electron） | 服务端 + 多 IM | Web/Desktop + 多租户 Hub |
| **Release 节奏** | 高频（v2026.9.1） | 收敛中、待 0.3.1 | 重构期、无 release | 暂停、大 PR 在评 | 评审密集、无 release | 稳定（v2.2.0） |
| **当前主线** | 平台一致性 + memory 治理 | WebUI + 多语言 | Provider 契约化重构 | God file 治理 | 安全沙箱 + 可观测性 | 多租户 Hub + 安全契约 |
| **典型用户痛点** | SQLite/Win 升级长尾 | iOS PWA + i18n | CLI 边界 + SQLite PRAGMA | Desktop 卡/错/掉 | VI 凭证链校验 | 模型切换 UX + 沙箱绕过 |
| **架构风格** | 全平台一致体验 | 轻量多渠道 | 声明式契约 + 安装校验 | 集中客户端 | 严格安全治理 | 中文场景 + 多租户 |

**优势**：平台广度（唯一覆盖五大平台 + 原生 Mermaid 渲染）、发布节奏（高频稳定 release）、多后端一致性（claude-cli、codex、vLLM 并行支持）。

**短板**：P0 队列 4 条 OPEN 中 0 条带 fix PR（#126821 SQLite 反复损坏、#123327 WAL 覆盖 page 1、#136148 Linux WebKit SIGABRT），稳定性债务高于同期 Hermes / CoPaw；Doctor 死锁虽已 CLOSED 但 Windows 升级路径仍有遗留状态未清理。

---

##

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-04

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库
> 统计窗口：2026-09-03 至 2026-09-04

---

## 一、今日速览

NanoBot 今日维持**高活跃、强收敛**的开发节奏。过去 24 小时内仓库共处理 **29 条更新事件**（4 个 Issue + 25 个 PR），其中 **13 个 PR 已合并/关闭，12 个 PR 仍在评审中**，合并比超过 50%，反映出维护团队对积压响应积极。今日工作重心集中在 **WebUI 体验打磨、Matrix/Signal 通道健壮性、Provider 可靠性** 三大方向；尤其 WebUI 相关 PR 占比接近一半，说明前端迭代是当前主线。Issue 端新增 3 个、关闭 1 个，整体净增长为 +3，处于**轻量新增**状态。

---

## 二、版本发布

⚠️ **今日无新版本发布。**

但从 Issue [#5645](https://github.com/HKUDS/nanobot/issues/5645) 的描述可知，社区已开始在生产中使用 `nanobot-ai 0.3.0`，并发现 0.2.2 → 0.3.0 的行为回归（见下文"Bug 与稳定性"章节）。建议维护者尽快评估是否需要 **0.3.1 补丁版本** 来修复该回归。

---

## 三、项目进展

### ✅ 今日合并/关闭的重要 PR（13 个）

#### WebUI 体验优化

- **[#5514 fix(webui): clear stale stream state after Gateway reconnect](https://github.com/HKUDS/nanobot/pull/5514)** — 关闭 [#5512](https://github.com/HKUDS/nanobot/issues/5512)，修复 Gateway 重启后 WebUI 长期卡在"spinning"状态的问题。根因是 `useNanobotStream` 未订阅 `onRunStatus`，导致 `isStreaming` 无法复位。
- **[#5646 fix(webui): show language names only in their native form](https://github.com/HKUDS/nanobot/pull/5646)** — 语言选择器仅显示母语名称（如"中文"而非"Chinese"），并清理未使用的英文显示名，提升本地化与国际化体验。

#### Matrix / Signal 通道健壮性

- **[#5385 fix(matrix): complete Element SAS request flow](https://github.com/HKUDS/nanobot/pull/5385)** — 完整对接现代 Element `m.key.verification.request` 事件，复用现有 SAS 加密流程；区分过期/未来/冲突请求。
- **[#5637 fix(matrix): propagate stream delivery failures](https://github.com/HKUDS/nanobot/pull/5637)** — `send_delta()` 此前吞掉发送失败并提前清空流缓冲，现允许其走 ChannelManager 重试策略。
- **[#5472 fix(signal): honor wildcard in inbound allowlists](https://github.com/HKUDS/nanobot/pull/5472)** — Signal DM/群组允许列表中的 `*` 通配符不再被忽略。
- **[#5334 fix(channels): preserve indentation across message splits](https://github.com/HKUDS/nanobot/pull/5334)** — 修正 `split_message` 在硬切分后丢失缩进的 Bug，并保持 Signal UTF-16 偏移对齐。

#### Provider / SDK 可靠性

- **[#5413 fix(providers): apply fallback policy to raised errors](https://github.com/HKUDS/nanobot/pull/5413)** — 当 LLM provider 抛异常而非返回 `LLMResponse(finish_reason="error")` 时，回退链仍按既有错误策略生效，避免异常逃逸。
- **[#5632 fix(provider): preserve Codex prompt cache affinity](https://github.com/HKUDS/nanobot/pull/5632)** — Codex `session-id` 与 Responses `prompt_cache_key` 使用同一稳定 SHA-256 派生键，保持提示缓存亲和性。
- **[#5635 fix(sdk): preserve queued events on stream close](https://github.com/HKUDS/nanobot/pull/5635)** — 修复流队列满时关闭会丢弃最早未读事件的 Bug，避免事件丢失。

#### 其他修复

- **[#5515 fix(agent): observe session reply timeout task failures](https://github.com/HKUDS/nanobot/pull/5515)** — `SendSessionMessageTool` 超时任务失败不再被静默丢弃，仅正常取消保持静默。
- **[#5629 fix(tool_hints): respect max_length for plain tool values](https://github.com/HKUDS/nanobot/pull/5629)** — `grep` 模式、`web_search` 查询等普通 tool 参数现在也受 `max_length` 截断约束。
- **[#5634 fix(channels): bound origin reply fingerprint cache](https://github.com/HKUDS/nanobot/pull/5634)** — 出站回复指纹缓存从无限增长改为有界，防止长跑 Gateway 内存泄漏。

**整体评估**：今日合并的 13 个 PR 几乎全部为 **P2 级别的 Bug 修复**，覆盖 WebUI、Channel、Provider、SDK、Agent 五个模块，**没有引入破坏性变更**，意味着项目整体在稳步向 0.3.x 的稳定性目标推进。

---

## 四、社区热点

> 注：今日 Issues/PR 的评论数据较少（多为 0 或 1），社区讨论**偏冷**。以下为按话题关注度和潜在影响筛选出的热点。

| 话题 | 关联 Issue/PR | 关注理由 |
|---|---|---|
| **WebUI iOS PWA 体验** | [#5641](https://github.com/HKUDS/nanobot/pull/5641), [#5640](https://github.com/HKUDS/nanobot/pull/5640) | 双 PR 同日提交，针对移动端输入与点击，揭示移动端使用是真实活跃场景 |
| **WebUI 会话标题生成回归** | [#5647](https://github.com/HKUDS/nanobot/issues/5647) ↔ [#5648](https://github.com/HKUDS/nanobot/pull/5648) | Issue-PR 即时配对，反映用户对 `unifiedSession` 模式下多聊标题管理的强需求 |
| **0.3.0 Current Time 上下文回归** | [#5645](https://github.com/HKUDS/nanobot/issues/5645) | 文档与行为不符，影响依赖时区信息的代理逻辑，是高优先级一致性缺陷 |
| **多语言支持** | [#5644](https://github.com/HKUDS/nanobot/issues/5644), [#5646](https://github.com/HKUDS/nanobot/pull/5646) | 并发加载时丢失 locale 数据 + 母语化展示，呼应非英语用户的实际诉求 |

**热点分析**：表面评论数不高，但今天**议题集中度极高**——约 60% 的更新围绕 WebUI 展开。这表明 NanoBot 用户中相当比例在使用 WebUI（而非纯 CLI/TUI），并且**多语言 + 多端体验**已成为下一阶段的核心体验痛点。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 高优先级（行为/数据正确性）

1. **[#5645 Current Time runtime context absent in 0.3.0](https://github.com/HKUDS/nanobot/issues/5645)**
   - **严重度**：高（功能与文档不符）
   - **症状**：`nanobot-ai 0.3.0` 默认不再注入"当前时间"运行时上下文，0.2.2 行为被破坏
   - **影响**：依赖时区感知的代理（如定时任务、基于当前时间的对话）将得到错误结果
   - **修复 PR**：❌ 暂无

2. **[#5644 Channel locale registry race condition](https://github.com/HKUDS/nanobot/issues/5644)**
   - **严重度**：高（启动期数据丢失）
   - **症状**：`loadChannelLocale()` 在并发加载两个 locale 时可能丢失其中一个
   - **影响**：部分 channel 在某些 locale 下回退到英文
   - **修复 PR**：❌ 暂无

### 🟡 中优先级（功能降级）

3. **[#5647 session title not generated when frontend envelope lacks webui flag](https://github.com/HKUDS/nanobot/issues/5647)**
   - **严重度**：中（[#5528](https://github.com/HKUDS/nanobot/pull/5528) 引入的回归）
   - **症状**：`unifiedSession` 模式下，前端 envelope 缺 `webui` flag 时不会生成会话标题
   - **修复 PR**：✅ 已有 [#5648](https://github.com/HKUDS/nanobot/pull/5648) 待合并

### ✅ 今日已修复（汇总）

- [#5514](https://github.com/HKUDS/nanobot/pull/5514) Gateway 重启后 WebUI 卡死
- [#5637](https://github.com/HKUDS/nanobot/pull/5637) Matrix 流送达失败被吞
- [#5472](https://github.com/HKUDS/nanobot/pull/5472) Signal 通配符失效
- [#5334](https://github.com/HKUDS/nanobot/pull/5334) 消息切分后缩进丢失
- [#5413](https://github.com/HKUDS/nanobot/pull/5413) Provider 异常逃逸回退链
- [#5632](https://github.com/HKUDS/nanobot/pull/5632) Codex 提示缓存亲和性丢失
- [#5635](https://github.com/HKUDS/nanobot/pull/5635) SDK 流关闭丢事件
- [#5515](https://github.com/HKUDS/nanobot/pull/5515) 会话回复超时任务失败被静默
- [#5629](https://github.com/HKUDS/nanobot/pull/5629) 工具提示未截断
- [#5634](https://github.com/HKUDS/nanobot/pull/5634) 出站指纹缓存无限增长
- [#5385](https://github.com/HKUDS/nanobot/pull/5385) Element SAS 验证流程不完整
- [#5646](https://github.com/HKUDS/nanobot/pull/5646) 语言选择器显示英文名（虽列为修复，本质为 UX 问题）

---

## 六、功能请求与路线图信号

| 请求/特性 | 关联 PR | 状态 | 路线图可能性评估 |
|---|---|---|---|
| **Cron 可配置投递与批量归档** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) | 待合并 | ⭐⭐⭐⭐ 明确补齐 cron 生命周期管理，是 v0.4 候选 |
| **WebUI 可视化上下文复用** | [#5649](https://github.com/HKUDS/nanobot/pull/5649) | 待合并 | ⭐⭐⭐⭐ 将 token 使用从每条消息上移至 composer popover，呼应"上下文工程"趋势 |
| **iOS PWA 移动端键盘与点击** | [#5640](https://github.com/HKUDS/nanobot/pull/5640), [#5641](https://github.com/HKUDS/nanobot/pull/5641) | 待合并 | ⭐⭐⭐⭐ 双 PR 同时推进，说明移动端已是核心场景，建议并入下一小版本 |
| **模型重试状态可视化** | [#5504](https://github.com/HKUDS/nanobot/pull/5504) (NAN-34) | 待合并 | ⭐⭐⭐ 与 [#5649](https://github.com/HKUDS/nanobot/pull/5649) 互补，共同完善 TUI/WebUI 状态呈现 |
| **Codex OAuth 令牌持久化** | [#5446](https://github.com/HKUDS/nanobot/pull/5446) | 待合并（标记 conflict） | ⭐⭐⭐ 解决"令牌存放在项目目录外"的体验问题，需解决冲突 |

**信号解读**：今日开放的 PR 中**没有任何"破坏性 API 变更"**，所有功能均向后兼容。这意味着项目处于**收敛期**，下一版本（推测为 0.3.1 或 0.4.0）很可能以 **WebUI 体验 + Channel 健壮性** 为主题，而不是引入大特性。

---

## 七、用户反馈摘要

> 由于今日多数 Issue/PR 评论数 ≤ 1，以下从描述文本中提炼的真实场景诉求：

- 🔸 **WebUI 重连体验**（[#5512](https://github.com/HKUDS/nanobot/issues/5512)）：用户报告 Gateway 重启后聊天界面卡死，"看上去像挂起，但后端可能已完成"。说明 **WebUI 流式状态机** 与 Gateway 生命周期对齐仍需继续打磨。
- 🔸 **多语言用户尊严**（[#5646](https://github.com/HKUDS/nanobot/pull/5646)）：设计者明确表态"语言选择器不应要求用户先懂英语"——这是一个**有价值观的功能**，反映项目对非英语用户的尊重。
- 🔸 **统一会话模式下的标题管理**（[#5647](https://github.com/HKUDS/nanobot/issues/5647)）：用户希望 `unifiedSession` 模式下每个 chat 仍有独立标题，说明项目存在**多会话并行使用场景**。
- 🔸 **0.3.0 时区回归**（[#5645](https://github.com/HKUDS/nanobot/issues/5645)）：用户反映"0.2.2 自动添加 Current Time 上下文，0.3.0 没了"。这是典型的**版本升级未同步文档/行为**问题，且影响所有依赖时区的代理，**满意度信号偏负面**。
- 🔸 **iOS PWA 真实使用**（[#5641](https://github.com/HKUDS/nanobot/pull/5641)）：描述中提到 `:hover` 在 iOS Safari 触发的祖先链样式副作用，这是**只有真实在 iOS 上使用 PWA 的用户**才会遇到的细节，说明移动端用户已**实质存在**。

---

## 八、待处理积压

### ⚠️ 长期未合并的重要 PR（建议维护者关注）

| PR | 创建日期 | 状态 | 备注 |
|---|---|---|---|
| [#5504 fix(ui): surface model retry status (NAN-34)](https://github.com/HKUDS/nanobot/pull/5504) | 2026-08-24 | 待合并 11 天 | 关联 NAN-34 内部工单，已为 issue 但仍开放 |
| [#5446 fix(codex): persist OAuth tokens](https://github.com/HKUDS/nanobot/pull/5446) | 2026-08-19 | 待合并 16 天，**标记 conflict** | 需要 rebase |
| [#5620 feat(cron): configurable delivery and batch archive](https://github.com/HKUDS/nanobot/pull/5620) | 2026-09-01 | 待合并 3 天 | 功能完整，建议优先评审 |

### 🚨 无对应 PR 的开放 Bug（需维护者分流）

| Issue | 严重度 | 风险 |
|---|---|---|
| [#5645](https://github.com/HKUDS/nanobot/issues/5645) | 高 | 0.3.0 文档-行为不一致，影响所有依赖时区的代理 |
| [#5644](https://github.com/HKUDS/nanobot/issues/5644) | 高 | 启动期并发 locale 加载竞态，非确定性 Bug |

---

## 📊 项目健康

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-04** ｜ 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日维持高强度开发节奏，过去 24 小时共产生 **50 条 Issue 更新**（46 活跃 / 4 已关闭）和 **50 条 PR 更新**（48 待合并 / 2 已关闭），社区活跃度处于近期高位。讨论焦点高度集中于 **Desktop 客户端交互缺陷**（composer 拖拽、消息中断、连接卡死）与 **`hermes serve` / plugin 钩子注册失效**这一 P0/P1 级稳定性问题，两条主要 PR（#102117 全代码库瘦身、#102615 PeriodicScheduler 修复）正在被评审。整体来看，项目进入"密集修 bug + 大重构并行"阶段，社区贡献者分布广泛（>20 位独立提交者），健康度良好。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前 main 分支（参考 PR #102117 引用的 `63279c8`）尚未发布新的 tag。建议关注 P1 级修复（cron dispatch、serve 钩子、prompt cache）合入后是否会触发 patch 版本。

---

## 3. 项目进展

过去 24 小时 **合入 / 关闭 PR 共 2 条**，重要变更如下：

| PR | 标题 | 影响 |
|---|---|---|
| [#102605](https://github.com/NousResearch/hermes-agent/pull/102605) (已关闭) | Fix Windows ACP terminal hangs from inherited stdout handles | 修复 Windows 下 Hermes 终端在 ACP 客户端中初始化挂起的问题（pipe 句柄继承导致 `bash` 孙子进程持有 stdout） |
| [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) (Issue 已关闭) | Cron delivery failures silently swallowed | 隐式吞掉投递错误的 cron 失败问题被标记关闭（关联 PR 未在今日合入的 2 条之中，但 Issue 已收尾） |

**重大里程碑（仍在评审中）：**

- **[#102117](https://github.com/NousResearch/hermes-agent/pull/102117)** — `refactor: whole-codebase simplification −35.6% LOC`
  - 作者：[teknium1](https://github.com/nousresearch/hermes-agent)，创建于 2026-09-03
  - 范围覆盖 19 个组件（agent / cli / gateway / tools / tui / acp / cron / plugins / mcp / desktop / dashboard / portal / lsp / sessions / install-update）
  - 关键指标：源码 **1,063,826 → ~676k LOC（−36%）**，超大文件（>5k LOC）从 **37 个降至 6 个**，最大单文件约 7.1k
  - 强调 "**零行为变更**"，3 轮集成（cluster sweep → god-file extraction → 38 个文件切片）已 forward-port 至 `main`
  - 该 PR 是 Issue [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) "Repo-wide godfile eradication" 的关键推进，但 Issue 中提到"残余 2K 任务"——意味着即使合并，仍有大量后续工作

**整体推进度判断：** 今日为典型的"修复密集日"，新功能合入较少，但底层架构整顿（#102117）若通过将带来显著的可维护性提升。

---

## 4. 社区热点 🔥

按评论数排序的今日最活跃议题：

| 排名 | 议题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — Skills index is stale / degraded | 150 | 0 | OPEN |
| 2 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) — Godfile eradication: 残余 2K tasks | 79 | 0 | OPEN |
| 3 | [#38007](https://github.com/NousResearch/hermes-agent/issues/38007) — Desktop 系统托盘后台运行 | 8 | **13** | OPEN |
| 4 | [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) — `serve` 不注册 shell hooks | 7 | 0 | OPEN (dup) |
| 5 | [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) — Cron 投递错误被静默吞掉 | 7 | 0 | **CLOSED** |
| 6 | [#70422](https://github.com/NousResearch/hermes-agent/issues/70422) — Desktop composer 误拖拽 | 5 | 1 | OPEN |
| 7 | [#88621](https://github.com/NousResearch/hermes-agent/issues/88621) — Desktop 来信打断输入 | 5 | 0 | OPEN |

**诉求分析：**

- **#66616 / #78647**（高评论、零 👍）属于**自动化巡检 / 架构治理**类 bot-managed 议题，长期靠 cron workflow 推动，非用户驱动的真实痛点
- **#38007** 是真正的**用户呼声**：13 个 👍 在同类 feature 请求中显著突出，反映 Windows/Linux 桌面端"冷启动 5–10 秒"已成为普遍痛点，且伴随电池消耗 / 多任务切换问题
- **#69825 / #102504 / #102592** 三条互为重复 / 同一根因（`serve` 路径下 hooks 不注册），合计 11 条评论，指向一个被多用户独立报告的稳定性问题

---

## 5. Bug 与稳定性 🐛

### P1（最高优先级，已修复或修复中）

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#102486](https://github.com/NousResearch/hermes-agent/issues/102486) | systemd 249 上 cron worker dispatch 因 `OOMPolicy=kill` 被拒 | 暂无修复 PR |
| [#102574](https://github.com/NousResearch/hermes-agent/issues/102574) | 共享 PeriodicScheduler 单回调阻塞导致所有安全 timer 停顿 | **[#102615](https://github.com/NousResearch/hermes-agent/pull/102615)** (待合并) ✅ |
| [#102504](https://github.com/NousResearch/hermes-agent/issues/102504) | `hermes serve` 不注册 config.yaml shell hooks | **[#102613](https://github.com/NousResearch/hermes-agent/pull/102613)** (待合并) ✅ |
| [#102194](https://github.com/NousResearch/hermes-agent/issues/102194) | CLI 路径丢失 `api_content` sidecar → 提示缓存命中率塌方 | 暂无修复 PR |
| [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) | Cron 投递失败被静默吞掉 | **Issue 已关闭** ✅ |

### P2（重要缺陷，已有 fix 路径）

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#69825](https://github.com/NousResearch/hermes-agent/issues/69825) | `serve` 不注册 hooks（plugin 视角） | 同 #102504/#102592 修复链 |
| [#70422](https://github.com/NousResearch/hermes-agent/issues/70422) / [#101318](https://github.com/NousResearch/hermes-agent/issues/101318) | Desktop composer 拖拽误触 | **[#102609](https://github.com/NousResearch/hermes-agent/pull/102609)** (待合并) ✅ |
| [#88621](https://github.com/NousResearch/hermes-agent/issues/88621) | Desktop 来信打断 composer 输入 | 暂无 |
| [#96743](https://github.com/NousResearch/hermes-agent/issues/96743) | SSH remote 后端"Connecting…" 卡 9 分钟 | 暂无 |
| [#101321](https://github.com/NousResearch/hermes-agent/issues/101321) | macOS Desktop Grok 渲染替换旧答案 | 暂无 |
| [#102511](https://github.com/NousResearch/hermes-agent/issues/102511) | `hermes cron run` 超时后状态变 `unknown` | 暂无 |
| [#102566](https://github.com/NousResearch/hermes-agent/issues/102566) | `finish_reason=stop` 仍被替换为 "[response interrupted]" | 暂无 |

### P3（低优先级 / 边缘场景）

- [#97296](https://github.com/NousResearch/hermes-agent/issues/97296) — macOS 27.0 beta 上 `Popen(start_new_session=True)` 触发 Network.framework SIGSEGV → worker 0 字节日志
- [#64638](https://github.com/NousResearch/hermes-agent/issues/64638) — Email IMAP poll 让 gateway SIGTERM 等待 `TimeoutStopSec`
- [#79231](https://github.com/NousResearch/hermes-agent/issues/79231) — Desktop steering message 渲染位置错误（[#102610](https://github.com/NousResearch/hermes-agent/pull/102610) 已提交测试 PR 锁住回归）
- [#102554](https://github.com/NousResearch/hermes-agent/issues/102554) — Discord 重连后 dashboard 状态不清理

**稳定性结论：** 5 个 P1 中有 3 个已有对应 fix PR 待合并，#102486 / #102194 是当日尚未被接管的"高危孤儿"，建议维护者优先 review。

---

## 6. 功能请求与路线图信号 💡

### 强信号（已伴随 PR，极可能合入）

| Feature | Issue | 对应 PR |
|---|---|---|
| Desktop 推理块排版主题化 | [#99793](https://github.com/NousResearch/hermes-agent/issues/99793) | [#102607](https://github.com/NousResearch/hermes-agent/pull/102607) |
| MoA configure 暴露 per-slot `max_tokens` | [#102584](https://github.com/NousResearch/hermes-agent/issues/102584) | [#102603](https://github.com/NousResearch/hermes-agent/pull/102603) |
| MoA configure 暴露 per-slot `reasoning_effort` | [#102582](https://github.com/NousResearch/hermes-agent/issues/102582) | [#102611](https://github.com/NousResearch/hermes-agent/pull/102611) |
| MoA 调整 slot 无需重选模型 | [#102585](https://github.com/NousResearch/hermes-agent/issues/102585) | [#102599](https://github.com/NousResearch/hermes-agent/pull/102599) |
| Desktop 会话列表显示 profile 标识 | [#102597](https://github.com/NousResearch/hermes-agent/issues/102597) | [#102601](https://github.com/NousResearch/hermes-agent/pull/102601) |
| Desktop composer 任务列表可见性切换 | (新功能) | [#102594](https://github.com/NousResearch/hermes-agent/pull/102594) |
| Connections 健康状态基础（profile-safe） | (新功能) | [#102612](https://github.com/NousResearch/hermes-agent/pull/102612) |

### 单一信号（无 PR，社区兴趣明确）

- **[#38007](https://github.com/NousResearch/hermes-agent/issues/38007) Desktop 系统托盘后台运行** — 👍 13，是今日最高赞 feature 请求
- **[#49942](https://github.com/NousResearch/hermes-agent/issues/49942) `mutating_tools` denylist for `delegate_task`** — subagent 安全治理需求
- **[#102552](https://github.com/NousResearch/hermes-agent/issues/102552) 自定义 OpenAI 兼容 provider 模型去重 / 隐藏**

### 路线图信号判断

下一小版本（patch）很可能集中修 bug + 简单 feature token 化（#102607 / #102601 / #102594）；Desktop 系统托盘（#38007）作为 13 👍 的强需求，建议列入下个 minor 版本。

---

## 7. 用户反馈摘要 💬

从 Issues 评论中提炼的真实用户场景与痛点：

1. **Desktop 体验"卡、错、掉"成为主旋律**
   - 多位用户（networthexplained、booth-orb）描述 composer 拖拽误触、来信打断、Grok 渲染顺序错乱——"让 Hermes Desktop 无法使用"（[#101321](https://github.com/NousResearch/hermes-agent/issues/101321) 原话）
   - 启动慢：Windows/Linux 用户每次都要经历 Electron + Python 后端 + 配置加载的冷启动（[#38007](https://github.com/NousResearch/hermes-agent/issues/38007)）

2. **"沉默失败"严重损害信任**
   - Cron 任务 `last_status: ok` 但实际投递失败（[#83993](https://github.com/NousResearch/hermes-agent/issues/83993)）——用户反馈"根本不知道发生了什么"
   - `serve` 模式下 hooks 配置解析通过但实际不触发（[#69825](https://github.com/NousResearch/hermes-agent/issues/69825)）——同样的"看起来工作但实际没工作"
   - Discord 重连后 dashboard 永远显示"启动失败"（[#102554](https://github.com/NousResearch/hermes-agent/issues/102554)）

3. **生态/平台碎片化加剧体验割裂**
   - macOS 27 beta 的 Network.framework fork 崩溃（[#97296](https://github.com/NousResearch/hermes-agent/issues/97296)）
   - systemd 249 不识别 `OOMPolicy=kill`（[#102486](https://github.com/NousResearch/hermes-agent/issues/102486)）
   - ACP 客户端下 Windows terminal pipe 句柄继承挂起（[#102605](https://github.com/NousResearch/hermes-agent/pull/102605) 已关闭）
   - OpenAI 兼容 provider（OmniRoute）模型重复且无法隐藏（[#102552](https://github.com/NousResearch/hermes-agent/issues/102552)）

4. **积极信号**
   - 多用户（b-rightstart、fangliquanflq、chelsealong）主动提交 PR 配合 issue 描述，Issue-to-PR 转换率较高
   - Profile-scoped connection health（[#102612](https://github.com/NousResearch/hermes-agent/pull/102612)）等架构性改进表明社区在主动思考长期可维护性

**总体情绪：** 不满意集中在 Desktop 客户端与"沉默失败"两类问题；对 CLI、cron、plugin 体系整体评价中性偏正面。

---

## 8. 待处理积压 ⚠️

以下为长期未响应或仍开放的重要 Issue / PR，建议维护者优先关注：

| 编号 | 标题 | 首次创建 | 距今 | 当前状态 |
|---|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index stale/degraded | 2026-07-18 | ~48 天 | 自动化巡检，150 评论但根因未根治 |
| [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Godfile eradication 2K residual | 2026-08-04 | ~31 天 | 关联 PR #102117 待合，仍需后续切片 |
| [#38007](https://github.com/NousResearch/hermes-agent/issues/38007) | Desktop 系统托盘后台运行 | 2026-06-03 | ~93 天 | 👍 13，仍无 PR |
| [#64638](https://github.com/NousResearch/hermes-agent/issues/64638) | Email IMAP poll 阻塞 gateway SIGTERM | 2026-07-14 | ~52 天 | 无 PR |
| [#49942](https://github.com/NousResearch/hermes-agent/issues/49942) | `

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-09-04**
**项目：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平。仓库过去 24 小时共产生 5 条 Issue 更新和 8 条 PR 更新，其中 PR 主要由 Dependabot 自动化依赖升级驱动（占 6/8），人工发起的实质性改动仅 2 个修复 PR。今日无新版本发布，多个旧 Issue 仍带有 `[stale]` 标签，说明项目维护响应存在一定积压。值得关注的是，两个相对受关注的 Bug（Web UI 卡顿、Slack 图片上传失败）已有对应 PR 待合并，整体技术债有缓解迹象。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

最新版本仍为社区中提及的 **0.3.1**，建议关注下一个小版本（可能是 0.3.2 或 0.4.0）何时发布，以纳入 Slack 媒体上传修复和 Web UI 性能优化。

---

## 3. 项目进展

今日实质性推进较为有限，主要体现在以下 PR：

- **PR #3347 [OPEN]** —— *fix laggy interface*（@iMilnb）：修复 Web UI 在聊天历史较长时输入卡顿的问题，作者声明已在桌面端和移动端 Brave 浏览器验证 `picoclaw-launcher` 构建。➡️ [sipeed/picoclaw#3347](https://github.com/sipeed/picoclaw/pull/3347)
- **PR #3340 [OPEN]** —— *fix(slack): set FileSize on media upload params*（@octavioturra）：修复 Slack 频道 `file.upload.v2` 因 `FileSize` 默认为 0 而被 SDK 拒绝的问题。➡️ [sipeed/picoclaw#3340](https://github.com/sipeed/picoclaw/pull/3340)
- **PR #3329 [CLOSED]** —— *fix(line): warn on inert webhook_host / webhook_port instead of seeding them*（@ex-takashima）：针对 LINE 频道未生效的 webhook 配置改为告警提示而非默默注入默认值，已被关闭。➡️ [sipeed/picoclaw#3329](https://github.com/sipeed/picoclaw/pull/3329)

**依赖升级（Dependabot 批量提交，尚未合并）：**

| PR | 升级内容 | 链接 |
|---|---|---|
| #3364 | aws-sdk-go-v2: 1.42.0 → 1.45.1 | [链接](https://github.com/sipeed/picoclaw/pull/3364) |
| #3363 | ergochat/irc-go: 0.6.0 → 0.7.0 | [链接](https://github.com/sipeed/picoclaw/pull/3363) |
| #3362 | golang.org/x/term: 0.44.0 → 0.45.0 | [链接](https://github.com/sipeed/picoclaw/pull/3362) |
| #3361 | protobuf: 1.36.11 → 1.36.12 | [链接](https://github.com/sipeed/picoclaw/pull/3361) |
| #3360 | larksuite/oapi-sdk-go: 3.9.4 → 3.11.0 | [链接](https://github.com/sipeed/picoclaw/pull/3360) |

整体来看，项目今日主要在「修 Bug + 升依赖」层面稳步推进，并未出现重大功能新增。

---

## 4. 社区热点

**讨论最活跃：** Issue #3281 —— *Web UI chat input is very laggy when history has a little bit long*

- 📊 9 条评论，👍 2 个（本日最高互动）
- 创建于 2026-07-21，至今仍为 Open 状态并标记 `[stale]`
- 用户痛点：长会话下输入框几乎不可用
- 🔥 该 Issue 已由 PR #3347 给出修复方案，建议优先合并以提升用户满意度
- ➡️ [sipeed/picoclaw#3281](https://github.com/sipeed/picoclaw/issues/3281)

**潜在热度信号：** Issue #3339（Antigravity 429 错误）虽然仅有 3 条评论，但反应的是 OAuth 鉴权成功却持续 429 的反直觉行为，属于 Provider 集成稳定性问题，3 条评论足以反映讨论深度。

---

## 5. Bug 与稳定性

按严重程度排列：

| 优先级 | Issue | 描述 | 影响范围 | 是否有修复 PR |
|---|---|---|---|---|
| 🔴 高 | [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Slack 频道无法上传图片（FileSize=0 导致 SDK 拒绝） | Slack 用户全部受影响 | ✅ PR [#3340](https://github.com/sipeed/picoclaw/pull/3340) 待合并 |
| 🔴 高 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长对话输入严重卡顿 | 所有 Web UI 用户 | ✅ PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) 待合并 |
| 🟠 中 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 频道鉴权失败（code 401, err_code 40011005） | QQ 频道用户全部不可用 | ❌ 无 |
| 🟡 低 | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Antigravity 返回 429，鉴权和模型发现均正常 | 仅 Google Antigravity 用户 | ❌ 已关闭，但根因未明 |
| 🟡 低 | [#3346](https://github.com/sipeed/picoclaw/issues/3346) | ARM 开发板上 RKLLM 回复异常（Qwen3.5-0.8B_w4） | 边缘设备 RKLLM 用户 | ❌ 无 |

⚠️ **注意：** QQ 频道鉴权失败（#3349）影响关键的中国用户群，且无对应 PR，建议维护者优先排查 Authorization Header 格式问题。

---

## 6. 功能请求与路线图信号

今日数据中**无明确的功能请求 Issue**，主要反馈集中在 Bug 修复。这意味着：

- 当前优先级是**稳定性修复而非功能扩展**
- Web UI 性能优化（#3281 → #3347）很可能成为下个版本的**主打修复点**
- 依赖升级 PR 集群（#3360–#3364）暗示维护者重视供应链安全，可能在近期统一合入

预期下一版本（若按 Bug 修复型发布）的可能内容：
1. Slack 媒体上传修复（#3340）
2. Web UI 性能优化（#3347）
3. Dependabot 批量依赖更新

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户声音：

- **😐 Web UI 用户体验痛点（#3281）：** "Keep try to input something in input box, it will be very laggy." —— 长会话场景下输入体验差，是高频使用者的主要抱怨。
- **😤 Slack 集成失效（#3338）：** 用户上传图片始终失败，但报错信息 `file size cannot be 0` 直接暴露了 SDK 使用方式不当，反映**错误提示不够友好**。
- **😡 QQ 频道完全无法使用（#3349）：** 测试过 Docker 与 Linux x86 两个版本均失败，鉴权报错 `"请求头Authorization参数格式错误"` 暗示客户端构建 URL 时存在持续性 bug。
- **🤔 边缘场景异常（#3346）：** ARM 开发板 + RKLLM + Qwen3.5-0.8B 模型组合下回复异常，截图显示输出明显异常（具体细节未在摘要中给出），需作者进一步补充信息。
- **👍 PR #3347 正面信号：** 作者 iMilnb 明确说明"已构建并验证无 lag"，且坦诚声明自己非 TS/Node 开发者，这种社区参与精神值得鼓励。

---

## 8. 待处理积压

以下 Issue/PR 已带 `[stale]` 标签或长期未响应，建议维护者重点关注：

| 编号 | 类型 | 创建时间 | 状态 | 说明 |
|---|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | 2026-07-21 | Open + Stale | 最热门讨论，但 PR #3347 待合并 |
| [#3346](https://github.com/sipeed/picoclaw/issues/3346) | Issue | 2026-08-27 | Open + Stale | 边缘设备用户群，影响 ARM 板用户 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Issue | 2026-08-17 | Open + Stale | 已有修复 PR #3340 但仍未合并 |
| [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Issue | 2026-08-17 | Closed + Stale | 关闭但根因未明，可能仍有用户受影响 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | PR | 2026-08-17 | Open + Stale | Slack 修复 PR，等待 review |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | PR | 2026-08-27 | Open | 最受欢迎的 Bug 修复 PR |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | Issue | 2026-08-30 | Open | QQ 频道全量失效，**无任何 PR** |

🚨 **重点提醒：** Issue #3349（QQ 频道失效）创建已超过一周仍无人响应，且无对应修复 PR，是中国用户最严重的可用性阻断问题，建议维护者尽快介入。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐☆☆ | 中等：Dependabot 撑场，人工活动较少 |
| 响应速度 | ⭐⭐☆☆☆ | 多个 Stale Issue 反映响应滞后 |
| 社区参与 | ⭐⭐⭐☆☆ | 有外部贡献者（@iMilnb、@octavioturra）提交 PR |
| 稳定性 | ⭐⭐☆☆☆ | 多平台集成存在未修复 Bug（QQ、Slack） |
| 发布节奏 | ⭐⭐☆☆☆ | 无近期版本发布迹象 |

---

*数据来源：GitHub REST API · 报告生成时间：2026-09-04*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-09-04** | [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日继续保持**高强度开发节奏**，过去 24 小时内共更新 5 个 Issues（4 活跃 / 1 关闭）与 23 个 PR（20 待合并 / 3 已关闭），活跃度处于近期高位。开发者协作呈现明显的**专题聚焦**：以 `zvi-fried` 为核心的 **Provider 契约重构系列**仍是主线（多条 PR 形成一条从声明、渲染到宿主/Setup/Runtime 的完整链路）；`mmv` 在 **Channel/Router 入站**方向推动 lazy resolution；`davekim917` 集中修补 **SQLite/Mailbox 层的并发与 PRAGMA 顺序**问题；`DawoudIO` 与 `glifocat` 则分别提出 CLI 与 agent-runner 的若干行为缺陷。整体而言项目处于**活跃重构期**，未释放新版本。

---

## 2. 版本发布

**无新版本发布**。当前主干变更集中在 PR 队列，尚未形成可发布的 release artifact。Provider 契约重构系列 PR 若合并，预计将进入下一个 minor 版本。

---

## 3. 项目进展（已关闭/合并的 PR）

| # | 标题 | 作者 | 影响范围 |
|---|------|------|----------|
| [#3461](https://github.com/qwibitai/nanoclaw/pull/3461) | **chore(deps)**: 全部 `@chat-adapter/*` + `chat` 从 4.29.0 升级到 4.38.1 | DawoudIO | 渠道适配器依赖同步，跨 9 个 minor 版本 |
| [#3126](https://github.com/qwibitai/nanoclaw/pull/3126) | **fix(agent-runner)**: 永不投递"沉默"内容、不投递 `<internal>` 思考块 | glifocat | agent-runner 核心行为修正，避免泄露内部推理 |
| [#3440](https://github.com/qwibitai/nanoclaw/pull/3440) | **fix(docker-driver)**: 修复 SELinux 阻塞挂载、组可写 rw 挂载、多余 NUL 字节 | dwalthour | 容器/安全/CLI/Provider 多区域 |

**进展评估**：
- **#3461 的关闭**代表依赖治理进入稳态，与 #3460（trunk 的 `chat` 升级）配套生效。
- **#3126 的关闭**显著改善用户可见的输出卫生——agent 不再因推理中间态被"误投递"产生混淆。
- **#3440 的关闭**修复了 Docker 驱动在 SELinux 启用环境下的多个落地问题，提升了企业 Linux 发行版的开箱可用性。

> 注：今日列表中显示的"CLOSED"还包括部分历史上开启的 PR，实质新增关闭为上述三项；项目在依赖、安全、行为正确性三条线上均有可见推进。

---

## 4. 社区热点（按评论/讨论热度）

### 活跃 Issue
- **[#3706](https://github.com/qwibitai/nanoclaw/issues/3706)**（1 评论，🆕）— `ncl groups config add-mount --container <path>` 接受绝对路径却静默生成双重嵌套的损坏路径。**这是用户最自然的输入方式**，文档却未声明必须为相对路径。
- **[#3426](https://github.com/qwibitai/nanoclaw/issues/3426)**（已关闭，今日更新）— `send_card` 文档承诺 callback 按钮，但 bridge 在 #2265 之后丢弃了所有无 `url` 的 actions，导致 agent 误判"平台不支持按钮"。

### 高关注 PR（多区域影响）
- **[#3440](https://github.com/qwibitai/nanoclaw/pull/3440)** — 同时涉及 containers / ncl-cli / providers / security，是近期少见的"跨栈修复"，反映 SELinux 兼容是跨多个用户群的高优先级问题。
- **[#3462](https://github.com/qwibitai/nanoclaw/pull/3462)** — `send_message` 在 mid-turn block 已经投递过相同内容时重复发送。关联 [#2404](https://github.com/qwibitai/nanoclaw/issues/2404)，属于**重复投递 bug 同族**。
- **[#2003](https://github.com/qwibitai/nanoclaw/pull/2003)** — 语音转写 V2（容器侧、默认 sovereign），重提 #1879，仍是"隐私优先的本地化语音栈"方向最受关注的提案。

**热点诉求分析**：社区对**文档与实际行为的对齐**（#3706、#3426）以及**重复/误投递的语义正确性**（#3462、#3126）有强烈共鸣——前者反映 DX 一致性，后者关乎 agent 在多通道环境下的可信度。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 已有 fix？ |
|--------|----------|------|-----------|
| 🔴 **高** | [#3462](https://github.com/qwibitai/nanoclaw/pull/3462) | `send_message` 与 mid-turn block 重复投递相同内容 | ✅ PR 已开（待合并） |
| 🟠 **中高** | [#3705](https://github.com/qwibitai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` 不重算 `process_after`，任务卡在旧 cron 的下一触发点 | ❌ 尚无 fix PR |
| 🟠 **中高** | [#3706](https://github.com/qwibitai/nanoclaw/issues/3706) | `--container` 接受绝对路径却生成双重嵌套的损坏路径 | ❌ 尚无 fix PR |
| 🟡 **中** | [#3709](https://github.com/qwibitai/nanoclaw/issues/3709) | Mailbox SQLite 测试固定 `/tmp` 路径，并发 vitest 互相删除数据库 | ❌ 尚无 fix PR |
| 🟡 **中** | [#3708](https://github.com/qwibitai/nanoclaw/pull/3708) | `getOutboundDb()` 中 `busy_timeout` 应先于 `journal_mode` 设置（避免在锁竞争下 `busy_timeout` 失效） | ✅ PR 已开（待合并） |
| 🟢 **低** | [#3426](https://github.com/qwibitai/nanoclaw/issues/3426) | `send_card` actions 在 bridge 静默丢失，agent 误诊 | ✅ 已关闭（关联 #2265） |

**稳定性观察**：今日 bug 报告集中在 **(a) CLI 边界条件**、**(b) SQLite PRAGMA 顺序与测试隔离**、**(c) 重复投递** 三个交叉领域，PRAGMA 顺序问题（#3708）尤其值得关注——它会让繁忙 DB 上的 `busy_timeout` 完全无效，属于"看起来跑了其实没生效"的隐性回归。

---

## 6. 功能请求与路线图信号

### 显式 feature 请求
- **[#3704](https://github.com/qwibitai/nanoclaw/issues/3704)** — 请求在 `SqliteAgentMailbox` 上提供**受保护的 session-assembly 钩子**，供 fork 维护者在不 fork `compose.ts` 的前提下注入自定义表/列/触发器。这是**架构可扩展性**信号，源于"单 `compose.ts` slot 不够用"的真实分叉诉求。

### 已经存在但仍在合并队列的 feature PR
- **[#2003](https://github.com/qwibitai/nanoclaw/pull/2003)** — 语音转写 V2（容器侧 sovereign）
- **[#3356](https://github.com/qwibitai/nanoclaw/pull/3356)** + **[#3355](https://github.com/qwibitai/nanoclaw/pull/3355)** — Cursor Agent SDK Provider + `/add-cursor` 安装 skill
- **[#3592](https://github.com/qwibitai/nanoclaw/pull/3592)** — `speed` 作为 agent group 的核心属性（与 `model` / `effort` 并列）
- **[#3713](https://github.com/qwibitai/nanoclaw/pull/3713)** — 记录每个 agent group 的投递模式（为不支持 `<message to>` 封面的模型开路）
- **[#3711](https://github.com/qwibitai/nanoclaw/pull/3711)** + **[#3712](https://github.com/qwibitai/nanoclaw/pull/3712)** — Router 延迟解析 + WhatsApp 适配器同步（caption 读取、避免下载无人需要的媒体）

### 路线图信号
**Provider 抽象层正在被重写为"声明式契约 + 安装时校验"**：
- [#3581](https://github.com/qwibitai/nanoclaw/pull/3581)（运行时契约）
- [#3584](https://github.com/qwibitai/nanoclaw/pull/3584)（Codex 实施）
- [#3585](https://github.com/qwibitai/nanoclaw/pull/3585)（宿主契约）
- [#3586](https://github.com/qwibitai/nanoclaw/pull/3586)（Setup 契约 + 安装校验器）
- [#3588](https://github.com/qwibitai/nanoclaw/pull/3588)（OpenCode 实施）
- [#3591](https://github.com/qwibitai/nanoclaw/pull/3591)（从核心拥有的 canon 渲染 Provider 指令）

这一系列 PR 形成了一条**完整的契约化迁移路径**，预示下一版本将把"加 Provider"从"硬编码清单 + 命令式拼装"切换为"SKILL.md frontmatter 声明 + 核心渲染 + 安装时校验"。`speed` 字段、`/add-cursor` 与各 Provider 实施 PR 是这一新契约下的首批受益者。

---

## 7. 用户反馈摘要

从今日 Issue/PR 文本中提炼：

- **痛点：CLI 帮助与实际行为脱节**
  `#3706`（DawoudIO）— 给出绝对路径是**最自然的输入**，"没文档说必须相对"导致破坏性嵌套。
  `#3426`（glifocat）— `send_card` 文档承诺 buttons，但 bridge 在 #2265 后悄悄丢弃无 `url` 的 action，agent 误把"fallbackText: for platforms without card support"当成平台限制。

- **痛点：测试隔离缺失带来 CI/开发体验崩坏**
  `#3709`（davekim917）— 三个 mailbox SQLite 测试共享 `/tmp` 固定路径，两个 worktree 并发跑会互相删除数据库——**典型的"在 fork 工作流下不可用"**。

- **痛点：调度语义不自洽**
  `#3705`（DawoudIO）— `ncl tasks update --recurrence` 不重算 `process_after`，调用者必须自己 next-fire 修正；weekly→daily 切换后任务停留在旧 weekly 槽位。

- **使用场景信号**
  - 企业 Linux（SELinux enforcing）用户：#3440 反映出 SELinux 阻挡挂载是落地部署的常见阻碍。
  - tmpfs `/tmp` 环境的 CI：#3710 指出每次 `pnpm test` 残留 ~355 个目录，长期积累污染 tmpfs。
  - 模型异构场景：#3713 反映"agent group 模型无法持有 `<message to>` 封面契约"成为真实的多 Provider 部署阻碍。

- **架构诉求**
  `#3704`（davekim917）— 维护 fork 的用户希望**用 protected 钩子替代 fork `compose.ts`**，反映"单 slot 模型"已接近可扩展性上限。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 编号 | 标题 | 创建至今 |
|------|------|------|----------|
| 🔴 长期 feature PR | [#2003](https://github.com/qwibitai/nanoclaw/pull/2003) | voice transcription V2 — container-side sovereign | 2026-04-25（~4 个月）|
| 🟠 Provider 重构主线（任一未合并都会拖慢下游） | [#3581](https://github.com/qwibitai/nanoclaw/pull/3581) | declare runtime provider contract | 2026-08-27 |
| 🟠 同上 | [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) | implement codex provider contract | 2026-08-27 |
| 🟠 同上 | [#3585](https://github.com/qwibitai/nanoclaw/pull/3585) | declare host provider contract | 2026-08-27 |
| 🟠 同上 | [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) | declare setup provider contract + verifier | 2026-08-27 |
| 🟠 同上 | [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) | implement opencode provider contract | 2026-08-27 |
| 🟠 同上 | [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | render provider instructions from core canon | 2026-08-27 |
| 🟠 同上 | [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) | add core-owned speed property | 2026-08-28 |
| 🟠 同上 | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | add Cursor Agent SDK payload | 2026-08-19 |
| 🟠 同上 | [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | add `/add-cursor` install skill | 2026-08-19 |
| 🟡 高价值修复 PR | [#3462](https://github.com/qwibitai/nanoclaw/pull/3462) | guard `send_message` against double-delivery | 2026-08-23 |

**维护者提醒**：
- **#2003** 已超过 4 个月未合入，"语音转写 V2 sovereign by default" 是用户高度期待的功能，建议尽快给出明确的接受/拒绝决策（含具体阻塞点）。
- **Provider 契约 8 件套**（#3581–#3592 + #3355/#3356）形成单一系列，**建议按依赖顺序成批评审**，避免相互阻塞造成重复返工。
- **#3462** 关联一个已知的 bug 同族（#2404），若不优先合入，新通道上的重复投递问题会随多渠道部署放大。

---

## 项目健康度

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h Issues 活跃度 | 5 | 中等 |
| 24h PR 活跃度 | 23 | **高** |
| 24h 关闭/合并 | 3 PR + 1 Issue | 中等 |
| 新版本 | 0 | 重构未到发布窗口 |
| 长期未决 PR（>2 个月） | 1（#2003） | 需关注 |
| 阻塞性依赖链 | Provider 契约 8 件套 | **需有序推进** |
| 文档↔行为偏差类 issue | 2 | 反映 DX 文档化短板 |
| 测试隔离缺陷 | 1 | 需立即修复 |

**整体判断**：NanoClaw 处于**结构性重构期**——Provider 抽象层正在从命令式切换为声明式契约，这是提升长期可扩展性的关键投入；与此同时，CLI 边界、SQLite PRAGMA 顺序、重复投递等"小但扎人"的可靠性问题在近期集中暴露。建议维护者在主推 Provider 契约系列时**同步为 #3462、#3705、#3706、#3709 等小修预留 review 带宽**，避免"大重构冲掉小修复"的累积性技术债。

---

*报告基于 2026-09-03 至 2026-09-04 的 GitHub 数据生成，所有链接均指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-04

> 数据来源：github.com/nearai/ironclaw  
> 报告生成时间：2026-09-04  
> 统计周期：过去 24 小时

---

## 一、今日速览

IronClaw 今日整体处于**高强度迭代期**，共录得 7 条 Issue 更新与 18 条 PR 更新，PR 闭环率达 50%（9/18 关闭），活跃度处于近月峰值。今日工作呈现两条清晰的并行主线：一是 **italic-jinxin 推动的 WebUI TypeScript 类型化清理战役**（4 个相关 PR 全部合并、3 个跟踪 Issue 全部关闭），一次性消除了约 134 个 `@ts-nocheck` 抑制指令；二是 **henrypark133 主导的 LLM 性能与 subagent 治理**（prompt 缓存、上下文预算、tool 搜索瘦身、stream 合并等）密集推进。同时 `main` 分支一度变红（#8055），由独立 PR 快速止血，避免阻塞后续合并通道。综合评估：**项目健康度良好**，代码质量债正在系统化偿还，但仍有架构级决策（#7903 沙箱执行器）需要核心团队拍板。

---

## 二、版本发布

⚠️ **今日无新版本发布。** 当前仍以 PR 级别的小步快跑为主，未触发发版动作。

---

## 三、项目进展（今日合并/关闭的重要 PR）

### 🔥 头条：WebUI TypeScript 类型化清理战役全部合龙
- **[#8039](https://github.com/nearai/ironclaw/pull/8039)** `refactor(webui): type production components and hooks` — 移除 64 个生产组件中的 `@ts-nocheck`，补齐 React Query / DOM / 认证等显式类型。
- **[#8038](https://github.com/nearai/ironclaw/pull/8038)** `refactor(webui): type and validate frontend API boundaries` — 在请求 URL 构造前拒绝缺失标识符，为 7 类响应引入运行时解码器。
- **[#8040](https://github.com/nearai/ironclaw/pull/8040)** `test(webui): type frontend test infrastructure` — 一次性清理 94 个测试侧 `@ts-nocheck`。
- **[#8037](https://github.com/nearai/ironclaw/pull/8037)** `chore(webui): ratchet TypeScript suppressions` — 落地 legacy baseline + 源约定 ratchet，防止新增抑制回归。

同步关闭 3 个跟踪 Issue：[#8033](https://github.com/nearai/ironclaw/issues/8033)、[#8035](https://github.com/nearai/ironclaw/issues/8035)、[#8036](https://github.com/nearai/ironclaw/issues/8036)。  
**意义**：WebUI 前端类型安全从"宽容抑制"转向"系统化治理"，是近月最大规模的代码质量改进。

### ⚙️ LLM 提供商适配与性能
- **[#8053](https://github.com/nearai/ironclaw/pull/8053)** `feat(loop): derive the prompt context budget from the model's advertised window` — 上下文预算改为按模型广告窗口的 90% 动态推导，取代硬编码 128k/20k。
- **[#8044](https://github.com/nearai/ironclaw/pull/8044)** `fix(llm): cache-gate new Claude families by denylist; send prompt_cache_key on OpenAI Responses` — 修复 `claude-fable-*` / `claude-mythos-*` 等新家族被静默降级到 `CacheRetention::None` 的回归。
- **[#8043](https://github.com/nearai/ironclaw/pull/8043)** `perf(loop-host): coalesce streamed text updates` — 流式文本更新从 O(N·k) 降至 O(N)，新增回归测试 1,000 delta 用例。
- **[#7984](https://github.com/nearai/ironclaw/pull/7984)** `fix(tools): size tool_search replies to the first-look envelope` — 10-hit 回复从 16,066 B 落到 857 B，模型侧不再出现 `omitted` 兜底。

### 🤖 Subagent 治理
- **[#8046](https://github.com/nearai/ironclaw/pull/8046)** `feat(subagent): a child's approval/auth gate reaches the owner's inbox (R3 slice 3a)` — 修复子 agent 在审批/凭证门槛上"对 owner 隐身"的可用性缺陷。

---

## 四、社区热点

| 排名 | 议题 | 类型 | 评论数 | 关注度信号 |
|---|---|---|---|---|
| 🥇 | [#7903 Decision spike: persistent per-user sandboxed executor](https://github.com/nearai/ironclaw/issues/7903) | Issue / 架构决策 | 2 | 标记 `risk: high` + `reborn` 标签，是当前**最关键的架构路线抉择** |
| 🥈 | [#8009 MCP egress errors flatten to "response_error"](https://github.com/nearai/ironclaw/issues/8009) | Issue / Bug | 1 | 影响托管 MCP 发现流程的可诊断性 |
| 🥉 | [#8057 Prompt budget should account for non-transcript prompt material](https://github.com/nearai/ironclaw/issues/8057) | Issue / Enhancement | 0 | 与 #8053 PR 强相关，反向触发实施 |
| 4 | [#8052 Daily ironclaw failure taxonomy — 2026-09-03](https://github.com/nearai/ironclaw/issues/8052) | Issue / 观测 | 0 | 持续运行的失败分类日报 |

**诉求分析**：
- #7903 折射出社区对**权限边界与开发体验平衡**的焦虑——"全信任宿主 + 沙箱 CLI 透传"模式虽安全但开发摩擦大，作者正在权衡是否下沉完整 agent loop 到沙箱。
- #8009 反映了**可观测性债**：错误归一化过度导致生产问题难定位。
- #8052 这类"日常失败分类"Issue 体现项目建立了**系统化的质量门**。

---

## 五、Bug 与稳定性

按严重程度排列：

| 等级 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 🔴 P0 | [#8055](https://github.com/nearai/ironclaw/pull/8055) | `main` 分支测试 panic，所有开放 PR 受阻 | ✅ **已合并修复** |
| 🔴 P0 | [#8058](https://github.com/nearai/ironclaw/pull/8058) | 自 commit `666ebcbf0` 起 `Tests (Reborn)` 持续失败 | ✅ **已合并修复** |
| 🟠 P1 | [#8059](https://github.com/nearai/ironclaw/pull/8059) | `POST /api/v1/responses/{id}/cancel` 在所有状态下返回 `400` | 🔄 **PR 待合并**（新贡献者 jlwaugh 提交） |
| 🟠 P1 | [#8056](https://github.com/nearai/ironclaw/pull/8056) | 嵌入工具结果 JSON 分隔符异常触发 panic | 🔄 **PR 待合并**（新贡献者 BenKurrek 提交） |
| 🟡 P2 | [#8054](https://github.com/nearai/ironclaw/pull/8054) | 未配对 Telegram 用户首条 `/start` 看到命令清单而非连接提示 | 🔄 **PR 待合并**（新贡献者 thisisjoshford 提交） |
| 🟡 P2 | [#8009](https://github.com/nearai/ironclaw/issues/8009) | `mcp_http_error` 吞掉 underlying reason/字节计数 | ❌ 暂无 fix PR |
| 🟢 P3 | [#8044](https://github.com/nearai/ironclaw/pull/8044) | 新 Claude 家族被静默降级 | ✅ **已合并修复** |

**整体稳定性评估**：P0 级别问题当日止血，但 #8009 等 P2 仍无 fix PR 跟进，建议排入下一迭代。

---

## 六、功能请求与路线图信号

| 需求 | 关联 PR | 纳入可能性 |
|---|---|---|
| 持久的每用户沙箱化执行器（[#7903](https://github.com/nearai/ironclaw/issues/7903)） | 暂无 | ⚠️ 待决策，标记 `risk: high` |
| Prompt 预算覆盖非 transcript 材料（[#8057](https://github.com/nearai/ironclaw/issues/8057)） | [#8053](https://github.com/nearai/ironclaw/pull/8053) | 🟢 **高**，PR 已开放待合并 |
| OpenAI Responses/Chat Completions 发送缓存键 | [#8062](https://github.com/nearai/ironclaw/pull/8062) | 🟢 **高**，XL 规模 PR 待审 |
| Subagent 并发子数上限 + 审批卡回放校验（#8061） | [#8061](https://github.com/nearai/ironclaw/pull/8061) | 🟢 **高**，已开放 |
| MCP 错误可观测性增强（[#8009](https://github.com/nearai/ironclaw/issues/8009)） | 暂无 | 🟡 中等 |
| CI 架构扫描超时（#8060） | [#8060](https://github.com/nearai/ironclaw/pull/8060) | 🟢 **高**，已开放 |
| 代码库知识图谱自动刷新 | [#7988](https://github.com/nearai/ironclaw/pull/7988) | 🟢 例行，由 CI bot 维护 |

**新贡献者涌入是积极信号**：今日 PR 中出现两位 first-time contributor（`jlwaugh`、`BenKurrek`、`thisisjoshford`），覆盖面涵盖响应 API、host 鲁棒性、Telegram 接入。

---

## 七、用户反馈摘要

由于多数 Issue 处于早期或评论稀少，以下从摘要中提炼信号：

- **可观测性诉求**（#8009）：托管 MCP 发现失败被压成单一 token `"response_error"`，on-call 工程师在排障时"看不到背后任何东西"，反映生产环境**错误归一化过度**的真实痛点。
- **首接触体验缺陷**（#8054）：Telegram 新用户首次按 Start 后收到"可用命令"清单而非"请先配对"提示，新贡献者 thisisjoshford 形容这是"the next message"的延迟——**对未配对用户的引导路径错位**。
- **能力评估数据**（#8052）：OfficeQA 套件 63 个 non-pass 全部是 `deepseek-v4-flash` 在 OCR 后 Treasury Bulletins 上的真实模型质量错误，**没有基础设施或工具问题**——为后续模型选型/降级策略提供了量化依据。
- **架构权衡**（#7903）：开发者对"每个新 CLI 都需 host→sandbox 命令透传"的开发摩擦表达不满，倾向于"下沉完整 agent loop"；但信任边界担忧仍在拉锯。

---

## 八、待处理积压（提醒维护者关注）

| 编号 | 标题 | 创建距今 | 风险标签 | 备注 |
|---|---|---|---|---|
| [#7903](https://github.com/nearai/ironclaw/issues/7903) | Persistent per-user sandboxed executor decision | 9 天 | `risk: high`, `reborn` | **架构决策类**问题，需要 maintainer 明确表态，目前已有 2 条评论等待回应 |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph` | 6 天 | size: XS | CI bot 例行刷新 PR，长时间未合并可能让知识图谱快照失真 |
| [#8009](https://github.com/nearai/ironclaw/issues/8009) | MCP egress errors flatten to "response_error" | 4 天 | — | 无 fix PR 跟进，**生产可观测性**受影响 |
| [#8062](https://github.com/nearai/ironclaw/pull/8062) | fix(llm): send conversation cache keys on OpenAI request paths | 0 天 | size: XL | 刚开 PR，建议优先 review 以提升缓存命中率 |
| [#8053](https://github.com/nearai/ironclaw/pull/8053) | feat(loop): derive the prompt context budget from the model's advertised window | 1 天 | size: XL | 与 #8057 Issue 闭环，**优先合并价值高** |
| [#8061](https://github.com/nearai/ironclaw/pull/8061) | feat(subagent): concurrent-children cap (R2 debt) + verify the child-gate card replays (R3 3b) | 1 天 | size: M | subagent 治理 R2 债务，标记明确 |

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活跃 | 7 条（4 开放 / 3 关闭） | ✅ 正常 |
| 24h PR 活跃 | 18 条（9 开放 / 9 关闭） | ✅ 高活跃度 |
| PR 闭环率 | 50% | ✅ 健康 |
| P0 止血速度 | 当日 | ✅ 优秀 |
| 新贡献者 | 3 位 | ✅ 社区新鲜度好 |
| 架构决策阻塞 | 1 项（#7903） | ⚠️ 需关注 |
| 待合并高价值 PR | 4+ 项 | ⚠️ review 资源紧张 |

**总评**：项目处于**有序加速期**，类型化治理战役与 LLM 性能优化双线并进，main 分支危机当日化解。建议维护者本周内对 #7903 架构决策给出方向性回应，并优先合并 #8053/#8062 以释放 prompt 预算与缓存能力的端到端价值。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>



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

# CoPaw (QwenPaw) 项目动态日报

**日期**：2026-09-04
**数据周期**：过去 24 小时
**报告范围**：Issues、Pull Requests、Releases
**项目主页**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)

---

## 1. 今日速览

CoPaw（仓库内现以 **QwenPaw** 为代号）在过去 24 小时内发布了 **v2.2.0 稳定版**，标志着从单用户个人 AI 助手向多租户平台（**QwenPaw Hub**）的关键演进。社区活跃度处于高位：30 条 Issues 更新（22 条新开/活跃、8 条关闭），29 条 PR 更新（20 条待合并、9 条已关闭/合并），新增 1 个正式版本。**Bug 报告密度显著上升**，多条与 2.2.0-beta 系列相关的回归问题集中暴露（涉及安全沙箱、Feishu 会话卡死、Codex 网关兼容、Console 渲染等），需要维护团队优先响应。整体来看，项目处于"重大版本刚发布 + 集中修复期"的典型阶段。

---

## 2. 版本发布

### v2.2.0 (Stable) — 2026-09-03 发布
🔗 [Release Page](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0)

**核心新功能**：
- **QwenPaw Hub（多租户版）**：支持自托管多用户部署，提供本地进程或 Docker 运行时、工作区级访问控制、凭据管理、反向代理支持。([#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112))
- **QwenPaw Data**：数据相关能力（具体细节因 release notes 截断未完整展示）

**说明**：
- 该版本是从 2.1.x 直接跃升至 2.2.0 的大版本，经历了多个 beta（beta.3、beta.6、beta.7）迭代，Install Verification 已通过（[#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515)）。
- 同步存在 `2.2.1b1` 的版本 bump PR（[#7522](https://github.com/agentscope-ai/QwenPaw/pull/7522)，已关闭），说明 2.2.1 迭代已在筹备中。

**升级建议**：
- 自定义提供商（Custom Provider）用户需注意：#7337 PR 引入的 `ModelInfo.max_tokens` → `max_output_length` 字段迁移可能导致加载失败（[#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474)），建议升级前检查配置。
- 2.2.0 beta 期间出现的多个 UI 行为变化（如 `loop.rubric` 强制确认回合 [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467)）已稳定，但建议回归测试关键工作流。

---

## 3. 项目进展

过去 24 小时共有 **9 条 PR 合并/关闭**，重点项目推进如下：

| PR | 说明 | 价值 |
|---|---|---|
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | 频道契约检查可移植化（Windows 非 UTF-8 代码页兼容） | 提升 CI 稳定性 |
| [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | 新增 ReMe Auto Fin 长期记忆源，ReMe 升级至 0.4.1.11 | 记忆子系统增强 |
| [#7493](https://github.com/agentscope-ai/QwenPaw/issues/7493) | Console 中 "Agent 模型路由" 面板未渲染问题已闭环 | UI 完整性修复 |
| [#7515](https://github.com/agentscope-ai/QwenPaw/issues/7515) | v2.2.0 安装验证流程通过 | 发布质量保障 |
| [#7520](https://github.com/agentscope-ai/QwenPaw/pull/7520) → [#7526](https://github.com/agentscope-ai/QwenPaw/pull/7526) | "Protected execution contract"（受保护执行契约）首版关闭、重开迭代 | 安全性架构演进 |
| [#7522](https://github.com/agentscope-ai/QwenPaw/pull/7522) | 版本 bump 至 2.2.1b1 | 维护节奏延续 |

**整体评估**：项目稳步推进，覆盖 **记忆系统、UI 完整性、安全契约、CI 兼容性、版本节奏** 五个维度。`protected execution contract` PR 经历一次关闭重开（#7520 → #7526），说明该方向仍在设计调优中。

---

## 4. 社区热点

按评论数与互动量排序，**#7318** 是当前最具讨论价值的议题：

- 🔥 **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)** — *QwenPaw Hub 多租户版路线图征集*
  - 17 条评论、3 个 👍，由 maintainer `rayrayraykk` 发起
  - 社区诉求集中在：多用户管理、技能管理、admin 角色（[相关 #2324](https://github.com/agentscope-ai/QwenPaw/issues/2324)）
  - **意义**：这是 v2.2.0 Hub 之后的产品方向信号，2.3/2.4 路线图可能由此形成

- 🛡️ **[#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511)** — *QwenPaw2 安全沙箱被突破（已关闭）*
  - 9 条评论，附外部技术博客佐证
  - 与 [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（危险指令容易绕过，6 评论）形成系列
  - **意义**：是 `protected execution contract` PR（#7526）推进的外部驱动力

- 🛠️ **[#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)** — *添加模型步骤过多（good first issue）*
  - 6 条评论、长期 open（5 月创建）
  - 反映 Console 添加新模型需要 5+ 步操作，UX 待优化

- 🌐 **[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)** — *局域网 LLM server 频繁 client disconnect*
  - 5 条评论，针对 LM Studio 本地模型场景
  - 揭示流式响应在 LAN 环境下的稳定性问题

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（可能影响生产可用性）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7511](https://github.com/agentscope-ai/QwenPaw/issues/7511) | QwenPaw2 安全沙箱被突破 | ⚠️ 仅关闭，未见明确 fix（已被 #7526 "protected execution contract" 间接应对） |
| [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令易绕过 | ⚠️ 仅关闭 |
| [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书 DM 会话 queue consumer 卡死，会话静默无响应 | ❌ 无 fix PR |
| [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Codex harness 在 Responses 协议网关上每轮返回空响应 | ❌ 无 fix PR |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | cron 任务在 misfire_grace 窗口内被重复调度 | ❌ 无 fix PR |

### 🟠 中等（影响核心功能）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义提供商加载失败（max_tokens 迁移） | ✅ 已关闭（应随 #7337 修复） |
| [#7510](https://github.com/agentscope-ai/QwenPaw/issues/7510) | `/memory/status` 在 2.2.0-beta.7 Desktop 返回 500 | ❌ 无 fix PR |
| [#7531](https://github.com/agentscope-ai/QwenPaw/issues/7531) | OpenCode API 新增 `x-opencode-session` header 要求 | ✅ [#7536](https://github.com/agentscope-ai/QwenPaw/pull/7536) 已开放 |
| [#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505) | LAN 环境下流式 client disconnect | ❌ 无 fix PR |
| [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) | deepseek-v4-pro 工具调用与 QwenPaw 工具混合异常 | ❌ 无 fix PR |

### 🟡 轻微

| Issue | 描述 | Fix PR |
|---|---|---|
| [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467) | loop.rubric 强制确认回合 + Console 自动折叠 | ✅ 已关闭 |
| [#7512](https://github.com/agentscope-ai/QwenPaw/issues/7512) | 会话思考时无法切换 | ✅ 已关闭 |
| [#7516](https://github.com/agentscope-ai/QwenPaw/issues/7516) | WeCom base64 图片发送失败 | ❌ 无 fix PR |
| [#7529](https://github.com/agentscope-ai/QwenPaw/issues/7529) | Langfuse 监控下工具 output 字段为空 | ✅ [#7532](https://github.com/agentscope-ai/QwenPaw/pull/7532) 已开放 |
| [#7528](https://github.com/agentscope-ai/QwenPaw/issues/7528) | 废弃 issue | ✅ 已关闭 |

**关键缺口**：🔴 严重类中 5 个 issue 有 **3 个无对应 fix PR**（#7534 飞书卡死、#7431 Codex 兼容、#7476 cron 重复调度），建议维护者优先处理。

---

## 6. 功能请求与路线图信号

| 优先级 | 特性 | Issue | 状态 |
|---|---|---|---|
| ⭐⭐⭐ | **QwenPaw Hub 后续方向**（团队协作、admin 技能管理） | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 路线图征集中，v2.2 已落地首版 |
| ⭐⭐⭐ | **移动端远程连接桌面** | [#7519](https://github.com/agentscope-ai/QwenPaw/issues/7519) | 与 PR [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) (QwenPaw Mobile, 标记 DO NOT MERGE 草案) 对应 |
| ⭐⭐ | **Pawport 跨 Agent 导入**（从 Codex / Qoder 迁移） | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | PR 已开放（first-time-contributor） |
| ⭐⭐ | **PowerContext 可插拔长期记忆后端** | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | PR 已开放（Under Review） |
| ⭐⭐ | **后台更新机制** | [#7543](https://github.com/agentscope-ai/QwenPaw/issues/7543) | 今日新增，无 PR |
| ⭐⭐ | **远程 WebUI 首次加载加速** | [#7514](https://github.com/agentscope-ai/QwenPaw/issues/7514), [#7518](https://github.com/agentscope-ai/QwenPaw/issues/7518) | 同一诉求双 issue（#7518 已关闭），需求强烈 |
| ⭐ | **Codex 类似 steer mode（中途注入指令）** | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | 长期未响应（3 月创建） |
| ⭐ | **优化模型添加流程** | [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | good first issue，UX 痛点 |
| ⭐ | **消息按钮（卡片交互）** | [#7533](https://github.com/agentscope-ai/QwenPaw/issues/7533) | 新增，多 channel |
| ⭐ | **Context compaction 保留 persona** | [#7527](https://github.com/agentscope-ai/QwenPaw/issues/7527) | 新增 |
| ⭐ | **env_context 身份行可关闭** | [#7540](https://github.com/agentscope-ai/QwenPaw/issues/7540) | 新增 |
| ⭐ | **Matrix 频道支持 Element 兼容** | [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | 新增 |

**趋势判断**：**Hub 多租户化 + 移动端 + 后台更新 + 性能优化** 是社区最强烈的方向信号。

---

## 7. 用户反馈摘要

从活跃 issue 评论中提炼的**真实用户痛点**：

1. **企业/团队场景诉求强烈**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 17 评论）
   - 用户希望个人 AI 助手能扩展为团队版：多用户、admin 角色、技能共享
   - 社区已主动整理相关 issue 列表（#2324 等）

2. **本地/局域网部署仍是重要场景**（[#7505](https://github.com/agentscope-ai/QwenPaw/issues/7505)）
   - LM Studio + 本地模型用户对流式连接稳定性敏感
   - 反映出 QwenPaw 在"轻量本地推理"用户群中的渗透

3. **多模型、多 provider 切换的 UX 痛点**（[#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036)）
   - 添加模型需要 5+ 步操作，对重度用户形成摩擦

4. **2.2.0 beta 期的 UI 行为变化引发不满**（[#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467)）
   - `loop.rubric` 强制确认回合让用户感觉多余
   - 升级后行为回归明显

5. **远程访问体验**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报 · 2026-09-04

> 数据来源：github.com/zeroclaw-labs/zeroclaw  
> 统计周期：2026-09-03 ~ 2026-09-04

---

## 1. 今日速览

ZeroClaw 项目今日延续了高强度的工程节奏：24 小时内有 **50 条 Issue** 和 **50 条 PR** 更新，问题域高度集中在**安全沙箱、可验证意图（verifiable-intent）、运行时健壮性**以及**架构治理（RFC 与 tracker）**四大主线。值得注意的是，**所有 50 条 PR 均仍处于待合并状态**，合并吞吐暂时为零，叠加多个 P1 安全类 Issue，表明项目当前处于"评审密集 + 修复积压"的阶段，需要维护者将更多注意力投向合并通道。整体而言，项目活跃度高、社区参与多元（涵盖核心贡献者、领域贡献者、外部审计者），健康度良好，但安全债务与 RFC 落地的速度值得关注。

---

## 2. 版本发布

**无新版本发布。** 当前没有可披露的 release tag 或 changelog 摘要。建议关注下一轮 cron 提取、provider retry、web 上传链路的 PR 集中合并后可能触发的版本节点。

---

## 3. 项目进展

过去 24 小时内有 **14 条 Issue 被关闭**，覆盖一批运行时与通道层的 Bug 修复与功能落地；PR 侧虽无合并，但有多个高价值修复已进入评审阶段。

**Issue 侧已落地的关键进展：**

| Issue | 标题 | 意义 |
|---|---|---|
| [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | Docker 运行时命令被嵌套在第二层 sandbox | 修复 runtime 嵌套沙箱导致的执行阻塞（S1），已闭合 |
| [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | Telegram/Slack/Lark/Matrix 上任何成员都能响应交互式审批 | 修复跨通道审批鉴权缺陷（S1），已闭合 |
| [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | `/health` 报告从未连接过的通道为 healthy | 修复可观测性误报（S1），已闭合 |
| [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | 真实的操作员拒绝被模型误解为原因不明 | 修复操作员拒绝语义传递（S1），与 #9642 同代码路径，已闭合 |
| [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | ZeroCode 在 daemon 退出后保持 stale Connected | 修复 TUI 状态生命周期（S2），已闭合 |
| [#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905) | Discord 音频转写管理器从未绑定到活跃 agent provider | 修复 Discord 通道配置（S2），已闭合 |
| [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | 不可视的回退模型错误地报告失败原因 | 改进 provider fallback 错误可读性（S3），已闭合 |
| [#9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) | JSONL session 操作对合法文件类型判定不一致 | 统一 SessionStore 文件类型定义（S2），已闭合 |
| [#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202) | 基于 log 的依赖记录从未进入 tracing subscriber | 补齐 log→tracing 桥接，已闭合 |
| [#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486) | Matrix 通道忽略 typed transcription 配置 | 修复多 provider 解析路径（S2），已闭合 |
| [#9510](https://github.com/zeroclaw-labs/zeroclaw/issues/9510) | 拒绝无共同祖先的 PR | 新增 CI 防 blame-collapse 守卫，已闭合 |
| [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) | Web chat 多会话支持 | 多会话侧边栏（新/切换/重命名/删除），已闭合 |
| [#8518](https://github.com/zeroclaw-labs/zeroclaw/issues/8518) | Discord 辅助 issue triage | 通过 SOP 控制 plane 实现的 Discord triage 模式，已闭合 |
| [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529) | Anthropic thinking.display progress updates | 支持 Fable 5.1 用户态进度更新 beta 头，已闭合 |

**进展评估：** 安全审批、可观测性、Provider 解析三类长期债务得到集中清理；架构层面的 cron 提取（PR [#10557](https://github.com/zeroclaw-labs/zeroclaw/pull/10557)）、release 目标注册表（PR [#10590](https://github.com/zeroclaw-labs/zeroclaw/pull/10590)）、MCP 引导器（PR [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591)）等"分库化 + 发行契约"工作正在评审，是项目结构走向成熟的关键工程动作。

---

## 4. 社区热点

按 24 小时评论活跃度排序：

| 排名 | 编号 | 标题 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | #6996 | RFC: Granular sandbox policy — filesystem restrictions | 23 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| 2 | #9328 | Bug: verifiable-intent 评估约束未验证凭证链 | 14 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) |
| 2 | #8692 | Tracker: 维护者 RFC/设计决策队列 | 14 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 4 | #10050 | RFC: 网关上的逐字通道发送（无 agent turn） | 13 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) |
| 5 | #9975 | RFC: 定义 web_dist_dir 的 bundle/daemon 兼容性 | 12 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/9975) |
| 6 | #7108 | feat(ci): 改善 Rust 缓存与 CI 关键路径 | 7 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) |
| 7 | #10068 | Bug: 交互式 agent 会话上限 32k token | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) |
| 7 | #7543 | Feature: 网关 Web 多会话侧边栏 | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/7543) |
| 7 | #10222 | RFC: 交互式 agent 的 opt-in 单工具 provider round | 5 | [查看](https://github.com/zeroclaw-labs/zeroclaw/issues/10222) |

**诉求分析：**

- **#6996** 反映出长期存在的双层文件系统策略漂移（应用层 path admission 与 OS 级 sandbox backend 如 Bubblewrap/Landlock/Seatbelt）正在被推上桌面，社区在 agent risk profile 与 workspace 限制的一致性上有强烈诉求。
- **#9328** 是审计视角发现的可验证意图（VI）实现缺陷——L2 约束被评估时未先经链验证器建立密码学保证，属于高风险安全类讨论焦点。
- **#8692** 作为"决策队列 tracker"，集中体现了社区对**架构治理透明化**的需求：RFC、设计议题、release 策略需要统一的维护者看板。
- **#10050** 与 **#9975** 体现了网关层两条主线诉求：**(a)** 不经 agent turn 的 verbatim 消息旁路，**(b)** web bundle 与 daemon 兼容性的可声明协商。
- **#7108** 持续刷屏说明社区对当前 CI 15–20 分钟的关键路径耗时存在系统性不满。

---

## 5. Bug 与稳定性

按严重程度排列（**S1 = 工作流阻塞 / 安全缺陷**，**S2 = 降级行为**，**S3 = 次要**）：

| 严重度 | 编号 | 标题 | 是否已有 fix PR |
|---|---|---|---|
| S1 | [#9231](https://github.com/zeroclaw-labs/zeroclaw/issues/9231) | Docker 运行时命令嵌套在第二层 Docker sandbox | ✅ Issue 已关闭 |
| S1 | [#9387](https://github.com/zeroclaw-labs/zeroclaw/issues/9387) | 任意聊天成员都能在 Telegram/Slack/Lark/Matrix 响应交互式审批 | ✅ Issue 已关闭 |
| S1 | [#9811](https://github.com/zeroclaw-labs/zeroclaw/issues/9811) | `/health` 报告从未连接的通道为 healthy | ✅ Issue 已关闭 |
| S1 | [#9654](https://github.com/zeroclaw-labs/zeroclaw/issues/9654) | 真实操作员拒绝传递时丢失语义 | ✅ Issue 已关闭 |
| S1 | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode provider 从不发送 `x-opencode-session`，导致 Go 模型被破坏 | ⏳ 待修复（👍 1） |
| S1 | [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) | zerocode 忽略启动目录并强制将 agent workspace 作为 cwd | ✅ 关联 PR [#10565](https://github.com/zeroclaw-labs/zeroclaw/pull/10565) 在评审 |
| S2 (high) | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | verifiable-intent evaluate_constraints 未验证凭证链 | ⏳ 待修复，议程 |
| S2 (high) | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | bitmaps 3.2.1 仍解析在依赖图（`RUSTSEC-2026-0247`） | ⏳ Tracker 被 `blocked`，建议维护者解除阻塞 |
| S2 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) | 交互式 agent 会话被硬上限 32k token，忽略 `max_context_tokens=131072` | ⏳ needs-repro |
| S2 | [#10238](https://github.com/zeroclaw-labs/zeroclaw/issues/10238) | ZeroCode 在 daemon 退出后 stale Connected | ✅ Issue 已关闭 |
| S2 | [#9905](https://github.com/zeroclaw-labs/zeroclaw/issues/9905) | Discord 音频转写管理器未绑定到活跃 provider | ✅ Issue 已关闭 |
| S2 | [#9857](https://github.com/zeroclaw-labs/zeroclaw/issues/9857) | JSONL SessionStore 文件类型判定不一致 | ✅ Issue 已关闭 |
| S2 | [#10486](https://github.com/zeroclaw-labs/zeroclaw/issues/10486) | Matrix 通道忽略 typed transcription 配置 | ✅ Issue 已关闭 |
| S2 | [#10529](https://github.com/zeroclaw-labs/zeroclaw/issues/10529) | Anthropic thinking.display 进展更新支持 | ✅ Issue 已关闭 |
| S3 | [#9983](https://github.com/zeroclaw-labs/zeroclaw/issues/9983) | 回退模型不可视时错误地报告原因 | ✅ Issue 已关闭 |

**风险评估：** 安全类 S1 已基本完成闭环；剩余两个活跃 S1（#10603 OpenCode 头丢失、`#9899` RUSTSEC 阻断）需要维护者**优先关注**。

---

## 6. 功能请求与路线图信号

今日新增或仍然活跃的 enhancement/RFC 集中在以下几个方向，可作为下个迭代的候选：

1. **网关层语义扩展**
   - **#10050** Verbatim 通道发送（无 agent turn 的旁路路径）：13 条评论，热度高，已被标记 accepted。
   - **#9975** Web bundle/daemon 兼容性协商：12 条评论，已 accepted，进入实现阶段。

2. **Agent/Provider 运行时增强**
   - **#10222** 交互式 agent 的 opt-in 单工具 provider round：5 条评论，关注"批次内中间工具返回值能否回到模型"。
   - **#10068** 修复 `max_context_tokens` 被硬上限 32k 截断的回归：与 PR [#10597](https://github.com/zeroclaw-labs/zeroclaw/pull/10597)（记录 reported context usage 与 budget 修剪）形成协同，预计进入 next 版本。

3. **多模态与上传链路**
   - **#10544 / #10583** 系列 stacked PR 形成 web 上传完整链路（命令注册、图片/文档标记、provider-loadable 契约），是 web composer 增强的明显信号。

4. **ZeroCode / TUI 体验**
   - PR [#10584](https://github.com/zeroclaw-labs/zeroclaw/pull/10584)（Todo tracker 持久化关闭）、PR [#10595](https://github.com/zeroclaw-labs/zeroclaw/pull/10595)（长 thinking 输出缓存）属于 UI 体验连续打磨。

5. **CI/发布工程**
   - **#7108** CI Rust 缓存与关键路径改进、PR [#10590](https://github.com/zeroclaw-labs/zeroclaw/pull/10590)（canonical release target registry）、PR [#10591](https://github.com/zeroclaw-labs/zeroclaw/pull/10591)（MCP 引导器）共同指向"发行契约可声明化"。

6. **安全与权限**
   - **#9998 → #10405** 已被接受的"session-scoped prompt 附件"正在通过 tracker 落地。
   - **#10529** Anthropic `thinking.display` 支持已闭合，闭合速度反映对前沿模型的快速跟进意愿。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中可提炼以下真实用户痛点与诉求：

- **CI 体验**：`#7108`

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*