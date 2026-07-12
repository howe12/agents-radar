# OpenClaw 生态日报 2026-07-12

> Issues: 465 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-12 02:06 UTC

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



---

## 横向生态对比

# 2026-07-12 AI 智能体开源生态横向对比分析

> 数据周期：过去 24 小时｜样本项目：10 个活跃仓库 + 3 个静默项目｜基准项目 OpenClaw 本批次未提供动态数据，相关对照位留待后续补齐

---

## 1. 生态全景

本期生态呈现出 **"高活跃但零发版"** 的鲜明特征：所有 10 个有动态的项目在过去 24 小时均未发布新版本，但其中 5 个（Hermes Agent、IronClaw、ZeroClaw、NanoBot、CoPaw/QwenPaw）单日 PR 量在 24–50 条之间，处于显著的代码涌入期。技术焦点高度收敛于**安全治理、Prompt 缓存、MCP 集成稳定性、跨平台兼容**四大方向，反映出个人 AI 助手开源生态正从"功能可用"向"生产可信"的关键过渡。值得关注的是，多个项目（NanoBot 的 42 项安全审计、IronClaw 的 SECURITY.md 缺失、NanoClaw 的 Guard seam 设计、CoPaw/QwenPaw 的 v2.0.0 兼容回归）同步暴露出**安全/治理已成为生态首要瓶颈**，而非新功能本身。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | Release | 合并/关闭 PR | 健康度 | 阶段判断 |
|------|--------|-----|---------|-------------|--------|----------|
| **ZeroClaw** | 50 | 50 | ❌ | 4（8%） | 🟢 良好 | 高速迭代·Goal Mode 冲刺 |
| **IronClaw** | 8 | 50 | ❌ | 13（26%） | 🟡 警示 | Reborn 重塑期·安全/跨平台短板 |
| **Hermes Agent** | 50 | 50 | ❌ | 0（0%） | 🟡 待合 | 密集修 bug·为下版本蓄力 |
| **NanoBot** | 22 | 24 | ❌ | 6（25%） | 🔴 警示 | 安全审计高压·积压明显 |
| **CoPaw / QwenPaw** | 23 | 7 | ❌ | 4（57%） | 🟠 阵痛 | v2.0.0 升级回退期 |
| **NanoClaw** | 2 | 8 | ❌ | 2（25%） | 🟢 健康 | 架构收敛·Guard seam 推进 |
| **PicoClaw** | 0 | 3 | ❌ | 1（33%） | 🟡 偏低 | 轻度维护·Stale PR 风险 |
| **NullClaw** | 2 | 0 | ❌ | 0 | 🟡 偏慢 | 静默期·Telegram 长连接未解 |
| **Moltis** | 0 | 1 | ❌ | 0 | 🟢 稳定 | 静默维护·CalDAV 语义修复 |
| **LobsterAI** | 3 | 1 | ❌ | 0 | 🔴 偏低 | 100+ 天无维护响应 |
| TinyClaw | 0 | 0 | ❌ | — | ⚪ 休眠 | 无活动 |
| ZeptoClaw | 0 | 0 | ❌ | — | ⚪ 休眠 | 无活动 |

**关键观察**：合并率超过 25% 的项目（CoPaw、IronClaw、NanoBot、NanoClaw）通常是已具备明确评审节奏的成熟仓库；合并率为 0 的 Hermes Agent 则提示 50 条 PR 同时待审可能形成**评审瓶颈**。

---

## 3. OpenClaw 在生态中的定位

> ⚠️ 本批次 OpenClaw 仓库未提供动态数据（section 为空），无法进行直接量化对照。下述分析基于命名规律与同生态项目的间接观察。

从命名体系看，"Claw" 系列（OpenClaw / NanoBot[HKUDS] / NanoClaw[qwibitai] / PicoClaw[sipeed] / NullClaw / IronClaw[nearai] / ZeroClaw[zeroclaw-labs] / ZeptoClaw）构成一个**事实上的生态家族**：

- **OpenClaw 作为命名锚点**，意味着它是该家族的项目根或参考实现，对其他衍生项目的接口、协议、行为模式具有事实影响力。
- 从本批次数据推测 OpenClaw 的潜在定位：
  - **vs NanoBot**：NanoBot 更偏个人桌面助理 + MCP 重度集成，安全审计深度已超过一般社区项目的常态投入；
  - **vs IronClaw**：IronClaw 走 Rust + WASM + CVM 证明的"硬安全"路线，与一般 Claw 项目的"软集成"路线形成对比；
  - **vs ZeroClaw**：ZeroClaw 体现"广度优先"的全功能平台策略，与基准项目的"基线接口"定位不同。
- **社区规模层面**：OpenClaw 的活跃度需以正式数据为准；本批次数据显示同生态的 **ZeroClaw 与 Hermes Agent 单日 PR 各 50 条**，是当前 Claw 家族中最具开发吞吐量的两个项目。

**建议**：后续批次补齐 OpenClaw 动态后，可针对"PR/Issue 吞吐、合并率、Issue 响应中位数、贡献者数量"四项指标做同族直接对照。

---

## 4. 共同关注的技术方向

下表汇总了 5+ 项目共同涌现的需求方向：

| 技术方向 | 涉及项目 | 具体诉求 |
|----------|----------|----------|
| **Prompt 缓存 / 前缀稳定性** | NanoBot(#2463 #4867) · ZeroClaw(#5808) · Hermes Agent(#62660) · CoPaw/QwenPaw(#5960 #5962) | 跨轮次稳定 system prefix、避免 history 区块污染缓存键；上下文压缩必须保留 tool_call/tool_result 配对 |
| **安全治理与权限收敛** | NanoBot(42 项审计) · IronClaw(#6000 SECURITY.md) · Hermes Agent(#35357 Tirith) · NanoClaw(#2986 Guard seam) · CoPaw(#5955 白名单) | 单一权限决策函数、SECURITY.md + 私有漏洞披露、敏感工具 human-in-the-loop、特权动作 allow/hold/deny 三态 |
| **MCP 集成稳定性与协议补全** | NanoBot(#4302) · Hermes Agent(#60385) · IronClaw(#5998 本地传输缺失) | 重连不崩、stdio/loopback 传输层、进程不泄漏、契约对齐 |
| **跨平台兼容** | IronClaw(#5999 Windows 启动) · NanoBot(#4881 Windows UTF-16) · CoPaw(#5951 Windows 沙箱) · Hermes Agent(#61781 Windows 后端) | Windows 桌面支持、POSIX 路径抽象、编码正确性 |
| **凭证与密钥处理** | NanoBot(#4783 #4784 os.environ 泄漏) · Hermes Agent(#61754 #61757 Copilot/Codex) · CoPaw(#4124 OAuth) · IronClaw(#5934 admin 密钥) | 跨进程凭证隔离、OAuth 接入、子进程不继承敏感 env |
| **多通道适配与可靠性** | ZeroClaw(#7952 全通道预构建) · NanoClaw(#2988 Tasks 单出口) · Hermes Agent(#53995 #52835) · CoPaw(#5956 #5957 多渠道升级) | 统一 message envelope、WebSocket/IM 通道生命周期、断连重连策略 |
| **CLI Provider 复用模式** | NullClaw(#975 grok-cli) · 关联 NanoBot(本地 provider 体系) | 子进程调用已登录的 claude/codex/gemini/grok CLI 复用量 |
| **Skills / Plugin 系统** | Hermes Agent(#32925 SkillOpt) · ZeroClaw(#8135 WASM 默认) · NanoClaw(#2987 /add-audit) · PicoClaw(#3249 skill toggle) | 自演进 skill、运行时开关、WASM 沙箱、审计可观测 |
| **Goal / 长任务治理** | NanoBot(#4844 #4891 sustained goal opt-in) · ZeroClaw(#8681 Goal Mode) · NanoClaw(任务单出口) | 长期目标的显式开关、运行态保留、防止隐式续轮 |
| **文档-CLI 一致性** | NanoBot(#4860 onboard/webui 缺失) · PicoClaw(DeltaChat 重构) · IronClaw(#5987 远程证明门槛) | 命令存在性、配置模板自洽、入门路径可发现 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|------|----------|----------|------------------|
| **NanoBot** | MCP 重度集成 · 全平台个人助理 · 桌面/Web 多入口 | 个人开发者 + MCP 生态使用者 | 网关型架构、Channel + Session 双层路由、审计驱动的安全更新 |
| **Hermes Agent** | 桌面端 (Electron) + 多 SaaS (Copilot/Codex) + Skills Hub | 企业/团队 + 桌面重度用户 | Electron + 多进程后端、Tirith 审批门、跨平台桌面分发 |
| **IronClaw** | 安全硬化 · 扩展运行时 · CVM 远程证明 | 隐私/合规敏感场景 + 开发者 | Rust + WASM + CVM attestation、ExtensionHost 适配器、Responses API E2E CI |
| **ZeroClaw** | 全通道 + Goal Mode + WASM 插件 + Dashboard | 全场景平台用户 | 大型仓库 + 多 PR 列车并行（Goal Mode 5-PR 栈）、Dashboard 化 |
| **NanoClaw** | Guard seam + 任务单出口 + 审计 skill + 跨 Provider 记忆 | 安全/可观测优先的运维用户 | 单一 guard() 决策函数、Tasks one-door、provider-agnostic memory |
| **CoPaw / QwenPaw** | AgentScope 集成 · 中文 IM（企微/钉钉

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-12

> 数据来源：HKUDS/nanobot GitHub 仓库 · 报告周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日呈现 **高活跃度 + 安全优先级** 的双重信号。过去 24 小时共产生 22 条 Issue 更新与 24 条 PR 更新，其中 PR 处理吞吐较大（24 条中 18 条待合并、6 条已关闭），但合并率偏低，提示维护者正处于多线程评审阶段。**最显著的动态是用户 hamb1y 发起的深度代码审计**——其发布的 #4815「Security & Correctness Audit」涵盖 42 项发现，今日又有 8 条衍生 Issue 入账，覆盖 DoS、容器逃逸、密钥泄漏、供应链等高危面。同时包含 #4784、#4783 等敏感密钥泄漏问题，社区正同步通过 PR #4880、#4888、#4889、#4890 紧急加固。当日无新版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

**今日已关闭 / 合并的 PR（6 条）：**

- **#4764**（已关闭）— `fix(mcp): isolate reconnect cancel scopes to prevent gateway crash`，修复 MCP streamable-http 在 idle 超时后重连导致的网关级崩溃，对应已关闭的 Issue #4302。🔗 [PR #4764](https://github.com/HKUDS/nanobot/pull/4764)
- **#4844**（已关闭）— `refactor(agent): gate sustained goals behind explicit /goal`，将长期目标能力（long_task / complete_goal）替换为 create_goal / update_goal + 紧凑运行时模板，需要真实用户发起，遏制自动续轮行为的副作用。🔗 [PR #4844](https://github.com/HKUDS/nanobot/pull/4844)
- **#4891**（已关闭，依赖 #4844）— `refactor(agent): make runtime context opt-in and prefix-stable`，停止在每条用户消息中默认注入时间/通道/聊天 ID，改用一次性解析的 provider 机制，这是 **Prompt Prefix 缓存修复**（#2463 主题）的关键推动。🔗 [PR #4891](https://github.com/HKUDS/nanobot/pull/4891)

**当日仍在评审但与核心架构强相关的 PR：**

- **#4371** — `fix(cache): add breakpoint before Recent History`，通过在可变 History 块前插入稳定断点，让系统前缀在 Ollama 等本地/外部推理端命中缓存，与 #4867 用户痛点直接相关。
- **#4866** — `feat(agent): bind model presets to sessions`，将模型预设绑定到会话元数据，/model 命令改为会话作用域，提升模型切换可预期性。
- **#4890** — 修复 #4883 的 API 会话锁无界增长，采用 WeakValueDictionary。
- **#4880 / #4888 / #4889** — 三条安全加固 PR 已就绪（见第 5 节）。

**整体进展判断：** 项目在「Prompt 缓存 / 模型会话 / MCP 稳定性 / 安全加固」四条主线并行推进，已形成可见的修复节奏；但 42 条审计发现绝大部分尚未进入 PR 队列，缺口较大。

---

## 4. 社区热点

按评论数与互动度排序：

| 排名 | 标题 | 类型 | 评论 | 链接 |
|------|------|------|------|------|
| 1 | #2463 Architectural issue: nanobot does not preserve the exact prompt prefix it previously sent | Issue（p2 / provider） | **14** | [Issue #2463](https://github.com/HKUDS/nanobot/issues/2463) |
| 2 | #4867 Preserve exact prompt prefix to enable caching in Ollama and others | Issue（enhancement） | **4** | [Issue #4867](https://github.com/HKUDS/nanobot/issues/4867) |
| 3 | #4860 no such command "onboard" or "webui" *(已关闭, stale)* | Issue（bug） | 3 | [Issue #4860](https://github.com/HKUDS/nanobot/issues/4860) |
| 4 | #4302 nanobot gateway crashes after mcp reconnect *(已关闭)* | Issue（bug） | 2 | [Issue #4302](https://github.com/HKUDS/nanobot/issues/4302) |

**诉求分析：**

- **#2463 + #4867 形成"Prompt 缓存"话题矩阵**：用户 ronny-rentner 在 3 月 25 日提出的根本性架构缺陷——对话历史不能忠实回放为模型实际收到的前缀，与 OpenAI Prompt Caching 不兼容；用户在 Ollama + 32GB VRAM 环境下，每轮额外 60 秒延迟已「不可用」。当前 PR #4371、#4891、#4650 已被视为该问题的主要修复路径，但尚未合并，社区呼声中度急切。
- **#4860（已关闭 stale）** 反映文档/CLI 表面问题：官网宣传的 `nanobot onboard` / `nanobot webui` 命令在 uv tool 安装后并不存在，提示**新用户 onboarding 摩擦**。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重（含安全 / DoS / 数据损坏）

| 严重度 | Issue | 概述 | 是否有修复 PR |
|--------|-------|------|--------------|
| 🔴 严重 | [#4784](https://github.com/HKUDS/nanobot/issues/4784) Security: Provider API keys leaked between providers via global `os.environ` mutation | 网关型 provider 直接覆盖全局环境变量，导致跨 provider 密钥串扰 | ❌ 未发现 |
| 🔴 严重 | [#4783](https://github.com/HKUDS/nanobot/issues/4783) Security: CLI apps run with full `os.environ` — API keys leaked to installed app subprocesses | CLI App 子进程继承全部 API key，与 Shell Tool 的过滤策略不一致 | ❌ 未发现 |
| 🔴 严重 | [#4779](https://github.com/HKUDS/nanobot/issues/4779) Security: `process_direct()` bypasses all channel-level authorization — 6+ callers | SDK、内部子代理、CLI 等绕过任何 `is_allowed()` 检查 | ❌ 未发现 |
| 🔴 严重 | [#4778](https://github.com/HKUDS/nanobot/issues/4778) Security: 'system' channel messages bypass all authorization, command routing, and state machine | `channel == "system"` 跳过零授权，被多处代码路径使用 | ❌ 未发现 |
| 🔴 严重 | [#4885](https://github.com/HKUDS/nanobot/issues/4885) Security: CLI app registry is an unsigned code-install supply chain | hkuds.github.io 上的 App 注册表无签名验证 | ❌ 未发现 |
| 🔴 严重 | [#4886](https://github.com/HKUDS/nanobot/issues/4886) Security: Docker Compose disables core container confinement | 默认 compose 启用 SYS_ADMIN + 关闭 AppArmor/seccomp | ❌ 未发现 |
| 🔴 严重 | [#4884](https://github.com/HKUDS/nanobot/issues/4884) Security: WebFetch sends complete user URLs to Jina | 用户完整 URL 通过明文 `httpx` 发往 r.jina.ai | ❌ 未发现 |
| 🟠 高 | [#4782](https://github.com/HKUDS/nanobot/issues/4782) DoS: No API rate limiting — /v1/chat/completions has zero throttling | API 端点完全无速率限制 | ❌ 未发现 |
| 🟠 高 | [#4781](https://github.com/HKUDS/nanobot/issues/4781) DoS: No WebSocket connection limit — trivial file descriptor exhaustion | WebSocket 无 max_connections 限制 | ❌ 未发现 |
| 🟠 高 | [#4780](https://github.com/HKUDS/nanobot/issues/4780) DoS: Unbounded `asyncio.Queue` in MessageBus — no backpressure | 入站/出站消息队列无 maxsize，可耗尽内存 | ❌ 未发现 |
| 🟠 高 | [#4785](https://github.com/HKUDS/nanobot/issues/4785) Bug: `read_file` loads entire file into memory before truncation — multi-GB file causes OOM | 多 GB 文件触发网关 OOM | ❌ 未发现 |
| 🟠 高 | [#4777](https://github.com/HKUDS/nanobot/issues/4777) Security: `/stop` cancels other users' tasks — scoped to channel:chat_id not sender_id | 群聊中任一成员可取消他人正在执行的任务 | ✅ PR #4889 |
| 🟠 高 | [#4883](https://github.com/HKUDS/nanobot/issues/4883) Security: API session lock map grows without bounds | session_id 锁字典无界增长 | ✅ PR #4890 |
| 🟠 高 | [#4887](https://github.com/HKUDS/nanobot/issues/4887) Test setup: dev extra omits `lark-oapi` required by Feishu tests | 默认 dev 依赖缺 lark-oapi，飞书测试在 CI 之外会失败 | ❌ 未发现 |
| 🟡 中 | [#4881](https://github.com/HKUDS/nanobot/issues/4881) Bug: Windows `ExecTool` corrupts PowerShell UTF-16 output | Windows 下 UTF-16LE 命令输出被错误以 UTF-8 解码 | ❌ 未发现 |
| 🟡 中 | [#4882](https://github.com/HKUDS/nanobot/issues/4882) Bug: Dream content diff reports unchanged empty files as modified | GitStore 初始化后空文件被报为已变更 | ❌ 未发现 |
| 🟢 低 | [#4872](https://github.com/HKUDS/nanobot/issues/4872) *(已关闭)* Dream should only create git commits if the run was productive | 空运行产生无意义 git 提交 | ❌（已关闭待实现） |

**已有关联修复的 Issue**：#4883 → #4890；#4796 (restrict_to_workspace 默认值) → PR #4880；#4798 (工作区并发写) → PR #4888；#4777 → PR #4889；#4886 等需社区跟进实现。

---

## 6. 功能请求与路线图信号

- **#4867 / #2463 Prompt Prefix 缓存** —— 已具备落地条件：#4371（缓存断点）+ #4891（运行时上下文 opt-in、prefix-stable）形成组合方案；如合并将显著改善 Ollama / OpenAI 等多 provider 性能与成本，是下一个 minor 版本的关键优化候选。
- **#4815「42 项综合审计」**——hamb1y 的安全审计本身就是一份路线图，其衍生 Issue #4882–#4887 集中在工具链与平台层（Docker、CLI Apps、WebFetch、ExecTool、Dream），与 PR #4880/#4888/#4889/#4890 一同构成短期安全强化 wave，预计在 0.x 补丁版本或下个 minor 版本中集中消化。
- **#4866 模型预设会话绑定** —— 强化多人共用网关场景下的多模型体验，PR 已就绪但标记 conflict，预计 v0.x+1。
- **#4879 sustained-goal opt-in 切换**——与 #4844 / #4891 一起把长任务能力显式化、可控化，是长期产品形态的重要设计收敛。
- **#4855 WebUI guided setup flows**——飞书多实例 / Channel 配置向导，对前端用户体验是关键补强，建议随 WebUI 下一次迭代上线。

---

## 7. 用户反馈摘要

**痛点与场景：**

1. **本地推理用户的弃用边缘体验**：#4867 报告者 The-Markitecht 明确表示使用 Ollama + 32GB VRAM 时，每轮额外 60 秒延迟使产品"totally unusable"。这是 **Prompt Caching 失效**在最坏场景下的直接后果，劝退潜在用户。
2. **新用户安装后命令不可用**：#4860 报告者 justTravis 通过 `uv tool install` 安装后，`nanobot onboard` / `nanobot webui` 不存在，与官网文档不一致，造成首次使用困惑（已作为 stale 关闭）。
3. **MCP 集成稳定性堪忧**：#4302 报告者 tjc0726 反馈会话超时后的 MCP 重连引起网关级崩溃（已通过 #4764 修复），是面向生产部署的硬障碍。
4. **审计揭示的整体观感**：hamb1y 在 #4815 中以系统化方式指出**密钥处理 / 容器隔离 / 网关速率限制 / 子进程密钥泄漏**等基础工程问题，反映出项目在 **生产化与合规** 层面仍偏初期。

**正向信号：** PR #4891、#4371 等积极回应缓存问题；多位贡献者（chengyongru、bjoshuanoah、tjc0726、hamb1y、adabarbulescu、axelray-dev 等）持续提交高质量 PR，**社区贡献活跃度优秀**。

---

## 8. 待处理积压（提醒维护者关注）

- **#2463 Prompt Prefix 架构问题**——已存在 109 天，仅有零散 PR 但无合并结论；属于核心可扩展性问题，建议在下一个 minor 中给出明确处理路线。
- **#4780 / #4781 / #4782**——三个 DoS 漏洞均位于网关入口层（API、WebSocket、MessageBus），属于**对外开放前必须修复**级别。
- **#4779 / #4778 / #4783 / #4784**——授权与密钥泄漏系列问题集中爆发，建议打包为一个安全补丁 PR 一次性关闭。
- **#4881 Windows UTF-16 损坏** + **#4882 Dream 误报**——影响跨平台与可信性，建议在下个补丁版本修复。
- **#4887 测试环境缺失 lark-oapi**——影响 CI 外开发者，无法发现只在本地显现的回归。
- **PR #4371** —— 自 2026-06-16 提出至今 26 天，仍处于 OPEN 状态，是 Prompt 缓存路线中最直接的修复点，建议优先评审。

---

### 📊 健康度小结

| 维度 | 评估 |
|------|------|
| 社区活跃度 | 🟢 高（24 PR / 22 Issue，贡献者多元） |
| 维护者吞吐 | 🟡 中（关闭率约 25%，积压明显） |
| 安全态势 | 🔴 警示（42 项审计仅消化极少部分，含多个密钥/DoS 严重项） |
| 核心架构推进 | 🟢 进展中（Prompt 缓存与会话模型预设已具落地方案） |
| 用户体验反馈 | 🟡 偏负面（Ollama 不可用、文档与 CLI 不符、Windows 损坏等） |

> 建议：维护者在下一周期优先合并 **#4371 / #4891 / #4880 / #4888 / #4889 / #4890** 这一组已就绪的关键修复，并以一个安全补丁版本（v0.x.y）一次性关闭高危 Issue；中期路线上正式响应 #2463 与 #4815 审计路线图。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-07-12**　|　数据范围：过去 24 小时

---

## 1. 今日速览

Hermes Agent 仓库在 24 小时内继续保持高强度迭代节奏：50 条 Issue 更新、50 条 PR 更新、0 个版本发布。社区讨论热度不均，呈现"运营基础设施噪音 + 安全/稳定性主线修复"两条主线：**`skills-index-watchdog` 自动巡检 bot 已持续 39 天报告 degraded 状态**（Issue #38240，21 条评论，远超其他议题），与此同时 `comp/agent`、`comp/cron`、`comp/gateway` 三大模块集中涌入一批 P1/P2 级 Bug 与对应修复 PR。整体看，**项目处于"密集修 bug、为下个版本蓄力"的典型中期维护阶段**，活跃度高但缺乏新功能落地（PR 全部处于待合并状态，已合并为 0）。

---

## 2. 版本发布

**本周期无新版本发布。** 50 条 PR 全部处于 OPEN 状态，短期内不太可能出新版。但从待合并 PR 的覆盖面（Windows / macOS / Copilot / Codex / MCP / TUI / cron / agent 全栈修复）来看，**下一个 release 极有可能是 P1/P2 修复集**，建议关注者密切关注合并动向。

---

## 3. 项目进展

过去 24 小时 **无 PR 合并**，所有 50 条更新均集中在"待合并"状态。但从 PR 内容观察，维护团队与外部贡献者已经为下个版本准备了相当扎实的修复集，主要方向包括：

| 方向 | 代表 PR | 价值点 |
|---|---|---|
| **多平台稳定性** | [#61781](https://github.com/NousResearch/hermes-agent/pull/61781)（Windows 后端探活超时）、[#61763](https://github.com/NousResearch/hermes-agent/pull/61763)（macOS TCC 标识保留）、[#61747](https://github.com/NousResearch/hermes-agent/pull/61747)（TUI 自愈 esbuild 二进制） | 跨平台桌面端"白屏/启动失败"系列问题的根因级修正 |
| **Copilot / Codex 凭证流转** | [#61757](https://github.com/NousResearch/hermes-agent/pull/61757)、[#61754](https://github.com/NousResearch/hermes-agent/pull/61754)、[#61751](https://github.com/NousResearch/hermes-agent/pull/61751) | 修复 Copilot 凭证轮换后过期、Codex app-server turn 终结路径不统一等导致"有效凭证被误标 exhausted"的问题 |
| **cron 健壮性** | [#61774](https://github.com/NousResearch/hermes-agent/pull/61774)（并行 script job）、[#61758](https://github.com/NousResearch/hermes-agent/pull/61758)（malformed schedule 防御）、[#61743](https://github.com/NousResearch/hermes-agent/pull/61743)（session reset policy 检查） | 围绕"老旧 jobs.json / 多进程调度"的兜底完善 |
| **Agent 核心路径修复** | [#62660](https://github.com/NousResearch/hermes-agent/pull/62660)（topic-aware compaction）、[#61777](https://github.com/NousResearch/hermes-agent/pull/61777)（Responses API 抠 tool_choice） | 解决长会话上下文压缩失真与 OpenAI 兼容协议的小坑 |
| **TUI / 性能优化** | [#61750](https://github.com/NousResearch/hermes-agent/pull/61750)（tool schema 瘦身）、[#61753](https://github.com/NousResearch/hermes-agent/pull/61753)（跳过冗余 bundle 重建）、[#61744](https://github.com/NousResearch/hermes-agent/pull/61744)（tool_search 延迟加载 built-in toolsets） | 每轮节省约 15–20k token，对 MCP-light 安装影响显著 |

**整体评估：进展健康。** PR 数量多、质量较高（多为带 sweeper 风险标签的可追踪 fix）、覆盖面贴近真实生产痛点，但**全部处于 OPEN**意味着合并闸口可能成为下一阶段的瓶颈。

---

## 4. 社区热点

| 议题 | 评论 | 👍 | 关注原因 |
|---|---|---|---|
| [#38240 — Skills index stale/degraded](https://github.com/NousResearch/hermes-agent/issues/38240) | 21 | 0 | **持续 39 天的"噪音"冠军**——`skills-index.yml` cron（6/18 UTC）+ `deploy-site.yml` 双链路重建 `/docs/api/skills-index.json`，但 `github: 0 < 30` 阈值长期不满足。已实际影响 Skills Hub 用户体验，反映**文档自动化与 GitHub Actions 调度可靠性**的顽疾。 |
| [#35357 — Tirith 审批门未覆盖非 shell 工具](https://github.com/NousResearch/hermes-agent/issues/35357) | 6 | 0 | 安全特性范围争议：`send_message` / `write_file` / `delete_resource` / MCP 工具**完全绕过 human-in-the-loop**。`P3` 标签低估了它的实质影响——属于 Trust & Safety 范畴。 |
| [#9403 — Pricing overrides / 合同价 / sync CLI](https://github.com/NousResearch/hermes-agent/issues/9403) | 5 | 0 | 定价架构 Phase 4 长期未实现，企业用户主线诉求。 |
| [#32925 — 集成 Microsoft SkillOpt](https://github.com/NousResearch/hermes-agent/issues/32925) | 2 | **11** | **本日 👍 最高的特性请求**。社区高度认可自演进 agent skills 方向，期待 Hermes 与上游 SkillOpt 的集成路径。 |
| [#8040 — 凭证池 TOCTOU 跨进程未保护](https://github.com/NousResearch/hermes-agent/issues/8040) | 3 | 0 | 印证 [#61757](https://github.com/NousResearch/hermes-agent/pull/61757) / [#61754](https://github.com/NousResearch/hermes-agent/pull/61754) 的修复必要性。 |
| [#62914 — Unguarded `_emit_pending_fallback_notice` 崩溃](https://github.com/NousResearch/hermes-agent/issues/62914) | 3 | 0 | 今日新增的版本漂移崩溃报告——**P2**。 |

---

## 5. Bug 与稳定性（按严重度）

### 🔴 P1（最高优先级 · 数据丢失/会话损坏级）
| Issue | 简述 | 修复 PR |
|---|---|---|
| [#62723 — Config v30→v32 静默丢弃 platforms 段](https://github.com/NousResearch/hermes-agent/issues/62723) | 多 profile 升级丢 Feishu 配置，10 个 profile 中 9 个受影响 | ❌ 无公开 PR |
| [#62557 — Desktop Electron 漏 bracketed-paste marker](https://github.com/NousResearch/hermes-agent/issues/62557) | 用户消息被污染、含 `^[[200~` 重复 200+ | ❌ 无 PR（与 #7316、#14692 同类历史问题） |
| [#62365 — Context compaction 捏造用户请求](https://github.com/NousResearch/hermes-agent/issues/62365) | 上下文压缩摘要虚构对话历史 | 🔗 [#62660](https://github.com/NousResearch/hermes-agent/pull/62660)（主题感知压缩，部分对症） |

### 🟠 P2（重大功能故障 · 部分已有修复）
| Issue | 状态 | 修复 PR |
|---|---|---|
| [#62914 — 回调崩溃](https://github.com/NousResearch/hermes-agent/issues/62914) | OPEN · 今日新 | ❌ |
| [#8040 — 凭证池 TOCTOU](https://github.com/NousResearch/hermes-agent/issues/8040) | OPEN | 🔗 [#61757](https://github.com/NousResearch/hermes-agent/pull/61757) + [#61754](https://github.com/NousResearch/hermes-agent/pull/61754) |
| [#60385 — MCP 进程泄漏](https://github.com/NousResearch/hermes-agent/issues/60385) | ✅ CLOSED | — |
| [#62936 — Telegram 上传 15MB 必超时（重复）](https://github.com/NousResearch/hermes-agent/issues/62936) | OPEN | ❌ |
| [#62940 — Gemini 并行 tool_call 被合并丢参](https://github.com/NousResearch/hermes-agent/issues/62940) | ✅ CLOSED（duplicate） | — |
| [#62884 — Windows 桌面新会话冻结](https://github.com/NousResearch/hermes-agent/issues/62884) | ✅ CLOSED | 🔗 [#61781](https://github.com/NousResearch/hermes-agent/pull/61781) |
| [#62905 — Cron 进入 pending_approval 后静默无输出](https://github.com/NousResearch/hermes-agent/issues/62905) | ✅ CLOSED | — |
| [#53995 — Windows Gateway pymalloc 泄漏反复硬崩](https://github.com/NousResearch/hermes-agent/issues/53995) | OPEN | ❌ |
| [#52835 — QQ 平台幽灵消息](https://github.com/NousResearch/hermes-agent/issues/52835) | OPEN | ❌ |
| [#50831 — Docker 镜像缺 tirith](https://github.com/NousResearch/hermes-agent/issues/50831) | OPEN | ❌ |
| [#46276 — per-profile systemd unit PATH 失配](https://github.com/NousResearch/hermes-agent/issues/46276) | OPEN | ❌ |
| [#62401 — Matrix gateway 在 E2EE off 的 macOS arm64 卡死](https://github.com/NousResearch/hermes-agent/issues/62401) | OPEN | ❌ |
| [#13126 — Slack TTS 语音回复永远不发](https://github.com/NousResearch/hermes-agent/issues/13126) | OPEN | ❌ |

### 🟡 P3 已关闭（说明今天 Bug 关闭节奏尚可）
[#56058](https://github.com/NousResearch/hermes-agent/issues/56058)（桌面模型选择全局污染）、[#62916](https://github.com/NousResearch/hermes-agent/issues/62916)（OpenCode Go provider 原生支持）、[#62426](https://github.com/NousResearch/hermes-agent/issues/62426)（QQ 定时任务消失）、[#62883](https://github.com/NousResearch/hermes-agent/issues/62883)（Edge TTS 音调）均在今日收尾，反映 sweeper bot 机制运转正常。

---

## 6. 功能请求与路线图信号

| 特性请求 | 信号强度 | 关联 PR / 路线信号 |
|---|---|---|
| **Tirith 审批覆盖非 shell 工具** [#35357](https://github.com/NousResearch/hermes-agent/issues/35357) | 🟢 强（安全 + 6 评论） | 已被多次点名，**短期可能落地** |
| **Microsoft SkillOpt 集成** [#32925](https://github.com/NousResearch/hermes-agent/issues/32925) | 🟢 强（11 👍 为本日最高） | 涉及外部依赖评估，预计路线图讨论阶段 |
| **Desktop 自定义 OpenAI-compatible provider** [#38975](https://github.com/NousResearch/hermes-agent/issues/38975) | 🟡 中（缓解 [#62892](https://github.com/NousResearch/hermes-agent/issues/62892) 痛点） | 已被 sweeper 实现至 main，分支级补丁待合 |
| **`skills.always_preload` 配置** [#62927](https://github.com/NousResearch/hermes-agent/issues/62927) | 🟡 中（小特性，易落地） | 直击自定义模型不调用 `skill_view()` 的用户痛点 |
| **Pricing overrides / Contract pricing CLI** [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) | 🟠 偏企业路线 | 长期未动，依赖商业决策 |
| **Context7 加入可选 MCP 目录** [#62675](https://github.com/NousResearch/hermes-agent/issues/62675) | 🟡 中 | 极低风险、可快速纳入 |
| **Edge TTS 音调控制** [#62883](https://github.com/NousResearch/hermes-agent/issues/62883) | 🟢 已关闭 | 已实现入主分支 |
| **Mattermost 等平台 QQ 任务可见性** [#62426](https://github.com/NousResearch/hermes-agent/issues/62426) | 🟢 已关闭 | UI 层小修复已完成 |

---

## 7. 用户反馈摘要

> *以下观点源自 Issue 评论与描述的用户场景，非问卷数据。*

- **企业 / B 端用户的"价格 + SLA"焦虑持续。** [#9403](https://github.com/NousResearch/hermes-agent/issues/9403) 反映当前缺乏 contract pricing 与 sync CLI，被多个外部团队视为"使用 Hermes 的隐性门禁"。
- **多平台聊天场景的"上下文串台"是真实痛点。** [#62660](https://github.com/NousResearch/hermes-agent/pull/62660) PR 描述直接引用 Feishu / WeChat / Telegram / Slack 用户在 DM 内多个独立主题被一次性压缩覆盖的情况，行业典型。
- **macOS Apple Silicon 用户在 E2EE 关闭时被强制装 `python-olm`** [#62401](https://github.com/Nous

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-07-12**
**仓库：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目今日处于**轻度维护状态**。过去 24 小时内无新增或活跃的 Issue 报告，PR 端有 3 条更新但其中 2 条仍处于待合并状态、1 条已关闭。整体来看，用户侧的反馈流处于近期的低谷期（0 条 Issue 互动），开发侧的贡献以**重构与功能扩展**为主，**未发布新版本**。建议维护者关注已标记 stale 的 PR #3225，避免长期搁置影响贡献者信心。

---

## 2. 版本发布

⚠️ **今日无新版本发布**，版本号无变化。

---

## 3. 项目进展

### ✅ 已关闭 PR

- **#3249 [CLOSED] Skill enable/disable state + cron RunNow**（作者：m4n3z40）
  - 链接：https://github.com/sipeed/picoclaw/pull/3249
  - 内容：实现 Skill 启用/禁用状态切换（基于 `workspace/skills/.skills-state.json`）+ cron RunNow 触发功能
  - 设计亮点：状态文件置于 skill root 内部，借助 prompt cache 的递归 mtime 追踪实现自动失效，无需重启即可在下一轮对话中从 `<skills>` 列表中移除被禁用的 skill
  - 来源：描述中出现葡萄牙语（"Suporte do fork para o P6.6 do Ethos"），疑似来自本地化分支同步
  - 状态：虽显示 CLOSED，但该 PR 涉及一个**对用户友好的运行时功能**（UI 切换 skills、cron 手动触发），**建议关注其后续是否被合并或拆分重提**

### 🔄 待合并 PR（活跃讨论中）

- **#3225 [OPEN] Support agent-specific runtime overrides**
  - 链接：https://github.com/sipeed/picoclaw/pull/3225
  - 内容：在 `agents.list` 中支持按 agent 配置 `max_tokens`、`summarization thresholds`、`split_on_marker`；同时清理未使用的 `openai_compat` 导入
  - 进展：含 `go test ./pkg/config` 测试
  - ⚠️ **已被标记为 [stale]**，创建于 7 月 4 日至今 8 天未推进

- **#3222 [OPEN] refactor(deltachat): cleanup implementation, documentation -200LOC**
  - 链接：https://github.com/sipeed/picoclaw/pull/3222
  - 内容：清理 DeltaChat 模块实现与文档，净减少约 200 行代码
  - 主要变更：
    - 移除遗留特性、fallback 与过期测试
    - 引用官方 relay 列表替代硬编码副本
    - 移除基于密码的邮箱配置（密钥须通过 jsonrpc 管理）
    - 重命名 `invite_link` → `join_invite_link`，新增 `show_invite_link`
  - 进展：含完整的 deltachat section 文档

**整体推进度**：今日完成 1 个 PR 闭环（关闭），但属于功能合并范畴外的关闭（如撤回/同步关闭），核心代码推进仍依赖上述 2 个待合并 PR。

---

## 4. 社区热点

由于今日无 Issue 互动，**社区热度主要由 PR 承载**。所有 PR 的 👍 数均为 0，反映出：

- 社区参与度处于低位，缺少 reviewer 的点赞/评论互动
- 贡献者反馈渠道较为安静

**值得关注的热点话题**：
- **Agent 定制化能力**：PR #3225 提出的 per-agent 运行时覆盖参数（max_tokens、summarization 阈值等），反映出多 agent 场景下的精细化配置需求正在上升
- **DeltaChat 模块重构**：PR #3222 表明 DeltaChat 集成正在做减法，强调配置安全（jsonrpc-only secrets）

---

## 5. Bug 与稳定性

**今日无 Bug 报告**（过去 24 小时无新增/活跃/已关闭 Issue）。

暂无新增崩溃、回归或缺陷记录，**无法评估当前版本的稳定性变化趋势**。建议结合历史 release notes 与 issue tracker 长期数据做趋势分析。

---

## 6. 功能请求与路线图信号

通过分析待合并 PR 的方向，可以推断出 PicoClaw 下一阶段可能的功能演进方向：

| 信号 | 来源 PR | 优先级建议 |
|------|---------|-----------|
| **Skill 运行时管理**（启用/禁用 + cron 手动触发） | #3249（已关闭，待重新提） | ⭐⭐⭐ 高 - 提升日常可用性 |
| **Agent 级别运行时参数覆盖** | #3225 | ⭐⭐⭐ 高 - 多 agent 用户刚需 |
| **DeltaChat 安全配置重构**（移除密码配置、密钥进 jsonrpc） | #3222 | ⭐⭐ 中 - 安全改进 |

**建议纳入下一版本的候选**：#3225 的 agent 级别覆盖功能最有可能被合并（属于配置层增量改进，兼容性可控）；#3249 的 skills toggle 功能具备良好的 UX 价值，建议贡献者重新提交或维护者主动 cherry-pick。

---

## 7. 用户反馈摘要

⚠️ **数据有限**：今日无 Issue 评论可提炼。

仅有的可观察信号：
- PR #3249 描述中出现葡萄牙语内容，提示**存在非英语社区用户**（可能为巴西/葡语区贡献者），建议关注 i18n 文档覆盖度
- 所有 PR 缺乏讨论热度，可能意味着**用户反馈渠道尚未活跃**，或核心用户群体更倾向于直接提交 PR 而非开 Issue

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建距今 | 风险评估 |
|------|------|------|----------|----------|
| ⚠️ Stale PR | [#3225](https://github.com/sipeed/picoclaw/pull/3225) | Support agent-specific runtime overrides | 8 天 | 中 - 已 stale，需要 reviewer 介入决策 |
| 🕐 待处理 PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation | 9 天 | 中 - 重构 PR 需充分 review，建议分配 reviewer |
| ❓ 待复提 | [#3249](https://github.com/sipeed/picoclaw/pull/3249) | Skill enable/disable state + cron RunNow | 已关闭 | 高价值功能，建议沟通后重新提交 |

**给维护者的提醒**：
1. PR #3225 已被 GitHub 自动标记 stale，请尽快给出 review 或合并决策，避免贡献者流失
2. PR #3222 涉及代码净减少 200 行的重构，需重点确认无破坏性变更
3. 建议建立一个**轻量的 contributor 沟通机制**，减少 PR 被静默关闭的情况

---

## 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 0 Issue + 3 PR，活跃度偏低 |
| 响应速度 | ⭐⭐☆☆☆ | Stale PR 出现，响应滞后 |
| 代码质量 | ⭐⭐⭐⭐☆ | 进行中的重构与配置层改进体现工程规范 |
| 社区参与 | ⭐⭐☆☆☆ | 互动指标偏低，国际化迹象尚浅 |
| 路线清晰度 | ⭐⭐⭐☆☆ | 待合并 PR 方向明确，但缺乏 release 节奏 |

---

*报告基于 2026-07-12 当日 GitHub 数据自动生成。数据来源：GitHub REST API 公开数据。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-12

## 1. 今日速览

NanoClaw 在过去 24 小时保持中等偏高活跃度：2 条新 Issue、8 条 PR 活动（6 待合并 / 2 已关闭），无新版本发布。核心团队（moshe-nanoco、omri-maya、amit-shafnir）集中提交了 Guard seam、Tasks 单出口、持久化记忆等架构级 PR，体现出当前主线正在推进"特权动作统一治理 + 任务会话单出口 + 跨 Provider 记忆"这一组连贯改造。社区端则围绕 agent-runner 提交了两条稳定性修复（PR #3020、#3019），回应了"静默丢消息""卡死工具"等运行期痛点。Issue 端无高优先级回归或崩溃报告，整体项目健康度良好。

---

## 2. 版本发布

无（今日无新版本发布）。

---

## 3. 项目进展

今日共 2 条 PR 关闭，整体推进温和：

- **[已合并] PR #3015 — fix: preserve phase context in live progress**
  作者：tier2tech-tian · 链接：[#3015](https://github.com/qwibitai/nanoclaw/pull/3015)
  修复了 Claude 首个工具事件早于阶段说明导致的"孤立已完成读取"，并对长 warning 截断导致的测试计数丢失做了结构化摘要（脱敏、上限 1000 字）。提交者报告 67 文件 / 1267 测试 PASS、build 通过，属于面向真实 E2E 时序的稳定性补丁。

- **[已关闭未合并] PR #3018 — RFC: temporal (incognito) sessions**
  作者：RonMizrahi · 链接：[#3018](https://github.com/qwibitai/nanoclaw/pull/3018)
  作者主动声明这是 RFC / 愿景分享而非可合并 feature（与 `CONTRIBUTING.md` 中"feature 应以 skill 形式提交"的规则一致）。该 PR 的关闭代表了一次设计方向的有效曝光，但代码未进入主干。

进展评价：在缺乏新发布的背景下，"底层守卫收敛 + 任务单出口 + 跨 Provider 记忆"三件套若全部合并，将构成一次显著的架构演进；但目前 6 条待合并 PR 仍处积压状态（详见第 8 节）。

---

## 4. 社区热点

当前最活跃且最具讨论潜力的 PR 集中在核心团队的架构变更上，单条评论量虽均为 0，但议题体量较大：

- **[核心团队] PR #2986 — Guard seam: one decision function for every privileged action**
  链接：[#2986](https://github.com/qwibitai/nanoclaw/pull/2986)
  把所有跨容器 / 跨 channel 的特权动作收敛到 `src/guard/` 中的单一 `guard()` 函数，统一 `allow | hold | deny` 三态语义，并已新增 boot-time 守卫一致性 CI 测试。这是今日最具路线图意义的 PR。

- **[核心团队] PR #2988 — Tasks: one-door delivery（scheduled-tasks train Part 3/5）**
  链接：[#2988](https://github.com/qwibitai/nanoclaw/pull/2988)
  强制 `send_message` / `send_file` 必须指定 `to`，移除 reply-in-place 与单目的地回退，任务会话只剩唯一出口。

- **[核心团队] PR #2987 — /add-audit skill（opt-in 本地审计日志）**
  链接：[#2987](https://github.com/qwibitai/nanoclaw/pull/2987)
  提交者已 rebase 到最新 `feat/guard-seam`，可见三条架构 PR 互相耦合演进。

- **[核心团队] PR #3012 — provider-agnostic persistent memory**
  链接：[#3012](https://github.com/qwibitai/nanoclaw/pull/3012)
  为每个 agent group 注入 `memory/index.md` 与 `memory/system/definition.md`，并在启动、clear、compaction 后加载。

社区诉求分析：四件套共同方向是 **降低特权动作的攻击面 + 提升可观测性 + 跨 Provider 一致性**，反映出项目正从"功能可用"向"安全与可审计"阶段过渡。

---

## 5. Bug 与稳定性

按严重度排列：

| 严重度 | 编号 | 描述 | 是否有 fix PR |
|---|---|---|---|
| **高**（环境阻断） | [Issue #3017](https://github.com/qwibitai/nanoclaw/issues/3017) | Windows 11 Build 26200 + Visual Studio 2026（18.7.3）+ Node 20.17.0/24.14.1 + better-sqlite3 v11.10.0 编译失败 | ❌ 暂无 |
| **中**（可观测性噪声） | [Issue #3016](https://github.com/qwibitai/nanoclaw/issues/3016) | 自 #2965 起，`rate_limit_event` 即便状态为 `allowed` 也会被 agent-runner 误记为 `Rate limit (retryable: false, quota)` | ❌ 暂无 |
| **中**（消息投递） | [PR #3020](https://github.com/qwibitai/nanoclaw/pull/3020) | 长工具链之后模型遗漏 `<message to>` 包裹，导致 unwrapped reply 被静默丢弃；该 PR 同时关联 #2369、#2393、#2404 | ✅ 修复中 |
| **中**（容器卡死） | [PR #3019](https://github.com/qwibitai/nanoclaw/pull/3019) | 30 分钟零 SDK 活动时容器被 host 上限杀掉，需 stall watchdog 恢复 hung in-flight 工具 | ✅ 修复中 |

说明：#3017 处于"最新版原生编译失败"的阻断状态，短期内会影响 Windows 用户的升级路径，建议维护者优先评估是否在 CI 中加入 VS2026 + better-sqlite3 最新版组合。

---

## 6. 功能请求与路线图信号

- **[愿景级] temporal / incognito sessions** — [PR #3018](https://github.com/qwibitai/nanoclaw/pull/3018)
  一次性、无记忆的 DM 会话，反映出对"隐私隔离 + 短期交互"场景的需求。作者已主动引导回 skill 路径，预计会以 skill 形式二次提交。
- **[已开工] provider-agnostic persistent memory** — [PR #3012](https://github.com/qwibitai/nanoclaw/pull/3012)
  若合入，将成为跨 provider 体验一致性的关键能力。
- **[已开工] /add-audit skill** — [PR #2987](https://github.com/qwibitai/nanoclaw/pull/2987)
  本地 opt-in 审计日志，对应运维侧的强诉求。
- **[架构性] Guard seam** — [PR #2986](https://github.com/qwibitai/nanoclaw/pull/2986)
  一旦合入，后续安全相关 feature 都将以此为基线，路线图权重高。

合并概率判断：Guard seam 与 Tasks 单出口属于"破坏性收敛"，建议维护者评估是否需要配套 deprecation 公告；其余 PR 倾向于小步快跑式合入。

---

## 7. 用户反馈摘要

两条 Issue 评论数均为 0，反馈全部集中在描述文本中：

- **真实运行数据**：#3016 提交者 glifocat 反馈其安装在约一周内被误报 82 次 quota 错误，**但每次对应的轮次都正常完成**。这是一个典型的"日志噪声掩盖真实故障"的可观测性问题，影响运维信噪比。
- **环境兼容性**：#3017 提交者 shayshankr 使用的是较新的工具链组合（VS 2026 18.7.3、Node 24.14.1、better-sqlite3 11.10.0），失败发生在原生的 `npm install` 阶段。该反馈说明项目当前原生依赖未覆盖最新工具链。
- **痛点场景**：#3019 描述的容器卡死发生在"繁忙 agent 群组"上，提示高并发 / 长任务场景的健壮性仍是当前用户体验短板；#3020 描述的"长工具链之后忘包裹"则是另一个长期存在的真实使用摩擦。

满意度信号：从 RFC #3018 的体例（主动遵循 CONTRIBUTING、声明非合并就绪）可见，社区贡献者对项目规范高度认同，参与质量较高。

---

## 8. 待处理积压

按积压时长排序：

| 编号 | 类型 | 标题 | 开放天数 | 状态 |
|---|---|---|---|---|
| [#2986](https://github.com/qwibitai/nanoclaw/pull/2986) | PR（核心团队） | Guard seam | 3 | OPEN |
| [#2987](https://github.com/qwibitai/nanoclaw/pull/2987) | PR（核心团队） | /add-audit skill | 3 | OPEN（已 rebase） |
| [#2988](https://github.com/qwibitai/nanoclaw/pull/2988) | PR（核心团队） | Tasks: one-door delivery | 3 | OPEN |
| [#3012](https://github.com/qwibitai/nanoclaw/pull/3012) | PR（核心团队） | provider-agnostic persistent memory | 2 | OPEN |
| [#3017](https://github.com/qwibitai/nanoclaw/issues/3017) | Issue | Windows VS2026 编译失败 | 1 | OPEN，环境阻断 |
| [#3016](https://github.com/qwibitai/nanoclaw/issues/3016) | Issue | rate_limit_event 误报 quota | 1 | OPEN，可观测性影响 |

**提醒维护者关注**：核心团队 4 条架构 PR 已形成明显的耦合关系（guard-seam、tasks 单出口、audit skill、memory 持久化均互相引用），建议集中评审以避免相互阻塞；同时 #3017 作为 Windows 用户的编译阻断 issue，建议在下一个 patch 版本前给出临时 workaround（例如锁定 better-sqlite3 版本或提供预编译产物）。

---

*报告生成时间：2026-07-12 · 数据范围：过去 24 小时（2026-07-11 ~ 2026-07-12）*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-07-12 | 数据周期：过去 24 小时**

---

## 1. 今日速览

NullClaw 今日整体活跃度**偏低**，呈现典型的"低 PR + 低 Release + 轻量社区互动"状态：过去 24 小时仅产生 2 条 Issue 更新，无 PR 合并，无新版本发布。讨论内容聚焦于一个长期未解的 Telegram 频道稳定性 Bug（Issue #972，已存在 12 天）与一个明确的新功能提案（Issue #975，grok-cli provider 接入请求）。项目当前节奏平稳但社区响应节奏偏慢，建议维护者关注积压 Issue 的处理。

---

## 2. 版本发布

⚠️ **无新版本发布**。本节今日省略。

---

## 3. 项目进展

📭 **今日无 PR 合并或关闭**，代码层面无实质性推进。开发流水线在过往 24 小时内处于静默状态。

---

## 4. 社区热点

### 🔥 Issue #972 — Telegram 频道闲置后停止响应
- **链接**：[nullclaw/nullclaw#972](https://github.com/nullclaw/nullclaw/issues/972)
- **评论数**：3 条 | **👍**：0
- **状态**：OPEN，自 2026-06-30 起持续未关闭

**讨论焦点**：用户 `i11010520` 报告 Telegram 通道在闲置一夜或更长时间后，次日早晨停止响应。后端 (`nullclaw agent -m "ping"`) 仍可正常工作，说明问题局限于 Telegram 适配层，而非核心 Agent 引擎。这是典型的**长连接保活/会话过期**类问题。

### 🆕 Issue #975 — 添加 grok-cli provider
- **链接**：[nullclaw/nullclaw#975](https://github.com/nullclaw/nullclaw/issues/975)
- **评论数**：1 条 | **👍**：0
- **状态**：OPEN，当日新开

**讨论焦点**：用户 `yanggf8` 提议仿照现有 `claude-cli`、`codex-cli`、`gemini-cli` 的子进程调用模式，新增 `grok-cli` provider，复用本地 `grok` CLI 已登录的会话（grok.com 订阅），从而实现"unmetered"调用。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 **中** | [#972](https://github.com/nullclaw/nullclaw/issues/972) | Telegram 通道长时闲置（>一晚）后失联，后端正常 | ❌ 无 |

**分析**：Issue #972 属于"功能可用但可靠性不足"类问题，严重程度中等——不影响核心 Agent 推理，但使 Telegram 这一重要入口在常规使用场景（次日继续对话）下完全失效。已存在 12 天仍无修复 PR 或维护者回应，建议升级关注。

---

## 6. 功能请求与路线图信号

### 📌 grok-cli provider（[#975](https://github.com/nullclaw/nullclaw/issues/975)）

- **可纳入性评估**：**高**。该请求与项目现有 CLI 子进程 provider 架构高度一致（`src/provider_probe.zig:43` 已有 `claude-cli`/`codex-cli`/`gemini-cli` 模式），实施成本相对可控。
- **价值判断**：复用用户已有的 grok.com 订阅，无 API 计量费用，对个人用户具备明显吸引力，**与项目定位契合**。
- **建议**：维护者可在 `provider_probe.zig` 增加一个 provider kind 分支，并在 provider 注册表中新增 `grok-cli` 条目，预期工作量 1–2 天。

---

## 7. 用户反馈摘要

| 维度 | 反馈内容 | 来源 |
|---|---|---|
| 🔧 **使用场景** | 用户在 EC2 实例上常驻运行 NullClaw，并通过 Telegram 进行日常交互 | Issue #972 |
| 😡 **痛点** | Telegram 通道"每天早晨失效"是**高频日常障碍**，而非偶发问题 | Issue #972 评论 |
| 💡 **诉求** | 希望复用 grok.com 订阅额度接入 Grok 模型，降低使用成本 | Issue #975 |
| ✅ **满意度** | 用户明确表示 `nullclaw agent` 后端指令调用无异常，对核心能力满意 | Issue #972 |

---

## 8. 待处理积压

| Issue | 标题 | 等待天数 | 风险评估 |
|---|---|---|---|
| [#972](https://github.com/nullclaw/nullclaw/issues/972) | telegram channel stop respond after some idle time | **12 天** | 🟡 影响 Telegram 用户日常使用，建议维护者优先排查 session / webhook 保活机制 |

> 💡 **提醒**：除今日数据外，建议维护者回顾仓库中超过 30 天未关闭的 Issue 历史，避免同类长连接类 Bug 在其他通道（Discord、Slack 等）中重复出现。

---

### 📊 项目健康度评估

| 指标 | 状态 | 备注 |
|---|---|---|
| 社区活跃度 | 🟡 中低 | 当日仅 2 条 Issue 更新，无 PR 交互 |
| 维护响应速度 | 🟡 偏慢 | Issue #972 已存在 12 天无维护者响应 |
| 功能迭代节奏 | 🔴 停滞 | 无 PR 合并、无 Release |
| Bug 修复效率 | 🟡 待改善 | 已知 Bug 长期未修复 |
| 新功能吸纳力 | 🟢 良好 | Issue #975 提案契合现有架构，易落地 |

**总体判断**：项目今日处于**静默期**，代码侧无推进但社区需求明确。建议维护者短期聚焦：(1) 排查并修复 Issue #972 的 Telegram 长连接问题；(2) 评估 Issue #975 的 grok-cli provider 实施可行性，以维持社区信心。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-12

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub 仓库 · 统计窗口：2026-07-11 ~ 2026-07-12

---

## 一、今日速览

IronClaw 今日进入**高强度 Reborn 运行时迭代期**，单日 PR 流量达 50 条（其中 37 条待合并、13 条已关闭），Issues 8 条（1 关闭）。工作重心集中在三条主线：(1) **Reborn 运行时硬化与错误信道重构**（如 PR #5965 把可恢复错误送达模型）；(2) **扩展运行时（extension-runtime）多 PR 列车推进**（P0/P1/P2 已落地，正在向 P3+ 推进）；(3) **CI 与 E2E 稳定性专项**（libSQL 覆盖率、Slack 触发器竞态、Responses API 契约覆盖）。同时社区暴露出 **安全披露通道缺失、Windows 本地开发路径错误、本地 MCP 传输层空缺** 三个跨平台与生态短板，需维护者尽快响应。

---

## 二、版本发布

**今日无新版本发布。**

仓库内仍有 PR [#5598](https://github.com/nearai/ironclaw/pull/5598) `chore: release` 处于开放状态，计划推进以下版本变更（**API 破坏性变更提醒**）：

| Crate | 旧版本 → 新版本 | 兼容性 |
|---|---|---|
| `ironclaw_common` | 0.4.2 → 0.5.0 | ⚠ **API 破坏性变更** |
| `ironclaw_safety` | 0.2.2 → 0.2.3 | ✓ 向后兼容 |
| `ironclaw_skills` | 0.3.0 → 0.4.0 | ⚠ **API 破坏性变更** |
| `ironclaw`（主包） | 0.24.0 → 0.29.1 | — |

⚠ 集成方在升级前应特别留意 `ironclaw_common` 与 `ironclaw_skills` 的破坏性变更，建议关注该 PR 的 changelog diff。

---

## 三、项目进展（已合并/关闭 PR）

| PR | 标题 | 意义 |
|---|---|---|
| [#5951](https://github.com/nearai/ironclaw/pull/5951) | `fix(llm): recover near.ai streaming tool-call args with trailing content` | 修复 near.ai SSE 流式工具调用在 DeepSeek-V4-Flash 等推理模型追加尾部 token 时，参数被压成空 `{}` 的严重 bug |
| [#5997](https://github.com/nearai/ironclaw/pull/5997) | `test(e2e): address Emulate fixture review` | 处理 #5989 合入前未跟进的 Gemini/CodeRabbit 评审意见，加固 E2E fixture |
| [#6003](https://github.com/nearai/ironclaw/pull/6003) | `ci: route workflows to canceled runner` | 误开 PR，维护者可直接删除 |

整体来看，今日真正的"功能前进"集中在两条线：
- **扩展运行时列车（PR 2/8 → 3/8）**：P1 [#5995](https://github.com/nearai/ironclaw/pull/5995)（manifest v3 + VendorId + 配方 + 解析记录）与 P2 [#5996](https://github.com/nearai/ironclaw/pull/5996)（适配器 + ExtensionHost + 调度切换）已就位，标志着从"通用契约"向"工具调度切换"的关键跨越。
- **Reborn Responses API 测试覆盖**：[#5991](https://github.com/nearai/ironclaw/pull/5991) 把 16 个 Responses API E2E 用例纳入 PR CI 强制门禁，呼应 Issue [#5990](https://github.com/nearai/ironclaw/issues/5990) 中归纳的语义保真、生命周期与外部工具缺口。

---

## 四、社区热点

### 🔥 讨论最密集
**Issue [#5992 - Daily ironclaw failure taxonomy — 2026-07-11](https://github.com/nearai/ironclaw/issues/5992)**（作者：pranavraja99）
每日基准失败分类报告。`clawbench` 跑出 138 个非通过用例，其中 **77+ 任务被指为基准缺陷而非模型质量问题**，提示需要排查评测套件本身。

### 🔒 安全披露通道缺失（重要关切）
**Issue [#6000 - How should security issues be reported?](https://github.com/nearai/ironclaw/issues/6000)**（作者：Anubhav-Kaul）
报告者手握 Reborn runtime 潜在安全发现，但：
- 仓库无 `SECURITY.md`，`nearai/.github` 也无
- GitHub **私有漏洞报告功能被禁用**
- 无法私下披露任何敏感漏洞细节

这是今日**最值得维护者立即处理的元问题**——一旦公开细节将无法回滚。

### 🪟 跨平台可用性
**Issue [#5999 - local-dev-yolo cannot start on Windows](https://github.com/nearai/ironclaw/issues/5999)**
`MountAlias` 强制要求 `/` 根 POSIX 路径，导致 Windows 主机路径根本性不兼容，不仅是测试失败，**生产 profile 启动也会失败**。

### 🔌 协议层盲区
**Issue [#5998 - Reborn has no transport for a local MCP server](https://github.com/nearai/ironclaw/issues/5998)**
stdio 被拒、loopback HTTP 被 https-only 通道拒绝，**同机 MCP 服务无任何可用传输**，这是生态接入的关键堵点。

---

## 五、Bug 与稳定性

| 严重度 | Issue | 问题 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 **严重** | [#5998](https://github.com/nearai/ironclaw/issues/5998) | Reborn 无本地 MCP 传输层（std 与 loopback 都被拒） | ❌ 暂无 |
| 🔴 **严重** | [#5999](https://github.com/nearai/ironclaw/issues/5999) | Windows 启动 `local-dev-yolo` 失败，`MountAlias` 路径要求 POSIX | ❌ 暂无 |
| 🟠 **高** | [#5968](https://github.com/nearai/ironclaw/issues/5968) | 通用 HTTP 工具连接无 MCP 的第三方 API（如 Attio）报错且无鉴权/egress 支持 | ❌ 暂无 |
| 🟠 **高** | [#5987](https://github.com/nearai/ironclaw/issues/5987) | NEAR AI 远程证明文档过于复杂，用户要求本地代理服务 | ❌ 暂无（属于"易用性 bug"） |
| 🟡 **中** | [#5969](https://github.com/nearai/ironclaw/issues/5969) | GLM-5.2 不在 opencode 默认模型列表中，需手工配置 | ✅ **已关闭**（仅 1 评论，无明确 fix PR 链接） |
| 🟢 **已修复** | [#5951](https://github.com/nearai/ironclaw/pull/5951) | near.ai 流式工具调用尾部 token 导致参数丢失 | ✅ **已合入** |

**趋势判断**：今日 bug 报告集中在**本地化与跨平台**（Windows、本机 MCP、本地代理），表明 Reborn 已开始被更广泛场景试用，但也暴露出"云端 hardened"假设与"本地开发/集成"诉求之间的张力。

---

## 六、功能请求与路线图信号

| 请求 | Issue | 路线图可能性 |
|---|---|---|
| **本地代理 + 证明验证服务** | [#5987](https://github.com/nearai/ironclaw/issues/5987) | 🟢 高 — 显著降低 CVM 接入门槛，与"私有推理"产品定位契合 |
| **通用 HTTP 工具支持鉴权 + egress** | [#5968](https://github.com/nearai/ironclaw/issues/5968) | 🟢 高 — 补齐 MCP 缺失生态，PR #5965 错误信道改造可复用 |
| **Responses API 三阶段闭环** | [#5990](https://github.com/nearai/ironclaw/issues/5990) | 🟢 极高 — PR #5991 已把 E2E 卡入 CI，等于已立项 |
| **扩展运行时（8-PR 列车）** | [#5993](https://github.com/nearai/ironclaw/pull/5993) / [#5995](https://github.com/nearai/ironclaw/pull/5995) / [#5996](https://github.com/nearai/ironclaw/pull/5996) | 🟢 已立项 — P0/P1/P2 在 main 上推进中 |
| **队列化消息转向（queued-message steering）** | [#5981](https://github.com/nearai/ironclaw/pull/5981) | 🟢 已立项 — 分片 1/2 开放，分片 2/2（预算）即将合入 |
| **SECURITY.md 与私有漏洞报告** | [#6000](https://github.com/nearai/ironclaw/issues/6000) | 🟠 必须 — 安全合规底线 |
| **Windows 兼容** | [#5999](https://github.com/nearai/ironclaw/issues/5999) | 🟠 中 — 取决于项目对 Windows 桌面的官方态度 |

---

## 七、用户反馈摘要

- **GLM-5.2 接入摩擦**（[#5969](https://github.com/nearai/ironclaw/issues/5969)）：用户尝试在 opencode 中使用 NEAR AI 时，发现 GLM-5.2 未列入默认模型清单，必须手工改配置。说明 **新模型上架 → 客户端可见** 之间缺乏自动化同步机制。
- **远程证明（attestation）门槛过高**（[#5987](https://github.com/nearai/ironclaw/issues/5987)）：用户对官方文档的复杂度明确表达不满，希望有一个本地代理服务替他们完成 CVM 证明验证与推理代理，把"实现细节"封装掉。
- **第三方 API 集成断点**（[#5968](https://github.com/nearai/ironclaw/issues/5968)）：当目标服务无 MCP 集成时，通用 HTTP 工具返回非描述性错误且无鉴权/egress 支持，体验"半成品"感明显。
- **安全披露挫败感**（[#6000](https://github.com/nearai/ironclaw/issues/6000)）：一位外部研究者在 Reborn runtime 中发现潜在问题，但因无私有披露通道而无法负责任上报，反映**安全治理流程缺位**对外部贡献者参与意愿的负面影响。
- **基准评测可信度**（[#5992](https://github.com/nearai/ironclaw/issues/5992)）：日报指出 138 个失败中 77+ 为基准缺陷，说明用户开始对"评测分数 vs 实际能力"的偏差敏感。

---

## 八、待处理积压提醒

| 项 | 链接 | 创建日期 | 风险 |
|---|---|---|---|
| **PR #5639** main CI checks staging-release 推广 | [#5639](https://github.com/nearai/ironclaw/pull/5639) | 2026-07-04 | 已停留 8 天，size L，**关乎主干 CI 流程**，建议核心维护者尽快 review |
| **Issue #6000** 安全披露通道缺失 | [#6000](https://github.com/nearai/ironclaw/issues/6000) | 2026-07-11 | 0 评论，0 👍，但**安全流程级别**，建议当日响应（启用 GHSA 私有报告 + 增补 SECURITY.md） |
| **Issue #5998** 本地 MCP 传输空缺 | [#5998](https://github.com/nearai/ironclaw/issues/5998) | 2026-07-11 | 0 评论，影响所有 on-device 用例，**架构层阻塞** |
| **Issue #5968** 通用 HTTP 工具对无 MCP 第三方支持 | [#5968](https://github.com/nearai/ironclaw/issues/5968) | 2026-07-10 | 2 天未动，生态扩展强诉求 |
| **PR #5598** release chore | [#5598](https://github.com/nearai/ironclaw/pull/5598) | 2026-07-03 | 停留 9 天，0 评论；含 2 个破坏性变更需协调发版窗口 |
| **PR #5934** admin 密钥范围限定到默认 agent | [#5934](https://github.com/nearai/ironclaw/pull/5934) | 2026-07-10 | 涉安全模型，size L，需核心评审 |

---

## 📊 项目健康度看板

| 指标 | 数值 | 评估 |
|---|---|---|
| 日 PR 流量 | 50 | 🔥 极高，需关注 review 带宽 |
| 日 Issue 流量 | 8 | ✅ 适中 |
| 已合并/关闭 PR 比例 | 13/50 = 26% | ⚠ 偏低，主要因扩展运行时列车按 PR 顺序串行 review |
| 安全/合规缺口 | 1（#6000） | 🔴 需立即响应 |
| 跨平台兼容性 bug | 1（#5999） | 🟠 建议短期修复 |
| 重大功能列车推进 | extension-runtime P0/P1/P2 | 🟢 健康 |
| API 破坏性变更 | 2 crate（#5598） | ⚠ 升级前需评估 |

> **一句话总结**：项目处于 **Reborn 重塑 + 扩展生态奠基**的高速迭代期，CI 与运行时硬化扎实推进；但**安全治理、跨平台、本地 MCP 协议**三块短板若不快速补齐，将在 1-2 周内成为社区情绪集中爆发点。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**📅 报告日期：2026-07-12**
**🔗 项目仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1️⃣ 今日速览

LobsterAI 项目今日整体活跃度**偏低**。过去 24 小时内无新版本发布、无 PR 合并/关闭，仅有 3 条 Issue 和 1 条 PR 产生了更新记录（均为 stale 标记刷新，无实质性新评论）。值得关注的信号是：当前所有活跃 Issue 均已超过 3 个月未得到维护者实质性回应（创建于 2026-04-02），社区互动呈现明显的**响应滞后**态势。项目维护节奏需要关注。

| 指标 | 数值 | 评价 |
|------|------|------|
| 新开/活跃 Issues | 3 | 🟡 均为 stale 刷新 |
| 已关闭 Issues | 0 | 🔴 无 |
| 待合并 PR | 1 | 🟡 stale 状态 |
| 新版本发布 | 0 | 🟡 暂无 |
| 社区互动（评论/反应）| 极低（4 个 👍）| 🔴 偏低 |

---

## 2️⃣ 版本发布

⚠️ **今日无新版本发布。**

> 历史最新版本（参考）：v2026.4.1（基于 Issue #1329 用户反馈推断当前线上版本）。

---

## 3️⃣ 项目进展

### 🚧 今日无 PR 合并或关闭

**待合并 PR（停滞中）：**

- **[#1327](https://github.com/netease-youdao/LobsterAI/pull/1327)** - 功能增强：ToolUse 工具调用块批量展开/折叠
  - 作者：MaoQianTu ｜ 创建：2026-04-02 ｜ 状态：OPEN [stale]
  - 进展：PR 已开放约 **100 天**，但仍处于"待合并"状态，等待维护者 Review。
  - 关联 Issue：[#1326](https://github.com/netease-youdao/LobsterAI/issues/1326)
  - **评估**：该 PR 改动局部、明确（仅涉及 `CoworkSessionDetail.tsx` 中 `ToolCallGroup` 组件），合并风险低，但缺乏维护者关注。

📌 **结论**：今日项目代码层面**无任何推进**，所有 PR 仍处于待评审状态。

---

## 4️⃣ 社区热点

### 🔥 讨论焦点：ToolUse 工具块交互体验

**热度最高的话题**集中在 ToolUse（工具调用块）的批量操作能力，由社区贡献者 **MaoQianTu** 同步发起 Issue + PR：

- **[Issue #1326](https://github.com/netease-youdao/LobsterAI/issues/1326)** - 功能增强：ToolUse 工具调用块批量展开/折叠（1 条评论，0 👍）
- **[PR #1327](https://github.com/netease-youdao/LobsterAI/pull/1327)** - 对应的实现 PR（关联 Closes #1326）

**诉求分析**：
- 在 Cowork 会话中，当单回合 AI 调用了多个工具时，用户被迫**逐个点击**展开/折叠每个工具块，操作效率低下。
- 用户期望一个「展开全部 / 折叠全部」的开关按钮，一次性控制整个回合的工具块。
- 这反映了一个典型的**长会话 UI 优化诉求**——随着工具调用越来越复杂，单回合可能包含 5+ 个工具块，逐个操作严重影响可读性和排查效率。

---

## 5️⃣ Bug 与稳定性

### 🐞 报告中的 Bug 问题（按严重度排列）

| 严重度 | Issue | 简述 | 状态 | 修复 PR |
|--------|-------|------|------|---------|
| 🟠 **中** | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | 新建定时任务时通知渠道下拉框**没有任何选项**，只能选"不通知" | OPEN [stale] | ❌ 无 |

**[#1329 详情](https://github.com/netease-youdao/LobsterAI/issues/1329)**（作者：gongfen0121）

- **环境**：v2026.4.1
- **现象**：定时任务（Scheduled Task）创建流程中，通知渠道（Notification Channel）下拉选择框为空，导致用户实际上无法配置任务完成后的通知推送。
- **影响**：定时任务的"通知"核心功能**完全不可用**，属于功能性 Bug（非崩溃但功能缺失）。
- **是否影响核心场景**：⚠️ 影响自动化场景——用户配置定时任务后无法接收结果通知，等同于定时任务"沉默执行"，违背该功能的设计初衷。
- **缺失的 Fix PR**：**无**。该 Bug 已开放 100 天仍未有任何维护者响应。

---

## 6️⃣ 功能请求与路线图信号

### 📋 待纳入路线图评估的功能请求

| 功能 | Issue | 已有 PR? | 优先级建议 | 评估 |
|------|-------|----------|------------|------|
| ToolUse 批量展开/折叠 | [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | ✅ [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | 🟢 中 | **建议直接合并**，改动局部清晰 |
| 会话列表错误状态红点 | [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | ❌ 无 | 🟡 中 | 合理但需设计权衡，避免视觉噪音 |
| 定时任务通知渠道缺失 | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | ❌ 无 | 🔴 高 | **实质为 Bug**，应优先修复 |

**[#1330 详情](https://github.com/netease-youdao/LobsterAI/issues/1330)**（作者：MaoQianTu）

- **诉求**：会话列表侧边栏中，对 `error` 状态的会话增加红色圆点徽标（含淡红色光晕），与现有 `running`（蓝色脉冲）/未读（蓝色静态）指示器保持视觉一致。
- **合理性**：当前 error 状态完全无可视化提示，用户排查问题时必须逐个点击会话，效率低。
- **落地难度**：🟢 低，主要涉及 CSS class 与列表渲染逻辑（Tailwind `bg-red-500` + `shadow-[0_0_6px_rgba(239,68,68,0.5)]` 即可实现）。

**路线图信号解读**：从最近的 3 个 Issue 看，社区关注的重点是 **UI/UX 细节打磨**（交互效率、状态可视化）和 **已上线功能可用性修复**（定时任务通知），暂未涉及大规模架构或新功能模块。

---

## 7️⃣ 用户反馈摘要

由于所有活跃 Issue 评论数均为 0-1 条，**用户反馈样本极为有限**，可提炼的痛点如下：

### 😣 真实用户痛点

1. **长对话工具调用难以浏览**（来源：#1326）
   > "当 AI 回合包含多个工具调用（ToolUse）时，用户需要逐个点击每个工具块才能展开或折叠，操作繁琐，效率低下。"
   - **场景**：复杂任务执行时，单回合可能调用 10+ 个工具，UI 层缺少批量控制。

2. **错误会话难以识别**（来源：#1330）
   > "Cowork 会话列表中，当会话执行出错（status 为 `error`）时，侧边栏没有任何可视化提示。"
   - **场景**：用户运行大量会话，需要快速定位失败任务。

3. **定时任务通知"哑火"**（来源：#1329）
   > "新建的定时任务通知渠道没有选项，只能选不通知。"
   - **场景**：用户依赖定时任务做自动化，但任务完成后无任何反馈通道（很可能用户错过了许多已执行的任务）。

### 😊 暂未观察到正面反馈

Issues 中无明确的功能满意表达或正面评论样本。

---

## 8️⃣ 待处理积压 ⚠️

### 📦 长期未响应的关键项（≥90 天未维护者响应）

| 类型 | 编号 | 标题 | 创建至今 | 等待时间 | 状态 |
|------|------|------|----------|----------|------|
| 🔴 **Bug** | [#1329](https://github.com/netease-youdao/LobsterAI/issues/1329) | 定时任务通知渠道无选项 | 2026-04-02 | **~101 天** | OPEN [stale] |
| 🟡 **PR** | [#1327](https://github.com/netease-youdao/LobsterAI/pull/1327) | ToolUse 批量展开/折叠 | 2026-04-02 | **~101 天** | OPEN [stale] |
| 🟡 **Feature** | [#1326](https://github.com/netease-youdao/LobsterAI/issues/1326) | ToolUse 批量展开/折叠 | 2026-04-02 | **~101 天** | OPEN [stale] |
| 🟢 **Feature** | [#1330](https://github.com/netease-youdao/LobsterAI/issues/1330) | 会话列表错误状态红点 | 2026-04-02 | **~101 天** | OPEN [stale] |

### 🚨 给维护者的提醒

1. **【紧急】[#1329 通知 Bug](https://github.com/netease-youdao/LobsterAI/issues/1329) 影响核心功能可用性**：定时任务无法通知用户，相当于"自动化功能失效但用户不知情"，建议优先排查。

2. **【建议合并】[#1327 PR](https://github.com/netease-youdao/LobsterAI/pull/1327)**：改动范围明确、有配套 Issue、PR 描述详尽，已等待超过 3 个月无 Review，建议安排一次维护者 Review 评估合并可行性。

3. **【关注】社区活跃度偏低信号**：所有 4 个活跃项均被 GitHub 自动标记为 `[stale]`，可能意味着：
   - 维护者人手紧张，或
   - 项目当前重心在私有开发分支（公开仓库暂停更新），或
   - 缺少明确公开的 Issue 响应 SLA。

   建议维护者定期（如每 2 周）清理 stale 标签或给出阶段性回复。

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码推进 | ⭐⭐☆☆☆ | 无合并、无发布 |
| 社区互动 | ⭐⭐☆☆☆ | 评论稀少、👍 几乎为零 |
| Issue 响应 | ⭐☆☆☆☆ | 所有活跃 Issue 超 90 天无响应 |
| Bug 修复 | ⭐☆☆☆☆ | 已知 Bug 无 Fix PR |
| **综合** | **⭐⭐☆☆☆ 偏低** | 维护节奏需要重新激活 |

---

> 💡 **报告说明**：本日报基于 LobsterAI GitHub 公开仓库过去 24 小时的活动数据生成。所有 Issue/PR 链接均可直接点击访问。如需进一步分析某个具体主题或对比历史趋势，欢迎提出。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期：2026-07-12** ｜ **项目地址：** [github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 项目今日社区活跃度处于**低位**，过去 24 小时内无新增或活跃 Issue、无新版本发布，唯一可见的动态是一笔待合并的 PR（#1147）。整体而言，开发活动集中在一个 CalDAV 集成层面的 Bug 修复上，说明项目当前处于功能打磨与稳定性优化阶段，而非大规模功能迭代期。维护团队响应面较小，但单笔提交的质量较高，针对的是影响工具调用正确性的核心问题。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展

今日无 PR 被合并或关闭。

唯一活跃的 PR #1147（作者：[@thoscut](https://github.com/moltis-org/moltis/pull/1147)）仍处 OPEN 状态，尚未推进至合并阶段：

- **修复内容：** CalDAV 客户端 `list_events` 方法此前将 `range` 参数绑定为未使用的 `_range` 变量，导致客户端始终拉取日历中全部事件资源，使工具调用中的 `start` / `end` 参数在所有服务器上都**完全失效**，与文档描述不符。
- **改进方案：** 修复后 `list_events` 将通过标准 CalDAV `calendar-query` 服务端时间范围过滤，避免下载冗余事件，同时让工具语义与文档对齐。
- **影响范围：** 涉及所有依赖 `list_events` 工具按时间窗口获取日历数据的调用路径，属于功能正确性修复而非性能优化。
- **链接：** [PR #1147](https://github.com/moltis-org/moltis/pull/1147)

项目整体向前推进**有限**，但该修复对 CalDAV 集成的语义正确性具有关键意义。

---

## 4. 社区热点

今日无可量化的讨论热度（Issues 数为 0、PR 评论为 0），无明显热点话题。

建议关注者主动围绕 PR #1147 进行评审与反馈——这是当前社区最值得聚焦的入口。

---

## 5. Bug 与稳定性

| 严重程度 | 问题描述 | 状态 | Fix PR |
|---------|---------|------|--------|
| **中高** | `CalDavClient::list_events` 的 `range` 参数无效，始终返回全部事件；违反工具文档承诺 | 已有 PR，待合并 | [#1147](https://github.com/moltis-org/moltis/pull/1147) |

**分析：** 该 Bug 不会导致崩溃，但属于"静默错误"——工具调用者可能误以为已按时间过滤，实际数据量却远超预期，可能引发下游 Token 浪费、上下文污染或重复处理。严重程度评级为"中高"，原因在于其**影响语义正确性**而非单纯性能，且可能在长日历场景下放大问题。

---

## 6. 功能请求与路线图信号

今日无新功能请求提交。结合 PR #1147 的修复方向，可观察到以下**潜在路线图信号**：

- **CalDAV 集成质量提升：** 项目正在收紧对外部协议（CalDAV）的契约一致性，这是 AI Agent 与外部系统对接的基础设施层建设。
- **工具语义与文档对齐：** PR 描述明确提到"contradicting the docs"，暗示团队开始系统性排查工具行为与文档承诺的一致性问题，未来可能还会有同类修复。

---

## 7. 用户反馈摘要

今日无新增 Issue，暂无来自社区的直接用户反馈可供提炼。

唯一可参考的用户侧信号来自 PR #1147 的描述本身——它揭示了一类**隐式用户痛点**：开发者或 Agent 调用方基于文档预期编写时间窗口查询逻辑，却因 Bug 拿到全量数据，说明 Moltis 在外部集成层面的文档-实现一致性仍是用户信任的关键。

---

## 8. 待处理积压

- **PR #1147**（[链接](https://github.com/moltis-org/moltis/pull/1147)）：唯一待合并的提交，创建于 2026-07-11，状态 OPEN，无评论、无点赞。建议维护者尽快安排评审，避免影响下一版本质量基线。

---

## 项目健康度评估

| 指标 | 状态 | 备注 |
|------|------|------|
| 社区活跃度 | 🟡 低 | 24h 仅 1 笔 PR，0 Issue |
| 代码流入 | 🟡 弱 | 无合并 |
| 响应及时性 | ⚪ 无法评估 | 无待响应 Issue |
| 提交质量 | 🟢 高 | PR #1147 描述清晰、根因明确 |
| 发布节奏 | ⚪ 无活动 | 今日无版本 |

**综合判断：** Moltis 今日处于**静默维护期**，社区反馈通道暂时平静，但存在一笔直接影响工具语义的高价值修复等待落地。建议维护者对 PR #1147 给予优先关注，确保 CalDAV 时间过滤能力在下一版本中可用。

---

*报告基于 2026-07-12 抓取的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报

**日期：2026-07-12** | **数据来源：agentscope-ai/QwenPaw 仓库** | **报告类型：项目健康度与社区动态**

> ⚠️ **数据说明**：本次提供的 Issue/PR 链接均指向 `agentscope-ai/QwenPaw`，与您所述的 `CoPaw` 仓库存在命名差异。报告基于原始数据中的 `QwenPaw` 标识生成，请在引用时注意核对。

---

## 1. 今日速览

过去 24 小时内项目活跃度**显著偏高**，共产生 23 条 Issue 更新（0 条关闭）和 7 条 PR 更新（4 条已合并/关闭、3 条待审）。讨论焦点高度集中于 **v2.0.0 升级后兼容性回退**、**Windows 沙箱失控**、**上下文压缩/截断导致 API 400 错误**三大方向，社区呈现典型的"重大版本发布后的阵痛期"特征。值得注意的是，单一深色模式文字对比度问题（#5969）触发了 5 个重复/迭代 PR（#5970–#5975），反映出协作流程上存在分支清理与审查瓶颈。整体而言，**Bug 密度高、修复链路尚未完全打通**。

---

## 2. 版本发布

**无新版本发布**。

距离上一个正式版本 `v2.0.0` 已积累大量回归性反馈（见下文 Bug 章节），社区强烈期待一个 `v2.0.1` 补丁版本以集中修复以下高优先级问题：
- Windows 沙箱不可关闭（#5951）
- PyInstaller 后端缺 `_scripts` 子模块（#5965、#5952）
- 上下文压缩拆散 `tool_call`/`tool_result` 配对（#5960、#5962、#5972）
- 旧会话数据反序列化 Pydantic 错误（#5956、#5964、#5967）

---

## 3. 项目进展

今日 **4 条 PR 关闭/合并**，但内容高度同质化，主要为深色模式文字对比度问题的多轮迭代：

| PR | 状态 | 主题 | 备注 |
|---|---|---|---|
| [#5970](https://github.com/agentscope-ai/QwenPaw/pull/5970) | 🔴 CLOSED | fix(console): dark mode text contrast | 第一版修复 |
| [#5971](https://github.com/agentscope-ai/QwenPaw/pull/5971) | 🔴 CLOSED | 同上 | 引入 Copilot 4 条 review 建议 |
| [#5973](https://github.com/agentscope-ai/QwenPaw/pull/5973) | 🔴 CLOSED | 同上 | 调整 CSS 变量作用域 |
| [#5974](https://github.com/agentscope-ai/QwenPaw/pull/5974) | 🔴 CLOSED | 同上 | 第四个变体 |
| [#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975) | 🟢 OPEN | 同上 | 当前待合并版本 |

**进展评估**：
- ✅ **dark mode 修复路径已收敛**（#5975 整合了前序尝试）
- 🟡 **工具结果截断标准提示**（[#5953](https://github.com/agentscope-ai/QwenPaw/pull/5953)）进入待审，涉及 `ToolResultLimiter` 重构，影响面较大
- 🟡 **技能页滚动加载**（[#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968)）由首次贡献者提交，修复 #5788，质量待评估
- ⚠️ **单个 Issue 触发 5 个 PR** 的现象说明贡献者引导或分支治理机制有待加强

---

## 4. 社区热点

按评论数排序的今日最活跃讨论：

| 排名 | 编号 | 评论 | 👍 | 主题 | 链接 |
|---|---|---|---|---|---|
| 1 | #5951 | 7 | 0 | Windows 沙箱递归爆炸、内存吃满、无法关闭 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5951) |
| 2 | #5788 | 4 | 0 | 技能列表仅显示 20 项，无法滚动加载更多 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| 3 | #4124 | 4 | 0 | 长期 Feature：OpenAI / Codex OAuth 登录 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/4124) |
| 4 | #5955 | 3 | 1 | v2.0.0 技能界面 + 权限模式体验吐槽（获唯一赞） | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5955) |
| 5 | #5950 | 3 | 0 | 中文记忆 embedding 400（按字符截断） | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5950) |
| 6 | #5952 | 3 | 0 | auto-memory 缺 `_scripts` 模块 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5952) |
| 7 | #5961 | 3 | 0 | 搭配 qwen3.7-plus 陷入反复写删循环 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5961) |

**诉求解读**：
- **#5951** 反映出 Windows 桌面端的**安全沙箱设计缺陷**已严重影响可用性，且报告者已完成源码级定位（v2.0.0），属于 P0 级别。
- **#5788** 的 4 条评论集中在"渐进式渲染 + IntersectionObserver"在非滚动容器下的失效，属于**前端架构通用问题**。
- **#4124** 跨越两个多月仍未被合并/回应，对外部 OAuth 接入的需求持续存在。

---

## 5. Bug 与稳定性

### 🔴 P0 - 致命/不可用

| Issue | 现象 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| #5951 | Windows 沙箱递归弹窗、内存封顶 20GB、无法关闭 | ❌ 无 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5951) |
| #5963 | `execute_shell_command` 硬性 60s 上限，长任务静默 offload | ❌ 无 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5963) |
| #5961 | v2.0.0 + qwen3.7-plus 进入写-删-写-删死循环 | ❌ 无 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5961) |

### 🟠 P1 - 升级后回归（v1.x → v2.0.0 数据不兼容）

| Issue | 现象 | 链接 |
|---|---|---|
| #5956 | 钉钉旧会话含旧版 `file` block → Pydantic 错误 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5956) |
| #5957 | 企业微信升级后报 "/Internal error" | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5957) |
| #5962 | 微信 channel 滚动淘汰导致 `tool_result` 孤儿 → 400 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5962) |
| #5964 | 聊天列表与对话历史 session 映射丢失 → 500 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5964) |
| #5967 | `parse_legacy_memory_state` Pydantic ValidationError | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5967) |
| #5959 | 脚本安装方式仍停留在 v1.1.12.post3 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5959) |

### 🟡 P2 - 上下文压缩 / 内存子系统

| Issue | 现象 | 链接 |
|---|---|---|
| #5960 | `_split_context_for_compression()` 跨消息拆散 `tool_call/tool_result` 配对 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5960) |
| #5972 | heartbeat 恢复旧 session 致 tool 消息孤儿 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5972) |
| #5950 | 中文记忆 embedding 截断按字符而非 token | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5950) |
| #5952 | auto-memory 后台任务找不到 `agentscope.tool._builtin._scripts` | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5952) |
| #5965 | PyInstaller 打包缺 `_scripts/` 子模块（与 #5952 同源） | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5965) |

### 🟢 P3 - UI / 体验

| Issue | 现象 | Fix PR | 链接 |
|---|---|---|---|
| #5969 | 暗色模式文字颜色与背景相近 | ✅ [#5975](https://github.com/agentscope-ai/QwenPaw/pull/5975) | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5969) |
| #5788 | 技能列表 20 项截断，滚动不触发加载 | ✅ [#5968](https://github.com/agentscope-ai/QwenPaw/pull/5968) | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5788) |
| #5977 | 插件热重载后 HTTP 路由丢失 | ❌ 无 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5977) |

**模式识别**：`tool_call`/`tool_result` 配对被边界算法拆散（#5960、#5962、#5972）已演变为**系统性回归**，建议作为 `v2.0.1` 头号修复目标。

---

## 6. 功能请求与路线图信号

| 编号 | 请求 | 状态 | 路线图可能性评估 | 链接 |
|---|---|---|---|---|
| #4124 | OpenAI / Codex OAuth 登录（仿 `hermes auth add openai-codex --type oauth`） | 长期待响应 60+ 天 | 中：实现成本可控，但涉及第三方协议 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/4124) |
| #5976 | Channel 工具调用参数/结果分别可控发送，结果支持截断 | 新提 | **高**：与 #5953（已开 PR 的 `ToolResultLimiter`）目标一致 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5976) |
| #5955 | 工具白名单模式：用户可勾选"执行一次 / 永久加入白名单" | 新提 | **高**：权限 UX 痛点明确 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5955) |
| #5958 | 复用 AgentScope 的 `permission` 系统 | 新提 | 中：需在 QwenPaw 工具层做中间件适配 | [查看](https://github.com/agentscope-ai/QwenPaw/issues/5958) |
| #2664 | Intel Mac 支持 | 长期未响应 | 低：生态已转向 Apple Silicon | [查看](https://github.com/agentscope-ai/QwenPaw/issues/2664) |

**最有可能进入下一版本的特性**：工具调用结果 Channel 端截断控制（#5976 + #5953 形成需求-PR 闭环），以及工具白名单权限模式（#5955）。

---

## 7. 用户反馈摘要

**痛点集中场景**：
1. **企业用户升级受阻**：多渠道（企业微信、钉钉、微信）反馈 v2.0.0 升级后即报"Internal error"，旧会话数据无法加载（#5956、#5957、#5962、#5964）。一位用户明确表达"需要

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-07-12**
**数据来源：[zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)**

---

## 1. 今日速览

ZeroClaw 在过去 24 小时继续保持**高活跃、高吞吐**的开发节奏：Issues 端新增/活跃 50 条但**关闭数为 0**，Pull Requests 端新增/活跃 50 条，**已合并/关闭 4 条**（合并率约 8%），无新版本发布。Issue/PR 评论数量普遍不高（多数 0–3 条），但顶层 Tracker 与 P1 严重 Bug 持续吸引讨论，说明项目仍处于**集中合并主干特性、暂缓版本标签**的研发窗口期。整体判断：项目**健康度良好**（大量里程碑式追踪 + 配套 PR 同步推进），但需关注"无关闭"信号——积压的活跃讨论可能需要维护者更明确的回应节奏。

---

## 2. 版本发布

**今日无新版本发布。** 当前 [Releases](https://github.com/zeroclaw-labs/zeroclaw/releases) 页未见新标签，跨多个追踪器（#7320、#8071、#8073、#8360）整合的 **v0.8.3 里程碑**仍是主线收尾目标。

---

## 3. 项目进展

过去 24 小时合并/关闭 PR 共 **4 条**（占今日活跃 PR 的 8%），其中展示列表主要集中于**栈式未合并**的特性分支，亮点合并需进一步通过 [PR 列表](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=is%3Apr+is%3Aclosed+merged%3A2026-07-11..2026-07-12) 核对。在追踪列表中可识别的显著推进包括：

| 方向 | 代表 PR | 进展 |
|---|---|---|
| **目标模式（Goal Mode）拆分落库** | [#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687)、[#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688)、[#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689)、[#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746)、[#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) | 由 [vrurg](https://github.com/vrurg) 主持的 **5 个 XL 栈式 PR** 全部 OPEN，覆盖 goal controller/verifier、trusted goal tools、channel `/goal` admission、stop self-resume loops、daemon reload 时保留运行态——配合 [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) Tracker，今日是该特性最密集的合并期望窗口 |
| **Inkbox 原生通道** | [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) | 新增邮件 + SMS + 语音 + iMessage 一体化通道，附带 Quickstart onboarding（XL 风险面、待维护者评审）|
| **Dashboard 面板化** | [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)（in-app upgrade）、[#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905)（per-agent in-flight counter）| Web 网关体验迭代 |
| **Provider 稳定性** | [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927)（去除强制 `strip_think_tags`）、[#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838)（SSE idle-bound streaming）| 兼容 provider 与本地推理后端的健壮性升级 |
| **维护者治理** | [#8989](https://github.com/zeroclaw-labs/zeroclaw/pull/8989)（issue stale 窗口 45→15 天）、[#8924](https://github.com/zeroclaw-labs/zeroclaw/pull/8924)（复核校验证据要求）、[#9004](https://github.com/zeroclaw-labs/zeroclaw/pull/9004)（rustdoc 私有链接收敛）| 仓库维护策略由 [Audacity88](https://github.com/Audacity88) 牵头持续收紧 |

整体看，**Goal Mode 是本期最确定的"合并冲刺"主线**，其余多围绕 v0.8.3 的可靠性与可观测性收口。

---

## 4. 社区热点

按评论数排序的活跃议题，反映社区当前关切：

| 排名 | Issue / PR | 评论 | 主题 |
|---|---|---|---|
| 1 | [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) Goal mode 拆分 Tracker | 9 | 已实现但未落库的 `feat/goal-mode` 工作如何切片入库 |
| 2 | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) 系统提示词工具可用性 跨入口不对齐 | 9 | 直接路径已修，其余 gateway / WebSocket / `/think` 等入口仍存在同类隐患 |
| 3 | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) 32k 默认 context 在第一轮即超预算 | 8 | 配置默认值与系统提示 + 工具定义总尺寸的不匹配引发反复 trim |
| 4 | [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) 全通道预构建产物发布 | 6 | 单一精简产物与用户配置不匹配造成选型困惑 |
| 5 | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) skill-review fork 段错误 | 3 | 工具密集轮次后 `skills/review.rs:159` 切片越界导致进程 SIGSEGV |

**诉求画像**：社区当前最关注的两件事是 (a) **系统提示 / 工具可见性** 在多入口下的一致性，(b) **goal-mode 大特性** 落地节奏与 PR 可审阅性。这与 Goal Mode 5-PR 栈和 v0.8.3 收尾方向高度一致。

---

## 5. Bug 与稳定性

按严重程度（p1 高于 p2）汇总今日活跃的相关条目：

| 严重度 | Issue | 摘要 | 是否已有 fix PR |
|---|---|---|---|
| **p1 / S1–S2** | [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 系统提示工具声明与每轮实际生效工具在 channels / gateway / WebSocket / multimodal / `/think` 入口下不对齐 | 直接路径已修（#8053），其它入口待修 |
| **p1 / S1** | [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 默认 32k 上下文预算在第一轮即超额 ~3.3x，触发持续预防式裁剪 | 状态：in-progress，尚无可合并 PR |
| **p1 / 高风险** | [#8654](https://github.com/zeroclaw-labs/zeroclaw/issues/8654) | `skill-review` 后台 fork 切片越界 → 整个 daemon SIGSEGV（退出码 139） | in-progress，PR 暂缺 |
| **p1 / 高风险** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP / 工具 schema 克隆引起 agent loop 内存 RSS 无限增长 | 已从 #5542 拆出，独立追踪 |
| **p1 / 高风险** | [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | `zeroclaw config init` 生成的模板与守护进程自身校验冲突，导致本地语音转录静默失效 | ✅ [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) 待作者行动 |
| **p1 / S1** | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | 来自模型的非 JSON `tool_calls.arguments` 被未校验直发 OpenRouter / OpenAI 格式 provider，导致 400 + 空回复 | 状态：accepted，PR 暂缺 |
| **p1** | [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | 网关 WebSocket 生命周期与 agent turn 1:1 绑定，断连即取消在飞 turn | accepted，PR 暂缺 |
| **p2** | [#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) | WhatsApp Web 对 LID 联系人绕过 allowed-numbers 静默丢弃消息 | in-progress |
| **p2 / S3** | [#8578](https://github.com/zeroclaw-labs/zeroclaw/issues/8578) | `zerocode` 启动失败后进程不退出 | in-progress |

**观察**：今日 p1 级别 Bug 占比偏高，且大部分尚无直接 fix PR；唯一进入 PR 阶段的为 [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) → [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751)，属于配置模板与默认值一致性修复。建议维护者将 #8054（多入口工具可见性）与 #8654（SIGSEGV）优先级前置，避免 S1 隐患随 release 流转。

---

## 6. 功能请求与路线图信号

今日活跃的 enhancement / RFC 类条目释放出几条明确信号：

- **通道生态扩张**：[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952)（全通道 prebuilt）配合 [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384)（Inkbox channel）与 [#7831](https://github.com/zeroclaw-labs/zeroclaw/issues/7831)（Discord 交互对等）——指向 v0.8.3 之后的多通道接入 + 严格功能对等路线。
- **WASM 插件体系稳步推进**：[#8135](https://github.com/zeroclaw-labs/zeroclaw/issues/8135) Wasm-first 默认开、[#7822](https://github.com/zeroclaw-labs/zeroclaw/issues/7822) 生命周期 hook 订阅 RFC、[#8187](https://github.com/zeroclaw-labs/zeroclaw/issues/8187) WASI 硬件能力门控 —— 三者与 [#7314](https://github.com/zeroclaw-labs/zeroclaw/issues/7314) WASM 插件程序 Tracker 共振，意味着后续版本很可能将 `plugins-wasm` 设为默认。
- **网关面板化**：[#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) 网关内 Kanban 视图、[#6695](https://github.com/zeroclaw-labs/zeroclaw/issues/6695) Web UI Skills 管理 —— 与 [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173)、[#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905) 形成"运行可视化"主题。
- **会话与记忆**：[#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) `session_ttl_hours` 自动截断、[#8891](https://github.com/zeroclaw-labs/zeroclaw/issues/8891) 持久记忆到 parity —— 长期记忆系统的运维可控性是下个迭代的明确抓手。
- **Provider 与传输鲁棒性**：[#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927)、[#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) 已落地/接近落地，呼应 #8675 的修复期望。

综合判断：**Goal Mode 入库 + WASM 默认化** 这两条线在下一稳定版本（含 v0.8.3 或紧随其后的 0.8.4）出现概率最高。

---

## 7. 用户反馈摘要

从近期活跃 Issue 评论与摘要中可提炼的真实声音：

- **配置即坑**：[#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) 用户 `lynnkeele` 反馈：`zeroclaw config init` 自带模板与 daemon 校验冲突，**新鲜安装即静默坏掉语音转录**，没有任何错误提示——典型"开箱即坏"体验，强烈要求默认值自洽。
- **默认值灾难**：[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) `JordanTheJet` 指出默认 `agent.max_context_tokens = 32000` 在第一轮就被系统提示 + 工具定义超支 ~3.3 倍，意味着用户不动配置直接跑也会陷入"持续裁剪"循环，体验较差。
- **可达性盲区**：[#6350](https://github.com/zeroclaw-labs/zeroclaw/issues/6350) `theonlyhennygod` 反馈 WhatsApp Web 在 LID 联系人上**静默丢弃**消息——属于"安全特性反而变成可靠性事故"的高优先级痛感。
- **跨入口行为分裂**：[#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) `perlowja` 反映同一类工具可见性 Bug 在不同入口各自重现，提示缺乏**集中的"每轮有效工具"权威源**。
- **预构建产物分级诉求**：[#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) `Audacity88` 等用户希望在保持精简默认构建的同时，发布"全通道"产物供需高级功能的运维选择。
- **新通道期望**：[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) `ngamradt` 反馈 Bedrock Nova 2 Lite 缓存报错时**没有任何文档路径关闭缓存**，凸显 provider 文档矩阵需要补齐。
- **正面信号**：[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) Inkbox channel 的引入与 [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) 对 compatible provider 思维链标签的处理，显示社区上游作者持续回应本地推理 / 兼容 provider 用户群。

---

## 8. 待处理积压

下列条目长期处于 **accepted

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*