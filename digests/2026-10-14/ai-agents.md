# OpenClaw 生态日报 2026-10-14

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-14 03:05 UTC

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
**日期：2026-10-14**

---

## 1. 今日速览

OpenClaw 项目今日保持高强度活跃：**24 小时内有 500 条 Issues 更新**（273 新开/活跃、227 关闭）和 **500 条 PR 更新**（365 待合并、135 已合并/关闭），并连发两个版本 `v2026.10.3`（正式版）与 `v2026.10.5-beta.3`（beta 版）。Issue 关闭/活跃比约为 0.83，PR 待合并/已合并比约为 2.7——后者明显高于健康阈值（约 1.0），说明 backlog 在持续膨胀，维护者审查带宽紧张。多条 **P0 release-blocker** 仍处于 OPEN 状态（SQLite WAL 失控、Gateway 启动退化、npm global install swap 失败等），核心问题集中在 **存储治理（SQLite/WAL/磁盘）、Gateway 启动/重启链路、平台差异（macOS/Win）和更新器鲁棒性** 四条主线上。整体上仍是一个"积极推进 + 积压严重"的高迭代状态。

---

## 2. 版本发布

### 🟢 v2026.10.3（正式版）
- **规模**：90 commits / 79 PRs / 99 contributors
- **定位**：本月稳定版，承载完整 release notes（[docs.openclaw.ai](https://docs.openclaw.ai)）
- **影响面**：覆盖 web-ui、gateway、agents、cli、commands、scripts、docker、memory-core 等核心子系统
- **迁移注意**：建议从 `2026.9.x` 直接升级到 `2026.10.3`（同时提供针对 `2026.9.33` 的 backport PR，见下文 #171531）

### 🟡 v2026.10.5-beta.3（beta 版）
- **关键亮点**：升级流程不再中断 Gateway 运行
  - **pnpm 12 安装**：Gateway 服务与 `openclaw` 启动器保持在 durable install path
  - **Windows 更新**：Scheduled Task 接受合格的账户配置及自身验证驱动
  - **macOS 更新**：Bun 服务容器对受保护配置可继续工作
- **隐含风险**：beta 链上存在并发已开 Issues，如 #170331（beta.2 update candidate config read exits 1）和 #170332（beta 更新在原状态捕获阶段仍继续），需关注后续 beta 收尾
- **建议**：生产环境暂用 `v2026.10.3`，beta 通道仅建议有运维容错能力的用户试用

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#168338](https://github.com/openclaw/openclaw/pull/168338) | 修复 context-overflow-midturn-precheck 估算器（已合入 main，45c7bc9） | 解决 issue #101929 长期未解的 token 估算偏差（2.3–2.6x），缩小计费差异 |
| [#171533](https://github.com/openclaw/openclaw/pull/171533) | **已关闭** fix: show attached work without empty Details expanders | Web UI 体验优化（被关闭，应被其他实现替代） |
| [#171135](https://github.com/openclaw/openclaw/pull/171135) | **已关闭** workboard: keep chat catalog reads out of card history | 桌面端 chat stall 的修复尝试（已关闭） |
| [#171580](https://github.com/openclaw/openclaw/pull/171580) | **已关闭** fix(agents): keep in-flight tool calls pending in session forks | 分叉时正确报告 pending 状态的方案（被关闭） |

整体看，**Web UI 渲染层从 Lit 向 Solid 迁移**形成了一批并行 PR（#171566、#171555、#171563、#171533），属于长期架构升级；性能侧的多个 PR（#171579、#171592、#171597、#171605、#171607、#171610）密集出现，表明团队正系统性地削减 main-thread CPU 占用。**真正可宣告"修好"的硬伤较少**，今日合入主干的"成品级"修复主要是 #168338 一条。

---

## 4. 社区热点

### 🔥 最高讨论度 Issue
1. **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Agent SQLite WAL 失控增长至 1.4–2.8 GB，阻塞 Gateway 启动（Windows，2026.9.2/9.3）
   - **123 条评论**、P0、🦪 silver shellfish、regression-blocking
   - 社区诉求：解决 `agent/openclaw-agent.sqlite-wal` 在 `wal_autocheckpoint=1000` 下仍不 checkpoint 的根本问题

2. **[#148707](https://github.com/openclaw/openclaw/issues/148707)** — 回复丢失："Reply operation has no active tool authority snapshot"
   - 19 评论、P1、🐚 platinum hermit；同 session 内并发 run 位移 in-flight turn 造成回复丢失

3. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — 子进程泄漏成 zombie — **已关闭**（19 评论）

4. **[#38327](https://github.com/openclaw/openclaw/issues/38327)** — google-vertex/gemini-3.1-pro-preview 报 "Cannot convert undefined" — **P0 diamond lobster regression**（18 评论、3 👍）

5. **[#114612](https://github.com/openclaw/openclaw/issues/114612)** — memory_index_chunks / memory_embedding_cache 无保留策略 — **🦞 diamond lobster**（17 评论）

### 💬 高热度 PR
- **[#171052](https://github.com/openclaw/openclaw/pull/171052)** — feat: support host-provided acquisition for native web_fetch（XL 跨多 plugin/extension）
- **[#167796](https://github.com/openclaw/openclaw/pull/167796)** — refactor(automations): migrate periodic heartbeats and retire the executor（XL 跨 8 个 channel + 4 个 app + 9 个 extension）
- **[#171526](https://github.com/openclaw/openclaw/pull/171526)** — feat(muse): sign in to muse Code from Model Setup

### 背后的诉求总结
- **存储/性能可观测性**：WAL、tmp dir、checkpoint 三大问题同时被多名用户独立发现 → 平台治理需求迫切
- **更新链鲁棒性**：npm global install swap、state-migrated-no-rollback、macOS update retry 都属于"升级即坏"的高破坏场景
- **多端一致体验**：Telegram、Slack、Discord、WebChat、iMessage、飞书等渠道各有独立 bug → 渠道插件统一抽象尚未稳定

---

## 5. Bug 与稳定性（按严重程度）

### 🚨 P0（release-blocker）

| Issue | 简述 | Fix PR |
|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | Agent SQLite WAL 失控增长，阻塞 Gateway 启动 | ❌ 无 |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | google-vertex/gemini-3.1-pro-preview 报 null/undefined | ❌ 无 |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | `openclaw update` 在 global install swap 失败（npm） | ❌ 无 |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | Gateway 启动耗时随插件数量线性增长（120s+） | ❌ 无 |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures tmp 永不 GC，磁盘被填满 | ❌ 无 |
| [#138409](https://github.com/openclaw/openclaw/issues/138409) | `gateway-active-work` drain 卡死 plugin-updates | ❌ 无（stale） |
| [#166894](https://github.com/openclaw/openclaw/issues/166894) | Gateway restart 在 Windows 多 agent 上挂 30min–2h | ❌ 无 |
| [#167557](https://github.com/openclaw/openclaw/issues/167557) | Deferred plugin data/settings migration 永不收敛 | ❌ 无 |
| [#166221](https://github.com/openclaw/openclaw/issues/166221) | 2026.9.4 → 2026.9.8 升级在 SQLite preflight 失败 | ❌ 无 |
| [#161921](https://github.com/openclaw/openclaw/issues/161921) | `state-migrated-no-rollback` 后 doctor ↔ plugins update 互相阻塞 | ❌ 无 |
| [#137085](https://github.com/openclaw/openclaw/issues/137085) | macOS App 8.2 升级后 device identity stuck "native-importing" | ❌ 无 |
| [#161436](https://github.com/openclaw/openclaw/issues/161436) | Cloud-worker box-local tool calls 绕过 `before_tool_call`（安全） | ❌ 无 |
| [#170724](https://github.com/openclaw/openclaw/issues/170724) | macOS 2026.10.2 Retry setup 无效（**已关闭**） | ✅ [#171508](https://github.com/openclaw/openclaw/pull/171508)（waiting on author） |

### ⚠️ P1（高严重）

- [#148707](https://github.com/openclaw/openclaw/issues/148707) — tool authority snapshot 失效（19 评论）
- [#154572](https://github.com/openclaw/openclaw/issues/154572) — `sessions_spawn` 到 claude-cli 子进程总是失败
- [#144291](https://github.com/openclaw/openclaw/issues/144291) — Config 热重载 abort 所有 in-flight agent turn
- [#118839](https://github.com/openclaw/openclaw/issues/118839) — Restart recovery claim 回归（WebChat → Telegram）
- [#163029](https://github.com/openclaw/openclaw/issues/163029) — 外部插件 mid-turn 重载（40–70s 主线程 stall）
- [#125764](https://github.com/openclaw/openclaw/issues/125764) — Telegram 出站失败只重试 1 次就 dead-letter
- [#101929](https://github.com/openclaw/openclaw/issues/101929) — context overflow 估算偏差 → **已修复** [#168338](https://github.com/openclaw/openclaw/pull/168338)
- [#159512](https://github.com/openclaw/openclaw/issues/159512) — claude-cli 子代理完成时双重失效 requester 会话
- [#90840](https://github.com/openclaw/openclaw/issues/90840) — Subagent 完成输出误发给用户
- [#126950](https://github.com/openclaw/openclaw/issues/126950) — Telegram opaque callback payload 静默丢弃
- [#144336](https://github.com/openclaw/openclaw/issues/144336) — 延迟 config-reload 重启 SIGUSR1 关闭步骤失败
- [#87763](https://github.com/openclaw/openclaw/issues/87763) — SSRF guard DNS dispatcher 导致 fetch timeout（**已关闭**，linked-pr-open）
- [#158147](https://github.com/openclaw/openclaw/issues/158147) — Telegram 用户 reply 机器人时消息正文丢失
- [#128809](https://github.com/openclaw/openclaw/issues/128809) — Slack socket-mode 重连泄漏 socket 直至 10 上限
- [#155119](https://github.com/openclaw/openclaw/issues/155119) — Subagent 完成：终答丢失 + 重复 settle + deliveryStatus 卡 pending

### 🟠 P2（中等）

- [#114612](https://github.com/openclaw/openclaw/issues/114612) — SQLite memory 表无保留策略
- [#164294](https://github.com/openclaw/openclaw/issues/164294) — Gateway state DB WAL auto-checkpoint 永不完成（被 in-process reader 钉住）
- [#170331](https://github.com/openclaw/openclaw/issues/170331) — beta.2 update candidate config read 退出码 1
- [#170332](https://github.com/openclaw/openclaw/issues/170332) — beta 更新在 live DB 变化后继续
- [#48709](https://github.com/openclaw/openclaw/issues/48709) — Gemini 2.5 Pro textSignature 膨胀（stale）
- [#99659](https://github.com/openclaw/openclaw/issues/99659) — Companion App 连接后被 OOM kill
- [#149564](https://github.com/openclaw/openclaw/issues/149564) — cron lane `scheduledToolPolicy.mode="account"` 解析为 denyAll
- [#146124](https://github.com/openclaw/openclaw/issues/146124) — Control UI heartbeat sessions 绕过过滤
- [#169930](https://github.com/openclaw/openclaw/issues/169930) — Telegram partial streaming 留下截断预览

### 🟡 P3（低）

- [#111143](https://github.com/openclaw/openclaw/issues/111143) — Control UI 侧边栏 pin plugin tabs（**功能请求**，见 §6）

---

## 6. 功能请求与路线图信号

### 已开 PR、可能纳入下一版本
- **[#171526](https://github.com/openclaw/openclaw/pull/171526)** — feat(muse): sign in to muse Code from Model Setup（完善 Model Setup 一站式登录）
- **[#171052](https://github.com/openclaw/openclaw/pull/171052)** — feat: support host-provided acquisition for native web_fetch（安全/可控的网络抓取）
- **[#171600](https://github.com/openclaw/openclaw/pull/171600)** — feat: show Claw contents and open new agent chat after Add（Claw 目录体验）
- **[#169722](https://github.com/openclaw/openclaw/pull/169722)** — feat: run sessions in existing folders on paired devices（移除 Git repo 强约束）
- **[#171531](https://github.com/openclaw/openclaw/pull/171531)** — fix: backport October fixes to 2026.9.33（让 9.x 用户也能拿到 10 月修复）

### Issue 表达的需求（尚未 PR）
- **[#111143](https://github.com/openclaw/openclaw/issues/111143)** — Control UI 侧边栏 pin plugin

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析报告

**日期：2026-10-14** · 数据范围：13 个开源项目当日动态

---

## 一、生态全景

今日个人 AI 助手/自主智能体生态整体处于**"分层分化 + 多线治理"**阶段：以 OpenClaw 为代表的旗舰项目仍承担最高强度的功能迭代与稳定性修复（双版本同发、500+ Issue 活跃），但维护者带宽紧张、P0 release-blocker 长期未解；中型项目（Hermes Agent、CoPaw、ZeroClaw、LobsterAI、NanoBot）各自聚焦特定技术方向——可靠性工程、桌面集成、计费可观测性、WebUI 重构——形成清晰的"垂直深耕"格局；而 PicoClaw、IronClaw、Moltis 等则进入存量整理期，多由 stale bot 主导节凑。值得关注的是，**多条跨项目共性议题集中爆发**（SQLite/WAL 治理、Plazmi 扩展面、计费可见性、多 agent 权限边界），提示这些痛点已从单点工具问题升级为生态级共识。

---

## 二、各项目活跃度对比

| 项目 | 24h Issue | 24h PR | Release | 健康度评级 | 核心特征 |
|------|-----------|--------|---------|------------|----------|
| **OpenClaw** | 500 (273/227) | 500 (365/135) | v2026.10.3 + beta.3 | ⭐⭐⭐ 高活跃 / 积压 | 旗舰级双版本迭代，P0 积压严重 |
| **CoPaw** | 18 (14/4) | 41 (22/19) | 无 | ⭐⭐⭐⭐ 高活跃 | 59 条更新，单日合并 19 PR，方向正确 |
| **ZeroClaw** | 26 | 50 (41/9) | 无 | ⭐⭐⭐⭐ 高活跃 | v0.8.6/v0.9.0 收尾，6 条 P1 裸奔 |
| **Hermes Agent** | 50 (46/4) | 50 (42/8) | 无 | ⭐⭐⭐ 中高活跃 | 可靠性 + 依赖治理双轴推进 |
| **LobsterAI** | 1 | 17 (8 关闭) | 无 | ⭐⭐⭐ 中高活跃 | 桌面伴侣功能集中合入，含 1 安全 Issue |
| **NanoBot** | 6 | 28 (5 关闭) | 无 | ⭐⭐⭐ 中高活跃 | WebUI 整理 + 工具链精简，新用户体验短板明显 |
| **NanoClaw** | 1 | 4 (1 关闭) | 无 | ⭐⭐ 中等 | 核心团队主导的内部推进，社区静默 |
| **Moltis** | 0 | 2 (待合并) | 无 | ⭐⭐ 中等 | 多 agent 编排治理，开发者专注期 |
| **PicoClaw** | 7 (6 关闭) | 2 (1 关闭) | 无 | ⭐⭐ 低活跃 | Stale bot 主导，贡献可能被误关 |
| **IronClaw** | 1 | 1 (Dependabot) | 无 | ⭐ 低活跃 | 仅依赖更新 + 1 条外部扩展提案 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⭐ 静默 | 24 小时无活动 |

---

## 三、OpenClaw 在生态中的定位

**优势维度：**
- **规模与活跃度绝对领先**：单日 500+ Issue / 500+ PR 的处理量远超第二梯队（CoPaw 59 条、ZeroClaw 76 条），是生态事实上的"压舱石"。
- **版本节奏明确**：能在同一日连发 stable + beta 两个版本，反映完整的发布基础设施与多通道运维能力。
- **覆盖面广**：同时覆盖 web-ui、gateway、agents、cli、commands、scripts、docker、memory-core 等核心子系统，是少数做"操作系统级"布局的项目。

**与同类差异：**
- vs **CoPaw/ZeroClaw**：CoPaw 走"工具编排深耕"路线（决策模型、Code Mode、持久化聊天），OpenClaw 走"全栈平台"路线；ZeroClaw 与 OpenClaw 形态最接近，但 v0.8.6/v0.9.0 仍处于交付闸口，规模约为 OpenClaw 的 1/6。
- vs **Hermes Agent**：Hermes 集中于可靠性工程（压缩三件套、跨平台兼容性）和依赖治理，OpenClaw 范围更广但单点修复深度不及。
- vs **LobsterAI**：LobsterAI 是面向终端用户的桌面产品（专家广场、桌面伴侣），OpenClaw 面向开发者与自托管用户。

**社区规模差距：**
- OpenClaw 单日合入的 PR 涉及 99 名贡献者，是 Hermes Agent（8 PR 合并）、ZeroClaw（9 PR 合并）的 10 倍以上；
- 但 OpenClaw PR 待合并/已合并比 2.7 显著高于健康阈值（≈1.0），说明审查带宽承压；CoPaw、ZeroClaw 此比例更接近 1.1-4.5 倍，但绝对量级小；
- OpenClaw 的**安全 P0（#161436 cloud-worker 绕过 before_tool_call）**与**存储 P0（#143524 WAL 失控）**已挂账 60+ 天，反映"规模换来的代价"。

---

## 四、共同关注的技术方向

| 议题 | 涉及项目 | 具体诉求 |
|------|----------|----------|
| **SQLite/WAL 存储治理** | OpenClaw、ZeroClaw、Hermes Agent、NanoBot | WAL 失控增长、autocheckpoint 失灵、时间戳被覆盖（ZeroClaw #11420）、会话状态迁移到 SQLite（NanoBot #5943） |
| **Plazmi 扩展/MCP 集成** | PicoClaw、IronClaw、NanoBot、ZeroClaw | 利用声明式扩展面（hosted-MCP metadata、API-key 鉴权、egress 出口控制）接入第三方持久化世界 |
| **更新链鲁棒性** | OpenClaw、NanoBot、NanoClaw | npm global install swap、macOS retry、install-time 显式选择更新通道（NanoClaw #4084） |
| **多 agent 治理与权限边界** | OpenClaw、Hermes、Moltis、ZeroClaw | `spawn_agent` allowlist（Moltis #1302）、router upsert 破坏 config（ZeroClaw #11606）、tool authority snapshot 失效（OpenClaw #148707） |
| **本地模型支持** | CoPaw、ZeroClaw | Ollama 上下文窗口被云端默认值覆盖（CoPaw PR #8236）、provider profile 多模型化（ZeroClaw #9809） |
| **跨平台编码/兼容** | OpenClaw、CoPaw、LobsterAI、Hermes | Windows CRLF/GBK、macOS update retry、MSIX PATH 优先级 |
| **安全/凭据治理** | LobsterAI、ZeroClaw、OpenClaw | 硬编码口令（#2851）、shell V1 权限策略（ZeroClaw #10610）、before_tool_call 绕过（OpenClaw #161436） |
| **桌面伴侣/系统集成** | LobsterAI、NanoClaw | "用 X 打开"、Apple container 替代 Docker（NanoClaw #3503） |
| **Stale bot 误关** | PicoClaw、IronClaw | 外部贡献被静默关闭，建议人工预审白名单 |

---

## 五、差异化定位分析

| 维度 | 代表项目 | 关键差异 |
|------|----------|----------|
| **全栈平台型** | OpenClaw、ZeroClaw | 覆盖 gateway/agents/commands/docker/memory 全部子系统；P0 修复密度高，但 backlog 也最深 |
| **可靠性工程型** | Hermes Agent | 专注压缩、跨平台兼容、依赖治理；单一 PR（#138130）打包 3 项可靠性修复 |
| **桌面产品型** | LobsterAI、NanoClaw | 强调桌面伴侣、系统集成、"用 X 打开"；面向终端消费者而非开发者 |
| **垂直深耕型** | NanoBot、WebUI 整理；Moltis，多 agent 治理；ZeroClaw，计费可观测性 | 每个项目只打 1-2 个点，做深做透 |
| **生态接入型** | IronClaw、PicoClaw | 被动等待外部提案（Plazmi、Sendblue），维护者决策缺失 |
| **结构升级型** | CoPaw | 同时推进决策模型（#8205）、持久化分页（#7931）、Code Mode（#8224）等大型重构 |

**目标用户差异：**
- **开发者/自托管**：OpenClaw、CoPaw、ZeroClaw、NanoBot
- **终端消费者**：LobsterAI、NanoClaw
- **企业/受控部署**：CoPaw（决策模型、ACP）、Hermes（权限）
- **轻量个人生产力**：NanoBot（Google Workspace 工具链）、Moltis（多 agent）

**架构关键差异：**
- **会话存储**：OpenClaw/ZeroClaw/Hermes 使用 SQLite + WAL；NanoBot 仍以 JSONL 为主（NanoBot #5943 提案迁移）；CoPaw 推进 per-session SQLite（PR #7931）。
- **前端框架**：OpenClaw 正在从 Lit 迁移到 Solid；CoPaw Console 自研；NanoBot 引入 `bun run gallery` 作为组件参考库。
- **扩展面**：OpenClaw、Hermes 走 plugin/extension 路线；IronClaw 强调 declarative extension；Plazmi 提案试图统一这条线。

---

## 六、社区热度与成熟度分层

### 🔴 快速迭代阶段（高产出 + 高积压）
- **OpenClaw**：双版本同发 + 99 名贡献者，但 P0 长期挂账（SQLite WAL、Gateway 启动、npm install、security），属于"系统级演进 + 债务并行"阶段
- **ZeroClaw**：v0.8.6/v0.9.0 收尾，6 条 P1 全部裸奔，提示"集中清理关键缺陷"已到临门一脚
- **CoPaw**：59 条更新 + 19 PR 当日合并，结构级改动密集（决策模型、持久化、Code Mode），是当日最健康的"高质量快速迭代"项目

### 🟡 质量巩固阶段（专注修复 + 工具链精简）
- **Hermes Agent**：单 PR 打包 3 项压缩可靠性修复，依赖治理（httpx2、npm audit）系统化推进
- **LobsterAI**：桌面伴侣功能集中合入（#2847/#2848/#2860），但暴露出硬编码口令安全风险
- **NanoBot**：WebUI 重构、工具描述精简（直接降低 token 开销）、Google Workspace 工具链 PR 已就绪

### 🟢 内部推进 / 静默期
- **NanoClaw**：核心团队主导，但社区反馈通道活跃度低，#2899 已挂 3.5 个月
- **Moltis**：2 条 PR 待合并，专注多 agent 治理，开发者节奏
- **IronClaw**：仅 1 条 Dependabot PR + 1 条外部提案，待维护者表态
- **PicoClaw**：stale bot 主导关闭，存在"贡献被误关"治理风险

### ⚪ 无活动
- **NullClaw / TinyClaw / ZeptoClaw**：24 小时无活动，需观察是否进入维护休眠

---

## 七、值得关注的趋势信号

### 1. **SQLite/WAL 成为生态级共识**
4 个以上项目（OpenClaw、ZeroClaw、Hermes、NanoBot）同时围绕 SQLite 会话存储演化——从 JSONL 迁移（NanoBot #5943）、per-session 持久化（CoPaw #7931）、到 WAL checkpoint 失控（OpenClaw #143524）。**对开发者的参考价值**：个人 AI 助手已进入"会话数据可观测、可恢复、可治理"阶段，JSONL 已不足以支撑长会话场景。

### 2. **多 agent 权限边界成为新主线**
Moltis #1302（spawn allowlist）、ZeroClaw #10610（shell V1 权限 RFC）、OpenClaw #148707（tool authority snapshot）共同指向同一趋势：**单 agent 权限模型不再够用**。下一个版本周期的安全设计重心应放在 agent-to-agent 调用授权与"未执行动作的口述检测"（ZeroClaw #10563）。

### 3. **Plazmi 扩展面是潜在的标准范式**
4 个项目收到 Plazmi 相关提案（PicoClaw #3427、IronClaw #8136、NanoBot #6182、ZeroClaw #11705），统一强调"宿主不引入供应商逻辑，让第三方通过声明式扩展面接入"。**对生态的潜在影响**：若该模式被广泛采纳，可能形成事实上的"持久化世界"接入标准。

### 4. **计费可观测性觉醒**
ZeroClaw #11204/#11613/#10950 集中暴露 Dashboard 成本数据失真、warning 阈值失效、时间口径混乱。**对开发者的参考价值**：本地模型与多 provider 切换场景下，**用户对"看不见的成本"容忍度正在快速降低**，成本 ledger 必须做到实时、可见、可告警。

### 5. **stale bot 治理成为新治理风险**
PicoClaw 当日一次性关闭 6 条 Issue，多条由 stale bot 触发且包含有效贡献。**对项目维护者的启示**：应建立"非 stale 关闭"白名单或人工预审机制，否则会抑制外部贡献者积极性（IronClaw #8136 也已 7 天未回应）。

### 6. **桌面集成与本地替代正在兴起**
LobsterAI 桌面伴侣套件、NanoClaw Apple container 替代 Docker（#3503）、CoPaw Ollama 本地模型上下文识别（#8236），共同指向**"摆脱云端依赖、靠近用户桌面"**的趋势。这与 Pluggable Provider profile（ZeroClaw #9809）形成互补。

### 7. **结构级改动密集涌现**
CoPaw 决策模型（#8205）、持久化聊天（#7931）、Code Mode（#8224）、NanoBot SQLite 化（#5943）、OpenClaw WebUI Lit→Solid 迁移——这些都不是"加功能"，而是**框架级重构**。技术决策者应将其视为下一主版本的预告信号。

---

## 总结

今日生态呈现**"OpenClaw 一家独大 + 第二梯队垂直分工 + 尾部项目治理承压"**的格局。技术决策者应重点关注：(1) SQLite/WAL 与多 agent 权限两条主线；(2) Plazmi 扩展面是否形成事实标准；(3) 成本可观测性与本地模型支持的成熟度。对开发者而言，参与 CoPaw、ZeroClaw、NanoBot 的

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-10-14**

---

## 1. 今日速览

NanoBot 今日保持**中等偏高活跃度**：过去 24 小时共产生 6 条新 Issue 与 28 条 PR 更新（其中 5 条关闭、23 条仍待合并），但无新版本发布。**Issue 侧呈现明显的"功能请求 + 一类关键 Bug"特征**：DOCKER 镜像不可用、性能层面的每 1 秒全量扫描、两条 Google Workspace 工具提案集中出现，叠加一条免费托管服务合作请求。**PR 侧以代码清理与 WebUI/工具链小幅修复为主**，chengyongru 一次性合并了多条 WebUI 重构 PR，显示项目正在集中清理技术债。整体看，仓库处于"重整理、重文档、重用户入门体验"的整理期，未出现大规模新功能合并。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时未见任何 Release tag 推送。距离 0.3.0 系列（被 #6192 引用）的稳定版本发布尚无明确信号，重要修复（如 #6194 idle session lock、#6197 媒体类型大小写）尚停留在 PR 阶段。

---

## 3. 项目进展

今日共 **5 条 PR 被关闭**（其中 3 条信息可见，另外 2 条未列出摘要），主要技术动作集中在代码清理与 WebUI 体验梳理：

| PR | 作者 | 类型 | 影响 |
|---|---|---|---|
| [#6193](https://github.com/HKUDS/nanobot/pull/6193) | chengyongru | 重构 / Chore | 移除未使用的 provider-registry 属性、过期 WebUI CSS 选择器、冗余导出与未实例化的测试助手；保持公开契约与兼容性 shim 不变 |
| [#6201](https://github.com/HKUDS/nanobot/pull/6201) | chengyongru | 重构 / 性能 | 流线化 `my`、`message`、`subagent`、`cron`、`apply_patch`、`generate_image`、`create_goal`、`write_file`、`list_dir`、`web_search` 等内置工具描述与参数文案 |
| [#6179](https://github.com/HKUDS/nanobot/pull/6179) | chengyongru | 文档 / WebUI 重构 | 引入 `bun run gallery` 作为无网关 WebUI 组件参考库，覆盖 159/202 个源模块；新增预览优先导航与搜索 |

**进展评估**：这三笔合并虽然都是"小动作"，但累计提升了 WebUI 可维护性与工具调用 token 经济性；尤其是 #6201 的工具描述精简，会**直接降低每次模型请求的 token 开销**，对长会话场景友好。整体上属于"项目向内整理"的健康信号，**未对外部接口产生破坏**。

另外 [#6195](https://github.com/HKUDS/nanobot/pull/6195)（Google Drive 只读工具）与 [#6196](https://github.com/HKUDS/nanobot/pull/6196)（Google Sheets 工具）已**对应关闭了 Issue #6187、#6188**，说明 issue→PR 路径在 24 小时内就跑通，社区响应链路顺畅。

---

## 4. 社区热点

由于 PR 评论数在数据中显示为 `undefined`，以下热度按"关注度 + 是否有人跟进"维度排序：

- **[#6165 Default Docker 镜像不可用 + onboarding 文档糟糕](https://github.com/HKUDS/nanobot/issues/6165)** — 是当前最值得维护者注意的高优先级 issue。jerkstorecaller 描述了一个最常见的入门路径（`git clone && docker compose up`）失败，且 onboarding 文档需大量阅读才能排查。这直接打击新用户体验。
- **[#6200 agentrohit37 提出免费托管云 nanobot 合作 + README 链接请求](https://github.com/HKUDS/nanobot/issues/6200)** — 一条社区运营向的合作请求：为社区预留 100 台、每台 30 天的云算力，希望获得 README 链接位。这是观察维护者社区运营策略的窗口。
- **[#6196/#6195 + #6188/#6187 Google Workspace 工具链](https://github.com/HKUDS/nanobot/issues/6188)** — 同一人 gianfrancodemarco 在 24 小时内同时提出 Sheets 与 Drive 工具的需求与对应 PR，体现**强自我驱动型贡献者**画像。
- **[#6182 Plazmi world catch-up 示例](https://github.com/HKUDS/nanobot/issues/6182)** — 提议通过受限 MCP 工具让已有 agent 重新访问 Plazmi 这种"跨会话持续世界"的小示例，定位明确（MCP 文档与示例互补）。

---

## 5. Bug 与稳定性

按严重程度排序，并标注是否已有修复 PR：

| 严重度 | Bug | 是否有 Fix PR | 说明 |
|---|---|---|---|
| 🔴 **高** | [#6192 AutoCompact.check_expired 每秒全量扫描 sessions](https://github.com/HKUDS/nanobot/issues/6192) | ❌ **尚无 fix PR** | `AgentLoop.run` 每 1 秒 idle tick 调用 `auto_compact.check_expired`，后者调用 `SessionManager.list_sessions()`，会打开所有 `sessions/*.jsonl`。在长期运行 / 会话数较多的部署上会产生持续磁盘 I/O 放大。属于**性能回归**而非崩溃 |
| 🟠 **中高** | [#6165 默认 Docker 镜像不可用](https://github.com/HKUDS/nanobot/issues/6165) | ❌ **尚无 fix PR** | 影响所有新用户入门路径，且 onboarding 文档进一步放大了挫败感 |
| 🟡 **中** | [#6197 web_fetch 未处理大小写不敏感的 Image 媒体类型](https://github.com/HKUDS/nanobot/pull/6197) | ✅ PR 已开 | RFC 9110 明确媒体类型大小写不敏感；服务端返回 `Image/PNG` 时 `web_fetch` 误返回原始字节 |
| 🟡 **中** | [#6198 WebUI 上传未携带同源 cookie](https://github.com/HKUDS/nanobot/pull/6198) | ✅ PR 已开 | 代理 / Cloudflare Tunnel 场景下 credentials 被 `omit`，上传不可用；修复同时拒绝重定向以防凭据转发 |
| 🟡 **中** | [#6194 空闲 session 锁永不释放（修复 #4883）](https://github.com/HKUDS/nanobot/pull/6194) | ✅ PR 已开 | `WeakValueDictionary` 让 idle 锁可回收；**这是一笔长期挂账修复**，#4883 终于被关闭 |
| 🟡 **中** | [#6186 email: 附件子节点仍被纳入正文](https://github.com/HKUDS/nanobot/pull/6186) | ✅ PR 已开 | MIME walk 未跳过完整附件子树，导致附件 .eml 内容混入父邮件正文 |
| 🟡 **中** | [#6185 cron: 跨 DST 时区漂移](https://github.com/HKUDS/nanobot/pull/6185) | ✅ PR 已开 | 改用 IANA `ZoneInfo` 解析本地时区，避免 UTC offset 直读导致夏令时跳变 |
| 🟡 **中** | [#6184 email: 同名附件互相覆盖](https://github.com/HKUDS/nanobot/pull/6184) | ✅ PR 已开 | 第一个文件保留原名，后续文件加数字后缀避免覆盖 |
| 🟡 **低** | [#6183 XLSX grep 单元格定位因 tab 字符错位](https://github.com/HKUDS/nanobot/pull/6183) | ✅ PR 已开 | 改为基于实际单元格起始偏移量定位 |
| 🟢 **低** | [#6158 WebUI 浏览器通知失败无可操作反馈](https://github.com/HKUDS/nanobot/pull/6158) | ✅ PR 已开 | 重命名设置、增加权限/支持性失败提示，并避免移动端 `Notification` 构造抛出 |

**结论**：今日 Bug 数量不少但**已多数具备对应修复 PR**，唯独 **#6192（AutoCompact 每秒全量扫描）与 #6165（Docker 镜像不可用）仍是裸奔状态**，且前者具有在长期部署中放大 I/O 的隐患，建议维护者优先跟进。

---

## 6. 功能请求与路线图信号

1. **Google Workspace 工具链（强信号，极有可能进入下一版本）**
   - [#6187 Google Drive 工具](https://github.com/HKUDS/nanobot/issues/6187) ↔ PR [#6195](https://github.com/HKUDS/nanobot/pull/6195)
   - [#6188 Google Sheets 工具](https://github.com/HKUDS/nanobot/issues/6188) ↔ PR [#6196](https://github.com/HKUDS/nanobot/pull/6196)
   - 两个 PR 已具备完整设计与代码，仅待 review 与 merge，**已属于"半只脚进版本"**。

2. **Standard Compute 接入 OpenAI 兼容 provider（中等信号）**
   - [#6199](https://github.com/HKUDS/nanobot/pull/6199) — 提交者即来自 Standard Compute 团队。属第三方推广型 PR，是否合入需要维护者独立评估网关兼容性。

3. **Skill 手动调用模式（早期但长期挂账）**
   - [#5405 feat(skills): support manual-only invocation](https://github.com/HKUDS/nanobot/pull/5405) — 自 2026-08-16 创建至今已**接近两个月未合并**，属于"等维护者决策"状态。需求合理（侧效技能防误触发），有较大概率纳入下一版。

4. **会话状态迁移到 SQLite（重大架构变更信号）**
   - [#5943 refactor(session): centralize state ownership in SQLite](https://github.com/HKUDS/nanobot/pull/5943) — 自 2026-09-27 起开放，p1 优先级，标志项目正在将 JSONL 升级为权威存储、引入事务与 worker 池。若合入将是下一主版本的**架构性变更**，需要重点关注。

5. **Plazmi MCP 受限工具示例（轻量但定位巧）**
   - [#6182](https://github.com/HKUDS/nanobot/issues/6182) — 提议为 MCP 配置文档增加"跨会话世界"示例，门槛低、风险小，可作为文档补充快速合入。

6. **托管云 nanobot 合作（运营信号）**
   - [#6200](https://github.com/HKUDS/nanobot/issues/6200) — 第三方提供 100 台 / 30 天免费云实例，请求 README 链接。属于社区运营策略选择，**不直接影响代码库**。

---

## 7. 用户反馈摘要

可从 Issue 评论中提炼的真实痛点：

- **入门体验断裂**（[#6165](https://github.com/HKUDS/nanobot/issues/6165)，2 条评论）：用户期望 `git clone && docker compose up` 即可工作，但当前需要阅读大量文档。jerkstorecaller 明确点出 Docker 的"承诺"与现实不符，并抱怨 onboarding 文档"难以阅读"。这是**面向新用户最具杀伤力的体验问题**。
- **性能隐患的敏锐观察**（[#6192](https://github.com/HKUDS/nanobot/issues/6192)）：hsinchao-athena 在 v0.3.0 复现了"每 1 秒扫描所有 sessions 文件"的链式调用，反映社区中已有用户在做部署级的行为审计，期望项目对长会话场景更友好。
- **轻量用户的现实诉求**（[#6187](https://github.com/HKUDS/nanobot/issues/6187)、[#6188](https://github.com/HKUDS/nanobot/issues/6188)）：gianfrancodemarco 用朴素语言描述"小型跟踪数据存于表格 / 工作文件存于 Drive，nanobot 看不到"，说明**轻量个人生产力场景**是真实存在的需求群。
- **合作生态的友好信号**（[#6200](https://github.com/HKUDS/nanobot/issues/6200)）：agentrohit37 提出"为社区预留 100 台云算力 + 1 分钟即可用"的合作提议，反映社区对降低使用门槛的方向高度共识。

**整体满意度画像**：技术能力强的贡献者对仓库节奏满意（Issue→PR 24 小时内打通），而**新用户体验则是当前最明显的短板**。

---

## 8. 待处理积压

提醒维护者关注的长期未响应项：

| 项目 | 类型 | 创建时间 | 状态 |
|---|---|---|---|
| [#5405 feat(skills): 支持手动调用](https://github.com/HKUDS/nanobot/pull/5405) | PR | 2026-08-16 | 已开放 ~60 天，p2 |
| [#5943 refactor(session): SQLite 化](https://github.com/HKUDS/nanobot/pull/5943) | PR | 2026-09-27 | p1，但与 #6168 (#5817/#6154 集成更新) 存在潜在协调成本 |
| [#6168 feat(update): managed installs + recoverable updates](https://github.com/HKUDS/nanobot/pull/6168) | PR | 2026-10-12 | **跨 PR 集成风险**：作者明确提示需与 #5817、#6154 协调合并顺序，否则会有冲突 |
| [#6158 fix(webui): 浏览器通知失败可操作化](https://github.com/HKUDS/nanobot/pull/6158) | PR | 2026-10-11 | 标记为 `[conflict]`，与 #6168 同期大量 WebUI 改动可能存在冲突 |
| [#6192 AutoCompact 每秒扫描](https://github.com/HKUDS/nanobot/issues/619

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-10-14**
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 在 2026-10-14 维持高强度开发节奏。过去 24 小时共发生 **50 条 Issue 更新**（46 条新开/活跃，4 条已关闭）与 **50 条 PR 更新**（42 条待合并，8 条合并/关闭），无新版本发布。社区关注焦点集中在三个方向：**压缩与上下文子系统可靠性**（如 [PR #138130](https://github.com/NousResearch/hermes-agent/pull/138130) 提交的 P1 修复）、**跨平台兼容修复**（Windows MSIX、macOS Desktop、Linux/Omarchy、Wayland），以及 **依赖治理与安全**（httpx2 升级、npm audit 清零、PyJWT 安全建议）。整体健康度中等偏上：核心维护者 `ethernet8023` 在 CLI/`pm`/`doctor` 修复栈上有集中产出，`plotarmordev` 提交 P1 级 PR，但 P1/P2 级未解决 Bug 与多份 needs-decision 决策项仍构成显著积压风险。

---

## 2. 版本发布

**无新版本发布。** 当前主线仍为近期构建（Issue #138148、#138115 均标注 v0.21.7 / commit `71d34bad`）。

---

## 3. 项目进展

### 已关闭 / 合并
- [PR #90396](https://github.com/NousResearch/hermes-agent/pull/90396) — `feat(a2a): forward metadata from a2a_call`（CLOSED，关闭 [Issue #89919](https://github.com/NousResearch/hermes-agent/issues/89919)）：允许 `a2a_call` 透传通用 `metadata` 至 `SendMessage.params.metadata`，保留 peer 特定扩展键名。
- [Issue #62182](https://github.com/NousResearch/hermes-agent/issues/62182) — `custom` 别名显示问题（CLOSED）。
- [Issue #77072](https://github.com/NousResearch/hermes-agent/issues/77072) — `stage2-hook.sh` 中 `usermod` 在 rclone FUSE 挂载下挂死（CLOSED）。
- 其余 5 条合并/关闭 PR 未在样本中提供摘要。

### 关键待合并 PR（反映项目向前推进的方向）
| PR | 主题 | 严重度 |
|---|---|---|
| [#138130](https://github.com/NousResearch/hermes-agent/pull/138130) | 压缩可靠性三件套：pre-API timeout 后 fitting、aux client 重试、pass 内部重试 | **P1** |
| [#138156](https://github.com/NousResearch/hermes-agent/pull/138156) | `search_files` 支持 PDF 与 Office 文档内容检索（解决 [#101427](https://github.com/NousResearch/hermes-agent/issues/101427)） | P2 |
| [#138006](https://github.com/NousResearch/hermes-agent/pull/138006) | Windows MSIX 终端 PATH 优先级修复（`npx` MCP、`python -m venv`） | P2 |
| [#138026](https://github.com/NousResearch/hermes-agent/pull/138026) | httpx2 / httpcore2 升至 2.12.0，消除 5 项 OSV 公告 | P3（security）|
| [#138024](https://github.com/NousResearch/hermes-agent/pull/138024) | `hermes doctor` npm audits 全树清零（root / web / ui-tui / WhatsApp bridge） | P3 |
| [#138085](https://github.com/NousResearch/hermes-agent/pull/138085) | 主模型 reasoning_config 快照，避免 fallback 后 effort 残留 | P2 |
| [#138149](https://github.com/NousResearch/hermes-agent/pull/138149) | profile 复制时继承 `custom:<name>` 端点定义 | P2 |

整体看，Hermes 在 **可靠性工程 + 依赖治理** 两轴上前进了显著一步；尤其是 `ethernet8023` 一日内提交的多份"salvage"型 PR，反映出 **关闭旧 issue + 引入修复** 的集中清理节奏。

---

## 4. 社区热点

按评论数排序，今日最具讨论度的议题：

1. **[Issue #131859](https://github.com/NousResearch/hermes-agent/issues/131859) — 38 条评论**：`gh pr create` 在某 fork 上报 `CreatePullRequest` 权限错误（Issue 与 fork PR 仍可创建）。P2、被阻塞。该问题被 `gh` CLI 静默掩盖，影响自动发版流程，已 11 天未解决。
2. **[Issue #135039](https://github.com/NousResearch/hermes-agent/issues/135039) — 10 条评论**：MEMORY.md / USER.md 缺少大小预算与写入时验收管线，被诟病为"对每个 session 都是延迟与成本税"。与 [PR #92118](https://github.com/NousResearch/hermes-agent/pull/92118)（结构化预取观测）形成功能协同信号。
3. **[Issue #80222](https://github.com/NousResearch/hermes-agent/issues/80222) — 8 条评论，3 👍**：`delegate_task` 不支持 per-call model / `reasoning_effort` 覆盖。创建于 2026-08-06，长期 `needs-decision`。
4. **[Issue #106592](https://github.com/NousResearch/hermes-agent/issues/106592) — 8 条评论**：Remote Desktop 在 Linux 后端 systemd 重启成功后仍报"update failed"且留下陈旧更新状态。
5. **[Issue #133212](https://github.com/NousResearch/hermes-agent/issues/133212) — 7 条评论**：插件编排器的 `subagent_lifecycle` v1.1 需新增 steer / host-isolation 传输 / facade 上的 effort 路由与跟进。
6. **[Issue #137838](https://github.com/NousResearch/hermes-agent/issues/137838) — 6 条评论（P1）**：macOS gateway 在 liveness 探针失败后反复以退出码 75 终止，根因未定（作者已撤回早期结论并附 GLM 5.3 独立评审）。

**诉求归纳**：用户更关心 **(a) 权限/集成阻塞类（#131859、#133212）** 与 **(b) 长会话内存成本控制（#135039、#103355）**，二者均需架构级决策。

---

## 5. Bug 与稳定性

### P1（最高严重度）
| Issue | 摘要 | 是否有 fix PR |
|---|---|---|
| [#137838](https://github.com/NousResearch/hermes-agent/issues/137838) | macOS gateway 反复退出 75 | 否（根因未确认） |
| [#138130（PR）](https://github.com/NousResearch/hermes-agent/pull/138130) | 压缩可靠性三件套 | — （即修复本身）|

### P2
| Issue | 摘要 | Fix 状态 |
|---|---|---|
| [#131859](https://github.com/NousResearch/hermes-agent/issues

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-10-14**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 今日整体活跃度偏低，主要表现为**存量清理**特征：7 条 Issues 中 6 条被关闭，2 条 PRs 中 1 条被关闭，多数条目带有 `[stale]` 标记，显示仓库主要由 stale bot 驱动清理长时间未回复的工单。唯一新增的活跃工单 #3427 来自社区提案。**当日无版本发布**，无重大功能合并。仓库当前更需要维护者人工介入以避免社区贡献流失。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展

今日无 PR 被合并，无实质性代码推进。仅有以下关闭动作：

- **PR #3370（已关闭 / stale）**：feat(tools): add Keenable web search provider — Keenable 作为 web_search 提供商的接入提案被 stale bot 关闭。链接：<https://github.com/sipeed/picoclaw/pull/3370>
- **PR #3416 仍处 Open 状态**：feat(channels): add Sendblue iMessage and SMS transport — 自 2026-10-05 起开放但已被标 stale，未获维护者评审。链接：<https://github.com/sipeed/picoclaw/pull/3416>

整体而言，**代码层面今日未向前推进**，主要变更为工单状态归集。

---

## 4. 社区热点

按评论数与互动量排序：

| 排名 | Issue | 评论数 | 👍 | 主题 |
|------|-------|--------|-----|------|
| 1 | [#440](https://github.com/sipeed/picoclaw/issues/440) | 9 | 0 | 用上下文窗口限制 + 循环检测替代硬性 `max_tool_iterations: 20` |
| 2 | [#3407](https://github.com/sipeed/picoclaw/issues/3407) | 3 | 0 | Web UI 中"幽灵会话"问题 |
| 3 | [#3406](https://github.com/sipeed/picoclaw/issues/3406) | 2 | 0 | Web UI 工作指示器与会话管理改进 |
| 3 | [#3405](https://github.com/sipeed/picoclaw/issues/3405) | 2 | 1 | 启用 GitHub 私有漏洞报告 |
| 3 | [#3404](https://github.com/sipeed/picoclaw/issues/3404) | 2 | 0 | 核心模块可靠性修复 wave 1 |
| 3 | [#3397](https://github.com/sipeed/picoclaw/issues/3397) | 2 | 0 | 将 Tsubasa 加入 OpenAI 兼容 provider 目录 |

**诉求分析**：#440 是历史最热的讨论（9 条评论），反映用户对 Agent 循环策略的长期不满；#3407/#3406 共同指向 Web UI 的会话与状态可视化体验；#3405 是项目治理层面的安全建议，已获得 1 个 👍 支持。

---

## 5. Bug 与稳定性

按严重程度排列：

### P1 — 高（功能性回归 / 数据丢失风险）
- **#3407 [BUG] Web UI 幽灵会话** — 模型仍在生成时，新会话会从会话列表中"消失"，用户无法找回当前对话。链接：<https://github.com/sipeed/picoclaw/issues/3407>
  - 状态：今日由 stale bot 关闭，**无关联 fix PR**。

### P2 — 中（核心可靠性）
- **#3404 Reliability fixes with reproducers (wave 1)** — 报告人在 agent loop、channels manager、config、updater 等核心模块上发现若干可复现 bug，并附有复现步骤。链接：<https://github.com/sipeed/picoclaw/issues/3404>
  - 状态：今日关闭，**未明确是否合并修复**。备注：作者称此前已有相关 issue/PR 被 stale bot 提前关闭。

### 其他
- **#440** 虽然分类为 enhancement，但描述中包含 "I've completed processing but have no response to give" 的功能失效现象，实质上影响复杂任务可用性。链接：<https://github.com/sipeed/picoclaw/issues/440>

---

## 6. 功能请求与路线图信号

| 提案 | 状态 | 评估 |
|------|------|------|
| **#3427** Plazmi MCP/CLI 持久化会话示例 | 新开 OPEN | 与官方 MCP/heartbeat 方向契合，作为示例/集成有参考价值，但属外部生态项目，需评估其作为官方示例的合理性 |
| **#440** 用上下文窗口 + 循环检测替代硬上限 | 提供社区 agent/config | 评论热度高、议题清晰，具备并入主线的潜力 |
| **#3406** Web UI 改进：清晰的工作指示器、手动/频道会话分离、归档 | stale 关闭 | 反映核心 UX 短板，建议维护者重开并规划 |
| **#3397** 将 Tsubasa 加入 OpenAI 兼容 provider 目录 | stale 关闭 | 改动明确，若社区有呼声可快速合入 |
| **#3405** 启用 GitHub 私有漏洞披露 | stale 关闭 | 治理类建议，成本低、价值高，**强烈建议优先采纳** |
| **PR #3416** Sendblue iMessage/SMS 通道 | OPEN / stale | 拓展渠道接入面，评审中 |

---

## 7. 用户反馈摘要

- **Agent 循环行为过于僵化**：用户认为 `max_tool_iterations: 20` 在复杂任务下过早截断，导致 agent 给出 "I've completed processing but have no response to give" 后失败；社区倾向于按上下文窗口和循环检测动态判定（#440）。
- **Web UI 会话列表存在"幽灵会话"**：用户新建会话后模型思考过程中会从历史下拉中消失，造成不可恢复的导航体验问题（#3407）。
- **Web UI 工作状态与归档能力不足**：用户希望区分手动会话与频道会话、增加归档与更丰富会话列表元数据（#3406）。
- **安全披露通道缺失**：用户无法通过 GitHub 私有漏洞报告提交问题，仓库也无 `SECURITY.md`，影响了负责任披露流程（#3405）。
- **核心模块可靠性复现**：社区贡献者主动审计 agent loop / channels manager / config / updater 并附 reproducer，但反映此前多次因 stale bot 提前关闭问题导致修复落地困难（#3404）。
- **provider 目录不够齐全**：Tsubasa 等已可被 OpenAI 兼容方式调用，但缺少内置目录入口（#3397）。

总体而言，社区情绪偏中性偏负：**对功能扩展有热情，对核心稳定性与治理（安全披露、stale bot 误关）有疑虑**。

---

## 8. 待处理积压

需维护者重点关注：

- **PR #3416** Sendblue iMessage/SMS 通道 — 已 stale，10 月 5 日起未获评审。链接：<https://github.com/sipeed/picoclaw/pull/3416>
- **Issue #3427** Plazmi MCP/CLI 示例提案 — 今日新开，需要维护者表态是否欢迎此类外部集成示例。链接：<https://github.com/sipeed/picoclaw/issues/3427>
- **Issue #440**（历史 9 条评论，stale 关闭）— 长期未被处理的高互动议题，建议重开并明确路线图。
- **Issue #3405** 启用私有漏洞披露 — 治理类低风险高价值，建议快速处理。
- **PR/Issue 因 stale bot 集中关闭的复盘**：今日一次性关闭的 6 条 Issue 多数由 stale bot 触发，部分（如 #3404、#440）属于重复或延续性工作，建议建立"非 stale 关闭"白名单或人工预审机制，避免有效贡献被静默关闭。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码推进 | ⭐⭐ | 无合并，PR #3416 停滞 |
| 社区互动 | ⭐⭐ | 出现"贡献被 stale bot 关闭"的负反馈信号 |
| 治理与安全 | ⭐⭐ | 缺少私有漏洞披露通道 |
| 稳定性 | ⭐⭐⭐ | 已有用户整理的 reproducer 集合（#3404），修复可见性低 |
| 版本节奏 | ⭐⭐ | 今日无版本发布 |

**综合**：PicoClaw 今日处于**社区维护空窗期**，主要风险不在代码而在流程——stale bot 主导的关闭节奏可能抑制外部贡献。建议维护者在下一周期内：(1) 重启 #440、#3404、#3405 等高价值工单；(2) 评审 PR #3416；(3) 启用 GitHub 私有漏洞披露。

---

*本报告基于公开 GitHub 数据自动整理，所有链接指向 sipeed/picoclaw 仓库原始页面。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-10-14**
**项目地址：** [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 项目今日处于**低活跃、稳推进**状态。过去 24 小时内仓库未发布新版本，Issue 侧有 1 条旧 Issue 被关闭，PR 侧共有 4 条更新，其中 1 条已关闭，3 条仍待合并。整体来看，项目核心团队（glifocat 等）正在集中处理 **agent 运行器稳定性** 与 **安装/部署体验** 两条主线，社区侧的 Issue 反馈量极低，说明项目当前没有明显的用户投诉积压，但 Discord 适配器与更新通道相关 PR 仍处于待审状态，需维护者尽快 review。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。无破坏性变更、迁移事项需通知。

---

## 3. 项目进展

今日有 1 条 PR 处于关闭状态，对项目稳定性推进具有积极意义：

- **PR #3918** [CLOSED] — `fix(agent-runner): never lose or repeat a reply around send_message`
  - **作者：** glifocat（核心团队）
  - **作用范围：** `area/agent-runner`、`area/core`、`area/tools`
  - **核心改进：** 解决了 agent 在 `send_message` 调用前后出现回复丢失或重复的问题，覆盖流式（streaming）与回合结束（end-of-turn）两类消息提供方
  - **意义：** 这是用户层面非常容易感知到的一类体验缺陷（消息重复/丢失），修复后显著提升 agent 对话的可靠性
  - 链接：<https://github.com/qwibitai/nanoclaw/pull/3918>

📌 **今日未推进任何"已合并"事件**，仅 PR #3918 处于关闭状态，需维护者确认其最终状态（合并 / 撤回 / 被其他 PR 替代）。

---

## 4. 社区热点

今日社区讨论活跃度较低，仅有 1 条 Issue 在过去 24 小时内有更新：

- **Issue #30** — `fix: Add maxTurns limit to prevent agent loop runaway` 🔥
  - 作者：randomm | 评论数：3 | 👍：1
  - **讨论热度最高**：相较其他 PR 无评论的状态，Issue #30 的 3 条评论使其成为今日唯一的"有讨论"内容
  - **背景：** Claude Agent SDK 的 `query()` 未传 `maxTurns` 参数，引发线上事故（agent 在 32 秒内发送 21 条重复消息）
  - **当前状态：** 已 CLOSED，标记为修复完成
  - 链接：<https://github.com/qwibitai/nanoclaw/issues/30>

其余 4 条 PR 评论数均为 undefined（无新增评论），社区互动整体偏冷。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 编号 | 标题 | 状态 | 是否有 fix |
|---------|------|------|------|-----------|
| 🟠 **高（线上事故）** | [Issue #30](https://github.com/qwibitai/nanoclaw/issues/30) | Add maxTurns limit to prevent agent loop runaway | ✅ CLOSED | 已关闭（修复合并或已通过其他途径解决） |
| 🟡 **中（体验级）** | [PR #3918](https://github.com/qwibitai/nanoclaw/pull/3918) | never lose or repeat a reply around send_message | ⏸ CLOSED | 自身即为修复 PR（需确认是否合并） |
| 🟡 **中（功能错误）** | [PR #2899](https://github.com/qwibitai/nanoclaw/pull/2899) | strip newline suffix from custom_id before parsing Gateway interactions | 🟢 OPEN | 修复 PR 待合并 |
| 🟢 **低（配置体验）** | [PR #4084](https://github.com/qwibitai/nanoclaw/pull/4084) | new installs choose their update channel | 🟢 OPEN | 功能 PR，非 Bug |

**Bug #30 复盘要点：**
- **触发条件：** Claude Agent SDK 的 `query()` 未传 `maxTurns`
- **故障表现：** 32 秒内发送 21 条重复消息（典型金融提醒场景）
- **根因类型：** 缺少循环上限保护机制 → 已通过关闭 Issue 标记修复完成
- **预防措施建议：** 后续类似 SDK 调用应默认设置 `maxTurns` 等安全上限

---

## 6. 功能请求与路线图信号

今日 3 条 OPEN PR 均带有功能/基础设施性质，可视为路线图信号：

1. **PR #3503** — `feat(add-apple-container): run v2 agent sessions on Apple container instead of Docker (macOS)`
   - **作者：** chiptoe-svg
   - **信号意义：** 反映出 macOS 用户对 Docker 替代运行时的需求；该团队自 2026 年 6 月起已在个人环境使用，8 月起扩展部署
   - **领域：** `area/containers`、`area/setup-installation`、`area/skills`
   - 链接：<https://github.com/qwibitai/nanoclaw/pull/3503>

2. **PR #4084** — `feat(setup): new installs choose their update channel`
   - **作者：** glifocat（核心团队）
   - **信号意义：** 核心团队亲自推动的体验优化，反映出当前"安装时隐式选择稳定通道"的痛点
   - **领域：** `area/setup-installation`
   - 链接：<https://github.com/qwibitai/nanoclaw/pull/4084>

3. **PR #2899** — `fix(discord): strip newline suffix from custom_id before parsing`
   - **作者：** rudgalvis
   - **信号意义：** 表面是 Bug 修复，实际揭示出 Discord 适配器在按钮交互协议解析上的设计缺陷——所有按钮都被错误路由到 reject
   - 链接：<https://github.com/qwibitai/nanoclaw/pull/2899>

📌 **被纳入下一版本的概率排序：** PR #4084（核心团队 + 安装体验）> PR #3918（稳定性）> PR #3503（容器生态）> PR #2899（适配器修复）。

---

## 7. 用户反馈摘要

由于今日评论集中在 Issue #30，可提取的用户反馈有限但价值较高：

- **🔴 痛点：Agent 失控导致消息洪水**
  - 用户场景：金融提醒（reminder）
  - 实际问题：agent 在 32 秒内发送 21 条重复消息，对用户造成严重打扰
  - 用户期望：默认安全上限（maxTurns）必须存在
  - 满意度：低 → 推动 Issue 创建 → 已关闭表明诉求已被响应

- **🟡 痛点：安装/更新通道不透明**（来自 PR #4084 描述）
  - 用户场景：新安装 NanoClaw
  - 实际问题：克隆 main 分支会导致"稳定通道"用户首次 `/update-nanoclaw` 时出现版本跳变
  - 用户期望：安装时显式选择更新通道

- **🟡 痛点：Discord 按钮交互失效**（来自 PR #2899）
  - 用户场景：Discord DM 审批卡片
  - 实际问题：无论按 approve 还是 reject，都被路由到 reject
  - 用户期望：按钮交互路由必须正确

---

## 8. 待处理积压

以下为**长期未响应**或**最新超 24 小时未更新**的 OPEN PR，维护者建议优先 review：

| PR | 标题 | 创建日期 | 距今时长 | 风险 |
|----|------|---------|---------|------|
| [#2899](https://github.com/qwibitai/nanoclaw/pull/2899) | strip newline suffix from custom_id | 2026-07-01 | ~3.5 个月 | 🟡 用户功能不可用 |
| [#3503](https://github.com/qwibitai/nanoclaw/pull/3503) | add-apple-container skill | 2026-08-24 | ~1.7 个月 | 🟢 社区功能扩展 |

**提醒：**
- PR #2899 创建至今已逾 3 个月仍未合并，但涉及 Discord 适配器功能性 Bug（按钮路由错误），影响实际用户使用，建议**优先处理**
- PR #3503 创建于 8 月末，是 macOS 容器生态的重要补充，长期搁置可能流失贡献者积极性

---

## 📊 项目健康度指标

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h Issue 更新 | 1 | 🟢 正常偏低 |
| 24h PR 更新 | 4 | 🟢 正常 |
| OPEN PR 长期未处理（>2 家） | 2 | 🟡 需关注 |
| 社区评论活跃度 | 极低 | 🟡 静默期 |
| 核心团队介入度 | 高（PR #3918 / #3503 / #4084 均有核心成员参与） | 🟢 良好 |
| 新版本发布 | 0 | 🟢 无积压 |
| 线上事故响应 | Issue #30 已关闭 | 🟢 良好 |

**综合判定：项目处于"内部推进、对外静默"状态，核心团队正在扎实优化基础能力，但社区反馈通道活跃度不足，建议维护者主动 ping 待合并 PR 的贡献者，并对外发布一次阶段性进展说明以提升透明度。**

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-10-14

> 数据来源：GitHub 仓库 [nearai/ironclaw](https://github.com/nearai/ironclaw)
> 数据窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 今日活跃度处于**低位**。过去 24 小时内仅产生 1 条新 Issue 和 1 条由 Dependabot 自动发起的依赖更新 PR，没有新版本发布，也没有人工合并/关闭的关键变更。整体来看项目处于一个相对平静的窗口期，社区贡献节奏放缓，仅有的两条更新分别对应**生态扩展提案**与**底层依赖维护**，并无功能性主线推进。

---

## 2. 版本发布

无新版本发布。本节省略。

---

## 3. 项目进展

**今日无重要 PR 合并或关闭。** 仅有 1 条处于待合并状态的依赖更新 PR（[#8137](https://github.com/nearai/ironclaw/pull/8137)），属于日常维护性质，不涉及功能演进。从进展角度看，项目今日**没有向前实质性推进**，处于稳定/待工状态。

---

## 4. 社区热点

今日社区讨论热度极低，仅有的互动全部集中在以下条目：

- 🔗 **[Issue #8136](https://github.com/nearai/ironclaw/issues/8136)** — *Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress*
  - 作者：`cairn-agent`
  - 评论：0 ｜ 👍：0
  - **诉求分析**：提交者引用了 IronClaw（原文 "Reborn"）既有的扩展机制（hosted-MCP metadata、API-key 鉴权、egress 出口控制），希望在不向宿主注入第三方供应商逻辑的前提下，利用这套**声明式扩展面**为 [Plazmi](https://plazmi.gg) 提供一个可选的伴生扩展。这是一条典型的**生态接入型提案**，体现外部厂商对 IronClaw 扩展架构的关注。
  - 关注信号：尚未获得任何 👍 或评论，处于"待观察"状态，需要维护者表态是否愿意在路线图中纳入。

- 🔗 **[PR #8137](https://github.com/nearai/ironclaw/pull/8137)** — *chore(deps): bump brace-expansion in /docs/internal/architecture-video*
  - 作者：`dependabot[bot]`
  - 评论：0 ｜ 👍：0
  - **内容分析**：将 `brace-expansion` 从 1.1.18 升级到 1.1.21（同时锁定 `glob` 同步），定位在 `docs/internal/architecture-video` 目录下，属于**文档站点内部脚本**的依赖紧固，不影响主产品。

---

## 5. Bug 与稳定性

**今日未报告任何 Bug、崩溃或回归问题。** 无相关 issue/PR 进入视图。

需要留意的是：
- `brace-expansion` 是历史上[曾报告过 ReDoS 风险](https://github.com/juliangruber/brace-expansion/security/advisories)的包（虽当前 PR 是 patch 级小幅升级），合并 #8137 仍属于**值得推荐的安全卫生动作**，但风险评级为「低-中」。

---

## 6. 功能请求与路线图信号

今日唯一可视为路线图信号的是：

- **[Issue #8136 Plazmi 扩展提案](https://github.com/nearai/ironclaw/issues/8136)** — 该提案的核心理念是"**宿主不引入供应商逻辑**，而是让第三方通过声明式扩展面接入"。这与当前 AI Agent 框架日趋强调的**宿主中立、可插拔**趋势吻合，若 IronClaw 维护者接受此模式，很可能成为后续生态接入的标准范式。
- **纳入下一版本的可能性**：中等偏低。理由：
  1. 该 issue 来自第三方项目方，存在利益相关性；
  2. 没有看到维护者或核心贡献者的回复；
  3. 是否纳入应取决于维护者对"扩展面开放边界"的整体规划。
- 建议关注维护者是否会在后续 issue 中表态此提案是否符合扩展机制的设计初衷。

---

## 7. 用户反馈摘要

**今日 Issues 评论区为空，无法提炼用户痛点与满意度反馈。**

仅能从两条更新本身的语义中推断：
- **扩展机制设计获得外部认可**：Issue #8136 的措辞提到 "Your Reborn extension guidance puts hosted-MCP metadata, API-key auth and egress in declarative extension surfaces"，表明社区对现有扩展架构的**清晰度**与**可用性**持肯定态度。
- **依赖卫生尚可维持**：Dependabot 自动 PR 能成功生成，说明仓库的依赖声明结构完整、健康。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 建议 |
|---|---|---|---|---|
| PR | [#8137](https://github.com/nearai/ironclaw/pull/8137) | bump brace-expansion | 待合并 | 维护者评估 CI 通过后合并，属于例行维护 |
| Issue | [#8136](https://github.com/nearai/ironclaw/issues/8136) | Plazmi extension proposal | 新开未响应 | 建议维护者在 7 天内给出"in-scope / out-of-scope"初步表态，避免外部贡献者长期悬空 |

⚠️ 由于今日窗口内新增/更新的 issue 与 PR 数量极少，**积压风险整体可控**，但仍建议维护者对 #8136 给出明确回应，以维护外部贡献者的参与意愿。

---

## 健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 条人工 issue + 1 条 bot PR |
| 维护卫生 | ⭐⭐⭐☆☆ | 有自动化依赖维护但未合并 |
| 社区互动 | ⭐☆☆☆☆ | 0 评论、0 反应 |
| 路线图信号 | ⭐⭐☆☆☆ | 出现外部扩展接入提案，待维护者回应 |
| 风险面 | ⭐⭐⭐⭐☆ | 无 Bug/回归报告 |

**总评**：项目今日处于**静默期**，无功能性变化。建议维护者在下一个工作窗口对 #8136 给予明确反馈，并推动 #8137 合并，以维持仓库活跃度与外部生态参与信心。

---
*报告生成时间：2026-10-14 · 数据源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-10-14

> 数据来源：github.com/netease-youdao/LobsterAI · 统计窗口：过去 24 小时

---

## 1. 今日速览

LobsterAI 今日整体处于"高频迭代期"：过去 24 小时内共有 17 个 PR 更新、1 个 Issue 提交，但 0 个新版本发布。**代码合并节奏明显快于社区互动**——8 个 PR 已关闭（6 个功能/修复类，2 个 Dependabot 依赖升级），而仅有 1 个新 Issue 进入讨论池。值得关注的是，提交了一条**安全等级较高的 Issue（#2851）**，涉及 Provider API Key 导出功能的硬编码口令问题，建议维护者优先响应。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 仓库目前累积了多项已合并的功能（桌面伴侣、专家广场、依赖升级等），但尚未切出新的 Release tag。建议关注下一次发版窗口，确认上述特性是否会被打包。

---

## 3. 项目进展

今日关闭的 6 个功能/修复类 PR，整体围绕「**Desktop Companion（桌面伴侣）**」与「**IM / OpenClaw 行为修正**」两大主线推进：

| PR | 类别 | 说明 |
|---|---|---|
| [#2860](https://github.com/netease-youdao/LobsterAI/pull/2860) | feat: desktop companion | 桌面伴侣功能合入（Windows） |
| [#2848](https://github.com/netease-youdao/LobsterAI/pull/2848) | feat: open with | "用 LobsterAI 打开"系统集成（Windows） |
| [#2847](https://github.com/netease-youdao/LobsterAI/pull/2847) | feat: desktop companion composer | 桌面伴侣的会话撰写器 |
| [#2849](https://github.com/netease-youdao/LobsterAI/pull/2849) | feat(experts): 专家广场 + 首跑交付物 | 配置化专家广场，可发现任务型 Agent 并一键发起可编辑的对话开篇；Kits 移入 Kits/Skills/Connectors 共享目录 |
| [#2812](https://github.com/netease-youdao/LobsterAI/pull/2812) | fix(openclaw): 不再重复注入 AGENTS.md | 首条消息不再被注入与系统提示重复的内容，减少上下文污染 |
| [#2850](https://github.com/netease-youdao/LobsterAI/pull/2850) | fix(im): 安全销毁后台累加器 | 修复 `IMCoworkHandler.destroy()` 清理无拒绝回调累加器时抛错的隐患（Fixes [#926](https://github.com/netease-youdao/LobsterAI/issues/926)） |

另有两项 Dependabot 依赖升级被合并：[#2672 mermaid 10.9.8 → 12.1.0](https://github.com/netease-youdao/LobsterAI/pull/2672) 与 [#2459 @nodesecure/js-x-ray 14.3.0 → 16.0.0](https://github.com/netease-youdao/LobsterAI/pull/2459)。

**评估：** 项目在 Windows 桌面集成、专家体系治理、IM 后台稳定性三条线上都有实质推进，是结构性的、可见度较高的进展；社区 PR 中虽然没有任何评论数据，但合入速度说明维护者侧 review 链路顺畅。

---

## 4. 社区热点

今日 Issue/PR 评论量普遍为 0，**社区互动热度偏低**。但从内容影响面看，以下两条最值得关注：

- 🔥 **[#2851 Provider API Key Exports 公开硬编码口令漏洞](https://github.com/netease-youdao/LobsterAI/issues/2851)** —— 由 `carfeii` 提交的安全 Issue。报告指出 "Export Providers" 功能虽然使用 AES-GCM + PBKDF2（10 万次）加密导出文件，但口令被硬编码于源码，任何拿到导出文件的人都可以轻易解密其中所有 Provider 的 API Key。
- 🔥 **[#2849 专家广场（Expert Plaza）](https://github.com/netease-youdao/LobsterAI/pull/2849)** —— 一次性合入的功能增强，覆盖首次运行交付物、Kits 目录重构、可编辑对话开篇等多项体验改进，是今日对终端用户最直接可见的改动。

**诉求分析：** 用户既关注**数据安全**（不希望自己的多 Provider Key 凭据因导出功能被一刀切泄露），也期待**新手友好**（希望官方提供清晰的专家发现路径和首次运行引导）。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 |
|---|---|---|
| 🟥 **高（安全）** | [#2851](https://github.com/netease-youdao/LobsterAI/issues/2851) Provider 导出文件加密使用公开硬编码口令 | 尚未有 fix PR，开放中，建议 P0 处理 |
| 🟧 中（行为/体验） | [#2861 TTS 语速在跨段切换时回退到 1×](https://github.com/netease-youdao/LobsterAI/pull/2861) | 已提交修复 PR，待合入 |
| 🟨 低（背景异常） | [#926 IMCoworkHandler 销毁抛错](https://github.com/netease-youdao/LobsterAI/issues/926) | ✅ 已被 [#2850](https://github.com/netease-youdao/LobsterAI/pull/2850) 修复 |

**特别提示：** #2851 一旦属实，任何下载或截获导出文件的人都能恢复明文 Key，属于"凭据泄露级"风险，建议尽快确认与处置。

---

## 6. 功能请求与路线图信号

- **🧩 内置 Provider 模型目录刷新** —— [PR #2859](https://github.com/netease-youdao/LobsterAI/pull/2859) 正在更新 DeepSeek、Moonshot、Qwen、Zhipu、MiniMax、Xiaomi 共 6 家内置 Provider 的默认模型清单（含 `deepseek-flash` 等新模型），并为已有用户的本地配置写入了迁移逻辑（删除下线 id、注入新 id）。**这是最有可能在下一版本一并打包的变更**，强烈建议在 release notes 中说明模型替换清单。

- **🖥️ Desktop Companion 完整套件** —— 今日合并了 #2847（composer）、#2848（open with）、#2860（companion 主体），已构成 Windows 桌面侧一条完整产品线，是版本发布的天然候选切片。

- **🧠 专家体系规范化** —— #2849 的合入意味着 "Experts" 从功能点正式升级为产品形态，未来若需扩展到 Linux/macOS 或第三方插件市场，目前的 Kits/Skills/Connectors 目录结构已留好接口。

---

## 7. 用户反馈摘要

⚠️ **今日 Issues/PR 区域评论均为 0**，无法从对话中直接提炼用户反馈。**仅有的一手报告来自 #2851**，其内容透露出以下用户场景与痛点：

- 用户会在多 Provider 间切换，并通过 "Export Providers" 备份/迁移 API Key；
- 用户**默认信任**了导出加密机制，未意识到口令是公开硬编码；
- 一旦导出文件落入他人之手（云盘同步、误发、误备份），**所有 Provider Key 即等同明文泄露**。

建议在下一次发版前与社区主动同步：是否需要重新设计导出加密（强口令 + 用户输入）、是否需要为已存在导出文件提供重加密工具、是否需要在 UI 显式提示安全等级。

---

## 8. 待处理积压

按"长时间未合入 + 影响面"筛选，今日仍 OPEN 的 PR 中以下几条积压迹象较明显，建议维护者尽快 review：

| PR | 提交时间 | 状态 | 备注 |
|---|---|---|---|
| [#2859](https://github.com/netease-youdao/LobsterAI/pull/2859) | 10-13 | OPEN | 模型目录刷新，与发版强相关 |
| [#2861](https://github.com/netease-youdao/LobsterAI/pull/2861) | 10-14 | OPEN | TTS 语速回归，建议尽快合入 |
| [#2858](https://github.com/netease-youdao/LobsterAI/pull/2858) | 10-13 | OPEN | 与已合并的 [#2672](https://github.com/netease-youdao/LobsterAI/pull/2672) 重复（mermaid 升级），需确认是否应关闭 |
| [#2857](https://github.com/netease-youdao/LobsterAI/pull/2857) | 10-13 | OPEN | 与已合并的 [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) 重复（js-x-ray），需确认是否应关闭 |

🔎 **Dependabot 重复 PR 提醒——[#2858](https://github.com/netease-youdao/LobsterAI/pull/2858) 与 [#2857](https://github.com/netease-youdao/LobsterAI/pull/2857) 似乎是被合并后 Dependabot 又自动开出的"残留"升级**，建议维护者在 Dependabot 配置中开启 rebase/auto-merge，或在 PR 中手动 close，避免评审噪音。

**最关键的积压项是 [#2851 安全报告](https://github.com/netease-youdao/LobsterAI/issues/2851)**——一个 0 评论的安全 Issue 极易被低估，但其描述的硬编码口令问题影响所有使用导出功能的用户，建议在 24 小时内给出确认与处置计划。

---

*报告生成时间：2026-10-14 · 数据基于 GitHub 公开 API · 下次更新：2026-10-15*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-10-14

> 数据来源：GitHub moltis-org/moltis（统计窗口：2026-10-13 ~ 2026-10-14）

---

## 1. 今日速览

Moltis 今日整体处于**平稳研发期**，无 Issue 互动、无发布无活动。开发活动集中于 **2 个开放中的 Pull Request**，均聚焦在多智能体（agent）编排与预设（preset）机制的统一治理上，且由同一贡献者 `ManuRakh` 提交，体现出明显的连续迭代特征。社区层面暂无新增反馈，整体开发节奏处于"功能深耕"阶段。

---

## 2. 版本发布

⚠️ **无新版本发布**（24 小时内 0 个 Release）。

---

## 3. 项目进展

### ✅ 当日合并/关闭的重要 PR
**无 PR 被合并或关闭**，2 个 PR 均仍处于 `OPEN` 待评审状态。

### 🔧 当日活跃 PR（虽未合并但有更新）
两个 PR 都围绕"多 agent 编排的语义一致性"展开，方向高度协同：

| PR | 主题 | 关键价值 | 链接 |
|----|------|----------|------|
| #1301 | Chat ↔ sub-agent parity（角色/系统提示/代理/模型预设统一） | 让直接对话与 `spawn_agent` 子任务共享 persona、system_prompt_suffix、delegate_only、preset model 字段，消除"协调者/工作者"模式与"直聊"模式的行为分叉 | [#1301](https://github.com/moltis-org/moltis/pull/1301) |
| #1302 | Preset `spawn.allow`：spawn_agent 目标白名单 | 在 `resolve_preset` 阶段提前强制 enforce，避免不可信/越权调用；并通过工具描述动态暴露合法目标 | [#1302](https://github.com/moltis-org/moltis/pull/1302) |

**进展评估**：两个 PR 共同推进了项目的"多 agent 治理与安全边界"这一核心主题，可视为同一主题的**前置依赖链**（PR #1302 在描述中显式声明 `Depends on...`）。功能尚未合入主干，对外版本号未变。

---

## 4. 社区热点

24 小时内无新增 Issue，Issues/PRs 评论区为空（评论数 undefined），**当前无社区热议话题**。

潜在关注点（基于 PR 主题）：
- **多 agent 拓扑与权限边界** —— PR #1302 提到的"org-chart / coordinator graphs"说明社区在向复杂企业级 agent 编排演进。
- **行为可预期性** —— PR #1301 解决"同一 agent 直聊 vs 被 spawn 表现不同"的痛点，是高频实战诉求。

---

## 5. Bug 与稳定性

📭 **今日无 Bug 报告、无崩溃或回归报告**。  
"待合并 PR"中 PR #1302 引入的安全校验机制（spawn allowlist 在 provider 工作之前执行）属于**主动防御性增强**，而非修复已知 Bug。

---

## 6. 功能请求与路线图信号

虽无新需求 Issue，但从 PR 主题可读取清晰的**路线图信号**：

| 信号 | 推断方向 | 证据 |
|------|----------|------|
| 多 agent 编排统一语义 | 项目正完善"预设驱动型多 agent 框架" | PR #1301、#1302 |
| 工具调用层面的安全边界 | 未来版本将更强调 agent-to-agent 调用授权 | `resolve_preset` 前置 enforce |
| 动态工具描述（仅暴露白名单目标） | 减少 prompt 噪声、提升模型决策可靠性 | PR #1302 描述 |
| `delegate_only` 字段 | 暗示项目即将支持"纯代理型 agent"角色 | PR #1301 |

**预测**：这两个 PR 若合并进入主干，将显著提升 Moltis 在多 agent 场景下的"可控性"，可作为下一版本的卖点功能。

---

## 7. 用户反馈摘要

📭 **今日 Issues 区无新评论与新 Issue**，无新增用户痛点数据。

可参考的"间接信号"：
- PR #1301 描述中明确写到："This makes coordinator/worker setups and 'talk to the agent as itself' diverge." —— 表明**维护者本身识别到行为分叉是用户痛点**。
- PR #1302 的 allowlist 机制反映出社区已存在"越权 spawn_agent"或"误调用目标 agent"的实战场景。

---

## 8. 待处理积压

| 类型 | 编号 | 风险等级 | 提醒 |
|------|------|----------|------|
| 待合并 PR | [#1301](https://github.com/moltis-org/moltis/pull/1301) | 🟡 中 | 涉及行为兼容性变更，需关注是否影响现有用户配置 |
| 待合并 PR（含依赖） | [#1302](https://github.com/moltis-org/moltis/pull/1302) | 🟡 中 | 显式声明 `Depends on:...`，合入顺序需先解决依赖项 |
| 长期未响应 Issue | 无 | — | 当前 Issue 队列为空 |

**建议维护者关注**：
- 尽快推进 PR #1301 评审，它是 PR #1302 的前置依赖。
- 评估是否需要在 Changelog 单独标注"行为一致性变更"，避免下游集成方踩坑。

---

### 📊 项目健康度速评
| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐ | 仅 PR 提交，无社区互动 |
| 稳定性 | ⭐⭐⭐⭐⭐ | 无 Bug 报告 |
| 路线清晰度 | ⭐⭐⭐⭐ | PR 主题连贯，方向明确 |
| 社区参与 | ⭐⭐ | 无外部 Issue/PR 互动 |

> **总体**：今日为"内部迭代日"，代码侧推进扎实但社区面静默。建议关注 PR #1301/#1302 的评审节奏，以保持项目对多 agent 用户的承诺兑现。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-10-14** | **数据范围：过去 24 小时**

---

## 一、今日速览

CoPaw 仓库今日继续保持高强度开发节奏，**过去 24 小时内共 59 条动态更新**（18 条 Issue + 41 条 PR），整体活跃度处于近月高位。Issue 端 14 条新开/活跃、4 条已关闭；PR 端 22 条待合并、19 条已合并或关闭。**无新版本发布**。今日修复工作集中在 Console 前端健壮性、聊天历史/工具输出体积控制、跨平台编码兼容（Windows CRLF/GBK）以及 Ollama 本地模型上下文窗口识别等几个明显被反复报告的痛点；同时决策模型、ACP 会话插件加载、可观测 cron 恢复等结构性议题持续在议。

---

## 二、版本发布

**无新版本发布。** 待合并的 [PR #7928](https://github.com/agentscope-ai/QwenPaw) "chore: release notes for v2.2.2" 已停留在 PR 状态较长时间（自 2026-09-22），提示 2.2.2 的发布说明正在准备中，但仍未落地。

---

## 三、项目进展（今日已合并/关闭）

| # | 类型 | 标题 | 价值 |
|---|---|---|---|
| [#6459](https://github.com/agentscope-ai/QwenPaw) | fix(history) | 加固持久化、备份、恢复 | ★★★★ |
| [#8190](https://github.com/agentscope-ai/QwenPaw) | fix(agents) | 过滤历史媒体前解析模型能力 | ★★★ |
| [#8219](https://github.com/agentscope-ai/QwenPaw) | fix(console) | 稳定 chunk 恢复与重载配额 | ★★★ |
| [#8221](https://github.com/agentscope-ai/QwenPaw) | fix(console) | 限制后台轮询、解锁模型选择 | ★★★ |
| [#8208](https://github.com/agentscope-ai/QwenPaw) | fix(website) | 更新博客 | ★ |

**整体评价：项目向前推进明显。** 历史持久化（#6459）这条 XL 级 PR 自 7 月以来长期 pending，今日了结意味着聊天会话的 SQLite 持久化/备份/恢复路径正式进入主线。同时 #8190 解决了"纯文本模型收到历史图片"这一潜在隐私与计费风险，#8219/#8221 改善了 Console 在慢链路/服务重启下的稳定性。**对照已关闭 Issue** [#7981](https://github.com/agentscope-ai/QwenPaw)（chat_with_agent 前台超时被错标为"用户中断"）、[#8088](https://github.com/agentscope-ai/QwenPaw)（chat_with_image 陷入 PIL 暴力裁剪循环）、[#8186](https://github.com/agentscope-ai/QwenPaw)（消息导航滚动回弹 1.6s），这些用户可见体验类 Bug 同步得到处理。

---

## 四、社区热点

**评论最多 / 最新关注：**

1. **[Issue #7056](https://github.com/agentscope-ai/QwenPaw) — 后台任务无回调通知机制**（开启 2 个月，今日仍活跃）
   作者 TanKanKenglim 指出 `submit_to_agent` 派发后台任务后只能通过 `check_agent_task` 轮询，缺少完成回调。背后诉求是 SDK 端缺少 webhook / event bus 类基础设施。
2. **[Issue #8071](https://github.com/agentscope-ai/QwenPaw) — 插件主题扩展点**（Plugin-facing semantic token override）
   作者 BeiMu-new 提出插件作者目前只能改 `colorPrimary`，无法访问 Console 的语义 token 层。诉求是扩展插件主题 API 至 hover/background/surface/radius 等。
3. **[Issue #8015](https://github.com/agentscope-ai/QwenPaw) — 自托管 Skill/Plugin 市场源**（今日已关闭）
   内网/离线部署场景下需要可配置市场源，社区认为该能力属于"必须项"。
4. **[PR #7931](https://github.com/agentscope-ai/QwenPaw) — 持久化分页聊天记录**（XXXL 大改动）
   通过 per-session SQLite + 稳定游标实现可分页/可恢复的会话历史，是为长会话和大体量输出做准备。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#8206](https://github.com/agentscope-ai/QwenPaw) | **Windows 项目删除一旦写入 `creator.log` 必失败**（WinError 5）。qwenpaw-creator v2.0.1 + QwenPaw 2.2.1，影响所有 Windows Server 2022 用户 | ❌ 暂无 |
| 🔴 高 | [#8228](https://github.com/agentscope-ai/QwenPaw) | 工具输出以 base64 存入 `tool_result`，聊天响应超过 10 MB 必触发 30s Console 超时 | ✅ [PR #8229](https://github.com/agentscope-ai/QwenPaw) Open (S) |
| 🟠 中 | [#8225](https://github.com/agentscope-ai/QwenPaw) | 保存心跳设置触发"零停机热重载"，正在运行的 cron 任务被静默标记 `cancelled`，无任何提示（2.2.1 回归） | ❌ 暂无 |
| 🟠 中 | [#8222](https://github.com/agentscope-ai/QwenPaw) | `qwenpaw acp` 从不实例化 `PluginLoader`，ACP 会话中插件工具完全不可用，且跨进程回调无法唤醒 | ❌ 暂无 |
| 🟠 中 | [#8213](https://github.com/agentscope-ai/QwenPaw) | Hub 重启后 desired-running 本地 runtime 保持停止，cron 任务静默跳过直到有认证请求触发 | ❌ 暂无 |
| 🟡 低-中 | [#8171](https://github.com/agentscope-ai/QwenPaw) | `send_file_to_user` 投递音频后，工具结果保留音频 DataBlock，LM Studio 返回"At most 0 audio(s)"未被 fallback 分类器识别，会话僵死 | ❌ 暂无（关联 [PR #7654](https://github.com/agentscope-ai/QwenPaw) 仍 open）|
| 🟡 低-中 | [#8218](https://github.com/agentscope-ai/QwenPaw) | 默认 agent 模型 `mimo-v2.5-free` 已弃用，未提示用户迁移到 `mimo-v2.6-flash-free`，default 模型不可用 | ❌ 暂无 |

**回归预警**：#8225（hot reload 静默取消 cron）和 #8218（默认模型已弃用）属于典型的"静默失败"类问题，用户不会收到任何告警，建议优先处理。

---

## 六、功能请求与路线图信号

| Issue / PR | 诉求 | 已有 PR 推进 |
|---|---|---|
| [#8233](https://github.com/agentscope-ai/QwenPaw) | 内置 CommandCode、Hugging Face Inference Providers 提供商预设 | ❌ 待认领 |
| [#8071](https://github.com/agentscope-ai/QwenPaw) | 插件侧语义 token 主题扩展 | ❌ 待认领 |
| [#8126](https://github.com/agentscope-ai/QwenPaw) | skill-pool 下载改为可取消的后台作业（进度+取消） | ❌ 待认领 |
| [#8223](https://github.com/agentscope-ai/QwenPaw) + [#8230](https://github.com/agentscope-ai/QwenPaw) | 可选的主机级导航策略（侧栏与设置中心共享） | ✅ [PR #8230](https://github.com/agentscope-ai/QwenPaw) 已 open (M, first-time-contributor) |
| [#8211](https://github.com/agentscope-ai/QwenPaw) | 受保护执行合约提示词接入 i18n | ❌ 待认领 |
| [PR #8205](https://github.com/agentscope-ai/QwenPaw) | TypeSafe/JEV 决策模型 + 全局/agent/会话级作用域 | ✅ 已 open (XXXL) |
| [PR #8237](https://github.com/agentscope-ai/QwenPaw) | 插件内联代码块渲染、提交、外部链接打开 API | ✅ 已 open (L) |
| [PR #8224](https://github.com/agentscope-ai/QwenPaw) | 实验性 Python Code Mode（统一 `run_code` 工具入口） | ✅ 已 open (XXL) |

**路线图判断**：#8205（决策模型）、#7931（持久化聊天记录）、#8224（Python Code Mode）属于"结构级"改动，合并后将显著扩展 QwenPaw 的能力边界；Console 主题扩展（#8071）和导航策略（#8230）反映社区对企业版/受控部署场景的关注度上升。

---

## 七、用户反馈摘要

- **🔧 Windows 平台痛点集中爆发**：[#8206](https://github.com/agentscope-ai/QwenPaw)（项目目录删除）、[#8235](https://github.com/agentscope-ai/QwenPaw)（CRLF 被改写）、[#8234](https://github.com/agentscope-ai/QwenPaw)（GBK 文件被 `errors="ignore"` 直接吞字节）三连发显示 Windows + 中文环境仍是 QwenPaw 的薄弱面，且修复均集中在工具层而非更上游的 file IO 抽象层。
- **⏳ Console 30s 超时反复成为瓶颈**：本日新 [#8228](https://github.com/agentscope-ai/QwenPaw) 和 [#8126](https://github.com/agentscope-ai/QwenPaw) 都明确点名该阈值，社区认为其偏紧。
- **🔌 ACP 通道严重缺失**：[#8222](https://github.com/agentscope-ai/QwenPaw) 报告 ACP 会话"插件完全没加载"，且与跨进程任务回调联动失效，对 IDE/编辑器集成用户极不友好。
- **🤖 Ollama 本地模型体验被点名**：[PR #8236](https://github.com/agentscope-ai/QwenPaw) 指出 `fetch_models` 误用 OpenAI 兼容默认 128k context 导致 `qwen3-coder:30b` 在本地被错切，本地用户对"云端默认值被强加"的容忍度降低。
- **🆕 首次贡献者活跃**：[PR #8230](https://github.com/agentscope-ai/QwenPaw) 标签为 `[first-time-contributor]`，社区对新贡献者的吸纳良好。

---

## 八、待处理积压（提醒维护者关注）

| # | 类别 | 创建日期 | 标题 | 备注 |
|---|---|---|---|---|
| [#7056](https://github.com/agentscope-ai/QwenPaw) | Issue | 2026-08-15 | 后台任务回调/通知机制 | 已 60 天未落地决策，评论 0
| [#8171](https://github.com/agentscope-ai/QwenPaw) | Issue | 2026-10-10 | 音频投递后 session 僵死（LM Studio 400 未被识别） | 关联 [PR #7654](https://github.com/agentscope-ai/QwenPaw) 仍 open
| [PR #7931](https://github.com/agentscope-ai/QwenPaw) | PR (XXXL) | 2026-09-22 | 持久化分页聊天记录 | 22 天未合并，依赖 review
| [PR #7928](https://github.com/agentscope-ai/QwenPaw) | PR | 2026-09-22 | v2.2.2 release notes | 22 天未合并，阻塞发布
| [PR #8205](https://github.com/agentscope-ai/QwenPaw) | PR (XXXL) | 2026-10-13 | TypeSafe & scoped decision model | 大改动，建议尽快指派 reviewer
| [PR #8224](https://github.com/agentscope-ai/QwenPaw) | PR (XXL) | 2026-10-13 | 实验性 Python Code Mode | 涉及工具编排重构，需架构 review
| [#8206](https://github.com/agentscope-ai/QwenPaw) | Issue (Bug) | 2026-10-13 | Windows 项目删除 WinError 5 | 影响所有 Windows 用户，尚无 fix |

---

**项目健康度评估：活跃偏高、方向正确、需关注回归面。** 开发侧表现强劲——大量 S/M 级 PR 当日提交即被 review，Windows 编码/换行、Ollama 上下文、Console 健壮性等真实痛点均有专人跟进；隐患在 ACP 插件加载、Windows 文件锁、cron 静默取消这几条尚无 PR 的中-高严重度 Issue，建议维护者在下一轮 triage 中明确责任人。

> 📌 本日报数据基于 2026-10-14 截至当时的 GitHub 公开活动统计。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-14

---

## 1. 今日速览

ZeroClaw 仓库今日仍处于 **高频维护期**：过去 24 小时 Issues 更新 26 条、PR 更新 50 条（待合并 41 / 已合并或关闭 9），无新 Release。当日提交以 **Bug 修复与运行时稳定性** 为主线，P1 问题新增多条（消息时间戳丢失、OpenRouter 成本归零、Anthropic thinking 配置抖动、路由 upsert 配置被破坏等），同时 RFC #7155 安全权限模型与插件栈式更新的多支 XL 级 PR 仍在 review 队列。整体看，v0.8.6（Phase 2 runtime）与 v0.9.0（Phase 3 gateway）的发布闸口处于"集中清理关键缺陷 + 收尾文档/异常清单"阶段。

---

## 3. 项目进展

过去 24 小时共有 9 条 PR 完成合并/关闭。其中 4 条关键路径如下：

| PR | 标题 | 影响 |
|---|---|---|
| [#10610](https://github.com/zeroclaw-labs/zeroclaw/pull/10610) | feat(security): implement the accepted shell V1 permission policy (RFC #7155 Phase 0+1) | 推进统一工具权限策略与分级审批，v0.8.6 安全闸口的关键路径 |
| [#10563](https://github.com/zeroclaw-labs/zeroclaw/pull/10563) | feat(runtime): re-sample and flag replies claiming unreceipted actions | 收紧"模型口述动作却未发工具调用"时的安全语义 |
| [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) | fix(providers): rotate live credentials after rate limits | 命中轮换供应商行为修复（标 `do-not-merge`，先关闭） |
| [#11231](https://github.com/zeroclaw-labs/zeroclaw/pull/11231) | feat(dashboard): show OpenRouter credit balance | Dashboard 余额展示（本期已关闭，需作者进一步动作） |

配套 Issue [#10349](https://github.com/zeroclaw-labs/zeroclaw/issues/10349)（SOP 面板加载阻塞 ZeroCode 导航）当日结案。**整体推进评估**：v0.8.6 的安全/运行时主线持续推进，但仍有较多 `needs-author-action` 标记的 PR 等待迭代。

---

## 4. 社区热点

按评论数排序的活跃议题，反映当前社区关注重心：

1. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — SQLite 会话后端每轮重置消息时间戳**（8 条评论，P1）
   核心诉求：`GET /api/...` 无法拿到单条消息的真实时间，所有 `created_at` 被统一覆写为转写时刻。
2. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Runtime & Gateway delivery v0.8.6 / v0.9.0 Tracker**（6 条评论，发布闸口）
   维护者 Audacity88 持有的官方跟踪器，决定 v0.8.6 / v0.9.0 阶段交付物清单。
3. **[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) — OpenRouter 花费显示 $0.00、Token 被错分为 free**（P1）
   约 90 次请求 / 2.1M token 后 Dashboard Cost 全维度失效。
4. **[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) — 网关注册绑定到 roster 用户**（P2，安全）
   依赖 #10248、#10259 已合并，基础已就绪，等待 v1 范围决策落地。
5. **[#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) — Cost ledger 丢弃 `total_tokens` 导致 Gemini 等模型低估**（P2）
   反映 OpenAI-compatible 协议下 thinking/reasoning token 计费正确性问题。

**底层诉求**：社区对"**计费 / 时间戳 / 审计字段**"这类"看不见但影响生产"的回归高度关注；同时对 v0.9.0 gateway 分离进度持续跟踪。

---

## 5. Bug 与稳定性

按严重程度排序的当日活跃/新增 Bug：

| 严重度 | Issue | 概要 | 是否有 fix PR |
|---|---|---|---|
| **P1** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session 重写覆盖每条 `created_at` | ❌ |
| **P1** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter `usage.cost` 未摄入，Dashboard 全维度归零 | ❌ |
| **P1** | [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | Anthropic thinking/effort 在轮次间翻转、重写整段缓存历史（40k→130k token） | ❌ |
| **P1** | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `model_routing_config.upsert_agent` 整体重写 config、丢失字段 | ❌ |
| **P1** | [#11708](https://github.com/zeroclaw-labs/zeroclaw/issues/11708) | `model_routing_config` 工具 schema 漏掉 action 专属必填参数 | ❌ |
| **P2** | [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | 成本账本丢弃 `total_tokens`（Gemini/OpenAI-兼容） | ❌ |
| **P2** | [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` 配置被运行时忽略 | ❌ |
| **S2** | [#11711](https://github.com/zeroclaw-labs/zeroclaw/issues/11711) | 长对话裁剪持久化时**永久删除**旧轮 | ❌ |
| **S2** | [#11706](https://github.com/zeroclaw-labs/zeroclaw/issues/11706) | `max_image_turns` 不释放视觉路由，整会话钉死 vision provider | ❌ |
| **S2** | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | 系统提示每轮从磁盘重建，人格文件改动使所有会话缓存失效（成本放大） | ❌ |
| **S2** | [#11709](https://github.com/zeroclaw-labs/zeroclaw/issues/11709) | 升级后的 WebSocket 在 gateway reload 后仍存活，老实例继续对外服务 | ❌ |
| **S3** | [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) | ZeroCode Cost 标签同屏混合 UTC 与本地日总额，无标注 | ❌ |
| **S3** | [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) | ACP 会话存储重新盖章 `created_at`（与 #11420 同源） | ❌ |
| **S3** | [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) | JPEG 准入在内存上限校验前先复制并解析元数据 | ❌ |
| **S3** | [#11704](https://github.com/zeroclaw-labs/zeroclaw/issues/11704) | channel/agent 系统提示仍带日期，跨午夜使 prompt 缓存失效 | ❌ |
| **S3** | [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) | `tool_search` 激活延迟工具时改系统提示，破坏缓存（成本影响） | ❌ |
| **S3** | [#11713](https://github.com/zeroclaw-labs/zeroclaw/issues/11713) | Telegram 忽略 `edited_message`，编辑加上的 @ 永远不触发 | ❌ |
| **S3** | [#11710](https://github.com/zeroclaw-labs/zeroclaw/issues/11710) | 截断的工作区文件既提示 agent 去读，prompt header 又禁止读 | ❌ |

> **总体观察**：今日 6 条 P1 全部"裸奔"（无对应 fix PR）。系统提示缓存失效类问题（#11696、#11703、#11704）形成"成本放大型 bug 簇"，具备打包修复的天然条件，建议维护者评估一次性 PR。

---

## 6. 功能请求与路线图信号

当日新开/活跃的需求与提案：

| 编号 | 类型 | 路线图可能位置 |
|---|---|---|
| [#11724](https://github.com/zeroclaw-labs/zeroclaw/issues/11724) | feat(zerocode): per-pane 会话上限可配置 | 与 #11622、#11573、#11506 一起纳入 ZeroCode 体验改进批次 |
| [#11705](https://github.com/zeroclaw-labs/zeroclaw/issues/11705) | Proposal: Plazmi per-agent MCP grants & bounded catch-up 示例 | 文档/示例补充，依赖 #5574 RFC 已合入的多 agent MCP 框架 |
| [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | docs: Tsubasa custom-provider 文档化 | 文档类，P3 |
| [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | 网关注册绑定 roster 用户（远端主体作用域） | 与 #10248/#10259 配套，已"accepted"，v0.9.0 高优 |
| [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | v0.8.6 / v0.9.0 跟踪器 | 官方路线图主入口 |

**关联 PR（已就绪 / 待合并）**：
- [#11506](https://github.com/zeroclaw-labs/zeroclaw/pull/11506) feat(zerocode): 显示已保存/已应用配置状态
- [#11573](https://github.com/zeroclaw-labs/zeroclaw/pull/11573) feat(zerocode): 拖拽 session 行、按数字切换
- [#11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622) feat(zerocode): 显示消息时间戳（**直接响应 #11420/#11675 趋势**）
- [#11407](https://github.com/zeroclaw-labs/zeroclaw/pull/11407) fix(zerocode): 高负载下及时渲染流式更新
- [#11719](https://github.com/zeroclaw-labs/zeroclaw/pull/11719) feat(theme): Oxocarbon 暗色主题
- [#11726](https://github.com/zeroclaw-labs/zeroclaw/pull/11726) fix(tunnel): tailscale serve 进程被守护与校验
- [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) feat(providers): 单 provider profile 支持多模型
- [#11383](https://github.com/zeroclaw-labs/zeroclaw/pull/11383) feat(providers): MiniMax M3 图像/视频输入接入

---

## 7. 用户反馈摘要

- **计费可见性焦虑**（#11204、#11613、#10950、#11694）：多位用户在生产工作流（90+ 请求、2.1M token）中遇到 Dashboard 计费数据失真、warning 阈值不生效、本地/UTC 时间口径混乱。**痛点**：用户在跑长期代理任务时无法靠仪表盘止损。
- **"看不见的成本放大"反馈**（#11696、#11703、#11704）：`Audacity 88` 连续提交 3 条 perf 类 bug 报告，揭示系统提示缓存被反复击穿，反映社区对"提示缓存命中率 = 成本控制"这一指标的清晰把握。
- **

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*