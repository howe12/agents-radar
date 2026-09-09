# OpenClaw 生态日报 2026-09-09

> Issues: 484 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-09 02:34 UTC

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

# OpenClaw 项目日报 · 2026-09-09

> 数据来源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)
> 统计窗口：过去 24 小时（2026-09-08 → 2026-09-09 UTC）

---

## 1. 今日速览

OpenClaw 过去 24 小时维持高位活跃：484 条 Issue 更新（新开/活跃 268、已关闭 216）、500 条 PR 更新（待合并 223、已合并/关闭 277），并按计划发布 **v2026.9.3**。从合并/关闭率（PR ~55%、Issue ~45%）和当日一口气合入的多项 OAuth / Gateway / Doctor 修复来看，项目维护节奏健康，**核心问题集中在「升级安全」「Codex OAuth 刷新」「多 Agent / 会话持久化」「Windows 安装链」四条主线**。社区情绪整体偏"建设性抱怨"——多数高分 Issue 同时附有可复现信息或已链接 PR，等待合并或维护者决策。

---

## 2. 版本发布

### v2026.9.3 — openclaw 2026.9.3

**定位**：紧随 2026.9.1 / 2026.9.2 的连续翻车后，本次属于**稳定性修复版**而非功能版，重点在"如何让升级不再半路把 Gateway 撂倒"。

**Highlights**（基于 Release notes 摘要）：
- **Safer updates**：核心与插件变更先在 isolated candidate state 进行 "rehearsal"（彩排），验证通过后再激活。
- **Migrations**：支持 2026.9.2 的合资格迁移路径（`2026.9.2 → 2026.9.3` 的 rollback/forward 应已经过测试）。
- **Recovery**：恢复被遗弃的 update 记录而不打断健康的匹配 Gateway（解决 9 月以来频繁出现的 "update 在 requested/running 永远卡住" 问题）。
- 关联 Issue：[#136997](https://github.com/openclaw/openclaw/issues/136997)
- 相关 PR（节选）：[#138839](https://github.com/openclaw/openclaw/pull/138839), [#141109](https://github.com/openclaw/openclaw/pull/141109), [#141175](https://github.com/openclaw/openclaw/pull/141175), [#1415xx]

**升级注意**：
- 任何从 2026.9.1 / 2026.9.2 直接升上来的 Windows / multi-agent / OCM-managed 用户，建议先看 [Doctor 报告](https://github.com/openclaw/openclaw/issues/136203)、再升。
- 如你正卡在 [#139714](https://github.com/openclaw/openclaw/issues/139714)（`update_runs` 行永远 finalize 不了）或 [#141617](https://github.com/openclaw/openclaw/issues/141617)（npm update requested/running stuck），2026.9.3 是目标修复版本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

> 当日 PR 关闭/合并总数 277 条（占待处理 500 的 55%），维护带宽持续在线。以下为对项目健康度影响最大的合并项：

| 方向 | PR | 摘要 | 影响 |
|---|---|---|---|
| **Codex OAuth** | [#142628](https://github.com/openclaw/openclaw/pull/142628) ✅（supersedes [#122566](https://github.com/openclaw/openclaw/pull/122566) ✅） | `fix(codex): reuse completed OAuth access rotations` | 直接关闭 P0 升级阻塞类问题 [#89278](https://github.com/openclaw/openclaw/issues/89278)（Codex OAuth 刷新成功但 10s 超时）；同步合并 [#122566](https://github.com/openclaw/openclaw/pull/122566) 作为前置依赖 |
| **通道恢复** | [#142064](https://github.com/openclaw/openclaw/pull/142064) ✅ | `fix(channels): stop ingress retry loops during gateway suspension` | 修复 Gateway 暂停期间通道消息被反复入队的问题，配合 [#142768](https://github.com/openclaw/openclaw/pull/142768)（draining ingress claim）形成对 #142013 的双重修复 |
| **网关语义** | [#141268](https://github.com/openclaw/openclaw/pull/141268) ✅ | `fix(gateway): preserve length in chat completion responses` | Chat Completions 端点在 partial answer 触顶时保留 `length` 而非误报 `stop`；解决 [#141264](https://github.com/openclaw/openclaw/issues/141264) |
| **CLI 可观测性** | [#140920](https://github.com/openclaw/openclaw/pull/140920) ✅ | `feat(cli): add --follow to channel logs` | `openclaw channels logs` 增加 `--follow` 行为；运维 / live diagnose 闭环更顺 ([#130198](https://github.com/openclaw/openclaw/issues/130198)) |
| **Doctor 性能** | [#142669](https://github.com/openclaw/openclaw/pull/142669) ✅ | `fix: avoid redundant database scans during Doctor schema repair` | 健康数据库上的重复整库扫描被消除 |
| **测试稳定性** | [#142785](https://github.com/openclaw/openclaw/pull/142785) ✅, [#142777](https://github.com/openclaw/openclaw/pull/142777) ✅, [#142757](https://github.com/openclaw/openclaw/pull/142757) ✅ | 隔离 doctor / chat-view-model 测试 fixture | 解决了主 CI 最慢的 12.7s / 15.4s 用例，CI 反馈循环更快 |
| **文档可读性** | [#142703](https://github.com/openclaw/openclaw/pull/142703) ✅, [#142779](https://github.com/openclaw/openclaw/pull/142779) ✅, [#142368](https://github.com/openclaw/openclaw/pull/142368) ✅, [#142705](https://github.com/openclaw/openclaw/pull/142705) ✅ | 拆分 plugins/nodes/exec 章节、解释 active-memory 工具授权 | 解决了 7 万+字符单页 markdown 的"读者迷路"问题；面向 ops / plugin 开发者更友好 |
| **UI 一致性** | [#142694](https://github.com/openclaw/openclaw/pull/142694) ✅, [#142383](https://github.com/openclaw/openclaw/pull/142383) ✅, [#142786](https://github.com/openclaw/openclaw/pull/142786) ✅ | 头像对齐、冷启动骨架协调、locale translator 输入追踪 | Web UI 体感打磨 |

**进展评估**：✅ Codex OAuth P0、Channel ingress retry、Gateway Chat Completions 语义三项高影响修复都已落地；测试 / 文档 / UI 一次性补齐，整体**向前推进约 1 个稳定版本的安全距离**——为 2026.9.3 的"安全升级"主题提供了必要的底层修复。

---

## 4. 社区热点（讨论最活跃）

按 24 小时评论数排序，前 10 名主要集中在 **LLM Provider 错误处理、Codex 集成、Windows 安装链、Session / Update 状态机**四类：

| # | Issue / PR | 评论 | 关注点 |
|---|---|---|---|
| 1 | [#135111](https://github.com/openclaw/openclaw/issues/135111) | 23 | 🐚 **Intermittent "Provider completed tool call with malformed JSON arguments"**（v2026.8.1 回归，claude-sonnet-5，~6 次可复现但与具体文件/工具无关） |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | 🦐 **OpenClaw leaks unreaped hook/tool child processes**（zombie 累积，长时间运行性能退化） |
| 3 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | 14 | 🦐 **Multi-agent orchestration is unstable**（并发 add/config 互踩、session-lock 失败、detached child 不收尾） |
| 4 | [#119720](https://github.com/openclaw/openclaw/openclaw/issues/119720) | 14 | 🦞 **同步 agent 持久化阻塞 Gateway event loop**（已通过 #140231/#138984 局部修复，但仍需主从评估） |
| 5 | [#85251](https://github.com/openclaw/openclaw/issues/85251) | 13 | 🐚 **Codex app-server `notification:turn/started` 后沉默**，embedded run 卡满 stuck-session 窗口（360s） |
| 6 | [#89278](https://github.com/openclaw/openclaw/issues/89278) | 12 | 🦞 P0 **Codex OAuth 刷新成功但 cron/heartbeat 10s 超时**（已有 fix 落地，见 §3） |
| 7 | [#137813](https://github.com/openclaw/openclaw/issues/137813) | 12 | 🦪 **Windows gateway 2026.9.1 后无法启动**，`--task-supervisor` 静默退出 0 ✅ **已关闭** |
| 8 | [#139714](https://github.com/openclaw/openclaw/issues/139714) | 12 | 🦞 **post-core update resume 留下未 finalize 的 update_runs**，`status` 永远 "update in progress" |
| 9 | [#137927](https://github.com/openclaw/openclaw/issues/137927) | 12 | 🦐 **Telegram 泄漏 OpenClaw 内部 context block**（安全 / 隐私影响） ✅ **已关闭** |
| 10 | [#142037](https://github.com/openclaw/openclaw/issues/142037) | 10 | 🦞 **Slack thread mismatch + #113554 rescue 不触发**（2026.9.2 embedded 路由 bookkeeping） |

**诉求解读**：
- 用户最强烈的信号是

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析报告

**报告日期**：2026-09-09
**数据窗口**：过去 24 小时（基于各项目 GitHub 公开数据）
**覆盖项目**：13 个（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态当前处于**「稳定性巩固期 + 协议标准化攻坚期」**的并行阶段：一方面，OpenClaw v2026.9.3 与 CoPaw v2.2.1-beta.1 等少数项目仍维持高频发版节奏，多数中等规模项目则进入「Issue 清零 + 升级链适配」的质量巩固模式；另一方面，ZeroClaw、IronClaw、OpenClaw 等项目围绕 MCP 协议深化、OpenAI Responses 适配、RFC 治理改革展开密集讨论，**结构性议题成为下一阶段的主战场**。整体活跃度呈现明显的"两极分化"——头部项目（OpenClaw、CoPaw、ZeroClaw、Hermes）单日 Issue + PR 量在 50~500 区间，中小型项目（PicoClaw、NanoClaw、ZeptoClaw、IronClaw）则在 5~15 区间精打细磨，**生态的马太效应正在加速形成**。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | Release | 维护者节奏 | 综合健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 484（活跃 268 / 关闭 216，关闭率 ~45%） | 500（待合并 223 / 合并 277，合并率 ~55%） | **v2026.9.3**（稳定性修复版） | 高位活跃，结构化发版 | 🟢 高 |
| **CoPaw/QwenPaw** | 27（新开 15 / 关闭 12，关闭率 ~44%） | 44（待合并 20 / 合并 24，合并率 ~55%） | **v2.2.1-beta.1**（首个 Beta） | 2.2.0 后高密度修复 | 🟢 高 |
| **ZeroClaw** | 27 | 50（仅 5 条关闭 ~10%） | 无 | RFC 治理瓶颈致合并放缓 | 🟡 中（合并率偏低） |
| **Hermes Agent** | 50（活跃 44 / 关闭 6） | 50（待合并 48 / 合并 2） | 无（v0.21.1 残留缺陷清理） | 维护者带宽接近饱和 | 🟡 中 |
| **NanoBot** | 2（均关闭） | 39（OPEN 26 / 合并 13） | 无 | 高强度维护、低争议 | 🟢 良 |
| **IronClaw** | 2（新开） | 11（5 关闭） | 无 | 单点贡献（10/11 来自同一作者） | 🟡 中（多样性低） |
| **PicoClaw** | 5（1 关闭） | 8（1 关闭） | 无 | 集中式 Bug 修复 | 🟡 中 |
| **NanoClaw** | 2 | 10（2 关闭） | 无 | V1→V2 迁移期 | 🟢 良 |
| **LobsterAI** | 0 | 9（全部关闭） | 无 | "集中收尾"模式 | 🟢 良 |
| **ZeptoClaw** | 2（2 关闭） | 2（1 关闭 / 1 待合并） | 无 | 安全债清偿期 | 🟢 良 |
| NullClaw | 0 | 0 | 无 | — | ⚪ 无活动 |
| TinyClaw | 0 | 0 | 无 | — | ⚪ 无活动 |
| Moltis | 0 | 0 | 无 | — | ⚪ 无活动 |

**关键观察**：
- 仅 **2/13 项目（OpenClaw、CoPaw）当日有新版本发布**，反映行业普遍从"功能扩展"转入"质量巩固"。
- **ZeroClaw 的 PR 关闭率仅 10%**，与其 RFC 投票窗口改革讨论（#10549）直接相关，属结构性瓶颈而非维护者懈怠。
- **Hermes Agent 待合并 PR 高达 48 条**，提示该项目的"PR 评审速度"已成为下一阶段最大风险点。

---

## 3. OpenClaw 在生态中的定位

作为本报告的**核心参照系**，OpenClaw 在生态中占据"事实标准 + 上下游枢纽"的双重位置：

| 维度 | OpenClaw 表现 | 横向对比 |
|---|---|---|
| **绝对活跃度** | 484 Issue + 500 PR（24h），约为 Hermes/ZeroClaw 的 10 倍 | 与 LobsterAI 形成"上游 → 下游"适配关系 |
| **发版节奏** | v2026.9.1 → v2026.9.2 → v2026.9.3 连续三版，结构化升级链 | 仅 CoPaw 维持相近节奏，但发版频次低于 OpenClaw |
| **生态辐射力** | LobsterAI 当日一次性合并 7 个 PR 专门适配 v2026.8.1 | 唯一被其他项目作为"上游依赖"的项目 |
| **架构成熟度** | OAuth/Gateway/Doctor/Channel 四条主线并列收敛 | Hermes、PicoClaw、NanoClaw 仍处于"修补单个痛点"阶段 |
| **协议参与度** | Codex OAuth、Channel Ingress、Doctor Schema 全线推进 | ZeroClaw 主攻 OpenAI Responses、IronClaw 主攻 MCP 隔离 |
| **社区规模** | Issue 评论 TOP10 单条最高 23 条，TOP3 均 14+ 条 | NanoBot/Hermes 多数 Issue 评论 < 5 条 |

**技术路线差异**：
- vs. **ZeroClaw（RFC 驱动治理）**：OpenClaw 更偏"以代码落地为优先"，而 ZeroClaw 将大量精力投入架构 RFC 投票（#9487 已 Rev.5、#9488 已 Rev.10）。
- vs. **Hermes Agent（多 Profile 架构）**：OpenClaw 的"单一 Gateway + 多 Channel"模型与 Hermes 的"Per-Profile Projects/State"模型形成鲜明对比——后者在多用户隔离上有优势，前者在单用户多端体验上更连贯。
- vs. **CoPaw/QwenPaw（Qwen 生态）**：OpenClaw 走"通用 OpenAI 兼容 + 多 Provider 适配"路线，CoPaw 则深度绑定 DashScope/Qwen 协议族；二者 OpenAI 协议差异在 #7621/#7636（PDF block 归一化）等 PR 中得到统一处理。

---

## 4. 共同关注的技术方向

通过对当日各项目的 Issue/PR 主题聚类分析，以下 7 个方向呈现出**跨项目趋同**的特征：

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **OAuth / 凭据生命周期管理** | OpenClaw (#89278 Codex OAuth 刷新)、Hermes (#62333 refresh_token 擦除)、NanoBot (#5638 Copilot 持久化)、IronClaw (#6778 跨用户元数据暴露)、ZeptoClaw (#652/#674 secret 权限+票据化) | OAuth 刷新失败、长生命周期 token 进入 access log、跨用户工具目录可见性等成为系统性痛点 |
| **多 Provider / 多模态协议兼容** | OpenClaw (#135111 工具调用 malformed JSON)、CoPaw (#7621/#7636 PDF block 归一化)、ZeroClaw (#10704-#10708 OpenAI Responses 簇)、IronClaw (#8087 上下文窗口可覆盖) | 不同 Provider 对 `file`/`data` block、async tool、reasoning effort 的支持差异日益突出 |
| **Telegram / IM 通道健壮性** | OpenClaw (#137927 内部 context 泄露)、PicoClaw (#3343 22.8 万次 edit 滥用、#3356/#3357 引用/隐式 mention)、NanoBot (#5707/#5711/#5706 命令兼容与通知收敛)、ZeroClaw (#5514/#10620 多模态分组与语音丢弃) | 通道层"用户感知一致性"成为部署量最大渠道的高频踩坑点 |
| **升级 / 更新链可靠性** | OpenClaw (v2026.9.3 整体主题)、Hermes (#105145/#105587/#106097 Windows Desktop)、LobsterAI (v2026.8.1 适配 7 个 PR 集群)、NanoClaw (#3441/#3750 atomic write) | 跨大版本升级时 SDK 路径变化、文件锁、原子写入、migration script 缺陷是普遍问题 |
| **内存 / 资源无界增长** | OpenClaw (#97616 zombie 进程)、NanoBot (#5663/#5664/#5665 缓存有界化)、NanoClaw (#3735 archive 无界增长)、Hermes (#106215 Dashboard PTY 占满 executor) | 长期运行场景（容器/边缘/fleet）的资源治理成为 P1 类风险 |
| **MCP 协议深化** | IronClaw (#6778/#8083/#8089/#8090 hosted-MCP 多租户隔离与 `_meta` attribution SEP-414)、Hermes (#62333 MCP OAuth)、CoPaw (#7620/#7627 MCP 401 误判) | MCP 已从"协议引入"进入"多租户安全 + 调用归属"的精细化阶段 |
| **多 Agent / 多 Session 状态机** | OpenClaw (#43367

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-09

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 统计周期：过去 24 小时

---

## 一、今日速览

NanoBot 今日呈"高强度维护、低争议"状态：**39 条 PR 更新**、**2 条 Issue 已关闭**、**0 个新版本发布**。整体活跃度偏高（PR 中 26 条仍处于 OPEN 状态，13 条已合并/关闭），且绝大多数新提交的 PR 集中在两个方向：**WebUI/TUI 的体验打磨**与**多项内存/缓存无界增长的 Bug 修复**。值得关注的隐忧是，期内没有新 Issue 被创建，2 条 Issue 均已关闭，社区输入端相对安静；同时 P1 级 PR 仍有 1 条未合并（#5234），需要维护者跟进。

---

## 二、版本发布

**无新版本发布。** 建议关注以下 P1/P2 PR 合入后的版本预告：
- #5234 [P1] mst-python 元搜索 provider
- #5437 [P2] Serply Web Search provider

---

## 三、项目进展（今日合并/关闭的 PR）

今日共 **13 条 PR 已合并/关闭**，包含 1 条显眼的渠道/集成修复：

| PR | 类型 | 摘要 | 影响范围 |
|---|---|---|---|
| [#5709](https://github.com/HKUDS/nanobot/pull/5709) | **fix(codex)** | 刷新 OpenAI Codex 模型目录的 `client_version` 至 `0.153.4`，让 GPT-6-Astra 等新模型能正常出现在选择器中 | OpenAI Codex 用户；解决模型目录与客户端版本不匹配问题 |
| 其余 12 条 | 多为依赖清理、冲突解决或重复 PR 关闭 | — | — |

**进展评估：** 今日 PR 合并量属于正常维护节拍，未见重大架构变更。最值得称道的是 [#5709](https://github.com/HKUDS/nanobot/pull/5709)，它一次性解决了"模型可达性"这一类隐性体验问题（用户看不到新模型，常被误判为"功能缺失"）。

---

## 四、社区热点（讨论与活跃度分析）

本期 Issues 评论数普遍偏低（最多 3 条），但 PR 端出现了显著的"主题集群"现象：

### 🔥 WebUI 体验升级集群（来自 chengyongru）
今日有 **5 条 PR** 来自同一作者，形成了一组协同改进：

- [#5704](https://github.com/HKUDS/nanobot/pull/5704) — 扩展 Settings 面板至 48 个字段，新增自动保存与"不重启即可应用"
- [#5710](https://github.com/HKUDS/nanobot/pull/5710) — 重构侧边栏：分离 Project / Topic / Automation
- [#5703](https://github.com/HKUDS/nanobot/pull/5703) — 性能优化：减少重复 DOM 扫描与历史渲染
- [#5705](https://github.com/HKUDS/nanobot/pull/5705) — TUI 新增 `/usage` 面板（context meter + 模型轮次图表）
- [#5498](https://github.com/HKUDS/nanobot/pull/5498) — Agent TUI 配置标签列对齐、中点替换为空格

**诉求解读：** 反映出社区对"无需重启即可热更新配置"、"UI 性能与可发现性"的强烈需求。

### 🔥 缓存/内存无界增长修复集群（来自 Shizoqua）
4 条独立 PR 同时处理"无界字典/集合"这一类系统性问题：

- [#5664](https://github.com/HKUDS/nanobot/pull/5664) — `AutoCompact._summaries` 缓存有界化
- [#5665](https://github.com/HKUDS/nanobot/pull/5665) — MCP OAuth flow 注册表容量限制
- [#5663](https://github.com/HKUDS/nanobot/pull/5663) — Mattermost thread 上下文缓存有界化
- [#5638](https://github.com/HKUDS/nanobot/pull/5638) — GitHub Copilot OAuth token 持久化到 data 目录

**诉求解读：** 这是一组"长期运行场景下的资源治理"修复，对部署在边缘/容器环境的用户尤为关键。

### 🔥 Telegram 渠道体验集群（来自 Naster17）
3 条 PR 集中处理 `/` 命令兼容性与通知收敛：
- [#5711](https://github.com/HKUDS/nanobot/pull/5711) — 连字符命令转下划线（Telegram 协议要求 `[a-z0-9_]`）
- [#5707](https://github.com/HKUDS/nanobot/pull/5707) — `/compact` 与 `/evaluator-prompt` 路由修复
- [#5706](https://github.com/HKUDS/nanobot/pull/5706) — 上下文压缩通知合并为一条编辑消息

**诉求解读：** Telegram 是部署量最大的渠道之一，命令不可点击/被丢弃是高频踩坑点。

---

## 五、Bug 与稳定性

按严重程度排序（结合 PR 标签中的 `priority` 与问题影响面）：

### 🟠 P1（较高严重度）
| Issue/PR | 问题 | 是否有 fix |
|---|---|---|
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | — | （功能集成，非 Bug；但仍 OPEN，**维护者请优先 review**） |

### 🟡 P2（中等严重度，待修）

| 类型 | PR | 问题 | 修复要点 |
|---|---|---|---|
| **内存泄漏** | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | 闲置会话摘要缓存无界 | 改为有界字典 |
| **内存泄漏** | [#5665](https://github.com/HKUDS/nanobot/pull/5665) | MCP OAuth flow 重启累积 | 加容量上限 |
| **内存泄漏** | [#5663](https://github.com/HKUDS/nanobot/pull/5663) | Mattermost thread 集合永不清理 | 改为有界 set |
| **编码错误** | [#5708](https://github.com/HKUDS/nanobot/pull/5708) | 流式 exec 输出 UTF-8 跨 chunk 损坏 | 增量解码器 + EOF flush |
| **命令丢消息** | [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Telegram `/compact`、`/evaluator-prompt` 被静默丢弃 | 路由正则补全 |
| **协议不兼容** | [#5711](https://github.com/HKUDS/nanobot/pull/5711) | Telegram 不识别连字符命令 | 替换为下划线 |
| **OAuth 持久化** | [#5638](https://github.com/HKUDS/nanobot/pull/5638) | Copilot token 在容器中不可持久 | 写入 Nanobot data dir |
| **WebUI 噪音** | [#5706](https://github.com/HKUDS/nanobot/pull/5706) | 上下文压缩刷屏两条消息 | 合并为单条 edit |
| **预览截断** | [#5590](https://github.com/HKUDS/nanobot/pull/5590) | 大工具结果前 1200 字符可能错过关键字段 | 改用结构化摘要 |
| **WebUI 性能** | [#5703](https://github.com/HKUDS/nanobot/pull/5703) | 长对话重复扫描 DOM | 索引一次 + 渲染上限 |

**观察：** 全部 P2 Bug **均已有对应的修复 PR**，且都附带了测试。修复供给侧非常充足。

---

## 六、功能请求与路线图信号

### 来自 Issue 的请求
- [#5693](https://github.com/HKUDS/nanobot/issues/5693) — **无人零售/IoT 边缘部署**：呼吁更轻量部署方案与中文文档（已关闭，看起来偏离主线 Roadmap）
- [#5696](https://github.com/HKUDS/nanobot/issues/5696) — **首次贡献者寻求入门 Issue**（已关闭）

### 来自 PR 的强信号（很可能进入下一版本）

| 提案 | PR | 类型 | 概率评估 |
|---|---|---|---|
| 自定义 Telegram Bot API 端点 | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 渠道能力 | ⭐⭐⭐⭐ 解决企业内部代理、自托管场景 |
| mst-python 元搜索 | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 新 provider | ⭐⭐⭐⭐ P1 标签，RRF 聚合提升搜索质量 |
| Serply 搜索 provider | [#5437](https://github.com/HKUDS/nanobot/pull/5437) | 新 provider | ⭐⭐⭐ 标准 provider 扩展 |
| Telegram 可复用贴纸回复 | [#5387](https://github.com/HKUDS/nanobot/pull/5387) | 渠道能力 | ⭐⭐⭐ 增强表达力 |
| TUI 配置列对齐 | [#5498](https://github.com/HKUDS/nanobot/pull/5498) | UX | ⭐⭐⭐⭐⭐ |

---

## 七、用户反馈摘要

由于本期 Issues 评论数极少（最多 3 条），可提取的"真实痛点"信号有限，主要来自已合并的 PR 描述与功能请求：

1. **"AI 自动提交的 Issue 噪音"** — [#5693](https://github.com/HKUDS/nanobot/issues/5693) 明确标注由"AI 军团·笔芯秘书 自动提交"，属于机器化外联，对核心社区价值低，已被快速关闭。
2. **"首次贡献者友好度"** — [#5696](https://github.com/HKUDS/nanobot/issues/5696) 提示项目需要更显眼的 `good first issue` 标签体系（项目目前标签分类已较成熟，但**这类 Issue 通常需要维护者手动标记**）。
3. **"长会话崩溃/卡顿"隐含痛点** — 多个缓存无界修复（#5663/#5664/#5665）间接说明：**长期运行的容器/边缘部署确实遇到了 OOM 风险**，这是目前最实质的用户侧痛点。
4. **"Telegram 命令体验差"** — 连字符命令不可点击、上下文压缩刷屏（#5711、#5706、#5707）三连修，反映 Telegram 渠道使用量可观。

---

## 八、待处理积压（提醒维护者关注）

### 🔴 长期未合入的高价值 PR

| PR | 创建日期 | 等待天数 | 建议 |
|---|---|---|---|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 2026-07-14 | **约 57 天** | 自托管 Telegram Bot API，应优先评估合入 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 2026-08-03 | **约 37 天** | **P1**，mst-python 元搜索，标注 conflict |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | 2026-08-19 | **约 21 天** | Serply provider，标注 conflict |
| [#5387](https://github.com/HKUDS/nanobot/pull/5387) | 2026-08-13 | **约 27 天** | Telegram 贴纸，标注 conflict |
| [#5590](https://github.com/HKUDS/nanobot/pull/5590) | 2026-08-28 | **约 12 天** | 工具结果摘要优化，标注 conflict |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 2026-07-28 | **约 43 天** | subagent 部分完成标记，回归修复 |

### 🟡 维护者工作建议
- **conflict 标记 PR 集中爆发**（4 条以上），建议维护者发起一轮 rebase 大扫除，避免长期积压导致作者流失。
- **Issue 端输入明显减弱**，可考虑在 README 增加 `good first issue` 标签的显式承诺，或主动将积压的 PR 任务转为 Issue 以吸收新贡献者（呼应 [#5696](https://github.com/HKUDS/nanobot/issues/5696)）。

---

## 九、项目健康度总评

| 维度 | 评级 | 说明 |
|---|---|---|
| 提交活跃度 | 🟢 高 | 39 条 PR / 日，单日新提交量充足 |
| 维护者响应 | 🟡 中 | 13 条关闭，但 P1 PR 已等待 37 天 |
| Bug 修复供给 | 🟢 优 | P2 Bug 全部有 fix PR 跟进 |
| 版本节奏 | ⚪ 无 | 24 小时内无发布，需关注下个 tag |
| 社区互动 | 🟡 偏低 | Issue 端输入骤减，AI 生成噪音占多数 |
| 长期健康风险 | 🟡 中 | conflict 标记 PR 累积、首次贡献者引导缺失 |

**综合判断：** 项目处于**密集打磨期**，内部贡献者驱动明显（特别是 chengyongru、Shizoqua、Naster17 三位），但**外部社区引入**与**版本发布节奏**有改善空间。建议维护者本周期重点推进：(1) P1 PR #5234 评审；(2) conflict PR 集中 rebase；(3) 下一个版本号规划。

---

*报告生成时间：2026-09-09 · 数据快照基于 GitHub 公开 API*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期**：2026-09-09
**数据范围**：过去 24 小时

---

## 1. 今日速览

Hermes Agent 仓库今日呈现**高活跃、高并发缺陷处理**的状态：50 条 Issue 更新（44 条活跃/新开，6 条已关闭），50 条 PR 更新（48 条待合并，2 条已合并/关闭），但**无新版本发布**。从主题分布看，**Windows Desktop 更新链路缺陷**是今日最集中的热点（连续 3 个相关 Issue 关闭），而 **#66616 Skills Index Watchdog**（自动巡检报告）以 181 条评论持续居榜首。整体项目仍处于 v0.21.x 的稳定期 + 多平台生态扩展期，但 0.21.1 引入的回归问题尚未完全平息。社区贡献活跃，单日 50 条 PR 流量显示多团队并行修复/迭代中。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前主线版本为 **v0.21.1**，从今日多个 P1/P2 缺陷报告（#105145、#105587、#106166、#106005 等）来看，v0.21.1 仍存在若干需要修复合并的回归问题，建议用户保持关注下一个补丁版本（如 v0.21.2）的发布动态。

---

## 3. 项目进展

今日合并/关闭的关键 PR 与 Issue 共 8 项，主要集中在 **Windows Desktop 更新链路修复** 与 **配置/可观测性改进**：

| 编号 | 类型 | 内容 | 状态 |
|------|------|------|------|
| [#105145](https://github.com/nousresearch/hermes-agent/issues/105145) | Bug | Windows desktop-driven `hermes update` 验证路径错位 | ✅ 已关闭 |
| [#105587](https://github.com/nousresearch/hermes-agent/issues/105587) | Bug | `verify_windows_desktop_update` 假阳性"executable missing" | ✅ 已关闭 |
| [#106097](https://github.com/nousresearch/hermes-agent/issues/106097) | Bug | Windows 验证步骤 cwd=$HERMES_HOME 错误 | ✅ 已关闭 |
| [#62333](https://github.com/nousresearch/hermes-agent/issues/62333) | Bug | OAuth refresh_token 被擦除导致 MCP 失效 | ✅ 已关闭 |
| [#80952](https://github.com/nousresearch/hermes-agent/issues/80952) | Bug | Windows 终端工具 ~330s 后回退 WSL | ✅ 已关闭 |
| [#94430](https://github.com/nousresearch/hermes-agent/issues/94430) | Bug | Desktop 单 profile 用户创建项目失败 | ✅ 已关闭 |
| [#74081](https://github.com/nousresearch/hermes-agent/pull/74081) | PR | `model.extra_body` 透传到 agent 请求 | ✅ 已关闭（合并/关闭） |
| [#106194](https://github.com/nousresearch/hermes-agent/pull/106194) | PR | ACP 与批量执行的 telemetry 归因 | ✅ 已关闭 |

**进展评估**：今日主要修复面属于"v0.21.1 残留缺陷清理"而非新功能突破。Windows Desktop 安装/更新链路经过本轮密集修复，**整体可用性向前迈进一步**；同时 MCP OAuth 与 Desktop Profile 边界问题也得到推进。值得注意的负面信号是：连续 3 个 Windows Desktop 更新相关的 Issue 都指向同一根本原因（验证步骤的工作目录解析错误），说明该回归在 v0.21.1 中具有**结构性**，需要关注后续是否仍有遗漏案例。

---

## 4. 社区热点

### 🔥 #66616 — Skills Index Watchdog（181 条评论）
链接：https://github.com/nousresearch/hermes-agent/issues/66616
由 `nousbot-eng` 自动巡检报告——Skills 索引已陈旧 29.8h（阈值 26h），状态为 `degraded`。该 Issue 由自动巡检 bot 维护，**评论数高主要源于周期性更新而非用户讨论**，反映 Skills Hub 依赖 `/docs/api/skills-index.json` 的重建定时任务（cron 6/18 UTC）存在偶发性失败。背后诉求：保证文档站点的 Skills 目录与索引同步。

### 🔥 其他值得关注的讨论
- **#106005** [MCP 多 Profile 作用域问题](https://github.com/nousresearch/hermes-agent/issues/106005) — P1，`GATEWAY_MULTIPLEX_PROFILES=true` 下只有首个 profile 能获得 MCP 工具，反映多 profile 架构尚未完全成熟。
- **#90149** [Desktop 路由身份不可变性架构讨论](https://github.com/nousresearch/hermes-agent/issues/90149) — 由 4 条评论，标记 `needs-decision`，是当前 Desktop 多 gateway 架构的关键设计 PR 的延伸讨论，影响后续路由层稳定性。
- **#58841** [Dark Mode 主题请求](https://github.com/nousresearch/hermes-agent/issues/58841) — 获 1 个 👍，要求 Catppuccin 主题 + "boring" 主题，反映 Desktop UI 美观度诉求强烈。
- **#105145** [Windows 更新错误报告](https://github.com/nousresearch/hermes-agent/issues/105145) — 16 条评论，今日关闭，用户社区对 Windows 桌面更新体验的讨论度较高。

---

## 5. Bug 与稳定性

按严重程度（P1 → P3）排列：

### P1（紧急）
| 编号 | 描述 | 是否有 fix PR |
|------|------|---------------|
| [#106166](https://github.com/nousresearch/hermes-agent/issues/106166) | 手动 `cron run` 误用下次预定时间戳，导致后续手动运行被永久阻塞（"already being fired"） | ❌ 未见 |
| [#106005](https://github.com/nousresearch/hermes-agent/issues/106005) | Multiplex profiles 下 MCP/工具集/状态未按 profile 作用域隔离 | ❌ 未见 |

> **注**：今日关闭的 #105145、#105587、#106097 均涉及 Windows 更新 P1 缺陷，已修复。

### P2（重要）
| 编号 | 描述 | 是否有 fix PR |
|------|------|---------------|
| [#106202](https://github.com/nousresearch/hermes-agent/issues/106202) | 0.21.1 异步委派完成后未触发父会话 wake turn（任务"卡住"2h+） | ❌ 未见 |
| [#83992](https://github.com/nousresearch/hermes-agent/issues/83992) | Python 3.14 下 `DaemonThreadPoolExecutor` 引用已移除属性 | ❌ 未见 |
| [#79179](https://github.com/nousresearch/hermes-agent/issues/79179) | WAL 修复提示将 Git 安装误分类为托管运行时 | ❌ 未见 |
| [#106066](https://github.com/nousresearch/hermes-agent/issues/106066) | WhatsApp 引用解析器丢弃 `ephemeralMessage` 包裹的文本 | ❌ 未见 |
| [#106184](https://github.com/nousresearch/hermes-agent/issues/106184) | Desktop 模型 provider 列表只显示 5/10 | ✅ [#106193](https://github.com/nousresearch/hermes-agent/pull/106193) |
| [#106212](https://github.com/nousresearch/hermes-agent/issues/106212) | State DB NOT NULL 列无 DEFAULT 无法自愈 | ✅ [#106212](https://github.com/nousresearch/hermes-agent/pull/106212) |
| [#106215](https://github.com/nousresearch/hermes-agent/issues/106215) | Dashboard PTY I/O 占满默认 executor | ✅ [#106215](https://github.com/nousresearch/hermes-agent/pull/106215) |

### P3（一般）
- [#106195](https://github.com/nousresearch/hermes-agent/issues/106195) `kanban promote --force` 假成功 ✅ [#106214](https://github.com/nousresearch/hermes-agent/pull/106214) 已修
- [#106213](https://github.com/nousresearch/hermes-agent/issues/106213) Novita 429 误分类 ✅ [#106213](https://github.com/nousresearch/hermes-agent/pull/106213) 已修
- [#106182](https://github.com/nousresearch/hermes-agent/issues/106182) TUI 子进程 YAML timestamp 序列化错误
- [#106153](https://github.com/nousresearch/hermes-agent/issues/106153) Signal 媒体回复反应错误显示 ❌
- [#106115](https://github.com/nousresearch/hermes-agent/issues/106115) Gateway 流式 TTS 边界丢 ack

**整体稳定性信号**：今日 7 条 P1/P2 缺陷中 4 条已有修复 PR，修复率约 57%；剩余的 P1 cron 与 MCP 多 profile 问题需要重点关注。**未合并的修复 PR 多达 48 条**，合并速度可能成为下一阶段瓶颈。

---

## 6. 功能请求与路线图信号

| 编号 | 请求内容 | 关联 PR | 进入下一版本的概率 |
|------|----------|---------|--------------------|
| [#106216](https://github.com/nousresearch/hermes-agent/issues/106216) | per-provider HTTP 代理覆盖 (`provider_proxies`)，解决聚合器按 IP 限流 | [#106216](https://github.com/nousresearch/hermes-agent/pull/106216) 已开放 | 🟢 高 |
| [#106219](https://github.com/nousresearch/hermes-agent/issues/106219) | per-session Docker 容器（含保留周期） | [#106219](https://github.com/nousresearch/hermes-agent/pull/106219) 已开放 | 🟢 高 |
| [#69201](https://github.com/nousresearch/hermes-agent/issues/69201) | `skills_list()` 查询搜索 | [#69201](https://github.com/nousresearch/hermes-agent/pull/69201) 已开放 | 🟡 中（自 7 月开放，仍待合并） |
| [#106192](https://github.com/nousresearch/hermes-agent/issues/106192) | PR 级别启用 `ty invalid-method-override` 诊断 | [#106192](https://github.com/nousresearch/hermes-agent/issues/106192) | 🟡 中 |
| [#87943](https://github.com/nousresearch/hermes-agent/issues/87943) | 每模型独立的 `compression.threshold_tokens` 覆盖 | — | 🟡 中 |
| [#104390](https://github.com/nousresearch/hermes-agent/issues/104390) | Desktop 注册 gateway 切换显式化 | — | 🟡 中 |
| [#105511](https://github.com/nousresearch/hermes-agent/issues/105511) | Desktop Projects 一级公民化 | — | 🟢 高（CLI 与 JSON-RPC 已就绪） |
| [#106218](https://github.com/nousresearch/hermes-agent/issues/106218) | Fallback models 列表可拖拽排序 | — | 🟢 高（实现成本低） |
| [#58841](https://github.com/nousresearch/hermes-agent/issues/58841) | Catppuccin 主题 + "boring" 主题 | — | 🟢 高 |

**路线图信号**：Docker per-session 隔离、HTTP 代理覆盖、Projects 一级公民化 三项**已具备 PR 实现**，最有可能进入下个版本；Catppuccin 主题呼声较高但仍缺实现；Skills 搜索功能（#69201）已开放超过 50 天，**需维护者关注**。

---

## 7. 用户反馈摘要

- **Windows Desktop 体验是当前最大的负面反馈源**：连续多日出现"更新失败"、""executable missing"、"verify 假阳性"等问题，用户（rickykan、y411412393、DarkSkar）在报告中都明确表达了对 v0.21.1 桌面更新流程的挫败感。多个 Issue 指向同一根因（cwd 解析错误），说明这是**结构性回归**。
- **多 profile 架构仍未收敛**：#106005、#90149、#103829 都涉及 profile 边界——MCP 连接、工具集、状态、provider 行可见性都未完全 profile-scope 化，社区认为这是 v0.21 系列的"半完成特性"。
- **MCP OAuth 是隐藏痛点**：[#62333](https://github.com/nousresearch/hermes-agent/issues/62333) 揭示"每 ~1h 需要重新登录"严重阻碍了 MCP（如 Zoho）的生产可用性，今日已关闭但**建议关注是否引入回归测试**。
- **CLI 错误信号不友好**：[#106195](https://github.com/nousresearch/hermes-agent/issues/106195) 中用户反馈 `kanban promote --force` 报告成功但实际未生效——"false success" 是社区反复出现的痛点，影响自动化信任。
- **正面反馈**：#105511 显示用户认可 Hermes backend 已经把 Projects 视为一级公民（per-profile `projects.db` + 完整 CLI），希望 Desktop UI 跟进，反映项目的**后端架构正在被认可**。

---

## 8. 待处理积压

以下重要 Issue/PR **长期未响应**，需要维护者关注：

| 编号 | 类型 | 创建日期 | 备注 |
|------|------|----------|------|
| [#45983](https://github.com/nousresearch/hermes-agent/issues/45983) | Bug | 2026-06-14 | Skill-heavy Orchestrator Profiles Chatloop 循环问题，至今 2 个多月未根治 |
| [#69201](https://github.com/nousresearch/hermes-agent/pull/69201) | PR | 2026-07-22 | Skills 查询搜索 PR，已开放 49 天仍未合并 |
| [#60656](https://github.com/nousresearch/hermes-agent/pull/60656) | PR | 2026-07-08 | 模型选择器配置感知修复，已开放 63 天 |
| [#87943](https://github.com/nousresearch/hermes-agent/issues/87943) | Feature | 2026-08-16 | per-model 压缩阈值覆盖，仍 `needs-decision` |
| [#58841](https://github.com/nousresearch/hermes-agent/issues/58841) | Feature | 2026-07-05 | Catppuccin 主题，社区呼声较高但无 PR |
| [#74081](https://github.com/nousresearch/hermes-agent/pull/74081) | PR | 2026-07-29 | `model.extra_body` 透传，今日已合并/关闭 ✅（作为积压清理的成功案例） |

**积压健康度**：48 条 PR 待合并 + 多个高评论 Issue 未根治，表明 **维护者带宽接近饱和**。建议设立每周"积压清理窗口"，优先消化 Windows/multi-profile/profile-scope 类结构性问题，避免 P1/P2 持续累积影响下一版本质量。

---

### 📊 项目健康度评分（主观）
- **活跃度**：⭐⭐⭐⭐⭐（50 Issues + 50 PRs 单日）
- **稳定性**：⭐⭐⭐（v0.21.1 仍有结构性回归待清理）
- **社区响应**：⭐⭐⭐（48 PRs 待合并，合并速度偏慢）
- **架构演进**：⭐⭐⭐⭐（多 Profile、Docker 隔离、Provider 代理等方向清晰）

> *本报告基于 2026-09-09 过去 24 小时 GitHub 公开数据生成，仅反映仓库动态，不含商业或安全评估。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-09

---

## 1. 今日速览

PicoClaw 仓库今日活跃度中等偏上，**Issues 板块 5 条更新（含 1 条已关闭）、PR 板块 8 条更新（含 1 条已关闭），但无新版本发布**。社区贡献者呈现"集中式"特征：开发者 **sting8k** 当日连发 2 个配置层 Bug 报告及对应修复 PR（#3373/#3374 + #3375），显示其在安全敏感数据与配置序列化路径上做了深入 review；**hugodeco** 此前提交的 Telegram 交互体验改进 PR（#3356、#3357）仍待合并。整体来看，项目在 **Telegram 通道健壮性** 与 **config 层并发/数据丢失** 两个方向上有显著推进迹象，但 stale 标签在多条 PR/Issue 上持续累积，需要维护者主动清理。

---

## 2. 版本发布

**今日无新版本发布。** 最近的版本状态需参考 `nightly-50-gbbf6893c` 之后的提交（issue #3355 仍引用此 nightly build）。

---

## 3. 项目进展

### 已关闭 / 合并

- **[PR #714]** skills: install/reinstall CLI and refactor into skillsCmd（作者：seanly，关闭于 2026-09-08）
  - 该 PR 自 2026-02-24 创建，跨度超过半年，今日终于关闭（最终状态为 CLOSED，未明确合并或拒绝）。涉及 `ParseInstallSpec`、`InstallFromGitHubEx`、GitHub Trees API 全目录拉取、`reinstall` 子命令等能力。
  - 🔗 https://github.com/sipeed/picoclaw/pull/714

- **[Issue #3265]** Gateway startup fails with deltachat channel（作者：Cipher208，已关闭）
  - 即便未在 config.json 中配置 deltachat，gateway 启动仍报 `channel deltachat has unknown type deltachat`。该问题关闭但未提供明确解决说明，社区需关注是否被合并到某次重构。
  - 🔗 https://github.com/sipeed/picoclaw/issues/3265

### 今日新进的关键 PR（均 OPEN）

- **[PR #3375]** fix(config): guard lazy sensitive-data cache against concurrent init（sting8k）
  - 直接修复今日报告的 Issue #3374，重写 `initSensitiveCache()` 的并发语义。
  - 🔗 https://github.com/sipeed/picoclaw/pull/3375
- **[PR #3372]** fix(config): make the reaction tool configurable（sting8k）
  - 修复 `ToolsConfig` 缺少 `reaction` 字段、导致该工具无法被关闭的缺陷。
  - 🔗 https://github.com/sipeed/picoclaw/pull/3372
- **[PR #3371]** feat(providers): add opencode-go provider with session header support（EMTumariscal）
  - 新增对 `opencode.ai/zen/go/v1` 端点的专用 provider，并透传 `x-opencode-session` 会话头。
  - 🔗 https://github.com/sipeed/picoclaw/pull/3371

> 项目整体向前推进的"实际步数"：**1 个长期 issue 关闭 + 1 个长期 PR 关闭 + 3 个新增/修复 PR 进入评审通道**。属于平稳推进日，无重大里程碑事件。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | Issue #3265 | Gateway startup fails with deltachat | 3 | 1 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) |
| 2 | Issue #3343 | Tool feedback animation edits Telegram message indefinitely | 3 | 0 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) |
| 3 | Issue #3355 | Feishu config unknown field | 1 | 0 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) |

**诉求分析：**

- **#3343**（raine 报告）是本周最高价值的 issue 之一：**单个失败的 agent turn 导致对 Telegram 同一条消息连续 edit 22.8 万次**，触发 Telegram 服务端 `retry_after` 限流。背后反映出 agent loop 中 **"反馈动画与执行状态机"** 没有正确的终止信号——任何 agent 状态机异常都可能转化为对外部 IM API 的滥用。社区建议的方向包括：失败计数、deadline、心跳失败后的自动 abort。
  - 🔗 https://github.com/sipeed/picoclaw/issues/3343

- **#3265** 关闭前已有 3 条评论，社区在尝试复现 deltachat 通道类型校验逻辑，间接推动了 [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 的 deltachat 大重构（-200 LOC）。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 严重（影响数据完整性 / 可能触发外部平台风控）

1. **[Issue #3343] Tool feedback animation can edit a Telegram message indefinitely after a failed turn**
   - **严重程度：高** —— 可在数日内产生 22.8 万次 Telegram API 调用，触发服务端限流甚至封号。
   - **是否有 fix PR**：❌ 暂无。
   - 🔗 https://github.com/sipeed/picoclaw/issues/3343

2. **[Issue #3373] SaveConfig silently deletes every api_key after the first**
   - **严重程度：高** —— 静默数据丢失：包含多个 `api_keys` 的 `model_list` 条目在 `LoadConfig → SaveConfig` 往返后只剩第一个；且残留的 `fallbacks` 指向已不存在的模型名。
   - **是否有 fix PR**：❌ 暂无，需要尽快补 PR。
   - 🔗 https://github.com/sipeed/picoclaw/issues/3373

3. **[Issue #3374] Data race in Config.initSensitiveCache**
   - **严重程度：高** —— `sync.Once` 被并发初始化绕过，可能返回 nil `*strings.Replacer`，调用 `FilterSensitiveData` 时 panic。
   - **是否有 fix PR**：✅ 已有 [PR #3375](https://github.com/sipeed/picoclaw/pull/3375)。
   - 🔗 https://github.com/sipeed/picoclaw/issues/3374

### 🟠 中等（配置可用性 / 用户体验）

4. **[Issue #3355] Feishu config.json contains unknown field**
   - **严重程度：中** —— 飞书通道在最新 nightly 下加载即报 `channel_list.feishu.app_id` 字段未知，疑似配置 schema 与运行时不匹配。版本为 `nightly-50-gbbf6893c`。
   - **是否有 fix PR**： 暂无。
   - 🔗 https://github.com/sipeed/picoclaw/issues/3355

### 已修复（待合并）

5. **[PR #3375]** 并发敏感数据缓存修复 → 对应 Issue #3374。
6. **[PR #3372]** reaction 工具配置路径修复。

---

## 6. 功能请求与路线图信号

- **[PR #3371]** 新增 opencode-go provider（`https://opencode.ai/zen/go/v1`）—— 表明社区希望 PicoClaw 不被锁定在单一模型端点，并强调 **会话粘性**（`x-opencode-session` header）。**信号**：PicoClaw 正在从"单一 OpenAI 兼容端点"向"多 provider + 会话上下文保持"演进。
  - 🔗 https://github.com/sipeed/picoclaw/pull/3371

- **[PR #3344]** Build Remote Agent phone pairing (`gbr/1`) —— 桌面 agent + 手机端 spectator 模式，支持 QR + 8 位配对码，限定仅本地 `127.0.0.1:8788` 或 stdio。**信号**：官方正在向"多端协作"扩展，PicoClaw 不再只是 CLI/单端工具。
  - 🔗 https://github.com/sipeed/picoclaw/pull/3344

- **[PR #3222]** deltachat 通道大重构 —— -200 LOC、移除密码式邮箱配置、`invite_link` → `join_invite_link`。**信号**：维护者对 channels/ 做"瘦身 + API 收敛"。

- **[PR #3356 / #3357]** Telegram 引用文档重传 + 把"对 bot 自身消息的回复"识别为隐式 mention。**信号**：Telegram 通道在"上下文完整性 + 多轮对话触发"方向持续打磨。

---

## 7. 用户反馈摘要

- **@raine（#3343）**：揭示出 agent 失败后缺少退避与终态保护。痛点关键词：**无限重试 / API 滥用 / 服务端风控**。场景描述精准、可复现，附 22.8 万次调用数据，是高质量 bug 报告模板。

- **@ttghub（#3355）**：中文用户，飞书通道在升级后直接拒绝加载。痛点：**配置 schema 与运行时不一致**，升级文档缺失。

- **@sting8k（#3373、#3374）**：通过静态阅读 `pkg/config/security.go` 与 `model_list` 序列化路径，主动发现 2 个生产隐患（数据丢失 + 数据竞争）。表明社区已有用户将 PicoClaw 用于**多密钥轮换**与**高敏感场景**。

- **@Cipher208（#3265 已关闭）**：deltachat 类型校验报错，即便未启用该通道仍触发。说明 channels/ 注册逻辑与 config schema 校验存在冗余检查问题。

---

## 8. 待处理积压

下列 PR/Issue 自创建起超过 30 天仍标记为 `[stale]` 或无响应，维护者建议重点 review：

| 编号 | 类型 | 标题 | 创建日 | 链接 |
|---|---|---|---|---|
| #3222 | PR | refactor(deltachat): cleanup implementation, documentation -200LOC | 2026-07-03 | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |
| #3343 | Issue | Tool feedback animation can edit Telegram message indefinitely | 2026-08-22 | [#3343](https://github.com/sipeed/picoclaw/issues/3343) |
| #3344 | PR | Add Build Remote Agent phone pairing (gbr/1) | 2026-08-23 | [#3344](https://github.com/sipeed/picoclaw/pull/3344) |
| #3355 | Issue | 连接飞书报错 config.json unknown field | 2026-09-01 | [#3355](https://github.com/sipeed/picoclaw/issues/3355) |
| #3356 | PR | fix(telegram): re-attach quoted documents | 2026-09-01 | [#3356](https://github.com/sipeed/picoclaw/pull/3356) |
| #3357 | PR | fix(telegram): treat replies to the bot's own messages as implicit mentions | 2026-09-01 | [#3357](https://github.com/sipeed/picoclaw/pull/3357) |
| #714 | PR（CLOSED） | skills: install/reinstall CLI | 2026-02-24 | [#714](https://github.com/sipeed/picoclaw/pull/714) |

**优先级建议：**
- **紧急**：#3343（Telegram 滥用风险）、#3373（数据丢失，无 PR）
- **中优先**：#3222（重构体量大，可安排专门 review 窗口）、#3344（多端路线图关键能力）
- **低优先**：#3355、#3356、#3357（均为通道层小修，影响面明确）

---

## 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ (4/5) | Issues + PRs 共 13 条更新，sting8k 单日高产 |
| 响应速度 | ⭐⭐⭐ (3/5) | 多条 stale 标签，需维护者介入 |
| Bug 修复链路 | ⭐⭐⭐⭐ (4/5) | sting8k 自带 fix PR，闭环健康 |
| 功能推进 | ⭐⭐⭐ (3/5) | 有 opencode-go / gbr / deltachat 等多方向 PR，但合并节奏慢 |
| 发布节奏 | ⭐⭐ (2/5) | 今日无 release，nightly 仍被用户引用 |
| **综合** | **⭐⭐⭐ (3.4/5)** | 项目处于"持续输入、缓慢合并"的状态，需要维护者加大 review 力度 |

> 📅 数据截至：2026-09-09 · 数据来源：GitHub REST API

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-09

> 数据周期：过去 24 小时｜仓库：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 一、今日速览

NanoClaw 过去 24 小时处于**中高度活跃**的开发节奏，共产生 2 条 Issue 更新与 10 条 PR 更新，合并/关闭 2 条 PR，无新版本发布。今日工作重心明显集中在两个方向：**OpenCode 提供商（provider）的接入与稳定性**（`feat(add-opencode)` 系列 2 条新 PR + 1 条 fix），以及**多渠道（channels）能力的完善**（AgentMail 适配器、v1 渠道补装 Issue 关闭）。从关闭的 PR #3729（社区门户设置）与 #3441（原子化 setup 写入）来看，安装与设置流程的健壮性也取得阶段性进展。

整体健康度：**良好**——核心贡献者（glifocat、gavrielc 等）持续推进，bug 修复与新功能并行，PR 标签合规度高（多数命中 `core-team` 与 `follows-guidelines`），但 8 条 OPEN PR 仍待 review，存在一定的评审积压压力。

---

## 二、版本发布

⚠️ 今日**无新版本发布**。

---

## 三、项目进展（已合并/关闭 PR）

### ✅ #3729 [CLOSED] feat(setup)：将主机接入社区单元并在浏览器中管理 perks
- 作者：gavrielc｜[链接](https://github.com/qwibitai/nanoclaw/pull/3729)
- **推进内容**：将 Echo 与 Slack 的安装流程迁移至社区门户（community portal），用户通过单次浏览器访问即可完成主机绑定。
- **意义**：标志着 NanoClaw v1→v2 迁移在 setup 体验侧的进一步整合，向"零 CLI"安装迈进了一步。

### ✅ #3441 [CLOSED] fix(setup)：在 `git show` 失败时保留原文件
- 作者：dawNotPoi｜[链接](https://github.com/qwibitai/nanoclaw/pull/3441)
- **推进内容**：将 `git show` 的输出先写入临时文件，仅在 Git 命令成功后才原子替换目标文件；同时新增共享 helper 让 TypeScript setup 路径也获得同样的原子行为。
- **意义**：消除了升级过程中因网络/仓库异常导致**用户配置被覆写或损坏**的风险，是 setup 路径上一个实质性的可靠性改进。

> 综合来看，今日合并的 2 条 PR 都属于"基础设施稳健化"，并未引入新的大特性，但显著降低了用户在实际部署中的失败概率。

---

## 四、社区热点

由于多数 PR 评论数均为 `undefined`（即尚无评审互动），今日**讨论热度最高**的是以下两条：

| 排序 | 编号 | 标题 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|---|
| 🥇 | Issue #3735 [OPEN] | conversations/ archives grow without bound — no retention, no cap | 2 | 0 | [查看](https://github.com/qwibitai/nanoclaw/issues/3735) |
| 🥈 | Issue #3744 [CLOSED] | Install remaining v1 channels: WhatsApp, iMessage, Resend, Discord | 1 | 0 | [查看](https://github.com/qwibitai/nanoclaw/issues/3744) |

**诉求分析**：
- **#3735** 揭示了生产环境（"fleet"）中的真实痛点：每次 compaction 都会向 `groups/<folder>/conversations/` 追加一个 markdown 归档，**没有任何保留策略或上限**，长期下来磁盘与索引将不可控。这反映出 Nanoclaw 在 long-running 部署场景下的运维能力短板。
- **#3744** 已在同日关闭（迁移脚本 `migrate-v2.sh` 对 5/6 渠道处理失败的告一段落），可见维护者对 v1→v2 遗留问题的清理仍在节奏内。

---

## 五、Bug 与稳定性

| 严重度 | 编号 | 问题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 🟠 **高** | Issue #3735 | 对话归档无界增长（无 retention/rotation/cap） | OPEN | ❌ 暂无 |
| 🟡 中 | PR #3746 [OPEN] | 提供商取消/失败状态与 skill 文件在 runtime 操作中未持久化 | OPEN | ✅ 即为 fix |
| 🟡 中 | PR #3738 [OPEN] | `send_message`/`send_file`/`<message to>` 回复未落到被回复消息所在 thread，导致文件错投到主频道 | OPEN | ✅ 即为 fix |
| 🟡 中 | PR #3749 [OPEN] | 同一处理窗口内多线程触发消息时，部分回复被丢弃 | OPEN | ✅ 即为 fix |
| 🟢 低 | PR #3750 [OPEN] | `/update-nanoclaw` 控制台在加载时崩溃——`git archive` 文件清单遗漏 `scripts/provider-contract-verifier.ts` | OPEN | ✅ 即为 fix |

**严重度说明**：
- **#3735** 评为"高"的原因：在生产 fleet 上复现，影响可用磁盘与备份策略，不修复将持续累积。
- **#3738 / #3749** 涉及核心消息路由逻辑，#3738 中"文件落到主频道"对用户而言尤其明显（容易在群组中暴露本应私发的附件）。
- **#3750** 虽然影响面只到 update 命令，但会让**所有用户升级时**遭遇崩溃，等同于阻断式问题，建议优先合并。

---

## 六、功能请求与路线图信号

| 候选功能 | 证据 | 当前状态 | 进入下一版本的概率 |
|---|---|---|---|
| **OpenCode 作为受支持的 provider** | PR #3733（runtime 合约）+ PR #3747（setup 集成）今日同时更新 | 双 PR 推进中 | ⭐⭐⭐⭐ 极高 |
| **AgentMail 原生邮件渠道** | PR #3743，今日新开 | 待 review | ⭐⭐⭐ 中高 |
| **context-preview 工具回归 main** | PR #3745，复活 `scripts/context-preview.ts` | OPEN | ⭐⭐⭐ 中高 |
| **v1→v2 剩余渠道补装（WhatsApp/iMessage/Discord 等）** | Issue #3744 已关闭，迁移脚本已修 | 解决中 | ✅ 已纳入 |

**路线图观察**：
- "OpenCode" 是当前最显眼的战略级主题——3 条相关 PR 集中在同一天提交（#3733、#3747、#3746），且作者均为 **glifocat**，可见这是单一负责人推进的连贯工作流。一旦 #3733/#3747 合并，OpenCode 将从"散装 skill"升级为 NanoClaw 的**一等 provider 公民**。
- **#3743 AgentMail** 的卖点是"无需 MX 记录即可获得完整邮件收件箱"，回应了 Resend 等方案需要占用域名 DNS 的痛点，定位清晰，但尚需评审其与现有 channels/credentials 的耦合度。

---

## 七、用户反馈摘要

来自有评论的 Issue：

- **Issue #3735（用户：TO-maschenborn）**
  - **场景**：生产 fleet 运营方，部署后无人为干预。
  - **痛点**：`archiveTranscriptFile()` 在每次 compaction 时落盘 markdown 归档，**没有任何 retention/rotation/cap**，"directory grows for the lifetime of the agent group"。
  - **满意度信号**：未表达满意度，但措辞克制、技术细节充足，属于**可立即采纳**的高质量反馈。

- **Issue #3744（用户：rsieb）**
  - **场景**：在 2026-09-06/07 完成 v1→v2 迁移的用户。
  - **痛点**：`migrate-v2.sh` 只能调用旧版 `setup/install-<channel>.sh`，导致 6 个所选渠道中 5 个未安装（Slack 除外）；新渠道（WhatsApp/iMessage/Resend/Discord）已迁移到 `nc:` directive 的 `SKILL.md` 形态。
  - **状态**：Issue 已 CLOSED，暗示修复已合入或迁移路径已更新。

> 综合来看，今日可感知的真实用户痛点集中在**长期运维（磁盘增长）**与**升级路径（迁移脚本缺陷）**两端，与安装/setup 相关的 PR 频繁出现也与此呼应。

---

## 八、待处理积压与提醒

以下事项建议维护者优先关注：

1. **🔴 Issue #3735 — 无 retention 的归档增长**
   - 创建于 2026-09-07，至今 OPEN，**生产环境复现**。尚未指派维护者，也无相关 fix PR。建议至少先建立一个 `MAX_ARCHIVES` 或 TTL 类 PR 止血。
   - [链接](https://github.com/qwibitai/nanoclaw/issues/3735)

2. **🟠 8 条 OPEN PR 等待评审**
   - 今日新增/活跃的 PR 多数尚无 review 评论（`comments: undefined`）。重点关注：
     - [PR #3733](https://github.com/qwibitai/nanoclaw/pull/3733) feat(add-opencode)：体量大、跨多个 area，建议至少做一次架构层 review。
     - [PR #3747](https://github.com/qwibitai/nanoclaw/pull/3747) feat(add-opencode) setup：与 #3733 配套，应协同评审。
     - [PR #3750](https://github.com/qwibitai/nanoclaw/pull/3750) fix(update)：升级路径阻断类问题，建议优先合并。

3. **🟡 历史 PR #3441 周期较长**
   - 该 fix(setup) PR 自 2026-08-22 开放，至 2026-09-08 才关闭，**周期约 17 天**，提示对于 setup/脚本类 PR 的评审节奏可进一步提速——这类 PR 通常直接关系到新用户首次安装体验。

---

> 📌 **一句话总结**：今日 NanoClaw 在"OpenCode 提供商"和"安装/运维稳定性"两条主线并行推进；生产环境最值得警惕的是无界增长的对话归档（#3735），而阻塞升级路径的 #3750 应当是合并优先级最高的 PR。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-09-09**
**数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日呈现出**集中式修复冲刺**的高活跃状态：在 24 小时内共有 11 个 PR 流转、2 个新 Issue 提交，但**零版本发布**。开发者 [kirikov](https://github.com/kirikov) 是绝对的贡献主力（11 个 PR 中 10 个由其提交），工作重心高度聚焦于 **hosted-MCP 多租户场景下的工具目录隔离与发现机制**，并围绕这一主题形成了多轮"提交→关闭→重开"的迭代模式（#6760→#8089、#6759→#8084、#8083→#8090）。整体上项目处于活跃但不稳定的重构期，多个 PR 处于待合并状态，等待 maintainer review。

---

## 2. 版本发布

**今日无新版本发布。** 仓库当前未发布新的 Release，建议关注者继续跟踪 main 分支 PR 合并节奏。

---

## 3. 项目进展（已合并/关闭 PR）

今日共 **5 个 PR 被关闭**（含 superseded 与非合并关闭），其中可识别为推进性工作的关键变更：

- **[#8088](https://github.com/nearai/ironclaw/pull/8088)** — `feat(common)`：区分"已设置为空"与"未设置"的环境变量。修复了 `env_or_override` 将 `FOO=` 与缺失 `FOO` 等同对待的潜在错误配置隐患。
- **[#8083](https://github.com/nearai/ironclaw/pull/8083)** — `fix(extensions)`：合并（而非替换）已发现的 hosted-MCP 工具目录。多用户共用扩展时，旧发现结果不再被新发现结果覆盖。
- **[#8089](https://github.com/nearai/ironclaw/pull/8089)** — `feat(extensions)`：捆绑 agent-market hosted-MCP 提供商包，补齐 manifest、per-tool 输入 schema 与静态声明。
- **[#6760](https://github.com/nearai/ironclaw/pull/6760)** — 标记为 superseded（被 #8089 取代）：以"bundled extension as one crate" 的新形态重新打包 agent-market marketplace 扩展。
- **[#6759](https://github.com/nearai/ironclaw/pull/6759)** — 标记为 superseded（被 #8084 取代）：SEP-414 `_meta` attribution 的早期版本。

> ⚠️ **解读**：今日关闭的 5 个 PR 中，3 个是同一思路的 superseded 迭代，意味着这些功能/修复**尚未真正落地**，需要等待后续替代 PR (#8089、#8084、#8090) 进入合并状态才能视为项目实际进展。

---

## 4. 社区热点

按评论数与关注度排序：

| 排名 | 议题 | 评论 | 👍 | 类型 |
|---|---|---|---|---|
| 1 | [#6778](https://github.com/nearai/ironclaw/issues/6778) Hosted-MCP 跨用户元数据暴露 | 2 | 0 | Bug/安全 |
| 2 | [#8086](https://github.com/nearai/ironclaw/issues/8086) `ironclaw skills list` 看不到运行时写入的 skills | 0 | 0 | Bug |
| — | 其余 PRs | — | — | — |

**分析**：今日评论数整体偏低（最高仅 2 条），但议题 #6778 自 2026-07-28 提出以来已被讨论 2 次，说明社区与维护者对其重要性已有共识**但尚未给出明确修复路径**。Issue #8086 虽然刚创建，揭示了一个**调试体验断裂**的关键问题：CLI 工具与运行时写入的技能之间存在可见性差异，会误导开发者的诊断方向。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重性

- **[#6778](https://github.com/nearai/ironclaw/issues/6778) — Hosted-MCP 跨用户元数据暴露**
  - **描述**：在多主体服务器上，托管型 MCP 激活流程使用**当前激活用户的凭证**运行 `tools/list`，但发布到活跃扩展注册表时仅以 extension id 为键，导致不同用户的工具列表互相可见，构成跨用户元数据泄露。
  - **关联修复 PR**：[#8090](https://github.com/nearai/ironclaw/pull/8090)（OPEN）— 将工具目录按调用方（caller）而非扩展（extension）键控
  - **状态**：已有 fix PR，待合并

- **[#8083](https://github.com/nearai/ironclaw/pull/8083) — 已发现的 hosted-MCP 目录互相覆盖**
  - **描述**：当 hosted-MCP 服务器的工具列表依赖调用方身份时，先前用户的发现结果会被最新发现直接覆盖。
  - **状态**：PR 已 CLOSED（被 #8090 取代）

### 🟡 中严重性

- **[#8086](https://github.com/nearai/ironclaw/issues/8086) — `ironclaw skills list` 看不到运行时写入的 skills**
  - **描述**：CLI 工具无法读取 agent 安装的技能，也看不到未配置用户的技能。"为什么我的 agent 看不到 skill" 的调试路径会指向错误方向。
  - **关联 fix PR**：无（截至今日）

### 🟢 低严重性 / 配置类

- **[#8088](https://github.com/nearai/ironclaw/pull/8088)** — `FOO=` 被静默视为默认值，对部署决策类变量构成潜在误配置风险（已关闭）。

---

## 6. 功能请求与路线图信号

### 已开放且明确方向的功能 PR

| PR | 功能 | 推断优先级 |
|---|---|---|
| [#8087](https://github.com/nearai/ironclaw/pull/8087) 将 prompt-context 限制改为可覆盖的默认值（当前硬编码 128k） | 模型上下文窗口配置化 | ⭐⭐⭐ 高（多模型部署刚需） |
| [#8082](https://github.com/nearai/ironclaw/pull/8082) 文档文本的 opt-in 指针模式（避免 inline 占用大量上下文） | 长文档 attachment 优化 | ⭐⭐⭐ 高（PDF 单文档 ~25k token 的现实问题） |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) SEP-414 `_meta` 调用方归属（opt-in） | 多租户 MCP 调用溯源 / 重试识别 | ⭐⭐⭐ 高（与 hosted-MCP 安全主线一致） |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) operator 安装的 package 应当等同于 host-bundled | 部署运维体验 | ⭐⭐ 中 |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) Telegram Bot API 命令菜单注册（来自 thisisjoshford，唯一非 kirikov 贡献） | 渠道 UX 增强 | ⭐⭐ 中 |

### 路线图信号

多个 PR 围绕 **"hosted-MCP 多租户安全性 + 配置可操作性"** 这一主题集中爆发，强烈暗示该议题是当前 maintainer 的优先关注方向。上下文窗口与文档指针两个 PR 虽非安全主题，但同属"灵活部署"主线，可能在下一版本一起纳入。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数较少（最高 2 条），用户反馈密度有限，但已能观察到几个明确痛点：

1. **调试体验断裂** — [#8086](https://github.com/nearai/ironclaw/issues/8086)：用户在排查"agent 看不到 skill"时，自然会调用 `ironclaw skills list`，但该工具返回的视图与运行时不一致，迫使用户学习底层细节。
2. **多租户 MCP 的隐性数据暴露** — [#6778](https://github.com/nearai/ironclaw/issues/6778)：用户对 hosted-MCP 在多主体环境下的工具目录隔离边界不清晰，存在"以为安全实际泄露"的认知差。
3. **CLI/运行环境视图分裂** — [#8086](https://github.com/nearai/ironclaw/issues/8086)：CLI 与 runtime 看到不同的 skill 集合，这种"配置漂移"反映出项目在用户身份/作用域模型上的 UX 尚不成熟。

> 当前**未观察到正面满意反馈**或赞赏类评论，社区关注点集中在缺陷修复与多租户可靠性上。

---

## 8. 待处理积压

> ⚠️ 以下 Issue/PR 已在仓库中存在较长时间（>7 天），尚未合并或关闭，建议维护者关注：

- **Issue [#6778](https://github.com/nearai/ironclaw/issues/6778)** — 创建于 2026-07-28（已逾 6 周），跨用户元数据暴露问题。虽已有修复 PR [#8090](https://github.com/nearai/ironclaw/pull/8090) 在今日提交**，但 Issue 本身未关闭**，需在 PR 合并后同步关闭。
- **PR [#8072](https://github.com/nearai/ironclaw/pull/8072)** — 创建于 2026-09-04，今日仍处 OPEN 状态。该 PR 由外部贡献者 thisisjoshford 提交（Telegram Bot 命令菜单注册），是**今日唯一非 kirikov 的贡献**，维护者及时 review 有助于社区贡献者留存。

---

## 📊 项目健康度总评

| 指标 | 评分 | 说明 |
|---|---|---|
| 活跃度 | 🟢 高 | 11 PRs + 2 Issues/24h |
| 多样性 | 🔴 低 | 95% PR 来自单一贡献者（11/11） |
| 安全性响应 | 🟢 高 | 跨用户元数据泄露有明确修复路径 |
| 社区参与度 | 🟡 中 | 评论与外部贡献者稀少 |
| 版本节奏 | ⚪ 静默 | 今日无 Release |

**关键观察**：项目进入**单一维护者驱动的密集重构期**，hosted-MCP 多租户问题是当前核心矛盾。维护者关注度集中在内部架构层面，社区对话密度偏低，建议提升外部贡献 review 节奏以维持生态健康。

---

*报告基于 2026-09-09 数据生成，所有链接指向 github.com/nearai/ironclaw 仓库。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-09-09**
**项目：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内整体处于**集中合并收尾期**：没有新的 Issue 产生，也没有新的版本发布，但一次性合并/关闭了 9 个 Pull Request，活跃度集中在 OpenClaw v2026.8.1 升级后的兼容性修复链上。提交者高度集中（主要由 `btc69m979y-dotcom` 贡献），呈现出"集中式问题清障"的工作模式，项目整体在向一个稳定的 2026.8.1 兼容基线推进。社区端今日无新讨论，但用户侧长期积压功能（如会话分叉）已被关闭，下一阶段重点预计会转向新功能开发。

---

## 2. 版本发布

**今日无新版本发布。**

过去 24 小时没有可用的 Release 标签。结合今日 PR 主题（OpenClaw 2026.8.1 升级后的兼容性修复），预计近期会有以"OpenClaw 2026.8.1 适配"为主题的补丁版本合并，但目前尚未切出 tag。

---

## 3. 项目进展

今日 9 个 PR 全部为 CLOSED 状态，0 个仍待合并，说明这些修复已经完成一轮完整的评审闭环。核心进展如下：

### 3.1 OpenClaw 2026.8.1 升级适配闭环（核心主线）

这是今日合并的最大主题，由同一贡献者连续推进，包含 7 个相互关联的 PR：

- **[#2625](https://github.com/netease-youdao/LobsterAI/pull/2625)** `fix(openclaw): stabilize upgrade migration and packaged gateway startup`
  修复升级后的旧会话迁移、Agent 配置同步、打包后 SDK 解析与配置被拒绝后的无效重启问题，并缩减 Windows runtime 分发体积。是本次升级适配的"地基"型 PR。

- **[#2628](https://github.com/netease-youdao/LobsterAI/pull/2628)** `fix(openclaw): restore DingTalk and Lark plugin compatibility`
  修复 Windows Jiti loader 中钉钉的 `import.meta` 报错，以及飞书 SDK 根入口未导出的问题。

- **[#2630](https://github.com/netease-youdao/LobsterAI/pull/2630)** `fix(openclaw): restore DingTalk and Lark message dispatch`
  在 #2628 之上，进一步修复钉钉 `DingTalk runtime not initialized` 和飞书 `runtime.config.loadConfig is not a function` 的入站消息分发故障，将钉钉升级到适配当前 SDK 的正式版。

- **[#2629](https://github.com/netease-youdao/LobsterAI/pull/2629)** `fix(openclaw): restore NIM and NetEase Bee plugin compatibility`
  修复 NIM 和网易蜂巢插件因 `openclaw/plugin-sdk` 根导出变化导致的 `ERR_PACKAGE_PATH_NOT_EXPORTED`。

- **[#2626](https://github.com/netease-youdao/LobsterAI/pull/2626)** `fix(openclaw): preinstall external provider plugins`
  预装 8 个由上游分发的外部 provider 插件，避免启动时下载授权导致 `requires capability consent` 网关停摆。

- **[#2627](https://github.com/netease-youdao/LobsterAI/pull/2627)** `fix(openclaw): adapt native ask_user question protocol`
  将 `question.*` 协议连接到桌面端问答 UI，修复 native `ask_user` 不弹窗的回归，并清理确认按钮标签中泄漏的推荐后缀。

- **[#2631](https://github.com/netease-youdao/LobsterAI/pull/2631)** `fix(cron): correct run history and preparation failure state`
  修复定时任务历史记录和失败状态回归：避免同一次执行通过 run-scoped 和 base session 双重别名重复导入；任务失败时持久化错误结果而非维持前置状态。

> **整体评价：** 这是一组典型的"大版本升级后全链路兼容修复"工作，从 SDK 入口、插件加载、Provider 预装、协议对接、定时任务持久化，覆盖完整。说明 OpenClaw v2026.8.1 是一次破坏性较大的升级，项目方正在以 PR 集群方式补齐差异。

### 3.2 其他进展

- **[#2624](https://github.com/netease-youdao/LobsterAI/pull/2624)** `fix(artifacts): 修复 HTML 缩略图白屏与 Mermaid 预览渲染竞态`
  修复 Artifacts 模块两个长期痛点：HTML 父子帧代次校验、CSS 入场动画有界等待、HTML 缓存版本隔离、Mermaid 渲染任务隔离、错误恢复与中英文错误提示，并补充缩略图/动画时序/渲染生命周期的回归测试。

- **[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159)** `feat(cowork): add session fork` *(被标记 stale 并关闭)*
  该 PR 提交于 2026-03-31，在长达 5 个月的等待后于今日因 stale 被关闭，**未合并**。这是一个用户呼声较高的功能（详见后文）。

---

## 4. 社区热点

今日所有 PR 的评论数均为 `undefined`，点赞数均为 0，Issues 数为 0。**社区层面今日无活跃讨论**。

无活跃讨论意味着今日的代码变动更像是"维护者的集中收尾"而非"社区驱动"。从历史维度看，最值得关注的是：

- **[#1159 feat(cowork): add session fork](https://github.com/netease-youdao/LobsterAI/pull/1159)**（已 stale 关闭）—— 该 PR 关注的是会话分叉能力，是 cowork 场景中的高频需求，被关闭的原因大概率是长期未跟进，而非设计被否决。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | 升级 OpenClaw 2026.8.1 后旧会话迁移/Agent 配置同步失败、网关启动失败 | 已修复 | [#2625](https://github.com/netease-youdao/LobsterAI/pull/2625) |
| 🔴 高 | 钉钉/飞书入站消息无法分发（DingTalk runtime 未初始化 / `loadConfig is not a function`） | 已修复 | [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628)、[#2630](https://github.com/netease-youdao/LobsterAI/pull/2630) |
| 🔴 高 | Windows 端钉钉插件在 Jiti loader 中报 `Cannot use 'import.meta' outside a module` | 已修复 | [#2628](https://github.com/netease-youdao/LobsterAI/pull/2628) |
| 🔴 高 | NIM、网易蜂巢插件因 SDK 路径变更全部 `ERR_PACKAGE_PATH_NOT_EXPORTED` | 已修复 | [#2629](https://github.com/netease-youdao/LobsterAI/pull/2629) |
| 🟠 中 | 添加 Qwen 等 provider 时报 `requires capability consent`，网关停摆 | 已修复 | [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) |
| 🟠 中 | native `ask_user` 请求不弹窗等待用户输入 | 已修复 | [#2627](https://github.com/netease-youdao/LobsterAI/pull/2627) |
| 🟠 中 | 定时任务历史被双重导入，失败任务状态丢失 | 已修复 | [#2631](https://github.com/netease-youdao/LobsterAI/pull/2631) |
| 🟡 低 | HTML 缩略图白屏、Mermaid 预览渲染竞态 | 已修复 | [#2624](https://github.com/netease-youdao/LobsterAI/pull/2624) |

> **总体结论：** 今日所有报告/修复的稳定性问题均已落入闭环，无遗留高危 Bug，**项目健康度处于"修复集中落地期"的良好状态**。

---

## 6. 功能请求与路线图信号

今日 Issues 区为空（0 条新增/活跃），但从历史 PR 中可推断以下信号：

- **会话分叉（Session Fork）[#1159](https://github.com/netease-youdao/LobsterAI/pull/1159)** — 该功能长期被需要但最终因 stale 被关闭。建议维护者要么明确答复社区需求是否纳入路线图，要么由项目方接手实现，避免反复出现此类长尾 PR。

- **OpenClaw 2026.8.1 升级配套** — 通过 #2625/#2626/#2627/#2628/#2629/#2630/#2631 这一系列 PR，可以推断出项目方已将"稳定运行在最新上游运行时"作为当前阶段的硬性路线图节点。

- **Artifacts 渲染稳定性** — #2624 中带回归测试和设计文档的提交，说明项目方正在系统性提升 Artifacts 模块的稳定性，可能为后续的渲染管线扩展铺垫。

---

## 7. 用户反馈摘要

**今日无新增 Issue 评论数据**（Issues 区为空，PR 评论数均为 undefined），无法从用户评论中提取当日的直接反馈。

可参考的间接信号：

- 钉钉/飞书/NIM/网易蜂巢插件的连续回归表明**国内办公协同生态**是 LobsterAI 的重要使用场景，企业用户在升级期间受到较明显的功能中断影响。
- Artifacts 模块（HTML 缩略图、Mermaid 预览）的修复反映**渲染密集型工作流**也是高频用户场景。
- 会话分叉需求长期存在（5 个月未合并），提示 **cowork 用户希望保留探索性分支**的诉求真实存在。

---

## 8. 待处理积压

| 类型 | 编号/链接 | 描述 | 建议 |
|---|---|---|---|
| 🔔 长期未跟进 PR | [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | feat(cowork): add session fork，提交 5 个月后被 stale 关闭 | 维护者应明确表态该功能是否纳入 roadmap，避免反复出现同类长尾贡献 |
| ℹ️ 升级配套未发布版本 | 暂无对应 tag | OpenClaw 2026.8.1 适配已合入 7 个 PR，但尚无 release tag | 建议尽快切出补丁版本（如 2026.9.x），让升级用户拿到稳定修复 |
| ℹ️ Provider 预装带来的分发体积变化 | 关联 [#2626](https://github.com/netease-youdao/LobsterAI/pull/2626) | 预装 8 个外部 provider 插件会影响安装包体积，需关注下游用户反馈 | 在下一版本说明中标注体积变化和卸载/禁用选项 |

---

### 📊 项目健康度评分（本期）

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐ | 9 个 PR 一次性闭环，效率高 |
| 社区互动 | ⭐⭐ | 今日 0 Issues、PR 评论数据缺失，社区端偏安静 |
| 稳定性闭环 | ⭐⭐⭐⭐⭐ | 全部已报告问题均有对应 fix PR |
| 路线图清晰度 | ⭐⭐⭐ | 升级适配路径清晰，但长期功能（如会话分叉）缺乏明确表态 |
| 发布节奏 | ⭐⭐ | 修复已合入但未发布，建议尽快切版 |

---

*报告基于 2026-09-09 当日 GitHub 公开数据生成。所有链接均指向 `netease-youdao/LobsterAI` 仓库。*

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

# CoPaw 项目动态日报 · 2026-09-09

> 数据来源：github.com/agentscope-ai/CoPaw（仓库内活跃引用的项目标识为 QwenPaw，下文统一使用 CoPaw/QwenPaw 指代）
> 统计周期：2026-09-08 ~ 2026-09-09（UTC）

---

## 1. 今日速览

过去 24 小时，CoPaw 仓库呈现**高活跃、强迭代**的特征：Issues 净增 27 条（新开/活跃 15、关闭 12），PRs 净增 44 条（待合并 20、合并/关闭 24），并同步上线 Beta 版 **v2.2.1-beta.1**。整体来看，项目在 2.2.0 正式版刚发布不到一周后，已经进入"修 bug + 补齐体验"的高密度修复周期：约 **54.5% 的 PR 已完成合并或关闭**，issue 关闭率约 **44.4%**，均处于健康水位。但仍有一批影响交互体验的中高优先级 Bug（模型上下文丢失、心跳消息风暴、UI 弹窗透明化等）尚无对应修复 PR 跟进，需要维护者持续关注。

---

## 2. 版本发布

### v2.2.1-beta.1（Beta，发布时间 2026-09-08）

本次为 2.2.0 正式版之后的首个 Beta，主要内容：

| 模块 | 变更 | 关联 PR |
|---|---|---|
| Agent 模型路由 | 新增 Agent 模型路由配置（agent model routing settings） | #7501 |
| 文档 | 官网文档升级到 v2.2.0 | #7517 |
| Chat 流式 | 修复流式传输期间 resolved session 的同步问题（`sync resolved sessions during streaming`） | （#75xx 系列，作者 @zhaozhuang） |

**版本评估**：这是一次"小步快跑"的修复性 Beta，没有涉及破坏性变更；变更面集中在 Agent 能力扩展与流式稳定性。自动化安装验证 Issue #7635 已启动 4 小时窗口的 Pass Criteria 检查，验证平台兼容性。

**升级建议**：
- 从 2.2.0 升级风险低，可用于内部灰度
- 建议关注 #7501 中"Agent 模型路由"的配置语义，确认是否与现有 provider 配置有冲突
- 流式相关的 resolved session 同步修复可能影响长时间多 session 切换场景，建议在测试环境验证后再用于生产

---

## 3. 项目进展（今日合并/关闭的关键 PR）

| PR | 主题 | 影响 | 状态 |
|---|---|---|---|
| [#7621](https://github.com/agentscope-ai/QwenPaw/pull/7621) | 处理 PDF blocks 在 text-only 模型上的请求归一化 | 修复 #7617 类问题：PDF DataBlock 出现在工具结果历史中导致 OpenAI-compat 端点（Zhipu GLM、self-hosted vLLM 等）直接 400 | 已合并 |
| [#7636](https://github.com/agentscope-ai/QwenPaw/pull/7636) | 无论是否支持多模态，对 OpenAI chat-completions 请求剥离 PDF 文档块（#7621 的后续补丁） | 进一步覆盖了"声称支持多模态但 Chat Completions 端点不接受 `{"type":"file"}`"的边缘场景 | 待合并 |
| [#7598](https://github.com/agentscope-ai/QwenPaw/pull/7598) | 解除 shell 子进程对交互控制台 stdin 的继承 | 修复 Windows 下 `qwenpaw app` 控制台子进程吞噬输入、`Ctrl+C` 失效（对应 #7554） | 已合并 |
| [#7610](https://github.com/agentscope-ai/QwenPaw/pull/7610) | 防止 chat 提交绕过队列 | 修复 409 报错（对应 #7559：任务执行中发消息应进队而非冲突） | 已合并 |
| [#7627](https://github.com/agentscope-ai/QwenPaw/pull/7627) | 让 legacy 握手仲裁 401 discover probe | 修复 MCP streamable-http 401 误判为 OAuth（对应 #7620） | 已合并 |
| [#7631](https://github.com/agentscope-ai/QwenPaw/pull/7631) | Hub 本地沙箱 CLI 鉴权 | 修复 `qwenpaw agents list` 在 Hub sandbox 内 401（对应 #7612） | 已合并 |
| [#7605](https://github.com/agentscope-ai/QwenPaw/pull/7605) | 插件管理器：保留市场页签、一键更新、安装失败局部回滚 | 解决 #7582 提出的插件商店体验痛点 | 已合并 |
| [#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502) | Console 侧边栏与设置体验重构 | 统一侧边栏模式、保留插件扩展点；面向 2.2.x 视觉一致性 | 已合并 |

**整体评估**：今日合并的 PR 集中在 **Provider 兼容性**（PDF/OpenAI 协议差异）、**沙箱与权限边界**（Hub）、**Windows 控制台 I/O**、**MCP 协议握手回退**四大方向，都是 2.2.0 正式版后被集中发现的"协议/兼容性"型缺陷，说明 2.2.0 跨平台、跨 Provider、跨 MCP 服务商的兼容性压力测试仍有补强空间。

---

## 4. 社区热点

按评论数 + 反应数排序：

| 排名 | Issue/PR | 标题 | 评论数 | 👍 | 类型 |
|---|---|---|---|---|---|
| 1 | [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 助手回复已持久化但后续请求中缺失（模型"看不到自己刚说的话"） | 8 | 0 | Bug |
| 2 | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | Tool 返回的图像/PDF 二进制以裸 base64 触发 400 | 6 | 0 | Bug |
| 3 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 任务执行中发消息触发 409 而非进入队列 | 5 | 0 | Bug |
| 4 | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用阻塞事件循环且 timeout 失效（启动 118–135s、消息 126s） | 5 | 0 | Bug |
| 5 | [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | 心跳 cron session 反馈循环导致消息堆积 | 4 | 0 | Bug |
| 6 | [#7615](https://github.com/agentscope-ai/QwenPaw/issues/7615) | 第三方插件/Skill/部署答疑入口 | 1 | **3** | 讨论 |

**诉求分析**：
- **会话一致性与多任务并发**：#7579、#7559、#7363 三条高评论 Bug 都指向同一个底层问题——**CoPaw 的并发/状态机在高负载或长时间运行下的可靠性**。这是 2.2.x 当前最受社区关注的痛点。
- **协议兼容层缺漏**：#7597 与 #7617 反映了 OpenAI 协议生态下不同供应商（DeepSeek、Zhipu、self-hosted vLLM、DashScope）对 `file` / `data` 块的处理差异——这是多 Provider 路由的代价。
- **官方答疑入口缺位**：#7615（3 个 👍）虽然评论不多但正面反馈最高，反映社区对"在哪儿提问"存在普遍困惑，是非常值得纳入 README/Docs 的改进项。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度

| Issue | 描述 | 影响范围 | 是否有 Fix PR |
|---|---|---|---|
| [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron session 反馈循环导致消息重复堆积，agent 失响应约 2 小时，需人工重启 | 生产环境稳定性 | ❌ 无 |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用冻结事件循环：启动 118–135s、消息发送 ~126s，timeout 完全失效 | Windows 桌面端长时间冻结 | ❌ 无 |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 助手回复已持久化但后续请求中模型"看不到自己刚说的话"，表现为空响应 | 会话一致性，2.2.0 引入 | ❌ 无 |
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | llama.cpp v0.4.0-dev 新版本号格式（5 位 build 号）解析失败，`has_update` 误判为"有更新"并**静默回滚**用户已升级的运行时 | 用户自定义运行时被破坏 | ❌ 无 |

### 🟠 中严重度

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#7625](https://github.com/agentscope-ai/QwenPaw/issues/7625) | 后台/中断工具完成后 Gemini 返回 400 "Requests ending with a model turn are not supported" | ❌ 无 |
| [#7622](https://github.com/agentscope-ai/QwenPaw/issues/7622) | v2.2.0 后台弹窗背景"透明化"，背后页面内容透出，遮罩失效（确认非第三方插件引入） | ❌ 无 |
| [#7619](https://github.com/agentscope-ai/QwenPaw/issues/7619) | Windows 11 + Qwen-35B-A3B-FP8 对话无故结束 | ❌ 无 |
| [#7607](https://github.com/agentscope-ai/QwenPaw/issues/7607) | Cursor ACP Runner 扩展方法处理违反 JSON-RPC 协议，导致 `WritableIterable is closed` 流崩溃

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-09-09**

---

## 1. 今日速览

ZeptoClaw 仓库今日活跃度集中在**安全硬化与认证架构**两条主线上，过去 24 小时内共有 2 条 Issue 关闭、2 条 PR 处理（其中 1 条已合并关闭）。维护者 qhkm 同步推进了 secret 存储加固（#652 → #673）与 WebSocket 票据认证重构（#674），形成完整的本地凭证保护闭环。社区方面新增一条来自外部贡献者 putraperdana1207-pixel 的 provider 集成请求（#675），显示项目对外可扩展性正在被关注。整体评估：**项目健康度良好，安全债集中清理中，记忆系统长线 issue #666 仍待跟进**。

---

## 2. 版本发布

本周期内无新版本发布。下一版本预计将吸纳 PR #673（secret 权限硬化）和 PR #674（panel WebSocket 票据化）中的安全修复，待合并后可考虑发版。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

**PR #673 — fix(security): harden secret storage and dependencies** ([链接](https://github.com/qhkm/zeptoclaw/pull/673))
- 作者：qhkm
- 状态：CLOSED（已合并或关闭）
- 内容：将 `~/.zeptoclaw/config.toml`、`panel.token` 等含密钥文件创建为 `0600`，所属目录设为 `0700`，并对老版本遗留文件做权限修复
- 意义：直接解决多用户系统下的本地凭证泄露风险（对应已关闭 Issue #652），是 Rust agent 类项目中典型的"安全债清偿"动作

### 🔄 待合并 PR

**PR #674 — fix(panel): replace websocket bearer URLs with tickets** ([链接](https://github.com/qhkm/zeptoclaw/pull/674))
- 作者：qhkm
- 状态：OPEN（待合并）
- 内容：将 panel WebSocket 连接中的长生命周期 API token / JWT 从 URL `?auth=` 参数替换为 30 秒单次票据，通过 CSRF 保护的鉴权接口换取
- 意义：消除凭证进入 access log 与浏览器历史的隐患，是 WebSocket 鉴权实践的标准改进

**推进评估**：今日项目在「凭证生命周期管理」上向前迈出两步——静态落盘（#673）+ 动态通道（#674），架构更完整。

---

## 4. 社区热点

今日互动最显著的是由维护者 qhkm 自己发起的 **Issue #666** ([链接](https://github.com/qhkm/zeptoclaw/issues/666))，尽管点赞数为 0，但因其属 Exec #8 路线图 §2 章节（Memory and learning system）的核心议题，已有 1 条评论讨论。Issue 主题是「持久化跨会话记忆与事务性写入」，强调：

- **保留优势**：ZeptoClaw 的"选择性检索"（pinned entries + ≤5 命中记忆 + 2000 字符预算）相比 Hermes 全量 profile 更节省 token
- **痛点**：当前 mutation/recall 链路在跨会话持久化与事务一致性上有损失
- **诉求**：补齐持久化与事务能力，同时不牺牲现有轻量优势

背后诉求分析：项目正在向"具备真正记忆能力"而非"会话级 RAG"的个人 AI 助手演进，这对长期用户粘性至关重要。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 是否已有 Fix |
|---|---|---|---|---|
| 🔴 高（已修复） | [#652](https://github.com/qhkm/zeptoclaw/issues/652) | secret 文件未设 0600 权限（config.toml、panel.token） | CLOSED | ✅ PR #673 |
| 🟠 高（已修复） | [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 7 个 RustSec 公告未修复（h2, quick-xml, lopdf, bcrypt, quinn-proto, crossbeam-epoch） | CLOSED | ✅ 应随 #673 一起处理 |

两条与本地凭证安全与依赖漏洞相关的问题在今日双双关闭，对应修复均已落地或正在合并通道。值得注意的是，#651 是阻断 `cargo deny check advisories` CI（zero-tolerance policy）的硬阻塞项，其关闭意味着先前 #646 的恢复作业现在可以重新跑通 CI。

> 今日未出现新的运行时崩溃或功能回归报告。

---

## 6. 功能请求与路线图信号

### 新增请求

**Issue #675 — OrcaRouter provider support for ZeptoClaw** ([链接](https://github.com/qhkm/zeptoclaw/issues/675)))
- 作者：putraperdana1207-pixel（外部贡献者）
- 创建：2026-09-09
- 内容：请求添加 OrcaRouter 作为 ZeptoClaw 的 provider
- 背景描述中贡献者特别提到项目"在 ~6MB Rust 二进制中塞进 tools/memory/channels/providers/沙箱自治，且在无法运行容器的环境启动 ~50ms"的设计取舍，表达了强烈认同

### 路线图信号分析

- OrcaRouter 集成属于"轻量 PR"类工作——只要在 `src/providers/` 注册即可，**很可能被纳入下一版本**
- 同时配合 Issue #666（记忆系统增强），下一版本重心可能落在：**安全收尾 (#673/#674) + provider 扩展 (#675) + 记忆持久化 (#666 草案)** 三条线
- 维护者单日合并安全 PR + 开放票据认证 PR 的节奏显示 v0.x 安全审计周期接近尾声

---

## 7. 用户反馈摘要

- **putraperdana1207-pixel（#675）**：明确表达对 ZeptoClaw "极小体积 + 多功能 + 边缘可跑"取舍的欣赏，这是首次出现外部贡献者主动从架构哲学层面背书项目定位的反馈
- **morler（#651、#652）**：作为安全方向贡献者，主动用 cargo-audit 0.22.2 全量扫描 707 依赖并指出 deny policy 在 zero-tolerance 下会失败，体现成熟贡献者的工程素养
- **qhkm（#666）**：以维护者身份发起长篇设计 issue（>300 字正文），公开权衡 Hermes vs ZeptoClaw 的检索策略，体现透明治理风格

> 总体满意信号强，未见抱怨性反馈。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建距今 | 备注 |
|---|---|---|---|---|
| 🟡 中优先级 | [#666](https://github.com/qhkm/zeptoclaw/issues/666) | Durable cross-session recall and transactional memory writes | 4 天 | 已纳入 Exec #8 路线图，但未见对应 PR 进入；建议维护者拆分出 MVP PR（如先做持久化，事务性留二期） |
| 🟢 低优先级 | [#674](https://github.com/qhkm/zeptoclaw/pull/674) | fix(panel): replace websocket bearer URLs with tickets | 1 天 | 刚开 PR，待 reviewer 验证票据流程与 CSRF 防护 |

**提醒**：
- #666 虽新但属 P2-high 标签且关联核心路线图，建议维护者**本周内**评估是否拆分出可合并的最小子集 PR，避免成为长期积压
- #674 需要至少一名 reviewer 介入，目前项目活跃 reviewer 较少，建议 qhkm 主动 ping 安全方向贡献者 morler

---

## 📊 数据看板

| 指标 | 数值 |
|---|---|
| 24h 新开/活跃 Issue | 2 |
| 24h 关闭 Issue | 2 |
| 24h 待合并 PR | 1 |
| 24h 已合并/关闭 PR | 1 |
| 24h 新 Release | 0 |
| 24h 总互动（评论） | 1 |
| 关闭率（今日） | 100%（4/4 全部推进或关闭） |

---

*日报基于 GitHub 公开数据生成，反映 2026-09-09 当日 ZeptoClaw 项目动态。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-09

> 数据周期：过去 24 小时 ｜ 数据源：GitHub Issues & PRs

---

## 1. 今日速览

ZeroClaw 项目今日保持**高活跃度**，过去 24 小时共发生 **27 条 Issue 更新**与 **50 条 PR 更新**，但合并/关闭比例较低（5/50，10%），大量 RFC 仍处讨论阶段。今日新增内容以**架构治理类 RFC**与**运行时 Bug 修复**为主线：多条围绕 OpenAI Responses 适配器、Telegram 通道、ZeroCode TUI、Provider 凭据轮换、WASM 插件运行时的事件历史 RFC 在持续修订；同期多条 P1 级别的工具裁剪与提示缓存相关 Bug 进入实现阶段。**总体判断：项目处于"RFC 治理改革 + 历史包袱集中清理"的并行轨道**，合并节奏受 RFC 投票窗口改革讨论影响而有所放缓，但代码层面推进信号积极。

---

## 2. 版本发布

**无新版本发布**。最近一次发布亦未列出，代码面增量以 PR 形式持续累积。

---

## 3. 项目进展

过去 24 小时共有 **5 条 PR 进入已合并/已关闭** 状态，相对前一日明显放缓。重点观察：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#10675](https://github.com/zeroclaw-labs/zeroclaw/pull/10675) | fix(ci): make Windows test scoping explicit | CLOSED | 将 #10668 的 locale 与 build-script 规则下沉到显式 Windows 测试范围分类器，CI 精度提升 |
| [#10620](https://github.com/zeroclaw-labs/zeroclaw/pull/10620) | fix(channels): explain permanently dropped voice messages to the sender | CLOSED | Telegram 永久丢弃的语音消息现在会向发送者解释原因，用户体验改进 |
| 其他已合并 PR 未在本次数据前列展示 ||| |

**整体向前迈进多少：**
- **PR 队列层面**：50 条待审 PR 中 41 条为 XL/L 大型变更，集中在 runtime 重构（#10722）、ACP 会话工具暴露（#10468）、delegation 沙箱（#10391）、Telegram 媒体批量处理（#8955）、Anthropic 终止响应分类（#9447）等长期议题。
- **CI 治理层面**：Windows 测试作用域显式化（#10675）落地，是评审证据治理（#10366）改革路线的实际兑现。
- **运行时层**：#10722（pre-tool narration 投递）、#10696（基于 low-water 目标的 history 裁剪，闭环 #10674）等修复 PR 已就绪等待评审，是 P1 提示缓存 Bug 修复链路的延续。
- **保守估计**：项目整体向前推进约 **5–7%** 的代码层演进，RFC 治理改革讨论同步展开。

---

## 4. 社区热点

按评论数排序的当日讨论焦点：

| 排名 | Issue | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 🥇 | #9487 RFC: Runtime-owned conversation sessions and transport surface adapters（**Rev.5**） | 35 | 会话/传输适配器归属 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| 🥈 | #9488 RFC: Unified file and attachment architecture（**Rev.10**） | 28 | 对话面文件/附件统一架构 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| 🥉 | #6996 RFC: Granular sandbox policy — filesystem restrictions | 26 | 细粒度沙箱策略 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) |
| 4 | #8692 [Tracker]: Maintainer decision queue for RFCs and design issues | 15 | 维护者决策队列 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 5 | #10076 RFC: Composable WASM plugin runtime architecture | 11 | 可组合 WASM 插件运行时 | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |

**诉求分析：**
- **#9487、#9488 反复修订（Rev.5 / Rev.10）**反映出社区在"会话与附件统一建模"方向上仍存在结构性分歧，每次新修订都会重新打开投票窗口。
- **#6996、#10076** 体现项目对**安全边界与可扩展性**的双重焦虑——文件系统策略需要在 OS 后端（Bubblewrap / Landlock / Seatbelt）与应用层 admission 之间统一收敛。
- **#8692** 作为决策队列 Tracker，今日新增 15 条评论，意味着大量 RFC 在等待维护者拍板，**已成为项目吞吐瓶颈**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 S1 / P1（工作流阻塞）
- **[#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333)** failed ACP turns disappear after switching sessions（zerocode, ACP） — 失败回合切换会话后整段消失。状态 in-progress。
- **[#10674](https://github.com/zeroclaw-labs/zeroclaw/issues/10674)** history trimming stops at the cap, defeating prompt caching（Anthropic/Compatible, 高风险）— 工具密集型会话反复裁剪，提示缓存失效。**已有 fix PR #10696**（low-water 目标策略），状态 accepted。

### 🟡 S2 / P2（功能退化）
- **[#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700)** cost records share daemon-lifetime session id — `CostTracker.session_id` 是进程级 UUID，无法按会话分账。直接影响计费/可观测性。
- **[#10667](https://github.com/zeroclaw-labs/zeroclaw/issues/10667)** ZeroCode 重复渲染流式响应（zerocode, ACP）— 完成响应被渲染两次，但 ACP 持久化只有一次。状态 in-progress。
- **[#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721)** knowledge.db_path tilde expansion is global replace — `~` 在路径中所有位置被全局替换，导致工具静默丢失。影响知识库功能可用性。
- **[#10701](https://github.com/zeroclaw-labs/zeroclaw/issues/10701)** image attachment invalidates entire history cache prefix（Compatible provider, Anthropic behind OpenAI gateway）— 图片附件令缓存前缀整体失效。

### 🟢 S3 / P3（次要问题）
- **[#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514)** batch Telegram media groups into one multimodal turn（Telegram）— 多图分组未批量化。状态 in-progress，**已有候选 PR #8955** 等待评审。
- **[#10720](https://github.com/zeroclaw-labs/zeroclaw/issues/10720)** zerocode v0.8.5 agent responses render twice（zerocode, 显示层）— 纯 UI 重复渲染。
- **[#10702](https://github.com/zeroclaw-labs/zeroclaw/issues/10702)** token-budget history trimming stops at first fitting turn — 与 #10674 同源的滞回（hysteresis）缺陷。

**稳定性总评：** P1/S1 级别 Bug 已基本进入"有对应 PR"或 in-progress 状态；P2 中"提示缓存与裁剪"形成修复簇（#10674 + #10702 + #10696 + #10701），预计未来一周内可集中收敛。

---

## 6. 功能请求与路线图信号

**OpenAI Responses 适配器增强簇**（一次性提交 5 个 RFC/Feature 帖，#10708 / #10707 / #10704 / #10706 / #10705）：

- [#10708](https://github.com/zeroclaw-labs/zeroclaw/issues/10708) Astra WebSocket 主动响应转向
- [#10707](https://github.com/zeroclaw-labs/zeroclaw/issues/10707) OpenAI Responses 托管式程序化工具调用
- [#10704](https://github.com/zeroclaw-labs/zeroclaw/issues/10704) 异步函数工具支持
- [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) Responses 调用路径上保留不透明推理状态
- [#10705](https://github.com/zeroclaw-labs/zeroclaw/issues/10705) 兼容模型支持 `max` 推理 effort

**信号解读：** 这是一组明显的**主线方向信号**——作者 IftekharUddin 集中提交 Responses 协议深集成功能，且与 [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)（Provider 身份与上下文窗口修正）、[#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419)（限流凭据轮换）形成统一规划，**OpenAI Responses 协议深集成极有可能成为下个版本路线图的支柱**。

**通道功能：**
- [#10715](https://github.com/zeroclaw-labs/zeroclaw/issues/10715) Telegram 群聊被动上下文（对齐 WhatsApp #8379） — 跨通道一致性诉求。
- [#10641](https://github.com/zeroclaw-labs/zeroclaw/issues/10641) Web 端 Cron 调度逐字段输入 — UX 改进。

**ZeroCode 多会话体验：**
- [#9727](https://github.com/zeroclaw-labs/zeroclaw/issues/9727) 多 agent 侧栏运行监控 Epic + 对应 PR [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739)（作者已完成多会话生命周期修复） — **高概率纳入下版本**。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼的真实用户痛点：

- **🤖 提示缓存成本焦虑**（#10674、#10701、#10702）: 工具密集场景下频繁裁剪让 Anthropic/Compatible provider 的缓存价值归零，社区强烈希望有 low-water 策略而非 cap 策略。
- **📱 Telegram 多模态体验缺失**（#5514、#10620）: 一组图片被打散成多次模型调用，以及语音消息被永久丢弃却不告知发送者，反映通道层"用户感知一致性"短板。
- **💸 计费可观测性诉求**（#10700）: `CostTracker.session_id` 全进程共享导致**无法按会话拆账**，对企业用户是真实痛点（影响成本归因）。
- **🧩 适配器能力碎片化**（#10704–#10708 一组）: 用户期望 OpenAI Responses 提供的能力（异步工具、托管式程序化、推理 effort max）但当前 Responses 适配器仅暴露子集。
- **📜 RFC 流程摩擦**（#10549、#8692）: 48h/72h 强制讨论窗口在实际中并未提升评审密度，反而制造延迟；同时维护者决策队列堆积，社区明确希望**简化投票 + 让 REVISE 停掉当前快照**。
- **🪟 ACP 会话可靠性**（#9333、#10468）: 失败回合"消失"和工具看到的会话视图不一致，是 ACP 集成方的关键可用性缺陷。
- **😊 满意度信号**: PR #10620（被丢弃语音消息的发送者解释）这种"小但立刻可见"的修复在通道层获得正向反馈。

---

## 8. 待处理积压（提醒维护者）

### 🟥 长期未关闭的高优先级 RFC（均挂 needs-maintainer-review）

| Issue | 创建日期 | 当前状态 | 链接 |
|---|---|---|---|
| #9487 RFC Rev.5 Runtime-owned sessions | 2026-07-28 | 待投票快照 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) |
| #9488 RFC Rev.10 Unified file/attachment | 2026-07-28 | 待投票快照 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) |
| #10076 WASM plugin runtime | 2026-08-18 | needs-maintainer-review | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) |
| #10526 Append-only session event history | 2026-09-01 | needs-maintainer-review | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) |
| #8692 Maintainer decision queue | 2026-07-04 | Tracker 持续累积 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

### 🟧 长期挂起的 PR（≥30 天，仍 Open）

| PR | 标题 | 创建日期 | 阻塞原因 | 链接 |
|---|---|---|---|---|
| #9324 | A2A outbound client config (#9106) | 2026-07-24 | needs-author-action / RFC 实施等待 | [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) |
| #9419 | rotate live credentials after rate limits | 2026-07-26 | needs-maintainer-review, do-not-merge | [#9419](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) |
| #9739 | multi-session panes with agent sidebar | 2026-08-04 | blocked, needs-maintainer-review | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) |
| #8966 | carry live provider identity on usage events | 2026-07-11 | needs-author-action | [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) |
| #9753 | distinguish absent vs empty risk-profile allowed_tools | 2026-08-04 | needs-author-action, stale-candidate | [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) |
| #10241 | restore supervised shell approval routing | 2026-08-22 | blocked, needs-maintainer-review | [#10241](https://github.com/zeroclaw-labs/zeroclaw/pull/10241) |
| #9447 | classify incomplete terminal responses (Anthropic) | 2026-07-27 | needs-author-action | [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) |
| #8955 | batch Telegram media group attachments | 2026-07-10 | needs-author-action | [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) |

### ⚠️ 维护者行动建议

1. **集中清理 RFC 投票**：#9487、#9488 已修订到 Rev.5/Rev.10，请维护者尽快开启新一轮投票快照，避免"投票无限循环"。
2. **评估 RFC 流程改革**：#10549（移除强制讨论窗口 + REVISE 停止当前快照）若获通过将显著降低决策队列压力，建议优先评审。
3. **PR #9419 / #10241 / #9739** 三条涉及"凭据轮换 / 审批路由 / 多会话 UI"三个**跨多个 RFC 的依赖点**，是真正的吞吐瓶颈，建议拆解为可合并子集。
4. **stale-candidate 标记的 PR #9753**（risk-profile allowed_tools）已超过 30 天，需要明确拒绝或重写。

---

**报告生成时间**：2026-09-09 ｜ **数据窗口**：过去 24 小时 ｜ **项目健康度评级**：🟢 活跃 / 🟡 RFC 治理瓶颈 / 🟢

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*