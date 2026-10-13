# OpenClaw 生态日报 2026-10-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-13 04:58 UTC

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

**报告日期**：2026-10-13
**数据来源**：github.com/openclaw/openclaw
**分析师**：AI 开源项目分析师

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高频次高密度的工程活动**：过去 24 小时共触达 500 条 Issues（319 条活跃/181 条关闭）和 500 条 PR（351 条待合并/149 条合并或关闭），并连续发布两个版本（`v2026.10.5-beta.2` 和 `v2026.10.2`）。从热点议题看，项目当前正处于"**稳定性修复 + 升级路径重整**"的关键阶段：内存泄漏、Gateway 启动/更新流程、Windows 托管服务、SQLite WAL 等是当日最集中的痛点；同时 Control UI 向 Solid 框架迁移、安全边界加固（SecretRef / 工具 deny / 主权绑定）也在并行推进。整体健康度评估为**中等偏承压**：核心升级链路回归问题仍未完全收敛，但社区响应速度与修复密度较高。

---

## 2. 版本发布

### 🚀 v2026.10.5-beta.2（2026-10-13 发布）
- **关键修复**：`openclaw update` 现在会主动清理过期的 handoff leases、已完成的恢复回执以及遗留的 2026.9.8 恢复记录，不再卡在 `update-recovery-pending` 状态。
- **保留行为**：保留服务堆限制（heap limit）和 webhook 监听器。
- **Windows 路径**：处理 Windows short-*（短路径）相关问题。
- **发布说明链接**：[openclaw/openclaw Releases](https://github.com/openclaw/openclaw/releases)

### 🚀 v2026.10.2（2026-10-13 发布）
- **关键修复**：从稳定的 2026.10.1 首次升级可干净完成；成功的就地更新不再以错误结束；Windows、克隆文件系统、私有 Node 更新路径能正常完成而不再卡住或回滚。
- **关联 PR**：#168849、#169031 等。
- **发布说明链接**：[openclaw/openclaw Releases](https://github.com/openclaw/openclaw/releases)

### ⚠️ 升级与迁移提示
- 当前 `2026.10.5-beta.2` 仍处于 beta 阶段，Issue [#170331](https://github.com/openclaw/openclaw/issues/170331) 报告 `beta.2 update candidate config read exits 1` 会导致 systemd unit 不被修改；Issue [#170332](https://github.com/openclaw/openclaw/issues/170332) 报告 beta 升级在原状态数据库变化时仍会继续推进。建议生产环境等待 stable 版。
- 从 `2026.9.x` 升级至 `2026.10.x` 的用户需先确认升级路径（[#168750](https://github.com/openclaw/openclaw/issues/168750) 已关闭，但仍有 macOS launchd 路径下的 [#164214](https://github.com/openclaw/openclaw/issues/164214) 类问题需要规避）。

---

## 3. 项目进展

今日合并/关闭的 PR 中推进了以下重要方向（基于已关闭 Issue 与 PR 描述提炼）：

| 方向 | 进展 | 关联 Issue/PR |
|---|---|---|
| **Web UI Solid 化** | WebChat 图片附件已正确映射到 media store 路径，image 工具可拿到真实文件而非占位 `image_0` | [#103198 已关闭](https://github.com/openclaw/openclaw/issues/103198) |
| **Telegram 体验** | 抑制过度嵌入的 JSON 元数据，缓解弱模型对 Telegram 用户消息的理解困难 | [#72704 已关闭](https://github.com/openclaw/openclaw/issues/72704) |
| **macOS 启动循环** | 修复 macOS app 的 readiness watchdog 在冷启动慢时 SIGTERM gateway 导致重启循环 | [#158936 已关闭](https://github.com/openclaw/openclaw/issues/158936) |
| **模型目录准确性** | 修复 deepseek-v4-flash 上下文窗口误回退到 200k 默认值的 bug，改为正确读取 catalog 中的 1M | [#127239 已关闭](https://github.com/openclaw/openclaw/issues/127239) |
| **升级激活 Doctor** | 修复 2026.9.5→2026.10.1 升级激活阶段 doctor 卡住 ~24 分钟后失败的问题 | [#168750 已关闭](https://github.com/openclaw/openclaw/issues/168750) |
| **token 用量统计** | 修复 OpenAI 兼容流式路径丢弃 MiniMax-M3 token 用量（transcript 写入全 0） | [#119692 已关闭](https://github.com/openclaw/openclaw/issues/119692) |
| **Model fallback** | 推动 context length exceeded 触发模型 fallback | [#9986 已关闭](https://github.com/openclaw/openclaw/issues/9986) |
| **模型名校验** | 模型配置中加入模型名校验，避免静默错误配置 | [#39811 已关闭](https://github.com/openclaw/openclaw/issues/39811) |
| **包发布恢复** | 修复 macOS 包发布恢复永久卡在 `publishing` 状态的问题 | [#164214 已关闭](https://github.com/openclaw/openclaw/issues/164214) |
| **memory-core dreaming** | 修复 memory-core 梦境并行子代理耗尽本地模型上下文的问题 | [#95746 已关闭](https://github.com/openclaw/openclaw/issues/95746) |
| **回归修复** | 修复 transcript replay 与错误分类中未保护的 `.trim()` 调用导致的 TypeError | [#137729 已关闭](https://github.com/openclaw/openclaw/issues/137729) |

**整体评估**：今日合并密度较高（约 149 条），覆盖升级链路、Web UI、macOS/Windows 兼容性、模型统计、memory 子系统等核心模块，项目整体在多个方向同时向前推进，但每个方向都还遗留若干未结案的高优先级 issue。

---

## 4. 社区热点

按评论数排序，今日社区讨论最活跃的话题：

| 排名 | Issue | 标题 | 评论数 | 👍 |
|---|---|---|---|---|
| 1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 严重内存泄漏：RSS 从 350MB 增至 15.5GB，触发 OOM | 39 | 1 |
| 2 | [#159356](https://github.com/openclaw/openclaw/issues/159356) | llama.cpp manager 假就绪 + 嵌入请求 500 错误 | 26 | 0 |
| 3 | [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog.worker.js 无界内存泄漏（4-5 GB/h） | 22 | 1 |
| 4 | [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后漏补消息 | 20 | 1 |
| 5 | [#160959](https://github.com/openclaw/openclaw/issues/160959) | Gateway 在大型外部插件捕获时阻塞数分钟（2026.9.6 回归） | 20 | 0 |
| 6 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未被回收，僵尸进程堆积 | 18 | 1 |
| 7 | [#78308](https://github.com/openclaw/openclaw/issues/78308) | MCP 工具调用的 channel-mediated approval（consent envelope） | 18 | 1 |
| 8 | [#137729](https://github.com/openclaw/openclaw/issues/137729) | 未保护的 `.trim()` 调用（今日已关闭） | 14 | 0 |

### 诉求分析
- **稳定性**（Memory leak / Crash loop）占据绝对主流：Top 6 中有 4 个直接关乎进程崩溃或内存不可控，反映出**生产环境的可用性焦虑**。
- **数据完整性**（WhatsApp 漏补消息、Telegram 静默丢消息）成为运营层最关心的次类痛点。
- **安全**（MCP 工具授权、SecretRef、tool deny 旁路）虽评论数不算最高，但 👍 数与 P0/P1 标签显示这是企业用户的硬需求。

---

## 5. Bug 与稳定性

按严重程度排列（仅列出 P0 或具高评论量条目）：

### 🔴 P0 严重

| Issue | 标题 | 状态 |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway RSS 350MB → 15.5GB 内存泄漏，重复 OOM | OPEN，**暂无 fix PR** |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | prepared-model-catalog.worker.js 无界内存泄漏，~4-5 GB/h，跨 provider 复现 | OPEN，**暂无 fix PR** |
| [#158390](https://github.com/openclaw/openclaw/issues/158390) | plugin-captures tmp 目录永不被 GC，磁盘无限增长 | OPEN，**暂无 fix PR** |
| [#160959](https://github.com/openclaw/openclaw/openclaw/issues/160959) | Gateway 在大型外部插件捕获时阻塞数分钟（2026.9.6 回归） | OPEN，**暂无 fix PR** |
| [#146860](https://github.com/openclaw/openclaw/issues/146860) | Windows 托管升级 handoff 卡在 `activating` → `abandoned` | OPEN，**暂无 fix PR** |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在重建后 15-24h 内复发（含"瘫痪 gateway"模式） | OPEN，**暂无 fix PR** |
| [#112475](https://github.com/openclaw/openclaw/issues/112475) | Device pairing recovery 在删除后失败 | OPEN，**暂无 fix PR** |
| [#153426](https://github.com/openclaw/openclaw/issues/153426) | MEMORY.md / USER.md 被 provenance ratchet 静默永久排除 | OPEN，**暂无 fix PR** |
| [#160060](https://github.com/openclaw/openclaw/issues/160060) | Windows Gateway 待机恢复后 ~54 分钟静默死亡 | OPEN，**暂无 fix PR** |
| [#166894](https://github.com/openclaw/openclaw/issues/166894) | Gateway 重启在 Windows 多代理安装下悬挂 30 分钟-2 小时 | OPEN，**暂无 fix PR** |

### 🟠 P1 重要

| Issue | 标题 | 状态 |
|---|---|---|
| [#168955](https://github.com/openclaw/openclaw/issues/168955) | 2026.10.1 Windows 启动回归（ready 410s→1030s，sidecars.control-ui-assets 阻塞 477s） | OPEN |
| [#50093](https://github.com/openclaw/openclaw/issues/50093) | WhatsApp 重连后漏补消息 | OPEN |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程僵尸堆积 | OPEN |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | context-overflow-midturn-precheck 高估 ~2.3-2.6x token | OPEN |
| [#132303](https://github.com/openclaw/openclaw/issues/132303) | claude-cli 后端不强制 `agents.list[].tools.deny`（安全旁路） | OPEN |
| [#154891](https://github.com/openclaw/openclaw/issues/154891) | 回滚的配置热重载仍会破坏无关插件 | OPEN |
| [#126950](https://github.com/openclaw/openclaw/issues/126950) | Telegram 不透明 callback payloads (`tgcb1:`) 被静默丢弃 | OPEN |
| [#156353](https://github.com/openclaw/openclaw/issues/156353) | 插件重载后 transcript admission identity mismatch | OPEN |
| [#128916](https://github.com/openclaw/openclaw/issues/128916) | errored message-tool-only run 三层静默吞错 | OPEN |
| [#164394](https://github.com/openclaw/openclaw/issues/164394) | Control UI WebChat 滚动至历史中段时持续微抖动 | OPEN |

### ✅ 今日已修复的 P0/P1（昨日 OPEN，今日 CLOSED）
- [#137729](https://github.com/openclaw/openclaw/issues/137729) 未保护 `.trim()` 调用（关联修复已合入）
- [#158936](https://github.com/openclaw/openclaw/issues/158936) macOS readiness watchdog SIGTERM 慢启动 Gateway
- [#168750](https://github.com/openclaw/openclaw/issues/168750) 升级 Doctor 24 分钟后失败
- [#164214](https://github.com/openclaw/openclaw/issues/164214) macOS 包发布恢复卡 `publishing`

**整体评估**：P0 内存/泄漏/崩溃类 bug 仍占主流，且大多数尚无 fix PR 关联。Windows 升级链路是当日的**最高风险面**。

---

## 6. 功能请求与路线图信号

| Issue | 需求 | 路线图信号 |
|---|---|---|
| [#78308](https://github.com/openclaw/openclaw/issues/78308) | Channel-mediated approval for MCP tool calls（让 MCP server 复用 `/approve <id>` 流水线） | 🟢 高（已有详细 RFC 形态的提案） |
| [#76493](https://github.com/openclaw/openclaw/issues/76493) | 允许 `SecretRef` 对象作为 `mcp.servers[].env` 值 | 🟢 高（👍 4，是安全最佳实践的硬需求） |
| [#111143](https://github.com/openclaw/openclaw/issues/111143) | Control UI 侧边栏允许固定插件标签 | 🟡 中（与 [#110379](https://github.com/openclaw/openclaw/issues/110379) 关于"More"菜单可见性的 UX 改进一致） |
| [#105494](https://github.com/openclaw/openclaw/issues/105494) | "Memory therapy" 交互式解决 memory-wiki 中的开放问题与矛盾 | 🟡 中（依赖 memory-wiki 已有报表能力） |
| [#71330](https://github.com/openclaw/openclaw/issues/71330) | 可配置的 memory promotion 目标文件（不再硬编码 `MEMORY.md`） | 🟡 中 |
| [#169254](https://github.com/openclaw/openclaw/issues/169254) | 设计记录：将 JSON filter/delete 字段提升为列（PostgreSQL 可移植性） | 🟢 高（已被维护者 @steipete **正式接受**，方向已批准） |

### 已被 PR 推进（未合并但已具备 merge 条件）
- [#170146](https://github.com/openclaw/openclaw/pull/170146) **feat(plugins)**：派生 session 实时上下文用于后台侧问（Advisor 首个消费者 [#169564](https://github.com/openclaw/openclaw/issues/169564)）。**XL 规模，影响面广**。
- [#170583](https://github.com/openclaw/openclaw/pull/170583) **feat(auth)**：发布 shared 与 agent credential authority，减少 Codex bearer 请求前对 SQLite 的同步读取（security-sensitive）。
- [#170540](https://github.com/openclaw/openclaw/pull/170540) **feat**：principal-bound remote Control UI for trusted plugins（不共享 Gateway token 的方案，**安全敏感**）。
- [#170656](https://github.com/openclaw/openclaw/pull/170656) **perf(codex)**：在 fetch 边界使用 owner-held credentials。
- [#170476](https://github.com/openclaw/openclaw/pull/170476) **fix**：将 33 个 fix groups / 38 commits backport 到 2026.9.33 扩展支持线。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

### 生产稳定性
- **"Gateway 进程被 OOM killer 反复 kill，然后 launchd-handoff 重启循环"**——多用户报告 2-3 天内 RSS 增长 15GB 级 ([#91588](https://github.com/openclaw/openclaw/issues/91588))。
- **"插件重载后下一次 prompt 会失败，再发一次又好了"**——典型的"transcript admission identity mismatch"，但要求"用户多发一条"是糟糕体验 ([#156353](https://github.com/openclaw/openclaw/issues/156353))。
- **"升级后启动从 410s 退化到 1030s，sidecars.control-ui-assets 阻塞 477s"**——回归让升级变成"赌注" ([#168955](https://github.com/openclaw/openclaw/issues/168955))。
- **"WhatsApp 503 重连窗口期间，所有发到群里的消息都被吞掉"**——运营场景硬伤 ([#50093](https://github.com/openclaw/openclaw/issues/50093))。

### 安全与合规
- **"SecretRef 被 `mcp.servers[].env` schema 拒掉"**——强制安全最佳实践的用户反而走不通 ([#76493](https://github.com/openclaw/openclaw/issues/76493))。
- **"`tools.deny` 在 claude-cli 后端被静默忽略"**——配置文件骗人 ([#132303](https://github.com/openclaw/openclaw/issues/132303))。
- **MCP 调用没有 channel-mediated approval**——高敏操作（发邮件、写 vault）缺乏人在回路 ([#78308](https://github.com/openclaw/openclaw/issues/78308))。

### UX 与可发现性
- **"Control UI 把 Cron、Skills、Nodes 配对全藏在 More 后面"**——管理员找不到入口 ([#110379](https://github.com/openclaw/openclaw/issues/110379))。
- **"WebChat 滚动到中间会持续微微抖动"**——表面 UI 瑕疵，实则严重影响长会话阅读 ([#164394](https://github.com/openclaw/openclaw/issues/164394))。

### 多平台兼容性
-

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比分析报告

**报告日期**：2026-10-13
**分析对象**：11 个开源项目（含 OpenClaw 参照项目）
**数据来源**：GitHub 公开活动（24h 窗口）

---

## 1. 生态全景

2026 年 10 月的个人 AI 助手与自主智能体开源生态呈现**"头部高度活跃、中部分化定型、长尾趋冷"**的格局：OpenClaw 以单日 1000 条 Issues/PR 触达、2 个版本并发释放的体量稳居生态核心；ZeroClaw 与 CoPaw/QwenPaw 在 RFC / 内存重构 / 通道插件化方向同时推进规模化改造；Hermes Agent 虽社区量级靠前但合并速率显著放缓，提示已进入"功能底盘已铺、待消化"阶段。与此同时，Plazmi MCP 集成提案在 NanoBot / PicoClaw / IronClaw 三个项目**同一日由同一作者（cairn-agent）平行提出**，折射出生态在"轻量扩展 + 跨会话世界状态"层面出现明确共识性诉求。

整体健康度分化明显：少数项目仍承受 P0 级内存/升级链路回归（OpenClaw、ZeroClaw），多数项目进入**架构收口 + 安全合规**的纵深阶段，而 NullClaw / TinyClaw / ZeptoClaw 三项目已 24 小时静默，需关注其活跃度衰减。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新开/活跃) | PRs (待合并/已闭环) | 今日 Release | 健康度 |
|---|---|---|---|---|
| **OpenClaw** | 500（319 活跃 / 181 关闭） | 500（351 待合并 / 149 已闭环） | v2026.10.5-beta.2、v2026.10.2 | ⭐⭐⭐☆☆ 中等偏承压 |
| **ZeroClaw** | 36（32 活跃 / 4 关闭） | 50（47 待合并 / 3 已闭环） | 无 | ⭐⭐⭐⭐☆ 活跃稳健 |
| **CoPaw / QwenPaw** | 17（15 开 / 2 关） | 31（23 待合并 / 8 已闭环） | 无（生产 2.2.1 / beta V2.2.2.beta4） | ⭐⭐⭐⭐☆ 高强度迭代 |
| **NanoBot** | 1 新开 | 31（15 待合并 / 16 已闭环） | 无 | ⭐⭐⭐⭐☆ 健康重构 |
| **Hermes Agent** | 50（与 PR 并行） | 50（50 待合并 / **0 合并**） | v0.21.7（10-11 发布） | ⭐⭐⭐☆☆ 合并瓶颈 |
| **LobsterAI** | 2 | 12（3 待合并 / 9 已闭环） | 无 | ⭐⭐⭐⭐☆ 健康推进 |
| **PicoClaw** | 4 | 6（0 待合并 / 6 关闭，多为 stale） | 无 | ⭐⭐⭐☆☆ 维护疲软 |
| **NanoClaw** | 0 | 6（4 待合并 / 2 已闭环） | 无 | ⭐⭐⭐☆☆ 稳态维护 |
| **IronClaw** | 2（0 评论） | 0 | 无 | ⭐⭐⭐☆☆ 平稳 |
| **Moltis** | 1（安全敏感） | 2（均待合并） | 无 | ⭐⭐☆☆☆ 低活跃 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 无 | ⭐☆☆☆☆ 静默 |

**关键观察**：
- **OpenClaw 体量约为次席 ZeroClaw 的 14 倍**，形成清晰的"超核 + 多卫星"结构
- **合并效率**：NanoBot（52%）、LobsterAI（75%）、CoPaw/QwenPaw（26%）处于较高水平；Hermes Agent 0% 合并率是显著异常信号
- **版本节奏**：仅 OpenClaw（2 个）与 Hermes Agent（v0.21.7，10-11）当日有发版动作，其余项目均无 Release 输出

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类代表 | 差异化优势 |
|---|---|---|---|
| **社区规模** | 单日 1000 条触达 | ZeroClaw 86 条、CoPaw 48 条 | 10× 量级，发布频率最高（双版本同日） |
| **架构形态** | Gateway + 多端适配器 + Control UI | Hermes Cloud/Docker、ZeroClaw runtime+daemon、IronClaw 扩展机制 | **全栈覆盖**：从内核到桌面/Cloud/Termux 端到端 |
| **升级治理** | 同时维护 stable / extended support（#170476 backport 33 fix groups） | NanoBot / ZeroClaw 主要主线推进 | **多线支持**显著领先，迁移路径文档化更成熟 |
| **能力广度** | Kanban + MCP + Web/Solid UI + 多种 IM + Skill 子系统 | Hermes Kanban、ZeroClaw RAG、Moltis 子代理、CoPaw channels | **横向覆盖最广**，但代价是 P0 内存泄漏（[#91588](https://github.com/openclaw/openclaw/issues/91588) 15.5GB RSS）等复杂性问题 |
| **响应速度** | 24h 内 149 PR 合入 | CoPaw 8 个、NanoBot 16 个 | 体量最大但合并密度仍最高，**健康的高吞吐流水线** |

**核心定位**：OpenClaw 是当前生态中**唯一兼具"超大规模社区 + 高频版本节奏 + 多端覆盖"** 的项目，是事实上的"参照实现"。其 P0 内存/升级链路痛点反映了**复杂系统在大规模使用下的真实性代价**，而非设计缺陷——这是任何达到此体量的项目都必须面对的工程现实。

---

## 4. 共同关注的技术方向

下表汇总当日多项目共同涌现的需求方向：

| 方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话持久化迁移到 SQLite** | OpenClaw（[#126821](https://github.com/openclaw/openclaw/issues/126821) SQLite 损坏）、NanoBot（[#5943](https://github.com/HKUDS/nanobot/pull/5943) JSONL→SQLite P1）、ZeroClaw（[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) SQLite session backend 时间戳丢失） | 抛弃 JSONL 后的事务一致性、时间戳保留、损坏恢复成为共同难点 |
| **MCP 协议治理 / 人在回路审批** | OpenClaw（[#78308](https://github.com/openclaw/openclaw/issues/78308) channel-mediated approval）、Hermes Agent（[#137619](https://github.com/NousResearch/hermes-agent/pull/137619) MCP stdio 清理）、CoPaw/QwenPaw（[#8188](https://github.com/agentscope-ai/QwenPaw/pull/8188) approval race） | MCP 高敏操作需要 channel 复用 `/approve` 流水线 |
| **多渠道消息可靠性（IM 投递）** | OpenClaw（[#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 漏补 / [#126950](https://github.com/openclaw/openclaw/issues/126950) Telegram callback 丢弃）、Hermes Agent（[#94146](https://github.com/NousResearch/hermes-agent/issues/94146) 等 6 个 P2 Weixin/QQBot 静默丢失） | **"消息静默丢失"是 IM 场景最大信任损耗**，集中爆发 |
| **子代理/多代理治理** | OpenClaw（[#170146](https://github.com/openclaw/openclaw/pull/170146) Advisor）、Moltis（[#1301](https://github.com/moltis-org/moltis/pull/1301) Chat↔Sub-agent parity + [#1302](https://github.com/moltis-org/moltis/pull/1302) spawn allowlist） | coordinator/worker 拓扑中的"行为分叉"与派发范围控制成为新焦点 |
| **跨设备协同（远程 Agent + 本地工具）** | Hermes Agent（[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)，👍40）、OpenClaw（Solid UI / 多平台） | "算力远程化 + 敏感操作本地化"是 OpenAI Operator 风格的本地化变体 |
| **升级/迁移链路鲁棒性** | OpenClaw（v2026.10.5-beta.2 + v2026.10.2 双发修复）、NanoBot（[#6154](https://github.com/HKUDS/nanobot/pull/6154) preview candidates 冲突）、Hermes（v0.21.7 回归 [#137294](https://github.com/NousResearch/hermes-agent/issues/137294)） | 跨版本升级是当前 P0 集中区 |
| **Plazmi 集成（MCP + 世界状态）** | NanoBot（[#6182](https://github.com/HKUDS/nanobot/issues/6182)）、PicoClaw（[#3427](https://github.com/sipeed/picoclaw/issues/3427)）、IronClaw（[#8136](https://github.com/nearai/ironclaw/issues/8136)）—— **同一作者 cairn-agent 同日平行提交** | "跨会话世界时钟 + 受限 MCP 工具"是新兴共识场景 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈 AI 助手（Gateway + IM + Web + Skill） | 中大型团队 / 多平台部署者 | **Gateway-centric + 多端适配器**，成熟升级治理 |
| **ZeroClaw** | Provider / Billing / RAG 子系统 | 成本敏感型运营者 | **runtime + daemon 分离**，A2A 协议 crate 化 |
| **CoPaw/QwenPaw** | Channels 插件化 + Memory 重构（reme）

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-13

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库公开活动
> 统计窗口：2026-10-13 过去 24 小时

---

## 1. 今日速览

NanoBot 今日整体处于**高强度重构 + 多线并进**的开发活跃期。24 小时内共有 **31 条 PR 变动**（合并/关闭 16，待合并 15），其中代码合并率约 **52%**，合并速度良好；但 Issues 端仅有 1 条新提案，社区反馈通道较为冷清。在内容结构上，当日合并/关闭的 16 条 PR 中以架构重构、WebUI 分层与文档/技能增强为主，而仍开放的多条高优先级 PR 集中在 **会话持久化重构（SQLite 化）、运行时导入边界、PPTX 解析回归** 等核心稳定性议题上。整体来看，项目处于 **主线稳定重构期，无新版本发布**，健康度良好但仍需关注 P1/P2 长期挂起项的落地节奏。

---

## 2. 版本发布

无新增 Release 版本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| 类型 | PR | 说明 |
|------|------|------|
| 🟢 已合并 | [#6160](https://github.com/HKUDS/nanobot/pull/6160) — `feat(images): reuse named connections and image request settings` | 图像生成接入已命名的连接（不再局限于固定 provider 名称），并复用图像请求专属参数，缩短了图像调用链路。 |
| 🟢 已合并 | [#6168](https://github.com/HKUDS/NanoBot/pull/6168) — `feat(update): integrate managed installs and recoverable in-app updates` | *（按记录显示）* 整合托管安装、可恢复的版本更新流程（关联 #5817、#6154 协同工作）。 |
| 🟢 已合并 | [#3588](https://github.com/HKUDS/nanobot/pull/3588) — `fix(transcription): convert non-WAV audio to 16kHz mono WAV before upload` | **长期挂起的修复（创建于 2026-05-02）终于合并**。在上传前将非 WAV 音频转码为 16kHz 单声道 WAV，修复 self-hosted Whisper（whisper.cpp `/inference`）后端拒绝任意格式的问题。 |
| 🟢 已合并 | [#6172](https://github.com/HKUDS/nanobot/pull/6172) — `refactor(agent): compose image tools in application runtimes` | 将图像生成工具的 provider 构造与状态从 `AgentLoop` 拆出，改为由应用层在 `ToolRegistry` 中装配，降低核心循环耦合。 |
| 🟢 已合并 | [#6176](https://github.com/HKUDS/nanobot/pull/6176) — `feat(skills): explain nanobot usage from bundled documentation` | 新增内置 `nanobot-document` 技能：让 agent 按需从与安装版本匹配的文档中读取并解释使用步骤。 |
| 🟢 已合并 | [#6178](https://github.com/HKUDS/nanobot/pull/6178) — `Feat/webui extensions` | WebUI 扩展相关能力推进（与 #6032 同主线，已合并）。 |
| ⚪ 已关闭 | [#6180](https://github.com/HKUDS/nanobot/pull/6180) — `Add Sol AI to Open Source Partners` | 提议新增 Sol AI 作为开源合作伙伴的文档条目，未合并。 |

> **推进评估**：今日合并涉及 3 个稳定方向——**图像能力收口（#6160 / #6172）、文档技能化（#6176）、音频转码兼容性（#3588）**。其中 #3588 跨 5 个月才落地，提示社区维护者对自托管后端的兼容性测试覆盖仍存在盲点。

---

## 4. 社区热点（讨论最活跃 / 战略性 PR）

> 注：今日数据中 PR 评论计数大多为 `undefined`，以**议题影响力、优先级标签、跨 PR 协同度**为热点判据。

- 🔥 [#5943](https://github.com/HKUDS/nanobot/pull/5943) — **refactor(session): centralize state ownership in SQLite（p1）**
  - 提出用 SQLite 事务替代 JSONL 作为会话权威存储，并通过有界 worker pool 把存储 I/O 移出事件循环。
  - 自 2026-09-27 创建至今仍在迭代，是当前 **P1 优先级**的旗舰重构，关系会话可靠性与恢复语义。

- 🔥 [#6166](https://github.com/HKUDS/nanobot/pull/6166) — **refactor: isolate runtime contracts and enforce import boundaries（p2）**
  - 拆分配置初始化与会话恢复对 WebUI/channel 适配器的耦合，强制导入边界。
  - 与 #5943、#6179 形成 **同一作者（chengyongru）主导的架构三件套**，体现项目级模块化策略。

- 🔥 [#6154](https://github.com/HKUDS/nanobot/pull/6154) — **feat(release): prepare verified prebuilt preview candidates**
  - 为 5 类目标构建匹配 Python、编译 WebUI 与原生 TUI 包，使用户无需前端构建环境即可预览。
  - 标记 `conflict`，与 #6168（update 执行器）和 #5817（执行器独立）需要维护者协调合并顺序——**分发侧的核心依赖协调问题**。

- 🔥 [#6152](https://github.com/HKUDS/nanobot/pull/6152) — **feat(channels): add WhatsApp Agent Platform channel**
  - 接入官方 WhatsApp Agent Platform（`api.whatsapp.com/agent/v1`），扩展企业级消息渠道覆盖面。
  - 反映社区对**多渠道商业部署**的诉求持续上升。

---

## 5. Bug 与稳定性

| 严重度 | 标题 | 状态 | 链接 |
|--------|------|------|------|
| 🟠 中 | `fix(documents): preserve empty PPTX table columns`（p2） | **已有 fix PR（#6181）未合并** | [#6181](https://github.com/HKUDS/nanobot/pull/6181) |
| 🟠 中 | `fix(providers): stream Codex image generation responses`（p2, conflict） | **已有 fix PR（#6011）未合并**，与 #4332 存在连续依赖 | [#6011](https://github.com/HKUDS/nanobot/pull/6011) |
| 🟢 已修复 | `fix(transcription): convert non-WAV audio to 16kHz mono WAV before upload` | **今日合并 #3588** | [#3588](https://github.com/HKUDS/nanobot/pull/3588) |
| 🟢 已修复（间接） | `feat(images): reuse named connections and image request settings` | 今日合并 #6160，统一图像命名连接避免错连 | [#6160](https://github.com/HKUDS/nanobot/pull/6160) |

**重点关注**：
- **#6181（PPTX 空列错位）**：当前实现会在 join 行前丢弃空单元格，导致 `Alice / (blank) / 100` 被错误压缩为 `Alice\t100`。该 PR 已附真实 PPTX 回归测试，等待审阅。
- **#6011（Codex 图像生成 SSE）**：因 `AsyncClient.post()` 是 buffer 模式，HTTPX 在解析器感知到 `response.completed` 之前就读取了 body，可能丢失已生成的图。该 PR 是 #4332 的 follow-up。

---

## 6. 功能请求与路线图信号

### 新提案（今日唯一 Issue）
- **[#6182](https://github.com/HKUDS/nanobot/issues/6182) Proposal: optional Plazmi world catch-up example through restricted MCP tools**
  - 作者 cairn-agent 提出贡献一个示例：**让现有 agent 通过受限 MCP 工具访问 [Plazmi](https://plazmi.gg)（一个会话间隔仍持续真实 UTC 时钟的家政世界）**。
  - 与官方 MCP 配置指南中"外部 server vs 核心 + `enabledTools`"分层完全契合。
  - 反映社区对**受限工具沙盒 + 跨会话世界状态**类用例的兴趣。

### 已被 PR 化的功能请求

| 需求方向 | 对应 PR | 预期版本影响 |
|---------|---------|-------------|
| OpenRouter 原生图像生成 API 支持 | [#5718](https://github.com/HKUDS/nanobot/pull/5718) | 下一版本很可能纳入（与 #6011 共同完善 provider 覆盖） |
| WhatsApp Agent Platform 渠道 | [#6152](https://github.com/HKUDS/nanobot/pull/6152) | 候选纳入（沿用现有 channel 注册框架） |
| Telegram 自托管 Bot API 端点（#4702） | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 自 2026-07-14 待合并，企业网关场景刚需 |
| CoreWeave Inference 自定义 provider | [#6103](https://github.com/HKUDS/nanobot/pull/6103) | 纯文档添加，门槛低 |
| FXMacroData MCP 预设（免 API key） | [#6068](https://github.com/HKUDS/nanobot/pull/6068) | 丰富 Apps 预设面板 |
| 本地 WebUI 受信扩展面 | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | 与 #6178 协同，扩展 WebUI 生态 |

---

## 7. 用户反馈摘要

> 今日 Issues 端仅 1 条新提案，无显著评论互动；用户声音主要**沉淀在 PR 描述中的 problem statement**：

- 🎯 **跨会话世界状态用例**：cairn-agent 的 #6182 揭示了一类新兴需求——agent 需在**会话间隔保持与外部世界时间同步**，并希望以"受限 MCP 工具"而非完全访问的方式接入。这是当前文档空白的真实场景。
- 🎯 **图像生成模型灵活性**：#6160 的描述显示用户**已不满足于内置 provider 列表**，期望通过命名连接复用同一模型不同环境设置，指向"基础设施统一抽象"的产品方向。
- 🎯 **自托管后端兼容性**：#3588 揭示一个长期痛点——Whisper.cpp 等自托管后端**对音频格式的硬性要求**未被现有上传链路兼容，导致用户必须自行转码。这是自托管生态普及的关键门槛。
- 🎯 **PPTX 解析正确性**（#6181）：表格空列错位反映出文档处理 pipeline 在边缘情况下的健壮性不足，影响**企业文档场景**的可信度。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | ID | 标题 | 创建时间 | 状态 |
|------|------|------|----------|------|
| 🟠 P1 PR | [#5943](https://github.com/HKUDS/nanobot/pull/5943) | refactor(session): centralize state ownership in SQLite | 2026-09-27 | 开放，**旗舰架构重构**，未合并 |
| 🟡 P2 PR（长期） | [#4145](https://github.com/HKUDS/nanobot/pull/4145) | fix: resolve #3958 — Weather Skill（conflict） | 2026-06-01 | 开放，**挂起 4 个月以上** |
| 🟡 P2 PR（长期） | [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): support custom Bot API base URL and extra headers | 2026-07-14 | 开放，**挂起近 3 个月** |
| 🟡 P2 PR | [#5718](https://github.com/HKUDS/nanobot/pull/5718) | feat(provider): support OpenRouter native image generation API（conflict） | 2026-09-09 | 开放，与 #6011 协同 |
| 🟡 P2 PR | [#6011](https://github.com/HKUDS/nanobot/pull/6011) | fix(providers): stream Codex image generation responses（conflict） | 2026-10-02 | 开放，依赖协调 |
| ⚪ 文档 PR | [#6180](https://github.com/HKUDS/nanobot/pull/6180) | Add Sol AI to Open Source Partners | 2026-10-12 | **已关闭**（未合并），社区伙伴申请未被接纳，需明确评审标准 |

**维护者建议**：
1. **优先解决冲突标记 PR**：#6154 / #6168 / #5817 的合并顺序直接阻塞"分发+更新"主线落地。
2. **回顾长期挂起项**：#4145、#4919 已超过 90 天，建议要么合并要么明确驳回理由。
3. **架构三件套需统一节奏**：#5943、#6166、#6179 同源改动由 chengyongru 维护，建议设定集成里程碑避免反复 rebase。

---

> 📅 **总结**：NanoBot 在 2026-10-13 维持了 **中-高强度** 的开发节奏，重心从功能扩张转向**架构收口与稳定性回归**。在 PR 合并侧表现良好（>50% 合并率），但 P1 会话持久化重构、与分发相关的 conflict PR 仍是下一阶段能否顺利发版的关键瓶颈。建议维护者优先协调 Re-bin 与 chengyongru 两条主线之间的合并顺序。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-10-13**

---

## 1. 今日速览

Hermes Agent 今日保持极高活跃度，过去 24 小时共触发 100 条 Issues/PRs 更新（50 Issues + 50 PRs），但需要注意的是所有 50 条 PR 均处于"待合并"状态，0 合并/关闭。社区层面的反馈质量较高，多个高优先级 Bug 报告附带完整的复现路径与根因分析。两天前（10 月 11 日）发布的 **v0.21.7** 整合了自 v0.21.6 以来的约 204 个 PR，是当前稳定的桌面/容器/Cloud 主线。整体项目处于"高强度打磨 + 长期积压"并行的状态：kanban、skills、gateway（特别是 Weixin/QQBot）、Termux/Android 安装路径四大方向持续暴露问题，但 PR 合并节奏似乎出现瓶颈。

---

## 2. 版本发布

### v0.21.7 — 发布日期：2026-10-11

- **性质**：Patch release（增量稳定版）
- **整合范围**：自 v0.21.6 以来的 **~204 个 PR**
- **发布渠道**：macOS Apple Silicon、Windows 桌面应用、Microsoft Store / MSIX、安装包、Docker 镜像、Hermes Cloud
- **关键说明**：当前 release notes 仅展示了"汇总"描述，未列出逐项 changelog。但从今日活跃的 issues/PRs 可以推断，v0.21.7 涉及了 Memory provider（holographic）、OpenAI 兼容端点（SenseNova）、API server retry 等多个高敏感区域的改动。
- **已知问题（基于新开 issue）**：
  - [#137294](https://github.com/NousResearch/hermes-agent/issues/137294) 升级到 v0.21.7 后，SenseNova reasoning 模型在多轮请求时全部 400（reasoning_content 重放策略反转）
  - [#137017](https://github.com/NousResearch/hermes-agent/issues/137017) Memory provider 'holographic' 自动安装失败
- **升级建议**：若使用第三方 OpenAI 兼容端点（特别是 reasoning-first 模型），建议先在测试环境验证多轮会话兼容性。

---

## 3. 项目进展

> ⚠️ **今日 0 个 PR 合并**，所有 50 条 PR 仍处于 OPEN 状态。以下为接近成熟、可预计进入下一版本的重要 PR：

### 3.1 Kanban 工作流强化（最大 PR 集群）
- [#123822](https://github.com/NousResearch/hermes-agent/pull/123822) — 修复"活 worker 被误判死亡"导致 6 个并发 worker 重复生成
- [#123481](https://github.com/NousResearch/hermes-agent/pull/123481) — Ready-queue 改为"超容则暂存"而非"盲目入队"
- [#123429](https://github.com/NousResearch/hermes-agent/pull/123429) — 卡片完成必须以"落地证据"为前提（修复"虚假完成"）
- [#118551](https://github.com/NousResearch/hermes-agent/pull/118551) — 评审调度使用独立 `review_profile`，避免作者自评
- [#118500](https://github.com/NousResearch/hermes-agent/pull/118500) — 跨 board 的 per-profile 并发上限统计
- [#118421](https://github.com/NousResearch/hermes-agent/pull/118421) — 防止 board DB 被替换后"静默空板化"
- [#118290](https://github.com/NousResearch/hermes-agent/pull/118290) — 单行毒化数据不再导致整轮 dispatch 崩溃
- [#118281](https://github.com/NousResearch/hermes-agent/pull/118281) — CLI 动作归属只接受"显式作者信号"
- [#118546](https://github.com/NousResearch/hermes-agent/pull/118546) — 评论 BLOB/text 序列化修正
- [#137603](https://github.com/NousResearch/hermes-agent/pull/137603) — `hermes kanban comment` 支持 `--body-file` 与 stdin

**评估**：kanban 模块正在经历一次系统性的"可审计、可恢复"重做，预期将成为 v0.21.8 的核心变化。

### 3.2 Skills 管理稳定性
- [#118700](https://github.com/NousResearch/hermes-agent/pull/118700) — 批量回滚保留 symlink
- [#118692](https://github.com/NousResearch/hermes-agent/pull/118692) — 回滚暂存目录移出 skills 根
- [#118631](https://github.com/NousResearch/hermes-agent/pull/118631) — 同步时不再覆盖 symlinked 技能
- [#118550](https://github.com/NousResearch/hermes-agent/pull/118550) — 解析走 symlink-following 索引

### 3.3 Bot 投递修复（Layer 5）
- [#115771](https://github.com/NousResearch/hermes-agent/pull/115771) — "已耗尽回合"必须在目标 lane 的 profile scope 内执行，避免跨 profile 沉默丢失

### 3.4 跨 profile 传递
- [#120084](https://github.com/NousResearch/hermes-agent/pull/120084) — 被服务的 session 子进程可显式命名它所代理的 profile

### 3.5 Web / Desktop 边界
- [#93508](https://github.com/NousResearch/hermes-agent/pull/93508) — `hermes webapp` 在浏览器中托管 Desktop 渲染器（不是 Web Dashboard），带 hub 鉴权
- [#137420](https://github.com/NousResearch/hermes-agent/pull/137420) — 删除旧的 agentic setup 流程，无迁移无兼容

### 3.6 MCP 修复
- [#137619](https://github.com/NousResearch/hermes-agent/pull/137619) — MCP stdio 清理不再误杀连接窗口内启动的 cron worker

---

## 4. 社区热点

### 4.1 关注度最高
- **[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)（👍 40，27 条评论）** — 远程 Hermes Agent + 本地工具执行。社区需求：希望 Machine A（本地客户端）+ Machine B（远程 Agent 服务端），能复用现有 skills/memory/sessions。**这是 OpenAI Operator 风格场景的本地化版本**，反映出对"算力远程化、敏感操作本地化"架构的强烈呼声。
- **[#2825](https://github.com/NousResearch/hermes-agent/issues/2825)（38 条评论，已关闭）** — Termux/proot Ubuntu 25.10 安装失败。多位 Android 用户的长期痛苦记录。
- **[#137017](https://github.com/NousResearch/hermes-agent/issues/137017)（15 条评论）** — Memory provider 'holographic' 自动安装失败，用户怀疑官方不再支持。
- **[#133212](https://github.com/NousResearch/hermes-agent/issues/133212)（5 条评论）** — `subagent_lifecycle` v1.1 提案：plugin 编排器需要 steer/host-isolation 传输/路由/follow-up。
- **[#94146](https://github.com/NousResearch/hermes-agent/issues/94146)（9 条评论）** — Weixin 实时回复在限速事件后被静默丢弃，即使重新 QR 登录。

### 4.2 高频诉求分析
- **跨设备协同（remote + local tool execution）** —— 头部需求
- **Android/Termux 一等公民路径** —— 长期积压
- **微信生态稳定性** —— 限速、QR 重登、去重三连
- **kanban 审计可追溯** —— 多人协作/合规场景刚需

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P2 风险投递（消息丢失）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#94146](https://github.com/NousResearch/hermes-agent/issues/94146) | Weixin 限速后实时回复静默丢弃 | ❌ |
| [#36750](https://github.com/NousResearch/hermes-agent/issues/36750) | Weixin 内容去重可能误删合法重发 | ❌ |
| [#94433](https://github.com/NousResearch/hermes-agent/issues/94433) | 特定 WeChat 账号出站静默丢失 | ❌ |
| [#99144](https://github.com/NousResearch/hermes-agent/issues/99144) | QQBot C2C 长 CoT 后丢失最终响应 | ❌ |
| [#137605](https://github.com/NousResearch/hermes-agent/issues/137605) | QQBot 重启后群消息误投到 C2C 端点 | ❌ |
| [#83904](https://github.com/NousResearch/hermes-agent/issues/83904) | Hermes Desktop 调度的 cron 任务无法回投到当前桌面会话 | ❌ |
| [#82858](https://github.com/NousResearch/hermes-agent/issues/82858) | Weixin STT 语音并发被误判为未授权 | ❌ |

### 🔴 P2 会话状态风险
| Issue | 描述 | Fix PR |
|---|---|---|
| [#134028](https://github.com/NousResearch/hermes-agent/issues/134028) | reasoning-only clean-stop 无长度门槛，14k monologue 误标完成 | ❌ |
| [#137294](https://github.com/NousResearch/hermes-agent/issues/137294) | SenseNova 多轮 400（v0.21.7 回归） | ❌ |
| [#137610](https://github.com/NousResearch/hermes-agent/issues/137610)（已关闭） | api_server 无 header 首轮重试产生并行 session | ❌ |

### 🟠 P2 安装/更新风险
| Issue | 描述 | Fix PR |
|---|---|---|
| [#123860](https://github.com/NousResearch/hermes-agent/issues/123860) | Termux aarch64 update SIGKILL 会话，半应用状态不可恢复 | ❌ |
| [#124823](https://github.com/NousResearch/hermes-agent/issues/124823) | managed uv 在 aarch64-linux-android 安装失败 | ❌ |
| [#128799](https://github.com/NousResearch/hermes-agent/issues/128799) | PM 安装环境缺 locales/，所有翻译回退为 key | ❌ |
| [#137230](https://github.com/NousResearch/hermes-agent/issues/137230)（已关闭） | 升级后 Mnemosyne 被禁用，ONNX 1.29 锁定冲突 | ❌ |
| [#40328](https://github.com/NousResearch/hermes-agent/issues/40328) | Termux/PRoot 硬链接跨设备错误 | ❌ |

### 🟡 P2-P3 其他
- [#137493](https://github.com/NousResearch/hermes-agent/issues/137493) Docker `--storage-opt` 探针每次启动都创建必死的容器
- [#128410](https://github.com/NousResearch/hermes-agent/issues/128410) Browser 后端从 Docker 切到 local 后 `LocalEnvironment cannot exec argv`
- [#137609](https://github.com/NousResearch/hermes-agent/issues/137609)（已关闭）Desktop Kanban 完成卡片时缺少 summary 提示
- [#52510](https://github.com/NousResearch/hermes-agent/issues/52510) Kanban worker 预算耗尽后丢失部分发现
- [#137596](https://github.com/NousResearch/hermes-agent/issues/137596) Kanban worktree 在同分支已检出的 sibling worktree 上失败
- [#137588](https://github.com/NousResearch/hermes-agent/issues/137588) Slack connector 缺 `search:read` scope
- [#137500](https://github.com/NousResearch/hermes-agent/issues/137500) ACP 未声明 `mcpCapabilities.http`，阻断 qwen-audio-agent 集成
- [#137017](https://github.com/NousResearch/hermes-agent/issues/137017) Memory 'holographic' 自动安装失败

**评估**：今日最令人担忧的是 **风险投递（risk-message-delivery）类 bug 全部无 fix PR**，且全部为 P2。这暗示维护团队可能在排队审查这些 issue，而非修复。

---

## 6. 功能请求与路线图信号

| 提案 | 链接 | 进入下一版本的概率 |
|---|---|---|
| 远程 Agent + 本地工具执行 | [#18715](https://github.com/NousResearch/hermes-agent/issues/18715) | 🟡 中（已有 40 👍，架构改动大） |
| `subagent_lifecycle` v1.1（plugin 编排器） | [#133212](https://github.com/NousResearch/hermes-agent/issues/133212) | 🟢 高（与已有 v1 路线直接相关） |
| Telegram 网关：一次性进度 ack 与周期 status 解耦 | [#125887](https://github.com/NousResearch/hermes-agent/issues/125887) | 🟢 高（小改动，专注用户体验） |
| kanban：完成记录绑定集成点 + session | [#137598](https://github.com/NousResearch/hermes-agent/issues/137598) | 🟢 高（与 [#123429](https://github.com/NousResearch/hermes-agent/pull/123429) 方向一致） |
| kanban：iteration 耗尽后给出可诊断路径 | [#137600](https://github.com/NousResearch/hermes-agent/issues/137600) | 🟡 中（与 [#52510](https://github.com/NousResearch/hermes-agent/issues/52510) 互补） |
| Termux 原生 pkg 安装/升级成为一等路径 | [#86986](https://github.com/NousResearch/hermes-agent/issues/86986) | 🟡 中（已关闭但相关 issue 仍在活跃） |
| ACP 声明 `mcpCapabilities.http` | [#137500](https://github.com/NousResearch/hermes-agent/issues/137500) | 🟢 高（小但生态必要） |

**信号**：下一版本（v0.21.8 或 v0.22）的轮廓已经清晰——**kanban 可审计性 + skills 管理健壮性 + Termux 一等公民**。

---

## 7. 用户反馈摘要

来自今日高评论 issue：

- **Termux 用户极度疲惫**（[#2825](https://github.com/NousResearch/hermes-agent/issues/2825)）：38 条评论显示这是一个跨越数月的"安装—崩溃—半应用状态—重装"循环，用户在 issue 中明确表达"我只是想让它跑起来"。
- **中国 IM 生态用户对企业微信/微信网关的可靠性极度敏感**（[#94146](https://github.com/NousResearch/hermes-agent/issues/94146), [#36750](https://github.com/NousResearch/hermes-agent/issues/36750), [#82858](https://github.com/NousResearch/hermes-agent/issues/82858), [#94433](https://github.com/NousResearch/hermes-agent/issues/94433), [#99144](https://github.com/NousResearch/hermes-agent/issues/99144), [#137605](https://github.com/NousResearch/hermes-agent/issues/137605)）：6 个 P2 issue 集中指向同一类问题——**"消息静默丢失比显式错误更可怕"**，它会破坏用户对系统的信任。
- **远程 Agent 需求是真实的**（[#18715](https://github.com/NousResearch/hermes-agent/issues/18715)）：40 👍 是该项目近期最高的社区背书之一，反映出云端算力 + 本地敏感操作的混合部署是核心场景。
- **v0.21.7 升级体验让部分用户失望**（[#137294](https://github.com/NousResearch/hermes-agent/issues/137294), [#137017](https://github.com/NousResearch/hermes-agent/issues/137017), [#137230](https://github.com/NousResearch/hermes-agent/issues/137230)）：patch 版本号掩盖了实际改动幅度，第三方端点用户被"静默行为反转"伤害。
- **桌面 Kanban 完成流程令人困惑**（[#137609](https://github.com/NousResearch/hermes-agent/issues/137609)）：完成卡片时后端要求"result/summary evidence"但前端从不提示用户先提供，导致"硬拒绝 + 不知道下一步"。
- **官方 Slack connector 缺 `search:read` scope**（[#137588](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-10-13**
**数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日呈现典型的"清扫 + 新议题"双轨节奏：过去 24 小时内，6 个历史长期滞留的 PR（多数由 badgerbees 提交、跨 3 月至 9 月）被批量关闭，疑似维护者集中处理 stale 工单；同时，Issue 端出现两条当日新帖 [#3426](https://github.com/sipeed/picoclaw/issues/3426)、[#3427](https://github.com/sipeed/picoclaw/issues/3427)，带来真实的 MarkdownV2 Bug 与外部项目集成提案。整体活跃度中等偏低，Issues 新开/活跃 4 条 + PR 关闭 6 条，但**无新 Release、无实质性代码合并进主干**，核心 PR [#3381](https://github.com/sipeed/picoclaw/pull/3381)（OpenAI Responses API 切换）仍处于待合并状态。**项目健康度评级：B-**，维护节奏温和但缺乏关键功能落地。

---

## 2. 版本发布

⚠️ 今日无新版本发布。建议关注 [#3381](https://github.com/sipeed/picoclaw/pull/3381) 合并后是否会触发 0.1.x → 0.2.0 的小版本跃迁。

---

## 3. 项目进展

今日共关闭 **6 个 PR**，但其中 **5 个为 stale 关闭**（创建于 3 月份的积压工单），仅有 1 个完成实质闭环：

| PR | 类型 | 关闭性质 | 实质影响 |
|---|---|---|---|
| [#3396](https://github.com/sipeed/picoclaw/pull/3396) feat(channels/onebot): reaction_enabled 开关 | ✅ 实质合并（关联 #3395 关闭） | OneBot 通过默认关停自动 emoji 应答反应 |
| [#1500](https://github.com/sipeed/picoclaw/pull/1500) feat(logger): 日志时间格式可配置 | ⚠️ stale 关闭 | **疑似丢失**，需维护者确认是否回滚未提 |
| [#1397](https://github.com/sipeed/picoclaw/pull/1397) fix(openai_compat): Termux CA 证书加载 | ⚠️ stale 关闭 | Termux TLS 握手修复可能未进入主干 |
| [#1509](https://github.com/sipeed/picoclaw/pull/1509) fix(openai_compat): 剥离 extra_content | ⚠️ stale 关闭 | 非 Google 提供商兼容性问题修复可能未进主干 |
| [#1676](https://github.com/sipeed/picoclaw/pull/1676) feat(feishu): 话题线程隔离 | ⚠️ stale 关闭 | 飞书群聊上下文泄露修复可能丢失 |
| [#1651](https://github.com/sipeed/picoclaw/pull/1651) fix(telegram): HTML 分块保留词边界 | ⚠️ stale 关闭 | Telegram 格式化回复截断修复可能丢失 |

**关键担忧**：badgerbees 一次性提交的 5 个高质量 PR（涵盖 Termux 兼容、飞书线程隔离、Telegram 分块、logger 可配置、openai_compat 兼容性）全部以关闭（而非合并）收尾。建议维护者在下次更新时澄清是"拒绝合并"还是"作者撤回"，避免社区贡献者流失。今日唯一实质性推进是 **OneBot 应答反应可配置化**（[#3395](https://github.com/sipeed/picoclaw/issues/3395) + [#3396](https://github.com/sipeed/picoclaw/pull/3396) 闭环）。

---

## 4. 社区热点

按评论数与议题重要性排序：

| 排名 | Issue/PR | 评论 | 关注点 |
|---|---|---|---|
| 1 | [#3394](https://github.com/sipeed/picoclaw/issues/3394) QQ 机器人接口更新未跟进 | 3 | 第三方平台适配滞后，影响 QQ 通过 NapCat 接入的用户 |
| 2 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) CLA assistant 无法检测签名 | 3 | 阻塞 [#3381](https://github.com/sipeed/picoclaw/pull/3381) PR 合并，**当前阻塞了 OpenAI Responses API 上线** |
| 3 | [#3395](https://github.com/sipeed/picoclaw/issues/3395) OneBot 自动 emoji 应答可配置 | 2 | 已闭环，社区需求得到快速响应 |

**诉求分析**：
- **外部平台适配**：QQ（#3394）反映中国大陆生态对接滞后的老问题
- **CLA 流程**：#3392 是治理层面的"拦路虎"，直接卡住主干 PR
- **默认行为争议**：#3395 揭示 OneBot 频道默认行为过于激进，社区希望"opt-in 而非 opt-out"

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3426](https://github.com/sipeed/picoclaw/issues/3426) Telegram MarkdownV2 转义缺陷 | **新报告**。链接标签与引用块文本未转义保留字符，导致 Telegram 拒绝消息并降级为纯文本，**整条回复的格式全部丢失** | ❌ 无 |
| 🟠 中 | [#3394](https://github.com/sipeed/picoclaw/issues/3394) QQ 通道接口未跟进官方更新 | 影响 QQ 接入用户的功能完整性 | ❌ 无 |
| 🟡 低 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) CLA assistant 签名检测失败 | 不影响功能但阻塞 PR 流程 | ❌ 无（治理问题） |

**关注点**：#3426 是今日唯一"全新出现"的技术 Bug，且影响所有使用 Telegram MarkdownV2 的用户回复体验，建议优先处理。今日关闭的 [#1651](https://github.com/sipeed/picoclaw/pull/1651) 原本可解决 Telegram 格式化相关问题，但被 stale 关闭，**疑似相关 Bug 修复并未真正落地**。

---

## 6. 功能请求与路线图信号

**新提出的需求**：

- **[#3427](https://github.com/sipeed/picoclaw/issues/3427) Plazmi 持久化 Agent 会话示例**（cairn-agent，2026-10-13 新开）
  - 提议将 Plazmi 作为 PicoClaw MCP CLI + heartbeat 的低依赖参考实现
  - 单文件 Python 客户端 + 真实 UTC 时间同步 + `pulse`/`digest` 返回机制
  - **入版可能性**：中等。提案契合 PicoClaw 的"轻量级 AI Agent 工具集"定位，但属于第三方商业集成，存在维护边界问题。

**已有相关 PR 进展**：
- ✅ **OneBot 反应可配置**（[#3396](https://github.com/sipeed/picoclaw/pull/3396)）已闭环
- ⏳ **OpenAI Responses API**（[#3381](https://github.com/sipeed/picoclaw/pull/3381)）待合并
- ❌ **logger 时间格式可配置**（[#1500](https://github.com/sipeed/picoclaw/pull/1500)）已 stale 关闭，需求仍悬空
- ❌ **Feishu 线程隔离**（[#1676](https://github.com/sipeed/picoclaw/pull/1676)）已 stale 关闭，需求仍悬空

**路线图信号**：维护者似乎正在**清理 stale 队列**，但被关闭的 PR 中包含多项有价值的功能改进。建议社区关注这些 PR 是否会被其他贡献者"复活"（reopen with rebase）。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **🔊 QQ 通道滞后的不满**（#3394）：用户发现 QQ 官方接口已更新，但 PicoClaw 的 QQ 通过通道未跟进，**影响实际可用性**。这是中国大陆用户的高频使用场景，维护响应慢于生态变化。

- **🛠 CLA 流程的开发者体验**（#3392）：CLA assistant 无法识别签名直接阻断 PR 合并，对外部贡献者构成准入摩擦。配合 #3381 长期未合并，**正在消耗核心贡献者的耐心**。

- **⚙️ 默认行为控制权诉求**（#3395，已闭环）：用户希望平台行为应**默认保守、显式开启**，而非默认激进的自动反应。这一反馈在 OneBot 频道已被采纳。

- **📝 Telegram 格式丢失焦虑**（#3426，新报告）：用户在私聊/群聊中精心设计的 Markdown 回复被静默降级为纯文本，**既无错误提示也无格式保留**，影响专业场景（如代码片段、引用、链接）使用。

---

## 8. 待处理积压

以下工单已挂起较长时间，建议维护者重点关注：

| 类型 | 编号 | 创建日期 | 状态 | 风险 |
|---|---|---|---|---|
| 🔴 关键 PR | [#3381](https://github.com/sipeed/picoclaw/pull/3381) OpenAI Responses API 切换 | 2026-09-17 | OPEN + 26 天未合并 | 被 #3392 CLA 问题阻塞，**可能影响与 GPT-5/未来模型兼容性** |
| 🟠 重要 Bug | [#3394](https://github.com/sipeed/picoclaw/issues/3394) QQ 接口未跟进 | 2026-09-26 | OPEN 17 天 | 用户基础大，但优先级被低估 |
| 🟡 治理问题 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) CLA 检测失败 | 2026-09-25 | OPEN 18 天 | 持续阻塞外部 PR |
| 🟢 提案 | [#3427](https://github.com/sipeed/picoclaw/issues/3427) Plazmi 集成 | 2026-10-13 | OPEN 0 天 | 等待维护者首次响应 |

**Stale 资产审计建议**：今日被 stale 关闭的 5 个 badgerbees PR（[#1500](https://github.com/sipeed/picoclaw/pull/1500)、[#1397](https://github.com/sipeed/picoclaw/pull/1397)、[#1509](https://github.com/sipeed/picoclaw/pull/1509)、[#1676](https://github.com/sipeed/picoclaw/pull/1676)、[#1651](https://github.com/sipeed/picoclaw/pull/1651)）涉及 Termux 证书、飞书线程、Telegram 分块、logger 配置、openai_compat 兼容五个独立领域，**任何一项被遗漏都可能导致实际用户场景失效**。强烈建议维护者发布声明说明这些 PR 是否需要重新提交。

---

**报告生成时间**：2026-10-13
**数据窗口**：2026-10-12 ~ 2026-10-13
**下次更新**：2026-10-14

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-10-13
**数据周期**：过去 24 小时（基于 2026-10-12 GitHub 活动）
**项目仓库**：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 过去 24 小时呈现 **"中等活跃、零外部用户反馈"** 的特征：共产生 6 条 PR 更新，无新 Issue 提交，也无新版本发布。社区讨论度极低——所有 PR 评论数均为 0（`undefined`），说明这些 PR 尚未进入评审/讨论阶段。整体而言，项目处于 **维护性迭代** 模式，集中在 Bug 修复和基础设施优化上，无新功能交付。Issues 渠道的完全静默值得维护者关注，可能意味着 Issue 入口存在问题或用户直接走 PR 流程。

---

## 2. 版本发布

**本周期无新版本发布。** 项目当前版本节奏未见变化。

---

## 3. 项目进展（已合并/关闭的重要 PR）

### ✅ PR #4080 — 审批卡片现在发送到请求者的会话线程
- **链接**：[nanocoai/nanoclaw#4080](https://github.com/nanocoai/nanoclaw/pull/4080)
- **作者**：amit-shafnir
- **状态**：已 CLOSED
- **影响范围**：`area/security`（审批流）
- **价值**：修复了一个 **真实工作流痛点**——当审批请求源自审批人自己的 DM 中的某个线程（例如 `ncl destinations-add` 等待管理员审批），原本审批卡片会被投递到 DM 顶层，导致请求者在线程内"看不到动静"。修复后 `requestApproval` 会将卡片投递到正确的 thread，提升了审批闭环的用户体验。

### ✅ PR #4079 — 飞书进度卡片误撤回修复 + 语音摘要模型支持 .env 配置
- **链接**：[nanocoai/nanoclaw#4079](https://github.com/nanocoai/nanoclaw/pull/4079)
- **作者**：tier2tech-tian
- **状态**：已 CLOSED
- **影响范围**：`agent-runner`、`channels`、`configuration`、`containers`、`core`、`skills`、`tools`（覆盖极广）
- **价值**：解决了一个 **高频可见的稳定性问题**——飞书 4 号群频繁出现"大狗撤回了一条消息"现象。根因是 `cleanupProgressCard` 在 turn 折叠后误判 `hasVisibleProcess=false` 而触发删除。修复使用 `allSteps` 判断可见过程，并新增了带缺陷注入的回归测试。同时将 `VOICE_SUMMARY_MODEL` 改为通过 `readEnvFile` 调用时读取，修正了仅依赖 `process.env` 的配置缺陷。**此 PR 影响 7 个 area 标签，是今日合并的最具系统性的修复**。

### 综合评估
今日合并的 2 个 PR 都是 **质量改进型** 而非功能扩展型。项目在审批流和飞书通道稳定性上明显前进了一步，但没有新功能进入主线。

---

## 4. 社区热点

**今日社区讨论度为零**——所有 6 条 PR 的 `comment` 字段均为 `undefined`，Issues 渠道 24 小时内完全静默。`👍` 数也全部为 0。

**值得注意的 PR**：

- **PR #4083 — 将 Sol AI 加入 Community 板块**
  - 链接：[nanocoai/nanoclaw#4083](https://github.com/nanocoai/nanoclaw/pull/4083)
  - 作者：TheSolai
  - 内容：Sol AI 是 Dross 运营的个人 AI Agent 博客，基于 OpenClaw，展示了生产级 agent 架构与真实自主工作流。属于生态宣传类贡献，反映出社区正在围绕 NanoClaw/OpenClaw 形成第三方内容生态。
  - **信号**：社区开始出现"自发的对外内容产出"。

- **PR #3674 — Teams 出站文件携带 MIME 类型**（陈旧但仍 OPEN）
  - 链接：[nanocoai/nanoclaw#3674](https://github.com/nanocoai/nanoclaw/pull/3674)
  - 作者：orgads
  - 创建：2026-08-30，**距今已 43 天无活动**
  - 内容：修复 Teams 通道因缺少 MIME type 而拒绝附件的兼容性问题。
  - **信号**：该 PR 跨越 6 周仍未被评审/合并，属于积压项。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 问题 | 状态 | 链接 |
|--------|------|------|------|
| 🔴 **高** | 飞书通道进度卡片误撤回（用户可见，频繁触发） | **已修复**（#4079 已 CLOSED） | [PR #4079](https://github.com/nanocoai/nanoclaw/pull/4079) |
| 🟠 **中** | 审批卡片投递位置错误（审批人线程感知缺失） | **已修复**（#4080 已 CLOSED） | [PR #4080](https://github.com/nanocoai/nanoclaw/pull/4080) |
| 🟡 **中** | OneCLI 1.43+ 技能与网关版本不兼容（`410 Gone` 错误） | **待合并**（#4082 OPEN，Fix in progress） | [PR #4082](https://github.com/nanocoai/nanoclaw/pull/4082) |
| 🟡 **中** | `update-skills.test.ts` 端到端刷新测试受环境变量污染 | **待合并**（#4081 OPEN） | [PR #4081](https://github.com/nanocoai/nanoclaw/pull/4081) |
| 🟢 **低** | Teams 通道附件无 MIME type | **积压 43 天**（#3674 OPEN） | [PR #3674](https://github.com/nanocoai/nanoclaw/pull/3674) |

**稳定性评估**：今日有 2 个用户可见的稳定性问题被关闭（飞书误撤回、审批卡片位置），整体通道质量有所提升。但 OneCLI 升级阻塞（#4082）和测试隔离（#4081）仍是悬而未决的隐患。

---

## 6. 功能请求与路线图信号

今日 **无新功能请求 Issues**。但从 PR 内容可以推断项目当前方向：

- **生态内容化**（#4083）：Community 板块持续扩张，暗示官方在打造 NanoClaw 生态门户。
- **OneCLI 工具链演进**（#4082）：技能系统正在对接 OneCLI 的 agent grants API，并将网关 pin 升级到 1.45.0，说明上游 OneCLI 正在推进，NanoClaw 在快速跟进。
- **配置治理**（#4079）：将 `VOICE_SUMMARY_MODEL` 改为 `readEnvFile` 调用时读取，反映出项目在统一配置读取模式（这可能预示后续会有更多 .env 配置的规范化重构）。

---

## 7. 用户反馈摘要

**本周期无用户反馈可提炼**——Issues 入口零活动，PR 无任何评论，无 👍/👎 数据。这意味着：

- ⚠️ 用户可能正在通过 PR 而非 Issues 反馈问题（绕过 issue triage 流程）
- ⚠️ 也可能存在用户流失到 Discord/微信群等非 GitHub 渠道
- ✅ 已合并的 #4080 描述中提到了真实用户场景（"4 号群频繁出现撤回"），侧面证明核心维护者与用户仍有直接沟通，但未沉淀到公开 issue 中

---

## 8. 待处理积压

| 优先级 | 项目 | 停滞时间 | 链接 | 建议 |
|--------|------|----------|------|------|
| 🔴 高 | PR #3674（Teams MIME type） | **43 天** | [#3674](https://github.com/nanocoai/nanoclaw/pull/3674) | 维护者应尽快评审，决定合并或关闭。停滞过久会阻碍贡献者 |
| 🟡 中 | PR #4082（OneCLI 升级） | 1 天 | [#4082](https://github.com/nanocoai/nanoclaw/pull/4082) | 涉及网关版本 pin 升级，影响安装路径，需 reviewer 重点关注 |
| 🟡 中 | PR #4081（测试隔离） | 1 天 | [#4081](https://github.com/nanocoai/nanoclaw/pull/4081) | 测试基础设施，应优先合入避免后续测试互相干扰 |
| 🟢 低 | PR #4083（社区板块） | 1 天 | [#4083](https://github.com/nanocoai/nanoclaw/pull/4083) | 文档类变更，阻塞影响小 |

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | 有 PR 流转但无新 Issue |
| 维护响应 | ⭐⭐⭐☆☆ | 关闭了 2 个 PR，但 1 个 PR 积压 43 天 |
| 社区参与 | ⭐⭐☆☆☆ | 评论、点赞、Issues 均无活跃数据 |
| 代码质量 | ⭐⭐⭐⭐☆ | 合并的 PR 附带回归测试和缺陷注入验证 |
| 透明度 | ⭐⭐⭐☆☆ | PR 描述详尽，但缺乏用户公开讨论 |

**总结**：NanoClaw 处于 **稳态维护期**，核心团队执行力强（修复了真实可见的稳定性问题），但 **社区信号微弱**，需关注 Issue 入口是否健康以及陈旧 PR 的清理。

---

*报告生成时间：2026-10-13 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-10-13

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) | 报告生成时间：2026-10-13
> 数据周期：过去 24 小时

---

## 1. 今日速览

IronClaw 今日社区动态处于**低活跃度区间**：过去 24 小时仅有 2 条 Issue 新增，PR 流入量为 0，无新版本发布。从内容构成看，今日新开的两条 Issue 分别指向**外部生态扩展提案**（Plazmi hosted-MCP）与**日常质量诊断**（failure taxonomy），尚未进入讨论阶段（评论与反应均为 0）。整体来看，项目代码主干今日无可见推进，但外围生态与质量监控维度仍有持续输入，健康度维持在**平稳状态**。

| 指标 | 数值 | 状态 |
|---|---|---|
| 新开/活跃 Issue | 2 | ⚪ 低 |
| 已关闭 Issue | 0 | ⚪ 低 |
| 待合并 PR | 0 | ⚪ 无 |
| 已合并/关闭 PR | 0 | ⚪ 无 |
| 新版本发布 | 0 | ⚪ 无 |

---

## 2. 版本发布

今日**无新版本发布**，本节省略。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目代码主干在统计窗口内无可见推进动作。结合昨日及更早窗口 PR 流入为 0 的情况，建议关注后续是否有连续多日 PR 真空，以判断是否进入阶段性代码冻结期。

---

## 4. 社区热点

虽然今日 Issue 评论数与点赞数均为 0，但按议题重要性与潜在影响排序，仍有两项值得社区关注：

- 🔥 **[#8136 — Proposal: optional hosted-MCP Plazmi extension using declarative auth and egress](https://github.com/nearai/ironclaw/issues/8136)**
  - **作者**：cairn-agent
  - **类型**：扩展集成提案
  - **诉求分析**：希望复用 IronClaw 既有的 Reborn 扩展机制（声明式 hosted-MCP 元数据、API-key 鉴权、egress 出口），将其作为可选 Plazmi companion 的承载面，而**不向宿主引入供应商特定逻辑**。这是典型的"通过扩展机制做生态集成"的诉求，反映了社区对"宿主保持中立"的强烈偏好。
  - **热度指标**：评论 0 / 👍 0（今日刚开，尚未发酵）

- 📊 **[#8135 — Daily ironclaw failure taxonomy — 2026-10-12](https://github.com/nearai/ironclaw/issues/8135)**
  - **作者**：pranavraja99
  - **类型**：质量监控 / 诊断报告
  - **诉求分析**：这是系列化的"每日失败分类"报告的当日条目，本次聚焦 `officeqa` 套件 52 个非通过任务，结论为模型质量（DeepSeek-V4-Flash）相关错误，并非 IronClaw 框架侧问题。该类型 Issue 价值在于持续对外部依赖做归因隔离。
  - **热度指标**：评论 0 / 👍 0

---

## 5. Bug 与稳定性

今日**无直接以"Bug / 崩溃 / 回归"命名的 Issue** 提交。但与稳定性间接相关的输入如下：

| 严重程度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| 🟢 信息性（非框架缺陷） | [#8135](https://github.com/nearai/ironclaw/issues/8135) | officeqa 套件 52 个非通过任务，经作者分类**全部归因于模型层（DeepSeek-V4-Flash）质量错误**，未发现框架侧失败模式 | 无需（按作者结论） |
| 🟢 低（设计讨论） | [#8136](https://github.com/nearai/ironclaw/issues/8136) | 扩展集成提案，不涉及稳定性问题，但若采纳需评估声明式 auth/egress 当前实现的边界覆盖 | 无 |

**结论**：今日未报告影响框架稳定性的新增缺陷。`#8135` 是高质量的归因型诊断，结论为问题在模型层而非 IronClaw。

---

## 6. 功能请求与路线图信号

**[#8136 — Plazmi hosted-MCP 扩展提案](https://github.com/nearai/ironclaw/issues/8136)**

这是今日**唯一且明确的功能/生态方向信号**：

- **请求内容**：将 Plazmi 作为可选 hosted-MCP companion，复用 Reborn 的声明式扩展面（metadata / API-key auth / egress）。
- **关键设计偏好**：作者明确希望 Plazmi **作为单独安装的扩展**存在，**不要在宿主中添加 vendor 逻辑**。
- **路线图纳入可能性评估**：
  - ✅ **较高**——该请求与 IronClaw 现有扩展机制契合度高，未要求宿主核心改造；
  - ⚠️ **需要验证**：声明式扩展面是否已覆盖作者所需的全部 hosted-MCP 元数据、API-key 鉴权、egress 控制能力。若存在缺口，可能需先扩展扩展机制本身，再纳入 Plazmi。
- **配套 PR**：暂无。属于"先讨论、再 PoC"的早期阶段。

---

## 7. 用户反馈摘要

由于今日两条 Issue **评论数均为 0**，暂无可提炼的社区讨论文字。可观察到的**间接信号**：

- 🔹 **架构中立性偏好**：`#8136` 作者明确反对向宿主注入 vendor 逻辑，倾向"扩展承担集成、宿主保持中立"。这是 IronClaw 扩展生态健康度的正向信号。
- 🔹 **质量归因严谨度**：`#8135` 作者主动将失败归因到模型层而非 IronClaw，避免污染项目 issue tracker，体现成熟的 issue 卫生习惯。
- 🔹 **暂无不满/满意直接表达**：当前窗口下用户情绪面**中性偏正**。

---

## 8. 待处理积压

因今日新开的两条 Issue 创建/更新时间均为 24 小时窗口内，**目前不存在长期未响应项**。但仍提示维护者关注以下两点：

- 🟡 **[#8136](https://github.com/nearai/ironclaw/issues/8136)** —— 属于扩展机制边界确认类讨论，需要维护者评估当前 Reborn 扩展面是否就绪以承载该请求。**建议在 1–3 个工作日内给予首次回应**（哪怕是"收到，正在评估扩展面覆盖度"），以维持提案方参与感。
- 🟡 **[#8135](https://github.com/nearai/ironclaw/issues/8135)** —— 作为系列化的"每日失败分类"报告，建议维护者定期（如每周）做一次累计趋势汇总，避免该类型 Issue 长期零反馈而被作者或其他读者误判为"无人在意"。

---

### 📌 总结

IronClaw 今日处于**低代码活动 / 中等外围输入**的状态：核心代码主干无推进，但生态扩展提案（Plazmi）与质量归因诊断（officeqa 模型层失败）两条线索均已落库。项目健康度总体平稳，无稳定性告警，下一步建议关注扩展机制覆盖度的官方表态与 PR 流入节奏的恢复情况。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-10-13**

---

## 1. 今日速览

LobsterAI 今日仓库活跃度处于中高位：过去 24 小时内有 2 条 Issue 动态、12 条 PR 动态，其中 9 条 PR 已合并/关闭、3 条仍处于待合并状态。代码层面覆盖 Computer Use 跨平台支持、IM/后台任务稳定性、桌面会话标题生成、Artifacts 预览交互、Agent 头部样式等多个方向，无新增版本发布。整体来看，项目处于日常功能迭代与跨平台能力扩展并行推进的节奏，社区互动度仍偏低（所有条目评论数均 ≤2）。

**项目整体状态：🟢 健康 | 持续推进**

---

## 2. 版本发布

无新版本发布。

> 注：PR [#2843](https://github.com/netease-youdao/LobsterAI/pull/2843) `Release/2026.9.24` 已关闭，结合命名推测这是一个 release 分支合入或发布准备性 PR，建议关注后续是否会有 `v0.2.5` 或更新版本号发布。

---

## 3. 项目进展

今日合并/关闭的 9 条 PR 显示出多线并进的开发节奏，以下为重要进展：

### 🚀 跨平台能力补齐
- **PR [#2844](https://github.com/netease-youdao/LobsterAI/pull/2844)** `feat(computer-use): support Intel Macs with a mac-x64 runtime` —— Computer Use Kit 新增 `mac-x64` runtime（0.2.2），通过 swift cross-compile 构建。**意义：补齐 Intel Mac 以及 Rosetta 下 x64 构建运行时缺位问题**，原本在该机型 Kit 市场不展示、MCP server 不注入。

### 🐛 后台稳定性修复
- **PR [#2845](https://github.com/netease-youdao/LobsterAI/pull/2845)** `fix(computer-use): exit the MCP bridge when its stdio closes` —— 修复 OpenClaw 在崩溃循环/SIGKILL 后 MCP bridge 因 stdin 被关闭而未退出的问题，使其在 POSIX 上能正确响应 stdio EOF 而非仅 SIGINT/SIGTERM。

### 🎨 产品体验优化
- **PR [#2846](https://github.com/netease-youdao/LobsterAI/pull/2846)** `feat(cowork): generate titles for new desktop sessions` —— 用户新建桌面会话后，先显示本地标题，再基于首条提问异步生成简短标题，失败/超时静默回退。
- **PR [#2840](https://github.com/netease-youdao/LobsterAI/pull/2840)** `feat(agent): polish agent header and add double-click task rename` —— 移除 2026.5.9 之后已成 unreachable 的 legacy emoji avatar 渲染分支，加入双击任务重命名。
- **PR [#2841](https://github.com/netease-youdao/LobsterAI/pull/2841)** `fix(artifacts): let zoomed image, SVG and Mermaid previews pan to every edge` —— 修复预览面板缩放后左侧/边缘无法抵达的回归，原因为 `transform: scale()` + center origin 不扩展 overflow 容器尺寸。

### 📦 产品入口与界面扩展（无描述 PR）
- **PR [#2848](https://github.com/netease-youdao/LobsterAI/pull/2848)** `feat: open with`（Windows）
- **PR [#2847](https://github.com/netease-youdao/LobsterAI/pull/2847)** `feat: desktop companion composer`

### 🔧 临时回退
- **PR [#2842](https://github.com/netease-youdao/LobsterAI/pull/2842)** `feat(cowork): hide per-turn credits chip until the breakdown is reworked` —— 因积分计算未包含图像生成费用而临时隐藏每轮 credits 显示，待重新设计。

**推进评估**：今日净推进量较大，至少覆盖了 3 个平台/稳定性问题（Intel Mac 支持、MCP 退出、Artifacts 平移）、2 个产品体验增强（自动标题、Agent 头部）和 1 个 UI 回退防误导，**项目整体向前迈进了显著一步**。

---

## 4. 社区热点

今日交互活跃度偏低（所有 Issue/PR 评论数均 ≤ 2），相对热点如下：

| 链接 | 标题 | 状态 | 评论 | 热度 |
|------|------|------|------|------|
| [#2801](https://github.com/netease-youdao/LobsterAI/issues/2801) | [邀收录] 10/12 agent harness 榜单 · 免费 L1 收录 | OPEN | 2 | 外联触达 |
| [#2793](https://github.com/netease-youdao/LobsterAI/issues/2793) | Skill-controlled metadata lets an installed skill cause arbitrary directory deletion on uninstall | CLOSED | 1 | 安全感 |

**诉求分析**：
- **#2801** 是 Nautilus 组织向 LobsterAI 进行的外部榜单收录邀请（agent harness 评测），属生态合作触达，而非产品诉求。
- **#2793** 是一类安全研究类 Report，提交者披露了 `main` 分支存在的安全缺陷（v0.2.4 不受影响），并已通过验证后关闭，是负责任披露的典型范例。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 标题 | 修复状态 |
|--------|-----------|------|----------|
| 🟠 高（安全） | [#2793](https://github.com/netease-youdao/LobsterAI/issues/2793) | 安装的 skill 可在卸载时导致任意目录删除 | ✅ Issue 已 CLOSED；未在 PR 数据中看到对应 fix（建议关注 `main` 是否已并入修复） |
| 🟡 中（功能） | [#2845](https://github.com/netease-youdao/LobsterAI/pull/2845) | MCP bridge 在 stdio 关闭时不退出 | ✅ 已 CLOSED（修复 PR） |
| 🟡 中（功能） | [#2841](https://github.com/netease-youdao/LobsterAI/pull/2841) | 缩放图像/SVG/Mermaid 无法平移到边缘 | ✅ 已 CLOSED（修复 PR） |
| 🟢 低（UI/逻辑） | [#2850](https://github.com/netease-youdao/LobsterAI/pull/2850) | `IMCoworkHandler.destroy()` 销毁后台累加器可能抛错 | 🟡 仍 OPEN，Fixes [#926](https://github.com/netease-youdao/LobsterAI/issues/926) |

> **安全提醒**：#2793 描述的 uninstall 任意目录删除是一个潜在 RCE/数据丢失级别问题，虽仅影响 `main` 分支（v0.2.4 不受影响），仍建议维护者发布说明中标注，避免用户在 nightly 构建上执行未审计 skill 卸载。

---

## 6. 功能请求与路线图信号

### 用户/外部功能触达
- **#2801**：[Nautilus 邀请收录 agent harness 榜单](https://github.com/netease-youdao/LobsterAI/issues/2801) —— 属生态曝光诉求，对代码路线无直接影响，但若接受将进入第三方评测体系，对项目声誉/可比性建设有价值。

### 主线新增能力（已合并或进行中）
- **PR [#2849](https://github.com/netease-youdao/LobsterAI/pull/2849)** `feat(experts): add configurable expert plaza and summon flow`（OPEN）—— 新增 "Expert Plaza" 用于发现与召唤任务型 Agent，并将 Kits 移入共享 Kits/Skills/Connectors 目录；内容来自 Overmind 与版本化 CDN catalog，**客户端无需重构建即可更新内容与排序**。**信号：内容运营解耦、内容可远程下发，是重要平台化信号，可能纳入下个中版本**。
- **PR [#2848](https://github.com/netease-youdao/LobsterAI/pull/2848)（已 CLOSED）** —— "open with" 入口（Windows）。
- **PR [#2847](https://github.com/netease-youdao/LobsterAI/pull/2847)（已 CLOSED）** —— "desktop companion composer"。

> 综合判断，下一个 minor 版本（如 v0.2.5 或 v0.3.x）大概率会包含 **Expert Plaza + Intel Mac computer-use + 自动会话标题** 这一组功能。

---

## 7. 用户反馈摘要

由于 Issue/PR 评论数普遍偏低，可提炼的真实反馈有限：

- **#2793**：提交者以 commit hash `791a352d...` 精确复现，并主动指出 v0.2.4 不受影响。这反映**社区存在一定比例的安全研究型贡献者**，并形成了负责任披露的协作范式。
- **#2801**：仅 2 条评论，未暴露实质产品痛点；属外部生态合作场景。
- **#2841 引用的用户问题**：在预览面板中缩放图像到 160% 等比例时左侧"够不到"，反映了 **Artifacts 预览交互在小细节上的可用性短板**。

整体看：社区反馈样本量偏小，**真实用户痛点的"显性信号"较少**，建议通过模板化 Issue、Discord/微信群反馈等方式汇聚更多使用场景。

---

## 8. 待处理积压

| 链接 | 类型 | 标题 | 创建日 | 紧迫度 |
|------|------|------|--------|--------|
| [#2672](https://github.com/netease-youdao/LobsterAI/pull/2672) | PR (OPEN) | `chore(deps): bump mermaid from 10.9.8 to 12.1.0`（Dependabot） | 2026-09-14 | 🟡 中（已跨版本大升级，可能涉及渲染 API 变更，需 review 与回归） |
| [#2849](https://github.com/netease-youdao/LobsterAI/pull/2849) | PR (OPEN) | `feat(experts): add configurable expert plaza and summon flow` | 2026-10-13 | 🟡 中（功能型 PR，规模较大，建议维护者尽快 review） |
| [#2850](https://github.com/netease-youdao/LobsterAI/pull/2850) | PR (OPEN) | `fix(im): safely destroy background accumulators` | 2026-10-13 | 🟢 低（小修复，但与问题 #926 关联） |

> 🔔 维护者关注建议：
> 1. **#2672** —— 30 天未合并的依赖升级，从 10 → 12 是大跨版本，需关注渲染兼容性与 bundle size 影响。
> 2. **#2849** —— 涉及内容运营链路改造，含 CDN catalog 与 IPC 通信，建议重点 review 安全路径。

---

### 总结

LobsterAI 在 2026-10-13 整体呈"功能推进 + 跨平台补齐 + 小型回退"的健康迭代节奏，无新版本发布但积压了一批有质量的合并。社区交互度偏低，**未观察到显著的负面舆情或大面积故障**；安全披露 #2793 已被妥善关闭值得肯定。下一阶段建议重点关注 Expert Plaza 的合并节奏（PR #2849）以及 mermaid 大版本依赖升级（PR #2672）的回归验证。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期：2026-10-13**

---

## 1. 今日速览

Moltis 项目今日处于**低强度维护状态**，过去 24 小时内无版本发布、无 PR 合入、无 Issue 关闭。社区活动以"新提案驱动"为主：外部贡献者 ManuRakh 连发 2 个聚焦子代理（sub-agent）能力对齐的 PR，另有用户 texxronn 提交了一条涉及**访问控制策略绕过**的敏感安全问题。整体来看，项目在多代理编排层面有积极演进，但安全治理与提交流转效率仍需关注。

- **活跃度评级**：⭐⭐☆☆☆（低活跃）
- **净变化**：+1 Issue / +2 PR / -0 Release
- **安全信号**：⚠️ 出现访问控制类问题，建议优先审视

---

## 2. 版本发布

今日**无新版本发布**，未触发版本节点。无需迁移说明。

---

## 3. 项目进展

今日无 PR 进入合并队列，项目代码层面的实质性推进为 0。

值得关注的"在途"提案（尚未合并但指向明确的演进方向）：

- **[#1301](https://github.com/moltis-org/moltis/pull/1301) Chat ↔ Sub-agent parity** — 作者 ManuRakh
  推动"直接对话"与"`spawn_agent` 子代理调用"两条路径在 persona、system_prompt_suffix、delegate_only、preset model 等字段上的语义对齐。该 PR 若合并，将显著降低协调者/工作者（coordinator/worker）拓扑中"同一 agent 自我对话 vs 派生子代理"的行为分歧。
- **[#1302](https://github.com/moltis-org/moltis/pull/1302) Preset spawn.allow allowlist** — 作者 ManuRakh
  引入 `agents.presets.<id>.spawn.allow` 白名单机制，在 `resolve_preset` 阶段就限制可被 `spawn_agent` 触发的目标 preset。**该 PR 显式依赖于 #1301**，意味着合并存在顺序约束。

> 评估：两 PR 同源、互锁，若维护者今日未合入，下一个工作日应优先处理 #1301 以解锁 #1302 的合并路径。

---

## 4. 社区热点

今日社区互动量整体偏低（所有新条目评论数均为 0，点赞数均为 0），但**话题敏感度较高**：

| 热度维度 | 条目 | 说明 |
|---|---|---|
| 安全相关 | [#1303](https://github.com/moltis-org/moltis/issues/1303) | 涉及访问策略绕过，属高优先级议题 |
| 架构演进 | [#1301](https://github.com/moltis-org/moltis/pull/1301) | 触及多代理范式一致性，长期价值显著 |
| 治理强化 | [#1302](https://github.com/moltis-org/moltis/pull/1302) | 与 #1301 联动，提升 preset 调用的可控性 |

**诉求分析**：
- Issue #1303 反映的是"通道绑定会话（channel-bound session）"中 web UI / webhook / cron 等非网关入口的访问策略不完整，本质是**多入口场景下的访问控制一致性**诉求。
- 两个 PR 共同反映社区对**多代理可控性、可约束性**的持续关注，与行业"agent 治理（agent governance）"趋势一致。

---

## 5. Bug 与稳定性

**🔴 高优先级（安全问题）**

- **[#1303](https://github.com/moltis-org/moltis/issues/1303)** — 通道绑定会话的回复被投递至外部通道，绕过了账户的聊天访问策略，且 web UI 无任何警示。
  - **严重程度**：高（潜在越权回复 + 静默执行）
  - **触发面**：web UI turn / cron / webhook / `sessions_send` 等非网关入口
  - **当前状态**：新开 Issue，**尚无修复 PR**
  - **建议**：维护者应优先评估影响面并指派负责人

**🟢 其他**：今日无新崩溃、回归或性能类报告。

---

## 6. 功能请求与路线图信号

- **Chat ↔ Sub-agent 语义对齐** [#1301](https://github.com/moltis-org/moltis/pull/1301)：该 PR 实际上是对现有"行为不一致"的隐式功能请求的回应，已具备直接落地条件。
- **Spawn 目标白名单** [#1302](https://github.com/moltis-org/moltis/pull/1302)：回应了企业/团队场景下"限制 agent 派发范围"的治理需求。
- **通道绑定会话的访问策略**：[#1303](https://github.com/moltis-org/moltis/issues/1303) 虽以 Bug 形式提出，但实际暴露了"通道绑定 session 应有独立、显式的访问策略层"这一未实现能力，预计会演化为路线图项。

**纳入下一版本的概率评估**：
- #1301 → 高（结构性、向后兼容、作者已提供实现）
- #1302 → 中高（依赖 #1301；属增量能力）
- 访问策略层 → 中（需设计取舍，但安全合规压力下大概率进入下个 minor 版本）

---

## 7. 用户反馈摘要

今日所有新条目**评论数均为 0**，无法从互动中提炼用户原声。可从文本本身捕捉的隐含痛点如下：

- **痛点 A — 多入口行为不可预期**：用户 texxronn 明确指出"web UI 也会把回复投递到外部通道，且无 UI 警示"，反映对**副作用可见性**的不满。
- **痛点 B — 同一 agent 不同入口行为分叉**：PR #1301 描述中提到 "coordinator/worker setups 和 'talk to the agent as itself' diverge"，是高级用户在使用多代理拓扑时的真实困扰。
- **痛点 C — 派发范围不可控**：PR #1302 直接服务于"仅允许 spawn 到白名单目标"的管控诉求，暗示部分用户已有类 RBAC 的使用预期。

---

## 8. 待处理积压

> 提示：以下提醒基于今日数据中的开放状态条目，不代表完整积压清单。

- **[#1303](https://github.com/moltis-org/moltis/issues/1303)** ⚠️ **安全敏感，建议 24 小时内响应**
  新开即涉及访问控制绕过，评论/点赞暂无但风险面广，建议维护者优先确认是否复现、决定是否发布 hotfix。
- **[#1301](https://github.com/moltis-org/moltis/pull/1301) → [#1302](https://github.com/moltis-org/moltis/pull/1302)** 🔗 **互锁 PR，建议本周内启动评审**
  两条 PR 形成依赖链，长期搁置将阻塞子代理能力收口；建议维护者主动给出 review 反馈，避免贡献者流失。

---

## 附：数据快照

| 指标 | 数值 |
|---|---|
| 新开 Issue | 1 |
| 关闭 Issue | 0 |
| 待合并 PR | 2 |
| 已合并/关闭 PR | 0 |
| 新 Release | 0 |
| 评论总数（新增） | 0 |
| 点赞总数（新增） | 0 |

**报告生成时间**：2026-10-13 | **数据来源**：GitHub REST API（moltis-org/moltis）

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报
**日期：2026-10-13**　|　数据来源：agentscope-ai 仓库

> ⚠️ **数据一致性说明**：任务标题为 CoPaw (github.com/agentscope-ai/CoPaw)，但全部 issue/PR 链接均指向 `agentscope-ai/QwenPaw`。本期日报基于真实数据生成于 QwenPaw 仓库，请维护者确认项目命名是否已切换。

---

## 1. 今日速览

QwenPaw 仓库过去 24 小时保持**高强度迭代节奏**：17 条 Issue 更新（15 开/2 关）+ 31 条 PR 更新（23 待合并/8 已关闭），无新版本发布。社区与核心团队同时在 **Bug 修复、可观测性、UI 体验、架构重构** 多条线并行推进——尤其值得注意是 Channels 插件化（#8187, XXXL）和 memory 系统重构到 reme 集成（#8207, XXXL）两条大型 PR 进入评审窗口。多条 Bug 已形成「Issue + Fix PR」闭环（#8105→#8188、#8174→#8204、#8177→#8197、#8179→#8198、#8194→#8196、#8202→#8203），修复效率较高。

---

## 2. 版本发布

🚫 **本期无新版本发布**。跳过本节。

当前主要在用的活跃版本：
- 生产版：**2.2.1**（Windows / Docker 部署均有反馈）
- 测试版：**V2.2.2.beta4**（已知多项 Bug 围绕该版本）

---

## 3. 项目进展（今日已关闭/合并的 PR）

| PR | 标题 | 规模 | 价值 |
|---|---|---|---|
| [#8188](https://github.com/agentscope-ai/QwenPaw/pull/8188) | fix(approval): 保留审批决策并处理超时竞态 | M | 修复 #8105 的工具审批按钮失效 |
| [#8193](https://github.com/agentscope-ai/QwenPaw/pull/8193) | fix(context): 更早回收 active 结果并验证溢出恢复 | S | 优化长轮次下的 Scroll 压缩与溢出恢复 |
| [#8196](https://github.com/agentscope-ai/QwenPaw/pull/8196) | fix(creator): 容忍 Windows 进程存活探针错误 | XS | 修复 #8194 creator 启动崩溃 |
| [#8203](https://github.com/agentscope-ai/QwenPaw/pull/8203) | fix(console): 用户消息作为新 run 第一帧回显 | S | 解决 #8202 跨设备消息不可见 |
| [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) | feat(tools): Tavily API key 通过 credential store 配置 | L（首次贡献者） | 修复 #8174，让付费 quota 可用 |
| [#8197](https://github.com/agentscope-ai/QwenPaw/pull/8197) | fix(console): 支持可配置 console basename | S | 修复 #8177 反向代理子路径部署 |
| [#8198](https://github.com/agentscope-ai/QwenPaw/pull/8198) | fix(skills): GitHub 导入时保留二进制文件 | S | 修复 #8179 安装 skill 图片/字体损坏 |
| [#8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) | feat(creator): 发布 2.0.1（含可控媒体生产） | XXXL | Creator 插件升级 |

**整体评估**：单日合并/关闭 8 个 PR 中 6 个为带 Issue 闭环的 Bug 修复，体现「Issue 优先」的服务质量。#8121 为 Creator 插件独立小版本（2.0.1），表明子模块已开始独立发版节奏。

---

## 4. 社区热点（按评论数 + 时间热度）

| 排名 | 编号 | 主题 | 评论 | 类型 |
|---|---|---|---|---|
| 1 | [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | web_search 内置 Tavily 无法配 API key | 4 | 增强 |
| 2 | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用 404（流式会话） | 4 | Bug |
| 3 | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console 聊天静默空完成 | 3 | Bug |
| 4 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | V2.2.2.beta4 无法访问会话页 | 3 | Bug（已关） |
| 5 | [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | skill-pool 下载需可取消后台任务 | 2 | 增强 |

**诉求洞察**：
- **付费能力 + 自托管** 是 #8174 的核心——用户已购买 Tavily 付费能力，但当前 provider 强制走 keyless 匿名 REST（header `X-Tavily-Access-Mode: keyless`），既无法消费自有 quota，又无法在 429/401 时优雅降级。#8204 提供了完整解决路径。
- **流式稳定性** 在 #7016、#8172、#8105（已修复）中反复暴露：tool call 404、聊天静默空完成、审批失效均与「session/run 生命周期」有关，提示该模块需要系统性的稳定性加固。

---

## 5. Bug 与稳定性（按严重度排列）

### 🔴 高严重度
| Issue | 现象 | 影响面 | 修复 PR |
|---|---|---|---|
| [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | Console 聊天间歇性静默空完成（回合约 1s 结束、output 空、模型从未被调用），前端无任何回复 | 生产 2.2.0（Docker，NAS） | ❌ 暂无 |
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 流式会话中页面反复调用 `offload` 接口返回 404 `Tool call not found` | 2.1.0 | ❌ 暂无 |
| [#8179](https://github.com/agentscope-ai/QwenPaw/issues/8179) | 从 GitHub 安装 skill 静默破坏图片/字体二进制（非 UTF-8 字节被替换为 U+FFFD） | 2.2.1（Docker） | ✅ [#8198](https://github.com/agentscope-ai/QwenPaw/pull/8198) |
| [#8185](https://github.com/agentscope-ai/QwenPaw/issues/8185) | desktop.log 在 Windows 下永不轮转（sidecar tee 句柄击败 _SafeRotatingFileHandler） | 2.2.2b4 Desktop Windows | ❌ 暂无 |
| [#8206](https://github.com/agentscope-ai/QwenPaw/issues/8206) | Windows 下项目删除必失败（creator.log 占用导致 WinError 5） | 2.2.1 + creator 2.0.1 | ❌ 暂无 |

### 🟡 中严重度
| Issue | 现象 | 修复 PR |
|---|---|---|
| [#8177](https://github.com/agentscope-ai/QwenPaw/issues/8177) | Console basename 硬编码 `/console`，反代子路径无法部署 | ✅ [#8197](https://github.com/agentscope-ai/QwenPaw/pull/8197) |
| [#8194](https://github.com/agentscope-ai/QwenPaw/issues/8194) | creator 启动 hook 因 `os.kill(pid,0)` 抛 SystemError 而中止（runtime-owner.json 持有过期 PID） | ✅ [#8196](https://github.com/agentscope-ai/QwenPaw/pull/8196) |
| [#8186](https://github.com/agentscope-ai/QwenPaw/issues/8186) | 消息导航跳转覆盖手动滚轮（transcript 约 1.6s 持续回弹到锚点） | ❌ 暂无 |
| [#8202](https://github.com/agentscope-ai/QwenPaw/issues/8202) | 跨设备消息在 run 完成前不可见（持久化延迟到 run end） | ✅ [#8203](https://github.com/agentscope-ai/QwenPaw/pull/8203) |

### 🟢 已修复
- [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) V2.2.2.beta4 无法访问会话页（仅 LAN 设备，本机正常）—— 已关闭
- [#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105) 工具审批同意/拒绝均执行拒绝 —— ✅ [#8188](https://github.com/agentscope-ai/QwenPaw/pull/8188)

**稳定性信号**：核心 stream/session 生命周期相关 Bug 出现 3 起（#8172、#7016、#8202），建议 2.2.2 GA 前做专项回归。

---

## 6. 功能请求与路线图信号

| Issue | 功能 | 状态 / 可能路径 |
|---|---|---|
| [#8174](https://github.com/agentscope-ai/QwenPaw/issues/8174) | Tavily provider 支持自有 API key | ✅ [#8204](https://github.com/agentscope-ai/QwenPaw/pull/8204) 已开 PR，首次贡献者 |
| [#8199](https://github.com/agentscope-ai/QwenPaw/issues/8199) | 接入 Firecrawl 作为 web_search provider | 社区提交（Firecrawl 团队 Juampi 主动承担开发与维护） |
| [#8126](https://github.com/agentscope-ai/QwenPaw/issues/8126) | skill-pool 下载可取消、进度可见 | 跟进 #8055，建议下一个 minor |
| [#8135](https://github.com/agentscope-ai/QwenPaw/issues/8135) | Console 推出官方"降低特效"档位以缓解 iGPU 占用 | 建议作为 Console 选项而非默认行为 |
| [#8189](https://github.com/agentscope-ai/QwenPaw/issues/8189) | 类似 Meta Muse 的 ESP32 硬件接入方案 | 探索性提议，硬件 SDK 尚未立项 |
| [#8195](https://github.com/agentscope-ai/QwenPaw/issues/8195) | Model pool 缺少 delete action（仅 enable/disable） | 模型生命周期管理缺陷，建议跟进 |

**架构级 PR（值得跟踪）**：
- [#8187](https://github.com/agentscope-ai/QwenPaw/pull/8187) **XXXL** — channels 抽成插件 + 子进程隔离，影响安全模型与发布节奏
- [#8205](https://github.com/agentscope-ai/QwenPaw/pull/8205) **XL** — 引入 decision model 与 JEV provider，新增 `model_type` 字段（向后兼容）
- [#8207](https://github.com/agentscope-ai/QwenPaw/pull/8207) **XXXL** — memory 系统重构，对接 reme 集成
- [#8209](https://github.com/agentscope-ai/QwenPaw/pull/8209) **XXL** — chat 跨 agent 深链解析
- [#6384](https://github.com/agentscope-ai/QwenPaw/pull/6384) — AskUserQuestion 结构化交互工具（评审超过 2 个月，建议给出结论）

---

## 7. 用户反馈摘要

- **付费用户被堵在配置层**（#8174）：Tavily 付费用户既不能消费自有 quota，也无 authed→keyless 降级路径——属于"功能存在但用不起来"的产品完整性问题。
- **Docker/NAS 自托管用户**（#8172、#8177、#8179）：典型场景是家用 NAS 部署，2.2.0/2.2.1 多个核心交互（聊天静默、Console basename 写死、GitHub 安装 skill 损毁二进制）都让他们无法稳定使用。
- **Windows Desktop 用户**（#8185、#8206、#8194）：日志轮转、项目删除、creator 启动三类平台专属问题集中在 2.2.1–2.2.2b4。Creator 插件在 Windows 上的鲁棒性明显弱于类 Unix。
- **跨设备用户体验**（#8202）：用户从 web 端发，移动端在 run 完成前看不到自己的消息——属于"体感延迟"，对实时性敏感。
- **硬件扩展愿望**（#8189）：希望 ESP32 端能直接接入 QwenPaw，反映出 IoT/嵌入式场景存在未被覆盖的需求。
- **GPU 占用抱怨**（#8135）：Console 在 iGPU 机器上空载即持续占 GPU，用户希望官方提供"reduced effects"档位，而非要求用户改 CSS。

整体情绪：**核心用户对迭代速度满意**（多数 Issue 在 1–2 天内出现 fix PR），但对**流式稳定性**与**Windows 桌面质量**提出集中批评。

---

## 8. 待处理积压（提醒维护者）

| 编号 | 主题 | 创建 | 风险 |
|---|---|---|---|
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用 404（流式会话） | 2026-08-14 | ⚠️ 已 **60 天** 未解，影响 2.1.0 用户 |
| [#6384](https://github.com/agentscope

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-13

> 数据范围：2026-10-12 至 2026-10-13 · 数据来源：GitHub API

---

## 1. 今日速览

ZeroClaw 仓库在过去 24 小时内维持高活跃度，共 **36 条 Issues 更新**（含 32 条活跃/新建、4 条关闭）和 **50 条 PR 更新**（47 条待合并、3 条关闭/合并）。当日**无新版本发布**，但提交活动显著上升，主要集中在 **Provider/Billing 修复线**（成本核算、JPEG 内存）、**Security/Identity**（Gateway 配对令牌、Firejail 配置）、**Memory 系统**（持久化、冲突解决）以及 **RFC 推进**（A2A 协议、Knowledge Corpus）。整体处于多线并行攻坚阶段，优先级 P1 项已覆盖 **成本核算回归** 和 **Anthropic thinking 缓存失效** 两个高风险缺陷。健康度评估：**活跃、稳健，无严重阻塞**。

---

## 2. 版本发布

**本日无新版本发布。** 最近一次发布信息缺失（数据中无 Releases 列表）。从活跃 PR 中的 `release:v0.8.6`、`release:v0.9.0` 标签推断，下一批发布候选仍在合拢中，主要承载运行时/网关分离（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）和插件/Discord 安装链（[#10999](https://github.com/zeroclaw-labs/zeroclaw/issues/10999)）等里程碑。

---

## 3. 项目进展（已合并/关闭）

当日合并/关闭的 PR 共 **3 条**，但其中 `已合并` 比例较低，主要以 docs/release-gate 行项目的小型变更收尾：

- **PR #11699** — [`docs(runtime): record the approval of the roster-bound pairing token exception`](https://github.com/zeroclaw-labs/zeroclaw/pull/11699)（CLOSED，XS）
  - 记录 #11286 所对应的、已被 @Audacity88 批准的 holding-crate 例外条款，属于纯文档性收口。

- **PR #11701** — [`docs(runtime): propose bounded committed agent-rename recovery exception`](https://github.com/zeroclaw-labs/zeroclaw/pull/11701)（OPEN，XS）
  - 紧接其后，提出 #11301（即修复 #10373）的有界恢复例外。

- 此外 **PR #11286**（`feat(security): bind gateway pairing tokens to roster users`）等大规模特性仍在待合并队列中，表明当前主线推进以"先记录、再实现"的合规节奏为主。

**整体推进度**：昨日仅以小型文档类合并为收尾，但底层存在大量 XL 级 PR 处于 `needs-author-action` / `needs-maintainer-review` 状态，等待 review 解除后将集中进入主线，意味着真正的版本跃迁仍处于"临门一脚"阶段。

---

## 4. 社区热点

按评论数排序，以下议题代表当前社区与维护者团队最关注的决策点：

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues**（15 评论）
   - 维护者级决策跟踪器，覆盖 RFC、release-policy 等需要 code-owner 介入的事项。是整个项目的"治理中枢"。

2. **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) — Persistent memory tracker: curate/relevance/operability planes to parity**（11 评论）
   - 持久化记忆子系统路线图追踪，开放 7 个条目（4 Issue + 3 PR）。社区对"跨会话记忆"成熟度抱有持续期待。

3. **[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) — RFC: A2A protocol crate (`zeroclaw-a2a`)**（9 评论）
   - 提议一个独立的 A2A 协议 crate，统一有线模型、出站客户端与入站发现面，社区高度关注其与 #9106/#7763/#8274 既有契约的衔接。

4. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — Bug: SQLite session backend rewrites `created_at` of every message**（8 评论，P1）
   - 高优 Bug：每次 `replace_transcript` 都将全表 `created_at` 覆盖为同一时刻，丢失逐消息时间戳。直接影响调试、审计和前端展示。

5. **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) — Tracker: Runtime and gateway delivery - v0.8.6 and v0.9.0**（6 评论）
   - v0.8.6 + v0.9.0 阶段的交付地图、缺口、排序来源单一真相（来自 RFC #5574）。

6. **[#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) — RFC: Knowledge corpus — RAG for the agent**（6 评论）
   - RAG 子系统 RFC，明确指出操作员文档（语言、工具、OS、安全标准等）应纳入可检索语料，社区认为这是补齐 agent 能力边界的关键。

**背后诉求**：开发者与运营者普遍在呼吁 RFC 决策的可追溯性、长期记忆的"成熟度对标"、新协议边界（A2A、RAG）的稳定 crate 接口；同时担忧成本/会话审计数据丢失的可靠性风险。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃 Bug：

| 级别 | 编号 | 标题 | 是否有对应 Fix PR | 状态 |
|------|------|------|-------------------|------|
| **P1 / S2** | [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session backend rewrites `created_at` | 暂无公开 PR | OPEN |
| **P1 / S2** | [#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204) | OpenRouter spend shows $0.00 — `usage.cost` never ingested | 暂无公开 PR（关注 PR #11670 间接领域） | OPEN |
| **P1 / S2** | [#10777](https://github.com/zeroclaw-labs/zeroclaw/issues/10777) | Anthropic `thinking/effort` flips between turns, rewrites cached history | 暂无公开 PR | OPEN（待复现） |
| **P1 / S1 流程阻塞** | [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `model_routing_config upsert_agent` 改写全配置，伪造 profile | 暂无公开 PR | IN-PROGRESS |
| **P1 / S1 流程阻塞** | [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Web dashboard 配对码输入仍限 6 位（默认已为 32 位） | 暂无公开 PR | OPEN |
| **P2 / S2** | [#11613](https://github.com/zeroclaw-labs/zeroclaw/issues/11613) | Cost ledger 丢弃 provider 的 `total_tokens`，Gemini 类模型欠计 | ✅ **[PR #11670](https://github.com/zeroclaw-labs/zeroclaw/pull/11670)** 在审 | OPEN |
| **P2 / S2** | [#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) | Core conflict supersede 在无向量得分时隐藏无关记忆 | 暂无公开 PR | OPEN |
| **P2 / S2** | [#10950](https://github.com/zeroclaw-labs/zeroclaw/issues/10950) | `cost.warn_at_percent` 阈值被运行时忽略 | 暂无公开 PR | OPEN |
| **P2 / S2** | [#11623](https://github.com/zeroclaw-labs/zeroclaw/issues/11623) | ZeroCode 静默丢弃 `ask_user` 提示，600s 超时无记录 | 暂无公开 PR | OPEN |
| **P2 / S2** | [#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) | 每轮都从磁盘重建 system prompt，破坏 prompt cache | 暂无公开 PR | OPEN |
| **P2 / S1 CI 阻塞** | [#11179](https://github.com/zeroclaw-labs/zeroclaw/issues/11179) | `sop::engine::pending_park_retry_respects_pending_pool_cap` 跨秒 flaky | 暂无公开 PR | OPEN |
| **S3** | [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) | ACP session store 替换时重写 `created_at` | 暂无公开 PR | OPEN |
| **S3** | [#11694](https://github.com/zeroclaw-labs/zeroclaw/issues/11694) | ZeroCode Cost tab 混用 UTC/本地日 | 暂无公开 PR | OPEN |
| **S3** | [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) | `tool_search` 激活 deferred tool 改变 system prompt | 暂无公开 PR | OPEN |
| **S3** | [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) | JPEG admission 在解码内存上限检查前就复制并解析头 | ✅ **[PR #11672](https://github.com/zeroclaw-labs/zeroclaw/pull/11672)**、**[PR #11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637)** 在审 | OPEN |

**稳定性画像**：成本核算、JPEG 内存、SSE/ACP session 时间戳三处构成最显著的回归面；其中 **#11613 和 #11654 已有针对性 PR 待合并**，显示 fix 链路完整。其余 P1 多为"需要 owner 决策"或"等待复现条件梳理"的搁置状态。

---

## 6. 功能请求与路线图信号

| 请求 | 跟踪 Issue | 配套 PR/信号 | 进入下版本的概率 |
|------|------------|---------------|------------------|
| **A2A 协议 crate** | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 既有 #9106/#7763/#8274/#3566 作前置 | 高 — RFC 已进入 accepted 评审 |
| **RAG / Knowledge Corpus** | [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | 无直接 PR，需建立新子系统 | 中 — 取决于 RFC 批准后的人力承诺 |
| **Gateway pairing tokens ↔ roster users** | [#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) | **[PR #11286](https://github.com/zeroclaw-labs/zeroclaw/pull/11286)** XL 已开 | 高 — 前置 PR 已合，门已打开 |
| **`search_routes` hint routing for `web_search_tool`** | [#11074](https://github.com/zeroclaw-labs/zeroclaw/issues/11074) | 无直接 PR | 中 — 模型侧已有 `[[model_routes]]` 范式 |
| **Cost limit override** | — | **[PR #11589](https://github.com/zeroclaw-labs/zeroclaw/pull/11589)** `feat(runtime): let the operator override an exceeded cost limit` | 高 — 已实现，仅待 review |
| **Deferred builtin tools** | — | **[PR #11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473)** XL | 高 — 但涉及 prompt-cache 失效问题（[#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703)） |
| **Shell subprocess memory watchdog** | — | **[PR #11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)** XL | 高 — 配合 #11472 体感安全增强 |
| **Display message times in ZeroCode transcript** | — | **[PR #11622](https://github.com/zeroclaw-labs/zeroclaw/pull/11622)** XL | 中 — 强依赖 #11420/#11675 的时间戳修复 |
| **Tsubasa custom-provider 设置文档** | [#11207](https://github.com/zeroclaw-labs/zeroclaw/issues/11207) | 仅文档 | 高 |

**路线图信号**：`runtime/daemon` + `providers` + `zerocode` 仍是 2026-Q4 的主线；文档/发布治理（[#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330)）正在并行收紧。

---

## 7. 用户反馈摘要

从活跃 Issue/PR 评论中提炼的真实诉求：

- **成本可见性失效**：用户在累计 ~210 万 token 后发现 Dashboard 完全显示 $0.00（[#11204](https://github.com/zeroclaw-labs/zeroclaw/issues/11204)），所有 token 被错误归类为 `free tok`。诉求：**让成本归集链路可观测、可审计**。
- **会话可调试性受损**：[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) 与 [#11675](https://github.com/zeroclaw-labs/zeroclaw/issues/11675) 共同揭示，逐消息时间戳丢失会破坏"复盘、自动排队、被拒队列"的先后关系。诉求：**保留逐条消息原始时间**。
- **审计/合规要求**：[#10573](https://github.com/zeroclaw-labs/zeroclaw/issues/10573) 的 `pairing tokens ↔ roster users` 强烈体现"远程主体应有作用域"的安全诉求，是 v1 决策已 accepted，但实现仍未合。
- **零控制台可用性回归**：Web 配对码输入框仍限 6 位（[#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648)），CLI/后端已支持 32 位字母数字，UI 明显落后。
- **性能 / 成本体验**：[#11696](https://github.com/zeroclaw-labs/zeroclaw/issues/11696) 与 [#11703](https://github.com/zeroclaw-labs/zeroclaw/issues/11703) 直指 prompt-cache 失效造成的隐性 Token 成本——用户希望"小改动不要让所有活跃会话立刻变贵"。
- **多源争议调和**：[#11655](https://github.com/zeroclaw-labs/zeroclaw/issues/11655) 揭示了"无向量评分默认值"下 Core 记忆被误隐藏的问题，运营者期待语义空间"零向量"也能稳定工作。
- **互操作愿景**：[#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) 的评论区显示，已有大量用户与第三方代理平台对接 A2A，希望 ZeroClaw 提供稳定 crate 而非动态拼接。
- **RAG 价值发现**：在 [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) 中，运营者表达出"我希望 agent 能回答我机器上的手册"——这是 ZeroClaw 走向"运维上下文感知"的关键转折点。

**整体满意度**：低层功能（provider/路由/会话）已被广泛使用，但 **观测性与文档迁移** 仍是短板；安全/合规线被高度认可为"严肃项目"的标志（[#8076](https://github.com/zeroclaw-labs/zeroclaw/issues/8076) password provider 已在评审）。

---

## 8. 待处理积压

以下 Issue/PR 长时间处于"等待 owner 或 author 行动"的开放状态，建议维护者提前审视：

### 长期未响应 Issue
- **[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)**（创建于 2026-06-09）— v0.8.6/v0.9.0 交付总图，4 个月维持中，已被作为 RFC #5574 的"the single source of truth"。
- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（2026-07-04）— 决策队列跟踪器，15 评论但 0 👍，反映"决策透明度"长期痛点。
- **[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891)**（2026-07-09）— 持久化记忆路线图，含 7 个 pending 子项，4 个月来推进缓慢。
- **[#10330](https://github.com/zeroclaw-labs/zeroclaw/issues/10330)**（2026-08-25）— 已接受 RFC 的实施位置索引，长期停留在"指针"层面。
- **[#10331](https://github.com/zeroclaw-labs/zeroclaw/issues/10331)**（2026-08-25，CLOSED）— worker 死亡时回收终端结算意图，已于今日关闭但仅 1 条评论。

### 待合并/待 review 的高风险 PR（按规模）
- **[#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)** — `fix(delegate): keep a bounded delegate's workspace, tool ceiling and command policy bound beyond the turn`（XL，risk:high，`needs-author-action`，2026-08-26 开）— 涉及委托执行安全边界，已 2.5 个月。
- **[#

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*