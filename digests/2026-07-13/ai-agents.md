# OpenClaw 生态日报 2026-07-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-13 02:08 UTC

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

# OpenClaw 项目日报 · 2026-07-13

---

## 一、今日速览

OpenClaw 今日维持高强度迭代节奏：过去 24 小时内 Issues 区共刷新 **500 条**（其中新开/活跃 291 条、关闭 209 条），PR 区同样刷新 **500 条**（待合并 278 条、合并/关闭 222 条），并发布一个 **beta 版本 v2026.7.1-beta.6**，整体活跃度处于历史高位。社区讨论主题呈现"**稳定性 + 平台完整性**"双线推进：P0/P1 级别的 Gateway 内存泄漏、SQLite 数据库损坏、Codex harness 通信超时等问题持续受到关注；同时 Linux/Windows 客户端、动态模型发现、内存信任标签等长尾 Feature Request 仍在排队。维护者 steipete 与 yetval 等核心贡献者今天集中提交了一批面向"边界一致性与插件契约"的 refactor/fix（[#105838](https://github.com/openclaw/openclaw/pull/105838)、[#105849](https://github.com/openclaw/openclaw/pull/105849)、[#105584](https://github.com/openclaw/openclaw/pull/105584)、[#105826](https://github.com/openclaw/openclaw/pull/105826)），显示项目正在为下一稳定版本做架构性整理。

---

## 二、版本发布

### 🚀 v2026.7.1-beta.6

**核心更新（Highlights）：**

| 类别 | 变更 |
|---|---|
| 新模型 | Featherless、Claude Sonnet 5、Mythos 5、Meta Muse Spark 1.1 |
| 新 Provider | ClawRouter |
| 默认模型 | GPT-5.6 成为新装默认；Sol / Terra 启用 `/think ultra`，Luna 启用 `max` |
| 兼容 | 兼容 Z.AI `max`；OAuth 后刷新模型可用性 |

**潜在破坏性变更 / 迁移注意事项：**
- 默认模型切换为 GPT-5.6，原使用 GPT-5.x 系列之外模型的工作流需在配置中显式指定 fallback。
- 模型可用性刷新时机调整为 OAuth 之后，老旧 OAuth token 可能需要重新走一次认证流程才能看到完整目录。
- 命名上沿用 semver beta 标签（`2026.7.1-beta.6`），建议生产环境继续等待 2026.7.1 稳定版。

---

## 三、项目进展

今日共有 **222 个 PR 被合并或关闭**，以下为面向 maintainer review / 具备影响力的代表性推进：

| 方向 | PR | 内容 |
|---|---|---|
| Slack 集成 | [#105849](https://github.com/openclaw/openclaw/pull/105849) | Slack 文件附件占位符中补充元数据（接续 #41657） |
| 鉴权安全 | [#105584](https://github.com/openclaw/openclaw/pull/105584) | GitHub Copilot OAuth 拒绝非 Copilot enterprise 域，避免 token 外泄 |
| Discord 稳定性 | [#103562](https://github.com/openclaw/openclaw/pull/103562) | Discord 入站 reply-session init 冲突重试，修复静默丢消息 |
| Gateway 安全 | [#103534](https://github.com/openclaw/openclaw/pull/103534) | `sessions.patch` 增加 plugin-ownership 校验 |
| iOS 体验 | [#104842](https://github.com/openclaw/openclaw/pull/104842) | iOS Share Extension 阻塞遗漏附件并提示 |
| 配置兼容 | [#105835](https://github.com/openclaw/openclaw/pull/105835) | 继承 provider 级 `contextWindow`/`maxTokens` 默认值 |
| Cache 兼容 | [#95311](https://github.com/openclaw/openclaw/pull/95311) | DeepSeek 等前缀匹配 cache provider 适配选项 |
| 基础设施 | [#105838](https://github.com/openclaw/openclaw/pull/105838) | 抽取共享 channel 插件契约脚手架，消除各渠道重复实现 |
| 基础设施 | [#105826](https://github.com/openclaw/openclaw/pull/105826) | 恢复 unused-export ratchet CI 门禁 |
| 基础设施 | [#105789](https://github.com/openclaw/openclaw/pull/105789) | 整合重试调度逻辑（含 Retry-After 行为修正） |

**推进方向总结：** "**鉴权/会话安全**"（OAuth 校验、plugin 所有权、conflict 重试）和 "**渠道插件一致性**"（共享脚手架、契约统一）是今日最清晰的两条主线；同时 [#105844](https://github.com/openclaw/openclaw/pull/105844)（durable core beta3 PR4/5）显示 wake 控制/检查面正在按计划落地，2026.7.x 体系正在向稳定 GA 收敛。

---

## 四、社区热点（按讨论密度排序）

### 4.1 最受关注的长期议题
1. **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — 110 评论 / 81 👍（P2）  
   macOS/iOS/Android 节点已就位，**桌面端 Linux/Windows 仍是社区呼吁最深的功能**。该 Issue 跨年长存，且被标记为 off-meta tidepool，说明维护层尚未明确优先级，但用户诉求稳定且强烈。
2. **[#99241 工具输出被折叠为图片附件](https://github.com/openclaw/openclaw/issues/99241)** — 22 评论（P1）  
   长会话 / ANSI-heavy 场景下 tool result 变成 `(see attached image)`，Agent 看不到原始 stdout/stderr。证据丢失类问题，对自动化场景致命。
3. **[#91588 Gateway 内存泄漏（350MB→15.5GB → OOM）](https://github.com/openclaw/openclaw/issues/91588)** — 19 评论（P0）  
   经典 "platinum hermit" 级稳定性问题，触发 launchd 反复重启循环，是阻碍生产部署的核心障碍。

### 4.2 安全 / 隐私相关讨论
- [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)（17 评论，🦞）— 防御 memory poisoning。
- [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)（13 评论）— 让 Agent **用**密钥但**看不到**密钥。
- [#7722 Filesystem Sandboxing Config](https://github.com/openclaw/openclaw/issues/7722)（9 评论）— `tools.fileAccess` 路径白/黑名单。
- [#6615 exec-approvals denylist](https://github.com/openclaw/openclaw/issues/6615)（7 评论，7 👍）— "允许除 X 外所有命令"策略。

### 4.3 会话与状态一致性
- [#102020 第二条消息 "reply session initialization conflicted"](https://github.com/openclaw/openclaw/issues/102020)（11 评论）— 跨频道、位置依赖。
- [#102400 Slack/webchat/heartbeat 入站 init 冲突静默丢消息](https://github.com/openclaw/openclaw/issues/102400)（6 评论）— Telegram 已修，其他渠道未修。
- [#39476 A2A sessions_send 回路导致重复消息](https://github.com/openclaw/openclaw/issues/39476)（10 评论）— Agent 之间互发，requestor 频道被刷两次。
- [#53408 长会话后 write/exec 工具参数被悄悄丢弃](https://github.com/openclaw/openclaw/issues/53408)（8 评论）— 沉默失败最危险。
- [#78562 反复 auto-compaction 循环](https://github.com/openclaw/openclaw/issues/78562)（6 评论）— 每次成功压缩后又立即溢出。

### 4.4 模型 / Provider 路线图
- [#10687 动态模型发现（OpenRouter 起步）](https://github.com/openclaw/openclaw/issues/10687)（9 评论）— 模型目录仍以静态为主。
- [#10687 [#9986] 上下文超限触发 fallback](https://github.com/openclaw/openclaw/issues/9986)（6 评论）— `fallbacks` 当前仅响应 API 错误。
- [#9016 OpenRouter 使用成本透出给 Agent](https://github.com/openclaw/openclaw/issues/9016)（4 评论）。
- [#47910 按失败类别隔离 Provider](https://github.com/openclaw/openclaw/issues/47910)（8 评论）— 鉴权失败的 provider 不该再被重试。

### 4.5 渠道 / TUI / UX
- [#7476 WhatsApp sticker 发送](https://github.com/openclaw/openclaw/issues/7476)（5 评论）。
- [#10944 Telegram parseMode 配置](https://github.com/openclaw/openclaw/issues/10944)（4 评论）。
- [#8355 Voice call 流式 TTS pipeline](https://github.com/openclaw/openclaw/issues/8355)（4 评论）。
- [#9637 TUI 关闭 emoji / unicode](https://github.com/openclaw/openclaw/issues/9637)（5 评论）— 无障碍诉求。
- [#10118 TUI Shift+Enter 换行](https://github.com/openclaw/openclaw/issues/10118)（5 评论，4 👍）。

> **背后的诉求画像：** 安全/隐私、跨渠道一致性、动态可观测性（成本/失败分类）、平台完整性（桌面端）四类议题累积了大量需求信号。安全类与平台类通常需要架构层投入；跨渠道一致性则是当前 PR 重点清理方向。

---

## 五、Bug 与稳定性（按严重度排序）

| 等级 | Issue / 标题 | 关键影响 | 是否有修复 PR |
|---|---|---|---|
| 🐚 P0 | [#91588 Gateway 内存泄漏 → OOM](https://github.com/openclaw/openclaw/issues/91588) | 反复崩溃循环，2-3 天耗尽内存 | ❌ 无明确修复 PR |
| 🐚 P0 | [#104721 工具结果一律返回 `(see attached image)`](https://github.com/openclaw/openclaw/issues/104721) | 数据被占位符替代而非显示错误 | ❌ 无 fix PR |
| 🐚 P0 | [#101290 CLI preflight 损坏 SQLite（macOS）](https://github.com/openclaw/openclaw/issues/101290) | `openclaw.sqlite` 4 天内损坏 4 次 | ❌ 无 fix PR |
| 🦞 P1 | [#87744 Codex-backed Telegram turn 反复超时](https://github.com/openclaw/openclaw/issues/87744) | Telegram 完全拿不到最终回复 | ❌ 无 fix PR（linked-pr-open 标签缺失） |
| 🐚 P1 | [#99947 Codex harness mirrored-session-history 失败](https://github.com/openclaw/openclaw/issues/99947) | ephemeral / failover 路径全断 | ❌ 无 fix PR |
| 🐚 P1 | [#94939 6.x 状态迁移后 channel SQLite 0 字节](https://github.com/openclaw/openclaw/issues/94939) | MS Teams proactive 发送失败 | ❌ 无 fix PR |
| 🐚 P1 | [#89228 isolated cron 中 exec 间歇性不可用（2026.4.1 已修过）](https://github.com/openclaw/openclaw/issues/89228) | 定时任务静默失败 | ⚠️ linked-pr-open |
| 🦞 P1 | [#91009 Codex PreToolUse hook relay 100%+ CPU](https://github.com/openclaw/openclaw/issues/91009) | gateway RPC 停滞 | ❌ |
| 🐚 P1 | [#99241 工具输出折叠为图片附件](https://github.com/openclaw/openclaw/issues/99241) | Agent 看不到证据 | ❌ |
| 🐚 P1 | [#53408 长会话后 write/exec 参数静默丢弃](https://github.com/openclaw/openclaw/issues/53408) | 内容 / 命令丢失 | ❌ |
| 🦪 P1 | [#71326 cross-exec 文件读到陈旧内容](https://github.com/openclaw/openclaw/issues/71326) | 进程间缓存竞态 | ❌ |
| 🦞 P1 | [#102400 reply-session init 冲突被静默丢弃](https://github.com/openclaw/openclaw/issues/102400) | Slack / webchat / heartbeat 入站丢失 | ⚠️ Discord 已有 [#103562](https://github.com/openclaw/openclaw/pull/103562)，其余渠道待移植 |
| 🦞 P1 | [#103778 gateway 插件热重载失败后 metadata 不一致](https://github.com/openclaw/openclaw/issues/103778) | 已 CLOSED + 修复 PR | ✅ [#103778 修复 PR 已 open](https://github.com/openclaw/openclaw/issues/103778) |
| 🐚 P0 | [#105727 JSON5 注释在自动写入时静默丢失](https://github.com/openclaw/openclaw/pull/105727) | 配置文件不可逆损坏 | ⚠️ PR 已开 |
| 🐚 P1 | [#90404 acpx TypeError `Cannot use in operator`](https://github.com/openclaw/openclaw/issues/90404) | ACP 路径在 macOS 部分场景崩溃 | ⚠️ 已 CLOSED（待确认修复版本） |

**整体观察：** P0/P1 中只有约 **15% 有对应 fix PR**，其余仍处于 "needs-product-decision / needs-live-repro / needs-maintainer-review" 标签堆积状态。内存泄漏、SQLite 损坏、Codex harness 通信超时被反复提及但缺少统一修复路径，是当前最大的稳定性风险。

---

## 六、功能请求与路线图信号

| 类别 | Issue | 现状 / 与版本契合度 |
|---|---|---|
| 模型动态发现 | [#10687](https://github.com/openclaw/openclaw/issues/10687) | v2026.7.1 已强调 "OAuth 后刷新模型可用性"，路线图正向此处演进 |
| 上下文超限 fallback | [#9986](https://github.com/openclaw/openclaw/issues/9986) | 与 [#95311](https://github.com/openclaw/openclaw/pull/95311) cache 适配同一思路，需补 fallback 触发条件 |
| 平台完整性 | [#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 桌面 | 长线需求，是否

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 2026-07-13 横向对比分析

---

## 一、生态全景

2026 年 7 月中旬，个人 AI 助手赛道已从"功能堆叠"进入"边界收敛与可观测性深水区"。**13 个被监测项目中 7 个有真实活动**，其中 OpenClaw、ZeroClaw、IronClaw 三家代表"全栈通用、平台化路线"，CoPaw、NanoClaw、Hermes Agent 处于"高活跃 + 修复密集"区间，而 PicoClaw、LobsterAI 与三个无活动项目（**TinyClaw / Moltis / ZeptoClaw**）则暴露出"贡献者流失 → stale-bot 接管 → 贡献者更不敢来"的负反馈循环。整体来看，**安全鉴权、跨渠道一致性、Tool call 配对、成本可观测性**四条主线已成行业共同课题，但解决路径与工程严谨度差异显著。

---

## 二、各项目活跃度对比

| 项目 | Issues 24h | PRs 24h | Release | 健康度（综合） | 关键特征 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 刷新（291 新/活） | 500 刷新（222 合/关） | ✅ v2026.7.1-beta.6 | ⭐⭐⭐⭐⭐ | 多平台完整度高，处于 GA 收敛期 |
| **ZeroClaw** | 30 更新 | 50 更新（3 合/关） | ❌（v0.8.3 tracker 中） | ⭐⭐⭐⭐ | SOP 控制面 + 可观测性领先，但合入速率偏低 |
| **CoPaw / QwenPaw** | 净增 18 | 净增 8 | ❌ | ⭐⭐ | v2.0.0 集中回归，亟需 2.0.1 补丁 |
| **IronClaw** | 10 更新（3 关） | 50 更新（22 合/关） | ❌ | ⭐⭐⭐⭐ | CI 红色治理成专项，Reborn 弹性 PR Stack 推进 |
| **Hermes Agent** | 50 更新（41 关） | 50 更新（仅 5 合/关） | ❌ | ⭐⭐⭐ | 修复链路高效，但 PR 审阅吞吐是瓶颈（45 积压） |
| **NanoClaw** | 3 新增 | 14 更新 | ❌ | ⭐⭐⭐⭐ | issue→fix 闭环极紧，2-3 个 PR 已具备合并条件 |
| **NanoBot** | 4 更新 | 7 更新（3 合/关） | ❌ | ⭐⭐⭐ | WebUI 安全修复当日合并，质量侧投入显著 |
| **NullClaw** | 0 | 6 更新（4 合/关） | ❌ | ⭐⭐⭐ | 纯维护模式，关键 PR #954 已等 30 天 |
| **PicoClaw** | 5（2 stale 关） | 2（1 stale 关） | ❌ | ⭐⭐ | Stale-bot 策略过激，移动端断档 |
| **LobsterAI** | 1 活跃 | 2（1 关） | ❌ | ⭐⭐ | P0 数据覆盖 Bug 6 天无响应 |
| TinyClaw / Moltis / ZeptoClaw | 0 | 0 | — | ⭐ | 24h 无活动 |

> 数据口径："刷新"含历史条目被再次触达；"净增"=新增 − 关闭。下同。

---

## 三、OpenClaw 在生态中的定位

**OpenClaw 是当前生态中最具"操作系统"属性的项目**——单日 500 条 PR 刷新、222 条合并的吞吐量接近其余所有项目总和的 2 倍，且 v2026.7.1-beta.6 已在 GA 收敛中。

| 维度 | OpenClaw | 最接近的对位项目 | 差异 |
|---|---|---|---|
| 平台完整度 | macOS/iOS/Android/CLI/Web | ZeroClaw（多 channel + web） | OpenClaw 桌面客户端先发，**Linux/Windows 桌面仍是社区头号缺口**（Issue #75，110 评论/81 👍） |
| 插件契约 | 已抽取共享 channel 脚手架（#105838） | Hermes Agent（按 adapter 加固） | OpenClaw 从契约层收敛，其余仍逐个修补 |
| 模型目录 | 静态为主，OAuth 后刷新（v2026.7.1-beta.6） | IronClaw（动态 provider 注册） | OpenClaw 落后于动态发现诉求（#10687） |
| 稳定性 | P0 内存泄漏 / SQLite 损坏未根治 | ZeroClaw / IronClaw CI 治理 | OpenClaw P0/P1 fix PR 覆盖率仅约 15%，是当前最大风险 |
| 社区规模 | 单日 500 PR 刷新 | ZeroClaw（50）、IronClaw（50） | 量级领先一个数量级 |

**结论**：OpenClaw 在"广度"上无可争议，但在"稳定性深度"与"动态模型发现"上落后于 ZeroClaw / IronClaw 体系。

---

## 四、共同关注的技术方向

以下 7 个方向在 **3 个及以上项目**同时涌现，属于行业级共识痛点：

| 方向 | 代表项目与具体诉求 |
|---|---|
| **1. OAuth / 鉴权收紧** | OpenClaw #105584 Copilot OAuth 域校验；Hermes Agent #17263 管理端点鉴权漏洞（CRITICAL）；NanoBot #4892 WebUI 远程会话越权防御 |
| **2. 跨渠道一致性（channel plugin contract）** | OpenClaw #105838/#105849；Hermes Agent #23374 三平台 batch-delay 解析加固；NanoClaw #3030 LINE/WhatsApp 渲染统一；ZeroClaw #8949 webhook 栈 |
| **3. Tool call / result 配对与上下文压缩** | OpenClaw #53408/#99241/#78562；CoPaw #5986/#5989/#5996；ZeroClaw #5808 32K context 超额 |
| **4. 记忆安全与可观测性** | OpenClaw #7707 Memory Trust Tagging、#10659 Masked Secrets；IronClaw #8984 memory 边界扫描；ZeroClaw #8893 memory gated 审计 |
| **5. 成本 / Token 透出** | OpenClaw #9016/#10687；Hermes Agent #21827 按任务路由模型（社区第 2 热）；IronClaw #5976 per-run cost metering |
| **6. Cron / 心跳可靠性** | OpenClaw #89228 isolated cron；NanoBot #4896 heartbeat 回归；NullClaw #954 one-shot cron use-after-free |
| **7. 桌面 / 移动端完整度** | OpenClaw #75 Linux/Windows 桌面；PicoClaw #3182 Android 启动失败；CoPaw #5979 Linux 沙盒映射 root |

> **洞察**：第 1、3、4 项是"安全+正确性"硬约束；第 5、6 项是"用户侧可观测"软约束。两者合并后，Agent 产品的下一道护城河很可能从"模型支持多寡"转向"成本可见 + 失败可解释"。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全平台、插件化、桌面/移动多端 | 重度自动化用户 / 团队 | 共享 channel 脚手架 + OAuth 模型发现 |
| **ZeroClaw** | SOP 控制面、OTel/审计可观测性 | 企业 / 高合规场景 | SOP 5/5 里程碑、AMQP 幂等、Web Gateway |
| **IronClaw** | 基准驱动、CI 治理、CLI/TUX 友好 | 工程师 / 内部 AI 团队 | Reborn 循环弹性 + claw-swe-bench-lite 数据驱动 |
| **CoPaw / QwenPaw** | AgentScope / 通义千问生态对齐 | 中文 AI Agent 研究者 | 多频道 Console 同步、vision fallback |
| **NanoClaw** | 多渠道 + 模板化部署 | 模板复用型中小团队 | "一个权威调度源"哲学、guard seam |
| **Hermes Agent** | 鉴权与认证韧性 | 安全敏感型用户 | Tirith 审批弹窗、Infisical 外部 Vault |
| **NanoBot** | WebUI 产品化、引导式配置 | 入门用户 / 远程协作 | Dream session、QR 交接、多 assistant 实例 |
| **NullClaw** | 稳定性 / 资源管理打磨 | 生产环境长期运行者 | Zig 风格 SSOT、Config 早退清理 |
| **PicoClaw** | 边缘 / 嵌入式轻量 | 玩客云 / RPi Zero 极客 | armhf 构建矩阵（社区诉求被关） |
| **LobsterAI** | 多 Agent 个性化（设计意图） | 教育 / 角色化助手 | Agent ID 命名空间缺陷暴露数据隔离问题 |

---

## 六、社区热度与成熟度分层

**第一梯队 · 快速迭代 + 高复杂度**（活跃但暴露真实生产问题）
- **OpenClaw / ZeroClaw**：日吞吐 30-500，更关注平台完整性与可观测性。
- **IronClaw**：50 PR 中 28 待合并，**评审瓶颈**是其增长上限。

**第二梯队 · 质量巩固期**（少量 PR 但每个都精准）
- **NanoClaw / NullClaw / NanoBot**：PR 与 issue 一一对应，"修复密度"最高，但规模未放大。
- **Hermes Agent**：sweeper 自动归档比例高（41/50），适合追求"低噪"。

**第三梯队 · 稳定性危机**
- **CoPaw**：v2.0.0 升级引发系统性回归（tool_call 配对、auto-memory、技能池、channel 同步），信任度受损。
- **PicoClaw / LobsterAI**：stale 标记过多 + 关键 bug 长期无维护者响应。

**第四梯队 · 休眠 / 边缘**（24h 0 活动）
- **TinyClaw / Moltis / ZeptoClaw**：尚未观察到复苏信号，需警惕彻底停摆。

---

## 七、值得关注的趋势信号

1. **"鉴权硬化"成为新的入场券**——OpenClaw / Hermes / NanoBot 今日均有安全 PR 落地，**OAuth 域校验、WebUI 越权防御、管理端点鉴权**已成 P1 标配。建议开发者在 v0.x 阶段就把"模型 token 隔离 + 远程会话降权

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-13

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库 · 统计窗口：过去 24 小时

---

## 1. 今日速览

NanoBot 今日处于**中等活跃度**的开发节奏：共产生 **4 条 Issue 更新**与 **7 条 PR 更新**，但无新版本发布。值得关注的是，社区工作集中在三个方向——**Ollama 性能优化**（#4867 已关闭）、**Dream Session 相关 Bug 修复**（#4893、#4894）以及 **WebUI 安全加固**（#4892 已关闭）。同时出现 1 个 P1 级别回归修复 PR（#4896 heartbeat）等待合并。整体来看，项目维护响应较及时，但部分长期 PR（如 #4145）积压已超 40 天。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前最新版本仍为此前发布的 v0.2.1。

---

## 3. 项目进展

今日共 **3 个 PR 被关闭/合并**，整体向前推进有限但方向清晰：

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| [#4879](https://github.com/HKUDS/nanobot/pull/4879) | Feature / duplicate | `feat(long_task)`: sustained-goal 默认关闭，需 opt-in。因标记为 duplicate 关闭 | [#4879](https://github.com/HKUDS/nanobot/pull/4879) |
| [#4898](https://github.com/HKUDS/nanobot/pull/4898) | Merge | 作者 Theembers 的合并操作 | [#4898](https://github.com/HKUDS/nanobot/pull/4898) |
| [#4892](https://github.com/HKUDS/nanobot/pull/4892) | **Security / P1 Fix** | 允许远程 WebUI 会话从 Full Access 降级为 Default Permission，但禁止越权升级；远程升级仅限 localhost/native | [#4892](https://github.com/HKUDS/nanobot/pull/4892) |

**亮点**：WebUI 安全模型被进一步收紧（#4892），增强了多用户/远程场景的访问控制能力，是本日报最具实质性的安全改进。

---

## 4. 社区热点

📊 **今日评论/互动最高的 Issue**：

- **[#4867 [CLOSED] Preserve exact prompt prefix to enable caching in Ollama](https://github.com/HKUDS/nanobot/issues/4867)**
  - 评论数：4 ｜ 👎 反应 0
  - 作者反馈：本地 Ollama + 32GB VRAM 场景下，Nanobot 每次对话额外增加 ~60 秒延迟，**完全不可用**。同样的模型脱离 Nanobot 跑得很流畅。
  - 诉求：保留 prompt prefix 完整性以启用 prompt caching。
  - 分析：这是典型的**性能/兼容性痛点**，反映本地大模型部署用户群对响应延迟的敏感度，已被关闭，暗示已通过其他途径解决。

📌 **今日讨论最热 PR**：

- **[#4896 [OPEN, P1] fix(heartbeat): rewrite prompt](https://github.com/HKUDS/nanobot/pull/4896)**
  - 涉及 v0.2.1 后的回归问题，属于高频使用路径上的核心修复。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 级别
- **[#4896 Heartbeat 回归](https://github.com/HKUDS/nanobot/pull/4896)**（已有 Fix PR，待合并）
  - v0.2.1 (fe2af64e) 将 heartbeat 从 service 重构为 cron job 后，prompt 未同步更新，导致**代理仅上报而不执行任务**。影响自动周期任务可用性。

### 🟠 用户报告 Bug
- **[#4897 Discord Bot 集成失灵](https://github.com/HKUDS/nanobot/issues/4897)**（无 Fix PR）
  - 用户启用 `nanobot plugins enable discord` 后，gateway 在线、bot 显示在线，但**收不到任何消息**。影响 Discord 渠道可用性。

- **[#4894 prune_dream_sessions() 无法清理 base64 命名文件](https://github.com/HKUDS/nanobot/issues/4894)**（无 Fix PR）
  - 自 cf2f5896 之后 Dream session 文件改用 base64 编码命名（如 `ZHJlYW06...`），但 `memory.py` 中 `prune_dream_sessions()` 仍使用 `dream_*.jsonl` glob，**导致旧文件无法被清理**，长期累积可能引发存储/性能问题。

- **[#4893 /dream-log 与 /dream-restore 显示非 Dream 提交](https://github.com/HKUDS/nanobot/issues/4893)**（无 Fix PR）
  - 由于工作区 git 仓库与其他进程共享，未做 commit 过滤使输出混乱，**影响用户对 Dream 历史的可读性**。

> 注：#4893 与 #4894 来自同一作者 groudas，且都与 cf2f5896 提交相关，**建议维护者统一评审**，避免类似回归。

---

## 6. 功能请求与路线图信号

| PR/Issue | 信号 | 路线图判断 |
|---|---|---|
| [#4855 WebUI 引导式 Channel 配置流](https://github.com/HKUDS/nanobot/pull/4855) | 新增产品化配置流程、QR 交接、Secret 安全处理、飞书多 assistant 实例 | **高概率纳入下一版本** —— 显著降低新用户上手成本 |
| [#4879 sustained-goal 默认关闭](https://github.com/HKUDS/nanobot/pull/4879) | 用户反馈 long_task 在主线程"卡死"交互 | 已被标 duplicate 关闭，说明已有并行方案或讨论 |
| [#4867 Ollama prompt caching](https://github.com/HKUDS/nanobot/issues/4867) | 本地模型用户体验诉求 | 与 [#4879](https://github.com/HKUDS/nanobot/pull/4879) 一同关闭，疑似合并至更广义优化路线 |

---

## 7. 用户反馈摘要

🎯 **真实痛点提炼**：

1. **本地大模型场景性能瓶颈**（来自 #4867）
   > "Adds an extra 60 seconds to every single turn, even the dead-simple turns. This is totally unusable with Ollama and 32 GB of VRAM."
   - 场景：本地 Ollama + 32GB VRAM
   - 满意度：极低

2. **Discord 渠道完全无响应**（来自 #4897）
   - 场景：按官方文档配置 Discord 插件
   - 状态：在线但无消息，疑似认证或 WebSocket 连接问题

3. **长期 PR 被忽视**（#4145 来自 6 月 1 日）
   - 维护者响应延迟，需关注是否有合并障碍

> 当前用户**主要不满**集中在 **第三方集成的稳定性**（Discord、Ollama）与 **Dream session 的文件管理层**，**正面反馈**则集中在 WebUI 安全模型与新引导流程的体验提升。

---

## 8. 待处理积压 ⚠️

| 编号 | 类型 | 创建时间 | 备注 |
|---|---|---|---|
| [#4145 Weather Skill](https://github.com/HKUDS/nanobot/pull/4145) | PR/fix | **2026-06-01** | 已开放 **42 天**，多文件贡献，建议维护者明确是否合并或反馈修改方向 |
| [#4867 Ollama caching](https://github.com/HKUDS/nanobot/issues/4867) | Issue 关闭后 | 关闭 | 建议公告解决方式，避免用户反复追问 |
| [#4897 Discord bot](https://github.com/HKUDS/nanobot/issues/4897) | Bug | 2026-07-12 | 暂无维护者响应，**新增**待处理项 |
| [#4855 WebUI 配置流](https://github.com/HKUDS/nanobot/pull/4855) | Feature | 2026-07-08 | 已开放 5 天，仍待 Code Review |

---

## 📌 健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐☆☆ | 中等，无新版本释出 |
| 安全响应 | ⭐⭐⭐⭐⭐ | P1 WebUI 安全修复当日合并 |
| Bug 响应 | ⭐⭐⭐☆☆ | 2 个 Dream session Bug 未分配 Fix |
| 社区沟通 | ⭐⭐⭐☆☆ | 长期 PR（#4145）响应迟缓 |
| 路线图清晰度 | ⭐⭐⭐⭐☆ | WebUI 易用性、P1 回归修复方向明确 |

**总评**：项目处于**稳健迭代期**，安全侧投入显著，但**集成稳定性（Ollama / Discord）**与**长尾 PR 处理**是当前主要短板。下一版本如能解决 #4896 heartbeat 回归与 Discord 集成问题，将明显改善用户体验。

---
*本日报由 AI 自动生成，基于 2026-07-13 公开 GitHub 数据，不含内部未公开信息。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-07-13**

---

## 1. 今日速览

Hermes Agent 仓库今日整体处于**集中清理与自动化 triage**状态，活跃度高但呈现结构性不平衡：50 条 Issues 更新中有 41 条标记关闭（多数为 sweeper 自动归档/已落地），仅 9 条仍处活跃；50 条 PR 中仅 5 条进入合并/关闭流程，**45 条积压待审**，反映出代码审查吞吐存在明显瓶颈。今日无新版本发布。多项 P2 级 Bug（英伟达 base URL、Kimi 思考内容丢失、WebSocket 握手超时等）已落地修复并关闭相关 Issue，显示出项目质量修复链条整体运转良好。整体项目健康度评估：**中等偏上**，需重点关注 PR 审阅积压。

---

## 2. 版本发布

本统计周期内未发布新版本，无相关更新内容需说明。

---

## 3. 项目进展

今日共 5 条 PR 进入合并/关闭流程，其中 3 条已确认状态：

| PR | 类型 | 重要程度 | 影响 |
|---|---|---|---|
| [#17263](https://github.com/NousResearch/hermes-agent/pull/17263) | 🔒 安全修复 | CRITICAL | 修复 `web_server.py` 中 `/api/ga...` 等管理端点的鉴权漏洞，封闭后台暴露面 |
| [#23374](https://github.com/NousResearch/hermes-agent/pull/23374) | 网关加固 | P3 | 硬化 Telegram/Discord/WeCom 三个适配器的 batch-delay 环境变量解析，避免畸形值导致启动失败 |
| [#23379](https://github.com/NousResearch/hermes-agent/pull/23379) | 认证修复 | P2 | Copilot 在辅助 provider 401/token 失效场景下具备自动刷新能力，并清理缓存客户端 |

**推进评估**：安全 CRITICAL 级别修复在当日被纳入主线，是本日最有价值的进展。三个已完成 PR 共同覆盖了 **安全边界、跨平台鲁棒性、辅助认证韧性**三个方向，对项目稳定性收益高。

---

## 4. 社区热点

### 评论最多的 Issue（Top 5）

| 排名 | Issue | 评论数 | 👍 | 方向 |
|---|---|---|---|---|
| 1 | [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) Add Infisical 作为外部 Vault 后端 | 7 | **13** | 密钥管理 |
| 2 | [#21827](https://github.com/NousResearch/hermes-agent/issues/21827) 主题感知子代理路由——按任务选择模型 | 6 | 0 | 架构演进 |
| 3 | [#22926](https://github.com/NousResearch/hermes-agent/issues/22926) Kanban 陈旧 claim lock 无自动清理 | 5 | 0 | 可靠性 |
| 4 | [#23158](https://github.com/NousResearch/hermes-agent/issues/23158) 识别不了英伟达 base url | 4 | 0 | 提供商集成 |
| 4 | [#22949](https://github.com/NousResearch/hermes-agent/issues/22949) Kimi K2-6 思考内容 Telegram 不显示 | 4 | 0 | 平台兼容性 |
| 4 | [#22864](https://github.com/NousResearch/hermes-agent/issues/22864) Dashboard /chat PTY WebSocket 超时 | 4 | 0 | 前端 |

### 诉求分析

- **密钥管理扩展**（#22791）：获得 13 个👍，远超其他 Issue，反映社区对 Infisical 集成有明确刚需，且是 External Vault Phase 4 的子任务。
- **模型成本优化**（#21827）：提出按任务域路由到不同模型以降低成本，反映用户对单模型全场景成本的不满情绪正在累积。
- **故障恢复**（#22926）：Kanban 调度器对 worker 异常死亡场景的容忍度不足，暴露出生产可观测性短板。

---

## 5. Bug 与稳定性

### P2 级（重要，已修复）

| Issue | 问题 | 状态 |
|---|---|---|
| [#23158](https://github.com/NousResearch/hermes-agent/issues/23158) | NVIDIA API base URL 无法被 CLI 识别并注册 | ✅ 已落地主线 |
| [#22949](https://github.com/NousResearch/hermes-agent/issues/22949) | Kimi K2-6 开启 thinking 后 Telegram 不显示 reasoning_content | ✅ 已落地主线 |
| [#22864](https://github.com/NousResearch/hermes-agent/issues/22864) | Dashboard `/chat` PTY WebSocket HTTP 101 响应未及时 flush | ✅ 已落地主线 |
| [#22986](https://github.com/NousResearch/hermes-agent/issues/22986) | v0.13.0 后 Codex `APIConnectionError` 重试率飙升 8 倍 | ✅ 已落地主线 |
| [#22250](https://github.com/NousResearch/hermes-agent/issues/22250) | Telegram 回复带图片消息时图片未传给 agent | ✅ 已落地主线 |
| [#22212](https://github.com/NousResearch/hermes-agent/issues/22212) | 平台层重试在单次序列内未先轮换 auth profile | ✅ 已落地主线 |
| [#22153](https://github.com/NousResearch/hermes-agent/issues/22153) | 非 venv 环境 QQBot 发送链路失败 | ✅ 已落地主线 |
| [#23371](https://github.com/NousResearch/hermes-agent/issues/23371) | Weixin 发送触发跨 event loop `Future` 错误 | ✅ 已落地主线（duplicate） |
| [#23318](https://github.com/NousResearch/hermes-agent/issues/23318) | 百度 Coding Plan `custom_providers` 模型选择器与上下文长度异常 | ⚠️ sweeper:not-planned（需用户改用替代配置） |
| [#23055](https://github.com/NousResearch/hermes-agent/issues/23055) | Matrix 通道在加密房间以明文 event 投递 | ✅ 已落地主线 |
| [#22903](https://github.com/NousResearch/hermes-agent/issues/22903) | Codex OAuth refresh token 被 Codex CLI/VS Code 抢占 | ✅ 已落地主线 |
| [#22724](https://github.com/NousResearch/hermes-agent/issues/22724) | MCP 健康检查将 config key 当作 DNS 解析 | 🔁 sweeper:cannot-reproduce |
| [#22688](https://github.com/NousResearch/hermes-agent/issues/22688) | `tool_use` 在嵌套 JSON 下被当作纯文本 | 🔁 sweeper:cannot-reproduce（duplicate） |
| [#63506](https://github.com/NousResearch/hermes-agent/issues/63506) | Qwen 模型走 `/chat/completions` 而非 `/messages` 致 fallback | 🆕 **今日新开，需复现** |

### P3 级（部分已修复）

| Issue | 简述 | 状态 |
|---|---|---|
| [#22328](https://github.com/NousResearch/hermes-agent/issues/22328) | `vision_analyze` 工具无法读本地文件或公网图 | ✅ 已落地主线 |
| [#22922](https://github.com/NousResearch/hermes-agent/issues/22922) | Kanban dispatcher 不校验 profile 工具集 | 🔁 sweeper:cannot-reproduce |
| [#22926](https://github.com/NousResearch/hermes-agent/issues/22926) | Kanban 死 worker claim lock 无清理 | ✅ 已落地主线 |
| [#23096](https://github.com/NousResearch/hermes-agent/issues/23096) | MCP `_poll_once` 中 `_last_poll_timestamps` 无锁保护 | 🔁 sweeper:cannot-reproduce |
| [#23202](https://github.com/NousResearch/hermes-agent/issues/23202) | Hindsight 在 dashboard PATH 受限时无法自启 | 🔁 sweeper:cannot-reproduce |
| [#63223](https://github.com/NousResearch/hermes-agent/issues/63223) | `heartbeat.py` 在 Windows 中文环境 GBK 解码失败 + `state.db` 锁崩溃 | 🔴 OPEN，**平台风险 Windows** |

**整体评估**：当日 P2 级 Bug 中至少 9 条已确认修复落地主线，修复-闭环链路效率高。今日新开 Issue #63506 涉及 Qwen 模型 API 路径误判，需要紧急关注。

---

## 6. 功能请求与路线图信号

### 高潜力（已有对应 PR 或落地路径）

| 需求 | 对应 PR | 评估 |
|---|---|---|
| TTS 平台扩展（Murf AI） | [#23230](https://github.com/NousResearch/hermes-agent/issues/23230) | ⚠️ sweeper:not-planned，引入第三方 TTS 优先级低 |
| 桌面客户端 Tirith 审批弹窗 | [#38164](https://github.com/NousResearch/hermes-agent/issues/38164) / [#38173](https://github.com/NousResearch/hermes-agent/issues/38173) | 已关闭并合并，安全审批 UX 是明确路线图项 |
| 共享本地化框架（TUI/Dashboard） | [#23243](https://github.com/NousResearch/hermes-agent/issues/23243) | PR 已 OPEN，简体中文已完成首批语言包，方向明确 |
| System Boundary Layer（FHS 路径分类） | [#23355](https://github.com/NousResearch/hermes-agent/issues/23355) | PR OPEN，社区实验性插件方向 |
| ACP 工具生成状态暴露 | [#61812](https://github.com/NousResearch/hermes-agent/pull/61812) | PR OPEN，允许 ACP 客户端在工具输入生成期间显示早期状态 |
| Infisical 外部 Vault | [#22791](https://github.com/NousResearch/hermes-agent/issues/22791) | 已纳入 External Vault Phase 4 设计，但 Issue 本身被归档 |
| Claude Code/Team 认证作为 provider | [#32392](https://github.com/NousResearch/hermes-agent/issues/32392) | 🔴 OPEN，与 #32392 关联订阅用户实质诉求，未有关联 PR |

### 信号汇总

- **按任务路由模型**（#21827）是社区讨论度第二高的需求，但当前无对应 PR，符合"成本敏感型用户"长期诉求。
- **国际化与本地化**（#23243）今日已有成熟 PR 待审，建议纳入下个发布窗口。
- 安全相关的 **Tirith 审批弹窗**已合并，是"渐进式沙箱化"路线图最新里程碑。

---

## 7. 用户反馈摘要

从 Issues 评论与摘要中提炼的真实用户痛点：

1. **第三方提供商配置门槛偏高**：英伟达 base URL 路径被 CLI 拒绝（[#23158](https://github.com/NousResearch/hermes-agent/issues/23158)）、百度 Coding Plan 上下文长度截断（[#23318](https://github.com/NousResearch/hermes-agent/issues/23318)），反映出 `custom_providers` 在非主流国内/亚洲云厂商兼容性上摩擦明显。
2. **多客户端认证互斥**：Codex OAuth refresh token 在 Hermes 与 Codex CLI/VS Code 扩展同账号同时登录时被抢占（[#22903](https://github.com/NousResearch/hermes-agent/issues/22903)），用户需手动重认证，体验受损。
3. **跨平台鲁棒性差距大**：Windows 中文环境下 `heartbeat.py` GBK 解码崩溃（[#63223](https://github.com/NousResearch/hermes-agent/issues/63223)）、QQBot 在非 venv 环境下静默失败（[#22153](https://github.com/NousResearch/hermes-agent/issues/22153)）。
4. **Matrix 端到端加密语义被破坏**（[#23055](https://github.com/NousResearch/hermes-agent/issues/23055)）：用户期望 E2EE 房间消息被实际加密，但实际以明文 event 投递，安全语义下滑。
5. **成本与分工诉求**（[#21827](https://github.com/NousResearch/hermes-agent/issues/21827)）：用户已经形成"为简单任务支付顶级模型成本"的明显不满，希望 Agent 能感知任务类型并派发至更适配的模型。
6. **Vision 工具退化**（[#22328](https://github.com/NousResearch/hermes-agent/issues/22328)）：用户反映 `vision_analyze` 在截图缓存、浏览器截图、`/tmp` 路径下均失败，影响自动化分析场景。

整体看，**用户对核心链路修复速度满意**（多 P2 Bug 当日关闭），但对**多平台/多 provider 边界**及**生产可观测性**仍有显著不满。

---

## 8. 待处理积压

### 长期未响应的关键 Issue/PR

| 类型 | 编号 | 标题 | 创建 | 风险标签 |
|---|---|---|---|---|
| Refactor OPEN | [#17476](https://

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-07-13

---

## 1. 今日速览

PicoClaw 今日活跃度**中等偏低**：Issues 与 PR 合计有 7 条更新，但**无新版本发布**，且 24 小时内 5 条 Issues 中有 2 条为"陈旧关闭"（stale closed）状态，反映出社区响应可能存在一定延迟。从内容看，今日主要工作集中在 **Bug 修复与稳定性**（Matrix 通道断连、Provider 模型前缀解析），以及 **Anthropic 缓存 token 度量** 这一实用改进。社区整体处于"持续维护、小步快跑"的节奏，但 ARM 嵌入式场景（armhf Docker 支持）等长尾需求尚未得到积极回应。

---

## 2. 版本发布

**今日无新版本发布。** 距上一个 v0.2.9 发布已有一定时间，提示开发者版本节奏放缓，或正在为下一较大版本做积累。

---

## 3. 项目进展

### 今日关闭/合并的 PR

| PR | 标题 | 状态 | 链接 |
|----|------|------|------|
| #3190 | fix(i18n): sync missing locale keys from en.json to bn-in and cs translations | ⚠️ 陈旧关闭（stale） | https://github.com/sipeed/picoclaw/pull/3190 |

**说明**：该 PR 旨在同步孟加拉语（bn-in）与捷克语（cs）的翻译缺失键（`chat.dropImagesActive` 等），属低风险本地化补丁。**因陈旧而被自动关闭**，说明仓库可能启用了 stale-bot 自动清理策略，长时间未合并的 PR 会被关闭。这对贡献者体验不利——非阻塞型改进类 PR 缺少合并的优先通道。

**整体进展评估**：今日**净进展接近于零**，无重要功能被合入主线，#3251 是今日唯一值得关注的活跃 PR，但尚未合并。

---

## 4. 社区热点

### 评论/反应最多的 Issues

| 排名 | Issue | 评论数 | 👍 | 链接 |
|------|-------|--------|-----|------|
| 🥇 | #3182 Android 版本服务无法启动 | 3 | 0 | https://github.com/sipeed/picoclaw/issues/3182 |
| 🥈 | #3203 Matrix sync 断连后无重连逻辑 | 2 | **1** | https://github.com/sipeed/picoclaw/issues/3203 |

### 背后诉求分析

- **#3203 是今日"信号最强"的讨论**：唯一一个获得 👍 反应的 Issue。其揭示的 Matrix 长轮询断连后沉默死亡（silent death）问题，因主进程不退出而无法被 systemd 重启捕获，属于**严重的可观测性与可靠性缺陷**，对生产部署用户尤为关键。
- **#3182 反映移动端覆盖薄弱**：3 条评论表明有真实用户在尝试将 PicoClaw 部署至 Android，但日志中显示服务无法启动、设置无法更改路径。已被标记为 stale，可能尚未分配维护者跟进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 标题 | 状态 | 是否有 fix PR | 链接 |
|--------|-------|------|------|---------------|------|
| 🔴 高 | #3203 | Matrix sync loop 无重连逻辑，沉默死亡 | OPEN（活跃） | ❌ 无 | https://github.com/sipeed/picoclaw/issues/3203 |
| 🟡 中 | #3252 | `splitKnownProviderModel` 在模型 ID 含已知 provider 别名时错误剥离前缀 | OPEN（新报） | ❌ 无 | https://github.com/sipeed/picoclaw/issues/3252 |
| 🟡 中 | #3182 | Android 版服务无法启动 | OPEN（stale） | ❌ 无 | https://github.com/sipeed/picoclaw/issues/3182 |
| 🟢 低 | #3194 | Matrix 收到加密消息但未启用 crypto | CLOSED | — | https://github.com/sipeed/picoclaw/issues/3194 |

**重点关注**：
- **#3203** 应被视为**优先修复项**，它影响系统可用性与监控，且无自动恢复路径。
- **#3252** 为今日新报 Bug，涉及 provider 路由层，破坏可能因配置别名（例如 `azure/gpt-4`）导致模型路由到错误 provider，但目前 0 评论，待观察。
- **#3182** 已标记 stale 仍未响应，移动端维护缺位风险显现。

---

## 6. 功能请求与路线图信号

### 今日相关动态

| 类型 | 编号 | 标题 | 状态 | 链接 |
|------|------|------|------|------|
| 新需求 | #3250 | 添加对 armhf 设备的 Docker Compose 支持（玩客云/RPi Zero 等） | **CLOSED（未实现）** | https://github.com/sipeed/picoclaw/issues/3250 |
| 改进 PR | #3251 | 捕获 Anthropic provider 的 prompt cache token 用量 | OPEN（待合并） | https://github.com/sipeed/picoclaw/pull/3251 |

### 路线图判断

- **#3251（Anthropic 缓存可观测性）** 实现成本低、价值高（让运维人员能验证 prompt cache 是否生效、控制成本），**高概率在近期版本合并**，值得运营/成本敏感用户关注。
- **#3250（armhf Docker）** 在尚未充分讨论（0 评论）的情况下被直接关闭，**信号偏消极**。考虑到玩客云/RPi Zero 这类 ARMv7 设备在中国极客圈有大量存量用户，维护者可能：
  - 1) 认为 build matrix 扩展成本太高；
  - 2) 倾向于将二进制直接 release 而非 Docker 化；
  - 3) 仅在官方支持矩阵中明文不支持该架构。

  建议贡献者以"提供交叉编译二进制"或"独立 Dockerfile"形式重新发起 RFC。

---

## 7. 用户反馈摘要

| 来源 | 痛点/场景 | 倾向 |
|------|----------|------|
| #3203 报告人 weissfl | 在 systemd + Matrix 场景下，服务器/网络抖动导致整个 agent 通道静默失活，无任何告警机制 | 😡 强烈不满（生产可用性） |
| #3182 报告人 Monessem | Android 客户端无法启动服务，无法修改路径设置，且截图佐证 | 😟 不满（移动端空白） |
| #3250 报告人 zhang090210 | 希望将 PicoClaw 部署到玩客云/RPi Zero 等低功耗 ARM 设备做家庭服务 | 💡 期待（轻量化部署） |
| #3194 报告人 Damian-o2 | Matrix 端点加密环境配置不完整导致日志噪音 | 😐 中性（已关闭） |

**核心画像**：活跃反馈用户集中在 **Matrix 集成运维** 与 **边缘/嵌入式部署** 两个场景，对**自动恢复/可观测性**和**低功耗硬件兼容性**的诉求最为强烈。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 关键问题 | 风险 | 链接 |
|------|------|---------|------|------|
| #3203 | BUG（高严重度） | Matrix sync 断连后无重连，已沉默死亡 | systemd 无法触发重启 → 长时不可用 | https://github.com/sipeed/picoclaw/issues/3203 |
| #3182 | BUG + stale | Android 版启动失败，无人接手 | 移动端用户被劝退，口碑受损 | https://github.com/sipeed/picoclaw/issues/3182 |
| #3190 | PR + stale closed | i18n 本地化补丁被自动关闭 | 贡献者挫败感，外部贡献流失 | https://github.com/sipeed/picoclaw/pull/3190 |
| #3251 | PR（待合并） | Anthropic 缓存 token 度量捕获 | 运营成本盲区，影响成本控制决策 | https://github.com/sipeed/picoclaw/pull/3251 |

**健康度提醒**：
- 仓库 stale-bot 策略触发相对积极（5 条更新中 3 条带 stale 标记），建议维护者**保留一个"非阻塞改进"通道**，避免优质但非紧急的 PR 被清理。
- #3203 已出现 👍 关注但仍无 fix PR，建议**在下一次 minor 版本前优先消化**。
- 移动端（Android）支持目前几乎无人维护，长期看若官方不投入，建议在 README 中明确"experimental / unsupported"以管理预期。

---

*报告生成时间：2026-07-13 | 数据来源：GitHub Public API | 项目：sipeed/picoclaw*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-07-13**

---

## 1. 今日速览

NanoClaw 今日呈现出**高活跃的修复与重构日**特征，单日收到 3 条新 Issue 和 14 条新/活跃 PR，覆盖 token 上限调整、消息重复回复、容器路径权限、WhatsApp 安全、CLI 审批动词等多个方向。其中至少 5 条 PR 直接对应已开 Issue，显示社区已进入"问题-修复"的紧密循环。没有新版本发布，说明改动仍处于评审/合并前的密集迭代阶段，建议关注后续 1-3 天的合并窗口。

---

## 2. 版本发布

**今日无新 Release 发布。** 当前主线变更集中在 PR 队列中，尚未合入可发版的形态。

---

## 3. 项目进展（已关闭/合并的 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#3024](https://github.com/qwibitai/nanoclaw/pull/3024) | fix(container): raise the agent SDK's 32000 output-token cap | **状态：已关闭（非合并，作者同日重提 #3025）。** 解决了所有 Claude agent 静默被 32K token 截断的问题，对应 [#3023](https://github.com/qwibitai/nanoclaw/issues/3023)。 |
| [#2952](https://github.com/qwibitai/nanoclaw/pull/2952) | Skill/add opencode stack | **已关闭（follows-guidelines 路径下的 skill 类型 PR，未走主流程）。** 今日未合入主干。 |

整体看，**今日没有 PR 真正合并入主干**，但已形成一个清晰的"合并预备池"，预计下一个工作日会有 2-3 个修复类 PR（#3020、#3027、#3025）具备合并条件。

---

## 4. 社区热点

**今日讨论最活跃的 Issue：**

- **[#3016 Every rate_limit_event is logged as a quota error](https://github.com/qwibitai/nanoclaw/issues/3016)**（1 条评论，👍0）
  自 [#2965](https://github.com/qwibitai/nanoclaw/issues/2965) 之后，agent-runner 把 `status: "allowed"` 的 `rate_limit_event` 也误标记为 quota error。一周内 82 条无误报日志污染运维信号。**诉求：分级限流日志，避免允许通过的事件被错误归类。**

紧随其后的是与"消息回复链路"相关的两个 Issue (#3026、#3023)，均自昨天起持续活跃，且都已有对应 PR 跟进，说明社区对这条主线高度关注。

- [#3026 Re-wrap nudge re-runs and duplicates replies](https://github.com/qwibitai/nanoclaw/issues/3026)
- [#3023 Every Claude agent silently capped at 32000 output tokens](https://github.com/qwibitai/nanoclaw/issues/3023)

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（P0：直接阻塞核心功能）

| Issue | 影响 | 是否有修复 PR |
|---|---|---|
| [#3023 Claude 32K output token cap](https://github.com/qwibitai/nanoclaw/issues/3023) | 长任务中途被截断（如 CAD / OpenSCAD 大文件场景），整个 turn 不可恢复 | ✅ 有（#3024 已关、#3025 重提待合并） |

### 🟠 高（P1：导致消息丢失或重复，影响用户体验）

| Issue | 影响 | 是否有修复 PR |
|---|---|---|
| [#3026 Re-wrap nudge duplicates replies](https://github.com/qwibitai/nanoclaw/issues/3026) | 当 agent 已通过 `send_message` 回复，nudge 触发模型重跑 → 用户收到重复消息 | ✅ 有（[#3028](https://github.com/qwibitai/nanoclaw/pull/3028)、[#3020](https://github.com/qwibitai/nanoclaw/pull/3020) 双路径覆盖） |
| [#3027 container TMPDIR 投毒导致 agent 静默失联](https://github.com/qwibitai/nanoclaw/pull/3027) | `EISDIR on /tmp/onecli-proxy-ca.pem` → host 无法 spawn 容器 → 频道（如 WhatsApp）整体失声 | ✅ 修复 PR 已开（#3027），尚未合并 |

### 🟡 中（P2：日志噪声，但不影响正确性）

| Issue | 影响 | 是否有修复 PR |
|---|---|---|
| [#3016 quota 错误误报](https://github.com/qwibitai/nanoclaw/issues/3016) | 仅污染日志频道，运维侧信号失真 | ❌ 暂未发现修复 PR |

**总体看：今日 14 条 PR 中至少 4 条是修复类，且都已对准具体 Issue，稳定性修复链路完整。**

---

## 6. 功能请求与路线图信号

虽然今日 3 条 Issue 全为 Bug，但 14 条 PR 中包含若干明确的能力扩展，构成了下一版本的路线图信号：

### 🟢 较大概率达到下一版本

- **[#3029 Operator approval-resolution verbs](https://github.com/qwibitai/nanoclaw/pull/3029)** — `ncl approvals` 增加 `approve / reject / reject-with-reason`，补齐了 CLI 对"挂起动作"的闭环能力。这是 `ncl` CLI 一直缺失的最后一块拼图，merge 概率极高。
- **[#3022 Scheduled tasks in templates](https://github.com/qwibitai/nanoclaw/pull/3022)** — 模板可在 `tasks/*.md` 定义 cron，把"模板 → 定时任务"自动化。需求面广（agent 部署复用），属于高频诉求。
- **[#2983 Per-group harness capability toggles](https://github.com/qwibitai/nanoclaw/pull/2983)** — 把 cron、TodoWrite 等的内置开关细粒度化，符合 NanoClaw "一个权威调度源"的设计哲学。
- **[#3030 LINE Markdown → 纯文本](https://github.com/qwibitai/nanoclaw/pull/3030)** — 与 WhatsApp `formatWhatsApp` 同构，提升 LINE 频道的输出可读性，几乎是合入型 PR。

### 🟡 需要观察（涉及架构调整）

- **[#2986 Guard seam（guarded-actions phase 2）](https://github.com/qwibitai/nanoclaw/pull/2986)** — 新建 `src/guard/` 叶子模块，统一所有特权动作的决策函数（allow / hold / deny）。属于架构级重构，影响面广，需要核心维护者审慎评估。
- **[#2987 /add-audit skill](https://github.com/qwibitai/nanoclaw/pull/2987)** — `ncl` CLI 的本地审计日志。opt-in 设计规避合规风险，社区接受度预计较高。

---

## 7. 用户反馈摘要

从 3 条 Issue 的描述与 14 条 PR 的动机中提炼：

- **痛点：消息重复回复与静默丢失并存**  
  用户（#3026 作者 fjnoyp、#3016 作者 glifocat）明确指出 agent 在已通过 `send_message` 主动回复后，nudge 机制会**"再让模型跑一遍"**。这意味着当前 poll-loop 没有"已发则跳过"的语义，反应出对 core loop 状态机的可见性诉求。

- **痛点：长任务被静默截断**  
  javexed 在 #3023 提到 CAD / OpenSCAD 输出场景——长 turn 中途失败但没有任何用户层提示，反映出 SDK 默认值没有透传给上层运维的可见性问题。

- **痛点：日志噪声掩盖真实错误**  
  glifocat 在 #3016 表示日志中 82 条 quota 噪声让"真的配额耗尽"反而难以被发现，体现用户对**结构化、可信日志**的强烈偏好。

- **使用场景：多频道、多调度源共存**  
  WhatsApp 共享号风险（#3021）、LINE Markdown 渲染（#3030）、定时任务模板化（#3022）等 PR 都指向 NanoClaw 在**多渠道 + 模板化部署**场景的扩展，社区正持续拉高"即装即用"的门槛。

- **隐含的正面信号**  
  多位来自 core-team 的维护者（moshe-nanoco、gabi-simons）今日提交 4 条 PR，覆盖 guard seam、审计、权限/调度等基础设施面，说明核心团队在持续投入，未出现"维护停滞"迹象。

---

## 8. 待处理积压（提醒维护者关注）

以下条目**已开 ≥ 4 天且仍为 OPEN 状态**，建议优先评审：

| 编号 | 类型 | 标题 | 积压天数 | 备注 |
|---|---|---|---|---|
| [#2986](https://github.com/qwibitai/nanoclaw/pull/2986) | PR | Guard seam phase 2 | 4 天 | 涉及核心架构，需核心维护者决策 |
| [#2987](https://github.com/qwibitai/nanoclaw/pull/2987) | PR | /add-audit skill | 4 天 | 已声明"max-effort review 后硬化"，等待合入 |
| [#2982](https://github.com/qwibitai/nanoclaw/pull/2982) | PR | reconcile Claude tool allowlist | 5 天 | 直接关联 CLI 2.1.197 行为，工具名错配风险 |
| [#2983](https://github.com/qwibitai/nanoclaw/pull/2983) | PR | per-group harness capability toggles | 5 天 | 与 #2982 同一作者、同一概念批次，建议一并审 |

**建议**：核心维护者可考虑在 7-14 工作日内对 2982/2983/2986/2987 这一组基础设施 PR 给出合并或退回意见，避免队列滚雪球阻塞后续类似改动（今日新增的 #3029 与 #2986 概念上有耦合）。

---

> 📌 **数据来源**：[NanoClaw GitHub Repository](https://github.com/qwibitai/nanoclaw) · 报告生成时间：2026-07-13

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-07-13**

---

## 1. 今日速览

NullClaw 今日呈现**维护型活跃**状态：过去 24 小时无新 Issue 提交，但有 6 个 PR 获得更新，其中 4 个已被关闭/合并，2 个仍处于 OPEN 状态等待评审。代码改动集中在 **bug 修复与稳定性改进** 主题，未涉及新功能发布或版本号变更。整体节奏平稳，属于例行迭代，未观察到重大架构调整或争议性讨论。维护者（vernonstinebaker 主导）展现出稳定的代码审阅与合并效率。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。

---

## 3. 项目进展

今日合并/关闭的 4 个 PR 均为 **fix 类型**，集中解决稳定性、配置灵活性与消息归属问题，反映项目正进入打磨期：

| PR | 主题 | 影响维度 | 链接 |
|---|---|---|---|
| [#951](https://github.com/nullclaw/nullclaw/pull/951) | `fix(agent_runner): suppress stderr initialization logs` | **正确性修复**：避免子进程失败时把启动日志（memory plan、MCP 注册、channel 启动）误当作 agent 回复发送至 channel | [🔗](https://github.com/nullclaw/nullclaw/pull/951) |
| [#950](https://github.com/nullclaw/nullclaw/pull/950) | `fix(gateway): move port probe before allocations` | **资源管理**：在端口冲突早退路径上避免大量未清理的 `Config`/`RuntimeProviderBundle`/`SessionManager` 分配，提升测试环境健壮性 | [🔗](https://github.com/nullclaw/nullclaw/pull/950) |
| [#949](https://github.com/nullclaw/nullclaw/pull/949) | `fix: make queue_mode configurable from config.json` | **配置能力增强**：新增 `agent.default_queue_mode` 配置项；将 `QueueMode` 枚举统一移至 `config_types.zig` 作为唯一来源（SSOT 模式） | [🔗](https://github.com/nullclaw/nullclaw/pull/949) |
| [#948](https://github.com/nullclaw/nullclaw/pull/948) | `fix cron agent delivery attribution` | **消息路由正确性**：为 `nullclaw agent` 子进程传递 cron 投递来源元数据，使 `agent_start` 正确归属到投递 channel/account | [🔗](https://github.com/nullclaw/nullclaw/pull/948) |

**整体进度判断**：项目向"稳定 v1"阶段稳步推进。今日 4 个 PR 主要解决**三类系统性问题**——(1) 失败路径的资源/输出误用，(2) 配置体系松散，(3) 异步消息归属丢失。每一类都至少打掉一个潜在生产事故隐患。

---

## 4. 社区热点

今日所有 PR 评论数与点赞数均为 0，**未出现显著社区讨论热点**。

值得关注的两个**长期 OPEN PR**（均为高可靠性价值，但讨论度低）：

- **[#954](https://github.com/nullclaw/nullclaw/pull/954)** — `Fix: one-shot cron jobs silently fail to deliver messages (use-after-free in OutboundMessage.channel)`
  - 涉及 `cron.json` 一次性任务静默失败的 **use-after-free 严重 bug**，影响 Telegram/Mattermost 等所有 channel。
  - 已等待约 1 个月（自 2026-06-13 创建），仍待合并。

- **[#953](https://github.com/nullclaw/nullclaw/pull/953)** — `fix(discord): recover closed gateway sockets`
  - 修复 Discord gateway socket 在重连清理路径上的关闭顺序问题，并补全 pre-HELLO stalled 重连的回归测试。

社区参与度偏低可能反映项目仍处于早期采用阶段，建议维护者主动 ping 协作者推进评审。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 — 严重（已存在 fix PR，未合并）
- **[PR #954](https://github.com/nullclaw/nullclaw/pull/954) — One-shot cron jobs 静默失败（Use-after-free）**
  - 关联 Issue #941。`schedule once` 类型 cron 任务执行后被从 `cron.json` 删除，但**没有任何 channel 收到消息**。
  - 根因：`OutboundMessage.channel` 上的 use-after-free。
  - 影响：用户感知为"任务消失"，且无法通过日志排查。
  - **状态：fix PR 已就绪但 OPEN**，亟需评审合并。

### 🟠 P1 — 重要（今日已关闭修复）
- **[PR #953](https://github.com/nullclaw/nullclaw/pull/953) — Discord gateway 重连健壮性**（OPEN 但未合并）
  - pre-HELLO stalled 重连判定 + 心跳线程 join 顺序修复 + 回归测试。
- **[PR #951](https://github.com/nullclaw/nullclaw/pull/951) — stderr 启动日志误发为 agent 回复**（已关闭）
  - 仅在子进程成功时将 stderr 作为回退输出。
- **[PR #950](https://github.com/nullclaw/nullclaw/pull/950) — 端口冲突早退路径资源泄漏**（已关闭）

### 🟡 P2 — 中等（今日已关闭修复）
- **[PR #948](https://github.com/nullclaw/nullclaw/pull/948) — Cron agent 投递归属丢失**

**修复闭环率：4/6 = 66.7%**（4 个 fix 已合并，2 个仍 OPEN）。

---

## 6. 功能请求与路线图信号

今日 Issues 列表为空，无新功能请求。

但从已合并 PR 中可观察到项目**正在悄悄强化配置基础设施**：

- **PR #949** 将 `QueueMode` 提升为配置项并建立 SSOT 模式（`config_types.zig`），这是项目向"配置驱动 + 模块解耦"演进的明显信号。后续很可能扩展至 `agent.timeout`、`agent.max_retries` 等同类字段。
- **PR #948** 增强了 cron 投递的元数据传递能力，未来或可基于此推出"投递审计日志"或"按 channel 统计"等功能。

**预测下一版本可能纳入的功能点**（基于 OPEN PR）：
1. Cron 任务可靠性修复（#954）
2. Discord gateway 韧性提升（#953）

---

## 7. 用户反馈摘要

⚠️ 今日 Issues 提交数为 0，所有 PR 评论数均为 0，**无新的一手用户反馈**。

仅有的两条线索来自 PR 描述中引用的用户场景：

1. **场景 A（来自 PR #954 / Issue #941）**：用户配置 `agent-type: schedule once` 定时任务，期待到点自动向 Telegram 发送提醒——结果"配置还在、任务消失、消息没来"，完全静默失败。这是典型的 **可观测性盲区** 引发的用户挫败感。
2. **场景 B（PR #950 隐含）**：开发者/测试人员在 CI 环境反复运行 gateway 测试，因 `AddressInUse` 触发的早退路径会留下资源痕迹，影响下一次测试启动。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建距今 | 风险 |
|---|---|---|---|---|
| OPEN PR | [#954](https://github.com/nullclaw/nullclaw/pull/954) | One-shot cron jobs silently fail (use-after-free) | ~30 天 | 🔴 高 — 涉及静默数据丢失 |
| OPEN PR | [#953](https://github.com/nullclaw/nullclaw/pull/953) | Discord gateway socket recovery | ~31 天 | 🟠 中高 — 影响 Discord 用户体验 |

**提醒维护者**：
- **#954 已等待超过 1 个月**，且涉及内存安全（use-after-free），建议优先评审合并并发布 patch 版本。
- #953 自带回归测试，合并风险低，可与 #954 同批处理。
- 建议在合并后于 release notes 中标注 "critical bugfix" 以提示用户升级。

---

## 📊 项目健康度评分（基于今日数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐ | 6 个 PR 更新，4 个已合并，节奏稳健 |
| 社区参与度 | ⭐⭐ | 评论/点赞为零，社区反馈通道冷清 |
| 稳定性推进 | ⭐⭐⭐⭐⭐ | 合并内容均为 fix，命中率 100% |
| 发布节奏 | ⭐⭐ | 今日无版本发布 |
| 积压处理 | ⭐⭐ | 2 个高价值 PR 滞留超 30 天 |

**综合判断**：代码质量持续提升，但**发布节奏偏慢**且**社区互动不足**。建议维护者加快 #954/#953 评审流程，并考虑发布包含上述 4 个 fix 的 patch 版本。

---

*报告生成时间：2026-07-13 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-07-13 · 数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 今日呈现**高强度内部工程迭代日**特征：50 条 PR 中待合并 28 条、已合并/关闭 22 条，Issues 同步活跃（10 条更新，关闭 3 条），无新版本发布。研发重心高度集中在**两条主线**——其一，ilblackdragon 主导的「CI 稳定性与 Reborn 循环弹性」PR Stack（KV 缓存检测、编辑守卫、Skills 懒加载等 5 个相关 PR 集中更新）；其二，BenKurrek 推进的「extension-runtime 提取」列车，已进入 P5/P6 阶段（交付协调器 + Slack/Telegram 出站、配置/连接 UI 收尾）。整体健康度良好，但 CI 仍是 main 分支最大红色源（约 70% push 失败），团队已发布分类化修复方案。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的重要 PR）

> 注：以下 22 条已合并/关闭 PR 中，多数为 dependabot 依赖更新（如 #5926 关闭，被新 PR #6021 替代，22 个包批量 bump）。**功能性合并**亮点较少，更多价值体现在仓库策略收敛。

- **#5926 [CLOSED] dependabot: everything-else 组 20 项更新** — 已被增量版 #6021 取代，常规依赖维护流转。
- **#6010 [CLOSED] NEAR AI GLM-5.2 推理卡顿** — 用户上报的模型 hang 问题快速关闭（由 ironclaw 自动创建）。
- **#6009 [CLOSED] GLM-5.2 缺席 opencode 默认模型列表** — 已关闭。
- **#5704 [CLOSED] 聊天活跃时图片预览变透明** — bug_bash P3 报告，2 条评论后关闭。

> **信号**：今日真正的「推进」集中在 **待合并的 28 条 PR** 中（详见第 4、5 节），合并侧偏静。维护节奏正在从「合并新功能」转向「蓄力 PR Stack 评审」。

---

## 4. 社区热点

今日议题讨论热度集中在**基准驱动的 Reborn 鲁棒性改造**与**CI 根因治理**。

| 主题 | 代表条目 | 热度信号 | 链接 |
|------|---------|---------|------|
| **CI 红色根因分类** | Issue #6011（每日失败分类日报）| 团队制度化跟踪 CI 健康 | [#6011](https://github.com/nearai/ironclaw/issues/6011) |
| **CLI 密钥管理缺失** | Issue #2601 | **3 个月未关闭**，2 评论，社区反复提及 | [#2601](https://github.com/nearai/ironclaw/issues/2601) |
| **Reborn 循环弹性总 PR** | PR #5959（10 个 scope 标签，含 DB 迁移）| XL 大型 PR，loop resilience 主线 | [#5959](https://github.com/nearai/ironclaw/pull/5959) |
| **KV 缓存崩溃检测** | PR #5975（Stack 1/4 on #5959）| 引用实测数据：82%→29% 命中率坍塌 | [#5975](https://github.com/nearai/ironclaw/pull/5975) |
| **编辑工具守卫** | PR #5978 / #5979（Stack 3 & 4/4）| 借鉴 Claude Code Edit 行为 | [#5978](https://github.com/nearai/ironclaw/pull/5978) · [#5979](https://github.com/nearai/ironclaw/pull/5979) |

**诉求分析**：
- **基准差距压力**：ilblackdragon 多个 PR 引用 claw-swe-bench-lite 实测（ironclaw-reborn 30% vs hermes 65% / openclaw 40%），说明团队正在**用数据驱动改造优先级**。
- **CI 治理上升为专项**：从一次性 fix 转向「失败分类 → 静态预检 → 依赖更新」的三层防御体系（#6014 → #6018 → #6022）。
- **用户体验缺口**：#2601 反映出新用户入门阶段的身份验证与密钥管理仍是**未解的真实痛点**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 编号 | 标题 | 是否已有 fix PR |
|------|------|------|----------------|
| 🔴 **P0（CI 全红源）** | [#6014](https://github.com/nearai/ironclaw/issues/6014) | CI 脆弱性：非密封性 flaky 测试导致约 70% main push 失败（139/200） | ✅ PR [#6022](https://github.com/nearai/ironclaw/pull/6022) 静态预检 + PR [#6023](https://github.com/nearai/ironclaw/pull/6023) 测试锁修复 |
| 🟠 **P1（活体 offender）** | [#6016](https://github.com/nearai/ironclaw/issues/6016) | Slack 触发投递 e2e 测试超时（slack_host_beta / trigger_poller_e2e）| ✅ PR [#6020](https://github.com/nearai/ironclaw/pull/6020) Q-10 Slack journeys 确定性化 |
| 🟠 **P1（真实测试隔离缺陷）** | [#6015](https://github.com/nearai/ironclaw/issues/6015) | build_runtime_input_production_* 在 all-features 覆盖腿中 std::env 竞争 | ✅ PR [#6023](https://github.com/nearai/ironclaw/pull/6023) 统一进程环境锁 |
| 🟡 **P2（DB 并发）** | [#6017](https://github.com/nearai/ironclaw/issues/6017) | Postgres CAS delete-vs-recreate 竞争 + libSQL 并发写者 flaky | ❌ 暂无专项 PR |
| 🟢 **P3（已关闭）** | [#5704](https://github.com/nearai/ironclaw/issues/5704) | 聊天时图片预览变透明 | ✅ 已关闭（bug_bash） |
| 🟢 **P3（已关闭）** | [#6010](https://github.com/nearai/ironclaw/issues/6010) | GLM-5.2 推理分钟级卡死 | ✅ 已关闭（ironclaw 自动 issue） |

**评估**：CI 相关 Bug 形成完整 issue→PR 闭环（#6014/#6015/#6016 → #6022/#6023/#6020），是当日工程质量最高的部分；DB 并发类问题（#6017）尚未有配套 fix PR，建议关注。

---

## 6. 功能请求与路线图信号

| 请求 | 编号 | 路线图位置判断 |
|------|------|----------------|
| CLI / TUI 管理 Secrets | [#2601](https://github.com/nearai/ironclaw/issues/2601) | **高优先级** — 与 PR #5934（admin secrets scope 对齐）+ #6019（doctor 凭据就绪检查）形成同一脉络，CLI 化密钥管理是明显方向 |
| Per-run Token 使用量 + USD 成本 | [#5976](https://github.com/nearai/ironclaw/pull/5976) | **Phase 1/3** — OpenAI 兼容 Responses API 已落地，承诺后续 2 期扩展 |
| Per-user MCP 注册存储 | [#5970](https://github.com/nearai/ironclaw/pull/5970) | T1/3 — T2 出站强制 + T3 注册表即将跟进，路线图清晰 |
| Doctor 命令的依赖就绪检查 | [#6019](https://github.com/nearai/ironclaw/pull/6019) | 与 #2601 互为补充，关乎新用户体验 |
| Agent loop 工具化完成提示 | [#6013](https://github.com/nearai/ironclaw/pull/6013) | 交互式编码场景优化，小但针对性 |
| Builtin time 接受 Unix 时间戳 | [#6024](https://github.com/nearai/ironclaw/pull/6024) | 中等改进，无破坏性 |

**信号**：Reborn 平台正在向「可观测（成本/缓存）+ 工具鲁棒性（编辑守卫/补全提示）+ 入门友好（doctor/CLI secrets）」三轴同步推进。

---

## 7. 用户反馈摘要

- **痛点 1：入门身份验证迷雾**（Issue #2601）
  > "I've been having some struggles with authentication for some services while getting started with ironclaw, and it's not well documented how users are intended to manage their secrets."

  反映**新用户上手文档与工具链缺口**，与 #6019 doctor 改进方向一致。

- **痛点 2：模型可用性问题**（Issue #6009、#6010，已关闭）
  - GLM-5.2 缺席 opencode 默认模型列表 → 需 fork 增加支持，门槛高
  - GLM-5.2 推理分钟级卡死 → "unusable for real-time interactive development"
  - 均为铁claw 自动创建 issue，已快速关闭，**实际修复状态未在摘要中体现，需追踪**。

- **痛点 3：CI 透明度不足**（Issue #6011）
  > 团队内部建立「每日失败分类」机制，说明用户/开发者对**红 CI 看不见根因**的疲惫。

- **满意信号**：无显式正向反馈 Issue，但 PR 引用大量基准对比与 trace 数据，反映**工程文化向数据驱动转型**。

---

## 8. 待处理积压

维护者需重点关注的长期未响应条目：

| 编号 | 类型 | 积压时长 | 风险 |
|------|------|---------|------|
| **[#2601](https://github.com/nearai/ironclaw/issues/2601)** | Feature Request | **~3 个月**（创建 2026-04-18）| 持续累积新用户摩擦，建议与 #6019 doctor 改进打包释出 |
| **[#6017](https://github.com/nearai/ironclaw/issues/6017)** | Bug（DB 并发）| 1 天 | 暂无配套 fix PR，可能在下一次 CI 红色潮中放大 |
| **[#5976](https://github.com/nearai/ironclaw/pull/5976)** | PR（成本计量 Phase 1）| 2 天，XL 规模 | 是用户与计费可观测性关键，需加速评审 |
| **[#5959](https://github.com/nearai/ironclaw/pull/5959)** | PR（Reborn 循环弹性，含 DB 迁移）| 3 天，XL 规模 + DB MIGRATION | 4 个 stack 子 PR 都依赖其基线，**任一阻塞即拖慢整组** |
| **[#5970](https://github.com/nearai/ironclaw/pull/5970)** | PR（Per-user MCP 注册 T1）| 3 天，XL 规模 | 替代了 #5916（14 文件冲突），有历史包袱 |

**建议**：
1. 优先评审 #5959 主线 PR 释放其 4 个子 PR（#5975/#5977/#5978/#5979）的合并通道。
2. 给 #2601 一个明确状态更新（acknowledged / planned / blocked），避免社区感知到"石沉大海"。
3. 监控 #6022 静态预检合并后对 #6014（70% 红色率）的实际改善幅度。

---

*日报由 AI 智能体分析生成，基于近 24 小时公开 GitHub 事件。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-07-13**
**项目地址：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 过去 24 小时整体活跃度处于**较低水平**。仅产生 1 条 Issue 更新（活跃讨论中）和 2 条 PR 更新（其中 1 条已关闭），无新版本发布。值得关注的是，Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 揭示了一个潜在的**数据覆盖 Bug**，涉及多 Agent 场景下 USER.md 被 main agent 内容覆盖的问题，社区反馈较为集中。与此同时，PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 的关闭标志着 Agent ID 生成机制优化方向的一次探索结束。整体来看，项目处于**日常维护节奏**，无重大功能落地。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。如需查看最新发布历史，请访问 [Releases 页面](https://github.com/netease-youdao/LobsterAI/releases)。

---

## 3. 项目进展

### ✅ 已关闭 PR：[#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) — 使用短 UUID 替代名称生成 Agent ID

- **作者：** gongzhi-netease
- **状态：** CLOSED（于 2026-07-12 更新）
- **提交时间：** 2026-05-28
- **类别：** area: main（stale，因长期无活动被自动标记）

**关键内容回顾：**

该 PR 旨在解决一个**"数据复活"问题**——当前 Agent ID 基于名称生成（如 `"My Assistant"` → `"my-assistant"`），删除 Agent 后本地文件未清理，重新创建同名 Agent 时会复用相同 ID，导致旧数据意外复活。

PR 作者还梳理了删除 Agent 时未清理的遗留数据：
| 数据 | 当前状态 | 影响 |
|------|---------|------|
| `cowork_sessions`（关联会话） | ❌ 未清理 | 孤儿数据 |
| `workspace`（本地工作目录） | ❌ 未清理 | 占用磁盘空间 |
| 其余用户级数据 | ❌ 未清理 | 残留隐私风险 |

**进展评估：** 该 PR 虽已关闭，但其所揭示的问题（Agent 删除时的级联清理、ID 命名空间设计）仍是真实存在的设计缺陷。维护者后续可能需要重新设计整套删除/重建流程。该 PR 的关闭可视作一次方向性探索的阶段性收尾，但**问题本身并未解决**。

---

## 4. 社区热点

### 🔥 讨论最活跃：[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)

- **标题：** 重启后，多个 agent 下的 USER.md 被覆盖替换的 BUG？
- **作者：** yepcn
- **评论数：** 4 条
- **点赞数：** 0
- **创建时间：** 2026-07-07（最近更新 2026-07-12）

**核心诉求分析：**

用户在软件内建立多个 Agent，发现只要修改其中一个 Agent 的"关于你"内容或 USER.md，**其他 Agent 的 USER.md 也会被同步修改**。经过用户自行排查，确认在软件关闭状态下手动修改某个 `workspace-*` 下的 USER.md，重新启动后**所有 Agent 的 USER.md 都会被 main agent 的 USER.md 内容覆盖**。

**背后反映的用户需求：**
- 多 Agent 场景下**配置隔离**的硬性要求
- 用户对 USER.md 作为"长期记忆"机制的依赖
- 对数据**持久化与不可逆覆盖**的担忧

该 Issue 处于**活跃讨论状态但尚无维护者响应**，需要重点关注。

---

## 5. Bug 与稳定性

### 🐛 Bug #1：[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — USER.md 被覆盖

| 维度 | 详情 |
|------|------|
| **严重程度** | 🔴 **高**（数据丢失风险，影响核心功能） |
| **影响范围** | 所有使用多个 Agent 的用户 |
| **可复现性** | ✅ 用户已确认可在关闭软件后手动复现 |
| **数据损失** | 不可逆——重启即覆盖 |
| **是否有 Fix PR** | ❌ **暂无** |

**分析：**

此 Bug 与 PR [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 所揭示的"Agent ID 与工作目录绑定"问题**可能存在关联**——多 Agent 间 USER.md 互相覆盖暗示着 workspace 路径识别存在缺陷，或所有 Agent 实际上指向了同一份配置源。

**建议优先级：** P0。维护者应尽快介入排查根因。

---

## 6. 功能请求与路线图信号

### 💡 UI 体验改进：[PR #1325](https://github.com/netease-youdao/LobsterAI/pull/1325)

- **标题：** [stale] feat(ui): 为新建对话图标按钮添加悬停提示
- **作者：** 0xFLX
- **状态：** OPEN（stale，长期未更新，最近活动 2026-07-12）
- **提交时间：** 2026-04-02（已搁置约 3 个月）

**改进范围：**
| 文件 | 场景 |
|------|------|
| `CoworkView.tsx` | 主对话视图（侧边栏折叠时） |
| `CoworkSessionDetail.tsx` | 会话详情页（侧边栏折叠时） |
| `AgentsView.tsx` | Agent 管理页 |
| `McpView.tsx` | MCP 视图 |

**纳入下一版本的可能性评估：** ⭐⭐（中等偏低）

该改动属于典型的**低成本 UI 润色**（仅添加 `title` 属性），技术风险极低。但因 PR 已标记为 stale 且无评论互动，**信号偏弱**。如果 Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 等核心 Bug 占用维护者精力，此类改进短期内难以合并。

---

## 7. 用户反馈摘要

### 🎯 真实用户痛点（提炼自 Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）

**痛点一：多 Agent 个性化需求无法落地**

> *"这样就没法对不同 agent 建立不同的需求。"*

**用户场景：** 用户期望为不同 Agent 设定差异化的"人设"和 USER.md（如专业领域助手 vs 日常助手），但当前实现**强制所有 Agent 共享 main agent 的配置**。

**痛点二：用户对工具的信任受损**

> *"怀疑是最近更新时出现的一个 bug"*

**用户情绪：** 用户已**自主完成深度排查**（在关闭软件情况下手动修改文件并验证），并自行定位到 root cause 的大致方向。这种"用户比维护者更早发现回归问题"的现象，对项目信任度是负面信号。

**痛点三：数据不可逆损失**

USER.md 被覆盖意味着用户的个性化配置（包括历史对话上下文、用户画像）可能在重启时**静默丢失**，无任何告警或回收站机制。

**满意度评估：** 当前偏低。社区正等待维护者对该 Bug 的官方回应。

---

## 8. 待处理积压

### ⚠️ 长期未响应项提醒

| 类型 | 编号 | 标题 | 状态 | 提交日期 | 搁置时长 |
|------|------|------|------|----------|----------|
| PR | [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325) | 为新建对话图标按钮添加悬停提示 | OPEN (stale) | 2026-04-02 | ~3 个月 |
| PR | [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) | 使用短 UUID 替代名称生成 Agent ID | CLOSED | 2026-05-28 | ~1.5 个月（讨论后关闭） |
| Issue | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | USER.md 被覆盖的 BUG | OPEN | 2026-07-07 | 6 天无官方响应 |

**维护者建议：**

1. **紧急：** 对 Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 给出官方确认与排查时间线
2. **重要：** 重新评估 Agent ID 命名空间方案（参见 [#2065](https://github.com/netease-youdao/LobsterAI/pull/2065) 的设计思路），这是 USER.md 覆盖 Bug 的潜在根因之一
3. **可选：** 关闭或合并 PR [#1325](https://github.com/netease-youdao/LobsterAI/pull/1325)，释放 review 通道

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h Issue 活跃度 | 1 | 🟡 偏低 |
| 24h PR 活跃度 | 2 | 🟡 偏低 |
| 24h 新版本 | 0 | 🟡 正常（无重大更新无需发版） |
| 高严重 Bug 数 | 1 | 🔴 需关注 |
| 长期 stale 项 | 2 | 🟡 待清理 |
| 用户参与度 | 中等（4 条评论） | 🟢 用户主动排查 |

**综合评价：** 项目整体处于**低速巡航**状态，但存在一个**高优先级数据完整性 Bug** 需要立即响应。建议维护者在本周内至少对 Issue [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 给出技术确认，以维护社区信任。

---

*报告生成时间：2026-07-13 | 数据来源：GitHub REST API*

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

# CoPaw 项目日报 · 2026-07-13

> 数据来源：github.com/agentscope-ai/CoPaw（数据中 Issue/PR 链接指向 `QwenPaw` 子仓库，应为同一项目的关联仓库或代码迁移过程中的别名）

---

## 1. 今日速览

CoPaw 今日处于 **高活跃、高波动** 的状态：过去 24 小时 Issues 净增 18 条、PR 净增 8 条，没有任何版本发布。从结构上看，这是一次 **v2.0.0 集中爆发期** 的延续——升级引发的兼容性问题（1.x → 2.0 会话迁移、tool_call/tool_result 配对、auto-memory 失效）密集涌入 issue 区，同时社区已自发提交多个修复 PR 进行自救。整体而言，项目功能迭代节奏稳定，但 **2.0.0 的稳定性与回归测试** 已成为当务之急。

---

## 2. 版本发布

**无新版本发布。**

最近一个公开版本仍为 v2.0.0。从今日 issue 数量和相似问题集中度判断，维护者可能正在准备一个 **2.0.x 补丁版**（重点修复 tool_call 配对、auto-memory、channel 消息丢失等回归问题），但尚未放出 Release。

---

## 3. 项目进展

今日有 3 条 PR 被合并/关闭，整体推进有限，但方向清晰：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#5991](https://github.com/agentscope-ai/QwenPaw/pull/5991) | fix(compat): handle legacy 'file' block type in _coerce_block | OPEN（活跃） | 修复 1.x → 2.0 会话中 `type="file"` 的 tool_result 兼容性问题，关闭了两个重复 PR（#5988、#5990） |
| [#5987](https://github.com/agentscope-ai/QwenPaw/pull/5987) | fix(scroll): sanitize unpaired tool messages after context compression | CLOSED | 上下文压缩后孤立 tool 消息的处理，已被 #5989 取代并整合 |
| [#5988](https://github.com/agentscope-ai/QwenPaw/pull/5988) / [#5990](https://github.com/agentscope-ai/QwenPaw/pull/5990) | 重复的 legacy file block fix | CLOSED | 重复提交，已统一合并到 #5991 |

**关键观察：** 项目维护者对 tool_call/tool_result 配对问题的处理非常迅速（[#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986) 报告后 24 小时内即推出多层防御 PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)）。这是积极的信号。

---

## 4. 社区热点

**评论数最多的 3 条 Issue：**

1. **[#5996 (7 条评论)](https://github.com/agentscope-ai/QwenPaw/issues/5996)** —— v2.0.0 对话时产生 `MODEL_EXECUTION_ERROR`，根因是 `_hint.py` 的 `make_offload_hint_msg()` 在 assistant 消息后插入 `role=tool` 但缺少 `tool_calls`，被 OpenAI API 拒绝。这是今日最热的技术讨论。

2. **[#5952 (4 条评论)](https://github.com/agentscope-ai/QwenPaw/issues/5952)** —— auto-memory 后台任务失败 `No module named 'agentscope.tool._builtin._scripts'`，影响所有 Agent 的记忆总结。

3. **[#5986 (4 条评论)](https://github.com/agentscope-ai/QwenPaw/issues/5986)** —— 上下文压缩驱逐旧消息时不保证 `tool_calls` 配对，引发 400 错误。已对应修复 PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)。

**背后诉求：** 用户在升级 v2.0.0 后遇到的不是边缘 case，而是核心功能链（对话、工具调用、记忆、上下文压缩）的系统性回归，反映出 2.0.0 兼容性测试覆盖不足。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0 - 核心对话链路崩溃
- **[#5996](https://github.com/agentscope-ai/QwenPaw/issues/5996)**：v2.0.0 对话时产生 MODEL_EXECUTION_ERROR（OpenAI 400）—— *无 fix PR*
- **[#6002](https://github.com/agentscope-ai/QwenPaw/issues/6002)**：与 #5996 同根因（tool 消息无前置 tool_calls）—— *无 fix PR*
- **[#5985](https://github.com/agentscope-ai/QwenPaw/issues/5985)**：chat_with_agent + context 压缩 + DeepSeek 触发孤儿 tool 消息 —— *无 fix PR*
- **[#5986](https://github.com/agentscope-ai/QwenPaw/issues/5986)**：上下文压缩破坏 tool_call 配对 —— **已有 fix PR [#5989](https://github.com/agentscope-ai/QwenPaw/pull/5989)** ✅

### 🟠 P1 - 数据/会话丢失
- **[#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952)**：auto-memory 完全失效 —— **已有 fix PR [#5997](https://github.com/agentscope-ai/QwenPaw/pull/5997)** ✅
- **[#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964)**：升级到 2.0.0 后 chats/conversation_history 映射丢失 —— *无 fix PR*

### 🟡 P2 - 功能性回归
- **[#6001](https://github.com/agentscope-ai/QwenPaw/issues/6001)** / **[#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000)**：技能池无法加载任何新添加的技能 —— *无 fix PR*
- **[#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003)**：WebUI 偶尔不显示飞书消息但仍执行 —— *无 fix PR*
- **[#5998 (已关闭)](https://github.com/agentscope-ai/QwenPaw/issues/5998)**：Agent 按旧方案执行（记忆上下文不一致）—— 已通过 close-and-review-later 处理
- **[#5995 (已关闭)](https://github.com/agentscope-ai/QwenPaw/issues/5995)**：session 忙时消息静默丢弃（无队列、无错误）—— 已 deferred

### 🟢 P3 - UX/小问题
- **[#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)**：governance 关闭后飞书频道仍弹工具审批
- **[#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982)**：v2.0.0 后 shell 执行每次都需确认
- **[#5983](https://github.com/agentscope-ai/QwenPaw/issues/5983)**：`qwenpaw doctor` 错误探测 `/api/agent/health`（404，应为 `/api/version` 同级）
- **[#5981](https://github.com/agentscope-ai/QwenPaw/issues/5981)**：模型搜索框自动填充用户名
- **[#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979)**：Linux 沙盒映射 root 致 electron 无法运行
- **[#5978](https://github.com/agentscope-ai/QwenPaw/issues/5978)**：`/compact` session_id 含非法字符（`telegram:60xxx`）
- **[#5977](https://github.com/agentscope-ai/QwenPaw/issues/5977)**：工作区热重载后插件 HTTP 路由丢失
- **[#5994](https://github.com/agentscope-ai/QwenPaw/issues/5994)**：AUTO 模式下 governance 频繁触发安全审查

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue / PR | 纳入下版本概率 |
|---|---|---|
| 跨频道会话绑定（Console ↔ Feishu ↔ DingTalk） | [#5999](https://github.com/agentscope-ai/QwenPaw/issues/5999) | 🟡 中（高频实际场景，但跨平台 session 管理实现复杂） |
| v1.1.12 缺失功能（SSH Offline、Profiles） | [#5980](https://github.com/agentscope-ai/QwenPaw/issues/5980) | 🟠 高（用户已明确升级到 2.0.0 后丢失关键工作流功能） |
| **每会话模型覆盖** | [#5992 (PR)](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 🟢 很高（已有 PR，待 review） |
| **纯文本模型的视觉回退（multimodal downgrade）** | [#5726 (PR)](https://github.com/agentscope-ai/QwenPaw/pull/5726) | 🟢 很高（已 ready-for-human-review，等了 10 天） |
| 在 slash 自动补全中暴露系统命令 | [#5869 (PR)](https://github.com/agentscope-ai/QwenPaw/pull/5869) | 🟢 高 |
| Skill 池自动发现 skills/ 目录 | [#6000](https://github.com/agentscope-ai/QwenPaw/issues/6000) | 🟠 高（用户称"完全 broken"，影响所有新技能） |

**信号：** 用户对"无缝跨设备/跨频道接力会话"和"模型路由灵活性"的需求在 v2.0.0 中明显被忽视，建议维护者优先纳入下一里程碑。

---

## 7. 用户反馈摘要

- **😡 主要痛点（升级相关）：**
  - 多位用户反映"升级到 2.0.0 后**核心功能反而不能用**"——对话直接报错、记忆失效、会话列表打开 500、新技能全丢。这是一种 **trust erosion**，会让早期用户犹豫升级。
  - 用户 [@nicholalau](https://github.com/agentscope-ai/QwenPaw/issues/6001) 愤怒地指出："**任何**新添加的技能都加不进去"，意味着这不是个例而是系统性问题。

- **😟 中等痛点：**
  - **飞书/钉钉频道集成**：用户 [@anye3508](https://github.com/agentscope-ai/QwenPaw/issues/6003) 反馈"飞书消息能收到但 WebUI 不显示"，反映出 Console 与 Channel 之间的双向同步不稳定。
  - **沙盒与审批**：每次 shell 执行都要求确认（[#5982](https://github.com/agentscope-ai/QwenPaw/issues/5982)），且 Landlock 不可用的 ARM 设备无法关闭（[#5984](https://github.com/agentscope-ai/QwenPaw/issues/5984)），影响容器化部署。
  - **上下文压缩**：被多次提到是 v2.0.0 灾难源——eviction 逻辑破坏了消息配对。

- **😊 积极信号：**
  - **首次贡献者积极涌入**：今日 PR 中 #5992、#5993、#5869、#5791、#5987 均带有 `first-time-contributor` 标签，社区参与意愿强。
  - 维护者对核心 bug 的响应速度快（#5986 → #5989 < 24h）。

---

## 8. 待处理积压

| 编号 | 标题 | 创建时间 | 状态 |
|---|---|---|---|
| [#5726](https://github.com/agentscope-ai/QwenPaw/pull/5726) | feat(agents): implement vision fallback for text-only models | 2026-07-02（**11 天**） | `ready-for-human-review`，等待维护者 review |
| [#5791](https://github.com/agentscope-ai/QwenPaw/pull/5791) | fix(console): promote formatCompact unit on rounding rollover | 2026-07-05（**8 天**） | `Under Review` |
| [#5869](https://github.com/agentscope-ai/QwenPaw/pull/5869) | feat(console, tui): expose system commands in slash autocomplete | 2026-07-08（**5 天**） | `Under Review` |

**提醒：** #5726 是面向生产可用性的重要能力（让纯文本模型也能处理图片），已标记 ready 11 天仍未被 review。建议维护者重点关注，避免首次贡献者流失。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 21 issues + 11 PRs |
| 响应速度 | ⭐⭐⭐⭐ | 核心 bug 24h 内有 fix PR，但仍有大量 issue 无响应 |
| 版本稳定性 | ⭐⭐ | v2.0.0 集中爆发回归问题，尚未发布补丁 |
| 社区参与 | ⭐⭐⭐⭐⭐ | 多个 first-time-contributor PR |
| 路线图透明度 | ⭐⭐ | 无新版本发布，下一里程碑不明确 |

**总评：🟡 谨慎乐观。** 社区贡献活跃、维护者对核心问题响应积极，但 v2.0.0 稳定性问题已对用户体验造成明显伤害，**强烈建议尽快发布 2.0.1 补丁版本**。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-07-13**
**数据来源：github.com/zeroclaw-labs/zeroclaw**

---

## 一、今日速览

ZeroClaw 项目今日处于**高强度迭代期**，过去 24 小时共 30 个 Issues 与 50 个 PRs 产生更新，活跃度处于近期高位。当前开发工作高度集中在 **v0.8.3 收尾**（gateway / provider / channel / config 四大 tracker 并行推进）、**ZeroCode 控制台硬化**（#9010 新立追踪器）、以及 **SOP 控制面至 5/5**（#8288）的多 PR 协同上。但与此同时，仍有 **5 个 P1 级 Bug 处于开放状态**，其中包括导致 daemon SIGSEGV 的 skill-review panic（#8654）与未合并的上下文预算超限问题（#5808），稳定性短板未消。整体评估：**项目活跃度强、路线图清晰，但 P1 风险面收口偏慢**，建议维护者重点关注高频 crash 类 Bug 的修复 PR 合入。

---

## 二、版本发布

⚠️ **今日无新版本发布。**

当前在追踪中的版本线：
- **v0.8.3**（五大 tracker 协调推进：#8070 / #8071 / #8073 / #8360 / #8362 / #8363）
- **v0.8.4**（维护线，#8357 追踪，目标日期 2026-07-31）

---

## 三、项目进展

### 已关闭 PR（含合并）

| 编号 | 标题 | 链接 |
|------|------|------|
| #8940 | fix(zerocode): apply fill_style() to queue sidebar and session picker overlays（重复关闭） | [PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8940) |
| #8653 | [Feature]: Auto-resume the most recent Code session on pane entry（Issue 已关闭） | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8653) |

### 重要的待合并 PR（推进的关键能力）

1. **#8916** [`fix(channels): emit agent lifecycle events`] — 修复 channel/daemon turn 未触发 `agent_start`/`agent_end` 事件，导致 `/api/events`、Prometheus、OTel、log observers 无法监听的关键可观测性缺口。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8916))

2. **#8866** [`fix(daemon): share MCP registry across heartbeat ticks`] — 解决 daemon 心跳 worker 每次 tick 重建 `McpRegistry` 带来的 stdio MCP server 抖动，闭合 #5903。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8866))

3. **#8937** [`fix(agent): stream-hash tool args in loop_detector`] — 用流式哈希替代每轮深克隆，规避循环检测器在大 tool args 下引发的内存压力（关联 #8936）。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8937))

4. **#8935** [`fix(agent): preserve Gemini thought signatures in tool-call history`] — 修复 Gemini 多轮工具调用在丢失 `extra_content` 后拒绝 follow-up 请求的兼容性问题。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8935))

5. **#8949** [`feat(gateway): webhook GET + challenge-echo`] — XL 级 PR，扩展插件 webhook ingress 支持 GET 与挑战握手（Slack / WhatsApp / Lark / WeCom），需自下而上合并栈。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/8949))

6. **#9026** [`feat(gateway/acp): select session agent via ?agent= query param`] — 修复 spec-vanilla ACP 客户端无法在多 agent 配置中选 agent 的协议层缺陷。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9026))

7. **#9027** [`fix(sop): AMQP dispatch idempotency on the message-id`] — SOP 里程碑（#8288）的关键收尾 PR，防止一条 AMQP 投递命中多 SOP 时重复执行。([PR](https://github.com/zeroclaw-labs/zeroclaw/pull/9027))

**进展评估**：v0.8.3 的 provider、channel、daemon、ZeroCode 四个方向均有实质 PR 推进，但合入速率偏低（50 个 PR 中仅 3 个已合并/关闭），节奏瓶颈疑在评审环节。

---

## 四、社区热点

按评论数排序的活跃 Issue：

| 排名 | 编号 | 标题 | 评论数 | 链接 |
|------|------|------|--------|------|
| 1 | #5808 | Default 32k context budget is exceeded by system prompt + tool definitions | 8 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) |
| 2 | #6055 | Slack: hydrate thread context from conversations.replies on first mention | 6 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) |
| 3 | #6641 | Turn-level OTel trace correlation | 5 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) |
| 4 | #8654 | skill-review fork panics → daemon SIGSEGV | 4 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) |
| 5 | #8445 | Telegram channel multi-message mode | 3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8445) |
| 5 | #7762 | Cron documentation missing / per-cron model selection | 3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/7762) |
| 5 | #6074 | audit: track 153 commits lost in bulk revert c3ff635 | 3 | [Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6074) |

**诉求分析**：
- **#5808**（8 评）：上下文预算与系统提示冲突是根因级问题，影响每个用户的首个 turn，社区讨论集中于默认值的合理性与裁剪策略。
- **#6055**（6 评）：用户在 Slack 线程中需重复 @ 提及机器人的体验痛点，#5992 之后明确要求回填 `conversations.replies` 历史。
- **#6641**（5 评）：OTel 链路关联是 Enterprise 可观测性标配，承接 #6009 / #6190，已有 reviewer 主动认领方向。
- **#6074**（3 评）：2026-03-28 一次 bulk revert 丢失 153 commits 的历史债务，需要审计与回填机制。
- **#7762**（3 评）：Cron 文档缺失 + 无法指定模型，社区希望低成本任务路由到便宜模型（如 gemma）。

---

## 五、Bug 与稳定性

按严重程度排序（Severity 标注以来源 Issue 为准）：

### 🔴 S1（workflow blocked）

| 编号 | 组件 | 描述 | 是否有 Fix PR |
|------|------|------|---------------|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | runtime/daemon | 默认 32k 上下文预算被系统提示 + 工具定义超额 3.3×，触发永久性 preemptive trim | ❌ 暂无 PR |
| [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | runtime/skills | `maybe_run_skill_review` 切片越界 panic → 进程 SIGSEGV（exit 139） | ❌ 暂无 PR |
| [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | web dashboard | `shared/sops` 下的 SOP.md / SOP.toml 在 Web Chat 中不可见 | ❌ 暂无 PR |
| [#9019](https://github.com/zeroclaw-labs/zeroclaw/issues/9019) | provider/openai | Responses provider 硬编码 `vision=false`，图像输入被前置拒绝 | ❌ 暂无 PR |
| [#9016](https://github.com/zeroclaw-labs/zeroclaw/issues/9016) | provider/openai | `gpt-5.6-sol` 携带 function tools + 非 none reasoning effort 时 Chat Completions 返回错误 | ✅ 候选 PR：#8931（tool-call args 净化，可部分缓解）|

### 🟠 S2（degraded behavior）

| 编号 | 组件 | 描述 | 备注 |
|------|------|------|------|
| [#9017](https://github.com/zeroclaw-labs/zeroclaw/issues/9017) | config/onboarding | `--config-dir` 在 CLI locale 检测阶段被忽略 | 低优先级 |
| [#8999](https://github.com/zeroclaw-labs/zeroclaw/issues/8999) | zerocode/tui | 小模型（Ollama llama3.2）将流式 user turn 误判为日志/协议数据 | follow-up |

### 相关 Fix PR（已开放，尚未合入）

- [#8931](https://github.com/zeroclaw-labs/zeroclaw/pull/8931) — provider outbound tool-call 参数净化（防止 400）— **p1**
- [#8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937) — loop_detector 流式哈希
- [#8947](https://github.com/zeroclaw-labs/zeroclaw/pull/8947) — Anthropic `timeout_secs` 配置生效（不再硬编码 120s）
- [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) — Bedrock Nova 2 排除出 prompt caching allowlist（避免 400 extraneous key）
- [#8353](https://github.com/zeroclaw-labs/zeroclaw/pull/8353) — runtime 错误消息上下文改进（替换 unwrap，risk:low）
- [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) — daemon 心跳共享 MCP registry

**风险评估**：5 个 S1 中仅 1 个有明确候选 Fix PR；**#5808 与 #8654 建议维护者优先介入**，前者影响所有用户冷启动，后者可直接击溃 daemon。

---

## 六、功能请求与路线图信号

### 较可能被纳入 v0.8.3 的功能（已有活跃 PR）

| 功能 | 关联 PR | 落点 |
|------|---------|------|
| Memory 内容写入/读取边界扫描 | [#8984](https://github.com/zeroclaw-labs/zeroclaw/pull/8984) | 安全加固 |
| Engine 记忆注入的可控 rerank 阶段 | [#8895](https://github.com/zeroclaw-labs/zeroclaw/pull/8895) | 召回质量 |
| Memory gated 审计 trail + observer 扇出 | [#8893](https://github.com/zeroclaw-labs/zeroclaw/pull/8893) | 可观测性 |
| SOP.toml 语法参考 + 示例补全 | [#8942](https://github.com/zeroclaw-labs/zeroclaw/pull/8942) | 文档 |
| ZeroCode Code pane / rails / prompt drafts 整合 | [#8655](https://github.com/zeroclaw-labs/zeroclaw/pull/8655) | XL 重构 |
| AMQP dispatch 幂等性 | [#9027](https://github.com/zeroclaw-labs/zeroclaw/pull/9027) | SOP 里程碑 |
| Web 侧栏水平滚动条消除 | [#8939](https://github.com/zeroclaw-labs/zeroclaw/pull/8939) | UX |

### 较新提出的功能（候选评估期）

- **#9022** Slack Events API（HTTP Request URL）支持 scale-to-zero 部署 — 与 #8949 webhook 栈可协同。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9022))
- **#9020** ZeroCode 会话 rewind / fork-from-message 工作流 — 与 #9010 硬化追踪器高度对齐。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/9020))
- **#8445** Telegram 多消息模式（一 turn 一消息） — 体验诉求明确。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8445))
- **#8442** Matrix 单消息流式草稿 — 已有 in-progress 标记。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8442))
- **#8409** cron shell jobs 支持原始 stdout 输出 — 与 #7762 cron 文档修复同主题。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8409))
- **#8860** Web Gateway 每个 agent 的 in-flight prompt 计数器 — 与 #8070 gateway tracker 同源。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/8860))
- **#6055** Slack thread 历史回填 — 6 评，社区呼声高。([Issue](https://github.com/zeroclaw-labs/zeroclaw/issues/6055))

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*