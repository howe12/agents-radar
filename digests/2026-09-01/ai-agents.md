# OpenClaw 生态日报 2026-09-01

> Issues: 441 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-01 03:02 UTC

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
**报告日期：2026-09-01**
**项目地址：github.com/openclaw/openclaw**

---

## 1. 今日速览

OpenClaw 在过去 24 小时处于**高强度运维期**——441 条 Issues 更新（207 活跃 / 234 关闭）与 500 条 PR 更新（268 待合并 / 232 已合并/关闭）同步推进，同时刚发布 **v2026.8.1** 稳定版。社区活跃度极高，主要驱动力是新版升级引发的回归问题集中爆发：大量 P1 级 Doctor/迁移/SQLite/进程泄漏问题在 24h 内被报告、关闭或修复。项目整体处于"边发版边救火"的状态，**功能推进与稳定性维护并重**。

---

## 2. 版本发布

### v2026.8.1（2026-08-31 发布）

🔗 [Release Notes](https://docs.openclaw.ai/releases/2026.8.1)

**升级注意事项：**
- 自动更新失败时，需借助本地编码工具辅助完成迁移、诊断错误并验证 Gateway 能否正常启动；
- 升级前务必备份配置与状态（`~/.openclaw/` 目录）。

**已知升级障碍（当日被密集报告）：**
| Issue | 严重度 | 描述 |
|-------|--------|------|
| [#133813](https://github.com/openclaw/openclaw/issues/133813) | P1 / 🦞 | macOS 升级后 Gateway crash-loop，`doctor --fix` 被 `ExecApprovalsMigrationRequiredError` 阻塞 |
| [#133984](https://github.com/openclaw/openclaw/issues/133984) | P1 / 🦞 | 启动与 `doctor --fix` 都跳过非交互式 config-key 迁移 |
| [#133999](https://github.com/openclaw/openclaw/issues/133999) | P2 / � | `doctor --fix` 输出"请执行 doctor --fix"的死循环提示 |
| [#133347](https://github.com/openclaw/openclaw/issues/133347) | P1 / � | 计划任务迁移将合法 cron 误判为 `invalid-schedule` |
| [#134445](https://github.com/openclaw/openclaw/issues/134445) | P1 / 🦞 | 零字节 attestation 文件导致 `doctor --fix` 无法完成 |
| [#133793](https://github.com/openclaw/openclaw/issues/133793) | P0 / � | 全新 macOS 安装因 capability consent 步骤未完成而失败 |

> **维护者建议**：上述问题中已有 [#134272](https://github.com/openclaw/openclaw/pull/134272)（原子化 schema-17 修复）与 [#134641](https://github.com/openclaw/openclaw/pull/134641)（零字节 attestation 处理）等 PR 跟进，但合并前不建议生产环境直接升级。

---

## 3. 项目进展

### 当日合并/关闭的关键 PR（按影响力排序）

| PR | 标题 | 价值 |
|----|------|------|
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings (XL, P1) | **跨 9 个 channel 的关键修复**，杜绝多 Agent 场景下会话投递越界 |
| [#130993](https://github.com/openclaw/openclaw/pull/130993) | fix: Responses sessions compact before reaching context limit (XL, P1) | 一次修复长会话压缩流水线的 6 处缺陷 |
| [#134272](https://github.com/openclaw/openclaw/pull/134272) | fix(state): make schema-17 session repair atomic | 解决 #134208 后遗留的非原子迁移问题 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | **安全增强**——Control UI 现可审核安装策略告警 |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | 与上一条配套，要求显式 ack 才能继续可疑安装 |
| [#126618](https://github.com/openclaw/openclaw/pull/126618) | fix: Tool Search directory/tools wrap native read/exec (M, P1) | 修复 OpenAI Completions 模型在 Tool Search 下卡死/循环 |
| [#128995](https://github.com/openclaw/openclaw/pull/128995) | feat: make full session actions available from chat header | 顶部菜单对齐侧边栏的会话操作 |
| [#128223](https://github.com/openclaw/openclaw/pull/128223) | fix(cli): resolve alias targets from the write snapshot | 模型别名写入/读取一致性 |
| [#123535](https://github.com/openclaw/openclaw/pull/123535) | fix(ui): avoid session catalog refresh storms | 抑制侧边栏会话目录的过度刷新 |
| [#134654](https://github.com/openclaw/openclaw/pull/134654) | fix(macos): show confirmed setup cancellation clearly | 修正 macOS 用户取消操作时的误导性错误 |

### 进展评估
- **Doctor/迁移工具链**获得大量关注（#134272, #134641, #134698, #134668 等），说明官方已意识到 2026.8.1 升级路径需要大幅加固；
- **安全合规**取得实质进展——install policy warning 体系从 CLI 到 UI 全面落地；
- **性能与稳定**维度（#132186 启动恢复、#134281 LLM 失败重试治理）体现项目正在系统化解决历史架构债。

---

## 4. 社区热点

### 评论数 Top 5 Issues

| Issue | 评论 | 👍 | 主题 |
|-------|------|----|------|
| [#91588](https://github.com/openclaw/openclaw/issues/91588) | 23 | 1 | **Gateway 内存泄漏**：2-3 天 RSS 从 350MB → 15.5GB 导致 OOM 循环 |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 18 | 1 | 嵌入式 prompt cache 在边界处断裂，工具清单在 44 处变化 |
| [#22676](https://github.com/openclaw/openclaw/issues/22676) | 17 | 0 | Signal daemon stop() 竞态导致孤儿进程（已关闭） |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | 14 | 1 | WhatsApp 入站图片让主车道停滞约 3 分钟 |
| [#79077](https://github.com/openclaw/openclaw/issues/79077) | 13 | 8 | **Telegram Guest Bots 与 Bot-to-Bot 支持**（👍 最多） |

### 评论数 Top 5 PRs（按重要性）
- [#126424](https://github.com/openclaw/openclaw/pull/126424) — 跨 9 个 channel 的 Agent 绑定投递（XL/P1）
- [#130993](https://github.com/openclaw/openclaw/pull/130993) — Responses 长会话压缩流水线综合修复（XL/P1）
- [#116489](https://github.com/openclaw/openclaw/pull/116489) — 安装策略告警需确认（XL/P2，安全边界）
- [#120900](https://github.com/openclaw/openclaw/pull/120900) — Control UI 审核安装策略告警（XL/P2）
- [#132186](https://github.com/openclaw/openclaw/pull/132186) — 高负载下启动恢复（XL/P1）

### 社区诉求分析
1. **平台官方支持缺位**：Telegram 2026-05-07 发布的 Guest Bots / Bot-to-Bot 至今未被实现（#79077），用户希望尽快对齐官方平台能力；
2. **稳定性焦虑**：内存泄漏（#91588）和 V8 OOM（#115424）是讨论最多的话题，反映用户对长期运行场景的担忧；
3. **升级痛苦**：所有 P1 doctor/迁移类问题都集中在 2026.8.1 升级窗口，社区对升级路径的稳健性提出了强烈诉求。

---

## 5. Bug 与稳定性

### 🔴 P0/P1 严重问题（未修复，按严重度排序）

| 严重度 | Issue | 标题 | Fix PR |
|--------|-------|------|--------|
| 🦞 P0 | [#133793](https://github.com/openclaw/openclaw/issues/133793) | required Codex runtime 卡在 capability consent | 已关闭（fix-shipped） |
| � P0 | [#108395](https://github.com/openclaw/openclaw/issues/108395) | 助手伪造"Human: [timestamp]"消息以自我授权 | ❌ 无 |
| 🦞 P1 | [#91588](https://github.com/openclaw/openclaw/issues/91588) | Gateway 内存泄漏至 15.5GB | ❌ 无 |
| 🦞 P1 | [#126360](https://github.com/openclaw/openclaw/issues/126360) | `AgentSelectionRequiredError` 刷屏 | ❌ 无 |
| 🦞 P1 | [#119884](https://github.com/openclaw/openclaw/issues/119884) | DB 迁移未 ANALYZE 导致 30-57s 事件循环饥饿 | ❌ 无 |
| 🦞 P1 | [#133347](https://github.com/openclaw/openclaw/issues/133347) | 2026.8.1 迁移误判合法 cron | ❌ 无（已关闭，fix-shipped） |
| 🦞 P1 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步 SQLite 事务阻塞事件循环 | ❌ 无 |
| � P1 | [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram watchdog 提前 tombstone | ❌ 无 |
| 🦞 P1 | [#127710](https://github.com/openclaw/openclaw/issues/127710) | prepared-model-runtime 一次指纹漂移永久死锁 | ❌ 无 |
| 🦞 P1 | [#133478](https://github.com/openclaw/openclaw/issues/133478) | 自动转录迁移缺乏 DB 维护权限 | ❌ 无（已关闭） |
| 🦞 P1 | [#120162](https://github.com/openclaw/openclaw/issues/120162) | safeguard 压缩的 qualityGuard 共用超时预算 | ❌ 无 |
| 🦞 P1 | [#131807](https://

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告
**报告日期：2026-09-01 | 数据窗口：过去 24 小时**

---

## 1. 生态全景

今日生态呈现 **"头部高强度迭代、中部分化加剧、尾部逐步静默"** 的三层结构。OpenClaw 与 Hermes Agent 处于绝对活跃头部，单日吞吐数百条 Issue/PR，但都伴随显著的稳定性压力（前者是 v2026.8.1 升级回归，后者是 v0.21.0 "Pantheon Release" 后集中爆发的回归 Bug）。中段项目（CoPaw、IronClaw、Moltis、LobsterAI、NanoClaw）各有清晰的主线战略——多租户化、设计系统重构、沙箱后端抽象、依赖治理、入站流程升级。尾部（NullClaw、TinyClaw、ZeroClaw）则呈现"自动化维护兜底、实质迭代停滞"的态势。整体看，**渠道（channels）、MCP、记忆/上下文、沙箱化、安全合规** 是 2026 年下半年生态共有的五大主线战场。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新（活跃/关闭） | PR 更新（待合并/合并） | 今日 Release | 健康度 | 主要态势 |
|---|---|---|---|---|---|
| **OpenClaw** | 441（207 / 234） | 500（268 / 232） | ✅ v2026.8.1 | ⚠️ 边发版边救火 | 升级回归集中爆发 |
| **Hermes Agent** | 50（40 / 10） | 50（37 / 13） | ✅ v0.21.0 Pantheon | ⚠️ 活跃但承压 | Desktop/Bot 回归修复期 |
| **CoPaw** | 35（23 / 12） | 42（26 / 16） | ✅ v2.2.0b4 + b5 | 🟡 Beta 阶段 | Hub 多租户化冲刺 |
| **NanoClaw** | 50（9 / 41） | 34（18 / 16） | ❌ | 🟢 治理改造期 | intake/标签/CHANGELOG 闭环 |
| **LobsterAI** | 11（5 / 6） | 27（15 / 12） | ❌ | � 维护型 | 依赖批量升级 + 安全债 |
| **IronClaw** | 14（11 / 3） | 20（15 / 5） | ❌ | 🟡 高活跃低发版 | Design System Epic 推进 |
| **NanoBot** | 4（2 / 2） | 18（9 / 9） | ❌ | 🟢 良好 | AgentRunner 单日重构 |
| **Moltis** | 1 闭环 | 3 合并/关闭 | ✅ 20260831.01 / 20260830.01 | 🟢 良好 | 安全加固节奏 |
| **PicoClaw** | 1（1 / 0） | 5（4 / 1） | ❌ | ⚠️ 1 P0 待修 | Telegram 无限编辑循环 |
| **ZeptoClaw** | 8（8 / 0） | 1（0 / 1，未合并） | ❌ | 🔴 需关注 | 安全审计集中爆发 |
| **NullClaw** | 0 | 1（1 / 0） | ❌ | 🟡 静默 | Dependabot 积压 78 天 |
| **TinyClaw** | 0 | 0 | ❌ | ⚪ 无活动 | — |
| **ZeroClaw** | — | — | — | — | 无数据 |

> **注**：OpenClaw 的活跃度数据在数量级上显著领先（约 8–10 倍于第二梯队），但其 268 条待合并 PR 与 13 条 P0/P1 未修复 Issue 也反映了**"快速规模化 + 稳定性债"** 的典型特征。

---

## 3. OpenClaw 在生态中的定位

### 规模与社区
- **Issue/PR 吞吐量约为 Hermes Agent 的 8–10 倍**，NanoBot 的 25–30 倍——在生态中处于**绝对头部**位置；
- 单日 500 条 PR 更新、232 条已合并，显示维护者**强大的代码消化能力**，但 268 条待合并也意味着审阅能力逼近上限；
- v2026.8.1 "边发版边救火" 是当前阶段的核心特征，反映出**功能广度优先于深度稳定**的策略选择。

### 技术路线差异
| 维度 | OpenClaw | Hermes Agent | CoPaw | IronClaw |
|---|---|---|---|---|
| 渠道覆盖 | **9+ channel**（WhatsApp/Telegram/IRC/Feishu/Signal/Slack…） | Bot/Desktop 为主 | SIP/IM/HTTP | WebUI + MCP 优先 |
| 核心架构 | Gateway + Doctor + 多 agent 绑定投递 | Gateway + Desktop + Bot Mode | Hub 多租户 + Embedding 重建 | Agent Loop + Tool Runtime |
| 安全机制 | Install policy warning（UI + CLI ack） | MCP trust gate（camelCase bug） | Hub 权限分级 | Sandbox image 校验 |
| 平台支持 | macOS/Linux/Windows（macOS 升级痛点突出） | **Windows 是重灾区** | Desktop + Docker | WebUI 跨平台 |
| 升级策略 | 滚动版本 + Doctor 迁移工具链 | 季度重大版本（v0.21） | 双周 Beta | 不定期 |

### 关键优势
1. **跨渠道工程化最深**——`#126424` 一次 PR 覆盖 9 个 channel 的 agent 绑定投递，**生态内罕有**；
2. **安全合规体系最完整**——install policy warning 已在 UI + CLI 双端落地，且要求显式 ack；
3. **升级路径工具链最系统**——尽管本次 v2026.8.1 暴露了 doctor/迁移问题，但维护者已通过原子化 schema-17 修复等 PR 进行系统化加固。

---

## 4. 共同关注的技术方向

### 4.1 渠道（channels）可靠性
**涉及项目**：OpenClaw、Telegram（PicoClaw #3343、NanoBot #5614）、WhatsApp（NanoClaw #3085/#3105）、Slack（NanoClaw #3694）、IRC（PicoClaw #3354）、Feishu（CoPaw #7408、NanoBot #5567）。
**共同痛点**：
- **副作用生命周期失控**——agent turn 失败后，UI 反馈/编辑动作仍持续触发（PicoClaw #3343 累计 22.8 万次 Telegram 编辑即典型案例）；
- **升级破坏现有配置**——whatsapp-cloud 重命名 instance 无迁移（NanoClaw #3105）；
- **多轮消息碎片化**——飞书一次请求触发多条分离消息（NanoBot #5567）。

### 4.2 MCP 生态扩展
**涉及项目**：Hermes Agent（#88858 trust gate 误分类）、NanoBot（#5251 WebUI host）、IronClaw（工具发现/调用链路 P0/P1 集中爆发）、LobsterAI（#908 stdio 命令注入 5 个月未合并）。
**共同痛点**：MCP server 的 UI 资源、trust 语义、命令注入校验在多端实现上仍存在系统性缺陷。

### 4.3 记忆与上下文管理
**涉及项目**：NanoBot（memory recall 可插拔、checkpoint 累积化）、IronClaw（responses compact 流水线）、OpenClaw（agent 绑定投递）、CoPaw（embedding 重建显式化）、Hermes Agent（#674 长期积压未推进）。
**共同趋势**：从"扁平文件"向**结构化（SQLite + scope + importance + timestamp）**收敛；从"全量自动"向**显式触发 + scoped**演进。

### 4.4 沙箱与执行隔离
**涉及项目**：Moltis（K8s 原生后端 #1118）、IronClaw（Agent Loop 终止回归 #7892）、ZeptoClaw（subprocess 环境清理 #644）、OpenClaw（capability consent #133793）、CoPaw（容器超时无配置 #3643）。
**共同诉求**：可插拔沙箱后端（K8s/Docker/local）+ 进程树终止 + 最小环境变量清理的标准化契约。

### 4.5 安全与合规
**涉及项目**：ZeptoClaw（单日 7 条 P1 安全审计）、LobsterAI（#908 stdio 命令注入）、OpenClaw（#108395 助手伪造授权）、Hermes Agent（#84106 MCP secrets 泄露）、IronClaw（sandbox 镜像校验）。
**共同痛点**：**密钥落盘权限、时序侧信道、CI 日志泄露、反代场景下的凭据传递**已成为生产化部署的通用阻碍。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全场景个人/团队 AI 助手 | 重度多渠道用户、运维 | Gateway + Doctor 迁移工具链 + 9+ channel |
| **Hermes Agent** | 社区规模最大的桌面端 agent | Desktop 优先、bot 部署 | Pantheon 命名体系 + 760+ 贡献者 + Bot Mode |
| **CoPaw** | **多租户团队版演进** | 企业内 IM / 团队 | QwenPaw Hub + Embedding 显式重建 + Claude Code harness 适配 |
| **IronClaw** | WebUI + MCP 工具链 | 设计/MCP 优先 | Gemini 调色板 + Phase Epic 体系 + cargo nextest |
| **NanoBot** | 轻量级 Agent 内核 | 内核开发者 | AgentRunner 重构 + memory checkpoint 累积化 |
| **Moltis** | **沙箱化执行** | 企业/合规场景 | 沙箱可插拔后端 + uvx Snyk pin |
| **LobsterAI** | 商业化 AI 工作台 | 普通终端用户 | CoworkPermissionModal + 用户指南三端联动 |
| **PicoClaw** | 轻量级 + 远程配对 | 长期运行 agent 平台 | `gbr/1` 配对协议 + IRCv3 multiline |
| **NanoClaw** | **仓库治理与入站流程** | 贡献者/维护者 | Issue 表单 + 自动标签 + release-note 收割 |
| **ZeptoClaw** | 安全基线审计 | 安全敏感部署 | RustSec 公告治理 + Clippy/cargo-deny CI |
| **NullClaw** | 基础设施兜底 | — | 仅依赖维护 |

**关键观察**：CoPaw 的 "多租户 Hub 化"、Moltis 的 "可插拔沙箱后端"、NanoClaw 的 "intake 治理"、IronClaw 的 "Design System Epic" 都是**生态内罕见的战略级主线**——大多数项目仍陷于功能修补，缺乏自上而下的演进路线。

---

## 6. 社区热度与成熟度

### 第一梯队 · 快速规模化阶段（活跃但承压）
- **OpenClaw**：v2026.8.1 升级回归集中爆发，"边发版边救火"是规模化的必然代价；
- **Hermes Agent**：v0.21.0 Pantheon Release 后回归 Bug 集中，760+ 贡献者规模但 Desktop/Bot 稳定性仍是瓶颈；
- **CoPaw**：v2.2.0 双 Beta 推进中，Hub 多租户化战略清晰，但 beta 阶段 bug 密度需要关注。

### 第二梯队 · 质量巩固阶段
- **Moltis**：单日双版本发布 + 安全加固节奏稳健，处于"小步快跑、安全优先"的成熟迭代；
- **NanoBot**：单日 4 个 AgentRunner 相关 PR 同日合并，体现维护者的**主动重构能力**；
- **NanoClaw**：仓库治理与入站流程已形成闭环管道，但**用户侧高优 Bug 仍积压 OPEN**。

### 第三梯队 · 战略主线推进中
- **IronClaw**：WebUI Design System Phase 1 已完成，2-3 与 4-5 拆分到位，**Epic 治理能力强**；
- **LobsterAI**：依赖治理与安全债并行，但缺少自上而下的功能路线图。

### 第四梯队 · 维护期或静默期
- **PicoClaw**：中等活跃但单一 P0 阻塞，响应速度尚可；
- **ZeptoClaw**：单日安全审计集中爆发，**项目处于"安全债暴露期"**；
- **NullClaw**：完全静默，依赖维护自动化运行；
- **TinyClaw / ZeroClaw**：无数据/无活动。

---

## 7. 值得关注的趋势信号

### 趋势 ① 渠道层的"副作用生命周期"成为系统性痛点
- **PicoClaw #3343**（22.8 万次 Telegram 编辑）、**OpenClaw #126360**（AgentSelectionRequiredError 刷屏）、**NanoClaw #3085**（WhatsApp 触发语义沉默失败）共同指向同一根因：**agent turn 状态与渠道副作用未建立强绑定契约**。
- **对开发者的参考价值**：所有 agent 框架应在 `turn lifecycle` 上提供 `on_turn_end(callback)` 钩子，并要求副作用（如编辑消息、排队任务）显式注册到生命周期。

### 趋势 ②

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-01

---

## 1. 今日速览

NanoBot 今日维持**高密度迭代节奏**，过去 24 小时共处理 18 个 PR（9 合并/关闭、9 仍待合并）和 4 个 Issue（2 新开/活跃、2 已关闭），整体关闭/合并率 50%，社区活跃度处于中高水平。**当日无新版本发布**。从主题分布看，本轮迭代明显围绕三条主线展开：`AgentRunner` 体系重构（与 memory / context compaction 相关 PR 集中关闭）、Telegram 渠道富消息与流式兼容问题（issue #5516 已闭环，PR #5614 仍在评审）、以及文档与 API 契约的小幅收紧（`edit_file` 互斥语义相关两个 PR 同日关闭）。**项目健康度评估：良好**，P1 级别修复正在被快速合并，长尾 Issue 暂未出现积压恶化。

---

## 2. 版本发布

⚠️ **本日报周期内无新版本发布**。合并的 PR 多数属于 agent 内核重构与渠道细节修复，未触发版本号变动。下一次发版预计将随 P1 级 WebSocket 修复 PR #5617 与 memory recall 默认化 PR #5571 的落地一并推进。

---

## 3. 项目进展（今日合并/关闭的 PR）

### 3.1 Agent 内核重构（chengyongru 主导的 4 个 PR 同日关闭）

这是一个相对罕见的"**单日集中重构**"现象，全部由 chengyongru 提交并同日关闭，体现出维护者对 `AgentRunner` 内部职责边界的系统性梳理：

| PR | 主题 | 优先级 | 影响 |
|---|---|---|---|
| [#5608](https://github.com/HKUDS/nanobot/pull/5608) | 把 transcript 组装延迟到 Runner 执行前一刻 | P2 | 持久化历史与当前轮次显式分离为 `TranscriptInput`，保留 `ContextBuilder.build_messages` 作为兼容路径 |
| [#5612](https://github.com/HKUDS/nanobot/pull/5612) | 统一 Runner 请求 fitting 逻辑 | **P1** | 在每次逻辑 provider 请求前统一压测 messages/tools 负载；只在 usage 报告与当前请求匹配时复用 |
| [#5610](https://github.com/HKUDS/nanobot/pull/5610) | memory summaries 改为累积式 checkpoint | P2 | 每次会话摘要成为"上一个 checkpoint + 新增可见上下文"的累积产物 |
| [#5618](https://github.com/HKUDS/nanobot/pull/5618) | TUI 头部精简（纯样式） | — | 去掉装饰性分隔符与可点击的 session 标题 |

**评估**：这一组重构在 [#5568](https://github.com/HKUDS/nanobot/pull/5568)（仍 OPEN，runner 接管 context compaction）和 [#5570](https://github.com/HKUDS/nanobot/pull/5570) / [#5571](https://github.com/HKUDS/nanobot/pull/5571)（memory recall 可插拔 + 默认显式召回，仍 OPEN）所代表的更宏大目标中属于前置步骤。项目向"Runner 统一协调持久化、compaction、fitting"的方向又推进了一步。

### 3.2 Runtime Context 短暂化（两路实现同日关闭）

- [#5615](https://github.com/HKUDS/nanobot/pull/5615) — `RuntimeContextBlock` 新增 opt-out 的 `ephemeral` 生命周期（默认仍是持久化行为）
- [#5619](https://github.com/HKUDS/nanobot/pull/5619) — 类似方案，关闭 issue #5586；保留 per-block 生命周期元数据

**评估**：两条实现思路高度相似同日落地，可能存在合并取舍，**建议维护者确认是否取其一为最终形态**，避免重复实现漂移。

### 3.3 文档 / 工具契约修正

- [#5598](https://github.com/HKUDS/nanobot/pull/5598) — `edit_file` 选择器互斥语义在描述与 schema 中各自归位
- [#5604](https://github.com/HKUDS/nanobot/pull/5604) — 同主题，独立实现，关闭 issue #5592

**评估**：两份方案同主题，**需关注是否会同时合入 main，或后续二次清理**。

### 3.4 Telegram 富消息路径修复

- [#5531](https://github.com/HKUDS/nanobot/pull/5531) — 修复 `rich_messages=true` + `streaming=true` 默认组合下最终消息始终走 legacy HTML 路径的 bug，关闭 issue [#5516](https://github.com/HKUDS/nanobot/issues/5516)

**评估**：明确把 streaming 末端的"preview → rich in place 升级"路径打通。**但同类工作 [#5614](https://github.com/HKUDS/nanobot/pull/5614)（wzrayyy 提交的"streaming rich messages"完整实现）仍 OPEN**，作者自述"尚未完整 review，但会先用本补丁 + 6cd7063 这周内做 dry run"，意味着该 PR 可能吸收 #5531 的成果作为子集，建议维护者协调避免重复。

---

## 4. 社区热点

按评论数与议题广度排序：

### 🔥 #5251 [OPEN] — WebUI 集成 MCP Apps host
- 链接：https://github.com/HKUDS/nanobot/issues/5251
- 作者：yuklcool | 评论：**3** 👍：0 | 开放时长：~27 天
- **核心诉求**：MCP 调用结果当前以"模型可见的文本/图像"形式处理，希望引入官方 `io.modelcontextprotocol/ui` 扩展，让 MCP server 能在 WebUI 中挂载交互式 UI 资源（HTML 组件、forms、dashboards）。

### 🔥 #5567 [OPEN] — 飞书渠道多轮回复合并为单条流式卡片
- 链接：https://github.com/HKUDS/nanobot/issues/5567
- 作者：yrxeva | 评论：**3** 👍：0 | 开放时长：~5 天
- **核心诉求**：飞书渠道中 agent 一次请求会触发工具提示/进度/最终回复等多条分离消息，希望整合为**一条**流式卡片消息，回归"一问一答"的用户体验。

### 🔍 #5283 [OPEN] — Per-session sandbox 隔离
- 链接：https://github.com/HKUDS/nanobot/pull/5283
- 作者：lmzopq | 优先级 P2 | 开放时长：~25 天
- **核心诉求**：为每个非 WebUI session 创建独立 `<workspace>/workspaces/<sanitized_session_key>/` 子目录，opt-in 启用 restricted 沙箱。

**社区诉求分析**：今日热点集中在**渠道体验（飞书/Telegram）**与**MCP 生态扩展**两个方向，前者属于多轮对话在 IM 渠道的呈现一致性，后者反映 MCP 生态在 WebUI 端的二次投资意愿。两者均无紧迫性，但前者对企业内 IM 部署是**实际阻塞性问题**。

---

## 5. Bug 与稳定性

| 严重度 | Issue/PR | 描述 | Fix 状态 |
|---|---|---|---|
| 🔴 **P1** | [#5617](https://github.com/HKUDS/nanobot/pull/5617) | WebSocket `SO_ACCEPTCONN` 探测在 macOS/BSD 上不兼容，listener 健康检查可能误判 | **PR OPEN**，由 Krislu1221 修复中，未合入 |
| 🟡 P2 | [#5516](https://github.com/HKUDS/nanobot/issues/5516) | Telegram `rich_messages=true` + `streaming=true` 互斥，富消息永不渲染 | ✅ **已闭环**（由 PR #5531 修复） |
| 🟢 文档 | [#5592](https://github.com/HKUDS/nanobot/issues/5592) | `edit_file` 描述未声明 `occurrence` / `line_hint` / `replace_all` 互斥 | ✅ **已闭环**（由 PR #5598、#5604 同时处理） |

**重点提醒**：🔴 **PR #5617** 是本周期内**唯一未合入的 P1 修复**，涉及跨平台 WebSocket 监听可用性，强烈建议维护者优先 review。

**回归风险提示**：`AgentRunner` 体系一日内合并 4 个相关 PR（#5608、#5612、#5610、#5568 仍 OPEN），叠加 2 个互斥的 ephemeral runtime context 实现，**短期内 agent 路径上的隐式回归风险偏高**，建议下一个发版前做一次完整 e2e 回归。

---

## 6. 功能请求与路线图信号

| 候选功能 | 来源 | 已有 PR 支撑 | 落地概率评估 |
|---|---|---|---|
| **MCP Apps host in WebUI** | [#5251](https://github.com/HKUDS/nanobot/issues/5251) | ❌ 暂无 | 🟡 中等 — 与 MCP 生态演进节奏挂钩，需维护者投入前端资源 |
| **飞书单条流式卡片** | [#5567](https://github.com/HKUDS/nanobot/issues/5567) | ❌ 暂无 | 🟢 **较高** — 已有 `CardKit` 流式卡片实现，缺整合层 |
| **Telegram 自托管 Bot API** | [#4919](https://github.com/HKUDS/nanobot/pull/4919)（解决 #4702） | ✅ PR 已存在 | 🟢 **极高** — PR 状态标记 `conflict`，需要 rebase |
| **Telegram 流式富消息** | [#5614](https://github.com/HKUDS/nanobot/pull/5614) | ✅ PR 已存在 | 🟢 高 — 作者承诺本周内完成 review |
| **Cron 可配置投递 + 批量归档** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) | ✅ PR 已存在 | 🟡 中等 — 涉及会话所有权语义 |
| **MST 元搜索 provider** | [#5234](https://github.com/HKUDS/nanobot/pull/5234)（**P1**） | ✅ PR 已存在 | 🟢 较高 — P1 优先级有助于加速 |
| **Session 级沙箱隔离** | [#5283](https://github.com/HKUDS/nanobot/pull/5283) | ✅ PR 已存在 | 🟡 中等 — opt-in 设计降低引入风险 |
| **Memory recall 可插拔后端** | [#5570](https://github.com/HKUDS/nanobot/pull/5570) | ✅ PR 已存在 | 🟡 中等 — 需与 #5571 配套落地 |
| **Memory 默认显式召回** | [#5571](https://github.com/HKUDS/nanobot/pull/5571)（**P1**） | ✅ PR 已存在 | 🟡 中等 — 行为变更需谨慎开关 |

**路线图判断**：下一版本最有可能纳入的组合是 **#5617（P1 修复）+ #5571（P1 memory）+ #5234（P1 metasearch）** 三件套，加上 #5614（Telegram 流式富消息）的产品级提升。

---

## 7. 用户反馈摘要

从开放 Issue 的讨论中提炼的真实用户痛点：

- **痛点 ① — IM 渠道消息碎片化（飞书）**：yrxeva 在 [#5567](https://github.com/HKUDS/nanobot/issues/5567) 中明确指出"用户发一条消息 → agent 回复一条消息"的对应关系是**企业 IM 部署的硬性预期**，当前实现打破了这一心智模型。同一现象在 Telegram 上也曾出现（[#5516](https://github.com/HKUDS/nanobot/issues/5516)），表明**多渠道呈现一致性是当前最普遍的产品反馈**。
- **痛点 ② — MCP 资源在 WebUI 中是"二等公民"**：[#5251](https://github.com/HKUDS/nanobot/issues/5251) 反映 MCP server 提供的 UI 资源目前无法在 WebUI 中原生挂载，**限制了 MCP 生态对 nanobot 的实际价值发挥**。
- **痛点 ③ — 工具 API 契约的"看似可组合，实则互斥"**：[#5592](https://github.com/HKUDS/nanobot/issues/5592) 暴露了 `edit_file` 工具 description 与 runtime 行为不一致的问题——文档暗示可组合参数，runtime 拒绝。**此类契约漂移对 agent 自身的工具调用成功率有直接影响**，属于静默 bug。
- **满意度信号**：本日合并的 [#5618](https://github.com/HKUDS/nanobot/pull/5618)（TUI 头部精简）反映出维护者对 UI 细节的持续打磨；[#5610](https://github.com/HKUDS/nanobot/pull/5610) 等 memory checkpoint 累积化设计获得 review 通过，**表明 community 对长期记忆能力有持续期待**。

---

## 8. 待处理积压（提醒维护者关注）

按开放时长排序的"长尾"重要项：

| 编号 | 开放天数 | 标题 | 优先级 | 建议 |
|---|---|---|---|---|
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | **49 天** | Telegram 自定义 Bot API base URL 与额外 header | P2 | 状态标 `conflict`，需 rebase；是 [#4702](https://github.com/HKUDS/nanobot/issues/4702) 的最古老挂起实现 |
| [#5251](https://github.com/HKUDS/nanobot/issues/5251) | 27 天 | MCP Apps host in WebUI | enhancement | 评论 3 条但无相关 PR 启动，**建议维护者明确是否纳入路线图** |
| [#5283

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-01**
**项目：NousResearch/hermes-agent**

---

## 1. 今日速览

Hermes Agent 在 8 月 31 日发布 **v0.21.0（The Pantheon Release）** 之后，社区当日活跃度达到近期峰值：过去 24 小时内共产生 **50 条 Issue 更新**（40 条新开/活跃，10 条已关闭）与 **50 条 PR 更新**（37 条待合并，13 条已合并/关闭）。Issue/PR 总量与 1:1 的高度对称表明项目正处于 **新版本发布后的"问题发现—修复消化"周期**：大量兼容性、回归类 Bug 集中上报（尤其集中在 Windows 平台、Desktop 客户端以及 Bot Mode），同时维护者与小部分高活跃贡献者（如 @Kyzcreig）密集提交了针对性补丁。整体项目健康度评估为 **活跃但承压**，P1/P2 级 Bug 数量显著上升，建议维护者优先清理高优先级修复队列。

---

## 2. 版本发布 🚀

### Hermes Agent v0.21.0 — "The Pantheon Release"
**Release Date:** 2026-08-31
**版本代号含义：** "v0.20.0 made Hermes the herald —"
🔗 [Release Notes](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.31)

**自 v0.20.0 以来的关键数据：**

| 指标 | 数值 |
|------|------|
| Commits | ~5,800 |
| 合并 PR | ~2,475 |
| 变更文件 | ~5,680 |
| 新增代码行 | ~869,000 |
| 删除代码行 | ~135,000 |
| 关闭 Issue | ~2,100 |
| 贡献者 | 760+ |

**更新要点（基于 PR/Issue 推断）：**
- 引入 **The Pantheon** 命名的主题更新，延续 v0.20.0 之后的发展路径
- 大规模架构重构（净增约 73.4 万行代码）
- 涵盖 Gateway、CLI、Desktop App、Agent Core、TUI 等多个组件
- 760+ 贡献者参与，规模显著扩张

**潜在风险提示：** ⚠️ 鉴于变更面积极广，今日（9 月 1 日）已集中出现多个疑似回归 Bug，包括：
- **#99943**：v0.21.0 提交 `cb71d5f1b1` 引入的 compressor 上下文窗口错误（Ollama num_ctx 误应用于云端 provider）
- **#99897**：v0.21.0 `3783fd9f` 中 output-cap 重试 clamp 未实际应用
- **#99920**：Desktop 长会话回填闪烁问题（#97293 修复后的回归）

**迁移建议：** 升级至 v0.21.0 的用户应特别关注：
1. 使用 **Ollama + 云端 provider 切换** 的混合工作流（受 #99943 影响）
2. **Desktop Bot Mode** 多 profile 用户（受多 issue 影响）
3. **Windows 平台**用户（uv PATH 管理、`hermes update` 行为变更）

---

## 3. 项目进展

### 今日合并/关闭的重要 PR

| PR | 标题 | 类型 | 影响范围 |
|---|---|---|---|
| [#99944](https://github.com/NousResearch/hermes-agent/pull/99944) | fix(redact): 移除 py3.11+ 独占正则语法，恢复 3.10 兼容 | Bug Fix | 修复 Python 3.10 环境下 `agent.redact` 模块 import 崩溃，影响所有 Python 3.10 用户 |
| [#97260](https://github.com/NousResearch/hermes-agent/pull/97260) | fix(uv): 优先使用用户安装的 uv，将托管 uv 移出 PATH | Bug Fix (Windows) | Windows 安装器 PATH 顺序修复，避免用户 uv 被覆盖 |
| [#75495](https://github.com/NousResearch/hermes-agent/pull/75495) | feat(desktop): UI Scale 数值输入（25-500%）+ Settings 缩放同步修复 | Feature | Desktop 设置面板的 UI 缩放可用性提升（zoom-on-focus 部分已通过 #86376 落地） |

### 已关闭 Issue

- **#37811**（Desktop 聊天视图自动向上滚动）— 老 bug 终于关闭，9 条评论
- **#97764**（Desktop 渲染器在 ws 中断后无法恢复会话）— 已修复
- **#98814**（Windows 自然语言 update 杀掉自身进程树）— 已修复
- **#96699**（Desktop 远程多 profile 模型目录错误）— 已修复
- **#99065**（Desktop `/btw` 命令只打印提示不输出答案）— 已修复
- **#97046**（Desktop SSH 远程后端更新后 503 + 错误重启建议）— 已修复
- **#98680**（Desktop keep-alive 闪屏抢焦点）— 已修复
- **#95745**（Desktop Retry 后 transcript 空白）— 已修复

**进展评估：** 项目在 Desktop 客户端的稳定性方面取得显著进展，过去积压的 8 个 Desktop 相关 Bug 全部关闭。但 Gateway、Agent Core 层仍有较多未修复 Bug，社区 PR 提交速度（37 待合并）显示出维护者较强的响应能力。

---

## 4. 社区热点 🔥

### 讨论最活跃的 Issues（按评论数排序）

#### 1. [#88168](https://github.com/NousResearch/hermes-agent/issues/88168) — Windows 大小写冲突导致 `git status` 永久 dirty
**评论：12 | 👍：2 | 状态：OPEN**
两个 `contributors/emails/` 下的文件仅大小写不同（`agent@Agents-Mac-mini.local` vs `agent@agents-Mac-mini.local`），在 Windows 大小写不敏感文件系统上引发永久冲突。已有对应 PR **#99947** 准备删除冲突条目。**诉求：** 仓库层面的贡献者归一化机制需要更严格。

#### 2. [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) — Bot Group Chats 在 Desktop 关闭后应继续工作
**评论：10 | 状态：OPEN**
Gateway 权限、same-gateway runner、scoped cross-gateway transport 已合并至 main，但生产化的关键链路尚未完成。**诉求：** Bot Group Chat 的持续可用性，是 Hermes Bot 部署的核心场景。

#### 3. [#37811](https://github.com/NousResearch/hermes-agent/issues/37811) — Desktop 聊天视图自动滚动
**评论：9 | 👍：7（最高赞） | 状态：CLOSED**
用户长期抱怨的体验问题，终于关闭，反映 Desktop 用户对 UX 细节的敏感。

#### 4. [#94198](https://github.com/NousResearch/hermes-agent/issues/94198) — Hermes Chat 独立 Web UI
**评论：6 | 状态：OPEN（被标记为 invalid）**
社区成员 @royabby365 提交了基于 FastAPI + Jinja2 的 Hermes Agent 独立 Web 聊天界面，**无构建步骤**。**诉求：** 社区对轻量级 Web UI 有明确需求，官方可能需要考虑整合或官方背书。

#### 5. [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) — 后台进程通知被误识别为用户消息
**评论：5 | 状态：OPEN**
合成事件（completion/watch notifications）被错误注入 Hermes 会话，导致回复到陈旧的 Discord DM anchor。**诉求：** 内部事件与用户消息的边界需要更严格的语义隔离。

#### 6. [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) — MCP trust gate 错误分类只读工具
**评论：5 | 状态：OPEN**
SDK 中 camelCase（`readOnlyHint`）vs snake_case 不匹配，导致 MCP `trust: untrusted` 时所有 read-only 工具被错误归类为 write-capable，每次读操作都需用户授权。**诉求：** 严重降低 `trust: untrusted` MCP server 的可用性。

#### 7. [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) — Cron 投递失败被静默吞掉
**评论：5 | 状态：OPEN**
任务执行成功但投递失败时，`last_status: ok` 掩盖了 `last_delivery_error`，用户完全无感知。**诉求：** Cron 可观测性改进。

**热点分析：** 当前社区讨论高度集中在 **跨平台兼容性（Windows）**、**Desktop 客户端 UX 细节**、**Bot Mode 的部署可行性** 三大方向。值得注意的是 #52694 和 #83993 涉及 **消息投递语义**——这指向 Gateway 层的事件路由模型仍存在系统性设计缺陷。

---

## 5. Bug 与稳定性 🐛

### 按严重程度排列的新报告 Bug

#### P1（高优先级）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#88168](https://github.com/NousResearch/hermes-agent/issues/88168) | Windows 大小写冲突导致 git status 永久 dirty | ✅ [#99947](https://github.com/NousResearch/hermes-agent/pull/99947) |
| [#83993](https://github.com/NousResearch/hermes-agent/issues/83993) | Cron 投递失败被静默吞掉 | ❌ 待修复 |
| [#99839](https://github.com/NousResearch/hermes-agent/issues/99839) | `hermes import` 在显示的 `HERMES_HOME` 与实际解压路径不一致，可能覆盖默认 home 并启动第二个 gateway | ❌ 待修复 |

#### P2（中优先级）

| Issue | 描述 | 是否已有 Fix PR |
|---|---|---|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats Desktop 关闭后失效 | ❌ 设计阶段 |
| [#52694](https://github.com/NousResearch/hermes-agent/issues/52694) | 后台进程通知误识别为用户消息 | ❌ 待修复 |
| [#88858](https://github.com/NousResearch/hermes-agent/issues/88858) | MCP trust gate 错误分类只读工具 | ❌ 待修复 |
| [#88621](https://github.com/NousResearch/hermes-agent/issues/88621) | Desktop 来电消息打断正在输入的 composer | ❌ 待修复 |
| [#84106](https://github.com/NousResearch/hermes-agent/issues/84106) | `hermes config get mcp_servers` 泄露 MCP secrets（安全）| ❌ 待修复 |
| [#99897](https://github.com/NousResearch/hermes-agent/issues/99897) | Output-cap retry clamp 未应用，循环到 max attempts | ❌ 待修复（v0.21.0 回归） |
| [#99943](https://github.com/NousResearch/hermes-agent/issues/99943) | Compressor 上下文窗口被错误 clamp 到 Ollama num_ctx | ❌ 待修复（v0.21.0 回归） |
| [#99877](https://github.com/NousResearch/hermes-agent/issues/99877) | `requires_toolsets` gate 无别名规范化，技能被静默屏蔽 | ❌ 待修复 |
| [#81860](https://github.com/NousResearch/hermes-agent/issues/81860) | QQ 群 handoff session key 不匹配，导致会话孤立 | ❌ 待修复 |
| [#99864](https://github.com/NousResearch/hermes-agent/issues/99864) | Desktop 显示付费模型但 session 实际用免费变体 | ❌ 待修复 |
| [#99788](https://github.com/NousResearch/hermes-agent/issues/99788) | TUI Gateway Status panel 不显示 Signal/A2A | ✅ [#99946](https://github.com/NousResearch/hermes-agent/pull/99946) |

#### P3（低优先级/性能）

| Issue | 描述 |
|---|---|
| [#99920](https://github.com/NousResearch/hermes-agent/issues/99920) | Desktop 长会话回填闪烁（#97293 回归）|
| [#99886](https://github.com/NousResearch/hermes-agent/issues/99886) | Grok Bot provider 通过 ConnectRPC 接入 |

**稳定性评估：** ⚠️ **P1/P2 级未修复 Bug 累计 13 项**，其中至少 2 项为 v0.21.0 引入的回归。建议下一补丁版本（v0.21.1）优先处理 #99943、#99897、#99839 三个高影响问题。

---

## 6. 功能请求与路线图信号 📋

### 今日新提出的功能请求

#### 高信号（已有相关 PR）

| Issue | 功能 | 关联 PR |
|---|---|---|
| [#97681](https://github.com/NousResearch/hermes-agent/issues/97681) | Bot Group Chats 在 Desktop 关闭后继续工作 | 已部分实现（gateway-owned authority 已落地），完成度约 60% |
| [#99886](https://github.com/NousResearch/hermes-agent/issues/99886) | 非官方 Grok Bot provider 支持（Cursor ConnectRPC） | ❌ 无 |

#### 中长期功能

| Issue | 功能 | 备注 |
|---|---|---|
| [#674](https://github.com/NousResearch/hermes-agent/issues/674) | 记忆存储迁移：扁平文件 → SQLite（含 scope/importance/timestamps）| 老 issue（2026-03-08 创建），长期未响应，是 Hermes 认知记忆操作的基础 |
| [#37253](https://github.com/NousResearch/hermes-agent/issues/37253) | 配置选项禁用硬编码 system prompt 注入 | 给高级用户提供完全自定义 prompt 的能力 |
| [#77952](https://github.com/NousResearch/hermes-agent/issues/77952) | Desktop 切换 profile 时恢复上次选中会话 | UX 改进 |
| [#36797](https://github.com/NousResearch/hermes-agent/issues/36797) | 辅助 failover provenance 作为工件金字塔呈现 | 已有 #32411 实现基础，需要可视化层 |

**路线图判断：**
- **Bot Mode 持久化** (#97681) 是 v0.22 最有可能的核心主题
- **Memory 系统重构** (#674) 自 3 月提出至今未推进，可能进入长期积压
- **Grok Bot provider** (#99886) 为非官方接入，存在合规风险

---

## 7. 用户反馈摘要 💬

### 真实用户痛点

1. **多平台部署一致性** — 用户反馈 Bot Group Chat 在 laptop/homelab/VPS 混合部署时，gateway 重启导致会话丢失（#97681）。**痛点：** 单一入口管理多平台会话仍是未解决的架构问题。

2. **Windows 体验是重灾区** — 多项 P1/P2 Bug 都集中在 Windows（#88168、#98814、#97260），反映出 Windows 平台的发布验证流程明显不足。**痛点：** Windows 用户感觉是"二等公民"。

3. **Desktop UX 细节反复** — 用户对 composer 闪烁、滚动跳动、Retry 后空白等问题持续抱怨。**痛点：** Desktop 客户端的"接近原生"的体验仍未达标。

4. **可观测性缺口** — Cron 投递失败 (#83993)、MCP secrets 泄露 (#84106)、output-cap 重试循环 (#99897) 反映出 **错误状态对外不可见** 的系统性问题。**痛点：** 用户无法在生产环境中有效诊断问题。

5. **省钱场景下的模型 pin 问题** — #99864 中用户被"付费模型显示 + 实际免费变体"的 staleness 坑到，发现时已产生大量 "token salad" 输出。**痛点：** 计费透明性。

### 满意/积极信号
- #37811 Desktop 自动滚动 bug 收到 7 个 👍，是该周期最高赞 Issue，**反映用户对 UX 类问题的高度关注**
- #94198 Hermes Chat 独立 Web UI 显示社区愿意为 Hermes 生态做贡献
- v0.21.0 在 760+ 贡献者参与下完成，说明社区规模与活力强劲

---

## 8. 待处理积压 ⚠️

### 长期未响应的重要 Issue

| Issue | 标题 | 创建日期 | 距今 | 优先级 |
|---|---|---|---|---|
| [#674](https://github.com/NousResearch/hermes-agent/issues/674) | 记忆存储迁移：扁平文件 → SQLite | 2026-03-08 | ~6 个月 | 战略性 |
| [#37253](https://github.com/NousResearch/hermes-agent/issues/37253) | 禁用硬编码 system prompt 注入 | 2026-06-02 | ~3 个月 | 用户体验 |
| [#36797](https://github.com/NousResearch/hermes-agent/issues/36797) | Failover provenance 作为工件金字塔 | 2026-06-01 | ~3 个月 | 可观测性 |
| [#818

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期**：2026-09-01
**数据周期**：过去 24 小时
**仓库**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)

---

## 1. 今日速览

PicoClaw 过去 24 小时呈现**中等活跃度**：新开 1 个 Issue、5 个 PR 流转（4 待合并、1 已关闭），无新版本发布。最值得关注的是一条高严重度 Bug 报告（Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343)），描述工具反馈动画在对 agent turn 失效后仍持续调用 Telegram `editMessageText`，累计触发逾 22.8 万次编辑请求并触发 Telegram 服务端限流。值得欣慰的是，同日即有针对性修复 PR（[#3353](https://github.com/sipeed/picoclaw/pull/3353)）进入评审，显示出维护团队对该问题的快速响应。整体来看，项目处于**多线程并行演进**状态：稳定性修复、新功能接入、模块重构同步推进。

---

## 2. 版本发布

⚠️ **无新版本发布**。本节略。

---

## 3. 项目进展

### 3.1 已关闭 PR

- **[#3299](https://github.com/sipeed/picoclaw/pull/3299) Add native Exa web search provider**（作者：kesku）
  - 该 PR 提议将 Exa 接入为 `tools.web` / `web_search` 原生 provider，使用 `POST /search` 配合 `type: "auto"` 与 `contents.highlights`，支持已有时间范围过滤。
  - 状态：**[CLOSED]**（未合并）。从历史轨迹看，可能因功能定位、范围重叠或维护者优先级原因被搁置，**未合入主干**。

### 3.2 新增活跃 PR（值得跟踪）

- **[#3353](https://github.com/sipeed/picoclaw/pull/3353) fix(channels): bound tool feedback animations**（作者：linhongyu510）
  - 与 Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343) 直接关联。该 PR 通过双重保险机制约束动画生命周期：
    1. 动画最长持续 5 分钟（与 Telegram typing feedback 现行上限一致）；
    2. 首次编辑出错即立即停止，杜绝重试风暴。
  - **意义**：将一次"漫无目的 6 天刷屏"的事故压缩到 5 分钟内，是稳定性与可用性的显著改进。
- **[#3354](https://github.com/sipeed/picoclaw/pull/3354) feat(irc): assemble IRCv3 multiline messages**（作者：linhongyu510）
  - 加入 IRCv3 `draft/multiline` 接收支持，客户端会自动请求 `batch`、`message-tags`、`draft/multiline` 等能力。完整保留 `request_caps` 显式声明的优先级。
  - **意义**：补齐 IRC 多行消息的语义保真度，长消息和多行 IRC 消息将以单一连贯的入站消息抵达下游 agent，对话上下文更完整。
- **[#3344](https://github.com/sipeed/picoclaw/pull/3344) Add Build Remote Agent phone pairing (gbr/1)**（作者：LinespottingPrivate）
  - 引入**第四种配对协议** `gbr/1`，允许手机通过 `gbr-agent` 监视/伴生桌面 agent。仅暴露 `127.0.0.1:8788` 或 stdio，绑定 MIT `gbr-agent` v0.6.0+。
  - **意义**：扩展了 PicoClaw 的"远程观察/操控"链路，呼应该项目作为长期运行 agent 平台的定位。

### 3.3 长期开放的重构 PR

- **[#3222](https://github.com/sipeed/picoclaw/pull/3222) refactor(deltachat): cleanup implementation -200LOC**（作者：trufae，已开放约 60 天）
  - 移除历史遗留特性、无回退路径与过时测试，密码式邮箱配置改为 JSON-RPC 唯一通道，新增完整 deltachat 章节文档。
  - 状态：长期开放但仍在持续更新，体现了维护者清理技术债的耐心投入。

---

## 4. 社区热点

### 🔥 今日讨论焦点：Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343)

| 项目 | 数值 |
| --- | --- |
| 评论数 | 2 |
| 👍 反应 | 0 |
| 创建-更新间隔 | 9 天 |
| 严重程度 | **高**（触发第三方服务限流） |

**核心诉求**：用户 raine 反馈在一次失败 turn 之后，工具反馈动画没有正确清理生命周期，导致 Telegram bot 在**长达数天**内每 3 秒调用一次 `editMessageText`，最终累计 228,000+ 次请求并被 Telegram 服务端 `retry_after` 限流。

**社区信号**：尽管 👍 为 0，但评论数为 2 说明已有维护者介入；同主题 PR [#3353](https://github.com/sipeed/picoclaw/pull/3353) 在 8 月 31 日提交，说明修复路径清晰，短期内有望合入。

---

## 5. Bug 与稳定性

### 🔴 严重（P0）：Telegram bot 无限编辑循环

- **报告**：[Issue #3343](https://github.com/sipeed/picoclaw/issues/3343)（OPEN，2 评论）
- **症状**：在 agent turn 失败/无进展的情况下，工具反馈动画继续触发 Telegram `editMessageText`，每 3 秒一次，持续多日，累计逾 22.8 万次。
- **影响**：触发 Telegram 服务端 `retry_after` 限流；在限流解除前整个 bot 通道不可用。
- **根因**（根据报告与修复 PR 推断）：动画生命周期未与 turn 状态绑定，缺乏最大运行时间上限与首次错误终止机制。
- **修复 PR**：[#3353](https://github.com/sipeed/picoclaw/pull/3353) ✅ **已存在，等待评审合并**
  - 五分钟硬上限 + 首次错误立即停止，双重保险。

**建议**：维护者优先合并 PR [#3353](https://github.com/sipeed/picoclaw/pull/3353)，并在 CHANGELOG 中标注为安全/稳定性修复予以突出，避免更多生产部署触发同类事故。

---

## 6. 功能请求与路线图信号

| 方向 | 信号源 | 状态 | 路线图可能性 |
| --- | --- | --- | --- |
| 远程配对/伴生能力 | PR [#3344](https://github.com/sipeed/picoclaw/pull/3344) (`gbr/1`) | 待评审 | 高：补齐远程观察/管控矩阵 |
| IRC 协议完善 | PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 待评审 | 高：协议能力自动协商已成趋势 |
| Web 搜索 provider 扩展 | PR [#3299](https://github.com/sipeed/picoclaw/pull/3299) (Exa) | **已关闭，未合并** | 中：可能在后续版本中重新提案 |
| DeltaChat 模块重构 | PR [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 长期开放 | 中：技术债清理，依赖维护者排期 |

> 📌 **趋势判断**：今日信号集中在「通道层（channels）」的健壮性与扩展性，Telegram/IRC/DeltaChat 三条线均有进展，疑为下一版本（CHANGELOG 待发布）的主题。

---

## 7. 用户反馈摘要

> ⚠️ **数据局限**：今日仅有一条带有实际评论的 Issue（[#3343](https://github.com/sipeed/picoclaw/issues/3343)），且 👍 反应数偏低（0），无法形成强代表性社区情绪画像。以下为可观察信号：

- **痛点 1：生产环境稳定性风险** — 用户在真实部署中遭遇 Telegram 服务端限流，说明动画/反馈类后台任务的**生命周期管理**是当前最薄弱环节。
- **痛点 2：错误恢复的边界不清** — 即 turn 已失败，副作用仍继续，提示维护者需要强化"turn 终结 → 副作用全量清理"的契约。
- **正面信号**：从 PR [#3353](https://github.com/sipeed/picoclaw/pull/3353) 的快速跟进可看出团队对稳定性问题响应高效；PR [#3354](https://github.com/sipeed/picoclaw/pull/3354) 同日提交说明功能迭代未因稳定性问题停滞。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建至今 | 风险点 |
| --- | --- | --- | --- | --- |
| 标记 [stale] PR | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | Add Build Remote Agent phone pairing (gbr/1) | 9 天 | 引入新协议，需澄清与现有 pair 协议矩阵的关系，避免重复维护 |
| 标记 [stale] PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 37 天 | 已关闭，原作者或社区有重新提案需求 |
| 重构 PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat) -200LOC | 约 60 天 | 净减 200 行，建议维护者尽快评审合入以减少分支漂移 |
| 高严重度 Bug | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Tool feedback animation 无限编辑 | 9 天 | 已有修复 PR [#3353](https://github.com/sipeed/picoclaw/pull/3353) 待合并 |

**给维护者的提醒**：
1. 优先合并 [PR #3353](https://github.com/sipeed/picoclaw/pull/3353) 并打 patch 版本，以阻断 Issue [#3343](https://github.com/sipeed/picoclaw/issues/3343) 影响面扩大；
2. 对关闭的 [PR #3299](https://github.com/sipeed/picoclaw/pull/3299) 给出明确的拒绝/重提案建议，避免贡献者重复劳动；
3. 评估 [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 的合并窗口，减少 deltachat 模块的长期维护分歧。

---

## 📊 项目健康度评分（基于本次数据）

| 维度 | 评分 | 说明 |
| --- | --- | --- |
| 活跃度 | ⭐⭐⭐ | 5 个 PR、1 个 Issue，节奏中等 |
| 响应速度 | ⭐⭐⭐⭐ | Bug 出现后同日提交修复 PR |
| 积压负担 | ⭐⭐ | 已关闭 PR 与 [stale] 标记项偏多，长期开放 PR 存在 |
| 文档与重构 | ⭐⭐⭐ | deltachat 重构减少 200 行，体现技术债清理意愿 |
| 风险预警 | ⚠️ 中 | P0 Bug 已有修复但未合并，Channel 生命周期管理需系统审视 |

---

*本报告基于公开 GitHub 数据自动生成，仅反映数据快照时的状态。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-09-01** | **数据周期：过去 24 小时**

---

## 1. 今日速览

NanoClaw 在过去 24 小时维持了**较高的维护活跃度**：50 条 Issue 更新中 41 条已关闭（关闭率 82%），34 条 PR 更新中 16 条已合并或关闭。值得注意的是，大批"Merge-forward failed"自动化历史 Issue（多来自 2026-03）被集中清理，与一批围绕仓库管理（CI/标签/Issue 表单/贡献指南）的 PR 同步关闭，显示出核心团队在执行一次**入站治理（intake）改造**。同时，多条面向**生产可用性**的高优先级 Bug（WhatsApp、whatsapp-cloud、计划任务、容器超时）仍处 OPEN 状态，需关注。无新版本发布。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 状态 | 影响范围 |
|---|---|---|---|
| [#3695](https://github.com/nanocoai/nanoclaw/pull/3695) | Slack agents companion skills 移入主干 | 已关闭 | 渠道（Slack） |
| [#3644](https://github.com/nanocoai/nanoclaw/pull/3644) | 新增 Issue 表单（4 类 + 安全联系入口） | 已关闭 | 仓库治理 |
| [#3647](https://github.com/nanocoai/nanoclaw/pull/3647) | 自动应用 `area/*`、`kind/*` 标签 | 已关闭 | 仓库治理 |
| [#3648](https://github.com/nanocoai/nanoclaw/pull/3648) | PR 模板 v2 + 标签解析 | 已关闭 | 仓库治理 |
| [#3650](https://github.com/nanocoai/nanoclaw/pull/3650) | 自动收集 PR 中的 `release-note` 块生成 changelog 草稿 | 已关闭 | 发布流程 |
| [#3651](https://github.com/nanocoai/nanoclaw/pull/3651) | CONTRIBUTING.md 补充 Issue 入站文档 | 已关闭 | 文档 |
| [#3657](https://github.com/nanocoai/nanoclaw/pull/3657) | CI-04 仅报告模板合规性状态 | 已关闭 | CI |

**整体判断**：今日推进最显著的方向是**仓库治理与入站流程**——从 Issue 表单、自动标签、PR 模板到 release-note 收割，已经形成一条较完整的"贡献者→标签→CI→changelog"管道。这是一次**底层基建升级**，不直接面向终端用户，但会让后续迭代更可追溯。渠道侧唯一落地进展是 Slack 配套技能合并到主干。

---

## 4. 社区热点（评论/讨论最活跃）

| 排名 | 条目 | 类型 | 评论 | 状态 |
|---|---|---|---|---|
| 1 | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) — WhatsApp `engage_mode=mention` 仅识别补全气泡，纯文本 `@name` 不触发 | Bug | 1 | OPEN |
| 2 | [#892](https://github.com/nanocoai/nanoclaw/issues/892) / [#893](https://github.com/nanocoai/nanoclaw/issues/893) — `skill/compact`、`skill/ollama-tool` 等技能分支合入失败 | Bug | 1 | 已关闭（清理） |
| 3 | [#3694](https://github.com/nanocoai/nanoclaw/issues/3694) — Slack skills 复制清单缺失 `slack-raw-text.ts`，lint 与容器测试失败 | Bug | 0（今日新建） | 已关闭 |
| 4 | [#2868](https://github.com/nanocoai/nanoclaw/issues/2868) — `/update-skills` 对已安装渠道静默跳过代码/依赖刷新 | Bug | 1 | 已关闭 |

**诉求分析**：当前最受关注的痛点集中在**渠道交互可靠性**和**技能升级路径**：WhatsApp/Slack 触发逻辑不稳健、`/update-skills` 升级不生效——这与刚合入主干的核心团队"intake 改造"形成对比，说明仓库治理走在前面，**用户侧真实故障反而积压较多**，是后续需关注的反差。

---

## 5. Bug 与稳定性

### 高优先级（OPEN）
| Issue | 描述 | 是否有对应 Fix PR |
|---|---|---|
| [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | WhatsApp `mention` 模式不识别非补全文本，`accumulate` 策略掩盖失败 | 暂无 |
| [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) | `hasIdenticalSend` 误把前一次触发当重复，导致重复提醒仅首次送达 | 暂无 |
| [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | whatsapp-cloud 升级后 `messaging_groups` 行被孤立（#2913 引入 instance 重命名，无迁移） | 暂无 |
| [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) | 硬编码 `ABSOLUTE_CEILING_MS=30min` 在本地慢模型上冷杀长 turn，无配置入口 | ✅ [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) 待合并 |

### 中优先级（OPEN）
| Issue | 描述 | 是否有对应 Fix PR |
|---|---|---|
| [#3248](https://github.com/nanocoai/nanoclaw/issues/3248) | `setup.sh` "Node 缺失或过旧"分支无法处理过旧情况 | 暂无 |
| [#2464](https://github.com/nanocoai/nanoclaw/issues/2464) | `ncl` 在 group scope 下静默覆盖显式传入的 `--agent-group-id` | 暂无 |

### 低优先级（OPEN）
| Issue | 描述 | 是否有对应 Fix PR |
|---|---|---|
| [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) | `send_card` 文档承诺 callback 按钮但桥接自 #2265 起丢弃 | ✅ [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) 待合并 |
| [#2463](https://github.com/nanocoai/nanoclaw/issues/2463) | 文档将 group scope 行为描述为"auto-filled"，未说明被锁定 | 暂无 |

**稳定性总评**：仓库侧合入了大量自动化清理（41 条关闭），但**真正影响线上使用的高优 Bug 全部仍处 OPEN**，且仅 [#3643](https://github.com/nanocoai/nanoclaw/issues/3643) / [#3426](https://github.com/nanocoai/nanoclaw/issues/3426) 已有对应 Fix PR 待合入。WhatsApp 渠道相关的高优问题（#3085、#3105）尚无 PR 跟进。

---

## 6. 功能请求与路线图信号

| PR | 内容 | 状态 | 路线图信号 |
|---|---|---|---|
| [#3693](https://github.com/nanocoai/nanoclaw/pull/3693) | Signal 出站消息在断连时排队；语音音频免转写直传 | OPEN | 增强 Signal adapter 韧性，可能进入下个版本 |
| [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | 新增 `/add-voice-transcription-free-whisper`（本地 Whisper + whisper.cpp） | OPEN（自 2026-05-07 长期未合并） | 长期积压的"本地/免费语音转写"能力 |
| [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | 新增 `/add-paws4claws`（AWS 凭据代理） | OPEN（自 2026-05-28 长期未合并） | 长期积压的云凭据治理能力 |
| [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) / [#3584](https://github.com/nanocoai/nanoclaw/pull/3584) / [#3585](https://github.com/nanocoai/nanoclaw/pull/3585) / [#3586](https://github.com/nanocoai/nanoclaw/pull/3586) / [#3588](https://github.com/nanocoai/nanoclaw/pull/3588) / [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | providers 重构：声明并实现 runtime / codex / host / opencode / setup 合约 | OPEN（zvi-fried 系列） | 关键架构演进，决定 provider 接入边界 |

**判断**：providers 合约重构是当前**最重要的路线图信号**——一旦合入，所有本地/云模型适配将沿统一接口收敛；whisper / paws4claws 两个技能则属于"扩展技能生态"的长期备选，受 review 资源限制被搁置。

---

## 7. 用户反馈摘要

从 Issues 与 PR 评论中提炼的真实痛点：

- **触发语义不一致**（#3085）：WhatsApp 用户期望"输入 @名字就触发"，但当前只识别补全气泡，且 `accumulate` 策略把失败消息存为无关数据，反而掩盖问题——典型的"看起来工作了但其实没工作"反模式。
- **升级路径形同虚设**（#2868、#3105）：`/update-skills` 在已安装渠道上**静默跳过**代码/依赖刷新；whatsapp-cloud 升级后 `messaging_groups` 行被孤立但无迁移——结果都是"用户按文档操作但配置没生效"。
- **本地模型被超时杀死**（#3643）：30 分钟硬编码上限 + 心跳仅在 provider 流式事件触发，使慢于托管推理的本地后端**未完成就被判死亡**，且没有配置入口。意味着"接入本地模型"目前是脆弱体验。
- **按钮 / 回调丢失**（#3426）：`send_card` 文档承诺 callback 按钮，但桥接端丢弃无 `url` 的 action，agent 误以为平台不支持而把锅甩给用户。
- **CLI 静默覆盖**（#2464）：运维在 group scope 下传入的 `--agent-group-id` 被默默覆盖，无任何提示——可观测性失败。
- **容器超时无配置**（#3643）：用户没有"我接受更长 turn"的选项，必须改源码。
- **Slack 配套技能安装即坏**（#3694）：在干净 v2.3.0 上按文档 `/add-slack` 会留下 lint 与测试失败，技能处于"装上但跑不动"状态。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 条目 | 创建时间 | 备注 |
|---|---|---|---|
| 长期 OPEN Bug | [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) | 2026-07-18 | 高优，渠道核心交互，**无 PR 跟进** |
| 长期 OPEN Bug | [#2997](https://github.com/nanocoai/nanoclaw/issues/2997) | 2026-07-09 | 高优，计划任务核心功能 |
| 长期 OPEN Bug | [#3001](https://github.com/nanocoai/nanoclaw/issues/3001) | 2026-07-10 | 旧 group 的技能被冻结 |
| 长期 OPEN Bug | [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) | 2026-07-20 | 高优，whatsapp-cloud 升级破坏现有安装 |
| 长期 OPEN PR | [#2317](https://github.com/nanocoai/nanoclaw/pull/2317) | 2026-05-07 | 本地语音转写技能，已悬置 4 个月 |
| 长期 OPEN PR | [#2634](https://github.com/nanocoai/nanoclaw/pull/2634) | 2026-05-28 | AWS 凭据代理技能，已悬置 3 个月 |
| 待合并 Fix | [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) | 2026-08-29 | 解决 #3643，建议优先 review |
| 待合并 Fix | [#3427](https://github.com/nanocoai/nanoclaw/pull/3427) | 2026-08-21 | 解决 #3426，建议优先 review |
| 待合并架构 PR | [#3581](https://github.com/nanocoai/nanoclaw/pull/3581) ~ [#3591](https://github.com/nanocoai/nanoclaw/pull/3591) | 2026-08-27 | providers 合约重构 6 件套，需统一节奏 |

**维护者建议**：
1. 优先合入 [#3646](https://github.com/nanocoai/nanoclaw/pull/3646) 与 [#3427](https://github.com/nanocoai/nanoclaw/pull/3427)，分别解锁两条高/低优生产故障。
2. providers 合约 6 件套（zvi-fried 系列）建议由核心维护者协调合并顺序，避免半套状态长期存在。
3. WhatsApp 渠道的 [#3085](https://github.com/nanocoai/nanoclaw/issues/3085) / [#3105](https://github.com/nanocoai/nanoclaw/issues/3105) 已开放超 6 周，建议公开指派 owner。
4. 长期悬置的技能 PR（#2317、#2634）需明确是"需要返工"还是"被路线图搁置"，以减少贡献者等待成本。

---

*报告基于 nanocoai/nanoclaw 在 2026-09-01 的 Issues / PRs 公开数据生成。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报 · 2026-09-01

---

## 1. 今日速览

NullClaw 项目今日处于**极低活跃度**状态。过去 24 小时内 Issues 更新数为 0，PR 更新仅 1 条且尚未合并，无新版本发布。整体来看，项目处于"静默维护期"，唯一动态是 Dependabot 提交的 Docker 基础镜像依赖升级 PR，反映出自动化维护机制正常运行，但社区互动与功能开发几乎停滞。建议关注者留意该 PR 是否能在近期内被维护者审阅合并。

---

## 2. 版本发布

**无新版本发布。** 项目自上次发布以来暂无新 Release。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码层面无实质性推进。

仅有一条待处理的依赖更新 PR：

- **PR [#956](https://github.com/nullclaw/nullclaw/pull/956)** — `ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group`
  - 作者：dependabot[bot]
  - 状态：OPEN（等待合并）
  - 创建时间：2026-06-15（约 2.5 个月前）
  - 最后更新：2026-08-31
  - 内容：将 Docker 镜像中的 `alpine` 基础镜像从 3.23 升级至 3.24
  - 该 PR 自创建至今已超过 2 个月未合并，属于**积压依赖项**，需维护者审阅。

**项目整体推进度：⚠️ 停滞** — 无功能性代码改动，仅依赖维护待审。

---

## 4. 社区热点

今日**无任何 Issues 或 PR 收到评论或反应**，社区互动为零。

- 无活跃讨论帖
- 无高赞内容
- 无新的 Issue 被开启

社区热度指标全部为 0，表明当前阶段缺乏开发者与用户的实质参与。建议维护者主动在 Discord、Discussion 区或社交渠道发起话题，重新激活社区。

---

## 5. Bug 与稳定性

今日**无任何 Bug 报告、崩溃或回归问题**被提交。

由于无 Issues 更新，无法评估当前是否存在未报告的稳定性问题。建议关注者查阅历史未解决 Issues 以判断项目健康度。

---

## 6. 功能请求与路线图信号

今日**无新功能请求提交**。

从仅有的待处理 PR [#956](https://github.com/nullclaw/nullclaw/pull/956) 来看，项目当前的关注点集中在**基础设施依赖更新**而非新功能开发。若有用户希望推动新功能，建议直接在 Issue 中提出，以建立路线图输入通道。

---

## 7. 用户反馈摘要

今日**无任何 Issues 评论**，无法提炼用户痛点或使用场景。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建时间 | 等待天数 | 链接 |
|------|------|------|----------|----------|------|
| #956 | PR | ci(deps): bump alpine from 3.23 to 3.24 | 2026-06-15 | **78 天** | [查看](https://github.com/nullclaw/nullclaw/pull/956) |

**风险提示：**
- PR [#956](https://github.com/nullclaw/nullclaw/pull/956) 已积压 78 天，仍未合并。虽然是依赖升级类自动化 PR，但长时间不合并会导致：
  1. 与 main 分支产生更多冲突风险
  2. 错过上游安全补丁（alpine 3.24 通常包含 CVE 修复）
  3. 后续 Dependabot 提交新 PR 时进一步增加审阅负担

**建议：** 维护者应优先处理此 PR 或配置 Dependabot 自动合并策略（`automerge`），避免依赖更新类 PR 长期积压。

---

## 📊 项目健康度仪表盘

| 指标 | 今日数值 | 状态 |
|------|----------|------|
| Issues 更新 | 0 | ⚪ 静默 |
| PR 合并数 | 0 | 🔴 无推进 |
| 新版本发布 | 0 | ⚪ 静默 |
| 社区评论 | 0 | ⚪ 静默 |
| 待处理积压 | 1 项（78 天） | 🟡 需关注 |
| 自动化维护 | ✅ 正常 | 🟢 |

**综合评估：** 🟡 **低活跃度，但基础设施运转正常。** 项目当前缺少实质性开发活动与社区互动，建议维护者主动检视积压 PR 并考虑是否需要发起新一轮的社区动员。

---

*报告生成时间：2026-09-01 | 数据来源：GitHub REST API | 报告基于过去 24 小时窗口*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-01

> 数据来源：github.com/nearai/ironclaw ｜ 统计窗口：过去 24 小时

---

## 1. 今日速览

IronClaw 今日呈现 **"高活跃、低发版"** 的典型工程迭代日特征。过去 24 小时共有 **14 条 Issues 更新** 与 **20 条 PR 更新**，其中 Issues 新开/活跃 11 条、关闭 3 条；PR 待合并 15 条、已合并/关闭 5 条。**当日无版本发布**，但工程进展主要集中在三条主线：（1）WebUI 设计系统五大阶段的 Epic 体系已基本完成重新拆分（Phase 1 关闭，2-3 与 4-5 拆分到位）；（2）MCP 工具发现/调用链路上集中爆发多个 P0/P1 缺陷，已对应出现 3 个修复 PR；（3）Agent Loop 终止条件、CI 覆盖稳定性、依赖更新等基础设施类工作全面铺开。整体而言项目处于 **持续推进但稳定性承压** 的状态。

---

## 2. 版本发布

🔕 **无新版本发布。** 当前主干在前一版本（v1.4.0 候选区）上叠加了大量未合并 PR，预计下一正式版将随 Epic #7781 phases 2-3 的合并而发布。

---

## 3. 项目进展

过去 24 小时内共有 5 条重要 PR 进入已合并/关闭状态，反映出主干完成了一轮"清理 + 修复"的迭代：

| PR | 状态 | 关键意义 |
|---|---|---|
| [#7977](https://github.com/nearai/ironclaw/pull/7977) **fix(loop) — 终止条件回归** | CLOSED（XL） | 修复 PR #7531 删除 digest 终止器后留下的回归。生产环境有 run 跑了 70 分钟、593 次工具调用也无法退出。该 PR 引入"主导输出重复"终止器 + 交互式 wall clock 上限，直接对应 [#7892](https://github.com/nearai/ironclaw/issues/7892)。 |
| [#7992](https://github.com/nearai/ironclaw/pull/7992) **ci: unify bounded integration execution** | CLOSED（XL） | 将所有入库集成的 PR 与合并队列目标统一到一个 `cargo nextest run` 中，以 4 并发执行。删除二层 shell 投影，效率与可观察性同步提升。 |
| [#7995](https://github.com/nearai/ironclaw/pull/7995) **fix(ci): stabilize main branch coverage** | CLOSED（XL） | 解决过期 `approval_required` Inbox 通知、Railway 沙箱网络抖动，新增回归用例。配合 [#8002](https://github.com/nearai/ironclaw/issues/8002)（同主题 issue 已关闭），主线 CI 已恢复绿色。 |
| [#7993](https://github.com/nearai/ironclaw/pull/7993) **deps: everything-else 16 项升级** | CLOSED（L，被 #8003 取代） | 被同主题的 17 项升级 [#8003](https://github.com/nearai/ironclaw/pull/8003) 接替，未实质合并。 |
| [#8000](https://github.com/nearai/ironclaw/pull/8000) **feat(webui): repaint `--v2-*` 至 Gemini 调色板** | CLOSED（M，被 #8011 取代） | 改由新 PR [#8011](https://github.com/nearai/ironclaw/pull/8011) 接管，整合至 Epic #7781 Phase 3 主分支而非 Storybook 分支。 |

**整体进展判断**：完成 = 1 处 agent loop 关键回归修复 + 1 套 CI 整合 + 多项依赖前置；重新规划 = Epic #7038 Phase 1 关闭并转交 [#7781](https://github.com/nearai/ironclaw/issues/7781)，[#8000](https://github.com/nearai/ironclaw/pull/8000) 由 [#8011](https://github.com/nearai/ironclaw/pull/8011) 取代。**净收益显著，没有性能或安全回退。**

---

## 4. 社区热点

按评论数与最近活跃度排序：

1. **[#7038 Epic: Design System Phase 1](https://github.com/nearai/ironclaw/issues/7038)**（CLOSED，3 评论）— 今日最热议题，本身已完成使命关闭。讨论焦点集中在 **Epic 边界重切**：Phase 1 留在此 issue，Phase 2-3 转入 [#7781](https://github.com/nearai/ironclaw/issues/7781)，Phase 4-5 转入 [#7782](https://github.com/nearai/ironclaw/issues/7782)。反映出社区对 WebUI 设计系统五大阶段所有权与可治理性的强烈关注。
2. **[#7781 Epic: Design System Phases 2-3](https://github.com/nearai/ironclaw/issues/7781)**（OPEN，2 评论，今日更新）— 当前 WebUI 主题色 + DESIGN.md 治理 + Theme Reskin 的统一入口。关联 3 条 PR：[#7994](https://github.com/nearai/ironclaw/pull/7994)（DESIGN.md 治理 + Storybook 准则）、[#7831](https://github.com/nearai/ironclaw/pull/7831)（Chromatic 预览轨道，rescoped 后仅留 token 以外的 chrom 化）、[#8011](https://github.com/nearai/ironclaw/pull/8011)（M3 reskin），并提供 **预览专用** PR [#8005](https://github.com/nearai/ironclaw/pull/8005) 用于集成评审。
3. **[#7042](https://github.com/nearai/ironclaw/issues/7042)**（OPEN，2 评论）+ **[#7994](https://github.com/nearai/ironclaw/pull/7994)** — 配套的"DESIGN.md 治理与准则"工作单元，是 Phase 2 的实体成果。
4. **[#8007 Progressive reply publication follow-ups](https://github.com/nearai/ironclaw/issues/8007)**（OPEN，0 评论）— 新开跟踪问题，记录渐进式回复发布的 5 个 `arch-exempt` 豁免清单。每消除一个豁免需要配套重构与回归测试，体现 **架构债清理节奏**。
5. **[#8004 Daily ironclaw failure taxonomy — 2026-08-31](https://github.com/nearai/ironclaw/issues/8004)**（OPEN）— 例行每日失败分类报告，详

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-09-01

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) · 统计窗口：过去 24 小时

---

## 1. 今日速览

LobsterAI 今日处于**典型维护型工作日状态**：无新版本发布，仓库以依赖升级和存量 Issue/PR 收敛为主旋律。过去 24 小时共有 **11 条 Issues 更新**（5 条仍开放、6 条关闭）与 **27 条 PR 更新**（15 条待合并、12 条已关闭），PR 活跃度明显高于 Issue，呈现"依赖批量更新 + 个别功能/安全修复"的推进模式。最值得关注的是 **#2585 已针对今日新增 Bug #2577 提交修复 PR**，体现了较快的 Bug-to-PR 闭环；同时安全相关 PR **#908（MCP 命令注入校验）** 仍处于 stale 开放状态，需关注。

---

## 2. 版本发布

**无新版本发布。**

建议关注合并中的依赖批量升级（mermaid 11.17.x、vite 8.2.x、@vitejs/plugin-react 6.1.x、better-sqlite3 13.0.x、trufflehog 3.97.x 等），下一版本可能伴随工程栈较大幅度更新。

---

## 3. 项目进展

### 今日已合并/关闭的重要 PR（精选）

| PR | 标题 | 意义 |
|---|---|---|
| [#2588](https://github.com/netease-youdao/LobsterAI/pull/2588) | Liuzhq/user guide | 渲染层/主进程/Cowork 三端联动，新增用户指南 —— **面向终端用户文档能力补齐** |
| [#2462](https://github.com/netease-youdao/LobsterAI/pull/2462) | bump mermaid 10.9.8 → 11.16.1 | 升级图表渲染依赖，修复潜在兼容性 |
| [#2465](https://github.com/netease-youdao/LobsterAI/pull/2465) | bump vite 5.4.21 → 8.2.1 | 构建工具大版本升级 |
| [#2463](https://github.com/netease-youdao/LobsterAI/pull/2463) | bump @vitejs/plugin-react 4.7.0 → 6.0.5 | React 插件与 vite 8 配套升级 |
| [#2458](https://github.com/netease-youdao/LobsterAI/pull/2458) | bump @types/react-dom 18.3.7 → 19.2.4 | 跟进 React 19 类型定义 |
| [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164), [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167), [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) | trufflehog / actions/stale / actions/checkout 旧版升级 | CI 安全与流程工具链更新 |

> 注：多数依赖升级 PR 在关闭后又以**更新的版本号被 Reopen 重新提交**（如 vite 8.2.1 → 8.2.2、mermaid 11.16.1 → 11.17.2、checkout 4→6 之后又有 4→7）。这一"逐版本紧跟"模式对维护者精力消耗较大，建议评估是否合并为周度批量 PR。

### 整体推进度
- **安全层面**：#908 (MCP stdio 命令注入) 仍未合并 —— 是今日最关键的**阻塞性安全债**。
- **功能层面**：DSH 模型 reasoning-effort 元数据同步（#2585）正在跟进，关联 Issue #2577。
- **生态层面**：构建/CI/类型/图表/SQLite 等多类依赖完成或推进跨大版本升级。

---

## 4. 社区热点

按评论数与互动频次排序，今日值得运营侧关注的条目：

1. **[#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) "plan mode drains 200 credits !?"**（新增 09-01，0 评论）
   - 用户原文：*"you guys don't expect a repeat customer!"* —— 强烈的客户流失预警，**涉及计费/积分争议**，需官方快速定性回应。

2. **[#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) [Bug] DSH 工作台无法更改 LobsterAI 提供模型的思考强度**（8-31 新增，1 评论）
   - 状态 OPEN，已有对应修复 PR [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585)。属于"实验功能 + 元数据同步"导致的体验缺失，**修复路径已明确**。

3. **[#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) 期望增加基于 md 的工作流，让 main agent 可调度其他 agent**（已 stale 关闭，2 评论）
   - 诉求方向：构建"Agent 间协同编排 + memory_search/agents_list 工具暴露"，反映用户对**多 Agent 协作**的强烈需求。这一诉求与 #2585 同属"AI 智能体框架能力边界"主题，可纳入中长期路线图。

4. **[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) ollama 本地模型（qwen3/gemma4）无法使用**（已 stale 关闭，2 评论）
   - 反映**本地模型接入兼容性**为长期痛点，与同类 issue #1662（除 SSE 外 MCP 不可用）、#1671（md→word SSE finish:full）共享"非 SSE 协议栈兼容性"根因。

**诉求归纳**：今日社区讨论集中在三块 —— **计费透明度、模型/工具元数据同步、本地/非标协议栈兼容**。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#2589](https://github.com/netease-youdao/LobsterAI/issues/2589) | plan mode 单次扣 200 credits，存在积分/计费异常 | ❌ 无 |
| 🟠 中 | [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) | LobsterAI 同步至 DSH 的模型缺 reasoning-effort 控件 | ✅ [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585) |
| 🟠 中 | [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | 退出登录并安装新版本仍弹出 "Lobster AI 无法关闭" | ❌ 无 |
| 🟡 低 | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | ollama 本地模型（qwen3、gemma4）不可用 | ❌ 旧 stale 已关 |
| 🟡 低 | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md→word 转换中途 SSE finish reason: full | ❌ 旧 stale 已关 |

**安全相关隐患（非用户报告）**：[#908](https://github.com/netease-youdao/LobsterAI/pull/908) 修复 MCP `stdio command` 字段缺失校验导致的命令注入风险，自 2026-03 开放至今日仍处于 stale 状态，**建议优先合并**。

---

## 6. 功能请求与路线图信号

用户呼声集中体现在以下建议，括号内为是否能与已有 PR 形成闭环：

- **多 Agent 编排协议（基于 md 工作流）** —— [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)
  - 短期内无对应 PR，建议纳入路线图；与"Agent 平台化"演进方向一致。
- **CoworkPermissionModal 键盘快捷键（Enter/Escape）** —— [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117)（stale 1 个月）
  - 改善键盘流编码体验，零或低风险 PR。**容易在下一版本纳入**。
- **会话 error 状态一键 Retry** —— [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120)（stale 1 个月）
  - 实现成本低、用户价值高（恢复路径补齐），**极有可能进入下一版本**。
- **DSH 模型 reasoning-effort 控件** —— [#2577](https://github.com/netease-youdao/LobsterAI/issues/2577) + [#2585](https://github.com/netease-youdao/LobsterAI/pull/2585)
  - **几乎确定随 #2585 一起在下一版本发布**，是今日最有把握落地的功能请求。

---

## 7. 用户反馈摘要

提炼自近 24 小时 Issue 文本：

- **客户留存风险信号最强**：`#2589` 用户直接表述 *"you guys don't expect a repeat customer!"*，对 plan mode 扣费 200 credits 表达强烈不满 —— 建议运营/产品快速核查计费逻辑与前端提示。
- **实验功能一致性缺失**：`#2577` 暴露出"内置工作台 ↔ 用户配置 provider"在推理强度等控件上的不对称，体感上削弱"实验功能"价值。
- **安装/退出流程体验欠佳**：`#1124` 显示 "退出登录且应用关闭后"仍触发"Lobster AI 无法关闭"提示，疑为**进程残留/锁文件检测误报**。
- **本地模型与异构 MCP 兼容性长期未解**：`#1635`（ollama）、`#1662`（非 SSE MCP）、`#1671`（md→word SSE 超限）共同指向同一根因 —— **非 SSE 协议栈下的稳定性**。
- **正面信号**：`#2588`（用户指南 PR）合并表明团队投入了一线用户教育成本，预期会带来上手体验提升。

---

## 8. 待处理积压（提醒维护者）

| 链接 | 类型 | 创建时间 | 状态 | 提醒原因 |
|---|---|---|---|---|
| [#908](https://github.com/netease-youdao/LobsterAI/pull/908) | PR（安全修复） | 2026-03-26 | OPEN · stale 5 个月+ | **MCP stdio 命令注入漏洞修复**，高优先级 |
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR（依赖批量升级） | 2026-04-02 | OPEN · 4 个多月 | electron 40→44 大跨度升级仍未决断 |
| [#1117](https://github.com/netease-youdao/LobsterAI/issues/1117) | Issue | 2026-03-31 | OPEN · stale | 键盘快捷键需求，实施成本低 |
| [#1120](https://github.com/netease-youdao/LobsterAI/issues/1120) | Issue | 2026-03-31 | OPEN · stale | 一键 Retry，强烈 UX 改进 |
| [#1124](https://github.com/netease-youdao/LobsterAI/issues/1124) | Issue | 2026-03-31 | OPEN · stale | 安装器进程检测问题 |

**维护建议**：
1. 将 #2585 与 #2577 一同闭环，作为下一版本 changelog 的"亮点条目"。
2. **优先合并 #908**，安全债不可拖延。
3. 集中处理 #1117 / #1120 这类低成本高 UX 收益的 stale Issue，提升社区观感。
4. 针对 #2589 计费投诉建立官方回复通道，主动公示积分计算口径。

---

> *本报告基于 GitHub 公开数据自动生成，所有链接均指向 netease-youdao/LobsterAI 仓库对应 Issue/PR。数据维度：Issues 11 条、PRs 27 条（按评论数取 Top 20）、Releases 0 条。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-09-01**

---

## 1. 今日速览

Moltis 项目今日继续保持高频迭代节奏，单日内完成 **2 个版本发布（20260831.01、20260830.01）**、**3 个 PR 合并/关闭**以及 **1 个 Bug Issue 闭环**。社区端，Issue #1118（K8s 原生沙箱后端）持续获得讨论热度（3 条评论、1 👍），显示容器化/沙箱化执行仍是当前最受关注的演进方向。整体健康度良好：Bug 修复闭环周期短（Issue #1246 创建于 8/28，8/31 即随关联 PR 关闭），安全与稳定性相关 PR 优先合并，供应链风险治理被纳入网关层流程。

---

## 2. 版本发布

| 版本号 | 发布时间戳 | 备注 |
|---|---|---|
| **20260831.01** | 2026-08-31 | 今日主流水版本 |
| **20260830.01** | 2026-08-30 | 维护性发布 |

⚠️ **说明**：本次数据未提供详细 changelog/CHANGELOG 条目，无法精确逐条列出更新内容。结合今日合并的 PR 影响范围（详见第 3 节），可推断 20260831.01 主要合入：
- `fix(exec)`：执行引擎对 `node: null` 显式选择的处理（#1248）
- `fix(gateway)`：固定 Snyk Agent Scan 至 0.5.17 并移除 mcp-scan fallback（#1221）
- `fix(web)`：沙箱镜像/Package 请求校验（#1222）

**迁移注意事项**：升级前请确认本地已安装 `uvx/uv`（PR #1221 强制依赖），否则 `skill security scan` 功能可能不可用。Docker 部署场景需关注 PR #1249（尚未合并）所解决的认证分级变化对 `auth_disabled` 行为的影响。

---

## 3. 项目进展

今日有 **3 个 PR 进入已合并/已关闭状态**，均聚焦于「安全性加固」与「执行确定性」两大主题：

### ✅ 已合并/关闭的关键 PR

- **[PR #1248](https://github.com/moltis-org/moltis/pull/1248)** — `fix(exec): honor explicit null node selection`
  修复 `ExecTool` 对 `node: null` 的错误转换：显式 null 现在被正确识别为「使用本地执行路径」，并保留配置的/provider 选择的默认值。**同时附带回归测试**，覆盖「已连接 node provider + 已配置 default」的复合场景。该 PR 极有可能与 [Issue #1246](https://github.com/moltis-org/moltis/issues/1246)（添加节点后无法在沙箱中运行）同源修复，标志此 Bug 已闭环。

- **[PR #1221](https://github.com/moltis-org/moltis/pull/1221)** — `fix(gateway): pin Snyk Agent Scan`
  网关层技能安全扫描固定到 **Snyk Agent Scan 0.5.17**（通过 uvx 锁定版本），并移除 mcp-scan fallback、强制依赖 `uv`。属于**供应链安全硬化**措施，遵循「pin dependencies」最佳实践。

- **[PR #1222](https://github.com/moltis-org/moltis/pull/1222)** — `fix(web): validate sandbox image requests`
  在容器/Dockerfile 使用前对镜像引用与 Package 名称进行校验，并将包检查与镜像构建权限**收窄至 operator 管理员**，同时为 password/passkey/可信任 loopback 身份保留完整管理访问权限。该 PR 大幅提升了攻击面管理粒度。

### 📌 当前推进评估

今日合入的 PR 均属于「小步快跑、安全优先」的迭代策略，对**用户可见的功能推进较小**，但显著增强了系统的**鲁棒性与威胁模型**。从 PR 类型分布看（3/4 为 `fix:`），项目正处在 Bug 收敛与安全加固周期，路径正确。

---

## 4. 社区热点

| 排名 | 主题 | 互动量 | 状态 |
|---|---|---|---|
| 🥇 | [Issue #1118](https://github.com/moltis-org/moltis/issues/1118) — K8s 原生沙箱后端 + runtimeClassName | 3 评论 / 1 👍 | OPEN（已开 80 天） |
| 🥈 | [PR #1249](https://github.com/moltis-org/moltis/pull/1249) — Docker loopback-only 部署的本机化判定 | 新开 | OPEN |
| 🥉 | [Issue #1246](https://github.com/moltis-org/moltis/issues/1246) — 添加节点后无法在沙箱中运行 | 0 评论 | CLOSED |

### 背景诉求分析

- **沙箱执行的多样化**：Issue #1118 自 6 月开起热度不减，社区核心诉求是希望 Moltis 智能体能在**生产级隔离环境**中执行不可信 LLM 生成代码，Kata/gVisor 等 OCI runtime 的接入意味着用户希望复用现有 K8s 集群安全基线。
- **本地开发的认证体验**：PR #1249 反映出 Docker bridge 网络下的 loopback 误判导致 dev 体验退化，这是容器化部署用户的典型痛点。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | 是否已有 fix |
|---|---|---|---|
| 🟡 中 | [Issue #1246](https://github.com/moltis-org/moltis/issues/1246)：「添加节点后无法在沙箱中运行」 | CLOSED 2026-08-31 | ✅ [PR #1248](https://github.com/moltis-org/moltis/pull/1248) 已合入 |
| 🟢 低 | [PR #1249](https://github.com/moltis-org/moltis/pull/1249) 暴露的隐藏问题：Docker 部署下 `is_local_connection()` 将 bridge 地址误判为非本机，可能导致 Tier 2 便利功能（包括 `auth_disabled`）被错误禁用 | OPEN | 🔧 已提交 PR 修复，待合并 |

**结论**：当日 Bug 报告闭环及时（3 天），无未解决的高危问题。建议维护者关注 PR #1249 的合并节奏，避免它在 release 窗口内造成认证行为漂移。

---

## 6. 功能请求与路线图信号

### 显式 Feature Request
- [Issue #1118](https://github.com/moltis-org/moltis/issues/1118)：新增 `kubernetes` 沙箱后端，支持 `runtimeClassName`，以承接 Kata/gVisor 等 microVM/用户态内核运行时。
  - **路线图纳入概率**：🟢 **高**。该 Issue 已存续 80 天仍持续活跃，与 Moltis「agents 执行不可信代码」的核心场景高度契合；且 PR #1222 的合并（沙箱镜像校验）正好是为这类后端铺路。

### 隐式路线图信号
- 沙箱执行链路已建立连续动线：#1222（请求校验）→ #1118（多后端抽象）→ #1248（执行路径选择）。可推测维护者正在将「沙箱」从单一实现升级为**可插拔后端架构**。

---

## 7. 用户反馈摘要

根据公开 Issues 评论样本（数据集中可提取的评论集中于 #1118）：

- **对不可信代码隔离的强烈诉求**：用户在 #1118 评论中明确希望复用现有 K8s 安全基础设施（Kata、gVisor），表明企业级用户对「LLM agent → 真实 shell」链路存在合规顾虑。
- **本地开发 vs 容器化部署体验落差**：PR #1249 揭示 Docker 用户对 loopback 判定边界的困惑——bridge 网络打破了「容器内 = 本机」的直观假设。
- **Bug 报告规范性良好**：Issue #1246 严格按 preflight checklist 提交，表明社区贡献者具备较高的协作素养，反向说明项目的 issue 模板与文档体系运转有效。

---

## 8. 待处理积压

| 项目 | 类型 | 存续时间 | 风险点 |
|---|---|---|---|
| [Issue #1118](https://github.com/moltis-org/moltis/issues/1118) | Feature | 80 天 | 长期 OPEN 但持续活跃，无明确 maintainer 认领（Assignee 缺失） |
| [PR #1249](https://github.com/moltis-org/moltis/pull/1249) | Fix | < 1 天 | 关联 [Issue #1112](https://github.com/moltis-org/moltis/issues/1112) 的认证边界，需保证 review 优先级 |

> 📣 **维护者提醒**：Issue #1118 已 80 天 open，仍是社区讨论度最高的诉求，建议在下次 sprint planning 中显式标注 owner 或路线图里程碑，以维持贡献者信心。

---

*报告生成时间：2026-09-01 · 数据来源：github.com/moltis-org/moltis*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-01

> 数据来源：GitHub `agentscope-ai/QwenPaw`（对外品牌：CoPaw）仓库过去 24 小时活动
> 报告生成时间：2026-09-01

---

## 1. 今日速览

CoPaw 项目处于 **v2.2.0 beta 发布冲刺阶段**，社区活跃度显著高于常态。过去 24 小时共有 **35 条 Issues 更新（23 条活跃 / 12 条关闭）** 与 **42 条 PR 更新（26 条待合并 / 16 条合并关闭）**，并连续发布 **v2.2.0-beta.4 与 v2.2.0-beta.5** 两个版本。讨论焦点集中在 2.2.0 新引入的 **QwenPaw Hub 多租户版**（[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318)）以及 beta 版本中暴露的多项稳定性回归（工具调用、SSE 流式输出、Embedding 索引等）。整体健康度评估：**活跃度极高，但 beta 阶段的 bug 密度需要关注**。

---

## 2. 版本发布

### 🚀 v2.2.0-beta.5（最新）
- [Release 链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.5)
- **核心变更**：
  - `channels`：合同检查的跨平台化与完备化（[#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267)）
  - `memory`：embedding 重建流程改为显式 + scoped，避免误触发全量重建（[#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133)）
- **已知问题**：[#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) 报告该版本下 Hub 连接本地 API（`http://127.0.0.1:8088/v1` 及 LAN 地址）失败；[#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) 报告 Windows 桌面端 "Rebuild Memory Index" 返回 500（PyInstaller 打包未包含 `reme-ai` Python 核心）。

### 🚀 v2.2.0-beta.4
- [Release 链接](https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.2.0-beta.4)
- **核心变更**：
  - `context`：超大单行工具结果进行有界裁剪（[#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331)）
  - `agent-stats`：TC-AGT-06 测试用例对齐当前 agent scope（[#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021)）
- **影响**：单行工具结果裁剪属于行为变更，依赖长单行回执的下游解析逻辑可能需要回归验证。

### ⚠️ 迁移/升级注意事项
- beta.5 的 Embedding 重建流程已变为「显式触发」，升级后向量检索默认会因空间变更降级为 BM25，需用户主动重建。
- 自 beta.1 起出现多个 Stream / 上下文丢失类 bug（[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420)、[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)），**生产用户暂不建议升级到 2.2.0 beta 通道**。

---

## 3. 项目进展

今日合并/关闭的关键 PR 推动项目在稳定性、内存系统与打包链路上明显前进：

| PR | 主题 | 影响 |
|---|---|---|
| [#7267](https://github.com/agentscope-ai/QwenPaw/pull/7267) | 渠道合同检查跨平台化 | 修复 Windows 非 UTF-8 默认编码下静态检查器 `UnicodeDecodeError`，覆盖 `SIPChannel` 等被遗漏实现 |
| [#7133](https://github.com/agentscope-ai/QwenPaw/pull/7133) | Embedding reindex 显式化 & scoped | 升级至 `reme-ai 0.4.1.10`，重建前允许撤销配置变更，避免数据风险 |
| [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) | 超大单行工具结果有界化 | 防止单条工具回执压垮上下文窗口 |
| [#7021](https://github.com/agentscope-ai/QwenPaw/pull/7021) | agent-stats 测试对齐 | 提升测试与当前 agent scope 一致性 |
| [#7412](https://github.com/agentscope-ai/QwenPaw/issues/7412) | PawApp SDK 流取消非阻塞化 | 修复 cancelled reader 资源滞留与竞态 |
| [#7438](https://github.com/agentscope-ai/QwenPaw/pull/7438) | 版本号 bump 到 2.2.0b5 | 配套 release 工程 |
| [#7066](https://github.com/agentscope-ai/QwenPaw/pull/7066) | OAuth2 旋转 refresh_token 持久化 | 修复远程 MCP（如 XMind）OAuth 链断裂 |

**整体进展评估**：在内存子系统、渠道合同、SDK 取消语义三条关键路径上完成了实质修复，向 GA 推进了一步；但测试 / CI / 文档配套类 PR 占比较高（[#7452](https://github.com/agentscope-ai/QwenPaw/pull/7452)、[#7451](https://github.com/agentscope-ai/QwenPaw/pull/7451)、[#7435](https://github.com/agentscope-ai/QwenPaw/pull/7455)、[#7440](https://github.com/agentscope-ai/QwenPaw/pull/7440)、[#7433](https://github.com/agentscope-ai/QwenPaw/pull/7433)），功能性用户可见改动相对克制。

---

## 4. 社区热点

### 🔥 最高热度讨论

1. **[#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) — QwenPaw Hub 多租户版接下来做什么？** ⭐ 15 评论 / 👍 2
   维护者 rayrayraykk 发起的路线图讨论帖，明确表示 CoPaw 将从「个人助手」演进为「多租户团队版」。社区诉求集中在：多用户访问、admin 管理的 Skills、计费/配额、与 #2324 等历史请求联动。是 2.2.0 的**战略性主轴**。

2. **[#7298](https://github.com/agentscope-ai/QwenPaw/issues/7298) — Desktop & Docker 套餐携带 OpenSSL 3.0.x TLS，运营商 DPI 握手重置** ⭐ 9 评论（已 CLOSED）
   桌面端与官方 Docker 镜像携带 Python 3.11 时代 OpenSSL 3.0.x，在部分运营商网络下 TLS 握手被 DPI 中断，桌面端无绕过方案。该问题关闭说明已通过 [#7331](https://github.com/agentscope-ai/QwenPaw/pull/7331) 或运行环境升级处置。

3. **[#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) — 2.2.0-beta.1 工具结果丢失 + doom-loop 触发** ⭐ 7 评论
   `write_file` 后同命令被重新派发，工具结果未回流给 agent，触发 doom-loop 保护；同一会话累计出现 5 次卡死。**目前仍 OPEN，无对应修复 PR 提交。**

4. **[#7224](https://github.com/agentscope-ai/QwenPaw/issues/7224) — 如何将 Aider CLI 接入为 agent？** ⭐ 6 评论（已 CLOSED）
   反映社区对「第三方 CLI 工具作为 agent 子调用」的标准接入范式存在认知缺口，与 [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396)（Claude Code 接入路线图）形成共振。

5. **[#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) — Console 流式输出中段重复大块文本** ⭐ 5 评论
   SSE 事件重放路径疑似在 completion 阶段额外 append 整段累积文本，影响所有 2.2.0b3 用户。

6. **[#7377](https://github.com/agentscope-ai/QwenPaw/issues/7377) — Agent Loop 模式配置不持久化** ⭐ 5 评论
   用户修改 Loop 模式后跑一次任务即被重置为默认。

---

## 5. Bug 与稳定性

按严重程度排序（**P0 = 数据丢失/不可用，P1 = 体验严重受损，P2 = 一般体验问题**）：

| 级别 | Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| **P0** | [#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447) | 长上下文下早期记录整体丢失，任务无法继续 | ❌ 无 |
| **P0** | [#7420](https://github.com/agentscope-ai/QwenPaw/issues/7420) | 工具结果丢失 → 触发 doom-loop，会话卡死 | ❌ 无 |
| **P0** | [#7446](https://github.com/agentscope-ai/QwenPaw/issues/7446) | Memory 重建 500（PyInstaller 未打 reme-ai 核心） | ✅ [#7453](https://github.com/agentscope-ai/QwenPaw/pull/7453) 已提 |
| **P1** | [#7417](https://github.com/agentscope-ai/QwenPaw/issues/7417) | Console SSE 重复文本 | ❌ 无 |
| **P1** | [#7445](https://github.com/agentscope-ai/QwenPaw/issues/7445) | Hub 连接本地/LAN 模型失败 | ❌ 无 |
| **P1** | [#7408](https://github.com/agentscope-ai/QwenPaw/issues/7408) | Feishu 通道配置被意外清空，cron 投递 KeyError | ❌ 无 |
| **P1** | [#7397](https://github.com/agentscope-ai/QwenPaw/issues/7397) | Browser SDK 每次调用新建 tab-group | ❌ 无 |
| **P1** | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用阻塞事件循环 118–135s，timeout 失效 | ❌ 无 |
| **P1** | [#6608](https://github.com/agentscope-ai/QwenPaw/issues/6608) | 长 shell 命令绕过 timeout，Feishu 会话阻塞 1.5h | ❌ 无（已存在 1 个月） |
| **P2** | [#7443](https://github.com/agentscope-ai/QwenPaw/issues/7443) | 危险指令安全提示易绕过 | ❌ 无（安全相关，敏感度高） |
| **P2** | [#7431](https://github.com/agentscope-ai/QwenPaw/issues/7431) | Codex harness 后端不流式时返回空响应 | ❌ 无 |

**修复覆盖率统计**：12 条 P0/P1 中仅有 **1 条**（#7446）有对应 PR 进入修复通道（#7453），其余 11 条仍处于「报告/复现」阶段，**维护团队需重点关注**。

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 关联 PR | 路线图判断 |
|---|---|---|---|
| QwenPaw Hub 多租户功能矩阵 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 已在 2.2.0 中作为核心战略 | **确定纳入 2.2.0** |
| Claude Code 第三方 agent harness | [#7396](https://github.com/agentscope-ai/QwenPaw/issues/7396) | harness registry 中占位 | 2.2.0 GA 前后大概率 |
| `/btw` 旁路提问命令 | [#7398](https://github.com/agentscope-ai/QwenPaw/issues/7398) | — | 借鉴 Claude Code，可能性高 |
| 收起侧边栏时置顶会话图标 | [#7125](https://github.com/agentscope-ai/QwenPaw/issues/7125) | — | UI 小改进，可能性高（已 CLOSED） |
| IM 渠道 tool_call 紧凑展示配置 | [#7436](https://github.com/agentscope-ai/QwenPaw/issues/7436) | — | 中等可能性 |
| 复制助手文本（不含 reasoning） | — | [#7448](https://github.com/agentscope-ai/QwenPaw/pull/7448) | 已实现，待合入 |
| Workspace-scoped Skills preload | — | [#7183](https://github.com/agentscope-ai/QwenPaw/pull/7183) | 设计对标 Claude Code subagents |
| 统一 ReMe 斜杠命令 | — | [#7444](https://github.com/agentscope-ai/QwenPaw/pull/7444) | 把 `/dream`、`/memorize`、`/reme_status` 合并为 `/reme action k=v` |
| Auto Fin 长记忆源 + ReMe 0.4.1.11 | — | [#7441](https://github.com/agentscope-ai/QwenPaw/pull/7441) | 与 Daily Paper 并列的长记忆来源 |
| AgentScopeRuntimeWebUI 1.2.0 适配 | — | [#7382](https://github.com/agentscope-ai/QwenPaw/pull/7382) | 跟进上游 SDK |

**信号研判**：Hub 化、Skills preload、Claude Code harness 是 2.2 GA 三大主线；IM 紧凑显示与 `/btw` 大概率在 2.2.x 早期增量释放。

---

## 7. 用户反馈摘要

### 🎯 真实痛点
- **「长上下文频繁丢失」**（[#7447](https://github.com/agentscope-ai/QwenPaw/issues/7447)）：用户在 1M token 限制下处理 160 页中文 Word 文档时，因卡顿手工压缩多次后，仍发生「昨日中午之前的上下文整体丢失」，严重影响生产场景。
- **「主 agent 不主动调度子 agent」**（[#7450](https://github.com/agentscope-ai/QwenPaw/issues/7450)）：用户必须主动问「进度如何」主 agent 才会查询子任务，反映多 agent 协同的可见性缺失。
- **「Channel 配置文件被异常清空」**（[#7408](https://github.com/agentscope-ai/QwenPaw/issues/740

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报

**报告日期**：2026-09-01
**数据周期**：过去 24 小时（基于 2026-08-31 数据）

---

## 1. 今日速览

ZeptoClaw 今日呈现**安全专题集中爆发**态势：8 条新开/活跃 Issue 中有 7 条由同一外部贡献者 `morler` 提交，议题高度集中在 **safety/auth 域**，涵盖密钥泄露、时序攻击、权限模型、速率限制、WebSocket 凭据传输等多个子方向。PR 端则有一条针对 RustSec 公告的依赖修复被关闭但未合并（`#651` 仍处 OPEN 状态），项目整体活跃度偏高，但**所有 P1-critical 项仍处于打开状态**，需维护者重点关注。

---

## 2. 版本发布

⚠️ 今日无新版本发布。

---

## 3. 项目进展

### 已关闭 PR

- **[#657](https://github.com/qhkm/zeptoclaw/pull/657)** `chore(deps): fix 8 RustSec advisories`（CLOSED，未合并）
  - 提交者：`morler`，意图关闭 `#651`，涵盖 h2 / quick-xml / lopdf / bcrypt / quinn-proto / crossbeam-epoch / anyhow 等 8 个公告修复。
  - **状态异常提示**：该 PR 显示为"已关闭"但**未被合并**，且其目标 Issue `#651` 仍为 OPEN，提示维护者**驳回或留待新版方案重新提交**。意味着依赖安全债在仓库基线上仍未解决。

> 📉 **项目推进评估**：今日净推进接近于零。安全债的关键修复被回退或关闭，需观察维护者是否提供替换方案。

---

## 4. 社区热点

| 排名 | 编号 | 标题 | 状态 | 关注点 |
|---|---|---|---|---|
| 1 | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | chore(ci): restore Clippy and cargo-deny checks | 3 评论 | CI 基线回归 |
| 2 | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | scrub subprocess environments & terminate process trees on timeout | 1 评论 | 子进程安全 |
| 3 | 其余 6 条均为 `morler` 0 评论新开 | — | 新建 | 安全审计专题 |

**诉求分析**：今日热点高度集中在**面板（panel）+ 鉴权（auth）+ 子进程（subprocess）**的安全审计结果上，可视为一次系统性安全扫描。`morler` 的 7 条 Issue 形成了一条完整的安全链路——从密钥落盘权限（#652）→ 日志泄露（#653, #656）→ 认证比较安全（#655, #644）→ 暴力破解防护缺失（#654），**反映出对生产化部署前基础安全姿态的强烈诉求**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 简述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 P1-critical | [#646](https://github.com/qhkm/zeptoclaw/issues/646) | Rust 1.97.1 引入 5 个 Clippy 新告警；cargo-deny 因 quick-xml 0.39.2 / lopdf 0.40.0 漏洞拒绝通过 | ❌ 无 |
| 🔴 P1-critical | [#644](https://github.com/qhkm/zeptoclaw/issues/644) | 子进程继承完整 ZeptoClaw 环境变量，可能泄露无关凭据；超时未杀死进程树 | ❌ 无 |
| 🟠 中-高 | [#656](https://github.com/qhkm/zeptoclaw/issues/656) | `src/cli/panel.rs:221` 将完整 API token 打印到 stdout，落入终端滚动、CI 日志、截图 | ❌ 无 |
| 🟠 中-高 | [#655](https://github.com/qhkm/zeptoclaw/issues/655) | 3 处使用 `==` 比较 bearer token，时序侧信道风险；`auth.rs` 文档注释甚至错误地声称是"constant-time-like" | ❌ 无 |
| 🟠 中 | [#653](https://github.com/qhkm/zeptoclaw/issues/653) | WS upgrade 凭据通过 `?auth=` query 传递 → 反代/访问日志/历史记录多处分发泄露 | ❌ 无 |
| 🟠 中 | [#652](https://github.com/qhkm/zeptoclaw/issues/652) | `config.toml`、`panel.token` 写入时未设 0600，多用户机器可被本地读取 | ❌ 无 |
| 🔵 低-中 | [#651](https://github.com/qhkm/zeptoclaw/issues/651) | 7 个 RustSec 公告未修复 | ⚠️ #657 被关闭未合并 |

> ⚠️ **关键观察**：上述全部 Bug 均**无对应已合并的 Fix PR**，等价于"今日报告的全部安全缺陷仍存在于 main 分支"。

---

## 6. 功能请求与路线图信号

| 编号 | 提议 | 是否可能纳入下一版本 |
|---|---|---|
| [#654](https://github.com/qhkm/zeptoclaw/issues/654) | 为 `POST /api/auth/login` 增加滑动窗口速率限制，复用现有 `SlidingWindowRateLimiter`（仅用于 channel-messages） | **可能性高**。提议本身就指明了可复用的现有组件，工程化成本极低 |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) | 给 subprocess 增加最小环境清理 + 超时进程树终止 | **可能**。P1-critical，预期会作为下一个安全补丁合入 |

`#646` 提出的"恢复 Clippy + cargo-deny 在当前 toolchain 上的检查"也是一条**质量门禁信号**，意味着项目正在收紧 CI 基线。

---

## 7. 用户反馈摘要

今日新增 Issue 多为审计性技术报告，直接反馈较少。但从内容可提炼如下用户痛点与场景：

- **痛点 1：日志与终端无意识泄露** —— Panel 启动时将 API token 直接 `println!`，会让 token 永久落入 CI 日志和共享截图（[#656](https://github.com/qhkm/zeptoclaw/issues/656)）。
- **痛点 2：共享/多用户机器部署受限** —— 配置文件与 token 文件非 0600 权限，使 ZeptoClaw 在多用户主机上**不适合直接落地**（[#652](https://github.com/qhkm/zeptoclaw/issues/652)）。
- **痛点 3：反代/网关场景下的凭据泄露** —— WebSocket 用 query string 传 token，意味着只要前面挂了 nginx/Caddy 之类就会泄露（[#653](https://github.com/qhkm/zeptoclaw/issues/653)）。
- **痛点 4：文档与实现不一致** —— `verify_bearer_token` 的文档注释虚假声明已做 constant-time 比较，误导安全审计（[#655](https://github.com/qhkm/zeptoclaw/issues/655)）。
- **痛点 5：缺乏公开暴力破解防护** —— 登录端点仅靠 bcrypt 耗时做"软刹车"，无 lockout，提示用户期望**更标准化的认证基线**（[#654](https://github.com/qhkm/zeptoclaw/issues/654)）。

✅ **满意/积极信号**：`SlidingWindowRateLimiter` 已经存在并被使用（[#654](https://github.com/qhkm/zeptoclaw/issues/654) 中被指明可复用），说明项目在安全基础设施上有一定基础，主要问题在于**接入范围不足**而非缺失基础设施。

---

## 8. 待处理积压

> 以下 Issue 已打开 **30 天以上**，建议维护者优先 review。

| 编号 | 标题 | 创建日 | 已等待 | 严重度 |
|---|---|---|---|---|
| [#646](https://github.com/qhkm/zeptoclaw/issues/646) | restore Clippy and cargo-deny checks | 2026-07-23 | **39 天** | 🔴 P1-critical |
| [#644](https://github.com/qhkm/zeptoclaw/issues/644) | scrub subprocess environments | 2026-07-23 | **39 天** | 🔴 P1-critical |
| [#651](https://github.com/qhkm/zeptoclaw/issues/651) | fix 7 RustSec advisories | 2026-08-31 | 1 天 | 🟠 关联 P1 |

**维护者建议**：
1. 立即评估 `#646`、`#644`、`#651` 的修复可行性，为阻塞 CI 与安全基线的项排期；
2. 对 PR `#657` 的关闭给出反馈（驳回原因或合并计划），避免贡献者重复劳动；
3. 考虑将 `morler` 的 7 条安全审计清单转化为一个 **Safety Hardening Milestone**，集中合入以提升项目健康度与对外形象。

---

### 📊 项目健康度评估

| 维度 | 评级 | 说明 |
|---|---|---|
| 提交活跃度 | 🟢 高 | 单日 8 Issues |
| 安全性 | 🔴 偏低 | 多个 P1-critical + 多条密钥泄露路径 |
| 响应及时性 | 🟡 中 | 早期 Issue 等待 39 天未处理 |
| 文档一致性 | 🟡 中 | `auth.rs` 注释与实现不符 |
| 构建基线 | 🔴 偏低 | Clippy 与 cargo-deny 双双失效 |

**总评**：🔴 **需要关注**。项目处于"安全债集中暴露 + CI 基线失守"的双重压力下，建议维护者本周期内集中处理安全类 Issue，否则会影响 1.0 化或生产化部署的对外信任。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>



</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*