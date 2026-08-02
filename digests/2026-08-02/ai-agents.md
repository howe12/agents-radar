# OpenClaw 生态日报 2026-08-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-02 02:08 UTC

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

**日期：2026-08-02**
**数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw)**

---

## 1. 今日速览

OpenClaw 项目今日进入 **2026.7.2-beta.6 版本冲刺阶段**，发布节奏密集，社区活跃度处于高位。过去 24 小时内共有 **500 条 Issue 更新（460 活跃 / 40 关闭，关闭率 8%）** 与 **500 条 PR 更新（401 待合并 / 99 已合并或关闭，关闭率 19.8%）**。当前讨论焦点集中在 **会话状态安全、消息丢失、崩溃恢复循环、模型回退链路** 等稳定性问题上，新版本与今日多个 PR 修复方向高度一致。整体项目处于"高频迭代 + 大量待验证修复"阶段，PR 关闭率明显高于 Issue 关闭率，说明贡献者修复产出可观，但用户端问题反馈速度更快，**积压风险在持续累积**。

---

## 2. 版本发布

### v2026.7.2-beta.6
- **链接**：[Release v2026.7.2-beta.6](https://github.com/openclaw/openclaw/releases/tag/v2026.7.2-beta.6)

**核心主题：State Safety and Recovery（状态安全与恢复）**

该 beta 版本聚焦于持久化数据在异常场景下的存活性，引入 5 项关键机制：

| 机制 | 解决的问题 |
|------|-----------|
| **Quarantine store** | 主数据库损坏时隔离可疑数据，避免污染 |
| **Crash-recoverable SQLite snapshots** | SQLite 快照可从崩溃中恢复 |
| **Crash-durable filesystem publication** | 文件系统发布具备崩溃耐久性 |
| **Schema-upgrade data-loss rejection** | 拒绝可能导致数据丢失的 schema 升级 |
| **Rollback-writer snapshot recovery** | 回滚写入器支持快照恢复 |

**迁移注意**：当前为 **beta.6**，与昨日（2026-08-01）发布的 beta.5 形成连续迭代。多个 P0/P1 Issue（#101290、#115421、#114234）都直接关联状态 DB 损坏、schema 降级、容器内 PID 重用导致锁泄漏等问题，本版本正是针对性修复。建议生产环境暂不升级，等待稳定版。

---

## 3. 项目进展

过去 24 小时有 **99 个 PR 完成合并或关闭**（占 19.8%），其中在头部 PR 列表中明确可见已关闭的关键工作包括：

- **[PR #117733]**（已关闭）`fix(meeting-bot): bound retained node audio lifecycle` — 关联 [Issue #116201](https://github.com/openclaw/openclaw/issues/116201)，修复 Meeting Host 捕获音频无硬性字节上限的回归，**是 Realtime voice 资源泄漏修复链的关键节点**。
- **[PR #117727]** `fix: prevent fractional chunk limits from stalling text splitting` — 修复插件/通道使用正小数分块上限时文本拆分卡死的问题（铂金 hermit 评级，待维护者 review）。

**重点功能/修复推进方向**：

1. **会话状态安全**（与今日 release 主题一致）：[PR #116248](https://github.com/openclaw/openclaw/pull/116248) 默认 agent 在二级 paste-api-key 后丢失密钥；[PR #114254](https://github.com/openclaw/openclaw/pull/114254) 解决容器 PID 重用导致 usage-cost 锁冻结（关联 #114234）。
2. **崩溃与消息恢复**：[PR #117509](https://github.com/openclaw/openclaw/pull/117509) 修复子代理 `sessions_yield` 后父轮次不发任何消息；[PR #114926](https://github.com/openclaw/openclaw/pull/114926) 从陈旧 session binding 恢复对话（关联 #97887）。
3. **AI-assisted 修复**：今日 PR 列表中可见多份由 `clawsweeper[bot]` 自动生成的修复（#117443 状态栏模型解析、#117697 WhatsApp 自动反应方向、#117721 WebChat 实时思考流），自动化覆盖度提升。
4. **认证与 Provider 行为**：[PR #115968](https://github.com/openclaw/openclaw/pull/115968) 为 fallback chain 中每个候选项独立压缩超时；[PR #114296](https://github.com/openclaw/openclaw/pull/114296) Chrome 扩展接受 127/8 回环地址。

**整体评估**：项目在 **状态安全、消息投递、auth 链路、provider fallback** 四个核心面上同步推进，单日产出可视为一次小版本级修复包。

---

## 4. 社区热点

按评论数与活跃度排序，今日最受关注的讨论集中在**消息丢失**与**会话状态损坏**两大类：

| 排名 | Issue/PR | 标题 | 评论数 | 关注度 | 链接 |
|------|----------|------|--------|--------|------|
| 1 | #116277 | DeepSeek v4 Flash 静默回复失败（fallback 消息，无真实回复生成） | **73** | 🐚 铂金 hermit | [链接](https://github.com/openclaw/openclaw/issues/116277) |
| 2 | #25592 | 工具调用间的文本泄漏到消息通道（UX/安全隐患） | **39** | 🦞 钻石 lobster | [链接](https://github.com/openclaw/openclaw/issues/25592) |
| 3 | #116201 | Realtime voice 会话无界保留 provider/consult 状态 | **38** | 🦐 金虾 | [链接](https://github.com/openclaw/openclaw/issues/116201) |
| 4 | #99241 | 工具输出塌缩为图像附件，agent 无法读取 | 26（已关闭） | 🐚 铂金 hermit | [链接](https://github.com/openclaw/openclaw/issues/99241) |
| 5 | #115326 | 崩溃循环断路器永久压制 Discord/WhatsApp，恢复路径失效 | **24** | 🐚 铂金 hermit | [链接](https://github.com/openclaw/openclaw/issues/115326) |
| 6 | #34528 | Feishu 反应 message_id 后缀引发 400 错误 | 11（已关闭） | 🦞 钻石 lobster | [链接](https://github.com/openclaw/openclaw/issues/34528) |

**诉求分析**：
- **#116277（73 评论）** 是今日最热议题，反映用户对 **DeepSeek v4 Flash 模型路径下消息完全丢失** 的强烈不满，且在 fallback 机制下用户甚至得不到明确错误提示，"silent failure"是典型的体验破坏性问题。
- **#25592（39 评论）** 与 **#91804（6 评论）"内部推理泄漏"** 都指向 **agent 内部文本意外外发**，这是 7 月版本多次出现的回归痛点，已影响 Telegram、Slack、iMessage 多通道。
- **#116201（38 评论）+ #115326（24 评论）+ #115424（V8 OOM 转 core dump 循环）** 三连发，呈现"**会话/语音状态失控 → 崩溃循环 → 恢复路径失效**"的复合故障模式，是当前最受用户困扰的系统性问题。

---

## 5. Bug 与稳定性

按严重程度排序（仅列出 P0/P1 及钻石 lobster 评级）：

### 🔴 P0 严重（数据丢失 / 进程崩溃 / 发布阻断）

| Issue | 标题 | 状态 | 修复 PR |
|-------|------|------|---------|
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 启动预检在 gateway 运行中破坏 live state DB（macOS，"database disk image is malformed"），原生 SQLite 不可复现 | 开放 | 无 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | 实时文档领先于发布版本（Heartbeat IsolatedSessions 已写入文档但代码缺失） | 开放 | 无 |
| [#115421](https://github.com/openclaw/openclaw/openclaw/issues/115421) | Schema 降级恢复不应隔离/清空 state DB（cron 任务丢失） | 开放 | 无（与今日 release 直接相关） |

### 🟠 P1 严重（功能失效 / 影响范围广）

| Issue | 严重标签 | 修复 PR |
|-------|----------|---------|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | 🐚 铂金 hermit | 无 |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | 🦐 金虾 | [#117733](https://github.com/openclaw/openclaw/pull/117733)（已关闭） |
| [#25592](https://github.com/openclaw/openclaw/issues/25592) | 🦞 钻石 lobster | 无 |
| [#115326](https://github.com/openclaw/openclaw/issues/115326) | 🐚 铂金 hermit | 无 |
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | 🦞 钻石 lobster（regression，自 3 月起） | 无 |
| [#115908](https://github.com/openclaw/openclaw/issues/115908) | 🦞 钻石 lobster（session 投影 livelock 阻塞主线程） | 无 |
| [#106231](https://github.com/openclaw/openclaw/issues/106231) | 🦞 钻石 lobster（loop 检测不终止卡死会话） | 无 |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 🦞 钻石 lobster（容器内 PID 重用冻结 usage-cost 锁） | [#114254](https://github.com/openclaw/openclaw/pull/114254) |
| [#115909](https://github.com/openclaw/openclaw/issues/115909) | 🦞 钻石 lobster（bundled browser-copilot 永远无法配对） | 无 |
| [#115424](https://github.com/openclaw/openclaw/issues/115424) | 🐚 铂金 hermit（V8 OOM → 7 次 core dump 循环） | 无 |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | 🦐 金虾（beta.5 `/new` 不能恢复已退役 Codex binding） | 无 |
| [#98976](https://github.com/openclaw/openclaw/issues/98976) | 🦞 钻石 lobster（provider refusal 不触发 fallback） | 无 |
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 🦞 钻石 lobster（6.x 迁移后 channel conversation-store SQLite 为 0 字节） | 无 |

**回归趋势明显**：#31583、#94939、#106730、#112906 等多个 Issue 标签为 `regression`，说明近 2-3 个版本的发布可能引入了破坏性变更未被充分覆盖。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 当前信号 |
|-------|------|---------|
| [#113251](https://github.com/openclaw/openclaw/issues/113251) | Webchat 文件查看器支持图片预览 | 已有 UX 截图，10 评论，待 `needs-product-decision` |
| [#73537](https://github.com/openclaw/openclaw/issues/73537) | 为 release 添加 production-readiness 稳定性标签 | 用户运营场景（Telegram/Home Assistant/cron），8 评论 |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | memory 按源目录而非 agent 索引，消除同工作区多 agent 重复向量库 | 5 评论，未见对应 PR |
| [#117211](https://github.com/openclaw/openclaw/issues/117211) | auth profile 存储写入需要凭据安全诊断 | 4 评论，今日提出，符合当前认证类修复方向 |
| [#99105](https://github.com/openclaw/openclaw/openclaw/pull/99105)（PR） | 主动 memory 召回跨 agent 序列化到单 lane 的修复 | 已 ready |
| [#99505](https://github.com/openclaw/openclaw/pull/99505)（PR） | Telegram MCP `threadName` 别名 | 已 ready |
| [#113251](https://github.com/openclaw/openclaw/issues/113251)（建议） | webchat 文件查看器支持图片 | UI 改进 |
| [#115939](https://github.com/openclaw/openclaw/issues/115939) | Anthropic setup-token 配置文件无法用 claude-opus-5（仅 API-key 工作） | 4 评论，钻石 lobster，**与认证重构方向相关** |

**最有可能进入下一版本的请求**：
1. **图片预览（#113251）** — 已附详细截图，UI 类风险低；
2. **release 稳定性标签（#73537）** — 几乎不影响代码，但能极大提升用户预期管理；
3. **Telegram `threadName` 别名（#99505 PR）** — 已 ready，纯兼容性修复；
4. **#117211 凭据安全诊断** — 与当前认证类修复同一 PR 链。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实使用场景与痛点：

**正面信号**：
- [#73537](https://github.com/openclaw/openclaw/issues/73537) 用户 Reneb-cafe 表示 "We've been running it as a

---

## 横向生态对比

# 个人 AI 助手/智能体开源生态横向对比报告

**报告日期：2026-08-02**
**覆盖项目：14 个**（OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw 等）

---

## 1. 生态全景

个人 AI 助手/智能体开源生态已从"单点工具"演化为"多 Agent 多通道"的复杂系统，2026-08-02 当日呈现**"高活跃 + 高并发 + 高回归"**三高特征：以 OpenClaw、ZeroClaw、IronClaw 为代表的核心项目单日仍有 500/50/24 级 PR 流量，但 PR 通道积压与回归风险同步凸显；**"会话状态安全 / 凭证可观测性 / 记忆子系统重构 / 多 Provider 兼容"**成为本周期最集中的四大议题，反映生态正从"功能可用"迈向"生产可信"的临界阶段。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/合并） | Release | 健康度 | 当前阶段定位 |
|------|---------------------|---------------------|---------|--------|---------------|
| **OpenClaw** | 500（460/40，8%） | 500（401/99，19.8%） | v2026.7.2-beta.6 | ⚠️ 高强度迭代中积压 | 生态参照核心 |
| **ZeroClaw** | 50（47/3） | 50（50/0） | 准备 v0.8.4 | ⚠️ 评审密集，零合并 | RFC 阶段 / v0.9.0 路线图 |
| **Hermes Agent** | 50（35/15，30%） | 50（35/15，30%） | 无 | 🟢 修复率均衡 | Desktop + 安全加固 |
| **NanoBot** | 5（1/4，80%） | 25（12/13，52%） | 无 | 🟢 质量冲刺日 | WebUI / Session 升级期 |
| **IronClaw** | 11（9/2，18%） | 24（16/8，33%） | 无 | 🟡 Wave 2 重构中 | 架构契约中性化 |
| **CoPaw (QwenPaw)** | 9（活跃） | 13（12/1） | 无 | 🟢 Bug→PR 链路短 | 桌面端体验打磨 |
| **NanoClaw** | 1（0/1） | 15（10/5） | **v2.1.54（BREAKING）** | 🟢 重大版本落地 | iMessage 架构统一 |
| **Moltis** | 0 | 3（1/2） | 无 | 🟢 安全+可观测性 | 企业级基础设施演进 |
| **LobsterAI** | 7（0/7） | 2（2/0） | 无 | 🔴 全部 stale 关闭 | 维护响应停滞 |
| **PicoClaw** | 1（1/0） | 3（2/1） | 无 | 🔴 P0 Bug 31 天未解 | 功能扩展期，债累积 |
| **NullClaw** | — | — | — | ⚪ 无活动 | — |
| **TinyClaw** | — | — | — | ⚪ 无活动 | — |
| **ZeptoClaw** | — | — | — | ⚪ 无活动 | — |

**关键观察**：
- **零活动项目占 21%**（3/14），生态分布呈长尾状；
- **当日发版仅 2 个**（OpenClaw beta.6、NanoClaw v2.1.54），且 NanoClaw 含 BREAKING 变更；
- **PR 合并率>30% 的项目**：NanoBot（52%）、IronClaw（33%）、Hermes Agent（30%），三者修复产出最稳；
- **PR 完全积压项目**：ZeroClaw（0/50 合并），需关注维护者带宽。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的事实参照系**，体现在三方面：

**(1) 规模优势**：单日 1000 条 Issue+PR 流量，是 ZeroClaw（100）、Hermes Agent（100）、NanoBot（30）的 10×量级，社区规模与回归面均最广。

**(2) 技术路线差异**：
- OpenClaw 走 **"会话状态全栈管控"** 路线（State Safety、Quarantine store、Crash-durable snapshots），针对生产级数据存活性；
- ZeroClaw 更聚焦 **"凭据 + 记忆分层"**（KeySource 抽象、MemoryCategory 拆分）；
- IronClaw 偏 **"架构契约中性化"**（product_contracts 端口反转、Wave 2 重构）；
- NanoBot 走 **"WebUI + 多 Provider 实用主义"**（Quick Chat、跨会话搜索）；
- Hermes Agent 与 NanoClaw 重点在 **"桌面/移动端 UX + 多 Profile 凭据隔离"**。

**(3) 社区特征对比**：
| 项目 | 主导维护者 | 自动化贡献 | 首次贡献者占比 | 文档同步 |
|------|----------|-----------|--------------|---------|
| OpenClaw | 多维护者 + `clawsweeper[bot]` | 高（AI 修复 PR 频现） | 中 | 部分领先发布（#48920） |
| NanoBot | 集中 | 中 | 中 | 同步 |
| ZeroClaw | IftekharUddin 单核心 | 低 | 中 | RFC 驱动 |
| Hermes Agent | Studio729 + 核心团队 | 低 | 低 | 同步 |
| NanoClaw | glifocat 单核心 | 低 | 低 | 同步 |
| CoPaw (QwenPaw) | BlackBox-Labs 集中 | 低 | **高** | 同步 |

OpenClaw 在自动化与 AI-assisted 修复上的领先，是其能维持高频迭代的关键护城河。

---

## 4. 共同关注的技术方向

以下议题在 **3 个及以上项目** 同步涌现，是当前生态的真实共识：

### 4.1 记忆子系统重构（涉及 4 个项目）
- **ZeroClaw** #9048（16 评论，RFC 头号议题）、#9103、#6850 —— 三角度切入同一议题
- **NanoBot** #5153、#5201 —— 容错 `MemoryStore._format_messages` 与畸形 `_last_summary`
- **OpenClaw** v2026.7.2-beta.6 —— Quarantine store + Schema-upgrade rejection
- **Hermes Agent** 间接体现（streaming redact、fallback compaction）

**共识诉求**：将"会话历史"与"agent 策展长期记忆"在存储层解耦；提升持久化数据的崩溃可恢复性；让 schema 演进具备数据安全保护。

### 4.2 凭证生命周期与多 Profile 安全（涉及 5 个项目）
- **Hermes Agent** #70144（兄弟 Profile 凭据注入）、#67969（dump 暴露 api_key）、#56040（streaming redact）—— 三连安全加固
- **NanoClaw** #3167（Codex 凭证过期告警）、#3168（发布后安全漏洞）
- **OpenClaw** #116248（paste-api-key 丢失）、#114254（PID 重用锁泄漏）
- **ZeroClaw** #9127（KeySource 抽象 RFC）、#9417（WhatsApp Cloud token 泄露）
- **Moltis** #1170（channel 越权触发 `/sh`）

**共识诉求**：凭据应分类（master-key material）、按 Profile 隔离、可观测（过期告警）、禁止在 dump/streaming/log 中明文泄漏。

### 4.3 OpenAI 兼容与第三方 Provider 接入（涉及 4 个项目）
- **ZeroClaw** RFC #8603（OpenAI Chat Completions 适配）
- **IronClaw** WS5 反转（openai_compat port）、RFC #7009（OrcaRouter）
- **PicoClaw** PR #3309（OrcaRouter provider）
- **CoPaw** PR #6622（OrcaRouter 内置）
- **OpenClaw** PR #115968（fallback chain 独立超时）

**共识诉求**：单一模型协议已无法满足生态扩展需求，OpenAI 兼容 + 第三方路由器（OpenRouter/OrcaRouter 等）成为基础设施标配。

### 4.4 WebUI / Desktop 体验打磨（涉及 4 个项目）
- **NanoBot** #5211（跨会话搜索）、#5194（JSONL 加载性能）、#5184（Quick Chat）、#5209（Sidebar 重构）
- **Hermes Agent** #37566（Desktop 字体选择器，5 👍 唯一高赞票）、#75960（IME 预编辑）
- **CoPaw** #6568（全局快捷键浮动输入框）、#6593（清理页面）
- **ZeroClaw** PR #6917（webui 工作区文件链接认证预览）

**共识诉求**：从"能用"转向"好用"，重点在性能、键盘流、可定制性、隐私管理。

### 4.5 Channel/Messenger 集成稳定性（涉及 4 个项目）
- **PicoClaw** #3203（Matrix sync loop 无重连，31 天 P0）
- **Hermes Agent** #60845（Telegram 队列绕过 MEDIA）、#76435（Discord 重连循环）
- **ZeroClaw** #9348（WhatsApp Web business mode 全开）、#6157（Nextcloud Talk bot API）
- **OpenClaw** #25592（工具调用文本泄漏多通道）

**共识诉求**：Channel 是生产可用性的最大变量——重连机制、白名单默认行为、跨 Profile 单例冲突、错误恢复路径是共同痛点。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|------|---------|---------|-------------|
| **OpenClaw** | 全栈多通道 + 状态安全 | 中大型生产部署 | Quarantine store、Crash-durable snapshot、Schema-aware rollback |
| **ZeroClaw** | 凭据治理 + RFC 驱动演进 | 安全敏感型企业 | ChaCha20-Poly1305 全字段加密、KeySource 抽象、Eval 工程化 |
| **IronClaw** | 架构契约中性化 | 大型平台型团队 | product_contracts 端口反转、extension_manager 子 crate 拆分 |
| **NanoBot** | WebUI + Session 实用主义 | 个人/中小团队 | Quick Chat、跨会话搜索、Channel Adapter 限流 |
| **Hermes Agent** | 桌面端 + 多 Profile | Desktop 重度用户 | 兄弟 Profile 隔离、Headroom 压缩、IME 友好 |
| **NanoClaw** | iMessage 统一 + 多 Provider | Apple 生态用户 | Local/Hosted 双后端 iMessage、Codex 凭证告警 |
| **CoPaw (QwenPaw)** | 阿里云 coding plan 兼容 | Qwen/阿里云用户 | 阿里云模型对齐、Scroll 自动压缩 |
| **Moltis** | 可观测性 + 渠道 RBAC | 运维/合规导向 | OTLP 导出、Langfuse v4、operators 白名单 |
| **PicoClaw** | 轻量多通道 | 个人极简部署 | 单一二进制风格、最小依赖 |
| **LobsterAI** | 教育/学习场景 | C 端学生 | 你道有道 AI 产品化定位 |

**架构共性**：所有活跃项目都呈现"**Provider 适配层 + Channel 适配层 + 持久化 + 会话管理**"四元结构，差异仅在实现深度与默认行为倾向。

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代层（活跃度⭐⭐⭐⭐⭐）
- **OpenClaw**、**ZeroClaw**：单日 50+ Issues+PRs 流量，重构/安全/记忆等大颗粒议题并行；
- **IronClaw**：单核心推进 Wave 2 重构，架构跃迁期。

### 🟡 质量巩固层（活跃度⭐⭐⭐⭐）
- **NanoBot**：明显的"质量冲刺日"——单日 4 条 P1 修复；
- **Hermes Agent**：安全+Desktop+安装链三线并进；
- **CoPaw**：Bug→PR 链路短，社区参与度高；
- **NanoClaw**：重大版本（v2.1.54）落地 + 后续安全加固。

### 🟠 维护响应停滞层（活跃度⭐⭐-⭐⭐⭐）
- **Moltis**：低频但精准（安全 + 可观测性关键 PR）；
- **PicoClaw**：存在 P0 Bug 长期未解 + stale 自动清理 PR（#3261）；
- **LobsterAI**：5 个严重 Bug 均 stale 关闭但未真正修复，长期积压。

### ⚪ 静默层
- **NullClaw**、**TinyClaw**、**ZeptoClaw**：连续无活动，需观察是否已归档或仅维护。

**成熟度判断**：
- OpenClaw / ZeroClaw / IronClaw 已进入 **v0.7-v0.9 生产化临界点**；
- NanoBot / Hermes Agent / NanoClaw / CoPaw 处于 **v0.2-v2.1 体验打磨期**；
- Moltis / PicoClaw / LobsterAI 处于 **特定功能延伸期或维护停滞期**。

---

## 7. 值得关注的趋势信号

### 📈 趋势一：凭证与身份治理成为一等公民
- **信号强度**：极强（5 个项目同时推进）
- **表现**：KeySource 抽象（ZeroClaw）、多 Profile 隔离（Hermes）、过期告警（NanoClaw）、dump redact（Hermes）、channel operators（Moltis）
- **对开发者的启示**：从"加 API Key"到"凭据全生命周期管理"是必经之路；建议提前在自身系统中预留 secret_class / credential_class 标签化机制。

### 📈 趋势二：记忆子系统从"黑盒存储"走向"分层架构"
- **信号

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-08-02 | 数据周期：过去 24 小时**

---

## 一、今日速览

NanoBot 今日维持高强度开发节奏，过去 24 小时内共有 **30 项动态**（5 条 Issue + 25 条 PR），仓库活跃度处于近月高位。其中 **Issues 关闭率 80%**（4/5），**PR 处理率 52%**（13/25 已合并或关闭），整体响应效率良好。值得关注的是，PR 中涉及 **P1 优先级**（高优先级缺陷修复）的有多条已合入或正在评审，说明项目方正在集中清理稳定性与并发相关 Bug。功能侧，WebUI、Session、Channel 三大方向均有重要 PR 推进，但**今日无版本发布**，变更仍积压在主分支。

---

## 二、版本发布

无新版本发布。过去 24 小时内所有合并的 PR 尚未形成新的可发布快照，建议关注主分支累积的 P1 修复对下一个版本号的影响。

---

## 三、项目进展

今日合并/关闭的 10 条（已展示的）重要 PR 涵盖**稳定性加固、安全加固、体验优化与代码质量**四个维度：

| 方向 | PR | 主要内容 |
|------|-----|---------|
| **稳定性（P1）** | [#5183](https://github.com/HKUDS/nanobot/pull/5183) | 修复 CronService 手动触发与 WebUI 轮询的竞态，确保手动运行完成状态不被覆盖 |
| **稳定性（P1）** | [#5153](https://github.com/HKUDS/nanobot/pull/5153) | 处理 `MemoryStore._format_messages` 在时间戳为 None/数字、role 字段缺失时崩溃（修复 [#4801](https://github.com/HKUDS/nanobot/issues/4801)） |
| **稳定性（P1）** | [#5200](https://github.com/HKUDS/nanobot/pull/5200) | 修复 `write_stdin(wait_for=...)` 在响应截断后丢失等待目标 |
| **稳定性（P1）** | [#5201](https://github.com/HKUDS/nanobot/pull/5201) | 容错处理持久化的 `_last_summary` 字段畸形或缺失 |
| **功能（P1）** | [#5108](https://github.com/HKUDS/nanobot/pull/5108) | 为 Channel Adapter 引入按发送方/会话的消息频率限制，堵住 LLM Token 滥用风险 |
| **功能** | [#5172](https://github.com/HKUDS/nanobot/pull/5172) | 持久化 OpenAI Responses API 的推理状态与上下文压缩（采纳 ARC-AGI-3 报告建议） |
| **Bug 修复** | [#5208](https://github.com/HKUDS/nanobot/pull/5208) | Dream cron 任务在产生持久化变更但 stop_reason 不为 clean 时不再卡住游标 |
| **Bug 修复** | [#3732](https://github.com/HKUDS/nanobot/pull/3732) | 修复 `_match_provider` 在本地 Provider 仅凭 `is_local` 即可劫持云端模型的隐患 |
| **代码质量** | [#5199](https://github.com/HKUDS/nanobot/pull/5199) | 收窄 Pyright 类型抑制范围，提升类型检查可信度 |
| **UI 重构** | [#5209](https://github.com/HKUDS/nanobot/pull/5209) | 抽取 Sidebar 高亮组件，消除嵌套 fade/scale 闪烁 |

**整体评估：** 项目在「**稳定性与并发安全**」方向显著推进，单日合并 4 条 P1 修复，覆盖 Cron 竞态、Memory 容错、Exec 截断、Session 畸形数据等高频崩溃路径，是一个明显的「**质量冲刺日**」。

---

## 四、社区热点

按评论数与优先级标签综合排序：

1. **[Issue #5185](https://github.com/HKUDS/nanobot/issues/5185)** — 评论 4
   *Nanobot 在响应中突然回吐 tool call 代码*
   该 Issue 获得 4 条评论，是过去 24 小时讨论最活跃的话题，但最终被标记为 `[invalid, provider]`，说明问题更可能源自底层 Provider 配置而非 Nanobot 本体。

2. **[PR #5210](https://github.com/HKUDS/nanobot/pull/5210)** — P1，Open
   *WebUI `/webui/bootstrap` 受信反向代理认证（Cloudflare Tunnel/Access 场景）*
   标记为 `feature, security, priority: p1`，体现了社区对**零信任部署场景**的强诉求。

3. **[PR #5194](https://github.com/HKUDS/nanobot/pull/5194)** — P2，Open
   *加速 WebUI JSONL 会话列表与线程加载*
   反映长会话用户对 WebUI 性能的持续抱怨。

4. **[Issue #5198](https://github.com/HKUDS/nanobot/issues/5198)** — Open
   *无法在指定会话内切换 Model（仅顶层 fallback）*
   用户希望 `/model` 命令能在当前会话内生效，而非全局重配置。

> **共性诉求：** 用户普遍关注「**模型切换粒度**」「**WebUI 性能**」「**多 Provider/代理部署安全**」三大主题。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 标题 | 状态 | 是否已有 Fix PR |
|------|------|------|------|-----------------|
| 🔴 高 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) | 无法在指定会话内切换模型 | OPEN | ❌ 无 |
| 🟡 中 | [#5205](https://github.com/HKUDS/nanobot/issues/5205) | `nanobot plugins enable feishu` 触发 `ensurepip` 缺失 | CLOSED | ❌ 修复方式未在 PR 列表中体现 |
| 🟡 中 | [#5163](https://github.com/HKUDS/nanobot/issues/5163) | Cron 手动运行完成状态被 WebUI 轮询覆盖 | CLOSED | ✅ [#5183](https://github.com/HKUDS/nanobot/pull/5183) |
| 🟡 中 | [#4801](https://github.com/HKUDS/nanobot/issues/4801) | `MemoryStore._format_messages` KeyError | CLOSED | ✅ [#5153](https://github.com/HKUDS/nanobot/pull/5153) |
| 🟢 低 | [#5185](https://github.com/HKUDS/nanobot/issues/5185) | Provider 回吐 tool call 代码 | CLOSED (invalid) | — |

**回归风险提示：**[#5206](https://github.com/HKUDS/nanobot/pull/5206)（流式响应重复日志）与 [#5208](https://github.com/HKUDS/nanobot/pull/5208)（Dream 游标卡死）已合并，建议关注后续回归测试报告。

---

## 六、功能请求与路线图信号

正在评审中的功能 PR，透露下一版本的潜在方向：

| 功能 | PR | 成熟度 | 推测影响 |
|------|-----|--------|----------|
| **跨会话搜索与 @ 提及** | [#5211](https://github.com/HKUDS/nanobot/pull/5211) | 评审中 | WebUI 体验跃升 |
| **Quick Chat / Temporary Chat** | [#5184](https://github.com/HKUDS/nanobot/pull/5184) | 评审中 | 对齐 ChatGPT UX |
| **WebUI 受信代理 Auth** | [#5210](https://github.com/HKUDS/nanobot/pull/5210) | 评审中（P1/Security） | 企业部署刚需 |
| **模型预设（preset）切换可视化** | [#5202](https://github.com/HKUDS/nanobot/pull/5202) | 评审中 | 与 [#5198](https://github.com/HKUDS/nanobot/issues/5198) 强相关 |
| **Spawn 子代理支持 model preset** | [#5207](https://github.com/HKUDS/nanobot/pull/5207) | 评审中 | 多代理生态补全 |
| **WebUI 加载性能优化** | [#5194](https://github.com/HKUDS/nanobot/pull/5194) | 评审中 | 大用户量场景 |
| **skills.sh well-known 来源支持** | [#5186](https://github.com/HKUDS/nanobot/pull/5186) | 评审中 | 扩展技能生态 |

**信号解读：** WebUI 与 Session/Channel 子系统正处于密集迭代期，下个版本很可能围绕「**会话模型切换 + 跨会话搜索 + 安全部署**」形成一次较大体验升级。

---

## 七、用户反馈摘要

从 Issues 评论与 PR 描述中提炼的真实诉求：

- **痛点 — 模型切换不灵活：** [#5198](https://github.com/HKUDS/nanobot/issues/5198) 用户明确对比了「Cloud SaaS AIs」的 UX，认为 Nanobot 的 `/model` 命令仅在顶层生效、UI 模型标记不可点击，体验落后。
- **痛点 — 长会话性能：** [#5194](https://github.com/HKUDS/nanobot/pull/5194) 反映出 WebUI 在 JSONL 会话增长后加载变慢，需要索引与快照优化。
- **痛点 — 部署安全：** [#5210](https://github.com/HKUDS/nanobot/pull/5210) 反映使用 Cloudflare Tunnel + Access 时缺乏对 `/webui/bootstrap` 的受信代理认证路径。
- **痛点 — Cron 状态不同步：** [#5163](https://github.com/HKUDS/nanobot/issues/5163) 用户手动触发 Cron 后，jobs.json 与 WebUI 仍显示旧 `Failed` 状态，造成误导。
- **场景 — 多 Channel/代理编排：** [#5207](https://github.com/HKUDS/nanobot/pull/5207) 子代理需要独立 preset，说明用户已经在做复杂的多模型编排。
- **正面反馈（隐含）：** [#5108](https://github.com/HKUDS/nanobot/pull/5108) 引入按发送方限流表明社区已经认可 Channel Adapter 是 Nanobot 的核心入口，扩展性良好。

---

## 八、待处理积压

需要维护者重点关注的项目：

| 编号 | 类型 | 状态 | 风险点 |
|------|------|------|--------|
| [#5198](https://github.com/HKUDS/nanobot/issues/5198) | Issue | OPEN | 用户痛点明确但 24 小时内未指派 / 暂未关联修复 PR |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) | PR | OPEN（P1） | 安全相关，需要安全维护者优先评审 |
| [#5139](https://github.com/HKUDS/nanobot/pull/5139) | PR | OPEN（P1, **conflict**） | 标记了合并冲突，需解决冲突后才能进入评审 |
| [#5194](https://github.com/HKUDS/nanobot/pull/5194) | PR | OPEN（P2） | WebUI 性能，用户面广，建议尽快评估 |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | PR | OPEN（**conflict**，来自 2026-05） | 已积压约 2.5 个月，DeepSeek 兼容性补丁长期悬而未决 |
| [#3732](https://github.com/HKUDS/nanobot/pull/3732) | PR | **已关闭**（同日合并） | 注意关联 Issue 是否需要同步关闭 |

**建议：** 优先推进 [#5139](https://github.com/HKUDS/nanobot/pull/5139) 的冲突解决与 [#3869](https://github.com/HKUDS/nanobot/pull/3869) 的长期积压清理；同时为 [#5198](https://github.com/HKUDS/nanobot/issues/5198) 指派 owner 并关联 [#5202](https://github.com/HKUDS/nanobot/pull/5202)/[#5207](https://github.com/HKUDS/nanobot/pull/5207) 形成完整闭环。

---

*报告基于 NanoBot (HKUDS/nanobot) GitHub 公开数据自动生成。所有链接指向 GitHub 原始页面，便于溯源。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-02

> 数据来源：github.com/nousresearch/hermes-agent  
> 统计窗口：过去 24 小时

---

## 1. 今日速览

Hermes Agent 过去 24 小时保持**高度活跃**：50 条 Issues（35 新开/活跃、15 已关闭）、50 条 PR（35 待合并、15 已合并/关闭），且**无新版本发布**。讨论焦点高度集中于**三大主题**——多 Profile 安全边界（凭据隔离、Secret 泄漏、媒体凭据注入）、安装/更新链路稳健性（npm 引擎约束、launcher 自愈、Windows 引导失败），以及 Hermes Desktop 的 UX 与渲染缺陷（IME 预编辑、终端乱码、demo 插件残留）。Studio729 仍为 Desktop 端主要贡献者，单日合并 5 条 PR，推动桌面体验向生产可用状态靠拢。

---

## 2. 版本发布

⚠️ **无新版本发布**。今日所有已合并 PR 仍位于 main 分支（HEAD 可见为 `7f4d15515`、附近 commit `3bed7d4ae`、`d33becd87`），尚未打包为新 tag。建议维护者考虑推进 0.19.x 的补丁版本，以缓解 #75598、#76484 等高频更新/安装失败报告。

---

## 3. 项目进展

今日共 **15 条 PR 已合并/关闭**，整体推进方向如下：

### 🔒 安全加固（最高优先级）
- **[#70144](https://github.com/nousresearch/hermes-agent/pull/70144)** `fix(gateway): deny sibling-profile credentials in media delivery`  
  修复 MEDIA 标签可注入**兄弟 Profile 凭据**的提权路径，关闭多 Profile 部署下的横向渗透通道。
- **[#67969](https://github.com/nousresearch/hermes-agent/pull/67969)** `fix(config): mask inline fallback provider keys in hermes dump`  
  `hermes dump` 此前会把 `fallback_providers` 的原始 `api_key` 写入 `config_overrides`，而该块正是 bug 报告模板要求用户粘贴到公开 issue 的字段。修复后明文密钥不再外泄。
- **[#56040](https://github.com/nousresearch/hermes-agent/pull/56040)** `fix: redact secrets in streaming path split-message chunks`  
  流式路径仅剥离 MEDIA/audio_as_voice，对 secret 与 tool-trace banner 不做处理；分片消息中间块被 `finalize=True` 落定，存在泄漏窗口。修复后完整 redact。

### 🖥️ Desktop 体验提升
- **[#67091](https://github.com/nousresearch/hermes-agent/pull/67091)** `fix(desktop): preserve fresh-session title routing` — 新会话路由在 transient 渲染期被陈旧 last-session 覆盖的问题。
- **[#64094](https://github.com/nousresearch/hermes-agent/pull/64094)** `feat(desktop): surface async process/delegation results in chat` — 后台进程/Hephaestus 委派结果现在以持久 transcript 行呈现，不再仅刷新状态栈。
- **[#67822](https://github.com/nousresearch/hermes-agent/pull/67822)** `fix(desktop): render fenced file lists as code blocks` — 路径型列表的 markdown 渲染归位。
- **[#67836](https://github.com/nousresearch/hermes-agent/pull/67836)** `fix(desktop): prevent GitHub link junk titles` — GitHub soft-404 标题覆盖有效 PR 链接的 PrettyLink 行为已修复。
- **[#40322](https://github.com/nousresearch/hermes-agent/pull/40322)** `Add opt-in Headroom Phase 1 tool-output compression plugin` — Headroom 结构化压缩实验提升为 Phase 1，默认关闭。

### ⚙️ 安装/会话恢复
- **[#66698](https://github.com/nousresearch/hermes-agent/pull/66698)** `fix(write_approval): dedupe pending writes by payload fingerprint` — 同一 patch 在审批栈堆积 N 份的 bug。
- **[#35040](https://github.com/nousresearch/hermes-agent/pull/35040)** `feat(api): add native voice turn stream endpoint` — HAL Voice 原生语音流式端点 `POST /api/voice/turns/stream`。
- **[#73811](https://github.com/nousresearch/hermes-agent/pull/73811)** `fix: config opt-in reasoning_content replay for self-hosted thinking models` — 支持本地 Kimi K3（llama.cpp）等需要回放完整 assistant 消息的推理模型。

**整体评估**：合并方向覆盖了"安全 + 桌面体验 + 安装链"三大痛点，项目向 0.20 生产可用方向稳健推进；但**版本未发**，变更仍滞留在 main。

---

## 4. 社区热点

### 高讨论 Issues
| # | Issue | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| [#75598](https://github.com/nousresearch/hermes-agent/issues/75598) | 近期更新使程序不稳定，多 gateway 冲突 | 7 | 0 | 已关闭 |
| [#65274](https://github.com/nousresearch/hermes-agent/issues/65274) | Desktop Project 内新会话回退到 HOME cwd（Windows） | 6 | 1 | OPEN |
| [#51603](https://github.com/nousresearch/hermes-agent/issues/51603) | 多 Profile 下 `resolve_anthropic_token()` 越权读取 | 5 | 0 | 已关闭 |
| [#37566](https://github.com/nousresearch/hermes-agent/issues/37566) | **Desktop 字体选择器**功能请求 | 4 | **5** | 已关闭 |
| [#60845](https://github.com/nousresearch/hermes-agent/issues/60845) | Telegram 排队响应绕过 MEDIA 提取 | 4 | 0 | OPEN |
| [#76352](https://github.com/nousresearch/hermes-agent/issues/76352) | MCP `list_entities` 超大返回导致压缩耗尽 | 4 | 0 | 已关闭 |
| [#43757](https://github.com/nousresearch/hermes-agent/issues/43757) | Responses API `function_call_output` 被剥离 | 3 | 0 | OPEN |
| [#32887](https://github.com/nousresearch/hermes-agent/issues/32887) | `gateway_state.json` 无心跳 → 跨容器误判 down | 3 | 0 | OPEN |
| [#62935](https://github.com/nousresearch/hermes-agent/issues/62935) | `microsoft-teams-apps` 导入副作用泄漏 .env | 3 | 0 | 已关闭 |
| [#25849](https://github.com/nousresearch/hermes-agent/issues/25849) | 缺少 `EMAIL_ACCOUNT` 与 `EMAIL_ADDRESS` 区分 | 3 | 0 | OPEN |

### 🔥 关注度最高
- **[#37566 Desktop 字体选择器](https://github.com/nousresearch/hermes-agent/issues/37566)** —— **👍 5**，是今日**唯一高赞票**项。反映用户对 Desktop UI 可定制性的强烈需求，对比 WebUI 显得功能薄弱。
- **[#75598 更新稳定性崩溃](https://github.com/nousresearch/hermes-agent/issues/75598)** —— 7 条评论，是昨日最大舆情点。需关注 root cause 是否被 [#76518](https://github.com/nousresearch/hermes-agent/pull/76518) 完全覆盖。

---

## 5. Bug 与稳定性

按严重程度排列（结合 P 标签 + 实际影响范围）：

### 🔴 P0 / 高影响（安全与功能性崩溃）
| # | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| [#62935](https://github.com/nousresearch/hermes-agent/issues/62935) | `microsoft-teams-apps` import 副作用向所有 gateway 进程加载外部 .env，破坏 profile secret 隔离 | 已有 | 已关闭 ✅ |
| [#51603](https://github.com/nousresearch/hermes-agent/issues/51603) | `resolve_anthropic_token()` 绕过 profile secret scope，多 Profile 凭据泄漏 | 已有 | 已关闭 ✅ |
| [#75598](https://github.com/nousresearch/hermes-agent/issues/75598) | 近期更新导致程序不稳定、多 gateway 冲突 | [#76518](https://github.com/nousresearch/hermes-agent/pull/76518) 部分相关 | 已关闭 |
| [#76435](https://github.com/nousresearch/hermes-agent/issues/76435) | Discord gateway 重连循环 + Desktop 更新器无法使用 | **无** | OPEN ⚠️ |
| [#43757](https://github.com/nousresearch/hermes-agent/issues/43757) | Responses API `function_call_output` 被剥离，跨轮 tool 结果丢失 | **无** | OPEN ⚠️ |

### 🟠 P2 中影响（功能受损）
- [#60845](https://github.com/nousresearch/hermes-agent/issues/60845) Telegram 排队响应绕过 MEDIA 提取（**无 fix PR**） — OPEN
- [#65274](https://github.com/nousresearch/hermes-agent/issues/65274) Desktop 新会话回退 HOME cwd（Windows）（**无 fix PR**） — OPEN
- [#76505](https://github.com/nousresearch/hermes-agent/issues/76505) 原生图像模式全分辨率无预处理，Qwen3VL 拒收（**无 fix PR**） — OPEN
- [#76510](https://github.com/nousresearch/hermes-agent/issues/76510) gateway lifecycle guard 对大二进制绝对路径误报 — 已关闭 ✅
- [#76511](https://github.com/nousresearch/hermes-agent/issues/76511) Copilot token exchange 启动阻塞 ~4.5s — 已关闭 ✅
- [#76352](https://github.com/nousresearch/hermes-agent/issues/76352) MCP `list_entities` 超大返回 + 压缩耗尽 — 已关闭 ✅
- [#76481](https://github.com/nousresearch/hermes-agent/issues/76481) OpenRouter xAI `:online` 重复 `web_search` 工具名 — OPEN
- [#76482](https://github.com/nousresearch/hermes-agent/issues/76482) kanban notifier 跨 Profile 单例冲突 — 已关闭 ✅（[#76514](https://github.com/nousresearch/hermes-agent/pull/76514) 相关）
- [#76485](https://github.com/nousresearch/hermes-agent/issues/76485) Desktop session agent 内事件钩子未触发（Windows）— OPEN
- [#76491](https://github.com/nousresearch/hermes-agent/issues/76491) Desktop 终端在 gateway 模式下本地执行 — OPEN

### 🟡 P3 体验/边缘
- [#76448](https://github.com/nousresearch/hermes-agent/issues/76448) gateway lifecycle guard 误报（**已关闭** ✅，与 [#76510](https://github.com/nousresearch/hermes-agent/issues/76510) 同源）
- [#76484](https://github.com/nousresearch/hermes-agent/issues/76484) Windows bootstrap 因 `npm` 版本要求失败 — 已关闭 ✅
- [#76486](https://github.com/nousresearch/hermes-agent/issues/76486) `package.json` `npm >=12.0.0` 阻塞 Node 22 — OPEN
- [#76469](https://github.com/nousresearch/hermes-agent/issues/76469) Termux 安装 `nemo-relay<0.7,>=0.6.0` 无法解析 — OPEN
- [#76421](https://github.com/nousresearch/hermes-agent/issues/76421) `hermes update` 不自愈失效 launcher — 相关 fix [#76518](https://github.com/nousresearch/hermes-agent/pull/76518) OPEN
- [#32887](https://github.com/nousresearch/hermes-agent/issues/32887) `gateway_state.json` 缺少心跳 tick — OPEN
- [#25849](https://github.com/nousresearch/hermes-agent/issues/25849) `EMAIL_ACCOUNT` 缺失 — OPEN
- [#75960](https://github.com/nousresearch/hermes-agent/issues/75960) Desktop IME 预编辑相对占位符错位 — OPEN
- [#76064](https://github.com/nousresearch/hermes-agent/issues/76064) Desktop demo/dogfood 插件默认启用 — OPEN
- [#76381](https://github.com/nousresearch/hermes-agent/issues/76381) `sidebar`/`footer-*` PluginSlot 文档存在但 App.tsx 未渲染 — OPEN

**修复覆盖率统计**：今日 8 个 P2 bug 中，**5 个已有 fix 或已关闭**，3 个仍 OPEN（#60845、#43757、#65274、#76505 等）。整体**修复响应率约 60%**，但安全相关 bug 100% 已进入修复通道。

---

## 6. 功能请求与路线图信号

| # | 请求 | 是否已有 PR | 路线图判断 |
|---|---|---|---|
| [#37566](https://github.com/nousresearch/hermes-agent/issues/37566) Desktop 字体选择器 | ❌ | 5 👍，可纳入 0.20 UX 增强包 |
| [#64229](https://github.com/nousresearch/hermes-agent/issues/64229) **插件生命周期**（注册句柄、ownership ledger、on_unload、监督任务） | ❌ | 结构性增强，与 [#35040](https://github.com/nousresearch/hermes-agent/pull/35040) 等 Hook 体系契合，建议 0.20 |
| [#76519](https://github.com/nousresearch/hermes-agent/pull/76519) **自托管 OIDC 邮箱白名单** | ✅ OPEN | 单 operator 部署刚需，建议加快合并 |
| [#76207](https://github.com/nousresearch/hermes-agent/issues/76207) 隐藏 Vite warning / 升级 npm | ❌ | 配合 [#76486](https://github.com/nousresearch/hermes-agent/issues/76486) 一起处理 |
| [#34992](https://github.com/nousresearch/hermes-agent/issues/34992) **策略/审计授权层（Agent_Sudo

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：2026-08-02**
**数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度**偏低但保持稳定**。过去 24 小时内无新版本发布，Issue 与 PR 更新总数仅 4 条，社区进入相对平缓的迭代期。值得关注的是，1 条存在已久的 Matrix 连接稳定性 Bug（[#3203](https://github.com/sipeed/picoclaw/issues/3203)）仍处于未解决状态并被标记为 stale，反映出网络恢复机制这一基础设施层面的隐患尚未得到维护者回应。同时，2 条新功能 PR（Exa 搜索、OrcaRouter 提供商）正在等待审阅，预示着 v0.2.x 之后的版本可能进一步扩展工具生态与模型路由能力。

---

## 2. 版本发布

**本周期无新版本发布。** 当前最新稳定版仍为 v0.2.9（依据 Issue #3203 中的环境信息）。

---

## 3. 项目进展

今日有 **1 条 PR 被关闭**，无 PR 被合并。整体向前推进幅度有限：

- **[#3261 关闭]** [Add zh-TW locale and Traditional Chinese translations](https://github.com/sipeed/picoclaw/pull/3261)（作者：PeterDaveHello）—— 该 PR 因被标记为 **stale** 而被自动关闭，未被合并。该提案旨在为 WebUI 与文档添加繁体中文（zh-TW）本地化支持，使用台湾本地化术语。关闭原因需维护者确认，但反映出项目当前的 i18n 优先级可能集中在简体中文与英文上。

**结论：** 本日项目未在主线功能层面取得实质性推进，但积压了 2 条新功能 PR 待评审。

---

## 4. 社区热点

| 序号 | 议题 | 类型 | 评论数 | 👍 | 链接 |
|------|------|------|--------|-----|------|
| 1 | Matrix sync loop 缺重连逻辑 | Bug Issue | 7 | 2 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) |

**热点分析：**
[#3203](https://github.com/sipeed/picoclaw/issues/3203) 是近 30 天内社区讨论最密集的议题，7 条评论 + 2 个 👍 表明该 Bug 对实际部署用户的影响较为普遍。讨论聚焦于 Matrix channel 的 `/sync` 长轮询循环在网络抖动或 homeserver 重启后会**静默死亡**且无重连机制，导致 systemd 的 `Restart=on-failure` 无法触发——这是典型的"进程存活但功能失效"场景，反映出社区对生产环境稳定性的强烈诉求。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 编号 | 描述 | 是否有 Fix PR |
|------|------|------|---------------|
| 🔴 **P0 — 生产阻塞** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix 通道 `/sync` 长轮询循环无自动重连，网络/服务中断后永久静默失效 | ❌ 无 |

**严重程度说明：** 该 Bug 之所以被评为 P0，是因为：
1. **静默失败**——主进程仍处于运行状态，supervisor（systemd）无法触发重启；
2. **影响生产可用性**——用户无法察觉 Matrix 集成已停止工作；
3. **触发条件普遍**——任何短暂网络抖动或 homeserver 重启都会触发；
4. **影响范围广**——所有使用 Matrix 通道的部署都将受影响。

**建议：** 维护者应优先评估该 Issue 并设置 stale 豁免，避免被自动化工具清理。

---

## 6. 功能请求与路线图信号

今日待评审的 2 条 PR 均代表清晰的路线图扩展方向：

| PR | 功能 | 战略意义 | 链接 |
|----|------|---------|------|
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | 新增 **Exa** 作为原生 `tools.web` / `web_search` 提供商 | 进一步丰富 Web 搜索生态，支持时间范围过滤（d/w/m/y） | 🔍 |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | 新增 **OrcaRouter** 为 OpenAI 兼容 provider | 多供应商模型路由，与现有 `vendor/model` 命名规范保持一致 | 🤖 |

**路线图信号判断：**
- **Web 搜索层**正在从单一提供商向多提供商架构演进，Exa 的加入印证了"搜索即工具"的产品定位；
- **模型路由层**通过兼容 OpenAI 协议的第三方路由器（如 OrcaRouter）扩展，体现了 PicoClaw 在多模型混合部署场景下的灵活性。

**纳入下版本可能性评估：** 两条 PR 改动范围均较为局部（新增 provider 适配层），代码侵入性低，**若维护者评审顺利，有望在 v0.2.10 或 v0.3.0 中合并**。

---

## 7. 用户反馈摘要

基于 [#3203](https://github.com/sipeed/picoclaw/issues/3203) 的 7 条评论提炼：

- **痛点 1：静默失效无感知** —— 用户反馈 Matrix 通道在后台"看似运行"但已停止接收消息，必须人工检查或重启；
- **痛点 2：缺失重试/退避机制** —— 社区期望实现类似指数退避（exponential backoff）的重连策略，参考其他 IM 集成（如 Telegram、Slack）的实现；
- **痛点 3：缺乏健康检查指标** —— 用户希望添加可观测性支持（如 metrics endpoint 或日志级别提升），以便在 systemd 之外做存活检测；
- **使用场景：** 至少部分用户将 PicoClaw 部署在 systemd 管理的生产服务器上，对自动恢复能力有刚性需求。

**繁体中文本地化 PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) 被关闭为 stale**，意味着社区中存在台湾繁体用户群体的本地化诉求，但暂未进入项目优先级视野。

---

## 8. 待处理积压（Stale / 长期未响应）

| 编号 | 类型 | 创建时间 | 等待天数 | 状态 | 链接 |
|------|------|---------|---------|------|------|
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Bug | 2026-07-02 | **31 天** | OPEN · stale | [查看](https://github.com/sipeed/picoclaw/issues/3203) |
| [#3261](https://github.com/sipeed/picoclaw/pull/3261) | PR (i18n) | 2026-07-16 | **17 天** | CLOSED · stale | [查看](https://github.com/sipeed/picoclaw/pull/3261) |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR (新功能) | 2026-07-26 | 7 天 | OPEN | [查看](https://github.com/sipeed/picoclaw/pull/3299) |
| [#3309](https://github.com/sipeed/picoclaw/pull/3309) | PR (新功能) | 2026-08-01 | 1 天 | OPEN | [查看](https://github.com/sipeed/picoclaw/pull/3309) |

**维护者建议关注清单：**

1. **🔴 紧急：** [#3203](https://github.com/sipeed/picoclaw/issues/3203) 已等待 31 天且为 P0 级生产 Bug，建议设置 `stale-exempt` 标签并安排修复；
2. **🟡 中等：** [#3299](https://github.com/sipeed/picoclaw/pull/3299)、[#3309](https://github.com/sipeed/picoclaw/pull/3309) 两条新功能 PR 需要及时评审，避免进入 stale 队列；
3. **🟢 后续：** [#3261](https://github.com/sipeed/picoclaw/pull/3261) 的关闭需确认是否已与贡献者沟通后续 i18n 路线，避免社区贡献者流失。

---

## 📊 项目健康度总览

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | Issue/PR 更新量低于日常均值 |
| 响应及时性 | ⭐⭐☆☆☆ | 存在 31 天未响应的 P0 Bug |
| 版本节奏 | ⭐⭐⭐☆☆ | 维持 v0.2.9 稳定版但无新发布 |
| 社区参与 | ⭐⭐⭐☆☆ | 仍有外部贡献者提交功能 PR |
| 风险信号 | ⚠️ Matrix 通道静默失效风险未缓解 |  |

**一句话总结：** PicoClaw 进入功能扩展与稳定性债务并存的阶段——维护者宜在评审新功能 PR 的同时，优先处理 Matrix 重连这一长期 P0 隐患，避免对生产用户造成持续影响。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-08-02**
**仓库：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 在过去 24 小时内呈现**高强度维护节奏**：完成 1 次重大版本发布（v2.1.54），关闭/合并 5 个 PR，并新开 10 个待审 PR，活跃度显著高于日常均值。维护者 glifocat 主导了今日多项关键操作——包括修复发布后安全漏洞、清理有缺陷的 qodo skills、统一 iMessage 架构、修复非 Claude 安装的 setup 体验。**项目健康度评估：良好向优**，核心团队响应迅速，重大重构（iMessage 统一）与稳定性修复（凭证过期、outbound.db journal 恢复、rootless Docker 支持）同步推进。

---

## 2. 版本发布 ⚠️ 含破坏性变更

### 🚀 v2.1.54（Rollup Release）
🔗 https://github.com/nanocoai/nanoclaw/releases/tag/v2.1.54

**定位**：自 v2.1.17 以来的批量合并版本，涵盖 v2.1.18 ~ v2.1.54 所有提交。

**重大破坏性变更（BREAKING）**：

- **iMessage 统一为单一 `imessage` 通道**，通过 `/add-imessage` 提供两种后端：
  - **Local**：本机 Mac 的 `chat.db`（经 Chat SDK）
  - **Hosted**：原生 [Photon](https://photon.codes)（`spectru…`）
- 对应 PR：#2999 / #3164

**迁移注意事项**：
- 升级前请备份 `chat.db` 相关配置；旧的 iMessage 通道接入方式将失效
- 用户需重新运行 `/add-imessage` 选择 Local 或 Hosted 后端
- 建议查阅 RELEASE NOTES 中关于 Photon 凭证注册的章节（#3164 实现了可用注册流程）
- 其他 v2.1.18 ~ v2.1.54 之间的小版本改动，建议逐条 review CHANGELOG

---

## 3. 项目进展

今日有 5 个 PR 完成关闭/合并，覆盖**架构统一、安全加固、凭证可观测性**三大方向：

| PR | 主题 | 意义 |
|---|---|---|
| [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | Hosted iMessage (Photon) 替代 #2999 | iMessage 注册流程从"理论可行"变为"真正可上线"，为 v2.1.54 铺平道路 |
| [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) | 统一 iMessage 为单通道 + 双后端 | 减少长期分裂的 iMessage 集成形态，提升可维护性 |
| [#3168](https://github.com/nanocoai/nanoclaw/pull/3168) | 修复发布后安全漏洞 | 收紧了发布合并后的安全检查流程，避免回归 |
| [#3170](https://github.com/nanocoai/nanoclaw/pull/3170) | setup 失败时按所选 provider 分派 | 解决 Issue #3169，非 Claude 用户不再被强行推销 Claude CLI |
| [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | 凭证即将过期时告警 | 凭证失效不再仅以 `Read-only file system` 等隐晦错误出现，可观测性大幅提升 |

**整体进度评估**：今日合并的 5 个 PR 中，2 个属于"大型特性落地"（iMessage），2 个属于"安全/稳定"（release gap + credential alerting），1 个属于"UX 修复"（provider 分派）。**项目向前推进了一整个版本号区间**。

---

## 4. 社区热点

> 注：今日 Issues/PR 评论数普遍为 0，但**议题本身具备高代表性**，反映社区在多个方向上的真实诉求。

| 热点议题 | 链接 | 反映的诉求 |
|---|---|---|
| **#3171 两个 qodo skills 依赖未配置即拦截正常编码** | https://github.com/nanocoai/nanoclaw/issues/3171 | 用户期望"装即能用"，任何需要 SaaS 凭证的默认捆绑都应被剔除 |
| **#3169 非 Claude 安装的 setup UX** | https://github.com/nanocoai/nanoclaw/issues/3169 | 多 provider 场景下，setup 不应假设 Claude 是"万能诊断器" |
| **#3167 Codex 凭证过期无告警** | https://github.com/nanocoai/nanoclaw/pull/3167 | 用户希望"凭证生命周期"成为一等公民事件，而非隐式崩溃 |

**趋势分析**：今日社区讨论聚焦于 **"默认假设的破坏性"**——Claude CLI 假设、Qodo SaaS 假设、Codex 凭证永不过期假设。这说明随着多 provider 生态扩张，原有的 Claude-centric 设计正逐步成为阻力。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 状态 | Fix PR |
|---|---|---|---|
| 🔴 高 | **#3167 Codex ChatGPT 凭证过期仅以 "Read-only file system" 暴露** | ✅ 已关闭 | #3167（同 PR 闭环） |
| 🟠 中-高 | **#3166 migrate-v2 调用已删除的 `insertTask`，导入即 ESM 报错** | 🟡 Open | #3166（同名 PR 待合并） |
| 🟠 中-高 | **#3174 Rootless Docker 下 agent 容器不可用（2 个独立失败）** | 🟡 Open | #3174 |
| 🟡 中 | **#2750 容器被 SIGKILL 后 outbound.db journal 残留/竞态** | 🟡 Open（51 天） | #2750 待合并 |
| 🟡 中 | **#2801 路由器解析原语载荷（`"5"`、`"true"`）返回 undefined 字段** | 🟡 Open（46 天） | #2801 待合并 |
| 🟡 中 | **#2956 agent 同时通过 `send_message` 与 final output 重复投递** | 🟡 Open（28 天） | #2956 |
| 🟢 低 | **#3170 setup 失败分派给错误 provider** | ✅ 已关闭 | #3170 |

**稳定性信号**：
- 今日新增的关键 Bug 多与"多 provider / 多部署形态"相关——凭证、rootless Docker、ESM 导入、journal 恢复
- 修复链路完整：除 #3174（rootless Docker 全新场景）外，其余均有对应 fix PR
- 建议优先评审 #3166（导入即崩溃，影响所有迁移用户）

---

## 6. 功能请求与路线图信号

虽无明确 "Feature Request" 标签，但以下 PR/Issue 反映了**用户驱动的方向**：

| 方向 | 来源 | 纳入下一版本概率 |
|---|---|---|
| **Rootless Docker 支持** | [#3174](https://github.com/nanocoai/nanoclaw/pull/3174) | ⭐⭐⭐⭐⭐ 高 —— 安全默认逐步收紧，rootless 几乎是必经之路 |
| **凭证过期告警** | [#3167](https://github.com/nanocoai/nanoclaw/pull/3167) | ✅ 已合入 v2.1.54 |
| **Hosted iMessage (Photon)** | [#3164](https://github.com/nanocoai/nanoclaw/pull/3164) | ✅ 已合入 v2.1.54 |
| **删除默认捆绑的 Qodo skills** | [#3172](https://github.com/nanocoai/nanoclaw/pull/3172) | ⭐⭐⭐⭐⭐ 高 —— Issue #3171 闭环需此 PR |
| **反应投递转为 best-effort** | [#3121](https://github.com/nanocoai/nanoclaw/pull/3121) | ⭐⭐⭐ 中 |
| **凭证存储出口（egress）改造** | [#3173](https://github.com/nanocoai/nanoclaw/pull/3173) | ⭐⭐⭐⭐ 中-高 |

**路线图信号**：下一小版本（v2.1.55 或 v2.2.x）很可能包含 **rootless Docker + Qodo 清理 + egress 改造** 三件套，**安全与默认行为收敛**仍是核心主线。

---

## 7. 用户反馈摘要

> 由于 24h 内 Issues 评论数普遍为 0，本节从 PR/Issue 正文提炼一手用户语境：

- **Issue #3169（glifocat）**：用户明确选择 codex 后，仍被强制询问是否安装 Claude CLI——"**The operator picked a different**"（已通过 #3170 闭环）
- **Issue #3171（glifocat）**：两个 qodo skills 在没有 SaaS 凭证的情况下被默认启用，**"intercept normal coding requests"**——用户痛点是"装了就报错/抢消息"，而非"功能缺失"
- **PR #3167（AmiTal4）**：**"2026-08-01 06:39Z Codex ChatGPT 凭证过期，操作者在 WhatsApp 看到的只是一串 Reconnecting 错误"** —— 用户痛点是**静默失败**，而非功能异常
- **PR #3174（Denver901）**：用户**"deliberately kept the agent account out of the docker group"** —— 主动安全实践，反而踩到两个隐藏失败

**核心痛点归纳**：
1. 多 provider 环境下，"Claude-centric 默认"反复骚扰非 Claude 用户
2. 默认捆绑的 SaaS 依赖未声明、未配置即可拦截核心流程
3. 凭证生命周期事件没有用户可见的告警通道
4. 安全加固（rootless、隔离账户）的实践者反而成为兼容性受害者

---

## 8. 待处理积压 ⚠️

以下 PR/Issue **创建已久但仍在 OPEN**，提醒维护者关注：

| 编号 | 主题 | 创建日 | 等待天数 | 链接 |
|---|---|---|---|---|
| **#2750** | 恢复 outbound.db stale journal（fix #2516, #2640） | 2026-06-12 | **51 天** | https://github.com/nanocoai/nanoclaw/pull/2750 |
| **#2801** | 路由器硬化：`safeParseContent` 原语载荷 | 2026-06-17 | **46 天** | https://github.com/nanocoai/nanoclaw/pull/2801 |
| **#2956** | 抑制 agent 重复投递 | 2026-07-05 | **28 天** | https://github.com/nanocoai/nanoclaw/pull/2956 |
| **#3046** | 配对文档与状态块对齐 | 2026-07-14 | **19 天** | https://github.com/nanocoai/nanoclaw/pull/3046 |
| **#3090** | 模板顶层 Markdown 前置 | 2026-07-19 | **14 天** | https://github.com/nanocoai/nanoclaw/pull/3090 |
| **#3121** | 反应投递改为 best-effort | 2026-07-23 | **10 天** | https://github.com/nanocoai/nanoclaw/pull/3121 |

**建议**：#2750 与 #2801 已超过 45 天未合并，且均涉及**数据完整性 / 安全输入解析**，建议在下一小版本窗口优先评审。

---

## 📊 当日数据卡片

| 指标 | 数值 |
|---|---|
| 新版本发布 | 1（v2.1.54，含 BREAKING） |
| Issues 新增/活跃 | 1 |
| Issues 关闭 | 1 |
| PRs 待合并 | 10 |
| PRs 合并/关闭 | 5 |
| 长期积压（>30 天） | 2 |
| 主导维护者 | glifocat（5 个动作） |
| 主要方向 | 安全加固 + 多 provider 适配 + iMessage 统一 |

**整体健康度**：🟢 **良好**。重大特性按计划落地，破坏性变更管理得当（伴随注册流程 PR），长期积压需关注但未失控。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-08-02
**数据范围**：过去 24 小时（基于 GitHub 公开数据）
**项目地址**：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 一、今日速览

IronClaw 项目昨日延续了高强度的 **Wave 2 架构重构** 主线，核心贡献者 BenKurrek 单人推进了 6 个 XL 级重构 PR（WS2.1/WS2.2/WS2.4/WS5），聚焦于将 `ironclaw_product_contracts` 设为中性化产品契约归宿、剥离 `extension_manager` 子 crate、反转 webui/operator/openai_compat 的端口依赖方向。同期 ilblackdragon 主导的 LLM 性能优化（Anthropic `cache_control` 显式断点、系统前缀字节稳定）已与 PR #5981 的排队消息引导重新对齐。**性能回归修复** 是今日另一条主线：serrrfirat 的 PR #6973 正在解决由 #6696 引入的 hosted Postgres API 容量回退（p95 从 3.74s 退化至 12.0s），同时新发现 libSQL 在工具密集场景下 p95 高达 37–135s 的新瓶颈。社区活跃度健康：11 条新议题、24 个 PR 更新，PR 关闭率 33%，Issues 关闭率 18%，主要由 CI 治理与架构梳理带动。

---

## 二、版本发布

虽然过去 24 小时未触发新 Release 标签，但 **自动化发布机器人提交了开放 PR [#5598](https://github.com/nearai/ironclaw/pull/5598)**，提议跨子 crate 的版本跃迁，请维护者注意合并评估：

| Crate | 当前版本 | 目标版本 | 兼容性 |
|---|---|---|---|
| `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠ API 破坏性变更 |
| `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ API 兼容 |
| `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠ API 破坏性变更 |

`ironclaw_common` 的破坏性变更包含 `failure copy_impl_added`（类型新增 trait 实现）等改动。该 PR 自 2026-07-03 起悬而未决近 30 天，建议关注合并节奏。

---

## 三、项目进展

过去 24 小时共 **合并/关闭 8 个 PR**，结构性贡献显著：

### 架构重构里程碑
- **[#6998](https://github.com/nearai/ironclaw/pull/6998) [已合并] refactor(contracts): WS2.1** — `ironclaw_extension_host` 转而实现 `ironclaw_product_contracts` 端口定义，行为零变化，是 Wave 2 顺序依赖链的"排头兵"。这是本日最重要的里程碑，标志 Wave 2 第一槽位落地。
- **[#7000](https://github.com/nearai/ironclaw/pull/7000) [OPEN] refactor: WS2.2 ProductSurfaceFailure 关键节点** — 处理 `ironclaw_extension_host` 跨 19 个生产文件借用产品工作流错误词汇的术语污染，被 WS2.1 标记为"剩余最大单一术语"。
- **[#7002](https://github.com/nearai/ironclaw/pull/7002) [已关闭] refactor: WS5 端口反转** — webui + openai_compat 反转至 product_contracts；关闭时已包含 #7000 的并集合并。
- **[#7003](https://github.com/nearai/ironclaw/pull/7003) [OPEN] refactor: WS2.4 extension_manager 拆分** — 把 lifecycle authority 与 extension-management 产品面分到 `ironclaw_extension_manager` 子 crate。
- **[#7005](https://github.com/nearai/ironclaw/pull/7005) [OPEN] refactor: WS5 conversations/threads 命名陷阱修复** — 词汇统一 + 附件契约宽化。
- **[#7004](https://github.com/nearai/ironclaw/pull/7004) [OPEN] refactor: WS5 operator 端口反转** — 完成 Wave 2 stack 的最后一环：`#6998 → #7000 → #7003 → #7004`。

### CI 治理收尾
- **[#6995](https://github.com/nearai/ironclaw/pull/6995) [已关闭] docs: Wave 1 真相审计** — 对照已合并的 WS1.1–WS1.7 七项 PR 校准 `docs/reborn/target-architecture/` 决策记录。
- **[#6996](https://github.com/nearai/ironclaw/pull/6996) [已关闭] ci(gates): 关闭 #6963** — 通过清单驱动发现机制闭环剩余的 path-keyed CI gates（silent + loud 全覆盖），是 CI 治理 WS1 的收尾。
- **[#6761](https://github.com/nearai/ironclaw/pull/6761) [已关闭] test: 覆盖泛型出站注册** — 新贡献者 ogarciarevett 提交的回归测试，通过注册表边界暴露 no-op 风险。

**整体评估**：Wave 2 推进约 4/7 槽位（WS2.1 落地、WS2.2 已开、WS2.4 已开、WS5 半开），架构契约中性化进程过半。

---

## 四、社区热点

过去 24 小时评论与关注最集中的讨论：

| 排名 | 议题 | 评论数 | 性质 |
|---|---|---|---|
| 1 | [#6963](https://github.com/nearai/ironclaw/issues/6963) Path-keyed CI gates | **7** | 已被 PR #6996 闭环 |
| 2 | [#6974](https://github.com/nearai/ironclaw/issues/6974) libSQL thread_store_writes 病态 | 2 | 性能回归追踪 |
| 3 | [#6921](https://github.com/nearai/ironclaw/issues/6921) 中性化 loop/extension/product 契约提取 | 2 | 已关闭 |

**热点分析**：
- **#6963** 是 BenKurrek 在 PR #6946 评审中提出的"清单行级追踪过于薄弱"，衍生成对 8 个缺陷的强跟踪；社区互动集中于 gate 设计哲学（path-keyed vs inventory-driven）。
- **#6974** 来自 #6973（Postgres 容量恢复）拆分后的子议题，反映社区对 **性能回归可观测性** 的强烈关注——`main` 分支甚至无法在 20 分钟 CI 超时内跑完 `large-context` prefill。
- **#6921** 关联合并至 PR #6998 的 WS2.1 行，体现 "Issue 驱动契约 → PR 落地" 的良性治理闭环。

---

## 五、Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 性能回归 / 数据通路
- **[#6974](https://github.com/nearai/ironclaw/issues/6974) libSQL thread_store_writes 病理** — 工具密集压力用例 p95 达 37–135s，远超 2.5s SLO；`main` 在 20 分钟 CI 内无法完成 `large-context` prefill。**修复 PR**：尚无独立 PR，但 PR #6973 修复了 Postgres 容量路径。
- **[#6973](https://github.com/nearai/ironclaw/pull/6973) hosted Postgres API 容量回退** — p95 3.74s → 12.0s，`send_message` p95 从 275ms 暴涨至 4.78s，根因为 #6696 行原生进程日志变更。**修复 PR：已存在（待合并）**。

### 🟡 P1 — CI / 工作流失败
- **[#6978](https://github.com/nearai/ironclaw/issues/6978) reborn-tests.yml workflow_dispatch 结构性失败** — clean isolate 下仍红，根因为 `critical-mutation` 的 `if:` 条件（`reborn-tests.yml:788-793`）只允许 `pull_request`/`merge_group`，与 `workflow_dispatch` 不兼容。**修复 PR**：无。
- **[#7006](https://github.com/nearai/ironclaw/issues/7006) 变更覆盖率 gate** — PR #5981 的排队消息引导约 180 行落在 hermetic integration harness 不可执行的 4 类代码（故障注入、路径探测、嵌入式测试、机器生成表），被集成层覆盖率闸门拦截。**修复 PR**：#6992 已部分解决（locale 问题）。
- **[#6992](https://github.com/nearai/ironclaw/pull/6992) [已合并类] comm locale 钉死** — `scripts/ci/discover-reborn-package-crates.sh` 在 UTF-8 collation 下 `comm` 输入排序错误（`ironclaw_events` 排到 `ironclaw_event_streams` 前），通过 `LC_ALL=C` 修正。

### 🟢 P2 — UI / 体验
- **[#6917](https://github.com/nearai/ironclaw/pull/6917) webui 工作区文件链接未认证预览** — `/workspace/...` 与 `sandbox:/workspace/...` Markdown 链接需经认证 thread-scoped 附件预览打开。**修复 PR：已存在（待合并）**。

---

## 六、功能请求与路线图信号

| 请求 | 提出方 | 现状 | 路线图概率 |
|---|---|---|---|
| **[#7009](https://github.com/nearai/ironclaw/issues/7009) 新增 OrcaRouter 为内置 LLM provider** | jinhaosong-source | `providers.json` 已纳入 9 个同类网关（OpenRouter/Together/Fireworks/Cerebras/SambaNova/NVIDIA/Venice/io.net/Yandex），仅缺 OrcaRouter | **高** — 模式已成熟，PR 改动小 |
| **[#6993](https://github.com/nearai/ironclaw/issues/6993) OOBE 自动化任务后端接入** | rdisandro | UI 原型 #6994 已提交（轮播、内联卡片、agent-mode 标签） | **高** — 已有契约文档 `AUTOMATION-TASKS-CONTRACT.md` |
| **[#7007](https://github.com/nearai/ironclaw/pull/7007) merge queue 失败实时 Slack 告警** | serrrfirat | 已存在外部 CI 告

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期**：2026-08-02
**仓库**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 仓库今日整体活跃度偏低。**过去 24 小时内有 7 条 Issue 关闭、2 条 PR 仍处于待合并状态，但无新版本发布**。值得注意的是，所有今日更新的 Issue 与 PR 都被标记为 `[stale]`，表明这些条目在仓库中长期未获响应，今日的集中更新主要源于仓库批量清理或自动归档流程，而非实质性开发推进。社区反馈的真实痛点（自定义 MCP 不可用、长图解析崩溃、模型输入长度异常等）已积累数月仍未得到修复 PR，项目维护响应机制存在明显积压。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前没有可用的 Release 标签或版本说明。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，实质性代码推进停滞。两条待合并 PR 状态如下：

| PR | 标题 | 作者 | 状态 | 相关 Issue |
|---|---|---|---|---|
| [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | fix(agent): 修复 i18n 硬编码、Agent 弹窗 Escape 键支持及删除防重复点击 | MaoQianTu | 🟡 待合并（stale） | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | fix(cowork): show feedback when session rename fails | wangxu-dev | 🟡 待合并（stale） | [#670](https://github.com/netease-youdao/LobsterAI/issues/670) |

**评估**：两个 PR 都已存在超过 30 天未被评审合并，属于长期挂起状态，#2358 甚至已挂起超过半年（创建于 2026-07-18），项目代码迭代节奏偏慢。

---

## 4. 社区热点

今日最值得关注的 Issues 多聚焦于**自定义能力（MCP）、多模态解析、模型兼容性**三大方向：

| 排名 | Issue | 标题 | 评论数 | 👍 | 链接 |
|---|---|---|---|---|---|
| 🥇 | [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) | 自定义 studio http 的 mcp 无法使用 | 2 | 1 | 最高互动量 |
| 🥈 | [#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) | 上传长图（3M）解析页面报错 | 2 | 0 | 严重稳定性问题 |
| 🥉 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | CoworkPromptInput 硬编码中文标签等 | 1 | 0 | 唯一仍开放的 Issue |

**诉求分析**：
- **生态扩展受限**：[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293) 揭示 openclaw 引擎只支持 SSE 协议 MCP，不支持 HTTP 自定义 MCP，限制了用户的工具扩展能力。
- **多模态可靠性差**：[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296) 显示 3MB 图片即可让系统完全不可用，且需新开任务才能恢复，对生产场景影响严重。
- **国际化质量低**：[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) 反映代码中存在中文硬编码，违反项目自身的 `AGENTS.md` 规范。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（阻塞核心功能）
1. **[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)** — 上传 3MB 长图解析即触发整页报错，新任务也持续报错，整体服务不可用。
   - 创建: 2026-04-02 | 状态: 已关闭（stale）❌ **无修复 PR**

### 🟠 中等（影响特定工作流）
2. **[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)** — 自定义 HTTP 协议 MCP 在 openclaw 引擎中无法调用。
   - 创建: 2026-04-02 | 状态: 已关闭（stale）❌ **无修复 PR**

3. **[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)** — 模型连接测试通过，但仅输入两字即提示"输入内容过长"。
   - 创建: 2026-04-02 | 状态: 已关闭（stale）❌ **无修复 PR**

4. **[#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)** — 关闭某个模型提供方编辑面板后，切换到另一提供方时输入框全部置灰只读。
   - 创建: 2026-04-02 | 状态: 已关闭（stale）❌ **无修复 PR**

5. **[#1305](https://github.com/netease-youdao/LobsterAI/issues/1305)** — 定时任务运行成功后删除，历史记录中标题展示不正确。
   - 创建: 2026-04-02 | 状态: 已关闭（stale）❌ **无修复 PR**

### 🟡 轻微（UX 改进）
6. **[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)** — i18n 硬编码 + Agent 弹窗缺少 ESC 关闭 + 删除缺少防重保护。
   - 状态: **OPEN**，有对应修复 PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224)

**稳定性整体评估**：⚠️ **较差**。5 个严重/中等 Bug 均被关闭但**均无对应修复 PR**进入合并流程，这意味着问题可能仅作为 stale 归档，并未真正解决，存在回退后仍未修复的隐患。

---

## 6. 功能请求与路线图信号

| Issue | 功能建议 | 纳入下一版本的可能性 |
|---|---|---|
| [#1302](https://github.com/netease-youdao/LobsterAI/issues/1302) | 代码块添加工具栏行号切换按钮（# 图标），分别支持有/无语言标识两种情况 | 🟢 **较高** — 实现路径明确（react-syntax-highlighter 内置属性），且 PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 的作者 MaoQianTu 也发起了此条需求，活跃开发者关注 |
| [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | 会话重命名失败时给出本地化提示反馈 | 🟢 **较高** — 已有 PR 待合并，合并即可落地 |
| [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | i18n 完善 + 弹窗交互增强 | 🟢 **较高** — 已有 PR [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 待合并 |

**路线图信号**：用户对**开发体验（行号显示）、错误反馈可见性（重命名失败提示）、多语言质量（i18n）**有明确诉求。建议维护者优先合并 [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 与 [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)，这两条 PR 改动可控、价值清晰。

---

## 7. 用户反馈摘要

从 Issues 中提炼出的真实用户痛点：

- 🛠️ **生态扩展受限**（[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)）：用户尝试用 stdio/HTTP 协议接入自定义 MCP 工具，但 openclaw 引擎仅识别 SSE，导致用户只能退回 SSE 实现，灵活性差。

- 📸 **多模态不稳定**（[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)）：仅 3MB 长图即可让整个会话报错且**新任务也无法恢复**，说明错误处理机制缺乏优雅降级，用户不得不重启应用。

- 🤖 **模型兼容性 bug**（[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)）：测试连接正常但实际使用却提示"输入过长"，说明健康检查与真实调用链路之间存在参数传递不一致。

- 🗂️ **历史记录数据失真**（[#1305](https://github.com/netease-youdao/LobsterAI/issues/1305)）：删除定时任务后历史 tab 的标题展示异常，反映外键/缓存清理逻辑不完整。

- 🌍 **国际化不彻底**（[#1223](https://github.com/netease-youdao/LobsterAI/issues/1223)）：英文用户提示词中混入了中文标签，违反项目自有 AGENTS.md 规范，影响海外用户信任。

- ⚙️ **配置状态污染**（[#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)）：编辑面板状态未正确清理，导致后续面板进入只读状态，典型的 React 状态管理回归。

**用户满意度**：从评论和 👍 数来看，多数问题仅 0-1 个点赞，说明**用户社区活跃度偏低**，反馈渠道可能未有效触达核心用户群。

---

## 8. 待处理积压 ⚠️

以下条目长期未获维护者响应，建议优先关注：

| 类别 | 编号 | 标题 | 挂起时长 | 风险 |
|---|---|---|---|---|
| 🔴 PR 积压 | [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358) | show feedback when session rename fails | **约 15 天** | 长时间未评审，存在合并冲突风险 |
| 🔴 PR 积压 | [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) | 修复 i18n 硬编码 + Agent 弹窗 | **约 4 个月** | 严重过时，可能与主线代码已冲突 |
| 🟠 Issue 积压 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | i18n 硬编码 + 弹窗 UX | **约 4 个月** | 唯一开放 Issue，已有修复方案却未合并 |
| 🟠 Issue 积压 | [#670](https://github.com/netease-youdao/LobsterAI/issues/670) | session rename 无失败反馈 | **推测超半年**（PR 引用时间倒推） | 已有 PR 修复但未合并 |

**维护者建议**：
1. **立即合并** [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) 与 [#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)，二者改动局限、价值明确。
2. **重新评估被 stale 关闭的 5 个严重/中等 Bug**（[#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)、[#1296](https://github.com/netease-youdao/LobsterAI/issues/1296)、[#1298](https://github.com/netease-youdao/LobsterAI/issues/1298)、[#1305](https://github.com/netease-youdao/LobsterAI/issues/1305)、[#1307](https://github.com/netease-youdao/LobsterAI/issues/1307)），确认问题是否在主干已修复，避免用户使用中再次踩坑。
3. 完善 **stale bot 配置**，避免将有价值反馈（尤其是带 👍 的 [#1293](https://github.com/netease-youdao/LobsterAI/issues/1293)）误归档。

---

**报告生成时间**：2026-08-02
**数据来源**：GitHub REST API（Issues + PRs）
**健康度评级**：🟡 **需关注** — 社区反馈积压、PR 评审缓慢、多个严重 Bug 未实质修复。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-08-02
**数据周期**：过去 24 小时

---

## 1. 今日速览

Moltis 过去 24 小时整体活跃度为 **中等偏低**。项目在无新版本发布、无新 Issue 提交的情况下，仍有 3 个 Pull Request 获得更新，其中 2 个已进入已关闭状态（合并或关闭待确认），1 个仍待合并。更新内容高度聚焦于 **生产环境稳定性与可观测性**：包括修复渠道特权越权的安全问题、引入 Langfuse/OTLP 观测基础设施、以及放开对 `main` 会话的删除/归档限制。社区讨论度较低，所有 PR 的评论数与点赞数均为 0，开发者更多处于"提交—审阅"的单向推进阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 **2 个 PR** 进入已关闭状态，**1 个 PR** 仍待合并。

### ✅ PR #1170 — 已关闭
**fix(channels): gate /sh and privileged tools behind a per-account operators list**
([链接](https://github.com/moltis-org/moltis/pull/1170))
- 作者：penso（2026-07-26 → 2026-08-01）
- **重要性**：🔴 **安全修复**。此前通过访问白名单的渠道发送者可触发 `/sh` 命令及宿主工具，属于权限模型缺陷。本次改动引入按账户维度的 `operators` 列表，将"访问"与"特权"显式分离，并在 commands、callbacks、队列重放、聊天执行、外部入口等多处统一执行。
- **项目影响**：显著提升面向多租户/多渠道部署场景的安全基线，建议所有使用 channel 接入的生产环境升级。

### ✅ PR #1174 — 已关闭
**Add instrumentation and feedback collection infrastructure**
([链接](https://github.com/moltis-org/moltis/pull/1174))
- 作者：penso（2026-07-27 → 2026-08-01）
- **重要性**：🟢 **可观测性基础设施**。新增与后端无关的 agent 插桩、Langfuse v4 导出、运维侧 OTLP 后端，以及终端用户反应反馈机制。记录不可变的仅完成 turn 与 observation，streaming/non-streaming 行为对齐，支持 provider failover 归因、缓存感知 token 用量与 reasoning 字段。
- **项目影响**：项目正式迈向企业级可观测性栈（OpenTelemetry 兼容），为后续 SLO、计费、debug 工具奠定数据基础。

### 🟡 PR #1182 — 待合并（OPEN）
**fix(sessions): allow deleting and archiving the main session**
([链接](https://github.com/moltis-org/moltis/pull/1182))
- 作者：shixi-li（2026-08-01 创建并更新）
- 修复 [#1132](https://github.com/moltis-org/moltis/issues/1132)，放开 `main` 会话的删除/归档限制，同时保留"当前激活的 channel 会话"不可归档的兜底，`sessions.clear_all` 仍保留 main 与 channel-bound 会话。

> 📌 **健康度评估**：今日合并/关闭的两项均涉及重要变更（安全 + 可观测性），项目整体呈**稳健推进**态势；PR #1182 仍处早期，建议维护者尽快 review。

> ⚠️ **数据透明度说明**：本次报告中标注"已关闭"的 PR，未明确披露其为"已合并"还是"未合并关闭"。建议仓库维护者在日报配套的 GitHub Actions 流程中区分 `merged` 与 `closed_not_merged` 两类事件，以便更准确地追踪项目健康度。

---

## 4. 社区热点

| 排名 | 主题 | 评论数 | 👍 数 |
|------|------|--------|-------|
| — | — | — | — |

过去 24 小时所有 PR 的评论与点赞均为 0，**社区参与度处于静默期**。从历史活跃 PR 看，PR #1174（observability）与 PR #1182（session 行为放开）属于最易引发运维/终端用户讨论的话题，但目前缺乏互动数据。

**建议**：维护者可在相关 PR 中主动发起"使用场景征集"评论（如 @-mention 已知集成用户），以提升反馈密度。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 关联 PR | 状态 |
|--------|------|---------|------|
| 🔴 高 | 渠道发送者经访问白名单后仍可触发 `/sh` 与宿主特权工具（权限模型缺陷） | [#1170](https://github.com/moltis-org/moltis/pull/1170) | 已关闭 ✅ |
| 🟡 中 | `main` 会话无法被删除或归档，影响 session 清理与隐私操作 | [#1182](https://github.com/moltis-org/moltis/pull/1182) | Fix PR 待合并 🟡 |

**说明**：今日无新增崩溃/回归类 Issue 报告，安全缺陷 [#1170](https://github.com/moltis-org/moltis/pull/1170) 已修复，[#1132](https://github.com/moltis-org/moltis/issues/1132) 的修复 PR 已就位等待合并。

---

## 6. 功能请求与路线图信号

- **🔭 可观测性进入核心路线**：PR #1174 引入 Langfuse v4 + OTLP + 反应反馈，意味着项目未来版本大概率会将"agent telemetry"作为一等公民。这与行业趋势（OpenLLMetry、OpenInference）一致，可视为正式 roadmap 信号。
- **🛡️ 安全模型细化**：PR #1170 的"operators"概念暗示未来可能扩展更多角色（admin / auditor / operator），有助于后续 RBAC 模块的演进。
- **🧹 会话生命周期 UX**：PR #1182 显示用户对"统一管理 main / channel / 普通 session"存在诉求，session 抽象层或在下一版本得到更明确的文档化。

---

## 7. 用户反馈摘要

过去 24 小时 Issues 区无新增或活跃条目，**无用户评论可供提炼**。从 PR 描述推断的两类用户痛点：

1. **运维侧**：现有观测手段不足以诊断 provider failover、缓存命中与 reasoning 行为 → 推动 PR #1174。
2. **安全合规侧**：多渠道接入场景下的权限边界模糊 → 推动 PR #1170。
3. **终端用户侧**：主会话被"特殊对待"，清理不彻底 → 推动 PR #1182。

---

## 8. 待处理积压

| 类别 | 编号 | 标题 | 停留时长 | 建议 |
|------|------|------|----------|------|
| 待合并 PR | [#1182](https://github.com/moltis-org/moltis/pull/1182) | fix(sessions): allow deleting and archiving the main session | 1 天 | 维护者优先 review |
| 历史 Issue | [#1132](https://github.com/moltis-org/moltis/issues/1132) | main session 无法删除/归档 | 长期 | 待 #1182 合并后自动关闭 |

> 💡 **提醒**：仓库近 24 小时无新 Issue、无评论互动，建议维护者关注"开发者响应延迟"指标，避免 #1132 这类痛点长期积压。

---

**报告生成依据**：Moltis GitHub 仓库（moltis-org/moltis）2026-08-02 当日活动数据。
**覆盖范围**：Issues（0）、Pull Requests（3）、Releases（0）。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目日报
**报告日期：2026-08-02**

---

## 1. 今日速览

CoPaw（仓库地址：agentscope-ai/CoPaw，本数据以子项目 **QwenPaw** 为主）过去 24 小时保持中高强度迭代：9 条新开/活跃 Issue、13 条 PR 更新，**无新版本发布**。Issue 侧以 Bug 报告和体验优化诉求为主，PR 侧则呈现"一批修复 PR 集中提交、等待合并"的态势，**首次贡献者（first-time-contributor）占比明显提升**，显示社区参与热度上升。整体项目活跃度健康，但仍有较多开放 Issue/PR 处于待办状态，建议关注积压合并节奏。

---

## 2. 版本发布

⚠️ **无新版本发布**。最近一次发布需参考上游 Release 页面。当前版本线为 QwenPaw 2.0 / 2.0.1（桌面版），多个 Bug 报告基于 2.0.1。

---

## 3. 项目进展

过去 24 小时**仅 1 条 PR 被关闭/合并**：

- **#6598 [CLOSED]** `fix(skills): preserve plugin-sourced skill tags across reconcile cycles`（作者：BlackBox-Labs）
  - 修复 #6537：插件源 Skill 标签在重启后丢失的问题
  - 链接：https://github.com/agentscope-ai/QwenPaw/pull/6598
  - **说明**：同一问题被新 PR #6632 重新提交并开放，可能 #6598 因合并方式或分支策略被关闭，相关修复以 #6632 为准。

### 待合并的重要 PR（高优先级修复链）

BlackBox-Labs 在 24 小时内集中提交了一组针对近期 Issue 的修复 PR，呈现"Issue → PR"紧密对应关系：

| PR | 关联 Issue | 主题 |
|---|---|---|
| [#6632](https://github.com/agentscope-ai/QwenPaw/pull/6632) | #6537 | 插件 Skill 标签持久化 |
| [#6631](https://github.com/agentscope-ai/QwenPaw/pull/6631) | #6551 | 阿里云 coding plan 模型对齐官方 |
| [#6630](https://github.com/agentscope-ai/QwenPaw/pull/6630) | #6601 | 空模型响应不再静默失败 |
| [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) | #6624 | Scroll 自动压缩触发 summarize 记忆 |
| [#6628](https://github.com/agentscope-ai/QwenPaw/pull/6628) | #6541 | 压缩占位消息改用 SystemMsg（修复 DeepSeek 400 错误） |

**进展评估**：项目在「Provider 兼容性」「上下文压缩 / 记忆」「Skill 持久化」三条主线推进明显，每条 Bug 都已配套修复 PR，处于"待合并完成即可随下一版本发布"状态。

---

## 4. 社区热点

按评论数与互动量排序的活跃话题：

1. **#6593（评论 2）**：[Feature] 增加统一且专业的 QwenPaw 专用清理页面
   - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6593
   - **诉求分析**：长期使用后产生大量自动记忆、过期记忆、协作残留、自动备份等数据，存储臃肿且无法批量清理。**反映的是"长期用户的存储焦虑"**——产品缺乏生命周期管理能力。

2. **#6480（评论 2）**：[Question] 运行 nohup 命令 agent 都会卡住
   - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6480
   - **诉求分析**：`execute_shell_command` 使用 `nohup` 或 `&` 后台化时进程永不回到 idle 状态，属于**工具调用的进程生命周期缺陷**，影响任何需要后台任务的自动化场景。

3. **#6568（评论 2）**：[Feature] 全局快捷键唤出浮动快速输入框（豆包式）
   - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6568
   - **诉求分析**：希望类似 Raycast / 豆包的 `Option+Space` 体验，避免每次都要打开完整主窗口（1280×800）。**反映"随手提问"轻量化场景未被覆盖**。

> 注：其余 Issue 均为新开（评论 1），主要为提问或 Bug 首报。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（崩溃 / 数据丢失）

- **#6619 [Bug]** `ToolCallBlock` 没有 `extra_content` 字段导致崩溃
  - 路径：`openai_chat_model_compat._parse_stream_response`
  - 环境：QwenPaw 2.0.1 + agentscope 2.0.4.post1
  - **已有修复 PR**：✅ [#6620](https://github.com/agentscope-ai/QwenPaw/pull/6620)（first-time-contributor）
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6619

- **#6625 [Bug]** ACP `delegate_external_agent` 在通知与响应竞速时返回"completed without text output"
  - 影响外部 Agent 集成的可靠性
  - **已有修复 PR**：✅ [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623)（first-time-contributor）
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6625

### 🟠 中严重度（功能异常但可绕过）

- **#6624 [Bug]** 2.0 自动压缩（Scroll）未触发 `summarize_when_compact` 记忆流程
  - 对比：手动 `/compact` 可触发
  - **已有修复 PR**：✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629)
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6624

- **#6626 [Bug]** `Real behavior proof` CI gate 剥离 fenced Evidence 块（与 openclaw 移植偏差）
  - 影响 PR 合入流程
  - **修复 PR**：暂无（仅报告）
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6626

### 🟡 低严重度 / 待澄清

- **#6480** nohup/`&` 后台进程不回到 idle 状态（体验问题，但非崩溃）

**整体评估**：今日 Bug 修复链路完整（5/6 已有对应 PR），**项目对 Bug 的响应速度良好**。

---

## 6. 功能请求与路线图信号

### 已提交需求

| 需求 | Issue | 状态 |
|---|---|---|
| 统一清理页面（数据生命周期管理） | [#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593) | 讨论中，暂无 PR |
| 全局快捷键浮动输入框（豆包式） | [#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568) | 讨论中，暂无 PR |
| 多智能体协作引导优化 | [#6621](https://github.com/agentscope-ai/QwenPaw/issues/6621) | 用户反馈 + 文档改进建议 |
| loongsuite 链路追踪接入 | [#6627](https://github.com/agentscope-ai/QwenPaw/issues/6627) | 提问型，未明确需求 |
| OrcaRouter 内置 Provider | [#6622](https://github.com/agentscope-ai/QwenPaw/pull/6622) | **已有 PR（first-time-contributor）** |

### 路线图可能性判断

- 🟢 **高概率进入下版本**：OrcaRouter 内置（已有 PR #6622）、空响应错误提示（PR #6630）、Skill 标签持久化（PR #6632）
- 🟡 **中期路线**：Provider 发现/路由/Agent 控制统一化（[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)，开放已久）
- 🟢 **用户体验类**：全局快捷键浮动输入框（[#6568](https://github.com/agentscope-ai/QwenPaw/issues/6568)）契合"轻量化入口"产品方向，建议进入桌面端规划
- 🟡 **存储管理**：清理页面（#6593）反映长期用户的留存痛点，建议作为 v2.x 重要补强

---

## 7. 用户反馈摘要

从今日 Issue 评论与摘要中提炼的真实用户声音：

- 🔴 **多智能体引导缺失痛点**：用户 monicfenga 在 #6621 反馈，进行了 50+ 轮多智能体对话后才发现 Default Agent 不会自动调用其他 Agent，文档说明不足造成"大量无效调试和时间损耗"。
  - 链接：https://github.com/agentscope-ai/QwenPaw/issues/6621

- 🔴 **存储空间焦虑**：长期用户反映"日积月累越来越臃肿"，缺乏全局清理入口（#6593）。

- 🟠 **轻量化入口诉求**：用户希望"随手问一句"不必启动完整窗口（#6568），对标 Raycast / 豆包体验。

- 🟠 **自动化任务阻塞**：`nohup` / `&` 后台进程卡死问题阻碍生产自动化场景（#6480）。

- 🟢 **首次贡献者积极**：namphamdev、cocoakekeyu、jinhaosong-source、dl-g2026 等 first-time-contributor 主动提交修复 PR，**社区生态健康**。

---

## 8. 待处理积压

### 长期开放 PR（≥30 天未合并）

- **[#5490](https://github.com/agentscope-ai/QwenPaw/pull/5490)** `feat(console): show tool-card images inline and add gallery navigation`
  - 创建于 2026-06-24（**约 39 天前**）
  - 主题：工具产生的图片/截图/视频在聊天中以画廊方式内联展示
  - ⚠️ **建议维护者关注**：长期未响应

- **[#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302)** `feat: unify provider discovery, model metadata, routing, and agent controls`
  - 创建于 2026-07-21（约 12 天前）
  - 主题：统一 Provider 发现、模型元数据、路由、Agent 控制（关联 #6167）
  - 涉及架构级重构，**建议尽快评审或拆分**

- **[#6306](https://github.com/agentscope-ai/QwenPaw/pull/6306)** `feat(desktop): add workspace shortcut to sidebar`
  - 创建于 2026-07-21（约 12 天前）
  - 主题：桌面端侧边栏快捷进入工作区（关闭 #6083）

### 长期开放 Issue

- **[#6480](https://github.com/agentscope-ai/QwenPaw/issues/6480)** nohup/`&` 进程卡死问题
  - 创建于 2026-07-26（**约 7 天**）
  - 至今**无修复 PR**，影响所有需要后台任务的场景，建议提级处理

- **[#6593](https://github.com/agentscope-ai/QwenPaw/issues/6593)** 清理页面诉求
  - 创建于 2026-07-31（**2 天**）
  - 评论区已开始有讨论，**建议尽早回复并给出路线**

---

## 📊 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | Issue/PR 流量稳定 |
| 响应速度 | ⭐⭐⭐⭐ | Bug→PR 链路短 |
| 社区参与 | ⭐⭐⭐⭐⭐ | 多位 first-time-contributor |
| 版本节奏 | ⭐⭐⭐ | 24h 内无新版本发布 |
| 积压治理 | ⭐⭐ | #5490 等超期 PR 需关注 |

---

*本日报基于 GitHub 公开数据自动生成，数据快照时间：2026-08-02。所有链接均指向 `agentscope-ai/QwenPaw` 仓库对应 Issue/PR。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期：2026-08-02**
**数据范围：过去 24 小时**

---

## 1. 今日速览

ZeroClaw 仓库今日呈现**高活跃度、高吞吐**的态势：过去 24 小时 Issues 与 PRs 各刷新 50 条，其中 Issues 47 条仍处开放状态、3 条关闭，PRs 则全部处于待合并状态（0 已合并 / 0 已关闭），项目实质上处于**"密集评审期"**而非合并期。讨论热点高度集中在安全架构（KeySource、入站认证、Shell 命令分级）、记忆子系统（会话历史与长期记忆解耦、内存生命周期策略）与 v0.9.0 路线图相关 RFC；同时 v0.8.4 版本号 bump PR（#9648）已就位，翻译目录 fix 也在同步进行中，表明项目正在为下一个 release 做收口准备。整体来看，仓库**结构层面持续演进，版本节奏稳定推进**，但 PR 处理通道略有积压（50 条 OPEN 待合并）。

---

## 2. 版本发布

**无新版本发布。**

值得关注的版本前信号：

- PR #9648 — `chore(release): bump version to v0.8.4` 已开启，注明需将现有 `v0.8.4` tag 重新指向翻译目录 commit `a9757c23b84b69ca919daf795a552ba809961447`，尚未正式 release。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9648

---

## 3. 项目进展

今日**无 PR 合并 / 关闭**，所有 50 条 PR 均处于 OPEN 状态，整体属于"评审/修改中"。但仍有以下实质性推进值得关注：

### 3.1 版本号 bump 与翻译目录修正
- **PR #9648** `chore(release): bump version to v0.8.4` —— 准备 v0.8.4 发布，纠正现有 tag 指向错误的翻译目录 commit。该 PR 处于关键路径上，决定 v0.8.4 能否顺利 tag。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9648

### 3.2 Eval 评估框架批量落地（核心贡献者 IftekharUddin 一口气推进 6 个相关 PR）
围绕 #7065 的"Eval Phase 2"正在形成完整工具链：
- **PR #9220** — 可比较的运行 receipts 与失败 transcript 转储
- **PR #9221** — baseline 文件 + 配对回归 gating + 能力追踪
- **PR #9222** — 逐维 LLM-judge grader（calibration 前保持 diagnostic-only）
- **PR #9223** — JUnit XML 报告格式
- **PR #9224** — 隔离用例记忆的 seed 与评分
- **PR #9248** — append-only 运行历史 receipts
- **PR #9225** — 用 tracker 失败 replay 18 个回归用例作为种子

> 推进意义：构建了从"诊断 → 评分 → 历史 → 基线 → 回归 → JUnit 上报"的完整闭环，标志着 ZeroClaw eval 体系从单一跑分进入**工程化可治理**阶段。

### 3.3 其他重要功能 PR（仍 OPEN，但已具备合并潜力）
- **PR #8313** `feat(skills): default to compact injection, deprecate full mode` —— 默认采用按需加载的紧凑注入，节省 prompt 上下文。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8313
- **PR #9091** `feat(computer-use): add native macOS, Linux X11, and Windows drivers` —— 桌面端原生驱动补齐（关联 #6909）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9091
- **PR #9080** `feat(relay): secure transport and browser enrollment frontdoor` —— 远端 WSS 强制 inner mTLS、配对账本、撤销 / 续签。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9080
- **PR #9319** `refactor(runtime): seal the engine tool registry as ScopedToolRegistry` —— 关闭 `&[Box<dyn Tool>]` 抽象漏洞。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9319
- **PR #9571** `chore(channels): remove the WATI channel` —— 移除 WATI 渠道（feature、网关、迁移、CI / 安装器 / 标签器 / Web 代理一并清理）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9571

### 3.4 已关闭 Issue（今日 3 条关闭中识别到的）
- **Issue #8568** `Mixture-of-Agents (MoA) virtual model provider` —— 已 CLOSED（关闭原因摘要未给出，可能被拆分 / 拒绝 / 替代方案吸收）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8568
- **Issue #9550** `Docs: Update broken LinkedIn link on GitHub organization profile` —— 已 CLOSED，文档链接修复完成。

整体推进评估：项目**结构层面稳步推进**，但 PR 通道**暂无任何合并释放到 master**，维护者带宽偏紧。

---

## 4. 社区热点

按评论数排名，重点问题反映社区当前最关切的能力 / 安全议题：

### 4.1 记忆子系统：会话历史与长期记忆的边界（16 条评论，居首）
- **#9048** `RFC: Separate conversation history from agent-curated long-term memory`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9048
  - 核心诉求：当前 `MemoryCategory::Conversation` 仍由 runtime / gateway / channel 的 autosave 直接写入通用 memory backend，导致会话历史与"agent 策展的长期记忆"在实现路径上相互污染。

### 4.2 安全凭证抽象（13 条评论）
- **#9127** `RFC: Abstract a KeySource trait — classify master-key material by source / deployment form`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9127
  - 背景：ChaCha20-Poly1305 已加密 93 个 `#[secret]` 字段、`#[credential_class]` 已覆盖 59 个字段，但密钥来源（env、文件、HSM、KMS…）仍缺乏统一定义。

### 4.3 OpenAI 兼容网关（12 条评论）
- **#8603** `RFC: OpenAI Chat Completions compatibility adapter`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8603
  - 诉求：让 Open WebUI、LobeChat 等 OpenAI 协议客户端零成本接入 ZeroClaw。

### 4.4 OTel 跨轮次会话关联（12 条评论）
- **#8933** `RFC: Add cross-turn conversation correlation to OTel export`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8933
  - 诉求：承载 `gen_ai.conversation.id` 属性，对齐 OpenTelemetry Semantic Conventions v1.41.0。

### 4.5 Shell 命令分级审批（11 条评论，P1）
- **#7155** `RFC: Add a per-execution confirmation tier for high-risk shell commands + Claude Code-style command pattern policy`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7155

### 4.6 内存权威存储 vs enrichment 连接器解耦（10 条评论）
- **#9103** `RFC: separate authoritative memory storage from optional enrichment connectors`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9103

### 4.7 A2A 出站客户端（10 条评论）
- **#9106** `RFC: A2A outbound client (A2ATool)`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9106
  - 诉求：让 ZeroClaw agent 能主动调用外部 A2A-compliant agent，补齐 #3566 拆出的 outbound 缺口。

### 4.8 其他高讨论度（8-9 条评论）
- **#6850**（9 评论）Decouple memory lifecycle policy from storage backends
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6850
- **#9348**（9 评论，S1 安全风险）WhatsApp Web 在 `mode = business` 下应答所有 DM / 群消息
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9348
- **#7141**（8 评论，P1）Pluggable inbound authentication and canonical principals（已 Rev 5）
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/7141
- **#6909**（8 评论）Computer-use 桌面交互支持
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6909
- **#6971**（8 评论）Security UX 与运行时凭证边界
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6971
- **#6157**（8 评论）Nextcloud Talk 错误 bot message API（in-progress）
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6157
- **#8780**（8 评论）Realtime speech-to-speech channel for Gemini Live
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/8780

**诉求分析**：今日社区关注可归纳为三条主线——
1. **记忆子系统重构**（#9048 / #9103 / #6850）—— 同一议题三角度切入，反映存储 / 生命周期 / 真实性边界是当下最迫切的架构债。
2. **安全纵深防御**（#9127 / #9348 / #7141 / #6971 / #7155 / #9417 / #9397）—— 凭证、认证、命令分级、配置默认值全面铺开，对应 v0.9.0 milestone。
3. **互操作与多模态**（#8603 / #9106 / #8933 / #8780）—— OpenAI 兼容、A2A、OTel、Gemini Live 均在扩展 ZeroClaw 的"接入面"。

---

## 5. Bug 与稳定性

按严重程度排序：

### S1 — 严重（安全风险）
- **#9348** WhatsApp Web 在 `mode = business` 下应答所有 DM 与所有群消息；空 `allowed_groups` 反而放行所有群。
  - 影响：用户配置了看似锁定的白名单，实际全开。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9348
  - **Fix PR**：尚未出现合并，但已有关联 follow-up RFC **#9397**（将空 `allowed_groups` 改为 permit-none）作为修复路径。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9397

### P1 — 高优先级
- **#9340** CLI 创建的 cron 任务无法投递输出（`delivery.mode = "none"` 硬编码，运行记录仍为 `ok`，无任何错误指示）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9340
  - **Fix PR**：暂未见。
- **#9397** WhatsApp Web `allowed_groups` 默认行为需要 RFC 跟进（已 in-progress，需 maintainer-review）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9397

### P2 — 中等（安全敏感）
- **#9417** WhatsApp Cloud `request_approval` 在发送失败 / 取消时泄露活体审批 token（S2 降级行为）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/9417
- **#6157** Nextcloud Talk 使用了错误的 bot message API（持续 in-progress，自 4 月起未关闭）。
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6157

### 其他已识别修复中
- **PR #9634** `fix(channels/telegram): skip unauthorized handler for non-mentioned group messages with mention_only`
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9634
- **PR #9056** `fix(providers): surface cause-specific provider failure diagnostics`（stale-candidate）
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/9056
- **PR #8576** `fix(channels): add env-var fallback for OpenAI STT credentials`（关联 #7899，stale-candidate）
  - 链接：https://github.com/zeroclaw-labs/zeroclaw/pull/8576

**稳定性观察**：今日未合并任何 bugfix，**已识别的 S1 安全问题 #9348 仍处于开放**，建议维护者优先评审 #9397 RFC 与对应 fix PR。

---

## 6. 功能请求与路线图信号

结合现有 RFC 与 PR，对下一版本（v0.8.4 / v0.9.0）的可能纳入项做信号分析：

| 信号强度 | 项目 | 关联 PR | 评估 |
|---|---|---|---|
| 🟢 极强 | Eval 框架全套（6 个 PR） | #9220/9221/9222/9223/9224/9248/9225 | 已成体系，IftekharUddin 持续推进，likely v0.8.4 收纳 |
| 🟢 极强 | Skills 紧凑注入默认 | #8313 | 与 RFC #5615 流程契合，应是 v0.8.4 候选 |
| 🟢 极强 | v0.8.4 release bump | #9648 | 已经在路上 |
| 🟢 极强 | WATI 渠道移除 | #9571 | 标记为 chore，破坏性但合规性收益高 |
| 🟡 强 | OpenAI Chat Completions 兼容 | RFC #8603 |

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*