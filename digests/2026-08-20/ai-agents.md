# OpenClaw 生态日报 2026-08-20

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-20 00:52 UTC

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

# OpenClaw 项目动态日报 · 2026-08-20

> 数据范围：2026-08-19 ~ 2026-08-20
> 数据源：[github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 仓库今日呈现**极高活跃度**：24 小时内共 **500 条 Issues 更新**（其中 36 条已关闭）和 **500 条 PRs 更新**（其中 81 条已合并/关闭），但**无新版本发布**。维护节奏明显集中在两个方向：一是对历史严重 Bug（多位被标记为 🦞 Diamond Lobster / P0 的回归问题）做持续跟进；二是为下一个候选版本 **v2026.8.1-beta.2** 做发布前验证（[#125626](https://github.com/openclaw/openclaw/issues/125626)）。自动化机器人 `clawsweeper[bot]` 持续大规模处理存量工单，标记 `needs-maintainer-review` 的项已显著积压，社区进入"修复侧主导、新功能侧观望"的状态。

---

## 二、版本发布

**今日无新版本发布。** 临近的版本为 `v2026.8.1-beta.2`，目前处于发布验证阶段（详见 [#125626](https://github.com/openclaw/openclaw/issues/125626)）。

> ⚠️ **已知会影响升级的高优先级回归**：
> - [#108435](https://github.com/openclaw/openclaw/issues/108435) — 升级到 2026.7.1 后 gateway 无法启动（systemd / ollama / 手动启动均失败），14 人关注。
> - [#38327](https://github.com/openclaw/openclaw/issues/38327) — 升级到 2026.3.2 后 `google-vertex/gemini-3.1-pro-preview` 抛出 "Cannot convert undefined or null to object"。
> - [#83598](https://github.com/openclaw/openclaw/issues/83598) — `anthropic:claude-cli` OAuth 刷新在 2026.5.12 仍未真正生效，即便已有 #73682 的修复。
> - [#124284](https://github.com/openclaw/openclaw/issues/124284) — `v2026.8.1-beta.2` 引入的 `wrapStreamFnWithProviderPromptState` 干扰 vLLM `openai-completions` 子代理 spawn。

---

## 三、项目进展（已合并 / 已关闭的重要 PR）

今日共 **81 条 PR 进入终态**。其中对线上稳定性有直接价值的：

| PR | 标题 | 影响范围 | 状态 |
|---|---|---|---|
| [#126205](https://github.com/openclaw/openclaw/pull/126205) | `fix(outbound): preserve first-reply behavior through durable delivery` | Discord / Telegram 出站首段回复语义 | 已关闭 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | `feat(security): require acknowledgement for install policy warnings` | 安全边界、安装策略 CLI | 已关闭 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | `feat(ui): review install policy warnings` | Control UI 安全审核配套 | 已关闭 |
| [#121468](https://github.com/openclaw/openclaw/pull/121468) | `fix(discord): malformed gateway HELLO frame kills the bot's socket listener` | Discord 长连接稳定性 | 已关闭 |
| [#125664](https://github.com/openclaw/openclaw/pull/125664) | `fix(feishu): promote send attachment aliases instead of silent drop` | Feishu 附件发送 | 已关闭 |
| [#121463](https://github.com/openclaw/openclaw/pull/121463) | `fix(feishu): advertise group chat type in capabilities` | Feishu 会话路由 | 已关闭 |
| [#121378](https://github.com/openclaw/openclaw/pull/121378) | `fix(gateway): persist sessions.patch toolOverrides.webSearch true` | Session 持久化 | 已关闭 |
| [#121478](https://github.com/openclaw/openclaw/pull/121478) | `fix(gateway): preserve paired restart session refs` | 重启恢复身份 | 已关闭 |

**整体判断**：今日的合并面集中在"渠道健壮性 + 安全门禁 + 会话恢复"三个基础设施维度，对**首段回复语义、Discord/Feishu 附件链路、OAuth 死信链路**都有正向改进。亮点是 [#126205](https://github.com/openclaw/openclaw/pull/126205) 解决了 Discord/Telegram 上长期被吐槽的"durable delivery 后首段回复降级"问题。新功能侧没有显著推进，仍以清理为主。

---

## 四、社区热点

按评论数排序，反映社区真正投入讨论的话题：

1. **[#44925](https://github.com/openclaw/openclaw/issues/44925) — Subagent completion silently lost — no retry, no notification, no auto-restart on timeout**（26 评论，🧑‍💻 IIIyban）
   - 痛点：Telegram forum bot 下子代理超时/完成后，结果被静默吞掉，没有任何重试或通知，存在 E31/E42/E45 等多种失败模式。
   - 已是 🦞 Diamond Lobster 评级，但 `clawsweeper:no-new-fix-pr`，**无修复 PR**。

2. **[#77598](https://github.com/openclaw/openclaw/issues/77598) — Track live dev agent behavior and trajectory**（22 评论）
   - 由 `pashpashpash` 维护的"24 小时观察笔记"，是少数同时承担**实验观察 + 产品反馈**双重功能的 Issue。

3. **[#38327](https://github.com/openclaw/openclaw/issues/38327) — 2026.3.2 升级后 Gemini 3.1 Pro Preview 报 "Cannot convert undefined or null to object"**（14 评论）
   - 典型模型适配回归，影响使用 Google Vertex 的用户。

4. **[#108435](https://github.com/openclaw/openclaw/issues/108435) — Gateway 在 2026.7.1 升级后无法启动**（14 评论，🚨 标记 `ux-release-blocker`）
   - 跨 systemd / ollama / 手动三种启动方式，是 v2026.7.x 系列最大的升级风险之一。

5. **[#40001](https://github.com/openclaw/openclaw/issues/40001) — Write 工具没有 append 模式，孤立 cron 会话互相覆盖 `memory/YYYY-MM-DD.md`**（14 评论）
   - 这是社区**长期呼吁**的写入语义补丁，但仍 `clawsweeper:no-new-fix-pr`。

6. **[#125626](https://github.com/openclaw/openclaw/issues/125626) — Release validation: v2026.8.1-beta.2**（13 评论，由 maintainer Patrick-Erichsen）
   - 当前 release-train 的"主心骨"，决定 beta 是否能转 stable。

7. **[#88657](https://github.com/openclaw/openclaw/issues/88657) — DeepSeek V4 Flash 在 2026.5.27/28 产生 incomplete turn**（11 评论）
   - 第三方 provider（OpenRouter）兼容性问题，影响本地模型用户。

8. **[#119796](https://github.com/openclaw/openclaw/issues/119796) — Windows: vitest teardown fails with EBUSY unlink on agent state DB**（10 评论）
   - Windows CI 链路长期存在 SQLite handle 未释放问题，影响测试稳定性。

**社区诉求分析**：当下讨论聚焦在三件事——**子代理可靠性**、**模型适配回归**、**渠道消息不丢**。这三个方向恰好都对应了 8.1-beta.2 的发布验证项，说明产品决策者意识到了同一类风险。

---

## 五、Bug 与稳定性

按严重程度排序（参考 `impact:*`、`P0/P1`、🦞 Diamond Lobster / 🐚 Platinum Hermit / 🦐 Gold Shrimp 评级，以及是否有关联 PR）：

### 🚨 P0 / 影响数据丢失或升级阻塞

| Issue | 摘要 | 评级 | 修复状态 |
|---|---|---|---|
| [#108435](https://github.com/openclaw/openclaw/issues/108435) | 2026.7.1 升级后 gateway 启动失败 | 🦞 + ux-release-blocker | 无 PR |
| [#119270](https://github.com/openclaw/openclaw/issues/119270) | 文件工具剥离路径首字符 `@`，写入并删除错误文件 | 🦞 P0 | 无 PR |
| [#117742](https://github.com/openclaw/openclaw/issues/117742) | 多文件 `apply_patch` 失败时，已执行的删除被永久保留 | 🦞 P0 | 无 PR |
| [#123327](https://github.com/openclaw/openclaw/issues/123327) | 共享状态 WAL checkpoint 在 ext4 上覆写 SQLite page 1，造成数据库头损坏 | 🦪 P0 | 无 PR |
| [#70903](https://github.com/openclaw/openclaw/issues/70903) | 文件型 provider cooldown 在用户充值后仍冻结数小时 | 🦞 P0, stale | 无 PR |

### 🔥 P1 / 影响消息、Session、Auth

| Issue | 摘要 | 评级 | 修复状态 |
|---|---|---|---|
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic auth 恢复后 workspace-state migration 仍阻塞主 agent | 🦞 | ✅ 已关闭（有关联 PR） |
| [#119796](https://github.com/openclaw/openclaw/issues/119796) | Windows 下 `openclaw-agent.sqlite` handle 未释放，vitest 退出 EBUSY | 🦞 | 有 linked PR（待合） |
| [#83959](https://github.com/openclaw/openclaw/issues/83959) | Codex app-server 启动重试在新 server 就绪前耗尽 | 🐚 | 有 linked PR，待 live repro |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | 子代理完成静默丢失（E31/E42/E45） | 🦞 | ❌ 无 PR |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 工具无 append 模式，cron 会话互相覆盖 | 🦞 | ❌ 无 PR |
| [#92633](https://github.com/openclaw/openclaw/issues/92633) | `memory_search corpus=all` 15s 超时，单 corpus 正常 | 🦞 | ❌ 无 PR |
| [#114211](https://github.com/openclaw/openclaw/issues/114211) | Matrix room agent 在可见 no-reply 输出上循环 | 🦞 recovery-stuck | ❌ 无 PR |
| [#86612](https://github.com/openclaw/openclaw/issues/86612) | Windows Docker 容器 + `OPENCLAW_SANDBOX=1` 触发重启循环 | 🦞 | ❌ 无 PR |
| [#84983](https://github.com/openclaw/openclaw/issues/84983) | 原生 cron agentTurn 触发使 gateway event loop 饱和数分钟 | 🐚 recovery-stuck | ❌ 无 PR |
| [#114234](https://github.com/openclaw/openclaw/issues/114234) | 容器中 PID 复用导致 usage-cost refresh lock 永久冻结 | 🦞 recovery-stuck | 有 linked PR |
| [#123273](https://github.com/openclaw/openclaw/issues/123273) | 非默认 agent 拒绝图片附件（"failed to hydrate structured image attachment(s)"） | 🦞 | ❌ 无 PR |
| [#125679](https://github.com/openclaw/openclaw/issues/125679) | Matrix 新账户初始 sync 永不完成，回归自 #125302 | 🐚 | ✅ 已关闭 |
| [#120563](https://github.com/openclaw/openclaw/issues/120563) | Ollama / 自定义 provider 不发送历史 context | 🦪 | ✅ 已关闭 |
| [#121034](https://github.com/openclaw/openclaw/issues/121034) | ACP Claude Code Bedrock 启动把 `provider/model` 泄露到 `ANTHROPIC_MODEL` | 🦞 | 有 linked PR |
| [#124284](https://github.com/openclaw/openclaw/issues/124284) | v2026.8.1-beta.2 的 wrapper 破坏 vLLM 子代理 spawn | 🦪 | ❌ 无 PR（且是 beta 自身引入） |

### 📊 整体观察

- **P0 问题 5 项全部没有 fix PR**，其中 [#119270](https://github.com/openclaw/openclaw/issues/119270)、[#117742](https://github.com/openclaw/openclaw/issues/117742) 都是关于"工具调用产生数据损坏或越权写入"，影响面极大。
- **"recovery-stuck" 标签**在多个 Issue 中出现（#114211、#114234、#119796、#125679、#84983），提示 v2026.7/8 系列在**重启恢复路径**上有系统性弱点。
- 今日关闭了 3 个 P1 + 多个 P2 票据，但**新开 / 重新激活的 P0/P1 数量更多**，净存量仍在增长。

---

## 六、功能请求与路线图信号

| 请求 | 概要 | 当前 PR / 信号 |
|---|---|---|
| [#9016](https://github.com/openclaw/openclaw/issues/9016) | 把 OpenRouter usage cost

---

## 横向生态对比

# 个人 AI 助手/自主智能体开源生态横向对比报告
**日期**：2026-08-20

---

## 一、生态全景

2026-08-20 当日，个人 AI 助手/智能体开源生态呈现**"修复主导、新功能观望"**的整体态势：在被观察的 12 个项目中，仅 **IronClaw（v1.3.0 Stable 晋升）** 与 **Moltis（20260818.10）** 完成了版本交付，其余 10 个项目均无新版本发布。OpenClaw、ZeroClaw、CoPaw、Hermes Agent 四家以日均 40+ Issues/PR 的吞吐维持高强度运营，但**P0/P1 级 Bug 的修复闭环率普遍偏低**——OpenClaw 5 项 P0 全部无 fix PR、ZeroClaw 的 Anthropic 凭据泄露（S0）已 In-progress 7 天、CoPaw 的桌面流式冻结 Bug 仅靠 PR 排队等待合并。社区关注焦点已从"功能扩张"转向**"渠道健壮性、安装/更新路径可靠性、会话恢复语义、安全合规"**四大基础设施议题，反映生态正从早期野蛮生长进入**质量巩固与版本治理阶段**。

---

## 二、各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已合并） | Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 / 36 | 419 / 81 | ❌ 无 | 🟡 中 | 修复侧主导，v2026.8.1-beta.2 验证 |
| **ZeroClaw** | 42 / — | 高吞吐 | ❌ 无 | 🟢 良 | RFC 密集 + 反 slop 整改 |
| **CoPaw** | 4 / 46 | 30 / 17 | ❌ 无（补丁在途） | 🟢 良 | 大规模清理 + 集成测试加固 |
| **Hermes Agent** | 42 / 8 | 48 / 2 | ❌ 无 | 🟠 弱 | 高 PR 积压，合并率仅 4% |
| **IronClaw** | 15 / — | 高吞吐 | ✅ **v1.3.0 Stable** | 🟢 优 | v1.4.0 路线图立项 |
| **NanoClaw** | 3 / — | 9 / 25 | ❌ 无 | 🟢 良 | Slack 重构封板，关闭率 73% |
| **NanoBot** | 4 / — | 15 / 8 | ❌ 无 | 🟡 中 | p0 会话竞态 PR 悬置 2 周 |
| **Moltis** | 3 历史关闭 | 4 待 / 5 合并 | ✅ **20260818.10** | 🟢 优 | Apple Container + OpenAI 路由收口 |
| **LobsterAI** | 6 全部 stale | 2 新建 / 6 stale 关闭 | ❌ 无（2026.4.3 仍为最新） | 🔴 弱 | 维护放缓期 |
| **PicoClaw** | 1 / 0 | 3 / 2 | ❌ 无 | 🟡 中 | 主线收敛，多通道 UX 改进 |
| **NullClaw** | 0 / 0 | 1 / 0 | ❌ 无 | ⚪ 沉寂 | 仅 1 个文档 PR 在途 |
| **TinyClaw** | 0 / 0 | 0 / 0 | ❌ 无 | ⚪ 沉寂 | 无活动 |
| **ZeptoClaw** | 0 / 0 | 0 / 0 | ❌ 无 | ⚪ 沉寂 | 无活动 |

**吞吐梯队**：OpenClaw 单日 1000+ 工单项独自构成第一梯队；ZeroClaw/CoPaw/Hermes Agent/IronClaw 处于第二梯队（40–50/天）；NanoClaw/NanoBot/Moltis 居中（10–30/天）；PicoClaw/LobsterAI 偏低；NullClaw/TinyClaw/ZeptoClaw 处于沉寂或事实停摆状态。

---

## 三、OpenClaw 在生态中的定位

| 维度 | OpenClaw | 生态对照 |
|---|---|---|
| **社区规模** | 单日 Issues+PRs ≈ 1000 项，是第二梯队 ZeroClaw（92 项）的 **~11 倍** | 远超同类，是事实上的参考系 |
| **技术覆盖** | Discord / Telegram / Feishu / Matrix / Slack 全渠道 + 多 provider（Anthropic/OpenAI/Vertex/vLLM/OpenRouter） | 广度上无对手；CoPaw/Hermes Agent 仅覆盖部分渠道 |
| **当前状态** | "修复侧主导、新功能观望"——5 项 P0 全部无 fix PR，v2026.8.1-beta.2 阻塞于 `wrapStreamFnWithProviderPromptState` 引入的 vLLM 回归 | 体现"广度优先"策略在版本治理阶段的代价 |
| **生态位** | 多渠道、多 provider 的**通用桌面/CLI 智能体** | 与 CoPaw（Qwen 生态）、Hermes Agent（Nous/Desktop）、ZeroClaw（Rust 运行时）形成明显差异 |
| **核心痛点** | 子代理完成静默丢失（#44925，无 fix PR）、升级阻塞（#108435）、恢复路径系统性缺陷（多个 `recovery-stuck`） | 痛点集中在"广度扩张未同步建立健壮性护栏" |

**优势**：社区规模、渠道广度、版本节奏（beta.2 验证中）、多 provider 兼容。
**劣势**：P0 闭环率低（0%）、`clawsweeper` 机器人积压大量 `needs-maintainer-review` 项、恢复路径存在系统性弱点。
**与同类差异**：CoPaw 走"自托管 Hub + 企业部署"路线，Hermes Agent 走"Desktop + Bot Mode"路线，ZeroClaw 走"Rust 优先 + WASM 插件架构"路线——OpenClaw 是唯一坚持"全渠道 + 通用 LLM 网关"路线的项目。

---

## 四、共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **渠道/平台消息不丢** | OpenClaw (#44925, #121468)、Hermes Agent (#79564 Discord v10)、PicoClaw (#3315, #3329)、CoPaw (#7103 集成测试) | Discord/Telegram/Feishu/LINE/Mattermost 长连接稳定性与首段回复语义 |
| **安装/升级路径可靠性** | Hermes Agent (#83529, #90159, #79539 三端 P1)、OpenClaw (#108435 升级阻塞)、CoPaw (#3005/#3177 启动失败) | "昨天能用今天就坏"成为用户最高频抱怨 |
| **会话恢复与持久化** | OpenClaw (#119796 WAL checkpoint 损坏)、NanoBot (#5271 p0 竞态悬置 2 周)、CoPaw (#2723 频道切换丢失) | SQLite handle、WAL checkpoint、跨重启 session refs 成为系统性弱点 |
| **OAuth / 部署摩擦** | NanoBot (#5444, #5445, #5446 三件套)、ZeroClaw (Anthropic 凭据泄露 #9976 S0)、IronClaw (#7745 Copilot MCP 失败) | Docker 容器、socks5 协议、凭据脱敏成为部署门槛 |
| **安全合规（CWE 级别）** | Moltis (#1216 CWE-306 vault 解锁无认证)、ZeroClaw (#9976 凭据日志)、CoPaw (#2884 用户目录清空事件) | 三大项目同时涌现"AI 助手越权操作"事件 |
| **多 provider 兼容回归** | OpenClaw (#38327 Gemini, #83598 OAuth 死信, #88657 DeepSeek)、Hermes Agent (#74295 Copilot, #70058 GLM) | Anthropic/OpenAI/Vertex/DeepSeek/Groq 适配面越广，回归风险越高 |
| **LLM 路由 / Fallback 链** | PicoClaw (#3200 配置化回退链)、CoPaw (#2089 fallback 模型)、Hermes Agent (#89497 "out of Nous credits" 误报) | 用户对"主模型挂了能自动切"的需求强烈 |
| **WebUI 可观测性** | NanoBot (#5420 轮次可观测、#5408 后续建议、#5438 Ctrl-C)、Hermes Agent (Web Dashboard Bot Mode 暴露)、IronClaw (OOBE #6994) | 工程化对话界面成为新一轮 UX 竞争点 |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道通用 LLM 网关 | 个人/小团队的桌面+IM 终端用户 | 广度优先：插件化的 channel/provider registry |
| **ZeroClaw** | Rust 运行时 + WASM 插件 | 性能敏感、要求强一致性的工程团队 | Rust 优先（panic-free 重构中）、SOP 权限合同、WASM guest 沙箱 |
| **CoPaw** | 自托管多用户 Hub + Qwen 生态 | 企业部署 + 国内 AI 生态用户 | 多项目目录、QwenPaw Hub、worktree 沙箱 |
| **Hermes Agent** | Desktop + Bot Mode 群聊 | Nous 生态重度用户、群聊 bot 运营者 | Desktop-first IPC、Web Dashboard 与 Gateway 能力扩散 |
| **IronClaw** | 渠道优先的 Onboarding + 持久化沙箱 | 多渠道企业用户 | Capabilities 规范化栈、ActivationProvenance、Storybook 设计系统 |
| **Moltis** | Apple Silicon 沙箱 + OpenAI Responses 路由 | macOS 高级用户、OpenAI 兼容 provider 用户 | Apple Container 1.x 兼容、normalized URL 路由分类 |
| **NanoBot** | 内存子系统 + TUI/WebUI 双界面 | 喜欢 CLI + WebUI 并重的工程用户 | Dream 游标、`ask_clarification` 工具原语 |
| **NanoClaw** | Slack 集成 + agents 旗标 | Slack 团队协作场景 | 可拆分安装（基础 vs 完整 agents）、多 Slack channel payload |
| **PicoClaw** | 多通道 + 模型回退链 UX | 轻量用户、CLI 风格偏好 | Telegram 交互式按钮、Zsh completion |
| **LobsterAI** | IM 多渠道 + Windows 安装器 | 国内 IM 用户（钉钉/飞书/微信/QQ） | dictbind 静默安装、upload-first 双通道构建 |
| **NullClaw / TinyClaw / ZeptoClaw** | （事实停摆或定位不明） | — | 无显著推进 |

**架构分水岭**：ZeroClaw 是**唯一以 Rust 为核心**的项目；CoPaw/IronClaw 强调**企业级部署与权限合同**；OpenClaw/Hermes Agent/PicoClaw 走**桌面+IM 终端**路线；Moltis 在 **macOS 原生沙箱**方向独树一帜。

---

## 六、社区热度与成熟度分层

### 🔴 第一梯队：高速迭代 + 架构演进期
- **OpenClaw、ZeroClaw、CoPaw、Hermes Agent、IronClaw**——日吞吐 40–1000 项，正在重构核心架构（ZeroClaw RFC Rev 3 SOP 合同、IronClaw v1.4.0 路线图、OpenClaw 多 provider 兼容层、CoPaw Hub 化）。
- 共同特征：吞吐大但**修复闭环率分化**（CoPaw 关闭率 92% 优，Hermes Agent 合并率仅 4% 弱）。

### 🟡 第二梯队：质量巩固 + 局部扩张期
- **NanoClaw、NanoBot、Moltis、PicoClaw**——日吞吐 5–30 项，专注子系统稳定性（NanoBot 内存、NanoClaw Slack、Moltis Apple Container 沙箱、PicoClaw 多通道 UX）。
- 共同特征：PR 节奏稳健，但**有 1–2 周的悬置积压**（NanoBot #5271 p0、NanoClaw #5445/#5446 待评审）。

### 🔵 第三梯队：维护放缓期
- **LobsterAI**——6 条 Issue 全部 stale 4 个月，最新版本仍为 2026.4.3，PR 高度依赖 0xFLX 单点贡献者。
- 共同风险：**核心 Bug（#1566/#1569）4 个月无修复**，用户信心流失。

### ⚫ 第四梯队：沉寂期
- **NullClaw、TinyClaw、ZeptoClaw**——24 小时 0 活动或仅 1 个文档 PR 在途。
- 共同特征：缺乏持续维护者关注，存在事实停摆风险。

---

## 七、值得关注的趋势信号

### 1. **"升级可靠性"成为生态级痛点**
Hermes Agent 三端（Windows/macOS/Linux）同时出现"升级即破坏"Issue，OpenClaw #108435 升级阻塞 CoPaw #3005/#3177 启动失败共同描绘出**"广度扩张的反噬"**——多 provider、多平台、多渠道的兼容性矩阵已超出单版本回归测试能力。**对开发者的参考价值**：CI 矩阵治理（如 IronClaw #7756 修复 Merge Queue 反复超时所反映的）正在取代"快速迭代"成为新的核心竞争力。

### 2. **"AI 助手越权操作"从理论风险变为实际事件**
Moltis CWE-306 vault 无认证解锁（#1216）、ZeroClaw Anthropic 凭据片段入日志（#9976 S0）、CoPaw Ubuntu 用户目录清空（#2884）——**三家在 24 小时内同时涌现安全事件**，且均为 P0/S0 级别。**对开发者的参考价值**：工具调用的"作用域证明 = 变更作用域"（Hermes Agent #90144 提出的架构原则）正在从口号变为刚需，权限合同（ZeroClaw RFC #9598 Rev 3、IronClaw Capabilities 规范化）成为下一阶段架构重点。

### 3. **"持久化与恢复"成为系统性弱点**
OpenClaw 多 `recovery-stuck` Issue、NanoBot p0 会话竞态悬置

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**：2026-08-20
**数据来源**：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 一、今日速览

NanoBot 今日处于**中高活跃状态**，过去 24 小时内共产生 4 条活跃 Issue 和 23 条 PR（其中 8 条已合并/关闭、15 条待合并），整体迭代节奏稳健。**今日无新版本发布**。从议题分布看，社区关注点集中在三个方向：Docker/OAuth 部署链路（3 个相关条目相互印证）、内存与持久化子系统（Dream 游标、token 触发整合、并发写入冲突），以及 WebUI 可观测性与体验增强。p0 级会话竞态修复 PR 已挂起约两周未合并，提示维护者需要重点关注积压。

---

## 二、版本发布

无新版本发布。

---

## 三、项目进展（今日合并/关闭的 PR）

今日共关闭 **8 条 PR**，整体推进了 CLI、内存、WebUI、技能等多个子系统的可用性与稳定性：

| PR | 标题 | 影响范围 |
|---|---|---|
| [#5443](https://github.com/HKUDS/nanobot/pull/5443) | fix(tui): 在命令菜单中暴露 `/exit` | TUI 发现性与一致性 |
| [#5440](https://github.com/HKUDS/nanobot/pull/5440) | perf(memory): 复用语境前缀进行本地压缩 | 内存压缩性能与正确性 |
| [#4527](https://github.com/HKUDS/nanobot/pull/4527) | 新增 ask_clarification 工具 | 智能体交互范式（澄清→回复短路） |
| [#5438](https://github.com/HKUDS/nanobot/pull/5438) | fix(webui): Ctrl-C 后及时返回 | WebUI 退出路径可靠性 |
| [#5341](https://github.com/HKUDS/nanobot/pull/5341) | fix(skills): 天气技能 Windows 兼容 | 跨平台技能执行 |
| [#4282](https://github.com/HKUDS/nanobot/pull/4282) | 在设置视图新增文件管理 | 远程主机文件操作便利性 |
| [#5439](https://github.com/HKUDS/nanobot/pull/5439) | fix(deps): 仅支持标准 `socks5://` 代理 | HTTPX SOCKS 依赖与协议范围（明确不接受 `socks://` 别名） |
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | fix(session): 防止过期后台任务覆盖会话（**p0**） | 会话数据完整性（详情见第六节） |

**进展评估**：今日合并显著加强了"内存子系统"的稳健性（[#5440](https://github.com/HKUDS/nanobot/pull/5440)、[#5271](https://github.com/HKUDS/nanobot/pull/5271)），同时补齐了 WebUI 与 TUI 的可用性细节（[#5438](https://github.com/HKUDS/nanobot/pull/5438)、[#5443](https://github.com/HKUDS/nanobot/pull/5443)），并落地了一个新的工具原语 `ask_clarification`（[#4527](https://github.com/HKUDS/nanobot/pull/4527)）。Docker/OAuth 链路的修复方案（[#5445](https://github.com/HKUDS/nanobot/pull/5445)、[#5446](https://github.com/HKUDS/nanobot/pull/5446)）已就绪但尚未合并，处于待审阅状态。

---

## 四、社区热点

### 最受关注的 Issue

1. **[#5425 socks:// 代理 URL 不被识别](https://github.com/HKUDS/nanobot/issues/5425)** —— 唯一在过去 24h 收到 1 条评论的 Issue。`OpenAI 兼容` 自定义 provider 在使用 `socks://` 别名代理时，请求在抵达 provider 之前即失败。用户痛点非常具体：标准 `socks5://` 才能被 HTTPX 接受，但用户在配置与环境变量中更常写 `socks://`。已有 [PR #5439](https://github.com/HKUDS/nanobot/pull/5439) 提交但**明确不兼容** `socks://`，与本 Issue 的诉求相反，存在路线分歧。

2. **[#5447 将 nanobot + ScanPay x402 整合为付费安全扫描 MCP 服务](https://github.com/HKUDS/nanobot/issues/5447)** —— 商业集成提案。提交者希望将 nanobot 与其 Solana x402 微支付安全扫描器（每次扫描 0.0007 SOL）打通，构建一条"代理营收链"。该 Issue 揭示了一个潜在的生态方向：第三方将 nanobot 作为 MCP 服务容器进行变现。

3. **[#5441 Dream 游标在工具错误被恢复后仍然卡住](https://github.com/HKUDS/nanobot/issues/5441)** —— 提出一个语义级 Bug：`dream_run_completed()` 只要在整轮运行中出现**任一**工具事件错误就拒绝完成，即使模型后续正确恢复。直接导致后续手动 `/dream` 与周期任务重复处理同一批次历史。已由 [PR #5442](https://github.com/HKUDS/nanobot/pull/5442) 修复。

### 讨论集中的 PR 主题

- **Docker/OAuth 三件套**：[#5444 Issue](https://github.com/HKUDS/nanobot/issues/5444)、[PR #5445](https://github.com/HKUDS/nanobot/pull/5445)、[PR #5446](https://github.com/HKUDS/nanobot/pull/5446) —— 三个条目相互呼应，揭示容器部署 OAuth 是当前最突出的部署障碍。
- **WebUI 增强**：[#5420](https://github.com/HKUDS/nanobot/pull/5420) 增加轮次可观测性与安全恢复；[#5408](https://github.com/HKUDS/nanobot/pull/5408) 增加后续建议。
- **内存子系统**：[#5403](https://github.com/HKUDS/nanobot/pull/5403) 用 API 上报 token 触发整合；[#5379](https://github.com/HKUDS/nanobot/pull/5379) 保留完整整合输入；[#5440](https://github.com/HKUDS/nanobot/pull/5440) 已合并复用前缀；[#5442](https://github.com/HKUDS/nanobot/pull/5442) 修复 Dream 游标。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 已有修复 |
|---|---|---|---|
| **p0** | [PR #5271](https://github.com/HKUDS/nanobot/pull/5271) | 后台陈旧任务在 `/new` 或会话替换后覆盖当前会话数据 | 已提供方案（待合并） |
| **p1** | [PR #5403](https://github.com/HKUDS/nanobot/pull/5403) | 本地 tiktoken 估算偏低 30–50%，导致 token 整合永远不触发 | 已有修复 |
| **p1** | [PR #4853](https://github.com/HKUDS/nanobot/pull/4853) | 新增 nano_timer 工具（冲突标识） | 工具类增强 |
| **p1** | [PR #5405](https://github.com/HKUDS/nanobot/pull/5405) | 技能支持手动调用模式以避免副作用外溢 | 已有修复 |
| **p2** | [Issue #5425](https://github.com/HKUDS/nanobot/issues/5425) | `socks://` 代理别名不被识别，请求未发出即失败 | [PR #5439](https://github.com/HKUDS/nanobot/pull/5439) 仅支持 `socks5://`（与诉求相反） |
| **p2** | [Issue #5444](https://github.com/HKUDS/nanobot/issues/5444) | Docker 中通过 OAuth 登录 OpenAI 失败（权限被拒） | [PR #5445](https://github.com/HKUDS/nanobot/pull/5445)、[#5446](https://github.com/HKUDS/nanobot/pull/5446) |
| **p2** | [Issue #5441](https://github.com/HKUDS/nanobot/issues/5441) | 单次已恢复工具错误永久阻塞 Dream 内存游标 | [PR #5442](https://github.com/HKUDS/nanobot/pull/5442) |
| **p2** | [PR #5379](https://github.com/HKUDS/nanobot/pull/5379) | 有损截断导致整合丢失完整输入 | 已有修复 |
| **p2** | [PR #5257](https://github.com/HKUDS/nanobot/pull/5257) | 持续目标在 turn idle 时缺少上限 | 已有修复 |
| **p2** | [PR #5438](https://github.com/HKUDS/nanobot/pull/5438) | WebUI Ctrl-C 后未能及时返回 | **已合并** |
| **p2** | [PR #5431](https://github.com/HKUDS/nanobot/pull/5431) | 后台任务异常被静默丢弃 | 已有修复 |
| **p2** | [PR #5430](https://github.com/HKUDS/nanobot/pull/5430) | 已完成任务组未释放，累积空集合 | 已有修复 |
| **p2** | [PR #5341](https://github.com/HKUDS/nanobot/pull/5341) | Windows PowerShell 中 `curl` 解析为 `Invoke-WebRequest` | **已合并** |

**关注重点**：
- Docker/OAuth 链路（#5425、#5444）已形成 Issue↔PR 的明确对应，**建议维护者优先合并 #5445、#5446 以闭环该集群**。
- `socks://` 与 `socks5://` 的策略分歧（[#5425](https://github.com/HKUDS/nanobot/issues/5425) vs [#5439](https://github.com/HKUDS/nanobot/pull/5439)）需要维护者明确表态。

---

## 六、功能请求与路线图信号

- **付费 MCP/x402 集成（[Issue #5447](https://github.com/HKUDS/nanobot/issues/5447)）**：首次出现第三方商业集成提案。该请求并非典型功能诉求，而是生态接入信号——若被采纳，可能推动 nanobot 提供 MCP 服务化能力，并带来付费墙、API 计费、密钥托管等基础设施需求。短期内被纳入下一版本的可能性较低，但值得作为路线图候选。
- **`ask_clarification` 工具（[PR #4527](https://github.com/HKUDS/nanobot/pull/4527)）**：**今日已合并**，成为智能体范式新原语，预示 nanobot 计划强化"澄清→回复"短路能力。
- **`nano_timer` 核心工具（[PR #4853](https://github.com/HKUDS/nanobot/pull/4853)）**：提供 UTC/本地时间、IANA 时区（含 DST）、日历字段，无新增依赖。冲突标识仍在，待解决后可能进入下一个版本。
- **WebUI 轮次可观测性与后续建议（[PR #5420](https://github.com/HKUDS/nanobot/pull/5420)、[#5408](https://github.com/HKUDS/nanobot/pull/5408)）**：表明 WebUI 路线在向"工程化对话界面"演进，含 usage 累计、中断折叠、临时建议生成。
- **技能手动调用模式（[PR #5405](https://github.com/HKUDS/nanobot/pull/5405)）**：通过 `disable-model-invocation: true` 让部署/发布类副作用技能仅在用户显式触发下运行，提升企业场景的安全性。
- **设置视图文件管理（[PR #4282](https://github.com/HKUDS/nanobot/pull/4282)）**：今日合并，反映"远程主机 → 文件浏览器"的需求是真实且长期的。

---

## 七、用户反馈摘要

由于 Issues/PR 的评论数据有限（多数为 0），以下从摘要文本中提炼痛点与场景：

- **容器化部署用户的 OAuth 痛点**（[#5444](https://github.com/HKUDS/nanobot/issues/5444)）：用户在 Docker 中执行 OAuth 登录遭遇 `PermissionError: /home/...`，错误信息暴露了 oauth-cli-kit 默认写入 platformdirs 而非 nanobot 托管目录的根因。**用户场景**：希望在容器内一键完成 OpenAI 登录而无需手动迁移凭据；当前需具备目录权限与挂载知识。
- **代理配置期望与协议实现的鸿沟**（[#5425](https://github.com/HKUDS/nanobot/issues/5425)）：用户配置 `socks://` 时请求失败。**用户场景**：自定义 OpenAI 兼容 provider + 内网代理；HTTPX 仅接受 `socks5://` 标准协议的现状对普通用户不够友好。
- **Dream 重复执行的资源浪费**（[#5441](https://github.com/HKUDS/nanobot/issues/5441)）：用户反馈"同一历史批次被反复重处理，重复产生编辑"。**用户场景**：长期运行的梦境整理与手动 `/dream` 共存时，缺乏去重/失败恢复语义导致副作用放大。
- **背景任务异常不可见**（[PR #5431](https://github.com/HKUDS/nanobot/pull/5431)）：原实现 `set.discard` 静默吞掉异常，用户**无法**定位后台任务失败原因；维护者将提供 task name + traceback。
- **WebUI 退出不干净**（[PR #5438](https://github.com/HKUDS/nanobot/pull/5438)）：Ctrl-C 后 WebUI 客户端租约未及时释放，导致网关卡顿或无法快速重启。**用户场景**：开发者高频重启 dev server。
- **Windows 技能执行差异**（[PR #5341](https://github.com/HKUDS/nanobot/pull/5341)）：在 Windows PowerShell 中 `curl` 默认指向 `Invoke-WebRequest`，首个天气命令失败需智能体自行分析重试。**用户场景**：跨平台用户期望技能"开箱即用"，无需感知 shell 差异。
- **远程文件操作不便**（[PR #4282](https://github.com/HKUDS/nanobot/pull/4282)）：用户在远程主机使用 nanobot 时需手动 SSH/复制文件，期望设置视图直接浏览/修改 Agents/SOUL 配置。**用户场景**：云端/容器部署用户对文件管理的强需求。
- **持续目标缺少终止条件**（[PR #5257](https://github.com/HKUDS/nanobot/pull/5257)）：类似"每天无限跟进我"的请求被错误记录为活跃目标。**用户场景**：长任务规划与生命周期管理需要更严格的边界。

整体来看，用户对**部署摩擦**、**内存可靠性**、**跨平台一致性与可观测性**的反馈最为集中。

---

## 八、待处理积压（提醒维护者关注）

| 编号 | 类型 | 标题 | 悬置时长 | 建议优先级 |
|---|---|---|---|---|
| [#5271](https://github.com/HKUDS/nanobot/pull/5271) | PR（p0） | fix(session): 防止过期后台任务覆盖会话数据 | 约 2 周（创建 2026-08-06） | **紧急** |
| [#4853](https://github.com/HKUDS/nanobot/pull/4853) | PR（p1，冲突） | feat(tools): 新增 nano_timer 核心工具 | 约 1.5 个月（创建 2026-07-08） | 高 |
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) | PR（p1，冲突） | feat(skills): 支持手动调用模式 | 4 天 | 高 |
| [#5403](https://github.com/HKUDS/nanobot/pull/5403) | PR（p1，冲突） | fix(memory): 用 API token 触发整合 | 4 天 | 高 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | PR（p2，冲突） | fix(memory): 保留完整整合输入 | 约 1 周 | 中 |
| [#5257](https://github.com

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-20**
**数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃的开发节奏，过去 24 小时内有 **50 条 Issues 更新（42 条活跃/8 条关闭）** 与 **50 条 PR 更新（48 条待合并/2 条已合并或关闭）**。讨论焦点集中在三类问题：**(1) 安装/更新路径上的稳定性缺陷**（#83529、#90159、#79539 均为 P1/P2 级），**(2) Bot Mode 群聊能力从 Desktop 客户端向 Web Dashboard 与 Gateway 的能力扩散**（#89995、#90398、#90392），以及 **(3) Webhook 与 Discord 等平台层的功能对齐战役**（#84834、#79564）。PR 合并率仅 4%，反映出当前存在明显的代码评审积压，issues 关单率 16% 同样偏低，需要维护者关注流水线吞吐。

---

## 2. 版本发布

**无新版本发布。** 当前主线仍停留在 Hermes Agent v0.20.0（2026.8.3，commit ee4bb75b），可参见 [Issue #83529](https://github.com/NousResearch/hermes-agent/issues/83529) 中的 `hermes version` 输出。

---

## 3. 项目进展

今日进入关闭/合并流程的条目共 10 个（Issues 8 + PR 2），关键收获包括：

| 主题 | 编号 | 实质进展 |
|------|------|----------|
| Copilot 路由 reasoning_effort `ultra` 静默降级 | [Issue #74295 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/74295) | 修复 Copilot 路径上 reasoning effort 被错误 clamp 到 `medium` 的问题 |
| GLM API 拒绝 `ultra` 导致静默回退到 Claude | [Issue #70058 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/70058) | 避免 400 错误时静默换模型 |
| Desktop "Create on" picker 永不出现 | [Issue #89823 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/89823) | 修复 plugin 期望数组但 IPC 返回对象的契约不匹配 |
| Cron 每任务模型覆盖对非 Anthropic provider 失效 | [Issue #89503 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/89503) | 修复 reasoning.effort 未翻译问题 |
| Desktop focus layout 切 tab 不刷新 UI | [Issue #72590 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/72590) | Tab 切换的 UI 渲染回归修复 |
| Desktop 暴露已解析的连接模式给 skills/MCP/plugins | [Issue #82140 (CLOSED)](https://github.com/NousResearch/hermes-agent/issues/82140) | 扩展面增强 |

整体判断：项目在**配置与运行时一致性**、**Bot Mode 桌面交互**两条主线上有明确推进，但**平台安装/更新**这条主线的多个 P1 bug 仍处于 Open 状态（见第 5 节）。

---

## 4. 社区热点

按评论数排序的今日热点：

1. **[#66616](https://github.com/NousResearch/hermes-agent/issues/66616)（60 条评论）** — Skills index 看门狗报告 `degraded`：索引 29.8h 旧，超出 26h 上限。该自动化探测器长期未恢复，是基础设施层面最显眼的悬空信号，影响 `/docs/skills` 页面可用性。
2. **[#84834](https://github.com/NousResearch/hermes-agent/issues/84834)（19 条评论）** — Webhook Feature Package 5×2×3 修复计划元 Issue，涵盖 ingress/execution/delivery/config/UI/deploy/doc 七个面，是当前最大的跨模块协同工作。
3. **[#79564](https://github.com/NousResearch/hermes-agent/issues/79564)（8 条评论）** — Discord API v10 (discord.py 2.7.1) 全量对齐战役，与 Webhook 战役并列构成两大平台层推进。
4. **[#83529](https://github.com/NousResearch/hermes-agent/issues/83529)（6 条评论 👍 关注度高）** — `hermes update` 在 Debian Trixie 上"昨天还能用，今天升级就崩"，是非常典型的用户痛点。
5. **[#89614](https://github.com/NousResearch/hermes-agent/issues/89614)（5 条评论）** — Windows 11 上 Desktop 用陈旧 PID `taskkill /F /PID svchost.exe` 触发 0xEF 蓝屏，破坏性极强。

**诉求分析**：社区当前最集中的诉求是**"升级不要破坏现有环境"**和**"能力可见性"**（Web Dashboard 也要能开群聊、Desktop 连接模式要暴露给扩展、Skills 索引要新鲜）。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1 — 安装/更新/平台崩溃

| 编号 | 标题 | 状态 | Fix PR |
|------|------|------|--------|
| [#83529](https://github.com/NousResearch/hermes-agent/issues/83529) | `hermes update` 升级失败致 Hermes 不可用 | OPEN | 无 |
| [#89614](https://github.com/NousResearch/hermes-agent/issues/89614) | Windows Desktop 用陈旧 PID `taskkill` 杀 svchost.exe，触发 0xEF 蓝屏 | OPEN | 无 |

### 🟠 P2 — 回归/兼容/会话状态

| 编号 | 标题 | Fix PR |
|------|------|--------|
| [#85422](https://github.com/NousResearch/hermes-agent/issues/85422)（👍 2） | macOS 官方安装器早于 Desktop remote-client 流程，强制本地引导 | 无 |
| [#90299](https://github.com/NousResearch/hermes-agent/issues/90299) | 每次启动都误报 `TERMINAL_CWD` 弃用警告（`warn_deprecated_cwd_env_vars` 误判） | 无 |
| [#84064](https://github.com/NousResearch/hermes-agent/issues/84064) | `hermes config set/unset` 对含字面 `.` 的 key（如 `providers.openai.com-v2`）静默损坏 config.yaml | 无 |
| [#85605](https://github.com/NousResearch/hermes-agent/issues/85605) | Desktop Electron 连接 `hermes serve` headless 后端时 session token 握手 404 | 无 |
| [#90159](https://github.com/NousResearch/hermes-agent/issues/90159) | `hermes update` 装上 mcp 2.0.0 覆盖声明的 mcp==1.28.1，全部 HTTP/SSE MCP server 失联 | 无 |
| [#89497](https://github.com/NousResearch/hermes-agent/issues/89497) | 群聊 bots 卡在 "thinking" 然后报"out of Nous credits"（实际不耗 Nous） | 无 |
| [#90229](https://github.com/NousResearch/hermes-agent/issues/90229) | Windows Desktop 右侧栏文件树启动后永远卡在 skeleton | 无 |
| [#90360](https://github.com/NousResearch/hermes-agent/issues/90360) | `hermes sessions archive/export` 对 ~Aug 14 之后的 desktop 会话过滤返回空 | 无 |
| [#90134](https://github.com/NousResearch/hermes-agent/issues/90134) | Windows 上 `hermes desktop` 构建在 blockmap.js 失败 | 无 |
| [#79539](https://github.com/NousResearch/hermes-agent/issues/79539) | Windows 缺失 base interpreter 时把恢复交给 `hermes-setup --update`，陷入新的不可恢复循环（#58749 后续） | 无 |

### 🟡 P3 — 体验/边界

- [#90365](https://github.com/NousResearch/hermes-agent/issues/90365) — Desktop 设置中"Expensive Model Warning"没有 confirm 按钮（缺 `confirm_expensive_model` 往返）
- [#90316](https://github.com/NousResearch/hermes-agent/issues/90316) — Remote-primary Desktop 仍会为 "This device" 启动 loopback agent
- [#90333](https://github.com/NousResearch/hermes-agent/issues/90333) — macOS 上 Nous portal Google sign-in passkey 2FA 进入"try again"死循环
- [#90403](https://github.com/NousResearch/hermes-agent/issues/90403) — Mattermost standalone fallback 拒绝 `(file_path, is_voice)` 元组，附件投递失败
- [#90007](https://github.com/NousResearch/hermes-agent/issues/90007) — 提议增加低内存 Windows 执行 profile
- [#63852](https://github.com/NousResearch/hermes-agent/issues/63852) — `hermes fallback list` 仅证明配置有效，不证明推理时可用，缺原生 readiness check
- [#82140](https://github.com/NousResearch/hermes-agent/issues/82140)（CLOSED）— Desktop 连接模式已暴露

**整体判断**：今日没有任何 P1/P2 bug 获得 fix PR 合入，**安装/更新路径在 Windows + macOS + Linux 三端都存在未结案的 P1/P2 缺陷**。这是当前最需要维护者资源倾斜的方向。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 已有对应 PR？ |
|------|------|---------------|
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | Webhook Feature Package（graph-gated 5×2×3 修复） | 暂无 |
| [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | Discord API v10 全量对齐战役 | 暂无 |
| [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | Bot Mode 群聊在 Web Dashboard 与 Gateway 暴露 | 高度对齐 [#90398](https://github.com/NousResearch/hermes-agent/pull/90398)、[#90392](https://github.com/NousResearch/hermes-agent/pull/90392) |
| [#63852](https://github.com/NousResearch/hermes-agent/issues/63852) | 不开 agent session 的 fallback chain 原生 readiness check | 暂无 |
| [#90007](https://github.com/NousResearch/hermes-agent/issues/90007) | 资源感知的低内存 Windows 执行 profile | 暂无 |
| [#84483](https://github.com/NousResearch/hermes-agent/issues/84483) | Desktop 远程后端接入自托管 auth_provider | 暂无 |
| [#90144](https://github.com/NousResearch/hermes-agent/issues/90144) | 架构原则："证明作用域必须等于变更作用域" | 暂无（但与现有多个 bug 模式呼应） |

**已进入 PR 流程、可能合入下个版本的功能**：

- **[PR #3335](https://github.com/NousResearch/hermes-agent/pull/3335)** — Zulip 平台插件（已重构为标准 plugin 形态，跨多个核心模块）。
- **[PR #90395](https://github.com/NousResearch/hermes-agent/pull/90395)** — Cron 持久化执行身份与原子 idempotency。
- **[PR #90396](https://github.com/NousResearch/hermes-agent/pull/90396)** — `a2a_call` 转发 peer-specific metadata（闭环 #89919）。
- **[PR #90392](https://github.com/NousResearch/hermes-agent/pull/90392)** — Desktop bots 向群聊房间发消息的工具。
- **[PR #70571](https://github.com/NousResearch/hermes-agent/pull/70571)** — 拖拽创建 session（New session / 项目 + / Workspace 三个拖源）。
- **[PR #85351](https://github.com/NousResearch/hermes-agent/pull/85351)** — 浏览器扩展认证控制器（opt-in 通道，把 `browser_*` 工具路由到当前会话的浏览器）。

---

## 7. 用户反馈摘要

- **"昨天还能用，今天升级就坏了"** — 出现在 [#83529](https://github.com/NousResearch/hermes-agent/issues/83529)、[#90159](https://github.com/NousResearch/hermes-agent/issues/90159)、[#79539](https://github.com/NousResearch/hermes-agent/issues/79539)。用户对升级路径的信任度持续下降，三个 issue 共同描绘出**"升级即风险"**的体验。
- **"能力仅 Desktop 可见，Web Dashboard/Gateway 是空集"** — 来自 [#89995](https://github.com/NousResearch/hermes-agent/issues/89995)。用户希望 Bot Mode 群聊在 Web 上也能开。
- **"用不用 Nous 都报 Nous credits 用完"** — 来自 [#89497](https://github.com/NousResearch/hermes-agent/issues/89497)，反映错误归因误导用户，bot 实际不消耗 Nous 配额。
- **"macOS 安装器版本过老，强行走本地引导"** — 来自 [#85422](https://github.com/NousResearch/hermes-agent/issues/85422)（👍 2），用户希望新装/升级用 remote 模式的人被正确引导。
- **"Self-hosted OIDC 接不进来"** — 来自 [#84483](https://github.com/NousResearch/hermes-agent/issues/84483)，自部署用户反映"Remote gateway incomplete"且无 OIDC 引导按钮。
- **"Slack 用户的桌面与 TUI 不一致"** — [#90360](https://github.com/NousResearch/hermes-agent/issues/90360)、[#90299](https://github.com/NousResearch/hermes-agent/issues/90299) 中可见 CLI 与 Desktop 的过滤/警告口径不一致。
- **正面信号**：[PR #90394](https://github.com/NousResearch/hermes-agent/pull/90394)（`/config` 不再误显别家 key）、[PR #90399](https://github.com/NousResearch/hermes-agent/pull/90399)（首启 banner 不再误报 "No skills installed"），均来自"full-surface live QA sweep"，说明维护者团队正主动跑回归。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 标题 | 风险/影响 | 建议动作 |
|------|------|----------|----------|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | Skills index 29.8h 旧，watchdog 长期 degraded | 文档站数据陈旧 | 检查 `.github/workflows/skills-index.yml` 与 `deploy-site.yml` 是否按 cron 6/18 UTC 成功运行 |
| [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) | Webhook Feature Package meta-issue | 跨 7 个面的协调 | 指派 owner 与里程碑 |
| [#79564](https://github.com/NousResearch/hermes-agent/issues/79564) | Discord v10 对齐战役 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**：2026-08-20
**项目**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度偏低，处于**维护与清理阶段**。共记录 1 条 Issue 关闭、5 条 PR 变动（其中 2 条关闭、3 条仍待合并），无新版本发布。值得关注的是，已关闭的 Issue #1305 与 PR #1008 关联，涉及 `picoclaw completion` 命令因新 banner 写入 STDOUT 而破坏补全流程的 bug；同日关闭的 PR #3341 为 Telegram 频道带来交互式命令 UX 改进，而 2 条被标记为 `[stale]` 的长期 PR（#3316、#3200）反映出维护者在主动清理积压。综合判断项目处于**稳定迭代期**，主线功能趋于收敛，社区关注点已转向多通道集成（Telegram / LINE）与模型路由策略的健壮性。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日合并/关闭的重要 PR 共 2 条：

- **PR #3341 — feat(telegram): add interactive command UX and formatted ephemeral fallback**（已关闭）
  - 作者：As-tsaqib | [链接](https://github.com/sipeed/picoclaw/pull/3341)
  - 内容：为 Telegram `/memory`、`/help` 等命令提供交互式 UX（按钮式菜单）替代原有 CLI 风格子命令语法，并新增格式化的临时回退消息。该改进显著降低了用户在 Telegram 端的使用门槛。
  - 意义：项目在多平台用户体验一致性上向前迈进了一步，Telegram 端的能力边界进一步清晰。

- **PR #3200 — feat(models): add configurable default fallback chain**（已关闭，stale）
  - 作者：lc6464 | [链接](https://github.com/sipeed/picoclaw/pull/3200)
  - 内容：在 Web UI 中为模型提供可配置的默认回退链（主模型 + 备选模型，可排序），并经后端 API 持久化。
  - 意义：增强了对模型可用性的容错能力；但因长期 stale 后被关闭，说明维护者尚未达成合并共识，**用户应留意是否被新 PR 替代**。

- **关联 Issue #1305 — 关闭**（由 PR #1008 修复）
  - [链接](https://github.com/sipeed/picoclaw/issues/1305)
  - 修复了 `picoclaw completion zsh` 流程因 banner 写入 STDOUT 而破坏补全文件的 bug。该问题影响所有依赖 shell 补全功能的开发者，属于命令行体验回归。

---

## 4. 社区热点

今日更新中最受关注的条目为 **Issue #1305**（4 条评论），围绕"新 banner 打印至 STDOUT 破坏 shell 补全流程"展开讨论，反映出开发者用户对 CLI 工具严格遵循 Unix 输出规范（stdout/stderr 分离）的强烈诉求。

其他 PR 虽然 `👍` 数均为 0，但 PR #3329（[链接](https://github.com/sipeed/picoclaw/pull/3329)）解决了 LINE 通道中 `webhook_host` / `webhook_port` 配置项长期"声明但未读取"的隐患，属于典型的配置一致性诉求；PR #3315（[链接](https://github.com/sipeed/picoclaw/pull/3315)）则补齐 Telegram 私聊机器人 + forum topic 模式的支持盲区，社区对**多平台覆盖完整性**的期望较高。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue/PR | 描述 | 状态 | 修复 PR |
|------|----------|------|------|---------|
| 🔴 高 | [#1305](https://github.com/sipeed/picoclaw/issues/1305) | 新 banner 输出至 STDOUT，破坏 `picoclaw completion zsh` 补全生成流程 | 已关闭 | [#1008](https://github.com/sipeed/picoclaw/pull/1008) |
| 🟠 中 | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | routed-agent 上下文管理未遵守 history / 摘要 / 压缩 / seahorse bootstrap 逻辑，导致 dispatch 到特定 Discord 频道的 agent **完全失忆**且自动压缩不触发 | OPEN（stale） | — |
| 🟡 低 | [#3329](https://github.com/sipeed/picoclaw/pull/3329) | `line.settings.webhook_host` / `webhook_port` 配置项被声明/默认/绑定环境变量但从未被读取 | OPEN（已有修复 PR） | 自身即修复 |

⚠️ **特别提示**：PR #3316 描述的 agent 失忆问题影响核心会话能力，且该 PR 已被标记 stale，建议维护者优先评估。

---

## 6. 功能请求与路线图信号

- **Telegram 交互式命令 UX**（[#3341](https://github.com/sipeed/picoclaw/pull/3341)）——已落地，标志 Telegram 通道 UI 范式从"CLI 风格"转向"会话风格"，预计将成为后续多通道 UX 改进的样板。
- **Telegram 私聊 forum topic 支持**（[#3315](https://github.com/sipeed/picoclaw/pull/3315)）——补齐 `IsTopicMessage` 检测，预期纳入下一版本；如不及时合并会形成新的兼容性投诉。
- **可配置模型回退链**（[#3200](https://github.com/sipeed/picoclaw/pull/3200)）——功能本身有价值但已 stale 关闭，可能需要维护者重新立项或在该 PR 上复活。
- **LINE webhook 配置净化**（[#3329](https://github.com/sipeed/picoclaw/pull/3329)）——属于配置语义清理，#3328 issue 已建链，落地概率较高。

总体来看，**多通道集成稳健化 + 模型路由策略可视化**是下一阶段的两个明显信号。

---

## 7. 用户反馈摘要

基于 Issue #1305 的 4 条评论提炼：

- **用户痛点**：开发者依赖 `picoclaw completion zsh > _picoclaw` 将补全脚本落盘后由 zsh 加载，banner 混入 STDOUT 会污染该文件，导致 zsh 启动报语法错误。
- **使用场景**：本地开发、CLI 工作流集成、shell 自动化。
- **核心诉求**：诊断/装饰性输出应统一走 stderr，遵守 Unix 输出约定（"stdout 仅承载机器可解析的内容"）。
- **满意度**：bug 闭环较快（2026-03-10 创建 → 2026-08-19 关闭），社区维护响应可接受。

---

## 8. 待处理积压

以下 PR 已被标记为 `[stale]`，处于长期未响应状态，建议维护者尽快复核：

- **PR #3316**（[链接](https://github.com/sipeed/picoclaw/pull/3316)）—— 2026-08-03 创建，涉及 routed-agent 上下文管理与自动压缩失效，**影响核心功能可用性**，优先级最高。
- **PR #3315**（[链接](https://github.com/sipeed/picoclaw/pull/3315)）—— 2026-08-03 创建，Telegram 私聊 forum topic 支持，属于用户明确反馈的兼容性问题。
- **PR #3200**（[链接](https://github.com/sipeed/picoclaw/pull/3200)）—— 2026-07-01 创建，模型回退链 UI，已被 stale 流程关闭，需确认是否复活或撤回。

此外，**PR #3329**（非 stale 但点赞为 0）虽解决了真实 bug，仍未获 maintainer review，建议提醒 reviewer 介入。

---

> 📊 **项目健康度评估**：🟡 中等偏稳
> 主线功能趋于稳定，但多通道集成与 agent 上下文管理方面存在已知的核心问题未关闭；社区维护节奏可控，建议尽快消化 stale PR。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-20

> 数据范围：2026-08-19 ～ 2026-08-20  
> 仓库链接：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 1. 今日速览

过去 24 小时 NanoClaw 处于"高 PR / 低 Issue"的密集合并日：**3 条新 Issue / 34 条 PR 更新（25 已关闭、9 待合并）、0 新 Release**。关闭率约 73%，多个核心维护者（gavrielc、Koshkoshinsk、amit-shafnir、zvi-fried）同时在线提交，节奏明显是"功能分支封板"。代码净流量为正，但所有 3 条新 Issue 均来自同一用户 glifocat 且零评论——属于边缘场景的独立复现，而非大规模用户抱怨。无新版本发布，外部稳定性暴露面未变。

---

## 2. 版本发布

无。

---

## 3. 项目进展

今日合并/关闭的 PR 围绕四条主线，整体向"可拆分、可治理"方向推进：

**① Slack 集成大重构（联动 6+ PR）**
- [#3357](https://github.com/nanocoai/nanoclaw/pull/3357) `bash nanoclaw.sh` 默认只装"基础 Slack 体验"；新增 `--slack-agents` 旗标装载完整 agents 体验
- [#3358](https://github.com/nanocoai/nanoclaw/pull/3358) 把 Slack channel payload 沿旗标

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-08-20**

---

## 1. 今日速览

NullClaw 今日活跃度较低，社区处于相对沉寂的维护期。**过去 24 小时内无新增 Issue、无 PR 合并、无新版本发布**。仅有 1 条新提交的 PR（#989）仍处于待合并状态，专注于修复 README 中损坏的 Star 历史图表。整体而言，项目处于平稳运行状态，文档可视化的一个小问题正在被社区贡献者主动修复中。

---

## 2. 版本发布

📭 **今日无新版本发布。**

距离上一次发版已有一段时间，建议维护者评估是否需要将待处理的修复（如 #989）纳入下一个小版本（如 patch 版本）进行发布。

---

## 3. 项目进展

今日**无 PR 合并或关闭**，项目代码层面无实质性推进。

唯一在途的修复性工作：

| PR | 标题 | 作者 | 状态 | 链接 |
|---|---|---|---|---|
| #989 | fix: restore broken star history chart | FaintFlower | 🟡 Open（待合并） | https://github.com/nullclaw/nullclaw/pull/989 |

**推进方向：** 该 PR 旨在将 README 的 Star 历史图表从依赖 GitHub Stargazer API（易受访问限制影响）迁移到免 token 的第三方服务 star-history.dera.page，属于**纯文档/展示层修复**，不影响核心代码逻辑。虽小但具有实际价值——解决了外部访问限制导致的图表显示问题。

---

## 4. 社区热点

📭 **今日无 Issue 讨论，无 PR 评论互动。**

唯一的活跃项 PR #989 尚无评论和点赞，说明该项目目前社区参与度处于低谷期。维护者可能需要主动 ping 审阅者或寻求社区关注以加速合并。

---

## 5. Bug 与稳定性

### 🟡 低严重度 / 展示层问题

| 问题 | 严重度 | 是否已有 Fix PR | 链接 |
|---|---|---|---|
| README 的 Star 历史图表无法正常显示 | 低（文档展示层，不影响功能） | ✅ 是，PR #989 待合并 | https://github.com/nullclaw/nullclaw/pull/989 |

**根因分析：** GitHub Stargazer API 的访问限制（可能涉及速率限制或认证要求）导致原始图表组件失效。

**修复方案评估：** 使用 star-history.dera.page 作为替代方案是合理的——该服务是社区广泛认可的免 token 数据源，但需注意其长期可用性和数据准确性（建议维护者在合并前验证）。

---

## 6. 功能请求与路线图信号

📭 **今日无新功能请求。**

由于缺乏社区反馈输入，难以推断下一阶段的路线图方向。从 PR #989 来看，社区贡献者当前注意力集中在**项目展示与品牌可信度**层面，说明该项目仍处于积极维护且在乎外部形象的阶段。

---

## 7. 用户反馈摘要

📭 **今日无用户反馈可提取。**

Issues 区域 0 条更新的现状意味着既无用户报告问题，也无用户提问。建议关注以下两点：
- **是否还有用户在使用过程中遇到问题但未通过 Issue 提交？** 可考虑主动发起 Feedback 征集。
- **Star 图表显示问题**（即便只是文档层）也反映出有用户在浏览仓库时遇到了不必要的摩擦。

---

## 8. 待处理积压

⚠️ **维护者关注提醒：**

| 类型 | 编号 | 标题 | 创建/更新 | 状态 | 链接 |
|---|---|---|---|---|---|
| PR | #989 | fix: restore broken star history chart | 2026-08-19 | 🟡 待合并，无审阅活动 | https://github.com/nullclaw/nullclaw/pull/989 |

**积压预警：** 这是当前仓库中唯一在途工作项，且 **0 评论、0 👍**，存在成为"孤儿 PR"的风险。建议：

1. **维护者尽快 review** PR #989，确认 star-history.dera.page 的可靠性后合并
2. **设置仓库 PR 模板与 CI 检查**，避免类似纯文档类 PR 长期悬置
3. **激活社区参与** —— 可通过在 Discord/讨论区同步仓库动态，邀请贡献者参与 review

---

## 📊 项目健康度总评

| 维度 | 评估 | 说明 |
|---|---|---|
| 代码活跃度 | 🟡 低 | 24h 内 0 合并，仅 1 待合并 PR |
| 社区参与度 | 🔴 极低 | 无评论、无点赞、无新 Issue |
| 发布节奏 | ⚪ 数据缺失 | 今日无新版本，无法评估 |
| 维护响应性 | ⚪ 待观察 | 唯一 PR 等待维护者审阅 |
| Bug 跟踪 | 🟢 良好 | 当前无已知功能性 Bug |

**总体判断：** 项目处于**静默稳定期**。无危机，但活跃度不足。维护者宜主动推进 #989 合并，并通过适当渠道（如社交媒体、Discord）激活社区参与度。

---

*本报告基于 2026-08-20 当日 GitHub 数据自动生成，涵盖 Issues、PRs、Releases 等公开信号。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-08-20

## 1. 今日速览

IronClaw 今日进入 **v1.3.0 稳定版发布**窗口，整体活跃度处于 **高水位**：过去 24 小时共产生 15 条 Issue 更新、38 条 PR 更新，且有一项 Stable 版本晋升。基础设施类工作（CI 稳定性、Capabilities 规范化、Notification Inbox）持续推进，同时 v1.4.0 路线图（持久化沙箱、Channel-first Onboarding、设计系统）开始形成跨 PR 的协作链。社区侧出现 3 条来自真实用户/QA 的 Bug 报告，集中在 Cron UI 与 Copilot MCP 扩展安装流程，需关注。

---

## 2. 版本发布

### 🏷️ ironclaw-v1.3.0（2026-08-19 发布）

**变更性质**：Stable 晋升，将 `1.3.0-rc.2`（commit `8483596bf`）从 `release/2026-08-17` 分支提升为正式版。

**核心修复**：
- **升级兼容性**：从 1.2 升级时不再因 `activation_state` 字段不匹配而进入 crash-loop，扩展激活状态被正确接收与保留
- **容器相关修复**：随 RC2 一起验证通过的容器层问题
- **完整继承 RC1 范围**：所有 1.3.0-rc.1 已验证的功能与修复

**破坏性变更**：根据 PR #7754 描述，本次仅为版本号提升与版本裁剪（Cut Ironclaw），**无生产行为变更**。

**迁移注意事项**：
- 已部署 RC2 的实例可直接切换
- 从 1.2.x 升级前请确认扩展 `activation_state` 字段持久化逻辑

🔗 [Release ironclaw-v1.3.0](https://github.com/nearai/ironclaw) ｜ [PR #7754](https://github.com/nearai/ironclaw/pull/7754)

---

## 3. 项目进展

今日多项关键 PR 落地，覆盖 **能力响应规范化栈、CI 稳定性、通知中枢、子代理语义、Onboarding 原型** 五大方向：

| PR | 状态 | 主要内容 |
|---|---|---|
| [#7754](https://github.com/nearai/ironclaw/pull/7754) | ✅ Closed | 将 1.3.0-rc.2 晋升为 Stable 1.3.0（详见上节） |
| [#7756](https://github.com/nearai/ironclaw/pull/7756) | ✅ Closed | **修复 Merge Queue 反复超时**：对所有未限界的 CI 操作加边界（apt 挂起、无上限 jobs、外部下载）——基于 08-18/08-19 共 69 个取消的 `Tests (Reborn)`（1193 jobs）+ 500 个取消的 `Reborn E2E` jobs 做的归因分析 |
| [#7752](https://github.com/nearai/ironclaw/pull/7752) | ✅ Closed | 子代理 `ActivationProvenance` 元数据 + `activate()` 原语 + 自驱唤醒上限（slice 1，无生产行为变更） |
| [#6994](https://github.com/nearai/ironclaw/pull/6994) | ✅ Closed | OOBE 自动化任务原型（轮播、内联卡片、agent-mode pill），由 `oobe_suggestions` 部署开关门控 |
| [#7697](https://github.com/nearai/ironclaw/pull/7697) | ✅ Closed | 新增持久化用户通知收件箱与 Product Surface API；通知所有权迁入专属 `ironclaw_notifications` 域 |
| [#7686](https://github.com/nearai/ironclaw/pull/7686) | ✅ Closed | 集中化 capability outcome 处理（行为保留），为 #7692/#7711 的语义统一铺路 |
| [#7602](https://github.com/nearai/ironclaw/pull/7602) | ✅ Closed | 缓存 lease-fence token（每次 transcript 写入少 11+ journal-pool 读） |
| [#7603](https://github.com/nearai/ironclaw/pull/7603) | ✅ Closed | 批量 BeforeModel 检查点（每轮少 14 行 checkpoint，命令数 11→约 4） |
| [#7681](https://github.com/nearai/ironclaw/pull/7681) | ✅ Closed | Slack 未链接用户的连接消息改为私密，不再公开 |
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | ✅ Closed | 统一编码工具表面为 `read/write/edit/glob/grep/bash` 六个标准名称 |

**整体评估**：项目在 24 小时内完成了 1 个 Stable 版本晋升 + 1 个 CI 根因修复 + 1 个横跨多个 PR 的重构栈（#7686→#7692→#7711）的早期切片。**架构稳定性与可观测性显著向前推进**，用户可见功能层（Notifications、OOBE、Slack 私密化）也在同步交付。

---

## 4. 社区热点

按讨论强度排序：

| 排名 | Issue/PR | 评论数 | 关注点分析 |
|---|---|---|---|
| 1 | [#7732](https://github.com/nearai/ironclaw/issues/7732) **[Epic v1.4.0]** 持久化 per-user 沙箱 | **7** | 多个相关 PR（#7751 今日已提交）正在分步落地，**社区持续围观 v1.4.0 关键技术方向** |
| 2 | [#7603](https://github.com/nearai/ironclaw/issues/7603) BeforeModel 批量检查点 | 2 | 已随 Epic #7591 一并关闭，循环执行性能优化闭环 |
| 3 | [#5998](https://github.com/nearai/ironclaw/issues/5998) 本地 MCP transport 被拒 | 1 | **遗留 Open Issue**——社区对"本地 MCP server 不可达"的呼声已存在近一个月 |
| 4 | [#7044](https://github.com/nearai/ironclaw/issues/7044) Channel-first Onboarding Epic | 0（已关闭） | 战略级 Epic 关闭，标志 v1.4.0 路线图正式立项 |
| 5 | [#7748](https://github.com/nearai/ironclaw/issues/7748) 用户反馈 IronClaw 卡死 | 0（Slack 转化） | 来自生产环境 Slack 的真实用户反馈 |

**诉求分析**：社区最关注的仍是 **"Reborn 在本机能不能跑本地 MCP"** 与 **"沙箱是不是持久的"** 这两个产品可用性问题，与 v1.4.0 路线图高度对齐。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P1 | [#7748](https://github.com/nearai/ironclaw/issues/7748) | 用户报告"IronClaw got confused and stopped working"（来自 Slack 用户反馈通道） | ❌ 待 triage |
| 🟠 P2 | [#7745](https://github.com/nearai/ironclaw/issues/7745) | Copilot MCP 扩展安装失败：`auth_required` 错误、目录重复条目、token 类型不明确 | ❌ 待 triage |
| 🟡 P3 | [#7744](https://github.com/nearai/ironclaw/issues/7744) | Cron Job UI 缺少 edit 和 test 按钮 | ❌ 待 triage |
| 🟢 已修 | [#7748 关联失败分类](https://github.com/nearai/ironclaw/issues/7736) | #7736 每日失败分类：pinchbench 169 个非 pass 主要为模型限制而非 harness bug | 仅记录 |

**质量观察**：今日 3 条新增 QA/用户 Bug 均 **没有伴随 Fix PR**，需关注 Bug 修复响应链路是否通畅。

---

## 6. 功能请求与路线图信号

**v1.3.0 候选增强（窗口内）**：
- [#7742](https://github.com/nearai/ironclaw/issues/7742) **[enhancement, v1.3.0]** 自动化创建预检与缺失前置条件显式化——已有 PR [#7743](https://github.com/nearai/ironclaw/pull/7743)，**很可能搭车 1.3.0 或 1.3.x 点版本**

**v1.4.0 强信号**：
- [#7732](https://github.com/nearai/ironclaw/issues/7732) 持久化 per-user 沙箱（**PR #7751 已开 Step 1**）
- [#7038](https://github.com/nearai/ironclaw/issues/7038) Storybook + AI-first 设计系统（**PR #7750 Phase 1 已开**）
- [#7044](https://github.com/nearai/ironclaw/issues/7044) Channel-first Onboarding（Epic 已关闭，#6993/#6994 后端 + 前端已合并）

**长期能力**：
- [#5998](https://github.com/nearai/ironclaw/issues/5998) 本地 MCP transport——**今日 PR #7757 已提交**，目标允许回环 IP 上的 hosted MCP server
- [#7456](https://github.com/nearai/ironclaw/pull/7456) Reborn 持久存储 profile 无关化（XL 规模，长期在跑）

---

## 7. 用户反馈摘要

来自真实用户与 QA 的痛点：

1. **"IronClaw got confused and stopped working"**（[#7748](https://github.com/nearai/ironclaw/issues/7748)）
   - 来源：Slack `#x-ai-product-feedback`，用户 `bianca.guimaraes-chadwick`，时间 2026-08-19T15:24:07Z
   - 痛点：**模型在长任务中途失去上下文/方向**，需要快速诊断 harness vs 模型问题

2. **Cron Job UI 功能残缺**（[#7744](https://github.com/nearai/ironclaw/issues/7744)）
   - 痛点：用户**只能查看/暂停** Cron Job，无法编辑或手动触发测试——对于需要持续运维自动化的用户是 blocker

3. **Copilot MCP 安装流程混乱**（[#7745](https://github.com/nearai/ironclaw/issues/7745)）
   - 痛点：扩展目录重复条目 + auth 类型不明确 + token 类型歧义，**首次安装体验破裂**

4. **本地 MCP 不可达**（[#5998](https://github.com/nearai/ironclaw/issues/5998)）
   - 痛点：stdio 被拒、loopback HTTP 被拒，**MCP 本地生态在 Reborn 中事实上不可用**

**满意侧**：v1.3.0 RC 阶段的升级体验与 OOBE Onboarding 原型被工程团队顺利推进，未见明显反弹。

---

## 8. 待处理积压

| Issue/PR | 标题 | 创建距今 | 风险 |
|---|---|---|---|
| [#5998](https://github.com/nearai/ironclaw/issues/5998) | Reborn 无本地 MCP transport | **~40 天** | 🟠 中——已有 PR #7757 但根因涉及安全策略，需 design 决策 |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | docs: APDD Kit 评估与集成提案 | 15 天 | 🟡 中——docs-only，需维护者 review |
| [#7456](https://github.com/nearai/ironclaw/pull/7456) | Reborn 持久存储 profile 无关化 | 10 天 | 🟠 中——XL 规模 + medium risk，长期挂起 |
| [#7516](https://github.com/nearai/ironclaw/pull/7516) | WebUI IronHub agent link 操作面 | 8 天 | 🟢 低——XL docs，新贡献者 PR |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | automations: 运行时证据派生 run outcome | 6 天 | 🟢 低 |
| [#7748](https://github.com/nearai/ironclaw/issues/7748) | 用户反馈 IronClaw 卡死 | < 24h | 🔴 高——需立即 triage |
| [#7745](https://github.com/nearai/ironclaw/issues/7745) | Copilot MCP 安装失败 | < 24h | 🟠 中 |
| [#7744](https://github.com/nearai/ironclaw/issues/7744) | Cron UI 缺编辑/测试按钮 | < 24h | 🟡 中 |

**维护者建议**：
- 立即响应 [#7748](https://github.com/nearai/ironclaw/issues/7748)（真实用户报告），建议与 #7736 失败分类交叉分析
- 对 [#5998](https://github.com/nearai/ironclaw/issues/5998) + [#7757](https://github.com/nearai/ironclaw/pull/7757) 给出明确安全边界决策（loopback 例外是否需要额外授权 UX）
- v1.3.0 窗口关闭前确认 [#7742](https://github.com/nearai/ironclaw/issues/7742) / [#7743](https://github.com/nearai/ironclaw/pull/7743) 是否纳入

---

> **项目健康度评分**：⭐⭐⭐⭐ (4/5)
> - ✅ 架构规范化与可观测性持续推进
> - ✅ v1.3.0 Stable 顺利晋升
> - ✅ CI 根因定位能力提升（#7756 数据驱动诊断）
> - ⚠️ 用户/QA Bug 响应链路需加强
> - ⚠️ #5998 长期遗留 Issue 已影响 MCP 生态接入，需明确决策

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-20**
**仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 今日呈现**低活跃度**特征：过去 24 小时无新版本发布，6 条 Issues 全部为历史 stale（长期无活动）问题被机器人自动重开标记，并非用户新反馈；PR 侧则有 8 条被关闭/合并（其中 2 条为当日新建、6 条为长期积压的 stale PR），整体呈现"清理积压"态势。项目维护节奏放缓，但 Windows 安装器相关工作持续推进（2 条新 PR 聚焦 installer 改进）。社区反馈集中在长期未解决的功能缺陷与稳定性问题上，维护者响应明显不足。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。近期最新版本仍为 2026.4.3（用户在 Issue #1566 中提及）。

---

## 3. 项目进展

### 今日合并/关闭的 PR

| PR | 标题 | 贡献者 | 价值 |
|---|---|---|---|
| [#2512](https://github.com/netease-youdao/LobsterAI/pull/2512) | fix(installer): hide banner for dictbind silent package | btc69m979y-dotcom | **Windows 安装体验优化**——仅对 dictbind 双击静默安装通道隐藏插件 Banner，避免干扰静默部署流程 |
| [#2511](https://github.com/netease-youdao/LobsterAI/pull/2511) | fix(installer): support silent upload-first web builds | btc69m979y-dotcom | **Web 安装器两阶段构建**——增加 upload-first 双通道流程，通过 SHA-256 校验保证已上传负载不被后续重签破坏，提升 Web Setup 稳定性 |
| [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | fix(scheduledTasks): editing a disabled task re-enables it | xuzx-code | **修复定时任务 Bug**——编辑已关闭任务时不再强制重新开启，区分创建/编辑模式的 enabled 字段处理 |
| [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) | feat(im): 为 IM 渠道新增斜杠命令支持 | linlihua | **IM 渠道交互升级**——为 Telegram/钉钉/飞书/Discord/QQ/微信等增加 `/help`、`/status`、`/new`、`/compact` 等控制命令 |
| [#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) | fix(api): 修复 SSE 流监听器被旧请求 abort 回调错误清理的竞态条件 | 0xFLX | **关键并发 Bug 修复**——修复快速停止+发送新消息场景下新请求流式数据静默丢失的竞态问题 |
| [#1578](https://github.com/netease-youdao/LobsterAI/pull/1578) | feat(permission-modal): 权限审批弹窗增加 Bash 命令语法高亮 | 0xFLX | **安全体验提升**——权限审批弹窗增加 Bash 语法高亮，帮助用户识别危险命令片段 |
| [#1580](https://github.com/netease-youdao/LobsterAI/pull/1580) | feat(prompt-input): 输入框图片附件展示缩略图预览 | 0xFLX | **UI 体验改进**——图片附件改为 64×64 缩略图卡片，删除按钮 hover 显示 |
| [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | fix(setup-python): 检测并覆盖旧版本 pip 文件 | flowell | **升级兼容性修复**——修复旧版本 __main__.py 残留导致 pip 安装三方库时递归调用错误的问题 |

### 进展评估

项目在 **5 个不同功能域**同步推进（installer、scheduledTasks、IM、SSE/权限/UI、Python 环境），其中：
- 🟢 **正向推进**：PR #1576（SSE 竞态修复）和 PR #1582（pip 升级修复）均为影响范围较广的关键 Bug 修复，对生产稳定性提升明显。
- 🟡 **积压清理**：6 条 stale PR 集中关闭，说明维护者正在做清理动作，但其中 #1573（IM 斜杠命令）、#1578（权限语法高亮）、#1580（图片缩略图）这类有价值的特性 PR 是否真正合并入主干仍需在仓库中确认（这些 PR 均被标注 [stale] 后被关闭，可能并非代码合并）。

---

## 4. 社区热点

### 今日讨论较活跃的 Issues

1. **[#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)** — "提问后不运行，也不显示任何信息"（5 条评论）
   - 🔥 评论数最高，但 👍 为 0，问题悬而未决超过 4 个月。
   - 用户痛点：提交问题后无任何反馈，体验"黑盒"。

2. **[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)** — "模型无法获取上传的文件"（2 条评论）
   - 反映 2026.4.3 版本的回归：上传文件后模型不知道文件存在，旧版本会自动放入 project 目录。
   - 这是一个**功能性回归**，影响核心使用场景。

3. **[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)** — "最新版本无论输入什么都回复相同内容"（2 条评论）
   - 严重 Bug：模型对任意输入返回相同回复，附有完整日志包。
   - **疑似 SSE 流或对话状态管理的回归**——与 PR #1576 修复的竞态条件可能相关。

### 诉求分析

社区核心诉求集中在三点：**模型行为异常（重复回复/不响应）**、**文件上传后上下文失效**、**网络环境变化导致网关不稳**。这些都是影响日常使用的关键问题，反映出 2026.4.3 版本可能存在较严重的稳定性问题。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 问题 | 链接 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **严重** | 模型对任意输入回复相同内容 | [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | ⚠️ 间接相关：[#1576](https://github.com/netease-youdao/LobsterAI/pull/1576) 修复 SSE 竞态，但需验证 |
| 🔴 **严重** | 提问后不运行也无任何信息反馈 | [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | ❌ 无 |
| 🟠 **中等** | 上传文件后模型无法感知（回归 Bug） | [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | ❌ 无 |
| 🟠 **中等** | 网络环境变化导致网关反复重启 | [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | ❌ 无 |
| 🟡 **轻微** | 编辑已关闭的定时任务会被强制重新开启 | [#1570](https://github.com/netease-youdao/LobsterAI/pull/1570) | ✅ 已有 PR |
| 🟡 **轻微** | pip 安装三方库时递归调用错误（旧版本残留） | [#1582](https://github.com/netease-youdao/LobsterAI/pull/1582) | ✅ 已有 PR |
| 🟢 **UI 文本** | 流量包服务条款页面存在明显文字错误 | [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | ❌ 无 |

**风险提示**：🔴 级别的两个核心对话 Bug（[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)、[#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)）在 4 个月内零修复，长期影响用户体验，建议维护者优先关注。

---

## 6. 功能请求与路线图信号

### 用户提交的功能请求

- **[#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)** — **输入框添加快捷操作按钮**：用户希望在输入框直接提供"停止当前话题""压缩上下文"的快捷按钮，作为上下文过长或后端 Bug 出现时的快速恢复手段。

### 已存在的相关 PR（路线图信号）

- **[#1573](https://github.com/netease-youdao/LobsterAI/pull/1573)**（IM 斜杠命令）已经覆盖了 `/new`（停止旧会话）和 `/compact`（压缩上下文），但仅作用于 IM 渠道。
- **[#1578](https://github.com/netease-youdao/LobsterAI/pull/1578)**（权限审批语法高亮）已进入关闭流程。
- **[#1580](https://github.com/netease-youdao/LobsterAI/pull/1580)**（图片附件缩略图预览）已进入关闭流程。

### 推断

`#1567` 与 `#1573` 的需求高度同构——均为"为长上下文/异常状态提供恢复手段"。维护者很可能将 IM 渠道的命令方案**推广到桌面端输入框**，纳入下一版本的功能路线图。

---

## 7. 用户反馈摘要

通过 Issues 评论提炼的用户真实反馈：

- 😡 **核心痛点 1：2026.4.3 版本体验退化**
  - "上传文件后模型不知道我有上传文件"（[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561)）——文件上传功能从"自动放入 project 目录"退化为"模型完全无感知"。
  - "无论输入什么都回复相同内容"（[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566)）——核心对话能力受损。

- 😡 **核心痛点 2：网络环境稳定性差**
  - "网络环境变化时网关反复重启，恢复后正常"（[#1551](https://github.com/netease-youdao/LobsterAI/issues/1551)）——用户在不同网络间切换时可靠性不足。

- 😡 **核心痛点 3：错误反馈缺失**
  - "提问后不运行也不显示信息，不知道出什么问题了"（[#1569](https://github.com/netease-youdao/LobsterAI/issues/1569)）——产品缺少错误可视化机制。

- 😐 **体验诉求：缺少快速恢复手段**
  - "出问题后需要有快速恢复手段，最好提供快捷按钮或强制阶段按钮"（[#1567](https://github.com/netease-youdao/LobsterAI/issues/1567)）——用户需要"应急通道"。

- 📝 **合规性反馈**
  - 流量包服务条款存在文字错误（[#1563](https://github.com/netease-youdao/LobsterAI/issues/1563)）——细节合规问题。

**总体满意度评估**：⚠️ **偏低**。2026.4.3 版本的多个回归 Bug 导致核心使用场景受损，用户反馈普遍负面。

---

## 8. 待处理积压

⏰ **维护者关注提醒**：

### 长期未修复的重要 Issue（≥ 4 个月）

| Issue | 标题 | 创建时间 | 当前状态 |
|---|---|---|---|
| [#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) | 任意输入返回相同内容 | 2026-04-08 | OPEN, stale |
| [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) | 提问后不运行不显示 | 2026-04-08 | OPEN, stale |
| [#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) | 上传文件模型无感知（回归） | 2026-04-08 | OPEN, stale |
| [#1551](https://github.com/netease-youdao/LobsterAI/issues/1551) | 网络变化导致网关反复重启 | 2026-04-08 | OPEN, stale |
| [#1563](https://github.com/netease-youdao/LobsterAI/issues/1563) | 流量包服务条款文字错误 | 2026-04-08 | OPEN, stale |
| [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) | 输入框快捷操作按钮 | 2026-04-08 | OPEN, stale |

### 建议

1. **🔴 立即响应**：[#1566](https://github.com/netease-youdao/LobsterAI/issues/1566) 和 [#1569](https://github.com/netease-youdao/LobsterAI/issues/1569) 影响核心功能，建议在下一版本（2026.4.x 修复版）中优先处理。
2. **🟠 短期规划**：[#1561](https://github.com/netease-youdao/LobsterAI/issues/1561) 属于回归 Bug，回滚相关变更或补充逻辑即可解决。
3. **🟢 长期规划**：将 [#1567](https://github.com/netease-youdao/LobsterAI/issues/1567) 的快捷操作按钮与 [#1573](https://github.com/netease-youdao/LobsterAI/pull/1573) 的 IM 命令方案整合到下一版本路线图。
4. **📋 流程优化**：6 条 Issue 全部被 stale 机器人重开标记，反映维护者对社区反馈的响应已严重滞后，建议建立 issue triage 周会机制。

---

## 项目健康度总结

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | ⭐⭐☆☆☆ | 仅有 2 条当日新建 PR，其余均为清理 |
| 社区响应度 | ⭐☆☆☆☆ | 6 条 Issue 全部 stale，无新增互动 |
| 稳定性 | ⭐⭐☆☆☆ | 存在多个 🔴 级别核心功能 Bug 未修复 |
| 发布节奏 | ⭐☆☆☆☆ | 长期无新版本（最近为 2026.4.3） |
| 贡献者活跃度 | ⭐⭐⭐☆☆ | 0xFLX 一人贡献 3 条 PR，是主要活跃贡献者 |

**综合判断**：项目当前处于**维护放缓期**。建议维护团队尽快发布包含 PR #1576（#1582（安装体验（#1570（等关键修复的补丁版本，恢复用户信心。

---

*报告生成时间：2026-08-20 | 数据来源：GitHub API | 报告基于过去 24 小时公开数据*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-20

---

## 1. 今日速览

Moltis 今日处于 **高活跃度状态**：过去 24 小时发布了 1 个新版本（`20260818.10`），合并/关闭了 5 个 PR，同时关闭了 3 个历史 Bug Issue，仓库整体保持健康的"开发-集成-发布"节奏。值得重点关注的是 **Apple Container 沙箱相关问题集群** 今日被集中收口（3 个 Issue + 2 个 PR 一次性闭环），以及一个 **CWE-306 安全修复 PR (#1216)** 仍处于待合并状态，属于高优先级待处理项。

- 仓库地址：https://github.com/moltis-org/moltis

---

## 2. 版本发布

**🔖 Release `20260818.10`（2026-08-18 发布）**

今日观察到的最新发布版本。从当日合并的 PR 内容推断，本版本可能包含以下变更：

- **Apple Container 沙箱修复**：状态解析跨版本兼容（PR #1214）、资源限制正确传递（PR #1215），修复了用户报告的"Apple Container 1.x 启动但被误判为未运行"以及"资源限制未生效"两个核心 Bug。
- **OpenAI 路由增强**：GPT-5.6 Luna 路由覆盖（PR #1213）、显式 OpenAI endpoint 的 Responses 路由保留（PR #1212）、reasoning + function tools 走 Responses API（PR #1198）。

⚠️ **迁移注意事项**：
- Apple Container 1.x 用户升级后需确认 sandbox 状态检测恢复正常，并重新验证 memory / CPU / pids 限制。
- 自定义 `OPENAI_BASE_URL` 的用户在升级后需回归测试 reasoning + tools 组合场景。

> 注：详细 changelog 建议查阅仓库 Releases 页面以确认完整变更列表。

---

## 3. 项目进展

今日共 **5 个 PR 被合并/关闭**，整体推进方向集中在两个主题：**Apple Container 沙箱稳定性** 和 **OpenAI Responses 路由完善**。

| PR | 主题 | 状态 | 影响 |
|---|---|---|---|
| [#1214](https://github.com/moltis-org/moltis/pull/1214) | Apple Container 状态解析跨版本兼容 | ✅ Closed | 用类型化解码器替代字符串匹配，同时支持 1.x（嵌套 `status.state`）和旧版（标量 `status`），是 #1185 的根治方案 |
| [#1215](https://github.com/moltis-org/moltis/pull/1215) | Apple Container 沙箱资源限制修复 | ✅ Closed | 正确传递 `--memory`、`--cpus`，并对非整数 CPU quota 显式拒绝（避免静默降级），是 #1188 的根治方案 |
| [#1198](https://github.com/moltis-org/moltis/pull/1198) | OpenAI reasoning + tools 路由走 Responses | ✅ Closed | 统一 streaming / 非 streaming 的 Responses 请求构造路径 |
| [#1212](https://github.com/moltis-org/moltis/pull/1212) | 显式 OpenAI endpoint 的 Responses 路由保留 | ✅ Closed | 基于 normalized URL 分类，避免对自定义 OpenAI-compatible provider 误判 |
| [#1213](https://github.com/moltis-org/moltis/pull/1213) | GPT-5.6 Luna 路由覆盖 | ✅ Closed | 补齐 Sol / Terra / Luna 的回归测试与 model-health 校验，闭环 #1181 |

**项目健康度判断**：✅ 良好。Apple Container 与 OpenAI 两条主线同步推进，今日一次性收口 3 个历史 Bug，并补齐对应测试覆盖。

---

## 4. 社区热点

今日最值得关注的议题：

- 🔒 **[#1216 `fix(httpd): require authentication for vault unlock and recovery`](https://github.com/moltis-org/moltis/pull/1216)** —— 修复 **CWE-306**（缺失认证关键操作）。该 PR 指出 `POST /api/auth/vault/unlock` 与 `POST /api/auth/vault/recovery` 完全未走 `auth_gate`，意味着任何未认证远程调用者均可对 vault 进行密码爆破。
  - 闭环 issue：[#1177](https://github.com/moltis-org/moltis/issues/1177)（未在今日数据中，但属于被引用项）
  - **建议维护者优先合并此 PR**，属于安全相关应快速上线。

- � **[#1217 `fix(whatsapp): treat a reply to the bot as addressing it`](https://github.com/moltis-org/moltis/pull/1217)** —— WhatsApp 群聊中的 `@mention` 与 `reply-to-bot` 在用户体验上等同，但当前代码仅识别前者，导致 `mention_mode="mention"` 下 reply 被错误丢弃。代表用户痛点：群聊机器人交互可用性。

- 📲 **[#1218 `fix(whatsapp): stop hardcoding the push name to "Moltis"`](https://github.com/moltis-org/moltis/pull/1218)** —— WhatsApp presence stanza 中硬编码了 "Moltis" 名称，导致即使机器人配置名为 "Ada"，在未保存联系人的群聊中仍显示为 "Moltis"。反映多品牌、多租户场景下的产品体验问题。

---

## 5. Bug 与稳定性

今日无新增 Bug Issue，但 **3 个历史 Bug 全部关闭**，整体稳定性提升：

| 严重度 | Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| 🟡 中 | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox 启动后被误判未运行 | ✅ Closed | [#1214](https://github.com/moltis-org/moltis/pull/1214) |
| 🟡 中 | [#1188](https://github.com/moltis-org/moltis/issues/1188) | Apple Container backend 未应用 resource limits | ✅ Closed | [#1215](https://github.com/moltis-org/moltis/pull/1215) |
| 🟢 低 | [#1181](https://github.com/moltis-org/moltis/issues/1181) | GPT 5.6 Luna 相关问题 | ✅ Closed | [#1213](https://github.com/moltis-org/moltis/pull/1213) |

**待处理的高严重度 Bug**：

- 🟠 **#1177（CWE-306 vault 解锁无认证）** —— 今日合并数据中未提及，但已有 [#1216](https://github.com/moltis-org/moltis/pull/1216) 准备就绪，属于安全级别问题，**建议在下一个 patch 版本前合并**。

---

## 6. 功能请求与路线图信号

虽然今日数据中无新增 feature request Issue，但从今日仍处于 OPEN 状态的 PR 可以推断下一版本的潜在路线：

| PR | 功能信号 | 优先级推断 |
|---|---|---|
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | 将"非受信轮次的工具上限"从硬编码改为可配置（`/sh` 之外的公网通道） | 🔴 高 —— 直接关系到 public audience 的能力边界，影响多租户部署安全策略 |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | heartbeat.active_hours 实际生效（当前是死代码） | � 中 —— 用户文档已承诺该功能，但实际未生效，属可靠性修复 |
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | vault unlock / recovery 强制鉴权 | 🔴 高 —— 安全合规，应优先纳入下个 release |

**路线图判断**：下一版本 (`20260819.x` 或 `20260820.x`) 大概率会包含一个安全 patch 与 Apple Container 兼容修复的双重叠加。

---

## 7. 用户反馈摘要

由于今日关闭的 3 个 Issue 评论数均较少（最高仅 3 条），可提炼的真实用户痛点如下：

- 🍎 **Apple Container 用户对沙箱可靠性敏感**（#1185, #1188）：用户反馈沙箱"看似启动但被识别为失败"以及"配置的资源限制不生效"。该 Bug 直接影响 Apple Silicon 上 macOS 用户的本地隔离能力，属于平台级体验问题。

- 🤖 **GPT-5.6 Luna 用户对模型可用性反馈**（#1181）：用户报告特定模型变体不可用或行为异常，已通过增加 model-health 校验闭环。

- 📲 **WhatsApp 集成用户期待"自然语言群聊交互"**（#1217, #1218 PR 反映）：维护者主动识别出 reply-to-bot 与 push name 体验问题，说明该场景已有真实用户反馈压力。

整体来看，用户对 **沙箱透明度** 与 **多平台 AI 助手一致性** 的要求日益提高。

---

## 8. 待处理积压

以下为今日仍处于 OPEN 状态、需维护者重点关注的 PR：

| PR / Issue | 标题 | 待合并天数* | 备注 |
|---|---|---|---|
| [#1216](https://github.com/moltis-org/moltis/pull/1216) | vault unlock / recovery 强制鉴权 | 1 | 🔒 **安全修复**，最优先 |
| [#1208](https://github.com/moltis-org/moltis/pull/1208) | cron heartbeat active hours | 3 | 闭环 #1205，文档-实现一致性修复 |
| [#1217](https://github.com/moltis-org/moltis/pull/1217) | WhatsApp reply-to-bot 识别 | 1 | 影响群聊用户体验 |
| [#1218](https://github.com/moltis-org/moltis/pull/1218) | WhatsApp push name 不再硬编码 | 1 | 多品牌/多租户体验 |
| [#1219](https://github.com/moltis-org/moltis/pull/1219) | untrusted-turn 工具上限可配置 | 1 | 多租户安全策略配置 |

*待合并天数 = 2026-08-20 - 创建日期

> 📌 **建议**：维护者可优先评审 #1216（安全）与 #1214/#1215 已合并 PR 对应的回归验证，其余 WhatsApp 三件套（#1217/#1218/#1219）建议打包评审，因为它们共享同一维护者 `vikng-dev` 的设计思路。

---

*报告基于 2026-08-20 抓取的 Moltis 仓库公开数据生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报

**日期**: 2026-08-20
**项目**: [agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)
**报告周期**: 过去 24 小时

---

## 1. 今日速览

CoPaw 仓库在 2026-08-19 至 2026-08-20 进入**高强度运营节奏**：单日处理 50 条 Issues（4 条新开/活跃、46 条关闭）与 47 条 PRs（30 条待合并、17 条已合并/关闭），**关闭率（Issues）高达 92%**，显示维护团队对历史积压做了大规模清理。PR 队列保持活跃，新提交涵盖自托管 Hub、新模型提供商、多项目目录、流式看门狗等关键能力。**未发布新版本**，但 PR #7150 已直接修复当前 OPEN 的高优 Bug #7102（流式死锁冻结），下一个补丁版本可见端倪。整体项目健康度处于**稳定推进期**，但用户侧对稳定性、安全性、移动端体验的抱怨仍密集。

---

## 2. 版本发布

**无新版本发布。**

但从代码提交来看，2.1.x / 2.0.x 分支有较多修复即将合入，特别是修复 issue #7102 的 PR #7150（流式停顿看门狗）和修复杀软拦截的 PR #6986（已关闭），下一补丁版本（推测为 2.1.1 或 2.0.2）呼之欲出。

---

## 3. 项目进展

今日 17 条已关闭 PR 中，值得关注的合并内容包括：

| PR | 主题 | 影响 |
|----|------|------|
| [#6986](https://github.com/agentscope-ai/QwenPaw/pull/6986) | **fix(sandbox): 修复杀软拦截问题** | 直接对应用户痛点 #6847，改善 Windows 杀软误杀 |
| [#7103](https://github.com/agentscope-ai/QwenPaw/pull/7103) | **扩展集成测试覆盖（路由、渠道、工具、MCP、Coding Project）** | 显著提升多模块回归保护 |
| [#7151](https://github.com/agentscope-ai/QwenPaw/pull/7151) | **feat(console): 目录浏览器新增创建文件夹** | Console 体验改进 |
| [#7137](https://github.com/agentscope-ai/QwenPaw/pull/7137) | **fix(console): 模型选择器样式打磨** | UI 细节优化 |
| [#6800](https://github.com/agentscope-ai/QwenPaw/pull/6800) | **feat(mailbox): 智能邮件管理助手（首贡献者 PR）** | 新增邮件自动化能力，已关闭待跟进 |

整体看，项目**在稳定性与测试基建层面明显推进**，新功能 PR 多数仍处于待评审状态。

---

## 4. 社区热点

**评论数最高 / 反应最强** 的 Issues：

- 🥇 **[#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884)** — 27 条评论：Ubuntu 22.04 安装后个人目录被清空，怀疑 CoPaw 漏洞。**严重安全/数据丢失事件**，虽已 CLOSED 但需复盘根因。
- 🥈 **[#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301)** — 10 条评论：综合性增强建议（一键更新、/approve 按钮化、自动切换模型、自我进化、跨端同步、智谱接入等）。
- 🥈 **[#2035](https://github.com/agentscope-ai/QwenPaw/issues/2035)** — 10 条评论：多智能体协同与 Bot 绑定诉求。
- **[#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723)** — 9 条评论：频道切换后任务上下文消失。
- **[#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102)** — 9 条评论，**当前 OPEN**：使用 glm 5.3 时桌面版冻结超 10 分钟。
- **[#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377)** — 9 条评论：批量任务（1500 文件总结）自动中断、断点续传失效。
- **[#2776](https://github.com/agentscope-ai/QwenPaw/issues/2776)** — 8 条评论：本地模型显存占用调研。

**核心诉求归纳**：
1. **数据安全**（#2884）：零信任意识在增长，文件操作可回滚（#2590）呼声强烈。
2. **流程自动化与回退**：fallback 模型（#2089）、断点续传、任务上下文保持。
3. **多端协同**：Web ↔ 移动端 ↔ IM（QQ/微信）同步（#2301, #2493, #2856）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue / PR | 描述 | 是否有 Fix PR |
|------|-----------|------|---------------|
| 🔴 严重 | [#7102](https://github.com/agentscope-ai/QwenPaw/issues/7102) (OPEN) | 桌面版 2.1.0 + glm 5.3 持续冻结 10 分钟以上，无 token 输出 | ✅ [PR #7150](https://github.com/agentscope-ai/QwenPaw/pull/7150)（流式看门狗，待合并） |
| 🔴 严重 | [#2884](https://github.com/agentscope-ai/QwenPaw/issues/2884) | Ubuntu 下个人目录被清空 / 软件被删 | ❌ 需根因调查，#2590 提议文件回滚 |
| 🟠 高 | [#7076](https://github.com/agentscope-ai/QwenPaw/issues/7076) | qwenpaw-creator LLM 配置 404（2.1.0） | ❌ 无对应 PR |
| 🟠 高 | [#7034](https://github.com/agentscope-ai/QwenPaw/issues/7034) | ReactAgent 工具调用 TypeError（async for / __aiter__） | ❌ 无对应 PR |
| 🟠 高 | [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | 杀软拦截甚至杀进程 | ✅ [PR #6986](https://github.com/agentscope-ai/QwenPaw/pull/6986)（已关闭，待确认合入） |
| 🟠 高 | [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 2.0 自动压缩未触发 summarize（手动 /compact 可触发） | ❌ 无对应 PR |
| 🟡 中 | [#2377](https://github.com/agentscope-ai/QwenPaw/issues/2377) | 批量处理中断 / 断点续传失效 | ❌ 无对应 PR |
| 🟡 中 | [#2723](https://github.com/agentscope-ai/QwenPaw/issues/2723) | 频道切换任务上下文丢失 | ❌ 无对应 PR |
| 🟡 中 | [#2705](https://github.com/agentscope-ai/QwenPaw/issues/2705) | DashScope 连接失败 | ❌ 无对应 PR |
| 🟡 中 | [#3005](https://github.com/agentscope-ai/QwenPaw/issues/3005) | 升级最新版后无法启动 | ❌ 无对应 PR |
| 🟡 中 | [#3177](https://github.com/agentscope-ai/QwenPaw/issues/3177) | CoPaw app 启动失败（编码乱码） | ❌ 无对应 PR |
| 🟢 低 | [#2663](https://github.com/agentscope-ai/QwenPaw/issues/2663) | 任务卡住 + 中英文/深浅色设置不持久化 | ❌ 无对应 PR |
| 🟢 低 | [#2385](https://github.com/agentscope-ai/QwenPaw/issues/2385) | CLI 端口管理设计缺陷（影响多智能体协作） | ❌ 无对应 PR |

**稳定性观察**：流式协议层与杀软/安全软件兼容性是当前两大主要风险源。

---

## 6. 功能请求与路线图信号

| 诉求 | Issue | 已有 PR 支撑 |
|------|-------|-------------|
| **自托管多用户 Hub（企业部署）** | — | ✅ [PR #7112](https://github.com/agentscope-ai/QwenPaw/pull/7112) — QwenPaw Hub（OPEN，待合并） |
| **多项目目录（会话级）** | — | ✅ [PR #6976](https://github.com/agentscope-ai/QwenPaw/pull/6976) — OPEN |
| **文件操作回滚 / 删除恢复** | [#2590](https://github.com/agentscope-ai/QwenPaw/issues/2590) | ❌ 规划中，未提交 PR |
| **Fallback 模型（主模型异常自动切换）** | [#2089](https://github.com/agentscope-ai/QwenPaw/issues/2089) | ❌ |
| **/approve 按钮化 + UI 改进** | [#2301](https://github.com/agentscope-ai/QwenPaw/issues/2301), [#2845](https://github.com/agentscope-ai/QwenPaw/issues/2845) | ❌ |
| **浏览器自动化能力增强** | [#3261](https://github.com/agentscope-ai/QwenPaw/issues/3261) | 部分由 [PR #7037](https://github.com/agentscope-ai/QwenPaw/pull/7037)（computer-use 观察相关窗口）推进 |
| **多 AI Provider 独立配置智能体** | [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260) | 部分由 [PR #6515](https://github.com/agentscope-ai/QwenPaw/pull/6515)（Volcengine Agent Plan / MiMo V2.5）推进 |
| **browser_use ARM 原生支持** | [#2655](https://github.com/agentscope-ai/QwenPaw/issues/2655) | ❌ |
| **手机端页面适配 + 大参数量本地模型** | [#2856](https://github.com/agentscope-ai/QwenPaw/issues/2856) | ❌ |
| **Harness Agents / DeerFlow 编排接入** | [#3260](https://github.com/agentscope-ai/QwenPaw/issues/3260), [#3074](https://github.com/agentscope-ai/QwenPaw/issues/3074) | ❌ |
| **ReMeLight Reranker UI** | — | ✅ [PR #6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) — OPEN |
| **SSE 结构化运行结果（API 自动化）** | — | ✅ [PR #5930](https://github.com/agentscope-ai/QwenPaw/pull/5930) — OPEN |
| **小艺（Xiaoyi）渠道稳定化** | — | ✅ [PR #7147](https://github.com/agentscope-ai/QwenPaw/pull/7147) — OPEN |

**路线图判断**：自托管 Hub、多项目目录、Provider 扩展、企业级 API 化（SSE 结构化）是当前最确定的演进方向；文件回滚、fallback 模型等仍是社区呼声高但尚未落地的重要缺口。

---

## 7. 用户反馈摘要

**核心痛点（按频率）**：

1. **🔐 数据安全感缺失**（#2884, #2590）：用户最担心的是"AI 误删文件"，诉求已不仅是简单的回滚按钮，而是"工作区沙箱 + 操作审计"。
2. **⏸ 长任务脆弱**：批量处理、自动循环、压缩等场景下中断频发（#2377, #2663, #2723, #6624），缺少可靠断点续传机制是结构性短板。
3. **🤖 模型稳定性**：上游模型（GLM 5.3、DashScope、Qwen3-235B）一旦抖动或冻结，CoPaw 无法自愈（#7102, #2705, #2598），fallback 机制被反复提及。
4. **🛡 杀软 / 安全软件兼容**：Windows 环境下被拦截甚至杀进程（#6847），影响企业部署。
5. **📱 移动端体验差**：手机浏览器访问 UI 无法使用（#2856）。
6. **🌐 多端协同缺失**：网页 ↔ 桌面 ↔ IM（QQ/微信/钉钉）之间无法平滑接力（#2301, #2493）。

**正面信号**：
- 本地模型跑通 RTX 3080 10G（#2776）证明低端硬件可用性；
- 多渠道（DingTalk / 飞书 / QQ / 微信 / WeCom / Telegram 等）已有较完整覆盖（[PR #7103](https://github.com/agentscope-ai/QwenPaw/pull/7103) 增强了测试覆盖）。

**主要不满**：
- 大量"已 CLOSED"的 Issue 缺乏公开修复说明，用户难以追踪；
- 升级体验脆弱（#3005, #3177 安装/启动失败）；
- 浏览器自动化被

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-20

---

## 1. 今日速览

ZeroClaw 仓库今日保持高强度活跃，**24 小时内 42 条 Issue 与 50 条 PR 同步更新**，但无新版本发布，整体处于密集的 RFC 设计、RFC 落地与代码质量清理并行阶段。议题层面以 P0/P1 级别的运行时 Bug、Windows 兼容性问题、Anthropic 凭据泄露风险以及会话持久化合同争夺为主线，同时社区在大规模 WASM 插件架构、目标模式 v2、SOP 权限模型等方向持续展开讨论。社区贡献者结构稳定，**IftekharUddin 与 JordanTheJet** 是当前最活跃的两名提交者，分别承担功能交付与"反 slop"代码质量整改两类工作。整体来看，项目健康度良好，无停滞信号，但 RFC 决策队列（[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)）正面临持续扩大的维护者审阅压力。

---

## 2. 版本发布

**今日无新版本发布。**

最近的版本动作为 v0.8.3 / v0.8.4 系列；当前主线工作集中在即将到来的 **v0.9.0 SOP 授权合同** 与 0.8.x 系列的后续补丁上，建议关注 [#9381](https://github.com/zeroclaw-labs/zeroclaw/issues/9381)（crates.io 发布与打包跟进）与 [#10087](https://github.com/zeroclaw-labs/zeroclaw/issues/10087)（memory-postgres 测试纳入必备 CI）。

---

## 3. 项目进展

今日**仅有 1 条 PR 标记为已合并/已关闭**（[#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) 重新限定范围的 Bug 报告），新增 PR 大量处于"待作者行动"或"待合并"状态。值得关注的实质性推进包括：

- **运行时"无恐慌化"重构** — [#10134](https://github.com/zeroclaw-labs/zeroclaw/pull/10134)（runtime agent/turn/RPC dispatch 移除 17 处 panic 候选）与 [#10129](https://github.com/zeroclaw-labs/zeroclaw/pull/10129)（11 个 Schema V4 工具中消除 21 处 panic/invariant）。这两项工作直接对应 [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) 的"反 slop"政策追踪。
- **WASM 插件导出超时加固** — [#9403](https://github.com/zeroclaw-labs/zeroclaw/pull/9403) 引入 `plugins.limits.call_timeout_ms`（默认 30,000 ms）统一覆盖 tool/memory/channel guest 导出。
- **ZeroCode 主题预设重构** — [#10148](https://github.com/zeroclaw-labs/zeroclaw/pull/10148) 把 TUI 主题表从 `build.rs` 迁到 `xtask` 注册中心，便于包解耦后独立编译。
- **ZeroCode Chat 粘贴修复** — [#10150](https://github.com/zeroclaw-labs/zeroclaw/pull/10150) 修复活跃回合期间粘贴被静默丢弃的问题，并附带回归测试。

总体而言，今日是"质量整改+小步快跑"的一天，**大型功能 PR（多为 size:XL）仍主要在 RFC 评审与合并前 review 阶段**，未实质合入 master。

---

## 4. 社区热点

| 排名 | Issue/PR | 标题 | 评论数 | 主题 |
|------|----------|------|--------|------|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | **20** | 会话所有权边界 |
| 2 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows — Unix-only test commands | **18** | Windows 测试兼容 |
| 3 | [#10118](https://github.com/zeroclaw-labs/zeroclaw/issues/10118) | Tracker: Rust anti-slop policy debt remediation | **16** | 反 slop 政策追踪 |
| 4 | [#6165](https://github.com/zeroclaw-labs/zeroclaw/issues/6165) | RFC: Lighter ZeroClaw core via external integrations | **16** | 核心瘦身/外部集成 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs | **13** | 维护者决策积压 |
| 6 | [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | RFC: Empty WhatsApp Web `allowed_groups` → permit-none | **13** | WhatsApp 安全语义 |
| 7 | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) | RFC: SOP capability permission contract (Rev 3) | **7** | SOP 权限合同 |
| 8 | [#7108](https://github.com/zeroclaw-labs/zeroclaw/issues/7108) | feat(ci): improve cached Rust builds and CI critical path | **6** | CI 缓存/关键路径 |
| 9 | [#9600](https://github.com/zeroclaw-labs/zeroclaw/issues/9600) | Tracker: Session-persistence contract ownership | **5** | 会话持久化所有权 |
| 10 | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | RFC: AI-assisted PR pre-review and re-review | **5** | AI 辅助 PR 审阅 |

**诉求解读**：最热的三大主线分别是 **(1) 会话/传输架构所有权**（#9487、#9600、#8692 相互交织的"四方工作流缺少合同所有者"问题）、**(2) Windows 平台一等公民**（#7462 测试 74 个失败、#9290 桌面安装器崩溃），以及 **(3) 核心瘦身/插件化**（#6165、#10076 WASM 插件架构 RFC）。三者均指向"多工作流并行 + 缺少统一所有者"的治理痛点，#8692 的维护者决策队列正在成为关键瓶颈。

---

## 5. Bug 与稳定性

按严重程度排序（今日活跃 / 新开）：

| 严重度 | Issue | 组件 | 是否已有 Fix PR |
|--------|-------|------|-----------------|
| **P0 · S1** | [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) SOP 引擎先执行后续步骤才记录输出 schema 拒绝 | runtime/daemon | ❌ 暂无 PR |
| **P0 · S0** | [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976) Anthropic 凭据片段被记入 debug 日志（凭据头/尾 8+4 字符） | provider/auth | ❌ In-progress，无合入 PR |
| **P1 · S2** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows 74 测试失败 + 中文 936 代码页 | tooling/ci | ❌ 仅 [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) 桌面侧跟进 |
| **P1 · S1** | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) Windows 桌面安装器缺少 TaskDialogIndirect | desktop | ❌ |
| **P1 · high** | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) 工具结果固定 50,000 字符截断，对结构化输出逐字节 | runtime/daemon | ⚠️ Issue 已重新限定范围并 **CLOSED**，但功能修复未见 PR |
| **P2 · S2** | [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) 持久化图片标记残留临时源路径，反复告警 | runtime/daemon | ❌ In-progress |
| **P2 · S2** | [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) 精确代理选择器拒绝支持的转录服务 | config/onboarding | ❌ |
| **P2 · high** | [#10074](https://github.com/zeroclaw-labs/zeroclaw/issues/10074) SECURITY.md 引用 4 月已移除的 docker CI job | docs/security | ❌ |
| **P3 · S3** | [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) ZeroCode Health 法/西语标签宽度错位 | zerocode/tui | ❌ |
| **P3 · S3** | [#9760](https://github.com/zeroclaw-labs/zeroclaw/issues/9760) Web Quickstart 不展示频道描述符默认值 | web dashboard | ❌ |

**重点警示**：
- **S0 安全级**的 [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976)（Anthropic 凭据泄露到日志）目前仍 In-progress、未见合并 PR，应优先处理。
- **S1 工作流阻塞**级 [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066)（SOP 引擎错序执行）同样无在途 fix。
- Windows 桌面 [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290)（TaskDialogIndirect 缺失）影响 v0.8.3 安装体验，**已超过 1 个月无 PR**。

---

## 6. 功能请求与路线图信号

**已被 RFC 立项且具备实现路径的功能**：

| RFC/Feature | Issue | 关联 PR | 命中下一版本概率 |
|-------------|-------|---------|------------------|
| SOP 能力权限合同 | [#9598](https://github.com/zeroclaw-labs/zeroclaw/issues/9598) | （Rev 3 待合并） | **极高**（目标 v0.9.0） |
| WASM 插件架构（hook/backend/capability 三层） | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | （无） | 高（架构层面） |
| Gateway OpenAI Chat Completions 端点 | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) 自身（Blocked） | 中（生态对接需求强，但 review 阻塞） |
| ZeroCode 多会话面板 + 侧边栏启动 | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | 同号 PR | 高（XL 已基本就绪） |
| 工具结果截断改为可配置 | [#10067](https://github.com/zeroclaw-labs/zeroclaw/issues/10067) | ❌ | 高（Issue 已闭环但待代码） |
| AI 辅助 PR 预审 / 再审 | [#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | （无） | 中（流程改动，需治理共识） |
| Goal mode v2 持久续作 + 配对 Web 控件 | [#9702](https://github.com/zeroclaw-labs/zeroclaw/issues/9702) | （无） | 中（产品形态成熟度） |
| Option-Backspace 单词删除 | [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) | （无） | 高（good first issue，易做） |
| PostgreSQL 服务容器加入必备 CI | [#9318](https://github.com/zeroclaw-labs/zeroclaw/issues/9318) | （无） | 高（基础设施跟进） |

**路线图信号**：
- **v0.9.0 的旗帜性工作是 SOP 权限合同**（#9598）和 WASM 插件架构扩展（#10076）。
- **v0.8.x 补丁方向**集中在 PostgreSQL 必备 CI（#9318/#10087）、crates.io 打包（#9381）、PR 风险分级校准（#9990）。
- **AI 辅助审阅（#9330）+ 会话架构治理（#9487、#9600）** 是中长期方向，预期影响 v0.10+。

---

## 7. 用户反馈摘要

从最新 Issue 评论中提炼的真实用户痛点：

1. **ZeroCode 会话管理 UX 令人沮丧** — [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) `klonuo` 直接反馈"进入历史会话很烦"，列举 3 个具体细节：(a) 无法便捷复制上一条消息；(b) 仅能复制代码片段且按钮不易发现；(c) 跨会话追踪困难。**诉求：让会话真正"可用"**。
2. **macOS 编辑习惯缺失** — [#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059) 用户期望 ZeroCode 文本输入支持 Option-Backspace 单词删除（当前仅 `Ctrl+W`）。
3. **ZeroCode 日志面板不可选中/不可复制** — [#10086](https://github.com/zeroclaw-labs/zeroclaw/issues/10086) 用户反馈 Logs 面板缺乏鼠标选择能力，只能通过"打开条目 → 按 y"复制完整详情，**日常排障体验差**。
4. **图片附件残留临时路径并反复警告** — [#10045](https://github.com/zeroclaw-labs/zeroclaw/issues/10045) 反映真实工作流：用户上传临时文件 → agent 复制入工作区 → `[IMAGE:...]` 标记仍指向原路径，**清理后产生无意义告警**。
5. **法语/西语本地化宽度错位** — [#10103](https://github.com/zeroclaw-labs/zeroclaw/issues/10103) 国际化用户对 Uptime/PID 标签 padding 的硬编码宽度提出明确意见。
6. **Windows 桌面安装后无法启动** — [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) 用户反映从 v0.8.3 release 下载 exe 安装后桌面无法启动，配图明确，**严重阻断 Windows 新用户体验**。
7. **转录代理精确选择器误拒已支持服务** — [#10106](https://github.com/zeroclaw-labs/zeroclaw/issues/10106) 用户发现 Groq/OpenAI/Deepgram/AssemblyAI/Google 等转录服务被代理选择器错配拦截，**功能存在但被配置门挡掉**。
8. **Web Quickstart 频道描述符默认值不可见** — [#9760](https://github.com/zeroclaw-labs/zeroclaw/issues/9760) CLI/TUI 已能消费 `default` 描述符，但 Web 表单初始为空。

**共性结论**：用户最强烈的反馈集中在 **"已有功能但 UX 不到位"** 与 **"Windows / 本地化 / 国际化细节缺失"** 两个维度，并非功能缺失。

---

## 8. 待处理积压

按"重要性 + 停滞时长"标注需要维护者关注的项：

| Issue/PR | 标题 | 起始日期 | 停滞时长 | 风险 | 维护者行动建议 |
|----------|------|----------|----------|------|----------------|
| [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows 桌面 TaskDialogIndirect 启动失败 | 2026-07-23 | **~28 天** | S1 | 升级 WiX/installer 依赖或回退 API 调用 |
| [#10066](https://github.com/zeroclaw-labs/zeroclaw/issues/10066) | SOP 引擎错序执行（output schema 拒绝后才记录但步骤已执行） | 2026-08-17 | 3 天 | S0/P0 | 在 SOP 引擎加入"先校验后执行"门控 |
| [#9976](https://github.com/zeroclaw-labs/zeroclaw/issues/9976) | Anthropic 凭据片段写入 debug 日志 | 2026-08-13 | 7 天 | S0 | 立即关闭 credential_head/tail 字段输出 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | feat(gateway): OpenAI Chat Completions 端点 | 2026-06-29 | **~52 天** | 高 · 阻塞 | 标记 BLOCKED 已久，需维护者决策（关联 #8603/#6850/#8550） |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 测试失败 | 2026-06-10 | **~71 天** | 高 | 与 [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) 合并为 Windows 一等公民 tracker |
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*