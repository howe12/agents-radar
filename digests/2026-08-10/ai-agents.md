# OpenClaw 生态日报 2026-08-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-10 01:14 UTC

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
**报告日期：2026-08-10**

---

## 1. 今日速览

OpenClaw 仓库今日保持高强度运转：过去 24 小时 Issues 端共 500 条更新（新开/活跃 428 条，已关闭 72 条），PR 端同样 500 条更新（待合并 324 条，已合并/已关闭 176 条），但**无新版本发布**。从吞吐比看，Issue 关闭率约 14.4%、PR 关闭率约 35.2%，PR 流转效率优于 Issue 流转，整体处于"功能密集提交 + 故障持续暴露"的并行状态。值得注意的是，"silent reply / no-reply" 类故障（涉及 Telegram、Matrix、Slack、MS Teams 多通道）以及 6.x → 7.x 升级引发的状态迁移问题仍是当前最集中的工程痛点，多条 P1 / diamond-lobster 级别 Issue 尚未合入根治补丁。

---

## 2. 版本发布

**今日无新版本发布。** 仓库目前处于代码高 churn 但 release 静默的状态，建议关注者回看 [Releases 页面](https://github.com/openclaw/openclaw/releases) 确认是否错过了公告。

---

## 3. 项目进展

今日有 **3 条 PR 进入已合并/已关闭状态**，加上多日滚动合并、待合入"ready for maintainer look"队列的 PR，项目推进集中在以下方向：

### 3.1 已落地

| PR | 主题 | 影响 |
|---|---|---|
| [#110261](https://github.com/openclaw/openclaw/pull/110261) | **fix(acp): deliver bound follow-up turns to external harnesses** | 修复外部 ACP harness（Claude / Codex / Gemini）绑定 follow-up turn 在到达运行前失败的问题，关 [#109684](https://github.com/openclaw/openclaw/issues/109684)。gateway 维护方向 |
| [#121310](https://github.com/openclaw/openclaw/pull/121310) | **test(sessions): remove assertion-free history kick probe** | 清理一个不产出断言的低价值 session-history 测试，属技术债清理 |
| [#121295](https://github.com/openclaw/openclaw/pull/121295) | **refactor(agents): move swarm family into subagents/swarm** | 子代理子系统重组（阶段 1，仅移动文件），改善所有权边界 |

### 3.2 进入"ready for maintainer look"待合并梯队

- [#97103](https://github.com/openclaw/openclaw/pull/97103) — `openclaw sessions cleanup` 现在可预览并报告 `.deleted.*` / `.reset.*` 物理归档（关 [#75658](https://github.com/openclaw/openclaw/issues/75658)）
- [#117614](https://github.com/openclaw/openclaw/pull/117614) — `openclaw health --verbose` / `openclaw status --deep` 让 Gateway 主导可变时长探测，避免阻塞启动
- [#115138](https://github.com/openclaw/openclaw/pull/115138) — `node:sqlite` 数据库启用 mmap，减少事件循环阻塞（关 [#112758](https://github.com/openclaw/openclaw/issues/112758)）

### 3.3 整体推进评估

- **会话与状态层**：本周有 4 条 PR 集中优化 sessions cleanup、writer fence、自定义 icon 移除（[#121263](https://github.com/openclaw/openclaw/pull/121263)）、子代理重组 — 表明 sessions 子系统正在进行系统化重构。
- **Slack Enterprise Grid 支持**：[#121311](https://github.com/openclaw/openclaw/pull/121311)、[#121014](https://github.com/openclaw/openclaw/pull/121014)、[#120864](https://github.com/openclaw/openclaw/pull/120864)、[#120942](https://github.com/openclaw/openclaw/pull/120942) 四条 PR 形成完整堆栈，预计下一版本将官方支持 Grid。
- **基础设施**：virtiofs SQLite journaling 修复（[#120595](https://github.com/openclaw/openclaw/pull/120595)）、cloud workers 大 workspace 支持（[#121262](https://github.com/openclaw/openclaw/pull/121262)）、Web UI 设备 token 轮换修复（[#121315](https://github.com/openclaw/openclaw/pull/121315)）— 平台兼容性方向稳步推进。

---

## 4. 社区热点

### 4.1 评论数 Top 5 Issues

| # | Issue | 评论 | 关注点 |
|---|---|---|---|
| 1 | [#116277](https://github.com/openclaw/openclaw/issues/116277) | **196** | DeepSeek v4 Flash silent reply failure（已 CLOSED）— 长期被社区追踪的核心故障，但**今日衍生 [#121058](https://github.com/openclaw/openclaw/issues/121058) 表明关闭后仍复发** |
| 2 | [#92201](https://github.com/openclaw/openclaw/issues/92201) | 21 | Anthropic thinking signature 在回放时偶发失效，wrapper 永远不触发（21 评论） |
| 3 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 19 | 分层 bootstrap 文件加载（节省 token）|
| 4 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | 19 | **#116277 关闭后 silent reply 仍在发生**，监控 cron 持续记录新事件 |
| 5 | [#91009](https://github.com/openclaw/openclaw/issues/91009) | 18 | Codex PreToolUse hook relay 派生 CPU-bound 子进程，拖垮 gateway RPC |

### 4.2 👍 反应数 Top 3

- [#67413](https://github.com/openclaw/openclaw/issues/67413) — Per-agent dreaming configuration（5 👍）
- [#48003](https://github.com/openclaw/openclaw/issues/48003) — Steer mode 不在主会话 turn 中注入消息（4 👍）
- [#10659](https://github.com/openclaw/openclaw/issues/10659) — Masked Secrets：阻止 agent 看到原始 API key（4 👍）
- [#48920](https://github.com/openclaw/openclaw/issues/48920) — Live Docs 跑在 release 前面（4 👍）

### 4.3 社区诉求分析

- **可靠性 ≥ 功能**：热点前 10 名有 7 条是消息丢失 / 会话状态类 P1，反映用户对"消息能可靠送达"的诉求已压过新功能请求。
- **通道一致性**：Telegram、Matrix、MS Teams、Slack 各有独立 bug，社区在呼吁建立统一的"通道合规性"矩阵（[#69208](https://github.com/openclaw/openclaw/issues/69208) 的 umbrella issue 正是为此而生）。
- **可观测性**：[#52130](https://github.com/openclaw/openclaw/issues/52130)、[#114154](https://github.com/openclaw/openclaw/issues/114154)、[#105528](https://github.com/openclaw/openclaw/issues/105528) 都在喊"silent failure"，要求 plugin/mcp/doctor 给出更具名的诊断。

---

## 5. Bug 与稳定性

按严重程度自高至低排列（评级取自仓库 `issue-rating` 标签）。

### 5.1 🦞 Diamond Lobster（最高严重度）

| Issue | 描述 | 已有 Fix PR？ |
|---|---|---|
| [#116277](https://github.com/openclaw/openclaw/issues/116277) | DeepSeek v4 Flash silent reply | ❌ Issue 已关闭但未根治，衍生 [#121058](https://github.com/openclaw/openclaw/issues/121058) |
| [#48003](https://github.com/openclaw/openclaw/issues/48003) | Steer mode 不向主会话 turn 中注入消息 | ❌ |
| [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets 缺失 | ❌（已存在相关讨论，无合并 PR）|
| [#31583](https://github.com/openclaw/openclaw/issues/31583) | `exec` 工具未继承 `skills.entries.*.env` | ❌（linked-pr-open 标签）|
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 阻塞回复 + QMD 启动压垮 gateway | ❌ |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) / [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于 release（ux-release-blocker） | ❌ |
| [#96242](https://github.com/openclaw/openclaw/issues/96242) | Telegram 重复消息（三条独立路径） | ❌（recovery-stuck）|
| [#94939](https://github.com/openclaw/openclaw/issues/94939) | 6.x 状态迁移导致 channel conversation-store SQLite 空 0 字节 | ❌（linked-pr-open）|
| [#87327](https://github.com/openclaw/openclaw/issues/87327) | Isolated agent run 卡在 runtime-plugins 阶段 | ❌ |
| [#60572](https://github.com/openclaw/openclaw/issues/60572) | Multi-Slot Memory Architecture | ❌（linked-pr-open）|
| [#71452](https://github.com/openclaw/openclaw/issues/71452) | `list chat` / `list messages` 硬编码 25 条上限 | ❌ |
| [#46656](https://github.com/openclaw/openclaw/issues/46656) | Webchat 不支持 inline buttons | ❌ |
| [#47677](https://github.com/openclaw/openclaw/issues/47677) | Telegram reaction 一类触发器缺失 | ❌ |
| [#6625](https://github.com/openclaw/openclaw/issues/6625) | sub-agent 超时前无预警 | ❌ |
| [#56692](https://github.com/openclaw/openclaw/issues/56692) | 群聊上下文混淆 agent 归属 | ❌ |
| [#88079](https://github.com/openclaw/openclaw/issues/88079) | WebChat 不流式输出 Kimi / DeepSeek 推理 | ❌ |
| [#95724](https://github.com/openclaw/openclaw/issues/95724) | 同一 workspace 多 agent 重复建立向量索引 | ❌ |
| [#77733](https://github.com/openclaw/openclaw/issues/77733) | 裸 `/new` / `/reset` 不再触发 persona greeting（4.x 回归）| ❌（linked-pr-open）|
| [#85461](https://github.com/openclaw/openclaw/issues/85461) | 图片生成 provider usage 元数据缺失 | ❌ |
| [#107207](https://github.com/openclaw/openclaw/issues/107207) | 升级至 2026.7.1 留下旧 embedded Node | ❌ |

### 5.2 🐚 Platinum Hermit

| Issue | 描述 | Fix PR |
|---|---|---|
| [#91009](https://github.com/openclaw/openclaw/issues/91009) | Codex PreToolUse hook relay 拖垮 gateway | ❌ |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows 上 exec/read 静默返回空输出 | ❌ |
| [#48786](https://github.com/openclaw/openclaw/issues/48786) | Feishu 回复中 `@_user_N` 占位符未解析 | ❌ |
| [#45740](https://github.com/openclaw/openclaw/issues/45740) | gh-issues skill 未脱敏的 issue body 直接注入 sub-agent | ❌ |
| [#78301](https://github.com/openclaw/openclaw/issues/78301) | 插件加载器对旧/无效插件合约静默失败 | ❌ |
| [#116022](https://github.com/openclaw/openclaw/issues/116022) | beta.5 `/new` 复用稳定 session ID 无法恢复 Codex binding tombstone | ✅ Issue 已 CLOSED |

### 5.3 🦐 Gold Shrimp

- [#114211](https://github.com/openclaw/openclaw/issues/114211) — Matrix 房间 agent 可见 no-reply 循环 + 重启恢复陈旧会话
- [#94919](https://github.com/openclaw/openclaw/issues/94919) — Z.AI Coding-Plan ECONNRESET 触发 fallback 不可见（异步上下文）

### 5.4 关键回归

- **6.x → 7.x 升级矩阵**：[#107207](https://github.com/openclaw/openclaw/issues/107207)（旧 embedded Node）、[#94939](https://github.com/openclaw/openclaw/issues/94939)（SQLite 0 字节）、[#90378](https://github.com/openclaw/openclaw/issues/90378)（cron 静默迁 SQLite + 默认 announce 模式）、[#52130](https://github.com/openclaw/openclaw/issues/52130)（restart storm + 误导性 doctor 输出）— **强烈建议维护者在 release notes 中明确迁移步骤**。

---

## 6. 功能请求与路线图信号

将今日活跃的 feature request 按落地概率分组。

### 6.1 高概率进入下一版本（有对应 PR 或热度高）

| 需求 | 现状 |
|---|---|
| Slack Enterprise Grid 全套支持 | [#121311](https://github.com/openclaw/openclaw/pull/121311) + [#121014](https://github.com/openclaw/openclaw/pull/121014) + [#120864](https://github.com/openclaw/openclaw/pull/120864) + [#120942](https://github.com/openclaw/openclaw/pull/120942) 全部 OPEN，但都已 stacked |
| 多槽位 memory 架构 | [#60572](https://github.com/openclaw/openclaw/issues/60572) 有 PR 关联 |
| 分层 bootstrap 加载 | [#22438](https://github.com/openclaw/openclaw/issues/22438) 已被多次复审 |
| Webchat inline buttons | [#46656](https://github.com/openclaw/openclaw/issues/46656) 6 评论，需求清晰 |
| Telegram reaction 作为一等控制面 | [#47677](https://github.com/openclaw/openclaw/issues/47677) 6 评论 |
| Masked Secrets | [#10659](https://github.com/openclaw/openclaw/issues/10659) 4 👍，安全核心诉求 |
|

---

## 横向生态对比

# AI 智能体与个人 AI 助手开源生态横向对比分析报告

**报告日期**：2026-08-10
**覆盖项目**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、IronClaw、LobsterAI、Moltis、CoPaw/QwenPaw、ZeroClaw
**静默项目**：NullClaw、TinyClaw、ZeptoClaw（过去 24 小时无活动）

---

## 1. 生态全景

2026-08-10 当日的开源 AI 智能体生态呈现**"高活跃、强积压、零发版"的整体态势**：在统计的 10 个活跃项目中，**10 个均无新版本发布**，但合计产生超过 700 条 Issue 更新与 700 条 PR 更新。社区焦点已从"快速堆功能"转向**安全治理、可观测性、工具架构成熟度**三大主题；多个项目同日暴露 P0/Critical 级安全问题（如 Hermes Agent Windows 沙箱绕过、ZeroClaw 网关 webhook fail-open、NanoBot `exec.allowPatterns` 允许列表绕过），反映出**当智能体从玩具走向生产化部署，安全边界正成为最尖锐的工程瓶颈**。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | Issues 关闭 | PR 更新 | PR 关闭/合并 | 今日发版 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（428 活跃/72 关闭） | 72 | 500（324 待合并） | 176 | ❌ | 🟢 高吞吐 / 🟡 release 静默 |
| **ZeroClaw** | 50 | 12 | 50 | 1 | ❌ | 🟢 RFC 治理活跃 / 🟡 PR 积压 49 条 |
| **Hermes Agent** | 50 | 3 | 50 | 5 | ❌ | 🟢 P0 修复路径成形 / 🔴 Critical 未处理 |
| **CoPaw / QwenPaw** | 16（10 活跃） | 6 | 50 | 1 | ❌ | 🟢 社区参与强 / 🟡 49 条 PR 待合并 |
| **NanoClaw** | 1 | 0 | 16 | 0 | ❌ | 🟡 代码停滞，零互动 |
| **IronClaw** | 22（15 新开） | 7 | 27 | 8 | ❌ | 🟢 Bot + 双轨推进，v1.2.0 路线清晰 |
| **NanoBot** | 5 | — | 15 | 4 | ❌ | 🟢 质量打磨期 / 🔴 2 条安全漏洞未修 |
| **PicoClaw** | 3 | 1 | 6 | 1 | ❌ | 🟢 SSRF 同日响应急速 / 🟡 待发版 |
| **LobsterAI** | 3 | 0 | **0** | 0 | ❌ | 🔴 全面静默，2 条 stale Issue |
| **Moltis** | 2 | 0 | 1 | 0 | ❌ | 🟡 低活跃常规维护 |
| **NullClaw / TinyClaw / ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | ⚫ 完全静默 |

> **数据观察**：当日 PR 总关闭率约 **16.7%**（196/1140）；以 OpenClaw 35.2% 为基准，**多数项目低于均值**，反映出**全行业正在经历"review backlog"阶段**。

---

## 3. OpenClaw 在生态中的定位

### 规模优势（量级领先）
OpenClaw 单日 500 条 Issue + 500 条 PR 更新，是第二梯队（ZeroClaw/Hermes/CoPaw 各 50 条）的 **10 倍**体量，社区活跃度与吞吐能力远超同类。这种规模既是优势（生态吸引力强、贡献者众），也是负担（关闭率仅 14.4% / 35.2%）。

### 技术路线差异

| 维度 | OpenClaw | 主要对标项目 |
|---|---|---|
| **核心架构** | Gateway + ACP 多 harness 绑定 + 多通道适配器 | ZeroClaw（沙箱 + 通道）、IronClaw（Web-first） |
| **记忆/上下文** | Multi-Slot Memory + 6.x→7.x 状态迁移重构中 | ZeroClaw（Hindsight 7 层栈）、CoPaw（ReMe） |
| **工具调用** | 1000+ 内置 + plugin/mcp 双向 | IronClaw（tool disclosure Epic）、NanoClaw（skill-owned capabilities） |
| **通道覆盖** | Telegram/Matrix/Slack/MS Teams/Feishu 等 10+ | PicoClaw（8 通道 SSRF 同步加固） |
| **运维痛点** | silent reply 多通道一致性、6.x→7.x 升级矩阵 | Hermes（macOS 端内更新）、IronClaw（Slack 投递语义） |

### 社区成熟度
- **钻石级（diamond-lobster）Issue 21 条**，其中 19 条**无对应合入 PR**，反映**核心痛点尚未根治**（如 DeepSeek v4 Flash silent reply 衍生 issue [#121058](https://github.com/openclaw/openclaw/issues/121058) 在 [#116277](https://github.com/openclaw/openclaw/issues/116277) 关闭后仍复发）。
- 评论区互动密度高（Top 1 单 issue 评论 196 条），表明用户参与深度强。
- **品牌定位**：已成为事实上的"行业基线（baseline）"参照对象，被多个项目（Hermes、PicoClaw、CoPaw 等）在日报中作为体量参照系。

---

## 4. 共同关注的技术方向

跨项目复现率 ≥ 3 个项目的强信号：

### 4.1 安全边界与 SSRF/沙箱加固（涉及 7 个项目）
- **OpenClaw**：通道合规性 umbrella issue [#69208](https://github.com/openclaw/openclaw/issues/69208)、Masked Secrets [#10659](https://github.com/openclaw/openclaw/issues/10659)
- **PicoClaw**：同日提交 4 条 SSRF 修复 PR（#3322/3323/3324 + 基底），覆盖 8 个 IM 通道
- **NanoClaw**：tar critical CVE [#3207](https://github.com/nanocoai/nanoclaw/pull/3207)、Docker Hub CI 门禁 [#3208](https://github.com/nanocoai/nanoclaw/pull/3208)
- **NanoBot**：`exec.allowPatterns` 允许列表绕过 [#5305](https://github.com/HKUDS/nanobot/issues/5305) + [#5306](https://github.com/HKUDS/nanobot/issues/5306)（同一漏洞 CLI/API 两个暴露面）
- **Hermes Agent**：Critical 级 Windows `rd /s /q C:\` 命令执行 [#82842](https://github.com/NousResearch/hermes-agent/issues/82842)
- **ZeroClaw**：网关 webhook fail-open [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)、WhatsApp allowed_groups 默认安全反转 [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)
- **IronClaw**：Routine 自复制风险 [#6479](https://github.com/nearai/ironclaw/issues/6479)

### 4.2 可观测性 / Silent Failure（涉及 5 个项目）
- **OpenClaw**：[#52130](https://github.com/openclaw/openclaw/issues/52130)、[#114154](https://github.com/openclaw/openclaw/issues/114154)、[#105528](https://github.com/openclaw/openclaw/issues/105528)
- **NanoBot**：Token 消耗黑盒（2 小时空载百万 Token）[#5266](https://github.com/HKUDS/nanobot/issues/5266) → PR [#5299](https://github.com/HKUDS/nanobot/pull/5299)
- **ZeroClaw**：新增 Langfuse observer backend PR [#9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556)
- **IronClaw**：错误引导用户对凭证失效的认知 [#5878](https://github.com/nearai/ironclaw/issues/5878)
- **CoPaw**：耗时显示误导 [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)

### 4.3 工具/记忆架构演进（涉及 5 个项目）
- **OpenClaw**：Multi-Slot Memory [#60572](https://github.com/openclaw/openclaw/issues/60572)、子代理重组 [#121295](https://github.com/openclaw/openclaw/pull/121295)
- **IronClaw**：Progressive Tool Disclosure（Epic [#7166](https://github.com/nearai/ironclaw/issues/7166) + PR #7409/#7410）
- **NanoClaw**：Skill-owned capabilities host seam [#3186](https://github.com/nanocoai/nanoclaw/pull/3186)
- **ZeroClaw**：Hindsight 记忆栈 7 层（PR #9064/#9065/#9068/#9069）
- **CoPaw**：ReMe 记忆子系统深化（[#6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) 等）

### 4.4 多通道一致性 / "silent reply" 治理（涉及 5 个项目）
- **OpenClaw**：Telegram/Matrix/MS Teams/Slack 各通道独立 bug
- **PicoClaw**：Matrix sync loop 无重连 [#3203](https://github.com/sipeed/picoclaw/issues/3203)
- **Hermes Agent**：Windows 插件崩溃 [#80560](https://github.com/NousResearch/hermes-agent/issues/80560)、Wayland HUD 拖拽失效 [#82851](https://github.com/NousResearch/hermes-agent/issues/82851)
- **IronClaw**：Slack 反复重连后认证死锁 [#5882](https://github.com/nearai/ironclaw/issues/5882)、中间进度被当最终结果 [#5551](https://github.com/nearai/ironclaw/issues/5551)
- **ZeroClaw**：Telegram 输入指示器误显示 [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656)、Solana 钱包误脱敏 [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486)

### 4.5 长会话/历史性能与状态持久化（涉及 4 个项目）
- **OpenClaw**：6.x→7.x 状态迁移 [#94939](https://github.com/openclaw/openclaw/issues/94939)、sessions 子系统重构
- **Hermes Agent**：Desktop 静默删除 65 条消息（[#82756](https://github.com/NousResearch/hermes-agent/issues/82756)，P0，第 3 次复发）+ FTS corruption session 中断
- **IronClaw**：刷新页面后长任务历史消失 [#7349](https://github.com/nearai/ironclaw/issues/7349)、Chat 性能随历史线性劣化
- **CoPaw**：超长 prompt 折叠 [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750)

### 4.6 第三方 Provider 兼容性（涉及 4 个项目）
- **NanoBot**：Agnes AI 嵌套对象双重编码 [#5311](https://github.com/HKUDS/nanobot/issues/5311)
- **CoPaw**：DeepSeek V4 1M 上下文窗口校准 [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846)（已合并）、Gemini schema 拒绝 [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812)
- **LobsterAI**：自定义模型 provider 误判 [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
- **IronClaw**：OpenRouter router 模型被静默丢弃 [#46064](https://github.com/nearai/ironclaw/issues/46064)

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 多通道全能 AI 助手 + Agent 网关 | 跨平台 IM 重度用户、企业 | Gateway + ACP + 1000+ 工具 + 多通道适配器 |
| **ZeroClaw** | 安全优先的零信任智能体 | 运维/合规敏感场景、Solana/WhatsApp 群体 | 沙箱 + 多通道 + Hindsight 记忆 + RFC 治理驱动 |
| **IronClaw** | Web-first Agent + Progressive Tool Disclosure | Web 应用/通知场景 | Web Push/PWA + tool search 渐进披露 |
| **Hermes Agent** | 桌面端 AI 助手 | macOS/Windows 桌面用户 | Desktop + v0.20.x 系列 + 强 OAuth 集成 |
| **CoPaw / QwenPaw** | 中文生态 + 国产模型深度适配 | 阿里系/国产模型用户、移动场景 | DeepSeek/Qwen/昇腾生态 + 记忆子系统 ReMe |
| **NanoBot** | 轻量级 CLI + 技能市场 | 极客/CLI 偏好用户 | WebUI + Skill Marketplace + Responses API |
| **NanoClaw** | 容器化硬化镜像优先 | 企业/合规部署 | hardened image + Docker Hub + skill-owned capabilities |
| **PicoClaw** | 嵌入式/边缘场景 IM 助手 | IoT/边缘开发者 | 8 通道 SSRF 加固

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-10

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库
> 数据周期：2026-08-09 至 2026-08-10

---

## 1. 今日速览

NanoBot 项目今日活跃度处于**中等偏高**水平：24 小时内出现 5 条新 Issues、15 条 PR 更新，其中包含 2 条 **Security 级**漏洞披露（`exec.allowPatterns` 允许列表绕过）。社区讨论围绕 **Token 消耗异常**（13 条评论）形成最热话题。无新版本发布。本日 PR 关闭 4 条、新开/更新 11 条，开发节奏稳定但安全议题需重点关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 项目暂无 Release 节点变更。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的 PR（4 条）

| PR | 标题 | 价值 |
|---|---|---|
| [#5308](https://github.com/HKUDS/nanobot/pull/5308) | `test: strengthen user-path coverage and CI gates` | 引入 V8 覆盖率上报，删除 5 个冗余测试，并加固 WebUI 清理路径，**项目质量基线进一步收紧** |
| [#5304](https://github.com/HKUDS/nanobot/pull/5304) | `fix(webui): explain HTTPS requirement for voice input` | 修复 WebUI 在 HTTP 环境下无法录音的体验问题，区分"非安全源"与"浏览器不支持"，并补充 LAN HTTPS 文档 |
| [#5307](https://github.com/HKUDS/nanobot/pull/5307) | `Restore Star History chart` | 替换被 GitHub 弃用的 Star History 实现，**项目 README 可视化能力恢复** |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | `Add GitAgent Protocol support` | 较早的 PR，本次关闭（可能因方向调整或长期停滞） |

> 🔎 **分析**：本日合并以 **测试覆盖与用户体验** 类为主，未涉及大型功能合入；说明项目处于"质量打磨"阶段而非大规模功能扩张期。

---

## 4. 社区热点

### 🔥 最热门讨论

1. **[Issue #5266](https://github.com/HKUDS/nanobot/issues/5266) — Logs about token consumption**
   - 评论：**13 条**（今日新增最多）、点赞 0
   - 核心诉求：用户在 2 小时空闲期被消耗上百万 Token，**完全无可见活动痕迹**
   - 后续：相关 PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) 已提交（暴露结构化 token 使用记录），**诉求正在被工程响应**

2. **[Issue #5295](https://github.com/HKUDS/nanobot/issues/5295) — Docker Compose 部署失败**
   - 评论：5 条
   - 反映了官方 `deployment.md` 与镜像实际行为不一致，**降低新用户首次部署成功率**

### 🆕 今日新开 Issues（按时间倒序）

- [#5311](https://github.com/HKUDS/nanobot/issues/5311) — Agnes AI 嵌套对象参数被双重编码为 JSON 字符串
- [#5306](https://github.com/HKUDS/nanobot/issues/5306) — **【Security】** `exec.allowPatterns` shell-chain 绕过
- [#5305](https://github.com/HKUDS/nanobot/issues/5305) — **【Security】** `exec.allowPatterns` 通过 OpenAI-compatible API 实现链式命令执行绕过

---

## 5. Bug 与稳定性

### 🚨 安全级（建议立即修复）

| 严重度 | Issue | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **高危** | [#5305](https://github.com/HKUDS/nanobot/issues/5305) | `exec.allowPatterns` allowlist 可被通过 OpenAI 兼容 API 的链式 shell 段绕过 | ❌ 暂无 |
| 🔴 **高危** | [#5306](https://github.com/HKUDS/nanobot/issues/5306) | `exec.allowPatterns` shell-chain bypass，允许非预期命令执行 | ❌ 暂无 |

> ⚠️ **两条为同一漏洞的不同暴露面（CLI + API）**，建议合并修复并尽快发布安全补丁版本。

### 🟠 普通 Bug

| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#5311](https://github.com/HKUDS/nanobot/issues/5311) | Agnes AI 自定义 Provider 对嵌套对象 MCP 工具参数双重编码 | ❌ 暂无 |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker Compose 部署报 `entrypoint.sh: Permission denied` | ❌ 暂无 |
| [#5171 → PR #5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram 轮询在网络抖动后静默卡死 | ✅ 修复在途中（[#5156](https://github.com/HKUDS/nanobot/pull/5156) + [#5301](https://github.com/HKUDS/nanobot/pull/5301) 分两步落地） |

### 🟡 已修复并今日合入

- WebUI 在 HTTP 下无法使用语音输入 → [#5304](https://github.com/HKUDS/nanobot/pull/5304) ✅
- Skills 加载器在 Marketplace 中误将 bundled skill 标记为已安装 → [#5309](https://github.com/HKUDS/nanobot/pull/5309)（今日仍 OPEN，待合）
- 微信强制扫码登录失效 → [#5310](https://github.com/HKUDS/nanobot/pull/5310)（今日仍 OPEN，待合）

---

## 6. 功能请求与路线图信号

### 已具备明确 PR 实现的需求

| 需求 | 关联 PR | 优先级信号 |
|---|---|---|
| 暴露结构化 Token 使用记录 | [#5299](https://github.com/HKUDS/nanobot/pull/5299) | 直接呼应 [#5266](https://github.com/HKUDS/nanobot/issues/5266)，**大概率进入下一版本** |
| Responses API 能力声明化（重构） | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | **p1**，涉及 OpenAI / Copilot / DeepSeek 多 provider，战略级 |
| Agent Plugins v1 与 CLI Apps 整合 | [#5288](https://github.com/HKUDS/nanobot/pull/5288) | 推动"vendor-neutral 插件边界"，关系生态化战略 |
| Computer Use / Browser 工具 | [#4276](https://github.com/HKUDS/nanobot/pull/4276) | 模型无关的计算机使用工具，**已挂起近 2 个月（自 2026-06-10），需关注是否仍与主线兼容** |

### 仍处 Draft / Conflict 状态的较大 PR

- [#5255](https://github.com/HKUDS/nanobot/pull/5255) — API 服务状态对外诚实化（草稿）
- [#4276](https://github.com/HKUDS/nanobot/pull/4276) — computer_use + browser（存在冲突）

> 🔎 **路线图观察**：Token 可观测性 + Provider 能力声明化 是当前最清晰的演进方向；computer_use 长期挂起可能是阻塞点。

---

## 7. 用户反馈摘要

来自 Issues 评论区提炼的真实用户声音：

- **😟 痛点 1 — Token 消耗黑盒**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）
  > 用户反映"2 小时内被消耗上百万 Token"，但前端**没有任何可观察的活动**，完全无法定位具体调用方。反映出 **可观测性是当前最普遍的运营级诉求**。

- **😟 痛点 2 — 首次部署门槛**（[#5295](https://github.com/HKUDS/nanobot/issues/5295)）
  > 官方文档 `deployment.md` 给出的 docker compose 步骤**直接报错退出**，对新用户极其不友好。Dockerfile 的 entrypoint 权限问题需要修复并补充 CI 冒烟测试。

- **😟 痛点 3 — 第三方 Provider 兼容性**（[#5311](https://github.com/HKUDS/nanobot/issues/5311)）
  > Agnes AI 这类第三方 Provider 的 MCP 工具调用格式与官方预期不一致，**生态扩展时缺乏自动化的兼容性验证**。

- **😊 满意度信号**
  > 暂无显著的"满意"类评论；社区当前状态更接近"问题驱动型"。

---

## 8. 待处理积压（提醒维护者关注）

| 编号 | 类型 | 积压时间 | 风险 |
|---|---|---|---|
| [#4276](https://github.com/HKUDS/nanobot/pull/4276) | PR — Computer Use + Browser | **~60 天**（自 2026-06-10） | 高价值但持续 conflict，可能需要 main rebump 或重新拆分 |
| [#4019](https://github.com/HKUDS/nanobot/pull/4019) | PR — GitAgent Protocol | ~75 天 | 已关闭（无需关注），但反映"外部标准接入"曾长期被搁置 |
| [#5266](https://github.com/HKUDS/nanobot/issues/5266) | Issue — Token 日志 | 评论 13 条，**已有 13 条互动但仍 OPEN** | 高关注度，响应 PR [#5299](https://github.com/HKUDS/nanobot/pull/5299) 待合入 |
| [#5305](https://github.com/HKUDS/nanobot/issues/5305) + [#5306](https://github.com/HKUDS/nanobot/issues/5306) | Security | 新开 | 🔴 **应作为下一版本（若发布）的最高优先级** |

---

### 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | 🟢 良好 | Issues + PRs 合计 20 条更新 |
| 安全响应 | 🟡 待观察 | 已披露 2 条安全漏洞，暂无修复 PR |
| PR 通过率 | 🟢 4/15 ≈ 27% | 当日通过比例偏低，但多为草稿/重写类 |
| 社区响应 | 🟢 健康 | 高优 Issue 均有跟进 |
| 版本节奏 | 🟡 偏慢 | 今日无发布，与安全披露节奏不匹配 |

---

*本报告由 AI 智能体开源项目分析师基于 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-08-10**

---

## 1. 今日速览

Hermes Agent 今日社区活跃度处于高位：过去 24 小时共产生 50 条 Issues 和 50 条 PRs，但其中 5 条 PR 已合并/关闭、3 条 Issues 已关闭，整体处于「高吞吐 + 中等转化」的状态。**桌面端数据丢失（P0）**成为今日焦点，至少两个 PR（[#82766](https://github.com/NousResearch/hermes-agent/pull/82766)、[#82811](https://github.com/NousResearch/hermes-agent/pull/82811)）正合力解决同一根因。同时出现一条 Windows 平台 **agent 执行 `rd /s /q C:\` 导致近全盘数据丢失**的严重安全报告（[#82842](https://github.com/NousResearch/hermes-agent/issues/82842)），需维护者最高优先级评估。今日无新版本发布。

---

## 2. 版本发布

**无新版本发布。**

当前最新公开版本为 **v0.20.0 (2026.8.3)**，commit `3f83297`，被多条今日 issue 报告为 bug 源头（Windows 插件崩溃 [#80560](https://github.com/NousResearch/hermes-agent/issues/80560)、macOS HUD Wayland 拖拽失败 [#82851](https://github.com/NousResearch/hermes-agent/issues/82851)、SSH bootstrap 错路径 [#82442](https://github.com/NousResearch/hermes-agent/issues/82442) 已 close 等）。基于今日 PR 密度（特别是 P0/P1 修复），社区预期下一次 patch 发布（v0.20.1）在 1–3 天内。

---

## 3. 项目进展

### 已关闭 / 已关闭的 Issues（3 条）
| Issue | 标题 | 状态 |
|---|---|---|
| [#82616](https://github.com/NousResearch/hermes-agent/issues/82616) | gateway session continuity 在 FTS corruption 下中断 | CLOSED（追踪类，关联 [#82770](https://github.com/NousResearch/hermes-agent/issues/82770)） |
| [#82442](https://github.com/NousResearch/hermes-agent/issues/82442) | desktop SSH bootstrap 调用 `venv/bin/python` 而非 hermes 二进制 | CLOSED |
| [#74411](https://github.com/NousResearch/hermes-agent/issues/74411) | Desktop SSH 模式 `python --version <script>` 参数顺序错乱 | CLOSED |

### 已合并 / 关闭的 PR（5 条）
| PR | 标题 | 影响 |
|---|---|---|
| [#82539](https://github.com/NousResearch/hermes-agent/pull/82539) | `fix(cli)`：捕获 xAI OAuth 刷新中的 `httpx.ConnectError` | 关闭（duplicate of [#82204](https://github.com/NousResearch/hermes-agent/issues/82204)） |
| [#74991](https://github.com/NousResearch/hermes-agent/pull/74991) | `fix(memory)`：为 provider 恢复保留历史 | 关闭（duplicate，由 [#82844](https://github.com/NousResearch/hermes-agent/pull/82844) 继任） |
| 其余 3 条 PR 处于 closed 状态，需维护者说明（合入 / 弃用 / 重复） |

### 重要进展信号
- **会话状态 / 数据丢失**主题正在被系统性修复：除 [#82766](https://github.com/NousResearch/hermes-agent/pull/82766) 和 [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) 外，今日另有 [#82843](https://github.com/NousResearch/hermes-agent/pull/82843)（warm resume 不被空 REST 刷新抹掉）和 [#82840](https://github.com/NousResearch/hermes-agent/pull/82840)（timestamp 在 append 时落定）共同加固会话持久层。
- **cron & goals 的 `max_turns` 字符串归一化**：[#82845](https://github.com/NousResearch/hermes-agent/pull/82845) + [#82848](https://github.com/NousResearch/hermes-agent/pull/82848) 两条 PR 联合处理 `none` / `unlimited` / `0` / `-1` 等 YAML 字符串造成的 `TypeError`，闭环 [#66824](https://github.com/NousResearch/hermes-agent/issues/66824)、[#71987](https://github.com/NousResearch/hermes-agent/issues/71987) 等长期 P2 bug。
- **安全 / 凭据卫生**：[#78288](https://github.com/NousResearch/hermes-agent/pull/78288)（snapshot 强制 0600）、[#82615](https://github.com/NousResearch/hermes-agent/pull/82615)（doctor 校验 GitHub token）、[#82839](https://github.com/NousResearch/hermes-agent/pull/82839)（skills_guard 不再误判 `__PLACEHOLDER__`）三件套推进凭据与权限的边界硬化。

**项目整体向前推进**：中等到显著。数据丢失类 P0 的修复路径已成形；配置归一化、安全卫生、跨平台兼容三条线均在并行收口。

---

## 4. 社区热点

按评论数排序，今日讨论最热的议题：

1. **[#63047](https://github.com/NousResearch/hermes-agent/issues/63047)（19 评论）— Desktop 在约 5 条消息后整机卡死，Settings 也无法打开**
   macOS 27 beta + Desktop 客户端，UI 几乎完全冻结（与 #40692 的"卡顿打字"不同）。这是长期高优 issue，今日仍有新讨论，说明 Desktop 稳定性仍是社区首要痛点。

2. **[#26689](https://github.com/NousResearch/hermes-agent/issues/26689)（13 评论，👍 1）— VoiceOver 盲用户可访问性**
   视障用户呼吁 Hermes 在 CLI/Gateway/TUI/Dashboard 上提供对屏幕阅读器友好的 UX。这是一个**纯需求类**issue 但讨论密度高，反映了项目对边缘用户群体的关注度不足。

3. **[#82616](https://github.com/NousResearch/hermes-agent/issues/82616)（7 评论，已关闭）— Gateway session continuity 在 state.db FTS corruption 下中断**
   作者 teknium1（核心维护者）亲自提出，是今日被关闭但衍生出 [#82770](https://github.com/NousResearch/hermes-agent/issues/82770)（test session 泄漏到生产 state.db）的追踪入口。

4. **[#66824](https://github.com/NousResearch/hermes-agent/issues/66824) / [#71987](https://github.com/NousResearch/hermes-agent/issues/71987)（各 6 评论）— `cronjob create/update` 抛 TypeError**
   两条 duplicate 累积 12 评论，是 cron 模块的"老大难"，今日终于被 [#82845](https://github.com/NousResearch/hermes-agent/pull/82845) 提交修复。

**社区诉求背后**：稳定性（Desktop 卡死 / 数据丢失）> 可访问性 > 配置一致性（cron / OpenRouter 模型过滤）> 平台兼容（Windows / Wayland / macOS）。

---

## 5. Bug 与稳定性

按严重程度排序，今日新开/活跃且尚未关闭的 P0/P1 Bug：

| 严重度 | Issue | 摘要 | 已有 Fix PR? |
|---|---|---|---|
| 🔴 **Critical** | [#82842](https://github.com/NousResearch/hermes-agent/issues/82842) | Windows 上 agent 执行 `rd /s /q C:\`，仅因无管理员权限才避免全盘丢失 | ❌ |
| 🔴 **P0** | [#82756](https://github.com/NousResearch/hermes-agent/issues/82756) | Desktop plain-Enter 静默删除 ~65 条消息（第 3 次发生，前两次 #70516、#80763 未根治） | ✅ [#82766](https://github.com/NousResearch/hermes-agent/pull/82766), [#82811](https://github.com/NousResearch/hermes-agent/pull/82811) |
| 🔴 **P1** | [#63047](https://github.com/NousResearch/hermes-agent/issues/63047) | Desktop ~5 条消息后整机冻结，macOS 27 beta | ❌ |
| 🔴 **P1** | [#82770](https://github.com/NousResearch/hermes-agent/issues/82770) | 测试会话泄漏到生产 state.db（fixture-escape），700+ 垃圾行 | ❌ |
| 🟠 **P2** | [#66824](https://github.com/NousResearch/hermes-agent/issues/66824), [#71987](https://github.com/NousResearch/hermes-agent/issues/71987) | cronjob TypeError | ✅ [#82845](https://github.com/NousResearch/hermes-agent/pull/82845) |
| 🟠 **P2** | [#80125](https://github.com/NousResearch/hermes-agent/issues/80125) | weixin 适配器将 `ret=-2`（缺 context_token）误判为限流，掩盖 30s 熔断真实原因 | ❌ |
| 🟠 **P2** | [#77211](https://github.com/NousResearch/hermes-agent/issues/77211) | `hermes update` 跳过 npm 依赖刷新，遗留问题无法自愈 | ❌ |
| 🟠 **P2** | [#77753](https://github.com/NousResearch/hermes-agent/issues/77753) | macOS 端内更新死锁（staged `hermes-setup` 早于 `HERMES_UPDATE_HANDOFF_PID` 修复） | ❌ |
| 🟠 **P2** | [#80560](https://github.com/NousResearch/hermes-agent/issues/80560) | Windows v0.20.0 插件 SDK `React error #310`（hook 数量不匹配） | ❌ |
| 🟠 **P2** | [#80841](https://github.com/NousResearch/hermes-agent/issues/80841) | Fastmail `delete_event` 交互式确认无法在 CLI/TUI/Matrix 完成 | ❌ |
| 🟠 **P2** | [#78190](https://github.com/NousResearch/hermes-agent/issues/78190) | Gmail MCP HTTP OAuth 在 gateway 进程内失败（`/register` 404） | ❌ |
| 🟠 **P2** | [#75097](https://github.com/NousResearch/hermes-agent/issues/75097) | AIAgent 默认迭代预算 90 与 `execute_code` 仅退一种限流器不一致 | ❌ |
| 🟠 **P2** | [#82846](https://github.com/NousResearch/hermes-agent/issues/82846) | Smart-approval 辅助 LLM 无强制超时，整 session 死锁 | ❌ |
| 🟠 **P2** | [#82805](https://github.com/NousResearch/hermes-agent/issues/82805) | 本地 llama.cpp：连接池复用已被服务器关闭的 SSE 连接 → 空体 HTTP 400 | ❌ |
| 🟡 **P3** | [#46064](https://github.com/NousResearch/hermes-agent/issues/46064) | OpenRouter router 模型（pareto-code / fusion）被工具支持过滤器静默丢弃 | ❌ |
| 🟡 **P3** | [#79314](https://github.com/NousResearch/hermes-agent/issues/79314) | Desktop Edge TTS 静默退化为整段合成，违背文档承诺 | ❌ |
| 🟡 **P3** | [#81055](https://github.com/NousResearch/hermes-agent/issues/81055) | Desktop Markdown 预览的 TOC 锚点无响应 | ❌ |
| 🟡 **P3** | [#82851](https://github.com/NousResearch/hermes-agent/issues/82851) | Linux/KDE Wayland HUD 拖拽完全失效 | ❌ |
| 🟡 **P3** | [#82847](https://github.com/NousResearch/hermes-agent/issues/82847) | 无标题图片上传伪造 "What do you see in this image?" 用户指令 | ❌ |

**健康度评估**：P0/P1 数量与今日 PR 修复力度基本匹配，但 **Windows 危险命令缺少沙箱边界**（#82842）和 **macOS 端内更新自愈路径断裂**（#77753、#77211）两项需立即关注。

---

## 6. 功能请求与路线图信号

今日新开/活跃的功能请求 Issues：

- **[#26689](https://github.com/NousResearch/hermes-agent/issues/26689) — VoiceOver 盲

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-08-10**
**数据来源：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 一、今日速览

PicoClaw 今天整体保持中等强度的开发活跃度，过去 24 小时共 **3 条 Issue 更新 + 6 条 PR 更新**，无新版本发布。最显著的动向是社区与维护者围绕 **多通道 SSRF（服务端请求伪造）安全加固** 协同推进了一组 PR（#3322、#3323、#3324），覆盖 Weixin、WeCom、QQ、Telegram、Discord、LINE、Slack 等多个 IM 通道；与此同时，Telegram 表格富文本渲染从需求到实现已经形成完整闭环——同一作者 As-tsaqib 在一天内同时提交了 Issue #3325 与对应实现 PR #3327。整体看，项目处于"安全补丁集中落地 + 单点功能快速跟进"的健康节奏中。

---

## 二、版本发布

⚠️ **无新版本发布。** 仓库当前稳定版本仍为 Issue 中提及的 **v0.2.9**，建议关注合并的 SSRF 修复与 Telegram 表格 PR 是否将随下一个补丁版本释出。

---

## 三、项目进展

今日有 **1 条 PR 被关闭**（视作已合并/已处理），另有 **5 条待合并 PR** 处于活跃评审状态：

### ✅ 已合并/关闭
- **[PR #3326](https://github.com/sipeed/picoclaw/pull/3326)** — `fix(web): remove duplicate pnpm lock entries`
  作者：As-tsaqib。清理 `web/frontend/pnpm-lock.yaml` 中两处字节级重复的 `semver@7.8.5` 条目，修复了 `pnpm install --frozen-lockfile` 因 `ERR_PNPM_BROKEN_LOCKFILE: duplicated mapping key` 而失败的 CI 问题。属于纯维护性提交，零行为变更。

### 🟡 待合并（重点）
- **[PR #3327](https://github.com/sipeed/picoclaw/pull/3327)** — `feat(telegram): render tables with native rich messages`
  与 Issue #3325 一一对应的功能实现，将 GFM 表格与 `<table>` 块渲染为 Telegram 原生富文本消息，是首个落地的"端到端需求 → 实现"链路。
- **[PR #3322](https://github.com/sipeed/picoclaw/pull/3322)** — `fix(channels): block private targets on inbound media downloads`
  多个通道统一启用 `BlockPrivateTargets`，是本轮 SSRF 加固的"地基" PR。
- **[PR #3323](https://github.com/sipeed/picoclaw/pull/3323)** / **[PR #3324](https://github.com/sipeed/picoclaw/pull/3324)** — WeCom 与 Weixin 通道媒体下载的 SSRF 修复，承接 #3322 的统一方案。
- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — DeltaChat 实现清理与文档重构，精简约 200 行 LOC，已经躺了约一个月。

**进度评估**：今日提交高度聚焦在"安全"和"通道渲染体验"两条主线，项目整体向生产可用方向稳步推进，但缺少发版动作，建议维护者尽快为已合并的 #3326 与 SSRF 系列打 tag。

---

## 四、社区热点

按评论数与互动量排序：

1. **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** — *Matrix sync loop 无重连逻辑*（💬 8 评论｜👍 2）
   今日从 `[stale]` 状态被重新激活并 **CLOSED**，说明维护者已注意到问题或在其他分支合并了修复方案。8 条评论反映用户在 systemd 托管环境下遭遇的"静默死亡"问题具有较强代表性。
2. **[Issue #3287](https://github.com/sipeed/picoclaw/issues/3287)** — *IRC 长消息支持*（💬 4 评论）
   讨论 IRCv3 协议下超过 512 字节的消息应被识别为同一条消息而非多个分片，社区对协议的语义化诉求较强烈，但目前尚无对应 PR。

**背后诉求**：用户的关注点集中在"**协议语义正确性**"和"**长连接自愈能力**"——前者代表对协议合规性的追求，后者代表对无人值守部署可靠性的担忧，两者都是 PicoClaw 从玩具走向生产部署必须解决的痛点。

---

## 五、Bug 与稳定性

| 严重度 | Issue / PR | 描述 | 修复状态 |
|--------|-----------|------|---------|
| 🔴 高 | [#3203](https://github.com/sipeed/picoclaw/issues/3203) Matrix sync 静默死亡 | `/sync` 长轮询循环在网络/服务端中断后无重连，systemd `Restart=on-failure` 不触发 | 已 CLOSED（修复路径待确认，建议在 release notes 中查找对应 commit） |
| 🟠 中-高 | [#3324](https://github.com/sipeed/picoclaw/pull/3324) Weixin 媒体 SSRF | CDN 媒体下载未限制重定向目标，可访问 loopback/私网 | ✅ 已提交 #3324，待合并 |
| 🟠 中-高 | [#3323](https://github.com/sipeed/picoclaw/pull/3323) WeCom 媒体 SSRF | 入站/出站媒体 `http.Client` 未校验重定向目标 | ✅ 已提交 #3323，待合并 |
| 🟠 中-高 | [#3322](https://github.com/sipeed/picoclaw/pull/3322) 多通道入站媒体 SSRF | QQ / Telegram / Discord / LINE / Slack 入站附件下载未走 `BlockPrivateTargets` | ✅ 已提交 #3322，待合并 |
| 🟢 低 | [#3326](https://github.com/sipeed/picoclaw/pull/3326) pnpm 锁文件重复 | 阻塞 CI 不可变锁安装 | ✅ 已关闭/合并 |

**结论**：今日安全相关报告呈"集中爆发、已被响应"的良性态势，SSRF 系列 PR 看似来自同一位贡献者（SashaMIT）的协同提交，建议尽快合并进入下个补丁版本。

---

## 六、功能请求与路线图信号

| Issue | 提议功能 | 对应/可能 PR | 纳入下一版本概率 |
|-------|---------|-------------|----------------|
| [#3325](https://github.com/sipeed/picoclaw/issues/3325) Telegram 表格富文本渲染 | 利用 Bot API 10.1+ 原生 UI 渲染 GFM/HTML 表格 | [#3327](https://github.com/sipeed/picoclaw/pull/3327)（同作者）已就位 | **高**（PR 已提交） |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) IRC 长消息合并 | 将超长消息识别为单条而非多段 | 暂无 | 中（需新增协议层处理） |

**信号解读**：Telegram 端的功能迭代明显加速，且从"需求 → 实现"的链路在一日内打通，反映维护者对 Telegram 用户体验的优先级判断；IRC 协议层仍有结构性改进空间，建议在下次协议重构中统筹考虑。

---

## 七、用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- **#3203 Matrix 静默死亡**：用户在生产部署中遭遇最严重的事故不是崩溃，而是"看似正常却完全停摆"。评论中有人建议引入指数退避 + 看门狗上报，反映用户对**可观测性**与**自愈机制**的强烈需求。
- **#3287 IRC 长消息**：用户认为 PicoClaw 当前把单个长消息切成多段广播会"在频道里刷屏"，引发其他用户困扰。这反映出 **IM 礼仪（channel etiquette）** 已经被纳入用户体验评判维度。
- **#3325 Telegram 表格**：提交者明确指出当前 `sendMessage` 的 HTML/MarkdownV2 路径会让结构化表格退化为代码块，对数据汇报类用户（如客服、运维）造成阅读效率损失。

**满意度侧**：SSRF 修复 PR 在 24 小时内同时提交多个，体现维护者对 **CVE 类风险响应及时**，社区用户对项目的安全治理整体持正面预期。

---

## 八、待处理积压

提醒维护者关注的"静默资产"：

| 编号 | 类型 | 创建日期 | 当前状态 | 备注 |
|------|------|---------|---------|------|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR | 2026-07-03 | OPEN 待合并 | DeltaChat 重构 -200 LOC，已等待约 38 天，建议优先评审以避免合并冲突 |
| [#3287](https://github.com/sipeed/picoclaw/issues/3287) | Issue | 2026-07-22 | OPEN 无 PR | IRC 长消息，社区已有讨论但无实现端跟进 |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Issue | 2026-07-02 | CLOSED | 建议在 release notes 中关联具体修复 commit，便于溯源 |

**建议**：将 #3222 与 SSRF 系列 PR 一同合并进 v0.2.10 候选分支，并对外发布带安全公告的补丁版本。

---

> 📊 **项目健康度评分（基于今日数据）**：
> - 活跃度 ★★★★☆（多 PR 并行，Issue 闭环）
> - 安全性响应 ★★★★★（SSRF 系列同日提交）
> - 发版节奏 ★★☆☆☆（无新版本，待合并积压）
> - 社区互动 ★★★☆☆（评论总量中等，热点集中）
>
> **综合判断**：项目处于"高产出、低发版"的中间态，提交质量较高，但需要一个发版动作来释放积压价值。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-10

> 数据来源：GitHub（nanocoai/nanoclaw），统计窗口为过去 24 小时

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现出**典型的"集中提交、审阅堆积"状态**：新增 1 条 Issue、16 条 PR 处于待合并状态，**无任何 PR 被合并或关闭，也无新版本发布**。贡献者活动集中度较高——`zvi-fried` 一人提交了 7 条 PR（涵盖 CLI 输入、权限脱敏、模块生命周期、通道渲染、DB 迁移、技能文档），`gabi-simons` 提交了与 CVE 修复和 Docker Hub 发布流水线相关的 2 条核心 PR，`stumpjumper` 则就硬化镜像（hardened-image）方向同时提交了一条 Issue 与一条文档 PR。整体活跃度较高，但**审阅/合并节奏明显滞后**，社区参与度（评论、Reaction）几乎为零，存在一定的合并积压风险。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。所有改动均停留在 PR 阶段，尚未形成可发布的版本基线。

---

## 3. 项目进展

由于今日**无 PR 被合并**，无"实质性推进"事件，但有若干高价值 PR 进入待审阅池，重点方向如下：

| 方向 | PR | 说明 |
|------|-----|------|
| **CVE 修复 / 供应链安全** | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | 将 pnpm/npm 升级至修复 critical 级 tar CVE（GHSA-23hp-3jrh-7fpw）的版本；指出 `tar 7.5.11` 来自 node:22-slim 基础镜像，仅刷新基础镜像无法清除，需升级工具链 |
| **CI/CD 安全门禁** | [#3208](https://github.com/nanocoai/nanoclaw/pull/3208) | 新增 `publish-agent-image.yml`，将 agent 镜像发布至 Docker Hub，并在硬化镜像校验中加入 CVE 门禁（仅 main 分支、手动触发、覆盖 amd64/arm64） |
| **通道附件修复（Signal）** | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | 修复 Signal 适配器拼接不存在的 `/workspace/extra/signal-attachments/<id>` 路径导致 Read 工具无法打开附件的 bug；改为通过挂载 inbox 转发 |
| **附件路径文档化** | [#3210](https://github.com/nanocoai/nanoclaw/pull/3210) | 容器文档新增"附件接收位置"说明，与 #3142 形成闭环 |
| **Slack 表格渲染** | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | 修复 Slack 通道中粘贴的表格未传递给 agent 的问题 |
| **硬化镜像文档校正** | [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | 明确 `install_packages` 仅支持 apt/npm，呼应 Issue #3217 |
| **架构重构（host 层）** | [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | 为技能自有能力（skill-owned capabilities）增加 host 层接缝 |
| **CLI 输入扩展** | [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) | 新增 `--stdin-json` 模式，不改变现有请求帧/分发/鉴权/输出行为 |
| **权限日志脱敏** | [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | 对 DM 解析日志进行脱敏 |

**整体判断**：今日主线集中在"安全加固（CVE/CI 门禁）+ 通道附件 bug 修复 + 大规模架构重构"三方面，是一次**面向可发布质量的关键 PR 集合**，但合并阻塞意味着这些改进尚未落地到用户手中。

---

## 4. 社区热点

⚠️ **数据观察**：今日所有 Issue/PR 的评论数均为 0，Reaction 均为 0，**无法用互动指标识别"热点"**。基于主题重要性筛选，以下为今日最具影响力的话题：

1. 🔥 **[Issue #3217](https://github.com/nanocoai/nanoclaw/issues/3217)** — `install_packages` 缺少 pip 通道，阻断硬化镜像在 Python 依赖场景下的采用
   - 由 `stumpjumper` 提交，与 PR #3216 形成"问题—文档临时方案"组合
   - 潜在诉求：**补齐 Python 包通道是硬化镜像路线全面落地的必要条件**

2. 🔥 **[PR #3207](https://github.com/nanocoai/nanoclaw/pull/3207)** — 修复 critical 级 tar CVE
   - 由核心维护者 `gabi-simons` 提交，标记 `[core-team]`
   - 潜在诉求：**官方容器需要可证明的 CVE 清洁基线**，否则下游用户在合规审计中会遇到阻碍

3. 🔥 **[PR #3041](https://github.com/nanocoai/nanoclaw/pull/3041) / [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)** — 新增 Dial 通道（SMS + AI 语音）
   - 由 `OmriBenShoham` 提交，创建于 7 月 14 日，今日再次更新
   - 持续活跃接近 1 个月，**暗示社区对多通道（语音/SMS）的需求真实存在**

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

| 等级 | 描述 | PR | 状态 |
|------|------|-----|------|
| 🔴 **High（安全）** | 容器镜像携带 critical 级 tar CVE（GHSA-23hp-3jrh-7fpw），且单靠基础镜像升级无法清除 | [#3207](https://github.com/nanocoai/nanoclaw/pull/3207) | ✅ 已有 fix PR，待合并 |
| 🟠 **High（功能失效）** | Signal 适配器为非图像/非音频附件拼接了容器内未挂载的路径，导致 Read 工具**永远无法打开**这些附件 | [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | ✅ 已有 fix PR，待合并 |
| 🟠 **Medium（功能失效）** | Slack 通道中粘贴的表格未传递给 agent | [#3209](https://github.com/nanocoai/nanoclaw/pull/3209) | ✅ 已有 fix PR，待合并 |
| 🟡 **Medium（隐私）** | DM 解析日志未脱敏，可能泄露用户标识 | [#3215](https://github.com/nanocoai/nanoclaw/pull/3215) | ✅ 已有 fix PR，待合并 |
| 🟡 **Low（一致性）** | 硬化镜像文档未说明 `install_packages` 仅覆盖 apt/npm，导致用户产生"应支持 pip"的合理预期（结构性文档 bug） | [#3216](https://github.com/nanocoai/nanoclaw/pull/3216) | ✅ 已有 fix PR，待合并 |

**观察**：所有今日新增的 Bug 均有对应 fix PR 提交，**唯一的遗憾是这些 PR 都处于 OPEN 状态**，尚未合并。建议维护者优先审阅 #3207（CVE）和 #3142（Signal 附件），这两条直接影响用户的安全性与可用性。

---

## 6. 功能请求与路线图信号

- **🐍 Python 包安装通道（高确定性）**  
  Issue [#3217](https://github.com/nanocoai/nanoclaw/issues/3217) 明确指出 `install_packages` 当前只支持 `packages_apt` / `packages_npm`，缺失 `packages_pip`。考虑到硬化镜像（hardened-image）是官方主推路径，**几乎可以确定会在下一里程碑被纳入**。可能的设计形态：增加 `packages_pip` 字段，或在 `install_packages` 模型中抽象一个统一的 channel 列表。

- **📞 语音 / SMS 通道（中等确定性）**  
  PR [#3041](https://github.com/nanocoai/nanoclaw/pull/3041)（Dial 通道适配器）和 [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)（设置向导）持续活跃近一个月但仍未合并，**是路线图上明确的"语音/电话"方向信号**。

- **🛠️ 技能（Skill）架构全面重构（中等确定性）**  
  `#3186`、`#3213`、`#3214`、`#3212`、`#3211` 共同指向"技能拥有自有能力（skill-owned capabilities）"的架构演进，涉及 host 接缝、模块生命周期、通道渲染、DB 迁移、技能单职责。这是**较大的架构级变更**，可能对应下一季度的路线图主线。

- **📥 通用结构化输入（已实现）**  
  PR [#3218](https://github.com/nanocoai/nanoclaw/pull/3218) 新增 `--stdin-json`，对 CLI 的脚本化集成友好。

---

## 7. 用户反馈摘要

⚠️ **数据局限**：今日所有 Issue 与 PR 的评论数均为 0，**无法从用户回复中直接提炼痛点**。但可从 Issue/PR 内容反推用户的真实使用场景：

- **企业 / 合规场景用户**（[#3217](https://github.com/nanocoai/nanoclaw/issues/3217)、[#3207](https://github.com/nanocoai/nanoclaw/pull/3207)、[#3208](https://github.com/nanocoai/nanoclaw/pull/3208)）
  - 痛点：希望在受控的硬化镜像上安装 Python 包（如 numpy、pandas、scikit-learn 等 AI/数据科学依赖），但当前不可行
  - 痛点：容器 CVE 需要可证明的清洁基线，并需要 CI 门禁
  - 满意度：低（卡点明确）

- **多通道 / 客服场景用户**（[#3041](https://github.com/nanocoai/nanoclaw/pull/3041)、[#3050](https://github.com/nanocoai/nanoclaw/pull/3050)）
  - 场景：希望 NanoClaw 能接入 SMS 与 AI 语音客服（Dial 通道）

- **日常办公场景用户**（[#3209](https://github.com/nanocoai/nanoclaw/pull/3209)）
  - 痛点：从 Slack 粘贴的表格未被 agent 接收，工作流中断

- **Signal 重度用户**（[#3142](https://github.com/nanocoai/nanoclaw/pull/3142)、[#2529](https://github.com/nanocoai/nanoclaw/pull/2529)）
  - 痛点：Signal 上的图片/文件/PDF/文档等附件**完全无法被 agent 读取**，已存在数月（#2529 自 2026-05-18 起），属于长期未解决的功能缺陷

---

## 8. 待处理积压（提醒维护者关注）

按长期未响应/积压时长排列：

| 编号 | 类型 | 标题 | 创建日期 | 积压时长 | 优先级建议 |
|------|------|------|----------|----------|------------|
| [#2529](https://github.com/nanocoai/nanoclaw/pull/2529) | PR (Fix) | fix(signal): deliver inbound attachments to the agent instead of dropping them | 2026-05-18 | **~83 天** | 🔴 应优先审阅；同日 PR #3142 也在处理同类问题，存在合并冲突风险 |
| [#3041](https://github.com/nanocoai/nanoclaw/pull/3041) | PR (Feature) | feat(channels): add Dial channel adapter (SMS + AI voice calls) | 2026-07-14 | ~27 天 | 🟠 应给出明确决策（merge / close / 重做） |
| [#3050](https://github.com/nanocoai/nanoclaw/pull/3050) | PR (Feature) | feat(setup): add Dial to the channel picker | 2026-07-14 | ~27 天 | 🟠 与 #3041 联动审阅 |
| [#3142](https://github.com/nanocoai/nanoclaw/pull/3142) | PR (Fix) | fix(signal): forward image/file attachments through the mounted inbox | 2026-07-27 | ~14 天 | 🟠 与 #2529 解决同一类问题，需协调 |
| [#3186](https://github.com/nanocoai/nanoclaw/pull/3186) | PR (Refactor) | refactor: add host seams for skill

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-08-10** ｜ **仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 今日进入集中"修 Bug + 推 Epic"双线推进状态。过去 24 小时共产生 **22 条 Issue 更新** 与 **27 条 PR 更新**，社区活跃度处于高位。Issue 端有 **7 条 QA 老 Bug 被关闭**（多数集中在 Slack / Routines / Chat UI 领域），同时新开 15 条 Issue，其中 3 条属于 v1.2.0 路线图级 Epic。PR 端有 **8 条合并/关闭**（含 3 条 Dependabot 自动化依赖更新），并出现 **3 个 `ironloopai[bot]` 自动修复 PR** 与 2 条由核心维护者 serrrfirat 提交的"tool-search 渐进式披露"系列 PR，对应 Epic #7166。无新版本发布，整体仓库健康度良好，处于"先清积压、再发版本"的节奏。

---

## 2. 版本发布

⚠️ 过去 24 小时 **无新版本发布**。最近可参考的版本线索：社区 Issue #7400 明确指出 `ironclaw 1.1.0-rc.1` 与 `1.1.0 (stable)` 仍存在 Responses API 上的严重缺陷，说明 v1.1.x 尚未收尾，v1.2.0 的 Epic（#7166）正在并行展开。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 作者 | 说明 |
|---|---|---|
| [#7171](https://github.com/nearai/ironclaw/pull/7171) | @pranavraja99 | **已关闭/合并**：`fix(skills): one DB-backed tree for every skill mount`，关闭 #7168。修复"安装即消失"的 skill 持久化 Bug，作为 #6941 路线图第 4 项落地。后续 backlog 已拆为 #7203 与多租户沙盒子任务。 |
| [#7387](https://github.com/nearai/ironclaw/pull/7387) | @dependabot | 依赖组升级（12 项），含 `base64 0.22.1→0.23.0`、`toml 1.1.3→1.1.4` 等。 |
| [#7022](https://github.com/nearai/ironclaw/pull/7022) | @dependabot | CI Actions 依赖升级（含 `actions/setup-node 4.0.2→7.0.0` 大版本跳变）。 |
| 其余关闭 | — | 多为旧的 dependabot PR 落幕。 |

**整体评估**：今日合并贡献以"依赖/技能系统"为主，未出现大型新功能落地。但 PR 队列中已堆叠 4 条 Epic 级提交（#7398 Web Push、#7396 Slack/Telegram 渐进预览、#7410 tool-search 完整签名、#7131 run failure 投递），预计下一个工作日进入集中评审与合并窗口。

---

## 4. 社区热点

| 话题 | 链接 | 评论数 | 关注点 |
|---|---|---|---|
| **Tool Discovery 渐进披露（v1.2.0 旗舰 Epic）** | [Issue #7166](https://github.com/nearai/ironclaw/issues/7166) | 1 | 维护者 @serrrfirat 主导，配套 PR #7409 / #7410 形成"基线→签名"两阶段落地，目标是把 deferred tool retrieval 做成 Reborn 默认。 |
| **铁齿级 Bug：streaming + tools 留下不可清理"僵尸线程"** | [Issue #7400](https://github.com/nearai/ironclaw/issues/7400) | 2 | 由 @cuongdcdev 提交，影响 v1.1.0-rc.1 与 v1.1.0 stable，100% 复现，社区已要求立即修复（已对应 PR #7401）。 |
| **Routine 自复制风险** | [Issue #6479](https://github.com/nearai/ironclaw/issues/6479) | 1 | 模型在 routine 内部可创建新 routine，缺乏 guardrail。属于安全与稳定性双重隐患，是 Slack 自动化的潜在放大器。 |
| **Web Push + PWA 通道** | [PR #7398](https://github.com/nearai/ironclaw/pull/7398) | 0 | XL 规模，将 Web 应用拉齐为"第一类"通知通道（与 Slack/Telegram 同等地位），是 v1.2.0 的另一重大方向。 |
| **去第一方 coding 工具、改用 oh-my-pi 锁版 surface** | [Issue #7392](https://github.com/nearai/ironclaw/issues/7392) | 0 | Epic 级实验，可能带来模型侧工具契约的整体重塑。 |

**诉求分析**：社区当前最关心的两条线是"工具/能力的渐进式披露（让大工具集不再压垮上下文）"与"通知/投递链路的可靠性（避免 Slack 收到中间过程、避免僵尸线程）"，这两者也是 Epic #7166 和 #7131/#7401 各自回应的方向。

---

## 5. Bug 与稳定性

### 🔴 P0/高严重度
| Issue | 描述 | Fix PR |
|---|---|---|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | `stream: true` + 调用方 `tools[]` 在 `/api/v1/responses` 中途失败，并留下永久不可删除的"僵尸线程"。100% 复现，影响 v1.1.0-rc.1 与 1.1.0 stable。 | ✅ [#7401](https://github.com/nearai/ironclaw/pull/7401)（在途） |

### 🟠 P1
| Issue | 描述 | Fix PR |
|---|---|---|
| [#7292](https://github.com/nearai/ironclaw/issues/7292) | 安装 CoinGecko 工具后无法运行，runner heartbeat 错误。 | ❌ 今日关闭但未在数据中看到对应 PR |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routines 可在执行中创建其他 routines，存在自复制风险。 | ❌ 暂无 |

### 🟡 P2（已修复或在途）
| Issue | 描述 | Fix PR |
|---|---|---|
| [#7346](https://github.com/nearai/ironclaw/issues/7346) 助手消息中 emoji 短代码显示为纯文本。 | ✅ [#7404](https://github.com/nearai/ironclaw/pull/7404)（在途） |
| [#7348](https://github.com/nearai/ironclaw/issues/7348) Activity 块和进度消息时序错乱。 | ✅ [#7403](https://github.com/nearai/ironclaw/pull/7403)（在途） |
| [#7345](https://github.com/nearai/ironclaw/issues/7345) 仪表盘 50 条 vs Agent 声称 61 条，数据不一致。 | ✅ [#7402](https://github.com/nearai/ironclaw/pull/7402)（在途） |
| [#7349](https://github.com/nearai/ironclaw/issues/7349) 刷新页面后长任务的运行历史消失。 | ❌ 暂无 |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) 反复重连 Slack 后认证流程陷入 broken state。 | ❌ 暂无 |
| [#5552](https://github.com/nearai/ironclaw/issues/5552) 多工具失败后 run 报"invalid result"。 | ❌ 已关闭 |
| [#5509](https://github.com/nearai/ironclaw/issues/5509) 新建 chat 延迟随历史累积而放大。 | ❌ 已关闭 |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) Slack 自动化把中间进度消息当成最终结果。 | ❌ 暂无 |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) GitHub token 被撤销后报"模型不可用"误导性错误。 | ❌ 暂无 |

### ⚪ 已关闭的稳定性问题
- [#5522](https://github.com/nearai/ironclaw/issues/5522) Reborn routine 在缺少 Slack 读取能力时陷入 `capability_info` retry 循环 → 关闭
- [#5510](https://github.com/nearai/ironclaw/issues/5510) 无法删除旧 routine → 关闭
- [#4341](https://github.com/nearai/ironclaw/issues/4341) Qwen3.6-35B 思考链暴露给用户 → 关闭
- [#4344](https://github.com/nearai/ironclaw/issues/4344) Qwen3.6-35B 镜像用户消息作为回复 → 关闭

---

## 6. 功能请求与路线图信号

### 明确指向 v1.2.0 的方向
| 信号 | 链接 | 性质 |
|---|---|---|
| **渐进式 Tool Disclosure** | [Issue #7166](https://github.com/nearai/ironclaw/issues/7166) + PR [#7409](https://github.com/nearai/ironclaw/pull/7409) / [#7410](https://github.com/nearai/ironclaw/pull/7410) | Epic，已开始以 PR stack 形式落地 |
| **Tool Discovery 增强** | [Issue #7405](https://github.com/nearai/ironclaw/issues/7405) + [#7407](https://github.com/nearai/ironclaw/issues/7407) | enhancement，含并发执行 batch 与命名空间感知目录 |
| **Web Push + PWA 通道** | [PR #7398](https://github.com/nearai/ironclaw/pull/7398) | XL 规模，让 Web 应用获得与 Slack/Telegram 平级的通知能力 |
| **通用 progressive preview** | [PR #7396](https://github.com/nearai/ironclaw/pull/7396) | Slack/Telegram 通用契约 |
| **Triggered Run 失败投递** | [PR #7131](https://github.com/nearai/ironclaw/pull/7131) | 把 failed/recovery/cancelled run 投递给创建者 |
| **Web / Channel 并发批处理** | [Issue #7407](https://github.com/nearai/ironclaw/issues/7407) | `BatchPolicy::Parallel` 真正并行 |
| **压测覆盖扩展** | [Issue #7360](https://github.com/nearai/ironclaw/issues/7360) | nightly API 容量用例补充内置 capability 写入路径 |
| **替换 first-party coding 工具为 omp surface** | [Issue #7392](https://github.com/nearai/ironclaw/issues/7392) | Epic 实验 |

**判断**：v1.2.0 的主旋律是"**让工具集规模不再成为瓶颈**"（tool disclosure + batch 并行 + 完整签名）与"**让投递链路可靠**"（失败通知 + 拒绝非法 streaming 组合 + Web Push 多通道）。当前 PR 栈布局清晰，下一版本大概率包含 tool-search 系列与 progressive previews。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与描述：

- **Slack 自动化体验反复受挫**：多个用户报告"中间消息被当成最终结果"（#5551）、"反复重连后认证死锁"（#5882）、"收到 partial progress 而非摘要"——反映出 Slack 作为 routine 投递目标时缺乏终端语义保护，社区呼声强烈。
- **长任务可靠性焦虑**："刷新即丢失"（#7349）与"Activity 时序错乱"（#7348）让长任务调试体验糟糕，用户被迫保留窗口不敢刷新。
- **Chat 性能随历史线性劣化**（#5509）——关闭 Issue 中描述"删除历史后恢复正常"，是典型的前端索引/序列化瓶颈。
- **Token / 凭证回收体验差**：GitHub token 撤销后用户看到的是"模型不可用"（#5878），而不是引导重新认证，导致排查成本被转嫁到非技术用户。
- **Routine 失控担忧**：#6479 用户明确表达对"routine 自复制"的担忧，希望引入 guardrail，这是一条**安全类**反馈而非单纯的 UI/性能反馈，应被优先处理。
- **Email-to-sheet 简单任务被放大为 124 次工具调用**（#6046）——反馈体现"agent 缺少任务边界识别"的过度工程化倾向，与 tool disclosure 改进方向一致。

---

## 8. 待处理积压（提醒维护者关注）

| Issue / PR | 标题 | 创建时间 | 风险点 |
|---|---|---|---|
| [#7400](https://github.com/nearai/ironclaw/issues/7400) | streaming + tools 僵尸线程 | 2026-08-09 | 高严重度，影响 stable，需在 v1.1.x 补丁或 v1.2.0 优先修复 |
| [#6479](https://github.com/nearai/ironclaw/issues/6479) | Routine 自复制 | 2026-07-22 | 安全风险，长达 19 天未响应 |
| [#5882](https://github.com/nearai/ironclaw/issues/5882) | Slack 反复重连后认证死锁 | 2026-07-09 | 阻塞用户扩展安装/卸载流程 |
| [#5878](https://github.com/nearai/ironclaw/issues/5878) | 撤销 GitHub token 误导错误 | 2026-07-09 | 凭证生命周期 UX |
| [#5551](https://github.com/nearai/ironclaw/issues/5551) | Slack 收到中间进度 | 2026-07-02 | 投递语义问题 |
| [#6046](https://github.com/nearai/ironclaw/issues/6046) | Email-to-sheet 124 次工具调用 | 2026-07-13 | 与 v1.2.0 tool disclosure 直接相关 |
| [#7395](https://github.com/nearai/ironclaw/pull/7395) | 出站 send-claim TOCTOU 竞态修复 | 2026-08-08 | XL 规模，由新贡献者提交，建议核心维护者 review |
| [#7352](https://github.com/nearai/ironclaw/pull/7352) | 审批门投影 ID 绑定 | 2026-08-07 | 阻塞多门场景，新贡献者提交 |

---

### 健康度评分（5 分制）

| 维度 | 分数 | 备注 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 22 Issues + 27 PRs，bot + 社区双轨 |
| 稳定性 | ⭐⭐⭐ | 出现 stable 版本上的高严重度缺陷，但响应 PR 已在路上 |
| 路线图清晰度 | ⭐⭐⭐⭐⭐ | v1.2.0 Epic + 配套 PR stack 已成型 |
| 社区响应速度 | ⭐⭐⭐ | 7 条老 QA Bug 当日关闭，但仍有 7+ 条 P2 长期未结 |
| 文档 / 测试覆盖 | ⭐⭐⭐⭐ | dependabot、压测扩展、route-contract coverage 并行推进 |

**总体判断**：IronCl

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-08-10**
**数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 项目在过去 24 小时内整体活跃度处于**较低水平**。Issues 端有 3 条更新（新开/活跃 3 条，已关闭 0 条），但 PR 端**零活动**（无待合并、无合并、无关闭），且无新版本发布。值得关注的是，3 条活跃 Issues 中有 2 条被标记为 `[stale]`，反映出社区反馈响应链条存在明显的延迟。建议维护者关注积压 Issue，及时与贡献者互动，避免社区参与度进一步下滑。

---

## 2. 版本发布

无新版本发布。Release 通道在最近 24 小时无任何动作。

---

## 3. 项目进展

**今日无任何合并或关闭的 PR**，代码层面对项目的推进为 **0**。

- 待合并 PR：0 条
- 已合并/已关闭 PR：0 条

这意味着项目今日在功能开发、Bug 修复、代码重构等方面均无实质性进展。对于一个活跃的开源 AI Agent 项目来说，这是一个值得警惕的信号——可能表明维护团队当前的工作重点不在代码层（例如内部准备、文档整理或路线图规划），也可能是社区贡献入口存在摩擦。

---

## 4. 社区热点

今日最活跃的 Issues 集中在**模型配置与多模型协作**两大主题，详情如下：

| 排名 | Issue | 标题 | 评论数 | 👍 | 链接 |
|------|-------|------|--------|----|------|
| 🥇 | #1187 | 建议在设置模型 api 的选项中增加上下文窗口大小设置和输出 token 设置 | 2 | 1 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1187) |
| 🥈 | #2453 | 切换自定义模型，被系统定义为不许可？ | 1 | 0 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2453) |
| 🥉 | #2132 | 跨模型子任务调用的问题（主任务为 M3 + 子任务为 deepseek） | 1 | 0 | [链接](https://github.com/netease-youdao/LobsterAI/issues/2132) |

**热点诉求分析：**
- **模型上下文管理**（#1187）：用户期望在 API 配置中显式控制 context window 和 output token，避免 deepseek 等模型频繁出现 `Context overflow` 错误。
- **自定义模型路由解析**（#2453）：新 Issue，今日首次曝光，反映系统在解析 `custom_1/openai/gpt-oss-20b:free` 这类自定义模型名时存在 provider 误判的 Bug。
- **跨模型子任务协作**（#2132）：用户已经做了较为深入的根因定位（gateway function call vs sessions_spawn），并提出了具体优化方案，等待官方响应。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级
- **[#2453](https://github.com/netease-youdao/LobsterAI/issues/2453)** 自定义模型 Provider 误判 Bug
  - **现象**：当自定义模型名包含 `openai` 字段（如 `custom_1/openai/gpt-oss-20b:free`）时，系统将 Provider 误判为 OpenAI，导致切换失败。
  - **影响范围**：在同一线程内频繁切换模型时尤为干扰；OpenRouter 免费模型、NVIDIA 模型均受影响。
  - **Fix PR**：❌ 无
  - **评价**：这是新 Issue 但根因明确（命名解析逻辑缺陷），属于可快速修复的字符串解析问题，应优先处理。

### 🟡 中优先级
- **[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)** 上下文窗口不兼容导致运行中断
  - **现象**：使用 deepseek 模型时频繁触发 `Context overflow: prompt too large for the model` 错误。
  - **影响范围**：所有长会话场景，会直接中断用户任务。
  - **Fix PR**：❌ 无
  - **评价**：本质是产品功能缺失（无 UI 配置入口），而非纯 Bug。

### 🟡 中优先级
- **[#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)** 跨模型子任务协作链路断裂
  - **现象**：M3 主任务调度 deepseek 子任务时，存在通知机制失效，子任务状态无法回传主任务。
  - **影响范围**：所有使用「主模型规划 + 廉价模型执行」混合模式的用户。
  - **Fix PR**：❌ 无
  - **评价**：用户已自查根因（`call_function_gblu0nmqpcej_1` 是 gateway function call 而非 sessions_spawn 子任务），并提出具体修复建议。

**今日 Bug 修复率：0/3（0%）**，3 条 Issues 均无对应 Fix PR。

---

## 6. 功能请求与路线图信号

### 用户明确提出的功能需求

1. **API 配置面板增加上下文窗口与输出 Token 控制**
   - 来自 [Issue #1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
   - **可行性**：高。属于 UI 层配置项扩展，后端通常已具备对应 API 字段。
   - **路线图可能性**：⭐⭐⭐⭐ 较可能被纳入下一版本。

2. **自定义模型名解析的 Provider 推断逻辑**
   - 来自 [Issue #2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
   - **可行性**：高。属于字符串处理 Bug 修复 + 可能的产品语义调整。
   - **路线图可能性**：⭐⭐⭐⭐⭐ 几乎必然作为紧急修复进入下一版本。

3. **跨模型子任务通知与回传机制**
   - 来自 [Issue #2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
   - **可行性**：中。涉及 Agent 调度架构改造（gateway function call vs sessions_spawn 的统一）。
   - **路线图可能性**：⭐⭐⭐ 中等，需要架构层面讨论。

> 💡 **路线图信号**：以上三条需求指向同一个产品方向——**多模型异构协作（Multi-Model Heterogeneous Collaboration）**。这是当前 AI Agent 项目的核心竞争力方向之一，建议官方在路线图中明确表态。

---

## 7. 用户反馈摘要

从 3 条 Issues 的评论与描述中提炼的真实用户反馈：

- **痛点 1：长会话稳定性差**
  - 来源：[#1187](https://github.com/netease-youdao/LobsterAI/issues/1187)
  - 场景：用户使用 deepseek 模型进行多轮对话后被迫频繁 `/reset`，严重影响体验。
  - 用户原话倾向：需要的是"可配置"而非"更长模型"。

- **痛点 2：自定义模型接入体验差**
  - 来源：[#2453](https://github.com/netease-youdao/LobsterAI/issues/2453)
  - 场景：用户在 OpenRouter、NVIDIA 等平台使用免费/特殊模型时遭遇误判。
  - 关键细节：用户已经自行反编译/查看了代码逻辑，并指出 `provider/model` 的解析存在歧义。

- **痛点 3：复合任务工作流被打断**
  - 来源：[#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)
  - 场景：用户设计了「M3 规划 + deepseek 执行」的复合工作流，但子任务状态无法回流主任务，导致主任务无法验收。
  - 用户专业度：较高，已自行排查日志、根因分析到位，并提出「子任务完成/卡点时主动通知主任务」的方案。

**总体满意度评估**：😐 **中等偏下**。用户并非抱怨产品本身，而是抱怨「关键工程链路上的卡点未被及时修复」。高阶用户开始出现流失风险（#2132 已等 2 个月，#1187 已等 4 个月）。

---

## 8. 待处理积压 ⚠️

以下 Issues 长期未响应，建议维护者优先关注：

| Issue | 标题 | 创建日期 | 等待时长 | 标签 |
|-------|------|----------|----------|------|
| [#1187](https://github.com/netease-youdao/LobsterAI/issues/1187) | 增加上下文窗口大小设置和输出 token 设置 | 2026-04-01 | **131 天** | `[stale]` |
| [#2132](https://github.com/netease-youdao/LobsterAI/issues/2132) | 跨模型子任务调用的问题 | 2026-06-09 | **62 天** | `[stale]` |

**积压风险评估：**
- 2 条 Issues 已被系统打上 `[stale]` 标签，表明自动化的 stale-bot 已多次无果标记。
- 用户 #2132 已投入大量时间做根因分析（提供 call_function ID、检查手段、检查结果），但仍未得到任何官方回应，存在贡献者热情冷却的风险。
- 建议维护者在 24-48 小时内至少给出**初步回复**（确认/分流/排期），即便不立即修复也可显著提升社区信心。

**PR 端积压**：0 条（无待合并 PR），这反而是积极信号——说明代码贡献入口畅通，或近期无外部贡献涌入。

---

## 📊 项目健康度总览

| 指标 | 状态 | 评价 |
|------|------|------|
| 今日 PR 活跃度 | 🔴 0 条 | 代码推进停滞 |
| 今日 Issue 响应率 | 🔴 0% (0/3 已关闭) | 响应链条断裂 |
| Issue 积压情况 | 🟡 2 条 stale | 长期未关闭 |
| Release 频率 | ⚪ 无更新 | 今日无版本变动 |
| 用户参与深度 | 🟢 高 | 用户主动做根因分析 |
| 路线图清晰度 | ⚪ 未知 | 暂无公开路线图文档 |

**综合判断**：LobsterAI 今日处于**静默期**，社区活跃但维护端响应不足。建议项目维护者将 [#2453](https://github.com/netease-youdao/LobsterAI/issues/2453)（高确定性的 Bug 修复）作为突破口，配合对 #1187、#2132 的正式回应，可在短时间内显著改善项目健康度。

---

*报告生成时间：2026-08-10 | 数据周期：过去 24 小时*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-08-10
**项目主页**：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)
**报告范围**：2026-08-09 ~ 2026-08-10（过去 24 小时）

---

## 一、今日速览

过去 24 小时内，Moltis 仓库共产生 **2 条新 Issue** 与 **1 条待合并 PR**，**无新版本发布、无任何关闭/合并事件**，社区互动热度偏低（所有 Issue 与 PR 评论数均为 0，点赞数为 0）。从信号面看，项目处于**低活跃的常规维护状态**：一方面有真实用户继续上报 Bug（涉及 Heartbeat 设置 UI 与 Apple Container 沙箱兼容性），另一方面维护者侧推出一条针对 Vault 助记词哈希归一化的修复 PR，显示安全/数据完整性方向仍在持续打磨。整体活跃度评级：**中等偏低**，需关注新增 Issue 是否能在未来 24–48 小时内得到响应，以避免社区反馈链路停滞。

---

## 二、版本发布

🚫 **过去 24 小时无新版本发布。**

本周期内未观察到任何 GitHub Release 或 Tag 推送，无法据此判断版本节奏变化。建议关注仓库 `main` 分支与 Releases 页面以获取最新动态。

---

## 三、项目进展

### 待合并 PR（推进中）

- **#1186 [OPEN] fix(vault): normalize recovery phrase before hashing**
  - 作者：[pxmpsdev](https://github.com/moltis-org/moltis/pull/1186)
  - 链接：[PR #1186](https://github.com/moltis-org/moltis/pull/1186)
  - **核心变更**：在调用 `derive_recovery_kek` 派生 KEK 之前，对恢复短语（recovery phrase）进行归一化处理（去除短横线、转大写），使其与 `recovery_key_case_insensitive` 已覆盖的解密路径保持一致；当前存储的哈希是基于**原始短语**计算的，与 KEK 派生路径存在不一致，存在潜在的哈希校验错配风险。
  - **意义**：这是一项典型的**数据一致性/安全加固**改动，属于"修正确保语义统一"类型的补丁，不会引入破坏性 API 变更，但对 Vault 解锁体验和密钥完整性校验至关重要。
  - **状态**：待合并，无 Reviewer 反馈记录，建议维护者优先 Review。

### 合并/关闭 PR

- 🚫 过去 24 小时无任何 PR 被合并或关闭。

**小结**：项目推进节奏较为缓慢，仅有一条聚焦 Vault 一致性的 PR 在排队等待 Review，**未观察到功能性新功能落地**，项目整体向前推进的步幅较小。

---

## 四、社区热点

由于本周期所有 Issue 与 PR 的评论数（comments）均为 **0**，且点赞数（👍）均为 **0**，严格意义上**不存在"今日讨论最活跃"的话题**。但从话题热度潜力与相关性看，以下两条最值得关注：

1. **#1185 Apple Container 1.x 沙箱兼容性问题**
   - 链接：[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)
   - 创建时间：2026-08-08（昨日开立，今日仍处于活跃跟踪期）
   - **话题潜力**：Apple 生态沙箱是 Moltis 在 macOS 上的关键隔离机制，若该问题在 Apple Container 1.x 全版本扩散，将影响所有 macOS 用户的核心运行时能力，社区讨论热度预期将快速上升。

2. **#1187 Heartbeat 设置 UI 静默重置问题**
   - 链接：[Issue #1187](https://github.com/moltis-org/moltis/issues/1187)
   - 创建时间：2026-08-09
   - **话题潜力**：UI 表单字段与底层配置模型不同步是典型的"静默数据丢失"类 Bug，一旦用户在生产场景中发现自身配置被覆盖，可能演变为高严重度事件，预计将在用户实际复现后引发讨论。

**诉求分析**：两条 Bug 均反映**用户对系统可靠性与配置可控性**的期待——希望 Moltis 能诚实地展示并保存用户配置，而非静默覆盖；同时希望底层沙箱/容器抽象能紧跟上游生态版本演进。

---

## 五、Bug 与稳定性

按严重程度排列（综合用户影响面与潜在数据风险）：

| 优先级 | Issue 编号 | 标题 | 严重程度 | 已有 Fix PR | 链接 |
|--------|-----------|------|----------|-------------|------|
| 🔴 **高** | [#1185](https://github.com/moltis-org/moltis/issues/1185) | Apple Container 1.x sandbox starts but Moltis treats it as not running | **核心运行时失效** — 影响所有 macOS 用户启用 Apple Container 沙箱的能力 | ❌ 无 | [查看](https://github.com/moltis-org/moltis/issues/1185) |
| 🟠 **中高** | [#1187](https://github.com/moltis-org/moltis/issues/1187) | Heartbeat settings UI silently resets fields not represented by the form | **静默数据丢失** — 用户配置可能被覆盖而不知情 | ❌ 无 | [查看](https://github.com/moltis-org/moltis/issues/1187) |

**详情**：

- **#1185（Apple Container 1.x 沙箱）**：
  - 现象：沙箱实际已启动，但 Moltis 将其判定为"未运行"。
  - 影响：可能导致工具调用权限管理、Agent 隔离策略失效或出现误告警。
  - 风险：若 1.x 是 Apple Container 当前主流版本，问题覆盖面较大。
  - 跟进建议：维护者需确认 Moltis 对 Apple Container 运行状态的检测逻辑（端口、进程、API 心跳）是否随上游变化。

- **#1187（Heartbeat 设置 UI 静默重置）**：
  - 现象：UI 表单未呈现的字段在保存时被静默重置为默认值。
  - 影响：用户自定义的细粒度参数可能在不知情下丢失。
  - 风险：典型"数据丢失"型 UX Bug，需要立即修复或至少在 UI 层给出提示。
  - 跟进建议：建议增加"未展示字段保留原值"或"展示所有字段"两种修复路径。

---

## 六、功能请求与路线图信号

⚠️ 本周期内**未观察到明确的新功能请求（Feature Request）标签的 Issue**。所有新开 Issue 均为 Bug 报告。

**间接信号**（从现有 Bug 中提炼的产品方向信号）：

1. **Vault 一致性强化（来自 PR #1186）**
   - 链接：[PR #1186](https://github.com/moltis-org/moltis/pull/1186)
   - 信号：维护者正在收紧密钥恢复路径的语义一致性，未来版本中可能会进一步统一"输入归一化 → 派生 → 校验"全链路的处理逻辑。
   - 路线图概率：**高**，已被 PR 实质推进。

2. **macOS / Apple Container 生态适配**
   - 链接：[Issue #1185](https://github.com/moltis-org/moltis/issues/1185)
   - 信号：随着 Apple Container 1.x 普及，Moltis 必须保持对上游容器运行时的兼容性。
   - 路线图概率：**中**，取决于官方对该生态的优先级排序。

---

## 七、用户反馈摘要

由于本周期所有 Issue 评论数均为 **0**，**无法从交互文本中提炼用户原话反馈**。但从 Bug 报告本身可推断的真实用户痛点如下：

1. **配置可信度问题（来自 #1187）**
   - **痛点**：用户在 Heartbeat 设置中看到 UI 表单提交成功，但实际后端配置中部分字段被悄悄重置。
   - **使用场景**：可能是高级用户在调整心跳间隔、超时阈值等细粒度参数。
   - **满意度**：低 — 用户希望"所见即所得"的配置管理。

2. **macOS 沙箱体验问题（来自 #1185）**
   - **痛点**：用户期望使用 Apple Container 提供的隔离能力，但 Moltis 的状态检测逻辑与上游不兼容，导致功能不可用。
   - **使用场景**：macOS 平台用户启用沙箱模式运行 Agent。
   - **满意度**：低 — 关键功能无法使用且报错信息不明。

**总体满意度信号**：本周期无任何"满意"或"表扬"类反馈出现，社区反馈面整体偏负面（仅 Bug 报告），维护者侧需要主动跟进以防止负面情绪积累。

---

## 八、待处理积压

考虑到本周期产生的 2 条新 Issue 与 1 条新 PR **均处于 OPEN 状态且无任何评论/Review**，需提醒维护者关注：

| 编号 | 类型 | 创建时间 | 待响应时长 | 链接 |
|------|------|----------|------------|------|
| #1185 | Bug | 2026-08-08 | ~2 天 | [查看](https://github.com/moltis-org/moltis/issues/1185) |
| #1187 | Bug | 2026-08-09 | ~1 天 | [查看](https://github.com/moltis-org/moltis/issues/1187) |
| #1186 | PR | 2026-08-09 | ~1 天 | [查看](https://github.com/moltis-org/moltis/pull/1186) |

**维护者行动建议（按优先级）**：

1. **🔴 优先**：对 **#1185**（Apple Container 沙箱）进行确认与分诊，评估影响面；视情况打 `bug` / `platform/macOS` / `priority/high` 标签。
2. **🟠 优先**：对 **#1186**（Vault 修复 PR）进行 Code Review，若测试覆盖完整应尽快合并至安全补丁通道。
3. **🟡 关注**：对 **#1187**（Heartbeat UI）回复用户，确认复现路径，并排期修复窗口。

**风险提示**：若以上条目在 48–72 小时内仍无任何响应，可能影响新用户的 First Impression 与现有 macOS 用户的留存。

---

## 报告小结

| 维度 | 评估 |
|------|------|
| **版本节奏** | ⏸ 无发布 |
| **代码推进** | 🐢 缓慢（1 条待合并 PR，0 条合并） |
| **社区互动** | 😶 沉默（0 评论、0 点赞） |
| **Bug 风险** | ⚠️ 中等（2 条新 Bug，含 1 条核心运行时问题） |
| **安全/数据** | ✅ 积极信号（Vault 一致性修复在路上） |
| **整体健康度** | 🟡 **中等偏低** — 维护者侧需主动驱动 Issue 响应与 PR Review |

---

*报告生成时间：2026-08-10 | 数据来源：GitHub REST API*
*项目地址：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报

**日期：2026-08-10**
**数据范围：过去 24 小时**
**说明：** 本报告基于 `agentscope-ai/QwenPaw` 仓库数据生成（提交信息中包名包含 `qwenpaw` 与历史 `copaw` 标识）。

---

## 一、今日速览

QwenPaw 项目在 24 小时内呈现 **极高活跃度**：16 条 Issue 流转（10 新开/活跃、6 关闭）与 50 条 PR 流转（1 关闭、49 仍待合并），社区参与度显著。Bug 修复、功能增强与首次贡献者（first-time-contributor）PR 同步涌入，多个高频 Bug 已有针对性修复 PR 跟进，项目处于 **2.1.0b2 测试版密集收尾与下一版本（预计 2.1.0b3 或 2.1.0 正式版）筹备阶段**。无新版本发布。

**健康度评估：🟢 活跃（社区贡献强）/ 🟡 维护压力较大（PR 待合并积压高）**

---

## 二、版本发布

无新版本发布。当前最新可见版本为 **v2.1.0b2**（从 Bug 报告中确认），下一版本节奏可观察。

---

## 三、项目进展

### 今日合并 / 关闭

| 编号 | 类型 | 标题 | 价值 |
|---|---|---|---|
| [PR #6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) | feat | catalog DeepSeek V4 context windows (1M) | 修正 DeepSeek V4 Flash/Pro 模型上下文窗口从默认 131K → 1M，避免 Console 提前触发上下文压缩 |
| [Issue #6851](https://github.com/agentscope-ai/QwenPaw/issues/6851) / [#6850](https://github.com/agentscope-ai/QwenPaw/issues/6850) / [#6849](https://github.com/agentscope-ai/QwenPaw/issues/6849) / [#6848](https://github.com/agentscope-ai/QwenPaw/issues/6848) | bug | Front-end renderer collapses long multi-line tool output | 4 条重复 Issue 均已关闭（疑似合并处理） |
| [Issue #5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | question | 无法连接自定义 ascend-vllm 模型 | 已关闭 |
| [Issue #2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | help wanted | Open Tasks 招募贡献者 | 已关闭（任务清单滚动） |

### 整体推进判断

- **Provider 兼容性修复密集**：Google Gemini（schema `$schema` 元数据剥离）、StepFun 等严格 OpenAI 兼容服务、Chat Completions content sanitization 同步推进。
- **ReMe 记忆子系统深化**：reranker 后端支持、Auto-Dream 失败容错、prompts.py 与实际行为一致性议题陆续浮现。
- **Console / 前端体验**：会话分叉（fork）、主题皮肤模块、实时 SSE 流式渲染等长期需求进入 PR 阶段。
- **整体向前迈进程度：中等** —— 多个 PR 仍在审查中，无版本发布意味着用户尚需等待。

---

## 四、社区热点

| 排名 | 编号 | 标题 | 评论数 | 状态 |
|---|---|---|---|---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 🐾 Help Wanted: Open Tasks | 66 | CLOSED |
| 2 | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 希望 Web 控制台适配移动端 | 5 | OPEN |
| 3 | [#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) | 无法连接自定义的 ascend-vllm 模型 | 4 | CLOSED |
| 4 | [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 对话中助手消息结束时间显示异常 | 4 | OPEN |
| 5 | [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具调用字符串被当数字传参 | 3 | OPEN |
| 6 | [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google API Model 'unknown' 失败 | 3 | OPEN |

**诉求分析：**
- 用户对**移动端适配**（[#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281)）呼声强烈，反映 QwenPaw 正从桌面工具向随身助手演进。
- **MCP 生态**（[#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)）的实参类型推断问题成为新痛点，凸显工具调用鲁棒性短板。
- **国产模型兼容**（[#5584](https://github.com/agentscope-ai/QwenPaw/issues/5584) ascend-vllm）显示用户在昇腾生态下深度使用。
- **Issue #2291** 是项目任务看板的"门面"，66 条评论说明贡献者招募机制运转良好。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🔴 高严重度

| 编号 | 问题 | 影响 | 已有修复 PR |
|---|---|---|---|
| [#6812](https://github.com/agentscope-ai/QwenPaw/issues/6812) | Google Gemini API 因 `$schema` 字段拒绝工具请求，导致 Model 'unknown' 失败 | Gemini 用户完全不可用 | ✅ [PR #6844](https://github.com/agentscope-ai/QwenPaw/pull/6844) `fix(providers): strip unsupported Gemini schema metadata` |
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手实际思考耗时 2 分钟，页面仅显示数秒 | 用户感知严重偏差（耗时评估失真） | ✅ [PR #6845](https://github.com/agentscope-ai/QwenPaw/pull/6845) `fix(chats): preserve assistant completion time` |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具调用把数字字符串按数字传参导致失败 | MCP 生态数据可靠性受损 | ❌ 暂无 |
| [#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847) | QwenPaw 执行任务频繁被杀软拦截 / 进程被强杀 | Windows 桌面版用户核心场景阻断 | ❌ 暂无（需白名单/签名策略） |

### 🟡 中严重度

| 编号 | 问题 | 已有修复 PR |
|---|---|---|
| [#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852) | Front-end renderer collapses long multi-line tool output | ❌（[#6848–6851](https://github.com/agentscope-ai/QwenPaw/issues/6848) 重复 Issue 已关闭，但根 PR 未明确） |
| [#6818](https://github.com/agentscope-ai/QwenPaw/pull/6818) 修复目标 #6811 | OpenAI Responses 推理设置未遵守 `disable_thinking`，中断流标记丢失 | ✅ [PR #6818](https://github.com/agentscope-ai/QwenPaw/pull/6818) |
| [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) 修复目标 #6813 | `ChatResponse` 继承 `dict` 导致 `hasattr` 探测崩溃 | ✅ [PR #6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) |
| [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) | 会话身份死锁、过早保存、超长 prompt 折叠 | ✅ [PR #6750](https://github.com/agentscope-ai/QwenPaw/pull/6750) |
| [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) | SSE 缓冲导致流式输出非实时 | ✅ [PR #6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) |

**稳定性观察：** 多项关键 Bug 已在同一窗口内有 PR 跟进，社区修复响应速度良好；但杀软拦截（[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)）与 MCP 类型推断（[#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)）两个高影响 Bug 尚无 PR，存在升级前未修复风险。

---

## 六、功能请求与路线图信号

| 需求 | 来源 | 配套 PR / 可纳入信号 |
|---|---|---|
| 审批项目加用途描述 | [Issue #6832](https://github.com/agentscope-ai/QwenPaw/issues/6832) | ✅ 已有 [PR #6854](https://github.com/agentscope-ai/QwenPaw/pull/6854) `add localized approval purpose descriptions` |
| 移动端适配 | [Issue #6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | ⚠️ 无对应 PR，建议纳入下个版本规划 |
| 可配置主题/皮肤模块 | [Issue #2291 Task 1](https://github.com/agentscope-ai/QwenPaw/issues/2291) | ✅ [PR #6312](https://github.com/agentscope-ai/QwenPaw/pull/6312) 草案已提交 |
| Agent 选择器隐藏 flag（插件内部 Agent 不暴露 UI） | [Issue 隐含需求] | ✅ [PR #6842](https://github.com/agentscope-ai/QwenPaw/pull/6842) |
| 会话分叉（snapshot 对话上下文为新会话） | [Issue #6560](https://github.com/agentscope-ai/QwenPaw/issues/6560) | ✅ [PR #6704](https://github.com/agentscope-ai/QwenPaw/pull/6704) |
| 微信公众号接受中文审批（"允许"/"拒绝"） | [Issue #6728](https://github.com/agentscope-ai/QwenPaw/issues/6728) | ✅ [PR #6804](https://github.com/agentscope-ai/QwenPaw/pull/6804) |
| ReMe 记忆搜索 reranker 支持 | 内部特性 | ✅ [PR #6398](https://github.com/agentscope-ai/QwenPaw/pull/6398) |
| `security.allow_no_auth_hosts` 支持 CIDR | 安全增强 | ✅ [PR #6259](https://github.com/agentscope-ai/QwenPaw/pull/6259) |
| OneBot 远程语音/图片消息 | 渠道扩展 | ✅ [PR #6715](https://github.com/agentscope-ai/QwenPaw/pull/6715) |
| DeepSeek V4 1M 上下文窗口 | 模型目录 | ✅ [PR #6846](https://github.com/agentscope-ai/QwenPaw/pull/6846) 已合并 |

**路线图信号：** 用户对 **ReMe4 完整路线图**（Auto-Link、三模态检索、4 类 digest 权重）的发布时间表表达强烈兴趣（[#6840](https://github.com/agentscope-ai/QwenPaw/issues/6840)），建议维护者尽快给出官方答复。

---

## 七、用户反馈摘要

### 痛点
- **📱 移动场景缺口** ([#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281))：用户希望在手机上也能操作 Web 控制台。
- **🛡️ Windows 安全软件误杀** ([#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847))：同一任务下 WorkBuddy 不被杀，QwenPaw 被频繁拦截，怀疑与可执行签名或行为特征相关。
- **🧠 记忆系统承诺与实现不一致** ([#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853))：`prompts.py` 声称 "Dream 自动同步到 MEMORY.md"，实际从未实现，文档与代码存在虚假承诺。
- **🔁 MCP 工具参数类型自动转换** ([#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839))：数字字符串被强转为数字，导致外部 API 调用失败，损害 MCP 生态可靠性。
- **⏱️ 耗时显示误导** ([#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826))：用户实际等待 2 分钟，UI 仅显示几秒，影响信任感。
- **🔐 审批流程不直观** ([#6832](https://github.com/agentscope-ai/QwenPaw/issues/6832))：用户必须阅读 PowerShell 源码才能理解审批请求。

### 满意/正面信号
- **首次贡献者活跃**：今日 PR 中多篇标记 `[first-time-contributor]`（[#6854](https://github.com/agentscope-ai/QwenPaw/pull/6854), [#6842](https://github.com/agentscope-ai/QwenPaw/pull/6842), [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843), [#6704](https://github.com/agentscope-ai/QwenPaw/pull/6704), [#6725](https://github.com/agentscope-ai/QwenPaw/pull/6725), [#6750](https://github.com/agentscope-ai/QwenPaw/pull/6750), [#6804](https://github.com/agentscope-ai/QwenPaw/pull/6804), [#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846), [#6843](https://github.com/agentscope-ai/QwenPaw/pull/6843) 等），社区贡献门槛较低。
- **国产模型生态**：DeepSeek V4 1M 上下文（[#6846](https://github.com/agentscope-ai/QwenPaw/pull/6846)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-10

---

## 1. 今日速览

ZeroClaw 今日延续高强度开发节奏，**24 小时内更新 Issues 50 条（其中 12 条已关闭）、PR 50 条（仅 1 条关闭/合并，49 条仍待合并）**，仓库当前版本锚定在 **v0.8.3**，暂无新版本发布。今日工作重心呈三足鼎立态势：**安全治理 RFC 收敛**（Work Lanes、Security Posture、Per-Model Capability 等 RFC 进入评审深水区）、**运行时/通道 Bug 修复**（多个 P0/P1 缺陷已合入或进入 Review）以及 **Hindsight 记忆栈（第 2/3/6/7 层）持续推进**。整体活跃度处于高位，但 PR 积压（49 条 OPEN）已显现 review backlog 压力，建议维护者优先清理带 `needs-author-action` 标记的 XL 级 PR。

---

## 2. 版本发布

**今日无新版本发布。** 当前公开版本仍为 **v0.8.3**，下一次发布候选（如 v0.8.4）可能受阻于 [Issue #9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) 中报告的 `Containerfile StageX` 中 `rustc 1.95.0` 低于声明 MSRV 的构建失败问题——该问题已闭合但修复需要重新走容器镜像发布流程。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

- **[PR #9868](https://github.com/zeroclaw-labs/zeroclaw/pull/9868)** — `fix(channels): guard link-enricher redirects`（Audacity88）
  将 link-enricher 重定向校验统一到私有/本地地址分类器，关闭了一类潜在的 SSRF 重定向绕过风险通道。
- **[PR #9555](https://github.com/zeroclaw-labs/zeroclaw/pull/9555)** — `feat(channel): add ICT channel adapter`（jxxralf，已 CLOSED）
  企业级 ICT 通道适配器（含 HMAC-SHA256 鉴权 WebSocket、流式响应、自动重连、心跳）今日被关闭，需关注是否因与其他通道策略冲突或 RFC 评审未通过而被驳回，建议作者在 PR 中追加说明。

### 今日关闭的重要 Issue（追踪与治理类）

| Issue | 主题 | 意义 |
|---|---|---|
| [#8054](https://github.com/zeroclaw-labs/zeroclaw/issues/8054) | 系统提示工具可用性与实际工具不匹配（多入口） | 核心运行时 Bug 已闭环，是 #7756/PR #8053 的延伸修复 |
| [#8681](https://github.com/zeroclaw-labs/zeroclaw/issues/8681) | Goal mode 实现拆分栈追踪 | `feat/goal-mode` 分批迁移完成 |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | `browser_open` 子进程无限挂起 | 多个外部依赖（ffmpeg、TTS、机器人套件）受影响，已修复 |
| [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | `shared_budget` TOCTOU + SopEngine panic | 运行时稳健性两项缺陷 |
| [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | 容器镜像 MSRV 不达标 | all-features 镜像构建链路恢复 |
| [#9656](https://github.com/zeroclaw-labs/zeroclaw/issues/9656) | Telegram 长时间输入指示器误显示 | 与 #9198 区分开处理，已闭合 |
| [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) | Web UI 因 filesystem 通道冻结 | 重复 issue，处理路径并入主修复 |
| [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | Stdio MCP 服务器僵尸进程 | Daemon 进程清理稳健性 |
| [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) | zeroclaw-runtime 测试间歇失败 | 全局进程状态导致的 flakiness |

> **整体进度评估**：项目在 **通道安全、运行时稳定性、CI/CD 可发布性** 三个维度都迈出了实质性的一步；RFC 治理侧的 [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808)、[#7100](https://github.com/zeroclaw-labs/zeroclaw/issues/7100)、[#6971](https://github.com/zeroclaw-labs/zeroclaw/issues/6971) 已更新到第 24 修订及后续评审版本，预计在 v0.9.x 系列中落地。

---

## 4. 社区热点

按 24 小时评论数排序，今日讨论最活跃的话题集中在 **治理与安全方向**：

1. **[Issue #6808 — RFC: Work Lanes, Board Automation, and Label Cleanup（22 条评论）**
   作者 Audacity88，当前第 24 修订，是项目治理与工作流自动化的旗舰 RFC，定义了 RFC 路由、看板自动化和标签清理的统一规范——这是 **维护者成本与贡献者体验** 的核心议题。链接：https://github.com/zeroclaw-labs/zeroclaw/issues/6808

2. **[Issue #7100 — RFC: Per-model capability & context-window config（12 条评论）**
   围绕模型能力（vision）、上下文窗口、运行时预算、UI 显示四源不一致问题展开，直接影响 **多模型路由与计费透明度**，是 Operator 群体的强诉求。https://github.com/zeroclaw-labs/zeroclaw/issues/7100

3. **[Issue #9397 — RFC: Treat empty WhatsApp Web `allowed_groups` as permit-none（11 条评论）**
   当前空列表默认为"放行所有群组"的安全语义需要反转。这是 **默认安全策略（secure-by-default）** 的代表性诉求，由 belumume 起草并经 Claude 协作。https://github.com/zeroclaw-labs/zeroclaw/issues/9397

4. **[Issue #8692 — Maintainer decision queue for RFCs and design issues（11 条评论）**
   与 #6808 互补：是 RFC/设计 issue 的统一决策队列追踪器，目标是把治理瓶颈显性化。https://github.com/zeroclaw-labs/zeroclaw/issues/8692

5. **[Issue #6971 — RFC: Security posture, credential boundaries, and universal ingress policy（10 条评论）**
   凭据、运行时隔离、入口信任、工具审批、通道鉴权、网关配对、receipts、脱敏——试图把 ZeroClaw 散落在各处的安全控制统一可审计。https://github.com/zeroclaw-labs/zeroclaw/issues/6971

**底层诉求**：社区对项目治理成熟度（如何评审 RFC、如何路由 PR、如何清理标签）和 **默认安全策略** 的需求显著高于纯功能请求——这是一个从"快速演进"过渡到"长期可持续维护"的健康信号。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否已有 fix PR |
|---|---|---|---|
| **P0** | [#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565) | 网关 webhook 处理器未 fail-closed（WhatsApp Cloud / Linq / WATI），攻击者可控消息直达 agent | ❌ 尚无 PR（in-progress） |
| **P1** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/工具 schema 克隆导致 agent 循环 RSS 无界增长（从 #5542 拆分） | ❌ 尚无 PR |
| **P1** | [#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328) | `verifiable-intent` 在未验证凭据链的情况下评估约束 | ❌ 尚无 PR |
| **P1** | [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | 启用 pgvector 时 `try_enable_pgvector` 在 Tokio 运行时嵌套 panic | ❌ 尚无 PR |
| **P1** | [#9192](https://github.com/zeroclaw-labs/zeroclaw/issues/9192) | `shared_budget` TOCTOU + `SopEngine::finish_run` mutex unwrap panic | ✅ 已闭合（修复路径未公开 PR） |
| **P1** | [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | `RpcDispatcher::flush_config` 在并发写入时可覆盖丢失数据 | ❌ 尚无 PR |
| **P1** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | Telegram 通道高熵检测器错误脱敏 Solana 钱包地址 | ❌ 尚无 PR |
| **P1** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `sops_dir` 文档默认未被守护进程遵循，SOP 静默不加载 | ❌ 尚无 PR |
| **P1** | [#9690](https://github.com/zeroclaw-labs/zeroclaw/issues/9690) | `Containerfile StageX` 钉死 `rustc 1.95.0`，低于 MSRV | ✅ 已闭合 |
| **P1** | [#9834](https://github.com/zeroclaw-labs/zeroclaw/issues/9834) | zeroclaw-runtime 测试间歇性失败（共享进程全局状态） | ✅ 已闭合 |
| **P2** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | 仪表盘守护进程重载后 Discord 输入指示器卡死 | ❌ 尚无 PR |
| **P2** | [#9860](https://github.com/zeroclaw-labs/zeroclaw/issues/9860) | 触发 filesystem 通道 created 事件后 Web UI 冻结 | ✅ 已闭合（重复 issue） |
| **P2** | [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 同上 Solana 脱敏但与 #9825 RFC 协同 | ❌ RFC 在评审 |

**观察**：P0 安全问题（[#9565](https://github.com/zeroclaw-labs/zeroclaw/issues/9565)）未挂接任何 fix PR，**建议维护者优先处置**——这是数据丢失级风险，且影响三个通道。

---

## 6. 功能请求与路线图信号

- **[PR #9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)** — `feat(secrets): extract KeySource trait + FileKeySource backend`（XL，REL-mame）
  主密钥提供方抽象化，是零信任凭据链的关键拼图。**可能纳入 v0.9.x**。

- **[PR #8994](https://github.com/zeroclaw-labs/zeroclaw/pull/8994)** — `feat(tools): add native Home Assistant REST tool`（L，logical-and）
  原生 Home Assistant 集成工具（`list_entities`、`get_state`、`call_service`），由 Read/Act 安全策略门控。**面向智能家居场景**，与 MCP HA 服务器并存。

- **[PR #9556](https://github.com/zeroclaw-labs/zeroclaw/pull/9556)** — `feat(observability): add Langfuse observer backend`（L，jxxralf）
  新增 Langfuse 作为可观测性后端（OTel + HTTP Basic），填补 **LLM 可观测性生态接入** 的空白。

- **[PR #9557](https://github.com/zeroclaw-labs/zeroclaw/pull/9557)** — `feat(providers): add ProviderErrorKind classification`（M，jxxralf）
  区分 AuthFailed、RateLimited、QuotaExceeded、ModelNotFound、VisionNotSupported 等类别，**提升终端用户调试体验**。

- **[PR #9875](https://github.com/zeroclaw-labs/zeroclaw/pull/9875)** — `feat(agents): per-agent env vars and workspace-confined HOME for the shell tool`（Alanaktion）
  解决 shell 工具无法注入 KEY=VALUE 对的痛点，**面向多租户/多 agent 隔离** 的关键特性。

- **[PR #9607](https://github.com/zeroclaw-labs/zeroclaw/pull/9607)** — `fix(runtime): route coding CLI tools through configured runtime`（L，Audacity88）
  让 `codex_cli`、`claude_code`、`gemini_cli`、`opencode_cli` 走统一沙箱包装——**沙箱合规性的关键修复**。

- **[PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** — `feat(matrix): add single-message progress drafts`（XL，vrurg）
  Matrix 流式输出体验升级。

- **[PR #9064/#9065/#9068/#9069](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=is%3Apr+author%3Alogical-and)** — Hindsight 记忆栈第 2/3/6/7 层（logical-and）
  共享/系统记忆分层、recall/injection 调优、同步 retain 默认、仪表盘每 agent 后端。**最接近合并的 XL 级特性栈**，但因规模过大需要拆分评审。

- **[PR #9757](https://github.com/zeroclaw-labs/zeroclaw/pull/9757)** — `fix(providers/anthropic): deliver tool-result images as nested blocks`（XL，leomem）
  修复工具返回图像无法到达 Anthropic 模型的通道问题，是 **多模态工具调用** 的核心修复。

---

## 7. 用户反馈摘要

从评论与 issue 摘要中提炼的真实用户痛点：

- **Solana 用户（[#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) / [#9825](https://github.com/zeroclaw-labs/zeroclaw/issues/9825)）**：Telegram 通道的高熵检测器把所有 Solana 钱包地址替换为 `[REDACTED_HIGH_ENTROPY_TOKEN]`，导致"我的钱包是什么？"这类查询无法回复——**面向 Web3 用户群体的可用性塌陷**，社区强烈呼吁"publish-safe exceptions"。
- **WhatsApp 群体管理员（[#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397)）**：空 `allowed_groups` 默认放行所有群组，运维方不知情导致机器人加入陌生群——**默认安全 vs 部署摩擦** 的典型权衡。
- **MCP 重度用户

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*