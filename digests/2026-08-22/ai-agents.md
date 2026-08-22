# OpenClaw 生态日报 2026-08-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-22 00:52 UTC

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

**报告日期**: 2026-08-22
**项目**: [openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 1. 今日速览

OpenClaw 今日呈现**高活跃度、高积压**的双重特征：过去 24 小时共产生 500 条 Issue 更新（其中 486 条仍处于 OPEN 状态，仅 14 条关闭）和 500 条 PR 更新（378 条待合并，122 条已合并/关闭）。无新版本发布，但 `2026.8.1-beta.3` 发布候选的评审 PR ([#127722](https://github.com/openclaw/openclaw/pull/127722)) 已于今日开启，暗示 beta 周期进入收尾阶段。今日最突出的议题是 **P0 级稳定性问题**——网关内存泄漏、SQLite 损坏、totalTokens 计数器失控——三条均直接影响生产可用性，且其中两条已存在修复尝试但尚未合入主线。整体而言，项目**关注度持续走高，但"无新 fix PR"标签的存量问题占比过大**，维护者响应能力面临压力。

---

## 2. 版本发布

**今日无新版本发布。**

值得关注的下游节点：
- **`2026.8.1-beta.3` 候选评审** ([PR #127722](https://github.com/openclaw/openclaw/pull/127722)) 已于 2026-08-22 创建，作者 vincentkoc。该 PR 明确要求**禁止 rebase 或更新**，作为不可变的最终评审锚点。
- 配套的 **Codex 0.149 升级 + app-server 集成加固** ([PR #127724](https://github.com/openclaw/openclaw/pull/127724)) 已提交。
- **`2026.8.1-beta.2` 仍在做发布验证** ([Issue #125626](https://github.com/openclaw/openclaw/issues/125626)，18 条评论)，验证窗口尚未关闭。

---

## 3. 项目进展

今日**已关闭/合并的重要 PR**（按影响力筛选）：

| PR | 标题 | 类别 | 链接 |
|---|---|---|---|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | 安全/路由 | XL，多渠道 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 安全/插件安装 | XL |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | Auth | XL |
| [#127714](https://github.com/openclaw/openclaw/pull/127714) | fix(codex): restore safe async replies and managed approvals | Codex 修复 | L |
| [#127708](https://github.com/openclaw/openclaw/pull/127708) | chore: trim duplicate core test assertions | 测试清理 | XS |
| [#127648](https://github.com/openclaw/openclaw/pull/127648) | fix(agents): stop recommending unavailable session tools | Agent 行为 | M |

**关键推进方向**：
- **多渠道对话绑定边界** ([#126424](https://github.com/openclaw/openclaw/pull/126424))：修复多 Agent 场景下对话工具可能越过 Agent 授权边界的问题，跨 Discord/Telegram/Slack/Feishu/Matrix 等 10+ 渠道，安全意义重大。
- **安全安装策略确认** ([#116489](https://github.com/openclaw/openclaw/pull/116489))：为可疑插件/技能安装引入强制确认机制，强化供应链安全。
- **Claude CLI OAuth 持久化修复** ([#125471](https://github.com/openclaw/openclaw/pull/125471))：解决 Gateway 重启后 OAuth 刷新所有权丢失问题，回归类修复。
- **Codex 异步回复与受管审批** ([#127714](https://github.com/openclaw/openclaw/pull/127714))：与 0.149 升级 ([#127724](https://github.com/openclaw/openclaw/pull/127724)) 配合，重塑 Codex 集成完整性。

**整体推进度**：今日合入的核心修复多集中在**安全、认证、Codex 集成**三个面向，但与积压的 P0/P1 问题数量相比，**净修复速率仍偏低**。

---

## 4. 社区热点

**评论数最多的 Issue Top 5**（反映社区关注焦点）：

1. [#91588](https://github.com/openclaw/openclaw/issues/91588) — **23 条评论** 🔥
   - *Gateway 内存泄漏，RSS 从 350MB 涨至 15.5GB，触发 OOM 与 launchd 重启循环*
   - 这是被引述最频繁的稳定性问题，跨日仍持续更新，影响所有生产用户。

2. [#91009](https://github.com/openclaw/openclaw/issues/91009) — **22 条评论** 🔥
   - *Codex PreToolUse native hook relay 生成 CPU 绑死的 openclaw-hooks 进程，阻塞网关 RPC*
   - 与 #91588 高度相关，同样被标记 `clawsweeper:no-new-fix-pr`。

3. [#87744](https://github.com/openclaw/openclaw/issues/87744) — **18 条评论** 🔥
   - *2026.5.27 上 Codex 驱动的 Telegram 会话频繁超时，无法到达 turn/completed*
   - 涉及"消息丢失 + 崩溃循环"双重影响面，是 Telegram 用户群最关心的稳定性问题。

4. [#125626](https://github.com/openclaw/openclaw/issues/125626) — **18 条评论**
   - *Release validation: v2026.8.1-beta.2*
   - 由 maintainer Patrick-Erichsen 主导，结构化的发布验证工作表。

5. [#51429](https://github.com/openclaw/openclaw/issues/51429) — **13 条评论**
   - *中文用户报告：代码里被硬编码了 `/Users/wangtao` 工作路径并随版本发布*
   - 反映**代码审查失误**导致的安全/隐私事故，社区反应强烈。

**诉求分析**：
- 稳定性诉求占绝对主导（内存泄漏、崩溃循环、超时、SQLite 损坏）。
- 中文用户已开始报告具体问题（[#51429](https://github.com/openclaw/openclaw/issues/51429)、[#50490](https://github.com/openclaw/openclaw/issues/50490)），国际化使用场景扩展。
- 多条 issue 处于 `clawsweeper-recovery-stuck` 状态，**社区对修复进度感知疲态明显**。

---

## 5. Bug 与稳定性

### P0 级（影响生产可用性，紧急）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏（350MB → 15.5GB / 数天），触发 OOM 重启循环 | ❌ `no-new-fix-pr` |
| [#126821](https://github.com/openclaw/openclaw/issues/126821) | SQLite 损坏在干净重建后 15-24h 内复发（2026.8.1-beta.2 / WSL2），含"瘫痪网关"模式 | ❌ |
| [#125333](https://github.com/openclaw/openclaw/issues/125333) | totalTokens 计数膨胀：#123065 修复仅覆盖 `api === "cli"`，memory-flush 转录路径未受保护 | ❌ |

### P1 级（功能受损，有 workaround）

| Issue | 描述 | 状态 |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex hook relay 进程 CPU 100%+ 阻塞网关 RPC | `no-new-fix-pr` |
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex + Telegram 频繁超时（2026.5.27 回归） | `recovery-stuck` |
| [#53408](https://github.com/openclaw/openclaw/issues/53408) | 长对话后 write/exec 工具参数静默丢失 | `needs-live-repro` |
| [#45224](https://github.com/openclaw/openclaw/issues/45224) | Playwright 断言错误未捕获，整 Gateway 崩溃 | `not-repro-on-main` |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，僵尸进程累积 | `no-new-fix-pr` |
| [#83598](https://github.com/openclaw/openclaw/issues/83598) | anthropic:claude-cli OAuth 刷新在 2026.5.12 仍 dead-end | `needs-maintainer-review` |
| [#108215](https://github.com/openclaw/openclaw/issues/108215) | 大工具输出后 context usage 从 57% 跌至 13% 无 compaction | `source-repro` |
| [#126451](https://github.com/openclaw/openclaw/issues/126451) | 2026.7.1-2 doctor 迁移失败-关闭网关崩溃循环（Codex sidecar） | `source-repro` |
| [#127176](https://github.com/openclaw/openclaw/issues/127176) | CLI/Node Host 在 Windows 复用相同设备身份但元数据不一致 | `source-repro` |
| [#127169](https://github.com/openclaw/openclaw/pull/127169) | Claude CLI 流式 JSONL 失败被泛化为 "exceeded limit" | ✅ PR 已开 |
| [#121871](https://github.com/openclaw/openclaw/pull/121871) | 含 reasoning 的频道回复在 Control UI 渲染成两个气泡 | ✅ PR 已开 |

### P2 级（功能性回归）

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | Discord mention-gating preflight 过宽 | `needs-live-repro` |
| [#120735](https://github.com/openclaw/openclaw/issues/120735) | Telegram 入站 sticker 仅为裸 file ref，未落盘、无描述 | ✅ PR linked |
| [#126246](https://github.com/openclaw/openclaw/issues/126246) | Telegram 持久化出站消息卡在 `send_attempt_started` | `needs-product-decision` |
| [#53008](https://github.com/openclaw/openclaw/issues/53008) | memory compaction 阻塞主通道 10+ 分钟 | `source-repro` |
| [#97826](https://github.com/openclaw/openclaw/issues/97826) | sendVideo 对大视频丢失 width/height，宽高比失真 | ✅ PR linked |
| [#126631](https://github.com/openclaw/openclaw/issues/126631) | 沙箱技能 bind-mount 创建 root-owned `.openclaw`，uid 1000 被锁 | ✅ PR linked |

**稳定性健康度评估**：⚠️ **承压**
- 3 条 P0 中**0 条**有可合入的 fix PR。
- "recovery-stuck" 标签出现 5 次以上，意味着社区对修复节奏的失望。
- P1 中至少 4 条已存在超过 60 天。

---

## 6. 功能请求与路线图信号

**高潜力功能请求**（评论活跃 + 已有相关 PR 推进）：

| 功能 | Issue | 配套 PR 状态 | 纳入下一版本概率 |
|---|---|---|---|
| Slack Modal 支持（原生结构化输入） | [#88154](https://github.com/openclaw/openclaw/issues/88154) | 等待 maintainer 复审 | 中 |
| Skill Priority Configuration（多 Skill 智能选择） | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 等待产品决策 | 中 |
| 长任务持久化状态面板（Discord 优先） | [#52640](https://github.com/openclaw/openclaw/issues/52640) | 等待产品决策 | 中 |
| MathJax/LaTeX 支持 | [#42840](https://github.com/openclaw/openclaw/issues/42840) | 等待产品决策 | 中 |
| 会话标签/昵称 | [#55249](https://github.com/openclaw/openclaw/issues/55249) | 等待产品决策 | 中 |
| 内置速率感知限流 | [#45771](https://github.com/openclaw/openclaw/issues/45771) | 等待产品决策 | 中 |
| 主题定制系统 | [#28300](https://github.com/openclaw/openclaw/issues/28300) | 等待产品决策 | 低-中 |
| **Agent-scoped usage budgets**（核心预算守门） | — | ✅ [PR #104060](https://github.com/openclaw/openclaw/pull/104060) 已开 | **高** |
| **GitOps 外部托管配置**（K8s 操作员） | — | ✅ [PR #103708](https://github.com/openclaw/openclaw/pull/103708) 已开 | **高** |
| **Agent 间显式 ACP 线程消息传递**（避免路由污染） | [#50798](https://github.com/openclaw/openclaw/issues/50798) | 等待产品决策 | 中 |
| **会话级只读诊断命令** | — | ✅ [PR #96113](https://github.com/openclaw/openclaw/pull/96113) 已开（XL） | **高** |

**路线图信号**：
- **下一版本 beta.3** 的核心主题显然是 **Codex 0.149 适配 + 内存/数据完整性修复**。
- **2026.8.1 正式版**之后的方向偏向：**会话级可观测性**（diagnose 命令）、**GitOps 友好**、**使用预算**——三者都是面向企业/团队用户的能力扩展。

---

## 7. 用户反馈摘要

**真实用户痛点（按热度提炼）**：

1. **生产环境频繁崩溃**："升级到 2026.5.12 后 OAuth 刷新就 dead-end，整条 agent 流量挂掉"（[#83598](https://github.com/openclaw/openclaw/issues/83598)，生产部署方 ChattanoogaDan）。**痛点核心**：破坏性升级路径不透明，缺乏官方安全升级指引（[#123799](https://github.com/openclaw/openclaw/issues/123799)）。

2. **Codex 集成是当前最大不确定性源**：跨 [#91009](https://github.com/openclaw/openclaw/issues/91009)、[#87744](https://github.com/openclaw/openclaw/issues/87744)、[#126451](https://github.com/openclaw/openclaw/issues/126451)、[#126246](https://github.com/openclaw/openclaw/issues/126246)、[#123799](https://github.com/openclaw/openclaw/issues/123799) 多条 issue，**Codex 相关 bug 占 P0/P1 的相当比例**。用户反映 "managed Claude turn / Codex 对话" 在 Telegram、Discord 等多渠道均不稳定。

3. **数据完整性焦虑**：SQLite 损坏 ([#126821](https://github.com/openclaw/openclaw/issues/126821))、totalTokens 膨胀 ([#125333](https://github.com/openclaw/openclaw/issues/125333))、transcript 路径未受保护——用户担心**会话历史与计费数据**的可靠性。

4. **代码审查失误引发信任问题**：[#51429](https://github.com/openclaw/openclaw/issues/51429) 中用户 wangtao 的工作目录被硬编码进发布版本，暴露了**PR review 流程盲点**。社区反应从惊讶到失望。

5. **容器化部署一致性**：Windows + Docker Desktop 下 `OPENCLAW_SANDBOX=

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析 · 2026-08-22

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现**"高活跃、高积压、强治理压力"**的三重特征：13 个被监测项目中 10 个当日有实质动作，仅 TinyClaw、ZeptoClaw 完全静默。社区关注点已从上半年的"功能扩张"全面切换为**架构护栏、安全边界、稳定性收敛**三件事——尤其体现在 Hermes Agent 的"Proof-Carrying State"治理、ZeroClaw 的 S0 沙箱策略争议、IronClaw 的 T1-T4 CI 加速系列上。同时，**Provider 抽象与多网关聚合**（NanoBot typed usage、NullClaw Eden AI 接入）、**Skills/插件体系**（PicoClaw skills CLI、OpenClaw 安装策略、IronClaw sandbox credentials）成为新一轮架构收敛的两条主轴；中文社区在 LobsterAI、Moltis、OpenClaw 上的诉求显著上升，**国际化 i18n 已从可选变为刚需**。

---

## 2. 各项目活跃度对比

> 注：数据为各项目日报中"过去 24 小时"统计口径；Issue/PR 数据按"更新总数 / 关闭/合并数"双指标呈现。

| 项目 | Issue 更新 | PR 更新 | 合并/关闭 PR | 今日 Release | 健康度评估 | 当前焦点 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (14 关闭) | 500 (122 关闭) | 6 XL | ❌ | ⚠️ 承压 | 2026.8.1-beta.3 收尾、Codex 0.149 |
| **NanoBot (HKUDS)** | 5 (4 关闭) | 37 (23 合并) | 23 | ❌ | 🟢 活跃集中 | Provider 抽象、桌面端、Skill 体系 |
| **Hermes Agent** | 50 (3 关闭) | 50 (2 合并) | 2 | ❌（v0.20.5 在 8-19 发布） | ⭐⭐⭐ | proof-carrying、IM 三平台对齐 |
| **PicoClaw** | 1 新开 | 0 | 4 旧 PR 关闭 | ❌ | 🟡 慢节奏 | 协议兼容、Skill CLI 重构 |
| **NanoClaw** | 1 新开 | 24 (11 合并) | 11 | ❌ | 🟢 高活跃 | Telegram 多实例、CI 矩阵修复 |
| **NullClaw** | 0 | 1 | 0 | ❌ | 🟡 静默 | OpenAI 兼容网关扩容 |
| **IronClaw** | 15 | 36 (16 合并) | 16 | ❌ | 🟢 高强度 | CI T1-T4、沙箱凭证、通知中心 |
| **LobsterAI** | 2 | 13 (12 合并) | 12 | ⚠️ release/2026.8.21 已合 main | 🟢 稳步迭代 | DSH 升级、资料库体验、telemetry |
| **TinyClaw** | 0 | 0 | 0 | ❌ | 🔴 静默 | — |
| **Moltis** | 2 新开 | 8 (1 关闭) | 1 | ❌ | ⭐⭐⭐ | WhatsApp/Obscura/cron、i18n zh-TW |
| **CoPaw (QwenPaw)** | 34 (15 关闭) | 36 (15 合并) | 15 | ❌（当前 v2.1.1-beta.1） | ⭐⭐⭐⭐ | UI 噪声收敛、桌面端、Windows |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | 🔴 静默 | — |
| **ZeroClaw** | 50 (1 关闭) | 50 (2 合并) | 2 | ❌ | 🟡 高活跃低合并 | 沙箱策略、ZeroCode TUI、SOP 引擎 |

**关键观察**：
- **合并率分化**：NanoBot（62%）、LobsterAI（92%）、NanoClaw（46%）、IronClaw（44%）的合并率显著高于 ZeroClaw（4%）、OpenClaw（24%），反映治理节奏差异。
- **Issue/活跃度分化**：OpenClaw 与 ZeroClaw 单日 50+ Issue 更新但合并少，呈"高压吸收"模式；NanoBot、LobsterAI 呈"清积压"模式。
- **3 个项目完全无活动**（TinyClaw、ZeptoClaw、NullClaw 仅有 1 PR），生态内存在显著的两极分化。

---

## 3. OpenClaw 在生态中的定位

### 规模与覆盖面：最大但最承压

OpenClaw 是当日唯一突破 500 Issue/PR 双线活跃度的项目，覆盖 **Discord / Telegram / Slack / Feishu / Matrix / WebChat 等 10+ 渠道**，是生态中渠道矩阵最广的工程。其集成深度也最深——同时维护 Gateway、Control UI、Codex、Claude CLI、ACP、Skills、Memory 等多个子系统。这种广度也直接映射到当前的稳定性代价：3 条 P0（Gateway 内存泄漏、SQLite 损坏、totalTokens 失控）**全部无对应 fix PR**，"recovery-stuck" 标签出现 5 次以上。

### 与同类项目的对比

| 维度 | OpenClaw | Hermes Agent | IronClaw | NanoClaw | ZeroClaw |
|---|---|---|---|---|---|
| **渠道广度** | ⭐⭐⭐⭐⭐（10+） | ⭐⭐⭐（Discord/WhatsApp/Slack 战役中） | ⭐⭐⭐（Telegram + IronHub） | ⭐⭐⭐⭐⭐（Telegram/Mattermost/Dial/WhatsApp/Matrix） | ⭐⭐⭐⭐（WhatsApp/iMessage/Git/Telegram） |
| **架构治理成熟度** | ⭐⭐ | ⭐⭐⭐⭐⭐（proof-carrying） | ⭐⭐⭐⭐⭐（CI canonical、deterministic eval） | ⭐⭐⭐（driver attach 标准化） | ⭐⭐⭐⭐（沙箱/SOP 引擎） |
| **稳定性健康度** | ⚠️ 承压（P0 无 fix） | ⭐⭐⭐（多 Profile 部署为短板） | ⭐⭐⭐⭐（多为 forward-port 修复） | 🟢 高（无 P0） | ⚠️（4 条 S0/S1 无 fix） |
| **生态贡献度** | ⭐⭐⭐⭐⭐（含中文用户反馈 #51429） | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐ |

**结论**：OpenClaw 是"广度优先+渠道饱和"路线的代表，Hermes Agent、IronClaw 则代表"深度收敛+架构治理"路线。OpenClaw 的 Codex 集成（[#127714](https://github.com/openclaw/openclaw/pull/127714)、[#127724](https://github.com/openclaw/openclaw/pull/127724)）成为其差异化锚点，但 P0 积压与代码审查失误（[#51429](https://github.com/openclaw/openclaw/issues/51429)）暴露了规模扩张的边际成本——这正是 Hermes Agent 选择"proof-carrying state + 高合并门槛"反向回避的痛点。

---

## 4. 共同关注的技术方向

以下 8 个方向在当日**至少 3 个项目**同时出现强信号：

### 4.1 渠道平台对齐（Channels Parity）
- **Hermes Agent**：Discord (#79564)、WhatsApp (#79890)、Slack (#79772) 三大独立 campaign
- **OpenClaw**：多 Agent 场景下跨渠道绑定 ([#126424](https://github.com/openclaw/openclaw/pull/126424))
- **NanoClaw**：Telegram 多实例 Bot (#3436-#3438)、Mattermost (#3202)、Dial (#3050)
- **ZeroClaw**：WhatsApp Web 显示名 (#10200)、iMessage 转写 (#10140)、Telegram 线程分散记忆 (#10237)
- **Moltis**：WhatsApp Markdown 出站 ([#1220](https://github.com/moltis-org/moltis/pull/1220)) + 文件持久化 (#1228)

### 4.2 Provider / 模型抽象
- **NanoBot**：typed `LLMUsage` 契约 ([#5478](https://github.com/HKUDS/nanobot/pull/5478))，覆盖 OpenAI/Responses/Anthropic/Bedrock
- **NullClaw**：Eden AI / NEAR AI / Atlas Cloud 三网关 OpenAI-compatible 聚合
- **IronClaw**：可插拔内存 over MCP ([#7664](https://github.com/nearai/ironclaw/issues/7664))
- **OpenClaw**：Codex 0.149 升级 ([#127724](https://github.com/openclaw/openclaw/pull/127724))

### 4.3 MCP（Model Context Protocol）集成
- **NanoBot**：Notion MCP 连接失败 (#1168)
- **CoPaw**：MCP 后端重启无法恢复 (#6524) — 高严重度，25 天未修
- **IronClaw**：Mnesis Core over MCP、sandbox GitHub CLI 凭证通过 MCP 暴露

### 4.4 沙箱与命令执行安全
- **OpenClaw**：安装策略强制确认 ([#116489](https://github.com/openclaw/openclaw/pull/116489))
- **IronClaw**：沙盒 GitHub CLI 凭证占位符隔离 ([#7806](https://github.com/nearai/ironclaw/pull/7806))
- **ZeroClaw**：`block_high_r

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-22

## 一、今日速览

NanoBot 今日呈现出**高强度、多线并进**的活跃态势：过去 24 小时内共触发 **37 条 PR 更新**与 **5 条 Issue 更新**，新开/活跃 Issue 仅 1 条，已关闭 4 条；PR 侧已合并/关闭 **23 条**，仍待合并 **14 条**。当前提交主体集中在 **@chengyongru** 一人（贡献 8 条 PR，覆盖 provider 重构、TUI/WebUI、安全区、Dream cursor、深求 DeepSeek V4 Vision 等多模块），社区协作面相对集中，存在一定维护者单点风险。整体来看，项目处于**密集的内部清理与能力扩展并行阶段**，未出现版本发布。

---

## 二、版本发布

⚠️ **今日无新版本发布。** 鉴于 PR #5478、#5407、#5442、#5477、#5474 等多项重构与修复已合并，建议关注维护者近期是否安排 patch 版本发布。

---

## 三、项目进展（今日已合并/关闭的重要 PR）

| 方向 | PR | 影响 |
|------|-----|------|
| **Provider 抽象统一** | [#5478](https://github.com/HKUDS/nanobot/pull/5478) 引入 typed `LLMUsage` 契约 | 替换动态 provider usage 字典，统一 OpenAI Chat / Responses、Anthropic、Bedrock 的 token 与缓存语义；为后续统计、计费、轨迹对齐奠定基础 |
| **Dream 记忆游标修复** | [#5442](https://github.com/HKUDS/nanobot/pull/5442)（修复 [#5441](https://github.com/HKUDS/nanobot/issues/5441)） | 修复"工具错误已被模型自行恢复却被判为未完成"的回归，避免 Dream 重复处理同一批次历史 |
| **Cron 持久化作业清理** | [#5407](https://github.com/HKUDS/nanobot/pull/5407) | 用户关闭 `heartbeat.enabled` 或 `dream.enabled` 后重启网关，旧持久化作业不再"幽灵"持续消耗 token |
| **TUI LaTeX 渲染** | [#5476](https://github.com/HKUDS/nanobot/pull/5476) | 助手输出中的 LaTeX 公式可在终端以 Unicode/纯文本呈现，覆盖流式、已协调、历史回放三种路径 |
| **WebUI iOS PWA 安全区** | [#5477](https://github.com/HKUDS/nanobot/pull/5477) | 恢复 `viewport-fit=auto`、修复主题色与浅色 manifest 默认值，安装后的 PWA 不再被刘海/灵动岛遮挡 |
| **DeepSeek V4 Flash Vision** | [#5474](https://github.com/HKUDS/nanobot/pull/5474) | 注册 `deepseek-v4-flash-vision-exp` 至 Responses API；保留多模态结构化内容，文本模型继续走字符串路径 |
| **Slack 下载校验** | [#5414](https://github.com/HKUDS/nanobot/pull/5414) | 文件下载在整条重定向链上做 URL 校验，防止恶意 URL 触发 SSRF 类风险 |
| **历史性合并** | [#1149](https://github.com/HKUDS/nanobot/pull/1149)（PromptGuard 反注入）、[#1539](https://github.com/HKUDS/nanobot/pull/1539)（CrowPay 支付 Skill）、[#1592](https://github.com/HKUDS/nanobot/pull/1592)（Lumina Windows）、[#2063](https://github.com/HKUDS/nanobot/pull/2063)（Tauri 桌面端） | 多条数月前的旧 PR 在今日集中关闭，反映维护者正在清理积压 PR 池 |

> 📌 **推进度评估**：今日完成量相当于一次小型"周迭代"——provider 抽象、Dream 记忆、cron、WebUI 视觉、模型注册、安全加固六大方向均有落地。

---

## 四、社区热点

按 Issue 评论数与讨论深度排序：

1. **[#5198 (closed)](https://github.com/HKUDS/nanobot/issues/5198)** — *Not possible to change models in a specific session*（4 条评论）  
   用户痛点：希望在某一会话中临时切换主模型，而不是只能全局重新配置实例。反映"per-session model override"的产品级需求，今日已关闭，可能已被合并的某项 provider 重构间接覆盖或转为他处讨论。
2. **[#1168 (closed)](https://github.com/HKUDS/nanobot/issues/1168)** — *Nanobot 连接 Notion MCP 失败*（2 条评论）  
   Notion MCP 互通性问题，用户已自查 API 未发现明显异常，Claude 端可正常连接，反映 MCP 集成的兼容层需更明确的错误提示。
3. **[#5463 (open)](https://github.com/HKUDS/nanobot/issues/5463)** — *DingTalk does not observe or drain inbound background tasks*  
   钉钉流式处理器为每条入站消息创建 `asyncio.Task` 后无 terminal observer，存在后台任务堆积风险。**当前唯一未关闭的 Issue**，需要维护者关注。

---

## 五、Bug 与稳定性

| 严重度 | Issue/PR | 状态 | 说明 |
|--------|---------|------|------|
| 🔴 高 | [#5463](https://github.com/HKUDS/nanobot/issues/5463) DingTalk 后台任务未清理 | OPEN，暂无 PR | 长跑进程下消息队列可能逐渐失序甚至停止消费 |
| 🟠 中 | [#5198](https://github.com/HKUDS/nanobot/issues/5198) 会话内模型切换 | CLOSED（fix 路径未在数据中显式给出） | 影响日常使用体验 |
| 🟠 中 | [#5454](https://github.com/HKUDS/nanobot/pull/5454) 流式 provider 中段 `server_error` 不重试 | CLOSED | 一旦首条 delta 已下推则跳过重试，需要 wire 层修复 |
| 🟡 中 | [#5441](https://github.com/HKUDS/nanobot/issues/5441) Dream 游标被已恢复的工具错误阻塞 | ✅ 已通过 [#5442](https://github.com/HKUDS/nanobot/pull/5442) 修复 | 历史批次重复处理问题 |
| 🟢 低 | [#1168](https://github.com/HKUDS/nanobot/issues/1168) Notion MCP 连接失败 | CLOSED | 可能为配置侧问题或文档缺失 |

---

## 六、功能请求与路线图信号

下述开放/已合并项指向 NanoBot 下一阶段的能力版图：

- **🔎 元搜索能力**：[#5234](https://github.com/HKUDS/nanobot/pull/5234) 将 MST（聚合 DuckDuckGo / Google / Brave / Bing，RRF 融合排序）作为新的 web search provider，对比单一搜索引擎覆盖更广。
- **🛡️ 反提示词注入**：[#1149](https://github.com/HKUDS/nanobot/pull/1149) 新增 `nanobot.safety.PromptGuard`，覆盖 system prompt 覆写、角色混淆、tool_call JSON 注入等场景。
- **💳 AI Agent 自主支付**：[#1539](https://github.com/HKUDS/nanobot/pull/1539) 引入 CrowPay Skill，agent 在钱包主设定的消费规则内自主付费。
- **🖥️ 桌面端形态**：[#2063](https://github.com/HKUDS/nanobot/pull/2063)（Tauri v2 + PyInstaller sidecar）与 [#1592](https://github.com/HKUDS/nanobot/pull/1592)（Lumina Windows）共同探索本地优先的桌面安装体验。
- **⚙️ Skill 调用粒度**：[#5405](https://github.com/HKUDS/nanobot/pull/5405) 新增 `disable-model-invocation: true` frontmatter 字段，让部署/发布类有副作用 skill 必须由用户显式调用。
- **📈 轨迹可观测性**：[#5420](https://github.com/HKUDS/nanobot/pull/5420) 把每次用户 turn 投射为单一应答面、保留 reasoning/tool/edit/中间活动序列、累计 provider usage 并区分最新上下文与累计输入。

> 💡 **路线图判断**：安全（PromptGuard）、provider 抽象（typed usage）、可视化（LaTeX/PWA）、本地化（桌面端）四条线在 24 小时内同时推进，**指向"v0.x 内部能力深化 + 端到端形态扩展"并行策略**。

---

## 七、用户反馈摘要

从近 24 小时评论与更新中提炼：

- **痛点 1 · 模型灵活性不足**：用户（whisperity）明确表达"不能像 SaaS 那样在会话内随时切换模型"的挫败感 → 提示"per-session model override"具备明确的产品需求。
- **痛点 2 · MCP 错误不友好**：Notion 用户（silence-breaker）反馈"核查了 API 没问题但就是连不上"，希望连接器提供更具诊断价值的报错而非静默失败。
- **痛点 3 · 配置生效不彻底**：cron heartbeat/dream bug 表明用户在配置文件中关停某功能后，重启并不能立刻停止后台任务，存在"配置与运行时脱节"问题；[#5407](https://github.com/HKUDS/nanobot/pull/5407) 已修复。
- **痛点 4 · 流式中断难以恢复**：流式 provider 中段 `server_error` 不重试 ([#5454](https://github.com/HKUDS/nanobot/pull/5454))，一旦中途失败则需要用户手动重发，影响长对话体验。

---

## 八、待处理积压（提醒维护者关注）

| 类型 | 编号 | 状态 | 备注 |
|------|------|------|------|
| 开放 PR | [#5234](https://github.com/HKUDS/nanobot/pull/5234) | OPEN 自 2026-08-03 | 元搜索 provider，已 18 天无审阅意见 |
| 开放 PR | [#5379](https://github.com/HKUDS/nanobot/pull/5379) | OPEN 自 2026-08-13 | memory consolidation 输入保留问题 |
| 开放 PR | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | OPEN 自 2026-08-16 | Skill 手动调用模式 |
| 开放 PR | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | OPEN 自 2026-08-18 | WebUI turn 可观测性 |
| 开放 PR | [#5457](https://github.com/HKUDS/nanobot/pull/5457) | OPEN 自 2026-08-20 | dispatcher 异常边界修复 |
| 开放 PR | [#5475](https://github.com/HKUDS/nanobot/pull/5475) | OPEN 自 2026-08-21 | 清理剩余死代码 |
| 开放 PR | [#5480](https://github.com/HKUDS/nanobot/pull/5480) / [#5481](https://github.com/HKUDS/nanobot/pull/5481) | OPEN 自 2026-08-21 | typed LLM usage + trajectory 后端（注意：是先前 [#5478](https://github.com/HKUDS/nanobot/pull/5478)/[#5479](https://github.com/HKUDS/nanobot/pull/5479) 的迭代替代版本） |
| 开放 Issue | [#5463](https://github.com/HKUDS/nanobot/issues/5463) | OPEN 自 2026-08-21 | DingTalk 后台任务未 drain，唯一进行中 Issue |

> ⚠️ **维护者建议**：14 条待合并 PR 中有相当比例由 [@chengyongru](https://github.com/chengyongru) 提交，建议安排二审资源以降低单点延迟；同时 [#5463](https://github.com/HKUDS/nanobot/issues/5463) 涉及消息可靠性，建议优先响应。

---

📊 **项目健康度**：🟢 活跃但维护集中  
今日数据表明 NanoBot 进入"清理 + 扩展"双轨节奏：内部抽象（provider usage、cron 持久化、Dream 游标）与对外形态（桌面端、Skill 生态、新模型）同步推进，社区仍以维护者驱动为主。建议后续观察是否进入版本发布窗口，以及 PR 评审节奏能否分散到更多协作者。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-22**
**项目地址：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)**

---

## 一、今日速览

Hermes Agent 今日活跃度处于**高位运行**状态。过去 24 小时共产生 50 条 Issues 更新（47 条活跃/新开、3 条关闭）和 50 条 PR 更新（48 条待合并、2 条已合并/关闭），叠加昨日 v0.20.5 稳定版的发布，社区进入了"大规模消化补丁 + 架构治理"并行的双轨阶段。从内容分布看，**架构治理类（Proof-Carrying State、生成身份护栏、事务化部署计划）** 与**稳定性修复类（Windows/Mac/Linux 桌面、网关多 Profile 会话路由）** 是当前两大主线，反映项目正在从"功能扩张"向"可靠性收敛"过渡。值得关注的是，Discord/WhatsApp/Slack 三大 IM 平台的功能对齐战役仍在持续推进，但短期内合并 PR 较少，更多停留在 Epic 协调层面。

---

## 二、版本发布

### 🆕 Hermes Agent v0.20.5 (v2026.8.19)
**发布时间：2026-08-19**

- **类型：** Patch Release（稳定版标签）
- **说明：** 此版本将自 v0.20.4 以来累计合并的 **约 323 个 PR** 整合为一个稳定标签版本，主要服务于下游消费者（Docker 镜像、托管部署、新安装场景）。
- **破坏性变更：** 未单独披露；属于累积型 Patch，建议下游用户在升级前仍应阅读具体 CHANGELOG。
- **迁移注意事项：**
  - Docker / 托管部署用户可安全拉取新镜像；
  - 已在 v0.20.4 之后的 main 上自编译运行的开发者无需额外操作；
  - Windows 用户需关注后续 Windows 网关启动修复（见 PR #91956 与 Issue #91675）。

🔗 [Release v2026.8.19](https://github.com/nousresearch/hermes-agent/releases/tag/v2026.8.19)

---

## 三、项目进展

今日仅 2 条 PR 已合并/关闭，且无显著"明星级"功能合并，整体属于**架构治理与稳定性修复并行推进**的状态：

| 类型 | 进展 |
|------|------|
| 重大新功能 | ❌ 无 |
| 大规模重构 | 🔄 持续推进（god-file 拆分 epic 已 20/20 完结，详见 #78647） |
| Bug 修复合并 | ✅ 零星（如 #88534 Desktop 顶部会话标签栏消失已关闭） |
| 架构护栏引入 | 🔄 大量 PR 仍处于"Live head - do not merge"标记（如 #88796、#85644、#86354），表明合并门槛被显著拉高 |

**整体评估：** 项目处于"质量门控收紧"阶段，PR 标题虽多，但被设计为需要满足"Proof Scope = Mutation Scope"等新架构法则才能合并（参考 Issue #90144）。这意味着 issue/pr 数量虽多，但短期合并速率会被有意压低。

---

## 四、社区热点

### 🔥 讨论最活跃的 Issues（按评论数）

1. **[#78647 - Large-file decomposition: 20/20 done](https://github.com/nousresearch/hermes-agent/issues/78647)** ⭐ 78 评论（已关闭）
   - 全仓库 god-file 拆分史诗级工单，已宣告完结，确立"只能拆分、不得回退"的政策。

2. **[#66616 - Skills index is stale or degraded](https://github.com/nousresearch/hermes-agent/issues/66616)** ⚠️ 72 评论（开放中）
   - Skills Hub 文档索引自动化刷新失败（29.8h 超 26h 阈值），反映 `skills-index.yml` cron 流水线不稳定。

3. **[#79564 - Discord Feature Parity Campaign](https://github.com/nousresearch/hermes-agent/issues/79564)** — 9 评论
4. **[#91277 - Fleet update reliability](https://github.com/nousresearch/hermes-agent/issues/91277)** — 7 评论
5. **[#90866 - Make observable state proof-carrying](https://github.com/nousresearch/hermes-agent/issues/90866)** — 7 评论
6. **[#79890 - WhatsApp Feature Parity Campaign](https://github.com/nousresearch/hermes-agent/issues/79890)** — 7 评论
7. **[#79772 - Slack Feature Parity & @Hermes Tag Campaign](https://github.com/nousresearch/hermes-agent/issues/79772)** — 6 评论
8. **[#88683 - Transactional deployment plan](https://github.com/nousresearch/hermes-agent/issues/88683)** — 6 评论

**诉求分析：** 社区讨论呈现明显的"三大战线"：
- **架构治理线**：proof-carrying state、generation identity、transactional deploy plan，诉求统一指向"消除误报成功（false success）"。
- **平台对齐线**：Discord / WhatsApp / Slack 三个独立 campaign 并行，由同一维护者协调。
- **稳定性线**：Skills 索引自动化、桌面端多 Profile 路由、IM 多 Profile 部署。

---

## 五、Bug 与稳定性

### 🚨 P1 / P2 高优先级 Bug（按风险领域归类）

| Issue | 标题 | 严重度 | 平台 | Fix PR |
|-------|------|--------|------|--------|
| [#89083](https://github.com/nousresearch/hermes-agent/issues/89083) | macOS 睡眠唤醒后 Desktop 聊天窗口永久无响应（半开 WebSocket） | P2 | macOS Desktop | ❌ 待修复 |
| [#88740](https://github.com/nousresearch/hermes-agent/issues/88740) | compression: 跨 child/CLI/ACP 恢复丢失 durable row-ID 水位线 | P2 | Session | 🔄 关联 #88758 |
| [#88758](https://github.com/nousresearch/hermes-agent/issues/88758) | compression: 重放清理与交替修复需保留原始 durable 水位 | P2 | Session | ❌ 待修复 |
| [#91675](https://github.com/nousresearch/hermes-agent/issues/91675) | Windows: 网关启动后 6s liveness 探测仍打印 ✓ 然后挂死；冷启动仅恢复 active profile | P2 | Windows | 🔄 关联 PR #91956 |
| [#91684](https://github.com/nousresearch/hermes-agent/issues/91684) | Desktop 审批被路由到非所属本地网关时返回 4001 "session not found" | P2 | Desktop | ❌ 待修复 |
| [#91927](https://github.com/nousresearch/hermes-agent/issues/91927) | Gemini 模型会话标题生成失败（默认 thinking tokens 耗尽 max_tokens） | P2 | Gemini Provider | ❌ 待修复 |
| [#90200](https://github.com/nousresearch/hermes-agent/issues/90200) | GitHub 自动化分权：元数据可写但仓库对象 403 | P2 | Auth | ❌ 待修复 |
| [#89252](https://github.com/nousresearch/hermes-agent/pull/89252) | fix(gateway): 规范路由身份 — 申领方生成证明（待合并） | P2 | Gateway | 🔄 PR 待合并 |

### 🐛 P3 中优先级 Bug

| Issue | 标题 | 平台 |
|-------|------|------|
| [#91675](https://github.com/nousresearch/hermes-agent/issues/91675) | Windows 网关冷启动只恢复 active profile | Windows |
| [#82851](https://github.com/nousresearch/hermes-agent/issues/82851) | Linux/Wayland 下 HUD 拖动失效（👍1） | Linux Desktop |
| [#76385](https://github.com/nousresearch/hermes-agent/issues/76385) | Buzz 网关保持连接但客户端显示离线 | Plugins |
| [#91916](https://github.com/nousresearch/hermes-agent/issues/91916) | Python 3.14+ 下 DaemonThreadPoolExecutor 崩溃 | Tools（已关闭） |
| [#43054](https://github.com/nousresearch/hermes-agent/issues/43054) | Gmail 嵌套/转发邮件正文丢失 | Skills |
| [#88534](https://github.com/nousresearch/hermes-agent/issues/88534) | Desktop 顶部会话标签栏消失（已关闭） | Desktop |

**稳定性总览：** 当前共有 ~30 个开放 Issue 与 ~15 个开放 PR 集中在 install/update 类别（参考 #91277），表明**部署可靠性仍是项目最大的稳定性短板**。

---

## 六、功能请求与路线图信号

### 📋 高优先级 Feature 请求

| Issue / PR | 标题 | 优先级 | 状态 |
|------------|------|--------|------|
| [#91277](https://github.com/nousresearch/hermes-agent/issues/91277) | Fleet update reliability: 统一部署计划 | P1 | 跟踪中 |
| [#91951](https://github.com/nousresearch/hermes-agent/pull/91951) | Plan F 护栏 + Plan B runtime toolset + 软警告 + 竞争 SOP | P2 | PR 待合并 |
| [#91950](https://github.com/nousresearch/hermes-agent/pull/91950) | sessions list 按开始日期过滤 | P3 | PR 待合并 |
| [#91911](https://github.com/nousresearch/hermes-agent/issues/91911) | Bot Mode 控制平面统一（身份/能力/投递/取消） | P3 | 设计阶段 |
| [#91740](https://github.com/nousresearch/hermes-agent/issues/91740) | Bot 会话在 Sessions 侧栏隐藏且 Bots Tab 无浏览路径 | P3 | 待修复 |
| [#91260](https://github.com/nousresearch/hermes-agent/issues/91260) | Gateway + 多 Profile: IM 入口无法驱动真正的多 bot 流水线 | P3 | 设计阶段 |

### 🛣️ 路线图信号解读

- **架构收敛方向明确**：#90866、#90144、#90145、#90049、#88683 一组 Issue 共同指向"可观察状态证明携带（proof-carrying state）"与"统一部署计划"两大主题，暗示下一阶段路线图将围绕**架构护栏标准化**展开。
- **IM 平台对齐全速推进**：Discord (#79564)、WhatsApp (#79890)、Slack (#79772) 三个 campaign 由同一维护者统筹，meta-issue 形式表明将进入系统化交付阶段。
- **Bot Mode 一体化**：#91911 提出将 Bot 模式的身份/能力/投递/取消纳入单一控制平面，是 v0.21 的潜在核心主题。

---

## 七、用户反馈摘要

从 Issues 评论中提炼的真实痛点：

### 😣 主要不满
1. **多 Profile 部署的"SOUL handoff 是虚构的"** (#91260) — 用户反映：当只有 1 个 profile 运行 IM 网关、其他 profile 是无 IM 的领域 leader 时，IM 入口无法真正驱动多 bot 流水线。这是企业级部署的关键阻塞。
2. **Skills 索引自动化长期不可靠** (#66616) — 29.8h 仍未刷新，Skills Hub 文档依赖的下游用户受影响。
3. **macOS 睡眠唤醒后桌面永久失联** (#89083) — "唯一恢复方式是开新窗口或重启"，严重影响日常使用。
4. **Windows 网关冷启动只恢复 active profile** (#91675) — 多 Profile 用户冷启动后其他 Profile 全部掉线。
5. **Linux/Wayland 下 HUD 无法拖动** (#82851, 👍1) — KDE Plasma 6 / KWin 用户被卡死，无法重定位窗口。

### 😊 进展中的积极信号
1. **god-file 拆分 epic 完结** (#78647) — 20/20 完成，仓库大型文件模块化项目圆满收官。
3. **MCP HTTP 会话自愈** (#91689) — 通知流断开后可重建完整会话。
4. **Gitea/Forgejo webhook 支持 rebase** (#89427) — 社区贡献者主动重提停滞一个月的工作。

### 🎯 真实使用场景
- 企业多 Profile 舰队部署（本地 + 远程网关 + 桌面 + 镜像管理）
- 学术 arXiv 论文检索（PR #88792 修复了旧式 ID 截断问题）
- Google Workspace 邮件处理（#43054 反映嵌套邮件正文丢失）
- Kanban 自动分解任务（#88803 修复跨分解调用的去重）

---

## 八、待处理积压

### ⏰ 长期未响应 / 需关注的重要条目

| Issue / PR | 标题 | 创建日期 | 状态 |
|------------|------|----------|------|
| [#43054](https://github.com/nousresearch/hermes-agent/issues/43054) | Gmail get 仅返回顶层 MIME — 转发/嵌套邮件正文丢失 | 2026-06-09 | ⚠️ 开放 ~2.5 月，仅 3 评论 |
| [#66616](https://github.com/nousresearch/hermes-agent/issues/66616) | Skills 索引陈旧/降级（自动化探针反复失败） | 2026-07-18 | ⚠️ 72 评论但仅停留在自动化告警 |
| [#76385](https://github.com/nousresearch/hermes-agent/issues/76385) | Buzz 网关保持连接但 agent 显示离线 | 2026-08-01 | ⚠️ 开放 3 周仍未修复 |
| [#89252](https://github.com/nousresearch/hermes-agent/pull/89252) | fix(gateway): 规范路由身份 — 申领方生成证明 | 2026-08-18 | ⚠️ 标记 "claimant generation proof pending" 待合并 |
| [#85644](https://github.com/nousresearch/hermes-agent/pull/85644) | feat(webhook): 多目标投递扇出 | 2026-08-13 | ⚠️ 标记 "mixed fan-out result truth 是合并阻塞" |
| [#86354](https://github.com/nousresearch/hermes-agent/pull/86354) | fix(email): Gmail 风格应用密码标准化 | 2026-08-14 | ⚠️ 标记 "live implementation is unsafe, do not merge" |
| [#88796](https://github.com/nousresearch/hermes-agent/pull/88796) | fix(security): 内存预取无法撤销的暴露 | 2026-08-18 | ⚠️ 标记 "log-only exposure patch, do not merge" |

### 📌 维护者建议关注

1. **#66616 Skills 索引流水线**：自动化探针已降级超过 29 小时，建议优先排查 `.github/workflows/skills-index.yml` 与 `deploy-site.yml`。
2. **#43054 Gmail 嵌套邮件**：已开放 ~2.5 月仍未给出有效方案，影响所有 productivity/google-workspace 用户。
3. **#76385 Buzz 网关状态报告**：3 周未修复，Transport 健康与客户端 presence 契约分离问题属于已识别的架构缺陷。
4. **PR 合并门槛拉高副作用**：#89252、#85644、#86354、#88796 等均被自我标记为 "do not merge"，反映项目当前合并节奏被新架构法则显著拉慢，建议维护者在社区传达明确的"重构路径图"以降低贡献者挫败感。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐⭐⭐ | 50 Issues / 50 PRs / 1 Release，产出密度极高 |
| 架构清晰度 | ⭐⭐⭐⭐ | proof-carrying 等护栏清晰，但合并门槛高 |
| 稳定性 | ⭐⭐⭐ | 安装/更新、桌面端、IM 多 Profile 仍是短板 |
| 社区响应 | ⭐⭐⭐ | Issues 评论活跃，但部分 P3 长期积压 |
| 路线图透明度 | ⭐⭐⭐⭐ | 多 campaign meta-issue 明确，但优先级与时序未公开 |

**总体判断：** Hermes Agent 已进入"成熟期典型治理阶段"，功能扩张让位于可靠性收敛。下一个稳定版（v0.21）的关键看点是：(1) 事务化部署计划能否落地；(2) Discord/Slack/WhatsApp 对齐战役能否首批交付；(3) Windows / macOS 桌面稳定性能否显著改善。

---

*本日报数据来源于 GitHub 公开 API，所有链接均指向 NousResearch/hermes-agent 仓库。如需查阅原始 Issue / PR 详情，请点击对应链接。*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-22**

---

## 1. 今日速览

PicoClaw 今日活跃度呈现"PR 集中收尾、Issue 新增量低"的特征。社区层面过去 24 小时关闭了 4 个历史遗留 PR（创建于 2-3 月间），同时仅有 1 条新 Issue 被提出，无新版本发布。整体来看，项目处于功能迭代与社区反馈收集的常规节奏中，健康度平稳，PR 处理流水线的"清理"动作明显，但缺乏新增合入。

---

## 2. 版本发布

⚠️ 今日**无新版本发布**。

---

## 3. 项目进展

过去 24 小时内有 4 个长期搁置的 PR 被关闭，主要进展如下：

| PR | 标题 | 类型 | 状态 |
|---|---|---|---|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | Improve WebFetchTool text extraction with HTML entity decoding | enhancement (tool) | CLOSED |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | skills: install/reinstall CLI and refactor into skillsCmd | enhancement (skill) | CLOSED |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol for native Anthropic API format | feature | CLOSED |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | feat: add agents.md | documentation | CLOSED |

**推进方向分析：**
- **协议兼容性扩展**（#1158）：新增 `anthropic-messages` 协议前缀，支持原生 `/v1/messages` 端点格式的 LLM 服务，扩展了对 Anthropic 兼容代理服务的支持。
- **工具能力增强**（#647）：WebFetchTool 增加 HTML 实体解码与结构化保留，提升网页抓取可读性。
- **技能管理完善**（#714）：引入 install/reinstall 子命令，支持 GitHub Trees API 完整目录拉取、`repo@branch` 语法及子路径校验。
- **文档体系升级**（#1182）：重构 `AGENTS.md`，转向"原则优先"（principle-first）的轻量化仓库指南。

需要注意的是，4 个 PR 均标记为 CLOSED 而非 MERGED，且无"已合并待合并"统计，表明这些可能因冲突、需求变更或维护者决策被直接关闭而非合入主干。建议进一步核实关闭原因（merged/rejected/superseded），以便准确评估功能落地情况。

---

## 4. 社区热点

今日社区互动量较低，仅有 1 条 Issue 被创建且无评论、无点赞。

- **[#3342](https://github.com/sipeed/picoclaw/issues/3342)** — "[Feature] Opt-in 'after-turn' steering mode: queue busy-session messages instead of interrupting the running turn"
  - 作者：unedtamps
  - 创建/更新时间：2026-08-21
  - 互动：0 评论 / 0 👍

**诉求分析：** 用户希望在 Agent 仍在处理第一个任务时，可选择性地将后续消息**入队**而非立即打断。现有 steering 机制会在第二条消息到来时跳过第一个任务剩余的 tool calls（标记为 "Skipped due to queued user message."），这对长任务场景造成资源浪费。该需求反映出对**非破坏性用户交互模式**和**任务连续性**的呼声。

---

## 5. Bug 与稳定性

今日**无明确标记为 Bug 的 Issue 或 PR**。

- 4 个已关闭的 PR 中，#647（WebFetchTool 文本提取改进）虽属 enhancement，但实际是对现有抓取逻辑中文本可读性问题的间接修复（HTML 实体未解码导致的乱码），可视作稳定性优化。其关闭而非合入的处理方式可能意味着该问题暂未得到官方修复合入。

---

## 6. 功能请求与路线图信号

**今日新提出功能请求：**

- **[#3342](https://github.com/sipeed/picoclaw/issues/3342)** — "after-turn" steering mode
  - **诉求核心：** 将"steering（中途修正）"与"queuing（排队等待）"解耦，提供 opt-in 模式。
  - **可能落地的迹象：** 该需求描述清晰，给出了明确的 use case 与现有行为对照，但当前尚无相关 PR 跟进。
  - **路线图概率：** 中等。需求具有合理的产品价值（解决长任务被频繁打断的痛点），但实现复杂度涉及 session 状态机改动，建议关注维护者是否在未来 1-2 周内将其纳入优先级讨论。

**已关闭但功能落地的 PR：**
- #1158（Anthropic 原生协议）若已被合入主干，将显著扩大 PicoClaw 的协议兼容范围，是路线图的重要补全。
- #714（Skills CLI 重构）若合入，将统一技能安装/重装入口，降低使用门槛。

---

## 7. 用户反馈摘要

由于今日唯一新增 Issue（#3342）尚无评论与互动，**直接用户反馈样本不足**。可从历史 PR 的创建与关闭时间差推断社区协作特征：

- 多个 PR（如 #647、#1158、#714）从 2-3 月提出，至 8 月下旬才关闭，平均滞留时间约 **5-6 个月**，反映出维护者对历史 PR 的处理节奏较慢。
- 关闭而非合入的处理结果可能让贡献者产生挫败感，建议项目组在关闭长期未处理 PR 时提供明确原因说明。

---

## 8. 待处理积压

️ **重点关注：长期 PR 处理透明度**

| PR | 创建时间 | 滞留时长 | 当前状态 |
|---|---|---|---|
| [#647](https://github.com/sipeed/picoclaw/pull/647) | 2026-02-22 | ~6 个月 | CLOSED（原因待确认） |
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | 2026-03-06 | ~5.5 个月 | CLOSED |
| [#1182](https://github.com/sipeed/picoclaw/pull/1182) | 2026-03-06 | ~5.5 个月 | CLOSED |

**提醒建议：**
1. 维护者应及时同步上述 PR 的关闭原因（merged / superseded / rejected），避免贡献者重复劳动。
2. 新 Issue [#3342](https://github.com/sipeed/picoclaw/issues/3342) 需尽快获得 maintainer 的初步回应（acknowledge / label），以建立社区信心。
3. 建议建立 PR 滞留 SLA 机制，例如超过 90 天未响应的 PR 主动通知维护者复审。

---

**报告说明：** 本报告基于 2026-08-22 当日 GitHub 数据快照生成。如需进一步核实 PR 关闭类型（merged vs. closed-not-merged），建议查询 `merged_at` 字段或评论历史。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-08-22**
**数据范围：过去 24 小时**

---

## 1. 今日速览

NanoClaw 今日进入高强度迭代期，过去 24 小时共产生 **24 条 PR 更新**和 **1 条新 Issue**，活跃度显著高于近期平均水平。代码层面的主线工作集中在两条脉络上：(1) **多实例 Telegram Bot 支持与初始化向导改进**，由核心贡献者 amit-shafnir 连续提交 6 条相关 PR 推动；(2) **CI/Registry 基础设施修复**，由 zvi-fried 完成 5 条修复 PR。整体来看项目处于"内功打磨 + 通道功能扩展"并行推进的状态，没有新版本发布，但主干变更密度高、方向清晰，健康度良好。

---

## 2. 版本发布

**无新版本发布。** 今日所有 PR 仍处于合并前评审或刚关闭阶段，下一个版本节点（推测为下周的 minor 或 patch）很可能将吸收今日的 Telegram 多实例、CI 修复与容器依赖升级等变更。

---

## 3. 项目进展

今日共有 **11 条 PR 进入合并/关闭状态**，对主干稳定性与功能完整度有实质性推进：

### 3.1 CI 与基础设施（高频修复日）

- **#3430 fix: restore stable CI required check** — 修复因 Node 22/24 矩阵把 `ci` 检查拆为 `ci (22)` / `ci (24)` 导致主分支 required check 永远 pending 的问题。([链接](https://github.com/qwibitai/nanoclaw/pull/3430))
- **#3424 [main] ci: test registry-backed skills** — 新增对所有 `add-*` skill 的 registry 快照测试管线，使未来 skill 改动可在 CI 提前发现回归。([链接](https://github.com/qwibitai/nanoclaw/pull/3424))
- **#3439 chore(container): bump claude-code to 2.1.238 and agent SDK to 0.3.238** — 容器内 CLI 与 SDK 同步升级。([链接](https://github.com/qwibitai/nanoclaw/pull/3439))

### 3.2 Channel 与 Provider 兼容性

- **#3403 [main] fix(matrix): use a refresh-safe ESM patch** — Matrix 适配器在 Node 22 下因无扩展名 ESM 导入失败，现以 pnpm patch 形式固化。([链接](https://github.com/qwibitai/nanoclaw/pull/3403))
- **#3402 [main] fix(providers): accept provider file events** — 接受 branch-backed providers 派生的 file events，零运行时改动。([链接](https://github.com/qwibitai/nanoclaw/pull/3402))
- **#3401 [channels] fix(whatsapp-cloud): keep skill payload compatible with main** — 把 registry 注册 helper 导出至 adapter，消除 main 分支组合时类型/导出失败。([链接](https://github.com/qwibitai/nanoclaw/pull/3401))

### 3.3 功能合入

- **#3429 [core-team] feat(drivers): ratify the attach surface** — 把 `SessionExecSpec { bin, argsTty, argsPlain }` 确认为 driver 描述 exec argv 的标准契约，为后续交互式终端附加能力奠定接缝。([链接](https://github.com/qwibitai/nanoclaw/pull/3429))
- **#3202 Add Mattermost channel integration** — 关闭长期 Issue #1379，正式把 Mattermost 纳入 Chat SDK 通道集。([链接](https://github.com/qwibitai/nanoclaw/pull/3202))
- **#3050 feat(setup): add Dial to the channel picker + wizard/skills (runChannelSkill model)** — 历经约一个月的评审，Dial 通道进入 setup wizard 选择项。([链接](https://github.com/qwibitai/nanoclaw/pull/3050))
- **#3433 fix(add-dial-number): use nc directives** — `/add-dial-number` 由 prose shell 改为 `nc` directives，registry 发现一致性提升。([链接](https://github.com/qwibitai/nanoclaw/pull/3433))

**整体评估：** 今日合入的变更对项目"稳"和"通"两个维度都有加分：CI 矩阵修复消除了阻塞合入的潜在风险，Driver attach 契约为未来能力扩展打了地基，Telegram/Mattermost/Dial 三条通道同步推进——主干今日净向前迈进约 0.5 个 minor release 当量。

---

## 4. 社区热点

由于今日新增 Issue 仅 1 条、PR 评论数普遍为 0，**互动热度整体偏低**，但仍有若干讨论焦点：

- **#3426 [bug] send_card docs promise callback buttons that the bridge drops since #2265** — 唯一新开 Issue，主题命中"文档承诺 ↔ 实际行为"鸿沟，agent 在向用户解释能力边界时被误导。([链接](https://github.com/qwibitai/nanoclaw/issues/3426))
- **#3396 feat: create agents from templates in chat** — 该方向今日产出姊妹 PR #3428（Slack 通道端），体现作者正按"tools 先于 channels"的顺序落地 templates-from-chat 能力，是当前 feature 层面最活跃的迭代主题。([链接](https://github.com/qwibitai/nanoclaw/pull/3396))

**诉求分析：** 用户/贡献者当前最关心的并非"新通道"本身，而是 **(a) 现有能力的契约一致性**（文档与运行时一致、CI 与 required check 一致、driver 与调用方一致）以及 **(b) 复杂部署场景下的可配置性**（Telegram 多 bot、templates 复用）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 是否已有 fix PR |
|---|---|---|---|
| **中** | [#3426](https://github.com/qwibitai/nanoclaw/issues/3426) | `send_card` 自 #2265 起丢弃无 `url` 的 action，与文档和 `fallbackText` 暗示矛盾，agent 误判平台能力 | ❌ 暂无 fix PR，需关注是否阻塞 templates/Mattermost 等卡片渲染路径 |
| **中** | [#3287](https://github.com/qwibitai/nanoclaw/pull/3287) | `getMessageIdBySeq()` 把 `messages_in.id` 原样当作 platform message id 返回，去掉了 agent-group 后缀；修复 PR 已开 5 天 | ✅ 已有 fix PR #3287 待合并 |
| **低** | [#3403](https://github.com/qwibitai/nanoclaw/pull/3403) | Matrix 在 Node 22 下扩展名缺失导致 ESM 失败 | ✅ 已合并 |
| **低** | [#3434](https://github.com/qwibitai/nanoclaw/pull/3434) | polling 适配器错误地打开 webhook server | ✅ fix PR 待合并 |
| **低** | [#3431](https://github.com/qwibitai/nanoclaw/pull/3431) | Telegram pairing card 显示位数（应为 6）与实际不一致 | ✅ fix PR 待合并 |
| **低** | [#3402](https://github.com/qwibitai/nanoclaw/pull/3402) | providers file events 未被接受 | ✅ 已合并 |
| **低** | [#3401](https://github.com/qwibitai/nanoclaw/pull/3401) | add-whatsapp-cloud 与 main 不兼容 | ✅ 已合并 |

**稳定性信号：** 今日没有崩溃/数据丢失类 P0 报告；最值得维护者关注的是 #3426，因为它直接影响"agent 对用户的能力承诺"，长期可能引发更多衍生报告。

---

## 6. 功能请求与路线图信号

**强信号（已有完整 PR 链）：**
- **Telegram 多实例 Bot（TELEGRAM_INSTANCES + instance-bound pairing）** — 由 #3436（feature skill）牵头，配以 #3438（wizard）、#3437（docs）、#3435（pairing/init/welcome 串联）、#3431（pairing 文案修正）形成闭环。这一组 PR 几乎可以肯定进入下一个版本。([#3436](https://github.com/qwibitai/nanoclaw/pull/3436))
- **从聊天中基于模板创建 agent** — #3396（tool）+ #3428（Slack 通道重提）双线推进，是当前最显著的"产品级"能力扩展。([#3396](https://github.com/qwibitai/nanoclaw/pull/3396))
- **Driver attach surface 标准化** — #3429 已合并，为未来交互式终端能力留出接缝。([#3429](https://github.com/qwibitai/nanoclaw/pull/3429))

**弱信号（单点 Issue/PR）：**
- 修复 `send_card` 文档与运行时行为脱节（#3426）——属于"诚实化能力描述"路线的代表诉求，未来可能衍生出对其它工具（如模板字段、action 类型）的契约审查。

---

## 7. 用户反馈摘要

由于今日所有 Issue/PR 的评论数均为 0（除摘要外），**直接的终端用户反馈非常稀薄**。从仅有的摘要内容可提取以下场景与痛点：

- **痛点：** Agent 在调试自身行为时，会把"按钮没出现"归因为"平台不支持"，掩盖了真实缺陷（`send_card` 静默丢弃 callback actions）。这意味着错误归因链 = 文档缺陷 → 平台误诊 → 用户困惑。
- **场景：** 多 bot 部署（详见 #3436 系列 PR 的设计动机）已成为高频场景，暗示 NanoClaw 部署从"个人助手"向"团队/品牌多账号"演进。
- **满意度：** 暂无明确的负面/正面情绪表达，但 Mattermost（#3202）和 Dial（#3050）两个长期 Feature Request 在今日同日关闭，提示维护团队对社区长尾需求保持着较高的消化效率。

---

## 8. 待处理积压

以下为维护者应优先关注的滞留项：

- **#3287 Fix: strip agent-group suffix from inbound platform message id** — 8/17 开放至今已 5 天，fix PR 已就绪但未合并，可能影响追踪/审计功能正确性。([链接](https://github.com/qwibitai/nanoclaw/pull/3287))
- **#3396 / #3428 templates-from-chat** — 前序 #3397 已"提前合并"被 revert（ffd9d9b1），当前 #3428 明确声明 supersedes 该路径，**评审者需要明确合并顺序**以免再次踩坑。([链接](https://github.com/qwibitai/nanoclaw/pull/3428))
- **#3426 send_card 文档/行为不一致** — 开放 24 小时、尚无 assignee，鉴于其影响"agent 对用户的能力承诺"，建议在下一个版本前关闭。([链接](https://github.com/qwibitai/nanoclaw/issues/3426))
- **#3434 fix(chat-sdk): polling adapters do not open the webhook server** — 看似小修，但若部署侧依赖了错误的端口暴露行为，可能造成安全/资源占用隐患。([链接](https://github.com/qwibitai/nanoclaw/pull/3434))

---

### 项目健康度总结

| 指标 | 状态 | 解读 |
|---|---|---|
| 活跃度 | 🟢 高 | 24 条 PR/日，高于常规水平 |
| 合并吞吐 | 🟢 11/24 | 接近半数进入关闭，含一批 CI/稳定性修复 |
| Release 节拍 | 🟡 静默期 | 无新版本发布，但主干变更密度已够下次发布 |
| Issue 流入 | 🟢 低 | 仅 1 条新 Issue，且非 P0 |
| Backlog 风险 | 🟡 中 | #3287 等修复待落地，#3396 链需明确合并顺序 |
| 方向清晰度 | 🟢 高 | Telegram 多实例 + templates-from-chat 双主线明确 |

**结论：** NanoClaw 当前处于"基础设施收尾 + 通道能力扩张"的关键交汇点，下一版本发布窗口如能在 1–2 周内开启，将显著提升多实例部署与模板化创建两条核心场景的可用性。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期：** 2026-08-22
**数据周期：** 过去 24 小时
**项目仓库：** [nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 项目今日活跃度处于**低位运行**状态。过去 24 小时内无新增/活跃 Issue，无已关闭 Issue，无版本发布，唯一可见的开发动作为 1 条仍处于 **OPEN** 状态的 PR（#990），且该 PR 尚未获得任何评论或点赞反馈，社区互动几乎为零。整体来看，项目处于"轻量提交、等待评审"的静默阶段，无关键里程碑推进或紧急修复发生。建议维护者关注该 PR 的响应情况，避免进入长期搁置状态。

**健康度评级：** 🟡 中性偏低 — 开发节奏放缓，无重大事件，建议持续观察。

---

## 2. 版本发布

无新版本发布。Release 通道在最近 24 小时内保持静默，无 `git tag` 或 GitHub Release 触发。

---

## 3. 项目进展

**今日无已合并或已关闭的重要 PR。**

今日唯一的新增 PR（#990）仍处于 **OPEN** 状态，等待维护者评审，尚未推动项目向前迈进实质性的一步。

| PR 编号 | 标题 | 状态 | 影响 |
|--------|------|------|------|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | feat(providers): add Eden AI as an OpenAI-compatible gateway | OPEN | 待评审 |

---

## 4. 社区热点

**今日社区讨论度极低。**

- 唯一可见的 PR #990 的评论数为 `undefined`（即 0 条评论），点赞数为 0
- 无活跃 Issue
- 无用户反馈互动

从数据上看，社区目前没有形成讨论热点。考虑到该 PR 涉及第三方网关接入（Eden AI），预计在评审启动后可能引发关于 OpenAI 兼容接口标准化、网关接入流程的轻量交流。

🔗 相关链接：[PR #990](https://github.com/nullclaw/nullclaw/pull/990)

---

## 5. Bug 与稳定性

**今日无 Bug 报告。**

过去 24 小时内未出现任何新提交的 Issue，亦无崩溃、回归或性能问题反馈。这意味着：

- ✅ 项目近期稳定性表现良好（无新增负面信号）
- ⚠️ 但也可能是用户活跃度降低导致反馈减少，需结合长期趋势判断

建议维护者主动关注 Issues 列表，确认无遗漏的用户报告。

---

## 6. 功能请求与路线图信号

### 📥 新增功能接入请求

**PR #990 — Eden AI 网关接入**
- 🔗 [nullclaw/nullclaw#990](https://github.com/nullclaw/nullclaw/pull/990)
- **作者：** MVS-source
- **创建时间：** 2026-08-21
- **类型：** 新 Provider（OpenAI 兼容网关）

**内容概要：**
- 将 Eden AI 作为 OpenAI 兼容网关 Provider 加入
- 沿用 #922（NEAR AI Cloud、Atlas Cloud）的接入模式
- 无新增 Provider 实现，统一通过 `OpenAiCompatibleProvider` 复用
- Eden AI 特性：EU 总部、单一 API Key 路由多个上游厂商

**路线图信号分析：**
- 该 PR 延续了项目"通过 OpenAI 兼容接口聚合多网关"的策略，表明项目正在构建一个**可扩展的多网关生态**
- 若被接受，NullClaw 将再增一个 EU 区域的合规选项，对欧洲用户及数据驻留敏感场景具有价值
- 预计评审重点：`OpenAiCompatibleProvider` 是否需要任何 Eden AI 特有的配置扩展

**合并概率评估：** 中等偏高。该 PR 模式清晰、与已有架构一致，作者 MVS-source 也曾参与类似 PR（#922），但仍需等待维护者反馈。

---

## 7. 用户反馈摘要

**今日无有效用户反馈。**

- Issues 评论数：0
- PR 评论数：0
- 无任何用户痛点、使用场景、满意度数据可提炼

如需了解真实用户声音，建议回顾历史 Issues 中评论数较高的条目进行分析。

---

## 8. 待处理积压

| 编号 | 标题 | 状态 | 滞留时长 | 优先级建议 |
|------|------|------|----------|------------|
| [#990](https://github.com/nullclaw/nullclaw/pull/990) | feat(providers): add Eden AI as an OpenAI-compatible gateway | OPEN（待合并） | 1 天 | 🟢 建议及时评审 |

> ⚠️ 当前待处理项极少，反映项目当前的提交节奏放缓，但也意味着维护者有充足精力应对该 PR。建议在 48 小时内给出初步评审反馈。

---

## 📊 数据附录

| 指标 | 数值 |
|------|------|
| 新开/活跃 Issues | 0 |
| 已关闭 Issues | 0 |
| 新开 PRs | 1 |
| 待合并 PRs | 1 |
| 已合并/关闭 PRs | 0 |
| 新版本发布 | 0 |
| 社区评论总数 | 0 |
| 点赞总数 | 0 |

---

**报告生成时间：** 2026-08-22
**分析师备注：** 本日项目活跃度明显偏低，无重大事件发生。如该状态持续超过一周，建议在下次日报中提示维护者评估社区运营策略与开发节奏。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报
**日期：2026-08-22**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 仓库今日呈现**高强度多线并进**的开发态势：过去 24 小时共更新 15 条 Issue 与 36 条 PR，活跃度远高于日常基线。围绕 **CI 加速（T1–T4 完整系列）**、**可插拔内存/MCP**、**WebUI 通知中心重构**、**沙盒 GitHub CLI 凭证托管** 四条主线，工程团队集中提交了一批大尺寸（XL）PR。没有新的 Release 推送，但有 16 条 PR 已关闭/合并，多条长期积压的回归被 forward-port 到 `release/2026-08-17` 分支。整体看，**项目处于"基础设施收尾 + 新功能奠基"并行阶段**，代码健康度较好。

---

## 2. 版本发布

无新版本发布。建议关注以下已合并到 release 分支但尚未打 tag 的内容：
- `IRONCLAW_REBORN_WORKSPACE_ROOT` 在 1.3 上的 forward-port 修复（[PR #7804](https://github.com/nearai/ironclaw/pull/7804)）
- Clippy 1.98 lint 修复（[PR #7805](https://github.com/nearai/ironclaw/pull/7805)）
- Telegram 频道配对与草稿折叠（[PR #7803](https://github.com/nearai/ironclaw/pull/7803)）

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7809](https://github.com/nearai/ironclaw/pull/7809) | **ci: canonical preflight — one gate list, worktree-safe hooks, self-printing REPRO (T4)** | 将 `scripts/preflight-gates.sh` 确立为唯一确定性 gate 列表，供手工、pre-push、CI 三处共用，是 CI 加速系列的核心落地 |
| [#7797](https://github.com/nearai/ironclaw/pull/7797) | **docs: repo-wide agent-guidance audit — fix drift, prune 21.5k lines** | 13 个并行审计 + 6 轮修复，清理 2.15 万行冗余文档，验证所有引用路径与 HEAD 对齐 |
| [#7806](https://github.com/nearai/ironclaw/pull/7806) / [#7807](https://github.com/nearai/ironclaw/pull/7807) | **feat(sandbox): mediate GitHub CLI credentials** | 为 `system.process_sandbox.run` 增加 direct-exec + arg-vector 沙盒路径，从扩展声明解析 GitHub 凭证，**对外仅暴露调用占位符**——安全模型显著强化 |
| [#7804](https://github.com/nearai/ironclaw/pull/7804) | **fix(workspace): honor IRONCLAW_REBORN_WORKSPACE_ROOT on 1.3** | 修复长期 forward-port 缺失，CLI 启动与运行时均尊重工作区根覆盖 |
| [#7805](https://github.com/nearai/ironclaw/pull/7805) | **fix(ci): forward-port the clippy 1.98 lint fixes to 1.3** | 解决 `release/2026-08-17` 分支所有 PR 的 clippy 全量失败 |
| [#7803](https://github.com/nearai/ironclaw/pull/7803) | **fix(telegram): keep paired channels ready and collapse reply drafts** | 即使设备链接凭证缺失也保持配对的生成码 bot 活跃；个人账号工具仍需 dispatch-time auth |
| [#7796](https://github.com/nearai/ironclaw/pull/7796) | **fix(sandbox): preserve failed Railway audit appends** | Railway 代理审计追加失败时 fail-closed，保留暂存记录以供重试 |
| [#7699](https://github.com/nearai/ironclaw/pull/7699) | **feat(notifications): publish actionable run gates** | 将审批/认证/阻塞事件发布到持久化用户 Inbox，使用稳定 run/gate ID 去重 |
| [#7689](https://github.com/nearai/ironclaw/issues/7689) | **[CLOSED] Generalize the WebUI notification center and consume the server-backed inbox** | 通知中心泛化（前端通知呈现模型 + 服务端持久化收件箱消费）落地 |

**整体推进**：CI 流水线重构从规划全面进入实现；沙盒凭证托管模型进入"占位符隔离"阶段；WebUI 通知中心由"审批单点"演进为"持久化收件箱"。`release/2026-08-17` 分支的 forward-port 工作基本清扫完毕。

---

## 4. 社区热点（评论最多 / 讨论最活跃）

| 排名 | Issue / PR | 评论 | 主题 |
|---|---|---|---|
| 1 | [#7801](https://github.com/nearai/ironclaw/issues/7801) | 3 | **CI T4: canonical preflight**——围绕"preflight-gates.sh 单一权威源"的设计讨论 |
| 2 | [#7799](https://github.com/nearai/ironclaw/issues/7799) | 3 | **CI T2: nextest pipeline**——cargo-nextest 替换顺序 per-binary 测试循环 |
| 3 | [#7664](https://github.com/nearai/ironclaw/issues/7664) | 2 | **可插拔内存 over MCP**：将 Mnesis Core 作为首个消费方接入 |
| 4 | [#7800](https://github.com/nearai/ironclaw/issues/7800) | 2 | **CI T3: PR/queue convergence**——消除绿色 PR / 红色队列分歧 |
| 5 | [#7798](https://github.com/nearai/ironclaw/issues/7798) | 2 | **CI T1: setup-rust composite**——43 处分散的 toolchain 调用整合为单一 composite |

**背后诉求**：CI 加速系列（[#7798](https://github.com/nearai/ironclaw/issues/7798)–[#7801](https://github.com/nearai/ironclaw/issues/7801)）由同一位核心贡献者 henrypark133 发起，反映出项目对**"绿 PR / 红队列"发散**这一痛点的集中治理决心——通过统一门禁、统一执行器、单一 toolchain 配置三管齐下，目标是让 PR CI 与合并队列的行为可预测、可复现。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 Medium — LLM 超时策略结构性缺陷（已修复）
- **[#7783](https://github.com/nearai/ironclaw/issues/7783) [CLOSED] [bug, risk: medium]**
- **根因**：结构化输出 finalization 使用非流式 HTTP 客户端，stall 时不可见；75s finalization 截止在 60s 总墙钟 cap 触发后已不足以完成重试预算
- **影响**：单次 transport stall 即可摧毁一次完整运行
- **状态**：Issue 已关闭（2026-08-21），未见配套 fix PR 链接，需确认修复是否已合并或仍在审

### 🟡 UI 层小问题（今日新报告，无 fix PR）
- **[#7813](https://github.com/nearai/ironclaw/issues/7813)** — 聊天主页"Suggested for you"面板出现时，"What do you need help with?" 标题被裁顶——属于布局回流问题
- **[#7812](https://github.com/nearai/ironclaw/issues/7812)** — Onboarding 建议生成仅用内部搜索工具，未使用用户实际已连接的数据；建议在生成时启用只读工具访问并遵循用户级权限

### 🟡 安全/合规前置缺陷（追踪中）
- **[#7808](https://github.com/nearai/ironclaw/issues/7808)** — **Memory write path 必须在外部 provider 绑定前完成 redaction + taint 元数据**。当前写路径逐字输出对话内容，是 #7664（pluggable memory）的硬前置
- **[#7715](https://github.com/nearai/ironclaw/issues/7715) [CLOSED]** — Telegram 连接流在 bot 与个人账号之间缺少 consent 选择 UI（QA 报告，Railway 实例）

### ✅ 已修复并合入
- Clippy 1.98 lint 全量失败（[PR #7805](https://github.com/nearai/ironclaw/pull/7805)）
- 工作区根覆盖在 1.3 上失效（[PR #7804](https://github.com/nearai/ironclaw/pull/7804)）
- Telegram 配对频道与个人账号混淆（[PR #7803](https://github.com/nearai/ironclaw/pull/7803)）
- Railway 审计追加失败导致数据丢失（[PR #7796](https://github.com/nearai/ironclaw/pull/7796)）

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 优先级判断 |
|---|---|---|
| **Xquik hosted MCP 打包** | [PR #7811](https://github.com/nearai/ironclaw/pull/7811)（外部贡献者 kriptoburak） | Twitter/X 数据 + OAuth 2.1 dynamic registration + S256 PKCE，属于"MCP 生态扩展"自然增长，**很可能被纳入下一窗口** |
| **Storybook + 设计系统目录（Epic #7038 Phase 1）** | [PR #7750](https://github.com/nearai/ironclaw/pull/7750)（regular contributor rdisandro）+ [PR #7257](https://github.com/nearai/ironclaw/pull/7257) 设计系统提案 | 已重建自 current main 摆脱旧合并纠缠，**主线明确**，预计分阶段落地 |
| **OOBE 建议常驻化** | [PR #7802](https://github.com/nearai/ironclaw/pull/7802)（core contributor） | 移除 `IRONCLAW_OOBE_SUGGESTIONS` 环境变量与会话 gate，与 #7812 议题互补，**下版本概率高** |
| **可插拔内存 / Mnesis Core** | [Issue #7664](https://github.com/nearai/ironclaw/issues/7664) | 仍是 Epic 性质，依赖 #7808 写路径先落地 |
| **沙盒 GitHub CLI 凭证托管** | [PR #7810](https://github.com/nearai/ironclaw/pull/7810) | 是 #7806/#7807 的演进版（XL，低风险），与"sandbox 安全模型完整化"路线图一致 |
| **运行结果证据化评估** | [PR #7650](https://github.com/nearai/ironclaw/pull/7650) | 用确定性 runtime 证据替代纯语义判断，是 "automations 可信度"路线的关键一步 |
| **WebUI 共享页面骨架与加载原语** | [Issue #7792](https://github.com/nearai/ironclaw/issues/7792) + [PR #7794](https://github.com/nearai/ironclaw/pull/7794) | 与设计系统 Epic 互补，迁移成本低，**有望同期落地** |

---

## 7. 用户反馈摘要

由于当前更新周期内 Issues 多为工程内部规划与 QA 报告，**直接用户评论样本较少**，可提炼的反馈信号为：

- **真实用户痛点**：
  - [#7813](https://github.com/nearai/ironclaw/issues/7813) "What do you need help with?" 标题在建议面板出现时被裁顶——属于首屏视觉回归，**影响首次使用印象**。
  - [#7812](https://github.com/nearai/ironclaw/issues/7812) Onboarding 建议脱离用户实际数据——用户期望"个性化建议"，而非通用模板。
  - [#7715](https://github.com/nearai/ironclaw/issues/7715)（已关闭）Telegram 连接缺少 bot / 个人账号选择 UI——**影响隐私感与控制感**，QA 实例 (`ironclaw-qa-testing-libsql.up.railway.app`) 报告。

- **使用场景信号**：
  - 用户希望"在 WebUI 完成 IronHub agent link 全流程"，而非必须 CLI 取 URL / 装密钥（[#7516](https://github.com/nearai/ironclaw/pull/7516)）。
  - 用户希望 Onboarding 建议**生成阶段即可访问只读工具**，并受用户级权限约束，体现对"最小权限 + 主动建议"组合体验的偏好。

- **满意度信号**：通知中心泛化（[#7687](https://github.com/nearai/ironclaw/issues/7687) / [#7689](https://github.com/nearai/ironclaw/issues/7689)）被快速闭环，说明此前自动化审批通知的体验已被认可，方向正确。

---

## 8. 待处理积压（提醒维护者关注）

按风险/年龄综合排序：

| 项 | 状态 | 关注点 |
|---|---|---|
| **[PR #7456](https://github.com/nearai/ironclaw/pull/7456) fix(reborn): make durable storage profile-agnostic** | OPEN（自 2026-08-10，**已 12 天**） | XL 尺寸、medium 风险，根除 Reborn profile 隔离层；与 #7804 工作区根覆盖直接关联，是 1.3 release blocker 的潜在候选，**优先级应被提升** |
| **[PR #7491](https://github.com/nearai/ironclaw/pull/7491) feat(coding): omp core-tool contract** | OPEN（自 2026-08-11，**已 11 天**） | XL 尺寸、medium 风险，将编码工具面收敛到 6 个精确名称（`read/write/edit/glob/grep/bash`），移除旧 `builtin__*` 拼写——属于**破坏性变更**，需要明确的迁移说明与版本号 |
| **[PR #7516](https://github.com/nearai/ironclaw/pull/7516) feat(webui): operator surface for IronHub agent link** | OPEN（自 2026-08-12，**已 10 天**） | XL、low 风险；目前唯一补齐 WebUI→IronHub 闭环的 PR，建议进入 review 队列 |
| **[PR #7700](https://github.com/nearai/ironclaw/pull/7700) feat(notifications): publish authoritative run outcomes** | OPEN（自 2026-08-17） | XL、低风险、人已验证；与 #7699 互补，建议同步合并以完成"通知收件箱"双面闭环 |
| **[Issue #7808](https://github.com/nearai/ironclaw/issues/7808) Memory write path: redaction + taint metadata** | OPEN（2026-08-21） | **作为 #7664 强前置**，在外部 provider 绑定前必须落地，否则有数据泄露风险 |
| **[PR #7802](https://github.com/nearai/ironclaw/pull/7802) fix(webui): make OOBE suggestions always on** | OPEN（2026-08-21） | 与 #7812 议题直接呼应，建议快速合并并配套打磨 |
| **[Issue #7793](https://github.com/nearai/ironclaw/issues/7793) Migrate remaining Settings/Admin feedback banners to InlineNotice** | OPEN（2026-08-21） | UI 一致性收尾，可与 #7794 一并推进 |

**积压总览**：3 条 XL 级 PR（#7456, #7491, #7516）等待 review 进入决策窗口，建议核心维护者本周集中过审。

---

### 📊 项目健康度速览

| 指标 | 今日读数 | 趋势判断

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-22

> 数据范围：2026-08-21 ~ 2026-08-22  
> 数据源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 一、今日速览

今天是 LobsterAI 项目的**版本集成日**。过去 24 小时内项目围绕 `release/2026.8.21` 分支完成了向 `main` 的合并（#2519），同步合入了 DSH（DeepSeek Harness）运行时升级、使用分析埋点、资料库交互优化等共 6 项功能/修复类 PR。同时清理了一批长期未更新的「陈旧」Issue 与 PR（5 条于 2026-04 创建的 Issue/PR 被批量标记关闭）。整体活跃度**偏高**，但绝大多数动作属于版本收尾与陈旧治理，新功能开发节奏平稳。社区侧目前只有 1 条 PR（#1550）仍处 OPEN 状态等待审核。

---

## 二、版本发布

⚠️ 今日**无新的 GitHub Release 标签**发布，但代码层面已完成 `release/2026.8.21` → `main` 的合并。这意味着构建产物可能在内部/CI 通道先行推进，正式 Release Notes 待补。

核心变更预览（来源 [PR #2519](https://github.com/netease-youdao/LobsterAI/pull/2519)）：

| 维度 | 变更 |
|------|------|
| **DSH 运行时** | 升级至 `0.1.1-rc.1`（[#2516](https://github.com/netease-youdao/LobsterAI/pull/2516)） |
| **Windows 集成** | 可靠性改进 |
| **隐私分析** | 新增 DSH 启用开关与 Workbench 打开行为埋点（fire-and-forget，不向 IPC 调用方抛错） |
| **架构调整** | 将 DSH 分析事件构建从 main 进程迁移到 renderer 侧服务（[#2518](https://github.com/netease-youdao/LobsterAI/pull/2518)） |
| **资料库体验** | 预览弹窗适配安全区、搜索框一键清空、删除入口收敛（[#2514](https://github.com/netease-youdao/LobsterAI/pull/2514)） |
| **资料库分享/收藏** | Unicode 文件名保留、收藏状态即时更新与失败回滚（[#2517](https://github.com/netease-youdao/LobsterAI/pull/2517)） |

迁移提示：DSH 分析为新增遥测项，关注隐私策略文档变更；旧版文件名展示规则有调整，已兼容历史版本。

---

## 三、项目进展

今日合并/关闭的重要 PR 共 **12 条**，按主题分组：

### 1. 版本集成与基础设施（4 条）
- [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519) — `release/2026.8.21` 合入 `main`，完成本周版本基线
- [#2516](https://github.com/netease-youdao/LobsterAI/pull/2516) — DSH 升级至 `0.1.1-rc.1`
- [#2515](https://github.com/netease-youdao/LobsterAI/pull/2515) — DSH 启用/Workbench 打开埋点，规范事件形状并补全设计文档
- [#2518](https://github.com/netease-youdao/LobsterAI/pull/2518) — 将埋点构建逻辑从 main 进程下沉到 renderer 侧，避免 IPC 路径污染

### 2. 资料库体验优化（3 条）
- [#2514](https://github.com/netease-youdao/LobsterAI/pull/2514) — 本地产物预览弹窗适配不同窗口安全区；删除入口收敛；空状态/无结果状态区分；中英文文案与设计文档同步
- [#2517](https://github.com/netease-youdao/LobsterAI/pull/2517) — 分享打包保留 Unicode 文件名、收藏状态即时更新与失败回滚、订阅与发布额度限制弹窗统一
- [#2513](https://github.com/netease-youdao/LobsterAI/pull/2513) — `feat/2026.8.17 library` 系列整合（具体变更以合入 commit 为准）

### 3. 性能与稳定性修复（4 条，均标记 stale 后关闭）
- [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) — 修复 `setConfig` 仅在含 `settings` 时刷新 chat handler，导致钉钉/飞书等 IM 凭据保存后配置不生效
- [#1218](https://github.com/netease-youdao/LobsterAI/pull/1218) — 定时任务列表改用 `nextRunAtMs + 创建时间` 排序，解决新建任务随机落位问题
- [#1219](https://github.com/netease-youdao/LobsterAI/pull/1219) — 消除 `CoworkSessionItem`/`CoworkSessionList`/`CoworkSessionDetail` 的无效重渲染
- [#1220](https://github.com/netease-youdao/LobsterAI/pull/1220) — `recentChats`/`conversationSearch` 由 N+1 查询改为批量聚合
- [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) — i18n 硬编码修复 + Agent 弹窗 Escape 关闭 + 删除防重复点击

**整体评价**：项目在「运行时升级 + 资料库打磨 + 性能治理」三条线并行推进，处于**稳步迭代**阶段。陈旧 PR 的批量关闭有助于降低维护噪声。

---

## 四、社区热点

| 排名 | Issue/PR | 评论数 | 关注点 |
|------|----------|--------|--------|
| 1 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | 2 | i18n 硬编码/UX 缺陷（已被 #1224 修复并随版本合入） |
| 2 | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | 2 | 网关偶发重启（标记 stale 关闭） |
| 3 | [#2519](https://github.com/netease-youdao/LobsterAI/pull/2519) | — | 本周版本基线合入 |

**诉求分析**：
- 用户对**国际化一致性**与**细节交互（Escape 关闭、防误触）**敏感度高，#1223 之所以获得关注是因为它揭示了 `AGENTS.md` 中「禁止硬编码」规范被违反的实质问题，而不仅是一个小瑕疵。
- 网关稳定性问题 #1217 的 stale 关闭引发担忧：偶发性问题若无日志留存或回归测试覆盖，关闭后再次出现的概率较高。

---

## 五、Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | 修复 PR |
|---------|-------|------|------|---------|
| 🟠 中 | [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | 2026.3.26 版本下网关偶发重启（一天 3-5 次，Win10），日志已附 | ⚠️ Closed (stale)，**未见对应修复 PR** | ❌ 无 |
| 🟡 中 | [#1223](https://github.com/netease-youdao/LobsterAI/issues/1223) | `CoworkPromptInput` 硬编码中文 + Agent 弹窗无 Escape 关闭 + 删除无防重复点击 | ✅ Closed | ✅ [#1224](https://github.com/netease-youdao/LobsterAI/pull/1224) |

⚠️ **风险提示**：[#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) 作为可观测性较强的稳定性问题（提供日志附件、复现频率），被作为 stale 关闭而非修复，建议维护者在下一个补丁版本中复核——尤其是 DSH 升级与 IM chat handler 重建修复（#1215）是否已间接覆盖此场景。

---

## 六、功能请求与路线图信号

今日无新增功能请求 Issue，但从已合并 PR 可观察**产品方向**：

1. **隐私可控的遥测体系正在成型**（#2515 + #2518 + 设计文档）：DSH 启用与 Workbench 使用埋点规范已建立，预示后续模块会沿用同一模式。
2. **资料库/产物管理是当前打磨重点**：单日 3 条 PR（#2513/#2514/#2517）集中在预览、分享、收藏、删除、搜索等高频路径的体验细化。
3. **性能治理进入收尾期**：Cowork 会话列表与消息检索的 N+1、无效重渲染问题相继修复，对流式输出场景的卡顿应有可感知改善。

下一版本（推测 `2026.8.x` 补丁或 `2026.9`）可能纳入的项：
- IM chat handler 重建逻辑（#1215）
- 定时任务列表排序（#1218）
- Cowork 性能优化（#1219/#1220）
- Agent 弹窗 UX（#1224）

---

## 七、用户反馈摘要

从今日活跃 Issue 中提炼：

- **国际化体验是硬伤**：「英文用户提示词混入中文『输入文件』」（#1223）反映出 i18n 规范执行不到位，开发者贡献流程可能缺乏 lint 校验。社区贡献者 MaoQianTu 自发修复并提交 #1224，体现良好的协作文化。
- **稳定性问题被低估**：#1217 报告者附带了完整日志压缩包和复现频率（一天 3-5 次），属于**高质量 Bug 报告**，但被作为 stale 关闭——这可能让认真反馈的用户感到沮丧，建议在 stale 关闭模板中引导用户确认是否仍存在并提供新日志。
- **暂未见明显的满意度正面反馈**集中在今日窗口。

---

## 八、待处理积压

| 编号 | 类型 | 标题 | 创建日期 | 等待时长 | 备注 |
|------|------|------|---------|---------|------|
| [#1550](https://github.com/netease-youdao/LobsterAI/pull/1550) | PR (OPEN) | fix(scheduledTask): 投递模式为"不通知"时去除 `channel/to` 字段 | 2026-04-07 | **约 4.5 个月** | 🟠 唯一 OPEN PR，分析完整、根因清晰，应优先 review |
| [#1217](https://github.com/netease-youdao/LobsterAI/issues/1217) | Issue (Closed stale) | 网关偶发重启 | 2026-04-01 | 已关闭 | 🔴 建议复核是否在新版已隐式修复 |
| [#1215](https://github.com/netease-youdao/LobsterAI/pull/1215) | PR (Closed stale) | IM chat handler 重建 | 2026-04-01 | 已关闭 | 🟡 修复内容合理，应评估是否已随其他 PR 合入 |

🚨 **重点提醒维护者**：
1. **#1550 是当前唯一 OPEN 的 PR**，且修复路径清晰（`TaskForm.tsx` 已有正确实现可参考），不应继续积压；
2. 今日批量关闭的 5 条 stale PR 中，#1215、#1218、#1219、#1220、#1224 的修复点**很可能并未真正合并到 main**，需要在 git log 中确认——若未合并，建议重新打开或在新版本中重新 cherry-pick。

---

### 健康度评分（满分 5.00）

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐⭐⭐☆ 4.0 | 单日 13 PR 更新，1 次 release 合并 |
| 社区响应 | ⭐⭐☆☆☆ 2.5 | 陈旧 Issue/PR 批量关闭但优质反馈未被妥善处置 |
| 透明度 | ⭐⭐⭐☆☆ 3.0 | 版本合入但无正式 Release Tag 与 Notes |
| 稳定性治理 | ⭐⭐⭐☆☆ 3.0 | 性能优化推进，但网关重启等稳定性问题未根治 |
| **综合** | **⭐⭐⭐☆☆ 3.3** | 项目处于有序迭代期，建议加强陈旧治理的二次确认流程 |

---

*报告生成时间：2026-08-22 · 数据快照来自 GitHub REST API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-22

---

## 1. 今日速览

Moltis 项目在 2026-08-22 展现出**中高度活跃**的开发节奏，过去 24 小时内新增 2 个 Bug 报告与 8 个 Pull Request，其中 7 个仍处于待合并状态、1 个被关闭。开发者 **rubenssoto** 是当日最活跃贡献者，单人提交了 4 个 PR，集中在 WhatsApp、Browser（Obscura）与 Cron 子系统的修复与功能增强上。当日无新版本发布，整体方向以**稳定性修复与跨平台兼容性**为主，未见重大新功能落地。

---

## 2. 版本发布

**当日无新版本发布。** 项目最近一次发版情况可关注 GitHub Releases 页面：[github.com/moltis-org/moltis/releases](https://github.com/moltis-org/moltis/releases)

---

## 3. 项目进展

### 当日关闭 PR（1 个）
- **[#1220 fix(whatsapp): render Markdown in outbound messages](https://github.com/moltis-org/moltis/pull/1220)** — 已被关闭（非合并）。该 PR 旨在将模型生成的 Markdown 在 WhatsApp 出站消息发送前即时转换为 WhatsApp 原生标记格式（同时保留会话历史与 Web UI 中的 Markdown 原貌）。由于状态显示为 CLOSED 而非 MERGED，可能被替代方案或更优实现取代，建议关注后续是否出现同类 PR。

### 待合并的重要 PR
- **[#1208 fix(cron): honor heartbeat active hours when the scheduler fires](https://github.com/moltis-org/moltis/pull/1208)** — 修复了 `heartbeat.active_hours` 配置项始终未生效的核心 Bug。代码层面，`is_within_active_hours` 函数已编写、文档化并完成单元测试，但调用链断裂，调度器从未引用该函数。此 PR 将其真正接入 `process_due_jobs` 流程，是当日**最有实质性价值的修复**。
- **[#1228 fix(whatsapp): persist inbound files for local tools](https://github.com/moltis-org/moltis/pull/1228)** — 将入站 WhatsApp 文档/图片持久化为稳定 `local_path`，使本地工具可正常访问（设置 20MB 上限与依赖零新增的边界约束）。
- **[#1227 fix(browser): enable Obscura stealth mode by default](https://github.com/moltis-org/moltis/pull/1227)** — 默认开启 Obscura 隐身模式，并新增 `tools.browser.obscura_stealth` 配置项以保留回退能力。
- **[#1226 fix(cron): deliver scheduled output to the originating chat](https://github.com/moltis-org/moltis/pull/1226)** — 为 cron 计划任务新增 `payload.deliver_to_current_chat` 快捷方式，可解析网关通道上下文以回传输出至原始聊天窗口。
- **[#1222 fix(web): validate sandbox image requests](https://github.com/moltis-org/moltis/pull/1222)** — 在容器或 Dockerfile 使用前校验镜像引用与包名，并将权限收敛至管理员。
- **[#1225 fix(i18n): update and improve zh-TW Traditional Chinese locale](https://github.com/moltis-org/moltis/pull/1225)** — 由社区贡献者 **PeterDaveHello** 提交的繁体中文翻译完善，覆盖 `connectors.ts` 等多模块，显著提升术语一致性与完整度。

**整体评估：** 项目在 WhatsApp 集成、浏览器隐身、cron 调度、i18n、sandbox 安全等多个维度同步推进，开发健康度良好，但合并节奏偏慢（7 PR 待审），建议维护者加快 review 周期。

---

## 4. 社区热点

当日所有 Issues 与 PR 的评论数均为 0，**尚未形成讨论热度**。从内容相关性看，潜在热点集中在以下两条：

- **[Issue #1223 heartbeat active_hours has no effect on a default config](https://github.com/moltis-org/moltis/issues/1223)** — 由于 PR #1208 正在解决同类根因，该 Issue 很可能在 PR 合入后被一并关闭，预期讨论热度将随之上升。
- **[Issue #1224 Tools stop working in shared Slack channels](https://github.com/moltis-org/moltis/issues/1224)** — 用户首次报告，描述了共享 Slack 频道中工具调用失效的 Bug。该类问题影响核心协作场景，预期将吸引其他用户跟进复现与评论。

**用户诉求分析：** 社区当前最强烈的诉求集中于"配置项真正生效"（Issue #1223）与"平台集成稳定性"（Issue #1224），反映出用户对 Moltis 在生产环境中**配置可预期性**与**多平台一致性**的高度期待。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue/PR | 描述 | 状态 |
|------|----------|------|------|
| 🔴 高 | [Issue #1224](https://github.com/moltis-org/moltis/issues/1224) | 共享 Slack 频道内工具完全失效，影响核心集成场景 | 已报告，**暂无 fix PR** |
| 🟠 中 | [Issue #1223](https://github.com/moltis-org/moltis/issues/1223) | `heartbeat.active_hours` 配置无效果，`end: "24:00"` 边界解析错误 | 已报告，**已有 fix PR [#1208](https://github.com/moltis-org/moltis/pull/1208)** |
| 🟡 低 | [PR #468](https://github.com/moltis-org/moltis/pull/468) | Windows 下 shell hooks 因 `sh -c` 不可用而失败 | 长期未合并（已 5 个月） |

**建议维护者优先合并 #1208**，可同时关闭 #1223 关联根因（虽然 PR 描述为 Closes #1205，与 #1223 描述的根因高度吻合）。

---

## 6. 功能请求与路线图信号

当日未出现明确的"Feature Request"标签 Issues。但从 PR 标题与描述可推断以下**潜在路线图信号**：

- **WhatsApp 富媒体能力增强** — PR #1228（入站文件持久化）与 #1220（Markdown 渲染，已关闭）共同指向 WhatsApp 工具链的成熟化。建议维护者评估是否在下一版本中正式发布 WhatsApp v2 工具集。
- **浏览器反检测能力** — PR #1227 默认开启 Obscura 隐身模式，表明 Moltis 在 Web 自动化/数据采集场景下正逐步强化反指纹能力。
- **Cron 投递智能化** — PR #1226 引入 `deliver_to_current_chat` 表明计划任务从"纯输出"向"上下文感知输出"演进。
- **多语言本地化** — PR #1225 反映繁体中文社区贡献者活跃，暗示 i18n 路线图正在被社区驱动推进。

---

## 7. 用户反馈摘要

由于当日 Issues 评论数均为 0，暂无深入的社区讨论可供提炼。但从 Issue 内容本身可识别以下用户痛点：

- **痛点 A：配置失真（来自 Issue #1223）** — 用户基于文档设置了 `active_hours`，期望在指定时段外停止心跳任务，但实际行为是"全天运行"。文档承诺与代码实现不一致，是典型的**信任损耗型 Bug**。
- **痛点 B：平台集成脆弱性（来自 Issue #1224）** — 共享 Slack 频道中工具停止工作，说明 Moltis 在多租户/共享场景下的状态隔离或权限处理存在缺陷。该场景对企业用户尤为敏感。
- **场景信号：** 提交 Issue 的用户（affanshahid、Lstarsky0）均使用了预检清单，表明 Moltis 用户群体具备较强的技术素养，反馈质量较高，对项目迭代具有正向价值。

---

## 8. 待处理积压

### 长期未响应 PR
- **[PR #468 fix(plugins): use cmd.exe on Windows for shell hooks](https://github.com/moltis-org/moltis/pull/468)** — 创建于 **2026-03-23**，已开放约 5 个月。提交者 **jmikedupont2** 已完成 Windows 10 实测与 CI 验证，但仍未被合并。该 PR 修复的是 Windows 平台兼容性核心问题，对 Windows 用户有实质意义。**强烈建议维护者 review 并合并。**

### 待合并 PR 总览（7 个）
| 编号 | 标题 | 创建日期 |
|------|------|----------|
| [#1228](https://github.com/moltis-org/moltis/pull/1228) | fix(whatsapp): persist inbound files for local tools | 2026-08-21 |
| [#1227](https://github.com/moltis-org/moltis/pull/1227) | fix(browser): enable Obscura stealth mode by default | 2026-08-21 |
| [#1226](https://github.com/moltis-org/moltis/pull/1226) | fix(cron): deliver scheduled output to the originating chat | 2026-08-21 |
| [#1225](https://github.com/moltis-org/moltis/pull/1225) | fix(i18n): update and improve zh-TW Traditional Chinese locale | 2026-08-21 |
| [#1222](https://github.com/moltis-org/moltis/pull/1222) | fix(web): validate sandbox image requests | 2026-08-20 |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | fix(cron): honor heartbeat active hours when the scheduler fires | 2026-08-17 |
| [#468](https://github.com/moltis-org/moltis/pull/468) | fix(plugins): use cmd.exe on Windows for shell hooks | **2026-03-23** ⚠️ |

---

## 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 开发活跃度 | ⭐⭐⭐⭐ | 8 个 PR/日，rubenssoto 表现突出 |
| 社区参与度 | ⭐⭐ | 缺乏评论互动，Issue 反馈及时但讨论未展开 |
| 合并节奏 | ⭐⭐ | 积压 7 个待合并 PR，含 1 个超 5 个月长期项 |
| Bug 响应 | ⭐⭐⭐ | Bug 已报告但部分尚无 fix，#1224 需关注 |
| 文档/翻译 | ⭐⭐⭐⭐ | i18n 社区驱动活跃 |

**总评：项目整体处于稳步迭代期，建议维护者重点优化 PR review SLA，并优先解决 Windows 兼容性长期积压（PR #468）与心跳配置失效（Issue #1223 / PR #1208）。**

---

*报告生成时间：2026-08-22 · 数据来源：[GitHub API](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-08-22

> 数据来源：github.com/agentscope-ai/CoPaw（仓库实际名为 QwenPaw，Issues/PR 链接均指向 agentscope-ai/QwenPaw）
> 统计窗口：过去 24 小时（截至 2026-08-22）

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库共发生 **34 条 Issue 更新**（19 新开/活跃，15 关闭）和 **36 条 PR 更新**（21 待合并，15 合并/关闭），社区活跃度处于近期高位。无新版本发布。**Bug 报告密度较高**（含 MCP 断连、嵌入健康检查超时、WebView2 渲染崩溃、history.db 膨胀至 7.6GB 等多个高严重度问题），同时 **UI/UX 类功能请求集中爆发**（折叠推理过程、隐藏工具调用、会话排序、文件上传等），反映 v2.1 系列刚发布后的真实用户反馈正在快速回流。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前主线版本为 **v2.1.1-beta.1**（[Issue #7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) 提到），稳定版 v2.1.0。PR [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) `chore: bump the version to v2.1.1b2` 已关闭但未合并，b2 进度待跟进。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) | perf(console): keep long chat sessions responsive | 关闭 ✅ — 优化长会话流式响应与 Markdown 重渲染性能 |
| [#7200](https://github.com/agentscope-ai/QwenPaw/pull/7200) | chore: bump the version to v2.1.1b2 | 关闭 — 版本号变更未合并 |
| [#7205](https://github.com/agentscope-ai/QwenPaw/pull/7205) | test(coverage): fix Windows integration coverage always reading 0 | 关闭 ✅ — 修复 Windows nightly 集成覆盖率一直显示 0 的静默故障 |
| [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) | feat(hub): add self-hosted multi-user Hub | 关闭 — 自托管多用户 Hub 提案（未合并，需讨论） |

另外，多个 **历史 Feature 跟踪 Issue 集中关闭**（[#5580](https://github.com/agentscope-ai/QwenPaw/issues/5580)、[#5437](https://github.com/agentscope-ai/QwenPaw/issues/5437)、[#5433](https://github.com/agentscope-ai/QwenPaw/issues/5433)、[#5419](https://github.com/agentscope-ai/QwenPaw/issues/5419)、[#5007](https://github.com/agentscope-ai/QwenPaw/issues/5007)、[#5006](https://github.com/agentscope-ai/QwenPaw/issues/5006)、[#5005](https://github.com/agentscope-ai/QwenPaw/issues/5005)、[#5004](https://github.com/agentscope-ai/QwenPaw/issues/5004)），对应 Sprint M1–M3/W2/W3 的前端/后端单元测试任务已陆续合入，标志着**测试覆盖度提升计划接近收官**。

---

## 4. 社区热点（评论数最多）

| 排名 | Issue | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | 6 | **MCP 客户端在 server 重启后无法自动恢复**（`mcp-session-id` 失效）— 高严重度，影响 streamable_http 用户 |
| 2 | [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 4 | **2.0.1 长时间闲置后无响应/卡死**（已关闭）— 长期稳定性投诉 |
| 3 | [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 3 | **工具调用 404** — 流式会话 `/offload` 接口路径失效 |
| 4 | [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | 3 | **embedding 健康检查超时且超时硬编码** — 触发 BM25-only 降级 |
| 5 | [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | 2 | **v2.1.1-beta.1 `/compact` pydantic ValidationError** — 已确认回归 |
| 6 | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | 2 | **WebView2 渲染进程启动 7 秒后崩溃**（v2.0.0+post.4 回归） |
| 7 | [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | 2 | **send_file_to_user 中文文件名出现 percent-encoded mojibake** |
| 8 | [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | 2 | **history.db 被 recall_history 撑爆到 7.6GB**（已关闭） |

**诉求分析**：热点集中在 **MCP 可靠性**、**长时运行稳定性**、**前端 UI 在边缘场景下的崩溃/编码问题**，且几乎都跨版本存在 — 表明回归测试和跨版本烟测还需加强。

---

## 5. Bug 与稳定性（按严重程度）

### 🔴 高严重度（建议优先修复）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#7156](https://github.com/agentscope-ai/QwenPaw/issues/7156) | embedding health check 启动时超时（>5s）+ 超时硬编码无配置项 | ❌ |
| [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) | MCP 后端重启后客户端无法自动恢复 | ❌ |
| [#7168](https://github.com/agentscope-ai/QwenPaw/issues/7168) | history.db 被撑爆至 7.6GB 且重复落库 | ❌（已关闭） |
| [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) | WebView2 渲染进程崩溃（v2.0.0+post.4 回归） | ❌ |
| [#7206](https://github.com/agentscope-ai/QwenPaw/issues/7206) | v2.1.1-beta.1 `/compact` 回归（pydantic ValidationError） | ❌ |

### 🟡 中严重度

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#7016](https://github.com/agentscope-ai/QwenPaw/issues/7016) | 工具调用 404（offload 接口路径） | ❌ |
| [#7210](https://github.com/agentscope-ai/QwenPaw/issues/7210) | built-in 工具全部启用但函数 schema 未注入 | ❌ |
| [#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) | 桌面端启动 hang 约 85s | ❌ |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | 2.0.1 闲置后卡死（已关闭） | — |
| [#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) | 2.1 网页版 agent 自动搜索记忆跨会话错乱 | ❌ |

### 🟢 低严重度

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#7136](https://github.com/agentscope-ai/QwenPaw/issues/7136) | 文件卡片中文文件名 percent-encoding | ❌ |
| [#7199](https://github.com/agentscope-ai/QwenPaw/issues/7199) | daily_paper `write_atomic` 在 PDF 含 surrogate 字符时崩溃 | ❌ |

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 是否已有 PR | 入版本可能性 |
|---|---|---|---|
| [#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203) | 可选择是否显示工具调用信息 | ❌ | 🟢 高（UX 呼声集中） |
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 推理过程默认折叠开关 | ❌ | 🟢 高（与 #7203 同一作者，多个用户同样诉求） |
| [#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198) | 任务模式下中间产物不应触发审批 | ❌ | 🟡 中（涉及审批流程重构） |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | 按 provider 拆分 image/video/audio 上限 | ❌ | 🟡 中 |
| [#7197](https://github.com/agentscope-ai/QwenPaw/issues/7197) | MCP 工具授权规则支持自定义频道 | ❌ | 🟡 中 |
| [#7204](https://github.com/agentscope-ai/QwenPaw/issues/7204) | 如何增加自定义 tool | ❌ | 🟢 高（文档补全） |
| [#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195) | 桌面模式对话窗口全屏后被任务栏遮挡 | ❌ | 🟢 高（简单 CSS 修复） |

**已存在对应方向 PR**：
- [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) `fix(console): show custom profile markdown files` — 回应自定义 persona 文件可见性
- [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) `feat: add reranker UI config panel` — 记忆/检索相关 UI 增强
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) `Add per-session model overrides` — 会话级模型切换
- [#6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) `session-scoped multi project directories` — 会话级多项目目录

---

## 7. 用户反馈摘要

### 🔥 集中的痛点
1. **视觉噪声严重**：多位用户（[#7203](https://github.com/agentscope-ai/QwenPaw/issues/7203)、[#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196)、[#7198](https://github.com/agentscope-ai/QwenPaw/issues/7198)）连续反馈"工具调用 + 推理过程 + 审批弹窗"三重 UI 噪声严重影响审合同、做研报、夜间无人值守等真实工作场景。
2. **会话/列表排序反人类**：[#4816](https://github.com/agentscope-ai/QwenPaw/issues/4816) 用户指出"主流 agent 产品无一会话按非时间排序"，建议参考 workbuddy、trae、豆包、元宝、openclaw。
3. **跨会话记忆错乱**：[#7193](https://github.com/agentscope-ai/QwenPaw/issues/7193) 报告 agent 在多轮中断恢复后"串会话"，是隔离/路由层潜在问题。
4. **Windows 桌面端体验**：[#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) WebView2 崩溃、[#6430](https://github.com/agentscope-ai/QwenPaw/issues/6430) 启动 hang 85s、[#7195](https://github.com/agentscope-ai/QwenPaw/issues/7195) 全屏遮挡 — Windows 桌面端的稳定性和细节体验明显落后于 Web 版。

### ✨ 满意/正向
- **前端测试覆盖度计划**已成功落地，多个 M1–M3 Sprint 的 PR 合并，PR 描述中提到"171/135/118/115 用例零源码改动"，团队工程纪律良好。
- **长时间会话性能**通过 [#7176](https://github.com/agentscope-ai/QwenPaw/pull/7176) 得到针对性优化（即使该 PR 已被关闭，已合并入主线）。

---

## 8. 待处理积压（维护者关注提醒）

| 类型 | Issue/PR | 打开时间 | 风险 |
|---|---|---|---|
| 🔴 长期未修 bug | [#6524](https://github.com/agentscope-ai/QwenPaw/issues/6524) MCP 断连恢复 | 2026-07-28（25 天） | 影响所有 streamable_http 用户 |
| 🔴 长期未修 bug | [#6427](https://github.com/agentscope-ai/QwenPaw/issues/6427) WebView2 崩溃 | 2026-07-24（29 天） | Windows 桌面端近乎不可用 |
| 🟡 长期未合 PR | [#7113](https://github.com/agentscope-ai/QwenPaw/pull/7113) `feat(tools)` 事务化 apply_patch / PTY / 进程捕获 | 4 天 | 工具层能力扩展，待 review |
| 🟡 长期未合 PR | [#7167](https://github.com/agentscope-ai/QwenPaw/pull/7167) `feat(creator) 1.1.0` 大型聚合 PR | 2 天 | Creator 子项目大量变更，需拆分 review |
| 🟡 长期未合 PR | [#6607](https://github.com/agentscope-ai/QwenPaw/pull/6607) 桌面全局热键浮窗 | 2026-07-31（22 天） | 桌面端体验增强 |
| 🟡 长期未合 PR | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) per-session model override | 2026-07-12（41 天） | 用户高频诉求方向 |
| 🟢 大型新功能提案 | [#7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) 自托管多用户 Hub（已关闭未合） | — | 战略级方向，需架构讨论 |

---

### 📊 健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 70 条更新/日，社区参与度高 |
| 响应及时性 | ⭐⭐⭐ | 关闭率 ~44%，但多个高严重度 bug 长期未修 |
| 回归控制 | ⭐⭐ | v2.1.1-beta.1 已出现 compact 回归、Windows 渲染崩溃 |
| 路线图清晰度 | ⭐⭐⭐⭐ | Creator 1.1.0、Hub、单元测试多线并进 |
| 用户体验闭环 | ⭐⭐ | UI 噪声、跨会话隔离、桌面端稳定性三类高频反馈尚未收敛 |

**结论**：项目处于 v2.1 系列快速迭代期，新功能交付能力强、测试纪律良好，但**回归与稳定性问题需要一次专门的质量回滚/封板**；UI 噪声和桌面端体验建议在 v2.1.2 集中收口。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-22

## 📌 今日速览

ZeroClaw 今日保持高强度的 issue 流转（50 条更新，活跃率 98%）与 PR 推进（50 条），但**今日无新版本发布**，且 PR 合并率仅约 4%（2/50），大量 XL 级别功能 PR 仍处于待评审状态。今日热点高度集中于 **沙箱与命令执行策略 (#10165, #10164)**、**ZeroCode TUI 稳定性**（#10230 栈溢出、#10121 ACP 轮次丢失）与 **Docker/CI 安全元数据强制 (#10173)**，反映出社区正在系统性地补齐"安全边界 + 用户体验"两条主线。整体而言项目活跃度处于高位，但合并/关闭节奏明显落后于新问题涌入速度，建议维护者关注评审积压。

---

## 🚀 版本发布

今日 **无新版本发布**。最近一次发版（数据中未列）后，仓库仍处于高频迭代的 feature/fix 阶段，未进入冻结窗口。

---

## 📈 项目进展

### 已关闭/合并
| # | 标题 | 影响 |
|---|------|------|
| [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) | SECURITY.md 文档与已删除的 CI job 不一致 | **已关闭**：完成文档-CI 对齐；维护者接受并完成清理，标志安全文档治理回归正常。 |

### 重要合并/推进中（PR）
- **[#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) `fix(acp)`**: 持久化中断的 Code/ACP 轮次进度（XL，风险 high）。直接回应 S0 严重级问题 #10121，是数据可恢复性的关键修复。
- **[#10203](https://github.com/zeroclaw-labs/zeroclaw/pull/10203) `fix(log)`**: 把 `log` facade 记录桥接到 tracing 管道（risk high），解决 #10202 中 whatsapp-rust 等依赖日志静默丢失问题——可观测性的关键补丁。
- **[#10176](https://github.com/zeroclaw-labs/zeroclaw/pull/10176) `ci(docker)`**: 强制 Alpine 非 root 镜像元数据（risk high），闭环 #10173 与 #10095。
- **[#10192](https://github.com/zeroclaw-labs/zeroclaw/pull/10192) `docs(maintainers)`**: 按 RFC #9990 校准风险评审政策——治理层面的关键对齐。
- **[#10236](https://github.com/zeroclaw-labs/zeroclaw/pull/10236) `fix(desktop)`**: 为桌面守护进程日志设置 8 MiB 上限，由独立 supervisor 监管——避免日志爆炸。
- **[#10208](https://github.com/zeroclaw-labs/zeroclaw/pull/10208) `fix(tests)`**: 修复 Windows 平台测试失败，添加 `bash_path()` 助手。
- **[#10204](https://github.com/zeroclaw-labs/zeroclaw/pull/10204) `fix(clippy)`**: 适配 Rust 1.98 的诊断（`chunks_exact` → `as_chunks::<4>()`）。

**今日推动的整体进展**：安全治理（风险评审政策 + Docker 元数据 + 插件进程隔离 #10093）+ 可观测性（log 桥接）+ ACP 数据持久化三条主线均有 PR 落地，向 v1.x 稳定性目标前进了一步，但合并速度远低于 issue 产生速度。

---

## 🔥 社区热点（按评论数）

| 排名 | 条目 | 评论 | 类型 |
|---|---|---|---|
| 1 | [#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165) independent delegate 绕过 `block_high_risk_commands` | 3 | S0 安全 |
| 2 | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) SECURITY.md 与 CI 脱节 | 3 | 文档（已关） |
| 3 | [#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068) 交互式 agent 上限锁死在 32k | 3 | 运行时 |
| 4 | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) SOP 引擎先推进后拒绝 | 3 | S1 守护进程 |
| 5 | [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) Option-Backspace 单词删除 | 3 | ZeroCode UX |
| 6 | [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) 默认 stream_mode 改为 partial | 2 | 通道体验 |
| 7 | [#10162](https://github.com/zeroclaw-labs/zeroclaw/issues/10162) 插件安装不可原子化 | 2 | 架构 |
| 8 | [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) 弃用 Rolling 存储策略 | 2 | 观测/架构 |
| 9 | [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) ZeroCode 文件浏览器搜索模式 | 2 | ZeroCode UX |

**诉求分析**：热度集中于**安全边界正确性**（#10165、#10066、#10164）和**ZeroCode 用户体验缺陷**（#10059、#10058、#10086、#10062、#10061）。安全议题多为 P1/S0，体现社区对沙箱策略执行的零容忍；ZeroCode 议题反映终端用户对 macOS 风格快捷键、可选择/可复制文本、跨会话状态隔离的真实期待。

---

## 🐛 Bug 与稳定性

按严重程度排序（已标注 fix PR 的标记 ✅）：

### S0 — 数据丢失 / 安全风险
- **[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)** 独立 delegate 绕过自身 `block_high_risk_commands`（S0，risk high，P1）— 沙箱策略失效。**无 fix PR**。⚠️
- **[#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121)** ZeroCode/ACP 中断时部分轮次消失（S0，risk high，P1）— ✅ **fix PR [#10197](https://github.com/zeroclaw-labs/zeroclaw/pull/10197) 已开（XL）**。

### S1 — 工作流阻塞
- **[#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)** SOP 引擎先推进后记录 schema 拒绝（S1，risk high，P0）— **无 fix PR**。⚠️
- **[#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230)** Quickstart 应用时栈溢出（S1，risk high，P1）— **无 fix PR**。⚠️
- **[#10061](https://github.com/zeroclaw-labs/zeroclaw/issues/10061)** 提供商拒绝的图像污染后续视觉轮次（S1，risk high，P1）— **无 fix PR**。⚠️

### S2 — 降级行为
- **[#10068](https://github.com/zeroclaw-labs/zeroclaw/issues/10068)** 交互 agent 上下文锁死 32k（无视 131072 配置）。
- **[#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)** `block_high_risk_commands = false` 在父路径不被尊重（risk high，P1）。
- **[#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175)** Google TTS API key header 未标 sensitive（risk high）。
- **[#10199](https://github.com/zeroclaw-labs/zeroclaw/issues/10199)** 插件 egress connect-deadline 无法取消阻塞的 `getaddrinfo`（risk high）。
- **[#10114](https://github.com/zeroclaw-labs/zeroclaw/issues/10114)** `max_tool_result_chars` 固定 50k，与上下文窗口无关。
- **[#10116](https://github.com/zeroclaw-labs/zeroclaw/issues/10116)** 工具结果超大时按字节中段截断（应溢出到文件句柄）。
- **[#10115](https://github.com/zeroclaw-labs/zeroclaw/issues/10115)** 工具结果截断在模型上下文之外不可见。
- **[#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058)** ZeroCode 文件浏览器搜索模式忽略行/页导航。
- **[#10062](https://github.com/zeroclaw-labs/zeroclaw/issues/10062)** TodoWrite 计划在 ZeroCode 会话切换间泄漏。
- **[#10202](https://github.com/zeroclaw-labs/zeroclaw/issues/10202)** 日志依赖的记录无法进入 tracing subscriber — ✅ **fix PR [#10203](https://github.com/zeroclaw-labs/zeroclaw/pull/10203) 已开**。
- **[#10237](https://github.com/zeroclaw-labs/zeroclaw/issues/10237)** Telegram 回复线程将对话记忆分散到每个线程桶（中等严重度，今日新开）。

### 回归/抖动
- **[#10161](https://github.com/zeroclaw-labs/zeroclaw/issues/10161)** `process_stats` 快速重采样测试在 Parallel Runtime Test gate 下抖动（risk low）。

**健康度判断**：今日 S0/S1 严重 bug 至少有 **4 条无对应 fix PR**（#10165、#10066、#10230、#10061），其中 #10165 与 #10066 直接涉及**安全策略与 SOP 核心流程**，建议维护者优先关注并指派 owner。

---

## 💡 功能请求与路线图信号

| 请求 | 对应/相关 PR | 进入下一版本的概率 |
|---|---|---|
| [#10166](https://github.com/zeroclaw-labs/zeroclaw/issues/10166) 默认 `stream_mode = partial` | — | 🟢 高：低成本体验改进，伴随 stream 路径打磨几乎必然 |
| [#10168](https://github.com/zeroclaw-labs/zeroclaw/issues/10168) 默认启用 stall watchdog | — | 🟢 高：默认开启保守超时，避免挂死 |
| [#10175](https://github.com/zeroclaw-labs/zeroclaw/issues/10175) Google TTS header 标 sensitive | — | 🟢 高：安全卫生项，一行修复 |
| [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) Option-Backspace 支持 | [#10108](https://github.com/zeroclaw-labs/zeroclaw/pull/10108) 已合并健康标签对齐 | 🟡 中：UX 议题，预计随 ZeroCode 体验批次处理 |
| [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) ZeroCode Logs 可选择/复制 | — | 🟡 中 |
| [#10200](https://github.com/zeroclaw-labs/zeroclaw/issues/10200) WhatsApp Web 机器人显示名 | ✅ **fix PR [#10201](https://github.com/zeroclaw-labs/zeroclaw/pull/10201) 已开** | 🟢 高 |
| [#10140](https://github.com/zeroclaw-labs/zeroclaw/issues/10140) iMessage 转写语音消息 | — | 🟡 中：依赖转写 provider 链路 |
| [#10138](https://github.com/zeroclaw-labs/zeroclaw/issues/10138) Git Channel 完整编译进 Debian 镜像 | — | 🟡 中 |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) 弃用 `StoragePolicy::Rolling` | — | 🟡 中：架构改动，需要 RFC |
| [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) provider 调用会计生命周期补全 | — | 🟡 中：与 #10003 联动 |

**大型功能信号**（处于"待评审 XL 阶段"）：
- **[#10142 ZeroRelay 安全传输](https://github.com/zeroclaw-labs/zeroclaw/pull/10142)** — distinguished contributor，supersedes #9080，标志远程 WSS 平面 mTLS 化的关键里程碑。
- **[#10146 激活逻辑 channel 实例](https://github.com/zeroclaw-labs/zeroclaw/pull/10146)** — XL，restack on #9126，将让守护进程构造逻辑 channel。
- **[#9645 ZeroRouter 预设 + 设备流登录](https://github.com/zeroclaw-labs/zeroclaw/pull/9645)** — distinguished contributor，risk high，标志着 self-hostable 计量 LLM 网关成为一等公民。

---

## 🗣️ 用户反馈摘要

从评论数 ≥ 1 的活跃 issue 中可见以下真实痛点：

1. **沙箱策略的"幽灵阻断"与"幽灵放行"同时存在**：用户既报告 `block_high_risk_commands=false` 不被尊重（[#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)），又报告独立 delegate 的同名策略被绕过（[#10165](https://github.com/zeroclaw-labs/zeroclaw/issues/10165)）。这表明沙箱命令评估在不同执行路径上**行为不一致**，是当前最尖锐的信任问题。
2. **ZeroCode 的 macOS 原生体验缺失**：Option-Backspace 不识别、Logs 不可选不可复制、跨会话 TodoWrite 泄漏、文件浏览器搜索模式行为退化。开发者高频使用 macOS，期望"开箱即用"。
3. **守护进程鲁棒性**：Quickstart 栈溢出、SOP 引擎失败路径错误、ACP 进程中断丢数据——**用户对守护进程崩溃/中断后的可恢复性敏感**。
4. **上下文与工具结果管理脱节**：32k 锁死、50k 固定截断、中段截断丢失结构——明显缺乏一个统一的"上下文预算"概念（#10114、#10115、#10116 三角联动）。
5. **可观测性盲区**：`log` 依赖的记录丢失（#10202），Rolling 策略性能回归（#10073）——用户对"看不到出错原因"的容忍度在下降。

整体氛围：**安全与稳定性议题用户措辞严肃、要求明确；ZeroCode 体验议题语调偏功能请求、耐心等待**。

---

## 📋 待处理积压（提醒维护者关注）

按优先级与停滞时长：

| # | 标题 | 风险/严重度 | 创建日 | 状态 |
|---|---|---|---|---|
| [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) ZeroCode Logs 文本可选可复制 | P2 medium | 2026-08-18 | in-progress, 仍待合入 |
| [#10058](https://github.com/zeroclaw-labs/zeroclaw/issues/10058) 文件浏览器搜索模式导航失效 | P2 low | 2026-08-17 | in-progress, 仍待合入 |
| [#10073](https://github.com/zeroclaw-labs/zeroclaw/issues/10073) 弃用 StoragePolicy::Rolling | P2 high | 2026-08-18 | in-progress, 仍待合入 |
| [#10143](https://github.com/zeroclaw-labs/zeroclaw/issues/10143) provider-call 会计生命周期补全 | P2 high | 2026-08-19 | in-progress, 仍待合入 |

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*