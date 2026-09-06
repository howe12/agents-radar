# OpenClaw 生态日报 2026-09-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-06 02:23 UTC

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
**日期：2026-09-06**

---

## 一、今日速览

OpenClaw 仓库 24 小时内活跃度处于高位：500 条 Issue 更新（437 新开/活跃 + 63 关闭）、500 条 PR 更新（286 待合并 + 214 合并/关闭），并发布新版本 **v2026.9.2**。PR 处理节奏良好，合并/关闭率达到 42.8%，但 Issue 关闭率仅 12.6%（63/500），大量新问题涌入导致积压加重。主题集中在 Gateway 事件循环阻塞、Channel（Telegram/Discord/Feishu/Google Chat）消息投递与 Session 状态污染等方向，"🦞 diamond lobster" 最高严重等级问题持续高频出现，需重点关注。

---

## 二、版本发布

### v2026.9.2 已发布

版本说明围绕"**更快、更敏感的聊天体验**"展开，重点优化：

- **直接 Dashboard 查询**：减少冷启动加载工作
- **持久化历史读取移出 Gateway 事件循环**：避免长会话/磁盘使用处理时阻塞交互
- 相关 PR：#136862、#138xxx 等

**说明**：因 Release 摘要字段被截断，完整变更列表与破坏性变更需到仓库 Release 页面核实，建议升级前查看完整 Changelog 与升级指引。

---

## 三、项目进展

过去 24 小时有 214 个 PR 被合并/关闭。以下为具有代表性的已落地工作：

| PR | 主题 | 影响面 |
|----|------|--------|
| [#139490](https://github.com/openclaw/openclaw/pull/139490) | fix(ui): keep Swarm outcomes visible after completion | Control UI 在 Swarm 全部子任务完成后仍保留展示 |
| [#139592](https://github.com/openclaw/openclaw/pull/139592) | feat: expose garbage collection duration metrics | 运维可观测性增强（OTel + Prometheus） |
| [#139539](https://github.com/openclaw/openclaw/pull/139539) | fix(ui): keep Logbook timestamps clear of the activity stripe | TUI/UI 体验细节修正 |

**整体进展评估**：项目在"事件循环解耦"和"运维可观测性"两条主线推进明显，v2026.9.2 的 Gateway 线程卸载优化已落地。UI 侧的细节打磨与功能可见性也在快速迭代。但大量"channel: <X>"相关的修复（Feishu/Discord/Telegram/Google Chat 等）仍持续涌入，说明 Channel 适配层是当前的脆弱面。

---

## 四、社区热点

按评论数排序的活跃讨论：

| Issue | 标题 | 评论 | 👍 |
|-------|------|------|----|
| [#69208](https://github.com/openclaw/openclaw/issues/69208) | Umbrella: duplicate transcript, replay, and context assembly across channels | 14 | 0 |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | overflow retry can end successfully on a tool result without final delivery | 13 | 0 |
| [#53763](https://github.com/openclaw/openclaw/issues/53763) | Feature: Built-in headless browser | 12 | 0 |
| [#39476](https://github.com/openclaw/openclaw/issues/39476) | A2A sessions_send duplicate messages | 12 | 0 |
| [#96975](https://github.com/openclaw/openclaw/issues/96975) | Isolate subagent completion from parent context | 12 | 1 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw leaks unreaped child processes (zombies) | 11 | 1 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | Runtime context carrier AFTER user message causes model confusion | 10 | 1 |
| [#14785](https://github.com/openclaw/openclaw/issues/14785) | Reduce tool schema token overhead (~3,500 tok/session) | 10 | 0 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | Synchronous agent persistence blocks Gateway event loop at scale | 10 | 0 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory blocks replies + QMD boot overload | 10 | 2 |

**诉求分析**：
- **会话状态/消息丢失** 是头号痛点（#69208、#132762、#96975、#112259、#119720 等），反映出多渠道/多 agent 场景下"消息能不能到达 + 能不能不重复"是用户最关心的可靠性问题。
- **Gateway 事件循环阻塞** 是结构性问题（#119720、#99910、#53008、#72015、#54488），多项 P1 都在指向同一根因——持久化、内存压缩、followup drain 等同步操作挤压主线程。
- **Token 成本与上下文工程** 引发持续讨论（#14785、#110190），用户希望减少 session 起手的固定税。
- **内建 headless 浏览器**（#53763）呼声高，反映出 agent 在 Web 场景下的真实落地需求。

---

## 五、Bug 与稳定性

按严重程度整理今日高频报告的 Bug：

### 🔴 P1 / 🦞 diamond lobster（最高严重级）

- [#132762](https://github.com/openclaw/openclaw/issues/132762) — overflow retry 可在没有最终投递的情况下以 `success` 结束（消息丢失）
- [#39476](https://github.com/openclaw/openclaw/issues/39476) — A2A `sessions_send` 双向调用导致重复消息
- [#119720](https://github.com/openclaw/openclaw/openclaw/issues/119720) — 同步 agent 持久化阻塞 Gateway 事件循环（大规模场景）
- [#54488](https://github.com/openclaw/openclaw/issues/54488) — followup drain 独占 session lane，inbound 派发停滞 20–30 分钟
- [#101929](https://github.com/openclaw/openclaw/issues/101929) — context-overflow-midturn-precheck 估算偏高 2.3–2.6×，误触发截断
- [#78055](https://github.com/openclaw/openclaw/issues/78055) — Subagent 完成通告投递陈旧输出，可能污染请求方会话
- [#127148](https://github.com/openclaw/openclaw/issues/127148) — Codex `sessions.compact` 获取第二个 app-server，命中 active-writer 冲突
- [#90098](https://github.com/openclaw/openclaw/issues/90098) — 大附件栈溢出（**已有关联 PR**）
- [#99910](https://github.com/openclaw/openclaw/issues/99910) — Memory dreaming run 卡死 Gateway 约 10 分钟
- [#112259](https://github.com/openclaw/openclaw/issues/112259) — 入站 turn 可被静默丢弃（无重试/无 dead-letter）
- [#53008](https://github.com/openclaw/openclaw/issues/53008) — 内存压缩阻塞主 lane，Bot 失联 10+ 分钟
- [#102534](https://github.com/openclaw/openclaw/issues/102534) — Cron 调度器在重超时后永久停摆（v2026.6.5）
- [#85027](https://github.com/openclaw/openclaw/issues/85027) — macOS LaunchAgent 从 2026.5.6 → 2026.5.19 升级后无法恢复
- [#89430](https://github.com/openclaw/openclaw/issues/89430) — Google Chat 应用鉴权下图片/文件无法投递（403）
- [#91931](https://github.com/openclaw/openclaw/issues/91931) — 预置 SOUL/IDENTITY/USER.md 触发自动 bootstrap 完成并删除用户 BOOTSTRAP.md

### 🟠 P1 /  gold shrimp / 🦪 silver shellfish

- [#97616](https://github.com/openclaw/openclaw/issues/97616) — hook/tool 子进程泄漏（僵尸累积）（已有打开的修复路径讨论）
- [#136183](https://github.com/openclaw/openclaw/issues/136183) — 命令执行器 spawn ssh 卡死（2026.8.1/8.2 回归）
- [#132765](https://github.com/openclaw/openclaw/issues/132765) — `agents_wait` 忽略 timeoutSeconds，~60s 报 tool error
- [#119992](https://github.com/openclaw/openclaw/issues/119992) — message 工具单 turn 重复回答风暴（**已有关联 PR** 讨论）
- [#114967](https://github.com/openclaw/openclaw/issues/114967) — agent 自驱 live update 留下 `launchctl submit` keepalive 强制每 2 分钟重启
- [#112160](https://github.com/openclaw/openclaw/issues/112160) — SSH 沙箱不把入站媒体同步到远程 workspace
- [#91941](https://github.com/openclaw/openclaw/issues/91941) — Feishu 流式卡片全量更新导致长回复延迟剧增（**已有关联 PR**）
- [#84110](https://github.com/openclaw/openclaw/issues/84110) — Codex app-server 重写 prompt，OpenAI prompt cache 命中率 93% → 47%

### 🟡 Channel 相关（与适配层稳定性相关）

- [#41165](https://github.com/openclaw/openclaw/issues/41165) — Telegram DM 仍可能路由到 `agent:main:main`
- [#493

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**数据日期：2026-09-06 · 覆盖项目：12 个 · 核心参照：OpenClaw**

---

## 一、生态全景

2026-09-06 当日开源 AI 智能体生态呈现明显的**两极分化与共同收敛**并存的态势：一端是 OpenClaw、NanoBot、Hermes Agent、CoPaw 维持高强度迭代（24h Issues+PR 总量 50–1000 不等），另一端是 NullClaw、TinyClaw、Moltis、ZeroClaw 完全静默。**消息可靠性、事件循环解耦、Channel 适配层韧性**已成为跨项目的最大公约数痛点；同时 **token 成本治理、MCP 生态深化、Provider failover** 等议题从单点修补走向架构级方案。整体生态正从"功能堆叠"进入"基础设施规范化"的拐点，安全债清理与平台兼容性修复成为下一阶段的共同主线。

---

## 二、各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 健康度 | 阶段定位 |
|---|---|---|---|---|---|
| **OpenClaw**（核心参照） | 500（437 活跃/63 关闭） | 500（286 待合并/214 合并或关闭） | **v2026.9.2** 已发布 | ⭐⭐⭐⭐⭐ | 超大规模快速迭代 |
| **NanoBot** | 1（活跃）+24 PR | 17 待合并 / 7 已合并 | 无 | ⭐⭐⭐⭐⭐ | 架构规范化 + 高质量修复 |
| **Hermes Agent** | 50（活跃） | 47 待合并 / 3 已关闭 | 无（v0.20.6 后） | ⭐⭐⭐⭐ | 功能演进 + 平台兼容性密集修复 |
| **CoPaw** | 10（7 活跃/3 关闭） | 3（均待合并） | 无 | ⭐⭐⭐⭐ | v2.2.0 上线前高风险窗口 |
| **ZeptoClaw** | 12（均为维护者自审） | 2（均为 P0 fix，待合并） | 无 | ⭐⭐⭐⭐ | 主动清债 + 安全加固 |
| **PicoClaw** | 2（1 活跃/1 stale 关闭） | 3（已批量清理关闭） | 无 | ⭐⭐ | 低活跃稳态维护 |
| **IronClaw** | 1 | 2（均待合并） | 无 | ⭐⭐⭐ | 蓄力阶段，路线推进中 |
| **NanoClaw** | 0 | 3（均待合并） | 无 | ⭐⭐⭐ | 维护模式，社区静默 |
| **LobsterAI** | 0 | 2（stale，>5 月未合并） | 无 | ⭐ | 积压严重，健康度偏弱 |
| NullClaw | 0 | 0 | — | ⭐ | 完全静默 |
| TinyClaw | 0 | 0 | — | ⭐ | 完全静默 |
| Moltis | 0 | 0 | — | ⭐ | 完全静默 |
| ZeroClaw | 数据缺失 | — | — | — | 无法评估 |

---

## 三、OpenClaw 在生态中的定位

### 规模与活跃度
OpenClaw 以 **500 Issues + 500 PRs + 单日发版**的吞吐能力，处于生态绝对头部位置。其单日 PR 合并数（214）相当于 Hermes Agent 整月吞吐的量级，社区贡献密度是 NanoBot 的 20 倍以上。

### 技术路线差异
| 维度 | OpenClaw | NanoBot | Hermes Agent | CoPaw |
|---|---|---|---|---|
| 架构主线 | Gateway 事件循环解耦 + 多 Channel 适配 | MessageBus 统一抽象 + Event loop 卸载 | Desktop + Gateway 双形态 + Bot-Mode | 多租户 Hub + Skill 工作流 |
| 优先方向 | 运维可观测性 + Channel 适配层韧性 | session/persistence 适配层 | Bot 群聊 + 平台依赖钉版 | 团队化场景 + 双模型协作 |
| 当前最严重议题 | 🦞 Diamond lobster：消息丢失/重复/事件循环阻塞 | 路径遍历安全 + Failover 失效 | `hermes update` 平台分裂 | P0 级 context window 兜底 |

### 社区规模对比
OpenClaw 沉淀了最多"🦞 diamond lobster"级别议题（14+ 条），说明用户场景复杂度和发现深度的双重领先；但 **Issue 关闭率仅 12.6%**，提示 OpenClaw 已进入"问题流入速度 > 解决速度"的负债积累期，这是大生态的典型特征。NanoBot 在该指标上明显健康（所有 bug 都有对应 fix PR）。

---

## 四、共同关注的技术方向

以下方向**跨 3 个及以上项目**共同浮现，已具备行业共识特征：

| 共同方向 | 涉及项目 | 代表性诉求 |
|---|---|---|
| **Gateway / Event Loop 解耦** | OpenClaw、NanoBot、ZeptoClaw | OpenClaw v2026.9.2 持久化读取移出主循环；NanoBot #5580 session IO 卸载；ZeptoClaw #663 CoreLoop 迁移 |
| **Channel 适配层韧性** | OpenClaw、Hermes Agent、CoPaw | OpenClaw 大量 `channel: <X>` 修复；Hermes Agent 升级 `lark-oapi` 1.7.3；CoPaw 飞书流式卡片折叠 |
| **Provider Failover 失效** | NanoBot、Hermes Agent | NanoBot #5674 Nvidia NIM 超时静默；Hermes Agent #103978 借用 OAuth 致用户被登出 |
| **Token / Prompt Cache 优化** | OpenClaw、ZeptoClaw、Hermes Agent | OpenClaw #14785 工具 schema 3500 tok/session 固定税；ZeptoClaw #661 Byte-stable Prompt Envelope；Hermes Agent #84110 prompt cache 命中率 93%→47% |
| **MCP 生态深化** | NanoBot、Hermes Agent、CoPaw、LobsterAI | NanoBot #5573 OAuth 自动刷新、#5386 元数据；Hermes Agent #30563 native 覆盖静默；CoPaw #6874 可配超时；LobsterAI #1070 per-session 开关 |
| **记忆/上下文工程** | OpenClaw、CoPaw、ZeptoClaw | OpenClaw #72015 active-memory 阻塞；CoPaw #7571 记忆失效；ZeptoClaw #666 Memory v2 RFC |
| **跨平台 / 更新链路** | Hermes Agent、PicoClaw、CoPaw | Hermes Agent 8+ 条 `hermes update` 回归；PicoClaw #3287 IRC 长消息；CoPaw Linux signal-cli 挂起 |
| **安全姿态加固** | NanoBot、ZeptoClaw | NanoBot #5633 路径遍历；ZeptoClaw #659/#660 双 P0 24h 内闭环 |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全渠道个人 AI 网关 | 重度多渠道 / 多 agent 部署者 | Gateway + Channel 适配层 + Swarm 子任务 |
| **NanoBot** | 精简 agent runtime（HKUDS 学术背景） | 研究型用户、追求代码清洁度的开发者 | MessageBus 统一抽象 + Session 适配层 |
| **Hermes Agent** | Bot-Mode 群聊 + Desktop + Claude Code 集成 | 团队 / VPS / Bot 协作场景 | 双形态（Desktop + Gateway）+ 跨 gateway transport |
| **CoPaw** | 多租户 Hub + 国产模型适配 | 团队 / 企业、需要飞书等国内渠道 | Hub 多租户 + skill_pool 版本化 + Advisor Mode |
| **ZeptoClaw** | 安全优先 + Rust 性能 | 安全敏感型自托管用户 | 字节稳定 Prompt + 沙箱隔离 + Fail-closed 默认 |
| **IronClaw** | Embedded Pi sandbox + 基准测试 | 内部核心贡献者 | Sandbox 内嵌 agent runtime（hosted-native loop） |
| **PicoClaw** | 轻量 IRC 集成 | 极简 / 小众协议用户 | 单文件 minimal 风格 |
| **NanoClaw** | Skill + signal-cli 集成 | 注重 OpenCode/Anthropic 文档准确度的用户 | Skill 工作流 + 测试卫生 |
| **LobsterAI** | Cowork 多会话前端 + MCP 细粒度 | 桌面级 Agent 重度用户 | 有道出品，前端组件可维护性导向 |

---

## 六、社区热度与成熟度分层

### 🔥 第一梯队：快速迭代 + 大规模吞吐
- **OpenClaw**：日千级更新，单日发版，处于"问题流入 > 解决"的负债期
- **NanoBot**：每日 7+ PR 合并 + bug→fix 全闭环（24h 内），体现强执行力
- **Hermes Agent**：50 Issues/50 PRs 持续高强度，专注平台兼容 + Bot-Mode 落地

### ⚡ 第二梯队：定向攻坚 + 蓄力阶段
- **CoPaw**：v2.2.0 前高风险窗口，2 条 P0 待解，但 Hub 路线图引发 23 条评论深度讨论
- **ZeptoClaw**：维护者单方执行力极强（24h 内 P0 发现→立案→修复），但社区参与度待激活
- **IronClaw**：XL 规模 PR 评审中，路线明确但节奏受 base PR 依赖约束

### 🌙 第三梯队：质量巩固 + 卫生治理
- **PicoClaw**：批量清理历史 PR，仓库整洁度改善，零 Bug 报告
- **NanoClaw**：3 条小范围修复待合并，文档/平台兼容性导向

### 💤 第四梯队：静默 + 风险信号
- **LobsterAI**：2 条 PR 滞留 >5 个月并被自动 stale，社区信心流失风险
- **NullClaw / TinyClaw / Moltis**：24h 完全静默，需确认是否进入弃维护状态

---

## 七、值得关注的趋势信号

### 趋势 1：**从"功能堆叠"到"基础设施规范化"的拐点**
NanoBot 的 MessageBus 统一抽象（#5670）、ZeptoClaw 的 CoreLoop 迁移（#663）、OpenClaw 的事件循环解耦（v2026.9.2）三者同步发生，**说明事件循环 / 持久化 / 适配层的架构债已成行业共识**，下一阶段竞争点在于"谁先完成基础设施收敛"。

### 趋势 2：**Token 成本治理从"按需优化"升级为"系统级设计"**
OpenClaw #14785 工具 schema 3500 tok/session、ZeptoClaw #661 Byte-stable Prompt Envelope、Hermes Agent #84110 cache 命中率崩塌、CoPaw heartbeat model override——**字节级 prompt 稳定性正在成为新的工程指标**，对所有做 agent runtime 的开发者都是必答题。

### 趋势 3：**Failover / 多 Provider 弹性"名实不符"成为隐性重大风险**
NanoBot #5674 揭示的"Nvidia NIM 超时 → FallbackProvider 不生效 → agent 完全停摆"是高度隐蔽的故障模式；Hermes Agent #103978 的 OAuth 借用问题还触及厂商 ToS。**多 provider / 多凭据治理已成为生产可用性的硬指标**，单 provider 假设不再可接受。

### 趋势 4：**MCP 正在从"集成协议"走向"治理对象"**
OAuth 自动刷新、per-session 开关、可配超时、native 覆盖冲突警告——MCP 的功能补齐已接近尾声，**下一步焦点是治理与安全（路径遍历、token 刷新、scope 隔离）**。开发者应将 MCP 视为"需要单独安全审计的子系统"。

### 趋势 5：**安全债自审开始反客为主**
ZeptoClaw 12 条 Issue 全为维护者自审，NanoBot #5633 来自社区自查，OpenClaw 子进程僵尸累积——**安全姿态加固不再是被动响应 CVE，而是项目方主动发起的常态化机制**。维护者应将安全 review 纳入版本节奏。

### 趋势 6：**社区驱动 + 主线落实的耦合模式成熟**
Hermes Agent #97681（23 条评论）→ #98307 + #98073（两条大型落地 PR）是教科书级案例；ZeptoClaw 一人完成"评审→立案→修复"的全闭环。**关键功能越来越依赖"小核心团队 + 高质量外部贡献者"的紧密协作**，这对项目治理能力提出更高要求。

### 对 AI 智能体开发者的参考价值
1. **新建项目**：优先关注"事件循环 + 持久化 + Channel 适配"三大基础设施，避免在功能层重复造轮子。
2. **生产部署**：必须验证 failover 实际行为（而非依赖文档），并将 prompt cache 命中率纳入监控。
3. **贡献参与**：Hermes Agent、ZeptoClaw、NanoBot 对外部贡献者响应最及时，是高效参与的高 ROI 选择。
4. **风险规避**：避开 LobsterAI 类型的"长期积压 + stale"项目作为核心依赖。

---

*报告生成基于 2026-09-06 当日各项目公开 GitHub 数据，原始链接详见各项目分报告。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**报告日期：2026-09-06 | 数据来源：HKUDS/nanobot**

---

## 1. 今日速览

NanoBot 项目今日保持中高度活跃。24 小时内共产生 1 条新 Issue 和 24 条 PR 更新，其中 17 条仍待合并、7 条已关闭/合并，整体吞吐节奏稳定。重点关注 **Issue #5674**（Nvidia NIM 超时导致 agent 失效）已由同日的 **PR #5675** 提供了针对性修复方案，bug→fix 链路在 24 小时内完成闭环，反映出维护者响应及时。安全相关修复（**#5633** session key 路径遍历）、性能优化（**#5580** session 持久化离 event loop）和体验改进（**#5673** WebUI 远程路径）三条主线并行推进。无新版本发布，社区仍处于持续打磨阶段。

---

## 2. 版本发布

本周期内 **无新版本发布**。最近一次 Release 信息缺失，建议关注者留意后续 [Release 页面](https://github.com/HKUDS/nanobot/releases)。

---

## 3. 项目进展

今日有 7 条 PR 已合并/关闭，整体推进了项目在以下方面的进展：

| PR | 标题 | 影响 |
|---|---|---|
| [#5670](https://github.com/HKUDS/nanobot/pull/5670) | refactor(events): unify scoped runtime notifications across clients | **重大重构**：统一 MessageBus 作为本地事件订阅与通道投递的统一抽象，迁移 context compaction 端到端实现，保持现有 wire payload 与持久化会话格式兼容 |
| [#5671](https://github.com/HKUDS/nanobot/pull/5671) | fix(cli): skip WebUI bundle check in dev mode | 修复 `nanobot webui --dev` 在 Vite 直接服务源码时仍提示生产 bundle 过期的误报 |
| [#5672](https://github.com/HKUDS/nanobot/pull/5672) | test: remove obsolete nonexistence checks | 清理已退役/从未暴露符号的过时断言，保留行为、安全、协议缺失等有效覆盖 |
| [#5669](https://github.com/HKUDS/nanobot/pull/5669) | docs: explain derived context budget | 文档补充：解释由模型上下文窗口、输出预留和安全边际派生的输入预算（`contextBlockLimit` 弃用说明） |

**整体评估**：今日合并工作以**架构统一（#5670）+ 测试/文档治理（#5672、#5669）**为主，体现了项目从「功能堆叠」走向「基础设施规范化」的关键阶段。其中 #5670 的 MessageBus 统一化改造可能为后续多客户端、多通道通知功能奠定基础。

---

## 4. 社区热点

由于 Issue/PR 的显式评论数大多为 `undefined`（数据未抓取到），从更新频度与问题敏感度综合评估热点：

- 🔥 **#5674 + #5675（修复闭环）**
  - Issue: [HKUDS/nanobot#5674](https://github.com/HKUDS/nanobot/issues/5674)
  - PR: [HKUDS/nanobot#5675](https://github.com/HKUDS/nanobot/pull/5675)
  - **诉求**：当主模型（此处为 Nvidia NIM）在 300s/600s runner deadline 内超时，`FallbackProvider` 永远等不到响应，整个调用链被 runner 取消，配置好的健康回退模型根本未被尝试，导致 agent 完全停摆。
  - **关注价值**：failover 是多模型用户最关键的可靠性保障，此类「名义上有 fallback、实际不生效」的故障极具迷惑性，影响所有使用 Nvidia NIM 或类似长延迟 provider 的用户。

- 🔥 **#5633（安全修复，p1）**
  - [HKUDS/nanobot#5633](https://github.com/HKUDS/nanobot/pull/5633)
  - 修复 session key 被拼接为文件路径时的路径遍历漏洞（`../../etc/passwd` 场景），新增 `JsonlSessionStore.validate_session_key()` 统一校验。修复 [#5564](https://github.com/HKUDS/nanobot/issues/5564)，属 p1 安全回归。

- 🔥 **#5580（性能与稳定性，p1）**
  - [HKUDS/nanobot#5580](https://github.com/HKUDS/nanobot/pull/5580)
  - 通过 `nanobot.session.io` 适配层将 session 加载/保存/checkpoint 从 event loop 卸载到后台线程，避免慢盘/文件锁阻塞所有不相关会话。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue/PR | 状态 | 描述 | 是否有 fix PR |
|---|---|---|---|---|
| 🔴 P1 | [#5633](https://github.com/HKUDS/nanobot/pull/5633) | 待合并 | Session key 路径遍历安全漏洞 | ✅ 自身即为 fix |
| 🔴 P1 | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | 待合并 | 慢 session 持久化阻塞 event loop，影响所有会话 | ✅ 自身即为 fix |
|  P1 | [#5589](https://github.com/HKUDS/nanobot/pull/5589) | 待合并 | 被丢弃 session 的 Agent 任务取消后，残留消息仍能复活该会话 | ✅ 自身即为 fix |
|  P2 | [#5674](https://github.com/HKUDS/nanobot/issues/5674) | 待修复 | Nvidia NIM 300s/600s 超时后 agent 整体失效 | ✅ [#5675](https://github.com/HKUDS/nanobot/pull/5675) |
| 🟠 P2 | [#5673](https://github.com/HKUDS/nanobot/pull/5673) | 待合并 | WebUI 远程用户被强制唤起本机原生文件夹选择器 | ✅ 自身即为 fix |
| 🟠 P2 | [#5573](https://github.com/HKUDS/nanobot/pull/5573) | 待合并 | MCP OAuth token 过期后不会自动刷新 | ✅ 自身即为 fix |
| 🟠 P2 | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | 待合并 | **回归**：Dream 记忆文件移除 8000 字符上限后无界增长（#5622 副作用） | ✅ 自身即为 fix |
| 🟠 P2 | [#5664](https://github.com/HKUDS/nanobot/pull/5664) | 待合并 | `AutoCompact._summaries` 无界字典导致内存泄漏 | ✅ 自身即为 fix |
| 🟠 P2 | [#5504](https://github.com/HKUDS/nanobot/pull/5504) | 待合并 | UI 不展示模型重试状态，用户无法感知 failover 过程（NAN-34） | ✅ 自身即为 fix |
| 🟠 P2 | [#5457](https://github.com/HKUDS/nanobot/pull/5457) | 待合并 | 出站消息处理异常会让 `ChannelManager._dispatch_outbound` 后台任务永久停止 | ✅ 自身即为 fix |
| 🟢 P2 | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | 待合并 | `Nanobot.run(ephemeral=True)` 实际仍会持久化 turn 与压缩历史 | ✅ 自身即为 fix |

**统计**：今日涉及 bug 修复的 PR 共 11 条，其中 3 条 P1、8 条 P2；**所有已报告 bug 均已存在对应修复 PR**，社区健康度高。

---

## 6. 功能请求与路线图信号

今日 PR 列表中包含多条面向中长期能力扩展的功能性提案，提示潜在路线图方向：

| PR | 功能方向 | 信号 |
|---|---|---|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | `gateway.heartbeat.modelOverride` 配置：心跳使用更便宜模型 | 成本控制意识增强 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | `gateway.heartbeat.isolatedSession` 配置：允许心跳复用目标会话上下文 | 上下文感知自动化 |
| [#5652](https://github.com/HKUDS/nanobot/pull/5652) | 网关签名直投递 Webhook：可信系统（CI/监控/计费）绕过 agent loop 确定性通知 | **B2B/自动化集成场景** |
| [#5561](https://github.com/HKUDS/nanobot/pull/5561) | per-spawn model presets + `spawnPresets` allowlist | 多 agent 场景下精细化模型分配 |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | 保留 MCP Apps 结果元数据，丰富 tool call result 字段 | MCP 生态深化 |

**判断**：heartbeat 系列（#4549、#4551）出自同一作者 `dajiaohuang`，均带 `conflict` 标签且与 #5561 等存在实现竞争，可能在下一版本中作为「heartbeat 成本与上下文优化」合并簇出现。#5652 的签名 Webhook 是面向企业集成的新能力入口，建议维护者评估其与现有 outbound 通道架构的契合度。

---

## 7. 用户反馈摘要

由于本周期内所有 Issue/PR 的评论数与点赞数均为 0/未抓取，从文本内容侧仍可提炼以下真实用户痛点：

- **Failover 形同虚设（#5674 报告人 APPLEPIE6969）**：用户在生产中依赖多 provider failover，但实际遇到「Nvidia NIM 300s 超时 → agent 完全静默」。说明文档承诺的 resilience 与运行时行为存在 gap，**用户最关心的不是单一 provider 错误，而是「出错后能不能继续干活」**。

- **回归型痛点（#5630）**：用户指出 #5622 修复 system prompt 重复时，副作用移除了 Dream 文件的 8000 字符上限（`_DREAM_FILE_EMBED_CAP`），导致 `SOUL.md / USER.md / memory/MEMORY.md` 无界膨胀并注入每次请求。**反映用户对「隐式常量被默默删除」的回归高度敏感**，建议维护者在 PR 中显式标注 size cap 类常量。

- **开发者体验（#5673、#5671）**：远程 WebUI 用户被迫唤起本机文件夹选择器；`webui --dev` 模式被生产 bundle 检查骚扰。**远程/容器化部署场景的用户已逐步成为主要用户画像**。

- **测试覆盖（#5672、#5471）**：移除过时断言与 ephemeral run 实际持久化的差异，表明 **SDK 契约与实现存在长期 drift**，文档与实际行为不一致是开发者社区的核心不满来源。

- **安全可见性（#5633）**：session key 路径遍历虽未爆发出实际 CVE 报告，但来自社区自查，**说明项目安全审计在用户侧自发进行**，值得维护者将该领域纳入版本节奏。

---

## 8. 待处理积压

长期未响应或更新停滞的重要条目，建议维护者重点 review：

| 编号 | 类型 | 标题 | 首次创建 | 状态 |
|---|---|---|---|---|
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | PR | feat(heartbeat): add model_override config for cheaper heartbeat model | 2026-06-26 | OPEN 已 72 天 |
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | PR | feat(heartbeat): add isolated_session config to allow shared session | 2026-06-26 | OPEN 已 72 天 |
| [#4231](https://github.com/HKUDS/nanobot/issues/4231) | Issue | (推测为 spawn presets 原始需求，已被 #5561 引用) | 较早 | OPEN |

**提醒**：
- `dajiaohuang` 的两条 heartbeat PR 搁置已超过两个月，且互相存在功能耦合，建议发起设计讨论合并方向，或明确划分长期保留与即将合入的边界。
- 多条带 `conflict` 标签的 PR（#5561、#5457、#5630、#5664、#5386、#5471、#5589、#5652）已出现 1–3 周龄，建议维护者在下周内组织一次批量 review，避免 PR 长期悬置打击贡献者积极性。
- 由于 PR 评论数据未抓取到，无法判断是否已有活跃讨论。如维护者侧存在异步评审中，可忽略上述提醒。

---

**报告生成说明**：本报告基于公开 GitHub 数据快照生成，所有链接指向 HKUDS/nanobot 仓库对应条目。评论数与点赞数在原始数据中缺失，相关「热度」判断综合了 PR 关联性、问题严重度（p1/p2）与修复闭环及时度。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-06**

---

## 1. 今日速览

Hermes Agent 今日继续保持高强度迭代节奏，过去 24 小时共触发 50 条 Issue 更新和 50 条 PR 更新（其中 47 条待合并、3 条已关闭），但**无新版本发布**。社区活跃度维持在高位，讨论焦点集中在三条主线：(1) Bot 群聊持续性（feature #97681 + 大型 PR #98307/#98073 联动推进）；(2) Claude Code OAuth 凭据借用引发的"被登出"问题（Issue #103978 + PR #103988 闭环修复）；(3) 长期困扰用户的 `hermes update` 安装链路在 Windows / Linux 上的多项回归（root-owned 文件、ZIP 回退、桌面交付失败等）。整体处于"功能演进 + 平台兼容性密集修复"的并行阶段。

---

## 2. 版本发布

**今日无新版本发布。** 主分支 `9dd6634c5635321cf38840cc30e9b51226689128` 与近期 v0.20.6 (2026.8.27) 之间的变更目前仍处于 PR 评审阶段，尚未触发 release tag。

---

## 3. 项目进展

今日仅有 3 条 PR 进入关闭状态，进展较为温和：

| PR | 状态 | 内容 |
|---|---|---|
| [#103984](https://github.com/NousResearch/hermes-agent/pull/103984) | CLOSED（未合并） | 将 busy input 默认模式从 `interrupt` 改为 `queue`——尽管做了较完整的文档、测试与配置对齐，最终仍被关闭，可能需进一步决策或拆分 |
| [#30563 (Issue)](https://github.com/NousResearch/hermes-agent/issues/30563) | CLOSED | MCP server 与 native toolset 同名时 native 静默覆盖且无警告——该问题已关闭，预期随 [sweeper:risk-message-delivery] 标签随其他修复一并处理 |

**结构性推进亮点（仍 OPEN 但已就绪）：**
- **Bot 群聊功能进入"完工冲刺"**：[#98307](https://github.com/NousResearch/hermes-agent/pull/98307) 作为 #97681 的完整群聊构建 PR，覆盖 Bot 间消息/文件交换（Desktop 关闭后仍工作）、所有权转让、可见性控制；[#98073](https://github.com/NousResearch/hermes-agent/pull/98073) 配套提供 `/group` 命令家族以便从外部消息应用管控群聊。两 PR 联动后即可关闭 #97681。
- **缓存一致性修复**：[#103581](https://github.com/NousResearch/hermes-agent/pull/103581) (P0) 修复 `background_review` fork 时未继承父 agent 完整工具集导致的 cache parity 问题（解决 #103579）。
- **OAuth 凭据借用闭环**：[#103988](https://github.com/NousResearch/hermes-agent/pull/103988) 让 Hermes 不再轮换 Claude Code 的 single-use refresh token，避免"借用即登出"的体验破坏（解决 #103978）。
- **平台依赖钉版**：[#103980](https://github.com/NousResearch/hermes-agent/pull/103980) 将 Feishu 平台的 `lark-oapi` 从 1.6.8（不会收到 ws 事件推送）升至 1.7.3。

---

## 4. 社区热点

**Issue #66616（163 条评论，无 thumbs up）**
[链接](https://github.com/NousResearch/hermes-agent/issues/66616)
虽然评论数遥遥领先，但这本质上是一条 **sweeper 自动化巡检报告**（Skills index 超 29.8h 超过 26h 阈值），由 `nousbot-eng` 在 7 月创建并由系统持续更新。讨论热度反映的是 Skills Hub 的重建流水线可靠性，而非真实的社区争论。

**Issue #97681（23 条评论）**
[链接](https://github.com/NousResearch/hermes-agent/issues/97681)
由社区贡献者 `dokterdok` 提出，诉求是 **Desktop 关闭后 Bot 群聊仍可持续工作**——覆盖笔记本、家庭实验室、VPS 多场景。底座（同 gateway runner、scoped cross-gateway transport）已合入 main，剩余生产工作由今天的 #98307 + #98073 承担。这是一次非常完整的"社区提案 → 主线落实"流程。

**Issue #26058（10 条评论，5 thumbs up 👍）**
[链接](https://github.com/NousResearch/hermes-agent/issues/26058)
**P1 优先级 + 5 个 👍**，反映 Discord 上 `free_response_channels` 强制关闭 `auto_thread` 破坏了合法用例。今日 PR [#103990](https://github.com/NousResearch/hermes-agent/pull/103990) 已给出 opt-in 方案（`DISCORD_AUTO_THREAD_FREE_CHANNELS` 默认 false），是社区诉求最快落地的一次。

**Issue #98022（10 条评论）**
[链接](https://github.com/NousResearch/hermes-agent/issues/98022)
`hermes update` 的 fleet catch-up 重启逻辑在 `update_receipts/latest.json` 为残留中断收据时陷入"无限重启"循环。这是 #95294 修复的二次 bug，体现 CLI 更新链路的状态机设计需要更严格的不变量。

---

## 5. Bug 与稳定性

按严重程度排序（P0 → P3）：

| 严重度 | Issue | 摘要 | 已有 fix PR？ |
|---|---|---|---|
| **P0** | [#103579（via #103581）](https://github.com/NousResearch/hermes-agent/issues/103579) | `background_review` fork 未继承父 agent 完整工具面，导致 cache parity 破坏 | ✅ [#103581](https://github.com/NousResearch/hermes-agent/pull/103581) |
| **P1** | [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | Discord `free_response_channels` 强制关闭 `auto_thread` | ✅ [#103990](https://github.com/NousResearch/hermes-agent/pull/103990) |
| **P1** | [#98022](https://github.com/NousResearch/hermes-agent/issues/98022) | `hermes update` 收据残留导致 fleet 无限重启 | ❌ 仍 OPEN |
| **P1** | [#103978](https://github.com/NousResearch/hermes-agent/issues/103978) | Hermes 借用 Claude Code OAuth 时将其登出，且违反 Anthropic Consumer ToS | ✅ [#103988](https://github.com/NousResearch/hermes-agent/pull/103988) |
| **P2** | [#90495](https://github.com/NousResearch/hermes-agent/issues/90495) | `hermes update` ZIP 回退删除 Desktop 应用与 `web_dist`，后续永不重建 | ❌ OPEN |
| **P2** | [#97394](https://github.com/NousResearch/hermes-agent/issues/97394) | Windows Desktop 交接看门狗因 `--gateway` 模式不写 `logs/update.log` 而误取消健康更新 | ❌ OPEN |
| **P2** | [#94375](https://github.com/NousResearch/hermes-agent/issues/94375) | `hermes doctor --fix` 在 7 个 npm 漏洞场景下失败，留存不安全依赖 | ❌ OPEN（duplicate） |
| **P2** | [#103900](https://github.com/NousResearch/hermes-agent/issues/103900) | Desktop 置顶的会话仅本地有效，与 native Hermes 不同步 | ❌ OPEN |
| **P2** | [#103949](https://github.com/NousResearch/hermes-agent/issues/103949) | Linux + NVIDIA 上 `select_backend()` 返回 `'cuda'` 但无 Linux CUDA prebuilt | ❌ OPEN |
| **P2** | [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) | Terminal env snapshot 泄漏 `HERMES_DELEGATED_CHILD_CONTEXT`，破坏父会话 `kanban` CLI | ❌ OPEN |
| **P2** | [#82912](https://github.com/NousResearch/hermes-agent/issues/82912) | Cron `enabled_toolsets: ["web","file"]` 静默丢失 `web` 整个工具集 | ❌ OPEN |
| **P2** | [#83904](https://github.com/NousResearch/hermes-agent/issues/83904) | Desktop 调度的 cron job 无法投递回当前桌面聊天 | ❌ OPEN |
| **P2** | [#88201](https://github.com/NousResearch/hermes-agent/issues/88201) | Bash 补全代码被错误写入 `.bashrc`，违反 [警告] 指引 | ❌ OPEN |
| **P3** | [#79664](https://github.com/NousResearch/hermes-agent/issues/79664) | `hermes update` 出现 "Vite config uses features unsupported by `configLoader: 'native'`" | ❌ OPEN（duplicate） |
| **P3** | [#103870](https://github.com/NousResearch/hermes-agent/issues/103870) | `mcp_tool.py:6189` 的 stdio watchdog 产生未 await 的协程警告 | ❌ OPEN（duplicate） |
| **P3** | [#103985](https://github.com/NousResearch/hermes-agent/issues/103985) | Desktop 在 worktree lane 上的"Hide from sidebar"是静默 no-op | ❌ OPEN |
| **P3** | [#103893](https://github.com/NousResearch/hermes-agent/issues/103893) | 群聊 hold 指令分类器把德语填词误判为 stop | ❌ OPEN |
| **P3** | [#94345](https://github.com/NousResearch/hermes-agent/issues/94345) | `hermes help` 80 列硬换行难看且不易被外部工具解析 | ❌ OPEN |
| **P3** | [#83670](https://github.com/NousResearch/hermes-agent/issues/83670) | Hermes release 与 git tag 不一致 | ❌ OPEN |

**稳定性观察：** 高严重度（P0–P1）问题 4 项，其中 3 项已对应 fix PR 处于待合并状态；P2 安装/更新链路 bug 集中爆发，特别是 Windows + Linux + root-owned 文件三条交叉路径，是近期高频回归点。

---

## 6. 功能请求与路线图信号

| 提议 | Issue | 已对应 PR | 评估 |
|---|---|---|---|
| Bot 群聊在 Desktop 关闭后仍工作 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | ✅ [#98307](https://github.com/NousResearch/hermes-agent/pull/98307)、[#98073](https://github.com/NousResearch/hermes-agent/pull/98073) | **极可能纳入下个版本**——主线功能已落地 |
| `delegate_task` 提供简化的结构化输出契约，避免模型手写 JSON Schema | [#103917](https://github.com/NousResearch/hermes-agent/issues/103917) | ❌ 无 | 中等概率——降低门槛对开发者友好 |
| Desktop 文件双击用 OS 默认应用打开 | [#86975 PR](https://github.com/NousResearch/hermes-agent/pull/86975) | ✅ 自带 PR | 配置化策略成熟，倾向采纳 |
| Desktop 消息中纯文本绝对路径自动转链接 | [#86976 PR](https://github.com/NousResearch/hermes-agent/pull/86976) | ✅ 自带 PR | opt-in 设计安全，倾向采纳 |
| Telegram 群消息中 `@` 提及真人时静默丢弃（除非明确响应） | [#103799 PR](https://github.com/NousResearch/hermes-agent/pull/103799) | ✅ 自带 PR | 替代旧 #64456，社区已达成共识 |
| 在 `router-mode llama-server` 下也展示 live status 提示 | [#103986 PR](https://github.com/NousResearch/hermes-agent/pull/103986) | ✅ 自带 PR | 解决自托管用户体验问题，倾向采纳 |
| `kanban` 板级 workspace 默认值不被跨板覆盖 | [#51938 PR](https://github.com/NousResearch/hermes-agent/pull/51938) | ✅ 自带 PR | 修复明确 bug，倾向采纳 |
| 每次 release 前同时跑 `npm-check` + `npm outdated` | [#102563](https://github.com/NousResearch/hermes-agent/issues/102563) | ❌ 无 | **强烈建议采纳**——用户 @eabase 多次因依赖陈旧、certifi 等核心包过期提出投诉 |
| macOS launcher fixture 测试隔离 | [#103981 PR](https://github.com/NousResearch/hermes-agent/pull/103981) | ✅ 自带 PR | 测试基础设施改进，价值清晰 |

---

## 7. 用户反馈摘要

**痛点 #1：`hermes update` 体验反复受挫**
用户 [@eabase](https://github.com/eabase) 在过去 30+ 天内至少提交 8 条关于 `hermes update` 的 Issue（#83670、#88201、#94345、#94375、#79664、#102172、#102183、#102193、#102540），覆盖：root-owned 文件持续产生、`.git/objects` 权限错误、`--backup` 失败、自动配置未授权的 messaging 平台、release 与 git tag 不一致、help 输出 80 列硬换行丑陋、bash completion 写错位置、更新耗时从 1 分钟恶化到 6+ 分钟且提示语不可读。**情绪倾向：** 长期失望，措辞强烈（"unacceptable"、"very corrupt"、"Big Mistake"），认为项目对基础依赖卫生和权限边界缺乏持续关注。

**痛点 #2：Windows / Linux 平台分裂**
多线程（#90495、#97394、#91212、#102193、#102172）反复出现"Windows 桌面交付失败"、"Linux root-owned 文件"、"Linux CUDA 后端不存在"等跨平台 bug。用户暗示这些并非孤立事件，而是 CLI 安装/更新/升级状态机的系统性欠缺。

**痛点 #3：Bot 群聊是核心使用场景**
#97681 + 23 条评论反映用户希望能在 VPS / 家庭实验室 / 笔记本间共享 Bot 群聊。Bot-Mode 是 Hermes 的差异化卖点，#98307 / #98073 的高质量响应说明社区驱动 + 内部投入的耦合正在生效。

**痛点 #4：第三方凭据借用导致原账户失效**
#103978 描述 Hermes 自动借用 Claude Code 的 OAuth refresh token 把用户登出 Claude CLI。这不仅是 UX 问题，还触及 Anthropic Consumer ToS。社区反应迅速：当日即有 PR #103988 修复。

**满意信号：** #26058 的 5 个 👍 表明 Discord 用户对 `free_response_channels` 语义修复期盼已久，PR #103990 的快速响应赢得认可；#97681 的 23 条评论是真正的"社区共建"案例，作者 `dokterdok` 同时是多个 Bot-Mode PR 的作者。

---

## 8. 待处理积压

下列 Issue/PR 创建已久且今日仍在被引用或更新，提醒维护者重点 review：

| Issue/PR | 创建日期 | 关注原因 |
|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | Skills index 自动化重建已失败 50+ 天，需排查 GitHub Actions cron |
| [#26058](https://github.com/NousResearch/hermes-agent/issues/26058) | 2026-05-15 | Discord `free_response_channels` + `auto_thread` 冲突虽已有 PR，仍待合并 |
| [#79664](https://github.com/NousResearch/hermes-agent/issues/79664) | 2026-08-05 | Vite `configLoader: 'native'` 不兼容问题长期被 duplicate 化但未真正解决 |
| [#82912](https://github.com/NousResearch/hermes-agent/issues/82912) | 2026-08-10 | Cron `enabled_toolsets` 静默丢失工具集的语义不变量待补 |
| [#83904](https://github.com/NousResearch/hermes-agent/issues/83904) | 2026-08-11 | Desktop 调度 cron 投递路径缺失，跨桌面/网关一致性待定 |
| [#83673](https://github.com/NousResearch/hermes-agent/issues/83673) | 2026-08-11 | Python venv 中 50+ 过期包（含 `certifi`）—— **安全相关，应优先处理** |
| [#83670](https://github.com/NousResearch/hermes-agent/issues/83670) | 2026-08-11 | release 版本号与 git tag 不一致，破坏可追溯性 |
| [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) | 2026-08-20 | Terminal env snapshot

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-06

> 数据来源：github.com/sipeed/picoclaw  
> 报告日期：2026-09-06（数据窗口：过去 24 小时）  
> 分析师：AI 开源项目观察站

---

## 一、今日速览

PicoClaw 项目今日整体活跃度偏低，处于**轻量维护状态**。过去 24 小时内共产生 2 条 Issue 动态与 3 条 PR 动态，无新版本发布。值得注意的是，3 条 PR 全部为「批量合并型 fix PR」且已统一关闭，疑似维护者对历史未合并 PR 的一次集中清理；1 条 Issue 因长期无活动被标记为 stale 并关闭，体现了一定的 Issue 卫生管理。社区讨论热度集中于 1 条关于 IRC 长消息处理的开放 Issue（10 条评论），反映该议题仍是用户真实痛点。

**综合活跃度评级：⭐⭐☆☆☆（低活跃，以维护和清理为主）**

---

## 二、版本发布

**无新版本发布。** 当前 24 小时内未检测到任何 Release 标签更新。建议关注上游版本节奏是否进入稳定维护期。

---

## 三、项目进展

今日 3 条 PR 全部为已关闭状态，无新增合并内容进入主干。具体情况如下：

| PR | 标题 | 作者 | 状态 | 链接 |
|---|---|---|---|---|
| #1559 | fix: merge PR #1327 #1319 #1318 #1313 | xuwei-xy | 已关闭 | [🔗](https://github.com/sipeed/picoclaw/pull/1559) |
| #1545 | fix: merge PR #1500 #1490 #1488 #1487 #1485 | xuwei-xy | 已关闭 | [🔗](https://github.com/sipeed/picoclaw/pull/1545) |
| #1555 | fix: merge PR #1390 #1389 #1383 #1381 | xuwei-xy | 已关闭 | [🔗](https://github.com/sipeed/picoclaw/pull/1555) |

**分析**：  
这 3 条 PR 呈现出高度一致的模式——作者均为 **xuwei-xy**，创建时间均为 2026-03-14，标题均为「合并其他若干 PR 的修复」，均于今日（2026-09-05）被关闭。这强烈暗示：

1. 这些是**批量 cherry-pick / 集成型 PR**，试图将多个散落的 fix PR 合并到某一分支；
2. 维护者最终选择**直接关闭而非合并**，可能因为：相关修复已通过其他途径进入主干，或批量合并方式与项目当前的 PR 评审规范不符；
3. **未对项目主干产生实质代码推进**，今日代码层面无新增提交。

**进展评估：项目主干今日「零净推进」**，但仓库整洁度有所改善（减少了悬而未决的元 PR）。

---

## 四、社区热点

### 🔥 最活跃 Issue：#3287 — IRC 长消息支持优化

- **标题**：[Feature] Better support long messages in IRC
- **作者**：superuser-does  
- **创建时间**：2026-07-22（已存活 ~45 天）
- **评论数**：10 条
- **👍 数**：0
- **链接**：[sipeed/picoclaw Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)

**诉求分析**：
用户希望 PicoClaw 在 IRCv3 协议下能够**将自动拆分的长消息识别为同一逻辑消息**。IRC 协议默认限制为 512 字节，换行符会被识别为新消息——当消息超过 512 字节时，客户端会自动切分，导致 PicoClaw 错误地将其视为多条独立消息处理。

10 条评论表明该议题引发了较深入的协议层讨论，可能涉及：
- 消息重组（reassembly）逻辑
- 对 IRCv3 `batch` 标签的支持
- 配置项暴露给用户

**这是项目当前最实质的社区讨论**，但 0 👍 点赞数提示议题热度仍处于「小众但深度」阶段，未形成广泛共鸣。

---

## 五、Bug 与稳定性

| 严重度 | 议题 | 描述 | 状态 |
|---|---|---|---|
| 低 | #3342 | 「after-turn」steering 模式特性请求被关闭（stale） | 已关闭，无 fix PR |

**说明**：今日未报告新的崩溃、回归或功能性 Bug。唯一关闭的 #3342 实际上是一个**特性请求**而非 Bug，且因长期无活动被 stale 机器人自动关闭，并非由维护者主动判定为「不实现」。

**稳定性观察**：24 小时窗口内无崩溃报告、无性能回归讨论，社区稳定性体感良好。

---

## 六、功能请求与路线图信号

### 📌 仍在跟踪的特性请求

1. **#3287 IRC 长消息识别** — 已存活 45 天，10 条评论深度讨论
   - **路线图可能性：中等偏高**
   - 理由：议题活跃、有明确技术方案讨论空间，且 IRC 是 PicoClaw 支持的渠道之一；但 0 点赞说明并非多数用户痛点

2. **#3342 after-turn steering 模式**（已关闭）
   - 描述：希望在 agent 处理任务时，用户发送的第二条消息**排队而非打断**
   - **路线图可能性：低**
   - 理由：已被标记 stale 并关闭，意味着短期内不会纳入；若社区强烈反弹，未来仍有可能重启

**结论**：从 PR 维度看，所有 3 条今日关闭的 PR 均未涉及新功能落地，**路线图推进信号暂不明确**。

---

## 七、用户反馈摘要

### ✅ 隐性正面信号
- **稳定性体感良好**：24 小时内无任何崩溃/回归/Bug 报告
- **IRC 集成质量受关注**：用户愿意投入 10 条评论深度讨论 IRC 行为，说明该功能被实际使用并具备改进价值

### ⚠️ 真实痛点
1. **IRC 长消息切分问题**（#3287）
   - 使用场景：用户通过 IRC 与 PicoClaw 交互，长消息被错误拆解导致对话断裂
   - 痛点本质：协议边界处理不够智能化

2. **Steering 模式下任务被「跳过」的体验问题**（#3342）
   - 使用场景：用户在 agent 处理过程中追加指令，希望保留上下文连续性
   - 痛点本质：当前 mid-turn 强制跳过的设计打断了工作流

### 🔇 沉默信号
- 0 点赞的议题说明用户参与方式偏向**评论型而非表达型**，可能存在轻度互动疲劳或对治理反馈路径的不信任

---

## 八、待处理积压提醒

| 类型 | 编号 | 标题 | 创建日期 | 存活天数 | 链接 |
|---|---|---|---|---|---|
| Issue | #3287 | IRC 长消息支持 | 2026-07-22 | 45 天 | [🔗](https://github.com/sipeed/picoclaw/issues/3287) |

**提醒**：  
- **#3287 已活跃讨论 45 天且未关闭**，是当前仓库中**最长寿的开放议题**，建议维护者考虑给出阶段性回应（如：是否纳入下一版本、是否有 PoC 方案、需要哪些 RFC 提案等），以维护社区参与感
- 当前无「长期未响应的开放 PR」（今日关闭的 3 条已清理了部分积压），仓库 PR 队列健康度有所改善

---

##  数据附录

| 指标 | 数值 |
|---|---|
| 24h Issue 更新数 | 2 |
| 24h 新开/活跃 Issue | 1 |
| 24h 已关闭 Issue | 1（含 stale） |
| 24h PR 更新数 | 3 |
| 24h 待合并 PR | **0** |
| 24h 已合并/关闭 PR | 3 |
| 24h 新 Release | 0 |
| 最活跃 Issue 评论数 | 10（#3287） |

---

## 🩺 项目健康度综合评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码推进 | ⭐⭐☆☆☆ | 无新合并，主干零净推进 |
| 社区互动 | ⭐⭐⭐☆☆ | 1 个活跃议题深度讨论，无点赞情绪 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无 Bug 报告，体感良好 |
| 仓库卫生 | ⭐⭐⭐⭐☆ | Stale 清理 + 历史 PR 关闭，整洁度提升 |
| 路线图可见性 | ⭐⭐☆☆☆ | 无 release、无功能落地，信号弱 |

**总评：项目处于「低活跃稳态」**，无明显风险信号，但需维护者主动输出（版本发布、Issue 回应）以避免社区冷却。

---

*报告生成时间：2026-09-06 · 基于 GitHub 公开数据*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-09-06**

---

## 1. 今日速览

NanoClaw 今日整体处于**低强度维护期**。过去 24 小时内无新增 Issues、无版本发布、也无 PR 合并，社区互动几乎静默。仅有 3 个 PR 处于待合并状态，且均属于**小范围修复与文档更新**性质，未涉及新功能开发。整体来看，项目保持着稳态的健康度，但缺乏更广泛的社区参与信号。

---

## 2. 版本发布

⚠️ **无新版本发布**。建议关注下一个 Release 是否会包含本次积压的若干修复（详见下文 PR 部分）。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，所有活跃 PR 均处于 Open 状态，按主题归类如下：

### 🔧 平台兼容性修复
- **PR #3725** — `fix(setup): pin Linux signal-cli to 0.14.7`
  - 作者：@astraltrekkin
  - 解决了 Linux 安装脚本 `setup/install-signal-cli.sh` 中将 `signal-cli` 固定在 `0.14.3` 的问题。该版本会在向无现有会话的联系人发送消息时**永久挂起**。
  - 升级到当前 Asam 维护的 `0.14.7`，属于阻塞性 Bug 的重要修复。
  -  https://github.com/nanocoai/nanoclaw/pull/3725

###  测试基础设施清理
- **PR #3710** — `test: remove the temp directories the suite leaves behind`
  - 作者：@mmv
  - 完整运行一次 `pnpm test` 会在 OS 临时目录留下约 **355 个未清理目录**。对于长生命周期开发机或持续运行 CI runner（尤其是 `/tmp` 为 tmpfs 的发行版）会持续累积直至重启或 30 天 systemd-tmpfiles 清理。
  - 属于基础设施卫生改善，长期利好 CI 稳定性。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3710

### 📚 文档更新
- **PR #3724** — `Update retired model id in the add-opencode Anthropic example`
  - 作者：@kasparovabi
  - 更新 `add-opencode` skill 中的 Anthropic 模型示例 ID：从 `anthropic/claude-sonnet-4-20250514`（已于 2026-06-15 被 Anthropic 弃用）更新为 `anthropic/claude-sonnet-5`。
  - 防止用户按照文档示例操作时遇到 API 报错。
  - 🔗 https://github.com/nanocoai/nanoclaw/pull/3724

**整体评估**：今日项目推进幅度**较小**。若 3 个 PR 能在本周合并，将带来一次有意义的稳定性与文档质量提升。

---

## 4. 社区热点

⚠️ 今日 Issues 区域**完全静默**，无任何新开或活跃讨论。3 个 Open PR 的评论区也暂无交互（`评论: undefined`）。

**热点缺失分析**：这可能与以下因素相关：
- 周末效应（2026-09-06 为周日）
- 无重大功能发布吸引社区注意力
- 现有用户基盘较小，问题集中在内部测试而非社区报告

**建议**：维护者可考虑在 PR 中主动 `@` 相关 reviewer，加快合并节奏，避免小修复在 backlog 中陈化。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---------|------|------|---------|
| 🔴 **高** | Linux signal-cli 0.14.3 向无会话联系人发消息时永久挂起 | 已有 fix PR 待合并 | [#3725](https://github.com/nanocoai/nanoclaw/pull/3725) |
| 🟡 **中** | 测试套件在 `/tmp` 累积约 355 个临时目录，影响长生命周期环境 | 已有 fix PR 待合并 | [#3710](https://github.com/nanocoai/nanoclaw/pull/3710) |
| 🟢 **低** | `add-opencode` skill 文档引用了 Anthropic 已弃用的模型 ID | 已有 fix PR 待合并 | [#3724](https://github.com/nanocoai/nanoclaw/pull/3724) |

**核心风险**：信号通道的挂起 Bug（PR #3725）属于用户可见的阻塞性缺陷，建议**优先合并**。

---

## 6. 功能请求与路线图信号

⚠️ 今日**无新功能请求**或路线图相关讨论。所有 PR 均聚焦于缺陷修复与文档准确性维护，未提供新功能方向信号。

**观察**：项目当前处于**维护模式**，未呈现明显的功能扩张意图。如需判断下一版本方向，建议参考 7 日 / 30 日维度的 PR 与 Issue 趋势。

---

## 7. 用户反馈摘要

⚠️ 由于今日**无 Issues 交互、无 PR 评论**，无法提炼真实用户痛点。

仅可从 PR 描述中**间接推断**用户场景：
- **Linux + Signal 用户**：是受 signal-cli 挂起 Bug 影响的目标群体。
- **长时间运行的 CI 用户**：受临时目录累积问题影响。
- **新接入 OpenCode + Anthropic 的用户**：会被弃用模型 ID 误导。

---

## 8. 待处理积压

当前活跃积压（3 个 PR）已在前文详述。**无长期未响应的重要 Issue**。

**对维护者的提醒**：
1. ✅ **优先合并** PR #3725（修复挂起 Bug，用户影响面较大）
2. 🟡 PR #3710（基础设施卫生，建议本周内合并）
3.  PR #3724（文档准确性，可快速合并）
4.  建议关注社区参与度下滑趋势，适时发布 Roadmap 或 AMA 提振活跃度

---

##  项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐☆☆☆ | 仅有 3 个 PR，无合并 |
| 社区参与度 | ⭐☆☆☆☆ | 无 Issues 互动、无评论 |
| 发布节奏 | ⭐⭐⭐☆☆ | 无新版本但有积压修复待发版 |
| 缺陷修复及时性 | ⭐⭐⭐☆☆ | 关键 Bug 已有 PR 但未合并 |
| **综合健康度** | **⭐⭐⭐☆☆** | **稳定但略显沉寂** |

---

*报告生成时间：2026-09-06 · 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**报告日期：2026-09-06**
**数据范围：过去 24 小时（截至 2026-09-05）**

---

## 1. 今日速览

IronClaw 过去 24 小时整体活跃度**偏低**，仅产生 1 条新 Issue 和 2 条新 PR，无版本发布、无合并记录。两条 PR 均处于待合并状态，其中 #8075 为 XL 规模的功能性变更（将嵌入式 Pi sandbox loop 设为启动默认），#7988 为 CI 自动触发的代码知识图谱刷新。Issue #8074 报告了一处 UX 文案 bug，提示某类用户在共享频道中收到错误的连接引导文案。整体看，项目处于**常规维护与迭代蓄力阶段**，尚无重大合并里程碑。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时内未检测到任何 Release 事件。

---

## 3. 项目进展

⚠️ **今日无任何 PR 被合并或关闭**，因此无明确的前进节点。但有两条值得关注的进行中工作：

- **PR #8075**（[链接](https://github.com/nearai/ironclaw/pull/8075)）：将嵌入式 Pi sandbox loop 设为启动默认配置。该 PR 显式以 `feat/7903-native-loop-sandbox-spike` 为 base，**严禁在 #7908 之前合并**。此项变更与基准测试场景相关，属于已规划路线的推进。
- **PR #7988**（[链接](https://github.com/nearai/ironclaw/pull/7988)）：nightly `Codebase Graph Refresh` workflow 触发的代码知识图谱刷新，属于基础设施自动化维护，无功能性影响。

项目整体向前推进幅度：**有限**。无合并即无落地，建议关注者跟踪 #8075 的评审节奏。

---

## 4. 社区热点

过去 24 小时评论与互动数据：

| 编号 | 类型 | 评论数 | 👍 | 状态 |
|------|------|--------|-----|------|
| [#8074](https://github.com/nearai/ironclaw/issues/8074) | Issue | 1 | 0 | Open |
| [#8075](https://github.com/nearai/ironclaw/pull/8075) | PR | 0 | 0 | Open |
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR | 0 | 0 | Open |

**热点分析**：#8074 是当前唯一有评论的条目，社区反响整体平静。值得注意的是，#8075 标注 `contributor: core`，由核心贡献者 serrrfirat 提交，叠加 PR 编号（#8075 > #7908）和分支依赖关系来看，这是当前阶段最受关注的内部技术决策。

---

## 5. Bug 与稳定性

### 🟡 中优先级 — #8074：错误文案条件分支错误

- **链接**：https://github.com/nearai/ironclaw/issues/8074
- **报告者**：thisisjoshford
- **创建时间**：2026-09-04
- **现象**：当一个**已配对（paired）用户**在一个**未连接（not connected）的共享频道**中执行被拒绝的动作时，系统错误地展示了 `connect_required` 文案（面向"未配对用户"的引导，如"在 IronClaw web app 中连接你的账户…"），而不是展示该频道未连接状态对应的提示文案。
- **影响范围**：UX 层面错误引导，可能造成已配对用户误以为需要重新连接账户；不涉及数据丢失或服务不可用。
- **严重程度**：中 — 影响用户体验清晰度，但不阻塞功能。
- **Fix PR**：❌ 暂未关联修复 PR。

---

## 6. 功能请求与路线图信号

- **PR #8075（嵌入式 Pi sandbox loop 默认化）**：虽非外部 feature request，但反映出项目**正在将 sandbox 启动路径向"hosted-native loop"方向统一**，并明确服务于基准测试（benchmark）场景。这是 #7903 spike 分支（已存在）与 #7908（base PR）之上的进一步落地，**强烈信号表明 sandbox 内嵌 agent runtime 是当前路线的重点方向**。
- **社区新功能请求**：今日无新功能请求类 Issue。

---

## 7. 用户反馈摘要

唯一带评论的 #8074（评论数：1）所反映的用户痛点：

- **痛点**：文案分支逻辑不够精细，未能根据用户身份（paired vs unpaired）× 频道状态（connected vs not connected）的二维组合给出恰当引导。
- **场景**：多账号/多安装共享频道，paired 用户在尚未建立连接的频道中触发受限操作。
- **满意度**：无法从有限评论中得出结论，但该问题反映出**状态机覆盖测试可能存在边界遗漏**，值得维护者系统性梳理。

---

## 8. 待处理积压

以下条目需维护者关注：

| 编号 | 类型 | 创建日 | 状态 | 提醒 |
|------|------|--------|------|------|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | PR | 2026-08-29 | Open（已 7 天） | 由 CI bot 自动生成，常规应被合并；长期未处理可能导致知识图谱与 default branch 漂移。建议在下次例行合并窗口处理。 |
| [#8075](https://github.com/nearai/ironclaw/pull/8075) | PR | 2026-09-05 | Open，依赖 #7908 | XL 规模变更，叠加在 spike 分支之上；评审应优先确认 base PR #7908 的稳定性后再推进。 |
| [#8074](https://github.com/nearai/ironclaw/issues/8074) | Bug | 2026-09-04 | Open，无关联 fix | 影响 UX 清晰度，建议在下个 sprint 修复并补齐对应分支的单测。 |

---

## 健康度小结

| 维度 | 评估 |
|------|------|
| 活跃度 | 🟡 偏低（1 Issue + 2 PR） |
| 合并节奏 | 🔴 当日无合并 |
| 社区响应 | 🟢 无冲突信号，评论氛围平和 |
| 自动化维护 | 🟢 CI bot 仍在稳定产出 |
| Bug 处理 | 🟡 存在未修复 UX bug |

**总体判断**：项目处于稳态运营阶段，无异常波动；维护者应尽快处理 #7988 这类低风险自动化 PR，避免基础设施漂移；同时关注 #8075 的评审链路与 #8074 的修复节奏。

---
*报告基于 GitHub 公开数据自动生成，所有条目均附原始链接以便溯源。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期：2026-09-06**
**项目地址：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 项目今日处于**低活跃静默期**。过去 24 小时内，仓库无新增/关闭的 Issues，无合并或关闭的 PR，亦无新版本发布。仅有 2 条停留在"待合并"状态的 PR 在系统层面有更新戳变动（标记为 stale），分别来自 2026-03-30 的提交。综合来看，仓库当日实质代码与社区流动几乎为零，**健康度信号偏弱**，建议维护者关注积压项。

---

## 2. 版本发布

本周期无新版本发布（过去 24 小时 Releases 更新为 0）。

---

## 3. 项目进展

**今日无任何合并/关闭的 PR**，因此项目在主干上没有正式推进。两条仍处于 OPEN 状态的 PR 虽然挂着"待合并"标签，但实际并未在今日产生可纳入主干的变化：

- [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069) — `CoworkSessionDetail.tsx` 重构（自 2026-03-30 起未推进）
- [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070) — Per-session MCP 开关功能（自 2026-03-30 起未推进）

**项目净推进量：0。**

---

## 4. 社区热点

由于无新增 Issues，且两条 PR 的评论数均为 `undefined`、👍 数均为 0，今日**不存在明显社区讨论热点**。仓库内可观察到的最具互动潜力的内容仍是上述两条被自动标记为 stale 的 PR，但参与度（评论/反应）均为零。

- [PR #1069](https://github.com/netease-youdao/LobsterAI/pull/1069) — 0 评论 / 0 👍
- [PR #1070](https://github.com/netease-youdao/LobsterAI/pull/1070) — 0 评论 / 0 👍

**诉求分析：** 两条 PR 的方向均与"会话/协作（Cowork）"场景强相关——一处聚焦前端组件可维护性与渲染性能，一处聚焦 MCP server 的细粒度控制。这反映出潜在用户对**多会话隔离、桌面级 Agent 可控性**的诉求。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告、崩溃或回归问题。** Issues 流入量为 0，无法评估当前稳定性变化。建议结合近期版本（若有）观察线上 crash 率与 telemetry，作为客观补充信号。

---

## 6. 功能请求与路线图信号

虽然没有新的功能请求 Issues，但既有 PR 已经为下一阶段路线图提供了两个明确信号：

| 方向 | PR | 潜在价值 | 是否可能被纳入下一版本 |
|---|---|---|---|
| Cowork 会话前端重构 | [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 拆分 2100+ 行单体组件，提升可维护性与渲染性能 | 中等（纯重构，依赖 review 排期） |
| Per-session MCP 开关 | [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | 会话级 MCP server 启停，状态持久化，含 OpenClaw 引擎拦截 | 中高（功能闭环，且补足 MCP 全局开关的痛点） |

**建议维护者优先 review PR #1070**，因其代表了产品差异化（按会话场景精细控制 MCP）方向，对用户价值更直接。

---

## 7. 用户反馈摘要

**今日无新的 Issues 评论或用户反馈流入。** 暂无可提炼的真实痛点、使用场景或满意度信号。

---

## 8. 待处理积压

以下条目已超过 5 个月（自 2026-03-30 至今）未被合并或关闭，且被 GitHub 自动标记为 **stale**，**提醒维护者重点关注**：

| # | 标题 | 作者 | 创建时间 | 最后更新 | 状态 |
|---|---|---|---|---|---|
| [#1069](https://github.com/netease-youdao/LobsterAI/pull/1069) | 重构：拆分 CoworkSessionDetail 单文件 | stone333 | 2026-03-30 | 2026-09-05 | OPEN · stale |
| [#1070](https://github.com/netease-youdao/LobsterAI/pull/1070) | feat(cowork): 支持 per-session MCP 开关控制 | vdorchan | 2026-03-30 | 2026-09-05 | OPEN · stale |

**风险提示：** 长期未响应的 PR 会显著降低外部贡献者的提交意愿，建议维护者至少给出明确反馈（合并 / 关闭 / 给出修改意见），以维护社区活跃度与贡献者信心。

---

### 总体健康度评估

| 维度 | 状态 |
|---|---|
| 代码主干活跃度 | 🟡 静默（无合并） |
| 社区互动度 | 🔴 极低（0 评论 / 0 👍） |
| 版本发布节奏 | ⚪ 无更新 |
| 积压处理情况 | 🔴 2 条 stale PR 待决 |
| 整体健康度 | **偏低** — 维护者建议增加 review 节奏 |

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
**日期：2026-09-06**
**数据范围：2026-09-05 24 小时**

> ⚠️ 命名说明：仓库已迁移/重命名为 `agentscope-ai/CoPaw`，但今日抓取到的 Issue/PR 链接仍带有 `QwenPaw` 字样（疑似旧命名未替换或重定向），下文统一以 "CoPaw（原 QwenPaw）" 指代。

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库活跃度处于 **中等偏高** 水平：**Issues 更新 10 条（7 条活跃/3 条关闭），PR 更新 3 条（均待合并，无新 Release）**。整体来看，项目处于 v2.2.0 发布前的密集迭代期：用户报告了多起影响 2.2.0 全版本可用性的高危 Bug（context window 兜底、img-gen skill 协议错误、异常栈丢失），社区围绕多租户版 **Hub** 的下一阶段规划展开了 23 条评论的深度讨论。无新版本发布、PR 尚未合并表明项目今日主要为"问题暴露与方案收集"阶段，尚无代码主线推进。

---

## 2. 版本发布

**今日无新 Release。** 多个 Bug 报告与 v2.2.0 相关（如 [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) 明确指出 "v2.1.0 through v2.2.0 confirmed buggy"），下一版本（如 2.2.1）很可能需要打包修复这些回归。

---

## 3. 项目进展

过去 24 小时 **无 PR 合并**，但有 3 条 Issue 已关闭，均与 img-gen skill 和自定义 Provider 加载相关：

| Issue | 主题 | 关闭时间 |
|---|---|---|
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义 Provider 加载失败（`max_tokens` → `max_output_length` 迁移遗漏） | 09-05 |
| [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) | img-gen skill `openai_images.py` 请求体漏 `model` 字段 | 09-05 |
| [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) | img-gen skill `edit()` 无条件发送 `response_format` 触发 400 | 09-05 |

**评估：** 项目当日净进展较轻（仅清理 3 条 Issue），3 条 PR 全部仍处于"待合并/Open"状态，未推动新代码进入主线。img-gen skill 的 2 条 Bug 在同一天发现并关闭，节奏良好，说明维护者响应及时。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|
| 🥇 | **[Discussion] QwenPaw Hub 多租户版规划** | **23** | **3** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) |
| 🥈 | 自定义 Provider 加载失败（已关闭） | 5 | 0 | [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) |
| 🥉 | skill_pool 版本/依赖元数据 | 2 | 0 | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) |

**[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 是当日唯一的高热度讨论**：由 rayrayraykk 发起，确认 QwenPaw Hub（多租户版）将于 2.2.0 推出，并面向社区征集下一阶段该建什么。23 条评论反映社区存在强烈的**团队化/多用户使用诉求**，关联社区诉求包括 [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324)（多用户访问与管理维护的 skills）。该帖是衡量 Hub 路线图方向的核心信号来源。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 / 严重（影响所有用户）

**[#7576 RetryChatModel 硬编码 32768 context_size 导致所有模型 CONTEXT_UNFIT](https://github.com/agentscope-ai/QwenPaw/issues/7576)**
- 报告者 aimastertoast；确认 v2.1.0–v2.2.0 全版本受影响
- 根因：`RetryChatModel.__init__` 中存在硬编码 fallback `context_size=getattr(...)`，强制所有模型使用 32768 窗口
- 后果：实际上下文超过 ~31130 token 时直接 CONTEXT_UNFIT 报错
- **无 fix PR**，需立即修复

**[#7572 工具派发层吞掉异常栈，故障无法定位](https://github.com/agentscope-ai/QwenPaw/issues/7572)**
- 报告者 Jonhow324；v2.2.0
- 根因：`qwenpaw/tool_calls/_coordinator.py` 的 `_drain()` 用 `except Exception` 吞掉整条 `next_handler` 链路，仅返回 `str(exc)` 文本给模型，**不记录日志也不重抛**
- 后果：故障排查彻底黑盒化，**线上无任何 trace 可追**
- **无 fix PR**，严重阻碍 v2.2.0 上线后的可观测性

### 🟡 P1 / 中等（影响特定工作流）

**[#7571 Agent 记忆失效：TODO 文件四散、错误目录开发](https://github.com/agentscope-ai/QwenPaw/issues/7571)**
- 报告者 xiaohushi512；Windows v2.2.0
- 用户痛点：跨 A/B/C 三路径的插件开发工作流中，Agent 反复遗忘规则（TODO 输出位置、应在哪个路径开发）
- 表现为 **持久化记忆/约定遵循失效**，且非 2.2.0 新问题（用户明确"不是这个版本才有的"）
- **无 fix PR**

### 🟢 P2 / 已修复（当日关闭）

- [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) 自定义 Provider 加载（已关）
- [#7574](https://github.com/agentscope-ai/QwenPaw/issues/7574) img-gen model 字段（已关）
- [#7575](https://github.com/agentscope-ai/QwenPaw/issues/7575) img-gen response_format（已关）

---

## 6. 功能请求与路线图信号

| 请求 | 关联 PR | 路线图可能性 |
|---|---|---|
| **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) QwenPaw Hub 多租户版** | 暂无 | 🟢 **极高**，已确认 v2.2.0 推出 |
| [#7573 Web UI 增加"编辑上一条消息"与"Rewind"按钮](https://github.com/agentscope-ai/QwenPaw/issues/7573) | 暂无 | 🟡 中等，UX 通用需求 |
| [#7570 飞书流式卡片：思考过程输出完成后自动折叠](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 暂无 | 🟡 中等，报告者已附本地验证 diff |
| [#7557 skill_pool 版本与依赖元数据](https://github.com/agentscope-ai/QwenPaw/issues/7557) | 暂无 | 🟡 中等，企业级场景需要 |

**待合并 PR 现状（均为路线图信号）：**
- [#7509 feat(skill): Update make-skill to v2](https://github.com/agentscope-ai/QwenPaw/pull/7509) — 审批驱动的"草稿→发布"工作流，状态 Ready for Merge
- [#7569 feat(modes): add Advisor Mode](https://github.com/agentscope-ai/QwenPaw/pull/7569) — 双模型协作（强 advisor + 弱 worker），按会话选择 loop mode
- [#6874 feat(mcp): add configurable tool call timeout](https://github.com/agentscope-ai/QwenPaw/pull/6874) — MCP 工具调用可配超时（默认 300s）

---

## 8. 待处理积压提醒

- **PR [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874)** 自 **2026-08-10** 创建，已挂起 **27 天**仍处于 Under Review。建议维护者尽快过 review；该 PR 引入的 `tool_call_timeout` 是 MCP 长任务的关键可用性改进。

---

## 7. 用户反馈摘要

| 痛点/场景 | 来源 | 摘要 |
|---|---|---|
| **记忆系统"形同虚设"** | [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | 跨多路径（A 源码/B Agent 默认/C 运行时）插件开发中，Agent 反复遗忘用户的强约束规则。用户明确表达"不知道怎么解决了"，反映记忆子系统对**长生命周期、跨工作区约束**的支持薄弱。 |
| **团队化使用受阻** | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 个人 AI 助手定位下，用户自发希望"为团队跑一套"。当前缺乏 admin 管理、skills 共享、用户隔离。 |
| **飞书 UX 不够友好** | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | 强制思考模型（GLM-5.x）思考文本过长，未自动折叠，把回复挤到屏幕外。报告者已附本地补丁，期望官方采纳。 |
| **skill 不可版本化** | [#7557](https://github.com/agentscope-ai/QwenPaw/issues/7557) | 9-agent 集群下无法区分同一 skill 在不同 workspace 的版本，升级痛苦。 |

---

## 📊 项目健康度速读

| 维度 | 评估 |
|---|---|
| 活跃度 | 🟢 中高（10 Issues/3 PRs） |
| 维护响应 | 🟢 当日关闭 3 条，节奏及时 |
| 代码主线推进 | 🔴 0 PR 合并，连续两天无主线提交 |
| Bug 严重性 | 🔴 出现 2 条 P0（影响全版本/可观测性） |
| 社区参与 | 🟢 Hub 讨论热度高，23 条评论 |
| 待办积压 | 🟡 PR #6874 滞留 27 天 |

**结论：** 项目处于 v2.2.0 上线前的高风险窗口——多租户新特性吸引社区关注，但两条 P0 级 Bug（context window 兜底、异常栈吞噬）若不修复，将直接影响 v2.2.0 的稳定性口碑。建议维护者**优先处理 [#7576](https://github.com/agentscope-ai/QwenPaw/issues/7576) 与 [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572)**，并推动 [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) 与 [#7509](https://github.com/agentscope-ai/QwenPaw/pull/7509) 合并。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-09-06** ｜ [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

ZeptoClaw 今日进入**密集的自我架构审查与安全加固周期**。过去 24 小时由维护者 qhkm 单人开出了 **12 条结构化 Issue**（来源指向 `docs/reviews/2026-09-06-hermes-comparison-review.md` 深度架构评审），并立即针对其中 2 条 **P0 安全漏洞**提交了修复 PR（#671、#672）。社区侧活跃度仍然为零（所有 Issues 评论数均为 0、👍 均为 0），但维护者自身表现出极高的执行力：**问题发现 → Issue 立案 → 修复 PR 的闭环速度不到 24 小时**。今日无版本发布、无合并、无关闭。整体健康度判断：**项目处于"主动清债"阶段，安全债被优先处理，但社区参与度有待激活**。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无合并 / 关闭的 PR。但维护者快速跟进 P0 安全修复，提交了 2 条修复 PR（均处于 OPEN 状态，等待 review 与合并）：

| PR | 修复内容 | 链接 |
|---|---|---|
| #672 | 清理 plugin / MCP 子进程的环境变量继承（补全三处遗留 spawn 站点） | [#672](https://github.com/qhkm/zeptoclaw/pull/672) |
| #671 | `agent_mode` 解析失败时 fail-closed 到 `Assistant`，杜绝未知配置静默升级到 `Autonomous` | [#671](https://github.com/qhkm/zeptoclaw/pull/671) |

两条 PR 均**修复 P0 安全问题**，并附有清晰的变更说明与参考文件路径，是高质量的整改提交。若今日合并，将标志着 8 项安全姿态（§8 Security posture）中两项"Quick wins"被消化。

---

## 4. 社区热点

⚠️ **数据说明**：今日 12 条 Issues 全部由维护者 qhkm 发起，**无任何社区成员评论或反应**。因此严格意义上的"社区讨论热点"尚未形成。以下列出**问题影响面最大、最值得关注**的条目：

| 排名 | Issue | 主题 | 优先级 | 链接 |
|---|---|---|---|---|
| 1 | #661 | Byte-stable Prompt Envelope（系统 prompt 不利于 prompt-cache 复用） | P2-high [L] | [#661](https://github.com/qhkm/zeptoclaw/issues/661) |
| 2 | #663 | 完成 Agent Pipeline 迁移（生产仍跑 5,227 行 AgentLoop） | P2-high [L] | [#663](https://github.com/qhkm/zeptoclaw/issues/663) |
| 3 | #662 | 完善 channel-plugin 协议（当前仅出站单向，存在 stall 风险） | P2-high [L] | [#662](https://github.com/qhkm/zeptoclaw/issues/662) |
| 4 | #667 | Footprint Ladder + 扩展元数据归属（Extension Host v2） | P2-high [M] | [#667](https://github.com/qhkm/zeptoclaw/issues/667) |

**诉求分析**：四条均为 L/M 级架构 / 性能债，作者明确指出"文档与代码不同步"（#663）、"最大架构性能缺口"（#661）等定性结论。这表明项目正在为下一阶段（v2 架构）做**集中性技术债务盘点**，而非被动响应用户反馈。

---

## 5. Bug 与稳定性

今日报告的 **P0 安全 / 稳定性问题**（均位于 `src/security/`, `src/runtime/`, `src/tools/`, `src/channels/`, `src/tools/mcp/`）：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **P0 / P1-critical** | [#659](https://github.com/qhkm/zeptoclaw/issues/659) | `agent_mode` 解析失败回退到 `Autonomous`（最大权限）—— 默认不安全 | ✅ PR [#671](https://github.com/qhkm/zeptoclaw/pull/671) |
| 🔴 **P0 / P1-critical** | [#660](https://github.com/qhkm/zeptoclaw/issues/660) | 子进程环境变量继承未集中清理，3 处 spawn 站点泄露 API key / token | ✅ PR [#672](https://github.com/qhkm/zeptoclaw/pull/672) |
| 🟠 P2-high | [#669](https://github.com/qhkm/zeptoclaw/issues/669) | SHA-256 审计链仅在进程内存内，重启即失证据 | ❌ 无 PR |
| 🟠 P2-high | [#664](https://github.com/qhkm/zeptoclaw/issues/664) | 子 agent 能力可超越父策略（policy inheritance 缺失） | ❌ 无 PR |
| 🟠 P2-high | [#662](https://github.com/qhkm/zeptoclaw/issues/662) | plugin channel 仅出站，存在 stall 风险 | ❌ 无 PR |

两条 P0 已配套修复 PR，且 PR 中明确给出"修复前→修复后"语义对比（fail-open → fail-closed / 全继承 → 白名单），具备直接合入条件。

---

## 6. 功能请求与路线图信号

今日所有 Issue 均来自维护者自审，但其中 4 条明确标记为 **[rfc]** 或带有 v2 命名，强烈指向**下一版本路线图**：

| 候选 | Issue | 路线图含义 |
|---|---|---|
| **Cron Job v2** | [#665](https://github.com/qhkm/zeptoclaw/issues/665) | 引入完成 ack、运行 ledger、运维控制接口；当前"成功"语义存在关键弱点 |
| **Memory v2** | [#666](https://github.com/qhkm/zeptoclaw/issues/666) | 持久化跨会话回忆 + 事务化写入；保留 Hermes 不引入 always-on profile 的轻量优势 |
| **Extension Host v2** | [#667](https://github.com/qhkm/zeptoclaw/issues/667) | 引入 Footprint Ladder（按能力分层扩展），让核心运行时瘦身 |
| **Prompt Envelope v2** | [#661](https://github.com/qhkm/zeptoclaw/issues/661) | 字节级稳定系统 prompt，显著降低 token 成本并提高缓存命中率 |

**判断**：以上四项高度可能是 2026 Q4 的核心交付物，且与当前 PR 修复节奏匹配，预计安全债清理后将集中转向这些 v2 RFC。

---

## 7. 用户反馈摘要

⚠️ **数据限制**：今日所有 Issue 均为维护者单方撰写，**无第三方用户评论**。无法提炼真实外部痛点。可观察到的间接信号：

- **维护者自评痛点（最具代表性）**：在 [#663](https://github.com/qhkm/zeptoclaw/issues/663) 中作者直接引用 `src/agent/pipeline.rs:18–45` 中的代码注释——"生产终端将是 CoreLoop (Phase 4a)"，但生产仍运行旧的 AgentLoop。这是**代码自我承认的"已知未完工"**，反映出维护者对当前生产路径存在明显不满。
- **架构评审产物**：所有 Issue 摘要均引用 `docs/reviews/2026-09-06-hermes-comparison-review.md`，表明项目刚刚完成一次与 Hermes 的对标评审，并据此生成执行清单（Exec #3 – #10），系统化推进差距收敛。
- **未观察到的信号**：缺少外部使用者对易用性、文档、性能的真实反馈，建议维护者在合并 PR 后主动 ping 社区征集意见。

---

## 8. 待处理积压

由于今日净增 12 条新 Issue，项目待办总量显著上升。以下**高影响、目前无 PR 的条目**应优先关注：

| 优先级 | Issue | 主题 | 状态 |
|---|---|---|---|
| P0 | [#660](https://github.com/qhkm/zeptoclaw/issues/660) | 子进程环境清理（**已配 PR #672，等待合并**） | 🔥 建议 24h 内合入 |
| P0 | [#659](https://github.com/qhkm/zeptoclaw/issues/659) | agent_mode fail-closed（**已配 PR #671，等待合并**） | 🔥 建议 24h 内合入 |
| P2 | [#661](https://github.com/qhkm/zeptoclaw/issues/661) | Prompt-cache 友好改造 | 🟡 影响范围最大、性能债 |
| P2 | [#663](https://github.com/qhkm/zeptoclaw/issues/663) | 迁移到 CoreLoop | 🟡 影响主流程架构 |
| P2 | [#669](https://github.com/qhkm/zeptoclaw/issues/669) | 审计链持久化 | 🟡 安全合规相关 |

**提醒维护者**：
1. **先合两条 P0 安全 PR**（#671、#672）—— 它们是当日最关键的成果。
2. **为 #661、#663 拆出 RFC 讨论帖**，推动 v2 设计共识。
3. **激活社区**：12 条新 Issue 全部 0 评论，建议在 issue 中 @ 相关贡献者或社交渠道广播，避免技术债变成"个人记账"。

---

> 📊 **健康度总评**：维护者执行力 ★★★★★ ｜ 社区活跃度 ★★☆☆☆ ｜ 安全响应速度 ★★★★★ ｜ 文档与代码一致性 ★★★☆☆（#663 已暴露文档领先于实现）
>
> 下一次日报重点跟踪：#671、#672 是否合并；#661/#663 RFC 是否开启讨论。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*