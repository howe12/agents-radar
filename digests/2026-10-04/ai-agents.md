# OpenClaw 生态日报 2026-10-04

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-04 03:46 UTC

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

# OpenClaw 项目日报 · 2026-10-04

## 1. 今日速览

OpenClaw 仓库过去 24 小时呈现**高活跃、高积压**状态：Issues 更新 500 条（新开/活跃 395、已关闭 105），PR 更新 500 条（待合并 290、已合并/关闭 210），但**无新版本发布**。讨论焦点高度集中在 **SQLite 数据库膨胀/WAL 管理**、**Gateway 内存与关闭路径稳定性**、**9.3→9.6 系列更新/升级可靠性**以及**子代理（subagent）结算重试风暴**四大方向。P0/P1 级阻塞类 Issue 数量众多，多个长期 Issue（#119720、#97616、#118885、#119009、#81182）持续保持活跃，反映出当前代码主线在持久化层与主线程架构上仍存在未根治的结构性问题。整体而言，项目处于"密集重构+集中修 Bug"窗口期，但**缺乏 Release 节奏信号**，用户侧稳定性诉求与上游修复节奏之间存在明显落差。

---

## 2. 版本发布

**今日无新版本发布**。

最近相关版本号在 Issue 中被引用包括：2026.9.2 / 2026.9.3 / 2026.9.4 / 2026.9.5 / 2026.9.6 / 2026.9.7 / 2026.9.8（2026-10-03 发布），以及即将到来的 **2026.9.9 恢复分支**（在 #164724 中提及，但尚未发布）。建议关注维护者对 9.9 的 backport 策略与 doctor 修复（#160671、#163803、#151295 等已在 main 分支但未进入 9.8）。

---

## 3. 项目进展

今日合并/关闭的 PR 中，**性能与主线程解耦**类工作占据了显著比重：

- **[#164745](https://github.com/openclaw/openclaw/pull/164745)（已关闭）** `fix(memory): reduce SQLite transcript export stalls` —— 移除只读 SQLite 快照中大工具结果的加载/解析，释放多秒级阻塞。
- **[#164743](https://github.com/openclaw/openclaw/pull/164743)（已关闭）** `fix: allow ratchet checks to read large Git baselines` —— 修复 baseline-ratchet CI 在 >1 MiB git 输出时 ENOBUFS 失败。
- **[#164735](https://github.com/openclaw/openclaw/pull/164735)（已关闭）** `fix: reduce Control UI startup download for device controls` —— Web UI 启动 JS 体积减少约 1,993 gzip bytes。
- **[#164476](https://github.com/openclaw/openclaw/pull/164476)（已关闭）** `refactor(channels): read pairing allowlists through the shared-state reader` —— 将同步 SQLite 读取迁出 Gateway 主线程。
- **[#164645](https://github.com/openclaw/openclaw/pull/164645)（已关闭）** `refactor(config): deslop config and sessions` —— 清理配置与会话内部冗余。
- **[#164748](https://github.com/openclaw/openclaw/pull/164748)**（已关闭前状态推送） `fix(doctor): fall back to a guarded hard-link move` —— 修复 QNAP ZFS 等文件系统上 RENAME_NOREPLACE 被拒绝时 Doctor 审计日志迁移失败（#164703）。
- **[#164746](https://github.com/openclaw/openclaw/pull/164746)** `fix(update): name each candidate check before running it` —— 让 `openclaw update` 在候选校验期间输出进度。

此外 [#164558](https://github.com/openclaw/openclaw/pull/164558)（feat(plugins): tools deliver finished reply without second model turn）、[#164682](https://github.com/openclaw/openclaw/pull/164682)（fix(gateway): keep chat admission responsive and bound to current authority）以及 [#164744](https://github.com/openclaw/openclaw/pull/164744)、[#164747](https://github.com/openclaw/openclaw/pull/164747)（placement/history reader 投影）共同推进了 **Gateway 主线程卸负与架构统一读取路径**这一长期方向。整体看，**9.3/9.4 升级链上的协调跟踪（#145252）今日新增 13 条讨论**，但尚未形成完整的 9.9 release 闭环。

---

## 4. 社区热点

按评论数排序，最受关注的 Issue 集中于持久化与结算链路：

| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#143524](https://github.com/openclaw/openclaw/issues/143524) | **105** | Agent SQLite WAL 增长至 1.4–2.8 GB，阻塞 Gateway 启动（Windows） |
| 2 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 22 | 同步代理持久化与转写维护阻塞 Gateway 事件循环 |
| 3 | [#137332](https://github.com/openclaw/openclaw/issues/137332)（已关闭） | 21 | 混合 terminal requester-settle 批次在所有权检查后无限重试 |
| 4 | [#139710](https://github.com/openclaw/openclaw/issues/139710) | 20 | mid-turn 插件生成 supersede 杀死 system-agent turn + planner fallback |
| 5 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 17 | OpenClaw 泄漏未收割 hook/tool 子进程，导致僵尸堆积 |
| 6 | [#159612](https://github.com/openclaw/openclaw/issues/159612) | 14 | 子代理结算 "owner changed before settlement" 永久重注入 |
| 7 | [#150635](https://github.com/openclaw/openclaw/issues/150635) | 14 | 短期召回上限导致 dreaming deep 阶段永不晋升 |
| 8 | [#145252](https://github.com/openclaw/openclaw/issues/145252) | 13 | 2026.9.3/9.4 升级与恢复可靠性协调跟踪 |
| 9 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | 13 | Cron agent 在 DeepSeek 上 `[cron:` 前缀被降级导致 stall |
| 10 | [#110190](https://github.com/openclaw/openclaw/issues/110190)（已关闭） | 13 | Runtime context carrier 放置在用户消息之后导致模型严重混乱 |

**诉求分析**：
- **持久化层瓶颈** 是头号议题——WAL 失控（#143524）、5s busy timeout 锁库（#148307）、重复 integrity_check（#118885）、大型数据库 I/O 压力（#160386）、SQLite 转写导出 stall（已通过 #164745 部分缓解）。
- **结算与所有权** 问题（#159612、#137332、#121187、#110190）反映出 requester/owner 状态机在多 agent/子代理场景下的设计缺陷。
- 用户对 **升级流程**（#145252、#157818、#164066、#123799、#122019）的高频讨论表明运维侧对回滚/canary 路径与 plugin 兼容性检查有强烈诉求。

---

## 5. Bug 与稳定性

按严重程度（impact:ux-release-blocker > P0 崩溃 > P1 数据丢失 > 行为缺陷）排列：

### 🔴 P0 / 阻塞发布级

- **[#143524](https://github.com/openclaw/openclaw/issues/143524)** — Windows Gateway SQLite WAL 增长至 GB 级，阻塞启动。**无关联 fix PR**，`clawsweeper:no-new-fix-pr` 标签显著。
- **[#159612](https://github.com/openclaw/openclaw/issues/159612)** — 子代理结算 "owner changed before settlement" 永久重注入结果。需 `needs-product-decision` + live repro。**无 fix PR**。
- **[#145252](https://github.com/openclaw/openclaw/issues/145252)** — 2026.9.3/9.4 升级/Doctor/迁移/回滚可靠性跟踪（协调 index）。`maintainer` 标签。
- **[#154812](https://github.com/openclaw/openclaw/issues/154812)** — Gateway RSS 失控（9.32 GiB / 15 GiB 可见内存）触发 OOM 与 shutdown timeout。**无 fix PR**。
- **[#158126](https://github.com/openclaw/openclaw/issues/158126)** — Gateway 关闭步骤 "gateway-server-close" 偶发失败，systemd unit 残留 failed。**无 fix PR**。
- **[#160386](https://github.com/openclaw/openclaw/issues/160386)** — 2026.9.6 在大型 session store 上 SQLite I/O 压力 + WebUI RPC timeout。**无 fix PR**。
- **[#121617](https://github.com/openclaw/openclaw/issues/121617)** — 强制 auto-compaction 误报 "Already compacted" 终端失败。已有 `clawsweeper:linked-pr-open` 关联。
- **[#148307](https://github.com/openclaw/openclaw/issues/148307)** — Windows 上 464 MB agent DB + 0 freelist + 5s busy timeout → "database is locked"。**无 fix PR**。
- **[#157818](https://github.com/openclaw/openclaw/issues/157818)** — 2026.9.4 → 9.6 `doctor-failed` 卡在 300s canary 上限（#151295 修复已在 9.6 但无法提升 9.4 driver 预算）。
- **[#123799](https://github.com/openclaw/openclaw/issues/123799)** — Codex compact 404 在 2026.5.12 生产环境的升级/backport 指导缺失。
- **[#164066](https://github.com/openclaw/openclaw/issues/164066)** — 2026.9.8 managed update 仍回滚：activation Doctor 拒绝 "undergoing offline maintenance"（#160671/#163803 在 main，未进 9.8）。
- **[#162031](https://github.com/openclaw/openclaw/issues/162031)（已关闭）** — 2026.9.7 gateway crash-loop（Unhandled promise rejection: undefined）于 runtime tool 装配阶段。

### 🟠 P1 / 重要缺陷

- **[#119720](https://github.com/openclaw/openclaw/issues/119720)** — 同步 agent 持久化阻塞 Gateway 事件循环（partial 修复已通过 #140231、#138984 落地）。**无完整 fix PR**。
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook/tool 子进程未收割导致僵尸累积。长期未根治（2026-06 创建）。
- **[#121953](https://github.com/openclaw/openclaw/issues/121953)** — Cron agent 在 DeepSeek 上 stall 数分钟（API 边缘降级）。**无 fix PR**。
- **[#161379](https://github.com/openclaw/openclaw/issues/161379)** — Gateway prepared model catalog refresh loop 永久 pin 一个 CPU 核（OpenAI catalog TTL 60s < per-agent refresh）。
- **[#157575](https://github.com/openclaw/openclaw/issues/157575)** — Managed Gateway 堆标志覆盖 per-worker old-space 限制。`linked-pr-open`。
- **[#161976](https://github.com/openclaw/openclaw/issues/161976)** — WhatsApp DM 在 durable registry handoff 阶段重复失败。
- **[#162119](https://github.com/openclaw/openclaw/issues/162119)** — Codex in-place 模型切换后间歇性 403 owner-verification 错误。
- **[#144291](https://github.com/openclaw/openclaw/issues/144291)** — Config hot-reload 中途中断所有 in-flight agent turn。`needs-product-decision`。
- **[#157126](https://github.com/openclaw/openclaw/issues/157126)** — claude-cli MCP bridge 在 restart-recovery 后丢失 operator.admin scope。**安全敏感**。
- **[#142271](https://github.com/openclaw/openclaw/issues/142271)** — secret egress proxy 启用时 cron agentTurn 在 CLI 后端无法 exec。
- **[#81182](https://github.com/openclaw/openclaw/issues/81182)** — Overflow recovery 应在等待自动 compact 超时前先 truncate tool results（长期开放，2026-05 创建）。
- **[#138629](https://github.com/openclaw/openclaw/issues/138629)** — 2026.9.1 Codex ACP adapter 将 terminal failure 转 end_turn 丢失 typed sessionFailure。
- **[#118885](https://github.com/openclaw/openclaw/issues/118885)** — 单次启动多次执行 SQLite `PRAGMA integrity_check` 浪费多 GB 数据库。
- **[#139710](https://github.com/openclaw/openclaw/issues/139710)** — plugin generation supersede 杀死 system-agent turn + planner fallback。
- **[#123354](https://github.com/openclaw/openclaw/issues/123354)** — Matrix E2EE 在 Megolm session rotation 后停止解密。
- **[#103804](https://github.com/openclaw/openclaw/issues/103804)** — service-env 生成器双引号值破坏 AWS_REGION。
- **[#117956](https://github.com/openclaw/openclaw/issues/117956)（已关闭）** — claude-cli 后端绕过 `CLAUDE_CLI_CLEAR_ENV` 产生 ~13.7M tokens 计费。

### 🟡 P2 / UX & 行为

- **[#150635](https://github.com/openclaw/openclaw/issues/150635)** — dreaming deep phase 永不晋升（recall 上限 512）。
- **[#121558](https://github.com/openclaw/openclaw/issues/121558)** — Cron isolated run 将 claude-cli run narration 拼接到公告消息。
- **[#123792](https://github.com/openclaw/openclaw/issues/123792)** — CLI 后端 assistant turn 双写（live per-block + aggregate）。
- **[#164394](https://github.com/openclaw/openclaw/issues/164394)** — Control UI WebChat 长转写滚动时持续微抖动。
- **[#120735](https://github.com/openclaw/openclaw/issues/120735)** — Telegram inbound stickers 不可用（无描述、未落盘）。
- **[#112638](https://github.com/openclaw/openclaw/issues/112638)** — session.maintenance enforce 模式不约束 thread/channel 条目。
- **[#122019](https://github.com/openclaw/openclaw/issues/122019)** — `openclaw update status` 缺少插件可用性与不可逆迁移风险提示。
- **[#120244](https://github.com/openclaw/openclaw/issues/120244)** — RFC: cron maintenance window with role isolation（跟进 #79192/#119575）。
- **[#119992](https://github.com/openclaw/openclaw/issues/119992)** — `message` 工具缺乏 per-turn 发送预算（duplicate-answer storms）。

---

## 6. 功能请求与路线图信号

- **[#67440](https://github.com/openclaw/openclaw/issues/67440)** — Exec approvals 添加可选 TOTP（认证器 6 位代码）。安全方向明确，社区讨论持续升温。
- **[#101422](https://github.com/openclaw/openclaw/issues/101422)** — 可配置的 memory recall eligibility 与索引排除路径（markdown-first 工作区）。
- **[#120244](https://github.com/openclaw/openclaw/issues/120244)** — cron maintenance window + role isolation（RFC）。
- **[#156

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告
**报告周期**：2026-10-04｜**样本项目**：13 个｜**核心参照**：OpenClaw

---

## 1. 生态全景

本期覆盖的 13 个项目中，**仅 4 个处于真活跃迭代期**（OpenClaw、ZeroClaw、Hermes Agent、NanoBot），**3 个处于维护观望期**（NanoClaw、CoPaw/QwenPaw、NullClaw），**3 个处于静默/停滞状态**（PicoClaw、IronClaw、LobsterAI），**3 个完全无活动**（TinyClaw、Moltis、ZeptoClaw）。整体生态呈现明显的"**头部高强度维护 + 长尾失活**"的马太效应：头部项目单日 PR 流入可达 47-50 条，长尾项目则连续数日零活动。技术焦点高度收敛于**持久化层（SQLite/WAL）、子进程/守护进程治理、子代理结算与多主体隔离、安全加固**四大方向，反映出当前个人 AI 助手赛道正在从"功能覆盖期"迈入"**架构健壮性 + 安全多租户**"的深度建设期。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已合并） | Release | 健康度 | 主要特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 395 / 105 | 290 / 210 | ❌ | ⚠️ 高活跃 + 高积压 | P0/P1 阻塞多，9.3→9.6 升级链待闭环 |
| **ZeroClaw** | 50（7 关闭） | 49 / 1 | ❌ | 🟢 极高活跃 + 双版本夹击 | v0.8.6 收尾 + v0.9.0 前置；安全加固密集 |
| **Hermes Agent** | 50（2 关闭） | 48 / 2 | ❌ | 🟡 高活跃 + 修边补洞 | scratch prune 数据丢失为首要 P0；核心→插件化 |
| **NanoBot** | 2 新 Bug | 26 / 21 | ❌ | 🟢 健康高活跃 | 45% 合并率，>90% Bug 修复覆盖率 |
| **NanoClaw** | 7（3 关闭） | 20 / 13 | ❌ | 🟡 活跃质量整顿期 | 升级链路 + 安全 + CI 治理 |
| **CoPaw/QwenPaw** | 6（1 关闭） | 9 / 0 | ❌ | 🟢 健康小步迭代 | 多模态/路由/OpenAI 兼容三线 |
| **NullClaw** | 0 | 20 / 0 | ❌ | 🔴 单作者停滞 | 全部 PR OPEN，单一贡献者 100% |
| **IronClaw** | 1 新 | 0 / 0 | ❌ | 🔴 静默 | macOS core 命令无法启动 |
| **PicoClaw** | 1 stale | 0 / 0 | ❌ | 🔴 静默 | QQ 通道接口跟进缺失 |
| **LobsterAI** | 6 全 stale | 1（挂 75 天） | ❌ | 🔴 严重积压 | 100% Issue 半年未响应 |
| **TinyClaw / Moltis / ZeptoClaw** | — | — | — | ⚫ 失活 | 24h 零活动 |

> 📌 **关键观察**：今日**全生态无任何项目发布新版本**，但 PR 流入总量超过 **200 条**，反映出"代码在动、Release 在等"的普遍节奏。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对照 | 评估 |
|---|---|---|---|
| **社区规模** | 500 条 Issue+PR 日流量 | ZeroClaw/Hermes 各 ~100 条；NanoBot ~50 条 | **头部第一梯队**，活跃度数量级领先 |
| **议题复杂度** | 多 Agent、子代理结算、Gateway 主线程、升级链路协调 | NanoBot 偏单 Agent 工具/UI；NullClaw 偏通道稳定性 | **复杂度最高**，跨子代理/owner/持久化的设计债深 |
| **架构成熟度** | Gateway 主线程解耦、shared-state reader 路径统一中 | ZeroClaw 已在做 Schema V4 破坏性裁剪 | OpenClaw **正在经历架构收敛阵痛** |
| **Release 节奏** | 9.3→9.6 系列，未见 9.9 闭环 | ZeroClaw v0.8.6/v0.9.0 双轨推进；NanoBot 0.3.5 | **Release 信号最弱** |
| **安全姿态** | 多 P1 安全敏感未根治（#157126 MCP scope、#142271 凭据） | ZeroClaw 将安全作为主线；NanoClaw 当日闭环 webhook 鉴权 | **相对滞后** |

**核心差异**：OpenClaw 是生态中**多 Agent 编排深度最深、议题复杂度最高**的项目，但当前**结构性问题（SQLite/Gateway/升级链）使其在 Release 节奏与稳定性上落后于 ZeroClaw、Hermes Agent 等同梯队项目**。其修复轨迹（#164745/164476/164558/164682）显示维护者正在做"主线程卸负 + 统一读取路径"的中长期重构。

---

## 4. 共同关注的技术方向

下表汇总多项目**反复出现**的技术诉求（≥3 个项目同时关注）：

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **SQLite/持久化层治理** | OpenClaw、ZeroClaw、LobsterAI、NanoClaw | WAL 失控（#143524 1.4-2.8 GB）、DB 膨胀（#879 外键未启）、`created_at` 一致化（#11420）、转写导出 stall（已通过 #164745 部分缓解） |
| **子进程/守护进程治理** | OpenClaw、ZeroClaw、Hermes Agent | Hook 子进程未收割（#97616）、ephemeral daemon CPU 自旋 17h（#9799）、foreground 命令隔离（Hermes PR #132022）、子进程 RSS 看门狗（ZeroClaw PR #11456） |
| **升级/安装链路可靠性** | OpenClaw、NanoClaw、Hermes Agent | 9.3→9.4 升级协调跟踪（#145252）、cutover 崩溃（#4003/#4004）、HERMES_HOME 改 launcher 砖机（#123238/#131745） |
| **跨平台桌面/CLI 兼容性** | OpenClaw、Hermes、IronClaw、NullClaw、NanoBot | Windows SQLite 锁定（#148307）、macOS serve 启动失败（IronClaw #8122）、Android/Termux DNS（NullClaw #966）、Linux XDG_RUNTIME_DIR（NanoBot #6024）、PowerShell 5.1 OEM 乱码（Hermes #132566） |
| **子代理/多主体边界与隔离** | OpenClaw、ZeroClaw、Hermes、NanoBot | owner-changed 永久重注入（#159612）、owned session 跨主体内存泄露（ZeroClaw #11239）、A2A bearer principal 越权（NullClaw #1012）、subagent session-owned 消息/取消（NanoBot #5985） |
| **安全加固与凭据隔离** | ZeroClaw、NanoClaw、Hermes、OpenClaw | ZeroRelay 主体透传（ZeroClaw #10766）、loopback webhook 鉴权（NanoClaw #4013）、world-readable service 文件（NanoClaw #3985）、MCP scope 丢失（OpenClaw #157126）、smart-approval fail-open（Hermes #132291） |
| **记忆/上下文可控化** | NullClaw、OpenClaw、NanoBot、ZeroClaw | auto_recall/recall_limit/max_context_bytes 可配置（NullClaw #1001）、recall 上限导致 dreaming 不晋升（OpenClaw #150635）、skill memory + query-aware（NanoBot #1651）、长任务循环卫生（ZeroClaw #987） |
| **Provider 抽象 / BYOK** | NanoBot、CoPaw、ZeroClaw | OpenAI SDK 3.8.0 alias 序列化（NanoBot #6020）、gpt-6 max_completion_tokens（CoPaw #8090）、effort-based 本地/云路由（ZeroClaw #11516） |

> 💡 **趋势判断**：这 8 个方向构成当前生态的

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**报告日期：2026-10-04**

---

## 1. 今日速览

NanoBot 项目今日保持高强度迭代节奏，过去 24 小时共有 **47 条 PR 更新** 与 **2 条新 Bug 报告**，PR 活跃度极高。其中 **21 条 PR 已合并/关闭**，合并转化率约 45%，反映维护团队响应迅速。修复类工作集中爆发，**WebUI 移动端适配**、**TUI 交互稳健性**、**Provider/MCP 集成** 三大方向均有显著推进。社区新报告的 2 个 Bug 均与桌面集成相关（Obsidian CLI、后台压缩广播），提示 Windows/Linux 桌面生态仍是用户痛点集中区。综合评估：**项目处于健康高活跃期，稳定性优化是当前主线。**

---

## 2. 版本发布

🚫 **今日无新版本发布。** 当前最新仍为社区报告中的 `nanobot-ai 0.3.5`。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共 **21 条 PR 完成生命周期**，亮点集中在 WebUI 移动端体验打磨与底层 Provider/TUI 健壮性提升：

| PR | 标题 | 价值 |
|---|---|---|
| [#6023](https://github.com/HKUDS/nanobot/pull/6023) | fix(webui): enlarge preview controls on touch devices | 触屏设备预览控件可达性提升，桌面密度不变 |
| [#6022](https://github.com/HKUDS/nanobot/pull/6022) | fix(webui): keep touch navigation visible above the keyboard | 解决 iOS 键盘弹起遮挡导航的经典移动端 UX 问题 |
| [#6021](https://github.com/HKUDS/nanobot/pull/6021) | fix(webui): hide unavailable website preview actions | 移动 Safari 不再因不可用预览面板替换会话 |
| [#5640](https://github.com/HKUDS/nanobot/pull/5640) | feat(webui): mobile keyboard input and streaming send | 移动端换行与发送逻辑分离，PC 端行为零回归 |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | fix(api): return 400 for invalid multimodal field types | 区分客户端错误（400）与体积过大（413），HTTP 语义更规范 |

**整体进展判断**：WebUI 在移动端可用性上完成一轮系统性收尾，TUI 团队（dajiaohuang）正在同时推进 3 个 P0/P2 修复（#6025/#6026/#6027），代码库向前稳步推进，**未出现重大架构调整**。

---

## 4. 社区热点（讨论最活跃）

虽然评论数为 0 的占多数，但**按主题热度与跨 PR 关联性**评估：

- **🔗 Obsidian / XDG_RUNTIME_DIR 话题**
  - Issue [#6024](https://github.com/HKUDS/nanobot/issues/6024)（用户报告）
  - PR [#6030](https://github.com/HKUDS/nanobot/pull/6030)（同日提交修复）
  - 体现社区 → 维护者响应极快（24h 内出 fix），是今日最具代表性的闭环案例。

- **🤖 Subagent 会话化**
  - PR [#5985](https://github.com/HKUDS/nanobot/pull/5985) —— session-owned task messaging and cancellation，叠加已有 #5976，向多任务代理协作范式演进。

- **🧠 长期记忆层**
  - PR [#1651](https://github.com/HKUDS/nanobot/pull/1651) —— skill memory + query-aware retrieval，自 2026-03-07 起持续打磨，是社区对"长期学习能力"诉求的代表性方案。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟥 **P0** | [#6026](https://github.com/HKUDS/nanobot/pull/6026) | TUI 自动队列发送失败时丢失用户文本与附件 | ✅ 已提交待合并 |
| 🟧 **P1** | [#5922](https://github.com/HKUDS/nanobot/pull/5922) | Cron 未设时区时按 UTC offset 计算，跨夏令时漂移 1 小时 | ✅ 已提交待合并 |
| 🟨 **P2** | [#6024](https://github.com/HKUDS/nanobot/issues/6024) / [#6030](https://github.com/HKUDS/nanobot/pull/6030) | Obsidian CLI 在 nanobot 下找不到桌面进程 | ✅ 已有 fix |
| 🟨 **P2** | [#6029](https://github.com/HKUDS/nanobot/issues/6029) | 后台 idle/dream 周期压缩时强制广播状态到活跃频道 | ❌ 暂无 PR，仅 Feature Request 形态 |
| 🟨 **P2** | [#6027](https://github.com/HKUDS/nanobot/pull/6027) | TUI 文件编辑事件以倒序合并，覆盖已完成 diff | ✅ 已提交待合并 |
| 🟨 **P2** | [#6025](https://github.com/HKUDS/nanobot/pull/6025) | TUI 组合器未绑定 Kitty 终端的 keypad Enter | ✅ 已提交待合并 |
| 🟨 **P2** | [#6009](https://github.com/HKUDS/nanobot/pull/6009) | WebUI 侧边栏初次拉取失败后状态被误清空 | ✅ 已提交待合并 |
| 🟨 **P2** | [#5764](https://github.com/HKUDS/nanobot/pull/5764) | FallbackProvider 半开探测并发导致多次探测同时命中 | ✅ 已提交待合并 |
| 🟨 **P2** | [#6011](https://github.com/HKUDS/nanobot/pull/6011) | Codex 图像生成响应因 buffered 流读取过早终止而丢图 | ✅ 已提交待合并 |
| 🟨 **P2** | [#6020](https://github.com/HKUDS/nanobot/pull/6020) | OpenAI SDK 3.8.0 `async_` 字段未按 alias 序列化 | ✅ 已提交待合并 |
| 🟨 **P2** | [#5914](https://github.com/HKUDS/nanobot/pull/5914) | Napcat 图片 `file_size` 非数字时整条消息被丢弃 | ✅ 已提交待合并 |
| 🟨 **P2** | [#6018](https://github.com/HKUDS/nanobot/pull/6018) / [#6019](https://github.com/HKUDS/nanobot/pull/6019) | MCP 资源/提示词分页未拉完；只暴露 resources 的服务被错误拒绝连接 | ✅ 已提交待合并 |

**结论**：今日 12 个明确 Bug 中 **11 个已具备修复 PR**，仅 [#6029](https://github.com/HKUDS/nanobot/issues/6029) 处于"诉求明确、缺实现"状态，**整体修复覆盖率 > 90%**，稳定性工作极为高效。

---

## 6. 功能请求与路线图信号

| 信号 | 编号 | 评估 |
|---|---|---|
| 后台维护静默化（idle/dream 周期不打扰用户频道） | [#6029](https://github.com/HKUDS/nanobot/issues/6029) | 高价值、低风险，**下一版本合入概率高** |
| 技能级长期记忆 + 查询感知召回 | [#1651](https://github.com/HKUDS/nanobot/pull/1651) | 已开放 7 个月，**需关注是否阻塞主线** |
| Session-owned Subagent 消息/取消 | [#5985](https://github.com/HKUDS/nanobot/pull/5985) | 与 #5976 形成完整代理栈，**属下一里程碑候选** |
| 桌面 CLI App 环境透传 | [#6030](https://github.com/HKUDS/nanobot/pull/6030) | 今日即修，**几乎锁定合入** |

**信号总结**：维护团队明显将"桌面/移动端 UX 一致性"和"Provider/MCP 集成鲁棒性"列为近两个版本的优先方向。

---

## 7. 用户反馈摘要

- **🪟 Linux 桌面集成是真实痛点**：用户 [austinleekelly](https://github.com/HKUDS/nanobot/issues/6024) 在 Ubuntu + GNOME/Wayland + Obsidian 1.13.7 下，CLI App 子进程拿不到 `XDG_RUNTIME_DIR`，导致无法定位已运行的桌面进程 —— 是 nanobot 在非 macOS/Windows 环境上的经典缺口。
- **🤫 用户对"安静运行"有强烈诉求**：[npike](https://github.com/HKUDS/nanobot/issues/6029) 指出后台 idle/dream 周期自动压缩会向活跃频道广播"Compressing context…"，干扰日常使用，希望支持静默模式 —— 这反映了 nanobot 自动化策略对人类协作流的"礼貌度"问题。
- 当前 Issue **均为 0 评论、0 👍**，新增 Bug 在尚未发酵前已被同 PR 闭环，说明社区处于**问题早期暴露阶段**，暂无大规模不满。

---

## 8. 待处理积压

| 编号 | 标题 | 状态 | 风险 |
|---|---|---|---|
| [#1651](https://github.com/HKUDS/nanobot/pull/1651) | feat(memory): add optional skill memory and query-aware retrieval | **OPEN 7 个月** | 长期记忆是 NanoBot 差异化卖点之一，拖太久可能影响社区感知；建议维护者给出明确处理时间表或阶段性合并。 |
| [#5985](https://github.com/HKUDS/nanobot/pull/5985) | feat(subagent): add session-owned task messaging and cancellation | OPEN 4 天 | 依赖 #5976，链路较长，需关注 PR 间依赖解锁。 |

> 💡 **提醒**：今日 PR 流入量较大（47 条），维护者在 WebUI/TUI/MCP/Provider 多线并行；建议优先 review P0（#6026）与涉及外部依赖升级的 PR（#6020 OpenAI SDK 3.8.0 适配），避免积压。

---

**报告生成时间**：2026-10-04
**数据来源**：GitHub HKUDS/nanobot Issues & Pull Requests API

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-04**
**数据源：** github.com/nousresearch/hermes-agent

---

## 一、今日速览

Hermes Agent 今日活跃度维持高位，**50 条 Issue 更新 + 48 条待审 PR** 同步放量，且无版本发布，呈现典型的"持续维护期 + 大量安全/稳定性收口"特征。社区讨论焦点集中在 **P0/P1 级稳定性缺陷**：尤其是 `scratch prune` 静默删除多日 agent 工作（15 条评论，居热度榜首）和 Desktop/CLI 安装相关的 Python launcher 绑定缺陷（同类 P1 问题本周至少 3 起，已先后关闭）。整体项目处于"打补丁、收边界、补文档"的密集修复节奏，未见大规模新功能推进，但 **Home Assistant 从核心剥离到官方插件**（PR #132469）是一个标志性的架构演进信号。

---

## 二、版本发布

**今日无新版本发布。** 过去 24 小时发布计数为 0，距上一版本（v0.21.5+2939.g4127d78 / 2026.9.24，依据 Issue #128468 环境信息推断）已过约 10 天。

---

## 三、项目进展

### 已关闭 / 已合并（2 项 PR）

1. **PR #132563** — *fix(whatsapp): adopt or stop only the bridge that serves this profile's session*
   - 状态：CLOSED（同日关闭，疑因与 #115603 合并前被替换）
   - 同一问题另有 PR #115603 已 CLOSED（基于 @victor-kyriazakos），说明该项目采用"多 PR 竞争 / 择优合并"流程。

2. **PR #115603** — *fix(whatsapp): adopt only the bridge that serves this profile's session*
   - 状态：CLOSED
   - 解决了多 profile 同主机时 WhatsApp bridge 端口冲突、误接管别人 session 的问题。

### 重要待合并 PR（按 P 等级与影响面）

3. **[PR #132469]** — *Home Assistant moves out of core to the homeassistant catalog plugin, auto-installed for profiles that used it*
   - 核心架构级变更：**Home Assistant 网关平台 + `homeassistant` 工具集从核心剥离**，迁移至独立插件仓库 NousResearch/hermes-homeassistant。已用过的 profile 将自动安装。
   - 这是项目"**核心瘦身 + 插件化**"路线的明显落地信号。

4. **[PR #128768]** — *llama.cpp b11146 + Linux CUDA / 捆绑 libgomp / CLI setup / 服务生命周期修复*
   - 把 llama.cpp 升级到 b11146，使 **Linux + NVIDIA CUDA** 终于可用（之前仅 Windows 支持 CUDA，Linux 只能 Vulkan）。
   - 附带 CLI setup 流程与服务生命周期修复，显著降低本地模型用户配置门槛。

5. **[PR #132022]** — *foreground local commands 跑在独立 systemd scope 内（P1）*
   - 解决 `terminal` 命令内存峰值击垮 gateway cgroup、连带影响消息控制面的故障。
   - 与 #70716 / #97739（后台进程隔离）形成"前后台全隔离"闭环。

6. **[PR #132566]** — *Windows PowerShell 5.1 强制 UTF-8 包围 `uv python find`*
   - 修复非 ASCII profile 路径在 pl-PL 等 OEM 代码页下乱码导致 bootstrap Python 路径不可用的问题。

7. **[PR #132567]** — *npm >= 11.19 self-install 前预创建 lib/node_modules*
   - 修复 #125215：npm.unpack 在裸树上跑 `--global --prefix` 会因 ENOENT 退出 254。

8. **[PR #132568]** — *Matrix 加密事件无解密器时给出警告（修复 #131778）*
   - 修复无 client.crypto 时 mautrix 静默丢弃加密消息、零日志零送达的可观测性盲区。

9. **[PR #128674]** — *stdin writes to background processes pass the dangerous-command guard（安全）*
   - 把 `process(action="write"|"submit")` 输入纳入 tirith + 危险命令检查，关闭"实时后台 shell = 第二未受控执行通道"的安全洞。

10. **[PR #119970]** — *cron 在 DST 切换时正确锚定 wall clock*
    - `timezone` 未设时使用 `astimezone()` 的固定偏移，跨 DST 会让下次执行时间漂移。修复三处附着偏移的位置。

> **小结：** 今日合并量不大（2 条），但待审 PR 池中已沉淀 **多个 P0/P1 安全与稳定性修复** 与一条架构级（Home Assistant 插件化）变更，预计下一个发布将带来密集的"打地基"升级。

---

## 四、社区热点

按评论数排名：

1. **[Issue #132401](https://github.com/nousresearch/hermes-agent/issues/132401)** — *scratch prune: 24h idle delete 静默销毁 TMPDIR 指向 scratch 中的多日 agent 工作（无日志 / 无隔离 / 无 keep-marker）*
   - 评论 15，**P0 / needs-decision**，作者 @justinsharpe
   - 热度最高：直接威胁"无感数据丢失"，破坏"tempfile 安全默认"的隐含契约。

2. **[Issue #128468](https://github.com/nousresearch/hermes-agent/issues/128468)** — *Desktop transcript: 流式输出时消息重复渲染 + 滚动跳动*
   - 评论 12，**P2**，作者 @Romu9319
   - 影响所有 Desktop 用户可见体验，评论区集中讨论流式状态机与虚拟列表协调。

3. **[Issue #123238](https://github.com/nousresearch/hermes-agent/issues/123238)** — *不同 HERMES_HOME 启动 rebind Python launcher，删除临时 home 后彻底砖机*
   - 评论 6，**P1**，已 CLOSED——属于"安装更新 / 兼容性"sweeper 范畴，**已修复**。

4. **[Issue #131375](https://github.com/nousresearch/hermes-agent/issues/131375)** — *smart-approval guardian 在 event-loop 线程上崩溃（sync Relay 抛错）*
   - 评论 5，**P2**，作者 @HORUS-71
   - Desktop / serve 会话下，每条被标记命令全部 escalate，与 #132291（守护 LLM 不可达时降级到 300s 静默等待）形成 smart-approval 的两条腿。

5. **[Issue #96993](https://github.com/nousresearch/hermes-agent/issues/96993)** — *Windows: Chrome 151/152 app-bound 加密使 real-profile cookie 首次启动被清空（556 → 6）*
   - 评论 4，**P2 / Windows**，作者 @Akloenx123
   - 与 #107854（Windows 11 25H2 默认浏览器检测失效）共同暴露 Hermes 对新版 Windows 浏览器栈跟进滞后。

**诉求分析：** 用户集中关注三类问题——**(a) 数据安全（prune / sleep / 静默丢失）、(b) Desktop UI 一致性、(c) Windows 平台兼容性**。前两者直接关乎"用户是否能信任代理"，后者关乎"Windows 用户能否入门"。

---

## 五、Bug 与稳定性

按严重度排列（P0 → P1 → P2 → P3）：

| 等级 | Issue | 摘要 | 是否有 Fix PR |
|---|---|---|---|
| **P0** | [#132401](https://github.com/nousresearch/hermes-agent/issues/132401) | 24h 空闲 prune 静默销毁多日 scratch 中的 agent 工作 | ❌ 暂无（needs-decision） |
| **P1** | [#132504](https://github.com/nousresearch/hermes-agent/issues/132504) | OpenRouter 403（bundled skill 字面 `<tool>` 触发注入拦截 → 全 session 中毒） | ❌ 暂无 |
| **P1** | [#123238](https://github.com/nousresearch/hermes-agent/issues/123238) | 不同 HERMES_HOME rebind launcher → 删 home 后整机砖化 | ✅ **已 CLOSED** |
| **P1** | [#131745](https://github.com/nousresearch/hermes-agent/issues/131745) | e2e scratch Python 路径写入 launcher → 重启 exit-127 死循环 | ✅ **已 CLOSED** |
| **P1** | [#132547](https://github.com/nousresearch/hermes-agent/issues/132547) | Windows named-pipe 同步读阻塞 gateway 事件循环 → watchdog exit 75 | ❌ 暂无（与 #105279 / #100014 同类但不同根因） |
| **P2** | [#132477](https://github.com/nousresearch/hermes-agent/issues/132477) | `_relay_thinking` 把普通回复文本再发到 `reasoning.available` → Desktop 重复渲染 | ❌ 暂无 |
| **P2** | [#131375](https://github.com/nousresearch/hermes-agent/issues/131375) | smart-approval 在事件循环线程崩溃（sync Relay 抛错） | ❌ 暂无 |
| **P2** | [#132497](https://github.com/nousresearch/hermes-agent/issues/132497) | 显式 `archived:true` 只翻 flag，运行时 / lease / transcript 仍驻留 | ❌ 暂无 |
| **P2** | [#132291](https://github.com/nousresearch/hermes-agent/issues/132291) | smart-approval 守护 LLM 不可达 → 静默 300s 等待（fail-open） | ❌ 暂无 |
| **P2** | [#128468](https://github.com/nousresearch/hermes-agent/issues/128468) | Desktop 流式时重复渲染 + 滚动跳动 | ❌ 暂无 |
| **P2** | [#124309](https://github.com/nousresearch/hermes-agent/issues/124309) | stable 更新通道可被选中但 R2 记录缺失 → 通道解析失败 | ❌ 暂无 |
| **P2** | [#101513](https://github.com/nousresearch/hermes-agent/issues/101513) | `agent.service_tier` 从 `config.yaml` 在 tui_gateway 不上 wire | ❌ 暂无 |
| **P2** | [#132517](https://github.com/nousresearch/hermes-agent/issues/132517) | multiplexed gateway 不查 served profile 自己的 quick_commands | ❌ 暂无 |
| **P2** | [#132508](https://github.com/nousresearch/hermes-agent/issues/132508) | Desktop SSH 连接 / 转发 15s 超时不可覆盖 → 慢链路启动死循环 | ❌ 暂无 |
| **P2** | [#132068](https://github.com/nousresearch/hermes-agent/issues/132068) | Bot mention autocomplete 只列 `@default` / `@hermes` | ❌ 暂无 |
| **P2** | [#82688](https://github.com/nousresearch/hermes-agent/issues/82688) | `ClassifiedError.should_fallback` 写 7 处读 0 处 → 非重试错误一律 fallback | ❌ 暂无 |
| **P2** | [#127919](https://github.com/nousresearch/hermes-agent/issues/127919) | serve 重启时 `-Q` lane 不写 interrupted 标记，Bot Chat 中途掉线不续 | ❌ 暂无 |
| **P2** | [#118958](https://github.com/nousresearch/hermes-agent/issues/118958) | Discord 仅 role 授权用户，slash 命令被拒（缺 role_authorized） | ❌ 暂无 |
| **P2** | [#132498](https://github.com/nousresearch/hermes-agent/issues/132498) | kanban artifact 示例路径 → scratch，24h 后被清 | ❌ 暂无（关联 #132401） |
| **P3** | [#96993](https://github.com/nousresearch/hermes-agent/issues/96993) | Win Chrome 151/152 app-bound 加密 → cookie 复制被清 | ❌ 暂无 |
| **P3** | [#107854](https://github.com/nousresearch/hermes-agent/issues/107854) | Win 11 25H2 `_detect_default_windows()` 读 OS 不再更新的 `UserChoice` | ❌ 暂无 |
| **P3** | [#132483](https://github.com/nousresearch/hermes-agent/issues/132483) | Docker 销毁规则漏 `docker container rm / prune / system prune` | ❌ 暂无 |
| **P3** | [#132511](https://github.com/nousresearch/hermes-agent/issues/132511) | Web toolset picker "Active backend" 忽略 `web.search_backend` / `web.extract_backend` | ❌ 暂无 |
| **P3** | [#130323](https://github.com/nousresearch/hermes-agent/issues/130323) | agent-browser / web / ui-tui npm 高危漏洞（需锁文件更新） | ❌ 暂无 |

**稳定性观察：**
- 今日 P0 仍积压 1 条（#132401），核心是"prune 没有可观测 / 没有 keep-marker"的设计层缺失。
- P1 已 CLOSED 2 条（#123238、#131745），均围绕 **HERMES_HOME / launcher / Python 解释器路径绑定**，反映出近期一次较大范围重构让"安装态 / 数据态"之间的隐式契约暴露。
- `scratch` 目录（`~/.hermes/cache/scratch`）作为 TMPDIR 重定向引发的问题在多 Issue 复现（#132401、#132498、#131745 间接相关），**是一个需要架构层答复的系统性问题**。

---

## 六、功能请求与路线图信号

今日新开 / 活跃的 Feature 请求：

1. **[Issue #125813](https://github.com/nousresearch/hermes-agent/issues/125813)** — *Linux desktop: 菜单启动失败通知 + `hermes doctor` 启动器自检 + 捆绑自诊断 skill*
   - P3，作者 @wynxo
   - 起因 #122438 / #122485 启动失败完全无声。`Exec=` 指向不能服务 `hermes desktop` 的 launcher，进程 3 秒退出。
   - 已存在部分自检基础（`hermes doctor`），扩展为捆绑 skill 路径顺畅。

2. **[Issue #65426](https://github.com/nousresearch/hermes-agent/issues/654426)** — *WhatsApp 集成是 profile 级还是系统级？*
   - P3 / 已 CLOSED
   - 与 PR #115603 / #132563 处理的"多 profile 共用 host 时 WhatsApp bridge 隔离"问题直接关联，**说明 profile 隔离已落地**。

3. **[Issue #28570](https://github.com/nousresearch/hermes-agent/issues/28570)** — *agent-wake UDS 传输：外部进程向当前 CLI 会话注入 user-turn 消息（无需键盘 / TTY 自动化）*
   - P3，已 CLOSED。OpenClaw 上下文下的本地 UDS 唤醒链路。

4. **[Issue #28852](https://github.com/nousresearch/hermes-agent/issues/28852)** — *唤醒注入：session 激活时 drain 未消费 wake-inbox（持久层）*
   - P3，已 CLOSED。

5. **[PR #129435](https://github.com/nousresearch/hermes-agent/pull/129435)** — *Desktop: 支持 artifact 忽略规则*
   - 在 `desktop.artifacts.ignore` 上配置正则，从启发式发现的 artifact 中排除。明确交付的（`MEDIA:`）仍保留。

**路线图信号最清晰的：**
- **核心 → 插件** 转移正在系统化推进（Home Assistant 是首个重大案例，PR #132469）。下一个版本/季度预计还会有更多平台以同模式迁移。
- **本地模型（llama.cpp）正式支持 Linux CUDA**（PR #128768），与 Local Models 工具集一同扩展。
- **Windows 路径乱码 / PowerShell 5.1 兼容性**（PR #132566）等基础体验持续修补。

---

## 七、用户反馈摘要

从评论密度最高的 Issues 中提炼：

1. **"代理的临时空间被静默清空"是当前最强的用户焦虑。**
   - #132401 的 15 条评论中，reporter 与 reviewer 一致认为：`SCRATCH_TMP_ENV_VARS` docstring 明示 *"tempfile defaults land here without call sites knowing"*——但这个隐式契约目前没有任何可见性，agent 多日工作被 prune 等同于静默销毁。**用户诉求核心**：要么 quarantine、要么 keep-marker、要么完全可观测。

3. **"Desktop 流式输出体验不稳定"是第二大反馈主题。**
   - #128468（评论 12）和 #132477（评论 1 但同主题）共同指向 relay 流式状态机与 Desktop 渲染器存在重复 emit 漏洞。用户在评论中追问"为什么 `reasoning.available` 与正式 reply 共用同一个 text 流"。

4. **"安装 / 更新链路脆弱"——典型用户故事。**
   - #123238 / #131745 / #124309 三条相关 Issue 评论里，多名 reporter 描述同一类事故：用临时 `HERMES_HOME` 跑测试 / 切换更新通道 → production launcher 被改写 → 删临时目录或重启后整机无法启动。**用户请求**：launcher 应硬编码 Python 路径（绝对路径）或

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**：2026-10-04
**项目**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**报告周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日活跃度处于**低位**状态。过去 24 小时内，仓库仅有 1 条 Issue 处于活跃状态，无新增 Pull Request，无新版本发布，也无任何 Issue 或 PR 被关闭。仓库整体处于相对静默期，暂无代码层面的推进。当前仅有的一条活跃 Issue（#3394）已被系统标记为 **stale**，说明维护者在该议题上的响应存在延迟，建议社区关注。

**健康度评估**：⚠️ **需关注** —— 单日零 PR、零关闭 Issue，外加 stale 标记，反映出项目当前维护响应节奏偏慢。

---

## 2. 版本发布

无新版本发布。本节省略。

---

## 3. 项目进展

过去 24 小时**无任何 Pull Request** 被合并、关闭或新建，代码层面无实质推进，项目今日在功能开发与修复方面没有向前迈进。

---

## 4. 社区热点

今日唯一活跃议题：

| 编号 | 标题 | 状态 | 评论数 | 👍 | 最后更新 |
|------|------|------|--------|-----|----------|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | [BUG] QQ机器人的接口更新了，但QQ聊天通道的接口似乎没有更新 | OPEN / stale | 2 | 0 | 2026-10-03 |

**议题概要**：用户 qinglt 反馈 QQ 机器人平台侧接口已更新，但 PicoClaw 的 QQ 聊天通道（channel）模块未跟进适配，导致兼容性问题。

**诉求分析**：该议题反映出用户对**第三方平台接口同步**的强诉求。QQ 机器人作为国内主流 IM 平台，其接口变更频率较高，聊天通道的适配滞后将直接影响该通道用户的可用性，是典型的"上游依赖追踪"问题。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 描述 | 是否有修复 PR |
|---------|------|------|--------------|
| 🟡 中 | [#3394](https://github.com/sipeed/picoclaw/issues/3394) | QQ 聊天通道接口未跟进 QQ 机器人平台侧接口更新 | ❌ 无 |

**说明**：该 Bug 直接影响使用 QQ 通道的用户，属于功能失效类问题。考虑到问题创建于 2026-09-26，至今已超过 1 周仍未关闭，且被标记为 stale，属于**响应滞后**的情况。建议维护者优先处理，避免 QQ 通道用户流失。

---

## 6. 功能请求与路线图信号

由于今日无新功能请求相关的 Issue 或 PR，本节信号有限。但从 #3394 的讨论中可以推断：

- **第三方 IM 平台适配**是用户的核心需求之一，特别是 QQ 这类国内主流平台。
- 用户期望 PicoClaw 建立**更及时的平台接口追踪机制**，以减少类似适配延迟问题。
- 暂未看到对应的功能增强 PR 提交，因此**短期内不太可能纳入下一版本**。

---

## 7. 用户反馈摘要

从 #3394 的 2 条评论及议题内容可提炼出以下反馈：

- **痛点**：QQ 通道用户因平台接口更新而无法正常使用，反映出对**多通道稳定性**的依赖。
- **使用场景**：用户使用 PicoClaw 对接 QQ 机器人进行聊天交互，属于典型的 AI Bot 即时通讯场景。
- **满意度**：偏低——问题提出超一周未解决，且议题被自动标记为 stale，用户体验感受较差。
- **隐含期待**：用户希望维护团队对国内 IM 平台（尤其是 QQ）的兼容性给予更高优先级。

---

## 8. 待处理积压

| 编号 | 类型 | 创建时间 | 等待时长 | 备注 |
|------|------|----------|----------|------|
| [#3394](https://github.com/sipeed/picoclaw/issues/3394) | BUG | 2026-09-26 | 8 天 | 已标记 stale，需维护者确认是否仍有效 |

**提醒**：当前积压虽不严重，但若不及时响应，可能影响用户信心。建议维护者：
1. 评估 #3394 的修复优先级；
2. 如短期内无法修复，建议在议题中给出明确说明与时间预期；
3. 考虑建立第三方平台接口变更的监控机制，从源头降低类似问题的发生频率。

---

## 附录：数据概览

| 指标 | 数值 |
|------|------|
| Issues 新开/活跃 | 1 |
| Issues 已关闭 | 0 |
| PRs 待合并 | 0 |
| PRs 已合并/关闭 | 0 |
| 新版本发布 | 0 |
| Stale Issues | 1 |

---

*报告生成时间：2026-10-04 · 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期：2026-10-04**

---

## 1. 今日速览

NanoClaw 今日继续保持高强度的工程节奏，过去 24 小时共处理 **7 条 Issue 更新**（含 3 条关闭）和 **33 条 PR 更新**（20 条待审、13 条已关闭），但**无新版本发布**。核心团队（glifocat 主导）今日明显在"补齐升级链路"——围绕 `/update-nanoclaw` 的 cutover/rollback 缺陷一次性修复了多个相关 PR（#4016、#4001、#3997、#3988 等），同时推进了安全加固（#4013 修复 loopback webhook 鉴权）、CI 治理（#4009、#4010、#3912）和贡献者文档规范（#4011）。整体而言，项目处于"质量整顿+基础设施加固"阶段，无新功能上线路径信号。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 仓库最近一次发版信息未在数据中体现。从 PR 节奏判断，下一版本（如 2.1.x 补丁版）很可能汇集本批与更新链路、Signal/Discord/WhatsApp 通道相关的修复。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 推进方向 |
|---|---|---|
| [#4016](https://github.com/qwibitai/nanoclaw/pull/4016) | `fix(update)`: 在 cutover 替换 node_modules 前加载网关助手 | 解决更新流程中 tsx/esbuild 升级导致的 cutover 崩溃，对应 Issue #4004 |
| [#4013](https://github.com/qwibitai/nanoclaw/pull/4013) | `fix(chat-sdk)`: 给本地 Gateway Webhook 加鉴权 | **安全修复**，闭环 Issue #2970 的本地伪造攻击面 |
| [#4011](https://github.com/qwibitai/nanoclaw/pull/4011) | `docs(contributing)`: 写明"小众修复请在自有 Fork 上做"的规则 | 贡献者治理 |
| [#4008](https://github.com/qwibitai/nanoclaw/pull/4008) | `fix(add-imessage)`: 用 core 预编译的 better-sqlite3 打开 chat.db | 修复本地 iMessage 后端在 Node 下打不开 chat.db 的回归 |
| [#4001](https://github.com/qwibitai/nanoclaw/pull/4001) | `test(setup)`: 嵌套 pnpm 探测镜像主机的 patches/overrides | 修复 add-matrix/add-imessage 安装后的 host 测试失败 |
| [#4005](https://github.com/qwibitai/nanoclaw/pull/4005) | `build(deps)`: Iron approval bridge 的 @grpc/grpc-js 升至 1.14.5 | 依赖安全更新 |
| [#3997](https://github.com/qwibitai/nanoclaw/pull/3997) | `fix(setup)`: 提交已应用的 skill 文件，使新装实例可走 `/update-nanoclaw` | 修复"装完即无法自我更新"的问题 |
| [#3989](https://github.com/qwibitai/nanoclaw/pull/3989) | `fix(onecli)`: 将 OneCLI 网关钉到 1.42.0（凭据注入旁路已修） | 依赖安全更新 |
| [#3985](https://github.com/qwibitai/nanoclaw/pull/3985) | `fix(setup)`: 代理凭据不再写入 world-readable 的 service 文件 | 凭据泄露加固 |
| [#3912](https://github.com/qwibitai/nanoclaw/pull/3912) | `ci(labels)`: area labeler 串行于 label-pr | 修复并行触发导致 kind/guideline 标签被覆盖 |

**整体判断**：今日闭合 PR 集中在"升级链路 + 安全加固 + CI/标签治理"三条线，未见新功能合并。项目的"维护债务清理"正在系统化推进。

---

## 4. 社区热点

按评论数与时间维度综合排序：

1. **[Issue #3643](https://github.com/qwibitai/nanoclaw/issues/3643)** — `kind/bug, priority/high`，30 分钟 `ABSOLUTE_CEILING_MS` 硬编码杀死本地模型长会话。**优先级最高但尚无 fix PR**，且 0 👍 暗示关注度被低估。
2. **[Issue #3301](https://github.com/qwibitai/nanoclaw/issues/3301)** — 2.1.48 后"一道门"任务投递模式导致日志丢失、回复被吃、长任务脱离列表。
3. **[Issue #3223](https://github.com/qwibitai/nanoclaw/issues/3223)** — 计划任务出错时错误消息无法路由，被静默丢弃，运维完全感知不到失败。
4. **[Issue #3984](https://github.com/qwibitai/nanoclaw/issues/3984)** — 每次压缩都会因未注册 mailbox 触发 `getAllDestinations` 报错。
5. **[PR #2752](https://github.com/qwibitai/nanoclaw/pull/2752)** — Discord 仅暴露 `url` 的附件无法被 agent 读取（已挂起约 4 个月）。

**诉求分析**：社区主要痛点集中在"长任务可靠性 + 错误可见性 + 附件/资源可达性"三方面。Issues #3301 与 #3223 在错误处理上呈同一根因（任务投递 / 错误路由模型过于狭窄），维护者后续若想根治，需要重构 chat/task 双轨的消息投递层。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 状态 | 是否有 fix PR |
|---|---|---|---|
| 🔴 P0 安全 | [#2970](https://github.com/qwibitai/nanoclaw/issues/2970) 本地 loopback webhook 未鉴权 | ✅ 今日已关闭 | ✅ [#4013](https://github.com/qwibitai/nanoclaw/pull/4013) |
| 🔴 P0 升级 | [#4003](https://github.com/qwibitai/nanoclaw/issues/4003) 回滚可能误删 `data/` 一半内容 | ✅ 今日已关闭 | ❌（仅 [#4016](https://github.com/qwibitai/nanoclaw/pull/4016) 修了同链路 cutover；rollback 本身未直接修） |
| 🔴 P0 升级 | [#4004](https://github.com/qwibitai/nanoclaw/issues/4004) cutover 在 tsx/esbuild 升级时崩溃 | ✅ 今日已关闭 | ✅ [#4016](https://github.com/qwibitai/nanoclaw/pull/4016) |
| 🟠 P1 功能 | [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) 硬编码 30 分钟天花板无配置点 | 🟡 仍 OPEN | ❌ 暂无 |
| 🟠 P1 可靠性 | [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) 计划任务错误被静默丢弃 | 🟡 仍 OPEN | ❌ 暂无 |
| 🟠 P1 可靠性 | [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) chat 会话内任务投递丢日志、吃回复 | 🟡 仍 OPEN | ❌ 暂无 |
| 🟡 P2 启动 | [#3984](https://github.com/qwibitai/nanoclaw/issues/3984) PreCompact hook 因无 mailbox 报错 | 🟡 仍 OPEN | ❌ 暂无 |

**注意**：Issue #4003（rollback 误删 `data/`）虽然关闭，但未见对应的 PR 显式修复该路径，**建议维护者确认修复闭环**。

---

## 6. 功能请求与路线图信号

- **配置化天花板**（[#3643](https://github.com/qwibitai/nanoclaw/issues/3643)）：要求把 `ABSOLUTE_CEILING_MS` 改为可配置项。当前 0 👍，但本地模型使用场景普遍，预期会进入下个版本规划。
- **更稳的错误可见性**（[#3223](https://github.com/qwibitai/nanoclaw/issues/3223) / [#3301](https://github.com/qwibitai/nanoclaw/issues/3301)）：计划任务 / chat 内任务需"显式失败通道"，结构上需要改 agent-runner 的错误写出逻辑。
- **Pi / 边缘设备鲁棒性**（[#4019](https://github.com/qwibitai/nanoclaw/pull/4019)、[#4018](https://github.com/qwibitai/nanoclaw/pull/4018)）：两条 PR 同时聚焦树莓派无 RTC 与 dockerd 启动时序，说明社区在该形态下的部署需求持续放大，可能成为下一个 minor 版本的隐含"友好设备"工作流。
- **WhatsApp 链接抗限流**（[#4017](https://github.com/qwibitai/nanoclaw/pull/4017)）：setup 阶段在 Baileys 版本检查被 429 时挂死，建议后续把"重试+降级"做成通用 setup 模式。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与 PR 描述：

- **"装得起来，更新不下去"**：用户反复报告从 2.1.x 老版本升级到新版本时 cutover/rollback 路径会留下半残主机（#4003、#4004、#4001）。这是当前最一致的负面情绪来源。
- **"本地模型跑得长一点就被杀"**：#3643 报告者明确使用 OpenCode 接入本地 OpenAI 兼容服务，30 分钟硬天花板无法通过任何配置绕过——"no config seam"。
- **"计划任务静默失败"**：#3223 反映出**运维盲区**比"功能缺失"更影响信任度，作者措辞强调"the operator never learns the task failed"。
- **"2.1.48 之后 chat 内的任务行为退化"**：#3301 的报告者甚至提到所有长期运行的任务行都"遗留在 chat session 里"，说明他在跨大版本迁移时损失了既有数据视图。
- **"PreCompact 每次都炸"**：#3984 用户表示每次上下文压缩都会触发未注册 mailbox 错误——属于体验级噪音，已严重影响日常使用。
- **"Discord 图片看不到"**：#2752 用户经历 4 个月等待仍未合并，反映通道适配器与 chat-sdk 桥之间的资源抓取抽象长期缺位。

正面信号：核心团队本周对"升级链路 + 安全 + CI 治理"集中发版式的修复动作，本身就是积极回应社区的体现；PR #3985（凭据不进 service 文件）和 #4013（webhook 鉴权）也直接对应真实部署担忧。

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 链接 | 存在时长 | 风险 |
|---|---|---|---|
| PR [#2752](https://github.com/qwibitai/nanoclaw/pull/2752) Discord 附件 URL 抓取 | ~117 天 | 🟠 Discord 通道实质性残废 |
| Issue [#3223](https://github.com/qwibitai/nanoclaw/issues/3223) 计划任务错误被吞 | ~55 天 | 🟠 计划任务不可观测 |
| Issue [#3301](https://github.com/qwibitai/nanoclaw/issues/3301) chat 内任务投递 | ~48 天 | 🟠 跨大版本回归 |
| Issue [#3643](https://github.com/qwibitai/nanoclaw/issues/3643) ABSOLUTE_CEILING_MS 硬编码 | ~37 天 | 🔴 本地模型用户核心路径受阻 |
| PR [#3918](https://github.com/qwibitai/nanoclaw/pull/3918) `send_message` 丢/重复回复 | ~9 天 | 🟠 流式 vs. 端点式 provider 双适配 |
| PR [#3999](https://github.com/qwibitai/nanoclaw/pull/3999) `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 透传 | ~2 天 | 🟡 文档与实现不一致 |
| PR [#3988](https://github.com/qwibitai/nanoclaw/pull/3988) 网关 skill payload 变更后不刷新 | ~3 天 | 🟡 更新覆盖不全 |
| PR [#3983](https://github.com/qwibitai/nanoclaw/pull/3983) 日志 BigInt/循环下嵌套 redaction 丢失 | ~3 天 | 🟡 安全相关日志可能泄露 |
| PR [#4019](https://github.com/qwibitai/nanoclaw/pull/4019) / [#4018](https://github.com/qwibitai/nanoclaw/pull/4018) Pi 设备鲁棒性 | 1 天 | 🟢 新提交，待审 |

---

### 项目健康度总结

| 维度 | 评级 | 说明 |
|---|---|---|
| 维护活跃度 | 🟢 高 | 24h 内 40 条更新动作，核心团队持续在场 |
| 安全响应 | 🟢 优 | #2970 漏洞在 90 天内闭环 |
| Bug 修复吞吐 | 🟢 优 | 多条 P0 升级链路 Bug 已修 |
| 新功能推进 | 🟡 中 | 今日无新功能合并 |
| 长期积压治理 | 🟠 弱 | #2752（117 天）等待合并 |
| 用户体验一致性 | 🟠 弱 | 错误可见性、配置灵活度仍是高频抱怨 |

**一句话总结**：NanoClaw 今天在"让升级更安全、让主机更耐造"上成果显著，但社区最关心的"任务可靠性 + 配置灵活性"议题（#3643、#3223、#3301）仍停留在 Issue 层面未进入修复轨道，建议维护者下个迭代优先排期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-04

> 数据来源：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)（统计窗口：过去 24 小时）

---

## 1. 今日速览

NullClaw 今日呈现**"单作者高频提交、维护端零动作"**的典型停滞形态：过去 24 小时内共有 **20 个 PR** 被刷新，但**全部处于 OPEN 状态、合并数为 0**；**Issue 通道无任何新增或活跃话题**，**未发布新版本**。值得关注的是，这 20 个 PR 的提交者均为同一人 `vernonstinebaker`，分布跨度从 6 月到 9 月，疑似该贡献者在做一次"集中刷新 + 重新唤起评审"的批处理操作。整体活跃度评估为**中等偏低**，社区讨论度近于静默，需要关注维护者侧是否对积压 PR 做出响应。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时未检测到任何 Release 标签或已合并到主干的功能提交。建议关注主干构建状态以判断上述 20 个 PR 是否会在下一次发版时被批量合入。

---

## 3. 项目进展

**今日无任何 PR 被合并或关闭。** 全部 20 个 PR 均被更新（更新日期统一为 2026-10-03），但 `state` 仍为 OPEN，按"今日推进"维度可视为**零进展**。

从内容主题看，本批被刷新的 PR 集中在四个方向，**勾勒出下一版本可能的形态**：

| 方向 | 代表 PR | 预期影响 |
|---|---|---|
| **Gateway / 通道层稳定性** | [#953](https://github.com/nullclaw/nullclaw/pull/953)、[#954](https://github.com/nullclaw/nullclaw/pull/954)、[#1002](https://github.com/nullclaw/nullclaw/pull/1002)、[#1010](https://github.com/nullclaw/nullclaw/pull/1010) | 修复 Discord/Telegram/MAX 通道的 socket 恢复、栈溢出、bot 自回复回环等问题 |
| **记忆与上下文** | [#1001](https://github.com/nullclaw/nullclaw/pull/1001)、[#1005](https://github.com/nullclaw/nullclaw/pull/1005) | 引入可配置的 auto_recall / recall_limit / max_context_bytes，并防止归档 shard 注入活动回合 |
| **Agent 循环与工具调用** | [#971](https://github.com/nullclaw/nullclaw/pull/971)、[#987](https://github.com/nullclaw/nullclaw/pull/987)、[#1011](https://github.com/nullclaw/nullclaw/pull/1011) | 启用 SSE 流式原生工具调用、长任务循环卫生、解析内存泄漏修复 |
| **文档与开发者体验** | [#962](https://github.com/nullclaw/nullclaw/pull/962)、[#963](https://github.com/nullclaw/nullclaw/pull/963)、[#1007](https://github.com/nullclaw/nullclaw/pull/1007)、[#1008](https://github.com/nullclaw/nullclaw/pull/1008)、[#970](https://github.com/nullclaw/nullclaw/pull/970) | Anthropic/Weixin 配置文档化、诊断日志说明、REPL 方向键支持 |

> 📌 备注：PR 实际创建时间跨度从 2026-06-12 至 2026-09-27，部分 PR（如 #1001 是 #979 的"复活版"）已经历多轮重提交，**仅更新日期为 10-03**，不应误读为"今日新提交"。

---

## 4. 社区热点

**今日热度异常冷清。**

- 评论数：所有 20 个 PR 的 `comment_count` 字段均为 `undefined`（即无评论互动）。
- 点赞数（👍）：所有 PR 均为 **0**。
- Issues：0 条活跃话题，0 条新开。

由于缺乏互动数据，**无法识别今日真正"被讨论最多"的话题**。从主题分布反推，最可能吸引后续讨论的方向是：
- 流式原生工具调用 [#971](https://github.com/nullclaw/nullclaw/pull/971) —— 涉及行为兼容性
- Discord bot 自回复回环 [#1010](https://github.com/nullclaw/nullclaw/pull/1010) —— 部署侧痛点
- A2A 任务作用域 [#1012](https://github.com/nullclaw/nullclaw/pull/1012) —— 安全相关，关乎多租户隔离

建议社区运营主动在上述 PR 下邀请评审，以打破静默。

---

## 5. Bug 与稳定性

按严重程度排序，本批 PR 揭示出以下**真实存在的缺陷**：

### 🔴 高危（安全 / 数据正确性）

1. **[#1012](https://github.com/nullclaw/nullclaw/pull/1012) `fix(a2a): scope tasks and context sessions by bearer principal`** —— `/a2a` 端点鉴权后未将调用方身份传入 JSON-RPC 层，导致 `tasks/get|cancel|resubscribe|list` 与 `contextId` 在不同调用方之间**可越权共享**。  
   *状态：已有 fix PR；关联关闭 issue [#974](https://github.com/nullclaw/nullclaw/issues/974)*。

2. **[#1005](https://github.com/nullclaw/nullclaw/pull/1005) `fix(memory): keep archived conversation shards out of live turns`** —— 归档副本被回灌进当前 prompt，**字面量模型会把当前用户消息当作旧历史**，并出现跨会话污染。  
   *状态：已有 fix PR；附 SQL `LIMIT` 顺序错误的根因修复*。

3. **[#1010](https://github.com/nullclaw/nullclaw/nullclaw/pull/1010) `fix(discord): ignore messages the bot itself posted`** —— 当 `allow_bots = true` 时，**机器人自己的回复会被再次喂入 agent 循环**，每轮触发下一轮，形成死循环。  
   *状态：已有 fix PR*。

### 🟠 中危（崩溃 / 资源耗尽）

4. **[#1002](https://github.com/nullclaw/nullclaw/pull/1002) `fix(channels): run HTTPS typing workers on the heavy runtime stack`** —— Discord / Telegram / MAX 的 typing worker 在 Zig TLS 初始化期间会**耗尽 512 KiB 栈**，直接终止 gateway。  
   *状态：已有 fix PR；借鉴自 @Tetraslam 的 [#978](https://github.com/nullclaw/nullclaw/pull/978)*。

5. **[#953](https://github.com/nullclaw/nullclaw/pull/953) `fix(channels): recover gateway sockets with safe shutdown ownership`** —— Discord gateway 长时间无响应时，**先 join 心跳 worker 再关 socket** 的顺序错误，加上 RESUME 重试缺少退避，可能造成资源悬挂。  
   *状态：已有 fix PR*。

6. **[#966](https://github.com/nullclaw/nullclaw/pull/966) `fix(http): secure buffered curl fallback on Android`** —— `aarch64-linux-android` (Termux) 上 Zig 0.16 标准库 HTTP 在 DNS 阶段抛 `error.NameServerFailure`，**原补丁只覆盖部分流量、未保留完整 `std.http.Client` 接口**。  
   *状态：已有 fix PR*。

### 🟡 中低危（功能可用性）

7. **[#1006](https://github.com/nullclaw/nullclaw/pull/1006) `fix(cli): append streamed stdout instead of overwriting offset zero`** —— macOS 上流式 CLI 输出首字节会被换行符覆盖，`pong` 打印成畸形首行。  
   *状态：已有 fix PR*。

8. **[#1004](https://github.com/nullclaw/nullclaw/pull/1004) `fix(providers): log scrubbed provider error bodies on non-2xx`** —— 非 2xx 响应被释放后**服务器原因不可见**（例如"模型不支持 tools"），必须抓包才能定位。  
   *状态：已有 fix PR*。

9. **[#1011](https://github.com/nullclaw/nullclaw/pull/1011) `fix(agent): free parsed tool call when a later allocation fails`** —— `parseXmlToolCalls` 在 list append 失败时泄漏 `name` / `arguments` 内存。  
   *状态：已有 fix PR*。

10. **[#954](https://github.com/nullclaw/nullclaw/pull/954) `fix(channels): preserve outbound ownership on allocation failures`** —— 出站投递在分配失败时所有权处理不严，可能出现重复发送或泄漏。  
    *状态：已有 fix PR（前置 `7de30e25` 已合入主干）*。

---

## 6. 功能请求与路线图信号

由于 Issues 通道 24 小时无更新，**无法获取"新功能请求"原始诉求**，但可从 PR 标题/摘要推断项目的近期路线图：

| 信号 | 关联 PR | 解读 |
|---|---|---|
| **可配置记忆召回** | [#1001](https://github.com/nullclaw/nullclaw/pull/1001)（复活自 #979） | 暴露 `memory.auto_recall` / `recall_limit` / `max_context_bytes`，响应社区对"上下文窗口被旧对话淹没"的反复诉求 |
| **原生流式工具调用** | [#971](https://github.com/nullclaw/nullclaw/pull/971) | 解耦 native tool 与 stream 回调，是迈向**类 Anthropic/OpenAI 严格 JSON 工具调用协议**的关键一步 |
| **REPL 行编辑能力** | [#970](https://github.com/nullclaw/nullclaw/pull/970) | 引入零分配的 raw-mode 行编辑器，补齐交互式 CLI 与主流 agent 工具的体验差距 |
| **符号链接技能目录** | [#1003](https://github.com/nullclaw/nullclaw/pull/1003) | 为 skills 提供 `list` / 分类扫描的软链接支持，**降低用户配置门槛** |
| **MCP / 子代理 / 语音 / 硬件 子系统文档** | [#1008](https://github.com/nullclaw/nullclaw/pull/1008) | 一次性补齐四类新子系统的中英双语文档，**信号：这些能力已在代码中存在但缺乏对外曝光** |
| **诊断日志开关说明** | [#1007](https://github.com/nullclaw/nullclaw/pull/1007) | 文档明确"含内容日志请勿在生产开启"，提示存在**生产误用导致 token 泄漏**的风险面 |

> 综合判断：下一稳定版本将很可能围绕"**通道稳定性 + 记忆可控 + 流式原生工具调用 + 文档补齐**"四个维度打包发布。

---

## 7. 用户反馈摘要

**无新 Issue 数据，无法提炼实时用户痛点。**

仅从 PR 摘要中可间接观察到以下**部署侧真实场景**：
- Discord 部署中"机器人互相 @ 自己"导致死循环（[#1010](https://github.com/nullclaw/nullclaw/pull/1010)）
- Termux / Android 移动端用户被 DNS 解析失败卡住（[#966](https://github.com/nullclaw/nullclaw/pull/966)）
- macOS 终端用户看到流式输出首字节损坏（[#1006](https://github.com/nullclaw/nullclaw/pull/1006)）
- 长任务 / 工具密集场景下 prompt 爆炸与重复调用问题（[#987](https://github.com/nullclaw/nullclaw/pull/987)）

> ⚠️ 上述均来自 PR 作者复述，**未经过独立用户确认**，建议作为"潜在痛点"而非"已证实反馈"对待。

---

## 8. 待处理积压

| 项目 | 标题 | 创建时间 | 已等待天数 | 严重度 |
|---|---|---|---|---|
| [#953](https://github.com/nullclaw/nullclaw/pull/953) | recover gateway sockets with safe shutdown ownership | 2026-06-12 | ~114 天 | 🟠 高 |
| [#954](https://github.com/nullclaw/nullclaw/pull/954) | preserve outbound ownership on allocation failures | 2026-06-13 | ~113 天 | 🟡 中 |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | persist a scoped scheduler credential securely | 2026-06-16 | ~110 天 | 🟠 高（鉴权安全） |
| [#962](https://github.com/nullclaw/nullclaw/pull/962) | document and harden native Anthropic setup | 2026-06-18 | ~108 天 | 🟡 中 |
| [#963](https://github.com/nullclaw/nullclaw/pull/963) | document and harden Weixin iLink QR auth | 2026-06-18 | ~108 天 | 🟡 中 |
| [#966](https://github.com/nullclaw/nullclaw/pull/966) | secure buffered curl fallback on Android | 2026-06-19 | ~107 天 | 🟠 高（移动端可用性） |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | handle arrow keys in agent REPL | 2026-06-29 | ~97 天 | 🟢 低 |
| [#971](https://github.com/nullclaw/nullclaw/pull/971) | native tool calls during SSE streaming | 2026-06-29 | ~97 天 | 🟡 中（功能差异化） |
| [#987](https://github.com/nullclaw/nullclaw/pull/987) | loop hygiene for long local tool-heavy runs | 2026-08-15 | ~50 天 | 🟡 中 |
| [#1001](https://github.com/nullclaw/nullclaw/pull/1001) | add configurable auto-recall, recall_limit, max_context_bytes | 2026-09-24 | ~10 天 | 🟠 高（社区反复诉求） |

> 🔔 **提醒**：全部 20 个 PR 均超过 0 评论、0 👍，且单一作者占比 100%。**维护者侧应主动指派评审或合并策略**，否则社区参与度将持续走低，进而影响后续 Issue/PR 的产生意愿。

---

### 附录：日报数据快照

```
统计窗口:  过去 24 小时 (截至 2026-10-04)
Issues:    新开/活跃 0 | 已关闭 0
PRs:       待合并 20 | 已合并/关闭 0
Releases:  0
独立贡献者: 1 (vernonstinebaker)
互动数:     评论 0 / 👍 0
```

*报告生成时间：2026-10-04 · 基于 GitHub 公开数据*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-10-04** | **数据来源：GitHub (nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 项目今日活跃度较低，社区处于相对静默状态。过去 24 小时内仅有 1 条新开 Issue，无任何 PR 合并/关闭，无新版本发布。从健康度角度看，这种"零 PR + 单一 Issue"的模式表明项目可能处于功能稳定期或维护者休假期间，但也意味着用户报告的问题响应可能存在延迟。值得警惕的是，该唯一 Issue 涉及核心命令 `ironclaw serve` 在 macOS 平台完全无法启动的严重问题，目前尚无任何评论或修复迹象，需重点关注。

---

## 2. 版本发布

**无新版本发布。** 当前最新稳定版本仍为 1.4.1（官方安装脚本发布版本）。

---

## 3. 项目进展

**今日无任何 PR 合并或关闭。** 项目代码层面今日无实质性推进，commit/PR 行在空仓状态。建议维护者评估是否需要主动触发 issue #8122 的修复工作流。

---

## 4. 社区热点

**今日无热门讨论。** 

- 唯一活跃 Issue [#8122](https://github.com/nearai/ironclaw/issues/8122) 互动量为 0（评论 0，👍 0），尚未形成社区讨论热度。
- 通常"0 评论 + 0 点赞"的状态表明：① 报告时间尚短（仅 1 天），用户尚未发现/围观；② 或 macOS 用户群体在 IronClaw 社区中占比较低，未引起广泛共鸣。

---

## 5. Bug 与稳定性

### 🔴 高优先级（影响核心功能可用性）

**[Issue #8122](https://github.com/nearai/ironclaw/issues/8122) - `ironclaw serve` 在 macOS local-dev 配置下启动失败**

| 项目 | 详情 |
|------|------|
| **严重程度** | 🔴 高（核心命令完全无法启动） |
| **影响范围** | macOS Apple Silicon (aarch64-apple-darwin), Darwin 27.0.0 |
| **影响配置** | `local-dev` 启动 profile + `web-app` 扩展 |
| **错误信息** | `credential read failed: BackendUnavailable for extension web-app` |
| **环境健康度** | `ironclaw doctor` 8/8 通过（环境自检正常，问题出在运行时） |
| **复现路径** | 官方安装脚本安装的 1.4.1 + `cargo install --path` 构建的 1.4.0 均复现 |
| **是否有 Fix PR** | ❌ 无 |

**问题定位分析**：错误关键词 "BackendUnavailable" + "credential" + "extension web-app" 暗示问题出在密钥/凭据后端服务（如 keyring、Secret Service 或类似 macOS Keychain 集成层）在 `local-dev` 模式下无法初始化。这可能是：
- macOS 安全框架（TCC/Keychain Access）在某些环境下的权限被拒；
- 扩展加载器与凭据后端握手时的协议不匹配；
- 新版本（1.4.x）引入的扩展架构回归。

由于该问题影响 macOS 用户的本地开发核心流程，且影响"所有"使用 `local-dev` 配置文件启动的用户，建议维护者优先排查。

---

## 6. 功能请求与路线图信号

今日无新增功能请求类 Issue。基于 #8122 的技术细节推测，**macOS 本地开发体验的稳定性**可能是下一版本（假设的 1.4.2 或 1.5.0）的隐含改进方向——尤其是扩展凭据后端的跨平台一致性。

---

## 7. 用户反馈摘要

**唯一反馈来源：Issue #8122 (rahhbster)**

- **使用场景**：macOS 本地开发，通过官方安装脚本或源码编译部署 IronClaw 1.4.x。
- **痛点**：核心服务无法启动；`doctor` 检测通过但实际服务崩溃，**自检结果与实际可用性不一致**，给用户排查造成困惑（信任损耗）。
- **满意度**：无明确正面反馈，问题暴露出**诊断信息不足**的次生问题——用户仅能凭错误字符串推断原因，缺乏官方故障排查指南。
- **建议诉求**（隐含）：① 修复 macOS local-dev 启动问题；② 改进错误信息可读性；③ `doctor` 检查项应覆盖凭据后端可用性。

---

## 8. 待处理积压

虽然今日无新增长期未响应 Issue，但建议维护者关注：

| 优先级 | 事项 | 备注 |
|--------|------|------|
| 🔴 高 | [Issue #8122](https://github.com/nearai/ironclaw/issues/8122) | 新开即核心阻塞，24 小时内应有初步响应（确认/复现/标记 milestone） |
| ⚠️ 中 | 整体社区响应节奏 | 单日 0 PR + 0 关闭 Issue，建议确认维护者值班状态 |

---

## 📊 项目健康度评分（今日）

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 无 PR 活动 |
| 社区响应度 | ⭐⭐☆☆☆ | Issue 零互动 |
| 稳定性信号 | ⭐⭐⭐☆☆ | 暴露关键平台 Bug |
| 发布节奏 | ⭐⭐⭐⭐☆ | 1.4.1 近期稳定 |
| **综合** | **⭐⭐☆☆☆ 偏低** | 静默期，需主动响应核心 Bug |

---

*报告生成时间：2026-10-04 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-10-04**
**数据周期：过去 24 小时**

---

## 1. 今日速览

LobsterAI 项目今日活跃度处于**低位**。过去 24 小时内无新版本发布、无 PR 合并/关闭，6 条 Issues 均为**长期未响应的 stale issue**（创建于 2026 年 3 月），仅在昨日有少量评论更新；唯一的开放 PR 已挂起近 2.5 个月。整体来看，社区互动和代码迭代节奏显著放缓，项目处于**维护观望状态**，建议关注方注意维护者响应能力。

---

## 2. 版本发布

**无新版本发布**，本节省略。

---

## 3. 项目进展

**今日无任何 PR 被合并或关闭**，代码层面零推进。

唯一在跟踪的 PR：
- **#2374**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2374)）— `feat: add permanent setting to hide sidebar ad banner`
  - 创建于 2026-07-21，已挂起约 **75 天**仍未进入评审流程
  - 旨在为「设置 → 通用」添加永久关闭侧边栏广告横幅的开关，对应 Issue #2342

> ⚠️ 评估：项目今日在功能交付和缺陷修复上均**没有任何推进**，整体向前迈进程度为 **0**。

---

## 4. 社区热点

今日评论数最多的 Issues 集中在**用户入门引导**和**外部集成**两个方向：

| 排名 | Issue | 标题 | 评论数 | 👍 |
|------|-------|------|--------|------|
| 1 | [#884](https://github.com/netease-youdao/LobsterAI/issues/884) | 关于账户登录和付费加油包的问题 | 2 | 0 |
| 1 | [#885](https://github.com/netease-youdao/LobsterAI/issues/885) | 微信链接不可用 | 2 | 0 |
| 3 | [#867](https://github.com/netease-youdao/LobsterAI/issues/867) | autoDeleteNonPersonalMemories() 事务不一致 | 1 | 0 |
| 3 | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | EARS 原则 PRD 转换 + git worktree skill | 1 | 0 |
| 3 | [#879](https://github.com/netease-youdao/LobsterAI/issues/879) | SQLite 外键约束未启用导致数据库膨胀 | 1 | 0 |
| 3 | [#883](https://github.com/netease-youdao/LobsterAI/issues/883) | Windows 客户端所有斜杠命令失效 | 1 | 0 |

**诉求分析**：
- **#884** 反映出新手用户对**账户体系、付费规则、自定义 Model 与加油包积分的关系**存在认知盲区，说明产品文档/新手引导存在缺口。
- **#885** 涉及微信生态集成（典型渠道接入场景），可能直接影响营销与获客链路。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 影响范围 | 是否有 fix PR |
|------|-------|------|----------|---------------|
| 🔴 高 | [#879](https://github.com/netease-youdao/LobsterAI/issues/879) | SQLite（sql.js/WASM）**未启用外键约束**，`PRAGMA foreign_keys` 默认为 OFF；删除 session 不会级联删除 messages，导致数据库**持续膨胀** | 数据完整性、长期使用性能 | ❌ 无 |
| 🟠 中-高 | [#867](https://github.com/netease-youdao/LobsterAI/issues/867) | `autoDeleteNonPersonalMemories()` 方法存在事务不一致 | 记忆/会话数据正确性 | ❌ 无 |
| 🟠 中 | [#883](https://github.com/netease-youdao/LobsterAI/issues/883) | Windows 桌面客户端**所有斜杠命令完全失效**（`/status`、`/reasoning`、`/help`、`/commands`、`/whoami`、`/think` 等） | Windows 用户核心交互 | ❌ 无 |
| 🟡 中 | [#885](https://github.com/netease-youdao/LobsterAI/issues/885) | 微信链接不可用 | 微信渠道接入 | ❌ 无 |

> 📌 重点关注：**#879** 是潜在的长期数据卫生问题，伴随使用时长增加会逐步恶化，建议优先处理。

---

## 6. 功能请求与路线图信号

**用户提出的新功能/增强请求：**

- **#873**（[链接](https://github.com/netease-youdao/LobsterAI/issues/873)）— 给产品用 EARS 原则转化 PRD（适合产品 spec 输入给 AI），并新增研发常用 skill `git worktree`
  - 已被作者标记「和研发沟通过」，有一定落地基础
  - 信号：用户希望 LobsterAI 更深度地嵌入**研发工作流**（PRD→规范文档、git worktree）

- **PR #2374**（[链接](https://github.com/netease-youdao/LobsterAI/pull/2374)）— 永久隐藏侧边栏广告横幅
  - 解决现有方案只能临时关闭单条横幅的痛点
  - **可纳入下一版本概率较高**（已有 PR、面向用户痛点），但需维护者启动评审

**路线图判断**：短期内最可能被合并的是 **#2374**（实现简单、用户呼声明确），其余功能请求仍处于需求池阶段。

---

## 7. 用户反馈摘要

从 Issues 评论中可提炼以下真实用户声音：

- **入门门槛高（#884）**：用户对「登录 vs 不登录功能差异」「加油包积分用途」「与自配 Model 的关系」存在认知断层 —— 说明产品**价值主张传达不清**，文档/onboarding 需优化。
- **核心命令失效（#883）**：Windows 桌面端用户报告**所有斜杠命令均不可用**，体验类同「功能缺失」，属于严重可用性退化。
- **数据失控感（#879）**：技术用户注意到数据库无限增长，说明已有用户在使用中关注**长期数据管理**，对工具的可靠性提出更高期待。
- **场景化需求（#873）**：用户希望工具能贴合真实研发流程（PRD→EARS、git worktree），表明**深度专业用户**正在尝试将 LobsterAI 用于产研协作闭环。

整体满意度信号偏负面，主要因**响应缺失**导致问题长期悬而未决。

---

## 8. 待处理积压 ⚠️

**严重积压，建议维护者立即关注：**

| 类型 | 编号 | 标题 | 挂起时长 | 状态 |
|------|------|------|----------|------|
| PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | 隐藏侧边栏广告横幅 | ~75 天 | 待合并 |
| Issue | [#884](https://github.com/netease-youdao/LobsterAI/issues/884) | 账户登录与付费规则咨询 | ~193 天 | stale |
| Issue | [#885](https://github.com/netease-youdao/LobsterAI/issues/885) | 微信链接不可用 | ~192 天 | stale |
| Issue | [#867](https://github.com/netease-youdao/LobsterAI/issues/867) | 事务不一致 | ~193 天 | stale |
| Issue | [#873](https://github.com/netease-youdao/LobsterAI/issues/873) | PRD→EARS + git worktree | ~193 天 | stale |
| Issue | [#879](https://github.com/netease-youdao/LobsterAI/issues/879) | SQLite 外键未启用 | ~193 天 | stale |
| Issue | [#883](https://github.com/netease-youdao/LobsterAI/issues/883) | Windows 斜杠命令失效 | ~193 天 | stale |

> 📊 **健康度提示**：
> - **100%** 的活跃 Issue 已进入 stale 状态（≥6 个月无维护者响应）
> - **唯一 PR 处于长期挂起**（>2 个月）
> - **无任何 Issue 在 24h 内被关闭**
> - 综合判断：**社区响应健康度偏低**，建议项目方对长期 stale issue 做一次批量 triage（关闭/标记/分配），避免用户进一步流失。

---

*报告生成时间：2026-10-04 · 数据来源：GitHub REST API*

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

# CoPaw 项目动态日报
**报告日期：2026-10-04**

> **说明**：本期数据中所有 Issues / PRs 实际归属于 `agentscope-ai/QwenPaw` 仓库，可能为 CoPaw 的子仓库或合并后命名变更。下文沿用 issue 实际归属链接。

---

## 1. 今日速览

CoPaw（QwenPaw）今日活跃度处于较高水平：过去 24 小时新开/活跃 Issue **6 条**、关闭 Issue **1 条**、新提交 PR **9 条**（全部待合并）。社区讨论与代码提交在数量上呈"双轨并行"——尤其集中在**多模态能力一致性**、**会话/路由状态管理**与**OpenAI 兼容层兼容性**三大方向。无新版本发布，但 PR #8091 / #8090 / #8100 已分别与对应 Issue 形成闭环，修复响应链路清晰。整体来看项目处于活跃迭代、健康运转的状态。

---

## 2. 版本发布

**无新版本发布。** 当前主干指向 `a403b2433af6ac74404d69fc80a289658996226e`，最新已发版本为 `v2.2.1`（Issue #8101 提及）。

---

## 3. 项目进展

今日 **无 PR 被合并或关闭**，所有 9 个 PR 均处于 OPEN 状态。但从内容看，开发侧推进明显：

| PR | 主题 | 关联 Issue |
|---|---|---|
| [#8100](https://github.com/agentscope-ai/QwenPaw/pull/8100) | 使用 resolved 媒体能力代替 provider 原始记录 | 修复 #8093 |
| [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) | 识别新 GPT 模型的 `max_completion_tokens` | 修复 #8074 |
| [#8091](https://github.com/agentscope-ai/QwenPaw/pull/8091) | 侧边栏点击会话时记录 `lastActiveChatId` | 修复 #7661 |
| [#8098](https://github.com/agentscope-ai/QwenPaw/pull/8098) | 前台 chat 超时时返回显式 timeout 结果 | 提升稳定性 |
| [#8099](https://github.com/agentscope-ai/QwenPaw/pull/8099) | Qoder 启用自定义 provider & 上下文用量 | 增强 BYOK |
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | 将 `finish_reason=length` 暴露到 chat metadata | 关联 #8085 |
| [#8095](https://github.com/agentscope-ai/QwenPaw/pull/8095) | 跨 agent 消息归因到当前用户 | 修正聊天注册语义 |
| [#8097](https://github.com/agentscope-ai/QwenPaw/pull/8097) | PDF tool-result 回放测试用例 | 测试覆盖加固 |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | 在 chat meta 中持久化 spawn 父子链路 | 长期功能增强（已开 53 天） |

**关键观察**：今日 PR 与 Issue 一一对应的"修复闭环"比例较高（9 个 PR 中至少 4 个明确修复对应 issue），说明维护者对社区反馈响应快、命中准。项目向前推进了一小步，但因尚未合并，尚未落到可发版状态。

---

## 4. 社区热点

按评论数 / 互动量排序：

1. **[#7661 错误的创建新会话](https://github.com/agentscope-ai/QwenPaw/issues/7661)** — 5 条评论，今日最热。用户反复新建会话触发侧边栏自动派生新会话的复现链路清晰，社区关注点集中在**会话标识与路由**的语义一致性问题。已对应 PR #8091。
2. **[#7535 Add Element-specific compatibility to Matrix channel](https://github.com/agentscope-ai/QwenPaw/issues/7535)** — 2 条评论，已 **CLOSED**。Feature 请求（恢复密钥设备验证 + MAS OIDC 登录），暗示 Matrix 集成正逐步对齐 Element 客户端规范。
3. **[#8074 OpenAI provider gpt-6 连接测试失败](https://github.com/agentscope-ai/QwenPaw/issues/8074)** — 2 条评论。`_uses_max_completion_tokens` 白名单过时，社区已指出 `gpt-6` 系模型急需纳入。已对应 PR #8090。
4. **[#8101 /chat/<id> 深链接跨 agent 失效](https://github.com/agentscope-ai/QwenPaw/issues/8101)** — 1 条评论（今日新开）。同 agent 与跨 agent 两类深链接均失败，反映 **会话-路由解析层**存在系统性缺陷。

**诉求归纳**：用户最关心的是"会话、路由、provider"三条主干链路上的语义一致性与向后兼容。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue | 标题 | 是否有 Fix PR | 影响面 |
|---|---|---|---|---|
| 🔴 严重 | [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) | Console 启动闪屏无 retry/error surface，WebView2 缓存陈旧可永久阻塞启动 | ❌ 暂无 | 控制台可用性，可能造成"看似死机" |
| 🔴 严重 | [#8092](https://github.com/agentscope-ai/QwenPaw/issues/8092) | Ali-style 网关将 `data_inspection_failed` 误判为 `bad_request`，无重试、无 fallback，整轮被杀死 | ❌ 暂无 | 通过阿里风格网关的所有模型调用 |
| 🟠 重大 | [#8093](https://github.com/agentscope-ai/QwenPaw/issues/8093) | 运行时拒绝多模态输入，与 catalog/prober 声明 `supports_multimodal=true` 矛盾（mimo-v2.6-flash, glm-5.3-flash） | ✅ PR #8100 | 多个声称支持图像的模型实际不可用 |
| 🟠 重大 | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | OpenAI provider 对 `gpt-6` 家族连接测试 400 | ✅ PR #8090 | 用户无法使用下一代 GPT 模型 |
| 🟡 一般 | [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | 新建会话被错误派生额外会话 | ✅ PR #8091 | UI 体验，会话列表混乱 |
| 🟡 一般 | [#8101](https://github.com/agentscope-ai/QwenPaw/issues/8101) | `/chat/<id>` 深链接跨/同 agent 均失效 | ❌ 暂无 | 集成方外部跳转场景 |

**小结**：6 个活跃 Issue 中 5 个为 Bug，3 个已有现成修复 PR 待合并；剩 3 个（#8094、#8092、#8101）建议维护者优先处置。

---

## 6. 功能请求与路线图信号

- **#7535（已关闭）**：[Matrix Element 兼容性](https://github.com/agentscope-ai/QwenPaw/issues/7535) — 暗示 Matrix channel 计划升级到 recovery-key + MAS OIDC。但仅"已关闭"无明确合入 PR，需关注后续动作。
- **#7004（PR）**：[在 chat meta 中持久化 spawn 父子链路](https://github.com/agentscope-ai/QwenPaw/pull/7004) — 解决 `spawn_subagent` 的 `allowed_tools` / `skills` 白名单仅在请求上下文传递、不持久化的问题。这是面向 **subagent 权限审计与 API 暴露** 的中长期能力铺垫，建议纳入下个版本路线图。
- **#8099**：[Qoder 启用自定义 provider & 上下文用量](https://github.com/agentscope-ai/QwenPaw/pull/8099) — BYOK 与上下文可见性双增强，是企业/自部署用户高频诉求。

**信号**：路线图方向偏向「能力可见性 + 多 provider 兼容 + 权限/审计」三角。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与摘要：

- **真实痛点**：
  - "每次新建会话再提问，历史列表就被污染多一个条目"——会话生命周期语义模糊（#7661）。
  - "升级完 WebView2 缓存后 Console 一直 LOADING，没法重试也没错误提示"——升级路径缺少回退机制（#8094）。
  - "明明 catalog 写支持图像，模型却被 view_image 拒收"——能力声明与运行时门控存在双源真相（#8093）。
  - "gpt-6 一连就 400，连测试都跑不通"——兼容性测试链路未覆盖新模型族（#8074）。

- **使用场景**：自部署（pip install）用户、Windows + WebView2 用户、容器化部署 + 网关代理用户、Qoder IDE 集成用户均提出具体场景。

- **满意度信号**：维护者近 24h 在 PR 命名规范、commit 信息、与 issue 双向引用方面表现专业，**用户感知正面**；但 24 天仍未关闭的 #7661 与 53 天未合并的 #7004 会拉低"长期问题处理"的信心。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 开仓时长 | 建议 |
|---|---|---|---|---|
| [#7661](https://github.com/agentscope-ai/QwenPaw/issues/7661) | Issue | 错误的创建新会话 | **24 天** | 已有 PR #8091 等待合并，建议优先 review 并合入 |
| [#7004](https://github.com/agentscope-ai/QwenPaw/pull/7004) | PR | persist spawn parent-child linkage in chat meta | **53 天** | 长期未合入，首次贡献者，建议明确反馈或合入 |
| [#7535](https://github.com/agentscope-ai/QwenPaw/issues/7535) | Issue | Matrix Element 兼容性 | 已关闭但无对应 PR 关联 | 确认

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-04

> 数据范围：2026-10-03 ~ 2026-10-04｜分析对象：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日保持高强度迭代节奏，过去 24 小时共更新 50 条 Issues 与 50 条 PR，整体活跃度极高。**安全（domain:security）与运行时健壮性**是今日的两大主轴——围绕子进程内存看门狗、OIDC 凭据编码、委托执行授权、共享内存平面隔离、macOS Seatbelt 沙箱等多个高风险面集中出现变更。当日没有新版本发布，但 v0.8.6 收尾工作（Slack 状态、zerocode cwd 回归、shell 命令拦截）与 v0.9.0 重构前置（gateway 独立进程、Schema V4、ZeroRelay 主体透传）并行推进；项目整体处于**"双版本夹击 + 安全加固密集"**的稳健节奏。

---

## 2. 版本发布

**今日无新版本发布。**

下游可关注的版本节点：
- **v0.8.6（收尾中）**：涉及 #7432 Tracker、#11387（zerocode cwd 回归修复已关闭）、#11416（Slack "is thinking" 状态）。
- **v0.9.0（规划阶段）**：核心议题包括 #11002（zeroclaw-gw 独立进程）、#8310（Schema V4 破坏性裁剪）、#11239（owned session 内存隔离）。

---

## 3. 项目进展

过去 24 小时**已关闭 7 条 Issue**，以下为对项目推进具有代表性的条目：

| 编号 | 标题 | 影响 | 链接 |
|---|---|---|---|
| #7108 | CI 缓存与关键路径优化（15-20 min → 目标压缩） | CI 吞吐提升，缩短反馈循环 | [Issue #7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) |
| #10734 | `RpcDispatcher::process_line` Windows 栈溢出 | 修复 Advisory nextest 在 Windows 上的真崩溃（0xc00000fd），栈帧贴近 2MB 警戒线 | [Issue #10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) |
| #11387 | zerocode 启动目录 cwd 回归 | 修复 #10609 的复发，CLI 启动语义回归被再次堵上 | [Issue #11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) |
| #10701 | 图像附件使整个历史缓存前缀失效 | 兼容 provider 的滚动断点修复已在 #10623 合并 | [Issue #10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) |
| #10662 | Anthropic OAuth 系统前缀缓存标记占用断点槽位 | 缓存效率优化 | [Issue #10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) |
| #10293 | `sessions_send` 生命周期语义定义 | 工具契约层面"撒谎"问题被清理 | [Issue #10293](https://github.com/zeroclaw-labs/zeroclaw/issues/10293) |

PR 维度，今日有 **1 条合并/关闭**，其余 49 条仍处待合并状态（详见第 6、8 节）。整体看，**测试基础设施与 CI 健壮性有明显进展**，但大型功能 PR 多处于"待 maintainer 审阅"阶段，合并吞吐是当前瓶颈。

---

## 4. 社区热点

按 24 小时评论活跃度排序（取前 5）：

1. **#9965** — 运行时测试夹具强化（Parallel Runtime Test gate 下写出可执行垫片再 spawn）
   - 评论 13 次｜[Issue #9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
   - 诉求：解决 cron 测试在多线程主进程内写 shim 后 spawn 导致的脆弱性。
2. **#7108** — CI 关键路径加速（已关闭）｜[Issue #7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108)
   - 诉求：小改动也要等 15–20 分钟，开发者期望更快的反馈。
3. **#10734** — Windows RpcDispatcher 栈溢出（已关闭）｜[Issue #10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734)
   - 诉求：栈使用已逼近 2MB 警戒线，需要主动优化而非被动扩容。
4. **#9799** — 长生命周期 ephemeral 守护进程多核 CPU 自旋
   - 评论 7 次｜[Issue #9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799)
   - 诉求：17 小时 140–177% CPU 占用，存在已关闭的 Telegram HTTPS 套接字与重复的轮询痕迹。
5. **#6105** — Agent 无 cron job 自身上下文（已运行 5 个月）｜[Issue #6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105)
   - 诉求：cron 触发的 agent 无法引用自己已发出的消息，影响"提醒类"等真实场景。

**社区情绪画像**：开发者最不满的是**测试与 CI 的脆弱性**和**长生命周期进程的稳定性**，同时高度关注安全与沙箱边界。

---

## 5. Bug 与稳定性

按严重程度排列（取关键条目）：

| 等级 | 编号 | 标题 | 影响范围 | 是否已有 fix PR | 链接 |
|---|---|---|---|---|---|
| S0 | [#11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239) | owned session 经 `spawn_subagent` / `execute_pipeline` 进入共享内存平面 | 跨主体数据泄露，v0.9.0 | 进行中（属于 #10391 大 PR 范畴） |
| S1 | [#9799](https://github.com/zeroclaw-labs/zeroclaw/issues/9799) | ephemeral daemon 持续多核 CPU 自旋 | 资源/可用性 | 暂无独立 PR |
| S1 | [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC 无法访问 channel-backed tools | 工作流阻塞 | 进行中 |
| S1 | [#10536](https://github.com/zeroclaw-labs/zeroclaw/issues/10536) | macOS Seatbelt 忽略 `allowed_roots` | 安全/工作流阻塞 | 暂无 |
| S1 | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite 每轮重写全部消息 → `created_at` 一致化 | 时间序列数据丢失 | 暂无 |
| S1 | [#11478](https://github.com/zeroclaw-labs/zeroclaw/issues/11478) | 图像 >64KB 静默截断 | 跨 provider 通用问题 | 暂无（needs-repro） |
| S2 | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | Windows 栈溢出 | 已关闭 ✅ | 修复随关闭 Issue 已落地 |
| S2 | [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode cwd 回归 | 已关闭 ✅ | 已修 |
| S2 | [#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701) | 图像前缀失效 | 已关闭 ✅ | 已在 #10623 |
| S2 | [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) | Anthropic OAuth 缓存标记 | 已关闭 ✅ | 已修 |
| S3 | [#11416](https://github.com/zeroclaw-labs/zeroclaw/issues/11416) | Slack "is thinking" 状态消失（v0.8.5 起） | UX 退化 | 暂无（v0.8.6 回归候选） |
| — | [#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418) | ZeroCode "Copy" 一键失效 | 工作流阻塞（用户报告 S1） | 暂无（needs-repro） |

**关键观察**：今日报告的"红线级"安全 Bug 集中于**多主体边界与共享资源隔离**——#11239（memory plane）、#10536（Seatbelt）、#11061（即便白名单也拦截高危 shell 命令，参见 [#11061](https://github.com/zeroclaw-labs/zeroclaw/pull/11061)）。这与 ZeroRelay 主体透传工作（#10766）形成同主题协同。

---

## 6. 功能请求与路线图信号

按主线趋势归类：

### 🛡️ 安全与多租户
- **#10766 ZeroRelay 主体透传**：把经过 relay 的 mTLS 客户端从 `shared_operator` 还原为真实主体，是 hosted/multi-user 的前置条件。｜[Issue #10766](https://github.com/zeroclaw-labs/zeroclaw/issues/10766)
- **#10767 ZeroRelay 前门自 DoS 加固**：在浏览器前门大规模开放前必须完成。｜[Issue #10767](https://github.com/zeroclaw-labs/zeroclaw/issues/10767)
- **#11239 owned session 内存隔离**：v0.9.0 关键，已与 #10391 联动。｜[Issue #11239](https://github.com/zeroclaw-labs/zeroclaw/issues/11239)
- **#10550 技能 HTTP DNS 解析限时** + 注入可控解析器用于端到端测试。｜[Issue #10550](https://github.com/zeroclaw-labs/zeroclaw/issues/10550)

### ⚙️ 运行时与网关
- **#11002 zeroclaw-gw 独立 IPC 客户端**：完成 v0.9.0 的 Phase 3 D3。｜[Issue #11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002)
- **#10892 规范 config generation + 按目标应用结果账本**：为后续 live-apply 消费者打地基。｜[Issue #10892](https://github.com/zeroclaw-labs/zeroclaw/issues/10892)
- **#11456 子进程内存看门狗（PR）**：native shell / skill 子进程的 RSS + 后代采样。｜[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)

### 🧠 模型路由
- **#7951 + #11516 effort-based local/cloud 路由**：简单/延迟敏感 turn 留在本地，困难 turn 升级云端。
  - 关联：｜[Issue #7951](https://github.com/zeroclaw-labs/zeroclaw/issues/7951) ｜[PR #11516](https://github.com/zeroclaw-labs/zeroclaw/pull/11516)

### 🧹 Schema V4 破坏性裁剪
- **#8310** 清理死代码、惰性键、SaaS、CLI 包装层。｜[Issue #8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310)

### 🪟 Windows 文件与路径修复批处理
- **#11425** 跟踪 10 个相关 PR，统一合入。｜[Issue #11425](https://github.com/zeroclaw-labs/zeroclaw/issues/11425)

**最有可能进入下一版本（v0.8.6）**：Slack "is thinking" 状态回归（#11416）、zerocode Copy 按钮（#11418，needs-repro）、相关文档/追踪器收口。**v0.9.0 候选**：独立 gateway、Schema V4、ZeroRelay 主体透传与安全加固。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

- **🤖 自动化场景的"自我引用"缺失**：用户在 #6105 中反馈，希望 agent 能引用自己通过 cron 已发出的消息（例如"我之前提醒过你……"），目前完全无上下文。
- **🔁 长跑 daemon 不可控**：#9799 显示用户真实运行 17 小时的 ephemeral daemon，CPU 占用 140–177%，背后是未关闭的 Telegram HTTPS 套接字与高频轮询。意味着生产化部署对守护进程可观测性有强诉求。
- **🖼️ 多模态截断**：#11478 报告 JPEG 139KB 时只能读到顶部，下半部分被静默丢弃。说明图像内联路径缺乏尺寸保护，影响 OCR/看图等真实场景。
- **📎 zerocode UX 退化**：#11387（已修）与 #11418（未修）说明 TUI 工作流存在反复的体验回退，用户对"启动目录"和"一键复制"这种小但关键的功能高度敏感。
- **💬 Slack 状态退化**：#11416 自 v0.8.5 起 Slack 线程里不再显示"is thinking…"，对依赖状态反馈的运营场景是可见退化。
- **⏱️ CI 等待时长**：#7108 揭示开发者情绪——小改动也要 15–20 分钟，反映出社区对**开发者体验（DX）**的明确不满。

**整体满意度倾向**：稳定性类问题获得快速修复（如 #11387、#10734、#10701），但**多租户安全**、**长跑守护进程**、**TUI UX 小细节**三类仍有明显缺口。

---

## 8. 待处理积压

> 提醒维护者关注的"长期未响应/高风险待处理"条目：

| 编号 | 标题 | 创建日期 | 状态 | 链接 |
|---|---|---|---|---|
| [#6105](https://github.com/zeroclaw-labs/zeroclaw/issues/6105) | Agent 缺少 cron 上下文（p2，已运行 5+ 个月） | 2026-04-25 | in-progress | 仍无合入 PR |
| [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC 无法访问 channel-backed 工具（p1） | 2026-08-21 | in-progress | 影响真实工作流 |
| [#105

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*