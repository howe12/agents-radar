# OpenClaw 生态日报 2026-07-26

> Issues: 340 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-26 02:09 UTC

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

# OpenClaw 项目日报 · 2026-07-26

---

## 1. 今日速览

OpenClaw 项目今日延续了高强度的开发节奏，过去 24 小时共产生 **340 条 Issue 更新**（新增/活跃 240、关闭 100）和 **500 条 PR 更新**（待合并 280、已合并/关闭 220），但**无新版本发布**。从数据看，维护者 steipete 主导了多项大型 refactor（拆分超 2000 行的 god-module）以及 Web UI/Mac dashboard 体验改进；与此同时，社区集中反馈 v2026.7.1 升级后的多项回归（gateway 启动失败、SQLite 快照不安全、消息丢失等），其中 P0/P1 级 bug 持续累积，表明当前主干存在稳定性挑战，需要维护者优先处理 release-blocker 类问题。

---

## 2. 版本发布

⚠️ **无新版本发布**。这是值得关注的信号——尽管过去 24 小时关闭了 220 条 PR，但仓库并未发版。结合 [Issue #48920](https://github.com/openclaw/openclaw/issues/48920)（Live Docs 领先于 release）和 [Issue #108435](https://github.com/openclaw/openclaw/issues/108435)（v2026.7.1 升级后 gateway 无法启动）等多个 P0 报告，社区期望的稳定修复版本可能仍在等待合并窗口。

---

## 3. 项目进展

### 3.1 已关闭 PR（重要合并/合入）

| PR | 主题 | 影响面 | 链接 |
|---|---|---|---|
| [#113952](https://github.com/openclaw/openclaw/pull/113952) | refactor(ui): inline stroke attributes via shared strokeIcon shell | 修复 shadow-DOM 内图标样式丢失（修复 [Issue #112906](https://github.com/openclaw/openclaw/issues/112906) 背后 CSS 缺陷） | [链接](https://github.com/openclaw/openclaw/pull/113952) |
| [#113882](https://github.com/openclaw/openclaw/pull/113882) | fix(ui): keep sidebar selection on archived sessions | UI 行为修复，避免归档会话时列表随机跳动 | [链接](https://github.com/openclaw/openclaw/pull/113882) |
| [#113950](https://github.com/openclaw/openclaw/pull/113950) | fix(subagents): steer spawn labels toward task titles | 子代理 label 字段增加 schema 描述与持久化 | [链接](https://github.com/openclaw/openclaw/pull/113950) |
| [#113967](https://github.com/openclaw/openclaw/pull/113967) | refactor(talk): split realtime relay owners | 将 1647 行的 realtime Talk relay 拆分为 6 个职责模块 | [链接](https://github.com/openclaw/openclaw/pull/113967) |
| [#113937](https://github.com/openclaw/openclaw/pull/113937) | refactor(doctor): split health contributions | 拆分 2211 行的 doctor 健康检查模块 | [链接](https://github.com/openclaw/openclaw/pull/113937) |
| [#113947](https://github.com/openclaw/openclaw/pull/113947) | fix(ui): hide unusable Chat sidebar controls on read-only boards | 只读模式下隐藏无效控件 | [链接](https://github.com/openclaw/openclaw/pull/113947) |
| [#113957](https://github.com/openclaw/openclaw/pull/113957) | feat: detect external human turns in adopted Pi and OpenCode sessions | 完善会话收养链路 | [链接](https://github.com/openclaw/openclaw/pull/113957) |
| [#113857](https://github.com/openclaw/openclaw/pull/113857) | docs(auto-qa): make campaign evidence verifiable | 自动 QA 证据可验证化 | [链接](https://github.com/openclaw/openclaw/pull/113857) |

**整体评估**：今日推进主要集中在 **Web UI 体验修复**（sidebar/icon/archived sessions）和 **大型模块拆分**（talk/doctor/qa-lab 等长期处于 max-lines 例外的 god-file）。属于"基础设施层面"的进展，对终端用户的体感改善有限，但显著降低了未来维护的复杂度。

### 3.2 仍在开放的关键 PR

- [#113421](https://github.com/openclaw/openclaw/pull/113421) + [#104018](https://github.com/openclaw/openclaw/pull/104018) + [#113422](https://github.com/openclaw/openclaw/pull/113422)：**RFC 0018/0037** readiness 框架 + 标准 hosting profiles（giodl73-repo）—— 多 PR 串联，是面向 Kubernetes/容器化部署的关键基础设施，建议关注合并节奏。
- [#111609](https://github.com/openclaw/openclaw/pull/111609)：Reef JSONL store 文件读取加 size guard 防 OOM（合入风险低，安全性高）。
- [#113471](https://github.com/openclaw/openclaw/pull/113471)：memory-core embedding provider 切换时关闭上一个，避免 worker 残留。

---

## 4. 社区热点

### 4.1 讨论最活跃的 Issues（按评论数）

| Issue | 评论数 | 类型 | 核心诉求 | 链接 |
|---|---|---|---|---|
| [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 21 | Feature / Security | 按数据源对 memory 标记信任级别，**防止来自 web 抓取/第三方 skill 的 memory poisoning 攻击** | [链接](https://github.com/openclaw/openclaw/issues/7707) |
| [#78308](https://github.com/openclaw/openclaw/issues/78308) Channel-mediated approval for MCP tool calls | 15 | Feature / Security | 让 MCP 工具复用现有 `/approve <id>` 信道审批管道，**对外部副作用操作做用户确认** | [链接](https://github.com/openclaw/openclaw/issues/78308) |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore lacks end-to-end guarantees | 13 | Bug / P1 | 快照恢复过程中**新建父目录未耐久链接、清理路径与身份校验存在 race**，存在数据丢失风险 | [链接](https://github.com/openclaw/openclaw/issues/113306) |
| [#108435](https://github.com/openclaw/openclaw/issues/108435) v2026.7.1 gateway fails to start | 11 | Bug / P0 | **回归**：升级到 2026.7.1 后 systemd/ollama/manual 三种启动方式全部失败 | [链接](https://github.com/openclaw/openclaw/issues/108435) |
| [#67419](https://github.com/openclaw/openclaw/issues/67419) Session context bloat | 10 | Enhancement | **每次多轮对话都重新注入 MEMORY.md/SOUL.md/USER.md 等 bootstrap 文件，浪费 20-30% tokens** | [链接](https://github.com/openclaw/openclaw/issues/67419) |
| [#7722](https://github.com/openclaw/openclaw/issues/7722) Filesystem Sandboxing Config | 10 | Enhancement / Security | 配置 `tools.fileAccess.allowedPaths/denyPaths` 实现文件系统沙箱 | [链接](https://github.com/openclaw/openclaw/issues/7722) |
| [#10687](https://github.com/openclaw/openclaw/issues/10687) Dynamic model discovery (OpenRouter) | 10 | Bug | OpenRouter 等目录更新快的 provider 应当**动态发现模型**而非静态目录 | [链接](https://github.com/openclaw/openclaw/issues/10687) |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) Gateway heap grows to 1073MB+ | 10 | Bug / P1 | macOS 上 gateway 长时间运行后 heap 持续增长，**cron 任务静默失败** | [链接](https://github.com/openclaw/openclaw/issues/87109) |
| [#43747](https://github.com/openclaw/openclaw/issues/43747) Memory management is chaos | 10 | Bug / Regression | **同一团队 3 人使用 OpenClaw，memory 持久化行为各不相同**，缺乏统一性 | [链接](https://github.com/openclaw/openclaw/issues/43747) |
| [#75593](https://github.com/openclaw/openclaw/issues/75593) subagents list empty after spawn | 10 | Bug / Closed | v2026.4.29 `/subagents list` 在 spawn 后返回空 | [链接](https://github.com/openclaw/openclaw/issues/75593) |

### 4.2 社区诉求分析

- **安全/权限类讨论占据热度前三**：memory trust tagging、MCP approval envelope、filesystem sandboxing——社区对 Agent 安全边界高度关注，与近期披露的 skill 凭据窃取事件相关。
- **性能与成本意识上升**：#67419（context bloat 浪费 20-30% tokens）、#95610（OpenAI prompt-cache 前缀失效）反映出在大模型 API 计费背景下，用户希望 OpenClaw 在 token 使用上更加克制。
- **多 Agent / 多 session 一致性问题**：#43747 中"3 人使用 OpenClaw 行为各异"表明社区开始把 OpenClaw 当作团队协作工具使用，而非纯个人助手——这对底层抽象的一致性提出了更高要求。

---

## 5. Bug 与稳定性

### 5.1 P0 级（影响启动/数据丢失/UX 阻塞发布）

| Issue | 标题 | 是否有修复 PR | 链接 |
|---|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | v2026.7.1 gateway fails to start | ❌ 报告中 11 条评论，无明确 fix PR | [链接](https://github.com/openclaw/openclaw/issues/108435) |
| [#95515](https://github.com/openclaw/openclaw/issues/95515) | 升级 2026.6.8→2026.6.9 损坏 email channel config | ❌ | [链接](https://github.com/openclaw/openclaw/issues/95515) |
| [#109145](https://github.com/openclaw/openclaw/issues/109145) | v2026.7.1-beta.5 Gateway HTTP listen 但不 accept | ❌ | [链接](https://github.com/openclaw/openclaw/issues/109145) |

### 5.2 P1 级（影响 session/消息丢失）

| Issue | 标题 | 是否有修复 PR | 链接 |
|---|---|---|---|
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot 恢复缺少端到端保证 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/113306) |
| [#113466](https://github.com/openclaw/openclaw/issues/113466) | `/new` 和 `/reset` 在 2026.7.1-2 实际未创建新 session | ❌ | [链接](https://github.com/openclaw/openclaw/issues/113466) |
| [#113315](https://github.com/openclaw/openclaw/issues/113315) | Telegram inbound update 在 offset 持久化后永久丢失 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/113315) |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大 SQLite transcript cleanup 阻塞 event loop | ❌ | [链接](https://github.com/openclaw/openclaw/issues/112423) |
| [#87109](https://github.com/openclaw/openclaw/issues/87109) | Gateway heap 增长到 1073MB+，cron 静默失败 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/87109) |
| [#94251](https://github.com/openclaw/openclaw/issues/94251) | Ollama 远程 provider streaming 未消费 | ✅ linked-pr-open | [链接](https://github.com/openclaw/openclaw/issues/94251) |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback transport 重连后未自动 re-handshake | ❌ | [链接](https://github.com/openclaw/openclaw/issues/98435) |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后 running gateway 残留旧 hashed bundle imports | ❌ | [链接](https://github.com/openclaw/openclaw/issues/85844) |
| [#91564](https://github.com/openclaw/openclaw/issues/91564) | Telegram 特定 forum topic 永久 inbound black hole | ❌ | [链接](https://github.com/openclaw/openclaw/issues/91564) |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | 大附件处理触发 RangeError（stack overflow） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/90098) |
| [#92186](https://github.com/openclaw/openclaw/issues/92186) | Foreground reply fence 取消之前完成的群消息回复 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/92186) |
| [#92776](https://github.com/openclaw/openclaw/issues/92776) | Session model pinning 因 origin-field 污染无限持久 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/92776) |
| [#77249](https://github.com/openclaw/openclaw/issues/77249) | Slack socket-mode 重连监督器在 zombie WSS 上挂死 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/77249) |
| [#89766](https://github.com/openclaw/openclaw/issues/89766) | claude-cli 后端 isolated cron lanes 累积泄漏 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/89766) |

### 5.3 稳定性观察

- **v2026.7.1 升级回归**：至少有 4 个独立报告（[#108435](https://github.com/openclaw/openclaw/issues/108435), [#113466](https://github.com/openclaw/openclaw/issues/113466), [#109145](https://github.com/openclaw/openclaw/issues/109145), [#112906](https://github.com/openclaw/openclaw/issues/112906)）确认该版本引入新 bug，强烈建议维护者考虑快速发布 v2026.7.1-3 或回滚部分 commit。
- **Telegram 通道消息丢失是高频故障面**：3 个独立 P1（[#113315](https://github.com/openclaw/openclaw/issues/113315)、[#91564](https://github.com/openclaw/openclaw/issues/91564)、[#87299 已关闭](https://github.com/openclaw/openclaw/issues/87299)）表明 offset/spool 恢复路径仍存在结构性缺陷。
- **修复 PR 覆盖率低**：今日讨论最热的 50 条 Issue 中，**仅有少数明确标记 linked-pr-open**（[#78308](https://github.com/openclaw/openclaw/issues/78308)、[#94251](https://github.com/openclaw/openclaw/issues/94251)、[#94536](https://github.com/openclaw/openclaw/issues/94536)、[#75593 已关闭](https://github.com/openclaw/openclaw/issues/75593)、[#96007](https://github.com/openclaw/openclaw/issues/96007)、[#103162](https://github.com/openclaw/openclaw/issues/103162)、[#95840](https://github.com/openclaw/openclaw/issues/95840)、[#113341 对应 PR](https://github.com/openclaw/openclaw/pull/113341)），其余 P0/P1 大多处于"needs-maintainer-review"或"needs-product-decision"状态，**修复吞吐有待加强**。

---

## 6. 功能请求与路线图信号

### 6.1 高呼声 Feature（评论数 ≥ 5）

| Feature | 关联 PR 状态 | 链接 |
|---|---|---|
| Memory Trust Tagging by Source (#7707, 21) | 无对应 PR | [Issue](https://github.com/openclaw/openclaw/issues/7707) |
| Channel-mediated approval for MCP tools (#78308, 15) | 无对应 PR

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**报告日期：2026-07-26 | 数据范围：过去 24 小时**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正在经历**"用户体验收敛 + 安全基线抬升 + 架构抽象扩张"**三重共振：NanoBot v0.3.0 借"一键 WebUI"拉低门槛、IronClaw 将首屏 JS 包体积压缩 67%、NanoClaw 落地容器级纵深防御（cap-drop / no-new-privileges），三条独立路径共同指向**"让 Agent 既可用、又可信"**的行业基线。与此同时，**配置即代码的信任危机**（ZeroClaw #9348 业务模式下空 allowlist 形同全开）、**Telegram/Matrix 等通道的消息丢失**（OpenClaw 3 个独立 P1、ZeroClaw 类似）、以及 **memory poisoning 防护**（OpenClaw #7707）正成为生态共识级痛点。整体看，生态从"功能堆叠期"进入"质量巩固期"，但发布节奏普遍放缓（13 个项目中仅 1 个今日发版），说明多数项目正处于重构与漏洞治理并行的过渡窗口。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | Release | 健康度 | 当前主线 |
|---|---|---|---|---|---|
| **OpenClaw** | 340 (新/活 240, 关闭 100) | 500 (待 280, 关 220) | ❌ 无 | 🟡 警戒 | v2026.7.1 回归治理 + god-module 拆分 |
| **NanoBot** | 1 关闭 | 7 合并 / 5 待合并 | ✅ **v0.3.0** | 🟢 健康 | 一键 WebUI + 流式滚动 |
| **Hermes Agent** | 50 (48 活, 2 关) | 50 (33 待, 17 关) | ❌ 无 | 🟡 中性 | Windows 兼容 + 安全 PR 评审 |
| **PicoClaw** | 2 | 3 (2 关, 1 待) | ❌ 无 | 🔴 积压 | Matrix 重连（23 天未修复） |
| **NanoClaw** | 2 新 | 11 (1 关, 10 待) | ❌ 无 | 🟢 同日闭环率 100% | 容器纵深防御 + 上下文一致性 |
| **NullClaw** | 0 | 0 | — | ⚪ 无活动 | — |
| **IronClaw** | 11 (4 关) | 20 (9 合/关) | ❌ 无 | 🟢 健康 | WebUI 性能 + Reborn 架构 |
| **LobsterAI** | 9 (8 关) | 11 (1 新 + 8 stale 关) | ❌ 无 | 🟡 清理期 | Windows 安装加固 + Kimi K3 |
| **TinyClaw** | 0 | 0 | — | ⚪ 无活动 | — |
| **Moltis** | 0 | 5 (2 关, 3 待) | ❌ 无 | 🟢 稳态 | Slack/Nostr/记忆后端 |
| **CoPaw (QwenPaw)** | 7 新 | 8 (2 关, 6 待) | ❌ 无 | 🔴 P0 阻塞 | MCP transport + 统一浏览器 SDK |
| **ZeptoClaw** | 0 | 0 | — | ⚪ 无活动 | — |
| **ZeroClaw** | 19 (3 关) | 50 (2 关, 48 待) | ❌ 无 | 🟡 v0.8.4 收尾 | 安全补丁 + npm audit + v0.8.4 准备 |

**关键观察**：
- **PR 待合并率 ≥ 80%** 的项目：OpenClaw（56%）、ZeroClaw（96%）、Hermes Agent（66%）——普遍存在审阅带宽瓶颈
- **当日发版**：仅 NanoBot 1 家（v0.3.0）
- **新开 Bug 同日闭环**：NanoClaw（100%）、IronClaw（3/3 WebUI Issue）

---

## 3. OpenClaw 在生态中的定位

### 规模优势
OpenClaw 以 **340 Issue + 500 PR** 的日吞吐量稳居生态首位，体量约为 Hermes Agent（50+50）的 **6.7 倍**，是 PicoClaw（2+3）的 **170 倍**。这种规模带来 **"现象级痛点的早期信号放大"** 价值——本次日报中 OpenClaw 暴露的 memory poisoning（#7707）、SQLite 快照不安全（#113306）、Telegram offset 丢失（#113315）等问题，在其他项目中均能找到"弱化版"对应：

| OpenClaw 痛点 | 生态中的同源问题 |
|---|---|
| Session context bloat（#67419） | Hermes Agent #31043（CLI `/new` 不刷新 context_length） |
| Memory 行为不一致（#43747） | Hermes Agent #71298（providers 双存储不一致） |
| Telegram inbound 丢失（#113315） | ZeroClaw #9357（master 分支测试退化）、PicoClaw #3203（Matrix 无重连） |
| God-module refactor | IronClaw #6669 / #6616（Reborn 拆分） |

### 技术路线差异
OpenClaw 走的是 **"全栈广度优先"**：覆盖 Web UI、Mac dashboard、talk relay、doctor、subagents、SQLite/Reef JSONL 等多层抽象；IronClaw 则聚焦 **"WebUI 性能 + Rust 工程化"**；NanoClaw 强攻 **"容器隔离 + 消息流一致性"**；Hermes Agent 主打 **"跨平台适配器一致性"**；Moltis 押注 **"多通道 + 可替换记忆后端"**。OpenClaw 的广度使其成为生态的 **"基础设施事实参考"**，但也带来 god-module 治理负担（2211 行 doctor、1647 行 talk relay 是当下主要 refactor 对象）。

### 社区规模对比
OpenClaw 单日合并 220 PR，约为 Hermes Agent（17）的 13 倍。社区规模意味着 **更密集的安全研究暴露面**（如 #7707 memory trust tagging 即由社区驱动），也意味着 **更高的回归风险**（v2026.7.1 至少 4 个独立回归报告）。

---

## 4. 共同关注的技术方向

### 4.1 🔒 Agent 安全边界与权限治理（**全员关注**）

| 诉求 | 涉及项目 | 具体表现 |
|---|---|---|
| **memory poisoning 防护** | OpenClaw #7707（按数据源标记信任级别） | 唯一独立 Issue，但社区热度 Top 1（21 评论） |
| **MCP 工具调用的用户审批通道** | OpenClaw #78308 | 复用 `/approve <id>` 信道做外部副作用确认 |
| **文件系统沙箱配置** | OpenClaw #7722（`tools.fileAccess.allowedPaths/denyPaths`） | 跨平台路径白名单/黑名单 |
| **容器纵深防御（cap-drop / no-new-privileges / pids-limit）** | NanoClaw #2748（✅ 已合入） | 默认剥离全部 capabilities + 阻止提权 + fork-bomb 防护 |
| **Windows PowerShell 植入提权** | Hermes Agent #71687（评审中） | 阻止 cwd 植入的 powershell.exe/.cmd/.bat |
| **容器 s6 chown 提权** | Hermes Agent #71682（评审中） | 阻止符号链接组合实现 chown 提权 |
| **业务模式配置误信** | ZeroClaw #9348（S1） | WhatsApp `mode=business` 下空 allowlist 形同全开 |
| **npm audit 漏洞修复** | ZeroClaw PR #9270（✅ 已合入） | `@redocly/openapi-core` 等 3 项高危 |

**判断**：安全治理已从"加分项"升级为"准入门槛"。NanoClaw 的容器级硬化路径（cap-drop 默认值 + agent 级覆盖）有望成为行业参考实现。

### 4.2 🪟 通道（Channel）可靠性（**3+ 项目共识**）

| 通道 | OpenClaw | ZeroClaw | PicoClaw |
|---|---|---|---|
| **Telegram** | #113315（offset 持久化后丢失）、#91564（forum topic 黑洞）、#92186（fence 取消） | PR #8561（multi_message 流模式对齐 Discord/Matrix） | — |
| **Matrix** | — | PR #8443（单消息进度草稿） | #3203（sync 无重连，23 天未修） |
| **Slack** | — | — | — |

**Hermes Agent** 同样在 Telegram MarkdownV2 转义（#6388）、Discord `max_attachment_bytes` 不生效（#40332）、Email IMAP 误标记已读（#42997）上反复出现同类问题。

**判断**：**通道适配器缺乏契约级测试覆盖** 是生态级共因，建议各项目间共享"通道契约 conformance suite"。

### 4.3 🧠 Context/Memory 管理（**性能 + 一致性双重痛点**）

- **Context bloat**：OpenClaw #67419（每次多轮注入 MEMORY.md/SOUL.md/USER.md，浪费 20-30% tokens）
- **缓存前缀失效**：OpenClaw #95610（OpenAI prompt-cache 前缀漂移）
- **Memory 行为一致性**：OpenClaw #43747（同一团队 3 人行为各异）、Hermes Agent #71298（CLI/GUI model 列表不一致）
- **多 Agent 工作目录切换语义漂移**：Hermes Agent #71676（cwd 切换后 system prompt 不重建，PR 评审中）
- **可替换记忆后端**：Moltis #1158（zvec 向量后端，feature-gated）

### 4.4 🖥️ WebUI / 桌面端体验（**重点投入方向**）

| 项目 | 关键投入 | 度量结果 |
|---|---|---|
| IronClaw | 路由级 code splitting + tree-shaking | 初始 JS 1227 kB → 377 kB（↓69%） |
| NanoBot | 一键 `nanobot webui` + 流式平滑滚动（基于状态驱动的帧合并 + ease-out） | — |
| OpenClaw | inline stroke attributes（#113952）、sidebar 归档保留（#113882）、只读模式控件隐藏（#113947） | shadow-DOM 图标样式修复 |
| Hermes Agent | Desktop ⌘T 命名对齐 #71672、Profile 卡片文案修正 #62931 | — |
| CoPaw | reranker UI 闭环（#6399 取代 #5691/#5692） | — |

### 4.5 🤖 多 Agent / 多 Workspace 架构（**前沿方向**）

- Hermes Agent：**单 gateway 多 agent（#62944 rebase 取代 #25660）** + per-agent Buzz 身份（#71686）—— 是 OpenClaw "subagents" 体系的直接对标
- Moltis：**Nostr NIP-29 + Buzz 工作区接入（#1168）** —— 协议层面首次跨越个人 DM 边界
- OpenClaw：subagents list 空 bug（#75593 ✅ 已关闭） + memory-core embedding 切换关闭（#113471）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全栈广度（Web/Mac/通道/subagents/SQLite） | 个人 + 小团队 | TS 全栈 + SQLite/Reef JSONL + 多通道适配器 |
| **NanoBot** | 一键 WebUI + 多 Agent 可视化 | 新手 + 高级用户 | gateway/webui/CLI 三层入口，260 PR 累积演进 |
| **Hermes Agent** | 跨平台一致性 + 适配器矩阵 | 企业 + 跨平台用户 | Desktop/CLI/Web Dashboard 三端 + 10+ 通道 |
| **PicoClaw** | 轻量 + 边缘部署 | 嵌入式 / 自托管 | 极简 CLI，支持 ARMv7（Raspberry Pi）+ 自托管网关 |
| **NanoClaw** | 容器安全 + Agent 上下文一致性 | DevOps / 安全敏感团队 | container/agent-runner 分层 + host→agent 消息镜像 |
| **IronClaw** | WebUI 性能 + Rust 工程化 | 性能敏感用户 | Rust 多 crate workspace + WebUI 路由级分包 |
| **LobsterAI** | Windows 安装器 + 中文模型生态 | 中文用户 | Electron + Windows 安装/恢复加固 |
| **Moltis** | 多通道 + 可替换记忆后端 | 协议研究者 / Nostr 生态 | Rust + feature-gated memory backends |
| **CoPaw** | 统一浏览器 SDK + MCP 兼容 | 浏览器自动化用户 | 控制面/执行面分离架构 |
| **ZeroClaw** | 配置即代码 + 插件大一统 | 安全合规用户 | Rust + `forbid(unsafe_code)` 工程化目标 |

**关键架构差异**：
- **执行模型**：OpenClaw/NanoBot/Hermes 偏向 TS/Node 全栈；IronClaw/Moltis/ZeroClaw 走 Rust 路径；CoPaw/LobsterAI 基于 Electron 桌面封装
- **协议层**：Moltis 押注 Nostr（NIP-29/42）；Hermes Agent 接入 Buzz（Block/Nostr）；OpenClaw/NanoClaw/CoPaw 主攻 MCP
- **记忆后端**：Moltis 实验 zvec；OpenClaw/Hermes 走 SQLite + 文件混合；ZeroClaw 关注成本追踪（#9373）

---

## 6. 社区热度与成熟度

### 🔥 高活跃 / 高风险组
- **OpenClaw**：340 Issue + 500 PR 日吞吐量，但 v2026.7.1 多重回归（4 个独立报告）+ 修复 PR 覆盖率 < 20%，处于 **"高速迭代但稳定性挑战"** 阶段
- **ZeroClaw**：19 Issue + 50 PR，v0.8.4 发布窗口临近（7-31），S1 安全风险已识别但 Fix PR 仅 20% 覆盖，**"发布冲刺期"**
- **Hermes Agent**：50 Issue + 50 PR，跨平台 + 安全 PR 集中评审，**"架构扩展期"**

### 🟢 快速迭代 / 强响应组
- **NanoBot**：v0.3.0 发布 + 38 位新贡献者，WebUI 体验跃迁，**"用户增长期"**
-

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**日期：2026-07-26**
**项目地址：https://github.com/HKUDS/nanobot**

---

## 1. 今日速览

NanoBot 今日迎来里程碑式更新——**v0.3.0 正式发布**，整合了 260 个 PR 与 38 位新贡献者的成果。过去 24 小时内仓库活跃度较高：12 条 PR 动态（5 条待合并、7 条已合并/关闭），1 条 Issue 关闭，整体围绕 **v0.3.0 发布收尾**、**WebUI 体验打磨** 与 **通道/会话可靠性修复** 三大主题推进。项目健康度良好，发布版本与补丁齐头并进，无新开 Issue 进入积压队列。

---

## 2. 版本发布

### 🚀 v0.3.0 — "The agent gained agency"

🔗 https://github.com/HKUDS/nanobot/releases/tag/v0.3.0

**关键亮点：**
- **全新 WebUI 一键体验**：`nanobot webui` 命令即可在本地准备 WebUI、启动网关（gateway），并在浏览器中打开工作台（workbench）
- **Agent 自主能力升级**（"agent gained agency"）
- 累计合并 **260 个 PR**，引入 **38 位新贡献者**

**兼容性窗口（Compatibility Window）：**
根据 PR #5083，本版本是 `v0.2.x` 系列兼容期的最后窗口，涉及以下三项遗留逻辑将在 v0.3.1 清理：
- 旧会话路径回退与懒迁移
- 被忽略的 `agents.defaults.maxMessages` 警告
- 旧的兼容迁移路径

**迁移注意事项：**
- 自 v0.3.1 起，旧版兼容代码将被移除，建议用户尽早完成升级
- WebUI 为新用户体验首选路径，`gateway` 仍保留为运维/服务直连入口
- 交互式 CLI 仍可用于高级用户场景

---

## 3. 项目进展

今日 **7 条 PR 已合并/关闭**，项目围绕 v0.3.0 发布完成最后冲刺：

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| #5081 | 发布准备 | 将包版本与源码回退版本从 `0.2.2` 升至 `0.3.0`；修复 composer 模型徽章宽度问题 | [查看](https://github.com/HKUDS/nanobot/pull/5081) |
| #5082 | 文档 | 重写 README：明确 `webui` 为浏览器优先路径，区分 foreground/background 模式，保留 `gateway` 作为运维入口 | [查看](https://github.com/HKUDS/nanobot/pull/5082) |
| #5085 | 功能 | 一键安装后自动启动 `nanobot webui --yes`（仅限本地桌面浏览器场景，SSH/无头环境保留 setup wizard） | [查看](https://github.com/HKUDS/nanobot/pull/5085) |
| #4696 | 体验 | WebUI 流式输出平滑滚动：基于状态驱动的帧合并 + ease-out 摄像机跟随，模型显式管理滚动归属权 | [查看](https://github.com/HKUDS/nanobot/pull/4696) |
| #4954 | Bug 修复 | 子智能体晚到的回合在 WebUI 上保持可见：保留投递元数据、为新调度分配新 turn ID，通过恢复的 WebSocket 路由状态 | [查看](https://github.com/HKUDS/nanobot/pull/4954) |
| #5083 | 维护 | 将兼容性清理推迟至 v0.3.1；标记 v0.3.0 为最后兼容窗口 | [查看](https://github.com/HKUDS/nanobot/pull/5083) |
| #1284 | 工程 | 添加 CI/CD 流水线、代码质量与覆盖率工具（今日关闭，标记为冲突） | [查看](https://github.com/HKUDS/nanobot/pull/1284) |

**整体进展评估**：发布版本已完成端到端拼合（代码、文档、安装引导、UI 流式体验），项目在用户入门路径（Onboarding）上迈进了一大步。

---

## 4. 社区热点

### 🔥 唯一活跃 Issue：#1131 CI Test Coverage（已关闭）

🔗 https://github.com/HKUDS/nanobot/issues/1131

- **作者**：fengxiaohu | **创建**：2026-02-24 | **评论数**：4 | 👍 0
- **诉求**：用户希望明确仓库的 CI 行为——`tests/` 与 `.github/workflows` 目录虽存在，但 PR 是否会自动运行测试、是否强制 lint/coverage 检查均不清晰
- **状态**：今日已关闭

**热度分析**：该 Issue 自 2 月提出长期未获官方澄清，今日关闭意味着 v0.3.0 配套的 CI 体系（含 #1284 的相关 PR）已被纳入项目路线图。社区对 **测试基础设施透明化** 的需求得到回应。

> 注：PR #1284 虽标题为"Add CI workflow"，但因冲突标记为 closed，CI 流水线是否最终合并仍待观察。

---

## 5. Bug 与稳定性

### 🔴 P1 优先级（高）

| PR/Issue | 描述 | 状态 |
|---|---|---|
| [#4928](https://github.com/HKUDS/nanobot/pull/4928) | **`fix(heartbeat)`**：unified session 心跳消息路由到最后一通道——之前会路由到错误通道或丢失 | 🟡 OPEN，待合并 |
| [#5084](https://github.com/HKUDS/nanobot/pull/5084) | **`fix(agent)`**：保留排队中消息的运行时上下文（channel、chat、sender、message ID、元数据、workspace），关闭 #4064 | 🟡 OPEN，待合并 |
| [#4954](https://github.com/HKUDS/nanobot/pull/4954) | **`fix(webui)`**：子智能体晚到回合丢失问题 | ✅ 已合并 |
| [#1131](https://github.com/HKUDS/nanobot/issues/1131) | CI 测试覆盖度不透明 | ✅ 已关闭 |

### 🟡 长期未合并的稳定性修复

| PR | 描述 | 状态 |
|---|---|---|
| [#3035](https://github.com/HKUDS/nanobot/pull/3035) | `fix(cron)`：`at` 类型任务引入 10 分钟宽限窗口，解决 LLM 处理延迟导致的过期任务永久不调度问题 | 🟡 OPEN（自 4 月起） |
| [#1073](https://github.com/HKUDS/nanobot/pull/1073) | `fix`：保存配置时保留未知 key，防止自定义 provider（如 `openai-codex`）配置被静默丢弃 | 🟡 OPEN（自 2 月起） |

**稳定性评估**：今日合并的 #4954 直接修复了 WebUI 子智能体可见性回归，#4928、#5084 等待合并后将覆盖通道路由与运行时上下文丢失两类 P1 问题。#1073 与 #3035 已搁置 3–5 个月，建议维护者优先评估合并。

---

## 6. 功能请求与路线图信号

| 功能/请求 | PR | 信号强度 | 评估 |
|---|---|---|---|
| 全新安装自动打开 WebUI | [#5085](https://github.com/HKUDS/nanobot/pull/5085) | ⭐⭐⭐⭐⭐ | ✅ 已合入 v0.3.0 |
| WebUI 流式输出平滑滚动 | [#4696](https://github.com/HKUDS/nanobot/pull/4696) | ⭐⭐⭐⭐ | ✅ 已合入 v0.3.0 |
| `bwrap` 沙箱支持额外的 bind 根目录（如 `~/.local/bin`、`~/.cargo/bin`） | [#4625](https://github.com/HKUDS/nanobot/pull/4625) | ⭐⭐⭐ | 🟡 OPEN，关闭 #4107 |
| README 快速入门重写（WebUI/Gateway/CLI 三层） | [#5082](https://github.com/HKUDS/nanobot/pull/5082) | ⭐⭐⭐⭐ | ✅ 已合入 v0.3.0 |

**路线图判断**：v0.3.0 已将"WebUI 一键体验 + 流畅视觉"作为核心卖点；下一阶段（v0.3.1）将聚焦 **兼容性清理**（#5083）与 **通道/会话可靠性**（#4928、#5084）。沙箱配置灵活性（#4625）若获维护者认可，有望在 v0.3.1 或 v0.4.0 落地。

---

## 7. 用户反馈摘要

> 当前数据集中 Issues 评论数量有限（仅 #1131 有 4 条评论），主要反馈来自 PR 描述与合并上下文。以下提炼关键用户痛点：

- **🟢 满意度提升信号**：
  - v0.3.0 的 `nanobot webui` 一键命令被定位为"最快上手路径"，反映出此前用户对安装/启动流程存在摩擦
  - 38 位新贡献者加入，说明项目开放性与友好度获得认可

- **🔴 反复出现的痛点**：
  - **配置数据丢失**（#1073）：用户自定义 provider 配置被静默丢弃，自 2 月起未合并，是社区最长期的稳定性隐患
  - **cron `at` 任务永不触发**（#3035）：LLM 处理延迟导致 10 分钟内的过期任务被永久跳过，影响定时任务可靠性
  - **CI 不透明**（#1131）：贡献者无法确认 PR 是否触发测试，影响外部贡献意愿

- **🟡 体验细节诉求**：
  - WebUI 子智能体晚到回合显示问题（#4954）暗示用户期望 **多智能体可视化调试能力**
  - 流式滚动卡顿（#4696）说明 WebUI 在长输出场景下的视觉体验仍是用户关注重点

---

## 8. 待处理积压

以下为今日仍处于 OPEN 状态且长期未合并的重要项，**提醒维护者优先评估**：

| 类型 | 编号 | 创建时间 | 等待时长 | 优先级 |
|---|---|---|---|---|
| PR | [#3035](https://github.com/HKUDS/nanobot/pull/3035) | 2026-04-11 | ~3.5 个月 | 稳定性修复（cron） |
| PR | [#1073](https://github.com/HKUDS/nanobot/pull/1073) | 2026-02-23 | ~5 个月 | 数据丢失风险（config） |
| PR | [#4928](https://github.com/HKUDS/nanobot/pull/4928) | 2026-07-14 | 12 天 | P1 心跳路由修复 |
| PR | [#5084](https://github.com/HKUDS/nanobot/pull/5084) | 2026-07-25 | 1 天 | P1 运行时上下文保留 |
| PR | [#4625](https://github.com/HKUDS/nanobot/pull/4625) | 2026-07-01 | ~25 天 | 沙箱功能增强 |

**积压评估**：5 条待合并 PR 中 2 条为 P1 级别且修复明确的 Bug（#4928、#5084），建议在 v0.3.0 后立即合入下一补丁版本；#1073 与 #3035 因长期搁置存在合并冲突风险，建议尽快 rebase。

---

## 📊 总结

NanoBot 在 2026-07-26 完成了一次重要的版本跃迁。**v0.3.0 的发布将"用户体验"提升至核心位置**（一键 WebUI、流畅滚动、新手引导优化），社区指标（260 PR、38 新贡献者）显示出强劲的吸引力。但同时，长期搁置的 **配置数据丢失**（#1073）与 **cron 任务丢失**（#3035）仍是项目稳定性的隐患，建议维护者在下一个迭代周期重点清理积压，兑现 v0.3.1 的兼容性收尾承诺。

> **下一关键日期**：v0.3.1 发布窗口（兼容性清理 + 通道/会话 P1 修复合并）。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-07-26**

---

## 1. 今日速览

Hermes Agent 项目今日处于高强度迭代状态：过去 24 小时共有 **50 条 Issue 更新**（48 条活跃 / 2 条已关闭）和 **50 条 PR 更新**（33 条待合并 / 17 条已合并或关闭），但**无新版本发布**。从内容分布看，社区仍以 **Bug 修复（特别是 Windows 平台兼容性和会话/会话状态管理）** 为核心诉求，多个高优 Issue 已配套有对应 fix PR 进入评审阶段。整体而言，项目维护节奏稳定但积压明显，多个跨平台、跨适配器的稳定性问题需要持续关注。

---

## 2. 版本发布

**今日无新版本发布**。

---

## 3. 项目进展

今日共有 **17 条 PR 已合并或关闭**，其中既包含常规 bug 修复，也包含较重要的功能合入：

### 已合并 / 关闭的重要 PR

| PR | 说明 | 意义 |
|---|---|---|
| [#71679](https://github.com/NousResearch/hermes-agent/pull/71679) | fix(desktop): 实际读取 `agent.reasoning_effort` 而非默认 medium | 修复 Desktop 端推理力度被静默降级的问题，闭合配置不生效的体验断裂 |
| [#71672](https://github.com/NousResearch/hermes-agent/pull/71672) | fix(desktop): ⌘T 新会话以首条消息命名 | 让 ⌘T 与 ⌘N 在会话命名行为上对齐，减少 UI 状态不一致 |
| [#62660](https://github.com/NousResearch/hermes-agent/pull/62660) | feat(compression): 多主题消息会话的话题感知压缩 | 提供更细粒度的上下文压缩策略（被关闭，可能为重复或等待重开） |
| #65123 | A UTF-8 BOM in `.env` silently drops the first key（Issue） | 关闭了关键静默配置丢失问题 |

### 推进中的重要 PR（仍待合并）

- [#71676](https://github.com/NousResearch/hermes-agent/pull/71676) **[P0]** `fix(conversation): rebuild the system prompt when the working directory drifts` — 修复工作目录切换后系统提示词不重建导致的前缀缓存命中失效/语义漂移，承接 #47915。
- [#71687](https://github.com/NousResearch/hermes-agent/pull/71687) **安全** `fix(hermes_cli): stop planted cwd PowerShell from running during managed-uv bootstrap` — 解决 Windows 下攻击者可通过 cwd 植入 `powershell.exe/.cmd/.bat` 提权的问题。
- [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) **安全** `fix(hermes_cli): stop container privilege escalation via s6 gateway log symlink chown` — 阻止容器内非特权用户通过符号链接组合实现 chown 提权。
- [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) `fix(curator): make the autonomous write policy consistent (#67140)` — 统一 background review 与定时 curator 两条写入策略分支。
- [#71683](https://github.com/NousResearch/hermes-agent/pull/71683) `fix(gateway,tools): add missing .3gp and .webm to video extension sets` — 修复 `.3gp/.webm` 媒体未被识别为视频、`MEDIA:` 标签泄漏为纯文本。
- [#71684](https://github.com/NousResearch/hermes-agent/pull/71684) `fix(telegram): rich-message id coercion + fallback-IP diagnosability` — Telegram 适配器两项独立健壮性修复。
- [#70664](https://github.com/NousResearch/hermes-agent/pull/70664) `fix(cron): release guard on execution claim failure` — 修复 `EMFILE` 等场景下 cron `_running_job_ids` 守卫长期卡死。
- [#61621](https://github.com/NousResearch/hermes-agent/pull/61621) `fix(agent): refresh fallback chain during model switch` — 修复长生命周期会话 fallback 链陈旧导致 429 重试走老链路。
- [#62931](https://github.com/NousResearch/hermes-agent/pull/62931) `fix(desktop): clarify inherited profile gateway` — 修正 Profile 卡片文案与实际行为不符。
- [#71681](https://github.com/NousResearch/hermes-agent/pull/71681) `fix(browser): avoid apt-backed install on non-Debian hosts` — 避免在非 Debian 主机上误用 apt 安装浏览器。

整体来看，今日合入的修复集中在 **Desktop UI 一致性、配置文件读取、媒体扩展名补齐** 等"小而关键"的体验问题，叠加 **3 条 P0/P1 + 2 条安全相关修复** 仍在评审，体现出项目在向"跨平台一致性"和"安全基线加固"方向稳步推进。

---

## 4. 社区热点

### 评论最多的 Issues（按热度）

1. [#6388](https://github.com/NousResearch/hermes-agent/issues/6388) — **[Telegram] MarkdownV2 转义破坏 bullet 列表显示**（7 条评论，1 👍）  
   LLM 生成的 `- item` 列表因 MarkdownV2 转义成 `\- item` 而无法渲染为项目符号。**诉求**：让 Telegram 适配器正确处理 MarkdownV2 列表/转义，或选择兼容的子集。

2. [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) — **Dashboard 跨标签会话串扰 + `/new` 挂起**（7 条评论）  
   多标签使用 Web Dashboard 时未刷新的接收标签会出现会话串扰，且 `/new` 后必须重启容器才能恢复。**诉求**：Dashboard 与 CLI 的会话生命周期需要严格隔离。

3. [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) — **providers vs custom_providers 双存储造成 CLI/GUI 不一致 + profile 中 model 版本卡死**（6 条评论）  
   `hermes setup model` CLI 与 Hermes Desktop Settings > Provider 页面展示不一致，profile 切换后模型版本不更新。

4. [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) — **[P1] Hermes Desktop Windows 启动循环**（5 条评论）  
   WebSocket 短暂连接后立即断开，触发 renderer 反复重置恢复。回归自近期某次更新。

5. [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) — **为遗留/未托管 local skill 提供 curator 接管路径**（4 条评论）  
   重复 Issue：希望 `created_by` 缺失或为 null 的 `.usage.json` 有官方方式纳入 curator 管理。

### 关注度上升的合并动议

- [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) — **Hermes Cloud 连接模式：Desktop 不发起登录，401 循环（仅 Windows）**（3 评论）  
  明确锁定 `07e97d2` 为 bad commit，`2c1a38a` 为 good commit，回归窗口可定位。

### 社区诉求归纳

- **平台一致性**：Telegram / Discord / Email / Photon 等适配器在 Markdown、媒体、附件大小、配置字段映射上反复出现"配置写了不生效"或"展示与实际不一致"的问题。
- **Desktop 启动健壮性**：Windows 是重灾区，用户希望错误提示能引导自助恢复，而非冷启动失败。
- **会话边界**：跨 tab、跨 CLI、跨 ACP 的会话 cwd/context 边界需要清晰契约。

---

## 5. Bug 与稳定性

按严重程度排列（参考 PR/Issue 标签）：

### 🔴 P0 / P1（高优先级，需立即修复）

| 编号 | 标题 | 是否有 fix PR |
|---|---|---|
| [#71676](https://github.com/NousResearch/hermes-agent/pull/71676) | 会话工作目录切换后系统提示词不重建 | ✅ 同一作者 PR |
| [#71226](https://github.com/NousResearch/hermes-agent/issues/71226) | Hermes Desktop Windows 11 启动循环 | ❌ 暂无 PR |
| [#71491](https://github.com/NousResearch/hermes-agent/issues/71491) | Hermes Cloud 连接模式 Desktop 401 死循环（Windows） | ❌ 暂无 PR |

### 🟠 P2（重要，需排期）

| 编号 | 标题 | 是否有 fix PR |
|---|---|---|
| [#62726](https://github.com/NousResearch/hermes-agent/issues/62726) | Dashboard 跨标签会话串扰 + `/new` 挂起 | ❌ 暂无 |
| [#71298](https://github.com/NousResearch/hermes-agent/issues/71298) | providers vs custom_providers CLI/GUI 不一致 | ❌ 暂无 |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | Windows 下 `search_files` 绝对路径返回 0 结果 | ❌ 暂无 |
| [#39750](https://github.com/NousResearch/hermes-agent/issues/39750) | Azure Foundry 视觉走 chat/custom 路径返回 401 | ❌ 暂无 |
| [#31043](https://github.com/NousResearch/hermes-agent/issues/31043) | CLI `/new` 不刷新 `context_compressor.context_length` | ❌ 暂无 |
| [#67140](https://github.com/NousResearch/hermes-agent/issues/67140) | background skill-review 与 curator 写守卫冲突 | ✅ [#71680](https://github.com/NousResearch/hermes-agent/pull/71680) |
| [#42997](https://github.com/NousResearch/hermes-agent/issues/42997) | Email gateway IMAP 拉取将未读 Gmail 标为已读 | ❌ 暂无 |
| [#49793](https://github.com/NousResearch/hermes-agent/issues/49793) | Photon/iMessage streaming 光标显示为白方块（tofu） | ❌ 暂无 |
| [#27300](https://github.com/NousResearch/hermes-agent/issues/27300) | WeChat 语音走腾讯云 STT 对非中文乱码 | ❌ 暂无 |
| [#41579](https://github.com/NousResearch/hermes-agent/issues/41579) | `_get_platform_tools()` 未解析 legacy alias | ❌ 暂无 |
| [#63717](https://github.com/NousResearch/hermes-agent/issues/63717) | Windows Desktop 更新 7 项相关根因 | ❌ 暂无 |
| [#11515](https://github.com/NousResearch/hermes-agent/issues/11515) | ACP 会话 cwd 仅用于工具执行，不用于项目上下文发现 | ❌ 暂无 |
| [#48659](https://github.com/NousResearch/hermes-agent/issues/48659) | Photon sidecar 文件缺失导致 wheel 安装 ENOENT | ❌ 暂无 |
| [#60447](https://github.com/NousResearch/hermes-agent/issues/60447) | Windows 非 ASCII 路径下 `stage-native-deps.cjs` 失败 | ❌ 暂无 |
| [#39418](https://github.com/NousResearch/hermes-agent/issues/39418) | `/reload-mcp` 触发后 CLI 终端冻结 | ❌ 暂无 |
| [#40332](https://github.com/NousResearch/hermes-agent/issues/40332) | Discord `max_attachment_bytes` 配置不生效 | ❌ 暂无 |
| [#59026](https://github.com/NousResearch/hermes-agent/issues/59026) | Langfuse 文档化安装在 SDK 被 venv 更新移除后静默停止 | ❌ 暂无 |
| [#49388](https://github.com/NousResearch/hermes-agent/issues/49388) | Xiaomi MiMo `vision_analyze` 走错路径 | ❌ 暂无 |
| [#48510](https://github.com/NousResearch/hermes-agent/issues/48510) | Windows 下 `subprocess` 不解析 `.CMD` | ❌ 暂无 |
| [#70480](https://github.com/NousResearch/hermes-agent/issues/70480) | Docker 镜像 SQLite WAL-reset 漏洞（libsqlite3 3.46.1） | ❌ 暂无 |
| [#23759](https://github.com/NousResearch/hermes-agent/issues/23759) | `extract_media` 对 `MEDIA:` 路径中 Markdown 加粗敏感 | ❌ 暂无 |

### 🟡 P3（一般）

[#6388](https://github.com/NousResearch/hermes-agent/issues/6388)、[#67139](https://github.com/NousResearch/hermes-agent/issues/67139)、[#45448](https://github.com/NousResearch/hermes-agent/issues/45448)、[#56989](https://github.com/NousResearch/hermes-agent/issues/56989)、[#40896](https://github.com/NousResearch/hermes-agent/issues/40896)、[#61360](https://github.com/NousResearch/hermes-agent/issues/61360) 等共约 12 条。

### 🔒 安全 / 兼容性

- [#71687](https://github.com/NousResearch/hermes-agent/pull/71687) Windows PowerShell 植入提权（评审中）
- [#71682](https://github.com/NousResearch/hermes-agent/pull/71682) 容器 s6 chown 提权（评审中）

**整体观察**：超过 20 条 P2+ Bug 处于"已报告但无 fix PR"状态，**Issue-to-PR 转化率不足 20%**，社区响应压力较大。Windows 平台相关 Bug 在 P0/P1/P2 中占比突出。

---

## 6. 功能请求与路线图信号

### 重点 Feature PR（评审中或刚开）

| PR | 功能 | 路线图价值 |
|---|---|---|
| [#71686](https://github.com/NousResearch/hermes-agent/pull/71686) | per-agent Buzz 身份（单 gateway 多 agent） | 与 [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) 一起构建"单进程多 agent 工作区"主线，属于重大架构扩展 |
| [#62944](https://github.com/NousResearch/hermes-agent/pull/62944) | 单 gateway 多 agent（rebase 取代 #25660） | 同一战略方向 |
| [#71610](https://github.com/NousResearch/hermes-agent/issues/68871) PR | Buzz (Block/Nostr) 平台适配器 | 扩展 Web3/去中心化平台覆盖 |
| [#65982](https://github.com/NousResearch/hermes-agent/pull/65982) | claude-agent-sdk provider（OAuth 订阅计费、fail-closed） | 官方 Claude Agent SDK 作为一等 provider，绑定订阅而非 metered key |
| [#71685](https://github.com/NousResearch/hermes-agent/pull/71685) | 治理审批 + 连接器可视化（Desktop / Dashboard） | 强化企业级可观测与审批工作流 |
| [#71541](https://github.com/NousResearch/hermes-agent/pull/71541) | 网关后授权消息钩子 | 给 Discord/Telegram 已授权会话提供可扩展的统一钩子 |
| [#61360](https://github.com/NousResearch/hermes-agent/issues/61360) | Codex app-server 允许配置 codex 二进制路径 | 提升服务/Worker 场景下的可配置性 |

### Feature Issue 信号

- [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) feat(curator): 为遗留/未托管 local skill 提供官方接管路径（重复）
- [#56989](https://github.com/NousResearch/hermes-agent/issues/56989) doc/harden: 完全本地 STT（MLX + CUDA）
- [#61360](https://github.com/NousResearch/hermes-agent/issues/61360) 配置 codex 二进制路径
- [#67139](https://github.com/NousResearch/hermes-agent/issues/67139) skills curator 接管

### 路线图信号判断

1. **多 agent / 多 workspace**：Buzz PR 栈 + #62944 rebased 暗示

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-07-26

## 1. 今日速览

PicoClaw 过去 24 小时活跃度处于**中等偏低水平**：2 条 Issue 出现更新、3 条 PR 进入流转，但**无新版本发布**。社区关注的焦点集中在 Matrix 通道的连接稳定性（Issue #3203，已累计 6 条评论与 2 次 👍）以及 `/list models` 命令的输出完整性（Issue #3294 新开）。PR 端则呈现出"关闭多于合并"的清理态势，未有新功能合入主干。整体来看，项目处于**问题反馈与积压治理并行**的阶段，主线开发节奏平稳但缺乏显著推进。

---

## 2. 版本发布

**无新版本发布。** 当前主流可见版本仍为 v0.2.9 / v0.3.1（见 Issue #3203、#3294 中的用户环境），距离上一次正式发版已超过 24 小时。建议关注维护者是否会在后续合入 simplex channel（PR #3193）或 Bug 修复后发布补丁版本。

---

## 3. 项目进展

过去 24 小时共有 **2 条 PR 被关闭**，但均非实质性的功能合并，更像是社区清理动作：

| PR | 标题 | 状态 | 评估 |
|---|---|---|---|
| [#339](https://github.com/sipeed/picoclaw/pull/339) | Added Email Tool, Calendar Integration and System Stats Overview Tool | CLOSED | 自 2026-02-17 开出，跨度超 5 个月。包含 Google Calendar、邮件通道增强、开发者工具（GitHub、System Stats）等较大改动，长期未获评审而被关闭，可能因改动面过广、维护者评估后认为不成熟 |
| [#3205](https://github.com/sipeed/picoclaw/pull/3205) | fix: support 9router gateway responses and add Linux ARMv7 build target | CLOSED | 标注 `[stale]`，贡献者针对 Raspberry Pi 3 B+ 平台添加 ARMv7 构建目标并修复 9router 网关响应解析，属于长尾场景支持，因 stale 被自动关闭 |
| [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type | OPEN（仍待合并） | 新增 simplex 通道类型的功能 PR，自 2026-06-27 开出后同样被标 stale，**但仍处 OPEN 状态**，具有被复活合并的潜力 |

**整体评估**：主干今日未向前推进实质性新功能。两条关闭的 PR 暴露出项目对**大体积贡献与 niche 平台支持**的评审/合并能力有限，社区贡献者可能需要拆分提交或与维护者预沟通。

---

## 4. 社区热点

**今日最活跃议题：[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203) — Matrix sync loop has no reconnection logic**

- 评论数：6，👍：2，是当日社区讨论密度最高的话题
- 核心痛点：Matrix 通道的 `/sync` 长轮询循环在网络抖动或 homeserver 重启后**永久死亡**，且因为主进程未退出，systemd 的 `Restart=on-failure` 也无法触发恢复
- 这是一个**生产环境严重可用性问题**，影响了 systemd 部署的可靠性预期

**次热：[Issue #3294](https://github.com/sipeed/picoclaw/issues/3294) — /list models only shows the current model**

- 当日新开，0 评论，但反映了命令命名/描述与实际行为不一致的 UX 问题
- 用户配置多个 model 后只能看到当前模型，违背了 `Configured models` 的描述承诺

**背后诉求分析**：社区当前最需要的是**连接韧性与 UI 一致性**两类改进。前者影响生产部署，后者影响配置可观测性，二者都不是"锦上添花"类需求。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 **高** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync 长轮询无重连逻辑，网络/服务中断后静默死亡；systemd 无法自愈 | ❌ **暂无 fix PR**。Issue 自 2026-07-02 出现至今已 23 天，仍未关联修复 |
| 🟡 **中** | [#3294](https://github.com/sipeed/picoclaw/issues/3294) | `/list models` 仅显示当前模型，命令语义与实现不一致 | ❌ 暂无 fix PR，今日新开 |

**稳定性建议**：Issue #3203 的"静默死亡"模式对用户极具迷惑性——进程看似健康但功能已停摆。建议维护者优先处理，可考虑参考其他通道（如 Telegram）的指数退避重连实现。

---

## 6. 功能请求与路线图信号

- **[PR #3193](https://github.com/sipeed/picoclaw/pull/3193) — Added simplex channel type**：新增 simplex 通道。若维护者重新激活，最有可能进入下一版本，因为它代表了 PicoClaw "多通道接入" 主线能力的扩展
- **[PR #339](https://github.com/sipeed/picoclaw/pull/339)（已关闭）— Email/Calendar/System Stats**：包含 Google Calendar、系统统计等工具型能力。被关闭后，部分独立子模块（如 System Stats 概览）仍有拆分重提的可能
- **Issue #3294 中隐含的功能信号**：用户期望 `/list models` 真正具备"列出全部配置"的能力，提示 CLI 端需要更完善的配置可观测性工具

**路线图判断**：simplex 通道（PR #3193）和 Matrix 重连修复（Issue #3203）若同时纳入，将显著提升 PicoClaw 在 IM 矩阵接入与服务韧性两方面的竞争力，应作为下一版本的优先候选。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与用户描述：

- 😟 **生产部署焦虑**（来自 #3203）：用户在 systemd 下部署 PicoClaw 依赖 `Restart=on-failure` 作为兜底，但 Matrix 通道的"假活"状态让该机制失效，反映出**用户对进程级健康检查与通道级健康检查的混淆**
- 😟 **CLI 期望落差**（来自 #3294）：命令名 `/list models` 加 description "Configured models" 暗示了"列出全部"的语义，但实现只显示当前值，用户感到**命名与行为不一致**
- 👍 **使用场景多样性**：从 PR #3205 可看出 PicoClaw 已被部署到 **Raspberry Pi 3 B+ 这类 ARMv7 嵌入式设备**，并配合 9router 这类自托管 OpenAI 兼容网关——这表明项目在**轻量级、自托管、边缘部署**场景中具有吸引力
- 👍 **多模型配置已成常态**：Issue #3294 中用户提到在 `model_list` 中配置了多个模型，验证了多模型路由是核心使用模式

---

## 8. 待处理积压

以下条目需维护者关注，避免长期搁置：

| 类型 | 编号 | 标题 | 开出时间 | 积压天数 |
|---|---|---|---|---|
| 🐛 Bug | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 无重连逻辑 | 2026-07-02 | **23 天** |
| ✨ Feature PR | [#3193](https://github.com/sipeed/picoclaw/pull/3193) | Added simplex channel type（已标 stale） | 2026-06-27 | **29 天** |
| ✨ Feature PR | [#339](https://github.com/sipeed/picoclaw/pull/339) | Email/Calendar/System Stats（已关闭） | 2026-02-17 | **已 5 个月后被关闭** |

**风险提示**：
1. **Issue #3203** 涉及生产可用性且已有 6 条评论讨论，积压 23 天未修复，存在用户流失风险
2. **PR #3193** 虽被标 stale，但仍处 OPEN 状态，建议维护者明确表态（合并、要求变更或关闭），避免贡献者空等
3. **PR #339** 的关闭方式（未说明原因）可能挫伤长期贡献者积极性，建议在关闭时附上原因说明或拆分建议

---

## 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐ | 24h 内无新合入主干的功能 |
| 社区响应 | ⭐⭐ | 旧 Issue 积压超 23 天未修 |
| 稳定性 | ⭐⭐ | 存在静默崩溃类严重 Bug |
| 版本节奏 | ⭐⭐ | 24h 内无发版 |
| 贡献者友好度 | ⭐⭐ | 大型 PR 与 niche PR 均未顺利合并 |

**综合判断**：项目当前处于**功能扩展与缺陷治理的双重瓶颈期**，亟需维护者集中清理积压并释放版本节奏。

---

*报告生成时间：2026-07-26 | 数据来源：PicoClaw GitHub Repository*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-26

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度 + 强安全治理**的双重特征。过去 24 小时内共有 2 条新 Issue 提交、11 条 PR 更新，其中 1 条已关闭（#2748）。两条新报告的 Bug 均在当日即获得对应修复 PR（#3134 → #3135、#3132 → #3133），**响应速度优秀**，反映出维护团队对核心数据流问题的高度敏感。同期，来自核心团队成员 @gavrielc 集中提交了 3 条围绕**镜像验证、挂载安全与卸载清理**的纵深防御 PR，构成今日最主要的治理主题。整体来看，项目处于"密集修复与安全加固"窗口期，未发布新版本。

---

## 2. 版本发布

**无新版本发布**。

过去 24 小时未检测到 Releases 推送。建议关注后续 [#3135](https://github.com/qwibitai/nanoclaw/issues/3135)、[#3133](https://github.com/qwibitai/nanoclaw/issues/3133) 等修复合并后的版本打包动作。

---

## 3. 项目进展

### ✅ 已关闭（1 条）

- **[#2748](https://github.com/qwibitai/nanoclaw/pull/2748) security: harden agent containers (cap-drop, no-new-privileges, pids-limit)** — 作者: @boazdori
  - 由创建到关闭历时约一个半月（2026-06-12 → 2026-07-25），落地了**容器级纵深防御**：
    - 默认采用 `--cap-drop=ALL` 剥离全部 Linux capabilities
    - 启用 `--security-opt no-new-privileges:true` 阻止提权
    - 设置 `--pids-limit 2048` 防止 fork-bomb
  - 支持按 agent 粒度覆盖默认值，灵活可调
  - **意义**：将 NanoClaw 容器隔离基线抬升一个量级，降低逃逸与资源耗尽类风险

### 🟢 待合并的进展亮点

- **核心 Poll 循环一致性修复**：[#3133](https://github.com/qwibitai/nanoclaw/pull/3133) 补齐 `processQuery` 内 follow-up poller 对 `trigger=1` 的守门，消除了两条消息消费路径行为不一致的隐患（对应 [#3132](https://github.com/qwibitai/nanoclaw/issues/3132)）。
- **Host 代理消息镜像**：[#3135](https://github.com/qwibitai/nanoclaw/pull/3135) 将 host 代发的审批卡、拒绝理由、注册通知等纳入 agent 的 `messages_in`，修复 agent 上下文缺失（对应 [#3134](https://github.com/qwibitai/nanoclaw/issues/3134)）。
- **opencode 兼容性回归**：[#3122](https://github.com/qwibitai/nanoclaw/pull/3122) 修复 main 分支兼容、自定义 endpoint transport 与 memory parity 问题。
- **MCP 服务器状态可观测性**：[#3124](https://github.com/qwibitai/nanoclaw/pull/3124) 增加 unavailable MCP 服务器的显式上报。
- **附件路径净化**：[#3127](https://github.com/qwibitai/nanoclaw/pull/3127) 对 inbox 附件路径做安全字符类约束。

**整体推进度**：今日虽无版本发布，但修复类 PR 多为**逻辑一致性 / 数据流完整性 / 安全边界**类刚性需求，落地后对系统可靠性提升显著。

---

## 4. 社区热点

按评论数与互动看，本日**评论密度低**（Issues 平均评论数 0，PR 同样为 0），无显著讨论；但**关注度高的"准热点"**集中在以下三类：

| 主题 | 相关条目 | 关注点 |
|---|---|---|
| **Agent 上下文一致性** | [#3134](https://github.com/qwibitai/nanoclaw/issues/3134) / [#3135](https://github.com/qwibitai/nanoclaw/pull/3135) | 暴露了"用户视角 ≠ agent 视角"的会话真相问题 |
| **Poll 双路径 bug** | [#3132](https://github.com/qwibitai/nanoclaw/issues/3132) / [#3133](https://github.com/qwibitai/nanoclaw/pull/3133) | 触发"accumulate 契约"边界条件讨论 |
| **容器安全纵深防御** | [#2748](https://github.com/qwibitai/nanoclaw/pull/2748)、[#3129](https://github.com/qwibitai/nanoclaw/pull/3129)、[#3130](https://github.com/qwibitai/nanoclaw/pull/3130)、[#3131](https://github.com/qwibitai/nanoclaw/pull/3131) | gavrielc 单日 3 条，构成小型"安全冲刺" |

**诉求分析**：开发者群体最关心的是 **agent 推理可靠性**（消息是否真的进入上下文）和 **容器执行可信边界**（输入验证、路径净化、镜像治理）。这是一个**"AI Agent 工程化深水区"**的典型需求信号。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高优先级（影响主路径数据流）

1. **[#3132](https://github.com/qwibitai/nanoclaw/issues/3132) follow-up poll 绕过 accumulate gate**
   - **影响**：accumulate (`trigger=0`) 消息被注入到进行中的查询，破坏 accumulate 契约语义
   - **位置**：`container/agent-runner/src/poll-loop.ts`
   - **状态**：✅ 已有修复 PR [#3133](https://github.com/qwibitai/nanoclaw/pull/3133)，与外层 batch loop 行为对齐

2. **[#3134](https://github.com/qwibitai/nanoclaw/issues/3134) host 代发消息缺席 agent 上下文**
   - **影响**：审批卡、拒绝理由、注册通知等关键交互信号在 agent 视角"丢失"，影响多轮推理一致性
   - **状态**：✅ 已有修复 PR [#3135](https://github.com/qwibitai/nanoclaw/pull/3135)，将 host 消息镜像进 agent context

### 🟡 中优先级（配置与可观测性）

3. **[#3124](https://github.com/qwibitai/nanoclaw/pull/3124) 未上报 unavailable MCP 服务器**
   - 状态：✅ 修复 PR 待合并
4. **[#3122](https://github.com/qwibitai/nanoclaw/pull/3122) opencode 主线兼容性回归**
   - 状态：✅ 待合并

### 🟢 低优先级（输入净化）

5. **[#3127](https://github.com/qwibitai/nanoclaw/pull/3127) inbox 附件路径字符类净化**
   - 状态：✅ 待合并

**整体评估**：今日 bug 数量可控、修复链路闭环迅速，**未发现 P0 级崩溃或数据丢失问题**。

---

## 6. 功能请求与路线图信号

今日明确的功能新增较少，但仍透露出几个方向：

| PR | 功能类型 | 落地可能性 |
|---|---|---|
| **[#3128](https://github.com/qwibitai/nanoclaw/pull/3128) flight-checkin 容器技能** | Operational/container skill（航班值守） | 中：典型 Skill 扩展，遵循贡献指南 |
| **[#2211](https://github.com/qwibitai/nanoclaw/pull/2211) tool-visibility 技能（实时工具调用预览）** | Feature skill（运行中可视化 PreToolUse/PostToolUse） | **高**：作者已基于生产环境运行 3 个月，本次为 resync，成熟度高 |
| **[#3122](https://github.com/qwibitai/nanoclaw/pull/3122) opencode 适配** | 框架兼容 | 高：作为核心 fix 应优先合入 |

**路线图信号**：从 PR 类型分布看，NanoClaw 的近期演进重心明显落在 **容器安全治理** 与 **多 Agent 运行时兼容** 上。`tool-visibility` 类"可观测性增强"技能若纳入主分支，将显著提升用户体验与调试效率，值得跟踪。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数均为 0，**无直接用户评论可提炼**。但从 Issue 摘要与 PR 描述中可推断以下**隐性痛点**：

1. **"agent 不知道自己说过什么"**（#3134）
   - 痛点：用户面对 host 端的审批/拒绝交互时，agent 后续回复似乎"失忆"，引发信任问题
   - 场景：需要 agent 进行多步权限决策的工作流

2. **"为什么我的 poll 行为不一致"**（#3132）
   - 痛点：开发者排查 accumulate 逻辑时，发现内外两层循环表现不同，调试体验割裂

3. **"容器权限能否更紧"**（#2748 落地）
   - 痛点：合规/安全团队对"默认 capability 全开"敏感，亟需 defense-in-depth 默认值

4. **"MCP 服务挂了没提示"**（#3124）
   - 痛点：MCP 不可用被静默吞掉，排查链路长

**满意度信号**：修复 PR 数量充足、未出现抱怨类 Issue（如响应延迟、文档缺失等），整体社区情绪**中性偏正面**。

---

## 8. 待处理积压

### ⏰ 长期未响应（需维护者关注）

| 条目 | 类型 | 创建日 | 距今 | 状态 |
|---|---|---|---|---|
| **[#2211](https://github.com/qwibitai/nanoclaw/pull/2211) feat: add tool-visibility skill** | PR (Feature/Skill) | 2026-05-03 | ~84 天 | OPEN |
| **[#2748](https://github.com/qwibitai/nanoclaw/pull/2748) security: harden agent containers** | PR (Security) | 2026-06-12 | ~44 天 | ✅ CLOSED 今日 |

### 📌 建议维护者优先处理

1. **#2211**：已沉淀 3 个月生产使用经验，本次 resync 后与主线冲突风险较低，**建议在下一窗口合入并发布版本**。
2. **#3135 + #3133 + #3124 + #3127**：作为一组**核心修复簇**，建议打包合入并打 patch 版本，便于用户一次性升级。
3. **gavrielc 的 3 条安全 PR（#3129/#3130/#3131）**：作为同一治理主题的组成部分，建议**统一评审、统一合并**，避免碎片化。

---

### 📊 项目健康度仪表盘（基于今日数据）

| 维度 | 状态 |
|---|---|
| Bug 响应速度 | 🟢 优秀（同日闭环率 100%） |
| 安全治理节奏 | 🟢 优秀（单日 3 条纵深防御 PR） |
| 版本发布节奏 | 🟡 待观察（今日无 release） |
| 社区互动密度 | 🟡 偏低（评论数普遍为 0） |
| PR 积压风险 | 🟡 关注（#2211 滞留 84 天） |
| 主线功能演进 | 🟢 健康（Skill / 兼容性 / 可观测性多线推进） |

**总评**：今日 NanoClaw 处于**高强度内功修炼期**——安全、稳定性、上下文一致性是三大主轴。短期内值得期待一次集成上述修复与安全的 patch 版本发布。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-07-26 | 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 过去 24 小时保持**高强度开发节奏**，共处理 11 个 Issue（关闭 4 个）和 20 个 PR（合并/关闭 9 个），无新版本发布。今日主线工作围绕两条线索展开：一是 **WebUI 性能与可访问性优化**（路由级代码分包使初始 JS 包体积从 1227 kB 缩减至 377 kB，缩减约 69%），二是 **Reborn 架构重构与可恢复性合规**（mutation 审计、struct ratchet、扩展宿主下沉）。同时 [v1-launch-checklist] 标签下集中爆出一批集成体验问题（Telegram/Slack/GitHub），显示项目正处于发布前的"集成最后冲刺"阶段。整体项目活跃度评级：**高**。

---

## 2. 版本发布

**无新版本发布。**

值得注意的是，PR #5598（[chore: release](https://github.com/nearai/ironclaw/pull/5598)）自 2026-07-03 起仍处于 OPEN 状态，包含：
- `ironclaw_common`: 0.4.2 → 0.5.0（⚠ **API 破坏性变更**）
- `ironclaw_safety`: 0.2.2 → 0.2.3（兼容）
- `ironclaw_skills`: 0.3.0 → 0.4.0（⚠ **API 破坏性变更**）

⚠ 该 PR 已滞留 **23 天**，维护者应优先处理，否则后续依赖其的 PR 将无法合并。

---

## 3. 项目进展

今日共 **9 个 PR 合并/关闭**，重点进展如下：

| PR | 标题 | 影响 |
|---|---|---|
| [#6632](https://github.com/nearai/ironclaw/pull/6632) | **perf(webui): route-level code splitting + tree-shaking** | 初始 JS 体积 1227.16 kB → **376.87 kB**（gzip: 348.55 → 116.32 kB，↓67%），显著优化首屏体验 |
| [#6624](https://github.com/nearai/ironclaw/pull/6624) | fix(webui): 扩展配置模态框键盘焦点陷阱 | 修复可访问性缺陷，对应已关闭的 Issue #6621 |
| [#6627](https://github.com/nearai/ironclaw/pull/6627) | fix(webui): 取消失败时保留 active run 状态 | 修复状态不一致导致"后台运行 + 前端空闲"的隐患 |
| [#6626](https://github.com/nearai/ironclaw/pull/6626) | fix(webui): 过滤器切换时保留自动化列表 | 解决"已完成"过滤器闪烁全屏骨架屏问题 |
| [#6680](https://github.com/nearai/ironclaw/pull/6680) | fix(webui): 跨根级导航保留工作区树状态 | 修复面包屑返回根时工作区树状态丢失 |
| [#6673](https://github.com/nearai/ironclaw/pull/6673) | Add production struct dead-code ratchet | 静态扫描产线结构体中的测试支持字段，新出现将直接 CI 失败 |
| [#6669](https://github.com/nearai/ironclaw/pull/6669) | 扩展宿主所有权移出 composition | 清理 Reborn 架构边界，使职责更清晰 |
| [#6616](https://github.com/nearai/ironclaw/pull/6616) | 收缩 composition 扩展宿主，退役产品工作流 facade | 持续推进 Reborn 模块拆分 |
| [#6670](https://github.com/nearai/ironclaw/pull/6670) | 整合 Reborn 指南，移除 11 个过时计划文档 | 文档治理收口 |

**整体评价**：项目今日向前推进显著，尤其是 WebUI 性能与可访问性闭环了一批过去 24 小时新开的 Issue，**反馈→修复的周转时间小于 24 小时**，健康度良好。

---

## 4. 社区热点

**讨论最活跃 Issue**：
- [#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284) — **6 条评论**，由 serrrfirat 主导。目标是要求模型从其所见的 100% 错误中恢复，要求满足 (a) 运行存活 (b) 模型可见 (c) 含原因 + 成功条件 (d) 模型有处理回合 (e) 无非成功状态。这是项目当前最具战略意义的 Epic。

**最受 👍 Issue**：
- [#6675 Centralize Shared Rust Dependencies with [workspace.dependencies]](https://github.com/nearai/ironclaw/issues/6675) — **👍 2**，社区成员 catusax 提出，希望在已有 Cargo workspace 基础上进一步统一依赖版本与 feature 选择，反映出对 Rust 工程一致性的关注。

**新增 v1-launch-checklist 系列**：
- [#6671 Telegram 配置死循环](https://github.com/nearai/ironclaw/issues/6671)
- [#6668 Slack 连接引导缺口](https://github.com/nearai/ironclaw/issues/6668)
- [#6667 失效 GitHub PAT 死循环](https://github.com/nearai/ironclaw/issues/6667)

三项均来自 thisisjoshford，集中在 v1 发布前的"集成可见性 & 错误反馈"领域。诉求统一指向：**配置路径需要可发现、错误需要被用户感知**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | [#6667 失效 GitHub PAT 循环授权且不报错](https://github.com/nearai/ironclaw/issues/6667) | OPEN | ❌ 暂无 |
| 🟡 中 | [#6671 Telegram 设置入口可达性差](https://github.com/nearai/ironclaw/issues/6671) | OPEN | ❌ 暂无 |
| 🟡 中 | [#6668 Slack 接入 agent 引导缺失](https://github.com/nearai/ironclaw/issues/6668) | OPEN | ❌ 暂无 |
| 🟢 低 | [#6621 扩展配置模态框焦点管理](https://github.com/nearai/ironclaw/issues/6621) | ✅ CLOSED | [#6624](https://github.com/nearai/ironclaw/pull/6624) |
| 🟢 低 | [#6620 失败 run 取消导致前端 idle 状态不一致](https://github.com/nearai/ironclaw/issues/6620) | ✅ CLOSED | [#6627](https://github.com/nearai/ironclaw/pull/6627) |
| 🟢 低 | [#6622 切换"已完成"过滤器闪烁骨架屏](https://github.com/nearai/ironclaw/issues/6622) | ✅ CLOSED | [#6626](https://github.com/nearai/ironclaw/pull/6626) |

**整体评估**：WebUI 一类问题已基本闭环；集成层（Telegram/Slack/GitHub）问题处于"报告集中、待修复"阶段，建议作为 v1 发布的 blocker 优先处理。

---

## 6. 功能请求与路线图信号

**已映射为 EPIC/大粒度 Issue**：
- [#6628 改善 WebUI 包体积与加载性能](https://github.com/nearai/ironclaw/issues/6628) — 配套 [#6632](https://github.com/nearai/ironclaw/pull/6632) PR，**核心需求已落地**。
- [#6284 错误可恢复性 Epic](https://github.com/nearai/ironclaw/issues/6284) — 与 PR [#6677](https://github.com/nearai/ironclaw/pull/6677)（recoverability conformance matrix）配套推进。
- [#6675 集中 Rust 工作区依赖](https://github.com/nearai/ironclaw/issues/6675) — 尚未对应 PR，可纳入下一轮工程化。

**进行中的能力 PR（Open）**：
- [#6678 /model 与 /status 命令管线全链路打通](https://github.com/nearai/ironclaw/pull/6678) — 将 slash 命令声明统一收敛，扩展通过 manifest 启用。
- [#6672 已签名意图 + 每代理密钥生命周期（attested-signing Phase B）](https://github.com/nearai/ironclaw/pull/6672) — Ledger 复兴计划 B 阶段。

**信号**：项目路线图正在从"性能/可访问性修复期"向"产品命令管线 + 安全签名能力建设期"过渡，Slack/Telegram/WebChat 三端一致的命令体验是短期可见目标。

---

## 7. 用户反馈摘要

来自今日活跃 Issue 的真实用户痛点：

1. **配置可达性极差**（#6671, #6668）：用户从最自然的路径（直接问 agent 或点击 extensions 标签）尝试接入 Telegram/Slack 时遭遇"管理员必须配置"的死胡同提示，而真正的入口藏在二级菜单的底部。**典型场景**：新用户首次安装 5 分钟内即放弃。

2. **静默失败，零错误反馈**（#6667）：GitHub 接入时 PAT 无效/过期/被吊销，IronClaw 反复弹出授权窗口但**永不告知用户凭证已失效**。**典型场景**：用户以为网络抖动，反复重试仍无效，最终失去信任。

3. **agent 引导能力不一致**（#6668）：agent 对某些集成能自主搜索安装，但对 Slack 表现出"路径不存在"的认知偏差，与产品实际能力不符。**用户期望**：agent 应能识别"这个集成其实存在，只是需要我引导你去 Settings"。

4. **前端/后端状态不一致**（#6620, 已修复）：用户在网络抖动时取消 run，前端显示空闲而后端继续执行，造成"看上去没事、其实后台在烧 token"。

**共同诉求**：**配置可发现性 + 失败可解释性 + agent 引导一致性** —— 三大主题高度收敛，建议作为 v1 UX 指南针。

---

## 8. 待处理积压

⚠ **维护者请关注**：

| 类型 | 编号 | 滞留天数 | 说明 |
|---|---|---|---|
| PR | [#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) | **23 天** | 含 API 破坏性变更的发布 PR，阻塞后续依赖升级合并 |
| PR | [#6361 dependabot: serialization](https://github.com/nearai/ironclaw/pull/6361) | 6 天 | dependabot 自动化升级 PR |
| PR | [#6428 dependabot: tokio-ecosystem](https://github.com/nearai/ironclaw/pull/6428) | 5 天 | dependabot 自动化升级 PR |
| Issue | [#6284 EPIC error-recoverability](https://github.com/nearai/ironclaw/issues/6284) | 7 天 | 战略级 Epic，已衍生 #6677 PR 但尚未合并 |

**健康度建议**：
- 优先解决 #5598 发布 PR，避免依赖堆积；
- 检查 #6284 Epic 与相关 PR（#6677, #6681）的合并依赖链；
- 集中处理 #6671/#6668/#6667 三项 v1 集成体验 Issue，避免影响发布窗口。

---

## 总结

IronClaw 今日在 **WebUI 性能、可访问性、Reborn 架构治理** 三条主线取得实质推进；测试基础设施（mutation audit、recoverability matrix、dead-code ratchet）建设提速；集成体验类问题集中在 v1-launch-checklist，是发布前最需要关注的窗口。**项目整体处于"重构收口 + 发布冲刺"双重阶段**，需维护者对积压 PR（尤其是 #5598）做出决断。

*报告生成时间：2026-07-26 · 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**：2026-07-26
**项目**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现典型的 **"存量清理日"** 特征：仓库共处理 20 条工单（9 个 Issue + 11 个 PR），其中 19 条已关闭，1 条新开 Issue 处于待处理状态。值得关注的是，绝大多数已关闭 Issue 与 PR 创建于 2026-04-02，距今已逾 3 个月，今日被批量标记为 `stale`（停滞）关闭，意味着项目维护者正在系统性清理长期未推进的积压工单。当日实质性的代码推进主要集中在 **Windows 安装器加固** 与 **Kimi K3 模型适配** 两个方向。整体活跃度处于中等偏低水平，无新版本发布。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

---

## 3. 项目进展

### 3.1 Windows 平台稳定性加固（重要）
- [#2383 fix: windows install root foreign content protection](https://github.com/netease-youdao/LobsterAI/pull/2383) — 增强 Windows 安装目录防外部内容污染防护
- [#2384 fix(installer): harden Windows install and update recovery](https://github.com/netease-youdao/LobsterAI/pull/2384) — 加固 Windows 安装/更新流程的故障恢复能力

两个 PR 同日由 `fisherdaddy` 提交，覆盖 `renderer / build / docs / main` 多个模块，标签包含 `platform: windows`，说明 Windows 端的安装体验是当前阶段的重点打磨方向。

### 3.2 模型生态扩展
- [#2381 feat: support kimi k3](https://github.com/netease-youdao/LobsterAI/pull/2381) — 接入 Kimi K3 模型，覆盖 `renderer / docs / main / openclaw / cowork` 全产品线，体现模型层扩展的统一推进。

### 3.3 长期积压工单集中关闭（非实质代码合并）
下列 PR 均为 4 月份创建、今日因 `stale` 被关闭，未实质合入主干：
- [#1335 feat(scheduledTask): add workdays (Mon-Fri) schedule option](https://github.com/netease-youdao/LobsterAI/pull/1335)
- [#1327 ToolUse 工具调用块批量展开/折叠](https://github.com/netease-youdao/LobsterAI/pull/1327)
- [#1331 会话列表错误状态红点徽标](https://github.com/netease-youdao/LobsterAI/pull/1331)
- [#1333 fix(agent,cowork): i18n attachment label, Escape close, delete guard](https://github.com/netease-youdao/LobsterAI/pull/1333)
- [#1336 feat(mcp): 自定义服务器配置支持 JSON 粘贴导入](https://github.com/netease-youdao/LobsterAI/pull/1336)
- [#1338 会话列表按时间分组展示](https://github.com/netease-youdao/LobsterAI/pull/1338)
- [#1340 用户消息气泡添加发送时间戳](https://github.com/netease-youdao/LobsterAI/pull/1340)
- [#1342 输入框支持 Up/Down 方向键回溯已发送历史](https://github.com/netease-youdao/LobsterAI/pull/1342)

> ⚠️ **健康度警示**：这些 PR 中包含若干细节体验优化（如时间戳、历史回溯、Markdown 导出），因长期未推进而被关闭。若其中含有关键 UX 改进，建议维护者评估是否需要重新开放或拆分处理。

---

## 4. 社区热点

今日 Issue/PR 评论活跃度普遍较低（多数仅 0-2 条评论），整体缺乏真正意义上的"热点讨论"。从话题分布来看，用户关注主要集中在 **Cowork 会话交互体验** 与 **MCP/定时任务等扩展能力** 两大方向：

- **Cowork 体验类**（5 个 Issue）：批量展开/折叠、错误状态徽标、时间分组、时间戳、Markdown 导出、方向键历史
- **MCP/定时任务类**（2 个 Issue）：定时任务通知渠道异常、MCP JSON 导入

社区反馈的共同特征是：用户希望产品对标 ChatGPT、Claude.ai 等主流 AI 助手的成熟交互范式，**说明 LobsterAI 在基础体验的"补课"上仍有较大空间**。

---

## 5. Bug 与稳定性

### 🔴 严重：定时任务通知渠道异常（未修复）
- [#1329 新建的定时任务通知渠道没有选项，只能选不通知](https://github.com/netease-youdao/LobsterAI/issues/1329)
  - **严重程度**：高（功能直接不可用）
  - **版本**：v2026.4.1
  - **当前状态**：今日被标记为 `stale` 关闭，**未见对应的修复 PR**，用户问题实质悬而未决
  - **建议**：维护者应主动复现此 bug，无论 Issue 状态如何都应跟踪修复

### 🟡 中等：对话框不支持添加文件夹
- [#2385 对话框添加文件只能添加文件，不能添加文件夹](https://github.com/netease-youdao/LobsterAI/issues/2385)
  - **严重程度**：中（用户体验受限）
  - **当前状态**：今日新开，仍 OPEN，已有 1 条评论
  - **诉求**：用户期望能像其他 Agent 产品一样通过 `@文件夹` 引用目录

### 🟢 已修复：Windows 安装器
- [#2383](https://github.com/netease-youdao/LobsterAI/pull/2383)、[#2384](https://github.com/netease-youdao/LobsterAI/pull/2384) 已关闭，Windows 安装目录防护与恢复逻辑已加固

---

## 6. 功能请求与路线图信号

今日关闭的 8 个 Issue 全部为功能增强类请求，反映用户对 **Cowork 会话体验** 与 **检索/导出能力** 的高优先级诉求：

| 需求主题 | Issue | 关联 PR | 落地状态 |
|---|---|---|---|
| ToolUse 批量展开/折叠 | [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | PR 已 stale 关闭 |
| 错误状态红点徽标 | [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | [#1331](https://github.com/netease-youdao/LobsterAI/pull/1331) | PR 已 stale 关闭 |
| 会话列表按时间分组 | [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337) | [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338) | PR 已 stale 关闭 |
| 消息气泡时间戳 | [#1339](https://github.com/netease-youdao/LobsterAI/issues/1339) | [#1340](https://github.com/netease-youdao/LobsterAI/pull/1340) | PR 已 stale 关闭 |
| 输入框方向键历史回溯 | [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341) | [#1342](https://github.com/netease-youdao/LobsterAI/pull/1342) | PR 已 stale 关闭 |
| 搜索支持消息内容全文检索 | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | — | 尚无 PR |
| 会话导出为 Markdown | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | — | 尚无 PR |
| 文件夹引用 | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | — | 尚无 PR |

**路线图判断**：这些功能集中在"会话可见性、可控性、可导出性"三个维度，属于 AI 助手产品的 **核心交互体验层**。若维护者希望提升产品竞争力，建议优先合并 #1338（时间分组）和 #1340（时间戳），二者改动量小、用户感知强。

---

## 7. 用户反馈摘要

基于现有 Issue 评论（多数仅 2 条），可提炼如下真实痛点：

1. **会话管理负担重**：当会话数量增多后，侧边栏缺乏时间维度组织，用户难以快速定位近期对话 [#1337](https://github.com/netease-youdao/LobsterAI/issues/1337)
2. **错误识别困难**：执行失败的会话无视觉提示，必须逐个打开排查 [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330)
3. **重复输入成本高**：无法用键盘快速复用历史指令 [#1341](https://github.com/netease-youdao/LobsterAI/issues/1341)
4. **导出能力单一**：只能截图保存对话，无法进行二次文本编辑 [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345)
5. **搜索覆盖不足**：仅支持标题搜索，回忆关键词定位会话困难 [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343)
6. **定时任务通知失效（功能 BUG）**：新建定时任务时通知渠道下拉为空 [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329)
7. **目录引用缺失**：无法像其他 Agent 那样 `@文件夹` [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385)

**总体满意度信号**：功能可用性尚可，但用户体验细节仍处于"追赶主流产品"的阶段。

---

## 8. 待处理积压

| 类型 | 编号 | 创建日期 | 当前状态 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | 2026-04-02 | 已 stale 关闭（**未修复**） | 🔴 高 |
| ✨ Feature | [#1343](https://github.com/netease-youdao/LobsterAI/issues/1343) | 2026-04-02 | 已 stale 关闭（无 PR） | 🟡 中 |
| ✨ Feature | [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) | 2026-04-02 | 已 stale 关闭（无 PR） | 🟡 中 |
| ✨ Feature | [#2385](https://github.com/netease-youdao/LobsterAI/issues/2385) | 2026-07-25 | OPEN | 🟢 新 |

**特别提醒维护者**：
- ⚠️ [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) 是一个 **功能性 Bug**（通知渠道不可用），不应与功能请求混同处理，建议 **重新打开并安排修复**。
- 4 月份提交的 8 个 PR 集中 stale 关闭前，是否已与贡献者充分沟通？部分 PR 改动已完成度较高（如 [#1338](https://github.com/netease-youdao/LobsterAI/pull/1338)、[#1340](https://github.com/netease-youdao/LobsterAI/pull/1340)），建议评估是否值得重新激活以避免贡献者流失。

---

## 附录：项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 今日 Issue 处理量 | 9 | 🟢 正常 |
| 今日 PR 处理量 | 11 | 🟢 正常 |
| 新版本发布 | 0 | 🟡 无 |
| 待合并 PR | 0 | 🟡 偏低 |
| 实质功能合入 | 2 | 🟡 偏低 |
| 新开 Issue 响应 | 1 条（#2385 未被认领） | 🔴 关注 |
| 长期积压清理 | 19 条 | 🟢 积极信号 |

**整体判断**：项目今日完成了有价值的积压清理与 Windows 安装器加固工作，但 **实质性功能合入节奏偏慢**，且存在将"功能性 Bug"误归类为"stale 功能请求"关闭的治理风险。建议加强 Issue 分类与优先级管理流程。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-26

---

## 1. 今日速览

Moltis 今日处于 **"纯 PR 推进日"** 状态：过去 24 小时内 **0 个 Issue 活动、0 个新 Release、5 个 PR 更新**（3 OPEN / 2 CLOSED）。活跃度偏低但聚焦，全部贡献均来自两位开发者（penso、demyanrogozhin），主题高度集中在 **Slack 集成增强、Nostr/Buzz 通道支持、记忆后端扩展** 三大方向。今日合并/关闭的 PR 均为小颗粒度改进（文档规则 + Slack 反应确认），说明项目当前处于 **稳态迭代期**，无重大争议或阻塞。整体健康度良好，PR 流转节奏正常。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时未触发任何 release/tag，建议关注主干 PR 的合并进度，以判断下一版本（推测为功能累加型 minor 版本）是否临近。

---

## 3. 项目进展

### ✅ 已关闭/合并的 PR（2 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#1165](https://github.com/moltis-org/moltis/pull/1165) | `feat(slack): acknowledge messages with reactions and add reaction triggers` | **功能落地。** 解决 Slack 机器人无法显示 typing 指示器的痛点，新增"反应确认"机制；同时修复了线程回复中"消息错发"（wrong-message）的已确认 Bug。灵感来自 `hermes-agent`。 |
| [#1167](https://github.com/moltis-org/moltis/pull/1167) | `docs: forbid Claude session URLs in commits and PRs` | **治理改进。** 在 `CLAUDE.md` 的 git-workflow 规则中新增禁止项，与现有的"禁止 `Co-Authored-By` trailer"并列，明确拦截 Claude Session URL/AI 助手会话链接外泄。纯文档变更，无代码影响。 |

### 📊 推进评估

- **Slack 通道可靠性**：通过 #1165 → #1166 的两步推进，从"能确认收到"升级到"能在排队/取消/投递失败等真实条件下正确反馈"，链路成熟度显著提升。
- **仓库规范**：#1167 填补了 AI 辅助开发场景下的元数据泄露风险（commit/PR 中嵌入外部会话链接）。
- **整体进度判断**：今日为 **功能性 + 规范性** 双轮驱动，代码层面贡献中等，但每项变更都直接对应生产环境风险点，质量胜于数量。

---

## 4. 社区热点

> ⚠️ 数据说明：所有 PR 的 `comment` 字段均为 `undefined`，`👍` 反应均为 0，无法进行严格的"评论/反应"热度排序。以下按 **更新频率 + 创建时间新近度 + 主题关注价值** 进行加权排序。

| 排名 | PR | 热度归因 |
|---|---|---|
| 🥇 | [#1168](https://github.com/moltis-org/moltis/pull/1168) — `feat(nostr): add NIP-29 group chat support for Buzz channels` | 涉及 Block 公司 Buzz 工作区生态接入（Nostr 中继 + NIP-42 鉴权 + NIP-29 群聊），**战略级集成**，是 `moltis-nostr` 历史上首次扩展协议覆盖范围。 |
| 🥈 | [#1166](https://github.com/moltis-org/moltis/pull/1166) — `feat(slack): per-message acknowledgment reactions, phases, reconnect supervision, and Block Kit` | 在昨日 #1165 基础上叠加：消息级确认反应、阶段反馈、连接重连监管、Block Kit 渲染。**工程量最大**的开放 PR。 |
| 🥉 | [#1158](https://github.com/moltis-org/moltis/pull/1158) — `feat(memory): add zvec vector database memory backend` | 引入 Zvec（搭配 redb）作为向量记忆后端，并以 cargo feature flag `zvec`（默认 full 启用）形式发布，扩展记忆子系统可选性。 |

**诉求分析**：
- 头部三 PR 均指向 **多通道（multi-channel）+ 持久化记忆** 这两个 AI Agent 项目的核心支柱；
- Buzz/Nostr 集成意味着 Moltis 正试图从"个人助手"向"团队 Agent 成员"演进（呼应 Buzz 定位"AI agents and humans are equal members"）。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 链接 |
|---|---|---|---|
| 🟡 中 | **Slack 线程回复消息错发 Bug**（已确认） | ✅ 已在 #1165 中修复 | [#1165](https://github.com/moltis-org/moltis/pull/1165) |
| 🟢 低 | **缺失 typing indicator 反馈通道** | ✅ 通过反应确认机制缓解 | [#1165](https://github.com/moltis-org/moltis/pull/1165) / [#1166](https://github.com/moltis-org/moltis/pull/1166) |
| 🟢 低 | **commit/PR 中 AI 会话链接泄露**（规范缺失） | ✅ 已在 #1167 中以规则形式补齐 | [#1167](https://github.com/moltis-org/moltis/pull/1167) |

**评估**：今日无新增 Bug 报告；现存问题均在 PR 中得到闭环修复或缓解。**稳定性信号偏正向**。

---

## 6. 功能请求与路线图信号

虽然没有独立的"功能请求"Issue，但当前 OPEN PR 已勾勒出下一阶段路线图雏形：

| 候选功能 | 路线图归属概率 | 判断依据 |
|---|---|---|
| **Nostr NIP-29 + Buzz 工作区接入** | 🟢 高 | 协议层面基础设施，扩展 `moltis-nostr` 已声明能力边界 |
| **Slack 阶段反馈 / Block Kit / 重连监管** | 🟢 高 | 是 #1165 的自然延续，PR 已建立 |
| **Zvec 向量后端（feature-gated）** | 🟡 中 | 作者明示"Just as experiment I vibe-coded"，默认在 `full` feature 启用，建议关注 review 反馈 |
| **AI session 链接规范** | ✅ 已落地 | #1167 已关闭 |

**建议关注点**：
- #1168（Nostr/Buzz）一旦合并，将是 **协议覆盖范围首次跨越"个人 DM"边界**，对营销与生态合作具有放大效应；
- #1158（zvec）若保持默认启用，会对最终二进制体积和依赖图产生显著影响，review 时应关注构建时长与 cross-compile 兼容性。

---

## 7. 用户反馈摘要

> ⚠️ 数据局限：今日无 Issue 评论数据可提取（所有 PR `comment: undefined`）。本节基于 **PR 描述中作者陈述的痛点** 进行还原（属于间接反馈信号，非直接用户原声）。

**间接痛点提炼**：

1. **"AI 接收消息但用户无感"** —— Slack 无 typing 指示器，#1165/#1166 的反复迭代说明这是真实场景下的高频困扰。
2. **"消息错发到错误线程"** —— #1165 描述中提到"confirmed wrong-message bug"，表明至少有一例被用户上报过。
3. **"AI 工作流产物（commit 链接）外泄到协作平台"** —— #1167 的存在说明团队曾观察到此类 PR/提交，需要以规则形式封堵。
4. **"记忆后端选择单一"** —— #1158 体现了用户对"可替换、可实验"的向量存储方案的偏好，与社区常见的"想换 Qdrant / pgvector / SQLite-vec"诉求一致。

**满意度信号**：无负面评论、无 LGTM 反对票（👍 虽为 0，但状态为 OPEN/CLOSED 而非 DRAFT，反映流程正常）。

---

## 8. 待处理积压

| 项目 | 状态 | 积压风险 | 链接 |
|---|---|---|---|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) `feat(memory): add zvec backend` | OPEN，已 7+ 天 | 🟡 中 | 作者自述为实验性 vibe-coding，且默认在 `full` feature 启用，**长期悬而未决可能阻塞依赖图收敛**，建议维护者明确表态（接受 / 改为 opt-in / 拆分） |
| [#1166](https://github.com/moltis-org/moltis/pull/1166) Slack 反应 + 阶段 + Block Kit | OPEN，1 天 | 🟢 低 | 新近提交，节奏正常 |
| [#1168](https://github.com/moltis-org/moltis/pull/1168) NIP-29 Buzz 集成 | OPEN，1 天 | 🟢 低 | 新近提交，含清晰摘要 |

**提醒维护者**：
- **#1158 是当前积压最久的开放 PR**（7 天前创建），且其依赖（zvec crate）的稳定性、生产可用性尚未在 PR 描述中论证，建议尽快 review 并给出结论；
- 同时建议检查是否存在 **长期未回复的 Issue 列表**（今日数据中无活跃 Issue，但仓库整体 Issue 队列健康度需另行核查）。

---

## 📌 附录：今日数据快照

```
Issues 活动:    0 新开 / 0 活跃 / 0 关闭
PR 活动:        5 更新 → 3 OPEN + 2 CLOSED
新 Releases:    0
贡献者:         penso (3), demyanrogozhin (1)
主要方向:       Slack (2 PR), Nostr/Buzz (1), Memory (1), 治理 (1)
```

**整体健康度评级**：🟢 **稳健** —— 无新 Bug、无争议、无积压风险；活动量偏低但每项变更都有明确业务价值，符合成熟项目的稳态迭代节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-07-26（数据截至过去 24 小时）**

---

## 1. 今日速览

CoPaw（agentscope-ai/QwenPaw）今日整体活跃度中等偏低，共产生 7 条新议题和 8 条 PR 交互，但**无新版本发布**。Issues 端出现明显的"重复报告"现象——同一 MCP transport 兼容性问题由 `@JohnyLe` 在 #6468/#6469/#6470 三个工单中重复提交，提示社区分诊机制需要加强。PR 端有两个 reranker 相关 PR（#5691、#5692）被关闭，但功能被 #6399（新 PR）继承，属于健康的迭代闭环。整体来看，项目处于"修复 + 重构"并行的稳态期，未出现重大回归。

---

## 2. 版本发布

无新版本发布。当前线上版本仍为 **QwenPaw v2.0.1**，但该版本已被多个 Bug 报告标记（详见第 5 节），建议维护者评估是否需要快速迭代 2.0.2 补丁版本。

---

## 3. 项目进展

今日推进的关键 PR（已关闭/合并）：

| PR  | 标题 | 状态 | 影响 |
|-----|------|------|------|
| [#5691](https://github.com/agentscope-ai/QwenPaw/pull/5691) | feat(console): add reranker config UI for reme0.4 memory search | CLOSED | console 端 reranker UI（v1）被关闭 |
| [#5692](https://github.com/agentscope-ai/QwenPaw/pull/5692) | feat(memory): add reranker for search results on reme0.4 | CLOSED | memory 后端 reranker（v1）被关闭 |

**进展分析**：两条 PR 的关闭并非回退，而是**被新 PR #6399 取代**——后者在 `ReMeLightMemoryCard` 中重构了 reranker UI 面板，将后端（#5692）和前端（#5691）合并为单一迭代入口。整体是内存/检索系统向 reme0.4 演进的正常推进。

**今日新增且值得关注的开放 PR**：

- [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) **fix(history): harden SQLite persistence, backup, and restore** — 直击 Scroll 模块会话历史的可靠性（并发写、WAL 生命周期、schema 兼容性），对长期数据安全意义重大。
- [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) **feat(ci): deploy the website from the release orchestrator (stable/post only)** — 修复了在统一 release orchestrator 流程下官网 `qwenpaw.agentscope.io` 不再被自动刷新的 CI 缺陷。
- [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) **feat(browser): unified browser — one SDK, any backend** — 控制面/执行面分离的统一浏览器 SDK 改造，是较大的架构性变更。
- [#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462) **docs(sandbox): clarify native Windows sandbox support** — 文档纠错，明确 QwenPaw 已支持 AppContainer/restricted-token 等原生 Windows 沙箱。

---

## 4. 社区热点

**讨论最活跃**（按评论数排序）：

1. [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) — **QwenPaw 2.0.1 在 Edge+Wayland 下单标签高 CPU 占用**（2 条评论）  
   - 用户 `dayofyear` 报告在 Linux Wayland + Edge 浏览器跨设备访问 QwenPaw 首页时，CPU 持续走高，风扇加速。怀疑为大结果集渲染或 WebSocket 推送触发。  
   - **诉求**：跨平台 + 远程访问场景下的前端性能保障。

**值得关注的重复/高频议题**：

- [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468)、[#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469)、[#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470) — **同一 MCP 驱动 Bug 由 `JohnyLe` 多次提交**  
  - 同一日三次开单，反映用户对问题严重性的强调，但**对维护者构成噪音**。建议维护者及时合并/关闭重复单并锁定为 canonical issue。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 阻塞核心功能

**[#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) / [#6469](https://github.com/agentscope-ai/QwenPaw/issues/6469) / [#6470](https://github.com/agentscope-ai/QwenPaw/issues/6470)** — **MCP driver 忽略 transport config，硬编码 SSE client**  
- **现象**：YAML 中配置 `transport: streamable_http` 无效，`_setup_transport` 直接调用 `mcp.client.sse_client`，导致所有 Streamable HTTP 协议的 MCP 服务器（如 Jin10 MCP）连接失败，工具无法加载。  
- **根因**：`mcp_stateful_client.py` ~第 800 行 `sse_client` 硬编码。  
- **影响**：所有使用 Streamable HTTP MCP 的用户（具体如金融数据 Jin10）完全不可用。  
- **修复 PR**：❌ 暂无。强烈建议尽快排期。

**[#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464)** — **平台部署 QwenPaw v2.0.1 无法连接任何模型**  
- **现象**：在 AgentScope Platform 部署的 QwenPaw v2.0.1 测试所有模型均返回 "连接测试失败：API error when connecting to model 'xxx'"，聊天界面模型下拉列表为空（Pro 和 Free 两档都无模型）。  
- **影响**：新部署/升级用户完全无法使用聊天功能。  
- **修复 PR**：❌ 暂无。

### 🟠 P1 — 性能/可靠性

**[#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460)** — **Edge + Wayland 下首页长时间高 CPU 占用**  
- 大结果集渲染 + WebSocket 推送触发；非本地跨设备访问时尤为明显。  
- 用户体验受影响（风扇噪音、机器发烫）。  
- **修复 PR**：❌ 暂无。

### 🟢 P2 — 文档/使用问题

**[#6467](https://github.com/agentscope-ai/QwenPaw/issues/6467)** — **qwenpaw.agentscope.io 节点搭建失败**  
- 新手用户按教程部署节点失败，访问返回 -1；且 AI 生成的伪装主页无法打开。  
- 更偏向**用户问题**而非软件 Bug，但暴露了部署文档/教程的可发现性不足。

---

## 6. 功能请求与路线图信号

**[#6466](https://github.com/agentscope-ai/QwenPaw/issues/6466)** — **Agent 输出可点击文件/文件夹路径按钮**  
- **提出者**：`Ra-M497`  
- **诉求**：当 Agent 返回 `C:\Users\` 等路径时，聊天界面应渲染为可点击按钮，直接打开资源管理器。  
- **信号**：体现用户对 Agent 与本地 OS 深度集成体验的期待。  
- **纳入下一版本可能性**：⭐⭐⭐  
  - 实现成本低（前端 + system shell 唤起），且与"QwenPaw Desktop"定位高度契合，适合作为桌面端小而美的体验增强功能。

**[#6462](https://github.com/agentscope-ai/QwenPaw/pull/6462)** — **文档澄清原生 Windows 沙箱支持**  
- 已是开放 PR，落地在即。反映官方正推动"Windows 原生沙箱（AppContainer / restricted-token）"作为 WSL2 之外的替代方案，扩展部署友好性。

---

## 7. 用户反馈摘要

| 痛点 | 体现位置 | 用户感受 |
|------|----------|----------|
| **核心功能不可用** | #6464、#6468/#6469/#6470 | 升级到 2.0.1 后模型连接/工具加载失败，用户对生产可用性产生疑虑 |
| **跨平台性能** | #6460 | 远程访问 + Wayland 下体验差，影响 Linux 桌面用户 |
| **新手引导薄弱** | #6467 | 小白用户按视频教程操作失败，问题无人响应（"去群里咨询也没人理我"） |
| **Agent 输出交互弱** | #6466 | 期望 Agent 结果能直接联动系统资源（文件/文件夹） |
| **社区分诊噪音** | #6468/#6469/#6470 重复 | 同一 Bug 重复开单，反映用户对响应速度的焦虑 |

---

## 8. 待处理积压提醒

维护者本周建议优先关注以下长期未响应或影响面广的工单/评审：

| 编号 | 类型 | 状态 | 建议动作 |
|------|------|------|----------|
| [#6464](https://github.com/agentscope-ai/QwenPaw/issues/6464) | Bug | 新开 1 天 | P0 阻塞 — 24h 内确认根因 |
| [#6468](https://github.com/agentscope-ai/QwenPaw/issues/6468) / #6469 / #6470 | Bug | 新开 | P0 阻塞 — 合并重复单，指派 owner |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Bug | 新开 1 天 | 复现 + 添加前端性能 baseline |
| [#6459](https://github.com/agentscope-ai/QwenPaw/pull/6459) | PR | 等待评审 | 涉及 SQLite 持久化安全，建议核心维护者优先 review |
| [#6276](https://github.com/agentscope-ai/QwenPaw/pull/6276) | PR | 开放 6 天 | 较大架构变更，需要架构评审 |
| [#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) | PR | first-time-contributor | 等待 CI 跑通 + 维护者 review |
| [#6463](https://github.com/agentscope-ai/QwenPaw/pull/6463) | PR | 阻塞官网部署 | 影响 qwenpaw.agentscope.io 文档发布流程 — 高优先级 |

---

### 📊 项目健康度简评

- **活跃度**：⭐⭐⭐☆☆（中等，单日 7 issues + 8 PR，无版本）
- **稳定性**：⭐⭐☆☆☆（P0 阻塞 Bug ≥ 2 个，建议 2.0.2 补丁）
- **社区健康**：⭐⭐☆☆☆（重复单 + 新手响应缺失，需要 triage 优化）
- **架构演进**：⭐⭐⭐⭐☆（reranker UI 闭环、统一浏览器 SDK、SQLite 硬化，方向清晰）

> 📌 **总体建议**：下一周的核心 KPI 应锁定为"合并 MCP transport fix + 模型连接 Bug 修复 → 发布 2.0.2"，并在 PR/Issue 模板中加入"是否重复提交"自检提示，以降低社区分诊成本。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-26

---

## 1. 今日速览

ZeroClaw 今日呈现 **"高频活跃 + 重点聚焦"** 的工作节奏：过去 24 小时共更新 19 条 Issue、50 条 PR，但仅 3 条 Issue、2 条 PR 闭环，**PR 待合并比 (48/50 = 96%) 处于高位**，需关注维护者审阅负载。安全/稳定性类问题在 Issue 中占比突出，其中 WhatsApp Web 在 `mode=business` 下的"配置锁死但行为全开"问题（[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)）被定级为 S1 级安全风险。**v0.8.4 维护列车**([#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357))正在按 7 月 31 日目标推进，发布准备 PR [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376) 已就绪。整体项目健康度处于"高强度收尾 + 多线并进"阶段。

---

## 2. 版本发布

**今日无新版本发布。**

下一里程碑 **v0.8.4（目标 2026-07-31）** 相关工作正在收口：
- 发布准备 PR [#9376](https://github.com/zeroclaw-labs/zeroclaw/pull/9376)（@JordanTheJet）已完成 crates.io 发布配置、Changelog、根包重命名（`zeroclawlabs` → `zeroclaw`）等工作。
- 跟踪器 [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) 已标记为 v0.8.4 维护列车的状态看板。

---

## 3. 项目进展（今日合并/关闭）

今日共有 3 条 Issue、2 条 PR 关闭，进展集中在**测试稳定性修复、安全补丁、CI 依赖收敛**三个方向：

| 类型 | 编号 | 标题 | 关键价值 |
|---|---|---|---|
| 🔒 安全 | [PR #9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) | fix(web/deps): resolve npm audit advisories | 关闭 3 项高危 npm 漏洞（`@redocly/openapi-core`、`js-yaml`、`brace-expansion`），同步关闭上游 [Issue #9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) |
| 🛠️ 测试 | [Issue #8962](https://github.com/zeroclaw-labs/zeroclaw/issues/8962) | zeroclaw-runtime tests flake under parallel execution | `model_switch` / `turn_streamed` 测试簇间歇失败问题结案 |
| 🛠️ 配置 | [Issue #9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) | nested set_prop masks invalid values | `Config::set_prop` 的错误归因从路径错误修正为值错误 |
| 🧩 插件 | [PR #9123](https://github.com/zeroclaw-labs/zeroclaw/pull/9123) | fix(plugins): host-stamp channel plugin routes | 引入 `PluginChannelEndpoint`，将路由类型与绑定别名解耦 |

> **推进评价**：单日闭环绝对量偏小，但完成质量较高——三条闭环都与 v0.8.4 准入门槛直接相关。值得注意 [#9371](https://github.com/zeroclaw-labs/zeroclaw/pull/9371)（并行化 runtime 压力门控）和 [#9115](https://github.com/zeroclaw-labs/zeroclaw/pull/9115)（Blacksmith 加速编译）两条 CI 改进 PR 一旦合并，将显著提升后续发版效率。

---

## 4. 社区热点

按 Issue 评论数与关注度综合排序：

| 排名 | 编号 | 标题 | 评论 | 关注点 |
|---|---|---|---|---|
| 🥇 | [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web 在 `mode=business` 下回应所有 DM 和群组 | **6** | **安全误配置**——操作者以为已设白名单，agent 却公开回复一切 |
| 🥈 | [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | "Everything is a plugin" — Integrations → 统一插件目录 RFC | **5** | 长期架构演进路线 |
| 🥉 | [#9285](https://github.com/zeroclaw-labs/zeroclaw/issues/9285) | nested set_prop masks invalid values | **3** | 配置 API 错误归因 |
| 4 | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | verifiable-intent 不验证凭证链 | **3** | 加密凭证验证存在信任根缺失 |
| 5 | [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | cargo test -p zeroclaw-runtime 19/20 失败 | **2** | master 分支严重测试退化 |
| 6 | [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | 工作区级 `forbid(unsafe_code)` | **2** | 安全工程化 |

**背后诉求分析**：
- **"配置即代码"的信任危机** 是当下最强信号：[#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) 与 [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) 同属"配置层与运行时层语义不一致导致误信任"，反映社区对 **声明式安全配置的可观察性与可验证性** 需求迫切。
- **架构统一愿望**：[#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) 5 条评论说明社区认可"插件化大一统"方向，期望减少 channel/provider/integration 三套机制的认知负担。

---

## 5. Bug 与稳定性

### 🔴 S1（关键安全风险）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) | WhatsApp Web 在 `business` 模式下无视 `dm_policy`/`group_policy`，空 `allowed_groups` 等于全开 | **[#9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354)** 已开（待合） |

### 🟠 S2（行为退化）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) | `cargo test -p zeroclaw-runtime --lib` 在 master 19/20 失败，全局互斥中毒 | 待开 |
| [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | verifiable-intent 评估约束时不验证凭证链 | 待开 |
| [#9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) | peer-agent delivery 缺失成本跟踪上下文，预算失效 | 待开（与 [#9349](https://github.com/zeroclaw-labs/zeroclaw/pull/9349) 互补） |
| [#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) | 本地化下配置元数据仍为英文 | 待开 |

### 🟡 S3（轻微）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#9374](https://github.com/zeroclaw-labs/zeroclaw/issues/9374) | CLI `run()` 在 12 个退出路径泄漏 `AgentStart` | 待开 |
| [#9366](https://github.com/zeroclaw-labs/zeroclaw/issues/9366) | WhatsApp Web `approval_timeout_secs` 接受但永不读取 | 待开（已从 #9348 拆出） |

### 🟢 P1（CI/构建）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) | CLI 创建的 cron 任务 `delivery.mode` 硬编码为 `none` | 待开 |
| [#9239](https://github.com/zeroclaw-labs/zeroclaw/issues/9239) | `config patch --json` 两条失败路径泄漏明文错误 | 待开 |

**总体判断**：今日 5 个 S 级 Bug 中仅 1 个有对应 Fix PR 进入待合并状态（[#9354](https://github.com/zeroclaw-labs/zeroclaw/pull/9354)），**Fix 覆盖率为 20%**，处于偏低水平。建议维护者优先攻克 [#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)（master 红）和 [#9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348)（安全）这两条 v0.8.4 阻塞项。

---

## 6. 功能请求与路线图信号

### 强信号（已有 PR 推进）
- **OpenAI Chat Completions 协议网关** ([PR #8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486), @REL-mame) — 补齐与 LangChain/Continue.dev/Aider 的兼容性，关联 [#8550](https://github.com/zeroclaw-labs/zeroclaw/issues/8550)。
- **Telegram `multi_message` 流模式** ([PR #8561](https://github.com/zeroclaw-labs/zeroclaw/pull/8561), @metalmon) — 与 Discord/Matrix 对齐，配套 issue [#9359](https://github.com/zeroclaw-labs/zeroclaw/issues/9359) 修正 per-draft pacing 问题。
- **Matrix 单消息进度草稿** ([PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443), @vrurg)。
- **SandboxPolicy 配置模型** ([PR #7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821), @rarean) — 与 [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 关联，构建可分层的 OS 沙箱策略。
- **插件共享 egress 策略基座** ([PR #9137](https://github.com/zeroclaw-labs/zeroclaw/pull/9137), @JordanTheJet) — 跨 HTTP/WS/TCP/TLS/STARTTLS 统一授权路径。

### 中等信号（RFC/规划阶段）
- **"Everything is a plugin" 统一插件目录** ([#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489)) — 长周期架构演进。
- **AI 辅助 PR 预审与重审 RFC** ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330), @NiuBlibing) — 利用现有 CI 结果做 AI 审稿。

### 新引入（可能进入 v0.8.4 之后）
- **Atlas Cloud 模型 provider** ([PR #9200](https://github.com/zeroclaw-labs/zeroclaw/pull/9200)) — 增补 OpenAI 兼容家族。
- **Cron `shell_output_format` 原始 stdout** ([PR #8438](https://github.com/zeroclaw-labs/zeroclaw/pull/8438)) — 操作员可绕过 envelope 取原始输出。
- **中文(zh)完整 UI 翻译** ([PR #9377](https://github.com/zeroclaw-labs/zeroclaw/pull/9377)) — i18n 补齐。
- **Provider 上下文重试保留 native tool pairs** ([PR #9372](https://github.com/zeroclaw-labs/zeroclaw/pull/9372)) — 修复跨上下文溢出的工具调用配对。

---

## 7. 用户反馈摘要

从今日 Issue 评论中提炼的真实声音：

> **痛点 1：配置信任鸿沟**
> [@belumume 在 #9348](https://github.com/zeroclaw-labs/zeroclaw/issues/9348) 中指出——"一个看起来严格锁定的配置却表现为完全开放，操作员误以为配置了 allowlist，实则 agent 在回复所有入站消息，包括无关群聊。" — 这是 **配置即文档** 的承诺失守。

> **痛点 2：测试可靠性下降**
> [@AngryPacifist 在 #9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357) 报告 master 分支 `cargo test` 19/20 失败，并指出"一个 flaky assertion 中毒了全局互斥，把后续测试一并拖下水" — 影响贡献者本地开发体验。

> **痛点 3：可观测性盲区**
> [@alexandme 在 #9373](https://github.com/zeroclaw-labs/zeroclaw/issues/9373) 与 [#9349 PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9349) 中反映 `AgentEnd.cost_usd` 在 5 个生产发射点硬编码为 `None`，且 peer-agent delivery 路径完全无成本上下文 — **预算执行无可观察证据**。

> **痛点 4：cron 静默丢弃**
> [@AngryPacifist 在 #9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340) 描述"CLI 创建的 cron 任务永远 `delivery.mode = none`，运行记录为 `ok`，但结果去了哪里没有任何提示" — **静默失败比显式失败更危险**。

> **痛点 5：本地化不一致**
> [@Audacity88 在 #9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363) 指出非英语 locale 下 ZeroCode 与 Web 面板的"配置元数据仍为英文" — i18

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*