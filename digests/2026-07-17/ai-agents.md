# OpenClaw 生态日报 2026-07-17

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-17 02:05 UTC

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
**报告日期：2026-07-17**

---

## 1. 今日速览

OpenClaw 今日进入**高强度维护期**，24 小时内 Issue 与 PR 各产生 500 条更新，活跃度处于历史高位。当前主要矛盾集中在 **2026.7.1 版本的稳定性回退**——多个 P0/P1 级问题集中在 Gateway 启动崩溃、内存索引迁移、Codex 集成回归等方面，社区明显感受到这次发布的"阵痛"。同时，一批面向超时边界、输入校验、SSRF 防护的硬化类 PR 已进入 ready-for-review 队列，表明团队正在系统性补齐 7.1 暴露的鲁棒性短板。整体来看，项目仍保持高吞吐量运转（待合并 322 PR，活跃 Issue 329），但风险面需要密切跟踪。

---

## 2. 版本发布

今日无新版本发布。最近的关键版本为 `2026.7.1`，但围绕该版本已集中报告多个 P0/P1 回归（详见第 5 节），**官方应在下次发布前优先给出 hotfix**。

---

## 3. 项目进展

今日关闭/合并的 PR 中，多项聚焦于**超时边界与输入校验**的硬化工作，体现团队在 7.1 事件后的快速响应：

| 方向 | 代表性 PR | 进展 |
|---|---|---|
| 安全边界 | [#109233](https://github.com/openclaw/openclaw/pull/109233) `denyPaths` 不再放过目录列表 (P0) | 修复 `**/.ssh/**` 无法拦截 `dir.list` 自身的绕过风险 |
| 资源边界 | [#109088](https://github.com/openclaw/openclaw/pull/109088) Provider 流式读取缺省超时 (P2) | 解决 provider 中途挂起导致 agent run 无法取消 |
| 资源边界 | [#109484](https://github.com/openclaw/openclaw/pull/109484) Signal container WebSocket 握手超时 | 不可达 Signal 容器不再无限挂起 |
| 安全默认 | [#96336](https://github.com/openclaw/openclaw/pull/96336) 托管目录权限收敛到 0o700 | 已关闭；保护 ~/.openclaw 下的会话与凭据 |
| 启动保护 | [#101429](https://github.com/openclaw/openclaw/pull/101429) ignore-file 读取大小限制 (P1) | 防止恶意 .gitignore 导致 OOM |
| 守护进程 | [#96250](https://github.com/openclaw/openclaw/pull/96250) Gateway OOM crash-loop 防护 (P0) | 关闭 [#96203](https://github.com/openclaw/openclaw/issues/96203)；30 agent 持续负载下避免崩溃循环 |
| 协议一致性 | [#106532](https://github.com/openclaw/openclaw/pull/106532) gateway schema 收口为 `closedObject` | 收尾历史遗留技术债 |
| 可观测性 | [#104840](https://github.com/openclaw/openclaw/pull/104840) qa-lab 启动诊断 Unicode 损坏修复 | 已关闭 |
| 协议兼容 | [#101802](https://github.com/openclaw/openclaw/pull/101802) SDK 事件 seq=0 保留 | 关闭 [#101768](https://github.com/openclaw/openclaw/issues/101768)；修复 SDK 序列号丢失 |

**整体判断**：项目在"防御性编码"方向有实质推进，多个 P0/P1 安全/稳定性问题已有可合并的修复 PR，但**等价的 hotfix 版本尚未发布**，用户仍暴露在 7.1 的回归中。

---

## 4. 社区热点

| 排名 | 议题 | 关注度 | 性质 |
|---|---|---|---|
| 🥇 | [#75 Linux/Windows Clawdbot 客户端](https://github.com/openclaw/openclaw/issues/75) | **114 评论 / 81 👍** | 长期诉求，跨平台客户端缺位 |
| 🥈 | [#88312 Codex app-server turn-completion 回归](https://github.com/openclaw/openclaw/issues/88312) | 21 评论 | 2026.5.27 起多轮工具调用挂起 |
| 🥉 | [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707) | 17 评论 | 防 memory poisoning 安全诉求 |
| 4 | [#104721 工具结果全部变成 "(see attached image)"](https://github.com/openclaw/openclaw/issues/104721) | 17 评论 / 👍1 | 已关闭；文件读取返回占位字符串 |
| 5 | [#87744 Codex Telegram turn 超时](https://github.com/openclaw/openclaw/issues/87744) | 15 评论 | Telegram 集成在 5.27 不可用 |
| 6 | [#87307 Matrix thread 回归](https://github.com/openclaw/openclaw/issues/87307) | 15 评论 | 已关闭 |
| 7 | [#91009 Codex PreToolUse hook 卡死 gateway](https://github.com/openclaw/openclaw/issues/91009) | 14 评论 | hook relay 进程 CPU 爆表 |

**诉求解读**：
- **跨平台客户端缺失（#75）**是社区呼声最高、持续时间最长（自 2026-01）的功能请求，81 个 👍 体现强烈共识。
- **Codex 集成回归**集中在 5.27 / 6.1 / 7.1 三个版本节点，是当前负面反馈的主要来源。
- **Memory Trust Tagging** 等安全诉求显示企业用户对 prompt injection、memory poisoning 的关注在上升。

---

## 5. Bug 与稳定性

按严重程度排序，**今日关注度最高的回归/崩溃问题**：

### 🔴 P0 级（已影响生产）

| Issue | 简述 | 状态 |
|---|---|---|
| [#107220 Gateway crash-loop on 2026.7.1](https://github.com/openclaw/openclaw/issues/107220) | 旧版 memory sidecar meta/chunks 冲突致启动崩溃 | **已关闭** |
| [#107694 Gateway 无法启动](https://github.com/openclaw/openclaw/issues/107694) | 良性 migration 警告被 strict guard 拦截 | **已关闭** |
| [#106920 2026.7.1 gateway 无法重启](https://github.com/openclaw/openclaw/issues/106920) | nvm 环境下 update 后 gateway 起不来 | **已关闭**，👍5 |
| [#104721 工具结果被替换为 "(see attached image)"](https://github.com/openclaw/openclaw/issues/104721) | 数据返回被占位字符串替换 | **已关闭** |
| [#109233 denyPaths 绕过](https://github.com/openclaw/openclaw/pull/109233) | `**/.ssh/**` 不阻止 `dir.list` 自身 | **已有 fix PR 待合并** |
| [#96250 Gateway OOM crash-loop](https://github.com/openclaw/openclaw/pull/96250) | 30 agents / 2000+ restarts | **已有 fix PR 待合并** |
| [#107930 Node.js 版本变更升级体验差](https://github.com/openclaw/openclaw/issues/107930) | 跨大版本升级路径不顺 | 已开 issue，待产品决策 |

### 🟠 P1 级（功能受损但有 workaround）

- [#88312](https://github.com/openclaw/openclaw/issues/88312) / [#87744](https://github.com/openclaw/openclaw/issues/87744) / [#107464](https://github.com/openclaw/openclaw/issues/107464) / [#102206](https://github.com/openclaw/openclaw/issues/102206) / [#108238](https://github.com/openclaw/openclaw/issues/108238)：Codex / Telegram / WebChat 跨会话一致性回归
- [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex hook relay 进程泄漏导致 gateway RPC 阻塞（#97616 补充）
- [#94518](https://github.com/openclaw/openclaw/issues/94518) DeepSeek 缓存命中率跌破 10%（**已关闭**，社区 👍10）
- [#107873](https://github.com/openclaw/openclaw/issues/107873) Embedded prompt-lock session takeover 中止可见 WebChat turn
- [#108182](https://github.com/openclaw/openclaw/issues/108182) Control UI 2026.7.1 后 Skill Proposals / Dreaming 入口消失
- [#95833](https://github.com/openclaw/openclaw/openclaw/issues/95833) Subagent abort-settle 不释放 `.jsonl.lock`（**已关闭**）
- [#107449](https://github.com/openclaw/openclaw/issues/107449) / [#108473](https://github.com/openclaw/openclaw/issues/108473) cron 工具 JSON Schema 中 `\S` 不被 llama.cpp 接受（**已关闭**）
- [#80362](https://github.com/openclaw/openclaw/issues/80362) Telegram 重试正则过严，丢弃出站消息
- [#108379](https://github.com/openclaw/openclaw/issues/108379) Xiaomi MiMo 重复生成尝试

**稳定性判断**：今日关闭/合并了一批 P0/P1 修复，#107220、#107694、#106920 三个 Gateway 崩溃 case 全部关闭，说明核心启动链路已恢复。但 **2026.7.1 的次生问题（Codex 集成、Control UI、cache 命中率）尚未集中修复**，建议下个版本明确列入 changelog 与 regression list。

---

## 6. 功能请求与路线图信号

按热度归类（结合是否已有 PR 关联）：

### 安全 / 沙箱方向（需求强烈）
- [#7707 Memory Trust Tagging by Source](https://github.com/openclaw/openclaw/issues/7707)（17 评论）— 防 memory poisoning，无 PR
- [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659)（13 评论，👍4）— 代理用但看不到原始 key，无 PR
- [#7722 Filesystem Sandboxing Config (tools.fileAccess)](https://github.com/openclaw/openclaw/issues/7722)（9 评论，👍4）— 路径白/黑名单，无 PR
- [#10944 Telegram parseMode 配置](https://github.com/openclaw/openclaw/issues/10944)（5 评论）— emoji/HTML 支持，无 PR

### 通道增强（已有 PR 在 review）
- [#11665 Webhook 多轮会话复用](https://github.com/openclaw/openclaw/issues/11665)（11 评论）— 已有 linked-pr-open
- [#7476 WhatsApp sticker 发送](https://github.com/openclaw/openclaw/issues/7476)（5 评论）— 无 PR
- [#109520 AgentMail 官方外部通道插件](https://github.com/openclaw/openclaw/pull/109520) — XL PR，已开放
- [#8355 流式 TTS 语音管道](https://github.com/openclaw/openclaw/issues/8355)（4 评论，👍2）— 无 PR

### 模型路由 / 韧性
- [#9986 模型 fallback 触发上下文超限](https://github.com/openclaw/openclaw/issues/9986)（5 评论）— 无 PR
- [#6599 `/models test-fallback` 命令](https://github.com/openclaw/openclaw/issues/6599)（5 评论）— 无 PR

### 体验改进
- [#75 Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75)（114 评论，81 👍）— **跨平台空白是路线图最大缺口**
- [#108182 Control UI 回归](https://github.com/openclaw/openclaw/issues/108182)（9 评论）— 7.1 UI 缺页
- [#6757 Agent 自触发 compact](https://github.com/openclaw/openclaw/issues/6757)（4 评论，👍2）
- [#9409 上下文溢出错误信息细化](https://github.com/openclaw/openclaw/issues/9409)（4 评论，👍3）

**路线图预测**：下一版本最可能纳入的项是 **#75 的子集（Linux 客户端骨架）+ #11665（webhook 多轮）+ Codex 集成 7.1 回归修复**；安全类（#7707/#10659/#7722）属于"长期呼声 + 无 PR"区，需产品层决策。

---

## 7. 用户反馈摘要

从活跃 Issue 的真实评论中提炼的痛点：

- **"7.1 完全没法用"** 是多类反馈的共同基调（[#107220](https://github.com/openclaw/openclaw/issues/107220)、[#107694](https://github.com/openclaw/openclaw/issues/107694)、[#106920](https://github.com/openclaw/openclaw/issues/106920)、[#108182](https://github.com/openclaw/openclaw/issues/108182)）—— 用户表达"这是破坏性升级不是升级"，建议团队**建立 minor 版本的稳定性门禁**。

- **Codex 集成的"幽灵式回归"**反复出现（[#88312](https://github.com/openclaw/openclaw/issues/88312)、[#87744](https://github.com/openclaw/openclaw/issues/87744)、[#91009](https://github.com/openclaw/openclaw/issues/91009)、[#107464](https://github.com/openclaw/openclaw/issues/107464)、[#102206](https://github.com/openclaw/openclaw/issues/102206)），用户痛点是"明明没改配置，5.26 还能用、5.27 就挂了"——**对版本间的兼容性契约不满**。

- **Codex hook 子进程泄漏**（[#97616](https://github.com/openclaw/openclaw/issues/97616)）：用户反馈"运行一段时间后 `ps` 看到一堆 zombie"，说明**长期运行的稳定性需要 SIGCHLD/进程回收审计**。

- **跨平台缺位**（#75）已成社区级共识；社区用户表达"愿意贡献 PR 但缺乏 owner"——维护者侧需要明确该 issue 的 maintainer。

- **WebChat reconnect 中断会话**（[#38091](https://github.com/openclaw/openclaw/issues/38091)）—— 用户具体复现路径清晰（WSL2 + Webchat），希望"不要因为前端 idle 重连就把对话杀掉"。

- **DeepSeek 缓存命中率断崖**（[#94518](https://github.com/openclaw/openclaw/issues/94518)）—— 用户实测从 80%+ 降到 <10%，明确指向 6.x 的边界感知缓存破坏 prefix 匹配；此条 👍10 反映**对成本/性能回退的高敏感度**。

- **agent 自驱 compact**（[#6757](https://github.com/openclaw/openclaw/issues/6757)）：用户希望 agent 自主管理上下文，而非完全依赖 `/compact` 触发。

- **满意度信号**：多个已关闭 P0 issue（#107220、#107694、#106920、#104721）说明核心崩溃面已被快速收敛，社区对响应速度总体认可。

---

## 8. 待处理积压

下列议题**长期未响应或维护者决策缺失**，建议优先 review：

| Issue | 创建 | 状态 | 风险 |
|---|---|---|---|
| [#75 Linux/Windows 客户端](https://github.com/openclaw/openclaw/issues/75) | 2026-01-01 | 标 `needs-maintainer-review` `needs-product-decision` | 81 👍，社区最大共识空白 |
| [#7707 Memory Trust Tagging](https://github.com/openclaw/openclaw/issues/7707) | 2026-02-03 | `needs-product-decision` `needs-security-review` | 安全方向核心呼声 |
| [#10659 Masked Secrets](https://github.com/openclaw/openclaw/issues/10659) | 2026-02-06 | `needs-product-decision` `needs-security-review` | 与 #7707 互为补充 |
| [#7722 Filesystem Sandboxing](https://github.com/openclaw/openclaw/issues/7722) | 2026-02-03 | `needs-product-decision` `needs-security-review` | 安全三件套之一 |
| [#90916 Topic-session families](https://github.com/openclaw/openclaw/issues/90916) | 2026-06-06 | 标 stale，`needs-product-decision` | 标记 off-meta tidepool，待 owner |
| [#86684 sessions_yield 误压缩](https://github.com/openclaw/openclaw/issues/86684) | 2026-05-26 | stale + P1，缺 live-repro | 潜在数据丢失 |
| [#92769 MiniMax M3 reasoning 字段丢失](https://github.com/openclaw/openclaw/issues/92769) | 2026-06-13 | P1 + regression | 根因已定位为 OpenRouter `:floor` 后缀，需在文档或 UI 提示 |

**维护者建议**：将 #75、#7707、#10659、#7722 四个长期积压 issue 显式分配 owner 或写入路线图 RFC，避免它们持续消耗社区注意力。

---

### 报告说明

- **数据窗口**：2026-07-16 ~

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析报告

**报告日期：2026-07-17｜覆盖项目：13 个｜核心参照：OpenClaw**

---

## 1. 生态全景

2026 年 7 月中旬，个人 AI 助手/自主智能体开源生态呈现**"高活跃 + 高分化"** 的鲜明格局：以 OpenClaw、ZeroClaw、CoPaw、Hermes Agent 为代表的成熟项目已步入**质量收敛与架构重构并行**阶段，PR 吞吐量稳定高位但合并速率普遍滞后；NanoBot、IronClaw、NanoClaw 等中坚项目进入**功能深化与硬化加固**节奏；而 PicoClaw、TinyClaw、NullClaw、ZeptoClaw 则面临**维护响应不足或单点故障**风险。值得注意的是，**"Claw" 命名已形成事实上的子赛道品牌矩阵**（OpenClaw / NanoClaw / PicoClaw / IronClaw / NullClaw / ZeroClaw / ZeptoClaw / LobsterAI / CoPaw），背后是不同的开源主体在大致相同的 AI Agent 概念上做差异化落地——竞争与参照关系日益明显。

---

## 2. 各项目活跃度对比

| 项目 | 维护主体 | Issues (24h) | PRs (24h) | Release | 合并速率 | 健康度 | 阶段判断 |
|---|---|---|---|---|---|---|---|
| **OpenClaw** | openclaw | ~329 活跃 | ~322 待合并 | 无 | 高 P0/P1 关闭 | ⚠️ 中高 | 7.1 阵痛期 |
| **CoPaw** | agentscope-ai | 43 (关 20) | 46 (关 25) | 无 | **54%** ✅ | ⚠️ 中高 | v2.0 升级震荡 |
| **ZeroClaw** | zeroclaw-labs | 24 (关 2) | 50 (关 4) | 无 | 8% | ⚠️ 中 | RFC 密集期 |
| **Hermes Agent** | NousResearch | 50 (关 8) | 50 (关 6) | 无 | 12% | ⚠️ 中 | Bug 收敛期 |
| **IronClaw** | nearai | 18 (关 3) | 39 (关 11) | 无 | **28%** ✅ | ✅ 良好 | Reborn GA 前夕 |
| **NanoBot** | HKUDS | 1 新开 | 12 (关 1) | 无 | 8% | ✅ 良好 | 硬化洪峰期 |
| **NanoClaw** | nanocoai | 4 (关 1) | 19 (关 3) | 无 | 16% | ✅ 良好 | 多通道战略期 |
| **LobsterAI** | netease-youdao | 3 | 17 (关 14) | 收尾 7.16 | **82%** ✅ | ✅ 优秀 | 版本封版 + 协作深化 |
| **Moltis** | moltis-org | 0 | 3 (全关) | **v20260716.01** ✅ | 100% | ⚠️ 单人风险 | 单点驱动迭代 |
| **PicoClaw** | sipeed | 2 | 9 (依赖 8) | 无 | 0% | ⚠️ 需关注 | 维护放缓 |
| **NullClaw** | nullclaw | 1 | 0 | 无 | — | 🔴 危险 | P0 crash 未响应 |
| **ZeptoClaw** | qhkm | 5 (全关) | 0 | 无 | — | ⚪ 中性 | 文档批处理期 |
| **TinyClaw** | TinyAGI | 0 | 0 | 无 | — | ⚫ 静默 | 24h 无活动 |

**关键观察**：
- **合并速率断层严重**：LobsterAI/IronClaw/CoPaw 表现出强执行力（≥28%），而 ZeroClaw/NanoBot 仅 8% 合并率，存在**审查积压风险**。
- **Release 节奏**：13 个项目中仅 Moltis 当日发版，多数项目处于"代码流入 > 发版产出"的不对称状态。
- **社区分层清晰**：活跃顶部（OpenClaw / CoPaw / ZeroClaw / Hermes）已进入产品稳定化阶段；中段（NanoBot / NanoClaw / IronClaw / LobsterAI / Moltis）处于功能拓展；底部（PicoClaw / NullClaw / ZeptoClaw / TinyClaw）面临维护可持续性挑战。

---

## 3. OpenClaw 在生态中的定位

### 与同类对比的优势

| 维度 | OpenClaw | Hermes Agent | CoPaw | ZeroClaw | NanoBot |
|---|---|---|---|---|---|
| 社区规模 | **最大**（活跃 Issue 329） | 大（50） | 大（43） | 大（24） | 小（1 新开） |
| 跨平台诉求 | **#75 跨平台客户端 81 👍（全场最高）** | 多 gateway tabs | Tauri Desktop | 多架构预构建 | Render 一键部署 |
| 硬化纵深 | **7 类 P0 修复同日落地** | 边界 + MCP | Windows/UAC | Provider 抽象 | 内存/并发/Docker |
| Codex 集成 | **重灾区（5+ P1）** | 跨 turn 丢失 | 无明显痛点 | OAuth 串号 | 无 |
| 控制平面成熟度 | WebChat / Control UI / Dreaming | Desktop v2 | Console | Gateway + Web | WebUI |
| 安全方向 | 三大长期呼声（#7707/#10659/#7722） | Skill 安全边界 | Policy UI | Plugin 权限模型 | Docker 默认权限 |

### 技术路线差异

- **OpenClaw** 的核心特征是**控制平面丰满 + 通道生态厚实**，但代价是 7.1 暴露的回归面广，Codex 集成反复出现"幽灵式回归"（5.27→6.1→7.1 三连击）。
- **Hermes Agent** 与 OpenClaw 在多通道架构上接近，但更聚焦于**多端分布式 Agent 网关**（#4335、#45779）。
- **CoPaw** 走 Tauri 桌面优先路线，强调桌面端体验一致性，但 Windows 提权策略成为关键瓶颈。
- **ZeroClaw** 走架构驱动路线（11 个并发 RFC、Provider 抽象层重构），社区设计讨论 > 代码落地。
- **NanoBot** 是更"学术派"的小型研究型项目（HKUDS 出品），定位偏向**硬化与可复现性**而非功能广度。

### 社区规模对比

OpenClaw 的 **#75（81 👍）+ #7707（17 评论）+ #7722（9 评论）** 等长期议题的社区共识度**显著高于其他项目**，反映出 OpenClaw 已经形成最有黏性的用户社区；但同时也意味着**用户期望管理**是 OpenClaw 维护团队的隐性负担。

---

## 4. 共同关注的技术方向

跨项目反复涌现的需求信号，构成行业级趋势：

### 🔐 4.1 安全 / 沙箱 / 凭据保护（**最热**）
- **OpenClaw**：`denyPaths` 目录列表绕过（#109233）、托管目录权限收敛（#96336）、Memory Trust Tagging（#7707）、Masked Secrets（#10659）、Filesystem Sandboxing（#7722）
- **NanoBot**：Docker Compose 默认 `SYS_ADMIN` + 非受限 seccomp 风险（#4955）
- **IronClaw**：WebUI shell 命令多租户越权（#6170）
- **Hermes Agent**：skill 安全边界 fail-open（#53491）、CLI 卸载误删他包（#65854）、沙箱绕过（#66019）
- **NanoClaw**：loopback webhook 缺鉴权 CWE-306（#3065）
- **ZeroClaw**：Plugin 权限模型 RFC（#8398）、ToolAccessPolicy 绕过（#7960）

### 🧠 4.2 Memory 信任与上下文安全
- **OpenClaw**：Memory Trust Tagging by Source（#7707，17 评论）
- **ZeroClaw**：对话历史 vs Agent 记忆分离 RFC（#9048）
- **NanoBot**：持久化路径 2000 条上限绕过（#4956）
- **IronClaw**：memory auto-recall 内部块泄露（#53222）

### 🔌 4.3 MCP / 工具协议稳定性
- **OpenClaw**：Provider 流式读取缺超时（#109088）、Codex hook 子进程泄漏（#91009、#97616）
- **Hermes Agent**：MCP poll OOM（#66039）、keepalive O(tool-count) 30s 超时（#65787）、MCP 多行字符串被 grok 丢弃（#58345）
- **NanoBot**：MCP/AnyIO `CancelledError` 泄漏（#4960）
- **CoPaw**：PubMed MCP 在 llama.cpp 报错（#6201）

### 💬 4.4 通道扩展与多通道战略
- **NanoClaw**：WhatsApp Baileys + Cloud 双通道键冲突闭环（#2911→#2913→#3070）、Dial 适配器（#3041）
- **OpenClaw**：AgentMail 官方插件 PR（#109520）、Webhook 多轮会话（#11665）
- **IronClaw**：Telegram 渠道扩展（#6159）、统一扩展运行时（#6116）
- **ZeroClaw**：JordanTheJet 通道插件栈（7 个 stacked PR）、A2A 出站客户端 RFC（#9106）
- **NullClaw**：Telegram aarch64 SIGSEGV（#976）

### 🖥️ 4.5 跨平台 / 多架构客户端
- **OpenClaw**：#75（114 评论 / 81 👍）—— **全网呼声最高**
- **CoPaw**：Tauri 桌面端 Windows 提权策略
- **ZeroClaw**：多 CPU 架构发布构建（#6160）
- **PicoClaw**：ARM64 启动器缺失（#3260）
- **NullClaw**：aarch64 worker 栈空间硬编码 512KB 不安全（#976）

### ⚙️ 4.6 模型路由 / Provider 韧性
- **ZeroClaw**：Provider 架构统一 RFC（#5937，88 天长开，11 评论）
- **Hermes Agent**：`/model` picker 串行 5s 延迟（#65650/#65481）
- **OpenClaw**：模型 fallback 触发上下文超限（#9986）、DeepSeek 缓存命中率断崖（#94518）
- **NanoClaw**：Claude↔Codex 配额自动回退（#3069/#3057 双方案待裁决）

### 🌏 4.7 国际化（zh-TW）
- **IronClaw**：#6158 zh-TW 缺失
- **NanoBot**：#4958 繁体中文本地化
- **PicoClaw**：#3261 繁体中文 locale
- 同一作者 **PeterDaveHello** 在多项目提交相同诉求，体现台湾社区的跨项目集体表达。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 控制平面丰满 + 通道生态厚 | 全能型个人助手 + 企业部署 | 多组件（Gateway + Codex + WebChat + Control UI + Memory） |
| **Hermes Agent** | 边缘模型友好 + 多端协同 | 本地推理用户 + 多机部署 | MCP 协议深入 + Gateway 可配置 workers |
| **CoPaw** | Tauri 桌面 + Qwen 生态 | 桌面端中文用户 | Electron→Tauri 迁移、CLI 一等公民 |
| **ZeroClaw** | 架构驱动 + RFC 治理 | 企业级 + 平台扩展者 | 强模块化（ironclaw_common / safety / skills 分离）+ Plugin 系统 |
| **NanoBot** | 硬化 + 可复现性 | 学术 / 生产级自部署 | HKUDS 出品，研究导向；WebUI 桥接本地文件 |
| **NanoClaw** | 多通道扩展框架 | 多 IM 平台重度用户 | v2 多通道战略 + 双方案配额回退 |
| **IronClaw** | Reborn GA 重构 | 追求 Rust 重写的新架构派 | god-crate 拆分 + OAuth 一致性测试 + Apple Container 支持 |
| **LobsterAI** | 协作流控制 + 跨平台 UI | 中文 C 端协作用户 | steer 队列 + 文件夹上下文 + Windows 原生标题栏 |
| **Moltis** | 单点驱动 + 外部 Agent 原生化 | 偏好稳定单维护者路线 | sandbox 后端多态 + Apple Container |
| **PicoClaw / NullClaw / ZeptoClaw / TinyClaw** | 各自窄定位 | 利基用户 | 各自单点功能 |

**架构哲学光谱**：
```
单点驱动（Moltis） ── 硬化加固（NanoBot）── 架构重构（ZeroClaw / IronClaw）── 体验打磨（LobsterAI）── 通道扩展（NanoClaw）── 全能控制平面（OpenClaw）
```

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高活跃 + 大社区（快速迭代 + 架构升级）
- **OpenClaw**、**CoPaw**、**ZeroClaw**、**Hermes Agent**：24h 内 24-329 Issue / 39-322 PR 不等，均处于"功能广度已铺开、底层健壮性追赶"阶段。
- 共同特征：合并速率滞后于产出速率，**审查瓶颈**普遍存在。

### 🌱 第二梯队：中等活跃 + 中型社区（功能深化）
- **IronClaw**、**NanoBot**、**NanoClaw**、**LobsterAI**：聚焦特定模块深化（Reborn GA / 硬化洪峰 / 多通道 / 协作流），合并率高（28%-82%），执行力强。

### 🌿 第三梯队：低活跃 + 单点驱动（质量巩固或维护期）
- **Moltis**：单维护者 penso 一人驱动，PR 质量极高（100% E2E 测试覆盖），但 bus factor 风险显著。
- **PicoClaw**：8 条 dependabot PR 积压 7+ 天，社区贡献仅剩本地化。

### 🍂 第四梯队：停滞或危机（需关注）
- **NullClaw**：P0 级 SIGSEGV crash 无 PR 响应。
- **ZeptoClaw**：代码层面零推进，全部由单人批量自动化维护。
- **TinyClaw**：24h 完全静默。

---

## 7. 值得关注的趋势信号

### 📡 趋势一：从"功能广度"转向"硬化与边界"
**信号**：12 个项目中 9 个出现安全/沙箱/凭据类硬化工件（OpenClaw #109233/#96336/#7707/#10659/#7722、NanoBot #4955、IronClaw #6170、Hermes #53491/#65854、NanoClaw #3065、ZeroClaw #7960）。

**对开发者的意义**：AI Agent 的下一阶段竞争不再是"能不能做"，而是"能不能安全地做"。**默认安全姿态**（least-privilege container、denyPaths、masked secrets、tool access policy）正在成为标配门槛。

### 📡 趋势二：MCP 协议成为基础设施关键路径
**信号**：OpenClaw（Provider 超时 / Codex hook 泄漏）、Hermes（MCP poll OOM / keepalive 30s 超时 / grok 多行丢失）、NanoBot（CancelledError 泄漏）、CoPaw（PubMed llama.cpp 报错）—— MCP 稳定性问题在 4 个项目中同时暴露。

**对开发者的意义**：MCP 的工具数增长正在突破当前实现的复杂度边界（O(tool-count) keepalive、Poll loop 内存膨胀），需要**协议层加固**（token bucket、增量发现、流式终止语义）。

### 📡 趋势三：多通道架构走向"一等公民化"
**信号**：NanoClaw 的双通道键冲突闭环、IronClaw 的统一扩展运行时（#6116）、ZeroClaw 的 JordanTheJet 7-PR 通道栈、A2A 双向闭环（#9106）。

**对开发者的意义**：**通道不再是 Agent 的边缘能力，而是核心架构组件**。Channel Adapter 框架（如 `runChannelSkill`、`unified extension runtime`）正在沉淀为可复用模式。

### 📡 趋势四：跨平台 / 多架构是下一个缺口
**信号**：OpenClaw #75（

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-17

## 📌 今日速览

NanoBot 项目今日延续高活跃度，**12 个 PR 同时涌入**待合并通道，**1 个新 Issue 开放**，**1 个 PR 已关闭**。整体节奏显示项目正处于密集的稳定性收敛阶段：约 **83%（10/12）的 PR 被标注为 P1（高优先级）**，多数集中在 Bug 修复、性能边界与 Provider 兼容性问题；功能新增主要集中在 P2 级别（WebUI 增强、第三方集成）。社区贡献者参与面广（至少 9 位不同作者），维护生态健康。无新版本发布，说明所有变更仍在评审与整合阶段，尚未达到 release 门槛。

---

## 🚀 版本发布

**无新版本发布。**

今日所有 PR 仍处于待合并状态，下个版本（推测为补丁版）的 release notes 雏形已基本显现，但维护者尚未发起发布流程。

---

## 📈 项目进展

今日仅 **1 个 PR 完成合并/关闭**：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#4950](https://github.com/HKUDS/nanobot/pull/4950) | docs(readme): reflect community maintenance | ✅ CLOSED | README 联系方式更新，明确项目由开源社区协作维护，体现治理透明度 |

**整体推进评估：** 项目处于"代码贡献洪峰期"——大量修复已就绪等待评审，但合并速率（1/12 ≈ 8.3%）显著低于产出速率，**存在潜在的 PR 审查积压风险**。建议维护者在未来 48 小时内集中处理 P1 类修复 PR，以稳定主分支。

---

## 🔥 社区热点

由于所有条目均无评论互动（comments 均显示 undefined / 0），今日"热度"主要由 **PR 体量与优先级信号** 驱动，而非讨论深度。值得关注的焦点：

| 关注度 | PR/Issue | 原因 |
|---|---|---|
| ⭐⭐⭐ | [#4948](https://github.com/HKUDS/nanobot/issues/4948) + [#4954](https://github.com/HKUDS/nanobot/pull/4954) | 唯一今日 Issue，且已获专项修复 PR，闭环性最强 |
| ⭐⭐⭐ | [#4955](https://github.com/HKUDS/nanobot/pull/4955) | Docker Compose 默认安全加固，影响所有自部署用户 |
| ⭐⭐ | [#4937](https://github.com/HKUDS/nanobot/pull/4937) | 一键 Render 部署，降低新手门槛 |
| ⭐⭐ | [#4951](https://github.com/HKUDS/nanobot/pull/4951) | 新增 Nimble 搜索 provider，扩展生态集成 |

**诉求分析：** 社区关注点集中在三大方向——(1) 部署与运维体验（Render、Docker 安全）、(2) WebUI 可见性与交互正确性（subagent turn 状态）、(3) Provider 层稳定性（重试、字符编码）。

---

## 🐛 Bug 与稳定性

按严重程度排序（**P1 均标记为高优先级**）：

| 严重度 | Issue/PR | 描述 | 是否有 fix |
|---|---|---|---|
| 🔴 P1 | [#4959](https://github.com/HKUDS/nanobot/pull/4959) | LLM 瞬时错误重试间隔不准确，25s 延迟实际仅 25s 触发，导致 `requests limit reached` 频发 | ✅ 自带修复 |
| 🔴 P1 | [#4960](https://github.com/HKUDS/nanobot/pull/4960) | MCP/AnyIO 集成泄漏 `CancelledError`，吞掉真实外部取消信号 | ✅ 自带修复（引入 `task_is_cancelling()` 辅助函数） |
| 🔴 P1 | [#4957](https://github.com/HKUDS/nanobot/pull/4957) | `SessionManager._cache` 无界强引用，导致内存泄漏 | ✅ 自带修复（128 条 LRU + 弱引用溢出缓存） |
| 🔴 P1 | [#4956](https://github.com/HKUDS/nanobot/pull/4956) | 持久化路径未强制执行 2000 条消息上限，SDK ingest 绕过校验 | ✅ 自带修复（回归测试覆盖） |
| 🔴 P1 | [#4955](https://github.com/HKUDS/nanobot/pull/4955) | Docker Compose 默认带 `SYS_ADMIN`、非受限 AppArmor/seccomp，**安全风险** | ✅ 自带修复 |
| 🔴 P1 | [#4954](https://github.com/HKUDS/nanobot/pull/4954) | 子智能体完成事件不继承 WebUI delivery 生命周期，导致前端失明 | ✅ 自带修复，闭环 #4948 |
| 🔴 P1 | [#4952](https://github.com/HKUDS/nanobot/pull/4952) | Provider 请求边界未过滤 UTF-16 代理对，emoji 内容触发 `UnicodeEncodeError` | ✅ 自带修复 |

**整体评估：** 今日报告的 Bug 几乎全部自带修复 PR，**"问题—修复"配对完整度达 100%**，这是非常健康的信号。集中度也清晰：内存边界、并发取消安全、Provider 字符集、部署安全是四大主线。

---

## 💡 功能请求与路线图信号

今日的功能性 PR（均为 P2）勾勒出下一阶段路线图方向：

| PR | 功能 | 路线图价值 |
|---|---|---|
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | 一键部署到 Render | 部署民主化——降低非云原生用户上手成本 |
| [#4953](https://github.com/HKUDS/nanobot/pull/4953) | WebUI 原生文件夹选择桥 | 提升本地文件交互 UX，loopback + tab-scoped token 设计体现安全考量 |
| [#4958](https://github.com/HKUDS/nanobot/pull/4958) | 优化 zh-TW 繁体中文本地化 | i18n 投入，反映项目对中文用户的重视 |
| [#4951](https://github.com/HKUDS/nanobot/pull/4951) | Nimble 搜索 provider | 搜索生态扩展，与现有 REST provider 同构 |

**预测：** 下个补丁版本（推测 v0.x.y）将主要包含 P1 Bug 修复；Render 部署与 Nimble 搜索 provider 是 P2 中合并可能性最高的两个，因其形态标准化、风险面小。

---

## 💬 用户反馈摘要

⚠️ **数据局限说明：** 今日所有 Issue/PR 的评论数均为 0 或未披露，无法从评论中提取具体用户原声。仅有 PR 描述与 Issue 摘要可作为间接信号：

- **运维痛点**：用户（[#4959](https://github.com/HKUDS/nanobot/pull/4959) 作者）持续观察日志，反映 **生产环境对 provider 限流敏感**，重试机制需要更精确的退避策略。
- **开发者体验痛点**：[#4952](https://github.com/HKUDS/nanobot/pull/4952) 揭示 **emoji/HTML 内容经 JSON round-trip 后失败**，影响富媒体场景。
- **安全合规诉求**：[#4955](https://github.com/HKUDS/nanobot/pull/4955) 默认容器权限过宽，反映用户对 **默认安全姿态** 的更高期待。
- **多语言体验**：[#4958](https://github.com/HKUDS/nanobot/pull/4958) 显示繁体中文社区正在主动贡献本地化质量改进。

---

## 📋 待处理积压

虽然无法直接识别"长期未响应"项，但根据今日数据，可识别出 **审查压力集中点**：

| 关注项 | 风险描述 |
|---|---|
| **PR 合并速率 vs 产出速率失衡** | 12 个新 PR 中仅 1 个关闭，若类似趋势持续 3-5 天，将形成审查积压 |
| **11 个 P1 PR 等待首轮 review** | 全部为 Bug/安全/性能类，建议维护者优先分流 `KDB-Wind`（#4956、#4957）、`yu-xin-c`（#4954）等核心修复 |
| **Issue #4948 闭环依赖 #4954 合并** | 建议优先评审该 PR 链路，避免 Issue 长期悬置 |

**维护者建议：**
1. 设立 P1 PR 的 48 小时内首轮响应 SLA；
2. 召集分布式 review（#4955、#4956、#4957、#4959、#4960 可分发给不同 reviewer 并行处理）；
3. 在下次发版前完成 README（已合并 #4950）+ Render 部署（#4937）+ Nimble provider（#4951）的捆绑发布，最大化单次 release 信息密度。

---

> 📊 **今日健康度评分：8.2/10**  
> 高产出 + 完整修复闭环 + 多元化贡献者 = 优秀；但合并速率滞后与零版本发布提醒维护者需关注节奏控制。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-17

---

## 1. 今日速览

Hermes Agent 仓库今日维持高强度开发节奏：过去 24 小时共产生 **50 条 Issue 更新**（42 条活跃、8 条关闭）和 **50 条 PR 更新**（44 条待合并、6 条关闭/合并），但**无新版本发布**，仓库整体处于密集的 Bug 修复与稳定性优化阶段，而非功能发版。从标签分布看，`P2` 严重等级 Bug 集中爆发于 CLI、Gateway、Agent、MCP、Desktop 五条主线，其中不少问题已经拥有配套修复 PR（如 #66028、#66039、#66038、#43370），反映出项目当前的核心矛盾是"功能广度已铺开、但底层健壮性正在追赶"。社区讨论最热烈的依然是 **#25267（Claude Agent SDK 订阅 OAuth 支持）**，41 个 👍 是所有 Issue 中最高，说明用户对 Anthropic 计费模型的不满具有相当的代表性。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最近一轮可见的发布线索为 Issue #61284、#54489、#52470 等修复在版本号 **v2026.7.7.2** 之上逐步沉淀，但官方尚未切版本标签。

---

## 3. 项目进展

今日可见明确 CLOSED 状态的 PR 仅 **#53222**（[fix(memory): gate auto recall + scrub inline-echoed recall block](https://github.com/NousResearch/hermes-agent/pull/53222)），针对 #40170 报告的外部 channel 收到 `<memory-context>` 内部回忆块泄露问题做了两层防护（入站注入控制 + 出站流截断）。完整 6 条"合并/关闭"列表其余成员未在 Top 20 展示（按评论数排序），结合 Issue 侧关闭 8 条来看，本日合入主要聚焦：

- **会话/任务上下文隔离**：[PR #66028](https://github.com/NousResearch/hermes-agent/pull/66028)（cron 任务 workspace 隔离）、[PR #43370](https://github.com/NousResearch/hermes-agent/pull/43370)（cron session context 隔离）、[PR #56770](https://github.com/NousResearch/hermes-agent/pull/56770)（Gateway 致命错误处理崩溃防护）。
- **MCP 稳定性**：[PR #66039](https://github.com/NousResearch/hermes-agent/pull/66039)（MCP poll loop 在 Python ≥3.8 下因 `TimeoutError` 别名引发的 OOM 修复）、[PR #65989](https://github.com/NousResearch/hermes-agent/pull/65989)（Unreal Engine MCP 配套 skill）。
- **Desktop 性能与测试覆盖**：[PR #66033](https://github.com/NousResearch/hermes-agent/pull/66033)（session switch 布局抖动级联）、[PR #66034](https://github.com/NousResearch/hermes-agent/pull/66034)（review store 单元测试 35 条）。
- **Gateway 可配置化**：[PR #65740](https://github.com/NousResearch/hermes-agent/pull/65740)（`gateway.agent_executor_workers` 取代硬编码 10 线程）。
- **Windows 兼容性**：[PR #61183](https://github.com/NousResearch/hermes-agent/pull/61183)（cron 脚本启动器弹窗）、[PR #66038](https://github.com/NousResearch/hermes-agent/pull/66038)（git probe kill 后 cleanup hang）。

整体看，Hermes 今日的代码进站围绕"**会话边界 / MCP 可靠性 / 跨平台一致性**"三条主线推进，单日质量改进量处于较高水平。

---

## 4. 社区热点

按评论数 + 👍 数排序，今日最受关注的讨论集中在以下议题：

| 议题 | 链接 | 评论 | 👍 | 热度判断 |
|---|---|---|---|---|
| Claude Agent SDK 订阅 OAuth 支持 | [#25267](https://github.com/NousResearch/hermes-agent/issues/25267) | 11 | **41** | 🔥 全场最热，反映用户希望复用 Claude 订阅而非双重付费 |
| 本地 OpenAI-兼容模型下超大 prompt 卡死 | [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 6 | 1 | 🔥 多模型规模复现，影响所有本地推理用户 |
| 跨平台会话上下文共享（CLI ↔ Telegram） | [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | 6 | 1 | 🔥 多端用户长期痛点 |
| Ollama + gemma4 跑 Hermes 时忘记 skills | [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) | 5 | 0 | 🔥 本地+开源模型生态兼容性焦点 |
| Desktop 多 gateway 多 tab | [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) | 4 | 4 | 用户为多机部署明确需求 |
| MCP keepalive O(tool-count) 超时 | [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) | 4 | 0 | MCP 工具数增长带来的隐藏故障 |
| 会话结构化 tracing（起止时间戳） | [#6741](https://github.com/NousResearch/hermes-agent/issues/6741) | 3 | 0 | 可观测性长期呼声 |

**诉求分析**：

- **#25267** 表面是"加一个 OAuth 流"，本质上是 Anthropic 的 Developer Platform API 计费模型与个人 Claude Pro/Max 订阅模型**互不兼容**导致的"双重付费"愤怒；社区用了 41 颗星来表达"希望支持 Codex 那种订阅 OAuth"的明确诉求。
- **#61265 / #15985 / #65787** 集中体现了一个共同主题：**Hermes 在边缘模型（小参数、工具多、自部署）上脆弱**——本地推理、Ollama、MCP 大服务器都会触发严重故障。
- **#4335 / #45779** 则是产品形态升级方向——从"单端 agent"走向"分布式多端 agent 网关"。

---

## 5. Bug 与稳定性

按严重程度（P2 优先 + 影响范围）排序，今日最具破坏力的 Bug 报告：

### 🔴 P2 严重 / 高影响

| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#61265](https://github.com/NousResearch/hermes-agent/issues/61265) | 本地 OpenAI-兼容模型超大 prompt 多分钟卡死 | ❌ 暂无 |
| [#65384](https://github.com/NousResearch/hermes-agent/issues/65384) | Desktop App 用非默认 profile + 远程 backend 每条消息创建新 session | ❌ 暂无 |
| [#65787](https://github.com/NousResearch/hermes-agent/issues/65787) | MCP keepalive 用 `list_tools()` O(tool-count)，30s 硬超时 | ✅ PR #66039 已在路上（但侧重点不同：解决 OOM，非解决 30s 超时根因） |
| [#53002](https://github.com/NousResearch/hermes-agent/issues/53002) | Z.ai 429/1305 仅在 Anthropic 适配器修了，chat/completions 路径仍复发 | ❌ 暂无 |
| [#65746](https://github.com/NousResearch/hermes-agent/issues/65746) | MoA/local 调用 30s 后崩溃（`cannot convert float infinity to integer`） | ❌ 暂无 |
| [#58345](https://github.com/NousResearch/hermes-agent/issues/58345) | xAI grok-4.3 丢弃 MCP 多行字符串参数，AgentMail 发送空白邮件 | ❌ 暂无 |
| [#65854](https://github.com/NousResearch/hermes-agent/issues/65854) | 卸载命令可能误删共享 Python 目录下的其他包（**数据安全级**） | ❌ 暂无 |
| [#58745](https://github.com/NousResearch/hermes-agent/issues/58745) | `compression.context_length` capability-vs-budget 语义冲突，循环压缩 | ❌ 暂无 |
| [#53491](https://github.com/NousResearch/hermes-agent/issues/53491) | `guard_agent_created` 默认关 + ask-policy 泄露 findings + fail-open（**安全边界**） | ❌ 暂无 |
| [#54115](https://github.com/NousResearch/hermes-agent/issues/54115) | BG Review 在 llama.cpp 服务下引发 OOM + 严重减速 | ❌ 暂无 |

### 🟡 已关闭的回归 / 已修复

- [#61284](https://github.com/NousResearch/hermes-agent/issues/61284) Dashboard 切 session 后 PTY 静默（v2026.7.7.2+ WebSocket 回归）— 已 CLOSED
- [#41904](https://github.com/NousResearch/hermes-agent/issues/41904) Codex app-server runtime 跨 turn 丢失 thread 上下文 — 已 CLOSED
- [#52470](https://github.com/NousResearch/hermes-agent/issues/52470) Dashboard 自动重启因 `_HERMES_GATEWAY=1` 继承失败 — 已 CLOSED
- [#54489](https://github.com/NousResearch/hermes-agent/issues/54489) `hermes setup` 将 `basic` 插件加入 disabled 导致 dashboard auth 失败 — 已 CLOSED
- [#66019](https://github.com/NousResearch/hermes-agent/issues/66019) `hermes -z` 静默忽略 `terminal.backend` 走本地 backend（**沙箱绕过**） — 已 CLOSED

### 🟠 边缘 / 局部

- [#15985](https://github.com/NousResearch/hermes-agent/issues/15985) Ollama + gemma4 启动后忘记 skills
- [#66012](https://github.com/NousResearch/hermes-agent/issues/66012) Desktop 忽略 per-profile TTS/voice 配置
- [#66008](https://github.com/NousResearch/hermes-agent/issues/66008) Desktop "Read aloud" 长回复 15s 超时（回归）
- [#65949](https://github.com/NousResearch/hermes-agent/issues/65949) Google Vertex 在 `hermes doctor` 中不被识别

> ⚠️ **维护者关注建议**：今日共 **10 个 P2 Bug 报告无对应修复 PR**，其中 #65854（卸载误删他包）和 #53491（skill 安全边界）属于数据/安全级别，应优先排期。

---

## 6. 功能请求与路线图信号

按"用户痛点强度 × 是否已有 PR 锚点"评估纳入下一版本的可能性：

### 高概率进入近期路线图

- **Multi-gateway Desktop Tabs** ([#45779](https://github.com/NousResearch/hermes-agent/issues/45779))：多机部署用户的明确诉求，与 Gateway 架构契合，无明显反对意见。
- **`/model` picker 性能优化**（[#65650](https://github.com/NousResearch/hermes-agent/issues/65650) 触发）：用户自定义 providers 启用 `discover_models` 时每次打开 picker 串行重拉 `/v1/models`，约 5s 延迟。可与 [#65481](https://github.com/NousResearch/hermes-agent/issues/65481)（`models_url` 解耦发现端点）合并解决。
- **CLI 卸载加固**（[#65854](https://github.com/NousResearch/hermes-agent/issues/65854)）：数据安全级，必须修复。
- **ACP tool/turn budgets**（[PR #66035](https://github.com/NousResearch/hermes-agent

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-07-17**
**项目：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 今日整体处于**低活跃维护期**，过去 24 小时无任何 PR 合并或关闭，Issue 仅有 1 条关闭、1 条活跃更新。9 条 PR 更新中 **8 条为 dependabot 自动发起的依赖版本升级**，仅有 1 条（PR #3261）为社区贡献的实际功能变更（繁体中文本地化）。社区侧出现一个值得关注的信号：用户从官网下载 ARM64 安装包后启动器缺失的问题（Issue #3260）已被关闭，建议用户关注升级路径。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布。**

---

## 3. 项目进展

⚠️ **今日无 PR 合并或关闭，代码层面无推进。**

值得关注的「等待中」变更：

| 类型 | PR | 说明 |
|------|-----|------|
| 本地化 | [#3261](https://github.com/sipeed/picoclaw/pull/3261) | 新增 zh-TW 繁体中文 locale，统一使用台湾术语 |
| 依赖升级 | [#3262](https://github.com/sipeed/picoclaw/pull/3262) | actions/setup-go v6 → v7 |
| 依赖升级 | [#3263](https://github.com/sipeed/picoclaw/pull/3263) | actions/setup-node v6 → v7 |
| 依赖升级 | [#3238](https://github.com/sipeed/picoclaw/pull/3238) | aws-sdk-go-v2/config 1.32.25 → 1.32.29 |
| 依赖升级 | [#3237](https://github.com/sipeed/picoclaw/pull/3237) | golang.org/x/sync 0.21.0 → 0.22.0 |
| 依赖升级 | [#3236](https://github.com/sipeed/picoclaw/pull/3236) | github/copilot-sdk/go 0.2.0 → 1.0.6 |
| 依赖升级 | [#3235](https://github.com/sipeed/picoclaw/pull/3235) | pion/rtp 1.10.2 → 1.10.3 |

**进度评估**：今日项目功能层面净进展接近于零，依赖升级 PR 累计 7 天以上仍处于「待合并」状态（多数标 stale），暴露出维护节奏放缓的迹象。

---

## 4. 社区热点

### 🔥 最活跃讨论：Issue #3195 — OpenAI GPT 在 NanoKVM 上无法使用
- 链接：[sipeed/picoclaw#3195](https://github.com/sipeed/picoclaw/issues/3195)
- 评论数：**3 条**（今日 24h 内最高）
- 状态：OPEN，已被标记 [stale]
- 作者：rtadams89
- **诉求分析**：用户在 NanoKVM 2.4.0 上部署 PicoClaw 后，按官方文档配置 gpt-5.4 时所有交互均失败。这暴露了「官方文档配置示例」与「实际运行兼容性」之间的脱节——当一个新硬件平台（NanoKVM）上线时，文档没有同步更新验证。

### 🌐 新功能 PR：#3261 — 繁体中文本地化
- 链接：[sipeed/picoclaw#3261](https://github.com/sipeed/picoclaw/pull/3261)
- 作者：PeterDaveHello
- **诉求分析**：作者指出 WebUI 与文档应使用「一致」的台湾术语，特别是在 setup 和 channel 引导场景中。这是 PicoClaw 国际化进程的进一步深化，对台湾用户群体尤为重要。

---

## 5. Bug 与稳定性

### 🐞 高优先级

#### Bug #3260（已关闭）— ARM64 安装包启动器缺失
- 链接：[sipeed/picoclaw#3260](https://github.com/sipeed/picoclaw/issues/3260)
- 状态：**CLOSED**
- 环境：PicoClaw 0.3.1，Raspbian Lite OS (aarch64)，Raspberry Pi 3B
- **描述**：从 picoclaw.io 下载 ARM64 包后，启动器二进制不存在，无法在树莓派上运行。
- **处理结果**：已关闭，建议用户关注 0.3.1+ 之后的官方安装流程。

#### Bug #3195（活跃）— GPT-5.4 在 NanoKVM 默认配置下不可用
- 链接：[sipeed/sipeed/picoclaw#3195](https://github.com/sipeed/picoclaw/issues/3195)
- 状态：OPEN，[stale]
- **严重程度**：中高——影响 NanoKVM 新硬件平台的首用户体验
- **是否有 fix PR**：❌ 无

### 🛠️ 长期存在的修复 PR

| PR | 描述 | 链接 |
|----|------|------|
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | 修复 inline data URL 媒体提取导致的会话历史损坏 bug | 作者 jp39 |
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | 为 `picoclaw agent` 命令新增远程 Pico WebSocket 模式 | 作者 jp39 |

两条 PR 均已 stale，建议维护者优先 review 合并 #3115（属于数据完整性修复，影响所有用户）。

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 落地可能性评估 |
|------|------|----------------|
| 繁体中文本地化 | PR [#3261](https://github.com/sipeed/picoclaw/pull/3261) | **高**——属于新增 locale，不破坏现有接口，社区驱动 |
| `picoclaw agent` 远程 WebSocket 模式 | PR [#3118](https://github.com/sipeed/picoclaw/pull/3118) | **中**——本地行为不变，仅为新增可选模式，合并风险低 |
| Copilot SDK 升级 1.0 | PR [#3236](https://github.com/sipeed/picoclaw/pull/3236) | **中**——跨大版本升级，需关注 API 兼容性 |

**路线图趋势判断**：从 PR 内容看，社区正在向「多语言覆盖 + 远程 Agent 协作」方向探索，但缺乏维护者对这些方向的明确表态或路线图文档。

---

## 7. 用户反馈摘要

**真实用户痛点**：

1. **ARM64 树莓派用户体验断裂**（来自 #3260）
   - 用户从官网下载看似官方的二进制，但实际无法在 aarch64 平台启动
   - 这暗示 **官方发布流水线可能未覆盖 ARM64**，或文档与分发产物不一致

2. **NanoKVM 新平台配置文档与实际行为脱节**（来自 #3195）
   - 用户严格遵循文档配置 gpt-5.4，但交互失败
   - 表明文档对新平台/新模型组合的验证流程可能不充分

3. **会话历史数据损坏风险**（来自 #3115）
   - 通用工具（如 `read_file`、`exec`）的纯文本输出中若包含 `data:image/...;base64,...` 字符串，会被误识别为真实媒体附件，导致历史污染
   - 影响所有用户的数据完整性

**满意侧**：繁体中文 PR #3261 的作者主动从「术语一致性」角度贡献，反映社区对项目本地化质量有较高期待和参与意愿。

---

## 8. 待处理积压

> 以下 Issue / PR 已标 stale 或长时间未获响应，建议维护者关注：

### 🔴 长期未响应（超过 30 天）

| 编号 | 类型 | 标题 | 创建日期 |
|------|------|------|----------|
| [#3118](https://github.com/sipeed/picoclaw/pull/3118) | PR | Add remote Pico WebSocket mode to picoclaw agent | 2026-06-12 |
| [#3115](https://github.com/sipeed/picoclaw/pull/3115) | PR | Fix inline data URL media extraction | 2026-06-12 |
| [#3195](https://github.com/sipeed/picoclaw/issues/3195) | Issue | OpenAI GPT does not work on NanoKVM | 2026-06-30 |

### 🟡 依赖升级积压（均已标 stale）

| PR | 升级内容 | 创建日期 |
|----|----------|----------|
| [#3235](https://github.com/sipeed/picoclaw/pull/3235) | pion/rtp | 2026-07-09 |
| [#3236](https://github.com/sipeed/picoclaw/pull/3236) | copilot-sdk/go | 2026-07-09 |
| [#3237](https://github.com/sipeed/picoclaw/pull/3237) | golang.org/x/sync | 2026-07-09 |
| [#3238](https://github.com/sipeed/picoclaw/pull/3238) | aws-sdk-go-v2/config | 2026-07-09 |

**维护建议**：
1. 优先 review **#3115**（数据完整性修复，影响面广）
2. 集中合并 **dependabot PRs**（已积压 1 周以上，安全风险递增）
3. 回应 **#3195** 提供 NanoKVM 配置 workaround，避免新用户首次体验失败

---

## 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 条非依赖 PR，无合并 |
| 维护响应 | ⭐⭐☆☆☆ | 多个 PR/Issue 标 stale 仍未回应 |
| 社区贡献 | ⭐⭐⭐☆☆ | 有持续 PR 流入（含本地化） |
| 稳定性 | ⭐⭐⭐☆☆ | 有数据损坏风险 PR 未合并，但无新增崩溃 |
| 路线清晰度 | ⭐⭐☆☆☆ | 无近期版本发布，缺乏公开路线图 |

---

*报告生成时间：2026-07-17 · 数据源：GitHub REST API · 覆盖窗口：2026-07-16 ~ 2026-07-17*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-07-17

> 数据时间窗：过去 24 小时｜仓库：[nanocoai/nanoclaw](https://github.com/nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 仓库在过去 24 小时继续保持**高活跃度**：4 条 Issue 更新（3 活跃/1 关闭）、19 条 PR 更新（16 待合并/3 已关闭），无新版本发布。今日核心议题集中在三个方向——**WhatsApp 通道身份与注册键的修复收尾**（#2911→#2913→#3070 一条完整修复链）、**Channel Adapter 启动失败的"吞错"高危稳定性问题**（#3064 + #3067）、以及**Claude↔Codex 配额自动回退特性**的两条并行 PR 推进（#3069、#3057）。此外还出现一项**安全公告级修复**：loopback webhook 缺少身份验证（CWE-306 / GHSA-h9g4-589h-68xv），#3065 已就位等待评审。整体健康度良好，bug 修复链路清晰，但出现两条配额回退方案的并行 PR（#3069 与 #3057），需要维护者尽快决断合并方向，避免分叉。

---

## 2. 版本发布

⚠️ **本周期无新版本发布**。当前在制品主要来自 PR #2798（v2.1.17 CHANGELOG 扩充，仍 OPEN）。

---

## 3. 项目进展（已关闭/合并）

| PR | 类型 | 摘要 |
|---|---|---|
| [#2913](https://github.com/nanocoai/nanoclaw/pull/2913) | Fix | 给 WhatsApp Cloud bridge 注册独立的 `whatsapp-cloud` instance key，修复与 native Baileys 同键冲突、互相"吃掉"消息的 Bug |
| [#2914](https://github.com/nanocoai/nanoclaw/pull/2914) | Docs | 同步 #2911 的修复，新增 webhook 路由文档与状态命名空间迁移说明 |
| [#3061](https://github.com/nanocoai/nanoclaw/pull/3061) | Custom | 未通过贡献指南校验，已关闭 |

📈 **进展评估**：WhatsApp Cloud 与 native Baileys 双通道并存的关键 Bug（#2911）今日完成闭环——代码与文档同步合入 `channels` 分支（commit `9e14cd0c`）。这是 v2 系列多通道战略的重要稳定性里程碑。

---

## 4. 社区热点

| 议题 | 类型 | 评论数 | 关注点 |
|---|---|---|---|
| [#3016](https://github.com/nanocoai/nanoclaw/issues/3016) `rate_limit_event` 全部被记为 quota error | Bug | 2 | 噪声告警严重影响可观测性 |
| [#2916](https://github.com/nanocoai/nanoclaw/issues/2916) "hi there" | 无内容 | 2 | 典型低信号 Issue，可能为新手误开 |

**诉求分析**：
- **#3016** 反映的是日志语义被破坏——自 #2965 后，`retryable=false` 的分类粒度不够细，导致即使状态为 `allowed`，运行一周就产生 82 条伪错误。这关系到**生产环境的告警可信度**，已具备合并价值。
- **#2916** 无实质内容，建议维护者标记为 `question/needs-info` 或直接关闭以维护仓库整洁度。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高危 · Channel 启动失败被静默吞掉
- **Issue**：[#3064](https://github.com/nanocoai/nanoclaw/issues/3064)（新开）
- **症状**：`initChannelAdapters()` 仅 catch + log 而非抛出，宿主仍打印 `NanoClaw running`，但该通道静默失活；`KeepAlive` 无法恢复。
- **Fix PR**：[#3067](https://github.com/nanocoai/nanoclaw/pull/3067)（待合并）— 将失败传播为 `ChannelAdapterStartupError`，进程非零退出。
- **关联**：与 #3064 同一日产生，已具备快速合并条件。

### 🟠 中危 · Rate limit 日志误判
- **Issue**：[#3016](https://github.com/nanocoai/nanoclaw/issues/3016)
- **症状**：`[poll-loop] Error: Rate limit (retryable: false, quota)` 在正常轮询中被无差别打出（每周 82 条）。
- **Fix 状态**：⚠️ **暂无对应 PR**，建议维护者跟进。

### 🟡 已闭环 · WhatsApp 通道键冲突
- **Issue**：[#2911](https://github.com/nanocoai/nanoclaw/issues/2911)（已 CLOSED）
- **Fix PR**：[#2913](https://github.com/nanocoai/nanoclaw/pull/2913)（已合并）+ [#2914](https://github.com/nanocoai/nanoclaw/pull/2914)（已合并）。

### 🟡 中危 · 容器 PID 1 不回收僵尸进程
- **PR**：[#3060](https://github.com/nanocoai/nanoclaw/pull/3060) — 给 `buildContainerArgs` 加 `--init`，并修正 `docs/build-and-runtime.md` 的相关陈述。**已具备合并条件，建议优先审。**

### 🟢 已闭环 · WhatsApp 发送者身份在不同路径下分歧
- **PR**：[#3070](https://github.com/nanocoai/nanoclaw/pull/3070) — Baileys 输出 `15551234567@s.whatsapp.net`、Cloud 输出裸 E.164，造成同一手机号对应两个 user ID。**修复 PR 已就绪。**

---

## 6. 功能请求与路线图信号

### 🚀 Claude↔Codex 配额自动回退（高优先级特性）
并行出现两条实现方案，**需维护者尽快决断**：

| 方案 | 作者 | 设计差异 |
|---|---|---|
| [#3069](https://github.com/nanocoai/nanoclaw/pull/3069) | salvodmt | host-orchestrated，区分"真配额耗尽"与瞬时限流；附 `docs/fallback.md` 完整设计文档 |
| [#3057](https://github.com/nanocoai/nanoclaw/pull/3057) | elia-ben-cnaan | per-agent-group 粒度回退；附带 Telegram/WhatsApp 通道适配器与 pilot 激活模块 |

👉 **路线图信号**：这是 v2.x 阶段最具用户价值的特性之一，将解决生产环境 Claude 配额耗尽导致 agent 整体失效的核心痛点。**强烈建议维护者 24–48h 内做出合并决策。**

### 🚀 Dial 通道适配器（新通道）
- **PR**：[#3041](https://github.com/nanocoai/nanoclaw/pull/3041) — 适配器本体（SMS + AI 语音通话）
- **PR**：[#3050](https://github.com/nanocoai/nanoclaw/pull/3050) — 接入 setup 向导与 channel picker，使用 `runChannelSkill` 模型
- **路线图信号**：作为 v2 的第 N 个 channel 适配器，与 #2913 修复共同验证了 NanoClaw 的多通道扩展框架已进入稳定阶段。

### 🔐 安全加固
- **PR**：[#3065](https://github.com/nanocoai/nanoclaw/pull/3065) — 修复 `src/channels/chat-sdk-bridge.ts` 中转发网关 webhook 缺少鉴权的 CWE-306 漏洞（GHSA-h9g4-589h-68xv）。
- **PR**：[#3066](https://github.com/nanocoai/nanoclaw/pull/3066) — 跟进 #2783 的 SECURITY.md 文档精度整改。
- **路线图信号**：可考虑与下一版本一起作为 security patch 发布。

### 🧹 DX / 工程化
- **PR**：[#3063](https://github.com/nanocoai/nanoclaw/pull/3063) — 清理 CHANGELOG 中重复的 `## [Unreleased]` 条目。
- **PR**：[#3040](https://github.com/nanocoai/nanoclaw/pull/3040) — 在统一生命周期契约下统一 approval holds。
- **PR**：[#3068](https://github.com/nanocoai/nanoclaw/pull/3068) — 修复计划任务跨 session 可见性与错误信息清晰度（关联 #2992）。

### 💬 Signal 体验
- **PR**：[#3062](https://github.com/nanocoai/nanoclaw/pull/3062) — Signal 适配器发送 read receipts
- **PR**：[#2695](https://github.com/nanocoai/nanoclaw/pull/2695) — Signal 入站图片 base64 暂存（**已超一个月未合并，见第 8 节**）

---

## 7. 用户反馈摘要

从今日活跃 Issue 评论中可提炼：

- **可观测性焦虑**（#3016）：用户明确指出"每周 82 条伪错误"会污染日志、触发误告警；暗示运维团队已为此**单独建立过滤规则**——这是真实生产痛点。
- **多通道策略已落地**（#2911）：用户同时使用 Baileys 与 Cloud 通道，验证了多通道共存是 v2 的高频场景。
- **健康检查失真**（#3064）：用户反馈"宿主报 healthy 但实际聋哑"——这是 SRE 场景的典型"沉默失败"反模式。
- **Signal 用户体验**（#3062、#2695）：两条 PR 共同反映用户希望 Signal 通道在**已读回执**与**图片附件可读性**上对齐 WhatsApp/Telegram 体验。

---

## 8. 待处理积压

| 编号 | 类型 | 停留天数 | 说明 |
|---|---|---|---|
| [#2695](https://github.com/nanocoai/nanoclaw/pull/2695) | Fix (Signal 图片) | **41 天**（2026-06-06 起） | 涉及容器挂载路径，属于真实用户体验问题 |
| [#2798](https://github.com/nanocoai/nanoclaw/pull/2798) | Docs (v2.1.17 changelog) | **30 天**（2026-06-17 起） | 阻塞 v2.1.17 的发布说明 |
| [#2851](https://github.com/nanocoai/nanoclaw/pull/2851) | Test fix (poll loops) | **23 天**（2026-06-24 起） | 测试可靠性问题，影响 CI |
| [#2916](https://github.com/nanocoai/nanoclaw/issues/2916) | "hi" Issue | 15 天 | 无实质内容，建议关闭 |
| [#3040](https://github.com/nanocoai/nanoclaw/pull/3040) | Refactor (approval lifecycle) | 3 天 | 核心团队 PR，评审优先级建议提升 |

🔔 **维护者建议**：
1. 在下次维护窗口前对 **#2695 / #2798 / #2851** 三条做一次集中清理；
2. 立即就 **#3069 与 #3057** 配额回退做出**合并/取舍决策**，避免作者投入被浪费；
3. 将 **#3065（安全）** 设为本期"必合并"项，配额回退择期。

---

## 📊 项目健康度速览

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活跃 | 4 | 正常 |
| 24h PR 活跃 | 19 | 高 |
| 安全响应 | CWE-306 漏洞已配 fix | ✅ 良好 |
| 文档同步 | 修复 PR 同步带文档 PR（#2914 跟 #2913） | ✅ 工程规范 |
| 合并速度 | 3/19（16% 当日合并率） | ⚠️ 中等，建议提速 |
| 长期积压 | 3 条 > 20 天 PR | ⚠️ 需关注 |
| 路线图清晰度 | 配额回出现双方案 | ⚠️ 需裁决 |

> 整体健康度：**B+**，方向明确，工程规范良好；瓶颈在评审吞吐与并行方案协调。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**日期：2026-07-17**

---

## 1. 今日速览

NullClaw 项目今日活跃度处于**低位**状态。过去 24 小时内仅有 1 条 Issue 更新（活跃未关闭），0 条 PR 更新，0 个新版本发布。其中唯一活跃的 Issue #976 报告了一个严重的稳定性缺陷——在 aarch64 Linux 平台上运行 v2026.5.29 版本时，所有入站 Telegram 消息均触发 SIGSEGV，导致 `nullclaw gateway` 在 systemd `Restart=always` 策略下陷入 crash-loop，用户消息被静默丢弃。整体而言，项目当日缺乏代码层面的推进，社区反馈通道仅由单一关键 Bug 占据，**维护响应窗口亟待关注**。

---

## 2. 版本发布

**无新版本发布。**

当前最新稳定版本仍为 Issue 中被引用的 **v2026.5.29**。建议关注后续是否针对 aarch64 Telegram 集成路径发布补丁版本（如 v2026.5.30 或 v2026.6.x）。

---

## 3. 项目进展

**今日无 PR 合并/关闭记录，代码层面零推进。**

在过去 24 小时内，仓库未发生任何 Pull Request 的创建、合并或关闭操作。这与 Issue #976 报告的严重缺陷形成反差——一个导致服务完全不可用的 crash bug 尚未触发任何修复 PR 流入，项目代码健康度今日呈停滞状态。

---

## 4. 社区热点

### 🔥 热点 #1：Telegram 入站消息 SIGSEGV（Issue #976）

- **链接**：[Issue #976](https://github.com/nullclaw/nullclaw/issues/976)
- **作者**：wonhotoss
- **评论数**：1 | **👍**：0
- **创建/更新时间**：2026-07-16

**诉求分析**：报告者在 aarch64 Linux 平台（推断为 ARM 服务器/边缘设备/NanoPC 类硬件）部署 NullClaw 网关并通过 Telegram 集成接收消息时，遭遇**必现**的 SIGSEGV。问题严重性体现在三个层面：
1. **必现性**：每一条入站消息均触发崩溃，无任何规避路径；
2. **不可恢复性**：systemd 自动重启导致消息静默丢失，用户体验上呈现"已发送无响应"的假象；
3. **栈空间假设错误**：作者定位到根因为入站 worker 线程使用了 ~512KB 的栈，而 aarch64 默认栈空间不足以承载，触发栈溢出。

社区参与度目前偏低（1 条评论、0 个 👍），但鉴于缺陷的严重等级与平台特殊性（影响 ARM 生态用户），实际影响面可能远超当前讨论热度。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 影响范围 | 是否有 Fix PR |
|---------|-------|------|---------|--------------|
| 🔴 **Critical** | [#976](https://github.com/nullclaw/nullclaw/issues/976) | aarch64 Linux 上 Telegram 入站消息必现 SIGSEGV，crash-loop 导致消息全部丢失 | 所有运行 v2026.5.29 + Telegram 集成 + aarch64 的生产部署 | ❌ 无 |

**根因分析（基于 Issue 描述）**：
- 入站 worker 线程栈大小硬编码/默认约为 512KB；
- 在 x86_64 上该值通常安全，但 aarch64 平台（如 glibc/aarch64 默认栈布局）下不足以容纳消息处理调用链，导致栈溢出与未定义行为；
- 服务管理器 `Restart=always` 策略将瞬态崩溃放大为持续性可用性故障。

**修复建议方向**：
1. 显式增大 worker 线程栈（如通过 `pthread_attr_setstacksize` 设置 ≥ 2MB）；
2. 增加启动期栈探测/警告日志；
3. 补充 aarch64 CI 矩阵以防止类似回归。

---

## 6. 功能请求与路线图信号

**今日无新功能请求提出。**

由于仅有一条 Bug 类 Issue 进入活跃状态，无法从社区反馈中提取明确的新功能需求或路线图信号。建议维护者主动梳理 backlog 并与社区同步 v2026.6 / v2026.7 计划。

---

## 7. 用户反馈摘要

从 Issue #976 的 1 条评论与描述中可提炼以下用户侧信息：

- **使用场景**：用户将 NullClaw 部署为 **systemd 服务化的长期运行网关**，依赖 Telegram 作为入站通道，可能是将其用于个人 AI 助手/通知/自动化场景。
- **部署平台**：**aarch64 Linux**，暗示 NullClaw 在 ARM 服务器、Raspberry Pi 类设备、或云端 ARM 实例（如 AWS Graviton）上有用户基础——这与项目定位"AI 智能体"边缘部署方向一致。
- **痛点**：
  - **静默丢消息**：崩溃被 systemd 重启掩盖，用户最初难以察觉是 Bug 而非网络问题；
  - **平台差异未文档化**：v2026.5.29 Release Notes 中未提及 aarch64 兼容性限制或最低栈要求。
- **满意度**：未观察到正向反馈。

> 数据局限：仅 1 条 Issue 与 1 条评论，样本不足以形成趋势性判断。

---

## 8. 待处理积压

| 类型 | 编号 | 状态 | 紧急度 | 备注 |
|------|------|------|--------|------|
| 🐛 Bug | [#976](https://github.com/nullclaw/nullclaw/issues/976) | OPEN（活跃） | 🔴 **P0** | 必现崩溃，无修复 PR，距创建不足 24 小时但属 Critical 级 |

**维护者提醒**：
- Issue #976 虽创建时间短（< 24 小时），但其 Critical 严重度足以要求**当日响应**：至少应给出确认回复、临时缓解建议（如回退版本、关闭 Telegram 集成），并指派负责人。
- 当前 PR 通道完全静默，建议主动复现并提交修复 PR，以避免社区对项目维护活跃度产生负面预期。

---

## 📊 项目健康度评分（今日）

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码推进 | ⭐☆☆☆☆ | 0 PR |
| Bug 响应 | ⭐⭐☆☆☆ | 有 Critical Issue 但无修复 PR |
| 发布节奏 | ⭐⭐☆☆☆ | 无新版本 |
| 社区互动 | ⭐⭐☆☆☆ | 仅 1 条 Issue 讨论 |
| 整体 | ⚠️ **需关注** | 单一 Critical Bug 未响应，建议 24h 内介入 |

---

*报告生成时间：2026-07-17 · 数据来源：NullClaw GitHub 仓库公开数据*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 — 2026-07-17

> 数据范围：近 24 小时 GitHub 公开活动
> 仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 今天呈现"高强度代码活动 + 中等量 Bug 反馈"的典型健康运行节奏：过去 24 小时累计 **18 条 Issue 更新** 与 **39 条 PR 更新**，其中 **11 条 PR 已合并/关闭、3 条 Issue 已关闭**。主线推进集中在 Reborn 重构（拆分 god-crate、删除 Slack epoch 状态机）、WebUI v2 收尾（onboarding 拆分、Telegram 渠道、TUI）以及一次重要的 **OAuth 回滚**：#6130 被合并后又被 #6166 完整 revert，#6169 正在重新落地。整体活跃度评估：**偏高**。

---

## 2. 版本发布

**今日无新版本发布。** 值得注意的是待合并的 release PR [#5598](https://github.com/nearai/ironclaw/pull/5598)（由 `ironclaw-ci[bot]` 自动维护，仍 OPEN）已描述了下一批候选版本：

- `ironclaw_common`: 0.4.2 → 0.5.0（**API breaking**）
- `ironclaw_safety`: 0.2.2 → 0.2.3（兼容）
- `ironclaw_skills`: 0.3.0 → 0.4.0（**API breaking**）
- `ironclaw`: 0.24.0 → 0.29.1

合并该 PR 之前需重点评估 `ironclaw_common` 与 `ironclaw_skills` 的破坏性变更对下游 Reborn 路径的连锁影响。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#6130](https://github.com/nearai/ironclaw/pull/6130) | fix(auth): OAuth flow-lifecycle hygiene | **已合并 → 已被 #6166 完整 revert** | 修复集群性 OAuth 流程缺陷，但需重审 |
| [#6166](https://github.com/nearai/ironclaw/pull/6166) | OAuth Reversion | **已关闭** | 仓库回到 `cbc84d6f` 之前，OAuth 流程恢复到旧行为 |
| [#6111](https://github.com/nearai/ironclaw/pull/6111) | WebChat v2 模型选择 + 单次运行 usage/cost | **已合并** | 补齐 WebChat v2 与 OpenAI 兼容 API 的能力差距 |
| [#6114](https://github.com/nearai/ironclaw/pull/6114) | 共享 OAuth-flow 一致性测试套件 | **已关闭** | 弥合 in-memory 与 filesystem AuthProductServices 的测试断层 |
| [#6115](https://github.com/nearai/ironclaw/pull/6115) | Dependabot：25 个依赖更新 | **已关闭** | 常规维护，含 `agent-client-protocol 0.10.4 → 1.2.0` |
| [#5565](https://github.com/nearai/ironclaw/pull/5565) | onboarding/NUX demo | **已关闭** | 拆分为 [#6162](https://github.com/nearai/ironclaw/pull/6162) + [#6163](https://github.com/nearai/ironclaw/pull/6163) 双 PR |

**今日净推进**：WebChat v2 能力补齐 + 一致性测试收敛 + 依赖刷新 + onboarding 拆分，**但 OAuth 流程改进整体回退**为原地踏步（不算负向，因为是"先回到稳定态再重新落地"的工程权衡）。

---

## 4. 社区热点

按 Issue 评论数排序：

- **[#6168](https://github.com/nearai/ironclaw/issues/6168)** Shrink the `ironclaw_reborn_composition` god-crate (24% → ~10%) — 2 评论
  - 作者 ilblackdragon 提出"crate-minimal carve-out"重构策略，目标把 assembly-only 的 composition crate 从工作区最大 crate 缩到 10% 左右。
- **[#6155](https://github.com/nearai/ironclaw/issues/6155)** 失败运行后无响应 — 2 评论（bug_bash_P2）
- **[#6126](https://github.com/nearai/ironclaw/issues/6126)** 新聊天首条消息无加载/流式状态 — 2 评论（bug_bash_P3）
- **[#6127](https://github.com/nearai/ironclaw/issues/6127)** 首次执行 routine 错误显示"上一运行仍在进行"— 2 评论（bug_bash_P3）
- **[#4471](https://github.com/nearai/ironclaw/issues/4471)** Track Reborn runtime decomposition — 1 评论（**已开放 43 天**，但仍在更新）
- **[#6158](https://github.com/nearai/ironclaw/issues/6158)** Add zh-TW Traditional Chinese localization — 1 评论
- **[#6164](https://github.com/nearai/ironclaw/issues/6164)** Slack connection epoch（已关闭）— 1 评论

**热点诉求分析**：今天的社区声音集中在三类——(a) **架构健康**：god-crate 收缩和 runtime 分解是 ilblackdragon 与 henrypark133 持续推动的 Reborn 长期主题；(b) **UI 体验一致性**：3 条 bug_bash Issue 集中在"运行态反馈缺失/错误"；(c) **国际化缺口**：zh-TW 用户被强制回退到 zh-CN 或英文是真实痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 修复 PR |
|---|---|---|---|
| **P2** | [#6155](https://github.com/nearai/ironclaw/issues/6155) | 模型提供方不可用后，聊天进入"完全无响应"状态，无法恢复 | ❌ 暂未指派 fix PR |
| **安全** | [#6170](https://github.com/nearai/ironclaw/issues/6170) | 多租户实例下 WebUI shell 命令可越权访问文件系统（仅限 workspace？需澄清） | ❌ 暂未指派 fix PR |
| **P3** | [#6127](https://github.com/nearai/ironclaw/issues/6127) | routine 首次运行误显"Previous run still in progress" | ❌ 暂未指派 fix PR |
| **P3** | [#6126](https://github.com/nearai/ironclaw/issues/6126) | 新聊天首条消息无任何 loading/streaming 反馈 | ❌ 暂未指派 fix PR |
| **P3** | [#5602](https://github.com/nearai/ironclaw/issues/5602) | Slack 连接后 DM 仅返回 pairing code，无法完成握手 | ❌ 暂未指派 fix PR |
| **P3** | [#6149](https://github.com/nearai/ironclaw/issues/6149) | Workspace 文件下载失败被静默吞掉，无用户反馈 | ❌ 暂未指派 fix PR |
| **中** | [#6161](https://github.com/nearai/ironclaw/pull/6161)（fix PR） | WASM 能力返回纯文本时整体调用因 `OutputDecode` 失败 | ✅ [PR #6161](https://github.com/nearai/ironclaw/pull/6161) 待合并 |
| **回归** | [#6130](https://github.com/nearai/ironclaw/pull/6130) | OAuth 流程修复本身成为新问题源，已被 revert | ✅ 由 [#6166](https://github.com/nearai/ironclaw/pull/6166) 回退，正在 [#6169](https://github.com/nearai/ironclaw/pull/6169) 重做 |

**稳定性观察**：bug_bash 系列 Issue（#6155/#6126/#6127/#6149/#6146/#6145）大多来自同一作者 joe-rlo / italic-jinxin 的系统化走查，呈现明显的"WebUI v2 反馈层未完工"模式；安全 Issue [#6170](https://github.com/nearai/ironclaw/issues/6170) 应优先于功能 PR 处理。

---

## 6. 功能请求与路线图信号

| 请求 | Issue | 已有/相关 PR | 进入下一版本的概率 |
|---|---|---|---|
| **zh-TW 繁体中文本地化** | [#6158](https://github.com/nearai/ironclaw/issues/6158) | 无 | 高（变更局部，但涉及 UI 完整翻译） |
| **多 CPU 架构发布构建** | [#6160](https://github.com/nearai/ironclaw/issues/6160) | 无 | 高（CI 改动，匹配 Reborn release pipeline 目标） |
| **Appearance 页面主题切换控件** | [#6146](https://github.com/nearai/ironclaw/issues/6146) | 无 | 高（后端已支持，仅缺 UI） |
| **Toast 生命周期 / 可达性优化** | [#6145](https://github.com/nearai/ironclaw/issues/6145) | 无 | 中（需新交互逻辑） |
| **CLI 从 `ironclaw-reborn` 升级为 `ironclaw`** | [#6143](https://github.com/nearai/ironclaw/issues/6143) | 无 | 高（明确是 v1 runtime 退役后的产品命名收尾） |
| **WebUI 从 `/v2` 移至根路径** | [#6142](https://github.com/nearai/ironclaw/issues/6142) | 无 | 高（与 #6143 同源，Reborn GA 前的最后一公里） |
| **Telegram 渠道扩展** | （无对应 issue） | ✅ [#6159](https://github.com/nearai/ironclaw/pull/6159)（待合并） | 高（PR 已就绪，规模化模板化扩展架构） |
| **背景服务安装（launchd / systemd）+ TUI** | （隐含） | ✅ [#6172](https://github.com/nearai/ironclaw/pull/6172) + [#6157](https://github.com/nearai/ironclaw/pull/6157) | 高（PR 已就绪） |
| **GitHub CI triage 工具 (`github.get_job_logs`)** | （无对应 issue） | ✅ [#6140](https://github.com/nearai/ironclaw/pull/6140) | 中（依赖 SSRF-safe egress 落地） |

**路线图信号**：Reborn GA 的"最后一公里"已经显式化——CLI 重命名、WebUI 根路径、release 路径收口都在 PR/Issue 列表中；扩展架构（[#6116](https://github.com/nearai/ironclaw/pull/6116) "unified generic extension runtime"）是另一条主线，Telegram 是首个落地渠道。

---

## 7. 用户反馈摘要

从 Issue 描述与评论中提炼的真实用户声音：

- **可恢复性缺失（严重）**：运行失败后整个会话"卡死"，用户既看不到错误也没有重试入口。Joe-rlo 在 [#6155](https://github.com/nearai/ironclaw/issues/6155) 指出："sending a follow-up message...does not produce any assistant response, leaving the chat stuck"。这是 AI 助手的可用性红线之一。
- **首屏体验不完整（高频）**：Joe-rlo 在 [#6126](https://github.com/nearai/ironclaw/issues/6126) 描述新聊天"appears frozen until the full response arrives"，对 WebChat v2 这种消费级体验是显著负面信号。
- **状态指示器与真实状态不一致**：[#6127](https://github.com/nearai/ironclaw/issues/6127) 揭示 UI 文案与底层数据脱节——"Previous run still in progress" 但 LAST COMPLETED 明确显示无历史运行，暴露出 store/component 同步逻辑漏洞。
- **国际化"半成品"感受**：PeterDaveHello 在 [#6158](https://github.com/nearai/ironclaw/issues/6158) 指出繁体中文用户浏览器命中 zh-TW 后会回退到简体或英文，体验断裂。
- **安全/多租户信任**：Sergeiest 在 [#6170](https://github.com/nearai/ironclaw/issues/6170) 警示 shell 命令无沙箱隔离，运维侧应尽快给出"白名单 + workspace 强制 chroot"或"按角色禁用 shell"二选一。
- **Slack DM 连接体验断裂**：Matiasbenary 在 [#5602](https://github.com

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-07-17**

---

## 1. 今日速览

LobsterAI 今日活跃度处于**中等偏高**水平，项目进入 **2026.7.16 版本收尾阶段**——Release PR #2344 已关闭，标志着新一轮版本合入完成。过去 24 小时内共处理 17 个 PR（14 个关闭），其中相当一部分集中在 `cowork` 模块（steer 队列、附件、滚动行为、自动压缩重试等），可见团队正在密集打磨协作体验。Issues 端活跃度偏低（仅 3 条），且多为 4 月份遗留的 stale 议题，缺乏新问题流入。整体而言项目处于**版本封版 + 协作模块深化迭代**的节奏，代码侧节奏快但社区端略显沉寂。

---

## 2. 版本发布

无新增 Release 标签。

但 PR [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) `Release/2026.7.16` 已在今日关闭，标记覆盖 renderer / docs / main / cowork 四个区域，**强烈暗示 2026.7.16 版本正在合入主干**，建议关注上游 Release 页面以确认正式发布状态。

---

## 3. 项目进展

今日合并/关闭的 PR 中包含多项实质性功能推进：

| PR | 主题 | 价值 |
|---|---|---|
| [#2344](https://github.com/netease-youdao/LobsterAI/pull/2344) | Release/2026.7.16 | 版本合入 |
| [#2292](https://github.com/netease-youdao/LobsterAI/pull/2292) | 稳定 steer follow-up 路由 | 引入 Codex 风格的队列式 follow-up，提升多轮协作可控性 |
| [#2300](https://github.com/netease-youdao/LobsterAI/pull/2300) | steer 队列支持附件 | 排队消息可携带文件/图片/选中文本，提升多模态交互能力 |
| [#2313](https://github.com/netease-youdao/LobsterAI/pull/2313) | 仅提交选中的 queued steer | 保证 FIFO 处理，修复选中态错乱 |
| [#2307](https://github.com/netease-youdao/LobsterAI/pull/2307) | 细化 prompt 模式与 steer 处理 | 移除 Plan Mode 开关、优化 Goal/Steer 状态栏布局 |
| [#2310](https://github.com/netease-youdao/LobsterAI/pull/2310) | 文件夹上下文附件 | 支持粘贴/拖入本地文件夹作为 prompt 附件 |
| [#2302](https://github.com/netease-youdao/LobsterAI/pull/2302) | Windows 专属品牌标题栏 | Windows 平台体验升级，含原生窗口控制 |
| [#2343](https://github.com/netease-youdao/LobsterAI/pull/2343) | 剪贴板附件提取可测试化 | 代码质量与可测性提升 |
| [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) | 更新卡片头部对齐 | 窄侧栏下的响应式优化 |
| [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) | 防止对话滚动跳变 | 流式输出时尊重用户手动滚动 |
| [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | 清理停滞的压缩重试维护 | 修复上下文压缩卡死的回归问题 |

**整体评估**：Cowork 模块的 steer 队列体系已基本成型（路由 → 附件 → 选中提交 → 状态细化形成闭环），同时 Windows 平台原生体验迎来重大升级。项目在「协作流控制」与「跨平台一致性」两条主线上有明显推进。

---

## 4. 社区热点

今日 Issues 端活跃度有限，但有两个关联 PR 与 Issue 形成了明确闭环：

- **键盘快捷键可视化（kdb 提示）**
  - Issue [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) ↔ PR [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318)
  - 诉求：用户难以发现 Ctrl+N / Ctrl+F 等快捷键，建议用 `<kbd>` 徽标显示。
- **会话列表骨架屏**
  - Issue [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) ↔ PR [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320)
  - 诉求：启动时区分「加载中」与「无会话」，避免空状态闪烁。

**诉求分析**：两条均聚焦**新用户的发现成本**与**加载态的语义清晰度**，属于体验层面的精细化打磨。两者 PR 已开放但仍标记 stale，反映长期未合并进入主干，建议维护者尽快审阅。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | PR | 状态 |
|---|---|---|---|
| 🟠 中 | 设置页切换 tab 时 cowork 内存编辑器/模型测试 modal 未卸载，遮罩拦截点击导致 UI 看似只读 | [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) | 待合并 |
| 🟡 低 | 权限弹窗无法用 ESC 关闭 | [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) | 已关闭（含修复） |
| 🟡 低 | 计划任务创建/更新未做重名校验 | [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) | 已关闭（含修复） |
| 🟢 已修 | 对话流式输出时自动滚动覆盖用户手动滚动 | [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) | 已关闭 |
| 🟢 已修 | 上下文自动压缩重试无后续流时维护不清理 | [#2289](https://github.com/netease-youdao/LobsterAI/pull/2289) | 已关闭 |
| 🟢 已修 | 自定义 agent 删除按钮显示英文 "delete" | [#1361](https://github.com/netease-youdao/LobsterAI/issues/1361) | Issue 已关闭 |

**评估**：今日修复的均为**用户可感知的稳定性与本地化问题**，没有出现崩溃类 P0 报告，项目稳定性处于健康区间。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 进入下一版本可能性 |
|---|---|---|
| 侧边栏按钮显示 kbd 快捷键提示 | [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) | ⚠️ 中等——已开放多月未合 |
| 会话列表骨架屏 | [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) | ⚠️ 中等——同上 |
| 新建任务输入框工具栏增加模型选择器 | [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) | 🟢 高——契合「就近操作」趋势，PR 已就绪 |
| 计划任务重名校验 | [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) | 🟢 高——已含 IPC 结构化错误码与回归测试 |

**信号解读**：用户对**「减少视线与鼠标移动」**（模型选择器就近）与**「加载态语义化」**（骨架屏）的呼声较为一致，建议在下一版本优先纳入 [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364)。

---

## 7. 用户反馈摘要

- **本地化遗漏**（[#1361](https://github.com/netease-youdao/LobsterAI/issues/1361)）：自定义 agent 删除按钮仍显示英文 "delete"，说明 i18n 资源在快速迭代中存在漏网，需补充 CI 兜底扫描。
- **加载体验焦虑**（[#1319](https://github.com/netease-youdao/LobsterAI/issues/1319)）：用户在启动阶段误以为历史记录丢失，反映**「空状态 vs 加载态」的歧义会直接损害信任感**。
- **快捷键发现成本**（[#1317](https://github.com/netease-youdao/LobsterAI/issues/1317)）：用户需要进入设置才能发现 Ctrl+N / Ctrl+F，说明**功能可见性**是新用户引导的关键短板。
- **交互路径过长**（[#1364](https://github.com/netease-youdao/LobsterAI/pull/1364)）：用户希望模型选择器贴近输入框，「Header 模型选择器位置偏远」是高频不满点。

---

## 8. 待处理积压 ⚠️

以下 PR/Issue 已开放 **3 个月以上**（创建于 2026-04-02），至今标记为 `stale`，提醒维护者关注：

- [#1317](https://github.com/netease-youdao/LobsterAI/issues/1317) / [#1318](https://github.com/netease-youdao/LobsterAI/pull/1318) — 快捷键 kbd 提示
- [#1319](https://github.com/netease-youdao/LobsterAI/issues/1319) / [#1320](https://github.com/netease-youdao/LobsterAI/pull/1320) — 会话列表骨架屏
- [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) — 设置页 modal 残留（**涉及遮罩拦截点击，疑似交互阻塞，建议优先合入**）
- [#1362](https://github.com/netease-youdao/LobsterAI/pull/1362) — 权限弹窗 ESC 关闭
- [#1364](https://github.com/netease-youdao/LobsterAI/pull/1364) — 输入框工具栏模型选择器
- [#1367](https://github.com/netease-youdao/LobsterAI/pull/1367) — 计划任务重名校验

**建议**：批量评审以上积压项，多数 PR 已包含完整描述、回归测试与验证步骤，合并风险可控；尤其 [#1321](https://github.com/netease-youdao/LobsterAI/pull/1321) 的 modal 残留问题具有用户可感知的负面体验，应优先处理。

---

*报告生成时间：2026-07-17 | 数据来源：GitHub Issues & Pull Requests*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-07-17** | **数据来源：github.com/moltis-org/moltis**

---

## 1. 今日速览

Moltis 项目在 2026-07-16 至 2026-07-17 期间整体处于**维护者驱动的紧凑迭代期**，活跃度集中在核心维护者 `penso` 一人身上。今日共合并/关闭 3 个 PR，并发布 1 个新版本 `20260716.01`，覆盖 Agent 状态反馈、模型目录扩展与沙盒 UI 修复三个方向。社区侧（Issues）24 小时内无新增交互，外部贡献者参与度低，但合并节奏顺畅、PR 质量较高，说明项目处于健康且可控的演进状态。

---

## 2. 版本发布

### 🚀 v20260716.01 已发布

发布于 2026-07-16，疑似为上述 3 个 PR 的合并发布版。根据变更内容推断，本次版本主要包含：

- **Agent 与沙盒状态反馈增强**：外部 Agent 会话元数据广播、持久化历史恢复、Web session store 合并安全改进、Apple Container 状态支持。
- **模型目录扩充**：新增 Kimi K3 及 Kimi K2.7 Code Highspeed 至 Moonshot / Kimi Code 目录。
- **沙盒 UI 体验修复**：当无真实沙盒后端时，聊天头部正确显示为 direct 模式。
- **E2E 测试覆盖**：新增 Moonshot onboarding 与 unavailable sandbox backend 的端到端测试。

> ⚠️ 由于仓库未提供详细 CHANGELOG，无法确认是否存在破坏性变更或迁移要求，建议关注者在升级前查阅 [Release 页面](https://github.com/moltis-org/moltis/releases/tag/20260716.01)。

---

## 3. 项目进展

今日所有 3 个 PR 均已 CLOSED（合并），项目推进集中在以下三个方向：

### ✅ PR #1155 — Improve agent and sandbox status feedback
🔗 [moltis-org/moltis#1155](https://github.com/moltis-org/moltis/pull/1155)
作者：penso

核心改进：
- 外部 Agent 会话 ID 可用后立即广播会话元数据，提升前端状态可见性。
- Full context 请求中返回持久化的 external-agent 历史，避免状态丢失。
- Web session store 合并逻辑强化，确保多源数据合并安全。
- 将已安装的 external agents 视为可用的 chat backends，扩展产品灵活性。
- 新增 Apple Container 状态支持，扩展沙盒后端生态。

**意义**：该项目进一步将外部 Agent 集成"原生化"，使其在 UI 与状态管理层面与内置后端对等。

### ✅ PR #1156 — Add Kimi K3 provider support
🔗 [moltis-org/moltis#1156](https://github.com/moltis-org/moltis/pull/1156)
作者：penso

核心改进：
- 模型目录中新增 **Kimi K3** 与 **Kimi K2.7 Code Highspeed**。
- 更新 Kimi 模型能力描述、Moonshot reasoning-effort 处理、provider setup defaults、配置模板、文档与 key-help 链接。
- 新增 Moonshot 设置流程的 E2E 验证。

**意义**：紧跟 Moonshot / Kimi 最新模型节奏，特别是 **Kimi K2.7 Code Highspeed** 这种面向代码场景的高速模型，对开发者用户吸引力明显。

### ✅ PR #1154 — fix(web): show direct mode when sandbox is unavailable
🔗 [moltis-org/moltis#1154](https://github.com/moltis-org/moltis/pull/1154)
作者：penso

核心改进：
- 当无真实沙盒后端时，聊天头部沙盒开关正确显示为 "direct" 而非误显示为 "sandboxed"。
- 仅当存在非隔离 fallback 执行环境时，禁用沙盒开关与沙盒镜像选择器。
- 新增 unavailable sandbox backend 聊天头部的 E2E 覆盖。

**意义**：修复了 UX 上的"误导性显示"问题，提升非沙盒环境下用户对当前执行模式的可信度。

> 📈 **整体评估**：项目在 24 小时内完成了 Agent 架构、新模型集成与 UX 修复三条战线的工作，演进效率较高；但贡献者高度集中于单一维护者，存在 bus factor 风险。

---

## 4. 社区热点

今日 Issues 与 PRs 评论区均无显著互动（评论数均为 0，点赞数为 0），无法识别传统意义上的"社区热点"。

- PR 互动度最高者：[#1155](https://github.com/moltis-org/moltis/pull/1155)（功能复杂度最高，涉及多端状态同步）。
- 所有 PR 均由同一作者 `penso` 提交并快速闭环，外部评审参与度极低。

> 建议：维护者可考虑在重大 PR 中主动 `@` 标注其他协作者或社区 reviewer，以提升代码可见性与外部参与感。

---

## 5. Bug 与稳定性

| 严重度 | Bug 描述 | 关联 Fix | 状态 |
|--------|----------|----------|------|
| 中 | Web UI 在无沙盒后端时仍显示"sandboxed"模式，造成用户对当前执行隔离级别的误解 | [PR #1154](https://github.com/moltis-org/moltis/pull/1154) | ✅ 已修复并合并 |

**稳定性评估**：今日无新报告的崩溃或回归问题；唯一一项 UI 误导性问题已在同一日闭环修复，体现了良好的响应速度。

---

## 6. 功能请求与路线图信号

由于今日无新增 Issues，路线图信号主要从已合并的 PR 中推断：

| 方向 | 信号 | 来源 |
|------|------|------|
| 外部 Agent 一等公民化 | 已安装 external agents 被视为 chat backends | [PR #1155](https://github.com/moltis-org/moltis/pull/1155) |
| 多沙盒后端支持 | Apple Container 状态接入 | [PR #1155](https://github.com/moltis-org/moltis/pull/1155) |
| 模型目录持续扩张 | Kimi K3 / Kimi K2.7 Code Highspeed | [PR #1156](https://github.com/moltis-org/moltis/pull/1156) |
| 配置 / onboarding 体验 | Provider setup defaults、config template、key-help 链接同步更新 | [PR #1156](https://github.com/moltis-org/moltis/pull/1156) |

> 可推测下一版本的潜在方向：继续扩展外部 Agent 协议适配、更多沙盒后端（Docker、Firecracker 等）、更多模型 provider 的 onboarding 模板。

---

## 7. 用户反馈摘要

⚠️ **数据空缺**：今日 Issues 区无新增条目，无可提炼的用户评论与痛点反馈。

仅可从 PR 摘要中侧面推断用户场景：
- 存在"使用 Moonshot / Kimi 模型"的开发者用户（推动 K3 与 K2.7 Code Highspeed 集成）。
- 存在"无沙盒环境部署"的部署场景（推动 #1154 修复）。
- 存在"外部 Agent 多后端混合"使用场景（推动 #1155 架构调整）。

---

## 8. 待处理积压

- **Issue 积压**：24 小时内无任何 Issues 新增或活跃，无法识别新增积压项。
- **PR 积压**：24 小时内无未合并 PR 流入，待合并队列保持干净。
- **风险提示**：
  1. 🔴 **贡献者单一**：所有今日变更均由 `penso` 一人提交，需关注 bus factor 与知识传承风险。
  2. 🟡 **社区参与度不足**：Issues / PRs 评论与点赞均为 0，建议维护者在社区渠道（Discord、Twitter/X、论坛）主动同步进展以吸引外部贡献者。
  3. 🟡 **变更日志透明度**：Release `20260716.01` 缺少详细 CHANGELOG，建议下次发布附上分项说明，便于下游用户评估升级影响。

---

### 📊 健康度评分（主观）

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐⭐ | 24h 内 3 PR + 1 Release，节奏紧凑 |
| 社区互动度 | ⭐⭐ | Issues / 评论均静默 |
| 代码质量信号 | ⭐⭐⭐⭐⭐ | 每个 PR 均附带 E2E 测试 |
| 路线图清晰度 | ⭐⭐⭐⭐ | 外部 Agent 原生化 + 模型扩张 + UX 修补 |
| 风险控制 | ⭐⭐⭐ | bus factor 与变更日志透明度待加强 |

---

*报告生成时间：2026-07-17 | 数据口径：GitHub 公开 API 24h 增量*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**报告日期**：2026-07-17
**项目**：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw)（亦称 QwenPaw）
**数据范围**：过去 24 小时（2026-07-16 ~ 2026-07-17）

---

## 一、今日速览

CoPaw 今日处于**高活跃、低发版**的典型维护期节奏：24 小时内共有 **89 条** Issues/PR 变动（Issues 43 条 + PRs 46 条），Issues 关闭率约 47%（20/43），PR 合并/关闭率达 54%（25/46），维护团队对社区反馈响应积极。议题几乎全部围绕 **v2.0 大版本升级后的回归与迁移**展开——Windows 权限/UAC、Docker 时区、会话记忆、Tauri 桌面端差异、thinking block 渲染等问题集中爆发，呈现明显的"升级震荡"特征。无新版本发布，社区当前停留在 `v2.0.0.post2`，问题主要集中在该版本。

---

## 二、版本发布

**⚠️ 今日无新版本发布。**

当前线上稳定版本仍为 `v2.0.0.post2`，多个高优先级 bug 仍在等待下一个补丁版本（推测为 `v2.0.0.post3`）一并修复。建议关注以下信号强烈的修复 PR，它们很可能进入下一版本：

- [PR #6127](https://github.com/agentscope-ai/CoPaw/pull/6127) — 修复 Windows 无条件 UAC 提权
- [PR #6192](https://github.com/agentscope-ai/CoPaw/pull/6192) — 修复 Docker 容器时区漂移
- [PR #6204](https://github.com/agentscope-ai/CoPaw/pull/6204) — 移除 `nvidia-smi` 启动卡死探测
- [PR #6203](https://github.com/agentscope-ai/CoPaw/pull/6203) — 限制 Windows `tasklist` 探测超时

---

## 三、项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#6127](https://github.com/agentscope-ai/CoPaw/pull/6127) | 条件化 UAC 提权，VBS 启动保持无窗口 | 平台兼容 / CLI | **关键** — 解决普通用户启动卡死 |
| [#6192](https://github.com/agentscope-ai/CoPaw/pull/6192) | Docker 挂载主机 `/etc/timezone` 与 `/etc/localtime` | 部署 / 时区 | **关键** — 修复 cron 与日志时间漂移 |
| [#6166](https://github.com/agentscope-ai/CoPaw/pull/6166) | 保留流式 thinking/text delta 的空格与换行 | 渲染 / UX | 修复 [#6129](https://github.com/agentscope-ai/CoPaw/issues/6129) |
| [#6180](https://github.com/agentscope-ai/CoPaw/pull/6180) | 用户消息触发 `updated_at` 刷新 + 失效消息缓存清理 | 会话管理 | 修复 [#6131](https://github.com/agentscope-ai/CoPaw/issues/6131) |
| [#6142](https://github.com/agentscope-ai/CoPaw/pull/6142) | `auto_memory_interval` 表单校验 ≥0 | 前端校验 | 避免误配 0 导致关闭自动记忆 |
| [#6200](https://github.com/agentscope-ai/CoPaw/pull/6200) | `qwenpaw cron update` 不再覆盖未触及字段 | CLI Bug | 避免并发/重试默认值被错误覆写 |
| [#6171](https://github.com/agentscope-ai/CoPaw/pull/6171) | memory `dream_cron` 增加总开关 | 后端 | 允许完全禁用后台 dream |
| [#6168](https://github.com/agentscope-ai/CoPaw/pull/6168) | Mattermost/OneBot/XiaoYi 通道限制状态增长、跟踪 fire-and-forget 任务 | 稳定性 | 修复三类长跑通道内存泄漏 |
| [#6185](https://github.com/agentscope-ai/CoPaw/pull/6185) | e2e 选择器适配 v2.0.0 UI 重设计 | 测试 | 升级后回归套件失效 |
| [#6194](https://github.com/agentscope-ai/CoPaw/pull/6194) | console vitest 加入 nightly 全量扫描 | CI | 补齐前端测试盲区 |

**整体判断**：今日合并的修复覆盖了**平台兼容性、时区、渲染、内存泄漏、会话排序、CLI 一致性**等核心面，是一次典型的"补丁质量提升日"——没有功能新增，但每一项都对用户真实痛点有直接回应。

---

## 四、社区热点（评论数 Top 议题）

| 排序 | Issue | 评论数 | 主题 | 用户诉求实质 |
|---|---|---|---|---|
| 1 | [#6116](https://github.com/agentscope-ai/CoPaw/issues/6116) | 6 | Agent doom loop：单回合重复触发同一工具 | 需要更早的检测 + 强制中断 |
| 2 | [#6161](https://github.com/agentscope-ai/CoPaw/issues/6161) | 5 | Windows 更新后普通用户无法启动 | 普通权限应可用 |
| 3 | [#6158](https://github.com/agentscope-ai/CoPaw/issues/6158) | 5 | Token 异常消耗（一周 2800 万） | 需要后台调用日志可追溯 |
| 4 | [#6196](https://github.com/agentscope-ai/CoPaw/issues/6196) | 5 | 容器日志时间戳忽略 `user_timezone` | 日志应使用 user 配置时区 |
| 5 | [#5995](https://github.com/agentscope-ai/CoPaw/issues/5995) | 5 | 会话忙时新消息静默丢失 | 需要队列或显式拒绝提示 |
| 6 | [#6048](https://github.com/agentscope-ai/CoPaw/issues/6048) | 5 | 免认证主机白名单支持 CIDR 段 | 网络安全粒度 |
| 7 | [#6129](https://github.com/agentscope-ai/CoPaw/issues/6129) | 5 | Thinking block 空格与换行丢失 | 流式输出渲染完整性 |
| 8 | [#6155](https://github.com/agentscope-ai/CoPaw/issues/6155) | 4 | 1.x→2.0 升级后多问题 | 升级迁移路径需更稳健 |

**诉求共性**：绝大多数高互动议题本质上是 **"v2.0 引入了新行为，但用户预期保持 v1.x"** —— 这表明文档/CHANGELOG 与升级指南是当前的薄弱环节。

---

## 五、Bug 与稳定性

### 🔴 严重（阻断核心使用）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#6161](https://github.com/agentscope-ai/CoPaw/issues/6161) | Windows 普通用户权限下完全无法启动（仅 Admin 可用） | ✅ [#6127](https://github.com/agentscope-ai/CoPaw/pull/6127) |
| [#6169](https://github.com/agentscope-ai/CoPaw/issues/6169) | pip 安装的 2.0.0.post2 强制 UAC 提权 | ✅ [#6127](https://github.com/agentscope-ai/CoPaw/pull/6127) |
| [#6155](https://github.com/agentscope-ai/CoPaw/issues/6155) | 1.x→2.0 升级后 Embedding/记忆/UI 多项崩溃 | ⚠️ 部分修复尚无关联 PR |
| [#6197](https://github.com/agentscope-ai/CoPaw/issues/6197) | `nvidia-smi` 挂起导致 Desktop 启动永久卡死 | ✅ [#6204](https://github.com/agentscope-ai/CoPaw/pull/6204) |
| [#6047](https://github.com/agentscope-ai/CoPaw/issues/6047) | 升级后新会话打开旧会话，数据索引不同步 | ❌ 暂无关联 PR |

### 🟠 高级（功能可用但体验受损）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#6116](https://github.com/agentscope-ai/CoPaw/issues/6116) | Doom loop 浪费 Token（6 次后检测） | ❌ 标记 wontfix，行为需重新设计 |
| [#5995](https://github.com/agentscope-ai/CoPaw/issues/5995) | 会话忙时静默丢消息，无队列无报错 | ❌ 仍 OPEN |
| [#6148](https://github.com/agentscope-ai/CoPaw/issues/6148) | 2.0 失忆症严重，`/compact` 可能未真正压缩 | ❌ 仍 OPEN |
| [#6129](https://github.com/agentscope-ai/CoPaw/issues/6129) | 流式 thinking block 空格换行丢失 | ✅ [#6166](https://github.com/agentscope-ai/CoPaw/pull/6166) |
| [#6196](https://github.com/agentscope-ai/CoPaw/issues/6196) | 容器日志时间戳使用 UTC 而非 `user_timezone` | ⚠️ 部署侧已修 [#6192](https://github.com/agentscope-ai/CoPaw/pull/6192)，代码侧待补 |
| [#6188](https://github.com/agentscope-ai/CoPaw/issues/6188) | Docker 默认 UTC，与本地差 8 小时 | ✅ [#6192](https://github.com/agentscope-ai/CoPaw/pull/6192) |
| [#6074](https://github.com/agentscope-ai/CoPaw/issues/6074) | 切换 agent 导致当前会话丢失 | ❌ 仍 OPEN |
| [#6119](https://github.com/agentscope-ai/CoPaw/issues/6119) | `chat_with_agent` 在 zero-downtime reload 时挂起 | ❌ 仍 OPEN |

### 🟡 中级（边缘场景）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#6152](https://github.com/agentscope-ai/CoPaw/issues/6152) | QQ channel 回复本地图片路径触发 `AnyUrl` 校验失败 | ❌ |
| [#6156](https://github.com/agentscope-ai/CoPaw/issues/6156) | 终端与 Clash 代理冲突 | ❌ |
| [#6201](https://github.com/agentscope-ai/CoPaw/issues/6201) | PubMed MCP 在 llama.cpp 下报错 | ❌ |
| [#6131](https://github.com/agentscope-ai/CoPaw/issues/6131) | 2.x 会话列表 `updatedAt` 不更新 | ✅ [#6180](https://github.com/agentscope-ai/CoPaw/pull/6180) |
| [#6187](https://github.com/agentscope-ai/CoPaw/issues/6187) | 「同步到技能池」返回 `not_found` | ❌ |
| [#6202](https://github.com/agentscope-ai/CoPaw/issues/6202) | Desktop 端工作区技能渐进渲染失效 | ❌ |
| [#6165](https://github.com/agentscope-ai/CoPaw/issues/6165) | 输入法英文建议开关缺失 | ❌（已 close 为 invalid） |
| [#6199](https://github.com/agentscope-ai/CoPaw/issues/6199) | TG 链接偶尔无法给出相关内容 | ❌ |

**Bug 集中度**：当前 bug 池有约 **5 条严重 + 8 条高级** 仍未关闭，且过半严重项已有修复 PR 待发版，**`post3` 补丁包迫在眉睫**。

---

## 六、功能请求与路线图信号

| Feature | 来源 | 落地概率 | 备注 |
|---|---|---|---|
| **免认证主机白名单支持 CIDR** | [#6048](https://github.com/agentscope-ai/CoPaw/issues/6048) | 高 | 后端小改动，无破坏性 |
| **Policy 规则 UI 编辑与删除** | [#5880](https://github.com/agentscope-ai/CoPaw/issues/5880) | 中 | Console 侧增量工作 |
| **内置 Python 运行环境 / 复用后端 Python** | [#6160](https://github.com/agentscope-ai/CoPaw/issues/6160) | 中 | 与 Tauri 打包策略强耦合 |
| **Reusable Workflow Orchestration + Audit Trail** | [#6163](https://github.com/agentscope-ai/CoPaw/issues/6163) | 中-低 | 大型特性，需架构层投入 |
| **关闭输入建议弹窗开关** | [#6165](https://github.com/agentscope-ai/CoPaw/issues/6165) | 低 | 已 close 为 invalid，需求不成立 |
| **非 Tauri 版本（Win7 支持）** | [#6076](https://github.com/agentscope-ai/CoPaw/issues/6076) | 低 | 维护者明确倾向不再支持 Win7 |

**方向信号**：[#6163](https://github.com/agentscope-ai/CoPaw/issues/6163) 的"可复用工作流编排 + 审计追踪"提案是高价值结构化扩展，与已有 PR [#6190](https://github.com/agentscope-ai/CoPaw/pull/6190)（`@tool_descriptor` 治理统一）+ [#6198](https://github.com/agentscope-ai/CoPaw/pull/6198)（多 agent 启动并发治理）方向一致，**很可能进入 v2.1 路线图**。

---

## 七、用户反馈摘要

**真实痛点 Top 5**（基于今日活跃 issue 评论提炼）：

1. **Windows 权限困扰**——多用户反馈"普通权限下完全无法启动""必须右键管理员"，且与 Win10/Win11 的 UAC、`.vbs` 隐藏窗口、`.bat` 卡顿特性深度纠缠，说明 Windows 桌面端的提权策略需要一次系统性重构。

2. **v2.0 升级迁移痛苦**——`[#6155](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-07-17**
**仓库：[qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)**

---

## 1. 今日速览

ZeptoClaw 仓库今日动态极为平静，呈现典型的"低活动维护日"特征。过去 24 小时内共有 5 条 Issue 更新，**全部为已关闭状态，无新开或活跃 Issue**；PR 更新为 0 条，新版本发布为 0 条。从内容性质看，今日所有动态均来自同一作者 `YLChen-007` 的批量式安全文档分类（docs/security）任务，涉及对预先存在 Issue 的 D2 触发方式证据补全，未涉及任何功能性代码改动。整体活跃度评估：**低**，仓库处于例行文档维护状态，无实质性代码演进。

---

## 2. 版本发布

📭 **今日无新版本发布。** 当前无任何 Release 活动。

---

## 3. 项目进展

今日合并/关闭的 PR 数为 **0**，无功能性代码合入。在 Issue 层面，5 条 docs(security) 任务已全部关闭：

- **[#631](https://github.com/qhkm/zeptoclaw/issues/631)** – 已关闭：为 Issue 264 补全 CSV row 121 的 D2 触发方式证据
- **[#632](https://github.com/qhkm/zeptoclaw/issues/632)** – 已关闭：为 Issue 268 写入 `d2_xclaw_trigger_way` 字段
- **[#633](https://github.com/qhkm/zeptoclaw/issues/633)** – 已关闭：为 Issue 271 完成 prompt-to-tool 路径校验
- **[#634](https://github.com/qhkm/zeptoclaw/issues/634)** – 已关闭：为 Issue 329 完成源验证
- **[#635](https://github.com/qhkm/zeptoclaw/issues/635)** – 已关闭：为 Issue 466 完成触发方式分类

**推进评估：** 项目代码层面今日**无向前推进**。所有进度集中在 `llm-enhance/official-cve/issue-security/` 目录下的 JSON 元数据补全工作，属于安全证据链整理（security evidence classification），属于"辅助性进度"。这一工作模式显示出仓库正在被纳入更大规模的 CVE/安全分析自动化流水线，建议维护者关注该流水线的可持续性与贡献者多元化程度（当前 5 条 Issue 全部由 `YLChen-007` 单人提交）。

---

## 4. 社区热点

由于今日无 PR 活跃，热点集中于上述 5 条 docs(security) Issue，其共同特征如下：

| 维度 | 数值 |
|------|------|
| 评论数 | 均为 1 条（疑似自动化工作流日志） |
| 👍 反应数 | 均为 0 |
| 提交者分布 | 100% 来自 `YLChen-007` |
| 时间窗口 | 全部创建于 2026-07-16 |

**分析：** 5 条 Issue 标题与摘要高度同质化，均为"classify D2 trigger way for Issue XXX"格式，每条对应一个 CSV 行（row 121–125）和一个目标 Issue（264、268、271、329、466）。这表明存在一个**批量任务编排系统**对仓库批量生产文档维护任务，每条 Issue 的实际操作极为狭义（仅修改一个 JSON 文件中的特定字段）。**真正的"社区诉求"信号今日为零**——没有外部用户参与讨论、提问或请求功能。

代表性链接：
- [#633 CSV row 123 / Issue 271](https://github.com/qhkm/zeptoclaw/issues/633)
- [#634 CSV row 124 / Issue 329](https://github.com/qhkm/zeptoclaw/issues/634)

---

## 5. Bug 与稳定性

🟢 **今日未报告任何 Bug、崩溃或回归问题。**

报告中所有 5 条 Issue 均为 docs 类型（`docs(security)`），不涉及代码层缺陷。无新增崩溃报告、性能回归或运行时异常。建议将此视为项目稳定性信号——结合 Issue 标题中提及的"prompt-to-LLM-to-custom-tool-to-shell"路径分析，仓库的关注点偏向**AI Agent 行为可观测性与安全路径审计**，但这些仅为元数据标注，未触发实际代码修复。

---

## 6. 功能请求与路线图信号

📭 **今日无用户提交的功能请求**，亦无新开 Issue 可被视为 roadmap 信号。鉴于仓库当前动态高度自动化，关注点应放在以下已隐含的方向上：

- **D2 触发方式分类体系（d2_xclaw_trigger_way）**：今日关闭的 5 条 Issue 表明仓库正在建立一个**标准化的安全路径分类词汇表**，未来若该分类与运行时拦截器（如 prompt filter、tool allowlist）联动，可能影响下个版本的访问控制或审计功能。
- **批量安全证据流水线**：单作者闭环的批量任务模式若持续，可能预示仓库将引入**CI 驱动的安全元数据自动更新**机制。

由于缺乏外部 PR 与 Issue，这些仍仅为推测，置信度低。

---

## 7. 用户反馈摘要

⚠️ **今日无外部用户反馈可提炼。** 5 条已关闭 Issue 的评论数均为 1 条，结合 0 个 👍 反应，可合理推断其唯一评论为自动化机器人或作者本人留下的工作流回执，而非真实用户体验。无法从中提取任何痛点、使用场景或满意度信号。

**健康度提示：** 仓库的"用户参与度"指标今日归零。对于一个 AI Agent / 个人 AI 助手类项目而言，这通常不是良性信号——可能意味着：(a) 仓库已进入维护模式；(b) 真实用户活动已迁移至其他渠道（如 Discord、独立平台）；(c) 自动化任务挤占了 Issue 列表的有效信噪比。

---

## 8. 待处理积压

📋 **今日无新增积压项。** 由于所有 5 条 Issue 均在创建当日即关闭，且无 PR 处于开放状态，无法基于今日数据评估积压情况。

**维护者建议关注：**
1. 仓库是否还有任何 **未响应超过 7 天的开放 Issue**——本报告数据范围仅覆盖过去 24 小时，建议结合历史 Issue 列表另行审计。
2. 由于 `YLChen-007` 单人贡献了今日全部动态，建议观察**贡献者集中度**（bus factor），避免关键路径依赖单一自动化作业。
3. 如果仓库面向真实用户，建议在 Issue 模板中区分"自动化维护任务"与"用户报告"标签，以提升社区健康度指标的可读性。

---

### 📊 数据小结

| 指标 | 数值 | 健康度判断 |
|------|------|-----------|
| 新开 Issue | 0 | ⚪ 中性 |
| 已关闭 Issue | 5 | 🟢 闭环效率高 |
| 新开 PR | 0 | ⚪ 中性 |
| 已合并 PR | 0 | ⚫ 代码无推进 |
| 新 Release | 0 | ⚪ 中性 |
| 外部贡献者参与 | 0 | 🟡 需关注 |
| 用户反馈信号 | 0 | 🟡 需关注 |

**总评：** 今日为"零代码推进 + 文档批量维护"日，项目代码层面无演进，社区信号缺失。建议从仓库整体月度趋势判断当前状态属于短期低谷还是长期收敛。

---
*报告生成时间：2026-07-17 | 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-07-17**

---

## 1. 今日速览

ZeroClaw 项目今日处于高度活跃的工程治理期：过去 24 小时共更新 24 个 Issue（22 开放 / 2 关闭）和 50 个 PR（46 待合并 / 4 已合并关闭），无新版本发布。社区关注点高度集中于三个方向——**v0.8.4 维护列车收尾**（7 月 31 日目标）、**通道插件 WASM 生态推进**（JordanTheJet 一人贡献的 stacked PR 系列正在冲刺合并），以及**RFC 设计讨论**（11 个进行中的 RFC 涵盖记忆系统、协议统一、网关升级等架构级议题）。整体项目处于"重 RFC、轻合并"的状态，设计层面的迭代显著快于代码落地。

---

## 2. 版本发布

**今日无新版本发布。**

最近发布为 v0.8.3（Issue #7320 标注为发布收尾索引，所有计划工作已合并或移出，仅剩最终发布验证与发布）。下一节点为 v0.8.4 维护列车，目标日期 2026-07-31（[#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357)）。

---

## 3. 项目进展

### 已关闭 Issue
| 编号 | 标题 | 意义 |
|---|---|---|
| [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) | RFC: Consolidate /ws/chat and /acp onto a single wire protocol | **标记 wontfix**，说明当前阶段不进行 WebSocket 协议统一 |
| [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) | v0.8.3 milestone index and child trackers | v0.8.3 全部子追踪器关闭，发布收尾完成 |

### 关键进展信号
- **维护者变更**：[#9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107)（@singlerider 于 2026-07-15 离开项目，清理其 44 条 CODEOWNERS 路由；其中 **zeroclaw-api、zeroclaw-infra 等关键路径失去唯一负责人**）
- **Lucid 内存后端可用性修复**：[#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105) 将召回超时从 500ms 提升至 3s，解决 AArch64 冷启动被误杀问题（实测 1.4-1.6s）
- **配置层 bug 修复**：[#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) 修复 max_context_tokens 三级回退链缺失
- **新 Provider 接入**：[#9104](https://github.com/zeroclaw-labs/zeroclaw/pull/9104) 接入 Grok Build CLI 作为 `grok_cli` 子进程模型 Provider

**推进评估**：项目处于"基础设施加固"阶段，合并进度以小尺寸补丁为主（XS/S），大型 stacked PR 系列（XL）仍在评审中。代码净流入量健康，但合并没有加速迹象。

---

## 4. 社区热点

按评论数与讨论热度排序：

| 排名 | 编号 | 标题 | 评论数 | 类别 |
|---|---|---|---|---|
| 1 | [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | refactor: Unify providers architecture and reqwest client management | **11** | 架构重构（高风险） |
| 2 | [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | Publish optional broad-channel prebuilts alongside lean defaults | **7** | 发布工程 |
| 3 | [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | Consolidate release attestation mechanisms | **5** | 安全/合规 |
| 4 | [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | RFC: Gateway-local Kanban board | **5** | 产品形态 |
| 5 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC: Separate conversation history from agent-curated memory | **5** | 核心架构 |
| 6 | [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | RFC: In-app upgrade from web dashboard | **4** | 用户体验 |
| 7 | [#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134) | Reset stale channel sessions after session_ttl_hours | **4** | 资源治理 |
| 8 | [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | browser_open hangs the agent turn | **3** | **S1 阻断性 Bug** |

**热点诉求分析**：
- **Provider 抽象层是当下最大痛点**：[#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) 长期未解决 reqwest 用法不一致与配置碎片化问题
- **运维可观测性需求显著**：从 [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)（发布溯源三重并行）看出企业级合规诉求浮现
- **Web Dashboard 化诉求强烈**：Kanban 看板、内存升级、In-app 升级三个 RFC 均瞄准此方向
- **A2A 协议正在扩展**：[#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) 提议 A2A 出站客户端（A2ATool），补充 #3566 已落地的 A2AServer（v0.8.2）

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 S1 - 阻断性（S1 priority:p1）

| 编号 | 标题 | 组件 | Fix PR | 状态 |
|---|---|---|---|---|
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | browser_open 无限挂起 agent turn | tools | **无** | 开放中，影响 robot-kit TTS 与 channels ffmpeg |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | pgvector 启用时嵌套运行时 panic | memory (postgres) | **无** | 开放中，根因为同步客户端从 Tokio 上下文构造 |

### 🟡 S2 - 降级行为

| 编号 | 标题 | 组件 | Fix PR |
|---|---|---|---|
| [#9046](https://github.com/zeroclaw-labs/zeroclaw/issues/9046) | models_cache.json 只读不写，`zeroclaw models refresh` 提示失效 | channel | **无** |
| [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) | Tool 输出 `[AUDIO:]` marker 不被识别（仅识别 `[IMAGE:]`） | provider | **无** |

### 🟢 已修复（含待合并修复 PR）

| 编号 | Bug | 修复 PR |
|---|---|---|
| delegate OAuth 凭证回退串号 | [#8571](https://github.com/zeroclaw-labs/zeroclaw/pull/8571) |
| 硬件 timeout 吞掉内部 Elapsed error | [#8536](https://github.com/zeroclaw-labs/zeroclaw/pull/8536) |
| execute_pipeline 绕过 ToolAccessPolicy | [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) |
| 同名 plugin tool 覆盖 native tool | [#8851](https://github.com/zeroclaw-labs/zeroclaw/pull/8851) |
| max_context_tokens 三级回退缺失 | [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) |

**健康度评估**：3 个 S1/S2 Bug **均无对应修复 PR**，是当前最大风险敞口，尤其是 pgvector panic 影响所有使用 postgres 后端的部署。

---

## 6. 功能请求与路线图信号

### 新提出的 RFC（2026-07-16 当日）
- [#9103](https://github.com/zeroclaw-labs/zeroclaw/issues/9103) — **将权威存储与可选富化连接器解耦**（@yanchenko）：让 Lucid 不再被错误建模为完整存储后端，而是 enrichment 插件，与 [#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105) 配套
- [#9106](https://github.com/zeroclaw-labs/zeroclaw/issues/9106) — **A2A 出站客户端（A2ATool）**：完成 A2AServer + A2ATool 双向闭环
- [#8780](https://github.com/zeroclaw-labs/zeroclaw/issues/8780) — **Gemini Live 实时语音通道**：原生多模态 audio-to-audio
- [#8798](https://github.com/zeroclaw-labs/zeroclaw/issues/8798) — WebSocket 协议统一（**已 wontfix**）

### 已有 PR 配套的功能
- **OpenAI Chat Completions 兼容端点**：[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) — 直接对接 LangChain、Continue.dev、Aider
- **Inkbox 全通道支持**：[#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) — email + SMS + voice + iMessage
- **Herdr 代理状态上报**：[#8337](https://github.com/zeroclaw-labs/zeroclaw/pull/8337)
- **Web Dashboard In-Flight 计数器**：[#8905](https://github.com/zeroclaw-labs/zeroclaw/pull/8905)

### v0.8.4 纳入可能性判断
**高概率（已存在 PR + 在追踪器内）**：[#9105](https://github.com/zeroclaw-labs/zeroclaw/pull/9105)、[#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966)、[#8851](https://github.com/zeroclaw-labs/zeroclaw/pull/8851)
**中概率（大型 stacked PR，需 master 合并基础）**：JordanTheJet 的通道插件栈（[#8852](https://github.com/zeroclaw-labs/zeroclaw/pull/8852) → [#8855](https://github.com/zeroclaw-labs/zeroclaw/pull/8855) → [#8857](https://github.com/zeroclaw-labs/zeroclaw/pull/8857) → [#8862](https://github.com/zeroclaw-labs/zeroclaw/pull/8862) → [#8863](https://github.com/zeroclaw-labs/zeroclaw/pull/8863) → [#8923](https://github.com/zeroclaw-labs/zeroclaw/pull/8923) → [#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)），全链规模 XL
**低概率（v0.8.4 属维护列车）**：所有新增 RFC

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼的真实场景与痛点：

1. **企业部署的成本与可观测性焦虑**（[#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)）：v0.8.3 三套并行的签名/溯源机制（cosign + GitHub attestations + slsa-github-generator）增加 CI 时间与双重审计成本，用户希望"一个签名故事"

2. **运维通道会话爆炸**（[#8134](https://github.com/zeroclaw-labs/zeroclaw/issues/8134)）：Slack/Telegram 团队使用者反映会话历史无界增长导致 token 消耗失控和响应延迟，需 `session_ttl_hours` 真正生效（已存在配置项但未实现）

3. **Web Dashboard 升级路径缺失**（[#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170)）：版本号仅作为静态信息展示，运维需离开 Web UI 才能检查/应用升级，对托管式用户体验差

4. **Matrix 部署的线程语义错配**（[#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541)）：运营方希望 Matrix 线程或显式 conversation_id 作为会话边界，目前仅作为投递锚点

5. **新维护者缺口**：[#9107](https://github.com/zeroclaw-labs/zeroclaw/pull/9107) 暴露 zeroclaw-api 与 zeroclaw-infra 等关键路径**无唯一负责人**，社区担忧长期维护可持续性

6. **能力文档缺失**（[#8367](https://github.com/zeroclaw-labs/zeroclaw/issues/8367)）：Agent 在询问 ZeroClaw 能力时无法基于实际配置给出准确答复，影响自助式排错体验

**满意度信号**：v0.8.3 的三个并行机制虽冗余但"全部工作正常"（v0.8.3 即为证明），属于用户对当前工程严谨度的认可。

---

## 8. 待处理积压

按"长期未合并/未响应"维度识别：

| 编号 | 标题 | 创建日 | 等待 | 状态 |
|---|---|---|---|---|
| [#5937](https://github.com/zeroclaw-labs/zeroclaw/issues/5937) | refactor: Unify providers architecture | **2026-04-20** | **~88 天** | 接受状态，p2，长期开放 |
| [#7952](https://github.com/zeroclaw-labs/zeroclaw/issues/7952) | broad-channel prebuilts | 2026-06-19 | ~28 天 | 接受状态，p2 |
| [#7960](https://github.com/zeroclaw-labs/zeroclaw/pull/7960) | fix(tools): execute_pipeline ToolAccessPolicy | 2026-06-19 | ~28 天 | PR 待合并，标注 `needs-author-action` |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | feat(gateway): OpenAI Chat Completions | 2026-06-29 | ~18 天 | XL 规模 PR，标的 `#8550`，`needs-author-action` |
| [#8170](https://github.com/zeroclaw-labs/zeroclaw/issues/8170) | RFC: In-app upgrade | 2026-06-22 | ~25 天 | 接受 + in-progress，需维护者行动 |
| [#8398](https://github.com/zeroclaw-labs/zeroclaw/issues/8398) | RFC: Plugin permission model | 2026-06-27 | ~20 天 | `needs-author-action`，开放问题未收敛 |

### 🚨 建议维护者优先处理

1. **指派 #9107 后空缺的 CODEOWNERS 路径**（zeroclaw-api、zeroclaw-infra）—— 防止 PR 路由悬空
2. **推动 S1 Bug 修复**：[#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560)（browser_open hang）与 [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085)（pgvector panic）阻碍用户上手
3. **关闭或拆分 #5937**：88 天开放的 Provider 重构已超出正常 RFC 周期，建议切片为可分阶段合并的子任务
4. **RFC 评审队列治理**：[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)（RFC review queue）显示多项 RFC 长期处于 `needs-author-action` / `needs-maintainer-review` 状态

---

## 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 50 PR + 24 Issue，工程师高度活跃 |
| 发布节奏 | ⭐⭐⭐⭐ | v0.8.3 已交付，v0.8.4

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*