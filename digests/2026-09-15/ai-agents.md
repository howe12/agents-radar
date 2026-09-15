# OpenClaw 生态日报 2026-09-15

> Issues: 465 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-15 02:54 UTC

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

# OpenClaw 项目动态日报 · 2026-09-15

> 数据来源：openclaw/openclaw GitHub 仓库（24 小时窗口）
> 报告口径：Issues 465 条 / PRs 500 条 / 新版本 0 个

---

## 一、今日速览

OpenClaw 在过去 24 小时处于**高强度问题暴露与并行修复状态**：465 条 Issues 滚动更新、500 条 PRs 进出，活跃度极高，但当日**无任何新版本发布**。讨论焦点高度集中于 **2026.9.3 / 2026.9.4 更新路径的可靠性**——`runtime-verification-failed`、macOS/npm 全局安装回滚、Windows 计划任务托管更新交接等多个 P0 级失败报告同时出现，催生了 `roboclaw-bot` 发起的追踪 issue #145252。与此同时，session 状态、消息丢失、僵尸进程、跨用户上下文泄漏等**老牌稳定性议题**继续高位震荡。维护者 `steipete` 单人贡献了多份关键 PR（plugin 句柄释放、SMB 修复、fleet SQLite worker 化等），社区修复节奏快，但"P0/P1 + 无 fix-PR"的"钻石龙虾 🦞"级缺陷仍有 10 余项**长期积压**，建议关注。

---

## 二、版本发布

**今日无新版本发布。** 最近活跃版本为 `2026.9.4`（commit `3a9d69d`），但根据多份带 `2026.9.3` / `2026.9.4` 标签的失败报告（[#145072](https://github.com/openclaw/openclaw/issues/145072)、[#145510](https://github.com/openclaw/openclaw/issues/145510)、[#148614](https://github.com/openclaw/openclaw/issues/148614)、[#146860](https://github.com/openclaw/openclaw/issues/146860)），该版本在 Windows 计划任务、macOS npm 全局安装、`runtime-verification` 阶段仍存在阻断性缺陷。在 2026.9.5 或后续 hotfix 发布前，建议生产环境维持 `2026.9.2` 或更早稳定线，并参考 [#145252](https://github.com/openclaw/openclaw/issues/145252) 的追踪信息。

---

## 三、项目进展（今日合入/关闭要点）

> 注：当日合并/关闭的具体 commit 列表未在数据中披露，以下基于"今日已关闭的 Issue/PRs 标题"逆推**已落地的修复**。

| 主题 | Issue / PR | 推进方向 |
|---|---|---|
| 归档会话回滚、隐藏恢复状态、Pinned 丢失 | [PR #148155](https://github.com/openclaw/openclaw/pull/148155) 已 CLOSED / [Issue #25592](https://github.com/openclaw/openclaw/issues/25592) 类问题获 UI 侧缓解 | Web UI 会话生命周期一致性 |
| LINE / SMS / Zalo `"Async work scope is closed"` | [PR #148548](https://github.com/openclaw/openclaw/pull/148548) CLOSED | 多通道 webhook pump 共用修复 |
| Codex app-server turn 完成停滞（2026.5.27 回归） | [Issue #88312](https://github.com/openclaw/openclaw/issues/88312) CLOSED | `85107` 修复已确认回归被治理 |
| Cron 命令解析去重 | [PR #148686](https://github.com/openclaw/openclaw/pull/148686) CLOSED | CLI 内部一致性 |
| macOS npm 全局安装 launcher 回滚 | [Issue #145072](https://github.com/openclaw/openclaw/issues/145072) CLOSED | shim 备份 + symlink 指纹修复 |
| Windows SMB + lsof 启动挂起 | [Issue #75767](https://github.com/openclaw/openclaw/issues/75767) CLOSED | launchd 路径下的 macOS 启动可恢复 |
| WhatsApp 首条消息阻塞（2026.5.3-1 回归） | [Issue #77443](https://github.com/openclaw/openclaw/issues/77443) CLOSED | Windows 事件循环修复 |
| Stuck Session Recovery 双重失效 | [Issue #76038](https://github.com/openclaw/openclaw/issues/76038) CLOSED | 中文社区报告的关键稳定性问题已合入 |
| Plugin loader LRU key 误包含 workspaceDir | [Issue #77347](https://github.com/openclaw/openclaw/issues/77347) CLOSED | 性能与冷启动开销 |
| Telegram 多用户 DM 上下文串话 | [Issue #77292](https://github.com/openclaw/openclaw/issues/77292) CLOSED | 安全 + 会话状态，回归 #62306 已治理 |

> 总体推进：**通道一致性、跨平台安装/启动、Session 恢复路径**三条主线获得了实质性修复；Windows 计划任务、`runtime-verification`、MCP 子进程治理三条主线仍在 PR 评审阶段。

---

## 四、社区热点（按评论活跃度排序）

| # | Issue / PR | 评论 | 关注点 |
|---|---|---|---|
| 1 | [#25592](https://github.com/openclaw/openclaw/issues/25592) Text between tool calls leaks to messaging channels | 40 | "工具调用之间的内部文本（错误处理/进度叙述）被路由到 Slack/iMessage 形成可见消息"——长期 UX 痛点，跨通道语义边界 |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) 钩子/工具子进程未被回收，僵尸累积 | 31 | P1 回归，影响所有长期运行 Gateway |
| 3 | [#88312](https://github.com/openclaw/openclaw/issues/88312) Codex turn-completion 停滞（2026.5.27 回归） | 22 | 多人维护跟进，已关闭 |
| 4 | [#119720](https://github.com/openclaw/openclaw/issues/119720) Gateway 事件循环被持久化阻塞 | 20 | P1 钻石级，部分修复已落地（#140231、#138984）但仍在追踪 |
| 5 | [#48788](https://github.com/openclaw/openclaw/issues/48788) 多编码 Content-Disposition 文件名集中工具 | 20 | 飞书中文文件名场景，呼吁架构级修复 |

**社区诉求解读**：
- **"通道语义"边界** 类问题（#25592、#119720、#144911、#139847、#125764）占据热度榜绝对多数，开发者普遍希望"内部处理文本/失败重试/进程清理"与"用户可见消息"严格隔离；
- **中文社区**（飞书、企业微信、Coze 插件路径）持续贡献高质量复现报告（#76038、#108238、#74100、#76584、#74767），对**会话恢复**、**编码兼容**、**技能按需加载**三类需求高度集中。

---

## 五、Bug 与稳定性

> 按严重程度分级（影响 release-blocker / 数据丢失 / 安全 / 回归）排列，标注 fix-PR 状态。

### 🔴 P0（UX Release Blocker / Crash Loop）

| Issue | 描述 | fix-PR |
|---|---|---|
| [#148614](https://github.com/openclaw/openclaw/issues/148614) | 2026.9.3 `runtime-verification-failed`（darwin/arm64） | ❌ 关闭后由追踪 issue #145252 接管 |
| [#145510](https://github.com/openclaw/openclaw/issues/145510) | 2026.9.3 → 2026.9.4 win32/x64 `runtime-verification-failed` | ❌ `needs-info` |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows 计划任务 `InteractiveToken` 模式下更新交接 stuck → `abandoned` | ❌ |
| [#145252](https://github.com/openclaw/openclaw/issues/145252) | 2026.9.3/9.4 更新/升级/恢复可靠性**追踪** | 多 PR 在路上（#148702、#147581、#144819）|
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | `totalTokens` 膨胀（2026.8.1-beta.2 仍复现） | 🟡 `linked-pr-open` |
| [#123326](https://github.com/openclaw/openclaw/issues/123326) | 多 agent Codex 迁移启动 crash loop | ❌ `source-repro` 标记 |

### 🦞 P1 钻石级（Session 状态 / 消息丢失 / 安全）

| Issue | 描述 | fix-PR |
|---|---|---|
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本泄漏至通道 | ❌ 长期开放 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 → 僵尸累积 | ❌ |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞 Gateway 事件循环 | 🟡 部分修复落地（#140231、#138984） |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP init 30s 超时 → Gateway unhandled rejection 崩溃 | ❌ `queueable-fix` 标记 |
| [#139847](https://github.com/openclaw/openclaw/openclaw/issues/139847) | 2026.9.2 回归：active reply 时新消息丢失 | ❌ `queueable-fix` 标记 |
| [#145152](https://github.com/openclaw/openclaw/issues/145152) | stuck-session recovery 误报 abort，lane 释放不可识别 | ❌ `queueable-fix` 标记 |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update 覆盖 description，静默破坏路由 | ❌ |
| [#125764](https://github.com/openclaw/openclaw/issues/125764) | Telegram 出站仅一次重试即 dead-letter | ❌ |
| [#142336](https://github.com/openclaw/openclaw/issues/142336) | core `/dashboard` 抢占 Telegram Mini App launcher | 🟡 `linked-pr-open` |
| [#104719](https://github.com/openclaw/openclaw/issues/104719) | memory-wiki fallback 忽略 deadline | 🟡 `linked-pr-open` |
| [#144876](https://github.com/openclaw/openclaw/issues/144876) | tool-backed Dashboard 会话在 finalization 失败后静默结束 | ❌ |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 长 turn（>RUN_STALE_TAKEOVER_MS）整段回复丢失 | ❌ |

### 🦀 P1 / P2 回归与 Channel Bug（高评论但已关闭或修复中）

- [#144809](https://github.com/openclaw/openclaw/issues/144809)（claude-cli 42s 偶发同样失败）— `gold shrimp`
- [#145072](https://github.com/openclaw/openclaw/issues/145072)（macOS npm swap 回滚）— ✅ 已 CLOSED
- [#102175](https://github.com/openclaw/openclaw/issues/102175)（prompt cache 跨边界失效）— `no-new-fix-pr`
- [#146004](https://github.com/openclaw/openclaw/issues/146004)（2026.9.3 subagent 触发无关 dashboard 心跳）— `silver shellfish` 回归

**稳定性总评**：当日 P0/P1 钻石级缺陷**至少 10 项仍无 fix-PR**，集中在"session state × channel isolation × process lifecycle"三角；MCP/子进程治理与 Windows 计划任务托管更新是当前**最薄弱环节**。

---

## 六、功能请求与路线图信号

| 请求 | Issue | 关联 PR / 状态 | 入版本概率判断 |
|---|---|---|---|
| 集中化文件名编码工具（Shift-JIS/EUC-KR/GB18030） | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 部分由 #48578 覆盖 | 🟡 中等，需产品决策 |
| 长任务持久状态面板（Discord 优先） | [#52640](https://github.com/openclaw/openclaw/issues/52640) | 无 | 🟢 P2 提议，与 Web UI `heartbeat` 改造契合 |
| `/stream` 切换流式模式（无需重启） | [#74077](https://github.com/openclaw/openclaw/issues/74077) | 无 | 🟢 P3，可能纳入控制平面 |
| Skill Graph 按需加载（中文社区） | [#74100](https://github.com/openclaw/openclaw/issues/74100) | 无 | 🟢 P3，Token 经济性议题 |
| Sessions 面板按"最后有意义活动"排序 | [#51028](https://github.com/openclaw/openclaw/issues/51028) | 无 | 🟢 P3 |
| Codex app-server 稳态 CPU / helper 优化 | [#84037](https://github.com/openclaw/openclaw/issues/84037) | 无 | 🟢 中期 |
| Codex 用量按 OpenAI 账户展示 | [#146137](https://github.com/openclaw/openclaw/issues/146137)（关联） | [PR #146143](https://github.com/openclaw/openclaw/pull/146143) 已 ready | 🟢 高 |
| Signal 私有托管守护 socket | — | [PR #143511](https://github.com/openclaw/openclaw/pull/143511) ready | 🟢 高 |
| Feishu 共享 progress-draft 合成器 | — | [PR #148176](https://github.com/openclaw/openclaw/pull/148176) ready | 🟢 高 |
| Web UI 选中文本作为可编辑评论插入 | — | [PR #148649](https://github.com/openclaw/openclaw/pull/148649) 等作者 | 🟡 中 |

**整体路线图信号**：维护者当前优先级为"稳定 > 新功能"，但 **Signal/Fish-Audio/Bonjour 等插件生态**、**Codex OAuth 路由可用性**、**Web UI 体验**三条线已经有 ready-for-review 的 PR 池，预计在下一次 release 中批量落地。

---

## 七、用户反馈摘要（来自 Issues 评论提炼）

1. **"agent 把过程性文本发到 IM 通道"** — [#25592](https://github.com/openclaw/openclaw/issues/25592) 反映出企业用户最大的信任损耗点：运维与最终用户在同一 Slack/微信/iMessage 频道，失败/重试叙述一旦外泄会被误判为生产事件。
2. **"升级即崩溃"** — 多份 `runtime-verification-failed` 报告（[#145510](https://github.com/openclaw/openclaw/issues/145510)、[#148614](https://github.com/openclaw/openclaw/issues/148614)）显示 2026.9.3 / 9.4 在 darwin、win32 双平台均出现更新后无法启动，用户对"hotfix 反而引入 P0"的信任度正在下降。
3. **"Windows 服务器托管极不友好"** — [#146860](https://github.com/openclaw/openclaw/issues/146860)（计划任务 `InteractiveToken` 交接 stuck）、[#77443](https://github.com/openclaw/openclaw/issues/77443)（事件循环阻塞 12s）、[#71699](https://github.com/openclaw/openclaw/issues/71699)（`STATUS_STACK_BUFFER_OVERRUN` 0xC0000409）显示 Windows 仍是部署体验最弱平台。
4. **"中文/多语言适配"** — 飞书文件名（[#48788](https://github.com/openclaw/openclaw/issues/48788)）、飞书流式卡片搜索（[#74767](https://github.com/openclaw/openclaw/issues/74767)）、Feishu 通道初始化（[#76584](https://github.com/openclaw/openclaw/issues/76584)）密集出现。
5. **"会话状态不透明"** — [#51028](https://github.com/openclaw/openclaw/issues/51028)、[#52640](https://github.com/openclaw/openclaw/issues/52640) 反映"哪些会话真正活跃、心跳噪声掩盖真实对话"成为普遍痛点。
6. **"会话恢复假动作"** — [#76038](https://github.com/openclaw/openclaw/issues/76038)、[#145152](https://github.com/openclaw/openclaw/issues/145152)、[#139847](https://github.com/openclaw/openclaw/issues/139847) 共同指向"recovery 路径只更新 flag 不释放真正 lane"，是中文社区和英文社区一致的关键痛点。
7. **积极反馈** — [#88312](https://github.com/openclaw/openclaw/issues/88312) 中 `yair` 明确指出 #85107 已修复先前 turn-completion stall，**回归能被识别并合入修复**的反馈流程本身得到认可。

---

## 八、待处理积压（建议维护者优先关注）

> 长期未获响应或仍标记 `no-new-fix-pr` / `needs-maintainer-review` 的高严重度条目。

| 优先级 | Issue | 等待信号 |

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析
**报告日期：2026-09-15 | 数据窗口：过去 24 小时 GitHub 动态**

---

## 一、生态全景

当前个人 AI 助手/自主智能体开源生态呈现**"核心成熟、外围分化、质量收敛"**的典型态势：**OpenClaw** 仍以日均 400+ Issue/PR 的吞吐维持事实标准地位，但其 2026.9.3/9.4 更新路径连续触发 `runtime-verification-failed`，暴露出"复杂度反噬可靠性"的拐点信号；**ZeroClaw**、**NanoBot**、**Hermes Agent** 等周边项目在 RFC 治理、多通道一致性、Provider 抽象、Feishu/微信适配等垂直方向上加速收敛；与此同时，**PicoClaw/NullClaw/NullClaw/IronClaw/ZeptoClaw/Moltis** 等长尾项目普遍进入"维护性静默"，**LobsterAI** 则是少数仍在主动追随上游基线（OpenClaw v2026.8.1）的下游消费方。

---

## 二、各项目活跃度对比

| 项目 | Issues 新增/活跃 | PRs 更新 | 今日 Release | 阶段判定 | 综合健康度 |
|---|---:|---:|:---:|---|---|
| **OpenClaw** | 465 | 500 | ❌ | 高强度问题暴露 + 并行修复 | 🟠 P0 积压，活跃但脆弱 |
| **ZeroClaw** | 22 (11 关/11 新) | 50 (12 合/38 待) | ❌ | 密集合入期 + RFC 治理 | 🟢 活跃且健康 |
| **NanoBot** | 6 (4 新/1 关) | 24 (11 合/13 待) | ❌ | 质量打磨期 | 🟢 高活跃、修复密集 |
| **NanoClaw** | 6 (3 新/3 关) | 50 (38 关/12 待) | ❌ | twin 分支整合期 | 🟢 健康、有安全亮点 |
| **Hermes Agent** | 50 (35 活/15 关) | 50 (1 合/49 待) | ✅ v0.21.3 | 质量收敛 + RFC 治理 | 🟢 中后期迭代节奏 |
| **LobsterAI** | 1 | 24 (90% Dependabot) | ❌ | 依赖维护日 + 基线升级 | 🟡 底层活跃、业务层静默 |
| **Moltis** | 0 | 1 (待合) | ❌ | 维护性静默 | 🟡 CI 维护在转 |
| **ZeptoClaw** | 1 (已关) | 1 (已合) | ❌ | 单人维护期 | 🟡 CI 加固闭合 |
| **IronClaw** | 1 | 1 | ❌ | 稳定低活跃 | 🟡 积压待清理 |
| **PicoClaw** | 1 (stale) | 2 (1 stale/1 关) | ❌ | v0.10.0 规划期 | 🟠 stale 积压初现 |
| **NullClaw** | 4 (含 2 条疑似推广) | 0 | ❌ | 维护性静默 | 🔴 推广噪音风险 |
| **CoPaw** | — | — | — | 无数据 | ⚪ 不可评估 |
| **TinyClaw** | 0 | 0 | — | 完全静默 | ⚪ 无活动 |

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **社区规模** | 单日 465/500 吞吐 | Hermes Agent 50/50、ZeroClaw 22/50、NanoClaw 6/50，OpenClaw 数量级领先 5–10× |
| **覆盖面** | 9+ IM 通道 + Web UI + Plugin/MCP/Skill | NanoBot 主 WebUI/PWA、ZeroClaw 聚焦 ZeroCode/Telegram、NullClaw 仅 Web Search Provider 层 |
| **架构路线** | Gateway + Plugin + Session + Fleet | NanoClaw: channels twin/providers twin 分支化；ZeroClaw: RFC-driven 治理；NanoBot: 单仓紧耦合 |
| **核心优势** | ① 多通道一致性最完整 ② Codex/MCP 生态最深 ③ 中文化场景（Feishu/Coze/企业微信）适配最全 | 同类项目大多只覆盖 1–2 个 IM 通道，中文适配深度均不及 |
| **当前短板** | 2026.9.3/9.4 P0 阻断、Windows 计划任务托管、MCP 子进程治理、`runtime-verification` 流程 | Hermes Agent 同期仅 0 个 P0；ZeroClaw RFC 流程已规范化 |
| **风险信号** | 用户对"hotfix 反引入 P0"信任度下降 | 同类项目无此反馈 |

**一句话定位**：OpenClaw 是当前生态中**事实上的参考实现**——覆盖面最广、社区规模最大，但同时也最先撞上"复杂系统可靠性"的天花板。

---

## 四、共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **① Session/State 跨表面一致性** | OpenClaw (#25592/#119720/#145152/#76038)、Hermes Agent (#41220/#76767/#94811)、NanoBot | "工具调用间文本泄漏到 IM"、"回复渲染但未投递"、"Desktop/Telegram 会话分裂"——核心痛点高度趋同 |
| **② MCP/子进程生命周期治理** | OpenClaw (#97616/#144911)、Hermes Agent (#103870/#107582)、IronClaw (#8077) | MCP stdio 子进程未回收 → 僵尸累积；`response_leak_blocked` 哨兵分类不一致 |
| **③ Windows 平台稳定性** | OpenClaw (#146860/#77443/#71699)、Hermes Agent (#97004/#109982/#85659/#111101) | `STATUS_STACK_BUFFER_OVERRUN`、计划任务 `InteractiveToken` 交接 stuck、pytest basetemp 覆盖 install |
| **④ Feishu/中文 IM 适配** | OpenClaw (#48788/#74767/#76584)、NanoBot (#5768)、Hermes Agent (#111379) | 二维码 "Link expired"、飞书文件名编码、流式卡片搜索、executor 被拆除后失聪 |
| **⑤ Provider 多模型/CLI 抽象** | NanoBot (#5666/#5769)、ZeroClaw (#9809)、Hermes Agent (#107389 DeepSeek)、NullClaw (#975 grok-cli) | 内置 Provider 扩张、CLI subprocess 模式复用、NVIDIA NIM 超时识别 |
| **⑥ 数据库并发与锁竞争** | NanoClaw (#3811/#3660)、LobsterAI (#1035) | SQLite `busy_timeout` 缺失、NimGateway 重连后消息去重缓存未清空 |
| **⑦ WebUI 移动端 / PWA 体验** | NanoBot (#5770-#5773)、OpenClaw | iOS 顶部视口半透明、冷启动空白屏、Session 列表需双击打开 |
| **⑧ 安全加固与凭据隔离** | NanoClaw (#3484 密钥不进 argv)、ZeroClaw (#6613 配对码 32 字符)、Hermes Agent (#111370 allow_all_users/#111481 MCP Profile 隔离) | 同类项目不约而同在 9 月推进凭据处理、Profile 隔离、配对强度 |
| **⑨ 第三方模型稳定性** | OpenClaw (#88312 Codex)、Hermes Agent (#103483 Muse Spark) | turn-completion 停滞、`finish_reason=stop` 时异常收尾——"非自家模型难治理"的共性 |
| **⑩ RFC 治理与流程化** | Hermes Agent (#77111 RealtimeVoiceProvider ABC)、ZeroClaw (#10549/#10366) | "同类型 PR ≥3 时先设计 ABC"原则被两项目同时引用 |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键架构差异 |
|---|---|---|---|
| **OpenClaw** | 全通道 AI Agent Gateway + Plugin + Codex | 企业/中文社区重度用户 | Gateway + Plugin 总线 + 跨用户上下文 |
| **NanoBot** | 个人 AI 助手 + Cron + WebUI/PWA | 个人开发者、自部署用户 | 单仓紧耦合、强调移动端体验 |
| **Hermes Agent** | 多模型 Agent + 语音/双工 + Agent 经济层远景 | 前沿开发者、研究型用户 | RFC 驱动、Profile 隔离、TUI/Desktop 三端 |
| **NanoClaw** | A2A 通信 + Mission Control + 模板化 agent | 企业 Slack 工作流用户 | channels twin/providers twin 分支治理、Slack A2A 结构化交付 |
| **ZeroClaw** | RFC 流程治理 + 多模态边界 + 桌面/Daemon | 关注代码治理成熟度的工程团队 | RFC 编号化、配对码 32 字符、OIDC 五阶段 |
| **PicoClaw** | 边缘设备部署（Orange Pi / RK3566） | 嵌入式 / IoT / 国产硬件用户 | aarch64 优先、QQ 通道依赖 botgo |
| **LobsterAI** | OpenClaw 的桌面消费层（Electron） | C 端桌面用户 | OpenClaw 运行时 + Electron 43.x |
| **IronClaw** | Host ↔ MCP 边界安全 + 每日质量分类 | 安全敏感型部署 | host_api 哨兵、日报式失败分类 |
| **NullClaw** | 自托管 Web Search Provider 聚合 | 自托管/隐私偏好用户 | 零依赖默认、可配置端点 |
| **ZeptoClaw** | Rust 实现的 CI 安全审计 | DevOps / 基础设施团队 | GitHub Actions 权限最小化、rustsec 集成 |
| **Moltis** | OAuth + 测试稳定性 | 工具型用户 | OAuth PKCE 测试、回调弹窗时序处理 |

---

## 六、社区热度与成熟度分层

### 🔥 第一梯队 · 快速迭代期
- **OpenClaw**、**ZeroClaw**、**NanoBot**、**NanoClaw**、**Hermes Agent** —— 单日 Issue+PR 总数均 ≥ 50，处于功能扩张或重大重构中，**需关注回归风险**（OpenClaw 2026.9.3/9.4 即典型案例）。

### 🛠️ 第二梯队 · 质量巩固期
- **LobsterAI** —— 大版本基线升级（OpenClaw v2026.8.1 + Electron 43.5.0）的跟随者，业务层静默但底层活跃；**长期 IM 消息丢失 Bug (#1035) 停滞 168 天是最大隐患**。

### 🌙 第三梯队 · 维护性静默期
- **PicoClaw**（v0.10.0 规划沉淀）、**Moltis**（CI 维护在转）、**ZeptoClaw**（单人维护）、**IronClaw**（等待 PR 评审）—— 各自仅 1 项工单活动，**健康度依赖单一维护者**。

### ⚠️ 第四梯队 · 风险信号
- **NullClaw**（疑似推广噪音 + 65 天无 PR 跟进的 #975）、**PicoClaw**（stale 积压初现）、**TinyClaw**（完全无活动）—— **贡献者信心可能流失**，建议维护者主动激活社区。

---

## 七、值得关注的趋势信号

### 📈 趋势 1：MCP 成为新的故障集中点
OpenClaw (#144911/#97616)、Hermes Agent (#103870/#107582)、IronClaw (#8077) 三项目今日均围绕 MCP 暴露问题。**MCP 已从"加分项"演变为"生产瓶颈"**，子进程生命周期、stdio 回收、响应哨兵分类成为 2026 下半年的共同治理目标。

### 📈 趋势 2：跨表面会话状态是 Agent UX 的终极难题
"桌面看到但 Telegram 没收到"、"recovery 只更新 flag 不释放 lane"、"Telegram 出站仅一次重试即 dead-letter"——三项目独立报告同一现象。**这意味着 AI Agent 的多端体验仍处于"半成品"阶段**，是产品差异化最具空间的领域。

### 📈 趋势 3：第三方模型 / CLI 适配成为新的可观测性盲区
Codex turn-completion 停滞（OpenClaw #88312）、Muse Spark 异常收尾（Hermes Agent #103483）、DeepSeek canonical 名被重写（Hermes Agent #107389）、NVIDIA NIM 超时（NanoBot #5674）—— **"非自家模型的可控性下降"正在成为普遍痛点**，对使用 Claude/Codex/Muse 的开发者，建议建立模型侧的 fallback 矩阵与超时分级。

### 📈 趋势 4：RFC 流程治理被中型项目主动采纳
Hermes Agent（#77111 RealtimeVoiceProvider ABC）、ZeroClaw（#10549/#10366 简化讨论窗口）—— **"Footprint Ladder" 原则（

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**报告日期**: 2026-09-15
**数据来源**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**报告周期**: 过去 24 小时

---

## 1. 今日速览

NanoBot 今日呈现**高活跃度、修复密集**的状态：在过去 24 小时内共有 **6 个 Issues** 更新（含 4 个新开、1 个已关闭）和 **24 个 PRs** 更新（13 待合并、11 已合并/关闭），无新版本发布。社区贡献以 **Bug 修复（cron、provider、WebUI）** 为主轴，其中 **Cron 模块**、**LLM Provider 故障转移**、**移动端 WebUI PWA 体验** 三个方向最为集中。整体维护节奏健康，P2 优先级问题快速流转，但 P1 级 Feishu 二维码登录问题待解决。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

过去 24 小时共有 **11 个 PR 被合并或关闭**，整体推进了项目的稳定性与多端体验，重点如下：

| PR | 模块 | 关键价值 |
|---|---|---|
| [#5760](https://github.com/HKUDS/nanobot/pull/5760) | WebUI | 自适应聊天工具栏，避免窄屏遮挡消息内容 |
| [#5686](https://github.com/HKUDS/nanobot/pull/5686) | Cron | 定时任务执行期间推迟 timer 重整，避免 `CancelledError` 丢任务 |
| [#5751](https://github.com/HKUDS/nanobot/pull/5751) | Cron | 编辑自动化时保留待执行调度，避免任务被误推迟/跳过 |
| [#5730](https://github.com/HKUDS/nanobot/pull/5730) | Provider | 内部模型调用改用流式 + 空闲超时，解决 Dream 类长任务超时 |
| [#5684](https://github.com/HKUDS/nanobot/pull/5684) | 文档 | README 重写，新增 WebUI 功能视觉展示 |
| [#5734](https://github.com/HKUDS/nanobot/pull/5734) | Memory | 明确 Dream 写权限边界，避免 Codex 拒绝更新记忆 |
| [#5743](https://github.com/HKUDS/nanobot/pull/5743) | WebUI | 简化设置面板，默认 Calendar 视图，统一自动化创建入口 |

**进展评估**: Cron 调度系统在今日获得了**双重加固**（#5686、#5751），有效防止定时器竞态和编辑后任务丢失；Provider 层（#5730）补齐了内部流式调用短板；前端（#5760、#5743）和文档（#5684）同步推进用户体验一致性。整体方向明确，属于"质量打磨期"。

---

## 4. 社区热点

今日最值得关注的 Issue 来自一位长期受困的用户 [hoaresky](https://github.com/HKUDS/nanobot/issues/2804)：

- **#2804 [已关闭]** - `web_search` 通过 DuckDuckGo 无限挂起，阻塞整个 session
  - 链接: https://github.com/HKUDS/nanobot/issues/2804
  - 创建于 **2026-04-05**，历经约 **5 个月**、**4 条评论**后终于关闭
  - 痛点：`asyncio.to_thread(ddgs.text, ...)` 偶发死锁，导致网关对同一 session 全部消息停止响应

**新晋活跃报告者** [morandot](https://github.com/HKUDS/nanobot) 在 24 小时内集中提交 **4 个 iOS PWA / Mobile WebUI 问题**（#5770、#5771、#5772、#5773），反映出 nanobot 移动端体验进入用户实际测试阶段，是社区关注的新焦点。

**讨论集中的待合并 PR**:
- [#5761](https://github.com/HKUDS/nanobot/pull/5761) - `edit_file` 编辑换行边界修复 + WebUI diff 对齐
- [#5769](https://github.com/HKUDS/nanobot/pull/5769) - NVIDIA NIM 超时识别 + FallbackProvider 切换
- [#5768](https://github.com/HKUDS/nanobot/pull/5768) - **P1** Feishu QR 登录 "Link expired" 修复

---

## 5. Bug 与稳定性

### 🔴 严重 (P1)

| 标题 | 状态 | 是否有 Fix |
|---|---|---|
| [#5674](https://github.com/HKUDS/nanobot/issues/5674) NVIDIA NIM 超时错误导致 Agent 整体停摆 | OPEN | ✅ PR [#5769](https://github.com/HKUDS/nanobot/pull/5769) 待合并 |
| [#5768](https://github.com/HKUDS/nanobot/pull/5768) Feishu 扫码登录始终 "Link expired" | OPEN (PR) | PR 已就位，待 review |

### 🟡 中等 (P2)

| 标题 | 状态 | 是否有 Fix |
|---|---|---|
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) Cron 接受多字段同时传入，静默丢弃其他字段 | OPEN | ✅ PR 已提 |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) Cron 接受过去的 `at` 时间，导致任务永不触发 | OPEN | ✅ PR 已提 |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) API `"stream": "false"` 被误判为流式请求 | OPEN | ✅ PR 已提 |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) 多模态字段类型错误被误报为 413 | OPEN | ✅ PR 已提 |
| [#5764](https://github.com/HKUDS/nanobot/pull/5764) FallbackProvider 半开探测并发击穿 | OPEN | ✅ PR 已提 |
| [#5761](https://github.com/HKUDS/nanobot/pull/5761) `edit_file` 吞掉行尾换行，相邻行被错误合并 | OPEN | ✅ PR 已提 |
| [#2804](https://github.com/HKUDS/nanobot/issues/2804) DuckDuckGo 无限阻塞 | ✅ CLOSED | 已被关闭 |

### 🟢 新增 WebUI 体验反馈 (尚未修复)

- [#5770](https://github.com/HKUDS/nanobot/issues/5770) 移动端侧边栏误显示 `Search ⌘K` tooltip
- [#5771](https://github.com/HKUDS/nanobot/issues/5771) 移动端 Session 列表需双击才能打开
- [#5772](https://github.com/HKUDS/nanobot/issues/5772) iOS PWA 顶部视口半透明/模糊
- [#5773](https://github.com/HKUDS/nanobot/issues/5773) iOS PWA 冷启动长空白屏

**稳定性观察**: 多数新报 Bug 已被对应 Fix PR 覆盖，**响应链路完整**；仅 WebUI 移动端 4 个新 Issue 暂缺对应 PR。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 评估 |
|---|---|---|
| **aimlapi.com 作为内置 Provider** | [#5666](https://github.com/HKUDS/nanobot/pull/5666) | 已提交 PR，附 50/50 商业合作条款，进入审查阶段 |
| **Telegram 自定义 Bot API / 自托管网关支持** | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 长期 PR（7 月提交），仍未合并，反映企业/自部署需求 |
| **Tool 调用上下文（ToolInvocationContext）** | [#5750](https://github.com/HKUDS/nanobot/pull/5750) | 增强工具可观测性，方向清晰 |
| **WebUI 波兰语本地化** | [#5767](https://github.com/HKUDS/nanobot/pull/5767) | 国际化推进，对其他小语种具有示范作用 |

**路线图信号**: Provider 生态扩张（aimlapi）、企业自托管能力（Telegram API 网关）、国际化与可观测性是近期的明显方向。

---

## 7. 用户反馈摘要

- **稳定性是核心痛点**：Bug 报告中"agent 停止响应""任务永不触发""session 卡死"等关键词高频出现，说明用户对**系统韧性**的期望高于功能丰富度。
- **移动端首次大规模曝光**：morandot 的 4 个 iOS PWA Issue 表明 PWA 已进入实际使用，但**首次渲染延迟、触摸焦点错位、tooltip 误显**等问题集中暴露，提示 WebUI 移动适配尚未充分打磨。
- **长尾 Issue 治理良好**：#2804 历经 5 个月终于关闭，体现维护者对历史问题不放弃的态度，正向信号明显。
- **供应商碎片化带来隐忧**：NVIDIA NIM、Feishu（v0.3.0 QR 失效）、DuckDuckGo 等外部依赖问题频发，提示集成层需要更稳健的失败处理。

---

## 8. 待处理积压

| 编号 | 标题 | 风险 |
|---|---|---|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): support custom Bot API base URL | **已开 2 个月以上**，企业自托管刚需，建议优先 review |
| [#5601](https://github.com/HKUDS/nanobot/pull/5601) | fix(webui): roll back rejected message side effects | 标记为 `[conflict]`，需解决合并冲突，影响 WebUI 一致性 |
| [#5666](https://github.com/HKUDS/nanobot/pull/5666) | feat(providers): add aimlapi.com gateway | 商业合作 PR，应在合理窗口给出审查结论 |

**维护者建议**: 优先 review **P1 Feishu #5768** 与 **长期停滞 PR #4919**，同时为 WebUI 移动端 4 个新 Issue 分配 owner，避免形成新的积压。

---

*本报告基于 GitHub 公开数据自动生成，所有链接均指向 HKUDS/nanobot 仓库。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期：2026-09-15** | **数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日进入**高强度修复与 RFC 治理阶段**。仓库单日 Issues 更新 50 条（35 新开/活跃、15 关闭），PR 更新 50 条（49 待合并、1 已合并），并发布 v0.21.3 滚动版本（合入自 v0.21.2 以来的 ~338 PR）。今日 15 条关闭的 Issue 绝大多数被标记为 **duplicate**（约 11 条），表明社区正在集中清理重复报告，集中精力打磨稳定性。讨论度最高的 Issue 是关于**双工语音（Duplex Voice）供应商统一抽象层（ABC）**的 RFC（26 条评论），以及围绕 **DeepSeek 模型重命名**、**Telegram / Desktop 会话状态一致性**、**Windows 平台兼容**的若干高优先级 Bug。整体来看，项目活跃度极高但已从快速扩张转向**质量收敛**，属于健康的中后期迭代节奏。

---

## 2. 版本发布

### 🔖 Hermes Agent v0.21.3 (v2026.9.14) — 2026-09-14

- **类型**：Patch（稳定快照版）
- **说明**：将自 v0.21.2 以来合并的 **~338 个 PR** 滚动打包为下游消费者（Docker 镜像、Hermes Cloud、托管部署）可引用的稳定 tag。
- **关键变更**：包含 remote-gateway 登录修复（避免 gateway 启动后 sign-in 流程失效）。
- **迁移注意事项**：无破坏性变更（patch 滚动），下游用户可直接升级。生产环境升级前建议确认 Hermes Cloud 节点已完成同步。
- **链接**：未在数据中提供具体 Release 链接，可访问仓库 Releases 页面查看。

---

## 3. 项目进展

今日 PR 更新中仅 **1 条已合并/关闭**，其余 49 条均为待合并状态。已合并/关闭的 PR（#38792 系列变体 #111506）正式落定 **cron 独立投递超时机制**——这是 P2 级别的可靠性修复，避免 cron tick 因平台 API 卡住而永久挂起。

虽多数 PR 仍处 OPEN 状态，但以下几条显示出维护者（多为 teknium1）正在系统性解决积压：

| PR | 主题 | 推进方向 |
|---|---|---|
| [#111370](https://github.com/NousResearch/hermes-agent/pull/111370) | `gateway.allow_all_users` 配置实际生效（不再静默丢弃） | **安全边界 + 向后兼容** 修复 #110690 |
| [#111481](https://github.com/NousResearch/hermes-agent/pull/111481) (P1) | Dashboard 多 Profile 的 MCP 连接与凭证按 Profile 隔离 | **安全边界** 关键修复 #111151 |
| [#111371](https://github.com/NousResearch/hermes-agent/pull/111371) | `fleet_restart_pending` 在身份校验后才解除，外部 state-file 写入不再被认作 current | **更新机制一致性** 修复 #111272 |
| [#111359](https://github.com/NousResearch/hermes-agent/pull/111359) | faster-whisper 本地 STT 命中缓存模型时不再走 HF Hub，~3 分钟启动卡顿消失 | **离网/内网部署** 体验大幅提升 |
| [#111379](https://github.com/NousResearch/hermes-agent/pull/111379) | Feishu 适配器在事件循环默认 executor 被拆除后仍能接收消息 | **消息投递可靠性** |
| [#111449](https://github.com/NousResearch/hermes-agent/pull/111449) | pytest basetemp 不再被误识别为 live install（Windows 用户） | **测试安全** 修复 #111101 |
| [#111487](https://github.com/NousResearch/hermes-agent/pull/111487) | `/goal` 失败质量门在修复输入后能重跑 | **可恢复性** 修复 #110649 |
| [#111513](https://github.com/NousResearch/hermes-agent/pull/111513) | `gh auth status` 探测加超时与子进程清理 | **桌面端稳定性** |
| [#111470](https://github.com/NousResearch/hermes-agent/pull/111470) | TUI `/model` 改为可搜索的 provider/id 列表 | **UX 改进** |

整体判断：**安全边界（allow_all_users、MCP Profile 隔离）+ 投递可靠性（cron、Feishu、Telegram）+ 跨平台一致性（Windows、macOS）** 是本阶段三大攻坚方向。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

#### 🥇 [#77111](https://github.com/NousResearch/hermes-agent/issues/77111) — RFC: RealtimeVoiceProvider ABC（26 条评论，👍 2）
- **作者**：TheSmokeDev
- **诉求**：目前有 4 个并行的双工语音（duplex voice）PR 同时争抢合入，作者引用 `AGENTS.md` 中的 "Footprint Ladder" 规则——**当 ≥3 个同类型 PR 涌入时，应先设计抽象基类（ABC）+ 编排器，把已有内置实现包装为第一个 provider**，再批量移植。
- **背后信号**：社区正在尝试把"双工语音"作为 Hermes 的一等公民能力（参见 tool/tts、comp/plugins 标签），但缺乏统一接口已成为合并阻塞。维护者尚未表态。
- **标签**：`needs-decision`——需要核心维护者做出架构决策。

#### 🥈 [#107389](https://github.com/NousResearch/hermes-agent/issues/107389) — DeepSeek `deepseek-flash` 被静默改写（9 条评论，已 CLOSED 标记 duplicate）
- **诉求**：DeepSeek 已将 `deepseek-flash`（V4.1-Flash）定为 canonical 名，Hermes 客户端却将其悄悄重写为 `deepseek-chat`，导致模型路由错误。
- **意义**：表明 Hermes Agent 已实质支持 DeepSeek V4.x 系列，模型兼容性问题持续受到关注。

#### 🥉 [#41220](https://github.com/NousResearch/hermes-agent/issues/41220) — Telegram `/resume` 应跨源显示会话（6 条评论）
- **作者**：spiky02plateau
- **诉求**：Telegram 频道的 `/resume` 命令当前只能列出 Telegram 本地会话；用户希望能看到同一后端的 Desktop/CLI/Cron 会话，实现"手机继续桌面端对话"的体验。

#### 🏅 [#103483](https://github.com/NousResearch/hermes-agent/issues/103483) — muse-spark 任务中途结束（6 条评论，👍 7 高赞）
- **诉求**：Muse Spark 1.2/1.3 在 `finish_reason=stop` 时偶尔以一个无关单词收尾，Responses wire 上的小回归（与 #101968 指引相关）。
- **信号**：👍 7 是今日 Issues 中**最高赞**，反映 Muse Spark 用户群体对稳定性的强烈诉求。

### 💬 值得关注但未达 6 评论的讨论

- [#76767](https://github.com/NousResearch/hermes-agent/issues/76767) (P1)：Desktop 端查看 Telegram 会话时，回复渲染在桌面但**永不到达 Telegram**（零投递义务创建）——**严重消息投递缺陷**。
- [#38275](https://github.com/NousResearch/hermes-agent/issues/38275)：**HAMP — Agent Address System + Async Messaging + Cryptographic Identity**，5 条评论，是社区对未来 A2A 之外的"Agent-as-endpoint"协议的远期构想。
- [#38280](https://github.com/NousResearch/hermes-agent/issues/38280)：**Agent Economic Layer — Native Wallet, Service Registration, Reputation Ledger**（4 评论），长期愿景型 proposal。

---

## 5. Bug 与稳定性

按严重程度排列的今日 Bug：

| 等级 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| **P1** | [#94811](https://github.com/NousResearch/hermes-agent/issues/94811) | Desktop 端两个连接共享 profile 名时，会话作用域的 RPC 全部塌缩到主连接 → "4001 session not found from the 2nd prompt" | 暂未见专项 PR |
| **P1** | [#76767](https://github.com/NousResearch/hermes-agent/issues/76767) | Desktop 端回复不投递到 Telegram（零投递义务） | 暂未见专项 PR |
| **P1** | [#111481 PR](https://github.com/NousResearch/hermes-agent/pull/111481) | Dashboard 服务多 Profile 时 MCP 凭证串号 | **✅ 有 fix PR（已 OPEN）** |
| **P2** | [#103483](https://github.com/NousResearch/hermes-agent/issues/103483) | muse-spark 任务中途以无关词结束 | 暂未见专项 PR |
| **P2** | [#55112](https://github.com/NousResearch/hermes-agent/issues/55112) | zai vision base_url 硬编码 → coding-plan 用户被静默走付费 | 暂未见专项 PR |
| **P2** | [#107224](https://github.com/NousResearch/hermes-agent/issues/107224) | `respawn-argv` 是空壳重启机制，无 systemd unit 的 `serve` 永久重排 | [#111371](https://github.com/NousResearch/hermes-agent/pull/111371) **部分解决** |
| **P2** | [#109982](https://github.com/NousResearch/hermes-agent/issues/109982)（已 CLOSED duplicate） | Windows 上 sentencepiece 0.2.2 导入导致整个 gateway 崩溃 | 已 duplicate 至既有 issue |
| **P3** | [#107389](https://github.com/NousResearch/hermes-agent/issues/107389)（CLOSED dup） | DeepSeek canonical 名被重写 | 已 duplicate |
| **P3** | [#103870](https://github.com/NousResearch/hermes-agent/issues/103870)、[#107582](https://github.com/NousResearch/hermes-agent/issues/107582) | MCP `_watch_stdio_children` coroutine 未被 await 的 RuntimeWarning | 暂未见专项 PR（修复 #81995 引入） |
| **P3** | [#111299](https://github.com/NousResearch/hermes-agent/issues/111299) | macOS 上原生测试失败：relay traceparent 与 Hermes home 权限 | 暂未见专项 PR |

**整体趋势**：大量 P2/P3 Bug 集中在 **gateway 投递语义、session state 跨连接、Profile 配置隔离** 三个相互耦合的子系统。今日合并/待合并的 PR 正在针对这些问题逐项打补丁。

---

## 6. 功能请求与路线图信号

### 🛣 已被 PR 推进（较可能在近期版本落地）

- **TUI `/model` 可搜索 provider/id 列表**（[#111470](https://github.com/NousResearch/hermes-agent/pull/111470)）——已 OPEN，技术上已落地。
- **Session JSON 导出包含 timing 元数据**（[#89944](https://github.com/NousResearch/hermes-agent/pull/89944)）——已 OPEN。
- **Weixin 适配器在交互阈值处暂停发送**（[#111508](https://github.com/NousResearch/hermes-agent/pull/111508)）——OPEN，Weixin 平台稳定性提升。
- **TUI StreamingAssistant 显示 [HH:MM] 时间戳**（[#111511](https://github.com/NousResearch/hermes-agent/pull/111511)）——OPEN。
- **Bahasa Indonesia 文档本地化**（[#92192](https://github.com/NousResearch/hermes-agent/pull/92192)、[#93632](https://github.com/NousResearch/hermes-agent/pull/93632)）——OPEN。

### 📋 待讨论/可能纳入下一里程碑

- **RealtimeVoiceProvider ABC**（[#77111](https://github.com/NousResearch/hermes-agent/issues/77111)）——**最高优先级架构决策**，决定双工语音路线。
- **Home Assistant `deliver` 目标可配置化**（[#35060](https://github.com/NousResearch/hermes-agent/issues/35060)）——把 watch 事件转发到任意平台。
- **Telegram 单线程频道的 platform-level 默认 skill 预加载**（[#12353](https://github.com/NousResearch/hermes-agent/issues/12353)）——把 Discord topic 的体验带到 Telegram DM。
- **A2A 通过 hermes-gateway transport 互联**（[#95981](https://github.com/NousResearch/hermes-agent/issues/95981)）——让 Hermes Cloud 团队实例直接互调，复用 dashboard auth。

### 🌌 远期愿景（不会很快落地但值得关注）

- **HAMP — Agent Address System**（[#38275](https://github.com/NousResearch/hermes-agent/issues/38275)）
- **Agent Economic Layer**（[#38280](https://github.com/NousResearch/hermes-agent/issues/38280)）

---

## 7. 用户反馈摘要

从 Issue 评论与点赞中提炼的真实用户痛点：

### 🔴 痛点

1. **跨表面（Desktop/Telegram/CLI）会话状态分裂**（[#41220](https://github.com/NousResearch/hermes-agent/issues/41220)、[#76767](https://github.com/NousResearch/hermes-agent/issues/76767)、[#94811](https://github.com/NousResearch/hermes-agent/issues/94811)）——用户最强烈的诉求是**"一次对话，随处继续"**，但当前 Desktop 端能看到的会话，回复不一定投递回 Telegram；多 profile/多连接下 session 会"丢失"。
2. **Muse Spark 等第三方模型的中断/异常收尾**（[#103483](https://github.com/NousResearch/hermes-agent/issues/103483)，👍 7）——用户期待与 Hermes 内置模型同等稳定的体验。
3. **macOS APFS 大小写敏感导致 checkout 失败**（[#89200](https://github.com/NousResearch/hermes-agent/issues/89200)、[#89048](https://github.com/NousResearch/hermes-agent/issues/89048)，均 CLOSED duplicate）——仓库文件命名需严格统一。
4. **Windows 平台专项缺陷集中爆发**：`hermes update` 在 PAUSED 服务下中断（[#97004](https://github.com/NousResearch/hermes-agent/issues/97004)）、sentencepiece 崩溃（[#109982](https://github.com/NousResearch/hermes-agent/issues/109982)）、法语 locale 下 PowerShell 错误（[#85659](https://github.com/NousResearch/hermes-agent/issues/85659)）、pytest basetemp 覆盖真实 install（[#111101](https://github.com/NousResearch/hermes-agent/issues/111101)）。
5. **`/goal` 失败质量门无法自愈**（[#110649](https://github.com/NousResearch/hermes-agent/issues/110649)）——用户修复输入后却因"陈旧 fingerprint"反复重放失败。
6. **离网/内网部署卡 3 分钟**（[#111072](https://github.com/NousResearch/hermes-agent/issues/111072)）——faster-whisper 无缓存时强行走 HF Hub，对企业内网用户极不友好。
7. **Coding-plan 订阅被静默走付费 API**（[#55112](https://github.com/NousResearch/hermes-agent/issues/55112)）——Z.AI 用户实际产生的费用与预期不符。

### 🟢 满意/正向信号

- `teknium1` 在 #111370 修复了 `allow_all_users` 被静默丢弃的问题——这意味着此前配置生效的用户终于得到正确的"开放所有用户"语义。
- Weixin 适配器主动增加了发送节流（[#111508](https://github.com/NousResearch/hermes-agent/pull/111508)），表明社区正在为长回复场景的稳定性主动投入。
- Feishu 适配器修复了 executor 被拆除后"全员失聪"的问题（[#111379](https://github.com/NousResearch/hermes-agent/pull/111379)），直接挽救了 Feishu 用户的可用性。

---

## 8. 待处理积压

以下 Issue/PR 长期开放（创建时间早于 90 天），仍具较高价值，提醒维护者关注：

| Issue/PR | 标题 | 创建日期 | 备注 |
|---|---|---|---|
| [#79003](https://github.com/NousResearch/hermes-agent/issues/79003) | Desktop all-profiles 视图创建会话总是落到启动 profile | 2026-08-05 | 已有 [#90480](https://github.com/NousResearch/hermes-agent/pull/90480) 部分相关，但未直接修复 |
| [#55112](https://github.com/NousResearch/hermes-agent/issues/55112) | zai vision 硬编码 base_url 绕过 coding-plan | 2026-06-29 | P2 计费问题，影响所有 Z.AI coding-plan 用户 |
| [#9154](https://github.com/NousResearch/hermes-agent/issues/9154) | Feishu 自动 thread + topic session 隔离 | 2026-04-13 | 已有 [#111379](https://github.com/NousResearch/hermes-agent/pull/111379) 修复 Feishu executor，但此 RFC 仍未合入 |
| [#12353](https://github.com/NousResearch/hermes-agent/issues/12353) | Platform-level 默认 skill 预加载 | 2026-04-19 | 与 Discord topic 模型对齐的长期需求 |
| [#35060](https://github.com/NousResearch/hermes-agent/issues/35060) | Home Assistant `watch_*` 可配置 deliver 目标 | 2026-05-30 | 用户已等待 ~4 个月 |
| [#38275](https://github.com/NousResearch/her

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-09-15
**数据来源**：github.com/sipeed/picoclaw
**报告人**：开源项目分析师

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内处于**低活跃度静默期**：仅出现 1 条 Issue 更新（标记为 stale）和 2 条 PR 互动（1 关闭 / 1 stale），无新版本发布。值得关注的是，关闭的 PR #3379 实质上是一份 **v0.10.0 冲刺规划设计文档**，表明项目正从功能开发过渡到下一阶段版本规划阶段。整体来看，社区交互节奏放缓，Issue 与 PR 积压迹象初现，建议维护者关注 stale 状态工单。**活跃度评级：⭐⭐☆☆☆（偏低）**

---

## 2. 版本发布

📭 **无新版本发布**

今日无任何 Release 标签更新。距离上一次正式发版（版本号 0.3.1，来自 Issue #3365 用户反馈）已有较长间隔，结合今日 v0.10.0 冲刺计划文档的提交，可推断项目正处于**版本规划与重构设计阶段**。

---

## 3. 项目进展

### ✅ 已关闭 PR：#3379 — docs: v0.10.0 sprint plan
- **作者**：stpinkie
- **链接**：[sipeed/picoclaw#3379](https://github.com/sipeed/picoclaw/pull/3379)
- **状态**：已关闭
- **内容摘要**：将 `.todo.md` 中的 v0.10.0 草案（Tracks 60–66）细化为位于 `docs/design/v0.10.0-sprint.md` 的可实施设计文档，明确执行顺序为 **60 → 65 → 61 → 62 → 63 → 64 → 66**，每条 Track 对应一个独立 PR。

**意义解读**：
- 这是**纯文档类 PR**，未合并代码改动，但反映出项目正系统化地推进 v0.10.0 路线图；
- 关闭原因未明确（可能因纯文档无需合并，或已通过其他渠道纳入仓库）；
- 推进作用有限——主要价值在于**对外公开路线图**，便于社区贡献者提前对齐。

**整体推进评估**：项目今日实质性的代码层进展几乎为零，更多是规划层面的梳理。

---

## 4. 社区热点

### 🔥 唯一活跃 Issue：#3365 — QQ channel 401 鉴权失败
- **链接**：[sipeed/picoclaw#3365](https://github.com/sipeed/picoclaw/issues/3365)
- **作者**：crazysarah
- **互动数据**：💬 2 评论 / 👍 1 点赞
- **状态**：[OPEN] [stale]

**诉求分析**：
- 用户在 Orange Pi 3B（aarch64）上运行 picoclaw nightly 0.3.1 时，**QQ channel 无法连接**，腾讯 QQ 开放平台返回 `401 "Authorization参数格式错误"`；
- 根因被定位为 `botgo v0.2.1` 与 `resty >= v2.17.1` 的不兼容问题（间接依赖升级导致的回归）；
- 这是一个典型的**依赖链上游版本冲突**场景，需要维护者协调 botgo 仓库升级或回退 resty 间接依赖版本。

由于仅有 1 条 Issue 活跃，本期社区热度极为清淡。

---

## 5. Bug 与稳定性

| # | 编号 | 严重程度 | 问题描述 | 是否有 fix PR |
|---|------|----------|----------|---------------|
| 1 | [#3365](https://github.com/sipeed/picoclaw/issues/3365) | 🔴 **High** | QQ 渠道 401 鉴权失败，botgo v0.2.1 + resty >= v2.17.1 不兼容 | ❌ 暂无 |

**严重程度判定依据**：
- **阻塞性**：用户完全无法使用 QQ channel 这一核心集成功能；
- **影响面**：QQ 是国内用户重要的接入渠道；
- **修复路径明确**：根因已定位（间接依赖版本），理论上可通过 `go.mod` 锁版本或升级 botgo 解决；
- **风险**：marked as **stale**——若维护者未及时响应，可能会自动关闭，错失社区贡献机会。

---

## 6. 功能请求与路线图信号

### 📌 PR #3370 — feat(tools): add Keenable web search provider
- **链接**：[sipeed/picoclaw#3370](https://github.com/sipeed/picoclaw/pull/3370)
- **作者**：ilya-bogin-keenable
- **状态**：[OPEN] [stale]
- **内容**：新增 Keenable（keenable.ai）作为 `web_search` 工具提供者，无需 API Key 即可启用，调用公开端点 `POST /v1/search/public`。

**路线图信号解读**：
1. **生态拓展意图明显**：第三方供应商主动贡献集成，反映 picoclaw 在 **AI 工具生态**方面的扩展性受到关注；
2. **零门槛集成**（no API key）是吸引用户的亮点，可能契合 v0.10.0 "Tools" Track 的方向；
3. **被标 stale**，需维护者评估是否纳入下一版本或回复贡献者；
4. 结合 PR #3379 的 v0.10.0 计划中提到 **Tracks 60–66 涉及工具扩展**，该 PR 有较高概率被纳入后续版本，但前提是维护者恢复对话。

---

## 7. 用户反馈摘要

📊 **可提炼的用户声音（来自 Issue #3365）**

| 维度 | 反馈内容 |
|------|----------|
| **使用场景** | Orange Pi 3B（RK3566 ARM64）边缘设备部署 AI 助手，集成 QQ 作为对话渠道 |
| **痛点** | 鉴权参数格式被 QQ 平台拒绝，无法连接；用户已自行定位到 botgo + resty 版本兼容问题 |
| **技术深度** | 用户提供了完整的版本链路（picoclaw 0.3.1 / botgo v0.2.1 / resty v2.17.1），属于**高质量 Issue**，但仍未获得维护者实质性回复 |
| **满意度** | ⚠️ **偏低**——stale 标记暗示社区维护响应可能存在滞后 |
| **潜在不满** | 上游依赖（botgo）维护节奏与 picoclaw 集成节奏不匹配，影响下游用户体验 |

---

## 8. 待处理积压 ⚠️

以下工单在过去 24 小时内被标记为 **stale**，建议维护者优先响应：

| 编号 | 类型 | 标题 | 创建日期 | 风险 |
|------|------|------|----------|------|
| [#3365](https://github.com/sipeed/picoclaw/issues/3365) | Bug | QQ channel 401 "Authorization参数格式错误" | 2026-09-04 | 🔴 核心集成不可用，根因明确 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Feature | feat(tools): add Keenable web search provider | 2026-09-07 | 🟡 外部贡献者等待反馈，可能流失贡献意愿 |

**维护建议**：
1. **优先回复 #3365**——根因已由社区定位，修复成本较低（go.mod 调整），可快速提升用户信心；
2. **明确 PR #3370 的处理路径**——无论是接受、要求修改或关闭，都应给贡献者一个明确答复，避免社区贡献意愿流失；
3. **考虑建立 stale bot 例行审视机制**——防止高质量工单被自动忽略。

---

## 📈 项目健康度仪表盘

| 指标 | 状态 | 评分 |
|------|------|------|
| 代码提交活跃度 | 🟡 低（无代码层 PR） | ⭐⭐☆☆☆ |
| Issue 响应速度 | 🟡 滞后（stale 工单积压） | ⭐⭐☆☆☆ |
| 路线图清晰度 | 🟢 良好（v0.10.0 设计文档已成形） | ⭐⭐⭐⭐☆ |
| 社区贡献活跃度 | 🟡 有外部 PR 但未及时响应 | ⭐⭐☆☆☆ |
| 发布节奏 | 🟡 无新版本 | ⭐⭐☆☆☆ |

**整体评估**：PicoClaw 当前处于**规划沉淀期**——v0.10.0 设计文档的落地表明项目仍在积极演进，但社区层面的维护响应出现放缓迹象。建议维护团队在冲刺新版本前，优先清理 stale 工单，以保持社区贡献者信心。

---

*本日报基于 GitHub 公开数据自动生成，数据时点：2026-09-15。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-15

> 数据来源：`github.com/qwibitai/nanoclaw` 过去 24 小时 GitHub 活动  
> 仓库：`nanocoai/nanoclaw`  
> 报告生成日期：2026-09-15

---

## 1. 今日速览

- **Issue 节奏平稳**：6 条更新，3 闭 3 开。今日新开 3 条 Issue 中包含 1 个**潜在安全/隐私问题**（#3814，原始错误文本泄露到公开频道）与 2 个**数据库稳定性问题**（#3811 busy_timeout 缺失；#3660 readonly 数据库已关闭）。
- **PR 节奏极高**：50 条更新，38 条关闭/合并，12 条待合并。关闭量集中在 `amit-shafnir` 的 **channels twin / providers twin 分支合入**（14 条 PR 在同一日关闭），是一次明显的分支整合事件。
- **无新版本发布**。但代码主干在**安全加固、数据库稳定性、OpenCode 集成、Agent 交接协议**四个方向都有实质推进。
- **整体健康度**：🟢 **健康**。维护者响应及时、安全类 Issue 提报后立即可见、twin 分支清理动作显示版本治理节奏清晰。

---

## 2. 版本发布

无新版本。

---

## 3. 项目进展（今日合入/关闭的重要 PR）

### 3.1 channels twin / providers twin 分支整合（核心团队）

`amit-shafnir` 的 14 条 PR 在 2026-09-14 集中关闭，标志着 **channels twin 与 providers twin 分支已完成 main 合流**。覆盖：

| PR | 主题 | 影响面 |
|---|---|---|
| [#3090](https://github.com/nanocoai/nanoclaw/pull/3090) | 模板顶层上下文 Markdown 前置 | UX/模板 |
| [#3093](https://github.com/nanocoai/nanoclaw/pull/3093) | 处理中的 turn 保持 typing 状态 | 频道体验 |
| [#3094](https://github.com/nanocoai/nanoclaw/pull/3094) | Telegram 瞬时 bot identity 查询重试 | Telegram 稳定性 |
| [#3396](https://github.com/nanocoai/nanoclaw/pull/3396) | 在 chat 内通过模板创建 agent | 重要功能 |
| [#3428](https://github.com/nanocoai/nanoclaw/pull/3428) | Slack 中创建子 agent 时携带 template ref | 重要功能 |
| [#3465](https://github.com/nanocoai/nanoclaw/pull/3465) | Chat SDK 4.29.0 → 4.32.0 升级，保留 Telegram "/" 入站 | 依赖升级 + 修复 |
| [#3468](https://github.com/nanocoai/nanoclaw/pull/3468) | WhatsApp Cloud 25s typing 生命周期声明 | WhatsApp 节流 |
| [#3470](https://github.com/nanocoai/nanoclaw/pull/3470) | pnpm minimumReleaseAge 门开启（channels twin） | 安全/供应链 |
| [#3471](https://github.com/nanocoai/nanoclaw/pull/3471) | pnpm minimumReleaseAge 门开启（providers twin） | 安全/供应链 |
| [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) | 暴露结构化 host health | 可观测性 |
| [#3483](https://github.com/nanocoai/nanoclaw/pull/3483) | 强化卸载所有权与失败处理 | 安装器安全 |
| [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) | setup 时粘贴的密钥不进 argv | **安全修复** |
| [#3486](https://github.com/nanocoai/nanoclaw/pull/3486) | 暴露 build-time preseed 目录 | 安装器 |
| [#3487](https://github.com/nanocoai/nanoclaw/pull/3487) | 客户端时区 preseed (`--tz`) | 安装器 |

**意义**：twin 分支合并后，main 在 channels（Slack/Telegram/WhatsApp）、providers（多模型）、setup（CLI/密钥/时区）、observability（host health）四个层面同步推进，**项目向前迈出一大步**，但也意味着 main 在短期内承载了大量改动，回归风险上升。

### 3.2 其他重要进展

- [#3465](https://github.com/nanocoai/nanoclaw/pull/3465) 修复了 Telegram 因 URL 中奇数个 `_/*/~` 而无法解析 entity 的问题（OneCLI 连接链接恰好命中此形状），属**线上回归修复**。
- [#3484](https://github.com/nanocoai/nanoclaw/pull/3484) 将 OAuth/Key 不再经由 argv 传给子进程，修复**密钥泄漏风险**。
- [#3482](https://github.com/nanocoai/nanoclaw/pull/3482) 新增结构化 host health，使运维工具无需直连中央 DB 即可判断安装状态。

---

## 4. 社区热点

按创建/关注度排序（Issue 评论数均较低，但话题密度高）：

| 链接 | 标题 | 关注点 |
|---|---|---|
| [#3814](https://github.com/nanocoai/nanoclaw/issues/3814) | 原始 process/turn-error 文本可能投递到公开频道 | 安全/隐私 |
| [#3811](https://github.com/nanocoai/nanoclaw/issues/3811) | 中央 DB 缺少 busy_timeout，锁竞争被误判为损坏 | 数据库稳定性 |
| [#3801](https://github.com/nanocoai/nanoclaw/issues/3801) | `update-nanoclaw validate` 覆盖本地 patch skill 修改 | 升级器语义 |
| [#3813](https://github.com/nanocoai/nanoclaw/pull/3813) | Durable handoff safety + Mission Control | 大型功能提案 |
| [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) / [#3747](https://github.com/nanocoai/nanoclaw/pull/3747) / [#3746](https://github.com/nanocoai/nanoclaw/pull/3746) | OpenCode 集成三件套（核心团队） | 新 provider |

**诉求分析**：
- 同一作者 `DawoudIO` 接连提报两个数据库/IO 相关 Issue，反映**中央 DB 已成为事实瓶颈**，需要一次系统性的并发/IO 强化。
- `foxsky` 的 #3800 / #3801 体现 `update-nanoclaw` 工作流文档与实现之间存在**一致性裂缝**，维护者应优先审阅其修复建议。
- `briankobekim` 的 #3813 提出**Handoff Ledger + Mission Control**——这是 roadmap 级别的特性，叠加 Slack A2A 的结构化交付约束，目标是把 agent-to-agent 交接从"日志里查"升级到"系统级账本"。

---

## 5. Bug 与稳定性

按严重度排序：

### 🔴 高 — 安全/隐私

- **[#3814](https://github.com/nanocoai/nanoclaw/issues/3814)** `deliverErrorResult`（`container/agent-runner/src/poll-loop.ts`）将 SDK 原始错误文本原样回投到触发该 turn 的频道，**未检查目标是否公开**。若容器内 `claude` 子进程在面向公众群组的 turn 中途崩溃，原始堆栈/凭证碎片可能外泄。**无修复 PR**。

### 🟠 中 — 数据库与升级器

- **[#3811](https://github.com/nanocoai/nanoclaw/issues/3811)** 中央 DB（`src/db/compose.ts`）仅启用 WAL 模式，未设置 `busy_timeout`，瞬间锁竞争立即抛错而非短等待后重试。**无修复 PR**。建议作为 #3660 的根因修复一并处理。
- **[#3801](https://github.com/nanocoai/nanoclaw/issues/3801)** `update-nanoclaw validate` 在 staging 分支上提交 `chore: refresh installed skill payloads`，**会覆盖本地 patch 过的 skill 文件**。**无修复 PR**。属于工作流回归。
- **[#3800](https://github.com/nanocoai/nanoclaw/issues/3800) 已关闭** `update-nanoclaw` 文档中漏列三个被导入的脚本，controller 无法加载（已在 9/14 关闭）。
- **[#3706](https://github.com/nanocoai/nanoclaw/issues/3706) 已关闭** `ncl groups config add-mount --container` 接受绝对路径时会产生双层嵌套破损路径（已关闭）。

### 🟢 低 / 已修复

- **[#3660](https://github.com/nanocoai/nanoclaw/issues/3660) 已关闭** Session SQLite 进入 readonly 状态导致 Discord 等频道消息外发失败（已关闭）。但**根因（#3811）仍未关闭**，需关注是否彻底修复。

---

## 6. 功能请求与路线图信号

| 候选 | 已有 PR | 下一版本纳入概率 |
|---|---|---|
| **Durable Handoff Ledger + Mission Control** | [#3813](https://github.com/nanocoai/nanoclaw/pull/3813) | 🟢 高 — 涉及 Slack A2A 结构化交付、桥接端策略、CLI 资源，模块化设计较成熟 |
| **OpenCode 作为可选 provider** | [#3733](https://github.com/nanocoai/nanoclaw/pull/3733) / [#3747](https://github.com/nanocoai/nanoclaw/pull/3747) / [#3746](https://github.com/nanocoai/nanoclaw/pull/3746) | 🟢 高 — 核心团队 PR，三件套已成型，含 setup 与 host 鉴权 |
| **A2A 通信失败回报源端** | [#3719](https://github.com/nanocoai/nanoclaw/pull/3719) | 🟡 中 — 与 #3813 主题重合，可能被合并/吸收 |
| **host.docker.internal NO_PROXY 修复** | [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) | 🟡 中 — 关键修复，但 OneCLI 引入的代理副作用仍可能扩散 |
| **中央 DB busy_timeout** | 无 PR | 🟡 中 — 需与 #3660 联合根治 |
| **错误文本脱敏/路由限制** | 无 PR | 🟠 待启动 — #3814 提报但无对应修复 |

---

## 7. 用户反馈摘要

从公开 Issue/PR 描述中可提炼的真实痛点：

- **数据库成为瓶颈**：`DawoudIO` 在 #3660 与 #381

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期：** 2026-09-15
**仓库：** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日社区活跃度处于**低位静默**状态：过去 24 小时内仅 4 条 Issue 更新、0 条 PR 提交、无新版本发布，且没有任何 Issue 被关闭。值得关注的是，今日出现的两条新 Issue（#997、#998）来自同一用户 `iamalanlui`，均为推广其自有项目 [apifare](https://apipay.fly.dev/?origin=human-referral) 的营销内容，社区响应度（评论数、点赞数）均为 0，疑似低质量推广。整体来看，仓库处于例行维护节奏，无实质性代码推进。

---

## 2. 版本发布

️ **无新版本发布。** 距离上一次可识别的发版活动已较长时间，建议关注仓库的 Releases 页面确认版本基线。

---

## 3. 项目进展

⚠️ **今日无任何 PR 合并或关闭。** 代码层面项目今日没有向前推进。

维护者可考虑针对以下长期开放 Issue 主动发起 PR，以推动项目向前：
- Issue #993（Firecrawl 自托管端点可配置化）— 改动范围明确，已有清晰实现思路

---

## 4. 社区热点

今日活跃 Issue 中，**讨论最热的为 Issue #975**（2 条评论）：

| 排名 | Issue | 标题 | 作者 | 评论数 | 链接 |
|------|-------|------|------|--------|------|
| 1 | #975 | Add grok-cli provider | yanggf8 | 2 | [🔗](https://github.com/nullclaw/nullclaw/issues/975) |
| 2 | #993 | feat: make Firecrawl search endpoint configurable | Crymfox | 2 | [🔗](https://github.com/nullclaw/nullclaw/issues/993) |
| 3 | #997 | Prepaid Brave/Firecrawl vs those keys for NullClaw web_search? | iamalanlui | 0 | [🔗](https://github.com/nullclaw/nullclaw/issues/997) |
| 4 | #998 | Prepaid search hop when keyless DDG isn't enough? | iamalanlui | 0 | [](https://github.com/nullclaw/nullclaw/issues/998) |

**诉求分析：**
- **#975**（grok-cli provider）：用户希望借鉴已有 `claude-cli`、`codex-cli`、`gemini-cli` 的 subprocess 模式，新增 grok CLI 适配器，让持有 grok.com 订阅的用户可"非计量"使用 Grok 模型。
- **#993**（Firecrawl 自托管）：用户希望将硬编码的 `https://api.firecrawl.dev/v1/search` 端点改为可配置，以支持自托管 Firecrawl 实例。
- **#997 / #998**：两条 Issue 实际为同一作者对其商业项目 apifare 的推广，建议维护者评估是否纳入垃圾信息过滤机制。

---

## 5. Bug 与稳定性

⚠️ **今日无明确的新 Bug 报告。** 

不过，#998 引用了 Issue #871（[DuckDuckGo 默认 vs Brave/SearXNG 在弱设备上的问题](https://github.com/nullclaw/nullclaw/issues/871)），暗示在无密钥场景下使用 DuckDuckGo 默认搜索仍存在可靠性问题，这是一个**已知的、尚未关闭的稳定性痛点**。当前尚无对应 fix PR。

---

## 6. 功能请求与路线图信号

按合并可能性排序：

| 优先级 | Issue | 需求 | 落地可能性 |
|--------|-------|------|------------|
| 🟢 高 | [#993](https://github.com/nullclaw/nullclaw/issues/993) | Firecrawl 自托管端点可配置化 | **高** — 改动局部、向后兼容、无架构风险，符合已有可扩展模式 |
| 🟡 中 | [#975](https://github.com/nullclaw/nullclaw/issues/975) | 新增 grok-cli provider | **中** — 与现有 CLI provider 模式一致，但需引入对 grok CLI 协议的逆向工程与维护成本 |
| 🔴 低 | [#997](https://github.com/nullclaw/nullclaw/issues/997) / [#998](https://github.com/nullclaw/nullclaw/issues/998) | 集成第三方 prepaid MCP 计量（apifare） | **低** — 商业化集成意愿不明，与当前默认零依赖定位存在冲突 |

---

## 7. 用户反馈摘要

- **🔌 自托管友好性诉求（#993）：** 社区用户希望 NullClaw 对自托管场景更友好，避免硬编码 SaaS 端点，这反映了项目用户群中相当比例的私有化部署偏好。
- **💸 模型成本敏感（#975）：** 用户希望通过本地 CLI 的已登录会话来"非计量"调用 Grok，反映出 AI Agent 工具链普遍面临的高 token 成本压力。
- **🔍 弱设备搜索可靠性（#871 → #998）：** 在无 Brave/Firecrawl key 的场景下，DuckDuckGo 兜底方案在低算力设备上表现不稳定，是另一个真实痛点。
- **😐 推广噪音：** 今日新开的两条 Issue（#997、#998）缺乏技术细节，本质是外部商业项目营销，对社区讨论无实质贡献。

---

## 8. 待处理积压

| Issue | 标题 | 创建日期 | 已开放天数 | 状态 |
|-------|------|----------|-----------|------|
| [#975](https://github.com/nullclaw/nullclaw/issues/975) | Add grok-cli provider | 2026-07-11 | **66 天** | 🟡 需维护者反馈是否纳入路线图 |
| [#993](https://github.com/nullclaw/nullclaw/issues/993) | make Firecrawl search endpoint configurable | 2026-08-24 | 22 天 |  等待实现或社区 PR |
| [#871](https://github.com/nullclaw/nullclaw/issues/871) | DuckDuckGo vs Brave/SearXNG 弱设备稳定性 | 较早 | 较旧 | 🔴 Bug 仍未关闭，需关注 |

**🚨 维护者关注建议：**
1. Issue #975 已开放逾两个月且仍无 PR 跟进，建议明确表态（accept/decline）或给出实现指引。
2. Issue #993 改动局部且明确，可考虑由维护者直接快速合并，降低社区响应负担。
3. 建议针对 #997、#998 类推广性 Issue 启用 `spam` 标签并锁定，避免污染 Issue 列表。

---

> 📊 **项目健康度评估：⭐⭐☆☆☆（2/5）**
> 今日无代码合并、无版本发布、无 Bug 关闭；社区讨论度极低，且出现疑似推广噪音。建议维护者主动发起一次小范围迭代以提振活跃度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-09-15  
**数据来源**：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)  
**项目领域**：AI 智能体与个人 AI 助手

---

## 1. 今日速览

IronClaw 今日整体处于**低活跃度运行状态**。过去 24 小时内仅有 1 条 Issue 更新和 1 条 PR 更新，无版本发布，无已关闭或已合并的工作项。从内容性质看，维护工作集中在两个方向：一是基于基准测试的模型质量监控（[Issue #8100](https://github.com/nearai/ironclaw/issues/8100)），二是 MCP 通道响应泄漏诊断的分类修复（[PR #8077](https://github.com/nearai/ironclaw/pull/8077)）。整体而言，项目处于稳定的内部维护阶段，无重大事件，社区互动也较为沉寂（两个工单的评论数均为 0）。

---

## 2. 版本发布

本周期内无新版本发布，因此本节略。

---

## 3. 项目进展

本周期无已合并或已关闭的 PR，无显著的项目里程碑推进。

唯一活跃的 [PR #8077](https://github.com/nearai/ironclaw/pull/8077)（创建于 2026-09-06，最新更新于今日）仍处于待合并状态。该 PR 旨在**集中化处理 MCP 通道的响应泄漏诊断逻辑**，将 `response_leak_blocked` 哨兵值统一到 `ironclaw_host_api::http`，并让 MCP 通道能正确分类该哨兵。其指向修复的是 [Issue #8009](https://github.com/nearai/ironclaw/issues/8009)（标题未给出）。该变更对安全诊断的可观测性具有正向意义，但因尚未合入，对项目整体进度尚无贡献。

**项目向前推进幅度**：今日 0 步，PR 仍处于审阅排队状态。

---

## 4. 社区热点

今日社区互动极为平淡：

| 工单 | 评论数 | 点赞数 |
|---|---|---|
| [Issue #8100](https://github.com/nearai/ironclaw/issues/8100) | 0 | 0 |
| [PR #8077](https://github.com/nearai/ironclaw/pull/8077) | 未定义 | 0 |

由于两条工单的评论数均为 0 或未定义，无法从社区反馈中提炼实质诉求。

- **值得关注的隐性热点**：[PR #8077](https://github.com/nearai/ironclaw/pull/8077) 涉及 MCP egress 的 host leak-blocking 行为。考虑到该类问题通常牵涉安全策略与诊断可见性的张力，社区后续可能就"如何向终端用户透明展示拦截原因"展开讨论，但目前尚无信号。
- **基准测试日报**：[Issue #8100](https://github.com/nearai/ironclaw/issues/8100) 是项目维护者 *pranavraja99* 自动化的失败分类日报，此为持续运营机制，并非用户驱动的热点。

---

## 5. Bug 与稳定性

**待修复中（已有 PR）**：

- **MCP 响应泄漏诊断分类问题**（[PR #8077](https://github.com/nearai/ironclaw/pull/8077) → [Issue #8009](https://github.com/nearai/ironclaw/issues/8009)）  
  - **严重程度**：中  
  - **描述**：MCP 通道在返回 host 端 response_leak_blocked 哨兵时未能正确分类，破坏了 leak-blocking 与 MCP 可见诊断语义的一致性。  
  - **状态**：修复 PR 已存在并等待审阅/合并，未合入主线。

**潜在稳定性信号**：

- [Issue #8100](https://github.com/nearai/ironclaw/issues/8100) 指出 officeqa 套件出现 43 个非通过任务，并初步判定为 **DeepSeek-V4-Flash 导航类任务的真实模型质量问题**，而非基础设施或代码层缺陷。这并非 IronClaw 自身的 Bug，而是反映了模型在特定任务上的能力短板，对项目稳定性无直接影响。

---

## 6. 功能请求与路线图信号

本周期未观察到由用户提交的明确功能请求。

可作为**间接路线图信号**的内容：

- **基准测试驱动开发常态化**：[Issue #8100](https://github.com/nearai/ironclaw/issues/8100) 表明项目已建立每日失败分类机制（"Daily ironclaw failure taxonomy"），说明团队正在以数据驱动方式持续定位质量退化点，可视为未来路线图中"可观测性与质量保障"方向的明确信号。
- **MCP 安全可观测性增强**：[PR #8077](https://github.com/nearai/ironclaw/pull/8077) 透露出项目在 host ↔ MCP 边界上的安全诊断仍有改进空间，未来或将继续围绕"拦截透明化、错误分类标准化"展开工作。

---

## 7. 用户反馈摘要

由于今日两条工单的评论数均为 0 或未定义，**未能从 Issues 评论中提炼出真实用户痛点、使用场景或满意度信号**。

仅能从工单内容侧面推断：

- **维护者侧视角**：团队对 officeqa 套件的质量波动保持敏感，已通过日报机制主动追踪（[Issue #8100](https://github.com/nearai/ironclaw/issues/8100)）。
- **开发者侧视角**：开发者 *linhongyu510* 主动提交 MCP 诊断修复（[PR #8077](https://github.com/nearai/ironclaw/pull/8077)），说明社区贡献者仍在持续参与。

---

## 8. 待处理积压

提醒维护者关注以下**积压工单**：

1. **[PR #8077](https://github.com/nearai/ironclaw/pull/8077) — fix(mcp): classify response leak diagnostics**  
   - 创建于 **2026-09-06**，已等待 **9 天**未合入。  
   - 状态：[OPEN]，评论数未定义，点赞 0。  
   - **建议**：维护者应尽快审阅，因其涉及 MCP 安全诊断语义，及早合入可降低后续返工风险。

2. **[Issue #8100](https://github.com/nearai/ironclaw/issues/8100) — Daily ironclaw failure taxonomy — 2026-09-14**  
   - 创建/更新于 2026-09-14。  
   - 状态：[OPEN]，评论 0，点赞 0。  
   - **建议**：作为自动化日报，是否需要制定闭环机制（如：日报 Issue 自动关联对应 PR）以避免长期堆积，值得维护者评估。

3. **历史积压（盲区）**  
   - 当前数据快照未提供更早的 Issue/PR 列表，无法全面评估 30 天以上的积压情况。建议建立积压工单看板，公开 Triage SLA。

---

## 附录：项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ★★☆☆☆ | 24 小时仅 1 Issue + 1 PR 更新 |
| 社区互动 | ★☆☆☆☆ | 评论与点赞均为 0 |
| 代码流入 | ★★☆☆☆ | 有待合并 PR 但未推进 |
| 版本节奏 | ☆☆☆☆☆ | 无新版本发布 |
| 质量监控 | ★★★★☆ | 每日失败分类机制运转良好 |

**总体判断**：项目处于**稳定但低活跃**的维护阶段，PR 审阅节奏滞后于提交节奏，建议维护者优先清理积压。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-09-15** | **仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 仓库今日呈现**典型的依赖维护日**特征，24 条 PR 更新中绝大多数为 Dependabot 自动发起的依赖升级（占比约 90%），社区人工参与的实质性代码改动较少。Issue 端仅有 1 条陈旧 Bug 被重新激活更新（#1035），无新功能请求或版本发布。整体活跃度**中等偏低**，主要推进集中在底层工具链升级与构建/CI 基础设施层面，核心业务功能层面推进有限。值得关注的是，OpenClaw 运行时升级 PR（#2665）已关闭合并，标志着项目正稳步推进到 OpenClaw v2026.8.1 + Electron 43.5.0 的新基线版本。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 仓库当前处于 OpenClaw v2026.6.1 → v2026.8.1 升级过渡期，PR #2665 已关闭，预期将在下一版本中正式发布该基线升级。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

#### 🔧 [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665) — 升级 OpenClaw 至 v2026.8.1（已关闭）
**作者**：fisherdaddy | **影响范围**：renderer / build / docs / main / openclaw / cowork / im / artifacts（windows + macos）

本次 PR 是当日**最关键的进展**，标志着项目底层运行时基线全面升级：
- **OpenClaw 运行时**：v2026.6.1 → v2026.8.1
- **Electron**：40.2.1 → 43.5.0
- 适配运行时集成与用户状态迁移
- 改进 Markdown 编辑、Library 组织与应用内浏览器
- 跨平台构建产物（Windows + macOS）同步刷新

**影响**：项目向前迈进一大步，新基线带来更好的稳定性与现代浏览器能力，但需关注 Electron 大版本跳跃可能引发的兼容性问题。

#### 🐛 [PR #2663](https://github.com/netease-youdao/LobsterAI/pull/2663) — 修复 Vite 监听 Windows 环路死锁（已关闭）
**作者**：btc69m979y-dotcom | **影响范围**：renderer

修复了开发模式下当临时目录存在 Windows junction（目录软链接环路）时 Vite 启动超时或崩溃的问题。扩展 watch 排除规则，新增 `.work`、`artifacts`、`dist-electron` 三个目录。

**影响**：显著改善 Windows 开发体验，避免因构建产物或临时目录造成的开发环境卡死。

#### 📦 依赖批量升级（已关闭的 stale PR）

以下 stale Dependabot PR 在今日被批量清理/关闭，反映维护者对依赖锁版本的主动整理：
| PR | 升级内容 | 说明 |
|---|---|---|
| [#2587](https://github.com/netease-youdao/LobsterAI/pull/2587) | mermaid 10.9.8 → 12.0.0 | 大版本升级，含 breaking changes |
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | react-dom 18.3.1 → 19.2.8 | React 19 主版本 |
| [#2582](https://github.com/netease-youdao/LobsterAI/pull/2582) | @types/react-dom 18.3.7 → 19.2.5 | 类型同步 |
| [#2586](https://github.com/netease-youdao/LobsterAI/pull/2586) | vite 5.4.21 → 8.3.0 | Vite 大版本跳跃 |
| [#2583](https://github.com/netease-youdao/LobsterAI/pull/2583) | trufflehog 3.88.30 → 3.97.1 | CI 安全扫描 |
| [#2578](https://github.com/netease-youdao/LobsterAI/pull/2578) | better-sqlite3 12.11.1 → 13.0.3 | 主版本跳跃 |

---

## 4. 社区热点

由于今日 Issues 仅 1 条、PR 评论数普遍为 0，**讨论活跃度处于低位**。仅有的互动主要集中在以下两项：

- 🔥 [**Issue #1035**](https://github.com/netease-youdao/LobsterAI/issues/1035) — NimGateway 消息去重缓存 Bug
  - 创建于 2026-03-30，标注 `[stale]`，今日再次被自动更新
  - 反映 IM 模块长期存在的静默消息丢失问题，社区关注度高但维护者尚未给出修复时间表

- 📌 [**PR #2665**](https://github.com/netease-youdao/LobsterAI/pull/2665) — OpenClaw v2026.8.1 升级
  - 今日人工提交的最高复杂度 PR，跨多个 area 标签，影响面广

**诉求分析**：当前社区讨论的真空期，反映出 Issues 跟进机制可能存在缺陷（stale 标签被频繁触发但无实质响应），建议维护者主动审视 stale 队列。

---

## 5. Bug 与稳定性

### 🔴 高严重度（静默数据丢失）
[**Issue #1035**](https://github.com/netease-youdao/LobsterAI/issues/1035) — **NimGateway 重连后消息去重缓存未清空**
- **严重程度**：🔴 高（用户消息被静默丢弃，无任何提示）
- **根因**：`src/main/im/nimGateway.ts` 中 `processedMessages` 被错误声明为**模块级全局 Map**，所有 NimGateway 实例共享同一缓存
- **触发场景**：网络抖动 → stop() + start() 重连 → 同 ID 消息在 5 分钟 TTL 内被 `isMessageProcessed()` 误判为重复
- **当前状态**：**已开放 168 天，无关联修复 PR**
- **建议**：建议维护者提高优先级，可能涉及会话隔离设计层面的修复

### 🟡 中严重度（开发体验）
[**PR #2664**](https://github.com/netease-youdao/LobsterAI/pull/2664) — **POPO SDK 加载竞态条件**（待合并）
- 升级 OpenClaw v2026.8.1 后，POPO 2.1.13 在 host ESM import 尚未完成时同步 require SDK 模块，触发 `ERR_REQUIRE_ESM_RACE_CONDITION`，导致网关无 POPO 账号监听器
- **当前状态**：PR 已开放，待合并，建议随 OpenClaw 升级一同发布

### 🟢 低严重度（已修复）
[**PR #2663**](https://github.com/netease-youdao/LobsterAI/pull/2663) — Vite 监听 Windows junction 环路（已关闭）

---

## 6. 功能请求与路线图信号

今日无新增功能请求。但从已合并的 PR 中可观察到下一版本的明确信号：

| 方向 | 信号来源 | 预期纳入 |
|---|---|---|
| **OpenClaw v2026.8.1 + Electron 43.5 基线** | [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665) | ✅ 即将发布 |
| **POPO 插件稳定性** | [PR #2664](https://github.com/netease-youdao/LobsterAI/pull/2664) | 🔜 同步发布 |
| **Markdown 编辑体验增强** | [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665) 改动列表 | ✅ 即将发布 |
| **Library 组织优化** | [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665) 改动列表 | ✅ 即将发布 |
| **应用内浏览器改进** | [PR #2665](https://github.com/netease-youdao/LobsterAI/pull/2665) 改动列表 | ✅ 即将发布 |
| **CI 工具链现代化** | [#2667](https://github.com/netease-youdao/LobsterAI/pull/2667) trufflehog 3.97.4、[#2666](https://github.com/netease-youdao/LobsterAI/pull/2666) actions/labeler v7 | 🔜 持续推进 |

---

## 7. 用户反馈摘要

由于 Issues 评论数据稀少，仅有 1 条 Issue 含 1 条评论，可提炼的有效反馈如下：

- **IM 模块可靠性是核心痛点**：用户 MaoQianTu 反馈 NimGateway 在弱网环境下存在静默消息丢失，且问题在生产环境难以被用户感知——这指向 IM 客户端**缺乏消息可达性反馈机制**，不仅是 Bug，更可能是设计层面的系统性问题。
- **stale 机制与社区信任**：Issue 已开 168 天但未获实质性回应，标注 `[stale]` 后仍无维护者介入，可能影响外部贡献者对项目响应速度的信心。

---

## 8. 待处理积压

> ⚠️ 以下条目已长期开放，建议维护者优先审视：

| 编号 | 类型 | 标题 | 创建时间 | 停滞天数 |
|---|---|---|---|---|
| [#1035](https://github.com/netease-youdao/LobsterAI/issues/1035) | Issue | NimGateway 重连后消息去重缓存 Bug | 2026-03-30 | **168 天** |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR | Electron group 升级 (43.5.0 → 44.3.0) | 2026-04-02 | **165 天** |
| [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) | PR (stale) | @nodesecure/js-x-ray 14.3.0 → 16.0.0 | 2026-08-10 | 36 天 |
| [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) | PR (stale) | eslint-plugin-react-hooks 5.2.0 → 7.1.1 | 2026-08-10 | 36 天 |
| [#2460](https://github.com/netease-youdao/LobsterAI/pull/2460) | PR | rimraf 5.0.10 → 6.1.3 | 2026-08-10 | 36 天 |
| [#2664](https://github.com/netease-youdao/LobsterAI/pull/2664) | PR | POPO SDK 加载竞态修复 | 2026-09-14 | 1 天 |

**关注建议**：
1. **#1035 应被提升优先级**——静默丢消息是 IM 类产品不可接受的体验问题；
2. **#1277 长期停滞的 Electron 升级**需评估被 #2665 合并后是否已过时；
3. 8 月遗留的 stale 依赖 PR 建议批量清理或重新触发 Dependabot。

---

## 📊 项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 今日 PR 总数 | 24 | 🟢 自动化活跃 |
| 人工实质 PR | 3 (#2663/#2664/#2665) | 🟡 中等 |
| 今日合并率 | 41.7% (10/24) | 🟢 良好 |
| Stale Issue 数 | 1 (#1035) | 🟡 需关注 |
| 版本发布 | 0 | ⚪ 维护日 |
| 重大升级里程碑 | OpenClaw v2026.8.1 合并 | 🟢 关键进展 |

**综合判断**：项目处于**稳定维护期 + 重大基线升级过渡期**，底层基础设施稳健推进（OpenClaw/Electron/Vite/React 全方位升级），但业务层 Bug 响应速度有改进空间。建议下一周期重点关注 IM 消息可靠性问题。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-15**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位**。过去 24 小时内无任何 Issue 新增或活跃讨论，PR 仅有 1 条待合并（#1269），无新版本发布，整体仓库呈"维护性静默"状态。唯一可见的工作流动向来自一次 CI 失败触发的测试稳定性修复，说明项目维护者仍持续关注自动化测试质量，但社区侧的互动基本停滞。

- Issue 活动：0 条（新增 0 / 活跃 0 / 关闭 0）
- PR 活动：1 条（待合并 1 / 已合并 0）
- Release：0 个
- 仓库地址：[moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 2. 版本发布

**今日无新版本发布**，本节省略。

如需了解历史版本信息，请访问仓库 [Releases 页面](https://github.com/moltis-org/moltis/releases)。

---

## 3. 项目进展

**今日无 PR 合并或关闭。**

唯一在途的 PR #1269 尚未进入合并阶段，因此项目代码层面今日**无实质性推进**。唯一可见的进展信号是：测试稳定性问题已被识别并正在被打补丁（详见第 5 节）。

🔗 [PR #1269 – test(oauth): remove success-popup timing race](https://github.com/moltis-org/moltis/pull/1269)

---

## 4. 社区热点

由于 Issues 与 PR 评论量均为 0 或未统计，今日**无社区讨论热点**。

- 热度最高的 PR：**#1269**（👍 0，评论 undefined）—— 仅为测试代码调整，不涉及公开讨论
- 无被标星、引用或加标签的活跃 Issue

社区层面今日呈"零互动"状态，可能与时区分布、周末或维护周期相关，建议观察后续 24–72 小时是否恢复常态。

---

## 5. Bug 与稳定性

### 🟡 中优先级：OAuth PKCE 测试用例竞态条件（moltis-064r）

- **触发来源**：CI 工作流 [run 32917698826 / job 98024870973](https://github.com/moltis-org/moltis/actions/runs/32917698826/jobs/98024870973) 出现失败
- **问题描述**：PKCE 成功与断开连接的测试用例依赖回调弹窗的 `page/close` 事件来判定认证状态，但该弹窗会**立即关闭**，导致测试断言在主页面尚未完成认证状态持久化前就已执行，进而产生时序竞态（timing race）
- **修复方案**：改为等待主页面"持久化的认证状态"就绪，而非监听回调弹窗的关闭事件
- **关联 PR**：[#1269](https://github.com/moltis-org/moltis/pull/1269)（状态：OPEN，未合并）
- **是否已有 fix**：✅ 是（修复 PR 已存在并待合并）
- **影响范围**：仅限自动化测试，不影响生产环境用户；但若长期未修复将持续消耗 CI 资源并降低合并信号可信度

> **注**：本节其余 Bug 类别（用户报告的崩溃 / 回归 / 安全漏洞）今日**无新增报告**。

---

## 6. 功能请求与路线图信号

今日**未观察到新的功能请求 Issue 或 RFC**。

- 无新增 feature request
- 无新增 enhancement 标签条目
- PR #1269 属于测试基础设施改进，不构成功能路线图信号

若需评估项目路线图，请参考仓库 `ROADMAP.md` 或历史 milestones（本次数据未提供）。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数与用户反馈渠道均无新增内容，**无新的用户痛点、使用场景或满意度数据可供提炼**。

- 用户主动反馈：0 条
- 维护者主动沟通：0 条
- 满意度信号：无法评估

建议关注后续是否会出现集中反馈窗口（例如新版本发布后的 24–48 小时）。

---

## 8. 待处理积压

今日待办清单较为简短，仅 1 项需关注：

| 类型 | 编号 | 标题 | 创建时间 | 状态 | 链接 |
|------|------|------|----------|------|------|
| PR | #1269 | test(oauth): remove success-popup timing race | 2026-09-15 | OPEN（待合并） | [🔗](https://github.com/moltis-org/moltis/pull/1269) |

### 给维护者的提醒
- **PR #1269** 为纯测试改进、风险低，建议在常规 PR 审查周期内优先合入，以恢复 CI 稳定性信号
- 今日**无长期搁置的 Issue**（即过去 24 小时无新开 Issue，也未发现历史未响应清单——历史积压请参考仓库完整 Issue 列表）
- 建议主动发起社区互动（如发布进度更新、征集功能投票），以避免长期"零互动"状态对贡献者士气产生负面影响

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码提交活跃度 | ⭐⭐☆☆☆ | 仅 1 条待合并 PR，无新提交 |
| Issue 响应度 | — | 无新 Issue，无法评估 |
| 社区互动度 | ⭐☆☆☆☆ | 零评论、零反应 |
| 测试/稳定性 | ⭐⭐⭐☆☆ | 已有 PR 在修复 CI 竞态，方向正确 |
| 发布节奏 | — | 今日无 Release |

**整体判断**：项目处于**维护期静默阶段**，无衰退迹象但活跃度偏低。CI 失败触发的修复说明质量门禁仍在运转，建议维护者适时同步路线图或发布计划以激活社区。

---

*报告基于 2026-09-15 当日 GitHub 数据生成，数据来源：[moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>



</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-09-15**

---

## 1. 今日速览

ZeptoClaw 项目今日活跃度处于**低水位运行状态**。过去 24 小时内仅有 1 条 Issue 被关闭、1 条 PR 被合并，且二者均围绕同一主题——修复 CI 安全审计流程的权限配置。无新版本发布，无新 Issue 开具，也无用户互动评论。整体来看，项目处于稳定的维护期，无重大功能迭代信号，社区互动冷清。

---

## 2. 版本发布

今日无新版本发布，本节略。

---

## 3. 项目进展

### ✅ PR #677 已合并：`fix(ci): allow rustsec audit check reporting`
- **链接**：[qhkm/zeptoclaw#677](https://github.com/qhkm/zeptoclaw/pull/677)
- **作者**：qhkm（项目维护者本人提交）
- **核心变更**：在 Security Audit 任务中显式授予 `checks: write` 权限，使 `rustsec/audit-check` action 能够成功上报检查结果，同时将权限范围限定为该 Job 所需的最小集（`contents: read` + `checks: write`）。
- **意义**：这是一次典型的**安全加固与权限最小化实践**改进。此前 push 触发时审计虽能通过，但因缺少 check 写入权限导致 action 报错，既影响了 CI 状态的准确性，也增加了误判风险。修复后 CI 信号将更加可靠。

📌 **评价**：项目向前小幅迈进了一步，主要体现在工程质量与 CI 可观测性层面，未涉及功能层面的推进。

---

## 4. 社区热点

今日无高互动 Issue 或 PR。所有跟踪项的评论数均为 0，反映出：

- **社区参与度极低**：未出现用户提问、bug 报告或功能讨论；
- **热度信号缺失**：无 👍 反应、无讨论链，难以捕捉社区真实诉求；
- **维护者主导**：今日所有变更均由仓库所有者 qhkm 自行提交并关闭，呈现典型的"单人维护"模式。

---

## 5. Bug 与稳定性

| 编号 | 严重程度 | 描述 | 是否有 Fix PR | 状态 |
|------|---------|------|--------------|------|
| [#676](https://github.com/qhkm/zeptoclaw/issues/676) | P2-high | CI 中 Security Audit 任务因缺少 `checks: write` 权限导致 `rustsec/audit-check` 无法创建 check run | ✅ 是（[#677](https://github.com/qhkm/zeptoclaw/pull/677)） | 已关闭 |

📌 **分析**：该问题属于**基础设施层缺陷**，非运行时崩溃或业务逻辑 bug。它不会影响最终用户使用，但会影响项目维护者对安全审计结果的判断。鉴于 PR 与 Issue 均已同日关闭，**该 Bug 已完整闭环**，无需后续跟进。

---

## 6. 功能请求与路线图信号

今日**未观察到任何新功能请求**。在仅有的 1 条已关闭 Issue 中，主题为 CI 工程化改进（chore），不涉及面向用户的新能力扩展。

🔍 **路线图推测**：
- 短期内未见用户驱动的新功能方向；
- 维护者的注意力集中在 **CI/CD 安全与可观测性** 优化上，符合"基础设施先行"的成熟项目治理节奏；
- 建议关注：若长期保持低 Issue 流量，可能预示项目进入维护期或用户基数有限，需结合 Star/Fork 趋势进一步判断。

---

## 7. 用户反馈摘要

今日 Issue 与 PR 均**无用户评论**，无法提取真实用户痛点、使用场景或满意度信号。

仅有的 Issue 描述来自维护者本人，内容为技术性报错日志，未涉及终端用户体验反馈。

---

## 8. 待处理积压

⚠️ **提醒**：

- 当前**待合并 PR 数量为 0**，**活跃 Issue 数量为 0**，积压队列为空；
- 但这一"零积压"状态是**由低活跃度导致**，而非高效处理导致。建议维护者关注：
  - 是否存在被自动关闭的 stale Issue/PR 未被正确处理；
  - 是否需要主动在社区（Discord、Twitter、邮件列表）发起讨论以激活贡献；
  - 项目 README 与贡献指南是否需要更新以降低新贡献者门槛。

---

## 📊 项目健康度小结

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐ | 仅 1 次 CI 修复，无功能变更 |
| 社区互动 | ⭐ | 完全无用户评论与新 Issue |
| 响应及时性 | ⭐⭐⭐⭐ | Issue-PR 同日闭环，处理高效 |
| 安全态势 | ⭐⭐⭐⭐ | 主动加固 CI 权限，体现安全意识 |
| 路线可见性 | ⭐⭐ | 无公开 roadmap 与功能预告 |

**总体判断**：项目处于**稳定但沉寂**的维护阶段，工程治理水准良好，但社区活力不足，建议维护者考虑适度的社区激活举措。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-09-15**

---

## 1. 今日速览

ZeroClaw 仓库过去 24 小时维持高强度开发节奏：22 条 Issue 动态中 11 条关闭、11 条新增/活跃，50 条 PR 更新中有 12 条合入或关闭、38 条仍待评审，活跃度处于近月峰值。讨论焦点明显集中在 **RFC 治理（#10549、#10366）**、**多模态/图像处理边界（#10603、#10588、#10854、#10857）** 与 **Telegram / ZeroCode 渠道稳定性（#10625、#10842、#10863、#10796）** 三大方向。安全侧持续推进 #8289 阶段化工作（PR #10259、#10255），ZeroCode 与 Desktop 也在多处补齐加固。无新版本发布，社区进入密集合入期。

---

## 2. 版本发布

**无新版本发布。** 24 小时内无 Release 标签变更，项目仍处于 v0.8.5 周度稳定线（追踪见 [#9459](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)）的中后期阶段。

---

## 3. 项目进展

今日可识别的合入/关闭动作集中在缺陷修复与小型文档/本地化任务，共 12 条 PR 收尾、11 条 Issue 关闭：

**已关闭的关键 Issue（节选）：**

- **[#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) 修复**：`x-opencode-session` 头从未随 OpenCode 中继请求发送，导致 Go 系列模型可能被打账号风险（3 👍，优先级 P1，标记为域安全）。其修复 PR [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604) 的三项跟进工作已沉淀为新 Issue [#10853](https://github.com/zeroclaw-labs/zeroclaw/issues/10853) 与 PR [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864)（OpenCode 会话头跟进）。
- **[#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 关闭**：默认配对码从 6 位数字提升至 32 字符（数字 + 大小写字母），长期 P1 安全诉求落地。
- **[#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) 关闭**：新增日志 sink 在并行 runner 下与迁移测试争锁的回归。
- **[#10588](https://github.com/zeroclaw-labs/zeroclaw/issues/10588) 关闭**：默认 `multimodal.max_image_size_mb` 从 5 提升到 20（即原夹紧上限），并补充文档说明。
- **[#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) 关闭**：守护进程监督器丢弃 `anyhow` 底层 error chain 的可观测性缺陷。
- **[#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794) 关闭**：`Advisory Windows nextest` 任务的发布契约测试失败。
- **[#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087) 关闭**：`memory-postgres` 测试进入必需 CI 流程。
- **[#10789](https://github.com/zeroclaw-labs/zeroclaw/issues/10789)、[#10792](https://github.com/zeroclaw-labs/zeroclaw/issues/10792)**：ZeroCode 守护进程诊断信息的本地化与 Windows 守护进程热重载失败后的恢复文档分平台修正。
- **[#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) 关闭**：AnySearch 作为内置 `web_search_tool` provider 的提案（社区贡献通道有响应，但暂未合并）。
- **[#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796) 关闭**：ZeroCode 聊天输入忽略 Del 键（good first issue）。

**整体推进评估：** 在安全加固（pairing 强度、RPC 鉴权阶段 3/5、OIDC）、多模态、CI 覆盖度与本地化四条线上均有可验证进展。社区治理流程（RFC）讨论也在持续收敛。

---

## 4. 社区热点

**评论最多 / 互动最高的条目：**

| 排名 | 条目 | 评论 | 👍 | 摘要 |
|---|---|---|---|---|
| 1 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) RFC: 简化 RFC 投票流程 | 10 | 0 | 提议移除强制讨论窗口期（48h/72h）并让 REVISE 直接停止当前快照 |
| 2 | [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) RFC: PR 评审证据 / 时效警告 / 作者边界 | 8 | 0 | 已迭代至 v2，新增"快速合并通道"路径 |
| 3 | [#6613](https://github.com/zeroclaw-labs/zeroclaw/issues/6613) 配对码强度 | 3 | 0 | 关闭但有持续讨论 |
| 4 | [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585) 日志 sink 回归 | 3 | 0 | CI 抖动问题 |
| 5 | [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) OpenCode 缺 `x-opencode-session` 头 | 3 | **3** | 账号安全风险，受关注度最高 |

**诉求解读：**

- 维护者 **Audacity88** 在两条 RFC（#10549、#10366）上持续推动流程精简与可执行边界，被社区视为"治理侧主推手"，单作者占据两条高热度 Issue 的头条。
- `#10603` 凭 3 个 👍 成为今日"反应最多"条目，体现社区对账号/会话亲和性安全的高度敏感。
- `#10549` 的高评论量（10 条）反映出贡献者对讨论窗口期"形式大于实质"的不满，是项目治理走向成熟的重要信号。

---

## 5. Bug 与稳定性

**S1 - 阻塞工作流（4 条，均与图像/会话/模型边界相关）：**

| Issue | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#10603](https://github.com/zeroclaw-labs/zeroclaw/issues/10603) | OpenCode 不发送 `x-opencode-session`，导致 Go 模型失败 | 已关闭 | ✅ [#10604](https://github.com/zeroclaw-labs/zeroclaw/pull/10604)（跟进见 [#10864](https://github.com/zeroclaw-labs/zeroclaw/pull/10864)） |
| [#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863) | Telegram 对被拒语音更新无限重试，阻塞后续消息 | OPEN | PR #10640 评审中 |
| [#10857](https://github.com/zeroclaw-labs/zeroclaw/issues/10857) | ZeroCode 把图片附加到无视觉能力的模型会话，被 provider 400 拒绝 | OPEN | 未见对应 fix |
| [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) | 工具输出里的字面 `[IMAGE:...]` 被无脑提升为畸形 provider 图像 | OPEN | 未见对应 fix |

**S2 - 行为降级：**

- [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)：Matrix 渠道下，非视觉模型会话上下文出现字面 `[media attachment]` 占位符（OPEN，无 fix PR）。
- [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232)：守护进程诊断丢弃 error chain（**已关闭**）。

**S3 - 轻微问题：**

- [#10585](https://github.com/zeroclaw-labs/zeroclaw/issues/10585)（已关）、[#10794](https://github.com/zeroclaw-labs/zeroclaw/issues/10794)（已关）、[#10796](https://github.com/zeroclaw-labs/zeroclaw/issues/10796)（已关）、[#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842) Telegram 反应工具静默 no-op（OPEN）。

**风险聚类：** 24 小时内 4 条 P1 中有 3 条都与"图像/会话/模型能力不匹配"有关，强烈暗示 ZeroCode 与多模态入口需要一次系统性的能力校验重构；已有 PR [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819)（像素级图像校验，XL，未合）正是该方向的候选答案。

---

## 6. 功能请求与路线图信号

**通道扩展方向：**

- **[#9814](https://github.com/zeroclaw-labs/zeroclaw/issues/9814) 原生 XMPP / Prosody 通道**（OPEN）：与现有 Matrix/Telegram/Discord 平行，便于家庭实验室与低资源自托管部署。暂无 PR。
- **[#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) Mattermost 审批提示**（OPEN, XL）：补齐 Mattermost 当前 "任何请求都拒绝" 的缺陷。
- **[#9772](https://github.com/zeroclaw-labs/zeroclaw/pull/9772) Telegram 群聊 `per_user_session` 切换**（OPEN, XL）：解决群聊/论坛主题中多人协作共享会话的诉求。
- **[#9971](https://github.com/zeroclaw-labs/zeroclaw/pull/9971) Discord 角色授权**（OPEN, L）：从"仅按 user id"升级为"按角色"。

**Provider 与运行时：**

- **[#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) Provider 多模型支持**（OPEN, XL）：`[providers.models.<family>.<alias>.models.<model_alias>]` 子表，一套凭据承载多模型。
- **[#9997](https://github.com/zeroclaw-labs/zeroclaw/pull/9997) Telegram 安全模型选择器**（OPEN, XL）。
- **[#10255](https://github.com/zeroclaw-labs/zeroclaw/pull/10255) OIDC token-verification provider**（#8289 阶段 5，OPEN, XL）。
- **[#10621](https://github.com/zeroclaw-labs/zeroclaw/pull/10621) 代理生命周期变更协调**（OPEN, XL）：把 daemon RPC、gateway、channel、ACP、CLI 的配置推进纳入单一权威。
- **[#10336](https://github.com/zeroclaw-labs/zeroclaw/issues/10336) AnySearch 作为内置 web 搜索 provider**（已关闭，建议作为提案保留，未来或重启）。

**文档与开发者体验：**

- **[#10840](https://github.com/zeroclaw-labs/zeroclaw/pull/10840) `llms.txt` / `llms-full.txt` 生成**（OPEN, L）：mdBook 构建中输出 LLM 友好的页面索引。
- **[#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638) `zeroclaw acp --agent <alias>`**（OPEN, S）：ACP 启动器可选择默认代理。

**最有可能进入下一版本的 PR：** #10259（RPC 鉴权阶段 3）、#10255（OIDC 阶段 5）、#10236（Desktop 受限日志）、#9819（像素级图像校验）—— 都已 "distinguished/principal contributor" 标签背书且对应 RFC 已 accepted。

---

## 7. 用户反馈摘要

**痛点：**

- **多模态边界混乱**：3 条 P1 集中反映"模型能力 ↔ 附件/历史标记"的边界校验缺失，社区用户对"明明是文本模型却收到图片或被 400"感到困惑（[#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854)、[#10857](https://github.com/zeroclaw-labs/zeroclaw/issues/10857)、[#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625)）。
- **Telegram 渠道不完整**：[#10842](https://github.com/zeroclaw-labs/zeroclaw/issues/10842)（reaction 静默成功）、[#10863](https://github.com/zeroclaw-labs/zeroclaw/issues/10863)（被拒语音无限重试导致后续消息卡死，RO-mix 在 PR #10640 报告了生产事件）—— 用户

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*