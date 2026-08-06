# OpenClaw 生态日报 2026-08-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-06 01:58 UTC

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

**日期：** 2026-08-06
**数据周期：** 过去 24 小时

---

## 一、今日速览

OpenClaw 仓库在过去 24 小时呈现**高强度维护态势**：Issues 更新 500 条（435 新开/活跃，65 已关闭），PRs 更新 500 条（438 待合并，62 已合并/关闭），但**无新版本发布**。讨论热度高度集中在**会话状态可靠性、Codex 集成稳定性、网关事件循环阻塞**三类问题上，多个 P0/P1 级别问题反映出 2026.7.x 系列版本在嵌入式 runner、SQLite 迁移、provider cooldown 等核心路径上仍存在稳定性短板。维护者通过关闭 8 个高优 issues（包括 #119090 数据丢失风险、#118846 网关主线程饱和）展现了处置能力，但积压问题仍然显著。

---

## 二、版本发布

**无新版本发布。**

当前最新公开版本停留在 **2026.7.2 (b4f01af)**，包含多个 beta（beta.5/beta.7）。基于 #119263 等 P0 报告（v14→v15 数据库迁移失败导致网关无法启动），社区正在等待 **2026.7.3** 或更高补丁版本，但尚未观察到发布动作。

---

## 三、项目进展

### 已关闭/合并的重要 Issue（修复已落地）

| Issue | 标题 | 关闭原因 | 影响 |
|---|---|---|---|
| [#118846](https://github.com/openclaw/openclaw/issues/118846) | Gateway 主线程被插件元数据快照 + fs statting 饱和（ws_upgrade 1006） | 已修复 | 解决本地 RPC 死亡 |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | 2026.7.1 与 llama.cpp 模板解析失败 | 已修复 | 恢复本地 provider 路径 |
| [#92369](https://github.com/openclaw/openclaw/issues/92369) | Cron 隔离会话中子代理编排无可靠编排机制 | already-fixed | 修复 cron 子代理 |
| [#119090](https://github.com/openclaw/openclaw/issues/119090) | Managed media cleanup 在不可读 session store 时 fail-open 永久删除媒体 | 已修复（bulk-filed） | **阻止 P0 数据丢失** |
| [#91564](https://github.com/openclaw/openclaw/issues/91564) | Telegram 特定 forum topic 因 stuck-session 恢复成永久入站黑洞 | already-fixed | 恢复 Telegram forum |
| [#119534](https://github.com/openclaw/openclaw/issues/119534) | 内置 skills 相对路径解析失败 | 已修复 | 技能可读性 |
| [#92672](https://github.com/openclaw/openclaw/issues/92672) | Rate-limit fallback 用户可见错误 + 切换通知（RFC） | 已合并 | 提升 fallback 体验 |
| [#112278](https://github.com/openclaw/openclaw/issues/112278) | diagnostics-otel root span 新建 traceId 而非采用诊断上下文 | 已修复 | OTel 追踪连续性 |

### 已合并/关闭的重要 PR

- **#119687** fix(agents): stage inbound media into reused SSH sandbox workspaces（[P1](https://github.com/openclaw/openclaw/pull/119687)）— 远程 SSH 沙箱媒体落盘修复。
- **#118830** fix(media): preserve signed generation URLs across delivery retries（[P2](https://github.com/openclaw/openclaw/pull/118830)）— 媒体重试签名保护。
- **#114523** fix(mattermost): backfill thread history from server when window empty（[P2](https://github.com/openclaw/openclaw/pull/114523)）— Mattermost 历史回填。
- **#118282** fix(doctor): import legacy exec approvals with null usage metadata（[P1](https://github.com/openclaw/openclaw/pull/118282)）— 兼容老格式 exec-approvals。
- **#119230** fix(auto-reply): mark truncated row lists in export-session warnings（[P3](https://github.com/openclaw/openclaw/pull/119230)）— 导出警告完整性。
- **#119801** fix(codex): show endpoint probe failure details（[链接](https://github.com/openclaw/openclaw/pull/119801)）— Codex 端点探针诊断。

> 整体看，维护团队在 **数据丢失防护、网关启动、Codex 集成、会话生命周期** 四个方向均有实质性推进，但代码合入量远低于 issue 增长速率，积压风险持续累积。

---

## 四、社区热点（按评论数排序）

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#116201](https://github.com/openclaw/openclaw/issues/116201) Realtime voice 可保留无界 provider 和 consult 状态 | 59 | 0 | 实时语音资源泄漏 |
| 🥈 | [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging by Source | 27 | 0 | 内存中毒防御 |
| 🥉 | [#44925](https://github.com/openclaw/openclaw/issues/44925) 子代理完成静默丢失 | 25 | 2 | Telegram 编排可靠性 |
| 4 | [#86519](https://github.com/openclaw/openclaw/issues/86519) Telegram 上 Agent 重复回复 2-10 次（5.20 更新后回归） | 13 | 1 | 消息重复回归 |
| 5 | [#51429](https://github.com/openclaw/openclaw/issues/51429) 工作路径被硬编码到代码中（/Users/wangtao） | 12 | 0 | 严重的代码卫生问题 |
| 6 | [#6615](https://github.com/openclaw/openclaw/issues/6615) exec-approvals 添加 denylist 支持 | 11 | 8 | 安全策略增强 |
| 7 | [#113306](https://github.com/openclaw/openclaw/issues/113306) SQLite snapshot restore 缺乏端到端崩溃与身份保证 | 12 | 0 | 持久化一致性 |
| 8 | [#67419](https://github.com/openclaw/openclaw/issues/67419) 启动文件每轮重新注入，浪费 20-30% token | 10 | 2 | 上下文效率 |

### 诉求分析

1. **会话状态与恢复** 是社区第一痛点（#116201、#44925、#113306、#112423、#85251、#109490、#96692、#116022、#107873），跨多个组件（Codex app-server、嵌入式 runner、SQLite、Slack/Telegram/WebChat）的会话生命周期管理需要系统性重构。
2. **安全与权限边界** 关注度上升：#7707（内存信任标记）、#6615（exec denylist，已获 8 👍）是社区主动发起的 hardening 请求。
3. **配置卫生问题触怒社区**：#51429（硬编码 `/Users/wangtao` 路径）虽然偏 P2，但吐槽度极高，反映用户对代码发布质量的敏感。
4. **回归问题**：#86519（Telegram 重复回复）从 5.20 持续至今未被根治，是用户最直接的体验痛点。

---

## 五、Bug 与稳定性

### P0 — 必须立即修复

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#119263](https://github.com/openclaw/openclaw/issues/119263) | Agent DB v14→v15 迁移失败：`no such column: entry_valid`，gateway 拒绝启动 | 待跟踪，linked-pr-open |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 文件级 provider cooldown 在充值后仍阻塞用户数小时 | 待跟踪，needs-product-decision |
| [#119090](https://github.com/openclaw/openclaw/issues/119090) **(已关闭)** | Managed media cleanup 在不可读 session store 时永久删除媒体 | ✅ 已修复（bulk-filed） |

### P1 — 高优先级稳定性问题

| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | Realtime voice 无界状态保留 | 无 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | Subagent completion 静默丢失（多错误码 E31/E42/E45） | 无 |
| [#118846](https://github.com/openclaw/openclaw/issues/118846) **(已关闭)** | Gateway 主线程被插件元数据快照饱和 | ✅ |
| [#86519](https://github.com/openclaw/openclaw/issues/86519) | 5.20 后 Telegram 重复回复 2-10 次 | 无 |
| [#112423](https://github.com/openclaw/openclaw/issues/112423) | 大型 SQLite 转录清理阻塞网关事件循环 | 无 |
| [#85251](https://github.com/openclaw/openclaw/issues/85251) | Codex app-server 发出 `notification:turn/started` 后静默 | 无 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | Loop detection 阻断 exec 但不终止卡住的 agent 运行 | 无 |
| [#109490](https://github.com/openclaw/openclaw/issues/109490) | Codex app-server: `terminate:true` 后承诺工作不执行 | 无 |
| [#85844](https://github.com/openclaw/openclaw/issues/85844) | 自动更新后遗留陈旧哈希 bundle 导入 | 无 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | Hook/tool 子进程泄漏产生 zombie 累积 | 无 |
| [#113306](https://github.com/openclaw/openclaw/issues/113306) | SQLite snapshot 缺少端到端崩溃保证 | 无 |
| [#53540](https://github.com/openclaw/openclaw/issues/53540) | 嵌入式 runner 大参数工具调用"Network connection lost" | 无 |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | Billing cooldown 比 outage 寿命更长 | 无 |
| [#106786](https://github.com/openclaw/openclaw/issues/106786) | gpt-5.6 在 ChatGPT-OAuth 路径上静默 fallback | 无 |
| [#96692](https://github.com/openclaw/openclaw/issues/96692) | Slack 线程回复丢失（origin tuple 遗失） | 无 |
| [#90098](https://github.com/openclaw/openclaw/issues/90098) | 大附件处理栈溢出（`Maximum call stack`） | 无 |
| [#107873](https://github.com/openclaw/openclaw/issues/107873) | 嵌入式 prompt-lock session takeover 中止可见 WebChat turn | 无 |
| [#119742](https://github.com/openclaw/openclaw/issues/119742) | 多 agent 启动 252-339s 阻塞请求路径 | linked-pr-open（#119742） |

### P2 — 中等优先级回归

- [#77306](https://github.com/openclaw/openclaw/issues/77306) QQBot 消息重复发送（hook 重放）
- [#77930](https://github.com/openclaw/openclaw/issues/77930) Discord channel 在 2026.5.4 不加载
- [#116512](https://github.com/openclaw/openclaw/issues/116512) Telegram progress 在 snapshot ID 变化时重复首段评论
- [#44134](https://github.com/openclaw/openclaw/issues/44134) Google Antigravity 因频繁 schema reload 误判违规
- [#116691](https://github.com/openclaw/openclaw/issues/116691) 火山引擎 openai-responses 长对话缺失 `input.status`
- [#118560](https://github.com/openclaw/openclaw/issues/118560) WebChat canvas 在 session 重置后隐藏历史消息

---

## 六、功能请求与路线图信号

### 已具备较高社区势能

| Issue | 标题 | 👍 | 路线图可能 |
|---|---|---|---|
| [#6615](https://github.com/openclaw/openclaw/issues/6615) | exec-approvals 增加 denylist |

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告
**数据窗口**：2026-08-06（过去 24 小时）
**覆盖项目**：13 个

---

## 一、生态全景

个人 AI 助手与自主智能体开源生态整体进入"**规模化 vs 稳定化**"并行的成熟阶段。一方面，OpenClaw（500/500 Issue/PR）、ZeroClaw（50/50）、IronClaw（43/50）、Hermes Agent（49/49）、CoPaw（22/50）等头部仓库维持极高吞吐；另一方面，**稳定性、可观测性、安全语义、跨通道一致性**正取代"新功能"成为首要议题——P0/P1 Bug 在 OpenClaw（DB 迁移 #119263、网关主线程饱和 #118846 已修）、CoPaw（v2.1.0-beta.1 三大崩溃 #6697/#6698/#6732）、IronClaw（RC 期 P1 幻觉类 #7246/#7247）持续暴露。**MCP 已成为事实标准扩展协议**，而 Provider 兼容性、子代理上下文隔离、Configuration-as-Code 等议题在多项目同步崛起，提示生态正在从"单点能力堆叠"转向"平台级基础设施"的下一阶段。

---

## 二、各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 已合并/关闭 | Release 状态 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw**（参照）| 500（435 活跃/65 关闭）| 500（438 待合并/62 合并）| 62 PR / 65 Issue | 无（停留 2026.7.2）| 🟡 中（量级最大，积压显著）|
| **ZeroClaw** | 50（49 活跃/1 关闭）| 50（49 待合并/1 关闭）| 1 PR / 多 Issue | 无（最新 0.8.3）| 🟡 中（设计/RFC 期，合入率低）|
| **IronClaw** | 43（33 活跃/10 关闭）| 50（32 待合并/18 合并）| 18 PR / 10 Issue | **v1.1.0-rc.1（8-3 发布）** | 🟢 高（RC 收尾期，合入率 36%）|
| **Hermes Agent** | 49（48 活跃/1 关闭）| 49（48 待合并/1 合并）| 1 PR / 1 Issue | 无 | 🟡 中（重构为主，量级大但合入慢）|
| **CoPaw** | 22（17 活跃/5 关闭）| 50（29 待合并/21 合并）| 21 PR / 5 Issue | 无（v2.1.0-beta.1）| 🟢 中偏好（合入率 42%，beta 暴露多）|
| **LobsterAI** | 2 | 13（1 待合并/12 合并）| 12 PR | **v2026.8.5（8-5 发布）** | 🟢 高（合入率 92%）|
| **NanoBot** | 4 | 15（8 待合并/7 合并）| 7 PR | 无 | 🟢 中偏好（合入率 47%，节奏健康）|
| **NanoClaw** | 2 | 12（10 待合并/2 合并）| 2 PR | 无 | 🟡 中（修复优先）|
| **PicoClaw** | 0 | 4（3 待合并/1 关闭）| 1 PR | 无 | 🟠 低（社区静默）|
| **NullClaw** | 0 | 2（0 合并）| 0 PR | 无 | 🟠 低（仅修复 PR 待评审）|
| **TinyClaw** | — | — | — | — | ⚫ 无活动 |
| **Moltis** | — | — | — | — | ⚫ 无活动 |
| **ZeptoClaw** | — | — | — | — | ⚫ 无活动 |

**观察要点**：仅 **IronClaw** 与 **LobsterAI** 本周期有正式发布；OpenClaw/ZeroClaw/Hermes Agent 等大体量仓库合入率均低于 15%，印证"Issue 增速 > 修复能力"是当前头部项目的共同痛点；尾部 5 个项目中有 3 个（39%）完全无活跃信号。

---

## 三、OpenClaw 在生态中的定位

**体量层面**：OpenClaw 的 500 Issue / 500 PR 是次梯队项目（IronClaw/Hermes/ZeroClaw/CoPaw 50 量级）的 **10 倍**，是 NanoBot（15 PR）等中小型项目的 **33 倍**，是 PicoClaw/NullClaw 等尾部项目的 **100 倍以上**，坐实"参照基准 + 流量汇聚点"地位。

**与同类相比的差异**：

| 维度 | OpenClaw | IronClaw（最接近）| ZeroClaw | Hermes Agent |
|---|---|---|---|---|
| 议题规模 | 500+ | 43 | 50 | 49 |
| 合入率 | 12.4% | 36% | 2% | 2% |
| 发布节奏 | 卡在 2026.7.2 | 处于 RC 期 | 卡在 0.8.3 | 无 |
| 议题焦点 | 会话状态/Codex/网关 | MCP/扩展/失败可读性 | 认证/Shell/RFC | god-file 重构/平台对齐 |
| 治理方法 | 自由生长+批量处置 | 强结构化（Epic/dogfooding）| RFC 驱动 | 5×2×3 重构方法论 |

**优势**：

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期**: 2026-08-06  
**数据周期**: 过去 24 小时  
**仓库**: [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日维持了较高的开发活跃度，过去 24 小时内共有 **19 条更新**（4 个 Issue + 15 个 PR），其中 **7 个 PR 已合并/关闭，合并率达到 47%**，整体节奏健康。社区侧用户活跃度一般——4 个新开/活跃 Issue 中仅 2 个有用户评论，WhatsApp 音频发送 Bug (#5149) 讨论相对最多。代码侧呈现明显的"WebUI 体验优化"主线，PR #5249、#5250、#5252、#5253、#5259 几乎全部由贡献者 chengyongru 和 Re-bin 围绕 WebUI 的视觉一致性、临时聊天模式、共享终端等方向推进。项目无新版本发布，处于持续功能迭代与 Bug 修复的密集开发期。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。版本发布环节省略。

---

## 3. 项目进展

今日共 **7 个 PR 完成生命周期**，涉及通道兼容、WhatsApp 媒体分发、元搜索、WebUI 视觉、安全模型等多个方向，整体推进力度较大。

### 已合并/关闭的重要 PR

| PR | 类型 | 关键变更 |
|---|---|---|
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) | refactor/security (P1) | **移除请求级访问授权层**：删除 #5211 引入的 `Tool.available()` 抽象和 `SessionAccessScope`，回到单一构造期 `Tool.enabled()` 开关；session 工具可直接读写已持久化的 session。这是安全模型的一次简化重构。 |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | feature (P1) | **集成 mst-python 元搜索 Provider**：通过 RRF（Reciprocal Rank Fusion）聚合 DuckDuckGo、Google、Brave、Bing 等多引擎结果，丰富 Web 搜索覆盖面。 |
| [#5203](https://github.com/HKUDS/nanobot/pull/5203) | bugfix (P2) | **WhatsApp 出站媒体检测**：基于文件内容而非扩展名识别，修复 libmagic M4A/AAC 别名歧义，未支持的音频以文档形式发送。 |
| [#5254](https://github.com/HKUDS/nanobot/pull/5254) | feature (P2) | **Provider 原生请求开关**：在 WebUI 暴露 OpenAI Codex Fast (`service_tier=priority`)、OpenAI/DeepSeek web_search 工具、Grok X Search 等开关。 |
| [#5249](https://github.com/HKUDS/nanobot/pull/5249) | refactor (P2) | **WebUI 视觉一致性**：统一菜单/弹窗/对话框层级，简化 Skills 与 Channels 布局。 |
| [#5250](https://github.com/HKUDS/nanobot/pull/5250) | bugfix (P2) | **活动面板边缘羽化**：为可滚动的 agent activity pane 加上方向感知渐隐。 |
| [#5184](https://github.com/HKUDS/nanobot/pull/5184) | feature (conflict→closed) | Quick Chat + Temporary Chat 功能 PR 因冲突关闭，已被 #5252 取代/拆分。 |

**整体评估**：项目今日在 WebUI 体验、安全简化、搜索能力、通道兼容性四条线并行推进。其中 #5238 (P1 安全重构) 和 #5234 (P1 元搜索) 是优先级最高的两条合并，对项目稳定性与信息检索质量具有实质性提升。

---

## 4. 社区热点

### 讨论最活跃

- **[Issue #5149](https://github.com/HKUDS/nanobot/issues/5149) — "no audio ?"**  
  4 条评论，是今日讨论最多的 Issue。用户 mxnbf 报告 WhatsApp 通道只能接收音频消息但无法发送。日志中 `neonize.utils.ffmpeg WARNING` 暗示 ffmpeg 转码可能未正确触发。

### 新提出、值得关注的诉求

- **[Issue #5251](https://github.com/HKUDS/nanobot/issues/5251) — Feature: Add MCP Apps host support to the WebUI**  
  用户 yuklcool 提出集成官方 MCP Apps 扩展（`io.modelcontextprotocol/ui`），让 MCP server 可以向 WebUI 注入交互式 UI 组件。这与 NanoBot 当前"模型面对的文本/图像结果"形成对比，是 MCP 生态的趋势方向。

### 共性诉求

今日用户/开发者声音集中在两点：**通道可靠性**（WhatsApp 音频、Matrix 房间加入）和 **Agent 行为边界**（goal 续作循环、MCP 错误传播）。前者是已有功能的稳定性补丁，后者反映出 Agent 设计中"目标持续推进"与"用户交互打断"的张力。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🟠 P1 — 安全 / 行为错误类

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 工具返回业务错误 envelope（如 404 + "data not exist"）时 `isError=False`，Agent 将其当作成功，无法重新调用，需等 tool_timeout。 | 🔴 无 fix PR |
| [#5256](https://github.com/HKUDS/nanobot/issues/5256) | `/goal` 消息在等待用户回答时产生数十条重复回复，绕过了 `_MAX_INJECTION_CYCLES` 上限。 | 🟢 **已有 fix** → [#5257](https://github.com/HKUDS/nanobot/pull/5257) |

### 🟡 P2 — 功能失效 / 兼容类

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#5149](https://github.com/HKUDS/nanobot/issues/5149) | WhatsApp 通道无法发送音频，仅能接收。 | 🟡 邻近 fix：#5203 已合并音频格式分发逻辑，但用户报的问题是否完全覆盖尚需验证 |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | Matrix 加入房间时 nio 发送空 POST body，Continuwuity 等 homeserver 报 `M_BAD_JSON`。 | 🟢 已有 fix PR，待合并 |

**总结**：今日最值得维护者关注的稳定性风险是 **#5237（MCP 错误传播）**——它直接破坏 Agent 自我纠错能力，目前**无对应 fix PR**，需尽快跟进。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 匹配 PR | 纳入下一版本的概率 |
|---|---|---|---|
| **临时聊天模式（不写入历史）** | [#5252](https://github.com/HKUDS/nanobot/pull/5252) + [#5259](https://github.com/HKUDS/nanobot/pull/5259) | 已有完整实现链 | ⭐⭐⭐⭐⭐ 极高（已有 stacked PR） |
| **MCP Apps UI Host** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 暂无 | ⭐⭐⭐ 中等（生态趋势明确，但工作量大） |
| **项目级共享交互终端（WebUI）** | [#5253](https://github.com/HKUDS/nanobot/pull/5253) | 已有 PR | ⭐⭐⭐⭐ 高 |
| **Provider 原生功能开关** | [#5254](https://github.com/HKUDS/nanobot/pull/5254)（已合并） | — | ✅ 已落地 |
| **API 服务状态真实呈现 + `nanobot api status`** | [#5255](https://github.com/HKUDS/nanobot/pull/5255) | 已有 draft | ⭐⭐⭐ 中等 |
| **元搜索 Provider (mst-python)** | [#5234](https://github.com/HKUDS/nanobot/pull/5234)（已合并） | — | ✅ 已落地 |

**路线图信号**：WebUI 的"轻量化会话管理"（Quick Chat / Temporary Chat）是当前主线，PR #5252 + #5259 已形成 stacked PR 序列，预期将很快进入下一个 release。

---

## 7. 用户反馈摘要

从 4 条 Issue 的内容与评论提炼：

### 用户痛点

- **跨通道能力不对等**（#5149）：WhatsApp 的音频能收不能发，用户被堵在"半功能"状态，影响对话自然性。属于"高优先级低频"使用场景，但破坏体验完整性。
- **Agent 失控循环**（#5256）：`/goal` 在等待用户时仍持续自注入"继续工作"提示，导致重复回复、token 浪费。这暴露了"goal 持续模式"未受上限约束的设计缺陷。
- **错误信号被吞掉**（#5237）：MCP 业务错误无法传到 LLM，用户最终只能看到超时，缺乏可观测性。

### 使用场景

- 用户在 **WhatsApp/Matrix 通道** 中与 Agent 对话；
- 通过 **WebUI 进行深度会话**，并依赖 MCP 工具链；
- 关注 **Provider 原生能力**（Grok X Search、OpenAI web_search）。

### 满意度线索

Issue 评论数普遍偏低（0–4），反映出**社区反馈规模有限**。但技术报告的细节深度（如 #5237 提供了具体 envelope 格式、`isError` 字段）说明活跃用户多为开发者，对项目内部行为有较好理解。

---

## 8. 待处理积压

### 长期未响应的 Issue

- **[#5149](https://github.com/HKUDS/nanobot/issues/5149)（WhatsApp 音频）**  
  创建于 2026-07-28，已 8 天，虽有 4 条评论但**修复 PR #5203 已合并**，未确认是否覆盖该用户场景。**建议维护者**：@mxnbf 请求验证或在 issue 上明确关闭。

### 待合并 PR 提醒（按优先级）

| PR | 优先级 | 说明 |
|---|---|---|
| [#5258](https://github.com/HKUDS/nanobot/pull/5258) | P1 | Web 端把带凭据 URL（userinfo、`token=`、`X-Amz-*` 等）从远程 Jina 切回本地 readability，**安全敏感**，建议优先 review |
| [#5257](https://github.com/HKUDS/nanobot/pull/5257) | P2 | 与 #5256 直接对应，应尽快合并以回应用户 |
| [#5248](https://github.com/HKUDS/nanobot/pull/5248) | P2 | Matrix + Continuwuity 兼容性，影响自托管用户 |

### 缺少 fix 的关键 Bug

- **[#5237 MCP 错误传播](https://github.com/HKUDS/nanobot/issues/5237)**：目前**无对应 PR**，是今日 Bug 清单中风险最高的开放项。

---

## 健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| **开发活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 15 个 PR、4 个 Issue，节奏密集 |
| **PR 流转效率** | ⭐⭐⭐⭐ | 合并率 47%，P1 PR 流转顺畅 |
| **社区响应度** | ⭐⭐⭐ | 评论量低，但单条质量较高 |
| **安全/稳定性** | ⭐⭐⭐ | 安全重构持续推进，但 #5237 类错误传播风险仍存在 |
| **版本可发布性** | ⭐⭐⭐ | WebUI 多个 stacked PR 待合并，下一版本有望近期产出 |

**整体判断**：NanoBot 处于**功能深化与体验打磨的良性迭代期**。建议维护者重点关注：(1) 推动 WebUI 临时聊天 PR 链 (#5252/#5259) 合并进入候选版本；(2) 为 #5237 起草修复方案；(3) 验证 #5203 是否已解决 #5149。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-06**
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

今日项目活跃度**处于高位**，过去 24 小时共记录 49 条新开/活跃 Issues 与 49 条待合并 PR，仅有 1 条 PR 被关闭、1 条 Issue 被关闭，无版本发布。议题与 PR 的主题高度集中于两个方向：(1) **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)** 发起的"20 个 god 文件分片"重构 Epic 以及其衍生的多条 mixin 抽取 PR；(2) **[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)** 主导的"Telegram Bot API 10.2 功能对齐"系列 Campaigns（25+ 条关联 Issues）。整体呈现"重构 + 平台对齐"双轨推进的态势，仓库治理与平台 API 完备度是本月重点。

---

## 2. 版本发布

**本周期无新版本发布。** 维护者精力集中于存量债清理（god-file）与平台适配，故而未推进版本标签。

---

## 3. 项目进展

过去 24 小时仅有 **[PR #74562](https://github.com/NousResearch/hermes-agent/pull/74562)** 由 pittosporum-seu 提交并被关闭（**fix(config): resolve model.key_env into model.api_key at load time**，P2，security-boundary sweeper 标签）。这是自 7-30 创建以来推动解决的一个长期 Issue：自定义 provider 将 env 变量名放在 `model.api_key_env` 而非 `model.api_key` 时，请求会以空 key 发出，导致 HTTP 401。该 PR 关闭代表一条完整的"bug → fix"链路完成，对自定义模型接入的用户而言是可靠性改进。

此外，有数项高价值 PR 处于待合并的"成熟期"：
- **[PR #79824](https://github.com/NousResearch/hermes-agent/pull/79824)** — 修复 [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) virtual model alias 被错误持久化的 P2 bug
- **[PR #79825](https://github.com/NousResearch/hermes-agent/pull/79825)** — 修复 tool 输出 JSON 转义导致 `read_file` offset/limit 失效
- **[PR #79826](https://github.com/NousResearch/hermes-agent/pull/79826)** — auxiliary LLM 调用未触发 plugin hook 的隐藏问题
- **[PR #78590](https://github.com/NousResearch/hermes-agent/pull/78590)** — 修复 [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) `hermes update` 后 gateway 残留导致 ImportError 的 **P1** install/update 风险
- **[PR #79813](https://github.com/NousResearch/hermes-agent/pull/79813)** — 修复 [#79768](https://github.com/NousResearch/hermes-agent/issues/79768) TERMINAL_CWD 锁无超时阻塞并行作业（**P1**，risk-session-state）

项目整体在"安装/升级链路"和"配置/认证链路"两条路径上均推进了一层稳定性。

---

## 4. 社区热点

| 排名 | 主题 | 评论数 | 链接 |
|---|---|---|---|
| 1 | Epic: Shard all 20 god files — 仓库级 god-file 分片 | **14** | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) |
| 2 | lifecycle_guard 嵌入式 null byte 崩溃 | **12** | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) |
| 3 | Extract Gateway Platform Routing from gateway/run.py（858KB） | **11** | [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) |
| 4 | Telegram Bot API 10.2 功能对齐 Meta-issue | **5** | [#78791](https://github.com/NousResearch/hermes-agent/issues/78791) |
| 4 | Delegated child context 通过共享 terminal snapshot 泄露 | **5** | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) |

**诉求分析：** 三大热点指向同一个底层诉求——**"代码已经无法承受继续叠加新功能"**。无论是 858KB 的 gateway/run.py、嵌入式 null byte 的脆弱路径扫描，还是 Bot API 10.2 几十项缺失，开发者社区都在呼吁结构化重构 + 接口对齐，而非继续打补丁。andrexibiza 的 god-file-kill-campaigns（5×2×3 方法论，见 [#79609](https://github.com/NousResearch/hermes-agent/issues/79609)）已成为本月内部的"重构宪法"。

---

## 5. Bug 与稳定性

按严重程度排序：

### P1 — 安装/升级 / 会话状态
| Issue | 现象 | 状态 |
|---|---|---|
| [#78574](https://github.com/NousResearch/hermes-agent/issues/78574) | Linux 默认 gateway 在 `hermes update` 后未重启，导致新代码加载与旧内存模块混合，触发 `ImportError`（已被 +1 用户点 ❤） | ✅ **[PR #78590](https://github.com/NousResearch/hermes-agent/pull/78590)** 待合并 |
| [#79768](https://github.com/NousResearch/hermes-agent/issues/79768)（隐式，由 #79813 引用） | `_ReadWriteLock` 在 TERMINAL_CWD 上无超时，长任务会静默阻塞所有并行 cron job | ✅ **[PR #79813](https://github.com/NousResearch/hermes-agent/pull/79813)** 待合并 |

### P2 — 核心功能 / 成本展示 / 子代理隔离 / 配置安全
| Issue | 现象 | 状态 |
|---|---|---|
| [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | `lifecycle_guard` 在扫描 heredoc / `-c` 命令时崩溃，所有 terminal 命令挂掉 | ❌ 暂未见 fix PR（高评论数，急需认领） |
| [#79101](https://github.com/NousResearch/hermes-agent/issues/79101) | API server 把 "hermes-agent" 这种虚拟模型名当真实模型存进 session，导致后续 chat 走错模型 | ✅ **[PR #79824](https://github.com/NousResearch/hermes-agent/pull/79824)** 待合并 |
| [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | DeepSeek 等低价模型成本以 2dp 显示，永远是 `$0.00` | ❌ 无 fix PR |
| [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | Piper + KittenTTS 本地 TTS 完全忽略 `voice` 配置，静默回退到默认 | ❌ 无 fix PR |
| [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | 子代理上下文通过共享 terminal snapshot 泄露到普通调用 | ❌ 无 fix PR |

### P3 / 已修复合并
- **[#74562](https://github.com/NousResearch/hermes-agent/issues/74562)** 自定义 provider `model.key_env` → `model.api_key` → 已随 PR 关闭。

**小结：** P1 等级两个 install/update/session-state 风险点都已有 fix PR 在列；P2 等级 5 个有 3 个尚无对应 PR 待认领，其中 [#77780](https://github.com/NousResearch/hermes-agent/issues/77780)（12 条评论）是最迫切的。

---

## 6. 功能请求与路线图信号

### 最值得纳入下个版本的"准合并"候选
1. **[PR #79825](https://github.com/NousResearch/hermes-agent/pull/79825)** — Tool 输出 JSON 反规范化（影响所有 `read_file` 用户）
2. **[PR #79826](https://github.com/NousResearch/hermes-agent/pull/79826)** — Plugin hook 对 auxiliary LLM 调用全面点火（影响所有 hook-based 插件作者）
3. **[PR #79821](https://github.com/NousResearch/hermes-agent/pull/79821)** — Codex refresh 留存在归属 auth store（避免 named-profile 错位）

### "campaign 级"潜在路线图
- **[#78791](https://github.com/NousResearch/hermes-agent/issues/78791)** Telegram Bot API 10.2 全面对齐（cascade 出 25+ 独立 feature issue），涵盖 InlineKeyboard 变体、Passport、WebApp、Business Account、付费广播、suggested-post、Managed Bot 等。
- **[#78307](https://github.com/NousResearch/hermes-agent/issues/78307)** 内存生命周期管理 UX（`MEMORY.md` / `USER.md` 的健康检查、去重、冲突检测、可恢复清理）——明显朝向"长期记忆可持续运营"的产品化方向。

### 重构路线图（god-file kill）
仓库内已确认的 god 文件分片进度：Discord adapter R3（#79652）、kanban_db s1（#79613、#79658）、s2（#79659）、s3（#79660），按 5×2×3 方法论逐一切片。预期该 Epic 后续数周仍将是热度主体。

---

## 7. 用户反馈摘要

从 Issues/PR 摘要中提炼的真实痛点：

- **"更新后服务不可用"** — 安装/升级链路上的沉默失败（[#78574](https://github.com/NousResearch/hermes-agent/issues/78574)）是用户最严厉的抱怨：成功提示 `✓ Update complete!` 但下一次对话即崩，且 ImportError 完全无法自我诊断。
- **"成本显示误导"** — DeepSeek 等低价模型用户看到的始终是 `$0.00`（[#79220](https://github.com/NousResearch/hermes-agent/issues/79220)），对成本敏感型用户而言是可用性壁垒。
- **"语音不响应配置"** — Piper/KittenTTS 静默忽略 voice 设置（[#79459](https://github.com/NousResearch/hermes-agent/issues/79459)），用户配置了反而被默认覆盖，本质是 API 不诚实。
- **"子代理上下文污染"** — 多代理开发者被 [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) 描述的 `HERMES_DELEGATED_CHILD_CONTEXT` 持久化误导——"声明语义与运行行为"不匹配，阻碍开发信任。
- **"Telegram bot 不再是 bot"** — [#78784](https://github.com/NousResearch/hermes-agent/issues/78784) 揭示 setMyShortDescription 被当作 presence 指示器，使机器人简介字段被在线状态文本覆盖，影响品牌专业感（area/billing 提及，业务账户场景尤为敏感，见 [#78786](https://github.com/NousResearch/hermes-agent/issues/78786)）。
- **"内存自管"** — 用户希望像管理数据库一样管理 `MEMORY.md`，而非只把它当作静态模板（[#78307](https://github.com/NousResearch/hermes-agent/issues/78307)）——已有 2 条评论，肯定意味着该方向有共鸣。

---

## 8. 待处理积压 — 提醒维护者

下列 Issue/PR 时间跨度较大或评论密度高，建议优先响应：

| # | 链接 | 类型 | 创建 | 评论 | 备注 |
|---|---|---|---|---|---|
| 1 | [#54962](https://github.com/NousResearch/hermes-agent/issues/54962) | refactor: 858KB gateway/run.py 拆分 | 2026-06-29 | 11 | 跨 1 个月未合并，对性能与协作体验均有显著影响 |
| 2 | [#41736](https://github.com/NousResearch/hermes-agent/issues/41736) | feature: Desktop preview 链接走 file tab | 2026-06-08 | 3 | 已超过 60 天未推进，桌面端 UX 长期债 |
| 3 | [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) | **P2 bug**: lifecycle_guard null byte 崩溃 | 2026-08-03 | 12 | 评论密度最高但**无 fix PR**，建议本周认领 |
| 4 | [#71941](https://github.com/NousResearch/hermes-agent/issues/71941) | **P2 bug**: 子代理上下文泄漏 | 2026-07-26 | 5 | 安全语义问题，11 天未 PR |
| 5 | [#79220](https://github.com/NousResearch/hermes-agent/issues/79220) | **P2 bug**: 成本显示格式 | 2026-08-05 | 4 | 显示 bug，修复合本极低，无 PR |
| 6 | [#79459](https://github.com/NousResearch/hermes-agent/issues/79459) | **P2 bug**: TTS voice 被忽略 | 2026-08-05 | 3 | 配置不诚实的可信度问题，无 PR |

**建议**：将 [#77780](https://github.com/NousResearch/hermes-agent/issues/77780) 标记为 good first issue 或直接委派——它是当前评论密度最高且最易复现的崩溃路径之一，且没有任何 fix PR。

---

### 总体健康度评估

- **活跃度**：🟢 高（50+50 节奏持续）
- **稳定性**：🟡 中（P1 问题均有 PR 但尚未合并；P2 中 3/5 仍待认领）
- **可维护性**：🟢 持续优化中（god-file 重构形成流程化方法论）
- **社区参与**：🟢 多位独立贡献者（webtecnica, hirotong, dimsome, k0rnacki, cms002 等）提交 cross-cutting fix PR，参与深度健康
- **版本节奏**：🟡 无新版本发布，重在"清债"，用户需注意 master 可能存在未发布进度

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**: 2026-08-06
**数据来源**: github.com/sipeed/picoclaw
**报告生成**: AI 智能体与个人 AI 助手开源项目分析

---

## 1. 今日速览

PicoClaw 仓库今日活跃度偏低,过去 24 小时内 **无新增 Issue、无新版本发布**,但有 **4 条 PR 发生更新**(3 条仍处于 Open 状态,1 条被关闭)。整体来看,社区讨论处于静默期,代码层面的工作主要集中在已有 PR 的打磨与一个长期未合并的 OAuth 功能提案被关闭。从健康度看,项目主干仍处于维护节奏中,但缺少新的用户反馈流入,需要关注是否存在 Issue 渠道失效或用户向 Discussions/Discord 转移的趋势。

---

## 2. 版本发布

**本节无内容**。过去 24 小时内无任何新版本发布。

---

## 3. 项目进展

### 3.1 重要 PR 关闭(未合并)
- **PR [#926](https://github.com/sipeed/picoclaw/pull/926)**: `feat(auth): add Anthropic OAuth setup-token login`
  - **状态**: CLOSED(未合并)
  - **作者**: BallerIsLeet | 创建于 2026-02-28,关闭于 2026-08-05
  - **影响**: 该 PR 提案已存在约 5 个月,功能本身价值较高(支持 Anthropic OAuth setup-token 登录、`auth status` 中展示 5 小时 / 7 天用量额度、对 OAuth token 的流式响应支持),但最终未合并。
  - **解读**: 维护者可能出于 API 兼容性、安全策略或实现重写的考虑关闭此 PR。Anthropic OAuth 登录仍是社区高需求能力,**建议作者按 reviewer 反馈重新整理后重开**,或由维护者拆解需求内部实现。

### 3.2 仍在推进中的 PR
- **PR [#3318](https://github.com/sipeed/picoclaw/pull/3318)**: `fix(web): repair unparseable pnpm-lock.yaml`
  - **状态**: OPEN | 新建于 2026-08-05
  - **内容**: 修复 `web/frontend/pnpm-lock.yaml` 中 `semver@7.8.5` 在 `packages:` 与 `snapshots:` 下重复声明导致的 YAML 解析错误(`ERR_PNPM_BROKEN_LOCKFILE`)。这是一个低风险、可快速合并的 lockfile 修复。
- **PR [#3200](https://github.com/sipeed/picoclaw/pull/3200)**: `feat(models): add configurable default fallback chain`
  - **状态**: OPEN | 创建于 2026-07-01,更新于 2026-08-05
  - **内容**: 在 Web UI 的 models 页面增加"默认模型 + 回退模型 + 重排 + 持久化"工作流,并打通后端 API。属于可见的产品级能力增强。
- **PR [#1951](https://github.com/sipeed/picoclaw/pull/1951)**: `chore: move installation scripts from docs repo to here`
  - **状态**: OPEN | 创建于 2026-03-24,更新于 2026-08-05
  - **内容**: 将安装脚本从 docs 仓库迁移至本仓库。属于长期未合并的整理类 PR,已挂起约 4 个月。

**整体推进评估**: 今日实际"向前迈进的代码"非常有限 —— 唯一可能进入主干的是 PR #3318 的 lockfile 修复。PR #926 的关闭说明一个面向用户的增强功能被否决,需要关注其后续替代方案。

---

## 4. 社区热点

今日无任何 Issue 被创建或评论,4 条 PR 也均无评论数据(`评论: undefined`)。**社区讨论处于明显静默状态**。

可能原因分析:
1. Issue 入口被隐性禁用或强制迁移至 Discussions/Discord;
2. 数据采集端未抓取到评论(API 权限或分页问题);
3. 项目确实进入"维护期真空",等下一个版本发布窗口。

**建议项目方**: 在 README 或贡献指南中明确问题反馈渠道,避免社区贡献者无所适从。

---

## 5. Bug 与稳定性

### 5.1 今日报告/相关的 Bug

| 严重程度 | 描述 | 关联 PR | 状态 |
|---|---|---|---|
| 🟡 中 | `pnpm-lock.yaml` 中 `semver@7.8.5` 重复 mapping key,导致 pnpm 拒绝解析(`ERR_PNPM_BROKEN_LOCKFILE`) | [#3318](https://github.com/sipeed/picoclaw/pull/3318) | **已有 fix PR**(OPEN,待合并) |

### 5.2 风险说明
该 Bug 影响范围限定在 web 前端子项目的 lockfile,主要阻塞本地 `pnpm install` 与 CI 安装步骤,**不会影响已部署用户**,但会阻断新贡献者快速搭建前端开发环境。维护者应**优先合并 PR #3318**,这是典型的"低风险、高收益"修复。

---

## 6. 功能请求与路线图信号

虽然今日无新 Issue,但从已有 PR 可以读出清晰的路线图信号:

1. **Anthropic OAuth 登录**(PR [#926](https://github.com/sipeed/picoclaw/pull/926))
   - **信号**: 强需求。即便被关闭,使用 OAuth/setup-token 替代长期 API key 仍是个人 AI 助手场景的普遍痛点。
   - **预测纳入下一版本的概率**: 中等。需要维护者主动承担或重写。

2. **模型默认回退链配置**(PR [#3200](https://github.com/sipeed/picoclaw/pull/3200))
   - **信号**: 用户希望对多模型 provider 提供可视化、可编排的回退顺序,以提升可用性与成本控制。
   - **预测纳入下一版本的概率**: 较高。属于产品级 UX 增强,且 PR 已挂起近一个月,可能正在 review 中。

3. **安装脚本集中化**(PR [#1951](https://github.com/sipeed/picoclaw/pull/1951))
   - **信号**: 项目治理类整理工作,优先级不高,但长期搁置会加剧"docs 仓库与主仓库职责不清"的问题。

---

## 7. 用户反馈摘要

**本节无内容**。今日无 Issue 评论数据可供提炼。建议在下一份日报中结合历史 Issue 评论做趋势性分析,例如最近 30 天内用户高频反馈的关键词(API key 过期、模型切换、Web UI 卡顿、安装报错等)。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建距今 | 状态 |
|---|---|---|---|---|
| 增强(被关闭) | [#926](https://github.com/sipeed/picoclaw/pull/926) | Anthropic OAuth setup-token 登录 | ~5 个月 | CLOSED |
| 增强 | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | 模型默认回退链配置 | ~1 个月 | OPEN |
| 整理 | [#1951](https://github.com/sipeed/picoclaw/pull/1951) | 安装脚本迁移 | ~4 个月 | OPEN |

**提醒维护者关注**:
- **PR #3200** 是面向最终用户的功能,建议给出明确 review 反馈或合并时间表;
- **PR #1951** 涉及跨仓库职责划分,需维护者层面拍板;
- **PR #926** 虽然关闭,但诉求本身未消失,建议在关闭评论中明确"是否计划在后续版本重新实现"或"是否有替代方案",避免贡献者重复劳动。

---

## 健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐ | 仅 4 条 PR 触达,无 Issue |
| 社区互动 | ⭐ | 评论数据缺失,讨论静默 |
| Bug 响应 | ⭐⭐⭐⭐ | lockfile 修复已就位,等待合并 |
| 路线图清晰度 | ⭐⭐⭐ | 多个增强 PR 处于长期搁置 |
| 版本节奏 | — | 无新版本 |

**整体判断**: PicoClaw 今日处于"低活跃维护态"。短期看,**优先合并 PR #3318** 即可解锁 Web 前端的开发与 CI 流程;中长期看,**PR #926 的关闭**与**PR #3200 / #1951 的长期搁置**提示维护者需要在路线图与 PR review 上投入更多关注,以避免贡献者流失。

---

*报告基于公开 GitHub 数据自动整理,如需更深度分析(贡献者画像、commit 趋势、跨项目对比),请提供额外数据源。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-06

> 数据窗口：2026-08-05（过去 24 小时）  
> 仓库：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现**中高度**的开发活跃度：12 个 PR 更新（10 待合并、2 已关闭）、2 个 Issue 处于活跃状态、当日无版本发布。PR 类型集中在**错误修复（5 个）**、**技能/工具新增（4 个）** 与**基础设施重构（1 个）**，反映出维护团队正在多线推进质量改进与生态扩展。值得注意的是，作者 `Joi` 在关闭 #3175 后重开 #3192 推进同一修复，PR #3156 与长期开放的 Signal 附件 Bug #2528 直接对应——整体节奏可概括为「**修复优先 + 持续技能集成**」。

---

## 2. 版本发布

当日无新版本发布。

---

## 3. 项目进展

过去 24 小时共 **2 个 PR 已关闭**：

| PR | 标题 | 作者 | 状态判断 |
|---|---|---|---|
| [#3175](https://github.com/nanocoai/nanoclaw/pull/3175) | fix: route command-gate denials through the delivery adapter | Joi | 已关闭，作者同日以 [#3192](https://github.com/nanocoai/nanoclaw/pull/3192) 重提改进版 |
| [#3187](https://github.com/nanocoai/nanoclaw/pull/3187) | fix(agent-runner): disallow built-in SendMessage so agent-to-agent messaging works | dim0627 | 已关闭 |

**推进评估**：本周修复类 PR 占主导，主题集中在**多通道适配、数据完整性（单写者约束）** 与**进程生命周期管理**。从 PR #3172（清理陈旧 skills）与 #3186（引入 host seams）可以看出维护者正在做**生态精简 + 架构加固**。项目整体健康度良好，但仍需关注长期未合并的修复类 PR（见 §8）。

---

## 4. 社区热点

按评论数与更新时间排序的当日活跃议题：

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | Issue #2528 | Signal 附件在 agent 容器内不可访问 | 1 | 0 | [#2528](https://github.com/nanocoai/nanoclaw/issues/2528) |
| 2 | Issue #2006 | Debian 12 LXC 安装 Docker 权限失败 | 1 | 0 | [#2006](https://github.com/nanocoai/nanoclaw/issues/2006) |
| 3 | PR #3156 | fix(agent-runner): carry channel attachments as structured parts | — | 0 | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) |
| 4 | PR #2346 | fix(formatter): treat unknown slash commands as normal chat | — | 0 | [#2346](https://github.com/nanocoai/nanoclaw/pull/2346) |

**诉求分析**：
- **多通道真实场景下的可见性**：Signal、WhatsApp 等通道的附件、媒体需要在容器内对 agent 透明可读。
- **安装路径的鲁棒性**：在受限环境（LXC、容器化宿主）下需要幂等且能自愈。
- **命令路由边界**：用户与开发者都在追问「host / agent / skill」三者之间的责任划分。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度
- **[#2528](https://github.com/nanocoai/nanoclaw/issues/2528) Signal 附件不可访问**  
  - 创建于 2026-05-18，已存在 **~80 天**。  
  - 影响：Signal DM 附件到达宿主机但 agent 容器内读不到，破坏多模态体验。  
  - **已有相关 fix PR**：[#3156](https://github.com/nan

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-08-06

## 1. 今日速览

NullClaw 今日处于**典型的维护性工作日**状态——无新版本发布、无新 Issue 提报，但有 **2 个面向稳定性的修复 PR** 进入待评审阶段，由同一贡献者 *raskevichai* 集中提交。整体活跃度较低但方向明确：聚焦在 runtime 栈大小与 channel 轮询线程的可靠性问题，属于"沉默式"质量改进。仓库 Issue 端完全静默（0 条更新），反映出社区近期报告通路较冷，项目节奏由核心维护者主导。

---

## 2. 版本发布

🚫 **今日无新版本发布**。本节省略。

---

## 3. 项目进展

今日**无 PR 被合并/关闭**，但有 2 个值得关注的修复 PR 处于待评审状态：

| PR | 标题 | 关键变更 | 状态 |
|---|---|---|---|
| [#985](https://github.com/nullclaw/nullclaw/pull/985) | fix(runtime): give the agent turn path a 16 MiB stack | 将 `SESSION_TURN_STACK_SIZE` 从别名 `HEAVY_RUNTIME_STACK_SIZE`（2 MiB）解耦，扩展到 16 MiB | OPEN |
| [#984](https://github.com/nullclaw/nullclaw/pull/984) | fix(channels): let poll failures age out a dead polling thread | 修复 Telegram / Matrix 通道在空闲后变静默、仅能通过重启网关恢复的问题 | OPEN |

**项目进展评估**：今日属于"待落地"阶段——两个修复都已通过 root cause 分析定位到具体代码层（Zig 常量别名、supervisor 轮询结构盲点），等待评审后即可合并。从修复深度看，这是向前迈进的一步（尤其是将核心栈大小与重型 runtime 任务脱钩，是架构层面的卫生改进）。

---

## 4. 社区热点

由于今日 **Issues 与 PRs 评论数均为 0（unwatched/unengaged）**，无法从互动量角度识别热点。唯一被提交者关联、被 PR 直接 *Closes* 的隐含热点为：

- 🔗 [#976](https://github.com/nullclaw/nullclaw/issues/976) —（被 #985 引用，应为栈溢出或 runtime 相关问题）
- 🔗 [#972](https://github.com/nullclaw/nullclaw/issues/972) —（被 #984 引用，应为通道静默/轮询失效问题）

> ⚠️ 上述两个原始 Issue 链接并未在提供的当日数据中出现，需维护者确认是否仍在 GitHub 上有效展示，或已在合并时一并关闭。两条 PR 均"零点赞、零评论"，说明评审者尚未介入，社区讨论度需提升。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度 — Channel 静默后无自愈（PR #984）
- **现象**：Telegram 与 Matrix 通道在空闲一夜后变静默，但 `nullclaw agent` 本体仍能响应，需重启网关才能恢复。
- **根因**：`supervisionLoop` 在结构上对"轮询线程已死"的情况**感知盲区**——即 supervisor 设计目标本就是处理此类故障，但实际并未捕捉到。
- **修复 PR**：[#984](https://github.com/nullclaw/nullclaw/pull/984) — 状态 OPEN，待评审。
- **影响面**：所有部署 Telegram/Matrix 通道并长时间运行的实例；属于 P0 级可靠性问题。

### 🟠 中高严重度 — Agent turn 路径栈空间不足（PR #985）
- **现象**：`SessionManager.processMessage*()` / `Agent.turn()` 路径上的线程因栈太小（2 MiB，错误别名自 `HEAVY_RUNTIME_STACK_SIZE`）可能溢出。
- **根因**：常量别名导致独立调优通道丧失——任何想给 turn path 加栈的尝试都会被运行时"重型"栈大小覆盖。
- **修复 PR**：[#985](https://github.com/nullclaw/nullclaw/pull/985) — 状态 OPEN，待评审。
- **影响面**：所有调用 Agent turn 的会话线程；长对话、深递归或大上下文场景下风险更高。

✅ **两个严重 Bug 均已有对应 fix PR**，等待合并即可进入下一版本。

---

## 6. 功能请求与路线图信号

今日**未捕获到任何新功能请求**（Issues 区 0 更新）。可观察到的路线图信号来自两个修复 PR 的存在本身：

- **可靠性 > 新功能**：今日提交全部聚焦在 runtime 栈与 channel 监督机制，说明维护者将"稳定自愈"视为下一阶段的核心工作。这可能影响下一版本的命名方向（如 v0.x 的 patch 版本或 minor 版本的稳定性标签）。
- **架构卫生清理**：PR #985 展示出对常量别名（`SESSION_TURN_STACK_SIZE = HEAVY_RUNTIME_STACK_SIZE`）的反思，预示后续可能还有更多解耦重构。

建议维护者在合并后于 Release Notes 中明示这些隐含改进，便于用户感知。

---

## 7. 用户反馈摘要

⚠️ **今日 Issues 区域完全无新互动**，无法从评论中提炼真实用户痛点。仅能从 PR 描述中推断出两条**间接用户信号**：

1. **长时运行场景下通道可靠性差**（来自 PR #984 描述："after an idle night"）——暗示有真实用户在夜间无人值守场景下部署，并受到困扰。
2. **Agent turn 路径在大负载下的栈压力**（来自 PR #985 描述）——暗示用户负载中存在深层调用或大型会话上下文。

> 注：由于 PR 评论数与 Issue 评论数均为空，**今日未捕获到显式用户满意/不满意反馈**。

---

## 8. 待处理积压

| 类别 | 项目 | 链接 | 风险提示 |
|---|---|---|---|
| 待评审 PR | fix(runtime): give the agent turn path a 16 MiB stack | [#985](https://github.com/nullclaw/nullclaw/pull/985) | 已提交 1 天，0 评论；属 P0 修复，建议 24h 内评审 |
| 待评审 PR | fix(channels): let poll failures age out a dead polling thread | [#984](https://github.com/nullclaw/nullclaw/pull/984) | 已提交 1 天，0 评论；属 P0 修复，建议 24h 内评审 |
| 隐含积压 | 关联 Issue #976 / #972 | [#976](https://github.com/nullclaw/nullclaw/issues/976) · [#972](https://github.com/nullclaw/nullclaw/issues/972) | 需确认 Issue 是否随 PR 合并自动关闭，或仍在打开列表中等待回应 |
| 长期静默 | Issues 区 24h 无任何活动 | — | 若持续多日，需关注用户参与度信号；可通过 pin 置顶或社区公告激活 |

---

### 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐☆☆☆ | 2 PR 提交但 0 合并，节奏偏慢 |
| 稳定性修复质量 | ⭐⭐⭐⭐☆ | 两份 PR 均有完整 root cause 分析，结构扎实 |
| 社区互动度 | ⭐☆☆☆☆ | Issues/评论均无新增，需激活社区反馈通路 |
| 发布节奏 | ⭐⭐⭐☆☆ | 无新版本但有明确待合并修复，下一版本可期 |
| **综合** | **⭐⭐⭐☆☆** | **方向正确但待执行——明日关键动作是评审并合并 #984/#985** |

---

*报告生成时间：2026-08-06 | 数据窗口：过去 24 小时 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-08-06**
**仓库：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日仓库活跃度处于**较高水位**：过去 24 小时共触发 43 条 Issue 更新（33 新开/活跃 + 10 关闭）与 50 条 PR 更新（32 待合并 + 18 合并/关闭），外加 1 个发布事件（v1.1.0-rc.1 RC，发布于 8 月 3 日但仍处发布窗内）。Issue 与 PR 双线高产，"Dogfooding & QA bug fixing" 周期在 8 月 4 日批次后仍在收尾，今日关闭了多条旧 Epic 与 E2E 追溯 Issue；与此同时，Railway QA 实例（`ironclaw-qa-testing-libsql.up.railway.app`）上的新一轮 dogfooding 暴露出一组跨通道与 agent 幻觉类 Bug，以 joe-rlo 提交的 `#7246/#7247/#7248/#7249/#7250/#7251` 为代表。整体看，项目处于 **v1.1.0 RC 发布后的稳定化阶段**，重心放在扩展可达性（IronHub、MCP）、技能系统重构与失败可读性收敛。

---

## 2. 版本发布

### 🏷 ironclaw-v1.1.0-rc.1（2026-08-03）

**Release Notes 提炼**（节选自发布说明）：

- **扩展可达性（核心主题）**
  - 注册任意托管 MCP 服务器
  - 通过 IronHub 深度链接一键安装扩展
  - 跨通道持久的文件附件（durable file attachments）
  - Slack `/ironclaw` 斜杠命令
- **失败可读性** — 大幅改善错误信息与诊断路径

**破坏性变更 / 迁移注意**

- 这是 1.0.0 之后的**首个 RC**，尚未声明 GA，未在数据中出现 `[1.1.0 GA]` 标签。建议仍在生产环境的 1.0.0 用户暂留原版，待 RC 收尾为 GA 再升级。
- 技能系统的多个 XL PR 仍 OPEN（`#6745 / #6938 / #7171`），可能在 RC 期间引入 schema 兼容变更：建议任何 ironclaw 已启用自定义 skill 集成的下游项目，跟踪 epic #6941 的最终落地。
- 今日关闭的 `#7244 Fix main branch CI failures 20260804` 表明主线近期存在 CI 回归，RC 验证时应复跑 nightly Playwright 矩阵（`crates/` 与分支构建一致性）。

> 数据中尚未出现 v1.1.0 GA 标签，进入 GA 前还需观察是否有 `v1.1.0-rc.2` 出现。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| # | PR | 状态 | 贡献者 | 推进点 |
|---|---|---|---|---|
| [#7261](https://github.com/nearai/ironclaw/pull/7261) | fix(ci): resolve release canary temp path | CLOSED | henrypark133 | 修复 #7256 引入的 tag-only release workflow 零任务失败，通过 `$RUNNER_TEMP` 显式传递路径并补强 sabotage 契约 |
| [#7196](https://github.com/nearai/ironclaw/pull/7196) | chore(deps): bump wasm group（wasmtime-wasi/wit-component/wit-parser）| CLOSED | dependabot | 关键 wasm 依赖 47.0.2 → 47.0.3 等三项升级 |
| [#6831](https://github.com/nearai/ironclaw/pull/6831) | feat(reborn): standardized messaging framework | CLOSED（被新 PR 取代）| BenKurrek | 引入了 16 核操作 + 13 保留名 + canonical JSON Schema + 12 类错误码的 host-owned 消息框架；被替代为新的 `ironclaw_host_api::messaging` 归属版本 |

**今日关闭的重要 Issues（Epic/追踪类）**

- [#7244](https://github.com/nearai/ironclaw/issue/7244) — Fix main branch CI failures 20260804（CLOSED）
- [#7053](https://github.com/nearai/ironclaw/issue/7053) — Close Critical E2E Coverage Gaps（CLOSED，三个子任务均已落地）
- [#7056](https://github.com/nearai/ironclaw/issue/7056) — Add Automation Lifecycle E2E（CLOSED，覆盖 create→rename→pause→resume→delete）
- [#4632](https://github.com/nearai/ironclaw/issue/4632) — Epic: Close remaining Reborn WebUI end-to-end gaps and stabilize CI（CLOSED）
- [#6892](https://github.com/nearai/ironclaw/issue/6892) — Epic: Dogfooding & QA bug fixing 07/27–07/31（CLOSED）
- [#6394](https://github.com/nearai/ironclaw/issue/6394) — Epic: Dogfooding & QA bug fixing 07/20–07/24（CLOSED）
- [#7204](https://github.com/nearai/ironclaw/issue/7204) — webui(chat) composer focus + 移除 focus-within 装饰环（CLOSED，UX 微调）
- [#741](https://github.com/nearai/ironclaw/issue/741) — feat: add Bedrock streaming via converse_stream（CLOSED，src/llm/bedrock.rs 切换为流式）
- [#7234](https://github.com/nearai/ironclaw/issue/7234) — IGNORE / Mistakenly opened（CLOSED）

**整体推进评估**：项目本周完成了"WebUI E2E 剩余缺口"与"自动化生命周期 E2E"两个里程碑级 Epic，CI 回归主干被锁定。**Bedrock 流式支持 + 受控消息框架**两步叠加，使 IronClaw 在跨 LLM 供应商一致性上更进一步。下一步焦点在 RC 后的技能系统重构合并（#6745/#6938/#7171 栈）。

---

## 4. 社区热点（按评论数）

| 排名 | # | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#3036](https://github.com/nearai/ironclaw/issue/3036) | **[EPIC] Configuration-as-Code for IronClaw Reborn：tenant blueprints + use-case harnesses** | 7 | 1 | OPEN（P2） |
| 2 | [#7194](https://github.com/nearai/ironclaw/issue/7194) | **feat(outbound): make an admin-allowed shared channel addressable as outbound delivery target** | 3 | 0 | OPEN |
| 3 | [#6257](https://github.com/nearai/ironclaw/issue/6257) | "Invalid value (attachments.mime_type)" PDF 发送/生成报错 | 2 | 0 | OPEN |
| 4 | [#7204](https://github.com/nearai/ironclaw/issue/7204) | webui composer focus + 移除装饰环 | 2 | 0 | CLOSED |
| 5 | [#7209](https://github.com/nearai/ironclaw/issue/7209) | fix(ci): regression gate 无法识别 node:assert 风格 | 2 | 0 | OPEN |
| 6 | [#7208](https://github.com/nearai/ironclaw/issue/7208) | refactor(webui): 删除废弃的 ThreadSidebar | 2 | 0 | OPEN |

**诉求解读**：

- **#3036** 仍是本月最热的结构性诉求：运维侧希望对 IronClaw 进行声明式管理（tenant blueprints / use-case harnesses），当前痛点是 `.env`、`.system/...`、`settings.json`、扩展安装、运行时 flags 五处分散配置，且无 schema / diff / 审计 / 版本控制。这是 v1.x 后期到 v2 之间最可能进入路线图的"平台化"能力。
- **#7194** 代表了 outbound 通道覆盖的最后一公里：agent 能 `slack.send_message`，但宿主层的 delivery 层（被规范化为回复出口）拿不到"按地址寻址的共享频道"作为 outgoing target。**#7194 + #7208（死代码清理）** 显示 WebUI / 渠道代码正处于"清理+补齐"双轨。
- **#6257** 是真实用户场景反馈（Slack `#x-ai-product-feedback` 由 Michael Kelly 报出），PDF 附件生成直接 400 — 当下无对应修复 PR，**建议关注是否纳入 v1.1.0 GA 前的 hotfix**。

---

## 5. Bug 与稳定性

### 🔴 P1（严重，来自今日 Railway dogfooding）

| # | 标题 | 严重度 | 状态 | 是否已有 fix PR |
|---|---|---|---|---|
| [#7247](https://github.com/nearai/ironclaw/issue/7247) | **Agent falsely claims GitHub is already connected** | bug_bash_P1 | OPEN | ❌ |
| [#7246](https://github.com/nearai/ironclaw/issue/7246) | **Agent hallucinates automation status instead of checking actual state**（BTC news digest 案例）| bug_bash_P1 | OPEN | ❌ |

→ 这两个 P1 都是**模型未做真实状态读取即宣称成功**的幻觉类缺陷：agent 对认证态与自动化运行态做了虚假断言，直接误导用户。修复方向疑似需在工具调用链路上加"先 verify 后 claim"的硬约束。

### 🟡 P2（中等，来自今日 Railway dogfooding）

| # | 标题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#7249](https://github.com/nearai/ironclaw/issue/7249) | **Slack DM execution result is delivered to Telegram**（跨通道串扰）| OPEN | ❌ |
| [#7248](https://github.com/nearai/ironclaw/issue/7248) | Invalid custom MCP endpoint 接受注册后致 run 失败 | OPEN | ❌ |
| [#7251](https://github.com/nearai/ironclaw/issue/7251) | Agent guesses MCP auth type instead of discover/initiate | OPEN | ❌ |
| [#7250](https://github.com/nearai/ironclaw/issue/7250) | DeepWiki MCP 在网络失败时给出误导性认证猜测 | OPEN | ❌ |

### 🟡 P2（持续类，真实用户）

| # | 标题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#6257](https://github.com/nearai/ironclaw/issue/6257) | "Invalid value (attachments.mime_type)" PDF 报错（自 2026-07-19 起开放）| OPEN | ❌ |
| [#7254](https://github.com/nearai/ironclaw/issue/7254) | IronClaw 无法读取 Slack feedback thread 附件 | OPEN | ❌ |

### 🟢 已关闭的 Bug

- [#7204](https://github.com/nearai/ironclaw/issue/7204) webui composer 聚焦（已修）
- [#7209](https://github.com/nearai/ironclaw/issue/7209) CI regression 门识别 node:assert（fix 草案已拟）
- [#7244](https://github.com/nearai/ironclaw/issue/7244) Main branch CI failures 20260804（已修）

**评估**：bug_bash P1/P2 集中暴露于 MCP（认证/连接态核查）与 Slack 跨通道投递两条主线，且都直接发生在用户上报的 Railway 实例。建议在 v1.1.0 GA 前优先收敛"agent 幻觉对外承诺"与"outbound 通道身份串扰"两类。

---

## 6. 功能请求与路线图信号

| 方向 | 信号来源 | 关联 PR | 路线图可能性 |
|---|---|---|---|
| **Configuration-as-Code / Tenant Blueprints** | [#3036](https://github.com/nearai/ironclaw/issue/3036) EPIC（评论 7，4 月起持续讨论）| 无 PR | 🔼 强（评论量与跨职能属性突出）|
| **Admin-Managed Agents as UserId Subjects** | [#6578](https://github.com/nearai/ironclaw/issue/6578) Epic（serrefirat）| 无 | 🔼 中—高（与多租户隔离相关）|
| **Skills the model can self-create/find/choose**（epic #6941 的完整版 #6565）| [#6941](https://github.com/nearai/ironclaw/issue/6941) Epic（v1.1.0 标签）| [#6745](https://github.com/nearai/ironclaw/pull/6745) + [#6938](https://github.com/nearai/ironclaw/pull/6938) + [#7171](https://github.com/nearai/ironclaw/pull/7171) 全 OPEN | 🔼 **极强**（已三 PR 联动落地）|
| **IronHub in IronClaw** | [#6731](https://github.com/nearai/ironclaw/issue/6731) Epic（v1.1.0 标签）| 待补 | 🔼 极强（v1.1.0-rc.1 已含 IronHub deep-link 安装）|
| **IronHub 注册任意托管 MCP** | RC1 release notes 直接覆盖 | 待补 | ✅ **已进入 RC1** |
| **Slack `/ironclaw` 斜杠命令** | RC1 release notes | 待补 | ✅ **已进入 RC1** |
| **Web Debug Inspector** | [#7218](https://github.com/nearai/ironclaw/issue/7218) Epic | [#7230](https://github.com/nearai/ironclaw

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-06

> 数据窗口：2026-08-05 至 2026-08-06 · 数据来源：GitHub API

---

## 一、今日速览

LobsterAI 过去 24 小时进入了一轮密集的**收尾式迭代**：项目正式发布 **2026.8.5** 版本，新增原生每日签到与企业级账号隔离两大能力；与此同时仓库处理了 **13 个 PR**（12 个已关闭、1 个仍开放），其中以 `btc69m979y-dotcom`、`fisherdaddy`、`liuzhq1986` 为代表的活跃贡献者集中打磨了"启动签到活动"体验、OpenClaw 网关与主进程的稳定性，以及 Cowork 标题栏的会话搜索功能。Issues 侧新增 2 条由 `fujingzhai` 提交的高质量桌面端 Bug 报告，揭示系统提示词与技能开关在持久化层存在设计性缺陷。整体来看，项目处于**功能收紧与稳定性修复并行的健康状态**，PR 合并效率高、社区反馈技术深度较强，但同时也暴露出 Bot 端 NIM 群类型号等长期遗留问题未得到有效清理。

---

## 二、版本发布

### 🦞 LobsterAI 2026.8.5（2026-08-05 发布）

本次为常规功能迭代版本，主要变更：

| 类型 | 内容 | 贡献者 | PR 链接 |
|---|---|---|---|
| **feat(activity)** | 新增原生每日签到体验 | @btc69m979y-dotcom | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) |
| **feat(enterprise)** | 隔离账号作用域下的鉴权与业务流程 | @liuzhq1986 | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) |
| **style** | UI 样式微调 | — | — |

**亮点解读**：
- **每日签到**为活动运营场景提供了开箱即用的客户端能力，配套的 PR [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439)、[#2438](https://github.com/netease-youdao/LobsterAI/pull/2438)、[#2433](https://github.com/netease-youdao/LobsterAI/pull/2433)、[#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) 在发布日当天即对启动海报、最终奖励弹窗、本地化失败提示等细节做了 5 轮打磨，体现了小步快跑、边发边修的迭代节奏。
- **企业账号隔离**是面向多账户场景的关键基础设施更新，建议 SaaS 部署方在升级前检查相关 token / cookie 持久化策略是否依赖旧的共享存储路径。

**破坏性变更 / 迁移提示**：从 PR 描述来看，账号作用域的隔离可能影响在多账户间共享本地缓存的工作流，运维侧应重点关注 `workspace-main` 下配置文件路径是否发生迁移。

---

## 三、项目进展（今日已合并 / 关闭 PR）

### 🛠️ 稳定性与生命周期（high-impact）

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| **#2437** | fix(main): harden window lifecycle and shutdown against hangs | `main`, `cowork` | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2437) |
| **#2436** | fix(openclaw): prevent gateway lock poisoning from self-restart races | `main`, `openclaw` | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2436) |

两项工作直接提升了应用的"硬退出"鲁棒性：
- **#2437** 给 OpenAI-兼容代理与 HTML 预览服务增加了 `drain timer` + 硬截止，避免 OpenClaw 网关的 keep-alive socket 阻塞应用退出；同时主窗口首次渲染前不再响应 `show` 请求，杜绝了"白屏先显示"导致的瞬时焦点错位。
- **#2436** 解决了 OpenClaw 单实例锁文件被"自我重启竞态"污染的问题——Windows 下的 `TerminateProcess` 与网关自重启都曾使锁文件残留空 / 半写状态，导致后续 30 秒内所有重启尝试直接失败。

这是直接关联用户**"退不掉、起不来"**两大日常痛点的修复，价值密度极高。

### 🎨 活动体验打磨

| PR | 摘要 | 链接 |
|---|---|---|
| #2439 | 替换启动信用海报为含右上角关闭图标的最新版 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2439) |
| #2438 | 替换启动信用海报为最新审定素材 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2438) |
| #2433 | 裁剪海报白边 + 本地化通用失败提示 + 重试前刷新绑定 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2433) |
| #2432 | 关闭"世界杯决赛奖励"自动弹窗，仅保留账户菜单入口 | [🔗](https://github.com/netease-youdao/LobsterAI/pull/2432) |

### 🔍 Cowork 功能完善

- **#2435 feat(cowork): add title-bar conversation search** ([🔗](https://github.com/netease-youdao/LobsterAI/pull/2435))
  在标题栏新增会话搜索入口，复用侧边栏搜索图标、流程与响应式样式，并加入"查询感知"的导航控件。这是协作场景下被高频请求的轻量增强。

### 🧹 依赖与日志清理

- **#1279 / #1280 / #1281**（dependabot 提出的依赖升级：`cross-env` 7.0.3→10.1.0、`react-dom` 18.3.1→19.2.4、`vite` 5.4.21→8.0.9）均被标记 `stale` 后关闭。这反映出项目在 React 19 与 Vite 8 的升级路径上仍存在阻碍（推测为依赖兼容性或内部组件未适配），维护者应主动评估。
- **#2434 / #2431**（`liuzhq/fix rlog 202683`）：无描述提交，连续两次关闭重开处理同一日志问题。

**整体进度评估**：今日合并内容以"功能细化 + 稳定性兜底"为主轴，未见架构级重构，但用户侧可感知的健壮性提升明显。综合判定：**项目向前迈出了稳健的一步，步幅偏小但落点扎实**。

---

## 四、社区热点

今日 Issues/PRs 互动量整体偏低（最高评论数仅 1 条），但**新开的两条桌面端 Bug（#2440、#2441）虽无互动，技术深度极高**，很可能是下一个迭代周期的焦点议题：

| 排名 | Issue / PR | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| 1 | #1200 — NIM 群类型号硬编码（长期 stale） | 1 | 0 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/1200) |
| 2 | #2441 — 技能开关目录名 vs frontmatter name 失配 | 0 | 0 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/2441) |
| 3 | #2440 — 桌面端系统提示词重复注入 | 0 | 0 | [🔗](https://github.com/netease-youdao/LobsterAI/issues/2440) |

**诉求分析**：`fujingzhai` 在 24 小时内连续提交 #2440、#2441，两条问题指向同一本质——**用户缺少一个"持久精简系统提示词"的入口**。具体表现为：①OpenClaw 技能开关按目录名写入但运行时按 `frontmatter name` 匹配，开关"静默失效"；②桌面端 `[LobsterAI system instructions]` 与 `workspace-main/AGENTS.md` 托管段**逐字重复 78%**（实测 4,425 字符），浪费 token、稀释模型注意力。这反映出一类典型的"高级用户对系统提示词可观测性 + 可控性"的深度诉求，远超普通使用层。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 标题 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| 🟠 **High** | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 桌面端系统提示词与 AGENTS.md 托管区 78% 逐字重复，每次会话首条消息浪费约 4,425 字符 token | OPEN | ❌ 暂无 |
| 🟠 **High** | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441) | 技能开关按目录名写入但 OpenClaw 按 frontmatter name 匹配，开关静默失效；`openclaw.json` 被整文件覆盖 | OPEN | ❌ 暂无 |
| 🟡 **Medium** | [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) | NIM 超大群消息中 `teamTypeNum` 硬编码错误，群名显示为原始 teamId（已 stale 4 个月） | OPEN | ✅ [#1201](https://github.com/netease-youdao/LobsterAI/pull/1201) 已开放 |

**今日已落地的稳定性修复**（来自已合并 PR）：

- ✅ OpenClaw 网关锁文件被竞态污染 → [#2436](https://github.com/netease-youdao/LobsterAI/pull/2436)
- ✅ 主进程 / 代理 / HTML 预览退出挂死 → [#2437](https://github.com/netease-youdao/LobsterAI/pull/2437)
- ✅ 启动信用海报关闭图标缺失 / 视觉瑕疵 → [#2439](https://github.com/netease-youdao/LobsterAI/pull/2439)、[#2438](https://github.com/netease-youdao/LobsterAI/pull/2438)、[#2433](https://github.com/netease-youdao/LobsterAI/pull/2433)
- ✅ "世界杯决赛奖励"过度打扰用户 → [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432)

**观察**：今日进入收尾期的"功能型 Bug"基本都被当天关闭，但**两个新冒出的桌面端架构 Bug（#2440、#2441）目前没有任何 PR 对应**，建议维护者优先认领。

---

## 六、功能请求与路线图信号

由于 Issues 互动量较低，**直接的功能请求证据较少**，更多信号来自 PR 自身透露的方向：

| 信号来源 | 暗示方向 | 关联 PR / Issue |
|---|---|---|
| `feat(cowork): add title-bar conversation search` | Cowork 协作场景正在被持续打磨，标题栏正演变为"高频操作集合" | [#2435](https://github.com/netease-youdao/LobsterAI/pull/2435) |
| `feat(enterprise): isolate account-scoped auth and service flows` | 企业级 / 多账号是公司重点投入方向 | [#2409](https://github.com/netease-youdao/LobsterAI/pull/2409) |
| `feat(activity): add native daily check-in experience` | 客户端活动体系走向"原生化"，降低对活动页跳转的依赖 | [#2408](https://github.com/netease-youdao/LobsterAI/pull/2408) |
| 用户诉求：系统提示词持久精简入口 | 强信号：提示词可观测 / 可控工具或进入下一版本规划 | [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)、[#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) |
| `disable final reward auto popup` | 社区对"过度打扰式运营弹窗"反感 → 后续活动功能可能默认走"静默通知 + 手动领取"路径 | [#2432](https://github.com/netease-youdao/LobsterAI/pull/2432) |

**最有可能进入 2026.8.x 系列的功能**：
1. **Cowork 会话搜索**（已随版本发布，但其响应式 / 查询感知导航控件可能继续迭代）
2. **桌面端系统提示词去重 + 技能开关修复**——这是高级用户最强烈的呼声，建议作为 2026.9 的优先项

---

## 七、用户反馈摘要

由于今日 Issue 评论数普遍为 0，仅 [#1200](https://github.com/netease-youdao/LobsterAI/issues/1200) 有 1 条评论，可提炼的真实用户场景有限，但两条新 Issue 的描述本身就**带有典型的"用户故事"质感**：

### 痛点 1 — 系统提示词"读两遍"浪费 token
> "桌面端每个新会话的首条用户消息里……其中 78% 的内容与 `workspace-main/AGENTS.md` 里 app 自己托管的那一段逐字重复，等于同一套指令让模型读了两遍。"
> —— *fujingzhai, [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440)*

- **场景**：本地跑 `lobsterai` 桌面客户端（v2026.7.31），使用 OpenClaw 2026.6.1 运行时。
- **痛点**：每次首条消息都白送 4,425 字符到上下文窗口，长上下文场景下成本与延迟明显放大。
- **满意度**：❌ 不满意（架构层失误，非 UI 问题）

### 痛点 2 — 技能开关"看起来开了，实际没开"
> "技能开关按目录名写入，但 OpenClaw 按 frontmatter name 匹配；不一致时开关静默失效；且 `openclaw.json` 被整文件覆盖，用户无持久精简入口。"
> —— *fujingzhai, [#2441](https://github.com/netease-youdao/LobsterAI/issues/2441)*

- **场景**：用户尝试在 UI 上精细控制每次对话携带哪些技能。
- **痛点**：① UI 反馈与运行时实际行为不一致，开关形同虚设；② `openclaw.json` 整文件覆盖意味着用户无法"

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

# CoPaw 项目日报 · 2026-08-06

## 1. 今日速览

CoPaw 仓库 24 小时内保持高强度活跃，共 **22 条 Issue 更新**（17 条新开/活跃、5 条关闭）与 **50 条 PR 更新**（29 条待合并、21 条已合并/关闭），PR 入/出比接近 1:1.4，说明合并节奏稳定，整体处于 **快速迭代 + 大量新增 Bug 暴露** 的并行阶段。无新版本发布，但当日合并的多项 PR 涉及 LLM 模型回退、跨工具一致性、控制台响应式 UI 等核心架构演进。**整体健康度评估：中偏好** —— 功能侧持续推进，v2.1.0-beta.1 的稳定性问题集中暴露是当前主要风险点。

---

## 2. 版本发布

无新版本发布。最近的版本仍为 **v2.1.0-beta.1**（基于 Issue #6697、#6698 中用户报告的环境信息），而当前线上稳定版本为 v2.0.1。今日大量 Bug 报告（#6697、#6698、#6707、#6726、#6732）说明 beta 版本正在用户侧被广泛测试，但距正式发布仍需修复多项稳定性问题。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) | feat(backend): per-agent and global LLM model fallback with safe retry boundaries | 后端层 LLM 模型回退 — 单模型失败后可自动按配置顺序切换备份模型 |
| [#5598](https://github.com/agentscope-ai/QwenPaw/pull/5598) | feat(console): add LLM fallback configuration UI | 在 Console Models 页面提供回退列表配置入口（与 #5597 配套） |
| [#5462](https://github.com/agentscope-ai/QwenPaw/pull/5462) | feat(console): add global responsive utility classes | 标准化移动端适配布局工具类，减少页面重复媒体查询 |
| [#5447](https://github.com/agentscope-ai/QwenPaw/pull/5447) | fix(channel): yield failed AgentResponse on console errors to unblock UI | Console Channel 异常处理 — 错误时仍向 UI 推送 AgentResponse，避免 SSE 永久等待 |
| [#3874](https://github.com/agentscope-ai/QwenPaw/pull/3874) | feat(model): refine retry logic（Ready for Merge） | 模型调用层重试逻辑精炼 |
| [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675) | fix: force relay reasoning_content for DeepSeek models | 修复 DeepSeek 多轮对话滚动压缩时漏投 `reasoning_content` 导致的 400 错误 |
| [#6718](https://github.com/agentscope-ai/QwenPaw/pull/6718) | feat: unify app market listings | 应用市场列表展示统一化 |
| [#6727](https://github.com/agentscope-ai/QwenPaw/pull/6727) | fix(tests): make directory auto-marking work on Windows | 修复 Windows 上 66 个集成测试被静默跳过的长期问题 |
| [#6729](https://github.com/agentscope-ai/QwenPaw/pull/6729) | test(integration): verify auto-update targets via pool detail endpoint | 与已关 Issue #6716 配套，补全 `auto_update_targets` 的端到端覆盖 |

**整体推进评估**：单日合并 21 条 PR 包含 2 条高价值功能（模型回退 + Console UI）、1 条布局规范、3 条稳定性修复，项目在 **多智能体容错**、**跨平台开发体验**、**测试覆盖率** 三条主线同步前进。

---

## 4. 社区热点

**WeChat iLink 通道议题集中**：[#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696)（context_token 被 typing indicator 消耗，回复被拒）和 [#6728](https://github.com/agentscope-ai/QwenPaw/issues/6728)（审批提示需支持中文「同意/拒绝」）连续两天出现，评论数均 ≥1，表明 WeChat 渠道用户的真实使用反馈在迅速聚集，方向集中在 **token 单次使用语义** 与 **中文交互体验**。

**模型路由/回退方向**：长生命周期 Feature 请求 [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436)（自动按消息类型路由到合适模型）持续活跃（3 评论），与当日合并的 [#5597](https://github.com/agentscope-ai/QwenPaw/pull/5597) 模型回退能力形成完整能力面 —— 用户既希望按场景"选"模型，也希望失败时"换"模型。

**Workspace 协作画布**：连续出现 [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730)（Live artifact canvas 提议）与对应实现 [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)（Workspace artifact cards），体现产品对"agent 输出 HTML/报告后用户无需切出聊天即可查看"的体验诉求强烈。

**PR 讨论热度**：跨工具仓发布渠道与多 Agent OS 架构的科普文 PR [#6720](https://github.com/agentscope-ai/QwenPaw/pull/6720) 是科普类核心说明。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 现象 | 是否有对应 Fix PR |
|---|---|---|---|
| 🔴 **严重/数据风险** | [#6722](https://github.com/agentscope-ai/QwenPaw/issues/6722) | 后台 fork 子代理在 worktree 最终化失败时仍上报 `completed` | ✅ [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725) 已开 |
| 🔴 **严重/崩溃** | [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | v2.1.0b1 desktop PYTHONHOME 污染子进程 → 所有 Python 子进程崩溃 | ❌ |
| 🔴 **严重/崩溃** | [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | v2.1.0b1 浏览器 SDK `open()` 全部失败（Target crashed） | ❌ |
| 🟠 **高/阻塞** | [#6732](https://github.com/agentscope-ai/QwenPaw/issues/6732) | MCP 工具每隔几小时静默失效，需重启 Docker 容器恢复 | ❌ |
| 🟠 **高/阻塞** | [#6726](https://github.com/agentscope-ai/QwenPaw/issues/6726) | 长会话累积 20-30+ tool_call 对后请求 400（role='tool' 不连续） | ❌ |
| 🟠 **高/服务失败** | [#6707](https://github.com/agentscope-ai/QwenPaw/issues/6707) | thinking 模式上游在历史带 tool_call 时返回 400 invalid_request_error | ✅ [#6721](https://github.com/agentscope-ai/QwenPaw/pull/6721) 与 [#6675](https://github.com/agentscope-ai/QwenPaw/pull/6675)（已关闭） |
| 🟠 **高/服务失败** | [#6708](https://github.com/agentscope-ai/QwenPaw/issues/6708) | 流内 SSE 携带 503 错误码未被识别为瞬态错误，无重试 | ✅ [#6714](https://github.com/agentscope-ai/QwenPaw/pull/6714) 已开 |
| 🟡 **中** | [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink 单次 token 复用 → 永久卡在 working | ❌ |
| 🟡 **中** | [#6731](https://github.com/agentscope-ai/QwenPaw/issues/6731) | `execute_shell_command` 携带 `sandbox_config` 时 `TypeError: replace() on dataclass` | ❌ |
| 🟡 **中** | [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 多模态探测覆盖已有能力 → 多模态被置为 false | ✅ [#6723](https://github.com/agentscope-ai/QwenPaw/pull/6723) 已开（缓存过期 + 切换清理） |
| 🟢 **低** | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690)（已关） | cron pause/resume 未持久化 enabled 字段 | ❌（已关闭，未见合并 fix） |
| 🟢 **低** | [#6700](https://github.com/agentscope-ai/QwenPaw/issues/6700)（已关） | 工具输出过大导致会话加载卡死 | ❌（已关闭，未见合并 fix） |

**注意**：当日合并的 Bug fix PR 中，#5597/#5598/#5447/#3874/#6675/#5462 为多议题相关但未直接展示 fix 链接的"通用"修复；#5447 重点修复 Console UI 阻塞，#6675 覆盖 #6707 类问题。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue | 已有 PR 配套 | 纳入下一版本的可能性 |
|---|---|---|---|
| 自动按消息复杂度路由模型 | [#6436](https://github.com/agentscope-ai/QwenPaw/issues/6436) | [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)（unify provider/model routing，OPEN） | **高** — 与模型回退能力合并后，模型选择策略已具备雏形 |
| 频道自建服务的失败重试/健康检测 | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | ❌ | **中高** — 与 #6708（流式错误重试）方向一致 |
| Workspace Artifact 实时预览面板 | [#6730](https://github.com/agentscope-ai/QwenPaw/issues/6730) | [#6719](https://github.com/agentscope-ai/QwenPaw/pull/6719)（Workspace artifact cards，OPEN） | **高** — 实现已落地，待 review |
| MCP 工具调用超时（per-client + per-call） | [#6724](https://github.com/agentscope-ai/QwenPaw/issues/6724) | ❌ | **高** — 与 #6732（MCP 静默失效）联立来看是稳定性的必要补丁 |
| WeChat 审批提示中文 | [#6728](https://github.com/agentscope-

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-06

---

## 1. 今日速览

ZeroClaw 今日社区活跃度处于**中高水平**，过去 24 小时共有 50 条 Issue 与 50 条 PR 更新，新开/活跃讨论占比较高（Issue 40/50，PR 49/50 待合并），但仅关闭了 1 个 PR，整体节奏仍处于**设计审阅与 RFC 落地并行的阶段**。议题高度集中在**安全加固、通道权限模型、Provider 协议兼容性、ZeroCode/SOP 子系统**四大方向，多个 P1 级 Bug 已附带修复 PR 进入待合并状态。今日**无版本发布**，但维护者决策队列（#8692）和多项 RFC 已更新到 Rev. 2/3，反映项目在 v0.9.0 前的治理与边界梳理工作持续推进。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时没有 Release 事件，最新可参考版本仍为 0.8.3（来自 #6808 的版本锚点）。从 PR 状态看，下一版本（预计 v0.9.0 候选）的核心变更集中在认证体系、Shell 策略、Matrix 进度流、Anthropic OAuth 与通道授权修补等方面，但尚未形成可发布的稳定快照。

---

## 3. 项目进展

### 已合并/关闭的重要 PR

- **[PR #9750] fix(service): bound launcher-owned daemon logs（已关闭）** — [链接](https://github.com/zeroclaw-labs/zeroclaw/pull/9750)
  将启动器持有的守护进程日志从无界固定文件重定向，改为有界（每文件 ≤ 8 MiB）监督器；该改动已被更聚焦的 [PR #9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773)（launchd 专项 8 MiB 上限监督）替代，#9773 当前为 OPEN 状态。

### 已关闭的关键 Issue（视为推进的"隐式修复"）

- [#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462) `zeroclaw-plugins` lib 单元测试在 CI 中未执行（已关闭，意味着 CI 矩阵已补齐）。
- [#7467](https://github.com/zeroclaw-labs/zeroclaw/issues/7467) ZeroCode 字符串设置支持方向键导航（关闭，UX 改进落地）。
- [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) WhatsApp Web LID 联系人绕过 allowed-numbers 的静默丢消息 Bug（关闭 → P1 安全修复已落地）。
- [#9335](https://github.com/zeroclaw-labs/zeroclaw/issues/9335) 兼容 data 包裹的 OpenAI-compatible 响应（关闭，Provider 适配完成）。
- [#9652](https://github.com/zeroclaw-labs/zeroclaw/issues/9652) `config set` 拒绝含连字符别名的 cron key（关闭，一致性 Bug 修复）。

整体看，**今日实质性向前推进的条目约为 5–6 项**，主要集中在通道安全、Provider 兼容性、CI 覆盖与 ZeroCode UX，但 PR 合入率较低（1/50），多数变更仍卡在审阅与作者回复环节。

---

## 4. 社区热点

按评论数排序，今日最活跃的讨论集中在 **RFC 与治理跟踪**：

| 排名 | Issue | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | RFC: Work Lanes, Board Automation, and Label Cleanup | 18 | 0 |
| 2 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | RFC: Goal mode v1 — bounded foreground Matrix work | 18 | 1 |
| 3 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | RFC: ZeroClaw Chat Completions profile | 16 | 0 |
| 4 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | RFC: Per-execution confirmation tier for high-risk shell commands | 16 | 0 |
| 5 | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | RFC: Pluggable inbound authentication and canonical principals | 12 | 0 |
| 6 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 11 | 0 |
| 7 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 10 | 0 |
| 8 | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding, and reply contract | 9 | 0 |
| 9 | [#9246](https://github.com/zeroclaw-labs/zeroclaw/issues/9246) | RFC: Preserve Todo tracker configuration during ZeroCode ownership migration | 9 | 0 |
| 10 | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore | 9 | 0 |

**诉求分析**：今天的讨论高度集中于**项目级架构与安全边界**——尤其是身份/认证（#7141、#9464）、Shell/工具策略（#7155、#8424、#9678）、通道授权（#9428、#9397、#6350）以及 v0.9.0 的发布工程。👍 数普遍为 0，唯一一个有 1 个 👍 的 #8303（Goal mode）反映出社区对"有界前台 Agent 目标"模型确有认同却尚未广泛投票表态。

---

## 5. Bug 与稳定性

按 P1（严重/工作流阻塞）优先排列：

| 严重度 | Issue | 标题 | 是否有修复 PR |
|---|---|---|---|
| **S1 阻塞** | [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) | OpenRouter 流式请求丢弃 `provider_extra` | ❌ 暂无 PR |
| **S2 降级** | [#9768](https://github.com/zeroclaw-labs/zeroclaw/issues/9768) | daemon reload 不响应 SIGUSR1，且降级安全告警引导运维发送会杀死 daemon 的信号 | ❌ 暂无 PR |
| **S2 降级** | [#9780](https://github.com/zeroclaw-labs/zeroclaw/issues/9780) | cron 触发的 SOP 无法执行网络工作（无 http 能力，`shell.exec`/`notify.channel` 为不可满足占位符） | ❌ 暂无 PR |
| **S2 降级（隐式）** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档默认值不被守护进程遵守，SOP 静默永不加载 | ❌ 暂无 PR |
| **S3 轻微** | [#9697](https://github.com/zeroclaw-labs/zeroclaw/issues/9697) | ZeroCode 无法连接 Windows Task Scheduler 启动的 daemon | ❌ 暂无 PR |
| **S3 轻微** | [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) | 当 log_persistence 关闭时，withheld-capability 提示对运维不可见 | ❌ 暂无 PR |
| **P1 安全** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/工具 schema 克隆导致 agent loop 中 RSS 无界增长（从 #5542 拆出） | ⚠️ 关联修复在多 PR 中推进，未单点合并 |
| **P1 安全** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `verifiable-intent` 在未验证凭证链时评估约束 | ⚠️ 关联 #9769 为其衍生任务 |

**总体观察**：今日有 **3 个 P1/S1 级别**新增 Bug（#9775、#9768、#9697）均**暂无对应修复 PR**，存在维护者响应滞后风险。#8642（MCP 内存膨胀）的修复已在 [PR #8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) 中部分推进，但尚未合并。

---

## 6. 功能请求与路线图信号

### 今日新增/活跃的功能请求

- **[#9631] [Feature]: Send stable session_id to OpenRouter for prompt-cache savings** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9631)（6 评论）
  → 与 P1 Bug [#9775](https://github.com/zeroclaw-labs/zeroclaw/issues/9775) 同源。功能与缺陷修复方向一致，**大概率进入 v0.9.0**。

- **[#9335] 兼容 data-wrapped OpenAI-compatible 响应（已关闭）** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/9335)
  → 已关闭，**已纳入下一小版本或 0.9.0**。

- **[#7467] ZeroCode 字符串设置支持方向键导航（已关闭）** — [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/7467)
  → **已落地**，对应 PR 已合并。

### 路线图强信号（已被 RFC 化）

| 主题 | RFC | 对应 PR |
|---|---|---|
| 通道 Sender 授权（Bluesky/Reddit） | — | [PR #9428](https://github.com/zeroclaw-labs/zeroclaw/pull/9428)（XL, 待合并） |
| Anthropic OAuth 存储档案 | [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | [PR #9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420)（XL, 待合并） |
| Matrix 单消息进度草稿 | — | [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)（XL, 待合并） |
| 工作区相对 forbidden 路径 + `.zeroclawignore` | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | [PR #9776](https://github.com/zeroclaw-labs/zeroclaw/pull/9776)（刚开） |
| 启动器持有日志上限（macOS launchd） | — | [PR #9773](https://github.com/zeroclaw-labs/zeroclaw/pull/9773)（待合并） |
| 工具调用解析器恢复 `<tools>` 包裹 | — | [PR #9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477)（待合并） |

**判断**：v0.9.0 的核心叙事仍将是 **"认证/Shell 策略/通道授权/Anthropic OAuth"**，与 #7432（v0.9.0 跟踪器）一致。OpenRouter 缓存与 Anthropic OAuth 落地是当前最确定的两个用户向收益。

---

## 7. 用户反馈摘要

- **@klonuo (#9697)**：ZeroCode TUI 在 Windows Task Scheduler 启动的 daemon 下报"daemon did not become ready"，且此前版本已存在类似行为，期待的回归未被修复。**痛点**：跨平台 daemon 启动链路可靠性。

- **@AngryPacifist (#9328、#9768、#9769)**：连续贡献 3 条高质量 P1/P2 安全 Issue。**核心诉求**：(1) `verifiable-intent` 的凭证链验证缺失构成安全语义漏洞；(2) 文档/UI 中"发送 SIGUSR1 重载"实际会杀死 daemon，运维指导错误；(3) 安全提示在 `log_persistence = none` 下"消失"。

- **@belumume (#9397)**：WhatsApp Web `allowed_groups = []` 默认为 permit-all 而非 permit-none，构成 P1 安全误导。**诉求**：fail-closed 默认值。

- **@OskarSwierad (#9631)**：通过 OpenRouter 调用 ZeroClaw 成本过高，每轮重复序列化系统提示与工具 schema。**场景**：生产环境长期会话、对成本敏感。

- **@Pratiikpy (#9780、#9779)**：连续两天提交两条关于 **SOP 子系统"静默失败"** 的 Issue——文档承诺的能力在运行时不兑现，且无错误/告警。**痛点**：文档与实现脱节，运维可观测性差。

- **@theonlyhennygod (#6350，已关闭)**：WhatsApp Web 通过 LID 联系人的消息绕过 allowlist 静默丢弃，**无声失败**问题。

- **常见满意度信号**：从 [#9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464)、[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)、[#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) 等 RFC 的持续高评论来看，社区对**严格治理、明确默认、向 fail-closed 收敛**的方向高度认可。

---

## 8. 待处理积压

以下重要 Issue/PR 已超过 30 天未关闭，**建议维护者优先关注**：

| 类型 | 编号 | 标题 | 创建日期 | 当前状态 |
|---|---|---|---|---|
| RFC | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | Work Lanes, Board Automation, Label Cleanup | 2026-05-20 | in-progress, ratification deferred |
| RFC | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | Per-execution confirmation tier | 2026-06-03 | needs-maintainer-review（Rev. 3） |
| RFC | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | Pluggable inbound authentication | 2026-06-03 | in-progress（Rev. 8） |
| RFC | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | Goal mode v1 | 2026-06-24 | needs-maintainer-review |
| PR | [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | feat(matrix): single-message progress drafts（XL, trusted contributor） | 2026-06-28 | OPEN, 需作者响应 |
| RFC | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | Workspace-relative forbidden path patterns | 2026-06-28 | needs-author-action |
| PR | [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | fix(tools/mcp): 集中化 deferred-MCP 访问策略 | 2026-06-29 | OPEN, 需作者响应 |
| PR | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) | fix(tools): image_gen 下载 URL 防 SSRF | 2026-07-08 | OPEN, 需作者响应 |
| PR | [#8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) | feat(zerocode): Doctor 显示激活日志路径 | 2026-07-10 | OPEN, 需作者响应 |
| RFC | [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | Provenance, conversation binding, reply contract | 2026-05-26 | Rev. 2, 等待维护者确认 |
| PR | [#9678](https://github.com/zeroclaw-labs/zeroclaw/pull/9678) | fix(config): harden Git shell policy arguments（P1） | 2026-08-02 | OPEN, 需作者响应 |
| PR | [#9420](https://github.com/zeroclaw-labs/zeroclaw/pull/9420) | fix(anthropic): stored OAuth profiles（XL） | 2026-

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*