# OpenClaw 生态日报 2026-09-07

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-07 02:20 UTC

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

# OpenClaw 项目日报 · 2026-09-07

> 数据范围：过去 24 小时（基于 GitHub 公开数据）  
> 仓库：`github.com/openclaw/openclaw`

---

## 1. 今日速览

OpenClaw 过去 24 小时进入**高频迭代日**：Issues 活跃 500 条（366 新开/活跃、134 关闭），PRs 活跃 500 条（302 待合并、198 合并/关闭），但**当日无新版本发布**。从信号结构看，PR 侧以"维护者驱动的重构与小型修复"为主，单 PR 体量多为 S/M，多个核心维护者（`steipete`、`vincentkoc`、`jalehman`）当日联袂提交；Issue 侧则集中暴露 **2026.8.x / 2026.9.x 的回归问题**，尤其是 Windows 网关启动、Norton 杀软兼容、Telegram 内部上下文泄露、Anthropic 缓存失效、心跳重试风暴等已升级为 P0/P1。整体处于"代码高吞吐 + 用户端持续踩坑"的状态，建议维护者把回归 PR 优先于新功能 PR 合入。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时仅有 0 个 Release Tag。当前社区正围绕 2026.9.1 / 2026.9.2 / 2026.9.1-beta.1 中的多个回归问题（[#137813](https://github.com/openclaw/openclaw/issues/137813)、[#140010](https://github.com/openclaw/openclaw/issues/140010)、[#140129](https://github.com/openclaw/openclaw/issues/140129)、[#140535](https://github.com/openclaw/openclaw/issues/140535)）展开修复讨论，预期下一次发版窗口将聚焦在 Windows 网关、Anthropic 缓存、心跳调度、Discord `/new` 行为上。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

虽然 24h 内有 198 条 PR 处于合并/关闭状态，但以下 PR 显著推进了**架构一致性与回归修复**，体现了维护者主动收敛技术债的意图：

| PR | 方向 | 价值 |
|---|---|---|
| [#140602](https://github.com/openclaw/openclaw/pull/140602) — `refactor(telegram)` | Telegram 投递路径统一 | 移除 polling/accepted-message/send-client 的重复 owner，清除废弃前缀（XL，关闭 [#140601](https://github.com/openclaw/openclaw/issues/140601)） |
| [#140600](https://github.com/openclaw/openclaw/pull/140600) — `refactor(plugins)` | 插件安装索引复用不可变 generation | 避免每次启动重建 ownership map 与 model 匹配 |
| [#140636](https://github.com/openclaw/openclaw/openclaw/pull/140636) — `refactor(codex)` | Codex exec-policy 复用 core algebra | 防止未来 core 策略变更导致 Codex 会话策略漂移 |
| [#140633](https://github.com/openclaw/openclaw/pull/140633) — `refactor(ui)` | 共享 Composer 建议菜单行为 | Chat / New Session / 三处 listbox 合并为统一表现层 |
| [#140629](https://github.com/openclaw/openclaw/pull/140629) — `refactor(copilot)` | 共享 Copilot 发起方与视觉请求事实 | 统一 direct provider / agent host / Copilot plugin 的事实计算 |
| [#140639](https://github.com/openclaw/openclaw/pull/140639) — `refactor(diagnostics)` | 共享启动时序记录 | embedded startup / Codex / reply diagnostics 统一时间度量 |
| [#136255](https://github.com/openclaw/openclaw/pull/136255) — `fix(feishu)` | 合并转发消息展开子消息 | 关闭 [#136200](https://github.com/openclaw/openclaw/issues/136200)，Feishu 引用上下文从此能看到真实子消息（**已被 close**） |
| [#140505](https://github.com/openclaw/openclaw/pull/140505) — `fix(doctor)` | 清理验证器排除 sidecar ctime/mtime | 修复 `openclaw update cleanup` 在只读进程触碰目标库后误判 |
| [#140608](https://github.com/openclaw/openclaw/pull/140608) — `fix(ports)` | 端口诊断去重 | 关闭 [#140606](https://github.com/openclaw/openclaw/issues/140606)（**已被 close**） |

**整体评估**：今日合入以"重构 / 收敛重复实现"为主，未见大型新功能合入。健康度良好——说明维护者意识到 9.x 系列在多 channel、多 provider 之间的代码漂移风险。

---

## 4. 社区热点（评论 / 反应最集中）

**讨论最热的 Issue Top 5**（按评论数）：

1. [#97616](https://github.com/openclaw/openclaw/issues/97616) — **僵尸进程泄漏**（14 评论，🦐）  
   *hook/tool 子进程未被收割，累积为 zombie，长期运行 runtime 退化。开放 2 个月仍缺修复 PR。*

2. [#135111](https://github.com/openclaw/openclaw/issues/135111) — **v2026.8.1 工具调用 JSON 畸形**（14 评论，🐚）  
   `Provider completed tool call with malformed JSON arguments` 在 `claude-sonnet-5` 上间歇性出现，与具体文件/工具无关，亟需 live repro。

3. [#119720](https://github.com/openclaw/openclaw/issues/119720) — **Gateway 事件循环被同步持久化阻塞**（12 评论，🦞）  
   planner-statistics 部分已由 [#133925](https://github.com/openclaw/openclaw/pull/133925) / [#134062](https://github.com/openclaw/openclaw/pull/134062) 修复，但 Gateway 线程上的 transcript 维护路径仍是开放问题。

4. [#96975](https://github.com/openclaw/openclaw/issues/96975) — **Subagent 完成内容回灌到父会话**（12 评论）  
   多 Subagent 工作流下父上下文被污染，社区呼吁"仅回传状态 + 子会话链接"。

5. [#41201](https://github.com/openclaw/openclaw/issues/41201) — **Control UI Avatar 显示破碎**（11 评论，🦞，已开放 ~6 个月）  
   `agents set-identity --avatar` 在 Control UI 不渲染；本地与外链 URL 均失败。

**反应（👍）最多**：[#48920](https://github.com/openclaw/openclaw/issues/48920) Live Docs 领先于发版（4 👍）——社区对文档与版本同步问题关注度最高。

**诉求归纳**：核心矛盾集中在三件事——**进程生命周期治理（zombie / session lane）**、**回归治理（升级 2026.8/9.x 后挂掉）**、**上下文完整性（transcript / 内部块泄露）**。

---

## 5. Bug 与稳定性（按严重度）

### 🔴 P0 — 阻塞升级 / 体验阻断
| Issue | 标题 | 是否有 fix PR | 备注 |
|---|---|---|---|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows 2026.9.1 后 Gateway 不启动：`--task-supervisor` 静默退出 | ❌ 无 | 新增 flag 设计缺陷 |
| [#48920](https://github.com/openclaw/openclaw/issues/48920) | Live Docs 领先于发布版本（IsolatedSessions 文档先行） | ❌ 无 | 6 个月未解 |
| [#114967](https://github.com/openclaw/openclaw/issues/114967) | launchctl keepalive 强制每 2 分钟重启 gateway | ❌ 无 | agent-driven live update 残留 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | Windows 2026.8.2 升级后 Doctor 维护阻塞 | ❌ 无 | 多 agent 升级路径 |
| [#137492](https://github.com/openclaw/openclaw/issues/137492) | 空 system-owned heartbeat 在忙队列后超时并重试风暴 | ✅ [#137936](https://github.com/openclaw/openclaw/pull/137936) | 状态 `📣 needs proof` |

### 🟠 P1 — 关键功能 / 数据风险
| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠/唤醒后 WebSocket 重连失败 30-60s+ | ❌ |
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | v2026.8.1 工具调用 JSON 畸形 | ❌ |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站消息被静默丢弃（零载荷分派） | ❌ |
| [#99910](https://github.com/openclaw/openclaw/issues/99910) | Memory dreaming 锁死 event loop ~10 min | ❌ |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 2026.9.2 回归：回复进行中收到新消息被丢 | ❌ |
| [#134579](https://github.com/openclaw/openclaw/issues/134579) | Active Memory `before_prompt_build` 自 2026.8.1-beta.3 起不再 dispatch | ❌ |
| [#132720](https://github.com/openclaw/openclaw/issues/132720) | claude-cli 410 session_expired，doctor 自动迁移主路径 | ❌ |
| [#140535](https://github.com/openclaw/openclaw/issues/140535) | Discord `/new` 失败不重置会话 | ✅ [#140637](https://github.com/openclaw/openclaw/pull/140637) |
| [#134896](https://github.com/openclaw/openclaw/issues/134896) | 2026.8.1 升级：5 阻塞 cascade + doctor 自指失败 | ❌ |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | 大工具输出超上下文窗口，压缩失败循环 | ❌ |
| [#139578](https://github.com/openclaw/openclaw/issues/139578) | llama.cpp EmbeddingGemma ubatch 512 回归 | ❌ |
| [#92241](https://github.com/openclaw/openclaw/issues/92241) | Gateway 回滚后保留陈旧 module 路径，ERR_MODULE_NOT_FOUND | ❌ |
| [#102534](https://github.com/openclaw/openclaw/issues/102534) | Cron 定时器在重超时后永久停火 | ❌ |
| [#128637](https://github.com/openclaw/openclaw/issues/128637) | 多 agent `AgentSelectionRequiredError` | ❌ |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex `sessions.compact` 抢占第二个 app-server | ❌ |
| [#119454](https://github.com/openclaw/openclaw/issues/119454) | 卡顿会话自恢复被 leaked embedded run 抑制 | ❌ |
| [#101929](https://github.com/openclaw/openclaw/issues/101929) | 上下文溢出预检过估 2.3-2.6x | ❌ |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | `memory-lancedb` 注册但未暴露为 agent tool | ❌ |

### 🟠 P1 安全/数据泄露
- [#137927](https://github.com/openclaw/openclaw/issues/137927) — **Telegram 消息中泄露 `<<<BEGIN_OPENCLAW_INTERNAL_CONTEXT>>>` 内部块**（安全 + UX P1，5 评论）  
  内部构造块直接渲染给用户，且内容字面上会指导模型行为，性质敏感，建议**优先合入**。

### 🟡 P2（已合入或有关闭候选）
- [#124991](https://github.com/openclaw/openclaw/issues/124991) CLI session reseed 在 SQLite 下失活 — 今日已 CLOSED
- [#137056](https://github.com/openclaw/openclaw/issues/137056) memory-core 维护移出搜索热路径 — 今日已 CLOSED
- [#136200](https://github.com/openclaw/openclaw/issues/136200) Feishu 合并转发 — 今日已 CLOSED（[#136255](https://github.com/openclaw/openclaw/pull/136255)）

---

## 6. 功能请求与路线图信号

| 提案 | Issue | 信号 |
|---|---|---|
| Subagent 完成仅回传状态 + 子会话链接 | [#96975](https://github.com/openclaw/openclaw/issues/96975) | 评论 12、👍 1，已进入产品决策阶段 |
| Session 自动标题（懒生成 + 廉价模型 + 主题感知） | [#99583](https://github.com/openclaw/openclaw/issues/99583) | 👍 2，代码内已有 `llm-slug-generator`，落地阻力低 |
| Cron 维护窗口 + 角色隔离 | [#120244](https://github.com/openclaw/openclaw/issues/120244) | 6 评论，跟进 #79192 / #119575 |
| 多次 Azure/Teams bot 复用单 Gateway | [#71058](https://github.com/openclaw/openclaw/issues/71058) | 企业场景，4.5 月未推进 |
| Cron 按失败原因差异化退避（quota / 401 / 429） | [#14376](https://github.com/openclaw/openclaw/issues/14376) | 7 个月未推进，点赞潜力大 |
| `session-memory` hook 在 reset/prune 时也触发 | [#51572](https://github.com/openclaw/openclaw/issues/51572) | 6 个月未推进 |
| 插件生成视频 URL 物化安全约束文档化 | [#132601](https://github.com/openclaw/openclaw/issues/132601) | 安全审查相关 |

**最有可能在下一版本纳入**的：Subagent 隔离（[#96975](https://github.com/openclaw/openclaw/issues/96975)）——已挂"需要产品决策"标签且与 [#119720](https://github.com/openclaw/openclaw/issues/119720) Gateway 线程问题同源；Session 自动标题（[#99583](https://github.com/openclaw/openclaw/issues/99583)）实现成本最低。多次 Teams bot 与 cron 维护窗口是 **B 端/运维** 长期呼声，建议维护者在路线图文档中给予正式答复，避免被反复提起。

---

## 7. 用户反馈摘要

从活跃 Issue 评论中提炼的真实痛点（按主题）：

- **🔧 Windows

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**报告日期**：2026-09-07
**覆盖项目**：OpenClaw（参照）、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、CoPaw、ZeptoClaw、ZeroClaw（共 13 个）

---

## 1. 生态全景

个人 AI 助手/自主智能体开源生态当前呈现**"头部高密度迭代、中部架构重构、长尾静默收敛"**的三层结构。OpenClaw（500/500）、ZeroClaw（33/50）、Hermes Agent（50/50）、CoPaw（25/12）四家头部项目在 24h 内累计吞吐 1300+ 条 Issue/PR，进入"代码高吞吐 + 用户端持续踩坑"的高强度迭代期；NanoClaw 处于架构契约重构深水区，单日 8 个 PR 集中落地 provider 抽象层；ZeptoClaw、NullClaw、Moltis 则进入"安全/稳定性硬化"专项阶段，**所有动作均指向 P0/P1 修复**。值得注意的是，**所有 13 个项目今日均无新版本发布**，说明工程变更正在 PR 队列中累积但发布节奏普遍迟滞。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues（活跃/关闭） | 24h PRs（待合并/合并） | Release | 最新版本 | 健康度评级 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（366/134） | 500（302/198） |  无 | 2026.9.x 系列 |  高活跃 / 回归积压 |
| **ZeroClaw** | 33（30/3） | 50（44/6） | ❌ 无 | v0.8.5 候选 | 🟡 高活跃 / RFC 拥塞 |
| **Hermes Agent** | 50（活跃为主） | 50（**50/0**） |  无 | v0.21.0 | 🟡 **亚健康** / 合并率为 0% |
| **CoPaw** | 25（18/7） | 12（10/2） | ❌ 无 | v2.2.0-beta.7 | 🟢 高活跃 / 上下文丢失 P0 |
| **NanoClaw** | 2（2/0） | 16（8/8） | ❌ 无 | v2.3.0（落后 119 commit） | 🟢 重构密集 / v2.4 候选 |
| **ZeptoClaw** | 4（0/4） | 8（0/3 实质） | ❌ 无 | 未注明 | 🟢 安全专项期 |
| **NanoBot** | 0 | 14（11/3） | ❌ 无 | 未注明 | 🟡 中等 / bus factor 风险 |
| **IronClaw** | 0 | 9（7 dependabot / 2 实质） | ❌ 无 | 未注明 |  低活跃 / 依赖治理期 |
| **Moltis** | 0 | 2（2/0） |  无 | 未注明 | 🟢 低活跃 / 稳定性修复 |
| **PicoClaw** | 4 | 2（1/1） | ❌ 无 | 未注明 | 🔴 **多 stale / 数据丢失风险** |
| **NullClaw** | 0 | 1（1/0） | ❌ 无 | 未注明 | 🟢 静默 / PR #996 待合 |
| **LobsterAI** | 1（stale 161 天） | 0 | ❌ 无 | 未注明 |  **维护静默期** |
| **TinyClaw** | 0 | 0 | ❌ 无 | — | ⚫ 无活动 |

**关键观察**：
- **零发版日**：13 个项目全部未发布新版本，是过去 30 日中较为罕见的现象，提示 PR 评审/合并瓶颈已跨项目蔓延。
- **PR 合并率分化**：NanoClaw 50%、OpenClaw 40% 属于健康区间；Hermes Agent **0%** 是异常信号；ZeptoClaw、NanoBot 维持 21-37% 正常。
- **Issue 静默 ≠ 项目健康**：NullClaw、IronClaw、Moltis 的低 Issue 流量与高质量 PR 形成对比；但 LobsterAI 的静默伴随 161 天 stale Issue，是真正的健康警报。

---

## 3. OpenClaw 在生态中的定位

### 规模与吞吐
OpenClaw 以 **500 Issues + 500 PRs/24h** 的吞吐位列生态第一，约为 Hermes Agent（50/50）的 10 倍、ZeroClaw 的 10-15 倍、NanoClaw 的 30 倍。这种规模对应了"已落地用户群"的体量——单 Issue #137813（Windows Gateway 启动失败）和 #137927（Telegram 内部上下文泄露）都已升级为生产事故级 P0/P1。

### 技术路线差异
| 维度 | OpenClaw | 其他代表项目 |
|---|---|---|
| **多渠道覆盖** | Telegram/Discord/Feishu/... 全面 | ZeroClaw（Matrix/Telegram/WeCom）、CoPaw（Telegram/Feishu）相近；NanoBot、Hermes Agent 更窄 |
| **Provider 抽象** | 已迭代数轮，进入"收敛重复实现"阶段 | NanoClaw 处于早期契约重构；ZeptoClaw 处于运行时层加固 |
| **多 Agent 委派** | 已有 subagent，但社区呼吁"仅回传状态+子会话链接"（#96975） | Hermes Agent、ZeroClaw 同样在治理"父-子上下文污染"；ZeroClaw #10644 明确要"绑定委托结果到 owner principal" |
| **桌面端** | Control UI 成熟但有 avatar 渲染缺陷（#41201，6 个月未解） | Hermes Agent（Desktop 全面 React #520）、CoPaw（Console 重构中）均面临 Web/桌面稳定性 |

### 社区规模优势
OpenClaw 拥有生态内**最长的 Issue 列表与最多的维护者**（`steipete`、`vincentkoc`、`jalehman` 三人当日联袂提交），但同时也承担最重的**回归治理成本**——2026.8.x/2026.9.x 的 P0/P1 列表（#137813、#140010、#140129、#140535、#137492 等）已超出 NanoBot、Moltis 等项目的全部活跃 Issue 之和。**结论**：OpenClaw 是生态的"最大公约数"，但其复杂性也使其成为用户踩坑最频繁的入口。

---

## 4. 共同关注的技术方向

下列方向在 **3 个及以上项目** 中同时出现，是生态级的共性诉求：

### 4.1 MCP（Model Context Protocol）稳定性
- **NullClaw** #996 — MCP stdio 超时控制、进程组清理、初始化失败回收
- **IronClaw** #8077 — MCP 响应泄漏诊断分类
- **Hermes Agent** #42719 — ACP 提供的 MCP 工具注册后从 chat-completions 请求中丢失（P1）
- **OpenClaw** #84242 — `memory-lancedb` 注册但未暴露为 agent tool

**共性诉求**：MCP 集成已从"功能可用"进入"生产可靠性"阶段，超时、错误传播、跨调用上下文保留是焦点。

### 4.2 同步持久化/慢 I/O 阻塞事件循环
- **OpenClaw** #97616（zombie 泄漏）、#137492（heartbeat 重试风暴）、#119720（Gateway 同步持久化）
- **NanoBot** #5580 — `fix(session): move persistence off event loop`（P1）
- **CoPaw** #7363 — 同步调用阻塞事件循环 118–135s，timeout 形同虚设
- **ZeroClaw** #10230 — Daemon 启动/重载栈溢出

**共性诉求**：长任务 / 慢存储 / 心跳三类场景下的"事件循环被同步路径阻塞"已成为生态级通病。

### 4.3 子进程生命周期与凭据隔离
- **ZeptoClaw** #672/#645 — 子进程环境清理、进程树超时回收
- **OpenClaw** #97616 — hook/tool 子进程 zombie 累积
- **NullClaw** #996 — MCP stdio 子进程组清理

**共性诉求**：当 agent 触发 shell/exec/MCP 子进程时，环境隔离、进程组回收、孤儿进程 reaping 成为安全与稳定性的双重防线。

### 4.4 Provider 抽象与契约重构
- **NanoClaw** — 单日 6 个 PR 重构 provider 契约（runtime/host/install/codex）
- **OpenClaw** — `refactor(codex)` 复用 core algebra、`refactor(plugins)` 不可变 generation
- **ZeroClaw** — RFC #9488 统一文件/附件架构（已迭代至 Rev 10）

**共性诉求**：随着 OpenAI-compatible、Anthropic、Codex、Cursor、Hermes/Nous 等多 provider 接入，**声明式 provider 契约 + core-owned 词汇**成为收敛漂移的统一路径。

### 4.5 上下文完整性 / Transcript 持久化
- **OpenClaw** #137927（Telegram 内部块泄露）、#134579（Active Memory 自 2026.8.1-beta.3 不再 dispatch）
- **CoPaw** #7584/#7579/#7447 — 模型回复从上下文丢失，导致 toolcall 死循环
- **ZeroClaw** #9421/#10659 — 不完整 terminal responses 被报为成功；ACP 转录丢失
- **PicoClaw** #3351 — `rewriteJSONL` 物理覆盖导致历史不可恢复（**数据安全**）

**共性诉求**："上下文是 Agent 的记忆"已成为共识，但跨进程、跨会话、跨崩溃的 transcript 持久化仍普遍脆弱。

### 4.6 跨平台一致性（Windows 尤甚）
- **OpenClaw** #137813（Gateway 不启动）、#140010（WebSocket 重连 30-60s）、#136203（Doctor 维护阻塞）
- **Hermes Agent** #104666（Codex Windows 启动失败）
- **CoPaw** #6814（macOS SQLite SIGBUS）、#7363（Windows 同步阻塞）
- **ZeroClaw** #7462（Windows 测试 74 项失败）

**共性诉求**：Linux-first 开发范式下，Windows/macOS 用户被系统性忽略，"代码页 936"、"PATHEXT"、"launchctl" 成为高频关键词。

### 4.7 多 Agent 委派的可见性与成本可控
- **OpenClaw** #96975 — Subagent 完成仅回传状态 + 子会话链接
- **CoPaw** #7450/#7580 — 主 Agent 不主动轮询子 Agent；缺少 wait_for_agent_task
- **ZeroClaw** #10531/#10644/#10635 — 子代理进度不可见、成本预算未传递
- **ZeptoClaw** #664 — 委托工具不得超出来自父代理的策略（继 P0 修复后的下一阶段）

**共性诉求**：从"能委派"进化到"看得见、调得动、算得清"是 2026 下半年的产品分水岭。

### 4.8 Heartbeat / Cron 可靠性
- **OpenClaw** #137492、#102534（cron 永久停火）
- **Hermes Agent** #92837（heartbeat 静默丢失）、#104453（systemd 249 cron 全部失败）
- **CoPaw** #2134（heartbeat 超时可配置，已合并）、#7589（heartbeat 反馈循环堆积）

**共性诉求**：作为 Agent 主动巡检的命脉，heartbeat 在 OOMPolicy、launchctl keepalive、id-evict 唤醒等场景下的可靠性尚未达标。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术栈/架构特征 | 关键差异化 |
|---|---|---|---|---|
| **OpenClaw** | 全渠道通用 AI Agent | 个人/小团队，多场景 | 多 channel + 多 provider + 完整 UI | 规模最大、回归最多 |
| **Hermes Agent** | 跨设备 Bot + 桌面协作 | Bot 开发者、跨设备用户 | Desktop app + 多 provider + Relay | 凭证池管理创新（0xble 系列 PR） |
| **ZeroClaw** | 架构严谨性优先的 daemon | 平台架构师、长期演进者 | RFC 驱动 + 多通道 + ACP | 修订至 Rev 10 的 RFC 流程 |
| **CoPaw (QwenPaw)** | 多渠道中文生态 | 中文企业、Telegram/Feishu 用户 | Qwen 模型 + 飞书/Telegram/Console | 国内多渠道 + 大模型原生 |
| **NanoClaw** | 声明式 provider 抽象 | 平台集成商 | Provider contract + OpenCode/Codex/Cursor 接入 | "core-owned 词汇 + provider 声明" 模式 |
| **NanoBot** | 轻量 Python Agent | Python 开发者、研究者 | TUI 优先 + Skills marketplace + 独立 CLI | skills shadow builtins、attach-only 部署 |
| **PicoClaw** | 嵌入式设备 Agent | IoT / RISC-V / RV1106 用户 | 极轻量、JSONL 内存 | 唯一明确面向嵌入式 Web UI 场景 |
| **NullClaw** | Zig 底层实现 | 性能敏感、底层开发者 | Zig + MCP stdio + ReleaseSmall 优化 | 生态内**唯一 Zig 项目**，测试覆盖 7,373 用

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-09-07**
**数据来源：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 项目今日活跃度处于**中等偏高**水平：过去 24 小时内共产生 14 条 PR 更新（11 条待合并，3 条已合并/关闭），但 Issue 流量为 0，社区端无新反馈涌入。项目当前主要处于"内功修炼"阶段——本轮 PR 主要聚焦在 **测试稳定性**、**CI 流水线优化**、**安全 SSRF 防护** 以及 **运行时会话持久化** 等基础设施层。代码变更涉及 `exec`、`tui`、`skills`、`session`、`mcp`、`heartbeat` 等多个核心模块，未引入新 Release 或破坏性变更。

核心贡献者画像：`chengyongru`、`KDB-Wind`、`dajiaohuang` 三人承担了本批次近八成的提交，说明项目维护力量相对集中，存在一定的 bus factor 风险。

---

## 2. 版本发布

本周期无新版本发布，跳过此章节。

---

## 3. 项目进展

今日有 **3 条 PR 被合并/关闭**，整体推进偏"质量与可观测性"方向：

| PR | 标题 | 贡献者 | 影响面 |
|---|---|---|---|
| [#5680](https://github.com/HKUDS/nanobot/pull/5680) | ci: parallelize tests and filter unrelated jobs | chengyongru | **CI 性能**：引入 `pytest-xdist` 并行化 Linux/Windows Python 套件，启用 uv 依赖缓存。预计主测试时长明显缩短。 |
| [#5679](https://github.com/HKUDS/nanobot/pull/5679) | fix(tui): show context window usage in footer | chengyongru | **UX 改进**：TUI 页脚从聚合 token 吞吐改为显示实测上下文占用（如 `11% context`），更准确反映当前请求的资源消耗。 |
| [#5309](https://github.com/HKUDS/nanobot/pull/5309) | fix(skills): allow marketplace skills to shadow builtins | KDB-Wind | **生态修复**：解决 Marketplace 把 workspace skills 错误标记为已安装的问题，恢复用户用 workspace skill 覆盖内置 skill 的能力。 |

**整体评估**：今日合入的 3 条 PR 全部围绕**工程质量**而非新功能落地，体现出团队当前更关注于"先稳住底盘"的策略。

---

## 4. 社区热点

⚠️ **数据局限提示**：本周期所有 14 条 PR 的评论数均为 `undefined`，点赞数均为 `0`。无法基于互动数据识别"最热门"议题。以下按**关注度（业务影响 × 久期）**推荐优先关注：

- **🔥 [#5580 fix(session): move persistence off event loop](https://github.com/HKUDS/nanobot/pull/5580)** — P1 优先级。该 PR 解决了"慢速会话存储/文件锁竞争阻塞事件循环"导致的全局 stall 问题。一旦合并，将显著提升多对话并发场景下的整体响应稳定性。

- **🔥 [#5683 fix(wecom): use SDK media upload API](https://github.com/HKUDS/nanobot/pull/5683)** — 今日新增。涉及企业微信通道的私有 WebSocket 上传实现替换为官方 SDK，对国内部署用户的企业微信媒体消息体验关系重大。

- **🔥 [#5682 fix(exec): resolve relative working_dir from workspace](https://github.com/HKUDS/nanobot/pull/5682)** — 今日新增。`ExecTool` 的相对 `working_dir` 解析路径错位问题，影响所有通过相对路径调用执行工具的工作流。

**背后诉求分析**：当前贡献者焦点高度集中在"事件循环稳定性 + 沙箱/通道边界正确性 + 资源计量真实性"三条主线上，反映社区对**生产可用性**的诉求正在取代早期对新功能的追逐。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 / 链接 | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **P1** | [#5580](https://github.com/HKUDS/nanobot/pull/5580) | `fix(session): move persistence off event loop` — 慢存储阻塞事件循环，导致多会话/运行时事件整体卡顿 | ✅ 已开 PR，待合并 |
| 🟠 **P2** | [#5682](https://github.com/HKUDS/nanobot/pull/5682) | `fix(exec): resolve relative working_dir from workspace` — `working_dir` 被错误地以进程 CWD 而非 workspace 路径解析 | ✅ 已开 PR，待合并 |
| 🟠 **P2** | [#5683](https://github.com/HKUDS/nanobot/pull/5683) | `fix(wecom): use SDK media upload API` — 自实现上传路径存在行为分歧，统一迁移到 `wecom-aibot-sdk-python>=0.1.7` 官方 API | ✅ 已开 PR，待合并 |
| 🟢 **已修复** | [#5679](https://github.com/HKUDS/nanobot/pull/5679) | TUI 页脚上下文占用率显示不准确 | ✅ 已合并 |
| 🟢 **已修复** | [#5309](https://github.com/HKUDS/nanobot/pull/5309) | Marketplace 误判 workspace skills 已安装 | ✅ 已关闭 |
| 🟡 **测试稳定** | [#5677](https://github.com/HKUDS/nanobot/pull/5677) | `test: stabilize flaky and environment-dependent tests` — 含 `test_catalog_bounds_failure_only_keys`（Windows 5 次运行 3 次失败）等稳定性问题 | 🔧 通过测试修复间接覆盖，无生产代码变更 |
| 🟡 **安全加固** | [#5678](https://github.com/HKUDS/nanobot/pull/5678) | SSRF 防护中 `validate_resolved_url` 与 `PinnedDNSAsyncTransport` 两条路径缺乏测试覆盖 | 🔧 通过新增回归测试覆盖 |

**信号**：P1 的 session 持久化问题长期高优且已有完整方案，建议维护者优先审阅 [#5580](https://github.com/HKUDS/nanobot/pull/5580)。

---

## 6. 功能请求与路线图信号

基于开放 PR 判断近期可能进入下一版本的功能方向：

| 功能 | PR 链接 | 状态 | 入版概率评估 |
|---|---|---|---|
| **Desktop 与 Python 独立安装 + attach-only 目标选择** | [#5676](https://github.com/HKUDS/nanobot/pull/5676) | 待合并 | 🟢 高：CLI 改造清晰，行为向后兼容 |
| **MCP 工具 schema 字节预算（默认关闭，按需启用）** | [#5388](https://github.com/HKUDS/nanobot/pull/5388) | 待合并 | 🟢 高：默认关闭零风险，已开放 3 周 |
| **MCP Apps 结果元数据保留** | [#5386](https://github.com/HKUDS/nanobot/pull/5386) | 待合并 | 🟢 高：与 #5388 配套 |
| **Heartbeat 共享 session（`isolated_session: false`）** | [#4551](https://github.com/HKUDS/nanobot/pull/4551) | 待合并 | 🟡 中：实现已超 2.5 个月未合并，需维护者决策 |
| **Heartbeat 廉价模型覆盖（`model_override`）** | [#4549](https://github.com/HKUDS/nanobot/pull/4549) | 待合并 | 🟡 中：与 #4551 同源，建议合并时同时评估 |
| **Codex 通道 Langfuse tracing** | [#5520](https://github.com/HKUDS/nanobot/pull/5520) | 待合并 | 🟢 高：补齐 Codex provider 的可观测性短板 |

**路线图信号**：MCP 相关 (#5388 + #5386) 呈现明显的"组合拳"特征，强烈建议作为整体功能模块评估；heartbeat 两条 PR 虽单独看合理，但需考虑其与现有会话生命周期的兼容性。

---

## 7. 用户反馈摘要

⚠️ **数据局限**：本周期 Issue 端无任何新开/活跃/关闭记录，评论数据为 `undefined`，缺少直接来自用户的痛点陈述。以下反馈由 PR 描述中的用户场景侧写提炼：

- **企业微信部署侧**：`#5683` 反映出**国内企业集成用户**对媒体上传行为稳定性敏感，期望 SDK 升级路径平滑、错误处理一致。
- **多用户/多会话运维侧**：`#5580` 反映**生产用户**对事件循环被慢 I/O 阻塞的零容忍，期望会话持久化具备并发隔离。
- **Skills 二次开发侧**：`#5309` 反映出**进阶用户**期望 workspace skills 能覆盖内置 skills，并对 Marketplace UI 的安装状态保持可信。
- **TUI 重度使用者**：`#5679` 反映出**终端用户**对上下文占用率的真实可见性诉求，旧的 token 聚合指标被普遍认为"信息密度不足"。

整体满意度信号偏中性偏正面，无明显抱怨主题。

---

## 8. 待处理积压

以下 PR 创建时间较早、长期未合并，建议维护者关注：

| PR 链接 | 标题 | 创建日期 | 等待时长 | 建议 |
|---|---|---|---|---|
| [#4551](https://github.com/HKUDS/nanobot/pull/4551) | feat(heartbeat): add isolated_session config | 2026-06-26 | **~73 天** | 🟥 紧急：需明确决策（合并 / 关闭 / 重构） |
| [#4549](https://github.com/HKUDS/nanobot/pull/4549) | feat(heartbeat): add model_override config | 2026-06-26 | **~73 天** | 🟥 紧急：与 #4551 同源，建议打包评审 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | feat(agent): budget model-visible MCP schemas | 2026-08-13 | ~25 天 | 🟧 关注：MCP 路线关键能力 |
| [#5386](https://github.com/HKUDS/nanobot/pull/5386) | feat(mcp): preserve MCP Apps result metadata | 2026-08-13 | ~25 天 | 🟧 关注：与 #5388 配套评审 |
| [#5520](https://github.com/HKUDS/nanobot/pull/5520) | feat(provider): langfuse tracing for codex | 2026-08-24 | ~14 天 | 🟨 正常审阅窗口内 |
| [#5580](https://github.com/HKUDS/nanobot/pull/5580) | fix(session): move persistence off event loop | 2026-08-28 | ~10 天 | 🟨 P1 优先，建议本周内合并 |

**提醒**：#4551 与 #4549 是当前积压时间最长的 PR，已超出常规审阅窗口超 2 个月，建议维护者主动给出明确结论以避免贡献者流失。

---

## 附 - 项目健康度速记

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 流量 | 0 | 🟡 静默期，建议关注用户激活路径 |
| 24h PR 合并率 | 3/14 ≈ 21% | 🟢 正常 |
| P1 待合并 PR | 1 条（#5580） | 🟡 需重点推进 |
| 长期未响应 PR（>60 天） | 2 条 | 🟥 需维护者介入 |
| 本日贡献者集中度 | ~80%（3 人） | 🟡 bus factor 中等风险 |
| Release 节奏 | 周期内无 | 🟡 建议结合上述 P1/P2 批次做小版本发布 |

> 📌 **结论**：NanoBot 当前健康度整体可控，但维护端响应节奏出现"分化"——CI / 测试 / TUI 等质量类 PR 流转顺畅，而 heartbeat / MCP schema 等能力类 PR 滞留明显。建议下一周优先动作：① 合并 #5580 解决 P1；② 对 #4551/#4549 给出明确结论；③ 评估 MCP 组合拳 #5388+#5386 一次性入版。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-07**

---

## 1. 今日速览

Hermes Agent 今日维持高强度开发节奏，过去 24 小时共产生 50 条 Issue 更新与 50 条 PR 更新，社区活跃度处于近期高位**。Issue 侧以 Bug 报告为主（占比约 60%），PR 侧则呈"开放多、合并少"的态势——50 条 PR 全部处于待合并状态，0 条已合并，提示代码评审环节可能存在瓶颈**。版本发布层面今日无新 Release，修复与新功能均沉淀在 PR 队列中等待合入。P1 级问题新增 2 条（Codex Windows 启动失败、Telegram 入站消息双写），均为影响核心工作流的关键稳定性问题，需维护者优先关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 当前最新已发布版本为 **v0.21.0**（用户在 #104453 中提及"更新到 v0.21.0 后所有 cron 任务失败"），意味着已积累的 Bug 修复尚未形成新的发布节奏。

---

## 3. 项目进展

今日 **0 条 PR 被合并/关闭**，所有 50 条 PR 均处于待合并状态，这是近期值得关注的信号。按主题归纳的在审 PR 集群：

### 认证池（Credential Pool）工作集群
由贡献者 **0xble** 集中推进，形成完整的认证管理功能闭环：
- **PR #104664** – `hermes auth add --priority` 与 `hermes auth priority` 命令，按优先级排列凭证
- **PR #104661** – `hermes auth refresh <provider>` 强制刷新 OAuth 凭证
- **PR #104660** – `hermes auth reset <provider> <target>` 按目标重置单一凭证
- **PR #104663** – 修复 `request_count` 仅在 `least_used` 策略下递增的问题

### OpenRouter 增强工作集群
由贡献者 **Artemonim** 拆分自原 PR #100711：
- **PR #104586** – OpenRouter 服务层级（service tiers）支持：flex/priority、每模型覆盖、TTFT 升级
- **PR #104587** – OpenRouter sticky provider order，保持 prompt cache 温度

### Desktop 稳定性修复集群
- **PR #104676**（Halldrix）– 修复后台窗口对 `preview.act.request`/`tour.request` 静默失败
- **PR #104680**（MarionLiew）– 防止卡住的远程 gateway 切换清空本地状态
- **PR #104510**（DavidMetcalfe）– 修复模型搜索高亮与过滤器不一致

### 其他重要推进
- **PR #99220**（benbarclay）– Relay 出站授权（安全相关 P3，P5 工作流 gateway 端）
- **PR #104597**（egilewski）– 修复沙箱进程组终止验证不严格的问题
- **PR #104677**（Adolanium）– 委托批次序号在长生命周期进程中封顶
- **PR #104669**（kokhlo）– 修复回复上下文锚点缺失年龄信息（closes #104652）

**整体评估**：代码产出量充足，但合并率为 0%，建议维护者集中评审 PR 队列，避免 PR 长期搁置导致合并冲突。

---

## 4. 社区热点

### 🔥 讨论最热烈

**#66616 – Skills index is stale or degraded**（169 条评论）
- 链接：https://github.com/NousResearch/hermes-agent/issues/66616
- 自动化探针报告 Skills Hub 索引陈旧 29.8 小时（阈值 26 小时），`/docs/api/skills-index.json` 由 cron 6/18 UTC 工作流重建，目前处于 degraded 状态
- **社区诉求**：Skills 文档中心依赖的索引机制需要更可靠的重建与告警，169 条讨论说明此问题已长期未解

### 📈 次热议题（评论数 ≥ 10）

**#97681 – Bot Group Chats should keep working after Desktop closes**（25 条评论）
- 链接：https://github.com/NousResearch/hermes-agent/issues/97681
- 多个 Bot 跨设备协作场景：群聊不依赖 Desktop 常驻即可被其他设备拾取
- **社区诉求**：分布式 Bot 协作是产品差异化的关键场景，社区希望 Bot 部署在笔记本、家用服务器、VPS 时仅依赖群聊会话即可跨设备恢复

### 👍 反应最积极（👍 ≥ 2）
- **#73327** – 可自定义 cron 响应包装模板（👍 3，6 评论）
- **#26277** – 可选按规范化邮件主题做 session 隔离（👍 2，9 评论）

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（最高优先级）
| Issue | 描述 | 组件 | Fix PR |
|---|---|---|---|
| **#104653** | 入站用户回合被持久化两次（gateway + agent flush），`platform_message_id` 字段不一致 | agent/gateway/telegram | ❌ 无 |
| **#104666** | Codex App Server 在 Windows 上无法启动（npm 安装忽略 PATHEXT） | agent/openai | ❌ 无 |
| **#92837** | 心跳已触发但未交付时静默递增 `last_fired_at`/`fire_count`，agent-cache idle-evict 后唤醒丢失 | cli/gateway | ❌ 无 |
| **#104453** | v0.21.0 后 systemd 249（Ubuntu 22.04）上所有 cron 任务失败：OOMPolicy=kill 被拒绝 | tools/cron | ❌ 无 |
| **#42719** | ACP 提供的 MCP 工具注册后从 chat-completions 请求中丢失 | acp/mcp | ❌ 无 |

### 🟠 P2（重要）
| Issue | 描述 | 组件 | Fix PR |
|---|---|---|---|
| **#90795** | Desktop 工作区面板崩溃：`useSyncExternalStore` re-entrant 触发 React #520 | desktop | ❌ 无 |
| **#94921** | Ghostty 终端上 Shift+letter 泄漏 `ESC[27;2;<cp>~` 原始序列到 prompt | cli | ❌ 无 |
| **#104622** | `resolve_anthropic_token()` 借用 Claude Code 登录导致每次刷新都被登出 | agent/anthropic/auth | ❌ 无 |
| **#104357** | Discord cron 附件投递 404（Unknown Channel），文本投递正常 | gateway/cron/discord | ❌ 无 |
| **#104176** | 继承的 ContextCompressor 摘要覆盖在 `bypass_cooldown` 时破坏 | agent/plugins | ❌ 无 |
| **#100836** | `hermes doctor --fix` 自我检测为活跃写入者导致无法修复 state.db | cli | ❌ 无 |
| **#104678** | Anthropic Pro/Max 配额耗尽后 `failure_reason=billing` 无过期时间，缓存错误持续重放 | agent/anthropic/auth | ❌ 无 |
| **#101185** | Discord 语音频道自动 TTS 永不播放（runner 跳过） | gateway/tts/discord | ❌ 无 |
| **#104671** | 后台补全积压为每个陈旧/死进程触发一整次 agent turn | cli/tools | ❌ 无 |
| **#104357** | Discord cron 附件 404 | gateway/cron | ❌ 无 |

### 🟡 P3（中低优先级）
- **#104637** – 凭证池 `request_count` 仅 `least_used` 策略递增 → 已有 **PR #104663** ✅
- **#104641** – hermes-talk 不接受 OpenAI API key（标记为 invalid）
- **#45125** – Dashboard 加载崩溃（React #520，所有 tab）

### 📋 今日关闭
- **#70328** [CLOSED] – 压缩触发器对每张图按 1500 tokens 估算导致 vision-heavy session 在 64K 本地模型上触发 400 错误。该 Issue 被关闭但需关注是否已有合并 PR 跟进（数据中未显示）

**⚠️ 关键观察**：50 条 P1/P2 级 Bug 报告中**无一条附带已合并或已开放的 Fix PR**（数据范围内），维护者应优先评审以下方向：Telegram 消息双写（#104653）、Windows Codex 启动（#104666）、Heartbeat 丢失（#92837）。

---

## 6. 功能请求与路线图信号

### 跨设备/多端体验
- **#97681**（25 评论）– Bot 群聊跨设备持久化 → **被官方频繁讨论，是产品战略级需求**
- **#69882** – 插件的认证请求上下文（plugin tool 安全边界） → 需要决策

### 会话与上下文管理
- **#26277**（👍 2）– 邮件 session 按规范化主题隔离（Email gateway 增强）
- **#73327**（👍 3）– 自定义 cron 响应包装模板
- **#85648** – 委托时序：让已就绪的依赖影响未完成的父任务
- **#104640** – 从 profile home 而非仅工作目录加载 AGENTS.md

### 认证与凭证管理
- **#104638** – `hermes auth add --priority` → **已有 PR #104664** ✅，合并概率高
- **#104652** – 回复上下文锚点携带消息年龄 → **已有 PR #104669** ✅

### Cron 能力
- **#104572** – 原子化创建禁用任务

### 通道适配
- **#45122** – 在 system prompt 中注入统一的通道感知（跨 Telegram/Discord/Signal 行为适配）
- **#104226**（PR）– Kanban worktree 模式补充 git 忽略文件（hook after `git worktree add`）

### 生态插件
- **#104668**（PR）– 新增"governed engineering evidence"插件，连接代码库/测试/学习关联但**不授予发布或运营权限**，定位为"受限证据层"，是新产品形态的探索
- **#104690**（PR）– 将精确审批绑定到最终工具动作（安全相关）

**路线图预测**：基于 PR 集群分析，**v0.22.0** 最可能包含：认证池管理增强（0xble 系列 PR）、OpenRouter 服务层级（Artemonim 系列）、Desktop 稳定性补丁集（Halldrix/MarionLiew/DavidMetcalfe）。

---

## 7. 用户反馈摘要

### 痛点场景

1. **多设备工作流断裂** – 用户希望 Bot 群聊在 Desktop 关闭后仍能从其他设备恢复（#97681），反映了真实的生产力场景
2. **认证状态混乱** – Anthropic Pro/Max 用户在配额恢复后仍需手动 `hermes auth reset`（#104678），缓存机制阻碍自然恢复
3. **跨工具会话污染** – Claude Code 与 Hermes 共用同一机器时，Hermes 借用并清空 Claude Code 的 OAuth token（#104622），破坏用户其他工作流
4. **Vision 模型压缩失效** – 64K 本地模型用户在大量图像场景下被 provider 400 错误拦截（#70328，今日已关闭）
5. **系统化部署受阻** – Ubuntu 22.04 + systemd 249 用户在 v0.21.0 后完全无法运行 cron（#104453），破坏基础任务调度
6. **终端兼容性差** – Ghostty 用户无法使用 Shift+letter 快捷键（#94921），CLI 兼容性覆盖不全
7. **Dashboard 全面崩溃** – 非 Chat tab 也触发 React #520（#45125），整个仪表盘几乎不可用

### 满意/正面信号

- **👍 3** 的 #73327（cron 模板自定义）和 **👍 2** 的 #26277（邮件 session 隔离）表明用户对**自动化工作流的精细控制**有强烈需求，且认可这两个方向
- 用户主动提交高质量 PR（如 0xble 的认证系列、Artemonim 的 OpenRouter 系列、kokhlo 的 PR #104669 修复了用户提出的 #104652），说明社区具备**工程能力强的核心贡献者**

---

## 8. 待处理积压

### 🕰️ 长期未关闭的高优先级 Issue

| Issue | 创建日期 | 状态 | 评论 | 紧急建议 |
|---|---|---|---|---|
| **#66616** | 2026-07-18 | OPEN, degraded | 169 | ⚠️ Skills Hub 文档基础设施长期 degraded，影响所有依赖 skills-index 的页面 |
| **#42719** | 2026-06-09 | OPEN | 3 | ⚠️ MCP 工具丢失 P1，影响 ACP 用户核心能力 |
| **#26277** | 2026-05-15 | OPEN | 9 | 邮件 gateway 增强（👍 2），需求清晰但 4 个月未推进 |
| **#73327** | 2026-07-28 | OPEN | 6 | cron 模板（👍 3），需求简单 |
| **#45125** | 2026-06-12 | OPEN | 1 | Dashboard 全面崩溃近 3 个月 |
| **#45122** | 2026-06-12 | OPEN | 1 | 通道感知注入 |
| **#69882** | 2026-07-23 | OPEN, needs-decision | 2 | 插件认证上下文，需维护者决策 |
| **#85648** | 2026-08-13 | OPEN | 1 | 委托时序增强 |
| **#92837** | 2026-08-23 | OPEN | 4 | Heartbeat 静默丢失 P1 |

### 🔒 长期待合并 PR

- **#99220** – 创建于 2026-08-31 的 Relay 安全 PR，security tag，安全相关但 P3 已搁置 7 天

### 🚦 维护者行动建议

1. **立即处理 P1 积压**（#104653、#104666、#92837、#104453、#42719）—— 5 条 P1 均无 Fix PR
2. **解决 PR 评审瓶颈** —— 50 条 PR 全部 OPEN，0 条合并，至少按主题分批合并认证池与 Desktop 集群
3. **发布 hotfix 版本** —— v0.21.0 引入了至少 2 条回归 Bug（#104453 systemd cron、#94921 Ghostty 终端），建议紧急发布 v0.21.1
4. **修复 Skills 索引基础设施** —— #66616 已积累 169 条评论，是项目健康度的重要信号
5. **明确长期 Issue 处置策略** —— #26277、#45125、#45122 等超过 2 个月未推进的 Issue 需要明确 "will fix / won't fix / deferred" 决策

---

**报告生成时间**：2026-09-07
**数据来源**：GitHub Issues & PRs of NousResearch/hermes-agent
**项目健康度评估**：🟡 **亚健康** —— 社区活跃度高、工程产出充足，但 PR 合并率为 0%、P1 Bug 无 Fix 跟进、存在长期未关闭的高优先级 Issue。建议维护团队进行 PR 批量评审并启动 v0.21.1 hotfix 流程。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-07

> 数据周期：2026-09-06 ~ 2026-09-07
> 数据来源：GitHub Issues & Pull Requests
> 仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 📌 今日速览

PicoClaw 今日整体活跃度处于**中等偏低**水平。过去 24 小时仅有 4 条 Issue 变动和 2 条 PR 变动，无新版本发布。最值得关注的动向包括：一项**长期搁置的 LLM Provider 扩展请求（#675）被关闭**，以及一项**关于 OpenCode Go 会话头的新功能请求（#3369）**今日开启。同时，社区对嵌入式设备 Web UI 性能（#3350）和会话持久化（#3351）的两项深度技术反馈持续发酵，显示出用户对生产可用性的强烈关注。整体来看，项目日更节奏放缓，但**底层稳定性问题正被严肃讨论**。

---

## 🚀 版本发布

**无新版本发布。** 今日未监测到任何 Release / Tag 更新，建议关注者查看 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 获取最新构建。

---

## 📈 项目进展

### 已关闭 PR

**#1349 — feat(qq): support parsing and replying to more attachment types** ✅ 已关闭
- 链接：https://github.com/sipeed/picoclaw/pull/1349
- 作者：@aishannon（2026-03-11 创建，2026-09-06 关闭）
- 内容：QQ Channel 增强——支持 Emoji 结构解析、入站语音/图片/视频/文件处理、回复时本地附件上传、Markdown 优先降级
- 状态说明：⚠️ 该 PR 长期未合并（悬挂约 6 个月），今日以**关闭状态**落定，未明确披露是合并还是被拒，需查阅 PR 历史评论确认

### 待合并 PR

**#3348 — i18n: complete Czech code wrap labels** ⏳ 长期搁置
- 链接：https://github.com/sipeed/picoclaw/pull/3348
- 创建于 2026-08-29，处于 stale 状态，本地化贡献者响应迟缓

**整体推进评价**：今日净进展接近零，但 LLM Provider 议题 #675 的关闭象征性地清理了一个积压大项。

---

## 🔥 社区热点

### #675 — [CLOSED] Add more LLM Provider Support
- 链接：https://github.com/sipeed/picoclaw/issues/675
- 互动：7 条评论，创建于 2026-02-23
- 诉求分析：作为长期高曝光的 Provider 扩展请求，今日被关闭，可能意味着维护者已决定**通过插件化机制替代逐一添加**，或认为现有 Provider 矩阵已足够。关闭原因未在数据中显现，建议关注后续 Roadmap 公告。

### #3369 — [NEW] Add OpenCode Go session header support
- 链接：https://github.com/sipeed/picoclaw/issues/3369
- 作者：@w33ble（今日新开）
- 诉求分析：OpenCode Go 模式需要在请求中携带 `x-opencode-session` 头关联当前会话，但 OpenAI-compatible provider 当前**无法完成该映射**。这是首个明确指向 OpenCode Go 兼容性细颗粒度的请求，反映**用户场景正从基础对话向多会话/工作流场景迁移**。

---

## 🐞 Bug 与稳定性

按严重程度从高到低排序：

### 🔴 高优先级 — #3351 session 物理删除致历史不可恢复
- 链接：https://github.com/sipeed/picoclaw/issues/3351
- 作者：@chentianxiong123（创建 2026-08-30）
- 严重程度：**高（数据安全风险）**
- 问题根因：`pkg/memory/jsonl.go` 中 `SetHistory → rewriteJSONL` 会**物理覆盖整个 .jsonl 文件**，破坏 append-only 语义。自动压缩触发后，用户无法找回失忆前的历史
- 是否已有修复 PR：**否**（仍处 stale 状态）
- 影响范围：所有启用自动压缩功能的长期会话用户

### 🟡 中优先级 — #3350 嵌入式 Web UI 打字卡顿
- 链接：https://github.com/sipeed/picoclaw/issues/3350
- 作者：@chentianxiong123（创建 2026-08-30）
- 严重程度：**中（性能/可用性）**
- 问题根因：在 RV1106、RISC-V 等低性能嵌入式设备上，Web UI 输入框随聊天记录累积显著卡顿，CPU 飙升；疑似前端在每次 keystroke 触发整段历史重渲染
- 是否已有修复 PR：**否**（仍处 stale 状态）
- 影响范围：嵌入式部署场景用户

> ⚠️ 两项稳定性 Issue 均已被标记 stale，**维护者响应缺失**，是当前项目健康度的最大隐忧。

---

## 💡 功能请求与路线图信号

| 请求 | 提出者 | 状态 | 纳入下一版本可能性 |
|------|--------|------|-------------------|
| **#3369** OpenCode Go session header 映射 | @w33ble | 新开 | 中高 — 修复面小，对 OpenCode 生态完善价值高 |
| **#675** 更多 LLM Provider（已关闭） | @sheying2013 | 已关 | 不确定 — 需维护者解释关闭策略，可能转向插件化 |

---

## 💬 用户反馈摘要

- **@chentianxiong123**（两条深度反馈）在 #3350 / #3351 中展示了**源码级诊断能力**——直接定位到 `pkg/memory/jsonl.go` 与 Web UI 前端渲染逻辑。代表社区中存在一批**严肃的生产用户**，对项目底层实现高度关注，但得到的官方响应明显不足（两条均处于 stale）。
- **痛点提炼**：
  1. 会话历史应被视为**不可丢失的资产**，不接受物理覆盖式"压缩"
  2. 嵌入式设备 UI 不应与聊天记录长度耦合，需考虑虚拟滚动 / debounce
  3. 高级用户期望 OpenCode Go 等专业工具的**会话隔离**能力
- **满意度信号**：缺位（无正面反馈或致谢类评论出现）

---

## 📋 待处理积压（提醒维护者）

| 编号 | 类型 | 状态 | 持续时间 | 备注 |
|------|------|------|----------|------|
| [#3351](https://github.com/sipeed/picoclaw/issues/3351) | Bug (数据丢失) | stale | 7 天 | **数据安全问题，建议置顶** |
| [#3350](https://github.com/sipeed/picoclaw/issues/3350) | Bug (性能) | stale | 7 天 | 含源码级定位，回复成本低 |
| [#3348](https://github.com/sipeed/picoclaw/pull/3348) | PR (i18n) | stale | 8 天 | 捷克语贡献者等待中 |
| [#675](https://github.com/sipeed/picoclaw/issues/675) | Feature (Providers) | **closed** | 近 7 个月 | 建议在 closed 留言中说明替代方案 |

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 日更 PR/Issue 数量偏低 |
| 响应速度 | ⭐☆☆☆☆ | 多项 stale，关键 Bug 7 天无响应 |
| 社区深度 | ⭐⭐⭐⭐☆ | 用户能提交源码级诊断，质量高 |
| 发布节奏 | ⭐⭐⭐☆☆ | 今日无版本，需结合历史趋势评估 |
| 总体建议 | **关注积压响应** | 高质量 Issue 正在流失，亟需维护者介入 |

---

*报告生成时间：2026-09-07 · 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-09-07**
**数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日呈现**高活跃度、内部重构密集**的状态。过去 24 小时内共有 16 个 PR 更新（已合并/关闭 8 个，待合并 8 个）和 2 个 Issue 更新，**零版本发布**。主题高度集中在两大方向：（1）核心团队成员 zvi-fried 主导的 **providers 契约重构系列** 集中落地，涉及运行时、宿主、安装等多个 provider 合同声明；（2）Slack 频道 DM 会话模式的 Bug 已被快速响应并通过 PR #3731 闭环。整体项目处于 v2.3.0 之后的密集代码重构期，迭代节奏健康。

---

## 2. 版本发布

**无新版本发布。** 当前公开版本仍为 **v2.3.0**（发布于 2026-08-24）。当前 main 分支已领先 v2.3.0 共 119 个 commit（见 Issue #3730 引用），意味着 v2.4.0 候选代码已大量积累，预计下一次版本发布可能紧随本次 providers 重构 PR 落地。

---

## 3. 项目进展（重要合并/关闭 PR）

今日有 8 个 PR 被关闭，**大部分属于大型 providers 重构系列**，是项目架构层面的一次集中演进：

| PR | 标题 | 作者 | 影响范围 |
|---|---|---|---|
| [#3731](https://github.com/qwibitai/nanoclaw/pull/3731) | fix(slack): keep DM thread_ts for reply delivery | bjsheppa | channels / Slack |
| [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) | refactor(providers): declare the setup provider contract and install verifier | zvi-fried | providers / 安装校验 |
| [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) | feat(groups): add a core-owned speed inference property | zvi-fried | groups / CLI |
| [#3727](https://github.com/qwibitai/nanoclaw/pull/3727) | refactor(providers): render provider instructions from core-owned canon | zvi-fried | providers / 指令渲染 |
| [#3585](https://github.com/qwibitai/nanoclaw/pull/3585) | refactor(providers): declare the host provider contract | zvi-fried | providers / 宿主合同 |
| [#3581](https://github.com/qwibitai/nanoclaw/pull/3581) | refactor(providers): declare the runtime provider contract | zvi-fried | providers / 运行时 |
| [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) | refactor(providers): implement the codex provider contract | zvi-fried | providers / codex |
| [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | refactor(providers): render provider instructions from core-owned canon | zvi-fried | providers / 指令渲染（重复提交之一） |

**整体推进评估**：
- **架构层面**：完成 provider 契约从"散落 flag + Claude 专用 helper"到"声明式、可注册校验"的迁移，OpenCode、Codex 两大 provider 已落地；
- **配置层面**：新增 `speed` 与 `model`/`effort` 并列的 per-agent-group 推理属性，且由 provider 声明词汇、core 渲染规则统一管理；
- **用户体验**：Slack DM 线程回复被修复（#3730 → #3731 形成完整 bug→fix 闭环）。

项目在 provider 抽象这条主线上**显著向前推进了一格**，但需注意 #3588 / #3585 / #3727 等被关闭的同时另有 #3588（OPEN）等仍处待合并状态，落地节奏需要继续观察。

---

## 4. 社区热点

**评论数据**：今日所有 Issues 和 PRs 评论数均为 0，说明**社区深度互动有限**，主要以提交驱动为主。

从关注面看，以下两个方向最为集中：

- **Slack 频道稳定性**：Issue [#3730](https://github.com/qwibitai/nanoclaw/issues/3730) → PR [#3731](https://github.com/qwibitai/nanoclaw/pull/3731) 形成完整闭环，说明 Slack DM 场景（共享 session_mode 下仍为每条消息开新会话）触发了用户痛点。
- **浏览器侧 Host 管理**：PR [#3729](https://github.com/qwibitai/nanoclaw/pull/3729)（gavrielc 提出）"将 Host 接入社区单元并在浏览器内管理 perks"，涉及 WorkOS 单一登录、激活态管理、perk 跳过等体验，**反映社区对降低 CLI 安装门槛有较强诉求**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度
1. **[#3728](https://github.com/qwibitai/nanoclaw/issues/3728) - Telegram 入站消息静默死亡**
   - **作者**：ergut
   - **现象**：Telegram 适配器 pollingLoop 无限重试且从不放弃，成功时无日志；inbound 实际已停摆 **约 4 天**才被发现
   - **影响**：宿主机状态仍显示 `active`，出站投递正常，agent 计划任务执行未受影响 → **极具迷惑性**的生产事故
   - **复现版本**：v2.1.54 观察到，v2.3.0 adapter 中重测仍存在
   - **是否有修复 PR**：❌ 当前无相关修复 PR，**需维护者优先处理**

2. **[#3730](https://github.com/qwibitai/nanoclaw/issues/3730) - Slack DM session_mode=shared 仍每条消息开新会话**【已闭环】
   - **作者**：bjsheppa
   - **严重度**：中（功能性 Bug，但仅影响 shared 模式下的线程回复路由）
   - **修复 PR**：[#3731](https://github.com/qwibitai/nanoclaw/pull/3731) ✅ 已关闭

---

## 6. 功能请求与路线图信号

| 信号源 | 需求 | 进入下一版本的可能性 |
|---|---|---|
| [PR #3729](https://github.com/qwibitai/nanoclaw/pull/3729) | Host 与社区单元联通、浏览器端管理 perks、WorkOS 单点登录 | ⚠️ 范围较大（涉及 Slack/Echo 安装流程重写），需评估里程碑 |
| [PR #3356](https://github.com/qwibitai/nanoclaw/pull/3356) | 新增 Cursor Agent SDK provider payload | 🟢 高（已在 main 累计多 PR 形成完整 Cursor 接入栈） |
| [PR #3355](https://github.com/qwibitai/nanoclaw/pull/3355) | 新增 `/add-cursor` 安装 skill | 🟢 高（Cursor 完整接入配套） |
| [PR #3726](https://github.com/qwibitai/nanoclaw/pull/3726) | 新增 Proton Mail 原生适配器（通过 Proton Mail Bridge） | 🟡 中（解决 Raspberry Pi 上无 ARM binary 的特殊场景） |
| [PR #3592](https://github.com/qwibitai/nanoclaw/pull/3592)（已关闭） | per-agent-group `speed` 属性 | ✅ 已合并入主线 |
| [Issue #3728](https://github.com/qwibitai/nanoclaw/issues/3728) | Telegram pollingLoop 增加放弃上限与成功日志 | 🟢 高（属于明确的健壮性改进） |

**关键路线图信号**：Cursor provider 接入即将完整收口（[#3355](https://github.com/qwibitai/nanoclaw/pull/3355) + [#3356](https://github.com/qwibitai/nanoclaw/pull/3356)），是近期最有可能的"用户可见"新增能力。

---

## 7. 用户反馈摘要

由于所有 Issue/PR 评论数均为 0，**暂无社区文字反馈**，仅能从 Issue/PR 摘要中提取一手信号：

- **Slack 用户（bjsheppa）**：关心 shared session_mode 下的语义一致性，期望 DM 线程回复能正确路由。
- **Telegram 用户（ergut）**：明确希望 inbound 通道有可监控日志、要有重试上限与告警机制，**"静默失败"是真实的生产痛点**。
- **基础设施受限用户**（PR #3726 反映）：Raspberry Pi 上 Proton Mail Bridge 无 ARM binary，**官方适配器需考虑 ARM 架构支持**。
- **CLI 操作门槛用户**（PR #3729 反映）：偏好浏览器 + 单一登录完成 host 安装，**期望降低非开发者用户的上手成本**。

---

## 8. 待处理积压（提醒维护者）

| 类型 | 编号 | 标题 | 状态 |
|---|---|---|---|
| 🐛 Bug | [#3728](https://github.com/qwibitai/nanoclaw/issues/3728) | Telegram inbound 静默死亡 | **OPEN，建议优先** |
| 🔧 修复 PR | [#3654](https://github.com/qwibitai/nanoclaw/pull/3654) | fix(onecli): NO_PROXY for host.docker.internal | OPEN（影响 host 侧 MCP 可达性） |
| 🧹 清理 PR | [#3464](https://github.com/qwibitai/nanoclaw/pull/3464) | 移除 v1-only session-commands.ts（修复 #2603） | OPEN，已等 2 周+ |
| 🚀 功能 PR | [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | /add-cursor 安装 skill | OPEN，等 #3356 |
| 🚀 功能 PR | [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | Cursor Agent SDK payload | OPEN |
| 🏗 重构 PR | [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) | OpenCode provider contract 实施 | OPEN（其他 provider 同主题已合并，建议跟进） |
| 🏗 重构 PR | [#3722](https://github.com/qwibitai/nanoclaw/pull/3722) | OpenCode contract 在安装 skill 中的采纳 | OPEN |
| 🌟 大型功能 PR | [#3729](https://github.com/qwibitai/nanoclaw/pull/3729) | Host 接入社区单元 + 浏览器 perks 管理 | OPEN，需核心团队评审 |
| 🌟 新适配器 PR | [#3726](https://github.com/qwibitai/nanoclaw/pull/3726) | Proton Mail 原生适配器 | OPEN |

**积压优先级建议**：
1. 优先处理 [#3728](https://github.com/qwibitai/nanoclaw/issues/3728) Telegram 静默死亡（生产事故级）；
2. 评估 [#3654](https://github.com/qwibitai/nanoclaw/pull/3654) MCP 可达性修复（属于连通性问题）；
3. 推进 Cursor 系列 PR（[#3355](https://github.com/qwibitai/nanoclaw/pull/3355) + [#3356](https://github.com/qwibitai/nanoclaw/pull/3356)）以保持近期功能承诺兑现；
4. 安排评审 [#3464](https://github.com/qwibitai/nanoclaw/pull/3464) 长期挂起的清理 PR（修复历史 issue #2603）。

---

**总结**：NanoClaw 处于架构重构深化阶段，providers 抽象和契约化改造正系统性推进，但 Telegram 静默失败 Bug 暴露了适配器可观测性短板，需在下个版本前补齐。无新版本发布的当下，main 分支与 v2.3.0 差距已积累 119 个 commit，**v2.4.0 候选窗口正在形成**。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-09-07**

---

## 1. 今日速览

NullClaw 今日呈现**低活跃度、稳态维护**的状态：过去 24 小时内无任何 Issue 活动，无新版本发布，仅有 1 条待合并的 PR 处于流转中。该 PR 聚焦 MCP stdio 通信的稳定性修复，属于生产可靠性方向的持续打磨，并未涉及新功能或破坏性变更。从 7,373 个通过的测试用例来看，仓库整体质量基线保持稳健。综合评估：**项目处于静默迭代期，活跃度偏低但工程严谨度较高。**

---

## 2. 版本发布

今日无新版本发布，跳过此节。

---

## 3. 项目进展

### 🔧 进行中的关键修复：MCP stdio 超时控制

**PR [#996](https://github.com/nullclaw/nullclaw/pull/996) — fix(mcp): bound stdio response waits**（@be-student，OPEN）

该 PR 旨在解决 Issue [#991](https://github.com/nullclaw/nullclaw/issues/991)，为 MCP stdio 通信栈引入严格的超时边界，主要包含三项改进：

| 改进点 | 说明 |
|---|---|
| **请求级超时** | 对 stdio MCP 响应读取应用 `timeout_ms`，避免无限阻塞 |
| **进程组清理** | 请求超时时终止服务器进程组（process group），防止僵尸进程 |
| **失败初始化回收** | 初始化失败时清理已派生的子进程，避免资源泄漏 |

**验证结果：**
- `zig build test --summary all` → **7,373 passed, 9 skipped**
- `zig build -Doptimize=ReleaseSmall` → 构建通过

**健康度评估：** 该 PR 修复了潜在的可靠性与资源泄漏问题，是 MCP 集成层走向生产可用的关键一步。**项目整体稳健推进**，但由于尚未合并、Issue 端也未形成讨论，尚未形成社区层面的活跃反馈。

---

## 4. 社区热点

今日无活跃 Issues，无新开 PR 引发讨论，社区热度为近 24 小时最低水平。

- 🔇 Issues 评论数：0
- 🔇 PRs 评论数：0（PR #996 评论区为空）
- 🔇 反应（👍）：0

**分析：** 这并非负面信号——NullClaw 作为相对小众/前沿项目，低频活动日属正常。维护者节奏平稳，Issue 看板干净。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---|---|---|
| 🟡 **中** | **MCP stdio 响应读取无超时控制**（#991）| 已有修复 PR [#996](https://github.com/nullclaw/nullclaw/pull/996)，待合并 |

**细节说明：** 在 MCP 集成场景下，若 stdio 通道的 MCP 服务器无响应或挂起，NullClaw 客户端可能无限等待；同时不会清理已派生的子进程，存在资源泄漏风险。PR #996 引入三重防御（超时、进程组终止、子进程回收）较为彻底地覆盖了相关失败路径。**建议维护者优先合并此 PR 以减少下游使用风险。**

---

## 6. 功能请求与路线图信号

今日无新增功能请求。考虑到：
- 仓库已有 1 条与 MCP 稳定性相关的修复 PR 在流转；
- 测试覆盖率高（7,373 通过）、持续维护 ReleaseSmall 构建优化；

**路线图推断：** MCP 集成（包括 stdio 与可能的 SSE/HTTP 传输层）的可靠性强化，仍是当前阶段的重点方向之一。短期内预计会有更多针对 MCP 边角场景（超时、重连、错误传播）的修复陆续进入。

---

## 7. 用户反馈摘要

由于 Issues 和 PR 评论区今日均无新交互，**暂无可提炼的用户痛点或场景反馈**。

> 建议关注 PR #996 合并后的反馈——它是当前唯一反映真实使用场景的入口（修复来自真实 Issue #991）。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建/更新 | 状态 |
|---|---|---|---|---|
| PR | [#996](https://github.com/nullclaw/nullclaw/pull/996) | fix(mcp): bound stdio response waits | 更新于 2026-09-06 | OPEN，**等待审核** |

**提醒：**
- ⚠️ **PR #996** 为今日唯一活动项，已具备完整测试与构建验证，**建议维护者优先 Review 并合并**，以闭环 Issue #991。
- 📭 Issue 看板为空，无积压；但需确认 #991 之外是否有更长龄的未响应 Issue 未纳入本次数据。

---

## 📊 健康度仪表盘

| 指标 | 数值 | 评价 |
|---|---|---|
| 24h Issue 活动 | 0 | 🟢 安静 |
| 24h PR 活动 | 1（OPEN） | 🟡 低活跃 |
| 待合并 PR | 1 | 🟢 积压极少 |
| 测试通过率 | 7,373 / 7,382 | 🟢 99.85% |
| Release 节奏 | 今日无发布 | ⚪ 无信号 |
| 社区互动 | 0 评论 | ⚪ 无数据 |

**综合评级：🟢 健康 / 低活跃** — 项目处于稳态维护，无异常迹象；建议维护者处理 PR #996 闭环当前唯一活动线索。

---

*本报告由 GitHub 公开数据生成，数据快照时间：2026-09-07。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-09-07**
**项目：IronClaw (github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 项目在 2026-09-06 至 2026-09-07 这 24 小时内整体处于**低强度维护节奏**。PR 活动主要由 dependabot 自动化驱动（9 条 PR 中 7 条为依赖更新），同时提交了 **2 条实质性代码修复 PR**（#8077、#8076），分别针对 MCP 响应泄漏诊断分类与共享频道断连语义区分。当日无 Issue 新增、无 Release 发布，社区互动信号（评论、点赞）均为零。整体活跃度评分：**中等偏下**，项目仍处于稳定的工程迭代与依赖治理阶段，无大规模功能重构迹象。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时内未发布任何 Release tag。建议关注已合并的依赖升级 PR 是否会在后续触发新的版本标记。

---

## 3. 项目进展

今日共 **3 条 PR 被关闭/合并**，全部由 dependabot 自动发起：

| PR | 标题 | 影响范围 | 链接 |
|---|---|---|---|
| #8049 | chore(deps): bump everything-else group（19 项更新） | 通用 Rust 依赖（uuid/base64/toml/rust_decimal 等） | [PR #8049](https://github.com/nearai/ironclaw/pull/8049) |
| #7835 | chore(deps): bump actions group（5 项更新） | GitHub Actions（claude-code-action/setup-node 等） | [PR #7835](https://github.com/nearai/ironclaw/pull/7835) |
| #7020 | chore(deps): bump tokio-tungstenite 0.29→0.30 | tokio-ecosystem 异步 WebSocket 栈 | [PR #7020](https://github.com/nearai/ironclaw/pull/7020) |

**实质性代码修复已提交但尚未合并**，详见第 5 节。整体来看，项目通过批量化依赖滚动更新保持底层组件新鲜度，但尚未推进到功能集成阶段。

---

## 4. 社区热点

**社区互动指标缺失。** 今日 9 条 PR 中：
- 评论数：全部为 0
- 点赞（👍）数：全部为 0

这意味着所有 PR 处于"提交即等待自动检查/维护者评审"状态，**无人工讨论痕迹**。从这一信号可以推断：

- dependabot PR 完全由 CI/维护者流程接管，无社区参与空间；
- 两位人工贡献者（`linhongyu510`、`be-student`）的修复 PR 也尚未吸引审阅反馈，需关注后续是否在 24-48 小时内得到维护者响应。

**值得跟踪的 PR（人工贡献）**：
- [PR #8077](https://github.com/nearai/ironclaw/pull/8077) — fix(mcp): classify response leak diagnostics
- [PR #8076](https://github.com/nearai/ironclaw/pull/8076) — fix(assistant): distinguish disconnected shared channels

---

## 5. Bug 与稳定性

### 5.1 待合并的修复 PR（按影响面排序）

**🔴 中等优先级 | MCP 响应泄漏诊断** 
- **PR #8077** — fix(mcp): classify response leak diagnostics
  - 作者：`linhongyu510`
  - 关闭 Issue：#8009（具体内容未在数据中提供）
  - 内容要点：
    - 在 `ironclaw_host_api::http` 统一 `response_leak_blocked` 哨兵值
    - 教 MCP lane 区分"宿主泄漏阻断"与"MCP 可见原因"
    - 保证安全阻断逻辑的同时保留清晰的诊断分类
  - 链接：[PR #8077](https://github.com/nearai/ironclaw/pull/8077)

> **评估**：该修复同时涉及**安全语义**与**可观测性**，属于值得优先评审的 PR。建议维护者关注其是否破坏现有 MCP host 的下游消费者。

**🟡 中等优先级 | Slack 共享频道断连语义**
- **PR #8076** — fix(assistant): distinguish disconnected shared channels
  - 作者：`be-student`
  - 内容要点：
    - 区分"已配对用户的断连共享频道"与"未配对账号"
    - 为用户消息与 bot 命令渲染频道专属引导
    - 保持拒绝分类在 product / adapter / OpenAI-compatible 表面的一致性
    - 更新 Slack 能力描述
  - 链接：[PR #8076](https://github.com/nearai/ironclaw/pull/8076)

> **评估**：属于产品语义精细化修复，影响面限于 Slack 集成，但涉及多处接口的一致性，需回归测试覆盖。

### 5.2 依赖更新潜在风险

- **PR #7834**（待合并）— wasm 组更新（wasmtime/wasi/wit-component/wit-parser），标记为 **risk: medium**，影响 WASM 沙箱执行链路，建议优先验证。
- **PR #8080**（待合并）— 通用依赖 21 项更新，包含 `base64 0.22→0.23`、`rust_decimal`、`toml` 等，**数量较大**。
- **PR #8079**（待合并）— actions 组更新，包含 `actions/setup-node 4.0.2→7.0.0` 的**主版本跨越**，需确认 CI 兼容性。

---

## 6. 功能请求与路线图信号

**数据缺失。** 今日无 Issue 提交，无法直接观察到用户提出的功能请求。

从已合并的依赖更新与修复方向可以推断项目当前关注点：

| 方向 | 证据 |
|---|---|
| **MCP 协议安全与诊断** | PR #8077 闭环了 Issue #8009，显示 MCP 安全边界是当前迭代主线 |
| **多平台适配器语义一致性** | PR #8076 涉及 Slack + OpenAI-compatible 双表面的同步，反映"统一拒绝语义"可能是中期目标 |
| **底层依赖现代化** | dependabot 批量化更新 + 大版本跨越（setup-node 7.0）暗示正在为下一次功能发布做平台准备 |

---

## 7. 用户反馈摘要

**无用户反馈可提炼。** 今日 Issues 列表为空，PR 评论区无用户互动。无法反映真实痛点、使用场景或满意度。建议在日报周期内增加对 Discussions 区、Discord/社区频道的交叉信号采集，以补全这一维度。

---

## 8. 待处理积压

### 8.1 长期未合并的依赖 PR（需维护者关注）

| PR | 标题 | 创建日期 | 等待天数 | 风险等级 | 链接 |
|---|---|---|---|---|---|
| #7834 | chore(deps): bump wasm group | 2026-08-23 | **15 天** | medium | [PR #7834](https://github.com/nearai/ironclaw/pull/7834) |
| #7020 | chore(deps): bump tokio-tungstenite 0.29→0.30 | 2026-08-02 | **36 天** | low | [PR #7020](https://github.com/nearai/ironclaw/pull/7020) ⚠️（已于 09-06 关闭，但等待时长过长） |

> ⚠️ **提醒**：#7020 等待 36 天后才关闭，提示 dependabot 配置或评审流程存在积压风险。

### 8.2 等待评审的人工贡献 PR

- [PR #8077](https://github.com/nearai/ironclaw/pull/8077)（修复 Issue #8009）
- [PR #8076](https://github.com/nearai/ironclaw/pull/8076)

两条 PR 均提交于 2026-09-06，至日报发布时已等待约 1 天，尚未获得任何反应。建议维护者设定 **48 小时首响 SLA**，避免人工贡献者流失。

### 8.3 健康度建议

1. **依赖治理流程优化**：考虑对 dependabot PR 启用 automerge（通过 CI 即可合并的低风险项）。
2. **Issue 处理周期监控**：连续多日 Issues 为 0 可能意味着社区入口不畅通，建议在 README/Discord 增加 Issue 模板与提交引导。
3. **贡献者响应机制**：为人工 PR 配置 CODEOWNER 自动指派，缩短首次评审时长。

---

*日报生成时间：2026-09-07 | 数据来源：GitHub REST API（nearai/ironclaw）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期**: 2026-09-07
**项目地址**: [netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 项目过去 24 小时整体活跃度**偏低**，仅有一条 Issue 更新且无任何 PR 活动，也未发布新版本。唯一的活跃 Issue (#1068) 被标记为 `[stale]`，表明该 Bug 报告已长期未获维护者响应。综合来看，项目当前处于**维护静默期**，社区动力不足，建议维护者团队关注积压 Issue 并推动响应。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。项目近 24 小时内未发布任何 Release，建议关注 GitHub Releases 页面获取最新动态：[Releases 链接](https://github.com/netease-youdao/LobsterAI/releases)

---

## 3. 项目进展

⚠️ **今日无合并或关闭的 PR**。项目代码层面前进停滞，未观察到任何功能落地或 Bug 修复的提交活动。开发管道 (Development Pipeline) 处于空置状态。

---

## 4. 社区热点

今日社区讨论极为冷淡，唯一活跃 Issue 仅有 1 条评论、0 个点赞（👍），反映出用户参与度有限：

| 排名 | Issue 标题 | 评论数 | 👍 | 状态 | 链接 |
|------|-----------|-------|-----|------|------|
| 1 | Bug: 删除当前的 agent，切换到别的 agent 之后需要自动刷新任务列表 | 1 | 0 | OPEN (stale) | [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068) |

**诉求分析**: 用户期望 Agent 列表与任务列表之间存在**联动刷新机制**。当用户删除或切换 Agent 后，前端 UI 应自动同步展示对应 Agent 的任务，而非保留陈旧数据。这是典型的前端状态管理问题，可能与 React/Vue 等框架的状态同步、事件总线或路由守卫设计相关。

---

## 5. Bug 与稳定性

### 🔴 中等严重度

**Issue #1068**: 删除当前 Agent 后，任务列表未自动刷新
- **严重度评估**: 中等
- **影响范围**: 涉及所有使用多 Agent 切换功能的核心用户
- **具体症状**:
  - 删除当前选中的 Agent 后，切换至其他 Agent 时，任务列表未能自动重新拉取
  - 当系统中仅剩 main agent 时，main agent 的任务列表无法自动加载
- **状态**: `stale`（长期未响应），无对应修复 PR
- **复现证据**: 用户附带两张截图
- **链接**: [#1068](https://github.com/netease-youdao/LobsterAI/issues/1068)

⚠️ **尚无相关 Fix PR 提交**，需要维护者介入排查 UI 状态同步逻辑。

---

## 6. 功能请求与路线图信号

由于近 24 小时无新功能请求提交，且无 PR 活动，**无法从数据中识别明确的路线图信号**。唯一线索是 Issue #1068 间接反映出项目可能存在的 UI 状态管理改进需求，可作为下一版本 UI/UX 优化的参考。

---

## 7. 用户反馈摘要

来自 Issue #1068 的用户反馈（`OnePieceJoker`）：

> **核心痛点**: Agent 删除/切换操作与任务列表展示之间存在**状态不同步**问题
>
> **使用场景**: 用户管理多个 Agent 时的工作流切换
>
> **期望行为**:
> - 切换 Agent 后，任务列表应**立即自动刷新**
> - 删除最后一个自定义 Agent 后，main agent 的任务列表应自动显示
>
> **当前体验**: 用户需手动刷新或重新进入才能看到正确的任务列表

**用户满意度**: 低（1 条评论，0 点赞，stale 标记说明用户也未获得及时反馈）

---

## 8. 待处理积压

🚨 **项目积压问题较为严重**，建议维护者重点关注：

| 序号 | Issue 编号 | 标题 | 创建时间 | 状态 | 链接 |
|------|----------|------|---------|------|------|
| 1 | #1068 | 删除当前 agent 后未自动刷新任务列表 | 2026-03-30 | OPEN (stale) | [查看](https://github.com/netease-youdao/LobsterAI/issues/1068) |

⏰ **积压时长**: 该 Issue 已存在约 **161 天**（从 2026-03-30 至今），远超社区健康响应周期（通常 7-14 天）。

📌 **维护者建议**:
1. 重新评估 #1068 的优先级，分配开发者排查 Agent 切换的状态管理逻辑
2. 启用机器人关闭长期 stale Issue 或迁移至 Discussions
3. 公开项目维护节奏（如发布周期、贡献指南），提升社区透明度

---

## 📊 项目健康度评估

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码提交活跃度 | ⭐☆☆☆☆ | 无 PR，无合并 |
| Issue 响应速度 | ⭐☆☆☆☆ | 核心 Issue 已积压 5 个月+ |
| 社区参与度 | ⭐⭐☆☆☆ | 仅有 1 条评论、0 点赞 |
| 发布节奏 | ⭐☆☆☆☆ | 无新版本发布 |
| **综合健康度** | **🔴 需关注** | 项目进入静默期，建议激活社区运营 |

---

*报告基于 2026-09-07 过去 24 小时的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-07**

---

## 1. 今日速览

Moltis 今日处于**低活跃度的修复性提交期**：过去 24 小时内无新版本发布、无新 Issue 产生、无 PR 被合并，但有 2 个修复型 PR（#1261、#1260）保持 OPEN 状态等待评审，且均在 24 小时内有更新。两位 PR 均来自同一贡献者 `be-student`，主题聚焦于 **TLS 协议配置准确性** 与 **子进程错误诊断精度**，表明项目当前工作在稳定性硬化阶段而非新功能开发。整体节奏稳健但节奏较缓，建议维护者尽快介入评审以推进合入。

---

## 2. 版本发布

**无新版本发布。** 当前仓库在 2026-09-07 无任何 release/tag 变更。

---

## 3. 项目进展

⚠️ **今日无 PR 被合并**，因此严格意义上"项目进展"主要由"待合并的修复工作"构成：

| PR | 标题 | 状态 | 关联 Issue |
|---|---|---|---|
| [#1261](https://github.com/moltis-org/moltis/pull/1261) | fix(tls): restrict ALPN to HTTP/1.1 | OPEN | 修复 #245 |
| [#1260](https://github.com/moltis-org/moltis/pull/1260) | fix(exec): report missing shell accurately | OPEN | 关闭 #279 |

- **TLS 层精度提升**（#1261）：将 ALPN 协议列表收紧至仅 `HTTP/1.1`，避免在尚未支持 RFC 8441 WebSocket over HTTP/2 升级的场景下协议协商出现误导。
- **执行层错误分类修复**（#1260）：修复当 `PATH` 中 `sh` 缺失但当前工作目录存在时，spawn 错误被误判掩盖的回归。
- 推进程度：**净增 0 个已合并 PR**，但 2 个潜在合并已通过本地编译与单元测试验证，等待维护者 ack。

---

## 4. 社区热点

今日 PR/Issue 评论区互动量均为 0，**无显著社区热点**。

- 无评论、无反应（👍 均为 0）、无评审线程活跃。
- 这与仓库整体处于功能收敛期一致，但也提示社区参与度偏低，建议维护者主动 ping 或设置评审 SLA。

---

## 5. Bug 与稳定性

今日提交的两个 PR 实质上都是 Bug 修复，按影响范围排序：

### 🔴 P1 — TLS 协议协商可能误导客户端（修复 #245 → PR #1261）
- **症状**：当前 ALPN 列表中包含 HTTP/2 协议，导致部分客户端尝试通过 HTTP/2 升级 WebSocket，但项目尚未支持该路径。
- **严重度**：中高，可能在生产环境造成连接失败或协议降级异常。
- **修复状态**：✅ 已有修复 PR（[#1261](https://github.com/moltis-org/moltis/pull/1261)），本地 `cargo test -p moltis-tls` 18/18 通过。

### 🟡 P2 — Shell 缺失被静默掩盖（修复 #279 → PR #1260）
- **症状**：当用户在某个存在的目录下执行工具调用，但 `PATH` 中没有 `sh` 时，原代码将 spawn `NotFound` 错误归因为目录问题，掩盖了真实原因。
- **严重度**：中，影响 AI 智能体的可调试性与用户体验（错误信息误导会延缓定位）。
- **修复状态**：✅ 已有修复 PR（[#1260](https://github.com/moltis-org/moltis/pull/1260)），`cargo check -p moltis-tools` 通过；reduced-feature crate 套件 915/916 通过。

---

## 6. 功能请求与路线图信号

虽然没有显式的新功能 Issue，但 #1261 的描述中明确给出了**路线图信号**：

> "advertise only HTTP/1.1 over TLS **until RFC 8441 WebSocket upgrades are supported**"

- **暗示的下一阶段目标**：实现 RFC 8441 WebSocket over HTTP/2 升级。这是一项会改变 ALPN 协商策略的能力，建议纳入后续 milestone。
- **建议维护者**：在合并 #1261 后，单独开一个 tracking issue 跟踪 RFC 8441 支持进展，避免协议约束长期遗留。

---

## 7. 用户反馈摘要

由于今日无新 Issue 评论，证据主要来自两个被关闭 Issue（#245、#279）以及修复 PR 的上下文：

- **可靠性诉求**：用户期望 TLS 握手与子进程执行的错误信息**真实反映根因**，而非被现有目录/协议字段掩盖（见 [#279](https://github.com/moltis-org/moltis/issues/279)）。
- **协议严格性诉求**：用户期望 TLS 层按"真实能力"声明 ALPN，避免对外宣传超出实现范围（见 [#245](https://github.com/moltis-org/moltis/issues/245)）。
- **痛点场景**：典型为 **AI agent 在受限沙箱中调用 shell**，此时 `sh` 可能确实不在 `PATH`，但工作目录存在 → 用户看到的报错与真实故障无关，调试成本陡增。

---

## 8. 待处理积压

| 类别 | 编号 | 标题 | 停留时长 | 风险 |
|---|---|---|---|---|
| PR | [#1261](https://github.com/moltis-org/moltis/pull/1261) | fix(tls): restrict ALPN to HTTP/1.1 | 1 天 | 中：阻塞依赖 HTTP/2 升级的正确协议路径 |
| PR | [#1260](https://github.com/moltis-org/moltis/pull/1260) | fix(exec): report missing shell accurately | 1 天 | 中：影响调试体验 |
| Issue | [#245](https://github.com/moltis-org/moltis/issues/245) | ALPN/协议协商 bug | 历史 Issue | PR 已就绪，待合并 |
| Issue | [#279](https://github.com/moltis-org/moltis/issues/279) | shell 缺失误报 | 历史 Issue | PR 已就绪，待合并 |

**提醒维护者**：两个 PR 修复的 Issue 均为"已有 PR 待合并"状态，请尽快评审；避免在临近发布窗口前积压稳定性修复。

---

### 📊 健康度小结

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 仅 2 个 PR，无 Issue 互动 |
| 稳定性修复 | ⭐⭐⭐⭐☆ | 关键 Bug 已具备修复 PR |
| 社区互动 | ⭐☆☆☆☆ | 无评论、无反应 |
| 版本节奏 | ⭐☆☆☆☆ | 今日无发布 |
| 路线清晰度 | ⭐⭐⭐☆☆ | 协议策略收紧指向 RFC 8441 路径，但未显式追踪 |

> **一句话总结**：Moltis 今日"安静但有序"——TLS 与 exec 两处稳定性修复已就绪，等待评审合入；维护者宜在 24 小时内推进评审，避免稳定性改进成为下一发布版本的瓶颈。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报

**报告日期**：2026-09-07
**数据周期**：过去 24 小时
**仓库**：github.com/agentscope-ai/QwenPaw

---

## 1. 今日速览

CoPaw 项目今日维持高活跃度，过去 24 小时共记录 25 条 Issue 更新（18 条活跃 / 7 条关闭）和 12 条 PR 更新（10 条待合并 / 2 条已关闭），但**无新版本发布**。当前主线围绕 v2.2.0 的多渠道（Telegram / 飞书）体验打磨、Console 侧边栏重构以及若干阻塞性 Bug 修复展开。值得欣慰的是，**两位首次贡献者（Bruce-Yii、kabishou11）一次性提交了 8 个面向 Issue 的修复 PR**，社区贡献力明显增强；但用户集中投诉的"上下文丢失"、"主 Agent 不主动巡检子 Agent"、"停止按钮无效"等高严重度问题仍处于开放状态，整体稳定性承压，建议维护者重点关注。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。距离最近一次发布的 beta 版 v2.2.0-beta.7（2026-09-02，Issue [#7503](https://github.com/agentscope-ai/QwenPaw/issues/7503)）已过 5 天，其 Release Duty 安装验证 Issue 今日被自动关闭，但未见正式版（v2.2.0 稳定版）落地。

---

## 3. 项目进展

### 已关闭 PR（2 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#7163](https://github.com/agentscope-ai/QwenPaw/pull/7163) | feat: refine session thinking and model management | 优化 Agent 内联编辑、模型管理交互（创建时保留 fallback 模型配置） |
| [#2134](https://github.com/agentscope-ai/QwenPaw/pull/2134) | feat(heartbeat): Support configurable heartbeat timeout | 心跳任务支持每运行配置超时（原硬编码 120s 失效场景） |

### 重要的待合并 PR

- **[#7502](https://github.com/agentscope-ai/QwenPaw/pull/7502)** —— **Console 侧边栏与设置体验重设计**，合并中改动较大，引入可配置侧边栏（替代旧 simple/full 模式）、保留 Inbox 与插件注册能力，是 v2.2.x UI 演进的重要里程碑。
- **[#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521)** —— `fix(agent): fold consumed thinking under context pressure`，跟踪 ThinkingBlock ID 并在上下文压力下折叠已消耗的思考内容，直击"上下文丢失 / 长任务崩溃"类痛点。
- **[#7546](https://github.com/agentscope-ai/QwenPaw/pull/7546)** —— 延迟加载未使用的内置 channel 模块，可让纯 Console 工作区免去 `lark_oapi` 等重型 SDK 启动开销（实测可节省数十秒）。
- **[#7547](https://github.com/agentscope-ai/QwenPaw/pull/7547)** —— 修复飞书高优先级句柄卡死时同会话后续消息被误判 "already running" 而丢弃的问题。

**整体评估**：今日合并量虽少（仅 2 条），但社区贡献者已就多个用户高频反馈 Issue 提交了精确修复 PR（见第 5 节），项目向前推进的势能较为充足，关键在于维护者 review 节奏。

---

## 4. 社区热点（评论最多 / 反应最热）

| 排名 | Issue / PR | 评论数 | 热度聚焦 |
|---|---|---|---|
| 🥇 | [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | **8** | 主+多子 Agent 架构下，主 Agent 不主动轮询子 Agent 状态，必须用户问"进度如何"才会查询，长期无反馈时子任务错误无法被发现 |
| 🥈 | [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | **5** | 任务执行中发送新消息触发 409 报错而非进入队列，用户期望排队 |
| 🥉 | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | **4** | 同步调用阻塞事件循环 118–135s，timeout 形同虚设（Windows 启动 / 发消息均卡） |
| 4 | [#6814](https://github.com/agentscope-ai/QwenPaw/issues/6814) | 4 | macOS 打开 Scroll history.db 时 SIGBUS（已关闭） |
| 5 | [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | 3 | UI 字体缩放与文件路径超链接（已关闭，feature 落地） |

**诉求分析**：热点议题集中在两类——**多 Agent 协作可靠性**（轮询、状态同步、任务排队）与**系统稳定性**（事件循环阻塞、SQLite 崩溃、上下文丢失）。这两类问题恰好是用户在生产场景的核心担忧，反映项目正在从"能用"过渡到"稳定能用"的瓶颈阶段。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0 — 严重：可能导致任务彻底失败或数据丢失

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584) ⚠️⚠️ | 模型回复意外从上下文中丢失，导致 AI 行为错乱、陷入 toolcall 死循环。用户标记"非常严重" | 关联 [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579)，尚无 fix PR；[#7521](https://github.com/agentscope-ai/QwenPaw/pull/7521) 部分相关 |
| [#7579](https://github.com/agentscope-ai/QwenPaw/issues/7579) | 助手回复已持久化但后续请求中缺失（空响应症状），qwenpaw-backend 2.2.0 | 无 |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)（已关） | 长上下文早期记录彻底丢失，2.2beta3，长文档工作流致命 | 无 |

### 🟠 P1 — 高：影响主流程

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)（已关） | 停止按钮显示已停止但实际仍在执行，引发 409 报错 | [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) 可缓解 |
| [#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450) | 主 Agent 不主动查询子 Agent 状态 | 无 |
| [#7559](https://github.com/agentscope-ai/QwenPaw/issues/7559) | 任务运行中新消息触发 409 而非入队 | [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) 直接修复 |
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用阻塞事件循环，timeout 失效 | 无 |
| [#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589) | Heartbeat cron 会话反馈循环（消息堆积），导致 Agent 失联约 2 小时 | 无 |

### 🟡 P2 — 中：功能回退 / 体验回退

| Issue | 描述 | 关联 PR |
|---|---|---|
| [#7594](https://github.com/agentscope-ai/QwenPaw/issues/7594)（已关） | 同一任务执行情况重复输出 3 次 | 无 |
| [#7513](https://github.com/agentscope-ai/QwenPaw/issues/7513) | deepseek-v4-pro 对话过程中模型回复与工具调用混合输出 | 无 |
| [#6541](https://github.com/agentscope-ai/QwenPaw/issues/6541) | Scroll 上下文压缩块使用 role=user，触发 DeepSeek MODEL_EXECUTION_ERROR | 无 |
| [#7585](https://github.com/agentscope-ai/QwenPaw/issues/7585) | Telegram 不渲染 Markdown 表格 | [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) ✅ |
| [#7587](https://github.com/agentscope-ai/QwenPaw/issues/7587) | OpenAI-compatible provider 连 WUSRouter 被 Cloudflare 403 | 无 |
| [#7572](https://github.com/agentscope-ai/QwenPaw/issues/7572) | 工具派发层 `_coordinator.py _drain` 吞掉异常栈，无法定位故障 | [#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578) ✅ |
| [#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571) | Agent "记不住"开发规范，反复遗忘约定目录 | 无（属记忆机制问题） |
| [#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548)（已关） | 切换/重启后导航记录丢失 | 无 |

**评估**：共有 3 个 Bug 已有对应修复 PR 待合并（[#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577)、[#7578](https://github.com/agentscope-ai/QwenPaw/pull/7578)、[#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590)），建议加速 review。**最严重的上下文丢失类问题（#7584/#7579）目前无 fix**，是稳定性最大风险点。

---

## 6. 功能请求与路线图信号

### 已有 PR 直接对接的 Feature Request（最有可能进入下一版本）

| Feature | Issue | 修复 PR | 状态 |
|---|---|---|---|
| 恢复 v2.1.0 主工作目录直接输入路径切换 | [#7588](https://github.com/agentscope-ai/QwenPaw/issues/7588) | [#7593](https://github.com/agentscope-ai/QwenPaw/pull/7593) | 待合并 |
| Telegram 流式结束后清理中间消息 | [#7586](https://github.com/agentscope-ai/QwenPaw/issues/7586) | [#7592](https://github.com/agentscope-ai/QwenPaw/pull/7592) | 待合并，默认关闭 |
| 飞书流式卡片思考完成后自动折叠 | [#7570](https://github.com/agentscope-ai/QwenPaw/issues/7570) | [#7591](https://github.com/agentscope-ai/QwenPaw/pull/7591) | 待合并 |

### 高价值但尚无 PR 的请求

| Feature | Issue | 价值评估 |
|---|---|---|
| 等待子 Agent 任务完成的阻塞式内置 Tool | [#7580](https://github.com/agentscope-ai/QwenPaw/issues/7580) | **高**，可彻底解决 #7450 的轮询不可靠问题 |
| 与 AgentScope 社区联动（登录 / 反馈 / 信箱） | [#7583](https://github.com/agentscope-ai/QwenPaw/issues/7583) | 中，长期生态战略 |
| 插件商店一键更新与更新通知 | [#7582](https://github.com/agentscope-ai/QwenPaw/issues/7582) | 中，多设备用户痛点 |
| UI 字体缩放与文件路径超链接 | [#4077](https://github.com/agentscope-ai/QwenPaw/issues/4077) | 中，已关闭（可能已实现） |

**路线图判断**：从 Bruce-Yii 一次性提交 4 个对接 Feature 的 PR 看，维护者对**多渠道输出体验**正在进行集中打磨，**v2.2.x 后续小版本**很可能吸收 #7590/#7591/#7592/#7593 全部内容。`wait_for_agent_task`（#7580）是结构性补强，有望成为 v2.3 候选。

---

## 7. 用户反馈摘要

**真实用户痛点（来自评论与描述）**：

- 🗣️ **rerbin**（[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)）："GPT-SOL 跑长任务时长时间没动静，必须用户主动问才会查询子 Agent 状态——子 Agent 失败也不汇报。" —— 反映出**多 Agent 自治调度**是用户最关心的能力。
- 🗣️ **rerbin**（[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)）："两篇 160 页中文 Word 文档做 OCR 校对，3 天后昨天中午之前的上下文全没了。" —— 表明在**长会话持久化**层面尚有硬伤。
- 🗣️ **xjbsenkfi**（[#7584](https://github.com/agentscope-ai/QwenPaw/issues/7584)）："助手回复已持久化但后续请求看不到自己刚说的话，陷入 toolcall-工具结果丢失-再次 toolcall 死循环。" —— **生产场景的极端负反馈**。
- 🗣️ **xiaohushi512**（[#7571](https://github.com/agentscope-ai/QwenPaw/issues/7571)）："插件开发时反复约定目录规则，过两天就忘了，ABC 路径到处生成 TODO。" —— 反映 **Agent 长期规则遵循**仍是难题。
- 🗣️ **HeSSD**（[#7548](https://github.com/agentscope-ai/QwenPaw/issues/7548)）："快速导航记录切会话/重启后丢失。" —— **历史记录 UI 与持久层的脱节**。
- 🗣️ **sakanamaru**（[#7589](https://github.com/agentscope-ai/QwenPaw/issues/7589)

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期：2026-09-07**
**仓库：github.com/qhkm/zeptoclaw**

---

## 1. 今日速览

ZeptoClaw 今日整体处于**高强度安全加固期**，单日合并/关闭 3 个关键 PR、关闭 4 个相关 Issue，全部集中在 P0/P1 安全修复方向。维护者 qhkm 正在系统性地清理由深度架构评审（2026-09-06 Hermes 对比评审）暴露出的子进程凭据泄露与权限降级路径。项目活跃度评级：**高**。需要注意的是，仍有 5 个 Dependabot 依赖升级 PR 自 2026-06-03 起悬而未决，约 3 个月未合并，存在明显的维护积压信号。

---

## 2. 版本发布

今日无新版本发布。最近的版本节点未在本次数据中体现，安全修复通过主干提交落地。

---

## 3. 项目进展

今日有 3 个 PR 完成合并/关闭，全部为安全相关：

| PR | 标题 | 解决问题 | 意义 |
|---|---|---|---|
| [#672](https://github.com/qhkm/zeptoclaw/pull/672) | fix(security): scrub inherited env in plugin/MCP spawn sites (P0 #660) | 插件与 MCP 服务器子进程曾继承父进程完整环境，导致 API key、token、数据库连接串泄露 | 补齐 P0 #660 的最后三处未清理 spawn 点（binary_plugin / mcp transport / channel plugin），与运行时层面清理形成完整闭环 |
| [#671](https://github.com/qhkm/zeptoclaw/pull/671) | fix(security): fail closed on invalid agent_mode (P0 #659) | 未知/拼错 agent_mode 字符串会回退到 `Autonomous`（最大权限），与"安全默认值"语义完全相反 | 改为回退到 `Assistant` 并告警，无效值永不再升级权限 |
| [#645](https://github.com/qhkm/zeptoclaw/pull/645) | fix(runtime): scrub subprocess secrets and reap timed-out process trees | 运行时 shell 命令继承完整环境；超时未可靠终止并回收子进程树；Docker 容器在超时后泄漏 | 修复了 [#644](https://github.com/qhkm/zeptoclaw/issues/644) 的核心问题，是 #672 的运行时层基础 |

**整体推进评估**：项目在「子进程环境隔离」这一安全主题上完成了端到端修补——从运行时层（#645）到所有 spawn 点（#672），加上 agent_mode 的 fail-closed 行为（#671），构成完整的纵深防御闭环。安全姿态向前实质性迈进一步。

---

## 4. 社区热点

| 条目 | 评论数 | 状态 | 链接 |
|---|---|---|---|
| Issue #646（CI Clippy + cargo-deny 修复） | 3 | 已关闭 | [qhkm/zeptoclaw#646](https://github.com/qhkm/zeptoclaw/issues/646) |
| Issue #664（代理能力继承） | 1 | 开放 | [qhkm/zeptoclaw#664](https://github.com/qhkm/zeptoclaw/issues/664) |
| 其他 4 条 Issue | 0–1 | 已关闭 | — |

**讨论分析**：
- **#646** 是今日唯一评论数超过 1 的条目，主题为恢复 Clippy 与 cargo-deny 在当前工具链下的 CI 检查，间接驱动了 quick-xml 0.39.2 与 lopdf 0.40.0 漏洞版本的清理。
- **#664** 是今日唯一新开的安全相关 Issue（评论 1 条），作者 qhkm 本人，反映社区讨论相对平静，主要是维护者主动规划而非外部用户驱动。

整体而言，今日的 Issue 活动几乎全部由维护者内部推动，**外部社区参与度极低**——所有 5 条 Issue 的作者均为 qhkm，PR 方面 5/8 由 dependabot[bot] 提交。

---

## 5. Bug 与稳定性

| 严重度 | 条目 | 问题摘要 | 是否有 Fix PR |
|---|---|---|---|
| **P1 (Critical)** | [#644](https://github.com/qhkm/zeptoclaw/issues/644) bug(safety): scrub subprocess environments and terminate process trees on timeout | 运行时子进程继承完整环境可能暴露无关凭据；超时未可靠终止与回收子进程树 | ✅ [#645](https://github.com/qhkm/zeptoclaw/pull/645) 已关闭 |
| **P1 (Critical)** | [#646](https://github.com/qhkm/zeptoclaw/issues/646) chore(ci): Clippy 5 个新告警 + cargo-deny 拒绝 quick-xml 0.39.2 / lopdf 0.40.0 | Rust 1.97.1 引入的新告警与依赖漏洞影响 CI 基线 | 已关闭（修复内容由依赖升级 PR 覆盖，见 §6） |
| **P1 (Critical)** | [#660](https://github.com/qhkm/zeptoclaw/issues/660) [P0][security] Centralize child-process env scrubbing across all spawn sites | runtime/native、binary_plugin、mcp/transport、channel/plugin 四处构造子 Command 但未做 `env_clear()` | ✅ [#672](https://github.com/qhkm/zeptoclaw/pull/672) 已关闭 |
| **P1 (Critical)** | [#659](https://github.com/qhkm/zeptoclaw/issues/659) [P0][security] Fail closed on invalid agent_mode | `agent_mode.rs:147–160` 对无效配置回退到 Autonomous，最大权限方向错误 | ✅ [#671](https://github.com/qhkm/zeptoclaw/pull/671) 已关闭 |

**总结**：今日报告/触及的 4 个 Bug/安全问题均已通过 PR 闭环修复，无未修复的高严重度缺陷遗留。

---

## 6. 功能请求与路线图信号

今日虽无外部用户功能请求，但维护者主动提出了一个新的安全需求方向：

- **[#664](https://github.com/qhkm/zeptoclaw/issues/664) [M][safety] Delegated-agent capability inheritance — children must not exceed parent policy**（P2，开放）
  - **需求核心**：当前 ZeptoClaw 已有较完善的委托机制（`src/tools/delegate.rs:32–53`, `153–250`, `254–358`，含子会话、并发执行、递归阻断），但**策略继承**存在缺口——委托工具可能拥有超出来自身父代理权限的能力。
  - **路线图信号**：作者在 Exec #6 + §5 "Subagents and delegation" 中已规划，这是继本次环境清理后下一个明确的安全加固方向。
  - **纳入下版本的可能性**：高。这是安全路线图第二阶段（策略继承）的开始，预期会延续 P0 风格的系统性修复路径。

其余 5 个依赖升级 PR（[#617](https://github.com/qhkm/zeptoclaw/pull/617)、[#620](https://github.com/qhkm/zeptoclaw/pull/620)、[#623](https://github.com/qhkm/zeptoclaw/pull/623)、[#625](https://github.com/qhkm/zeptoclaw/pull/625)、[#627](https://github.com/qhkm/zeptoclaw/pull/627)）均来自 dependabot，自 2026-06-03 开放至今约 3 个月未见合并，建议维护者批量合并——尤其是 **tokio 1.52.1 → 1.52.3** 与 **serde_json 1.0.149 → 1.0.150**（后者含非字符串 enum object key 拒绝的兼容性变化，需关注）。

---

## 7. 用户反馈摘要

今日 Issue 评论数据极少（总计约 5 条评论），且全部来自维护者内部：

- **#664（1 条评论）**：维护者本人对策略继承缺口的设计澄清，未包含外部用户痛点。
- **#646（3 条评论）**：CI 工具链修复的内部讨论。
- **#644 / #659 / #660（0–1 条评论）**：安全修复描述，无外部反馈。

**结论**：今日**无外部用户反馈流入**。这与 Issue 作者全部为 qhkm 一致，表明过去 24 小时社区处于静默状态。维护者可能需要主动通过 release notes、文档更新或社区渠道公布本次 P0 修复成果，以提升项目可见度与外部贡献意愿。

---

## 8. 待处理积压

| 类型 | 条目 | 创建日期 | 等待时长 | 备注 |
|---|---|---|---|---|
| 依赖升级 PR | [#627](https://github.com/qhkm/zeptoclaw/pull/627) serde_json 1.0.149→1.0.150 | 2026-06-03 | ~3 个月 | 含兼容性行为变更，建议评估 |
| 依赖升级 PR | [#625](https://github.com/qhkm/zeptoclaw/pull/625) rpassword 7.4.0→7.5.2 | 2026-06-03 | ~3 个月 | Unicode 解析修复 |
| 依赖升级 PR | [#623](https://github.com/qhkm/zeptoclaw/pull/623) tokio 1.52.1→1.52.3 | 2026-06-03 | ~3 个月 | 运行时关键依赖，建议优先合并 |
| 依赖升级 PR | [#620](https://github.com/qhkm/zeptoclaw/pull/620) scraper 0.26.0→0.27.0 | 2026-06-03 | ~3 个月 | 主版本升级，需 review |
| 依赖升级 PR | [#617](https://github.com/qhkm/zeptoclaw/pull/617) tower-http 0.6.10→0.6.11 | 2026-06-03 | ~3 个月 | 小版本补丁 |
| 功能 Issue | [#664](https://github.com/qhkm/zeptoclaw/issues/664) 代理能力继承 | 2026-09-05 | 1–2 天 | P2 安全路线图，建议尽快进入设计 |

**维护者建议**：
1. 集中清理 5 个 Dependabot PR，建议作为单一 PR 合入或批量关闭；
2. #664 已明确为下一步路线图，建议在 1–2 周内提交对应实现 PR；
3. 鉴于今日完成一轮系统性 P0 修复，建议发布 patch 版本（如 0.x.y+1）以便用户升级。

---

### 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 安全响应速度 | ★★★★★ | P0/P1 安全问题当日闭环，端到端覆盖到位 |
| 维护者活跃度 | ★★★★★ | 单日 3 PR 关闭 + 4 Issue 关闭，高强度推进 |
| 外部社区参与 | ★☆☆☆☆ | 全部 Issue 由维护者本人开立，无外部贡献 |
| 依赖治理 | ★★☆☆☆ | 5 个 Dependabot PR 积压 3 个月未处理 |
| 文档透明度 | ★★★★☆ | 修复 PR 摘要清晰，引用具体行号与文件路径 |

**总体判断**：项目处于「内部高强度安全迭代、外部参与度待提升」的状态。技术债主要在依赖治理端，建议下一周期重点处理 Dependabot 积压与 #664 路线图落地。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-07

---

## 1. 今日速览

ZeroClaw 项目今日保持高活跃度，过去 24 小时共更新 **33 条 Issue**（3 条已关闭）与 **50 条 PR**（6 条已合并/关闭），**无新版本发布**。讨论焦点高度集中在 **架构级 RFC 的密集修订**（运行时会话、WASM 插件、附件架构、沙箱策略）以及 **多类 S1 级运行时 Bug**（daemon 栈溢出、ACP 转录丢失、后台委托安全等）。项目当前处于 **v0.8.5 稳定化收尾阶段**，问题侧维护者决策队列与 RFC 投票流程优化同步推进，整体节奏"讨论活跃、合并保守"，健康度评估为 **稳健但拥塞**。

---

## 2. 版本发布

**今日无新版本发布。** 当前在制品版本为 **v0.8.5 有限周稳定线**（#9459），原计划于 2026-08-30 完成收尾，目前仍处于维护阶段。

---

## 3. 项目进展

今日明确合并/关闭的项较少，但其中体现了重要的稳定性修复与文档补全：

| 类型 | 编号 | 标题 | 意义 |
|---|---|---|---|
| ✅ PR 已关闭 | [#10487](https://github.com/zeroclaw-labs/zeroclaw/pull/10487) | fix(channels/matrix): resolve transcription providers from live config | 修复 Matrix 通道转录 provider 解析逻辑（原快照式解析导致 typed 配置丢失） |
| ✅ Issue 已关闭 | [#9575](https://github.com/zeroclaw-labs/zeroclaw/issues/9575) | Warm OpenAI-compatible connections through /models | 改进 OpenAI 兼容 provider 的 warmup 策略（改打 `/models` 而非 `/chat/completions`） |
| ✅ Issue 已关闭 | [#9653](https://github.com/zeroclaw-labs/zeroclaw/issues/9653) | plugin wasi:http trusts only bundled webpki roots | 修复 WASM 插件 egress HTTPS 信任根（对齐 #6528 引入的平台证书库策略） |
| ✅ Issue 已关闭 | [#10572](https://github.com/zeroclaw-labs/zeroclaw/issues/10572) | Document the WeCom (WeChat Work) channel | 补齐企业微信通道文档（good first issue，已落地） |
| 📝 PR 新提交 | [#10668](https://github.com/zeroclaw-labs/zeroclaw/pull/10668) | fix(ci): scope Windows tests for locale resources | 对接 #7462 Windows 测试缺陷治理 |
| 📝 PR 新提交 | [#10671](https://github.com/zeroclaw-labs/zeroclaw/pull/10671) | fix(daemon): accept channel instance composite key in heartbeat.target | 直接修复同日报告的 #10670 |

**整体评估**：推进幅度有限，主要以"小颗粒补丁 + 重磅 RFC 讨论"为主，未见重大功能合入。

---

## 4. 社区热点

按评论数排序，今日讨论最热烈的议题：

| 排名 | 编号 | 标题 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 🥇 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | **34** | 将"会话"概念从 WebSocket 提升为运行时一等公民，定义 transport adapter 接口；已进入 Revision 5 投票快照 |
| 🥈 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture | **27** | 统一文件/附件架构，消除不同 conversation surface 的分裂；已迭代至 Revision 10 |
| 🥉 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy - filesystem restrictions | **25** | 在应用层 `SecurityPolicy` 与 OS 层 sandbox (Bubblewrap/Landlock/Seatbelt) 之间建立精细化文件系统策略映射 |
| 4 | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | [Bug]: 74 test failures on Windows | **19** | Windows 11（代码页 936）下 74 项测试失败，CI 仅在 Linux 跑测试无法捕获；暴露跨平台缺口 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | [Tracker]: Maintainer decision queue for RFCs and design issues | **15** | 集中管理 RFC 与设计 Issue 的维护者决策队列，避免设计项被遗忘 |

**背后趋势**：社区正在推动 ZeroClaw 从"通道-消息"思维转向"会话-适配器-运行时"的架构骨架，多个 RFC 互为前置依赖（如 #10526 作为 #10076 的事件词汇权威源），显示项目处于一次系统性架构升级周期。

---

## 5. Bug 与稳定性

按严重程度排列今日报告/活跃的 Bug：

### 🔴 S1 - 工作流阻塞（critical）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#10230](https://github.com/zeroclaw-labs/zeroclaw/issues/10230) | Daemon startup or reload can overflow during agent initialization | ❌ in-progress，无 PR |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | Incomplete terminal responses can be reported as successful | ✅ [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)（分类 incomplete terminal responses） |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent jobs have no wall-clock timeout | ❌ in-progress，无 PR |
| [#10670](https://github.com/zeroclaw-labs/zeroclaw/issues/10670) | heartbeat.target rejects a channel instance composite key | ✅ [#10671](https://github.com/zeroclaw-labs/zeroclaw/pull/10671)（同日提交） |
| [#10659](https://github.com/zeroclaw-labs/zeroclaw/issues/10659) | Budget-exceeded Code turn loses visible progress after session restore | ❌ 无 PR |
| [#10644](https://github.com/zeroclaw-labs/zeroclaw/issues/10644) | bind background delegate results to an owner principal | ❌ 无 PR |
| [#10635](https://github.com/zeroclaw-labs/zeroclaw/issues/10635) | Runtime profile cost limit does not reflect effective global daily budget | ❌ 无 PR |
| [#10617](https://github.com/zeroclaw-labs/zeroclaw/issues/10617) | thinking display "updates" returns 400 on Claude Fable 5.1 | ❌ 无 PR |

### 🟡 S2 - 行为降级（major）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 74 test failures on Windows | ✅ [#10668](https://github.com/zeroclaw-labs/zeroclaw/pull/10668) 部分跟进 |
| [#10302](https://github.com/zeroclaw-labs/zeroclaw/issues/10302) | ZeroCode Code pane stays in Processing state while browsing history | ❌ 无 PR |

**稳定性观察**：今日新开 5 条 S1 Bug，全部与**委托执行、ACP 转录持久化、provider 协议兼容、daemon 状态机**相关，呈"信任边界与持久化层"系统性脆弱迹象。

---

## 6. 功能请求与路线图信号

新提交/活跃的 Feature 需求：

| 编号 | 标题 | 已有 PR 跟进 | 进入下一版本概率 |
|---|---|---|---|
| [#7759](https://github.com/zeroclaw-labs/zeroclaw/issues/7759) | Decouple gateway WebSocket lifetime from agent turn | 暂未匹配 PR（属 #9487 RFC 子集） | ⭐⭐⭐⭐（依赖 RFC 落地） |
| [#10426](https://github.com/zeroclaw-labs/zeroclaw/issues/10426) | Show user-facing agent progress in Telegram | ❌ 无 PR | ⭐⭐（单一通道） |
| [#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) | Expose delegate sub-agent progress to the parent | ❌ 无 PR | ⭐⭐⭐ |
| [#6932](https://github.com/zeroclaw-labs/zeroclaw/issues/6932) | Persist gateway WebSocket sessions as full conversation transcripts | ❌ 无 PR | ⭐⭐⭐ |
| [#9345](https://github.com/zeroclaw-labs/zeroclaw/issues/9345) | Recalculate PR risk and size labels on every update | ❌ 无 PR | ⭐⭐（治理类） |
| [#10580](https://github.com/zeroclaw-labs/zeroclaw/issues/10580) | Docs links gate catches dangling internal links | ❌ 无 PR | ⭐⭐⭐⭐（CI gate 修复） |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting process | ❌ 无 PR | ⭐⭐（流程类，影响节奏） |
| [#10660](https://github.com/zeroclaw-labs/zeroclaw/issues/10660) | Third cache breakpoint on previous turn's last message | ❌ 无 PR | ⭐⭐⭐⭐（成本优化直接收益） |

**信号判断**：与 Anthropic 缓存命中策略相关（#10660、#10662）的优化很可能成为 v0.8.5+ 的首批"低成本高收益"补丁；WebSocket 会话转录化（#6932、#7759）则受 #9487 RFC 阻塞，需等架构决议。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中提炼的真实痛点：

- **跨平台体验断裂**（#7462）：Windows 11（Simplified Chinese, 代码页 936）用户跑测试 74 项失败，CI 未覆盖，开发者无法信任本地构建；用户**强烈呼吁** Linux/macOS/Windows 三平台 CI 一致性。
- **Telegram 通道"静默感"**（#10426）：长搜索/工具调用期间 Telegram 频道无任何提示，用户误判"卡死"，要求 **可配置的进度消息**。
- **委托子代理黑盒**（#10531、#10644、#10645）：父 agent 对子 agent 执行进度不可见、结果所有权不明、成本预算未传递；用户希望"看得见、调得动、算得清"。
- **ACP/ZeroCode 转录不完整**（#10659、#9421、#10197、#9378）：中断/失败/cancelled turn 丢失可见进度，恢复会话后用户**看不到先前工作**；需要原子 checkpoint + 失败 turn 持久化。
- **Claude Fable 5.1 thinking 显示兼容**（#10617）：`thinking.display="updates"` 在最新 Claude 模型上返回 400，enum 被收窄，反映 **provider 协议演进的跟进步伐问题**。
- **成本预算可见性差**（#10635、#10645）：用户看到 `max_cost_per_day_cents=4294967295`（实际无界）却被 `$10` 全局 ledger 拒绝，反馈"配置与运行时口径不一致"。
- **文档与代码脱节**（#10572、#10580）：企业微信通道已实现但**完全无用户文档**；docs CI 仅校验增量链接导致存量断链静默腐烂。

**满意度集中在**：provider 兼容性扩展（Hailo-Ollama #9109）、cache 策略精细化（#10660、#10662）等"贴近开发者体验"的改进。

---

## 8. 待处理积压

下列重要 Issue/PR 已长时间未推进，提醒维护者关注：

| 编号 | 标题 | 创建日期 | 距今天数 | 风险 |
|---|---|---|---|---|
| [#6932](https://github.com/zeroclaw-labs/zeroclaw/issues/6932) | Persist gateway WebSocket sessions as full conversation transcripts | 2026-05-25 | **105 天** | 与 #7759、#9487 强相关，被 RFC 阻塞但本身已 accepted |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) | feat(providers): add native Hailo-Ollama support | 2026-07-17 | 52 天 | 标记 `do-not-merge`、risk:high、size:XL，长期搁置 |
| [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | feat(sessions): add persistent session prompt attachments | 2026-08-27 | 11 天 | `needs-author-action`，size:XL，需快速推进或归档 |
| [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447) | fix(anthropic): classify incomplete terminal responses | 2026-07-27 | 42 天 | 对接 S1 #9421，长期 in-progress + needs-author-action |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | fix(delegate): bounded delegate filesystem tools respect target's workspace | 2026-08-26 | 12 天 | 安全类关键 PR，`needs-author-action`、risk:high |
| [#9739](https://github.com/zeroclaw-labs/zeroclaw/pull/9739) | feat(zerocode): multi-session panes with agent sidebar | 2026-08-04 | 34 天 | 由 maintainer 接手修复，但仍 size:XL 未合 |
| [#10016](https://github.com/zeroclaw-labs/zeroclaw/pull/10016) | fix(hooks): correlate webhook audit calls by identity | 2026-08-15 | 23 天 | 安全审计关键，需 maintainer review |
| [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | feat(agent): carry live provider identity on usage events | 2026-07-11 | **58 天** | context meter ceiling 长期错误的修复，被 `needs-author-action` 卡住 |

**风险提示**：#9109（XL/高风险，Hailo-Ollama 原生支持）与 #8966（context meter 错误）已悬挂 50+ 天，建议维护者明确归档/重启/拒绝决策，避免误导贡献者持续迭代。

---

> 📊 **日报小结**：ZeroClaw 当前处于 **架构升级讨论密集 + 稳定性治理并行** 的关键阶段，RFC 修订（#9487/#9488/#10076/#10526）与 S1 委托/ACP 安全问题（#10644、#10659）是下一阶段的两条主线。维护者需警惕 **3 条悬挂 50 天以上的 XL PR** 与 **决策队列积压**，建议优先推动 cost/visibility 类小颗粒修复（#10660、#10635、#10645）以快速建立交付节奏。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*