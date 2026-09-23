# OpenClaw 生态日报 2026-09-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-23 02:50 UTC

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

**日期：2026-09-23**
**数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)**

---

## 1. 今日速览

OpenClaw 仓库过去 24 小时保持极高活跃度：Issues 更新 500 条（活跃 470 / 已关闭 30），PR 更新 500 条（待合并 349 / 已合并或关闭 151），但**今日无新版本发布**。Issue 流量主要由 P0/P1 级别的稳定性与可靠性缺陷驱动，集中暴露在 Gateway 内存治理、Codex 集成回归、Telegram/iMessage/LINE 通道的出站投递死信以及子代理会话状态丢失等长期议题上。维护者侧仍以"分类、留 PR、等待作者补充证据"为主，多个 P0 修复 PR 仍处于 `📣 needs proof` 阶段，尚未进入合并通道，整体呈现"问题发现快、修复确证慢"的工程节奏。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并或关闭的 PR 中，关注度较高的修复与重构已经入库或在合并边缘：

- **[#130722](https://github.com/openclaw/openclaw/pull/130722) — `fix(agents): preserve reply targets and voice mode on completed replies`**（XL，P1，🦐 gold shrimp）。覆盖 17+ 通道与 40+ 扩展，针对"已完成回复丢失 reply target、媒体排队丢失回复目标与语音模式"的回归。状态 `👀 ready for maintainer look`，证据齐全，是本批 PR 中跨面最广的一笔修复。
- **[#156071](https://github.com/openclaw/openclaw/pull/156071) — `refactor(gateway): consolidate session method policy`**（已关闭，M，🦪 silver shellfish）。Gateway 内部 6 处方法分类集合被合并为一处，已关闭；属于代码卫生层面的清理。
- **[#124517](https://github.com/openclaw/openclaw/pull/124517) — `fix(line): a reply is lost or duplicated when a crash interrupts its delivery`**（XL，P1，🐚 platinum hermit）。LINE 通道在崩溃窗口期出现回复丢失或重复，与 PR #124464（推送级重试）和 #102279（reply-token 窗口）形成完整防御层。
- **[#132724](https://github.com/openclaw/openclaw/pull/132724) — `fix(line): honor the configured outbound message length`**（M，P2，🐚 platinum hermit）。修复 `channels.line.textChunkLimit` 配置错误导致 Gateway 无法启动的问题。
- **[#132769](https://github.com/openclaw/openclaw/pull/132769) — `fix(line): apply a group's mention requirement to every message`**（L，P2，🐚 platinum hermit）。LINE 群组 `requireMention` 仅文本生效，扩展至图片、视频、音频、文件、贴纸、位置等所有消息类型。
- **[#135895](https://github.com/openclaw/openclaw/pull/135895) — `feat(nextcloud-talk): support inbound attachments`**（XL，P2，🐚 platinum hermit）。Nextcloud Talk 文件分享与语音消息接入共享入站管线。
- **[#119289](https://github.com/openclaw/openclaw/pull/119289) — `fix(imessage): thread replies with thread_originator_guid`**（M，P2，🧂 unranked krab）。修复 iMessage 回复在 Messages.app 中显示为线程化回复。
- **[#129635](https://github.com/openclaw/openclaw/pull/129635) — `fix: sequential subagent workflows stop after the first wave`**（XL，P2，🦪 silver shellfish）。修复顺序子代理工作流在第一波后停止、不再生成后续工作的缺陷。
- **[#146721](https://github.com/openclaw/openclaw/pull/146721) — `refactor: reuse shared deferred promises in core and plugin tests`**（L，P2，🐚 platinum hermit）。测试基础设施层面的共享 Promise 重构。
- **[#119686](https://github.com/openclaw/openclaw/pull/119686) — `fix(media): retry against the original file when Wikimedia rejects a thumbnail width`**（L，P2，🐚 platinum hermit）。Wikimedia 缩略图白名单失败时回退到原图重试。
- **[#122067](https://github.com/openclaw/openclaw/pull/122067) — `test(state): verify media migration before database reopen`**（XL，P1，🐚 platinum hermit）。修复媒体迁移回归检测在 reader 之后执行、可隐藏未完成 Doctor 迁移的盲点。
- **[#68236](https://github.com/openclaw/openclaw/pull/68236) — `test(auth): add oauth e2e regression coverage`**（L，P2，🧂 unranked krab）。OAuth E2E 回归覆盖。

整体看：**通道可靠性（LINE / iMessage / Telegram）**是本批最显著的修复方向，**子代理编排**与**测试基础设施**获得较多关注，而 2026.9.4 → 2026.9.5 升级窗口期的多项 P0 修复仍处于"待证据"阶段。

---

## 4. 社区热点

今日讨论最活跃的议题，反映出用户的核心痛点集中在"基础设施长期不稳定"：

1. **[#91588](https://github.com/openclaw/openclaw/issues/91588) — Gateway 内存泄漏：RSS 从 350MB 涨至 15.5GB**（37 评论，1 👍，P0，🦪 silver shellfish，maturity:stable）。本月最热讨论，触发 launchd-handoff 反复重启循环，是 OpenClaw 生产部署的核心障碍。
2. **[#44925](https://github.com/openclaw/openclaw/issues/44925) — 子代理完成结果静默丢失**（29 评论，2 👍，P1，🦞 diamond lobster）。E31/E42/E45 等失败码下无重试、无通知、无自动重启。
3. **[#126360](https://github.com/openclaw/openclaw/issues/126360) — `AgentSelectionRequiredError` 在显式多 agent 配置下刷屏日志**（18 评论，P1，🦪 silver shellfish）。
4. **[#97616](https://github.com/openclaw/openclaw/issues/97616) — Hook/工具子进程未被回收，形成僵尸进程累积**（16 评论，1 👍，P1，🦪 silver shellfish）。
5. **[#148707](https://github.com/openclaw/openclaw/issues/148707) — 2026.9.4 回归：同会话第二次运行导致进行中的回合被替换，回复丢失**（15 评论，P1，🦪 silver shellfish）。
6. **[#79902](https://github.com/openclaw/openclaw/issues/79902) — 在 database-first runtime 上为高级用户提供 SQLite 转写/会话缝**（14 评论，2 👍，P3，🌊 off-meta tidepool）。
8. **[#74586](https://github.com/openclaw/openclaw/issues/74586) — AM 嵌入式运行中断 memory_search 工具调用，错误归类为超时**（14 评论，3 👍，P2，🦪 silver shellfish）。
9. **[#136183](https://github.com/openclaw/openclaw/issues/136183) — 2026.8.1 回归：SSH 命令执行器挂起，等待服务器横幅时被 SIGTERM 杀死**（13 评论，P1，🦪 silver shellfish）。
10. **[#136311](https://github.com/openclaw/openclaw/issues/136311) — memory-core：Gateway 每次启动都重新获取重索引锁，导致 19 GB 孤立 temp DB 累积**（12 评论，P1，🐚 platinum hermit）。

**诉求分析**：用户关注焦点高度集中在**长期运行的可靠性**，而非新功能。生产环境升级窗口（2026.8.x → 2026.9.x）反复触发回归，是社区怨气的主要来源。bot 运营商（家庭+商业双重场景）尤其关注 Telegram、Memory-core、Codex 集成路径的稳定性。

---

## 5. Bug 与稳定性

按严重程度排列的关键 Bug：

### P0（最高优先级，发布阻塞）

| Issue | 标题 | 是否已有修复 PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 350MB → 15.5GB | ❌ 无 fix PR |
| [#152689](https://github.com/openclaw/openclaw/issues/152689)（已关闭）| 2026.9.5 后 Codex resident catalog 重试循环填满 os.tmpdir()（342 MB/次） | ❌ 无新 fix PR |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows de-DE 2026.8.2 升级遗留 Doctor 维护阻塞与遗留 workspace 状态 | ❌ 无 fix PR |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 订阅型 provider 的 billing cooldown 在故障结束后仍持续（5 小时窗口，无探针恢复、无手动重置） | ❌ 无 fix PR |
| [#154381](https://github.com/openclaw/openclaw/issues/154381) | 2026.9.4 updater 无法触达 2026.9.5 超时修复（候选校验仍卡 300 秒） | ❌ 无 fix PR |
| [#119565](https://github.com/openclaw/openclaw/issues/119565) | 并发 MCP 调用 + Codex 原生 hooks 导致近线性内存放大直至 OOM | ❌ 无 fix PR |

### P1（严重，影响核心功能）

- **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — 子代理完成静默丢失（message-loss + session-state）| ❌ 无 fix PR
- **[#126360](https://github.com/openclaw/openclaw/issues/126360)** — `AgentSelectionRequiredError` 在显式所有权下刷屏日志 | ❌ 无 fix PR
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook/工具子进程未回收形成僵尸累积（crash-loop）| ❌ 无 fix PR
- **[#148707](https://github.com/openclaw/openclaw/issues/148707)** — 2026.9.4 回归：同会话并发回合导致 tool authority snapshot 丢失，回复丢失 | ❌ 无 fix PR
- **[#136183](https://github.com/openclaw/openclaw/issues/136183)** — 2026.8.1 回归：SSH 命令执行器挂起 | ❌ 无 fix PR
- **[#136311](https://github.com/openclaw/openclaw/issues/136311)** — memory-core 重索引锁僵死，19 GB 孤立 temp DB | ❌ 无 fix PR
- **[#125570](https://github.com/openclaw/openclaw/issues/125570)** — Skill Workshop update 应用覆盖实时 skill description，破坏路由（data-loss）| ❌ 无 fix PR
- **[#142336](https://github.com/openclaw/openclaw/issues/142336)** — 核心 `/dashboard` 屏蔽 Telegram Mini App launcher（2026.9.2+ 回归）| ✅ 有关联 PR open
- **[#118185](https://github.com/openclaw/openclaw/issues/118185)** — 单个 claude-cli 回合被两个 writer 双重写入，回复看起来像回答两次 | ✅ 有关联 PR open
- **[#121617](https://github.com/openclaw/openclaw/issues/121617)** — Post-compaction "Already compacted" 守卫错误将"无可压缩"归类为终态失败 | ✅ 有关联 PR open
- **[#114154](https://github.com/openclaw/openclaw/issues/114154)** — bundle-mcp 工具通过策略但 agent 会话永不绑定它 | ❌ 无 fix PR
- **[#134993](https://github.com/openclaw/openclaw/issues/134993)** — 2026.8.1 升级后大 skill/agent 集群下 Gateway 单核 CPU 满载（busy loop）| ❌ 无 fix PR
- **[#115546](https://github.com/openclaw/openclaw/issues/115546)** — CLI 预算压缩：超时远早于截止（4.9s–50s），大会话 100% 失败 | ❌ 无 fix PR
- **[#135858](https://github.com/openclaw/openclaw/issues/135858)** — opencode-go 本地目录快照不投影 provider.npm→api 覆盖 | ❌ 无 fix PR
- **[#135704](https://github.com/openclaw/openclaw/issues/135704)** — iMessage 带 reply_to_guid 的反射绕过 echo 缓存 | ❌ 无 fix PR
- **[#99947](https://github.com/openclaw/openclaw/issues/99947)** — codex harness 镜像会话历史读取失败，单次清理关闭共享 app-server 客户端 | ✅ 有关联 PR open
- **[#134925](https://github.com/openclaw/openclaw/issues/134925)** — Gateway 主线程在 ARM64/Pi 上每次 agent 回合 ~100% CPU | ❌ 无 fix PR
- **[#136262](https://github.com/openclaw/openclaw/issues/136262)** — openai-completions 流式偶发裸 text_delta 重放累积文本（n → 2n → n 震荡）| ✅ 有关联 PR open
- **[#125333](https://github.com/openclaw/openclaw/issues/125333)** — totalTokens 膨胀在 2026.8.1-beta.2 仍复现，#123065 修复仅覆盖 `api === "cli"` | ✅ 有关联 PR open
- **[#126246](https://github.com/openclaw/openclaw/issues/126246)** — Telegram 持久化出站投递卡在 `send_attempt_started` 重启即丢失 | ❌ 无 fix PR
- **[#125764](https://github.com/openclaw/openclaw/issues/125764)** — Telegram 适配器网络失败出站仅重试一次即永久死信 | ❌ 无 fix PR
- **[#120162](https://github.com/openclaw/openclaw/issues/120162)** — safeguard 压缩中 qualityGuard 审计重试与摘要共享同一超时预算 | ❌ 无 fix PR
- **[#140129](https://github.com/openclaw/openclaw/openclaw/issues/140129)** — 2026.9.2 Anthropic 缓存卡在 ~46k tools+system 前缀 | ❌ 无 fix PR
- **[#120600](https://github.com/openclaw/openclaw/issues/120600)** — 沙箱 Codex app-server 运行时 AGENTS.md 未送达模型 | ✅ 有关联 PR open
- **[#128067](https://github.com/openclaw/openclaw/issues/128067)** — beta.7 田野报告：6 类可靠性缺陷（持久化、投递、重启恢复）+ 3 类次要 | ❌ 无 fix PR

### P2（中等严重）

- **[#74586](https://github.com/openclaw/openclaw/issues/74586)** — AM 嵌入式运行中断 memory_search
- **[#49381](https://github.com/openclaw/openclaw/issues/49381)** — Feishu：rate limit 主模型故障切换后重复最终回复
- **[#112349](https://github.com/openclaw/openclaw/issues/112349)** — memory-core 梦中：深度相位晋升忽略 minRecallCount / minUniqueQueries
- **[#96975](https://github.com/openclaw/openclaw/issues/96975)** — 子代理完成回灌到父上下文
- **[#112313](https://github.com/openclaw/openclaw/issues/112313)** — 死信出站投递队列条目永久：每个 accessor 过滤 status='pending'
- **[#140129](https://github.com/openclaw/openclaw/issues/140129)** — Anthropic 缓存前缀卡死
- **[#

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析报告

**数据周期：2026-09-22 至 2026-09-23（过去 24 小时）**
**覆盖项目：10 个** —— OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw

---

## 1. 生态全景

本周期生态呈现明显的**两极分化**：旗舰项目（OpenClaw / CoPaw / ZeroClaw / Hermes Agent / NanoBot）处于"高吞吐修复 + 路线图收敛"的并行阶段，单日吞吐 30–500 条工单、合并率显著高于均值；而 NanoClaw / LobsterAI 处于"集中收尾回归"的中速节奏，PicoClaw / IronClaw / ZeptoClaw / Moltis / NullClaw / TinyClaw 等轻量项目则陷入**维护者响应缺口**，全部活动几乎仅靠 Dependabot 或 stale-bot 维持。共同的技术痛点已从"功能缺失"转向**生产级可靠性**——长会话压缩、Provider 缓存、通道投递死信、Windows 兼容性成为跨项目的结构性议题。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃 / 关闭 | PRs 待合并 / 关闭 | 新版本 | 健康度 | 阶段判断 |
|---|---|---|---|---|---|
| **OpenClaw** | 470 / 30 | 349 / 151 | ❌ | ⭐⭐⭐⭐☆ | 旗舰 · 高速迭代 |
| **CoPaw**（QwenPaw） | 12 / 29 | 23 / 23 | ❌（v2.2.2 备版中）| ⭐⭐⭐⭐⭐ | 旗舰 · 高闭合率 |
| **ZeroClaw** | 19 / 15 | 32 / 18 | ❌ | ⭐⭐⭐⭐☆ | 旗舰 · 高吞吐 |
| **Hermes Agent** | 28 / 22 | 41 / 5 | ❌ | ⭐⭐⭐⭐☆ | 旗舰 · 桌面优先 |
| **NanoBot** | 3 / 0 | 13 / 15 | ❌ | ⭐⭐⭐⭐☆ | 中型 · 活跃 |
| **NanoClaw** | 2 / 0 | 14 / 5 | ❌ | ⭐⭐⭐☆☆ | 中型 · 收尾 |
| **LobsterAI** | 5 / 0 | 2 / 11 | ✅ **2026.9.22** | ⭐⭐⭐⭐☆ | 中型 · 备版完成 |
| **IronClaw** | 0 / 0 | 3 / 0 | ❌ | ⭐⭐⭐☆☆ | 轻量 · 评审待消化 |
| **Moltis** | 0 / 0 | 1 / 0 | ❌ | ⭐⭐☆☆☆ | 轻量 · 静默 |
| **ZeptoClaw** | 0 / 0 | 3 / 0 | ❌ | ⭐⭐☆☆☆ | 轻量 · 静默 |
| **PicoClaw** | 0 / 2 (stale) | 3 / 2 (stale) | ❌ | ⭐⭐☆☆☆ | 轻量 · 维护缺位 |
| **NullClaw** | 0 | 0 | 0 | ⭐☆☆☆☆ | 静默 |
| **TinyClaw** | 0 | 0 | 0 | ⭐☆☆☆☆ | 静默 |

**关键数据信号：**
- 单日最高吞吐：**OpenClaw**（500+500）、**Hermes Agent**（100）、**ZeroClaw**（84）；
- 唯一发版：**LobsterAI 2026.9.22**；
- 备版信号：**CoPaw v2.2.2**（PR #7928 已开启）；
- 关闭率最高的项目：**CoPaw**（71% Issue / 50% PR）—— 体现强烈的"批量消化"工程节奏。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同期旗舰对比 |
|---|---|---|
| 通道覆盖 | **17+ 通道、40+ 扩展**（#130722 一次 PR 跨面） | ZeroClaw 以 WhatsApp 为主、Hermes 桌面为主、NanoBot 主 Telegram |
| 单日吞吐 | Issues 500 / PRs 500 | 约为 CoPaw（41/46）的 10 倍、ZeroClaw 的 6 倍 |
| P0 议题占比 | **6 个 P0 全部无 fix PR**（#91588、#152689、#136203、#115642、#154381、#119565） | CoPaw 有 2 个 P0（#7935、#7721），ZeroClaw 有 3 个新开 S0 |
| 治理风险 | "修复快、确证慢" —— 多个 PR 处于 `📣 needs proof` | CoPaw 走"批量收口 + 备版"路线，节奏更紧 |

**优势：** 通道与扩展覆盖度行业第一；多模型 Provider 适配层完备；Gateway 内存治理、子代理编排、Codex 集成等基础设施有连续投入。  
**差距：** 与 CoPaw / ZeroClaw 相比，OpenClaw 的"待证据"PR 显著更多，说明质量门禁偏严的同时也拖慢了合并节奏；与 Hermes Agent 相比，桌面端能力（系统托盘、Composer UX）尚未发力。  
**社区规模：** 单日活跃用户工单量约为 Hermes Agent 的 5 倍、NanoBot 的 30 倍，仍是事实上的**生态参照基线**。

---

## 4. 共同关注的技术方向

| 议题 | 涉及项目 | 核心诉求 |
|---|---|---|
| **自动压缩 / 长会话可靠性** | OpenClaw（#121617、#91588）、NanoBot（#5849/#5870/#5857）、CoPaw（#5856） | 压缩守卫、token 预算、tool_call 结构保留 |
| **Provider 缓存与降级** | OpenClaw（#140129）、ZeroClaw（#10889）、CoPaw（#6668） | Anthropic 缓存断点、Responses API cache、token 成本 |
| **Telegram 通道** | OpenClaw（#126246/#125764）、NanoBot（#5614/#5870/#5803）、NanoClaw（#3865）、Hermes（#119762） | 富文本流式、出站死信、Slack/Teams 类适配 |
| **WhatsApp Web 通道** | ZeroClaw（#10981/#10983/#10922/#11059/#10918/#11057/#10988/#10979） | 投票 / 语音 / PDF 缩略图 / `create_room` 集中检修 |
| **Windows 桌面体验** | Hermes Agent（#38007 系统托盘已合）、LobsterAI（#2741/#2743）、OpenClaw（#136203） | 后台常驻、安全软件兼容、升级路径 |
| **CRON / Heartbeat 调度** | NanoBot（#4896/#4915/#4959）、Hermes（#116213） | 提示词重构、OAuth 凭证、评估可配 |
| **Codex / Claude Code 集成** | OpenClaw（#99947/#120600）、NanoClaw（#3866/#3867/#3868）、LobsterAI | 启动窗口、prompt 重发、版本升级 |
| **Setup / 配置持久化** | NanoClaw（#3861/#3862/#3863）、LobsterAI（#1006/#2727）、PicoClaw（#3373/#3374） | wizard 状态机、用户配置保护、密钥静默丢失 |
| **国际化（CJK / 多语言）** | Hermes（#92192/#93632）、IronClaw（#8107 意大利语、#8092 IME） | 本地化矩阵、CJK IME 输入 |
| **Memory 系统** | ZeroClaw（#10797 markdown 并发丢条目）、OpenClaw（#136311/#91588）、Hermes（#37661/#92118） | 写者串行化、重索引锁、prefetch 观察 |
| **安全默认与审计** | ZeroClaw（#9391/#9392/#11058）、OpenClaw（命令白名单豁免） | 审计日志默认开启、配对握手、白名单字面命中 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多通道 Gateway + Provider + 子代理 | 平台型开发者 / Bot 运营商 | 17+ 通道插件化、Gateway 内存治理、Memory-core |
| **NanoBot** | Telegram 流式 + Heartbeat + 多 Provider | 多平台 Bot 开发者 | CLI 优先，单阶段 cron，CLI Apps 安全 |
| **Hermes Agent** | 桌面 UX + Gateway + Webhook | Windows/macOS 桌面用户 | Electron + Python 后端、bot 工作区、系统托盘 |
| **NanoClaw** | Setup Wizard + 多 Provider + CDSS

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-23**
**仓库：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日维持**高度活跃的开发节奏**：过去 24 小时共处理 28 个 PR（其中 15 个已合并/关闭、13 个仍待审），并有 3 个新开/活跃的 Issue 亟待关注。项目未发布新版本，但合并了一批覆盖 **Telegram 通道、Provider/WebUI、Heartbeat 调度、工具调用鲁棒性、Windows 兼容性**等多个领域的关键修复与功能增强。Bug 修复占比偏高、PR 流转顺畅、积压可控，整体健康度良好，但 **Telegram 通道的上下文压缩通知重复问题（#5870）**与 **自动压缩死锁问题（#5849）**两个 P1 缺陷已引起社区关注，建议维护者优先处理。

---

## 2. 版本发布

本周期无新版本发布（无 Releases）。

---

## 3. 项目进展

今日共有 15 个 PR 被合并或关闭，标志着项目在多个维度取得实质推进：

### 🚀 通道与交互体验
- **[#5614] feat(tg): add support for streaming rich messages**（已关闭） — 由 [@wzrayyy](https://github.com/wzrayyy) 贡献，实现 Telegram 私聊的富文本消息流式输出（`sendRichMessageDraft`），并在最终回复使用 `sendRichMessage` 持久化，群聊仍沿用旧路径。这显著提升 Telegram 长回复的实时性。([PR #5614](https://github.com/HKUDS/nanobot/pull/5614))
- **[#5831] feat(webui): streamline contextual message controls**（已关闭）— WebUI 消息上下文控件按"悬停/聚焦/选中"显隐，分离用户消息与助手消息为不同视觉块，弱化时间戳等冗余控件。([PR #5831](https://github.com/HKUDS/nanobot/pull/5831))

### 🔧 Provider 与工具调用稳定性
- **[#5783] fix(providers): preserve assistant content with tool calls**（已关闭，P2）— 修复 assistant 历史消息中 `content` 与 `tool_calls` 同时存在时被错误剥离的问题，覆盖 Mistral 等多 Provider。([PR #5783](https://github.com/HKUDS/nanobot/pull/5783))
- **[#5859] fix(tools): handle boolean JSON subschemas during argument validation**（已关闭，P2）— 修复 JSON Schema 合法 boolean 子结构（`true`/`false`）下工具参数校验因 `.get()` 崩溃的问题。([PR #5859](https://github.com/HKUDS/nanobot/pull/5859))
- **[#5867] fix(files): decode BOM-marked text correctly**（已关闭，P2）— 在 UTF-8 解码失败前先识别 BOM（UTF-16/UTF-32），避免 BOM 字符泄漏。([PR #5867](https://github.com/HKUDS/nanobot/pull/5867))
- **[#5868] fix(exec): invoke quoted Windows executable without arguments**（已关闭，P2）— 修复 PowerShell 在无参数情况下不调用调用运算符导致的 Windows 可执行路径失效。([PR #5868](https://github.com/HKUDS/nanobot/pull/5868))

### 💓 Heartbeat 调度回归修复（合并三连，P1）
- **[#4896] fix(heartbeat): rewrite prompt to execute tasks instead of reporting**（已关闭，P1）— 修正 v0.2.1 之后从两阶段重构为单阶段 cron 后未同步更新的 prompt，使 Agent 由"汇报"转为"执行"。
- **[#4915] fix(heartbeat): make response evaluation more configurable**（已关闭，P1）— 允许禁用评估、严格化评估 prompt。
- **[#4959] fix: add one second to retry after delays**（已关闭，P1）— 解决 LLM 限流重试时间窗被严格边界卡掉 25 秒警告的问题。
([PR #4896](https://github.com/HKUDS/nanobot/pull/4896), [#4915](https://github.com/HKUDS/nanobot/pull/4915), [#4959](https://github.com/HKUDS/nanobot/pull/4959))

### 🧹 工程优化
- **[#5872] refactor(utils): dedupe atomic JSONL write helper**（已关闭）— 与 [#5873](https://github.com/HKUDS/nanobot/pull/5873) 为同主题不同提交，后者仍 OPEN，#5872 作为先导版本被关闭。这是一次合并去重工作，作者 [@Frank-zhu0404](https://github.com/Frank-zhu0404) 持续迭代。

**整体评估：** 项目在「Heartbeat 调度回归」「Provider 工具调用语义」「跨通道用户体验」三个方向均完成关键修复，是一次结构性的稳定性升级。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 条目 | 类型 | 评论 | 关注点 |
|---|---|---|---|---|
| 1 | [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Issue / P1 | **3** | Telegram 上下文压缩通知在同一会话中重复出现多次 |
| 2 | [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Issue / P1 | **2** | 自动压缩无 token 预算保护，存在死锁风险 |
| 3 | [#5873](https://github.com/HKUDS/nanobot/pull/5873) | PR / P2 | 0 | 原子写入工具去重（社区期待架构统一） |
| 4 | [#5871](https://github.com/HKUDS/nanobot/pull/5871) | PR / P2 | 0 | Linear 原生 Agent UX 优化 |

**诉求分析：** 当前社区最高热度集中在**自动压缩（compaction）路径的可靠性**——两个 P1 Issue（#5870、#5849）均与上下文压缩相关，提示该项目在长会话场景下已成为高频痛点；与此同时，PR #5857 已在修复路径上（详见第 5 节），反映社区反馈得到良好转化。

---

## 5. Bug 与稳定性

### 🔴 P1 严重（阻塞/可靠性缺陷）

| 编号 | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Telegram: context compaction completion notice is repeated multiple times | OPEN | ❌ 暂无 |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Auto-compaction deadlock: `summarize_transcript` has no token-budget guard | OPEN | ✅ [#5857](https://github.com/HKUDS/nanobot/pull/5857)（待合并） |
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) | fix(tokens): warm fallback tokenizer in background | OPEN | — 改进方案已就位 |

### 🟠 P2 中等（已修复/合并，今日关闭）

| 编号 | 标题 | 状态 |
|---|---|---|
| [#5783](https://github.com/HKUDS/nanobot/pull/5783) | Preserve assistant content with tool calls | 已关闭 ✅ |
| [#5859](https://github.com/HKUDS/nanobot/pull/5859) | Handle boolean JSON subschemas | 已关闭 ✅ |
| [#5867](https://github.com/HKUDS/nanobot/pull/5867) | Decode BOM-marked text correctly | 已关闭 ✅ |
| [#5868](https://github.com/HKUDS/nanobot/pull/5868) | Invoke quoted Windows executable | 已关闭 ✅ |
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) | Decode nested JSON tool arguments | OPEN（带 conflict 标签，需 rebase） |

### 🟢 P2 改进（待合并）
- [#5824](https://github.com/HKUDS/nanobot/pull/5824) `read_file` 在超大行下继续推进（加列偏移）
- [#5842](https://github.com/HKUDS/nanobot/pull/5842) `channels status` 显示不可用的通道插件
- [#5865](https://github.com/HKUDS/nanobot/pull/5865) WebUI 首次轮转保留已选模型预设
- [#5866](https://github.com/HKUDS/nanobot/pull/5866) `nanobot apps` 记录安装来源、注册表漂移时 fail-closed（**安全相关**）

**结论：** 今日 P1 缺陷方向明确、修复跟进及时（#5849 ↔ #5857 形成闭环），P2 队列中安全相关 PR #5866 建议维护者优先审视。

---

## 6. 功能请求与路线图信号

### 新增功能请求

- **[#5869] [enhancement] Any chance to add video support?**（[Issue #5869](https://github.com/HKUDS/nanobot/issues/5869)）
  - **用户诉求：** 当前仅把视频文件路径交给 LLM，但 Qwen3.8、Mino-v2.6 等 omni 模型已原生支持视频输入。期望能在特定通道（如 Telegram）直接将视频流/文件送入 omni 模型处理。
  - **采纳概率：** 中等。符合"多模态原生化"路线图主线，但涉及 Provider 适配与传输层改动，短期纳入需评估。

### 与路线图强相关的进行中工作
- **WebUI 体验持续打磨**：#5831（已合并）、#5865（待合并）、#5871（Linear UX）形成 WebUI 一揽子升级。
- **通道一致性**：[#5842](https://github.com/HKUDS/nanobot/pull/5842) 让通道插件在不可用时仍可见可诊断，体现"可观测性优先"思路。
- **CLI Apps 安全**：#5866 提出安装来源签名验证，这是面向生态扩张的纵深防御补强。

**预判：** 下一版本（或近期 patch release）大概率会包含以下 PR：**#5857（自动压缩预算）**、**#5861（tokenizer 预热）**、**#5866（CLI Apps 安装溯源）**，共同收敛 P1/P2 修复并提升安全姿态。

---

## 7. 用户反馈摘要

从活跃 Issue 的讨论内容提炼：

### 真实痛点
1. **长会话体验退化（3 条评论，#5870）** — 用户 [@3L1AS](https://github.com/3L1AS) 反馈：在 Telegram 个人会话中观察 *"六次以上"* 重复的 `Context compacted.` 通知，怀疑 Gateway 多次触发自动压缩，但通知文案未做去重/节流。
2. **自动压缩死锁（2 条评论，#5849）** — 用户 [@Krisluu1221](https://github.com/Krisluu1221) 指出：`summarize_transcript` 把**完整历史+系统提示**一次性发给总结模型，缺乏 token 预算保护，而手动路径 `archive_session` 正确使用了 `get_history(max_tokens=budget)` 分块；一旦历史超预算，**自动路径无法自恢复**。
3. **多模态能力受限（#5869）** — 用户 [@tjc0726](https://github.com/tjc0726) 表达对视频原生支持的明确需求，反映了"路径文本"已无法满足现代 LLM 应用期待。

### 使用场景
- Telegram 私聊为主、长会话场景多发；
- 跨 Provider（OpenAI-compatible / Mistral）的工具调用是高频用法；
- Windows 用户在使用 `exec` 时遇到带空格/引号的路径问题（已被 #5868 修复）。

### 满意度
- 对 #5614（Telegram 富文本流式输出）的合并不见反对，社区对流式体验的诉求被积极响应；
- WebUI 的细节打磨（#5831）说明项目方在持续响应社区体验反馈。

---

## 8. 待处理积压

提醒维护者关注的长期/重要待处理项：

| 编号 | 类型 | 标题 | 创建距今 | 关注原因 |
|---|---|---|---|---|
| [#5314](https://github.com/HKUDS/nanobot/pull/5314) | PR / P2 | fix: decode nested JSON tool arguments by schema | **2026-08-10（约 44 天）** | 标记 conflict，需 rebase；修复 MCP 工具调用 schema 验证失败，影响 OpenAI-compatible Provider |
| [#5803](https://github.com/HKUDS/nanobot/pull/5803) | PR / P2 | Small improvements and fixes for Telegram | 2026-09-17（6 天） | 涉及 Telegram 三处小修复（含 `topic_id`、typing status 等），与 #5614/#5870 同主题域 |
| [#5849](https://github.com/HKUDS/nanobot/issues/5849) | Issue / P1 | Auto-compaction deadlock | 2026-09-21（2 天） | 已有 fix PR #5857，建议尽快 merge |
| [#5866](https://github.com/HKUDS/nanobot/pull/5866) | PR / P2 | CLI Apps 安装溯源 / 安全 | 2026-09-22（1 天） | **安全相关**，建议优先 review |
| [#5870](https://github.com/HKUDS/nanobot/issues/5870) | Issue / P1 | Telegram compaction notice 重复 | 2026-09-22（1 天） | **尚无修复 PR**，需关注 |
| [#5871](https://github.com/HKUDS/nanobot/pull/5871) | PR / P2 | Linear 原生 Agent UX | 2026-09-22（1 天） | 范围较大（OAuth/工具/映射），需充分评审 |

**提醒：** #5314 已超 6 周未合入，且带冲突标签，是当前最大积压项；#5866 与 #5849/#5857 是安全与可靠性优先级最高的待审条目。

---

### 📎 附：日报数据摘要

| 指标 | 数值 |
|---|---|
| Issues 新开/活跃 | 3 |
| Issues 已关闭 | 0 |
| PRs 总数 | 28 |
| PRs 待合并 | 13 |
| PRs 已合并/关闭 | 15 |
| 新版本发布 | 0 |
| P1 缺陷（活跃） | 1（#5870 暂无 PR） |
| 已有 fix PR 的活跃 Issue | 1（#5849 ↔ #5857） |

---
*如需进一步细化某一维度（如按贡献者统计、按标签分类等），可在后续日报中补充。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-23**

---

## 1. 今日速览

Hermes Agent 今日延续高强度迭代节奏，过去 24 小时内共有 **100 条更新**（Issues 与 PRs 各 50 条），活跃度处于近周峰值。其中 **22 个 Issue 已关闭、5 个 PR 完成合并/关闭**（含 1 个主动撤销），整体关闭率约 27%，反映出维护团队正在批量消化长期积压的需求——尤其是 Windows 桌面端的"最小化到系统托盘"重复请求群。同时仍开放 **28 个 Issue 与 41 个 PR** 等待处理，CRON、Gateway、Desktop 三大子系统的稳定性问题集中暴露，项目整体处于"密集修 bug + 推进架构演进"并行的阶段。

---

## 2. 版本发布

**无新版本发布。** 今日所有变更均通过 PR 合并进入主干，尚未打 tag 或发布预编译产物。

---

## 3. 项目进展

### 已关闭的关键 Issue（功能/架构层面）

- **#38007** – feat(desktop): System tray support for background running  
  👉 由 [Grin1021024](https://github.com/nousresearch/hermes-agent/issues/38007) 提出，19 👍 / 15 评论，今日关闭。**这是 Windows/Linux 桌面端最高呼声的功能之一**，关闭它意味着至少 10 个重复工单（#60418, #58621, #70529, #66748, #61246, #57003, #51376, #50662, #114618, #105138 等）一并得到解决。链接：[Issue #38007](https://github.com/nousresearch/hermes-agent/issues/38007)

- **#49920** – Windows 桌面更新后卡在 CONNECTING 屏幕  
  由 `hermes-setup.exe --update` 后 `NODE_ENV=production` 导致 npm 跳过 devDependencies 引发的静默构建失败。今日关闭。
  链接：[Issue #49920](https://github.com/nousresearch/hermes-agent/issues/49920)

- **#61396** – macOS arm64 node-pty spawn-helper 执行位丢失  
  链接：[Issue #61396](https://github.com/nousresearch/hermes-agent/issues/61396)

- **#62481** – 新会话首条消息需按两次 Enter（#54527 回归）  
  链接：[Issue #62481](https://github.com/nousresearch/hermes-agent/issues/62481)

- **#67265** – Dashboard Chat 切回会话后 clarify 选择器丢失  
  链接：[Issue #67265](https://github.com/nousresearch/hermes-agent/issues/67265)

### 已合并/关闭的关键 PR

| PR | 说明 | 状态 |
|---|---|---|
| [#119475](https://github.com/nousresearch/hermes-agent/pull/119475) | fix(update): refresh editable finder for new packages | **撤销**（方案被驳回） |
| [#119724](https://github.com/nousresearch/hermes-agent/pull/119724) | Setup agent 可搜索 catalog 并通过审批卡安装插件 | 已关闭 |
| [#119736](https://github.com/nousresearch/hermes-agent/pull/119736) | feat(slack): 按 ID 忽略配置的 bot 发送者 | 已关闭（被 #119762 替代） |

### 重要开放 PR（维护者正在推进）

- **#119764** – `hermes -w` 不再以运行中 gateway 的 checkout 为根（[teknium1](https://github.com/nousresearch/hermes-agent/pull/119764) 提交）  
  修复开发者在运行 gateway 的仓库里用 `hermes -w` 创建 worktree 时出现的根路径错位问题。
- **#119767** – 插件 catalog 收录 [vectorize-io/hindsight](https://github.com/vectorize-io/hindsight) 记忆 provider（[teknium1](https://github.com/nousresearch/hermes-agent/pull/119767) 提交）  
  配合 #114569 的 memory provider migration 工具，给现有 `memory.provider: hindsight` 用户做平滑迁移。
- **#119772** – gateway 不再把被复制的 profile 目录误判为运行中（[b2089766906-droid](https://github.com/nousresearch/hermes-agent/pull/119772)）  
  修复 sandbox 注入或备份恢复后 stale `gateway.pid` / `gateway_state.json` 导致活性探测误报的隐患。
- **#119771** – 压缩前 checkpoint 失败不再被静默吞掉（[b2089766906-droid](https://github.com/nousresearch/hermes-agent/pull/119771)）
- **#119680** – `gateway.standalone` 临时单 profile 兼容开关（[victor-kyriazakos](https://github.com/nousresearch/hermes-agent/pull/119680)）  
  Teknium 在描述中明确标注："**TEMPORARY backwards compatibility, not a topology we intend to keep.** Multiplex-only 是归宿。"
- **#102765** – bundles & 统一包管理器（[ethernet8028023](https://github.com/nousresearch/hermes-agent/pull/102765)）  
  跨平台安装/升级的统一抽象，正在 `pm/` 下重构，影响 Windows 桌面与 CLI。
- **#92118** – 记忆 prefetch 增加 operation-bound 结构化观察旁路（[seradin](https://github.com/nousresearch/hermes-agent/pull/92118)）

**今日推进评估：项目在 Desktop UX（系统托盘、Enter 键回归、composer pill 截断、文件 tab 路由）、CRON 可靠性（OAuth credential、manual prompt）、Gateway 安全性（PID 活性、profile 复制、多路复用）、Webhook 配置加载（环境变量桥接）、A2A 流式（#119766）、记忆系统（结构化 prefetch）多条线同步推进约 0.6–0.8 个版本号的当量。**

---

## 4. 社区热点

### 讨论最热烈的 Issue

1. **[Issue #38007](https://github.com/nousresearch/hermes-agent/issues/38007) – System tray support（15 评论 / 19 👍）**  
   "桌面端关闭窗口即彻底退出 → 必须冷启动 Electron + Python 后端 + 配置加载（耗时数秒）"——这是过去几个月 Windows 用户呼声最高的痛点，今日终于被合入主干。从 #38007 到 #60418/#58621/#70529/#66748/#61246/#57003/#51376/#50662/#114618/#105138 一共 **11 个重复工单** 全部随之关闭，扫清了 Windows 桌面端的长期遗留话题。

2. **[Issue #119661](https://github.com/nousresearch/hermes-agent/issues/119661) – Todoist MCP OAuth 失败（7 评论）**  
   "code_challenge is required for public clients"——Todoist 授权服务器拒绝 Hermes 的 OAuth 请求。该问题直接影响 "Add Todoist" 连接器可用性，对 MCP 生态影响面较大，目前**尚未有对应 PR**。

3. **[Issue #94916](https://github.com/nousresearch/hermes-agent/issues/94916) – Kanban lifecycle 不一致（5 评论）**  
   `hermes kanban dispatch --dry-run` 会写入持久化状态，且 stop guard 拒绝 review handoff——两个 Kanban 生命周期契约与实现存在矛盾。这是 Kanban 系统的设计层面问题，需要维护者决策。

4. **[Issue #37661](https://github.com/nousresearch/hermes-agent/issues/37661) – mem0-temporal-hygiene 插件（4 评论）**  
   外部贡献者 [Ardem2025](https://github.com/Ardem2025) 提交的 Mem0 OSS 配套插件，处理 Qdrant 中的时序盲点与冲突去重，等待维护者评审收录。

---

## 5. Bug 与稳定性

### 按严重程度排序

| 等级 | Issue | 概要 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **P0** | [#98479](https://github.com/nousresearch/hermes-agent/issues/98479) | 工具白名单授权在 worker dispatch 间丢失；`execFileNoThrow` 超时处理未终结 | ❌ 无 |
| 🔴 **影响发布** | [#119475](https://github.com/nousresearch/hermes-agent/pull/119475) | `hermes update` 在引入新顶层 Python 包时留下 stale editable 安装 | ✅ 方案已撤销，需重写 |
| 🟠 **P2** | [#119661](https://github.com/nousresearch/hermes-agent/issues/119661) | Todoist MCP OAuth `code_challenge` 缺失 | ❌ 无 |
| 🟠 **P2** | [#116213](https://github.com/nousresearch/hermes-agent/issues/116213) | Cron preflight 无法解析 openai-codex OAuth 凭证 | ✅ 已关闭（#114323 跟进） |
| 🟠 **P2** | [#105162](https://github.com/nousresearch/hermes-agent/issues/105162) | Bot Mode 工作区下 `⌘T` 创建的 chat 带 `hidden: true`，关闭 tab 后丢失 | ❌ 无 |
| 🟠 **P2** | [#100675](https://github.com/nousresearch/hermes-agent/issues/100675) | 桌面分屏访问 Bots 页后非活跃 pane 每 5s 闪 splash 重渲染 | ❌ 无 |
| 🟡 **P2** | [#63835](https://github.com/nousresearch/hermes-agent/issues/63835) | 桌面静默覆盖 config.yaml 的 anthropic provider 为 nous | ✅ 已关闭 |
| 🟡 **P3** | [#94916](https://github.com/nousresearch/hermes-agent/issues/94916) | Kanban `--dry-run` 改状态 + stop guard 拒 review | ❌ 无 |
| 🟡 **P3** | [#61396](https://github.com/nousresearch/hermes-agent/issues/61396) | macOS arm64 集成终端 posix_spawnp 失败 | ✅ 已关闭 |
| 🟡 **P3** | [#62481](https://github.com/nousresearch/hermes-agent/issues/62481) | 新会话首条 Enter 需按两次 | ✅ 已关闭 |
| 🟡 **P3** | [#95322](https://github.com/nousresearch/hermes-agent/issues/95322) | batch_runner --resume 三处正确性缺陷（陈旧索引、分片重编号、非字符串 prompt） | ❌ 无 |
| 🟡 **P3** | [#117734](https://github.com/nousresearch/hermes-agent/issues/117734) | Kanban gateway dispatcher 仅在启动时读取配置，热更新失效 | ❌ 无 |
| 🟡 **P3** | [#119733](https://github.com/nousresearch/hermes-agent/issues/119733) | `${VAR}` 在 gateway 平台配置（webhook secret、teams credentials）下不展开 | ❌ 无 |
| 🟡 **P3** | [#51523](https://github.com/nousresearch/hermes-agent/issues/51523) | Composer 模型 pill 长模型名截断 reasoning 等级 | ✅ 已关闭 |
| 🟡 **P3** | [#97389](https://github.com/nousresearch/hermes-agent/issues/97389) | Windows 桌面 Computer Use 静默注册 cua-driver 计划任务（无 opt-out） | ❌ 无 |

**统计：今日 28 个活跃 Issue 中 Bug 类约 16 个，其中 Desktop 与 Gateway 占比最高（各约 5 项），CRON/Kanban 子系统各有 2–3 项连续暴露缺陷。**

---

## 6. 功能请求与路线图信号

### 已实现（已关闭的 Feature Issue）
- **#38007 系统托盘**（影响 10+ 重复 issue）——已合并。
- **#41736 助手消息 Preview 链接走文件 tab** —— 已关闭。  
  链接：[Issue #41736](https://github.com/nousresearch/hermes-agent/issues/41736)

### 高潜力候选（开放 Issue + 相关 PR 已存在）

| 需求 | 信号强度 | 配套 PR |
|---|---|---|
| 插件目录集成 hindsight / mem0-temporal-hygiene | 🟢 高 | [#119767](https://github.com/nousresearch/hermes-agent/pull/119767) 已就绪 |
| Gateway webhook 环境变量桥接 | 🟢 高 | [#119765](https://github.com/nousresearch/hermes-agent/pull/119765), [#119770](https://github.com/nousresearch/hermes-agent/pull/119770) 双 PR 并行 |
| Slack 按 bot ID 白名单/黑名单 | 🟢 高 | [#119762](https://github.com/nousresearch/hermes-agent/pull/119762) Open（#119736 被替代） |
| A2A SSE 流式增量更新 | 🟢 高 | [#119766](https://github.com/nousresearch/hermes-agent/pull/119766) Open |
| 印尼语（id）本地化文档 | 🟢 高 | [#92192](https://github.com/nousresearch/hermes-agent/pull/92192), [#93632](https://github.com/nousresearch/hermes-agent/pull/93632) |
| Bundles & 统一包管理器（跨平台安装/升级） | 🟢 高 | [#102765](https://github.com/nousresearch/hermes-agent/pull/102765) |
| 桌面 update overlay 退出 Google Translate 自动翻译 | 🟡 中 | [#116660](https://github.com/nousresearch/hermes-agent/pull/116660) |
| Cron 手动 prompt 覆盖时仍尊重 gate 静默 | 🟡 中 | 无 |

---

## 7. 用户反馈摘要

### 真实痛点（来自 Issue 评论与摘要）

1. **Windows 桌面"误触 X 即被杀进程"是头号痛点。**  
   多个重复 issue 中用户表达高度一致——Slack/Discord/微信/QQ/Steam 的关闭窗口行为是肌肉记忆，Hermes 不支持被视为体验倒退。Issue #114618 中有用户写道："我把 Hermes Desktop 当作 always-on companion 用，习惯性地点 X 把它'放一边'，结果连同 gateway 一起被杀掉，任何进行中的 agent turn、终端会话、gateway 桥都断掉了。"

2. **macOS arm64 集成终端在 Hermes Desktop 内启动失败（#61396）**——技术原因为 `node-pty` 的 macOS `spawn-helper` 打包

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-09-23**
**数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw) GitHub 仓库**

---

## 1. 今日速览

PicoClaw 仓库今日整体活跃度较低，**24 小时内无新 Issue 或新 PR 创建**，所有变动均为既有工单的关闭操作。今日共关闭 2 个 Issue 与 3 个 PR，但其中绝大部分（4 条）被标记为 `[stale]`，属于机器人自动清理长期无响应的工单，并非实质性的代码合并或问题解决。值得关注的是，2 个被关闭的 Issue 均为真实的并发与数据丢失问题，但对应的修复 PR 也被一同标为 `stale` 一并关闭，问题并未得到实质性修复。无新版本发布。

---

## 2. 版本发布

🚫 **今日无新版本发布**。最近版本情况未在数据中体现，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 以获取最新动态。

---

## 3. 项目进展

今日被关闭/合并的 PR 共 3 条，但需审慎解读其"进展"含义：

| PR | 标题 | 状态 | 实际意义 |
|---|---|---|---|
| [#3375](https://github.com/sipeed/picoclaw/pull/3375) | fix(config): guard lazy sensitive-data cache against concurrent init | CLOSED (stale) | ⚠️ **未被合并**，因长期无活动被机器人关闭 |
| [#3372](https://github.com/sipeed/picoclaw/pull/3372) | fix(config): make the reaction tool configurable | CLOSED (stale) | ⚠️ **未被合并**，同上 |
| [#1349](https://github.com/sipeed/picoclaw/pull/1349) | feat(qq): support parsing and replying to more attachment types | CLOSED | QQ 频道归属处理增强（emoji、附件等）|

**进展有限**。今日实际上**未有任何新功能被纳入**。PR #1349 虽是 6 个月前创建的工单（2026-03-11），但最终以关闭而非合并告终，意味着 QQ 频道的附件增强功能未进入主干。两条 config 相关 PR 因 stale 关闭，问题仍然存在。

---

## 4. 社区热点

🔥 **今日社区互动非常低迷**。所有被关闭的 Issue 评论数仅为 2 条，PR 均无评论。

- 唯一仍在等待评审的开放工单：[PR #3370 feat(tools): add Keenable web search provider](https://github.com/sipeed/picoclaw/pull/3370) —— 由社区贡献者 ilya-bogin-keenable 提交，旨在新增 Keenable 作为免 API Key 的网页搜索提供商，**但今日仍处于 OPEN 状态且已被标记 `stale`**，急需维护者关注。

**诉求分析**：社区存在接入第三方 AI 服务（Keenable）的实际诉求，体现 PicoClaw 在工具生态上的开放化趋势。

---

## 5. Bug 与稳定性

### 🔴 高严重度（未被修复）

**Issue #3374 — Config.initSensitiveCache 数据竞争导致 panic**
- 链接：[sipeed/picoclaw#3374](https://github.com/sipeed/picoclaw/issues/3374)
- 状态：⚠️ **CLOSED (stale)，问题未修复**
- 描述：`Config.sensitiveCache` 的懒加载未使用同步原语保护，导致多个 goroutine 可能各自创建一个 `SensitiveDataCache`，进而使 `SensitiveDataReplacer` 返回 nil `*strings.Replacer`，触发 `FilterSensitiveData` 崩溃。
- 修复 PR：[#3375](https://github.com/sipeed/picoclaw/pull/3375) —— **已被作为 stale 一并关闭**，未合并。
- 风险评级：🔴 **高** —— 涉及并发安全与运行时崩溃，且在生产场景（多 goroutine 处理请求）中可能频繁触发。

**Issue #3373 — SaveConfig 静默删除多余 api_key 并留下悬挂 fallback**
- 链接：[sipeed/picoclaw#3373](https://github.com/sipeed/picoclaw/issues/3373)
- 状态：⚠️ **CLOSED (stale)，问题未修复**
- 描述：在 `LoadConfig` → `SaveConfig` 循环中，`model_list` 条目中除第一个外的 `api_keys` 会被静默删除，幸存条目还会保留指向已不存在模型的 `fallbacks` 引用，导致用户密钥无声丢失。
- 风险评级：🔴 **高** —— 数据丢失类问题，影响所有多 key 用户。

### 总体评估

两个高严重度 Bug 至今**均无修复版本纳入主干**。项目当前的 Bug 修复流程存在明显缺口：开发者提交了 issue 与对应 fix PR，但因维护者长期未评审，机器人以 stale 标签将 issue 与 PR 一并关闭，形成"问题报告 → 修复尝试 → 被自动清理"的死循环。

---

## 6. 功能请求与路线图信号

| 需求 | 关联工单 | 评估 |
|---|---|---|
| 接入 Keenable 网页搜索 | [PR #3370](https://github.com/sipeed/picoclaw/pull/3370) | 仍 OPEN 且 stale，急需维护者响应；如能合并将扩展工具生态 |
| QQ 频道 emoji / 附件增强 | [PR #1349](https://github.com/sipeed/picoclaw/pull/1349) | 今日已 CLOSED，未合并；建议作者重新开 PR |
| reaction 工具配置化 | [PR #3372](https://github.com/sipeed/picoclaw/pull/3372) | 已 CLOSED (stale)，未合并 |

**路线图信号**：社区贡献者持续在 `pkg/config` 与 `tools` 模块进行优化尝试，但因维护者响应不足，多个有价值的贡献流失。

---

## 7. 用户反馈摘要

由于评论数较少，可提取的真实用户痛点有限：

1. **并发安全焦虑**（#3374）：用户 sting8k 明确指出 `sync.Once` 在懒加载模式下无法保护自身的创建过程，反映了对敏感数据过滤器稳定性的关注。
2. **配置数据丢失恐慌**（#3373）：用户对 `LoadConfig → SaveConfig` 循环中密钥被静默删除表示担忧，强调"silent data loss of user credentials"——这属于用户极度敏感的安全问题。
3. **工具生态扩展期待**（PR #3370）：社区希望 PicoClaw 支持更多免密钥、即开即用的搜索服务。

**总体而言，社区对配置层与数据安全层的稳定性表达了明确不满，但维护者侧的响应缺位使这些问题悬而未决。**

---

## 8. 待处理积压

🚨 **以下工单虽被机器人关闭，但因其实质重要性，建议维护者重新评估并采取行动**：

| 类型 | 工单 | 严重程度 | 当前状态 |
|---|---|---|---|
| 🔴 Bug | [#3374](https://github.com/sipeed/picoclaw/issues/3374) 数据竞争导致 panic | 高 | CLOSED (stale) |
| 🔴 Bug | [#3373](https://github.com/sipeed/picoclaw/issues/3373) api_key 静默丢失 | 高 | CLOSED (stale) |
| 🟡 PR | [#3375](https://github.com/sipeed/picoclaw/pull/3375) sensitive-data cache 并发保护 | 高 | CLOSED (stale) |
| 🟡 PR | [#3372](https://github.com/sipeed/picoclaw/pull/3372) reaction 工具配置化 | 中 | CLOSED (stale) |
| 🟢 PR | [#3370](https://github.com/sipeed/picoclaw/pull/3370) Keenable 网页搜索 | 低-中 | OPEN + stale |
| 🟢 PR | [#1349](https://github.com/sipeed/picoclaw/pull/1349) QQ 频道附件增强 | 中 | CLOSED |

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码合入活跃度 | ⭐⭐☆☆☆ | 今日无有效合并 |
| Issue 响应速度 | ⭐☆☆☆☆ | 真实 Bug 被自动清理而非修复 |
| PR 评审及时性 | ⭐⭐☆☆☆ | 多条有用 PR 因 stale 关闭 |
| 安全与稳定性 | ⭐⭐☆☆☆ | 高危 Bug 未修复直接关闭 |
| 社区贡献友好度 | ⭐⭐☆☆☆ | 贡献者反复遭遇 PR 关闭 |
| **综合健康度** | **⭐⭐☆☆☆** | **需维护者紧急关注** |

**结论**：PicoClaw 今日呈现出明显的**维护者响应不足**信号。机器人 stale 清理机制虽然有助于仓库整洁，但也误伤了实质性的 Bug 报告与修复 PR。建议维护者：

1. 优先评审并合并 [#3375](https://github.com/sipeed/picoclaw/pull/3375)，解决两个高危 Bug；
2. 重新评估 [#3370](https://github.com/sipeed/picoclaw/pull/3370) 与 #1349 的贡献价值；
3. 调整 stale 机器人策略，避免误关带有 fix PR 的 Issue。

---

*本报告基于 GitHub 公开数据生成，所有链接均可追溯至 [sipeed/picoclaw](https://github.com/sipeed/picoclaw) 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-23

## 今日速览

NanoClaw 项目今日保持中等活跃度：过去 24 小时内共 2 条 Issue 更新、19 条 PR 更新（含 5 条已合并/关闭、14 条待合并），但**无新版本发布**。当日闭合动作集中在 `setup/setup-wizard` 与 `channels` 两条主干线索上，且 Issue #3862 与对应 fix PR #3863 同步关闭，说明维护团队在快速响应 setup 路径上的回归问题。同时，Codex、Claude Code 版本相关升级（#3866/#3867/#3868）以及 Iron Proxy gateway 套件（#3817/#3818）已形成完整工作流，处于待评审阶段。整体仓库处于"问题集中修复 + 能力补齐"的稳健推进节奏。

---

## 版本发布

无新版本发布。

当前主分支的活跃工作集中在即将到来的 release 候选上：(a) Codex CLI 从 0.146.0 升级到 0.155.1（#3867），(b) Claude Code 升级到 2.1.280 + Agent SDK 0.3.280（#3868），(c) Iron Proxy gateway 作为新可选信道接入（#3817/#3818）。在合并前用户无需进行迁移动作。

---

## 项目进展

**今日已合并/关闭的 5 条重要 PR：**

| PR | 类型 | 影响面 | 说明 |
|---|---|---|---|
| [#3865](https://github.com/nanocoai/nanoclaw/pull/3865) | feat（CDSS WP-6b） | `channels` | Slack / Teams 适配器基于 `ChannelInstanceSpec` 每实例构建，支持 env 模式与每实例 webhook 路径；附带 pending challenge 处理 |
| [#3864](https://github.com/nanocoai/nanoclaw/pull/3864) | feat（CDSS WP-6a） | `channels` / `core` | 引入 `ChannelCredentialProvider`、实例规格与 per-instance webhook 路径，作为 WP-6b 的依赖基础 |
| [#3863](https://github.com/nanocoai/nanoclaw/pull/3863) | fix | `setup` / `providers` | 修复 wizard 中途安装 provider contract 后，gateway store 读取不到 model endpoints 的回归 — 直接闭环 Issue [#3862](https://github.com/nanocoai/nanoclaw/issues/3862) |
| [#3861](https://github.com/nanocoai/nanoclaw/pull/3861) | fix | `setup` | 修复 wizard resume 时重复询问 Echo 沙箱镜像来源的问题 |
| [#1491](https://github.com/nanocoai/nanoclaw/pull/1491) | feat（skill） | `skills` | Google Workspace CLI（gws）MCP 集成 skill，含 gws_discover / gws_help / gws_run 三个工具与 nonce 写操作守门 |

**项目整体推进程度：**今日闭合的 5 条 PR 中有 2 条直接闭环真实用户报告的 setup bug（#3862、wizard 重复询问），稳定性显著提升；CDSS（Customer Deployment Self Serve）WP-6a / WP-6b 一次性双合并，意味着 Slack / Teams 多实例化部署的能力已落地至 `channels` 分支，下一步等合并至 `main` 即可对终端用户开放。

---

## 社区热点

今日评论与反应均处于低位（多条 PR 评论数未公开），但**值得关注的待评审热点 PR（按代码面覆盖度排序）：**

- [#3815](https://github.com/nanocoai/nanoclaw/pull/3815) — `refactor(gateway): centralize the credential gateway contract`，覆盖 **11 个 area 标签**（channels / configuration / containers / core / credentials / ncl-cli / providers / repository-maintenance / security / sessions / setup-installation），是近几日内改动面最广的 PR，关乎后续网关重构的一致性。
- [#3355](https://github.com/nanocoai/nanoclaw/pull/3355) — `feat(skills): add /add-cursor provider install skill`，覆盖 10 个 area 标签，与 [#3356](https://github.com/nanocoai/nanoclaw/pull/3356)（Cursor Agent SDK payload）构成 Cursor provider 落地对子。
- [#3817](https://github.com/nanocoai/nanoclaw/pull/3817) — `feat(skills): add the Iron Proxy gateway`，搭配 [#3818](https://github.com/nanocoai/nanoclaw/pull/3818) `feat(setup): select the gateway without changing provider login`，是新增企业网关能力的"组合热"。

这些 PR 虽然评论数不高，但代码覆盖面与产品方向影响显著，是维护者应优先评审的对象。

---

## Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 状态 | 描述 | 是否有对应 fix |
|---|---|---|---|---|
| 🔴 高 | [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) | OPEN | `/update-nanoclaw` step 1 提取 controller 时 `git archive` 文件列表遗漏三个传递依赖模块，导致 `prepare` 在做任何事情前就 `MODULE_NOT_FOUND` 崩溃 | ⚠️ 已有相关 PR [#3750](https://github.com/nanocoai/nanoclaw/pull/3750)（同样针对 update controller 提取的 `scripts/` 树不完整），维护者应在合并 #3750 时一并扩列 |
| 🟡 中 | [#3862](https://github.com/nanocoai/nanoclaw/issues/3862) | **CLOSED** | Codex 在 Iron Proxy 网关下 device pairing 无法 vault 登录（fresh public-wizard 流程） | ✅ PR [#3863](https://github.com/nanocoai/nanoclaw/pull/3863) 已同步关闭 |
| 🟡 中 | [#3866](https://github.com/nanocoai/nanoclaw/pull/3866) | OPEN（fix） | Codex 自 0.147.0 起仅给 MCP server ~1 秒启动窗口，导致首轮 turn 拿不到 NanoClaw 自带工具 | 该 PR 自身即为 fix，正在评审 |
| 🟡 中 | [#3868](https://github.com/nanocoai/nanoclaw/pull/3868) | OPEN（fix） | Claude Code 自 2.1.267 起记录首请求 system prompt 并在每次后续请求重发，与 NanoClaw 容器升级不兼容 | 该 PR 自身即为 fix（升级到 2.1.280 并附兼容选项） |
| 🟢 低 | [#3861](https://github.com/nanocoai/nanoclaw/pull/3861) | **CLOSED**（fix） | setup wizard 在 resume 时对 Echo 镜像源问题询问两次 | ✅ 已关闭 |

⚠️ **重点关注：** Issue #3869 与 PR #3750 的修复目标高度重合（都是 `update-nanoclaw` archive 列表不完整），建议合并时统一扩列以避免反复回归。

---

## 功能请求与路线图信号

今日无独立"feature request"类型 Issue，但多条 PR 透露出明确的方向信号：

- **企业网关扩展**：#3817（Iron Proxy gateway） + #3818（gateway 选择与 provider 登录解耦） + #3815（credential gateway 契约集中化）— 三件套共同指向"多网关、可插拔、企业可控"的方向。
- **Provider 生态扩充**：#3355/#3356（Cursor Agent SDK provider + 安装 skill）是继现有 provider 之后的又一新增成员，体现"provider payload + 安装 skill"成对落地的成熟模式。
- **CDSS（Customer Deployment Self Serve）落地**：#3864 + #3865 一次性把 Slack / Teams 的实例化、credential provider、webhook 路径全部接通，是面向终端客户自助部署的关键里程碑。
- **Codex / Claude Code 升级同步**：#3866 / #3867 / #3868 表明维护团队正在系统性跟进上游 CLI 的版本节奏，确保用户不被上游 breaking 卡住。

**最有可能被纳入下一版本：** #3868（Claude Code + Agent SDK bump，纯升级类、回归面小）+ #3867（Codex 0.146.0 → 0.155.1，纯版本 bump、依赖 #3866）+ #3861（已闭合的低风险 UX 修复类等价物）— 这三条风险面最低，建议优先合入下个 release。

---

## 用户反馈摘要

由于今日 2 条 Issue 评论数均为 0，公开评论信号有限。可从已关闭的 [#3862](https://github.com/nanocoai/nanoclaw/issues/3862) 与 open 中的 [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) 中提炼出真实用户场景：

- **场景 A — 新装用户的"首启即崩"**（#3869）：用户通过 `/update-nanoclaw` 想升级仓库，但第一步就在 `prepare` 阶段崩溃，说明升级链路在"新用户更新到自己仓库"这条路径上缺乏基本的可用性护栏。
- **场景 B — Iron Proxy 网关下的 Codex 用户**（#3862）：通过 `bash nanoclaw.sh --gateway-provider iron-proxy` 新装 NanoClaw，在 public-wizard 流程中无法完成 Codex 设备配对的 vault 写入。issue 提交者明确给出受影响的 commit（`290aa68`），属于"愿意提供精确复现条件"的高质量反馈者，对维护者排障价值很高。
- **场景 C — 长尾回归**（#3861）：用户在 wizard 中途退出 / resume 时，会被重复询问 Echo hardened image 来源。这是典型的"状态机不持久化"型回归，反映 setup 流程的状态边界处理仍不够鲁棒。

整体来看，今日反馈集中在**新版本部署 / 升级路径**，而非核心能力本身，说明产品核心功能已趋于稳定，用户使用扩面正在向"边缘路径（更新、resume、跨 provider 网关组合）"延伸。

---

## 待处理积压

按"创建时间最早 + 仍未关闭"排序：

| 编号 | 类型 | 创建时间 | 标题 | 关注建议 |
|---|---|---|---|---|
| [#2924](https://github.com/nanocoai/nanoclaw/pull/2924) | PR (fix) | 2026-07-04（≈ 81 天） | `fix(delivery): strip agent-group namespace from reaction/edit messageId` | ⚠️ 已开放 **近三个月**，涉及 router 中 `messageIdForAgent` 的命名空间语义，属于跨平台（reaction / edit）行为正确性问题，建议维护者优先评审 |
| [#3451](https://github.com/nanocoai/nanoclaw/pull/3451) | PR (fix) | 2026-08-22（≈ 32 天） | `fix(update-skills): attribute a barrel import to the skill that appends it` | 与 #3869 / #3750 同属 update-skills 链路问题，应与今日 Issue 一并梳理 |
| [#3565](https://github.com/nanocoai/nanoclaw/pull/3565) | PR (fix) | 2026-08-26（≈ 28 天） | `fix(update): let forks keep local adapters through the skill refresh` | 涉及 fork 用户保留本地 adapter 的诉求，关乎下游分发生态 |
| [#3750](https://github.com/nanocoai/nanoclaw/pull/3750) | PR (fix) | 2026-09-08（≈ 15 天） | `fix(update): extract the whole scripts/ tree for the update controller` | ⚠️ 与今日 Issue [#3869](https://github.com/nanocoai/nanoclaw/issues/3869) 直接对应，**应优先合并**，否则升级链路持续暴露给用户 |
| [#3837](https://github.com/nanocoai/nanoclaw/pull/3837) | PR (fix) | 2026-09-16 | `fix(signal): consolidate attachment, DM-routing, and outbound-queue fixes` | 与 #3838 文档 PR 成对，建议同时合并 |
| [#3838](https://github.com/nanocoai/nanoclaw/pull/3838) | PR (docs) | 2026-09-16 | `docs(add-signal): document attachment/DM-routing fixes and troubleshooting` | 与 #3837 成对 |

**建议：** 维护者近期可优先处理（1）#3750 合并以闭环 #3869、（2）#2924 三个月未动需明确方向（接受 / 关闭 / 重写）、（3）#3817 + #3818 + #3815 这条 gateway 重构链路的内部评审一致性确认。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-23

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub 仓库
> 统计周期：过去 24 小时（基于 2026-09-22 至 2026-09-23 的更新）

---

## 一、今日速览

IronClaw 今日处于**低频但有针对性提交**的维护状态。仓库在 24 小时内无新 Issue、无版本发布、无 PR 合并/关闭，但仍产生了 **3 条新提交的 PR**，均处于待评审状态，反映出核心贡献者仍在主动推进小幅但具体的改进。整体活跃度评估为**温和偏低**——属于典型的"持续打磨"阶段，没有喧嚣但也没有停滞。

- 📊 日活跃 PR：**3**（全部 OPEN）
- 🐛 日新增 Issue：**0**
- 🔀 日合并 PR：**0**
- 🚀 日发布版本：**0**

---

## 二、版本发布

**无新版本发布。** 本次日报周期内未检测到任何 Release 标签。如需了解历史版本，请访问 [IronClaw Releases](https://github.com/nearai/ironclaw/releases)。

---

## 三、项目进展

今日无 PR 合并，因此**项目主分支（main）今日无前进动作**。但有 3 条 PR 等待评审，可视为"在途改进"，按方向分类如下：

### 🛠️ Host Runtime（主机运行时）
- **[PR #8108](https://github.com/nearai/ironclaw/pull/8108)** — `fix(host-runtime): add builtin.time shift and typed input issues`
  作者：Bortlesboat（2026-09-22 创建）
  为 `builtin.time` 增加 `operation: "shift"` 语义，支持对 `TimeDelta` 进行签名化（signed）的秒/分/小时/天/周累计偏移，并补齐类型化输入处理。该工作若合并，将使 time 内建工具在表达式层面的能力更接近真正的日期算术库。

### 🌐 WebUI（前端）
- **[PR #8092](https://github.com/nearai/ironclaw/pull/8092)** — `fix(webui): preserve IME composition in the chat composer`
  作者：huiq777（2026-09-10 创建，今日更新）
  修复聊天输入框在 IME（输入法编辑器）合成过程中的按键劫持问题：保留原生 IME 组合键、特别处理 Safari 中 `keyCode 229` 的确认 Enter、避免误触发送。这是一项**重要的中文/日文/韩文用户可用性修复**，但因贡献者等级或 review 排期，已等待 12 天仍未合并。

- **[PR #8107](https://github.com/nearai/ironclaw/pull/8107)** — `feat(webui): add Italian (it) locale`
  作者：huiq777（2026-09-22 创建）
  将意大利语新增为 WebUI 的**第 12 个本地化语言**，源自需求 [#7855](https://github.com/nearai/ironclaw/issues/7855)。`it.ts` 包含完整的英文键合集（含 `device-link-translations` 和 `inspector-translations` 两个按需注册的旁加载包），避免出现静默回退到英文的字符串。

---

## 四、社区热点

由于今日 **Issues 流量为 0、PR 评论数均为 0**（`comments: undefined`），无法量化"评论最多"或"反应最多"的话题。从趋势来看：

- **持续低热度的国际化（i18n）议题**：意大利语本地化跟进体现社区对**欧洲非英语市场**的逐步覆盖。
- **可访问性 / 区域性可用性**：IME 修复 PR 维系 12 天仍未合并，意味着该问题可能尚未被维护者视为高优先级，但其潜在受益用户群体规模可观。

⚠️ 建议社区同学前往上述 PR 页面留下 👍 或建设性评论，以提升评审优先级。

---

## 五、Bug 与稳定性

| 严重度 | 问题 | 关联 PR | 是否已有 fix |
|--------|------|---------|--------------|
| 🟡 中 | `builtin.time` 缺乏 shift 与类型化输入语义（功能/正确性 bug） | [PR #8108](https://github.com/nearai/ironclaw/pull/8108) | ✅ 已有 PR，待合并 |
| 🟡 中 | WebUI 聊天输入框在 IME 合成期间误处理按键，影响 CJK 用户 | [PR #8092](https://github.com/nearai/ironclaw/pull/8092) | ✅ 已有 PR，**长期待评审（12 天）** |

未报告新的崩溃、回归或安全相关 Issue。维护者应优先推动 **PR #8092** 落地，因为它直接影响非英语母语核心用户群的可用性。

---

## 六、功能请求与路线图信号

- **意大利语本地化**（响应 [#7855](https://github.com/nearai/ironclaw/issues/7855)）：
  - 状态：已被 [PR #8107](https://github.com/nearai/ironclaw/pull/8107) 实现
  - 路线图可能性：**很高**，预计在一次 WebUI 迭代中合并，扩展本地化矩阵至 12 种语言。
- **`builtin.time` shift 操作**：
  - 状态：实现位于 [PR #8108](https://github.com/nearai/ironclaw/pull/8108)
  - 路线图信号：表明 host-runtime 在"内建工具链"层面正在填补时间算子的空白，未来或将看到更多此类对内置工具的语义化增强。

---

## 七、用户反馈摘要

由于今日**无新增或更新的 Issue**，[Issues 列表](https://github.com/nearai/ironclaw/issues)中没有可供提炼的最新用户原始反馈。值得注意的是：

- **历史信号**：意大利语支持请求（#7855）从提出到今天实现 PR 仍处于评审阶段，反映国际化需求的处理节奏偏慢。
- **待验证的隐含痛点**：IME 修复长期待评审，可能说明维护团队缺乏 CJK 区域测试人员，或对此类体验问题的优先级判断偏低。

---

## 八、待处理积压

以下条目应被维护者重点关注：

| 序号 | 类型 | 编号 | 标题 | 待处理天数 | 链接 |
|------|------|------|------|------------|------|
| 1 | PR | #8092 | fix(webui): preserve IME composition in the chat composer | **12 天** | [查看](https://github.com/nearai/ironclaw/pull/8092) |
| 2 | PR | #8108 | fix(host-runtime): add builtin.time shift and typed input issues | 1 天 | [查看](https://github.com/nearai/ironclaw/pull/8108) |
| 3 | PR | #8107 | feat(webui): add Italian (it) locale | 1 天 | [查看](https://github.com/nearai/ironclaw/pull/8107) |

📌 **建议维护者**：
- 优先评审 [PR #8092](https://github.com/nearai/ironclaw/pull/8092)，以兑现对 CJK 用户的可用性承诺。
- 为 [PR #8107](https://github.com/nearai/ironclaw/pull/8107) 和 [PR #8108](https://github.com/nearai/ironclaw/pull/8108) 安排一位 host-runtime / i18n 领域 reviewer，以便一次性闭环。

---

### 项目健康度总结
| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐☆☆☆ | 仅 3 条 PR，无合并，节奏平缓 |
| Issue 响应度 | — | 24h 内无新增 Issues，无法评估 |
| 国际化推进 | ⭐⭐⭐☆☆ | 有进展但周期较长 |
| Bug 修复通道 | ⭐⭐⭐☆☆ | 修复已就位，等待落地 |
| 整体健康度 | 🟢 **稳态** | 无 red flag，集中在评审消化阶段 |

> 报告生成依据：IronClaw GitHub API 快照（2026-09-23）。如需某 PR 的更深 diff 分析或 CI 状态，请提供 PR 编号。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-09-23**
**项目地址：** [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日整体处于**高活跃修复期**，围绕 9.22 版本发布后的回归问题进行了密集收尾：单日合并/关闭 PR 达 **11 个**，发布新版本 **1 个**，仍有 **2 个 PR 待合并**和 **5 条 Issue 在跟踪**。主线工作集中在 `openclaw` 子模块的稳定性修复（gateway 启动、配置同步、模型策略、Windows 兼容性等），同时 `cowork` 模块新增了实时步骤进度展示能力。社区方面，5 条活跃 Issue 均为长期遗留问题（最早可追溯至 2026-03），无新增 Bug 反馈，项目健康度整体可控，但**配置持久化、快捷键自定义、国际化适配**等用户痛点仍未在公开 Issue 中获得解决回应。

---

## 2. 版本发布

### 🦞 LobsterAI 2026.9.22（2026-09-22 发布）

本日发布了 **2026.9.22** 版本，是面向近期回归问题的修复性发布，主要包括：

- **`fix(im)`**：恢复原生定时任务与飞书投递通道 ([#2737](https://github.com/netease-youdao/LobsterAI/pull/2737))
- **`fix(openclaw)`**：修复 Windows 网关退出异常与启动故障 ([#2736](https://github.com/netease-youdao/LobsterAI/pull/2736))

**更新重点解读：**

| 类别 | 内容 |
|------|------|
| 类型 | Patch 修复版本 |
| 破坏性变更 | 暂无明显破坏性变更 |
| 升级建议 | 强烈建议所有 9.20/9.21 客户端升级，尤其是 Windows 用户 |
| 已知遗留 | PR #2741 提到的 2.4.13 manifest 兼容问题、PR #2742 提到的技能配置往返稳定性问题在 9.22 中已修复 |

> 注：本日还有针对该版本的发布准备 PR [#2747](https://github.com/netease-youdao/LobsterAI/pull/2747)（Release/2026.9.21），推测 9.22 版本的发布流程实际由其衍生。

---

## 3. 项目进展（重要 PR）

今日合并/关闭的 PR 共 11 条，以下按主题归类整理：

### 🔧 OpenClaw 稳定性集群（核心主线，6 条）

围绕 gateway 启动链路的可靠性进行了系统性加固：

| PR | 标题 | 影响 |
|---|---|---|
| [#2746](https://github.com/netease-youdao/LobsterAI/pull/2746) | 修复 Clawguard 启动时不必要的 lease 等待 | 解决网关启动被 `timed out waiting for plugin lifecycle lease` 阻塞的问题，缩减 500ms 等待窗口中的 SQLite 同步开销 |
| [#2745](https://github.com/netease-youdao/LobsterAI/pull/2745) | 升级时恢复非法生成的模型策略 | 修复 `DeepSeek V4 Pro` 等旧模型 ID 导致整个网关无法启动的升级回归 |
| [#2744](https://github.com/netease-youdao/LobsterAI/pull/2744) | 将 exec sessions snapshot 移出 system prompt | 防止后台运行进程每轮都让模型 provider 前缀缓存失效（对齐上游 #140799）|
| [#2743](https://github.com/netease-youdao/LobsterAI/pull/2743) | Backport koffi Windows 私有目录补丁 | 修复安全软件拦截 `powershell.exe + Add-Type` 时导致会话迁移/Doctor 修复全链路失败的问题 |
| [#2742](https://github.com/netease-youdao/LobsterAI/pull/2742) | 稳定技能配置同步与超时恢复 | 减少 9.20 客户端反复重启问题；过滤无效文件变动，避免重复通知引发的配置反复改写 |
| [#2741](https://github.com/netease-youdao/LobsterAI/pull/2741) | 支持旧版 nsp-clawguard 启动 | 修复 9.22 macOS 升级后 nsp-clawguard 启动失败问题，处理 2.4.13/manifest 2.4.12 与 2.5.0 兼容 |

### 🤝 Cowork 协作体验（2 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#2749](https://github.com/netease-youdao/LobsterAI/pull/2749) | 流式输出每步实时进度与 diff 统计 | 工具调用进行中即展示 live activity（`isGenerating`、`liveEditDiff`），通过 `toolDiffStats` 共享 diff 统计 |
| [#2750](https://github.com/netease-youdao/LobsterAI/pull/2750) | cowork turn progress polish | 上述能力的打磨版本，已合并关闭 |

### 🎨 模型与渲染细节（2 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#2748](https://github.com/netease-youdao/LobsterAI/pull/2748) | 提高 Kimi K3 maxTokens 并本地化流包装 | Kimi K3 输出 token 上限从 8,192 提升至匹配 1,048,576 上下文窗口；用本地 `kimiK3StreamWrapper` 替代 plugin-sdk 实现 |
| [#2740](https://github.com/netease-youdao/LobsterAI/pull/2740) | 还原 CJK 字体 body 权重到 400 | 解决 macOS 上 PingFang SC 因 445 权重与 markdown `<strong>`（600）对比度坍塌的问题 |

### 📦 发布流程（1 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#2747](https://github.com/netease-youdao/LobsterAI/pull/2747) | Release/2026.9.21 | 9.21/9.22 版本的发布准备 |

**整体评价：** 今日属于"集中消化存量回归"的工程日，OpenClaw 网关启动链路是本月最核心的稳定性议题，已完成 5+ 个修补。Cowork 实时进度是本月少见的新功能增量。**项目整体处于稳步打磨阶段，方向清晰。**

---

## 4. 社区热点

今日活跃 Issue 均集中在**长期未解的体验类问题**上，按评论数排序：

| Issue | 标题 | 评论 | 状态 |
|---|---|---|---|
| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 配置文件和工作空间文件在重启后被重置 | 3 | OPEN（非 stale）|
| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | 微信回复没有与客户端同步，要等全部回复完才一次性分条发送 | 2 | OPEN（stale）|
| [#981](https://github.com/netease-youdao/LobsterAI/issues/981) | 启动 app 报错 Failed to start Web Search service | 1 | OPEN（stale）|
| [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | 「预设 Agents」的国际化适配问题 | 1 | OPEN（stale）|
| [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | 无法通过按下新的组合键修改快捷键 | 1 | OPEN（stale）|

**诉求分析：**

- **#1006（最热）** 反映了用户对**配置持久化权**的强烈诉求：当用户修改了 `openclaw.json` 的飞书 streaming 配置或工作空间内的 `AGENTS.md`，重启后被模板覆盖，只能用定时任务做 workaround，这是**配置管理 UX 的设计缺陷**。
- **#986** 反映出**微信通道实时性**与桌面端体验的脱节，是 IM 通道层的产品体验短板。
- **#982** 反映出**预设 Agents i18n** 未走完整国际化流程，是 UI 文案静态化的常见疏漏。
- **#983** 是**快捷键自定义功能承诺但未实现**的诚信问题，影响用户对官方文档的信任。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 - 启动/启动链崩溃类

| 描述 | Issue | 状态 | 是否有 fix |
|---|---|---|---|
| 启动报 `Failed to start Web Search service` | [#981](https://github.com/netease-youdao/LobsterAI/issues/981) | OPEN（stale）| ❌ 无关联 PR |
| macOS 升级后 nsp-clawguard 无法启动 | （无独立 Issue） | 已修复 | ✅ PR #2741 |
| 旧模型 ID（如 `DeepSeek V4 Pro`）阻止网关启动 | （无独立 Issue） | 已修复 | ✅ PR #2745 |
| Clawguard 启动 lease 等待阻塞 gateway ready | （无独立 Issue） | 已修复 | ✅ PR #2746 |

### 🟠 P1 - 配置/数据丢失类

| 描述 | Issue | 状态 | 是否有 fix |
|---|---|---|---|
| 配置文件 + 工作空间文件重启后被覆盖 | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | OPEN | ❌ 无 |
| 用户插件 entry hooks 重启后丢失 | （无独立 Issue，但 Issue #1006 范围相近） | 待合并 | 🟡 PR #2727 待合并 |
| 技能配置同步导致网关反复重启 | （无独立 Issue） | 已修复 | ✅ PR #2742 |

### 🟡 P2 - 体验降级类

| 描述 | Issue | 状态 | 是否有 fix |
|---|---|---|---|
| 微信回复批量到达，体验割裂 | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | OPEN（stale）| ❌ 无 |
| Windows 安全软件拦截导致会话迁移/Doctor 失败 | （无独立 Issue） | 已修复 | ✅ PR #2743 |
| 后台进程让 system prompt prefix cache 每轮失效 | （无独立 Issue） | 已修复 | ✅ PR #2744 |
| macOS 上 CJK `<strong>` 与 body 字体对比度坍塌 | （无独立 Issue） | 已修复 | ✅ PR #2740 |
| Kimi K3 输出 token 仅 8,192，未利用 1M 上下文 | （无独立 Issue） | 已修复 | ✅ PR #2748 |

---

## 6. 功能请求与路线图信号

用户提出的功能请求主要来自现有 Issue：

| 需求 | 来源 Issue | 路线图可能性 |
|---|---|---|
| 配置文件/工作空间文件持久化机制（官方方式而非定时任务 workaround）| [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | **高**：与 PR #2727（用户插件 hooks 持久化）方向一致，且 #2727 仍待合并 |
| 快捷键自定义"按下新组合键"功能落地 | [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | **中**：属于承诺功能的兑现，需要专门 sprint |
| 预设 Agents 名称/描述多语言化 | [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | **高**：技术改动小，预计下个版本可覆盖 |
| 微信通道流式回复（与客户端同步）| [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | **中**：涉及通道层改造，需要更多设计讨论 |

**新功能进展信号：** PR #2749/#2750 已落地的 **Cowork 实时步骤进度 + diff 统计**，是本月最具可见性的新功能增量，预计将出现在下一个用户可见版本说明中。

---

## 7. 用户反馈摘要

从活跃 Issue 的评论与摘要中提炼的真实用户声音：

### 😣 不满意 / 痛点

1. **配置被强制覆盖是"反用户"的**（[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)）
   > 用户原话："目前只能通过定时任务 workaround 解决，说明保护机制过于激进，影响了用户正常自定义需求。"
   > —— 反映出用户希望官方提供更明确的"用户配置 vs 默认模板"边界。

2. **微信机器人体验割裂**（[#986](https://github.com/netease-youdao/LobsterAI/issues/986)）
   > 用户原话："前面等待时间长，后面又消息狂发，这种体验有点糟糕。"
   > —— IM 通道需要做分批流式或实时流式分发。

3. **文档承诺与实现不一致**（[#983](https://github.com/netease-youdao/LobsterAI/issues/983)）
   > 用户指向官方文档承诺的"按下新的组合键"修改快捷键方式未实现。
   > —— 文档与实现脱节损害信任。

4. **Web Search 启动失败**（[#981](https://github.com/netease-youdao/LobsterAI/issues/981)）
   > 启动阶段 `Repaired web-search runtime from bundled resources` 之后立即报 `Failed to start Web Search service`，需要更清晰的错误链路。

### 😊 潜在满意信号

- 今日合并的 **PR #2749 / #2750（Cowork 实时进度）** 是首个被多次 PR 打磨的新功能，预示着产品对协作体验的投入加大。
- **OpenClaw 系列稳定性 PR** 一次性解决了多个用户层感知的"反复重启""升级后无法启动"问题，预期会带来一波正向反馈。

---

## 8. 待处理积压

以下问题需要维护者主动关注，存在长期被忽视的风险：

| 类别 | 编号 | 标题 | 创建时间 | 风险 |
|---|---|---|---|---|
| 🔴 配置 UX | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 配置文件和工作空间文件在重启后被重置 | 2026-03-28 | 用户最高关注（3 评论），与 PR #2727 联动可一并修复 |
| 🟠 文档承诺 | [#983](https://github.com/netease-youdao/LobsterAI/issues/983) | 无法通过按下新的组合键修改快捷键 | 2026-03-27 | 文档与实现脱节，建议要么实现要么更新文档 |
| 🟡 i18n | [#982](https://github.com/netease-youdao/LobsterAI/issues/982) | 「预设 Agents」的国际化适配问题 | 2026-03-27 | 技术改动小，但已 stale 近 6 个月 |
| 🟡 IM 通道 | [#986](https://github.com/netease-youdao/LobsterAI/issues/986) | 微信回复没有与客户端同步 | 2026-03-27 | stale，产品体验类，需要重新评估优先级 |
| 🟠 依赖更新 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | dependabot: electron 43→44 升级 | 2026-04-02 | 已搁置近 6 个月，需评估升级风险 |
| 🟡 待合并 PR | [#2727](https://github.com/netease-youdao/LobsterAI/pull/2727) | 持久化 OpenClaw entry hooks across sync | 2026-09-20 | 与 #1006 直接相关，建议优先 review |

**给维护者的建议：**

1. **优先合并 PR #2727**，并将其与 Issue #1006 关联发布修复说明，可一次性消化两个高优先级用户诉求。
2. **批量处理 stale Issues**：建议对 4 条 stale Issue 做一次 triage，更新计划或关闭无效项，恢复社区信任。
3. **考虑将依赖升级 PR #1277 拆分**，electron 主版本升级风险大，可先单独评估 electron-builder。
4. **建立"文档承诺 = 实现计划"的台账**，避免 #983 类文档与实现脱节再次发生。

---

## 📊 数据快照

| 指标 | 数值 |
|---|---|
| 24h 新开/活跃 Issues | 5 |
| 24h Issues 关闭 | 0 |
| 24h PR 待合并 | 2 |
| 24h PR 合并/关闭 | 11 |
| 新版本发布 | 1（2026.9.22）|
| 最高评论 Issue | #1006（3 条）|
| 最高产提交者 | fisherdaddy（4 条 PR）、btc69m979y-dotcom（4 条 PR）|
| 主线工作领域 | openclaw 稳定性 / cowork 协作体验 / 模型适配 |

---

*本日报

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**报告日期：** 2026-09-23
**项目：** [moltis-org/moltis](https://github.com/moltis-org/moltis)
**数据周期：** 过去 24 小时

---

## 1. 今日速览

Moltis 项目今日社区活跃度处于**低水位**。过去 24 小时内无新 Issue、无 PR 合入、无版本发布，仅有 1 条由 [dependabot](https://github.com/dependabot) 自动开启的依赖升级 PR（[#1284](https://github.com/moltis-org/moltis/pull/1284)），处于待合并状态。整体来看，项目当日处于**例行维护节奏**，未见显著的功能开发或社区互动事件，仓库保持稳定但偏静默。

| 指标 | 数值 |
|---|---|
| 新开/活跃 Issue | 0 |
| 关闭 Issue | 0 |
| 待合并 PR | 1 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |

---

## 2. 版本发布

**本节今日无内容。** 过去 24 小时内无新 Release 发布。如需查阅历史版本，请参见 [Releases 页面](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码主干相对前一快照无新增提交合入。

唯一活跃的 PR：

- **[#1284 chore(deps): bump wasmtime-wasi from 36.0.9 to 36.0.11](https://github.com/moltis-org/moltis/pull/1284)** — 由 `dependabot[bot]` 创建于 2026-09-22，属于 `cargo` 分组内的 1 项依赖更新。该 PR 提升运行时的 WASI 能力基线，属于维护性变动，不涉及 API 调整或行为变更。

**推进度评估：** 当日项目向主干推进的实质内容为 0，仅有 1 项 pending 状态的依赖等待合并。

---

## 4. 社区热点

今日**无活跃讨论的 Issue 或 PR**。

- 评论数最多的 PR 为 [#1284](https://github.com/moltis-org/moltis/pull/1284)，👍 数为 0，无评论互动。
- 无新增或被引用的社区讨论线索。

这通常意味着项目正处于两个开发冲刺之间的间歇期，或维护者正在处理非公开渠道（线下/私有）的筹备性工作。

---

## 5. Bug 与稳定性

**本节今日无内容。**

过去 24 小时内：
- 未报告任何新的 Bug、崩溃或回归问题。
- 现有公开 Bug 列表为空（当日无新增条目）。

依赖更新 [#1284](https://github.com/moltis-org/moltis/pull/1284) 涉及 `wasmtime-wasi` 36.0.9 → 36.0.11，属于 patch 级别的 WASI 兼容性维护；从 wasmtime 上游发布说明看通常不引入破坏性变更，但建议在合入后关注 CI 中 WASM 沙箱相关测试的运行结果。

---

## 6. 功能请求与路线图信号

**本节今日无新内容。**

- 当日无新功能请求 Issue 被提出。
- 无新 PR 指向新功能方向。
- 当前的 1 条 pending PR 仅为依赖升级，不构成路线图信号。

若需评估未来版本可能纳入的内容，需参考更长时间窗口（建议回溯 7~14 天）的 PR/Issue 趋势。

---

## 7. 用户反馈摘要

**本节今日无内容。**

- 无新增 Issue 评论可作为真实用户反馈来源。
- 无 PR 讨论可提取。
- 在缺乏用户互动数据的情况下，无法对用户满意度、使用场景或痛点进行有效推断。

---

## 8. 待处理积压

| 类型 | 数量 | 备注 |
|---|---|---|
| 待合并 PR | 1 | 仅为 [dependabot #1284](https://github.com/moltis-org/moltis/pull/1284)，等待维护者 review |
| 待响应 Issue | 0（今日新增） | 历史积压 Issue 不在本次数据范围 |

**维护者关注提醒：**

- **#1284** 创建于 2026-09-22，建议维护者在常规巡检中处理该依赖升级，确保 wasmtime 补丁版本与上游同步，避免安全/兼容性窗口进一步扩大。

> ⚠️ 注：本报告仅基于过去 24 小时的快照数据，未涵盖历史长期积压的 Issue/PR 状态。如需完整的积压健康度评估（例如长期未回复 Issue、首问响应时间等），建议补充 `issues` 全量 API 与时间维度筛选数据。

---

## 附录：原始数据溯源

- 数据快照时间：2026-09-23
- PR 数据源：[moltis-org/moltis PRs](https://github.com/moltis-org/moltis/pulls)
- Issue 数据源：[moltis-org/moltis Issues](https://github.com/moltis-org/moltis/issues)
- Release 数据源：[moltis-org/moltis Releases](https://github.com/moltis-org/moltis/releases)

**报告生成方：** AI 智能体与个人 AI 助手领域开源项目分析

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-23

> 数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（注：仓库当前 Issues/PR 路径仍为 `QwenPaw`，疑似项目近期重命名或镜像，统计分析时视为同一项目）
> 统计窗口：过去 24 小时

---

## 1. 今日速览

CoPaw 今日呈现**高强度收尾 + 积极备版**的双线节奏：Issues 关闭率高达 **71%**（41 条更新中关闭 29 条），PR 合并/关闭 23 条（占 46 条的 50%），社区活跃度持续偏高。仓库已出现 **v2.2.2 发布说明 PR**（[#7928](https://github.com/agentscope-ai/QwenPaw/pull/7928)），说明 2.2.1 的若干回归正被集中清理；同时一批围绕**模型自动降级、思考强度多档控制、Agent 子任务可视化**的长期积压需求在 24 小时内集中关闭，体现出维护团队在本周做了较大规模的路线图收敛。整体项目健康度良好，但仍有若干 **OPEN 高严重度 Bug**（LLM 超时不可恢复、context compaction 破坏 tool_call、Volcengine 400 报错）待修复。

---

## 2. 版本发布

- **今日无新版本发布**。
- **下个版本预告**：[PR #7928](https://github.com/agentscope-ai/QwenPaw/pull/7928)（OPEN）"chore: release notes for v2.2.2" — 维护者已开始撰写 v2.2.2 的发布说明，预期为 2.2.1 的小修版本，修复若干 2.2.x 引入的回归。建议关注 2.2.2 中是否覆盖以下高频问题：
  - Console 停止任务后实际仍在运行（[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)）
  - 任务执行中再发消息触发的 409（[#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559)、[#7929](https://github.com/agentscope-ai/QwenPaw/issues/7929)）
  - qwenpaw-pet 插件授权异常（[#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898) 已关闭修复）

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 意义 |
|---|---|---|
| [#3819](https://github.com/agentscope-ai/QwenPaw/pull/3819) | Browsable remote model listing and batch insertion（替换 Auto Discover） | 模型管理 UX 重大改进：远程模型列表可浏览、可多选、可批量插入，直击 [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) "添加模型步骤过多"的核心痛点 |
| [#6668](https://github.com/agentscope-ai/QwenPaw/pull/6668) | feat(providers): responses prompt caching（GPT-5.6+） | 新增 OpenAI Responses provider 的 prompt cache 支持，token 成本与延迟可显著下降 |
| [#7938](https://github.com/agentscope-ai/QwenPaw/pull/7938) | test(unit): batch-3 lock and portability tests cross-platform | 测试覆盖持续推进（同一批次的 [#7941](https://github.com/agentscope-ai/QwenPaw/pull/7941) 显示：覆盖率 70.51% → **73.79%**，+3.28pp，新加 47 文件/2720 用例） |
| [#7898](https://github.com/agentscope-ai/QwenPaw/pull/7898) | Fix/qwenpaw pet approval actor | 修复 `qwenpaw-pet` 插件在 Console 工具授权场景下 100% 报 HTTP 500 的问题 |
| [#7933](https://github.com/agentscope-ai/QwenPaw/pull/7933) | fix(pet): preserve caller identity when resolving approvals | 配套 PR，修复桌面宠物插件在审批时未透传 `actor` 参数的 TypeError |
| [#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955) | Add lifecycle events for background subagents | 子代理后台任务的父-子生命周期追踪、取消传播与心跳检测，覆盖 [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) 描述的并发重启 bug |
| [#1512](https://github.com/agentscope-ai/QwenPaw/pull/1512) | fix(local-models): support OpenAI-style tool calls | 本地模型支持嵌套 `<tool_call>`、保留 tool call id/原始参数、避免提前 emit `tool_use`，补齐流式解析的回归测试 |

**整体进度评估**：今日合并/关闭的 PR 集中在 **(a) 模型/Provider 健壮性**、**(b) 单元测试覆盖率**、**(c) Console 与 pet 插件一致性**。项目处于"小版本快速收尾 + 准备发布 2.2.2"阶段。

---

## 4. 社区热点（评论最多）

按评论数排序（不含 PR，因 PR 列表评论数普遍为空）：

| Issue | 标题 | 评论 | 状态 |
|---|---|---|---|
| [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) | 支持按 conversation 级别指定模型 | 8 | CLOSED |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 停止按钮显示停止但实际仍在执行 | 8 | CLOSED |
| [#4036](https://github.com/agentscope-ai/QwenPaw/issues/4036) | 添加模型步骤过多（good first issue） | 7 | CLOSED |
| [#7739](https://github.com/agentscope-ai/QwenPaw/issues/7739) | 历史对话移至右侧 | 7 | CLOSED |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 执行中发送消息触发 409 | 6 | CLOSED |
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Context compaction 丢失 tool_call 结构 → 400 | 5 | **OPEN** |
| [#2869](https://github.com/agentscope-ai/QwenPaw/issues/2869) | 是否可增加主题/自定义颜色 | 4 | CLOSED |
| [#4923](https://github.com/agentscope-ai/QwenPaw/issues/4923) | spawn_subagent 子任务运行中无法查看内容 | 4 | CLOSED |
| [#7062](https://github.com/agentscope-ai/QwenPaw/issues/7062) | per-agent/per-session reasoning_effort override | 3 | CLOSED |

**诉求分析**：
- **模型粒度配置** 成为最热的反复诉求（#6318、#4036、#5182、#7062）—— 用户希望从 "全局单一模型" 走向 "agent 级 / 会话级 / 任务级" 多档可配。
- **Console 停止/并发控制 UX** 是第二大热点（#7567、#7559、#7929、#7721），问题集中表现为"前端与后端状态不一致"。
- **空间布局与个性化**（#7739、#2869、#5909）反映 14 寸笔记本用户的强诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 严重（进程/会话不可用，需重启）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#7935](https://github.com/agentscope-ai/QwenPaw/issues/7935) | LLM `Request timed out` 后**永不自动恢复**，必须手动重启 QwenPaw（2.2.1） | 暂无 |
| [#7721](https://github.com/agentscope-ai/QwenPaw/issues/7721) | Workspace 文件浏览器（SSE `/api/workspace/watch`）在 workspace 含有大型 repo 时**冻结整个服务器**（`watchfiles.awatch` RustNotify 同步初始化阻塞事件循环） | 暂无 |

### 🟠 P1 — 高（功能受损，需 workaround）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#5856](https://github.com/agentscope-ai/QwenPaw/issues/5856) | Context compaction 永久丢失 `tool_use`/`tool_result` 结构，导致 400 / 消息计数错位（v1.1.12.post2 起） | 暂无 |
| [#7549](https://github.com/agentscope-ai/QwenPaw/issues/7549) | Volcengine Ark Responses API：以 assistant text 结尾的 `input` 被 400 拒绝 `MissingParameter: partial` | 暂无 |
| [#7850](https://github.com/agentscope-ai/QwenPaw/issues/7850) | `DriverManager.reload_driver` 后台保存陈旧卡片，覆盖并发策略写入（lost update） | 暂无 |
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 停止按钮视觉上停止但任务继续执行 | 暂无直接 fix；相关 PR [#4955](https://github.com/agentscope-ai/QwenPaw/pull/4955) 已合并子代理生命周期 |

### 🟡 P2 — 中（UX/一致性）
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 任务执行中再发消息触发 409（应入队而非报错） | 暂无 |
| [#7929](https://github.com/agentscope-ai/QwenPaw/issues/7929) | Stop 后立刻发消息仍 409（与 #7559 同源） | 暂无 |
| [#7890](https://github.com/agentscope-ai/QwenPaw/issues/7890) | 零停机 reload 丢失插件 runtime hook（middleware 保留，行为不一致） | 暂无 |
| [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) | Telegram Markdown 表格不渲染，原样输出 `\|` / `---` | 暂无 |
| [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录变更不持久化 | 暂无 |
| [#7771](https://github.com/agentscope-ai/QwenPaw/issues/7771) | 上下文压缩/新对话产生无意义空白标签（"Compact Chat Session Title"） | 暂无 |

**总体观察**：今日 0 个 P0 Bug 有合并的 fix PR，**建议在 v2.2.2 中优先解决 #7935 与 #7721**，二者都会直接阻断用户继续使用。

---

## 6. 功能请求与路线图信号

**已合并 / 即将落地的功能信号**：
- **模型自动降级链**（Model Fallback Chain）—— [#4882](https://github.com/agentscope-ai/QwenPaw/issues/4882)、[#5351](https://github.com/agentscope-ai/QwenPaw/issues/5351)、[#5572](https://github.com/agentscope-ai/QwenPaw/issues/5572)、[#

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报 · 2026-09-23

## 📌 今日速览

过去 24 小时内 ZeptoClaw 仓库整体活跃度处于**低水位运行状态**。社区端**无新 Issue 开闭**，代码合入端**无 PR 合并或关闭**，亦**无新版本发布**。唯一动态来源于 Dependabot 自动开启的三个依赖升级 Pull Request，分别针对 `docker/build-push-action`、`actions/checkout` 与 `mail-parser` 三个核心依赖。综合评估：**项目今日处于依赖维护窗口，无功能性推进**，仓库活跃度主要靠自动化工具维持，社区贡献与维护者响应均处于静默期。

---

## 🚀 版本发布

**今日无新版本发布。**

自上一次发布以来，仓库仍处于依赖累积阶段，尚未触发发版条件。维护者如计划发布新版本，建议先将已堆积的 Dependabot PR（[#704](https://github.com/qhkm/zeptoclaw/pull/704)、[#705](https://github.com/qhkm/zeptoclaw/pull/705)、[#706](https://github.com/qhkm/zeptoclaw/pull/706)）批量合并并验证 CI 矩阵后再行 tag。

---

## 🔧 项目进展

今日**无任何 PR 被合并或关闭**，项目代码层面无实质性推进。三条开启的 PR 全部由 [dependabot[bot]](https://github.com/dependabot) 自动创建：

| PR | 依赖项 | 版本跨度 | 类别 |
|---|---|---|---|
| [#704](https://github.com/qhkm/zeptoclaw/pull/704) | docker/build-push-action | 7.2.0 → 7.3.0 | GitHub Actions |
| [#705](https://github.com/qhkm/zeptoclaw/pull/705) | mail-parser | 0.11.3 → 0.11.9 | Rust crate |
| [#706](https://github.com/qhkm/zeptoclaw/pull/706) | actions/checkout | 6.0.2 → 7.0.1 | GitHub Actions |

**特别关注点**：
- [#706](https://github.com/qhkm/zeptoclaw/pull/706) 中 `actions/checkout` 升级跨度较大（6.x → 7.x），属于**主版本升级**，可能引入 Node.js 运行时要求变化，建议维护者确认 CI 节点环境兼容性后再合并。
- [#705](https://github.com/qhkm/zeptoclaw/pull/705) 中 `mail-parser` 跨越 6 个补丁版本（0.11.3 → 0.11.9），需注意 changelog 中是否涉及 MIME 解析行为变更。

**功能维度评估** = 推进路线及推进进度：**0 行功能性代码合入**。

---

## 💬 社区热点

今日三条 PR **评论数均为 0、👍 反应数均为 0**，无任何自然流量涌入。**社区热度完全由自动化机器人贡献**：

- 🔥 最受关注 PR：三者并列第一，均为 0 评论 / 0 👍。
- 无人工 review 痕迹，无用户需求讨论。

**诉求分析**：当前社区诉求信号**完全缺失**。建议维护者在开源治理仪表盘层面，主动同步路线图或在 Discord/Discussion 中抛出 2～3 个 issue 引导用户参与讨论，避免社区进入"僵尸态"。

---

## 🐛 Bug 与稳定性

今日**无任何 Bug、崩溃或回归类 Issue 报告**。

由于 PR [#705](https://github.com/qhkm/zeptoclaw/pull/705) 与 [#706](https://github.com/qhkm/zeptoclaw/pull/706) 涉及上游依赖的版本跃升，潜在风险点预判如下：

| 风险项 | 严重程度 | 是否有 Fix PR | 备注 |
|---|---|---|---|
| `actions/checkout` v7 兼容 Node 运行时 | 🟡 中 | ❌ 仅依赖升级 PR | 建议维护者手动验证 |
| `mail-parser` 0.11.x 解析行为变化 | 🟢 低 | ❌ 仅依赖升级 PR | 上游为成熟库，回归概率较低 |
| `docker/build-push-action` 7.2 → 7.3 | 🟢 低 | ❌ 仅依赖升级 PR | 补丁级升级，影响有限 |

---

## 💡 功能请求与路线图信号

今日**无新功能请求 Issue 出现**，亦**无功能类 PR 提交**。Dependabot 提交的三条 PR 均不属于功能范畴。

**路线图信号**：当前仓库缺乏明确的近期路线图公开信号。建议维护者：
1. 在 README 或 GitHub Projects 中公开下一阶段的 AI Agent / Personal Assistant 功能规划。
2. 将 [#704](https://github.com/qhkm/zeptoclaw/pull/704)、[#705](https://github.com/qhkm/zeptoclaw/pull/705)、[#706](https://github.com/qhkm/zeptoclaw/pull/706) 这类依赖升级纳入"日常维护 Sprint"，避免与功能 PR 在同一批次合并造成 release diff 噪音。

---

## 🗣️ 用户反馈摘要

**今日无 Issues 评论与 PR 评论，无法提取真实用户反馈。**

仓库在过去 24 小时处于**完全静默状态**——无用户提交问题、无维护者回复、无社区投票行为。这对于一个面向 AI Agent / Personal Assistant 领域的开源项目而言属于**异常低活跃信号**，可能反映出：
- 用户群体集中在 Discord / 微信群等非 GitHub 渠道反馈；
- 项目尚处早期，用户基数较小；
- 最近版本稳定，无明显痛点驱动用户开 issue。

---

## 📋 待处理积压

虽然今日无新增 issue，但以下 **3 条 Dependabot PR 已开启等待 review**，建议维护者尽快处理以避免积压：

| 链接 | 类型 | 开启日期 | 等待时长 | 优先级建议 |
|---|---|---|---|---|
| [#704](https://github.com/qhkm/zeptoclaw/pull/704) | Dep bump | 2026-09-22 | 1 天 | 🟢 低（补丁级） |
| [#705](https://github.com/qhkm/zeptoclaw/pull/705) | Dep bump | 2026-09-22 | 1 天 | 🟡 中（补丁跨度大） |
| [#706](https://github.com/qhkm/zeptoclaw/pull/706) | Dep bump | 2026-09-22 | 1 天 | 🔴 高（major bump） |

**维护者行动建议**：
- ✅ 优先评审 [#706](https://github.com/qhkm/zeptoclaw/pull/706)（major 升级潜在兼容性影响最大）；
- ✅ 其次 [#705](https://github.com/qhkm/zeptoclaw/pull/705)（邮件解析为关键路径）；
- ✅ [#704](https://github.com/qhkm/zeptoclaw/pull/704) 可快速通过 CI 后 squash merge。

---

> **健康度综合评分**：⭐⭐☆☆☆（2/5）
> **评分依据**：今日无代码合入、无社区互动、无版本发布；仓库活跃度完全由 Dependabot 自动化维持。建议维护者主动引导社区参与并及时清理依赖积压 PR。
>
> *报告生成时间：2026-09-23 · 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-23

> 数据范围：2026-09-22 至 2026-09-23（过去 24 小时）
> 项目主页：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日呈现**高活跃、高吞吐**的工程节奏：24 小时内有 34 个 Issue 流转（19 活跃 / 15 关闭）、50 个 PR 流转（32 待合并 / 18 合并关闭）。关闭率（Issue 44%、PR 36%）显著高于一般开源项目均值，反映维护团队响应积极。**安全与数据丢失类 Bug 集中收口**（如 #9391、#9392、#9187、#10797），同时多份 RFC（#10970、#10929、#10930、#11027、#11053、#11017）正在汇集共识，WhatsApp Web 通道迎来一次集中性能力补齐。整体看，项目处在"修 bug + 补通道 + 起草架构级 RFC"的并行推进期。

---

## 2. 版本发布

本周期无新版本发布。如下游需要锁定变更，建议沿 `master` 分支追踪以下 PR 合并节点：

- 暂无可推荐的稳定 tag。

---

## 3. 项目进展

今日已合并或关闭的 PR/Issue 显示项目在以下方向有明显推进：

| 方向 | 代表性进展 | 说明 |
|---|---|---|
| 安全基线 | [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) 关闭 | 命令审计日志默认开启但不写日志的"沉默审计"问题关闭，是 0Code 安全合规方向的重要收口 |
| 通道安全 | [#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392) 关闭 | LINE 群消息绕过白名单与配对握手的问题已修复（host audit 类） |
| 数据完整性 | [#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187) 关闭 | 微信同步游标在入队前持久化导致崩溃后丢消息（S0 级别） |
| Provider 缓存 | [#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)、[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) 关闭 | Anthropic 缓存断点丢失 + 1 小时 TTL 可配置，提升长会话成本与稳定性 |
| Provider 图像/工具 | [#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)、[#10952](https://github.com/zeroclaw-labs/zeroclaw/issues/10952) 关闭 | 同 turn 工具调用后图像丢失 + seam sanitizer 改写签名推理 |
| WhatsApp 通道 | [#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981)、[#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983)、[#10918](https://github.com/zeroclaw-labs/zeroclaw/issues/10918) 关闭 | 出站图片缺缩略图、原生投票、HTTP chunk 误判均关闭 |
| 文档治理 | [#11042](https://github.com/zeroclaw-labs/zeroclaw/pull/11042) 关闭 | RFC #6165 的"替换优先"集成政策记录到开发文档 |
| 依赖治理 | [#11038](https://github.com/zeroclaw-labs/zeroclaw/pull/11038) 关闭 | `RUSTSEC-2026-0292`（imbl-sized-chunks 双重释放）告警显式忽略 |

**进度评估**：今日净推进约 **+13 个 Issue 关闭** + **2 个 PR 关闭**，重点在于"审计—通道—缓存—文档"四块基础设施加固，与 ZeroClaw 强调的"host audit + 0Code 安全"路线图吻合。

---

## 4. 社区热点

按评论数排序，今日最活跃的讨论：

1. **[#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853)（8 条评论）** — 从 `.well-known` agent-skills 发现索引安装 skills。维护者 jonathanhefner 推动，对齐 Agent Skills 工作组的 `.well-known` 标准化（agentskills/agentskills#254），Cloudflare、Vercel 等已采用。这是**生态互通型**的关键议题。
2. **[#10970](https://github.com/zeroclaw-labs/zeroclaw/issues/10970)（5 条评论）** — 多 Agent 主机的 host-scoped 准入控制与每 Agent 资源边界。JordanTheJet 提出"延迟降级 vs 稳定性降级"的取舍，本质是**多租户运行时隔离**诉求。
3. **[#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930)（5 条评论）** — "Agent 问人类"应只有一个统一的持久化原语（建议直接复用 SOP 审批门）。减少概念重复。
4. **[#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929)（5 条评论）** — 出站消息投递回执：当前 `SendMessage` 完全无 ID，无法确认到达。属于**协议可观测性**。
5. **[#9972](https://github.com/zeroclaw-labs/zeroclaw/issues/9972)（4 条评论）** — 消除本地化边界之外的用户面字面量输出（长期清理型 tracker）。
6. **[#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922)（4 条评论）** — WhatsApp Web 自动 TTS 忽略 `suppress_voice`。与今日 #11059、#11060、#11057 形成 WhatsApp 语音路径"集中检修"组合。

**诉求归纳**：生态标准化接入（#4853）、多 Agent 治理（#10970）、统一原语收敛（#10930）、可观测性（#10929）。前三者指向"Agent 互联网"的工程基础，后者指向企业级合规与运维。

---

## 5. Bug 与稳定性

按严重程度分级（S0 = 数据丢失/安全风险；S2 = 降级行为；S3 = 轻微问题）：

### S0 — 数据丢失 / 安全风险（需立即关注）

- **[#11058](https://github.com/zeroclaw-labs/zeroclaw/issues/11058)**（新开）`allowed_commands` 字面命中即豁免 `block_high_risk_commands`，随后走 `auto_approve` 无日志运行。Qo-roj 报告，**尚无 PR**。
- **[#10797](https://github.com/zeroclaw-labs/zeroclaw/issues/10797)** markdown memory 后端并发 `store()` 因无写者串行化而静默丢条目。Kouhe3 报告（agent 提交）。**尚无 PR**。
- **[#9187](https://github.com/zeroclaw-labs/zeroclaw/issues/9187)**（已关闭）WeChat 同步游标先于消息入队持久化导致崩溃后丢消息，**已修复**。

### S1 — 工作流受阻

- **[#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225)** ZeroCode RPC 会话无法通过 channel-backed tools 访问已配置通道。**尚无 PR**。
- **[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)**（已关闭）LINE 群消息绕过白名单/配对握手。**已修复**。
- **[#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391)**（已关闭）命令审计日志默认开启但实际无写入。**已修复**。
- **[#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674)**（已关闭）历史修剪停在上限，工具密集型会话每几个回合就重剪导致 prompt cache 失效。**已修复**。

### S2 — 降级行为

- **[#11036](https://github.com/zeroclaw-labs/zeroclaw/issues/11036)** OpenCode big-pickle 在 v0.8.4 返回 403 FreeTierError。`r:needs-repro`，等作者复现。
- **[#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922)** WhatsApp Web 自动 TTS 忽略 `suppress_voice`。已有修复 PR [#11057](https://github.com/zeroclaw-labs/zeroclaw/pull/11057)。
- **[#11059](https://github.com/zeroclaw-labs/zeroclaw/issues/11059)**（新开）WhatsApp Web 忽略 `force_voice`，`send_via` 无法路由到语音。已有配套 PR [#11060](https://github.com/zeroclaw-labs/zeroclaw/pull/11060)。
- **[#10981](https://github.com/zeroclaw-labs/zeroclaw/issues/10981)**（已关闭）WhatsApp 出站图片缺 jpegThumbnail/尺寸。
- **[#10885](https://github.com/zeroclaw-labs/zeroclaw/issues/10885)**（已关闭）同 turn 内工具返回图片在无关工具调用后丢失。
- **[#10889](https://github.com/zeroclaw-labs/zeroclaw/issues/10889)**（已关闭）Anthropic 原生 provider 在末条消息以图像块结尾时丢失滚动缓存断点。

### S3 — 轻微问题

- **[#10918](https://github.com/zeroclaw-labs/zeroclaw/issues/10918)**（已关闭）`BoundedDecode::push` 在恰好用尽限额时把空 chunk 误判为截断。

**稳定性趋势**：S0/S1 级别的核心问题正在被系统性收口（#9187、#9391、#9392、#10674、#10889 全部关闭），但仍有 3 个新的 S0/S1 问题（#11058、#10797、#10225）等待 PR。

---

## 6. 功能请求与路线图信号

新功能 / RFC 中，**最有可能进入下一版本**的候选：

| 候选 | 依据 | 链接 |
|---|---|---|
| 多模型 per provider profile | 已有大型 PR [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) 推进中，size:XL，影响 gateway / dashboard / 0Code | [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) |
| 保留 provider profile 语义 | PR [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) 推进中，统一 `<family>.<alias>` 身份 | [#10172](https://github.com/zeroclaw-labs/zeroclaw/pull/10172) |
| WhatsApp 原生投票（双向） | Issue [#10983](https://github.com/zeroclaw-labs/zeroclaw/issues/10983) 关闭 + PR [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) 待合并：读取 `[choice]` 回投 | [#10988](https://github.com/zeroclaw-labs/zeroclaw/pull/10988) |
| WhatsApp PDF 首页预览 | PR [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) 实现 `document_thumbnails` 通道键 | [#10980](https://github.com/zeroclaw-labs/zeroclaw/pull/10980) |
| WhatsApp `create_room` / `invite_user` | PR [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) 实现原生调用 | [#10979](https://github.com/zeroclaw-labs/zeroclaw/pull/10979) |
| CommonMark 分隔线/类集标题渲染 | PR [#11054](https://github.com/zeroclaw-labs/zer

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*