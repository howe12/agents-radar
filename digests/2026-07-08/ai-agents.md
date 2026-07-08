# OpenClaw 生态日报 2026-07-08

> Issues: 241 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-08 05:43 UTC

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

**📅 报告日期**：2026-07-08  
**📊 数据源**：GitHub `openclaw/openclaw`  
**🤖 报告角色**：AI 智能体与个人 AI 助手领域开源项目分析师

---

## 1. 今日速览

OpenClaw 今日呈现**高活跃、高并发但仍处"修复债"积累期**的态势。过去 24 小时内共触发 241 条 Issue 更新（235 条新增/活跃，6 条关闭）与 500 条 PR 更新（375 条待合并，125 条已合并/已关闭），单日吞吐量在同类 Agent 框架中处于第一梯队。**当日无新版本发布**，结合大量仍标注 `clawsweeper:no-new-fix-pr`（无对应修复 PR）的 Issues，可判断维护者当前正处于"集中消化的半冻结期"——大量 PR 排队维护者评审，但 P0/P1 Bug 修复链路尚未完全打通。社区讨论最密集的方向集中在**多 Agent 编排稳定性、Channel Provider（Feishu/Telegram/Signal/Mattermost）消息丢失与回包异常**以及**Provider 鉴权失败**三大主题。

---

## 2. 版本发布

⚠️ **今日无新 Release 标签或版本号变更**。

建议关注下游用户在 `2026.5.x` 与 `2026.6.x` 系列下报告的若干回归（如 #85333、`2026.6.8` 版本上的 Ollama 流式响应停滞），社区可能正在等待下一个 patch 版本统一修复。

---

## 3. 项目进展

虽然 24 小时内有 125 条 PR 状态变为合并/关闭，但需注意多数为早期/周边 PR。维护者重点关注的合并/推进进展包括：

- **🚀 PR #101989**（已开启，`gateway/agents`） `fix(gateway): pass authProfileStore through loopback MCP bridge` —— 修复 #101967，解决 OAuth-only 插件工具（如 xAI `x_search`/`code_execution`）在 Claude CLI 后端下未注册的问题。  
  → [openclaw/openclaw#101989](https://github.com/openclaw/openclaw/pull/101989)

- **🚀 PR #101928**（已开启，`agents`） `fix(agents): allow re-entrant session write lock for overflow-recovery compaction` —— 修复 #97747，让同一进程内可重入获取会话写锁，避免溢出恢复自动压缩死锁。  
  → [openclaw/openclaw#101928](https://github.com/openclaw/openclaw/pull/101928)

- **🚀 PR #102000**（已开启，`P1`） `fix(cron): skip startup catchup for missed jobs already completed with status=ok` —— 修复 #101988，避免重启后重复触发已完成 cron 任务。  
  → [openclaw/openclaw#102000](https://github.com/openclaw/openclaw/pull/102000)

- **🚀 PR #102028**（已开启，`P2`） `fix(qqbot): add timeout to speech transcription requests` —— 为 QQBot 语音转写增加超时边界，避免长时挂起。  
  → [openclaw/openclaw#102028](https://github.com/openclaw/openclaw/pull/102028)

- **🚀 PR #101599**（已开启） `fix(codex-supervisor): handle stdout/stderr stream errors in stdio transport` —— Codex 监督器 stdio 传输层可靠性增强。  
  → [openclaw/openclaw#101599](https://github.com/openclaw/openclaw/pull/101599)

- **🚀 PR #102026**（已开启） `fix(chutes): add timeouts to OAuth HTTP requests` —— 解决 Chutes OAuth 登录可能挂死的问题。  
  → [openclaw/openclaw#102026](https://github.com/openclaw/openclaw/pull/102026)

- **🚀 PR #102027**（已开启） `fix(mattermost): add timeout to REST client requests` —— Mattermost REST 客户端默认 30s 超时，与姊妹 PR 一同落地"全渠道超时收口"。  
  → [openclaw/openclaw#102027](https://github.com/openclaw/openclaw/pull/102027)

- **🚀 PR #102022 / #102036 / #102043**（已开启，姊妹 PR） `fix(lobster): avoid accidental TaskFlow routing for ordinary run/resume` —— Lobster 扩展连续三个 PR 协同修复 #102011 的 schema 默认字段路由误判。  
  → [openclaw/openclaw#102022](https://github.com/openclaw/openclaw/pull/102022) · [#102036](https://github.com/openclaw/openclaw/pull/102036) · [#102043](https://github.com/openclaw/openclaw/pull/102043)

- **🚀 PR #102044**（**已关闭**） `refactor(slack): localize internal declarations` —— 由 `@vincentkoc` 提交，Slack 插件内部 TypeScript 表面收敛。  
  → [openclaw/openclaw#102044](https://github.com/openclaw/openclaw/pull/102044)

- **🚀 PR #89040**（已开启，**P1**，XL 级） `perf: avoid event-loop stall during embedded_run bootstrap-context` —— 解决 `embedded_run` bootstrap 期 14–22 秒事件循环阻塞所导致的消息丢失。  
  → [openclaw/openclaw#89040](https://github.com/openclaw/openclaw/pull/89040)

**综合判断**：今日新合并/关闭的 PR 中，**约 10 条与稳定性、可靠性直接相关（超时/鉴权/锁/事件循环）**，与社区最关心的"消息丢失、会话崩溃、Provider 鉴权中断"形成精准对位，项目整体处于**可靠性止血阶段**。

---

## 4. 社区热点

按今日评论数与点赞数综合排序的社区关注焦点：

| 排名 | Issue / 主题 | 评论数 / 👍 | 一句话诉求 |
| --- | --- | --- | --- |
| 1 | [#85333](https://github.com/openclaw/openclaw/issues/85333) `doctor --fix` 从 55s → 229s+ 性能回归 | **15 评论 / 1 👍** | 用户要求追查 2026.5.20 的会话快照路径遍历瓶颈 |
| 2 | [#43367](https://github.com/openclaw/openclaw/issues/43367) 多 Agent 编排：config 覆盖、session-lock 失败、子任务脱管 | **13 评论 / 1 👍** | 暴露当前 CLI `agents add` 并发不安全，亟待并发控制 |
| 3 | [#39604](https://github.com/openclaw/openclaw/issues/39604) `tools.web.fetch.allowPrivateNetwork` | **13 评论 / 11 👍** | **社区最高赞**，要求 opt-in 私网访问；已 `linked-pr-open` |
| 4 | [#42475](https://github.com/openclaw/openclaw/issues/42475) Per-agent 网关层成本预算 | **12 评论 / 1 👍** | 在网关侧加日/月上限，防止异常消耗 |
| 5 | [#41744](https://github.com/openclaw/openclaw/issues/41744) Feishu: read image 出站媒体丢失 | **12 评论 / 0 👍** | `read` 后图片没附着到最终回包；stale 标签存在 |
| 6 | [#40001](https://github.com/openclaw/openclaw/issues/40001) `write` 工具缺乏 append 模式导致 cron 覆盖共享文件 | **11 评论 / 1 👍** | 多 session 静默数据丢失 |
| 7 | [#38327](https://github.com/openclaw/openclaw/issues/38327) Vertex/Gemini 3.1 Pro 预览版 "Cannot convert undefined or null" | **10 评论 / 3 👍** | 升级到 2026.3.2 后必崩 |
| 8 | [#38439](https://github.com/openclaw/openclaw/issues/38439) Webchat 头像接口 404 | **10 评论 / 1 👍** | `IDENTITY.md` 已配置却始终 404 |
| 9 | [#39476](https://github.com/openclaw/openclaw/issues/39476) A2A `sessions_send` 回环导致重复消息 | **10 评论 / 0 👍** | A→B→A 回送后用户频道重复 |
| 10 | [#44431](https://github.com/openclaw/openclaw/issues/44431) 浏览器工具 7 项改进（真实场景田野报告） | **9 评论 / 1 👍** | 缺 CSS selector、流式截图、登录态缓存等 |
| 11 | [#42840](https://github.com/openclaw/openclaw/issues/42840) Control UI MathJax/LaTeX 支持 | **8 评论 / 9 👍** | **👍 增长快**，要求公式渲染 |
| 12 | [#45758](https://github.com/openclaw/openclaw/issues/45758) YAML 配置格式 | **7 评论 / 2 👍** | 替代 JSON5，配合 DevOps 生态 |
| 13 | [#43996](https://github.com/openclaw/openclaw/issues/43996) 沙箱 `no-new-privileges` 下退出码 255 | **7 评论 / 2 👍** | 安全加固导致容器启动失败 |

**诉求侧聚合**：用户既要求**基础稳定性**（超时、锁、并发、路由），也要求**生产力增强**（私网抓取、成本控制、Markdown/LaTeX/YAML、移动端 SKill Workshop）。

---

## 5. 🔴 Bug 与稳定性

按严重程度倒序（仅列 P1+ 或社区高评论）：

### 🚨 P1 — 生产事故级

- **[#85333](https://github.com/openclaw/openclaw/issues/85333)** `openclaw doctor --fix` 4–5× 性能回归。  
  状态：`clawsweeper:no-new-fix-pr` + `needs-live-repro`。  
  风险：运维命令可直接拖垮生产 VPS；评级 `🐚 platinum hermit`。

- **[#43367](https://github.com/openclaw/openclaw/issues/43367)** 多 Agent 编排不稳定。  
  `agents add` 并发不安全、`session-lock` 获取失败、子任务脱管。  
  评级 `🦞 diamond lobster`，阻塞 Agent 编排核心场景。

- **[#41744](https://github.com/openclaw/openclaw/issues/41744)** Feishu：read image 出站回复媒体丢失。  
  状态：`stale`，**长期未响应 + 关键 channel**。

- **[#40001](https://github.com/openclaw/openclaw/issues/40001)** `write` 工具缺 append，多 session 静默数据丢失。  
  评级 `🦞 diamond lobster`，建议升级为 `write` 必备 `--append` 参数。

- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** 2026.3.2 + `google-vertex/gemini-3.1-pro-preview` 全局崩溃（"Cannot convert undefined or null to object"）。  
  `clawsweeper:needs-product-decision`，影响 Vertex 用户。

- **[#41165](https://github.com/openclaw/openclaw/issues/41165)** Telegram DM 路由泄漏到 `agent:main:main`。  
  `#40519` 后的剩余 bug，状态有 PR 跟踪中。

- **[#82662](https://github.com/openclaw/openclaw/issues/82662)** 独立 cron agentTurn "setup timed out before runner start"，所有 fallback 模型耗尽。  
  评级 `🐚 platinum hermit`，5.12 用户复现集中。

- **[#94251](https://github.com/openclaw/openclaw/issues/94251)** Ollama 远端 provider 流式不消费，`model_call:started` 不前进。  
  `2026.6.8` 版本，`stale` 风险。

- **[#92057](https://github.com/openclaw/openclaw/issues/92057)** 多会话/多 Agent 负载下网关慢或超时。  
  内部 RPC 超时影响 Telegram 用户。

- **[#43374](https://github.com/openclaw/openclaw/issues/43374)** 4 Agent 并发时 LLM 调用同步超时，但 `curl` 同秒可达。  
  评级 `🦪 silver shellfish`，疑似内部瓶颈。

- **[#44134](https://github.com/openclaw/openclaw/issues/44134)** Google Antigravity 账户误封：频繁 schema 重新加载。  
  评级 `🐚 platinum hermit`，涉及账户与合规。

- **[#45718](https://github.com/openclaw/openclaw/issues/45718)** Session 文件 `skillsSnapshot` / `systemPromptReport` 不断累积直至 OOM。  
  存在关联 PR 推进中。

- **[#40611](https://github.com/openclaw/openclaw/issues/40611)** 心跳漂移修复（#39182）致 Telegram 阻塞。  
  反向回归，需 revert 或细化。

- **[#39807](https://github.com/openclaw/openclaw/issues/39807)** 402 账单错误导致 inline-apiKey 提供商无限重试（5,

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告

**报告日期**：2026-07-08
**数据范围**：13 个项目（其中 3 个当日无活动）
**核心参照项目**：OpenClaw

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态整体处于**"高并发迭代 + 安全债集中暴露"的双轨并行阶段**：一方面，以 OpenClaw、ZeroClaw、IronClaw、CoPaw 为代表的活跃项目单日 PR/Issue 吞吐量持续走高（5 个项目单日 PR 流转 ≥ 32 条），功能快速向多 Agent、零代码、MCP 工具栈、Provider 矩阵等方向扩张；另一方面，2026-07-07 单一安全研究员 YLChen-007 在 LobsterAI、TinyClaw 等多个项目集中披露**未鉴权控制平面 + 本地文件外泄**的同源高危漏洞，迫使生态从"功能竞速"被动转入"安全止血"。整体看，**消息通道（Feishu/Telegram/WeChat/Slack）的可靠性和 Provider 鉴权流**已成为本周期内最集中的失败面，而**版本升级引发的回归缺陷**（NanoBot #4013/#4823、PicoClaw #3232）正在侵蚀用户对 beta 节奏的信任。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已闭环） | 发布 | 当日健康度 |
|---|---|---|---|---|
| **OpenClaw** | 241（235/6） | 500（375/125） | 无 | ⭐⭐⭐⭐☆ 高吞吐 + 修复债积累期 |
| **NanoBot** | 14（8/6） | 32（18/14） | 无 | ⭐⭐⭐⭐☆ 安全加固阶段，健康 |
| **Hermes Agent** | 11 | 50 | **v0.18.1 + v0.18.2 双发** | ⭐⭐⭐⭐⭐ 高响应 + 节奏稳健 |
| **PicoClaw** | ~5 | 2（0/2） | 无 | ⭐⭐☆☆☆ 维护期，低响应 |
| **NanoClaw** | 1（新安全公告） | 22（14/8） | 无 | ⭐⭐⭐⭐☆ 文档翻新 + 安全债清算 |
| **NullClaw** | 0 | 0 | 无 | ⭐☆☆☆☆ 无活动 |
| **IronClaw** | 6（5/1） | 50（38/12） | 无（#5598 待合并） | ⭐⭐⭐⭐☆ 重磅迭代，PR 流水积压 |
| **LobsterAI** | 3 安全公告 + 1 普通 | 13 已合入 | **2026.7.7 已发布** | ⭐⭐⭐☆☆ 主线推进 + 安全风险窗口 |
| **TinyClaw** | **9 全部为安全** | 0 | 无 | ⭐☆☆☆☆ 安全应急期，无响应 |
| **Moltis** | 0 | 0 | 无 | ⭐☆☆☆☆ 无活动 |
| **CoPaw** | 17（11/6） | 33（19/14） | **v2.0.0-beta.3** | ⭐⭐⭐⭐⭐ beta 反馈流畅，响应快 |
| **ZeptoClaw** | 0 | 0 | 无 | ⭐☆☆☆☆ 无活动 |
| **ZeroClaw** | 8（6/2） | 50（45/5） | 无 | ⭐⭐⭐⭐☆ Rust 高安全导向，MCP 治理待解 |

**判读**：当日 13 个项目中仅 **4 个发布了新版本**（Hermes Agent × 2、LobsterAI × 1、CoPaw × 1），表明大多数项目处于"版本间沉淀期"。当日有 3 个项目（NullClaw、Moltis、ZeptoClaw）零活动；另有多个项目（OpenClaw、PicoClaw、TinyClaw）当日 PR 通过率为 0。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与吞吐

OpenClaw 在所有项目中处于**绝对头部**：当日 241 条 Issue + 500 条 PR 流转的组合，是第二梯队（Hermes / IronClaw / ZeroClaw 各 50 条 PR）的近 10 倍，体现其**作为核心参照项目的"基准"地位**。这种规模源于其作为 Channel 集成最广（Feishu/Telegram/Signal/Mattermost/QQ/Lobster 扩展）的多 Agent 编排框架。

### 3.2 与同类项目的关键差异

| 维度 | OpenClaw | Hermes Agent | IronClaw | ZeroClaw | LobsterAI |
|---|---|---|---|---|---|
| **实现语言/栈** | 多通道 JS/TS Agent | 多语言 + Desktop 客户端 | Rust rebirth 架构 | **Rust 类型安全** | Electron + 多端 |
| **渠道宽度** | 8+ IM 通道 | Feishu/Telegram/WhatsApp | Slack OAuth + WASM | Telegram/WeChat | 飞书/钉钉为主 |
| **版本节奏** | 半冻结修复期 | 日双发 | 跨 5 个次版本蓄势 | 持续迭代 | 周级 release |
| **护城河** | 多 Agent 编排 + 扩展 | Desktop 平台化 | Subagent CAS + WASM 扩展 | Rust 安全声誉 | 多账号 Email + 子 Agent |

### 3.3 优势与短板

- **优势**：跨通道消息稳定性、社区规模、生态外延（cron / Lobster 扩展 / MCP 桥接）、30+ 通道覆盖；
- **短板**：当日仍有 P1 Bug（如 #85333 性能回归、#43367 多 Agent 并发、#40001 write 缺 append）**无 PR 修复**；`clawsweeper:no-new-fix-pr` 标签说明维护团队处于"评审拥塞"状态。

---

## 4. 共同关注的技术方向

下列问题在**至少 3 个项目**同时出现，是当前生态的**共识痛点**：

| 共同方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **未鉴权控制平面 / 本地文件外泄** | TinyClaw（9 项）· LobsterAI（#2286/#2287/#2288）· NanoBot（#4825/#4826/#4827）· NanoClaw（#2970）· ZeroClaw（SSRF/WS 鉴权） | loopback webhook/HTML 预览/NIM 媒体流缺乏统一鉴权边界（均为 YLChen-007 同源研究） |
| **Channel Provider 鉴权 / 超时** | OpenClaw（#102026 Chutes OAuth/#102027 Mattermost/#102028 QQBot）· PicoClaw（#3196/#3197 Codex OAuth）· Herme Agent（Telegram 语音转写） | Provider 鉴权挂死、stdio 传输可靠性、超时收口 |
| **MCP 工具栈稳定性** | NanoBot（#4764/#4842/#4843/#4844/#4506）· ZeroClaw（#6699/#8642/#8496）· OpenClaw（loopback MCP bridge） | Cancel scope 泄漏、stale stack、filter_groups 无效、tool-schema 克隆 OOM |
| **Cron / 后台任务关闭生命周期** | OpenClaw（#102000/#82662）· Hermes Agent（#60708/#32776 drain）· LobsterAI | 重启 / `/update` 中断在飞任务、重复触发 |
| **上下文压缩 / 滚动策略** | OpenClaw（`embedded_run` 14–22s 阻塞）· CoPaw（scroll #5765/#5747）· Herme Agent（Memory-Compression 71.4% 错误 #47464） | 压缩期丢上下文、回环、阻塞事件循环 |
| **消息通道可靠性** | OpenClaw（Feishu/Telegram/Signal）· NanoBot（WeChat 静默丢、Telegram HTML 解析）· PicoClaw（豆包 Seed 工具调用泄漏）· IronClaw（Slack pairing flake 已修） | 出站媒体丢失、群组 allow-list 回归、stdin/stdout 流异常 |
| **Desktop UI 自定义 Provider 集成** | Hermes Agent（4 个 issue 集中爆发 #16185/#20582/#42042/#58393）· IronClaw（终端图标 UX #5705） | OpenAI-compatible 模型列表、API key 字段、配置可发现性 |
| **文档/CLI 不一致** | ZeroClaw（#8797/#8810，同日双 PR 闭环）· NanoClaw（4 PR 文档翻新）· PicoClaw（v0.3.1 静默失效） | 文档漂移、用户第一印象差、升级后行为变更 |
| **write/文件工具安全性** | OpenClaw（#40001 append 缺失）· PicoClaw（#3226 overwrite 保护）· NanoClaw（CWE-22 路径穿越 #2800） | Agent 覆盖共享文件、沙箱边界绕过 |
| **升级回归与 release note 缺失** | NanoBot（#4013/#4823）· PicoClaw（#3232）· LobsterAI（#1400） | 行为变更无破坏性提示、用户升级即破 |

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多 Agent 编排 + 宽通道 | 高级个人 / 复杂工作流编排 | JS/TS + 多 Agent runtime + 8+ 通道桥接 |
| **NanoBot** | 安全 + WebUI 体验 | 个人本地部署 | Python + WebUI 工具链 + 安全边界强化 |
| **Hermes Agent** | Desktop 平台 + 高频稳定 | 桌面端桌面级用户 | Tauri/Desktop shell + contribution-driven |
| **PicoClaw** | 嵌入式 / 硬件前置场景 | 边缘设备 + B 端集成 | NanoKVM / 国产模型适配 |
| **NanoClaw** | CLI 工具 + 多 Skill 生态 | DevOps / 系统运维 | CLI + skill marketplace 化 |
| **IronClaw** | Subagent WASM 平台 | 多租户 / 企业 | Rust reborn + WASM 工具 + CAS-删除 |
| **LobsterAI** | 多账号 Email + 子 Agent | 国内 B 端 / 办公场景 | Electron + 子 Agent 委托 |
| **TinyClaw** | 控制平面（当前紧急） | 待修复后评估 | REST/SSE 控制面 |
| **CoPaw** | Beta 高速反馈 | 早期采用者 / 滚动压缩研究者 | 多渠道 + scroll 压缩策略 |
| **ZeroClaw** | Rust 类型安全 + 零代码 | 类型敏感 / 非开发者 | **Rust 全栈 + SOP 节点图** |

**关键差异化观察**：
- **OpenClaw vs ZeroClaw**：前者侧重"广度（多通道）"，后者侧重"深度（Rust 类型/内存安全）"；
- **Hermes Agent vs CoPaw**：前者已进入"平台化"阶段（Desktop 贡献平台），后者尚在"压缩策略"细节打磨；
- **IronClaw vs LobsterAI**：前者走"WASM 工具私有化"企业路线，后者走"Email 多账号 + 子 Agent"办公路线；
- **NanoBot/TinyClaw/NanoClaw 三者名字相近但策略迥异**：NanoBot 走"主动清安全债"、TinyClaw 走"被动应急"、NanoClaw 走"集中翻新文档+安全"。

---

## 6. 社区热度与成熟度分层

### 🟢 第一梯队：高速迭代期（健康但承压）

- **OpenClaw**：吞吐第一，但"修复债积累"需警惕；
- **Hermes Agent**：当日双发、P1 全闭环（100%）、CVE 主动升级，**最稳健的高速项目**；
- **ZeroClaw**：50 PR 中安全占比高（SSRF ×3、WS 时序攻击 ×1、鉴权 ×1），是 Rust 阵营的安全标杆；
- **IronClaw**：Reborn 子代理 + WASM 大单 PR 等待评审，PR 积压是主要风险；
- **CoPaw**：v2.0 beta 反馈流畅（Issue 关闭率 35%、PR 合入率 42%），scroll 压缩一日内三 issue 闭环。

### 🟡 第二梯队：质量巩固期

- **NanoBot**：当日修复多个 Critical Security + 依赖 + MCP 稳定性，预计 0.2.3 补丁即将发布；
- **NanoClaw**：文档基线一次性回正（4 PR 同步合并），同时安全债集中清算；
- **LobsterAI**：2026.7.7 已发布但三个高危 Security Advisory 待修复，处于"主线推进 vs 安全债"拉锯。

### 🔴 第三梯队：维护停滞 / 应急状态

- **PicoClaw**：当日 0 合入 PR，5 个开放 Bug 全部无 fix PR，处于"维护期

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**📅 报告日期：2026-07-08**
**📊 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库**

---

## 1. 今日速览

NanoBot 今日处于**高度活跃且聚焦于安全加固与稳定性修复**的状态。过去 24 小时内，14 个 Issue 流转（8 活跃/6 关闭），32 个 PR 流转（18 待合并/14 关闭），日吞吐量为近期较高水平。当日修复了大量**安全漏洞**（OpenAI 兼容 API 未授权访问、WebUI Token 铸造、Slack 依赖缺失、DNS Rebinding 等）和 **MCP/WebUI 相关稳定性问题**，社区贡献者（chengyongru、asif786ka、XJPeng12、hamb1y 等）持续输出 commit。整体看，项目健康度良好，**安全债正在快速清偿**，但仍有多条 P1 级别的 PR 在等待 review。无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。** 上一版本为 `0.2.2` 系列（见 Issue #4823 中提及的回归基线）。考虑到今日修复的安全、依赖及多处 P1 bug，预计维护者将很快发布 `0.2.3` 或 `0.2.x` 补丁版本。

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#4669](https://github.com/HKUDS/nanobot/pull/4669) | **fix: require api key for serve** (p1/security) | **重大安全修复**：强制 OpenAI 兼容 API server 在启动前配置 API Key，关闭未授权调用通道（修复 [#4078](https://github.com/HKUDS/nanobot/issues/4078)）。显著降低了本地/公网部署被滥用的风险。 |
| [#4830](https://github.com/HKUDS/nanobot/pull/4830) | **Fix missing aiohttp slack dependency** | 修复 Slack 插件构建问题（修复 [#4829](https://github.com/HKUDS/nanobot/issues/4829)），保证 extras 安装完整性。 |
| [#4831](https://github.com/HKUDS/nanobot/pull/4831) | **fix(webui): keep prompt rail out of narrow chat columns** | WebUI 体验优化——在窄聊天列中正确隐藏 Prompt Rail，避免布局挤压。 |
| [#3378](https://github.com/HKUDS/nanobot/pull/3378) | **feat: add camera_capture tool** | 新增摄像头拍照工具（默认关闭、需显式启用）。 |
| [#3517](https://github.com/HKUDS/nanobot/pull/3517) | **fix(weixin): refresh context_token** | 修复 WeChat 定时任务/Gateway 重启后消息静默丢弃的顽疾。 |
| [#4833](https://github.com/HKUDS/nanobot/pull/4833) | **Gate sustained goals behind explicit runtime mode** | 重构长期目标工具调用面板，仅在运行时显式启用（被 [#4844](https://github.com/HKUDS/nanobot/pull/4844) 替代/演进）。 |

### 📈 整体向前推进的维度
- **安全姿态**：OpenAI 兼容 API 的认证边界已建立 [#4669](https://github.com/HKUDS/nanobot/pull/4669)。
- **依赖/打包**：Slack extras 补齐 aiohttp [#4830](https://github.com/HKUDS/nanobot/pull/4830)。
- **MCP 栈健壮性**：多项 cancel scope / stale stack / CancelledError 修复在路上（[#4764](https://github.com/HKUDS/nanobot/pull/4764)、[#4842](https://github.com/HKUDS/nanobot/pull/4842)、[#4843](https://github.com/HKUDS/nanobot/pull/4843)、[#4506](https://github.com/HKUDS/nanobot/pull/4506)）。
- **渠道稳定性**：WeChat、Telegram、QQ、Slack 多个 channel 同步改进。

---

## 4. 社区热点

| 排名 | 主题 | 链接 | 评论数 | 诉求分析 |
|---|---|---|---|---|
| 1 | **架构：NanoBot 不保留先前发送给模型的精确 prompt 前缀** | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 12 | 高热议题，争论 OpenAI 协议兼容性与历史记录重放的一致性。属于长期 architectural debt，短期不会关闭。 |
| 2 | **Bug：调用 LLM 90 秒后流式中断** | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | 6 | 用户升级 0.2.0 后出现硬编码超时（疑似 /goal 相关），严重影响实际工作流，反映了**版本升级兼容性**问题。 |
| 3 | **Bug：WhatsApp 群组响应发往每个群** | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | 3 | 0.2.2 的 allow-list 回归，社区对行为变更无 release note 表示不满。 |

> **底层诉求**：用户既要求**版本间行为可预期**（回归测试与升级提示），又要求**架构层面对标准协议忠实**。

---

## 5. Bug 与稳定性

### 🔴 严重（已修复或修复在路上）

| 严重度 | Issue | 描述 | Fix PR | 状态 |
|---|---|---|---|---|
| **Critical (Security)** | [#4078](https://github.com/HKUDS/nanobot/issues/4078) | OpenAI 兼容 API 未授权访问 | [#4669](https://github.com/HKUDS/nanobot/pull/4669) | ✅ 已关闭 |
| **Critical (Security)** | [#4825](https://github.com/HKUDS/nanobot/issues/4825) | `/webui/bootstrap` 未鉴权铸造 Token | 待 PR | 🟡 待处理 |
| **Critical (Security)** | [#4826](https://github.com/HKUDS/nanobot/issues/4826) | WebUI 颁发任意 localhost 进程 Bearer Token | 待 PR | 🟡 待处理 |
| **Critical (Security)** | [#4827](https://github.com/HKUDS/nanobot/issues/4827) | Embedded WebUI bootstrap 同样漏洞复述 | 待 PR | 🟡 待处理 |
| **High (Security)** | [#4611](https://github.com/HKUDS/nanobot/issues/4611) | SSRF DNS rebinding TOCTOU | 待 PR | 🟡 待修复 |
| **High** | [#4823](https://github.com/HKUDS/nanobot/issues/4823) | WhatsApp 群组 allow-list 0.2.2 回归 | 待 PR | 🟡 待处理 |
| **High** | [#4013](https://github.com/HKUDS/nanobot/issues/4013) | Stream stalled > 90s | 待 PR | 🟢 已关闭（含排查指引） |
| **Medium** | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `suppress(Exception)` 静默吞掉 prepare_call 错误 | [#4837](https://github.com/HKUDS/nanobot/pull/4837) | ✅ PR 待合并 |
| **Medium** | [#4800](https://github.com/HKUDS/nanobot/issues/4800) | `msg.content.strip()` 在多模态消息下崩溃 | [#4837](https://github.com/HKUDS/nanobot/pull/4837) | ✅ PR 待合并 |
| **Medium** | [#4835](https://github.com/HKUDS/nanobot/issues/4835) | WebUI 首条消息误发到已选 Chat | 待 PR | 🟡 待处理 |
| **Medium** | [#4841](https://github.com/HKUDS/nanobot/issues/4841) | Matrix e2ee 设备在 Element 显示 untrusted | 待 PR | 🟡 待处理 |
| **Minor** | [#4829](https://github.com/HKUDS/nanobot/issues/4829) | Slack 缺少 aiohttp 依赖 | [#4830](https://github.com/HKUDS/nanobot/pull/4830) | ✅ 已关闭 |

### 🆕 MCP 相关的稳定性 PR（聚集形成修复簇）
- [#4764](https://github.com/HKUDS/nanobot/pull/4764) — 隔离 reconnect cancel scopes 防止 gateway crash
- [#4842](https://github.com/HKUDS/nanobot/pull/4842) — 捕获 `asyncio.CancelledError` 在 `close_mcp`
- [#4843](https://github.com/HKUDS/nanobot/pull/4843) — 重连时延迟清理 stale `AsyncExitStack`
- [#4844](https://github.com/HKUDS/nanobot/pull/4844) — 把长期 goal 工具门控于显式 runtime mode

> 综合判断：**MCP 栈当前处于重写收敛期**，建议维护者统一讨论后合入，避免冲突 PR 干扰。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 进入下一版本可能性 |
|---|---|---|
| **WebUI 文件编辑 Diff 视图** | [#4828](https://github.com/HKUDS/nanobot/pull/4828) | ⭐⭐⭐⭐ 高——已有完整实现 |
| **Provider 托管的 Web Search Tool 抽象** | [#3741](https://github.com/HKUDS/nanobot/issues/3741) 已关闭 | ⭐⭐⭐⭐ 已落地 |
| **CLI 多行输入支持 Shift+Enter (CSI-u)** | [#4832](https://github.com/HKUDS/nanobot/pull/4832) | ⭐⭐⭐ |
| **MCP server idle 超时自动 kill** | [#4506](https://github.com/HKUDS/nanobot/pull/4506) | ⭐⭐⭐——已有 conflict，需协调 |
| **QQ 通道指数退避重连** | [#4838](https://github.com/HKUDS/nanobot/pull/4838) | ⭐⭐⭐⭐ |
| **Telegram 流分段 HTML 解析** | [#4839](https://github.com/HKUDS/nanobot/pull/4839) | ⭐⭐⭐⭐ |
| **Shell 子进程 zombie 回收** | [#4840](https://github.com/HKUDS/nanobot/pull/4840) | ⭐⭐⭐⭐ |
| **红帽系 CA 证书路径支持** | [#4845](https://github.com/HKUDS/nanobot/pull/4845) | ⭐⭐⭐——欧拉/RHEL 部署刚需 |
| **LangSmith 集成状态文档更新** | [#4847](https://github.com/HKUDS/nanobot/pull/4847) | ⭐⭐⭐⭐ 文档规范化 |

---

## 7. 用户反馈摘要

- **😠 痛点 1：版本升级引发的回归** — Issue [#4823](https://github.com/HKUDS/nanobot/issues/4823)（WhatsApp）和 [#4013](https://github.com/HKUDS/nanobot/issues/4013)（Stream 超时）均反映用户升级 0.2.0 系列后**工作流被破坏**，并建议补 release note 与升级指南。
- **😠 痛点 2：Embedded WebUI 安全基线** — [#4825](https://github.com/HKUDS/nanobot/issues/4825) 等 3 条同源 Security 报告说明用户/审计者**对 Loopback-only 的信任已经动摇**，期待默认鉴权/secret 强制。
- **😊 满意点** — Issue [#4013](https://github.com/HKUDS/nanobot/issues/4013) 中用户明确表达对 `0.1.5post2` WebUI 的肯定，说明**前端的迭代获得了用户认可**，但稳定性必须保持。
- **🤝 渠道抱怨** — WeChat 静默丢消息 [#3517](https://github.com/HKUDS/nanobot/pull/3517)，Telegram 解析 [#4839](https://github.com/HKUDS/nanobot/pull/4839)，QQ 重连风暴 [#4838](https://github.com/HKUDS/nanobot/pull/4838)，呈现**多 channel 多点修复**的形态。

---

## 8. 待处理积压（提醒维护者）

| 类型 | 编号 | 状态 | 建议 |
|---|---|---|---|
| 🟥 长期未解决 Architectural | [#2463](https://github.com/HKUDS/nanobot/issues/2463) | 12 条评论，stale 已关闭 | 建议维护者写 ADR 或在 Discussions 中澄清策略 |
| 🟥 Critical Security | [#4825](https://github.com/HKUDS/nanobot/issues/4825) [#4826](https://github.com/HKUDS/nanobot/issues/4826) [#4827](https://github.com/HKUDS/nanobot/issues/4827) | 0 评论 | **需立刻响应并出补丁版本** |
| 🟥 High Security | [#4611](https://github.com/HKUDS/nanobot/issues/4611) | 已关闭但缺修复 PR | 需要跟进 IP pinning fix |
| 🟧 待合入冲突 PR 群 | [#4669](https://github.com/HKUDS/nanobot/pull/4669) [#4764](https://github.com/HKUDS/nanobot/pull/4764) [#4506](https://github.com/HKUDS/nanobot/pull/4506) [#3378](https://github.com/HKUDS/nanobot/pull/3378) [#3517](https://github.com/HKUDS/nanobot/pull/3517) | 已 CLOSED 但标注 conflict | 需维护者 rebase 或合并协调 |
| 🟨 待 review P1 PR | [#4837](https://github.com/HKUDS/nanobot/pull/4837)、[#4840](https://github.com/HKUDS/nanobot/pull/4840)、[#4839](https://github.com/HKUDS/nanobot/pull/4839)、[#4838](https://github.com/HKUDS/nanobot/pull/4838)、[#4842](https://github.com/HKUDS/nanobot/pull/4842) | 多为 P1 | **建议每日 review 节奏** |
| 🟦 体验型 | [#4835](https://github.com/HKUDS/nanobot/issues/

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-07-08 ｜ 数据来源：GitHub (nousresearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今天处于**高频维护与稳定化修复**状态，单日内连续发布两个版本（v0.18.1 与 v0.18.2），并伴随 50 条 PR 更新与 11 条 Issue 互动。整体 PR/Issue 比接近 4.5:1，代码侧投入显著高于问题反馈，且 3 条 P1 级 Bug 在 24 小时内完成闭环（关闭率 100%），显示维护者对高危问题的响应非常高效。今日主题集中在 **gateway/cron 关闭路径修复、TUI 会话状态治理、Desktop 模型选择器回归**三大方向，同时叠加两项 CVE 依赖升级，呈现"安全 + 稳定"双线推进。

---

## 2. 版本发布

### 🚀 v0.18.2 (v2026.7.7.2) — 同日 hotfix

- **发布时间**：2026-07-07（即昨日）
- **核心变更**：`fix(whatsapp)` —— 取消 Baileys 对 git commit 的固定引用，改用已发布的 `7.0.0-rc13`
- **发布动机**：使 tagged release 的 Docker 构建流程能稳定复现
- **影响面**：仅影响 WhatsApp gateway 通道；非破坏性
- **迁移注意事项**：无需用户操作，升级即可

### 🚀 v0.18.1 (v2026.7.7) — 中型稳定版

- **发布时间**：2026-07-07
- **核心变更**：将 7 月 1 日 v0.18.0 以来累计 **约 660 条 PR** 的修复、硬化与进行中的特性工作打包为稳定 tag，专供 Docker 镜像、托管部署、PyPI 等下游消费
- **影响面**：覆盖 bug 修复、安全加固、功能改进，建议下游消费者从 v0.18.0 平滑升级到此 tag
- **破坏性变更**：从摘要未明确披露，建议升级前查阅官方 changelog
- 📦 [Release v0.18.2](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7.2) ｜ [Release v0.18.1](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.7.7)

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 主题 | 类型 | 影响域 | 价值评估 |
|---|---|---|---|---|
| [#60708](https://github.com/NousResearch/hermes-agent/pull/60708) | gateway/cron: 在 shutdown 时 drain 在飞 cron 工作并避免将 killed run 标为成功 | Bug fix (P1) | gateway, cron | ⭐⭐⭐⭐⭐ 修复关键可靠性路径，关 [#60432](https://github.com/NousResearch/hermes-agent/issues/60432) |
| [#60704](https://github.com/NousResearch/hermes-agent/pull/60704) | tui: 阻止 ws_orphan_reap 终结 gateway-owned session | Bug fix (P1) | tui, session | ⭐⭐⭐⭐⭐ 终结 "Groundhog Day" 路由循环，关 [#60609](https://github.com/NousResearch/hermes-agent/issues/60609) |
| [#60724](https://github.com/NousResearch/hermes-agent/pull/60724) | 升级 cbor2 / msgpack / tornado 修复三类 CVE | Security | deps | ⭐⭐⭐⭐ CVSS 7.5–7.7，主动安全维护 |
| [#60697](https://github.com/NousResearch/hermes-agent/pull/60697) | 升级 cryptography 46.0.7→48.0.1 与 python-multipart 0.0.27→0.0.31 | Security | deps | ⭐⭐⭐⭐ 覆盖 CVE-2026-39892 等 |
| [#32776](https://github.com/NousResearch/hermes-agent/pull/32776) | cron: 在 cron job 运行期延后 hermes update | Bug fix (P2) | cli, gateway, cron | ⭐⭐⭐⭐ 长期挂起 PR 终获合并，提升更新期间的稳定性 |
| [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) | model-switch: 合并配置的 custom_providers.models | Bug fix (P2) | cli | ⭐⭐⭐ 解决自定义 provider 模型下拉消失问题 |
| [#60717](https://github.com/NousResearch/hermes-agent/pull/60717) | gateway: 路由 profile 不存在时回退默认 home | Bug fix (P2) | gateway, auth | ⭐⭐⭐ 提升多 profile 配置鲁棒性 |
| [#60723](https://github.com/NousResearch/hermes-agent/pull/60723) | 把 Codex 压缩 autoraise 通知挡在 gateway 回放之外 | Bug fix (P3) | agent | ⭐⭐⭐ 改善会话上下文的整洁度 |
| [#60677](https://github.com/NousResearch/hermes-agent/pull/60677) | email: trim 后跳过 startup UID 回放 | Bug fix (P3) | plugins, email | ⭐⭐⭐ 防止旧邮件被误判新消息 |
| [#60638](https://github.com/NousResearch/hermes-agent/pull/60638) | desktop: 基于布局树与 Dockview 风格重构 shell | Refactor (P3) | desktop | ⭐⭐⭐ 为插件生态奠基 |

**整体推进判断**：今日合并动作集中在"关闭生命周期"——cron 关闭、session 关闭、update 拦截，全部围绕"进程重启不能破坏在飞任务"这条主轴。配合两项 CVE 升级，项目在可靠性与安全性维度均向前迈出一大步，可视为 v0.18.x 系列稳定化的关键一天。

---

## 4. 社区热点

按评论数排序，今日讨论最活跃的 Issues：

| 排名 | Issue | 评论 | 关注度 | 核心诉求 |
|---|---|---|---|---|
| 🥇 | [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) Telegram 语音消息未自动转写 | 4 | 高 | 用户希望 Telegram 语音消息能由本地 faster-whisper 自动转写为文本，覆盖无障碍与移动端随手输入场景 |
| 🥈 | [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) `/model` 仅显示自定义 provider 的一个模型 | 3 | 中 | 自定义 OpenAI-compatible 端点只返回首个模型，限制 OpenRouter、自建网关用户体验 |
| 🥉 | [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) Desktop UI 缺少 Local/custom 端点的 API key 字段 | 3 | 中 | 与 #38572 配合补齐"完全在 UI 内配置第三方服务"的最后一步 |
| 4 | [#58393](https://github.com/NousResearch/hermes-agent/issues/58393) Desktop model picker 无法显示自定义 OpenAI-compatible provider | 2 | 中 | Windows 11 上配置不生效，需结合 [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) 一并修复 |

**背后诉求提炼**：
- **自定义/本地模型生态** 成为当前 Desktop 端最大用户痛点群（4 个相关 issue 同框，且 [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) 已提交 fix）
- **多模态输入完整性**：语音转写至今未列入自动链路，需要走 STT/TTS 全链路打通

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### 🔴 P1 - 关键

| Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#60609](https://github.com/NousResearch/hermes-agent/issues/60609) | ws_orphan_reap 终结 gateway-originated session，引出 Groundhog Day 循环 | ✅ **CLOSED** | ✅ [#60704](https://github.com/NousResearch/hermes-agent/pull/60704) |
| [#60432](https://github.com/NousResearch/hermes-agent/issues/60432) | `/update` 绕过 drain，杀死在飞 cron 工具 | ✅ **CLOSED** | ✅ [#60708](https://github.com/NousResearch/hermes-agent/pull/60708) |
| [#60525](https://github.com/NousResearch/hermes-agent/issues/60525) | `write_file()` 在语法校验前提交磁盘内容 | ✅ **CLOSED** | 待关注，今日未明示修复 PR，需维护者确认 |

### 🟠 P2 - 重要

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#60715](https://github.com/NousResearch/hermes-agent/issues/60715) | **Nous inference API 全面不可达**（基础设施问题，⚠️ 需运营介入） | 🟡 OPEN | ❌ 需 Nous Research 服务侧解决 |
| [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) | P1 Memory-Compression 错误率 71.4%（86 个未压缩积压，SysOps 报告） | 🟡 OPEN | ❌ 虽 [#60579](https://github.com/NousResearch/hermes-agent/pull/60579) 已合并跳过空窗口，仍需根治 |
| [#60721](https://github.com/NousResearch/hermes-agent/issues/60721) | macOS 安装器缺少 `.hermes-bootstrap-complete` 标记，导致每次启动都进入安装流程 | 🟡 OPEN | ❌ |
| [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) | Telegram 语音消息未自动转写 | 🟡 OPEN | ❌ |
| [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) | `/model` 仅显示一个自定义模型 | 🟡 OPEN | ✅ [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) |
| [#58393](https://github.com/NousResearch/hermes-agent/issues/58393) | Desktop 模型选择器无法显示自定义 provider | 🟡 OPEN | ❌ |

### 🟡 P3 - 一般

- [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) Desktop API key 字段缺失（OPEN）
- [#60722](https://github.com/NousResearch/hermes-agent/issues/60722) MoA presets 被 `explicit_only` 过滤器屏蔽（OPEN，回归 bug，根因已知 - commit `37a4cf90`）

**Bug 集中度观察**：今日 8 条 OPEN 中有 5 条与 **Desktop 模型选择器** 强相关（#58393、#42042、#20582、#42042、#60722）。这些很可能是 v0.18.x 系列快速迭代遗留的回归，维护者应集中安排一个 UI round-trip。

---

## 6. 功能请求与路线图信号

| PR / Issue | 类型 | 价值评估 | 进入下个版本的概率 |
|---|---|---|---|
| [#60638](https://github.com/NousResearch/hermes-agent/pull/60638) Desktop shell 重构为 contribution-driven 平台 | Refactor + 平台化 | 高，长期 | 🟢 走在 v0.18.x 路线图上 |
| [#60716](https://github.com/NousResearch/hermes-agent/pull/60716) Hindsight recall metadata 可配置输出 | Feature | 中 | 🟡 单文件小特性 |
| [#60718](https://github.com/NousResearch/hermes-agent/pull/60718) 新增 motion-previs-studio MCP 条目 | Feature | 低（领域） | 🟢 MCP 目录持续扩展模式确定 |
| [#60719](https://github.com/NousResearch/hermes-agent/pull/60719) Feishu 群上下文观察与白名单 | Feature | 中 | 🟢 与 Telegram 并列扩展平台 |
| [#60720](https://github.com/NousResearch/hermes-agent/pull/60720) PGA 订单接入 API（受限 profile-only） | Feature | 低（垂直场景） | 🟢 反映产品向"多 profile 行业租户"演化 |
| [#59075](https://github.com/NousResearch/hermes-agent/pull/59075) cron silence-by-default 抑制告警 | Feature (P2) | 中 | 🟢 提升 watchdogy 工作流体验 |
| [#51524](https://github.com/NousResearch/hermes-agent/pull/51524) Desktop composer 把模型与 reasoning 拆成独立 pill | Feature (P3) | 中 | 🟡 |

**路线图信号**：
- **平台扩展继续往"多 IM、多租户"推进**（Feishu、PGA、motion-previs MCP）
- **Desktop 应用架构正在大改造**（贡献平台、布局树）——预示 v0.19.x 的 UI 大版本可能
- **稳定性 polyfill 仍是当前主轴**：cron、gateway、session state 三条主线贯穿本周

---

## 7. 用户反馈摘要

基于公开 Issue 评论提炼的真实用户声音：

- **😠 抱怨 - 升级体验割裂**：`/update` 或应用重启会中断后台任务，用户痛恨"半夜自动升级后早上发现 watchdogy 没起来"（[#60432](https://github.com/NousResearch/hermes-agent/issues/60432) [closed]）
- **😠 抱怨 - Desktop UI 回归**：v0.18 系列中多个用户报告模型选择器异常，自定义 endpoint 用户尤其踩坑（#20582、#58393、#60722 三个 issue 互相印证）
- **😐 不便 - 多模态缺位**：Telegram 用户希望语音像 WhatsApp 一样无缝转写，跨平台一致性诉求明显（[#16185](https://github.com/NousResearch/hermes-agent/issues/16185)）
- **😟 不安 - 官方 API 中断**：[#60715](https://github.com/NousResearch/hermes-agent/issues/60715) 报告显示 `inference-api.nousresearch.com` 全面超时，社区等待官方澄清是否官方侧故障
- **✅ 满意 - 维护响应速度**：3 条 P1 bug 从报告到修复合并均控制在 1 天内，社区对维护节奏整体认可

---

## 8. 待处理积压（维护者关注提醒）

按"开 Issue 时间晚近 + 仍 OPEN + 影响力高"重新排序，列示中长期未根治的重要问题：

| Issue | 创建日 | 至今 | 优先级 | 提醒 |
|---|---|---|---|---|
| [#16185](https://github.com/NousResearch/hermes-agent/issues/16185) Telegram 语音转写缺失 | 2026-04-26 | ~73 天 | P2 | 长挂未根治，可能与 TTS/STT 重构有关 |
| [#20582](https://github.com/NousResearch/hermes-agent/issues/20582) `/model` 自定义 provider 仅显示 1 个 | 2026-05-06 | ~63 天 | P2 | 已有 [#60503](https://github.com/NousResearch/hermes-agent/pull/60503) 待合并 |
| [#42042](https://github.com/NousResearch/hermes-agent/issues/42042) Desktop UI API key 字段 | 2026-06-08 | ~30 天 | P3 | 阻塞"完全 UI 配置化"承诺 |
| [#47464](https://github.com/NousResearch/hermes-agent/issues/47464) Memory-Compression 71.4% 错误率 | 2026-06-16 | ~22 天 | P2 SysOps | 影响生产环境，需定期跟进 |
| [#55386](https://github.com/NousResearch/hermes-agent/pull/55386) cron stale session startup cleanup | 2026-06-30 | OPEN PR | P2 | 与 [#32776](https://github.com/NousResearch/hermes-agent/pull/32776) 同主题，可一并审视 |
| [#55611](https://github.com/NousResearch/hermes-agent/pull/55611) tui 虚拟历史 MAX_MOUNTED 上调 | 2026-06-30 | OPEN PR | P2 | 长期 PR，UX 体验相关 |
| [#52538](https://github.com/NousResearch/hermes-agent/pull/52538) IPv4 fallback + billing + warning 三件套 |

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-07-08
**项目：** [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**报告人：** AI 开源项目分析师

---

## 1. 今日速览

PicoClaw 项目今日整体活跃度**中等偏低**，24 小时内无新版本发布，Issues 与 PRs 总量共 12 条。社区层面的核心动态为两条 PR 的关闭：一条 CHORE 改进 (#3234) 解决了 Anthropic Messages 视觉模型无法接收图片附件的隐性缺陷，另一条 (#3157) 的 Android ADB 远程操作工具提案则因长期未推进而被作为 stale 关闭。Issues 端新增一条关于"无 fallback 模型时速率限制失效"的实质性 Bug (#3232)，属于 v0.3.1 的回归性缺陷，建议维护者优先处理。整体来看，项目处于"日常维护 + 持续重构"阶段，无重大功能落地。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

最新版本仍为社区已提及的 v0.3.1（来自 Issue #3232 环境信息）。建议关注近期 PR #3222 (DeltaChat 重构 -320 行) 与 PR #3226 (write_file 防破坏性覆盖) 合并后是否触发补丁版本。

---

## 3. 项目进展

今日合并/关闭的 PR 共 2 条，进展方向偏向**提供商兼容性**与**长期未维护提案清理**：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#3234](https://github.com/sipeed/picoclaw/pull/3234) | CHORE (anthropic_messages): 嵌入图片媒体以便视觉模型识别 | CLOSED | ⭐ 实质改进：修复 buildRequestBody 忽略 msg.Media 的问题，使 load_image 加载的图片能正确传递至 Anthropic Claude 视觉模型，避免"看不见图"现象 |
| [#3157](https://github.com/sipeed/picoclaw/pull/3157) | feat: add Android ADB remote operations tool | CLOSED (stale) | 提案自 6 月 22 日开放后无实质推进，作为 stale 关闭。Android 远程控制能力暂未进入路线图 |

**评估：** 项目今日净推进约 +1 项有效改进（视觉模型支持），整体向前稳步迈进了**一小步**。DeltaChat 通道重构（PR #3222）一旦合并将进一步缩减约 320 行遗留代码。

---

## 4. 社区热点

按评论数与互动量排序，今日最具讨论价值的 Issue：

1. **[#3093 Feature: SimpleX/Tox 网关请求](https://github.com/sipeed/picoclaw/issues/3093)** — 5 条评论，1 👍
   - 用户 Damian-o2 提出增加 SimpleX/Wire/Tox 作为消息通道的需求，反映出 PicoClaw 用户群体中**隐私优先通信**场景的存在。
   - 该 Issue 已被关闭（状态为 [stale]），暗示短期内不会被纳入主线。

2. **[#3153 BUG: 火山引擎豆包 Seed 模型工具调用泄漏](https://github.com/sipeed/picoclaw/issues/3153)** — 3 条评论
   - v0.2.8 + doubao-seed-2.0-pro 组合下，工具调用被以原始 `<seed:tool_call>` 文本输出而非执行。
   - 反映了**国产模型适配层仍存在解析缺陷**，是潜在的企业级客户痛点。

3. **[#3195 BUG: OpenAI GPT 在 NanoKVM 上不可用](https://github.com/sipeed/sipeed/picoclaw/issues/3195)** — 2 条评论
   - NanoKVM 2.4.0 新集成的 PicoClaw 按官方文档配置 gpt-5.4 失败，涉及边缘设备 + 云端模型的部署验证。

---

## 5. Bug 与稳定性

按严重程度排列今日活跃/新增 Bug：

| 严重度 | Issue | 描述 | 是否已有 fix PR | 链接 |
|---|---|---|---|---|
| 🔴 高 | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | **v0.3.1 回归**：当未配置 fallback 模型时，`agents.defaults.model_name` 的 rpm 速率限制完全失效 | ❌ 无 | [→](https://github.com/sipeed/picoclaw/issues/3232) |
| 🟠 中 | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 豆包 Seed 模型工具调用解析失败，泄漏为 `<seed:tool_call>` 文本 | ❌ 无 | [→](https://github.com/sipeed/picoclaw/issues/3153) |
| 🟠 中 | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | NanoKVM 默认配置下 OpenAI GPT 无法响应 | ❌ 无 | [→](https://github.com/sipeed/picoclaw/issues/3195) |
| 🟡 中 | [#3196](https://github.com/sipeed/picoclaw/issues/3196) | v0.2.9 下 Codex / Antigravity OAuth 登录失效 | ❌ 无 | [→](https://github.com/sipeed/picoclaw/issues/3196) |
| 🟡 中 | [#3197](https://github.com/sipeed/picoclaw/issues/3197) | 与 #3196 高度相似：Codex / Antigravity OAuth 登录问题 | ❌ 无 | [→](https://github.com/sipeed/picoclaw/issues/3197) |

**稳定性观察：** 5 条开放 Bug 中**无一条已关联修复 PR**。Issue #3196 与 #3197 几乎为重复报告（同一用户、相同症状），建议维护者合并处理以减少噪音。

---

## 6. 功能请求与路线图信号

- **[#3093 SimpleX/Wire/Tox 网关](https://github.com/sipeed/picoclaw/issues/3093)** — 已 closed/stale，明确**短期内不会纳入**主线。
- **[PR #3222 DeltaChat 通道重构](https://github.com/sipeed/picoclaw/pull/3222)** — 该 PR 已开放 5 天，作者 trufae 已完成 320 行代码精简、移除密码邮箱配置、引入 `show_invite_link` 等新 API，**有望在下个版本合并**，是当前最具落地信号的功能演进。
- **[PR #3226 write_file 防破坏性覆盖](https://github.com/sipeed/picoclaw/pull/3226)** — 修复 #3150，阻止模型通过"设 overwrite=true"绕过 memory 文件保护，**强烈建议合并以提升 Agent 安全语义**。

---

## 7. 用户反馈摘要

提炼今日活跃 Issue 评论区的真实用户痛点：

- 🔥 **多模型适配层不稳定**：用户在 v0.2.8/v0.2.9 上同时遭遇豆包 Seed、OpenAI GPT、Codex/Antigravity OAuth 多种兼容性问题，反映出 **PicoClaw 在多提供商切换时缺乏统一的端到端验证流程**。
- 😟 **任务重复执行**（[#3159](https://github.com/sipeed/picoclaw/issues/3159)）：用户报告在 Web UI 中连续追问不同主题时，前序任务会被重做，提示**会话状态或上下文隔离存在缺陷**。
- 😐 **速率限制可观测性不足**（[#3232](https://github.com/sipeed/picoclaw/issues/3232)）：用户在 Docker 中配置 gpt-5.5 但 rpm 静默失效，**未收到任何错误反馈**，直到触发限流才意识到配置不生效。
- 👍 **视觉模型体验改善**（[PR #3234](https://github.com/sipeed/picoclaw/pull/3234)）：作者明确指出"Anthropic Claude 视觉模型之前回复'看不见图'"，此次修复属于用户可感知的体验提升。

---

## 8. 待处理积压提醒

以下 Issue/PR 已标注 `[stale]` 或长期缺乏维护者响应，建议优先 review：

| 类型 | 编号 | 主题 | 风险 |
|---|---|---|---|
| Stale Issue | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | 豆包 Seed 工具调用泄漏 | 影响国内 B 端用户 |
| Stale Issue | [#3195](https://github.com/sipeed/picoclaw/issues/3195) | NanoKVM + GPT 不可用 | 硬件预装场景受阻 |
| Stale Issue | [#3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197) | Codex/Antigravity OAuth | OAuth 流程疑似回归 |
| 待合并 PR | [#3226](https://github.com/sipeed/picoclaw/pull/3226) | write_file 防破坏性覆盖 | 安全相关，Agent 内存安全 |
| 待合并 PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 重构 -320 行 | 通道质量 |
| 待合并 PR | [#3233](https://github.com/sipeed/picoclaw/pull/3233) | 修复 PR #3222 向后兼容 | 阻塞 #3222 合并 |

**维护者建议：** 关注 stale Bot 触发频率，连续多日有 stale 标记的 Issue 说明维护团队响应容量可能不足，建议在下次社区会议或更新公告中明确"哪些被有意放弃、哪些仍在 backlog"。

---

### 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐☆☆ | 5 条 PR/日，无 Release |
| Bug 响应速度 | ⭐⭐☆☆☆ | 5 个开放 Bug 全部无关联 fix |
| 社区互动 | ⭐⭐⭐☆☆ | 多数 Issue 评论 < 5，深度讨论不足 |
| 路线图清晰度 | ⭐⭐⭐☆☆ | 已有重构 PR 在途，但官方路线图未公开 |
| 整体趋势 | ➡️ 平稳 | 日常维护期，无显著危机或跃进 |

---

*报告基于 2026-07-07 至 2026-07-08 期间 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-07-08
**数据周期**：过去 24 小时
**项目**：NanoClaw — github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 过去 24 小时处于**高度活跃**状态，PR 流量达到 22 条（其中 8 条已关闭、14 条仍开放），同时新开一个**安全公告级 Issue**。今日的最大特征是 `glifocat` 主导的**文档翻新批量合并**（4 个 PR 同时关闭），以及围绕 agent-runner、approval、supply-chain 的多线程安全/正确性修复推进。无新版本发布。

---

## 2. 版本发布

无新版本发布。本期没有 release/tag 活动。

---

## 3. 项目进展

### 已合并/关闭 PR（8 条）

**📚 文档体系集中翻新（glifocat，4 PR 一并关闭）**
这是今日最显著的一批推进，针对长期积累的文档漂移进行系统性修正：

- [#2961](https://github.com/qwibitai/nanoclaw/pull/2961) — 修复 README / CONTRIBUTING / CLAUDE.md / operational docs 中的过时陈述（如 `/add-signal`、`/add-matrix` 等已停止征集的 skill）
- [#2962](https://github.com/qwibitai/nanoclaw/pull/2962) — DB schema 与 entity 文档同步到 migrations 010–018
- [#2963](https://github.com/qwibitai/nanoclaw/pull/2963) — 重写 `architecture.md` 与 `agent-runner-details.md` 中已严重落后的章节
- [#2964](https://github.com/qwibitai/nanoclaw/pull/2964) — `SDK_DEEP_DIVE.md` 从 SDK 0.2.x 更新到 0.3.197（对 6700 行 `sdk.d.ts` 重新验证）

**🔧 运行时修复**
- [#2965](https://github.com/qwibitai/nanoclaw/pull/2965) — `fix(agent-runner)`：将 `rate_limit_event` 识别为顶层 SDK 消息类型（适配 `@anthropic-ai/claude-agent-sdk` 0.3.x 的行为变更）
- [#2922](https://github.com/qwibitai/nanoclaw/pull/2922) — `fix(discord)`：解包转发消息快照，使 agent 可见转发内容
- [#2804](https://github.com/qwibitai/nanoclaw/pull/2804) — `fix(cli)`：修复 `ncl messaging-groups create` 因 `instance NOT NULL` 约束导致完全不可用的 CLI 死路径

**🧪 流程测试**
- [#2919](https://github.com/qwibitai/nanoclaw/pull/2919) — `PR-Test2-LargePRTest` 测试 PR 已关闭（流程验证用）

> **整体评估**：今日的合并显著推进了项目的**文档可信度**与**运行正确性**两条线；agent-runner 与 SDK 升级带来的隐式契约变化已被显式修复，文档与代码第一次在 v2.1.38 之后回到一致基线。

---

## 4. 社区热点

> 注：本期数据中所有 PR/Issue 的 `评论数`与 `👍` 均为 0，难以用"评论最多"做社区热度排序。热度按"安全相关 + 跨人协作 + 代码侵入面"综合判定。

| 主题 | 链接 | 为什么重要 |
|---|---|---|
| 🔴 **安全公告：未鉴权 loopback webhook 可伪造本地 action** | [Issue #2970](https://github.com/qwibitai/nanoclaw/issues/2970) | 由 YLChen-007 报告，针对 NanoClaw 仅绑定 localhost 的网关转发 webhook 缺少发送方鉴权，威胁模型清晰且影响面广 |
| 🔐 **安全加固三件套** | [PR #2800](https://github.com/qwibitai/nanoclaw/pull/2800)（CWE-22 + image pinning）/ [PR #2973](https://github.com/qwibitai/nanoclaw/pull/2973)（supply chain: minimumReleaseAge）/ [PR #2974](https://github.com/qwibitai/nanoclaw/pull/2974)（approvals 原子 claim） | 全部由 `sturdy4days` 提交，集中修补目录穿越、镜像钉版、依赖新鲜度与并发审批竞争四个高危面 |
| 🤖 **agent-runner 正确性讨论** | [PR #2966](https://github.com/qwibitai/nanoclaw/pull/2966) | Draft 状态，公开征求"provider error 应被记录为 failed"的语义方案，是少有的开放性设计讨论 |

**社区诉求分析**：今日的"热点"实质是**安全债集中暴露**——一个新公告 Issue + 三个交叉领域安全 PR 同时出现，说明项目在快速扩展 skill/CLI 面的同时，鉴权与边界校验补齐出现窗口期。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | 编号 | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 **高危（安全）** | [#2970](https://github.com/qwibitai/nanoclaw/issues/2970) | Local action forgery：未鉴权 forwarded gateway loopback webhook 允许本地伪造 action | ❌ 暂无 |
| 🟠 **中危（安全/数据）** | [#2800](https://github.com/qwibitai/nanoclaw/pull/2800) | `ncl groups create --folder ../../etc` 绕过 `assertValidGroupFolder` 校验（CWE-22） | ✅ PR 已开，未合并 |
| 🟠 **中危（供应链）** | [#2973](https://github.com/qwibitai/nanoclaw/pull/2973) | `minimumReleaseAge: 4320` 被错误放在 `pnpm-workspace.yaml` 的 `pnpm:` 块下，pnpm 仅在 `package.json` 读该键，导致 72h 延迟门控实际未生效 | ✅ PR 已开，未合并 |
| 🟡 **中（并发/正确性）** | [#2974](https://github.com/qwibitai/nanoclaw/pull/2974) | Approval 在执行 handler 前未先原子 claim 行，并发审批存在双重执行风险 | ✅ PR 已开，未合并 |
| 🟡 **中（正确性）** | [#2966](https://github.com/qwibitai/nanoclaw/pull/2966) | Provider error 被记为 `completed`，且失败 ack 未镜像回容器 | ✅ Draft PR |
| 🟢 **已修复（CLI）** | [#2804](https://github.com/qwibitai/nanoclaw/pull/2804) | `ncl messaging-groups create` 100% 抛 `NOT NULL constraint failed: messaging_groups.instance` | ✅ 已关闭 |
| 🟢 **已修复（运行时）** | [#2965](https://github.com/qwibitai/nanoclaw/pull/2965) | SDK 0.3.x 的 rate_limit 事件未匹配（被错误归为 system） | ✅ 已关闭 |
| 🟢 **已修复（功能）** | [#2922](https://github.com/qwibitai/nanoclaw/pull/2922) | Discord 转发消息内容对 agent 不可见 | ✅ 已关闭 |

---

## 6. 功能请求与路线图信号

| 主题 | 来源 | 进入下一版本的可能性 |
|---|---|---|
| **Agent 模板化 setup 流**（首次创建 agent 时选择 Fresh / Template / Existing） | [PR #2909](https://github.com/qwibitai/nanoclaw/pull/2909)（`amit-shafnir`） | 🟢 **高** — 是 #2890 的"part 2 of 2"，项目已明确规划为两阶段落地 |
| **add-teams 改用 Teams CLI 一步登录 + app create**（删除 7 步 Azure portal 流程） | [PR #2958](https://github.com/qwibitai/nanoclaw/pull/2958)（`Koshkoshinsk`） | 🟢 **高** — 与同期 #2972 的 Wizard UX 改动同源，正在系统性迁移到 SSF directive |
| **ncc utility skill：host 运维与健康检查 CLI** | [PR #2971](https://github.com/qwibitai/nanoclaw/pull/2971)（`zivisaiah`） | 🟡 **中** — 通过 `follows-guidelines` 模板提交，符合现有 skill 接纳流程 |
| **add-remote-storage skill（WebDAV / S3 via rclone + systemd）+ `ncl groups config add-mount/remove-mount`** | [PR #1598](https://github.com/qwibitai/nanoclaw/pull/1598)（`glifocat`） | 🟡 **中** — 自 2026-04-02 开放至今约 3 个月仍 OPEN，是当前最老的活跃 PR，需维护者优先级确认 |
| **add-rtk v2 兼容修复**（containerPath 相对路径 + PATH） | [PR #2969](https://github.com/qwibitai/nanoclaw/pull/2969) | 🟢 **高** — 是已有 operational skill 的修复，阻力小 |

---

## 7. 用户反馈摘要

> 本期 Issues 暂无评论（`#2970` 评论数 0），PRs 同样无评论记录。以下反馈是基于 PR 描述与 Issue 摘要的**间接信号**：

- **🔴 安全可见性需求**：用户 `YLChen-007` 主动提交**带完整 Advisory 模板**（Title / Description / Summary / Impact）的安全报告，暗示社区对项目安全披露流程的接受度高且期待项目提供规范响应。
- **🟡 CLI 死路径长期未被发现**：[#2804](https://github.com/qwibitai/nanoclaw/pull/2804) 描述 `messaging-groups create` "完全不可用（completely dead）"，说明该命令可能长期无人使用——用户使用率反馈信号弱。
- **🟡 文档与代码漂移被外部用户感知**：[#2961](https://github.com/qwibitai/nanoclaw/pull/2961) 列出了 `/add-signal`、`/add-matrix` 等"shipped skills no longer solicited"，意味着贡献者曾按文档尝试提交而被拒——这是文档失真的真实代价。
- **🟢 多贡献者分工清晰**：`glifocat`（docs/agent-runner）、`sturdy4days`（security/CLI）、`Koshkoshinsk`（Wizard/Teams）、`amit-shafnir`（setup）、`OowhitecatoO`（Discord/operational skills）—— 表明项目已形成多个稳定的贡献者小团队。

---

## 8. 待处理积压

维护者建议关注以下长期未响应项：

| 编号 | 标题 | 开放天数（截至 2026-07-08） | 风险点 |
|---|---|---|---|
| **[#1598](https://github.com/qwibitai/nanoclaw/pull/1598)** | feat: add-remote-storage skill (WebDAV/S3 via rclone + systemd) | **≈ 97 天** | 最老活跃 PR，作者通过 `/contribute` 提交并标记"priority review requested per contributor guidelines"——**明显违反承诺的审查 SLA**，建议维护者明确反馈 |
| **[#2729](https://github.com/qwibitai/nanoclaw/pull/2729)** | docs(add-telegram): match pairing status-block names to the setup step | **≈ 27 天** | 文档与行为不一致，影响新用户首次配对体验 |
| **[#2800](https://github.com/qwibitai/nanoclaw/pull/2800)** | fix(security): validate folder + restrict --image-tag（CWE-22） | **≈ 21 天** | 安全类 PR 长期未审，建议加速 |
| **[#2873](https://github.com/qwibitai/nanoclaw/pull/2873)** | fix(skills): split pre-flight from credentials so /update-skills can refresh code（追踪 #2868） | **≈ 11 天** | 阻塞 `/update-skills` 的关键修复 |
| **[#2909](https://github.com/qwibitai/nanoclaw/pull/2909)** | feat(setup): template setup flow in the wizard and first-agent stamping | **≈ 6 天** | 计划性工作（#2890 的 part 2），需维护者确认是否同期合入 |
| **🔴 [#2970](https://github.com/qwibitai/nanoclaw/issues/2970)** | Local action forgery via unauthenticated forwarded gateway loopback webhook | **1 天** | **最高优先级**——安全公告且暂无 fix PR，建议 24h 内响应并发布 CVE / GHSA 编号 |

---

### 报告小结

NanoClaw 今日呈现**"安全债集中清算 + 文档基线回归"**的双重推进：用户侧提交的高质量安全 Advisory 倒逼项目审视鉴权边界，长期欠账的文档/CLI 死路径在多位贡献者协作下被一次性翻新。建议维护者将 [#2970](https://github.com/qwibitai/nanoclaw/issues/2970) 与积压最久的 [#1598](https://github.com/qwibitai/nanoclaw/pull/1598) 作为本周最高优先级处理项。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**日期：2026-07-08｜数据来源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 在过去 24 小时呈现出**高强度迭代 + 持续技术债清理**的双轨节奏：Issues 侧活跃度温和（6 条更新，其中 1 条关闭），但 PR 侧非常密集（50 条，其中 12 条已合并/关闭，38 条待合并）。议题集中在三类工作——**Slack OAuth/WebUI v2 主线功能 (#5643)、WASM 工具安装/私有化 (#5499, #5525)、以及 ilblackdragon 主导的 "default setters" 大规模 fixture 重构系列**（#5807–#5815）。此外，依赖机器人又一次推送了 16 项升级（#5816），而 7 月初的 release PR #5598（`ironclaw` 0.24.0 → 0.29.1，含 API 破坏性变更）仍处于待合并状态，反映出"主干推进 vs. 版本发布"的轻微瓶颈。整体健康度评估：**活跃且方向清晰，但 PR 流水线积压明显，需要维护者介入做合并节奏控制**。

---

## 2. 版本发布

⚠ **无新版本发布**。但需要关注一项**悬而未决的关键版本 PR**：

- **PR [#5598](https://github.com/nearai/ironclaw/pull/5598)** — `chore: release`（OPEN，待合并，规模 M，风险 medium）
  - 计划更新：
    | 包 | 从 | 到 | 兼容性 |
    |---|---|---|---|
    | `ironclaw` | 0.24.0 | **0.29.1** | 跨多个次版本 |
    | `ironclaw_common` | 0.4.2 | **0.5.0** | ⚠ **API 破坏性变更** |
    | `ironclaw_skills` | 0.3.0 | **0.4.0** | ⚠ **API 破坏性变更** |
    | `ironclaw_safety` | 0.2.2 | 0.2.3 | ✓ 兼容 |
    | `ironclaw_skill_learning` | 0.1.0 | 0.1.1 | ✓ 兼容 |
  - **迁移提示**：下游依赖 `ironclaw_common` 和 `ironclaw_skills` 的项目需查阅对应 CHANGELOG，注意类型/签名调整。

---

## 3. 项目进展

今日有 **12 个 PR 关闭/合并**，推进的核心工作如下：

| PR | 标题 | 规模 | 影响 |
|---|---|---|---|
| [#5749](https://github.com/nearai/ironclaw/pull/5749) | `feat(filesystem): CAS-guarded delete_if_version on RootFilesystem` | XL | 为 subagent await-edge 交付层补齐 CAS-删除原语，关闭 P1.0b 子代理系统的关键缺口 |
| [#5748](https://github.com/nearai/ironclaw/pull/5748) | `docs(reborn): canonical subagent thread-harness design` | M | 确立子代理完成交付/持久化层的规范设计文档 |
| [#5789](https://github.com/nearai/ironclaw/pull/5789) | `fix(reborn): deterministic pairing-code TTL clock — kill slack_pairing_redeem expired-code flake` | M | 修复 Slack 配对码过期 flake 测试（与 #5787 闭环） |
| [#5550](https://github.com/nearai/ironclaw/pull/5550) | `chore(deps): bump the everything-else group (13 updates)` | XL | dependabot 一次性合入 13 项依赖升级 |

**进展评估**：本日重点是**subagent 持久化层基础**（CAS-delete + 设计文档）+ **Slack 集成稳定性**（flake 修复）。这两块都是 Reborn 架构中的"地基级"工作，使主干向"可生产"又迈出一步。同时 `#5550` 的依赖清理为后续 `agent-client-protocol 1.2.0` 等升级铺路。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 议题 | 类型 | 评论 | 👍 | 关键诉求 |
|---|---|---|---|---|---|
| 1 | [#5702](https://github.com/nearai/ironclaw/issues/5702) | Bug (P2) | 4 | 0 | GitHub 集成无法搜索/创建 Issue（HTTP 403），直接影响 bug bash 流程自身 |
| 2 | [#5557](https://github.com/nearai/ironclaw/issues/5557) | Bug (P3) | 2 | 0 | Logs 深链需要点击两次才能加载目标会话 |
| 3 | [#5705](https://github.com/nearai/ironclaw/issues/5705) | Bug (P3) | 2 | 0 | 聊天 UI 的终端图标没有"禁用"开关 |

**讨论焦点分析**：
- 这 3 条均为 `bug_bash` 标签下的 UX/集成缺陷——社区正在做"地毯式 bug 巡查"。**讽刺性发现**：bug bash 报告 GitHub 集成失效 (#5702)，可能影响 issue 提交链路本身。
- 互动量普遍偏低（👍 均为 0），说明这些更多是**维护者主动发起的 QA 发现**，而非外部用户报告。
- #5557 与 #5705 都属于"小但碍眼"的 UI 缺陷，**累计反映出 chat UI 的可定制性不足**——终端/Logs 等开发者功能对非开发者用户产生了视觉噪音。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0/P1 — CI 稳定性
- **[#4108](https://github.com/nearai/ironclaw/issues/4108)** — Nightly E2E 失败（创建于 2026-05-27，**已积压 42 天**）
  - 失败链路：`Full E2E / E2E (web-regressions)`，commit `fab83e9f`
  - **风险**：长期未修复的 CI 红，掩盖新的回归问题
  - **修复 PR**：暂无明确对接 PR

### 🟡 P2 — 功能阻塞
- **[#5702](https://github.com/nearai/ironclaw/issues/5702)** — GitHub Issue 集成返回 HTTP 403
  - 影响：agent 无法与 GitHub Issues 交互
  - **修复 PR**：暂无

### 🟢 P3 — UX 缺陷
- **[#5705](https://github.com/nearai/ironclaw/issues/5705)** — 终端图标无法禁用
- **[#5557](https://github.com/nearai/ironclaw/issues/5557)** — Logs 深链需点击两次

### ✅ 已闭环的稳定性问题
- **[#5787](https://github.com/nearai/ironclaw/issues/5787)** — `slack_pairing_redeem_rejects_expired_code` flake（tokio 暂停时钟 vs chrono 墙钟 TTL 竞态）
  - **已通过 [#5789](https://github.com/nearai/ironclaw/pull/5789) 闭环**：引入确定性 TTL 时钟，根因消除

---

## 6. 功能请求与路线图信号

虽然今日未出现显式的 "feature request" 标签 Issue，但从已开 PR 可以解码出明确的**路线图走向**：

| 信号 | 对应 PR | 路线图含义 |
|---|---|---|
| Slack personal OAuth | [#5643](https://github.com/nearai/ironclaw/pull/5643) | **核心集成范式迁移**：从 pairing-code 转向 OAuth，影响 Slack/未来的所有 channel |
| WASM 工具 zip 安装 | [#5499](https://github.com/nearai/ironclaw/pull/5499) | **扩展生态开放**：admin 可导入第三方 WASM 工具 |
| 私有化工具安装 | [#5525](https://github.com/nearai/ironclaw/pull/5525) | **多租户隔离**：SSO 用户可自装工具，互不干扰 |
| Subagent thread-harness | [#5748](https://github.com/nearai/ironclaw/pull/5748) + [#5749](https://github.com/nearai/ironclaw/pull/5749) | **子代理系统落地**：完成交付/持久化/CAS-删除三大件 |
| Default setters 重构系列 | [#5807](https://github.com/nearai/ironclaw/pull/5807)–[#5815](https://github.com/nearai/ironclaw/pull/5815) | **测试基础设施现代化**：消除 fixture 中散落的 default-tail 字面量（ilblackdragon 系统性工作） |

**预测进入下一版本**：考虑到 #5598 release PR 的目标版本号（0.24.0→0.29.1 跨 5 个次版本），Slack OAuth (#5643) 与 WASM 安装 (#5499) 很可能被折叠进 0.29.x 系列；其余仍在 review 阶段。

---

## 7. 用户反馈摘要

由于今日 3 条活跃 Issue 均为维护者 joe-rlo 主导的 `bug_bash` QA，**纯外部用户反馈较少**。可提炼的痛点信号：

- **🔧 GitHub 集成信任度受损**（#5702）：agent 配置好 GitHub 集成后却无法完成最基础的 Issue 操作，对"AI 智能体管理 GitHub 工作流"这个核心卖点构成挑战。
- **🎨 UI 噪音**（#5705）：面向非开发者的用户被暴露了终端图标等"开发者专属"元素，**暗示产品定位在"开发者工具"vs"通用 AI 助手"之间尚未完全收敛**。
- **🔗 深链可靠性**（#5557）：Logs 深链首击不生效，违反"链接即承诺"的基本 web 契约，影响例行 run 的可观测性体验。

**满意度信号**：无明确负面爆发，但每日失败分类 Issue [#5788](https://github.com/nearai/ironclaw/issues/5788)（pranavraja99 维护）显示 pinchbench 等基准仍存在非通过用例，**产品质量距离稳定基准尚有差距**。

---

## 8. 待处理积压

需要维护者重点关注：

| 类别 | 条目 | 积压时长 | 风险 |
|---|---|---|---|
| 🔴 **长期失败 CI** | [#4108](https://github.com/nearai/ironclaw/issues/4108) Nightly E2E 失败 | **42 天** | 沉默失败，掩盖回归 |
| 🟡 **版本发布卡点** | [#5598](https://github.com/nearai/ironclaw/pull/5598) `chore: release` 含破坏性变更 | 5 天 | 阻碍下游升级节奏 |
| 🟡 **巨型功能 PR** | [#5643](https://github.com/nearai/ironclaw/pull/5643) Slack OAuth + WebUI v2 合并栈 | 4 天 | scope 巨大（9 个 scope tag），review 负担重 |
| 🟡 **巨型功能 PR** | [#5499](https://github.com/nearai/ironclaw/pull/5499) WASM zip 安装 | 7 天 | 配套 issue #5459 的 part 1 |
| 🟡 **巨型功能 PR** | [#5525](https://github.com/nearai/ironclaw/pull/5525) 私有化工具安装 | 6 天 | #5459 的 part 2 |
| 🟢 **Bug 未修复** | [#5702](https://github.com/nearai/ironclaw/issues/5702) GitHub 集成 403 | 2 天 | 影响 bug bash 自身流程 |
| 🟢 **Bug 未修复** | [#5557](https://github.com/nearai/ironclaw/issues/5557) Logs 深链 | **6 天** | 拖延会损害例行 run 的可观测性 |
| 🟢 **Bug 未修复** | [#5705](https://github.com/nearai/ironclaw/issues/5705) 终端图标无禁用 | 2 天 | UX 噪音 |

**建议**：维护者本周内优先处理 (1) #4108 的 CI 红（哪怕只是失败原因归档）、(2) #5598 release PR 的合并评审（决定是否阻塞后续依赖）、(3) #5643 的拆分/合并决策。

---

> 📊 **今日数据快照**：Issues 6 条（5 OPEN / 1 CLOSED）｜PRs 50 条（38 待合并 / 12 已闭环）｜新发布 0
> 
> 🔗 项目主页：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-07-08

> 数据范围：GitHub 仓库 [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) 过去 24 小时动态

---

## 一、今日速览

LobsterAI 今天完成了一次正式版本发布（**2026.7.7**）并同步将 `release/2026.7.6` 合入 `main` 主线，过去 24 小时共有 **13 个 PR 完成合并/关闭**，整体迭代节奏较高。**安全方面**值得高度关注：同一位外部研究员 YLChen-007 在昨日集中提交了 **3 个高危 Security Advisory**（HTML 预览本地文件泄露、NIM 媒体外发泄露、本地 Token 代理未授权访问），目前均处于 OPEN 状态、无修复 PR，社区维护者需紧急响应。普通 Issue 端**讨论热度回落**（除一条历史 stale Issue 被关闭外），整体项目处于「密集收尾 + 风险暴露」并行的状态。

---

## 二、版本发布

### 🦞 LobsterAI 2026.7.7

本次发布整合了大量定时任务、Provider 接入和 Cowork 体验相关的改进。值得关注的变更：

| 类别 | 内容 | PR 链接 |
|------|------|---------|
| 定时任务 UI | 任务列表卡片重设计，新增状态徽章、切换、搜索、乐观 UI | [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) |
| Provider 登录 | 新增 **xAI（Grok）OAuth 登录**支持 | （发布说明中提到） |
| 多账号 Email | 内置 `imap-smtp-email` 技能支持多账号、连通性测试、默认账号 | [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) |
| 子 Agent 协作 | 支持配置可委托子 Agent，自动生成子 agent 白名单 | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) |
| Cowork 稳定性 | Steer follow-up 队列路由稳定化、流状态隔离 | [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) |
| 通知目标 | 定时任务通知目标支持用户级可选 | [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) |
| 自动压缩 | 修复停滞压缩重试的清理逻辑 | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) |
| 分析埋点 | 修正多类埋点边界场景（技能、IM、侧边栏、自定义模型等） | [#2245](https://github.com/netease-youdao/LobsterAI/pull/2245) |
| 旧 release 合入 | `release/2026.7.6` 合回 main | [#2291](https://github.com/netease-youdao/LobsterAI/pull/2291) |

**破坏性变更**：未在发布说明中显著标注，但 PR #2275 提到「保留旧版单账号 `.env` 兼容路径」可作为参考。
**迁移注意**：升级到 4.x 系列部分用户曾出现「网关反复启动失败」的严重问题（见 [Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)），建议社区用户在升级前备份配置并关注官方发布说明。

---

## 三、项目进展

今日合入的重要 PR 体现了「**Cowork / 定时任务 / 多 Agent / Email**」四大主线推进：

**🤖 Agent 与 Cowork 体系扩展**
- [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) **feat(agents): 支持委托式子 Agent 协作** — 推进多 Agent 协作模型，被委托的子 Agent 运行会以 Cowork 子 session 形式落地，可在同会话内继续交互。
- [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) **fix(cowork): 稳定化 steer follow-up 路由** — 引入类似 Codex 的排队型 follow-up，修复临时新会话被替换为真实会话的边界问题，并隔离流状态更新避免 stale input。
- [#2268](https://github.com/netease-youdao/LobsterAI/pull/2268) **fix(cowork): 恢复简洁的「添加菜单」宽度** — 移除目标说明文案后的 UI 还原。

**⏰ 定时任务体系完善**
- [#2273](https://github.com/netease-youdao/LobsterAI/pull/2273) 列表卡片重设计
- [#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) 通知目标用户可选
- [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) 修复停滞压缩重试
- 加上历史合入的 [#1404](https://github.com/netease-youdao/LobsterAI/pull/1404)、[#1406](https://github.com/netease-youdao/LobsterAI/pull/1406) 等，定时任务模块的整体可用性显著抬升。

**📧 Email 与 Provider 拓展**
- [#2275](https://github.com/netease-youdao/LobsterAI/pull/2275) **Email 多账号 + 预设 + 连通性测试**，向后兼容旧 `.env`。
- 2026.7.7 引入 **xAI Grok OAuth**，扩展 provider 选择面。

**🔧 稳定性与埋点**
- [#2245](https://github.com/netease-youdao/LobsterAI/pull/2245) 修正若干埋点边界，覆盖技能/IM/侧边栏/自定义模型/数据恢复/定时任务 Cron 周几解析。
- 多个 i18n、附件多选、请求 ID 加密化的安全性补丁合入： [#1401](https://github.com/netease-youdao/LobsterAI/pull/1401)、[#1402](https://github.com/netease-youdao/LobsterAI/pull/1402)、[#1403](https://github.com/netease-youdao/LobsterAI/pull/1403)。

整体来看，**项目主线（多 Agent/Cowork/定时任务/Provider/Email）向前推进了一大步**，但「外部暴露面」相关的安全债仍在累积，需要在下一个发布窗口优先处理。

---

## 四、社区热点

**讨论热度 Top**

1. **[Issue #1400](https://github.com/netease-youdao/LobsterAI/issues/1400)** — 「4.1 版本严重 Bug，网关反复启动失败」7 条评论 👍0，今日被关闭。
   - 痛点：用户从 3.30 升级到 4.1 后陷入无限重启循环，且自定义 LLM（qwen3.5-plus）因 `web-extractor` 未启用 `web-search` 而无法调用。Issue 详情中留下了邮箱/微信联系方式，体现用户对官方响应的被动等待。
   - 状态：今日标记 CLOSED，但无明确说明是修复关闭还是 stale 关闭，**是否已彻底解决存疑**。

2. **[Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293)** — 「多个 Agent 的『关于你』/USER.md 内容联动？」（1 条评论）
   - 痛点：用户修改某一 Agent 的 USER.md 后，其他 Agent 也会同步修改，导致无法为不同 Agent 配置不同偏好。这是与 [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 子 Agent 协作特性**直接相关**的实现问题。

**沉默但值得关注的舆情**
- 同一研究员（YLChen-007）一天内连发 [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)、[#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)、[#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) 三条 Security Advisory，**反应量虽为 0，但话题敏感度极高**（涉及任意本地文件读取、未授权 Token 重放）。

---

## 五、Bug 与稳定性

按严重程度排序：

| 等级 | 描述 | Issue / 状态 |
|------|------|----|
| 🔴 **高（安全）** | **HTML 预览服务器跟随根目录符号链接，泄露任意本地文件** | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) — OPEN，**无 fix PR** |
| 🔴 **高（安全）** | **NIM 出站媒体流允许助手生成的绝对路径外发本地文件** | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) — OPEN，**无 fix PR** |
| 🔴 **高（安全）** | **未认证的本地 Token 代理可被任意本地进程重放服务模型 API 凭据** | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) — OPEN，**无 fix PR** |
| 🟠 **中** | **多 Agent USER.md 内容联动，无法隔离人设** | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) — OPEN，**无 fix PR**，与 #2285 子 Agent 协作特性疑似相关 |
| 🟡 **中（历史已标 stale）** | **4.1 升级后网关无法启动，自定义 LLM 调用失败** | [#1400](https://github.com/netease-youdao/LobsterAI/issues/1400) — 今日 CLOSED，**是否彻底修复待确认** |
| 🟡 **低** | **定时任务名称重复未做校验** | [#1348](https://github.com/netease-youdao/LobsterAI/issues/1348) — OPEN/stale，无 fix PR |

> 维护者建议：3 条 Security Advisory 同源且均触及本地访问边界（loopback 代理、HTML 预览、NIM 媒体），建议评估是否集中修复并对外发布补丁版本。

---

## 六、功能请求与路线图信号

| 来源 | 需求描述 | 已有相关 PR？ | 进入下个版本的可能性 |
|------|---------|--------------|------------------|
| [Issue #2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多个 Agent 应能各自维护独立 USER.md /「关于你」内容 | [#2285](https://github.com/netease-youdao/LobsterAI/pull/2285) 已合入子 Agent 协作，方向一致但修复尚未跟进 | **较高**，属明确 Bug，需回归修复 |
| [Issue #1348](https://github.com/netease-youdao/LobsterAI/issues/1348) | 定时任务名重名校验 | 历史多次 PR（[#1404](https://github.com/netease-youdao/LobsterAI/pull/1404)、[#2290](https://github.com/netease-youdao/LobsterAI/pull/2290) 等）集中在体验层面，未覆盖名称去重 | 中等 |
| 历史 PR [#1347](https://github.com/netease-youdao/LobsterAI/pull/1347)（stale） | Cron 自定义调度 + Agent/Model 绑定 + 表单 UX 统一 | 已在 [2026.7.7](https://github.com/netease-youdao/LobsterAI/pull/2273) 中部分落地 | 已部分实现 |

---

## 七、用户反馈摘要

**🔴 严重负面**
- **用户 `danielmonlite`**（[#1400](https://github.com/netease-youdao/LobsterAI/issues/1400)）：从 3.30 升级到 4.1 后产品「彻底瘫痪」，且留下邮箱/微信等待官方直接对接，反映**普通工单渠道响应慢、用户被迫走私人渠道**的现状。该用户对「默认调用 LobsterAI 自动配置的 qwen3.5」与自定义 LLM 之间的隐式耦合感到困惑——**新用户的 Onboarding 体验是一个明显短板**。

**🟡 中性诉求**
- **用户 `yepcn`**（[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）：希望不同 Agent 配置不同「人设/上下文」，期望把它们当独立助手使用，**映射到「多租户式 Agent 人设」**这一典型场景，与多 Agent 协作功能 (#2285) 紧密相关。

**🟢 隐含正面信号**
- 2026.7.7 在 Email 多账号 ([#2275](https://github.com/netease-youdao/LobsterAI/pull/2275))、子 Agent 协作 ([#2285](https://github.com/netease-youdao/LobsterAI/pull/2285))、Provider 新增 ([xAI Grok OAuth]) 上的持续投入，反映维护团队对**企业/高级用户深度场景**的承接意愿较强。

---

## 八、待处理积压

> 维护者建议下一步关注清单

**🚨 紧急（今日新增）**
- [Issue #2286](https://github.com/netease-youdao/LobsterAI/issues/2286) — 未认证本地 Token 代理重放（**高危**）
- [Issue #2287](https://github.com/netease-youdao/LobsterAI/issues/2287) — NIM 媒体流外发泄露
- [Issue #2288](https://github.com/netease-youdao/LobsterAI/issues/2288) — HTML 预览跟随符号链接

**🟠 一般（Open）**
- [Issue #2293

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报

**日期：2026-07-08**
**数据来源：github.com/TinyAGI/tinyagi**

---

## 1. 今日速览

TinyClaw 今日出现重大安全披露事件，过去 24 小时内由同一安全研究员 `YLChen-007` 集中提交 **9 条全部标记为 [Security] 的严重漏洞报告**，均处于 OPEN 状态，尚未有响应或修复 PR。Issues 高度集中于"**未经认证的控制平面路由（unauthenticated control-plane routes）**"这一系统性缺陷，暴露 REST/SSE API、设置接口、Agent 提示词、文件访问、配对管理等多个高危攻击面。项目当日活跃度异常高（9 条新议题）但完全集中在安全应急维度，无功能 PR 提交、无新版本发布，处于**安全应急响应期**，项目健康度承压。

---

## 2. 版本发布

无新版本发布。当前最新版本未在此次数据快照中出现，需关注维护者是否会紧急发布补丁版本。

---

## 3. 项目进展

**今日合并/关闭的重要 PR：0 条**。

过去 24 小时内没有 PR 提交、合并或关闭记录。由于上述 9 条 Security Issues 均未被任何 PR 关联或关闭，**项目整体在功能层面处于停滞状态**，所有开发资源应优先转向安全修复。

---

## 4. 社区热点

| 排序 | Issue | 标题简述 | 链接 |
|---|---|---|---|
| 🔥 1 | #294 | 未认证控制平面允许系统提示词覆盖与守护进程重启 | [#294](https://github.com/TinyAGI/tinyagi/issues/294) |
| 🔥 2 | #293 | Agent ID 路径遍历逃逸工作区根目录 | [#293](https://github.com/TinyAGI/tinyagi/issues/293) |
| 🔥 3 | #292 | 未认证管理 API 允许持久化设置与 Agent 提示词修改 | [#292](https://github.com/TinyAGI/tinyagi/issues/292) |
| 🔥 4 | #289 | 通过出站附件任意本地文件外泄 | [#289](https://github.com/TinyAGI/tinyagi/issues/289) |
| 🔥 5 | #288 | 本地控制平面泄露实时事件并允许持久化设置修改 | [#288](https://github.com/TinyAGI/tinyagi/issues/288) |

**热点分析**：所有 9 条议题同为单一研究员 `YLChen-007` 在 2026-07-07 当日提交，且全部以 `[Security]` 前缀、[Advisory Details] 标准格式撰写，明显属于**协调披露（coordinated disclosure）** 性质。建议维护者迅速建立专项响应通道，统一处理这一系列相关问题，并考虑在 GitHub 发布 Security Advisory 以协调用户升级。

---

## 5. Bug 与稳定性

以下为今日报告的 9 条安全问题，按严重程度评估排序（基于攻击可达性 × 影响范围的"最低门槛"因素）：

| 严重级别 | Issue | 问题摘要 | 已有 Fix PR |
|---|---|---|---|
| 🔴 **严重** | [#291](https://github.com/TinyAGI/tinyagi/issues/291) | Anthropic Adapter 无条件使用 `--dangerously-skip-permissions` 启动 Claude CLI，远程未认证调用者即可触发任意工具调用 | ❌ |
| 🔴 **严重** | [#293](https://github.com/TinyAGI/tinyagi/issues/293) | 通过 `PUT /api/settings` 与 `POST /api/message` 注入 `..` 作为 agent id，可逃逸工作区根目录 | ❌ |
| 🔴 **严重** | [#294](https://github.com/TinyAGI/tinyagi/issues/294) | 可远程覆盖系统提示词并重启守护进程 | ❌ |
| 🔴 **严重** | [#292](https://github.com/TinyAGI/tinyagi/issues/292) | 状态变更接口无任何鉴权，可持久化修改设置与 Agent 提示词 | ❌ |
| 🟠 **高危** | [#289](https://github.com/TinyAGI/tinyagi/issues/289) | 通过主动响应 API 中的 `files[]` 字段外泄任意本地文件 | ❌ |
| 🟠 **高危** | [#287](https://github.com/TinyAGI/tinyagi/issues/287) | 配对管理 API 可读取并批准任意待处理发送者，无需认证 | ❌ |
| 🟠 **高危** | [#286](https://github.com/TinyAGI/tinyagi/issues/286) | 未认证控制平面 + SSE 事件流泄露 | ❌ |
| 🟠 **高危** | [#288](https://github.com/TinyAGI/tinyagi/issues/288) | localhost 控制平面无认证边界，同主机进程均可访问 | ❌ |
| 🟡 **中等** | [#290](https://github.com/TinyAGI/tinyagi/issues/290) | `POST /api/message` 中的攻击者可控内容可注入终端转义序列，伪造运维日志 | ❌ |

**结论**：9/9 安全问题**当前均无关联修复 PR**，建议立即着手统一实施"中间件鉴权 + 路径规范化 + 输入过滤"的系统性修复。

---

## 6. 功能请求与路线图信号

今日无功能请求类 Issue，所有提交均为安全漏洞报告。结合已暴露的安全设计缺陷，可以推断**下一版本（或补丁版本）的强制路线图**至少应包含：

1. **全局 API 鉴权层**：为所有 `/api/*` 路由引入 Bearer Token / mTLS / Cookie Session 等机制，并区分"本地控制平面"与"远程可达接口"。
2. **路径规范化与沙箱强化**：在 Agent ID 与所有文件操作入口增加 canonical path 校验，禁止 `..`、符号链接逃逸。
3. **Claude CLI 调用安全策略**：默认去除 `--dangerously-skip-permissions`，或至少在未认证上下文禁用。
4. **操作日志与终端输出净化**：对进入运维终端的内容进行 ANSI/控制字符过滤。
5. **附件外发白名单**：出站附件路径必须在配置根目录之内。

如能在下一版本中以 `Security Hardening Release` 形式集中修复，可视为短期最具价值的发布。

---

## 7. 用户反馈摘要

今日唯一活跃社区声音来自研究员 `YLChen-007`，尚未引入其他用户讨论。结合议题内容可提炼的核心痛点：

- **系统性信任假设错误**：项目将控制平面视作"本地可信"，但事实上面向网络可达或可被同主机进程触发，导致威胁模型完全失配。
- **Agent ID 字段缺乏校验**：典型路径遍历攻击面，影响持久化与运行实例。
- **CLI 适配层默认走"高危"参数**：把外部不可信输入直接送入带 `--dangerously-skip-permissions` 的 Claude CLI，违反 Anthropic 官方安全建议。
- **配对、附件、事件流等子模块各自缺乏鉴权**：体现认证设计未在 API 网关层面统一收敛。

目前**无任何用户对功能或体验表示满意/不满意的反馈**——所有讨论焦点为安全风险，需关注修复后是否会有更多用户体验类讨论浮现。

---

## 8. 待处理积压

⚠️ **本次 9 条议题全部为 0 评论、0 点赞、0 响应**，处于"提交即沉默"状态，是当前最严重的积压。具体清单：

- [#294](https://github.com/TinyAGI/tinyagi/issues/294) — 严重 — 0 响应
- [#293](https://github.com/TinyAGI/tinyagi/issues/293) — 严重 — 0 响应
- [#292](https://github.com/TinyAGI/tinyagi/issues/292) — 严重 — 0 响应
- [#291](https://github.com/TinyAGI/tinyagi/issues/291) — 严重 — 0 响应
- [#290](https://github.com/TinyAGI/tinyagi/issues/290) — 中等 — 0 响应
- [#289](https://github.com/TinyAGI/tinyagi/issues/289) — 高危 — 0 响应
- [#288](https://github.com/TinyAGI/tinyagi/issues/288) — 高危 — 0 响应
- [#287](https://github.com/TinyAGI/tinyagi/issues/287) — 高危 — 0 响应
- [#286](https://github.com/TinyAGI/tinyagi/issues/286) — 高危 — 0 响应

**给维护者的建议**：
1. 在 24 小时内至少对全部 9 条 Security Issues 给出 triage 回复，告知 CVE 分配与修复时间表。
2. 考虑合并为单一 Tracking Issue 或 Security Advisory，避免后续用户逐一追踪。
3. 在修复未发布前，应在 README/Releases 显著位置追加"已知严重安全问题，建议临时在网络层限制控制平面可达性"的安全声明。
4. 在补丁发布前可临时引入 [`--disabled-api` 启动选项](https://github.com/TinyAGI/tinyagi) 作为缓解措施。

---

> 📌 **一句话总结**：TinyClaw 今日进入"安全应急响应期"——9 条高危 Security Issues 集中披露，无 PR 修复、无版本发布、无任何维护者响应，项目健康度信号亮红灯，**建议运营/部署方立即在网络层收紧控制平面暴露面**。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-07-08** | 数据周期：过去 24 小时

---

## 1. 今日速览

CoPaw 今日发布 **v2.0.0-beta.3**，社区活跃度维持在高位：24 小时内 17 条 Issue 更新、33 条 PR 互动，且关闭/合并率较高（Issue 关闭 6/17≈35%，PR 关闭/合并 14/33≈42%），说明 2.0 beta 阶段的反馈回路畅通。**讨论焦点高度集中于 v2.0 引入的 `scroll` 上下文压缩策略**——已有 3 个相关 Issue 与多支 PR（#5765、#5848、#5747）相互关联，呈现出"发现问题 → 紧急修复 → 进一步迭代"的良性态势。前端性能、大会话渲染、Windows 沙箱与安全策略也是本日高关注议题。整体来看，项目处于 beta 测试密集反馈期，健康度良好，但建议维护者关注 v2.0 GA 前的关键回归窗口。

---

## 2. 版本发布

### 🚀 v2.0.0-beta.3

**发布说明（节选）：**
- `fix(ci)`：在 macOS bash 3.2 上对空 `extra_flags` 展开做防护（PR #5743，@yutai78786）
- `feat(auth)`：多维度限流增强（PR #5738，@zhijianma）—— 显著安全加固

**完整发布说明**：https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.0.0-beta.3

**已配套联动**：
- Issue #5833（v2.0.0-beta.3 安装验证 Release Duty）已建立 4-checkpoint 验收清单，发布后 4 小时内出结果。
- PR #5837（version bump 2.0.0b4）已关闭，节奏指向下一步迭代。

**升级注意**：beta 版本与 1.x 数据格式存在差异，建议生产环境用户等待 GA。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR

| PR | 作者 | 摘要 | 价值 |
|---|---|---|---|
| [#5765](https://github.com/agentscope-ai/QwenPaw/pull/5765) | @niceIrene | scroll 压缩：保护 active turn + 渐进式压力释放 + recall 失败显式化 | **关键修复**，一口气闭环 #5746、#5776、#5778 三个用户报告的上下文丢失/任务错乱问题 |
| [#5747](https://github.com/agentscope-ai/QwenPaw/pull/5747) | @biaobiaobiao108 | 避免 scroll 压缩折叠当前 active turn（phase-1） | 与 #5765 同源，被 supersede 后合入主 PR |
| [#5839](https://github.com/agentscope-ai/QwenPaw/pull/5839) | @rayrayraykk | 静态化 `project.urls` 让 PyPI 关联 GitHub | 修复包元数据缺失问题，让依赖图页面生效 |
| [#5837](https://github.com/agentscope-ai/QwenPaw/pull/5837) | @rayrayraykk | 版本号 bump 到 2.0.0b4 | 推进版本节奏 |

### 🧭 整体方向

围绕 v2.0 GA，**scroll 上下文策略的健壮性**是当前主线任务；从单纯"保护 active turn"演进到"分级压力释放 + recall 失败可见化"，体现了从 patch 走向系统性设计的思路。同时，**依赖治理**（agentscope 2.0.4、ReMe 0.4.0.8）、**前端性能回归**（长会话/长文本上传）、**安全护栏**（find -delete、cron 审批）三条支线齐头并进。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues（按评论数）

1. **[#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) —— Console 大会话渲染崩溃（💬15）**  
   根因明确：`tool_use` / `tool_result` 被后端转换为 `type:"data"` 块，前端 `getPrimaryTraceBlock` 不识别。属于**前后端类型契约不一致**的典型问题，呼声高但目前尚无对应 fix PR。

2. **[#5273](https://github.com/agentscope-ai/QwenPaw/issues/5273) —— v2.0.0 预发布 Bug 集中追踪（💬10）**  
   官方维护的"中央收件箱"，鼓励用户把 v2 预发布问题汇入此处以避免噪声。

3. **[#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) —— >500KB 会话文件打开报错（💬6）**  
   用户真实痛点："页面完全无法显示，只能删除该会话"——属于**核心可用性回归**。建议在下一版本（2.0.0b4 或 GA）必修复。

4. **[#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) —— 定时任务弹窗提醒需要开关（💬4）**  
   反映了用户对"一刀切关闭弹窗"的不满：之前 PR #4803 关闭了弹窗，#5797 主张把选择权交给用户。

5. **[#5746](https://github.com/agentscope-ai/QwenPaw/issues/5746)、[#5778](https://github.com/agentscope-ai/QwenPaw/issues/5778)、[#5776](https://github.com/agentscope-ai/QwenPaw/issues/5776) —— scroll 上下文丢失三连**  
   已被 #5765 一并修复，体现项目对核心反馈的响应速度。

**用户诉求提炼**：scroll 压缩策略的"上下文连续性"是 v2.0 用户最大的心智负担；前端对超大对话/数据块的渲染能力是另一个被低估的稳定性瓶颈。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重（影响核心功能 / 存在安全风险）

| Issue | 描述 | 状态 |
|---|---|---|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) | 大工具调用历史导致 Console 白屏崩溃 | OPEN，**尚无 fix PR** |
| [#5479](https://github.com/agentscope-ai/QwenPaw/issues/5479) | >500KB 会话文件直接报"渲染错误" | OPEN，PR #5845 部分缓解（长文本上传配置） |
| [#5842](https://github.com/agentscope-ai/QwenPaw/issues/5842) | `find -delete` 绕过 file_guard 越界删除检查 | OPEN，**已有 fix PR #5843** ✅ |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) | DingTalk DM 中 `/stop` 命令跨用户误取消 | OPEN，**无 fix PR**，属安全/正确性问题 |

### 🟡 中严重（影响体验但不致命）

| Issue | 描述 | 状态 |
|---|---|---|
| [#5846](https://github.com/agentscope-ai/QwenPaw/issues/5846) | v2.0b3 "关闭模式"下仍弹审批窗 | OPEN（今日新开），定时任务自动化场景受影响 |
| [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | Windows AppContainer ACE 污染导致 Hermes Desktop GPU 进程崩溃 | OPEN，**无 fix PR** |
| [#5784](https://github.com/agentscope-ai/QwenPaw/issues/5784) | 同名模型跨 provider 时前端阈值取错 | OPEN，#5845 部分相关 |

### 🟢 低严重（边缘场景）

| Issue | 描述 | 状态 |
|---|---|---|
| [#5416](https://github.com/agentscope-ai/QwenPaw/issues/5416) | 部分模型把回复放进 `thinking`/`reasoning_content` 导致用户看不到 | 已关闭 |
| [#5774](https://github.com/agentscope-ai/QwenPaw/issues/5774) | Google 渠道 Gemini 端点格式报错 | 已关闭 |

**总结**：今日有 **3 个高严重 bug 尚无对应 PR**（#5401、#5835、#5829 顶部安全），建议维护者优先认领 #5835（DM 用户隔离）和 #5829（Windows 沙箱副作用），二者都是平台层潜在风险。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 关联 PR | 进入下一版本的概率 |
|---|---|---|---|
| 定时任务弹窗开关 | [#5797](https://github.com/agentscope-ai/QwenPaw/issues/5797) | [#5847](https://github.com/agentscope-ai/QwenPaw/pull/5847)（cron 工具安全开关） | ⭐⭐⭐⭐ 极可能合并，#5847 设计已成形 |
| 隐藏文件夹可选 | [#5785](https://github.com/agentscope-ai/QwenPaw/issues/5785) | 无 | 已关闭，说明社区共识不足，可能延后 |
| 桌面端点击本地路径打开文件管理器 | [#4830](https://github.com/agentscope-ai/QwenPaw/issues/4830)（闭环） | [#5836](https://github.com/agentscope-ai/QwenPaw/pull/5836) | ⭐⭐⭐⭐ 高 |
| Agent 头像字段 | [#5826](https://github.com/agentscope-ai/QwenPaw/pull/5826) | 同左 PR | ⭐⭐⭐ 中 |
| `rejects_media` 细粒度（按媒体类型） | [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) | 无 | ⭐⭐ 较低，待评审 |
| `grep_search` 增加 `show_file` / `\|` 字面量 | — | [#5840](https://github.com/agentscope-ai/QwenPaw/pull/5840)、[#5834](https://github.com/agentscope-ai/QwenPaw/pull/5834) | ⭐⭐⭐⭐ 新贡献者 PR，质量较好 |
| 飞书 markdown 图片单独发送 | — | [#5823](https://github.com/agentscope-ai/QwenPaw/pull/5823) | ⭐⭐⭐⭐ 渠道质量提升 |
| Tauri 桌面打包 Node 运行时 | — | [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) | ⭐⭐⭐ 开箱即用体验 |

**路线图信号**：v2.0 后续小版本（b4 → GA）可能会重点强化 **cron/定时任务用户控制力**（#5847）、**前端性能/长会话**（#5845）、**Windows 沙箱安全**（#5829）、**桌面端开箱即用**（#5814、#5836）。

---

## 7. 用户反馈摘要

### 😣 痛点

- **"scroll 压缩把当前任务折掉了"**（#5746/#5778/#5776/#5774/#5416 集中爆发）：用户原话"模型忘记了原本在做什么任务，像换了一个人"。这暴露出 v2 默认策略激进、缺少 fail-safe。
- **"大会话打不开，只能删"**（#5479）：核心可用性回归——工作积累数月后单文件无法回看，是杀手级场景。
- **"前端崩溃白屏"**（#5401）：影响所有使用工具调用功能的用户，且无 fix。
- **"想要弹窗却被一刀切关闭了"**（#5797）：用户对**替自己做决定**的产品行为不满。
- **"Windows 沙箱破坏了其他应用"**（#5829）：跨应用副作用是平台特性带来的隐性成本。

### 😊 满意点

- 对 v2.0 预发布节奏总体认可，集中追踪 issue #5273 收口良好。
- 对核心修复速度满意：scroll 三连 bug 一天内闭环（#5765）。
- 新贡献者 PR 比例上升（#5751、#5791、#5834、#5840、#5826），社区参与感增强。

### 🔍 真实使用场景

- 长寿命 QQ/IM 会话中"陈旧置顶消息"被误识别为活跃任务（#5776）—— 揭示**多渠道长期会话**的真实部署形态。
- `find ... -delete` 绕过安全策略（#5842）—— 用户在做批量文件清理时遭遇风险。
- 关闭审批模式仍弹窗（#5846）—— 表明用户在做"无人值守 cron 任务"。
- DingTalk DM 中不同用户共享 robot ID 后缀导致 `/stop` 冲突（#5835）—— 多租户场景的真实痛点。

---

## 8. 待处理积压

维护者请优先关注以下**高严重 + 长期未响应**的条目：

| Issue/PR | 类型 | 当前状态 | 建议 |
|---|---|---|---|
| [#5401](https://github.com/agentscope-ai/QwenPaw/issues/5401) Console 大会话崩溃 | Bug | OPEN，评论 15 | **6 月 23 日开**，无 fix PR，前后端契约修复 |
| [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) Windows AppContainer 副作用 | Bug | OPEN | 平台层风险，需 Windows 维护者认领 |
| [#5835](https://github.com/agentscope-ai/QwenPaw/issues/5835) `/stop` 跨用户取消 | Bug / 安全 | OPEN | 多租户隔离设计，需架构层面响应 |
| [#5821](https://github.com/agentscope-ai/QwenPaw/issues/5821) `rejects_media` 细粒度 | Feature | OPEN | 评论 1，需维护者评审 |
| [#5813](https://github.com/agentscope-ai/QwenPaw/pull/5813) 43 个回归单测 | PR | OPEN | 7 月回归计划核心，建议快速评审合入 |
| [#5814](https://github.com/agentscope-ai/QwenPaw/pull/5814) Tauri 打包 Node 运行时 | PR | OPEN | 桌面端开箱即用关键 |
| [#5838](https://github.com/agentscope-ai/QwenPaw/pull/5838) agentscope 2.0.4 升级 | PR | OPEN | 依赖基线更新，建议排期 |

---

### 📊 今日健康度评分（自评）

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 50 条互动，新人贡献者 PR 占比上升 |
| 响应速度 | ⭐⭐⭐⭐ | scroll 系列一天内闭环 |
| 安全性 | ⭐⭐⭐ | #5842/#5835/#5829 待解 |
| 稳定性 | ⭐⭐⭐ | 前端长会话/大工具历史仍是软肋

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-08

> 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw) · 统计窗口：过去 24 小时

---

## 1. 今日速览

ZeroClaw 仓库今日呈现**高吞吐、强安全导向**的开发节奏：24 小时内活跃 PR 高达 50 条（45 条待合并），Issues 新增/活跃 8 条、关闭 2 条，无新版本发布。**安全主题成为绝对主线**——SSRF 三层防护（#8826/#8827）、`/ws/nodes` 时序攻击加固（#8824）、HTTP 安全响应头（#8829）、`/model --agent` 鉴权门（#8690）等多条 PR 同步推进；**MCP 工具栈稳定性问题**再度成为焦点，#6699（filter_groups 无效）与 #8642（tool-schema 克隆导致内存膨胀）均为 P1 级高风险 Bug。整体社区活跃度处于近一月高位，但大量 XL 级 PR 集中堆叠也对维护者评审产能构成压力。

---

## 2. 版本发布

**无新版本发布。**

最近相关动态：v0.8.1 集成/通道/Provider/Tool 队列跟踪 issue #6970 今日关闭，v0.8.3 observability/CI/docs/依赖支持跟踪 issue #8073 持续更新中（[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073)）。

---

## 3. 项目进展

### 已关闭的 Issue / PR

| 类型 | 编号 | 标题 | 价值 |
|---|---|---|---|
| Issue | [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970) | v0.8.1 integration/channel/provider/tool queue 历史归档 | 完成 v0.8.1 队列清理 |
| Issue | [#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) | skill_manage.create action 提案 | 推动技能系统支持 bundle 化 |
| PR | [#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) | zerocode Channels 配置新增 Global Settings 入口 | 提升根级 channel 字段可发现性 |
| PR | [#8820](https://github.com/zeroclaw-labs/zeroclaw/pull/8820) | Channels 根设置修复（#8757） | 修复 issue 跟踪 |
| PR | [#8822](https://github.com/zeroclaw-labs/zeroclaw/pull/8822) | Channels 配置新增可发现的 Global Settings 入口（#8757） | 同上 |

### 关键在途 PR 的实际推进

- **多用户鉴权体系（[#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672)）**：实现 RFC #7141 的 `AuthProvider` 注册中心，四种 provider（peercred、native pairing bearer、ssh-key challenge-response、oidc.<alias>）打通 RPC `initialize` 握手，是项目安全架构的关键里程碑。
- **SOP 可视化编辑与 channel 扇入（[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)）**：节点图编辑器 + 实时运行覆盖层 + 严格保存校验，跨 web/zerocode 完整往返，是面向"零代码化"路线的核心交付。
- **OpenAI Bridge 通道（[#8710](https://github.com/zeroclaw-labs/zeroclaw/pull/8710)）**：暴露 OpenAI 兼容 HTTP/SSE 接口，使 Home Assistant 等客户端工具可直连。
- **Telegram 文档与命令一致性修复（[#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823)/[#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825)）**：同日闭环 #8797 与 #8810 两个文档/CLI 不一致问题。

**整体评估**：在安全、可观测性、跨端零代码三个方向均有实质推进；MCP 工具栈进入集中整治阶段（#8496、#6699、#8642 三线并行）。

---

## 4. 社区热点

### 评论最多的活跃 Issue

**[#6699 tool_filter_groups 对真实 MCP 工具无效（prefix-check bug）+ 与 deferred_loading 未联动](https://github.com/zeroclaw-labs/zeroclaw/issues/6699)** — 9 条评论，P1 高风险

- 作者 [nick-pape](https://github.com/nick-pape) 指出 `tool_filter_groups` 在文档层解析正常，但在真实 MCP 工具面上完全失效，包含两个独立 Bug：dispatch-time 过滤器（`crates/zeroclaw-runtime/src/agent/loop_.rs:149`）的前缀匹配错误；以及与 `deferred_loading` 通路未打通。
- 这是当前社区**关注度最高的技术债**之一，关联 [#5542](https://github.com/zeroclaw-labs/zeroclaw/issues/5542)（连续 OOM 跟踪器）和 [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)（拆分出的内存增长路径），可见 MCP 工具治理已形成多 issue 协同的解决路径。
- **诉求分析**：用户期望 `AgentConfig` 的过滤策略能真正下沉到 MCP 工具面，而不是停留在"已解析但未生效"的伪实现状态。

### 其他高关注讨论

- [#8314](https://github.com/zeroclaw-labs/zeroclaw/issues/8314) 热重载日志持久化配置（3 条评论）：运营侧对"配置变更无需重启守护进程"的强需求，呼应 v0.8.3 observability 路线（#8073）。
- [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) MCP tool-schema 克隆引发 RSS 无限增长（1 条评论，但 P1）：WSL2 场景下 OOM 风险的第二根因。

---

## 5. Bug 与稳定性

按严重程度降序排列：

| 严重度 | Issue | 描述 | 是否有修复 PR | 状态 |
|---|---|---|---|---|
| 🔴 P1 高风险 | [#6699](https://github.com/zeroclaw-labs/zeroclaw/issues/6699) | `tool_filter_groups` 对 MCP 工具完全无效 | 间接（#8496 在重构 deferred MCP 通路） | OPEN（53 天） |
| 🔴 P1 高风险 | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | agent loop 中 MCP tool-schema 克隆驱动 RSS 无限增长 | 无 | OPEN（5 天） |
| 🟠 P1 高风险 | [#8690](https://github.com/zeroclaw-labs/zeroclaw/pull/8690) | `/model --agent` 缺少 per-sender 鉴权（#8044） | ✅ 本 PR 即修复 | OPEN PR |
| 🟡 中风险 | [#8826](https://github.com/zeroclaw-labs/zeroclaw/pull/8826) + [#8827](https://github.com/zeroclaw-labs/zeroclaw/pull/8827) | `image_gen` 下载 URL 存在 SSRF（fal.ai 服务端可控 URL） | ✅ 已三段式修复 | OPEN PR |
| 🟡 中风险 | [#8824](https://github.com/zeroclaw-labs/zeroclaw/pull/8824) | `/ws/nodes` WebSocket 升级用 `!=` 比较 auth_token（时序攻击） | ✅ 本 PR 即修复 | OPEN PR |
| 🟢 S3 轻微 | [#8797](https://github.com/zeroclaw-labs/zeroclaw/issues/8797) | `bind-telegram` 提示的 config 属性名不存在 | ✅ [#8823](https://github.com/zeroclaw-labs/zeroclaw/pull/8823) 已修复 | OPEN |
| 🟡 S2 降级 | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram 示例文档错误，CLI 输出与文档不符 | ✅ [#8825](https://github.com/zeroclaw-labs/zeroclaw/pull/8825) 文档已扩展 | OPEN |
| 🟢 小修复 | [#8656](https://github.com/zeroclaw-labs/zeroclaw/pull/8656) | 微信已原生支持 Markdown，移除多余 `markdown_to_plain_text` | ✅ 本 PR 即修复 | OPEN PR |

**稳定性观察**：今日安全类修复密度极高（SSRF ×3、时序攻击 ×1、鉴权 ×1），反映出 bbot 主动扫描触发的安全硬化浪潮；MCP 内存/过滤问题仍是最大未解技术债。

---

## 6. 功能请求与路线图信号

### 新开 Feature 提案

| 提案 | 描述 | 路线图归属判断 |
|---|---|---|
| [#8828 Canvas 嵌入式侧边栏](https://github.com/zeroclaw-labs/zeroclaw/issues/8828) | 将 Canvas 从独立路由 `/canvas` 转为聊天页右侧可折叠面板 | 配合 #8590 的 web SOP 工作流，**高概率纳入近期 web 路线** |
| [#8815 skill_manage.create](https://github.com/zeroclaw-labs/zeroclaw/issues/8815) | 允许 agent 以 bundle 而非散落 `.md` 形式保存新技能 | Issue 已关闭，预示已有/将有实现 PR；#8235 路径同步推进技能 prompt 注入控制 |
| [#8235 运行时 profile 级 prompt_injection_mode 覆盖](https://github.com/zeroclaw-labs/zeroclaw/pull/8235) | 多 agent 部署下不同 profile 独立配置注入模式 | **技能系统下一阶段重点** |
| [#8821 max-iteration 优雅总结计量](https://github.com/zeroclaw-labs/zeroclaw/pull/8821) | 通过 `run_model_query` 计量最大迭代次数的兜底总结（S21 P2） | S21 系列重构持续推进 |
| [#8672 多用户鉴权 provider + 权限画像 + 主体隔离](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | RFC #7141 多用户安全栈 | **重大安全里程碑**，建议优先评审 |
| [#8710 OpenAI Bridge 通道](https://github.com/zeroclaw-labs/zeroclaw/pull/8710) | 暴露 OpenAI 兼容端点，连接 Home Assistant 等客户端 | 通道生态扩张 |
| [#8590 SOP 可视化编辑](https://github.com/zeroclaw-labs/zeroclaw/pull/8590) | 节点图编辑器 + 实时运行覆盖 + channel 扇入 + git_forge 统一 forge 工具 | **跨 web/zerocode 头号特性**，面向 Beta 测试者 |

### 路线图判断

- **v0.8.3 主题锁定**：[#8073](https://github.com/zeroclaw-labs/zeroclaw/issues/8073) 跟踪的 observability/CI/docs/deps 仍是当前主线，#8314（日志热重载）即将闭环。
- **MCP 工具治理三件套**：#8496（deferred 访问策略统一）+ #6699（filter_groups 修复）+ #8642（克隆内存）需协同落地，建议合并前互相验证。
- **零代码化加速**：#8590 进入 Beta 测试阶段，预计将催生下一波文档/UX 类 issue。

---

## 7. 用户反馈摘要

### 真实用户痛点

> **#8810 用户原话**（[cr3a7ure](https://github.com/cr3a7ure)）：
> "while I like your take on implementing an agent in Rust with its types and memory safety, if not implemented correctly, slop remains slop. The documentation is wrong and the output of some comma[nds]..."

提炼：
- **正面**：用户认可 Rust 实现带来的类型与内存安全优势，认为方向正确。
- **负面**：**文档与 CLI 实际行为不一致**——这是用户首次接触项目时的"第一印象杀手"；用户对 "slop remains slop"（即使底层严谨，糟糕的体验仍是糟糕）的措辞反映社区对**配置/文档工程质量的期待**已超出"功能能用"的层级。

### 使用场景信号

- **WSL2 / 资源受限部署**（[#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642)）：开发者本地环境下的 OOM 是真实痛点，已衍生 restart-storm + memory-growth 两条独立治理线。
- **多 agent 安装**（[#8235](https://github.com/zeroclaw-labs/zeroclaw/pull/8235)）：当前全局唯一的 `prompt_injection_mode` 无法满足多租户/多角色场景，需求来自实际部署。
- **零代码化用户**（[#8590](https://github.com/zeroclaw-labs/zeroclaw/pull/8590)）：SOP 节点图编辑 + channel 扇入显示大量非编程背景用户已加入生态，对"可视化 + 严格保存校验"的产品形态有明确诉求。

### 满意度观察

- 已关闭的 [#6970](https://github.com/zeroclaw-labs/zeroclaw/issues/6970)、[#8815](https://github.com/zeroclaw-labs/zeroclaw/issues/8815)、[#8813](https://github.com/zeroclaw-labs/zeroclaw/pull/8813) 显示维护者对社区诉求**响应较快**。
- 文档/CLI 一致性问题能在同一日由不同 PR（#8823 / #8825）双线闭环，反映**审查协同效率良好**。

---

## 8

</details>