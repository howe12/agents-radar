# OpenClaw 生态日报 2026-09-02

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-02 02:23 UTC

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

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析报告

**报告日期**：2026-09-02 ｜ **数据范围**：10 个项目过去 24 小时动态

---

## 一、生态全景

2026 年 9 月初的开源 AI 智能体生态呈现出 **"架构深化 + 质量收敛"** 双轨并行的态势：以 ZeroClaw、NanoClaw、CoPaw 为代表的工程化项目正集中投入 RFC 治理、Provider 契约重构与安全边界硬化；IronClaw、Hermes Agent 等进入"内功期"，通过 WebUI 统一化、Bot 群聊架构、agent-loop 重构打磨产品基础；NanoBot、Moltis 等处于稳定修复窗口，专注消解长期积压 Bug；LobsterAI 转向体验打磨阶段。整体来看，**生态重心已从"功能堆叠"过渡到"协议契约、可观测性、安全治理、跨平台一致性"四个核心议题**，MCP 富 UI 化、多 agent 协同、长期记忆分层等趋势开始形成跨项目共识。

---

## 二、各项目活跃度对比

| 项目 | 24h Issue | 24h PR | 已合并/关闭 | 新版本 | 核心动作 | 健康度 |
|---|---|---|---|---|---|---|
| **OpenClaw**（参照基线） | — | — | — | — | （无今日数据） | — |
| **CoPaw** | 32 | 35 | 15 PR + 15 Issue | **v2.2.0-beta.6** | ReMe 打包、Tool Guard 续行绕过修复 | 🟢 极高活跃 |
| **ZeroClaw** | 32 | 50 | 13 PR + 4 Issue | — | 5 项 RFC 投票、#8289 鉴权栈 stacked PR 推进 | 🟢 高强度 |
| **Hermes Agent** | 50 | 50 | 3 PR + 6 Issue | — | Bot 群聊（#98307/#98073）、Prefix-cache 修复 | 🟢 高活跃 |
| **NanoBot** | 6 | 19 | 9 PR | — | WebSocket 跨平台、ephemeral 上下文、任务组泄漏 | 🟢 高活跃 |
| **IronClaw** | 14 | 19 | 8 PR + 4 Issue | — | agent-loop 重构、Slack live-qa 33 连败修复 | 🟢 稳健 |
| **NanoClaw** | 2 | 13 | 1 PR（关闭未合） | — | Provider Contract 6-PR 系列重构 | 🟡 高活跃/低合入 |
| **LobsterAI** | 12 | 9 | 5 PR + 9 Issue | — | 视频分享、onboarding 埋点、9 stale 批量清理 | 🟡 中高 |
| **PicoClaw** | 3 | 5 | 2 PR | — | Telegram 三连 PR（mention/document/reply） | 🟡 中等 |
| **Moltis** | 0 | 4 | 2 PR + 2 Issue | — | Docker loopback auth + MCP `streamable-http` 修复 | 🟢 低噪高效 |
| **ZeptoClaw** | 0 | 2 | 1 PR | — | Dependabot Rust 镜像升级 | 🟢 平稳 |
| **NullClaw** | 0 | 0 | 0 | — | 24h 无活动 | 🔴 停滞 |
| **TinyClaw** | 0 | 0 | 0 | — | 24h 无活动 | 🔴 停滞 |

**关键观察**：
- PR 关闭率最高的三个项目：**Moltis（50%）、IronClaw（42%）、CoPaw（43%）**——反映审阅带宽与质量门控最成熟。
- "高活跃 + 低合入"模式集中在 **ZeroClaw（26%）、NanoClaw（8%）**——RFC/stacked series 类项目特征。
- **NullClaw 与 TinyClaw 完全停滞**，需关注是否已归档或转入内部维护。

---

## 三、OpenClaw 在生态中的定位

> 注：本次未提供 OpenClaw 当日具体动态，以下分析基于对照与生态语境。

**OpenClaw 作为生态核心参照系，其定位体现于三个维度：**

1. **基础设施层（被依赖方）**：LobsterAI（PR #1113 "OpenClaw 延迟配置同步"）、Hermes Agent（cron 调度、Desktop Gateway 架构借鉴）、NanoBot（agent-loop 抽象）均在不同程度上参照或对接 OpenClaw 的延迟配置 / stdio MCP / Channel 集成范式。

2. **架构范式锚点**：从 LobsterAI 的"延迟配置立即 flush"补丁（PR #1113）可看出，OpenClaw 的 file-watcher reload 协作模式已成为下游消费方的契约性预期。

3. **生态辐射半径**：相较 Hermes Agent（多 Bot 协作系统）、CoPaw（v2.2 全栈产品）、ZeroClaw（RFC 治理引擎）等**产品化/治理化**定位，OpenClaw 更接近**"Agent 操作系统内核"**角色——关注运行时、通道、调度原语，而非终端用户体验。

**与同类相比的差异**：
- vs. **Hermes Agent**：OpenClaw 不强调 Bot 群聊的产品化封装；Hermes 走"多 VPS 协同"路线，OpenClaw 仍以单实例 Channel 集成为主。
- vs. **IronClaw**：IronClaw 强 agent-loop 内功（capability stage 拆解）+ Live QA dogfooding；OpenClaw 更接近"运行时协议层"。
- vs. **ZeroClaw**：ZeroClaw 走 RFC 治理 + 鉴权栈契约化路线，是工程严谨度最高的项目；OpenClaw 创新性更倾向于 Channel 协议与多端兼容。

**社区规模推测**：从下游项目（NanoBot、IronClaw、LobsterAI 等）的依赖密度看，OpenClaw 处于"被参照但本身不喧哗"的位置，与 ZeroClaw 的"主动治理"、CoPaw 的"产品迭代"形成生态三极。

---

## 四、共同关注的技术方向

### 🔥 1. **MCP 生态从文本向富 UI 演进**
- **NanoBot** [#5251](https://github.com/HKUDS/nanobot/issues/5251)：WebUI 中实现 MCP Apps host（`io.modelcontextprotocol/ui`）
- **LobsterAI** [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)：MCP stdio 命令与外部 URL 边界硬化
- **Moltis** [PR #1251](https://github.com/moltis-org/moltis/pull/1251)：修复 `streamable-http` 传输的 doctor 误报
- **PicoClaw** [#3269](https://github.com/sipeed/picoclaw/issues/3269)：MCP 连接失败导致 agent loop 挂死（核心痛点）

**共同诉求**：MCP 已成事实标准，但**传输兼容性、错误恢复、富客户端扩展**三大问题亟待规范。

### 🔥 2. **长期记忆 / 上下文分层持久化**
- **NanoBot** [#5586](https://github.com/HKUDS/nanobot/issues/5586)：ephemeral 运行时上下文块（避免一次性数据污染长会话）
- **CoPaw** [PR #7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)：可插拔长期记忆后端（PowerContext 扩展 `BaseMemoryManager`）
- **ZeroClaw** [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526)：仅追加式会话事件历史 + 派生 agent 流
- **LobsterAI** [PR #2593](https://github.com/netease-youdao/LobsterAI/pull/2593)：视频分享的"任务 ID + 输出序号溯源"

**共同诉求**：从"全量持久化"转向"分层生命周期管理"，append-only event log 成为基础设施词汇。

### 🔥 3. **安全边界与沙箱治理**
- **NanoClaw** [PR #3680](https://github.com/qwibitai/nanoclaw/pull/3680)：mount-security 旁路漏洞修复
- **CoPaw** [PR #7472](https://github.com/agentscope-ai/QwenPaw/pull/7472)：Tool Guard shell 续行绕过修复
- **LobsterAI** [PR #2590](https://github.com/netease-youdao/LobsterAI/pull/2590)：MCP stdio 命令边界硬化
- **ZeroClaw** [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)：delegate 子代理工具越权 + [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 沙箱策略统一 RFC
- **IronClaw** [#8015](https://github.com/nearai/ironclaw/issues/8015)：Rootless Docker 工作区权限

**共同诉求**：allowlist 旁路、子代理越权、跨平台部署权限成为系统级风险面。

### 🔥 4. **WebUI / 设计系统统一化**
- **IronClaw** [Issues #8017-#8020](https://github.com/nearai/ironclaw/issues/8017) + 4 个对应 PR：SearchField / InlineNotice / Input / SelectMenu 共享组件
- **NanoBot** [PR #5625](https://github.com/HKUDS/nanobot/pull/5625)：WebUI 首次运行 AI 配置引导
- **LobsterAI** [PR #2594](https://github.com/netease-youdao/LobsterAI/pull/2594)：onboarding CTA 样式统一

**共同诉求**：消除本地样式漂移，建立"行为不变"的迁移路径。

### 🔥 5. **Channel / 多端消息连续性**
- **Hermes Agent** [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) + [#98307](https://github.com/NousResearch/hermes-agent/pull/98307)：Bot 群聊跨 Desktop/VPS 持续运行
- **PicoClaw** [#3356/#3357/#3358](https://github.com/sipeed/picoclaw/pull/3356)：Telegram mention_only、文档回挂、ReplyToMessageID
- **NanoBot** [#5493](https://github.com/HKUDS/nanobot/issues/5493)：微信/飞书/Telegram HTML/MD 预览
- **LobsterAI** [PR #2593](https://github.com/netease-youdao/LobsterAI/pull/2593)：AI 视频分享的来源校验链路

**共同诉求**：跨平台消息上下文、媒体附件、引用连续性。

### 🔥 6. **Provider / 模型抽象层契约化**
- **NanoClaw** 6-PR 系列（#3581/#3584/#3585/#3586/#3588/#3591）：runtime/host/setup/codex/opencode provider contract
- **IronClaw** [#7998](https://github.com/nearai/ironclaw/pull/7998)：NEAR AI model capabilities 透传
- **Moltis** [#1253](https://github.com/moltis-org/moltis/pull/1253)：跨 provider 推理档位抽象（low/medium/high/max）

**共同诉求**：将"散落 provider 实现"重塑为"契约驱动架构"，降低新模型/新平台接入成本。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构 | 核心竞争壁垒 |
|---|---|---|---|---|
| **CoPaw** | 全栈产品（Desktop + Mobile + 长期记忆） | C 端重度 AI 用户 | PyInstaller 打包 + ReMe 记忆栈 + 多 agent runtime | 产品成熟度 + 移动端草案 |
| **ZeroClaw** | 治理 + RFC + 鉴权 | 企业 / 平台构建者 | RFC 驱动 + stacked PR 模式 + WASM 插件运行时 | 工程严谨度与治理透明度 |
| **Hermes Agent** | 多 Bot 协作 + Desktop Gateway | 多设备/VPS 部署者 | 跨进程租约 + 多 Provider + Live Dashboard | Bot 群聊产品化 |
| **NanoBot** | WebUI + 跨平台工具集 | 自托管开发者 | AgentLoop + MCP + Channel 集成 | 工具完备度 + 跨平台 |
| **IronClaw** | agent-loop 内功 + Live QA dogfooding | 内部生产用户 | Rust capability stage + Live QA + Slack/WebUI | 内部质量闭环 |
| **NanoClaw** | Provider 契约化重构 + 多引擎 | CLI 重度用户 / 平台型开发者 | ncl CLI + Provider Contract + Bun 运行时 | CLI 一致性 + 治理 |
| **LobsterAI** | 消费级 AI 助手（视频、引导、定时） | 大众用户 | Onboarding 漏斗 + 视频溯源 + 多通道通知 | 用户体验 + 引导设计 |
| **PicoClaw** | 极致轻量 + 边缘部署 | IoT / 嵌入式 / 家庭用户 | Telegram Channel + MCP + Worker 模式 | 资源占用与可移植性 |
| **Moltis** | 推理档位 + Docker 部署 | 本地开发者 | Docker 一键 + MCP health + 推理 effort 抽象 | 部署易用性 |
| **ZeptoClaw** | 极简基础设施 | 内部/小众用户 | 轻量容器 + Rust 基础镜像 | 维护简洁度 |

**关键差异化洞察**：
- **"重型 vs. 轻量"两极**：CoPaw（PyInstaller 全栈）↔ PicoClaw（10–20MB 边缘）
- **"产品型 vs. 引擎型"两极**：LobsterAI（消费体验）↔ ZeroClaw（治理/契约）
- **"单实例 vs. 协作型"两极**：NanoBot/Moltis（自托管）↔ Hermes Agent（多 VPS 协同）

---

## 六、社区热度与成熟度

### 🟢 快速迭代期（高活跃 + 高产出）

1. **CoPaw** — v2.2.0-beta.6 发布，35 PR / 32 Issue，ReMe 全栈重构进行中

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**：2026-09-02
**数据来源**：[github.com/HKUDS/nanobot](https://github.com/HKUDS/nanobot)
**报告范围**：过去 24 小时

---

## 1. 今日速览

NanoBot 今日保持高强度迭代节奏，24 小时内共 **25 项**动态（6 条 Issue + 19 条 PR），**0 个新版本发布**。议题层面以 Agent 运行时稳健性、WebUI 体验优化、Channel 集成为主线，多个长期遗留的 Bug（任务组泄漏、工具缺失、平台兼容）开始集中处理。值得注意的是 `#5586 ephemeral runtime context` 与 `#5428 AgentLoop 任务组清理` 各自出现 **多份并行 PR/方案**，反映出社区贡献踊跃，但需要维护者协调合并策略以避免重复劳动。整体活跃度 **高**，但缺乏发版动作，处于"集中修复 + 蓄势发版"阶段。

---

## 2. 版本发布

⚠️ **无新版本发布**。当前修复与新功能均在主干分支累积，尚未打 tag。建议关注者关注 main 分支 nightly 构建以获取最新修复。

---

## 3. 项目进展（已合并/关闭的重要 PR）

今日共有 **9 个 PR 被关闭**（含合并与拒绝），覆盖文档、稳定性、重构、安全与新功能多个维度：

| PR | 类型 | 影响 |
|---|---|---|
| [#5622](https://github.com/HKUDS/nanobot/pull/5622) | fix(dream) | 修复 Dream 巩固流程重复注入 SOUL/USER/MEMORY 文件的 token 浪费 Bug |
| [#5621](https://github.com/HKUDS/nanobot/pull/5621) | fix(tui) | 修复 TUI 在异步提交后丢失用户已输入内容的回归问题 |
| [#5617](https://github.com/HKUDS/nanobot/pull/5617) | fix(websocket) | 修复 macOS/BSD 平台 WebSocket 健康检查失败（**p1 高优先级**） |
| [#5619](https://github.com/HKUDS/nanobot/pull/5619) | feat(runtime-context) | 引入 `ephemeral` 运行时上下文块，关闭 [#5586](https://github.com/HKUDS/nanobot/issues/5586) |
| [#5615](https://github.com/HKUDS/nanobot/pull/5615) | feat(agent) | 与 #5619 同主题的并行实现 |
| [#5569](https://github.com/HKUDS/nanobot/pull/5569) | refactor(agent) | 抽离工具执行边界，让 AgentRunner 回归 ReAct 协调职责 |
| [#5430](https://github.com/HKUDS/nanobot/pull/5430) | fix(agent) | 修复 AgentLoop 长期运行后空任务组占用内存泄漏 |
| [#5604](https://github.com/HKUDS/nanobot/pull/5604) | docs(edit_file) | 澄清 `edit_file` 三种选择器互斥的运行时约束 |
| [#5603](https://github.com/HKUDS/nanobot/pull/5603) | feat(detector) | 引入"声明动作却未执行"turn 行为检测（**被标记 invalid 关闭**） |

**项目推进评估**：今日集中处理了一批长期欠债——任务组内存泄漏、websocket 跨平台、WebUI/TUI 用户体验、运行时上下文化——多个并行方案的出现说明 PR 评审与去重流程需要加强。

---

## 4. 社区热点

按评论数与活跃度排序：

### 🔥 [#2061 Unable to Copy File Inside Workspace](https://github.com/HKUDS/nanobot/issues/2061) — 3 条评论
社区用户（`sllzwsgdsg`）反馈通过飞书会话让 nanobot 复制文件时，agent 仅反复调用 `list_dir`/`read_file` 而**永远不调用写操作**。该问题从 2026-03-15 持续至今仍未修复，**距今近 6 个月**——是今日最"老化"的活跃议题。

### 🔥 [#5251 Add MCP Apps host support to WebUI](https://github.com/HKUDS/nanobot/issues/5251) — 3 条评论
请求在 WebUI 中实现 MCP Apps 扩展（`io.modelcontextprotocol/ui`），让 MCP 服务端可在结果中附加交互式 UI 组件。代表了 MCP 生态从纯文本/图像向**富客户端 UI**演进的方向。

### 📌 [#5586 ephemeral runtime context blocks](https://github.com/HKUDS/nanobot/issues/5586) — 1 条评论
"运行时上下文块生命周期单一，全部持久化"的设计痛点。当前同时被 [#5615](https://github.com/HKUDS/nanobot/pull/5615)、[#5619](https://github.com/HKUDS/nanobot/pull/5619)、[#5627](https://github.com/HKUDS/nanobot/pull/5627) 三份 PR 关注，**合并前需协调**。

**诉求分析**：社区当前关注焦点集中在 **(1) 文件系统工具完整度**（缺 copy/move）→ **(2) MCP 协议扩展能力**（UI 渲染）→ **(3) 运行时灵活性**（ephemeral 上下文）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | 状态 |
|---|---|---|---|
| 🔴 P1 | [#5617](https://github.com/HKUDS/nanobot/pull/5617) | WebSocket 在 macOS/BSD 平台 SO_ACCEPTCONN 不可移植 | ✅ **已关闭**（已修复） |
| 🟠 中 | [#2061](https://github.com/HKUDS/nanobot/issues/2061) | Agent 在工作区复制文件失败，反复空读 | ❌ **未修复**，长期积压（6 个月）；与 [#5626](https://github.com/HKUDS/nanobot/pull/5626)（新增 `copy_file`/`move_file` 工具）相关 |
| 🟠 中 | [#5624](https://github.com/HKUDS/nanobot/pull/5624) | WebUI 全新 pane 在首次消息持久化前不可删除 | 🛠 **修复 PR 待合并** |
| 🟢 低 | [#5622](https://github.com/HKUDS/nanobot/pull/5622) | Dream 巩固重复注入文件（token 浪费） | ✅ **已关闭** |
| 🟢 低 | [#5621](https://github.com/HKUDS/nanobot/pull/5621) | TUI 提交后用户已输入内容被吞 | ✅ **已关闭** |
| 🟡 待跟进 | [#5431](https://github.com/HKUDS/nanobot/pull/5431) | 后台任务失败未被报告，错误静默 | 🛠 **修复 PR 待合并** |

**稳定性评估**：今日累计关闭了 3 项 P1/P2 级别的稳定性问题（WebSocket 端口检查、Dream token 浪费、TUI 输入丢失），整体稳健性指标向好。但 **#2061 长达半年未根治**值得重点关注。

---

## 6. 功能请求与路线图信号

汇总今日新出现或仍在讨论的需求，结合已有 PR 判断纳入下一版本的可能性：

| 需求 | 来源 Issue | 已存在 PR | 入版概率 |
|---|---|---|---|
| **文件系统 `copy_file` / `move_file`** | [#2061](https://github.com/HKUDS/nanobot/issues/2061)（隐含诉求） | [#5626](https://github.com/HKUDS/nanobot/pull/5626)（OPEN） | 🟢 **高** — 弥补明显能力缺口，PR 设计清晰 |
| **Ephemeral 运行时上下文** | [#5586](https://github.com/HKUDS/nanobot/issues/5586) | [#5619](https://github.com/HKUDS/nanobot/pull/5619)（已关闭）/ [#5627](https://github.com/HKUDS/nanobot/pull/5627)（OPEN） | 🟢 **高** — 已有合并方案 |
| **WebUI 首次运行 AI 配置引导** | 新增 | [#5625](https://github.com/HKUDS/nanobot/pull/5625)（OPEN） | 🟢 **高** — 新手体验改善，合并阻力小 |
| **Telegram 富消息流式发送** | 隐含 | [#5614](https://github.com/HKUDS/nanobot/pull/5614)（OPEN，作者标注"dr…"，仍在自评中） | 🟡 中 — 需 PR 作者完成自评后合并 |
| **Per-session 沙箱隔离（非 WebUI 通道）** | 隐含 | [#5283](https://github.com/HKUDS/nanobot/pull/5283)（OPEN） | 🟡 中 — 安全模型变更，需要架构评审 |
| **MCP Apps host（WebUI 富 UI）** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | ❌ 无 PR | 🟠 低 — 暂无实现 |
| **Channel 中 HTML/.txt/.md 文档预览**（微信/飞书/Telegram） | [#5493](https://github.com/HKUDS/nanobot/issues/5493) | ❌ 无 PR（建议 iframe srcdoc） | 🟠 低 — 跨通道实现复杂 |

**路线图信号**：近期高概率合并的**主力功能**为 — **文件系统扩展工具（copy/move）+ Ephemeral 上下文 + WebUI 新手引导**；**结构性升级**候选为 Per-session 沙箱。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户声音：

- **😤 痛点：工具能力不足导致"假动作"**（[#2061](https://github.com/HKUDS/nanobot/issues/2061)）
  > "agent 反复调用 `list_dir` 和 `read_file` 但从不真正写入"
  
  用户对"看似在做事、实际无操作"的现象表达明确不满，与 [#5603](https://github.com/HKUDS/nanobot/pull/5603) 试图检测的"声明动作却未执行"行为高度一致。

- **🎯 场景：飞书/微信/Telegram 多通道用户对富内容渲染有真实需求**（[#5493](https://github.com/HKUDS/nanobot/issues/5493)、[#5251](https://github.com/HKUDS/nanobot/issues/5251)）
  > "方便预览 HTML/.txt/.md 文档"
  
  多通道用户希望 chat 内嵌可交互 UI 而非纯文本。

- **🛠 期望：默认行为要"开箱即用"**（[#5625](https://github.com/HKUDS/nanobot/pull/5625) 解决）
  > 新装用户面对的不是错误页而是引导页，反映现有体验是"冷启动友好度不足"。

- **🤔 架构诉求：运行时数据需要分层持久化**（[#5586](https://github.com/HKUDS/nanobot/issues/5586)）
  > 用户希望 ephemeral 临时上下文与持久记忆分离，避免一次性数据污染长会话。

---

## 8. 待处理积压（维护者请关注）

以下 Issue/PR 已超过 2 周未更新，存在响应延迟：

| 编号 | 类型 | 标题 | 创建时间 | 静默天数 |
|---|---|---|---|---|
| [#2061](https://github.com/HKUDS/nanobot/issues/2061) | 🐛 Bug | Unable to Copy File Inside Workspace | 2026-03-15 | **~170 天** ⚠️ |
| [#2078](https://github.com/HKUDS/nanobot/pull/2078) | 🔧 Channel PR | Fix/zalo integration refactor | 2026-03-16 | **~170 天** ⚠️ |
| [#5283](https://github.com/HKUDS/nanobot/pull/5283) | 🔒 Security PR | per-session sandbox isolation | 2026-08-07 | ~26 天 |
| [#5431](https://github.com/HKUDS/nanobot/pull/5431) | 🐛 Fix PR | report background task failures | 2026-08-18 | ~15 天 |
| [#5614](https://github.com/HKUDS/nanobot/pull/5614) | 🚀 Feature PR | tg: streaming rich messages | 2026-08-30 | ~3 天（作者自评中） |

**重点关注**：
- 🔴 **#2061 + #2078**：两份 3 月份的旧议题/旧 PR 至今悬而未决，建议维护者优先审查或标注状态。
- 🟡 **#5283（沙箱）**：安全相关，应优先评审以免积压演化为更大架构问题。
- 🟡 **#5431**：错误静默类 Bug，应在下一版本合入。

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h 活跃度 | 25 项 | 🟢 高 |
| PR 合并率（当日） | 9/19 ≈ 47% | 🟢 正常 |
| Bug 关闭率（当日） | 2/2 = 100% | 🟢 优秀 |
| 长期积压（>90d） | 2 项 | 🟠 需清理 |
| 版本发布 | 0 | 🟡 蓄势期 |
| 重复/竞争 PR | 2 组（#

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-02**
**数据来源：github.com/nousresearch/hermes-agent**

---

## 一、今日速览

Hermes Agent 今日呈现高活跃度：在过去 24 小时内共有 50 条 Issues 与 50 条 PRs 出现更新，其中 6 条 Issues 已关闭、3 条 PRs 已合并/关闭，未发布新版本。社区讨论热度集中在 **Bot Mode Group Chat 群聊能力**（多平台互通、Desktop 关闭后持续运行、Web Dashboard 暴露）、**Session/State 一致性**（SQLite WAL 损坏、跨进程会话租约、Desktop 远程 Gateway 恢复失败）以及 **Provider 凭据与缓存**（Anthropic OAuth、xAI 403、prefix-cache 失效）等三大方向。今日关闭的 Issues/PRs 集中在 cron 迟到、Prefix-cache 失效、Windows stdio MCP 与 Desktop Session 恢复等 P1 级别问题，显示维护团队在稳定性侧有明显推进。整体项目健康度良好，但仍存在若干 P1 长期未修 bug 与积压议题（详见第八节）。

---

## 二、版本发布

**无新版本发布。**

---

## 三、项目进展（今日合并/关闭）

| 编号 | 类型 | 标题 | 影响范围 | 链接 |
|------|------|------|----------|------|
| [#99919](https://github.com/NousResearch/hermes-agent/pull/99919) | PR (CLOSED) | `fix(cron)` 为 catch-up 调度打上 scheduled/actual/lateness 标签 | 修复 P1 cron 迟到后 UI 显示为正常运行的回归问题 | [Link](https://github.com/NousResearch/hermes-agent/pull/99919) |
| [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | Issue (CLOSED) | Bug: Current Desktop sends a local runtime ID to a Remote Gateway and cannot restore stored sessions | P1 Desktop 远程 Gateway 会话恢复失败 | [Link](https://github.com/NousResearch/hermes-agent/issues/93888) |
| [#100336](https://github.com/NousResearch/hermes-agent/issues/100336) | Issue (CLOSED) | Prefix-cache invalidation on model switch | P0 性能问题（cache hit 从 2% → 99%） | [Link](https://github.com/NousResearch/hermes-agent/issues/100336) |
| [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) | Issue (CLOSED, duplicate) | Windows stdio MCP client 每次调用失败 | P1 Windows 平台 MCP 不可用 | [Link](https://github.com/NousResearch/hermes-agent/issues/94906) |
| [#99879](https://github.com/NousResearch/hermes-agent/issues/99879) | Issue (CLOSED) | Routines run late after gateway downtime with no missed-run status | P1 定时任务调度异常 | [Link](https://github.com/NousResearch/hermes-agent/issues/99879) |
| [#100708](https://github.com/NousResearch/hermes-agent/issues/100708) | Issue (CLOSED, duplicate) | Matrix gateway 不流式发送 `m.replace` | 与 #58728 合并去重 | [Link](https://github.com/NousResearch/hermes-agent/issues/100708) |
| [#100794](https://github.com/NousResearch/hermes-agent/issues/100794) | Issue (CLOSED, duplicate) | Feature Request: session.dmScope 跨通道共享 DM 会话 | 重复议题关闭 | [Link](https://github.com/NousResearch/hermes-agent/issues/100794) |

**整体评估**：今日净关闭 6 条 Issues / 3 条 PRs，重点收尾了 4 个 P0/P1 稳定性问题。Bot Mode Group Chat 作为最大功能线（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681)、[#89995](https://github.com/NousResearch/hermes-agent/issues/89995)）尚未进入合并阶段，处于多 PR 并行推进中（[#98307](https://github.com/NousResearch/hermes-agent/pull/98307)、[#98073](https://github.com/NousResearch/hermes-agent/pull/98073)）。

---

## 四、社区热点

| 排名 | 编号 | 评论数 | 核心诉求 | 链接 |
|------|------|--------|----------|------|
| 1 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 138 | Skills Hub 索引陈旧（自动化巡检）— P3 自动化告警，但评论密度提示底层数据管道已长期异常 | [Link](https://github.com/NousResearch/hermes-agent/issues/66616) |
| 2 | [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | 19 | Desktop 与 Remote Gateway 之间的 runtime session ID 不互通，导致已存会话永远无法恢复（已关闭） | [Link](https://github.com/NousResearch/hermes-agent/issues/93888) |
| 3 | [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | 18 | **Bot 群聊应在 Desktop 关闭后继续运行** — 跨设备/跨 VPS 的 Bot 群聊是当前最强需求 | [Link](https://github.com/NousResearch/hermes-agent/issues/97681) |
| 4 | [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) | 16 | Bot Mode 群聊房间在 Web Dashboard 与 Gateway 中不可见 — 仅 Desktop Electron 可访问 | [Link](https://github.com/NousResearch/hermes-agent/issues/89995) |
| 5 | [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) | 12 | 大会话 `/compress` 同时存在 **120s 超时报错**与**后台 worker 静默换 session_id** 双重问题 | [Link](https://github.com/NousResearch/hermes-agent/issues/97948) |
| 6 | [#62169](https://github.com/NousResearch/hermes-agent/issues/62169) | 7 | 终端沙箱 CWD 被删除后所有后续命令 exit 126 — 已对应 [#100823](https://github.com/NousResearch/hermes-agent/pull/100823) 修复 PR | [Link](https://github.com/NousResearch/hermes-agent/issues/62169) |

**诉求分析**：Bot Mode 群聊（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) + [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) + [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) + [#98073](https://github.com/NousResearch/hermes-agent/pull/98073)）构成今日最热功能线，体现用户希望将 Hermes 从「单机 Desktop 工具」转向「多 Bot 协作系统」的产品期待。

---

## 五、Bug 与稳定性

### P0（最高严重度）

- **[#100336](https://github.com/NousResearch/hermes-agent/issues/100336)** Prefix-cache invalidation on model switch：系统提示词变更导致整个 prompt 头部失效，cache hit 从 2% → 99%。 **今日已关闭**，但需关注是否有后续 PR 真正修复。

### P1（高严重度）

| Issue | 描述 | 平台 | 是否有修复 PR |
|-------|------|------|--------------|
| [#98077](https://github.com/NousResearch/hermes-agent/issues/98077) | `state.db` 在 SQLite 3.50.4 WAL 下出现 B-tree 物理损坏，规范化写入未中断 | 跨平台 | ❌ 暂无 PR |
| [#97948](https://github.com/NousResearch/hermes-agent/issues/97948) | 手动 `/compress` 报 120s 超时但后台 worker 数分钟后成功，session 静默换 ID | Windows | ❌ 暂无 PR |
| [#100339](https://github.com/NousResearch/hermes-agent/issues/100339) | Anthropic OAuth 凭据克隆后单次 refresh token 导致兄弟 profile 全部失效，agent init 硬失败而非刷新 | Windows | ❌ 暂无 PR |
| [#100788](https://github.com/NousResearch/hermes-agent/issues/100788) | `load_transcript()` 在读取失败时返回 `[]`，损坏的 `state.db` 被静默当作新会话恢复（[#82616](https://github.com/NousResearch/hermes-agent/issues/82616) 后续） | Telegram Gateway | ❌ 暂无 PR |
| [#89166](https://github.com/NousResearch/hermes-agent/issues/89166) | 跨进程会话租约等待每 15s 向聊天网关发送人类可见状态消息，淹没最终投递 | WeChat Gateway | ❌ 暂无 PR |
| [#93888](https://github.com/NousResearch/hermes-agent/issues/93888) | Desktop 远程 Gateway 会话恢复失败 | **今日已关闭** | ✅ |
| [#94906](https://github.com/NousResearch/hermes-agent/issues/94906) | Windows stdio MCP 客户端每次调用失败 | **今日已关闭 (duplicate)** | — |

### P2（中等严重度，今日主要新增）

- [#100792](https://github.com/NousResearch/hermes-agent/issues/100792) `hermes doctor` v0.21 完成诊断后进程永不退出（`threading._shutdown`）
- [#100336 前置] Prefix-cache 失效的具体 provider/anthropic 场景
- [#100820](https://github.com/NousResearch/hermes-agent/pull/100820) Windows / Termux 下硬编码 `/tmp` 路径（已有修复 PR）
- [#100823](https://github.com/NousResearch/hermes-agent/pull/100823) 终端 CWD 删除导致后续命令失败（已有修复 PR，对应 [#62169](https://github.com/NousResearch/hermes-agent/issues/62169)）

### 已有修复 PR 但尚未合并的 P1/P2

- [#100775](https://github.com/NousResearch/hermes-agent/pull/100775) PTY 子进程探测查询挂起修复
- [#100600](https://github.com/NousResearch/hermes-agent/pull/100600) macOS DMG provenance 门控 + fail-closed publish（修复 [#85422](https://github.com/NousResearch/hermes-agent/issues/85422)）
- [#100604](https://github.com/NousResearch/hermes-agent/pull/100604) WhatsApp 平台 require_mention/dm_policy/allowlists 按 profile 隔离
- [#100597](https://github.com/NousResearch/hermes-agent/pull/100597) Slack Socket Mode 重连任务取消

---

## 六、功能请求与路线图信号

| 需求 | 现有 PR | 入版本概率评估 |
|------|---------|----------------|
| **`consult` 工具 — 调用更强参考模型做二次评估** | [#100821](https://github.com/NousResearch/hermes-agent/pull/100821) 今日提交，salvage [#82103](https://github.com/NousResearch/hermes-agent/pull/82103)，受 Perplexity Portable Computer advisor-escalation 启发 | **高** — 作者为 teknium1，且已 salvage 既有 PR |
| **Bot 群聊在 Desktop 关闭后保持运行** | [#98307](https://github.com/NousResearch/hermes-agent/pull/98307)（完整实现）、[#98073](https://github.com/NousResearch/hermes-agent/pull/98073)（消息端控制）— 均 OPEN | **中高** — 设计已成型，PR 体量较大 |
| **Bot 群聊房间在 Web Dashboard / Gateway 中暴露** | [#89995](https://github.com/NousResearch/hermes-agent/issues/89995) 已开 16 评论，需求明确 | **中** — 仍待实现 |
| **`session.dmScope` 跨通道共享 DM 会话** | [#100794](https

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**报告日期**：2026-09-02
**数据周期**：过去 24 小时（2026-09-01 ~ 2026-09-02）
**项目地址**：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 今日整体活跃度**中等偏低**：共 8 条更新（3 个 Issue + 5 个 PR），无新版本发布。**PR 端呈现明显的"集中修复"特征**——外部贡献者 `hugodeco` 一次性提交 3 个与 Telegram 频道相关的修复（#3356/#3357/#3358），显示该频道仍是近期用户体验痛点所在；Issue 端则以**飞书配置报错**（#3355，新开）和 **MCP 连接挂死**（#3269，stale 但仍有 8 条评论）为主线。前一日关闭的 #3359 属于与核心代码无关的元规则提案 PR（疑似外部审查工具产物），被关闭符合预期。

---

## 2. 版本发布

今日**无新版本发布**。跳过该章节。

---

## 3. 项目进展

**今日关闭的 PR**：
- [#3359](https://github.com/sipeed/picoclaw/pull/3359) `feat(repository-reviews): enforce product and retention contracts` — 作者 `dkropachev`，**关闭（非合并）**。该 PR 描述聚焦于 "Repository Reviews" 的"产品契约 / 资源分类 / 保留规则"，与 PicoClaw 主仓库的 AI Agent 代码关联度低，疑似外部审查/合规工具的自动化产物。关闭后对项目无实质影响。
- [#3299](https://github.com/sipeed/picoclaw/pull/3299) `Add native Exa web search provider` — 作者 `kesku`，**关闭为 stale**。该提案计划新增 Exa 搜索作为 `tools.web / web_search` 的原生 provider，自 2026-07-26 提出后长期未维护被自动清理。意味着 Exa 集成在短期内**不会进入主线**。

**今日开启、待合并的 PR（全部来自 `hugodeco`）**：
- [#3358](https://github.com/sipeed/picoclaw/pull/3358) — Agent 响应消息的 `ReplyToMessageID` 回填（解决群聊里回答与提问"脱钩"的问题）
- [#3357](https://github.com/sipeed/picoclaw/pull/3357) — Telegram 频道在 `mention_only: true` 模式下，对"回复机器人自身消息"视为隐式 @mention
- [#3356](https://github.com/sipeed/picoclaw/pull/3356) — Telegram 回复文件消息时，重新挂载被引用的文档附件

> **整体判断**：项目在 **Telegram 频道交互连续性** 与 **多媒体引用完整性** 方面有明确推进；一旦这三个 PR 合并，将显著改善群聊场景下的用户体验。

---

## 4. 社区热点

**最活跃议题**：[Issue #3269](https://github.com/sipeed/picoclaw/issues/3269)
- **主题**：[BUG] MCP 服务器连接失败导致 agent loop 挂死，聊天界面停止响应
- **热度**：8 条评论 / 1 👍，跨期活跃（创建 2026-07-20，最新更新 2026-09-01）
- **背景**：作者 `ruiyigen` 报告在 nightly 版本（git: 2cf030d2）+ Qwen3 模型下，MCP 连接失败时整个 agent 循环卡死。该 Bug **被标记为 stale 但仍有关注**，说明 MCP 集成功能的使用率高、影响面广。
- **诉求分析**：用户期待 MCP 连接失败应具备**超时/降级**机制，而非阻塞主循环。

**新增关注议题**：[Issue #3345](https://github.com/sipeed/picoclaw/issues/3345)
- **主题**：Proposal — 轻量级 PicoClaw worker 模式，适配家用边缘计算
- **作者**：kvnloo
- **诉求**：在 RISC-V/ARM/MIPS 廉价开发板、树莓派、旧 Android 手机（可用内存仅 10–20MB）上运行 PicoClaw，搭配一台稍强 PC 形成"分布式 agent"。
- **信号**：反映了 PicoClaw 在**轻量化边缘部署**方向的潜在市场定位，与项目"极致轻量"的品牌承诺一致。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 是否有 fix PR |
|------|-------|------|---------------|
| 🔴 **严重** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败 → agent loop 挂死 → 整个聊天界面停摆 | ❌ 无修复 PR（stale 中） |
| 🟠 **中等** | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书连接报错：`config.json contains unknown field(s): channel_list.feishu.app_id` | ❌ 无修复 PR（今日新开） |
| 🟢 **轻度（已提交修复）** | [#3356](https://github.com/sipeed/picoclaw/pull/3356) | Telegram 引用文档消息时丢文件 | ✅ PR #3356 待合并 |
| 🟢 **轻度（已提交修复）** | [#3357](https://github.com/sipeed/picoclaw/pull/3357) | Telegram `mention_only` 模式下回复机器人自身消息无响应 | ✅ PR #3357 待合并 |
| 🟢 **轻度（已提交修复）** | [#3358](https://github.com/sipeed/picoclaw/pull/3358) | Agent 响应丢失 `ReplyToMessageID`，与提问脱钩 | ✅ PR #3358 待合并 |

> **关键风险**：#3269 是当下**唯一处于"高严重度 + 无修复 + 仍活跃"**状态的问题，但已贴 stale 标签，**维护者需要决定是清理还是处理**——这是当前最值得关注的稳定性风险。

---

## 6. 功能请求与路线图信号

- **#3345 轻量级 worker 模式**（边缘设备分布式 agent）
  - 状态：仅有 1 条评论、0 👍，**尚处早期讨论**
  - 路线图可能性：中等。该方向与 PicoClaw 的"轻量 AI Agent"定位契合；若社区支持率上升，有可能进入下个里程碑。
- **#3299 Exa 搜索 provider**（[PR 链接](https://github.com/sipeed/picoclaw/pull/3299)）
  - 状态：已关闭为 stale
  - 路线图可能性：**低**。除非原作者重新激活，否则短期内不会被采纳。
- **#3356/#3357/#3358 Telegram 体验改进**（隐式 mention、文档回挂、消息线程化）
  - 状态：3 个 PR 均待合并，作者一致
  - 路线图可能性：**高**。维护者只需一次批量 review 即可显著改善群聊体验，建议优先合并。

---

## 7. 用户反馈摘要

- **#3269（MCP 挂死）** —— 用户 `ruiyigen` 提供了完整的 nightly 版本号、Go 版本、AI 模型/Provider 等环境信息，说明这是**生产环境用户**的真实报告；评论区 8 条对话表明社区对该问题有持续共鸣，期望连接失败应具备"熔断"或"重试上限"逻辑，而非无限等待。
- **#3345（边缘计算 worker 模式）** —— 用户 `kvnloo` 的画像是**多设备家庭用户**：手中有多块廉价开发板 + 1 台稍强 PC，期待 PicoClaw 承担"家庭分布式 AI 助手"角色。这是项目面向**消费级 / IoT** 方向拓展的重要信号。
- **#3355（飞书配置报错）** —— 用户 `ttghub` 仅给出配置 JSON 片段即得到报错，体现**配置 schema 校验失败时的错误提示不够友好**——`channel_list.feishu.app_id` 应被允许的字段却报错，是**配置文档与代码 schema 不同步**导致的用户体验摩擦。

---

## 8. 待处理积压（维护者请关注）

| 类型 | 编号 | 标题 | 风险点 |
|------|------|------|--------|
| 🔴 严重 Bug | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接挂死 agent loop | 被标 stale 但仍有 8 条评论；维护者应明确是否接受/拒绝，避免长期空转 |
| 🟡 中等 Bug | [#3355](https://github.com/sipeed/picoclaw/issues/3355) | 飞书 app_id 字段不被识别 | 今日新开，需确认是文档落后或反之 |
| 🟢 待合并 PR（同一作者） | [#3356](https://github.com/sipeed/picoclaw/pull/3356) / [#3357](https://github.com/sipeed/picoclaw/pull/3357) / [#3358](https://github.com/sipeed/picoclaw/pull/3358) | Telegram 群聊连续性 + 文档回挂 | 三 PR 主题高度相关，建议一次性 review 合并 |
| 🟢 路线图探索 | [#3345](https://github.com/sipeed/picoclaw/issues/3345) | 边缘 worker 模式提案 | 维护者若有兴趣可挂 `enhancement` 标签引导讨论 |

---

**日报小结**：PicoClaw 今日以 **Telegram 频道体验连续性** 为主要推进方向，`hugodeco` 的 3 个 PR 是近期最具落地价值的改动；真正需要维护者拍板决策的是 #3269 的 stale Bug 是否继续跟进，以及 #3355 的飞书配置 schema 同步问题。社区层面的"边缘 worker 模式"提案值得纳入中长期路线图讨论。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期**: 2026-09-02
**项目**: NanoClaw — 开源 AI 智能体与个人 AI 助手
**仓库**: github.com/qwibitai/nanoclaw

---

## 1. 今日速览

NanoClaw 在过去 24 小时内延续了较高的开发活跃度，**13 个 PR 更新、2 个新 Issue 被开**，呈现典型的"重构 + Bug 修复"双线推进状态。zvi-fried 提交的 **6 个 Provider Contract 重构 PR**（#3581/#3585/#3586/#3588/#3591/#3592）几乎同时活跃更新，构成今日最大工作量，占据仓库 refactor 工作的主导。仅有 **PR #3698**（Bun & Claude 运行时升级）被关闭，未观察到正式版本 Release。整体看，仓库处于一个"多线重构待合入、稳定性补丁并行提交"的阶段，社区关注度集中在 CLI 行为一致性与运行时可配置性两个具体痛点。

---

## 2. 版本发布

**今日无新版本发布**。最近一次运行时相关变更（PR #3698）虽涉及 Bun 1.3.12 → 1.4.0、Claude Code 2.1.238 → 2.1.257、Claude Agent SDK 0.3.238 → 0.3.257 的升级，但该 PR 已被关闭（未合入主线），因此未触发版本号变更。

---

## 3. 项目进展

今日仅 **1 个 PR 被关闭**：

| PR | 作者 | 类型 | 说明 |
|---|---|---|---|
| [#3698](https://github.com/qwibitai/nanoclaw/pull/3698) | omri-maya | chore(container) | **Bun 与 Claude 运行时同步升级** — Bun 1.3.12 → 1.4.0，Claude Code 2.1.238 → 2.1.257，Claude Agent SDK 0.3.238 → 0.3.257；CI、registry-skill 校验、release 验证链路统一至 Bun 1.4.0。 |

> ⚠️ **注**: 该 PR 状态标签为 [CLOSED] 而非 [MERGED]，意味着运行时升级提议最终未并入主干，需关注后续是否重新提 PR 或调整版本范围。

**正在推进但尚未合并的重要 PR**（按主题归类）：

- **Provider Contract 重构系列**（zvi-fried 提交，今日集体更新）：
  - [#3581](https://github.com/qwibitai/nanoclaw/pull/3581) runtime provider contract 声明
  - [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) codex provider contract 实现
  - [#3585](https://github.com/qwibitai/nanoclaw/pull/3585) host provider contract 声明
  - [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) setup provider contract 与 install verifier
  - [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) opencode provider contract 实现
  - [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) 由 core-owned canon 渲染 provider 指令
  - [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) 新增 core-owned speed inference 属性

  这一系列重构正在将"provider"概念从散落实现重塑为**契约化（contract-driven）架构**，是 NanoClaw 当前最重要的中长期演进方向。

- **稳定性 / 安全性修复**：
  - [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) **mount-security 旁路漏洞修复**（prathish-ks）
  - [#3427](https://github.com/qwibitai/nanoclaw/pull/3427) send_card 回调动作误报修复（glifocat）
  - [#3646](https://github.com/qwibitai/nanoclaw/pull/3646) sweep idle timeout 改为可配置

- **新功能 / Skill**：
  - [#3697](https://github.com/qwibitai/nanoclaw/pull/3697) Keenable MCP 工具技能
  - [#3696](https://github.com/qwibitai/nanoclaw/pull/3696) 定时任务 missed-run 策略（closes #2398）

整体来看，今日**没有产生实质意义上的"主线推进"**（无 PR 合入主干），主要因为重构系列 PR 仍在迭代尚未达到合并门槛。但**安全性、CLI 一致性、定时任务策略**三类用户痛点已进入"可合入候选"阶段。

---

## 4. 社区热点

由于数据快照中所有 Issues/PR 评论数均为 0 或未提供，仅以**新开 + 多方参与**维度评估热点：

| 排名 | 议题 | 类型 | 热度信号 |
|---|---|---|---|
| 1 | [Issue #3700](https://github.com/qwibitai/nanoclaw/issues/3700) | Bug | 关联真实生产事故（2026-08-27 至 09-01），涉及 Discord `--platform-id` 错误配置 |
| 2 | [Issue #3699](https://github.com/qwibitai/nanoclaw/issues/3699) | 体验缺陷 | `ncl destinations create/remove` 与其他 group-scoped 命令行为不一致 |
| 3 | [PR #3696](https://github.com/qwibitai/nanoclaw/pull/3696) | Feature | 关闭了一个长期悬挂的 #2398，体现"高呼声 + 长期积压"特征 |
| 4 | [PR #3680](https://github.com/qwibitai/nanoclaw/pull/3680) | Security Fix | 安全类 PR 通常具备最高合入优先级 |

**诉求分析**：
- **CLI 一致性** 是当前社区最强烈的隐性诉求：用户期待所有 group-scoped 命令共享同样的"自动填充 agent_group_id"行为。
- **可观测性 / 错误反馈真实性** 成为第二大诉求：send_card 默默吞掉 callback actions 这种"静默失败"模式让 Agent 误以为操作成功。
- **provider 体系重构**虽工作量大，但缺乏外部用户评论驱动，主要由核心团队主导（标签均为 `core-team`）。

---

## 5. Bug 与稳定性

按严重程度从高到低排序：

| 等级 | 议题 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [Issue #3700](https://github.com/qwibitai/nanoclaw/issues/3700) | **Destination local-names 在 messaging-group 重建后不重新指向**，导致出站 send 在已死亡目标上"假成功"。涉及 Discord `--platform-id` 格式（应为 `discord:<guild_id>:<channel_id>` 而非裸 snowflake）。 | ❌ 暂未发现对应修复 PR |
| 🟠 中 | [PR #3680](https://github.com/qwibitai/nanoclaw/pull/3680) | **mount-security 旁路**：allowlisted-extra mount 可绕过 `validateSpec`。 | ✅ **已有 Fix PR**（容器安全方向） |
| 🟠 中 | [PR #3427](https://github.com/qwibitai/nanoclaw/pull/3427) | `send_card` 向 Agent 报告 send_card 丢弃 callback actions 后仍然"success"，导致 Agent 形成错误心智模型。 | ✅ **已有 Fix PR** |
| 🟡 低 | [Issue #3699](https://github.com/qwibitai/nanoclaw/issues/3699) | `ncl destinations create/remove` 缺少自动填充 `agent-group-id`，与其他 group-scoped 命令行为不一致。 | ❌ 暂未发现对应修复 PR |
| 🟡 低 | [PR #3646](https://github.com/qwibitai/nanoclaw/pull/3646) | sweep 把本地慢模型 turn 误判为 idle 杀掉（30 分钟硬编码 + 心跳依赖 provider 流事件）。 | ✅ **已有 Fix PR**（建议合并） |

**结论**：今日 4 个稳定性问题中 3 个已有修复候选；唯独 [Issue #3700](https://github.com/qwibitai/nanoclaw/issues/3700) 处于"已发现、无修复"状态，且影响真实部署（Discord 平台），建议维护者优先关注。

---

## 6. 功能请求与路线图信号

| 提议 | 链接 | 来源 | 落地概率评估 |
|---|---|---|---|
| **定时任务 missed-run 策略** | [PR #3696](https://github.com/qwibitai/nanoclaw/pull/3696) | ljluestc，closes 长期悬挂的 [#2398](https://github.com/qwibitai/nanoclaw/issues/2398) | ⭐⭐⭐⭐⭐ **极高** — 已形成 PR、解决一个长期社区诉求，标签 `core-team` |
| **Keenable MCP 工具集成** | [PR #3697](https://github.com/qwibitai/nanoclaw/pull/3697) | ilya-bogin-keenable（外部贡献者） | ⭐⭐⭐ — Skill 类型 PR，符合仓库既定贡献流程 |
| **core-owned speed inference 属性** | [PR #3592](https://github.com/qwibitai/nanoclaw/pull/3592) | zvi-fried（核心团队） | ⭐⭐⭐⭐ — 属于 provider 重构主线一部分 |
| **sweep idle timeout 可配置化** | [PR #3646](https://github.com/qwibitai/nanoclaw/pull/3646) | glifocat | ⭐⭐⭐⭐ — 解决实际使用场景（慢本地模型），标签 `core-team` |

**路线图信号**：
- NanoClaw 正在从"功能堆叠"转向"**契约化、可配置化、可观测化**"。Provider Contract 系列重构若成功合入，将显著降低新 provider 的接入成本。
- "**统一 CLI 行为模式**"（参见 Issue #3699）暗示着 CLI 层正在规范化，建议建立"group-scoped 命令约定"作为后续贡献门槛。

---

## 7. 用户反馈摘要

由于 Issue 评论数均为 0，本节从 Issue **正文本身**提炼真实用户痛点：

### 痛点一：CLI 行为不一致带来认知负担
> 用户 [DawoudIO](https://github.com/qwibitai/nanoclaw/issues/3699) 明确指出："Every other group-scoped `ncl` write command ... auto-fills `agent_group_id` from the caller's own context ... but `ncl destinations create` doesn't."

**真实场景**：用户在 CLI 中习惯了"省略 --agent-group-id 自动取当前 group"的便利，遇到 destinations 命令时被迫手动填写，影响脚本化体验。

### 痛点二：错误反馈真实性
> [PR #3427](https://github.com/qwibitai/nanoclaw/pull/3427) 描述："the tool promised generic buttons and reported success even when the bridge silently removed them."

**真实场景**：Agent 在 send_card 时拿到一个 success 状态，但 callback actions 被 Chat SDK bridge 默默丢弃 —— 这会导致 Agent 形成错误的世界模型，进而在多轮交互中做出错误决策。

### 痛点三：本地慢模型被误杀
> [PR #3646](https://github.com/qwibitai/nanoclaw/pull/3646)："a backend slower than hosted inference reads as dead while doing real work."

**真实场景**：本地推理用户运行慢模型时，sweep 的 30 分钟硬编码阈值 + 心跳仅依赖 provider stream 事件，会让正常任务被当成 idle 杀掉，破坏长任务可用性。

### 痛点四：destination 资源指向悬挂
> [Issue #3700](https://github.com/qwibitai/nanoclaw/issues/3700)：在 Discord 平台上 `--platform-id` 配置错误后即使重建 messaging-group，原 local-name 仍指向旧 ID，send 假成功。

**真实场景**：生产环境（2026-08-27 ~ 09-01）真实发生，提示 **destination → messaging-group 引用关系**缺乏自动重定向机制。

---

## 8. 待处理积压

以下 PR/Issue 已创建较长时间但仍处于 Open，建议维护者排期审视：

| 编号 | 类型 | 创建时间 | 标题 | 状态 |
|---|---|---|---|---|
| [#2398](https://github.com/qwibitai/nanoclaw/issues/2398) | Feature 请求 | 长期 | 定时任务 missed-run 策略 | ✅ **已由 PR #3696 解决**，待合入 |
| [#3427](https://github.com/qwibitai/nanoclaw/pull/3427) | Bug Fix | 2026-08-21 | send_card 误报 callback actions | 🟡 12 天未合并 |
| [#3576-adjacent](https://github.com/qwibitai/nanoclaw/issues/3700) | Bug | 见 #3700 关联 | Discord `--platform-id` 格式相关问题 | 🟡 用户已在新 Issue 中重新表达 |
| [#3581](https://github.com/qwibitai/nanoclaw/pull/3581) | Refactor | 2026-08-27 | runtime provider contract | 🟡 6 天，仍需迭代 |
| [#3584](https://github.com/qwibitai/nanoclaw/pull/3584) | Refactor | 2026-08-27 | codex provider contract | 🟡 6 天 |
| [#3585](https://github.com/qwibitai/nanoclaw/pull/3585) | Refactor | 2026-08-27 | host provider contract | 🟡 6 天 |
| [#3586](https://github.com/qwibitai/nanoclaw/pull/3586) | Refactor | 2026-08-27 | setup provider contract | 🟡 6 天 |
| [#3588](https://github.com/qwibitai/nanoclaw/pull/3588) | Refactor | 2026-08-27 | opencode provider contract | 🟡 6 天 |
| [#3591](https://github.com/qwibitai/nanoclaw/pull/3591) | Refactor | 2026-08-27 | 渲染 provider 指令 | 🟡 6 天 |
| [#3592](https://github.com/qwibitai/nanoclaw/pull/3592) | Feature | 2026-08-28 | core-owned speed inference | 🟡 5 天 |
| [#3646](https://github.com/qwibitai/nanoclaw/pull/3646) | Bug Fix | 2026-08-29 | sweep idle timeout 可配置 | 🟡 4 天，core-team 标签，建议优先合入 |
| [#3680](https://github.com/qwibitai/nanoclaw/pull/3680) | Security Fix | 2026-08-30 | mount-security 旁路修复 | 🔴 **安全类 PR**，建议优先合入 |

**维护者建议**：
1. 🔴 **安全优先**：[#3680](https://github.com/qwibitai/nanoclaw/pull/3680) 涉及 allowlisted-extra mount 旁路，建议 24 小时内合入。
2. 🟠 **生产事故**：[#3700](https://github.com/qwibitai/nanoclaw/issues/3700) 已有真实部署受影响，应尽快确定 fix 方案（可与 [#3699](https://github.com/qwibitai/nanoclaw/issues/3699) 一起作为"destination CLI 一致性"专题处理）。
3. 🟡 **重构批量评估**：zvi-fried 的 6 个 Provider Contract 重构 PR 已统一更新至 09-01，建议组织一次专项 review 评估合并顺序与依赖关系。

---

## 📊 数据小结

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 新开 | 2 | 中等活跃 |
| 24h Issue 已关闭 | 0 | ⚠️ 响应滞后 |
| 24h PR 更新 | 13 | 高活跃 |
| 24h PR 已合并/关闭 | 1 (closed) | ⚠️ 无实质合入 |
| 核心团队占比 | ≈60% PR 带 `core-team` | 健康（核心主导重构） |
| 外部贡献者 PR | 2 (#3696 #3697) | 良好 |
| 安全类 PR | 1 (#3680) | 需重点关注 |
| 未匹配 Bug Issue | 1 (#3700) | 需补 PR |

**整体健康度**：🟡 **中等偏上** — 项目活跃度高、贡献者结构合理、安全意识到位；主要风险在于"高活跃但低合入"的积压模式可能导致后续合并冲突，建议维护者对 Provider Contract 重构系列建立合并窗口期。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-02

> 数据范围：2026-09-01 至 2026-09-02 ｜ 项目地址：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 一、今日速览

IronClaw 今日延续了上周高密度的"内部 dogfooding + 共享组件迁移"双线节奏：过去 24 小时内活跃 Issues 14 条（关闭 4）、PR 19 条（关闭/合并 8），无新版本发布。项目健康度整体良好，**WebUI 组件统一化（SearchField / Input / InlineNotice / SelectMenu）正在以"一日多 PR"的节奏集中推进**，LLM 链路（缓存键、模型能力透传、工具结果裁剪）与 Slack 实时 QA（事件准入、回调去重）的稳定性修复也在并行落地。本日报所涉时间窗内没有 P0 级别的崩溃事故，但出现两处需要关注的 QA 缺陷（rootless Docker 工作区权限、47k 工具 MCP 目录不可达）。

---

## 二、版本发布

**无新版本发布。** 上一版本仍为社区提及的 [v1.4.0](https://github.com/nearai/ironclaw)（对应 Issue [#8015](https://github.com/nearai/ironclaw/issues/8015) 的复现场景）。

---

## 三、项目进展（今日合并/关闭的重要 PR）

| # | 标题 | 影响面 | 说明 |
|---|---|---|---|
| [#8031](https://github.com/nearai/ironclaw/pull/8031) | refactor(agent-loop): decompose capability stage mechanics | agent-loop | 将 `executor/capabilities.rs` 从 2,938 行压减至 890 行，但保留唯一的 `CapabilityStage::process` 执行路径 |
| [#8028](https://github.com/nearai/ironclaw/pull/8028) | refactor(agent-loop): align state and stage ownership | agent-loop | 将 checkpoint 状态拆分为 compaction/recovery/reply-admission/stop-control 四个聚焦模块，保持公共路径与序列化字节不变 |
| [#8013](https://github.com/nearai/ironclaw/pull/8013) | ci: parallelize affected crate tests with nextest | CI | 启用 nextest + 4 进程并行，保守派生 Cargo-only 子集，预期显著缩短 PR 测试反馈 |
| [#8014](https://github.com/nearai/ironclaw/pull/8014) | fix(slack): preserve explicit mentions across callback dedup | Slack | 修复同一线程帖被同时投为 `message` 与 `app_mention` 时的明确 mention 丢失 |
| [#8027](https://github.com/nearai/ironclaw/pull/8027) | fix(live-qa): find the Slack run by message identity | Live QA | 解决 `qa_7d_slack_bug_message_trigger` 自 2026-08-28 起 **连续 33 次失败** 的根因（事件确实被准入，但用 envelope event_id 反查 run 失败） |
| [#8029](https://github.com/nearai/ironclaw/pull/8029) | fix(live-qa): state Slack admission from the accepted outcome | Live QA | [#8027](https://github.com/nearai/ironclaw/pull/8027) 评审遗留项，修正 `DeferredBusy` 与 `RejectedBusy` 在 `_slack_event_run_id_for_message` 中的顺序 |
| [#7998](https://github.com/nearai/ironclaw/pull/7998) | feat(llm): preserve NEAR AI model capabilities through discovery | LLM | 引入 provider-neutral 的 model catalog entry，保留 `list_models()` 旧 API |
| [#7997](https://github.com/nearai/ironclaw/pull/7997) | feat(webui): show model capability icons across Inference | WebUI | 在 Provider 配置、Allowed models、Workspace default、Caller-scoped 等多个控件渲染 Text/Image 输入/输出能力图标 |
| [#7996](https://github.com/nearai/ironclaw/pull/7996) | perf(github): compact repository list responses | 扩展 | 把 `github.list_repos` 从原始 81 字段投影到模型可用字段，关闭对应 Issue [#7986](https://github.com/nearai/ironclaw/issues/7986) |

**整体评价：** agent-loop 在不动外部行为的前提下完成两轮结构性重构；LLM/扩展/WebUI 三条产品线均有关键 PR 落地；Live QA 通道一次性关闭了 33 次连续失败。**项目处于"内功强化期"，功能面推进速度稳健。**

---

## 四、社区热点

虽然本时间窗评论绝对量不高（多数 0 评论，仅 [#8025](https://github.com/nearai/ironclaw/issues/8025) 与 [#7986](https://github.com/nearai/ironclaw/issues/7986) 各 1 条），但讨论密度集中在以下三处：

1. **WebUI 共享组件统一化（最高频话题）**
   Issues [#8020](https://github.com/nearai/ironclaw/issues/8020) / [#8019](https://github.com/nearai/ironclaw/issues/8019) / [#8018](https://github.com/nearai/ironclaw/issues/8018) / [#8017](https://github.com/nearai/ironclaw/issues/8017) 与 PR [#8024](https://github.com/nearai/ironclaw/pull/8024) / [#8023](https://github.com/nearai/ironclaw/pull/8023) / [#8022](https://github.com/nearai/ironclaw/pull/8022) / [#8021](https://github.com/nearai/ironclaw/pull/8021) 一一对应，呈现"issue 即 PR 拆分单"的协同模式。**诉求：消除本地样式与原生控件漂移，建立设计系统一致性。**

2. **LLM 缓存与模型能力透传（性能 + 体验）**
   Issue [#7921](https://github.com/nearai/ironclaw/issues/7921) 指出 OpenAI 系后端未发送 `prompt_cache_key`，实测缓存命中率从 ~82% 跌至 ~29%（>200 次调用后）。Issue/closed pair [#7970](https://github.com/nearai/ironclaw/issues/7970) ↔ [#7998](https://github.com/nearai/ironclaw/pull/7998) 与 [#7971](https://github.com/nearai/ironclaw/issues/7971) ↔ [#7997](https://github.com/nearai/ironclaw/pull/7997) 解决模型能力（modalities）在 WebUI 中的呈现。**诉求：跨后端一致的缓存与能力信号。**

3. **大型 MCP 目录可达性**
   Issue [#8012](https://github.com/nearai/ironclaw/issues/8012)（由 [pranavraja99](https://github.com/pranavraja99) 提交）报告 47,337 工具的 hosted-MCP 目录 ingest 完成但 `tool_search` 不可达，2,000 工具时正常。**诉求：扩展性边界需要文档化与修复。**

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 标题 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 高 | [#8012](https://github.com/nearai/ironclaw/issues/8012) | 47k-tool hosted-MCP catalog ingests fully but no tool is ever reachable via tool_search | OPEN | ❌ 暂无 |
| 🟠 中-高 | [#8015](https://github.com/nearai/ironclaw/issues/8015) | Rootless Docker sandbox workspace is not writable due to UID/GID namespace mismatch（v1.4.0 / commit `4cb47cfa`，QA 日期 2026-08-31） | OPEN | ❌ 暂无 |
| 🟠 中-高 | [#7921](https://github.com/nearai/ironclaw/issues/7921) | OpenAI-family backends send no prompt_cache_key — cache-hit collapse 82%→29% | OPEN（仍在更新） | ❌ 暂无 |
| 🟡 中 | [#8016](https://github.com/nearai/ironclaw/issues/8016) | ci: lock-free turn-state root test intermittently times out while Running | OPEN | ❌ 暂无 |
| 🟡 中 | [#8025](https://github.com/nearai/ironclaw/issues/8025) | Bug: unexpected behavior with special characters in input（疑似回归，关联"上次发布的编码变更"） | OPEN | ❌ 暂无 |
| 🟢 低 | [#7986](https://github.com/nearai/ironclaw/issues/7986) | perf(github): list_repos ships 81 raw fields per repo — 519 KB for one listing | ✅ 已关闭 | [#7996](https://github.com/nearai/ironclaw/pull/7996) |
| 🟢 低 | [#7843](https://github.com/nearai/ironclaw/issues/7843) | Epic: Dogfooding & QA bug fixing 08/24–08/30 | ✅ 已关闭（被 [#8026](https://github.com/nearai/ironclaw/issues/8026) 接续） | — |

> **维护者建议**：[#8012](https://github.com/nearai/ironclaw/issues/8012) 与 [#8015](https://github.com/nearai/ironclaw/issues/8015) 暂无对应 PR，建议在下一次 dogfooding epic（[#8026](https://github.com/nearai/ironclaw/issues/8026)）期间重点跟进。

---

## 六、功能请求与路线图信号

| 类型 | 编号 | 内容 | 关联 PR | 路线图判断 |
|---|---|---|---|---|
| UI 一致性 | [#8020](https://github.com/nearai/ironclaw/issues/8020) | 共享 `SearchField` 用于 Workspace/Logs 过滤 | [#8024](https://github.com/nearai/ironclaw/pull/8024) | ✅ 即将合入 |
| UI 一致性 | [#8019](https://github.com/nearai/ironclaw/issues/8019) | Automations 状态横幅迁移到 `InlineNotice` | [#8022](https://github.com/nearai/ironclaw/pull/8022) | ✅ 即将合入 |
| UI 一致性 | [#8018](https://github.com/nearai/ironclaw/issues/8018) | SettingsField 控件替换为共享 `Input`/`SelectMenu` | [#8021](https://github.com/nearai/ironclaw/pull/8021) | ✅ 即将合入 |
| UI 一致性 | [#8017](https://github.com/nearai/ironclaw/issues/8017) | Extension Configure 采用共享表单/反馈组件 | [#8023](https://github.com/nearai/ironclaw/pull/8023) | ✅ 即将合入 |
| 渠道能力 | [#8006](https://github.com/nearai/ironclaw/pull/8006) | 持久化渐进式回复 + 原生 Slack Agent UI | 同号 PR | 🟡 XL/PR 进行中，需关注 review |
| 会话事件 | [#8010](https://github.com/nearai/ironclaw/pull/8010) | WebUI session-event transport unification + run-completion 通知 | 同号 PR | 🟡 端到端落实既定设计文档 |
| 工具裁剪 | [#7984](https://github.com/nearai/ironclaw/pull/7984) | `tool_search` 回复尺寸按模型 first-look envelope 调整（实测 16,066 B → 857 B） | 同号 PR | 🟢 高价值 PR，待合并 |

---

## 七、用户反馈摘要

由于本时间窗内评论稀少（合计 2 条），直接用户痛点主要从 Issue 描述中提炼：

- **特殊字符回归（[#8025](https://github.com/nearai/ironclaw/issues/8025)，[@kapibarazoku0422-create](https://github.com/kapibarazoku0422-create)）**：用户明确怀疑"上次发布的编码变更"导致转义/编码处理异常，"字符被剥离或引发错误"。**属于典型升级回归反馈，需优先定位。**
- **大型 hosted-MCP 不可用（[#8012](https://github.com/nearai/ironclaw/issues/8012)，[@pranavraja99](https://github.com/pranavraja99)）**：场景为"接入了近 5 万工具的 catalog，但 tool_search 一个也返回不了"，截断到 2,000 工具即恢复。**痛点集中在扩展性边界缺乏预警。**
- **Rootless Docker 工作区不可写（[#8015](https://github.com/nearai/ironclaw/issues/8015)，[@Mkobi34](https://github.com/Mkobi34)）**：用户以非 root 用户运行 v1.4.0 + rootless Docker，期望"每位用户的持久沙箱"开箱即用。**痛点：与官方"每位用户持久沙箱"卖点不一致的部署摩擦。**
- **LLM 缓存命中率断崖式下降（[#7921](https://github.com/nearai/ironclaw/issues/7921)，[@henrypark133](https://github.com/henrypark133)）**：基于 `13bad7f5` / `bd6800cd` 的实测。**痛点：在 OpenAI 体系上成本/延迟优势不复存在，跨后端一致性受损。**
- **共享组件的诉求（[#8017](https://github.com/nearai/ironclaw/issues/8017) ~ [#8020](https://github.com/nearai/ironclaw/issues/8020)，[@italic-jinxin](https://github.com/italic-jinxin)）**：用户/维护者对"设计系统一致性"与"消除本地样式漂移"表达强烈共识，**满意于"迁移不改变行为"的不破坏性承诺**。

---

## 八、待处理积压

| 编号 | 类型 | 标题 | 最近更新 | 关注理由 |
|---|---|---|---|---|
| [#7921](https://github.com/nearai/ironclaw/issues/7921) | 性能 | OpenAI-family backends send no prompt_cache_key | 2026-09-02 | 影响生产缓存效率，但**无对应 fix PR**，建议优先派单 |
| [#7020](https://github.com/nearai/ironclaw/pull/7020) | 依赖 | bump tokio-tungstenite 0.29.0 → 0.30.0 | 2026-09-02 |

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报

**报告日期：2026-09-02**
**项目仓库：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 一、今日速览

LobsterAI 项目今日呈现**中高强度维护活跃度**，过去 24 小时内共处理 12 个 Issue 更新与 9 个 PR 更新。值得关注的是，**今日关闭的 9 个 Issue 均被标记为 `[stale]`（长期无活动自动关闭）**，反映出项目对陈旧 Issue 进行了批量清理；同时**新合并的 5 个 PR 全部集中于产品打磨与体验优化**（引导流程、视频分享、Windows 打包），说明核心功能已趋稳定，进入精细化迭代阶段。社区层面仍有 3 个标记为 stale 的 Bug 处于 OPEN 状态，需要维护者人工复核并明确后续去向。

---

## 二、版本发布

⚠️ **今日无新版本发布。** 项目当前未产出新的 Release tag，建议关注近期 PR 合并后的版本整合节奏。

---

## 三、项目进展（今日已合并/关闭的重要 PR）

### 🎬 功能增强
- **[PR #2593](https://github.com/netease-youdao/LobsterAI/pull/2593)** — `feat(artifacts): 支持模型生成视频分享`
  - 完整实现 AI 生成视频的分享链路：保留任务 ID 与输出序号溯源、新增视频来源查询与资产轮询、支持通过 URL 哈希解析旧会话视频来源；并禁止本地视频绕过来源校验与不可变内容替换，安全性与可追溯性兼顾。
- **[PR #2591](https://github.com/netease-youdao/LobsterAI/pull/2591)** — `feat(onboarding): add first-run analytics`
  - 将新用户引导漏斗、登录交接、欢迎任务创建与流生命周期纳入埋点，复用现有 usage analytics 上报器，**严格不上传 prompt 文本与欢迎内容**，便于产品后续优化 onboarding 转化路径。

### 🛠 体验优化
- **[PR #2594](https://github.com/netease-youdao/LobsterAI/pull/2594)** — `fix(onboarding): polish guide transitions and CTAs`
  - 缩小引导光标尺寸、加速结果浮层、衔接动画更顺滑；统一登录与 onboarding CTA 按钮样式，消除跳转时的单帧布局闪烁。
- **[PR #2592](https://github.com/netease-youdao/LobsterAI/pull/2592)** — `Liuzhq/fix user guide`
  - 用户引导模块修复（具体 diff 摘要为空，建议维护者补充描述）。

### 🪟 平台修复
- **[PR #2595](https://github.com/netease-youdao/LobsterAI/pull/2595)** — `[platform: windows] fix: nsis web staging drive preflight`
  - 修复 Windows 平台 NSIS Web 安装包在临时盘预检阶段的潜在问题，提升安装成功率。

**整体进度评估**：今日合并内容以"打磨 + 新功能"为主，**项目处于功能丰满后的体验打磨阶段**，未涉及核心架构变更，但视频分享功能的引入拓宽了 AI 产出物的可传播性，是产品形态上的重要补充。

---

## 四、社区热点

虽然今日评论数普遍较低（多数 Issue 评论数为 1–3 条，PR 评论未列出），但以下议题代表了真实且高频的用户诉求：

| 议题 | 类型 | 链接 |
|------|------|------|
| 添加自定义模型失败（测试连接报错） | 🔥 功能可用性 | [#1622](https://github.com/netease-youdao/LobsterAI/issues/1622) |
| 切换本地模型后 skill 无法使用 | 🔥 功能可用性 | [#1632](https://github.com/netease-youdao/LobsterAI/issues/1632) |
| 客户端处理复杂任务崩溃 | 🔥 稳定性 | [#1627](https://github.com/netease-youdao/LobsterAI/issues/1627) |
| 更新后首次启动闪退 | 🔥 升级体验 | [#1587](https://github.com/netease-youdao/LobsterAI/issues/1587) |
| 定时任务执行完成无系统通知 | 💡 功能请求 | [#1620](https://github.com/netease-youdao/LobsterAI/issues/1620) |
| 添加 hermes-agent 作为 AI engine | 💡 功能请求 | [#1614](https://github.com/netease-youdao/LobsterAI/issues/1614) |

**背后诉求分析**：评论集中反映出三类核心痛点——
1. **多模型/多引擎扩展能力**（#1622、#1632、#1614）——用户希望 LobsterAI 不被单一模型供应商锁定；
2. **稳定性焦虑**（#1627、#1587、#1589）——升级带来的回归问题严重侵蚀用户信任；
3. **被动通知缺失**（#1620）——自动化场景下用户离开应用后无法获知执行结果。

---

## 五、Bug 与稳定性

按严重程度从高到低排列：

### 🔴 P0 — 影响核心功能可用
1. **[#1627](https://github.com/netease-youdao/LobsterAI/issues/1627)** — 客户端执行"稍微复杂的任务"即崩溃
   - 状态：CLOSED [stale] | 无对应修复 PR
   - 风险：核心 Agent 执行链路存在未捕获异常，OpenClaw stdout 日志出现 ws event tick 高频序列。
2. **[#1589](https://github.com/netease-youdao/LobsterAI/issues/1589)** — 会话 + 定时任务均无法正常进行
   - 状态：CLOSED [stale] | 无对应修复 PR
   - 风险：macOS + 2026.04.08 版本直接"双线崩溃"，是最严重的体验事故。

### 🟠 P1 — 升级/回归问题
3. **[#1587](https://github.com/netease-youdao/LobsterAI/issues/1587)** — 更新最新版本首次启动崩溃
   - 状态：CLOSED [stale] | 无对应修复 PR
   - 风险：发布质量门缺失，用户升级即面临软件闪退。

### 🟡 P2 — 状态/资源不一致
5. **[#1617](https://github.com/netease-youdao/LobsterAI/issues/1617)** — 删除技能后列表不更新，重启后残留
   - 状态：CLOSED [stale] | 无对应修复 PR
   - 风险：前后端状态同步缺陷。
6. **[#1105](https://github.com/netease-youdao/LobsterAI/issues/1105)** — 钉钉定时任务 IM 通知始终无法送达
   - 状态：OPEN [stale] | ✅ **已有对应修复 PR [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106)** 待合并
7. **[#1107](https://github.com/netease-youdao/LobsterAI/issues/1107)** — 定时任务 `pollOnce()` 无重入保护 + `stopPolling()` 后幽灵事件
   - 状态：OPEN [stale] | ✅ **已有对应修复 PR [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108)** 待合并

### 🟢 P3 — 视觉/小缺陷
8. **[#1112](https://github.com/netease-youdao/LobsterAI/issues/1112)** — 表格 Table 顶部底部不明意义留白
   - 状态：OPEN [stale] | 无对应 PR
9. **[#1586](https://github.com/netease-youdao/LobsterAI/issues/1586)** — 切换语言后部分内容（条款、工具风格）未跟随本地化
   - 状态：CLOSED [stale] | 无对应修复 PR

**关键提醒**：P0/P1 级别 Issue 被标记 stale 后直接关闭，意味着用户实际遭遇的问题**可能仍未被代码层面修复**。建议维护者人工复盘并评估是否需要 reopen 或补发 hotfix。

---

## 六、功能请求与路线图信号

| 需求 | 提出方 | 可行性信号 | 优先级建议 |
|------|--------|------------|------------|
| **定时任务完成系统通知**（#1620） | 用户 noransu | 设计要点清晰（默认关闭、权限引导、macOS/Win/Linux 三平台）；可作为单 PR 实现 | ⭐⭐⭐ 高 |
| **支持 hermes-agent 作为 AI engine**（#1614） | 社区 | 类似已有 openclaw 集成模式，工程量可控 | ⭐⭐ 中 |
| **新用户引导埋点**（#2591 已合并） | 项目内 | ✅ 已实现 | — |
| **AI 生成视频分享**（#2593 已合并） | 项目内 | ✅ 已实现 | — |

**路线图预判**：下一版本可能聚焦三大方向——
1. **多引擎扩展**（自定义模型、本地模型 skill 兼容、hermes-agent 接入）；
2. **通知能力补齐**（系统通知 + IM 通知）；
3. **OpenClaw 稳定性硬化**（已有 PR #1106、#1108、#1113、#2590 在排队）。

---

## 七、用户反馈摘要

通过梳理今日活跃 Issue 评论与描述，可提炼以下真实痛点：

- **😡 痛点 1：升级即崩** —— 用户 [gongfen0121](https://github.com/gongfen0121) 在 #1587、#1589 中明确表达了对更新体验的失望，升级最新版本（2026.04.08）后遭遇闪退 + 核心功能（会话、定时任务）双重失效，这是**当前最影响口碑的负面反馈**。
- **😡 痛点 2：自定义能力受限** —— #1622（自定义模型测试失败）、#1632（切到本地模型后 skill 失效）反映出用户希望深度定制 AI 后端，但产品当前文档/流程未充分支撑，**自助式接入门槛偏高**。
- **😐 痛点 3：自动化场景下信息缺失** —— #1620 指出定时任务完成后无系统通知，用户必须主动回到应用查看，影响定时任务的产品价值兑现**。
- **😐 痛点 4：国际化不完整** —— #1586 报告切换语言后部分文案（条款、工具风格）未跟随，提示 i18n 资源覆盖率不足。
- **🙂 满意信号** —— 视频分享功能（#2593）一次性提交了完整的来源校验、URL 解析、权限复用与测试覆盖，说明社区贡献者 [liugang519](https://github.com/liugang519) 对项目架构较为熟悉，是健康的开源协作信号。

---

## 八、待处理积压

下列 Issue/PR 已长期标记 `[stale]`，但实际价值较高，**建议维护者优先 review 并给出明确处置**：

| 编号 | 类型 | 链接 | 风险/价值 |
|------|------|------|----------|
| PR #1106 | 待合并 Bug Fix | [#1106](https://github.com/netease-youdao/LobsterAI/pull/1106) | 钉钉定时任务 IM 路由——已闭环 issue #1105，diff 简洁，建议尽快合并 |
| PR #1108 | 待合并 Bug Fix | [#1108](https://github.com/netease-youdao/LobsterAI/pull/1108) | pollOnce 重入与幽灵事件——已闭环 issue #1107，并发可靠性关键修复 |
| PR #1113 | 待合并 Feature | [#1113](https://github.com/netease-youdao/LobsterAI/pull/1113) | OpenClaw 延迟配置同步在工作负载卸载时立即 flush——避免 file-watcher reload 中断协作 |
| PR #2590 | 待合并 Security | [#2590](https://github.com/netease-youdao/LobsterAI/pull/2590) | **🔐 MCP stdio 命令与外部 URL 边界硬化**——属于第三方工具执行安全的关键防御，优先级最高 |
| Issue #1112 | OPEN | [#1112](https://github.com/netease-youdao/LobsterAI/issues/1112) | 表格留白——视觉类小 Bug，确认后即可关闭 |
| Issue #1105 | OPEN | [#1105](https://github.com/netease-youdao/LobsterAI/issues/1105) | 钉钉 IM 路由——等 #1106 合并后即可关闭 |
| Issue #1107 | OPEN | [#1107](https://github.com/netease-youdao/LobsterAI/issues/1107) | pollOnce 并发——等 #1108 合并后即可关闭 |

**重点提醒**：⚠️ **PR #2590 (MCP 安全硬化)** 已滞留至 stale 状态，但内容涉及**第三方命令注入与外部链接协议校验**，对一款执行第三方工具的 AI Agent 而言属于高危面，强烈建议在下一个 Release 周期前完成 review 与合并。

---

### 附录：数据基线

- 过去 24h Issue 更新：**12 条**（新开/活跃 3，关闭 9）
- 过去 24h PR 更新：**9 条**（待合并 4，已合并/关闭 5）
- 新版本发布：**0**
- stale 标记 Issue 占比：**100%（今日全部活跃 Issue 均被标记 stale）**

> 📌 **总结**：LobsterAI 今日活跃度中等偏上，但 "stale" 标签的滥用或自动化策略过激，导致多个真实 Bug 与高价值 PR 滞留。建议维护者：(1) 调整 stale 判定阈值，避免误伤有效反馈；(2) 优先合并 PR #2590、#1106、#1108、#1113 这四个直接影响稳定性与安全的改动；(3) 在下一版本中沉淀今日合并的视频分享与 onboarding 体验优化成果。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-09-02**

---

## 1. 今日速览

Moltis 项目在 2026-09-02 呈现出 **"修旧布新"** 的稳健节奏：过去 24 小时无新开 Issue，2 条历史 Bug 被关闭，同时 4 条 PR 中有 2 条被合并、2 条进入待评审状态，**整体活跃度中等偏上**，且"Issue 关闭率 100%"与"PR 合并/关闭率 50%"显示仓库的"流入-流出"处于良性平衡。无新版本发布，但多个 Docker 部署与 MCP 健康检查相关的关键修复已落地，预示下一个补丁版本呼之欲出。

---

## 2. 版本发布

**今日无新版本发布。** 鉴于 #1249、#1251 两项关键修复已合入主干，且均直接闭环了用户反馈 Bug，预计下一次发版（可能为 `202609xx.yy` 序列）将整合这些改动。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

| PR | 标题 | 影响面 |
|------|------|------|
| [#1249](https://github.com/moltis-org/moltis/pull/1249) | fix(auth): let Docker loopback-only deployments count as local | 修复 Docker 桥接网络下容器源 IP 被改写导致的"看似非本地连接"问题，使 `auth_disabled` 等 Tier 2 本地开发便利功能在默认 Docker 部署中生效。 |
| [#1251](https://github.com/moltis-org/moltis/pull/1251) | Fix doctor validation for streamable HTTP MCP servers | 统一 `streamable-http` 传输的规范名与别名；对远程 URL 做字面与配置解析双重校验；对凭证占位符采用"信息性提示"而非错误。 |

**整体评价：** 项目在 **本地化部署可用性** 和 **MCP 远程传输兼容性** 两条用户高频痛线上同步推进，显著降低了 Docker 用户的"首次部署失败"率。MCP 健康检查器现在可以正确识别 `streamable-http` 类型的服务器，避免误报。

---

## 4. 社区热点

由于今日 Issues 中评论量为 0（除历史 #1112 的 1 条评论外），**社区声量整体偏低**，但从热度的另一维度——Issue 关闭与 PR 关联——可以观察到两个明确的用户诉求群：

- 🔥 **Docker 本地部署用户** —— 由 [#1112](https://github.com/moltis-org/moltis/issues/1112) 发起，经 [#1249](https://github.com/moltis-org/moltis/pull/1249) 闭环。
- 🔥 **远程 MCP 集成用户** —— 由 [#1250](https://github.com/moltis-org/moltis/issues/1250) 发起，经 [#1251](https://github.com/moltis-org/moltis/pull/1251) 闭环。

两个诉求本质相同：**用户在"开箱即用"的部署/集成路径上遇到了与基础设施（Docker 网络、远程 MCP 端点）相关的假阳性故障。**

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | 是否已修复 |
|--------|------|------|------|-----------|
| 🔴 高 | [#1112](https://github.com/moltis-org/moltis/issues/1112) | Docker 中禁用 auth 实际未生效，导致本地开发体验受损（安全/便利性误判） | CLOSED | ✅ 由 [#1249](https://github.com/moltis-org/moltis/pull/1249) 修复 |
| 🟡 中 | [#1250](https://github.com/moltis-org/moltis/issues/1250) | `moltis doctor` 将正常工作的 `streamable-http` MCP 服务器误判为"缺少命令" | CLOSED | ✅ 由 [#1251](https://github.com/moltis-org/moltis/pull/1251) 修复 |

**稳定性观察：** 两个 Bug 均已闭环且修复路径清晰，今日无新增未修复问题，**项目稳定性呈持续上升趋势**。

---

## 6. 功能请求与路线图信号

### 新提议功能：#1253 — `max` 推理努力级别

- 链接：[#1253](https://github.com/moltis-org/moltis/pull/1253)
- 作者：GTanger
- 内容：
  - 在共享的 `ReasoningEffort` schema 中新增 `max` 档位
  - 新增 `@reasoning-max` 模型后缀解析
  - 在 OpenAI Codex Responses API 中透传 `max`，对不支持的 provider 进行钳制
  - 在推理选择器、i18n、广播事件中暴露 Max 选项

**信号解读：** 这是一项面向**多档推理策略（low / medium / high / max）**的演进。`max` 通常意味着更深的链式思考与更高的 token 消耗，体现项目在 **可控推理成本 / 可调深度** 这一新兴议题上的响应。结合近期对 OpenAI Codex Responses API 的持续适配，可推测项目路线图正朝着"模型无关的推理档位抽象"演进。

**纳入下一版本可能性：高**。该 PR 涉及 schema、API、UI 与 i18n 多个层面，需要一定测试与评审周期，但功能边界清晰，且不破坏现有档位语义。

### 文档完善：#1252 — Docker 绑定挂载权限修复文档

- 链接：[#1252](https://github.com/moltis-org/moltis/pull/1252)
- 作者：Saraswat123
- 内容：闭环老 Issue #293，记录 `docker compose up` / `docker run` 绑定挂载首次部署时的 SqliteError 权限问题的修复方案。

**信号解读：** 长期 Issue（#293）的文档化收尾，进一步降低用户"首次部署"门槛。

---

## 7. 用户反馈摘要

由于本数据快照中 Issue 评论数普遍为 0，仅 #1112 有 1 条评论，可提取的直接用户语料有限。结合 Issue 标题与摘要，可提炼以下场景与痛点：

| 痛点 | 场景 | 用户情绪 |
|------|------|---------|
| Docker 下禁用 auth 失败 | 用户在本地容器化部署时，为简化体验关闭 auth，但实际仍触发认证流程 | 不满（功能名与行为不符） |
| `moltis doctor` 误报 streamable-http MCP | 用户配置了远程 MCP 服务器，`doctor` 子命令误判为"缺少 stdio command" | 不满（诊断工具给出错误结论） |
| Docker 绑定挂载首次部署触发 panic | `failed to open moltis.db` / `SqliteError` —— 文件权限未自动调整 | 不满（开箱即用失败） |

**整体满意度信号：** 虽然今日反馈量小，但 **所有被记录的痛点均在 24 小时内被修复或闭环**，反映出维护者响应链路的健康度较好。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 风险点 |
|------|------|------|---------|--------|
| 待评审 PR | [#1253](https://github.com/moltis-org/moltis/pull/1253) | feat(reasoning): add max effort level | 2026-09-02 | 涉及多端（schema / API / UI / i18n）改动，需关注向后兼容与 provider 钳制行为 |
| 待评审 PR | [#1252](https://github.com/moltis-org/moltis/pull/1252) | docs(docker): document the bind-mount permission fix for fresh deploys | 2026-09-01 | 文档类 PR，建议关联的 #293 同步关闭 |

**提醒维护者关注：**
- `#1253` 跨多个 crates 与前端资源，建议尽早指派 reviewer 以避免合并冲突。
- `#1252` 闭环的老 Issue #293 创建时间已久（已超过典型"长期未响应"阈值），建议合并时一并关闭原 Issue，避免再被新用户撞见。

---

### 📊 项目健康度快照（2026-09-02）

| 指标 | 数值 | 评估 |
|------|------|------|
| 24h 新增 Issue | 0 | 🟢 无新投诉 |
| 24h Issue 关闭率 | 100%（2/2） | 🟢 高效响应 |
| 24h PR 待合并 | 2 | 🟡 待评审 |
| 24h PR 合并/关闭率 | 50%（2/4） | 🟢 节奏稳健 |
| 用户反馈闭环率 | 100% | 🟢 优秀 |
| 待办长期积压 | 0 项已识别 | 🟢 清洁 |

> **结论：** Moltis 在 2026-09-02 处于 **"低噪高效"** 的维护期，部署侧与 MCP 健康检查两侧的稳定性瓶颈正在快速消解，新功能（推理档位）已进入评审通道。下一版本可期待为一次"稳定性 + 小幅功能"的综合补丁。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-09-02**
**仓库：agentscope-ai/QwenPaw**
**报告周期：过去 24 小时**

> 注：根据用户提供数据，仓库标识为 `agentscope-ai/QwenPaw`（以下链接均指向该仓库）。

---

## 一、今日速览

CoPaw 处于 **v2.2.0 beta 周期**的高强度迭代阶段，开发与社区反馈同步推进。过去 24 小时内共发生 **32 条 Issue 更新**（17 条活跃 / 15 条关闭）与 **35 条 PR 更新**（20 条待合并 / 15 条已合并或关闭），并发布新版本 **v2.2.0-beta.6**。当前主要矛盾集中在 **ReMe 长期记忆 / Embedding 索引、MCP 工具治理、cron 调度**三大块的稳定性，社区同时在推动 **Mobile 原生客户端、PawPort 导入流、可插拔长期记忆后端**等中长期能力。整体看，社区活跃度极高，beta 阶段的回归问题正在被快速收敛。

---

## 二、版本发布

### v2.2.0-beta.6（今日发布）

- **发布日期**：2026-09-01
- **Release Page**：[v2.2.0-beta.6](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.6)
- **配套安装验证**：[#7475 Release Duty](https://github.com/agentscope-ai/QwenPaw/issues/7475)

**主要变更（部分）**：
- **#7458** `fix(desktop)`：打包 ReMe 入口点插件（修复 PyInstaller onedir 后 `_reme=None` 的 500 错误）
- **#7452** `test(console)`：扩充 console 单元测试，+617 用例 / +10.61pp statement coverage
- 集成 `test(integration)` 相关更新（摘要截断）

**破坏性变更提示**：
- 注意 [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) 报告 **PR #7337 引入 `ModelInfo.max_tokens → max_output_length` 迁移**导致自定义 provider 加载失败；自定义 provider 用户升级前需同步迁移配置文件。

**迁移注意**：
- 自定义提供商的 `providers/custom/*.json` 中 `ModelInfo.max_tokens` 字段需替换为 `max_output_length`。

---

## 三、项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响领域 | 链接 |
|---|---|---|---|
| #7468 | `fix(memory): start ReMe before model configuration` | 修复首次安装/未配置模型时 ReMe 启动崩溃 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7468) |
| #7472 | `fix(governance): prevent shell line-continuation bypasses in sensitive path checks` | 修复 Tool Guard 通过 `\` 续行绕过敏感路径的安全回归 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7472) |
| #7466 | `fix(console): link Daily Paper to QwenPaw docs` | 文档链路统一 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7466) |
| #7432 | `fix(config): expand ~ in agent workspace dirs for trend aggregation` | LLM-Tool 趋势统计覆盖 `~` 工作区 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7432) |
| #7453 | `fix(pack): bundle reme-ai Python core in PyInstaller onedir` | 直接修复 #7446 的 500 错误 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7453) |
| #7439 | `fix: save screenshots in active project directory` | 修截图预览失败 | [PR](https://github.com/agentscope-ai/QwenPaw/pull/7439) |

**整体判断**：今日 merge 集中在「记忆栈启动顺序」「安全治理」「打包完整性」三条主线。`#7472` 的 shell 续行绕过修复尤其值得关注——属于真实可被利用的 Tool Guard 绕过路径，已被快速闭环。

---

## 四、社区热点

按评论数排序：

1. **[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)（8 评论）** — 工具结果丢失 + `write_file` 后同命令被再次派发触发 doom-loop 防护，单会话 5 次卡死。属 2.1→2.2-beta.1 升级后引入的回归。
2. **[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)（5 评论）** — 主 agent + 多子 agent 拓扑下，子 agent 进度不主动汇报，需用户手动询问；长时间无回应严重影响「复杂任务自动执行」体感。
3. **[#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443)（4 评论）** — 危险指令绕过提示，涉及安全合规边界。
4. **[#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464)（3 评论）** + 已关闭 **[#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446)** — DashScope Embedding 索引重建按钮长期置灰 / ReMe 500 错误，#7453 已修复后者。
5. **[#7449](https://github.com/agentscope-ai/QwenPaw/issues/7449)（3 评论，已关闭）** — 多 agent 会话接力时强制开启新会话，破坏上下文延续性。
6. **[#7379](https://github.com/agentscope-ai/QwenPaw/issues/7379)（3 评论，已关闭）** — 文件名含十几个中文字的 PDF 处理报错（中文路径编码）。

**诉求归纳**：
- 「升级后的回归」类问题占主导，说明 2.2 beta 的灰度覆盖需更细的版本差异报告。
- 「多 agent 协作 / 子任务进度」已经成为头部诉求，呼应 [#7461 in-round queued events](https://github.com/agentscope-ai/QwenPaw/issues/7461) 这类增强请求。

---

## 五、Bug 与稳定性

按严重程度排序：

### 🔴 Critical
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | Tool results lost + doom-loop protection 误触发，单会话 5 次卡死（2.2.0-beta.1 回归） | 未见 |
| [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 长上下文早期记录彻底丢失，导致 160 页文档任务无法继续 | 未见 |
| [#7481](https://github.com/agentscope-ai/QwenPaw/issues/7481) | macOS StdIO MCP spawn 子进程重入 `backend_guard` 杀死活动后端 | 未见（9/2 新增） |

### 🟠 High
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7469](https://github.com/agentscope-ai/QwenPaw/issues/7469) | ReMe 后台 embedding 任务静默失败（`as_embedding:default accessed before start()`） | [#7468](https://github.com/agentscope-ai/QwenPaw/pull/7468) 关联修复 |
| [#7470](https://github.com/agentscope-ai/QwenPaw/issues/7470) | MCP per-tool whitelist 在主 agent runtime 未生效，绕过策略 | 未见 |
| [#7474](https://github.com/agentscope-ai/QwenPaw/issues/7474) | 自定义 provider 因 PR #7337 字段迁移失败加载 | 未见 |
| [#7480](https://github.com/agentscope-ai/QwenPaw/issues/7480) | 升级重启后 cron 任务被非计划补发 + cancelled 不写收件箱 + console 自动已读 | 未见（9/2 新增） |
| [#7476](https://github.com/agentscope-ai/QwenPaw/issues/7476) | cron `misfire_grace` 窗口内任务重复调度，备份脚本执行两次 | 未见 |

### 🟡 Medium
| Issue | 描述 | 是否有 fix PR |
|---|---|---|
| [#7464](https://github.com/agentscope-ai/QwenPaw/issues/7464) | DashScope Embedding 索引重建被误判未保存 | [#7465](https://github.com/agentscope-ai/QwenPaw/pull/7465) 正在评审 |
| [#7459](https://github.com/agentscope-ai/QwenPaw/issues/7459) / 已关闭 [#7463](https://github.com/agentscope-ai/QwenPaw/issues/7463) | bundled llama.cpp 无法识别 `spark2_5` 架构 | 未见 |
| [#7471](https://github.com/agentscope-ai/QwenPaw/issues/7471) | MCP 页面 dark mode 出现白底容器 | [#7473](https://github.com/agentscope-ai/QwenPaw/pull/7473) 待合 |
| [#7467](https://github.com/agentscope-ai/QwenPaw/issues/7467) | `loop.rubric` 强制确认回合 + 自动折叠隐藏首条实质回复 | 未见 |

**健康度评估**：ReMe + Embedding 是当前最不稳定的子系统，5 条以上 Issue 围绕其生命周期（启动顺序 / 维度归一化 / 后台任务 / 打包完整性）。建议 2.2 GA 前加一轮 ReMe 全链路回归。

---

## 六、功能请求与路线图信号

| 需求 | Issue / PR | 评估 |
|---|---|---|
| 可插拔长期记忆后端（PowerContext） | [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) | 评审中，若落地将扩展 `BaseMemoryManager` 生态 |
| PawPort 跨 agent 导入流（Codex / Qoder） | [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | 评审中，有 first-time-contributor 标签，建议优先 mentor |
| 原生 Mobile 客户端（Expo/RN 草案） | [#7378](https://github.com/agentscope-ai/QwenPaw/pull/7378) | Draft，明确「DO NOT MERGE」，长线 |
| Per-session 模型覆盖 | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | 7 月起评审中，强烈用户需求 |
| ReMeLightMemoryCard reranker UI | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | 7 月起评审中 |
| In-round queued events（工具执行中插入用户消息） | [#7461](https://github.com/agentscope-ai/QwenPaw/issues/7461) | 与 #7450 子 agent 进度痛点协同 |
| ReMe Auto Fin 长期记忆数据源 | [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | 升级 ReMe 到 0.4.1.11，短期可合 |
| Agent Kanban 中英文 i18n | [#7482](https://github.com/agentscope-ai/QwenPaw/pull/7482) | 小颗粒，9/2 新增 |
| 拼错命令（`/mew`）应被丢弃 | [#7479](https://github.com/agentscope-ai/QwenPaw/issues/7479) | 渠道层校验，门槛低 |
| 收起侧边栏时固定会话图标 | [#7125](https://github.com/agentscope-ai/QwenPaw/issues/7125)（已关闭） | 期望 GA 落地 |
| 所有自带云端提供商可停用 | [#7455](https://github.com/agentscope-ai/QwenPaw/issues/7455)（已关闭） | 用户治理诉求 |

**路线图信号**：长记忆体系（ReMe → PowerContext → Auto Fin）和多 agent 协同（in-round events / 子任务进度）是用户呼声最强的两个方向，建议作为 2.3 主线。

---

## 七、用户反馈摘要

- **长上下文安全感缺失**（#7447）：用户在

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**日期**：2026-09-02
**项目**：[qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

ZeptoClaw 项目今日整体处于**低活跃度的例行维护状态**。过去 24 小时内无新增或活跃 Issues，无新版本发布，仓库仅有的 2 条 PR 更新均来自 Dependabot 自动化机器人，专注于 Docker 基础镜像 Rust 版本的依赖升级。值得注意的是，PR #649（升级至 1.97）已关闭，但紧随其后的 PR #658（升级至 1.98）随即开启，提示上游 Rust 镜像版本迭代节奏加快。整体来看，项目处于稳定的依赖维护窗口期，**功能开发与社区讨论层面较为平静**。

---

## 2. 版本发布

无新版本发布。本报告周期内未检测到任何 Release 标签更新。

---

## 3. 项目进展

今日仅有一条 PR 被关闭（PR #649），属于例行依赖更新，对核心功能无实质推进。具体内容如下：

### ✅ 已关闭：PR #649 — Docker 镜像 Rust 版本升级
- **类型**：依赖更新（dependencies / docker）
- **作者**：dependabot[bot]
- **链接**：[qhkm/zeptoclaw#649](https://github.com/qhkm/zeptoclaw/pull/649)
- **内容**：将 Docker 基础镜像中的 Rust 版本从 `1.95-slim-trixie` 升级至 `1.97-slim-trixie`
- **影响**：低风险，属于例行维护，有助于保持构建环境与上游 Rust 工具链同步，获取安全补丁与编译性能改进

### 🔄 进行中：PR #658 — Docker 镜像 Rust 版本再升级
- **类型**：依赖更新（dependencies / docker）
- **作者**：dependabot[bot]
- **链接**：[qhkm/zeptoclaw#658](https://github.com/qhkm/zeptoclaw/pull/658)
- **状态**：OPEN（待合并）
- **内容**：将 Rust 版本从 `1.95-slim-trixie` 升级至 `1.98-slim-trixie`，相比 #649 进一步跳版本
- **注意事项**：Dependabot 提示"冷却期（cooldown）无法应用，因为镜像仓库未提供发布日期"，维护者在合并前应自行验证镜像稳定性与兼容性

**进展评估**：项目今日在依赖基础设施层面完成了小幅向前推进（一个版本号的升级闭环），但无功能性代码变更。

---

## 4. 社区热点

今日 Issues 与 PR 评论区均为空，**无任何用户讨论或开发者互动**。所有 PR 均由 Dependabot 自动创建，点赞数为 0，评论数未定义，说明：

- 当前仓库的社区参与度极低
- 项目可能处于内部维护阶段或尚未公开发布宣传
- 未观察到明显的功能诉求或争议话题

---

## 5. Bug 与稳定性

**今日无任何 Bug 报告、崩溃反馈或回归问题。**

- Issues 数量为 0
- 已关闭/已合并的 PR #649 为纯依赖升级，不涉及 Bug 修复
- 待合并的 PR #658 同样为依赖升级，无关联的稳定性变更

**严重程度评估**：无 Bug 待处理。⚠️ 但需提醒维护者：连续两条依赖更新 PR 均围绕 Rust 基础镜像，建议在合并 #658 前确认上游 `1.98-slim-trixie` 镜像的稳定性与兼容性，避免引入编译环境回归。

---

## 6. 功能请求与路线图信号

**今日无任何新功能请求。** Issues 列表为空，无用户提交 feature request 或 RFC。考虑到项目仓库当前完全缺乏人工互动数据，**无法据此判断路线图方向**。建议关注：

- 项目是否即将发布新版本（目前无 Release 信号）
- 维护者是否在 Issues 区主动发布 Roadmap 或 Contribution Guide

---

## 7. 用户反馈摘要

**今日无可提炼的用户反馈。**

- Issues 数量为 0，无评论数据
- PR 均为自动化机器人提交，无人工讨论
- 无法识别真实用户痛点、使用场景或满意度信号

**分析师建议**：当前数据无法反映用户层面体验。建议在下一阶段报告中加入更长时间窗口（如 7 天/30 天）的趋势分析，以识别社区反馈基线。

---

## 8. 待处理积压

### 🔴 待合并 PR
| PR | 标题 | 创建日期 | 等待时长 | 备注 |
|----|------|---------|---------|------|
| [#658](https://github.com/qhkm/zeptoclaw/pull/658) | chore(deps): bump rust from 1.95-slim-trixie to 1.98-slim-trixie | 2026-09-01 | 1 天 | 等待维护者审核合并 |

### ⚠️ 维护者关注提醒
1. **PR #658 需手动验证**：由于 Dependabot 未能应用冷却期，建议维护者在合并前确认 `1.98-slim-trixie` 镜像是否已稳定发布，并运行 CI 验证编译兼容性
2. **社区响应机制**：连续 24 小时无任何 Issues 互动，建议维护者检查是否设置了 Issue 模板、是否启用了 Discussions 功能，以降低社区贡献门槛
3. **历史积压评估**：仅有 1 条待合并 PR 且为自动化任务，整体积压状况**健康**，无长期未响应的人工 Issue 或 PR

---

## 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|------|------|------|
| Issues 活跃度 | 0 | 🟢 平静 |
| PR 待合并数 | 1 | 🟢 良好 |
| 自动化依赖更新占比 | 100% | 🟡 人工参与度偏低 |
| 版本发布频率 | 0（24h） | ⚪ 数据不足 |
| 社区互动度 | 0 评论 | 🔴 无信号 |

**总体评估**：项目处于**平稳的依赖维护期**，基础设施更新有序进行，但社区活跃度极低，建议关注功能开发与用户互动层面的可持续性。

---

*报告生成时间：2026-09-02 | 数据来源：GitHub REST API*
*分析师备注：本报告基于单日数据生成，部分趋势分析建议结合更长周期数据复核。*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**报告日期：2026-09-02**
**数据范围：过去 24 小时**

---

## 1. 今日速览

ZeroClaw 仓库过去 24 小时维持高强度治理与设计节奏：32 条 Issues 更新（其中 4 条已关闭）和 50 条 PR 更新（13 条已合并/关闭）显示项目正处于多个 RFC 投票窗口与 #8289 鉴权架构大规模 stacked PR 系列的交汇期。讨论热度集中在 5 条高优先级 RFC（Runtime 会话、文件附件、Wire 协议、Sandbox 策略、WASM 插件运行时）以及维护者决策队列追踪器；安全相关 Issue 显著活跃（P0 数据丢失类 Bug #10495、P1 子代理工具越权 #8279、SOP 静默不加载 #9779）。整体健康度评估：**架构设计阶段高度活跃，但存在维护者审阅积压、需警惕 P0/P1 安全 Bug 蔓延**。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时无 Release 标签更新，#8850（编译时 feature → 运行时 WASM 插件）等大型路线图仍处于 in-progress 阶段，#8288 SOP 5/5 里程碑亦未结案。下一次发布窗口预计将绑定到 #8289 鉴权栈的最终合并（当前堆栈顶端为 #10321，依赖 #10275 → #10274 → #10270 → #10268 → #10265 → #10263 → #10259 → #10255 → #10248）。

---

## 3. 项目进展

今日合并/关闭的 13 条 PR 中，以下 5 条值得重点关注：

| # | 类型 | 主题 | 影响 |
|---|---|---|---|
| [#9352](https://github.com/zeroclaw-labs/zeroclaw/pull/9352) | 关闭（blocked/stale） | OTel 跨轮次会话归因 | RFC #8933 的实现被关闭（stale-candidate 标签），对应设计需重审 |
| [#10040](https://github.com/zeroclaw-labs/zeroclaw/pull/10040) | 关闭 | CI：恢复 fork PR 的 Lint 超时余量 | 解决了 Blacksmith 8-vCPU 路由下 fork 贡献者超时问题 |
| [#10063](https://github.com/zeroclaw-labs/zeroclaw/pull/10063) | 关闭 | 兼容网关拒绝 tool result 中的 image_url（Anthropic） | 修复了图像往返中的工作流阻塞，但状态显示 in-progress 后续仍需复检 |
| [#10306](https://github.com/zeroclaw-labs/zeroclaw/pull/10306) | 关闭 | 将 `web/` TypeScript 接入必需门禁 | 消除 75 条误导性 tsc 错误，提升贡献者体验 |
| [#9395](https://github.com/zeroclaw-labs/zeroclaw/pull/9395) | 关闭 | WASI `wasi:http` egress 缺少目标策略 | 弥补 WASM 插件出站网络无配置旋钮的安全盲点 |

**项目整体推进程度：** 仓库近 24 小时净增 Issue 评论密度上升，但 PR 关闭/合并比率约为 26%（13/50），低于 Issues 关闭率 12.5%（4/32）—— 说明设计讨论的产出速度已超过代码合并速度，**审阅带宽成为当前主要瓶颈**。#8289 鉴权 stacked PR 系列继续延展（最新节点 #10321，第 7 个 commit 起进入 review 范围），叠加 SOP 路线图、#8850 编译时 → 运行时重构，多条主线并行推进但都未达临界点。

---

## 4. 社区热点

**最活跃讨论 Top 5（按评论数排序）：**

1. **[#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — 31 条评论**  
   "Runtime-owned conversation sessions and transport surface adapters"（RFC Rev 5）。本 RFC 主动撤销了 Rev 4 投票快照，要求维护者重新开启讨论窗口。背后诉求：解决会话所有权、传输表面适配器职责划分这一长期架构债。

2. **[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) — 25 条评论**  
   "Unified file and attachment architecture for conversation surfaces"（RFC Rev 10）。同样撤销 Rev 9 投票，与 #9487 紧密耦合，社区在围绕"文件即会话内对象 vs. 文件即网关载荷"反复拉锯。

3. **[#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — 20 条评论**  
   "Granular sandbox policy — filesystem and network restrictions"。双层策略漂移（应用层 `SecurityPolicy` vs OS 级 Bubblewrap/Landlock/Seatbelt）问题已讨论 3 个月+，是当前最成熟的 RFC 候选。

4. **[#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — 17 条评论**  
   "Make wire protocol first-class in provider construction"。AI 辅助撰写、社区发起，意图提升 Provider 接入可治理性。

5. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 14 条评论**  
   **维护者决策队列追踪器**（已 accepted）。本 Issue 是 RFC 与设计 Issue 流向"接受/拒绝/延期/拆分"的统一调度面板，是社区洞察治理方向的关键窗口。

**热点诉求提炼：** 社区集中表达"先治理架构、再扩张功能"的诉求——7 条 RFC 均指向将隐性耦合显式化（会话、文件、传输、Provider、Sandbox、WASM 插件、SOP）。多个 RFC 在 24 小时内"撤销上一轮投票、要求重新快照"，提示社区对当前 RFC 流程节奏存在异议。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 摘要 | 状态 |
|---|---|---|---|
| **P0（最高）** | [#10495](https://github.com/zeroclaw-labs/zeroclaw/issues/10495) | `Config::save()` 可将 109KB / 25 agents 的 `config.toml` 替换为仅 702 字节的空壳文件 → **数据丢失** | OPEN，accepted，**尚无 fix PR** |
| **P1 / S0 安全** | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | `delegate` 工具在 `parent_tools` 上未应用父级 allowlist，子代理可调用父策略排除的工具 | OPEN，accepted，**尚无 fix PR** |
| **P1** | [#9779](https://github.com/zeroclaw-labs/zeroclaw/issues/9779) | `[sop] sops_dir` 文档默认值不被 daemon 认可，SOP 子系统静默不加载（无错误、无警告、无日志） | OPEN，accepted |
| **P1** | [#10513](https://github.com/zeroclaw-labs/zeroclaw/issues/10513) | RPC `sops.run` 为不会执行的 step 返回 run ID | OPEN，accepted |
| **P1** | [#10523](https://github.com/zeroclaw-labs/zeroclaw/issues/10523) | `compact_context` 在 6000 字符处截断 bootstrap 文件，对操作员完全不可见 | OPEN |
| **P1** | [#9850](https://github.com/zeroclaw-labs/zeroclaw/issues/9850) | `llm_task` 通过遗留工厂构造 provider，丢失 alias 级配置（Azure/OAuth/requires_openai_auth） | OPEN，accepted |
| **P2** | [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | `nix run` 安装路径未经验证也未文档化 | OPEN，已 accepted 超过 5 个月（good first issue） |
| **P2** | [#9896](https://github.com/zeroclaw-labs/zeroclaw/issues/9896) | `zeroclaw status` 在 sqlite 实际生效时显示 `Memory: none` | OPEN，accepted |
| **P2** | [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | OpenAI STT provider 仅读 `[transcription.openai].api_key`，忽略环境变量凭证 | OPEN，已 accepted 2.5 个月 |

**已关闭 Bug（24h）：** [#9395](https://github.com/zeroclaw-labs/zeroclaw/issues/9395)（WASI egress 无策略）、[#10063](https://github.com/zeroclaw-labs/zeroclaw/pull/10063)（Anthropic 兼容网关 image_url 拒绝）。

**稳定性观察** — 当前没有任何 P0/P1 Bug 附带已就绪 fix PR，**#10495 的数据丢失风险与 #8279 的子代理工具越权**应优先进入审阅队列。

---

## 6. 功能请求与路线图信号

**新提出且具落地潜力的需求：**

- **[#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) — 仅追加式会话事件历史 + 确定性状态回放 + 派生 agent 流**  
  已被 #10076 显式引用为"append-only event 词汇的独占权威来源"，说明其正在成为 WASM 插件运行时 RFC 的事实依赖。落地概率：**高**。

- **[#10531](https://github.com/zeroclaw-labs/zeroclaw/issues/10531) — 向父级暴露子代理进度（工具回执、部分输出）**  
  与 #8279（子代理工具越权）共同指向"delegate 工具"这条用户高频路径的成熟化；可绑定 #8289 鉴权栈的会话归属能力，落地概率：**中高**。

- **[#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — 网关原样透传通道消息（不经 agent turn）**  
  RFC 阶段，12 条评论显示已有共识；与 #10076 WASM 运行时配合后可形成"轻量推送 vs. 完整回合"的清晰分层。落地概率：**中**。

- **[#10509](https://github.com/zeroclaw-labs/zeroclaw/issues/10509) / [#10510](https://github.com/zeroclaw-labs/zeroclaw/issues/10510) — 文档阅读器文本缩放 & mdBook 升级到 0.5.4**  
  低风险且 good first issue 友好，是吸引新贡献者的现成入口。

- **[#9338](https://github.com/zeroclaw-labs/zeroclaw/pull/9338) — Crusoe Managed Inference 作为一等 OpenAI 兼容 provider**  
  沿用 NEAR AI #6842 模板（8 文件约定），但状态 blocked / do-not-merge，需先看 Provider 工厂是否会被 #8396 重构影响。

**路线图信号解读：** 仓库主线清晰收敛于"会话/RFC/治理（#9487、#8692）+ 鉴权/主体（#8289 系列）+ 沙箱/策略（#6996、#10076）+ 运行时插件化（#8850）"四条轴线。下一版本若锁定其中任一轴线作为 milestone，可显著降低 PR 评审饱和度。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中可提取的真实用户痛点：

- **"静默失败"是高频抱怨。** #9779（sops_dir 静默不加载）、#9896（status 误报 `Memory: none`）、#10523（6000 字符截断对操作员不可见）三连——用户反复遭遇"系统不报错但实际不可用"。这是诊断体验最迫切的缺口。

- **"凭据不可移植"反复出现。** #7899（OpenAI STT 仅读 config 而忽略 env）、#9850（llm_task 丢失 alias 配置）—— 用户在多环境（开发机/CI/生产）切换时缺乏一致性的鉴权与配置语义。

- **"文档默认值与代码不一致"普遍存在。** #9779、#5269（nix run 路径）、#10306（TypeScript 构建错误）—— 文档→实现→CI 三处的对齐尚未形成强制约束。

- **"安全策略双层"持续制造认知负担。** #6996 评论区显示：用户无法在 `SecurityPolicy` 与 OS 级 sandbox（Landlock/Seatbelt/Bubblewrap）之间形成一致心智模型，需求侧已经为"细粒度策略统一 API"做好铺垫。

- **用户满意信号：** #8850（feature flag → WASM 插件）评论显示社区认可"无需重编即可扩展"的方向；[#10509](https://github.com/zeroclaw-labs/zeroclaw/issues/10509) 的 good first issue 标签说明维护者仍在主动降低贡献门槛。

---

## 8. 待处理积压

以下 Issue/PR 长时间处于 OPEN 状态且具备显著影响，建议维护者优先审阅：

| 编号 | 类型 | 开立日期 | 持续时间 | 备注 |
|---|---|---|---|---|
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Bug (P2, good first issue) | 2026-04-04 | **5 个月+** | nix 安装路径未验证/未文档化，good first issue 标签但无人认领 |
| [#7899](https://github.com/zeroclaw-labs/zeroclaw/issues/7899) | Bug (P2) | 2026-06-17 | **2.5 个月** | OpenAI STT 环境变量凭证忽略 |
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | Bug (P1, S0 安全) | 2026-06-24 | **2 个月+** | delegate 工具 allowlist 越权，无 fix 进展 |
| [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC (P2) | 2026-05-28 | **3 个月+** | 沙箱策略统一 RFC，in-progress 但未进入投票 |
| [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC (P2) | 2026-07-28 | **5 周** | 已连续修订到 Rev 5，撤销前次投票

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*