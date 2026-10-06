# OpenClaw 生态日报 2026-10-06

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-06 04:19 UTC

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

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比日报

**报告日期**：2026-10-06
**样本范围**：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、Moltis、CoPaw、ZeroClaw、TinyClaw、ZeptoClaw（13 个项目）

---

## 1. 生态全景

截至 2026-10-06，AI 智能体 / 个人 AI 助手开源生态已进入**"基础设施收敛 + 垂直分化"**的关键拐点：一方面，**Skills（SKILL.md）、MCP 协议、Sendblue iMessage 通道、Calendar Versioning、Provider 抽象层**等核心概念在 5 个以上项目中同时出现，呈现事实标准化的趋势；另一方面，各项目基于自身基因走向明显分化——NanoBot/Hermes Agent 押注多通道与多代理编排，NanoClaw/ZeroClaw 走向严谨的发布治理与安全沙箱，Moltis/LobsterAI 围绕技能与凭据管理深化。**值得关注的是维护可持续性的两极分化**：头部项目（NanoClaw、ZeroClaw、CoPaw）日处理 20–50 个 PR，而 PicoClaw/TinyClaw/ZeptoClaw 等已进入"社区自发 fork 接管"或"完全静默"状态，**社区已不再容忍"机器人关闭代替维护者响应"**。

---

## 2. 各项目活跃度对比

| 项目 | 今日 Issues | 今日 PRs | 新版本 | 健康度 | 关键观察 |
|---|---|---|---|---|---|
| **OpenClaw**（参照）| n/a | n/a | n/a | 🔵 参照基线 | SKILL.md frontmatter 解析被多个项目对位兼容（见 LobsterAI #2800） |
| **NanoBot** | 5 | 24（17 待/7 闭）| ⚪ 无 | 🟢 **健康** | P1 安全修复待合并，Token 可观测性诉求累积 2 个月 |
| **Hermes Agent** | 50（48 开/2 闭）| 50（44 待/6 闭）| ⚪ 无 | 🟡 **活跃但承压** | Teknium 主导的"Pain Cluster"集中修复阶段 |
| **PicoClaw** | 4 | 5 | ⚪ 无 | 🔴 **停滞** | 安全披露缺失、社区 Fork 声明浮现（#3398） |
| **NanoClaw** | 1 | 20（12 闭/8 待）| 🚀 **v2026.10.0-rc.2** | 🟢 **高健康** | CalVer 首发，OneCLI 升级链路 4 PR 闭环 |
| **NullClaw** | 13（8 开/5 闭）| 25（14 开/11 闭）| ⚪ 无 | 🟡 **整理期** | CLI/容器/调度器三方向关键修复落地，但 5.7 个月未发版 |
| **IronClaw** | 2 | 2 | ⚪ 无 | 🟡 **低活跃高质量** | WebChat 后台标签页状态修复 PR 自提自修 |
| **LobsterAI** | 25（18 闭）| 6（3 合/3 待）| ⚪ 无 | 🟡 **安全信号密集** | main 分支集中披露 4 个中高危漏洞，全部已配 fix PR |
| **Moltis** | 2 | 2 | ⚪ 无 | 🟢 **稳定但窄** | 单贡献者驱动（tomachianura） |
| **CoPaw / QwenPaw** | 41 | 22 | ⚪ 无 | 🟢 **高健康** | Issue ↔ PR 关联度高（多在 1–7 天闭环） |
| **ZeroClaw** | 24 | 50（5 闭/45 待）| ⚪ 无 | 🟡 **活跃偏载** | S0 数据丢失同日修复，v0.8.6/v0.9.0 双线推进 |
| **TinyClaw** | 0 | 0 | ⚪ 无 | ⚫ **静默** | 24h 无活动 |
| **ZeptoClaw** | 0 | 0 | ⚪ 无 | ⚫ **静默** | 24h 无活动 |

> **统计注**：今日仅 **NanoClaw** 有 Release（v2026.10.0-rc.2），**整体处于"代码入仓、临近发版窗口"**的高吞吐状态。

---

## 3. OpenClaw 在生态中的定位

虽然今日未提供 OpenClaw 的内部数据，但从横向证据可推断其定位：

| 维度 | OpenClaw 的角色 | 证据 |
|---|---|---|
| **事实标准制定者** | `SKILL.md` frontmatter 解析规范被多项目对位兼容 | LobsterAI #2800 显式声明"align ... with OpenClaw" |
| **技能生态中心** | Resend / FXMacroData / Sendblue 等技能在多项目同步出现 | NanoBot #6081、NanoClaw #4043、IronClaw #8127、PicoClaw #3416 同日提交 Sendblue |
| **凭据/安全模型参考** | LobsterAI #2797"OpenClaw token proxy"是已知漏洞命名实体 | 说明 OpenClaw 的 proxy/auth 设计被广泛借鉴 |
| **生态分叉源头** | NanoClaw、PicoClaw、NanoBot、NullClaw 等命名与定位高度相似 | 推测均属 OpenClaw 同源衍生项目 |

**核心差异**：OpenClaw 倾向于作为**稳定参考系**，而 NanoBot/Hermes Agent/NanoClaw 等衍生项目在 WebUI、Desktop、MCP、Provider 抽象等维度做差异化推进——**生态呈"一源多支"格局**。

---

## 4. 共同关注的技术方向

下表为**至少 2 个项目同时涌现**的需求/修复方向，反映行业级共识：

| 方向 | 涉及项目 | 代表 Issue/PR | 共识度 |
|---|---|---|---|
| **Sendblue iMessage/SMS 通道** | NanoBot #6081、NanoClaw #4043、IronClaw #8127、PicoClaw #3416 | 同一日 4 个项目同步提交 | ⭐⭐⭐⭐⭐ |
| **Skills / SKILL.md 健壮性** | NanoBot（多通道技能）、LobsterAI #2800（对齐 OpenClaw）、Moltis #1292/1293（YAML frontmatter 引号）、NanoClaw #4042（Resend pin 升级）| YAML 转义、版本固定、跨项目兼容 | ⭐⭐⭐⭐⭐ |
| **MCP 协议安全与超时** | NanoBot #6065/#6069（DNS pinning/超时）、Hermes Agent 多条、CoPaw #8051（422 降级 streamable_http） | 超时硬编码、协议降级、DNS rebinding | ⭐⭐⭐⭐⭐ |
| **Token 消耗可观测性** | NanoBot #5266（15 评论/2 个月）、CoPaw 多 provider 维度 | 自托管用户对"静默烧钱"的集体焦虑 | ⭐⭐⭐⭐ |
| **macOS / Desktop 体验** | NanoClaw #4021（launchd 时序）、NullClaw #970（REPL 方向键）、Hermes Agent #122928 / #133628（Windows ENOBUFS）| 跨平台一致性与后端稳健性 | ⭐⭐⭐⭐ |
| **Cron / 调度器可靠性** | NanoBot #6070/#6071（重新调度竞态）、NullClaw #1033（永久阻塞）、Hermes Agent #113342/#127775 | 任务互踩、归因错乱、空闲误报 | ⭐⭐⭐⭐ |
| **多 Provider 能力差异探测** | CoPaw #8090（GPT-6 max_tokens）、#8050（DST 时区）、NanoClaw #3925/3930（provider wrapper）、Moltis #1027（thinking capability 表）| "按能力降级"代替"按名硬编码" | ⭐⭐⭐⭐ |
| **国际化 / CJK / RTL** | NanoBot #6073（CJK 行高）/#6075（数学公式溢出）、Hermes Agent #40239（pt-BR）/ #131043（ko） | 非英语用户占比抬升 | ⭐⭐⭐ |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户画像 | 技术架构关键差异 |
|---|---|---|---|
| **NanoBot** | WebUI + 多通道 + MCP 集成 | 自托管个人助手使用者 | 围绕 WebUI 体验打磨、CJK/数学公式适配 |
| **Hermes Agent** | Kanban 多代理编排 + Desktop + Bot Delivery | 高级用户 / 团队协作场景 | 4 层 Bot Delivery store、Pain Cluster 集中修复方法论 |
| **NanoClaw** | OneCLI 升级链路严谨性 + CalVer 发布治理 | 偏运维的生产环境用户 | **首个采用日历版本号**（CalVer），与 OneCLI 1.42/1.43 强耦合 |
| **NullClaw** | Zig 实现 + CLI/REPL + 调度器 | 追求小体积、原生性能的开发者 | Zig 0.16.0、cron-scoped bearer 加密落盘、provider curl pinning |
| **IronClaw** | WebChat PWA + 基准透明度 | 重视可视化与质量指标的用户 | officeqa 基准失败分类日报、NearAI 生态 |
| **LobsterAI** | 桌面端 + Skills + 安全披露 | 中文桌面用户、关注供应链安全者 | 18 个内置服务商槽位、与 OpenClaw 技能兼容 |
| **Moltis** | 多通道（Discord/Telegram）+ 共享聊天身份 | 协作机器人部署者 | per-sender MCP credentials 架构演进 |
| **CoPaw / QwenPaw** | 多 Provider 适配 + Agent 自动化 | 模型重度用户 / 开发者 | Issue ↔ PR 闭环最快（1–7 天）、AI Submission 实践 |
| **ZeroClaw** | 沙箱链路 + RPC parity + SOP/Colony | 关注安全与企业级一致性的高级用户 | Firejail/bubblewrap 三 bug 同步修复、per-agent 工具作用域 |
| **PicoClaw** | （停滞） | — | 社区已自发 Fork（afjcjsbx/picoclaw）形成事实标准转移 |

---

## 6. 社区热度与成熟度分层

### 🟢 快速迭代层（高吞吐 + 强闭环）
- **CoPaw**：41 Issues / 22 PRs，Issue→PR 关联率最高
- **ZeroClaw**：24 / 50，双版本线（v0.8.6 + v0.9.0）并行推进
- **NanoClaw**：1 / 20 + RC.2 发布，发布治理范式转换
- **NanoBot**：5 / 24，P1 安全修复 + WebUI 系统化打磨
- **Hermes Agent**：50 / 50，底层重构 + Pain Cluster 集中暴露

### 🟡 质量巩固层（活跃度降、稳定性升）
- **NullClaw**：13 / 25，CLI/容器/调度器三方向关键修复合入，5.7 个月无新版本
- **LobsterAI**：25 / 6，安全研究员驱动的高密度漏洞披露与修复
- **IronClaw**：2 / 2，低活跃但每条 PR 质量高
- **Moltis**：2 / 2，单贡献者深度参与

### 🔴 风险/停滞层
- **PicoClaw**：依赖 stale 机器人 > 维护者响应，社区 fork 已成事实
- **TinyClaw / ZeptoClaw**：24h 完全无活动，需关注是否进入归档

---

## 7. 值得关注的趋势信号

### 🔥 趋势 1：技能系统（Skills）成为跨项目事实标准
- LobsterAI 主动对齐 OpenClaw 的 `SKILL.md` 解析、Moltis 发现 frontmatter YAML 转义缺陷、NanoClaw 升级 Resend 技能 pin、NanoBot 集成 Sendblue/FXMacroData
- **开发者启示**：技能正成为"AI 智能体应用层的事实分发单元"——设计 Skills 时应同时考虑**YAML 鲁棒性、版本固定、与多个宿主兼容**

### 🔥 趋势 2：Sendblue iMessage 同步集成爆发
- 4 个项目**同日**提交 Sendblue PR（NanoBot #6081、NanoClaw #4043、IronClaw #8127、PicoClaw #3416）
- **开发者启示**：iMessage/SMS 是个人 AI 助手"必须覆盖"的最后一块拼图，可作为**项目完成度指标**

### 🔥 趋势 3：Provider 抽象层从"配置驱动"走向"能力驱动"
- CoPaw、Moltis、NanoClaw 同步提出"按能力探测、按需降级"模式（thinking capability 表、max_tokens 路由、streamable_http 降级）
- **开发者启示**：硬编码"模型名 → 参数表"已不可持续，应建立 **capability introspection 层**

### 🔥 趋势 4：发布治理范式转变
- **NanoClaw 率先采用 CalVer（v

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-06

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) ｜ 统计周期：过去 24 小时

---

## 1. 今日速览

NanoBot 今日呈现**高活跃的维护与功能迭代状态**：过去 24 小时共产生 5 条 Issue 更新和 24 条 PR 更新（17 待合并 / 7 已关闭），覆盖 **Bug 修复、安全加固、WebUI 优化、Memory/Cron 稳定性、新通道与 MCP 集成**等多个方向，体现出多线并行的开发节奏。值得注意的是，社区对**Token 消耗透明度**的诉求持续累积（[#5266](https://github.com/HKUDS/nanobot/issues/5266) 已 15 条评论且仍未关闭），同时一条 **P1 级安全修复**（[#6069](https://github.com/HKUDS/nanobot/pull/6069)）处于待合并状态，建议维护者优先审阅。整体来看，项目仍处于快速演进期，无新版本发布，说明当前变更尚在主线集成与回归验证阶段。

---

## 2. 版本发布

⚪ **无新版本发布**。当前所有变更均在主干分支上集成、尚未打 tag。

---

## 3. 项目进展

过去 24 小时内共有 **7 条 PR 关闭**，涵盖 Bug 修复、WebUI 体验打磨与 API 增强：

| PR | 类型 | 说明 |
|---|---|---|
| [#6066](https://github.com/HKUDS/nanobot/pull/6066) | Bug fix (p2) | **修复 MCP streamable HTTP 读超时硬编码 30s** 的问题，使其能覆盖 `MCPServerConfig.tool_timeout`（修复 [#6065](https://github.com/HKUDS/nanobot/issues/6065)） |
| [#6060](https://github.com/HKUDS/nanobot/pull/6060) | Bug fix (p2) | **修复 XLSX 文档读取**：openpyxl 之前会丢弃 `usedRange` 之外的单元格，现已能正确读取并支持 grep |
| [#6075](https://github.com/HKUDS/nanobot/pull/6075) | WebUI fix (p2) | **宽幅数学公式自适应布局**：去掉水平滚动条和点击展开，窄屏/缩放下不再被截断 |
| [#6073](https://github.com/HKUDS/nanobot/pull/6073) | WebUI fix | **修复 CJK 行高被 `:root` 覆盖**的问题，恢复中/日/韩 Markdown 的 1.8 行高，平衡中英换行 |
| [#6074](https://github.com/HKUDS/nanobot/pull/6074) | WebUI feat (p2) | **统一 WebUI 图标体系**：导航/命令/权限/工具/子代理状态使用不同 SVG 图标，并统一交互反馈 |
| [#6076](https://github.com/HKUDS/nanobot/pull/6076) | Test (p2) | **隔离 Star 邀请测试状态**，稳定 Windows Python 3.14 CI 中子代理结果的等待逻辑 |
| [#5299](https://github.com/HKUDS/nanobot/pull/5299) | API feat (conflict) | 暴露结构化 token 使用记录（`/api/settings/usage/records`），与主线存在冲突，已被关闭——后续需重新对账后提交 |

**整体评价**：今日合并侧重**稳定性 + 国际化体验**，包括长任务超时（#6066）、XLSX 数据完整性（#6060）、WebUI 多语言显示（#6073）。这些都不是"炫目"的新特性，但显著提升了日常使用中的可靠性，是项目走向成熟期的典型信号。

---

## 4. 社区热点

按评论数与讨论深度排序：

### 🥇 #5266 — [Logs about token consumption](https://github.com/HKUDS/nanobot/issues/5266) — **15 条评论**
- 类型：Enhancement ｜ 状态：**OPEN** ｜ 持续时间：近 2 个月
- 用户 **knoppix2** 报告 nanobot 在用户"无明显操作"的 2 小时内消耗了**百万级 tokens**，希望增加按调用粒度的 token 消耗日志，便于定位异常调用
- 与已关闭的 [#5299](https://github.com/HKUDS/nanobot/pull/5299)（结构化 token usage records）形成天然对应：社区有诉求，PR 已被实现并因冲突关闭，**这是一个值得维护者重启并重点合并的诉求**

### 🥈 #6065 — [MCP streamable HTTP fixed 30s read timeout](https://github.com/HKUDS/nanobot/issues/6065) — **1 条评论，已快速闭环**
- 用户 **wkdddd** 报告 streamable HTTP 客户端硬编码 30s 读超时，与 `tool_timeout` 配置脱节
- 由 [#6066](https://github.com/HKUDS/nanobot/pull/6066) 当日完成修复并关闭，体现**高效的 issue→PR 联动**

### 较新的关注点
- [#6079](https://github.com/HKUDS/nanobot/issues/6079) — 群消息观察与回复的解耦（dmerkert 提出概念性需求，目前 0 评论但思路清晰）
- [#6078](https://github.com/HKUDS/nanobot/issues/6078) — heartbeat 通知评估器使用独立模型 preset（同一作者，方向一致）

---

## 5. Bug 与稳定性

按严重程度排序（结合优先级标签与影响范围）：

| 严重度 | Issue / PR | 描述 | 是否有修复 PR |
|---|---|---|---|
| 🔴 **P1 安全** | [#6069](https://github.com/HKUDS/nanobot/pull/6069) | DNS pinning 在 HTTPX 传入 bytes 主机名时 `str(b"...")` 退化为 `"b'...'"` 字符串，导致对比失败、回退到原始解析器，**存在 DNS rebinding 风险** | ✅ PR 已就位待合并 |
| 🟠 **功能失效** | [#6070](https://github.com/HKUDS/nanobot/issues/6070) | Cron 任务执行期间被重新调度时，**当前执行的完成回调会"消费"掉新计划**——一次性任务被禁用/删除，循环任务被错误推迟一个周期 | ✅ [#6071](https://github.com/HKUDS/nanobot/pull/6071) |
| 🟠 **数据丢失** | [#6060](https://github.com/HKUDS/nanobot/pull/6060) | XLSX 中 `usedRange` 之外的单元格被静默丢弃，影响预览、`read_file`、`grep` | ✅ 已关闭 |
| 🟡 **超时配置无效** | [#6065](https://github.com/HKUDS/nanobot/issues/6065) | MCP streamable HTTP 读超时硬编码 30s | ✅ [#6066](https://github.com/HKUDS/nanobot/pull/6066) 已关闭 |
| 🟡 **会话恢复** | [#6033](https://github.com/HKUDS/nanobot/pull/6033) | 更新 handle metadata 会使运行时 sidecar 失效 | ✅ PR 待合并 |
| 🟡 **内存整合** | [#6064](https://github.com/HKUDS/nanobot/pull/6064) | 手动 / 定时 Dream 并发时，新写入的 memory 会被旧 run 回退 | ✅ PR 待合并 |
| 🟢 **历史 P2** | [#4819](https://github.com/HKUDS/nanobot/pull/4819) | `WeakValueDictionary` 在 GC 后导致 consolidation lock 失效 | ⚠️ 已开放近 3 个月 |
| 🟢 **历史 P2** | [#4820](https://github.com/HKUDS/nanobot/pull/4820) | 非字符串 URL 被 `str(...) or ""` 强转为缓存签名 | ⚠️ 已开放近 3 个月 |

**整体稳定性观察**：Bug 修复链路整体健康——**多数 issue 当日就关联并完成 PR**，但仍有 [#4819](https://github.com/HKUDS/nanobot/pull/4819) 与 [#4820](https://github.com/HKUDS/nanobot/pull/4820) 两条 P2 修复 PR 自 7 月起积压，需要维护者关注。

---

## 6. 功能请求与路线图信号

| 需求方向 | 链接 | 状态 | 落地可能性 |
|---|---|---|---|
| **Token 消耗可观测性** | [#5266](https://github.com/HKUDS/nanobot/issues/5266) | OPEN，已有关联 PR #5299 关闭 | ⭐⭐⭐⭐ 高度可能，PR 已存在仅需对账 |
| **群消息观察/回复解耦** | [#6079](https://github.com/HKUDS/nanobot/issues/6079) | OPEN，新提出 | ⭐⭐⭐ 方向明确，架构层面调整 |
| **Heartbeat 评估器独立模型** | [#6078](https://github.com/HKUDS/nanobot/issues/6078) | OPEN，新提出 | ⭐⭐⭐ 与 #6079 同源设计 |
| **Sendblue iMessage/SMS 通道** | [#6081](https://github.com/HKUDS/nanobot/pull/6081) | OPEN，含配置文档 | ⭐⭐⭐⭐ PR 已就绪 |
| **FXMacroData MCP 预设** | [#6068](https://github.com/HKUDS/nanobot/pull/6068) | OPEN | ⭐⭐⭐ 无需 API Key，可能快速合并 |
| **WebUI 本地可信扩展** | [#6032](https://github.com/HKUDS/nanobot/pull/6032) | OPEN（security 标签） | ⭐⭐⭐ 涉及安全模型，需设计审核 |
| **MCP per-server 代理开关** | [#6072](https://github.com/HKUDS/nanobot/pull/6072) | OPEN（conflict 标签） | ⭐⭐⭐ 与现有网络层有冲突需协调 |
| **WebUI 显示 gateway commit** | [#6080](https://github.com/HKUDS/nanobot/pull/6080) | OPEN | ⭐⭐⭐⭐⭐ 小改动 |
| **定时任务绑定聊天** | [#6057](https://github.com/HKUDS/nanobot/pull/6057) | OPEN | ⭐⭐⭐⭐ 体验类改进 |

**路线图信号**：可以看到 PR 作者 **wkdddd** 与 **chengyongru** 是当前最活跃的两位贡献者，分别承担 **MCP 协议安全/网络层** 和 **WebUI 体验打磨** 的工作。下一版本若能合并：
- 安全侧：#6069（P1）、#6067（MCP 日志凭证泄露防护）
- 体验侧：#6080、#6075、#6073
- 新能力：#6081（Sendblue）、#6068（FXMacroData）

即可构成一个"**安全加固 + 体验打磨 + 新通道**"的稳健小版本。

---

## 7. 用户反馈摘要

从公开 Issue 评论可提炼以下真实用户痛点：

1. **"看不见的烧钱"** —— 用户 **knoppix2**（[#5266](https://github.com/HKUDS/nanobot/issues/5266)）反映后台静默消耗大量 token，**没有任何可观察的指标**告诉用户是哪个调用在哪一分钟花的钱。这对自托管 / 个人付费用户尤其敏感，是潜在的商业化阻碍。
2. **"配置写了不生效"** —— **wkdddd**（[#6065](https://github.com/HKUDS/nanobot/issues/6065)）明确表达对 `tool_timeout` 被覆盖的不满，体现用户对**配置一致性**的期待：暴露给用户的参数必须在底层真正生效。
3. **"数据不完整"** —— XLSX 读取问题（[#6060](https://github.com/HKUDS/nanobot/pull/6060)）暗示用户在用 nanobot 处理真实业务表格，**数据完整性是底线**。
4. **"国际化体验"** —— CJK 行高（[#6073](https://github.com/HKUDS/nanobot/pull/6073)）与数学公式溢出（[#6075](https://github.com/HKUDS/nanobot/pull/6075)）显示社区存在**大量非英语用户**，WebUI 已开始系统性地处理这些细节。
5. **"架构清晰度"** —— **dmerkert** 连续提出 [#6078](https://github.com/HKUDS/nanobot/issues/6078) 与 [#6079](https://github.com/HKUDS/nanobot/issues/6079) 两个概念性 issue，对**心跳评估、群消息

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**：2026-10-06
**数据周期**：过去 24 小时
**项目仓库**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 项目在 2026-10-06 维持**高强度开发与社区反馈节奏**：过去 24 小时共有 50 条 Issue 更新（48 仍开放，2 条已关闭）和 50 条 PR 更新（44 待合并，6 已合并/关闭），但**无新版本发布**，说明当前迭代处于"修复 + 内部打磨"窗口而非发版窗口。议题与 PR 的热度集中在 **Kanban 多代理编排稳定性**（yoyodine-industries 一个人就贡献了 15+ 相关 PR）、**Desktop 应用细节打磨**、**i18n 多语言补齐**（葡语、韩语）以及**多处"痛点集群"问题**（更新失败无恢复路径、429 凭据冷却无重置探测）。维护团队 Teknium 本人直接发起的多个 P1/P2 Pain Cluster Issue 提示项目正处于**"集中暴露系统性问题 + 集中修"**阶段。整体健康度评估：**活跃但承压**，需关注积压与"痛点集群"修复进度。

---

## 二、版本发布

⚠️ **无新版本发布**。最近一次正式发版情况未在本次数据中显示，但多个 Issue 引用了 `v0.21.5`、`v2026.7.1` 等版本字符串，说明当前仍在 0.21.x / 2026.7.x 主线迭代中。

---

## 三、项目进展

过去 24 小时共有 **6 条 PR 合并或关闭**（占 PR 总量的 12%）。由于数据仅列出"评论最多"的 20 条 PR，被合并的 PR 多为早期的修复类 commit，主要进展方向如下：

| 方向 | 代表 PR | 推进点 |
|---|---|---|
| Bot 投递链路稳定化（4 层系列）| [#115003](https://github.com/NousResearch/hermes-agent/pull/115003)、[#115009](https://github.com/NousResearch/hermes-agent/pull/115009)、[#115010](https://github.com/NousResearch/hermes-agent/pull/115010)、[#115013](https://github.com/NousResearch/hermes-agent/pull/115013) | 重构 Bot Chat owner-mailbox 投递存储，4 层系列（Liveness、Lease 队列、Receipt 去重、全 profile drain）大部分已合并 |
| Kanban 可靠性 | [#118500](https://github.com/NousResearch/hermes-agent/pull/118500)、[#118421](https://github.com/NousResearch/hermes-agent/pull/118421)、[#118290](https://github.com/NousResearch/hermes-agent/pull/118290) | 跨 board 运行任务计数、删除/重建 board 防护、单行 poison 隔离等 |
| Cron 与测试隔离 | [#113342](https://github.com/NousResearch/hermes-agent/pull/113342)、[#113345](https://github.com/NousResearch/hermes-agent/pull/113345) | 关闭时区分 interrupted vs error；测试不污染线上 Hermes home |
| i18n 补齐 | [#131043](https://github.com/NousResearch/hermes-agent/pull/131043)（韩语） | Dashboard 100%、Desktop core chrome 已并入 |

**整体评估**：今日主要在**底层可靠性层**（bot-delivery store、kanban dispatch、cron attribution）向前推进，**用户可见功能**侧仅有 i18n 韩语完整覆盖一项落地。**没有大型 UI/CLI 新特性合入**，符合"修底层 + 准备下一波发版"的节奏。

---

## 四、社区热点

### 4.1 讨论最活跃的 Issues（按评论数）

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | **14** | 4 | **Desktop 葡萄牙语（pt-BR）i18n 完整支持**（P3，needs-decision） |
| 2 | [#122349](https://github.com/NousResearch/hermes-agent/issues/122349) | 9 | 1 | **插件 runtime 状态导致无限 sync/rebuild/re-exec 循环** |
| 3 | [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) | 7 | 1 | **更新失败留下半安装状态 + 无产品内恢复路径（Pain Cluster，5 种机制/15 条 Discord 求助）** |
| 3 | [#21521](https://github.com/NousResearch/hermes-agent/issues/21521) ✅ 已关闭 | 7 | 0 | `oauth_minimax` 未处理 auth_type 警告 |
| 3 | [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) | 7 | 1 | **Kanban 编排问题汇总**：陈旧检测、静默恢复、孤儿清理、子代理监督 |
| 3 | [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | 7 | 1 | **ContextCompressor 把小会话撑大**，触发快速再压缩与分裂 |

### 4.2 诉求分析

- **本地化诉求强烈**：葡语单条 Issue 拿到 14 评论 + 4 👍（本周最多），与同期的韩语 PR（[#131043](https://github.com/NousResearch/hermes-agent/pull/131043)）形成"用户呼声 → 实现落地"的清晰闭环。
- **系统级痛点被显式化**：Teknium 本人发起的 [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) 和 [#132817](https://github.com/NousResearch/hermes-agent/issues/132817) 是"Pain Cluster"类型，用结构化方式汇总 13~15 个重复报告，提示维护者**正在主动暴露并集中修复**复发问题。
- **Kanban 多代理**仍是社区最关心的"高级功能"焦点（[#35986](https://github.com/NousResearch/hermes-agent/issues/35986) + 多条 PR）。

---

## 五、Bug 与稳定性

### 5.1 P1（最高严重度）

| # | 标题 | 组件 | 状态 |
|---|---|---|---|
| [#120051](https://github.com/NousResearch/hermes-agent/issues/120051) | **WhatsApp 群聊静默反而触发警告消息** | gateway, telegram/discord/whatsapp | OPEN，无 fix PR。沉默守卫将 `NO_REPLY` 转成 `⚠️ 模型只返回了 silence marker` 的提示，破坏原本"沉默即沉默"的语义 |

### 5.2 P2（高严重度，需尽快修复）

| # | 标题 | 组件 | 是否有 fix PR |
|---|---|---|---|
| [#125437](https://github.com/NousResearch/hermes-agent/issues/125437) | 更新失败无产品内恢复 | cli, desktop | ❌ 暂无 |
| [#122928](https://github.com/NousResearch/hermes-agent/issues/122928) | macOS Desktop 长跑后端通过 PYTHONPATH 把已废弃 venv 漏给子进程 | cron, desktop, terminal | ❌ 暂无 |
| [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | ContextCompressor 反向膨胀小会话 | agent, sessions | ❌ 暂无 |
| [#63395](https://github.com/NousResearch/hermes-agent/issues/63395) | Matrix cron 投递成功后数据库池停转、刷错误日志 | plugins, matrix | ❌ 暂无 |
| [#132817](https://github.com/NousResearch/hermes-agent/issues/132817) | **一次 429 让凭据冷却数天**（Pain Cluster，13 报告） | agent, cli, auth | ❌ 暂无 |
| [#56634](https://github.com/NousResearch/hermes-agent/issues/56634) | terminal `bash -l` 在 Debian 镜像丢失 venv PATH | terminal, docker | ❌ 暂无（5 评 / 3 👍，社区重视度高） |
| [#131578](https://github.com/NousResearch/hermes-agent/issues/131578) | 子代理后台进程完成把聊天路由回运行中的子代理，导致 30 分钟卡死 | gateway, terminal, delegate | ❌ 暂无 |
| [#118283](https://github.com/NousResearch/hermes-agent/pull/118283) | compression 把 authored-prose 工具参数截到 200 字头 | 已有 fix PR | ✅ |
| [#115771](https://github.com/NousResearch/hermes-agent/pull/115771) | drain turn 必须在目标 lane scope 内运行 | 已有 fix PR | ✅ |
| [#115453](https://github.com/NousResearch/hermes-agent/pull/115453) | cron job 自身失败归因到错的 provider | 已有 fix PR | ✅ |
| [#113342](https://github.com/NousResearch/hermes-agent/pull/113342) | cron 被关闭中断被错误记为 error | 已有 fix PR | ✅ |
| [#133569](https://github.com/NousResearch/hermes-agent/issues/133569) | Desktop "显示更早消息" 按钮成死按钮 | desktop, sessions | ❌ 暂无 |
| [#133628](https://github.com/NousResearch/hermes-agent/issues/133628) | **Windows Desktop 后端宕机后渲染端无 backoff 重连，约 20 小时 ENOBUFS 风暴** | desktop, windows | ❌ 暂无（影响整个 Windows 主机） |
| [#118421](https://github.com/NousResearch/hermes-agent/pull/118421) | Kanban board DB 被删/替换不应被静默重建 | 已有 fix PR | ✅ |
| [#118294](https://github.com/NousResearch/hermes-agent/pull/118294) | hub-authenticated peer-send API | 已有 feature PR | ✅ |

### 5.3 P3（常规严重度，桌面体验为主）

- [#102081](https://github.com/NousResearch/hermes-agent/issues/102081) Linux Desktop 启动长错误日志
- [#132981](https://github.com/NousResearch/hermes-agent/issues/132981) Desktop macOS composer 拼写检查已废、持久缩放破坏坐标
- [#133620](https://github.com/NousResearch/hermes-agent/issues/133620) Desktop 切换 profile 后侧边栏状态错位
- [#133568](https://github.com/NousResearch/hermes-agent/issues/133568) Desktop composer 斜杠命令后丢失尾随空格
- [#133523](https://github.com/NousResearch/hermes-agent/issues/133523) Desktop 陈旧 build-stamp.json 永不被刷新
- [#127775](https://github.com/NousResearch/hermes-agent/issues/127775) Cron 误报"空闲 3 秒（限 600 秒）"
- [#129622](https://github.com/NousResearch/hermes-agent/issues/129622) 1Password service-account token 无法 fill
- [#129455](https://github.com/NousResearch/hermes-agent/issues/129455) 默认安装下 PM 激活触发 home_io_guard 导致测试套件广失败
- [#124359](https://github.com/NousResearch/hermes-agent/issues/124359) Windows 测试套件的工作目录污染、kanban worker 状态泄漏

**整体判断**：P2 Bug 池子深且大部分**还没有 fix PR**。好消息是 Kanban / Bot-delivery / Compression 三个系列已经开始有专门 PR 对位修复；坏消息是 Desktop Windows 平台体验、Pain Cluster（更新失败恢复 + 429 凭据冷却）这一类**影响用户的关键路径**问题目前**无人接手**，建议维护者优先关注。

---

## 六、功能请求与路线图信号

### 6.1 i18n / 本地化（最确定落地）

- [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) **葡萄牙语（pt-BR）桌面端完整支持**（14 评论 / 4 👍）：后端、TUI 已具备 357+ 行翻译，UI 落地是临门一脚。
- [#131043](https://github.com/NousResearch/hermes-agent/pull/131043) **韩语（ko）Dashboard + Desktop 完整化**已合并。

### 6.2 Kanban 编排可靠性（路线图核心）

- [#35986](https://github.com/NousResearch/hermes-agent/issues/35986) Kanban 编排问题 umbrella 涵盖：**陈旧检测、静默恢复、孤儿清理、子代理监督**。这是 Teknium 自己点名要补齐的"可靠性"清单。
- [#118500](https://github.com/NousResearch/hermes-agent/pull/118500) 跨 board 计数（合并中）—— 对位其中"全局上限"需求。

### 6.3 文档 / 代码一致性

- [#130077](https://github.com/NousResearch/hermes-agent/issues/130077) 3 处 doc/code 不一致（skills tier、memory 路径、session-recall 文案）。**纯文档修复**，低风险，应优先合并。

### 6.4 旗舰型长期特性（远期信号）

- [#35325](https://github.com/NousResearch/hermes-agent/issues/35325) **五层 Context Pipeline + Plan-Mode**，对标 Claude Code 与 Codex 的核心代理能力。社区声量较低（1 评论），属于"维护者愿景级"路线图信号。
- [#122444](https://github.com/NousResearch/hermes-agent/issues/122444) **CLI 长跑编排会话的 native self-wake heartbeat**，让代理循环脱离人类轮询。
- [#75711](https://github.com/NousResearch/hermes-agent/issues/75711) **多 Hermes 实例共 Telegram 群**（Jetson / DGX 集群场景）。
- [#133658](https://github.com/NousResearch/hermes-agent/pull/133658) 插件目录新收录 "Alan's Way"（主动型主机器人）。

**判断**：未来 1~2 个版本的可见交付物很可能是**Kanban 可靠性 + 多语言完整化 + Desktop 体验收尾**；Pain Cluster（更新恢复、429 凭据管理）很可能成为下一发版的强制项。

---

## 七、用户反馈摘要

| 痛点 | 来源 | 情绪 |
|---|---|---|
| **更新失败后无任何自助恢复**，用户得在 Discord 群里手敲命令 | [#125437](https://github.com/NousResearch/hermes-agent/issues/125437)（15 条 Discord 求助） | 😡 强烈不满 |
| **一次 429 让凭据"挂起几天"**，且产品无任何提示/重置入口 | [#132817](https://github.com/NousResearch/hermes-agent/issues/132817)（13 报告） | 😡 强烈不满 |
| **WhatsApp 群聊沉默不再沉默**：原本应安静的 bot 突然回复"⚠️ 模型只返回了 silence marker"，破坏群聊礼仪 | [#120051](https://github.com/NousResearch/hermes-agent/issues/120051) | 😟 不满 |
| **多 profile 下 `hermes cron list` 只显示当前 profile**，导致不同 agent profile 互相误诊对方的 cron 故障 | [#132920](https://github.com/NousResearch/hermes-agent/issues/132920) | 😐 困惑 |
| **Desktop Windows 后端宕机后渲染端无 backoff，~20h ENOBUFS 把整台 Windows 拖垮** | [#133628](https://github.com/NousResearch/hermes-agent/issues/133628) | 😡 强烈不满 |
| **ContextCompressor 反向膨胀**：小会话被压成更大的摘要，触发快速再压缩、分裂 | [#23811](https://github.com/NousResearch/hermes-agent/issues/23811) | 😟 性能/稳定性担忧 |
| **多 Hermes 实例在同 Telegram 群内协同**：边缘设备 DGX Spark / Jetson Thor / AGX Orin 集群场景，尚未支持 | [#75711](https://github.com/NousResearch/hermes-agent/issues/75711) | 😐 探索型 |
| **葡语用户对本地化呼声高**：14 评论 + 4 👍 | [#40239](https://github.com/NousResearch/hermes-agent/issues/40239) | 😊 期待 |
| **Discord voice 绑定生命周期**追踪（[#132474](https://github.com/NousResearch/hermes-agent/issues/132474) 已关闭）| 改进方向明确 | 中性 |

**最一致的负面情绪**：更新失败后的**可恢复性**和**错误提示质量**。这是当前最易劝退新

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-10-06**
**数据来源：github.com/sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日整体处于**低响应、低产出**状态，过去 24h 内 Issues 与 PRs 总计 9 条更新，但**全部标注为 `[stale]`**，且无任何新版本发布。社区活跃度主要由外部贡献者驱动，多个提交者（如 x1F916、afjcjsbx）集中反馈**项目维护停滞**、**安全漏洞披露渠道缺失**和**可靠性问题积压**等问题。最值得关注的信号是 Issue #3398 中社区主动建立的"活跃 Fork"声明，叠加 #3405 私有漏洞报告请求和 #3404 可靠性修复合集，提示项目的**维护可持续性**已成为社区首要担忧。

---

## 2. 版本发布

⚠️ 今日无新版本发布。距离上一版本（v0.3.1）已有一段时间，结合 PR #3370、#3347 等被标注为 stale 的合并请求积压情况，建议关注维护者后续是否会针对社区修复批次发布 v0.3.2 或 v0.4.0。

---

## 3. 项目进展

| 类型 | 编号 | 标题 | 状态 |
|---|---|---|---|
| PR | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): assemble IRCv3 multiline messages | 🟢 已关闭 |
| Issue | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | [Feature] Add support for OpenAI compatible providers | 🔴 已关闭 |

**分析：**
- PR #3354（IRCv3 `draft/multiline` 接收支持）由 [linhongyu510](https://github.com/sipeed/picoclaw) 提交，于 2026-08-31 创建后超过一个月无响应，最终被 stale 机器人关闭。**项目整体未向前推进 IRC 多行消息能力**。
- Issue #3366（OpenAI 兼容提供者支持）同样被关闭后无实质性结果。然而，下方社区热点显示，**用户对该能力的诉求仍然强烈**（见 #3397 关于 Tsubasa 目录项的请求）。

**结论：项目今日没有正向推进任何功能模块，被关闭的 PR/Issue 多因 stale 机制而非维护者主动决策，进展属于"停滞状态"。**

---

## 4. 社区热点

### 🔥 最值得关注的讨论

| 热度 | 编号 | 标题 | 评论 / 👍 |
|---|---|---|---|
| ⭐⭐⭐ | [#3405](https://github.com/sipeed/picoclaw/issues/3405) | Please enable private vulnerability reporting | 1 / 1 |
| ⭐⭐⭐ | [#3404](https://github.com/sipeed/picoclaw/issues/3404) | Reliability fixes with reproducers (wave 1) | 1 / 0 |
| ⭐⭐⭐ | [#3398](https://github.com/sipeed/picoclaw/issues/3398) | [Notice] Active Fork & Continued Maintenance: afjcjsbx/picoclaw | 1 / 0 |
| ⭐⭐ | [#3397](https://github.com/sipeed/picoclaw/issues/3397) | [Feature] Add Tsubasa to the existing OpenAI-compatible provider catalog | 1 / 0 |

**诉求分析：**

1. **安全漏洞披露渠道缺失（#3405）**：用户 x1F916 指出仓库未启用 GitHub Private Vulnerability Reporting，也没有 `SECURITY.md`，无法私下报告安全问题。这反映了**项目治理层面的缺口**。

2. **可靠性问题集中爆发（#3404）**：同一用户 x1F916 在 `main` 分支（bbf6893）和 v0.3.1 上复现了 agent loop、channels manager、config、updater 等核心模块的多处 bug，并指出"此前的问题/PR 因 stale 机器人关闭而无人 review"。**这是项目健康度的重大信号**。

3. **社区主动 Fork 声明（#3398）**：用户 afjcjsbx 公开声明已建立并主动维护活跃分叉 `afjcjsbx/picoclaw`。这是社区对**主仓库维护停滞**的实质性回应。

4. **OpenAI 兼容目录扩展（#3397）**：用户 cenab 请求将 Tsubasa 添加到 provider picker 的目录中，配合 #3366 的关闭，体现**生态扩展诉求未得到满足**。

---

## 5. Bug 与稳定性

### 🔴 严重（核心功能，多模块受影响）

**[#3404 Reliability fixes with reproducers (wave 1)](https://github.com/sipeed/picoclaw/issues/3404)**
- **报告者**：x1F916（外部贡献者，主动复现）
- **影响模块**：agent loop、channels manager、config、updater（核心模块）
- **复现版本**：main (bbf6893)、v0.3.1
- **状态**：⚠️ **无 fix PR 提交**，仅有报告合集
- **严重程度**：⭐⭐⭐⭐⭐
- **特别说明**：用户提到部分问题此前已有报告或修复，但因 stale 机制被关闭。这是**稳定性债务集中爆发**的标志。

### 🟡 中等（已有用户感知修复）

**[#3347 fix laggy interface](https://github.com/sipeed/picoclaw/pull/3347)**
- **作者**：iMilnb（非 TS/Node 开发者，自述"通过分析与修复"）
- **内容**：修复 Web UI 在聊天内容多时的卡顿问题
- **测试情况**：已在 desktop/mobile Brave 浏览器测试 `picoclaw-launcher`
- **状态**：⚠️ **PR 仍为 OPEN，自 2026-08-27 起 stale**，超过一个月未获维护者 review

**总结：可靠性问题集中在核心模块，但维护者响应几乎为零，依赖社区自维护 fork（#3398）成为现实风险。**

---

## 6. 功能请求与路线图信号

| 编号 | 请求 | 状态 | 路线图可能性 |
|---|---|---|---|
| [#3416](https://github.com/sipeed/picoclaw/pull/3416) | Sendblue iMessage/SMS 传输层 | PR 今日新开 | 🟡 中等 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | Keenable 网络搜索 provider | PR stale | 🟢 高（仅需配置） |
| [#3397](https://github.com/sipeed/picoclaw/issues/3397) | Tsubasa 加入 OpenAI 兼容目录 | Issue stale | 🟡 中等 |

**分析：**

- **PR #3416（Sendblue）**：今日新开，附带了完整的免费账户注册、人类手机/联系人验证、模型先决条件、密钥配置和 webhook 注册指南，是**质量较高的 PR**，值得优先 review。
- **PR #3370（Keenable）**：声称"无需 API key 即可使用"，集成门槛低，但自 9 月 7 日起 stale。
- **#3397（Tsubasa）**：作为 #3366 的衍生诉求，反映 OpenAI 兼容生态扩展需求持续。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的社区声音：

- 🔴 **"仓库看起来处于无人维护状态"** —— 来自 #3398，反映维护可持续性焦虑。
- 🔴 **"无法私下报告安全问题"**
- 🔴 **"之前的 PR/Issue 因 stale 机器人被关闭，未被任何维护者 review"**
- 🟡 **"希望通过 picker 直接选择 Tsubasa，而不用自定义 API base"**
- 🟢 **"已测试 lag fix，在 Brave 桌面/移动浏览器不再卡顿"** —— 来自 PR #3347 的开发者自测反馈。
- 🟢 **"PicoClaw 仍有显著社区兴趣与需求"** —— 来自 #3398，主动 Fork 声明背后是对项目的认可。

**用户痛点集中点**：
1. 安全披露渠道缺失
2. 维护响应机制失效（stale 机器人 > 维护者 review）
3. 核心模块稳定性债务
4. provider 生态扩展缓慢

---

## 8. 待处理积压（提醒维护者）

| 编号 | 类型 | 标题 | 创建日期 | 待处理天数（截至 2026-10-06） |
|---|---|---|---|---|
| [#3405](https://github.com/sipeed/picoclaw/issues/3405) | Issue | 启用私有漏洞报告 | 2026-09-28 | 8 天 |
| [#3404](https://github.com/sipeed/picoclaw/issues/3404) | Issue | 可靠性修复合集 wave 1 | 2026-09-28 | 8 天 |
| [#3398](https://github.com/sipeed/picoclaw/issues/3398) | Issue | 社区 Fork 声明 | 2026-09-28 | 8 天 |
| [#3397](https://github.com/sipeed/picoclaw/issues/3397) | Issue | Tsubasa 加入目录 | 2026-09-28 | 8 天 |
| [#3416](https://github.com/sipeed/picoclaw/pull/3416) | PR | Sendblue transport | 2026-10-05 | 1 天 |
| [#3370](https://github.com/sipeed/picoclaw/pull/3370) | PR | Keenable web search | 2026-09-07 | **29 天** ⚠️ |
| [#3347](https://github.com/sipeed/picoclaw/pull/3347) | PR | fix laggy interface | 2026-08-27 | **40 天** ⚠️ |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | PR | IRCv3 multiline | 2026-08-31 | **36 天（已关闭）** |

**优先级建议：**
1. 🚨 **立即处理**：#3405（安全治理）—— 启用 Private Vulnerability Reporting + 添加 `SECURITY.md`
2. 🚨 **立即处理**：#3404（可靠性合集）—— 评估并合并可独立修复的部分
3. ⚠️ **优先 review**：#3347（lag fix）—— 已有测试结果，影响 Web UI 用户体验
4. ⚠️ **优先 review**：#3416（Sendblue）—— 今日高质量新 PR
5. 🟡 **一般**：#3370、#3397

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐☆☆☆ | 所有新动态均无维护者参与，依赖 stale 机器人 |
| 社区活跃度 | ⭐⭐⭐⭐☆ | 外部贡献者积极，包括高质量 PR |
| 安全合规 | ⭐⭐☆☆☆ | 漏洞披露渠道缺失，无 SECURITY.md |
| 稳定性 | ⭐⭐☆☆☆ | 核心模块存在已复现的多处 bug |
| 路线清晰度 | ⭐⭐☆☆☆ | 无版本规划信号，存在社区 fork 风险 |

**核心建议：维护者应优先响应 #3405 和 #3404，重建社区信任，并尽快对 #3347、#3416 等已有测试的高质量 PR 给予反馈，避免社区分叉成为事实标准。**

---

*本报告基于 GitHub 公开数据自动生成，所有链接指向 github.com/sipeed/picoclaw 对应 Issue/PR。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-10-06**

---

## 1. 今日速览

NanoClaw 今日整体活跃度处于**中等偏高**水平，过去 24 小时共处理 **20 个 PR**（合并/关闭 12，待合并 8）和 **1 个 Issue**（已关闭），并发布了 **`v2026.10.0-rc.2`** 第二个发布候选版本。围绕 **OneCLI 升级链路**与 **macOS update 时序竞争**形成了两条集中修复线，社区维护者（主要为 `glifocat`、`barnuri`）在技能生态（Resend/Sendblue/FXMacroData）、Provider 抽象重构、以及 `channels` 分支合流上同步推进。项目目前已从「跟随 `main` tip 更新」切换到「跟随发布版本更新」的新轨道，是一次重要的发布治理变更。

---

## 2. 版本发布

### 🚀 v2026.10.0-rc.2（[Release](https://github.com/qwibitai/nanoclaw/releases/tag/v2026.10.0-rc.2) / 配套 PR [#4038](https://github.com/qwibitai/nanoclaw/pull/4038)）

**版本性质**：2026.10.0 的第二个 RC，已在 `beta` channel 推送；`stable` channel 暂未推送。

**关键变更**：

| 维度 | 说明 |
|---|---|
| **版本号体系** | NanoClaw 首个采用**日历版本号**（CalVer）的版本系列 |
| **更新源切换** | `/update-nanoclaw` 现在**默认安装已发布的版本**，而非 `main` 分支的最新提交——这是更新行为的范式性转变 |
| **Changelog** | 合并了自 `2026.10.0-rc.1` 起的 **10 个 PR**（`Unreleased` 段已刷新） |

**破坏性变更 / 迁移注意**：
- `beta` channel 用户将自动收到该 RC；`stable` channel 用户暂不受影响。
- 从旧版本（git-tip 安装方式）迁移的用户需注意：后续更新将以**已发布版本**为锚点，回滚或跳版本时需以 release tag 为准。
- **建议**：生产环境用户暂留 `stable`，等待正式 GA；试用用户可在测试 VM 上验证 `beta` channel。

---

## 3. 项目进展

### 3.1 核心 Bug 修复（影响多个 area）

- **[#4037](https://github.com/qwibitai/nanoclaw/pull/4037)** `fix(update): wait for the launchd host to exit after bootout`
  修复 macOS `/update-nanoclaw` 的 `stopService` 在 `launchctl bootout` 后立即返回、导致快照与 host 关闭竞态的问题，**直接闭环 Issue [#4021](https://github.com/qwibitai/nanoclaw/issues/4021)**。该问题在 2.3.0→2.4.0 的 cutover 尝试中触发 I/O error 5，是本次 RC 的关键稳定性修复。

- **[#4035](https://github.com/qwibitai/nanoclaw/pull/4035)** `test(setup): reuse exec-checked stubs in the restart readiness tests`
  修复 macOS 上 `setup/lib/restart-readiness.test.ts` 在全量并行跑测时超时的问题——macOS 对每个新脚本的首次 exec 会做 Gatekeeper 检查（约 200ms），并行文件之间排队导致超时。

### 3.2 OneCLI 升级链路集中修复（4 个 PR 形成补丁链）

这是今日最集中的修复主题：

| PR | 标题 | 解决的问题 |
|---|---|---|
| [#4039](https://github.com/qwibitai/nanoclaw/pull/4039) | `fix(onecli): upgrade guide refuses an empty gateway pin` | 空 pin 导致 Docker Compose 跑 `latest`，可能跳到 1.43+ 引入不兼容变更 |
| [#4041](https://github.com/qwibitai/nanoclaw/pull/4041) | `fix(onecli): migration warning points back to the pin` | 提示文字错误引用"步骤 4"，导致 1.45.0 用户回滚后又被启动到 1.45.0 |
| [#4036](https://github.com/qwibitai/nanoclaw/pull/4036) | `fix(onecli): hold the gateway on 1.42.0` | OneCLI 1.43 在 `agents set-secrets` API 返回 410，需锁定 1.42.0 |
| [#4034](https://github.com/qwibitai/nanoclaw/pull/4034) *(待合并)* | `fix(onecli): isolate payload tests from env` | payload 测试受调用者 `ONECLI_*` / `ANTHROPIC_BASE_URL` 环境变量污染 |

**信号**：OneCLI 1.42→1.43 之间存在未文档化的 breaking change，社区在系统性回退/锁定。

### 3.3 渠道（Channels）与安装链路

- **[#4017](https://github.com/qwibitai/nanoclaw/pull/4017)** `fix(setup): fetch the current WhatsApp Web version before linking`
  修复 Baileys 在 `web.whatsapp.com` 返回 429 时静默使用过时内置 WA Web 版本的问题——降低 WhatsApp 链接成功率不稳定的风险。

- **[#3995](https://github.com/qwibitai/nanoclaw/pull/3995)** `fix(channels): load every adapter and make the branch green`
  让 `channels` 分支重新通过自身的测试与 typecheck；与 [#4000](https://github.com/qwibitai/nanoclaw/pull/4000) `chore(channels): merge main into channels`（**必须用 merge commit，禁止 squash**——否则会丢失 463 个 main commit 的 merge base）共同完成了 `channels` 分支与 `main` 的合流。

- **[#4015](https://github.com/qwibitai/nanoclaw/pull/4015)** `feat(gateway): skip the approval card for reads that carry no credential`
  在 Iron Proxy 后无凭据的读请求不再生成 approval card，显著降低噪音（典型场景：一个网页背后十几张卡片）。

### 3.4 安全与依赖治理

- **[#4007](https://github.com/qwibitai/nanoclaw/pull/4007)** `ci: let Dependabot see skill-pinned npm versions`
  把技能固定的 npm 版本暴露给 Dependabot——此前 `@whiskeysockets/baileys 7.0.0-rc.9`（critical）等已知漏洞因为固定在 `SKILL.md` / `container/cli-tools.json` 而未被 `pnpm audit` 与 Dependabot 扫到。

- **[#4042](https://github.com/qwibitai/nanoclaw/pull/4042)** *(待合并)* `chore(skills): bump the Resend adapter pin to 0.3.0`
  把 `@resend/chat-sdk-adapter` 从 `0.1.1` 升到 `0.3.0`，根除 4 个 moderate `npm audit` 警告（`uuid@10.0.0` 间接依赖）。

- **[#4009](https://github.com/qwibitai/nanoclaw/pull/4009)** `ci: merge agent-image pin bumps by hand, drop the auto-approver`
  agent-image 镜像 pin 升级不再自动批准/合入，回归人工把关。

### 3.5 Provider 抽象重构（架构级，待合并）

由 `barnuri` 推进的 Provider 抽象层：

- **[#3925](https://github.com/qwibitai/nanoclaw/pull/3925)** `refactor(agent-runner): add a provider-wrapper seam`
  引入 provider wrapper 钩子，使安装方可注入"失败时切备份模型/凭据"等重试策略，无需修改 `providers/claude.ts` 本体。
- **[#3930](https://github.com/qwibitai/nanoclaw/pull/3930)** `fix(opencode): resolve config, runtime key and server env from one environment`
  OpenCode 载荷统一从 `options.env ?? process.env` 读取，消除配置/凭据不一致的可能。

---

## 4. 社区热点

> **注**：今日所有 Issue/PR 的评论数与 👍 数均为 0，"热度"无法以互动数衡量。下文按 **PR 集中度（同一主题的 PR 数）** 与 **影响面（涉及 area 标签数）** 重排。

### 热度 ①：OneCLI 升级链路（4 个 PR）
[#4039](https://github.com/qwibitai/nanoclaw/pull/4039) · [#4041](https://github.com/qwibitai/nanoclaw/pull/4041) · [#4036](https://github.com/qwibitai/nanoclaw/pull/4036) · [#4034](https://github.com/qwibitai/nanoclaw/pull/4034)

**诉求**：OneCLI 1.43 静默引入不兼容（`set-secrets` API 返回 410），社区希望通过锁定 1.42.0 + 完善迁移文案，**避免数据库迁移到不可用版本**。这是真实的"用户脚被夹了"场景。

### 热度 ②：`channels` 分支合流（3 个 PR，含 463 commit 合并）
[#4000](https://github.com/qwibitai/nanoclaw/pull/4000) · [#3995](https://github.com/qwibitai/nanoclaw/pull/3995) · [#4017](https://github.com/qwibitai/nanoclaw/pull/4017)

**诉求**：长期积压的 `channels` 分支与 `main` 同步，PR 描述中特别强调"**必须用 merge commit**"，暴露出仓库存在 **rebase 禁用 + squash 丢失 merge base** 的流程痛点。`channels` ruleset 还要求 `require_extra_approval`，合规门槛高。

### 热度 ③：macOS update 时序（1 issue + 1 fix）
[#4021](https://github.com/qwibitai/nanoclaw/issues/4021) → [#4037](https://github.com/qwibitai/nanoclaw/pull/4037)

**诉求**：macOS 用户的 `/update-nanoclaw` 在跨大版本（2.3.0→2.4.0）时静默失败，且 issue 描述中提到"**rolled back cleanly, but cost**"——意味着回滚虽然成功，但留下了运维代价。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 🟠 **High** | [#4021](https://github.com/qwibitai/nanoclaw/issues/4021) | macOS update：`stopService` 不等待 host 退出，快照与 shutdown 竞态 → I/O error 5 | ✅ **已修** ([#4037](https://github.com/qwibitai/nanoclaw/pull/4037))，并随 `v2026.10.0-rc.2` 发布 |
| 🟡 **Medium** | [#4036](https://github.com/qwibitai/nanoclaw/pull/4036) | OneCLI 1.43 `set-secrets` 410 → `/add-onecli`、`/add-vercel` 失败 | ✅ **已修**（锁定 1.42.0） |
| 🟡 **Medium** | [#4039](https://github.com/qwibitai/nanoclaw/pull/4039) | OneCLI upgrade 接受空 pin → Compose 跑 `latest` → 可能跳到不兼容版本 | ✅ **已修** |
| 🟡 **Medium** | [#4017](https://github.com/qwibitai/nanoclaw/pull/4017) | WhatsApp 链接在 WA Web version 429 时静默使用过时版本 | ✅ **已修** |
| 🟢 **Low** | [#4035](https://github.com/qwibitai/nanoclaw/pull/4035) | macOS 全量并行跑测超时（Gatekeeper exec 排队） | ✅ **已修** |
| 🟢 **Low** | [#4041](https://github.com/qwibitai/nanoclaw/pull/4041) | OneCLI migration 提示文案错误（"步骤 4"指向保存旧版本的步骤） | ✅ **已修** |
| 🟢 **Low** | [#4034](https://github.com/qwibitai/nanoclaw/pull/4034) | OneCLI payload 测试受 caller 环境污染 | ⏳ **待合并** |
| ⚪ **观察** | [#3918](https://github.com/qwibitai/nanoclaw/pull/3918) | `send_message` 在流式/非流式 provider 下丢/重复回复（Claude、OpenCode） | ⏳ **待合并**（创建于 9/25） |
| ⚪ **观察** | [#3930](https://github.com/qwibitai/nanoclaw/pull/3930) | OpenCode 配置/运行时 key/server env 可能不一致 | ⏳ **待合并**（创建于 9/26） |

**整体判断**：今日关闭的 12 个 PR 中 **8 个为 bug fix 或 hardening**，其中 **3 个 high/medium 级问题已在 RC.2 中闭环**，稳定性水位显著抬升。

---

## 6. 功能请求与路线图信号

| 编号 | 标题 | 状态 | 路线图概率 |
|---|---|---|---|
| [#4043](https://github.com/qwibitai/nanoclaw/pull/4043) | `feat(channels): add Sendblue iMessage and SMS skill` | 🟡 OPEN | **高**——延续多渠道战略，与 #4042 Resend 同日提出 |
| [#4040](https://github.com/qwibitai/nanoclaw/pull/4040) | `feat: add FXMacroData MCP tool skill`（宏观数据/央行日历/外汇） | 🟡 OPEN | **中**——模板与 `/add-tavily-tool` (#3190) 高度一致，合入门槛低 |
| [#3932](https://github.com/qwibitai/nanoclaw/pull/3932) | `feat(skills): add /add-lean-tasks`（小模型跑定时任务，省上下文） | 🟡 OPEN | **高**——直击成本痛点（每跑一次都拉 Claude Code 预设 + 技能 + 记忆 + 全部 MCP） |
| [#3925](https://github.com/qwibitai/nanoclaw/pull/3925) | Provider-wrapper seam（per-query 模型与可重试失败） | 🟡 OPEN | **高**——架构

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-10-06

> 数据窗口：过去 24 小时 · 数据来源：GitHub (nullclaw/nullclaw)

---

## 一、今日速览

NullClaw 今日维持了 **高强度的内部整理节奏**：13 条 Issue 更新与 25 条 PR 更新集中在 CI、Docker、CLI、文档和 Provider 五大方向，其中 11 条 PR 已关闭/合并，5 条历史 Issue 同步关闭。值得注意的是，今日几乎所有新 Issue 都来自单一贡献者 `vernonstinebaker`，且多数明确标注为 **"approval on #970 / #959 / #962 / #1011 上的非阻塞跟进项"**——这是主线 PR 合入后系统化清理技术债的典型模式。从健康度看，仓库活动活跃但对外透明度有所下降（无新 Release，无新社区问题），核心维护者正集中精力"打补丁"，而非拓展新功能。

---

## 二、版本发布

无新版本发布。当前 latest 仍为 2026-04-17 发布的 `v2026.4.17`（参考 [#839](https://github.com/nullclaw/nullclaw/issues/839)）。考虑到今日关闭的多个严重问题（Docker `AccessDenied`、CLI 方向键、调度器凭据持久化），下一次打版需求已较为迫切。

---

## 三、项目进展（已合并/关闭的重要 PR）

今日 11 条 PR 完成流转，按重要程度排列：

| PR | 标题 | 影响维度 |
|---|---|---|
| [#1023](https://github.com/nullclaw/nullclaw/pull/1023) | **fix(docker): keep HOME writable in the non-root image** | 修复 Docker 镜像 `AccessDenied` 启动崩溃（关联 [#1017](https://github.com/nullclaw/nullclaw/issues/1017)），恢复 uid 65534 写权限 |
| [#970](https://github.com/nullclaw/nullclaw/pull/970) | **fix(cli): handle arrow keys in agent REPL** | 为交互式 `nullclaw agent` 引入零分配行编辑器，启用 POSIX raw-mode，方向键、历史回溯、Home/End、单词移动全部修复 |
| [#959](https://github.com/nullclaw/nullclaw/pull/959) | **fix(cron): persist a scoped scheduler credential securely** | 修复网关要求配对或公网绑定时的调度器认证，cron-scoped bearer 加密落盘 |
| [#1011](https://github.com/nullclaw/nullclaw/pull/1011) | **fix(agent): free parsed tool call when a later allocation fails** | 修复 `parseXmlToolCalls` 在追加失败时的 `name` / `arguments` / `tool_call_id` 内存泄漏 |
| [#983](https://github.com/nullclaw/nullclaw/pull/983) | **fix(providers): use pinned curl path for proxied requests** | 通过 pinning resolve 复用已有 secure curl 路径传输代理请求，凭据留在 mode-0600 临时文件 |
| [#775](https://github.com/nullclaw/nullclaw/pull/775), [#774](https://github.com/nullclaw/nullclaw/pull/774), [#776](https://github.com/nullclaw/nullclaw/pull/776), [#777](https://github.com/nullclaw/nullclaw/pull/777) | 文档去重、过期数据刷新、子系统文档补全、结构化清理 | 由 `telagod` 提出，但因版本钉死 Zig 0.15.2 与仓库 0.16.0 不符，已被 [#1040](https://github.com/nullclaw/nullclaw/pull/1040) 与 [#1039](https://github.com/nullclaw/nullclaw/pull/1039) 取代 |

**整体推进评估**：项目在 CLI 体验、容器可靠性、调度器安全三个"部署级"问题上完成关键修复，下一版本的稳定性基线已实质抬升。

---

## 四、社区热点

今日热度最高的条目（以评论数排序）均为较早 Issue 的关闭动作，而非新讨论：

- [#865](https://github.com/nullclaw/nullclaw/issues/865) — **CLI 方向键乱码**（4 评论）今日随 [#970](https://github.com/nullclaw/nullclaw/pull/970) 合并而关闭，是本期最具代表性的"用户痛点 → 合入修复"闭环。
- [#817](https://github.com/nullclaw/nullclaw/issues/817) — **是否支持微信扫码登录**（3 评论）今日关闭，从摘要看属于澄清/文档类型问题，未承诺支持。

**诉求分析**：用户最强烈的需求集中在 **CLI/REPL 交互可用性**（方向键）与 **部署开箱即用**（Docker 直接跑通）。这两个方向今天都已有修复合入，社区反馈预期会在下个版本发布后显著改善。

---

## 五、Bug 与稳定性

按严重程度排列（标注是否已有 fix）：

| 严重度 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#1033](https://github.com/nullclaw/nullclaw/issues/1033) | **Cron agent 作业无默认超时，可永久阻塞调度器线程**：因 cron 串行分发 + 默认 `agent_timeout_secs=0` + 三处独立缺陷叠加 | OPEN，无 PR（[文档 PR #1032](https://github.com/nullclaw/nullclaw/pull/1032) 仅补文档） |
| 🟡 中 | [#1034](https://github.com/nullclaw/nullclaw/issues/1034) | **Docker 预修复卷仍 root 拥有**，即使镜像已修，旧 named volume 仍 `AccessDenied` | OPEN，[#1035](https://github.com/nullclaw/nullclaw/pull/1035) 提供文档修复，运行期 `chown` 方案未自动化 |
| 🟢 低 | [#1017](https://github.com/nullclaw/nullclaw/issues/1017) | Docker 镜像 `/nullclaw-data` root-owned | ✅ **已修复**（[#1023](https://github.com/nullclaw/nullclaw/pull/1023)） |
| 🟢 低 | [#839](https://github.com/nullclaw/nullclaw/issues/839) | "bit 无调度器访问权限" | 今日关闭（具体 fix 未明） |
| 🟢 低 | [#865](https://github.com/nullclaw/nullclaw/issues/865) | CLI 方向键输出 CTRL 字符 | ✅ **已修复**（[#970](https://github.com/nullclaw/nullclaw/pull/970)） |

**关键风险**：`#1033` 描述的"单个永不退出的 agent cron 拖垮全部 cron" 是目前最严重的开放缺陷，且未伴随代码修复 PR——仅 [#1032](https://github.com/nullclaw/nullclaw/pull/1032) 在做文档补全。建议下个版本重点处理。

---

## 六、功能请求与路线图信号

**新提出的增强需求（均来自今日 OPEN Issue）：**

- [#1037](https://github.com/nullclaw/nullclaw/issues/1037) — **CLI 原生 Windows 控制台编辑**：raw-mode 仅覆盖 POSIX，Windows 仍为占位实现。这是 [#970](https://github.com/nullclaw/nullclaw/pull/970) 审批时显式留作 follow-up 的三个非阻塞项之一，落地可能性高。
- [#1027](https://github.com/nullclaw/nullclaw/issues/1027) — **用 thinking capability 表替代精确 Claude 模型名比对**：来自 [#962](https://github.com/nullclaw/nullclaw/pull/962) 审批意见，`src/providers/anthropic.zig:610` 的硬编码需替换为能力表，属于"模型演进防回归"型需求。
- [#1036](https://github.com/nullclaw/nullclaw/pull/1036) — **CI 在 PR 阶段 gate Docker 镜像变更**：今日同步有 [#1042](https://github.com/nullclaw/nullclaw/pull/1042) 实现 PR，采纳概率极高。

**已有对应 PR 的请求**（高概率进入下一版本）：
- 终端宽度动态刷新 ([#1028](https://github.com/nullclaw/nullclaw/issues/1028) → [#1041](https://github.com/nullclaw/nullclaw/pull/1041))
- 配置目录测试隔离 ([#1029](https://github.com/nullclaw/nullclaw/issues/1029) → [#1038](https://github.com/nullclaw/nullclaw/pull/1038))
- 文档索引与子系统指南 ([#1008](https://github.com/nullclaw/nullclaw/pull/1008))
- Telegram 代理走 curl 通道 ([#982](https://github.com/nullclaw/nullclaw/pull/982))
- Provider 错误体日志脱敏 ([#1004](https://github.com/nullclaw/nullclaw/pull/1004))

---

## 七、用户反馈摘要

从已关闭 Issue 提炼的真实用户场景：

- **CLI 体验痛点**（[#865](https://github.com/nullclaw/nullclaw/issues/865)，4 评论）：用户在 REPL 中依赖方向键做历史回溯与行内编辑，却被 CTRL 字符干扰，说明项目对 TTY 兼容性的覆盖盲区已被一线开发者踩到。
- **配置与登录方式疑问**（[#817](https://github.com/nullclaw/nullclaw/issues/817)、[#767](https://github.com/nullclaw/nullclaw/issues/767)）：用户对微信扫码登录、原生 Anthropic API key（非 Pro 计划）的支持路径感到困惑，文档说明存在缺口——尤其是 Pro 与原生 API key 切换的实际步骤。
- **部署回归**（[#1017](https://github.com/nullclaw/nullclaw/issues/1017)）：用户在标准构建后立刻遇到 `AccessDenied`，说明 Docker 镜像的 uid 变更缺乏可观测的 sanity check，**CI 缺失是这次回归的根因**（[#1036](https://github.com/nullclaw/nullclaw/issues/1036) 已指出）。

**满意信号**：所有被关闭的历史 Issue 中，未观察到针对修复方案不满的回复或重新打开行为，说明维护者响应效率获得用户认可。

---

## 八、待处理积压（提醒维护者关注）

**长期未响应/需关注的条目：**

- [#982](https://github.com/nullclaw/nullclaw/pull/982) — **fix(telegram): use curl transport for explicit proxies**，由 `ArcanePivot` 提出，已 OPEN 约 2 个月（创建 2026-08-03），无评审活动。是 Telegram 代理场景下唯一长期挂起的功能 PR，建议维护者优先 review。
- [#1004](https://github.com/nullclaw/nullclaw/pull/1004) — Provider 错误体日志脱敏，OPEN 约 12 天，对调试体验影响显著，但尚未进入评审。
- [#1008](https://github.com/nullclaw/nullclaw/pull/1008) — 文档索引修复，OPEN 12 天，叠加今日 [#1040](https://github.com/nullclaw/nullclaw/pull/1040) / [#1039](https://github.com/nullclaw/nullclaw/pull/1039) 替换方案后，建议维护者协调合并顺序以避免内容冲突。
- [#1033](https://github.com/nullclaw/nullclaw/issues/1033) — Cron 调度器阻塞风险，OPEN 1 天但**无对应修复 PR**，是当前最高优先级的开放缺陷。
- **下一版本发布计划**：自 `v2026.4.17`（2026-04-17）以来约 5.7 个月无新版本，累积的 [#970](https://github.com/nullclaw/nullclaw/pull/970)、[#959](https://github.com/nullclaw/nullclaw/pull/959)、[#1011](https://github.com/nullclaw/nullclaw/pull/1011)、[#1023](https://github.com/nullclaw/nullclaw/pull/1023) 等合入均未体现在发布产物中，建议尽快规划 `v2026.10.x` 或 `v2026.Q4`。

---

### 数据附录

- Issues：13 条更新（8 OPEN / 5 CLOSED）
- PRs：25 条更新（14 OPEN / 11 CLOSED-MERGED）
- 主导贡献者：`vernonstinebaker`（约 60% 的今日 Issue 与 PR）
- 仓库版本钉死：**Zig 0.16.0**（参见 [#1040](https://github.com/nullclaw/nullclaw/pull/1040)）
- Latest Release：`v2026.4.17`（2026-04-17）

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-10-06**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**中等偏下水平**：过去 24 小时内有 2 条新 Issue 和 2 条新 PR，但**无任何合并、无版本发布**。社区动力主要来自两个方向——一条来自维护者/自动化流程的基准测试失败分类日报（#8126），以及一条由真实用户报告的 WebChat 后台标签页状态陈旧的 Bug（#8124）。后者已由同一作者提交对应修复 PR（#8125），体现出了较为理想的"报告→修复"闭环；同时新增了一条 iMessage/SMS 集成扩展 PR（#8127），显示出项目在扩展生态方面的持续推进。整体来看，仓库未发生合并动作，PR 队列出现了轻微积压迹象。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**今日无 PR 被合并**，因此项目在主线代码层面暂无新推进。以下是当前**待合并**的两条 PR：

- **[PR #8127](https://github.com/nearai/ironclaw/pull/8127) `feat: add Sendblue iMessage and SMS extension`** — 由 `lookevink` 提交，新增一个 Sendblue iMessage/SMS 集成扩展。该扩展包含手机号配对、接收 Webhook 鉴权、终端回复及持久化 DM 目标，密钥由 host 端托管，并附带声明式、有界的 addon 加载逻辑。若合并，将显著扩展 IronClaw 的消息渠道覆盖能力。

- **[PR #8125](https://github.com/nearai/ironclaw/pull/8125) `fix(webui): keep run state and notification inbox fresh in background tabs`** — 由 `heraisys-sas` 提交，是 Issue [#8124](https://github.com/nearai/ironclaw/issues/8124) 的修复部分（items 1–2），在 WebChat 前端通过将 `refetchOnWindowFocus` 由 `false` 改为 `true` 等小旗标，让后台标签页回到前台时刷新运行/动作状态。

> 由于两条 PR 均未进入评审周期或合并队列，**今日主线净进度为 0**，建议维护者尽快评审，尤其是修复类 PR #8125。

---

## 4. 社区热点

由于今日所有 Issue 与 PR 的评论数与点赞数均为 0，**尚未形成显著讨论热度**。从话题吸引力与潜在关注度看，以下两条最值得关注：

- **[Issue #8124](https://github.com/nearai/ironclaw/issues/8124) WebChat: stale action status and no completion notification in background tabs**
  - 作者 heraisys-sas 详细描述了 WebChat v2 SPA 在 Chrome/Firefox 后台标签页中，因非 HTTPS（纯 HTTP）部署环境下 Web Push 不可用，导致的"静默通知缺口"。
  - 涉及真实部署场景（自托管单租户、LAN 端口无 TLS），**对私有化部署用户具有普遍参考价值**。

- **[Issue #8126](https://github.com/nearai/ironclaw/issues/8126) Daily ironclaw failure taxonomy — 2026-10-05**
  - 由 pranavraja99 创建的**自动化/周期性基准失败分类日报**，分析 officeqa 套件中 37 处 non-pass 表现，定位为"几乎完全是 DeepSeek-V4-Flash 的真实模型质量数值错误"。
  - 反映出项目在**质量监控与基准透明度方面**的成熟实践。

---

## 5. Bug 与稳定性

今日仅有 1 条与稳定性直接相关的 Bug 报告：

### 🔴 中等严重度 — WebChat 后台标签页状态陈旧

- **Issue**：[#8124](https://github.com/nearai/ironclaw/issues/8124) — WebChat: stale action status and no completion notification in background tabs
- **影响范围**：自托管、非 HTTPS、Chrome/Firefox 浏览器中运行 `ironclaw serve` 1.4.1 的用户
- **症状**：
  1. 后台标签页不刷新 `tool-activity` / `activity-stream` 状态消息；
  2. 长时间运行的 tool/action 完成时**无通知送达**；
  3. 因无 TLS 部署环境下 Web Push API 不可用，属于"静默 Web Push 缺口"。
- **修复 PR**：**[#8125](https://github.com/nearai/ironclaw/pull/8125)** — 已由同一作者提交，覆盖 issue 的 items 1–2（标签页失焦 → 重新聚焦时主动 refetch）。
- **未覆盖部分**：issue 的 items 3+（通知补发、Web Push 在非 HTTPS 场景下的替代方案）**尚未提供**，仍需后续 PR 或设计讨论。

### 🟢 性能/质量观测类（非阻塞）

- **[Issue #8126](https://github.com/nearai/ironclaw/issues/8126)** — DeepSeek-V4-Flash 在 officeqa 套件 37 个失败用例中呈现的数值推理质量问题，属**模型层面**而非 IronClaw 代码本身。

---

## 6. 功能请求与路线图信号

### 🆕 Sendblue iMessage/SMS 扩展

- **[PR #8127](https://github.com/nearai/ironclaw/pull/8127)** — 社区贡献者 `lookevink` 主动提议加入 iMessage/SMS 通道。
- **设计要点**：
  - 集成沿用现有 host lifecycle 与 conversation 路径，降低架构冲击；
  - 凭证 host custody，addon 加载声明式且有边界；
  - 表明项目正在向"多通道个人 AI 助手"方向延展。
- **纳入下一版本的概率**：**中等偏高**——若维护者认可扩展机制，merge 门槛较低；但今日尚未分配 Reviewer，存在延迟窗口。

### 🔔 WebChat 通知能力增强

- 由 [#8124](https://github.com/nearai/ironclaw/issues/8124) 间接引出：在非 HTTPS 自托管场景下，需要 Web Push 的替代通知机制（例如轮询、长连接、或要求 TLS 反代）。
- 建议作为 **下一版本的可选路线图项**，尤其针对 self-hosted 用户群体。

---

## 7. 用户反馈摘要

今日 Issues 评论数均为 0，可提炼的直接用户反馈有限。但从 Issue 正文可识别以下**真实使用痛点**：

| 痛点 | 来源 | 详情 |
|---|---|---|
| 后台运行缺乏状态反馈 | [Issue #8124](https://github.com/nearai/ironclaw/issues/8124) | 用户期待 long-running tool 在浏览器后台标签中也能实时查看进度、完成时收到通知。当前在 LAN/纯 HTTP 自托管场景下"完全静默"。 |
| 自托管部署缺少 TLS 导致 PWA 能力受限 | 同上 | 由于浏览器 Web Push 必须 HTTPS，导致自托管用户在通知体验上落后于 SaaS 用户。 |
| 对 DeepSeek-V4-Flash 模型数值能力的疑虑 | [Issue #8126](https://github.com/nearai/ironclaw/issues/8126) | 自动化基准显示该模型在 officeqa 数值题上系统性地失败，可能影响下游 agent 任务可靠性。 |

> **满意度信号**：修复 PR #8125 由 Issue 作者同步提交，体现出"用户愿意自己动手修复"的积极信号，是开源社区健康度的正向体现。

---

## 8. 待处理积压

由于今日 2 条 PR 均处于 OPEN 状态且**未指派 Reviewer / 未进入评审**，已构成轻微积压：

| 编号 | 类型 | 标题 | 创建时间 | 风险 |
|---|---|---|---|---|
| [#8127](https://github.com/nearai/ironclaw/pull/8127) | PR | feat: add Sendblue iMessage and SMS extension | 2026-10-06 | 新功能，未经评审，可能影响扩展生态稳定性 |
| [#8125](https://github.com/nearai/ironclaw/pull/8125) | PR | fix(webui): keep run state and notification inbox fresh in background tabs | 2026-10-05 | Bug 修复，影响真实用户，**建议优先合并** |

### 🚨 维护者关注建议

1. **优先合并 PR #8125**——修复已有用户报告的可复现 Bug，且变更面小（一两行配置级修改），回归风险低；
2. **分配 Reviewer 至 PR #8127**——避免贡献者等待超 48 小时影响社区活跃度；
3. **评估 Issue #8124 的 items 3+**（通知补发、Web Push 在非 HTTPS 场景下的替代方案），决定是否在下一版本中给出官方解决方案或文档说明；
4. **持续观察 Issue #8126 系列日报**——若 DeepSeek-V4-Flash 数值失败持续累积，建议在文档或模型推荐表中加入技术提示。

---

> **总结**：IronClaw 今日整体处于**低活动量、零合并**的状态，但提交内容质量较高——Issue 与 PR 形成了良好的对应关系。建议维护者在 24–48 小时内对两条新 PR 给出评审反馈，以维持贡献者动力与项目节奏。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-10-06**

---

## 1. 今日速览

LobsterAI 今日呈现**典型的维护清理日**特征：25 条 Issue 中 18 条已关闭（关闭率 72%），6 条 PR 中 3 条已合并，**无新版本发布**。最值得关注的事件是安全研究员 `carfeii` 在 `main` 分支集中披露了 **4 个中高危安全漏洞**（OAuth 令牌泄漏、对称链接越权、代理鉴权缺失、技能元数据任意删除），并同步提交了对应的修复 PR（#2794、#2798）。同时维护团队批量关闭了一批历史 wontfix 议题（Docker 部署、ARM64、WhatsApp、离线部署等长期未推进的请求）。整体活跃度评级：**中等偏低，但安全信号密集**。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布。**
最新稳定版本仍为 `v0.2.4`（2026-09-23 发布，commit `7863db4c`）。所有今日讨论的安全修复均基于 `main` 分支的最新 commit `791a352d`，尚未进入任何 tag。

---

## 3. 项目进展

### 已合并/关闭 PR（3 条）

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#2800](https://github.com/netease-youdao/LobsterAI/pull/2800) | fix(skills): align SKILL.md frontmatter parsing with OpenClaw | Skills / 兼容性 | 修复了 LobsterAI 与 OpenClaw 运行时对 `SKILL.md` frontmatter 解析差异导致的技能列表丢失问题。 |
| [#2785](https://github.com/netease-youdao/LobsterAI/pull/2785) | fix: P2P direct-message policy fails open | IM / 安全 | 修复 NIM P2P 网关 `handleIncomingMessage` 对 `'disabled'` 与未设置策略的默认放行漏洞（[Issue #2784](https://github.com/netease-youdao/LobsterAI/issues/2784)）。 |
| [#2799](https://github.com/netease-youdao/LobsterAI/pull/2799) | fix(skills): stop using temp extraction dir names as skill ids | Skills / 数据完整性 | 解决从归档根目录安装技能时被随机命名为 `lobsterai-skill-zip-XXXXXX` 导致的重复安装与更新检测失败。 |

### 待合并 PR（3 条）

| PR | 标题 | 状态 |
|---|---|---|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | chore(deps-dev): bump electron 43.5.0 → 44.4.5 | OPEN（Dependabot 自 4 月起积压） |
| [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) | fix: credential log redaction + preview symlink containment + OpenClaw proxy auth | OPEN（一并修复 #2795/#2796/#2797） |
| [#2794](https://github.com/netease-youdao/LobsterAI/pull/2794) | fix(skills): stop trusting skill-controlled `_meta.json` for delete path | OPEN（修复 #2793） |

**项目整体推进评估**：技能系统兼容性、IM 鉴权正确性两方向有明显进展；安全线正在并行推进，尚未到发版阶段。

---

## 4. 社区热点

今日评论数最高的 Issue 普遍已被处理，**剩余社区关注主要集中在三类长尾诉求**：

| 排名 | Issue | 状态 | 评论 | 核心诉求 |
|---|---|---|---|---|
| 1 | [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | OPEN（stale） | 4 | 自定义 Gemini 中转模型的协议兼容 |
| 2 | [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | CLOSED（wontfix） | 2 | 将 Synthorai 这类"一 key 通吃"网关作为内置服务商（统一 base URL 支持 OpenAI/Anthropic 双协议） |
| 3 | [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) | CLOSED（wontfix, stale） | 2 | 拆分 `src/main/main.ts`（建议迁移到 `core/` + `modules/` 结构） |
| 4 | [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) | CLOSED | 2 | NIM P2P 策略默认放行（**今日由 #2785 修复**） |

**诉求分析**：聚合网关类服务商（Synthorai 类）的"统一 base URL 双协议切换"是用户对内置槽位最大的体感差距。OpenRouter 作为同类产品已被内置，是该需求被 wontfix 的对照参考——用户基础规模可能是未被采纳的原因。

---

## 5. Bug 与稳定性

### 🔴 高优先级：安全相关（main 分支新披露）

| Issue | 标题 | 严重度 | 是否已有 Fix PR |
|---|---|---|---|
| [#2797](https://github.com/netease-youdao/LobsterAI/issues/2797) | OpenClaw token proxy accepts unauthenticated requests and forwards with user's bearer token | 🔴 **严重**（凭据泄露） | ✅ [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) OPEN |
| [#2796](https://github.com/netease-youdao/LobsterAI/issues/2796) | HTML preview server follows symlinks outside permitted directory | 🟠 **高**（路径穿越/任意文件读取） | ✅ [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) OPEN |
| [#2795](https://github.com/netease-youdao/LobsterAI/issues/2795) | OAuth access/refresh tokens written to diagnostic logs | 🟠 **高**（敏感凭据落盘） | ✅ [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) OPEN |
| [#2793](https://github.com/netease-youdao/LobsterAI/issues/2793) | Skill-controlled `_meta.json` enables arbitrary directory deletion on uninstall | 🟠 **高**（供应链+权限提升） | ✅ [#2794](https://github.com/netease-youdao/LobsterAI/pull/2794) OPEN |

> 📌 **关键提示**：以上 4 个漏洞均标注 "**Not present in v0.2.4, only on `main`**"，即对当前正式发行版用户无直接影响，但发布下一个版本前必须先合入修复。

### 🟡 中等：跨平台一致性问题

| Issue | 标题 | 说明 |
|---|---|---|
| [#834](https://github.com/netease-youdao/LobsterAI/issues/834) | Windows 与 Mac 点击"增值服务"打开页面不一致 | URL 路由与登录态、价格档位（Windows 显示 0.1/0.2/0.5，Mac 显示 10/20/50）差异明显，**stale 状态需关注** |

### 🟢 今日已修复（已合入）

- [#2784](https://github.com/netease-youdao/LobsterAI/issues/2784) NIM P2P 默认放行 → [PR #2785](https://github.com/netease-youdao/LobsterAI/pull/2785) ✅
- SKILL.md frontmatter 解析不一致 → [PR #2800](https://github.com/netease-youdao/LobsterAI/pull/2800) ✅
- 临时解压目录导致技能 ID 错乱 → [PR #2799](https://github.com/netease-youdao/LobsterAI/pull/2799) ✅

---

## 6. 功能请求与路线图信号

### 被标记 wontfix 的请求（今日集中清理）

以下长期未推进的请求在今日统一关闭，**信号意义大于内容意义**：维护团队正在系统性地清理路线图 backlog。

| Issue | 诉求 | 关闭原因解读 |
|---|---|---|
| [#2554](https://github.com/netease-youdao/LobsterAI/issues/2554) | 新增 Synthorai 内置服务商 | 与内置 18 个服务商策略不符，Custom 槽位足以覆盖 |
| [#497](https://github.com/netease-youdao/LobsterAI/issues/497) | OpenClaw / CoWorker 双内核切换 | 架构层面未列入路线图 |
| [#715](https://github.com/netease-youdao/LobsterAI/issues/715) | 暴露 bundled openclaw 命令 | 安全/封装考虑 |
| [#256](https://github.com/netease-youdao/LobsterAI/issues/256) | 本地模型 + API 混合路由 | 不在路线图 |
| [#265](https://github.com/netease-youdao/LobsterAI/issues/265) | WhatsApp 支持 | 渠道扩展未列入 |
| [#587](https://github.com/netease-youdao/LobsterAI/issues/587) | 离线/无外网企业内网部署 | 依赖在线资源，未列入 |
| [#386](https://github.com/netease-youdao/LobsterAI/issues/386) / [#539](https://github.com/netease-youdao/LobsterAI/issues/539) | Docker / ARM64 服务器部署 | 桌面端定位，服务器部署未列入 |
| [#640](https://github.com/netease-youdao/LobsterAI/issues/640) | 0.2.4 后单开分支优化（👍=4，社区声量较高） | 维护策略未采纳 |

### ⚠️ 高反应量但被关闭的诉求

[#640](https://github.com/netease-youdao/LobsterAI/issues/640) 获得了 **👍=4** 的最高社区赞同数（其他 wontfix 议题多为 0），反映 0.2.4 之后存在**用户感知到的质量回退**——维护团队关闭它可能引发社区反弹，建议官方发布版本质量说明。

### 仍开放的功能/改进请求

| Issue | 主题 | 优先级建议 |
|---|---|---|
| [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | 自定义 Gemini 中转模型（custom 槽位协议不识别） | 中（影响中转 API 用户） |
| [#1024](https://github.com/netease-youdao/LobsterAI/issues/1024) | `main.ts` 拆分 | 低（工程问题，stale） |
| [#829](https://github.com/netease-youdao/LobsterAI/issues/829) | SQLite 默认参数未桌面化调优 | 中（数据安全/性能） |

---

## 7. 用户反馈摘要

- **痛点 1：内置与 Custom 槽位的"体感差距"**（[#2554](https://github.com/netease-youdao/LobsterAI/issues/2554)）：用户明确指出 Custom 槽位缺少默认模型列表、`switchableBaseUrls`、图标与默认 baseUrl，新手填错率较高。这是"内置 vs 自定义"二元结构的真实摩擦点。
- **痛点 2：跨平台 UI 不一致**（[#834](https://github.com/netease-youdao/LobsterAI/issues/834)）：Windows 与 Mac 点击"增值服务"打开的 URL、登录态、价格档位完全不同步——属于典型的多平台分支漂移问题。
- **痛点 3：版本质量回退感知**（[#640](https://github.com/netease-youdao/LobsterAI/issues/640)）：0.2.4 之后的版本被社区标记"bug 过多"，4 颗 👍 是今日社区最强烈的负面信号。
- **痛点 4：MCP 接入异常**（[#989](https://github.com/netease-youdao/LobsterAI/issues/989)）：Tavily MCP 报 401 即便 API key 已配置——指向密钥读取或环境变量传递路径的潜在回归。
- **满意度信号**：今日 [PR #2800](https://github.com/netease-youdao/LobsterAI/pull/2800) 和 [#2799](https://github.com/netease-youdao/LobsterAI/pull/2799) 聚焦技能系统易用性问题被快速合入，说明团队对**技能系统 UX** 在持续投入。

---

## 8. 待处理积压

### ⚠️ 需维护者重点关注

| 类型 | 编号 | 标题 | 积压时长 |
|---|---|---|---|
| 安全 PR | [#2798](https://github.com/netease-youdao/LobsterAI/pull/2798) | OAuth/对称链接/OpenClaw 代理鉴权 三合一修复 | 当日新开，需优先 review |
| 安全 PR | [#2794](https://github.com/netease-youdao/LobsterAI/pull/2794) | 技能 _meta.json 任意目录删除修复 | 当日新开，需优先 review |
| 依赖升级 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | electron 43.5.0 → 44.4.5 | **2026-04-02 起积压**，已超 6 个月未合并 |
| Stale Issue | [#831](https://github.com/netease-youdao/LobsterAI/issues/831) | 自定义 Gemini 中转模型 | 2026-03-25 起，评论 4 |
| Stale Issue | [#829](https://github.com/netease-youdao/LobsterAI/issues/829) | SQLite 默认参数调优 | 2026-03-25 起 |
| Stale Issue | [#834](https://github.com/netease-youdao/LobsterAI/issues/834) | 增值服务跨平台不一致 | 2026-03-25 起 |

### 📊 项目健康度指标

| 指标 | 数值 | 评估 |
|---|---|---|
| Issue 关闭率 | 72% (18/25) | ✅ 健康（多为历史 wontfix 清理） |
| Open Issue 积压 | 7 | ⚠️ 含 3 个 stale 需复审 |
| Open PR 积压 | 3 | ⚠️ 2 个安全 PR 需紧急 review |
| 待合并 Dependabot | 1 | 🟠 长期积压 6 个月 |
| 新版本发布 | 0 | ⚠️ main 分支有 4 个未发版安全修复 |
| 社区反应量 | 👍=4（单议题峰值） | 🟡 中等偏低 |

---

### 📌 编辑建议（给 LobsterAI 维护团队）

1. **紧急**：将 PR #2794 与 #2798 提级为发版阻断项，下个 tag 前必须合并。
2. **建议**：针对 [#640](https://github.com/netease-youdao/LobsterAI/issues/640)（👍=4）发布版本质量说明，缓解社区疑虑。
3. **建议**：清理 Dependabot 长期积压（[#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)），electron 主版本跨大版本升级存在兼容风险窗口。
4. **建议**：复审 [#831](https://github.com/netease-youdao/LobsterAI/issues/831)、[#829](https://github.com/netease-youdao/LobsterAI/issues/829)、[#834](https://github.com/netease-youdao/LobsterAI/issues/834) 三个 stale 议题的现状，避免被自动关闭。

---

*报告基于 GitHub Issues/PRs 数据生成，时间窗口为 2026-10-05 至 2026-10-06。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**: 2026-10-06
**项目**: [moltis-org/moltis](https://github.com/moltis-org/moltis)
**数据周期**: 过去 24 小时

---

## 1. 今日速览

Moltis 项目在过去 24 小时呈现**低活跃度但高质量**的特征：共产生 2 条新 Issue 和 2 条新 PR，无新版本发布，无任何 Issue 或 PR 被关闭。值得注意的是，今天所有的 Issue 和 PR 均来自同一贡献者 `tomachianura`，且形成"Issue + 修复 PR"的标准配对提交模式（#1292 ↔ #1293，#1294 ↔ #1295），反映出贡献者对项目的深度参与。整体仓库处于**稳定维护状态**，没有紧急危机，但也提示社区参与广度有限，需要关注是否对单人提交形成依赖。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 项目当前最新版本仍为用户 #1292 中提及的 `20260913.02`。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，所有 2 条新提交的 PR 均处于待审核状态：

| PR | 标题 | 状态 | 影响范围 |
|---|---|---|---|
| [#1295](https://github.com/moltis-org/moltis/pull/1295) | fix(discord): classify direct messages as direct chats | 待合并 | 通道层 (`crates/channels`) |
| [#1293](https://github.com/moltis-org/moltis/pull/1293) | fix(skills): quote SKILL.md frontmatter and refuse unparseable skills | 待合并 | Skills 子系统 |

若两条 PR 顺利合并，将修复 2 个高优先级问题（详见第 5 节），项目稳定性预计将获得实质性提升。建议维护者优先 review 这两个修复 PR。

---

## 4. 社区热点

由于所有新 Issue 均为 0 评论、0 👍，今日**无显著讨论热点**。两条 PR 的评论数亦为空。

从主题来看，**Skills 子系统**（#1292 / #1293）和**共享聊天中的身份/凭据管理**（#1294 / #1295）构成了当前的两大关注焦点，反映出项目正向"多用户/多通道协作场景"演进，而 Skills 作为 AI 智能体能力扩展的核心机制，其可靠性成为社区基础关切。

---

## 5. Bug 与稳定性

### 🔴 Bug #1292 — `create_skill` 写入未加引号的 YAML frontmatter
- **链接**: [Issue #1292](https://github.com/moltis-org/moltis/issues/1292)
- **严重程度**: 🔴 **高** — 影响 Skills 发现机制的可用性
- **症状**: `create_skill` 在调用成功后（返回 `{"created": true}`），生成的 `SKILL.md` 文件因 frontmatter 未加引号，无法被 skill discovery 模块正确解析。触发场景包括：描述中包含 `: `、` #`、以 `&`/`!`/`-` 开头、含引号/方括号/大括号等 YAML 特殊字符，以及工具字段使用 `*`、`123`、`True` 等。
- **已有修复 PR**: ✅ [#1293](https://github.com/moltis-org/moltis/pull/1293) — 同时修复了 `create_skill` 和 `update_skill`，并增加"无法解析则拒绝"的防御性逻辑，避免静默失败。
- **影响范围**: 所有使用自定义 Skills 的用户，且最新版本 `20260913.02` 仍受影响。

### 🟡 Bug #1295（PR 形式）— Discord DM 被错误归类为共享聊天
- **链接**: [PR #1295](https://github.com/moltis-org/moltis/pull/1295)
- **严重程度**: 🟡 **中** — 影响 Discord 用户体验和会话隔离
- **症状**: Discord 适配器未转发会话类型，导致所有聊天（含 1:1 私信）都被归类为 `ChannelType::Discord => true`（共享聊天）。结果是 DM 机器人会运行在共享会话上下文中，可能泄露状态、混淆历史。
- **已有修复 PR**: ✅ PR 本身即为修复方案，待审核合并。
- **根因**: Discord channel id 不携带会话类型信息，需要适配器显式声明。

---

## 6. 功能请求与路线图信号

### 🟢 Feature #1294 — 共享聊天中每个发送者独立的 MCP 凭据
- **链接**: [Issue #1294](https://github.com/moltis-org/moltis/issues/1294)
- **诉求**: 在 Telegram/Discord/Slack 等群组场景中，让每个用户的消息使用其**个人**的 MCP 服务器凭据，使得消息归属于具体发送者，而不是共享一个静态凭据（目前所有群消息都使用同一个 `header` 凭据）。
- **路线图信号**: 这是项目向**多租户/多用户协作**演进的关键需求。结合 #1295（修复 DM 分类），可以看出项目正在系统性地处理"会话身份"这一基础抽象。**预计会被纳入近 1-2 个版本的路线图**。
- **建议优先级**: 中-高，属于结构性功能，可能影响架构。

---

## 7. 用户反馈摘要

由于今日所有 Issue 均为新建且 0 评论，**尚无充分的用户讨论样本**。从 Issue 描述中可提炼以下痛点：

| 用户 | 痛点 | 场景 |
|---|---|---|
| `tomachianura` | Skills 创建接口的"伪成功"问题——API 报告成功，但生成的工件不可用，**静默失败**是严重的可用性反模式 | 开发者扩展 AI 智能体能力 |
| `tomachianura` | 共享聊天中缺少发送者级身份隔离，**安全和审计**需求未满足 | 团队协作部署 Bot |

✅ **正面信号**: 贡献者选择了直接提 PR 修复而非仅报告问题，体现了"建设性反馈"的高质量社区文化。

---

## 8. 待处理积压

由于今日数据量较小，**无法评估长期未响应积压**。但以下几点值得维护者关注：

1. **审 review 优先事项**: [PR #1293](https://github.com/moltis-org/moltis/pull/1293) 和 [PR #1295](https://github.com/moltis-org/moltis/pull/1295) 均为高/中严重度的修复 PR，建议尽快 review，避免 #1292 类 Bug 在主干上扩大影响。

2. **功能请求优先级评估**: [Issue #1294](https://github.com/moltis-org/moltis/issues/1294) 涉及架构级变更，建议维护者尽早表态（accept/needs-design/defer），以便贡献者明确后续投入方向。

3. **贡献者多样性预警**: 今日所有活跃均由 `tomachianura` 一人贡献。建议关注项目是否需要主动招募更多 reviewer 或 committer，以避免维护风险。

---

## 附录：原始数据汇总

| 类型 | 编号 | 标题 | 状态 | 链接 |
|---|---|---|---|---|
| Issue | #1294 | per-sender MCP credentials in shared chats | OPEN | [🔗](https://github.com/moltis-org/moltis/issues/1294) |
| Issue | #1292 | create_skill writes unquoted YAML frontmatter | OPEN | [🔗](https://github.com/moltis-org/moltis/issues/1292) |
| PR | #1295 | fix(discord): classify direct messages as direct chats | OPEN | [🔗](https://github.com/moltis-org/moltis/pull/1295) |
| PR | #1293 | fix(skills): quote SKILL.md frontmatter | OPEN | [🔗](https://github.com/moltis-org/moltis/pull/1293) |

**健康度总评**: 🟢 **稳定** — 活跃度低但信号清晰，无未解决紧急问题，关键修复 PR 待合并。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期**：2026-10-06
**数据来源**：github.com/agentscope-ai/CoPaw（仓库实际链接为 agentscope-ai/QwenPaw）
**统计窗口**：过去 24 小时（2026-10-05 ~ 2026-10-06）

> ⚠️ 说明：用户提供仓库名为 **CoPaw**，但所有 Issue / PR 链接均指向 `agentscope-ai/QwenPaw`，二者疑为同一项目在不同阶段的命名。本报告沿用用户提供的 "CoPaw" 称呼，原始链接保留。

---

## 1. 今日速览

CoPaw 仓库在过去 24 小时内保持 **高度活跃**：共 41 条新开 / 活跃 Issue、22 条 PR 更新，无版本发布。议题覆盖 **模型接入、文件处理、浏览器自动化、MCP 集成、桌面客户端、内存索引、工具审批** 等多个核心模块，反映项目正同时推进 2.2.x 稳定版的修复与 2.2.2 beta 系列的能力扩展。**健康度评估：良好** —— 大量 Bug 已伴随 fix PR 提交，Issue ↔ PR 关联度较高，社区反馈进入良性闭环。

---

## 2. 版本发布

**无新版本发布。** 当前社区讨论版本集中在 `v2.2.0 / 2.2.1 / 2.2.2.beta4`，多个 Issue 显示 2.2.2.beta4 仍存在 LAN 访问、工具审批失效等问题（[#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)、[#8105](https://github.com/agentscope-ai/QwenPaw/issues/8105)），建议在正式发版前完成验证。

---

## 3. 项目进展

### 已关闭的 PR（仅 1 条）
- **[#8113](https://github.com/agentscope-ai/QwenPaw/pull/8113) [size/XL] feat(channels): pilot backward-compatible DingTalk plugin**（lalaliat）
  将钉钉渠道实现下沉为独立 `dingtalk` channel 插件，并保证老工作区凭据、扫码配置、卡片表单向后兼容。**但该 PR 在当日被关闭**，可能因范围过大（XL）需要拆分或调整方案，钉钉插件化路径仍待后续重提。

### 已关闭的 Issue（仅 1 条）
- **[#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104)** *OpenCode API need new header `x-opencode-session`* —— 标题为 Question 类型，关闭意味着维护者已确认该需求将在另一路径解决。

### 关键功能与修复推进（开放 PR，附关联 Issue）
| PR | 关联 Issue | 模块 | 意义 |
|---|---|---|---|
| [#8096](https://github.com/agentscope-ai/QwenPaw/pull/8096) | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | providers | 上抛 `finish_reason="length"`，解决"截断 / 完成"无区分问题 |
| [#8090](https://github.com/agentscope-ai/QwenPaw/pull/8090) | [#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074) | providers/openai | 让 GPT-6 模型走 `max_completion_tokens`，修复 400 |
| [#8051](https://github.com/agentscope-ai/QwenPaw/pull/8051) | [#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047) | mcp | 把 422 + 纯文本视作 legacy 协议证据，启用 `streamable_http` 降级 |
| [#8050](https://github.com/agentscope-ai/QwenPaw/pull/8050) | [#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046) | chats | 用 DST-aware 时区解析 transcript 时间戳 |
| [#8062](https://github.com/agentscope-ai/QwenPaw/pull/8062) | [#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040) | memory | 单 chunk 超长不再污染整批 embedding |
| [#8052](https://github.com/agentscope-ai/QwenPaw/pull/8052) | [#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035) | transcription | 让 `transcription_model` 在设置页可配 |
| [#8055](https://github.com/agentscope-ai/QwenPaw/pull/8055) | [#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013) | skills | 大技能下载从事件循环剥离 + 清扫孤儿 stage |
| [#8048](https://github.com/agentscope-ai/QwenPaw/pull/8048) / [#8028](https://github.com/agentscope-ai/QwenPaw/pull/8028) | [#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002) | security | 在 unsandboxed fallback 前拦截 Office COM 自动化 |
| [#8029](https://github.com/agentscope-ai/QwenPaw/pull/8029) / [#7987](https://github.com/agentscope-ai/QwenPaw/pull/7987) | [#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984) | browser | 暴露 `ignore_default_args` 去掉 Playwright 的 `--disable-extensions` |
| [#7988](https://github.com/agentscope-ai/QwenPaw/pull/7988) | [#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980) | tools | `grep_search` 跳过二进制与 `history.db-wal` |
| [#8010](https://github.com/agentscope-ai/QwenPaw/pull/8010) | [#8009](https://github.com/agentscope-ai/QwenPaw/issues/8009)（不在数据中） | agents | 媒体负载被拒后能从上下文中剔除并恢复会话 |
| [#7986](https://github.com/agentscope-ai/QwenPaw/pull/7986) | — | providers | 自定义 endpoint 跳过静态 context pattern 表 |
| [#8012](https://github.com/agentscope-ai/QwenPaw/pull/8012) | — | telegram | 修正 markdown fenced code 渲染 |
| [#8033](https://github.com/agentscope-ai/QwenPaw/pull/8033) | — | tauri | 桌面端第二实例不再误杀第一实例后端 |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995)（不在数据中） | console | Files 面板刷新时保留展开状态 |

**综合判断**：今日"Issue 提报 → PR 修复"的链路 **非常紧密**，绝大多数 Bug 在 1-7 天内进入 fix PR 阶段，体现出项目维护节奏健康。唯一未关联 fix 的是 #8022（send_file_to_user 污染）的整体方案。

---

## 4. 社区热点

按 24 小时内评论数排序：

1. **[#7599 (4 💬)](https://github.com/agentscope-ai/QwenPaw/issues/7599) — opencode go 模型 MissingSessionID**（v2.2.0，已开 29 天）
   用户长期无法使用 opencode 套餐的 `omen-alpha` 模型，根因是 `x-opencode-session` header 缺失。诉求背后是 OpenCode 平台对 session 鉴权的新约束尚未在 CoPaw 抽象层落实。

2. **[#8022 (4 💬)](https://github.com/agentscope-ai/QwenPaw/issues/8022) — `send_file_to_user` 产生污染导致全模型 400**
   由 QwenPaw Agent 代用户提交（AI Submission Notice），揭示了 file/image 内容块 + 空 assistant 消息在 DeepSeek / OpenAI / Anthropic 等多 provider 同时复现的严重问题，**且缺乏"按模型能力降级 content"的统一机制**。

3. **[#7991 (4 💬)](https://github.com/agentscope-ai/QwenPaw/issues/7991) — TaskTracker zombie 任务计数不一致**
   Dashboard 显示 "2 running" 但 `/api/chats` 只返回 1 条；`task_tracker.get_global_status()` 与 `tracker.get_status(chat_id)` 计数口径不同。属于状态聚合层的正确性问题。

4. **[#7948 (3 💬)](https://github.com/agentscope-ai/QwenPaw/issues/7948) — Web Console 布局破坏用户输入**
   关注 UI / UX 体验层级，反映 Console 在响应式 / 输入区布局上仍需打磨。

5. **并列 2 💬 的热点**（[#8104](https://github.com/agentscope-ai/QwenPaw/issues/8104)、[#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094)、[#8047](https://github.com/agentscope-ai/QwenPaw/issues/8047)、[#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077)、[#8074](https://github.com/agentscope-ai/QwenPaw/issues/8074)、[#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073)、[#8064](https://github.com/agentscope-ai/QwenPaw/issues/8064)、[#8046](https://github.com/agentscope-ai/QwenPaw/issues/8046)、[#7984](https://github.com/agentscope-ai/QwenPaw/issues/7984)、[#8042](https://github.com/agentscope-ai/QwenPaw/issues/8042)、[#8040](https://github.com/agentscope-ai/QwenPaw/issues/8040)、[#8035](https://github.com/agentscope-ai/QwenPaw/issues/8035)、[#8013](https://github.com/agentscope-ai/QwenPaw/issues/8013)、[#8002](https://github.com/agentscope-ai/QwenPaw/issues/8002)、[#7980](https://github.com/agentscope-ai/QwenPaw/issues/7980)、[#7959](https://github.com/agentscope-ai/QwenPaw/issues/7959)、[#7943](https://github.com/agentscope-ai/QwenPaw/issues/7943)）
   覆盖：OpenAI gpt-6 接入、DeepSeek PDF 永久破会话、Moonshot MCP schema、Windows sandbox ACL 锁盘、Console 启动阻塞等高优先级议题。

**用户诉求共性**：希望 CoPaw 在 **多 provider 能力差异（DST / multimodal / max_tokens / schema）** 上做更稳健的"特性探测 + 降级"，而不是把每个 provider 的怪癖都甩到用户配置层。

---

## 5. Bug 与稳定性

按严重程度排序（🔴 严重 / 🟠 高 /

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-06

> 数据范围：2026-10-05 至 2026-10-06（UTC），样本来源：zeroclaw-labs/zeroclaw

---

## 1. 今日速览

ZeroClaw 今日维持高强度迭代节奏：**24 个 Issues 活跃更新、50 个 PR 流转**，但无新版本发布，处于 "代码集中入仓、临近 v0.8.6 / v0.9.0 发布窗口" 的典型状态。Issue 关闭率 12.5%（3/24），PR 合并/关闭率 10%（5/50 待处理 45）——表面看吞吐尚可，但 45 个待合并 PR 中存在多个 XL 规模、横跨安全/架构/插件/RPC 的大改动，存在较高合并风险。重点议题集中在三条主线：**Config 数据丢失防护**（#10495 已闭，#11527 跟进）、**沙箱链路完整性**（Firejail/bubblewrap 三个新 bug），以及 **Colony / SOP / RPC 转向 parity** 等面向 v0.9.0 的大型特性集。整体健康度评估：**活跃但偏载，关键脆弱项目**。

---

## 2. 版本发布

**无新版本。**

从标签 `release:v0.8.6` 和 `release:v0.9.0` 看，项目正同时推进两条发布线：
- **v0.8.6（近期）**：插件通道实例绑定、桌面端内核修复
- **v0.9.0（中远期）**：RPC 转向 parity、仪表盘嵌入、per-agent 工具作用域

> 详见 [Issue 列表](https://github.com/zeroclaw-labs/zeroclaw/issues?q=sort:updated-desc) 与 [PR 列表](https://github.com/zeroclaw-labs/zeroclaw/pulls?q=sort:updated-desc)。

---

## 3. 项目进展

今日有 **5 个 PR 进入关闭/合并状态**，以下为重要成果：

### ✅ 已合并 / 关闭的关键 PR

| PR | 标题 | 影响范围 | 备注 |
|---|---|---|---|
| [#10480](https://github.com/zeroclaw-labs/zeroclaw/pull/10480) | fix(runtime): recover from rejected image requests | Runtime / Providers（XL） | **大型修复**：从带图像的 HTTP 400 中可恢复重试，对 Anthropic / Compatible / Router 三类 provider 生效。推动了 #9887、#11166 的前置条件。 |
| [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) | fix(config): refuse unproven full saves over existing files | Config（breaking-change） | **直接对应 #10495**：拒绝未经加载来源验证的"全量保存"，首次创建与已加载保存仍允许。S0 数据丢失风险的兜底防线落地。 |

### 🟢 处于活跃跟进的关键 PR（OPEN，今日有更新）

- **[#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302)** — `feat(plugins): bind channel instances and seed their grants at install`（v0.8.6，XL）。直接落地 [#10996](https://github.com/zeroclaw-labs/zeroclaw/issues/10996) 提出的"插件安装时绑定通道 + 授权"诉求，是 v0.8.6 的功能主线。
- **[#11272](https://github.com/zeroclaw-labs/zeroclaw/pull/11272)** — `fix(release): embed the dashboard in Linux and Windows desktop kernels`（v0.9.0，distinguished contributor）。修复桌面端 Release Stable 内核未携带仪表盘 web-dist 资源的问题，影响所有 Linux/Windows 桌面安装用户。
- **[#10611](https://github.com/zeroclaw-labs/zeroclaw/pull/10611)** — `feat(providers): adapt Anthropic and Bedrock to adaptive-thinking Claude models`（XL）。适配 Anthropic Fable 5.x、Opus 4.7/4.8/5、Sonnet 5 的自适应思考协议——temperature 与 thinking budget 的限制差异是关键。
- **[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)** — `fix(tools): per-agent ownership scoping for session tools and discord_search`（v0.9.0，p1，XL）。关闭 `sessions_list/history/send` 与 Discord 命名空间预测的 check/use 竞态，是身份与访问治理的核心修复。
- **[#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132)** — `feat(runtime): turn parity over RPC for steering, totals, and session ops`（v0.9.0，XL）。补齐 RPC 转向 steering channel，过程中消息不再被"硬排队"在整轮之后。

### 推进评估

今日净推进了 **Config 数据保护** 与 **图像重试恢复** 两条独立的事故级修复线；面向 v0.9.0 的 RPC parity、安全作用域（per-agent）、桌面端打包修复均处于"作者待处理 / 维护者评审"阶段。**主线净推进 ≈ 12%**，速度健康但积压在加剧。

---

## 4. 社区热点

按评论数与标签 `distinguished contributor / interactions` 综合排序：

| 编号 | 类型 | 标题摘要 | 热度 |
|---|---|---|---|
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Bug · P0 · **CLOSED** | Config::save() 将 109 KB 配置覆盖为 702 字节空壳 — **S0 数据丢失** | 6 评论 |
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Enhancement · P2 | 超大图像降采样而非丢弃，且允许 multimodal 限值关闭 | 4 评论 |
| [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) | Feature · Signal 媒体附件 | **👍1** 唯一点赞，建议加 Signal 出入站媒体统一化 | 4 评论 |
| [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | Feature · Schema V4 断点 | 移除死键、SaaS 表面与 CLI 包装配置 — breaking-change | 3 评论 |
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | Bug · P2 · **CLOSED** | 150 ms sleep 与并行运行时门竞态 — flaky test | 3 评论 |

**诉求分析**：
- **数据安全** 是头号诉求：#10495 在 25 个 agent 配置被空壳覆盖后，被紧急归为 S0，触发了 #11527 的"未证明来源即拒绝全量保存"机制。
- **图像与多媒体管线一致性**：#9887、#7891、#11166 三者形成完整的故事弧——"超大图像降级 + 双向媒体协议 + 超额图像批处理淘汰"，与 #11554（路径标记幻影重发）共同指向"图像会话历史的真实语义"问题。
- **配置 Schema 净化**（#8310）：v3→v4 是面向长期维护者的清理性断点，反映社区对"配置遗产"的整理意愿。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 S0 — 数据丢失 / 安全风险（最高）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap 沙箱在 Linux 上未被检测到，回退到应用层 | OPEN | ✅ [#11559](https://github.com/zeroclaw-labs/zeroclaw/pull/11559) 同日提交 fix：探测 bwrap 在 Landlock/Firejail 之间 |
| [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | Config::save() 可将完整 config 覆盖为空壳 | **CLOSED** | ✅ [#11527](https://github.com/zeroclaw-labs/zeroclaw/pull/11527) 同日合入 |

### 🟠 S1 — 工作流阻塞

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 报 `invalid --nowheel` 命令行选项 | OPEN | ❌ 暂无 |
| [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail 报 `invalid private directory`，日志不可读 | OPEN | ❌ 暂无 |
| [#11294](https://github.com/zeroclaw-labs/zeroclaw/issues/11294) | 并行 RC 测门 150 ms sleep flaky | **CLOSED** | （测试修复） |

### 🟡 S2 — 降级行为 / 中等风险

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#10923](https://github.com/zeroclaw-labs/zeroclaw/issues/10923) | 沙箱发现忽略 TUI PATH，与 launcher 解析不一致（P1） | OPEN | ❌ |
| [#11481](https://github.com/zeroclaw-labs/zeroclaw/issues/11481) | ZeroCode 在终端断开后 100% CPU 空转（P1） | OPEN | ❌ |
| [#11515](https://github.com/zeroclaw-labs/zeroclaw/issues/11515) | 成本账本丢弃撕裂写入记录，无隔离、总账虚低 | OPEN | ✅ [#11557](https://github.com/zeroclaw-labs/zeroclaw/pull/11557) 同日报复 |
| [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | 路径标记图像在后续回合被反复重发，模型描述幻影"新"图像 | OPEN | ❌ |
| [#11482](https://github.com/zeroclaw-labs/zeroclaw/issues/11482) | ZeroCode 聊天更新卡在日志通知后（P1） | **CLOSED** | （in-progress 推进） |
| [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | 工具 egress 仪式忽略 `websocket_client`/`socket_client` 声明 | OPEN | ❌ |

**修复率**：8 个开放 bug 中，**3 个已有同日 fix PR**（#11540、#11515、#10495），修复准备度 37.5%。**沙箱链路（#11538/#11539/#11540/#10923）仍是最大未解风险**，且四个问题之间高度耦合，建议统一处理。

---

## 6. 功能请求与路线图信号

按需求强度与纳入版本概率排列：

### 极高纳入概率（v0.8.6 / v0.9.0 标签已挂）

| 需求 | Issue / PR | 预期版本 | 概率 |
|---|---|---|---|
| 插件安装即绑定通道 + 授权 | [#10996](https://github.com/zeroclaw-labs/zeroclaw/issues/10996) → [#11302](https://github.com/zeroclaw-labs/zeroclaw/pull/11302) | **v0.8.6** | ⭐⭐⭐⭐⭐ |
| Release 二进制体积分档度量 | [#11306](https://github.com/zeroclaw-labs/zeroclaw/pull/11306) | **v0.8.6** | ⭐⭐⭐⭐⭐ |
| Linux/Windows 桌面内核嵌入仪表盘 | [#11272](https://github.com/zeroclaw-labs/zeroclaw/pull/11272) | **v0.9.0** | ⭐⭐⭐⭐⭐ |
| Per-agent 工具所有权作用域 | [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746) | **v0.9.0** | ⭐⭐⭐⭐⭐ |
| RPC 转向 parity（steering / 总额 / 会话操作） | [#11132](https://github.com/zeroclaw-labs/zeroclaw/pull/11132) | **v0.9.0** | ⭐⭐⭐⭐⭐ |

### 高纳入概率（等待前置）

| 需求 | Issue | 前置依赖 |
|---|---|---|
| Signal 媒体附件双向支持 | [#7891](https://github.com/zeroclaw-labs/zeroclaw/issues/7891) → [#11556](https://github.com/zeroclaw-labs/zeroclaw/pull/11556)（XL） | 依赖 #10480 已合并 ✅ |
| 通道内飞行并发边界可配置 | [#11558](https://github.com/zeroclaw-labs/zeroclaw/pull/11558) | 独立 PR，作者积极 |
| 图像超额批处理淘汰 | [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) | 依赖 #10480 ✅ |
| 多模态限值 0 即禁用 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 与 #11166 同方向 |
| Schema V4 breaking cut | [#8310](https://github.com/zeroclaw-labs/zeroclaw/issues/8310) | 独立但需要维护者批准 |

### 已搁置 / Icebox（v0.10+ 信号）

[#11545](https://github.com/zeroclaw-labs/zeroclaw/issues/11545)、[#11546](https://github.com/zeroclaw-labs/zeroclaw/issues/11546)、[#11547](https://github.com/zeroclaw-labs/zeroclaw/issues/11547)、[#11548](https://github.com/zeroclaw-labs/zeroclaw/issues/11548)、[#11549](https://github.com/zeroclaw-labs/zeroclaw/issues/11549)、[#11550](https://github.com/zeroclaw-labs/zeroclaw/issues/11550)、[#11551](https://github.com/zeroclaw-labs/zeroclaw/issues/11551) — 七个 SOP（标准作业程序）相关 feature 均标记 `status:icebox`，反映 **SOP 体系建设仍是"看得见、摸不着"阶段**。#11560 Colony Agent Workspace 是 SOP 的"上层叙事"，但其 `do-not-merge` 标记说明尚未到达评审成熟度。

### 路线图整体信号

- **v0.8.6 = 插件与发布工程**（仪式化、生态健全化）
- **v0.9.0 = 安全与一致性**（per-agent 隔离、RPC parity、桌面打包）
- **v0.10+ = SOP/Colony/Agent 协作层**（冰盒阶段）

---

## 7. 用户反馈摘要

> 提炼自 Issues / PR 的真实用户场景描述

### 痛点一：**数据无声丢失是最大恐惧**
> "On a machine with a populated `~/.zeroclaw/config.toml` (109 KB, 25 agents), a workspace test run

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*