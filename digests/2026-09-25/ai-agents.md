# OpenClaw 生态日报 2026-09-25

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-25 02:57 UTC

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

# OpenClaw 项目日报 · 2026-09-25

## 1. 今日速览

OpenClaw 项目今日呈现**高活跃度下的高压修复状态**：24 小时内共 500 条 Issue 更新（58 条关闭）、500 条 PR 更新（115 条已合并/关闭），但**无新版本发布**。当前社区关注高度集中在 2026.9.6 版本的多个 P0 级回归缺陷上，#157531《2026.9.7 Fixes Tracker》已建立并正在进行 1,058 个主线 commit 的审计追溯。整体项目处于"问题倒逼版本"的密集修复窗口，**bug 报告密度明显高于功能交付密度**，维护团队资源压力较大。

---

## 2. 版本发布

**无新版本发布。**

当前焦点为 2026.9.6 → 2026.9.7 修复窗口，#157531 正在追踪：1,058 个唯一主线 commit（1,052 原始 + 6 个 frozen-tail）的合格源范围审计。社区预期下个稳定版本将在已识别的多个 P0 问题修复后发布。

---

## 3. 项目进展

今日多个关键问题得以关闭，主要进展包括：

| 类型 | 编号 | 内容 | 影响 |
|------|------|------|------|
| Bug 修复 | [#157107](https://github.com/openclaw/openclaw/issues/157107) | prepared-model-catalog worker 每 6s 重建 plugin generation（已关闭） | 修复 28-agent 部署完全无法启动 agent run |
| Bug 修复 | [#157011](https://github.com/openclaw/openclaw/issues/157011) | 更新历史协调中的 RangeError（已关闭） | 修复 2026.9.5→9.6 始终回滚 |
| Bug 修复 | [#153067](https://github.com/openclaw/openclaw/issues/153067) | Gateway 重复全量 state DB 拷贝（已关闭） | 单实例每天减少约 5.9TB 暂存写入 |
| Bug 修复 | [#134925](https://github.com/openclaw/openclaw/issues/134925) | ARM64/Pi 上主线程 100% CPU（已关闭） | 修复低端设备每轮 agent 占用满核 |
| Bug 修复 | [#155920](https://github.com/openclaw/openclaw/issues/155920) | Control UI 每 2.7s 轮询触发完整 state DB snapshot（已关闭） | 显著降低控制面板 IO 压力 |
| Bug 修复 | [#151050](https://github.com/openclaw/openclaw/issues/151050) | 更新失败 unexpected-error（已关闭） | 修复 2026.9.4 升级路径 |
| 功能交付 | [#47910](https://github.com/openclaw/openclaw/issues/47910) | 按失败类别隔离 provider | auth 失效的 provider 自动进入隔离 |
| PR 合入 | [#148822](https://github.com/openclaw/openclaw/pull/148822) | Library 准备操作脱离 Gateway 线程 | 解决 cold cache 时 SQLite 阻塞事件循环 |
| PR 合入 | [#157707](https://github.com/openclaw/openclaw/pull/157707) | 跳过完成夹具中的空数据库重置 | 测试套件提速 5.0–8.3% |

**今日推进评估：** 项目在稳定性维度有实质性修复，但**功能侧几乎无新合入**，说明维护资源大量向 2026.9.6 灾难性回归倾斜。

---

## 4. 社区热点

### 评论最活跃的 Issue（Top 5）
1. **[#144911](https://github.com/openclaw/openclaw/issues/144911)**（30 评论）— MCP server init 超时拖垮 Gateway：stdio MCP server 在 30s 内未完成 initialize 时，清理路径抛出 unhandled promise rejection，致整个 Gateway 进程崩溃。P1，🦞 diamond lobster 评级，已有 fix-shape-clear 标签。
2. **[#155753](https://github.com/openclaw/openclaw/openclaw/issues/155753)**（23 评论）— model-catalog 重建循环：WorkerThread 因 `readFullModelCatalog()` 每次读取都触发 `refreshExpiredCatalog()`，一个核心被永久烧毁。
3. **[#149538](https://github.com/openclaw/openclaw/openclaw/issues/149538)**（21 评论）— Gateway 就绪但永不服务：632-agent 集群的 `/health` 全部超时，事件循环饥饿，RSS 攀升至内存耗尽。
4. **[#112423](https://github.com/openclaw/openclaw/openclaw/issues/112423)**（20 评论）— SQLite transcript 清理阻塞事件循环：从 2025-07 即报告，至今未根治。
5. **[#142585](https://github.com/openclaw/openclaw/openclaw/issues/142585)**（17 评论）— Doctor 在缺 canonical rows 时拒绝合法 legacy workspace 迁移，影响 2026.7.1-2 → 9.3 升级路径。

### 讨论最热的 PR
- **[#157724](https://github.com/openclaw/openclaw/pull/157724)**：面板监听托管桌面音频（Web-UI 音频栈 5/7）
- **[#151020](https://github.com/openclaw/openclaw/pull/151020)**：memory-core watcher 丢失后重新对账并武装，修复 #119411
- **[#157806](https://github.com/openclaw/openclaw/pull/157806)**：保留任务限制跨委派传递（安全敏感改动，需 proof）
- **[#154208](https://github.com/openclaw/openclaw/pull/154208)**：Agents API 增加 OpenClaw Gateway tool 支持
- **[#149880](https://github.com/openclaw/openclaw/pull/149880)**：新增 Gemini Interactions API 后端（安全审查中）

### 社区诉求分析
讨论最热烈的几个 issue 都围绕 **2026.9.6 的 SQLite 锁、catalog worker 重建、Gateway 死锁**三类主题展开，社区反映 9.6 版本似乎在内存压力、catalog 刷新、SQLite 同步机制上引入了一组相互叠加的回归。用户普遍希望维护团队：**（a）建立更严格的回归测试覆盖**；**（b）在 release notes 中显式标注已知问题**；**（c）考虑恢复 2026.9.5 的 hotfix 路径**。

---

## 5. Bug 与稳定性

### 🔴 P0 — 必须立即修复（影响 ux-release-blocker）

| Issue | 标题 | 状态 |
|-------|------|------|
| [#157107](https://github.com/openclaw/openclaw/issues/157107) | prepared-model-catalog worker 永久重建（28-agent 部署） | ✅ 已关闭 |
| [#157011](https://github.com/openclaw/openclaw/issues/157011) | 更新 9.5→9.6 始终回滚（RangeError） | ✅ 已关闭 |
| [#157234](https://github.com/openclaw/openclaw/issues/157234) | Update recovery 失败：active agent DB lease | ⚠️ 仍开放 |
| [#157415](https://github.com/openclaw/openclaw/issues/157415) | Doctor --fix 拒绝 acpx/codex 外部安装插件迁移 | ⚠️ 仍开放 |
| [#152252](https://github.com/openclaw/openclaw/openclaw/issues/152252) | Config 写入未识别 key，Gateway 退出 78，systemd 长期宕机 | ⚠️ 仍开放 |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway 就绪但不服务（632-agent 集群） | ⚠️ 仍开放 |
| [#143752](https://github.com/openclaw/openclaw/issues/143752) | 包激活中断将 CLI 置于无法回放状态 | ⚠️ 仍开放 |
| [#148307](https://github.com/openclaw/openclaw/issues/148307) | Agent DB "database is locked"（464MB DB、5s busy 超时） | ⚠️ 仍开放 |
| [#115256](https://github.com/openclaw/openclaw/issues/115256) | Desktop app 引导循环重启 gateway | ⚠️ 仍开放 |
| [#143640](https://github.com/openclaw/openclaw/issues/143640) | memory-core 索引发布单个 IMMEDIATE 事务耗尽 busy_timeout | ⚠️ 仍开放 |

### 🟠 P1 — 高优先级（部分已有 fix PR）
- [#144911](https://github.com/openclaw/openclaw/issues/144911) — MCP server init 崩溃（**有 fix-shape-clear 标签**）
- [#157067](https://github.com/openclaw/openclaw/issues/157067) — Windows cron 不可克隆的 Proxy（**有 fix-shape-clear 标签**）
- [#145309](https://github.com/openclaw/openclaw/issues/145309) — claude-cli 后端忽略 `CLAUDE_CONFIG_DIR`（**有 fix-shape-clear 标签**）
- [#141474](https://github.com/openclaw/openclaw/issues/141474) — Collector 调用 sessions_yield 永久挂起
- [#119565](https://github.com/openclaw/openclaw/issues/119565) — Codex native hooks 并发 MCP 调用内存线性放大

### 🟡 显著回归
- [#142585](https://github.com/openclaw/openclaw/issues/142585) — 2026.9.3 Doctor 拒绝合法 legacy workspace
- [#137332](https://github.com/openclaw/openclaw/issues/137332) — mixed terminal requester-settle 批处理所有权检查后永久重试
- [#155859](https://github.com/openclaw/openclaw/issues/155859) — Gateway 启动时间与插件数量成线性关系
- [#97616](https://github.com/openclaw/openclaw/issues/97616) — 子进程未被回收，僵尸进程累积（**自 2025-06 报告仍开放**）

**模式观察：** 9.5 → 9.6 之间似乎引入了一组相互关联的回归：catalog 重建、SQLite 锁、Gateway 启动时间三者互为因果。修复 #155753 的 catalog 重建可能同时缓解多个相关问题。

---

## 6. 功能请求与路线图信号

| 提案 | Issue | 状态判断 |
|------|-------|----------|
| Session 自动命名（lazy + 廉价模型） | [#99583](https://github.com/openclaw/openclaw/issues/99583) | 仓库已存在 `llm-slug-generator`，**集成路径清晰，可能纳入 9.7+** |
| 持久化自然语言规则学习 + 多提及回复语义 | [#41366](https://github.com/openclaw/openclaw/issues/41366) | 与 AGENTS.md/SOUL.md 冲突未解，**需要产品决策**，自 2025-03 起搁置 |
| TUI 无障碍：禁用 emoji/Unicode | [#9637](https://github.com/openclaw/openclaw/issues/9637) | 屏幕阅读器用户长期诉求，**改动量小但优先级被低估**，自 2025-02 起开放 |
| onboarding 支持多 provider/model | [#81960](https://github.com/openclaw/openclaw/issues/81960) | **用户基础广泛**，但 P3 未排期 |
| QQ 频道可持续性：澄清腾讯交接长期计划 | [#150743](https://github.com/openclaw/openclaw/issues/150743) | 生态/支持模型问题，**非功能缺陷**，腾讯 handoff 自 2026.7.1 后停滞 |
| Cron 触发时的 fallback model 失败 | [#97335](https://github.com/openclaw/openclaw/issues/97335) | **隐式功能 bug**，可能随 provider fallback 体系改进修复 |

**已开放的"功能向" PR：**
- [#157724](https://github.com/openclaw/openclaw/pull/157724) — 桌面面板音频（音频栈 5/7）
- [#154208](https://github.com/openclaw/openclaw/pull/154208) — Agents API 工具支持
- [#149880](https://github.com/openclaw/openclaw/pull/149880) — Gemini Interactions 后端
- [#157799](https://github.com/openclaw/openclaw/pull/157799) — Android 聊天面板改版
- [#151453](https://github.com/openclaw/openclaw/pull/151453) — Web-UI 聊天轮次间距

**路线图信号：** 短期内（9.7）几乎可以确定只包含稳定性修复；功能侧看到桌面面板音频栈、Android 改版、Agents API 工具化等正在排队，但被 P0 问题挤压。

---

## 7. 用户反馈摘要

**真实用户痛点（提炼自 Issues 评论）：**

1. **大集群运营者最受伤**（#149538、#155753、#157107、#156191）：28~632 agent 的部署在 9.5→9.6 升级后普遍遭遇完全服务中断。代表评论："the gateway boots and all channels connect, but no agent run is ever admitted"。多实例运营者尤其关注稳态下 catalog worker 永久重燃 CPU 的隐性成本。

2. **升级路径几乎不可信**（#142585、#157011、#157234、#157415、#151050）：9.x 版本之间的升级普遍触发回滚、doctor --fix 不收敛、外部安装插件无法迁移。用户反复表达："the upgrade-survivor baseline reached HTTP listening but failed before its readiness marker"。

3. **macOS companion 体验下降**（#135272、#115256、#99659）：#135272 报告 macOS UI 控制间歇性 `COMPANION_APP_UNAVAILABLE`；#99659 报告 companion 连接后 OOM 被杀。Mac 用户群反馈明显密集。

4. **Channel 健壮性参差**（#143278、#151962）：Heartbeat 内部输出泄漏到 Telegram 用户聊天；微信桥 13 天长会话出现"幻影用户消息"（内部 runtime 字符串作为 user prompt 提交但未持久化）。

5. **能力提升的需求未被满足**（#41366、#99583、#81960）：长期用户希望 onboarding 支持多 provider、自动 session 标题、跨 agent 一致的规则学习。社区表达："a very natural product expectation"。

6. **生态断裂信号**（#150743）：QQ bot 插件自 2026.7.1 后无 9.x 兼容版本，用户希望维护者澄清长期支持计划或允许社区接管。

**满意度信号：** 项目维护者对复杂 bug 报告的响应（如 `roboclaw-bot`、`steipete` 等的密集交互）显示出工程文化健康，社区对修复 PR 的 review 参与度高（#157724、#149880 等 PR

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告

**数据周期**：2026-09-25（过去 24 小时）  
**项目覆盖**：10 个活跃仓库 + 3 个静默仓库

---

## 1. 生态全景

2026-09-25 的开源 AI 助手生态呈现"**修复压倒发布、安全议题集中爆发、渠道与 WebUI 体验持续内卷**"的三重特征：当日 10 个活跃项目中仅 IronClaw 打出 `v1.4.1-rc.2` 一个 RC 标签、CoPaw 处于 `v2.2.2-beta.3` 边发边修的 beta 阶段，其余 8 个项目均"无新版本发布"。整体 PR 量（≥240 条）显著大于 Issue 量（≈170 条），但**当日合并率偏低**（Hermes Agent 50 条 PR 零合并、ZeroClaw 与 LobsterAI 各仅 6–8 条合并），反映出项目普遍处于"积压严重、修复窗口紧、维护资源向稳定性倾斜"的收缩期。安全类 Issue 在 Hermes Agent（Camofox 密码明文、Bot Mode 跨实例泄露）、ZeroClaw（无头 Agent 绕过 ApprovalManager）、LobsterAI（5 条由 YLChen-007 提交的安全 Advisory 被 stale 自动关闭）三处集中暴露，**已成为本周期最值得关注的风险信号**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 (关闭) | PR 更新 (合并/关闭) | Release | 当日推进评估 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** (核心) | 500 (58) | 500 (115) | 无 | 高强度修复 / 功能侧停滞 | 🟠 高压修复期 |
| **NanoBot** | 14 (6) | 38 (25) | 无 | 多通道 + WebUI + Provider 三线推进 | ⭐⭐⭐⭐ |
| **Hermes Agent** | 50 (14) | 50 (**0**) | v0.21.5 标签 | PR 全部 OPEN 不寻常 / P1 回归 | 🟠 等待合并窗口 |
| **PicoClaw** | 2 (1) | 8 (0) | 无 | 仅 Dependabot 推进 / 人工停滞 | 🔴 维护乏力 |
| **NanoClaw** | 2 (0) | 13 (3) | 无 | arm64 + CLI 硬化为主 | ⭐⭐⭐⭐ |
| **NullClaw** | 12 (10) | 25 (8) | 无 | 单维护者清扫积压 | ⭐⭐⭐ |
| **IronClaw** | 1 (0) | 1 (0) | v1.4.1-rc.2 | 自动化为主 / 平稳 | 🟢 稳定 |
| **LobsterAI** | 18 (16 全部 stale) | 11 (6) | 无 | 安全 Issue 被自动关闭 ⚠️ | 🟠 安全风险暴露 |
| **CoPaw** | 20 (4) | 19 (3) | 无（β 阶段） | 侧边栏 + Provider + 上下文三方向 | ⭐⭐⭐⭐ |
| **ZeroClaw** | 24 (4) | 50 (8) | 无 | SOP 控制平面 + 安全加固 | ⭐⭐⭐⭐ |
| **TinyClaw / Moltis / ZeptoClaw** | — | — | — | 24h 静默 | ⚫ 静默 |

> **数据观察**：OpenClaw 单日 Issue/PR 更新量是其余项目量级之和的 5–10 倍，但合并/关闭率仅 23%（Hermes Agent 0% 为最异常）。这印证了 OpenClaw 作为生态核心枢纽的事实——也意味着其"问题倒逼版本"的修复压力会被全生态放大感知。

---

## 3. OpenClaw 在生态中的定位

### 与同类相比的优势

| 维度 | OpenClaw | NanoBot / CoPaw / NanoClaw |
|---|---|---|
| **功能完整度** | 桌面/移动/IM 全通道、Provider 隔离、AGENTS.md | 通常聚焦 WebUI + 1–2 个通道 |
| **规模承载** | 已验证 28~632 agent 集群部署 | NanoBot/NanoClaw 仍以个人/小规模为主 |
| **生态广度** | Desktop 面板音频、Agents API、Gemini Interactions、Android 改版、Web-UI 间距等 7 路 PR 排队 | LobsterAI / CoPaw 也具备类似广度但成熟度低 |
| **社区规模** | 500 Issue/日、10⁵ 级 PR 池（#157724、#157107 等编号） | NanoBot 5900+、NullClaw 1000+、PicoClaw 3300+ |

### 技术路线差异

- **OpenClaw** 走"**大型多 Agent + Gateway + 严格回归控制**"路线：9.5→9.6 引入了 catalog worker 重建 + SQLite 锁 + Gateway 启动时间线性化这一组**相互叠加的回归**，典型"复杂度爆炸"代价。
- **NanoBot / CoPaw** 走"**WebUI 一等公民 + 多通道补丁式迭代**"路线，迭代节奏更快但缺乏 OpenClaw 那种企业级部署校验。
- **NanoClaw** 走"**arm64 + 安全硬化**"路线，OpenClaw 在 ARM64/Pi 上仍存在 #134925 主线程 100% CPU 这类低端设备问题，NanoClaw 在 DGX Spark 上的体验可能更佳。
- **ZeroClaw** 走"**安全优先 + 运行时 WASM 插件化**"路线（#8850、#6489），架构演进方向与 OpenClaw 的 Gateway + Provider 隔离思路形成对照。

### 社区规模对比

| 指标 | OpenClaw | NanoBot | Hermes | ZeroClaw | 其余 |
|---|---|---|---|---|---|
| Issue 编号量级 | 158k+ | 5.9k+ | 122k+ | 11k+ | <5k |
| 单日 PR 提交 | 500 | 38 | 50 | 50 | <25 |

OpenClaw 与 Hermes Agent 的 Issue 编号量级远超其他项目（10⁵ 级），反映**两个生态位的"事实标准"竞争**：OpenClaw 偏大型多 Agent 平台、Hermes Agent 偏 Desktop 消费级。

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite 锁 / 数据库并发** | OpenClaw (#148307、#143640)、LobsterAI (#2214 桌面端 SQLite WAL 卡死)、ZeroClaw (#10797 Markdown 记忆并发写丢失) | 写入原子性、长事务、busy_timeout、IMMEDIATE 事务耗尽 |
| **自动压缩 / 上下文治理** | OpenClaw (#115256 压缩策略)、NanoBot (#5849 自动压缩死锁、#5900 静默化、#5903 Feishu 标记泄露)、CoPaw (#5856、#7628、#7836) | token 预算保护、tool_call 结构保留、压缩失败可恢复 |
| **多通道行为一致性** | NanoBot (Discord/Telegram/Matrix/Feishu)、NullClaw (#976 Telegram SIGSEGV、Discord typing 栈溢出)、LobsterAI (#2230)、OpenClaw (#143278、#151962) | 各通道 baseline 行为统一、心跳/内部消息不外漏 |
| **WebUI 体验精细化** | NanoBot (#5910 草稿、#5908 tokens/sec、#5909 队列)、Hermes Agent (OutThisLife 6 个 UI sweep PR)、CoPaw (#7972 侧边栏)、LobsterAI (#2760 调色板) | 流式刷新、Composer 持久化、侧边栏导航、可访问性 |
| **Provider 兼容性广度** | PicoClaw (#3381 OpenAI Responses API、#3371 opencode-go)、NanoBot (#5898 GPT-6、#5896 muse-spark)、ZeroClaw (#11103 Cheaper Inference、#11076 Antigravity CLI)、OpenClaw (#149880 Gemini Interactions) | 多 API 形态共存、路由层抽象 |
| **MCP / 外部工具稳定性** | OpenClaw (#144911 MCP 30s init 超时)、NullClaw (#991 Proxmox CT 挂死、#996 修复)、ZeroClaw (#8850 编译特性→WASM 插件) | stdio 超时、子进程清理、进程组终止 |
| **Windows / 桌面平台体验** | Hermes Agent (#122142、#118856、#98486)、NullClaw (#870 WSL2 busy loop)、NanoClaw (#3888 arm64) | 启动挂起、托盘混淆、低资源 CPU 占用 |
| **安全加固** | Hermes Agent (#122174 Camofox vault、#121756 OAuth、#122151 Bot Mode 跨实例)、ZeroClaw (#9899 matrix-sdk 豁免移除、#10968 无头 Agent 绕过审批)、LobsterAI (#2176/2181/2286-2288 5 条 stale) | Vault 不进日志/工具结果、最小权限、SSRF、Token 重放 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构特征 |
|---|---|---|---|
| **OpenClaw** | 全通道 + 大型集群 + 严格回归 | 企业 / 高级个人 | Gateway + Worker + Plugin Generation + SQLite |
| **NanoBot** | WebUI + 多通道 + Provider 广度 | 个人 / 小团队 | Session/Compaction + WebUI（多语言）+ Adapter |
| **Hermes Agent** | Desktop 优先 + Windows 兼容 + 安装链路 | 桌面消费者 | Desktop App + Gateway + ACP 会话 |
| **PicoClaw** | 移动端 TUI + 轻量 | 移动用户 | Go 单体 + 多通道 SDK 适配 |
| **NanoClaw** | arm64 + 安全硬化 + CLI | 高端硬件用户（DGX/Jetson） | Iron Proxy + Compose + Approval |
| **NullClaw** | 自托管 + 嵌入式 + 低资源 | 弱设备 / 自托管玩家 | Rust + SQLite + Provider 抽象 |
| **IronClaw** | Web UI 配置化 + 评估管线 | 自托管企业 | OAuth Web UI + 知识图谱 + officeqa benchmark |
| **LobsterAI** | Cowork UI + OpenClaw 适配 + 视觉重构 | 国内 IM 用户（飞书/钉钉） | Renderer + Main + OpenClaw 子模块 |
| **CoPaw** | Hub 多租户 + Console + 上下文 | 团队 / 企业 | LightContextManager + RetryChatModel + Console |
| **ZeroClaw** | 安全优先 + SOP 控制 + WASM 插件化 | 安全敏感型企业 | Rust + WASM runtime + ApprovalManager |

**关键差异点**：
- **OpenClaw vs ZeroClaw**：前者"功能优先 + 复杂度高"，后者"安全优先 + 架构债持续清还"；
- **NanoBot vs Hermes Agent**：前者"WebUI 主战场"，后者"Desktop 主战场"；
- **NanoClaw vs NullClaw**：前者"硬件多样性（arm64）"，后者"资源极简（嵌入式）"；
- **CoPaw vs LobsterAI**：前者"个人助手→团队产品演进"，后者"消费级 IM 体验"。

---

## 6. 社区热度与成熟度分层

### 第一梯队：高活跃 + 高复杂度（"快速迭代 + 紧急修复"模式）

- **OpenClaw**：500 Issue/500 PR 日量级，bug 密度 > 功能密度，处于"问题倒逼版本"修复窗口；
- **ZeroClaw**：50 PR/24 Issue，PR 体量大但评审延迟（5 个 Size XL PR 自 8 月堆积），S0/S1 Bug 当日新增但无 fix；
- **Hermes Agent**：50 Issue/50 PR（零合并），v0.21.5 标签发布但精选 changelog 延期，OutThisLife 一人 PR 集群式清理暴露个人贡献者风险。

### 第二梯队：中活跃 + 节奏稳健（"功能交付 + 质量巩固"模式）

- **NanoBot**：43% Issue 关闭率 / 66% PR 关闭率，是当日**最高效的项目**；
- **CoPaw**：v2.2.2-beta.3 边发边修，5 个 first-time-contributor PR 显示社区正在扩张；
- **NanoClaw**：13 PR 全来自核心维护者，硬化型 PR 集中，体现"内部质量巩固"阶段；
- **NullClaw**：单维护者当日 8 PR + 10 Issue 关闭，但长期积压（173 天的文档 PR 群）反映人手不足。

### 第三梯队：低活跃 / 维护乏力

- **LobsterAI**：6 PR 合并算实质推进，但 **16 条 Issue 被 stale 自动关闭包含 5 条安全 Advisory**，社区响应机制失灵；
- **PicoClaw**：纯 Dependabot 节奏，0 PR 合并，#3391 多行输入 Bug 已重复提交无人响应；
- **IronClaw**：仅 RC 发布 + 自动化 PR，UI 化配置收口，无新功能。

### 第四梯队：静默项目

- **TinyClaw / Moltis / ZeptoClaw**：24h 零活动，建议评估是否仍处于维护状态。

---

## 7. 值得关注的趋势信号

### 趋势一：**安全议题从"加分项"升级为"准入门槛"**

- **Hermes Agent** 一日爆出 3 条 P2 安全 Issue（Camofox vault 明文、Anthropic OAuth 静默

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-09-25**

---

## 1. 今日速览

NanoBot 项目今日保持高度活跃，过去 24 小时共发生 14 条 Issue 更新与 38 条 PR 更新，合并/关闭率分别达到 43%（6/14 Issue）和 66%（25/38 PR）。当日工作重心集中在 **多渠道（IM/WebUI）行为修正** 与 **Provider 适配** 两大方向：Discord / Telegram / Matrix / Feishu 的细节 bug 集中修复，OpenCode Go 与 GitHub Copilot 的兼容性也获得初步处理。整体来看仓库处于健康、持续的迭代状态，无新版本发布，但功能性补丁以高频率落地。

---

## 2. 版本发布

**无新版本发布。** 最近已合并但尚未打 tag 的修复包括 Discord 反应任务清理、后台任务异常捕获、WebUI 本地化、API 路由 session 隔离等，建议关注下一次 v0.3.6 或 v0.4.x 候选版本。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响方向 |
|---|---|---|
| [#5904](https://github.com/HKUDS/nanobot/pull/5904) | perf(webui): 改善聊天刷新与移动端交互 | WebUI 性能优化、UX |
| [#5905](https://github.com/HKUDS/nanobot/pull/5905) | fix(webui): 保持全局页面 URL 整洁并延迟聊天挂载 | WebUI 路由优化 |
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) | feat(webui): 本地化 Agent 活动标签 | WebUI 国际化（10 语言） |
| [#5807](https://github.com/HKUDS/nanobot/pull/5807) | fix(discord): 清理反应状态 | Discord 通道稳定性 |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | fix(agent): 报告后台任务失败 | 后台任务可观测性 |
| [#5724](https://github.com/HKUDS/nanobot/pull/5724) | fix(agent): 检索后台任务异常并记录 | 后台任务可观测性 |
| [#5292](https://github.com/HKUDS/nanobot/pull/5292) | fix(matrix): 回复到启动会话的房间级用户事件 | Matrix 通道 UX |
| [#1387](https://github.com/HKUDS/nanobot/pull/1387) | feat: 添加 Anthropic 扩展思考支持 | 模型能力扩展 |

**整体推进评估**：今日合并的多为「稳定性 + 可观测性」类补丁，并伴随 WebUI 体验的显著优化（URL 清洁、刷新流畅、移动端交互）。项目在「多通道 + WebUI + Provider」三足架构上同时向前推进，进展令人振奋，但**核心 session/compaction 关键问题（#5849）仍未合并修复**，是后续重点关注对象。

---

## 4. 社区热点

### 4.1 高关注议题

- **[#5849 自动压缩死锁](https://github.com/HKUDS/nanobot/issues/5849)**（作者：Krislu1221）—— 描述 `summarize_transcript` 在自动压缩路径下缺乏 token 预算保护，存在一旦历史超限便永远无法恢复的潜在死锁。属高严重度设计缺陷，目前尚无 PR。

- **[#5896 OpenAI Responses API for opencode_go](https://github.com/HKUDS/nanobot/issues/5896)** —— muse-spark-1.2/1.3-contributor 模型因走 `/chat/completions` 路由直接 500 不可用。已有配套 PR [#5906](https://github.com/HKUDS/nanobot/pull/5906) 提交。

- **[#5881 v0.3.5 要求 `_nanobot` 必须搬出 workspace](https://github.com/HKUDS/nanobot/issues/5881)** —— 用户实测反映升级后强制把 `_nanobot` 移出 workspace，对多实例/同 workspace 用户造成困扰（已 CLOSED）。

### 4.2 讨论背后的核心诉求

- **自动压缩机制**被广泛认为是核心痛点：不仅要解决死锁（#5849），还要降低噪音通知（[#5900](https://github.com/HKUDS/nanobot/issues/5900)）。
- **多渠道一致性**：Discord、Telegram、Matrix、Feishu、WeChat 都暴露出各自细节问题，社区希望"行为统一可预期"。
- **WebUI 体验升级**：连续出现 composer 草稿持久化（#5910）、流式 tokens/sec 实时显示（#5908）、消息队列（#5909）等主动反馈，说明用户已把 WebUI 当作主要使用界面。

---

## 5. Bug 与稳定性

| 严重度 | Issue / 描述 | 是否已有 fix PR |
|---|---|---|
| 🔴 高 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) 自动压缩无 token 预算保护的死锁 | ❌ 暂无 |
| 🟠 中 | [#5903](https://github.com/HKUDS/nanobot/issues/5903) Feishu 自动压缩后向用户泄漏 "Continue the active task..." 隐藏 checkpoint 标记 | ❌ 暂无 |
| 🟠 中 | [#5898](https://github.com/HKUDS/nanobot/issues/5898) v0.3.5 不支持 GitHub Copilot 下的 GPT-6 模型 | ❌ 暂无 |
| 🟡 低 | [#5806](https://github.com/HKUDS/nanobot/issues/5806) Discord 停止时残留 reaction 任务 | ✅ [#5864](https://github.com/HKUDS/nanobot/pull/5864) / [#5807](https://github.com/HKUDS/nanobot/pull/5807) |
| 🟡 低 | [#5429](https://github.com/HKUDS/nanobot/issues/5429) AgentLoop 不读取后台任务异常 | ✅ [#5431](https://github.com/HKUDS/nanobot/pull/5431) / [#5724](https://github.com/HKUDS/nanobot/pull/5724) |
| 🟡 低 | [#5881](https://github.com/HKUDS/nanobot/issues/5881) 0.3.5 workspace 校验回归 | ✅ CLOSED |
| 🟡 低 | [#5274](https://github.com/HKUDS/nanobot/issues/5274) Matrix 消息未启用 reply 特性 | ✅ [#5292](https://github.com/HKUDS/nanobot/pull/5292) |

**值得维护者立即关注**：`#5849`（自动压缩死锁）与 `#5903`（Feishu 信息泄露）属于设计层面问题，建议优先排期；`#5898`（GitHub Copilot GPT-6）影响较广开发者群体。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已存在 PR？ |
|---|---|---|
| WebUI composer 草稿按会话持久化 | [#5910](https://github.com/HKUDS/nanobot/issues/5910) | ❌ |
| Server-side 消息队列（"等候室"） | [#5909](https://github.com/HKUDS/nanobot/issues/5909) | ❌ |
| WebUI 实时显示 tokens/sec | [#5908](https://github.com/HKUDS/nanobot/issues/5908) | ❌ |
| 后台压缩静默化、降低 WeChat 轮询日志 | [#5900](https://github.com/HKUDS/nanobot/issues/5900) | ✅ [#5780](https://github.com/HKUDS/nanobot/pull/5780)（待合并） |
| Telegram 私人 forum topic 重命名为生成标题 | [#5902](https://github.com/HKUDS/nanobot/pull/5902) | ✅ 已开 PR |
| Opper 作为内置 Provider | [#5845](https://github.com/HKUDS/nanobot/pull/5845) | ✅ 已开 PR |
| WebUI 会话结束通知铃声 | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | ✅ 已 CLOSED |
| WebUI Agent 活动标签本地化 | [#5366](https://github.com/HKUDS/nanobot/issues/5366) | ✅ 已合并 |
| OpenCode Go 通过 Responses 路由 muse-spark-contributor 模型 | [#5896](https://github.com/HKUDS/nanobot/issues/5896) | ✅ [#5906](https://github.com/HKUDS/nanobot/pull/5906) |

**路线图判断**：以上需求围绕「WebUI 体验精细化」「多渠道智能化」「Provider 兼容广度」展开，反映用户正把 NanoBot 当作长时使用的 IDE/Copilot 替代。下一版本若能打包 [#5904](https://github.com/HKUDS/nanobot/pull/5904) / [#5367](https://github.com/HKUDS/nanobot/pull/5367) / [#5780](https://github.com/HKUDS/nanobot/pull/5780) / [#5906](https://github.com/HKUDS/nanobot/pull/5906) 等将显著提升日常可用性。

---

## 7. 用户反馈摘要

- **痛点：自动压缩不够"安静"且不够"健壮"** —— [#5900](https://github.com/HKUDS/nanobot/issues/5900) 与 [#5849](https://github.com/HKUDS/nanobot/issues/5849) 形成互补：用户既要避免被无用通知刷屏，又要避免压缩失败时整个 session 卡死。两条都说明当前的压缩策略在产品体验上需要重设计。

- **痛点：WebUI 编辑体验单薄** —— [#5910](https://github.com/HKUDS/nanobot/issues/5910)（草稿丢失）、[#5908](https://github.com/HKUDS/nanobot/issues/5908)（无实时速率）、[#5909](https://github.com/HKUDS/nanobot/issues/5909)（agent 忙碌时无法排队）三条连续出现，说明用户使用 WebUI 进行长时间对话时缺乏"安全网"，希望任何输入都不会因切会话、刷新、agent 忙碌而丢失或被吞。

- **痛点：多渠道行为不一致** —— Feishu checkpoint 标记外漏（#5903）、Discord reaction 残留（#5806）、Matrix 不回复（#5274）、Telegram 长代码块格式错乱（#5911）—— 用户期待各渠道行为基线一致。

- **痛点：升级带来的隐性回归** —— [#5881](https://github.com/HKUDS/nanobot/issues/5881) 显示 v0.3.5 的强校验让多实例用户"被迫迁移目录"，反映版本升级对已有部署的友好度仍有提升空间。

- **正面信号**：[#5366](https://github.com/HKUDS/nanobot/issues/5366)（WebUI 本地化）与 [#5524](https://github.com/HKUDS/nanobot/issues/5524)（通知铃声）能在 24 小时内开 issue→合并 PR，说明维护者响应积极、社区协作效率高。

---

## 8. 待处理积压（提醒维护者关注）

| 链接 | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | 2026-09-21 | OPEN | **核心稳定性问题**，建议本周内排期 |
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | 2026-09-24 | OPEN | GitHub Copilot GPT-6 兼容，影响大量用户 |
| [#5903](https://github.com/HKUDS/nanobot/issues/5903) | 2026-09-24 | OPEN | Feishu 隐私/产品体验问题 |
| [#5838](https://github.com/HKUDS/nanobot/pull/5838) | 2026-09-20 | OPEN, conflict | API session 路由修复，标有 conflict 需 rebase |
| [#5260](https://github.com/HKUDS/nanobot/pull/5260) | 2026-08-05 | OPEN | 长期未合并的 memory 路径修复（已 50 天） |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | 2026-08-05 | OPEN | 长期未合并的 sustained-goal 边界修复（已 50 天） |
| [#5834](https://github.com/HKUDS/nanobot/pull/5834) | 2026-09-20 | OPEN | SSE Responses consumer 推理事件解析 |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | 2026-09-21 | OPEN | 新 Provider Opper 接入 |

---

### 📌 编辑备注
- **数据来源**：`HKUDS/nanobot` GitHub Issues/PRs（统计窗口：2026-09-24 ~ 2026-09-25）
- **建议行动**：维护者可优先处理 `#5849`（自动压缩死锁）和积压超过 50 天的 PR（`#5260`、`#5257`）；社区方面可考虑发布 v0.3.6 整合 WebUI/Provider/通道类补丁。
- **项目健康度**：⭐⭐⭐⭐（高活跃、合并率高、跨方向并行推进）

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-09-25**
**数据范围：过去 24 小时**

---

## 1. 今日速览

Hermes Agent 今日处于**高强度维护期**：单日 Issue 更新 50 条（关闭 14 条，新开/活跃 36 条），PR 提交 50 条（**全部仍为 OPEN，零合并**），并发布 v0.21.5 标签版本。值得注意的是，本日 PR 数量虽多但**暂无 PR 合并进 main**，大量来自 `OutThisLife` 的"p3-rated fix sweep"集群式修复正在排队等待 CI 评审。社区讨论热度集中在 Desktop 应用（Windows 兼容性、会话状态、WebSocket 抖动）与 `hermes update` 链路依赖同步问题，**P1 级回归 Bug 已出现**，需重点关注。

---

## 2. 版本发布

### 🔖 Hermes Agent v0.21.5 (v2026.9.24)
**发布日期：** 2026-09-24
**类型：** Patch / 标签发布

本次为标签汇总发布，将自 v0.21.4 以来合并的约 **460 个 PR** 打包为稳定版本，主要服务于 Docker 镜像、Hermes Cloud 及托管部署的下游消费者。**官方精选变更日志延迟发布**（"deferred"），意味着正式用户需要等待更详细的版本说明。

**关键提示：**
- 升级前务必查看下游消费者兼容性说明
- 由于官方精选日志延期，社区应留意配套的 `app.asar` 刷新问题（见 Issue [#106670](https://github.com/NousResearch/hermes-agent/issues/106670)），git 安装方式在 Windows 下曾出现 UI 3 周未更新的情况

---

## 3. 项目进展

### 3.1 ⚠️ PR 合并状态异常

过去 24 小时 **50 条 PR 全部 OPEN，0 条合并**。这是相对不寻常的状态，可能原因：
- v0.21.5 刚打标签，正在准备下一次合并窗口
- 大量 fix sweep PR 等待 CI 与视觉评审（多个 PR 明确标注"held for visual review before merge"）

### 3.2 Codex/Responses 适配器修复（来自 Xipong）

| PR | 修复内容 |
|---|---|
| [#122176](https://github.com/NousResearch/hermes-agent/pull/122176) | 要求实质性的最终证据，遵守 output exhaustion 语义（修复 #122173） |
| [#122175](https://github.com/NousResearch/hermes-agent/pull/122175) | 保留 role-message replay 中的显式 assistant phase（修复 #122171） |

这两条修复与 Codex 通道的"commentary / final_answer"分类错误相关，是控制流层面（不仅是渲染层面）的修正。

### 3.3 Windows 发布链路修复（来自 ethernet8023）

- [#122154](https://github.com/NousResearch/hermes-agent/pull/122154) Windows release 构建读取可执行版本不再失败（修复 `powershell -Command` 的 `$args[0]` 被吞掉的问题）
- [#122161](https://github.com/NousResearch/hermes-agent/pull/122161) PM 激活 pre-PM in-tree venv，避免网关丢失 `pydantic_core`

### 3.4 Desktop "fix sweep" 集群（来自 OutThisLife）

这位贡献者正在以"一个 PR 一个根因集群"的方式系统性清理 P3 级问题，覆盖：
- **模型/UI** [#122080](https://github.com/NousResearch/hermes-agent/pull/122080)：去重模型行、归档会话墓碑合并、渲染器可访问性树、SearchField 清除按钮
- **侧边栏导航** [#122084](https://github.com/NousResearch/hermes-agent/pull/122084)：首次引导提示、归档菜单双 resume、根重组幽灵行
- **CJK/数学** [#122005](https://github.com/NousResearch/hermes-agent/pull/122005)：CJK `$` 误解析、subagent 行淡出、sticky-prompt 芯片裁剪
- **UI 打磨** [#122004](https://github.com/NousResearch/hermes-agent/pull/122004)：预览 color-scheme、Unarchive 动词、Quick Entry 阴影、SelectTrigger 宽度
- **Git/更新/Windows** [#121997](https://github.com/NousResearch/hermes-agent/pull/121997)：runGit wall-clock 边界、macOS 测试桩、click-session 轮询
- **特性行为** [#121998](https://github.com/NousResearch/hermes-agent/pull/121998)：`/clear` 别名、open_preview fail-closed、阿里云卡片、RunClock、插件工具集接线
- **生命周期/加载器** [#122077](https://github.com/NousResearch/hermes-agent/pull/122077)：ACP 会话在 shutdown 时正确结束、批准批次失败后再门控、基础分支选择器稳定、正则字面量
- **更新/插件目录** [#122081](https://github.com/NousResearch/hermes-agent/pull/122081)：后端检查错误展示、托管 Cloud Screen 副本、bundle skew 覆盖 apps/shared
- **macOS Dock** [#121419](https://github.com/NousResearch/hermes-agent/pull/121419)：停止显示两个 Dock 图标
- **本地模型** [#121566](https://github.com/NousResearch/hermes-agent/pull/121566)：中止推理字段长度停止、暴露 taskkill 失败
- **Docker** [#121564](https://github.com/NousResearch/hermes-agent/pull/121564)：Windows 工作空间在 `/workspace` 已被占用时仍绑定
- **桌面忽略现有安装** [#121443](https://github.com/NousResearch/hermes-agent/pull/121443)：忽略已发现运行时而非重复安装

### 3.5 i18n 进展

- [#120011](https://github.com/NousResearch/hermes-agent/pull/120011) 添加完整韩语本地化（`ko`），与英文目录对齐而非仅覆盖已有键

### 3.6 自动维护

- [#122158](https://github.com/NousResearch/hermes-agent/pull/122158) `npm run fix` 自动修复（CI 通过后自动 squash 合并）

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issue

| 排名 | Issue | 评论数 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | Desktop SSH 切换 profile spawn 本地后端 | 11 | CLOSED | [#90477](https://github.com/NousResearch/hermes-agent/issues/90477) |
| 2 | Setup 破坏 npm 全局安装（指向 `~/.hermes/node`） | 9 | OPEN | [#18357](https://github.com/NousResearch/hermes-agent/issues/18357) |
| 3 | 推理面板自动折叠，缺少"保持展开"选项 | 8 | OPEN | [#53617](https://github.com/NousResearch/hermes-agent/issues/53617) |
| 4 | `@bot` handoffs 在常规 Desktop 会话回归 | 7 | OPEN | [#94018](https://github.com/NousResearch/hermes-agent/issues/94018) |
| 5 | WebSocket 30 秒抖动仍未修复 | 6 | CLOSED | [#118856](https://github.com/NousResearch/hermes-agent/issues/118856) |
| 6 | Desktop auto-speak 竞态（修复后反变更糟） | 5 | CLOSED | [#89896](https://github.com/NousResearch/hermes-agent/issues/89896) |

### 诉求分析

1. **跨设备/跨 Profile 一致性** 是热点之一（#90477、#94018、#101640、#65047）：用户期望 Desktop 在 SSH 远程、`@bot` 调用、配置缓存、多窗口同步等场景下能正确识别"我正在哪个会话/哪台机器"，但当前实现仍存在错位。
2. **安装与生态冲突**（#18357、#69874、#122071、#122133、#122148）：用户对"安装脚本接管 `~/.local/bin`、venv 携带 cp311 二进制、`hermes update` 与 uv lock 冲突"等问题表达了**强烈不满**，措辞包括"borders criminal behavior"和"setup SABOTAGES"。
3. **Windows 平台体验**集中爆发（#118856、#119252、#98486、#122142、#119120），涉及挂起（AppHangB1）、启动失败、托盘/最小化混淆等。

---

## 5. Bug 与稳定性

### 🚨 P1（最高严重度）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#122142](https://github.com/NousResearch/hermes-agent/issues/122142) | Windows Desktop 退出后无法启动：attach 接管已死亡后端的 token 并耗尽 45 秒启动预算 | ❌ 暂无 |

### 🔴 P2（高严重度）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#18357](https://github.com/NousResearch/hermes-agent/issues/18357) | 安装脚本劫持 `~/.local/bin/npm`，破坏其他软件（开源 npm 生态） | ❌ 暂无 |
| [#94018](https://github.com/NousResearch/hermes-agent/issues/94018) | `@bot` handoffs 回归，常规 Desktop session 收不到 mention | ❌ 暂无 |
| [#94486](https://github.com/NousResearch/hermes-agent/issues/94486) | 会话中切换模型后下一条用户提示被静默丢弃 | ❌ 暂无 |
| [#69874](https://github.com/NousResearch/hermes-agent/issues/69874) | Python 3.14 venv 携带 cp311 二进制，numpy/Pillow ImportError | ❌ 暂无 |
| [#119252](https://github.com/NousResearch/hermes-agent/issues/119252) | Windows minimize-to-tray 后 OS AppHangB1（已 CLOSED） | ✅ |
| [#118856](https://github.com/NousResearch/hermes-agent/issues/118856) | WebSocket dial/teardown 30 秒抖动存活（已 CLOSED） | ✅ |
| [#89896](https://github.com/NousResearch/hermes-agent/issues/89896) | Desktop auto-speak 竞态（已 CLOSED，但失败模式改变） | ✅ |
| [#121756](https://github.com/NousResearch/hermes-agent/issues/121756) | `auto` 路由的辅助调用继续使用已撤销的 Anthropic OAuth token | ❌ 暂无 |
| [#122062](https://github.com/NousResearch/hermes-agent/issues/122062) | `drive_preview` 在上下文压缩后被拒（session_id 不匹配） | ❌ 暂无 |
| [#106670](https://github.com/NousResearch/hermes-agent/issues/106670) | git 安装下 `app.asar` 未刷新（已 CLOSED） | ✅ |

相关 **P2 PR 队列**：[#122080](https://github.com/NousResearch/hermes-agent/pull/122080)、[#121566](https://github.com/NousResearch/hermes-agent/pull/121566)、[#121564](https://github.com/NousResearch/hermes-agent/pull/121564)、[#121443](https://github.com/NousResearch/hermes-agent/pull/121443)、[#120782](https://github.com/NousResearch/hermes-agent/pull/120782)、[#122154](https://github.com/NousResearch/hermes-agent/pull/122154)、[#122161](https://github.com/NousResearch/hermes-agent/pull/122161)。

### 🟠 P3（中严重度）

- [#119120](https://github.com/NousResearch/hermes-agent/issues/119120) Windows：解耦 minimize 与 tray-hide
- [#98486](https://github.com/NousResearch/hermes-agent/issues/98486) Windows 启动覆盖层 latch
- [#122071](https://github.com/NousResearch/hermes-agent/issues/122071) `hermes update` 与 Hindsight 插件依赖同步失败（CLOSED）
- [#122133](https://github.com/NousResearch/hermes-agent/issues/122133) 重复 `hermes-plugin-hindsight` workspace 成员（与 #122071 同源）
- [#122148](https://github.com/NousResearch/hermes-agent/issues/122148) plugin `pyproject.toml` 无 `[project]` 表导致 PM 中止
- [#122174](https://github.com/NousResearch/hermes-agent/issues/122174) **🔒 Camofox snapshot 明文回显 vault 密码**（安全相关，0 评论但极重要）
- [#122151](https://github.com/NousResearch/hermes-agent/issues/122151) **🔒 Bot Mode 群聊同步到所有已连接网关，跨实例泄露私人聊天**

### 🔒 安全与隐私提醒

- **#122174**：Camofox 后端在 vault fill 后立刻 `browser_snapshot` 将密码明文打印并落库，违反 vault "密码绝不进入工具结果/日志/会话库"契约。
- **#121756**：Anthropic OAuth 静默刷新后 `agent.api_key` 不更新，导致辅助调用继续使用旧 token 触发 401。
- **#122151**：Bot Mode 群聊通过 `groupChatSyncTargetConnections()` 推送房间名/成员/消息元数据到所有连接的网关——包括同事的共享实例。

---

## 6. 功能请求与路线图信号

| 功能请求 | Issue | 状态 | 路线图信号 |
|---|---|---|---|
| 推理面板默认展开 | [#53617](https://github.com/NousResearch/hermes-agent/issues/53617) | OPEN | 强信号：thinking 模型（DeepSeek 等）用户广泛需要 |
| 完整韩语本地化 | [#120011](https://github.com/NousResearch/hermes-agent/pull/120011) | PR 已提 | 高概率进入下个版本 |
| `@bot` handoffs 修复 | [#94018](https://github.com/NousResearch/hermes-agent/issues/94018) | OPEN, needs

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-09-25**
**项目：sipeed/picoclaw**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活动以**依赖维护与重复 Bug 反馈**为主，共产生 8 条待合并 PR（其中 5 条为 Dependabot 自动发起的依赖升级，3 条为功能/修复 PR）和 2 条 Issues。值得注意的是，Issues #3390 与 #3391 为同一作者同日提交的**重复 Bug 报告**（Pico channel 多行输入被错误拆分），其中 #3390 已被关闭（推测为重复标记处理），但原始问题并未实质性解决。**当日无版本发布，无 PR 合并**，仓库处于"积压待处理"状态，社区讨论度偏低。

---

## 2. 版本发布

当日无新版本发布，跳过本节。

---

## 3. 项目进展

⚠️ **今日无 PR 合并或关闭**，项目代码层面的推进主要体现在以下**新提交/更新**的待合并 PR：

| PR | 类型 | 说明 |
|---|---|---|
| [#3389](https://github.com/sipeed/picoclaw/pull/3389) | 依赖升级 | `golang.org/x/crypto` 0.53.0 → 0.57.0 |
| [#3388](https://github.com/sipeed/picoclaw/pull/3388) | 依赖升级 | MCP Go SDK 1.6.1 → 1.8.0 |
| [#3387](https://github.com/sipeed/picoclaw/pull/3387) | 依赖升级 | Anthropic SDK Go 1.55.1 → 1.74.0（跨度较大） |
| [#3386](https://github.com/sipeed/picoclaw/pull/3386) | 依赖升级 | `mautrix` 0.27.0 → 0.31.0 |
| [#3385](https://github.com/sipeed/picoclaw/pull/3385) | 依赖升级 | LINE Bot SDK Go 8.20.1 → 8.22.0 |

**评估**：当日未推进任何功能或 Bug 修复落地，所有变更停留在 PR 队列等待 review。

---

## 4. 社区热点

当日社区互动度极低：

- **Issues 评论数**：#3390 有 1 条评论，#3391 有 0 条评论
- **PR 点赞数**：所有 PR 👍 均为 0
- **讨论集中点**：Pico channel 多行输入被拆分为多条消息的问题（重复提交 #3390 / [#3391](https://github.com/sipeed/picoclaw/issues/3391)）

**诉求分析**：用户 [@chentianxiong123](https://github.com/sipeed/picoclaw/issues/3391) 在移动端 TUI（pico client）粘贴诗歌或代码块等多行文本时，PicoClaw 自动按换行符切分发送，破坏了原始消息语义。这是典型的**输入解析层缺失**问题，影响内容创作者、开发者调试对话等场景。

---

## 5. Bug 与稳定性

### 🟠 中等严重程度

**Pico channel 多行输入被错误拆分**（重复 Issue）

- [#3390](https://github.com/sipeed/picoclaw/issues/3390) — 已关闭（疑似被标记为重复）
- [#3391](https://github.com/sipeed/picoclaw/issues/3391) — OPEN，当前活跃状态

**问题描述**：用户在 pico client 粘贴多行文本时，picoclaw 将其按 `\n` 拆分发送为多条独立消息，导致诗歌、代码块、Markdown 表格等内容结构被破坏。

**修复 PR**：❌ 暂无对应 fix PR

**建议**：维护者应在 #3391 下回复指引作者到 #3390 保留唯一线索，或提交关联修复 PR。

### 🟢 低风险：依赖更新潜在兼容性影响

- [#3387](https://github.com/sipeed/picoclaw/pull/3387) 升级跨度大（1.55.1 → 1.74.0，跨 19 个 minor 版本），可能引入 API 变更，需重点 review Anthropic SDK 调用层兼容性。
- [#3386](https://github.com/sipeed/picoclaw/pull/3386) mautrix 升级提示 **Bumped minimum Go version**，需确认项目最低 Go 版本支持。

---

## 6. 功能请求与路线图信号

当日无明确新功能需求 Issues，但 PR 队列中包含 3 条**有意义的特性/修复**，反映潜在路线图方向：

| PR | 方向 | 状态 |
|---|---|---|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | OpenAI provider 切换至 **Responses API** | 🟡 标记为 `[stale]`，已 8 天未更新 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | 新增 **opencode-go provider**，支持 `x-opencode-session` header 与多端点路由 | 🟢 待 review，开放 17 天 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | 修复 **deltachat channel** 配置校验错误（[#3265](https://github.com/sipeed/picoclaw/issues/3265)） | 🟡 标记为 `[stale]`，已 15 天未更新 |

**信号解读**：
- OpenAI Responses API 与 opencode-go provider 的并存 PR 表明项目正在**适配多 LLM API 形态**，可能成为下一版本重点。
- deltachat 修复停滞 15 天，若被并入，将补齐多通道消息网关的最后一块拼图。

---

## 7. 用户反馈摘要

当日可用评论样本极少，仅 [#3390](https://github.com/sipeed/picoclaw/issues/3390) 有 1 条评论（具体内容未在数据中披露）。从 Issue 描述可提炼以下用户痛点：

- **多行输入场景受损**：诗歌、代码块、Markdown 等多行内容无法在 pico 移动端 TUI 正确粘贴并发送。
- **客户端可用性顾虑**：用户依赖 pico client 作为主要交互入口，输入解析缺陷直接影响日常使用。
- **重复提交暴露流程问题**：用户未得到初次反馈即重复开 Issue，说明 issue triage 响应或引导机制存在缺失。

---

## 8. 待处理积压 ⚠️

以下 PR/Issue 长期未获维护者响应，**建议优先 review**：

| 编号 | 类型 | 标题 | 积压天数 | 风险 |
|---|---|---|---|---|
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | Feature | Switch OpenAI to responses API | ~8 天（已 stale） | 功能方向关键，可能影响下一版本定位 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | Fix | deltachat channel 配置修复 | ~15 天（已 stale） | 阻塞启用 deltachat 的用户 |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | Feature | opencode-go provider | ~17 天 | 新 provider 集成，可能存在接口兼容性盲点 |
| [#3391](https://github.com/sipeed/picoclaw/issues/3391) | Bug | Pico 多行输入拆分（重复 issue） | 1 天 | 用户体验类，需快速响应避免社区信任损耗 |

**提醒**：5 条 Dependabot PR 已就位但同样未合并，长期积压会使项目落后于上游安全与功能更新。

---

## 总体健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | 🟡 中 | 8 条 PR 提交，但 5 条为机器自动依赖升级 |
| 维护响应度 | 🔴 低 | 0 条 PR 合并，多条 PR 处于 stale 状态 |
| 社区互动度 | 🔴 低 | Issues/PR 评论与点赞数接近 0 |
| 缺陷闭环效率 | 🔴 低 | 多行输入 Bug 已报告但无修复跟进 |
| 依赖卫生 | 🟢 良好 | Dependabot 正常工作，关键依赖在及时拉新 |

**结论**：PicoClaw 当前处于**自动化依赖维护运转正常、但人工 review 与功能推进停滞**的状态。维护者需重点关注 stale PR 与开放 Bug 的去化，避免社区参与意愿下滑。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**：2026-09-25  
**数据周期**：过去 24 小时（截至 2026-09-24 数据快照）  
**项目**：NanoClaw（nanocoai/nanoclaw）

---

## 1. 今日速览

NanoClaw 今日呈现典型的"维护日"特征：活跃度偏高但以**维护者主导的修复与硬化**为主。24 小时内共有 13 个 PR 更新和 2 个 Issue 开启，**没有新版本发布**。当日工作高度聚焦在两个主题——**Iron Proxy 的 arm64 兼容性与安装恢复**（issue #3888、PR #3891、#3883）以及 **CLI help 文本与 setup 流程的若干边缘 Bug 清理**（PR #3882、#3884、#3885、#3889）。整体提交几乎全部来自核心维护者 glifocat，说明项目处于稳定的内部迭代阶段，未见社区大规模争议。

---

## 2. 版本发布

**今日无新版本发布。** 距离上一版本 2.4.0（多份 PR 描述中提及）已有一定时间，今日累积的修复（特别是 arm64 Iron Proxy 安装、CLI help 枚举对齐、setup 流程硬化）已具备纳入下一 patch 版本的潜力，但尚未打 tag。

---

## 3. 项目进展

今日共 3 个 PR 进入已关闭状态（**全部为合并关闭，未见拒绝**），推进了以下方向：

| PR | 标题 | 推进内容 |
|---|---|---|
| [#3882](https://github.com/nanocoai/nanoclaw/pull/3882) | fix(cli): list every approval status and drop reason the host writes | 使 `ncl approvals help` 与 `ncl dropped-messages help` 真正反映 host 实际写入的枚举值，文档与代码同步 |
| [#3885](https://github.com/nanocoai/nanoclaw/pull/3885) | fix(setup): keep the Claude CLI offer to runs that chose Claude | 修复 setup 失败时错误兜底推 Claude CLI 安装的逻辑（随后被 #3884 进一步收紧） |
| [#3890](https://github.com/nanocoai/nanoclaw/pull/3890) | feat(agent-runner): explain inbound message blocks in the chat system prompt | 在 chat system prompt 中解释 `<message>`、`<dm-history>`、`<channel-history>`、`<cross-session-context>` 等入站块的含义，降低多代理回声场景下的混淆 |

**整体评估**：今日合并的 PR 偏小型硬化与体验改进，没有大型特性落地，但每一项都显著提升了 CLI 一致性与多代理上下文可解释性，属于"质量债务清理"型进展。

---

## 4. 社区热点

按"问题域集中度"判断，今日**最值得关注的社区议题是 Iron Proxy 在 arm64 主机上的安装链路**，共涉及 1 个 Issue 与 2 个 PR：

- **Issue [#3888](https://github.com/nanocoai/nanoclaw/issues/3888)** — Iron Proxy 在 arm64（NVIDIA DGX Spark）上安装失败：`ironsh/iron-control` 仅发布 `linux/amd64` 镜像，导致 Docker 报 `exec format error`。
- **Issue [#3881](https://github.com/nanocoai/nanoclaw/issues/3881)** — Iron Proxy 网关缺少"按主机自动批准"规则：目前只有模型域名（GET/HEAD）与只读 host 列表会被自动放行，工具技能每次访问允许 host 都要走人工审批卡片，UX 体验明显下降。
- **PR [#3891](https://github.com/nanocoai/nanoclaw/pull/3891)** — 直接解决 #3888，绕过 `versions.json` 对 `linux/amd64` 的硬钉，允许 Iron Control 在 arm64 上启动。
- **PR [#3883](https://github.com/nanocoai/nanoclaw/pull/3883)** — 配套修复：清理被遗留的 Iron Control 数据库卷与 compose 容器，使中断或失败的安装可重试。

**诉求分析**：随着 Apple Silicon、DGX Spark、Jetson 等 arm64 工作站越来越多地被开发者与研究者采用，NanoClaw 必须走出"amd64-only"的舒适区。社区诉求集中在两点：(1) 镜像多架构支持；(2) 网关代理审批策略需要更细粒度的"按 host 信任"机制，而非当前的全有/全无。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 已有 Fix？ |
|---|---|---|
| 🔴 **高** | [Issue #3888](https://github.com/nanocoai/nanoclaw/issues/3888) — Iron Proxy 在 arm64 安装直接失败（容器 `exec format error`） | ✅ [PR #3891](https://github.com/nanocoai/nanoclaw/pull/3891) 待合并 |
| 🟠 **中** | [Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881) — Iron Proxy 缺少按 host 自动批准规则（功能缺失导致的体验退化） | ⏳ 暂无对应 PR |
| 🟡 **中** | [PR #3887](https://github.com/nanocoai/nanoclaw/pull/3887) — `waitForHost` 把 readiness 探测裁剪到 deadline 内，导致重启就绪等待不可靠；delivery-poll drain 测试在 CI 满载时偶发 flake | 🔧 自带 fix |
| 🟡 **中** | [PR #3893](https://github.com/nanocoai/nanoclaw/pull/3893) — Claude Agent SDK 单个内容块流式输出超过 idle ceiling 时，host sweep 会杀死容器（heartbeat 失效） | 🔧 自带 fix |
| 🟢 **低** | [PR #3889](https://github.com/nanocoai/nanoclaw/pull/3889) — `ncl dropped-messages help` 列出了 host 永远不写的 `unknown_sender_public` reason | 🔧 自带 fix |
| 🟢 **低** | [PR #3892](https://github.com/nanocoai/nanoclaw/pull/3892) — community portal runtime 测试用 200ms sleep 等日志清理，CI 满载时偶发 flake | 🔧 自带 fix |
| 🟢 **低** | [PR #3884](https://github.com/nanocoai/nanoclaw/pull/3884) — Codex/OpenCode 或未选 runtime 的失败 setup 也会被推 Claude CLI（#3885 的强化版，已合并 #3885、补充 #3884） | 🔧 自带 fix |

**稳定性观察**：今日报告的 Bug 多为"在 CI 满载或边缘硬件上才会触发的硬化类问题"，没有出现 P0 级别崩溃或数据丢失报告。

---

## 6. 功能请求与路线图信号

- **Iron Proxy per-host auto-approval rule**（[Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3888)）— 需求清晰、实现面可控（仅需扩展 `NANOCLAW_GATEWAY_READ_ONLY_HOSTS` 或新增一类策略），**极有可能纳入下一个版本**，且与 #3888 一起构成完整的"arm64 + 易用"组合。
- **WhatsApp per-agent sender label**（[PR #3509](https://github.com/nanocoai/nanoclaw/pull/3509) + [PR #3510](https://github.com/nanocoai/nanoclaw/pull/3510)）— 这两个 PR 创建于 2026-08-25，今日仍在 OPEN 状态（**已超过 1 个月未合并**），是关于多代理共享一个 WhatsApp 身份时的发送方标识。功能方向明确，但因属于"channel 适配层 + delivery 协调层"两处联动改造，需要维护者排期。
- **CI: 强制 release-note 块**（[PR #3886](https://github.com/nanocoai/nanoclaw/pull/3886)）— 维护者自陈 2.4.0 共 91 个合并 PR 中 59 个没有 release-note 块，本 PR 要求 PR 必须勾选"无用户可见变化"或填写 release-note 才会通过 CI。这是流程改进信号，**预示 2.4.x 后续版本 changelog 生成质量将明显提升**。

---

## 7. 用户反馈摘要

由于今日新开 Issue 评论数均为 0，以下信息来自 Issue 与 PR 描述中的"使用场景还原"：

- **NVIDIA DGX Spark（arm64 工作站）用户**：使用 NanoClaw 2.4.0 + OpenCode + Advanced setup 时，Iron Control 步骤直接 fail。属于"高端硬件被一刀切挡在门外"的典型痛点。
- **网关代理用户**："每次调用允许 host 都弹一张审批卡"是 Iron Proxy 用户的高频抱怨，期望类似 Anthropic Console / Vercel AI Gateway 的"per-host policy"机制。
- **多代理共享 WhatsApp 用户**（基于 #3509/#3510 描述）：同一个 WhatsApp 号码下挂多个 agent group 时，对方无法分辨是哪一位 agent 在回复——本质上是**身份可追溯性**诉求。

整体来看，**用户没有表达对核心功能的明确不满**，反馈集中在"边缘硬件兼容性"与"权限粒度"两个方向。

---

## 8. 待处理积压

提醒维护者关注以下**长时间未推进**的项：

| 项 | 创建/最近更新 | 停滞时长 | 备注 |
|---|---|---|---|
| [PR #3509](https://github.com/nanocoai/nanoclaw/pull/3509) — delivery: pass sender label to adapters | 创建 2026-08-25，更新 2026-09-24 | ~30 天 | 仍 OPEN，依赖 #3510 |
| [PR #3510](https://github.com/nanocoai/nanoclaw/pull/3510) — whatsapp: per-agent sender label | 创建 2026-08-25，更新 2026-09-24 | ~30 天 | 与 #3509 配套 |
| [Issue #3881](https://github.com/nanocoai/nanoclaw/issues/3881) — per-host auto-approval | 创建 2026-09-24 | 1 天 | 暂无对应 PR，需尽快确认设计 |
| [PR #3891](https://github.com/nanocoai/nanoclaw/pull/3891) — Iron Proxy arm64 | 创建 2026-09-24 | 1 天 | 阻塞 arm64 用户使用 Iron Proxy，建议优先 review |
| [PR #3883](https://github.com/nanocoai/nanoclaw/pull/3883) — Iron Proxy 孤儿 DB 恢复 | 创建 2026-09-24 | 1 天 | 与 #3891 同步推进可形成完整修复闭环 |

---

## 项目健康度评分（编辑主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 13 PR + 2 Issue，维护者响应即时 |
| 社区参与度 | ⭐⭐ | 几乎所有提交来自核心团队，社区贡献较少 |
| 稳定性 | ⭐⭐⭐⭐ | 无 P0 报告，多为硬化型修复 |
| 路线清晰度 | ⭐⭐⭐⭐ | arm64 + 网关策略 + 多代理标识三条线索明确 |
| **综合** | **⭐⭐⭐⭐** | 处于稳健的"质量债务清理期"，具备发 patch 版本的条件 |

---

*报告生成时间：2026-09-25 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-09-25**

---

## 1. 今日速览

NullClaw 今日处于**高活跃度收尾阶段**，过去 24 小时共处理 12 条 Issue（10 关闭 / 2 仍开）和 25 条 PR（17 待合并 / 8 已关闭）。维护者 **vernonstinebaker** 单日提交 8 条新 PR，集中修复 CLI 流式输出、provider 错误日志、内存召回污染、对称链接技能扫描等长期问题；同时重新打开了 2 条因原 head 分支被删除而无法合并的修复（#1001、#1002），显示出维护交接正在进行中。整体而言项目处于"清扫积压、补齐文档、修复回归"的稳健节奏，没有新版本发布。

---

## 2. 版本发布

⚠️ **无新版本发布**。最近一次已知稳定版本为 **v2026.5.29**（多个 Issue 引用）和 **v2026.8.22**（[Issue #991](https://github.com/nullclaw/nullclaw/issues/991)）。

---

## 3. 项目进展

过去 24 小时共有 8 条 PR 关闭，整体推进了**稳定性修复**与**子系统文档化**两项工作：

| PR | 类型 | 关键价值 |
|---|---|---|
| [#996](https://github.com/nullclaw/nullclaw/pull/996) | fix(mcp) | 为 stdio MCP 响应读取加上 `timeout_ms`，超时终止进程组；失败初始化时清理子进程。修复了 [Issue #991](https://github.com/nullclaw/nullclaw/issues/991) Proxmox launcher 锁死问题 |
| [#986](https://github.com/nullclaw/nullclaw/pull/986) | feat(memory) | 新增 `memory.database_path` 配置，使 SQLite 主内存数据库路径可自定义，便于只读 workspace 部署 |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | feat(memory) | 重新打开被关闭的 [#979](https://github.com/nullclaw/nullclaw/pull/979)，加入 `auto_recall`、`recall_limit`、`max_context_bytes` 三个内存召回控制项 |
| [#1002](https://github.com/nullclaw/nullclaw/pull/1002) | fix(discord) | 重新打开被关闭的 [#978](https://github.com/nullclaw/nullclaw/pull/978)，将 Discord typing 线程从 512KB 栈迁至 2 MiB `HEAVY_RUNTIME_STACK_SIZE` |
| [#1006](https://github.com/nullclaw/nullclaw/pull/1006) | fix(cli) | 流式 stdout 改为 append 模式，修复 macOS 下 `pong` 类回复首字节被换行符覆盖问题 |
| [#1005](https://github.com/nullclaw/nullclaw/pull/1005) | fix(memory) | 防止归档对话分片被召回到当前 prompt，session 搜索修复 `LIMIT` 在 session 过滤前应用的 bug |
| [#1004](https://github.com/nullclaw/nullclaw/pull/1004) | fix(providers) | provider 非 2xx 响应时记录脱敏、长度限制的错误体（响应体曾经被 free） |
| [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | feat(skills) | `nullclaw skills list` 跟随 symlink；同步推出中英文 skills 文档，直接对应 [Issue #995](https://github.com/nullclaw/nullclaw/issues/995) |

**同期关闭（含非合并关闭）**：
- [#411](https://github.com/nullclaw/nullclaw/pull/411) — 工具定制系统（trigger 优先级、参数管理）
- [#319](https://github.com/nullclaw/nullclaw/pull/319) — DingTalk 官方 API + OAuth2 token 管理 + 消息撤回支持

> 综合判断：项目**未向前迈出大版本步伐**，但通过批量修复显著缩小了已知问题面，**健康度较昨日有可见提升**。

---

## 4. 社区热点

按评论数 / 反应数排序的前 5 条 Issues：

| 排名 | Issue / PR | 评论 | 👍 | 关注点 |
|---|---|---|---|---|
| 1 | [#871](https://github.com/nullclaw/nullclaw/issues/871) | 9 | 0 | 低资源设备 `web_search` 不可用（依赖 Brave API） |
| 2 | [#190](https://github.com/nullclaw/nullclaw/issues/190) | 4 | 0 | 子智能体（subagent）按 provider 派生/互联 |
| 3 | [#976](https://github.com/nullclaw/nullclaw/issues/976) | 4 | 0 | Telegram 入站 SIGSEGV（512KB 栈溢出，**[同类已修](#1002)**） |
| 4 | [#867](https://github.com/nullclaw/nullclaw/issues/867) | 1 | **3** | 给出可工作的 `config.json` 示例（按 👍 数为最关键诉求） |
| 5 | [#631](https://github.com/nullclaw/nullclaw/issues/631) | 3 | 1 | 增加 `GET /status` 监控端点 |

**背后诉求分析**：
- **配置体验**是当前最大的 UX 痛点（#867 拿到 3 票，社区对默认 `config.json` 几乎不可用表达强烈不满）。
- **Subagent 与多模态**是呼声最高的两个长期功能方向（#190、#624），分别已存在但成熟度不够。
- **可观测性**（#631 status 端点、#886 reasoning 输出）正在从"加分项"变成"刚需"。

---

## 5. Bug 与稳定性

按严重程度排列（🔴 高 / 🟡 中 / 🟢 低）：

| 级别 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **崩溃** | [#976](https://github.com/nullclaw/nullclaw/issues/976) SIGSEGV | aarch64 Linux v2026.5.29 在每条 Telegram 入站消息上崩溃，systemd `Restart=always` 致消息丢失 | ✅ [#978](https://github.com/nullclaw/nullclaw/pull/978)（已关闭，被 [#1002](https://github.com/nullclaw/nullclaw/pull/1002) 重新提交） |
| 🔴 **挂死** | [#991](https://github.com/nullclaw/nullclaw/issues/991) MCP stdio 挂死 | Proxmox CT 环境下，`nullclaw agent` 因 gateway 已持有 stdio MCP 服务而无限挂起 | ✅ [#996](https://github.com/nullclaw/nullclaw/pull/996) 已关闭合并 |
| 🟡 **CPU 满载** | [#870](https://github.com/nullclaw/nullclaw/issues/870) accept4 busy loop | WSL2 上网关线程 100% CPU 占用，Telegram 功能正常 | ❌ 无对应 PR 出现 |
| 🟡 **行为错乱** | [#976 关联] Discord typing 栈溢出 | typing 指示线程栈溢出导致整进程 abort | ✅ [#1002](https://github.com/nullclaw/nullclaw/pull/1002) 待合并 |
| 🟡 **体验缺陷** | [#871](https://github.com/nullclaw/nullclaw/issues/871) web_search 不可用 | 必须用 Brave API，低资源设备用例受限 | ❌ 无 fix，要求"直接接入 DuckDuckGo"尚未实现 |
| 🟢 **首字节损坏** | CLI macOS 流式输出 | `pong` 首字节被换行符覆盖 | ✅ [#1006](https://github.com/nullclaw/nullclaw/pull/1006) |
| 🟢 **可观测性缺口** | provider 错误体不可见 | 不抓包就看不到模型不支持工具等真实原因 | ✅ [#1004](https://github.com/nullclaw/nullclaw/pull/1004) |

**结论**：今日共有 **5 个严重程度为高/中的 Bug 获得了修复 PR**，其中 2 个（#976 的同类项、#1002）已落地，3 个（#870 WSL2 busy loop、#871 DuckDuckGo 支持、#886 reasoning 透出）仍待 PR 池接收。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 进入下版本的概率 |
|---|---|---|---|
| Ollama 工具兼容提示 | [#1000](https://github.com/nullclaw/nullclaw/issues/1000) | ❌ | 🟢 高（与 [#1004](https://github.com/nullclaw/nullclaw/pull/1004) 同源问题） |
| Skills 软链接支持 | [#995](https://github.com/nullclaw/nullclaw/issues/995) | ✅ [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | 🟢 极高（PR 已 ready） |
| 多模态视觉管道 | [#624](https://github.com/nullclaw/nullclaw/issues/624) | ❌（社区已自写 skill 缓解） | 🟡 中 |
| `GET /status` 监控端点 | [#631](https://github.com/nullclaw/nullclaw/issues/631) | ❌ | 🟡 中 |
| reasoning/thinking 透出 | [#886](https://github.com/nullclaw/nullclaw/issues/886) | ❌ | 🟡 中 |
| 全工作 `config.json` 范例 | [#867](https://github.com/nullclaw/nullclaw/issues/867) | ❌ | 🟢 高（受众广但工作量大） |
| 本地 Web 通道 + CF/Nginx | [#495](https://github.com/nullclaw/nullclaw/issues/495) | ❌ | 🟠 低（涉及安全模型） |
| Subagent 不同 provider | [#190](https://github.com/nullclaw/nullclaw/issues/190) | ❌ | 🟠 低（架构层） |

> 📌 **强烈信号**：vernonstinebaker 通过 [#1003](https://github.com/nullclaw/nullclaw/pull/1003)、[#1001](https://github.com/nullclaw/nullclaw/pull/1001)、[#1002](https://github.com/nullclaw/nullclaw/pull/1002) 直接响应社区 Issue，**显示出维护者重视 issue-to-PR 的闭环**，下一小版本（若无破坏性变更预计 v2026.9.x）将一次性消化这些可合并项。

---

## 7. 用户反馈摘要

从公开 Issue 评论归纳的真实场景与痛点：

- **🤖 嵌入式/廉价硬件场景**（[#871](https://github.com/nullclaw/nullclaw/issues/871)）：NullClaw 的核心卖点之一是"跑在弱设备上"，但 `web_search` 仍必须使用外部 API key，**与定位矛盾**。
- **🏠 自托管可观测性诉求**（[#631](https://github.com/nullclaw/nullclaw/issues/631)）：用户希望能用外部 dashboard 观察 agent 状态，**现有 CLI `nullclaw status` 不够用**。
- **📨 Telegram 消息丢失**（[#976](https://github.com/nullclaw/nullclaw/issues/976)）：崩溃重启循环直接丢弃入站消息，**生产场景下等同于丢消息**，暴露出 gateway 线程栈规划不足。
- **🧩 Proxmox / MCP 多进程部署**（[#991](https://github.com/nullclaw/nullclaw/issues/991)）：锁模型在 Proxmox LXC 下产生死锁，说明对**多入口部署的并发假设**有缺口。
- **🛠 Skills 工作流**（[#995](https://github.com/nullclaw/nullclaw/issues/995)）：用户实际维护多份 skills 副本希望用 symlink 引用，**反映出 NullClaw 装机群体已有非平凡工作流**。
- **🖼 多模态"靠 skill 兜底"**（[#624](https://github.com/nullclaw/nullclaw/issues/624)）：用户已自写图像分析 skill — 这是**功能被高度需求但未升级为核心能力**的信号。
- **❓ 调试焦虑**（[#886](https://github.com/nullclaw/nullclaw/issues/886)）：Outlook MCP 长任务 30 分钟无任何输出，**用户对"agent 是否还活着"无任何可视化线索**。

整体情绪：**对核心稳定性认可**（多个 issue 描述作者用了 NullClaw 一段时间才报），但对**配置开箱即用、错误可观测性、新手文档完善度**表达了明确的失望。

---

## 8. 待处理积压

按"已较旧 + 仍未响应"标记维护者需关注的 Issue / PR：

| 项 | 类型 | 首次创建 | 已等天数 | 链接 | 备注 |
|---|---|---|---|---|---|
| #190 | Issue | 2026-03-01 | **208 天** | [链接](https://github.com/nullclaw/nullclaw/issues/190) | Subagent 路线图型问题，⚠️ 长期无回应 |
| #411 | PR | 2026-03-10 | **199 天** | [链接](https://github.com/nullclaw/nullclaw/pull/411) | 工具定制系统，今日已关闭（请确认是合并还是弃用） |
| #319 | PR | 2026-03-05 | **204 天** | [链接](https://github.com/nullclaw/nullclaw/pull/319) | DingTalk 支持，今日关闭，需跟进是否有用户收到通知 |
| #777 | PR | 2026-04-05 | **173 天** | [链接](https://github.com/nullclaw/nullclaw/pull/777) | 文档结构清理，等待评审 |
| #776 | PR | 2026-04-05 | **173 天** | [链接](https://github.com/nullclaw/nullclaw/pull/776) | MCP / subagents / skills / voice / hardware 文档补齐 |
| #775 | PR | 2026-04-05 | **173 天** | [链接](https://github.com/nullclaw/nullclaw/pull/775) | CLAUDE.md 与 AGENTS.md 去重 |
| #774 | PR | 2026-04-05 | **173 天** | [链接](https://github.com/nullclaw/nullclaw/pull/774) | 全文档过时数字校正 |
| #983 | PR | 2026-08-03 | **53 天** | [链接](https://github.com/nullclaw/nullclaw/pull/983) | proxy 请求走 pinned curl |
| #966 | PR | 2026-06-19 | **98 天** | [链接](https://github.com/nullclaw/nullclaw/pull/966) | Android Termux 上的 secure curl fallback |

**风险提示**：
- **173 天的 4 个文档 PR（#774–777）**均来自同一作者 `telagod` 且均 OPEN，反映出**文档贡献者未被评审消化**。建议维护者对一批文档 PR 一次性 review。
- [#190](https://github.com/nullclaw/nullclaw/issues/190) Subagent 与 [#867](https://github.com/nullclaw/nullclaw/issues/867) `config.json` 范例为**两个最长期、且最易推动用户采纳的需求**，建议置顶。
- 多个被关闭 PR（#411、#319、#979、#978）需要发布 changelog 或在 release notes 中明确归属，避免贡献者流失。

---

### 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 24h 处理 37 个工作项，PR/Issue 同步推进 |
| 稳定性 | ⭐⭐⭐ | 5 个中/高严重 bug 已 attach fix，但 #870/#871 仍裸露 |
| 文档 | ⭐⭐ | 大量文档积压；vernonstineb

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：** 2026-09-25  
**数据周期：** 过去 24 小时  
**项目：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今日整体活跃度处于**低位平稳**状态，主要动态由自动化流程驱动，而非活跃的人为贡献。当日发布了一个补丁候选版本（`v1.4.1-rc.2`），新增 1 条由机器人生成的失败分类追踪 Issue，以及 1 条由 CI 自动产出的知识图谱刷新 PR，均处于 OPEN 状态，无任何合并或关闭动作。项目当前无紧急告警或突发缺陷，**健康度评估：稳定（绿色）**。

---

## 2. 版本发布

### 🚀 ironclaw-v1.4.1-rc.2 — 2026-09-24

**版本类型：** 补丁候选（Release Candidate）  
**基准版本：** `v1.4.0`

**变更说明：**

| 类型 | 内容 |
|------|------|
| 🐛 Fix | Google 扩展（Gmail、Google Calendar）现可通过 **Web UI** 配置 Google OAuth 客户端，不再强制依赖环境变量方式注入授权凭据 |

**背景解读：** 该修复显著降低了部署者在自托管 IronClaw 时集成 Google 服务的门槛。原先仅支持环境变量配置 OAuth 客户端，对于通过 Web 面板管理凭据的运维人员来说是不必要的摩擦点。此次 RC 表明团队正在收口 1.4.x 系列的边缘场景。

**破坏性变更：** 无（仍兼容 1.4.0 的环境变量配置方式）。  
**迁移注意事项：** 无需迁移操作；仅是配置入口扩展，建议在升级前确认 Web UI 凭据注入链路已正确部署。  
**链接：** [ironclaw-v1.4.1-rc.2](https://github.com/nearai/ironclaw/releases/tag/v1.4.1-rc.2)

---

## 3. 项目进展

**今日合并/关闭 PR 数：0**  
**今日新增待合并 PR 数：1**

### 📌 待合并 PR

**#7988 — `chore(agents): refresh codebase knowledge graph`**
- **作者：** `ironclaw-ci[bot]`（自动生成）
- **创建：** 2026-08-29 ｜ **更新：** 2026-09-25
- **规模：** XS ｜ **风险：** 低 ｜ **贡献者类型：** core
- **摘要：** 由夜间 CI 工作流（`Codebase Graph Refresh`）自动生成，刷新默认分支下的代码库记忆引导快照。
- **链接：** [nearai/ironclaw#7988](https://github.com/nearai/ironclaw/pull/7988)

**项目推进度评估：** 今日未对代码主体形成实质推进，但 CI 基础设施维护流程运转正常，知识图谱刷新类 PR 是维护代码助手长期上下文一致性的重要物料，建议核心维护者按节奏合并。

---

## 4. 社区热点

**今日评论/反应最活跃条目：无**（所有新开条目评论数均为 0）。

**唯一新增 Issue：**

**#8111 — Daily ironclaw failure taxonomy — 2026-09-24**
- **作者：** `pranavraja99` ｜ **评论：** 0 ｜ **👍：** 0
- **性质：** 由自动化机器人每日产出的失败案例分类追踪 Issue（疑似用于跟踪 benchmark 退化）。
- **链接：** [nearai/ironclaw#8111](https://github.com/nearai/ironclaw/issues/8111)

**诉求分析：** 该 Issue 并非传统意义上的功能/Bug 反馈，而是项目质量观测体系的一部分，用于追踪 agent 在 `officeqa` 等评测套件上的失败模式分布。其本身不构成"热点"，但反映出团队在持续监测模型行为质量。

---

## 5. Bug 与稳定性

| Issue | 严重程度 | 类型 | 状态 | 是否已有 fix PR |
|-------|----------|------|------|----------------|
| [#8111](https://github.com/nearai/ironclaw/issues/8111) | **中**（观测性，非代码缺陷） | 模型质量问题 | OPEN | ❌ 不需要（属模型行为，非代码 Bug） |

**详情：**

`officeqa` 套件中 38 个非通过任务**全部**被归类为 **deepseek-v4-flash** 模型在 **OCR 数字化财政部文档**上的真实质量失败（genuine model-quality failures）。这并非 IronClaw 代码层面的 Bug，而是底层模型在特定文档形态下的能力边界表现。

**对项目稳定性的影响：** 无直接影响。提示团队在路由策略或 fallback 机制上可考虑针对 OCR-重文档场景做能力分层，但今日无紧急行动要求。

---

## 6. 功能请求与路线图信号

**今日新增功能请求：0**

**间接路线图信号：**

- 来自 `v1.4.1-rc.2` 的 OAuth Web UI 配置支持，反映出团队正在**降低自托管部署者的运维摩擦**，未来版本可能继续沿"配置 UI 化、弱化环境变量依赖"的方向演进。
- `officeqa` 失败分类每日追踪 Issue 持续开新，暗示团队对**模型路由/评估管线**投入持续关注。

---

## 7. 用户反馈摘要

**今日 Issues 区评论数：0** → 无新增的、可提炼的真实用户文本反馈。

**可间接观测的信号：**

- 失败分类 Issue 中提及的 `deepseek-v4-flash` + `OCR 数字化 Treasury 文档` 组合，可能对应真实用户在处理扫描件/影印件类公文时的痛点场景，但今日未直接有用户就此发声。

---

## 8. 待处理积压

| 条目 | 类型 | 已开放时长 | 提醒事项 |
|------|------|------------|----------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR（CI 自动化） | ≈ 27 天（自 2026-08-29） | ⚠️ 虽为低风险自动 PR，但开放近一个月仍未合并，可能影响知识图谱与默认分支的一致性基线，建议维护者优先处理 |

**维护者建议：**
1. 优先合并 **#7988** 以保持 agent 代码库记忆快照与代码现实同步。
2. 关注 **`v1.4.1-rc.2`** 的社区验证反馈（RC2 与 RC1 修复相同，可能很快推进 GA）。
3. 对 **`officeqa` 类失败分类**长期累积趋势，建议在路线图层面纳入正式讨论，避免每日的失败 Issue 沉淀为噪音。

---

## 📊 数据附录

| 指标 | 数值 |
|------|------|
| 过去 24h 新开/活跃 Issues | 1 |
| 过去 24h 关闭 Issues | 0 |
| 过去 24h 新开 PRs | 1 |
| 过去 24h 合并/关闭 PRs | 0 |
| 新发布版本 | 1（`v1.4.1-rc.2`） |
| 整体活跃度评级 | 🟢 低位平稳 |

---

*报告生成时间：2026-09-25 ｜ 数据来源：GitHub REST API（nearai/ironclaw）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-25**
**项目：netease-youdao/LobsterAI**

---

## 一、今日速览

LobsterAI 项目今日整体活跃度处于中等偏低水平。过去 24 小时内共有 18 条 Issue 更新（其中 16 条因长期未响应被标记为 `stale` 后自动关闭，仅 2 条保持 OPEN 状态），11 条 PR 更新（5 条待合并、6 条已合并/关闭），无新版本发布。

从 PR 看，项目维护团队在 OpenClaw 子模块和 Cowork UI 体验上有实质性推进：连续合入了 **模型输出截断修复**、**OpenAI 兼容工具调用容错修复**、**调色板与布局重构** 等多个关键 PR；同期有 **OrcaRouter 第三方 Provider 集成**、**Cowork 进度卡片**、**侧边栏广告永久隐藏** 等特性 PR 等待评审。

值得注意的是，今日关闭的 16 条 Issue 多数为长期无回复被机器人归档的"陈旧"反馈，**并非真正意义上的问题修复**，社区响应机制（特别是安全类 Issue 的及时处理）仍有较大改进空间。

---

## 二、版本发布

**无新版本发布。**

根据合并的 PR 内容（#2761、#2759、#2762/#2760、#2373、#2358），预计下一个版本将聚焦 OpenClaw 模型调用稳定性与 Cowork UI 视觉重构，建议关注里程碑更新。

---

## 三、项目进展（已合并/关闭 PR）

| PR | 标题 | 影响范围 | 状态 |
|----|------|---------|------|
| [#2761](https://github.com/netease-youdao/LobsterAI/pull/2761) | fix(openclaw): resolve model output-length truncation issues | openclaw / renderer / main | ✅ Closed |
| [#2762](https://github.com/netease-youdao/LobsterAI/pull/2762) | feat(ui): align palette and layout | renderer / main / cowork | ✅ Closed |
| [#2760](https://github.com/netease-youdao/LobsterAI/pull/2760) | feat(ui): align palette and layout（内容近似 #2762） | renderer / main / cowork | ✅ Closed |
| [#2759](https://github.com/netease-youdao/LobsterAI/pull/2759) | fix(openclaw): repair and continue malformed OpenAI-compatible tool calls | docs / main / openclaw | ✅ Closed |
| [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) | fix(cowork): sync image attachments with model capability | renderer / cowork | ✅ Closed |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | fix(cowork): show feedback when session rename fails | renderer | ✅ Closed |

**主要推进点：**

- **OpenClaw 模型调用可靠性提升**：
  - [#2761](https://github.com/netease-youdao/LobsterAI/pull/2761) 修复了 GLM-5.3 等模型因 `max_tokens` 默认值过低而中途被截断的严重问题；同时修正了内置模型目录只扫描 `dist/extensions` 而遗漏 `third-party-extensions`（volcengine / zai / deepseek 等）的缺陷。
  - [#2759](https://github.com/netease-youdao/LobsterAI/pull/2759) 向 OpenAI 兼容补全回移植了上游字符串字面量修复逻辑，使包含原始控制字符或非法转义的工具调用不再被直接丢弃，并允许最多 2 次内部续接，避免"工具已执行但被错误丢弃"的副作用。

- **Cowork UI 视觉重构**：#2760 与 #2762 共同完成了主题色板与布局对齐——改为中性灰阶（去除蓝调）、主内容区与侧边栏贴边（不再是内嵌卡片）、侧边栏导航项改为 14px 宽胶囊按钮、窗口宽高独立适配 24pt 侧边栏。

- **附件与可访问性细节**：#2373 解决了切换模型时图片附件处理方式（base64 vs 文件路径）不同步的问题；#2358 让会话重命名失败时给用户可见的本地化反馈。

整体看，项目在**"稳定调用第三方模型 + UI 现代化"两条主线上稳步推进**，且 PR 节奏密集、质量较高。

---

## 四、社区热点（评论最多 / 最受关注）

| 排名 | Issue / PR | 标题 | 评论数 | 👍 | 状态 |
|----|-----------|------|------|----|------|
| 1 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端会假死 | 4 | 0 | ⚠️ Closed (stale) |
| 2 | [#2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | 建议：借鉴 WorkBuddy 任务预输入、延长单次运行时长、调整技能 UI 布局 | 4 | 0 | ⚠️ Closed (stale) |
| 3 | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 重复输出文字是否大量消耗 token？ | 4 | 0 | ⚠️ Closed (stale) |
| 4 | [#2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | LobsterAI 是否计划支持 Hermes Agent？ | 4 | 0 | ⚠️ Closed (stale) |
| 5 | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 图片附件不随模型切换重新处理 | 3 | 0 | 🟢 OPEN |
| 6 | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | [Security] MEDIA: 自动加载导致任意本地文件读取 | 3 | 0 | ⚠️ Closed (stale) |

**热点诉求解读：**

- **任务连续性与超时**（#2120）：用户希望参考 WorkBuddy 在任务运行中预输入下一个任务，并显著延长单次任务运行时长，反映出现有"单任务串行 + 超时即终止"模式与实际长任务（如数据获取脚本监控）不匹配。
- **Token 经济性焦虑**（#2121）：用户担忧模型在 Claw 执行中重复输出造成 token 浪费，希望官方就 dedup/截断策略给出说明。
- **多代理生态兼容**（#2131）：社区对 Hermes Agent 接入意愿明显，间接反映用户希望 LobsterAI 成为"多代理枢纽"而非绑定单一 Agent 框架。
- **视觉模型附件 bug**（#1861）：虽然是 OPEN 状态，但已有 [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 修复 PR 被合并，建议维护者同步关闭原 Issue。

---

## 五、Bug 与稳定性

| 严重度 | Issue | 问题 | 是否有 Fix |
|------|-------|------|-----------|
| 🔴 高 | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 桌面端"数据备份"导致主进程 100% 卡死（Win 11 24H2 / SQLite 71.6 MB WAL 模式可复现） | ❌ 无（已 stale 关闭） |
| 🔴 高 | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) | 安装阶段反复出现 `Resource extraction failed: could not start extractor process`（退出码 -2147450726） | ❌ 无（已 stale 关闭） |
| 🟠 中 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动至顶端后会假死 | ❌ 无（已 stale 关闭） |
| 🟠 中 | [#2216](https://github.com/netease-youdao/LobsterAI/issues/2216) | Memory Search embedding provider 被锁死为 OpenAI，索引重建遇 EBUSY | ❌ 无（已 stale 关闭） |
| 🟠 中 | [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861) | 切换模型时图片附件 base64/路径不同步 | ✅ [PR #2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 已合并 |
| 🟠 中 | [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) | 相同模型 LobsterAI 比 CodeBuddy 慢 10×（2m24s vs 25 分钟，Token 60M vs 67k） | ❌ 无（已 stale 关闭） |
| 🟡 低 | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 对话框只能添加文件，无法添加文件夹 | ❌ 无（OPEN） |
| 🔴 安全 | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | MEDIA: 引用触发任意本地文件读取 | ❌ 无显式修复 PR |
| 🔴 安全 | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | 浏览器恢复内网访问并弱化 SSRF 防护 | ❌ 无显式修复 PR |
| 🔴 安全 | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | 本地 Token 代理无认证，任意本地进程可重放受害者的服务端模型 API | ❌ 无显式修复 PR |
| 🔴 安全 | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | NIM 出站媒体流可被构造绝对路径外发本地文件 | ❌ 无显式修复 PR |
| 🔴 安全 | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | HTML 预览服务器跟随 in-root symlink 泄露本地文件 | ❌ 无显式修复 PR |

**⚠️ 关键风险提示**：5 条由 [@YLChen-007](https://github.com/YLChen-007) 提交的安全类 Advisory 全部以 `stale` 状态被自动关闭，未见关联修复 PR。考虑到这些涉及本地提权 / SSRF / 文件泄露 / Token 重放等高危链路，建议维护团队**重新审查并公开修复进度**，避免在生产环境中被滥用。

---

## 六、功能请求与路线图信号

| 候选功能 | 来源 | 已对应 PR | 可能性评估 |
|---------|------|---------|----------|
| OrcaRouter 多模型网关接入 | [PR #2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | ✅ 已有 PR 待合并 | 🟢 高（结构完整，复用 OpenRouter 模式） |
| Cowork 中显示原生 OpenClaw 进度卡片 | [PR #2758](https://github.com/netease-youdao/LobsterAI/pull/2758) | ✅ 已有 PR 待合并 | 🟢 高（提升多步骤任务可观测性） |
| 侧边栏广告永久隐藏开关 | [PR #2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | ✅ 已有 PR 待合并 | 🟢 高（解决用户长期抱怨） |
| 带斜杠模型 ID 的 Provider 前缀保留 | [PR #2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | ✅ 已有 PR 待合并 | 🟢 高（修复 HuggingFace / DeepSeek 类命名空间） |
| 借鉴 WorkBuddy 的任务预输入队列 | [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | ❌ 无 | 🟡 中（需架构改动） |
| 延长单任务运行时长（突破 terminated） | [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | ❌ 无 | 🟡 中 |
| Hermes Agent 兼容 | [Issue #2131](https://github.com/netease-youdao/LobsterAI/issues/2131) | ❌ 无 | 🟡 中（路线图信号） |
| 技能界面 3 列布局（2560×1600） | [Issue #2120](https://github.com/netease-youdao/LobsterAI/issues/2120) | ❌ 无 | 🟡 中 |
| 对话框支持 @文件夹 | [Issue #2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | ❌ 无 | 🟡 中（小型 UX 改进） |
| "AI Collaborator" 命令栏 + 任务调度台 | [Issue #218

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

# CoPaw 项目日报 · 2026-09-25

> 数据范围：2026-09-24 ~ 2026-09-25 GitHub 仓库活动
> 注：仓库主体标识为 `agentscope-ai/CoPaw`，本期 Issues/PR 数据源指向同组织的 `agentscope-ai/QwenPaw`，下文统一以 CoPaw 项目口径呈现。

---

## 1. 今日速览

CoPaw 仓库在过去 24 小时内保持中等偏高的活跃度：**Issues 更新 20 条**（16 条活跃、4 条关闭），**PR 更新 19 条**（3 条关闭、16 条待合并），无新版本发布。社区讨论重心仍围绕 **2.2.x 系列（2.2.0/2.2.1/2.2.2-beta）的稳定性和上下文管理**——`LightContextManager`、`RetryChatModel`、provider 兼容性、Console 侧边栏重构等是高频出现的主题；新出现的 PR 密度很高（lihongyuan99 一人当日提交 5 个 first-time-contributor 修复），表明 v2.2.2 beta 阶段正在密集收尾。预计下一个 beta/release 候选窗口将聚焦 Console 体验、Provider 鲁棒性和上下文管理三个方向。

---

## 2. 版本发布

**无新版本发布**。当前公开版本仍为 `v2.2.2-beta.3`（参见 [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968)），未观察到 tag 变更。

---

## 3. 项目进展（今日合并/关闭 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) | `fix(console): default session list grouping to source` | Console 侧边栏默认按 source 分组，作为 [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) 的直接跟进；当日即关闭 |
| [#7971](https://github.com/agentscope-ai/QwenPaw/pull/7971) | `fix(console): gate tool-call lifecycle queries on execution start` | 修复 Console 在 `plugin_call` 消息完成即开始轮询，导致在 `on_acting` 真正注册 ToolCoordinator 之前出现空状态抖动 |
| [#7960](https://github.com/agentscope-ai/QwenPaw/pull/7960) | `fix(providers): recover after stalled stream cleanup` | 非协作式流式 provider 长时间停留在 deferred cleanup，导致模型 key 被 quarantine；引入 60 秒单调时钟恢复窗口 |

整体看，**v2.2.2 系列已进入"边发边修"的 beta 阶段**：上述三处修复均针对回归或鲁棒性细节，没有触动大架构。PR 关闭节奏（合并→回归→再修复）显示维护团队对新版本暴露问题响应及时。

---

## 4. 社区热点

**最热议题：[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版后续路线讨论**
- 评论 32 条、👍 4，是本期数据中最受关注的话题
- 用户希望 Hub 版提供：多用户访问、admin 管理的技能、组织级 memory/审计/计费
- 该帖是少数用户主动表达正向建设性意见的入口，**对项目从"个人助手"向"团队产品"演进的战略方向有信号意义**

**其他高讨论度（评论数 ≥4）：**
- [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576)（评论 6，**已关闭**）：`RetryChatModel` 硬编码 32768 context 窗口 → 触发 `CONTEXT_UNFIT`
- [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)（评论 6，开放）：上下文压缩只看可见对话、不计完整 request 预算
- [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377)（评论 5，开放）：Console 中 Loop 模式配置不持久化
- [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)（评论 4，开放）：Daily Paper 在 arxiv 不可达时静默失败
- [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)（评论 4，开放）：飞书单 session queue consumer 卡死后新消息进不来
- [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)（评论 4，**长期未结**）：context compaction 丢失 tool_call 结构

**诉求共性：** 用户主要痛点集中在 *长任务上下文治理* 与 *多端/多渠道稳定性* 两个老问题，新功能需求则偏向 Console UI 与移动端。

---

## 5. Bug 与稳定性

按严重程度排序（已有关联 fix PR 的标注 ✅）：

| 严重度 | Issue | 描述 | 状态 / Fix |
|---|---|---|---|
| 🔴 高 | [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | `DriverManager.reload_driver` 的 read-modify-write 在 handler build 期间被并发写入覆盖，丢失 driver card 更新 | **未关联 fix PR** |
| 🔴 高 | [#7857](https://github.com/agentscope-ai/QwenPaw/issues/7857) | ACP 同步关闭回退路径可能跳过 session cleanup 并泄漏 event loop | **未关联 fix PR** |
| 🔴 高 | [#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书私聊 session queue consumer 长驻卡死、之后消息静默 | **未关联 fix PR** |
| 🟠 中 | [#7966](https://github.com/agentscope-ai/QwenPaw/issues/7966) | 切换 provider 后历史 `file://` media URL 被 `invalid_parameter_error` 拒绝，会话永久坏掉 | ✅ [#7973](https://github.com/agentscope-ai/QwenPaw/pull/7973) `fix(agents): recover from rejected media URLs`（开放） |
| 🟠 中 | [#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628) | Context compaction 仍可能超出 provider 完整 request 预算 | 未关联 PR |
| 🟠 中 | [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | Daily Paper 在 arxiv 不可达时静默失败、错误被吞 | 未关联 PR |
| 🟠 中 | [#7856](https://github.com/agentscope-ai/QwenPaw/issues/7856) | `qwenpaw-pet 0.1.1` 因丢弃 `actor` 参数破坏工具审批 | **已关闭** |
| 🟠 中 | [#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968) | 侧边栏 v2.2.2b3 重构后无法创建/查看聊天组/文件夹 | **已关闭**（跟进 [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972)） |
| 🟠 中 | [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) | `RetryChatModel` 硬编码 32768 context_size | **已关闭** |
| 🟡 低 | [#7963](https://github.com/agentscope-ai/QwenPaw/issues/7963) | Langfuse `tool.*` observation 永远不记录 output | ✅ [#7964](https://github.com/agentscope-ai/QwenPaw/pull/7964)（开放） |
| 🟡 低 | [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | `scroll` 驱逐策略会丢掉 tool-heavy 区段内的用户 turn | 未关联 PR |
| 🟡 低 | [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | Loop 模式配置不持久化（v2.1.0） | 未关联 PR |

**整体看：** 高严重度问题集中在 *并发更新丢失*、*异步生命周期泄漏*、*渠道 session 卡死* 三类基础设施级问题，需要维护者优先处理；中等严重度多数来自 v2.2.2 beta 的回归，已陆续通过 PR 修复。

---

## 6. 功能请求与路线图信号

下表按"是否已有相关 PR 实现"梳理本轮新需求：

| Feature Issue | 描述 | 已有相关 PR | 进入下一版本的概率 |
|---|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | Hub 多租户后续方向（多用户/admin 技能/审计） | 无（架构级） | 中（社区诉求强，但工作量大） |
| [#7978](https://github.com/agentscope-ai/QwenPaw/issues/7978) | 侧边栏跨 agent "Recent Sessions" 面板 | 无 | **高**（UI 增强，依赖侧边栏架构） |
| [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | Agent 自治的上下文管理（eviction 触发权交还 agent） | 无 | 中（需配合 [#7965](https://github.com/agentscope-ai/QwenPaw/pull/7965) 类工作） |
| [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | Realtime voice chat（语音输入/打断/播放） | **已实现**（开放 PR） | **高** |
| [#7931](https://github.com/agentscope-ai/QwenPaw/pull/7931) | 会话级 SQLite 转写历史 + 翻页 | **已实现**（开放 PR） | **高** |
| [#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861) | Console 多 tab 鉴权终端（xterm） | **已实现**（开放 PR） | 中 |
| [#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) | 允许为 ReMeLight 记忆写入单独指定模型 | **已实现**（开放 PR） | 高（成本敏感用户友好） |
| [#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) | 官方移动端 App（至少 Android） | 无 | **低**（用户已自建非官方客户端，仍在呼吁官方版） |
| [#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) | 手动停用预制模型/频道 | 无 | 高（小改动） |
| [#4450](https://github.com/agentscope-ai/QwenPaw/issues/4450) | 简化审批命令 + 作用域（once/session/always） | 无 | 中（已存在部分实现，需完善帮助文本） |

**信号解读：**
1. *Console / Sidebar 体验* 与 *上下文管理* 是 v2.2.x → v2.3 候选窗口的最大公约数；
2. 语音交互（[#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785)）、多终端（[#7861](https://github.com/agentscope-ai/QwenPaw/pull/7861)）、多模型记忆写入（[#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719)）三处大型 PR 已开放，需关注 review 速度；
3. 官方移动端长期高需求但短期内难以官方兑现。

---

## 7. 用户反馈摘要

- **长上下文稳定性是最大共识痛点**：多名独立用户（[#7628](https://github.com/agentscope-ai/QwenPaw/issues/7628)、[#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856)、[#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836)）反映压缩/驱逐策略在 tool-heavy 场景下行为不可预测，错误信息与失败时机晦涩。
- **错误日志"静默吞错"令人失望**：[#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715)（Daily Paper）、[#7968](https://github.com/agentscope-ai/QwenPaw/issues/7968)（Console 侧边栏回归）都出现"前端成功提示 + 后端实际失败"的体验断层，用户多次提到希望暴露真实错误。
- **多渠道/多 agent 使用场景真实存在**：[#7534](https://github.com/agentscope-ai/QwenPaw/issues/7534)（飞书私聊长时卡死）、[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)（Hub 多租户）证明 CoPaw 已被用于团队/IM 接入场景，远超"个人助手"定位。
- **成本敏感型用户希望记忆写入可降配**：[#7719](https://github.com/agentscope-ai/QwenPaw/pull/7719) 的动机就是 chat 用昂贵模型、记忆写入用便宜模型，是非常务实的诉求。
- **部分小问题反映"强迫症 UX"**：[#7957](https://github.com/agentscope-ai/QwenPaw/issues/7957) 想禁用未使用的预制模型/频道，反映了 *界面整洁度* 也是粘性因素。
- **官方移动端呼声高但被部分自行动手缓解**：[#7976](https://github.com/agentscope-ai/QwenPaw/issues/7976) 作者已自建非官方 Android 客户端，说明社区参与度深。

---

## 8. 待处理积压

| 类型 | 链接 | 关注理由 |
|---|---|---|
| 长期未结 Issue | [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | 2026-07-08 创建，已逾 2 个月仍未合入修复；tool_call 在 context compaction 中丢失结构是反复出现的根因 |
| 长期未结 Issue | [#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) | 2026-08-28 创建的 Console 配置持久化问题；同一时期 [#7972](https://github.com/agentscope-ai/QwenPaw/pull/7972) 关闭但未触及此主题 |
| 长期未结 Issue | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 评论数最高的"讨论"贴，仅 👍 4；维护者应考虑给出阶段性官方回应以稳定社区预期 |
| 长期未结 PR | [#7500](https://github.com

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-25

---

## 1. 今日速览

ZeroClaw 今日保持高强度开发节奏，过去 24 小时共发生 **74 次更新**（24 条 Issue + 50 条 PR），但**无新版本发布**。工作重心明显倾斜于**安全加固、SOP（标准操作流程）控制平面收尾**以及 **ZeroRelay v0.9.0 里程碑准备**。当日关闭 4 个 Issue、8 个 PR，其中 #10259（RPC 认证主体强制）和 #9899（移除 matrix-sdk 临时安全豁免）属于关键的安全闭环。整体处于"密集重构 + 安全收紧"的稳定推进期，未见明显阻塞或倒退。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最近一次发布参考 [#10814 Tracker: Release efficiency and repeatable publication](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)，维护团队正在评估 v0.8.5 之后的发布流程优化。

---

## 3. 项目进展

### 已关闭的 Issue（4 条）

| 编号 | 标题 | 类别 | 意义 |
|---|---|---|---|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | 移除 matrix-sdk → imbl 临时安全豁免（RUSTSEC-2026-0247 / 0292） | 安全/P1 | 安全 CI 告警清理完成 |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web Dashboard 中关闭聊天窗口导致 Agent 停止 | Bug/P1 | UX 流程阻断已修复 |
| [#9805](https://github.com/zeroclaw-labs/zeroclaw/issues/9805) | SOP 自动模式下从 channel/cron 触发的运行永远卡在"running" | Bug/P1 | 守护进程长时间挂起风险解除 |
| [#10948](https://github.com/zeroclaw-labs/zeroclaw/issues/10948) | interruption-scope key 跨组件边界碰撞 | Bug/P2 | 频道会话隔离改进 |

### 已关闭/合并的 PR（8 条）

- [#10259](https://github.com/zeroclaw-labs/zeroclaw/pull/10259)（CLOSED）— **feat(security): RPC 强制已认证主体**（#8289 第三阶段，Size XL，high risk）。这是 OIDC 认证里程碑的关键一步，将 `AuthProvider` 验证后的主体下沉到 RPC 层。
- 其余 7 条 PR 规模较小，主要涉及依赖更新、文档与配置调整。

### 整体推进度评估

今日工作**未直接产生可观测的功能交付**，但完成了：
- 一项 P1 安全闭环（#9899）
- 一项 P1 UX 阻塞修复（#8559）
- 一项 P1 守护进程挂起修复（#9805）
- 一项关键安全架构 PR 收尾（#10259）

**健康度判断：稳步推进，架构债持续清还。**

---

## 4. 社区热点

### 评论数最高的 Issue（今日仍活跃）

| 排名 | 编号 | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | #6489 | 8 | **统一能力目录与插件迁移路线图**（Tracker） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) |
| 2 | #8519 | 7 | 调和 cargo-audit 忽略并修复 wasmtime-wasi CVE | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) |
| 3 | #9899 | 6 | matrix-sdk → imbl 安全豁免移除（今日已关闭） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) |
| 4 | #8559 | 5 | Web Dashboard Agent 中断（今日已关闭） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| 5 | #8850 | 5 | **将可选 channel/工具从编译期特性迁移到运行时 WASM 插件** | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) |
| 6 | #10315 | 5 | 重新加回浏览器注册前门（ZeroRelay） | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) |

### 诉求分析

- **"Everything is a plugin" 是社区共识方向**（#6489 + #8850）：用户希望减少编译特性、扩大运行时可插拔能力，这是产品愿景级别的讨论。
- **安全债务清理持续高优**：#8519、#9899、#10968（无审批的非交互式 Agent 回合）反映社区对零信任/最小权限的持续关注。
- **ZeroRelay 注册体验**：#10315 与关联 PR #11099/#11089 表明桌面端浏览器配对流程是 v0.9.0 的核心交付之一。

---

## 5. Bug 与稳定性

### 严重 Bug 清单（按严重程度排序）

| 严重度 | 编号 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **S0（数据丢失/安全）** | [#10968](https://github.com/zeroclaw-labs/zeroclaw/issues/10968) | 无头 Agent 回合（cron/heartbeat/SOP）未启用 `ApprovalManager`，风险策略审批静默失效 | ❌ 暂无关联 PR |
| **S0（数据丢失）** | [#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797) | `MarkdownMemory::store` 并发写时基于陈旧快照覆写，**静默丢失条目** | ❌ 暂无关联 PR |
| **S1（流程阻断）** | [#11087](https://github.com/zeroclaw-labs/zeroclaw/issues/11087) | **Windows 关闭主窗口后应用无法重新打开也无法退出**，残留 16×16 单例窗口 | ❌ 暂无关联 PR |
| **P1 安全** | [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | wasmtime-wasi CVE 仍未完全修复，audit.toml/deny.toml 漂移 | 进行中 |
| S2 | [#11094](https://github.com/zeroclaw-labs/zeroclaw/issues/11094) | Apple preflight 测试中 `time.sleep` mock 拦截子进程轮询 | ❌ |
| S2 | [#11093](https://github.com/zeroclaw-labs/zeroclaw/issues/11093) | `promote-stable` 流程未同步根级 `llms.txt` | ❌ |
| S3 | [#11097](https://github.com/zeroclaw-labs/zeroclaw/issues/11097) | 插件 egress 补救命令未转义现有授权中的撇号 | ❌ |

### 稳定性观察

- 今日**新增 4 个 S0/S1 级别 Bug**，其中两个是数据完整性/安全高危，但都**尚无对应修复 PR**。
- 安全债务集中在 **memory backend 与无头 Agent 路径**，是下一次发布前必须解决的红线。
- 已关闭的 #8559、#9805 显示维护团队对 Web UX 与守护进程卡死问题响应及时。

---

## 6. 功能请求与路线图信号

### 用户新提出的功能请求

| 编号 | 功能 | 状态 | 关联 PR | 纳入可能性 |
|---|---|---|---|---|
| [#11103](https://github.com/zeroclaw-labs/zeroclaw/issues/11103) | 添加 **Cheaper Inference** 作为 OpenAI 兼容 provider | 🆕 今日新开 | [#11104](https://github.com/zeroclaw-labs/zeroclaw/pull/11104) 已同步就绪 | **极高**（PR 已开放） |
| [#11100](https://github.com/zeroclaw-labs/zeroclaw/issues/11100) | 在成本费率目录预填中保留配置的 provider 别名 | 🆕 今日新开 | ❌ 暂无 | 高（与 Zerocode 体验相关） |
| [#11096](https://github.com/zeroclaw-labs/zeroclaw/issues/11096) | **RFC: 基于风险的合并结果新鲜度** | 🆕 今日新开 | ❌ 暂无 | 中（流程改进型 RFC） |

### 路线图信号

- **SOP 控制平面 5/5**（[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)）正在通过 [#10155](https://github.com/zeroclaw-labs/zeroclaw/pull/10155)（XL size）、[#10522](https://github.com/zeroclaw-labs/zeroclaw/pull/10522) 持续推进。
- **ZeroRelay v0.9.0**（[#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358)、[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）正在通过 [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099)（打印配对链接和 QR 码）打开浏览器前门体验。
- **运行时组合边界收尾**（[#10993](https://github.com/zeroclaw-labs/zeroclaw/issues/10993)）— 配合 #10551（XL size，agent 端配置编辑）。
- **Provider 生态扩张** 明显加速：Cheaper Inference 加入的同时，Anthropic 缓存 TTL 可调（[#10960](https://github.com/zeroclaw-labs/zeroclaw/pull/10960)）、Antigravity CLI 工具接入（[#11076](https://github.com/zeroclaw-labs/zeroclaw/pull/11076)）。

---

## 7. 用户反馈摘要

从今日活跃 Issue 与评论中提炼：

1. **数据丢失焦虑（高情绪强度）**
   - #10797：用户报告 Markdown 记忆后端在并发 `store()` 时静默丢失条目，标记 S0。社区核心需求：**记忆系统的写入原子性保证**。

2. **无头场景下的"失控"焦虑**
   - #10968：cron / heartbeat / SOP 自动 / `spawn_subagent` 等路径完全不经过 `ApprovalManager`，意味着任何风险策略审批都被绕过。这触及**"Agent 是否会自主做危险动作"**的核心信任问题。

3. **桌面端可用性抱怨**
   - #11087：Windows 用户报告关闭窗口后无法重启也无法退出，必须手动杀进程。这是一个**首次安装即可能遭遇**的体验灾难。

4. **Web Dashboard UX 阻塞（已解决但体现痛点）**
   - #8559（已关闭）：用户希望"看一眼 Agent 进度"而不被迫接管。这是**异步任务监控**的普遍需求。

5. **文档组织混乱**
   - [#11088](https://github.com/zeroclaw-labs/zeroclaw/issues/11088)：用户反馈多 Agent 设置文档错放在 "Contributing" 下，应该归入 "Agents" 分类。**用户实际期望**：文档结构与心智模型一致。

6. **配置体验碎片化**
   - #11100：成本编辑器在调用目录时把 provider 简化成 family，导致别名丢失，破坏了用户在配置中精心维护的命名。

---

## 8. 待处理积压

### 长期未关闭的重要 Issue（按创建日期排序）

| 编号 | 创建日期 | 主题 | 当前状态 |
|---|---|---|---|
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | 2026-05-06 | 统一能力目录与插件迁移路线图 | 8 条评论 · in-progress |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | 2026-06-30 | wasmtime-wasi CVE 调和 | 7 条评论 · 安全高危 |
| [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 2026-07-08 | 编译特性 → 运行时 WASM 插件 | 5 条评论 · in-progress |
| [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | 2026-08-24 | 浏览器注册前门重建 | 5 条评论 |

### 长期未合并的关键 PR（Size XL，多为 8 月份提交）

| 编号 | 标题 | 状态 |
|---|---|---|
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | 会话持久化提示附件 | needs-author-action |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | `SessionBackend::claim_session_agent_alias` 共享契约 | needs-author-action |
| [#10430](https://github.com/zeroclaw-labs/zeroclaw/pull/10430) | Gemini 语音到语音 broker 频道（PR1） | needs-author-action |
| [#10551](https://github.com/zeroclaw-labs/zeroclaw/pull/10551) | Agent 端配置编辑（含策略预览） | 等待评审 |

### 维护者提醒

- **S0 级别 Bug 无 fix PR**：#10968、#10797 需要立即分配 owner。
- **Windows 平台 S1 Bug #11087** 影响所有 Windows 首次用户，建议优先 hotfix。
- **5 个 Size XL 的 PR** 自 8 月起堆积，平均评审延迟已超过 25 天，建议维护者集中清理一波以释放 RFC #5574 的 Phase 2/3 路径。
- **ZeroRelay v0.9.0 里程碑**（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）的进度依赖多个待合并 PR，需明确发版时间表以管理社区预期。

---

### 数据来源

- [zeroclaw-labs/zeroclaw Issues](https://github.com/zeroclaw-labs/zeroclaw/issues)
- [zeroclaw-labs/zeroclaw Pull Requests](https://github.com/zeroclaw-labs/zeroclaw/pulls)

*报告生成时间：2026-09-25 · 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*