# AI CLI 工具社区动态日报 2026-09-16

> 生成时间: 2026-09-16 02:50 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具生态横向对比分析报告
**报告日期**：2026-09-16 | **覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI

---

## 1. 生态全景

当前 AI CLI 工具生态正处于**协议层加速收敛、Agent 行为边界模糊化、桌面/Windows 平台债集中爆发**的三重叠加阶段。一方面，企业级 LLM 网关协议（如 Claude Code v2.1.273 的 5 个 Hint Headers）、Provider 路由器（Pi 新增 OrcaRouter、Azure Foundry）和 ACP 等通信规范快速标准化；另一方面，所有主流工具都在同步攻坚 Subagent 终止语义、计费透明度、会话恢复可靠性等"基础工程债"。值得注意的是，**Windows Desktop 已从"次要平台"上升为各工具必争的核心战场**——今日 9 款工具中有 7 款在 Issues 区出现 Windows 相关 P1/P2 缺陷。

---

## 2. 各工具活跃度对比

| 工具 | 24h 版本 | 追踪 Issue 数 | 24h PR 数 | 当日活跃度评估 |
|------|---------|---------------|-----------|--------------|
| **Claude Code** | v2.1.273 | 50+（10 热榜） | 2 | 🔥🔥🔥🔥🔥 高（v2.1.273 含网关协议增强） |
| **OpenAI Codex** | alpha.7/8/9（三连发） | 10+ 热榜 | 3+ | 🔥🔥🔥🔥🔥 极高（3 个 alpha/24h，迭代密度最高） |
| **Gemini CLI** | v0.60.0 + preview + nightly | 50（10 热榜） | 32 | 🔥🔥🔥🔥🔥 极高（PR 体量最大） |
| **GitHub Copilot CLI** | v1.0.85 + v1.0.84-9 | 30+（10 热榜） | 0 | 🔥🔥🔥🔥 中（无 PR 更新但 Issues 集中爆发） |
| **Kimi Code CLI** | 无 | 4 | 0 | 🔥 较低（仓库热度进入静默期） |
| **OpenCode** | 无 | 10+ 热榜 | 10+ | 🔥🔥🔥🔥 中高（v1→v2 双线推进） |
| **Pi** | 无 | 50（10 热榜） | 15 | 🔥🔥🔥🔥🔥 高（65 条总更新） |
| **Qwen Code** | cua-driver-rs-v0.20.9 | 50（10 热榜） | 10 | 🔥🔥🔥🔥🔥 高（CUA 三端发布） |
| **DeepSeek TUI** | 无（v0.9.14 大规模合入） | 50（10 热榜） | 10+（12 已合入） | 🔥🔥🔥🔥🔥 极高（PR 合并密度最高） |

---

## 3. 共同关注的功能方向

### 3.1 🪟 Windows 平台稳定性（9 款中有 7 款受影响）
| 工具 | 代表 Issue |
|------|-----------|
| Claude Code | #42776/#53247/#85891/#92246（孤儿进程、文件锁、置顶窗口、强制重启） |
| OpenAI Codex | #41290（WSL 集成失败）、#41486（路径转义）、#45153（sandbox 锁） |
| OpenCode | #35772（桌面端 Provider 崩溃） |
| Copilot CLI | #1148（CRLF 强制改写，👍8） |
| Qwen Code | #11556（Remote-SSH Webview 卡死）、#11778（钩子在 cmd.exe 下失效） |
| Gemini CLI | #29163（macOS Seatbelt 下读取 .git 崩溃，但跨平台类似） |
| DeepSeek TUI | #6169（SIGTTIN/SIGTSTP 未处理） |

**诉求共识**：Windows Desktop 已从"小众平台"升级为"主流付费用户所在地"，但工具链在文件锁、注册表残留、路径序列化、shell 集成、签名/公证等环节均暴露系统性债。

### 3.2 🤖 Subagent / Multi-Agent 可靠性与可观测性
- **Gemini CLI** #22323：Subagent 命中 MAX_TURNS 仍标记为 GOAL 成功（语义模糊）
- **Copilot CLI** #4849/#4850：子 Agent 启动慢、review 循环耗分钟
- **Qwen Code** #11500：多后台 Agent 完成时触发 React #185 死循环
- **DeepSeek TUI** #6055：多 sub-agent 共享 provider 时 429 成为常态
- **Claude Code** #93683：工具结果被注入不可关闭指令（Prompt Injection 风险）

### 3.3 💰 计费透明度与配额异常
- **Kimi Code CLI** #2626：`cache_read` 计费放大 >10×，`cache_creation` 始终为 0
- **OpenAI Codex** #41220：配额消耗速度远高于本地 token 证据
- **Claude Code** #94652：主会话内 `model_refusal_fallback` 静默切备用模型并正常计费
- **OpenCode** #34537：错误导致一夜 token 消耗 80%
- **Pi** #9457：Bedrock 1h 缓存按 5m 计费（已修复）

### 3.4 🔄 会话恢复 / Memory 持久化
- **Copilot CLI** #4251/#4506/#4780：长 resume OOM、compaction 死锁、永久不可恢复
- **DeepSeek TUI** #6207/#6225：session picker 拒绝合法 resume 路径
- **Qwen Code** #11574：升级后历史会话因 `sourceType` 字段硬编码被全部过滤
- **Claude Code** #94628：更新抹除本地 Routines 与 session 列表
- **Gemini CLI** #26525/#26522：Auto Memory 脱敏时机错误、低信号会话无限重试

### 3.5 🔌 协议 / 网关兼容性边缘场景
- **Claude Code** v2.1.273：新增 5 个网关 Hint Headers（路由/计费/审计）
- **OpenAI Codex** #38503：ChatGPT "Too many requests" 阻断 Work 任务
- **Qwen Code** #11834/#11956：空参数序列化被 OpenAI 严格网关拒收
- **Copilot CLI** #4793/#4800：CIMD redirect_uri 端口漂移
- **Gemini CLI** v0.60.0：MCP OAuth 强制 RFC 9207 issuer

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | **企业级网关与桌面一体化** | 中大型企业 IT、SOC 2/合规团队 | 协议层先于 UI（v2.1.273 网关 Headers），但 Windows Desktop 是短板 |
| **OpenAI Codex** | **GPT/Codex 模型原生载体 + ChatGPT 订阅延伸** | ChatGPT Pro 用户、Windows/WSL 重度用户 | Tauri/Rust 重写（rust-v0.155.0），alpha 节奏最快（3/24h） |
| **Gemini CLI** | **Google 生态 + Subagent/Auto Memory** | Gemini 3 早期采用者、企业沙箱需求方 | Subagent/双代理分层 + AST 感知代码理解；本地可走 POSIX 工具链 |
| **GitHub Copilot CLI** | **GitHub 生态原生 CLI** | 已订阅 Copilot 的开发者、企业 | 与 VS Code Chat 双向集成（#54 已闭），Plugins/Marketplace 仍在早期 |
| **Kimi Code CLI** | **中文/第三方 Agent 友好** | 中文付费用户、第三方 Agent 集成方 | Coding Plan 订阅制，目前 Issue 静默期，焦点在计费透明 |
| **OpenCode** | **Plugin-first 跨端开源** | 高级开发者、IDE 切换频繁者 | v1 → v2 协议重构 + 插件 Hook（#5305），TUI/Desktop/Web 三端共享 |
| **Pi** | **Provider 路由器 + Extension API** | 多模型混合使用者、扩展开发者 | 支持 8+ Provider（OpenAI/Anthropic/Baseten/OrcaRouter/Azure/OpenRouter），BYOK 成本优先 |
| **Qwen Code** | **CUA 桌面操控 + 全端集成** | 国内企业、VS Code/Desktop 全端用户 | CUA Driver 三端交付（macOS 已签名），ACP 协议权限边界被重点加固 |
| **DeepSeek TUI** | **TUI 性能门 + 编辑路径安全门** | 终端原住民、性能/正确性敏感开发者 | 运行时性能预算 harness（#6259）、`syn::parse_file` 解析门（#6238），GPUI 桌面与 TUI 共用 Runtime API |

---

## 5. 社区热度与成熟度

### 🏆 高活跃度梯队（Issue + PR 双高）
- **Gemini CLI**：32 PR（最高）、50 Issue、3 版本/24h——已进入"产品-平台"双轮驱动阶段
- **DeepSeek TUI**：12 PR 已合入主线、50 Issue、聚焦"性能门 + 解析门"——快速迭代期
- **Qwen Code**：50 Issue、10 PR，CI 健壮性 PR 占近半——从功能期转向质量期
- **OpenAI Codex**：3 alpha/24h（迭代密度冠军）——快速实验期
- **Pi**：65 条总更新（50 Issue + 15 PR）——Provider 路由生态扩张期
- **Claude Code**：版本体量大但 PR 数少（仅 2），Issue

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据截止：2026-09-16**

---

## 一、热门 Skills 排行（按社区关注度）

| 排名 | Skill / PR | 核心功能 | 状态 | 链接 |
|------|-----------|---------|------|------|
| 1 | **PR #1769** skill-creator 触发检测修复 | 修复 `skill-creator` 评估报告 `precision=100% recall=0%` 的 BUG，导致所有 Skill 描述优化失真 | OPEN | [#1769](https://github.com/anthropics/skills/pull/1769) |
| 2 | **PR #1703** md2video-audio | 零成本将 Markdown 一键编译为带真人语音的 MP4 视频（Marp + TTS 链路） | OPEN | [#1703](https://github.com/anthropics/skills/pull/1703) |
| 3 | **PR #1298** skill-creator 触发评估隔离 | 修复 Windows `select()` 失败、子进程竞争导致误报，并解决 runtime 失败被误判为负样本 | OPEN | [#1298](https://github.com/anthropics/skills/pull/1298) |
| 4 | **PR #1628** Hivemind 多 Agent 编排 | 通过 headless opencode + 免费模型将机械工作下放，让 Claude Code 专注规划/评审/合并 | OPEN | [#1628](https://github.com/anthropics/skills/pull/1628) |
| 5 | **PR #1742** mcp-builder mcp>=2 适配 | 兼容 `streamable_http_client` 重命名及自定义 HTTP Header 注入 | OPEN | [#1742](https://github.com/anthropics/skills/pull/1742) |
| 6 | **PR #1627** buffer-api | 跨 Agent 可移植的 Buffer GraphQL 社交排程 Skill，覆盖账户发现 / 队列调度 / 分析 | OPEN | [#1627](https://github.com/anthropics/skills/pull/1627) |
| 7 | **PR #525** pyxel 复古游戏开发 | 指导 Claude 在 Pyxel 中实现 / 调试 / 像素级帧检测 + 状态校验 | OPEN | [#525](https://github.com/anthropics/skills/pull/525) |
| 8 | **PR #486** ODT / OpenDocument | 创建、填充、解析 .odt/.ods 模板，并支持转 HTML | OPEN | [#486](https://github.com/anthropics/skills/pull/486) |

**讨论热点**：社区当前对 **skill-creator 元能力**（PR #1769、#1298、#539）形成强聚焦——三个相互关联的 PR 都在修复同一类问题：描述触发评估失真、Windows 兼容、YAML 解析鲁棒性。这反映出 *"Skill 质量是 Skill 生态上限"* 的共识。

---

## 二、社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 关注度 |
|----------|-----------|--------|
| **🔒 信任边界与安全** | #492（社区 Skill 假冒 `anthropic/` 命名空间） | **43** 评论 🔥 |
| **🏢 企业级分发** | #228（Claude.ai 组织内共享） | 16 评论 |
| **🎯 Skill 触发可靠性** | #556（`run_eval.py` 0% 触发率）、#1769、#1298 | 12+ 评论 |
| **💾 持久化与记忆** | #1329（compact-memory）、#62（Skill 消失） | 9-10 评论 |
| **📊 Skill 质量治理** | #412（agent-governance）、#83（quality/security analyzer）、#202（skill-creator 最佳实践） | 6-8 评论 |
| **🔗 Skills ↔ MCP 互操作** | #16（Skill 暴露为 MCP）、#1390（mcp-builder 评分 0/N） | 4 评论 |
| **⚙️ 推理质量门控** | #1385（Pre-task → Adversarial → Delivery 三段式验证） | 4 评论 |
| **🌐 平台兼容** | #29（Bedrock）、#1175（SharePoint）、#1362（pnpm ≥10.1） | 3-4 评论 |

**核心诉求总结**：社区正在从"扩充 Skill 数量"转向"夯实 Skill 基础设施"——信任域、质量评估、跨平台触发稳定性成为三大痛点。

---

## 三、高潜力待合并 Skills（近期可能落地）

| PR | 关键理由 | 链接 |
|----|---------|------|
| **#1769** skill-creator 触发检测修复 | 直接回应最热 Issue #556，阻塞 `run_loop` 描述优化，优先级最高 | [PR](https://github.com/anthropics/skills/pull/1769) |
| **#1298** skill-creator Windows 兼容 | 与 #1769 互补，构成 skill-creator 完整修复闭环 | [PR](https://github.com/anthropics/skills/pull/1298) |
| **#1742** mcp-builder mcp>=2 适配 | 跟随上游 MCP SDK 升级，属必须跟进项 | [PR](https://github.com/anthropics/skills/pull/1742) |
| **#1724** 评估模型升级到 Sonnet 5 | 官方模型清单同步，影响所有 mcp-builder 用户 | [PR](https://github.com/anthropics/skills/pull/1724) |
| **#1607** claude-api 标记 4 个停用模型 | 清理过时的模型 ID 误导风险 | [PR](https://github.com/anthropics/skills/pull/1607) |
| **#1628** Hivemind | "零成本多 Agent" 切中 Token 成本焦虑，具备 viral 潜力 | [PR](https://github.com/anthropics/skills/pull/1628) |
| **#1765** Office 批注 UTF-8 解码 | 修复 Windows 非 UTF-8 环境下的中文 / 波兰语评审 BUG，影响面广 | [PR](https://github.com/anthropics/skills/pull/1765) |

> 另：PR #1703（md2video-audio）虽是社区提交，但因依赖外部音频管线，落地确定性略低；PR #83（quality/security analyzer）解决了 Issue #492 的部分诉求，值得关注但需命名空间隔离策略配套。

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是「让 Skill 生态可被信任、可被治理、可被规模化」——安全命名空间、企业级共享、触发可靠性与质量元评估已取代单纯的「新增 Skill」成为下一阶段的主战场。**

---

*报告基于 anthropics/skills 仓库截至 2026-09-16 的 50 条热门 PR 与 50 条热门 Issue；其中 Issue #492（安全命名空间滥用，👍 2 / 43 评论）是当前最关键的政策类议题，建议 Anthropic 团队优先给出官方立场。*

---

# Claude Code 社区动态日报 · 2026-09-16

## 📌 今日速览

- **v2.1.273 发布**：新增面向 LLM 网关的 5 个请求头（`x-claude-code-request-class` / `agent-type` / `prev-tool-durations` / `compaction` / `context-compacted`），通过 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 显式开启，便于企业网关做路由、计费与可观测性。
- **Windows Desktop 稳定性集中爆发**：孤儿进程/文件锁/强占置顶/强制重启 4 类问题占据当日评论榜前 5 位，呈现"更新越频繁、生产越不可用"的社区情绪。
- **Copy/Paste 与多账号并列为最热门长期诉求**：Copy/Paste 横跨 42 个未结 issue 形成 Meta tracking，Claude Mobile 多账号切换单一议题点赞数高达 **726**，位列当日之最。

---

## 🚀 版本发布

### v2.1.273（2026-09-16）
- 新增请求头（需 `CLAUDE_CODE_GATEWAY_HINT_HEADERS=1` 开启）：
  - `x-claude-code-request-class` — 请求类别
  - `x-claude-code-agent-type` — Agent 类型
  - `x-claude-code-prev-tool-durations` — 上一工具耗时
  - `x-claude-code-compaction` — 上下文压缩标记
  - `x-claude-code-context-compacted` — 是否已压缩
- 价值：让企业级 LLM 网关能够做更精准的路由、计费、审计与 SLO 监控。
- 🔗 [Release 链接](https://github.com/anthropics/claude-code/releases/tag/v2.1.273)

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 👍 | 关键看点 |
|---|------|------|------|----|----------|
| [#42776](https://github.com/anthropics/claude-code/issues/42776) | Windows Desktop 因孤儿进程文件锁无法重启 | OPEN/Invalid | 190 | 89 | 评论数当日第一，Windows 桌面生态最大痛点 |
| [#36151](https://github.com/anthropics/claude-code/issues/36151) | Claude Mobile 多账号切换（无需共享邮箱） | OPEN/Invalid | 182 | **726** | 单日点赞量最高，多账号需求极度强烈 |
| [#85891](https://github.com/anthropics/claude-code/issues/85891) | Windows 11 窗口 always-on-top 无法关闭 | OPEN/Invalid | 103 | 256 | 与 macOS #66516 互为镜像，企业 IT 部署障碍 |
| [#53247](https://github.com/anthropics/claude-code/issues/53247) | Windows Desktop 启动失败（Silo/Job Object 孤儿，HRESULT 0x80070020） | OPEN/Bug | 86 | 33 | 与 #42776、#89680 构成"Windows 启动三连" |
| [#24726](https://github.com/anthropics/claude-code/issues/24726) | VS Code 扩展关闭自动附加文件/选区 | OPEN/Enhancement | 76 | 242 | 高赞高频，开发者需要可控的 IDE 行为 |
| [#89680](https://github.com/anthropics/claude-code/issues/89680) | Windows 静默更新遗留旧 AppX 容器（0x80070020） | OPEN/Bug | 19 | 2 | 隐身更新机制本身的设计缺陷 |
| [#78674](https://github.com/anthropics/claude-code/issues/78674) | Linux 后台任务被内存压力回收器误杀 | OPEN/Bug | 7 | 0 | 误判 `MemFree` 而忽略 `MemAvailable`，破坏长任务 |
| [#93683](https://github.com/anthropics/claude-code/issues/93683) | 每个工具结果被注入指令且无法关闭 | OPEN/Bug | 6 | 0 | 触碰 prompt injection 红线，影响 agent 可控性 |
| [#81472](https://github.com/anthropics/claude-code/issues/81472) | Copy/Paste 全平台失效 Meta Issue | OPEN/Meta | 5 | 11 | **汇总了 42 个未结 issue**，基础设施级回归 |
| [#94049](https://github.com/anthropics/claude-code/issues/94049) | 自动更新静默断开所有 Remote Control 桥 | OPEN/Bug | 4 | 0 | 远程办公场景下"会话重连"完全无解 |

**加分位**：[#92246](https://github.com/anthropics/claude-code/issues/92246)（Windows 9 天强制重启 9 次）、[#94628](https://github.com/anthropics/claude-code/issues/94628)（更新抹除本地 Routines 与 session 列表）、[#94639](https://github.com/anthropics/claude-code/issues/94639)（桌面 .app 包无 checksum 且权限高于 CLI）三条共同暴露**自动更新缺乏可审计性与可回滚性**。

---

## 🔧 重要 PR 进展

> 注：过去 24 小时仓库内仅有 **2 个 PR 更新**，均为 `poteat` 提交的 `mods/diff` 模块优化。

| # | 标题 | 状态 | 改动要点 |
|---|------|------|----------|
| [#94653](https://github.com/anthropics/claude-code/pull/94653) | diff：首次编辑只在布局可停靠时才打开面板 | OPEN | 修复宽终端（144 列）下即使主屏无 dock 也强行弹出 inline 面板导致的闪烁 |
| [#94594](https://github.com/anthropics/claude-code/pull/94594) | diff：仅在 builtin 面板会运行时调用 git，且不在 session 启动时执行 | CLOSED | 消除大仓库下 `session.start` 钩子中的 `git status --porcelain` 全盘扫描阻塞首条 prompt 的问题 |

**判断**：虽然 PR 体量小，但点中两个真实体验痛点——**宽终端布局回归**与**大仓库首 token 延迟**。建议关注其是否会被反向移植到 TUI 主线。

---

## 📈 功能需求趋势

将 50 条当日 Issue 按主题归并，社区诉求可归纳为五条主线：

1. **多账号 / 多租户管理**（[#36151](https://github.com/anthropics/claude-code/issues/36151)）
   - Mobile、Desktop、Web 端均缺；共享邮箱方案被广泛拒绝。

2. **可关闭的 IDE 自动行为**（[#24726](https://github.com/anthropics/claude-code/issues/24726)、[#91945](https://github.com/anthropics/claude-code/issues/91945)、[#93730](https://github.com/anthropics/claude-code/issues/93730)）
   - 自动附加、归档替代删除、误标 context indicator 等"越权默认"行为。

3. **跨平台会话可观测性**（[#94620](https://github.com/anthropics/claude-code/issues/94620)）
   - 缺失外部可调用的"列出当前所有 CC 会话及其状态"接口，阻碍自动化编排。

4. **桌面/移动基础体验补齐**（[#78728](https://github.com/anthropics/claude-code/issues/78728)、[#80773](https://github.com/anthropics/claude-code/issues/80773)、[#90159](https://github.com/anthropics/claude-code/issues/90159)）
   - 中文语音听写、`claude://resume` 去重、附件存在时麦克风消失等"看似小但每天碰到"的痛点。

5. **Windows Desktop 平台工程债**（[#42776](https://github.com/anthropics/claude-code/issues/42776) / [#53247](https://github.com/anthropics/claude-code/issues/53247) / [#89680](https://github.com/anthropics/claude-code/issues/89680) / [#92246](https://github.com/anthropics/claude-code/issues/92246) / [#94049](https://github.com/anthropics/claude-code/issues/94049) / [#94628](https://github.com/anthropics/claude-code/issues/94628)）
   - 占当日榜单接近一半，**这一主题不再是"零星 bug"，而是系统性平台问题**。

---

## 🧑‍💻 开发者关注点（高频痛点）

1. **自动更新 ≠ 可靠性升级，反而等于数据丢失**
   - 多个 issue 指向同一个事实：静默更新 → 进程孤儿 / 远程会话断连 / 本地 Routines 清空，但**没有 rollback、没有 defer、没有 opt-out**。这与企业级开发流程冲突严重。

2. **Copy/Paste 是"被遗忘的基础设施"**
   - [#81472](https://github.com/anthropics/claude-code/issues/81472) 汇总 42 个未结 issue，覆盖 TUI、VS Code、Desktop 全部表面，自 2023 年起持续未根治。

3. **Agent 可控性边界正在被侵蚀**
   - [#93683](https://github.com/anthropics/claude-code/issues/93683) 报告每个 tool result 被注入一段不可关闭的指令，开发者认为这是 prompt injection 风险。
   - [#94650](https://github.com/anthropics/claude-code/issues/94650)、[#64712](https://github.com/anthropics/claude-code/issues/64712) 共同反映 agent 在缺乏验证的情况下"自信地编造/宣称已修复"，对生产环境危险。

4. **安全分类器的"静默换模"与计费错乱**
   - [#94652](https://github.com/anthropics/claude-code/issues/94652) 指出主会话内 `model_refusal_fallback` 会悄悄切到备用模型并按正常订阅计费，与子代理路径 (#73597) 行为不一致，开发者要求账单透明。

5. **Bash 工具延迟与权限路径回归**
   - [#94651](https://github.com/anthropics/claude-code/issues/94651) 实测 `auto mode` 让 Bash 命令固定多 ~12.3s（控制组 0.15s），路径绕过权限规则快路径时延剧增。

6. **Linux 长任务与内存回收器误判**
   - [#78674](https://github.com/anthropics/claude-code/issues/78674) 中 `MemFree` 与 `MemAvailable` 语义错配导致后台 Bash 被批量 kill，对 CI/CD 与数据处理脚本影响极大。

---

**总结一句话**：今天的社区画像是"**网关协议层在前进（v2.1.273），桌面平台层在后退（Windows 系列 bug），Agent 行为边界在模糊（prompt 注入 + 静默换模）**"——三者叠加，正是企业级开发者当前最大的焦虑来源。

> 数据窗口：2026-09-15 ~ 2026-09-16 24h · 来源：[anthropics/claude-code](https://github.com/anthropics/claude-code)

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-16

## 今日速览
Codex 仓库 24 小时内连续推送 **rust-v0.155.0-alpha.7/8/9** 三个预发布版本，开发节奏密集。社区关注焦点高度集中在三类问题：**Windows + WSL 集成缺陷**、**订阅配额/容量异常消耗**，以及 **GPT-6 Astra 模型行为变化**。PR 端则集中于 TUI 体验打磨、Windows 沙箱改进与管理型守护进程的崩溃恢复能力。

---

## 版本发布

| 版本 | 类型 | 说明 |
|------|------|------|
| [rust-v0.155.0-alpha.7](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.7) | Pre-release | 0.155.0 第 7 个 alpha |
| [rust-v0.155.0-alpha.8](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.8) | Pre-release | 0.155.0 第 8 个 alpha |
| [rust-v0.155.0-alpha.9](https://github.com/openai/codex/releases/tag/rust-v0.155.0-alpha.9) | Pre-release | 0.155.0 第 9 个 alpha |

注：发布说明较短，建议结合 CHANGELOG 与 PR diff 评估风险，避免在生产链路上启用 alpha 版本。

---

## 社区热点 Issues（Top 10）

1. **[#41290](https://github.com/openai/codex/issues/41290)** — [Windows/WSL] 切换 Agent Environment 至 WSL 后项目创建/移除失败 · 70 评论 / 👍51
   本期最热问题，影响 Windows 桌面端最常用的 WSL 工作流，多位 Pro 用户受影响。

2. **[#31836](https://github.com/openai/codex/issues/31836)** — macOS 桌面端 Projects 视图"按最近更新"排序未生效 · 50 评论 / 👍51
   长期未修复，排序 UI 与实际排序逻辑不一致。

3. **[#41220](https://github.com/openai/codex/issues/41220)** — [Meta] Codex 用量/配额异常消耗与计费不一致跨报告聚合 · 43 评论
   多用户报告配额消耗速度远高于本地 token 证据，疑似计费或后端路由问题。

4. **[#38503](https://github.com/openai/codex/issues/38503)** — ChatGPT 网页"Too many requests"阻断 Work 任务 · 24 评论 / 👍17
   前端限流与 Work 任务的耦合导致工作流被打断。

5. **[#13852](https://github.com/openai/codex/issues/13852)** — Supabase MCP OAuth token refresh 在 initialize 阶段反复失败 · 21 评论
   跨多版本的老问题未根治，影响第三方 MCP 集成稳定性。

6. **[#44135](https://github.com/openai/codex/issues/44135)** — Windows 下 Chrome 浏览器控制失败（nodeRepl.fetch request failed）· 18 评论
   浏览器控制能力在 Windows 上反复出现兼容性问题，重装仍无效。

7. **[#35005](https://github.com/openai/codex/issues/35005)** — [已关闭] TUI/CLI 支持"原地编辑"先前 prompt 而非总是 fork · 12 评论 / 👍28
   虽已关闭但社区诉求强烈，与默认行为变更（#33201）相关。

8. **[#41486](https://github.com/openai/codex/issues/41486)** — Windows 桌面端将 `Z:\AREA_01` 误传给模型为 `Z:\AREA\_01` · 11 评论 / 👍8
   客户端路径序列化 bug，下划线转义错误。

9. **[#26472](https://github.com/openai/codex/issues/26472)** — [已关闭] 模型选择不应持久化到 config · 9 评论 / 👍25
   高赞增强诉求，落地于 PR #45831。

10. **[#45153](https://github.com/openai/codex/issues/45153)** — Windows shell 命令全部失败（helper_sandbox_lock_failed, error 5）· 8 评论
    含只读命令在内的所有本地 shell 执行均失败，影响 Windows 桌面端可用性。

---

## 重要 PR 进展（Top 10）

1. **[#45831](https://github.com/openai/codex/pull/45831)** — TUI 允许"会话级"模型与推理强度选择
   新增 `s` 快捷键，仅作用于当前会话，不覆盖用户默认配置。回应 #26472。

2. **[#45837](https://github.com/openai/codex/pull/45837)** — 在受限 Linux 沙箱中隐藏 WSLg 重复根目录
   通过文件系统身份检测（mount 元数据兜底），避免 WSLg 暴露 sandbox 路径遮蔽之外的目录。

3. **[#45830](https://github.com/openai/codex/pull/45830)** — Windows 沙箱状态统一以 app-server 配置为 TUI 单一事实源
   修复 `thread/settings/update` 忽略 T

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-09-16** | 数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布 **v0.60.0 稳定版** 及 **v0.61.0-preview.0** 与 **v0.62.0-nightly** 三个版本，社区关注度最高的话题集中在 **Subagent 行为可靠性**（如命中 MAX_TURNS 仍标记为 GOAL 成功、Generalist Agent 卡死）和 **Auto Memory 系统的安全与稳定性**（连续 3 个 P2 Issue）。同时，多个重要的安全修复 PR 正在合并，涉及文件写入原子性、OAuth refresh token 丢失、路径遍历绕过等。

---

## 🚀 版本发布

| 版本 | 性质 | 主要变更 |
|------|------|---------|
| **v0.60.0** | 稳定版 | web fetch 工具的目标校验与连接路由优化；MCP OAuth 流程强制 RFC 9207 issuer 标识 |
| **v0.61.0-preview.0** | 预览版 | 同步 v0.59/v0.60 更新日志，进入下一发布周期 |
| **v0.62.0-nightly.20260916** | 每日构建 | AgentLoopContext 属性在对象 spread 时保持；a2a-server 在不支持的存储上提前返回 |

完整内容：[v0.60.0](https://github.com/google-gemini/gemini-cli/releases) · [v0.61.0-preview.0](https://github.com/google-gemini/gemini-cli/releases) · [v0.62.0-nightly](https://github.com/google-gemini/gemini-cli/releases)

---

## 🔥 社区热点 Issues（Top 10）

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 MAX_TURNS 后被错误标记为 GOAL 成功（P1 / Bug）**
   `codebase_investigator` 子代理明明已触及最大轮次限制，但终止原因仍显示 "GOAL"，掩盖了真实中断。**13 条评论**，是当前最热 Issue，反映子代理终止语义模糊问题。

2. **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱 + 执行后意图路由（P2 / 大型增强）**
   利用 Gemini 3 模型的原生 bash 亲和性，结合 POSIX 工具链实现沙箱化执行。**9 条评论**，方向契合当前 Agent 安全趋势。

3. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist Agent 频繁卡死（P1 / Bug）**
   委派给通用代理后 Gemini CLI 直接挂起，简单的目录创建都会卡住。**8 条评论 / 8 👍**，社区强烈关注的高频痛点。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知文件读取/搜索的价值（P2 / Feature）**
   通过 AST 工具精确读取方法边界、减少误读轮次和噪声 token。**7 条评论**，与 #19561 的 "Tactful Extraction" 形成连续工作流。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不会主动调用自定义 Skill / Sub-agent（P2 / Bug）**
   用户即使定义了 gradle / git 等 skill，模型也很少自动调用。**6 条评论**，反映 Skill 系统触发机制的可用性问题。

6. **[#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 需要确定性脱敏并减少日志（P2 / Security Bug）**
   自动记忆将本地会话内容传给后台提取模型后才进行脱敏，存在敏感信息泄露风险。**5 条评论**。

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后仍卡在 "Waiting input"（P1 / Bug）**
   极简单的 CLI 命令完成后 shell 仍显示活动状态。**4 条评论 / 3 👍**，影响日常可用性。

8. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 对低信号会话无限重试（P2 / Bug）**
   提取代理选择不读某会话后，该会话会反复出现在 inbox 中。**4 条评论**。

9. **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 会话接管与锁恢复（P3 / Feature）**
   当前 `BrowserManager` 在锁冲突时直接 fail-fast，缺乏自动接管能力。**4 条评论**。

10. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Wayland 下 Browser Subagent 失败（P1 / Bug）**
    Linux Wayland 环境下的浏览器子代理异常终止。**4 条评论**，Linux 桌面兼容性议题。

---

## 🛠️ 重要 PR 进展（Top 10）

1. **[#29244](https://github.com/google-gemini/gemini-cli/pull/29244) — 文件写入原子化 + 同路径序列化（P1 / L）**
   并发 replace 会导致数据丢失且双方都返回 success，本 PR 将写入串行化并保证原子性，是当前最重要的稳定性修复。

2. **[#29249](https://github.com/google-gemini/gemini-cli/pull/29249) — 关闭 `get_internal_docs` 路径前缀绕过（P1 / M）**
   路径遍历防护使用字符串前缀比较，会接受同名前缀的兄弟目录，本 PR 修补这一安全漏洞。

3. **[#29339](https://github.com/google-gemini/gemini-cli/pull/29339) — OAuth refresh token 保留与凭据幂等删除（P1 / M）**
   修复 Google OAuth 凭据在刷新时丢失 refresh_token、陷入反复重新登录的循环。

4. **[#29163](https://github.com/google-gemini/gemini-cli/pull/29163) — 在 Git 仓库中认证时防止崩溃（P1 / Security / L）**
   macOS Seatbelt 等受限权限环境下读取 `.git` 目录时会崩溃，本 PR 已合入。

5. **[#29156](https://github.com/google-gemini/gemini-cli/pull/29156) — 修复 shell 执行清空用户 git 配置的问题**
   `GIT_CONFIG_GLOBAL` / `GIT_CONFIG_SYSTEM` 被强制指向 `/dev/null`，隐藏用户真实配置。

6. **[#29151](https://github.com/google-gemini/gemini-cli/pull/29151) — Skill 优先级与激活状态大小写不敏感（P1 / M）**
   `SkillManager` 中工作区 skill 因大小写不同无法覆盖内置/扩展 skill。

7. **[#29333](https://github.com/google-gemini/gemini-cli/pull/29333) — 审查约定策略目录的权限（P2 / M）**
   仅系统策略目录经过权限校验，用户与工作区目录缺少同等检查，存在提权风险。

8. **[#29347](https://github.com/google-gemini/gemini-cli/pull/29347) — 边框渲染时防止负尺寸 `RangeError`（P1 / L）**
   终端尺寸负值导致 UI 抛 `Invalid count value: -1`，本 PR 在多处 UI 组件中加入 clamp。

9. **[#29349](https://github.com/google-gemini/gemini-cli/pull/29349) — VS Code 关闭 diff 时保留终端焦点（P1 / XL）**
   修复关闭 diff 预览后键盘焦点丢失，影响多文件编辑流畅度。

10. **[#29248](https://github.com/google-gemini/gemini-cli/pull/29248) — 确认操作后避免重复历史与遥测**
    `/resume save <tag>` 等确认流程下，同一条命令被记录两次。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Auto Memory 健壮性** | #26525, #26522, #26523, #26516 | 🔥 高（连续 4 个专项 Issue） |
| **Subagent 可靠性与可观测性** | #22323, #21409, #21763, #22598 | 🔥 高 |
| **AST 感知代码理解** | #22745, #22746, #19561 | ⭐ 中高（Epic 级工作） |
| **沙箱化与安全** | #19873, #26525, #29333 | ⭐ 中高 |
| **Skill / Sub-agent 自动触发** | #21968, #29151 | ⭐ 中 |
| **IDE 集成体验**（VS Code） | #29349, #21432 | ⭐ 中 |
| **Token 节省型读取** | #19561, #22745 | ⭐ 中 |
| **Browser Agent 自愈** | #22232, #22267, #21983 | ⭐ 中 |

---

## 💬 开发者关注点

**🔴 稳定性与正确性**
- Subagent 终止语义混乱（GOAL vs MAX_TURNS），难以调试
- Shell 命令完成后 UI 状态不同步
- 并发文件写入无原子保证导致静默数据丢失

**🔒 安全**
- Auto Memory 凭据/会话内容先入模型再脱敏的流程
- 路径遍历仅用字符串前缀比较
- 策略目录权限未统一校验

**🤖 Agent 行为**
- Gemini 不主动调用自定义 Skill / Sub-agent
- Generalist Agent 频繁挂死
- 模型倾向于在临时目录散布脚本（#23571）

**🖥️ 体验细节**
- 终端 resize 时的渲染闪烁（#21924）
- VS Code diff 关闭后失焦
- OAuth 反复失效导致重新登录
- `/compress` 状态不持久化（#21335）

---

> 📎 **数据范围**：GitHub Issues、Pull Requests、Releases 过去 24 小时更新。
> 📊 **统计**：本期共追踪 50 条 Issue、32 条 PR、3 个新版本。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-16**

---

## 📌 今日速览

今日 GitHub Copilot CLI 发布 **v1.0.85** 正式版本，最受关注的 **Vim 输入模式** 终于从高赞需求（Issue #13，👍76）落地为正式功能；同时 v1.0.84-9 重点优化了大会话元数据扫描速度并修复了换行末尾移动光标的 Bug。Issues 区大量反馈集中爆发在**长会话/Resume 场景下的 V8 堆内存 OOM 崩溃**问题，涉及多个版本（1.0.74、1.0.80、1.0.82），社区对会话稳定性与内存治理的关注度持续升温。

---

## 🚀 版本发布

### v1.0.85（正式版）— 2026-09-16
- ✅ **Vim 模式对所有用户开放**：通过 `/vim` 命令或 `editorMode: "vim"` 开启，编辑器头部实时显示当前模式。
- ⚙️ 新增 `/settings` 选项，可为 Agent 与子 Agent 启用上下文管理工具（Context Management Tools）。
- 🔧 改进 transcriptView 相关行为（细节见 Release Notes）。

### v1.0.84-9（预发版）— 2026-09-16
- ➕ `/settings` 新增上下文管理工具的启用选项。
- 🚄 减少本地长会话历史扫描的元数据时间（线程与内存占用相应上升）。
- 🐛 修复 `End` / `Ctrl+E` 在换行场景下未能跳转真实行尾的 Bug。

> 📎 [Release v1.0.85](https://github.com/github/copilot-cli/releases/tag/v1.0.85) ｜ [Release v1.0.84-9](https://github.com/github/copilot-cli/releases/tag/v1.0.84-9)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 社区反应 | 为什么值得关注 |
|---|------|------|---------|---------------|
| 1 | [#13](https://github.com/github/copilot-cli/issues/13) ✅ 已关闭 | CLI 输入应支持 vi/vim 模式 | 👍76 · 💬13 | 历史最高赞需求，今日随 v1.0.85 正式落地，是产品路线兑现社区诉求的标志性事件 |
| 2 | [#54](https://github.com/github/copilot-cli/issues/54) ✅ 已关闭 | 与 VS Code Copilot Chat 全功能集成 | 👍20 · 💬13 | 长期呼声最高的 IDE↔CLI 互联需求，反映跨端体验一体化的方向 |
| 3 | [#4664](https://github.com/github/copilot-cli/issues/4664) | 长会话 `--resume` 触发 JS Heap OOM 崩溃 | 💬8 | 长会话场景代表性 Bug，是社区近期 OOM 风暴的缩影 |
| 4 | [#1148](https://github.com/github/copilot-cli/issues/1148) | 写入文件时强制把 LF 改成 CRLF（Windows） | 👍8 · 💬7 | Windows 平台长期兼容性痛点，影响跨平台协作 |
| 5 | [#4438](https://github.com/github/copilot-cli/issues/4438) | `disable-model-invocation: true` 使 skill 失效 | 👍7 · 💬6 | 配置语义与实际行为不一致，影响 agent 工作流可预期性 |
| 6 | [#4725](https://github.com/github/copilot-cli/issues/4725) | CLI 频繁出现 JS Heap OOM | 💬6 | 周期性崩溃问题，反映长时间运行的资源治理缺口 |
| 7 | [#4251](https://github.com/github/copilot-cli/issues/4251) | 1.0.74 resume 大会话内存翻 3-4 倍（回归） | 💬4 | 明确版本回归 A/B 数据，对版本升级决策有重要参考价值 |
| 8 | [#4699](https://github.com/github/copilot-cli/issues/4699) | 长 resume 会话 OOM，且堆 dump 写入用户 cwd | 👍5 · 💬4 | 同时触及稳定性与隐私/磁盘污染两个维度 |
| 9 | [#4849](https://github.com/github/copilot-cli/issues/4849) | 子 agent 工作流的延迟与 review 循环开销 | 💬5 | 新 triage 标签问题，直接关联多 agent 架构效率 |
| 10 | [#3954](https://github.com/github/copilot-cli/issues/3954) | `explore` 工具硬编码 `gpt-5.4-mini`，忽略自定义模型 | 👍3 · 💬4 | 自定义模型/DeepSeek 等替代后端用户的关键阻塞点 |

---

## 🛠 重要 PR 进展

过去 24 小时内仓库无新增/更新的 Pull Request，因此本节暂略。社区反馈集中在 Issues 区，工程化改动可能仍在内部或后续提交。

---

## 📈 功能需求趋势

从最近 24 小时更新的 30+ 条 Issue 中可提炼出以下重点方向：

1. **🧠 会话与上下文稳定性** — OOM、Resume 回归、Compaction 死锁、`inuse.<pid>.lock` 不释放等，占据接近 **40%** 的高优问题，是当前最大的工程债。
2. **🤖 子 Agent / 多 Agent 性能治理** — 包括子 agent 延迟、子 agent 状态卡死、review 循环开销大（Issue #4849、#4850）。
3. **🔌 插件（Plugins）与市场（Marketplaces）生态** — 自动更新（#2734，👍13）、server-managed marketplace 未注册（#4556）等。
4. **🪟 跨平台体验** — Windows CRLF 行尾（#1148）、Warp 终端配色（#4843）、macOS Terminal 输入（#4855，已修复）。
5. **🔐 OAuth / MCP / CIMD 集成** — 端口不匹配（#4793、#4800）、MCP 不可用被误报为 "waiting on ide"（#4552）。
6. **🧱 企业级沙箱与策略** — Yolo 策略在企业环境的隔离粒度（#4783）、本地沙箱 "Allow local network" 失效（#4854）、Sandbox 策略被忽略（#4846，已修复）。
7. **📝 交互体验** — Vim 模式落地（#13）、`ask_user` 表单改为对话式（#4865）、表单中 Ctrl-D 误关闭会话（#4866）。
8. **🎯 Skill / Agent 行为** — `disable-model-invocation` 语义偏差（#4438）、`explore` 工具模型硬编码（#3954）。

---

## 💬 开发者关注点（痛点 / 高频需求）

- **🚨 长会话与 Resume 不稳定（最痛）**：开发者对 1.0.74、1.0.80、1.0.82 等多个版本的 resume 路径表达强烈不满，伴随：
  - V8 堆在 4 GB 左右反复溢出；
  - 内存压力 watchdog 在仅 23% 上下文使用率时强制 compaction，仅回收 0.003% tokens 就陷入 OOM 循环（#4506）；
  - Compaction 启动后永不完成，会话变成"永久不可恢复"（#4780）；
  - Idle 状态进入 `FileWatch` 风暴，35 小时吃掉 221% CPU，日志膨胀到 33+ GB（#4807）；
  - 事件存储耗尽后重试风暴把会话逼入 GC 死循环（#4639）。
  → **核心诉求：会话生命周期与内存治理的可靠性、可恢复性、可观测性。**

- **⚙️ 子 Agent 工作流效率**：启动慢、review/fix 循环耗时长（分钟级）、后台子 agent 不退出，开发者期待更智能的调度与超时策略（#4849、#4850）。

- **🪟 跨平台细节 Bug**：Windows CRLF（#1148）、Warp 配色（#4843）、macOS Terminal 输入（#4855）等"小而尖锐"的兼容性问题影响面广，但目前优先级偏低，开发者期待更系统的平台测试矩阵。

- **🔌 插件生态"最后一公里"**：插件无法自动更新（#2734）、服务端声明的 marketplace 静默丢失（#4556），让刚起步的插件系统成为短板。

- **🔐 MCP/OAuth 集成规范**：CIMD redirect_uri 不匹配、端口声明漂移（#4793、#4800）以及 MCP server 不可用时错误消息误导用户（#4552），影响 CLI 作为 MCP 客户端的可用性。

- **✨ 已兑现的需求**：Vim 模式（#13）与 VS Code Copilot Chat 集成（#54）双双进入"Closed"状态，是社区路线图协同推进的积极信号。

---

> 📅 报告生成时间：2026-09-16 ｜ 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**📅 2026-09-16** | 数据来源：`MoonshotAI/kimi-cli`

---

## ⚡ 今日速览

过去 24 小时仓库无新版本发布，PR 提交与更新归零。社区活跃度主要体现在 4 个 Issue 的讨论更新上，其中 **付费用户配额消耗异常（#2626）** 仍是高优先级未解决问题，而 **macOS 图片粘贴兼容性问题（#1433）** 与 **PicoClaw 第三方集成请求（#1435）** 已关闭。整体反馈聚焦于 **计费透明度、跨平台兼容性、生态集成** 三大方向。

---

## 🚀 版本发布

**无新版本发布。** 建议关注后续 v1.23+ 路线图，已关闭的 #1433（Cmd+V）与 #1435（PicoClaw）相关修复是否纳入版本说明。

---

## 🔥 社区热点 Issues

> 📌 备注：过去 24 小时仅有 **4 条** Issue 出现更新（仓库热度较低，非完整 10 条），以下按重要性排序全部列出。

### 1. [#2626 [OPEN]] Abnormal quota consumption — cache_read 计费放大 10 倍
- **重要性**：⭐⭐⭐⭐⭐（最高优先级）
- **作者**：ahmadyaseen35-coder | 👍 0 | 💬 2
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2626
- **为什么重要**：付费用户（年付）反馈 5 小时配额窗口在轻度使用下几分钟内被消耗约 40%，CLI 数据分析显示 `cache_read` 每轮计费但 `cache_creation` 始终为 0，存在 **>10x 计费放大异常**。直接关系到商业模式可信度与用户续费意愿。
- **社区反应**：尚处早期调研阶段，期待官方提供计费明细与官方回复。

### 2. [#1433 [CLOSED]] macOS Cmd+V 图片粘贴失效
- **重要性**：⭐⭐⭐⭐
- **作者**：ringotypowriter | 👍 1 | 💬 2
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1433
- **为什么重要**：Darwin arm64 平台用户在 CLI 内粘贴图片时，**仅识别 Ctrl+V 而忽略 Cmd+V**，违反 macOS 用户习惯。已在 v1.22.0 报告。
- **社区反应**：已关闭，预期已修复或转交，但需核对 changelog 确认修复版本。

### 3. [#2646 [OPEN]] 功能建议：Kimi Work 会话标题自动添加 YYYYMMDD 前缀
- **重要性**：⭐⭐⭐
- **作者**：GH-Mason | 👍 0 | 💬 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2646
- **为什么重要**：典型的 **UX/会话管理优化** 请求。社区对 Kimi Work / Kimi Desktop 缺乏独立 Issue Tracker 表达不满，作者援引 #2143 先例建议在此处提交，需官方路由确认。
- **社区反应**：新提交暂无反响，但反映出 **桌面端与 CLI 端 issue 路由不清** 的结构性问题。

### 4. [#1435 [CLOSED]] Feature Request：Kimi For Coding API 增加 PicoClaw 支持
- **重要性**：⭐⭐⭐
- **作者**：clawaizhang | 👍 0 | 💬 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1435
- **为什么重要**：Sipeed 旗下开源 AI Agent 项目 **PicoClaw** 用户希望用 Kimi For Coding 订阅接入，但 API 限制了接入途径。代表 **第三方 Agent 生态接入** 的需求。
- **社区反应**：已关闭，需关注是已实现对接、计划排期还是被婉拒。

---

## 🔧 重要 PR 进展

**无 PR 更新。** 建议持续关注仓库 `pull` tab，未来重点关注：

- 配额计费修复 PR（针对 #2626）
- macOS 快捷键修复 PR（针对 #1433）
- 第三方客户端接入能力扩展（针对 #1435）

---

## 📈 功能需求趋势

从已更新的 Issue 集合（结合历史背景）提炼出社区最关注的方向：

| 排名 | 需求方向 | 代表 Issue | 热度判断 |
|---|---|---|---|
| 1 | **计费系统透明化与准确性** | #2626 | 🔥🔥🔥🔥🔥 单条热度最高 |
| 2 | **跨平台兼容性（macOS 优先）** | #1433 | 🔥🔥🔥🔥 长期反复出现 |
| 3 | **第三方 Agent/工具生态接入** | #1435 | 🔥🔥🔥 体现生态扩张意图 |
| 4 | **会话管理与 UX 微优化** | #2646 | 🔥🔥 桌面端体验细节 |
| 5 | **多产品线 Issue 路由规范** | #2646 反映 | 🔥🔥 流程层面问题 |

---

## 🧑‍💻 开发者关注点

综合 4 条活跃 Issue，开发者社区反馈呈现以下 **三大痛点与高频需求**：

### 💰 痛点一：计费不透明、放大异常
- `cache_read` 与 `cache_creation` 比例异常（>10x）尚未官方澄清
- 付费用户对"配额窗口"消耗速度缺乏预期管理
- **建议**：官方应在 CLI 输出中暴露 token 用量明细，与 Web 控制台对齐

### 🍎 痛点二：macOS 平台细节打磨不足
- Cmd+V 键位识别问题暴露 **跨平台输入处理测试覆盖薄弱**
- Darwin arm64 作为付费用户主流平台，细节体验直接影响留存
- **建议**：建立 macOS 兼容性回归测试清单

### 🔌 痛点三：生态开放度与 Issue 流程
- 第三方 Agent（#1435 PicoClaw）希望复用 Coding Plan 订阅，官方接入策略不明
- Kimi Work / Desktop 用户被迫在 kimi-cli 仓库提 issue，**缺乏清晰路由机制**
- **建议**：公开第三方接入文档 + 建立产品级 Issue 路由/标签体系

---

## 📊 数据小结

| 指标 | 数量 | 备注 |
|---|---|---|
| 新发布 Release | 0 | 24 小时内无 |
| 活跃 Issue | 4 | 2 OPEN / 2 CLOSED |
| 活跃 PR | 0 | 24 小时内无 |
| 关键风险项 | #2626 | 计费异常，付费用户关切 |
| 已关闭修复项 | #1433, #1435 | 待验证是否真合并 |

---

*报告生成时间：2026-09-16 · 数据范围：GitHub Issues/PRs 更新窗口（近 24 小时）*
*免责声明：本日报基于公开 GitHub 数据分析，不构成投资或产品建议。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-16**

---

## 📌 今日速览

今日 OpenCode 仓库活跃度极高，v2 分支集中落地了一批 TUI 与协议层重构（包含交互资源简化与测试夹具更新）。Issue 端高频问题集中在 **v1.18.x 桌面/网页端的 UI 回归**（Plan/Build 模式丢失、Agent 选择器消失、文件树缺失），而 PR 端则体现出团队正系统性修复 **凭据变更卡顿、HTTP SSE chunkTimeout 失效、TUI 插件重复目标、思考/补丁双行进度**等长期遗留问题。整体看，社区正同时推进 v1 体验收敛与 v2 架构升级两条主线。

---

## 🚀 版本发布

**今日无新版本发布。**（过去24小时无 Release 记录）

---

## 🔥 社区热点 Issues

> 挑选标准：综合评论数、👍 数与对核心功能的影响。

### 1. [#5305 Plugin Hook for Instant TUI Commands](https://github.com/anomalyco/opencode/issues/5305) — CLOSED · 💬20 · 👍14
**功能：插件注册无需 agent 的即时 TUI 命令。** 已成为 v2 TUI 插件生态的关键能力，配合 #49258 移除冗余帮助弹窗等系列动作，奠定了 plugin-first 的扩展范式。

### 2. [#37070 Plan/Build mode toggle missing from chat UI](https://github.com/anomalyco/opencode/issues/37070) — CLOSED · 💬17 · 👍22
**Bug：最新版 v1.18.1 桌面端聊天窗口底部的 Plan/Build 模式开关消失。** 👍数最高，跨版本 UI 回归是用户感知最强的痛点。

### 3. [#48372 SystemPrompt.environment crashes on every prompt](https://github.com/anomalyco/opencode/issues/48372) — OPEN · 💬7 · 👍23
**严重 Bug：`opencode run` 与 TUI 每次提交都抛 `TypeError: undefined is not a object (evaluating 'a.name')`。** 仍在 OPEN 状态，23 赞表明这是当前最影响面广的未解决问题。

### 4. [#35772 Desktop Provider.list() TypeError crash](https://github.com/anomalyco/opencode/issues/35772) — CLOSED · 💬10
**Bug：v1.17.14 桌面端每次启动都在 `Provider.list()` 崩溃，UI 看不到任何模型/Provider。** 已关闭，但反映了 Windows 桌面端的初始化稳定性问题。

### 5. [#28769 web: agent selector button missing from prompt toolbar](https://github.com/anomalyco/opencode/issues/28769) — CLOSED · 💬3 · 👍10
**Bug：v1.15.6 网页版提示栏的 agent 下拉按钮消失。** 典型的 UI 回归，影响核心使用流程。

### 6. [#42031 Desktop: new session page has no file tree](https://github.com/anomalyco/opencode/issues/42031) — OPEN · 💬5 · 👍3
**Bug：开启 New layout 后 `/new-session` 页只剩提示框，没有文件树按钮。** 仍 OPEN，是桌面端体验一致性的代表性 issue。

### 7. [#37258 OpenAI Responses reasoning-only stream retries forever](https://github.com/anomalyco/opencode/issues/37258) — CLOSED · 💬3
**严重 Bug：`openai/gpt-5.6-sol` 的 Responses 流在工具调用完成后无限重试同一 final LLM 调用，父任务无法结束。** 影响长时间运行的批处理流水线。

### 8. [#34537 异常消耗我的 token](https://github.com/anomalyco/opencode/issues/34537) — CLOSED · 💬5
**Bug：错误导致一夜间 token 消耗 80%。** 真实用户损失案例，体现运行时错误处理的健壮性问题。

### 9. [#37257 output content routed into <think> tags](https://github.com/anomalyco/opencode/issues/37257) — CLOSED · 💬3 · 👍1
**Bug：连续多轮对话（尤其 plan/build 模式切换后）deepseekv4pro 的输出被错误路由进 `<think>` 标签。** 多轮对话状态管理的边缘 case。

### 10. [#37581 OpenAI GPT rejects image attachments as application/octet-stream](https://github.com/anomalyco/opencode/issues/37581) — CLOSED · 💬2
**Bug：GPT 全系拒绝桌面端上传的图片，MIME 被标为 `application/octet-stream`。** 多模态使用场景的关键缺陷。

---

## 🛠️ 重要 PR 进展

### 1. [#49263 fix(cli): refresh version before manual update](https://github.com/anomalyco/opencode/pull/49263) — OPEN
修复手动 `/update` 时仍安装旧缓存版本的问题，并补充回归测试。提升 CLI 升级可靠性。

### 2. [#49255 fix(core): reuse model catalog across credential changes](https://github.com/anomalyco/opencode/pull/49255) — OPEN
**性能关键修复：** 关闭 #49109，使凭据变更时复用模型目录，把 `/connect` 在 10+ 位置时的延迟从 3-5s 降到几乎为零。

### 3. [#49253 fix(cli): load web assets on demand](https://github.com/anomalyco/opencode/pull/49253) — CLOSED
**性能关键修复：** 首请求时不再将 915 个嵌入式 web 资源全量展开到内存，改用 Brotli 压缩按需加载，显著降低首启内存峰值。

### 4. [#49259 feat(tui): open execute call details dialog on click](https://github.com/anomalyco/opencode/pull/49259) — OPEN
点击 `execute` 工具行直接打开包含源码与输出的详情弹窗，保持原有折叠/错误预览行为。

### 5. [#48158 fix(ai): honor chunkTimeout on HTTP SSE streams](https://github.com/anomalyco/opencode/pull/48158) — CLOSED
修复 `chunkTimeout` 配置从未真正生效的 Bug——`HttpOptions` 缺少字段、HTTP transport 未读取。原生流式路径更可靠。

### 6. [#49250 / #49163 fix(tui): unify thinking and patch progress lines](https://github.com/anomalyco/opencode/pull/49250) — OPEN（前者重复，后者已合并）
**UX 修复：** 思考块与 patch 工具同时活跃时只画一行进度，避免双行 spinner 视觉混乱。关闭 #44164。

### 7. [#49112 fix(tui): deduplicate plugin targets](https://github.com/anomalyco/opencode/pull/49112) — CLOSED
当同一组合插件既通过本地目录又被服务端插件清单发现时，去重失败行展示，避免一个失败被显示成两次。

### 8. [#49249 fix(codemode): treat tools.search as the built-in search](https://github.com/anomalyco/opencode/pull/49249) — CLOSED
兼容弱模型将 `search` 写成 `tools.search` 的常见调用方式，避免因 `Unknown tool` 报错打断 agent 循环。

### 9. [#49245 feat(session): add automatic reasoning effort variant](https://github.com/anomalyco/opencode/pull/49245) — CLOSED
为暴露多种推理 effort 的模型新增 `auto` 变体，让会话自动选择合适档位，呼应 #37123 等"variant 缺失"反馈。

### 10. [#44725 feat(core): v2 – restore OPENCODE_DISABLE_CLAUDE_CODE](https://github.com/anomalyco/opencode/pull/44725) — OPEN
v2 分支恢复对 `OPENCODE_DISABLE_CLAUDE_CODE` 环境变量的支持，避免读取 `~/.claude` 的 prompt/skills。

---

## 📈 功能需求趋势

从今日活跃 Issue 中可提炼出以下社区重点诉求方向：

| 方向 | 代表 Issue | 关注度 |
|---|---|---|
| **🧩 插件/扩展体系** | #5305（plugin hook）、#37276（TUI palette 字段未文档化）、#46690（plugin session/event 暴露） | ⭐⭐⭐⭐⭐ |
| **🖥️ 桌面端体验回归** | #37070、#42031、#28769、#37396、#37165 | ⭐⭐⭐⭐⭐ |
| **🤖 子 Agent 编排** | #44748（抢占原语、最大轮次、流式）、#37431（后台 subagent UI 状态） | ⭐⭐⭐⭐ |
| **🧠 推理/Variant 控制** | #37123（reasoning option 缺失）、#49245（auto variant） | ⭐⭐⭐⭐ |
| **🌐 Provider 兼容性** | #37561（Claude Code 400）、#37543（Ollama 输出 JSON）、#37258（OpenAI 无限重试）、#37432（Bun+LAN） | ⭐⭐⭐⭐ |
| **📦 安装/升级体验** | #37301（替换 arborist）、#37563（TUI 原生编译指南）、#49263/#49261 | ⭐⭐⭐ |
| **📚 Skills/文档一致性** | #31616（SKILL 元数据未持久化） | ⭐⭐⭐ |
| **🔄 会话管理** | #37277（归档会话动作恢复） | ⭐⭐ |

---

## 👨‍💻 开发者关注点

社区反馈高频痛点可归纳为五大类：

1. **UI/UX 回归频繁** —— v1.18.x 系列出现 Plan/Build 模式、Agent 选择器、文件树、`ctrl+p` 等多个核心入口"凭空消失"，是用户怨气最集中的方向。维护者需要建立更严格的视觉回归测试。

2. **崩溃与错误处理欠鲁棒** —— `SystemPrompt.environment` 全局崩溃、Token 异常消耗一晚 80%、`Provider.list()` 启动崩溃、OpenAI 流式无限重试——表明错误兜底与运行时保护需要系统性加固。

3. **多轮/多模态边界场景** —— `<think>` 路由错误、图片 MIME 错标、多轮 plan/build 切换后状态漂移，揭示上下文状态机的复杂性仍未被充分覆盖。

4. **插件生态渴望更深度 Hook** —— TUI 命令面板、session forms、event stream、子 Agent 抢占原语等呼声强烈，#5305 与 #46690 是标志性 PR，反映"插件优先"已成共识。

5. **v1 → v2 过渡体验** —— 多个 PR（#44725、#49248、#49246、#49251）在补齐 v2 协议改造留下的 fixture 与契约缺口；用户则关心关键环境变量与默认行为是否被悄悄移除。

---

*数据时间窗口：2026-09-15 → 2026-09-16（UTC）｜数据源：github.com/anomalyco/opencode*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 | 2026-09-16

## 今日速览
过去 24 小时 pi-mono 仓库共更新 65 条（50 Issues + 15 PRs），无新版本发布。热点高度集中在 **上下文窗口与压缩机制** 的多项工程缺陷（#8061/#9602/#9512）、**Provider 协议适配**（Baseten / OrcaRouter / Azure / OpenRouter）以及 **Extension API 的能力扩展**（ModelRuntime 暴露、系统提示追加、事件 unsubscribe）。维护者对低优先级问题采用 `no-action` 关闭的比例明显上升，提示社区进入"质量收口"阶段。

## 版本发布
无。

## 社区热点 Issues

| # | 标题 | 状态 | 评论 / 👍 | 关注点 |
|---|---|---|---|---|
| [#8061](https://github.com/earendil-works/pi/issues/8061) | Context budget 忽略 maxTokens 输出预留，compact-and-retry 失败 | OPEN / inprogress | 9 / 2 | 1M-token Gemini 上下文下的预算/重试双失灵 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | 并行 pi 启动因 OAuth 过期报 "No API key found" 持续 48s | OPEN / inprogress | 8 / 0 | 多进程场景的鉴权延迟 |
| [#9457](https://github.com/earendil-works/pi/issues/9457) | Bedrock-converse 1h 缓存写入按 5m 计费 | CLOSED | 6 / 4 | 影响成本审计，已修复 |
| [#8348](https://github.com/earendil-works/pi/issues/8348) | OpenAI 上 forked session 无跨 session 缓存 | CLOSED / no-action | 6 / 1 | prompt_cache_key 设计取舍 |
| [#9165](https://github.com/earendil-works/pi/issues/9165) | Claude Opus 5 via OpenRouter 拒绝 per-message output_config | CLOSED | 6 / 0 | 第三方路由的字段协商 |
| [#9571](https://github.com/earendil-works/pi/issues/9571) | 重试在 Retry-After 非法 HTTP-date 时 NaN 死循环 | OPEN | 5 / 0 | 限流下会风暴 |
| [#9549](https://github.com/earendil-works/pi/issues/9549) | 大 transcript 每帧重渲染，单核饱和 | OPEN | 4 / 0 | TUI 性能关键问题 |
| [#8791](https://github.com/earendil-works/pi/issues/8791) | 扩展 API 暴露 ModelRuntime | OPEN | 3 / **5** | 需求型 issue 获赞最多 |
| [#9577](https://github.com/earendil-works/pi/issues/9577) | bash 工具在 SIGKILL/SIGTERM 后仍 resolve 成功 | OPEN | 3 / 0 | 信号语义与 #8994 同类问题复发 |
| [#9602](https://github.com/earendil-works/pi/issues/9602) | 压缩包含之前请求省略的 thinking 消息导致溢出 | OPEN | 3 / 0 | 配合 #8061 的连环缺陷 |

> 趋势观察：#8061、#9602、#9512、#8348 形成"上下文工程"集群；#9571、#8928、#9627 暴露 provider 错误处理的一致性问题。

## 重要 PR 进展

1. **[#9548 OPEN](https://github.com/earendil-works/pi/pull/9548)** —— 将 system prompt 与工具变更写入 transcript（mitsuhiko）。支持 resume/branch 还原，并保护 prompt cache 前缀。
2. **[#6881 OPEN / inprogress](https://github.com/earendil-works/pi/pull/6881)** —— 优先采用 provider 上报的 cost（Vercel AI Gateway `cost_details.upstream_inference_cost` 等），BYOK 场景成本更准。
3. **[#9620 CLOSED](https://github.com/earendil-works/pi/pull/9620)** —— 新增 OrcaRouter 一等 provider，支持 API key 与 OAuth 2.0 PKCE 双路径。
4. **[#9434 OPEN](https://github.com/earendil-works/pi/pull/9434)** —— `session_start` 处理器可 append `systemPromptAppend`，闭合 #9432。
5. **[#9619 CLOSED](https://github.com/earendil-works/pi/pull/9619)** —— 修复 Anthropic 拒绝 root `anyOf`/`oneOf`/`allOf` 的 schema 转换 bug（#9134）。
6. **[#9630 OPEN](https://github.com/earendil-works/pi/pull/9630)** —— 为扩展事件处理器增加 unsubscribe（修 #8967）。
7. **[#9615 CLOSED](https://github.com/earendil-works/pi/pull/9615)** —— Coding agent 新增 `/forget` 命令，软/硬两种上下文回滚模式。
8. **[#9483 CLOSED](https://github.com/earendil-works/pi/pull/9483)** —— 工具 `cwd` 解析改为 opt-in（`customCwd` + `ctx.cwd` 回退），保持向后兼容。
9. **[#9642 CLOSED](https://github.com/earendil-works/pi/pull/9642)** —— 导出扩展事件与结果类型（`MessageEndEventResult`、`ThinkingLevelSelectEvent`、`ModelSelectSource` 等）。
10. **[#9635 CLOSED](https://github.com/earendil-works/pi/pull/9635)** —— 文档提升评测（documentation lift）Docker 隔离化，支持 `(case, variant, model, rep)` 完整组合。

> 此外 #9648/#9646 修复 Baseten session affinity header；#9611 移除 prompt-url-widget 扩展中已废弃的 `session_switch` 处理器；#8635 修正 lazy setup 期间 abort 信号丢失。

## 功能需求趋势

- **Provider 生态扩张**：Baseten、OrcaRouter、Azure Foundry（DeepSeek V4 Pro）、OpenRouter 等持续接入，社区正把 pi 推向"多模型路由器"形态。
- **Extension API 升级**：`ModelRuntime` 暴露、`session_start` 追加 system prompt、事件 unsubscribe、类型导出 —— 共同支撑"in-process 隔离 agent"这一新用例。
- **会话/上下文工程**：压缩溢出、思考块回填、跨 session 缓存、汇总输出上限 —— "上下文窗口"是当前最高频的失败面。
- **TUI 与可达性**：重渲染、终端裁剪、剪贴板、视觉样式 —— 大 transcript + 受限终端（手机 SSH / 低算力）已成核心 UX 瓶颈。
- **可观测性**：扩展加载明细（#9650）、并行启动超时（#8928）、时间戳语义（#9609）反映"基础可观测"诉求。

## 开发者关注点

- **可靠性高于新功能**：#9571 重试死循环、#9577 信号吞噬、#9627 Cloudflare 520 非可重试、#8635 abort 丢失 — 多个"边界态失败"被并列提出。
- **成本与缓存正确性**：#8348（fork 缓存击穿）、#9457（1h/5m 计费错配）、#6881（cost 上

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期**：2026-09-16
**数据来源**：GitHub `QwenLM/qwen-code`

---

## 📌 今日速览

今日社区焦点集中在 **VS Code / WebShell / Desktop 应用的跨端集成稳定性** 上，多个 P1 级别 Bug 集中暴露（React TUI 死循环、Webview 远程连接、ACP 权限失效等）。同时，CUA 驱动发布了 `v0.20.9` 预编译二进制，配套 macOS 签名与跨平台支持。开发者社区高频反馈的是 **OpenAI 兼容网关的协议边缘场景**（空参数序列化、占位符未展开等）。

---

## 🚀 版本发布

### cua-driver-rs-v0.20.9
Qwen CUA（Computer Use Agent）Driver 预编译二进制已更新：
- **macOS**：已签名 + 公证 + 通用二进制，附带 `QwenCuaDriver.app`
- **Linux**：未签名（x86_64 + arm64，最低 glibc 2.31）
- **Windows**：未签名 UIAccess worker + 原生 SDK payload（x86_64 + arm64）

> CUA Driver 是 Qwen Code 用于桌面操控能力的底层组件，此版本统一了三端交付形态。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 标题 | 评论 | 关注点 |
|---|-------|------|------|--------|
| 1 | [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI 静默退出：多后台 Agent 完成时触发 React #185 最大更新深度循环 | 15 | **P1 渲染核心 Bug**。Ink `useBoxMetrics` 布局监听器在并发 Agent 完成时进入 setState 死循环，进程直接掉到 shell 而无报错日志，影响所有交互式用户 |
| 2 | [#2382](https://github.com/QwenLM/qwen-code/issues/2382) | VS Code Companion 扩展再次无法工作 | 9 | 升级到 0.12.3 后卡在 "Preparing Qwen Code…"，反映 IDE 集成版本兼容性回归 |
| 3 | [#11834](https://github.com/QwenLM/qwen-code/issues/11834) | API 400: function parameters is empty (2013) | 7 | **P1 内容生成 Bug**。中文问候即触发空参数错误，影响全部用户首轮对话 |
| 4 | [#11556](https://github.com/QwenLM/qwen-code/issues/11556) | Companion 0.23.1 在 Remote-SSH 下 webview 卡在加载 | 7 | **P1 集成 Bug**。VS Code Server + Remote 场景下 webview 无法联通 daemon，影响远程开发工作流 |
| 5 | [#11574](https://github.com/QwenLM/qwen-code/issues/11574) | 扩展更新后历史会话全部消失：历史对话框硬编码 sourceType 过滤 | 7 | **P2 回归**。0.23.x 之前的会话因缺少 `sourceType` 元数据被全部过滤，破坏用户数据连续性 |
| 6 | [#11955](https://github.com/QwenLM/qwen-code/issues/11955) | Desktop 应用忽略 `ui.theme` 与 `general.language` 设置 | 6 | **P2 UI Bug**。Settings 面板显示正确但实际不生效，桌面端设置链路断裂 |
| 7 | [#11956](https://github.com/QwenLM/qwen-code/issues/11956) | 无参工具的 `parameters` 字段被序列化为 null，致 OpenAI 严格网关拒收 | 5 | **P2 协议兼容**。空工具定义在 Responses/Chat Completions 线上行为不一致 |
| 8 | [#9694](https://github.com/QwenLM/qwen-code/issues/9694) | Plan mode：可配置的只读 shell 命令白名单 | 5 | **P2 安全功能**。自定义 CLI（如 `ib`）每次调用都需确认，期望支持扩展白名单 |
| 9 | [#11858](https://github.com/QwenLM/qwen-code/issues/11858) | 强化 `useBoxMetrics` 循环守卫（#11835 后续） | 5 | 与 #11500 同源，验证补丁根治而非临时绕过 |
| 10 | [#11887](https://github.com/QwenLM/qwen-code/issues/11887) | `--acp` 忽略审批模式，工具直接执行且不发 `request_permission` | 5 | **P2 集成安全**。ACP 协议下任何审批配置都被绕过，破坏 Agent 主机安全边界 |

**社区反应**：P1 级别中，**TUI 静默崩溃**（#11500）讨论度最高（15 条评论、👍 1），其次是 **API 400 错误**（#11834）和 **Remote-SSH 集成失效**（#11556），均直接影响日常使用。

---

## 🔧 重要 PR 进展（Top 10）

| # | PR | 标题 | 关键内容 |
|---|----|------|----------|
| 1 | [#11778](https://github.com/QwenLM/qwen-code/pull/11778) | Windows 命令钩子通过 cmd 回退和 PowerShell 探测解析 | **破坏性修复**。`cmd.exe /d /s /c` 不剥离前缀+引号路径的内部引号，钩子改为回退 PowerShell `-NoProfile -Command`，解决 Windows 端钩子失效 |
| 2 | [#11904](https://github.com/QwenLM/qwen-code/pull/11904) | `/hooks` 打开时重载钩子注册表 | 编辑设置后无需重启即可生效，重新构建运行中注册表 |
| 3 | [#11927](https://github.com/QwenLM/qwen-code/pull/11927) | 发出 Goal 生命周期事件与指标 | 新增 `qwen-code.goal_state` 日志事件 + 3 项指标（转换计数、token 消耗、轮次），强化可观测性 |
| 4 | [#11480](https://github.com/QwenLM/qwen-code/pull/11480) | WebShell 脚注预览与每轮来源 | 支持数字 / 中文 ID、多行注释、公式 TeX 单一表示 |
| 5 | [#9305](https://github.com/QwenLM/qwen-code/pull/9305) | 短视口内容底部对齐 | VP 模式下短对话贴底，顶部留白更符合阅读直觉（关联 #9300） |
| 6 | [#10455](https://github.com/QwenLM/qwen-code/pull/10455) | 输出语言文件不可写时不再崩溃启动 | 只读家目录场景下 CLI 启动稳健性修复 |
| 7 | [#11001](https://github.com/QwenLM/qwen-code/pull/11001) | 测试清理时等待交互式 PTY 会话结束 | 避免清理竞态导致的下游测试 flake |
| 8 | [#11134](https://github.com/QwenLM/qwen-code/pull/11134) | macOS E2E 全绿分片死亡时单次重试 | 与 Linux `sandbox:none` 一致的预算门控重试 |
| 9 | [#11963](https://github.com/QwenLM/qwen-code/pull/11963) | verify-capture 渲染器合成粗体 | SVG 渲染证据图时为粗体字符描边，CI 截图更清晰 |
| 10 | [#11974](https://github.com/QwenLM/qwen-code/pull/11974) | Linux E2E 任务加入磁盘下限闸门 | `npm ci` 前检测 ≥ 2 GiB 可用空间，避免池路由机器磁盘不足导致构建失败 |

**值得关注的趋势**：CI 健壮性改进占据 PR 列表近半（#9305、#10455、#11001、#11134、#11588、#11963、#11974），说明 0.23.x 发布管线曾因 E2E flake 阻塞多次。

---

## 📈 功能需求趋势

从今日 50 条 Issue 中提炼，社区关注点分布如下：

1. **IDE / 桌面端集成稳定性**（占比 ~35%）
   - VS Code Companion（Remote-SSH、Dev Containers、历史会话迁移）
   - Desktop 应用（主题/语言设置不生效、工具块空渲染）
   - WebShell 与 WebView 端口绑定 / 反向代理

2. **协议与网关兼容**（占比 ~20%）
   - OpenAI Responses / Chat Completions 边缘行为
   - ACP 协议权限 / 通知尺寸 / 审批模式
   - 自定义 Header 占位符未展开

3. **会话与上下文管理**（占比 ~15%）
   - Thinking 模型的 `stripAnalysisBlock` 截断导致压缩失败
   - 跨端会话元数据缺失
   - Session Overview 漏掉 no-workspace 会话

4. **可观测性与 CI 健壮性**（占比 ~15%）
   - 磁盘下限闸门、PTY 清理、重试策略
   - 桌面端 Windows 代码签名决策

5. **安全与权限模型**（占比 ~10%）
   - Plan mode 白名单、ACP 权限强制
   - 钩子 matcher 转义、删除会话后日志清理

6. **跨端数据契约**（占比 ~5%）
   - WebShell / Desktop / VS Code / HTML Export 的共享转录本预校验

---

## 🛠 开发者关注点

### 🔴 高频痛点

1. **静默崩溃**：TUI React #185 错误不向用户暴露任何日志，导致用户复现和上报困难（#11500）
2. **设置不生效**：Desktop 应用设置面板只是"显示"而非"应用"（#11955、#11966）
3. **远程/容器环境失效**：Dev Containers、Remote-SSH 下 webview 无法连接 daemon，缺 `asExternalUri`（#11976、#11556）
4. **协议兼容性**：本地 LLM 网关（Ollama、OpenCode Go 等）因严格模式拒收空参数 / 占位符 header（#11956、#11936）
5. **历史数据丢失**：0.23.x 升级抹除所有老会话（#11574、#11514）

### 💡 高频需求

- **可配置的只读白名单**：Plan mode 应当允许用户扩展可信 CLI（#9694）
- **跨端会话元数据回填**：旧会话迁移到新版本时不应被过滤
- **可观测性增强**：Goal 状态、turn 结束、token 消耗需要结构化事件（#11927、#11924）
- **CI 资源门控**：磁盘、内存、预算统一闸门，避免 runner 资源不足导致的 flake
- **思考模型适配**：thinking/reasoning 模型的压缩与摘要需特殊处理（#11969）

---

*日报生成完毕。如需深入分析某个 Issue 或 PR，请告知具体编号。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-09-16

> 数据来源：Hmbown/DeepSeek-TUI（关联仓库 Hmbown/Codewhale）
> 报告期：过去 24 小时

---

## 一、今日速览

**v0.9.14 里程碑进入大规模合并阶段**：今日共 12 个 PR 被合入主线，集中解决"用户丢东西"类问题（编辑器交接、steer 顺序、`/models` 报错无说明）和编辑路径安全门（syn 解析门、TOML/JSON 解析门、rustfmt 锚点稳定化）。**Shoreline TUI 重设计**也以独立分支形式重新上架主线，并作为新装默认。同时首次落地运行时性能门（streaming reveal 路径）的判定式预算 harness。

---

## 二、版本发布

过去 24 小时无新 Release。v0.9.14 多个切片（#6175、#6238、#6239、#6229 等）已陆续合入主线，但尚未打 tag。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 状态 | 评论 | 为什么值得关注 |
|---|---|---|---|---|
| [6207](https://github.com/Hmbown/Codewhale/issues/6207) | bug(tui): session picker 拒绝运行期 store 存在但非本主机的已保存会话 | OPEN | 9 | **复发性严重**：即使 store 存在、所有权校验通过、且无并发 Codewhale 进程，仍报"属于另一 Runtime 主机"，让用户无法 resume。直接破坏 `/resume` 工作流。 |
| [6015](https://github.com/Hmbown/Codewhale/issues/6015) | feat(fleet): 自适应 anti-stall + 更宽的只读 shell 语法（默认全局生效） | OPEN | 8 | **战略级特性**：Core 计划 C05/C06 已纳入，将"自适应反卡死"和"安全只读 shell 语法"从可选项提升为默认能力，影响所有用户。 |
| [6225](https://github.com/Hmbown/Codewhale/issues/6225) | bug: 无法在新进程中 resume 之前的会话（自诊断冲突） | OPEN | 5 | **新装即触发的回归**：干净安装的 Codewhale，第二次启动后 `/resume` 立即失败，与 #6207 同根。已在 PR #6233 中修复用户提示文案。 |
| [6190](https://github.com/Hmbown/Codewhale/issues/6190) | bug: Steer 输入没有成为最新历史项，而是落在 in-flight 工作上方 | CLOSED | 5 | **用户认知错位**：用户看到的时间线与真实发生顺序不一致，已通过 PR #6239 修复。 |
| [6184](https://github.com/Hmbown/Codewhale/issues/6184) | bug: Engine 中途静默冻结——用户消息持久化了但永远没回答 | OPEN | 5 | **数据丢失风险**：典型场景是 zai/GLM-5.3-Flash 的长工具调用流，错误完全静默，无日志无崩溃记录，影响所有 long-running turn。 |
| [6173](https://github.com/Hmbown/Codewhale/issues/6173) | bug: Gemini `/models` 报错且无说明 | CLOSED | 4 | **可用性黑屏**：错误页只有堆栈无解释，用户不知如何降级手动指定模型，已在 #6239 中修复。 |
| [6165](https://github.com/Hmbown/Codewhale/issues/6165) | bug: `/hooks edit` 把终端交给 `$EDITOR` 时未暂停 TUI 输入线程 | CLOSED | 4 | **典型的并发资源争抢**：导致按键被 editor 与 TUI 共同消费，已修复（`pause_for_child_terminal` 加入预算睡眠）。 |
| [6169](https://github.com/Hmbown/Codewhale/issues/6169) | bug: TUI 缺少作业控制握手（SIGTTIN/SIGTSTP 未处理） | OPEN | 4 | **结构性缺陷**：只在启动时检查一次前台所有权，运行中掉入后台即挂死且无恢复路径。 |
| [6152](https://github.com/Hmbown/Codewhale/issues/6152) | enhancement: 引擎事件应支持 broadcast/watch 以服务 watch-only 客户端 | OPEN | 3 | **架构演进**：单消费者 `mpsc(256)` 是 GPUI App/IDE 接入的核心瓶颈，已纳入 0.9.14 重构 backlog。 |
| [6184](https://github.com/Hmbown/Codewhale/issues/6184) | bug: Engine 静默冻结 | OPEN | 5 | 已在 #6184 列出，重复提示严重性。 |
| [6202](https://github.com/Hmbown/Codewhale/issues/6202) | v0.9.14: 在 tools edit 路径中嵌入 ast-grep-core 拒绝语法破坏性编辑 | OPEN | 2 | **编辑安全门**：模型产生的破坏性补丁当下只在下次运行才暴露，是高频隐性成本。 |

---

## 四、重要 PR 进展（Top 10）

| # | PR | 状态 | 关键内容 |
|---|---|---|---|
| [#6259](https://github.com/Hmbown/Codewhale/pull/6259) | test(tui): streaming reveal 性能门（确定性整数预算） | **CLOSED ✅** | 首个运行时性能门切片（#6193）。零依赖 `#[cfg(test)]` harness 驱动真实 `StreamDisplay` 路径，把"用户路径速度"从口号变成可执行预算。 |
| [#6239](https://github.com/Hmbown/Codewhale/pull/6239) | Lost work: editor handoff / steer 顺序 / `/models` 静默错误 | **CLOSED ✅** | 一次合三个用户丢东西类 bug——#6165、#6190、#6173。"一个 PR 一个用户可见问题"的纪律很强。 |
| [#6238](https://github.com/Hmbown/Codewhale/pull/6238) | Edit safety: 写入前解析门 | **CLOSED ✅** | 三个 issue 一个 gate seam：#6204（`syn::parse_file`）、#6206（TOML/JSON 解析）、#6205（rustfmt 锚点稳定化）。形成工具链编辑路径的"语法门→格式化→写入"完整管线。 |
| [#6229](https://github.com/Hmbown/Codewhale/pull/6229) | Native-client runtime API 路由：jobs / files / artifacts / git / LSP / secrets / targets | **CLOSED ✅** | 28 文件 +5,900 行（含 1,758 行测试），为 GPUI desktop 提供完整的 runtime API 表面积；`docs/RUNTIME_API.md` 一并文档化。 |
| [#6258](https://github.com/Hmbown/Codewhale/pull/6258) | Shoreline: TUI 重设计 rebase 上 main（剔除 hitchhikers） | OPEN | 从 #6222 中剥离重设计部分到当前 main（比原分支新 200 commits），并将 Shoreline 设为新装默认。架构层面切换。 |
| [#6257](https://github.com/Hmbown/Codewhale/pull/6257) | 用 latest-wins 合并不再有界持久化与生命周期 outbox 队列 | **CLOSED ✅** | 关闭 #6212 的 R5/R6 切片；`try_send` 现在把请求合并进共享 `PendingState`，actor 在锁外 flush——正确性 + 吞吐双收。 |
| [#6250](https://github.com/Hmbown/Codewhale/pull/6250) | fix(mcp): `is_ready` 探测死 stdio 子进程，重连失败时保留 last-good catalog | **CLOSED ✅** | 三种窄监督机制，不开后台任务；探测同步非阻塞，默认 `alive=true`（向后兼容 HTTP/SSE）。 |
| [#6248](https://github.com/Hmbown/Codewhale/pull/6248) | fix(models): 模型推理能力改读打包的 models_dev 目录 | **CLOSED ✅** | `model_reasoning_capability` 链路从"硬编码前缀 + 字面量列表"改为先查打包快照，把能力归属还给目录——直接回应 #6032。 |
| [#6260](https://github.com/Hmbown/Codewhale/pull/6260) | fix(acp): tracked session 的前缀重载改为幂等 | OPEN | 修复 #6245：`session/load` 内存快路径之前用客户端原始 `sessionId` 校验，前缀会被重复 push 进 `insertion_order`。 |
| [#6249](https://github.com/Hmbown/Codewhale/pull/6249) | fix(tui): 流式渲染成本 + 已提交 latex 的过期修正（#6196） | **CLOSED ✅** | 三处改动定位 `crates/tui/src/tui/`：渲染时把"原文流"喂给增量 markdown cache 时混入 latex 投影，避免 `\[…\]` 块未闭合时的过期渲染。 |

> 另值得关注：#6251（把 session 补丁授权收紧到用户实际看到的文件，关 #6247）、#6233（#6225 的用户文案修复——告诉用户 resume 真正能走的路径）、#6175（v0.9.14 第二切片，9 个 issue 一刀一 commit）。

---

## 五、功能需求趋势

从 50 条 24 小时活跃 Issue 中提炼：

1. **运行时性能门与基准（runtime performance gate）**
   - #6193 提出"没有任何东西衡量用户路径的速度"，#6259 已落地 streaming reveal 的第一片判定式预算。趋势：**从 BUILD 性能扩展到 RUNNING 性能**。

2. **TUI 编辑路径安全门**
   - #6202（ast-grep-core 嵌入）、#6204（syn 解析）、#6205（rustfmt 锚点稳定化）、#6206（TOML/JSON 解析）——四个相邻 issue 在 #6238 一并完成。趋势：**模型生成代码的"语法/语义门"成为工具路径标准动作**。

3. **App-server / Runtime API 标准化**
   - #6163、#6164、#6166、#6229、#6139、#6152 共同推动"GPUI 桌面与 TUI 共用同一运行时契约"。趋势：**避免在桌面里发明第二套 job registry / file store / queue**。

4. **会话与恢复体验**
   - #6207、#6225、#6231（可配置 50 条上限）、#6237（Ctrl+C 与退出语义）——一个聚类。趋势：**会话生命周期成为用户最敏感的痛点之一**。

5. **结构化规划与子代理调度**
   - #6232（多仓 workspace 子 cwd）、#6055（PR：rate-limit-adaptive 启动调度）。趋势：**subagent 从"并行发起"走向"自适应限流"**。

6. **可观测性与死锁恢复**
   - #6184（engine 静默冻结无日志）、#6169（SIGTTIN/SIGTSTP 无处理）。趋势：**TUI 对 POSIX 信号与故障态的可见性成为新关注点**。

7. **主题与外观一致性**
   - #6234（多主题下黑字黑底）。趋势：**Shoreline 重设计正契合此痛点**。

---

## 六、开发者关注点（社区痛点 / 高频需求）

1. **"用户丢东西"类 Bug 是当前最热的合并驱动**  
   #6239 一刀切三个（editor 交接、steer 顺序、`/models` 报错无说明），折射出 v0.9.14 的核心指标：**让用户的输入永远能被正确呈现与回应**。这类 issue 在 #6190、#6165、#6225 上反复出现。

2. **错误信息的可读性与可行动性**  
   "session 属于另一 Runtime host"（#6207、#6225）、"request_user_input 永远等"（#6236）、"spawn rejected: Failed to validate input"（#6232）——开发者反复指出：**错误既不可信也不可执行**。已通过 #6233、#6239 等开始纠正文案。

3. **TUI 与外部进程的并发模型**  
   #6165（editor 抢 stdin）、#6169（前台/后台切换无握手）——同一根因：**TUI 对外部世界缺少清晰的并发边界**。这与 #6257 的 latest-wins 合并（解决 actor 队列正确性）属于同一条"并发模型工程化"主线。

4. **架构债务已具象化为 backlog**  
   #6139（app-server 跑不通 turn）、#6142（两套 MCP 客户端栈）、#6143（两套 config）、#6152（事件单消费者）——四个 issue 把"两份实现、两套契约"全部点名为 0.9.14 重构目标。**TUI 内部的 `crates/*` 化是核心方向**。

5. **subagent 与 rate-limit 的现实摩擦**  
   #6055（PR 仍在 OPEN）：多 sub-agent 共享 provider 时 429 成为常态而非异常；`Semaphore` 容量实际不可缩。社区已意识到**固定并发门是反模式**。

6. **结构性需求 vs. 视觉性需求并行**  
   一边是性能门、解析门、限流门、outbox 合流；另一边是 Shoreline 重设计（#6222 / #6258）与主题可读性（#6234）。两者都获得大量讨论，说明项目正同时推进**健壮性与现代化**两个维度。

---

*报告口径：issue / PR 优先级按"评论数 + 状态紧迫度 + 是否反映架构级方向"综合排序；趋势聚合按"指向同一工程主线的 issue 集合"归纳。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*