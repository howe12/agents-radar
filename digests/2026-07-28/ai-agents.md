# OpenClaw 生态日报 2026-07-28

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-28 01:57 UTC

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

# OpenClaw 项目日报 · 2026-07-28

> 数据来源：[openclaw/openclaw](https://github.com/openclaw/openclaw) · 采样窗口：过去 24 小时（截至 2026-07-28 UTC）

---

## 1. 今日速览

OpenClaw 仓库在过去 24 小时继续保持**高强度清理节奏**：500 条 Issues 涉及更新（新增/活跃 242，已关闭 258），500 条 PR 涉及更新（待合并 282，已合并/关闭 218），关闭率分别达 **51.6%** 与 **43.6%**，显示维护团队对 backlog 进行了大规模清扫。然而同时仍有大量 P0/P1 级 Bug 处于 Open 状态（如 #91588 网关内存泄漏、#109867 beta.2 迁移阻塞），且 PR 待合并池（282 条）显著高于流入速率，**审稿与合并能力出现瓶颈**。无新版本发布，社区共识指向 7.2-beta 系列仍在持续打磨。

---

## 2. 版本发布

**今日无新版本发布。** 最近的相关动态为 7.2-beta.4（#113434 报告 Codex 会话重置漏洞）与 7.2-beta.2（#109867 涉及状态迁移阻塞）的问题反馈，说明当前主线版本仍处于"修补期"，尚未推进 stable 标签。

---

## 3. 项目进展

今日合并/关闭的 218 个 PR 中，多条聚焦**会话生命周期与稳定性**，代表进展如下：

- **[#114820](https://github.com/openclaw/openclaw/pull/114820)** (steipete) **fix(cron): prevent completed jobs rerunning after gateway restart** — 阻止已完成 cron 任务在网关重启后被重复触发，提升调度确定性。
- **[#110795](https://github.com/openclaw/openclaw/pull/110795)** **fix(usage): guard malformed Copilot payloads** — 修复 GitHub Copilot 用量接口返回畸形 JSON（null / array）时未捕获的 TypeError。
- **[#113083](https://github.com/openclaw/openclaw/pull/113083)** (dependabot) Android 依赖组 5 项次版本升级（kotest 等）。
- **[#102020](https://github.com/openclaw/openclaw/issues/102020)** 已关闭 — 跨频道"二条消息会话初始化冲突"bug 完成修复（参见 PR 链路）。
- **[#109867](https://github.com/openclaw/openclaw/issues/109867)** beta.2 状态迁移 Agent 索引创建顺序问题已闭环。

整体判断：项目在"会话/消息可靠性"方面**前进了半步**——若干回归被关闭，但底层稳定性问题（内存、cron 状态机）仍在积累。

---

## 4. 社区热点

### Issues（按讨论热度）

| 排名 | Issue | 评论 | 👍 | 焦点 |
|---|---|---|---|---|
| 1 | **[#75 Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** | 115 | **80** | 跨平台客户端缺失，呼声最高的"远古级"问题 |
| 2 | [#[#7707] Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 22 | 0 | 防御内存投毒攻击 |
| 3 | [#[#91588] Gateway Memory Leak 350MB→15.5GB](https://github.com/openclaw/openclaw/issues/91588) | 21 | 1 | RSS 持续增长触发 OOM，P0 级 |
| 4 | [#[#102020] Second message session init conflict](https://github.com/openclaw/openclaw/issues/102020) | 16 | 1 | Signal/Daemon 跨频道二条消息失败 |
| 5 | [#[#10659] Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 15 | 4 | 屏蔽原始 API Key，提升 prompt-injection 抗性 |

### PRs

- **[#111955](https://github.com/openclaw/openclaw/pull/111955)** Slack 频道保留原生表格（无障碍回退文本问题）。
- **[#82572](https://github.com/openclaw/openclaw/pull/82572)** feat(queue): followup 队列持久化跨网关重启（XL，已等 2 个月以上）。
- **[#114388](https://github.com/openclaw/openclaw/pull/114388)** feat(agents)!: 移除存储的 default agent —— 可能引入破坏性变更。

**诉求分析**：社区最强烈的声音集中在三类——**平台覆盖（Linux/Win 客户端）、安全纵深防御（凭据屏蔽 / 内存信任源标注）、网关长期运行稳定性**。这呼应了 #75 以来的长期 user pain。

---

## 5. Bug 与稳定性

按严重程度排序（已知的状态标签）：

### P0 — 关键级
- **[#91588](https://github.com/openclaw/openclaw/issues/91588)** Gateway Memory Leak：RSS 自 350MB 在 2-3 天内增长至 15.5GB，被 OOM Killer 杀掉形成 `launchd-handoff` 重启循环。**当前无已链接 fix PR**，`clawsweeper-recovery-stuck`。
- **[#109867](https://github.com/openclaw/openclaw/issues/109867)** ~~beta.2 SQLite 迁移次序导致网关启动失败~~ — **已关闭**（欣慰）。

### P1 — 重要级
- **[#86519](https://github.com/openclaw/openclaw/issues/86519)** Telegram 自 5.20 起 agent 回复重复 2-10x（已知回归，5.22 仅缓解未根治）。
- **[#113434](https://github.com/openclaw/openclaw/pull/113434)** Codex `sessions.reset` 复用已退役 session ID，目录扫描耗尽 Gateway RAM（2026.7.2-beta.4 复现）。
- **[#113306](https://github.com/openclaw/openclaw/issues/113306)** SQLite snapshot restore 缺乏端到端崩溃与身份保证。
- **[#87109](https://github.com/openclaw/openclaw/issues/87109)** macOS 长时间空闲后 Gateway heap 涨至 1073MB+，cron 静默失败。
- **[#113315](https://github.com/openclaw/openclaw/issues/113315)** Telegram 入站更新在 offset 持久化后永久丢失（已关闭，但根因待 PR 验证）。
- **[#113323](https://github.com/openclaw/openclaw/issues/113323)** 本地推理模型 idle 超时误杀 reasoning token 流式响应。
- **[#85251](https://github.com/openclaw/openclaw/issues/85251)** Codex app-server `notification:turn/started` 后死锁嵌入运行。
- **[#74484](https://github.com/openclaw/openclaw/issues/74484)** ~~网关配对范围死锁~~ — 已关闭。

### 回归与稳定性隐患
- **[#113207](https://github.com/openclaw/openclaw/pull/113207)** boot session 旧 ID 阻止 BOOT.md 启动 — 修复 PR 待合并。
- **[#85844](https://github.com/openclaw/openclaw/issues/85844)** 自动更新后运行中网关使用陈旧 hash bundle import — 维护者风险标签。
- **[#87756](https://github.com/openclaw/openclaw/issues/87756)** Prompt 启动的 Lobster workflow 在嵌套 `/tools/invoke` 挂起（curl 启动正常）。

**结论**：内存与 cron 状态机是当前最不稳定的技术债，相关 PR（#82572、#114820）已部分推出但合并节奏偏慢。

---

## 6. 功能请求与路线图信号

按落地可能性分级：

### 高落地预期（已有关联 PR 或同类补丁）
- **[#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)** — 隐藏 API Key 防 prompt injection；安全叙事强，🦞 级。
- **[#11665 Webhook 多轮复用 session](https://github.com/openclaw/openclaw/issues/11665)** — hook 多轮对话，已有 `clawsweeper:linked-pr-open`。
- **[#9016 OpenRouter 用量成本对外暴露](https://github.com/openclaw/openclaw/issues/9016)** — 成本感知 agent 上下文。
- **[#9986 上下文超限触发模型回退](https://github.com/openclaw/openclaw/issues/9986)** — 互操作回退，当前只对 API 错误生效。

### 中长期需要产品决策
- **[#75 Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75)** — 80 顶赞但无关联 PR，最大型积压条目。
- **[#7722 Filesystem Sandboxing Config](https://github.com/openclaw/openclaw/issues/7722)** — 工具级沙盒，仍卡在 `clawsweeper:needs-live-repro`。
- **[#12219 Skill Permission Manifest](https://github.com/openclaw/openclaw/issues/12219)** — skill.yaml 权限声明标准，安全方向。
- **[#10687 动态模型发现](https://github.com/openclaw/openclaw/issues/10687)** — 突破 Pi 静态目录。
- **[#6615 Exec-approvals denylist](https://github.com/openclaw/openclaw/issues/6615)** — 8 顶赞，操作直观。
- **[#76159 cron acceptSilentStop](https://github.com/openclaw/openclaw/issues/76159)** — "主动无输出即成功"语义化标志 — 已关但有相关 PR 链路。

### 易被低估但补丁完整
- **[#113920](https://github.com/openclaw/openclaw/pull/113920)** feat(usage): show quota for every configured auth profile — XL 级，状态 `ready for maintainer look`。

---

## 7. 用户反馈摘要

从高评论议题提炼出的真实痛点：

1. **"会话不抗重启"是头号痛点**：#113207、#103917、#113434、#113315 共同指向——重启（无论是进程、网关还是会话级）会引发**孤儿锁 / 孤儿状态 / 孤儿 offset**，用户无法预测行为。
2. **"代理用错模型"反复出现**：#113323（idle 超时误杀推理模型）、#94251（Ollama 流未消费）、#86519（Telegram 重复回复，PR 未合）—— 用户对**模型/通道耦合层**普遍信心不足。
3. **Linux/Windows 用户长时间被冷落**：#75 顶赞数（80）是其他议题均难以匹敌的，留下了客户端与配置文件双层缺失感。
4. **安全相关诉求**："Masked Secrets"、"Skill 权限 manifest"等说明社区在面对 prompt-injection 时希望 OpenClaw 提供**纵深防御结构**，而非简单靠 prompt 自律。
5. **使用场景多样性**：本地 Ollama 用户、AWS Bedrock 用户、codex-cli 用户、whatsapp/teams 用户都有反馈——**适配矩阵越来越宽**带来的不均匀体验是真实反馈。

---

## 8. 待处理积压（建议维护者优先关注）

| 类型 | 编号 | 等待信号 |
|---|---|---|
| **Issue 长期未响应** | [#75](https://github.com/openclaw/openclaw/issues/75) | 创建于 2026-01-01，距今 >200 天，80 顶赞 |
| | [#7707](https://github.com/openclaw/openclaw/issues/7707) Memory Trust Tagging | 创建于 2026-02-03，无 PR |
| | [#10659](https://github.com/openclaw/openclaw/issues/10659) Masked Secrets | 创建于 2026-02-06，无 PR |
| **PR 长期未合并** | [#82572](https://github.com/openclaw/openclaw/pull/82572) followup queue 持久化 | 创建于 2026-05-16，XL，已等待 2.6 个月 |
| | [#111126](https://github.com/openclaw/openclaw/pull/111126) agent exit nonzero | ready for maintainer look 已 9 天 |
| | [#113920](https://github.com/openclaw/openclaw/pull/113920) 显示所有 auth profile 用量配额 | ready for maintainer look |
| **P0 未根治** | [#91588](https://github.com/openclaw/openclaw/issues/91588) Gateway 内存泄漏 | `clawsweeper-recovery-stuck`，无 fix PR |
| **平台覆盖空白** | Linux/Windows 客户端 | 已有 80 顶赞堆积，建议在路线图给出"不打算做"或"下一窗口做"的明确表态 |

---

### 项目健康度综合判断

- **维护活跃度**：★★★★☆（日清 218+258 = 476 条目，清理非常积极）
- **核心稳定性**：★★☆☆☆（内存泄漏、cron 状态机、codex 会话重置仍为悬而未决的 P0/P1）
- **安全纵深**：★★☆☆☆（Issues 端关注度持续上升，但 PR 端落地缓慢）
- **社区响应均衡度**：★★★☆☆（热门议题能被看见，但 PR 合并池水位偏高）
- **版本可发布度**：★★☆☆☆（仍停留在 beta 周期；多项 P0 在 master 等位修复）

> ⚠️ 建议关注：合并队列 282 条 / 日净合并 ≈ 218 已显示**审稿吞吐接近饱和**。如果近 7 天保持这一新 PR 流入速率，待合并队列将在两周内逼近 1.5k 警戒线，建议发版窗口前先做队列分级合并。

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态 · 横向对比分析

**数据周期：** 2026-07-27 ~ 2026-07-28  
**样本项目：** 11 个（OpenClaw + 10 个同类）  
**报告视角：** 技术决策者 / 智能体开发者

---

## 一、生态全景

2026-07-28 当日，AI 智能体开源生态呈现**"头部加速打磨、中部密集修复、尾部陷入静默"**的三层分化态势：以 IronClaw v1.0.0 发布、CoPaw 2.0 升级收口、ZeroClaw 安全审计集群为代表的头部项目已进入"工程契约级"打磨期，错误可恢复性、沙箱纵深防御、跨平台一致性成为核心议题；OpenClaw、NanoBot、Hermes Agent 等中坚项目在维持高吞吐 PR 流（合计日均合并 250+ PR）的同时，反复暴露**会话生命周期可靠性**这一尚未根治的系统级痛点；NullClaw、TinyClaw、ZeptoClaw、PicoClaw 等长尾项目则普遍出现**维护者失联 + 自动化 PR 沉积**的迹象，社区活力告急。值得注意的是，**安全纵深防御**（API Key 屏蔽、内存信任源标注、通道授权白名单、紧急停止通路）已从过去的"附加特性"升级为头部项目的核心 KPI，反映出 Agent 生态正在向"可信执行"演进。

---

## 二、各项目活跃度对比

| 项目 | Issues 今日 | Issues 关闭率 | PR 今日 | PR 合并/关闭率 | Release | 维护阶段 | 健康度评级 |
|---|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (242 新/活, 258 关) | **51.6%** | 500 (282 待, 218 合并) | **43.6%** | ❌ 无 | 修补期 (7.2-beta) | 🟡 中（高活跃 / 低稳定） |
| **CoPaw** | 50 (34 关) | **68.0%** | 49 (15 关) | 30.6% | ❌ 无 | 2.0 升级收口 | 🟢 中高 |
| **ZeroClaw** | 48 (4 关) | 8.3% | 50 (8 关) | 16.0% | ❌ 无 | v0.9.0 预收口 | 🟡 中（安全债密集） |
| **IronClaw** | 39 (多关) | 中等 | 50 (19 关) | **38.0%** | ✅ **v1.0.0** | 1.0 后密集打磨 | 🟢 高 |
| **Hermes Agent** | 50 (42 活, 8 关) | 16.0% | 50 (7 关) | 14.0% | ❌ 无 | 桌面端打磨 | 🟡 中（桌面痛点突出） |
| **NanoBot** | 63 关 | **高** | 23 (13 待合) | 高 | ❌ 无 | WebUI 打磨期 | 🟢 高 |
| **LobsterAI** | 4 新 | 0% | 9 (6 合) | **66.7%** | ❌ 无 | 迭代高效 / 积压风险 | 🟡 中（短期高 / 中长期积压） |
| **Moltis** | 0 | — | 5 (0 合) | 0% | ❌ 无 | 评审停滞 | 🟠 中低（积压） |
| **NanoClaw** | 0 | — | 9 (1 合) | 11.1% | ❌ 无 | 轻量维护 | 🟡 中（合并慢） |
| **PicoClaw** | 0 | — | 0 | 0% | ❌ 无 | 全 stale | 🔴 低（失联信号） |
| **NullClaw** | 0 | — | 1 (dependabot) | 0% | ❌ 无 | 静默期 | 🔴 低 |

**关键观察**：
- **关闭率冠军**：CoPaw（68% Issue）+ NanoBot（63 Issue 集中关闭），体现主动 backlog 治理能力；
- **合并率冠军**：LobsterAI（67%）、OpenClaw（43.6%）；
- **唯一发版**：IronClaw v1.0.0（首个稳定版，含 Reborn 架构重写）；
- **完全静默**：PicoClaw / NullClaw / TinyClaw / ZeptoClaw 四个长尾项目当日 0 实质动作。

---

## 三、OpenClaw 在生态中的定位

### 优势
1. **吞吐规模领先**：当日 500 Issues / 500 PR 的处理量，是同梯队项目（Hermes Agent 50/50、CoPaw 50/49）的 **10 倍量级**，显示社区规模与维护活跃度优势显著；
2. **议题覆盖面最广**：从网关层（#91588 内存泄漏）、通道层（Telegram #86519）、会话层（#113434 Codex 重置）、安全层（#7707 内存信任源 / #10659 凭据屏蔽）到客户端层（#75 Linux/Win）全覆盖，体现**复杂系统的工程纵深**；
3. **安全纵深叙事清晰**：Masked Secrets、Memory Trust Tagging、Skill Permission Manifest、Exec Approvals Denylist 四条线形成**纵深防御矩阵**，与 ZeroClaw、Moltis 的"硬修复单点漏洞"形成路径差异；
4. **跨厂商适配矩阵**：本地 Ollama、AWS Bedrock、Codex CLI、WhatsApp/Teams 多端覆盖，适配广度领先。

### 劣势 / 风险
1. **核心稳定性债沉重**：#91588 网关内存泄漏（350MB → 15.5GB）、#113434 Codex 会话重置、#87109 长期空闲 heap 膨胀、#86519 Telegram 重复回复 等 P0/P1 **均无根治 PR**；
2. **审稿吞吐饱和**：282 待合并 PR / 日净合并 218，按当前 PR 流入速率，**两周内待合并队列逼近 1.5k 警戒线**——这是同梯队项目中最严重的瓶颈信号；
3. **平台覆盖真空**：#75（Linux/Win 客户端）累计 200+ 天、80 顶赞无关联 PR，是同梯队中**最久远的积压条目**；Hermes Agent / LobsterAI 等桌面端项目已抢先填补了部分空间；
4. **版本可发布度最低**：仍滞留 7.2-beta，与 IronClaw v1.0.0、CoPaw 2.0 形成代差。

### 路线差异
| 维度 | OpenClaw | IronClaw | CoPaw | NanoBot |
|---|---|---|---|---|
| 核心哲学 | **平台覆盖广度 + 安全纵深** | 错误可恢复性 + 重写洁净度 | 浏览器栈统一 + Agent 开放生态 | WebUI 体验 + 记忆工程 |
| 当前主线 | 修补 + 跨平台声援 | Manifest V3 + 沙箱 CA | Computer-use + 第三方 Agent | 扩展平台 + 多模型 |
| 桌面端 | ❌ 缺失（#75） | ✅ WebUI 已发 | ✅ QwenPaw 桌面 | ⚠️ Web 优先 |
| Stable 标签 | 7.2-beta | v1.0.0 | 2.0 | patch 节奏 |

---

## 四、共同关注的技术方向

以下议题在 **3 个以上项目** 中同期浮现，代表行业级共识：

### 1. 🔒 会话生命周期可靠性（横跨 8 个项目）
- **OpenClaw** #113207 / #113434 / #113315 — 重启导致孤儿 offset / 孤儿 session
- **Hermes Agent** #72016 → #73031 — 网关无活动看门狗导致 agent 循环停滞
- **NanoBot** #4792（`/stop` 静默丢 pending queue）、#4805（异常被 suppress 吞掉）
- **NanoClaw** #5964 — 2.0 schema 迁移后 chat↔history 关联断裂
- **Moltis** #1173 — PWA 通知静默替换
- **CoPaw** #5757/#5561 — 飞书首次消息后失联
- **ZeroClaw** #9421 / #9424 — 不完整响应被上报为成功
- **LobsterAI** #1240 — 单 API 受限致全应用瘫痪

**共识诉求**：从"被动异常处理"升级为"主动可恢复契约"——IronClaw Epic #6284（"模型可恢复 100% 它所看到的错误"）已成为行业标杆。

### 2. 🛡️ 安全纵深防御（横跨 7 个项目）
- **OpenClaw** #10659 Masked Secrets、#7707 Memory Trust Tagging、#6615 Exec Approvals
- **ZeroClaw** ⚠️ 8 条 belumume 安全审计集群（#9386 Gemini Key 泄漏、#9392 LINE 白名单绕过、#9393 Bluesky/Reddit 鉴权缺失、#9389 未认证配对、#8279 delegate 越权）
- **Moltis** #1170 — Discord `/sh` 任意命令执行 P0
- **CoPaw** #5090 — 拦截 `rm` 被 Python 脚本绕过
- **LobsterAI** #2389 — email 路径遍历加固
- **IronClaw** #6692 — 内部文档被公开暴露（已紧急修复）
- **NanoBot** #5114 — Dream 内存输入完整性保护

**共识诉求**：API Key 屏蔽、通道 sender authorization、白名单/allowlist 强制、工具"等效命令"识别已成为 Agent 安全默认配置而非可选项。

### 3. 🌐 跨平台一致性（横跨 6 个项目）
- **OpenClaw** #75 Linux/Windows 客户端（80 顶赞，200+ 天无 PR）
- **Hermes Agent** #61396 macOS arm64 spawn-helper、#63177 Windows 绝对路径、#42376 macOS plist
- **LobsterAI** #2390 PowerShell 5.1 vs 7、#2393 `\f` 转义损坏中文路径
- **ZeroClaw** #9422 Windows 编译失败、#8973 Landlock + Fedora shell 不可用
- **NanoBot** #2570 Ollama 404、#2329 飞书 Channel 与 CLI 模型解析不一致
- **CoPaw** #5259 Windows 向量索引无法持久化、#6239 Windows PATH 分号丢失

**共识诉求**：跨平台不再意味着"能跑"，而需要**行为/性能/失败语义一致**。

### 4. 🧠 记忆与上下文工程（横跨 4 个项目）
- **NanoBot** #1174（Memory consolidation 在本地模型下失败）、#5114（Dream 输入完整性）
- **IronClaw** #6482 可插拔内存 Provider Epic、#6724 能力声明重构
- **OpenClaw** #7707 Memory Trust Tagging
- **CoPaw** #5427 Reranker、#6456 Visual Compact（长历史视觉压缩）

**共识诉求**：从"上下文窗口堆叠"走向"可插拔、可信、可压缩"的工程化方案。

### 5. 🔌 扩展平台化（横跨 4 个项目）
- **NanoBot** #5098 统一扩展平台、#5116 skills.sh marketplace
- **IronClaw** #6481 Manifest-Driven Extension Platform、#6731 IronHub 市场、#6727 自定义 MCP
- **CoPaw** #6276 Unified Browser SDK、#6424 computer-use、#6397 第三方 Agent（Codex/Qoder）
- **ZeroClaw** #9463 WASM 内存插件、#8983 跨代理记忆共享

**共识诉求**：从"Skills/Apps/MCP 三层分立"走向"统一 manifest + 签名 + 来源校验"的平台化抽象。

### 6. 📡 多模型/多 Provider 管理（横跨 5 个项目）
- **NanoBot** #1991 多 custom 模型预设、#2329 CLI/Channel 解析不一致、#1584 Groq 升级
- **CoPaw** #6302 provider 发现基础设施、#5609 自定义协议端点
- **OpenClaw** #9016 OpenRouter 成本暴露、#9986 上下文超限触发回退
- **ZeroClaw** #8720 Bedrock Nova cachePoint 显式关闭
- **LobsterAI** #1240 单模型限流影响全局

**共识诉求**：模型发现、回退、重试、限流、计量的统一抽象层。

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 助手 + 多通道 + 安全叙事 | 重度个人用户 / 自托管爱好者 | Cron 调度器 + 多通道适配 + 内存信任源 |
| **IronClaw** | 错误可恢复性 + Manifest 驱动扩展 | 企业级生产部署 | Sandbox CA + 失败语义词汇表（36 变体）+ Reborn 重写 |
|

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-28

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) GitHub 仓库 · 统计窗口：过去 24 小时

---

## 一、今日速览

过去 24 小时 NanoBot 仓库呈现出**"高强度清理 + 持续迭代"**的双轨节奏：63 条历史 Issues 被集中关闭，23 条 PR 完成合并/关闭，同时仍有 13 条 PR 处于待合并状态。Issues 端以**长期遗留的兼容性、本地模型接入、Channel 互通**问题为主，PR 端则以**WebUI 体验打磨、Dream 内存保护、文档与品牌资产升级**为核心。无新版本发布，下一次发版节奏大概率由当前 Open 状态的 PR 触发。整体而言，项目健康度较高，社区贡献者（尤其是 chengyongru、Re-bin）维持着非常高的产出。

---

## 二、版本发布

**今日无新版本发布**。

当前仓库最近一次发版节奏似乎放缓——这与大量 PR（特别是 WebUI 与 gitstore 关键修复）正处于 review/合并前最后冲刺阶段相吻合，下个 patch 版本呼之欲出。

---

## 三、项目进展（今日合并/关闭的重要 PR）

今日共有 **23 条 PR 关闭/合并**，以下为对项目推进意义较大的几条：

| PR | 标题 | 影响 |
|---|---|---|
| [#5123](https://github.com/HKUDS/nanobot/pull/5123) | docs: improve README landing page | 重新打磨 README 首页，替换特性标签为具体用例，新增 GitHub Star CTA，提升新用户引导 |
| [#5121](https://github.com/HKUDS/nanobot/pull/5121) | fix(webui): prevent composer resize scroll jitter | 修复 composer 缩放引起的滚动抖动问题，保留自动跟随完成逻辑 |
| [#5119](https://github.com/HKUDS/nanobot/pull/5119) | fix(webui): soften model selector emphasis | 修正模型选择器字体粗细与 `/58` 颜色透明度在生产环境失效的问题 |
| [#5114](https://github.com/HKUDS/nanobot/pull/5114) | fix(memory): preserve Dream input integrity | 保留 Dream 的历史对话输入完整性，并允许 `write_file` 修改 SOUL/USER/MEMORY 规范文件 |
| [#5113](https://github.com/HKUDS/nanobot/pull/5113) | fix(webui): stabilize repeated model preset rows | 修复重复模型预设的 React key 冲突，避免遗留脏行 |
| [#5080](https://github.com/HKUDS/nanobot/pull/5080) | feat(brand): migrate README and WebUI assets to SVG | 将 README/WebUI 资产从 PNG 迁移到 SVG，去除付费字体依赖 |
| [#5077](https://github.com/HKUDS/nanobot/pull/5077) | feat(webui): switch model presets from the composer | 在 composer 中通过长按+拖动切换预设模型，移动端 dock 风格动效 |
| [#5076](https://github.com/HKUDS/nanobot/pull/5076) | fix(webui): honor custom gateway port with Vite | 修复 Vite 代理下自定义 gateway 端口丢失的问题 |
| [#5124](https://github.com/HKUDS/nanobot/pull/5124) | fix(gitstore): return real git object ids | 关键修复——纠正 dulwich 返回 hex 字符串被二次 hex 编码的 Bug（已关闭，但 [#5126](https://github.com/HKUDS/nanobot/pull/5126) 重新开启，需关注是否被替代） |

**整体推进评估**：今日的 PR 合并明显集中在 **WebUI 体验完善**（5 条）和**品牌/文档资产升级**（2 条），说明项目正在从"功能补齐期"过渡到"打磨期"。Dream 内存的输入完整性保护（#5114）是一个关键安全修复，应当作为下一发版的优先项。

---

## 四、社区热点

按评论数排序，过去 24 小时最活跃的话题集中在**多模型切换、本地部署（Ollama/LM Studio）、定时任务（Cron）、Memory 行为**四个方向：

1. **[#1991](https://github.com/HKUDS/nanobot/issues/1991) - 支持多个自定义 custom 配置（9 评论）**  
   用户希望同时定义多个模型预设（如 custom、custom2）并自由切换。当前架构只支持单一自定义，切换需手动改 config，体验较差。

2. **[#3123](https://github.com/HKUDS/nanobot/issues/3123) - Cron 定时任务发送的消息无法追问（8 评论）**  
   Cron 任务通过 cron session 发送消息，导致用户后续无法在该消息上追问或要求重新格式化。这影响了自动化场景下的人机协作流。

3. **[#2570](https://github.com/HKUDS/nanobot/issues/2570) - Ollama 本地配置：404 错误且 gateway 不监听 18790（7 评论）**  
   用户使用 `qwen2.5:0.5b` 时 CLI 返回 page not found，且 gateway 实际未监听端口。该问题与本地部署链路有关，影响 Raspberry Pi 等边缘场景。

4. **[#2329](https://github.com/HKUDS/nanobot/issues/2329) - 自定义模型在 CLI 可用但飞书 Channel 不可用（6 评论）**  
   揭示出 CLI 与 Channel 在模型 provider 解析上的不一致，飞书返回 invalid_model 错误。这是用户最关心的"多端互通"痛点。

5. **[#1174](https://github.com/HKUDS/nanobot/issues/1174) - Memory 整合耗时或失败（5 评论，👍2）**  
   本地模型（甚至 GLM-4.7 在长会话下）无法完成 memory consolidation，导致用户无法开启新 session。👍 数最高，反映出该问题严重性。

**诉求归纳**：社区的核心诉求可以凝练为三句话——**"我想同时用多个模型"、"我想在本地跑起来"、"我希望定时任务能像正常对话一样被继续追问"**。这些都指向一个更深的系统级诉求：**统一的会话/模型/任务上下文管理**。

---

## 五、Bug 与稳定性

按严重程度排列（结合点赞、影响面、是否已关联修复 PR）：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 P0 | [#4792](https://github.com/HKUDS/nanobot/issues/4792) | `/stop` 静默丢弃 pending queue 中的消息，造成**永久消息丢失**。`cmd_stop` 通过 `get_nowait()` 清空队列但未重新发布，相比 `_dispatch` 的 finally 块存在回归。 | ❌ 无 PR |
| 🔴 P0 | [#4805](https://github.com/HKUDS/nanobot/issues/4805) | `AgentRunner._run_tool()` 中 `suppress(Exception)` 包裹 `prepare_call`，工具验证错误被静默吞掉，可能掩盖关键异常。 | ❌ 无 PR |
| 🟠 P1 | [#2358](https://github.com/HKUDS/nanobot/issues/2358) | 切换 workspace 后旧 CRON job 仍继续运行，且使用新 workspace 的 system prompt，存在**安全/语义污染风险**。 | ❌ 无 PR |
| 🟠 P1 | [#1033](https://github.com/HKUDS/nanobot/issues/1033) | 每个 Channel 实例的 `_store` 缓存只加载一次，Channel B 永远看不到 Channel A 创建的 jobs，存在**跨实例缓存陈旧性**。 | ❌ 无 PR |
| 🟠 P1 | [#2549](https://github.com/HKUDS/nanobot/issues/2549) | 跨 channel 并发时 `_sent_in_turn` 被覆盖写，回归 #1197 已修复的问题。 | ❌ 无 PR |
| 🟠 P1 | [#1315](https://github.com/HKUDS/nanobot/issues/1315) | Discord Channel 中 `/clear` 等 slash command 与 Discord 原生命令冲突，且 memory 未真正清除。 | ❌ 无 PR |
| 🟡 P2 | [#1487](https://github.com/HKUDS/nanobot/issues/1487) | qwen3.5 plus 调用 PDF 工具时 `function.arguments` 非 JSON 格式报错 | ❌ 无 PR |
| 🟡 P2 | [#1401](https://github.com/HKUDS/nanobot/issues/1401) | `TypeError: type 'Choice' is not subscriptable`，agent 强退后无法重启 | ❌ 无 PR |

**值得注意**：[#5126](https://github.com/HKUDS/nanobot/pull/5126) 和 [#5120](https://github.com/HKUDS/nanobot/pull/5120) 已提交关于 gitstore hex 二次编码、session consolidation 媒体路径丢失的修复 PR，是今日 Open 状态 PR 中最重要的两个数据完整性修复，建议优先合并。

---

## 六、功能请求与路线图信号

| 功能请求 | 用户来源 | 落地路径信号 |
|---|---|---|
| **[#2747](https://github.com/HKUDS/nanobot/issues/2747)** 自定义/禁用系统提示中的 🐈 emoji | eortiz | 🟡 维护者已 Closed，建议下个 patch 直接接受 |
| **[#1584](https://github.com/HKUDS/nanobot/issues/1584)** Groq 切换至 whisper-large-v3-turbo | gabriel-munteanu | 🟢 低风险提升，未来 provider 配置选项会逐渐成熟 |
| **[#1881](https://github.com/HKUDS/nanobot/issues/1881)** tool/memory 设为可选项 | soulgod001 | 🟡 关联 [#5098](https://github.com/HKUDS/nanobot/pull/5098) **统一扩展平台**，可能性高 |
| **[#1991](https://github.com/HKUDS/nanobot/issues/1991)** 多 custom 模型预设 | Wcowin | 🟡 与 [#5077](https://github.com/HKUDS/nanobot/pull/5077) composer 切换模型预设方向一致，下版本可能性大 |
| **[#3559](https://github.com/HKUDS/nanobot/issues/3559)** 多租户下 WebSocket 替代 Webhook 的主动消息 | ivelin | 🟠 架构级请求，需 mainter 决策 |
| **[#1558](https://github.com/HKUDS/nanobot/issues/1558)** LLM provider 限流处理与重试 | pakerole | 🟢 高价值，需在 litellm wrapper 层补 retry 逻辑 |

**路线图信号最强方向**：
1. **WebUI 体验 → Composer/模型切换/Scroll 抖动**（已逐步落地）
2. **Channel 生态扩展 → LINE（[#5115](https://github.com/HKUDS/nanobot/pull/5115)）、多租户 WebSocket**
3. **扩展平台（Extensions） → [#5098](https://github.com/HKUDS/nanobot/pull/5098)** 标志着从"Skills/Apps/MCP"之外的第四层抽象将被引入

---

## 七、用户反馈摘要

### 真实用户痛点
- **🧩 多模型工作流不顺畅**：用户希望在不重启 CLI 的情况下切换模型，#1991、#2329、#2373 都从不同角度反映了这一点；CLI 与 Channel 行为不一致（#2329）让"调试可用 ≠ 上线可用"。
- **🏠 本地部署门槛高**：#2570、#1590、#1947、#1478 全部围绕 Ollama/LM Studio/vLLM 启动失败、404、API key 配置缺失。MiniMax/Qwen3.5 等国产模型错误（#2373、#1487）也体现"快速适配新模型"是高频需求。
- **⏰ Cron 任务缺乏对话延续性**：#3123、#3074 表明用户希望定时消息能被"接着聊"，而非"一次性广播"。
- **🧠 Memory consolidation 是稳定性的薄弱点**：#1174 显示本地模型几乎无法完成 consolidation，对低算力用户是断崖式体验。
- **🛑 静默失败比报错更可怕**：#4792、#4805 都是"消息/异常被悄悄丢弃"类问题，反映出鲁棒性代码需要更明确的失败语义。

### 用户满意/正面信号
- **👍 2 的 issue**：#1174、#1401——用户愿意花时间 upvote，说明问题影响真实使用。
- **🤝 贡献者密度**：chengyongru、Re-bin、hamb1y、ATECHPCS、shakewingo、KDB-Wind、Timelovers 等持续提交高质量 PR，社区活跃度健康。
- **📚 知识沉淀**：#1590 直接以"SOLUTION::"为标题给出 Ollama 配置最佳实践，反映社区已形成自助互助氛围。

---

## 八、待处理积压提醒

以下 Issue/PR 处于 Open 状态且具有较高优先级或较长时间未响应，建议维护者关注：

| 类型 | 编号 | 标题 | 状态时长 | 建议动作 |
|---|---|---|---|---|
| 🔒 安全 PR | [#4667](https://github.com/HKUDS/nanobot/pull/4667) | fix: protect user skills from dream writes | Open since **7 月 2 日**（~26 天） | 🔴 优先 review，需确认是否有合并阻塞 |
| 🚀 大特性 PR | [#5098](https://github.com/HKUDS/nanobot/pull/5098) | feat(extensions): add unified extension platform | Open since **7 月 26 日**（2 天） | 🟠 架构级 PR，需早期 reviewer 介入 |
| 🧩 WebUI 功能 | [#5116](https://github.com/HKUDS/nanobot/pull/5116) | feat(webui): add skills.sh marketplace | Open 1 天 | 🟢 关注是否依赖外部 CLI 行为 |
| 🛠 Channel 新增 | [#5115](https://github.com/HKUDS/nanobot/pull/5115) | feat(channels): add LINE Messaging API | Open 1 天 | 🟢 需确认 webhook 端口冲突 |
| 🐛 Bug Fix | [#5120](https://github.com/HKUDS/nanobot/pull/5120) | session consolidation drops uploaded media paths | Open 1 天 | 🟠 数据丢失类，越早合越好 |
| 🐛 Bug Fix | [#5126](https://github.com/HKUDS/nanobot/pull/5126) | gitstore returns hex-of-hex | Open 1 天 | 🔴 内存存储可靠性，建议与 #5124 协调后合 |
| 🐛 Bug Fix | [#5117](https://github.com/HKUDS/nanobot/pull/5117) | tolerate invalid idle-compaction timestamps | Open 1 天 | 🟡 低风险修复 |
| ✨ WebUI | [#5112](https://github.com/HKUDS/nanobot/pull/5112

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-07-28**

---

## 1. 今日速览

Hermes Agent 仓库在过去 24 小时呈现**高活跃度态势**：Issues 端 50 条更新（42 条新开/活跃、8 条关闭），PR 端 50 条更新（43 条待合并、7 条已合并或关闭），合计 100 条动态。社区问题覆盖桌面 GUI（Electron）、网关（Gateway）、代理核心（Agent）、工具（File/MCP/Vision）、CLI/TUI 及多平台适配（Feishu/Slack/Discord/Docker/macOS/Windows）。**当天无新版本发布**，但有 1 个 P1 安全类问题已闭环（[#72016](https://github.com/NousResearch/hermes-agent/issues/72016)），另有 1 个 P1 中断/中断中止静默失败问题（[#72975](https://github.com/NousResearch/hermes-agent/issues/72975)）正在等待修复 PR。项目整体处于"密集修复 + 桌面端 UI/UX 大幅打磨"的双轨状态。

---

## 2. 版本发布

**今日无新版本发布**。当前主线版本信息未在数据中更新，建议关注后续 `releases/` 标签变动。

---

## 3. 项目进展

### 已合并/关闭的 PR（7 条）

| PR | 类型 | 说明 |
|---|---|---|
| [#73029](https://github.com/NousResearch/hermes-agent/pull/73029) | test | 维护者 `fangliquanflq` 的 "test reopen probe"——已以 invalid 关闭，作为流程探测 |
| [#72858](https://github.com/NousResearch/hermes-agent/pull/72858)（相关回滚） | — | 上下文显示此前 [#72817](https://github.com/NousResearch/hermes-agent/pull/72817) 已被回滚，由 [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) 重新提交 |

### 已关闭的 Issues（8 条）

- [#46369](https://github.com/NousResearch/hermes-agent/issues/46369) Dvorak/非 QWERTY 键盘布局下快捷键失效（已修）
- [#72016](https://github.com/NousResearch/hermes-agent/issues/72016) **P1**：Gateway 会话缺少活动看门狗（watchdog），已通过 [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) 修复
- [#72970](https://github.com/NousResearch/hermes-agent/issues/72970) Windows CLI 启动慢（duplicate，已合并主线）
- [#65735](https://github.com/NousResearch/hermes-agent/issues/65735) 支持多 OpenAI/Codex 订阅（已在主线实现）
- [#47456](https://github.com/NousResearch/hermes-agent/issues/47456) Windows browser_tool.py UnicodeDecodeError
- [#72667](https://github.com/NousResearch/hermes-agent/issues/72667) MCP stdio 陈旧进程累积（macOS）
- [#66757](https://github.com/NousResearch/hermes-agent/issues/66757) 桌面端 i18n 跟随 `display.language`（duplicate）
- [#63632](https://github.com/NousResearch/hermes-agent/issues/63632) `MEDIA_TAG_CLEANUP_RE` 匹配失败

### 今日值得关注的进展方向

1. **桌面端 UI 打磨集中爆发**：⌘K 调色板、theme/color mode 视觉标识（[#73038](https://github.com/NousResearch/hermes-agent/pull/73038)）、GlyphSpinner React 抖动修复（[#73033](https://github.com/NousResearch/hermes-agent/pull/73033)）、aria-live 计时器消音（[#71753](https://github.com/NousResearch/hermes-agent/pull/71753)）、冷启动性能优化（[#73024](https://github.com/NousResearch/hermes-agent/pull/73024)）。
2. **Agent 可靠性强化**：网关活动看门狗重新落地（[#73031](https://github.com/NousResearch/hermes-agent/pull/73031)）、空流片段会话投毒防护（[#73028](https://github.com/NousResearch/hermes-agent/pull/73028)）、严格 Provider 的空内容+tool_calls 剥离（[#71787](https://github.com/NousResearch/hermes-agent/pull/71787)）。
3. **测试隔离修复**：阻止测试套件污染真实 `~/.hermes` 日志（[#71271](https://github.com/NousResearch/hermes-agent/pull/71271)），与已关闭的 [#50681](https://github.com/NousResearch/hermes-agent/issues/50681)（pytest 污染生产 state.db）形成对应。

---

## 4. 社区热点

按评论数排序，最受关注的议题：

| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) | 13 | 0 | **Desktop session sidebar 空（仅 default profile），其他 profile 正常** |
| 2 | [#61396](https://github.com/NousResearch/hermes-agent/issues/61396) | 5 | 0 | macOS arm64 上 node-pty spawn-helper 失去可执行位 |
| 2 | [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | 5 | 1 | Windows 上 `search_files` 传绝对路径静默返回 0 结果 |
| 4 | [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) | 4 | 0 | **桌面端中文 IME 切换问题**（语音按钮无法在 IME 输入时切换为发送按钮） |
| 4 | [#26037](https://github.com/NousResearch/hermes-agent/issues/26037) | 4 | 0 | 飞书（Feishu）回复图片消息丢失父上下文 |
| 4 | [#68339](https://github.com/NousResearch/hermes-agent/issues/68339) | 4 | 0 | `mixed-batch tool execution` (#66317) 引入的会话前段行为偏移 |

### 热点背后诉求分析

- **桌面端是当前用户痛点集中地**：[#67600](https://github.com/NousResearch/hermes-agent/issues/67600)（侧边栏空）、[#40146](https://github.com/NousResearch/hermes-agent/issues/40146)（中文 IME）、[#72971](https://github.com/NousResearch/hermes-agent/issues/72971)（切换会话时消息错投）等都集中在桌面 GUI，反映 Electron 客户端的稳定性仍需提升。
- **跨平台兼容性是关键议题**：macOS arm64（spawn-helper）、Windows 绝对路径（search_files / rg）、macOS 26.5.1 启动服务 plist（[#42376](https://github.com/NousResearch/hermes-agent/issues/42376)），三大平台各有未解决问题。
- **国际化（i18n）需求浮现**：桌面端硬编码英文（[#66757](https://github.com/NousResearch/hermes-agent/issues/66757) 已关但作为 duplicate）+ 中文 IME 体验问题，说明 CJK 用户是核心活跃群体。
- **MCP / 工具生态持续发酵**：one-shot 模式下 MCP 后台发现导致工具丢失（[#68137](https://github.com/NousResearch/hermes-agent/issues/68137)）、stdio 进程泄漏（[#72667](https://github.com/NousResearch/hermes-agent/issues/72667)）等。

---

## 5. Bug 与稳定性

### 🔴 P1（高优先级）

| Issue | 描述 | 状态 | 关联 Fix |
|---|---|---|---|
| [#72975](https://github.com/NousResearch/hermes-agent/issues/72975) | **OpenAI 中断/中止在 `force_close_tcp_sockets()` 返回 0 时静默无效**，请求在网络上存活数分钟 | OPEN | 待 PR |
| [#72016](https://github.com/NousResearch/hermes-agent/issues/72016) | 网关会话无活动看门狗（Feishu/Discord/Telegram DM），agent 循环停滞无检测 | CLOSED | [#73031](https://github.com/NousResearch/hermes-agent/pull/73031)（re-land） |
| [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) | 上 PR 的修复版本，待合并 | OPEN | — |

### 🟠 P2（中优先级，含若干活跃议题）

| Issue | 描述 | 状态 | 关联 Fix |
|---|---|---|---|
| [#67600](https://github.com/NousResearch/hermes-agent/issues/67600) | 桌面端 default profile 侧边栏空，后端已验证数据正常 | OPEN | 无 |
| [#63177](https://github.com/NousResearch/hermes-agent/issues/63177) | Windows `search_files` 绝对路径静默返回 0 | OPEN | 无 |
| [#68339](https://github.com/NousResearch/hermes-agent/issues/68339) | 混合批处理工具执行引入会话前段行为偏移 | OPEN（需复现/决策） | 无 |
| [#50681](https://github.com/NousResearch/hermes-agent/issues/50681) | pytest 测试会话泄漏到生产 `state.db`（单次 187 个空壳 session） | OPEN | [#71271](https://github.com/NousResearch/hermes-agent/pull/71271)（仅日志；state 路径修复缺失） |
| [#72971](https://github.com/NousResearch/hermes-agent/issues/72971) | 桌面 GUI 切换会话时消息错投 | OPEN（需复现） | 无 |
| [#42376](https://github.com/NousResearch/hermes-agent/issues/42376) | macOS 26.5.1 gateway plist 的 `LimitLoadToSessionType` 导致 launchctl bootstrap 失败 | OPEN（需决策） | 无 |
| [#70719](https://github.com/NousResearch/hermes-agent/issues/70719) | 文件修改校验页脚在 patch 缺参时误报 | OPEN | 无 |
| [#67629](https://github.com/NousResearch/hermes-agent/issues/67629) | Windows 绝对路径 `_bash_safe_path` 重写后 native rg 失败 | OPEN（duplicate） | 无 |
| [#68137](https://github.com/NousResearch/hermes-agent/issues/68137) | one-shot `-z` 在 MCP 发现完成前快照，慢 stdio server 被静默丢弃 | OPEN | 无 |
| [#62397](https://github.com/NousResearch/hermes-agent/issues/62397) | 后台 review fork 无法修补 skills（read-before-write 守卫拒绝） | OPEN | 无 |
| [#66086](https://github.com/NousResearch/hermes-agent/issues/66086) | Docker 网关对 `/workspace` 容器内路径的 MEDIA 附件静默丢失 | OPEN | 无 |
| [#69107](https://github.com/NousResearch/hermes-agent/issues/69107) | TUI `truncate_before_user_ordinal` 在其他客户端写入时拒绝合法 ordinal | OPEN | 无 |
| [#72905](https://github.com/NousResearch/hermes-agent/issues/72905) | OpenRouter 截图会话永久中毒：HTTP 422 未分类、两种 provider 签名缺失 | OPEN | [#73028](https://github.com/NousResearch/hermes-agent/pull/73028)（相关流片段防护） |
| [#72989](https://github.com/NousResearch/hermes-agent/issues/72989) | 含引号/歧义文本可能被永久封禁某模型，且无确认 | OPEN（需复现，duplicate） | 无 |

### 🟡 P3（低优先级，节选）

| Issue | 描述 | 关联 Fix |
|---|---|---|
| [#40146](https://github.com/NousResearch/hermes-agent/issues/40146) | 桌面端中文 IME 语音/发送按钮切换 | 无 |
| [#26037](https://github.com/NousResearch/hermes-agent/issues/26037) | 飞书回复图片消息丢失父上下文 | 无 |
| [#33489](https://github.com/NousResearch/hermes-agent/issues/33489) | BlueBubbles 缺少群聊过滤 | 无 |
| [#72981](https://github.com/NousResearch/hermes-agent/issues/72981) | Managed Cloud v0.19.0 Honcho 依赖安装权限被拒 | 无 |

### 崩溃/回归观察

- **Agent 核心回归**：[#68339](https://github.com/NousResearch/hermes-agent/issues/68339) 指出 7 月 17 日 `348e9912f` 提交引入 `mixed-batch tool execution`，触发 early-session 行为变化——属"提交级回归"，需关注后续 review。
- **桌面端交互回归**：[#73035](https://github.com/NousResearch/hermes-agent/pull/73035) 修复了 clarify 卡片"霸占键盘"导致用户无法直接键入回复的回归。
- **会话/活动看门狗**：[#72016](https://github.com/NousResearch/hermes-agent/issues/72016) → [#72817](https://github.com/NousResearch/hermes-agent/pull/72817) → 被回滚 → [#73031](https://github.com/NousResearch/hermes-agent/pull/73031) 重提。这是一次"提交→流程性回滚→再提"的典型实例，体现维护者对 review 节奏的把控。

---

## 6. 功能请求与路线图信号

### 待评估功能请求

| Issue / PR | 内容 | 路线图可能性判断 |
|---|---|---|
| [#70509](https://github.com/NousResearch/hermes-agent/pull/70509) `feat(voice)` | 端侧唤醒词 + 开放词汇短语 + 多 profile 语音路由 | **高**：作者 `teknium1`，跨 CLI/TUI/Desktop 三端，价值显著 |
| [#65735](https://github.com/NousResearch/hermes-agent/issues/65735) | 多 OpenAI/Codex 订阅支持（已 CLOSED 但已在主线） | **已纳入**：标记 `s

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**日期：2026-07-28**

---

## 1. 今日速览

PicoClaw 今日整体活跃度**偏低**。过去 24 小时内无新增 Release、无 PR 合并或关闭、Issues 也无任何关闭动作，全部 5 条 Issue 和 4 条 PR 均被 GitHub 自动标记为 **[stale]**（长期未响应）。从时间线看，所有条目集中在 2026-07-19 至 2026-07-21 创建，于 2026-07-27 被批量更新（系统性的 stale 扫描），但均未获得维护者实质响应。这表明项目目前可能处于维护者精力分散或集中处理其他事务的低活跃周期，需要关注是否有维护节奏放缓的迹象。

---

## 2. 版本发布

**今日无新版本发布。** 最近发布历史未在数据中体现，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 获取最新版本信息。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，项目代码层面今日无实质推进。但仍有 4 个待合并 PR 值得跟踪：

- **PR #3273** [[链接](https://github.com/sipeed/picoclaw/pull/3273)]：为 WebUI 添加完整日语本地化（968 行翻译文件），对应 Issue #3272。
- **PR #3271** [[链接](https://github.com/sipeed/picoclaw/pull/3271)]：更新 9 家提供商的默认模型名称至 2026-07 最新版本（如 OpenAI gpt-5.6 系列、Anthropic 最新模型），属于运维性更新。
- **PR #3270** [[链接](https://github.com/sipeed/picoclaw/pull/3270)]：新增阿里云 DashScope（百炼）TTS 提供商，并支持微信音频文件发送，扩展了语音和 IM 通道能力。
- **PR #3200** [[链接](https://github.com/sipeed/picoclaw/pull/3200)]（已等待 27 天）：为 WebUI 模型页面增加可配置的默认回退链，是一项较早期但仍待合并的功能增强。

**整体评估**：今日项目无可见推进，处于"待响应"状态。

---

## 4. 社区热点

今日讨论/反应最集中的条目：

| 排名 | 条目 | 类型 | 评论数 | 👍 | 关注点 |
|------|------|------|--------|-----|--------|
| 1 | [#3272](https://github.com/sipeed/picoclaw/issues/3272) / [#3273](https://github.com/sipeed/picoclaw/pull/3273) | Feature + PR | 1 | 0 | **日语本地化** —— 已有现成 PR，但未被合并 |
| 2 | [#3276](https://github.com/sipeed/picoclaw/issues/3276) | Feature | 1 | 0 | **systemd 托管网关检测** —— 反映生产部署场景需求 |

**诉求分析**：
- 同一用户 **honbou** 连续提出 #3272 与 #3276，反映其作为重度部署用户对生产化体验的诉求（systemd 兼容 + 本地化完善）。
- 日语本地化已有完整 PR 待合并，说明社区有"自给自足"的贡献意愿，但维护者响应缺位可能导致贡献者流失。

---

## 5. Bug 与稳定性

今日报告了 **3 个 Bug**，均处于 OPEN 状态，**暂无对应 fix PR**：

### 🔴 高严重度
- **[#3269](https://github.com/sipeed/picoclaw/issues/3269) MCP 服务器连接失败导致 Agent 循环挂起**
  - 影响：聊天界面完全停止响应用户。
  - 环境：nightly (2cf030d2) + Qwen3 + Go 1.25.11。
  - 评估：属于核心路径可靠性问题，会直接阻断用户体验，**优先级最高**。

### 🟡 中严重度
- **[#3281](https://github.com/sipeed/picoclaw/issues/3281) Web UI 聊天输入卡顿**
  - 影响：会话历史较长时输入框明显卡顿。
  - 环境：v0.3.1 + Web 通道 + Go 1.25.11。
  - 评估：前端性能问题，可能与消息列表虚拟化或重渲染策略相关，影响日常使用。

- **[#3268](https://github.com/sipeed/picoclaw/issues/3268) exec 工具 `action` 参数强制必填**
  - 影响：LLM 调用 exec 工具时不传 `action: "run"` 会失败，导致 AI agent 调用结果不稳定。
  - 评估：API 设计合理性缺陷，修复成本低（改为默认 `"run"` 即可），但影响面广。

---

## 6. 功能请求与路线图信号

- **[#3276 Launcher systemd 网关检测](https://github.com/sipeed/picoclaw/issues/3276)**：信号明确——社区用户在 headless Ubuntu VM 上长期使用 systemd 管理 PicoClaw 服务，对"Launcher 与 systemd 共存"有强烈需求。
- **[#3272 日语本地化](https://github.com/sipeed/picoclaw/issues/3272)**：已有对应 PR #3273 实现完整翻译，**强烈建议纳入下一版本**，技术准备已就绪。

**其他潜在路线图信号**（来自 PR 方向）：
- **PR #3271**：模型列表周期性同步机制（默认模型滞后于厂商更新是常见痛点）。
- **PR #3270**：阿里云 TTS + 微信音频支持，反映中文/企业级生态集成需求。
- **PR #3200**：可配置模型回退链，反映多模型冗余调度的实战需求。

---

## 7. 用户反馈摘要

从现有评论与上下文提炼的真实用户痛点：

- 🔧 **部署痛点**（来自 #3276）：在 Ubuntu VM 上 systemd 部署 PicoClaw 时，Launcher 的 WebUI 启停按钮与 systemd 管理的服务发生冲突；遇到配置中未识别的 channel 类型时整个 gateway 直接硬失败。说明项目在"生产化部署"路径上仍有断点。
- 🌏 **国际化覆盖不足**（来自 #3272）：主仓库文档已有日文翻译，但 WebUI Launcher 缺日语支持，形成体验落差。
- 🤖 **Agent 调用脆弱性**（来自 #3268）：LLM 调用工具时省略常见参数即失败，反映 API 设计未充分考虑 LLM 调用模式的容错性。
- 🖥️ **Web UI 性能瓶颈**（来自 #3281）：长对话历史下输入框卡顿，提示前端状态管理或列表渲染需要优化。
- ⚠️ **MCP 容灾缺失**（来自 #3269）：MCP 连接失败导致 Agent 永久挂起，没有任何降级或重试逻辑，体验类似"宕机"。

**整体满意度信号**：无明显正面反馈，集中于缺陷与缺失功能。

---

## 8. 待处理积压 ⚠️

这是今日最需要维护者关注的信号：

- **全部 5 条 Issue 全部被 GitHub 标记为 [stale]**，意味着按平台策略，这些 Issue 可能在不久后被自动关闭。
- **全部 4 条 PR 均被标记为 [stale]**，其中：
  - **PR #3200** 已等待 **27 天**（创建于 2026-07-01），是当前最老的待合并 PR。
  - 其余 3 条 PR（#3270、#3271、#3273）已等待约 8 天。

**建议维护者立即处理的事项（按优先级）：**

1. **回应 #3269**（MCP 挂起 Bug）—— 高严重度，影响核心功能可靠性。
2. **审查 PR #3273**（日语本地化）—— 已完成实现，合并成本极低，可快速闭环。
3. **回应 #3281 与 #3268** —— 涉及 UX/性能与 API 设计，需要确认修复方向。
4. **推进 PR #3200** —— 已近一个月无响应，社区贡献者可能失去耐心。

**健康度提示**：连续多条 stale 标记且无维护者活动，是社区贡献积极性受挫的早期信号，建议在 48 小时内进行批量回复或认领，以避免后续贡献者退出。

---

*报告生成时间：2026-07-28 | 数据来源：GitHub API（sipeed/picoclaw）*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：** 2026-07-28
**数据周期：** 过去 24 小时

---

## 1. 今日速览

NanoClaw 今日呈现**"轻量维护日"**特征：零 Issues 互动、零版本发布，但 PR 流水线保持运转，共 9 个 PR 有更新（8 开放、1 关闭）。整体活跃度偏向**修复型与文档完善型工作**，Signal 适配器、消息格式化、容器配置等核心链路均有进展。社区方面，所有 PR 评论数均显示为 `undefined`，提示讨论密度较低，需要关注维护者是否及时跟进评审。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 建议关注以下高优先级 PR 的合并节点，它们可能共同构成下一个小版本（例如 v0.x.y 补丁版本）：

- PR #3142（Signal 附件路径修复）
- PR #3141（容器 skill 配置修复）
- PR #3143（已解决审批卡片保留）

---

## 3. 项目进展

### ✅ 已关闭 / 合并的 PR

| PR | 标题 | 作者 | 链接 |
|---|---|---|---|
| #2598 | fix: load per-group CLAUDE.local.md by adding 'local' to settingSources | jonnychesthair-crypto | [🔗](https://github.com/nanocoai/nanoclaw/pull/2598) |

**推进内容：** 该 PR 修复了**每群组（per-group）的 `CLAUDE.local.md` 配置加载逻辑**，通过在 `settingSources` 中加入 `'local'` 选项，使本地配置能被 Agent 正确读取。这一改动直接关系到**多群组隔离配置**的能力，是 agent-as-a-service 类部署场景的重要基础。

> 💡 这是过去 24 小时**唯一关闭的 PR**，合并节奏偏慢，建议关注是否有积压风险（详见第 8 节）。

---

### 🔄 进行中、值得跟踪的活跃 PR

| PR | 类型 | 主题 | 作者 | 链接 |
|---|---|---|---|---|
| #3143 | Fix | 保留已解决审批卡片的标题与正文 | Koshkoshinsk | [🔗](https://github.com/nanocoai/nanoclaw/pull/3143) |
| #3142 | Fix | Signal 适配器附件路径修复（mount 后的 inbox） | ira-at-work | [🔗](https://github.com/nanocoai/nanoclaw/pull/3142) |
| #3141 | Fix | 遵循 container.json 的 skill 选择用于 CLAUDE.md 片段 | ERMOKHINNA | [🔗](github.com/.../pull/3141) |
| #2346 | Fix | 未知斜杠命令归类为普通聊天 | SidhayaPravda618 | [🔗](https://github.com/nanocoai/nanoclaw/pull/2346) |
| #3137 | core-team | Engagement 一致性与自服务 wiring 控制 | Koshkoshinsk | [🔗](https://github.com/nanocoai/nanoclaw/pull/3137) |
| #2971 | Skill | ncc 实用技能：运维与健康检查 CLI | zivisaiah | [🔗](https://github.com/nanocoai/nanoclaw/pull/2971) |
| #3050 | Feature | 新增 Dial 频道到频道选择器 + 向导 | OmriBenShoham | [🔗](https://github.com/nanocoai/nanoclaw/pull/3050) |
| #2685 | Docs | Signal 文档：群组输入指示、出站反应、引用回复 | ira-at-work | [🔗](https://github.com/nanocoai/nanoclaw/pull/2685) |

**整体评估：** 今天的项目进展以"**修复密集型**"为主（4 个 Fix + 1 个 core-team 改进 + 1 个文档 + 1 个 skill + 1 个 Feature），说明项目正在经历**质量加固阶段**，而非新功能爆发阶段。Signal 频道相关修复（#3142 + #2685）尤为突出，显示该集成仍是当前开发的重点。

---

## 4. 社区热点

⚠️ **数据缺失提示：** 所有 PR 当前的 `评论` 字段均为 `undefined`，Issues 列表为空。无法基于互动数据量化"今日最热"。

**基于 PR 更新频率的代理指标（按更新时间倒序）：**

| 排名 | PR | 更新时间 | 评估理由 |
|---|---|---|---|
| 🥇 | [PR #3142](https://github.com/nanocoai/nanoclaw/pull/3142) | 2026-07-27 | Signal 附件路径硬编码导致 **PDF / 文档类附件完全无法被 Agent 读取**，属于功能性阻断 |
| 🥈 | [PR #3143](https://github.com/nanocoai/nanoclaw/pull/3143) | 2026-07-27 | 改进审批卡片 UI 体验，影响所有使用 approval card 的工作流 |
| 🥉 | [PR #3141](https://github.com/nanocoai/nanoclaw/pull/3141) | 2026-07-27 | 涉及核心 container.json 与 CLAUDE.md 装配链路 |
| 4 | [PR #3137](https://github.com/nanocoai/nanoclaw/pull/3137) | 2026-07-27 | 由 core-team 标签标记，可能为受信任的优先合并候选 |

**诉求分析：** 今日提交/更新的 PR 集中在**配置加载的稳健性**与**附件 / 命令解析的正确性**，反映出社区对"Agent 在真实消息环境中可靠工作"的核心诉求。

---

## 5. Bug 与稳定性

按严重程度排序（结合 PR 描述推断）：

### 🔴 高严重度 — 功能性阻断

**1. Signal 附件路径失效（PR [#3142](https://github.com/nanocoai/nanoclaw/pull/3142)）**
- **现象：** Signal 适配器将图片附件路径硬编码为 `/workspace/extra/signal-attachments/<id>`，但该路径**未挂载到容器中**，导致 Agent 的 Read 工具无法打开任何非图片、非音频的附件（PDF、TXT、文档）。
- **影响范围：** 所有通过 Signal 发送非媒体文件的用户。
- **修复状态：** ✅ 已有 fix PR（#3142），待合并。

### 🟡 中严重度 — 静默失败

**2. 未知斜杠命令被静默丢弃（PR [#2346](https://github.com/nanocoai/nanoclaw/pull/2346)）**
- **现象：** 未知 slash 命令被归类为 `passthrough`，Agent SDK 将其当作 Claude Code slash 命令处理，因输出无 `<message>` 块而被**静默丢弃**。
- **影响范围：** 用户误输入或自定义斜杠命令时无任何反馈。
- **修复状态：** ✅ 已有 fix PR（#2346），但**创建于 2026-05-08，至今约 2.5 个月未合并**，存在积压风险。

### 🟡 中严重度 — 配置加载不一致

**3. container.json skill 选择未被尊重（PR [#3141](https://github.com/nanocoai/nanoclaw/pull/3141)）**
- **现象：** 容器组装时 `container.json` 中声明的 skill 选择未正确传递到 `CLAUDE.md` 片段拼接。
- **影响范围：** 使用自定义 skill 组合的高级部署用户。
- **修复状态：** ✅ 已有 fix PR（#3141），待合并。

### 🟢 低严重度 — 体验改进

**4. 已解决审批卡片内容丢失（PR [#3143](https://github.com/nanocoai/nanoclaw/pull/3143)）**
- **现象：** 决议后审批卡片的按钮被替换，但**原始正文（title、request details）丢失**，终端卡片无法溯源。
- **影响范围：** 审批工作流的审计与可追溯性。
- **修复状态：** ✅ 已有 fix PR（#3143），待合并。

---

## 6. 功能请求与路线图信号

从今日活跃 PR 推断项目可能的近期路线图方向：

### 📡 信道扩展

- **PR [#3050](https://github.com/nanocoai/nanoclaw/pull/3050)**：将 **Dial** 添加到频道选择器与向导（`runChannelSkill` 模型）。
  - 信号：项目正从单一 / 少数消息平台向"**多渠道、插件化**"演进，Dial 的加入意味着可能继 Signal、Telegram 等之后扩展新集成。

### 🛠️ 自服务运维能力

- **PR [#3137](https://github.com/nanocoai/nanoclaw/pull/3137)**：允许 group-scoped agents **自查 wiring 并申请经审核的策略更新**。
  - 信号：推动 Agent 从"被动执行者"向"**主动运维、自描述**"演进，符合 AI Agent 自治趋势。
- **PR [#2971](https://github.com/nanocoai/nanoclaw/pull/2971)**：ncc 实用技能——**主机运维与健康检查 CLI**。
  - 信号：加强项目的**可观测性与可调试性**，通常是企业级采用的必备项。

### 📚 文档体系完善

- **PR [#2685](https://github.com/nanocoai/nanoclaw/pull/2685)**：Signal 文档更新（群组 typing、outbound reactions、quote-reply）。
  - 信号：项目维护者意识到**文档滞后于功能**，正在补课。

### 🔮 预测

若维持当前合并节奏，未来 1-2 周可能发布一个**以稳定性为主的补丁版本**，主要修复 Signal 附件路径、斜杠命令处理、container.json skill 装配等问题；Dial 频道与 ncc 健康检查 CLI 若顺利合并，将成为下一个 minor 版本的功能亮点。

---

## 7. 用户反馈摘要

⚠️ **数据限制：** 由于 Issues 为 0 且所有 PR 评论数缺失，本节无法引用具体用户原话。以下反馈系**从 PR 描述与摘要中提取的隐含诉求**：

### 用户痛点（按主题归纳）

1. **"我的附件为什么读不到？"** — Signal 用户发送 PDF/文档后，Agent 无法访问。
2. **"我的命令为什么没反应？"** — 用户输入 / 自定义命令时遇到静默失败。
3. **"我的配置为什么不生效？"** — 高级用户在 `container.json` 中精心选择的 skill 未被尊重。
4. **"为什么我看不到历史审批？"** — 决议后卡片内容消失，审计诉求被忽视。

### 使用场景信号

- 多渠道（尤其是 Signal）部署是**核心生产场景**。
- 高级用户在尝试**自定义 skill 组合 + per-group 配置**，对**配置隔离**有强烈需求。
- 项目正在从"个人玩具"向"**可被多人 / 多群组共享的智能体平台**"过渡。

### 满意度观察

- ✅ 维护者对 PR 响应较快（多 PR 当日创建、当日更新）。
- ❌ 但**评审与合并速度滞后**（如 #2346 滞留 2.5 个月），可能挫伤贡献者积极性。

---

## 8. 待处理积压

以下为**创建时间较早但仍未合并**的重要 PR，建议维护者优先处理：

| PR | 标题 | 创建时间 | 滞留时长 | 链接 |
|---|---|---|---|---|
| #2346 | fix(formatter): treat unknown slash commands as normal chat | 2026-05-08 | **~81 天** | [🔗](https://github.com/nanocoai/nanoclaw/pull/2346) |
| #2598 ✅ | fix: load per-group CLAUDE.local.md | 2026-05-23 | ~66 天 | [🔗](https://github.com/nanocoai/nanoclaw/pull/2598) *(已合并)* |
| #2685 | docs(signal): group typing, outbound reactions, quote-reply fix | 2026-06-04 | ~54 天 | [🔗](https://github.com/nanocoai/nanoclaw/pull/2685) |
| #2971 | Add ncc utility skill: host operational and health CLI | 2026-07-07 | ~21 天 | [🔗](https://github.com/nanocoai/nanoclaw/pull/2971) |

### 🚨 维护者关注建议

1. **PR #2346（81 天未合并）**：作为 Fix 类型，且属于"静默失败"类 bug，滞留时间过长。建议优先评审。
2. **PR #2685（54 天文档更新）**：纯文档类 PR 通常应快速合入，建议确认阻塞原因。
3. **批量评审建议**：今日有 4 个 Fix 类 PR 同时等待合并（#3141 / #3142 / #3143 / #2346），可考虑集中评审并打包发布。

---

## 📊 项目健康度速览

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | 🟢 中 | PR 流水线活跃，但 Issues 端静默 |
| 稳定性 | 🟡 关注 | 多处静默失败 / 配置不一致问题 |
| 响应速度 | 🟢 良 | 当日 PR 多被维护者关注 |
| 合并速度 | 🔴 需改进 | 个别 Fix PR 滞留超 2 个月 |
| 路线清晰度 | 🟢 良 | 多渠道 + 自服务运维方向明确 |
| 文档同步 | 🟡 关注 | Signal 文档滞后已通过 PR #2685 补救 |

---

*报告基于 GitHub 公开数据自动生成，仅供参考。建议结合实际代码审查与社区讨论综合判断项目状态。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期：2026-07-28**
**项目：**[nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 项目今日活跃度极低，处于**静默期**。过去 24 小时内无任何 Issues 新开、活跃或关闭，Pull Requests 仅有 1 条处于待合并状态，且为 Dependabot 自动发起的 Docker 基础镜像依赖升级。无新版本发布。从健康度角度看，项目虽无异常停滞迹象，但缺乏人工驱动的开发与社区互动，建议维护者关注长期积压的自动化 PR 与社区信号。

---

## 2. 版本发布

**无新版本发布。**

过去 24 小时内未检测到任何 Release 事件。最新版本信息请参考 [GitHub Releases 页面](https://github.com/nullclaw/nullclaw/releases)。

---

## 3. 项目进展

**今日无任何 PR 被合并或关闭。**

当前唯一处于活跃状态的 PR 为 Dependabot 提交的依赖更新请求，尚未推进项目实质功能演进：

- **[#956](https://github.com/nullclaw/nullclaw/pull/956)** — `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`
  - 提交者：`dependabot[bot]`
  - 创建时间：2026-06-15，最近更新：2026-07-27
  - 内容：将 Docker 基础镜像 `alpine` 从 `3.23` 升级至 `3.24`
  - 状态：OPEN，等待 40 余天未合并，点赞数 0

**进展评估：** 项目今日在功能开发、Bug 修复、文档完善等核心维度均无推进，整体开发节奏趋于停滞。

---

## 4. 社区热点

**今日无社区讨论热点。**

- 过去 24 小时无新 Issues 产生，无任何评论互动。
- 唯一活跃条目 [PR #956](https://github.com/nullclaw/nullclaw/pull/956) 来自自动化机器人，且无人工评论。

**分析：** 项目当前缺乏用户反馈与社区参与信号，可能反映以下情况之一：项目已进入维护期、用户群体较小且活跃度天然偏低，或社区渠道未被有效激活。建议维护者主动发起讨论或发布阶段性进展以激活社区。

---

## 5. Bug 与稳定性

**今日无新增 Bug 报告。**

无崩溃、回归或稳定性相关 Issues 提交。基于现有数据，无法评估当前版本是否存在已知未修复问题。建议查阅 [Issues 列表](https://github.com/nullclaw/nullclaw/issues) 确认历史 Bug 积压情况。

---

## 6. 功能请求与路线图信号

**今日无新功能请求。**

无 Issues 提交意味着无法从用户侧获取新功能需求信号。唯一待处理的 [PR #956](https://github.com/nullclaw/nullclaw/pull/956) 为底层依赖更新，不涉及用户可见功能变化。

**建议：** 维护者可主动在仓库中开启 `Discussions` 区或发布路线图草案，引导社区参与需求规划。

---

## 7. 用户反馈摘要

**今日无用户反馈可供提炼。**

由于无 Issues 评论产生，无法从用户视角获取痛点、使用场景或满意度信息。

---

## 8. 待处理积压

以下条目需维护者重点关注：

| 类型 | 编号 | 标题 | 创建时间 | 等待天数 | 链接 |
|------|------|------|----------|----------|------|
| PR | #956 | ci(deps): bump alpine from 3.23 to 3.24 | 2026-06-15 | ~43 天 | [查看](https://github.com/nullclaw/nullclaw/pull/956) |

**关注要点：**
- [PR #956](https://github.com/nullclaw/nullclaw/pull/956) 属常规安全/维护性依赖升级，合并风险低，建议尽快 review 并合并以保持依赖新鲜度。
- 若项目长期无新 Issue 与 PR 进入，建议维护者评估是否需要发布状态更新或主动推动功能迭代。

---

## 健康度总评

| 维度 | 状态 | 说明 |
|------|------|------|
| 开发活跃度 | 🟡 偏低 | 无人工提交，仅 1 条机器人 PR 待合并 |
| 社区参与度 | 🔴 静默 | 24 小时内无 Issues、无评论 |
| 发布节奏 | 🟡 待观察 | 当日无新版本发布 |
| 依赖维护 | 🟢 正常 | 有自动化依赖更新机制（Dependabot） |

**总体评估：** 项目处于低活跃维护状态，无异常告警但需关注长期静默带来的社区流失风险。

---

*报告基于 GitHub 公开数据生成，数据时间窗口：2026-07-27 ~ 2026-07-28。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期：** 2026-07-28
**项目仓库：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 一、今日速览

IronClaw 项目今日进入了 **v1.0 正式发布后的首个工作日**，社区与核心团队呈现出极高活跃度：**39 条 Issues 更新、50 条 PR 更新，并伴随一次里程碑式发布**。从数据看，团队正并行推进三条主线：(1) v1 启动清单（v1-launch-checklist）的崩溃修复与 UX 补齐；(2) Epic #6284 "错误可恢复性终极目标" 的多 PR 协同落地；(3) Reborn 架构下 Manifest V3、内存/Telegram/MCP 等多个扩展主题的并行重构。整体节奏健康、方向清晰，但也暴露出 **多个 P1 级生产事故** 与 **遗留迁移路径未规划** 的风险点，建议维护者重点跟踪。

---

## 二、版本发布

### 🚀 ironclaw-v1.0.0（2026-07-27 发布）

这是 IronClaw 的**首个稳定版本**，是对代理运行时、存储、扩展宿主与 Web UI 的**完全重构**，而非 0.29.x 系列的递增升级。

**关键变更摘要：**

| 维度 | 变更 |
| --- | --- |
| CLI 二进制 | `ironclaw` 为全新架构 CLI；旧 v1 单体构建为 `ironclaw-legacy` |
| 运行时 | 代理运行时整体重写 |
| 存储 | 存储层重构 |
| 扩展宿主 | 新一代扩展宿主 |
| Web UI | 全新 Web 界面 |

**破坏性变更：**
- 项目代号从内部代号升级为 "Reborn" 公开版本命名 → 需关注 Epic [#6725](https://github.com/nearai/ironclaw/issues/6725)（legacy → Reborn 迁移路径设计）
- 二进制命名空间重新划分，迁移用户需切换 CLI 调用方式

**迁移注意事项：**
旧版本 `ironclaw onboard` 在 Ubuntu 上 systemd 服务出现故障（[#6575](https://github.com/nearai/ironclaw/issues/6575)，已关闭），升级前请先验证本地服务可正常拉起。

链接：[Release v1.0.0](https://github.com/nearai/ironclaw/releases/tag/v1.0.0)

---

## 三、项目进展

今日共 **19 个 PR 被合并/关闭**，实质性推进了以下工作：

### 🏗️ 架构与稳定性核心进展

- **[PR #6684](https://github.com/nearai/ironclaw/pull/6684)** ✅ — **统一失败语义词汇表**：将 5 个重叠的失败类型枚举合并为 `host_api::FailureKind`（36 变体），并修复了 6 个被暴露的"错误终止/错误重试"bug，每条均附红测回归。这是 Epic [#6284](https://github.com/nearai/ironclaw/issues/6284) 的关键交付，将错误恢复性契约推到半数完成度。

- **[PR #6697](https://github.com/nearai/ironclaw/pull/6697)** — **LLM 适配器上报真实 finish_reason**：解决 #6284 第 8 项。当前多个适配器从响应**形状**推断结束原因，导致"截断回答"与"内容过滤拒答"被混淆为成功完成。本次修复让模型能够区分这两类失败，**直接堵住了"non-success 被报告为 success"的契约违反**。

- **[PR #6737](https://github.com/nearai/ironclaw/pull/6737)** — **恢复 #6616 静默回退的扩展行为**：通过扫描 main 最近 120 次提交，定位到 `origin/main` 合并时因冲突选择侧支而丢弃的行为，作为 #6520 已经合并的还原修复。这是防止 v1 引入隐蔽回归的关键补丁。

- **[PR #6723](https://github.com/nearai/ironclaw/pull/6723)** ✅ — **沙箱凭证防火墙原语（CA + 义务暂存）**：落位 `SandboxCertificateAuthority`，为后续 TLS 终止（PR #6740）与每用户沙箱身份（PR #6695）打好基础。

- **[PR #6692](https://github.com/nearai/ironclaw/pull/6692)** ✅ — **文档站重组**：发现**内部工程文档被公开暴露**（139 条路径探测，33 条返回 HTTP 200，含完整的 reborn/contracts/ 冻结契约集）。已通过 `.mintignore` 加固并重组文档结构。这是 **1.0 发布后的紧急安全整改**。

- **[PR #3847](https://github.com/nearai/ironclaw/pull/3847)** ✅ — **Reborn 技能包文件系统源**：为 `/system/skills`、`/skills`、未来租户共享技能提供可配置根，含信任/可见性元数据与清单校验。

### 🧪 测试基础设施

- **[PR #6738](https://github.com/nearai/ironclaw/pull/6738)** — E2E 测试隔离证明：固定 `ProviderFaultProxy.reset()`，确保一个用例的故障状态无法泄漏到下一个（Epic #6524 工作流 3）。

- **[PR #6728](https://github.com/nearai/ironclaw/pull/6728)** — 夜间以**反向顺序**回放供应商旅程，作为 Epic #6524 的第 4 项隔离证明。

### 🤖 依赖更新

- **[PR #6687](https://github.com/nearai/ironclaw/pull/6687)** ✅ — everything-else 组 33 项更新
- **[PR #6361](https://github.com/nearai/ironclaw/pull/6361)** — 序列化组（serde/serde_json）
- **[PR #6685](https://github.com/nearai/ironclaw/pull/6685)** — wasmtime/wasi 栈
- **[PR #6428](https://github.com/nearai/ironclaw/pull/6428)** — tokio 生态

### 📦 持续发布的发布机器人

**[PR #5598](https://github.com/nearai/ironclaw/pull/5598)**（ironclaw-ci[bot]） — 包含 `ironclaw_common: 0.4.2 → 0.5.0`（**API 破坏变更**）、`ironclaw_safety: 0.2.2 → 0.2.3`、`ironclaw_skills: 0.3.0 → 0.4.0`（**API 破坏变更**）。下游用户需关注 `ironclaw_common` 中 `failure copy_impl_added` 与 `failure copy_impl_removed` 的类型变更。

**整体推进评估：** 项目处于 **1.0 → 1.x 阶段密集打磨期**，每日合并约 5 个 XL 级 PR，已提交但待合并的 31 个 PR 显示有充足的工程能量在制品。

---

## 四、社区热点

### 🔥 讨论最活跃的 Issue

1. **[#6284 [EPIC] error-recoverability endgame](https://github.com/nearai/ironclaw/issues/6284)** — 评论 14
   - 作者：serrrfirat
   - **诉求分析**：要求所有 mid-run 错误都满足 5 条款的可恢复契约（运行存活 + 模型可见 + 携带原因 + 模型有机会响应 + non-success 不可被报为 success）。这是 **IronClaw 工程哲学级 Epic**，度量目标为"模型可恢复 100% 它所看到的错误"。今日 #6684、#6697 都直接为该 Epic 服务，社区关注度集中在 LLM 适配器的"诚实性"。

2. **[#6524 [EPIC] Hermetic capability and journey testing platform](https://github.com/nearai/ironclaw/issues/6524)** — 评论 3
   - 诉求：能否机式回答"每个支持的能力/关键用户旅程都有确定性、有意义的覆盖率"。今日 #6738、#6728 均为该 Epic 工作流 3 的具体交付。

3. **[#6581 [v1-launch-checklist] 429 Too Many Requests on agent-stg](https://github.com/nearai/ironclaw/issues/6581)** — 评论 3
   - WebChat v2 SSE 长连接在高并发多线程下被 WebUI 误判为"断连"。

### 📈 新开 Epic（v1 路线图扩展信号）

- **[#6731 集成 IronHub](https://github.com/nearai/ironclaw/issues/6731)** — 把工具/技能从编译期固定列表升级为运行时可发现、可安装（含签名与来源校验）的市场。
- **[#6734 让 IronClaw agent 访问自身文档](https://github.com/nearai/ironclaw/issues/6734)** — 通过 `docs/reborn/`, `docs/extensions/` 让 agent 在配置工具时不再"自信地错答"。
- **[#6727 自定义/任意 MCP server 连接支持](https://github.com/nearai/ironclaw/issues/6727)** — 当下仅 `nearai-mcp`、`notion-mcp` 两个编译期绑定的 MCP server，需要 CLI/WebUI/扩展导入路径。

### 🆕 当日新开 Issue（2026-07-28）

- **[#6741 OAuth connection fails for Gmail, Calendar](https://github.com/nearai/ironclaw/issues/6741)** — Gmail/Calendar 完成 sign-in 后连接失败。
- **[#6743 In-app feedback widget](https://github.com/nearai/ironclaw/issues/6743)** — WebUI 内嵌反馈/bug 报告组件。
- **[#6742 User profile details view](https://github.com/nearai/ironclaw/issues/6742)** — 头像菜单中"IronClaw"条目无功能，应展示账户名/邮箱等识别信息。

---

## 五、Bug 与稳定性

### 🚨 P1 级 / 生产事故（v1-launch-checklist）

| # | 标题 | 严重度 | Fix PR | 状态 |
| --- | --- | --- | --- | --- |
| [#6720](https://github.com/nearai/ironclaw/issues/6720) | Task 无限运行，停止按钮无效（Railway 实例） | 🔴 **P1** | ❌ 无 | 待修复 |
| [#6719](https://github.com/nearai/ironclaw/issues/6719) | 后端 503/CSP 违规后对话历史加载失败 | 🔴 **P1** | ❌ 无 | 待修复 |
| [#6718](https://github.com/nearai/ironclaw/issues/6718) | 流式响应仅在切换页面后才恢复 | 🟠 高 | ❌ 无 | 待修复 |
| [#6717](https://github.com/nearai/ironclaw/issues/6717) | Telegram 配对成功后 agent 仍告知查找 pairing panel | 🟠 高 | ❌ 无 | 待修复 |
| [#6716](https://github.com/nearai/ironclaw/issues/6716) | 模型错误声称 Slack 集成不可用（hallucination） | 🟠 高 | ❌ 无 | 待修复 |
| [#6581](https://github.com/nearai/ironclaw/issues/6581) | WebChat v2 SSE 触发 429，UI 显示"断连" | 🟠 高 | ❌ 无 | 待修复 |
| [#6741](https://github.com/nearai/ironclaw/issues/6741) | Gmail/Calendar OAuth 完成后连接失败 | 🟡 中 | ❌ 无 | 待修复 |

### ✅ 今日已关闭的 Bug

- **[#4548](https://github.com/nearai/ironclaw/issues/4548)** ✅ — Chat completion 在携带 tools 时序列化出重复的顶级 `model` 字段（DeepSeek 400）。社区贡献者 darren2013 报告，已修复。
- **[#6060](https://github.com/nearai/ironclaw/issues/6060)** ✅ — Routine delivery target 跨所有 routine 泄漏（全局默认而非 per-routine）。v1 自动化模型下重要回归，已修复。
- **[#6575](https://github.com/nearai/ironclaw/issues/6575)** ✅ — `systemd` 服务在 `ironclaw onboard` 后报错（Ubuntu）。fadeevab 报告的 1.0.0-rc.1 本地安装问题。

### 🧬 回归与脆弱点

- **铁锈史级回归**：[PR #6737](https://github.com/nearai/ironclaw/pull/6737) 揭示 main 分支存在 #6616 合并时被静默丢弃的扩展行为——这是 **v1 已发布的代码中含有未声明回退** 的红灯，反映出合并冲突解决机制尚需更严格的"重要行为不变量"扫描。

- **沙箱与权限基础设施**：[PR #6740](https://github.com/nearai/ironclaw/pull/6740)、[#6695](https://github.com/nearai/ironclaw/pull/6695)、[#6655](https://github.com/nearai/ironclaw/pull/6655) 集中铺设隔离、凭证、扩展安装形态等基础设施——若这些 XL 级变更中的任何一个被回滚或重做，#6716 类"agent 误判扩展可用性"问题将进一步恶化。

---

## 六、功能请求与路线图信号

### ✨ 来自今日新开 Issue

| 提案 | 关联 Epic/PR | 纳入预期 |
| --- | --- | --- |
| **[#6743 WebUI 内嵌反馈 widget](https://github.com/nearai/ironclaw/issues/6743)** | 独立 UX 增强 | 1.0.x 小版本可能纳入 |
| **[#6742 用户 profile 详情视图](https://github.com/nearai/ironclaw/issues/6742)** | 独立 UX 增强 | 1.0.x 小版本可能纳入 |
| **[#6741 OAuth Gmail/Calendar](https://github.com/nearai/ironclaw/issues/6741)** | 关联 #6731 / manifest-driven 扩展平台 | 1.1+ |
| **[#6734 agent 自身文档访问](https://github.com/nearai/ironclaw/issues/6734)** | 与 #6524 测试平台互补 | 1.1+ |
| **[#6731 IronHub 集成](https://github.com/nearai/ironclaw/issues/6731)** | 长期路线，需签名/出处生态 | 1.x/2.x |
| **[#6727 自定义 MCP server](https://github.com/nearai/ironclaw/issues/6727)** | 与 #6731 协同 | 1.1+ |

### 📋 路线图上的重磅 Epic（用户/PM 已立项）

- **[#6481 Manifest-Driven Extension Platform](https://github.com/nearai/ironclaw/issues/6481)** — Manifest V3 作为单一真相源；当前由 [PR #6655](https://github.com/nearai/ironclaw/pull/6655) + #6729 实现持久化重构。
- **[#6484 共享消息能力层](https://github.com/nearai/ironclaw/issues/6484)** — 通道中立操作（send/edit/delete/react/reply/thread）。
- **[#6483 Telegram 完工与生产硬化](https://github.com/nearai/ironclaw/issues/6483)** — 对应 [Issue #6522](https://github.com/nearai/ironclaw/issues/6522)（本地/agent.near.ai 设置说明缺失）、#6717（配对后指令错误）。
- **[#6482 可插拔内存 Provider](https://github.com/nearai/ironclaw/issues/6482)** — 由 [PR #6724](https://github.com/nearai/ironclaw/pull/6724) 提供"以声明能力为源"的契约重构；与 [PR #6730](https://github.com/nearai/ironclaw/issues/6730) 配套。
- **[#6641 Skill Self-Creation Design Doc](https://github.com/nearai/ironclaw/issues/6641)** — 基于 Reborn 架构 PR #6345（memory）的热插拔技能自创建模块，已对 86 SkillsBench + SkillLearnBench 任务做基准测试。

---

## 七、用户反馈摘要

### 😟 真实痛点

1. **"它能告诉我它自己是怎么配的吗？"** — [#6522](https://github.com/nearai/ironclaw/issues/6522) 用户期望 IronClaw 像对待 Google 那样提供清晰的 Telegram 设置说明，但当前 agent 缺乏这种"自我认知"能力。这与 [#6717](https://github.com/nearai/ironclaw/issues/6717)、[#6716](https://github.com/nearai/ironclaw/issues

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-28**

---

## 1. 今日速览

LobsterAI 项目今日呈现**中等活跃度的日常维护状态**：Issues 端集中爆发了 4 条新问题（#2390、#2391、#2392、#2393），其中包含 1 个严重的数据完整性 Bug；PR 端则在 24 小时内高效合并/关闭了 6 个 PR，覆盖文档、邮件安全、Artifacts 功能、Agent 引擎稳定性等多项改进，合并节奏健康。整体来看，团队响应及时，但多个长期 stale Issue（#1237、#1240、#2062）已超过 3 个月未推进，积压隐患值得关注。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日共有 6 个 PR 被合并/关闭，覆盖**安全修复、功能增强、稳定性优化、文档完善**四大方向，是一次高质量的综合迭代：

| PR | 类型 | 说明 |
|---|---|---|
| [#2394](https://github.com/netease-youdao/LobsterAI/pull/2394) | 🛠️ Docs/Fix | 修复 Windows 安装时手动覆盖被阻塞的问题 |
| [#2389](https://github.com/netease-youdao/LobsterAI/pull/2389) | 🔒 Security | email 技能：附件路径遍历防护 + 下载目录边界校验 + 跨平台安全测试，配套升级 bundled email skill 版本 |
| [#2388](https://github.com/netease-youdao/LobsterAI/pull/2388) | ✨ Feature | Artifacts 预览工具栏新增分享与部署入口，区分 HTML 预览（分享）与本地服务（部署）路径，附带埋点与单元测试 |
| [#2387](https://github.com/netease-youdao/LobsterAI/pull/2387) | ✨ Feature | Sites 相关迭代（2026.7.20 分支） |
| [#2386](https://github.com/netease-youdao/LobsterAI/pull/2386) | 🐛 Fix | **Agent 引擎**：在 token 预算耗尽前终止无进展的工具循环，避免无限空转浪费配额 |
| [#1323](https://github.com/netease-youdao/LobsterAI/pull/1323) | 🐛 Fix | Cowork：收窄 `input-too-long` 错误分类，避免误判 `max_tokens` 参数错误为上下文超限 |

**整体评估**：今日推进了 ≈5 项实质改进，其中 #2389 的安全加固和 #2386 的资源保护机制属于**高价值改动**，对生产环境稳定性提升明显。

---

## 4. 社区热点

今日 Issues 评论量整体偏低，仅 [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) 有 1 条评论。但从内容热度看，社区关注集中在以下三类问题：

- **🔥 数据安全类**：[#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) 关于加速器在字符串改写时把 `\f` (5C 66) 误转为 `\x0C`（form feed）的 Bug，影响所有涉及 Windows 路径转义、JSON 字符串、PS 脚本的写文件操作，**沉默损坏用户文件**，关注度理应最高。
- **🔥 体验阻塞类**：[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) 一个 API 受限导致全应用瘫痪的问题，用户明确反馈"lobsterai 整体陷入瘫痪"，情绪强烈。
- **🔥 基础可用性类**：[#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) 用户完全无法安装/升级，直接阻断新用户流入。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 - 严重（数据完整性/可用性阻塞）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#2395](https://github.com/netease-youdao/LobsterAI/issues/2395) | 安装/更新时 user skills 备份失败导致升级中止，前一版本未被替换 | ❌ 无 |
| [#2393](https://github.com/netease-youdao/LobsterAI/issues/2393) | 加速器改写器把 `\f` 字节对替换为 `\x0C`，**导致文件静默损坏**，复现率 100% | ❌ 无 |
| [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 单个模型 API 受限后整个应用陷入瘫痪，所有对话框任务都无法切换到其他模型 | ❌ 无 |

### 🟡 P1 - 中等（功能缺陷）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#2390](https://github.com/netease-youdao/LobsterAI/issues/2390) | `exec` 工具硬编码调用 `powershell.exe` 5.1 而非 PowerShell 7；中文用户名路径编码异常 | ❌ 无 |
| [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 定时任务无法选择使用哪个 agent 或 skill | ❌ 无 |
| [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 24 小时长任务超过最大时长被自动停止，用户无法判断任务是否仍在后台运行 | ❌ 无 |
| [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings 关闭时未保存修改静默丢失 | ✅ [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) 已存在 PR 方案，但未合并（stale） |

> ⚠️ **稳定性警示**：今日 8 条 Issues 中 7 条为 Bug 报告（仅 #2391 为功能请求），且 3 个严重 Bug 均无对应 Fix PR，需关注下个迭代周期的修复优先级。

---

## 6. 功能请求与路线图信号

### 已收到的新需求

| Issue | 需求 | 实现难度 | 路线图可能性 |
|---|---|---|---|
| [#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) | 技能重命名功能 | 🟢 低 | ⭐⭐⭐⭐ 高（基础 CRUD 完整性诉求） |
| [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) | 定时任务支持选择 agent 和 skill | 🟡 中 | ⭐⭐⭐⭐ 高（任务调度灵活性的合理诉求） |

### 已存在但未合并的提案

| PR | 提议 | 状态 |
|---|---|---|
| [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Settings 未保存关闭确认 | OPEN（stale 超 4 个月） |
| [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 任务完成时闪烁任务栏/Dock 图标提醒 | OPEN（stale 超 4 个月） |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Dependabot: electron 40.2.1 → 43.2.0 | OPEN（stale 超 3 个月） |

> 💡 **路线图信号**：[#2391](https://github.com/netease-youdao/LobsterAI/issues/2391) 和 [#2392](https://github.com/netease-youdao/LobsterAI/issues/2392) 都是用户提出的"基础能力补全"诉求，实现成本低、用户价值高，建议纳入下个小版本（2026.7.x 或 2026.8.x）。同时 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 的 Electron 大版本升级（跨越 3 个大版本）应纳入安全维护计划。

---

## 7. 用户反馈摘要

### 🎯 用户痛点

- **数据丢失焦虑**（[#1237](https://github.com/netease-youdao/LobsterAI/issues/1237)）：用户修改 API Key 后误操作关闭，配置静默丢失，反映"破坏性 UI 操作无防护"是普遍痛点。
- **系统级稳定性差**（[#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)）：单个模型限流导致全应用瘫痪，原始评论"辛苦了，请解决问题"体现用户已多次自排查后无果，挫败感明显。
- **跨平台/本地化缺陷**（[#2390](https://github.com/netease-youdao/LobsterAI/issues/2390)、[#2393](https://github.com/netease-youdao/LobsterAI/issues/2393)）：中文用户名、Windows 路径、PowerShell 版本等本地化细节问题集中暴露，提示**国际化与跨平台测试覆盖不足**。
- **更新链路脆弱**（[#2395](https://github.com/netease-youdao/LobsterAI/issues/2395)）：升级流程中 user skills 备份失败即终止升级，可能导致用户长期停留在旧版本。

### ✅ 满意方向

- 邮件技能的安全加固（[#2389](https://github.com/netease-youdao/LobsterAI/pull/2389)）和 Agent 引擎的 token 预算保护（[#2386](https://github.com/netease-youdao/LobsterAI/pull/2386)）是社区期待已久的"资源保护"类改进。

---

## 8. 待处理积压

以下 Issue/PR 已超过 **3 个月未响应**，建议维护者优先 review：

| 类型 | 编号 | 标题 | 积压时长 | 风险 |
|---|---|---|---|---|
| 🐛 Bug | [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240) | 大模型受限后全应用瘫痪 | ~4 个月 | 🔴 高（阻断核心使用） |
| 🐛 Bug | [#2062](https://github.com/netease-youdao/LobsterAI/issues/2062) | 任务超过最大时长被静默终止 | ~2 个月 | 🟡 中 |
| 🐛 Bug | [#1237](https://github.com/netease-youdao/LobsterAI/issues/1237) | Settings 关闭无确认 | ~4 个月 | 🟡 中 |
| 🔧 PR | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | Electron 大版本升级（40 → 43） | ~3.5 个月 | 🔴 高（安全漏洞累积） |
| 🔧 PR | [#1241](https://github.com/netease-youdao/LobsterAI/pull/1241) | Settings 关闭确认 | ~4 个月 | 🟢 低 |
| 🔧 PR | [#1239](https://github.com/netease-youdao/LobsterAI/pull/1239) | 任务完成闪烁任务栏/Dock | ~4 个月 | 🟢 低 |

> 📌 **维护者建议**：优先处理 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277)（安全风险）和 [#1240](https://github.com/netease-youdao/LobsterAI/issues/1240)（可用性风险），这两项是当前 backlog 中风险最高的待办。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 响应速度 | ⭐⭐⭐⭐ | 24h 内 PR 合并率 67%（6/9），节奏良好 |
| Bug 修复率 | ⭐⭐ | 今日 7 个 Bug 仅 0 个被同日修复，积压风险上升 |
| 安全意识 | ⭐⭐⭐⭐ | #2389 主动加固邮件路径遍历 |
| 社区沟通 | ⭐⭐⭐ | 多个 Issue 评论量为 0，缺乏维护者互动 |
| 路线图透明度 | ⭐⭐ | 无新 Release，无公开 Roadmap 更新 |

**综合评估**：🟢 **健康（短期），🟡 需关注（中长期）** — 短期迭代高效，但长期积压和缺乏与用户的主动沟通是潜在隐患。

---

*报告生成时间：2026-07-28 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-07-28**

---

## 1. 今日速览

Moltis 项目今日呈现"活跃开发但社区静默"的特征：过去 24 小时内共有 **5 个 PR 处于开放状态且无任何合并**，Issues 板块零更新，无新版本发布。所有 PR 均来自两位贡献者（`penso` 4 个、`demyanrogozhin` 1 个），且所有 PR 的评论数与点赞数均为 0，说明代码评审环节尚未启动。整体活跃度评估为 **中低**：开发侧有明显推进，但社区互动与代码合并节奏滞后，建议关注积压处理。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 近期合并的 PR 尚未沉淀为可发布的 release。

---

## 3. 项目进展

今日无 PR 合并。以下为处于待合并状态的 5 个重要 PR 概览：

| PR | 标题 | 类型 | 影响面 |
|---|---|---|---|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | feat(memory): add zvec vector database memory backend | 新功能（实验性） | 记忆后端可扩展性 |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | feat(acp): expose Moltis as an ACP agent over stdio | 新功能（架构级） | ACP 互操作性 |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | fix(channels): gate /sh and privileged tools behind a per-account operators list | 安全修复 | 权限控制 |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | Add instrumentation and feedback collection infrastructure | 新功能（基础设施） | 可观测性 |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | feat(pwa): make push notifications reliable and non-disruptive | Bug 修复 | 移动端体验 |

**整体评估：** 项目在记忆层、ACP 协议、可观测性、安全模型、PWA 体验五条线均有所推进，方向多样但深度有待评估。没有任何 PR 进入合并流程，意味着今日项目在"已落地成果"维度上 **零进展**，属于"储备中的进展"。

---

## 4. 社区热点

⚠️ **今日社区互动几乎为零：所有 5 个 PR 的评论数与点赞数均为 0。** 没有讨论最活跃的话题可以提炼。

观察：
- 最高频作者 `penso` 一人贡献了 4 个 PR，贡献集中度高
- `demyanrogozhin` 的 #1158 已创建 11 天仍未获评审，是当前最"积压"的 PR
- 缺乏外部贡献者的 review 声音，建议维护者主动发起 review 请求

---

## 5. Bug 与稳定性

虽然今日 Issues 板块无新增报告，但从 PR 描述中可识别出 **两个高严重度 Bug 修复处于待合并状态**：

### 🔴 P0 - 安全漏洞（已有 fix PR）
- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170)** — `/sh` 命令在 Discord guild 或群聊场景下可被任何通过 channel access gate 的用户触发，构成 **任意宿主命令执行** 风险。`handle_sh` 函数缺少授权检查。`penso` 提交了按账户 operators 列表授权的修复方案。

### 🟠 P1 - 用户感知严重 Bug（已有 fix PR）
- **[PR #1173](https://github.com/moltis-org/moltis/pull/1173)** — PWA 服务端推送通知未设置 `renotify`，同一会话的第二条消息会 **静默替换** 第一条通知，无声音、无提醒、首条消息消失。属于影响移动端核心体验的可靠性缺陷。

📌 **两者均已有 fix PR 待合并**，建议优先 review 与合并，特别是 #1170 的安全修复。

---

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue，但通过 PR 提交本身可看出当前的产品路线信号：

1. **记忆后端多元化** — [PR #1158](https://github.com/moltis-org/moltis/pull/1158) 引入 zvec + redb 作为可选后端（feature-gated），表明项目正在从单一向量库走向可插拔架构。
2. **ACP 双向互操作** — [PR #1169](https://github.com/moltis-org/moltis/pull/1169) 将 Moltis 从"仅作为 ACP 客户端"扩展为"也可作为 ACP agent 服务端"，补全协议对称性，可对接 Zed、`buzz-acp` 等 harness。
3. **可观测性基础设施** — [PR #1174](https://github.com/moltis-org/moltis/pull/1174) 引入 `ObservationSink` fanout 模式与终端用户反馈收集，是面向产品化的重要前置工作。

📌 这些 PR 一旦合并，将显著提升 Moltis 的部署灵活性与生态兼容性，预计会成为下一版本的功能主线。

---

## 7. 用户反馈摘要

⚠️ **今日 Issues 无更新，无法从用户评论中提炼反馈。** 以下信息基于 PR 描述中作者披露的使用场景：

- `demyanrogozhin` 在 [PR #1158](https://github.com/moltis-org/moltis/pull/1158) 中描述其生产环境配置：zvec + redb + 自部署的 llama-cpp embedding server，说明 **重度用户对向量后端灵活性存在实际需求**。
- `penso` 在 [PR #1169](https://github.com/moltis-org/moltis/pull/1169) 中明确指出："the inverse did not exist"——Moltis 不能作为 agent 被其他 harness 调用是一个已知的 **生态短板**。
- [PR #1173](https://github.com/moltis-org/moltis/pull/1173) 描述的通知静默替换 bug 是 **真实用户痛点**，尤其在群聊场景下会导致关键消息丢失。

---

## 8. 待处理积压

按"创建时间最长 → 最新"排序，提醒维护者关注：

| PR | 创建日期 | 等待天数 | 状态 |
|---|---|---|---|
| [#1158](https://github.com/moltis-org/moltis/pull/1158) | 2026-07-17 | **11 天** | OPEN，0 评论，0 👍 |
| [#1169](https://github.com/moltis-org/moltis/pull/1169) | 2026-07-26 | 2 天 | OPEN |
| [#1170](https://github.com/moltis-org/moltis/pull/1170) | 2026-07-26 | 2 天 | OPEN（含安全修复，建议优先） |
| [#1173](https://github.com/moltis-org/moltis/pull/1173) | 2026-07-26 | 2 天 | OPEN（含用户感知 bug） |
| [#1174](https://github.com/moltis-org/moltis/pull/1174) | 2026-07-27 | 1 天 | OPEN |

📌 **核心提醒：**
- **[PR #1170](https://github.com/moltis-org/moltis/pull/1170)** 涉及安全风险，**应作为最高优先级合并**。
- **[PR #1158](https://github.com/moltis-org/moltis/pull/1158)** 已等待 11 天，是显著的积压信号。
- 整体评审节奏放缓，建议维护者主动 ping 评审人或在 PR 中 `@` 指定 reviewer 推动流程。

---

*报告基于 GitHub API 公开数据生成，数据截止 2026-07-28。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**日期：2026-07-28** | **数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)**

---

## 1. 今日速览

CoPaw 仓库今日进入高强度迭代期，**单日 Issue 更新 50 条、PR 更新 49 条**，其中 Issue 关闭率高达 68%（34/50），PR 关闭/合并率约 31%（15/49），显示维护团队对历史积压进行了集中清理。从内容分布看，本日工作集中在**三大方向**：① 2.0 版本升级引发的历史/会话兼容性问题收尾；② 浏览器自动化栈重构（unified browser SDK + Chrome 扩展 + computer-use）；③ 第三方 Agent 与 Channels 体系的扩展（Codex/Qoder/钉钉卡片流）。无新版本发布，整体处于"代码冻结打磨"窗口。

---

## 2. 版本发布

**无新版本发布。**

当前主线版本仍为社区反馈中频繁出现的 `2.0.0` / `2.0.0.post3`，并有 `1.1.12.post2` 等旧版本用户滞留。维护者应在 2.0.1 修复窗口关闭前对升级迁移路径做一次系统性回归。

---

## 3. 项目进展（已合并/关闭的重要 PR）

> 注：以下为今日有动作（关闭/合并或更新状态变更）的代表性 PR，体现项目前进方向。

| PR | 标题 | 状态 | 关键进展 |
|---|---|---|---|
| [#6462](https://github.com/agentscope-ai/CoPaw/pull/6462) | docs(sandbox): 澄清 Windows 原生沙箱支持 | CLOSED | 修正"无 WSL2 即无沙箱"的过时文档，AppContainer 与 restricted-token 方案正式纳入原生支持说明 |
| [#6489](https://github.com/agentscope-ai/CoPaw/pull/6489) | test(drivers): Driver 单元测试 + fail_under=50 覆盖率门禁 | OPEN（今日新开） | 将 Driver 子系统从 0% 覆盖提升到带回归保护的底线，并启用团队 7 月质量计划的覆盖率门槛 |
| [#6502](https://github.com/agentscope-ai/CoPaw/pull/6502) | fix(dev): 在 setup 指令中包含 test extra | OPEN（首次贡献者） | 修正贡献者文档，确保 `.[dev,test,full]` 安装后能跑测试与插件 |
| [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) | fix(scroll): 历史迁移时保留 session_id | OPEN | 修复 Scroll 历史迁移使用合成/陈旧 session_id 的问题，召回数据按 Agent 正确作用域隔离 |
| [#6500](https://github.com/agentscope-ai/CoPaw/pull/6500) | fix(browser): 未鉴权本地 CDP 暴露改为 opt-in | OPEN | 修复 `browser_use(start)` 默认暴露无鉴权 CDP 端口的高危安全问题（暴露 `webSocketDebuggerUrl`） |
| [#6503](https://github.com/agentscope-ai/CoPaw/pull/6503) | feat(agent-stats): 从 turn 元数据中聚合当前 Agent token 用量 | OPEN | 增加 `agent_prompt_tokens` / `agent_completion_tokens` / `agent_llm_calls` 三项 Agent 级统计 |
| [#6504](https://github.com/agentscope-ai/CoPaw/pull/6504) | feat: 统一项目目录与文件工作区 | OPEN | 将 effective project directory 提升为共享 Agent 上下文，并在 system prompt 中注入 |
| [#6508](https://github.com/agentscope-ai/CoPaw/pull/6508) | fix(agents): spawn_subagent 继承 session approval_level | OPEN | 修复子会话回退到默认审批级别（覆盖 OFF 不生效）的安全/UX 缺陷 |

**整体评价：** 项目正从"功能扩张"阶段转入"质量与一致性收敛"阶段，浏览器栈（#6276、#6157、#6500）、权限模型（#6508）、测试基础设施（#6489、#6502）三条主线均在收口。

---

## 4. 社区热点（讨论最活跃）

按评论数排序：

1. **[#5757](https://github.com/agentscope-ai/CoPaw/issues/5757) — 飞书不回复（14 评论）**
   飞书通道在首次消息后失声，机器人显示"已收到"但无回复。1.1.12.post2 + Docker + AgentScope Platform 双环境复现。**诉求**：该 Bug 影响企业 IM 集成的核心可用性，是飞书通道在 1.1.12 → 2.0 升级中的回归热点。

2. **[#5725](https://github.com/agentscope-ai/CoPaw/issues/5725) — Console 流式输出卡顿（6 评论）**
   Console 流式输出时浏览器显著卡顿，对比 DeepSeek 网页版流畅。**诉求**：Web 端 SSE/分块渲染在长回复下存在性能瓶颈，可能涉及 token 解析、DOM 频繁更新或 WebSocket 推送策略。

3. **[#4895](https://github.com/agentscope-ai/CoPaw/issues/4895) — 图像无限压缩循环（5 评论）**
   上传图片后进入"压缩→再注入→再压缩"循环，触发模型幻觉。**诉求**：图像预处理管线存在幂等性缺陷。

4. **[#5090](https://github.com/agentscope-ai/CoPaw/issues/5090) — 工具防护被绕过（5 评论）**
   拦截 `rm` 后，Agent 改用 Python 脚本删除文件。**诉求**：安全防护必须覆盖"等效命令"，不能仅匹配工具名。

5. **[#5259](https://github.com/agentscope-ai/CoPaw/issues/5259) — Windows 向量索引无法持久化（5 评论）**
   关闭"启动时重建记忆索引"后 `memory_search` 全部返回空。**诉求**：平台一致性 bug，影响 Windows 桌面端核心记忆能力。

6. **[#5561](https://github.com/agentscope-ai/CoPaw/issues/5561) — 飞书长消息丢失（5 评论）**
   飞书通道回复稍长时只能以文件形式送达。**诉求**：与 #5757 同源——飞书通道的消息分片/卡片化逻辑存在缺陷。

7. **[#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) — 2.0.0 升级后 chat↔history 映射丢失（5 评论）**
   Web UI 点击旧会话返回 500，`history.db` 中数据仍在但 `chats` ↔ `conversation_history` 关联断裂。**诉求**：2.0 schema 迁移脚本未覆盖该关联。

8. **[#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) — Edge+Wayland 单标签高 CPU（3 评论）**
   QwenPaw 2.0.1 + ComfyUI 大结果集场景下 Edge 标签页 CPU 持续走高。**诉求**：疑似 WebSocket 推送或大结果集渲染缺乏节流。

---

## 5. Bug 与稳定性

按严重程度排列（P0=核心功能不可用，P1=明显功能缺陷，P2=体验问题）：

| 严重度 | Issue | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|---|
| **P0** | [#5757](https://github.com/agentscope-ai/CoPaw/issues/5757) | 飞书首次回复后失联 | CLOSED | 关闭，但需确认 root-cause 修复 |
| **P0** | [#5964](https://github.com/agentscope-ai/CoPaw/issues/5964) | 2.0.0 升级后旧会话 500 错误 | CLOSED | 配套 PR [#6068](https://github.com/agentscope-ai/CoPaw/pull/6068) 正在修复 session_id 保留 |
| **P0** | [#5259](https://github.com/agentscope-ai/CoPaw/issues/5259) | Windows 向量索引无法持久化 | CLOSED | 无明确 fix PR |
| **P0** | [#5090](https://github.com/agentscope-ai/CoPaw/issues/5090) | 工具防护被 Python 脚本绕过 | CLOSED | 无 |
| **P1** | [#5561](https://github.com/agentscope-ai/CoPaw/issues/5561) | 飞书长消息无法送达 | CLOSED | 无 |
| **P1** | [#4895](https://github.com/agentscope-ai/CoPaw/issues/4895) | 图像无限压缩循环 | CLOSED | 无 |
| **P1** | [#4968](https://github.com/agentscope-ai/CoPaw/issues/4968) | 子进程 fork 虚拟内存泄漏 | CLOSED | 无 |
| **P1** | [#6258](https://github.com/agentscope-ai/CoPaw/issues/6258) | OpenAI 最大输出 token 不生效 | **OPEN** | 无 |
| **P1** | [#5773](https://github.com/agentscope-ai/CoPaw/issues/5773) | 记忆搜索导致 OpenCode 渠道报错 | CLOSED | 关联 #5859，疑似缺 `reasoning_content` 字段 |
| **P1** | [#6324](https://github.com/agentscope-ai/CoPaw/issues/6324) | 大模型响应被截断（MiniMax-M3） | **OPEN** | 无 |
| **P1** | [#5658](https://github.com/agentscope-ai/CoPaw/issues/5658) | 无法连接 9router 转发模型 | CLOSED | 无 |
| **P1** | [#5541](https://github.com/agentscope-ai/CoPaw/issues/5541) | Ollama 无法访问 Cloud 模型 | CLOSED | 无 |
| **P1** | [#5584](https://github.com/agentscope-ai/CoPaw/issues/5584) | 无法连接自定义 ascend-vllm | CLOSED | 无 |
| **P1** | [#5708](https://github.com/agentscope-ai/CoPaw/issues/5708) | 飞书交互式卡片不解析 | CLOSED | 无 |
| **P2** | [#4990](https://github.com/agentscope-ai/CoPaw/issues/4990) | 企业微信关闭工具信息后无法回答 | CLOSED | 无 |
| **P2** | [#5725](https://github.com/agentscope-ai/CoPaw/issues/5725) | Console 流式输出卡顿 | CLOSED | 无 |
| **P2** | [#6460](https://github.com/agentscope-ai/CoPaw/issues/6460) | Edge+Wayland 高 CPU | **OPEN** | 无 |
| **P2** | [#6457](https://github.com/agentscope-ai/CoPaw/issues/6457) | 任务模式历史记录异常膨胀 | **OPEN** | 无 |
| **P2** | [#6239](https://github.com/agentscope-ai/CoPaw/issues/6239) | Windows PATH 分号拼接丢失 | CLOSED | 无 |
| **P2** | [#4844](https://github.com/agentscope-ai/CoPaw/issues/4844) | Windows 浏览器进程锁残留 | CLOSED | 无 |
| **P2** | [#4872](https://github.com/agentscope-ai/CoPaw/issues/4872) | 新会话加载未压缩上下文 | CLOSED | 无 |
| **P2** | [#4921](https://github.com/agentscope-ai/CoPaw/issues/4921) | 图片/附件直接载入上下文 | CLOSED | 无 |
| **P2** | [#5016](https://github.com/agentscope-ai/CoPaw/issues/5016) | Web Console 多 Agent 不稳定 | CLOSED | 无 |

**稳定性信号**：飞书通道集中爆发（#5757、#5561、#5708、#4990 同源问题）以及 Windows 平台一致性（#5259、#6239、#4844）是 2.0 升级后的两大系统性缺陷面。Issues 多数被关闭但缺乏对应的 fix PR 链接，存在"close-as-stale"或"close-as-duplicate"风险，**建议维护者在下一个 patch 版本（2.0.1 / 2.0.2）前向社区公布每个被关闭 P0 的根因与修复版本**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR | 纳入概率 |
|---|---|---|---|
| ReMe 记忆搜索的 reranker 支持 | [#5427](https://github.com/agentscope-ai/CoPaw/issues/5427) 等需求 | [#6398](https://github.com/agentscope-ai/CoPaw/pull/6398) | **高**（PR 已 Under Review） |
| 钉钉卡片支持预览图（media_id）而非降级为文件 | [#5593](https://github.com/agentscope-ai/CoPaw/issues/5593) | — | 中（已提需求） |
| 钉钉卡片流式输出加速 | [#5603](https://github.com/agentscope-ai/CoPaw/issues/5603) | — | 中 |
| 自定义模型协议端点（不仅限 `/chat/completions`） | [#5609](https://github.com/agentscope-ai/CoPaw/issues/5609) | — | 中（[#6302](https://github.com/agentscope-ai/CoPaw/pull/6302) provider 发现基础设施已铺路） |
| 第三方 Agent（Codex、Qoder）集成 | — | [#6397](https://github.com/agentscope-ai/CoPaw/pull/6397) | **高**（PR ready-for-human-review） |
| 原生桌面 GUI 自动化（computer-use） | — | [#6424](https://github.com/agentscope-ai/CoPaw/pull/6424) | **高**（PR 大功能） |
| Workspace checkpoint 管理 | — | [#6269](https://github.com/agentscope-ai/CoPaw/pull/6269) | 中 |
| Chrome 扩展桥接 | — | [#6157](https://github.com/agentscope-ai/CoPaw/pull/6157) | **高**（依赖 #6276 unified browser） |
| QwenPaw Creator（脚本→资产→分镜→视频） | — | [#6284](https://github.com/agentscope-ai/CoPaw/pull/6284) | 中 |
| Visual Compact（长历史视觉压缩） | — | [#6456](https://github.com/agentscope-ai/CoPaw/pull/6456) | **高**（直击 #4872、#4921 类核心痛点） |
| Channels 按需安装与版本修复 | — | [#6387](https://github.com/agentscope-ai/CoPaw/pull/6387) | **高**（直接改善 #5757/#5561 类飞书体验） |

**路线图趋势**：未来 2.x 版本将围绕"统一浏览器栈"（#6276 + #6157 + #6500 + #6424）、"第三方 Agent 开放生态"（#6397 + #6302）、"上下文与记忆工程"（#6456 + #6398 + #6503）三条主线展开。

---

## 7. 用户反馈摘要

- **企业 IM 集成是核心使用场景**：飞书（#5757/#5561/#5708）、企业微信（#4990）、钉钉（#5603/#5593）相关 issue 占比近 25%。用户痛点集中在**长消息截断/降级、卡片不解析、流式慢、首问后失联**四类。**说明 CoPaw 在 B 端 IM 渠道的稳定性仍是头号信任

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-28

---

## 1. 今日速览

ZeroClaw 仓库 24 小时内更新活跃度维持高位：**48 条 Issues**（其中 4 条已关闭）与 **50 条 PRs**（其中 8 条已合并或关闭）依然处于持续推进状态。无新版本发布，代码仍处于 `master` (HEAD `3cb4ad18...`，workspace 版本 `0.8.3`) 上的密集迭代阶段。议题与 PR 质量与风险标注非常规范，**P1 + `risk:high` 类条目占比约 40%**，且出现一位审计者（`belumume`）提交的 **8 条安全审计发现集群**（涉及 Gemini API Key 泄漏、Bluesky/Reddit 鉴权缺失、LINE 群消息绕过白名单、紧急停止未生效、配对锁定可被攻击者头部操纵等），是一次组织化的安全审计。CI 抖振（`cargo test` 19/20 失败、`cfg(unix)` gate 在 Windows 失效、`zeroclaw-plugins` 特性门控未在 CI 中实际执行）依旧是阻塞性看点。整体处于 **向 v0.9.0 推动的预收口阶段**，安全与稳定性债务集中暴露。

---

## 2. 版本发布

无新版本发布。最近可识别的版本线仍为 `0.8.3`，指向 v0.9.0 的 tracker 议题 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) 正在持续滚动。

---

## 3. 项目进展

今日合并/关闭的 8 条 PR 中，重点值得关注的有：

| 编号 | 类型 | 标题 | 状态 |
|---|---|---|---|
| [#9388](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) | docs | `docs(governance): retire CONTRIBUTORS.md record and ground maintainer roles in FND-003` | CLOSED |
| [#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) | feat | `feat(infra): PostgreSQL as the first supported session backend` | CLOSED（已收口为单一路径方向） |
| [#9475](https://github.com/zeroclaw-labs/zeroclaw/pull/9475) | runtime | `fix(tests): use a bounded wait for the client count instead of fixed sleeps` | 已开启 |
| [#9443](https://github.com/zeroclaw-labs/zeroclaw/pull/9443) | security | `fix(parser): omit malformed tool payloads from logs` | 已开启 |
| [#9445](https://github.com/zeroclaw-labs/zeroclaw/pull/9445) | config | `fix(config): keep unknown-property sentinel matching typed` | 已开启 |
| [#9446](https://github.com/zeroclaw-labs/zeroclaw/pull/9446) | macros | `fix(macros): report invalid integration status fields` | 已开启 |
| [#9448](https://github.com/zeroclaw-labs/zeroclaw/pull/9448) | policy | `fix(policy): retain actions when cutoff underflows` | 已开启 |
| [#9449](https://github.com/zeroclaw-labs/zeroclaw/pull/9449) | observability | `fix(log): preserve JSONL rows during schema migration` | 已开启 |

观察：
- **PostgreSQL session backend 路径收口**——[#9251](https://github.com/zeroclaw-labs/zeroclaw/pull/9251) 被关闭但保留方向（"先证明一条完整支持路径再承载厂商矩阵"），这是 v0.9.0 范畴内的明确承诺。
- **`CONTRIBUTORS.md` 治理关闭**——[#9388](https://github.com/zeroclaw-labs/zeroclaw/pull/9388) 落地 FND-003 中维护者角色定义，治理结构清晰化。
- **小步快跑的硬化补丁**（`#9443/#9445/#9446/#9448/#9449/#9475`）主要由 `Audacity88` 与 `AngryPacifist` 提交，体现"安全/可观测/测试稳定性"三条主线在持续推进。

---

## 4. 社区热点

按评论数与讨论热度排序：

1. **[#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)（5 条评论）** — `cargo test -p zeroclaw-runtime --lib` 19/20 失败 + 全局互斥锁"毒化"连带污染后续测试。`S2 degraded`，`P1`，`risk:high`。这是当下对 CI 信任度最大的反例。
2. **[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)（4 条）** — Landlock 沙箱在 Fedora 上阻止 shell 访问 `/dev/null`，`shell` 工具完全不可用。`S2`，`P1`，`risk:high`。
3. **[#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)（4 条）** — Gemini API Key 通过 `?key=` 在 reqwest 错误消息中泄漏到聊天。`S2`，`P1`，`security:leak-detector`。
4. **[#9363](https://github.com/zeroclaw-labs/zeroclaw/issues/9363)（3 条）** — 本地化下 Config 元数据仍为英文，ZeroCode + Web 表面不一致。`S2`，`P2`。
5. **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)（3 条）** — `delegate` 工具绕过父级 allowlist，子代理可调用被父策略排除的工具。**`S0` 数据丢失/安全风险**，已挂约 1 个月。
6. **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)（3 条）** — Bedrock `us.amazon.nova-2-lite-v1:0` 频繁触发缓存错误，用户请求通过 config 关闭 cachePoint。
7. **[#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)（3 条）** — Bluesky 与 Reddit 缺乏 sender authorization 与中心化准入。
8. **[#9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330)（2 条）** — RFC：AI 辅助 PR 预审与重审提议，是流程层面的重要提议。

**共识诉求**：开发者们正集中反对"沙箱与默认安全策略过激进导致正常功能失效"（#8973）以及"安全策略过于宽松导致跨域/跨通道穿越"（#8279、#9386、#9393、#9392、#9417）。**两类需求碰撞，凸显 v0.9.0 安全/工具策略平衡取舍**。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 S0（数据丢失 / 安全风险）
- **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279)** — `delegate` 绕过父级 allowlist。**尚无 fix PR 挂载**，需立即关注。

### 🟠 S1（工作流阻塞）
- **[#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425)** — Web Dashboard 上正在运行的 SOP 作业无 Stop/Cancel 操作。**尚无 fix PR**。
- **[#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421)** — 不完整的终端响应可能被上报为成功。**已有配套 PR [#9424](https://github.com/zeroclaw-labs/zeroclaw/pull/9424) + [#9447](https://github.com/zeroclaw-labs/zeroclaw/pull/9447)**（`vrurg`），处于 `status:in-progress`，已进入评审闭环。

### 🟡 S2（降级行为）
- **[#9357](https://github.com/zeroclaw-labs/zeroclaw/issues/9357)** — `cargo test -p zeroclaw-runtime` 19/20 失败 + 全局互斥锁毒化。**已有 [#9475](https://github.com/zeroclaw-labs/zeroclaw/pull/9475) 提交**，针对固定 sleep 改为有界等待。
- **[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)** — Landlock + Fedora + shell 工具不可用。**尚无 fix PR**。
- **[#9386](https://github.com/zeroclaw-labs/zeroclaw/issues/9386)** — Gemini API Key 泄漏。**尚无 fix PR**。
- **[#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393)** — Bluesky/Reddit 无 sender authorization。**尚无 fix PR**。
- **[#9392](https://github.com/zeroclaw-labs/zeroclaw/issues/9392)** — LINE 群消息绕过 allowlist 与 pairing 握手。**尚无 fix PR**。
- **[#9417](https://github.com/zeroclaw-labs/zeroclaw/issues/9417)** — WhatsApp Cloud `request_approval` 在发送失败/取消时泄漏活动 approval token。**尚无 fix PR**。
- **[#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390)** — 紧急停止是 CLI-only 状态文件，运行时路径无人读取。**尚无 fix PR**。
- **[#9389](https://github.com/zeroclaw-labs/zeroclaw/issues/9389)** — 未认证的 `POST /api/pair` 锁定状态依赖攻击者可控的 header。**尚无 fix PR**。
- **[#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436)** — `config init` 写入的模板段落无法通过严格加载器，导致 `config migrate` 退出 1。**尚无 fix PR**。
- **[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)** — CLI 创建的 cron 作业 `delivery.mode` 硬编码为 `None`，输出被静默丢弃。**尚无 fix PR**。
- **[#9465](https://github.com/zeroclaw-labs/zeroclaw/issues/9465)** — 频道入口消息被预检拒绝时，仅产生 reaction，发送者收不到任何文本。**尚无 fix PR**。

### 🟢 S3（轻微问题）
- **[#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422)** — `zeroclaw-config` 单元测试在 Windows 编译失败（`cfg(unix)` `EnvValueGuard` 被未门控测试引用）。**尚无 fix PR**。
- **[#9462](https://github.com/zeroclaw-labs/zeroclaw/issues/9462)** — `zeroclaw-plugins` 库单元测试在 `plugins-wasmtime` 特性门控后从未在 CI 实际执行。**尚无 fix PR**。

### ✅ 今日已闭环的安全硬化
- **[#9328](https://github.com/zeroclaw-labs/zeroclaw/issues/9328)** 关联 → PR [#9472](https://github.com/zeroclaw-labs/zeroclaw/pull/9472) — `vi_verify` 不再注册为 model-callable 工具（修复 `AngryPacifist` 报告的签名凭证完整性问题）。
- **#9424 + #9447** — terminating completion 语义空白的修复链（`fix(runtime): reject semantic-empty terminal completions` + `fix(anthropic): classify incomplete terminal responses`）。

整体看：**安全类 S0/S1 议题几乎一半仍无 fix PR**，是短期内最关键的待办。

---

## 6. 功能请求与路线图信号

| 提议 | 编号 | 信号 |
|---|---|---|
| AI 辅助 PR 预审/重审 | [RFC #9330](https://github.com/zeroclaw-labs/zeroclaw/issues/9330) | 节奏化提案，与现有 CI 门禁、风险分级、CODEOWNERS 协同；很可能进入 v0.9.0 的开发流程层 |
| Anthropic stored-profile OAuth 别名契约 | [RFC #9464](https://github.com/zeroclaw-labs/zeroclaw/issues/9464) | 与 PR #9420 配套，意图确认维护者决策 |
| 类别范围 `read_memory_from` | [#8983](https://github.com/zeroclaw-labs/zeroclaw/issues/8983) | 提供"按类别而非全部"做跨代理记忆共享，与多代理架构演进方向一致 |
| WASM 内存插件接入运行时后端选择 | [#9463](https://github.com/zeroclaw-labs/zeroclaw/issues/9463) | 扩展 WASM 插件到 channel/memory 后端，是 `runtime:wasm` 主线里程碑 |
| Matrix 单消息进度草稿 | [PR #8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) | channel 改进，已挂 1 个月，`needs-author-action` |
| Windows 原生 PowerShell 适配 | [PR #9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | 配合 Windows 测试编译问题 [#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422)，重要性上升 |
| SOP 里程碑（5/5） | [Tracker #8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288) | 长期在轨，仍差 daemon-owned SOP 控制面 |
| 漂移面审计 | [Tracker #8858](https://github.com/zeroclaw-labs/zeroclaw/issues/8858) | 文档/示例/快照与代码真值不一致的清理 |
| v0.9.0 安全/网关/破坏性变更队列 | [Tracker #7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | 协调面，security + breaking-change 全部在此 |

---

## 7. 用户反馈摘要

- **Landlock 沙箱过严**（[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973)）——用户希望默认开启下也能跑 shell 工具，暴露出"沙箱策略与常用系统路径的兼容性"是落地阻力点。
- **Bedrock Nova 2 Lite 缓存错误**（[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720)）——用户希望对单模型禁用 cachePoint，体现"provider 行为差异需要可在 config 显式关闭"的诉求。
- **CLI 密码输入无反馈**（[#7808](https://github.com/zeroclaw-labs/zeroclaw/issues/7808)）——刚刚关闭，是 onboarding 体验中的具体痛点。
- **CLI cron 静默丢输出**（[#9340](https://github.com/zeroclaw-labs/zeroclaw/issues/9340)）——用户跑通定时任务但完全看不到结果，介于"坏掉"与"沉默失败"之间。
- **Web Dashboard 缺取消按钮**（[#9425](https://github.com/zeroclaw-labs/zeroclaw/issues/9425)）——用户对长时 SOP 缺少逃生通道，运营/管理界面可控性差。
- **Windows 编译失败**（[#9422](https://github.com/zeroclaw-labs/zeroclaw/issues/9422)）——平台覆盖度的实质性裂痕。
- **本地化不一致**（[#9363](

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*