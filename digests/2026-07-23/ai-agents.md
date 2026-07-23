# OpenClaw 生态日报 2026-07-23

> Issues: 446 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-23 02:09 UTC

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

**日期**：2026-07-23
**数据范围**：过去 24 小时

---

## 1. 今日速览

OpenClaw 项目今日处于**高活跃度维护期**——Issues 端 446 条更新（149 条关闭），PR 端 500 条更新（204 条合并/关闭）。一个非常显著的信号是 PR 队列中出现了**大量"bound/limit"类提交**（文件读取、JSONL、子进程超时、内存解析等），说明社区与维护者正在围绕"防止任意大输入 / 长时间任务导致 OOM 与进程挂起"做集中加固。无新版本发布，问题集中在性能回归、channels 容错与插件解耦（self-hosted channel 信任模型）三大领域。整体看项目处于稳态修复 + 安全收紧阶段，没有重大架构变更。

---

## 2. 版本发布

**无新版本发布。** 最近被频繁引用的版本包括 `2026.7.1`、`2026.7.2`、`2026.6.1`、`2026.5.20`、`2026.5.18`，其中 `2026.7.1` 因 gateway 启动失败被作为回归 blocker 跟踪。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日合并/关闭的 PR 中，QA-lab、scripts 与 channel 容错贡献占据大头：

| PR | 标题 | 意义 |
|---|---|---|
| [#112834](https://github.com/openclaw/openclaw/pull/112834) | fix: report exact WhatsApp access coverage owners | 收敛 WhatsApp 接入与 QA 报告口径，关闭 #112826 |
| [#112836](https://github.com/openclaw/openclaw/pull/112836) | fix(ui): keep user footer controls in reading order | Web UI 中用户消息 footer（Reply/Hide/Rewind）键盘顺序修复 |
| [#112840](https://github.com/openclaw/openclaw/pull/112840) | fix(qa): stop retrying unavailable credentials per channel partition | 每个 channel partition 独立处理不可用凭证，避免整通道被一个坏凭证拖垮 |
| [#112837](https://github.com/openclaw/openclaw/pull/112837) | fix(qa): align Matrix scenario coverage with executed behavior | Matrix 自动化场景执行与计分卡归属对齐（关闭 #112830） |

此外，**一批"bound/timeout"类 PR 已进入 ready-for-look 队列**（尚未合并但接近可落版本）：
- [#110562](https://github.com/openclaw/openclaw/pull/110562) `fix(scripts): bound check-workflows subprocesses`（5 分钟超时）
- [#110569](https://github.com/openclaw/openclaw/pull/110569) `fix(scripts): bound docs glossary git lookups`
- [#110570](https://github.com/openclaw/openclaw/pull/110570) `fix(scripts): bound dependency pin git lookups`
- [#110450](https://github.com/openclaw/openclaw/pull/110450) `fix(memory-core): bound dreaming markdown reads`
- [#111181](https://github.com/openclaw/openclaw/pull/111181) `fix(canvas): bound A2UI JSONL file reads`（25 MiB 上限）
- [#111759](https://github.com/openclaw/openclaw/pull/111759) `fix(voice-call): bound diagnostic JSONL reads`

这些 PR 共同构成了 **"全栈输入边界（input bounding）"** 这条主线，从脚本、文档、内存、Canvas 到 voice-call 诊断均加上了文件大小或子进程超时上限——这是一次非常系统的稳定性清扫。

---

## 4. 社区热点

### 4.1 高互动 Issues

| Issue | 👍 | 💬 | 主题 |
|---|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | **80** | **115** | **Linux/Windows Clawdbot Apps** — 自 2026-01-01 起长期呼声最高的功能请求，差距明显 |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | 4 | 15 | Masked Secrets — 用"代理使用但不看见"防止凭据泄漏 |
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | 1 | 17 | `doctor --fix` 性能回退 4–5×（55s → 229s+） |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | 4 | 13 | 工具文本输出退化为 `(see attached image)` 占位符 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | 2 | 16 | 强制的 Pre-response Hook（hard gate） |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | 2 | 15 | Codex PreToolUse 原生 hook relay 阻塞网关 RPC |

### 4.2 闭环的新 PR（"小而准"的修复动向）

- [#112794](https://github.com/openclaw/openclaw/pull/112794) `fix(telegram): keep message mutations in forum topics`（XL 改动） — Telegram 论坛话题中的消息编辑/删除/反应被卡在网关层。
- [#109460](https://github.com/openclaw/openclaw/pull/109460) `fix(qqbot): ignore blank app id fallbacks`
- [#109515](https://github.com/openclaw/openclaw/pull/109515) `fix(google-vertex): ignore blank project env`
- [#109637](https://github.com/openclaw/openclaw/pull/109637) `fix(feishu): DM replies fail with error 230101`
- [#112811](https://github.com/openclaw/openclaw/pull/112811) `feat(msteams): support multiple bot accounts`（XL） — 终结了"每个 gateway 只能注册一个 Teams bot"的硬限制。
- [#112331](https://github.com/openclaw/openclaw/pull/112331) `fix: keep model catalog coherent across config reloads`（XL） — 修复 #99773 的"热重载丢模型"问题（修复仅 retry，重载时仍有竞态）。
- [#112823](https://github.com/openclaw/openclaw/pull/112823) `fix(media): avoid duplicate generated-ready captions`

### 4.3 社区诉求解读

头部社区诉求呈现三条清晰主线：
1. **跨平台覆盖** — #75 的 80 👍 远超第二名，Linux/Windows 原生客户端是真刚需。
2. **安全与凭据治理** — #10659（掩码 Secret）、#13583（pre-response hard gate）共同指向"高敏场景下软规则不够，需要机械化的强制门"。
3. **大输入/长时间任务的健壮性** — 详见第 5 节。

---

## 5. Bug 与稳定性（按严重度）

### P0 / 发布阻塞（已就绪 fix）

| Issue | 标题 | 是否有 fix |
|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | `openclaw 2026.7.1`: gateway 启动失败（systemd/ollama/manual 均失败） | 暂无明确 linked PR，**[须重点关注]** |

### P1 — 高严重度

| Issue | 标题 | Fix |
|---|---|---|
| [#85333](https://github.com/openclaw/openclaw/issues/85333) | `doctor --fix` 4–5× 慢（session snapshot 路径遍历瓶颈） | 无 |
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay spawn 高 CPU 子进程、阻塞网关 | 无 |
| [#92043](https://github.com/openclaw/openclaw/issues/92043) | 180s compaction timeout 单次 wall clock、无部分进度复用 | 无 |
| [#92516](https://github.com/openclaw/openclaw/issues/92516) | 自托管部署无法信任外部化 channel 插件：`openKeyedStore` 被锁向 trusted plugin，无 self-hosted 通道 | 无 |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | 子 agent 完成结果作为原始 worker 输出直接落回 QQBot 私聊（回归） | 无 |
| [#99054](https://github.com/openclaw/openclaw/issues/99054) | Teams 应用移除/重加后保留旧 DM 会话历史 | 无 |
| [#99773](https://github.com/openclaw/openclaw/issues/99773) | 热重载丢失 include-defined models，造成 `FailoverError: Unknown model` | [#112331](https://github.com/openclaw/openclaw/pull/112331) 部分修复（仅 retry） |
| [#39807](https://github.com/openclaw/openclaw/issues/39807) | 402 计费错误对 inline-apiKey 触发无限重试死亡循环（6 小时 5,206+ 次失败） | 无 |
| [#108580](https://github.com/openclaw/openclaw/issues/108580) | `2026.7.1`: cron tool schema 不兼容 llama.cpp grammar（每次 chat 必失败） | 无 |
| [#41199](https://github.com/openclaw/openclaw/issues/41199) | Agent-to-Agent 通信工具参数冲突 | 有 linked PR（未点名） |

### P1 / 行为 / 稳定性

- [#87980](https://github.com/openclaw/openclaw/issues/87980) `exec` 工具静默破坏 `2>&1` / `2>/dev/null` 重定向参数。
- [#87314](https://github.com/openclaw/openclaw/issues/87314) 因每 8 小时一次 `[tools] read failed`，gateway 内存以 ~60MB/天 持续增长。
- [#86031](https://github.com/openclaw/openclaw/issues/86031) Windows gateway 本地 health/status 在 Telegram polling stall 后超时。
- [#91941](https://github.com/openclaw/openclaw/issues/91941) Feishu 流式卡片切到 full-content 更新后长回复延迟回归。
- [#98702](https://github.com/openclaw/openclaw/issues/98702) 继承自 main 的 OAuth 在 `openai-chatgpt-responses` transport 上被拒绝。

> **关键观察**：PR 端持续出现 "**bound X**" 类提交（语音诊断、Canvas、check-workflows、依赖 pin、glossary、memory-core），但**几个高严重度的性能回归与网关阻塞类 issue 仍未拿到对应 fix PR**——这两类问题走在不同节奏上。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 已存在 PR / 集成条件 |
|---|---|---|
| [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows 原生客户端 | 无 PR；80 👍 表明社区长期等待，**下一里程碑候选** |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets（API Key 不可见可用） | 无；与 #13583 同属"安全治理"主题，叠加策略可形成下一安全里程碑 |
| [#13583](https://github.com/openclaw/openclaw/issues/13583) | 强 pre-response hooks（hard gates） | 已有 `clawsweeper:fix-shape-clear` 标记，距 PR 仅差一个清晰形状 |
| [#9912](https://github.com/openclaw/openclaw/issues/9912) | `maxTurns` / `maxToolCalls` 配置 | 已有 linked PR |
| [#38568](https://github.com/openclaw/openclaw/issues/38568) | System Prompt 注入 context window % | 无；形态清晰、工程量小 |
| [#10142](https://github.com/openclaw/openclaw/issues/10142) | `session:end` 内部 hook（用于 Temporal 等编排） | 已有 linked PR |
| [#112811](https://github.com/openclaw/openclaw/pull/112811) | msteams 多 bot 账号 | **已开 PR（XL）**，距离落地近 |

**信号判断**：下一版本最有可能吸收的条目集中在三处：
1. `maxTurns/maxToolCalls`、`session:end` hook、MSTEAMS 多账号（已具备 PR）。
2. "input bounding" 套件（见 §3）大概率一次性打包发布。
3. Linux/Windows 原生客户端（#75）—— 长期呼声，但 OpenClaw 历史上未承诺。

---

## 7. 用户反馈摘要

从高评论 issue 的讨论中提炼：

- **跨平台缺失仍是核心痛点**（#75 多位用户提到企业内 Windows 强制部署，被迫绕回 Web/CLI）。
- **生产环境影响严重**（#85333）：Oracle Cloud 4 vCPU VPS 上单条 `doctor --fix` 从 55s 退到 229s+ 被列为 P1，用户明确要求对 session snapshot 路径遍历做基准化。
- **渠道差异显著**（#94626 / #91941 / #84092）：同样的 `/status`、同样的多行 markdown，在 Telegram 上稳定，在 LINE/Feishu/WhatsApp 上间歇性无响应或丢消息——多渠道表现一致性是用户对"v1.0"的最大期待。
- **隐私与凭据安全感**（#10659）：高频被引用为"prompt injection 防御的最后一步"，社区希望默认开启而非 opt-in。
- **自我托管易用性**（#92516）：自托管用户在外部化 channel 插件时踩到 `openKeyedStore` 信任门，表达出"被迫只能跑完整 trusted bundle"的挫败感。
- **性能回归容忍度低**（#91007, #83968, #84610, #76275）：用户已明确表达"已回滚到上一个稳定版本"，诉求是更严格的 release validation。
- **正面反馈可循**：
  - [#112487](https://github.com/openclaw/openclaw/issues/112487) 是 ClawSweeper review 布局 mockup（设计预览），说明项目内部对自动化评审体验投入度在提升。
  - #112811（msteams 多 bot）说明 channel 工作组正主动形成可见交付。

---

## 8. 待处理积压（提醒维护者关注）

**长期未响应/低优先但有重要影响力的项**：

1. **[#75](https://github.com/openclaw/openclaw/issues/75) Linux/Windows 原生客户端** — 创建于 2026-01-01，115 评论 / 80 👍，距离首个 macOS/iOS/Android 客户端发行已一年以上，仍无 PR。`clawsweeper:needs-product-decision` 标签提示在等待产品决策。
2. **[#85333](https://github.com/openclaw/openclaw/issues/85333) `doctor --fix` 4–5× 慢** — 标签 `clawsweeper:no-new-fix-pr`、`needs-live-repro`；社区用户已提供生产 VPS 复现，但 60 天未被分配。
3. **[#92043](https://github.com/openclaw/openclaw/issues/92043) 180s compaction timeout** — 影响所有长历史的本地/慢速 provider 部署，建议纳入下个版本"input bounding"套件打包修复。
4. **[#92516](https://github.com/openclaw/openclaw/issues/92516) `openKeyedStore` 信任门** — 影响所有自托管用户的 channel 扩展能力，标签含 `needs-security-review`，需维护者主动决策。
5. **[#92043](https://github.com/openclaw/openclaw/issues/92043), [#108435](https://github.com

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析
**报告日期：2026-07-23 · 数据口径：过去 24 小时 GitHub Issues & Pull Requests**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态在 2026 年 7 月呈现**"高活跃、强分化、稳态修复"**的成熟期特征：13 个受监测项目中 11 个有实质活动，单日合计处理超 1,800 条 Issue/PR 更新，但当日仅 CoPaw 一个项目有新版本（v2.0.0.post4）发布——说明绝大多数项目已进入"稳定迭代"阶段而非"功能爆发期"。议题重心明显收敛于三条主线：**输入边界与稳定性硬化**（OOM/超时/进程治理）、**多渠道接入一致性**（Telegram/Discord/Feishu/Matrix/Teams 等）、**安全与凭据治理**（OAuth/Secret isolation/Credential scoping）。与此同时，IronClaw、ZeroClaw 处于 v1/v0.9 冲刺前夜，NanoBot、CoPaw 处于快速功能迭代，其余多项目处于质量巩固期——生态已分化为"前沿架构探索"与"生产可用性打磨"两条并行的演进路径。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | 当日合并 | 版本发布 | 健康度评级 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 446 | 500 | ~204 | 无 | ⭐⭐⭐⭐⭐ | 稳态修复 + 安全收紧 |
| **CoPaw** | 31 | 50 | 2 | **v2.0.0.post4** | ⭐⭐⭐⭐ | 快速迭代 + 架构重构 |
| **NanoBot** | 6 | 63 | 40 | 无 | ⭐⭐⭐⭐⭐ | 高产出 + WebUI 主线 |
| **IronClaw** | 50 | 50 | 21 | 无 | ⭐⭐⭐⭐（偏紧） | v1.0.0-rc.1 冲刺 |
| **Hermes Agent** | 50 | 50 | 11 | 无 | ⭐⭐⭐⭐ | 质量债偿还 |
| **ZeroClaw** | 50 | 50 | 0 | 无 | ⭐⭐⭐（偏弱） | 密集讨论 + PR 积压 |
| **PicoClaw** | 4 | 5 | 2 | 无 | ⭐⭐（积压偏高） | 维护停滞 |
| **LobsterAI** | 1 | 5 | 5 | 无 | ⭐⭐⭐ | 轻量维护 + 积压清理 |
| **NanoClaw** | 1 | 3 | 0 | 无 | ⭐⭐ | 低活跃 + 安全议题浮出 |
| **Moltis** | 0 | 1 | 0 | 无 | ⭐⭐ | 静默维护 |
| **NullClaw** | 1 | 1 | 1 | 无 | ⭐⭐⭐（单点高效） | P0 缺陷止损 |
| **TinyClaw** | 0 | 0 | 0 | 无 | — | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | — | 无活动 |

> **关键观察**：OpenClaw 单日 Issue 更新量（446）占全生态的 70%+，PR 更新量（500）占 65%+，是绝对意义上的"参照锚点"。CoPaw 是 24h 内唯一发布新版本的项目。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中规模最大、覆盖面最广的"事实参照标准"**，但与同类相比呈现出鲜明的"重型平台"特征：

### 3.1 规模优势
- **社区规模**：446 条 Issue / 500 条 PR 更新，单日体量约为第二梯队（IronClaw / Hermes / ZeroClaw）的 9–10 倍，NanoBot 的 8 倍
- **历史积淀**：包含 2026.5–2026.7 的多版本迭代（被引用的最近稳定版包括 2026.7.1/7.2），功能面已覆盖 10+ 渠道（WhatsApp/Telegram/Matrix/Feishu/QQBot/MSTeams/Google Vertex 等）
- **基础设施深度**：从脚本、文档、内存、Canvas 到 voice-call 诊断的"全栈 input bounding"主线，是其他多数项目尚未系统推进的工程粒度

### 3.2 技术路线差异
| 维度 | OpenClaw | NanoBot | Hermes Agent | ZeroClaw | IronClaw |
|---|---|---|---|---|---|
| **架构重心** | 多渠道网关 + 插件生态 | WebUI + 多模型/多 Bot | 同步层 + 多 profile 隔离 | RFC 驱动 + 插件统一目录 | Reborn 重构 + 安全沙箱 |
| **典型语言/栈** | 多语言 polyglot | TypeScript/Node 为主 | Polyglot | Rust 倾向 | Rust 核心 |
| **演进节奏** | 稳态修复 + 渐进加固 | 快速功能落地 | 质量债偿还 | RFC 密集讨论 | v1 冲刺 |
| **主要矛盾** | 性能回归 vs 安全收紧 | 并行开发冲突 | 跨平台一致性 | 讨论完成/实现滞后 | hosted-stg 发布阻塞 |

### 3.3 社区规模对比
- **第一梯队（绝对头部）**：OpenClaw（单日 946 条活动）
- **第二梯队（成熟活跃）**：NanoBot、CoPaw、IronClaw、Hermes Agent、ZeroClaw（单日 50–113 条）
- **第三梯队（低活跃）**：PicoClaw、LobsterAI、NanoClaw、Moltis、NullClaw（单日 1–9 条）
- **休眠**：TinyClaw、ZeptoClaw

OpenClaw 与同类最大差异在于：**它已经把"治理"（input bounding、channel trust model、secret masking）作为当前主线，而非单纯的功能堆叠**——这是成熟期项目的标志性信号。

---

## 4. 共同关注的技术方向

以下议题在多项目并行出现，反映出**生态级共性痛点**：

| 共同方向 | 涉及项目 | 具体诉求与表征 |
|---|---|---|
| **输入边界 / OOM 防护** | OpenClaw、LobsterAI、ZeroClaw | OpenClaw 一日内出现 6+ "bound X" 类 PR（文件大小、子进程超时 5min、JSONL 25MiB 上限）；LobsterAI #2375 处理 transcript OOM + 僵尸重连；ZeroClaw #6916 要求 shell/skill 子进程内存上限 |
| **多渠道接入一致性** | OpenClaw、NanoBot、PicoClaw、NullClaw、IronClaw | Telegram/Discord/Feishu/Matrix/Teams 上同一行为表现参差：OpenClaw #94626/#91941/#84092、NanoBot #5045/#5046（Slack/Feishu 表格渲染）、NullClaw #977 Discord 网关失聪、IronClaw #6475/#6478 Telegram 三件套 |
| **安全/凭据治理** | OpenClaw、NanoClaw、IronClaw、ZeroClaw | OpenClaw #10659（Masked Secrets）、#13583（pre-response hard gate）；NanoClaw #3118（SECURITY.md 凭据隔离声明与实际行为不符）；IronClaw #6472 Secret-lease + egress-proxy；ZeroClaw #7141 OIDC 认证 RFC |
| **Provider 兼容性与严格性** | OpenClaw、NanoBot、CoPaw | OpenClaw #108580（llama.cpp grammar 兼容性）、#98702（OAuth transport 拒绝）；NanoBot #5040（Kimi/Moonshot $ref 严格校验）；CoPaw #6362/#6364（MiniMax-M3 图片识别 + GLM/DeepSeek tool_call 解析） |
| **Cron / 调度器鲁棒性** | OpenClaw、NanoBot、LobsterAI | OpenClaw #39807（402 计费错误死亡循环）、#92043（180s compaction timeout）；NanoBot #5042/#5043（jobs.json null schedule）；LobsterAI #1347/#1348（定时任务增强/校验） |
| **性能回归** | OpenClaw、CoPaw | OpenClaw #85333（doctor --fix 55s→229s）、#87314（gateway 内存 60MB/天 增长）；CoPaw #6307（v1→v2 每次回复 +2s 固定开销） |
| **测试与可观测性基建** | IronClaw、ZeroClaw | IronClaw #6284（错误可恢复性终局 epic）、#6524（Hermetic capability testing）；ZeroClaw #6641（Turn-level OTel trace）、#7232（结构化 observability） |
| **多智能体 / 跨代理互通** | NanoBot、ZeroClaw | NanoBot #5000（subagent → multi-agent 演进）；ZeroClaw #7218（A2A `/.well-known/agent-card.json` 代理发现 RFC） |
| **跨平台桌面客户端缺失** | OpenClaw、ZeroClaw、IronClaw | OpenClaw #75（Linux/Windows 原生客户端，80 👍）；ZeroClaw #7462（Windows 测试 74 失败，CI 仅 Linux） |
| **OAuth / 认证体验** | NanoBot、IronClaw、CoPaw | NanoBot #5035（xAI Grok OAuth + PKCE）、#4689（OAuth 状态可见）；IronClaw #6534（Google OAuth 在 hosted 不生效）；CoPaw 多个 token 用量持久化 PR |

> **统计**：以上 10 个共同方向中，"输入边界 / OOM 防护"和"多渠道接入一致性"出现频次最高（4+ 项目同步投入），其次是"安全/凭据治理"与"Provider 兼容性"。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 重型多渠道网关平台 + 插件生态 | 企业 / 多渠道接入需求方 | Polyglot 架构、channel 信任模型、bound/limit 全栈治理 |
| **NanoBot** | WebUI + 多模型/多 Bot 体验优先的会话平台 | 终端用户 / WebUI 重度用户 | Session-scoped model preset、OAuth 生态完善、PWA 移动端 |
| **Hermes Agent** | 同步层 + 多 profile 隔离的代理框架 | 跨平台一致性需求者 | HSP/1 个人技能同步、Mem0 filter_by_agent_id、CLI/TUI/Desktop 三端一致 |
| **CoPaw** | 国内云 + Token Plan + Apps 生态的代理运行时 | 国内用户 / 阿里云生态 | Scroll 上下文架构（持久化）、Aliyun Token Plan、qwenpaw-creator App |
| **ZeroClaw** | Rust 倾向 + 插件统一目录的 RFC 驱动平台 | 架构师 / 长期维护者 | A2A 代理发现、OIDC、SandboxPolicyConfig、mDNS LAN peer |
| **IronClaw** | v1 冲刺期的 WASM 沙箱 + Reborn 重构平台 | 安全敏感部署 / hosted 用户 | ProductSurface trait、容器监督模式、secret-lease 隔离 |
| **PicoClaw** | Go 实现的轻量级通道网关 | 嵌入式 / Go 生态偏好者 | Matrix 通道稳定性、Hook 系统（但当前反序列化有缺陷） |
| **NanoClaw** | 自托管 + OAuth 重度用户的小型项目 | 自托管个人用户 | WhatsApp Baileys/Cloud 通道、Omarchy Waybar 集成 |
| **NullClaw** | Zig/runtime-stack 工程化的极简实现 | 系统级开发者 | Discord heavy runtime stack、AUXILIARY_LOOP_STACK_SIZE 治理 |
| **LobsterAI** | 网关加固 + 桌面端体验并重的国内产品 | 国内桌面端用户 | openclaw 网关 OOM 防护、Windows 安装器加固 |
| **Moltis** | 静默维护期的前端小修项目 | — | WebUI 会话日期格式化等 UI 细节 |

> **关键差异点**：OpenClaw 与 ZeroClaw/IronClaw 在"网关重型化 vs Rust/WASM 沙箱化"路线上分化明显；OpenClaw 与 NanoBot/CoPaw 在"polyglot 渠道覆盖 vs WebUI/App 生态"上走向不同；NullClaw/PicoClaw 则代表了"小而精"的边缘路线。

---

## 6. 社区热度与成熟度

### 6.1 活跃度分层

**🔴 高速迭代期（功能爆发 + 架构重构）**
- **CoPaw**：v2.0.0.post4 当日发布，Scroll 上下文架构重构在途，31 Issues + 50 PRs
- **IronClaw**：v1.0.0-rc.1 冲刺，ProductSurface 重构 + 多 epic 并行
- **ZeroClaw**：v0.9.0 三大 RFC 收口（OIDC / A2A / i18n），但 PR 合并侧停滞
- **NanoBot**：63 PR / 40 合并的高产出节奏，WebUI 主线推进

**🟡 稳态维护期（质量巩固 + 渐进加固）**
- **OpenClaw**：446/500 条活动但多为 bound/limit 类硬化与渠道容错
- **Hermes Agent**：50/50 条活动但偏重 bugfix 与三端 UX 一致性
- **LobsterAI**：3 个防御性 PR 闭环 + 2 stale PR 清理

**🟢 低活跃期（小修小补或止损）**
- **PicoClaw**：仅 5 PR 变动，#3203 Matrix 无重连机制积压 21 天
- **NanoClaw**：0 PR 合并，安全文档首次浮出（#3118）
- **NullClaw**：单点止损（2 个 P0 缺陷当日闭环）
- **Moltis**：单 PR 修复，无互动

**⚪ 休眠**
- **Tiny

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 — 2026-07-23

## 1. 今日速览

NanoBot 项目在过去 24 小时呈现**高活跃度、高产出**的态势：PR 更新量达到 63 条（40 条已合并/关闭、23 条待合并），Issues 更新 6 条（4 条活跃、2 条已关闭）。社区贡献集中在三大方向——**WebUI 体验增强**（SQLite 历史索引、PWA、fallback 模型可视化）、**多通道与多 Bot 支持**（Telegram/Feishu/DingTalk/Slack）、以及**新一轮 P1 Bug 修复潮**（null 值处理、provider 兼容性）。无新版本发布，整体仍处于快速迭代阶段，多个 PR 带有 `[conflict]` 标签，提示并行开发压力较大，需关注合并节奏。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

过去 24 小时共有 **40 条 PR 被合并或关闭**，是当日最显著的进展信号。以下为重要合入项：

### 已关闭（功能/架构）

- **[#4866](https://github.com/HKUDS/nanobot/pull/4866)** — *feat(agent): make model presets session-scoped*（chengyongru）
  将命名模型预设选择下沉到 session 作用域，并为每轮 turn 固化一个不可变的 `LLMRuntime`，贯穿 provider 调用、prompt sizing、工具/子智能体与压缩流程。代表 WebUI 状态管理一次重要的语义收敛。

### 已关闭（Bug 修复系列）

> 提交者 `santhreal` 集中提交了一组针对「**null/边界值解析**」的防御性修复，覆盖 JSON 持久化层与多通道渲染层：

- **[#5046](https://github.com/HKUDS/nanobot/pull/5046)** — *fix(feishu): keep fenced markdown tables out of card tables*（P2）
- **[#5045](https://github.com/HKUDS/nanobot/pull/5045)** — *fix(slack): keep fenced markdown tables intact in _to_mrkdwn*（P2）
- **[#5044](https://github.com/HKUDS/nanobot/pull/5044)** — *fix(pairing): treat null approved channel lists as empty*（P1, security）
- **[#5043](https://github.com/HKUDS/nanobot/pull/5043)** — *fix(cron): skip null runHistory elements when loading jobs.json*（P1）
- **[#5042](https://github.com/HKUDS/nanobot/pull/5042)** — *fix(cron): default null schedule when loading jobs.json*（P1）

这一波修复的意义在于：**单条脏数据导致整个存储被 quarantine 的级联故障**已被系统性收口。`pairing.json`、`jobs.json`、Feishu/Slack 渲染管线均获得 null-tolerant 行为，稳定性显著提升。

### 整体评估

- **成熟度信号**：新增功能（OAuth、WebUI、性能）持续落地的同时，基础设施层（解析、序列化、配对）也获得硬化。
- **风险点**：带 `[conflict]` 标签的 PR（#2584、#4439、#5018、#5009、#5003、#4689、#4494、#4446）共 8 条以上，说明主干在快速演进，下游分支 rebase 成本上升，建议维护者发布节点节奏管理。
- **方向感**：WebUI 多模型/多通道体验正成为下一阶段主线。

---

## 4. 社区热点

### 讨论最活跃的 Issue

- **[#5000](https://github.com/HKUDS/nanobot/issues/5000)** — *Proposal: evolve the current subagent system toward multi-agent collaboration*（bingqilinweimaotai，4 条评论）
  - 核心诉求：**当前 subagent 缺乏持久身份与共享任务状态，本质仍是「后台任务委派」而非真正的多智能体协作**。
  - 此 Issue 已积累 4 条评论（创建于 7/20，最近更新 7/22），是当日互动量最高的帖子，反映出社区对架构升级的真实需求。
  - 同步关注：作者本人在 PR [#5018](https://github.com/HKUDS/nanobot/pull/5018)（skills 显式上下文加载）中已开始落地相关概念，说明该方向正在被推进。

### 高关注 PR

- **[#2584](https://github.com/HKUDS/nanobot/pull/2584)** — *Feature/xiaozhi support*（zavaruev，创建于 3/28，7/23 最新更新）
  ESP32 设备的 Xiaozhi 语音网关 + MCP 工具支持（WebSocket + Opus、OTA 配置、FastMCP 设备管理）。**已搁置近 4 个月仍被唤醒更新**，代表边缘硬件/IoT 场景的潜在需求。
- **[#4439](https://github.com/HKUDS/nanobot/pull/4439)** — *feat(tools): add read-only search_history tool*（waelantar，创建于 6/21）
  补齐「memory 召回」工具面，是代理长期记忆能力闭环的关键拼图，对应 Issue [#4440](https://github.com/HKUDS/nanobot/issues/4440)。
- **[#5035](https://github.com/HKUDS/nanobot/pull/5035)** — *feat(providers): add xAI Grok OAuth with capability-gated X Search*（chengyongru，7/22）
  新增 xAI Grok 原生 OAuth 2.0 + PKCE 登录，自动 401 刷新，并在 `/v1/models` 声明 `supportsBackendXSearch` 时才下发 `x_search`。**Provider 生态继续扩张**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（潜在级联/数据正确性）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#5041](https://github.com/HKUDS/nanobot/issues/5041) | **Dream 批次的 no-op 完成不推进 `.dream_cursor`**，后续历史被无限饿死 | ❌ 暂无 |
| [#5040](https://github.com/HKUDS/nanobot/issues/5040) | **MCP 工具 schema 含非 `#/$defs/` 起始的 `$ref` 时，整套模型在 Kimi/Moonshot 严格校验下直接失效** | ❌ 暂无 |
| [#5042](https://github.com/HKUDS/nanobot/pull/5042) | `jobs.json` 中 `schedule: null` 导致整个 cron store 被 quarantine | ✅ [#5042](https://github.com/HKUDS/nanobot/pull/5042) |
| [#5043](https://github.com/HKUDS/nanobot/pull/5043) | `runHistory` 含 null 元素触发 TypeError | ✅ [#5043](https://github.com/HKUDS/nanobot/pull/5043) |
| [#5044](https://github.com/HKUDS/nanobot/pull/5044) | `pairing.json` 中 `telegram: null` 让 `is_approved` 崩溃 | ✅ [#5044](https://github.com/HKUDS/nanobot/pull/5044) |

### 🟡 P2（功能/渲染）

| Issue | 描述 | 是否有 Fix PR |
|---|---|---|
| [#5028](https://github.com/HKUDS/nanobot/issues/5028) | 飞书入口上传文件落到 `media/`，与 `workspace` 限制策略冲突，用户无法访问历史文件 | ❌ 暂无 |
| [#5046](https://github.com/HKUDS/nanobot/pull/5046) | Feishu 卡片渲染把代码围栏内的 markdown 表格拆成真表格 | ✅ [#5046](https://github.com/HKUDS/nanobot/pull/5046) |
| [#5045](https://github.com/HKUDS/nanobot/pull/5045) | Slack `_to_mrkdwn` 把围栏内表格重写成 KV 行 | ✅ [#5045](https://github.com/HKUDS/nanobot/pull/5045) |

### 🟢 已关闭

- **[#4934](https://github.com/HKUDS/nanobot/issues/4934)** — *Qwen 模型（qwen3.6-flash）经 DashScope 暴露 thinking/reasoning 内容*（7/14 → 7/22 已关闭）。涉及第三方 provider 推理内容泄露，已修复。
- **[#4948](https://github.com/HKUDS/nanobot/issues/4948)** — *WebUI 在子智能体延迟完成时丢失可见性*（7/16 → 7/22 已关闭）。交付生命周期问题已闭环。

**稳定性评估**：今日 P1 修复 PR 集中落地（5 条 null-tolerant 修复），但 **#5040（Kimi/Moonshot）与 #5041（Dream cursor）仍裸奔**，建议下一轮迭代优先解决。

---

## 6. 功能请求与路线图信号

| 需求方向 | 对应 Issue / PR | 落地概率评估 |
|---|---|---|
| **多智能体协作**（持久身份、共享任务状态） | [#5000](https://github.com/HKUDS/nanobot/issues/5000) + [#5018](https://github.com/HKUDS/nanobot/pull/5018) | 🟢 高，PR 已开工 |
| **OAuth 体验**（状态可见、过期预警） | [#4689](https://github.com/HKUDS/nanobot/pull/4689) | 🟢 高 |
| **xAI Grok + X Search**（能力门控） | [#5035](https://github.com/HKUDS/nanobot/pull/5035) | 🟢 高 |
| **WebUI 移动端体验**（PWA + 滑动手势） | [#4494](https://github.com/HKUDS/nanobot/pull/4494) | 🟡 中，需解决冲突 |
| **Parallel Search MCP 预设** | [#5047](https://github.com/HKUDS/nanobot/pull/5047) | 🟢 高（无 API key 即可使用） |
| **Telegram 多 Bot 实例** | [#5033](https://github.com/HKUDS/nanobot/pull/5033) | 🟢 高 |
| **Feishu groupPolicy: listen**（仅监听、@mention 才回） | [#5009](https://github.com/HKUDS/nanobot/pull/5009) | 🟢 高 |
| **DingTalk 群聊 @sender + 私聊开关** | [#4446](https://github.com/HKUDS/nanobot/pull/4446) | 🟡 中 |
| **history 检索工具** | [#4439](https://github.com/HKUDS/nanobot/pull/4439) | 🟡 中，需重新 base |
| **Xiaozhi 语音网关 + ESP32** | [#2584](https://github.com/HKUDS/nanobot/pull/2584) | 🟠 待观察（4 个月长尾 PR） |
| **Idle compaction 间隔可配置** | [#5036](https://github.com/HKUDS/nanobot/pull/5036) | 🟢 高（Pi 用户痛点明确） |

**路线图信号**：下一版本很可能同时打包 **OAuth 体系完善 + WebUI 性能/体验升级 + 多 Bot 支持**。

---

## 7. 用户反馈摘要

### 🎯 真实痛点

1. **Raspberry Pi / 嵌入式设备的 idle CPU 占用**
   > PR [#5036](https://github.com/HKUDS/nanobot/pull/5036) 用户反馈：nanobot 在 Pi 上**空载时仍占 30–40% 单核**。根因指向 idle compaction 扫描间隔硬编码。代表项目在低功耗设备上的可用性短板。

2. **飞书生态下 workspace 与 media 冲突**
   > Issue [#5028](https://github.com/HKUDS/nanobot/issues/5028)（中文用户）反馈：飞书上传的文件落进 `media/`，开启 workspace 限制后**无法访问历史文件**。这是企业接入场景的真实运营摩擦。

3. **Dream / 长期记忆的「饿死」风险**
   > Issue [#5041](https://github.com/HKUDS/nanobot/issues/5041) 指出 Dream 批次无变更时不推进 cursor，可能造成部分历史永远不被压缩/纳入。

4. **第三方 provider 严格性导致能力失效**
   > Issue [#5040](https://github.com/HKUDS/nanobot/issues/5040)：Kimi/Moonshot 的「moonshot flavored json schema」校验器对 `$ref` 路径严格要求，一个工具 schema 不合规即**整体禁用模型**，对国内用户影响显著。

### ✅ 满意度信号

- `#4934` Qwen thinking 泄露被快速闭环，体现对国内 provider 的响应速度。
- `santhreal` 一日内连发 5 条 null-tolerant 修复，**社区自我修复能力活跃**。
- `#4689`（OAuth 状态可见性）显示用户对「凭证可观测性」有明确期待，说明 WebUI/CLI 走向成熟化。

---

## 8. 待处理积压

### ⚠️ 长期未合入（≥ 1 个月）

| PR | 创建日期 | 标题 | 风险 |
|---|---|---|---|
| [#2584](https://github.com/HKUDS/nanobot/pull/2584) | **2026-03-28**（≈ 4 个月） | Xiaozhi 语音网关 + ESP32 | 边缘硬件集成，长期阻塞会冷却贡献者热情 |
| [#4439](https://github.com/HKUDS/nanobot/pull/4439) | 2026-06-21（≈ 1 个月） | search_history 工具 | 与 #5018 skills 改造存在交集，需协调 |
| [#4446](https://github.com/HKUDS/nanobot/pull/4446) | 2026-06-22 | DingTalk 私聊开关 + @sender | 长期 open |
| [#4494](https://github.com/HKUDS/nanobot/pull/4494) | 2026-06-24 | WebUI PWA + 移动

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**：2026-07-23
**数据周期**：过去 24 小时
**项目仓库**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 仓库维持高强度开发节奏，过去 24 小时共有 **50 条 Issue 更新**（46 活跃 / 4 关闭）与 **50 条 PR 更新**（39 待合并 / 11 已合并或关闭），新版本发布为 0。Issue 端的讨论集中于跨平台会话上下文共享、桌面端会话切换失效、Telegram 大文件上传超时等影响日常使用的稳定性问题；PR 端则呈现出明显的"修复密集"特征，多个长期挂起的问题（如 #61993、#61746、#62152、#62708）获得了对应修复 PR。整体看，项目处于 **活跃维护期，稳定性优先于新功能**——大部分合入 PR 是 bugfix 与打磨，而不是大特性引入。社区讨论热度健康但有少数高价值议题（如 #4335）已经积压近 4 个月。

---

## 2. 版本发布

**今日无新版本发布**。根据 Issue 描述，最近一次被用户提及的稳定版本为 v0.19.0（2026.7.20）——见 [#69551](https://github.com/NousResearch/hermes-agent/issues/69551)。

---

## 3. 项目进展

今日共 **11 个 PR 进入关闭/合并状态**，其中大部分为 bugfix 与桌面/计费体验打磨：

| PR | 类型 | 内容 | 状态 |
|---|---|---|---|
| [#69739](https://github.com/NousResearch/hermes-agent/pull/69739) | Bugfix | Desktop：实时推理轮次中 steer 消息插入到重定向回复之前 | 已关闭 |
| [#69655](https://github.com/NousResearch/hermes-agent/pull/69655) | Feature | CLI / TUI / Desktop 三端统一的"欠费"错误提示 | 已关闭 |
| [#69691](https://github.com/NousResearch/hermes-agent/pull/69691) | Polish | Desktop 计费页自动轮询 + 共享 Progress 组件 + 设置骨架 | 已关闭 |
| [#69740](https://github.com/NousResearch/hermes-agent/pull/69740) | Bugfix | cron：`HERMES_CRON_SESSION` 环境变量在进程内调度器中泄漏到用户交互会话 | 已关闭 |

**值得关注的推进**：
- **计费体验闭环**：`#69655` + `#69691` 联合把"欠费/支付"信号在 CLI / TUI / Desktop 三端拉齐，desktop 还新增自动轮询与共享 Progress 组件，是用户体验层一次明显的成熟度提升。
- **cron 调度器安全卫生**：`#69740` 修复了 `os.environ` 全局泄漏导致的会话状态污染——这是一个典型的"看似无害但跨会话影响巨大"的隐性问题，合入意味着调度器隔离向正确方向迈了一步。
- **desktop steer 顺序**：`#69739` 解决了用户在中途纠正 Agent 时消息时间序错乱的问题，提升了长线程下的可读性。

综合看，项目今日净推进有限但都是 **"质量债"偿还**：安全边界、会话隔离、UX 一致性三条线均有动作。

---

## 4. 社区热点

按评论数与点赞数排序，过去 24 小时最值得维护者关注的议题：

### 🏆 [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) — 跨平台会话上下文共享（CLI ↔ Telegram）— 9 条评论 / 👍2
**`type/feature` · `comp/agent` / `comp/gateway` · P3**
自 2026-03-31 开启，今日仍被推上首页。用户希望在 CLI 与 Telegram 等多平台之间共享同一会话上下文，避免"换平台即失忆"。9 条评论表明社区对这一愿景的认同度高但目前 **缺少 RFC** 或 PoC。建议维护者发起设计讨论或将其明确为下一里程碑。

### 🥈 [#66875](https://github.com/NousResearch/hermes-agent/issues/66875) — 切换到 Plugins/Artifacts 后再点最近会话无效 — 7 条评论
**`type/bug` · `comp/desktop` · P2**
桌面端的"幽灵会话切换"问题：用户离开当前 Tab 后点击最近一次会话无响应，但点击倒数第二次又可以。属于 UI 状态同步问题，影响日常使用流畅度。

### 🥉 [#62936](https://github.com/NousResearch/hermes-agent/issues/62936) — Telegram 15MB+ 上传恒定超时 — 6 条评论
**`type/bug` · `comp/gateway` · `platform/telegram` · P2**
PTB 的 `media_write_timeout` 从未被设置，导致 `HERMES_TELEGRAM_HTTP_WRITE_TIMEOUT` 环境变量形同虚设。该问题讨论中已出现明确修复建议，可作为社区驱动 fix 的好候选。

### 🔥 [#21341](https://github.com/NousResearch/hermes-agent/issues/21341) — nixOS module 路径错位 — 5 条评论
**`type/bug` · `area/nix` · P2 · `area/install-update`**
`documents` 选项将文件安装到 `workingDirectory` 而非 `$HERMES_HOME`，导致 NixOS 用户的人格化文件加载失败。NixOS 是 hermes-agent 的一个重要发行渠道，此问题直接影响该用户群。

### 👍 [#46369](https://github.com/NousResearch/hermes-agent/issues/46369) — Desktop 快捷键忽略 Dvorak 布局 — 3 条评论 / 👍1
**`type/bug` · `comp/desktop`**
事件处理使用 `event.code` 而非 `event.key`，Dvorak 用户快捷键与显示字母完全错位。是少有的非 QWERTY 用户友好性 bug。

**共性诉求**：跨平台一致性（#4335, #66875, #69551）、平台特定文件路径（#21341, #69551）、键盘/输入层抽象（#46369）。社区正在要求项目从"在 macOS/QWERTY 默认用户下能用"迈向"全平台可访问"。

---

## 5. Bug 与稳定性

按严重程度与影响面排列：

### P1 — 静默性高危
- **[#62708](https://github.com/NousResearch/hermes-agent/issues/62708)** — 上下文压缩被阻塞（cooldown/anti-thrash）时 **完全静默**，直到硬性 token 上限被撞穿。用户得不到任何反馈。`comp/agent/gateway/tui` 全栈影响。**当前尚无对应 fix PR**。
- **[#57775](https://github.com/NousResearch/hermes-agent/issues/57775)** — Windows 上 `atomic_replace()` 静默丢弃写入，因 `ERROR_SHARING_VIOLATION` 不在回退集。任何并发读取都会让 state 文件更新丢失。**无 fix PR**。

### P2 — 已知可复现
- **[#66875](https://github.com/NousResearch/hermes-agent/issues/66875)** — Desktop 会话切换失效（见上）。无 fix PR。
- **[#62936](https://github.com/NousResearch/hermes-agent/issues/62936)** — Telegram 大文件上传超时。无 fix PR。
- **[#21341](https://github.com/NousResearch/hermes-agent/issues/21341)** — NixOS 路径错位。无 fix PR。
- **[#69551](https://github.com/NousResearch/hermes-agent/issues/69551)** — Desktop SSH 远程模式在非默认 profile 下完全失灵。token 路径校验与客户端硬编码不一致。无 fix PR。
- **[#45279](https://github.com/NousResearch/hermes-agent/issues/45279)** — `#38889` 的"修复"在 macOS user install 场景下仍未解决 node/npm shim 覆盖 Homebrew/nvm 的问题。
- **[#12651](https://github.com/NousResearch/hermes-agent/issues/12651)** — `.env` 净化器不识别文档化的 `KEY=***` 占位符，会被当作真实凭证读入。可导致静默鉴权错误或日志泄漏。
- **[#25837](https://github.com/NousResearch/hermes-agent/issues/25837)** — `vision_analyze` / `browser_vision` 对超大截图 inline base64 会让 Anthropic 返回 400，且因错误不可重试，会让整个 session "砖掉"。**无 fix PR**。
- **[#18539](https://github.com/NousResearch/hermes-agent/issues/18539)** — `/queue` 链式 FIFO 仅最后一个 item 的 MEDIA 文件被投递，前置 item 的 `MEDIA:` 标签只渲染成原始文本。
- **[#65942](https://github.com/NousResearch/hermes-agent/issues/65942)** — Snapshot 还原在 `state.db` 仍持有 SQLite WAL 连接时可能让用户看到旧数据。无 fix PR。
- **[#63222](https://github.com/NousResearch/hermes-agent/issues/63222)** — ACP `session/set_model` 切换 provider 时可能保留旧 `base_url`，导致请求被路由到错误端点。
- **[#69638](https://github.com/NousResearch/hermes-agent/issues/69638)** — Desktop 队列大图触发 WebSocket 重连循环，并把整张图 base64 持久化到 localStorage，几十 MB 累积。
- **[#66183](https://github.com/NousResearch/hermes-agent/issues/66183)** — Docker 内 `memory_tool.py` 创建 `000` 权限目录。
- **[#57775](https://github.com/NousResearch/hermes-agent/issues/57775)** — Windows atomic_replace 静默丢失（已在 P1 列出）。
- **[#21521](https://github.com/NousResearch/hermes-agent/issues/21521)** — `oauth_minimax` auth_type 未被识别，每个会话触发两次 WARNING。

### 已有对应修复 PR（建议优先合并）
- [#69730](https://github.com/NousResearch/hermes-agent/pull/69730) — 修复 [#69715](https://github.com/NousResearch/hermes-agent/issues/69715)：cron webhook 用错 profile 校验 fire token。
- [#69745](https://github.com/NousResearch/hermes-agent/pull/69745) — 修复 `add` 路径误把 MEMORY.md 当空清空的数据丢失 bug。
- [#69743](https://github.com/NousResearch/hermes-agent/pull/69743) — Windows 受 SYSTEM 保护的 gateway 任务修复（[#63743](https://github.com/NousResearch/hermes-agent/issues/63743)）。
- [#62477](https://github.com/NousResearch/hermes-agent/pull/62477) — 修复 session reset 在 self-heal 路径被忽略（[#61993](https://github.com/NousResearch/hermes-agent/issues/61993)）。
- [#62689](https://github.com/NousResearch/hermes-agent/pull/62689) — Copilot Enterprise 凭据轮换时刷新 `base_url`（[#61746](https://github.com/NousResearch/hermes-agent/issues/61746)）。
- [#62521](https://github.com/NousResearch/hermes-agent/pull/62521) — `model.context_length` 覆盖按 `model.default` 作用域隔离（[#62152](https://github.com/NousResearch/hermes-agent/issues/62152)）。
- [#69747](https://github.com/NousResearch/hermes-agent/pull/69747) — 救援 #69716：恢复 relay 流式投递 + Slack 命令对齐 + 状态清理。
- [#69735](https://github.com/NousResearch/hermes-agent/pull/69735) — 合并相邻 assistant 时丢弃陈旧 `api_content` 旁路。
- [#69733](https://github.com/NousResearch/hermes-agent/pull/69733) — cron 转发补齐 `require_parameters` + `data_collection`。

**风险提示**：P1 静默类 bug（#62708、#57775）在没有日志告警的情况下会让用户丢失工作且无从知晓，建议作为下个补丁版本（hotfix）的首选对象。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 与已有 PR 关联 |
|---|---|---|
| 跨平台会话上下文共享（CLI ↔ Telegram） | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | 无；建议先开 RFC |
| Clarify prompts 改为持久可寻址决策而非短时阻塞 | [#44845](https://github.com/NousResearch/hermes-agent/issues/44845) | 无 |
| `delegate_task` 支持按子任务选择模型 | [#69694](https://github.com/NousResearch/hermes-agent/issues/69694)（已关闭） | [#69744](https://github.com/NousResearch/hermes-agent/pull/69744) 关联方向：Mem0 提供 `filter_by_agent_id` |
| WhatsApp 支持 `channel_skill_bindings` 自动加载群技能 | [#69726](https://github.com/NousResearch/hermes-agent/issues/69726) | Discord / Slack 已有（`gateway/config.py` L1009），WhatsApp 未桥接 |
| 非交互会话下 browser tool 在 `agent-browser` 未装时给出安装提示 | [#66393](https://github.com/NousResearch/hermes-agent/issues/66393) | 无 |
| API Server 支持 agent 生成文件上传到远端文件服务 | [#67246](https://github.com/NousResearch/hermes-agent/pull/67246) | **已有对应 PR，待合并** |
| 在 `/v1/capabilities` 中声明 delegation 工具集隔离 | [#66268](https://github.com/NousResearch/hermes-agent/issues/66268) | 无 |
| HSP/1 个人技能同步客户端（M1） | [#66730](https://github.com/NousResearch/hermes-agent/pull/66730) | **已有 PR**，是 Collective Wisdom 跨仓库里程碑 |

**路线图信号总结**：
- **同步层**（HSP/1, Collective Wisdom）正在被积极推进，PR [#66730](https://github.com/NousResearch/hermes-agent/pull/66730) 是 M1 客户端，与 gateway-gateway 和 nous-account-service 协同。
- **平台/UI 一致性** 是社区主线：Telegram/WhatsApp/Desktop/CLI 任何一处的体验落差都会被快速反馈。
- **多 profile / 多 agent 隔离** 反复出现（#44845、#69694、#69744、#62152），暗示下一版本可能将"profile/agent 隔离

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-07-23**
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日社区活跃度处于**中等偏低**水平，过去 24 小时内共有 4 条 Issues 更新、5 条 PR 变动，无新版本发布。整体来看，项目当日以**文档与依赖维护类合并**为主（2 条 PR 已关闭），功能侧推进力度有限；社区讨论热度集中在一条长期未修复的 Matrix 连接稳定性问题上（#3203，5 条评论、2 个 👍），反映出生产环境用户对通道层健壮性的强烈诉求。**活跃度评级：★★☆☆☆（平稳但缺乏高优先级响应）**。

---

## 2. 版本发布

无新版本发布。上一正式版本为 **v0.2.9 / v0.3.1**（分别出现在不同 Issue 报错信息中），建议关注下一个 minor 版本的规划动态。

---

## 3. 项目进展

今日有 **2 条 PR 已合并/关闭**，均为非功能性的维护性变更：

| PR | 标题 | 作者 | 影响 |
|---|---|---|---|
| [#3286](https://github.com/sipeed/picoclaw/pull/3286) | fix: update Go and x/text for govulncheck | imguoguo | **安全维护**：升级 Go 工具链与 `x/text` 依赖以响应 `govulncheck` 漏洞扫描告警，属重要但低风险变更 |
| [#3285](https://github.com/sipeed/picoclaw/pull/3285) | docs: remove picopaw | imguoguo | **文档回滚**：Revert #3096，移除 picopaw 相关文档内容，疑似上一次的误合并 |

**进展评估**：今日合并对功能演进贡献微弱，仅完成基础设施层面的安全补丁与一次文档回滚，**项目功能侧本日并未取得实质推进**。

---

## 4. 社区热点

**最活跃 Issue：[#3203 — Matrix sync loop has no reconnection logic](https://github.com/sipeed/picoclaw/issues/3203)**

- **作者**：weissfl ｜ 创建 2026-07-02 ｜ 最近更新 2026-07-22
- **热度指标**：5 条评论、2 个 👍
- **核心诉求**：Matrix 通道的 `/sync` 长轮询循环在网络或 homeserver 重启后会**永久静默死亡**，且因主进程未退出，systemd 的 `Restart=on-failure` 不会触发，导致服务长期"假活"。
- **讨论分析**：用户认为这是**生产可用性的关键缺陷**——一个无重连逻辑的连接层实质等同于不可用。此问题热度持续 20 天未解决，反映维护团队在通道层稳定性问题上的响应节奏偏慢。

其他受到关注的 Issue 包括 [#3258](https://github.com/sipeed/picoclaw/issues/3258)（Hook 反序列化缺陷）与 [#3257](https://github.com/sipeed/picoclaw/issues/3257)（gateway 无历史会话模式），但热度较低。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 通道层静默失效（影响生产可用性）
- **[#3203 Matrix sync loop 无重连机制](https://github.com/sipeed/picoclaw/issues/3203)**
  - 影响范围：所有部署 Matrix 通道的生产用户
  - **状态**：❌ 尚无关联 fix PR
  - 风险评估：触发后服务看似存活，实际不再收发消息，属**静默故障**，最危险的一类问题

### 🟡 P1 — Hook 系统功能失效
- **[#3258 Process Hook before_tool modify 失效](https://github.com/sipeed/picoclaw/issues/3258)**
  - 现象：`decision` 字段被丢弃、`args` 因反序列化缺陷被错误解析
  - 环境：picoclaw 0.3.1 / Go 1.25.11 / DeepSeek / Ubuntu 22.04
  - **状态**：❌ 尚无 fix PR，已被标记为 `[stale]`
  - 影响：依赖 Hook 做提示词重写/安全审查的用户功能完全不可用

### 🟢 P2 — 钉钉通道图片消息支持缺失
- **[#3283 fix(dingtalk): support picture/image message inbound](https://github.com/sipeed/picoclaw/pull/3283)**
  - 作者：MrTreasure
  - 状态：PR 已提交，等待 Review
  - 备注：此为**功能性缺失**而非缺陷，但用户经常误报为 Bug，列入观察

---

## 6. 功能请求与路线图信号

### 已开放的功能请求

| Issue | 标题 | 评估 |
|---|---|---|
| [#3257](https://github.com/sipeed/picoclaw/issues/3257) | gateway 会话无状态/无历史模式 | 合理诉求，当前 `--session` CLI 方案无法覆盖 gateway 场景，**有望纳入下一版本** |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | IRC 长消息合并支持 | 协议层改造，**实现成本中等**，需考虑 IRCv3 的 batch/message-tag 规范 |

### 已开放的功能性 PR

| PR | 标题 | 评估 |
|---|---|---|
| [#3283](https://github.com/sipeed/picoclaw/pull/3283) | 钉钉图片消息接入 | 体积适中，代码变更局部化，**有望近期合并** |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | Bedrock Converse 提示缓存（cache points） | AWS Bedrock 用户的重要优化，可显著降低成本，**技术价值高，但已 stale** |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 实现重构（-200 LOC） | 大幅精简代码，**长期 stale，需维护者介入决策** |

**路线图信号**：社区在**通道层健壮性**（#3203）、**网关会话模型灵活性**（#3257）、**成本优化**（#3163）三个方向上的呼声最集中，提示下个版本若聚焦"稳定性 + 成本"，可显著提升用户满意度。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与描述：

- **通道可靠性是头号痛点**：用户在 #3203 中明确表示 "the main process stays alive, so systemd's Restart=on-failure does not trigger"，反映**静默故障**比可见崩溃更难排查，对生产环境造成持续困扰。
- **Hook 系统能力被低估**：#3258 中用户自研 `rtk_rewrite_hook.py` 试图通过 Hook 实现提示词重写（RTK = retrieval/tool-knowledge？），说明**进阶用户对扩展点的依赖较强**，但当前反序列化设计无法支撑 `before_tool` 的 modify 语义。
- **CLI/Gateway 体验不一致**：#3257 用户明确指出 `picoclaw agent --session X` 可创建新会话，但 `picoclaw gateway` 不行——这种"模式差异"让用户感到困惑，期望统一的会话管理抽象。
- **IRC 协议细节被关注**：#3287 报告者对 IRCv3 协议理解较深，明确指出 512 字节分割机制，说明社区中存在一定比例的协议层深度用户。

---

## 8. 待处理积压 ⚠️

以下 Issue/PR 长期未获维护者响应，**建议维护者优先关注**：

| 类型 | 编号 | 标题 | 积压时长 | 标记 |
|---|---|---|---|---|
| Bug | [#3258](https://github.com/sipeed/picoclaw/issues/3258) | Process Hook before_tool modify 反序列化缺陷 | 8 天 | `[stale]` |
| Feature | [#3257](https://github.com/sipeed/picoclaw/issues/3257) | gateway 无历史会话模式 | 8 天 | `[stale]` |
| Bug | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync 无重连 | 21 天 | 无 stale 标记但响应严重不足 |
| PR | [#3163](https://github.com/sipeed/picoclaw/pull/3163) | Bedrock 提示缓存 | 30 天 | `[stale]`，高价值 |
| PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 重构 -200 LOC | 20 天 | `[stale]`，代码精简量大 |

**积压健康度评估**：5 个条目积压，其中 **2 个 Bug**（#3203、#3258）应优先处理，特别是 #3203 已涉及生产可用性风险。建议维护者建立**每周 stale 评审机制**，避免高价值贡献（#3163、#3222）流失。

---

## 附录：项目健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| 日 Issues 更新 | 4 | 正常 |
| 日 PR 更新 | 5 | 正常 |
| 新版本发布 | 0 | — |
| PR 合并率（24h） | 40%（2/5） | 偏低 |
| Stale 项占比 | 40%（5/12 含历史项） | ⚠️ 偏高 |
| 高严重度未修复 Bug | 2（#3203、#3258） | ⚠️ 需关注 |

---

*报告生成时间：2026-07-23｜数据口径：GitHub Issues & Pull Requests API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 — 2026-07-23

> 数据来源：GitHub 仓库 nanocoai/nanoclaw｜统计周期：2026-07-22 至 2026-07-23

---

## 📌 今日速览

NanoClaw 仓库今日处于**低活跃度维护状态**：无新版本发布，过去 24 小时内无 PR 合并或关闭，代码层面无实质性推进；社区端则新开 1 条聚焦安全文档准确性的 Issue，另有 3 条 PR 处于待合并状态并获得更新或讨论。整体节奏偏慢，但**安全议题首次浮出水面**值得维护者留意——文档承诺与自托管实际行为之间的偏差可能影响企业用户信任。

---

## 🚀 版本发布

无新版本发布（本期省略）。

---

## 🔧 项目进展

> ⚠️ **今日无 PR 被合并或关闭**，以下为仍在活跃流转、且今日有更新的 PR：

- **#3070 修复 WhatsApp 发送者身份在 Baileys 与 Cloud 路径下的不一致**  
  🔗 https://github.com/nanocoai/nanoclaw/pull/3070  
  创建：2026-07-16 ｜ 最新更新：2026-07-22  
  关联 Issue：#3069 ｜ 状态：OPEN  
  属于跨通道一致性的稳定性修复，目前待维护者 review 并合并。

- **#3117 新增 Omarchy Waybar 状态栏技能（utility skill）**  
  🔗 https://github.com/nanocoai/nanoclaw/pull/3117  
  创建：2026-07-22 ｜ 状态：OPEN  
  不改动源代码，仅添加 `.claude/skills/<name>/` 工具型技能文件与 SKILL.md。

- **#2877 为 Telegram 增加 Bot API 10.1 原生富文本渲染**  
  🔗 https://github.com/nanocoai/nanoclaw/pull/2877  
  创建：2025-06-28 ｜ 最新更新：2026-07-22  
  状态：OPEN｜贡献指南 v1 合规  
  提交超过 25 天仍处于待合并状态（详见"待处理积压"）。

---

## 💬 社区热点

**今日最具讨论价值的议题：**

### #3118 — SECURITY.md 过度承诺按组（Per-Group）的凭据隔离

- 🔗 https://github.com/nanocoai/nanoclaw/issues/3118
- 作者：bradfeld ｜ 创建：2026-07-22 ｜ 评论：0 ｜ 👍：0
- 状态：OPEN

**核心矛盾**：`docs/SECURITY.md` 的"Credential Isolation"章节在 *Per-agent policies* 条目下承诺"每个 NanoClaw 组都拥有独立的 OneCLI agent 身份，可为销售组与支持组分别下发不同凭据策略"；但 bradfeld 指出，在**自托管 OneCLI 网关**下，**OAuth 应用连接实际上仍是账户级（account-level）** 的，并不按 NanoClaw 组隔离。

**诉求分析**：这是项目首次出现针对**安全文档准确性**的外部反馈，且触及自托管用户最敏感的凭据作用域问题。若文档与实际行为存在系统性偏差，企业用户在合规审计与最小权限原则落地时会遇到障碍。**目前尚无 PR 跟进**。

---

## 🐛 Bug 与稳定性

| 严重度 | 问题 / 关联条目 | 修复 PR | 备注 |
|---|---|---|---|
| 🟡 中 | **#3069** WhatsApp 同一手机号在 Baileys（`/add-whatsapp`）与 Cloud 通道下生成不同 user ID | ✅ **#3070**（待合并） | 跨通道身份不一致会导致同一用户的消息被识别为两个独立实体，影响会话连续性、权限校验与可能的计费逻辑 |
| 🟢 低 | — | — | 今日无新增崩溃 / 回归报告 |

**结论**：24 小时内无新增崩溃或回归报告。已知稳定性缺陷（WhatsApp 身份分裂）已有修复在途，待合并即闭环。

---

## 💡 功能请求与路线图信号

今日未出现独立的"功能请求"Issue，但 PR 提交反映了**两条潜在的路线图信号**：

1. **Linux 桌面端深度集成** — #3117（Waybar 状态栏指示器）暗示社区希望 NanoClaw 与 Omarchy / Hyprland 桌面环境联动。若 #3117 被采纳，可能衍生出针对桌面端常驻 Agent 的更多技能生态。
2. **Telegram 富消息能力** — #2877 利用 Bot API 10.1 的 `sendRichMessage`，若合并将显著提升 Telegram 通道的展示能力；但 PR 当前 review 停滞，是否进入下一版本存在不确定性。

---

## 🗣️ 用户反馈摘要

今日各条目评论数普遍为 0（含 #3118、#3070、#3117、#2877），尚无可量化的多元用户声音。可识别的核心信号：

- **安全文档可信度** — 自托管用户 bradfeld 对 SECURITY.md 中"凭据按组隔离"的承诺提出质疑，提示文档未充分澄清 OAuth 在自托管 OneCLI 上的真实作用域。
- **混合通道部署的合规期望** — 从 PR #3070 可知，社区存在同时启用 Baileys 与 WhatsApp Cloud 的场景，并期望两条路径产出的 user ID 完全一致。

---

## ⏳ 待处理积压提醒

| 条目 | 类型 | 开置于 | 持续时间 | 建议 |
|---|---|---|---|---|
| **#2877** Telegram 原生富文本渲染 | PR (Feature skill) | 2025-06-28 | **≈25 天** | 🔴 已超 3 周未合并，建议维护者明确 review 排期或给出反馈 |
| **#3069** WhatsApp 身份分裂 | Issue | — | — | 🟡 修复 PR #3070 已就绪，等待合并即可闭环 |
| **#3118** SECURITY.md 凭据隔离声明 | Issue | 2026-07-22 | <1 天 | 🟢 较新，建议维护者主动澄清文档或调整 SECURITY.md 措辞 |

---

## 🩺 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码合并节奏 | 🟡 缓慢 | 24h 内 0 PR 合并 |
| 社区反馈通道 | 🟢 畅通 | 外部用户能就安全文档主动提 Issue |
| 安全文档完整性 | 🟡 需复核 | #3118 揭示文档可能与实际行为不符 |
| 跨通道一致性 | 🟡 待修复 | #3070 修复已就绪，待合并 |
| 长期 PR 积压 | 🔴 偏高 | #2877 已开放 25 天，仍 OPEN |

**整体判断**：项目处于**稳定维护期**，无重大事故，但**代码流转速度偏慢**且**安全文档出现首个外部质疑**，建议维护者在 24-48h 内对 #3118 给出回应，并推进 #3070、#2877 的 review 流程，以释放社区贡献势能。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**报告日期：2026-07-23**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NullClaw 在过去 24 小时内呈现**低频但闭环**的运营状态：仅产生 1 条 Issue 与 1 条 PR，且**两者均在当日关闭**，无新增待办积压、无版本发布。值得注意的是，本次 Issue (#977) 与 PR (#978) 高度聚焦于 **Discord 适配层的两个独立缺陷**——消息分发静默丢失与 typing-indicator 线程栈溢出，且均由同一贡献者 Tetraslam 在当天闭环提交，说明维护团队响应迅速、问题解决路径清晰。整体而言，项目当日健康度良好，但因活跃度较低（仅 1 条互动），需关注后续是否回归常态节奏。

---

## 2. 版本发布

🚫 **无新版本发布**。今日仅有 1 条 PR (#978) 被关闭，未触发版本标签。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

**PR #978 — `discord: run typing thread on the heavy runtime stack`** [🔗 链接](https://github.com/nullclaw/nullclaw/pull/978)
- **作者**：Tetraslam
- **状态**：已关闭（当日闭环）
- **核心变更**：将 Discord typing-indicator 线程从仅 512KB 的 `AUXILIARY_LOOP_STACK_SIZE` 栈迁移到重型运行时栈（heavy runtime stack）
- **技术背景**：原线程栈无法承载 `std.http.Client → std.crypto.tls` 的 HTTPS 调用，`tls.Client.init` 内部的大块 `memcpy` 直接击穿 512KB 栈空间，触发进程级 abort
- **项目影响**：✅ 修复了一类**静默崩溃型严重缺陷**——只要一次 typing 触发即可终止进程。该修复显著提升了 Discord 适配层的鲁棒性，是当日最具实质价值的进展
- **推进幅度评估**：★ ★ ★ ☆ ☆（小步快跑，单点修复，但解决了生产可用性瓶颈）

> 💡 推测：由于 PR 在当日即关闭且未留出评审窗口的明显迹象，可能由维护者直接 fast-forward 合并；如已合并主干，建议在下个 minor 版本中验证 Discord 集成稳定性。

---

## 4. 社区热点

### 🔥 讨论焦点

**Issue #977 — Discord gateway goes permanently deaf after exactly one MESSAGE_CREATE** [🔗 链接](https://github.com/nullclaw/nullclaw/issues/977)
- **作者**：Tetraslam
- **互动数据**：💬 1 评论 | 👍 0 点赞 | 📅 当日创建/关闭
- **关注度**：中等（评论数 1，但属核心场景缺陷）

**热点背后的诉求分析**：
该 Issue 描述的是一个**100% 可复现、影响所有生产部署**的 Discord 网关级缺陷——机器人仅能处理首条消息后永久"失聪"，但心跳保持在线，导致用户**无感知的对话中断**。这反映出社区对 **NullClaw 作为多通道 Agent 平台可靠性**的高期待，任何"看似在线实则失灵"的静默故障都会被优先报告。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重等级 | 编号 | 描述 | 修复状态 |
|---------|------|------|---------|
| 🔴 **P0-严重** | [Issue #977](https://github.com/nullclaw/nullclaw/issues/977) | Discord gateway 仅处理首条 MESSAGE_CREATE 后永久失聪 | ✅ 已关闭（疑似被 PR #978 或独立 commit 修复） |
| 🔴 **P0-严重** | [PR #978](https://github.com/nullclaw/nullclaw/pull/978) | Discord typing 线程栈溢出导致进程 abort | ✅ 已合并/关闭 |

**修复关联性分析**：
- **Issue #977** 描述"消息静默丢弃"但"心跳保持"，与 **PR #978** 描述的"栈溢出导致 abort"在症状上**不完全一致**——前者进程存活但事件不派发，后者进程直接终止。因此两者更可能是**同一 Discord 适配模块下的两类独立缺陷**，而非同一根因。
- 建议维护者在关闭 Issue #977 时明确关联 PR/commit，便于社区追踪根因。

**稳定性评估**：当日清理了 Discord 通道的两个 P0 缺陷，**显著降低生产崩溃风险**，但需在下一个 release 验证修复有效性。

---

## 6. 功能请求与路线图信号

📊 **本日无明确新功能请求**。

仅有的 1 条 Issue (#977) 为 Bug 报告而非 Feature Request。从 PR #978 的方向看，可以推测出**潜在路线图信号**：

- ⚙️ **运行时栈治理规范化**：Discord 适配曾误将需要 TLS/HTTPS 的工作线程放在 512KB 的辅助栈上，暴露了运行时栈分配的"经验主义"风险。未来可能需要建立**线程栈大小选型规范**或自动化审计
- 🔌 **多通道适配层（Discord/Telegram/Slack 等）的故障可观测性**：Issue #977 的"静默失聪"反映出缺少消息派发计数器、网关健康探针等可观测性指标，建议纳入后续迭代

---

## 7. 用户反馈摘要

来自 Issue #977 的真实用户痛点（Tetraslam 提供）：

> **痛点场景**：在生产环境中部署 NullClaw Discord 机器人时，每一次重启只能响应**一条**用户消息，后续所有交互均被静默丢弃，用户与机器人对话出现"断崖式中断"。

> **可复现性**：100% 必现，给出明确复现步骤（`nullclaw` 启动 → …），表明缺陷定位门槛低，但根因排查复杂

> **满意/不满意信号**：
> - ✅ **满意**：维护响应极快（当日提交当日关闭）
> - ❌ **不满意**：作为核心通道的 Discord 网关存在"心跳正常但功能失灵"的隐蔽故障，**对生产部署者信任度伤害较大**

由于评论数仅 1 条且 Issue 已被关闭，**用户完整意图未能充分展开**，建议维护者在下次类似缺陷中保留更长讨论窗口以收集更多上下文。

---

## 8. 待处理积压

⚠️ **数据局限性提示**：本次仅获取过去 24 小时窗口数据，**无法评估长期积压情况**。

基于现有数据：
- ✅ **零积压**：所有 24 小时内提交的 Issue/PR 均已闭环
- 📭 **无 pending 项**：0 条待合并 PR、0 条活跃 Issue
- 🔍 **建议关注**：
  - Issue #977 的关闭是否关联了具体的 commit/SHA？（当前摘要中未明确，需在 GitHub UI 验证）
  - PR #978 合并后是否已纳入下一个版本的 changelog？
  - Discord 适配层的回归测试覆盖度如何？建议补充针对"单条消息后网关失聪"与"typing 触发栈溢出"两类场景的 CI 用例

---

## 📊 项目健康度仪表盘

| 指标 | 当日数值 | 健康度 |
|------|---------|--------|
| Issue 闭环率 | 100% (1/1) | 🟢 优秀 |
| PR 闭环率 | 100% (1/1) | 🟢 优秀 |
| 版本发布 | 0 | ⚪ 无变化 |
| 待办积压 | 0 | 🟢 优秀 |
| 重大缺陷修复 | 2 个 P0 | 🟢 积极 |
| 社区活跃度 | 低（1 互动） | 🟡 观察 |
| 文档/可观测性 | 未提及 | 🟡 待提升 |

**总体评估**：NullClaw 当日处于**"低噪声高效率"**的维护状态——虽无新功能交付，但在 Discord 适配层的稳定性上完成了一次关键止损。下一阶段建议聚焦于**回归测试加固**与**可观测性补全**，将单次修复沉淀为系统性防御。

---

*报告生成时间：2026-07-23 | 数据来源：GitHub REST API*
*分析师：AI 开源项目分析师*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-07-23

## 1. 今日速览

IronClaw 仓库今日处于 **v1.0.0-rc.1 发布前的冲刺阶段**，活动量极高：过去 24 小时有 50 条 Issues 更新（36 新开/活跃、14 已关闭）与 50 条 PR 更新（29 待合并、21 已合并/关闭），但无新版本发布。讨论主题高度集中在三块：**ProductSurface 架构重构**（ilblackdragon 主导的 XL 级 PR 链）、**v1 启动前缺陷清零**（bug_bash P1/P2 持续暴露 Telegram、Slack、OAuth、CLI 问题）、**测试与可恢复性基建**（多个 epic 并行推进）。整体健康度评估：**良好偏紧**——合并节奏快，但 v1-launch-checklist 上的阻塞性缺陷（CLI 缺失、Google OAuth 配置不生效、Telegram 配对循环）需要在 rc.1 之前修复，否则会影响发布窗口。

---

## 2. 版本发布

**今日无新版本发布。**

需要关注的是 PR #5598（[release chore](https://github.com/nearai/ironclaw/pull/5598)，由 ironclaw-ci[bot] 自动维护）仍在开放状态，等待 v1.0.0-rc.1 触发。该 PR 预设了 `ironclaw_common` 0.4.2 → 0.5.0（**含 API 破坏性变更**）和 `ironclaw_safety` 0.2.2 → 0.2.3、`ironclaw_skills` 0.3.0 → 0.4.0 的版本跳跃，下游使用者应提前关注 `copy_impl_added` 等 trait 实现新增带来的兼容性问题。

---

## 3. 项目进展

今日已合并/关闭的 21 个 PR/Issue 中，最值得注意的是 **15 条由 BenKurrek 提交的 "Completed foundation" 回顾性关闭记录**——这是对过去两个月已经完成工作的归档整理，间接证实了项目在 Reborn 化重构上的阶段性成果。具体推进：

- **Slack 渠道完成度**：[Issue #6505](https://github.com/nearai/ironclaw/issues/6505)（关闭）确认 PR #5898 已是 Slack 路由/身份/线程/投递的最强参考实现。
- **Telegram 生产支持**：[Issue #6499](https://github.com/nearai/ironclaw/issues/6499) 与 [#6498](https://github.com/nearai/ironclaw/issues/6498)（关闭）记录 PR #6217、#6159 已将 Telegram 编译入生产镜像并具备完整的 Reborn 渠道能力。
- **扩展清单基础设施**：[Issue #6493](https://github.com/nearai/ironclaw/issues/6493)、[#6494](https://github.com/nearai/ironclaw/issues/6494)、[#6495](https://github.com/nearai/ironclaw/issues/6495) 三连关闭，确认扩展清单 V2、Manifest 驱动 ingress、统一定义扩展运行时已经成型。
- **测试规范奠基**：[Issue #6519](https://github.com/nearai/ironclaw/issues/6519) 关闭，确认 PR #6411/6415 已落地 TDD 测试手册和 PR 必须包含 Test Strategy 段落的硬性要求。
- **ProductSurface 边界命名落地**：[PR #6441](https://github.com/nearai/ironclaw/pull/6441)（已关闭，XL 级）正式引入 `ProductSurface` 过渡 trait，解耦 WebUI、product-auth、composition bundle 与测试 mount。
- **测试参考模型**：[PR #6535](https://github.com/nearai/ironclaw/pull/6535)（已关闭）为 Slice 0 加入 turn/run 生命周期参考模型与状态化操作覆盖（submit/claim/heartbeat/block/resume/cancel/complete/fail/lease expiry/race-claim/reopen recovery）。

整体上，项目在「渠道能力」、「扩展清单」、「测试规范」三大基础上完成了阶段闭环，向 v1.0.0 稳步推进。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的是：

| 排名 | 编号 | 评论数 | 主题 | 链接 |
|---|---|---|---|---|
| 1 | [Issue #6284](https://github.com/nearai/ironclaw/issues/6284) | 4 | [EPIC] 错误可恢复性终局 | https://github.com/nearai/ironclaw/issues/6284 |
| 2 | [Issue #6105](https://github.com/nearai/ironclaw/issues/6105) | 3 | 扩展/渠道生命周期状态机测试 | https://github.com/nearai/ironclaw/issues/6105 |
| 3 | [Issue #5459](https://github.com/nearai/ironclaw/issues/5459) | 2 | 可配置 skills 与 tools | https://github.com/nearai/ironclaw/issues/5459 |
| 4 | [Issue #3288](https://github.com/nearai/ironclaw/issues/3288) | 2 | 生产/作用域能力生命周期管理对等性 | https://github.com/nearai/ironclaw/issues/3288 |

**诉求分析**：
- **#6284（错误可恢复性终局）**——serrrfirat 推动的最高优先级 epic，要求模型必须能「看到错误 + 看到修复路径 + 获得行动机会」，这与 PR #6539（**BENCHMARKING_MODE 关闭"问用户"逃逸**）和 PR #6533（容器监督模式）方向一致，反映项目对鲁棒性的终极追求。
- **#6105（Slack 生命周期回归）**——4 次 bug bash 都没修干净的扩展/渠道生命周期问题，凸显测试覆盖不足，已推动 PR #6520 将扩展就绪态收窄到 manifest 派生的 `uninstalled / setup_needed / active` 三态。
- **#5459（可配置 skills/tools）**——长期被搁置的 P2 需求，希望管理员/用户能分别安装 WASM 工具并控制可见范围，目前还没有对应 PR 接续。
- **#3288（能力管理对等性）**——与 #2246 一起，呼吁将 MCP 工具与 WASM 扩展统一为单工具扩展模型，避免模型工具列表被 MCP 服务器淹没。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1（影响核心流程，需立即修复）

| 编号 | 标题 | 修复 PR | 链接 |
|---|---|---|---|
| [Issue #6475](https://github.com/nearai/ironclaw/issues/6475) | Telegram /pair 命令不识别，用户陷入配对死循环 | ❌ 无 | https://github.com/nearai/ironclaw/issues/6475 |
| [Issue #6474](https://github.com/nearai/ironclaw/issues/6474) | Telegram 投递渠道在 Delivery Defaults 中无法配置 | ❌ 无 | https://github.com/nearai/ironclaw/issues/6474 |
| [Issue #6523](https://github.com/nearai/ironclaw/issues/6523) | 勾选 test build 后 Agent 创建失败 | ❌ 无 | https://github.com/nearai/ironclaw/issues/6523 |
| [Issue #6534](https://github.com/nearai/ironclaw/issues/6534) | Google OAuth 配置在 hosted 部署无法生效 | ⚠ 部分（[PR #6533](https://github.com/nearai/ironclaw/pull/6533) 修复容器重启路径，但 WebUI 配置路径与 config-consumption 仍未解决） | https://github.com/nearai/ironclaw/issues/6534 |

### 🟠 P2（影响体验，发布前应修复）

| 编号 | 标题 | 链接 |
|---|---|---|
| [Issue #6478](https://github.com/nearai/ironclaw/issues/6478) | Agent 不识别已连 Telegram，错误跳到 Slack 授权 | https://github.com/nearai/ironclaw/issues/6478 |
| [Issue #6522](https://github.com/nearai/ironclaw/issues/6522) | 缺少 Telegram 本地/agent.near.ai 安装说明 | https://github.com/nearai/ironclaw/issues/6522 |
| [Issue #6521](https://github.com/nearai/ironclaw/issues/6521)（已关闭） | ironclaw CLI 在 agent-stg 上缺失 → 已修复 | https://github.com/nearai/ironclaw/issues/6521 |

### 🟡 CI/工程性问题
- [PR #6537](https://github.com/nearai/ironclaw/pull/6537)：PR #6533 仅跑了 Code Style 与 smoke 检查，**重型 Tests (Reborn) 与 Reborn E2E 闸门未触发**。henrypark133 提交的修复 PR 已在 release-fix-* 分支加入完整闸门，但 v1 之前的流程仍存在盲区。

**Telegram 是当前最不稳定的渠道**——3 个 P1/P2 全部围绕它，且 rebotQA 复现路径一致，建议在 v1.0.0-rc.1 之前单独走一遍 Telegram 链路。

---

## 6. 功能请求与路线图信号

### 已存在对应 PR 的功能请求
| 功能 | Issue | 对应 PR |
|---|---|---|
| Hosted 部署的容器监督模式 | [Issue #6534](https://github.com/nearai/ironclaw/issues/6534) | [PR #6533](https://github.com/nearai/ironclaw/pull/6533) |
| Reborn 中 web-access / Brave web_search 自动激活 | （用户体验反推） | [PR #6232](https://github.com/nearai/ironclaw/pull/6232)（待合并） |
| 管理员 OAuth 凭证运行时生效 | （与 Google OAuth 问题相关） | [PR #6531](https://github.com/nearai/ironclaw/pull/6531)（XL，待合并） |
| 管理员托管用户安全基础 | （路线图） | [PR #6527](https://github.com/nearai/ironclaw/pull/6527)（XL，待合并） |

### 路线图信号（来自 epic 与新开 Issue）
- **[Issue #6524 — Hermetic capability & journey testing platform](https://github.com/nearai/ironclaw/issues/6524)**：serrrfirat 推动的最大 epic，要回答「每个能力/用户旅程都有确定性覆盖吗？」，会推动下一阶段的 E2E 基建。
- **[Issue #6472 — Secret-lease + egress-proxy daemon](https://github.com/nearai/ironclaw/issues/6472)**：沙盒密钥租赁 + 出站白名单代理，是「凭证不出容器」安全模型的关键拼图。
- **[Issue #6532 — Attested-signing stack + Ledger 硬件钱包清签](https://github.com/nearai/ironclaw/issues/6532)**：zmanian 提出让 Agent 代表用户做链上交易、但绝不能自主转走资金的签名方案，预示 **Agent-to-chain** 是后续路线的下一步。

### 仍未被认领的功能
- [Issue #5459（可配置 skills/tools）](https://github.com/nearai/ironclaw/issues/5459)——管理员/用户级 WASM 工具与 skill 安装可见性控制，长期未动。
- [Issue #1519（routine notification 上下文缺失）](https://github.com/nearai/ironclaw/issues/1519)——routine 通知与用户聊天线程隔离，导致上下文丢失。

---

## 7. 用户反馈摘要

从今日更新的 Issue 评论与 QA 报告提炼：

- **Telegram 用户体验断裂**：「/pair 命令被当作普通文本」（[#6475](https://github.com/nearai/ironclaw/issues/6475)）、「Telegram 已连接却跳到 Slack 授权」（[#6478](https://github.com/nearai/ironclaw/issues/6478)）、「Delivery Defaults 找不到 Telegram 选项」（[#6474](https://github.com/nearai/ironclaw/issues/6474)）——同一 QA 波次内出现 3 个 Telegram 关联 Bug，反映**新接入渠道与现有 UI/授权流之间未对齐**，用户感知是「Agent 不知道 Telegram 已经连好」。
- **Hosted 部署可用性**：「Google OAuth 在 hosted-stg 保存后不生效」（[#6534](https://github.com/nearai/ironclaw/issues/6534)）、「hosted 实例 CLI 缺失」（[#6521](https://github.com/nearai/ironclaw/issues/6521)，已修）、「test build flag 导致 Agent 创建失败」（[#6523](https://github.com/nearai/ironclaw/issues/6523)）——**hosted staging 的运维体验明显落后于本地**，是发布前必须直面的痛点。
- **文档缺口**：「Telegram 本地部署说明缺失」（[#6522](https://github.com/nearai/ironclaw/issues/6522)）——用户直接拿 Google 作为对比，期望获得同样的「跑得起来」指引。
- **隐含正向信号**：[Issue #6105](https://github.com/nearai/ironclaw/issues/6105) 中提到"过去两周 #1 用户面 Bug 家族是扩展/渠道生命周期"，意味着 **Slack/Telegram 是真在用的核心场景**——用户活跃度是有的，问题在于生命周期边界模糊。

---

## 8. 待处理积压

需要维护者关注的「长期高优先级但缺乏明显推进」的项：

| 编号 | 标题 | 风险 | 链接 |
|---|---|---|---|
| [#5459](https://github.com/nearai/ironclaw/issues/5459) | 可配置 skills 和 tools（管理员/用户可见性） | 6 月 30 日创建，多次复现 | https://github.com/nearai/ironclaw/issues/5459 |
| [#3288](https://github.com/nearai/ironclaw/issues/3288) | 生产/作用域能力生命周期管理对等性 | 5 月 6 日创建，关联 14 个 issue | https://github.com/nearai/ironclaw/issues/3288 |
| [#2246](https://github.com/nearai/ironclaw/issues/2246) | 统一扩展模型（MCP 工具与 provider 去重） | 4 月 10 日创建，仅 1 评论 | https://github.com/nearai/ironclaw/issues/2246 |
| [#1519](https://github.com/nearai/ironclaw/issues/1519) | routine 通知上下文缺失 | 3 月 21 日创建，hold 状态 | https://github.com/nearai/ironclaw/issues/1519 |
| [#1330](https://github.com/nearai/ironclaw/issues/1330) | Tool schema discovery（消息路由/附件语义） | 3 月 18 日创建，on hold / bug_bash_P3 | https://github.com/nearai/ironclaw/issues/1330 |

**建议**：上述 5 条都是「重构/可扩展性」类型工作，与 PR #6480/#6520/#6527/#6531/#6532 等当前 PR 链相关，但都没有明确被某个 in-flight PR 完整覆盖，发布后很可能再次成为 Bug 源头。

---

## 📊 附：项目健康度卡片

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 100 条更新，单日处于历史高位 |
| 合并节奏 | ⭐⭐⭐⭐ | 21/50 已合并，但 v1-launch-checklist 上的 P1 仍存在 |
| 测试覆盖 | ⭐⭐⭐ | 多个 epic 在补齐，但 PR #6537 暴露了 CI 闸门盲区 |
| 用户响应 | ⭐⭐⭐ | QA 波次密集，问题反馈快；但 hosted 体验仍待修复 |
| 架构清晰度 | ⭐⭐⭐⭐ | ProductSurface 重构持续收敛边界 |
| 文档/发布 | ⭐⭐ | Telegram 等新渠道文档缺失，v1.0.0-rc.1 前需补齐 |

> ⚠️ **结论**：项目处于 v1 冲刺期，单日产出极高，但 hosted-stag 的发布阻塞项（Telegram 三件套 + Google OAuth + test build flag）若不在 48 小时内关闭，rc.1 极可能延期。建议维护者把 [#6475](https://github.com/nearai/ironclaw/issues/6475)、[#6474](https://github.com/nearai/ironclaw/issues/6474)、[#6534](https://github.com/nearai/ironclaw/issues/6534)、[#6523](https://github.com/nearai/ironclaw/issues/6523) 列为今日 P1。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报 · 2026-07-23

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)
> 统计周期：过去 24 小时（2026-07-22 ~ 2026-07-23）

---

## 一、今日速览

过去 24 小时内，LobsterAI 共处理 **5 个 PR（全部关闭，0 等待合并）** 与 **1 个 Issue（关闭）**，无新版本发布。从结构上看，今日属于"轻量维护日"——**3 个实质性 PR 完成合并/关闭**（涉及 Windows 安装器加固、UI 堆叠修复、OOM 崩溃防护），同时清理了 **2 个长期 stale PR 与 1 个 stale Issue**。社区互动度极低（所有条目评论数 ≤ 2、👍 均为 0），未见新提交的需求或新开的工单，项目整体处于**平稳迭代 + 积压清理**阶段。

---

## 二、版本发布

无新版本发布。

---

## 三、项目进展

今日合并/关闭的实质性 PR 共 3 项，覆盖**稳定性加固、桌面端体验与安装链路安全**三个方向：

| PR | 方向 | 关键改动 | 链接 |
|---|---|---|---|
| **#2375** | 稳定性 / openclaw | 阻止网关加载超大活跃 transcript，对 JS 堆 OOM 崩溃进行分类，并在 OOM 重启后忽略陈旧的网关客户端代际以防"僵尸重连" | [#2375](https://github.com/netease-youdao/LobsterAI/pull/2375) |
| **#2376** | UI / cowork | 通过 body portal 挂载导出选项弹窗，解决与侧边栏的堆叠上下文冲突 | [#2376](https://github.com/netease-youdao/LobsterAI/pull/2376) |
| **#2377** | 桌面端 / Windows | Windows 更新安装器加固 | [#2377](https://github.com/netease-youdao/LobsterAI/pull/2377) |

**推进评估**：今日工作整体偏向**防御性修复**——既加固了底层崩溃保护（OOM 分类与重启后状态隔离），又修复了面向用户的 UI 视觉缺陷与 Windows 升级链路风险。虽无新功能上线，但项目健壮性进一步提升。

另外，**#1346（skills 管理）** 与 **#1347（定时任务 Cron 自定义调度 + Agent/Model 绑定 + 表单 UX）** 两个早期提交的体量较大的 PR 被作为 stale 关闭，未合入主线。详见第七节分析。

---

## 四、社区热点

今日所有条目互动数据均处于低位（👍 全为 0，评论 ≤ 2 条），未形成明显热点。相对而言：

- **Issue #1348** —《定时任务名称重复没有校验》（[#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)），作者 xuzx-code，2 条评论，0 👍，已以 stale 关闭。
- 其余 PR 评论数均为 undefined（无评审记录）。

**诉求分析**：社区关注度普遍偏低，唯一可捕捉到的用户诉求是定时任务模块的输入校验问题，但其本身活跃度不足，且最终以 stale 方式关闭——意味着该诉求**未在评审层面被充分讨论**便被清理。

---

## 五、Bug 与稳定性

按严重程度排序：

1. **🔴 高 — openclaw 网关 OOM 崩溃**（[#2375](https://github.com/netease-youdao/LobsterAI/pull/2375)）
   - **现象**：当活跃 transcript 体量过大时，网关加载导致 JS 堆内存溢出；OOM 重启后陈旧客户端代际未清理，引发"僵尸重连"反复触发。
   - **状态**：✅ **已有 fix 并关闭**。该 PR 同时引入了崩溃分类与重启后客户端代际忽略机制，对应一个完整的稳定性改进闭环。

2. **🟡 中 — Windows 安装器加固**（[#2377](https://github.com/netease-youdao/LobsterAI/pull/2377)）
   - **现象**：Windows 端更新安装链路存在加固空间（具体细节未在描述中展开）。
   - **状态**：✅ **已有 PR 关闭**。涉及 renderer / main / windows 三个 area。

3. **🟢 低 — cowork 导出弹窗被侧边栏遮挡**（[#2376](https://github.com/netease-youdao/LobsterAI/pull/2376)）
   - **现象**：导出选项 Modal 与侧边栏存在 CSS stacking context 冲突。
   - **状态**：✅ **已通过 body portal 方案修复并关闭**。

4. **🟢 低 — 定时任务名称未做重复校验**（[#1348](https://github.com/netease-youdao/LobsterAI/issues/1348)）
   - **现象**：用户在创建定时任务时，系统未校验名称唯一性，可能导致用户误覆盖或混淆。
   - **状态**：⚠️ **Issue 已以 stale 关闭，无对应 fix PR 跟进**。建议维护者在后续 sprint 中主动补一个轻量校验。

> 综上，今日 3 个真实存在的技术缺陷均已通过对应 PR 关闭，**主要稳定性风险已被修复**。

---

## 六、功能请求与路线图信号

过去 24 小时内**无新开的功能请求 Issue**，但可通过已关闭的 stale PR 反推社区曾重点提议的方向：

- **🧩 Skills 管理能力**（[#1346](https://github.com/netease-youdao/LobsterAI/pull/1346)）—— 作者 leefinder，曾基于早期 #846 进行重构以"按官方要求优化"。该方向显示社区对**插件化/技能扩展**有明确兴趣，但因长期无维护反馈而被 stale 关闭。
- **⏱️ 定时任务模块增强**（[#1347](https://github.com/netease-youdao/LobsterAI/pull/1347)）—— 作者 swuzjb，内容相当扎实，包含 **Cron 可视化/原始表达式双模式编辑、Agent/Model 绑定、表单 UX 统一**，并已完成与 main 分支的合并整合。同样因 stale 被关闭。

**路线图判断**：
- 这两个 PR 都已与 main 合并整合，说明**功能本身具备工程可行性**，关闭更可能是 PR 流程（合规/审查/重构）而非需求否决。
- 维护者后续若希望重启这两条线，可基于已合并的代码底子继续推进，**预期可成为下一版本的功能候选**。

---

## 七、用户反馈摘要

- **Issue #1348**（《定时任务名称重复没有校验》，[链接](https://github.com/netease-youdao/LobsterAI/issues/1348)）截图展示了用户在创建重复名称定时任务时的界面。从 2 条评论与 0 👍 看，用户痛点明确但**社区参与度未激起进一步讨论**；最终以 stale 关闭，**用户实际未收到明确答复**——这一处理方式存在轻度的"用户预期落差"风险。
- **PR #1347** 的描述中提到"已完成与 main 分支的合并整合"，可见作者投入了大量精力，但项目维护方未给出评审结论便清理，从贡献者体验角度**是一个负面信号**。
- 整体而言，今日可见的用户声音均偏弱，建议观察后续 1-2 周是否出现新的活跃 issue 来判断社区是否真正进入"静默期"。

---

## 八、待处理积压

今日所有历史条目均被处理（关闭），**短期内无明显积压**。但有两点**提醒维护者关注**：

1. **Skills 管理（#1346）** 与 **定时任务增强（#1347）** 虽然已 stale 关闭，但作者已与 main 完成合并整合，**未被合入主线**——这是隐性技术债务，未来若社区再提相关需求，维护方需重新评估或基于现有分支继续 cherry-pick。
2. **Issue #1348 的同类问题**（定时任务名称校验）尚未真正解决，建议在下一个迭代窗口主动补一个轻量 fix，避免用户再次反馈时仍处于未处理状态。

---

### 📊 项目健康度简评

| 维度 | 状态 |
|---|---|
| 活跃度 | 🟡 中等偏弱（无新 Issue / 无新 Release） |
| 稳定性 | 🟢 良好（核心 OOM 与 UI 问题已闭环） |
| 社区参与 | 🔴 偏低（互动数据接近零） |
| 积压治理 | 🟢 良好（stale 项被主动清理） |
| 路线图信号 | 🟡 待明确（两条大型功能 PR 被清理但未合入） |

> **一句话总结**：LobsterAI 在 7 月 23 日以"稳定性补丁 + 积压清理"为主基调度过了一个低噪声但有产出的维护日，社区活跃度与长期贡献者体验是后续需要重点关注的指标。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-07-23**
**仓库：[moltis-org/moltis](https://github.com/moltis-org/moltis)**

---

## 1. 今日速览

Moltis 仓库过去 24 小时活跃度处于**低位水平**。社区端无新增或活跃 Issues，仅有 1 条针对 Web 前端的 Bug 修复 PR (#1162) 进入待合并状态，且尚无任何评论或点赞互动。无新版本发布。整体而言，项目处于**间歇性维护期**——开发提交节奏放缓，未观察到大型功能合并或密集社区讨论。

---

## 2. 版本发布

**本节无内容。** 过去 24 小时未发布任何新版本。

---

## 3. 项目进展

### 3.1 待合并 PR

| PR | 标题 | 作者 | 创建时间 | 状态 |
|---|---|---|---|---|
| [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | [shixi-li](https://github.com/shixi-li) | 2026-07-22 | OPEN（待合并） |

**变更要点（基于摘要）：**
- 保留当天会话的本地化 `HH:MM` 时间标签；
- 为最近 1–6 天的会话增加本地化的"昨天"和星期标签；
- 更早的会话显示完整日历日期（必要时包含年份）；
- 新增浏览器层测试覆盖以上四个时间桶（today / yesterday / weekday / calendar date）；
- 保留完整的本地化时间戳信息。

**评估：** 这是一个**用户体验细节改进**，针对历史会话列表的日期可读性问题。改动范围聚焦在前端日期格式化逻辑，影响面较小，测试覆盖充分，具备较高合并概率。

### 3.2 项目整体推进度

今日项目**无重大功能推进**，仅前端小修。如以"实质性版本演进"为衡量标准，今日可视为**维护性提交日**，项目整体向前推进程度有限。

---

## 4. 社区热点

**今日无任何活跃讨论。** Issues 区 0 条活跃，PR #1162 评论数与点赞数均为 0。社区互动处于静默期，未形成可分析的话题热点。

---

## 5. Bug 与稳定性

### 5.1 今日涉及 Bug 修复

**PR [#1162](https://github.com/moltis-org/moltis/pull/1162) — fix(web): show dates for older sessions**

- **严重程度：低（UI/可读性问题）**
- **类型：体验缺陷 / 一致性回归**
- **症状：** 在 Web 前端的会话列表中，早期会话的日期显示方式不直观，用户难以快速区分会话发生的时间。
- **当前状态：** 已有 Fix PR，处于 OPEN 状态，尚未合并。
- **影响范围：** 前端 UI 显示层，不涉及后端逻辑或数据模型变更。

### 5.2 今日新报告 Bug

无。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**，无法从社区信号中提取路线图线索。唯一活跃的 PR 属于修复性质，不构成新功能方向。

---

## 7. 用户反馈摘要

今日无 Issues 评论、无 PR 评论可供提炼。社区反馈层面**信息真空**，无法反映用户痛点、使用场景或满意度变化。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 备注 |
|---|---|---|---|---|
| PR | [#1162](https://github.com/moltis-org/moltis/pull/1162) | fix(web): show dates for older sessions | OPEN（待合并） | 提交 1 天，零互动，建议维护者审查 |

> ⚠️ 由于今日数据窗口仅覆盖 24 小时，"积压"主要指本周期内需要关注的事项。如需更长期的积压 Issue/PR 清单，建议查询 GitHub 仓库的 [Issues 面板](https://github.com/moltis-org/moltis/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-asc) 与 [PR 面板](https://github.com/moltis-org/moltis/pulls?q=is%3Apr+is%3Aopen+sort%3Aupdated-asc)，按更新时间升序排列。

---

## 项目健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐☆☆☆ | 仅 1 条待合并 PR，无新提交、无版本发布 |
| 社区互动 | ⭐☆☆☆☆ | Issues/PR 评论数均为 0 |
| 问题响应 | ⭐⭐⭐☆☆ | PR 提交及时，但维护者尚未介入审查 |
| 代码质量信号 | ⭐⭐⭐⭐☆ | PR 自带测试覆盖，体现良好工程实践 |
| 综合 | ⭐⭐☆☆☆ | **静默维护期**，建议持续观察后续节奏 |

---

*报告生成时间：2026-07-23 | 数据来源：GitHub API 公开数据*
*本报告基于公开数据自动生成，仅反映过去 24 小时窗口内的项目动态。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报

**日期**：2026-07-23  
**仓库**：agentscope-ai/QwenPaw  
**数据周期**：过去 24 小时

---

## 1. 今日速览

CoPaw 今日继续保持高强度迭代节奏，过去 24 小时累计处理 81 条 Issue/PR 活动（31 Issues + 50 PRs），并发布了 v2.0.0.post4 版本。Issue 端呈现"新旧交织"特征——既有 #5135（6 月 11 日创建的 MiniMax-M3 视觉能力异常）等历史积压，也有 #6314/#6324/#6376 等针对 v2.0 系列新引入回归的即时反馈。PR 端则出现明显的"贡献者自纠错"现象：单一开发者 **patrick-andstar** 在 24 小时内提交了至少 8 个 first-time-contributor PR，对应其本人报告的多个 Issue，体现出"发现问题—提交修复—开 PR"的高效闭环。项目整体活跃度高，但 v2.0 系列在性能、稳定性、UI 安全方面已暴露出值得维护团队关注的多类风险。

---

## 2. 版本发布

### v2.0.0.post4（已发布）

- **发布时间**：2026-07-22  
- **类型**：Post-release（修复补丁）  
- **Release 链接**：[v2.0.0.post4](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0.post4)

**更新内容**：  
优化了 Agent 推理逻辑，以缓解冗余思考循环（redundant thinking loops）和重复的工具调用（duplicate tool invocations）。

**配套发布说明**：  
- GitHub Actions 已自动创建 [#6338 Release Duty](https://github.com/agentscope-ai/QwenPaw/issues/6338)，用于跟踪该版本的安装验证（4 项 checkpoint 全绿才视为通过）。

**⚠️ 用户反馈需关注的回归点**（虽然未在 changelog 中明示，但 Issue 中已出现多个 post3/post4 相关反馈）：
- [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) v2.0.0.post3 与 post4 出现主进程因新增 loop 功能挂掉的问题；
- [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) 使用内置 MiniMax-M3 供应商时无法识别图片；
- [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) 大模型响应被截断。

**迁移注意事项**：从 v1.x 升级到 v2.0 的用户请关注 [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) 报告的"每次简单对话回复约 2 秒固定开销"性能回归。

---

## 3. 项目进展

### 当日已合并/关闭的关键 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) (CLOSED) | fix(token-usage): retry token usage persistence | 修复 `TokenUsageBuffer._flush_once()` 写失败但 dirty 标记已被清除导致的 token 用量丢失问题 |
| [#6359](https://github.com/agentscope-ai/QwenPaw/pull/6359) (CLOSED) | fix: change context injection role from system to user | 将上下文注入从 `role="system"` 改为 `role="user"`，修复 GLM/OpenAI 等 API 因系统消息出现在中间而抛 `ValueError` 的问题（[#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358)） |
| [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) | fix: strip markdown fences and XML tags from tool_call arguments | 修复 GLM-5-Turbo、DeepSeek-V3 等模型用 markdown 围栏包裹 tool_call 参数导致 `JSONDecodeError` 的问题（[#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363)） |

### 已开放并处于审查中的重要 PR

| PR | 标题 | 推进方向 |
|---|---|---|
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | feat(scroll): add staged compaction and durable task continuity | **重大架构升级**：重写 Scroll 上下文管理，引入"分阶段压缩 + 持久化任务连续性"管线，`history.db` 成为唯一事实来源。回应了 #5218 等历史上下文相关 Bug |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): add qwenpaw-creator app | 新增"脚本→素材→分镜→视频"创作工作流 App 插件 |
| [#6293](https://github.com/agentscope-ai/QwenPaw/pull/6293) | feat(providers): add qwen3.8 to Aliyun Token Plan | 在阿里云 Token Plan 目录注册 `qwen3.8-max-preview`（100 万上下文 / 65 536 输出） |
| [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) | feat(crons): support per-job model overrides | 支持 cron job 级别指定模型，回应该 Issue [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) |

### 整体推进评估

- **稳定性修复**：≥ 6 个针对性 fix PR（上下文注入、token 用量、tool_call 解析、idle 队列清理、下载器超时、审计策略）
- **可测试性**：[#6367](https://github.com/agentscope-ai/QwenPaw/pull/6367)、[#6365](https://github.com/agentscope-ai/QwenPaw/pull/6365) 修复 Console 覆盖率测试在 V8 instrumentation 下超时和 Windows 下脚本无法运行的问题
- **代码质量**：[#6369](https://github.com/agentscope-ai/QwenPaw/pull/6369) 修复 governance 模块 `audit_level=none` 不生效的语义不一致问题

整体而言，**项目在"用户发现问题→开发者自提交修复→等待合并"这条链路上的健康度较高**，但合并节奏需关注——今日仅 2 个 PR 关闭，35 个 PR 待合并。

---

## 4. 社区热点

按评论数排序的热门讨论：

| 排名 | Issue | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) [CLOSED] 子Agent触发上下文压缩时进程冻结 | 18 | **历史高热**：6/16 创建，7/22 才关闭，与今日 [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) 的 Scroll 重构形成强呼应 |
| 2 | [#6322](https://github.com/agentscope-ai/QwenPaw/issues/6322) [CLOSED] platform域名跳转广告页面 | 8 | 移动网络下域名劫持/广告跳转，可能涉及安全或 CDN 问题 |
| 3 | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) [OPEN] RemoteProtocolError | 8 | v1.1.2 中大模型连接由 QwenPaw 主动断开，导致 `peer closed connection without sending complete message body` |
| 4 | [#6318](https://github.com/agentscope-ai/QwenPaw/issues/6318) [OPEN] 支持按 conversation 级别指定模型 | 6 | 模型绑定粒度优化：希望 agent 设定默认模型，但允许单次对话覆盖 |
| 5 | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) [OPEN] v2.0 引入 ~2s 固定开销 | 4 | v1.1.12.post2 → v2.0.0.post3 升级后每次简单回复都多约 2 秒，架构层面的回归 |

**诉求分析**：  
- **架构稳定性**是过去 24 小时最强诉求（#5218、#6314、#6307 均指向 v2.0 系列架构改动带来的副作用）；  
- **多粒度模型管理**（#6318 + #6316 + #6353 PR）是用户高频共性需求——希望摆脱"agent 全局模型"的束缚；  
- **#6322 的广告劫持**反映出部署链路的潜在安全/合规风险，需要官方对 platform 域名做更明确的说明。

---

## 5. Bug 与稳定性

### 🔴 严重（影响主流程 / 数据丢失 / 进程崩溃）

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| [#6376](https://github.com/agentscope-ai/QwenPaw/issues/6376) | v2.0.0.post3 与 post4 主进程因新增 loop 功能挂掉 | ❌ 无 | OPEN，需立即关注 |
| [#5218](https://github.com/agentscope-ai/QwenPaw/issues/5218) | 子Agent触发上下文压缩时进程冻结 | 🔜 [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) 部分缓解 | 已 CLOSED，PR 待合 |
| [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError: peer closed connection` | ❌ 无 | OPEN |
| [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) | token 用量持久化瞬时失败后不重试（数据丢失） | ✅ [#6375](https://github.com/agentscope-ai/QwenPaw/pull/6375) | 已提交但 CLOSED 需复审 |

### 🟡 中等（功能不可用 / 体验受损）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6362](https://github.com/agentscope-ai/QwenPaw/issues/6362) | MiniMax-M3 通过内置供应商无法识别图片 | ❌ 无 |
| [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | MiniMax-M3 响应被截断 | ❌ 无 |
| [#6363](https://github.com/agentscope-ai/QwenPaw/issues/6363) | GLM-5-Turbo/DeepSeek-V3 tool_call 参数被 markdown 污染 | ✅ [#6364](https://github.com/agentscope-ai/QwenPaw/pull/6364) |
| [#6358](https://github.com/agentscope-ai/QwenPaw/issues/6358) | 上下文注入以 `system` 角色出现在消息中间导致

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-23

## 1. 今日速览

ZeroClaw 今日呈现典型的"高活跃、低吞吐"状态：过去 24 小时共触发 **50 次 Issue 更新**（40 新开/活跃 + 10 已关闭）和 **50 次 PR 更新**，但**所有 PR 均处于待合并状态**，且**无任何新版本发布**。讨论热度集中在 Windows 平台兼容性（#7462）、OIDC 认证架构（#7141）、OTel Turn 级 trace 关联（#6641）等基础设施级 RFC，多个 v0.9.0 里程碑（如 #7218 A2A 代理发现、#7184 i18n 子模块化）已完成讨论并 CLOSED。总体来看项目处于"密集讨论期 + 长期 PR 积压期"叠加状态，需维护者加快评审与合并节奏。

---

## 2. 版本发布

**今日无新版本发布。** 最近可见的版本方向集中在 `v0.8.0`（运行时模型切换调和，见 #6557）与 `v0.9.0`（OIDC 认证、A2A 代理发现、内存策略解耦等系列 RFC，见 #7141、#7218、#6850）。

---

## 3. 项目进展

虽然 PR 侧今日无合并/关闭动作，**Issues 侧关闭了 10 条**，对一批长期 RFC 与高优先级 Bug 完成了收口，相当于在文档、架构、缺陷追踪三方面取得实质推进：

| 编号 | 标题 | 类型 | 意义 |
|---|---|---|---|
| [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) | Turn-level OTel trace correlation | RFC / 8 评论 | 完成 RFC 讨论，明确 `tracing-opentelemetry` bridge + `#[tracing::instrument]` 在 turn 入口的实现路径 |
| [#7218](https://github.com/zeroclaw-labs/zeroclaw/issues/7218) | A2A `/.well-known/agent-card.json` 多代理发现 | RFC / 7 评论 | 为 v0.9.0 多代理/跨 claw 互通奠定协议基础 |
| [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) | i18n 文件迁入 git submodule | RFC / 7 评论 | 翻译 churn 与主仓库解耦，长期维护性提升 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC 认证提供方（追踪仍在 in-progress） | RFC / 7 评论 | 上层 RFC 已接受；DoD 子项作为独立 PR 落地 |
| [#6557](https://github.com/zeroclaw-labs/zeroclaw/issues/6557) | v0.8.0 运行时模型切换调和 | 增强 / 5 评论 | 在 v0.8.0 锁定 provider/config 语义，PR #6541 暴露的跨面问题得到解决 |
| [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | history trimming 静默丢失上下文 | Bug / P1 | 高危运行时缺陷关闭，触发一次性回归修复 |
| [#6489](https://github.com/zeroclaw-labs/zeroclaw/issues/6489) | "Everything is a plugin" 统一插件目录 | 增强 / 3 评论 | 长期架构方向 RFC 关闭，为 Integrations/Plugins 合并给出分阶段路线 |
| [#8925](https://github.com/zeroclaw-labs/zeroclaw/issues/8925) | Bedrock credential profile + systemd 文档 | Docs | AWS Bedrock 用户支持闭环 |

**项目整体进度评估：** 向前推进约 3-4 个里程碑单位（按"重大 RFC 收口 + 高危 Bug 关闭"计），但 PR 合并侧停滞，需警惕"讨论完成、实现待落地"导致的版本切延期风险。

---

## 4. 社区热点

按评论数排序，今日最活跃讨论（区分 Issues 与 PRs）：

### Issues
- **#7462**（11 评论）：[Bug]: 74 test failures on Windows — Unix-only test commands, path semantics, console encoding —— 最高热度议题，CI 当前仅 Linux，导致 Windows 用户（中文 CP936 控制台）测试全失明。链接：<https://github.com/zeroclaw-labs/zeroclaw/issues/7462>
- **#6641**（8 评论）：Turn-level OTel trace 相关讨论。
- **#7141 / #7184 / #7218**（各 7 评论）：OIDC、 i18n 子模块、A2A 代理发现三大 RFC 均进入高讨论轮次，反映维护者与贡献者正集中力量敲定 v0.9.0 架构基本面。
- **#6391 / #6850**（各 6 评论）：daemon 真实心跳 + Memory 策略解耦 —— 分别对应"多机舰队管理可靠性"与"AI 长期记忆系统可扩展性"两大用户诉求。

### PRs
- 所有展示 PR 评论数均为 `undefined`，意味着今日新增的 PR 还未形成实质性 review 讨论。
- **#8384**、[#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)、[#8325](https://github.com/zeroclaw-labs/zeroclaw/pull/8325) 等 XL 级集成型 PR 自 6 月下旬创建后多次更新但仍未合并，是 review 资源紧张的主要信号。

---

## 5. Bug 与稳定性

按 P 级别 + risk 维度整理今日可见的稳定性议题：

### P1 / High Risk（高优先级）
| 编号 | 描述 | 状态 | 是否有对应 Fix PR |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 测试 74 失败（含路径、控制台编码、Unix-only 命令） | OPEN | ❌ 无 |
| [#9235](https://github.com/zeroclaw-labs/zeroclaw/issues/9235) | `npm audit failed — 2026-07-21`，3 项 high 漏洞（`@redocly/openapi-core` 等） | OPEN | ✅ [#9270](https://github.com/zeroclaw-labs/zeroclaw/pull/9270) 已开 |
| [#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/8837) | history trimming 在禁用 pruning 时仍静默丢弃上下文 | **CLOSED** | 待核实修复来源 |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) | OIDC 安全/架构 RFC | OPEN (in-progress) | umbrella tracking，多子 PR 待落地 |

### P2 / Medium-High Risk
| 编号 | 描述 | 是否有 Fix PR |
|---|---|---|
| [#6548](https://github.com/zeroclaw-labs/zeroclaw/issues/6548) | Channel runtime 命令回复绕过 Fluent 本地化（`zh-CN` 下仍硬编码英文） | ❌ 无 |
| [#6724](https://github.com/zeroclaw-labs/zeroclaw/issues/6724) | Signal/Voice channel 凭证为空导致 supervisor 每 ~2s crashloop | ❌ 无 |
| [#6619](https://github.com/zeroclaw-labs/zeroclaw/pull/6619) | Full-autonomy agent 因缺少系统级 tool authorization 提示，模型输出"模拟拒绝"文本而不发工具调用 | ✅ PR #6619 待合并 |
| [#8943](https://github.com/zeroclaw-labs/zeroclaw/pull/8943) | Bedrock Nova 2 在 prompt caching 上报 `extraneous key [cachePoint]` | ✅ PR #8943 待合并 |
| [#8680](https://github.com/zeroclaw-labs/zeroclaw/pull/8680) | skill-review 在 fork compaction 下可能越界切片 | ✅ PR #8680 待合并（标 stale-candidate） |

### P3 / Low-Medium Risk
- **#7897**（2 评论）：安全策略 / channel config 更新需全量 daemon reload，效率低 —— 长期架构债。
- **#7883**（2 评论）：同 provider 同 family 内的模型 fallback 对用户不可见。

**稳定性总体评估：** 高优先级 Bug 修复通道顺畅（日 #9235 → PR #9270 同日闭环），但 Windows 平台适配（#7462）与 channel 运行时缺陷（#6548、#6724）长时间无人接手，存在"被遗忘的 Bug"风险。

---

## 6. 功能请求与路线图信号

按"是否已有对应 PR"分组，便于判断是否进入下一版本：

### 已有活跃 PR、进入近期 release 高概率
- **OpenAI Chat Completions 端点** ([#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486))：补齐 gateway 对 LangChain / Continue.dev / Aider 等主流 SDK 的兼容性。
- **Agent 评估 harness `zeroclaw eval`** ([#7065](https://github.com/zeroclaw-labs/zeroclaw/issues/7065))：replay + live 双模式 + 可插拔 grader + LLM-as-judge，对应 PR 方向已初步形成。
- **Per-model `vision` / `context_window` 配置** ([#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100))：RFC 与 PR 都已就位，UI 同步信号明确。
- **shell/skill 子进程内存限制** ([#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916))：生产事故驱动，落地优先级明确。
- **Composio action-scope 过滤** ([#6917](https://github.com/zeroclaw-labs/zeroclaw/issues/6917))：与 #6916 同源，统一安全硬化。

### RFC 已通过、等待实现
- **OIDC 认证提供方**（[#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)，目标 v0.9.0）。
- **Memory 策略 ↔ 存储后端解耦**（[#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850)）。
- **结构化 Observability 富化（rich events + OTel 关联 + bridge 重构）**（[#7232](https://github.com/zeroclaw-labs/zeroclaw/issues/7232)）。

### 渠道扩张（Channel 多样化）
- 新增 Mastodon（[#6423](https://github.com/zeroclaw-labs/zeroclaw/issues/6423)）、Twilio SMS（[#6427](https://github.com/zeroclaw-labs/zeroclaw/issues/6427)）、Rocket.Chat（[#6435](https://github.com/zeroclaw-labs/zeroclaw/issues/6435)）、Zulip（[#6437](https://github.com/zeroclaw-labs/zeroclaw/issues/6437)）。
- Inkbox 一体化渠道（邮件+SMS+语音+iMessage + Quickstart）（[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)）。

### 长期 / 实验性
- **LAN peer discovery mDNS**（[#8325](https://github.com/zeroclaw-labs/zeroclaw/pull/8325)）：默认关闭、可选启用，不破坏既有节点配对。
- **Goal controller + verifier**（[#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687)）：可信 goal 通道的 Rust 侧重设。
- **SandboxPolicyConfig 引入**（[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)）：在不破坏现状前提下加入 OS 级沙箱策略模型。

---

## 7. 用户反馈摘要

从高评论数 Issues 的描述与摘要中可提炼以下真实痛点：

1. **生产环境的内存 / 沙箱失控**（[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916)）：当 LLM 回退到 `wkhtmltopdf` 等 shell 命令时，整个容器 OOM。已有 1MB 输出上限与 60s 超时，但子进程自身内存无界。用户诉求明确要求对**子进程本身**施加内存上限。

2. **历史上下文静默丢失**（[#8837](https://github.com/zeroclaw-labs/zeroclaw/issues/883

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*