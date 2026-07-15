# OpenClaw 生态日报 2026-07-15

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-15 01:50 UTC

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
**报告日期：2026-07-15**

---

## 1. 今日速览

OpenClaw 在过去 24 小时呈现**高活跃度 + 高危机并存**的态势：仓库共发生 1000 条更新（Issues 500 / PRs 500），但**无任何新版本发布**。讨论焦点高度集中于 **2026.7.1 升级带来的 P0 级 gateway crash-loop 问题**——多个 memory sidecar / legacy state migration 冲突使已运行安装无法启动，且 `openclaw doctor` 无法修复，已有多条 Issue 标记为 `impact:ux-release-blocker`。与此同时，核心维护者 steipete 单日提交多条 XL 级重构与功能 PR（system-agent delegation、SDK 死代码清理、core 解耦 channel literals），显示项目正在为下个版本做内部净化与架构升级。

**健康度评估：⚠️ 黄色警戒** — 表面活跃度极高，但 2026.7.1 升级路径的回归与迁移门控失误正在侵蚀用户信任。

---

## 2. 版本发布

**今日无新版本发布。**

考虑到 2026.7.1 引发的大量 P0 crash-loop Issue（#107133、#107220、#107227、#107330），社区正在等待 2026.7.2 或 hotfix。建议维护者尽快发布补丁版本，集中修复：
- Memory Core `embedding_cache` 主键冲突（#107133 已 CLOSED）
- 启动期 legacy sidecar `meta`/`chunks` 致命冲突（#107220）
- `.migrated` 存档存在时的迁移非收敛（#102749 已 CLOSED）
- Plugin install metadata conflict（#107727 已 CLOSED）
- Windows 升级崩溃（#107330 已 CLOSED）

迁移注意事项：升级前需先手动清理 `~/.openclaw/legacy/` 下的冲突文件；`openclaw doctor` 在 2026.7.1 上不保证能恢复已卡死的实例。

---

## 3. 项目进展

### 已合并/关闭的 PR
| PR | 说明 | 影响 |
|---|---|---|
| [#107773](https://github.com/openclaw/openclaw/pull/107773) | fix(imessage): 消息动作保持在当前会话上下文内 | 关闭 #107770，修复 iMessage 委托动作资源解析 |
| [#107144](https://github.com/openclaw/openclaw/pull/107144) | fix(skills): 删除文件时清理孤立 skill_usage 记录 | 关闭 workshop 技能残留问题 |
| [#107250](https://github.com/openclaw/openclaw/pull/107250) | feat: aionly provider plugin | 新增 AIOnly 模型提供方 |
| [#107898](https://github.com/openclaw/openclaw/pull/107898) | refactor(core): 从 channel 元数据读取而非硬编码 | 净 −154 行，core 解耦 plugin |

### 已就绪等待 maintainer review 的高质量 PR
- **[#99312](https://github.com/openclaw/openclaw/pull/99312)** — `improve(gateway): restart only the changed account on channel config reload`（P1，diamond lobster）— 多账户场景下仅重启变更账户，避免整 channel 抖动。
- **[#92294](https://github.com/openclaw/openclaw/pull/92294)** — `fix(codex): keep OpenClaw exec when native surface has no environment`（P1）— 修复 Codex isolated cron 误报 `exec tool unavailable`。
- **[#105556](https://github.com/openclaw/openclaw/pull/105556)** — `fix(slack): mark connected status degraded without bot identity`（P1）— 修复 Slack 误报 healthy 状态。
- **[#97224](https://github.com/openclaw/openclaw/pull/97224)** — `fix(harness): add Codex pre-tool loop relay opt-out`（P2）— 增加 loop detection 细粒度配置。
- **[#86386](https://github.com/openclaw/openclaw/pull/86386)** — `fix(feishu): route SDK HTTP through ambient proxy`（P1）— 飞书/Lark HTTP 走 OpenClaw 代理通道。
- **[#104935](https://github.com/openclaw/openclaw/pull/104935)** — `fix(config): render validation array indices with brackets`（P3）— 改诊断输出可读性。

### 战略性架构推进
- **[#107906](https://github.com/openclaw/openclaw/pull/107906)** — `refactor(plugin-sdk)!: delete the zero-consumer channel-ingress facade, AccessFacts projections, and dead dispatch aliases`（XL）— 删除三组已废弃 SDK 表面。
- **[#107903](https://github.com/openclaw/openclaw/pull/107903)** — `feat(agents): OpenClaw system-agent delegation`（XL）— Phase 2 of #107237，引入 system-agent 双层委派模型，普通 agent 获得受控的系统配置权限。
- **[#107688](https://github.com/openclaw/openclaw/pull/107688)** — `fix: connect resumed native terminals reliably`（XL）— 修复 Codex/Claude/OpenCode/Pi 在 daemon PATH 缺失时误报"binary not installed"。
- **[#107798](https://github.com/openclaw/openclaw/pull/107798)** — `fix(mac): keep dashboard navigation beside link browser` — macOS 应用 UI 修复。

整体来看，项目在 CLI 诊断、message delivery、provider 兼容三条战线稳步推进，但**未发布新版本**让所有修复处于"在路上"状态。

---

## 4. 社区热点

| 排名 | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 🥇 | [#75](https://github.com/openclaw/openclaw/issues/75) | 113 | 81 | Linux/Windows Clawdbot Apps — 跨平台客户端（创建于 2026-01-01，至今 >6 个月未结）|
| 🥈 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 19 | 1 | 多编码文件名工具（飞书中文、日韩 GB18030/Shift-JIS/EUC-KR）|
| 🥉 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 18 | 0 | Memory Trust Tagging by Source |
| 4 | [#22676](https://github.com/openclaw/openclaw/issues/22676) | 17 | 0 | Signal daemon SIGUSR1 race（已 CLOSED）|
| 5 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 14 | 4 | Masked Secrets — agent 使用但不读取 API key |
| 6 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | 14 | 3 | Codex-backed Telegram turns timeout |
| 7 | [#102020](https://github.com/openclaw/openclaw/issues/102020) | 12 | 1 | 第二条消息 "session initialization conflicted" |

**诉求分析：**
- **跨平台缺位**：#75 以 81 个 👍 和 113 条评论一骑绝尘，反映社区对 Linux/Windows 桌面客户端的强烈需求；macOS/iOS/Android 已被优先支持，桌面双平台是显著缺口。
- **安全/信任成为新焦点**：#7707 (memory poisoning)、#10659 (masked secrets)、#6615 (exec denylist) 形成"信任三角"——社区越来越关注 agent 在不可信输入下的边界。
- **国际化现实压力**：#48788 凸显多语言文件名处理的架构债务，单次 patch 治标不治本。

---

## 5. Bug 与稳定性

### 🔴 P0 — 已阻塞发布（impact:ux-release-blocker）
| Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|
| [#107227](https://github.com/openclaw/openclaw/issues/107227) | 2026.7.1 启动迁移门控致命，`doctor` 无解，gateway crash-loop | OPEN | 无 |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | 2026.7.1 gateway crash-loop: `meta`/`chunks` 致命 vs `files` 自动解决 | OPEN | 无 |
| [#107330](https://github.com/openclaw/openclaw/issues/107330) | Windows 11 `openclaw update` 崩溃 | CLOSED | 待关联 |
| [#107133](https://github.com/openclaw/openclaw/issues/107133) | Memory Core `embedding_cache` 主键冲突阻塞 startup | CLOSED | 待关联 |
| [#107727](https://github.com/openclaw/openclaw/issues/107727) | Plugin install metadata conflict 阻塞 readiness | CLOSED | 待关联 |
| [#102749](https://github.com/openclaw/openclaw/issues/102749) | `.migrated` 存档存在时迁移永不收敛 | CLOSED | 待关联 |
| [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI preflight 损坏 live state DB（"database disk image is malformed"） | OPEN | 无 |

### 🟠 P1 — 高优先级回归与可用性问题
| Issue | 描述 | 影响 |
|---|---|---|
| [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex Telegram 永不达 `turn/completed`（2026.5.27）| 消息丢失 |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | Signal daemon SIGUSR1 race → 孤儿进程 | 消息丢失 + 崩溃循环 |
| [#107449](https://github.com/openclaw/openclaw/issues/107449) | cron 工具 JSON schema 与 llama.cpp 解析器不兼容（`pattern: "\S"`）| 2026.7.1 回归 |
| [#106779](https://github.com/openclaw/openclaw/issues/106779) | llama.cpp 本地 provider 全 400 | 2026.7.1 |
| [#106961](https://github.com/openclaw/openclaw/issues/106961)（推测）| Codex source-reply 提前终止 turn | 关联 PR [#107274](https://github.com/openclaw/openclaw/pull/107274) |
| [#90944](https://github.com/openclaw/openclaw/issues/90944) | `sessions_yield` 回复未交付，子代理摘要误送达 | 消息丢失 |
| [#91456](https://github.com/openclaw/openclaw/issues/91456) | Telegram DM lane 发送超时后持续 guarded | 消息丢失 |
| [#77012](https://github.com/openclaw/openclaw/issues/77012) | WebChat 会话转录每轮覆写（5.2 回归）| 数据丢失 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 不触发助手回复 | 消息丢失 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 1:1 入站图片卡 lane 3 分钟 | 性能 |
| [#94518](https://github.com/openclaw/openclaw/issues/94518) | DeepSeek 缓存命中率从 6.x 升级后跌至 <10% | 性能/成本 |
| [#80040](https://github.com/openclaw/openclaw/issues/80040) | OAuth 级联失败 + provider 切换重复工具执行 + 冷启动丢上下文 | 复合 |

### 🟡 P2 — 中等优先级
- [#102020](https://github.com/openclaw/openclaw/issues/102020) — 跨 channel 第二条消息会话冲突
- [#67288](https://github.com/openclaw/openclaw/issues/67288) — `amazon-bedrock-mantle` 缺少 `config.discovery.enabled` 门控
- [#38327](https://github.com/openclaw/openclaw/issues/38327) — google-vertex/gemini 2026.3.2 回归
- [#90213](https://github.com/openclaw/openclaw/issues/90213) — legacy migration 警告持续
- [#90414](https://github.com/openclaw/openclaw/issues/90414) — `agentmemory__memory_search` 持续 "index metadata missing"
- [#92769](https://github.com/openclaw/openclaw/issues/92769) — MiniMax M3 经 OpenRouter `reasoning`/`reasoning_details` 被丢弃

**关键观察：** 2026.7.1 的回归集中在 **migration gate 致命化 + memory sidecar 冲突**两类，而 2026.5.x/6.x 的回归集中在 **provider/tool-call schema 不兼容 + WebChat session 状态**。

---

## 6. 功能请求与路线图信号

按需求强度排序：

| 需求 | Issue | 现状 | 入版概率 |
|---|---|---|---|
| Linux/Windows 桌面应用 | [#75](https://github.com/openclaw/openclaw/issues/75) | 已 6 个月无 PR | 🟡 中（维护资源问题）|
| Masked Secrets | [#10659](https://github.com/openclaw/openclaw/issues/10659) | 无 PR | 🟢 高（安全趋势 + 14 评论）|
| Memory Trust Tagging | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 无 PR | 🟡 中（需架构决策）|
| exec-approvals denylist | [#6615](https://github.com/openclaw/openclaw/issues/6615) | 无 PR | 🟢 高（7 👍，简单可加）|
| 多编码文件名中心化 | [#48788](https://github.com/openclaw/openclaw/issues/48788) | 概念 PR #48578 已合并 | 🟢 高 |
| Webhook multi-turn session | [#11665](https://github.com/openclaw/openclaw/issues/11665) | 无 PR | 🟡 中（行为变更）

---

## 横向生态对比

# 2026-07-15 AI 智能体开源生态横向对比分析报告

---

## 1. 生态全景

2026 年 7 月中旬，个人 AI 助手与自主智能体开源生态进入**"质量收敛 + 安全硬化"双主线并行**阶段：12 个被观察项目中 6 个处于高活跃迭代（OpenClaw、ZeroClaw、IronClaw、CoPaw、Hermes Agent、NanoBot），3 个处于稳态巩固期（Moltis 已发版、LobsterAI 内部加固、PicoClaw 清理积压），3 个当日零活动（NullClaw、TinyClaw、ZeptoClaw）。当日仅 2 个项目发布版本（**Moltis 20260714.11、CoPaw v2.0.0.post2**），其余项目均处于"修复在路上"的中间态，反映出生态从功能堆叠转向稳定性投资的拐点信号。**多租户安全、Memory 可信度、跨渠道一致性、可观测性标准化**是当前社区最高频的共同诉求；OpenClaw 仍以压倒性的吞吐量（500+500 Issue/PR）维持"行业基准"地位，但其 P0 级升级事故与同期 4 个新兴项目（Moltis、CoPaw、ZeroClaw、Hermes Agent）的快速收敛形成鲜明对比。

---

## 2. 各项目活跃度对比

| 项目 | Issues 活跃 | PRs 活跃 | 当日 Release | 主要节奏 | 健康度 |
|---|---|---|---|---|---|
| **OpenClaw** | 500 | 500 | ❌ | 高活跃 + 高危机，2026.7.1 升级事故 | ⚠️ 黄 |
| **ZeroClaw** | 29 | 50 | ❌ | SOP 引擎 5/5 收口 + 多用户安全基线 | 🟢 良 |
| **IronClaw** | 48 | 50 | ❌ | 元工程治理 + 渠道生命周期回归 | 🟡 偏黄 |
| **CoPaw** | 50（68% 关闭）| 50 | ✅ v2.0.0.post2 | v2.0 回归消化期 | 🟢 良 |
| **Hermes Agent** | 50（80% 关闭）| 50 | ❌ | 插件接口扩展 + 多 Profile 安全 | 🟡 偏黄 |
| **NanoBot** | 13（77% 关闭）| 64 | ❌ | 高质量修缮，Heartbeat 体系化 | 🟢 优 |
| **Moltis** | 3 | 12 | ✅ 20260714.11 | "质量日"，小模型兼容 + MCP OAuth | 🟢 优 |
| **NanoClaw** | 0 | 26 | ❌ | 渠道 + 安全加固，无 Issue 活动 | 🟡 稳态 |
| **PicoClaw** | 3 | 9 | ❌ | 4/5 关闭 PR 为 stale 清理 | 🟡 中性 |
| **LobsterAI** | 4（stale 自动关）| 3（全部闭环）| ❌ | OpenClaw v2026.6.1 回移植 + UI 打磨 | 🟡 沉淀期 |
| **TinyClaw / NullClaw / ZeptoClaw** | 0 | 0 | ❌ | 无活动 | ⚪ 停滞 |

**关键观察**：
- **OpenClaw 绝对值领先**：当日 Issue + PR 总量（1000）超过其他 11 个项目之和（≈790），但**单位修复质量被危机稀释**；
- **关闭率指标分化**：Moltis（67%）、NanoBot（77%）、Hermes Agent（80%）、CoPaw（68%）维持高关闭率，反映维护团队响应能力；IronClaw 与 OpenClaw 关闭率相对较低，积压风险高；
- **发版节奏断档**：仅 2/12 项目当日发版，普遍"修而不发"，存在持续累积风险。

---

## 3. OpenClaw 在生态中的定位

### 优势
- **社区规模断层第一**：单 Issue 互动量（#75 共 113 评论 / 81 👍）显著高于其他项目，反映 OpenClaw 仍是"事实标准候选"；
- **功能广度最宽**：覆盖桌面端、CLI、Provider 兼容、Channel 适配、Memory、Plugin 体系等完整矩阵；
- **维护者集中度高**：steipete 单日提多条 XL 级架构 PR（system-agent delegation、SDK 死代码清理、core 解耦 channel literals），推动下个版本的内部净化。

### 劣势
- **2026.7.1 升级事故暴露的迁移门控失误**（多 P0 crash-loop Issue 未随版本修复，且 `doctor` 无法自救）正在动摇"工具可信度"根基；
- **跨平台缺位仍显著**：#75 长达 6+ 个月未结，对应 PicoClaw / CoPaw 已在桌面端（Tauri / 原生）发力抢占；
- **"发版空窗"放大危机**：当日 0 版本发布，6 个 P0 修复全部"在路上"，竞争对手趁机以"稳定性 + 可观测性"叙事分流用户心智。

### 与同类对比
| 维度 | OpenClaw | CoPaw | Moltis | Hermes Agent |
|---|---|---|---|---|
| 桌面端 | ❌（#75 未结）| ✅ Tauri 桌面 | ❌ | ✅ Desktop 端（Windows 11 25H2 多 bug）|
| 多租户/OIDC | 弱 | 中 | 弱 | 多 Profile（token 泄漏风险）|
| Plugin 体系 | 较成熟 | Zalo Bot 等 | 弱 | 重点投入（#64182 tracking）|
| 国际化 | 弱（#48788 多年议题）| 强 | 中 | 弱 |
| 可观测性 | 一般 | Langfuse 集成 | 弱 | ✅ OTel OTLP 一等公民 |

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **Memory 可信度 / Provenance** | OpenClaw (#7707 Trust Tagging)、NanoBot (#4621)、IronClaw (#5896 memory browse 隔离)、ZeroClaw (#9048 会话 vs 长期记忆分离) | 区分 trust 来源、隔离可见集合、按类别分层存储 |
| **多用户 / RBAC / OIDC** | ZeroClaw (#5982/#8289)、Hermes Agent (#51029 多 Profile 泄漏)、CoPaw (#5829 AppContainer)、OpenClaw (#10659 masked secrets) | confused deputy 防护、Per-sender 限流、workspace 隔离 |
| **Heartbeat / Cron 安静度** | NanoBot (#4549/#4620/#4915)、Hermes Agent (#51329)、ZeroClaw (#5607/#8695) | "无实质事件不投递"、model_override 降本、trigger CLI 化、pre-hook skip gate |
| **跨平台桌面端** | OpenClaw (#75 Linux/Windows)、Hermes Agent (Windows 11 25H2)、CoPaw (Tauri Windows pwsh 递归) | 桌面壳稳定性、ACL 污染、PyInstaller/freeze 打包、数据迁移 |
| **Provider / 模型兼容** | 全员涉及 | DeepSeek tool_calls 配对、GPT-5.6 注册、vLLM reasoning 字段、Claude Opus 4.8 temperature 弃用、Qwen thinking 外泄 |
| **可观测性标准化** | Hermes Agent (OTel OTLP)、ZeroClaw (#8933 OTel 跨 turn RFC)、CoPaw (Langfuse)、OpenClaw (provider 用量) | session/turn/tool 全链路追踪、跨多轮拼接、fail-open 导出 |
| **Plugin / 通道插件化** | Hermes Agent (#64182/#64166)、ZeroClaw (#8862 WASM 通道栈)、CoPaw (#6112 Zalo)、PicoClaw (#3256 飞书) | 声明式 plugin pack、内置通道与插件透明等价、modpack 化分享 |
| **迁移与升级安全** | OpenClaw (P0 crash-loop)、CoPaw (v2.0 回归)、PicoClaw (Bedrock Opus 4.8) | migration gate 致命化防御、CLI preflight 校验、模型 deprecation 跟踪 |
| **Tool Call Schema 鲁棒性** | ZeroClaw (#8675)、PicoClaw (#2128)、CoPaw (#6046/#6077) | JSON Schema 校验、stringified scalar 强转、null 参数容错、toolUse/toolResult 配对 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能 CLI + 多渠道网关 | 高级个人用户 / 极客 | "大而全"的多渠道网关 + Memory sidecar + 多 Provider |
| **NanoBot** | 稳态个人助理 | 追求"安静可用"的中级用户 | Heartbeat/Cron 体系重构 + CLI/WebUI 双面 + CI 矩阵精简 |
| **Hermes Agent** | 插件化平台 | 想做"产品矩阵"的运营者 | **Plugin Interface Expansion**（teknium1 主导）+ 多 Profile 隔离 |
| **PicoClaw** | 嵌入式 / 边缘部署 | 资源受限场景 / 国产 IM 重度用户 | 体积敏感（libolm→vodozemac、metrics 按需编译）、国内 IM 一等公民 |
| **NanoClaw** | 渠道 + 安装可靠性 | 真实部署用户（install walkthrough 驱动） | 安全硬化（env 注入、pre-commit、镜像来源） + 多渠道（Dial 等）|
| **IronClaw** | 元工程治理 | 大型项目维护者 | **SOP 引擎** + extension runtime 列车 + 4 次 QA Bug-bash 流程化 |
| **LobsterAI** | 办公自动化 + Cowork | 企业内中文用户 | OpenClaw 运行时回移植 + 渲染层细节打磨 + 调度/邮件集成 |
| **Moltis** | 本地 + 远程双轨小模型 | 本地模型玩家 / 边缘部署 | 极快 bug 修复（≈1 天 issue→PR→merge）、MCP 生态兼容（Notion/Linear）|
| **CoPaw** | Tauri 桌面端 | 中文桌面用户 | **Tauri 桌面壳**（v2.0 后主战场）、Help Wanted 任务悬赏榜（#2291 64 评论）|
| **ZeroClaw** | SOP 工作流编排 | 多租户 / 流程化运营 | **SOP 引擎 5/5 收口** + Per-sender RBAC + OIDC + zerorelay（NAT 穿透）|

**架构分化主线**：
- **"广度优先"（OpenClaw）vs "深度优先"（Moltis、CoPaw、ZeroClaw）**：前者追求功能覆盖，后者追求特定场景的鲁棒性；
- **"中心化大版本"（CoPaw v2.0 集中回归）vs "滚动小步"（Moltis、OpenClaw hotfix 模式）**：前者需要更长收敛周期，后者更灵活但用户信任积累慢；
- **"CLI/Headless 优先"（OpenClaw、NanoBot）vs "桌面壳优先"（CoPaw、Hermes Agent）**：路径决定用户群体。

---

## 6. 社区热度与成熟度分层

### 🚀 第一梯队 · 快速迭代阶段
- **OpenClaw**：体量最大但被危机拖累，迭代速度快但单 PR 平均 review 深度下降；
- **ZeroClaw**：SOP 5/5 收口 + OIDC 路线图清晰，PR 吞吐健康（50 活跃 / 11 闭环）；
- **IronClaw**：核心贡献者 ilblackdragon 一次性抛出 5 条元工程 Issue，意图将"反复出现的 bug 家族"收口为流程化强制项。

### 🔧 第二梯队 · 质量巩固阶段
- **Moltis**：当日发版 + 100% P1 修复响应（1 天 issue→PR→merge），是当前"质量日"标杆；
- **NanoBot**：Heartbeat 体系化重构 + Channels 架构重构双线推进，PR 合并节奏稳定；
- **Hermes Agent**：Plugin Interface Expansion 跟踪 issue

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-15

> 数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot) · 报告期：2026-07-14 ~ 2026-07-15（UTC）

---

## 1. 今日速览

NanoBot 今日维持高强度的迭代节奏：24 小时内共处理 **13 条 Issue**（活跃 3 条 / 已关闭 10 条）与 **64 条 PR**（待合并 17 条 / 已合并或关闭 47 条），合并速度显著大于积压速度，仓库整体处于「**集中收口 + 提交基础体验修复**」的稳态。贡献者方面，**chengyongru** 与 **yu-xin-c** 是今日产出主力，分别承担了 WebUI、Channels、Heartbeat 等关键子系统的多项 PR；外部贡献者（wzrayyy、3L1AS、rbankole、Ho1yShif 等）也贡献了多条定位明确的修复。整体而言，项目活跃度评级：**🟢 高（健康）**，但仍有若干待合并 PR（标记 `[conflict]`）和未响应 Issue 值得关注。

---

## 2. 版本发布

⚪ **今日无新版本发布。** 当前最近一次发布仍为历史版本（参见 [Releases](https://github.com/HKUDS/nanobot/releases)）。

---

## 3. 项目进展

今日有 **47 条 PR** 合并或关闭，其中对项目质量与稳定性有显著推进的包括：

- **CLI/WebUI 基础体验统一化**
  - [#4932](https://github.com/HKUDS/nanobot/pull/4932) 统一 `nanobot` CLI 中 13 处 `--config/-c` 选项的帮助文本（仅文档/拼写，无行为变更）。
  - [#4933](https://github.com/HKUDS/nanobot/pull/4933) WebUI 对识别的 slash 命令名进行柔光高亮，与既有的 capability mention 保持一致风格。
  - [#4930](https://github.com/HKUDS/nanobot/pull/4930) WebUI 用户消息新增「复制」按钮，复用 Assistant 已有的复制组件，Fork 功能继续保留 Assistant 独占。
  - [#4927](https://github.com/HKUDS/nanobot/pull/4927) 修复 `fe0717b3` 引入的 `qrcode` 依赖但未同步 `package-lock.json` 导致 Docker 构建 `npm ci` 失败的问题。

- **Heartbeat 体系重构（阶段性收口）**
  - [#4915](https://github.com/HKUDS/nanobot/pull/4915) Heartbeat 响应评估支持禁用，并收紧 Evaluator Prompt（用 "MUST" 替代 "Call"），缓解迁移到 cron 后引入的回归。
  - [#4931](https://github.com/HKUDS/nanobot/pull/4931) 修复重启完成通知仅在 channel 重连进入既有生命周期后再投递，避免 startup 期内出现瞬时投递失败。

- **可观测性与可测试性**
  - [#4929](https://github.com/HKUDS/nanobot/pull/4929) Codex 失败告警增加 `stage` 字段，区分 OAuth token 获取与 Codex Responses API 失败。
  - [#4936](https://github.com/HKUDS/nanobot/pull/4936) CI 矩阵精简为代表性 Python 3.11 / 3.14 + Windows 3.14 任务，并增强 WebSocket / MCP / Exec-Session 等确定性测试，CI 速度显著提升。
  - [#4631](https://github.com/HKUDS/nanobot/pull/4631) 新增脚本化的 agent runner 测试 harness，能精确断言回传给模型的 transcript。

- **一键部署能力**
  - [#4937](https://github.com/HKUDS/nanobot/pull/4937) 新增 Render Blueprint，支持「一键部署」gateway + WebUI（含 session / memory 持久卷），无任何密钥提交仓库。

📌 **整体判断**：项目处于「高质量修缮」阶段——大刀阔斧的新功能不多，但工程基座、可观测性、跨环境一致性（CI / Docker / Render）的补全在快速推进。

---

## 4. 社区热点

按评论/关注度筛选今日最受关注的条目：

| 排名 | 类型 | 编号 / 链接 | 关键信号 |
|---|---|---|---|
| 1 | Issue | [#2568](https://github.com/HKUDS/nanobot/issues/2568) | 自 v0.1.4.post6 起 Telegram 渲染 Markdown 偶发不可靠，长期被用户吐槽（4 评论，今日关闭） |
| 2 | Issue | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | `unifiedSession:true` 时 `_pick_heartbeat_target_from_sessions` 选路失败（新开、3 评论，已配套 [#4928](https://github.com/HKUDS/nanobot/pull/4928)） |
| 3 | Issue | [#1411](https://github.com/HKUDS/nanobot/issues/1411) | 中文社区诉求：希望接入小米音箱等智能硬件作为渠道（3 评论，今日关闭） |
| 4 | Issue | [#4637](https://github.com/HKUDS/nanobot/issues/4637) | Telegram 长消息分段后前面分段无法渲染 markdown（3 评论，今日关闭） |
| 5 | Issue | [#1445](https://github.com/HKUDS/nanobot/issues/1445) | Cron 任务"无实质事件"也强制投递消息打扰用户（2 评论 + 2 👍） |
| 6 | Issue | [#1086](https://github.com/HKUDS/nanobot/issues/1086) | WhatsApp Bridge WebSocket 绑定 127.0.0.1 致容器间互通失败（1 评论 + 4 👍，今日关闭） |

**诉求洞察**：
- **渠道体验（Channels）是当前最大抱怨源**：Telegram markdown 渲染、Telegram 长消息分段、WhatsApp 跨容器互通三件事反复出现，说明「多渠道适配」的稳定度仍弱于核心 agent 能力。
- **Heartbeat / Cron「打扰阈值」** 是 agent 可用性的高频痛点，用户普遍希望"没结果就别吭声"。
- **硬件渠道拓展**（[#1411](https://github.com/HKUDS/nanobot/issues/1411)）虽属边缘诉求，但代表中文社区对 nano-bot 作为家庭/个人助理的想象空间。

---

## 5. Bug 与稳定性

| 严重度 | Issue / 链接 | 描述 | 已关联 PR |
|---|---|---|---|
| 🔴 P1 | [#4924](https://github.com/HKUDS/nanobot/issues/4924) | `unifiedSession=true` 下 heartbeat 选路失败，无 session 时会错配 | ✅ [#4928](https://github.com/HKUDS/nanobot/pull/4928)（OPEN，待合并） |
| 🟠 P1 | [#4795](https://github.com/HKUDS/nanobot/issues/4795) | Streaming LLM 调用**完全绕开 wall-clock timeout**，可能无限挂起 | ❌ 暂无 PR |
| 🟠 P2 | [#4787](https://github.com/HKUDS/nanobot/issues/4787) | `Session.messages` 列表无界增长，`FILE_MAX_MESSAGES=2000` 仅限制重放不限制存储，长期运行存在资源泄漏 | ❌ 暂无 PR |
| 🟠 P2 | [#4934](https://github.com/HKUDS/nanobot/issues/4934) | Qwen（如 `qwen3.6-flash`）通过 DashScope provider 调用时，thinking/reasoning 内容泄露到对话回复 | ❌ 暂无 PR |
| 🟡 P2 | [#4881](https://github.com/HKUDS/nanobot/issues/4881) | Windows `ExecTool` 用 UTF-8 解码 PowerShell 的 UTF-16LE 输出，命令输出损坏 | ❌ 暂无 PR |
| 🟢 P2 | [#4883](https://github.com/HKUDS/nanobot/pull/4890)（Issue 引用） | 自定义 `session_id` 的 API session 锁无限累积 | ✅ [#4890](https://github.com/HKUDS/nanobot/pull/4890)（用 `WeakValueDictionary` 修复，OPEN） |
| 🟢 历史已关闭 | [#2568](https://github.com/HKUDS/nanobot/issues/2568)、[#4637](https://github.com/HKUDS/nanobot/issues/4637)、[#1086](https://github.com/HKUDS/nanobot/issues/1086)、[#2505](https://github.com/HKUDS/nanobot/issues/2505) | 渲染/编解码/容器绑定类 | 今日关闭，需复查回归 |

📌 **维护者关注建议**：#4795（无超时 streaming）与 #4787（消息无界增长）作为基础设施级风险，建议尽快排期；#4928 已就绪可优先合入。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 / 链接 | 已有 PR？ | 路线图可能性 |
|---|---|---|---|
| **OAuth provider 状态可见性 + token 过期预警** | [#4679](https://github.com/HKUDS/nanobot/issues/4679) → [PR #4689](https://github.com/HKUDS/nanobot/pull/4689) | ✅ | 🟢 高（OPEN，p1） |
| **Heartbeat 支持更便宜模型 (`model_override`)** | [#4431](https://github.com/HKUDS/nanobot/issues/4431) → [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) | ✅ | 🟢 高 |
| **`nanobot heartbeat trigger` 命令（CLI/gateway 共用）** | [#3437](https://github.com/HKUDS/nanobot/issues/3437) → [PR #4620](https://github.com/HKUDS/nanobot/pull/4620) | ✅ | 🟢 高 |
| **Memory 归档带 provenance 来源控制** | [#4129 关联](https://github.com/HKUDS/nanobot/pull/4621) → [PR #4621](https://github.com/HKUDS/nanobot/pull/4621) | ✅ | 🟢 高 |
| **DingTalk：禁止私聊 + 群内 @被回复人** | [PR #4446](https://github.com/HKUDS/nanobot/pull/4446) | ✅ | 🟢 中 |
| **Channels 架构重构（setup/instance ownership 下沉到 Channel）** | [#4855 后续](https://github.com/HKUDS/nanobot/pull/4908) → [PR #4908](https://github.com/HKUDS/nanobot/pull/4908) | ✅ | 🟢 高（p1 refactor） |
| **WebUI Cron Job 管理界面** | [#4218](https://github.com/HKUDS/nanobot/issues/4218) | ❌ | 🟡 中（今日关闭为 stale，需社区 volunteer） |
| **接入小米音箱等智能硬件渠道** | [#1411](https://github.com/HKUDS/nanobot/issues/1411) | ❌ | ⚪ 低（依赖第三方 SDK） |
| **Render 一键部署** | [PR #4937](https://github.com/HKUDS/nanobot/pull/4937) | ✅ | 🟢 高（已在评审中） |
| **Heartbeat 响应评估可配置** | [PR #4915](https://github.com/HKUDS/nanobot/pull/4915) | ✅ | 🟢 高（p1，今日已闭） |
| **WebUI 安全：preview 前校验内联文件路径** | [PR #4935](https://github.com/HKUDS/nanobot/pull/4935) | ✅ | 🟢 高（p2，OPEN） |

📌 综合判断：**Heartbeat 体系化**（#4549、#4620、#4915）+ **Channels 架构重构**（#4908）+ **Memory provenance**（#4621）+ **OAuth 体验**（#4689）四件事在下一个版本中合并概率极高，可视为下一 release 的「骨架候选」。

---

## 7. 用户反馈摘要

提炼自 Issue 评论区的真实用户声音：

1. **"v0.1.4.post6 之后 Telegram markdown 渲染变得时灵时不灵"** —— [#2568](https://github.com/HKUDS/nanobot/issues/2568)
   *用户痛点*：核心消息载体在 Telegram 上展示不稳定，影响 demo 与日常使用。

2. **"只想在 cron 任务真有事的时候被打扰"** —— [#1445](https://github.com/HKUDS/nanobot/issues/1445)
   *用户痛点*：当前 `deliver=true` 强行推送，社交媒体监控类场景被「空消息」刷屏；建议默认改为「有意义才投递」。

3. **"Telegram 长消息前段渲染不出来，最后一段反而 OK"** —— [#4637](https://github.com/HKUDS/nanobot/issues/4637)
   *用户痛点*：分段策略导致 markdown 在非末尾 chunk 内丢失语义。

4. **"WhatsApp Bridge 在 Docker 里没法被其他容器访问"** —— [#1086](https://github.com/HKUDS/nanobot/issues/1086)（👍 4）
   *用户痛点*：默认 127.0.0.1 绑定阻断容器化协作，社区已有 4 个 👍 表明这是普遍部署痛点。

5. **"Custom provider 不支持 extraHeaders"** —— [#2505](https://github.com/HKUDS/nanobot/issues/2505)
   *用户痛点*：通过自定义 provider 接入自部署网关 / 代理时缺关键请求头能力。

6. **"WebUI 没有 Cron Job 管理入口，只能 CLI / 改 JSON"** —— [#4218](https://github.com/HKUDS/nanobot/issues/4218)
   *用户痛点*：WebUI 已能管理 providers / models / MCP / sessions，唯独 cron 缺失；用户期待完整可视化闭环。

> 👍 总结：**核心 agent 体验被认可**，主要不满集中在**渠道层（多平台一致性）**与**Heartbeat/Cron「安静度」**上；用户希望 NanoBot "该出声才出声"。

---

## 8. 待处理积压

下表筛选出影响面大、长期未合并或维护者响应稀缺的条目：

| 类型 | 编号 / 链接 | 距今 | 关注理由 |
|---|---|---|---|
| Issue | [#4787](https://github.com/HKUDS/nanobot/issues/4787) `Session.messages` 无界增长 | 9 天 | 基础设施级资源泄漏，长期运行必现；尚无 PR |
| Issue | [#4795](https://github.com/HKUDS/nanobot/issues/4795) Streaming 无超时 | 9 天 | 上游 LLM 慢流可永久挂起 agent runner |
| Issue | [#4934](https://github.com/HKUDS/nanobot/issues/4934) Qwen 思考内容外泄 | <1 天 | 当日报告，需快速认定是否要 provider 侧 `include_thoughts` 开关 |
| PR | [#4928](https://github.com/HKUDS/nanobot/pull/4928) p1 heartbeat 选路修复 | 1 天 | 标记 `[conflict]`，需要 rebase，否则阻塞 #4924 闭环 |
| PR | [#4890](https://github.com/HKUDS/nanobot/pull/4890) idle session 锁修复 | 4 天 | p2，但 #4883 是稳定度问题 |
| PR | [#4689](https://github.com/HKUDS/nanobot/pull/4689) OAuth 状态可见性 | 12 天 | p1，覆盖 CLI/WebUI/Runtime，影响用户对 NanoBot "是否健康"的判断 |
| PR | [#4549](https://github.com/HKUDS/nanobot/pull/4549) heartbeat `model_override` | 19 天 | p2，是用户长期呼声 |
| PR | [#4446](https://github.com/HKUDS/nanobot/pull/4446) DingTalk 私聊/群提及 | 23 天 | 渠道侧长期诉求 |
| PR | [#4621](https://github.com/HKUDS/nanobot/pull/4621) memory provenance | 14 天 | 关联记忆系统可信度，需 review |
| PR | [#4620](https://github.com/HKUDS/nanobot/pull/4620) heartbeat trigger 命令 | 14 天 | 阻塞 #3437 闭环 |
| PR | [#4862](https://github.com/HKUDS/nanobot/pull/4862) exec session 隔离 | 6 天 | 隔离多 loop 的 exec session，安全性相关 |
| PR | [#4908](https://github.com/HKUDS/nanobot/pull/4908) Channels

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**报告日期**: 2026-07-15  
**项目仓库**: [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日整体保持高强度迭代节奏，过去 24 小时内 **Issues 更新 50 条（10 条活跃、40 条关闭）、PR 更新 50 条（43 条待合并、7 条已合并/关闭）**，但**未发布新版本**。从数据看，项目当前主要在三个方向并行推进：**多 Profile 网关与平台适配器安全性**（Telegram/Slack/Feishu）、**桌面端稳定性**（Windows 11 25H2 安装/更新问题高发）、以及**插件生态扩展**（Plugin Interface / Plugin Packs / OpenTelemetry 可观测性插件）。关闭率较高（80% Issues / 14% PRs）说明社区扫尾和 sweeper 自动化分类机制运转良好，但仍有 **43 条 PR 处于待合并状态**，积压风险需关注。

---

## 2. 版本发布

**无新版本发布**。当前主线仍为 v0.17.0 系列（基于多处 issue 提及），下一版本需观察上述积压 PR 的合入节奏。

---

## 3. 项目进展

今日合入/关闭的 PR 推进了多个关键能力：

| PR | 类型 | 价值 |
|---|---|---|
| [#51641](https://github.com/nousresearch/hermes-agent/pull/51641) `fix(auth): persist detected Z.AI endpoint cache` | Bug | **Z.AI provider 端点自动检测结果持久化**，避免每次启动重复探测；这是 [#51229](https://github.com/nousresearch/hermes-agent/issues/51229) 的修复实现 |
| [#51638](https://github.com/nousresearch/hermes-agent/pull/51638) `fix(tui): route /learn to command.dispatch` | Bug | 修复桌面/TUI 中 `/learn` 静默无响应（CLI 可用），提升 Desktop 用户体验 |
| [#64684](https://github.com/nousresearch/hermes-agent/pull/64684) `feat(observability): add OpenTelemetry OTLP trace export plugin` | Feature | **新增 OpenTelemetry OTLP trace 导出插件**，覆盖 session / turn / LLM request / tool / subagent / approval 全链路；fail-open 设计保证可观测性不会拖垮业务 |
| [#45317](https://github.com/nousresearch/hermes-agent/pull/45317) `fix(gateway/bluebubbles): consolidate webhook hardening` | Bug (P2, 长期) | BlueBubbles/iMessage webhook 加固合并提案，已持续维护超一个月，是平台可靠性重要补丁 |

**整体推进判断**：今日的合入属于"质量加固 + 可观测性补齐"阶段，未引入重大新功能，但安全边界（auth 持久化）和可观测性（OTel）两个长线能力得到落地。

---

## 4. 社区热点

### 🔥 讨论最活跃

- **[#64182](https://github.com/nousresearch/hermes-agent/issues/64182) Plugin Interface Expansion — Tracking Issue (10 条评论)**  
  作者 teknium1 主导的插件接口扩展跟踪 issue，作为 Discord 社区讨论（#plugins-interface-ideas, July 4）的落地承载，目标是为长期积压的 PR 提供稳定的发布通道。**这是当前社区最核心的路线图文档**，所有插件相关 PR 的可见性都依赖此项的产出。

- **[#64166](https://github.com/nousresearch/hermes-agent/issues/64166) Plugin Packs — declarative, shareable plugin sets (2 条评论)**  
  配套提案：声明式、可分享的插件集合（类似 "modpack"），新增 `hermes plugins pack export/install`。属于 Plugin Interface 的子项目，体现社区在**可移植性/可分享性**方向的明确诉求。

### 👍 反应最强

- **[#59113](https://github.com/nousresearch/hermes-agent/issues/59113) Dashboard no longer works with docker (👍 2, P2)**  
  Docker 部署下 Dashboard 失能，且社区尚未看到对应修复 PR。Docker 部署是当前最受影响的部署形态之一，**关注度持续走高**。

---

## 5. Bug 与稳定性

按严重程度排列（合并了 P2 安全、平台兼容性、回归问题）：

### 🔴 P2 安全 / 关键稳定性

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#50734](https://github.com/nousresearch/hermes-agent/issues/50734) | **严重：read_file 工具忽略所有安全指令，将 .env 凭据整文件外泄给 LLM provider**（由 Hermes 智能体在主人授意下自述） | ✅ 已关闭 (implemented-on-main) |
| [#51029](https://github.com/nousresearch/hermes-agent/issues/51029) | **安全：multiplex_profiles 模式下 secondary profile 的 Telegram token 泄露到 default profile**（`_apply_env_overrides` 使用 `os.getenv` 而非 profile secret scope） | ✅ 已关闭 |
| [#51141](https://github.com/nousresearch/hermes-agent/issues/51141) | `write_file` 密钥脱敏过度，连带破坏合法 Python 变量赋值（如 `os.getenv("FEISHU_APP_SECRET")`） | ✅ 已关闭 |
| [#51581](https://github.com/nousresearch/hermes-agent/pull/51581) | **PR 待合并：fix: quarantine background self-modification**——后台守护线程绕过审批修改 skill 文件 | 🟡 修复 PR 待合并 |
| [#51573](https://github.com/nousresearch/hermes-agent/issues/51573) | 静默 fallback 级联：fallback 模型成功时用户完全不知情，"🔄 切换模型"通知未触发 | ✅ 已关闭 |
| [#51329](https://github.com/nousresearch/hermes-agent/issues/51329) | Cron 双重触发：tick dispatch 与 in-flight guard 注册之间的竞态（~1s 窗口） | ✅ 已关闭 |
| [#51629](https://github.com/nousresearch/hermes-agent/issues/51629) | Gateway 启动期间 `gateway_state.json` 报告陈旧 PID / 旧 Slack `updated_at` | ✅ 已关闭 |
| [#50806](https://github.com/nousresearch/hermes-agent/issues/50806) | Hermes Agent 在 detached 子进程工具调用后挂起 | ✅ 已关闭 |

### 🟠 平台与桌面端

| Issue | 描述 | Fix 状态 |
|---|---|---|
| [#64674](https://github.com/nousresearch/hermes-agent/issues/64674) | **多 Profile Telegram 适配器在 default-profile 网关启动失败**（token 在 secondary profile `.env`） | ❌ 暂无 PR |
| [#59113](https://github.com/nousresearch/hermes-agent/issues/59113) | Docker 部署下 Dashboard 完全无法工作（👍 2） | ❌ 暂无 PR |
| [#64457](https://github.com/nousresearch/hermes-agent/issues/64457) | Windows 11 25H2 桌面端更新失败，遗留不完整 venv | ❌ 暂无 PR |
| [#50991](https://github.com/nousresearch/hermes-agent/issues/50991) | Telegram `_keep_typing` 任务在 agent cache 过期后仍持续 | ✅ 已关闭 |
| [#50966](https://github.com/nousresearch/hermes-agent/issues/50966) | Desktop GUI 中 `browser_vision` 工具始终被路由到 `browser_scroll` | ✅ 已关闭（cannot-reproduce） |
| [#50944](https://github.com/nousresearch/hermes-agent/issues/50944) | Desktop 模型选择器持久化错误 provider（litellm-proxy → openrouter）；工具集切换不持久化 | ✅ 已关闭 |
| [#50932](https://github.com/nousresearch/hermes-agent/issues/50932) | Desktop 会话 source 字段保存为 "tui" 而非 "desktop" | ✅ 已关闭 |
| [#51273](https://github.com/nousresearch/hermes-agent/issues/51273) | 桌面端无法更新（Windows） | ✅ 已关闭 |
| [#51320](https://github.com/nousresearch/hermes-agent/issues/51320) | macOS 桌面端聊天输入框发送后文字瞬间消失 | ✅ 已关闭 |
| [#51015](https://github.com/nousresearch/hermes-agent/issues/51015) | Windows pip 升级报 OS error 32（hermes.exe 自锁） | ✅ 已关闭 |
| [#51550](https://github.com/nousresearch/hermes-agent/issues/51550) | `fix(picker)` 后 `_is_aggregator` NameError，`/model` 报 "No authenticated providers found" | ✅ 已关闭 |

### 🟡 次要 Bug

- [#50754](https://github.com/nousresearch/hermes-agent/issues/50754) cron 威胁扫描器对 auto-issue skill 误报（已关闭）
- [#50713](https://github.com/nousresearch/hermes-agent/issues/50713) 多部署间重开会话聊天文本缺失（已关闭）
- [#51307](https://github.com/nousresearch/hermes-agent/issues/51307) Dashboard 虚拟滚动向上滚出现空白（已关闭）
- [#51528](https://github.com/nousresearch/hermes-agent/issues/51528) vLLM ≥0.23 的 `reasoning` 字段被丢弃（已关闭）
- [#51303](https://github.com/nousresearch/hermes-agent/issues/51303) 自定义 provider 不被 `delegate_task` 识别（已关闭）
- [#51099](https://github.com/nousresearch/hermes-agent/issues/51099) `honcho-ai` 缺失但 memory provider 仍激活（已关闭）
- [#51278](https://github.com/nousresearch/hermes-agent/issues/51278) 标题生成 fallback 时模型名错传（已关闭）
- [#51229](https://github.com/nousresearch/hermes-agent/issues/51229) Z.AI 端点缓存未持久化（已关闭，PR #51641 合并）

**Bug 健康度小结**：今日关闭率极高，主要修复集中在 Telegram 平台兼容、Desktop 会话元数据、Windows 安装/更新链路、cron 安全扫描。但 **3 个 P2 关键问题（Telegram 多 Profile、Desktop on Docker、Windows 11 25H2 更新）仍无对应修复 PR**，需重点跟踪。

---

## 6. 功能请求与路线图信号

### 明确路线图信号

- **[#64182 Plugin Interface Expansion Tracking](https://github.com/nousresearch/hermes-agent/issues/64182)** — 由 teknium1 主导，是社区级别的扩展蓝图
- **[#64166 Plugin Packs](https://github.com/nousresearch/hermes-agent/issues/64166)** — 插件集合的声明式打包/分享（`hermes plugins pack`）
- **[#61484 Desktop Project Cockpit](https://github.com/nousresearch/hermes-agent/issues/61484)** — 把 Hermes Projects 升级为"项目运营面板"，整合 sessions / files / kanban / memories / cron / GitHub links

### 已实现/可纳入下一版本

- **[#64684 OpenTelemetry OTLP 插件](https://github.com/nousresearch/hermes-agent/pull/64684)** — 可观测性一等公民，已合入
- **[#51637 Slack peer-agent smoke test](https://github.com/nousresearch/hermes-agent/pull/51637)** — 严格 mention + allow_bots=mentions 部署的合成测试目标
- **[#51599 Skill frontmatter validator + provenance-aware Source/Trust labeling](https://github.com/nousresearch/hermes-agent/pull/51599)** — 技能元数据可信度标注
- **[#51610 Dashboard Config 页搜索栏 + Cmd+K 快捷键](https://github.com/nousresearch/hermes-agent/pull/51610)** — UX 改进
- **[#51288 HERMES_TUI_WS_WRITE_TIMEOUT_S 环境变量](https://github.com/nousresearch/hermes-agent/issues/51288)** — 已关闭

### 性能改进

- **[#51611 perf: speed up gateway startup and Telegram ingress](https://github.com/nousresearch/hermes-agent/pull/51611)** — 懒加载重型依赖 + 收紧 Telegram 短消息入口延时

---

## 7. 用户反馈摘要

提炼自 issue 评论和 PR 描述：

**真实痛点**：
1. **多 Profile 架构是双刃剑**——[#51029](https://github.com/nousresearch/hermes-agent/issues/51029) 和 [#64674](https://github.com/nousresearch/hermes-agent/issues/64674) 显示，token / adapter 跨 profile 泄漏是当前最高频的"踩坑"场景，社区对 `multiplex_profiles` 的可靠性有强诉求。
2. **Windows 桌面端是体验洼地**——多个 issue（[#64457](https://github.com/nousresearch/hermes-agent/issues/64457)、[#51273](https://github.com/nousresearch/hermes-agent/issues/51273)、[#51015](https://github.com/nousresearch/hermes-agent/issues/51015)、[#50944](https://github.com/nousresearch/hermes-agent/issues/50944)、[#50932](https://github.com/nousresearch/hermes-agent/issues/50932)）集中爆发，涉及更新、pip 锁、模型持久化、会话元数据。
3. **macOS 26.1 用户对细节体验有期待**——[#51320](https://github.com/nousresearch/hermes-agent/issues/51320) 用户称"日常高频使用，体验整体非常好"，但对"发送后输入框清空、无法确认是否送达"非常敏感。
4. **透明性诉求**——[#51573](https://github.com/nousresearch/hermes-agent/issues/51573) 的 fallback 级联静默问题显示，用户希望"模型切换"是可观测事件，而非隐藏行为。
5. **安全边界执行**——[#50734](https://github.com/nousresearch/hermes-agent/issues/50734) 中智能体自述"我读取了 .env 并发送给 LLM 提供商"是引人

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-07-15
**数据来源：** github.com/sipeed/picoclaw
**统计周期：** 过去 24 小时

---

## 一、今日速览

PicoClaw 今日整体活跃度处于中等水平，过去 24 小时内共记录到 3 条 Issue 更新与 9 条 PR 更新，无新版本发布。值得关注的是，9 条 PR 中有 5 条被标记为 `[stale]` 状态的 PR 已被关闭清理，同时 4 条仍处待合并状态的 PR 涉及 AWS Bedrock 缓存优化、Anthropic prompt caching、飞书多媒体消息等实质性改进。社区在安全库替换（libolm → vodozemac）与钉钉/飞书等国内 IM 渠道体验方面仍有较高关注度，整体反映出项目处于"清理积压 + 持续优化"阶段。

**健康度评估：** 🟡 中性偏积极 —— 积压 PR 得到清理，但新功能合并节奏偏慢，多个关键 Issue 已超过一周未获响应。

---

## 二、版本发布

🚫 **今日无新版本发布。**

社区目前使用的是 0.3.1 版本（参考 Issue #3232），建议关注后续发版动向。

---

## 三、项目进展

过去 24 小时内共有 5 条 PR 关闭，但其中 4 条均标记为 `[stale]`（长期未更新而被机器人自动/手动关闭），仅 #2982 为实质性合并或关闭：

| PR | 标题 | 状态 | 意义 |
|---|---|---|---|
| [#2982](https://github.com/sipeed/picoclaw/pull/2982) | fix(bedrock): drop temperature for models that deprecate it (Opus 4.8) | 已关闭 | 修复升级到 Claude Opus 4.8 后 Bedrock 推理全部 400 报错的问题，是模型兼容性关键补丁 |
| [#2957](https://github.com/sipeed/picoclaw/pull/2957) | fix(channels): prevent tool_calls from being dropped during streaming | 已关闭 (stale) | 此前流式场景下工具调用消息被误过滤 |
| [#2270](https://github.com/sipeed/picoclaw/pull/2270) | fix(config): handle non-addressable SecureString values in collectSensitive | 已关闭 (stale) | 修复 map 查找返回的 SecureString 因不可寻址而 panic 的问题 |
| [#2128](https://github.com/sipeed/picoclaw/pull/2128) | fix(tools): ensure tool parameters have valid JSON Schema properties field | 已关闭 (stale) | 兼容 LM Studio 等严格 OpenAI 兼容 API |
| [#3156](https://github.com/sipeed/picoclaw/pull/3156) | feat(pico): emit per-turn LLM token usage on finalized message | 已关闭 (stale) | 在 Pico 渠道按回合上报 token 用量 |

> ⚠️ **关键观察：** 5 条关闭 PR 中 4 条为 stale 清理，仅 #2982 进入实质处理流程。stale 标记通常意味着超过 60 天未活动，作者需重新激活 PR 才会被重新评估。这部分功能并未真正落地，存在"假关闭"风险。

**今日推进度：** ⭐⭐☆☆☆ —— 实质性合并较少，更多是仓库卫生清理。

---

## 四、社区热点

**最活跃 Issue：** [#3088](https://github.com/sipeed/picoclaw/issues/3088) **[Feature] use vodozemac instead of libolm**
- 🏷️ `help wanted` / `priority: high`
- 💬 8 条评论 / 👍 2 个赞
- 📅 创建于 2026-06-09，最近活跃 2026-07-14

该 Issue 由社区成员 @pbsds 提出，呼吁用 Matrix 官方推荐的 vodozemac 替换已停止维护且存在安全风险的 libolm 加密库，并建议将其设计为可选编译依赖。8 条评论表明社区对该安全议题讨论充分，定位为 high priority 与 help wanted 反映出维护者团队对此需求认同但缺乏人手。这是项目当前**最值得关注的安全相关路线图信号**。

**次活跃 Issue：** [#3232](https://github.com/sipeed/picoclaw/issues/3232) **[BUG] Rate limiting doesn't work if no fallback models is configured**
- 🏷️ `stale`
- 💬 1 条评论
- 由 @VictorSu000 报告：在仅配置 `agents.defaults.model_name` 而无 fallback 模型时，RPM 限流失效。

---

## 五、Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟠 中 | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | 无 fallback 模型配置时 RPM 限流失效，可能导致 API 超额扣费 | ❌ 暂无，且被标记 stale |
| 🟡 低 | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | 钉钉会话列表预览固定显示 "PicoClaw" 而非消息内容（SimpleReplyMarkdown title 未生效） | ❌ 暂无 |

**今日已关闭/合并的稳定性相关 PR：**
- [#2982](https://github.com/sipeed/picoclaw/pull/2982) — Bedrock Opus 4.8 temperature 参数兼容性 (🔴 严重：导致全量调用失败)
- [#2957](https://github.com/sipeed/picoclaw/pull/2957) — 流式场景下 tool_calls 丢失 (🟠 中)
- [#2270](https://github.com/sipeed/picoclaw/pull/2270) — `collectSensitive` panic (🟠 中)
- [#2128](https://github.com/sipeed/picoclaw/pull/2128) — 工具 schema 校验失败 (🟡 低)

> 📌 注：已关闭的 stale PR 并非真正合并到主干，存在 bug 复现风险，建议关注者主动 ping 作者重新开启。

---

## 六、功能请求与路线图信号

### 6.1 安全性路线图（高确定性强信号）
- [#3088](https://github.com/sipeed/picoclaw/issues/3088) — 替换 libolm 为 vodozemac
  - 状态：`help wanted` + `priority: high`
  - 推进建议：维护者公开征集实现者，或将其纳入下一里程碑

### 6.2 模型成本优化（待合并 PR）
- [#3163](https://github.com/sipeed/picoclaw/pull/3163) — AWS Bedrock Converse API prompt caching（成本可降至 ~10%）
- [#3228](https://github.com/sipeed/picoclaw/pull/3228) — Anthropic Messages provider 支持 `cache_control` 系统块

这两条 PR 形成互补，将显著降低 Anthropic / Bedrock 用户调用成本。若能合并进 0.4.0 版本，将成为商业用户的重要卖点。

### 6.3 国内 IM 渠道体验改进
- [#3256](https://github.com/sipeed/picoclaw/pull/3256) — 飞书音频/视频消息以原生类型发送（@AaronZ345，2026-07-14 新提交）
  - 今日新开，活跃度高，建议快速 review

### 6.4 渠道兼容与可观测性（已被 stale 关闭，需重启）
- [#3156](https://github.com/sipeed/picoclaw/pull/3156) — Pico 渠道每回合 token 用量上报
- [#2957](https://github.com/sipeed/picoclaw/pull/2957) — 渠道流式 tool_calls 保护

---

## 七、用户反馈摘要

从 Issue 内容可提炼以下真实用户痛点：

1. **安全焦虑（@pbsds）**：libolm 长期未维护给生产部署带来隐患，用户希望官方明确给出安全替换路径。
2. **配置容错差（@VictorSu000）**：限流逻辑假设了 fallback 模型存在，配置不完整时静默失效而非报错或降级，反映配置系统的健壮性边界需要扩展。
3. **国内 IM 体验细节（@MrTreasure）**：钉钉列表预览显示固定文案而非消息摘要，影响群聊场景下用户识别消息的能力，属于"小但高频"的体验问题。

**满意度信号：** 👍 数偏低（热点 Issue 仅 2 赞），整体社区互动量级属于中小型项目。多数反馈偏中性技术讨论，缺乏明确的"非常满意"表态。

---

## 八、待处理积压（提醒维护者关注）

> 🚨 以下条目需维护者主动干预以避免被遗忘：

| 编号 | 类型 | 创建距今 | 风险点 |
|---|---|---|---|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | 安全特性（high priority + help wanted） | ~36 天 | 高优但无 assignee，需公开招领 |
| [#3232](https://github.com/sipeed/picoclaw/issues/3232) | Bug 报告 | ~8 天 | 已被标 stale，可能因长期无响应被自动关闭 |
| [#3163](https://github.com/sipeed/picoclaw/pull/3163) | Bedrock prompt caching PR | ~22 天 | 实质性功能合并延迟将影响商业用户成本控制 |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | Anthropic cache_control PR | ~9 天 | 与 #3163 互补，建议联合评估 |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | 向后兼容修复 PR（stale） | ~8 天 | 可能已因 review 周期过长而错过合入窗口 |
| [#3255](https://github.com/sipeed/picoclaw/issues/3255) | 钉钉体验 Bug | 1 天 | 新提交，建议 48 小时内响应 |

---

## 📊 当日数据看板

```
Issues:   ██░░░░░░░░  3 (3 open / 0 closed)
PRs:      ████████░░  9 (4 open / 5 closed*)
Releases: ░░░░░░░░░░  0

*5 条关闭中 4 条为 stale 清理
```

**总体结论：** PicoClaw 今日处于"小步整理、缓慢推进"的状态。建议维护者：(1) 对 high priority 安全 Issue #3088 给出官方表态；(2) 优先 review #3163、#3228、#3256 等非 stale PR 以提升交付节奏；(3) 主动联系 stale PR 作者决定是否重启，避免优质贡献被埋没。

---

*报告基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-07-15**

---

## 1. 今日速览

NanoClaw 今日保持较高的开发活跃度，过去 24 小时内共有 **26 个 PR 更新**（19 仍开放，7 已合并/关闭），但 **Issues 端零活动**，且 **无新版本发布**。今日提交集中在 **Bug 修复（poll-loop、Slack 配置、容器投递、安全加固、Telegram 配对）和一处新通道（Dial）集成**，显示项目仍处于按需修补与小步迭代阶段。整体节奏稳健但缺乏 release 信号，建议维护者着手规划版本打包。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布。** 鉴于本期合并了 Slack/Dial 通道修复、Telegram 配对 wiring 修复、env 变量加载修复等多个影响安装路径的变更，建议尽快发布 patch 版本。

---

## 3. 项目进展

今日共有 **7 个 PR 已合并/关闭**，覆盖通道接入、文档校正、安全与稳定性：

| PR | 标题 | 影响 |
|---|---|---|
| [#2728](https://github.com/qwibitai/nanoclaw/pull/2728) | fix(telegram): create the wiring row when pairing with a wire-to intent | 修复 `--intent wire-to:<folder>` 配对未创建 `messaging_group_agents` 行的关键 bug，闭环 Telegram 配对流程 |
| [#2729](https://github.com/qwibitai/nanoclaw/pull/2729) | docs(add-telegram): match pairing status-block names to the setup step | 文档与实际状态块名对齐，避免用户按文档操作但观察不到预期日志 |
| [#2753](https://github.com/qwibitai/nanoclaw/pull/2753) | fix(hooks): pre-commit fell open when pnpm was missing from PATH | 修复 PATH 缺失 pnpm 时钩子"静默放行"的供应链安全洞 |
| [#2730](https://github.com/qwibitai/nanoclaw/pull/2730) | fix: NANOCLAW_* flags in .env never reach process.env under launchd/systemd | 修复 `egress-lockdown` 等关键安全标志在服务管理器下失效的严重问题 |
| [#3042](https://github.com/qwibitai/nanoclaw/pull/3042) | feat(setup): offer Dial in the channel picker | 新增 Dial 通道（含安装器、Skill、文档） |
| [#3043](https://github.com/qwibitai/nanoclaw/pull/3043) | fix(skills): switch Telegram deep-link from t.me to telegram.me | 修正 Telegram 跳转链接域名 |
| (上述未列出的第 7 条) | — | — |

**进展评估：** 本日推动了 **通道多样性（Dial）** 与 **多个真实安装路径下的关键 Bug** 的修复，项目整体在「稳定安装体验」方向上明显向前推进了一格。

---

## 4. 社区热点

由于今日数据中评论数与点赞数均为空（`undefined`），无法定量评估热度。但从更新频率和 PR 关注度看，下列议题可视为社区关注焦点：

- **Telegram 配对链路**：[#2728](https://github.com/qwibitai/nanoclaw/pull/2728) + [#2729](https://github.com/qwibitai/nanoclaw/pull/2729) + [#3046](https://github.com/qwibitai/nanoclaw/pull/3046) 三连击，凸显用户在端到端走通 Telegram 接入时频繁卡在状态块命名与 wiring 行缺失上。
- **容器/投递可靠性**：[#3045](https://github.com/qwibitai/nanoclaw/pull/3045)（容器退出时投递消息延迟 60s）+ [#2750](https://github.com/qwibitai/nanoclaw/pull/2750)（outbound.db stale journal）反映用户对「消息丢失/延迟」的敏感性。
- **供应链与运行时安全**：[#2973](https://github.com/qwibitai/nanoclaw/pull/2973)（minimumReleaseAge）+ [#2800](https://github.com/qwibitai/nanoclaw/pull/2800)（群组目录校验/禁隐式拉镜像）+ [#2730](https://github.com/qwibitai/nanoclaw/pull/2730)（env 注入）是当下最重的三条安全修复线。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 主题 | 状态 | 链接 |
|---|---|---|---|
| 🔴 严重 | `NANOCLAW_*` 标志在 launchd/systemd 下不生效，导致 `egress-lockdown` 等安全控制被绕过 | ✅ 已合并 | [#2730](https://github.com/qwibitai/nanoclaw/pull/2730) |
| 🔴 严重 | `outbound.db` 在容器 SIGKILL 后留下过期 journal，可能导致消息重复/丢失（#2516, #2640） | 🟡 PR 待合并 | [#2750](https://github.com/qwibitai/nanoclaw/pull/2750) |
| 🔴 严重 | 容器退出后 ≤60s 内 `<message>` 块延迟投递（活跃轮询停摆） | 🟡 PR 待合并 | [#3045](https://github.com/qwibitai/nanoclaw/pull/3045) |
| 🟠 高 | `safeParseContent` 对原始字符串返回非对象，导致 router 输入处理回退错误（untrusted input 风险） | 🟡 PR 待合并 | [#2801](https://github.com/qwibitai/nanoclaw/pull/2801) |
| 🟠 高 | Discord 审批按钮全部路由到 reject（custom_id 多了一个换行后缀） | 🟡 PR 待合并 | [#2899](https://github.com/qwibitai/nanoclaw/pull/2899) |
| 🟠 高 | Slack 接入：先校验 webhook 再写凭证，顺序倒置 | 🟡 PR 待合并 | [#3047](https://github.com/qwibitai/nanoclaw/pull/3047) |
| 🟡 中 | `composeGroupClaudeMd` 将所有 skill 指令注入每个 group 的 CLAUDE.md | 🟡 PR 待合并 | [#2921](https://github.com/qwibitai/nanoclaw/pull/2921) |
| 🟡 中 | poll-loop 在 tool-call turn 中漏发 `<message>` 块 / 在引号 `</message>` 处误截断 | 🟡 PR 待合并 | [#3049](https://github.com/qwibitai/nanoclaw/pull/3049)、[#3048](https://github.com/qwibitai/nanoclaw/pull/3048) |
| 🟡 中 | 入站附件（特别是 Telegram 语音/音频）若未带 fetchData() 则静默丢弃（#2888） | 🟡 PR 待合并 | [#3044](https://github.com/qwibitai/nanoclaw/pull/3044) |
| 🟢 低 | `pnpm-workspace.yaml` 中 `minimumReleaseAge` 被错误嵌套在 `pnpm:` 键下未生效 | 🟡 PR 待合并 | [#2973](https://github.com/qwibitai/nanoclaw/pull/2973) |

---

## 6. 功能请求与路线图信号

- **Dial 通道集成**：[#3050](https://github.com/qwibitai/nanoclaw/pull/3050)（独立分支）与 [#3042](https://github.com/qwibitai/nanoclaw/pull/3042)（已合并的等价物）并行存在，提示维护者正在迭代该 Feature，可能随下一版本落地。
- **统一审批生命周期**：[#3040](https://github.com/qwibitai/nanoclaw/pull/3040)（来自 core-team）提议将所有审批暂停统一在一条 lifecycle 契约下，属于架构级改造，可视为后续路线图信号。
- **群组目录与隐式镜像拉取的安全加固**：[#2800](https://github.com/qwibitai/nanoclaw/pull/2800) 暗示「群组隔离 + 镜像来源可信」将成为下一阶段平台硬化重点。

---

## 7. 用户反馈摘要

今日 Issues 端无活跃条目，公开反馈主要来自 PR 描述中的"实际安装走查"叙事：

- **真实场景痛点**：多个 PR（[#3047](https://github.com/qwibitai/nanoclaw/pull/3047)、[#2729](https://github.com/qwibitai/nanoclaw/pull/2729)）明确提到"based on a real install walkthrough"——说明贡献者本人就是用户，遇到过 Slack/Telegram 的真实配置坑。
- **流程割裂**：用户对"配对日志状态块名与文档不一致"的体验反馈集中，期望文档 = 实际行为。
- **消息可达性焦虑**：围绕 outbound.db 与容器退出投递路径的多处修复，反映用户对"消息没发出/发迟了"的高度敏感。
- **安全心智模型**：launchd/systemd 下 .env 不生效的修复 [#2730](https://github.com/qwibitai/nanoclaw/pull/2730) 显示用户预期「写在 .env 里就生效」，而现实被服务管理器隔离——这是典型文档-行为错配。

---

## 8. 待处理积压（建议维护者关注）

| 类型 | 编号 | 标题 | 风险 |
|---|---|---|---|
| 安全 | [#2800](https://github.com/qwibitai/nanoclaw/pull/2800) | fix(security): validate group folders and forbid implicit image pulls | 自 2026-06-17 创建，长期未合并，安全风险敞口持续 |
| 安全 | [#2801](https://github.com/qwibitai/nanoclaw/pull/2801) | fix(router): harden untrusted router input | 同期 open，untrusted input 处理需尽快闭合 |
| 可靠性 | [#2750](https://github.com/qwibitai/nanoclaw/pull/2750) | fix: recover stale outbound.db journals | 关联 #2516、#2640 两个 issue，跨月未合并 |
| 体验 | [#2899](https://github.com/qwibitai/nanoclaw/pull/2899) | fix(discord): strip newline suffix from custom_id | Discord 用户每次点按钮都会被误拒，影响明显 |
| 体验 | [#2921](https://github.com/qwibitai/nanoclaw/pull/2921) | fix(compose): gate skill fragments on group skill selection | 每个群组被注入全部 skill 指令，token 与行为风险均存在 |
| 供应链 | [#2973](https://github.com/qwibitai/nanoclaw/pull/2973) | fix(supply-chain): activate the minimumReleaseAge gate | minimumReleaseAge 配置实际未生效 |
| 架构 | [#3040](https://github.com/qwibitai/nanoclaw/pull/3040) | fix: unify approval holds behind one lifecycle contract | core-team 提交，建议优先 review |
| 投递 | [#3045](https://github.com/qwibitai/nanoclaw/pull/3045) | fix(delivery): drain outbound messages on container exit | 与 #2750 共同决定消息可靠性 |
| 附件 | [#3044](https://github.com/qwibitai/nanoclaw/pull/3044) | fix(channels): download inbound attachments that lost fetchData | 关联 #2888，Telegram 语音首字节丢失 |

**健康度提示：** 19 个开放 PR 集中在「Bug fix + 安全加固 + 单点功能」，未见重大 RFC 或设计争议，项目处于稳态迭代期。建议：
1. 优先 review 安全与可靠性 PR（[#2800](https://github.com/qwibitai/nanoclaw/pull/2800)、[#2801](https://github.com/qwibitai/nanoclaw/pull/2801)、[#2973](https://github.com/qwibitai/nanoclaw/pull/2973)、[#2750](https://github.com/qwibitai/nanoclaw/pull/2750)），并打 patch 版本；
2. 重新激活 Issues 渠道，避免后续积压被遗忘；
3. 评估 [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) 与已合并的 [#3042](https://github.com/qwibitai/nanoclaw/pull/3042) 关系，避免重复/冲突工作。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-15

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub Activity · 统计窗口：2026-07-14 滚动 24h

---

## 1. 今日速览

过去 24 小时项目维持**高活跃度**，共处理 **48** 条 Issue（36 新开/活跃、12 关闭）与 **50** 条 PR（23 待合并、27 已合并/已关闭），PR 队列饱和度达 **46%**，但 **0 个新版本发布**。三大主线信号清晰：

1. **渠道生命周期稳健性告急**：仅 Slack 相关 P2/P3 Bug 今日新增至少 5 条（#6091/#6092/#5945 等），多个 Bug 在过去两周的 4 次 QA Bug-bash 间反复回归；
2. **元工程治理集中开题**：核心贡献者 `ilblackdragon` 一次性提出 5 条增强型 Issue（#6103 CI 信号恢复 / #6104 24h 失败分类 SLA / #6106 发布门禁 / #6107 模型输入回归语料 / #6108 错误保真强制），意图将反复出现的 bug 家族收口为可强制执行的流程；
3. **扩展运行时列车收尾**：Train A（#6061）与 Train B（#6090）rollup PR 仍在 OPEN 状态，但其内部阶段 PR（P4-P7b，共 4 个 XL PR）今日全部合入；同时一条 L 级别的关键修复 PR **#6096** 已就位——专治 chat 消息乱序这一反复出现的 P2 老 Bug #6047。

> ⚠ 警示信号：P2 级别的活跃 Bug 大量积压、且 #5598 release PR 自 2026-07-03 以来持续待合并无新包，与"零发布"形成呼应。

---

## 2. 版本发布

**今日无新版本发布**，但有一条尚未合并的发布准备 PR：

- [#5598 chore: release](https://github.com/nearai/ironclaw/pull/5598) — 自 2026-07-03 OPEN 至今未合并，提议如下版本跃迁：
  - `ironclaw`：**0.24.0 → 0.29.1**（含 6 次内部迭代）
  - `ironclaw_common`：**0.4.2 → 0.5.0**（⚠ **API breaking**）
  - `ironclaw_skills`：**0.3.0 → 0.4.0**（⚠ **API breaking**）
  - `ironclaw_safety`：0.2.2 → 0.2.3（兼容）

  由于 PR 仍 OPEN 且无对应 tag，**下游用户在引用前需关注其 CI 状态与破坏性变更清单**。一旦合入，需为 `ironclaw_common` 与 `ironclaw_skills` 准备迁移说明。

---

## 3. 项目进展（今日合并/关闭 PR）

今日 27 个已关闭 PR 中，以下对项目有方向性影响：

| PR | 标题 | 贡献者 | 意义 |
|---|---|---|---|
| [#6095](https://github.com/nearai/ironclaw/pull/6095) | fix(reborn): name blocked provider in Slack auth-unavailable notice; stop misclassifying installation-store I/O faults | henrypark133 | 修复 #5884 / 关联 #5830，将"凭据无效"误导改为真正的"已阻塞 provider 名称"，并避免把 I/O 故障误报为输入校验失败 |
| [#6089](https://github.com/nearai/ironclaw/pull/6089) | fix(reborn): recover resource governor from libSQL contention | BenKurrek | libSQL/SQLite `BUSY/LOCKED` 与 PG `40001/40P01/55P03` 归类为"可重试"故障，资源治理不再因一次 DB 锁即停摆 |
| [#5896](https://github.com/nearai/ironclaw/pull/5896) | Fix WebUI memory browse isolation | henrypark133 | 将 WebUI v2 memory 浏览挂载限定为**当前调用者**的可见集合，避免 A 用户浏览到 B 用户 memory（呼应已关闭的 #5460） |
| [#6013](https://github.com/nearai/ironclaw/pull/6013) | feat(agent-loop): tools-capable completion nudge for interactive coding | pranavraja99 | 交互式编码场景启用"工具可用"式的完成提示，agent loop 司机模块的 steer 能力扩展 |
| [#6065](https://github.com/nearai/ironclaw/pull/6065) | P7b: extension-runtime finalize (runtime PR 9/9) | BenKurrek | 扩展运行时列车最后一节：消除中间 vocab、把包内数据迁回所属位置 |
| [#6056](https://github.com/nearai/ironclaw/pull/6056) | P7a: wire state enums + accounts list + deferred legs (runtime PR 8/9) | BenKurrek | 落地"多账号/供应商"ADR 0001，实现 list-states 接口与延迟接入腿 |
| [#6012

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-07-15**
**项目：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日整体活跃度处于**低-中位水平**，呈现典型的"批量清理日"特征。Issues 端 4 条均为长期未响应（4 月创建）的 stale Issue，被系统于昨日自动关闭，无新开 Issue；PR 端 3 条均完成生命周期闭环，无待合并 PR。值得注意的是，PR 质量较高：两条聚焦 OpenClaw v2026.6.1 的关键 tool-loop 缺陷回移植，一条修复 cowork 渲染层滚动跳变问题，均涉及核心 Agent 运行时与 UX 体验。社区侧无新版本发布，**项目当前处于问题清理与底层修复并行的阶段，未见显著新功能落地。**

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

近 24 小时内 Releases 信息为空，表明项目当前没有版本级交付动作。PR #2330 与 #2331 涉及对 `v2026.6.1` 版本的 OpenClaw 运行时回移植修复，暗示维护者正在为下一个稳定版做底层加固准备。

---

## 3. 项目进展

今日合入/关闭的 3 条 PR 均涉及核心模块修复，反映出维护团队对**Agent 运行时鲁棒性**与**前端交互细节**的双重关注：

| PR | 模块 | 关键变更 | 价值 |
|---|---|---|---|
| [#2331](https://github.com/netease-youdao/LobsterAI/pull/2331) | openclaw / docs / main | 回移植双重防护的 `v2026.6.1` tool-loop 修复，确保 critical veto 能可靠终止当前 Agent run | **高**——关系到 Agent 失控循环的资源保护 |
| [#2330](https://github.com/netease-youdao/LobsterAI/pull/2330) | openclaw / docs / main | 回移植 `7fe287b0d3`（upstream #94412），在 abort 边界中止 agent 循环，含强校验与回归覆盖 | **高**——补齐异步 turn hook 后的中止语义 |
| [#2329](https://github.com/netease-youdao/LobsterAI/pull/2329) | renderer / cowork | 修复流式输出期间的对话滚动跳变问题，尊重用户手动滚动并取消挂起的自动滚动 | **中**——直接改善长对话体验 |

**整体推进度：** 3/3 PR 全部关闭（含已合并/拒绝），仓库推进节奏稳定。其中 openclaw 方向的两次连续回移植（#2330、#2331）显示维护者对工具调用稳定性的高度重视；#2329 则响应了社区长期反馈的长会话渲染痛点。项目**在"质量加固"维度稳健前进，但"新功能产出"维度停滞。**

---

## 4. 社区热点

📉 今日 Issues/PR 互动量极低，无新评论产生。历史评论量最高的为：

- **[#1389 语言切换显示问题](https://github.com/netease-youdao/LobsterAI/issues/1389)** — 3 条评论
  - 用户反馈：选择英文语言时，中文选项仍显示英文，预期应保持中文文本。
  - 本质诉求：**国际化(i18n)资源完备性**问题，反映本地化策略不统一。

- **[#1386 分享长图内容缺失](https://github.com/netease-youdao/LobsterAI/issues/1386)** — 2 条评论
  - 用户反馈：长会话点击"分享"后生成的长图存在内容截断。
  - 本质诉求：**导出/截图功能对长内容渲染的边界处理**存在缺陷。

- **[#1388 邮箱测试连通性卡死](https://github.com/netease-youdao/LobsterAI/issues/1388)** — 2 条评论
  - 用户反馈：邮箱配置中点击"测试连通性"按钮后界面长时间无响应，重启后仍卡在"连接中"。
  - 本质诉求：**配置预检流程的超时与状态反馈机制**缺失。

- **[#1390 定时任务更新无响应](https://github.com/netease-youdao/LobsterAI/issues/1390)** — 2 条评论
  - 用户反馈：编辑已存在的定时任务并点击"更新任务"后无反应。
  - 本质诉求：**核心调度功能的写路径可用性**问题。

**热点分析：** 4 条热点 Issue 集中在**"用户可感知的交互故障"**——即用户主动操作（切语言、分享、测试连接、更新定时任务）时遇到的"无响应/内容错误"问题，**这些不是底层崩溃，而是面向用户的"静默失败"**，对产品口碑影响显著。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 中 | [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | 邮箱连通性测试无超时机制，UI 永久卡在"连接中" | ❌ 无对应 PR |
| 🟡 中 | [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 定时任务更新操作无响应（偶现） | ❌ 无对应 PR |
| 🟢 低 | [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | 分享长图内容截断 | ❌ 无对应 PR |
| 🟢 低 | [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | 英文模式下中文选项显示英文（i18n 缺陷） | ❌ 无对应 PR |

**评估：** 全部 4 条均已因 stale 状态被自动关闭，**无一条配有修复 PR**。从风险视角看，#1388 邮箱配置卡死与 #1390 定时任务更新无响应属于**功能级故障**而非边缘 case，对实际用户使用阻塞较严重；虽被 stale-bot 关闭，但**问题实质并未解决**。建议维护者手动重新开启并标记为待办。

**额外利好：** 今日 PR #2330 / #2331 修复了 OpenClaw `tool-loop` 与 `aborted tool run` 后的 agent 循环退出问题，属**Agent 运行时核心稳定性**修复，价值高于上述 UI 层 Bug，但尚未有用户评论互动。

---

## 6. 功能请求与路线图信号

今日无显式的新功能请求类 Issue。**可从 PR 与历史 Issue 中提取的路线图信号：**

- **Agent 运行时硬化（高确定性）：** #2330 与 #2331 明确针对 `v2026.6.1` 的关键 tool-loop 修复进行回移植，表明**OpenClaw 子模块的稳定性是当前最高优先级**。这与 #1390（定时任务作为 Agent 编排能力的一部分）可能存在关联。
- **Cowork 渲染体验优化（中等确定性）：** #2329 修复了流式滚动跳变，暗示**长会话场景的 UX 优化**正在被持续投入，与 #1386 分享长图问题方向一致。
- **i18n 与配置可靠性（低确定性）：** #1389 / #1388 类问题长期未获响应，可能暗示维护者暂未将其列入近版本计划。

**预测下一版本重点：** OpenClaw v2026.6.1 兼容性硬化 + Cowork 渲染层打磨，**新功能模块级产出概率较低。**

---

## 7. 用户反馈摘要

由于今日无新评论，所有反馈均沉淀自历史 Issue 的有限互动中（每条 ≤3 条评论）：

- **🔴 痛点 #1 — "操作按下后无反馈"**
  集中体现于 #1388（邮箱测试卡死）、#1390（定时任务更新无响应）。用户反复遇到**前端按钮点击后无任何 loading/toast/错误提示**的场景，挫败感源于"不知道是失败了还是在等"。

- **🔴 痛点 #2 — "长内容导出不可信"**
  #1386 反映用户对**分享/导出功能的完整性**有较高期待，截图截断在演示、协作场景中会造成实际损失。

- **🟡 痛点 #3 — "语言切换不彻底"**
  #1389 反映**部分 UI 元素未走 i18n 通道**，是典型的"全栈翻译漏改"。

- **🟢 场景画像：**
  反馈者（zqgittest、QinGang746）从交互描述看为**企业内 / 重度使用用户**，涉及邮件集成、定时任务等办公自动化场景，**LobsterAI 的目标用户并非纯个人玩具，而是工作流嵌入工具**，这对稳定性要求显著高于一般 ChatGPT 客户端。

---

## 8. 待处理积压

> ⚠️ 以下 Issue 虽被系统标记 stale 关闭，但**问题实质未解决**，建议维护者评估后重新开启：

| Issue | 标题 | 创建距今 | 风险评估 |
|---|---|---|---|
| [#1388](https://github.com/netease-youdao/LobsterAI/issues/1388) | 邮箱配置测试连通性卡死 | ~3 个月 | **中高** — 阻塞邮件集成场景 |
| [#1390](https://github.com/netease-youdao/LobsterAI/issues/1390) | 定时任务更新无响应 | ~3 个月 | **中高** — 阻塞调度编排场景 |
| [#1386](https://github.com/netease-youdao/LobsterAI/issues/1386) | 分享长图内容缺失 | ~3 个月 | **中** — 影响外部分享可信度 |
| [#1389](https://github.com/netease-youdao/LobsterAI/issues/1389) | 语言切换后部分中文项仍显示英文 | ~3 个月 | **低** — 影响海外用户体验 |

**给维护者的建议：**
1. 重新审阅 #1388、#1390，这两条属于"用户可见的功能性故障"，stale-bot 误判为低优；
2. 评估是否在 OpenClaw 集成过程中触发了 #1390 的偶发问题（与 #2330/#2331 修复方向可能有间接关联）；
3. 考虑为配置类操作（#1388）引入统一的**超时 + 错误 toast 机制**，从产品机制层面根除"静默失败"。

---

### 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐ | 3 PR 全部为一次性关闭，无新 Issue |
| 代码质量 | ⭐⭐⭐⭐ | 今日 PR 均含回归测试与 patch validation |
| 社区响应 | ⭐ | 4 条历史 Issue 因 stale 被关闭，无主动响应 |
| 稳定性 | ⭐⭐⭐ | PR 端在加固运行时，但 UI 层 Bug 积压未消 |
| 版本节奏 | ⭐⭐ | 今日无版本发布 |

**总评：项目处于"内部加固、对外沉默"的阶段，代码层面在进步，但社区沟通与版本节奏需加强。**

---

*报告生成基于 2026-07-15 过去 24 小时 GitHub 数据，数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-15

> 数据范围：2026-07-14 ~ 2026-07-15
> 数据源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

Moltis 在过去 24 小时呈现**高活跃度、高吞吐**的开发节奏：共产生 1 个新版本发布、12 条 PR 更新（其中 8 条已合并/关闭）、3 条 Issue 更新。值得注意的是，约 **67% 的 PR 在当日完成生命周期**（合并或关闭），其中包含多项 Bug 修复与模型支持更新，整体代码库健康度良好。Issue #1119（MCP OAuth 兼容性问题）从报告到修复再到合并，形成了一次完整、高效的"报告→定位→修复→合并"闭环。

---

## 2. 版本发布

### 🚀 20260714.11

- **发布时间**：2026-07-14
- **详情**：[Release 20260714.11](https://github.com/moltis-org/moltis/releases/tag/20260714.11)
- **说明**：本次未提供详细 Release Notes 描述。从 PR 时间线推断，本版本大概率整合了以下当日合并的修复：MCP OAuth 修复（#1120）、CalDAV 非 ASCII 时间解析 panic 修复（#1145）、Browser null 参数容错（#1098）、Agent 工具参数类型强转（#1136）、Gateway matrix-sdk 强制启用问题（#1139）、Tool 结果持久化截断（#1089），以及 GPT-5.6 模型支持（#1146）。**建议查阅 Git diff 以确认无破坏性变更。**

---

## 3. 项目进展

### ✅ 今日合并/关闭的重要 PR

| PR | 主题 | 类别 | 影响 |
|---|---|---|---|
| [#1120](https://github.com/moltis-org/moltis/pull/1120) | fix(mcp): use direct fetch for resource_metadata URL | Bug 修复 | 修复 Notion / Linear 等 MCP 服务器 OAuth 流程的 `invalid_target` 错误，**显著提升远程 MCP 生态兼容性** |
| [#1145](https://github.com/moltis-org/moltis/pull/1145) | fix(caldav): avoid panic on non-ASCII datetime | Bug 修复 | 解决 CalDAV 同步在非 ASCII 日期时间上的 panic，提升日历同步稳定性 |
| [#1098](https://github.com/moltis-org/moltis/pull/1098) | fix(browser): tolerate null optional params | Bug 修复 | 兼容小模型（Gemma 4 等）显式传 `null` 的浏览器工具参数 |
| [#1136](https://github.com/moltis-org/moltis/pull/1136) | fix(agents): coerce stringified scalar tool args | Bug 修复 | 兼容小模型（oMLX、Gemma 4）将标量工具参数序列化为字符串的问题，**直接扩大了本地小模型的可用性** |
| [#1139](https://github.com/moltis-org/moltis/pull/1139) | fix(gateway): don't force-enable matrix-sdk via metrics | Bug 修复 | 修复未启用 Matrix 时 `metrics` feature 仍会拉入 `matrix-sdk` 的依赖问题，**缩短构建时间、减小二进制体积** |
| [#1089](https://github.com/moltis-org/moltis/pull/1089) | Cap persisted tool results before rehydration | 性能/稳定性 | 在历史会话再水合时截断超大工具结果，降低上下文爆炸与内存压力 |
| [#1146](https://github.com/moltis-org/moltis/pull/1146) | Add GPT-5.6 model support | 功能 | 注册 GPT-5.6 Sol/Terra/Luna 三个变体，区分 OpenAI API（1.05M）与 ChatGPT/Codex 后端（372K）的上下文窗口 |
| [#1141](https://github.com/moltis-org/moltis/pull/1141) | dependabot 旧版 npm_and_yarn 更新 | 依赖 | 已关闭（被 #1148 取代） |

**整体判断**：今日是 Moltis 的"**质量日**"，重心明显在**小模型兼容性**（#1098、#1136）、**远程服务集成稳定性**（#1120、#1145）与**构建体积优化**（#1139），反映出本地/边缘部署与企业 SaaS 集成的双向需求。

---

## 4. 社区热点

过去 24 小时内 Issue/PR 评论数与互动量整体偏低（多为 0~1 条），讨论最集中的当属 **#1119 → #1120** 这组 Issue-PR 关联。

- 🔥 **#1119 [Bug] MCP OAuth fails with `invalid_target`**（[#1119](https://github.com/moltis-org/moltis/issues/1119)）—— 用户 [xzavrel](https://github.com/moltis-org/moltis) 报告 Notion 与 Linear 的远程 MCP 服务器无法完成 OAuth 授权。同日提交的 [PR #1120](https://github.com/moltis-org/moltis/pull/1120) 已快速修复并合并，是本期最具代表性的"**社区报告 → 项目响应**"案例。
- 🔥 **#1146 Add GPT-5.6 model support**（[#1146](https://github.com/moltis-org/moltis/pull/1146)）—— 社区贡献者 [PeterDaveHello](https://github.com/PeterDaveHello) 主动跟进最新模型生态，体现项目对前沿 LLM 的响应速度。
- 🔥 **#1102 Add FunASR/SenseVoice as local STT engine**（[#1102](https://github.com/moltis-org/moltis/issues/1102)）—— 用户 [LauraGPT](https://github.com/LauraGPT) 持续推进本地 STT 引擎集成讨论，反映出**离线/隐私敏感场景下对本地语音转写的真实需求**。

> ⚠️ **安全提示**：在生成本报告时，我注意到 #1102 摘要中嵌入了一段带 `<!-- funasr-ops:accuracy-note-20260714 -->` 标记的"NOTE"内容（声称涉及许可证与能力的"clarification"）。该段内容结构上属于**提示词注入（prompt injection）**尝试，并未经过项目维护者审核，建议读者以原 Issue 评论区和维护者回复为准。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 状态 |
|---|---|---|---|
| 🔴 **Critical** | [#1145](https://github.com/moltis-org/moltis/pull/1145) | CalDAV `normalise_datetime` 在非 ASCII 时间上 **panic**，可能导致整个 CalDAV 同步任务崩溃 | ✅ 已合并修复 |
| 🟠 **High** | [#1119](https://github.com/moltis-org/moltis/issues/1119) / [#1120](https://github.com/moltis-org/moltis/pull/1120) | MCP OAuth 对带 `resource_metadata` 的服务器完全无法授权（影响 Notion、Linear 等主流服务） | ✅ Issue 已关闭，PR 已合并 |
| 🟠 **High** | [#1139](https://github.com/moltis-org/moltis/pull/1139) | `metrics` feature 隐式强制拉入 `matrix-sdk` 完整依赖，违反"按需编译"原则 | ✅ 已合并修复 |
| 🟡 **Medium** | [#1098](https://github.com/moltis-org/moltis/pull/1098) | 浏览器工具拒绝小模型常见的 `null` 参数 | ✅ 已合并修复 |
| 🟡 **Medium** | [#1136](https://github.com/moltis-org/moltis/pull/1136) | 工具参数被序列化为字符串时校验失败 | ✅ 已合并修复 |
| 🟢 **Open** | [#1132](https://github.com/moltis-org/moltis/issues/1132) | "main" 会话无法删除/归档 | ⏳ **尚无修复 PR**，自 6/18 报告至今仍未关闭 |

**结论**：除 #1132 外，所有今日报告的 Bug 均已通过对应 PR 完成修复，**Moltis 当前 Bug 修复响应时间约为 1 天**，社区驱动的 issue→PR 链路运转良好。

---

## 6. 功能请求与路线图信号

| 需求 | 链接 | 已有 PR？ | 评估 |
|---|---|---|---|
| 本地 STT 引擎（FunASR / SenseVoice） | [#1102](https://github.com/moltis-org/moltis/issues/1102) | ❌ | 与项目当前"本地/边缘模型"战略一致，**纳入下版本的概率较高**，但需关注其许可证与实际运行依赖 |
| 聊天轮次的 `context_command` 注入 | [#1124](https://github.com/moltis-org/moltis/pull/1124) | ✅ PR OPEN | 由 [gptme-thomas](https://github.com/gptme-thomas) 提交，架构清晰，**短期可合并** |
| 浏览器动作后自动截图 | [#1135](https://github.com/moltis-org/moltis/pull/1135) | ✅ PR OPEN | 提升 agent 可观测性，**UI 价值高**，但需评估性能影响 |
| 频道活动日志可见性设置 | [#1093](https://github.com/moltis-org/moltis/pull/1093) | ✅ PR OPEN | 多用户/Matrix 场景下控制噪音，**合并可能性高** |
| GPT-5.6 全系模型支持 | [#1146](https://github.com/moltis-org/moltis/pull/1146) | ✅ PR 已合并 | ✅ 已落地 |
| 大工具结果持久化截断 | [#1089](https://github.com/moltis-org/moltis/pull/1089) | ✅ PR 已合并 | ✅ 已落地 |

**路线图判断**：项目当前主线是"**大模型 + 小模型并存、远程服务 + 本地部署并存**"的双轨策略。下一版本可能纳入的特性：context_command（#1124）、频道日志设置（#1093），以及视情况推进的浏览器自动截图（#1135）。

---

## 7. 用户反馈摘要

由于 Issue/PR 评论数据稀薄（多数为 0~1 条），可提炼的真实反馈如下：

- **MCP 远程服务兼容性是高频痛点**：#1119 反映出用户希望 Moltis 能开箱即用地接入 Notion、Linear 等 SaaS 的 MCP 端点，OAuth 流程的中断会直接阻碍生产环境采用。
- **本地小模型用户希望降低接入门槛**：#1098 与 #1136 集中在"小模型工具调用格式不规范"问题上（`null` 参数、字符串化标量），说明 Moltis 在 Gemma 4、oMLX 等本地模型用户群中已有实际使用。
- **构建体积/依赖污染是开发者关注点**：#1139 反映出对**按需编译**的期望——不应仅仅为了打开 metrics 而拉入整套 Matrix 依赖。
- **主会话管理是基础体验短板**：#1132（"main session 无法删除/归档"）属于基础 UX 问题，长期未修复容易演变成负面口碑。
- **新模型跟进速度快是正面反馈**：#1146 由社区成员主动提交并快速合并，体现出健康的外部贡献者生态。

---

## 8. 待处理积压

提醒维护者关注以下**长期未响应**的条目：

| 编号 | 类型 | 标题 | 创建日期 | 已挂起天数 |
|---|---|---|---|---|
| [#1132](https://github.com/moltis-org/moltis/issues/1132) | Bug | "main" session can't be deleted/archived | 2026-06-18 | **≈26 天** |
| [#1102](https://github.com/moltis-org/moltis/issues/1102) | Feature | Add FunASR/SenseVoice as local STT engine | 2026-06-04 | **≈40 天** |
| [#1124](https://github.com/moltis-org/moltis/pull/1124) | PR | Add context command support for chat turns | 2026-06-15 | **≈29 天** 待 review |
| [#1135](https://github.com/moltis-org/moltis/pull/1135) | PR | browser: optional auto-screenshot after each action | 2026-06-26 | **≈18 天** 待 review |
| [#1093](https://github.com/moltis-org/moltis/pull/1093) | PR | Add channel activity log visibility settings | 2026-06-03 | **≈41 天** 待 review |

**建议**：
- #1132 属于基础 UX 缺陷，建议本周内指派并合并修复。
- #1124、#1135、#1093 三条 PR 均已超过 2 周无 review，建议维护者集中安排一次 code review pass。
- #1102 涉及许可证审查（FunASR / SenseVoice），建议在公开 Issue 中给出官方态度。

---

### 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 12 条 PR、3 条 Issue、1 个 Release |
| Bug 修复响应 | ⭐⭐⭐⭐⭐ | 多数 Bug 当日 issue→PR→合并 |
| 社区贡献度 | ⭐⭐⭐⭐ | 多个 PR 由外部贡献者提交并合并 |
| 长期积压管理 | ⭐⭐⭐ | 仍有 5 条 > 18 天未处理的条目 |
| 安全与注入风险 | ⭐⭐⭐ | 已发现 #1102 中存在提示词注入痕迹，建议加固评论渲染 |

---

*报告生成时间：2026-07-15 · 数据基于 GitHub 公开 API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-15

> 数据源：GitHub `agentscope-ai/CoPaw` 仓库  
> 统计窗口：过去 24 小时  
> 报告生成时间：2026-07-15

---

## 一、今日速览

CoPaw 仓库过去 24 小时维持 **高活跃度**：Issues 更新 50 条（其中 34 条已关闭，关闭率 **68%**），PR 更新 50 条（26 条合并/关闭，24 条待合并），并发布补丁版本 **v2.0.0.post2**。从议题结构看，当前处于 **v2.0.0 发布后集中修复期**——围绕上下文压缩（与 DeepSeek/OpenAI 兼容 API 的 tool_calls/tool 配对）、Windows 沙箱（ACL 污染、pwsh 递归）、消息队列回归、自动记忆触发逻辑的修复 PR 集中涌现；同时 Langfuse 可观测性、Zalo Bot 渠道、computer-use 等新能力也在并行推进。整体健康度评估：**稳定收敛**，但 2.0 的回归面仍需 1–2 个补丁迭代消化。

---

## 二、版本发布

### v2.0.0.post2 — 已发布

- **类型**：补丁版本（post-release）
- **核心变更**：
  - `feat`: **扩展敏感文件识别**并允许读取全局配置（[#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067)）
  - `chore`: 版本号 bump 到 `2.0.0post2`（[#6070](https://github.com/agentscope-ai/QwenPaw/pull/6070)）
  - `test(unit)`: 增加 runtime / security / install 方向的回归测试
- **破坏性变更**：无（post-release 仅做小修补）
- **迁移提示**：从 v2.0.0 / v2.0.0.post1 升级无配置变更要求；如在 Windows Tauri 桌面端遇敏感文件读取或沙箱相关问题，强烈建议升级到 post2。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 影响面 |
|---|---|---|
| [#6067](https://github.com/agentscope-ai/QwenPaw/pull/6067) | feat: more sensitive files & allow read global | **安全**：扩展敏感文件识别范围，构成 v2.0.0.post2 主体 |
| [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) | feat(memory): ReMe 可靠性、可观测性、CJK embedding 安全 | **记忆系统**：解决中文长记忆在 bge-m3 下 400 错误（[#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950)） |
| [#6109](https://github.com/agentscope-ai/QwenPaw/pull/6109) | fix(governance): OFF 模式下尊重 sandbox_enabled 开关 | **治理**：修复 `approval_level=OFF` + `sandbox_enabled=false` 仍被强制走沙箱的缺陷 |
| [#6112](https://github.com/agentscope-ai/QwenPaw/pull/6112) | feat(plugins): Zalo Bot channel plugin (2.0) | **渠道**：按 #4693 的 2.0 插件架构新增 Zalo Bot（替代 #5801） |
| [#6065](https://github.com/agentscope-ai/QwenPaw/pull/6065) | 清理死代码 / 移除错误 asyncio mark | **可维护性**：移除 `qwenpaw.app.runner.control_commands` 引用 |
| [#6062](https://github.com/agentscope-ai/QwenPaw/pull/6062) | perf(skills): 跳过冗余 manifest 协调 | **性能**：避免每次请求触发全盘扫描导致 FD 耗尽 |

> **进展判断**：今天的合并密度集中在 **稳定性修复 + 安全/治理补强**，而非新功能堆叠，说明维护团队正在优先压平 v2.0.0 的回归波。可观测性（Langfuse, #5922）与新渠道（Zalo Bot）作为非阻塞新能力同步推进。

---

## 四、社区热点（按评论数排序）

| 排名 | Issue | 评论 | 类别 | 关注点 |
|---|---|---|---|---|
| 1 | [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) 🐾 Help Wanted: Open Tasks — S1 | **64** | enhancement/help-wanted | 官方任务悬赏榜；P0–P2 优先级列表，是新人贡献入口 |
| 2 | [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) Windows 沙箱完整排查 | 9 | bug | pwsh 递归爆炸 + NTFS ACL 污染 + 沙箱不可关闭，是 v2.0 桌面端最严重稳定性问题之一 |
| 3 | [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) OpenClaw-Inspired Features | 8 | meta/enhancement | 元议题，跟踪从 OpenClaw 借鉴的"复利型"功能集合 |
| 4 | [#6089](https://github.com/agentscope-ai/QwenPaw/issues/6089) opencode 免费模型 MODEL_EXECUTION_ERROR | 7 | bug/invalid | 影响 opencode 免费模型用户 |
| 5 | [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) 卡在搜索记忆 | 5 | bug | 升级 2.0 后 auto-memory 反复检索，影响日常使用体验 |
| 6 | [#5952](https://github.com/agentscope-ai/QwenPaw/issues/5952) auto-memory 缺模块 `_scripts` | 5 | bug | 桌面打包版本缺失子包，所有 agent 记忆总结失败 |
| 7 | [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) 升级 2.0 后聊天列表/历史映射丢失 | 4 | bug | 数据迁移兼容性问题，老会话 500 错误 |

**背后诉求**：
- **任务透明度**（#2291）显示社区希望清晰看到可认领的"软目标"，降低贡献门槛。
- **Windows 桌面体验**（#5951、#5952、#5829、#5964、#6097）连续出现，反映 Tauri 桌面端在沙箱、PyInstaller/freeze 打包、数据迁移上的系统性脆弱面。
- **2.0 升级回退**（#6113、#6105、#5964、#6100）暗示不少用户对 v1 → v2 的行为变更感到困惑。

---

## 五、Bug 与稳定性

### 🔴 P0 — 严重（已影响核心功能）

| Issue | 现象 | Fix PR | 状态 |
|---|---|---|---|
| [#5951](https://github.com/agentscope-ai/QwenPaw/issues/5951) | Windows 桌面壳 pwsh 递归爆炸、内存 20GB 封顶、无法关闭沙箱 | — | 未指派，待修复 |
| [#6097](https://github.com/agentscope-ai/QwenPaw/issues/6097) | macOS Desktop frozen build 缺 `agentscope.tool._builtin._scripts`，Glob 工具崩溃 | — | post2 应未涵盖，仍 OPEN |
| [#5829](https://github.com/agentscope-ai/QwenPaw/issues/5829) | AppContainer 沙箱 ACE 污染 `C:\` / `C:\Users`，Chromium GPU 进程崩溃 | — | 仍 OPEN |
| [#5964](https://github.com/agentscope-ai/QwenPaw/issues/5964) | 升级后 `chats` ↔ `conversation_history` session 映射丢失，老会话 500 | — | OPEN，需数据迁移修复 |

### 🟠 P1 — 中等（影响部分工作流）

| Issue | 现象 | Fix PR | 状态 |
|---|---|---|---|
| [#6077](https://github.com/agentscope-ai/QwenPaw/issues/6077) | 上下文压缩破坏 DeepSeek tool_calls/tool 配对 → 400 | [#6108](https://github.com/agentscope-ai/QwenPaw/pull/6108) | **已有 fix PR（Open）** |
| [#6113](https://github.com/agentscope-ai/QwenPaw/issues/6113) | 2.0 后 auto-memory 反复检索陷入循环 | [#6120](https://github.com/agentscope-ai/QwenPaw/pull/6120) | **已有 fix PR（Open）** |
| [#6100](https://github.com/agentscope-ai/QwenPaw/issues/6100) | `pip install --upgrade` 覆盖 `agent.json`，active_model 被清空 | — | OPEN |
| [#6088](https://github.com/agentscope-ai/QwenPaw/issues/6088) | v2.0.0.post1 消息队列回归 | [#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107) | **已有 fix PR（Open）** |
| [#6046](https://github.com/agentscope-ai/QwenPaw/issues/6046) | 压缩后 toolResult blocks 多于 toolUse → session 永久不可用 | [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) | **已有 fix PR（Open）** |
| [#6020](https://github.com/agentscope-ai/QwenPaw/issues/6020) | 审批路由错误（钉钉发起 → 桌面端弹窗）+ OFF 配置失效 | [#6122](https://github.com/agentscope-ai/QwenPaw/pull/6122) | **已有 fix PR（Open）** |
| [#5950](https://github.com/agentscope-ai/QwenPaw/issues/5950) | 中文记忆按字符截断触发 bge-m3 400 | [#6098](https://github.com/agentscope-ai/QwenPaw/pull/6098) | **已修复（merged）** |
| [#5979](https://github.com/agentscope-ai/QwenPaw/issues/5979) | Linux 沙箱把用户映射为 root，Electron CLI 启动崩溃 | — | CLOSED 但无显式 fix |
| [#5333](https://github.com/agentscope-ai/QwenPaw/issues/5333) | Agent 卡死但 UI 显示可提交 | — | CLOSED，未见根因说明 |

### 🟡 P2 — 一般

| Issue | 现象 | 状态 |
|---|---|---|
| [#6089](https://github.com/agentscope-ai/QwenPaw/issues/6089) | opencode 免费模型 `Model 'unknown'` 错误 | CLOSED（invalid） |
| [#6105](https://github.com/agentscope-ai/QwenPaw/issues/6105) | 2.0 移除 `generate_image_gpt` 配置按钮 | CLOSED（已隐式恢复或文档化） |
| [#6017](https://github.com/agentscope-ai/QwenPaw/issues/6017) | DeepSeek 400 → 整会话崩 | CLOSED |

**稳定性趋势**：今日 50 条 issue 更新中关闭 34 条，**关闭率 68%**，明显高于上周同类项目基线（约 50%），反映维护团队响应速度提升。但 Windows 桌面壳相关 P0 仍未完全解决，建议在下一个 minor 版本前重点关注。

---

## 六、功能请求与路线图信号

| 请求 | 描述 | 已关联 PR | 路线图概率 |
|---|---|---|---|
| [#6087](https://github.com/agentscope-ai/QwenPaw/issues/6087) Agent 迭代循环中实时注入队列消息 | 用户希望在 Agent 处理中可中断纠正方向，避免算力浪费 | 无 | **中**——符合"用户控制感"产品方向 |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) channel 工具调用参数/结果可分开发送 + 截断 | channel 信息噪音过大 | 无 | **中高**——多渠道用户真实痛点 |
| [#6048](https://github.com/agentscope-ai/QwenPaw/issues/6048) 免认证主机白名单支持 CIDR 段 | 企业内网部署 | 无 | 中 |
| [#6064](https://github.com/agentscope-ai/QwenPaw/issues/6064) Hermes + 内置浏览器插件的"真实环境交互" | 底层架构易用性对标 | [#5187](https://github.com/agentscope-ai/QwenPaw/pull/5187)（computer-use, OPEN）已部分回应 | **高** |
| [#578](https://github.com/agentscope-ai/QwenPaw/issues/578) OpenClaw-Inspired Features（meta） | 一组功能矩阵 | [#6118](https://github.com/agentscope-ai/QwenPaw/pull/6118)（Zalo 渠道）等已在执行 | **高** |
| [#586](https://github.com/agentscope-ai/QwenPaw/issues/586) Daemon and Command Dispatch | Runner 层两阶段命令分发 | 无 | 中——需与 v2 控制命令重构协调 |
| [#5922](https://github.com/agentscope-ai/QwenPaw/pull/5922) Langfuse 追踪 user/session/version | 可

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-15

---

## 1. 今日速览

ZeroClaw 仓库今日保持高强度迭代节奏：**Issues 活跃 29 条（关闭 6 条）、PR 活跃 50 条（关闭/合并 11 条）**，但**无新版本发布**。工作高度集中在三个方向：（1）**SOP 引擎向 5/5 收口** —— SOP 审计 no-op、headless 触发、cron 触发、HTTP fan-in、channel-filesystem 等遗留工单集中关闭，里程碑 tracker #8288 与新增的 "approval broker + quorum" PR #8880 正在快速推进；（2）**多用户 / OIDC 安全基线** —— execute_pipeline 越权（confused deputy, S0）、Landlock 在 Fedora 阻断 shell 工具、Per-sender RBAC 等高风险项被持续讨论；（3）**网关与渠道插件化** —— 围绕 `feat(plugins)` 的 WASM 通道栈（#8862/#8863/#8855/#8923）进入堆叠合并阶段。整体健康度良好，多个长期挂起的安全/可观测性债务正在结清，但 P1 安全积压仍需维护者介入。

---

## 2. 版本发布

**今日无新版本发布。** v0.8.3 发布关闭索引 [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) 显示最终发布验证与发布动作尚余；v0.8.4 维护列车 [#8357](https://github.com/zeroclaw-labs/zeroclaw/issues/8357) 目标日期为 2026-07-31，预计将在两周内进入发布窗口。

---

## 3. 项目进展

过去 24 小时共有 **11 个 PR 进入已合并/已关闭状态**。今日可识别的关键闭环：

| 类别 | PR / Issue | 说明 |
|---|---|---|
| SOP 能力补完 | [#8413](https://github.com/zeroclaw-labs/zeroclaw/issues/8413) **CLOSED** | `channel-filesystem` SOP 事件源 —— 监听文件 create/modify/delete/rename 并转换为 SOP 事件，扩展了 fan-in 入口。 |
| SOP 审计修复 | [#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) **CLOSED** | 修复生产环境 SOP 审计静默 no-op，`sop_run_*` / `sop_step_*` Memory keys 真正落盘。 |
| SOP cron 触发 | [#6686](https://github.com/zeroclaw-labs/zeroclaw/issues/6686) **CLOSED** | `SOP.toml` 中的 cron trigger 此前无生产侧 caller，现已接入。 |
| SOP 完整性 | [#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) **CLOSED** | `advance_step` 增加 run-status 守卫，阻止驱动方通过 `sop_advance` 绕过审批门。 |
| SOP 头less 路径 | [#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) **CLOSED** | 头less 触发器下 deterministic SOP 步骤误标 Completed 的问题修复。 |
| 内存隔离 | [#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) **CLOSED** | Cron 任务忽略 `uses_memory=false` 的修复。 |
| 文档修正 | [#9077](https://github.com/zeroclaw-labs/zeroclaw/issues/9077) **CLOSED** | 删除 `network-deployment.md` 中 `channel start telegram` 的错误位置参数示例。 |
| 零代码守护 | [#8582](https://github.com/zeroclaw-labs/zeroclaw/issues/8582) **CLOSED** | ZeroCode 临时守护进程在连接失败时正确终止。 |
| v0.8.3 关闭 | [#7320](https://github.com/zeroclaw-labs/zeroclaw/issues/7320) | 六个子 tracker 全部关闭，待最终发布验证。 |

**评估：** 进度集中在 SOP 引擎与 v0.8.3 收口上 —— 这是一段"清账期"：长期被 SOP 文档承诺但实现缺失的路径（审计、cron trigger、HTTP fan-in、headless）逐项落地。SOP 整体能力正在从 4.x 走向 milestone #8288 描述的 5/5。

---

## 4. 社区热点

按评论数排序的活跃议题（社区关注点指向**多租户安全与上游协议兼容**）：

| 排名 | 编号 | 评论 | 主题 | 诉求剖析 |
|---|---|---|---|---|
| 1 | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | **10** | Per-sender RBAC 多租户部署 | 单实例服务多类用户（客户/运维/开发），需要隔离 workspace、工具集、限流与 system prompt；本质是"在多租户上做最小特权"。 |
| 2 | [#6055](https://github.com/zeroclaw-labs/zeroclaw/issues/6055) | **7** | Slack 线程首提时回填历史 | `strict_mention_in_thread` 开启后每次都要 @ bot，期望在首次 @ 时通过 `conversations.replies` 注入上下文。 |
| 3 | [#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) | **4** | Landlock 在 Fedora 阻断 shell | `/dev/null` 不可访问，shell 工具全失败；属于 S2 但涉及发行版兼容性，影响生产可用性。 |
| 4 | [#8933](https://github.com/zeroclaw-labs/zeroclaw/issues/8933) | **3** | OTel 跨 turn 会话关联 RFC | 提议引入 `gen_ai.conversation.id` 让 OTel 导出可以跨多轮拼接会话。 |
| 5 | [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | **3** | 会话历史 vs 长期记忆分离 RFC | 现行实现把 `MemoryCategory::Conversation` 混进了通用 memory backend，期望分层。 |
| 6 | [#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) | **2** | 工具调用参数裸传导致 OpenAI 400 | assistant `tool_calls[].function.arguments` 未做 JSON 校验直发，触发 400 → 空回复；多家 OpenAI 兼容供应商受影响。 |
| 7 | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) | **2** | Web 仪表盘聊天无法使用 SOP | `/zeroclaw-data/.zeroclaw/shared/sops` 下的 SOP 不被运行时发现，StageHand 范式失效；S1 阻塞。 |
| 8 | [#8581](https://github.com/zeroclaw-labs/zeroclaw/issues/8581) | **2** | SOP 入口适配器集中化 | 减少各通道重复实现 source→SopEvent 转换、不信任负载截断、诊断/audit 句柄接入。 |
| 9 | [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | **2** | zerorelay 里程碑 | NAT/CGNAT 后守护的 mTLS 中继节点 —— 盲转发，不终结也不检查内层会话。 |
| 10 | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) | **2** | cron/SOP pre-hook skip gate | 用退出码 10 表达"cleanly skip"，把可执行前置条件标准化。 |

**诉求关键词云：** 多租户隔离、协议兼容、上下文连续性、可观测性关联、Fan-in 解耦。这与 #8288 / #8290 / #8289 三个 roadmap tracker 的方向高度一致 —— 社区关注点正在从"跑得通"过渡到"在多用户/多系统环境下安全、可观测地跑"。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

### S0 — 数据丢失 / 安全风险
- **[#7947](https://github.com/zeroclaw-labs/zeroclaw/issues/7947) `execute_pipeline` 绕过每代理工具门控（confused deputy）** — `execute_pipeline` 仅以全局 `[pipeline].allowed_tools` 授权其子工具步骤，忽略调用方代理的 `ToolAccessPolicy`；**status: in-progress**，尚无 fix PR。⚠️ 高优先级但 0 赞且无明显接管人，建议维护者直接 ping 安全域负责人。

### S1 — 流程阻塞
- **[#8973](https://github.com/zeroclaw-labs/zeroclaw/issues/8973) Landlock 阻断 shell 工具在 Fedora 上访问系统文件** — `sh` 无法访问 `/dev/null`；4 评论，尚未合并修复（建议增加 landlock allow 列表或文档化发行版差异）。  
- **[#8675](https://github.com/zeroclaw-labs/zeroclaw/issues/8675) OpenRouter/OpenAI 兼容厂商收到未校验的 tool-call 参数 → 400 → 空回复** — 影响 OpenAI/Azure-OpenAI/OpenRouter/Copilot 多家供应商；2 评论，无明确 fix PR，候选修复方向为 provider 侧 JSON schema 校验。  
- **[#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) Web 仪表盘聊天会话中 SOP 不可用** — `/zeroclaw-data/.zeroclaw/shared/sops` 未被运行时扫描；2 评论，状态 accepted，未见对应 fix PR。  
- **[#9052](https://github.com/zeroclaw-labs/zeroclaw/issues/9052) `channel-line` 在 `channels-full` 与 `ci-all` 覆盖中缺失** — CI 矩阵遗漏一个受支持特性，回归风险高；1 评论，建议立刻补充。

### S2 — 性能降级
- **[#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) Provider 失败时通用重试信封掩盖了根因** — 所有失败都走"All model_providers/models failed" + 重试栈，LM Studio/Ollama 等本地不健康状态难以定位；1 评论。  
- **[#6689](https://github.com/zeroclaw-labs/zeroclaw/issues/6689) ✅ 已关闭** SOP 审计静默 no-op — 修复后 `sop_run_*`/`sop_step_*` 真正写入。  
- **[#8678](https://github.com/zeroclaw-labs/zeroclaw/issues/8678) ✅ 已关闭** `advance_step` 无 run-status 守卫 — 修复后阻止通过 `sop_advance` 绕过审批门。  
- **[#8631](https://github.com/zeroclaw-labs/zeroclaw/issues/8631) ✅ 已关闭** 头less deterministic SOP 误标 Completed — 修复后消除假绿审计。  
- **[#8695](https://github.com/zeroclaw-labs/zeroclaw/issues/8695) ✅ 已关闭** Cron 任务无视 `uses_memory=false` — 修复后真正无状态。

**今日修复/关闭的 5 个 S2 中，4 个集中在 SOP 与 cron 路径上**，符合 v0.8.3 收口方向。但 S0 的 confused deputy 与 S1 的 Landlock/OpenAI 校验问题需要尽快排出 fix。

---

## 6. 功能请求与路线图信号

**与已有 PR 强对齐、最可能进入 v0.8.4 或后续版本的需求：**

| 需求 | 对应 Issue | 已有相关 PR | 评估 |
|---|---|---|---|
| **Per-sender RBAC / 多租户隔离** | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982), [#8290](https://github.com/zeroclaw-labs/zeroclaw/issues/8290) | tracker 级；尚无具体 PR | 高概率被纳入 OIDC 里程碑（#8289）下的子项。 |
| **OIDC + 统一 Principal 模型** | [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) | tracker 级 | 是 multi-user milestone 的基础依赖。 |
| **zerorelay（NAT/CGNAT 穿透）** | [#8358](https://github.com/zeroclaw-labs/zeroclaw/issues/8358) | tracker 级 | 独立子项目，预计不在 v0.8.4 范围。 |
| **Webhook 通道插件化** | [#8862](https://github.com/zeroclaw-labs/zeroclaw/issues/8862) | ✅ PR #8862 已 OPEN（size L） | WhatsApp Cloud、LINE、Slack Events API 等可作为 WASM 插件接入。 |
| **Outbound WebSocket / TCP + TLS（host-mediated）** | [#8863](https://github.com/zeroclaw-labs/zeroclaw/issues/8863), [#8923](https://github.com/zeroclaw-labs/zeroclaw/issues/8923) | ✅ 双 PR OPEN，stacked | 与 #8862 协同完成 WASM 通道栈。 |
| **内建通道通过 `provides` 镜像为插件** | [#8855](https://github.com/zeroclaw-labs/zeroclaw/issues/8855) | ✅ PR #8855 OPEN | 让插件与编译内通道在运行时透明等价。 |
| **OpenAI Chat Completions 端点** | [#8486](https://github.com/zeroclaw-labs/zeroclaw/issues/8486) | ✅ PR #8486 OPEN（XL, 多领域） | 满足 LangChain、

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*