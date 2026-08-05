# OpenClaw 生态日报 2026-08-05

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-05 01:55 UTC

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
**日期：2026-08-05**

---

## 1. 今日速览

OpenClaw 今日进入**高强度维护期**：过去 24 小时内共触达 **500 条 Issues** 与 **500 条 PRs**，活跃度远超常规水平。社区关注点高度集中于**子代理（subagent）完成态丢失、会话状态泄漏、网关主线程饱和**以及**模型提供商鉴权**等核心稳定性问题。今日**无新版本发布**，但维护者侧已发出多项高优先级修复 PR（如 MCP stdio 大帧崩溃、Agent DB v14→v15 迁移失败）。整体而言，项目处于"集中修复—尚未集中发布"的工程阶段。

---

## 2. 版本发布

**今日无新版本发布。** 当前 beta 通道为 `2026.7.2-beta.7`（dabe191），stable 通道仍为 2026.3.x 系。建议关注今日合并的 PR 是否会在下一次 nightly 中落地。

---

## 3. 项目进展

今日合入的关键 PR 列表（按议题重要性排序）：

| PR | 主题 | 影响 |
|---|---|---|
| [#119379](https://github.com/openclaw/openclaw/pull/119379) | 守护 MCP stdio 大于 10 MiB 帧引发的 host 进程崩溃 | **重大稳定性修复**，所有并发会话不再被单点崩溃拖垮 |
| [#119326](https://github.com/openclaw/openclaw/pull/119326) | 真正执行 `accounts.<id>.historyLimit` 账号级历史上限 | 修复文档承诺却长期未生效的"沉默丢字段"问题 |
| [#114925](https://github.com/openclaw/openclaw/pull/114925) | 保留 JSON 转义 + Windows 路径恢复 | 修复 Windows 上 `write` 工具产生 `SyntaxError` 的回归 |
| [#119023](https://github.com/openclaw/openclaw/pull/119023) | Slack 频道上下文在 bot 开线程时不丢失 | 改善 Slack 多轮对话上下文路由 |
| [#119403](https://github.com/openclaw/openclaw/pull/119403) | 保留 CI 缓存预热分片信封 | CI 基础设施健壮性 |
| [#119390](https://github.com/openclaw/openclaw/pull/119390) | Codex 监管工具复用核心脱敏策略 | 关闭凭据泄露缝隙 |
| [#119376](https://github.com/openclaw/openclaw/pull/119376) | Slack 单消息内展示进度与最终答复 | 通知噪音 + UX |
| [#116404](https://github.com/openclaw/openclaw/pull/116404) | auto-reply 在 preflight 压缩瞬态失败后继续 | 提升首次响应成功率 |
| [#119389](https://github.com/openclaw/openclaw/pull/119389) | system-agent 批准提案精确一次性执行 | 关键安全语义修正 |
| [#119396](https://github.com/openclaw/openclaw/pull/119396) | 停止仅剩 zombie 的网关进程组 | 修复 QA live/E2E 误报 |
| [#119391](https://github.com/openclaw/openclaw/pull/119391) | Discord doctor 避免运行时全量加载 | 单元测试 < 120s |

**进展评估**：今日合入的 PR 在 **session-state、security-boundary、availability** 三个高危维度都有实质性推进，但合入量（119/500）与待审量（381/500）相比仍属"杯水车薪"。**预计 2026.7.3 或 2026.7.4 累积一批修复后发布**。

---

## 4. 社区热点

### 讨论最热的 Issue

1. **[#116277](https://github.com/openclaw/openclaw/issues/116277)** — DeepSeek v4 Flash 静默回复失败（**104 条评论**）
   - **状态**：已关闭
   - **影响**：Telegram 群组消息未生成回复，仅发出"No reply was generated for this message"兜底
   - **诉求**：社区普遍质疑模型路由时的 fallback 行为是否能"静默吞掉"消息，并希望加强 provider-level 健康探测

2. **[#116201](https://github.com/openclaw/openclaw/issues/116201)** — 实时语音会话可无限持有 provider 与 consult 状态（**59 条评论**）
   - **状态**：仍 OPEN
   - **诉求**：要求将"项目计数 / 取消信号"等软约束替换为硬性所有权边界，避免资源滞留

3. **[#115326](https://github.com/openclaw/openclaw/issues/115326)** — 崩溃熔断器永久压制 Discord/WhatsApp，文档恢复路径（`channels.start`）又因 WebSocket 1006 失败（**25 条评论**）
   - **状态**：已关闭
   - **诉求**：用户对"官方文档给出的恢复步骤本身不可用"感到强烈不满，要求提供幂等且可观测的 breaker reset 路径

4. **[#44925](https://github.com/openclaw/openclaw/issues/44925)** — 子代理完成态静默丢失（**23 条评论**，👍 2）
   - **状态**：OPEN，自 2026-03-13 起悬而未决
   - **诉求**：社区要求对子代理超时/drain/orphan 三类失败提供 retry + 通知 + 自动恢复的"三层兜底"

5. **[#48788](https://github.com/openclaw/openclaw/issues/48788)** — 集中化文件名编码工具（**20 条评论**，👍 1）
   - **状态**：OPEN
   - **诉求**：希望将 Shift-JIS / EUC-KR / GB18030 等编码处理统一到一处，避免 Feishu / Slack 等适配器各自修补

### 讨论最热的 PR（多数为新开，评论仍在积累）

- [#119379](https://github.com/openclaw/openclaw/pull/119379) — MCP stdio 大帧崩溃修复（已在上面进展表中提到）
- [#119150](https://github.com/openclaw/openclaw/pull/119150) — 修复 release QA 验证场景（QA Lab）
- [#119374](https://github.com/openclaw/openclaw/pull/119374) — 延迟加载 xAI 可选能力（启动体积）

---

## 5. Bug 与稳定性

按严重度排序：

### 🔴 P1 / Diamond Lobster（最高优先级）

| Issue | 标题 | 是否有 fix PR | 链接 |
|---|---|---|---|
| #116201 | Realtime voice 资源无界保留 | ❌ 未见 | [链接](https://github.com/openclaw/openclaw/issues/116201) |
| #44925 | 子代理完成态静默丢失（5 个月未解） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/44925) |
| #67777 | 子代理完成态在直接公告超时时丢失 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/67777) |
| #115908 | session transcript reconcile 在持续写入下活锁，主线程停滞 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/115908) |
| #92433 | 子代理公告转入尚未处理的请求者运行被丢弃 | ❌ | [链接](https://github.com/openclaw/openclaw/issues/92433) |
| #111498 | 主代理被遗留 workspace-state 迁移阻塞（macOS + Anthropic） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/111498) |
| #119263 | **Agent DB v14→v15 迁移失败 `no such column: entry_valid`，网关拒绝启动** | ❌（需紧急修复） | [链接](https://github.com/openclaw/openclaw/issues/119263) |
| #115700 | `chat.send` 被"thread switched branches"持续拒绝（2026.7.2） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/115700) |
| #118846 | 网关主线程被插件元数据快照 + fs stat 持续占满（ws_upgrade 1006） | ❌ | [链接](https://github.com/openclaw/openclaw/issues/118846) |

### 🟠 P1 / Gold Shrimp

| Issue | 标题 | 链接 |
|---|---|---|
| #118846 | Gateway 主线程 100% 占用 | [链接](https://github.com/openclaw/openclaw/issues/118846) |
| #91363 | 隔离 cron 在 `model-call-started` 阶段必失败 | [链接](https://github.com/openclaw/openclaw/issues/91363) |
| #89278 | Codex OAuth 刷新成功但 10s 超时切断了 cron/heartbeat | [链接](https://github.com/openclaw/openclaw/issues/89278) |
| #115642 | 订阅类鉴权冷却超出实际故障窗口（5h 过长） | [链接](https://github.com/openclaw/openclaw/issues/115642) |

### 🟡 P2 / Silver Shellfish

| Issue | 标题 | 链接 |
|---|---|---|
| #97616 | 子进程未被回收，zombie 累积导致运行时降级 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| #107873 | WebChat 嵌入式 prompt-lock 会话接管后中止可见 turn | [链接](https://github.com/openclaw/openclaw/issues/107873) |
| #118560 | WebChat canvas 主会话重置后隐藏早期消息 | [链接](https://github.com/openclaw/openclaw/issues/118560) |
| #77136 | WebChat 无法渲染部分助手消息（TUI 正常） | [链接](https://github.com/openclaw/openclaw/issues/77136) |
| #58139 | `memory-lancedb` 在 Windows Docker bind mount 上失败 | [链接](https://github.com/openclaw/openclaw/issues/58139) |
| #52249 | ACP 父会话等待子完成时挂起（已关闭） | [链接](https://github.com/openclaw/openclaw/issues/52249) |

### 已被关闭（值得关注的修复）

- [#116277](https://github.com/openclaw/openclaw/issues/116277) DeepSeek v4 Flash 静默失败 → 已关闭
- [#115326](https://github.com/openclaw/openclaw/issues/115326) Crash-loop breaker 永久压制 → 已关闭
- [#52249](https://github.com/openclaw/openclaw/issues/52249) ACP 父会话挂起 → 已关闭

**稳定性评估**：🔴 **存在多个长期未修复的 P1/Diamond Lobster 议题**，尤其围绕子代理完成态丢失这一**反复出现的模式**（#44925、#67777、#92433），说明代码层面仍缺少端到端的"完成保障"语义。

---

## 6. 功能请求与路线图信号

| 需求 | 提出方 | 是否已有 PR 跟进 | 链接 |
|---|---|---|---|
| **MathJax / LaTeX 渲染**（Control UI） | @henserlu（👍 10） | ❌ | [#42840](https://github.com/openclaw/openclaw/issues/42840) |
| **YAML 配置文件支持** | @xuxusheng（👍 2） | ❌ | [#45758](https://github.com/openclaw/openclaw/issues/45758) |
| **`session.resetPrompt` 可配置启动消息** | @SwivelLabs | ❌ | [#45501](https://github.com/openclaw/openclaw/issues/45501) |
| **OpenRouter 用量成本暴露给 agent** | @eric-wien | ❌ | [#9016](https://github.com/openclaw/openclaw/issues/9016) |
| **浏览器工具 7 项实战改进** | @ibadukefan | ❌ | [#44431](https://github.com/openclaw/openclaw/issues/44431) |
| **集中化文件名编码工具** | @alex-xuweilong | ❌（含 PR #48578 部分修复） | [#48788](https://github.com/openclaw/openclaw/issues/48788) |
| **标题感知分块 + 实体抽取** | @tymrtn（👍 2） | ❌ | [#44395](https://github.com/openclaw/openclaw/issues/44395) |
| **TTL/Expiry for delivery queue messages** | @rohan-ixlayer | ❌ | [#16555](https://github.com/openclaw/openclaw/issues/16555) |
| **Webchat STT/TTS 自托管 provider** | @mcfex | ❌ | [#45508](https://github.com/openclaw/openclaw/issues/45508) |
| **Control UI plugin contribution slots (RFC)** | @100yenadmin | ❌ | [#71736](https://github.com/openclaw/openclaw/issues/71736) |
| **Android chat-first surface（讨论）** | @memphislee09-source | ❌ | [#46058](https://github.com/openclaw/openclaw/issues/46058) |
| **工具输出内容型 prompt-injection 扫描** | @smonett | ❌ | [#79168](https://github.com/openclaw/openclaw/issues/79168) |
| **`node.pairing.snapshot` RPC** | @highwork43-dot | ✅ PR #119077 | [#119077](https://github.com/openclaw/openclaw/pull/119077) |
| **从 secret target registry 自动生成 secretref 文档** | @aniruddhaadak80 | ❌ | [#44289](https://github.com/openclaw/openclaw/issues/44289) |
| **结构化 ACP 后端错误类型** | @aniruddhaadak80 | ❌ | [#44294](https://github.com/openclaw/openclaw/issues/44294) |

**路线图信号**：
- **最有可能进入下一版本**：✅ `node.pairing.snapshot` RPC（已有 PR）
- **强烈呼声但缺工程资源**：LaTeX 渲染、YAML 配置、自托管 STT/TTS
- **架构性提议**：Control UI 插件贡献槽（需要 RFC 推进）

---

## 7. 用户反馈摘要

提炼自 Issues 评论中的真实痛点：

| 痛点类别 | 代表场景 | 用户原声（提炼） |
|---|---|---|
| **静默丢消息** | 子代理完成态、超时、orphan prune | *"Completion silently lost — no retry, no notification, no auto-restart"*（#44925） |
| **恢复步骤不可用** | Discord/WhatsApp crash-loop | *"Documented recovery (channels.start) fails with WebSocket 1006"*（#115326） |
| **模型厂商静默 fallback** | DeepSeek v4 Flash | *"Silently failed to generate a reply... generic fallback"*（#116277） |
| **WebChat 与 TUI 行为不一致** | 群聊 | *"Transcript files contain all data... TUI works perfectly"*（#77136） |
| **macOS + Anthropic 鉴权后主代理完全阻塞** | workspace-state 迁移遗留 | *"Refuses every Anthropic turn even though its anthropic:default credential is reported effective"*（#111498） |
| **WebChat canvas 重置后历史不可见** | 主会话重置 | *"No visible access to the earlier messages"*（#118560） |
| **企业被风控误判** | Google Antigravity 频繁工具 schema 重载 | *"Account was banned due to violation of ToS"*（#44134） |
| **数据库迁移让网关无法启动** | 2026.7.1 → 2026.7.2 | *"`openclaw doctor --fix` cannot migrate... gateway refuses to start"*（#119263） |
| **plugin-metadata 拖垮主线程** | Docker 启动期 | *"Main thread sits pegged at ~100% of a core continuously, from process start"*（#118846） |
| **会话上下文硬上限 128k 不可配置** | 任意模型 | *"All persistent sessions capped at 128k context regardless of model"*（#116010） |

**正面反馈信号**：
- [#118965](https://github.com/openclaw/openclaw/pull/118965) 覆盖托管 OTEL 运行时路径、#119396 修复 QA zombie 误报 → 用户对 QA Lab 投资持肯定态度。
- [#119403](https://github.com/openclaw/openclaw/pull/119403) 等基础设施 PR 表明维护者仍在主动改善交付质量。

---

## 8. 待处理积压

下列**长期悬置（>30 天）的高优先级 Issue**，建议维护者团队在 2026.7.x 下一次发布前重新审视：

| Issue |

---

## 横向生态对比

# 开源 AI 智能体生态横向对比分析
**日期：2026-08-05**

---

## 1. 生态全景

今日观测的 13 个项目中，**OpenClaw、IronClaw、Hermes Agent、CoPaw、ZeroClaw 处于高活跃梯队**（24h 更新各达 50 条以上），**NanoBot 与 LobsterAI 在中等节奏稳健推进**，**PicoClaw / NanoClaw / NullClaw 处于低速维护**，**TinyClaw / ZeptoClaw / Moltis 几近静默**。整体生态呈现两个清晰趋势：**（1）"Claw 系"项目数量众多但严重分化**——头部项目已进入"质量治理 + RFC 收敛"阶段，尾部项目则面临维护者响应停滞甚至 stale 关闭风险；**（2）行业共性痛点正从"功能补齐"迁移到"语义正确性"**——多模型缓存作用域、Agent 完成态保障、跨通道一致性、凭据隔离等基础性问题成为多家共同焦点，预示下一阶段竞争将集中在协议兼容性与多租户边界上。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 已合并/关闭 | Release 状态 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | ~500 触达 | ~500 触达 | ~119 (合并率 ≈ 24%) | beta 2026.7.2-beta.7，stable 2026.3.x | 🔴 高强度维护期 |
| **Hermes Agent**

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-05

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 报告时间窗口：过去 24 小时

---

## 1. 今日速览

NanoBot 仓库过去 24 小时呈现**高活跃、低合并**的开发节奏：**共 31 条工单/PR 更新**（5 Issues + 26 PRs），无新版本发布。其中 PR 端表现尤为活跃，单日 26 条 PR 中有 **18 条已关闭/合并**，**8 条仍处于 OPEN 状态待评审**。当日工作重点集中在 **WebUI 视觉一致性打磨**（多条 chengyongru/Re-bin 的小步迭代 PR）和 **多渠道适配**（Telegram、Matrix、Mattermost、WeCom 同时修复），同时完成了对 **Anthropic Opus 5 模型**（2026-07-24 发布）的能力适配。社区反馈整体集中在 bug 报告与平台兼容性问题上，未出现大规模需求争议，**项目健康度评估为良好**。

---

## 2. 版本发布

**今日无新版本发布。** 近 24 小时内没有 Release tag 推送，待合并的 P1 PR（#5236 Anthropic Opus 5 支持、#5210 WebUI 信任代理认证、#5238 session 权限重构、#5239 Vite 开发模式）暗示下一次发版可能围绕"模型升级 + WebUI 工程化"展开。

---

## 3. 项目进展

当日关闭/合并的 PR 中，以下几条对项目能力提升具有实质意义：

| PR | 领域 | 影响 |
|---|---|---|
| [#5236](https://github.com/HKUDS/nanobot/pull/5236) **fix(anthropic): support Opus 5 effort controls** (p1) | Provider | 适配 Claude Opus 5 模型族（2026-07-24 发布），引入按模型族版本阈值替代硬编码排除，并向 adaptive-only 模型发送 `output_config.effort`，保留旧模型的 `budget_tokens` 控制。修复了 [#5235](https://github.com/HKUDS/nanobot/issues/5235) 中 Opus 5 配置被 API 拒绝的 bug |
| [#5210](https://github.com/HKUDS/nanobot/pull/5210) **feat(webui): support trusted proxy bootstrap auth** (p1, security) | WebUI | 为 `/webui/bootstrap` 增加可选的受信上游代理认证路径，支持 Cloudflare Tunnel + Cloudflare Access 等部署场景。需同时校验 IPv4/IPv6 CIDR 与非空 header，强化了部署安全模型 |
| [#5239](https://github.com/HKUDS/nanobot/pull/5239) **feat(webui): add integrated Vite dev mode** (p1) | WebUI/DevX | 新增 `nanobot webui --dev` 一键启动 gateway + Vite dev server 并启用 HMR，并提供 HTTP 就绪检查与安全的 sidecar 清理，显著降低贡献者上手门槛 |
| [#5238](https://github.com/HKUDS/nanobot/pull/5238) **refactor(session): remove request-scoped access grants** (p1) | Session | 移除 #5211 引入的请求作用域 `Tool.available()`，回归 `Tool.enabled()` 作为唯一构造期开关；session 工具可访问 owner 名下所有持久化会话，简化授权抽象 |
| [#5242](https://github.com/HKUDS/nanobot/pull/5242) **fix(commands): reject malformed slash commands** | Commands | 拒绝未注册的 `/` 前缀命令而非透传给 LLM，并对拼写错误提示最近注册命令 + 拒绝接受参数的命令的合法形式 |
| [#5244](https://github.com/HKUDS/nanobot/pull/5244) **fix(webui): render markdown in prompt rail previews** | WebUI | 在 prompt rail 悬停预览中渲染 assistant 回答片段的 Markdown，user 消息保持纯文本 |
| [#5245](https://github.com/HKUDS/nanobot/pull/5245) **fix(webui): align timestamp tooltip styles** | WebUI | 用 WebUI 共享 tooltip 样式替换原生 title，统一消息页脚时间戳组件并支持键盘可访问 |

**整体评估**：今日 PR 节奏明显偏向 WebUI 收口与多平台兼容修补，且 P1 优先级项目（Opus 5、信任代理、session 权限重构、Vite 开发模式）几乎全部完成关闭。**项目在"模型前沿适配"和"部署/贡献者友好度"两条线上同步向前推进了一大步。**

---

## 4. 社区热点

> 注：本次数据中 PR 的 `comments` 字段多数返回 `undefined`，Issues 评论数普遍偏低（最高 2 条），未出现典型的"高赞爆款"讨论。当日热度更多由 **P1 标签** 与 **话题与重大模型/平台事件的关联度** 驱动，而非评论数。

按热度（重要性 × 关联事件）排序：

1. **[#5235](https://github.com/HKUDS/nanobot/issues/5235) — Anthropic Opus 5 配置被 API 拒绝**（已关闭，1 条评论）
   - 关联 Opus 5 模型（2026-07-24 发布），属于"紧跟模型族发布"的时效性话题。bug 报告引发快速响应（→ fix PR #5236 当日合并）。

2. **[#4784](https://github.com/HKUDS/nanobot/issues/4784) — Provider API keys 在 `os.environ` 全局污染**（2 条评论，**已开放 30 天**）
   - 安全类问题，社区讨论时间最长但响应迟缓，反映出用户对多 Provider 混部场景下凭据隔离的关切。

3. **[#5233](https://github.com/HKUDS/nanobot/pull/5233) — Mattermost 线程独立群组策略**（已关闭）
   - 是 #4459 的后续 PR，将线程与主频道的 @ 提及要求解耦，是 Mattermost 渠道能力延伸的"承上启下"项。

4. **[#5234](https://github.com/HKUDS/nanobot/pull/5234) — 集成 mst-python 元搜索引擎**（OPEN, p1）
   - 引入基于 RRF（Reciprocal Rank Fusion）的多引擎聚合搜索，是 provider 体系扩展的标志性尝试。

**诉求分析**：社区核心诉求集中在三方面——**新模型/平台能力快速跟进**（Opus 5、Continuwuity）、**多 Provider/多渠道配置隔离与表达力**（凭据安全、独立策略）、**WebUI 工程师体验**（Vite HMR、Markdown 预览、tooltip 一致性）。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 **High（安全）** | [#4784](https://github.com/HKUDS/nanobot/issues/4784) | `OpenAICompatProvider._setup_env()` 将 API key 写入全局 `os.environ`；gateway 类 provider 会**覆盖**先前值，非 gateway 类使用 `setdefault` 但仍污染进程环境。多 provider 混部场景下存在凭据泄露 | ❌ 仍 OPEN（自 2026-07-06） |
| 🟠 **Medium（功能失效）** | [#5237](https://github.com/HKUDS/nanobot/issues/5237) | MCP 工具将业务错误信封（`isError=False` 的 `{"code":404,...}`）当作成功，agent 持续等待直到 `tool_timeout` 触发，且无法识别真实失败原因 | ❌ 仍 OPEN |
| 🟠 **Medium（渠道失效）** | [#5247](https://github.com/HKUDS/nanobot/issues/5247) | Matrix bot 被邀请后 `_on_room_invite` 触发但 `join()` 静默失败，原因是 nio 的 `Api.join()` 发送空 body POST，Continuwuity homeserver 返回 `M_BAD_JSON` | ✅ 配套 fix PR [#5248](https://github.com/HKUDS/nanobot/pull/5248)（OPEN，待合并） |
| 🟡 **Low（已修）** | [#5235](https://github.com/HKUDS/nanobot/issues/5235) | Opus 5 配置因 `omit_temperature` 列表未包含 `opus-5` 而发送了已弃用的 temperature 参数 | ✅ fix PR [#5236](https://github.com/HKUDS/nanobot/pull/5236) 当日合并 |
| 🟡 **Low（已修）** | [#5223](https://github.com/HKUDS/nanobot/pull/5223)（wecom 文件名净化退化） | sanitization 把仅含点/空格/不安全字符的文件名清空，导致写入目标是目录而非文件 | ✅ 已关闭 |
| 🟡 **Low（已修）** | [#5222](https://github.com/HKUDS/nanobot/pull/5222)（Telegram 代码块语言标识） | `\w` 正则对 `c++`、`objective-c`、`html+django` 等语言标识截断，导致代码块显示损坏 | ✅ 已关闭 |
| 🟡 **Low（稳定性）** | [#5156](https://github.com/HKUDS/nanobot/pull/5156)（Telegram 长轮询静默卡死） | 路径上网络抖动后 polling 永久停滞但进程仍在且日志静默 | 🟡 OPEN，自 2026-07-29 |
| 🟡 **Low（轻回归）** | [#1776](https://github.com/HKUDS/nanobot/pull/1776)（Telegram group_mode 字段缺失） | Pydantic 模型缺少 `group_mode` 字段，导致配置静默忽略 | ⚠️ 已关闭但带 conflict 标签，可能需 rebase |

**总体评估**：当日 bug 报告以"渠道/集成边界条件"为主，未见核心 agent 循环或崩溃类问题。**唯一一个值得立刻拉响警报的是 #4784 凭据泄漏**，已开放近一个月仍无修复 PR。

---

## 6. 功能请求与路线图信号

- **[#5246](https://github.com/HKUDS/nanobot/issues/5246) — memory/ 目录 `.gitignore` 规则不完整**（OPEN）
  - `workspace/.gitignore` 写有 `!memory/` 与 `!memory/MEMORY.md`，但 `memory/.cursor` 与 `memory/history.jsonl` 仍处于未跟踪状态。enhancement 类，体积小、影响明确，**很可能在下一个 patch 版本顺手修复**。

- **[#5249](https://github.com/HKUDS/nanobot/pull/5249) — WebUI 视觉一致性重构**（OPEN, p2）
  - 引入约束性两级 elevation、扁平化 Skills/Channels、复用分段控件、移除持久化消息的回放动画、自动保存系统主题。同作者 chengyongru 近期已合入多条相关小 PR（#5240/#5241/#5243/#5244/#5245），**说明该方向是当前 WebUI 迭代主线**。

- **[#5184](https://github.com/HKUDS/nanobot/pull/5184) — Quick Chat 与 Temporary Chat**（OPEN, 带 conflict 标签）
  - 将 Quick Chat 提升为一等 WebUI 目的地（稳定 session 身份、复用线程/流式/渲染管线），并加入可选的连接级、内存内历史的 Temporary Chat。conflict 状态暗示需要先协调 WebUI 大改。**若 #5249 视觉重构合入，此 PR 需 rebase。**

- **[#5234](https://github.com/HKUDS/nanobot/pull/5234) — mst-python 元搜索 provider**（OPEN, p1, new-provider）
  - 多引擎聚合搜索（DDG/Google/Brave/Bing + RRF），对"研究型 agent"场景增益明显。P1 + 新 provider 标签双重信号，**进入下一发版的概率较高**。

- **[#4919](https://github.com/HKUDS/nanobot/pull/4919) — Telegram 自定义 Bot API base URL 与 header**（OPEN, 自 2026-07-14）
  - 实现企业网关/自托管 Bot API 部署需求，与 #4702 关联。积压三周，**可能在渠道类版本窗口中被吸收**。

- **[#5233](https://github.com/HKUDS/nanobot/pull/5233) — Mattermost 线程独立群组策略 + WebUI 暴露**（已关闭）
  - 该 PR 显示已关闭但无明确合并说明，**可能是被更大改版取代或拆解**。

---

## 7. 用户反馈摘要

- **多 Provider 凭据隔离痛点**（[#4784](https://github.com/HKUDS/nanobot/issues/4784)）：用户在测试/生产切换不同 LLM provider 时遭遇 key 互相污染，反映"同一进程内跑多 provider"是真实工程场景。
- **新模型时效性敏感**（[#5235](https://github.com/HKUDS/nanobot/issues/5235)）：Opus 5 发布后用户立刻在生产中撞到 temperature 弃用问题，说明社区跟得紧，**对首发日兼容性期望高**。
- **小众 homeserver 兼容性**（[#5247](https://github.com/HKUDS/nanobot/issues/5247)）：用户从主流 Synapse 切到 Continuwuity 后遇到 nio 空 body POST 兼容问题，说明生态多样化正在催生边缘场景。
- **MCP 错误处理透明度**（[#5237](https://github.com/HKUDS/nanobot/issues/5237)）：业务方把 HTTP 错误码塞进 200 响应的 `content` 里，agent 完全无感直至超时——**用户对"失败可见性"的呼声明确**。
- **WebUI 体验细节**（[#5240](https://github.com/HKUDS

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-05**
**数据来源：github.com/nousresearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 今日维持**极高的开发者活跃度**：过去 24 小时共 50 条 Issue 更新与 50 条 PR 更新，无版本发布。当日工作明显围绕三条主线展开——**prompt_cache_key 缓存作用域问题**（含多份 P0 级修复集群 PR #78959）、**cron lifecycle_guard 的稳定性修补**（NUL 路径、HOME 解析、`~/` 字面量误判等多个边界 bug 集中爆发）以及 **Telegram 适配器的"上帝文件"重构**（10,147 行的 adapter.py 被分解为 10 个 mixin）。整体来看，项目处于"密集治理"阶段：维护者正在系统性地清理历史上未收敛的边缘案例与设计债，PR 待合并池中有 44 条排队等待 review，建议关注维护者的合入节奏。

---

## 2. 版本发布

**无新版本发布。**

当前线上版本为社区 Issue #75791 中提及的 **v0.19.1**。建议关注本周末前是否会有 0.19.2 或 0.20.0 节点。

---

## 3. 项目进展

今日共 **6 条 PR 进入合并/关闭状态**（其中已关闭 6，待合并 44）。具有实质性进展：

| 编号 | 标题 | 状态 | 意义 |
|---|---|---|---|
| [PR #78866](https://github.com/nousresearch/hermes-agent/pull/78866) | refactor(telegram): shard adapter.py wave 1 | **CLOSED**（superseded）| 第一波 6,014 行被抽出 4 个 mixin，立刻被 [PR #79010](https://github.com/nousresearch/hermes-agent/pull/79010) 的"完整版重构"取代，标志着 Telegram 插件架构治理进入收官阶段。 |
| [PR #79008](https://github.com/nousresearch/hermes-agent/pull/79008) | fix(whatsapp): clear the typing indicator when a turn ends | **CLOSED**（duplicate）| 与 [#46343](https://github.com/nousresearch/hermes-agent/pull/46343) 重复，清理重复 PR。 |

其他 4 条关闭/合并 PR 未在数据样本前 20 条中显示。

**项目推进评估**：今日无新增"用户面向"的功能上线，主要成果是基础设施层的修缮（缓存作用域、Telegram 重构、生命周期守卫加固）。净推进量 = 多个 P0/P2 bug 的修复通路已建立，等候 review。

---

## 4. 社区热点

按评论数排名（数据样本 24h 活跃）：

| 排名 | 编号 | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|---|
| 1 | [#64182](https://github.com/nousresearch/hermes-agent/issues/64182) | Plugin Interface Expansion — community ideas | **21** | 0 | [link](https://github.com/nousresearch/hermes-agent/issues/64182) |
| 2 | [#64231](https://github.com/nousresearch/hermes-agent/issues/64231) | Lifecycle-event catalog, hook taxonomy, batch disposition of pending hook PRs | **17** | 0 | [link](https://github.com/nousresearch/hermes-agent/issues/64231) |
| 3 | [#34352](https://github.com/nousresearch/hermes-agent/issues/34352) | Solving the Multi-Tenant Hermes Problem | **14** | **2** | [link](https://github.com/nousresearch/hermes-agent/issues/34352) |
| 4 | [#16004](https://github.com/nousresearch/hermes-agent/issues/16004) | Configurable bounded auto-continue when max tool-call iterations reached | **9** | 1 | [link](https://github.com/nousresearch/hermes-agent/issues/16004) |
| 5 | [#54204](https://github.com/nousresearch/hermes-agent/issues/54204) | Allow moving/rescoping existing sessions across projects | **8** | **3** | [link](https://github.com/nousresearch/hermes-agent/issues/54204) |

**热点信号解读**：

1. **插件接口治理仍是社区第一关注点**——[#64182](https://github.com/nousresearch/hermes-agent/issues/64182) 与 [#64231](https://github.com/nousresearch/hermes-agent/issues/64231) 加起来共 38 条评论，指向同一核心问题：**大量挂起的 hook PR 因缺乏统一的生命周期事件目录和验收标准而无法合入**。维护者 teknium1 已经把这两条转为"待决策"状态，下一步大概率出现一波批量合入或批量关闭。
2. **多租户隔离是真实生产痛点**——[#34352](https://github.com/nousresearch/hermes-agent/issues/34352) 由 NimbleCoAI 提交且 👍=2，提到"已在生产环境运行修复方案数月"，反映 B 端/团队级用户对 Hermes 的真实诉求。这是一个**潜在的差异化卖点**，建议维护者加速回应。
3. **会话管理 UX 投诉集中**——[#54204](https://github.com/nousresearch/hermes-agent/issues/54204)（桌面端移动会话）👍=3，是今日最高赞新功能建议，强烈信号。

---

## 5. Bug 与稳定性

按 P 等级排序：

### 🔴 P0 — 关键路径风险

| 编号 | 标题 | 组件 | 是否有 fix PR |
|---|---|---|---|
| [#79017](https://github.com/nousresearch/hermes-agent/issues/79017) | prompt_cache_key 在 context-compression session rotation 后失去连续性 | OpenAI provider / caching | ✅ 由 [#78959](https://github.com/nousresearch/hermes-agent/pull/78959) 一并修复（同时也修了 #79012/#79013/#79014/#79015）|
| [#79012](https://github.com/nousresearch/hermes-agent/issues/79012) | Auxiliary Codex 调用仅基于内容生成 prompt_cache_key，无 session scope | agent / OpenAI provider | ✅ 同上 [#78959](https://github.com/nousresearch/hermes-agent/pull/78959) |
| [#79014](https://github.com/nousresearch/hermes-agent/issues/79014) | xAI Responses: top-level prompt_cache_key override 未传递到 extra_body | xAI provider | ✅ 同上 [#78959](https://github.com/nousresearch/hermes-agent/pull/78959) |
| [#77950](https://github.com/nousresearch/hermes-agent/issues/77950) | Root `overrides` 锁定 brace-expansion 到有漏洞的 5.0.8（GHSA-rgw5-rvv9-x895）| dependencies / 安装更新 | ⚠️ 已有 [#79021](https://github.com/nousresearch/hermes-agent/issues/79021) 跟进但尚未合并 |

> **观察**：以上 4 个 P0 cache-scoping 问题均由 [#78959](https://github.com/nousresearch/hermes-agent/pull/78959) 单 PR 一揽子处理，是今日最重要的修复合并候选。**强烈建议 review 该 PR**。

### 🟠 P2 — 显著体验问题

| 编号 | 标题 | 组件 | 是否有 fix PR |
|---|---|---|---|
| [#75791](https://github.com/nousresearch/hermes-agent/issues/75791) | Win11 25H2: `hermes dashboard --status` 误报无 dashboard | CLI / Windows | ❌ 无 |
| [#77047](https://github.com/nousresearch/hermes-agent/issues/77047) | read_file 把 CJK UTF-8 误判为二进制（采样切到多字节字符中间）| tool/file | ❌ 无 |
| [#53328](https://github.com/nousresearch/hermes-agent/issues/53328) | Desktop 启动扫描整个 home 目录找 git 仓库 | desktop | ⚠️ [#64615](https://github.com/nousresearch/hermes-agent/issues/64615) 提供配置开关但仍 OPEN |
| [#75801](https://github.com/nousresearch/hermes-agent/issues/75801) | OpenCode Go gpt-5.6-luna 缺 finish_reason → 桌面端吞掉流式回答 | agent / TUI / streaming | ❌ 无 |
| [#78406](https://github.com/nousresearch/hermes-agent/issues/78406) | openai-api transport 不重建导致 RemoteProtocolError 高峰 161 次/天 | agent / openai | ❌ 无 |
| [#78942](https://github.com/nousresearch/hermes-agent/issues/78942) | lifecycle_guard 被 NUL 字节路径击穿（#76762 修复不完整）| cron / terminal | ✅ [#79019](https://github.com/nousresearch/hermes-agent/pull/79019) |
| [#78980](https://github.com/nousresearch/hermes-agent/issues/78980) | lifecycle_guard 对含 `~/` 字面量的非 .py Python 脚本误报 | cron / terminal | ✅ [#79020](https://github.com/nousresearch/hermes-agent/pull/79020) |
| [#78974](https://github.com/nousresearch/hermes-agent/issues/78974) | HOME 无法解析时 lifecycle_guard 抛 RuntimeError 全局击穿终端 | cron / terminal | ❌ 无 |
| [#78975](https://github.com/nousresearch/hermes-agent/issues/78975) | Feishu cron 投递 100% 失败 [99992402]：receive_id_type="thread_id" 非法 | Feishu / cron | ❌ 无 |
| [#78948](https://github.com/nousresearch/hermes-agent/issues/78948) | Auxiliary 客户端把主 provider 模型发给自定义 fallback → 404 | agent / config | ❌ 无 |

### 🟡 P3 — 较小问题

- [#78122](https://github.com/nousresearch/hermes-agent/issues/78122) cron max_in_progress 退化为按板（board）维度而非 gateway-wide
- [#78514](https://github.com/nousresearch/hermes-agent/issues/78514) Feishu 多 profile 模式下消息去重独立，重放被处理两次
- [#78847](https://github.com/nousresearch/hermes-agent/issues/78847) Desktop 发送文件夹附件 + 消息 → 路径被消息覆盖
- [#79013](https://github.com/nousresearch/hermes-agent/issues/79013) Codex headers 与 body 的 cache key 不一致（已涵盖于 #78959）

**关键观察**：
1. **cron lifecycle_guard 已成为今日最不稳定的模块**——至少 4 个相关 bug 集中爆发（#78942/#78980/#78974/#79019），其中两条已有快速修复 PR。维护者应优先审视 [#76762](https://github.com/nousresearch/hermes-agent/issues/76762) 的修复完整性假设。
2. **Windows 平台稳定性需要专题关注**——今日 Windows 相关 bug 占 P2 的相当比例（#75791、#46199、#79018 试图解决 Windows venv blocker）。
3. **跨会话数据一致性设计债显现**——prompt_cache_key、Feishu 重放、cron 锁三处问题同根：分布式/多会话场景下"作用域"概念没有 L1-L4 级别的统一抽象。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 信号强度 | 是否合并在即 |
|---|---|---|---|
| [#78791](https://github.com/nousresearch/hermes-agent/issues/78791) | Telegram Feature Parity & Alignment Campaign（Bot API 10.2）| 🔥🔥🔥 meta-issue + 跟进 PR | ✅ 已有 [#79010](https://github.com/nousresearch/hermes-agent/pull/79010) 进入 review |
| [#64615](https://github.com/nousresearch/hermes-agent/issues/64615) | 关闭自动项目发现 | 🔥🔥 与 #53328 联动，长期高分 | ❌ 无独立 fix PR |
| [#16004](https://github.com/nousresearch/hermes-agent/issues/16004) | 可配 bounded auto-continue | 🔥🔥🔥 9 条评论，多生产用户 | ❌ 无 fix PR |
| [#78997](https://github.com/nousresearch/hermes-agent/issues/78997) | Desktop 状态栏显示订阅/token 用量 | 🔥🔥 重度用户反馈 | ❌ 无 |
| [#46199](https://github.com/nousresearch/hermes-agent/issues/46199) | Windows Desktop 便携/隔离部署指南 | 🔥🔥 安全敏感用户咨询 | ⚠️ 类型为 docs |
| [#64182](https://github.com/nousresearch/hermes-agent/issues/64182) + [#64231](https://github.com/nousresearch/hermes-agent/issues/64231) | 插件接口扩展与 hook 目录 | 🔥🔥🔥🔥 38 评论 | ⚠️ 等待 maintainer 批量决策 |

**路线图预测**：
- **短期（≤1 周）**：[#78959](https://github.com/nousresearch/hermes-agent/pull/78959) cache-scoping 一揽子修复、Telegram adapter 重构 [#79010](https://github.com/nousresearch/hermes-agent/pull/79010)、多个 lifecycle guard 修补 PR。这些都是已具备合并条件的"清账"工作。
- **中期（≤1 月）**：plugin interface expansion 治理（[#64182](https://github.com/nousresearch/hermes-agent/issues/64182)/[#64231](https://github.com/nousresearch/hermes-agent/issues/64231)）若维持 momentum，可能演变为 0.20.0 的核心变化。
- **需求缺口**：Telegram 元运动 [#78791](https://github.com/nousresearch/hermes-agent/issues/78791) 暴露出的"平台对等"压力表明平台插件质量分化严重，建议专门的平台负责人制度。

---

## 7. 用户反馈摘要

从 Issues 评论/描述中提炼的真实声音：

1. **"我们已在生产环境跑了数月"**——[#34352](https://github.com/nousresearch/hermes-agent/issues/34352) NimbleCoAI 表明 Hermes 已经被多团队生产部署，多租户隔离不是"也许有用户会用到"，而是"已有人在用"。**这是商业化潜力最明确的信号。**

2. **"安装过程中写全局 PATH/持久化注册表"**——[#46199](https://github.com/nousresearch/hermes-agent/issues/46199) forhonor16309 表达的安全敏感企业用户诉求：希望有官方支持的"便携式/隔离式"部署选项。**该细分场景在欧美企业 IT 部门是合规硬需求。**

3. **"开着桌面端写代码时经常需要查用量"**——[#78997](https://github.com/nousresearch/hermes-agent/issues/78997) ballz921 描述了重度 Slack + Desktop 长会话场景的 cost observability 痛点。**token 用量实时可见应成为桌面端 P1 功能。**

4. **"使用 Claude/Codex CLI 时 hermes dashboard 状态误报"**——[#75791](https://github.com/nousresearch/hermes-agent/issues/75791) tsktech 表明 Windows 11 25H2 上 dashboard 状态查询不可信，影响用户对系统状态的判断。

5. **"会话总是不能跨项目移动"**——[#54204](https://github.com/nousresearch/hermes-agent/issues/54204) karagos 👍=3，说明这是用户反复触发但无解的痛点。

6. **"修复 npm 漏洞的 doctor 命令自己也修不动"**——[#79021](https://github.com/nousresearch/hermes-agent/issues/79021) 用户对自检工具失去信心，这是开发者体验的负面信号。

**整体满意度信号**：无明显"我不再用了"式的抱怨，但也**几乎没有"✅ 解决了"** 的反馈——侧面印证项目处于"密集修缮"阶段，用户期望尽快见到 0.19.2 或 0.20.0 释放修复。

---

## 8. 待处理积压（提醒维护者）

按"创建日期距今 + 重要性"排序，建议优先响应：

| 编号 | 创建日期 | 已存续 | 标题 | 风险标注 |
|---|---|---|---|---|
| [#16004](https://github.com/nousresearch/hermes-agent/issues/16004) | 2026-04-26 | **~100 天** | Configurable bounded auto-continue | needs-decision |
| [#46773](https://github.com/nousresearch/hermes-agent/pull/46773) | 2026-06-15 | **~50 天** | TUI parseRichMarkup 多色段合并 PR | blast-contained, 仍未合 |
| [#41290](https://github.com/nousresearch/hermes-agent/pull/41290) | 2026-06-07 | **~60 天** | 扫描 skills index 描述做 prompt injection 防护 | sweeper:risk-security-boundary, **

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-08-05**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**低位**。Issue 端有 2 个仍处于开放状态的 Bug（Web UI 输入卡顿、MCP 连接失败导致 agent 循环挂起），PR 端有 2 个等待合并的功能增强。**值得警惕的是**：2 个具有实际价值的 PR（OAuth 登录健壮性修复 #3280、Anthropic prompt cache token 捕获 #3251）因长期无活动被 Stale Bot 自动关闭，**未经过人工评审即流失**，反映出维护者响应节奏偏慢。社区整体处于"问题已提、PR 已挂、但审阅停滞"的状态，未见当日合并的新功能或修复。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**今日无实质性合并**。两条 PR 被自动关闭（stale 状态），并未推进项目功能：

- [#3280](https://github.com/sipeed/picoclaw/pull/3280) **fix(auth): make browser OAuth login survive real-world callback conditions** — 已 **stale 关闭（未合并）**。该 PR 解决了无头/远程环境下 OAuth 回调失败的 4 类真实场景问题，属于用户痛点型修复，但因作者 14 天内无更新被自动关闭。**建议维护者评估后重新打开或由社区接手**，这是直接的体验改善。
- [#3251](https://github.com/sipeed/picoclaw/pull/3251) **fix(providers): capture the prompt cache token usage in Anthropic providers** — 已 **stale 关闭（未合并）**。该 PR 为 Anthropic 两个 provider 增加 cache token 计量能力，对成本可观测性有显著价值。值得注意的是 [#3317](https://github.com/sipeed/picoclaw/pull/3317) 在做类似但更聚焦的工作（DeepSeek/Cloudflare 路径），说明该方向的需求真实存在，#3251 的关闭属于社区资源浪费。

**项目今日净前进步数：接近 0**，甚至因 stale 关闭而**负向**。

---

## 4. 社区热点

按评论数与互动量排序：

| 排名 | 编号 | 标题 | 评论 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#3182](https://github.com/sipeed/picoclaw/issues/3182) | [BUG] Android version — 无法启动服务 | 6 | 0 | 已 stale 关闭 |
| 2 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | [BUG] Web UI chat input is very laggy when history has a little bit long | 3 | 1 | 开放中 |
| 3 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | [BUG] MCP server connection fail 导致 agent loop hang | 3 | 1 | 开放中 |

**诉求分析**：
- **Android 端可用性**是历史长尾痛点（#3182 跨 40 天），社区对移动端能力有真实需求，但官方维护者长期未给出明确路线图说明。
- **Web UI 性能**（#3281）与** MCP 容错**（#3269）是当前产品形态下用户最容易撞到的两类问题，且都影响"核心交互闭环"——一个卡输入、一个直接卡死对话。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 影响核心功能不可用
- **[#3269 MCP server connection fail 导致 agent loop hang](https://github.com/sipeed/picoclaw/issues/3269)** — MCP 连接失败时整个 agent 循环挂死，聊天界面停止响应。**影响范围**：所有启用 MCP 的用户；**复现条件**：仅需一个 MCP server 配置异常即可触发；**是否有 fix PR**：否。**建议**：优先在 agent loop 增加 MCP 调用的超时与错误兜底。

### 🟠 P1 — 显著影响日常使用体验
- **[#3281 Web UI chat input laggy with long history](https://github.com/sipeed/picoclaw/issues/3281)** — 长历史会话下输入框卡顿。**影响范围**：所有使用 Web UI 进行多轮对话的用户；**复现条件**：单会话历史消息量稍多即可触发；**是否有 fix PR**：否。**建议**：排查前端重渲染策略（可能未做虚拟列表/节流）。

### 🟡 P2 — 平台可用性问题
- **[#3182 Android version 无法启动服务](https://github.com/sipeed/picoclaw/issues/3182)** — 已被 stale 关闭，但用户场景真实存在。若官方不维护 Android，建议在 README/issue 中明确说明"Android 端当前状态"以管理预期。

---

## 6. 功能请求与路线图信号

今日开放的两条 PR 暗示了用户对**搜索能力扩展**与**成本可观测性**的诉求：

- **[#3299 Add native Exa web search provider](https://github.com/sipeed/picoclaw/pull/3299)** — 新增 Exa 作为 `tools.web` 原生 provider，支持时间范围过滤与 highlights。**进入下一版本的可能性：中高**。PicoClaw 已有 web search 抽象层，新增 provider 属于增量扩展，集成成本低，与现有架构契合。
- **[#3317 feat(providers): log prompt cache tokens in LLM response debug output](https://github.com/sipeed/picoclaw/pull/3317)** — 在网关 debug 日志中输出 prompt cache token。**进入下一版本的可能性：高**。该 PR 改动小、价值直接，且与已关闭的 #3251 同属一个方向，说明这是社区共识型需求，建议维护者优先 review。

---

## 7. 用户反馈摘要

从开放与近期 Issue 评论中提炼：

- **真实痛点一**：Web UI 在长上下文下前端性能不足（#3281），用户期望"至少输入不卡"，对响应延迟敏感度高。
- **真实痛点二**：MCP 容错缺失（#3269），用户期望"某个工具挂了不要把我整个对话搞死"，这是 AI Agent 类产品的基本可靠性预期。
- **真实痛点三**：OAuth 登录在 headless / 远程环境下频繁失败（#3280 PR 描述中体现），用户体验"好不容易点了同意结果又要重来"。
- **使用场景**：从 Issues 可看出 PicoClaw 的实际使用方既有通过 Web UI 进行多轮对话的普通用户，也有重度配置 MCP、自定义 provider 的高级用户。后者对成本可观测性（cache token、日志）有明确需求。
- **满意度信号**：暂未见明显的"感谢/很好用"类评论，整体社区情绪偏中性偏抱怨，处于"能跑但有摩擦"阶段。

---

## 8. 待处理积压与维护者提醒

以下条目存在**响应延迟**或**流失风险**，建议维护者本周内关注：

| 编号 | 类型 | 年龄 | 风险 |
|---|---|---|---|
| [#3182](https://github.com/sipeed/picoclaw/issues/3182) | Bug | 40 天 | 已 stale 关闭，用户未获结论，可能转向 fork 或弃用 |
| [#3269](https://github.com/sipeed/picoclaw/issues/3269) | Bug（P0） | 16 天 | 高严重度但无维护者接手信号 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 15 天 | 高频场景，无 fix PR |
| [#3280](https://github.com/sipeed/picoclaw/pull/3280) | PR（已 stale 关闭） | 15 天 | 实质性修复已流失，建议 re-open 或由他人 cherry-pick |
| [#3251](https://github.com/sipeed/picoclaw/pull/3251) | PR（已 stale 关闭） | 24 天 | 实质性修复已流失，与 #3317 方向重叠，建议合并思路 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | PR（开放） | 10 天 | 等 review |
| [#3317](https://github.com/sipeed/picoclaw/pull/3317) | PR（开放） | 1 天 | 新 PR，建议优先响应以建立作者信心 |

**健康度评估**：⚠️ **中等偏下**。社区仍在产出有价值的 Issue 和 PR，但维护侧的 review 与 stale 管理机制正在消耗社区贡献热情。建议：
1. 重新评估 #3280、#3251 是否值得 reopen 或合入；
2. 为 #3269 标记 `good first issue` 或 `help wanted`，吸引社区贡献；
3. 优先 review #3317（小改动高价值，示范效应明显）。

---

*报告生成时间：2026-08-05 | 数据来源：GitHub REST API (sipeed/picoclaw)*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**报告日期：2026-08-05**

---

## 1. 今日速览

NanoClaw 今日呈现"PR 主导、Issue 静默"的开发态势：过去 24 小时共有 5 条 PR 更新（4 条待合并、1 条关闭），Issues 端无新增也无关闭，无新版本发布。整体活跃度中等偏低，仓库的注意力集中在两条并行线路上——一是 Discord 渠道的稳定性修复（PR #3185），二是新渠道 Dial（SMS + AI 语音通话）的功能落地（PR #3041、#3050）；此外有一条关于定时任务时间字段的修复（PR #3154）已完成关闭，说明核心调度模块在小步推进。

---

## 2. 版本发布

今日无新版本发布，本节略过。

---

## 3. 项目进展

过去 24 小时仅完成 1 条 PR 合并/关闭，整体推进节奏温和：

- **PR #3154（已关闭）** — `fix(agent-runner): give scheduled tasks current run time`
  - 作者：Koshkoshinsk，更新于 2026-08-04
  - 改动核心：将任务的 `time` 字段从原始创建时间改为基于 `process_after` 的"下一次执行时刻"，并新增任务专属的 `current_time`（含星期字段、使用 agent-group 时区），保证 agent 在被触发时拿到当前时刻而非历史时间戳。
  - 链接：https://github.com/qwibitai/nanoclaw/pull/3154
  - 意义：这条修复补齐了调度系统在"按时间触发"语义上的一个长期缺口，对定时任务、日程类技能的可预期性影响明显，属于核心模块稳定性改进。

此外，4 条仍处于 OPEN 状态的 PR（#3186、#3185、#3041、#3050）将在"功能请求"与"Bug"章节进一步展开。

---

## 4. 社区热点

**数据局限性提示**：今日所有 Issues/PR 的评论数与点赞数（reactions）在抓取数据中均显示为 `undefined`，无法精确量化热度排序。以下根据"最近更新时间 + 创建时间"的可见信号列出值得关注条目：

- **PR #3185（Discord 审批按钮解析 Bug）** — 8 月 4 日创建并同日更新，描述直指"每次点击 Approve 都会被拒"，这种"用户动作无效"类问题通常在社区论坛或 Discord 反馈最强烈，建议关注后续 review 速度。
- **PR #3041 + #3050（Dial 渠道集成姊妹 PR）** — 创建于 7 月 14 日，跨度已达 3 周仍 OPEN，反映维护者对多渠道接入的扩展节奏较为审慎；从社区角度看，"新增通讯渠道"类需求在 AI Agent 领域往往能激起较高关注。

建议维护者补充对 PR 的 reactions / 评论统计通道，以便后续日报更准确地刻画社区热点。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | 条目 | 状态 | 说明 |
|---|---|---|---|
| 🔴 高 | [PR #3185](https://github.com/qwibitai/nanoclaw/pull/3185) Discord webhook `custom_id` `\n` 分隔符 Bug | OPEN（已有 fix PR） | 在 Discord raw HTTP-interaction（webhook）路径下，Chat SDK bridge 在解码 `custom_id` 时按 `:` 拆分时残留 `\n`，导致 `ask_question` / 审批卡片的按钮一律指向错误的选项，**实际表现为"无论用户点 Approve 还是 Reject，结果都是 Reject"**。该 Bug 影响所有通过 webhook 接入的 Discord 交互场景，等同于审批流被完全打瘫。fix 已就位，待 review/merge。 |
| 🟡 中 | [PR #3154](https://github.com/qwibitai/nanoclaw/pull/3154) 定时任务 `time` 字段语义错误 | 已关闭 | agent 收到的任务时间戳是创建时间而非"本次触发时刻"，会导致按当前时间派生的逻辑（日程判断、星期判断、相对时间表述）全部偏差。今日已通过 PR 关闭处理。 |

需要注意的是：今日 Issues 端无任何新增 Bug 报告，**不代表 Discord webhook 之外无新缺陷**，可能是用户直接走 PR 修复通道而非 Issue 反馈。

---

## 6. 功能请求与路线图信号

虽然没有直接从 Issues 提取的需求列表，但从 OPEN PR 可读出几条明确的功能扩张信号：

1. **Dial 渠道接入**（双 PR 协同）
   - [PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041) — `feat(channels): add Dial channel adapter (SMS + AI voice calls)`：在 channels 层增加 SMS 与 AI 语音通话适配器，属于源头侧改动 + SKILL.md。
   - [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050) — `feat(setup): add Dial to the channel picker + wizard/skills (runChannelSkill model)`：把 Dial 接入 setup 向导、渠道选择器和 runChannelSkill 模型。
   - **路线图含义**：这两条 PR 一同落地，意味着项目正在把"AI Agent 可达的交互形态"从 IM / Webhook 扩展到 **电信级语音 + 短信**，是多渠道战略的一记明确信号。考虑到创建日期已是 7 月 14 日、跨度 3 周仍未 merge，**有较高概率被打包进下一个 minor 版本作为重点功能**。

2. **Skill 能力边界重构**（PR #3186）
   - [PR #3186](https://github.com/qwibitai/nanoclaw/pull/3186) — `refactor: add host seams for skill-owned capabilities`：为 skill 拥有的能力插入 host seams，属于架构层重构。
   - **路线图含义**：通常此类 PR 是为了支撑"skill 可以拥有更复杂宿主能力（如拨号、付费、定时触发）"而做的解耦，与 PR #3041/#3050 的渠道扩张节奏一致，暗示下一个版本会有更模块化的能力授权模型。

---

## 7. 用户反馈摘要

**数据局限性提示**：今日 Issues 端 0 条更新，且 5 条 PR 的评论字段全部为空（`undefined`），因此**缺少可用的用户原声评论**。从 PR 文本中可推断的隐含反馈信号：

- **Discord 用户体感差**：PR #3185 的描述"every approval is rejected even when the user clicks Approve"是典型的"用户动作得不到预期反馈"类痛点，可推断受影响用户在最近数日内对该渠道的交互体验有较强不满，但尚无对应 Issue 留存痕迹（建议维护者主动建一个 tracking issue 引导用户反馈）。
- **定时任务语义不一致**：PR #3154 暗示有用户或内部测试发现 agent 接收到的时间字段与"实际触发时刻"不符，影响基于当前时间的决策逻辑。该问题已被修复并合并。

---

## 8. 待处理积压

按"创建时间最早 → 最新"排序，重点提醒维护者关注的 OPEN 条目：

| 序号 | 条目 | 创建日期 | 距今 | 风险点 |
|---|---|---|---|---|
| 1 | [PR #3041](https://github.com/qwibitai/nanoclaw/pull/3041) feat: Dial channel adapter | 2026-07-14 | ~22 天 | 与姊妹 PR #3050 互相依赖，长期 OPEN 容易产生 merge conflict，建议尽快联调合并 |
| 2 | [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050) feat: Dial setup / wizard | 2026-07-14 | ~22 天 | 同上，且依赖 #3041 的 adapter 接口稳定 |
| 3 | [PR #3186](https://github.com/qwibitai/nanoclaw/pull/3186) refactor: host seams | 2026-08-04 | 1 天 | 重构类 PR 建议优先 review，避免与 #3041/#3050 改动交叉 |
| 4 | [PR #3185](https://github.com/qwibitai/nanoclaw/pull/3185) fix: Discord webhook `\n` | 2026-08-04 | 1 天 | 🔴 高严重度 Bug，建议 24 小时内合入 |

**特别提醒**：PR #3041 与 #3050 已积压 3 周以上，对于还在迭代中的渠道功能而言节奏偏慢，存在社区贡献者流失风险。

---

### 项目健康度评估（基于可见数据）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 24 小时仅 5 条 PR 更新，0 条 Issue，温和但偏静默 |
| 响应及时性 | ⭐⭐☆☆☆ | 有 3 周未合入的 OPEN PR，未见维护者评论 |
| Bug 处理 | ⭐⭐⭐⭐☆ | 关键 Discord Bug 当日已有 fix PR，调度时间 Bug 已合入 |
| 功能推进 | ⭐⭐⭐⭐☆ | 渠道扩张方向明确（Dial SMS/语音），架构解耦同步进行 |
| 社区透明度 | ⭐☆☆☆☆ | 缺少评论/reactions 数据，无法有效度量真实社区情绪 |

**总体判断**：仓库处于"低噪音、平稳推进"状态，但**长尾 PR 积压**与**社区反馈通道缺失**是值得维护者后续关注的两个短板。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报

**日期：** 2026-08-05
**数据来源：** GitHub (github.com/nullclaw/nullclaw)
**报告周期：** 过去 24 小时

---

## 1. 今日速览

NullClaw 今日整体活跃度**偏低**，24 小时内仅有 1 条 PR 处于待合并状态，无新增或活跃的 Issue，也无新版本发布。项目处于**平稳迭代期**，生态扩展工作仍在持续但节奏放缓。唯一的进展围绕 xAI Grok CLI 提供商的对接，表明项目仍在积极拓展多模型/多 CLI 后端的兼容性。整体而言项目维持健康，未出现异常停滞或紧急维护信号。

---

## 2. 版本发布

⚠️ **无新版本发布。**

过去 24 小时内未检测到任何 Release 标签变动。如需了解历史版本，请前往 [Releases 页面](https://github.com/nullclaw/nullclaw/releases) 查看。

---

## 3. 项目进展

今日**无 PR 合并/关闭**。

唯一活跃的 PR #981 仍处于 OPEN 状态，尚未被维护者审阅合并。该 PR 自 7 月 29 日创建，8 月 4 日最后更新，已停留超过 7 天但仅有 0 个 👍，审阅进程明显滞后。建议维护者及时响应，避免贡献者流失。

---

## 4. 社区热点

| 排名 | 议题 | 类型 | 热度 | 链接 |
|------|------|------|------|------|
| 1 | feat(provider): add grok-cli provider for xAI Grok CLI | PR（待合并） | 👍 0 · 评论未统计 | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) |

**诉求分析：**
贡献者 valonmulolli 提出将 xAI 官方的 `grok` CLI 工具作为可选 Provider 接入 NullClaw，沿用现有的 `codex-cli` / `gemini-cli` / `claude-cli` 模式（即每次请求通过 spawn 一个子进程调用外部 CLI）。这一诉求反映出 NullClaw 正系统性地打造一个 **CLI 后端抽象层**，让用户能灵活复用本地已安装的各种 AI 命令行工具作为 Provider，而不必依赖直接的 API Key，体现"无依赖/本地优先"的设计哲学。

---

## 5. Bug 与稳定性

🟢 **今日无新增 Bug 报告。**

- 崩溃/P0 级问题：0
- 回归性问题：0
- 待修复 Bug Issue：0

项目在稳定性维度上保持良好记录，无未处理的紧急缺陷。

---

## 6. 功能请求与路线图信号

**潜在路线图信号：**

| 信号 | 来源 | 优先级推断 |
|------|------|------------|
| 增加 grok-cli Provider | [PR #981](https://github.com/nullclaw/nullclaw/pull/981) | 中等 — 扩展可选生态，非核心 |
| 系统化构建 CLI-based Provider 适配器集群（已涵盖 codex/gemini/claude/grok） | 综合趋势 | **高** — 显然是项目当前路线图方向 |

**判断：** `grok-cli` 作为 xAI 生态的官方 CLI，是该 Provider 矩阵的自然补全。被纳入下一版本的**可能性较高**（假设 PR 通过审查），但由于热度较低（0 👍），也可能在下一版本被推迟或要求重构。

---

## 7. 用户反馈摘要

今日 Issues 为 0，**暂无来自终端用户的直接反馈信号**。仅有的活跃贡献者是开发性质的 PR 作者 valonmulolli。从侧面可推断：

- ✅ **积极信号：** 项目设计扩展性良好，足以吸引外部开发者按既有模式贡献新 Provider。
- ⚠️ **潜在风险：** 缺乏 Issue 互动可能意味着用户使用门槛存在、社区支持渠道（Discord/Discussion）较活跃而 GitHub Issue 较少，亦或真实用户基数仍偏小。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 停滞时间 | 链接 |
|------|------|------|----------|------|
| 待合并 PR | #981 | feat(provider): add grok-cli provider for xAI Grok CLI | ≥ 7 天 | [查看](https://github.com/nullclaw/nullclaw/pull/981) |

**维护者提醒：**
- 🔴 [PR #981](https://github.com/nullclaw/nullclaw/pull/981) — 创建于 2026-07-29，至今未有任何评审意见或点赞。建议维护者在 48 小时内给出 code review 反馈或关闭原因，否则可能影响贡献者的活跃意愿。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐☆☆☆ | 仅 1 条 OPEN PR，无 Issue 互动 |
| 响应速度 | ⭐⭐☆☆☆ | PR #981 已悬置逾 7 天 |
| 代码质量/设计一致性 | ⭐⭐⭐⭐☆ | 新 PR 严格遵循现有模式，扩展性良好 |
| 版本发布节奏 | ⭐⭐⭐☆☆ | 今日无版本变动，需结合历史数据判断 |
| 社区贡献意愿 | ⭐⭐⭐☆☆ | 有外部贡献但热度衰减 |

**总体评价：** NullClaw 处于**平稳维护期**，架构清晰利于扩展，但需要维护者投入更多审阅精力以推动生态迭代。

---

*报告生成时间：2026-08-05 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-08-05

## 1. 今日速览

IronClaw 仓库过去 24 小时活跃度保持高位，**50 条 Issue 更新（38 新增/活跃，12 关闭）与 50 条 PR 更新（32 待合并，18 已合并/关闭）双线并行**，但**无新版本发布**。当前主线工作围绕 **v1.1.0-rc.1 发布** 与 **Reborn 目标架构落地** 两条主线推进：前者聚焦 1.0.0-rc.1 → 1.1.0-rc.1 的无损启动迁移、Wasmer WASM 沙箱硬化、Windows 发布预检；后者集中执行 Wave 0–4 重构收尾与"门控执法"补丁。整体节奏密集，**已关闭的两个 v1.1.0 Epic（#6284、#6524）说明错误恢复与测试平台两大支柱已阶段性封口**，但仍有约 8 条 P0/P1 级别的 Bug 与稳定性 Issue 待修复。

---

## 2. 版本发布

**今日无新版本发布。** 

待发布的候选版本为 `ironclaw-v1.1.0-rc.1`，相关工作集中在 PR #7198（无损迁移）、PR #7048（WASM 诊断清洗）、PR #7029（恢复持久化交付声明）等；#5598 bot 自动生成的发布 chore 仍处于 OPEN 状态，表明新版本切割尚未触发。

---

## 3. 项目进展

今日共有 **18 条 PR 关闭/合并**，其中多项为关键质量与可发布性提升：

| PR | 说明 | 影响 |
|---|---|---|
| [#7167](https://github.com/nearai/ironclaw/pull/7167) | 修复 bin-only crate 的 per-package clippy 报错（`--lib` 在纯二进制包上硬失败），并对 `.gitignore` 做分类 | 解决 [Issue #7119](https://github.com/nearai/ironclaw/issues/7119)，让 `Code Style` 检查从"main 红"变为可执行 |
| [#7161](https://github.com/nearai/ironclaw/pull/7161) | WS10：将响亮的路径键控门控转为清单键控（inventory keying） | 防止 `git mv` 期间静默失效，确保重构期仍有真实护栏 |
| [#7160](https://github.com/nearai/ironclaw/pull/7160) | WS3：lane 使用窄端口 reserve/reconcile/release，丢弃 `ironclaw_resources` 在 MCP/Sandbox 中的依赖 | 推进架构收敛，关闭 [#7067](https://github.com/nearai/ironclaw/issues/7067) |
| [#7156](https://github.com/nearai/ironclaw/pull/7156) | 执法收紧：同层边清单、composition 绝对 LOC 上限、D-E 厂商清点、棘轮松弛（聚合 #7149/#7150/#7151/#7147） | 每个门控都做了"破坏性测试 + 合法用例负向测试"，CI 不再有"绿色但无意义"的假阳性 |
| [#7197](https://github.com/nearai/ironclaw/pull/7197) | Windows 预检：传递身份变量到 release smoke | 修复 `USERNAME is unset` 阻断 Windows 发布 |
| [#7200](https://github.com/nearai/ironclaw/pull/7200) | Windows：阻止 `icacls` 写到 CLI stdout | 第四个 Windows 发布阻断缺陷被清除 |

整体看，**Reborn 重构已从"模块移动"阶段转入"门控执法 + 上游生态硬化"阶段**，CI 红绿信号从此具备语义。

---

## 4. 社区热点

按评论数排序的活跃讨论（均集中在 v1.1.0 路线图与质量治理）：

| 序号 | Issue / PR | 评论 | 核心诉求 |
|---|---|---|---|
| 1 | [#6284](https://github.com/nearai/ironclaw/issues/6284) **(已关闭)** | 15 | 错误可恢复性终局：模型必须能自 100% 错误中恢复，并附带可操作的诊断。这是 v1.1.0 旗舰 Epic |
| 2 | [#6524](https://github.com/nearai/ironclaw/issues/6524) **(已关闭)** | 4 | 密封式能力与用户旅程测试平台 —— 机械回答"每个 capability 是否有确定性覆盖" |
| 3 | [#7119](https://github.com/nearai/ironclaw/issues/7119) **(已关闭)** | 4 | 包集依赖的 clippy 红线，已通过 #7167 修复 |
| 4 | [#6752](https://github.com/nearai/ironclaw/issues/6752) | 3 | 实例删除后"Loading your agents..."卡住（来自 Champions 反馈） |
| 5 | [#7145](https://github.com/nearai/ironclaw/issues/7145) | 3 | extension_host → loops 重分层（按四端口残差而非文件数） |
| 6 | [#7194](https://github.com/nearai/ironclaw/issues/7194) | 2 | Slack 共享频道作为出站投递目标（影响交付层） |
| 7 | [#7193](https://github.com/nearai/ironclaw/issues/7193) | 2 | 自动化"立即运行"（run-now），贯通触发域/产品面/能力/WebUI |
| 8 | [#7192](https://github.com/nearai/ironclaw/issues/7192) | 2 | WebUI 乐观用户消息错位（渲染在 agent 输出下方） |
| 9 | [#7191](https://github.com/nearai/ironclaw/issues/7191) | 2 | `builtin.time` 相对偏移算术与类型化输入错误 |
| 10 | [#6565](https://github.com/nearai/ironclaw/issues/6565) | 2 | Epic：可靠的 Skill 发现 / 路由 / 激活（v1.1.0 旗舰） |

**热点分析：** v1.1.0 的两大 Epic（错误恢复、Skill 可靠性）占据约 60% 的高评论密度，反映社区对**模型自愈能力**与**技能系统可信度**的强烈关注 —— 这也是当前 AI Agent 产品的关键差异化指标。

---

## 5. Bug 与稳定性

按严重程度排序：

### 高严重度
- **[#6752](https://github.com/nearai/ironclaw/issues/6752) 实例删除失败 + 重登"Loading your agents..."卡死**（v1 上线清单）— Champions 反馈，**当前无 fix PR**，影响用户体验的破坏性 bug。
- **[#7119](https://github.com/nearai/ironclaw/issues/7119) Code Style clippy 包集依赖红线** — 任何只改 `ironclaw_reborn_cli` 的 PR 都会假红，**已通过 [#7167](https://github.com/nearai/ironclaw/pull/7167) 修复**（已合并）。

### 中严重度
- **[#7192](https://github.com/nearai/ironclaw/issues/7192) WebUI 乐观用户消息锚点错位**（channel/web scope）— 用户消息渲染在 agent 之后，破坏会话顺序感。
- **[#7191](https://github.com/nearai/ironclaw/issues/7191) `builtin.time` 不支持相对偏移且错误信息不透明** — 生产线程复现：构建"过去 24 小时"GitHub→Slack 报告时失败。
- **[#7103](https://github.com/nearai/ironclaw/issues/7103) 延迟追踪字段即使关闭也会被计算**（编码工具 JSON 字节数）— 性能 regression risk。
- **[#7104](https://github.com/nearai/ironclaw/issues/7104) 提取器把"无文本"上报为 Failed 而非 Empty** — 模型被告知错误语义，导致下游决策偏差。
- **[#7146](https://github.com/nearai/ironclaw/issues/7146) 121 处 `target = "..."` 误用为字段而非元数据目标** — 121 个日志事件对订阅者不可见，影响可观测性。

### 低严重度
- **[#7168](https://github.com/nearai/ironclaw/issues/7168) agent 安装的技能不可见**（已关闭，**#7168 已修**）
- **[#7115](https://github.com/nearai/ironclaw/issues/7115) Docker entrypoint 遗留 Slack 迁移的死路径 env var** — 跟随文档操作会跳过迁移。
- **[#7185](https://github.com/nearai/ironclaw/issues/7185) 跨对话记忆召回不可靠** — 来自 Champions 周检。

---

## 6. 功能请求与路线图信号

**已存在对应 PR 推进中（v1.1.0 高概率纳入）：**
- [#7193](https://github.com/nearai/ironclaw/issues/7193) 自动化"立即运行" — 补全触发域全栈（能力/产品/WebUI），属于 [Epic #6565](https://github.com/nearai/ironclaw/issues/6565) 子集。
- [#7194](https://github.com/nearai/ironclaw/issues/7194) 管理允许的共享频道作为出站投递目标 — 解锁交付层终局。
- [#7184](https://github.com/nearai/ironclaw/pull/7184) Nostr 宿主函数（WASM 工具沙箱 `near:agent@0.4.0`） — 扩展工具市场资产类型。

**新一轮反馈（可能影响 v1.1.0+）：**
- [#7183](https://github.com/nearai/ironclaw/issues/7183) **每用户 LLM 模型选择** — 当前仅 admin 可设；J. Koch 在 Champions 周检提出。属于 Workspace 多租户能力的合理延伸，但牵涉治理与计费，**中等概率进入 v1.1.0 后期或 v1.2**。
- [#7180](https://github.com/nearai/ironclaw/issues/7180) **Web 抓取不稳定** — agent 倾向于用 http 而非 web_search；与 [Epic #6565 工具路由可靠性](#6565) 直接相关。
- [#7177](https://github.com/nearai/ironclaw/issues/7177) **延迟工具检索加入 schema-aware 排序** — 改进 Reborn 渐进式工具披露。
- [#7105](https://github.com/nearai/ironclaw/issues/7105) **评估专用身份/会话与支付服务** — 长期架构提议。
- [#7199](https://github.com/nearai/ironclaw/issues/7199) 来自外部贡献者 PostChairmanLock（FaceSeek 项目）：**区分"候选技能存在但未选中" vs "选中并改变了最终答复"** 的日志记录，直接喂入 Skill ROI 度量。

---

## 7. 用户反馈摘要

来自 2026-07-23 Champions 周检与今日新 Issue：

1. **内存/上下文不可靠** [#7185](https://github.com/nearai/ironclaw/issues/7185) — Devon（法律，Tobias 转达）：agent 在新会话中无法访问先前对话建立的信息。这是**多用户复现**的痛点，**优先级高**但尚未排定。
2. **Web 抓取命中不稳定** [#7180](https://github.com/nearai/ironclaw/issues/7180) — Michael Kelly（builder ops）：成功/失败无明显模式。根因可能是模型路由偏好而非工具本身问题。
3. **实例删除后卡死** [#6752](https://github.com/nearai/ironclaw/issues/6752) — elliot.braem（Slack）：用户重登看到死锁状态。直接影响留存体验。
4. **模型选择权限过窄** [#7183](https://github.com/nearai/ironclaw/issues/7183) — Jeremy Koch（营销）：marketing 用户无自主权，需 Tobias 代设。
5. **技能安装"假成功"** [#7168](https://github.com/nearai/ironclaw/issues/7168)（已关闭） — agent 调用 `skill_install` 返回 `installed:true` 但 Settings 不显示，是用户对 IronClaw **信任度**的硬伤；本次已修。
6. **Skill 选择的 ROI 验证** [#7199](https://github.com/nearai/ironclaw/issues/7199) — 来自同类项目（FaceSeek）作者的专业建议，反映外部社区对 IronClaw **可观测性**水平的认可与期待。

整体满意度：中性偏正。**Bug 集中于"小但可见"的体验断点**（UI 错位、卡死、错误语义），而非架构性失能。

---

## 8. 待处理积压

提醒维护者关注以下**长期开放**条目：

| 编号 | 类型 | 主题 | 状态 |
|---|---|---|---|
| [#3773](https://github.com/nearai/ironclaw/issues/3773) | Epic (v1.2.0) | IronClaw 目标 Crate 架构落地 | 2026-05-19 创建，**长期未推进评论**，但今日 #7151/#7147 等执法补丁事实上在为它服务 |
| [#6731](https://github.com/nearai/ironclaw/issues/6731) | Epic (v1.1.0) | IronHub 集成 | 价值主张清晰但近一周几乎无更新 |
| [#7184](https://github.com/nearai/ironclaw/pull/7184) | XL PR | Nostr 宿主函数 | 范围大、依赖 wasm 接口版本，需架构组 reviewer |
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | Bot PR | 0.4.2 → 0.5.0 发布切割 | 涉及 `ironclaw_common` / `ironclaw_skills` **API breaking changes**，需要 review 与 CHANGELOG 校对 |
| [#7198](https://github.com

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-05

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)  
> 统计周期：过去 24 小时（2026-08-04 ~ 2026-08-05）

---

## 1. 今日速览

LobsterAI 今日处于**中等偏高活跃度**：1 条 Issue 被更新（仍 OPEN，标记 stale），13 条 PR 出现变动，其中 **10 条已合并/关闭**、3 条仍 OPEN。项目核心工作明显围绕**版本发布**展开——Release PR `#2430` (`Release: 2026.8.3`) 当天创建并合并，配合 5 条 feature/fix PR 集中落地，体现出明确的版本节奏。同时 dependabot 也在清理 4 月以来的依赖升级积压（react 19、`@headlessui/react`、`react-syntax-highlighter` 三个 stale PR 当天被关闭）。

---

## 2. 版本发布

**今日无新 GitHub Release 发布**（数据概览中明确 `新版本发布：0 个`），但需特别关注：

- **release/2026.8.3 分支合并已完成**：PR [#2430](https://github.com/netease-youdao/LobsterAI/pull/2430) 当天合并进 `main`，描述为 "introduces native credit-reward activities, streamlines the first-run login experience, adds control over Artifact auto-preview, and improves model-error handling and Windows installer reliability"。
- **⚠️ 状态不一致**：Release PR 已合并但 GitHub Releases 页面无对应 tag/发布物，可能为发布流程未完整闭环（打 tag / 发布安装包仍在进行），或版本号未对外公开。建议维护者核对 release pipeline 是否完成后续动作。

主要变更预告（基于合并 PR）：
- 💰 启动信用奖励活动（Startup Credit Campaign）全套前端 + IPC + 分析字段
- 🔐 首次登录体验优化 (#2429)
- 🖼️ Artifact 自动预览可关闭（新增设置项，#2425）
- 🧠 模型错误处理：区分「容量过载」与「速率限制」（#2426）
- 🪟 Windows 安装包可靠性改进

---

## 3. 项目进展

今日合并的 10 条 PR 中，**实质性功能/修复类约 7 条**，依赖更新 3 条。重点项目：

### 🚀 Feature 类
| PR | 主题 | 贡献者 | 价值 |
|---|---|---|---|
| [#2425](https://github.com/netease-youdao/LobsterAI/pull/2425) | **Settings: 新增 Artifact 自动预览开关** | liuzhq1986 | 用户可禁用自动文件预览，保留手动预览；尊重用户偏好 |
| [#2427](https://github.com/netease-youdao/LobsterAI/pull/2427) | **启动信用活动 artwork 本地打包** | btc69m979y-dotcom | 营销资源本地化，离线/弱网可用 |
| [#2426](https://github.com/netease-youdao/LobsterAI/pull/2426) | **cowork: 模型容量过载 vs 限流分类** | fisherdaddy | 错误信息更精准，避免误导用户立刻重试 |

### 🔧 Fix / Chore 类
- [#2424](https://github.com/netease-youdao/LobsterAI/pull/2424) `fix(activity): restore active credits campaign` — 回滚此前移除的活动，恢复订阅重置与 500-credit 领取链路
- [#2428](https://github.com/netease-youdao/LobsterAI/pull/2428) `fix: complete startup credit campaign analytics fields` — 补全登录重定向 URL / 错误信息上报
- [#2429](https://github.com/netease-youdao/LobsterAI/pull/2429) `Chore: optimize login page`

### 📦 依赖升级（dependabot 清理 stale）
- [#1283](https://github.com/netease-youdao/LobsterAI/pull/1283) React `18.3.1 → 19.2.4` ⚠️ **重大主版本升级，潜在 breaking change**
- [#1282](https://github.com/netease-youdao/LobsterAI/pull/1282) `@headlessui/react 1.7.19 → 2.2.9` ⚠️ **major 升级**
- [#1284](https://github.com/netease-youdao/LobsterAI/pull/1284) `react-syntax-highlighter 15.6.6 → 16.1.1` ✅ minor 升级

> 📊 **项目健康度**：今日 PR 合并率高（10/13 ≈ 77%），含 1 个 React 主版本升级，体现维护团队对 stale 积压的主动清理能力，整体向前推进显著。

---

## 4. 社区热点

今日活跃度**整体偏低**——仅 1 条 Issue 被更新（评论数：1，👍：0），所有 PR 评论数均为 0/未统计。

### 唯一活跃 Issue
- **[#1202](https://github.com/netease-youdao/LobsterAI/issues/1202)** 【bug】agent 泄漏 model key 信息，存在敏感信息泄漏风险
  - 创建于 2026-04-01，标签 `[stale]`，仅 1 条评论、0 点赞
  - **热点诉求缺失原因分析**：该 Issue 涉及**敏感信息泄露**——按 GitHub 默认策略，公开仓库的安全 Issue 内容会被公众索引，可能反致漏洞暴露风险；通常社区讨论会更集中在**邮件/私下渠道**（参见 GitHub Security Advisories）

### 待合并 PR 中的「用户共鸣点」
- **[#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)** 永久隐藏侧边栏广告横幅（关联 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)）
  - 作者 bunnysayzz，2026-07-21 创建至今仍 OPEN（已 2 周+）
  - **诉求分析**：当前仅支持「临时关闭单个横幅」，缺乏「永久禁用」开关，对去广告诉求强烈的用户构成持续摩擦；与 2026.8.3 主线无关，**可能被推迟到下个迭代**

---

## 5. Bug 与稳定性

| 严重度 | 编号 | 描述 | 是否已修复 |
|---|---|---|---|
| 🔴 **高**（安全） | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | **agent 泄漏 model key**——通过对话可逐步引导 agent 输出配置文件路径、环境变量名，最终定位到模型密钥 | ❌ 无对应 fix PR（stale 状态） |

**今日无新增崩溃/回归报告，无 P0/P1 稳定性事件**，但仍需关注：

- 🔴 **唯一悬而未决的安全 Issue 已 4 个月（126 天）未响应**，标签 `[stale]` 说明可能已被机器人判定长期无活动。**建议维护者立即评估**：
  1. 是否在 prompt 层增加 system guard 拒绝泄露凭据位置
  2. 是否将日志脱敏（API key / token 自动 mask）
- 🟡 React 19 主版本升级（#1283）+ Headless UI v2 升级（#1282）今日合并，**未来 24-48 小时**密切关注能否引发 UI 兼容回归（className API、render prop 行为变化）

---

## 6. 功能请求与路线图信号

| 信号 | 现状 | 路线图可能性 |
|---|---|---|
| 🛡️ **Agent 拒绝泄露敏感信息（密钥位置 / env / 文件路径）** | Issue #1202 open 4 月+ | **极高**——属于安全合规底线，但 `stale` 标签暗示优先级被低估；可能由 2026.8.x 安全补丁覆盖 |
| 🚫 **永久关闭侧边栏广告 banner** | PR #2374 OPEN 2 周+ | **中高**——UI 设置项实现成本低，与 #2425（artifact 预览开关）属于同类「用户偏好设置面板」扩展，2026.8.4+ 版本纳入合理 |
| ⚙️ **Artifact 自动预览可配置** | ✅ **已在 #2425 实现并合并** | 已交付，作为 2026.8.3 卖点 |

**维护者建议**：将 #2374 并入下一个 `General` 设置面板迭代，与 `2026.8.3` 已落地的「artifact 预览开关」共同强化 Settings → General 区域。

---

## 7. 用户反馈摘要

**今日真实用户反馈极为有限**（仅 #1202 的 1 条评论且无原文摘录）。可提炼的痛点：

> **痛点 #1 — 隐私/安全担忧**（来自 #1202）  
> 用户反馈：在对话中询问「当前 key 配置信息」可引导 agent 暴露配置文件位置与环境变量名，进一步可读取真实模型密钥。这意味着：  
> - 普通用户/同事**通过应用 UI 即可窃取他人密钥**  
> - 共享屏幕场景下风险放大  
> - 违反大多数企业「密钥不在对话中展示」的合规要求

> **痛点 #2 — UI 偏好缺失**（来自 PR #2374 引用的 Issue #2342）  
> 用户反馈：用户只能逐条临时关闭广告横幅，缺少「永久禁用」选项，体验被动且繁琐。

**满意度信号**：基于 release/2026.8.3 的多 PR 集中合并，团队对首次登录、信用活动、错误反馈、Artifacts 预览等用户痛点的响应速度较快，**内部交付节奏健康**。

---

## 8. 待处理积压 ⚠️

| 类型 | 编号 | 标题 | 距今未响应 | 风险等级 |
|---|---|---|---|---|
| Issue | [#1202](https://github.com/netease-youdao/LobsterAI/issues/1202) | agent 泄漏 model key | **~126 天**（自创建） | 🔴 **HIGH**（安全） |
| PR | [#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) | fix(cowork): session 重命名失败时显示错误 toast | ~126 天（stale） | 🟡 MEDIUM（体验） |
| PR | [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374) | feat: 永久隐藏侧边栏广告 banner | ~15 天 | 🟢 LOW（增量功能） |
| PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 40.2.1 → 43.2.0（+ electron-builder） | ~125 天（stale dependabot） | 🟡 MEDIUM（依赖安全） |

**给维护者的关注建议**：
1. **优先处理 #1202 与 #1277**——前者涉及密钥泄露的合规/伦理风险，后者跨 3 个 minor 版本的 Electron 升级包含已知安全修复
2. **回复并重新激活 stale PR**（#1205、#1277、#1282~1284 周边）以避免维护者信号噪声
3. 跟进 **#2430 release PR 合并后的 GitHub Release 流程闭环**

---

### 📈 总结

LobsterAI 今日以**版本发行为核心驱动**，辅以 stale 依赖清理，节奏积极。但 **安全 Issue #1202 的 4 个月未响应**是当前最显著的「健康度短板」，建议在下一次社区更新公告中作为优先事项披露。

*报告生成时间：2026-08-05*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-08-05

> 数据来源：GitHub (github.com/moltis-org/moltis) · 统计窗口：过去 24 小时

---

## 1. 今日速览

Moltis 项目今日社区活跃度处于**低活跃**状态。过去 24 小时内仓库无新 Issue 提交、无 Issue 关闭、无 PR 合并、无新版本发布，仅有 1 条由 `dependabot[bot]` 发起的自动化依赖更新 PR（[#1184](https://github.com/moltis-org/moltis/pull/1184)）处于待合并状态。整体而言，仓库处于维护期的"静默"阶段，未观察到功能性代码变更或社区讨论热度。建议关注者留意项目是否进入功能冻结或正在筹备下一阶段开发。

**健康度评估：⭐⭐☆☆☆**（活跃度偏低，但无异常信号）

---

## 2. 版本发布

🚫 **无新版本发布。** 今日未观察到任何 Release 标签或新版本推送。

---

## 3. 项目进展

### 📦 已合并 PR：0 条

今日无任何 PR 被合并至主干分支，项目代码层面今日**无实质性推进**。

### 🔄 待合并 PR：1 条

| PR | 标题 | 类型 | 影响范围 |
|---|---|---|---|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | chore(deps-dev): bump undici from 7.28.0 to 7.29.0 in /website | 依赖更新 | 仅影响 `/website` 目录 |

该 PR 由 Dependabot 自动生成，将 `website` 子目录下的 `undici`（Node.js HTTP 客户端库）从 7.28.0 升级至 7.29.0，属于补丁级（patch）版本更新，仅包含 bug 修复或小幅改进，**不影响运行时主程序**。维护者审核通过后即可合并。

---

## 4. 社区热点

今日**无活跃讨论议题**。Issues 区域零活动，PR #1184 的评论数为 0、点赞数为 0，未引发社区互动。整体话题热度极低。

---

## 5. Bug 与稳定性

今日**未收到任何 Bug 报告、崩溃反馈或回归问题**。

- 新开 Bug 类 Issue：0
- 已关闭 Bug：0
- 待修复 Bug：0

从有限信号来看，项目当前未暴露已知的稳定性问题，但仍需提示：**低活跃期不等于零风险**，可能存在用户反馈渠道不畅通的情况，建议维护者主动巡视社区渠道（如 Discord、论坛等）以确认是否遗漏反馈。

---

## 6. 功能请求与路线图信号

今日**未收到任何新功能请求**。

- 新开 Feature Request 类 Issue：0
- 讨论中的 Roadmap 议题：0

暂无足够信号判断下一版本的功能方向。建议持续关注仓库的 `Projects` 看板或里程碑（Milestones）页面以获取路线图一手信息。

---

## 7. 用户反馈摘要

今日**无新增用户反馈**可供分析。Issues 评论数为 0，无法提炼真实用户痛点或使用场景。

---

## 8. 待处理积压

### 🔴 长期未响应的重要 Issue 或 PR

根据当前提供的快照，**无法统计历史积压情况**（本次数据仅覆盖过去 24 小时窗口）。但可确认的待办积压如下：

| 编号 | 类型 | 创建时间 | 待合并/未关闭天数 | 优先级建议 |
|---|---|---|---|---|
| [#1184](https://github.com/moltis-org/moltis/pull/1184) | 依赖更新 PR | 2026-08-04 | 1 天 | 🟢 低（自动化补丁，建议尽快合并） |

**提醒维护者：**
- ✅ **建议立即处理**：[#1184](https://github.com/moltis-org/moltis/pull/1184) 为自动化补丁 PR，仅涉及 dev 依赖且风险极低，建议快速 review 并合并，以保持依赖基线更新。
- 📋 **建议补充统计**：为更准确评估项目健康度，建议在日报数据中加入"7 天 / 30 天长期未关闭 Issue"指标，以便识别潜在的响应积压问题。

---

## 📊 数据附录

| 指标 | 数值 |
|---|---|
| 24h 新开 Issues | 0 |
| 24h 关闭 Issues | 0 |
| 24h 新开 PRs | 1 |
| 24h 合并 PRs | 0 |
| 24h 关闭 PRs（未合并） | 0 |
| 新 Release 数 | 0 |
| 总活跃交互数 | 1 |

---

*报告生成时间：2026-08-05 · 数据驱动 · 客观中立*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 — 2026-08-05

## 📌 今日速览

CoPaw（agentscope-ai/QwenPaw）今日进入 **v2.1.0-beta.1 发布后密集反馈期**，社区活跃度极高：过去 24 小时共 **77 条动态**（28 Issues + 49 PRs），其中 Issues 关闭率 43%、PR 关闭率 43%，仓库整体处于"高频反馈 + 快速修复"的健康节奏。**当日出现 2 个 v2.1.0-beta.1 桌面端严重回归**（PYTHONHOME 注入导致所有 python 子进程崩溃、Browser SDK WireProtocolError），均为全新 Beta 版引入的破坏性问题，建议维护者优先响应。**无新版本发布**，距离上一个 Beta (v2.1.0-beta.1) 仅约 36 小时。

---

## 🚀 版本发布

**无新版本发布。** 当前最新版本仍为 [v2.1.0-beta.1](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.1)（发布于 2026-08-03），对应的 Release Duty 安装验证 Issue #6656 已于今日关闭。

> ⚠️ 鉴于已报告多个 v2.1.0-beta.1 严重 Bug（详见"Bug 与稳定性"），建议维护者在修复积压前 **暂停 RC 推进**，或优先 hotfix 这些 desktop-only 回归。

---

## 📈 项目进展

今日合并/关闭了 **9 个关键修复 PR**，整体在稳定性、桌面端、CI 测试三个方向均有显著推进：

| PR | 类型 | 影响 | 链接 |
|---|---|---|---|
| #6685 | 🐛 Bug fix | 修复 AgentScope → 运行时时间戳时区转换（修复 #6301） | [→](https://github.com/agentscope-ai/QwenPaw/pull/6685) |
| #6309 | 🐛 Bug fix | session timestamps 跨时区正确转换 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6309) |
| #6618 | 🐛 Bug fix | 移除会话列表强制的 UTC 归一化（前后端时区一致） | [→](https://github.com/agentscope-ai/QwenPaw/pull/6618) |
| #6682 | 🐛 Bug fix | 同步 console 中 legacy `max_iters` 与 `loop.iteration.max_iterations` | [→](https://github.com/agentscope-ai/QwenPaw/pull/6682) |
| #6628 | 🐛 Bug fix | scroll 压缩占位改用 `SystemMsg`，消除 DeepSeek 400 错误 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6628) |
| #6678 | 🔧 CI fix | 安装 Playwright Chromium 修复 nightly 7 个 browser 测试 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6678) |
| #6686 | 🔧 CI fix | 补齐 Chrome 合约测试 p-tier 标记 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6686) |
| #6679 | 🔧 CI fix | `import-local` 用例与 #6487 守卫对齐 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6679) |
| #6656 | 📋 Release duty | v2.1.0-beta.1 安装验证已通过 | [→](https://github.com/agentscope-ai/QwenPaw/pull/6656) |

**整体评估**：今日的合并主要修复了 **v2.0 → v2.1.0b1 升级暴露的兼容性问题**（时区、字段重命名、scroll 角色问题），并补齐了 **CI 基础设施**（Playwright 安装 + p-tier 标记）。项目在"硬质量"层面有明显推进，但 v2.1.0b1 的桌面端回归尚未修复，**净进度评估为 "稳步修复中，但 Beta 风险尚未解除"**。

---

## 🔥 社区热点

### 讨论最活跃的 Issues

1. **#6649 — GPT-5.6 prompt caching 参数支持**（13 条评论） — 用户要求 Responses API provider 支持 `prompt_cache_key`、`prompt_cache_options`、`prompt_cache_breakpoint`，目标是在 Agent 多轮对话中复用缓存前缀。→ [Link](https://github.com/agentscope-ai/QwenPaw/issues/6649)
2. **#6655 — Console 通道审批提示静默超时**（12 条评论，已关闭） — Console 通道下 agent 触发 `[HIGH]` 风险命令后，审批请求不渲染，用户无感知，agent 端 300 秒后被拒。→ [Link](https://github.com/agentscope-ai/QwenPaw/issues/6655)
3. **#6643 — 任务产出物按任务分目录**（6 条评论） — `media/` 目录越来越乱，用户希望按任务维度隔离产出物。→ [Link](https://github.com/agentscope-ai/QwenPaw/issues/6643)
4. **#6667 — DeepSeek thinking mode 多轮对话失败**（5 条评论） — OpenAI formatter 在多轮时跳过 ThinkingBlock，导致 `reasoning_content` 缺失，仅首次重试机制能掩盖问题。→ [Link](https://github.com/agentscope-ai/QwenPaw/issues/6667)
5. **#6642 — 对话框拖入文件直接读取原路径**（5 条评论，已关闭） — 反对"先复制上传再读取"的反直觉流程。→ [Link](https://github.com/agentscope-ai/QwenPaw/issues/6642)

### 共同诉求分析

> 社区今日最集中的诉求集中在 **三类**：① **跨通道一致性**（WeChat/Console 通道审批提示、context_token 行为差异），② **多模型协作与缓存**（多模型并行、GPT-5.6 cache、DeepSeek thinking），③ **桌面体验治理**（文件处理、media 组织、撤回文件 UI）。这反映出 CoPaw 正在从"单模型单通道 CLI"向"多通道多模型 + 桌面 GUI"的成熟形态过渡，**跨环境一致性** 已成为新的核心矛盾。

---

## 🐛 Bug 与稳定性

按严重程度排列（🟥 P0 阻塞 → 🟧 P1 重要 → 🟨 P2 一般）：

### 🟥 P0 — 桌面端严重回归（v2.1.0b1 新增）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6697](https://github.com/agentscope-ai/QwenPaw/issues/6697) | **桌面端注入 PYTHONHOME，所有 python 子进程崩溃**（Tauri Desktop + PyInstaller onedir，Windows），用户每次启动桌面版就完全无法工作。 | ❌ 暂无 |
| [#6698](https://github.com/agentscope-ai/QwenPaw/issues/6698) | **Browser SDK `open()` 全失败**，WireProtocolError "Target crashed"，session 报告 `connected=True` 但 `pages=[]`。 | ❌ 暂无 |

### 🟥 P0 — 跨通道一致性

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6696](https://github.com/agentscope-ai/QwenPaw/issues/6696) | WeChat iLink 一次性 `context_token` 被 "typing" 指示器消耗，正式回复 `ret=-2` 被拒，"working" 卡死。 | ❌ 暂无 |
| [#6695](https://github.com/agentscope-ai/QwenPaw/issues/6695) | 仅用 WeChat 通道时，审批请求无法触达用户，5 分钟自动拒。已关闭（疑似重复 #6696）。 | ❌ 暂无 |

### 🟧 P1 — 功能性 Bug

| Issue | 描述 | Fix PR |
|---|---|---|
| [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | App Center 安装 `qwenpaw-creator@1.0.1` 失败：`No module named 'utils.env'`。 | ✅ [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) 已 OPEN |
| [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | `cron pause/resume` 不持久化 `enabled` 状态，重启后丢失。 | ✅ [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) 已 OPEN |
| [#6667](https://github.com/agentscope-ai/QwenPaw/issues/6667) | DeepSeek thinking mode 多轮 `reasoning_content` 缺失。 | ⚠️ 仅临时补丁，无正式 PR |
| [#6687](https://github.com/agentscope-ai/QwenPaw/issues/6687) | OpenRouter 显式多模态 probe 错误覆盖已知能力（写入 false）。 | ❌ 暂无 |
| [#6624](https://github.com/agentscope-ai/QwenPaw/issues/6624) | 自动压缩未触发 `summarize_when_compact` 记忆流程，手动 `/compact` 可触发。 | ✅ [#6629](https://github.com/agentscope-ai/QwenPaw/pull/6629) 已 OPEN（Under Review） |

### 🟨 P2 — 已修复或已关闭

- [#6655](https://github.com/agentscope-ai/QwenPaw/issues/6655) Console 通道审批提示 — ✅ 已关闭
- [#5906](https://github.com/agentscope-ai/QwenPaw/issues/5906) 防重复误触发 — ✅ 已关闭
- [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) 时区错误 — ✅ 已修复（[#6685](https://github.com/agentscope-ai/QwenPaw/pull/6685)）
- [#6633](https://github.com/agentscope-ai/QwenPaw/issues/6633) Skills 页超时 — ✅ 已关闭
- [#6673](https://github.com/agentscope-ai/QwenPaw/issues/6673) Frontend 显示 — ✅ 已关闭
- [#6374](https://github.com/agentscope-ai/QwenPaw/issues/6374) Token usage 写入无重试 — ✅ 已关闭

**稳定性评估**：🟧 **黄色预警**。P0 桌面端 2 项 + 跨通道 2 项共 4 个 P0 未修复，特别是 #6697/#6698 直接阻断 v2.1.0b1 桌面版用户的核心使用。

---

## 💡 功能请求与路线图信号

### 强信号（已有 PR 在路上，下一版本大概率纳入）

| 需求 | Issue | 关联 PR | 评估 |
|---|---|---|---|
| **频道启动重试** | [#6684](https://github.com/agentscope-ai/QwenPaw/issues/6684) | [#6689](https://github.com/agentscope-ai/QwenPaw/pull/6689) ✅ | 维护者 `wananing` 当日提交，5s→60s 指数退避，质量高，预计随 v2.1.0 RC 合并 |
| **Cron 状态持久化** | [#6690](https://github.com/agentscope-ai/QwenPaw/issues/6690) | [#6691](https://github.com/agentscope-ai/QwenPaw/pull/6691) ✅ | 同步落盘 `enabled` + 回归测试，预计随 Beta2 合并 |
| **插件命名空间隔离** | [#6683](https://github.com/agentscope-ai/QwenPaw/issues/6683) | [#6688](https://github.com/agentscope-ai/QwenPaw/pull/6688) ✅ | App Center 安装链路的必要修复 |
| **按需加载技能** | [#6699](https://github.com/agentscope-ai/QwenPaw/issues/6699) | ❌ 暂无 | 高价值：用户 27+ 技能时技能描述独占 25-30% system prompt，token 成本巨大 |
| **全局规则 (.agent / .claude)** | [#6694](https://github.com/agentscope-ai/QwenPaw/issues/6694) | ❌ 暂无 | 类似 Claude Code 项目级 system prompt，工作流类用户刚需 |

### 中等信号

| 需求 | Issue | 评估 |
|---|---|---|
| 多模型并行运行同一 Agent | [#6455](https://github.com/agentscope-ai/QwenPaw/issues/6455) | 涉及 fan-out/fan-in 工作流抽象，工程量大 |
| GPT-5.6 prompt caching | [#6649](https://github.com/agentscope-ai/QwenPaw/issues/6649) | 评论活跃（13），但属于 provider 层扩展，可与 Responses API 提供商共建 |
| 内置 Volcengine / Xiaomi MiMo providers | [#6490](https://github.com/agentscope-ai/QwenPaw/issues/6490) | 国内用户高频需求，扩展点明确 |
| Sandbox 约束明示 | [#6657](https://github.com/agentscope-ai/QwenPaw/pull/6657) | PR OPEN 中，安全/可观测性方向 |

### 弱信号

- [#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) Playground Multi-agents Kanban（已关闭），[#4947](https://github.com/agentscope-ai/QwenPaw/issues/4947) 已关闭但作者未澄清原因，可能是 scope 过大。

---

## 🗣️ 用户反馈摘要

**正面信号**（来自 #6674）：
> *"First of all, thank you for QwenPaw — it's a great personal AI assistant. We're using it daily with the free deepseek-v4-flash model configured, and overall the experience is excellent."*

**主要痛点提炼**（按频次）：

1. **多通道一致性缺失** — WeChat 与 Console 行为分歧（context_token 一次性 / 审批触达），用户在多设备环境下常踩坑（#6695、#6696、#6655）。
2. **桌面版质量波动** — v2.1.0b1 用户反馈"每次启动就崩溃"，对 Beta 版信心动摇（#6697、#6698、#6669）。
3. **重复/低效的 I/O 流程** — 拖文件先上传再读取、media 目录堆积、cron pause 不持久化，反映"细节打磨"不足（#6642、#6643、#6690）。
4. **多模型工作流诉求强烈** — 用户主动要求"ds v4 pro / qwen 3.7 max / kimi k3 各跑一次再汇总"，反映单模型已不满足复杂决策需求（#6455）。
5. **prompt 成本意识觉醒** — 27+ 技能用户希望按需加载，token 预算焦虑已出现（#6699）。

---

## ⏳ 待处理积压

以下 Issue/PR 创建已久且仍处于 OPEN 状态，建议维护者优先 review：

| 编号 | 类型 | 创建日期 | 等待时长 | 说明 |
|---|---|---|---|---|
| [#6455](https://github.com/agentscope-ai/QwenPaw

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-05

---

## 1. 今日速览

ZeroClaw 仓库今日处于 **高强度 RFC 讨论期**，24 小时内 Issues 与 PRs 各有 50 条更新记录，但合并/关闭仅各 2 条，反映出大量提案仍处于审议中，未形成大规模落地。今日新增 0 个 Release。社区讨论高度集中在 **安全架构、Agent 自主权边界、Chat Completions 协议兼容** 三大主题上。同时，多个 S0（数据丢失/安全风险）级别的 Bug 被报告，特别是 webchannel 入站认证失败-关闭（fail-closed）失效及知识图谱缺乏 Agent 归属隔离等问题，提示维护组需对安全相关变更优先排序。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日已合并/关闭的关键 PR/Issue 较少（2 关闭 Issues + 2 关闭 PRs），但从更新队列中可看到项目正在以下方向推进：

| 方向 | 代表性 PR | 说明 |
|---|---|---|
| **A2A 出站客户端（Phase 1）** | [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | 在 `zeroclaw-tools` 中落地四个 `a2a_*` 工具、统一 Serde 线缆模型（v1.0）、默认关闭的 `[a2a.client]` 配置块。落实 RFC #9106 的六项维护者决议。 |
| **ZeroCode 多会话面板** | [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | Chat/Code 面板保留焦点会话，配套侧边栏 / 快速启动。栈式提交，依赖 #9738。 |
| **Cron 任务超时收尾** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) | 给 `crate::agent::run` 增加 wall-clock 边界，释放 sqlite `locked_at` 锁，避免悬挂。 |
| **配置回滚一致性** | [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | `config/set` 在预提交失败时事务性回滚自动生成的 map aliases。 |
| **Tool-call 解析恢复** | [#9477](https://github.com/zeroclaw-labs/zeroclaw/pull/9477) / [#9723](https://github.com/zeroclaw-labs/zeroclaw/pull/9723) | 恢复 Qwen2.5-Coder 的 `<tools>` 包裹；解析 DeepSeek 的 `DSML` 与 `<|tool_call|>` 信封。 |
| **安全路径校验** | [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) | 浏览器 `screenshot` 操作写入前强制执行 `resolve_tool_path` / `is_path_allowed`，关闭任意文件写入逃逸。 |

整体评估：**协议兼容层与运行时稳健性在双线推进**，但本月尚无重大新功能落地；多个 RFC 仍卡在 maintainer 评审阶段，落地节奏略慢于 RFC 产生节奏。

---

## 4. 社区热点

### 🔥 讨论最热烈的 Issues

| 排名 | Issue | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) RFC: Chat Completions profile | 16 | 让 Open WebUI、LobeChat、Aider、LangChain 等 OpenAI 协议客户端直接对接 ZeroClaw，反映 **生态接入便利度** 诉求强烈。 |
| 2 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) RFC: Goal mode v1 | 14 | 跨多轮有限目标控制平面，被多次精炼以剥离重启交接、通道接入等膨胀边界。 |
| 3 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) RFC: Per-execution confirmation tier | 13 | 升级为 **统一全工具权限层**（Deny/Ask/Allow + Claude Code 风格命令模式策略），社区渴望更细粒度的工具授权。 |
| 4 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) RFC: Unified attachment architecture | 12 | web chat 与 channels 共享附件管线，呼声反映了"碎片化 IO 模型"已成为日常痛点。 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue tracker | 9 | RFC 决策积压可见化本身成为社区要求，**说明审稿速度已成为瓶颈**。 |

### 📌 今日已关闭 (值得关注)

- [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) **Mixture-of-Agents 虚拟模型提供者**（10 条评论）—— 已 CLOSED。从结果看，MoA 提案未获得通过，可能延后或拆解为子模块。

> **诉求提取**：今日热点主要集中在 (a) 与主流 Agent/Chat 客户端的协议兼容性、(b) 多轮 Agent 的目标控制语义、(c) 工具授权粒度与壳策略。维护者评审节奏已成为社区最直接的反馈对象。

---

## 5. Bug 与稳定性

下列按严重程度排序，均为今日更新队列中可见的 **S0 级别** Bug，建议维护组优先跟进：

| 严重度 | Issue / 描述 | 是否有现成 Fix PR |
|---|---|---|
| 🔴 **S0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) `gateway/api` Webhook 处理未 fail-closed（WhatsApp Cloud / Linq / WATI） | 暂无明确关联 PR；状态 `in-progress` |
| 🔴 **S0** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) 知识图谱缺乏按 Agent 归属——任何 agent 可读写他人知识 | 暂无明确关联 PR；`status:accepted`、follow-up |
| 🔴 **S0** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) `sessions_list`/`history`/`send`/`discord_search` 等工具缺乏 per-agent 所有权校验 | 暂无明确关联 PR；`status:accepted`、follow-up |
| 🟠 **P1** | [#9320](https://github.com/zeroclaw-labs/zeroclaw/pull/9320) Cron 任务悬挂锁（已有 fix PR 待合并）| ✅ |
| 🟠 **P1** | [#9646 系列](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) Agent 间工具越权（数据/会话） | ❌ |
| 🟡 **Bug 修复待合并** | [#9548](https://github.com/zeroclaw-labs/zeroclaw/pull/9548) Codex CLI 风险参数告警（size: M）| ✅ |
| 🟡 **Bug 修复待合并** | [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) 浏览器截图任意写入（security:high, size: L）| ✅ |
| 🟢 **Minor** | [#9754](https://github.com/zeroclaw-labs/zeroclaw/pull/9754) Slack 本地化辅助函数未受 `channel-slack` feature 控制（size: XS）| ✅ |
| 🟢 **Minor** | [#9504](https://github.com/zeroclaw-labs/zeroclaw/pull/9504) 上下文耗尽时静默结束（终端提示缺失）| ✅ |

> **趋势观察**：今日浮现多个 S0 项围绕 **"agent 边界 + 共享数据"**——知识图谱全局共享、session/channel 工具缺乏所有权校验，表明 Agent 多租户隔离已成为下一阶段必须解决的架构性问题。

---

## 6. 功能请求与路线图信号

以下提案在今日更新中获得显著讨论活跃度，可视为下一版本的潜在候选：

| 提案 | Issue | 信号强度 |
|---|---|---|
| Chat Completions 协议兼容层 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | ⭐⭐⭐⭐⭐ 16 评论 + 生态互联刚需 |
| Goal mode v1 目标控制平面 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | ⭐⭐⭐⭐ 14 评论，已迭代多版本 |
| 统一工具权限层（allow/ask/deny） | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) Rev.2 | ⭐⭐⭐⭐⭐ 13 评论，P1 |
| Web/Channel 统一附件架构 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | ⭐⭐⭐⭐ 12 评论 |
| A2A 出站协议客户端 | [#9106 → #9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324) | ⭐⭐⭐⭐ Phase 1 PR 已就位 |
| 插件能力 Hook 订阅（PluginCapability::Hook） | [#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) | ⭐⭐⭐ WASM 插件观察性 |
| 用 Rust→Wasm 重写 Web UI（替换 React/Vite） | [#8132](https://github.com/zeroclaw-labs/zeroclaw/issues/8132) | ⭐⭐⭐ 4 评论 + 1 👍，结构化方向受关注 |
| MoA 虚拟模型提供者 | [#8568](https://github.com/zeroclaw-labs/zeroclaw/issues/8568) | ❌ 已 CLOSED，路线降温 |

---

## 7. 用户反馈摘要

从评论与摘要中提取的真实痛点：

- **🔌 协议接入门槛**：开发者希望用 OpenAI SDK、LangChain、Continue.dev 直接对接，避免重复封装 ([#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603))。
- **🛡️ 工具授权粒度不足**：用户要求比单一 `allowed_tools` 更细的 allow/ask/deny 与 Claude Code 风格的 shell 模式匹配，凸显当前 shell 工具的安全 UX 体验差强人意 ([#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155))。
- **🧠 Agent 知识隔离**：维护者与贡献者均意识到"知识图谱全局共享是隐性定时炸弹"，呼吁 per-agent 归属成为新基线 ([#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647))。
- **🕒 维护组响应节奏**：`[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)` 的持续活跃反映出社区对 RFC 决策速度的不满意度正在累积。
- **🧩 解析器鲁棒性**：DeepSeek/DSML、Qwen/`<tools>` 包裹、Hermes 等方言的支持被多次提及，模型侧多样性已成常态需求。
- **😌 满意点**：A2A 客户端架构、Cron 任务超时修复、零/小特性 PR 反映项目在"运行稳健性"维度持续获得贡献者正向反馈。

---

## 8. 待处理积压（重点提醒维护者）

| Issue / PR | 创建距今 | 关注点 | 建议 |
|---|---|---|---|
| [#6653](https://github.com/zeroclaw-labs/zeroclaw/issues/6653) RFC: host-architecture policy for emulated installs | 2026-05-14 (~83 天) | P3，但已挂起 | 待作者跟进 |
| [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) Feature: deterministic precondition gates to cron jobs | 2026-04-10 (~117 天) | `accepted` 但未推进实现 | 与 #9320 配套可一次性完工 |
| [#6850](https://github.com/zeroclaw-labs/zeroclaw/issues/6850) RFC: Decouple memory lifecycle policy | 2026-05-22 (~75 天) | needs-author-action | 与 #8891 tracker 联动 |
| [#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) RFC: Security UX & runtime credential boundaries | 2026-05-27 (~70 天) | needs-author-action | 与 #7141/#7142 形成 Security 里程碑，**优先级建议升级** |
| [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) Rev.7 Pluggable inbound auth | 2026-06-03 | P1, in-progress | 进入 v0.9.0 安全架构目标 |
| [#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) Rev.6 Runtime-owned security decision pipeline | 2026-06-03 | P2 | 同上 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) Granular sandbox policy | 2026-05-28 | in-progress | 与 #7142/#7141 强耦合，建议单次讨论集中收敛 |
| [#6622](https://github.com/zeroclaw-labs/zeroclaw/pull/6622) test(channels/whatsapp) LID allowlist | 2026-05-13 | P1, size: L | 维护者已刷新分支，建议合并 |

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 50/50 高频更新 |
| 评审节奏 | ⭐⭐ | 50 条更新仅 2 条合并/关闭，积压明显 |
| 安全响应 | ⭐⭐ | 多个 S0 仍处"已受理未修复" |
| 文档质量 | ⭐⭐⭐⭐ | PR 摘要模板规范、内容详尽 |
| 社区参与 | ⭐⭐⭐⭐ | 多位贡献者持续承担多 PR |

> **一句话结论**：ZeroClaw 当下处于"**RFC 提案过剩、安全债显性化**"的关键阶段。建议维护组本周：(1) 对 #7141/#7142/#6971/#8603 四条高优 RFC 做集中决策；(2) 围绕 #9565/#9646/#9647 三个 S0 形成专项 fix PR；(3) 推动 #9320/#9281/#9362/#9548 等已就绪 PR 合并，释放评审吞吐。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*