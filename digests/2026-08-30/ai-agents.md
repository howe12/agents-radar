# OpenClaw 生态日报 2026-08-30

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-30 03:00 UTC

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

**报告日期**：2026-08-30
**数据来源**：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高活跃度、高负载**态势：过去 24 小时内共更新 500 条 Issues 与 500 条 PRs，但合并/关闭率分别仅约 17%（85/500）和 33.8%（169/500），大量 P1/P0 关键缺陷仍处于"无修复 PR"挂起状态（`clawsweeper:no-new-fix-pr`）。当日无新版本发布，但有两个**版本候选**正在积极推进：正式线 `2026.9.1-beta.1`（PR #130731）与扩展稳定线 `2026.7.33`（PR #133000）。整体来看，项目处于"密集修 bug + 多线发版准备"阶段，**健康度偏紧**：核心问题集中在网关内存、消息丢失、Agent 子任务投递与多通道（Telegram/Slack/WhatsApp/Discord）可靠性，需要维护者重点关注积压。

---

## 2. 版本发布

**今日无新版本正式发布**。但有两个重要的**版本分支候选**已提交：

| 分支 | PR | 备注 |
|---|---|---|
| `2026.9.1-beta.1` | [#130731](https://github.com/openclaw/openclaw/pull/130731) | 正式 beta 线，授权候选 SHA `94e637a`，exact-head CI 已绿 |
| `extended-stable 2026.7.33` | [#133000](https://github.com/openclaw/openclaw/pull/133000) | 从 `v2026.7.1-2` 拉出的扩展稳定线，盘点自扫描游标以来 19,153 个非等价提交 |

⚠️ 由于今日发布的多个 Issue（如 #124788、#125333、#132109、#132762）均与 beta 版本中的稳定性回归直接相关，**建议在合并正式版前优先验证这些修复已 backport**。

---

## 3. 项目进展

### 已关闭/合并的关键 PR

| PR | 标题 | 影响领域 |
|---|---|---|
| [#132487](https://github.com/openclaw/openclaw/pull/132487) | fix(xai): canonicalize OAuth model during setup verification | xAI OAuth 接入修复，解决 `xai/auto` 模型校验提前触发 404 的问题 |
| [#124517](https://github.com/openclaw/openclaw/pull/124517) | fix(line): a reply is lost or duplicated when a crash interrupts its delivery | LINE 通道投递原子性，关闭 #86012 |
| [#131682](https://github.com/openclaw/openclaw/pull/131682) | refactor(macos): keep signer-only fixtures with signing tests | macOS 签名测试基础设施清理 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | Web UI 会话操作补全（pin/未读/图标/移动） |
| [#132081](https://github.com/openclaw/openclaw/pull/132081) | Cron `failureAlert` send is fire-and-forget | Cron 失败告警持久化修复，关闭 #131847 |

### 已关闭的关键 Issue（说明问题已被解决或分流）

- [#112196](https://github.com/openclaw/openclaw/issues/112196) memory_search: transient sync timeout masks as persistent provider failure（已有关联 PR 打开）
- [#124788](https://github.com/openclaw/openclaw/issues/124788) beta.2 gateway event loop blocks ~100s every ~10 min（P0 已关闭 ✅）
- [#132109](https://github.com/openclaw/openclaw/issues/132109) Telegram 无限重试循环（已关闭）
- [#80498](https://github.com/openclaw/openclaw/issues/80498) Subagent completion announcements premature/duplicated

### 推进中的重要 PR（待合并）

- [#112811](https://github.com/openclaw/openclaw/pull/112811) **feat(msteams): support multiple bot accounts**（XL，关联 #71058）：让单网关支持多 Teams bot 身份
- [#125130](https://github.com/openclaw/openclaw/pull/125130) **fix(agents): warn when fallback recovers subagent delivery**：子任务兜底路径可观测性
- [#128512](https://github.com/openclaw/openclaw/pull/128512) **fix(agents): surface failed subagent completion notices**：子任务失败直接通告路径修复
- [#101665](https://github.com/openclaw/openclaw/pull/101665) feat: let plugin tools yield turns（plugin 工具可让出 turn）
- [#131604](https://github.com/openclaw/openclaw/pull/131604) fix(memory): atomic append on sandbox bridge（并发内存刷新数据丢失）
- [#132374](https://github.com/openclaw/openclaw/pull/132374) fix(cloud): bind computer control to session desktops
- [#128001](https://github.com/openclaw/openclaw/pull/128001) fix(agents): propagate requester abort to ACP spawn

**总体评估**：今日推进的功能集中在**多账户/多通道**（Teams 多 bot、Cloud 桌面控制）、**子任务可观测性**与**插件工具让出 turn** 的能力扩展，标志着 OpenClaw 向多租户、多 Agent 协同方向演进。

---

## 4. 社区热点（评论/反应最多）

| 排名 | Issue | 💬 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | 22 | 1 | **Gateway 内存泄漏 350MB → 15.5GB**，反复 OOM |
| 2 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | WhatsApp 1:1 入站图片卡死主 lane 约 3 分钟 |
| 3 | [#121953](https://github.com/openclaw/openclaw/issues/121953) | 13 | 0 | DeepSeek Cron 调度被 `[cron:` 前缀降权 |
| 4 | [#74586](https://github.com/openclaw/openclaw/issues/74586) | 13 | 3 | active-memory memory_search 被误判为 timeout |
| 5 | [#84516](https://github.com/openclaw/openclaw/issues/84516) | 12 | 2 | Codex 长回复在 1000-1100 字符静默截断 |
| 6 | [#39476](https://github.com/openclaw/openclaw/issues/39476) | 12 | 0 | A2A sessions_send 双向调用导致消息重复 |
| 7 | [#6599](https://github.com/openclaw/openclaw/issues/6599) | 11 | 1 | /models test-fallback 命令（长尾 P3） |
| 8 | [#112196](https://github.com/openclaw/openclaw/issues/112196) | 10 | 0 | memory_search 同步超时伪装为 provider 失败（已关） |

**热点诉求分析**：
- **运行期稳定性**压倒一切：内存泄漏、event loop 阻塞、误超时判定的"假性故障"占据前 5 中 4 席。
- **多通道可靠性**：WhatsApp、Slack、Telegram、Discord、Feishu 五大通道各有 P1 缺陷，社区对**消息丢失零容忍**。
- **AI Provider 兼容性**：DeepSeek、Codex、Antigravity 三家供应商都有专门的边缘案例，反映 OpenClaw 正快速接入多家模型，配套的契约测试与降级策略跟不上。
- **运维可观测性诉求上升**：`#6599`（fallback 测试命令）、`#87441`（诊断阈值参数接线）、`#44502`（Discord preflight）等都指向"先于故障发生"的能力。

---

## 5. Bug 与稳定性

### 🔴 P0（数据丢失 / 崩溃循环）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#124788](https://github.com/openclaw/openclaw/issues/124788) | beta.2 gateway event loop blocks ~100s every ~10 min | ✅ 已关闭 | — |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens inflation on 2026.8.1-beta.2（#123065 修复仅覆盖 `api === "cli"`） | OPEN |  无新 fix PR |
| [#115286](https://github.com/openclaw/openclaw/pull/115286) | config 拒绝 `agents.defaults.mediaLocalRoots`（出站本地媒体） | OPEN PR | ✅ 已开（PR #115286） |

### 🟠 P1（影响会话状态 / 消息丢失 / 崩溃循环）

| Issue | 标题 | 标签 | Fix PR |
|---|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏 OOM | diamond lobster | ❌ 无新 fix PR |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 图片 wedge 主 lane | platinum hermit | ❌ 无新 fix PR |
| [#121953](https://github.com/openclaw/openclaw/issues/121953) | DeepSeek Cron 降权 | platinum hermit | ❌ 无新 fix PR |
| [#84516](https://github.com/openclaw/openclaw/issues/84516) | Codex 长回复静默截断 | silver shellfish | ❌ 无新 fix PR |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send 重复消息 | diamond lobster | ✅ linked-pr-open |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | overflow retry 成功但未投递 | diamond lobster |  无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 僵尸子进程泄漏 | gold shrimp |  无 |
| [#86214](https://github.com/openclaw/openclaw/issues/86214) | Codex client 在大 logs_2.sqlite 下中途关闭 | silver shellfish | ❌ 无 |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack thread 回复丢失 | diamond lobster | ✅ linked-pr-open |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | 大附件栈溢出 | diamond lobster | ✅ linked-pr-open |
| [#91144](https://github.com/openclaw/openclaw/issues/91144) | Windows Scheduled Task 不保持运行 | diamond lobster | ✅ linked-pr-open |
| [#131150](https://github.com/openclaw/openclaw/issues/131150) | Slack DM 多账户重启后静默丢弃 | diamond lobster | ✅ linked-pr-open |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | context-overflow 估算器 2.3-2.6x 偏差 | diamond lobster |  无 |
| [#78055](https://github.com/openclaw/openclaw/issues/78055) | 子代理 announce 陈旧输出 | diamond lobster | ❌ 无 |
| [#120162](https://github.com/openclaw/openclaw/issues/120162) | safeguard 质量守卫审计共享超时 | diamond lobster | ❌ 无 |
| [#119884](https://github.com/openclaw/openclaw/issues/119884) | DB 迁移未 ANALYZE → 计划器陈旧 | platinum hermit | ❌ 无 |
| [#131807](https://github.com/openclaw/openclaw/issues/131807) | 系统代理共享同一 Codex session key | diamond lobster | ❌ 无 |
| [#131850](https://github.com/openclaw/openclaw/issues/131490) | heartbeat restart-sentinel 不被 admit | — | ✅ PR #131956 |
| [#131847](https://github.com/openclaw/openclaw/issues/131847) | Cron failureAlert 静默失败 | — | ✅ PR #132081 |
| [#86012](https://github.com/openclaw/openclaw/issues/86012) | LINE 回复丢/重复 | — | ✅ PR #124517 |
| [#47002](https://github.com/openclaw/openclaw/issues/47002) | mediaLocalRoots 配置拒绝 | — | ✅ PR #115286 |

### 🟡 P2（影响 UX / 数据完整性）

- [#50490](https://github.com/openclaw/openclaw/issues/50490) 飞书群聊 `/activation mention` 切换无效（回归）
- [#44502](https://github.com/openclaw/openclaw/issues/44502) Discord 路由/mention 闸门回归
- [#102534](https://github.com/openclaw/openclaw/issues/102534) Cron 调度器永久停止触发
- [#102755](https://github.com/openclaw/openclaw/issues/102755) Windows/WSL 二次构建挂起（beta 阻断）
- [#69242](https://github.com/openclaw/openclaw/issues/69242) Linux exec 工具 SIGKILL 宽搜索命令
- [#120735](https://github.com/openclaw/openclaw/issues/120735) Telegram sticker 不可读

**关键观察**：今日 P0/P1 列表中，**只有约 30% 已有对应 fix PR**（很多是 `linked-pr-open` 状态），其余仍需维护者主动挑选或社区贡献者认领。

---

## 6. 功能请求与路线图信号

### 高可能性（已有对应 PR 或修复就绪）

| 功能 | Issue | 关联 PR | 评估 |
|---|---|---|---|
| 多 Teams bot 账户 | [#71058](https://github.com/openclaw/openclaw/issues/71058) | [#112811](https://github.com/openclaw/openclaw/pull/112811) | ✅ 极可能并入 2026.9.1 |
| `/models test-fallback` | [#6599](https://github.com/openclaw/openclaw/issues/6599) | — | 中等，运维友好 |
| Discord `messageUpdate`/`messageDelete` | [#53654](https://github.com/openclaw/openclaw/issues/53654) | — | 中等，需要 gateway 协议扩展 |
| i18n slash 命令描述 | [#79458](https://github.com/openclaw/openclaw/issues/79458) | — | 低概率（依赖平台限制） |
| 每日消费预算（agent 成本治理） | [#121729](https://github.com/openclaw/openclaw/issues/121729) | — | 高价值、需产品决策 |

### 长尾信号

- **测试基础设施**：[#80176](https://github.com/openclaw/openclaw/issues/80176) Codex×Pi parity Phase 5 JSONL session-replay harness —— 是项目走向 CI-可验证跨 runtime 一致性的关键投资
- **Kubernetes 文档**：[#91455](https://github.com/openclaw/openclaw/issues/91455) 反映社区在生产化部署需求
- **无障碍**：[#82450](https://github.com/openclaw/openclaw/issues/82450) 盲人用户线性持久工作区模式 —— 情感化产品亮点

---

## 7. 用户反馈摘要

> 提炼自 Issues 评论区的真实使用场景与情绪。

**🔴 痛点（高频出现）**：

1. **"beta 版本反而比 stable 差"** —— 多位用户反馈升级到 2026.8.1-beta.2/beta.3 后出现新

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析报告

**报告日期**：2026-08-30
**覆盖项目**：13 个（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）
**分析维度**：活跃度、技术路线、社区成熟度、生态定位

---

## 1. 生态全景

2026 年 8 月底的个人 AI 助手/自主智能体开源生态呈现**"高度分化的双速结构"**：头部项目（OpenClaw、ZeroClaw、NanoClaw、Hermes Agent）保持极高代码吞吐（单日 PR 流量 45–500 条），围绕多通道网关、子代理编排、内存压缩、安全沙箱四大主题深度竞争；而中尾部项目（NullClaw、TinyClaw、ZeptoClaw、Moltis、LobsterAI）出现显著停滞或静默维护，PR 平均合并周期超过 5 个月。无新版本发布是本日**全行业现象**，反映出团队普遍进入"密集修 bug + 多线发版准备"的过渡期。跨项目共同浮现的技术焦虑集中在三点：**长会话上下文管理成本失控**、**多 Provider 协议对齐**、**通道可靠性的零容忍诉求**，这是当前生态最显著的三条产业信号线。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 当日合并/关闭率 | Release | 健康度 | 关键特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | Issue 17% / PR 33.8% | ❌（2 个 RC 候选） | 🟡 偏紧 | 旗舰级吞吐，P0/P1 修复率仅约 30% |
| **ZeroClaw** | 18 | 50 | Issue 22% / PR 4% | ❌（v0.8.5 收尾中） | 🟡 重维护日 | 评审积压显著，安全加固密集 |
| **NanoClaw** | 5 | 45 | PR 67% | ❌ | 🟢 4/5 | 工程治理高效，回归响应快 |
| **Hermes Agent** | 50 | 50 | Issue 44% / PR 38% | ❌ | 🟢 活跃迭代 | 双向吞吐均衡，Issue ↔ PR 配对 14% |
| **NanoBot** | 2 | 14 | PR 36% | ❌ | 🟢 良好 | report→patch 循环紧密 |
| **IronClaw** | 3 | 8 | Issue 33% / PR 12.5% | ❌ | 🟡 中等 | 架构级 PR 居多（XL/M 级别） |
| **CoPaw** | 10 | 7 | Issue 20% / **PR 0%** | ❌ | 🟡 黄色预警 | 代码合流停滞 |
| **PicoClaw** | 1 | 3 | PR 0%（2 条 stale 关闭） | ❌ | 🔴 需关注 | 关键 fix PR 被 stale 误关 |
| **Moltis** | 1 | 0 | — | ❌ | 🔴 静默期 | 仅 1 条孤立 Bug，无响应 |
| **LobsterAI** | 0 | 0 | — | ❌ | 🔴 停滞 | 全部 PR 积压 5 个月+ |
| **NullClaw** | 0 | 0 | — | — | ⚪ 沉睡 | 无活动 |
| **TinyClaw** | 0 | 0 | — | — | ⚪ 沉睡 | 无活动 |
| **ZeptoClaw** | 0 | 0 | — | — | ⚪ 沉睡 | 无活动 |

**关键观察**：活跃度呈明显梯队化——第一梯队（>40 PR/日）由 OpenClaw、ZeroClaw、NanoClaw、Hermes Agent 占据；第二梯队（5–15 PR/日）为 IronClaw、NanoBot、CoPaw；第三梯队以下多为维护停滞或沉睡状态。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模优势

OpenClaw 单日 **1000 条 Issue+PR** 的吞吐是次活跃项目（ZeroClaw、Hermes Agent）的 **10–20 倍**，是 NanoBot 的 **70 倍以上**。这一规模本身即形成生态位壁垒：高频次的实战场景产生更多边缘案例，进而反向驱动修复与功能迭代。

### 3.2 与同类项目的关键差异

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | NanoClaw |
|---|---|---|---|---|
| **核心定位** | 通用多通道网关 + Agent 平台 | 安全加固型代理运行时 | Nous Research 模型友好型 Agent | 工程纪律驱动的轻量网关 |
| **集成广度** | 7+ 通道（Slack/TG/WA/DC/Feishu/LINE/Teams） | 多协议 worker（A2A/Mesh） | 多 Provider + i18n | 主聚焦 Slack + Signal |
| **安全姿态** | 修补型（被动响应 Bug） | 设计型（Sandbox RFC #6996） | Ledger 守卫型（skill_ledger/curator） | 路径权限型 |
| **架构演进重点** | 多租户、多 Agent 协同 | 沙箱/A2A 互操作 | TUI/桌面健壮性 | CI 标签自动化 |
| **社区体量** | 旗舰级 | 中等 | 中等 | 中等 |
| **代码合并效率** | 低（17%/33.8%） | 极低（4%） | 中（38%） | 高（67%） |

### 3.3 OpenClaw 的差异化竞争力

1. **多通道矩阵最完整**：Telegram、Slack、WhatsApp、Discord、Feishu、LINE、Teams 全覆盖，社区已形成"消息丢失零容忍"的高压质量预期。
2. **多 Provider 适配最激进**：xAI、OpenAI Codex、Anthropic、Gemini、DeepSeek 等多模型并行接入，但伴随而来的是**契约测试与降级策略跟不上**（见 #125333 totalTokens 通胀、#84516 Codex 静默截断等）。
3. **多 Agent 子任务模型最成熟**：#128512、#125130、#128001、#80498 围绕 subagent delivery 构成完整可观测性矩阵。
4. **云桌面绑定能力前沿**（#132374）：computer control to session desktops 是其他项目尚未触及的能力。

**但其代价是健康度压力**：P0/P1 中仅 30% 有 fix PR，event loop 阻塞、内存泄漏等基础设施类缺陷（#91588、#124788）仍是长期债。

---

## 4. 共同关注的技术方向

以下需求在 **3 个及以上项目**中同步浮现，代表生态级共识方向：

### 4.1 🧠 长会话上下文管理（共识度：最高）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | #101929 context-overflow 估算器偏差 2.3-2.6x；subagent announce 陈旧（#78055） |
| **IronClaw** | #7824 PinchBench 实测：token 55.1M → 227.7M、成本 $2.52 → $10.31、准确率反降 6% |
| **NanoBot** | #5568 把 context compaction 从 Provider 上移到 AgentRunner |
| **ZeroClaw** | #8891 Persistent memory parity tracker（7 个未结项） |
| **NanoClaw** | #3364 Context.dev MCP 集成 |

**共同诉求**：从"塞入全部历史"转向"压缩屏障 + 结构化摘要 + 溢出恢复"。**这是当前生态最具共识的技术拐点**。

### 4.2 🔐 沙箱与安全加固（共识度：高）

| 项目 | 具体诉求 |
|---|---|
| **NanoBot** | #5536 受限 Shell 缺沙箱时 fail-closed（**P1 安全**，5 天待审） |
| **ZeroClaw** | #6996 RFC Granular sandbox policy（**16 评论，全榜最高**）；#9678 Git shell policy XL |
| **Hermes Agent** | #97045 curator 拒绝无 ledger 写入；#98300 0-byte state.db 检测 |
| **OpenClaw** | #128995/多个 P1 涉及 sandbox/memory 原子性 |
| **PicoClaw** | #3337 MCP 失败挂起 Agent（修复被 stale 误关） |

**共同诉求**：从"应用层路径校验"走向"OS 级沙箱（Landlock/Seatbelt/Bubblewrap）+ 应用层 fail-closed"双层策略统一。

### 4.3 🌐 多 Provider / 多通道协议对齐（共识度：高）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | xAI、Codex、DeepSeek、Antigravity 各自边缘 case；#132487 OAuth 规范化 |
| **NanoBot** | #5596 OAuth model catalog 在线发现（已合并） |
| **NanoClaw** | #3664 install-wide default model + fast serving tier |
| **Hermes Agent** | #54922 custom_providers[].extra_body 隐式丢弃 |
| **ZeroClaw** | #3566 A2A 协议互操作（**全生态 7 👍 最高**） |

**共同诉求**：模型发现从静态枚举 → 在线 catalog；A2A 协议作为跨项目互操作基础的事实标准正在形成。

### 4.4 📊 可观测性与成本治理（共识度：中高）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | #6599 /models test-fallback；#87441 诊断阈值参数化 |
| **ZeroClaw** | #8539 AgentEnd 缺 cost_usd 字段（1 个月未修）；#7961 租户作用域 BI 遥测 |
| **NanoClaw** | #3664 快速服务层级 |
| **CoPaw** | #121729 每日消费预算（agent 成本治理） |
| **Hermes Agent** | #96391 cron 用量审计；#41909 CLI 状态栏自定义字段 |

**共同诉求**：从"日志输出"走向"成本可见 + 健康检查 + SLA 化响应"。

### 4.5 🧩 子代理与生命周期可扩展性（共识度：中高）

| 项目 | 具体诉求 |
|---|---|
| **OpenClaw** | 多条 subagent delivery PR（#128512、#125130、#128001） |
| **IronClaw** | #7770 Lifecycle hooks epic（after-turn/before-turn/compaction/tool-result） |
| **Hermes Agent** | #98299 /goal 持久化；#98106 detached turns 通过重连 |

**共同诉求**：从"单 Agent 循环"走向"可注册的钩子体系 + 多 Agent 联邦"。

### 4.6 🌍 国际化与可访问性（共识度：中）

- **Hermes Agent**：#92336/#92192/#93632 印尼语本地化闭环
- **OpenClaw**：#79458 i18n slash 命令描述
- **PicoClaw**：#3348 Czech 代码包裹标签
- **NanoBot**：#5602 WebUI 完播提示音（听觉通道补全）

**共同诉求**：从"英文优先"走向"多语言 + 多感官通道"的产品化成熟。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能多通道 Agent 网关 | 企业级、平台运营者 | 多通道矩阵 + 多 Provider + 多 Agent 子任务 |
| **ZeroClaw** | 安全加固 + 边缘 Mesh | 安全敏感型 DevOps | Sandboxed worker（A2A/Webhook/MCP）联邦 |
| **NanoClaw** | 工程治理 + 通道可靠性 | 严肃开发者、CI 集成者 | PR 模板 v2 + 16 类标签自动分类 |
| **Hermes Agent** | Nous Research 模型最佳实践 + i18n | 研究型用户、跨国团队 | Hermes 模型适配 + 桌面/CLI 双端 |
| **NanoBot** | 紧凑 + 学术安全标准 | 学术圈、个人开发者 | Fail-closed sandbox + OAuth 模型发现 |
| **IronClaw** | Hook 体系 + 成本/上下文治理 | NearAI 生态、平台架构师 | Lifecycle hooks + PinchBench 驱动迭代 |
| **CoPaw** | 多租户 Hub（v2.2.0 路线） | 团队/B 端用户 | AgentScope 后端 + 多用户 admin-managed skills |
| **LobsterAI** | 多 Agent UX 与团队配置 | 中文团队、企业内部 | 网易有道背景，桌面端优先 |
| **PicoClaw** | 轻量级 Telegram/MCP 集成 | 极简主义者、边缘部署 | sipeed 嵌入式基因，单文件/小 footprint |
| **Moltis** | 沙箱 + 多节点 | 隐私敏感用户 | 沙箱隔离优先，但当前静默 |

**架构分化最显著的三条分叉线**：
1. **单主机紧凑型**（PicoClaw、NanoBot）vs **多 Agent 联邦型**（OpenClaw、ZeroClaw、CoPaw）
2. **应用层安全型**（Hermes Agent ledger、CoPaw skill gates）vs **OS 级沙箱型**（ZeroClaw Landlock、IronClaw）
3. **Provider 中心型**（NanoBot online catalog、OpenClaw 多 Provider）vs **自有模型优化型**（Hermes Agent Nous 适配）

---

## 6. 社区热度与成熟度分层

### 🚀 第一梯队：快速迭代阶段（Hyper-growth）
- **OpenClaw**：500+500 日吞吐，2 个版本分支并行，特点是"高负载高产出"
- **ZeroClaw**：50 PR/日但

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报｜2026-08-30

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 数据（采样周期：2026-08-29 ~ 2026-08-30）

---

## 1. 今日速览

NanoBot 今日保持中高度活跃的开发节奏：过去 24 小时内仓库共发生 **2 条 Issue 更新**（均为新开，无关闭）与 **14 条 PR 更新**（9 条仍待合并，5 条已合并/关闭），未见新版本发布。提交集中在 **WebUI 体验打磨、Agent 稳定性修复、Provider 协议增强、文档与安全加固** 四大方向。其中 1 条被标记为 **P1 安全修复**（受限 Shell 缺少沙箱时的 fail-closed 行为）已进入待审状态，反映维护团队对运行时安全性的高度重视。整体推进稳健，无大量积压告警。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。当前仍沿用既有发布线，建议关注 #5536、#5600、#5601 等高优先级 PR 的合并节奏，下一个 patch/minor 版本可能将集中承接这些稳定性修复。

---

## 3. 项目进展（已合并 / 已关闭 PR）

过去 24 小时有 **5 条 PR 完成**，覆盖 CLI、WebUI、Provider 三个模块：

| PR | 标题 | 模块 | 影响 |
|---|---|---|---|
| [#5560](https://github.com/HKUDS/nanobot/pull/5560) | feat(cli): make nanobot the default agent command | CLI | **用户体验提升**：`nanobot` 命令现在默认启动 native 终端 agent，参数（`-m`, `--workspace`, `--session`, `--classic` 等）可直接在根命令使用，减少学习成本。保留 root help/version/completion 行为。 |
| [#5599](https://github.com/HKUDS/nanobot/pull/5599) | fix(cli): stream gateway logs in WebUI launcher | CLI/WebUI | 修复 WebUI 启动器日志流式输出：从当前日志末尾开始，避免旧日志重放；处理文件缺失或截断情况；去除 Rich markup 干扰。 |
| [#5596](https://github.com/HKUDS/nanobot/pull/5596) | feat(providers): discover OAuth model catalogs online | Providers | **重要能力升级**：在 WebUI 选择模型与 xAI 运行时能力校验之间共享统一的标准化、有限范围的 model catalog。默认 Grok 4.6，离线场景保留 provider 特定的 fallback。 |
| [#5595](https://github.com/HKUDS/nanobot/pull/5595) | fix(webui): hide SkillHub install counts | WebUI | SkillHub 部分市场数据稀疏，许多趋势项展示为 `0 installs`，造成视觉破损。隐藏该字段以减少视觉噪音。 |
| [#5591](https://github.com/HKUDS/nanobot/pull/5591) | fix(webui): preserve named pane groups | WebUI | 修复面板组的自定义标题在面板减少或删除时被意外清除的回归问题。 |

**推进评估**：今日的项目进步主要集中在 **(a)** 接入体验对齐（默认命令 + OAuth catalog 发现）与 **(b)** WebUI 细节抛光。CLI 的核心交互得到简化，模型选择从静态枚举升级为按账号在线发现，显著降低维护成本。

---

## 4. 社区热点

由于过去 24 小时新增内容评论数均为 0，热点判断主要依据 **PR 编号新鲜度、关联 Issue 影响力与优先级标签**：

- 🔥 [#5536](https://github.com/HKUDS/nanobot/pull/5536) — **P1 安全修复**：受限 Shell 在没有沙箱时改为 fail-closed，关闭了 symlink / shell 展开 / 命令替换导致的工作区逃逸路径。修复了 [#4072](https://github.com/HKUDS/nanobot/issues/4072)，社区关切已久。
- 🔥 [#5602](https://github.com/HKUDS/nanobot/pull/5602) — WebUI 完播提示音，开关化 local 偏好。回应了 [#5524](https://github.com/HKUDS/nanobot/issues/5524) 的可访问性诉求。
- 🔥 [#5568](https://github.com/HKUDS/nanobot/pull/5568) — 架构级 refactor：把上下文压缩（context compaction）的所有权从 Provider 内部上移到 `AgentRunner`，统一本地输入上限与 snapshot 策略。
- 🔥 [#5596](https://github.com/HKUDS/nanobot/pull/5596) — OpenAI Codex / xAI Grok / GitHub Copilot 的模型目录在线发现，化解多 provider 模型矩阵维护成本。

背后诉求集中体现为：**安全可控、操作可预期、模型可发现、UI 状态一致**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重程度 | 编号 | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 **P1 (Security)** | [#5593](https://github.com/HKUDS/nanobot/issues/5593) → [#5594](https://github.com/HKUDS/nanobot/pull/5594) | Session message rate-limit state retains expired one-shot sessions（`SendSessionMessageTool._sent_at` 仅在同源再次发送时才清理过期时间戳，导致一次性 source 会话残留） | Open | ✅ #5594 已提 PR |
| 🟠 **P1 (Security)** | [#4072](https://github.com/HKUDS/nanobot/issues/4072) → [#5536](https://github.com/HKUDS/nanobot/pull/5536) | Restricted shell without sandbox 不应仅依赖应用层路径校验 | Open（PR 待审） | ✅ #5536（fail-closed 方案） |
| 🟡 **P2** | [#5592](https://github.com/HKUDS/nanobot/issues/5592) → [#5598](https://github.com/HKUDS/nanobot/pull/5598) | `edit_file` 文档未声明 match selectors 互斥（occurrence / line_hint / replace_all），存在误用风险 | Open | ✅ #5598（文档澄清）|
| 🟡 **P2** | [#5600](https://github.com/HKUDS/nanobot/pull/5600) | 流式请求被取消时未关闭 native reasoning，导致下游收到 reasoning 但没有 `reasoning_end` | Open（PR 已提） | ✅ #5600 |
| 🟡 **P2** | [#5601](https://github.com/HKUDS/nanobot/pull/5601) | 拒绝的 WebUI 消息会留下孤儿附件与持续订阅的 WebSocket | Open（PR 已提） | ✅ #5601 |
| 🟡 **P2** | [#5597](https://github.com/HKUDS/nanobot/pull/5597) | `RetryWaitEvent` 被 `ChannelManager` 丢弃，重试等待无可见反馈 | Open（PR 已提） | ✅ #5597 |

**稳定性评估**：所有新报告 Bug 均已有对应修复 PR（甚至部分为同作者同日提报），说明团队处于高效"report → patch"循环，无明显积压风险。**重点关注 #5536 的合并窗口**——这是当前唯一一项 P1 安全修复，且涉及 exec 路径。

---

## 6. 功能请求与路线图信号

| 候选 | 来源 | 信号分析 |
|---|---|---|
| **Skills: 手动模式 / `disable-model-invocation`** | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | 已被 PR 实现但仍 Open。满足"部署/发布"等副作用 skill 的"显式用户触发"约束，趋势符合行业 Agent 平台的安全收敛方向，**极可能纳入下一版本**。 |
| **Context Compaction 集中到 AgentRunner** | [#5568](https://github.com/HKUDS/nanobot/pull/5568) | 架构层面改动，统一输入上限。该 PR 一旦合并，会改变多个 Provider 的会话压缩语义，**建议跟踪其与现有 provider-native compaction 的兼容测试**。 |
| **Notification sound (WebUI 完播音效)** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) | 关联 Issue #5524，默认关闭。属于体验增量。 |
| **OAuth 模型目录在线发现** | [#5596](https://github.com/HKUDS/nanobot/pull/5596)（已合并） | 已落地。下一步可能扩散到 Anthropic / Google 等其他 OAuth 渠道。 |

**路线图信号总结**：短期路线图围绕 **"Agent 自治控制权"（skills 手动模式 + compaction 上移）+ "Provider 协议对齐"（OAuth 模型发现）** 推进；中长期可观察沙箱重构（fail-closed）的进一步强化。

---

## 7. 用户反馈摘要

由于今日 Issue 评论均为 0 条，无法直接提炼用户情绪，但可从 Issue 主题推断典型痛点：

- **#5593 (rate-limit 状态泄漏)**：暗示**多 session 并发调用**或**长生命周期会话**场景下，状态生命周期的边界问题。用户在意的不仅是 bug 本身，而是"系统是否在正确时机自我清理"。
- **#5592 (edit_file 文档歧义)**：典型"工具契约<-->文档表述"漂移问题，反映**文档同步的工程纪律**诉求。工具运行时已有校验（参数互斥），但文档未与契约同步，可能误导自动化 agent 调用方。
- **#5524 → #5602（WebUI 完播提示音）**：用户长时间停留页面时，**缺乏状态可感知性**，需依赖听觉通道补全视觉通道的沉默盲区。
- **#4072 → #5536（沙箱逃逸）**：长期被报告的**安全担忧**，反映高级用户对"路径校验 + shell 行为 = 安全"的怀疑，推动 fail-closed 设计。

综合判断：用户群以**严肃开发者/Agent 工程师**为主，反馈聚焦在**可观测性、安全边界、协议一致性、文档准确性**四个方面。

---

## 8. 待处理积压

按"重要性 × 停滞时间"排序，提醒维护者关注：

| 项目 | 编号 | 已开/未更新天数 | 状态 | 风险 |
|---|---|---|---|---|
| ⚠️ **P1 安全 PR 待审** | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | ~5 天（自 08-25） | Open | **安全窗口不可过长**，建议优先评审。 |
| 🟡 Skills 手动模式 | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | ~14 天（自 08-16） | Open | 功能性 PR，需维护者决策是否纳入主分支或延期。 |
| 🟡 Context Compaction refactor | [#5568](https://github.com/HKUDS/nanobot/pull/5568) | ~3 天（自 08-27） | Open | 跨模块架构改动，等待充分测试。 |
| 🟡 Native reasoning 关流 | [#5600](https://github.com/HKUDS/nanobot/pull/5600) | ~1 天 | Open | 涉及流式取消语义，建议回归测试覆盖。 |
| 🟡 WebUI 副作用回滚 | [#5601](https://github.com/HKUDS/nanobot/pull/5601) | ~1 天 | Open | 涉及 hydration 失败路径，关联数据一致性，建议审阅其事务边界。 |
| 🟡 ChannelManager 重试进度 | [#5597](https://github.com/HKUDS/nanobot/pull/5597) | ~1 天 | Open | 用户体验补丁，影响面较窄，可快速通过。 |
| 🟡 Rate-limit 状态清理 | [#5594](https://github.com/HKUDS/nanobot/pull/5594) | ~1 天 | Open | 与 #5593 关联，可与 #5600 / #5601 同步评审。 |
| 🟢 文档修复 | [#5598](https://github.com/HKUDS/nanobot/pull/5598) | ~1 天 | Open | 文档类，低风险，可快速合并。 |

**维护者建议清单**：
1. 优先评审 **#5536 (P1 security fail-closed)** 与 **#5405 (skills 手动模式)**；
2. 将 **#5594 / #5600 / #5601** 三个 agent 稳定性 PR 整批评审；
3. **#5598** 文档修复可作为低风险快合并，提升下一版本 release note 体感。

---

> 📌 **总体健康度判断**：🟢 **良好**。活跃度稳定、Issue ↔ PR 关联紧密、安全/稳定性投入充分。下一次发版建议聚焦安全（#5536）与 Agent 稳定性（#5594/#5600/#5601）三件套，作为补丁版本释放。
> 
> 生成时间：2026-08-30｜分析师：开源项目追踪智能体

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-30

## 1. 今日速览

Hermes Agent 今日继续保持高强度迭代节奏，过去 24 小时共触发 50 条 Issue 更新（28 新开/活跃、22 关闭）和 50 条 PR 更新（31 待合并、19 已合并/关闭）。Bug 修复与功能增强并行推进，Issue 关闭率约 44%，PR 关闭率约 38%，反映出团队响应及时但积压量仍可观。今日没有新版本发布，PR 仍处于集中合入前的准备阶段。讨论热度最高的 Issue 集中在 **Provider/Config 字段透传**、**background_review 工具白名单** 与 **跨平台适配** 三类问题上，整体项目健康度处于"活跃迭代、稳步收敛"区间。

---

## 2. 版本发布

无新版本发布。过去一周内的合入主要面向 Bug Fix 与 Gateway/TUI 健壮性优化，预计近期将发布补丁版本（v0.18.x 增量或 v0.19.0），但今日尚未发布。

---

## 3. 项目进展

今日有 19 个 PR 进入已合并/已关闭状态，整体推进以下方向：

### 3.1 Gateway / Session 稳定性

- **[PR #98296](https://github.com/NousResearch/hermes-agent/pull/98296)** `fix(qqbot): authorize approval clicks on dm-spelled session keys` — 修复 QQBot 在命名 Profile 下审批按钮被全部拒绝的严重问题（CLOSED）。直接对应今日新开 Issue [Issue #98292](https://github.com/NousResearch/hermes-agent/issues/98292)。
- **[PR #97783](https://github.com/NousResearch/hermes-agent/pull/97783)** `fix(cron): accept bare duration units like 'hour'` — 修复了 Desktop Cron 表单声称合法但解析器拒绝 `"every hour"` 的 UI/后端不一致问题（CLOSED）。
- **[PR #98106](https://github.com/NousResearch/hermes-agent/pull/98106)** `fix(gateway): preserve detached turns through reconnects` — 引入 12 小时运行 turn 安全上限，避免浏览器/Desktop WebSocket 重连时把"用户缺席"误判为"用户中断"（OPEN，已在评审）。
- **[PR #97577](https://github.com/NousResearch/hermes-agent/pull/97577)** `fix(desktop): recover group replies after renderer restart` — 在群成员 prompt 派发前持久化恢复标记，重启后可去重恢复（OPEN）。

### 3.2 TUI / CLI 体验

- **[PR #98289](https://github.com/NousResearch/hermes-agent/pull/98289)** `fix(tui): enable Ctrl+J newline on Linux VTE/xterm terminals` — 对齐 Claude Code、Codex、Antigravity 行为，将 Ctrl+J 在 GNOME Terminal/Ubuntu 上识别为换行。
- **[PR #98302](https://github.com/NousResearch/hermes-agent/pull/98302)** `fix(cli): fall back to plain gh auth status for gh < 2.52` — 修复老版本 `gh` CLI 用户的 doctor 误报。

### 3.3 数据完整性

- **[PR #98300](https://github.com/NousResearch/hermes-agent/pull/98300)** `fix(agent): detect 0-byte state.db as zeroed, not healthy` — P1 修复：被截断为 0 字节的 `state.db` 应被视为已清零而非健康，避免误加载损坏会话（[Issue #97568](https://github.com/NousResearch/hermes-agent/issues/97568)）。

### 3.4 国际化（i18n）

- **[PR #92336](https://github.com/NousResearch/hermes-agent/pull/92336)** `feat(i18n): add Indonesian (id) locale for CLI, gateway, and Desktop`
- **[PR #92192](https://github.com/NousResearch/hermes-agent/pull/92192)** `i18n(id): add Indonesian root documentation trio`
- **[PR #93632](https://github.com/NousResearch/hermes-agent/pull/93632)** `docs(i18n): seed Bahasa Indonesia Docusaurus locale`

三个 PR 形成印尼语本地化闭环，体现社区驱动的国际化推进。

### 3.5 其他亮点

- **[PR #97045](https://github.com/NousResearch/hermes-agent/pull/97045)** `fix(curator): refuse un-ledgered terminal writes to the skills tree` — P1 修复：阻止通过 terminal 工具绕过 skill_ledger 写入 skills 目录。
- **[PR #98305](https://github.com/NousResearch/hermes-agent/pull/98305)** `fix(kanban): reject a review approval recorded by the implementer's profile` — 关闭 Kanban "四眼原则"漏洞。
- **[PR #98291](https://github.com/NousResearch/hermes-agent/pull/98291)** `fix(slack): retry as top-level message when thread root cannot accept replies` — Slack 系统消息场景的降级路径。

**整体推进判断**：今日合入集中在"安全/数据完整性"和"跨平台/会话状态"两个高优先级主题上，项目在稳定性维度上明显向前迈进一步；但 desktop 与新功能侧仍处于 PR 排队阶段。

---

## 4. 社区热点

### 4.1 评论数最高 Issues

| # | Issue | 评论 | 👍 | 状态 |
|---|-------|------|----|------|
| 1 | [#54922 custom_providers[].extra_body silently dropped](https://github.com/NousResearch/hermes-agent/issues/54922) | 7 | 1 | CLOSED |
| 2 | [#64926 Skill files modified automatically](https://github.com/NousResearch/hermes-agent/issues/64926) | 6 | 1 | CLOSED |
| 3 | [#38710 WhatsApp observe_unmentioned_group_messages](https://github.com/NousResearch/hermes-agent/issues/38710) | 6 | 4 | OPEN |
| 4 | [#11911 Native Mobile App (iOS & Android) with Voice Calling](https://github.com/NousResearch/hermes-agent/issues/11911) | 5 | 0 | OPEN |
| 5 | [#97754 macOS browser binding CuaDriver conflict](https://github.com/NousResearch/hermes-agent/issues/97754) | 5 | 0 | CLOSED |
| 6 | [#41909 Custom fields in the CLI status bar](https://github.com/NousResearch/hermes-agent/issues/41909) | 5 | 0 | CLOSED |

### 4.2 反应数最高 Issues

- **[Issue #38710](https://github.com/NousResearch/hermes-agent/issues/38710)**（👍 4，OPEN）— WhatsApp 适配器希望支持 `observe_unmentioned_group_messages`，与 Telegram 实现保持一致。这是当前 OPEN 列表中反应数最高的 Issue，反映用户希望 WhatsApp 获得与 Telegram 同等的群组上下文感知能力。
- **[Issue #54922](https://github.com/NousResearch/hermes-agent/issues/54922)**（👍 1，CLOSED）与 **[Issue #64926](https://github.com/NousResearch/hermes-agent/issues/64926)**（👍 1，CLOSED）— 反映用户在多端（CLI vs Gateway/Messaging）使用统一 Provider 配置时遇到隐式丢弃，以及对 Skill 文件"只读"语义的强诉求。

### 4.3 诉求分析

- **配置语义一致性**：多个高评论 Issue 集中在 `extra_body`、profile 命名空间、Skill 文件可写性等"声明与实际行为不符"的问题上，说明文档/默认值与运行时行为存在系统性 gap。
- **平台对等**：WhatsApp 与 Telegram 的功能差距、Desktop 在 Windows/macOS 的兼容性差异，是用户反复要求的方向。
- **可观测性**：希望日志、状态栏、Cron 用量审计等"看见 Agent 在做什么"的诉求持续增长。

---

## 5. Bug 与稳定性

按严重程度（P1 → P3）整理今日仍在讨论或新开的相关条目，标注是否已有对应 PR：

### P1（数据完整性 / 安全）

| Issue / PR | 摘要 | 是否有 fix PR |
|---|---|---|
| [#98300 PR](https://github.com/NousResearch/hermes-agent/pull/98300) | 0-byte `state.db` 被误判为健康 | ✅（PR 自身） |
| [#97045 PR](https://github.com/NousResearch/hermes-agent/pull/97045) | curator 跳过 skill_ledger 的 terminal 写入 | ✅（PR 自身） |

### P2（功能受阻 / 数据正确性）

| Issue | 摘要 | fix PR |
|---|---|---|
| [#98292 qqbot approval buttons unauthorized](https://github.com/NousResearch/hermes-agent/issues/98292) | 命名 Profile 下 QQ 审批被拒 | ✅ [#98296](https://github.com/NousResearch/hermes-agent/pull/98296) |
| [#98299 /goal 持久化](https://github.com/NousResearch/hermes-agent/issues/98299) | `/v1/runs` 旁路 GoalManager | ❌ 暂无 |
| [#96391 hermes cron run audit](https://github.com/NousResearch/hermes-agent/issues/96391) | 手动 cron 执行绕过用量审计 | ❌ 暂无 |
| [#75091 provider extra_body failover](https://github.com/NousResearch/hermes-agent/issues/75091) | fallback 时 primary 的 `extra_body` 泄漏 | ❌ 暂无（与 #54922 同源问题簇） |
| [#93911 Desktop relay 30s timeout](https://github.com/NousResearch/hermes-agent/issues/93911) | Computer Use Bot 跨连接 30s 失败 | ❌ 暂无 |
| [#22894 TUI thinking content leaks](https://github.com/NousResearch/hermes-agent/issues/22894) | `show_reasoning=false` 仍渲染折叠块 | ❌ 暂无 |
| [#65035 delegation base_url drops extra_body](https://github.com/NousResearch/hermes-agent/issues/65035) | delegation 凭据解析丢 `request_overrides` | ❌ 暂无 |
| [#98056 SSH backend path](https://github.com/NousResearch/hermes-agent/issues/98056) | Desktop 文件浏览器读到 Gateway 本地路径 | ❌ 暂无 |
| [#97557 cron telegram target](https://github.com/NousResearch/hermes-agent/issues/97557) | 显式 `deliver:` cron 输出落到错误会话 | ❌ 暂无 |
| [#61521 background_review fork tool-denial](https://github.com/NousResearch/hermes-agent/issues/61521) | 自迭代循环被工具拒绝风暴饿死 | ❌ 暂无 |

### P3（体验 / 小场景）

- [#93999 KawaiiSpinner 终端宽度](https://github.com/NousResearch/hermes-agent/issues/93999)、[#98295 wheelAccel 触摸板](https://github.com/NousResearch/hermes-agent/issues/98295)、[#39996 LOCAL 端 full tool schema](https://github.com/NousResearch/hermes-agent/issues/39996)、[#40003 read_file Unknown action](https://github.com/NousResearch/hermes-agent/issues/40003)、[#45877 cron review 阻挡只读工具](https://github.com/NousResearch/hermes-agent/issues/45877)、[#87041 docs WhatsApp 链接错](https://github.com/NousResearch/hermes-agent/issues/87041)、[#98228 Telegram 替换后用旧 adapter](https://github.com/NousResearch/hermes-agent/issues/98228)、[#97754 CuaDriver TCC 误归因](https://github.com/NousResearch/hermes-agent/issues/97754)、[#93068 computer_use 恢复路径冲突](https://github.com/NousResearch/hermes-agent/issues/93068)、[#51975 cron 自然语言解析](https://github.com/NousResearch/hermes-agent/issues/51975)。

**修复率评估**：今日明确的"Issue → PR"配对约 7/50 = 14%。多数 P2 Bug 仍处于"报告已收、修复未到"的窗口期。

---

## 6. 功能请求与路线图信号

按"已有 PR / 即将落地"与"纯需求"分类：

### 6.1 已有 PR 推进中（高概率近期合入）

| 需求 | Issue | PR |
|---|---|---|
| 群聊 Bot 文件 & Bot 间交接 | [#97681](https://github.com/

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-08-30
**数据周期**：过去 24 小时
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度偏低，共产生 **1 条新 Issue** 和 **3 条 PR 变动**，无新版本发布。值得关注的是，两条历史 PR（#3315、#3337）因长期 stale 被自动关闭，其中包含一个潜在的严重稳定性修复——MCP 失败导致 Agent 循环挂起——这暴露出项目在代码审查与维护响应上的积压问题。仅有 1 条 Czech 本地化的 i18n PR 处于待合并状态，社区贡献动能有明显放缓迹象。

---

## 2. 版本发布

⚠️ **本周期内无新版本发布**，无可报告的版本变更、破坏性变更或迁移说明。

---

## 3. 项目进展

### 本日合并/关闭的重要 PR

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | ❌ Closed (stale) | 私人机器人对话中的 Telegram 话题支持未被合入 |
| [#3337](https://github.com/sipeed/picoclaw/pull/3337) | Fix/mcp failure hangs agent loop | ❌ Closed (stale) | MCP 连接失败导致 Agent 循环挂起的修复被关闭 |

### 评估

令人担忧的是，**两条具备实际价值的 PR 均因 stale 机制被自动关闭**，而非被维护者主动评估后驳回：
- **#3337** 修复的是一个会直接导致聊天接口完全失灵的严重 Bug（即便维护者认为方案不完美，也应保留讨论或合入改进版）；
- **#3315** 是一个真实用户场景的功能补全。

项目今日整体向前推进的步伐 **接近于零**，仅有 #3348 这条低风险的国际化 PR 处于活跃状态。建议维护者审查 stale 自动关闭策略，避免误杀有效贡献。

---

## 4. 社区热点

本周期内**讨论活跃度普遍较低**（所有条目 👍 数均为 0，Issue 评论数最多仅 1 条），主要热点包括：

- 🔥 **#3343** — [Tool feedback animation can edit a Telegram message indefinitely after a failed turn](https://github.com/sipeed/picoclaw/issues/3343)
  - 这是本周期内**唯一被更新的 Issue**，且涉及生产环境中的实际损害（228,000+ 次 API 调用触发 Telegram 服务端限流）。该问题反映出用户对资源耗尽类 Bug 的强烈关注，也是本周期最具社区影响的事件。

**社区诉求分析**：从热度分布可以看出，用户当前最迫切的需求并非新功能，而是**已有功能的稳定性与可靠性**——尤其是与外部服务（Telegram、MCP Server）交互时的容错能力。

---

## 5. Bug 与稳定性

### 🔴 严重（生产环境已造成实际损害）

#### [#3343](https://github.com/sipeed/picoclaw/issues/3343) — Tool feedback animation 可在 turn 失败后无限期编辑 Telegram 消息
- **报告者**：raine | **状态**：OPEN（标 stale 风险）| **最后更新**：2026-08-29
- **严重程度**：🔴 **严重**
  - 在 agent turn 已停止推进后，工具反馈动画仍以每 3 秒一次频率持续调用 Telegram `editMessageText`
  - 数日内累计产生 **228,000+ 次** 编辑请求，触发 Telegram 服务端 `retry_after` 限流
  - **无对应修复 PR**
- **影响**：用户被 Telegram 平台级限流，可能影响后续所有 Telegram 集成功能；反映项目在超时/取消机制上存在系统性问题。
- **建议**：维护者应优先处理此问题，并审视是否存在类似的"无终止循环"模式。

### 🟠 中等（潜在严重但未在生产暴露）

#### [#3337](https://github.com/sipeed/picoclaw/pull/3337) — MCP failure hangs agent loop（**已被 stale 关闭**）
- **报告者**：kuzmichus | **状态**：❌ CLOSED (stale)
- **严重程度**：🟠 **中高**
  - 当 `ensureMCPInitialized` 返回错误时，`AgentLoop.Run` 直接退出，导致聊天界面彻底无法回复用户，直至手动重启
- **影响**：MCP Server 是项目的可扩展性核心，任何 MCP 连接抖动都会让用户体验"完全沉默"的故障。
- **关键问题**：**此修复 PR 已因 stale 被关闭，但 Bug 本身仍然存在**——这是当前最值得维护者重新介入的项。

---

## 6. 功能请求与路线图信号

### 待评估/已开放的贡献

#### [#3348](https://github.com/sipeed/picoclaw/pull/3348) — i18n: complete Czech code wrap labels
- **作者**：KrtCZ | **状态**：OPEN | **创建**：2026-08-29
- **类型**：国际化（低风险）
- **预期**：作为纯文案的本地化补全，几乎无破坏性，**大概率可纳入下一版本**（如有发布计划）。

### 路线图观察

被关闭的 **#3315（Telegram 私人聊天话题支持）** 表明社区在多场景 Telegram 集成上有真实需求，但功能因响应机制问题被搁置。结合 #3343 的 Bug 性质，**短期路线图建议优先回归稳定性主题**：
1. 修复 Agent 循环中的无终止/挂起问题（#3343 + #3337）
2. 重新打开或重新评估 #3315
3. 推进国际化 PR 合入（#3348）

---

## 7. 用户反馈摘要

- **真实痛点场景**（来自 #3343 评论）：
  - 用户在生产环境部署 PicoClaw 处理 Telegram 任务时，遭遇 Bot 因内部 turn 失败而触发对单一消息的持续高频编辑；
  - 该 Bug 直接导致 **Telegram 平台级限流**，意味着该用户的 Bot 在限流窗口内可能对所有用户不可用。
  - 用户对"turn 已失败但后台循环未停止"的错误传播机制表示不满，期望项目有更明确的状态机或取消传播机制。

- **隐含的满意度信号**：
  - 用户仍在积极提 Issue 与 PR，说明对项目本身仍抱有信心；
  - 但 stale 自动关闭且无人工复核，让贡献者感到被忽视，长期可能影响贡献者留存。

---

## 8. 待处理积压 ⚠️

以下条目需要维护者**立即关注**，避免社区贡献流失：

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| 🐛 严重 Bug | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback 无限循环编辑 Telegram 消息 | 无修复 PR，标记 stale |
| 🐛 严重 Bug | [#3337](https://github.com/sipeed/picoclaw/pull/3337) | MCP 失败导致 Agent 挂起 | **修复 PR 已被 stale 机制误关闭**，Bug 仍存在 |
| ✨ 功能 PR | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | 私人 Bot 对话的话题支持 | **被 stale 关闭**，应评估后重新开启或给出反馈 |
| 🌐 i18n PR | [#3348](https://github.com/sipeed/picoclaw/pull/3348) | Czech 代码包裹标签补全 | 低风险，建议快速合并 |

### 给维护者的建议

1. **审查 stale 关闭策略**：当前策略对关键 Bug 修复不友好，建议为 `bug`/`fix` 标签的 PR 排除 stale 自动关闭；
2. **优先处置 #3343**：这是涉及第三方平台限流的高危 Bug，且已暴露生产事故；
3. **重新评估被 stale 关闭的 #3337 与 #3315**：即使不完全采纳方案，也应给出明确反馈；
4. **更新 CONTRIBUTING 文档**：明确 stale 触发条件与贡献者应对方式，减少误关。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 条 Issue、3 条 PR 变动 |
| 稳定性 | ⭐⭐☆☆☆ | 存在未修复严重 Bug，且关键修复 PR 被误关 |
| 社区响应 | ⭐⭐☆☆☆ | 无维护者对 stale 关闭做出补救动作 |
| 路线推进 | ⭐☆☆☆☆ | 本周期实质进展为零 |

**综合评估**：🔴 **需关注** — 项目当前面临"维护响应不足 + 关键 Bug 累积"的双重风险，建议社区用户与维护者尽快对齐优先级。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-30

---

## 一、今日速览

NanoClaw 项目今日呈现**高活跃度、高吞吐的工程治理日**特征：24 小时内 PR 更新达 **45 条**（其中 30 条已合并/关闭，15 条待合并），Issues 更新 5 条。无新版本发布，但代码与流程层面的推进幅度可观。**核心团队成员 glifocat 与 gavrielc 是今日主力贡献者**，分别推动了 PR 模板 v2 / 标签自动化重构与 Slack 适配器系列修复。值得社区关注的是，**Signal 相关问题集中爆发（3 条新 Issue）以及 Session DB 只读阻塞消息投递的严重故障**，构成本日的稳定性风险点。

---

## 二、版本发布

**无新版本发布。**

---

## 三、项目进展（今日合并/关闭的重要 PR）

今日共 **30 条 PR 已合并/关闭**，以下为对项目推进有实质意义的条目：

### 3.1 Slack 适配器完整闭环修复
- **#3668** *fix(slack): un-absorb the pasted-table extractor — restore compose at tip* — 修复因 `f62ffeb2` 引入 `slack-raw-text.ts` 但未随 Slack 适配器复制，导致所有通过 `add-slack` 安装的部署出现 `TS2307` 类型检查失败。属于紧急回归修复。🔗 https://github.com/nanocoai/nanoclaw/pull/3668
- **#3667** *fix(add-slack): copy slack-raw-text with the adapter that imports it* — 配套修复：将 `slack-raw-text` 一同纳入 `nc:copy from-branch:channels` 拷贝列表。🔗 https://github.com/nanocoai/nanoclaw/pull/3667
- **#3666** *feat(slack): recover pasted tables from the raw event* — 在 Slack 端从原始事件中恢复粘贴的表格内容。🔗 https://github.com/nanocoai/nanoclaw/pull/3666
- **#3665** *feat(channels): let a chat-sdk channel recover content left in message.raw* — 为 chat-sdk 通道新增 `extractRawText` 钩子，使平台适配器能将原始负载中未映射到 `Message.toJSON()` 的内容保留下来。🔗 https://github.com/nanocoai/nanoclaw/pull/3665

> **小结**：四 PR 联动解决了 Slack 适配器从类型检查断裂到功能补全的完整链路，是今日最关键的工程进展之一。

### 3.2 工程治理与稳健性增强
- **#3664** *feat(config): install-wide default model and fast serving tier* — 新增 `NANOCLAW_DEFAULT_MODEL` 与 `NANOCLAW_FAST_MODE=1` 两个 host `.env` 配置项，分别用于设置未指定模型的 agent 组的默认模型与启用 API 的快速服务层级。🔗 https://github.com/nanocoai/nanoclaw/pull/3664
- **#3663** *chore: use a neutral placeholder name in examples and fixtures* — 将文档与脚本中的维护者姓名占位符改为中性表述，避免暴露真实姓名。🔗 https://github.com/nanocoai/nanoclaw/pull/3663
- **#3662** *fix(task-script): say a pre-task script timed out instead of "Command failed"* — 区分 pre-task 脚本超时与非零退出码的报错信息。🔗 https://github.com/nanocoai/nanoclaw/pull/3662
- **#3661** *fix(container): retry the Bun install instead of failing the image build* — 为 Docker 镜像构建过程中 Bun 运行时的安装增加重试逻辑。🔗 https://github.com/nanocoai/nanoclaw/pull/3661
- **#3659** *fix(env): read quoted .env values the same way everywhere* — 统一 `src/env.ts:readEnvFile` 与 `setup/environment.ts:readEnvKey` 两个 `.env` 解析器的引号处理行为，避免同一文件被两种方式读取时出现不一致。🔗 https://github.com/nanocoai/nanoclaw/pull/3659
- **#3655** *fix(ncl tasks): reject an empty --prompt on update* — 在任务更新命令中拒绝空的 `--prompt` 参数。🔗 https://github.com/nanocoai/nanoclaw/pull/3655

### 3.3 仓库维护与流程改进
- **#2954** *docs(security): add reporting and triage policy* — 关闭，安全报告与分类策略文档终于落地（自 2026-07-04 开启，跨越近两个月）。🔗 https://github.com/nanocoai/nanoclaw/pull/2954

> **整体判断**：今日 PR 完成度极高（合并/关闭率 30/45 ≈ 67%），核心团队对回归问题响应迅速，仓库维护节奏良好。

---

## 四、社区热点

今日 Issues 与 PR 中讨论焦点集中在**Signal 集成稳定性**与**PR 模板 / 标签体系 v2 升级**两大主题。

### 4.1 Signal 集成连环问题（同一作者 IT-Sage）
三条 Issue 在 2026-08-29 同日提交，针对 `setup/install-signal-cli.sh` 与 `setup/signal-auth.ts` 的不同缺陷：

- **#3671** *install-signal-cli.sh pins signal-cli 0.14.3, which silently hangs forever establishing a session with a new contact — fixed upstream in 0.14.7* — 信号版本过低，与新联系人建立会话时无限挂起且无错误。🔗 https://github.com/nanocoai/nanoclaw/issues/3671
- **#3670** *Dedicated-number Signal setup grants "owner" to the bot's own account* — 专用号注册路径将"owner"授予机器人自身账号，导致审批卡片进入无人查看的自我 DM。🔗 https://github.com/nanocoai/nanoclaw/issues/3670
- **#3669** *signal-auth's listAccounts can't find signal-cli in ~/.local/bin under non-login shell context* — 非登录 shell 上下文下找不到 `~/.local/bin` 中的 `signal-cli`，向导错误地回退到二维码链接流程。🔗 https://github.com/nanocoai/nanoclaw/issues/3669

> **诉求分析**：用户期望 Signal 作为长会话/通知通道具备工业级稳定性，三条问题分别覆盖"版本"、"权限"、"环境探测"三个层面，表明该集成仍处于生产可用性的早期阶段。

### 4.2 PR 模板 v2 与标签自动化重构（glifocat 系列）
- **#3644** *chore(github): add issue forms* — 引入 4 种 Issue 表单 + `config.yml` 联系链接。🔗 https://github.com/nanocoai/nanoclaw/pull/3644
- **#3648** *ci(labels): PR template v2 with token parsing and managed-kind reconcile* — 升级 PR 模板为 v2 契约。🔗 https://github.com/nanocoai/nanoclaw/pull/3648
- **#3647** *ci(labels): automatic area/* from changed paths and kind/* from PR type* — 实现 16 类 `area/*`、`kind/*`、`delivery/skill` 标签的自动化。🔗 https://github.com/nanocoai/nanoclaw/pull/3647
- **#3657** *ci(labels): report-only template-compliance status with a single fix comment* — 模板合规性状态以报告形式呈现。🔗 https://github.com/nanocoai/nanoclaw/pull/3657
- **#3651** *docs(contributing): add the issue-side intake section* — 补充贡献文档的 Issue 端引导章节。🔗 https://github.com/nanocoai/nanoclaw/pull/3651

> **诉求分析**：这一系列工作是项目"工程治理现代化"的重要一步，从依赖人工 triage 转向基于规则的自动分类，预示着仓库规模将进入有序增长轨道。

---

## 五、Bug 与稳定性

### 5.1 🔴 严重（生产阻塞）
- **#3660** *Session DB readonly errors blocking message delivery* — 作者 DawoudIO 报告 Session SQLite 数据库变为只读，导致所有消息投递失败，Discord 等通道无法发送出站消息，问题自 2026-08-29 凌晨起出现。
  - 错误：`SqliteError: attempt to write a readonly database`
  - ⚠️ **尚未发现对应的修复 PR**，维护者请优先关注
  - 🔗 https://github.com/nanocoai/nanoclaw/issues/3660

### 5.2 🟠 高（功能完全不可用）
- **#3671** Signal 会话无限挂起 → 升级至 signal-cli 0.14.7 可解决（上游已修复），需要更新 `install-signal-cli.sh` 的版本固定值。
- **#3670** 专用号审批流程将"owner"授予机器人自身 → 流程逻辑缺陷，暂无 fix PR。

### 5.3 🟡 中（部署与发现性问题）
- **#3669** `~/.local/bin` 在非登录 shell 不可见 → 建议将 `signal-cli` 安装路径写入 `/etc/profile.d/` 或 wizard 中显式探测 PATH。
- **#3668 / #3667** Slack 适配器 typecheck 回归 → 已通过两 PR 修复并合并。

### 5.4 ✅ 已修复
- **#3665 / #3666** Slack 粘贴表格恢复 → 已合并。
- **#3661** Docker 镜像构建时 Bun 安装失败 → 已合并重试逻辑。
- **#3659** `.env` 解析引号不一致 → 已合并统一。
- **#3655** `ncl tasks` 接受空 `--prompt` → 已合并。

---

## 六、功能请求与路线图信号

- **#3364** *feat(skills): add Context.dev MCP integration* — aadithyanr 提交于 2026-08-20 的 **Operational/container skill**，自 2026-08-29 仍处于 OPEN 状态，但讨论度不高。建议维护者评估该 MCP 集成是否纳入下一版本。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3364
- **#3545** *fix(slack): add explicit room handoffs* — Koshkoshinsk 提交于 2026-08-25，OPEN 状态，提出为 Slack 显式房交接工具，并解决对参与者全员自动提及的体验问题。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3545
- **#3654** *fix(onecli): NO_PROXY for host.docker.internal* — 一旦合并将开放 host-side MCP 服务器在 Docker 内的可达性。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3654

**路线图信号**：今日已合并的 **#3664（install-wide default model & fast serving tier）** 是首次将"快速服务层级"作为 install-wide 配置项暴露给用户，预期将在下个版本成为面向运营场景的核心开关。

---

## 七、用户反馈摘要

- **痛点 1：Signal 会话挂起且无错误反馈（#3671）** —— 用户从生产日志中观察发现，无任何超时与日志输出，体现 Signal 集成缺少"失败可见性"。
- **痛点 2：专用 Signal 号码部署的"完全静默"现象（#3670）** —— 用户反馈审批卡片流入机器人自身的 DM，无人监控，无任何错误告警，是更危险的"静默失败"。
- **痛点 3：Session DB 突然只读（#3660）** —— 用户凌晨遭遇全通道消息投递瘫痪，距离最近一次成功部署 12 小时，可能涉及文件系统 / 权限自动变更，缺乏运行时健康检查。
- **场景需求：在 Raspberry Pi 4B 上运行 nanoclaw（#95）** —— yishuixuanyuan 长期诉求于 2026-08-29 更新，今日已 CLOSED，可能已通过 PR 修复或文档说明覆盖。🔗 https://github.com/nanocoai/nanoclaw/issues/95
- **满意点**：仓库对回归类问题（如 Slack typecheck 断裂）的响应速度极高 —— 从 `f62ffeb2` 引入到 #3667/#3668 修复合并，在数小时内闭环。

---

## 八、待处理积压

- **#3364** *Context.dev MCP integration*（自 2026-08-20 OPEN，11 天未合并） —— 建议维护者给出审查反馈。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3364
- **#3545** *Slack explicit room handoffs*（自 2026-08-25 OPEN，5 天） —— 与 #3665/#3666/#3668 涉及 Slack 模块，建议同步评估。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3545
- **#95** Raspberry Pi 支持虽已 CLOSED，但维护者应在 Release Notes 中明确 ARM64 支持范围与官方镜像情况，避免重复提问。
- **#3660** Session DB 只读问题优先级建议**提升至 P0**，并尽快在 release 中增加健康检查与 SQLite 写入权限自检。

---

> **整体健康度评估**：⭐⭐⭐⭐（4/5）
> 工程治理节奏极佳，回归响应迅速；但 Signal 集成稳定性与 Session DB 写入问题是当前最突出的可靠性短板，建议在下一版本发布前完成修复。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**日期：2026-08-30**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 仓库在 2026-08-30 维持了中等偏高的工程活跃度：8 个 PR 流转（7 待合并、1 已关闭），3 个 Issue 更新（2 活跃、1 已关闭）。本日无新版本发布。代码侧以"低风险修复"为主，包括 macOS pre-push 钩子失效、tool-disclosure 误判、list_dir 错误信息缺失等问题，叠加一个 L 级别的 compaction 输入绑定修复和一个 XL 级别的循环终止逻辑重构；产品侧则以租户作用域 BI 遥测（#7961）这一新功能为代表进入评审阶段。整体项目处于"稳步修复 + 中长期架构扩展"的双轨节奏。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

过去 24 小时内，唯一已关闭的 PR 是 **#7899** `feat(notifications): publish automation pre-run failures`（作者：italic-jinxin，XL 级别），该 PR 与 Issue #7873 同主题——在自动化触发因配置或输入无效而无法启动时，向用户发布持久化的 `RunFailed` 通知。该 PR 已关闭（推测为合并），相关 Issue #7873 也已同步关闭，标志"自动化启动失败可观测性"功能落地完成。

另一个值得关注的进展是 **#7978** `fix(compaction): bound cumulative summarizer input`（作者：serrrfirat，L 级别），该 PR 把压缩总结器的输入从"逐消息上限"改为"对累计摘要 + 整段消息 delta 的统一上限"，并保留对消息主体的注入/泄露扫描——直接回应 Issue #7824 中关于 token 与成本开销的痛点（详见后文）。

同时 **#7988** 由 CI 机器人提交的 `chore(agents): refresh codebase knowledge graph`（XS 级别）已正常流转，这是 nightly 工作流的常规产物，反映项目代码库知识图谱机制稳定运行。

---

## 4. 社区热点

近 24 小时内评论数与活跃度最高的两个讨论都来自核心贡献者 **serrrfirat**：

- **[Issue #7824] Context projection: Pi-style compaction barrier, structured summaries, overflow recovery**
  链接：https://github.com/nearai/ironclaw/issues/7824
  评论 5 条，更新于 2026-08-29。该 Issue 用 PinchBench（147 个任务、DeepSeek-V4-Flash / OpenRouter）的实测数据指出：当前实现把整段线程历史重放进每次模型请求，导致提交 `949991b5` 后输入 token 从 55.1M 飙升至 227.7M、成本从 \$2.52 升至 \$10.31，但任务准确率反而从 60.5% 下降到 54.4%。诉求是引入类似 Pi 的"压缩屏障 + 结构化摘要 + 溢出恢复"机制。

- **[Issue #7770] Epic: hook the agent lifecycle — after-turn, before-turn, compaction, and tool-result seams (phased)**
  链接：https://github.com/nearai/ironclaw/issues/7770
  评论 4 条，更新于 2026-08-29。该 Epic 提出把 `ironclaw_hooks` 扩展到 agent 全生命周期，分阶段交付，每个阶段由一个 agent 端到端完成。

背后的共同诉求非常清晰：随着 agent 运行时间变长，**上下文管理（context window）与生命周期可扩展性**成为产品能否继续扩展的核心瓶颈。两条 Issue 都已与对应的 PR（#7978 已就绪、hook 体系正在分阶段推进）形成上下游链路。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 高（功能性，影响模型行为） | [PR #7977](https://github.com/nearai/ironclaw/pull/7977) | `fix(loop): terminate on dominant repeated output, cap interactive wall clock` — 移除 PR #7531 之后，默认循环家族没有任何机制可以在"无进展"时结束运行；生产运行 `e3513a4e`（2026-08-27）执行了 593 次工具调用、耗时 70 分钟仍不收敛。 | OPEN，XL 级别，修复中 |
| 中（错误分类，导致上层误判） | [PR #7990](https://github.com/nearai/ironclaw/pull/7990) | `fix(tool-disclosure)` — `failed_invalid_input` 把所有可恢复失败一律标记为 `FailureKind::InputEncode`，掩盖了"工具名不可解析"这种与编码无关的真实失败。 | OPEN，M 级别 |
| 中（错误信息不完整，妨碍调试） | [PR #7989](https://github.com/nearai/ironclaw/pull/7989) | `fix(coding): list_dir` — 当目录不存在时，`stat_optional` 把 `FilesystemError::NotFound` 当作普通缺省返回 `Ok(None)`，导致模型只能看到"出错了"但看不到"哪个路径出错"。 | OPEN，S 级别 |
| 中（开发者体验，跨平台） | [PR #7991](https://github.com/nearai/ironclaw/pull/7991) | `fix(ci): pre-push gate cannot run on macOS` — 测试与 CI 脚本各有一个独立 macOS 不兼容问题，组合起来迫使 macOS 开发者必须绕过该钩子。 | OPEN，XS 级别 |
| 低（已修复） | Issue #7873 | 自动化启动失败的可观测性盲区 | 已被 PR #7899 闭环解决 |

总体看，bug 修复集中在"错误信号传递不准确""工具失败语义被压缩""跨平台/开发者体验"三类，反映项目正在系统性地补齐 agent 与工具链的诊断能力。

---

## 6. 功能请求与路线图信号

两条结构性 roadmap 信号已经在 Issue 层面成文：

- **生命周期 Hook 体系扩展**（Issue #7770，serrrfirat）：将 `ironclaw_hooks` 扩展到 after-turn / before-turn / compaction / tool-result 等尚未覆盖的时刻，使"X 发生时做 Y"型需求以 hook 注册而非引擎修改实现。这是面向第三方扩展与多 agent 协作的基础设施级升级。
- **上下文压缩屏障**（Issue #7824，serrrfirat）：基于实测 token 与成本数据，提出结构化摘要 + 溢出恢复。配套 PR #7978 已进入评审，意味着至少"压缩总结器输入绑定"部分会在近期进入主干。

产品侧最值得关注的待合并 PR 是 **[#7961](https://github.com/nearai/ironclaw/pull/7961)** `feat(telemetry): add scoped tenant BI telemetry collection`（作者：henrypark133，XL 级别，中等风险）。该 PR 引入：
- 隐私边界化的租户作用域 BI 遥测契约
- 小时级活跃度、模型使用、失败、自动化、生命周期、采集覆盖率记录
- 强制通过 `ScopedFilesystem` 持久化、租户作用域读取，禁止遥测模块直接持有 libSQL/PostgreSQL 连接

考虑到风险等级为 medium 且涉及依赖项与文档，预期进入下一个 minor 版本的概率较高。

---

## 7. 用户反馈摘要

由于今日 Issue 评论主要集中在核心贡献者发起的技术性议题，**直接终端用户反馈占比有限**。可提炼的痛点信号如下：

- **成本与可扩展性**（Issue #7824 评论）：用户视角下，最关心的不再是"agent 能不能完成"，而是"agent 完成任务要花多少 token / 多少钱"。PinchBench 上的成本从 \$2.52 → \$10.31、准确率反而下降，是促使团队设计压缩屏障的直接动因。
- **失败语义模糊**（Issue #7824 评论 + PR #7990/#7989）：当工具调用出错时，模型得到的反馈既不区分错误类别，也常常缺失关键上下文（路径、原因），使得后续自愈能力受限。
- **运行不收敛**（PR #7977 描述）：生产环境中出现 593 次工具调用 / 70 分钟仍未终止的运行，说明"何时停止"对生产用户已是痛点，而非纯理论问题。

满意度侧信号较弱，主要因为开放 Issue 多由贡献者自驱发起、面向架构演进而非用户抱怨。

---

## 8. 待处理积压

以下条目建议维护者优先关注：

- **[Issue #7824](https://github.com/nearai/ironclaw/issues/7824)** 创建于 2026-08-22、8 天前仍 OPEN：上下文压缩问题具备明确数据支撑，配套 PR #7978 已就绪，建议尽快评审合并。
- **[Issue #7770](https://github.com/nearai/ironclaw/issues/7770)** 创建于 2026-08-20、10 天前仍 OPEN：Epic 级路线图，尚未出现 Phase 1 PR，建议拆分首个独立阶段以维持节奏。
- **[PR #7977](https://github.com/nearai/ironclaw/pull/7977)** XL 级别，涉及循环终止与 wall clock 上限，直接对应生产事故，期望优先级较高。
- **[PR #7961](https://github.com/nearai/ironclaw/pull/7961)** XL 级别、medium 风险，涉及依赖与 schema 变更，应作为下个版本的功能窗口统一评审。

---

## 附：今日数据一览

| 维度 | 数量 |
|---|---|
| 新开/活跃 Issues | 2 |
| 已关闭 Issues | 1 |
| 待合并 PRs | 7 |
| 已合并/关闭 PRs | 1 |
| 新版本发布 | 0 |
| 涉及核心贡献者 | serrrfirat、henrypark133、standardtoaster、italic-jinxin |

---

*报告生成时间：2026-08-30，数据来源：GitHub 公开数据。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-30

> 数据范围：2026-08-29 ~ 2026-08-30  
> 项目：netease-youdao/LobsterAI

---

## 1. 今日速览

LobsterAI 仓库在过去 24 小时内**未发生任何实质性推进**：无新版本发布、无 PR 合并或关闭、无 Issue 关闭。值得注意的是，当前所有活跃的 Issue 与 PR 均已被 GitHub 自动标记为 **[stale]**（创建于 2026-03-31，最后更新于 2026-08-29），意味着这些条目已长期未收到维护者响应。今日新增的 1 条 Issue 实际为存量 Bug 报告的再次活跃，5 条待合并 PR 也均为历史积压。整体活跃度评估为**偏低**，社区与维护者之间的互动节奏近 5 个月来持续放缓。

---

## 2. 版本发布

今日无新版本发布。版本节奏需结合更长时间窗口观察，建议关注近 30 天是否有 tag 推送以评估发版频率。

---

## 3. 项目进展

今日无 PR 合并或关闭，**代码主干未向前推进任何新功能或修复**。

当前仓库的待合并积压为 5 条 PR（均为 stale 状态），均为面向用户体验改进的功能性补丁，按主题归类如下：

| 主题 | PR | 摘要 | 链接 |
|------|------|------|------|
| Cowork 会话 UX 改进 | #1138 | 工具调用失败高亮 + 一键跳转最新消息 | [#1138](https://github.com/netease-youdao/LobsterAI/pull/1138) |
| 技能管理 | #1142 | 技能管理页新增"创建技能"快捷入口 | [#1142](https://github.com/netease-youdao/LobsterAI/pull/1142) |
| Agent 图标一致性 | #1143 | 修复创建 Agent 时默认图标未保存导致侧边栏与列表展示不一致 | [#1143](https://github.com/netease-youdao/LobsterAI/pull/1143) |
| 定时任务 UX | #1144 | 任务列表展示上次执行时间 + 运行态反馈 | [#1144](https://github.com/netease-youdao/LobsterAI/pull/1144) |
| 团队配置模板 | #1145 | 设置页支持导出/导入团队配置 JSON 模板 | [#1145](https://github.com/netease-youdao/LobsterAI/pull/1145) |

---

## 4. 社区热点

今日评论数最多的条目仍是 Issue **#1139**（1 条评论，👍 0）。其余 PR 均无评论互动。社区热度整体处于**低位**。

- **#1139** – [Issue 链接](https://github.com/netease-youdao/LobsterAI/issues/1139)
  - 诉求：用户反馈"创建重名 Agent 后，任务记录获取异常"，属于典型的状态同步/缓存失效问题。该类 Bug 直接影响用户对 Agent 多实例管理的信任感，属于中高优先级。
  - 背后逻辑：所有 open PR 均无 reviewer 反馈、无 LGTM、无维护者留言，表明项目目前的 review 流程处于停滞状态，并非社区缺乏关注。

---

## 5. Bug 与稳定性

### 高优先级：Agent 任务记录丢失（已有 Issue，无对应 PR）

| 严重程度 | 条目 | 现象 | 状态 | 链接 |
|----------|------|------|------|------|
| 🔴 高 | Issue #1139 | 新建重名 Agent 后，UI 已切换但未拉取到该 Agent 的历史任务记录，需切换其他 Agent 再切回才能触发刷新 | OPEN，无对应修复 PR | [链接](https://github.com/netease-youdao/LobsterAI/issues/1139) |

分析：该 Bug 反映前端状态管理在 Agent 切换/创建场景下未正确触发任务列表的重新加载，属于典型的 React/Vue 等 SPA 中 useEffect/watch 依赖缺失或 store 订阅问题。影响范围涉及所有使用 Agent 多实例管理的核心用户场景。

### 中优先级：Agent 默认图标不一致（已有 PR）

- **PR #1143** 修复了创建 Agent 时未填写图标导致侧边栏显示 🦞（兜底）与"我的 Agent"页显示 🤖（兜底）不一致的问题。
- **建议**：维护者优先合并该 PR，因其变更范围小、风险低、明显改善视觉一致性，可作为打破当前积压僵局的良好起点。[PR 链接](https://github.com/netease-youdao/LobsterAI/pull/1143)

### 隐性风险：全部 PR 标记 stale 带来的维护信号

GitHub 自动将所有超过一定天数无活动的 PR/Issue 标记为 stale，**通常意味着缺乏维护者 triage 活动**。若长期无人处理 stale 标签，项目可能面临贡献者流失的风险。

---

## 6. 功能请求与路线图信号

当前 5 条待合并 PR 即代表了项目下一阶段的潜在路线图方向，可归纳为三条主线：

### 🟢 路线图 A：多 Agent/多用户协作能力（强烈信号）
- **PR #1145**（团队配置模板导出/导入）：暗示项目正从单用户工具向团队级产品演进。
- **PR #1143**（Agent 图标一致性）：多 Agent 视觉区分的精细化打磨。

### 🟢 路线图 B：Cowork 会话体验增强（强烈信号）
- **PR #1138**（工具错误高亮 + 跳转最新消息）
- **PR #1144**（定时任务上次执行时间 + 运行态反馈）

这两条 PR 共同指向 **"让用户更清楚地感知 AI 任务的执行过程与结果"**，是当前 AI Agent 类工具的通用 UX 优化方向。

### 🟢 路线图 C：技能（Skills）生态建设
- **PR #1142**（技能管理页快捷创建技能）：降低技能创建门槛，预示官方正在推动 skill-creator 类工具的普及。

**预判**：若维护者启动清理，#1143（低风险 bug fix）和 #1144（纯加性 UX 改进）最有可能被优先合并；#1145（涉及 IPC 新增 dialog:saveTextFile，破坏性边界略大）需额外 review。

---

## 7. 用户反馈摘要

由于今日无新增评论或反馈互动，用户反馈主要从存量 Issue 中提炼：

- **痛点 1 – 多 Agent 管理的状态可靠性**  
  Issue #1139 用户反馈 "切换其他 agent 再切换回来后才能获取任务记录"，反映出在 Agent 重命名/重建这一高频操作下，UI 状态与数据拉取**未做联动**，会引发用户对数据完整性的焦虑。

- **痛点 2 – 跨页面视觉不一致**  
  PR #1143 描述的"侧边栏显示 🦞 而我的 Agent 页显示 🤖"属于产品细节不一致，会让用户怀疑数据是否正确保存。

- **痛点 3 – 缺乏执行过程反馈**  
  PR #1144 与 #1138 共同反映出用户希望"工具调用失败时一眼可见"、"定时任务上次运行时间直观可查"。这是 AI Agent 工具从"能用"走向"好用"的关键体验诉求。

- **满意度信号**：无明确正面反馈，亦无负面吐槽，呈现**社区沉默**状态——既无表扬也无人抱怨撤库，通常意味着用户活跃度本身在下行。

---

## 8. 待处理积压

以下 Issue/PR 已长期未获维护者响应，**建议维护者尽快 triage**：

| 类型 | 编号 | 标题（缩写） | 创建日 | 距今 | 链接 |
|------|------|--------------|--------|------|------|
| Issue | #1139 | Agent 重名后任务记录未拉取 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1139) |
| PR | #1138 | Cowork 工具错误高亮 + 跳转最新 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1138) |
| PR | #1142 | 技能管理页快捷创建技能 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1142) |
| PR | #1143 | 修复 Agent 默认图标不一致 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1143) |
| PR | #1144 | 定时任务显示上次执行时间 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1144) |
| PR | #1145 | 团队配置模板导出/导入 | 2026-03-31 | ~5 个月 | [链接](https://github.com/netease-youdao/LobsterAI/pull/1145) |

**健康度提醒**：
- 5 条 PR 全部积压超过 5 个月，**PR 平均合并周期**显著高于开源社区健康水平（通常 < 30 天）。
- 建议维护者至少进行以下动作以恢复社区信心：
  1. 对 5 条 PR 逐一进行 triage 并留下评审意见（即使短期不合并也应说明原因）；
  2. 优先合并 #1143（最低风险的 Bug 修复）以释放积极信号；
  3. 移除已不再适用的 stale 标签或确认其状态；
  4. 在仓库主页或 Discussions 中同步近期维护计划。

---

*报告生成时间：2026-08-30*  
*数据来源：LobsterAI GitHub 仓库公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：2026-08-30**
**数据来源：github.com/moltis-org/moltis**
**统计周期：过去 24 小时**

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低水位**。过去 24 小时内，仓库仅出现 1 条 Issue 更新（#1246），无 PR 提交、PR 合并或新版本发布。整体来看，项目处于相对平稳的维护期，没有大规模功能合并或重大修复动作。社区互动同样趋冷，唯一活跃的 Issue 尚无评论或点赞反馈，建议维护者主动跟进以保持社区响应度。

**活跃度评级：⭐☆☆☆☆（低）**

---

## 2. 版本发布

本周期无新版本发布。

---

## 3. 项目进展

本周期无 PR 合并或关闭记录，项目代码层面无明显推进。

**推进幅度评估：无实质性进展**

---

## 4. 社区热点

今日无高讨论度 Issues 或 PRs。仅有的 1 条活跃 Issue 互动量极低（0 评论、0 👍），社区关注度冷清。

| 排名 | 议题 | 评论数 | 👍 | 状态 |
|------|------|--------|------|------|
| 1 | [#1246 can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246) | 0 | 0 | OPEN |

**分析**：当前社区缺少有效讨论议题，可能反映出用户群体规模有限，或近期的功能更新未触发新的使用问题。

---

## 5. Bug 与稳定性

### 🐛 严重 Bug 报告（1 条）

**[#1246 [Bug] can't run on sandbox after a node is added](https://github.com/moltis-org/moltis/issues/1246)**
- **报告者**：maop
- **创建时间**：2026-08-28
- **最后更新**：2026-08-29
- **严重程度**：⚠️ **中高**（功能性阻断类 Bug）
- **状态**：OPEN，无 fix PR
- **问题摘要**：用户报告在添加一个节点（node）后，无法在沙箱（sandbox）环境中运行 Moltis。这是一类典型的**回归/状态污染**类 Bug，提示节点添加流程可能未正确重置或兼容沙箱运行环境。

**建议**：
- 维护者优先复现此问题，特别是在沙箱模式下的节点管理路径。
- 检查节点注册逻辑是否影响沙箱启动时的环境隔离。
- 尽快确认是否影响最新发布版本（用户在 preflight checklist 中声称使用最新版本）。

---

## 6. 功能请求与路线图信号

本周期无新功能请求或路线图相关讨论。Issue #1246 虽为 Bug 报告，但其涉及"沙箱 + 多节点"组合场景，间接反映出社区对**沙箱环境下多节点协同运行**存在实际使用需求，未来或可纳入稳定性强化路线图。

---

## 7. 用户反馈摘要

由于 Issue #1246 暂无评论内容，本周期无法从用户对话中提炼更多主观反馈。

**可观察到的使用场景**：
- 用户尝试在沙箱环境中部署多节点 Moltis 实例。
- 用户遵循 issue 模板规范（preflight checklist 已勾选），表明项目文档与提交流程较为成熟。

---

## 8. 待处理积压

| 议题 | 类型 | 状态 | 链接 |
|------|------|------|------|
| #1246 | Bug | OPEN，无响应 | [查看](https://github.com/moltis-org/moltis/issues/1246) |

**提醒**：
- Issue #1246 已存在 2 天（自 2026-08-28 起）但仍无维护者响应，建议尽快 triage 并标注 `bug` 标签或分配负责人。
- 建议在仓库 README 或贡献指南中重申 Bug 响应 SLA，避免沉默积压。

---

## 📊 项目健康度总览

| 维度 | 状态 | 说明 |
|------|------|------|
| 代码活跃度 | 🟡 偏低 | 无 PR 进出 |
| 社区互动 | 🔴 冷清 | Issues 互动为 0 |
| 版本节奏 | ⚪ 无活动 | 无新版本 |
| Bug 响应 | 🔴 待改善 | 活跃 Bug 0 响应 |
| 文档与流程 | 🟢 良好 | 用户遵守提交流程 |

**综合评估**：项目当前处于**静默维护期**，代码与社区两端活跃度均处于近期低位。建议维护者主动巡查开放 Issue 并考虑发布阶段性小版本，以保持项目可见性与用户信任。

---

*报告生成时间：2026-08-30 | 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-30

> 数据周期：过去 24 小时 | 项目：agentscope-ai/CoPaw
> 注：原始数据中 issue/PR 链接显示为 `agentscope-ai/QwenPaw`，按用户指定视为 CoPaw 仓库链接。

---

## 1. 今日速览

CoPaw 仓库过去 24 小时保持中等活跃度：共发生 **10 条 issue 更新（8 活跃 / 2 关闭）** 与 **7 条 PR 更新（全部仍处 OPEN 状态，0 合并）**，**无新版本发布**。今天最显著的特征是**零合并、零发版**，所有 PR 均处于待评审或作者修订阶段，工作流呈现"积压上升"趋势。社区讨论焦点集中在 **QwenPaw Hub 多租户版（v2.2.0）** 的产品方向征求，以及 **MCP / Ark Responses 等真实生产环境的 Bug 反馈**。整体而言，项目活跃度尚可但代码合流速度偏低，存在轻度积压风险。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 当前主线仍以 v2.1.x 系列为最新稳定版本。

---

## 3. 项目进展

️ 今日**无任何 PR 被合并或关闭**，代码主线未产生新提交。值得记录的两条 issue 关闭事件：

- **#6770** — [CLOSED] *Make user Chrome tab lifetime configurable across response cycles*
  ([链接](https://github.com/agentscope-ai/QwenPaw/issues/6770))：增强请求，4 条评论，最终以维护者决策方式关闭（非合并修复），说明该项功能尚未排入近期路线图。
- **#7400** — [CLOSED] *搞错（invalid）*
  ([链接](https://github.com/agentscope-ai/QwenPaw/issues/7400))：作者主动撤回，标记 invalid。

📉 推进度评估：**代码层面前进为 0**，仅社区反馈通道有新结论（Hub 方向、MCP 迁移缺陷定位等），下一里程碑（v2.2.0 Hub）尚未在代码侧启动。

---

## 4. 社区热点

### 🔥 热度排行（按评论数）

| 排名 | 编号 | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub, the multi-tenant edition, is coming in 2.2.0：what should we build next? | 14 | 1 | OPEN |
| 2 | [#6770](https://github.com/agentscope-ai/QwenPaw/issues/6770) | Chrome tab lifetime configurable across response cycles | 4 | 0 | CLOSED |
| 3 | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | MCP legacy migration leaves empty-env clients with a dangling credential ref | 3 | 0 | OPEN |

### 背后诉求分析

- **#7318 是社区当前最大共识议题**：作者 rayrayraykk 代表维护团队正式向社区征求 v2.2.0 Hub 多租户版的功能优先级，引用 #2324（多用户访问与管理员托管 skills）等历史需求。14 条评论表明社区对"团队级 AI 助理"形态具有明确诉求。
- **#7301 反映出 MCP 迁移脚本的实际风险**：用户在上线后遭遇会话级崩溃，说明生产环境的迁移可靠性是真实痛点，而非理论问题。
- **#6770 关闭未修**：反映出维护团队对**会话生命周期管理**类增强项的优先级判定（短期不修），社区可能产生一定预期落差。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 标题 | 是否有修复 PR |
|---|---|---|---|
| 🔴 高 | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | MCP legacy migration leaves empty-env clients with a dangling credential ref — every new session fails with `CredentialNotFoundError` | ❌ 暂无 |
| 🔴 高 | [#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402) | Empty assistant `output_text` blocks persisted in session history poison every subsequent request — Ark Responses API returns 400 `MissingParameter: input.content.text` | ❌ 暂无 |
| ⚪ 澄清 | [#7399](https://github.com/agentscope-ai/QwenPaw/issues/7399) | `daily_users` 时间戳显示"UTC" 实为 AgentScope 设计：naive datetime 即进程本地时间 | N/A（非 Bug） |

**关键发现：**

- 两例高严重度 Bug 均处于"**报告即开放**"状态，未见对应修复 PR 进入评审，**存在用户生产环境持续受损的风险**。
- **#7301** 与 **#7402** 均与历史会话数据持久化层缺陷相关：前者为 MCP 迁移脚本未清理空 env 客户端的凭证引用，后者为 Ark Responses API 协议层对空文本块的容错缺失。两者均影响"开启会话 → 第二次请求"的体验。
- 建议维护者将这两条 issue 标记为 **P1/priority:high** 并进入下个修复批次。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 路线图信号强度 | 备注 |
|---|---|---|---|
| [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户版（v2.2.0）方向征集 | ⭐⭐⭐⭐⭐ 官方背书 | 维护团队主动征集，关联 #2324、#3997 |
| [#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406) | Add official theming support (accent color, font, spacing config) | ⭐⭐ | 桌面端产品成熟度短板；用户当前需修改 `.app` 包内 `index.html` 绕过，升级即丢失 |
| [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | `/btw` 旁问命令（对标 Claude Code v2.1.72） | ⭐⭐⭐ | 与 Claude Code 行为对齐需求，体现竞品压力 |
| [#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405) | Plan Mode（计划模式回归） | ⭐⭐ | 用户对"先看模型计划再执行"工作流的明确怀念 |
| [#7404](https://github.com/agentscope-ai/QwenPaw/issues/7404) | 在 Console DingTalk channel settings 暴露 `card_auto_layout` | ⭐⭐ | 已有功能（#2238 起可用）但缺乏发现性，纯文档/UI 任务 |

**判断：**
- **Hub 多租户 + `/btw` + 桌面主题化** 三项最有可能进入 v2.2.0/2.3.0 路线图，尤其 Hub 已获官方明示。
- **Plan Mode** 目前为问题而非提案，进入路线图需维护者主动发起 RFC。
- **#7404 属低风险快赢**，Console 前端少量改动即可闭环。

---

## 7. 用户反馈摘要

提炼自 issue 评论与正文中的真实声音：

- **"Plan Mode 太好用了，希望回归"**（[#7405](https://github.com/agentscope-ai/QwenPaw/issues/7405)）：用户 CD-IE 明确表示快照回滚是"事后补救"，计划模式能前置预览，UX 价值显著。
- **"桌面端主题被锁死"**（[#7406](https://github.com/agentscope-ai/QwenPaw/issues/7406)）：用户 Skepticwise 反映品牌色（#f07e26）、字体、间距均不可配置，目前只能 hack `.app` 包内 `index.html`，**且每次升级即丢失**——典型的"未被产品化的开放性诉求"。
- **"团队场景才是落地关键"**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）：社区围绕多用户、admin-managed skills、共享记忆展开 14 条讨论，B 端场景被反复点名。
- **"生产环境 MCP 迁移导致全量会话不可用"**（[#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301)）：Bug 报告者 datianguagua 描述 every new session 失败，揭示**迁移脚本的可观测性与回滚能力**存在缺口。
- **"Ark Responses API 对空文本块过于严格"**（[#7402](https://github.com/agentscope-ai/QwenPaw/issues/7402)）：提示与上游协议实现的兼容性差异，社区用户处于被动适配位置。

整体满意度信号：**功能广度被认可，但产品化成熟度（主题、可发现性、迁移工具可靠性）存在明显短板**。

---

## 8. 待处理积压

按停留时长（OPEN 天数）排序的长期未推进项：

| 停留天数 | 编号 | 类型 | 标题 | 状态 |
|---|---|---|---|---|
| **20 天** | [#6874](https://github.com/agentscope-ai/QwenPaw/issues/6874) | PR | feat(mcp): add configurable tool call timeout | Under Review（@AaronZ345） |
| **13 天** | [#7080](https://github.com/agentscope-ai/QwenPaw/issues/7080) | PR | Add optional PowerContext pluggable long-term memory backend | Under Review（@kic635） |
| **7 天** | [#7220](https://github.com/agentscope-ai/QwenPaw/issues/7220) | PR | fix(media): reject oversized image dimensions | OPEN（@mikemikimike） |
| **3 天** | [#7356](https://github.com/agentscope-ai/QwenPaw/issues/7356) | PR | feat(console): add chat scroll lock | OPEN（@AaronZ345） |
| **3 天** | [#7357](https://github.com/agentscope-ai/QwenPaw/issues/7357) | PR | feat(chat): add tool call visibility toggle | OPEN（@AaronZ345） |
| **1 天** | [#7401](https://github.com/agentscope-ai/QwenPaw/issues/7401) | PR | fix(acp): prevent Windows ACP agent stalls during workspace bootstrap | OPEN（@shadowabi） |

**积压健康度评估：** 🟡 黄色预警
- 0 个 PR 被合并当日，新积压持续产生（#7401/#7403）。
- **#6874** 已 Under Review 长达 20 天未推进，**MCP 可配置超时**属基础设施级功能，延迟合并将影响后续 MCP 生态扩展。
- **#7080**（PowerContext 后端）作为可选长期记忆插件具有战略意义，同样等待 13 天。
- 建议维护者**集中评审 AaronZ345 的 MCP/Console 系列 PR（#6874/#7356/#7357）**，可在一次评审内闭环多条增强。

---

### 📊 健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 当日合并 PR | 0 |  偏低 |
| 当日关闭 issue | 2 | 🟢 健康 |
| 待合并 PR 积压 | 7（全部 OPEN） |  上升中 |
| 高严重度未修复 Bug | 2 | 🔴 需关注 |
| 新版本发布 | 0 | 🟢 符合预期（无大版本） |
| 社区讨论度 | 14 条评论（Hub 议题） |  活跃 |

**一句话总结：** CoPaw 今日在社区动员（Hub 2.2.0 方向征集）层面表现积极，但**代码合流完全停滞**，加上 2 例高严重度 Bug 尚未进入修复，建议维护团队在下个工作日优先处理 **#6874（MCP 超时）、#7301（MCP 迁移缺陷）、#7402（Ark 空文本块）** 三条以恢复交付节奏。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-30

> 数据区间：2026-08-29 → 2026-08-30
> 数据源：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

ZeroClaw 仓库在最近 24 小时维持了极高强度的提交与讨论节奏：**18 条 Issue 更新（4 条已关闭）**、**50 条 PR 更新（48 条仍待合并）**，但**无新版本发布**。从指标看，这是一个典型的"重型维护日"：大量安全加固、架构清理、CI 改造类 PR 进入评审通道，但实际合并吞吐较低（48:2），说明维护者把大量精力放在 RFC 评审与 v0.8.5 收尾上。CI 连续两天因 `chacha20` yanked crate 触发 advisory scan 失败（[#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) 已关闭、[#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) 重新打开），属于需要立即修复的稳定性隐患。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前活跃里程碑为 [v0.8.5 finite weekly stabilization line (#9459)](https://github.com/zeroclaw-labs/zeroclaw/issues/9459)，Intake 已于 8 月 4 日冻结，预期 8 月 30 日完成本周切片，但截至本日尚未看到 release tag。

---

## 3. 项目进展

过去 24 小时仅 **2 条 PR 合并/关闭**，其余 48 条仍处于待评审状态，说明项目处于"评审密集但落地缓慢"的阶段。以下为今日关闭的 **4 条 Issue**：

| Issue | 类型 | 说明 |
|---|---|---|
| [#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429) | Bug (P1, CLOSED) | Deepgram/OpenAI 转写 provider 静默丢弃语言提示，非英语语音笔记被跳过 |
| [#8309](https://github.com/zeroclaw-labs/zeroclaw/issues/8309) | Task (P2, CLOSED) | SkillForge 引擎长期无接线，决定保留 manifest 兼容性并清理孤儿代码 |
| [#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237) | Bug (P2, CLOSED) | Telegram 回复线程将会话记忆分桶到 per-thread，导致多轮上下文丢失 |
| [#10427](https://github.com/zeroclaw-labs/zeroclaw/issues/10427) | CI/Security (P1, CLOSED) | 8-28 advisory scan 因 `chacha20` yanked 失败 |

整体看，**安全/记忆/通道**三大类问题获得结案清退，但同样的话题（yanked crate）当天再次以 [#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) 形式复发，**修复合并未真正落库**，需关注后续是否单独 PR 处理依赖更新。

---

## 4. 社区热点

按评论数与社区反应排序，今日最受关注的议题：

| 排名 | 议题 | 评论 / 👍 | 链接 |
|---|---|---|---|
| 🥇 | RFC: Granular sandbox policy（filesystem + network 限制） | **16 评论** | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| 🥈 | Tracker: Maintainer decision queue for RFCs | **14 评论** | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 🥉 | Tracker: A2A protocol interoperability | **10 评论 / 7 👍** | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) |
| 4 | Tracker: Persistent memory parity | 9 评论 | [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) |
| 5 | Tracker: channel/source 共享边界清理 | 5 评论 | [#8583](https://github.com/zeroclaw-labs/zeroclaw/issues/8583) |

**诉求解读：**
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 长期位列讨论榜首，反映出运营者对"应用层路径准入"与"OS 级沙箱（Bubblewrap/Landlock/Seatbelt）"两层策略长期漂移的不满，**双层策略统一化**是真正的痛点。
- [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) 是该仓库**社区点赞最高的议题**（7 👍），表明 A2A 协议原生互操作（与 NanoClaw、OpenClaw、Linux Foundation A2A v0.3.0+ 互通）是社区的核心期望。
- [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) 的高活跃度说明**维护者决策队列本身缺乏透明度**，贡献者希望 RFC 与设计类议题的处理流程更可追踪。

---

## 5. Bug 与稳定性

按严重程度整理今日活跃 Bug：

### 🔴 P1（功能受阻 / 数据缺口）

| Bug | 描述 | Fix 状态 |
|---|---|---|
| [#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) | CI advisory scan 失败（chacha20 yanked）— **今日新开** | ❌ 无对应 fix PR |
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | `AgentEnd` 事件缺失 `cost_usd` 字段，且 channel 路径根本不发射 `AgentEnd` | ❌ 无 fix PR |
| [#10063](https://github.com/zeroclaw-labs/zeroclaw/issues/10063) | Anthropic 兼容网关拒绝 tool result 内的 `image_url` 块 | ✅ [PR #10448](https://github.com/zeroclaw-labs/zeroclaw/pull/10448) `fix(providers): add compatible tool-result image policy` 已提交 |

### 🟠 P2（降级行为）

| Bug | 描述 | Fix 状态 |
|---|---|---|
| [#10437](https://github.com/zeroclaw-labs/zeroclaw/issues/10437) | ZeroCode TUI 在滚动时把 SGR mouse-wheel 报告残段写入编辑器 — **今日新开** | ✅ [PR #10440](https://github.com/zeroclaw-labs/zeroclaw/pull/10440) `fix(zerocode): recover split SGR wheel input` 已提交 |
| [#10432](https://github.com/zeroclaw-labs/zeroclaw/issues/10432) | ElevenLabs TTS API key 头未标记为 sensitive，存在日志泄露风险 | ❌ 无 fix PR |

> 稳定性信号：48:2 的 PR 合并比表明评审积压明显，**P1 Bug 的修复链路可能比预期长**。

---

## 6. 功能请求与路线图信号

结合今日活跃的 enhancement 类 PR 与 tracker，未来 1–2 个版本值得关注的演进方向：

### 短期可落地（已有 PR 在审）
- **Webhook SSE 流式输出** — [#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)：当 `stream: true` + `Accept: text/event-stream` 时，`POST /webhook` 应通过 SSE 流式返回 agent-loop tokens。**已被识别为 Path A worker 关键路径**。
- **家庭边缘 Mesh（pull workers + signed receipts）** — [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)：将"local-first + 多硬件"边界扩展为可联邦的 worker 网。
- **A2A 协议互操作** — [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)：路线图级 tracker，社区认可度高。
- **持久记忆跨会话平价** — [#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)：7 个未结命名项，4 个 Issue + 3 个 PR；与 [PR #10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252)（分类作用域跨 agent 授权）联动。
- **Gemini speech-to-speech broker 通道** — [#10406](https://github.com/zeroclaw-labs/zeroclaw/issues/10406)（policy: [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)），为已投票通过的设计进入实施阶段。

### 安全加固方向（评审中）
- **Skill HTTP egress 边界** — [PR #10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369)：固定允许地址、关闭 ambient proxy/redirect、1 MiB 文本上限。
- **Git shell policy 加固** — [PR #9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678)（XL）：统一命令字归一化、风险分类与环境赋值校验。
- **Cron 工具按调用 agent 隔离** — [PR #9948](https://github.com/zeroclaw-labs/zeroclaw/pull/9948)：修复跨 agent 越权读取/触发 cron。
- **Memory 跨 agent 分类授权** — [PR #10252](https://github.com/zeroclaw-labs/zeroclaw/pull/10252)（XL）。
- **桌面守护进程安全日志** — [PR #10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236)（XL）。
- **响应缓存文件权限硬化** — [PR #10091](https://github.com/zeroclaw-labs/zeroclaw/pull/10091)（`do-not-merge`，待 maintainer-review）。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼的真实用户痛点：

- **🗣️ 多语言语音体验差**（[#10429](https://github.com/zeroclaw-labs/zeroclaw/issues/10429)）：意大利语 Telegram 语音笔记被静默丢弃，用户看不到任何错误提示，仅看到 `INFO` 级日志，体验极差。
- **🗣️ 多轮上下文断裂**（[#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237)）：Telegram 回复线程把同一会话拆成 per-thread 历史桶，导致 agent 看不到上下文，使用者需要反复重发信息。
- **🗣️ 跨设备资源未被利用**（[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)）：许多运营者拥有多台闲置 PC、NAS、SBC，但 ZeroClaw 仍被绑定在单主机，无法形成家庭级联邦。
- **🗣️ Webhook 调用延迟感知差**（[#10419](https://github.com/zeroclaw-labs/zeroclaw/issues/10419)）：Hosted Path A worker 等不到首个 token，体验不到流式进展。
- **🗣️ 成本可见性缺失**（[#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539)）：CLI 和 agent 路径下 `AgentEnd` 都把 `cost_usd` 置为 `None`，用户无法对账。

满意/正面信号：用户对 [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566)（A2A 协议互操作）表达出明显的支持（7 👍），说明社区认可"开放协议互通"的方向。

---

## 8. 待处理积压（需维护者关注）

以下 Issue/PR **长期未关闭且优先级较高**，建议维护者重点关注：

| 编号 | 类型 | 创建日 | 风险 | 备注 |
|---|---|---|---|---|
| [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | PR（Git shell policy 加固） | 2026-08-02 | high | XL 改动，仍 `needs-maintainer-review`，阻塞安全基线 |
| [#9196](https://github.com/zeroclaw-labs/zeroclaw/pull/9196) | PR（MCP resource blob + 预算预检） | 2026-07-20 | high | L 改动，跟进 #9179 |
| [#9638](https://github.com/zeroclaw-labs/zeroclaw/pull/9638) | PR（ACP standalone 默认 agent） | 2026-08-01 | medium | 状态 `blocked`，`do-not-merge` |
| [#10094](https://github.com/zeroclaw-labs/zeroclaw/pull/10094) | PR（CI: 强制 PostgreSQL memory 测试） | 2026-08-18 | high | `needs-author-action` |
| [#10029](https://github.com/zeroclaw-labs/zeroclaw/pull/10029) | PR（webhook 别名保留） | 2026-08-16 | medium | `needs-author-action` |
| [#8539](https://github.com/zeroclaw-labs/zeroclaw/issues/8539) | Issue（AgentEnd cost_usd 缺失） | 2026-06-30 | high | P1 一个月仍未配 fix |
| [#10447](https://github.com/zeroclaw-labs/zeroclaw/issues/10447) | Issue（CI advisory 复发） | 2026-08-29 | high | 同一根因 24h 内复发两次

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*