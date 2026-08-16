# OpenClaw 生态日报 2026-08-16

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-16 00:55 UTC

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

# OpenClaw 项目动态日报 · 2026-08-16

## 1. 今日速览

OpenClaw 仓库今日保持高强度迭代节奏：过去 24 小时累计更新 **500 条 Issue 与 500 条 PR**，新版本 **v2026.8.1-beta.2** 同步发布。议题活跃度集中在 **P1 级沉默失败 / 子代理完成态丢失 / 通道数据丢失** 这类高影响稳定性问题上，多条钻石龙虾级（🦞）议题长期未解。PR 侧以 **安全边界收紧（install policy 警告确认、密钥 egress 主机绑定）、Gateway 启动韧性、Control UI 体验改进** 为主线，整体项目处于"密集修复 + 安全加固"阶段。健康度评估：**中等偏紧**——大量 P1 议题仍缺新修复 PR，多个修复 PR 处于 `waiting on author`，需维护者集中拉齐。

---

## 2. 版本发布

### 🚀 v2026.8.1-beta.2 — 2026.8.1 beta 系列

本次 beta 重点更新：

- **Secret egress host binding（密钥出口主机绑定）**：每个共享存储密钥将绑定到精确的 HTTPS 目标主机，覆盖 CLI、Gateway RPC 与 Control UI。**未绑定的哨兵替换将在明文外发前 fail closed**。贡献者：@shakkernerd。
- **GPT-5.6 Ultra 与运行时切换**：新增 GPT-5.6 Ultra 模型支持及运行时切换能力。

**迁移注意事项**：
- 若此前使用未明确绑定主机的 `SecretRef` 进行跨主机外发，本次升级后将以失败闭合（fail-closed）方式拒绝；需在 secrets 注册表中补齐目标主机白名单。
- 若使用 `provider: "default"` 别名（参见 [Issue #121083](https://github.com/openclaw/openclaw/issues/121083)），升级后请同步检查文档是否已显式说明其为内置别名。

---

## 3. 项目进展

### ✅ 今日合并 / 关闭的重要 PR

| 类别 | PR | 说明 |
|------|----|------|
| 安全 | [#116489](https://github.com/openclaw/openclaw/pull/116489) `feat(security): require acknowledgement for install policy warnings` | 外部 `security.installPolicy` 可返回 `warn`，CLI 安装需明确输入目标名称才可继续。XL 改动，安全边界级风险 |
| 安全 / UI | [#120900](https://github.com/openclaw/openclaw/pull/120900) `feat(ui): review install policy warnings` | Control UI 中管理员可审查并主动确认安装策略警告；新增 `acknowledgeInstallPolicyWarning: true` 入参 |
| Gateway | [#124145](https://github.com/openclaw/openclaw/pull/124145) `fix(gateway): keep same-sequence history rows reachable` | 修复 HTTP/SSE 会话历史中相同 transcript sequence 的行因分页丢失的问题（已 CLOSED） |
| 健康检查 | [#119777](https://github.com/openclaw/openclaw/pull/119777) `fix(health): report resolved SQLite session store path` | 修复 `openclaw health` 输出真实解析后的 SQLite 路径（已 CLOSED） |
| Workers | [#124037](https://github.com/openclaw/openclaw/pull/124037) `feat(workers): run device sessions from Gateway bundles` | 设备会话宿主机可从 Gateway bundle 启动，并修复节点依赖物化与 bundle 边界问题（已 CLOSED） |

### 🟢 重点维护者待审视（status: 👀 ready for maintainer look）

- **Gateway 韧性**：[#124302](https://github.com/openclaw/openclaw/pull/124302) 让核心 readiness 不再被 sidecar 拖死；[#119576](https://github.com/openclaw/openclaw/pull/119576) 撤销回退时不必要 restart。
- **模型与认证**：[#124300](https://github.com/openclaw/openclaw/pull/124300) 跨 turn 保留 Claude CLI prompt cache；[#121764](https://github.com/openclaw/openclaw/pull/121764) plugin-sdk 提供可取消 OAuth refresh hook；[#123194](https://github.com/openclaw/openclaw/pull/123194) 给 MCP HTTP/SSE 响应体加 10 MiB 上限。
- **消息投递**：[#121116](https://github.com/openclaw/openclaw/pull/121116) msteams 不再对非幂等 activity create 在 408/5xx 重试；[#121096](https://github.com/openclaw/openclaw/pull/121096) 修复 WhatsApp/Feishu/Telegram 老插件在 `runDispatchLifecycle` 守卫下崩溃；[#123851](https://github.com/openclaw/openclaw/pull/123851) Slack 已结束进度卡去除 tool-call 收据；[#120999](https://github.com/openclaw/openclaw/pull/120999) workboard 通知超长截断而非崩溃。
- **Control UI**：[#123356](https://github.com/openclaw/openclaw/pull/123356) 在 composer 中暂存 slash 命令参数；[#123912](https://github.com/openclaw/openclaw/pull/123912) Control UI 内置浏览器打开外链；[#122985](https://github.com/openclaw/openclaw/pull/122985) 聊天草稿增长时不再"跳"到最新消息。
- **基础设施**：[#124322](https://github.com/openclaw/openclaw/pull/124322) 当 repo 要求 pnpm 时 dev-channel update 改用 pnpm；[#119700](https://github.com/openclaw/openclaw/pull/119700) Crabbox 鉴权假阳性修复；[#124321](https://github.com/openclaw/openclaw/pull/124321) 移除废弃的 `__OPENCLAW_VERSION__` define。
- **协议契约**：[#123793](https://github.com/openclaw/openclaw/pull/123793) plugin-sdk 发布 identifier 鉴权契约（与 #116281 关联，需 #123782 先合并）。
- **文档同步**：[#120138](https://github.com/openclaw/openclaw/pull/120138) SecretRef 参考文档从 registry metadata 自动生成（关闭 #44289）。
- **Slack 体验**：[#123851](https://github.com/openclaw/openclaw/pull/123851) 去除已结束 turn 的 tool-call 收据行。
- **msteams**：[#93292](https://github.com/openclaw/openclaw/pull/93292) 为 send 增加 `topLevel: true`，proactive 新建根帖/线程。

> 整体看，项目在 **安全、Gateway 韧性、消息投递语义、Control UI 体验** 四个维度都有实质性推进，但多数仍处于"等待维护者 look"，落地速度受制于评审带宽。

---

## 4. 社区热点

### 🔥 评论数最高的 Issues

1. **[#121058](https://github.com/openclaw/openclaw/issues/121058)（96 条评论 · CLOSED · P1）**
   "静默回复失败"在 [#116277](https://github.com/openclaw/openclaw/issues/116277) 关闭后仍持续复发，监控 cron 持续记录新事件。
   *诉求*：用户对"标修复但未真修复"反复出现感到严重不安，呼吁有可视化的状态指示与失败兜底。

2. **[#116201](https://github.com/openclaw/openclaw/issues/116201)（66 条评论 · OPEN · P1 · 🦞 diamond lobster）**
   实时语音会话对 provider / consult 状态缺乏硬上限，会话中可能无限期保留被替换的 consult 工作、超大 provider 帧、pre-ready 音频等。
   *诉求*：引入硬所有权边界（owner-based bounds），杜绝在慢/卡顿 provider 下的资源积压。

3. **[#7707](https://github.com/openclaw/openclaw/issues/7707)（53 条评论 · OPEN · P2 · 🌊）**
   **记忆可信度标签**：按来源（用户指令 / 网页抓取 / 第三方技能）打信任等级，防御 memory poisoning。
   *诉求*：社区长期推动的"agent memory 信任模型"基础能力；与 [#121046](https://github.com/openclaw/openclaw/issues/121046) 的 temporalDecay bug 共同构成记忆体系两大痛点。

4. **[#25592](https://github.com/openclaw/openclaw/issues/25592)（49 条评论 · OPEN · P1 · 🦞）**
   工具调用之间产生的处理性文本会泄漏到 Slack/iMessage 等通道作为可见消息。
   *诉求*：希望将"内部叙事"与"对外回复"显式隔离，提升多通道用户体验。

5. **[#44925](https://github.com/openclaw/openclaw/issues/44925)（29 条评论 · OPEN · P1 · 🦪 silver shellfish）**
   子代理完成后**静默丢失**：无重试、无通知、超时无自动重启。多失败模式（E31/E42/E45 等）。
   *诉求*：Telegram forum bot 等多场景下用户希望"至少能感知任务已经失败"。

6. **[#121953](https://github.com/openclaw/openclaw/issues/121953)（20 条评论 · OPEN · P1 · 🐚 platinum hermit）**
   DeepSeek 上 cron agent turn 阻塞数十秒到数分钟，原因是 `[cron:<jobId> <name>]` 前缀被 DeepSeek API edge 降级。
   *诉求*：更换前缀格式或绕过该 edge 策略，恢复 cron 的实时性。

7. **[#86684](https://github.com/openclaw/openclaw/issues/86684)（12 条评论 · OPEN · P1 · 🦞 regression）**
   `sessions_yield` 父会话在 subagent 完成/direct-announce 处理中**于 65k/1.05M 极低上下文**就被压缩，且归因到隐藏的 `openclaw.se...` 节点。
   *诉求*：禁止在明显不应压缩的低上下文窗口触发压缩，并修复压缩归属。

8. **[#41744](https://github.com/openclaw/openclaw/issues/41744)（12 条评论 · OPEN · P1）**
   Feishu `read` 读取本地图片后，最终外发 payload 丢失媒体附件。
   *诉求*：在多通道适配中保持附件从工具结果到 outbound 的可追溯。

9. **[#91223](https://github.com/openclaw/openclaw/issues/91223)（6 条评论 · OPEN · P2）**
   启用 `active-memory` 后 prompt cache 命中率从 99.9% 跌至 22%，成本激增。

10. **[#80498](https://github.com/openclaw/openclaw/issues/80498)（7 条评论 · 👍 3 · OPEN · P1）**
    子代理完成公告在 tool-use turn 后可能过早或重复。

---

## 5. Bug 与稳定性

### 🔴 严重（P1 · 🦞 diamond lobster / 🦪 silver shellfish / 🐚 platinum hermit）

| 严重度 | Issue | 现象 | 是否有修复 PR |
|--------|-------|------|---------------|
| P1 🦞 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | 静默回复失败复发 | ❌ 监控型，closed 但未根治 |
| P1 🦞 | [#116201](https://github.com/openclaw/openclaw/issues/116201) | 实时语音无界状态 | ❌ clawsweeper:no-new-fix-pr |
| P1 🦞 | [#25592](https://github.com/openclaw/openclaw/issues/25592) | 工具调用间文本外泄 | ✅ linked-pr-open（待合并） |
| P1 🦞 | [#86684](https://github.com/openclaw/openclaw/issues/86684) | sessions_yield 低上下文压缩 | ✅ linked-pr-open |
| P1 🦞 | [#80498](https://github.com/openclaw/openclaw/issues/80498) | 子代理过早/重复公告 | ❌ |
| P1 🦞 | [#41744](https://github.com/openclaw/openclaw/issues/41744) | Feishu 图片外发丢失 | ✅ linked-pr-open |
| P1 🦞 | [#90098](https://github.com/openclaw/openclaw/issues/90098) | Control UI/gateway 大附件栈溢出 | ✅ linked-pr-open |
| P1 🦞 | [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移导致 channel sqlite 0 bytes | ✅ linked-pr-open |
| P1 🦞 | [#123073](https://github.com/openclaw/openclaw/issues/123073) | dev-channel update 因 workspace:* 失败 | ✅ [#124322](https://github.com/openclaw/openclaw/pull/124322) |
| P1 🦞 | [#121046](https://github.com/openclaw/openclaw/issues/121046) | temporalDecay 对 dreaming 子目录失效 | ✅ linked-pr-open |
| P1 🦞 | [#122625](https://github.com/openclaw/openclaw/issues/122625) | Matrix room 目标无法解析 session route | ✅ linked-pr-open |
| P1 🦪 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失 | ❌ |
| P1 🦪 | [#119087](https://github.com/openclaw/openclaw/issues/119087) | Gateway 冷启动回归 2.5x | ❌ |
| P1 🦪 | [#91931](https://github.com/openclaw/openclaw/issues/91931) | preseed bootstrap 文件被误判完整 | ✅ linked-pr-open |
| P1 🦪 | [#119401](https://github.com/openclaw/openclaw/issues/119401) | NO_REPLY 无条件抑制可见回复 | ❌ |
| P1 🦪 | [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows vitest teardown EBUSY | ✅ linked-pr-open |
| P1 🦪 | [#123799](https://github.com/openclaw/openclaw/issues/123799) | Codex compact 404 升级/回退指南缺失 | ❌ |
| P1 🦪 | [#78493](https://github.com/openclaw/openclaw/issues/78493) | sudo update 留下 root 所有权 + doctor 覆盖 | ❌ |
| P1 🦪 | [#43374](https://github.com/openclaw/openclaw/issues/43374) | 多 agent 并发下 LLM 调用全超时 | ❌ |
| P1 🦪 | [#75782](

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期**：2026-08-16
**覆盖项目**：13 个（OpenClaw 核心参照 + NanoBot / Hermes Agent / PicoClaw / NanoClaw / NullClaw / IronClaw / LobsterAI / TinyClaw / Moltis / CoPaw / ZeptoClaw / ZeroClaw）

---

## 1. 生态全景

当前 AI 智能体开源生态呈现**"头部高强度迭代 + 腰部架构收敛 + 尾部静默期"** 的三段式分化：以 OpenClaw、ZeroClaw、IronClaw 为代表的头部项目单日仍有 400-500 条 Issue/PR 流转，处于"密集修复 + 安全加固"阶段；NanoBot、Moltis、NanoClaw 等中腰部项目以**功能深化与多 Provider 接入**为主线，PR 流转效率高（合并率 60-75%）；LobsterAI、TinyClaw、ZeptoClaw 已进入**静默或清理期**，主要信号来自 stale bot 自动动作。跨项目共同关注的焦点集中在**安全边界、记忆持久化、多通道适配、跨会话协作**四大方向，OpenClaw 作为上游主仓稳坐参考坐标。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 | 新版本 | 健康度评级 |
|------|-----------|--------|----------|--------|-----------|
| **OpenClaw** (参照) | 500 | 500 | 多笔合并 | **v2026.8.1-beta.2** | ⚡ 高活跃·强迭代 |
| ZeroClaw | 50 | 50 | 6 PR | 无 | ⚡ 高活跃·RFC 与落地并行 |
| Hermes Agent | 50 | 50 | 8 Issue + 4 PR | 无 | ⚡ 高活跃·平台碎片化债积累 |
| IronClaw | 27 | 12 | 21 Issue + 5 PR | 无 | ⚡ 高活跃·收尾型（合并比 82%） |
| NanoClaw | 0 | 22 | 3 PR | 无 | 🟢 中活跃·单点贡献集中 |
| Moltis | 2 | 16 | 2 Issue + 12 PR | 无 | 🟢 中活跃·高产闭环（合并率 75%） |
| NanoBot | 2 | 16 | 7 PR | 无 | 🟢 中活跃·小幅高频 |
| CoPaw | 10 | 11 | 1 Issue | 无 | 🟢 中活跃·待合并积压 |
| LobsterAI | 18（多 stale 关闭） | 6 | 2 PR | 无 | ⚪ 低活跃·清理日 |
| NullClaw | 1 | 1 | 0 | 无 | ⚪ 低活跃·早期信号 |
| PicoClaw | 0 | 2（均为 stale） | 0 | 无 | 🔴 静默期·维护者缺位 |
| TinyClaw | 0 | 0 | 0 | 无 | ⚫ 无活动 |
| ZeptoClaw | 0 | 0 | 0 | 无 | ⚫ 无活动 |

> **关键观察**：今日**仅 OpenClaw 发布新版本**（v2026.8.1-beta.2），其余项目均无 Release；IronClaw 关闭/合并比 82% 为当日最高，Moltis 合并率 75% 次之。

---

## 3. OpenClaw 在生态中的定位

### 优势对比

| 维度 | OpenClaw | 同期项目 |
|------|----------|----------|
| **迭代强度** | 单日 1000 条 Issue/PR，是 ZeroClaw/Hermes 的 20 倍 | ZeroClaw/Hermes 约 100 条 |
| **发版节奏** | 当日 v2026.8.1-beta.2，唯一活跃发版 | 全行业当日 0 发版 |
| **议题深度** | 含 🦞 钻石龙虾级稳定性议题（66 评论 +） | 多项目议题最长评论 21-37 条 |
| **多通道覆盖** | msteams/Slack/WhatsApp/Feishu/Telegram/iMessage/Matrix 全矩阵 | NanoClaw 刚补齐 WhatsApp+Telegram |
| **安全边界** | SecretRef egress 主机绑定 + install policy 主动确认 | NanoBot/Moltis 仅单点修复 |

### 技术路线差异

- **OpenClaw**：**"集中式上游主仓"** 模型，单一大仓承载所有通道、Provider、Gateway 能力，单日 1000 条 Issue/PR 体现集中治理；
- **ZeroClaw / IronClaw**：采用 **"RFC 驱动 + 模块化发布"** 模式，强调架构契约与设计文档一致性（IronClaw #7634 完成 71 条审计）；
- **NanoClaw**：走向 **"插件化 + 多协议矩阵"**，22 条 PR 中 86% 来自单一贡献者 gavrielc；
- **Moltis**：**"轻量扩展"** 路径，12/16 PR 当日闭环，注重大仓稳定与连接器持久化。

### 社区规模对比

OpenClaw 单日评论数峰值（96 条 #121058）≈ ZeroClaw 最热 RFC（21 条 #8603）的 4.6 倍，是 Hermes #78647（79 条）的 1.2 倍。**作为生态的"事实主仓"地位短期内难以撼动**。

---

## 4. 共同关注的技术方向

### 🔐 4.1 安全边界收紧

| 诉求 | 涉及项目 |
|------|----------|
| Secret/egress 主机绑定、密钥出站白名单 | **OpenClaw**（v2026.8.1-beta.2）、**IronClaw**（Tier 1 安全归因 #81048） |
| OAuth refresh_token 轮换 / 防退化 | **CoPaw** (#7053)、**Hermes Agent** (#49543) |
| Path traversal / 文件写入漏洞 | **NanoBot** (#5369 已合并)、**Moltis** (#1180 仍 OPEN) |
| 审批面板正确归因（"未拒绝却记为拒绝"） | **Hermes Agent** (#81048)、**OpenClaw** (#116489, #120900) |
| 安全归因作为 Tier 1 议题 | **Hermes Agent**、**OpenClaw**、**CoPaw** (#7052 plugin 权限隔离) |

### 🧠 4.2 记忆与跨会话持久化

| 诉求 | 涉及项目 |
|------|----------|
| 持久化会话记忆 + 跨会话检索 | **Hermes Agent** (#8457 OPEN 127 天)、**OpenClaw** (#7707 记忆可信度 + #121046 temporalDecay)、**LobsterAI** (#2046) |
| Memory poisoning 防御 / 信任模型 | **OpenClaw** (#7707) |
| 持久化 subagent 完整对话 | **NanoBot** (#5291) |
| zvec 向量库记忆后端 | **Moltis** (#1158) |
| 启用 active-memory 后缓存命中率暴跌 | **OpenClaw** (#91223) |

### 📡 4.3 多通道适配与可靠性

| 诉求 | 涉及项目 |
|------|----------|
| WhatsApp / Telegram / Slack / msteams / Feishu 通道稳定性 | **OpenClaw**（全矩阵）、**NanoClaw**（新增 Telegram）、**PicoClaw**（WhatsApp 通道失效 stale 9 天） |
| 附件跨通道保持（图片/视频/Discord 裸占位符） | **OpenClaw** (#41744 Feishu 图片)、**NanoClaw** (#2752 Discord 已挂 65 天)、**CoPaw** (#7060, #7061 view_video) |
| 通道数据丢失 / 静默失败 | **OpenClaw** (#121058 复发中) |

### 🤝 4.4 会话协作与多 Agent 编排

| 诉求 | 涉及项目 |
|------|----------|
| @mention 跨会话协作 / 多 Agent 协同 | **NanoBot** (#5358 @name)、**NanoClaw** (#3257 cross-session context + #3265 suppressCreatedNotify) |
| 子代理完成/失败可感知性 | **OpenClaw** (#44925 静默丢失 + #80498 过早公告) |
| Provider 协议矩阵扩张 | **NanoBot**（OrcaRouter #5328 + DashScope #5398）、**Moltis** (#1198 OpenAI Responses 路由) |

### 🛠 4.5 工具/工具调用卫生

| 诉求 | 涉及项目 |
|------|----------|
| 系统提示缓存分层 + 动态上下文后置 | **NullClaw** (#987)、**PicoClaw** (#3321 待合并) |
| 长时 Agent 任务的 loop hygiene | **NullClaw** (#987)、**ZeroClaw** (#9762 Anthropic fallback 全栈) |
| 结构化 tool call 替代 prose | **Hermes Agent** (#83379) |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|----------------|
| **OpenClaw** | 全场景、全通道、稳定优先 | 中大型企业 + 个人高级用户 | 集中式主仓 + 多通道适配 + Gateway 子系统 |
| **ZeroClaw** | RFC 驱动的协议中立 + 多模型兜底 | 架构师、平台集成者 | Anthropic fallback 全栈 + RFC v2/v3 迭代 |
| **IronClaw** | 高强度"清扫 + 性能治理" | 性能敏感型生产用户 | prepared-context turns + 写放大量化追踪 |
| **NanoClaw** | 可插拔权限策略 + 多 Agent 编排 | 团队 / 群组协作场景 | decline_notify 策略 + Chat SDK Bridge |
| **Moltis** | 连接器生态 + 多沙箱后端 | 工作流自动化用户 | CalDAV/Gmail/Himalaya + Coder 沙箱 |
| **Hermes Agent** | 桌面端 + 跨平台一致 | 桌面 / IM 重度用户 | Windows + macOS + Linux 三端碎片化治理 |
| **NanoBot** | WebUI 一致性 + 多 Provider 接入 | Web 用户 + 多模型用户 | per-session 生命周期 + FileStateStore |
| **CoPaw** | CLI + Console + 插件体系 | 终端 + 浏览器双栈用户 | Provider catalog-driven routing |
| **LobsterAI** | IM 集成 + 网易生态 | 网易付费模型用户 | OpenClawConfigSync + IM 适配 |
| **NullClaw** | 长时 Agent 循环卫生 | 重度本地工具用户 | 缓存分层（stablePrefix + variableTail）+ result_compress |
| **PicoClaw** | （静默期，无明确方向） | — | — |
| **TinyClaw / ZeptoClaw** | （无活动） | — | — |

---

## 6. 社区热度与成熟度分层

### 🚀 快速迭代阶段（活跃且扩张）

- **OpenClaw / ZeroClaw / Hermes Agent**：单日 50-500 条 Issue/PR，正在进行架构级特性交付（OpenAI Chat Completions profile、Anthropic fallback、prepared-context turns）。
- **IronClaw**：处于"Reborn 迁移 + Epic 子任务收尾"末期，关闭/合并比 82% 标志冲刺完成阶段。

### 🛠 质量巩固阶段（高 PR 流转、Issue 收敛）

- **Moltis / NanoBot / NanoClaw / CoPaw**：Issue 数量低（0-10），但 PR 流转顺畅（合并率 50-86%），正从"能跑"转向"跑得稳"。

### ⚙️ 维护期低谷（清理日或待响应积压）

- **LobsterAI**：18 条 stale 关闭，4 条 Dependabot PR 积压 2 个月，#1885 安全 Issue 关闭无修复。
- **PicoClaw**：2 个 P0 修复 PR stale 9 天，维护者缺位导致功能性故障（WhatsApp 通道）持续暴露。

### 💤 静默期

- **NullClaw**（极早期，仅 2 条新开条目）、**TinyClaw / ZeptoClaw**（24h 零活动）。

---

## 7. 值得关注的趋势信号

### 📈 趋势 1：协议标准化（OpenAI 兼容）成为生态入场券

ZeroClaw #8603（21 评论）推动 Chat Completions profile，目标是覆盖 Open WebUI / LobeChat / Aider / LangChain 等客户端；Moltis #1198 路由到 OpenAI Responses API；CoPaw #6302 推行 catalog-driven provider。**信号**：Agent 框架正在从"自带 GUI"转向"协议中立"，未来 6-12 个月 OpenAI 兼容性将成为入门门槛。

### 📈 趋势 2：可靠性全栈（fallback / refusal / handoff）是新战场

ZeroClaw Anthropic refusal→fallback 6-PR 堆叠端到端落地（#9262→#9272），意味着 Agent 框架开始在 **provider 层、客户端可靠性层、通道层** 建立完整的兜底语义。IronClaw 的 prepared-context turns 切换、Moltis 的连接器原子快照、CoPaw 的 OAuth refresh_token 轮换请求都指向同一方向。

### 📈 趋势 3："决策归因正确性"成为 Tier 1 安全议题

Hermes Agent #81048（"未拒绝却记为拒绝"）、OpenClaw 多条 silent failure、CoPaw #7048（CLI 返回成功但未生效）—— 社区对"看似成功但实际失败"的零容忍正在上升。**安全归因 ≠ 异常处理**，而是写入审计的产品级契约。

### 📈 趋势 4：Memory 体系从 prompt 技巧走向 schema 治理

Hermes Agent #8457（127 天长尾）、OpenClaw #7707（记忆可信度标签 + #121046 temporalDecay）、NanoBot #5291（subagent 完整对话持久化）、LobsterAI #2046（产品级方案）、NullClaw #5377（consolidator 截断导致历史指针越界）。**信号**：记忆系统正成为 Agent 产品的差异化护城河。

### 📈 趋势 5：维护者评审带宽成为生态瓶颈

PicoClaw（9 天无响应）、NanoClaw（gavrielc 单人贡献 86%）、CoPaw（#6302, #6940 开放超 2 周）、ZeroClaw（#6909 计算机使用 83 天）。**组织级层面**：社区需要建立 stale-bot 白名单、P0/P1 自动豁免机制、PR 评审日等流程杠杆。

### 📌 对 AI 智能体开发者的参考价值

1. **选型**：生产环境优先 OpenClaw / IronClaw / ZeroClaw；IM / 团队协作考虑 NanoClaw；轻量 + 快迭代考虑 Moltis / NanoBot；
2. **贡献入口**：CoPaw 首次贡献者占比 50%、IronClaw #7516（neo-sky 首 PR）显示"新贡献者友好"是当前差异化策略；
3. **避坑**：避免使用 stale 9+ 天无响应的项目分支、避免依赖单一贡献者高度集中的仓库；
4. **预研方向**：协议中立层、安全归因契约、Memory schema 治理、fallback 全栈设计。

---

> 📊 **整体结论**：2026-08-16 的 AI 智能体开源生态呈现**"OpenClaw 一枝独秀 + 多项目方向收敛 + 部分项目维护失血"**的格局。共同关注的安全、记忆、协议标准化、跨通道可靠性四大方向，将在下一季度形成可观察的标准化范式。对技术决策者建议：密切跟踪 OpenClaw beta 系列的演进与 ZeroClaw RFC 决策节奏，将两者作为生态演进的晴雨表。
>
> *报告基于 13 个项目 24 小时 GitHub Issues / PRs 公开数据生成*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-16

> 数据来源：github.com/HKUDS/nanobot｜报告生成时间：2026-08-16

---

## 1. 今日速览

NanoBot 在过去 24 小时内继续保持**高频迭代节奏**：共 16 个 PR 流转（合并/关闭 7 个，仍待合并 9 个），新增/活跃 Issue 2 条，且实现"报告 → 修复"全闭环。**修复方向集中**于 WebUI 交互一致性、后台任务生命周期与内存合并三个长期痛点；**功能方向**则向多 Provider 协议（OrcaRouter、DashScope 原生）和会话协作（@提及、侧边会话、拖拽分组）拓展。项目整体健康度良好，p0 级别 session 竞态问题已通过 PR 进入 review，安全相关的 plugin 缓存失效问题同日合并。

---

## 2. 版本发布

过去 24 小时**无新版本发布**。考虑到今日合并的修复涵盖 session 持久化、cron 存活、WebUI 操作时序等多处稳定性问题，社区可在下一个 patch 版本中期待较完整的问题覆盖。

---

## 3. 项目进展（已合并/关闭的 PR）

本轮共 **7 个 PR 落地**，整体推进项目向"更稳、更可用、更多模型可选"的方向发展：

| 领域 | PR | 主要价值 |
|---|---|---|
| **可靠性** | [#5271](https://github.com/HKUDS/nanobot/pull/5271)（p0，open） | 防止 `/new` 后过期后台保存覆盖当前会话（**仍 OPEN**，为本期最高优先级项） |
| **可靠性** | [#5376](https://github.com/HKUDS/nanobot/pull/5376) | 修复磁盘满/权限变化导致 cron 调度器被永久静默杀死的回归 |
| **可靠性** | [#5370](https://github.com/HKUDS/nanobot/pull/5370) | 为 `FileStateStore` 引入 per-session 生命周期上限，避免高基数会话导致内存无限增长 |
| **安全** | [#5369](https://github.com/HKUDS/nanobot/pull/5369) | Plugin 重新验证缓存的 skill 根目录，杜绝受控项目中的目录穿越隐患 |
| **WebUI 一致性** | [#5371](https://github.com/HKUDS/nanobot/pull/5371) | 必须等到 `turn_end` 才显示 copy/fork 动作，与 Issue #5368 形成闭环 |
| **WebUI 一致性** | [#5399](https://github.com/HKUDS/nanobot/pull/5399) / [#5397](https://github.com/HKUDS/nanobot/pull/5397) | 模型预设显示名与 `/model` 命令名解耦；侧边栏支持 macOS 风格 Shift 多选 |
| **模型生态** | [#5328](https://github.com/HKUDS/nanobot/pull/5328) | 接入 OrcaRouter，统一 OpenAI / Anthropic / Google / DeepSeek / Qwen / xAI 等 150+ 模型入口 |

> **亮点**：#5371 + #5368 关闭形成"问题 → 修复 → 关闭"完整闭环，是社区维护响应力的典型样本。

---

## 4. 社区热点

按互动与重要性筛选，今日值得关注的话题：

- 🔥 **#5377 [OPEN]** — [Bug: consolidation truncates archive input](https://github.com/HKUDS/nanobot/issues/5377)（评论 2）
  触发点：`Consolidator.archive()` 把压缩对话截到模型 token 预算，但调用方仍按"完整批次"前移 `last_consolidated`，导致**已截断的消息片段既不可见也不可恢复**。这是一个隐蔽的数据丢失 bug，与 PR #5379 同步推进修复。
- 📌 **#5271 [OPEN]** — [Prevent stale background task saves](https://github.com/HKUDS/nanobot/pull/5271)（p0）
  解决 `/new` 之后后台 compact 仍然写入旧 session 对象的竞态，是当前仓库里**唯一标注 p0 的待合并项**，建议维护者优先 review。
- 💡 **#5358 [OPEN]** — [Session collaboration via mentions](https://github.com/HKUDS/nanobot/pull/5358)
  引入"以服务器持有的稳定 `@name` 引用会话"的协作机制，避免 session key 泄露给 Agent，同时支持多会话协同。

> 分析：社区讨论焦点正从单会话体验（#5371、#5368）向**多会话协作与跨会话数据完整性**迁移（#5358、#5377、#5379、#5291）。

---

## 5. Bug 与稳定性

按严重程度排序（今日新增/仍活跃）：

| 严重度 | 标识 | 描述 | 修复 PR |
|---|---|---|---|
| **P0** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | `/new` 后过期后台保存覆盖当前 session | 待合并 |
| **P2（数据丢失）** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) | consolidation 截断 → 历史指针越界 | [#5379](https://github.com/HKUDS/nanobot/pull/5379) 已对应 |
| **P2（关闭）** | [#5368](https://github.com/HKUDS/nanobot/issues/5368) | Agent 还在生成时显示 copy/fork | [#5371](https://github.com/HKUDS/nanobot/pull/5371) ✅ |
| **P2（关闭）** | [#5369](https://github.com/HKUDS/nanobot/pull/5369) | Plugin 缓存 skill 根目录未失效 → 路径穿越风险 | ✅ 已合并 |
| **P2（关闭）** | [#5376](https://github.com/HKUDS/nanobot/pull/5376) | 一次持久化错误永久杀掉 cron 调度器 | ✅ 已合并 |
| **P2（关闭）** | [#5370](https://github.com/HKUDS/nanobot/pull/5370) | `FileStateStore` 无界增长 + 跨生命周期残留 | ✅ 已合并 |

> **健康度评估**：今日所有仍 OPEN 的 P2 Bug 均已有对应修复 PR 进入 review，仅 #5271 这一 P0 session 竞态仍待落地。

---

## 6. 功能请求与路线图信号

已具备 PR 实现、可能在下一个版本亮相的新能力：

- 🤝 **多 Provider 协议矩阵**
  - [#5328](https://github.com/HKUDS/nanobot/pull/5328)（已合并）OrcaRouter 网关
  - [#5398](https://github.com/HKUDS/nanobot/pull/5398)（open）DashScope 原生协议（解锁原生 thinking 等参数面）
  - 趋势：NanoBot 正在从"单 OpenAI 兼容协议"演化为"**多协议 + 多厂商网关**"的模型接入层。

- 🗂 **WebUI 会话协作能力集中爆发**
  - [#5358](https://github.com/HKUDS/nanobot/pull/5358) `@name` 会话协作
  - [#5364](https://github.com/HKUDS/nanobot/pull/5364) `/side` 临时侧边会话
  - [#5389](https://github.com/HKUDS/nanobot/pull/5389) 拖拽式会话分组与重排
  - 共同方向：**让 WebUI 成为一个可组织、可协作的会话空间**，而非线性聊天列表。

- 🔧 **可观测性与审计**
  - [#5291](https://github.com/HKUDS/nanobot/pull/5291) 持久化 subagent 完整对话（目前 subagent 只留下结果公告，工具调用与推理步骤随进程消失）
  - 这是用户长期呼声——**调试多 Agent 流程时缺乏上下文**。

---

## 7. 用户反馈摘要

从今日活跃 Issue 的评论与 PR 描述中提炼：

- 😟 **数据可信度焦虑**：用户在 #5377 中明确表达担忧——"我无法知道历史中哪些消息真的被丢掉了"，说明社区对**对话持久化的透明性**有强烈诉求。
- 😟 **WebUI 状态信号混乱**：#5368 描述了 Agent 还在"Working for…"时却已经出现 copy/fork 按钮的尴尬，呼应了"边生成边操作"导致用户错点保存/复制错误内容的真实痛点。
- 👍 **维护响应及时**：#5368 提出当日即合并 #5371 修复，是社区满意度的明确信号；#5377 与 #5379 同日联动提交。
- 🔍 **subagent 调试体验差**：#5291 反映出用户希望"看到 subagent 完整对话"的呼声，这通常与"自动任务出错时无法溯源"的使用场景直接相关。

---

## 8. 待处理积压（提醒维护者关注）

- 🔴 **#5271**（p0，最后更新 2026-08-15）：session 后台保存竞态，仓库内**唯一 p0**，建议优先合并。
- 🟡 **#5291**：自 2026-08-07 提交至今仍在 OPEN，反映 subagent transcript 持久化需求尚未被处理；与 #5271 同样属于"长期未被优先"的功能。
- 🟡 **#5398** DashScope 原生协议：与已合并的 #5328 同属 Provider 矩阵扩张议题，建议保持同步迭代节奏。
- 🟡 **#5358 / #5364 / #5389**：三个 WebUI 会话协作 PR 互相独立但目标重合，建议维护者评估**统一设计方向**（稳定 @name ↔ 侧边会话 ↔ 拖拽分组）后再决定合并顺序，避免后续冲突。

---

> 📈 **今日一句话总结**：NanoBot 在 WebUI 一致性、后台任务可靠性与多 Provider 接入三条线齐头并进；建议维护者本周内优先 review **#5271（p0）** 与 **#5379 + #5377 闭环**，即可让下个版本一举解决社区最关心的两条主线问题。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-08-16

## 📌 今日速览

Hermes Agent 今日呈现"高活跃、强维护、平台碎片化痛点集中"的特征：24 小时内 Issue/PR 各 50 条更新（Issue 关闭 8 条、PR 仅合并/关闭 4 条），**新版本发布 0 个**。讨论热度集中在大型文件拆分工程收官（79 评论）、Windows 平台更新/启动回归（多条 P1）、持久化会话记忆特性（21 评论）以及 child-process 凭证继承闭环。整体看，bug 修复和重构节奏健康，但 Windows/Linux/桌面端三类环境的稳定性债仍在累积，社区对安全边界（OAuth、审批授权、Tier 1 安全归因）高度敏感。

---

## 🚀 版本发布

无新版本发布。建议关注 v0.20.x → 下一版本的窗口，多个 P1 修复（#83683、#87183、#51327）若进入同一 release 将形成显著的稳定性里程碑。

---

## 🛠 项目进展（今日合并/关闭的重要 PR 与 Issue）

| 类别 | 编号 | 标题 | 意义 |
|---|---|---|---|
| Issue 关闭 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) | Large-file decomposition: 20/20 done | **仓库级 god-file 拆分工程史诗收官**，确立"all god files are sharded, never reverted"的政策基线 |
| Issue 关闭 | [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop restart reaps the live gateway | Windows 桌面端重启导致 WeChat/QQ/Telegram 全哑火的 P1 回归，已被修复并验证 |
| Issue 关闭 | [#82001](https://github.com/NousResearch/hermes-agent/issues/82001) | Agent flush after compression dies with "full disk" | LCM 压缩期会话身份交接缺口 → 误报"磁盘满"；session_persistence_failed 路径已修复 |
| Issue 关闭 | [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) | Windows: `hermes update` self-locks `_rust.pyd` | cryptography 升级时 os error 5 的根因定位（update 进程自身 mmap），已有修复路径 |
| Issue 关闭 | [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) | `prompt.submit` stale in-memory history | TUI + REST 双客户端同 session 冲突修复 |
| Issue 关闭 | [#70031](https://github.com/NousResearch/hermes-agent/issues/70031) | TUI/CLI status lines repeat mid-turn | `streaming=false` 下仍重复打印 |
| Issue 关闭 | [#50530](https://github.com/NousResearch/hermes-agent/issues/50530) | google-antigravity 遗留 P2 三连 | Gemini Code Assist 子代理崩溃/掉线/400 错误，标记 cannot-reproduce 关闭 |
| PR 关闭 | [#87129](https://github.com/NousResearch/hermes-agent/pull/87129) | propagate supervisor marker through stderr_timestamp | macOS launchd 网关 spawn→refuse→respawn 死循环的修复被 [#87005](https://github.com/NousResearch/hermes-agent/pull/87005) 取代方案，干净关闭 |

**整体判断**：今日 PR 合并节奏明显落后于 Issue 关闭节奏（4 vs 8），46 个 PR 待合并构成显著积压（见 §8）。功能侧的"实合并"较少，主要是 bug 修复与小颗粒度改进落地。

---

## 🔥 社区热点（评论/讨论最活跃）

1. **[#78647](https://github.com/NousResearch/hermes-agent/issues/78647)（79 评论）— God-file 拆分史诗完成**
   作者 @andrexibiza。仓库级架构级重构收官，奠定"分片不还原"的长期政策。该贴同时是 P3 评审与设计决策记录，引用频次最高。

2. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（37 评论）— Skills index watchdog 报警**
   Skills Hub 索引超过 26h 阈值（当前 29.8h）触发 degraded；反映 `skills-index.yml` cron + `deploy-site.yml` 的调度稳定性问题。社区关心下游 docs 站点与索引一致性的回退策略。

3. **[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)（32 评论）— Desktop 重启残杀 gateway**
   真实用户在 Hermes 0.20.0 桌面端遭遇 WeChat/QQ/Telegram 全哑火，影响生产可用性。Windows P1 回归被多用户交叉复现，社区呼吁"重启保留子进程"的明确语义。

4. **[#8457](https://github.com/NousResearch/hermes-agent/issues/8457)（21 评论）— Persistent Session Memory + Cross-Session Search**
   已开放 **127 天**（自 2026-04-12），讨论聚焦 MemoryManager 跨重启持久化、自动压缩阈值与会话搜索 API。是路线图信号最强的特性贴（详见 §6）。

5. **[#82001](https://github.com/NousResearch/hermes-agent/issues/82001)（19 评论）— Compression handoff "full disk" 误报**
   用户对"明明磁盘健康却被告知磁盘满"的信任损耗讨论，开发者深入到 session identity handoff 的具体字段层。

6. **[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)（9 评论）— Linux .desktop 静默失败**
   Electron chrome-sandbox 缺 setuid 导致无窗口无报错，是 Linux 桌面分发体验的硬伤。

---

## 🐞 Bug 与稳定性（按严重度排序）

### P1（严重 · 生产可用性受损）

| Issue | 标题 | 平台 | 是否有 fix PR |
|---|---|---|---|
| [#87183](https://github.com/NousResearch/hermes-agent/issues/87183) | CLI approval panel never renders（`relay_runtime` import 把审批劫持到 gateway 路径，`HERMES_EXEC_ASK=1` env-leak） | 全平台 | ❌ 未见对应 PR |
| [#51327](https://github.com/NousResearch/hermes-agent/issues/51327) | Linux .desktop 启动器静默失败（chrome-sandbox 4755） | Linux | ❌ 未见对应 PR |

### P2（高 · 安全/数据正确性）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#81048](https://github.com/NousResearch/hermes-agent/issues/81048) | **Tier 1 安全**：审批超时被错误归因为"用户拒绝" | ❌ |
| [#49543](https://github.com/NousResearch/hermes-agent/issues/49543) | OAuth MCP（如 Honeycomb）中间掉线 + 120s 挂起 | ❌ |
| [#87329](https://github.com/NousResearch/hermes-agent/issues/87329) | `hermes mcp login` OAuth 回调端口冲突（#5344 回归） | ❌ |
| [#66746](https://github.com/NousResearch/hermes-agent/issues/66746) | Telegram Rich Messages 把 `$395k` 当 LaTeX 解析 | ❌ |
| [#87295](https://github.com/NousResearch/hermes-agent/issues/87295) | Desktop 二次启动杀死运行中的后端 | ❌ |
| [#87292](https://github.com/NousResearch/hermes-agent/issues/87292) | 本地慢模型两种 timeout（WinError 10053 / provider unresponsive） | ❌ |
| [#85315](https://github.com/NousResearch/hermes-agent/issues/85315) | `auxiliary.free_only` 拒绝显式 `:free` 模型并误报为凭证错误 | ❌ |
| [#87093](https://github.com/NousResearch/hermes-agent/issues/87093) | Debian 13.6 安装 uv.lock/npm install 失败 | ❌ |
| [#83379](https://github.com/NousResearch/hermes-agent/issues/83379) | 部分模型把工具调用写成 prose（Claude XML / JSON 块 / 伪 bash） | ❌ |
| [#70694](https://github.com/NousResearch/hermes-agent/issues/70694) | Gateway 在平台适配层丢失"语义最终性"与"逻辑投递身份" | ❌ |

### Windows 平台专项（多 bug 互锁）

| Issue | 主题 | 状态 |
|---|---|---|
| [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) | `cryptography._rust.pyd` 自锁 | 已关闭（已定位） |
| [#77394](https://github.com/NousResearch/hermes-agent/issues/77394) | #73684 修复未覆盖"已恢复的 gateway" | OPEN |
| [#75584](https://github.com/NousResearch/hermes-agent/issues/75584) | 中断安装后 `hermes.exe` 缺失 + `ENOTEMPTY` | OPEN |
| [PR #84409](https://github.com/NousResearch/hermes-agent/pull/84409) | schtasks 退出父 job（#84185 第二半） | 待合并 |

**修复覆盖评估**：今日 8 条关闭 Issue 中，Windows 相关仅 [#83569](https://github.com/NousResearch/hermes-agent/issues/83569) 关闭，且 [#77394](https://github.com/NousResearch/hermes-agent/issues/77394)、[#75584](https://github.com/NousResearch/hermes-agent/issues/75584) 仍 OPEN —— Windows update/启动器的稳定性债并未在本日得到净改善。

---

## 💡 功能请求与路线图信号

| 方向 | Issue / PR | 状态 | 路线图信号 |
|---|---|---|---|
| 持久化会话记忆 + 跨会话检索 + 自动压缩 | [#8457](https://github.com/NousResearch/hermes-agent/issues/8457) | OPEN 127 天 | 🟢 强信号，21 评论且与 [#82001](https://github.com/NousResearch/hermes-agent/issues/82001)、PR [#87326](https://github.com/NousResearch/hermes-agent/pull/87326)（lean tail mode + 压缩回忆评测）形成闭环 |
| 压缩策略升级 | [PR #87326](https://github.com/NousResearch/hermes-agent/pull/87326) | 待合并 | 已有评测数据 +22.5pts / 0.30x tokens，极有可能进入下个版本 |
| AnthropicVertex SDK 路由 Claude | [PR #66522](https://github.com/NousResearch/hermes-agent/pull/66522) | 待合并（自 2026-07-17） | 长期停滞，需 reviewer |
| Discord API v10 功能对齐 | [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | OPEN | Meta-issue 工程化推进，信号中等 |
| Kanban 零权限 worker + 大文件消灭 | [#82591](https://github.com/NousResearch/hermes-agent/issues/82591) | OPEN | 与 #78647 工程文化契合 |
| 子进程凭证继承闭环 | [PR #83565](https://github.com/NousResearch/hermes-agent/pull/83565) | 待合并 | 安全边界主题，与 Tier-1 安全归因配套 |
| Hermes Agentic Trader v0.6.0 | [PR #60159](https://github.com/NousResearch/hermes-agent/pull/60159) | 待合并 41 天 | MCP 生态扩展 |
| Computer-use 修复包 | [PR #87333](https://github.com/NousResearch/hermes-agent/pull/87333) | 待合并 | 抢救 #81340 / #52949 / #67259 |
| 自动 reasoning 模式（ChatGPT 风） | [#40306](https://github.com/NousResearch/hermes-agent/issues/40306) | OPEN 71 天 | ⚪ 低优 |
| Termux 一类公民化 | [#86986](https://github.com/NousResearch/hermes-agent/issues/86986) | OPEN | Android 端入场信号 |

**预测**：下一个 release 较可能包含 **lean tail compression（#87326）+ computer-use 修复（#87333）+ Windows update 修复链（#84409 等）**。Vertex/Discord/Trader 这几条 PR 仍在排队。

---

## 🗣 用户反馈摘要

- **"重启即失联"是头号痛点**：Windows/macOS 桌面用户均表达对进程管理语义不清晰的失望（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)、[#87295](https://github.com/NousResearch/hermes-agent/issues/87295)）。社区反复出现"sessions must survive gateway restarts"的诉求，呼应 [#8457](https://github.com/NousResearch/hermes-agent/issues/8457)。
- **错误信息失真损害信任**：用户对"明明磁盘健康却被告知磁盘满"（[#82001](https://github.com/NousResearch/hermes-agent/issues/82001)）和"未拒绝却被记为拒绝"（[#81048](https://github.com/NousResearch/hermes-agent/issues/81048)）表达强烈不满，称之为 **decision-attribution bug**——安全归因的正确性已成 Tier 1 议题。
- **跨平台一致性问题突出**：Windows update 链（[#83569](https://github.com/NousResearch/hermes-agent/issues/83569)/[#77394](https://github.com/NousResearch/hermes-agent/issues/77394)/[#75584](https://github.com/NousResearch/hermes-agent/issues/75584)）、Linux .desktop（[#51327](https://github.com/NousResearch/hermes-agent/issues/51327)）、macOS launchd（[#87005](https://github.com/NousResearch/hermes-agent/pull/87005)）形成三条并行的平台碎片化债务。
- **模型行为不一致**：[#83379](https://github.com/NousResearch/hermes-agent/issues/83379) 报告 Qwen 等模型把 tool_calls 写成 prose，用户希望 system_prompt 兜底以保证结构化输出。
- **正面反馈**：[#66746](https://github.com/NousResearch/hermes-agent/issues

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-16**
**项目：**[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 仓库在过去 24 小时内几乎处于静止状态：0 个 Issue 更新、0 个新版本发布、2 个待合并 PR 但均标记为 `stale` 且无任何评论或点赞反应。活跃度评级为 **低**。从仅有的 2 个待处理 PR 来看，社区贡献集中在 **依赖升级与上下文缓存优化** 两个工程方向，但缺乏维护者的实质性反馈。整体项目节奏放缓，建议关注维护者活跃度是否进入周期性低谷。

---

## 2. 版本发布

无新版本发布。距离上一个可见的发布周期已较久，无可对比的 release notes 可供参考。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目代码主干今日未向前推进。

仅有的 2 个活跃 PR 均为 **OPEN + stale** 状态，自 2026-08-07 创建后仅在 2026-08-15 做过自动更新（疑似 stale-bot 触发），至今未被审查或合并：

- [**PR #3321**](https://github.com/sipeed/picoclaw/pull/3321) `fix(agent): move dynamic context after history to preserve prefix caching`
- [**PR #3320**](https://github.com/sipeed/picoclaw/pull/3320) `fix(deps): bump whatsmeow to unblock WhatsApp "client outdated (405)"`

**推进评估：项目今日实际进度为 0。**

---

## 4. 社区热点

今日**无任何讨论热度**。具体表现：

- Issues：0 条更新（无论活跃还是关闭）
- PRs 评论数：均为 `undefined`，点赞数均为 0
- 2 个 PR 均被 GitHub 自动标记为 `[stale]`

从历史信号推断，社区关注度集中在两个方向：
1. **WhatsApp 通道失效问题**（[#3320](https://github.com/sipeed/picoclaw/pull/3320)）—— 用户希望恢复 WhatsApp 原生 channel 的可用性
2. **LLM 调用成本与性能**（[#3321](https://github.com/sipeed/picoclaw/pull/3321)）—— 用户关注 prefix caching 命中率带来的 token 开销

> ⚠️ 建议维护者对这两个 PR 给出明确反馈（合并 / 拒绝 / 需要改动），否则社区贡献意愿会持续走低。

---

## 5. Bug 与稳定性

| 严重度 | 问题描述 | 来源 | 修复状态 |
|--------|---------|------|---------|
| 🔴 **High** | **WhatsApp 原生通道完全失效**：socket 连接后约 5 秒被服务端断开，错误信息 `Client outdated (405)`，且无自动重连，导致 WhatsApp channel 实质上不可用 | [PR #3320](https://github.com/sipeed/picoclaw/pull/3320) | ⏳ PR 已就绪但未合并，已 stale |
| 🟡 **Medium** | **Prefix cache 命中率退化**：每次请求的动态上下文块（`## Current Time` / `## Runtime` / `## Current Session` / `## Current Sender`）位于 system message 头部，导致整个对话历史的缓存 token 被全部失效，造成不必要的 token 浪费与延迟增加 | [PR #3321](https://github.com/sipeed/picoclaw/pull/3321) | ⏳ PR 已就绪但未合并，已 stale |

**结论**：仓库目前存在一个影响核心功能可用性（WhatsApp 通道）的 P0 级 Bug，且修复 PR 已提交 9 天未获回应，**属于长期暴露的稳定性问题**。

---

## 6. 功能请求与路线图信号

今日无新功能请求 Issues。但从已存在的 PR 可看出潜在的路线图信号：

- **缓存策略优化**（[#3321](https://github.com/sipeed/picoclaw/pull/3321)）：将动态上下文后置到历史之后，是常见的 LLM 成本优化模式。如果社区存在成本敏感型用户，此 PR 被纳入下一版本的可能性较高。
- **第三方依赖持续维护**（[#3320](https://github.com/sipeed/picoclaw/pull/3320)）：whatsmeow 的 bump 表明 WhatsApp 集成仍在项目路线图内，未被弃用。

**判断**：这两个 PR 修复的是 **回归性 / 持续维护性问题**，而非新功能，按理应优先合并。维护者未响应可能是 reviewer 资源短缺或 PR 本身需要 CI/测试补充。

---

## 7. 用户反馈摘要

由于今日无 Issue 评论数据，无法提取新的用户痛点。从历史 PR 描述中可提炼的隐含用户反馈：

- 🔴 **痛点 1**：部署并依赖 WhatsApp 集成的用户 **当前完全无法使用该 channel**，无降级方案，社区请求 bump 依赖版本以恢复连通性（[#3320](https://github.com/sipeed/picoclaw/pull/3320)）。
- 🟡 **痛点 2**：高频调用或长会话场景下用户观察到 token 消耗异常增加，怀疑与 prefix caching 失效有关（[#3321](https://github.com/sipeed/picoclaw/pull/3321)）。
- 🟢 **满意点**：项目结构清晰，PR 描述规范（含动机、根因、影响），贡献者沟通成本低。

---

## 8. 待处理积压

以下是 **截至今日仍未获得维护者响应** 的重要 PR，建议维护者优先 review：

| 类型 | 编号 | 标题 | 创建距今 | stale 状态 |
|------|------|------|---------|-----------|
| 🔧 依赖修复 | [#3320](https://github.com/sipeed/picoclaw/pull/3320) | bump whatsmeow to unblock WhatsApp "client outdated (405)" | **9 天** | ✅ 已 stale |
| ⚡ 性能修复 | [#3321](https://github.com/sipeed/picoclaw/pull/3321) | move dynamic context after history to preserve prefix caching | **9 天** | ✅ 已 stale |

**风险提示**：
- 2 个 PR 均为同一作者（grrowl），且都无人 review，提示项目维护团队当前 **reviewer 资源严重不足**。
- 若 WhatsApp 通道失效 PR 长期不合并，将直接影响依赖该集成的下游用户，属于**用户可感知的功能性故障**。
- 建议开启 stale-bot 排除规则，或设置 P0/P1 标记豁免，避免关键修复被自动冷处理。

---

## 附录：项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 维护者响应度 | ⭐☆☆☆☆ | 关键 PR 9 天无回应 |
| 代码推进 | ⭐☆☆☆☆ | 今日 0 commit 入主干 |
| 社区活跃度 | ⭐⭐☆☆☆ | Issues/PR 数量稀少 |
| 依赖新鲜度 | ⭐⭐⭐☆☆ | 已有 PR 准备升级但未落地 |
| 文档与贡献体验 | ⭐⭐⭐⭐☆ | PR 描述质量较高 |

**综合健康度：2.2 / 5 ⚠️** — 项目当前进入低活跃周期，需要维护者主动介入打破僵局。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-08-16**
**数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日呈现"PR 高活跃、Issue 静默"的非常规节奏：过去 24 小时无任何 Issue 提交或更新，但 Pull Request 流量高达 22 条（其中 3 条已合并/关闭），是近期少有的集中提交日。新版本未发布。值得关注的是，**`gavrielc` 单人贡献了 19 条 PR**，覆盖通道适配、权限策略、投递层、容器调度、跨会话上下文、数据库 schema 等核心模块，呈现出"大规模重构/能力扩展"的工作模式；另一位外部贡献者 `rudysmets7-strid` 提交的 Telegram 通道集成也被合并。项目整体健康度良好，但单一贡献者集中度高，需关注后续评审与维护负担。

---

## 2. 版本发布

**无新版本发布。** 今日无 Release 标签更新。

---

## 3. 项目进展

今日共 **3 条 PR 关闭/合并**，项目向前推进的关键节点如下：

### ✅ 已合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#3269](https://github.com/nanocoai/nanoclaw/pull/3269) | feat(channels): add Telegram channel integration | **新增官方 Telegram 通道适配器**（`@chat-adapter/telegram`），含配对流程、Markdown 清洗器、注册导入。1483 项测试全通过，端到端验证完成。这是项目的标志性能力扩展。 |
| [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | fix(poll-loop): stopped loops leaked their active query's follow-up poller | **关键稳定性修复**：中止的轮询循环会泄漏其活跃查询的 500ms 后续轮询器，长期运行下会造成资源泄漏/幽灵轮询。两处提交（根因 + 修复）一同合并。 |
| [#37](https://github.com/nanocoai/nanoclaw/pull/37) | Rename to DotClaw and switch from WhatsApp to Telegram | **历史性归档**：2026-02-02 创建、长达约 6 个月的改名 + 平台迁移提案 PR，今日终于关闭（未明确合并结果，仅就当前状态判断为关闭归档），反映社区已就"WhatsApp → Telegram"的方向达成共识。 |

### 进展评估

- **通道生态扩张**：Telegram 适配器合并后，NanoClaw 正式具备 WhatsApp + Telegram 双主流 IM 平台覆盖。
- **核心架构层面**：虽然 #3268 是"修一个内存泄漏"性质的小修，但体现了维护者对底层轮询机制的细致把控。
- **整体方向**：今日大量未合并 PR 都带有 `[core-team]` 标签，正等待评审窗口开启，预计下一两个迭代会密集合并。

---

## 4. 社区热点

⚠️ **数据提示**：今日所有 PR 的评论数均为 `undefined`（API 字段缺失），点赞数均为 0，无法严格按"评论/反应最多"排序。以下基于 PR 涉及范围与战略重要性进行筛选：

### 🔥 战略性 / 关注度高的 PR

1. **[#3257](https://github.com/nanocoai/nanoclaw/pull/3257) — Cross-session context: fan-out, DM backfill, echo pruning, and `ncl sessions history`**
   - 为多会话 Agent Group 提供跨会话上下文能力：触发消息扇出、会话语义回填、回声剪枝、CLI 查询命令。**这是面向"多 Agent 协同"的核心能力**。

2. **[#3262](https://github.com/nanocoai/nanoclaw/pull/3262) — channels: Chat SDK bridge agent-mode DM surface**
   - 扩展 Chat SDK Bridge，支持 DM 对话线规整与 `dm-opened` 钩子，承载 app-context 捕获。对未来适配 Slack/Teams 等"会话式 DM"平台至关重要。

3. **[#3260](https://github.com/nanocoai/nanoclaw/pull/3260) — permissions: `decline_notify` unknown-sender policy**
   - 第四种"未知发件人"策略：在静默丢弃（strict）与审批卡（request_approval）之间引入"礼貌拒绝 + 主人一行通知"，平衡体验与安全。

4. **[#3266](https://github.com/nanocoai/nanoclaw/pull/3266) — Permissions: registerChannelCardInterceptor seam**
   - 在通道注册审批流中插入通用拦截器钩子，为后续策略插件化铺路。

5. **[#3269](https://github.com/nanocoai/nanoclaw/pull/3269) — Telegram 通道集成**（已合并，详见上文）

### 背景诉求分析

- 集中爆发的话题指向"**多 Agent 协作 + 多通道抽象**"两大方向，说明社区（尤其是核心团队）正把 NanoClaw 推向"可编排、可扩展的企业级 Agent 平台"。
- 多个 PR 显式声明 `[follows-guidelines, core-team]`，表明这是 **有计划的能力补齐**，而非随机提交。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | PR/Issue | 描述 | 是否有 fix |
|---|---|---|---|
| 🔴 高 | [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) **fix(agent-runner): prevent heartbeat stall during rate-limiting** | Claude API 限流时，容器心跳机制可停滞 30+ 分钟，导致容器被错误判定为 stale 而 kill。**直接影响 Agent 可用性**。 | ✅ 有修复 PR（#3251），待合并 |
| 🔴 高 | [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) **fix(poll-loop): stopped loops leaked** | 中止循环泄漏 500ms 后续轮询器，长期累积可致资源耗尽/幽灵轮询。 | ✅ **已合并** |
| 🟠 中 | [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) **fix: idle container with no heartbeat file exempt from absolute-ceiling kill** | 容器若从未写入 `.heartbeat`，主机清扫逻辑会用绝对上限 kill 它，导致无心跳容器永远不可用。 | ✅ 有修复 PR，待合并 |
| 🟠 中 | [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) **fix: two-phase inbound batch selection — context rows never crowd out or drive a turn** | 待处理消息取最新 N 条的策略会让 `trigger=0` 的上下文挤掉 `trigger>0` 的到期任务，唤醒触发但工作丢失。 | ✅ 有修复 PR，待合并 |
| 🟠 中 | [#3255](https://github.com/nanocoai/nanoclaw/pull/3255) **fix: outbound delivery resolves the sender's own channel row** | 同房间多 bot 身份时，投递解析通道行可能命中任意 sibling，导致消息发错身份。 | ✅ 有修复 PR，待合并 |
| 🟡 低 | [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) **fix(telegram): drop the legacy-Markdown sanitizer** | 旧清洗器把 `**bold**` 降级为 `_italic_`，Agent 输出的加粗在 Telegram 显示错误。 | ✅ 有修复 PR，待合并 |
| 🟡 低 | [#3253](https://github.com/nanocoai/nanoclaw/pull/3253) **fix(opencode): honor the group reasoning effort in the model config** | opencode 引擎未读取群组级别 reasoning effort 配置。 | ✅ 有修复 PR，待合并 |
| 🟡 低 | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) **fix: stage inbound attachments that expose only a url (Discord)** | Discord 文本/图片附件到达 Agent 时变成裸占位符 `[file: message.txt]`，无字节无路径。该 PR 自 **2026-06-12** 开起，**已挂起约 2 个月**，仅在今日更新一次。 | 🟡 有修复 PR，长期待评审 |

### 稳定性评估

- **整体良好**：今日发现的 8 个 Bug 均有对应修复 PR，覆盖面从容器调度、消息投递、通道适配、限流兼容等多层。
- **遗留风险**：#2752 的 Discord 附件问题已超过 2 个月未合并，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

今日无新 Issue，因此无新增功能请求。但从已提交 PR 推断**路线图方向**：

| 方向 | 代表 PR | 推断意图 |
|---|---|---|
| **多通道适配** | [#3269](https://github.com/nanocoai/nanoclaw/pull/3269)、[#3261](https://github.com/nanocoai/nanoclaw/pull/3261)、[#3262](https://github.com/nanocoai/nanoclaw/pull/3262) | 完成 Telegram 主线、抽象可选能力面（typing、thread title、suggested prompts），为 Slack/Teams/Lark 铺路 |
| **权限策略分层** | [#3260](https://github.com/nanocoai/nanoclaw/pull/3260)、[#3266](https://github.com/nanocoai/nanoclaw/pull/3266) | 引入 `decline_notify` 第四策略 + 注册卡拦截器，把权限流做成可插拔 |
| **Agent-to-Agent 编排** | [#3265](https://github.com/nanocoai/nanoclaw/pull/3265) | `CreateAgentOptions.suppressCreatedNotify` 为后续多 Agent 静默编排铺路 |
| **投递层可观测性** | [#3264](https://github.com/nanocoai/nanoclaw/pull/3264) | `registerDeliveryBatchPreview` 钩子，让模块可"先看一眼"未投递批，常用于预取昂贵资源 |
| **跨会话上下文** | [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) | 多会话 Agent Group 的扇出 + 回填 + CLI 查询，朝着"会话级 Agent 协作"演进 |
| **数据库迁移** | [#3256](https://github.com/nanocoai/nanoclaw/pull/3256) | `messaging_groups.detached_at`（migration 022），标记"bot 已被移出平台会话"，对会话生命周期管理至关重要 |
| **通道运行时热加载** | [#3263](https://github.com/nanocoai/nanoclaw/pull/3263) | 注册新适配器后无需重启 host 即可冷启动 |
| **运维/排障工具** | [#3259](https://github.com/nanocoai/nanoclaw/pull/3259) | skill-apply 序号清洗、无头浏览器 URL 透出、继承脚本抽取 |

> **预期纳入下一版本的候选（按战略价值）**：
> 1. Telegram 通道已合并 → 下一 Release 应予以标注；
> 2. #3251（heartbeat 限流修复）→ 强烈建议优先纳入，**关乎生产可用性**；
> 3. #3260（decline_notify 权限策略）+ #3266（拦截器钩子）→ 构成权限层完整能力；
> 4. #3257（跨会话上下文）→ 战略性 feature，纳入下一主要版本能显著提升产品力。

---

## 7. 用户反馈摘要

⚠️ **数据局限**：今日 Issues 无更新，所有 PR 的评论数与点赞数在 API 响应中均为 `undefined`/0，无法直接抽取真实用户评论。以下反馈来自 PR 描述中维护者/贡献者自述的痛点，可视为"间接信号"：

| 来源 | 痛点 |
|---|---|
| [#3251](https://github.com/nanocoai/nanoclaw/pull/3251) | Claude API 限流 → 容器被误判 stale kill。**真实生产场景**：Agent 长任务调用 API 受限，整个会话被主机强杀。 |
| [#3268](https://github.com/nanocoai/nanoclaw/pull/3268) | 轮询循环关闭后仍有幽灵查询在跑。**真实生产场景**：长跑项目会出现资源膨胀、日志噪声。 |
| [#3254](https://github.com/nanocoai/nanoclaw/pull/3254) | 上下文累积把"待办任务"挤出投递批次。**真实生产场景**：Agent 计划任务被静默错过。 |
| [#3250](https://github.com/nanocoai/nanoclaw/pull/3250) | Telegram 用户看到的加粗全是斜体。**真实生产场景**：Bot 输出的**重点**内容被错读，影响沟通。 |
| [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) | Discord 附件变成裸占位符。**真实生产场景**：用户在 Discord 群里发的文件 Agent 完全看不到。 |
| [#3257](https://github.com/nanocoai/nanoclaw/pull/3257) | 多 Agent 并发时缺乏跨会话记忆。**真实生产场景**：群组里多 Agent 互相不知道彼此刚做了啥。 |

> **总体满意度信号**：今日未出现负面舆情（如"功能缺失""文档糟糕""频繁崩溃"等抱怨），整体反馈以"具体技术 Bug 描述"为主，说明社区参与方式偏向**开发者/贡献者**而非终端用户，NanoClaw 仍处在"内部打磨 + 核心团队主导"阶段。

---

## 8. 待处理积压

提醒维护者关注以下长期未响应/挂起项：

| 优先级 | PR/Issue | 开起时间 | 挂起时长 | 备注 |
|---|---|---|---|---|
| 🟠 中 | [#2752](https://github.com/nanocoai/nanoclaw/pull/2752) **Discord 附件修复** | 2026-06-12 | ~65 天 | 通道层功能性 Bug，仅在今日被 ping 一次，仍未合并 |
| 🟠 中 | [#37](https://github.com/nanocoai/nanoclaw/pull/37) | 2026-02-02 | ~6.5 个月 | 虽今日关闭，但说明项目曾有"是否重命名 + 迁移平台"的长期争论，建议在关闭后通过正式 ADR/RFC 文档化决策 |
| 🟡 低 | [#3253](https://github.com/nanocoai/nanoclaw/pull/3253) | 2026-08-15 | 1 天 | 由外部贡献者 `simonechecchia` 提交，描述较简略（提交模板未填），需维护者主动引导 |
| 🟡 低 | [#3252](https://github.com/nanocoai/nanoclaw/pull/3252) | 2026-08-15 | 1 天 | 容器空闲心跳豁免，关键 Bug 但非阻塞 release |

### 维护者建议

1. **优先合并 #3251**（heartbeat 限流）—— 这是今日最严重的可用性 Bug；
2. **重启 #2752 评审流程** —— 超过 2 个月的挂起会让外部贡献者流失；
3. **批量评审 gavrielc 的核心团队 PR** —— 当前 18 条待合并 PR 集中在一人，评审瓶颈会拖慢整个迭代节奏，建议设立"PR 评审日"或拆分给多位 reviewer；
4. **公开 Roadmap** —— 如此密集的 `A1/A2/A3/A4/A8/C4` 编号暗示内部有完整路线图，建议在 GitHub Projects / Discussions 公开，方便外部贡献者对齐。

---

## 📊 项目健康度仪表盘

| 指标 | 状态 |
|---|---|
| Issue 响应 | 🟢 0 积压 |
| PR 流转速度 | 🟡 19 条待合并，需评审资源 |
| Bug 修复覆盖 | 🟢 8/8 发现 Bug 均有对应 PR |
| 贡献者多样性 | 🟡 高度集中（gavrielc 占 86%） |
| 版本发布节奏 | ⚪ 今日无 Release |
| 通道生态扩张 | 🟢 Telegram 正式合并 |
| 文档与社区反馈 | ⚠️ 评论数据缺失，难以评估 |

**综合判断**：项目处于 **架构深化期**，内部能力补齐动作密集，单日 PR 量属于"季度级冲刺"水平。建议维护者重点投入评审带宽，并尽快发布一个含 #3268 + #3251 的补丁版本，以维持外部用户信心。

---
*报告生成时间：2026-08-16 · 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期**：2026-08-16
**数据周期**：过去 24 小时
**项目**：[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 在过去 24 小时整体活跃度偏低，仅产生 1 条新 Issue 与 1 条新 PR，且无新版本发布、无任何 Issue/PR 被关闭或合并。项目处于"低噪声运行"状态，但仍可见两条有意义的方向性信号：一是从社区侧发起的代理协议支持需求（#988），二是从维护者侧推进的长时 Agent 任务循环优化（#987）。从健康度角度看，仓库保持正常响应节奏，无关闭/合并动作意味着尚无闭环产出，建议关注 PR #987 的评审进度。

---

## 2. 版本发布

无新版本发布。

> 📭 当前未发布任何 Release。距离上一个版本的具体间隔请参阅仓库 [Releases 页](https://github.com/nullclaw/nullclaw/releases) 进一步确认。

---

## 3. 项目进展

今日 **无任何 PR 被合并或关闭**，整体推进度有限。

值得关注的在途工作：

- **[PR #987 – feat(agent): loop hygiene for long local tool-heavy runs](https://github.com/nullclaw/nullclaw/pull/987)**
  - 作者：vernonstinebaker
  - 状态：OPEN，待合并
  - 内容摘要：
    - 将系统提示拆分为缓存友好的稳定前缀 + 可变日期时间尾部（`buildStablePrefix` / `buildVariableTail` / `stablePrefixHash`）。
    - 在注入历史前对工具输出进行压缩（`result_compress.zig`），观察者日志仍保留完整输出。
    - 增加 per-turn 重复调用检测逻辑（标题截断）。
  - 推进评估：该 PR 针对长时、本地、重工具调用场景，命中了 Agent 运行时的关键性能与稳定性痛点，属于高质量方向性工作，**建议维护者优先评审**。

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 互动量 | 链接 |
|------|------|------|--------|------|
| 1 | #988 proxy support | Issue | 👍 0 / 💬 0 | [链接](https://github.com/nullclaw/nullclaw/issues/988) |
| 2 | #987 loop hygiene for long local tool-heavy runs | PR | 👍 0 / 💬 — | [链接](https://github.com/nullclaw/nullclaw/pull/987) |

**热度分析**：两项均为新开条目，尚未积累评论与点赞。但议题本身具备一定代表性：

- **#988** 直指当前 LLM 客户端的"代理协议覆盖度"短板，HTTP(S) 与 SOCKS(5h) 几乎是企业网络与跨境使用场景的事实标配，属于典型的高呼声、低实现成本的功能缺口。
- **#987** 来自维护者本人，反映项目内部已经意识到长时 Agent 任务中的上下文膨胀与重复调用问题，**说明该项目正在从"能跑"向"跑得稳"演进**。

---

## 5. Bug 与稳定性

今日 **未报告** 任何明确的 Bug、崩溃或回归问题。但需注意 PR #987 本身揭示了一个潜在的稳定性/性能隐患领域：

> **风险点**：长时本地工具调用密集型 Agent 运行中的循环卫生（loop hygiene）问题——上下文膨胀、重复调用、缓存命中率低。
>
> **是否已有 fix PR**：✅ 有，参见 [PR #987](https://github.com/nullclaw/nullclaw/pull/987)，尚未合并。

---

## 6. 功能请求与路线图信号

### 新增需求

- **[Issue #988 – proxy support](https://github.com/nullclaw/nullclaw/issues/988)**
  - 提交者：anpic
  - 内容：为 providers 增加 HTTP(S) 与 SOCKS(5h) 代理支持。
  - **被纳入下一版本的可能性**：⭐⭐⭐⭐
    - 该需求覆盖企业内网、隐私网络、跨境访问等高频场景。
    - 实现成本相对可控（多数 HTTP 客户端库原生支持或易于扩展）。
    - 与项目当前"轻量、易集成"定位契合，建议列入近期路线图。

### 在途能力（来自 PR #987）

- 系统提示缓存分层
- 工具输出压缩
- 重复调用检测

这些方向与"长时 Agent 稳定性"主题高度一致，**强烈预示下一版本将围绕 Agent loop 的效率与稳健性做系统化增强**。

---

## 7. 用户反馈摘要

由于今日 Issues/PR 评论区均为 0 条新留言，**缺乏可量化的用户情绪与场景反馈**。仅能从条目标题与摘要推断：

- **使用场景信号**：Issue #988 表明存在**企业/受限网络环境**下的用户群体，他们无法直接访问上游 provider。
- **痛点方向**：PR #987 的存在暗示**重度本地工具用户**正在遭遇上下文/性能瓶颈。
- **满意度**：样本不足，无法判定。

> 🔎 建议维护者在 #988 与 #987 中主动征询使用场景（如企业部署规模、网络位置、本地工具调用频次），以补充定性数据。

---

## 8. 待处理积压提醒

| 条目 | 类型 | 打开时长 | 紧迫度 | 备注 |
|------|------|----------|--------|------|
| [#988 proxy support](https://github.com/nullclaw/nullclaw/issues/988) | Issue | < 24h | 🟡 中 | 需维护者评估实现可行性并打标签 |
| [#987 loop hygiene](https://github.com/nullclaw/nullclaw/pull/987) | PR | < 24h | 🟠 较高 | 涉及 Agent 核心循环，建议优先评审 |
| 历史未关闭 Issue/PR | — | — | — | 当前数据未提供更早积压明细，建议运行 `gh issue list --state open --limit 50` 做定期巡检 |

**给维护者的提醒**：
1. PR #987 内容覆盖面较广（提示工程 + 压缩 + 重复检测），建议尽早指定 reviewer，避免 PR 老化。
2. Issue #988 缺少 Motivation 字段答复，建议引导提交者补充企业/个人使用背景，以便纳入路线图优先级排序。

---

## 附录 · 数据来源

- 仓库：https://github.com/nullclaw/nullclaw
- 统计窗口：2026-08-15 ~ 2026-08-16（UTC）
- Issue 更新数：1 / PR 更新数：1 / 新版本数：0

> 📌 本日报由 GitHub 公开数据自动汇总生成。如需更精细的指标（如响应中位数、贡献者活跃度），建议接入 GitHub API 扩展分析维度。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-16

> 数据周期：过去 24 小时｜项目：[nearai/ironclaw](https://github.com/nearai/ironclaw)｜数据源：GitHub Issues & PRs

---

## 1. 今日速览

IronClaw 今日呈现**高强度收尾型协作**特征：27 条 Issue 中 21 条关闭，12 条 PR 中 5 条合并，关闭/合并比高达 **82%**，标志着团队正在集中清理 Reborn 迁移尾声及 #7591 性能优化 Epic 的子任务。核心进展是 **PR #7634 合并**，完成了 `unbound-turns → prepared-context turns` 的架构级切换；同期三条性能优化 PR（#7628 / #7629 / #7676）形成组合拳，对触发器、外发状态、线程索引、心跳日志四大写放大热点完成治理。无新版本发布，活跃度高、合并节奏健康。

---

## 2. 版本发布

ⓘ 过去 24 小时内**无新版本发布**。最近合并的 PR 尚未触发 Release 工作流，预计下一周期可能伴随版本号迭代。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| **#7634** | `feat(unbound-turns): complete the switchover to prepared-context turns` | **架构级**：XL 规模，71 条设计文档一致性审计后清零 | [#7634](https://github.com/nearai/ironclaw/pull/7634) |
| #7629 | `perf: reduce trigger and outbound state writes` | 性能：触发器保留裁剪移至初始声明，恢复路径保留以维持不变量 | [#7629](https://github.com/nearai/ironclaw/pull/7629) |
| #7628 | `perf(processes): remove heartbeat journal churn` | 性能：停止每心跳追加 journal 行；心跳租约时间戳权威化；默认间隔 5s → 15s | [#7628](https://github.com/nearai/ironclaw/pull/7628) |
| #7676 | `perf(threads): coalesce thread index touches` | 性能：突发写入按间隔合并，单线程最多 1 次写；保持单调 CAS 多 worker 正确性 | [#7676](https://github.com/nearai/ironclaw/pull/7676) |
| #7670 | `chore(agents): refresh codebase knowledge graph` | 基础设施：自动刷新代码知识图谱快照（机器人提交） | [#7670](https://github.com/nearai/ironclaw/pull/7670) |

**整体评价**：今日合并的核心 PR 中，**#7634 是项目本季度的关键里程碑**——它完成了 prepared-context turns 模型的全面切换，71 条一致性审计通过意味着双设计文档与最终代码树的偏差已全部消化。配合三条性能 PR，#7591 Epic 的低风险子任务大量结项，整体架构与稳定性向前推进了**实质性一步**。

---

## 4. 社区热点

### 🔥 评论与活跃度 Top Issues

| Issue | 标题 | 评论数 | 链接 | 分析 |
|---|---|---|---|---|
| **#467** | Trajectory benchmark system for agent quality evaluation | **4** | [#467](https://github.com/nearai/ironclaw/issues/467) | **唯一一个有实质性讨论的开放 issue**，作者 zmanian 自 3 月提出至今未关闭，诉求是构建真实场景的智能体质量评测体系（含硬断言 + LLM-as-judge 双层）。该 issue 是项目层面对 agent 评估能力的战略级需求。 |
| **#3236** | [Reborn] Define same-thread follow-up and steering policy | 3 | [#3236](https://github.com/nearai/ironclaw/issues/3236) | 围绕活跃线程锁状态下的同线程追问、`/btw` 转向、队列可见性等语义定义，已关闭。 |
| **#7595** | [Tier 1] Gate prune_run_history | 1 | [#7595](https://github.com/nearai/ironclaw/issues/7595) | 性能优化子任务，单条 PR 即关闭。

### 🔥 来自 #7634 评审的"集群式"新 Issue

PR #7634 的严格代码评审产出了 5 条新 Issue（#7671–#7675，均由 henrypark133 于 8-15 提交），集中体现项目 **post-merge hygiene** 文化：

- **#7675** [E2E](https://github.com/nearai/ironclaw/issues/7675) — qa_6c gmail-to-sheet flake 级联污染整个 provider-contracts 会话
- **#7674** [架构测试](https://github.com/nearai/ironclaw/issues/7674) — openai-compat → threads 边的 symbol 级白名单
- **#7673** [BudgetLedger](https://github.com/nearai/ironclaw/issues/7673) — 截断启动窗口双重计费 & 扣费持久化
- **#7672** [Typed ToolChoice](https://github.com/nearai/ironclaw/issues/7672) — 退役多 provider 上 `tool_choice: Option<String>` 的字符串重载
- **#7671** [栈压力](https://github.com/nearai/ironclaw/issues/7671) — kernel sandbox 路径在默认 2 MiB 测试栈下溢出（已通过 #7634 中 `f1f396cd8` 的 chain-boxing 局部修复）

---

## 5. Bug 与稳定性

按严重程度排序（已附是否关联修复 PR）：

| 严重度 | Issue | 简述 | 修复 PR |
|---|---|---|---|
| 🟠 **High** | [#4992](https://github.com/nearai/ironclaw/issues/4992) | Railway 托管的 Reborn local-dev 实例可创建自动化，但定时任务在绑定线程前失败，WebUI 显示 ERROR + No thread attached | 已关闭（合并到 #4639 / #5392 系列） |
| 🟠 **High** | [#6835](https://github.com/nearai/ironclaw/issues/6835) | MCP 鉴权失败被归类为 Client 而非 AuthRequired，导致永不弹出重新鉴权门控 | 已关闭（WASM lane 已修复，#6825 同源工作流） |
| 🟠 **High** | [#6821](https://github.com/nearai/ironclaw/issues/6821) | IronHub 搜索全文匹配错乱，"我能安装什么" 只返回 3 个工具（实际 18） | 已关闭（PR #6780 构建已修复） |
| 🟡 **Medium** | [#5239](https://github.com/nearai/ironclaw/issues/5239) | 调度器将陈旧终态心跳误判为 runner 失败，触发虚假 Cor… 日志 | 已关闭 |
| 🟡 **Medium** | [#7675](https://github.com/nearai/ironclaw/issues/7675) | **OPEN** — provider-contracts E2E 会话级联失败；qa_6c gmail-to-sheet 间歇性能力失败 | 调查中（与 #7634 无关） |
| 🟢 **Low** | [#5237](https://github.com/nearai/ironclaw/issues/5237) | `IRONCLAW_REBORN_LOG=debug` 时 Wasmtime/Cranelift DEBUG 日志淹没 Railway | 已关闭（白名单过滤） |
| 🟢 **Low** | [#6726](https://github.com/nearai/ironclaw/issues/6726) | `register_generic_channel_outbound_targets` 可被替换为 no-op 且所有测试仍通过（来自变异测试审计） | 已关闭（替换为 no-op） |
| 🟢 **Low** | [#7671](https://github.com/nearai/ironclaw/issues/7671) | **OPEN** — LoopCapabilityPort decorator 链导致 2 MiB 栈溢出；#7634 已部分缓解 | 部分修复 |

**整体评估**：今日所有高/中严重度 Bug 均已关闭；唯一 OPEN 的严重级 Bug（#7675）属于测试夹具/能力失败间的复杂交互，且已明确排除 #7634 回归嫌疑。

---

## 6. 功能请求与路线图信号

| 信号 | Issue | 状态 | 路线图判断 |
|---|---|---|---|
| 智能体质量评测体系 | [#467](https://github.com/nearai/ironclaw/issues/467) | OPEN（4 评论，最活跃） | **战略级信号**，建议纳入下季度规划 |
| 模型侧 capability 选择以应对 provider tool-count 上限 | [#4407](https://github.com/nearai/ironclaw/issues/4407) | 已关闭（设计完成，待实现 PR） | 与 #4658（unbound-turns）后续工作强相关 |
| WebUI 提供 IronHub agent link 操作面 | [#7516](https://github.com/nearai/ironclaw/pull/7516) | PR OPEN（neo-sky，contributor: new） | 极大降低部署门槛，**新贡献者 PR**，优先级应高 |
| 自动化结果确定性抑制（neutral 文案默认 deliver） | [#7651](https://github.com/nearai/ironclaw/pull/7651) | PR OPEN（XL） | 自动化 UX 改进，下版本有望合并 |
| 编码工具统一为 6 个精确名（read/write/edit/glob/grep/bash） | [#7491](https://github.com/nearai/ironclaw/pull/7491) | PR OPEN（XL） | **核心工具面重构**，与 Issue #7392 绑定，影响深远 |
| 能力调用状态在 gate / terminal 边持久化 | [#7678](https://github.com/nearai/ironclaw/pull/7678) | PR OPEN（XL） | Reborn 恢复语义的关键补丁 |
| Live Canary 测试夹具修复（停止误报） | [#7679](https://github.com/nearai/ironclaw/pull/7679) | PR OPEN | 30/30 红色用例立即缓解，CI 信噪比关键 |

---

## 7. 用户反馈摘要

从今日已关闭 issue 的描述与评论可提炼：

- **真实痛点**：操作者当前**只能通过 CLI** 获取 IronHub 注册 URL 与共享密钥，部署流程无法在 WebUI 闭环（[#7516](https://github.com/nearai/ironclaw/pull/7516)）。
- **失败误报**：Live Canary 已连续 **30/30** 红色运行，三个测试用例因夹具缺陷错误标红健康产品行为（[#7679](https://github.com/nearai/ironclaw/pull/7679)）——团队对 CI 信号失真有强烈不满。
- **架构契约**：用户期望 provider 边界严格化——即使 `ironclaw_openai_compat → ironclaw_threads` 出现一个解耦点，也要求**符号级**而非仅 crate 级白名单约束（[#7674](https://github.com/nearai/ironclaw/issues/7674)）。
- **性能感知**：触发器每触发 2–3 条无条件相关子查询 DELETE；心跳 5s 间隔在长生命周期进程下每日产生 ~2,880 条永久 journal 行——团队对写放大已达**量化追踪**与主动治理阶段。

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 创建时间 | 状态 | 风险 | 行动建议 |
|---|---|---|---|---|
| [#467](https://github.com/nearai/ironclaw/issues/467) Trajectory benchmark | **2026-03-02** | OPEN | 中 | **积压 5 个月以上**，4 条评论，无明确 assignee；建议路线图化或阶段性锁定范围 |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) WebUI IronHub 面板 | 2026-08-12 | OPEN（contributor: new） | 低 | 来自新贡献者的首 PR，应优先 review 鼓励留存 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) 编码工具统一 | 2026-08-11 | OPEN（XL） | 中 | 移除派生 `builtin__*` 拼写是 breaking change，需要清晰迁移说明 |
| [#7651](https://github.com/nearai/ironclaw/pull/7651) 自动化抑制 | 2026-08-14 | OPEN（XL） | 低 | 涉及 trigger_create 契约变化，需配合文档 |
| [#7677](https://github.com/nearai/ironclaw/pull/7677) 消息查找索引折入消息行 | 2026-08-15 | OPEN | 中 | 数据模型迁移，影响多 worker 正确性，需重点 review |
| [#7679](https://github.com/nearai/ironclaw/pull/7679) Live Canary 夹具修复 | 2026-08-15 | OPEN | 中 | CI 红色 30/30 急需止血，建议短期加速合并 |

---

### 📊 项目健康度雷达

| 维度 | 评分 | 备注 |
|---|---|---|
| 活跃度 | ★★★★★ | 27 Issue + 12 PR / 24h |
| 合并节奏 | ★★★★★ | 82% 关闭/合并比 |
| 代码评审严谨度 | ★★★★★ | #7634 单 PR 产出 5 条 follow-up issue |
| 性能治理 | ★★★★☆ | #7591 Epic 多 Tier 子任务关闭，但仍存 Tier 2+ 长尾 |
| 社区参与 | ★★★☆☆ | 几乎全部 PR 来自核心团队，新贡献者 PR #7516 待跟进 |
| 用户反馈闭环 | ★★★★☆ | 所有高/中严重 Bug 24h 内关闭 |
| 待办清理 | ★★★☆☆ | #467 战略 issue 积压超 5 个月 |

---

*报告基于 GitHub Issues / PRs 公开数据生成，覆盖周期：2026-08-15 ~ 2026-08-16。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-16**
**项目地址：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日社区动态呈现典型的"清理日"特征：过去 24 小时内共有 18 条 Issue 被批量关闭（多标记为 `[stale]`），活跃 PR 仅 6 条且全部为历史积压，无新版本发布。项目活跃度处于较低水平，**主要信号来源于 stale bot 自动化巡检**，而非实质性的代码迭代。值得关注的是，2 条仍然 OPEN 的 Issue (#1903 会员登录问题、#2046 Agent 记忆体系) 涉及用户核心使用场景，且均带有 `[stale]` 标记，存在被误关风险。建议维护者主动 review 这两条未关闭项，避免有效反馈流失。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日 PR 动态以自动化工具更新与历史 Issue 关闭为主，**无实质性代码合入主干**。以下是两条已关闭 PR 的简要复盘：

- **[#1879](https://github.com/netease-youdao/LobsterAI/pull/1879)** `fix: preserve manually-added plugin load paths on config sync` — 已关闭。修复了 `OpenClawConfigSync.sync()` 在写入 `openclaw.json` 时，会丢弃用户手动通过 `pm install` 添加的插件路径（如 `memory-lancedb-pro` 等社区插件）的问题。该 PR 推进了插件生态的可扩展性，但最终未合并，需关注后续替代方案。
- **[#2234](https://github.com/netease-youdao/LobsterAI/pull/2234)** `fix(openclaw): cron yield descendant finalization` — 已关闭。该 PR 尝试修复 `sessions_yield` 后子 agent 完成事件无法驱动父 agent 继续执行的链路问题，并覆盖 cron 并行/串行子 agent 三种场景，但最终未合并，相关问题可能仍待解决。

另有 4 条 Dependabot 自动升级 PR 处于 OPEN 状态（见第 8 节积压），**整体项目今日代码演进近乎停滞**。

---

## 4. 社区热点

由于今日活跃度集中在 stale 自动关闭动作上，**真正的社区讨论热点仍沉淀于历史 Issue**。按评论数排序值得关注的议题：

| 排名 | Issue / PR | 评论数 | 主题 | 热度解读 |
|---|---|---|---|---|
| 1 | [#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) | 4 | 追问时无限 `NO_REPLY` 或提前终止输出 | 任务流稳定性核心痛点，影响所有长对话场景 |
| 2 | [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) | 4 | IM 微信接口扫码后无法输入验证码 | 直接阻断 IM Bot 配置流程，属于阻塞性问题 |
| 3 | [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836) | 3 | 整体界面美化需求 | 反映用户对产品视觉竞争力的不满 |
| 4 | [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) ⚠️仍 OPEN | 3 | 网易会员登录频繁失败 | 直接影响付费用户使用核心模型 |
| 5 | [#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) | 3 | Cowork 初始化骨架屏优化 | 反映用户对 UI 一致性的期待 |

**诉求分析：** 社区当前最迫切的诉求集中在三个方向——**任务稳定性（追问、断流）、IM/登录可用性、视觉与体验一致性**。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（阻塞核心流程）

- **[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) — 会员登录频繁失败**（仍 OPEN）
  - 用户无法登录，导致网易付费模型（如 qwen 系列）完全不可用。
  - **状态：无关联 fix PR，问题持续暴露。**

- **[#1878](https://github.com/netease-youdao/LobsterAI/issues/1878) — 微信 IM 接口扫码后无法输入验证码**
  - 最新版微信扫码后要求输入 6 位数字，但客户端未提供输入界面，导致 IM Bot 配置流程被阻断。
  - **状态：已关闭（stale），无 fix PR，问题可能仍然存在。**

- **[#1988](https://github.com/netease-youdao/LobsterAI/issues/1988) — 阿里百炼 coding plan 调用 qwen3.6-plus 异常**
  - 更新后系统强制调用网易自带模型并提示无额度，即使修改配置文件也会被覆盖。
  - **状态：已关闭（stale），无 fix PR，影响第三方模型集成。**

- **[#1993](https://github.com/netease-youdao/LobsterAI/issues/1993) — AI engine connection lost**
  - 桌面端始终报连接丢失，但 IM Bot 连接稳定，疑似桌面端网络栈问题。
  - **状态：已关闭（stale），无 fix PR。**

- **[#2017](https://github.com/netease-youdao/LobsterAI/issues/2017) — 本地运行报"未检测到内置 OpenClaw runtime"**
  - 完全阻塞本地构建/启动流程。
  - **状态：已关闭（stale），无 fix PR。**

### 🟠 中严重度（功能性受损）

- **[#1849](https://github.com/netease-youdao/LobsterAI/issues/1849) — 追问时无限 `NO_REPLY`**（评论 4）
  - 日志显示任务被提前 complete，但模型仍在输出，造成页面无响应。
  - **状态：已关闭（stale），无 fix PR。**

- **[#1971](https://github.com/netease-youdao/LobsterAI/issues/1971) — 会话页面向上滚动异常**
  - 含超长元素（如 Mermaid）时，虚拟滚动高度剧烈变化触发无限重渲染。
  - **状态：已关闭（stale），无 fix PR。**

- **[#1885](https://github.com/netease-youdao/LobsterAI/issues/1885) — [Security] 邮箱 SKILL 路径穿越漏洞**
  - `imap.js` 的 `downloadAttachments` 未对附件名过滤，可被利用进行路径穿越。
  - **状态：已关闭（stale），⚠️ 安全类 Issue 关闭但无 PR 修复，潜在风险。**

### 🟡 低严重度（体验性问题）

- **[#1920](https://github.com/netease-youdao/LobsterAI/issues/1920) — Cowork 初始化缺骨架屏**
- **[#1921](https://github.com/netease-youdao/LobsterAI/issues/1921) — Skills Manager/TaskRunHistory 空状态缺图标**

---

## 6. 功能请求与路线图信号

今日新功能诉求集中于 AI Agent 生态扩展与记忆系统：

| 需求 | Issue | 可能性评估 |
|---|---|---|
| **Hermes Agent 集成** | [#1880](https://github.com/netease-youdao/LobsterAI/issues/1880) | 🟡 中等 — 参照 Open WebUI 的 Agent 接入范式，与 LobsterAI "Agent 中枢" 定位契合，需官方评估架构 |
| **OpenHuman 引擎支持** | [#2016](https://github.com/netease-youdao/LobsterAI/issues/2016) | 🟢 较高 — 仅一句话需求，但符合多引擎战略 |
| **Agent 记忆体系重构** | [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) | 🟢 高 — 仍 OPEN 且评论 2，包含完整的 session 持久化、跨会话检索方案；与 #2039/#2040/#2041 构成完整的记忆系统改进论述 |
| **OpenClaw gateway 事件扩展** | [#2036](https://github.com/netease-youdao/LobsterAI/issues/2036) | 🟡 中等 — 需要 gateway 上游配合，短期难落地 |

**路线图信号：** 社区对"长记忆、跨会话、智能体生态"的呼声强烈，记忆系统尤其可能成为下一阶段的重点投资方向（见 #2046 完整方案 + #2040/#2041 系列分析文章）。

---

## 7. 用户反馈摘要

提炼自 Issues 评论与摘要：

**🔴 痛点：**
- "相比起其他竞品过于丑了，用起来不太舒服。" — [#1836](https://github.com/netease-youdao/LobsterAI/issues/1836)，反映产品视觉竞争力不足。
- "会员登录不进去，无法使用网易付费的模型。" — [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)，付费用户的核心阻塞。
- "新版微信扫码后会提示要求在 openclaw 端输入对应的 6 位数字，但咱们客户端未给出输入界面，导致无法成功配置。" — [#1878](https://github.com/netease-youdao/LobsterAI/issues/1878)，流程断裂。

**🟡 场景：**
- 多位用户在桌面端遭遇 `AI engine connection lost`，但 IM Bot 正常 — [#1993](https://github.com/netease-youdao/LobsterAI/issues/1993)，暗示桌面端网络层存在差异性问题。
- 阿里百炼 coding plan 用户在使用 qwen3.6-plus 时被强制替换为网易模型 — [#1988](https://github.com/netease-youdao/LobsterAI/issues/1988)，模型路由逻辑疑似硬编码。

**🟢 建议性反馈：**
- 用户对 OpenClaw 安全、记忆、成本等问题进行深度反思（#2040、#2041），期待官方回应。
- 多位贡献者（如 woxinsj）提交了架构改进建议，期望"上游 OpenClaw" 与下游产品同步演进。

---

## 8. 待处理积压

### 🔴 需立即关注的 OPEN Issue

| Issue | 标题 | 创建时间 | 状态 |
|---|---|---|---|
| [#1903](https://github.com/netease-youdao/LobsterAI/issues/1903) | 会员登录频繁失败 | 2026-05-07 | OPEN, [stale] — 付费用户核心阻塞 |
| [#2046](https://github.com/netease-youdao/LobsterAI/issues/2046) | Agent 记忆体系产品建议 | 2026-05-25 | OPEN, [stale] — 完整方案，需官方回应 |

> ⚠️ 两条 OPEN Issue 均带 `[stale]` 标记，存在被自动化关闭的风险，建议维护者优先 review。

### 🟡 待合并的 OPEN PR

| PR | 标题 | 类型 | 状态 |
|---|---|---|---|
| [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) | ci: bump trufflehog 3.88.30 → 3.95.5 | 依赖升级 | OPEN, [stale] |
| [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) | ci: bump actions/checkout 4 → 6 | 依赖升级 | OPEN, [stale] |
| [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) | ci: bump dorny/paths-filter 3 → 4 | 依赖升级 | OPEN, [stale] |
| [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) | ci: bump actions/stale 9.1.0 → 10.3.0 | 依赖升级 | OPEN, [stale] |

### 📊 历史积压观察

- **Dependabot PR 积压 4 条**（均创建于 2026-06-15，已超过 2 个月未处理），存在 CI 安全风险敞口。
- **多个高严重度 Bug 被 stale 关闭**（#1849、#1878、#1885、#1988、#1993、#2017），但无关联 fix PR，**意味着这些 bug 可能仍在生产环境中存在**。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 📦 发版活跃度 | ⭐☆☆☆☆ | 今日无新版本发布 |
| 🐛 Issue 响应度 | ⭐⭐☆☆☆ | 大量 stale 关闭，未配套 fix |
| 🔄 PR 处理效率 | ⭐⭐☆☆☆ | 4 条 Dependabot PR 积压 2 个月 |
| 💬 社区参与度 | ⭐⭐⭐☆☆ | 仍有用户持续提交深度分析 |
| 🛡️ 安全响应 | ⭐☆☆☆☆ | 安全 Issue (#1885) 被关闭无修复 |
| 🧭 路线图清晰度 | ⭐⭐⭐☆☆ | 记忆系统方向用户讨论深入，但官方回应不足 |

**总体判断：** 项目处于**维护期低谷**，社区贡献活跃但官方响应迟缓。建议维护者：(1) 立即 review 两条 OPEN stale Issue；(2) 合并 Dependabot PR 消除 CI 安全风险；(3) 对被 stale 关闭的高严重度 Bug 进行二次确认并重新开立。

---

*报告生成时间：2026-08-16 · 数据来源：GitHub REST API · 报告基于过去 24 小时项目动态*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-16

---

## 1. 今日速览

Moltis 项目今日呈现**高活跃度、高产出**的状态：在过去 24 小时内虽无新版本发布，但有 **16 个 PR** 集中流转（12 个关闭/合并、4 个仍开放待审），**2 个 Issue 已全部关闭**，工作流推进效率显著。主题集中在三个方向——**安全加固**（node pairing 验签、zip 路径硬化、vault 助记词规范化）、**OpenClaw 组织迁移修复**（gogcli、wacrawl 模块路径），以及**连接器与智能体能力扩展**（CalDAV/Gmail/Himalaya/Slack、Coder 沙箱、OpenAI Responses 路由）。整体节奏健康，bug 修复类 PR 全部当日闭环，功能类 PR 由核心贡献者 `penso` 与 `Lstarsky0` 主导推进。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。本节略。

---

## 3. 项目进展

今日共有 **12 个 PR 关闭/合并**，项目在以下方面取得实质推进：

### 🔐 安全加固（核心议题）
- **[#1179](https://github.com/moltis-org/moltis/pull/1179)** `fix(gateway): verify node pairing signatures` — 由 `tsauvajon` 提交，将 `node.pair.verify` 绑定到服务端签发的待处理请求，阻止调用方注入自己的密钥或挑战。**安全基线提升。**
- **[#1180](https://github.com/moltis-org/moltis/pull/1180)** `fix(security): harden model and zip paths` — 修复 zip 提取与 HuggingFace 仓库中可能导致的任意文件写入漏洞（攻击者可覆盖配置、凭证、脚本）。⚠️ **当前仍 OPEN**，建议维护者优先合并。
- **[#1186](https://github.com/moltis-org/moltis/pull/1186)** `fix(vault): normalize recovery phrase before hashing` — 恢复短语在哈希前先规范化（去横线、大写），与已有 `recovery_key_case_insensitive` 行为一致。**仍 OPEN，需关注。**

### 🔗 OpenClaw 组织迁移修复
- **[#1191](https://github.com/moltis-org/moltis/pull/1191)** `fix(sandbox): point gogcli module path at the openclaw org` — 修复 sandbox 构建时 gogcli 模块路径错误（已迁移至 `openclaw` 组织）。
- **[#1192](https://github.com/moltis-org/moltis/pull/1192)** `fix(skills): point wacrawl install metadata at the openclaw org` — 同步修复 wacrawl 技能安装元数据。
- 两者均由 `Lstarsky0` 完成，**直接关闭 Issue [#1189](https://github.com/moltis-org/moltis/issues/1189)**，构建链路恢复。

### 🧠 功能新增
- **[#1190](https://github.com/moltis-org/moltis/pull/1190)** `Add durable calendar, channel, and email connectors` — 引入供应商中立连接器持久化、原子快照、调度、投影与有界本地全文检索；新增 CalDAV、Gmail、Himalaya v2 只读连接器与可复用 channel-history 数据集。**基础设施级扩展。**
- **[#1195](https://github.com/moltis-org/moltis/pull/1195)** `Add Slack native live task cards` — 在响应流中将工具生命周期更新渲染为 Slack 原生 plan/task 卡片，含不透明 per-run ID 与隐私保护。
- **[#1158](https://github.com/moltis-org/moltis/pull/1158)** `feat(memory): add zvec vector database memory backend` — 新增基于 `zvec + redb` 的实验性记忆后端，默认开启 `zvec` cargo feature。**扩展记忆系统的可选项。**
- **[#1197](https://github.com/moltis-org/moltis/pull/1197)** `Start agent chats from command palette` — 命令面板中即时启动 agent 会话，提升 UX。
- **[#1198](https://github.com/moltis-org/moltis/pull/1198)** `Route OpenAI reasoning tool calls through Responses` — 将内置 OpenAI 含 function tool + `reasoning_effort` 的请求路由到 Responses API，兼容 Chat Completions 与 OpenAI-compatible provider。

### 🐛 Bug 修复
- **[#1182](https://github.com/moltis-org/moltis/pull/1182)** `fix(sessions): allow deleting and archiving the main session` — 移除 `main` 会话在删除与归档时的特殊守卫。**直接关闭 Issue [#1132](https://github.com/moltis-org/moltis/issues/1132)。**
- **[#1194](https://github.com/moltis-org/moltis/pull/1194)** `fix(scripts): guard empty bash array expansions for macOS bash 3.2` — 修复 macOS bash 3.2 下 `set -euo pipefail` 触发的 unbound variable 错误。
- **[#1196](https://github.com/moltis-org/moltis/pull/1196)** `Fix ClawHub skill search results` — 修复搜索结果元数据请求触发 RPC 超时、解决 owner-qualified reinstall 与裸 slug 兼容问题。

### 📦 依赖更新
- **[#1184](https://github.com/moltis-org/moltis/pull/1184)** `chore(deps-dev): bump undici 7.28.0 → 7.29.0`（/website 目录）

> **进度评估**：今日合并/关闭率 = 12/16 ≈ **75%**，处于非常健康水平。功能、安全、修复三类 PR 并行推进，项目整体前进明显。

---

## 4. 社区热点

今日讨论量整体偏低，无高赞或高评论条目（Issues 评论最多仅 1 条），社区互动安静。值得关注的「非噪声」信号：

- **[Issue #1132](https://github.com/moltis-org/moltis/issues/1132)** — "main" 会话无法删除/归档。Issue 自 2026-06-18 开启，存在两个月，今日随 [PR #1182](https://github.com/moltis-org/moltis/pull/1182) 一并关闭。**反映用户对核心会话管理 UX 完整性的合理诉求。**
- **[Issue #1189](https://github.com/moltis-org/moltis/issues/1189)** — Sandbox 构建因 gogcli 仓库路径变更失败。**揭示了上游依赖组织重命名对下游构建链路的连锁影响**，社区需建立依赖 URL 主动巡检机制。
- **[PR #1190](https://github.com/moltis-org/moltis/pull/1190)** `Add durable calendar, channel, and email connectors` — 单 PR 体量较大，触及持久化层、投影层与多个供应商适配，属于"重型"功能集成，**值得后续重点 review**。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#1132](https://github.com/moltis-org/moltis/issues/1132) | `main` 会话无法删除/归档，破坏会话生命周期 UX | ✅ 已关闭 | [PR #1182](https://github.com/moltis-org/moltis/pull/1182) |
| 🟠 中 | [#1189](https://github.com/moltis-org/moltis/issues/1189) | Sandbox 构建因 gogcli 迁移至 openclaw 组织失败 | ✅ 已关闭 | [PR #1191](https://github.com/moltis-org/moltis/pull/1191) |
| 🟡 中 | [PR #1194](https://github.com/moltis-org/moltis/pull/1194) | macOS bash 3.2 下 `local-validate-full` recipe 崩溃 | ✅ 已关闭（合并） | — |
| 🟡 中 | [PR #1196](https://github.com/moltis-org/moltis/pull/1196) | ClawHub 搜索触发 RPC 超时，导致搜索失败 | ✅ 已关闭（合并） | — |
| 🟡 低 | [PR #1182](https://github.com/moltis-org/moltis/pull/1182) | sessions 模块对 `main` 会话的删除/归档守卫过严 | ✅ 已关闭 | — |

**稳定性观察**：今日报告的两个 Bug 均当日闭环，并配套对应修复 PR 合并，**响应效率极佳**。

---

## 6. 功能请求与路线图信号

虽然今日没有显式的新功能 Issue，但通过 PR 流转可以读出**明确的路线图方向**：

| 方向 | 代表 PR | 路线图意义 |
|---|---|---|
| **多连接器生态** | [#1190](https://github.com/moltis-org/moltis/pull/1190)、[#1195](https://github.com/moltis-org/moltis/pull/1195) | 持续扩展 CalDAV / Gmail / Himalaya / Slack 集成，朝着"AI 智能体 ↔ 真实工作流"互通演进 |
| **多沙箱后端** | [#1199](https://github.com/moltis-org/moltis/pull/1199)（OPEN） | 新增 Coder 远程工作区沙箱，支持模板/预设/丰富参数/TTL。⚠️ 仍 OPEN，建议关注 |
| **记忆后端多元化** | [#1158](https://github.com/moltis-org/moltis/pull/1158) | 引入 zvec 向量库，给未来内置/外接 embedding 留出空间 |
| **OpenAI 全能力对齐** | [#1198](https://github.com/moltis-org/moltis/pull/1198) | 路由到 Responses API，表明项目积极跟进 OpenAI 最新 API 形态 |
| **命令面板 UX** | [#1197](https://github.com/moltis-org/moltis/pull/1197) | 强化命令面板即开即聊体验 |

**预测**：下一版本（若有 release）很可能打包连接器持久化、Slack 任务卡片、OpenAI Responses 路由三件套作为主打功能。

---

## 7. 用户反馈摘要

今日 Issues 评论数据稀少，仅 [#1132](https://github.com/moltis-org/moltis/issues/1132) 有 1 条评论。可提取的用户痛点：

- **痛点 A — 会话生命周期受限**：用户（`vvuk`）发现 `main` 会话无法删除或归档，影响日常清理与多场景切换。**已修复（PR #1182）。**
- **痛点 B — 沙箱构建失败**：用户（`holgzn`）反映 `moltis sandbox build` 在所有预构建镜像上失败，根因是上游 `gogcli` 仓库迁移至 `openclaw` 组织。**反映 Moltis 对上游 Go 模块路径存在隐性硬编码耦合，需加强依赖巡检。**

两个 Issue 在 24 小时内均已闭环，**用户满意度信号偏正面**，但建议维护者在 Release Notes 中明确标注上述修复以便用户验证。

---

## 8. 待处理积压

当前 **OPEN 待处理**的 4 个 PR，其中 3 个值得特别关注：

| PR | 标题 | 创建时间 | 风险/影响 | 建议 |
|---|---|---|---|---|
| [#1180](https://github.com/moltis-org/moltis/pull/1180) | `fix(security): harden model and zip paths` | 2026-07-31 | 🔴 **安全**：任意文件写入 → 远程代码执行 | **优先合并** |
| [#1186](https://github.com/moltis-org/moltis/pull/1186) | `fix(vault): normalize recovery phrase before hashing` | 2026-08-09 | 🟠 **凭据恢复**：大小写/横线不规范导致 vault 解锁失败 | 建议 48 小时内合并 |
| [#1199](https://github.com/moltis-org/moltis/pull/1199) | `Add Coder remote workspace sandbox support` | 2026-08-15 | 🟡 **功能**：新沙箱后端，体量较大 | 进入完整 review 流程 |
| [#1200](https://github.com/moltis-org/moltis/pull/1200) | `chore(deps): bump postcss / js-yaml` | 2026-08-16 | 🟢 **依赖**：常规安全更新 | dependabot 自动流程 |

> ⚠️ **关键提醒**：**[#1180](https://github.com/moltis-org/moltis/pull/1180) 已开放 16 天（自 2026-07-31）**，涉及远程代码执行级别的风险敞口，应作为本周 review 重中之重。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| **Issue 响应** | ⭐⭐⭐⭐⭐ | 2/2 当日关闭 |
| **PR 流转效率** | ⭐⭐⭐⭐⭐ | 12/16 当日闭环 |
| **安全姿态** | ⭐⭐⭐⭐ | 持续加固，但 PR #1180 仍在排队 |
| **功能推进** | ⭐⭐⭐⭐⭐ | 连接器/Slack/Coder/记忆后端全面开花 |
| **社区活跃度** | ⭐⭐ | 评论数低，需观察是否反映真实使用规模 |
| **总体** | ⭐⭐⭐⭐½ | **健康且高产，建议关注安全 PR 积压** |

---

*报告生成时间：2026-08-16 ｜ 数据来源：GitHub Issues & Pull Requests API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-08-16**

> ⚠️ **数据说明**：本次提供的所有 Issue / PR 链接均指向 `agentscope-ai/QwenPaw` 仓库，标题与摘要中也频繁出现 "QwenPaw" 字样。下文统一以"CoPaw"指代该项目，链接保持原样。

---

## 1. 今日速览

CoPaw 过去 24 小时维持了较高的社区活跃度：**10 条 Issue 更新**（含 9 条新开/活跃、1 条关闭）与 **11 条 PR 更新**（均处于待合并状态）同步发生，且 **11 条 PR 中有 5 条来自首次贡献者（first-time-contributor）**，社区参与面持续扩大。Bug 修复与功能增强比例约为 **6:5**，问题集中在 `view_video` 视频处理链路、OAuth2/MCP 鉴权、Console 图像持久化等"长尾体验"环节。无新版本发布，但已出现多条 Issue → Fix PR 的端到端闭环信号（如 #7048 → #7055、#7059 → #7061），工程响应节奏健康。

---

## 2. 版本发布

**无新版本发布。** 上一可参考版本为 v2.1.0（pip 安装形态，相关 Issue 如 #7060、#7059、#7051 明确标注）。

---

## 3. 项目进展

> 今日无 PR 合并/关闭，但 11 条待合并 PR 中已出现可量化的质量进展：

| PR | 类别 | 关键收益 |
|---|---|---|
| [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) | Bugfix | 修复 OpenAI Responses API（Volcengine Ark）下 `view_video` 工具结果静默丢失，对应 Issue #7059 |
| [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) | Bugfix | 修复 `qwenpaw cron update --text` 对 agent 类型任务不生效的回归，对应 Issue #7048 |
| [#7057](https://github.com/agentscope-ai/QwenPaw/pull/7057) | Bugfix | systemd / launchd / Docker 环境下，子进程 PATH 补齐用户本地 bin 目录 |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | Feature | Chrome 插件支持 LAN/网络浏览器远程桥接端点 |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | Feature | Console Cron 抽屉新增每任务模型覆盖选择器 |
| [#7049](https://github.com/agentscope-ai/QwenPaw/pull/7049) | Feature | `GET /api/chats/{chat_id}` 支持 `limit` / `before` 分页，长会话加载性能提升 |
| [#7033](https://github.com/agentscope-ai/QwenPaw/pull/7033) | Feature | Skill 系统：动态加载 + 自动卸载 + frontmatter 路径修复 |
| [#7001](https://github.com/agentscope-ai/QwenPaw/pull/7001) | Feature | Matrix 群聊中按 sender 隔离 session / memory |
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) | Refactor | 统一 Provider 发现、模型元数据、路由与 Agent 模型控制（catalog-driven） |
| [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | Feature | 新增原生 DataPaw App 运行时与持久化分析工作区 |
| [#6623](https://github.com/agentscope-ai/QwenPaw/pull/6623) | Bugfix | ACP：防止通知与 prompt 响应竞态导致的末段文本丢失 |

**整体评估**：今日虽无合并事件，但 PR 池结构良好——**6 条 Issue 已被对应 Fix PR 覆盖或正在 review**，预示下一次发版大概率集中解决"视频链路"与"CLI 回归"两大簇。

---

## 4. 社区热点

按评论数 / 👍 数 / 时效综合排序：

1. **🔥 [#3915 虚拟滚动优化 Console WebUI](https://github.com/agentscope-ai/QwenPaw/issues/3915)** — 创建于 2026-04-28，今日仍有更新，**累计 3 条评论、1 个 👍**。是本次数据中**最长寿**的活跃 Issue，反映长会话下前端 DOM 渲染卡顿的持续痛点。
2. **🔥 [#6476 Matrix 端到端加密不可用（已关闭）](https://github.com/agentscope-ai/QwenPaw/issues/6476)** — 今日关闭，涉及 matrix-nio + olm / vodozemac 依赖链路。
3. **🆕 [#7059 view_video 静默丢帧](https://github.com/agentscope-ai/QwenPaw/issues/7059)** + **[#7060 2MB 硬编码上限](https://github.com/agentscope-ai/QwenPaw/issues/7060)** — 同一作者（xiaoka76）连发两条相关 Bug，针对 Volcengine Ark / OpenAI Responses API 视频处理路径，社区关注度正在累积。

**诉求分析**：用户最强烈的呼声集中在 **(a) 长会话前端性能** 与 **(b) 多模态视频/图像处理可靠性** 两大方向；前者属于体验优化，后者直接影响核心模型能力可用性。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#7059](https://github.com/agentscope-ai/QwenPaw/issues/7059) | `view_video` 工具结果视频块被静默丢弃，模型无法获取任何帧 | ✅ [#7061](https://github.com/agentscope-ai/QwenPaw/pull/7061) 待合并 |
| 🔴 高 | [#7053](https://github.com/agentscope-ai/QwenPaw/issues/7053) | OAuth2 刷新不轮换 refresh_token 且无主动续期，远程 MCP 永久退化为手动重认证（影响 XMind MCP 等） | ❌ 待补 |
| 🟠 中 | [#7060](https://github.com/agentscope-ai/QwenPaw/issues/7060) | `view_video` 2MB 硬编码限制，Provider 的 `max_inline_media_bytes` 配置对视频路径无效 | ❌ 待补 |
| 🟠 中 | [#7051](https://github.com/agentscope-ai/QwenPaw/issues/7051) | Console 会话重载后图片附件丢失（data URL 渲染破损） | ❌ 待补 |
| 🟠 中 | [#7048](https://github.com/agentscope-ai/QwenPaw/issues/7048) | `qwenpaw cron update --text` 对 agent 类型任务静默失败 | ✅ [#7055](https://github.com/agentscope-ai/QwenPaw/pull/7055) 待合并 |
| 🟡 低 | [#6476](https://github.com/agentscope-ai/QwenPaw/issues/6476) | Matrix 端到端加密不可用 | ✅ 已关闭 |

**稳定性信号**：今日 6 条 Bug 中 3 条已有对应修复在路上，**修复覆盖率达 50%**；剩余 3 条（视频 2MB 上限、Console 图片持久化、OAuth2 轮换）属于需要涉及前后端 + Provider 配置层的更复杂改动，预计需要 1–2 个迭代周期。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有对应 PR？ | 路线图概率 |
|---|---|---|---|
| Console WebUI 虚拟滚动 | [#3915](https://github.com/agentscope-ai/QwenPaw/issues/3915) | ❌ | ⭐⭐⭐ 长期呼声，已 4 个月 |
| 恢复 native 上下文策略选项 | [#7058](https://github.com/agentscope-ai/QwenPaw/issues/7058) | ❌ | ⭐⭐⭐ 后端已支持，复原 UI 成本低 |
| 后台任务回调/通知机制 | [#7056](https://github.com/agentscope-ai/QwenPaw/issues/7056) | ❌ | ⭐⭐ 需要设计 Webhook / 事件总线 |
| 插件 API 增加 `system_prompt` 权限隔离 | [#7052](https://github.com/agentscope-ai/QwenPaw/issues/7052) | ❌ | ⭐⭐⭐ B 端企业场景刚需 |

**判断**：虚拟滚动与 native 上下文复原两项属于"低成本、高呼声"诉求，最有可能在 2.2.x 小版本中合入；system_prompt 权限隔离涉及插件安全模型，需在路线图中单独规划。

---

## 7. 用户反馈摘要

提炼自 Issue 描述与评论：

- **😤 痛点 1：多模态静默失败** — `view_video` 不报错但模型无帧（#7059），用户对"看起来成功但实际未生效"的行为极度不满，信任度受损。
- **😤 痛点 2：长会话性能** — Console 在历史消息增长后出现严重卡顿（#3915），影响日常使用。
- **😤 痛点 3：CLI 行为不一致** — `cron update --text` 返回成功但未生效（#7048），CLI 的成功语义与实际副作用不一致。
- **😤 痛点 4：远程 MCP 鉴权降级** — OAuth2 refresh_token 不轮换（#7053），导致用户每次都要手动重新认证 XMind 等远程 MCP，企业级场景难以接受。
- **😊 积极信号** — Matrix 端到端加密 Issue #6476 的关闭表明维护者愿意处理深度依赖问题（olm / vodozemac 链路），社区对此类"难而正确"的修复给予正面反馈。
- **🏢 企业场景浮现** — 插件 `system_prompt` 权限隔离（#7052）首次进入需求池，预示 B 端定制化场景正在成为新增长点。

---

## 8. 待处理积压

提醒维护者关注的长期未解决 / 高价值项：

- **🕰️ [#3915 虚拟滚动](https://github.com/agentscope-ai/QwenPaw/issues/3915)** — 创建于 2026-04-28，至今 **3.5 个月** 仍开放，且 8 月 15 日仍有更新，是本次数据中历史最久仍未解决的 Issue。
- **🕰️ [#6302 Provider 统一](https://github.com/agentscope-ai/QwenPaw/pull/6302)** — 创建于 2026-07-21，涉及 catalog-driven provider、capability-aware routing、fallback 等架构级重构，已开放近 1 个月，建议维护者确认 review 排期。
- **🕰️ [#6940 DataPaw App 运行时](https://github.com/agentscope-ai/QwenPaw/pull/6940)** — 首个原生 App 运行时 + 持久化分析工作区，体量较大，需尽早指派 reviewer 避免长期积压。
- **🆕 高优先级新开 Issue** — [#7053 OAuth2 refresh_token 轮换](https://github.com/agentscope-ai/QwenPaw/issues/7053) 涉及远程 MCP 的"永久退化"风险，建议在下一个 sprint 优先响应。

---

**总结**：CoPaw 今日呈现"高活跃、零合并、健康度良好"的状态——Issue → Fix PR 链路畅通，首次贡献者占比近半，但 2 个关键 PR（#6302、#6940）已开放超过 2 周，建议维护者排期 review，避免积压演变为社区响应延迟信号。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期**：2026-08-16
**数据来源**：github.com/zeroclaw-labs/zeroclaw

---

## 1. 今日速览

ZeroClaw 项目今日处于 **高强度 RFC 设计与功能落地并行期**。过去 24 小时共有 50 条 Issue 更新（46 条活跃、4 条关闭）与 50 条 PR 更新（44 条待合并、6 条已合并/关闭），整体活跃度处于高位。当前最核心的工作集中在三个方向：(1) Anthropic 服务端/客户端 fallback 体系的完整落地（堆叠 PR 已陆续关闭）；(2) 多项高优先级架构 RFC 持续迭代修订（Chat Completions profile、Runtime-owned sessions、Unified attachment）；(3) SOP（Standard Operating Procedure）能力收尾与 zerocode TUI 多会话面板建设。社区贡献集中度高，`IftekharUddin`、`Audacity88`、`NiuBlibing` 等核心贡献者持续输出。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。过去 24 小时未检测到任何 Release 标签或版本更新。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR（6 条）

**Anthropic Refusal/Fallback 全栈落地（堆叠 PR 全链路关闭）** — 作者：IftekharUddin

这是今日最重要的进展，标志着 Anthropic 服务端/客户端 fallback 特性堆叠分支完成端到端实现：

| PR | 主题 | 作用 |
|---|---|---|
| [#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) | feat(providers): surface native anthropic refusals as typed errors | 将 `stop_reason: "refusal"` 分类为可下转的 `AnthropicRefusalError` |
| [#9263](https://github.com/zeroclaw-labs/zeroclaw/pull/9263) | feat(providers): route refusals through client-side fallback entries | 客户端可靠性层将 refusal 视为可走 fallback 的非可重试错误 |
| [#9265](https://github.com/zeroclaw-labs/zeroclaw/pull/9265) | feat(providers): opt-in anthropic server-side fallback requests | 新增 `server_fallback_models` 字段启用服务端 fallback |
| [#9266](https://github.com/zeroclaw-labs/zeroclaw/pull/9266) | feat(providers): detect anthropic server-side fallback responses | 读取 `model` 与 `iterations` 字段记录真实服务的模型 |
| [#9268](https://github.com/zeroclaw-labs/zeroclaw/pull/9268) | feat(channels): surface safeguard fallback notices | 通道层在 post-loop 暴露 safeguard 通知 |
| [#9272](https://github.com/zeroclaw-labs/zeroclaw/pull/9272) | feat(anthropic): handle refusals with fallback notices | 顶层集成，对外暴露 refusal 错误并支持 fallback 通知 |

**整体意义**：该项目从 Anthropic API 层、provider 路由层、客户端可靠性层到通道编排层形成完整链路，相当于 ZeroClaw 多模型兜底能力的重大里程碑，**项目整体向前迈进了实质性一步**。

### 📌 其他活跃推进中的 PR

- **zerocode 多会话面板** ([#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739))：Chat/Code 面板支持后台暖会话，独立于 #9729 的合并分支
- **SOP 面板只读视图** ([#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694))：闭环 #9682，已与 #9692 合并
- **SOP 面板 Run/Resume 鼠标控制** ([#9693](https://github.com/zeroclaw-labs/zeroclaw/pull/9693))：补齐从 MVP 推迟的鼠标交互能力

---

## 4. 社区热点

### 🔥 最活跃讨论（按评论数）

1. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603)** — RFC: ZeroClaw Chat Completions profile（21 条评论）⭐ 长期最热
   - 诉求：让 ZeroClaw 暴露 OpenAI Chat Completions 协议端点，覆盖 Open WebUI、LobeChat、Continue.dev、Aider、LangChain 等客户端
   - 影响：决定 ZeroClaw 能否进入更广泛的客户端生态

2. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)** — RFC: Runtime-owned conversation sessions（17 条评论）
   - 第二版修订：明确 #9487/#9488/#9600 所有权边界，所有迁移后的入口点需提交 `InboundAction`

3. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)** — RFC: Unified attachment architecture（16 条评论）
   - 为 Web Chat 与各 channel 提供统一的附件架构

4. **[#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954)** — RFC: Provenance for internally initiated agent turns（13 条评论）
   - 第 2 版重写：明确身份稳定性、绑定并发性、回复生命周期等边界

5. **[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971)** — RFC: Security posture, credential boundaries（13 条评论）
   - 涉及凭证处理、运行时隔离、入口信任、sandboxing 等 10 余个安全控制面

### 📊 背后诉求分析

社区当前诉求高度集中在 **协议标准化（OpenAI 兼容）**、**会话/附件架构统一**、**安全与凭证边界** 三大方向。这反映出 ZeroClaw 正在从「单项目内部使用」向「开放生态」演进，但同时也暴露出架构层面存在大量需要协调的边界问题。

---

## 5. Bug 与稳定性

### 🔴 P1 高优先级

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) **CLOSED** | macOS 15.7.7 桌面应用重启后窗口消失或空白页 | 已关闭（待确认是否已修复） |
| [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | cron 自定义 shell 测试在并行 runtime 门触发 ETXTBSY，连带影响无关 PR | OPEN |
| [#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002) | gateway：viewer 断开后 agent turns 仍保持活跃（修复 PR OPEN） | 待合并 |
| [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | cron agent job run 缺少 wall-clock 超时，hung run 永久持有 sqlite 锁（修复 PR OPEN） | 待合并 |
| [#9753](https://github.com/zeroclaw-labs/zeroclaw/pull/9753) | config：区分缺省 vs 空 allowed_tools 三态语义（修复 PR OPEN） | 待合并 |
| [#9995](https://github.com/zeroclaw-labs/zeroclaw/pull/9995) | hooks：加固 webhook 审计导出，清理凭证/token（修复 PR OPEN） | 待合并 |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | config/set 失败时回滚自动创建的 map aliases（修复 PR OPEN） | 待合并 |

### 🟡 P2 中优先级

| Issue | 描述 |
|---|---|
| [#9470](https://github.com/zeroclaw-labs/zeroclaw/issues/9470) | Reliable fallback 遥测归因错误 + 过期通知 |
| [#7870](https://github.com/zeroclaw-labs/zeroclaw/issues/7870) | agent runtime options 从首个 provider 泄漏 |
| [#9954](https://github.com/zeroclaw-labs/zeroclaw/pull/9954) | sop：双编码 step output 在 schema 校验前应先解包（修复 PR OPEN） |

**评估**：稳定性方面维护响应积极，多数 P1 已有对应修复 PR；CI 偶发 race condition（ETXTBSY）需关注。

---

## 6. 功能请求与路线图信号

### 🎯 高可能性纳入下一版本

- **Hailo-Ollama 原生支持** ([#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)) — 专用 provider、生命周期、模型发现，规模 XL，已就绪
- **Discord mention 触发 thread 模式** ([#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849)) — 已 accepted
- **wecom_ws 主动消息 + 媒体文件** ([#7824](https://github.com/zeroclaw-labs/zeroclaw/issues/7824)) — 已 accepted
- **PR 大小标签自动化** ([#9867](https://github.com/zeroclaw-labs/zeroclaw/pull/9867)) — `pr-size-labeler.yml` 工作流

### 🔮 路线图强信号（来自 RFC）

- **OpenAI Chat Completions profile** — 客户端生态兼容性突破
- **Runtime-owned 会话 & 传输适配器** — 架构级重构
- **统一附件架构** — 跨 channel 一致体验
- **Gemini Live 实时语音通道** ([#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780)) — 已重写为 v2 broker 契约
- **Agent Plugins 1.0 加载器** ([#9810](https://github.com/zeroclaw-labs/zeroclaw/issues/9810)) — 厂商中立 skill/MCP 包
- **Computer-use 桌面控制** ([#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909))
- **AI 辅助 PR 预审** ([#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330))
- **分级产品遥测** ([#9621](https://github.com/zeroclaw-labs/zeroclaw/issues/9621))

### ⚙️ 基础设施工具

- **工作区级 `#![forbid(unsafe_code)]`** ([#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130))
- **CI Rust 缓存与关键路径优化** ([#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108))

---

## 7. 用户反馈摘要

### 💬 真实痛点

- **macOS 桌面体验欠佳** (#7527)：用户反映安装后权限检测失败、应用空白页、重启后窗口消失，反映桌面端 QA 不充分
- **Cron 文档缺失 + 模型指定不便** (#7762)：用户希望为低优先级周期任务指定更便宜的模型（如 gemma），但当前无文档、无配置入口
- **内存整合工具调用** (#4760 已关闭为重复)：用户希望使用 schema 校验的 tool call（`save_memory`）替代纯 prompt 约束的 JSON 解析，提升可靠性
- **配置文件顺序导致 runtime options 泄漏** (#7870)：从首个 provider 拿取 options 给目标 provider，属于实际生产隐患
- **Reliable fallback 归因错误** (#9470)：用户看到的 fallback 通知与实际触发的 provider/model 不一致，影响可信度

### 👍 满意信号

- **Anthropic fallback 体系** 落地后，原生 200 状态码的 refusal 不再被误判为空成功（[#9262](https://github.com/zeroclaw-labs/zeroclaw/pull/9262) 解决）
- **dashboard 断开不断 turn** ([#9002](https://github.com/zeroclaw-labs/zeroclaw/pull/9002))：满足运维侧长期诉求，浏览器休眠/断网不再取消后台工作
- **Discord thread 模式** ([#7849](https://github.com/zeroclaw-labs/zeroclaw/issues/7849))：解决 bot 追问刷屏共享频道的体验问题

---

## 8. 待处理积压

### ⏰ 长期高优先级未响应 Issue

| Issue | 标题 | 创建日 | 已等待天数 |
|---|---|---|---|
| [#4760](https://github.com/zeroclaw-labs/zeroclaw/issues/4760) | [Feature]: use schema-validated tool calls for memory consolidation | 2026-03-26 | 143 天 ⚠️ 已关闭 |
| [#6909](https://github.com/zeroclaw-labs/zeroclaw/issues/6909) | RFC: Computer-use support for desktop screen interaction | 2026-05-25 | 83 天 |
| [#6954](https://github.com/zeroclaw-labs/zeroclaw/issues/6954) | RFC: Provenance, conversation binding | 2026-05-26 | 82 天 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) | RFC: Security posture, credential boundaries | 2026-05-27 | 81 天 |
| [#7089](https://github.com/zeroclaw-labs/zeroclaw/issues/7089) | Windows shell host 评估 | 2026-06-02 | 75 天 |
| [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | CI Rust 缓存优化 | 2026-06-02 | 75 天 |
| [#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130) | forbid(unsafe_code) workspace-wide | 2026-06-03 | 74 天 |
| [#7410](https://github.com/zeroclaw-labs/zeroclaw/issues/7410) | Webhook signing secrets 启动时缓存 | 2026-06-09 | 68 天 |

### 🚨 维护者决策队列提醒

- **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue** (13 评论)：RFC 与设计 Issue 的活跃决策队列，多个 RFC 等待 maintainer/code-owner 的接受/拒绝/延期决策
- **[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) SOP milestone 5/5 tracker**：13 个 SOP 能力需逐一验证 acceptance bar
- **[#7790](https://github.com/zeroclaw-labs/zeroclaw/issues/7790) Web dashboard operator surfaces into zerocode**：仍需补齐的 TUI 端等效工作流

---

## 📈 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 50 条 Issue/PR 更新，多产线并行 |
| RFC 设计成熟度 | ⭐⭐⭐⭐ | 多项 RFC 已迭代至 v2/v3，所有权与边界渐清晰 |
| 核心功能落地 | ⭐⭐⭐⭐⭐ | Anthropic fallback 全栈、SOP 多项切片均有实质 PR |
| 稳定性响应 | ⭐⭐⭐⭐ | 多数 P1 bug 已有对应修复 PR，但 macOS 桌面体验需关注 |
| 社区多样性 | ⭐⭐⭐ | 高度依赖 IftekharUddin、Audacity88、NiuBlibing 等少数核心贡献者 |
| 文档同步 | ⭐⭐⭐ | 仍有缺失项（Cron 文档），CI gate 动机追溯机制（#9512）已立项 |

**整体结论**：ZeroClaw 处于 **架构收敛 + 多模型兜底能力成型** 的关键阶段，建议维护者重点关注 (1) 维持 RFC 决策节奏，避免设计债堆积；(2) macOS 桌面端 QA 强化；(3) CI 并行门 ETXTBSY 等基础设施小但高频问题的根因修复。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*