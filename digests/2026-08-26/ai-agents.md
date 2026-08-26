# OpenClaw 生态日报 2026-08-26

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-26 00:55 UTC

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

# OpenClaw 项目日报 · 2026-08-26

---

## 一、今日速览

OpenClaw 仓库今日活跃度维持高位，过去 24 小时共更新 **500 条 Issues**（新开/活跃 437、已关闭 63）与 **500 条 PRs**（待合并 259、已合并/关闭 241），但 **无新版本发布**，处于 v2026.8.1 beta 验证收口期。议题与 PR 比例接近 1:1，显示社区反馈与代码修复并行推进。今日多起 **P0/P1 严重缺陷** 在 SQLite 持久化、Telegram/WhatsApp 投递、prepared-model-runtime 失败关闭等核心路径上集中暴露，**beta.7 现场报告 (#128067)** 一次汇总了六类可靠性问题，反映 beta 版尚未达到 GA 标准**。整体项目处于"广泛修复+深度重构"双轨并行的冲刺阶段，健康度评估：**中等偏紧**。

---

## 二、版本发布

⚠️ **今日无新版本发布**。当前主线版本仍为 `v2026.8.1-beta.3`（commit `5831b80721f802072b0ec1893b30a16cf42d538c`），见 [#125626](https://github.com/openclaw/openclaw/issues/125626)。

由于以下若干 P0/P1 缺陷仍未关闭（详见第六节），建议**暂勿升级生产环境至最新 beta**，等待 GA 版本：

- SQLite 15–24 小时内出现 freelist miscount 并进入"瘫痪网关"模式 ([#126821](https://github.com/openclaw/openclaw/issues/126821))
- Telegram 出站投递卡在 `send_attempt_started` ([#126246](https://github.com/openclaw/openclaw/issues/126246))
- `prepared-model-runtime` 单次指纹漂移永久 wedge 网关 ([#127710](https://github.com/openclaw/openclaw/issues/127710))

---

## 三、项目进展（重要合并/关闭的 PR）

### 已合并/关闭（重要）

| PR | 标题 | 影响范围 |
|---|---|---|
| [#95553](https://github.com/openclaw/openclaw/issues/95553) | **preflight compaction 硬编码 60s 超时** → 关闭 | 🟢 修复长期存在的 compaction 超时硬上限 bug（P1，源码可复现） |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | **网关：将对话投递保持在 agent binding 内** → 关闭 | 🟢 多 agent 场景下防止对话发现/投递逃逸到非绑定 agent（P1，已含视频证明） |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | **Control UI：审核 install policy 警告** → 关闭 | 🟢 安全边界增强——管理员可在 UI 审核并继续可疑插件安装 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | **install policy 警告需显式确认** → 关闭 | 🟢 安全边界增强——CLI 安装需确认目标名称与发现内容 |
| [#123975](https://github.com/openclaw/openclaw/pull/123975) | **tsgo 进程树超时/信号清理** → 关闭 | 🟢 自动化可靠性，避免 tsgo 卡死后残留僵进程 |
| [#127298](https://github.com/openclaw/openclaw/pull/127298) | **QA：固定 Slack 草稿进度传输** → 关闭 | 🟢 QA 测试基础设施修复 |

### 等待 maintainer 复核（高价值）

| PR | 标题 | 状态 |
|---|---|---|
| [#129648](https://github.com/openclaw/openclaw/pull/129648) | **fix(heartbeat): failed agents 误报广播成功** | 👀 维护者待审 |
| [#129695](https://github.com/openclaw/openclaw/pull/129695) | **fix(sqlite): 覆盖精确稳定数据库升级路径** | 👀 维护者待审 |
| [#119975](https://github.com/openclaw/openclaw/pull/119975) | **fix(gateway): 准确上报 active unmanaged restart 启动** | ⏳ 等作者补充 |
| [#129423](https://github.com/openclaw/openclaw/pull/129423) | **fix(compaction): 总结 prepared window 并恢复审计标识** | ⏳ 等作者补充 |
| [#126618](https://github.com/openclaw/openclaw/pull/126618) | **fix: Tool Search 包装原生 read/exec** | 📣 需证明材料 |
| [#120119](https://github.com/openclaw/openclaw/pull/120119) | **fix(media): 跨投递保留编码图像文件名** | 👀 维护者待审 |
| [#123774](https://github.com/openclaw/openclaw/pull/123774) | **fix(daemon): 隐藏 Windows launcher 与守护进程同生命周期** | 📣 需证明材料 |
| [#129690](https://github.com/openclaw/openclaw/pull/129690) | **fix(github-copilot): 允许 claude-opus-5 的 xhigh/max 思考等级** | ⏳ 等作者补充 |

**整体评估**：今日已关闭的 241 个 PR 中，安全（install policy）、投递边界（agent binding）、基础设施（tsgo）三类得到实质推进。但核心稳定性问题（SQLite、prepared-model-runtime、消息投递丢失）的修复 PR **多数仍处待审状态**，反映维护者评审带宽受限。

---

## 四、社区热点

### 🔥 评论最多议题（按互动量排序）

1. **[#125626](https://github.com/openclaw/openclaw/issues/125626)** — *OpenClaw 2026.8.1 beta 反馈聚合帖*（19 评论，0 👍）
   - 当前 beta 阶段的官方反馈汇总线程；状态为 `release-validation`，需在 GA 前汇总并闭环所有 blocker。
2. **[#80319](https://github.com/openclaw/openclaw/issues/80319)** — *QA tool-defaults 套件将 Codex-native 工具与 OpenClaw 动态工具混为一谈*（17 评论，1 👍）
   - QA 体系方法论问题——区分 Codex 原生 workspace 工具 vs OpenClaw 动态工具的边界不清。
3. **[#67777](https://github.com/openclaw/openclaw/issues/67777)** — *子 agent 完成投递在 direct-announce 超时/排空/孤立剪枝时丢失*（14 评论）
   - P1 钻石级严重度，子 agent 完成投递的可靠路径问题，影响所有调用 subagent 的工作流。
5. **[#79902](https://github.com/openclaw/openclaw/issues/79902)** — *基于 database-first runtime 暴露 SQLite 转录/session 缝*（14 评论，2 👍）
   - 高互动 feature request，社区希望 OpenClaw 暴露底层 SQLite 转录/session 缝以便构建第三方配套工具。
6. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — *hook/tool 子进程泄漏导致僵尸累积*（9 评论）
   - P1 回归 bug，长时间运行后进程表被僵尸占满。

### 诉求分析

- **beta 反馈集中爆发**：单 [#128067](https://github.com/openclaw/openclaw/issues/128067)（"beta.7 field report: 6 reliability defect classes"，5 评论）一次性报告了 6 类生产部署稳定性缺陷，反映**多 agent + Telegram/forum topics** 重负载用户群体已成为主要 issue 来源。
- **方法论与 QA 反思类议题**获得较多互动（#80319、#79902），社区从"单点 bug 报告"转向"基础设施/可观测性"诉求。

---

## 五、Bug 与稳定性

按严重程度排序（结合优先级 P-level 与影响面）：

### 🔴 P0（最高严重）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | **SQLite 损坏在全新重建 DB 上 15–24h 内复发**（WSL2，5 天内 5 次）；存在"瘫痪网关"模式——拒绝所有服务但不退出 | ❌ 未见明确修复 |
| [#127710](https://github.com/openclaw/openclaw/issues/127710) | `prepared-model-runtime` 因瞬态生成抖动 fail-closed，单次指纹漂移永久 wedge 网关；owner-commit race 静默丢消息 | ❌ |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram durable 出站投递卡在 `send_attempt_started` 并在重启后丢失 | ❌ |
| [#127948](https://github.com/openclaw/openclaw/issues/127948) | WhatsApp 群组回复在引用缓存过期后渲染为**空白气泡** | ✅ [#127948](https://github.com/openclaw/openclaw/issues/127948) 已有 linked PR |

### 🟠 P1（严重）

| Issue | 描述 | 是否已有 fix PR |
|---|---|---|
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | 子 agent 完成投递丢失 | ❌ |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏→僵尸累积 | ❌ |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | `memory_search corpus=all` 超时但单 corpus 成功 | ❌ |
| [#108379](https://github.com/openclaw/openclaw/issues/108379) | Xiaomi MiMo 重复 assistant 生成尝试导致重复叙述文本 | ❌ |
| [#84662](https://github.com/openclaw/openclaw/issues/84662) | Codex app-server 每轮将运行时上下文存入原生历史，导致响应输入膨胀 | ❌ |
| [#106704](https://github.com/openclaw/openclaw/issues/106704) | `sessions_yield` 在 subagent 首轮静默 finalize 为 ok（空结果） | ❌ |
| [#56217](https://github.com/openclaw/openclaw/issues/56217) | 密钥提供商 crash-loop 耗尽 1Password 服务账户速率 | ❌ |
| [#80178](https://github.com/openclaw/openclaw/issues/80178) | `resolveCliAuthEpoch` 在凭据存储切换时作废所有活 CLI 会话（身份未变） | ❌ |
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | Windows 下 CLI 与 Node Host 交替设备元数据批准 | ✅ 已 linked |
| [#125570](https://github.com/openclaw/openclaw/issues/125570) | Skill Workshop update apply 覆盖 live skill description 静默破坏路由 | ❌ |
| [#127823](https://github.com/openclaw/openclaw/pull/127823) | 控制 UI 队列与编辑器整合 | 📣 需证明 |
| [#114612](https://github.com/openclaw/openclaw/issues/114612) | `memory_index_chunks`/`memory_embedding_cache` 无保留策略→磁盘膨胀 | ❌ |
| [#126900](https://github.com/openclaw/openclaw/issues/126900) | `maxActiveTranscriptBytes` 在压缩后仍超阈值→无限循环 | ✅ 已 linked |
| [#128067](https://github.com/openclaw/openclaw/issues/128067) | beta.7 现场报告汇总 6 类可靠性缺陷（持久化/投递/重启恢复） | ❌ |
| [#99925](https://github.com/openclaw/openclaw/issues/99925) | WebChat 新会话丢失全部历史上下文，AI 在启动时"盲" | ❌ |
| [#126631](https://github.com/openclaw/openclaw/issues/126631) | 沙箱技能 bind-mount 创建 root 拥有的 `/workspace/.openclaw` 锁死 uid 1000 | ✅ 已 linked |
| [#95746](https://github.com/openclaw/openclaw/issues/95746) | memory-core dreaming 因并行/内部 Dream Diary subagent 运行耗尽本地模型上下文 | ❌ |
| [#129314](https://github.com/openclaw/openclaw/issues/129314) | 隐藏"下轮运行时上下文"消息偶发作为独立可见轮 | ❌ |
| [#79252](https://github.com/openclaw/openclaw/issues/79252) | `globalCircuitBreakerThreshold` 按工具类型而非 session 全局计数→跨工具循环逃逸 | ❌ |
| [#96477](https://github.com/openclaw/openclaw/issues/96477) | 生产规模：放宽单写者 session 锁以支持多用户部署 | ❌ |

### 🟡 P2（中等）

| Issue | 描述 |
|---|---|
| [#48709](https://github.com/openclaw/openclaw/issues/48709) | Gemini 2.5 Pro：textSignature 膨胀 + think 标签 + 混合 text/tool 导致 session 失败 |
| [#119401](https://github.com/openclaw/openclaw/issues/119401) | 直接/DM `NO_REPLY` 抑制无视 `silentReply` 策略→无法强制可见回复 |
| [#77819](https://github.com/openclaw/openclaw/issues/77819) | WebChat 会话重置后隐藏归档会话 + 丢失图片附件显示 |
| [#77298](https://github.com/openclaw/openclaw/issues/77298) | Cron `consecutiveErrors` 在网关重启中断时递增，掩盖真实 agent 失败率 |
| [#69572](https://github.com/openclaw/openclaw/issues/69572) | Feishu 输入指示器应使用 Typing API 而非 Message Reaction |
| [#64103](https://github.com/openclaw/openclaw/issues/64103) | session `status` 字段值（"failed"/"timeout"/"done"）误导 agent 派生重复 session |
| [#128657](https://github.com/openclaw/openclaw/issues/128657) | Control UI loading shimmer 每帧重绘 |
| [#71335](https://github.com/openclaw/openclaw/issues/71335) | `sync.watch` 在网关模式下应默认 false（多 agent 描述符泄漏） |

---

## 六、功能请求与路线图信号

按社区诉求强度排序：

| Issue | 功能请求 | 关联 PR | 进入下一版本的概率评估 |
|---|---|---|---|
| [#79902](https://github.com/openclaw/openclaw/issues/79902) | **数据库优先运行时上的 SQLite 转录/session 缝** | 无 | ⭐⭐⭐⭐ 高——与 #78595 主线演进直接耦合 |
| [#67413](https://github.com/openclaw/openclaw/issues/67413) | **每 agent dreaming 配置** | 无 | ⭐⭐⭐⭐ 高——直接缓解 OOM（6GB 超限）问题，影响所有多 agent 用户 |
| [#45758](https://github.com/openclaw/openclaw/issues/45758) | **YAML 配置文件格式支持** | 无 | ⭐⭐ 中——DevOps 友好，但迁移成本需评估 |
| [#16670](https://github.com/openclaw/openclaw/issues/16670) | **Onboarding 向导增加记忆/嵌入配置强制步骤** | 无 | ⭐⭐⭐⭐ 高——降低新手门槛，门槛低 |
| [#39343](https://github.com/openclaw/openclaw/issues/39343) | **网关层图像批处理/媒体组缓冲** | 无 | ⭐⭐⭐ 中——多通道均有需求 |
| [#62615](https://github.com/openclaw/openclaw/issues/62615) | **连续失败后会话侧熔断器** | 无 | ⭐⭐⭐ 中——与 #79252 全球熔断器互补 |
| [#51441](https://github.com/openclaw/openclaw/issues/51441) | **在 session_status 与 agent runtime 中暴露解析后的后端模型** | 无 | ⭐⭐⭐ 中——LiteLLM 路由代理场景刚需 |
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | **将 OpenRouter 使用成本暴露给 agent runtime** | 无 | ⭐⭐ 低——成本可见性 |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | **优雅的子 agent 超时（预超时警告）** | 无 |

---

## 横向生态对比

# 2026-08-26 AI 智能体开源生态横向对比分析报告

> 数据样本：13 个项目；分析窗口：过去 24 小时

---

## 一、生态全景

2026-08-26 的快照显示，个人 AI 助手与自主智能体开源生态呈现**"头部高强度迭代 + 中部质量收敛 + 尾部长尾休眠"的三层结构**：以 OpenClaw、ZeroClaw、Hermes Agent、CoPaw 为代表的头部项目单日 Issue/PR 吞吐量达 50 量级，处于密集修复与功能扩展并行的冲刺期；NanoBot、IronClaw、LobsterAI、Moltis 处于功能补齐与体验打磨的收敛期；TinyClaw、ZeptoClaw、NullClaw 则进入近乎休眠状态。**当日仅 LobsterAI（2 个版本）与 CoPaw（v2.1.1-beta.3）有正式发布**，其余 11 个项目均无新版本，处于"修不完的 P0"阶段——尤其集中在 SQLite 持久化、多 agent 投递、Telegram/Slack 渠道、Provider 兼容性四条主路径上。值得注意的是，**"家庭边缘 mesh + signed receipts"正在以同一位作者 kvnloo 的名义跨项目同时提案**（PicoClaw #3345、NullClaw #994、NanoClaw #3538、ZeroClaw #10360），是一次有组织的分布式 AI 协同路线推进。

---

## 二、各项目活跃度对比

| 项目 | Issues (新/活跃/关闭) | PRs (待合并/合并) | Release | 合并率 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 437 / 63 | 259 / 241 | 无 | 48% | 🟠 中等偏紧：P0 集中爆发，beta 验证收口期 |
| **ZeroClaw** | 50 (38/12) | 50 (49/1) | 无 | 2% | 🟠 治理强 / PR 通道紧，RFC 驱动 |
| **Hermes Agent** | 41 / 9 | 39 / 11 | 无 | 22% | 🟢 良好：客户端健壮性显著推进 |
| **CoPaw (QwenPaw)** | 34 (20/14) | 50 (21/29) | ✅ v2.1.1-beta.3 | 58% |  健康：Beta 节奏稳，闭环效率高 |
| **NanoClaw** | 5 (新) | 50 (34/16) | 无 | 32% | 🟢 地基加固期，setup 协议收尾 |
| **IronClaw** | 37 | 23 (14/9) | 无 | 39% |  工程治理型发布日，CI 三阶段落地 |
| **NanoBot** | 5 (新) | 24 (10/14) | 无 | 58% |  活跃有节奏，体验/执行双提速 |
| **LobsterAI** | 1 | 11 (2/9) | ✅ 2026.8.25 + 2026.8.21 | 82% | 🟢 高强度 + 弱社区反馈 |
| **Moltis** | 2 (1/1) | 5 (4/1) | 无 | 20% |  稳态打磨，沙箱方向明确 |
| **PicoClaw** | 4 | 1 (1/0) | 无 | 0% | 🔴 低活跃，维护者响应通道待激活 |
| **NullClaw** | 1 (新) | 0 | 无 | — | 🔴 单条提案，无活跃开发 |
| **TinyClaw** | 0 | 0 | 无 | — | ⚫ 24h 零活动 |
| **ZeptoClaw** | 0 | 0 | 无 | — | ⚫ 24h 零活动 |

**关键观察**：合并率与活跃度的非线性关系明显——LobsterAI 合并率最高（82%）但 Issue 端几乎为零；ZeroClaw 活跃度极高但 PR 合并率仅 2%，提示严重的评审带宽瓶颈。

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 横向对比 |
|---|---|---|
| **规模** | 单日 500 Issue + 500 PR | 约为 ZeroClaw/Hermes/CoPaw 的 10 倍体量 |
| **状态** | v2026.8.1-beta.3 收口期 | 唯一大规模"准 GA 冲刺中"项目；多数同类仍处早期 |
| **功能面** | 多 agent 编排、Telegram/WhatsApp/Slack 全渠道、SQLite 持久化、prepared-model-runtime、Skill Workshop、WebChat 等 | **最广的功能表面**，承担最多集成压力 |
| **社区体量** | 单 PR 评论 19、Issue 评论 17+ | Hermes Agent 单 Issue 评论 11 已是第二梯队 |
| **架构成熟度** | 多层嵌套（gateway / runtime / compaction / dreaming / circuit breaker） | 复杂度领先，但也最先暴露 S0/S1 类崩溃（#126821 SQLite 损坏、#127710 fingerprint drift wedge） |
| **差异化路线** | "**通用桌面 AI 助手 + 多渠道 + 多 agent 协同**" | vs. IronClaw（企业级持久沙箱）、vs. ZeroClaw（Rust 优先 + 治理）、vs. CoPaw（中国生态 + Beta 通道） |

**结论**：OpenClaw 是当之无愧的**生态事实参照基线**，但其高复杂度也意味着它是 P0/P1 缺陷最集中的"压力测试对象"。其他项目普遍以 OpenClaw 的功能集合作为远期目标，但更聚焦于其中某一两个细分方向做垂直化（沙箱、Provider、渠道、边缘部署等）。

---

## 四、共同关注的技术方向

| 技术方向 | 涉及项目 | 代表诉求 |
|---|---|---|
| **SQLite 持久化可靠性** | OpenClaw (#126821)、ZeroClaw (UTF-8 截断 #10271)、CoPaw (#5720 内存泄漏致 DB 损坏) | 全网通用存储层在长时运行下的损坏与恢复 |
| **多 agent 投递可靠性** | OpenClaw (#67777, #127176)、ZeroClaw (#9947 cron 跨 agent 越权)、CoPaw (P2 #6273 任务追踪并发)、Hermes Agent (#79005 profile 切换污染) | 子 agent 完成路径在不同 lifecycle 阶段的丢失/串扰 |
| **Telegram / Slack 渠道集成** | OpenClaw (#126246, #127948)、NanoBot (#5516, #5541)、PicoClaw (#3338 FileSize)、NanoClaw (#3544/#3545)、IronClaw (#7862 device-link)、Hermes Agent (#93617/#94435)、LobsterAI (#2531 刷新闪烁) | 富文本渲染、媒体上传、设备链接激活是几乎每家都在补的"半成品" |
| **Provider / 模型适配** | Hermes Agent (xAI #95003、Ollama #87697/#95054)、NanoBot (OpenAI Codex cache #5540)、Moltis (OpenAI schema #1232)、OpenClaw (Xiaomi MiMo #108379、Codex #84662) | 保留名冲突、流式中断、prompt cache key 漂移 |
| **家庭边缘 / 分布式 mesh** | NullClaw (#994)、NanoClaw (#3538)、ZeroClaw (#10360)、PicoClaw (#3345)、IronClaw (#7889 远程 worker)、Moltis (#1118 K8s + #1199 Coder) | **kvnloo 主导的同源提案**正在四个 Claw 变体中同步推进 |
| **沙箱安全边界** | OpenClaw (#126631 uid 1000 锁死)、NanoBot (#5536 fail-closed)、NanoClaw (#3543 shell injection)、ZeroClaw (#10367 symlink race)、IronClaw (#7732 per-user persistent sandbox) | 从进程级 → 用户级 → 节点级的隔离演进 |
| **Web UI 性能 / 长会话** | PicoClaw (#3281 输入卡顿)、CoPaw (#7129/#7285 流式掉帧)、IronClaw (#7491 编码工具统一化) | 前端在长上下文与流式输出下的渲染压力 |
| **国际化（i18n）** | Hermes Agent (#40239 + PR #92590 pt-BR, 3400+ 行翻译) | 唯一当日有大规模 i18n 落地的项目 |

---

## 五、差异化定位分析

| 项目 | 核心定位 | 目标用户 | 关键技术差异 |
|---|---|---|---|
| **OpenClaw** | 通用桌面 AI 助手 + 多 agent + 全渠道 | 个人开发者 / 中小团队 / 多渠道运营 | 最广功能面；SQLite + prepared-model-runtime；TypeScript/Node 栈 |
| **NanoBot** | 轻量个人助手 + 体验打磨 | 个人用户的日常 AI 辅助 | TUI/WebUI 体验深耕；文档检索扩展（PDF/DOCX） |
| **Hermes Agent** | 多 Provider 多平台桌面客户端 | 跨平台桌面用户、Provider 切换刚需 | **桌面优先**（macOS/Windows 权限管理、Safe Storage Keychain）；架构级 Authority RFC |
| **PicoClaw** | 极轻量边缘 runtime | 边缘开发者、RISC-V/ARM 玩家 | Go 栈；目标内存 10–20MB；轻量 Worker 模式提案 |
| **NanoClaw** | Setup 协议 + 家庭边缘 | 自托管用户、自动化部署需求 | `nanoclaw.driver.v1` + preseed 目录 + 结构化健康检查；脚本化安装 |
| **NullClaw** | 极小 runtime + Zig 实现 | 资源极受限设备、深度技术玩家 | Zig runtime；RuntimeAdapter/Peripheral vtable 抽象层 |
| **IronClaw** | 企业级持久沙箱 + 设计系统 | 企业部署、复杂多用户场景 | `iron-proxy` per-(tenant,user) 沙箱；Design System Phase 3；subagent 后台模式 |
| **LobsterAI** | 商业化个人助手（网易有道） | C 端用户；订阅+内容沉淀 | Electron + DSH；library/artifacts 一等公民；明确商业归因埋点 |
| **Moltis** | 沙箱可插拔 + MCP 协议完善 | 自部署用户、企业 | 本地 → K8s → Coder 的可插拔沙箱矩阵；MCP 协议细节优化 |
| **CoPaw (QwenPaw)** | 中文生态 + AgentScope 集成 | 中文用户、阿里云/通义生态 | 与 AgentScope 框架深度绑定；Beta 通道 + Webhook 集成诉求 |
| **ZeroClaw** | Rust 优先 + 治理 + 安全 | 架构师、安全研究者 | RFC 驱动开发；StageX 容器；ZeroRelay 盲中继 |

---

## 六、社区热度与成熟度

### 第一梯队：快速迭代期
- **OpenClaw**、**ZeroClaw**、**Hermes Agent**、**CoPaw**、**NanoClaw**——Issue/PR 吞吐量高、功能演进快速，但同时承载最多未修复 P0/P1。
- **共同特征**：仍处 Beta 或 0.x 阶段；commit 频次高；评审带宽成为瓶颈（典型如 ZeroClaw 合并率仅 2%）。

### 第二梯队：质量巩固期
- **IronClaw**——v1.4.0 路线图清晰，CI 三阶段集中收尾，**进入"工程治理型"发布节奏**。
- **LobsterAI**——唯一当日双版本发布，但社区互动极弱，**呈"高强度开发 + 弱社区反馈"特征**。
- **NanoBot**——TUI/WebUI 体验层提速，subagent/沙箱纵深防御并行推进，**节奏感最好**。
- **Moltis**——沙箱能力扩张与 MCP 协议细节修复双轨推进，**稳态打磨**。

### 第三梯队：低活跃/休眠
- **PicoClaw**——单 PR 8 天未审，Issue #3281 已 stale 35 天，**维护者响应通道待激活**。
-

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-26

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 采样窗口：过去 24 小时（截至 2026-08-26 UTC）

---

## 一、今日速览

NanoBot 今日呈现**高强度合并、低门槛提交**的典型活跃开发日。过去 24 小时内，仓库共产生 **29 项动态更新**（5 个 Issue、24 个 PR），其中 **14 个 PR 已合并或关闭**（合并/关闭率 ≈ 58%），10 个 PR 仍处于开放等待状态，**当日无新版本发布**。Issues 侧全部为新建，尚未关闭。从提交方向看，Telegram/WebUI/TUI 等面向终端用户的渠道与交互层改进占据主导，深层基础设施（Provider prompt cache、Exec sandbox、MCP readiness）亦有重磅修复落地，项目整体健康度评估为**良好（活跃且具备节奏）**。

---

## 二、版本发布

**今日无新 Release。** 最近一次发布未在数据快照中体现，建议读者前往 [Releases 页](https://github.com/HKUDS/nanobot/releases) 自行确认。

---

## 三、项目进展（已合并/关闭的重要 PR）

今日共 **14 个 PR 合并/关闭**，以下是功能与质量层面值得重点关注的项目：

| 方向 | PR | 核心改动 |
|------|-----|---------|
| 🔧 安全/P1 | [#5533](https://github.com/HKUDS/nanobot/pull/5533) | `find_files` 改用 `os.scandir` 预算化扫描、传播取消信号、修复大目录卡顿 |
| 🔧 安全/P1 | [#5536](https://github.com/HKUDS/nanobot/pull/5536) | 受限 Shell 缺少 sandbox 时**默认拒绝执行**（fail-closed），收紧工作区越权风险 |
| 🚀 能力扩展 | [#5525](https://github.com/HKUDS/nanobot/pull/5525) | `grep` 升级为**按需文档检索**：支持 PDF/DOCX/XLSX/PPTX，带行号/页码定位器 |
| 🚀 能力扩展 | [#5526](https://github.com/HKUDS/nanobot/pull/5526) | `exec_session` 新增 `until_exit`/`timeout_ms`，**摆脱轮询等待**后台任务 |
| 🚀 能力扩展 | [#5534](https://github.com/HKUDS/nanobot/pull/5534) | TUI 输入 `$skill-name` 自动补全（方向键/Tab/Enter/Esc） |
| 🎨 UX 改进 | [#5538](https://github.com/HKUDS/nanobot/pull/5538) | TUI 提示符明确 `Enter now · Tab next` 双行为 |
| 🎨 UX 改进 | [#5530](https://github.com/HKUDS/nanobot/pull/5530) | 短会话时控件与输入框顶部对齐，避免大窗口内容空洞 |
| 🐛 修复 | [#5541](https://github.com/HKUDS/nanobot/pull/5541) | Telegram 群组消息添加发送者前缀（先 first name → username → ID 三级回退），关联 [#1091](https://github.com/HKUDS/nanobot/issues/1091) |
| 🐛 修复 | [#5540](https://github.com/HKUDS/nanobot/pull/5540) | OpenAI Codex 的 `prompt_cache_key` 严格绑定 nanobot session 身份，杜绝散列漂移 |
| 🐛 修复 | [#5529](https://github.com/HKUDS/nanobot/pull/5529) | 后台 subagent 仅在回合退出时统一汇合，普通消息 drain 不阻塞主运行器 |
| 🐛 修复 | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | WebUI **拖拽排序会话**已合入（经历冲突后今日落地） |

**整体判断：** 本日推进主要集中在三条主线——① 加强受限执行环境的纵深防御（#5536、#5526）；② 把内部工具链从"能用"推向"顺手"（#5525、#5534、#5529）；③ 修复 Telegram 群组归属与 WebUI 会话排序等长期遗留体验问题。**项目在执行层与体验层双双提速约 0.4 个发布节奏。**

---

## 四、社区热点

当日评论活跃度偏低，仅有 2 个 Issue 包含实质讨论：

- 🥇 **[#5505](https://github.com/HKUDS/nanobot/issues/5505)** *Add AnySearch as a web search provider (key-optional)* — **3 条评论**
  由 **AnySearch 团队主动提交**，承诺随后提 PR，将 nanobot `web_search` 与 AnySearch 的 API/MCP/Skill 三种集成方式打通。其"key-optional + 匿名配额"卖点契合 nanobot 开源用户的零成本起步诉求，社区需关注接口标准化与计费语义。

- 🥈 **[#5532](https://github.com/HKUDS/nanobot/issues/5532)** *missing import of "mask_session_key" in autocompact.py* — **1 条评论**
  用户在清理任务场景下遇到 `NameError`，根因疑似自动压缩模块导入遗漏，属于**回归型 P2 阻断问题**。

- 🥉 **[#5516](https://github.com/HKUDS/nanobot/issues/5516)** *Telegram: rich messages never render when streaming is enabled* — **1 条评论**
  报告 `rich_messages: true` + `streaming: true` 双开时不渲染富文本，可由 Bot API 10.1–10.3 的 `editMessageText` 与内联键盘预览修复。**已有关联修复 PR：[#5531](https://github.com/HKUDS/nanobot/pull/5531)（OPEN）。**

**诉求解读：** 当前社区议程被两大张力主导——一是**搜索/检索类第三方供应商想挤进 nanobot 生态**（#5505、#[#5234](https://github.com/HKUDS/nanobot/pull/5234)），二是**多渠道 Telegram 流式富文本渲染仍不稳定**。维护者或许需要正面回应"供应商接入门槛"这一架构问题。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P1（高优先级，建议下版本必修）

| ID | 描述 | 是否已有 Fix PR | 状态 |
|----|------|----------------|------|
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | 受限 Shell 无 sandbox 时未 fail-closed，存在路径绕过风险（修复 [#4072](https://github.com/HKUDS/nanobot/issues/4072)） | ✅ 自带 | PR OPEN |
| [#5533](https://github.com/HKUDS/nanobot/pull/5533) | `find_files` 大目录扫描卡顿、无法取消 | ✅ 自带 | PR CLOSED ✓ |
| [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 集成 mst-python 作为 metasearch provider（含冲突标记） | ✅ 已存在 PR | PR OPEN（待解决冲突） |

### 🟠 P2（中等优先级）

| ID | 描述 | 状态 |
|----|------|------|
| [#5532](https://github.com/HKUDS/nanobot/issues/5532) | `autocompact.py` 缺失 `mask_session_key` 导入触发 `NameError` | ❌ 暂无 Fix PR |
| [#5539](https://github.com/HKUDS/nanobot/pull/5539) | `ToolLoader` 日志使用 printf `%s` 占位符，与 Loguru `{}` 冲突导致插件加载失败无法定位 | ✅ PR OPEN |
| [#5535](https://github.com/HKUDS/nanobot/pull/5535) | Gateway 启动期 MCP 未就绪即发起 turn（NAN-43） | ✅ PR OPEN |
| [#5531](https://github.com/HKUDS/nanobot/pull/5531) | Telegram 流结束未就地升级为富文本，对应 #5516 | ✅ PR OPEN |
| [#5528](https://github.com/HKUDS/nanobot/pull/5528) | `unifiedSession` 下生成的标题未投影到 `websocket:<id>` 会话，对应 #5527 | ✅ PR OPEN |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | subagent 部分完成结果未标记 sibling 剩余任务数 | ✅ PR OPEN（7/28 起，已 28 天） |
| [#5504](https://github.com/HKUDS/nanobot/pull/5504) | 模型重试状态未推送到 WebSocket 客户端（NAN-34） | ✅ PR OPEN |

**结论：** 今日 P1/P2 Bug 中 **绝大多数已附带修复 PR**，仅 [#5532](https://github.com/HKUDS/nanobot/issues/5532) 处于"裸奔"状态——建议维护者尽快指派。

---

## 六、功能请求与路线图信号

| 诉求 | 来源 | 关联 PR | 进入下版本的概率评估 |
|------|------|---------|----------------------|
| **AnySearch 网络搜索整合** | [#5505](https://github.com/HKUDS/nanobot/issues/5505) | 团队承诺提交 | **高（≥70%）**——接口简洁，关键 optional |
| **WebUI agent turn 完成通知铃声** | [#5524](https://github.com/HKUDS/nanobot/issues/5524) | 无 | 中（30–50%）——需求明确且默认关闭，影响面有限 |
| **mst-python 元搜索集成** | 第三方 PR [#5234](https://github.com/HKUDS/nanobot/pull/5234) | 自带 | 中高（50–70%）——有冲突需要协调 |
| **会话级 `focus` 持久化（`my` 工具）** | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | 自带 | **高**——修复 #3292，已落代码 |
| **TUI 技能自动补全** | [#5534](https://github.com/HKUDS/nanobot/pull/5534) | 自带 | ✅ **已合入** |
| **Drag-and-Drop 会话组织** | [#5389](https://github.com/HKUDS/nanobot/pull/5389) | 自带 | ✅ **已合入** |
| **按需文档检索（PDF/DOCX/XLSX/PPTX）** | [#5525](https://github.com/HKUDS/nanobot/pull/5525) | 自带 | ✅ **已合入** |

**路线图信号：** 项目对"**插件化检索生态**"的接受度正在显著上升（AnySearch、MST 同日出现），同时把**会话级持久化状态（focus、标题、排序）**作为体验主线之一推进。下个版本很可能在 WebUI 完成度上下一个大台阶。

---

## 七、用户反馈摘要

从公开 Issues 评论可提炼的真实场景：

1. **企业级任务流水线痛点**（[#5532](https://github.com/HKUDS/nanobot/issues/5532)）
   用户在工作流中使用一句自然语言"删除之前创建的所有资源包括本地新建的文件（不得清理技能目录），并清理所有记忆"触发系统级清理，期间因 `mask_session_key` 未导入而抛错并中止。这种"高阶一句话指令"正在成为常见使用方式，对执行路径的完整性要求**远高于普通 Chat 场景**。

2. **Telegram 频道富文本交付失效**（[#5516](https://github.com/HKUDS/nanobot/issues/5516)）
   报告者明确指出 `rich_messages: true`（[#4488](https://github.com/HKUDS/nanobot/issues/4488) / [#4539](https://github.com/HKUDS/nanobot/issues/4539) 引入的可选特性）和默认开启的 `streaming: true` **互斥**，流式输出结尾将富文本"降级"为 HTML 编辑消息。反映出 nanobot **同时叠加两个新功能时缺乏集成测试覆盖**。

3. **WebUI session 标识错位**（[#5527](https://github.com/HKUDS/nanobot/issues/5527)）
   `unifiedSession: true` 模式下，侧边栏永远显示 "Untitled"。表明**会话元数据作用域**与**UI 呈现作用域**存在概念分层，需要在配置文档或架构图中显式化。

4. **第三方供应商接入邀约**（[#5505](https://github.com/HKUDS/nanobot/issues/5505)）
   AnySearch 团队详尽列出了 API/MCP/Skill 三种集成方案，等同于**主动递交 on-boarding 提案**，说明 nanobot 已在搜索供给侧具备一定影响力，但也

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-26** | 数据来源：github.com/nousresearch/hermes-agent

---

## 1. 今日速览

Hermes Agent 今日保持高活跃度：**24 小时内共 50 条 Issue 更新（41 活跃 / 9 关闭）和 50 条 PR 更新（39 待合并 / 11 合并或关闭）**。社区讨论集中在 macOS/Windows Desktop 平台兼容性、Provider（xAI/Ollama/OpenAI Codex）适配、Slack 插件流式会话问题以及一个较为系统的「Authority Execution Layer」架构提案（Issue #95028）。当日没有新版本发布，但 Session 压缩 API、/v1/responses 历史裁剪等关键 Gateway 能力已合入主线，i18n（pt-BR）与冷归档这两项大型社区需求有了可合并的实现。整体项目健康度良好，bug 修复密度高、架构性讨论具建设性。

---

## 2. 版本发布

**无新版本发布**（过去 24h）。

---

## 3. 项目进展

今日有 9 条 Issue 被关闭、2 条 PR 已合并/关闭，部分属于跨领域的重要修复。

**关键合入（PR，已合并/关闭）：**

- **PR #66148**（已关闭）— Gateway `/v1/responses` 历史图片裁剪 + 压缩后重复历史修复：解决 `previous_response_id` 链式调用导致 `response_store.db` 与每轮 provider payload 无限膨胀的问题（属于 `blast/moderate` 标签）。
  链接：https://github.com/NousResearch/hermes-agent/pull/66148
- **PR #42814**（已关闭）— 新增 API-Server Session 压缩端点 `POST /api/sessions/{session_id}/compress`：允许外部客户端显式压缩持久化会话历史，避免各自实现摘要层；命中缓存，可缓解存储增长（`sweeper:risk-session-state`, `risk-caching`）。
  链接：https://github.com/NousResearch/hermes-agent/pull/42814

**关键 Issue 关闭（修复已落地）：**

- **#16520**（10 评论，2 👍）— Terminal 工具 `read_file`/`cat` 长行被 `...` 截断导致模型误判文件损坏。
  链接：https://github.com/NousResearch/hermes-agent/issues/16520
- **#87703**（6 评论）— Windows `hermes update` 在 cua-driver 刷新时通过隐藏非交互 PowerShell 调用 UAC 弹窗，陷入约 11 分钟挂起。
  链接：https://github.com/NousResearch/hermes-agent/issues/87703
- **#94516**（6 评论）— Desktop Routines 面板在所有 Bot 下出现"Cronjobs are unavailable until this agent appears in the roster."回归。
  链接：https://github.com/NousResearch/hermes-agent/issues/94516
- **#90428**（5 评论）— Desktop 在 WS 短暂断开后，向断线前打开的会话发消息会被静默丢弃，无错误提示。
  链接：https://github.com/NousResearch/hermes-agent/issues/90428
- **#93617 / #94435**— Slack 适配器并发流（`_active_streams` 仅以 `chat_id` 作 key）导致重复消息；两个相关 issue 同日关闭。
  链接：https://github.com/NousResearch/hermes-agent/issues/93617 ｜ https://github.com/NousResearch/hermes-agent/issues/94435
- **#94483** — Desktop `CRONJOBS` 面板在普通 session 上 fail-closed 的 Create Cronjob 不响应问题已关闭。
  链接：https://github.com/NousResearch/hermes-agent/issues/94483
- **#94471** — Bots Routines 面板 `(e.name || "").trim is not a function` 渲染崩溃已关闭。
  链接：https://github.com/NousResearch/hermes-agent/issues/94471
- **#90663** — Ink TUI 在 Ghostty 上 Shift+letter 被小写化问题标记为 `[invalid]`（判定为终端/平台行为，与 Hermes 无关）。
  链接：https://github.com/NousResearch/hermes-agent/issues/90663

整体看，**Slack 插件并发流、Desktop Cron/Bots 面板、Windows/MacOS 更新路径**四条问题线今日集中收束，项目在客户端健壮性上明显推进。

---

## 4. 社区热点（评论数 / 👍 数最高的讨论）

- **Issue #95003 — 9 评论，7 👍（社区反应最高）**：xAI（grok-4.6 / OAuth）API 拒绝所有请求，返回 `function name tool_search is reserved for the tool_search tool`，导致 Grok 提供方在开启 Tool Search 时整体不可用。点赞数远高于平均，是当日最受关注的真实痛点。
  链接：https://github.com/NousResearch/hermes-agent/issues/95003
- **Issue #95028（9 评论）— 「Hermes Authority Execution Layer」架构 RFC**：作者 andrexibiza 主张"环境中的任何边界（路由、profile、socket、PID、可执行路径等）都不应被默信"，提出由 manifest + 编译器 + 双语言一致性测试构成的"Authority Execution Layer"，并将其与近期 12 个看似分散的 issue 视为同一根因。**#95101 PR 是该 RFC 的 Phase 0.1–0.3 实现**（Python + TypeScript 双编译器、共享 conformance vectors），二者在同日联动出现，表明这是有组织推进的架构级变更。
  链接：https://github.com/NousResearch/hermes-agent/issues/95028 ｜ 实现：https://github.com/NousResearch/hermes-agent/pull/95101
- **Issue #87697（11 评论）**：Hermes Client 在本地 Ollama 流式推理约 1.5 秒后取消请求，触发 `<unused49>` token 死循环。该问题与 **#95054**（Ollama provider fallback 链 `(None, None)` 静默失败）共同构成"Ollama 端到端不稳定"的话题簇。
  链接：https://github.com/NousResearch/hermes-agent/issues/87697 ｜ https://github.com/NousResearch/hermes-agent/issues/95054
- **Issue #40239（11 评论，3 👍）— Portuguese (pt-BR) Desktop 集成请求**：与 PR #92590（3,400+ 行翻译）和 #92643 同日联动，表明 i18n 进度从社区诉求 → 实现已贯通。
  链接：https://github.com/NousResearch/hermes-agent/issues/40239 ｜ https://github.com/NousResearch/hermes-agent/pull/92590
- **Issue #66616（97 评论，自动 probe）— Skills Index 已是 `degraded` 29.8h**（上限 26h），工作流 `skills-index.yml`（cron 6/18 UTC）未按时重建索引；docs.skills-hub 持续受影响，已是值得提醒维护者关注的存量故障（见 §8）。
  链接：https://github.com/NousResearch/hermes-agent/issues/66616

> 共识诉求集中在三件事：**a) 不要把 Tool Search 等保留关键字随便用作工具名；b) 不要在边界处默信环境；c) 真正开源的多语言本地化。**

---

## 5. Bug 与稳定性

按严重程度从高到低排列；标注 `(已合入 / 关闭)`、`(有修复 PR 待合并)` 或 `(无修复)`。

### P1（最高）
- **#94906（无修复）** — Windows 原生 stdio MCP 客户端**已能发现工具但全部调用立即失败**：`MCP stdio subprocess for '<server>' has exited; failing the call fast`。这是 Windows 上 MCP 集成的功能级断裂，待修。
  链接：https://github.com/NousResearch/hermes-agent/issues/94906

### P2（高）
- **#52010（无修复，仍开源）** — macOS Hermes Desktop **每次更新后会撤销 Full Disk Access / Files & Folders 权限**，需用户手动重新授权；与 #43365、#43788（Accessibility/Automation/Microphone）路径不同。
  链接：https://github.com/NousResearch/hermes-agent/issues/52010
- **#91115（无修复）** — macOS 同一现象在 Safe Storage Keychain 复现：每次 update 重签后 "Hermes Safe Storage" 的 ACL 不再匹配，每次启动都会弹 keychain 提示。Issue 标题强调需要"携带证明的安全 safeStorage 轮换机制"。
  链接：https://github.com/NousResearch/hermes-agent/issues/91115
- **#95003（无修复，社区反应最热）** — xAI `tool_search` 保留名引发 Grok 全局不可用。
  链接：https://github.com/NousResearch/hermes-agent/issues/95003
- **#87697（无修复）** — Ollama 本地流 1.5s 后取消 → `<unused49>` 死循环。
  链接：https://github.com/NousResearch/hermes-agent/issues/87697
- **#95054（无修复）** — `provider: ollama` fallback 链静默 `(None, None)`，配置冗余实际不存在。
  链接：https://github.com/NousResearch/hermes-agent/issues/95054
- **#84286 PR（已开 → 待合并，标签 `security`）** — 修复 tools/credential_files 中**配置侧凭据路径未走主存储 deny-list**的策略 gap（漏洞口径下属于 R3-C-006 / R3-C-016，合入价值高）。
  链接：https://github.com/NousResearch/hermes-agent/pull/84286
- **#95139 PR（待合并）** — Desktop/TUI 现存会话在 `fallback_providers` 变更后能即时切换 Codex 账户（之前需重建会话）；同时修了 OAuth 重复凭据的处理逻辑。
  链接：https://github.com/NousResearch/hermes-agent/pull/95139
- **#95138 PR（待合并，OpenAI）** — `/v1/responses` 多轮 `previous_response_id` 链式出现"近 2 倍历史"幻影，由 API 层与 Agent 层消息身份规则不一致导致。
  链接：https://github.com/NousResearch/hermes-agent/pull/95138
- **#84678（无修复）** — Windows 无 Edge 环境下，desktop-update PowerShell 脚本的回退进度卡"出生即最小化"，用户只看见裸 PowerShell。
  链接：https://github.com/NousResearch/hermes-agent/issues/84678

### P3（中）
- **#93937（无修复）** — 注册型 Gateway 切换器泄漏旧 runtime sessionID，返回 `session not found`。
  链接：https://github.com/NousResearch/hermes-agent/issues/93937
- **#79005（无修复，跨 profile 污染）** — Desktop profile 切换期间 `session.create` 被路由到错误后端，state.db 被交叉污染；与关闭的 #41517 同源不同机制。
  链接：https://github.com/NousResearch/hermes-agent/issues/79005
- **#94859（无修复）** — 多 stdio MCP server 在 gateway 重启后首几分钟间歇性全部失败。
  链接：https://github.com/NousResearch/hermes-agent/issues/94859
- **#95078（无修复）** — 嵌套 Hermes 沿用过期 `TERMINAL_CWD` 环境变量覆盖了子进程的显式 cwd。
  链接：https://github.com/NousResearch/hermes-agent/issues/95078
- **#82367 PR（待合并，sweeper: risk-compatibility）** — Gateway 不再对已 `enabled: false` 的 platform 自动启用（共享 venv 场景下的关键一致性修复）。
  链接：https://github.com/NousResearch/hermes-agent/pull/82367

总体来看：**P1/P2 中以"Provider × Desktop × MCP"为交集的高危

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-26**
**数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度处于**中等偏低水平**：过去 24 小时内共录得 4 条 Issue 更新、1 条 PR 更新，**无新版本发布**，也**无 PR 被合并或关闭**。从内容分布看，社区关注点集中在**Bug 反馈与修复**（3 条 Bug 相关 Issue + 1 条对应修复 PR），同时出现 1 条面向边缘计算场景的全新功能提案。值得注意的是，仍有 3 条 Issue/PR 被标记为 `[stale]`，说明维护者在响应速度上存在一定积压。

---

## 2. 版本发布

**无新版本发布。** 当前最新可用的稳定版本仍为社区在 Issue #3281 中提及的 **0.3.1**，距离上一个有记录的发布节点已超过一个月。

---

## 3. 项目进展

**今日无 PR 合并，无明显代码层进展。**

仅有 1 条开放中的 PR：
- [#3340](https://github.com/sipeed/picoclaw/pull/3340) `fix(slack): set FileSize on media upload params` —— 由 octavioturra 提交，针对 Slack 渠道的图片上传失败问题提供修复（对应 Issue #3338）。该 PR 已存在 8 天但**仍处于待合并状态**，且被标记为 `[stale]`，尚未获得维护者审阅。

整体评估：项目代码主分支今日**未向前推进**，维护团队响应通道有待激活。

---

## 4. 社区热点

按评论数与社区反响排序：

| 排名 | 编号 | 标题 | 评论数 | 👍 | 状态 |
|------|------|------|--------|-----|------|
| 1 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy when history has a little bit long | 7 | 1 | OPEN / stale |
| 2 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server connection failure causes agent loop hang | 7 | 1 | OPEN |

**诉求分析**：
- **#3281** 反映了 Web UI 在长对话历史下的**前端性能退化问题**，影响核心交互体验，但已 stale 35 天，维护方未介入。
- **#3269** 描述的是 MCP（Model Context Protocol）服务端连接失败时，**Agent 主循环会无限挂起**，导致整个聊天接口失联——属于严重的功能性故障，且讨论度持续较高。

两个高互动议题均集中在"**可靠性与可用性**"这一共同诉求上。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度
- **[#3269](https://github.com/sipeed/picoclaw/issues/3269)** MCP 连接失败导致 Agent 循环挂起
  - 影响：用户界面完全停止响应，必须重启服务
  - 复现环境：picoclaw nightly (git: 2cf030d2) + Qwen3 + go1.25.11
  - **暂无修复 PR**

### 🟡 中严重度
- **[#3281](https://github.com/sipeed/picoclaw/issues/3281)** Web UI 长历史下输入卡顿
  - 影响：UX 体验下降，但功能仍可用
  - 复现环境：PicoClaw 0.3.1 + Go 1.25.11 + Web 渠道
  - **暂无修复 PR，已 stale**

### 🟢 低严重度（已有对应修复）
- **[#3338](https://github.com/sipeed/picoclaw/issues/3338)** Slack 不附加图片媒体内容
  - 根因：`SendMedia` 构建 `slack.UploadFileParameters` 时未设置 `FileSize`，被 slack-go SDK 在网络调用前拒绝
  - 复现环境：picoclaw 0.3.x
  - **已有修复 PR**：[#3340](https://github.com/sipeed/picoclaw/pull/3340)，但 PR 仍待审

---

## 6. 功能请求与路线图信号

今日出现 1 条**新提案**：

- **[#3345](https://github.com/sipeed/picoclaw/issues/3345)** Proposal: lightweight PicoClaw worker mode for household edge compute
  - 提案人：kvnloo（2026-08-25 新开）
  - 核心思路：在 PicoClaw 已有功能基础上提供"轻量 Worker 模式"，使其能在 RISC-V/ARM/MIPS 低成本开发板、Raspberry Pi、老旧 Android 手机（可用内存仅 10–20MB）等设备上运行分布式 Agent
  - 战略意义：与 Sipeed 自身的边缘硬件生态契合良好，若纳入路线图有望显著扩展 PicoClaw 的部署边界

**纳入下一版本的可能性判断**：低-中。该提案尚无任何评论或维护者反馈，依赖社区持续讨论与 PoC 验证。

---

## 7. 用户反馈摘要

从 Issue 内容提炼出的真实用户痛点：

1. **Web 前端性能焦虑**（#3281）：用户希望 PicoClaw Web UI 在长会话下能保持输入流畅，目前的卡顿让"日常对话"体验降级。
2. **错误处理鲁棒性不足**（#3269）：当外部依赖（MCP server）失败时，系统没有优雅降级或超时机制，而是直接挂起——反映出对生产环境稳定性场景的覆盖不够。
3. **Slack 集成完整性**（#3338）：图片上传失败暴露了上游 SDK 升级后的兼容性回归，社区希望官方渠道集成能"开箱即用"。
4. **边缘设备覆盖愿景**（#3345）：存在一类用户群体，他们手中有多台低算力设备 + 1 台高性能 PC，希望 PicoClaw 能成为跨设备协同的"调度中枢"。

总体满意度信号偏中性：核心 AI 代理能力未受质疑，但**外围渠道稳定性**与**错误处理**是当前主要的负面反馈来源。

---

## 8. 待处理积压

以下条目已进入 stale 状态或长期未获维护者响应，建议优先关注：

| 编号 | 类型 | 标题 | 状态 | 等待时长 |
|------|------|------|------|----------|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Issue | Web UI chat input laggy | OPEN / stale | ~36 天 |
| [#3338](https://github.com/sipeed/picoclaw/issues/3338) | Issue | Slack 媒体上传失败 | OPEN / stale | ~9 天 |
| [#3340](https://github.com/sipeed/picoclaw/pull/3340) | PR | fix(slack): set FileSize | OPEN / stale | ~9 天 |

**提醒**：
- [#3340](https://github.com/sipeed/picoclaw/pull/3340) 修复内容明确、变更范围小、风险低，建议维护者优先 review 与合并，可同时关闭 [#3338](https://github.com/sipeed/picoclaw/issues/3338)。
- [#3269](https://github.com/sipeed/picoclaw/issues/3269) 是当前最严重的稳定性问题，建议至少给出临时绕过方案或进度回复。
- [#3281](https://github.com/sipeed/picoclaw/issues/3281) 虽为 UX 问题，但 7 条评论反映出真实用户困扰，建议确认是否进入下一迭代。

---

*报告生成基于公开 GitHub 数据，统计窗口：2026-08-25 ~ 2026-08-26 UTC。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-08-26** | **数据来源：GitHub (qwibitai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 仓库在过去 24 小时保持较高活跃度，共收到 **50 条 PR 更新**（其中 16 条已关闭/合并，34 条仍待合并）和 **5 条新 Issues**，整体表现出"大量内部重构+安全加固+新功能并行推进"的态势。社区提交集中在 `setup` 重构（驱动协议、preseed 目录、结构化健康检查）、`codex`/`compose` 双 adapter 整合以及若干安全相关修复。**未发布新版本**，HEAD 仍在持续整合阶段，建议关注即将形成的下一发布包是否包含 `feat/durable-host-integration` 合流带来的运行时语义变化。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发布信息未出现在本次数据范围内，建议参考 [GitHub Releases 页](https://github.com/qwibitai/nanoclaw/releases) 以确认当前版本基线。

---

## 3. 项目进展

今日关闭/合并的 PR 集中在 **核心代码质量与运行时正确性** 两个方向，体现出明显的"地基加固"特征：

| PR | 类别 | 影响 |
|---|---|---|
| [#3536](https://github.com/qwibitai/nanoclaw/pull/3536) | fix(compose) | 将 `CLAUDE.md` 中所有 `@` import 内联为单一项目文档，绕开 Claude Code 因安全门禁拦截目录外 import 的回归（新版 Claude Code 拒绝跨目录 `@` 导入，"decline once" 会永久禁用）。 |
| [#3539 / #3537](https://github.com/qwibitai/nanoclaw/pull/3539) | refactor(codex) | 删除 Codex 自有的 composer，复用 trunk 的共享 composer；修复 `cli_scope: disabled` 仍被下发 `ncl tasks` 手册的死指令问题。 |
| [#3540](https://github.com/qwibitai/nanoclaw/pull/3540) | fix(opencode) | 让 `opencode serve` 在 agent workspace 而非 `/workspace/group` 中执行，使其项目文档遍历能找到正确根路径。 |
| [#3544](https://github.com/qwibitai/nanoclaw/pull/3544) | fix(slack) | Slack 房间交接（已被 re-open 为 [#3545](https://github.com/qwibitai/nanoclaw/pull/3545)）。 |
| [#2656](https://github.com/qwibitai/nanoclaw/pull/2656) | fix(add-mnemon) | 将 mnemon setup 从 `entrypoint.sh` 迁回 `main()`，因为宿主 spawn 时会覆盖 ENTRYPOINT。 |

**整体判断：** 项目正在把"分散在每个 adapter 里的 copy-paste"收拢到 trunk 共享层，属于一次结构性而非功能性推进。短期内不会带来新特性，但能显著降低后续维护成本。

---

## 4. 社区热点

按评论数/代码体量排序，今日最受关注的讨论集中在以下几条：

- **[#3538 Proposal: isolated NanoClaw containers as opt-in household edge workers](https://github.com/qwibitai/nanoclaw/issues/3538)** —— 用户提出利用家庭闲置 PC/NAS 作为 NanoClaw 容器的宿主，替代购买 GPU 或租用云端 worker。诉求核心是"低门槛 + 边缘部署"，与项目的小容器、隔离化设计高度契合，是潜在的路线图级别信号。
- **[#3543 add-dial: owner_email shell injection](https://github.com/qwibitai/nanoclaw/issues/3543)** —— 安全报告贴中带入格邮箱地址（apostrophe 邮箱）和 shell metacharacter 都能通过 `add-dial` 的校验进入 `bash -c …`。该问题暴露了 SKILL 层缺乏 shell 转义规范，影响登录流程可用性。
- **[#3311 fix(agent-runner): route scheduled-task errors to the operator](https://github.com/qwibitai/nanoclaw/pull/3311)** —— 创建近 8 天、仍在 OPEN 的稳态 PR，已被未来合并多次更新，等待维护者最终 review。

**诉求分析：** 社区关注点正从"功能可用"转向"工程严谨度"（安全、转义、setup 可重复、host 可观测），这通常预示项目进入成熟期。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 编号 | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 **High / 安全** | [#3543](https://github.com/qwibitai/nanoclaw/issues/3543) | `add-dial`/`add-dial-tool` SKILL 中 `owner_email` 未加引号代入 `bash -c`，含 `'` 或 metacharacter 的邮箱可绕过校验影响 sign-in | ⚠️ 暂无 fix PR |
| 🟠 **Medium / 升级路径** | [#3529](https://github.com/qwibitai/nanoclaw/issues/3529) | `update-nanoclaw` 在 skill refresh 时把所有 `src/channels/index.ts` 中的 import 都视为"来自 skill"，用户本地 adapter 会被校验失败或被覆盖，且无 opt-out | ⚠️ 暂无 fix PR |
| 🟠 **Medium / 升级路径** | [#3532](https://github.com/qwibitai/nanoclaw/issues/3532) | `add-*-tool` 对 agent 范围的限定只对已存在的 group 生效；新创建的 group 会自动获得该 tool | ⚠️ 暂无 fix PR |
| 🟠 **Medium / 状态一致性** | [#3535](https://github.com/qwibitai/nanoclaw/issues/3535) | `add-vercel` 走 rsync 真实 skill 副本，导致 spawn-time symlink sync 阻塞，group 被钉在过期 skill | ⚠️ 暂无 fix PR |
| 🟡 **Low / 输出缓冲** | [PR #3452](https://github.com/qwibitai/nanoclaw/pull/3452) | 捕获的 update 命令缺少真实输出 buffer | ✅ 已有 fix PR（待合并） |
| 🟡 **Low / 启动漂移** | [PR #3542](https://github.com/qwibitai/nanoclaw/pull/3542) | 启动采纳时未清理 `container_status` 漂移 | ✅ 已有 fix PR（待合并） |
| 🟡 **Low / 易用性** | [PR #3525](https://github.com/qwibitai/nanoclaw/pull/3525) | wizard 中"哪些 agent 可用 Dial"步骤无法 echo 输入 | ✅ 已有 fix PR（与 [#3432](https://github.com/qwibitai/nanoclaw/pull/3432) 拆分后提交） |

**关键观察：** 4 个被报告的 Bug 均来自同一作者 `glifocat`，且集中在 `*/SKILL.md` 周边，说明**当前主要风险面已从核心运行时迁移到 SKILL 安全边界**，建议维护者优先组织一次 "skills shell-escaping + scoping defaults" 主题专项修复。

---

## 6. 功能请求与路线图信号

- **[#3538 household edge workers](https://github.com/qwibitai/nanoclaw/issues/3538)**：明显具备路线图级别的潜力，可与 [#3528 feat(runner): lease-id claimants, restart-overlap protection](https://github.com/qwibitai/nanoclaw/pull/3528) 配合实现"多宿主仲裁"。如果维护者接受，将是 NanoClaw 在"个人 AI 助手 + 家庭边缘基础设施"定位上的一次重要拓展。
- **[#3298 feat(channels): add local web chat](https://github.com/qwibitai/nanoclaw/pull/3298)**：解决"首次安装需要第三方账号"的入门摩擦，让新鲜安装即可与 agent 对话；非常可能成为下一个 minor 版本的功能亮点。
- **[#3485 setup driver protocol (nanoclaw.driver.v1)](https://github.com/qwibitai/nanoclaw/pull/3485)** + **[#3486 preseed catalog](https://github.com/qwibitai/nanoclaw/pull/3486)** + **[#3487 --tz preseed](https://github.com/qwibitai/nanoclaw/pull/3487)**：三件套一起把 wizard 从"只能人肉交互"改成"可被脚本驱动"。对自动化部署、CI 镜像、企业预配置极有价值。
- **[#3482 feat: expose structured host health](https://github.com/qwibitai/nanoclaw/pull/3482)**：补齐可观测性短板，是健康检查、监控集成的前置条件。

**进入下一版本概率排序（主观估计）：** setup driver (#3485/#3486/#3487) > structured host health (#3482) > local web chat (#3298) > edge workers (#3538)。前两项已具备合并条件，后两项仍需更多讨论。

---

## 7. 用户反馈摘要

由于 5 条新 Issues 评论数均为 0，本节主要从 Issue 描述中提取用户视角：

- **真实痛点 1（输入校验与 shell 转义缺失）**：用户报告带 `'` 的邮箱无法完成 add-dial 登录流程——表明 SKILL 与宿主 shell 的边界尚未被工程化解决（[#3543](https://github.com/qwibitai/nanoclaw/issues/3543)）。
- **真实痛点 2（升级破坏用户自定义内容）**：本地手写 adapter 在 `update-nanoclaw` 后被错误覆盖，反映 skill 设计与本地代码耦合度过高（[#3529](https://github.com/qwibitai/nanoclaw/issues/3529)）。
- **真实痛点 3（agent 权限模型定义含糊）**：用户在事后才发现"新建的 group 默认就有 tool"，说明 `add-*-tool` 的 scoping 语义没有清晰传达给操作者（[#3532](https://github.com/qwibitai/nanoclaw/issues/3532)）。
- **使用场景（来自 #3538）**：个人用户希望复用家中 NAS/旧笔记本作为 agent 宿主，倾向于"自托管 + 低运维" 模式，**这正是当前架构几乎可以天然支持的方向**。
- **隐含满意度信号**：从 [#3536](https://github.com/qwibitai/nanoclaw/pull/3536) 这类 PR（修复 Claude Code 新版 import 安全门禁带来的回归）可以看出，用户在一个快速变化的外部生态（Claude Code）上保持了 NanoClaw 的向前兼容——这本身就是正面信号。

---

## 8. 待处理积压

| 编号 | 类型 | 标题摘要 | 打开天数（约） | 关注建议 |
|---|---|---|---|---|
| [#2431](https://github.com/qwibitai/nanoclaw/pull/2431) | PR | Conditional thread policy for Slack adapter (DM=top-level, channels=threaded) | ~106 天 | ⚠️ **超长待审**，建议维护者明示去留 |
| [#3311](https://github.com/qwibitai/nanoclaw/pull/3311) | PR | fix(agent-runner): route scheduled-task errors to the operator | ~8 天 | 多次更新，差一锤定音 |
| [#3545](https://github.com/qwibitai/nanoclaw/pull/3545) | PR | fix(slack): add explicit room handoffs（自 #3544 re-open） | 今日 | 关注是否引入新 reviewer 反馈 |
| [#3528](https://github.com/qwibitai/nanoclaw/pull/3528) | PR | lease-id claimants, restart-overlap protection | 今日 | 体量大，依赖 `feat/durable-host-integration` 合流 |

**维护者提醒：**
1. [#2431](https://github.com/qwibitai/nanoclaw/pull/2431) 已挂起超 3 个月，建议给出明确结论（合并 / 关闭 / 重写），以免阻塞贡献者；
2. glifocat 今日连发 4 条 SKILL 相关 Bug，且**均无对应 fix PR 跟进**，建议团队在 PR 板上指派一名 owner 负责 SKILL hardening 主题；
3. setup 三件套（#3485 / #3486 / #3487）已具备合并条件，避免因零碎 review 而拖入下一周期。

---

*日报完。所有链接均指向仓库 `qwibitai/nanoclaw` 对应页面。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**报告日期**：2026-08-26
**数据范围**：过去 24 小时
**仓库地址**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 过去 24 小时整体活跃度处于**低水位运行**状态，社区交互节奏趋缓。Issue 维度仅记录到 1 条新建/活跃讨论（[Issue #994](https://github.com/nullclaw/nullclaw/issues/994)），Pull Request 维度无新增或更新，版本发布维度零活动。值得关注的是，尽管数字层面偏冷清，该条新 Issue 提出的"家庭边缘 mesh"方向触及了项目核心架构组件（`RuntimeAdapter`、`Peripheral` vtable、Docker/WASM 适配器等），具备较强的产品战略讨论价值，建议维护者及时跟进并给出官方判断。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内未观察到任何 Release 标签或版本变更，跳过本节。

---

## 3. 项目进展

**今日无可合并/关闭的 PR。** 没有 Pull Request 提交或合并记录，意味着代码层面的主线推进为零。建议关注是否存在：
- 长期悬而未决等待 review 的 PR；
- CI/构建流水线阻塞导致维护者无法合并。

如需后续日报增加"积压 PR 列表"，可在任务中补充 PR 维度数据。

---

## 4. 社区热点

### 🔥 今日最热讨论：[Issue #994](https://github.com/nullclaw/nullclaw/issues/994)

| 维度 | 数据 |
|------|------|
| 标题 | Household edge mesh using RuntimeAdapter workers and signed receipts |
| 作者 | kvnloo |
| 创建/更新时间 | 2026-08-25 |
| 评论数 | 0 |
| 👍 反应 | 0 |
| 状态 | OPEN |

**诉求分析**：
该 Issue 是一份**架构演进方向的提案**，而非传统缺陷报告。作者视角定位为"运营商/家庭用户"，指出多数家庭拥有多台闲置 PC、笔记本、安卓手机，并提出利用 NullClaw 现有原语（Zig runtime、`RuntimeAdapter`、`Peripheral` vtable、Docker/WASM 适配器、硬件发现、隧道、Channels、Tools、严格体积/内存目标）构建一个**家庭边缘 mesh 节点网络**，并通过 **signed receipts**（签名回执）保证节点间任务/消息的可审计性。

其潜在价值在于：
- 将 NullClaw 从"个人 AI 助手 runtime"扩展为"轻量家庭算力总线"；
- 与项目既定的极小体积/低内存目标契合，差异化优势明显；
- signed receipts 是分布式 AI agent 协同的关键缺失件，顺应行业（Anthropic/OpenAI 等）正在讨论的 agent-to-agent 认证趋势。

**建议维护者动作**：对 Issue 加 `enhancement`、`discussion`、或 `needs-design` 标签，并明确是否进入 2026 Q4 路线图。

---

## 5. Bug 与稳定性

**今日无新增 Bug/崩溃/回归报告。** 未观察到标记为 `bug` 的 Issue 更新。本节暂略。

> 📌 如项目当前存在未修复的 P0/P1 Bug，建议在评论中补充"已知严重问题清单"以完善日报诊断价值。

---

## 6. 功能请求与路线图信号

### 信号一：家庭边缘 mesh + signed receipts
- **来源**：[Issue #994](https://github.com/nullclaw/nullclaw/issues/994)
- **状态**：OPEN，尚未被项目方采纳或拒绝
- **纳入下一版本可能性**：中等偏高
  - ✅ 与现有架构契合度高（reuses 多数已有 primitives）
  - ✅ 符合"轻量、家庭、个人 AI"的项目定位
  - ✅ signed receipts 是开发者社区普遍关注的可组合性补强
  - ⚠️ 提案尚未给出 RFC 级别的 spec，具体收益指标/边界条件仍待补全

### 信号二：可观测性 & 算力调度
- **推断来源**：Issue #994 中暗示需要"接收任务、回执、审计"链路
- **建议**：若项目方认可该方向，可考虑在下一里程碑加入 worker discovery 协议与 receipt chain 的最小可用版本（MVP）。

---

## 7. 用户反馈摘要

由于 [Issue #994](https://github.com/nullclaw/nullclaw/issues/994) **评论数与反应数均为 0**，尚无来自社区的真实讨论沉淀。但从提案文本本身可提炼以下**隐含用户痛点**：

| 痛点 | 关联诉求 |
|------|----------|
| 家中多台设备算力闲置，无法编排协同 | 边缘 mesh 编排层 |
| 节点间任务分发缺乏可追溯/可审计机制 | signed receipts 链路 |
| 现有家用助理方案体积/资源占用过大 | 极小 runtime 的差异化卖点 |
| Docker/WASM 适配器已具备，但缺少统一调度面 | RuntimeAdapter 作为统一抽象层 |

**使用场景画像**：开源开发者 / 自托管爱好者家中拥有多设备，希望部署一个轻量、低内存、可验证的家庭级 AI agent 集群。

**满意度**：无法从该单条提案判断整体满意度，需要补充更广范围的 Issue/PR 评论样本。

---

## 8. 待处理积压提醒

- 📂 **[Issue #994](https://github.com/nullclaw/nullclaw/issues/994)**（创建于 2026-08-25）
  - 当前评论/反应：**0**
  - 风险：方向性 Issue 若 7 天内无维护者回应，提交者可能降低参与热情。
  - **建议**：维护者在 48 小时内至少留下"感谢提议 / 分类标签 / 后续计划"任一类型的官方响应，以免社区协同节奏冷却。

> ⚠️ 由于本次数据快照仅包含过去 24 小时窗口，无法识别"长期"未响应 Issue 的全量列表。如需完整积压清单，请扩展数据采集时间窗（例如 30/90 天无更新）。

---

## 📊 健康度仪表盘

| 指标 | 数值 | 评估 |
|------|------|------|
| Issue 吞吐量 | 1 | 🟢 低（正常） |
| PR 吞吐量 | 0 | 🟡 需观察（无活跃代码协同） |
| 版本发布节奏 | 0 | 🟡 待补充历史频率对比 |
| 社区响应度 | 0 评论 | 🔴 待关注（Issue #994 需响应） |
| 战略路线信号 | 1（边缘 mesh） | 🟢 有价值提案 |

---

*本日报由开源项目动态分析流程自动生成，基于 GitHub Issues / Pull Requests / Releases 公开数据汇总，所有内容均附原始链接以便溯源。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-08-26 | 数据窗口：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日保持高强度迭代节奏，单日触达 37 个 Issue 与 23 个 PR，呈现"多线并行 + 集中关闭"的特征。最显著的进展来自 CI 基础设施的 T2/T3/T4 三阶段收敛（[#7799](https://github.com/nearai/ironclaw/issues/7799) 及衍生 PR 已全部关闭），以及通知中心（Notification Center）从临时方案向持久化收件箱的全面切换。设计系统进入 Phase 3a 的执行阶段（[#7831](https://github.com/nearai/ironclaw/pull/7831)），WebUI 多项本地化与组件一致性收尾同步推进。整体活跃度评级：**高**，健康度良好，无新版本发布。

---

## 2. 版本发布

⚠️ **本窗口无新版本发布**。当前主线为 v1.4.0 路线图推进阶段，多项 Epic（[#7732](https://github.com/nearai/ironclaw/issues/7732)、[#7781](https://github.com/nearai/ironclaw/issues/7781)、[#7687](https://github.com/nearai/ironclaw/issues/7687)）仍处开放状态。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#7817](https://github.com/nearai/ironclaw/pull/7817) | **ci: nextest test pipeline, full-failure signal, PR unthrottle (T2)** | 关闭 [#7799](https://github.com/nearai/ironclaw/issues/7799)。将 `Tests (Reborn)` 工作流切换至 cargo-nextest，单次运行可输出全部失败用例，并解除 PR 并行节流，CI 周期显著缩短 |
| [#7819](https://github.com/nearai/ironclaw/pull/7819) | **ci: PR/queue check convergence (T3)** | 关闭 [#7800](https://github.com/nearai/ironclaw/issues/7800)。消除三类"队列专属失败"模式，PR 阶段默认开启 clippy `default-features` 检查 |
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | **ci: canonical preflight (T4, tasks 1-5)** | `preflight-gates.sh` 成为唯一确定性闸门清单，被本地 pre-push 与 CI 共享，杜绝本地绿/CI 红分歧 |
| [#7820](https://github.com/nearai/ironclaw/pull/7820) | **test: scope-isolation suite consolidation probe** | T2 的测量驱动跟进，量化合并后的测试套件节省 |
| [#7818](https://github.com/nearai/ironclaw/pull/7818) | **feat(subagent): background mode (slices 2b+2c)** | R2 后台子代理的生产端落地，与先前合并的 [#7788](https://github.com/nearai/ironclaw/issues/7788)（2a 表面）配对生效 |
| [#7846](https://github.com/nearai/ironclaw/pull/7846) | **refactor(notifications): retire legacy approval fallback** | 关闭 [#7706](https://github.com/nearai/ironclaw/issues/7706)。移除旧的 `threads?needs_approval=true` 路径与 localStorage 已读状态，持久化收件箱成为唯一通知源 |
| [#7861](https://github.com/nearai/ironclaw/pull/7861) | **fix(extensions): restore device-link guidance** | 修复 Telegram 设备链接激活路径上的引导丢失问题（见 [Bug 章节](#5-bug-与稳定性)） |
| [#7816](https://github.com/nearai/ironclaw/pull/7816) | **feat(webui): OOBE suggestion drawer** | OOBE 建议抽屉补充"刷新"与"连接"入口，是 [#7815](https://github.com/nearai/ironclaw/issues/7815) 的前端一半 |
| [#7894](https://github.com/nearai/ironclaw/pull/7894) | **ci: reduce required scope checkout transfer** | 减少 required-check 作用域任务的数据传输量，缩短 cold start |

**整体判断**：今日是"工程治理型"发布日。CI 三阶段集中落地、通知系统架构收尾、子代理后台模式点亮——这些均不直接体现在用户面功能，但显著抬高了 v1.4.0 的可发布基线。

---

## 4. 社区热点

**评论最多 Issue（活跃度信号）：**

1. **[#7732](https://github.com/nearai/ironclaw/issues/7732)（9 条评论）— Persistent per-user sandbox with iron-proxy**
   - Epic 级别，v1.4.0 路线图核心议题。诉求：放弃"每次 shell 命令起停容器"的临时模式，转向按 `(tenant, user)` 持久化的用户沙箱，并推迟 loop executors。讨论热度反映此为路线图共识形成的关键节点。

2. **[#7799](https://github.com/nearai/ironclaw/issues/7799)（4 条评论，已关闭）— CI T2 nextest 流水线**
   - 讨论热度集中在如何保持"测什么不变、怎么跑更快"的契约，最终由 [#7817](https://github.com/nearai/ironclaw/pull/7817) 落地。

3. **[#7038](https://github.com/nearai/ironclaw/issues/7038)（3 条评论，已关闭）— Design System Phase 1**
   - Phase 1（Storybook + 目录）正式收官，重新切分为 Phase 2–3（[#7781](https://github.com/nearai/ironclaw/issues/7781)）与 Phase 4–5（[#7782](https://github.com/nearai/ironclaw/issues/7782)）。

4. **[#7862](https://github.com/nearai/ironclaw/issues/7862)（3 条评论）— Device link 失败**
   - 在 Railway QA 实例上首次发现，影响 Telegram 设备链接主路径，已触发 [#7861](https://github.com/nearai/ironclaw/pull/7861) 修复与后续 [#7887](https://github.com/nearai/ironclaw/issues/7887) 拆解。

5. **[#7891](https://github.com/nearai/ironclaw/issues/7891)（2 条评论）— Extension capability 未投影 + 24 KiB head-slice 性能损耗**
   - 性能类 Issue 中评论最密集，反映用户对"agent 沉默 19 秒无可见动作"的耐心阈值。

**讨论背后诉求**：基础设施可观测性（CI 反馈周期）、沙箱持久化（v1.4.0 形态）、WebUI 视觉与一致性、扩展系统稳定性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 现象 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 **High（性能）** | [#7891](https://github.com/nearai/ironclaw/issues/7891) | 两封 Gmail `get_message` 调用耗时 274 ms / 290 ms，但整轮 19.7 秒、其中 19.2 秒为模型推理——49 KiB 原始 MIME 头被无意义地送入 prompt。 | ❌ 待修复 |
| 🔴 **High（功能）** | [#7892](https://github.com/nearai/ironclaw/issues/7892) | Agent loop 中的延迟工具重复发现 15 次仍未触发，123 秒内仅 4 个独立调用，无终止守卫。 | ❌ 待修复 |
| 🟠 **Medium（可用性）** | [#7862](https://github.com/nearai/ironclaw/issues/7862) | Telegram 设备链接在未配置 `telegram_api_id/api_hash` 时返回通用错误"Something went wrong while linking"，无引导。 | ✅ [#7861](https://github.com/nearai/ironclaw/pull/7861) 已关闭 |
| 🟠 **Medium（可用性）** | [#7887](https://github.com/nearai/ironclaw/issues/7887) | 扩展查找路径上仍残留设备链接的临时搭建指令。 | �️ 拆分自 [#7861](https://github.com/nearai/ironclaw/issues/7861)，fix 仅覆盖 install/activate 路径 |
| 🟡 **Low（运维）** | [#7888](https://github.com/nearai/ironclaw/issues/7888) | 多实例上"获取日志"操作无限挂起，两个独立实例复现。 | � 待修复 |

**信号**：性能型 Bug（[#7891](https://github.com/nearai/ironclaw/issues/7891)、[#7892](https://github.com/nearai/ironclaw/issues/7892)）目前尚无对应 PR，需优先关注；同时 [#7884](https://github.com/nearai/ironclaw/pull/7884) 提出的"10 分钟 wall-clock 上限 + 模型阶段 retry loop 强制关门"机制或可同时缓解 [#7892](https://github.com/nearai/ironclaw/issues/7892)。

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 路线图归属 | 当前实现度 |
|---|---|---|---|
| [#7895](https://github.com/nearai/ironclaw/issues/7895) | 在 Settings UI 增加 personality（agent.md）编辑器 | 用户入门 | 仅 Issue，无 PR |
| [#7867](https://github.com/nearai/ironclaw/issues/7867) | WebUI composer 语音输入 | WebUI Epic 体系 | 仅 Issue，无 PR；Epic 化讨论中 |
| [#7871](https://github.com/nearai/ironclaw/issues/7871) | Slack-to-console bridge + 富交互 UX | 渠道扩展，与 [#4625](https://github.com/nearai/ironclaw/issues/4625) Slack 渠道代理互补 | Epic 启动阶段 |
| [#7889](https://github.com/nearai/ironclaw/issues/7889) | 调度器/编排器支持远程边缘 worker | 基础设施扩展 | RFC 阶段 |
| [#7893](https://github.com/nearai/ironclaw/issues/7893) | 自动化 lessons 文件 + fire-time 注入 | Memory 模块增强 | 仅 Issue，无 PR |
| [#7885](https://github.com/nearai/ironclaw/issues/7885) | 集成 OpenSSF Scorecard | 安全治理 | 已有配套 PR [#7886](https://github.com/nearai/ironclaw/pull/7886)（待合并） |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | WebUI 提供 IronHub agent link 操作面板 | 渠道扩展 | XL 级 PR，仍 OPEN |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | 统一编码工具表面（read/write/edit/glob/grep/bash） | Reborn 核心 | XL 级 PR，仍 OPEN，争议面较大 |
| [#7831](https://github.com/nearai/ironclaw/pull/7831) | Design System Phase 3a（Chromatic 通道 + 缺失 token 轴） | v1.4.0 设计系统 | XL 级 PR，仍 OPEN |

**入版概率评估**：OpenSSF Scorecard（[#7886](https://github.com/nearai/ironclaw/pull/7886)）和小幅 WebUI 重构类 PR（[#7881](https://github.com/nearai/ironclaw/pull/7881)、[#7882](https://github.com/nearai/ironclaw/pull/7882)、[#7883](https://github.com/nearai/ironclaw/pull/7883)）进入 v1.4.0 概率最高；语音输入、远程 worker、personality 编辑器多为下个版本窗口的种子议题。

---

## 7. 用户反馈摘要

从 Issue 评论与摘要中可提炼的真实用户痛点：

- **"agent 卡住但毫无反馈"** — 表现为 [#7892](https://github.com/nearai/ironclaw/issues/7892) 中的 123 秒无效循环与 [#7891](https://github.com/nearai/ironclaw/issues/7891) 中的 19 秒隐性 token 消耗。用户期待"看得到在做什么"的反馈与显式终止边界。
- **"设备链接失败提示毫无线索"** — 来自 [#7862](https://github.com/nearai/ironclaw/issues/7862)，用户面对"Something went wrong while linking"完全无从下手；[#7861](https://github.com/nearai/ironclaw/pull/7861) 修复后此类体验被转化为引导式提示。
- **"日志拿不到就卡死"** — [#7888](https://github.com/nearai/ironclaw/issues/7888) 中用户在两个独立实例上确认行为，是运维侧的硬阻塞。
- **"人格设置找不到入口"** — [#7895](https://github.com/nearai/ironclaw/issues/7895) 中用户的具体表述："me trying to set up personality with ironclaw... it would be nice to have a section where I can do this"——反映 onboarding 后置步骤暴露不足。
- **"WebUI 没有语音"** — [#7867](https://github.com/nearai/ironclaw/issues/7867) 中明确点出"Send voice"已在 Slack/Telegram 可用，WebUI 反而缺位，是渠道能力不对称的典型痛点。

正面信号：CI 流水线收敛（[#7799](https://github.com/nearai/ironclaw/issues/7799) 闭环）将直接缩短开发者反馈环，间接改善社区贡献体验。

---

## 8. 待处理积压

**长期开放需关注的高优先级项：**

| Issue | 主题 | 创建/更新 | 备注 |
|---|---|---|---|
| [#4625](https://github.com/nearai/ironclaw/issues/4625) | Slack channel-routed personal and team agents | 2026-06-09 创建，今日有更新 | **创建已 2.7 个月**，属 suggested_P1 级别；与今日新开 Epic [#7871](https://github.com/nearai/ironclaw/issues/7871) 协同空间大，建议纳入同一里程碑 |
| [#7732](https://github.com/nearai/ironclaw/issues/7732) | Persistent per-user sandbox epic | 2026-08-18 | v1.4.0 路线图核心，9 条评论显示已进入收敛阶段，需维护者给出明确实施切片 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | 统一编码工具表面（XL） | 2026-08-11 OPEN | 大型重构 PR，已开放 2 周，建议分配专门 reviewer 推动 |
| [#751

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-08-26**

---

## 1. 今日速览

LobsterAI 仓库过去 24 小时呈现**高频迭代、合并密集**的开发态势：共 11 个 PR 更新，其中 9 个已完成合并/关闭，2 个仍处于待处理状态；同日还发布了 **2026.8.25** 版本，并伴随 **2026.8.21** 版本 release notes 的同步发布。Issues 端表现平淡，仅新增 1 条社区运营类问题（微信群扩容请求），无功能性 Bug 报告。整体节奏健康，仓库主线围绕"资料库（library）/ 产物（artifacts）体验优化"和"设置（settings）补全"两条线索推进，维护者响应及时。

---

## 2. 版本发布

### 🚀 Release 2026.8.25（最新版本）

**核心变更（基于相关 PR #2513、#2524）**：
- **feat: library** —— 资料库能力引入/扩展
- **feat(library): 增强跨平台缩略图与本地产物生命周期** —— 优化本地产物在多平台下的缩略图处理及生命周期管理
- **feat(library): 优化本地产物预览与操作体验** —— 提升预览与交互流程

> ⚠️ 该 Release notes 在数据截断时未完整列出，请参考 [Release 2026.8.25](https://github.com/netease-youdao/LobsterAI/releases) 完整条目。从同期合并的 PR #2531、#2533、#2529 推断，本版本大概率同步纳入了本地产物刷新闪烁修复、网页/本地服务预览区分、资料库埋点与发布转化归因等改动。

### Release 2026.8.21（前序版本）

**核心变更**：
- **feat(dsh): add usage analytics for enable toggle and workbench open**（PR #2515）
- **feat: update dsh to 0.1.1-rc.1**（PR #2516）
- **refactor(dsh): move usage analytics ...**（PR 摘要截断）

> 📌 两个版本均集中在资料库与 DSH（Desktop Shell Hook？）相关能力。**暂未发现标记为 breaking 的 API 变更说明**，如有自定义脚本或第三方接入 dsh 模块，需关注 0.1.1-rc.1 行为变化。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响面 | 价值评估 |
|---|---|---|---|
| [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) | fix(library): 修复本地产物后台刷新闪烁 | renderer, main | ⭐⭐⭐⭐ 显著提升稳定性，新增批量查询接口与并发控制 |
| [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) | fix(artifacts): 区分网页与本地服务的预览展示 | renderer, docs, artifacts | �⭐⭐⭐ 重要 UX 修复，补齐 HTM 文件图标与策略测试 |
| [#2529](https://github.com/netease-youdao/LobsterAI/pull/2529) | feat(analytics): 完善资料库埋点与发布转化归因 | renderer, artifacts | ⭐⭐⭐⭐ 数据驱动建设，移除独立网站入口并归口资料库 |
| [#2530](https://github.com/netease-youdao/LobsterAI/pull/2530) / [#2535](https://github.com/netease-youdao/LobsterAI/pull/2535) | feat(settings): add plan model catalog | renderer / renderer | ⭐⭐⭐ 计划模型目录落地，sticky 分类控件体验佳 |
| [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) | fix(sidebar): fade out login promo tip | renderer | ⭐⭐ 小幅 UX 优化，5s 后淡出免费 token 提示 |
| [#2534](https://github.com/netease-youdao/LobsterAI/pull/2534) | Release/2026.8.20 | 全链路 | ⭐⭐⭐ 版本发布分支归档 |
| [#1275](https://github.com/netease-youdao/LobsterAI/pull/1275)、[#1276](https://github.com/netease-youdao/LobsterAI/pull/1276) | CI 依赖升级（dependabot） | ci | ⭐⭐ 维护性升级 |

**综合评估**：今日主线聚焦 **资料库/产物体验闭环**，从稳定性（#2531）→ 显示区分（#2533）→ 数据埋点（#2529）→ 商业归因（#2529）形成完整链路。设置侧的 plan model 目录（#2530/#2535）补齐了订阅模型发现路径。**项目整体在"商业化可见性 + 内容资产沉淀"方向上又迈出坚实一步。**

---

## 4. 社区热点

由于 Issues 端仅 1 条新增且无 PR 评论数据，今日社区讨论度**偏低**。最具代表性的社区信号：

- 🗨️ **[Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536)** —— *"WeChat group is Full. Anticipating for another wechat group!"*
  - 作者：MurrayHubert ｜ 评论：1 ｜ 👍：0
  - **诉求分析**：典型的用户社群扩容请求，说明产品已积累了一定规模的早期用户，**官方社群运营容量跟不上用户增长**。建议维护者考虑：(1) 扩容或建立 2 群；(2) 在 README 中引导用户到 Discord/论坛等替代渠道；(3) 闭环反馈，避免因"满群"造成用户流失。

PR 端评论活跃度同样低迷，所有合并 PR 的评论数均显示为 `undefined`，可能反映仓库主要采用 squash merge 或自动合并流程，外部贡献者参与度有限。

---

## 5. Bug 与稳定性

| 严重度 | Bug 描述 | 状态 | Fix PR |
|---|---|---|---|
| 🟡 中 | 本地产物后台刷新闪烁、已有内容退回整页骨架 | ✅ 已修复 | [#2531](https://github.com/netease-youdao/LobsterAI/pull/2531) |
| 🟡 中 | Artifact 预览混淆 HTML 网页与本地服务 | ✅ 已修复 | [#2533](https://github.com/netease-youdao/LobsterAI/pull/2533) |
| 🟢 低 | 登录后免费 token 提示长时间停留 | ✅ 已修复 | [#2532](https://github.com/netease-youdao/LobsterAI/pull/2532) |

> 📊 **今日用户报告的 Bug 数量为 0**，以上均为主动修复项。仓库稳定性表现良好，无新引入的崩溃/回归报告。

---

## 6. 功能请求与路线图信号

### 显性需求
- **[Issue #2536](https://github.com/netease-youdao/LobsterAI/issues/2536)**：增加微信群/官方社群容量或替代渠道 —— 已被合并视为下个版本的"运营侧待办"。

### 潜在方向（从 PR 摘要推断）
- **会话分支（Session Fork）**：[PR #1159](https://github.com/netease-youdao/LobsterAI/pull/1159) 由 @vdorchan 自 2026-03-31 提出，已开放 5 个月未合并。该特性允许从 cowork 会话详情页"⋯ → 创建分支会话"复制会话副本，应对实验性追问场景。**建议优先纳入下一版本**，因其动机清晰、与多轮迭代 AI 助手的产品形态高度契合。

### 设置侧的演进
- Plan model catalog（#2530/#2535）已合并，暗示官方在加强"模型选择 → 订阅"路径，可能为后续商业化功能（套餐对比、限额提示）打基础。

---

## 7. 用户反馈摘要

由于今日仅 1 条 Issue 且评论极少（评论：1，👍：0），**用户反馈样本极为有限**。可提炼的真实声音：

- 🎯 **MurrayHubert（#2536）**：明确表达对官方社群的依赖与期待，希望被纳入下一批用户沟通渠道——这是**早期产品用户忠诚度的积极信号**，但运营承载力是瓶颈。

> ⚠️ **数据盲区提示**：缺少 PR 评论数据，无法判断外部贡献者对最新合并（#2531/#2533/#2529）的反馈。建议项目方公开 Review/Discussion 渠道或鼓励 issue 化讨论，以丰富用户声音采集。

---

## 8. 待处理积压（提醒维护者关注）

以下 PR 已开放**超过 4 个月**，需维护者明确处置策略（合并 / 关闭 / 重新评估）：

| PR | 标题 | 作者 | 开放时长 | 建议 |
|---|---|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump electron group (40.2.1 → 43.4.1) | dependabot[bot] | 2026-04-02 起（约 5 个月） | 🟠 **安全相关**：Electron 大版本跨度（40 → 43）可能含安全修复与行为变更，建议**尽快 review 并合并或拆分** |
| [#1159](https://github.com/netease-youdao/LobsterAI/pull/1159) | feat(cowork): add session fork | @vdorchan | 2026-03-31 起（约 5 个月） | 🟡 功能性 PR，需维护者决策是否纳入产品路线图；若近期无计划，建议明确回复作者以避免社区冷启动失败 |

> 📈 **健康度提示**：长期积压 2 条，且 1 条涉及 Electron 安全升级，**建议在下一次版本（2026.9.x）发布前完成清理**，以避免依赖腐化与社区贡献者流失。

---

### 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 9 个 PR 合并，节奏强劲 |
| 版本发布 | ⭐⭐⭐⭐ | 两版本同窗发布，节奏密集 |
| Bug 响应 | ⭐⭐⭐⭐ | 无用户报告 Bug，主动修复到位 |
| 社区互动 | ⭐⭐ | Issues/PRs 评论量极低，需激活社区 |
| 积压管理 | �⭐ | 2 条 PR 超 5 个月未处置，存在风险 |

**总评**：仓库处于**高强度开发 + 弱社区反馈**的状态，技术推进值得肯定，但需在"用户声音收集"与"长期 PR 治理"两个维度补齐。

---
*报告生成时间：2026-08-26 ｜ 数据源：GitHub REST API 公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-26

---

## 1. 今日速览

Moltis 今日保持稳健的中等活跃度：过去 24 小时内共更新 2 条 Issues 与 5 条 Pull Requests，无新版本发布。社区关注点集中在 **沙箱后端扩展**（Kubernetes、Coder Workspace）与 **工具/MCP 兼容性修复**（Brave 搜索参数、Fastmail OAuth、OpenAI 工具 schema）两大方向。1 条 bug 类 Issue 与 1 条 bug fix PR 当日关闭，闭环效率良好。整体来看项目处于"持续打磨 + 新能力孵化"并行推进的阶段。

---

## 2. 版本发布

**今日无新版本发布。**

下一版本可能包含的候选改动（待合并 PR）：Brave 搜索参数校验、Cron 频道上下文修复、Kubernetes/Coder 沙箱后端、Fastmail MCP OAuth 范围修正、OpenAI 安全对象 schema 修复。建议关注维护者是否会在合并 PR #1243 等修复后发布 patch 版本。

---

## 3. 项目进展

### 当日已关闭 PR

**#1243 fix(cron): preserve delivered channel context** ([链接](https://github.com/moltis-org/moltis/pull/1243))
- 作者：rubenssoto
- 推进内容：修复定时任务（Cron）在 WhatsApp 等渠道投递消息后，**后续追问丢失原会话上下文**的缺陷。实现方案是 Cron 仍隔离执行，但把最终投递文本作为 assistant 消息追加到目标渠道的已有会话中，并通过精确渠道匹配解析历史。
- 影响：提升跨渠道定时任务的连贯性与可靠性，是聊天产品体验的关键改进。

### 当日活跃未合并 PR（值得关注的修复与新能力）

| PR | 标题 | 价值评估 |
|---|---|---|
| [#1245](https://github.com/moltis-org/moltis/pull/1245) | fix(tools): validate Brave search parameters | 完善 Brave 搜索的区域/语言/新鲜度参数校验，不支持的市场回退到 `ALL`，避免请求失败 |
| [#1244](https://github.com/moltis-org/moltis/pull/1244) | Fix Fastmail MCP OAuth scope registration | 解决 MCP OAuth 发现过程中授权范围（scope）选取过宽的问题，并补 Fastmail 回归测试 |
| [#1232](https://github.com/moltis-org/moltis/pull/1232) | fix(tools): make object schemas OpenAI-safe | 修复 Codex 因 `additionalProperties=false` 导致 patch/map 字段返回 null 的兼容性问题 |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | Add Coder remote workspace sandbox support | 新增基于 Coder REST API + WebSocket PTY 的远程工作区沙箱后端，能力较强但已开放 11 天 |

整体看，今日合并/关闭量较小（仅 1 条 PR + 1 条 Issue），但待合并 PR 池质量较高，覆盖沙箱、可观测性、协议兼容性多个层面。

---

## 4. 社区热点

### Issue #1118 [Feature] Add Kubernetes-native sandbox backend with runtimeClassName support
- [链接](https://github.com/moltis-org/moltis/issues/1118)
- 作者：AzgadAGZ | 创建：2026-06-12 | 更新：2026-08-25 | 👍 1 | 评论 2
- **热度分析**：创建于 6 月中旬，至今已逾 2 个月未关闭，但评论区有持续讨论。社区诉求是希望 Moltis 引入 **Kubernetes 临时 Pod 沙箱**，并通过 `runtimeClassName` 接入 Kata Containers / gVisor / OCI 兼容运行时，实现 VM 级别的隔离。这反映出部分用户（尤其企业/自部署用户）担忧 LLM 生成不可信命令在本地沙箱中执行的安全边界，倾向于"云原生 + 强隔离"路线。

### Issue #1224 [Bug] Tools stop working in shared Slack channels
- [链接](https://github.com/moltis-org/moltis/issues/1224))
- 作者：affanshahid | 创建：2026-08-21 | 更新：2026-08-25（当日关闭）
- 虽已关闭但值得追踪：共享 Slack 频道中工具失效是典型的**多租户/上下文路由**问题，关闭原因未在数据中披露，需关注是否真正修复或被关闭为重复/不重现。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 是否有 fix PR |
|---|---|---|---|
| 🟡 中 | #1224 Tools stop working in shared Slack channels | 当日 CLOSED，详情未公开 | 未见对应 fix PR 数据 |
| 🟢 低（潜在回归风险） | #1232 OpenAI 工具 schema 不兼容 | PR OPEN，待合并 | ✅ PR #1232 |
| 🟢 低 | #1244 Fastmail MCP OAuth scope 过宽 | PR OPEN | ✅ PR #1244 |
| 🟢 低 | #1245 Brave 搜索参数缺少校验 | PR OPEN | ✅ PR #1245 |
| 🟢 低 | #1243 Cron 频道上下文丢失 | ✅ 已关闭 | ✅ PR #1243 自身修复 |

**结论**：今日无新增严重崩溃报告，bug 类修复链路完整，3 个开放修复 PR 待合并。建议维护者集中 review 一批工具/MCP 兼容性问题后发布 patch 版本。

---

## 6. 功能请求与路线图信号

### 高信号：沙箱生态扩张
- **#1118 Kubernetes 沙箱后端**（带 `runtimeClassName`）→ 与 **#1199 Coder 远程工作区沙箱**（已存在 PR）形成清晰的"沙箱后端矩阵"：本地进程 → Kubernetes Pod → Coder Workspace。这表明路线图正在从"单沙箱实现"演进为"**多沙箱可插拔**"。
- 推测下一版本或下两版本内，社区会看到至少一种新的远程/Kubernetes 沙箱能力落地。

### 中信号：MCP 协议细节完善
- #1244 Fastmail MCP OAuth scope 注册修复体现社区在主动"逐服务修复 MCP 集成"。预计未来会有更多邮件/日历类 MCP 接入修复。

### 低信号：OpenAI 兼容性
- #1232 表明 Codex / OpenAI strict schema 用户是 Moltis 实际使用人群之一，未来工具 schema 设计需更严格遵守 OpenAI 规范。

---

## 7. 用户反馈摘要

从可观察的数据中提炼：
- **安全与隔离诉求强烈**：Issue #1118 的存在与持续讨论显示，部分自部署用户希望沙箱达到企业级隔离水平（Kata/gVisor VM 级），而非仅依赖本地进程隔离。
- **渠道集成体验痛点**：#1224（Slack 共享频道工具失效）+ #1243（Cron 跨渠道上下文丢失）共同暴露 Moltis 在"多渠道 + 异步任务"组合下的**上下文路由**还不够稳健。
- **工具/MCP 协议细节反馈正面**：rubenssoto、penso、IlyaBizyaev 等多位贡献者主动提交针对 Brave、Fastmail、OpenAI 的精确修复，反映社区已形成"小颗粒度、按服务修复"的协作模式，用户满意度较高。
- **不足之处**：#1118 自 6 月提出至今仍未关闭，说明功能请求响应周期较长，用户期望与维护节奏存在 gap。

---

## 8. 待处理积压 ⚠️

| 类型 | 编号 | 标题 | 创建距今 | 风险 |
|---|---|---|---|---|
| 🔴 Issue | [#1118](https://github.com/moltis-org/moltis/issues/1118) | Add Kubernetes-native sandbox backend | ~75 天 | 长期未响应，企业用户关键诉求 |
| 🟡 PR | [#1199](https://github.com/moltis-org/moltis/pull/1199) | Add Coder remote workspace sandbox support | ~11 天 | 已成熟，未获 review 反馈 |

**建议维护者优先关注**：
1. 对 #1118 给出明确答复（接受/拒绝/路线图排期），即使无 PR 也应保持 Issue 状态更新。
2. 对 #1199 安排 review，这是与 #1118 同方向的沙箱后端能力，合并后可为 Kubernetes 沙箱提供参考实现。
3. 集中 review #1245 / #1244 / #1232 三个小颗粒度修复 PR，考虑合并入下一 patch 版本。

---

## 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 每日 7 条以上更新，持续运转 |
| 闭环效率 | ⭐⭐⭐⭐ | 当日关闭 1 Issue + 1 PR |
| 社区协作 | ⭐⭐⭐⭐ | 多位外部贡献者主动提交针对性修复 |
| 路线图清晰度 | ⭐⭐⭐ | 沙箱方向明确，但长尾 Issue 跟进不足 |
| 稳定性 | ⭐⭐⭐⭐ | 无新增严重 bug 报告**

**一句话总结**：Moltis 处于"稳态打磨 + 沙箱能力扩张"双轨推进期，下一关键节点是 patch 版本发布与 Kubernetes/Coder 沙箱的合并落地。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报

**日期**：2026-08-26  
**项目仓库**：[agentscope-ai/QwenPaw](https://github.com/agentscope-ai/QwenPaw)  
**报告周期**：过去 24 小时

---

## 1. 今日速览

CoPaw（QwenPaw）项目继续保持高强度迭代节奏，过去 24 小时共有 **34 个 Issue** 与 **50 个 PR** 发生更新，Issue 关闭率约 **41%**（14/34），PR 关闭/合并率约 **58%**（29/50），整体呈现"快速合并 + 持续涌入新问题"的健康开发态势。项目于当日发布 **v2.1.1-beta.3** 预发布版本，紧随 v2.1.1-beta.2 发布节奏，重点修复 Beta 通道中暴露的若干体验性问题与一处严重的服务端稳定性 Bug（[#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261)）。社区讨论焦点集中在 **MCP 连接恢复、Web 端流式渲染掉帧、WeChat 频道配置一致性** 等几类稳定性议题，说明 2.1.1 Beta 阶段的用户验证已经覆盖到核心使用路径。

---

## 2. 版本发布

### v2.1.1-beta.3

🔗 [Release 链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.1-beta.3)

**已知变更（基于 PR 摘要）：**
- `chore(console)`: 将 `@agentscope-ai/chat` 固定到 `1.1.72`（[#7257](https://github.com/agentscope-ai/QwenPaw/pull/7257)）
- `docs(loop-engineering)`: 修正 `PluginAPI` 大小写为 `PluginApi`（[#7269](https://github.com/agentscope-ai/QwenPaw/pull/7269)）
- `test(integration)`: 扩展集成测试（说明被截断）

**兼容性提示：**
- 属于 Beta 通道预发布，不建议生产环境使用
- 通过固定 chat 包版本，Console 前端依赖关系收敛，可能影响升级到下一 Beta 时的依赖锁文件
- 升级前建议备份 `SECRET_DIR/.master_key` 与 SQLite 配置数据库，避免 [#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720) 类异常中断造成配置损坏

**迁移注意事项：** 当前版本为 Beta.2 → Beta.3 的小幅迭代，未在摘要中看到破坏性变更（Breaking Change）声明。

---

## 3. 项目进展

过去 24 小时合并/关闭的 PR 主要推进了以下方向：

### 🚀 功能与体验
- **[#7276](https://github.com/agentscope-ai/QwenPaw/pull/7276)** `chore(deps)`：升级 `agentscope` 到 2.0.7（已关闭）— 保持与上游 AgentScope 框架同步
- **[#7277](https://github.com/agentscope-ai/QwenPaw/pull/7277)** `fix(providers)`：刷新 Aliyun Token Plan / Coding Plan / Kimi 内置模型目录，清理已下线模型 ID，补充新模型
- **[#7294](https://github.com/agentscope-ai/QwenPaw/pull/7294)** `feat(media)`：新增 `QWENPAW_MAX_IMAGE_PIXELS` 环境变量控制的图片尺寸压缩（默认关闭），解决上游 Provider 像素上限错误

### 🛡 稳定性与安全
- **[#7119](https://github.com/agentscope-ai/QwenPaw/pull/7119)** `fix(security)`：确保 `SECRET_DIR/.master_key` 文件以 `0o600` 权限创建，与模块 docstring 契约对齐
- **[#1525](https://github.com/agentscope-ai/QwenPaw/pull/1525)** `fix(cron)`：持久化的 cron 计划启动时隔离无效任务，避免单个坏任务导致整个应用启动失败

### 📊 质量与可观测性
- **[#7292](https://github.com/agentscope-ai/QwenPaw/pull/7292)** `test(coverage)`：新增 19 个单元测试文件、1148 个测试用例，将后端单元覆盖率从 **58.04% → 63.06%**（+5.02pp），同时修正 `safety_checks.py` 中 `/root` 被错误归类为系统目录的问题
- **[#7293](https://github.com/agentscope-ai/QwenPaw/pull/7293)** `feat(ci)`：将 `tests.yml` 集成测试拆分为 **p0/p1/p2** 三档并行分片，缩短 CI 反馈时长

### 📚 文档与社区
- **[#7300](https://github.com/agentscope-ai/QwenPaw/pull/7300)** 文档：更新 Scroll 上下文管理器博客（已合并）
- **[#7290](https://github.com/agentscope-ai/QwenPaw/pull/7290)** `docs(blog)`：新增 QwenPaw Mail 博客

**整体判断**：今日合入的 PR 侧重"质量基线 + 上游同步"，没有大幅功能新增，但通过覆盖率提升和 CI 改造，显著夯实了 2.1.1 后续正式版的工程基础。

---

## 4. 社区热点

按评论数与关注度排序，今日最具讨论价值的议题：

| 排名 | 议题 | 评论 | 状态 | 链接 |
|---|---|---|---|---|
| 1 | **#338** [Feature] 建议添加 Webhook 功能 | 9 | OPEN（已挂 5 个月） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/338) |
| 2 | **#7258** [Bug] 微信频道"显示思考过程"开关无效 | 6 | OPEN | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7258) |
| 3 | **#6524** [Bug] MCP 后端重启后客户端无法自动恢复 | 6 | OPEN（已挂 4 周） | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6524) |
| 4 | **#5720** [Bug] v1.1.12.post2 内存泄漏 | 5 | CLOSED | [链接](https://github.com/agentscope-ai/QwenPaw/issues/5720) |
| 5 | **#6810** Windows 安装/更新未终止占用进程 | 5 | OPEN | [链接](https://github.com/agentscope-ai/QwenPaw/issues/6810) |
| 6 | **#7261** SSE 序列化死循环致 100% CPU | 4 | CLOSED | [链接](https://github.com/agentscope-ai/QwenPaw/issues/7261) |

### 诉求分析

- **#338（Webhook）**：用户希望 CoPaw 能在回答完成后回调自有系统的接口，并通过 `key` 查询回复内容，反映了**用户希望 CoPaw 与企业内部系统打通**的强烈需求，是典型的 Agent → Workflow 集成诉求。该 Issue 已开 5 个月未结，是被社区多次顶起的功能请求，建议维护者优先评估。
- **#7258 + #7261 + #5720**：三者形成"配置开关不生效 → 服务端资源耗尽 → 内存泄漏"的串联叙事，说明 **Beta 通道用户在企业级长时间运行场景下已经触碰到稳定性边界**。维护者响应速度快，#7261 与 #5720 当日即关闭。
- **#6810**：Windows 安装体验问题（NM host 进程锁文件），属于跨生态兼容性的典型场景，反映 CoPaw Desktop 在与浏览器扩展并存环境下的安装鲁棒性不足。

---

## 5. Bug 与稳定性

按严重程度排列（结合用户描述的爆炸半径、是否阻塞核心流程、是否影响数据安全）：

### 🔴 P0 — 严重（已修复或当日关闭）
- **[#7261](https://github.com/agentscope-ai/QwenPaw/issues/7261)**（CLOSED）：QwenPaw 2.1.1b2 在 agent-to-agent 调用后陷入 SSE 序列化死循环，导致 **100% CPU、内存无限增长、服务器完全无响应**。涉及 AgentScope 2.0.6 / macOS 15.6 Intel 环境。当日已关闭，预计已通过 v2.1.1-beta.3 修复。
- **[#5720](https://github.com/agentscope-ai/QwenPaw/issues/5720)**（CLOSED）：v1.1.12.post2 内存泄漏（~5.5 MB/min），由"异步任务泄漏 + HTTP 会话未回收"叠加导致，被外部进程 OOM 杀掉时数据库写入中断，配置损坏。**属于历史版本严重事件**，应作为 v2.x 的回归测试基线。

###  P1 — 高（未修复）
- **[#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524)**（OPEN）：MCP `streamable_http` 后端重启后，客户端复用旧 `mcp-session-id` 导致 tool list 查询失败，需手动执行 `list mcp` 重连。影响所有远程 MCP 集成场景。
- **[#7218](https://github.com/agentscope-ai/QwenPaw/issues/7218)**（OPEN，需更多信息）：长文本 + 推理时间长时出现 `peer closed connection without sending complete message body (incomplete chunked read)`，疑似客户端在 130–140s 时被对端关闭。
- **[#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298)**（OPEN）：Tauri Desktop 包内置 Python 3.11 + OpenSSL 3.0.x，在某些运营商网络中 TLS 握手被中间设备 RST。建议将 Desktop CI 升级至 Python 3.13。
- **[#7288](https://github.com/agentscope-ai/QwenPaw/issues/7288)**（OPEN）：MCP 工具在活跃回合中返回超大结果时，会绕过 Scroll 上下文压缩机制，撑爆模型上下文窗口。属于数据密集型企业的关键风险。

###  P2 — 中
- **[#7258](https://github.com/agentscope-ai/QwenPaw/issues/7258)**（OPEN）：WeChat 频道"显示思考过程"开关无效。
- **[#6810](https://github.com/agentscope-ai/QwenPaw/issues/6810)**（OPEN）：Windows NSIS 安装时未终止占用进程。
- **[#7285](https://github.com/agentscope-ai/QwenPaw/issues/7285)**（CLOSED）：v2.1.1b2 长对话场景下网页端严重卡顿。
- **[#6273](https://github.com/agentscope-ai/QwenPaw/issues/6273)**（OPEN）：任务追踪与同会话并发语义不一致。
- **[#7129](https://github.com/agentscope-ai/QwenPaw/issues/7129)**（CLOSED）：Console 长会话 + 流式输出浏览器掉帧，定位到 Chrome 渲染主线程阻塞。

### 🟢 P3 — 轻
- **[#7266](https://github.com/agentscope-ai/QwenPaw/issues/7266)**（OPEN）：SubAgent 在 A 项目路径下工作时跑去 B 路径找资料。
- **[#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228)**（CLOSED）：应用市场已安装应用仍显示"安装"按钮。
- **[#7256](https://github.com/agentscope-ai/QwenPaw/issues/7256)**（CLOSED）：左侧菜单"应用"被改名"市场"。
- **[#7297](https://github.com/agentscope-ai/QwenPaw/issues/7297)**（OPEN）：QQ 对话中让 QwenPaw 重启会丢失最后聊天记忆。
- **[#7282](https://github.com/agentscope-ai/QwenPaw/issues/7282)**（OPEN）：Console Markdown 列表行间距过大。
- **[#7291](https://github.com/agentscope-ai/QwenPaw/issues/7291)**（OPEN）：qwenpaw-creator 在 Windows 11 拉取示例项目报错。

---

## 6. 功能请求与路线图信号

| 需求 | 提出 Issue | 是否有相关 PR | 落地概率 |
|---|---|---|---|
| Webhook / 主动回调外部系统 | [#338](https://github.com/agentscope-ai/QwenPaw/issues/338) | 无 | 中（呼声高但涉及鉴权/安全设计） |
| Chat 统一工具面板 + Web 预览 + 交互式 Terminal | [#7013](https://github.com/agentscope-ai/QwenPaw/issues/7013) | 无（已关闭转 review） | 高（已结案进入路线图评估） |
| 推理过程默认折叠 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) Session 思考模式已实现 | 已落地（下一版本可默认折叠） |
| Workspace-scoped Skill preload 策略 | [#7182](https://github.com/agentscope-ai/QwenPaw/issues/7182) | 无 | 中（设计清晰，等待实现） |
| 模型返回多选项时弹窗点选而非输入 | [#7279](https://github.com/agentscope-ai/QwenPaw/issues/7279) | 无 | 中（UX 改进类） |
| 任务完成时底栏标签橙色提示 | [#7263](https://github.com/agentscope-ai/QwenPaw/issues/7263) | 无 | 低（小改进） |
| 后台任务自动清除 | [#7280](https://github.com/agentscope-ai/QwenPaw/issues/7280) | 无 | 中（与 #7261 性能问题相关） |
| 零侵入"皮肤网关"主题机制 | [#7287](https://github.com/agentscope-ai/QwenPaw/issues/7287) | 无 | 中（作者明确为建议方向） |
| MCP legacy 迁移凭证引用悬空 | [#7301](https://github.com/agentscope-ai/QwenPaw/issues/7301) | 无 | 高（修复类 Bug） |
| "应用市场"菜单命名回归 | [#7256](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-26

> 数据来源：github.com/zeroclaw-labs/zeroclaw 过去 24 小时活动
> 数据生成时间：2026-08-26

---

## 1. 今日速览

ZeroClaw 仓库今日呈现**高强度治理 + 安全加固**的典型节奏：50 条 Issue 与 50 条 PR 在过去 24 小时内同步刷新，其中 Issue 关闭率达 **24%（12/50）**，而 PR 合并率仅 **2%（1/50）**，显示出明显的"Issue 端清账、PR 端积压"特征。讨论热点集中在 **v0.9.0 治理 RFC**（标签/工作流）、**内存与 Provider 架构边界**、**运行时/沙箱安全漏洞**三条主线。新版本未发布，但代码侧正在围绕 Rust 1.98 工具链迁移、Mattermost 通道、Skills 安全边界、ZeroRelay 传输层等大块功能做集中收尾。项目健康度评估：**活跃但合并通道偏紧**，需维护者侧加快 PR 审阅。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。当前追踪中的版本节奏为 0.8.4，0.8.0-beta-1 → 0.8.4 已完成，v0.9.0 安全/网关/破坏性变更队列通过 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 持续跟踪中。

---

## 3. 项目进展（今日关闭/合并要点）

| 类别 | 编号 | 标题 | 状态 | 影响 |
|---|---|---|---|---|
| Bug 修复 | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | agent cron 间歇性把 workspace_dir 解析为 `/`（S0 严重度） | ✅ 已关闭 | 关闭一个高危数据丢失/越权风险问题 |
| 安全加固 | [#9663](https://github.com/zeroclaw-labs/zeroclaw/issues/9663) | Voice Wake 应绑定到所属 agent 的 transcription provider | ✅ 已关闭 | 修复通道别名被误用为 provider key 的逻辑漏洞 |
| Cron 修复 | [#10257](https://github.com/zeroclaw-labs/zeroclaw/issues/10257) | `cron update --command` 在 agent 任务上写入未用列 | ✅ 已关闭 | 清理数据库写入冗余字段 |
| CI 修复 | [#10042](https://github.com/zeroclaw-labs/zeroclaw/issues/10042) | MSRV apt 安装吃掉整个 20 分钟 job 超时 | ✅ 已关闭 | 解决 Linux MSRV Job 工作流被阻塞 |
| UTF-8 重构 | [#10271](https://github.com/zeroclaw-labs/zeroclaw/issues/10271) | 将 `floor_char_boundary` 三个本地副本合并到 std | ✅ 已关闭 | 跟进 #8873 UTF-8 截断审计，技术债收敛 |
| 可见性 | [#9769](https://github.com/zeroclaw-labs/zeroclaw/issues/9769) | 日志持久化关闭时 withheld-capability 通知不可见 | ✅ 已关闭 | 改善 `observability.log_persistence="none"` 下的运维可观测性 |
| TUI 修复 | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) / [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | ZeroCode 文件浏览器搜索模式/小模型流式输出误识别 | ✅ 已关闭 | 提升 ZeroCode 本地用户体验 |

**整体判断**：今日合并多为"清扫型"补丁，未见大型功能合并。但 PR 池中堆积了至少 5 个**高风险安全/架构变更**等待 review（见第 5 节），显示维护者资源向治理与安全倾斜。

---

## 4. 社区热点

按评论数排序的 TOP 议题，反映出社区当前最关心的方向：

### 4.1 治理与流程（评论累计最密集）
- **#6808**（24 评论） — [RFC: Work Lanes, Board Automation, and Label Cleanup](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)
  作者 Audacity88。已 **Ratified/正在 rollout**（Rev. 26）。社区诉求非常明确：减少维护者手工路由工作的负担，让 Issue 自动按 lane 流动。
- **#8692**（14 评论） — [Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
  维护者决策队列的 Issue 级追踪器，是当前 RFC 准入/拒绝/延期的"门前过滤网"。

### 4.2 架构边界 RFC（社区正在重塑核心抽象）
- **#9103**（14 评论） — [RFC: separate authoritative memory storage from optional enrichment connectors](https://github.com/zeroclaw-labs/zeroclaw/issues/9103)
  `memory.backend` 架构边界拆分。2026-08-22 维护者接管修订，替换此前未通过的 Lucid-first rollout。
- **#8396**（12 评论） — [RFC: Make wire protocol first-class in provider construction](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)
  Provider 接入流程把 wire protocol 提升为一等公民，受 FND-003 Rev. 15 (#9496) 约束。

### 4.3 测试与跨平台 CI
- **#9965**（9 评论） — [harden runtime-written executable test fixtures under the parallel runtime gate](https://github.com/zeroclaw-labs/zeroclaw/issues/9965)
  跟踪并行运行时 gate 下，测试夹具写入可执行 shim 后再 spawn 的稳定性。
- **#8132**（9 评论，👍1） — [Evaluate Rust/WASM web UI prototype before React/Vite migration](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)
  从 #7674 拆分而来：评估用 Dioxus/Leptos/Yew 替代 React SPA + Vite，意图从构建与运行时剔除 Node.js。

### 4.4 今日新开且当天被讨论的 RFC
- **#10360**（1 评论，今日新开） — [RFC: opt-in household edge mesh with pull workers and signed receipts](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)
  突破单主机硬件上限的家庭级边缘网格方案，与"local-first / hardware-capable / security-first"定位契合。
- **#10346**（1 评论，今日新开） — [RFC: Gateway and channels don't share the heartbeat worker's MCP-registry-caching pattern](https://github.com/zeroclaw-labs/zeroclaw/issues/10346)
  指出 stdio MCP server 在每次 daemon 启动时被连接/启动 **三次**的冗余。

**热点解读**：社区当前真正在"喊话"的是**治理疲劳**和**架构债务**两类诉求，单纯的功能请求被压制在一个稳定的 RFC 流程下排队。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 编号 | 标题 | 严重度 | 修复 PR | 状态 |
|---|---|---|---|---|---|
| 🔴 S0 | [#9206](https://github.com/zeroclaw-labs/zeroclaw/issues/9206) | cron agent 任务 workspace_dir 解析为 `/` | 数据丢失/越权 | — | ✅ 已关闭 |
| 🔴 S0 | [#9947](https://github.com/zeroclaw-labs/zeroclaw/issues/9947) | cron 工具未按所属 agent 作用域隔离，跨 agent 可读/触发/修改/删除 | 数据丢失/越权 | — | 🟡 OPEN，等待修复 |
| 🟠 S2 | [#9872](https://github.com/zeroclaw-labs/zeroclaw/issues/9872) | bounded delegate 模式下，子 agent 文件系统操作写到父 agent workspace | 行为降级 | — | 🟡 OPEN |
| 🟠 S1 | [#10357](https://github.com/zeroclaw-labs/zeroclaw/issues/10357) | 工具失败时只返回 "HTTP 400" 这种裸状态，丢失详细错误体 | 工作流阻塞 | [#10364](https://github.com/zeroclaw-labs/zeroclaw/pull/10364) | 🟢 已有 PR |
| 🟡 S2 | [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | ZeroCode 流式用户轮次被小模型误判为日志/API 负载 | 行为降级 | — | ✅ 已关闭 |
| 🟡 S2 | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) | ZeroCode 文件浏览器搜索无法上下移动 | 行为降级 | — | ✅ 已关闭 |
| 🟢 S3 | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) | ZeroCode Dashboard Health 状态值在法语/西班牙语下错位 | 小问题 | — | 🟡 OPEN |

**待重点关注**：
- **#9947**（S0，未修复）是今日仍未关闭的最高严重度问题，cron 工具的跨 agent 越权必须尽快处理；
- **#10357** + **#10364** 形成良好修复闭环，说明错误处理的可观测性正在被改善；
- **#9872** 反映出 delegation 与文件系统作用域的耦合是一类系统性风险，与 [#9593](https://github.com/zeroclaw-labs/zeroclaw/issues/9593)（TaskRecord 作为单一生命周期 owner 的重构）正在联动修复。

---

## 6. 功能请求与路线图信号

结合今日活跃 PR 判断哪些诉求最可能进入下一版本：

### 6.1 高度可能进入 0.9.x/0.9.0（已有 PR 在排队）
| 需求 | 对应 PR | 路线图位置 |
|---|---|---|
| Windows/macOS 加入 CI Quality Gate 测试矩阵 | — | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)（OPEN）+ [#10350](https://github.com/zeroclaw-labs/zeroclaw/pull/10350)（测量性 Windows 测试） |
| 网关 Web 多会话支持（侧边栏：新建/切换/重命名/删除） | — | [#7543](https://github.com/zeroclaw-labs/zeroclaw/issues/7543)（OPEN，无 PR） |
| 执行树迭代预算归属 | [#10351](https://github.com/zeroclaw-labs/zeroclaw/pull/10351) | 对应 [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323)，与 #9593 重构共同推进 |
| Mattermost 通道审批提示 | [#10358](https://github.com/zeroclaw-labs/zeroclaw/pull/10358) | 弥补此前 `Ok(None)` 默认拒绝所有请求的缺陷 |
| Skill HTTP 出口绑定 | [#10369](https://github.com/zeroclaw-labs/zeroclaw/pull/10369) | 高风险变更（`feat(runtime)!`），进入 v0.9 安全队列 |
| Hailo-Ollama 原生 provider | [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | 边缘设备/本地推理生态 |
| ZeroRelay 安全传输（盲中继 + 原生 mTLS 登记） | [#10142](https://github.com/zeroclaw-labs/zeroclaw/pull/10142) | 替代 #9080，v0.9.0 网关破坏性变更主线 |

### 6.2 路线图观察信号
- **安全优先**：PR #10370（Copilot 凭据缓存硬化）、#10367（skill 安装符号链接竞争）、#10369（skill HTTP 出口）三连发，强烈信号表明 v0.9.0 把"凭据/出口/symlink"作为安全三角重点；
- **工具链升级**：#9527 把日常构建工具链推到 Rust 1.98.0、源码下限守在 1.96.0，与 StageX 容器发布节奏对齐；
- **可观测性**：#10372（确定性依赖足迹报告）+ #10340（受限遥测试点 tracker）显示社区在尝试用"测量/审计"代替"全面上报"。

### 6.3 暂时无 PR 的诉求
- **Rust/WASM Web UI 替代 React/Vite**（[#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132)）— 仍处于"评估阶段"，尚无 PR，预计不会很快进入路线图；
- **家庭边缘网格 RFC**（[#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)）— 今日新开，处于草案阶段。

---

## 7. 用户反馈摘要

从 Issue 评论与摘要中提炼的真实用户痛点：

1. **"维护者决策成本太高"**（#6808、#8692 系列）
   用户反馈集中在工作流层面：希望在 RFC/设计 Issue 入口就能清晰看到"需要谁在何时决定什么"，避免在多个 Issue 上做重复决策。这一诉求直接驱动了 Work Lanes 和决策队列两个治理 RFC。

2. **"小模型被自己的流式输出骗了"**（#8999，已关闭）
   在 ZeroCode + Ollama + `llama3.2:latest` 这种本地小模型组合下，简单问候被误识别为协议/日志负载。说明 ZeroCode 的流式协议对小模型不够友好。

3. **"配置改了工具集不刷新，必须重启 daemon"**（#10297）
   ZeroCode 保存配置变更成功后，daemon 与现有 agent 会话的工具集不刷新，必须完全重启。对迭代配置的用户来说体验割裂。

4. **"Web UI 只有一个会话"**（#7543）
   网关 Web 聊天 UI 实际是单会话的，多 agent 的多会话诉求迟迟未满足。

5. **"Voice Wake 用了错误的 provider"**（#9663，已关闭）
   `with_agent_transcription_provider(self.alias)` 把通道别名误当 provider key，运维调试时极易踩坑。

6. **"Cron 工具被任何 agent 拿到就能改别人的任务"**（#9947，未关闭）
   这是 S0 级问题，反映用户对多 agent 安装下的最小权限边界期待——但目前还没有任何 agent

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*