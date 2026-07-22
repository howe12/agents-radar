# OpenClaw 生态日报 2026-07-22

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-22 02:02 UTC

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

# OpenClaw 项目动态日报 · 2026-07-22

---

## 1. 今日速览

OpenClaw 仓库在 24 小时内呈现**极高活跃度**：500 条 Issue 更新（395 活跃/105 关闭）+ 500 条 PR 更新（337 待合并/163 已合并或关闭），合计 1000 条事件流转，反映出项目处于密集迭代与社区反馈并行阶段。**今日无新版本发布**，但合入通道保持通畅，多个 P0/P1 严重问题在 PR 端已有对应修复（macOS TLS 钉子、SQLite WAL、cron 误删、Zalo 轮询丢消息等）。社区讨论集中于**安全/权限边界**（掩码密钥、能力化授权、技能清单）、**核心稳定性**（SQLite 损坏、llama.cpp 兼容、Anthropic 鉴权恢复）以及**多渠道路由**（Discord 路由、Telegram 自定义表情、WhatsApp 通话事件）三大主线。整体健康度评估：**活跃但承压**——关闭率约 21%（Issue）/32%（PR）属于中等水平，多条高优 Issue（"clawsweeper:no-new-fix-pr"）长期缺修值得警惕。

---

## 2. 版本发布

**今日无新版本发布。** 当前线上最新版本为社区报告中所提及的 `2026.7.1`（构建 2d2ddc4），但 #106779、#108473 等 Issue 显示该版本在 llama.cpp 模板解析、cron 工具 schema 上存在回归。

---

## 3. 项目进展（今日合并/关闭要点）

### 已关闭 Issue（部分代表性修复落地）

- **[#98437] MCP loopback bundle schema 警告风暴 — 已关闭**
  https://github.com/openclaw/openclaw/issues/98437
  作者 alvelda 反馈每次 CLI/subagent 初始化会喷出上千条 `conflicting schema definitions`，已通过构建时合并解决。

- **[#91383] Telegram 首段 Markdown 链接消息截断 — 已关闭**
  https://github.com/openclaw/openclaw/issues/91383
  修复 normal reply 在 Markdown 链接打头时被从 URL 中段开始发送的体验缺陷。

- **[#95441] GitHub Copilot GPT-5.5 thinkingSignature 持久化/重放 — 已关闭**
  https://github.com/openclaw/openclaw/issues/95441
  连续修复链 #84367 → #90682 → #92941 → 本次关闭，最终解决 `channel/direct LLM request failed`。

### 已关闭 PR

- **#102228** ClawHub 包安装流（v 已关闭，转为 #102296 跟进）
- **#110739** `sessions_list` 工具 limit 上限（已合入）
- **#112471** Gateway control-UI 描述符回读（极小改动，已合入）

### 待合并但已具备合入条件的高价值 PR

- **[#112353] macOS 直接 Gateway TLS 钉子保护运维流量**（XL, maintainer）
  https://github.com/openclaw/openclaw/pull/112353 — 关闭 #112347，钉 `gateway.remote.tlsFingerprint` 覆盖 Dashboard/WebChat。
- **[#109076] Discord Webhook 发送体读限**（S, P1）
  https://github.com/openclaw/openclaw/pull/109076 — 防止 Discord/proxy 不回响应头时 fetch 永久挂起。
- **[#105806] 卡死会话恢复中回收终态回复操作**（M, P1）
  https://github.com/openclaw/openclaw/pull/105806 — 终结回复运行卡死后整条频道 lane 被锁死直到重启的痛点。
- **[#83933] cron 手动运行保留 deleteAfterRun 与计数器**（XL, P1）
  https://github.com/openclaw/openclaw/pull/83933 — 关闭 #83538，手动 `openclaw cron run` 不再误删一次性 at 任务。
- **[#110803] Zalo 轮询更新持久化落账**（M, P1）
  https://github.com/openclaw/openclaw/pull/110803 — 继 #110630 修 Webhook 后补齐轮询通道的丢消息窗口。
- **[#105884] Vydra 媒体生成走请求策略通道**（M, P1）
  https://github.com/openclaw/openclaw/pull/105884 — 提交后轮询与下载仍走用户配置的代理/内网策略路径。
- **[#89287] subagent 完成投递目标核验**（M, P1）
  https://github.com/openclaw/openclaw/pull/89287 — 把 ACP/subagent 完成回执绑定到请求者路由，回应 #90840 类回归。

> **整体评估：** 单日净推进 ≈ 10 个高优问题，但 P0 级 SQLite 损坏（#101290）仍未合入修复 PR。

---

## 4. 社区热点

按评论数排序的活跃议题，反映出社区当前最强烈的诉求：

| 排名 | Issue | 标题 | 评论 | 👍 | 标签 |
|---|---|---|---|---|---|
| 1 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets — 防止 Agent 看到原始 API Key | 15 | 4 | 🦞 diamond lobster |
| 2 | [#101290](https://github.com/openclaw/openclaw/issues/101290) | CLI 预检在 gateway 运行时破坏 live state DB | 13 | 1 | 🐚 platinum hermit, P0 |
| 3 | [#86996](https://github.com/openclaw/openclaw/issues/86996) | Active Memory + Codex app-server 路径导致高延迟/超时 | 11 | 2 | 🦞 diamond lobster |
| 4 | [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入 subagent 会话 | 11 | 5 | 🦞 diamond lobster |
| 5 | [#106779](https://github.com/openclaw/openclaw/issues/106779) | 2026.7.1 在 llama.cpp 上 400 parser 失败 | 11 | 2 | 🦐 gold shrimp |
| 6 | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem Sandboxing Config | 10 | 4 | 🦞 diamond lobster |
| 7 | [#14785](https://github.com/openclaw/openclaw/issues/14785) | 工具 schema token 开销优化（~3,500 tok/会话） | 9 | 0 | 🦞 diamond lobster |
| 8 | [#13616](https://github.com/openclaw/openclaw/issues/13616) | config/cron/会话备份还原工具 | 9 | 0 | 🌊 tidepool |
| 9 | [#20786](https://github.com/openclaw/openclaw/issues/20786) | Telegram Business Bot 支持 | 9 | 6 | 🦞 diamond lobster |
| 10 | [#16670](https://github.com/openclaw/openclaw/issues/16670) | Onboarding 加入 Memory/Embedding 强制步骤 | 9 | 1 | 🦞 diamond lobster |

**热点诉求解读：**

- **凭据保护与最小权限** 形成最大呼声簇——#10659（掩码密钥）、#7722（文件系统沙箱）、#88562（models.json 把 apiKey 写成明文而非 secret-ref 竟是一个**已确认的 Bug**）、#12678（能力化授权）、#12219（Skill 权限清单）。社区已经形成"prompt injection 时代下默认信任模型必须重做"的共识。
- **核心稳定性焦虑**集中在 SQLite（#101290）、llama.cpp 兼容（#106779/#108473）、长会话工具参数丢失（#53408）三个高频痛点。
- **多 Agent 编排与子代理控制** 持续升温——subagent announce 抑制（#8299/#13911）、subagent 工具限制（#15032）、DMZ 三区隔离搜索（#15032 描述）。
- **Telegram 平台能力扩展**仍是最大单一渠道诉求源（Business Bot #20786、自定义表情 #16121、群白名单 #20321）。

---

## 5. Bug 与稳定性

### 🔴 P0 / 数据损坏（无合入修复）

- **[#101290] CLI 预检破坏 live state DB** — `openclaw.sqlite` 在 2026.7.2-7.6 期间**四次损坏**，vanilla SQLite 不能复现，指向 WAL/checkpoint 在 gateway 运行中的竞态。**标签 `clawsweeper:no-new-fix-pr`**，维护者请优先认领。
  https://github.com/openclaw/openclaw/issues/101290

### 🟠 P1 回归与认证失败

- **[#111498] Anthropic 鉴权恢复后主 Agent 被遗留 workspace-state 迁移阻断**
  https://github.com/openclaw/openclaw/issues/111498 — macOS 上 TUI/CLI 都卡在 legacy 状态探针，credential 已恢复仍拒绝。
- **[#95612] cli-backend agent 调 anthropic (claude-cli) 返回 401** — 但 shell 直调 claude 正常
  https://github.com/openclaw/openclaw/issues/95612 — 疑似环境变量/凭据注入路径差异。
- **[#106779] 2026.7.1 上所有本地 llama.cpp provider 400** "Unable to generate parser for this template"
  https://github.com/openclaw/openclaw/issues/106779 — 模板系统回归。
- **[#108473] cron 工具 schema 用未锚定 regex `pattern` 破坏 llama.cpp 工具调用**
  https://github.com/openclaw/openclaw/issues/108473 — 同源回归。
- **[#53408] write/exec 工具参数在 15+ 轮长会话后被静默丢弃**
  https://github.com/openclaw/openclaw/issues/53408 — 影响数据完整性，需修 schema validation/截断恢复。
- **[#90840] subagent 完成回执被作为原始输出投递到用户聊天（QQBot 路径）**
  https://github.com/openclaw/openclaw/issues/90840 — **已有对应 PR #89287 待合入**。
- **[#85030] MCP 工具未注入 subagent 会话（bundle-mcp + allowlist 全失效）**
  https://github.com/openclaw/openclaw/issues/85030 — **仍无 fix PR**，标签 `no-new-fix-pr`。
- **[#88562] models.json 生成器把 apiKey 写成明文字符串而非 secret-ref 对象**
  https://github.com/openclaw/openclaw/issues/88562 — **安全相关 Bug**，凭据落地到派生文件里。

### 🟡 行为缺陷

- **[#9837 簇] cron 一次性 at 任务被 `openclaw cron run` 误消费** — **已由 #83933 修复**，待合并。
- **[#48373] feishu_doc create action 静默忽略 content 参数**
  https://github.com/openclaw/openclaw/issues/48373 — 文档创建为空，需二次 write。
- **[#10142]** session:end 内部 hook 事件缺失 — 影响 Temporal 等外部编排对接。

---

## 6. 功能请求与路线图信号

按"已有对应 PR / 同源修复链 / 高度共识"三档评估：

### 🚀 路线图高概率纳入（已有 PR 或修复链）

| 提案 | Issue | 状态信号 |
|---|---|---|
| Antigravity CLI (agy) 替代 Gemini CLI | [#84527](https://github.com/openclaw/openclaw/issues/84527) 👍11 | Google I/O 2026-05-19 官方迁移截止 6/18，OpenClaw 必跟 |
| Per-model usage logging（成本追踪） | [#13219](https://github.com/openclaw/openclaw/issues/13219) | `clawsweeper:linked-pr-open` |
| WhatsApp 消息删除（撤回） | [#14344](https://github.com/openclaw/openclaw/issues/14344) | `clawsweeper:linked-pr-open` |
| 可配置 lane 等待诊断阈值 | [#14747](https://github.com/openclaw/openclaw/issues/14747) | `clawsweeper:linked-pr-open` |
| cron 消息队列 TTL | [#16555](https://github.com/openclaw/openclaw/issues/16555) | 防重启时陈旧条目淹没频道 |
| Fireworks.ai `x-session-affinity` 动态头模板 | [#16387](https://github.com/openclaw/openclaw/issues/16387) | 解锁 prompt caching |
| 子代理按通道 announce 抑制 | [#13911](https://github.com/openclaw/openclaw/issues/13911) | `clawsweeper:linked-pr-open` |
| Telegram 自定义表情 | [#16121](https://github.com/openclaw/openclaw/issues/16121) | 跟 Bot API 更新 |
| Discord 多 Bot 路由：mention > reply-target > default owner | [#13487](https://github.com/openclaw/openclaw/issues/13487) | 确定性单目标路由 |

### 🛡️ 安全主线（社区呼声最高，roadmap 优先级待定）

- **#10659 Masked Secrets**（15 评论，4 👍）— 防止 Agent 读取原始 API Key，应对 prompt injection 凭据抽取。
- **#7722 Filesystem Sandboxing** — `tools.fileAccess.allowedPaths/denyPaths` 配置。
- **#88562 models.json apiKey 明文落盘 Bug**（已确认 bug，需尽快修）。
- **#12219 Skill Permission Manifest（skill.yaml）** — 借鉴 npm/Cargo 声明式许可。
- **#12678 能力化授权（默认拒绝高风险动作）** — gateway/tool 层强制。

### 🌊 长期呼声（影响路线但尚未启动）

- **#14785** 工具 schema token 削减 ~3,500 tok/会话 — 直接降本。
- **#13616** config/cron/会话备份还原 — DR 与环境迁移刚需。
- **#13676** Gateway Dashboard 一级 Projects 概念。
- **#12855** 内建 auto-update + 调度 + 确认 + 通知。
- **#14526** 安全的 self-update（预更新备份 + 健康检查 + 自动回滚）。
- **#13597** AWS 部署综合指南（EC2/ECS/Lambda）。
- **#7524** `groupScope` 选项让群组合入会话。
- **#9409** 上下文溢出错误信息具体化。
- **#16670** Onboarding 加入 Memory/Embedding 强制步骤 — 大量用户因漏配 embedding 导致 `memory_search` 不可用。
- **#15032** 子代理按 spawn 限制工具集 — DMZ Web Search 三区隔离防御 prompt injection。
- **#14438** 插件热重载（jiti 缓存失效） — 当前开发体验痛点。
- **#13700** 会话快照 `/session save|load` — 长会话回滚与 A/B。
- **#9912** `maxTurns`/`maxToolCalls` 配置 — 防模型不收敛循环。

---

## 7. 用户反馈摘要

提炼自 Issue 评论与上下文：

- **运行可靠性痛点集中爆发**："OpenClaw 变得又慢又不稳定，连简单的 Telegram DM 都失败"——#86996 用户在 `active-memory + openclaw-honcho + lossless-claw + gpt-5.4-mini` 这一"推荐组合"上反复遭遇 hook 超时、startup 终止、event-loop 停滞。**反映出"功能堆叠导致可用性劣化"已成为负面口碑核心来源**。

- **本地/自托管模型兼容是用户高频踩点**：#106779、#108473、#95441 三条 Issue 都指向 llama.cpp/GitHub Copilot 在 2026.7.x 上的回归。"Automatic parser generation failed" 是社区搜索量上升的报错关键词。

- **凭据管理是用户最深的不信任来源**："目前秘密以明文存于 `~/.openclaw/.env`，Agent 完全可见"——多个用户引用了近期凭据窃取

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 2026-07-22 横向对比分析

---

## 1. 生态全景

截至 2026-07-22，个人 AI 助手/自主智能体开源生态呈现 **"高活跃、强分化、稳中承压"** 的整体态势：13 个监控项目中 8 个有显著活动，单日累计处理约 750+ 工单流转、合并约 90+ PR/Issue，但仅 2 个项目发布新版本（IronClaw v1.0.0-rc.1、CoPaw/QwenPaw v2.0.1-beta.1）。生态共识正在向 **凭据保护与最小权限**、**核心运行时稳定性**、**多渠道/多模型可插拔**、**子代理治理** 四个方向收敛；同时，社区已进入"功能堆叠侵蚀可用性"的反思期——OpenClaw、ZeroClaw 等头部项目均出现"推荐组合反而不可用"的负面口碑信号。NullClaw、TinyClaw、ZeptoClaw、Moltis 等项目处于静默期，呈现出明显的 **"明星项目高歌猛进、长尾项目维持等待"** 的二八分化。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue | 24h PR | 已关闭 Issue | 已合并/关闭 PR | 新版本 | 健康度 | 阶段特征 |
|---|---:|---:|---:|---:|:---:|:---:|---|
| **OpenClaw** | 500 | 500 | 105 | 163 | ❌ | ⭐⭐⭐ 中 | 活跃但承压，多 P0 待修 |
| **ZeroClaw** | 50 | 50 | 3 | 9 | ❌ | ⭐⭐⭐ 中偏下 | 吞吐量低于产出，PR 评审拥堵 |
| **CoPaw/QwenPaw** | 42 | 50 | 21 | 30 | ✅ v2.0.1-beta.1 | ⭐⭐⭐⭐ 良 | v2.0 上线后修缺陷期 |
| **IronClaw** | 41 | 50 | 14 | 17 | ✅ v1.0.0-rc.1 | ⭐⭐⭐⭐ 良 | Reborn 架构稳态强化 |
| **Hermes Agent** | 50 | 50 | 4 | 4 | ❌ | ⭐⭐⭐ 中 | 桌面端 Bug 集中爆发 |
| **NanoBot** | ~9 关 | 22 关 | 9 | 22 | ❌ | ⭐⭐⭐⭐ 良 | 批量收尾，安全加固 |
| **LobsterAI** | 1 | 10 | 0 | 5 | ❌ | ⭐⭐⭐⭐ 良 | Artifacts 体验打磨 |
| **PicoClaw** | 8 | 8 | 4 | 3 | ❌ | ⭐⭐⭐⭐ 良 | 修复链路顺畅（71% 覆盖率） |
| **NanoClaw** | 1 | 12 | 0 | 3 | ❌ | ⭐⭐⭐ 中 | 合并速度滞后（2 条 PR >80 天） |
| **Moltis** | 1 | 1 | 0 | 0 | ❌ | ⭐⭐ 低 | 静默维护期 |
| **NullClaw** | 0 | 0 | 0 | 0 | ❌ | ⭐ 待观察 | 无活动 |
| **TinyClaw** | 0 | 0 | 0 | 0 | ❌ | ⭐ 待观察 | 无活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | ⭐ 待观察 | 无活动 |

**关键观察**：
- 头部 3 名（OpenClaw、ZeroClaw、CoPaw）合计贡献当日工单流量的 **~76%**；
- 关闭率分布呈两极：OpenClaw（21%/32%）、ZeroClaw（6%/18%）偏低，反映其规模带来的处理滞后；NanoBot（100% Issues、100% PRs）属异常高效的批量收尾；
- **仅 2/13 项目发版**，普遍存在"修复积压不发版"的现象。

---

## 3. OpenClaw 在生态中的定位

### 3.1 量级优势
OpenClaw 单日 1000 条事件流转，是次席 CoPaw（92 条）的 **10.9 倍**、ZeroClaw（100 条）的 **10 倍**，呈现明显的"超级项目"特征。这种规模既是社区深度的体现，也意味着维护者必须依赖标签机器（`clawsweeper:no-new-fix-pr` 等）来分流。

### 3.2 与同类项目的核心差异

| 维度 | OpenClaw | ZeroClaw | NanoBot | CoPaw/QwenPaw | Hermes Agent |
|---|---|---|---|---|---|
| **架构重心** | 渠道+工作流 | Provider+RFC驱动 | 安全加固+Provider生态 | 治理+OMP工作流 | 桌面+TUI+Memory |
| **多渠道广度** | ⭐⭐⭐⭐⭐（Discord/Telegram/WhatsApp/Zalo/Feishu/QQBot 全覆盖） | ⭐⭐⭐⭐（Telegram/Matrix/Mattermost/QQ） | ⭐⭐⭐（transcription/webui 为主） | ⭐⭐⭐⭐（含飞书等） | ⭐⭐⭐ |
| **子代理/编排** | ⭐⭐⭐⭐⭐（subagent/ACP/DMZ 三区） | ⭐⭐⭐⭐（Goal Mode RFC） | ⭐⭐⭐ | ⭐⭐⭐⭐⭐（OMP 5 模式） | ⭐⭐⭐ |
| **凭据/沙箱** | ⭐⭐⭐⭐⭐（Masked Secrets、Skill Manifest） | ⭐⭐⭐⭐（KeySource trait） | ⭐⭐⭐⭐（env-var 推荐） | ⭐⭐⭐⭐⭐（治理策略模式） | ⭐⭐⭐⭐ |
| **本地模型支持** | ⭐⭐⭐（llama.cpp 现存回归） | ⭐⭐⭐⭐（Ollama） | ⭐⭐⭐⭐（Ollama/Qwen/DeepSeek via ModelScope） | ⭐⭐⭐⭐（多 provider） | ⭐⭐⭐（Ollama web 入口缺失） |

### 3.3 社区规模对比
OpenClaw 的社区诉求颗粒度更细（如 `cron 工具 schema regex 锚定`、`session:end hook 缺失`），而 ZeroClaw 更偏 RFC 架构级（Goal Mode、OpenAI 适配、AuditLogger）。这表明 OpenClaw 已进入 **"功能被广泛使用 → 边缘场景暴露"** 的成熟阶段，而 ZeroClaw 仍处于 **"奠定基础设施"** 的设计期。

---

## 4. 共同关注的技术方向

### 4.1 🔐 凭据保护与最小权限（5/13 项目涉及）

| 项目 | 代表诉求 |
|---|---|
| OpenClaw | #10659 Masked Secrets、#7722 Filesystem Sandboxing、#88562 models.json 明文 Bug、#12219 Skill Permission Manifest、#12678 能力化授权 |
| NanoBot | #4803 API Key 明文存储（仅文档级缓解）、#5010 SECURITY.md 推荐 env-var |
| Hermes Agent | #54675 多 Profile token 凭据隔离（已修） |
| PicoClaw | #3282 节点策略化系统执行（已合并） |
| ZeroClaw | #8226 类型化 per-agent 身份、#9194 KeySource trait 抽象 |

**共识**：prompt injection 时代下"默认拒绝"成为新基线，secret-ref/env-var 引用正在取代明文落盘。

### 4.2 ⚙️ 核心运行时稳定性（5/13 项目涉及）

| 痛点 | 涉及项目 |
|---|---|
| SQLite 损坏/WAL 竞态 | OpenClaw #101290（P0）、NanoBot 部分 PR |
| 流式传输/共享连接 idle-bound | ZeroClaw PR #8838、OpenClaw SSE 相关 |
| 长会话工具参数丢失 | OpenClaw #53408、CoPaw #5860（进度丢失） |
| 启动/版本回归 | OpenClaw 2026.7.1 llama.cpp 400（#106779/#108473） |
| Cron 任务被误消费 | OpenClaw #9837 簇（#83933 待修）、NanoBot #4983 |

### 4.3 🔌 多渠道与可插拔架构（6/13 项目涉及）

| 项目 | 渠道扩展信号 |
|---|---|
| OpenClaw | Discord 多 Bot 路由（#13487）、Telegram Business Bot（#20786）、WhatsApp 撤回（#14344）、Zalo 轮询（#110803） |
| NanoClaw | LINE 官方账号（#3096）、Dial picker（#3050）、Traditional Chinese README（#2950） |
| Hermes Agent | Atomic Hermes 移动端（#68951）、多 Profile 配置 |
| ZeroClaw | Mattermost WebSocket（#7082 已关）、Matrix thread 会话隔离（#8541） |
| PicoClaw | Feishu 原生音视频（#3256）、Telegram/DingTalk 品牌可配置（#303 已合） |
| LobsterAI | 与 OpenClaw 通信稳定性（#2372） |

### 4.4 🤖 子代理/多 Agent 治理（4/13 项目涉及）

- **OpenClaw**：subagent announce 抑制（#13911）、DMZ 三区隔离（#15032）、完成回执路由（#89287）
- **ZeroClaw**：delegate 绕过父级白名单（S0 #8279）、Goal Mode RFC（#8303 + PR #8687-#8996 stacked）
- **CoPaw**：OMP 5 模式（UltraQA/Ralph/Ultrawork/Autopilot/Team）、spawn_subagent 工具白名单
- **NanoBot**：sustained goal 死循环（#5022 `/cancel-goal`）

### 4.5 🛠️ 工具 schema/Token 优化（3/13 项目涉及）

- **OpenClaw #14785**：工具 schema 削减 ~3,500 tok/会话
- **CoPaw #6286**：内置工具描述禁用/自定义节省 8K–10K tokens/请求
- **NanoBot #4867**：Ollama prompt prefix 稳定以利缓存（已关闭）

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道+多 provider 通用 agent 平台 | 高级用户/自托管团队 | 渠道/网关/技能三层 + subagent ACP |
| **ZeroClaw** | RFC 驱动的可扩展 agent 运行时 | 架构师/集成商 | Goal Mode + Eval Harness + 多 provider 适配器 |
| **CoPaw/QwenPaw** | 治理沙箱+多模式工作流 | 企业/团队 | OMP 治理策略 + @tool_descriptor 元数据 |
| **IronClaw** | Reborn 架构收敛，配置即代码 | 产品化部署者 | witness 单一权威站点 + tenant blueprints |
| **NanoBot** | 轻量、安全、本地模型友好 | 个人开发者/隐私敏感用户 | 原子写、env-var 凭据、ModelScope 接入 |
| **Hermes Agent** | 桌面端/TUI 体验 | 本地高级用户 | TUI widget SDK + 跨端主题 SDK |
| **PicoClaw** | 节点伴侣+品牌身份可定制 | 国产化/小语种用户 | policy-gated system exec + slim node |
| **NanoClaw** | 多渠道 + RFS 技能治理 | 跨地区贡献者 | registry-branch 模型 + OneCLI 部署 |
| **LobsterAI** | UI/Artifacts 体验 + 商业化 | C 端产品用户 | 渲染层深度优化 + Windows 静默更新 |
| **Moltis** | 多模型路由（规划中） | 多模型用户 | Astro 文档站点驱动 |

**关键差异点**：
- **"治理派"**（CoPaw、IronClaw、PicoClaw）强调策略化、声明式许可；
- **"扩展派"**（OpenClaw、ZeroClaw）强调插件/技能生态；
- **"体验派"**（Hermes、LobsterAI）强调桌面/UI 打磨；
- **"安全派"**（NanoBot）强调最小暴露面与凭据不落盘。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队 · 快速迭代（活跃度 ≥ 50/日）
**OpenClaw、ZeroClaw、CoPaw/QwenPaw、IronClaw、Hermes Agent**

共同特征：
- 单日工单量 ≥ 90 条
- 处于版本关键节点（v2.0 发布、RC 阶段）或大规模功能扩展期
- 伴随"功能堆叠 → 稳定性承压"阵痛（OpenClaw、CoPaw 2.0、IronClaw Reborn）

### ⚙️ 第二梯队 · 质量巩固（活跃度 5–30/日）
**NanoBot、LobsterAI、PicoClaw、NanoClaw**

共同特征：
- 修复覆盖率 >70%、关闭率 >30%
- 处于"批量收尾/小步快跑"状态
- NanoBot 22 PR/9 Issue 单日清理最为典型

### 💤 第三梯队 · 静默维护（活跃度 < 5/日）
**Moltis、NullClaw、TinyClaw、ZeptoClaw**

共同特征：
- 无新功能、无 PR 合并、无新 Issue 报告
- 风险信号：Moltis 唯一活跃 Issue (#574) 已挂起 3.5 个月

**成熟度结论**：生态已进入"超级项目领跑 + 长尾项目分化"的稳态，头部项目的架构选择（治理/扩展/体验/安全）将定义未来 6–12 个月的产品形态。

---

## 7. 值得关注的趋势信号

### 7.1 🛡️ 「默认拒绝」成为安全新基线
5 个项目同步推进凭据保护、权限沙箱、能力化授权。**对开发者的启示**：新项目应

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**报告日期**：2026-07-22
**数据来源**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 项目今日展现出极高的维护活跃度，**24 小时内集中关闭了 9 条 Issues 与 22 条 PR**，呈现明显的"批量收尾"特征。当前仍有 11 条 PR 待合并、1 条 Issue 待处理，社区关注度集中在 **安全加固、Ollama 兼容、Qwen 系列模型适配**三大方向。整体来看，项目处于一次重要的稳定性与健壮性强化周期，重点关注会话/资源生命周期管理、shell 沙箱边界与 Provider 兼容性，但**未发布新版本**，所有变更仍在主干积累中。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。从 PR 活动判断，多个安全与稳定性修复（如配置原子写、API Key 加密建议、exec 子进程清理）仍在合并前评审阶段，预计将在下一次正式版本中集中放出。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日 22 条关闭/合并的 PR 中，多个具有里程碑意义，集中强化了**安全模型、资源生命周期和 Provider 生态**：

| PR | 主题 | 重要性 | 影响 |
|---|---|---|---|
| [#4663](https://github.com/HKUDS/nanobot/pull/4663) | fix: quarantine invalid tool results | P1 | 修复 #4058，引入工具结果 ID 校验的回归测试，从源头杜绝脏工具结果进入会话历史 |
| [#4984](https://github.com/HKUDS/nanobot/pull/4984) | fix(config): write config.json atomically | P1 | 改用 temp+replace 原子写入，崩溃中途不再会留下截断配置 |
| [#4952](https://github.com/HKUDS/nanobot/pull/4952) | fix(providers): sanitize UTF-16 surrogates | P1 | 修复 LLM 请求中偶发的 `surrogates not allowed` UnicodeEncodeError，提升 emoji 场景稳定性 |
| [#4983](https://github.com/HKUDS/nanobot/pull/4983) | fix(cron): coerce string schedule/state ms fields | P1 | 修复 `jobs.json` 时间字段被反序列化为字符串导致的 `_compute_next_run` TypeError |
| [#4989](https://github.com/HKUDS/nanobot/pull/4989) | fix(transcription): resolve ${VAR} env refs in transcription | P1 | 解决 Groq 语音转写 401 错误——环境变量插值在转写路径上之前被绕过 |
| [#4965](https://github.com/HKUDS/nanobot/pull/4965) | feat(modelscope): add ModelScope provider | P1 | 通过 OpenAI 兼容端点接入 ModelScope，支持 Qwen、DeepSeek、Kimi、GLM 等开源模型 |
| [#5019](https://github.com/HKUDS/nanobot/pull/5019) | feat(providers): support Codex fast mode | P2 | 透传 `service_tier: "priority"` 至 Codex Responses 请求，开启 Fast Mode |
| [#5010](https://github.com/HKUDS/nanobot/pull/5010) | docs(security): recommend env-var references | P2 | 更新 SECURITY.md，明确推荐 `${ENV}` 引用方式管理 API Key |
| [#5020](https://github.com/HKUDS/nanobot/pull/5020) | feat(webui): highlight skill references in sent messages | — | WebUI 优化：在用户消息中高亮可用 `$skillname` 引用 |
| [#4811](https://github.com/HKUDS/nanobot/pull/4811) | fix(runner): log suppressed prepare_call exceptions | P2 | 替换 `suppress(Exception)` 为显式日志，避免准备阶段错误被吞掉 |

**整体判断**：今日变更集中在「**生产可用性**」层面（原子写入、异常处理、Provider 错误恢复），而非新功能堆叠，是项目走向稳定的明确信号。

---

## 4. 社区热点

**最活跃 Issue（22 条评论）**：
- [#4867](https://github.com/HKUDS/nanobot/issues/4867) —— *Preserve exact prompt prefix to enable caching in Ollama and others*（已关闭）

  用户 @The-Markitecht 报告：调用 Ollama 本地模型时，**每轮对话无故增加 60 秒延迟**，原因是前缀哈希变化导致 prompt cache 失效。该 Issue 是 #2463 的后续，社区强烈呼吁保持 prompt prefix 稳定以支持缓存。这是 NanoBot 本地化部署的关键痛点，对 32GB VRAM 用户尤其敏感。

**高互动 Issue**：
- [#4058](https://github.com/HKUDS/nanobot/issues/4058) —— 工具结果协议缺陷，已通过 [#4663](https://github.com/HKUDS/nanobot/pull/4663) 修复并关闭。

**高赞同 Issue**：
- [#4911](https://github.com/HKUDS/nanobot/issues/4911) —— *A guarded tool gateway seam so channels can run the agent's tools*（👍1，已关闭）

  表达了对端到端实时语音通道的诉求——当前 channel 仅接收文本，无法调用 agent 工具。该讨论预示了 channel-tool 互操作的下一步演进。

**诉求分析**：当前社区三大诉求集中在：① 提示前缀稳定以利缓存；② channel/agent 工具互操作；③ shell 执行前的用户确认（[#5013](https://github.com/HKUDS/nanobot/issues/5013)）。

---

## 5. Bug 与稳定性

按严重程度从高到低排序：

| 严重度 | Bug | 状态 | 修复 PR |
|---|---|---|---|
| 🔴 高 | [#4934](https://github.com/HKUDS/nanobot/issues/4934) **Qwen 模型泄露思考/推理内容** | 🟡 OPEN | [#5023](https://github.com/HKUDS/nanobot/pull/5023) (OPEN, 待合并) |
| 🔴 高 | [#4788](https://github.com/HKUDS/nanobot/issues/4788) `except BaseException` 捕获 KeyboardInterrupt/SystemExit | ✅ CLOSED | 待查 |
| 🔴 高 | [#4794](https://github.com/HKUDS/nanobot/issues/4794) Exec session 无 shutdown 清理，子进程变孤儿 | ✅ CLOSED | [#5021](https://github.com/HKUDS/nanobot/pull/5021) 待合并 |
| 🟠 中 | [#4785](https://github.com/HKUDS/nanobot/issues/4785) `read_file` 全文件读入内存，多 GB 文件 OOM | ✅ CLOSED | [#4987](https://github.com/HKUDS/nanobot/pull/4987) P0 待合并 |
| 🟠 中 | [#4803](https://github.com/HKUDS/nanobot/issues/4803) API Key 明文存储于 `config.json` | ✅ CLOSED | [#5010](https://github.com/HKUDS/nanobot/pull/5010) 仅文档级 |
| 🟠 中 | [#4787](https://github.com/HKUDS/nanobot/issues/4787) `Session.messages` 无上限，永久累积 | ✅ CLOSED | 待查 |
| 🟡 低 | [#4058](https://github.com/HKUDS/nanobot/issues/4058) tool-result 协议允许缺失/重复 ID | ✅ CLOSED | [#4663](https://github.com/HKUDS/nanobot/pull/4663) 已合并 |

**值得关注的回归风险**：
- [#4866](https://github.com/HKUDS/nanobot/pull/4866) 绑定模型 preset 到 session 涉及 BUILD 阶段的 `LLMRuntime` 单次解析，可能影响已有依赖运行时切换的工作流。
- [#4941](https://github.com/HKUDS/nanobot/pull/4941) 修复 WebUI workspace scope 在重启后回落默认值的回归问题，针对 `websocket_<uuid>.jsonl` 等遗留路径做向后兼容。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 当前状态 | 路线图概率 |
|---|---|---|---|
| Qwen 思考模式模型级映射 | [#5023](https://github.com/HKUDS/nanobot/pull/5023) | OPEN PR | ⭐⭐⭐⭐⭐ 几乎必然合入 |
| `/cancel-goal` 命令打破持续目标循环 | [#5022](https://github.com/HKUDS/nanobot/pull/5022) | OPEN PR | ⭐⭐⭐⭐⭐ 解决用户与系统提示优先级冲突 |
| shell 执行前用户确认（WebUI + loop 中断） | [#5013](https://github.com/HKUDS/nanobot/issues/5013) | Issue 已关，参考 LangChain middleware | ⭐⭐⭐⭐ 高 |
| Channel 调用 agent 工具的统一网关 | [#4911](https://github.com/HKUDS/nanobot/issues/4911) | 讨论级 | ⭐⭐⭐ 中——架构变更较大 |
| Skills 显式上下文加载 | [#5018](https://github.com/HKUDS/nanobot/pull/5018) | OPEN PR | ⭐⭐⭐⭐⭐ `skill_names` 已有但被忽略，修复成本低 |
| WebUI 隐藏配置节（多实例简化） | [#4399](https://github.com/HKUDS/nanobot/pull/4399) | OPEN PR (冲突中) | ⭐⭐⭐ 中——需解决冲突 |
| Codex Fast mode | [#5019](https://github.com/HKUDS/nanobot/pull/5019) | ✅ 已合并 | 已落地 |

**下一版本预判**：Qwen 思考控制、cancel-goal、技能显式加载 三项很可能在下一版本中出现。

---

## 7. 用户反馈摘要

提炼今日 Issues 评论中的真实用户痛点：

- **本地模型延迟灾难**：用户反馈 Ollama + 32GB VRAM 配置下"完全不可用"，每次简单对话额外加 60 秒，根源是 prompt cache 失效（[#4867](https://github.com/HKUDS/nanobot/issues/4867)）。

- **安全焦虑**：中文社区用户明确表达对 shell 自动执行的担忧，"现在执行 shell 命令时没有 human 确认，存在安全风险"（[#5013](https://github.com/HKUDS/nanobot/issues/5013)），倾向于参考 LangChain middleware 机制在 loop 中加入中断。

- **持续任务失控**：长任务创建 sustained goal 后，用户"停下来"的口头指令会被系统级 "Please continue working" 覆盖，agent 陷入反复验证死循环（[#5022](https://github.com/HKUDS/nanobot/pull/5022)）。这是用户体验上相当严重的失败模式。

- **Qwen 系列兼容性**：使用 DashScope 接入 Qwen 3.6-flash 时，模型内部 thinking 推理内容错误暴露给用户，显示模型决策逻辑（[#4934](https://github.com/HKUDS/nanobot/issues/4934)）。

- **多实例部署诉求**：管理员希望能为非技术用户简化 UI（[#4399](https://github.com/HKUDS/nanobot/pull/4399)），暴露了当前 WebUI 在企业部署中的"信息过载"问题。

---

## 8. 待处理积压

以下 PR 已 OPEN 一段时间且涉及关键路径，建议维护者优先 review：

| PR | 创建日期 | 等待天数 | 优先级 | 风险点 |
|---|---|---|---|---|
| [#4987](https://github.com/HKUDS/nanobot/pull/4987) bind workspace checks to opened files | 2026-07-19 | 3 | **P0** | 涉及文件系统核心安全，使用 `O_NOFOLLOW` + `fstat`/`stat` 比对，防 TOCTOU |
| [#4399](https://github.com/HKUDS/nanobot/pull/4399) hidden_settings_sections | 2026-06-18 | **34** | — | 已标记 conflict，长期挂起 |
| [#4963](https://github.com/HKUDS/nanobot/pull/4963) polish agent output and app discovery | 2026-07-17 | 5 | — | WebUI 大改，标记 conflict |
| [#4594](https://github.com/HKUDS/nanobot/pull/4594) extract absolute paths after `=` in shell guard | 2026-06-29 | 23 | P1 | shell 沙箱绕过风险，`curl --output=/etc/passwd` 等命令可逃逸 |

**唯一 OPEN Issue 待处理**：[#4934](https://github.com/HKUDS/nanobot/issues/4934) Qwen 模型思考内容泄露，虽已有 [#5023](https://github.com/HKUDS/nanobot/pull/5023) 待合并但仍属未关闭状态。

---

## 📊 健康度评分

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 22 PR 关闭 + 9 Issue 关闭，节奏罕见 |
| 安全态势 | ⭐⭐⭐⭐ | 多项 P0/P1 安全 PR 在审，API Key 明文问题已文档级缓解但根因未改 |
| 社区响应 | ⭐⭐⭐⭐ | 高评论 Issue（22 条）当日闭环，响应及时 |
| 发版节奏 | ⭐⭐ | 大量变更积压，无版本发布，用户等待成本上升 |
| 文档同步 | ⭐⭐⭐⭐ | SECURITY.md 已更新，Provider 文档跟进 |

**总体**：项目当前处于"蓄力期"，大量质量改进已在主干收敛，但**未及时打 tag** 可能影响下游用户获取这些修复。建议维护者尽快策划一次小版本发布。

---

*报告生成时间：2026-07-22 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-22

> 数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)
> 报告期：过去 24 小时

---

## 1. 今日速览

Hermes Agent 仓库延续高活跃态势，**过去 24 小时共产生 50 条 Issue 更新与 50 条 PR 更新**（均 46 处于 OPEN 状态、4 处于 CLOSED 状态），Issues 侧的活跃度远超常规水平。无新版本发布。当前社区关注焦点集中在**桌面端 Bug 集中爆发**、**TUI 渲染细节**、**Kanban 工作流硬化**以及**Memory Backends 重构提案**。整体而言，项目处于密集修复与功能提案并行阶段，P1 级别崩溃级 Bug 出现 1 例，值得维护者优先介入。

---

## 2. 版本发布

⚠️ **今日无任何新版本发布。** 最近一次版本为数据中提及的 v0.19.0（参见 #68858 中"on an official Hermes Agent v0.19.0 installation"），桌面端 v0.17.0 仍有崩溃问题在跟踪。

---

## 3. 项目进展

今日明确的"已关闭"事件 4 件，含 3 件 Issue 与 1 件 PR（数据中显示为合并/关闭），形成可观测的进展闭环：

| 类型 | 编号 | 内容 | 链接 |
|---|---|---|---|
| Bug | #27683 | `web_tools.py` 缺少 `_ensure_plugins_discovered()` 导致 web 工具静默失败（标记 `sweeper:implemented-on-main`） | [#27683](https://github.com/NousResearch/hermes-agent/issues/27683) |
| Bug | #38786 | Hermes Desktop 渲染本地生成图片为 `[Image blocked: ...]`（标记 `sweeper:implemented-on-main`，👍=2） | [#38786](https://github.com/NousResearch/hermes-agent/issues/38786) |
| Security | #54675 | 多路复用 Gateway 中 bot token 通过 `os.getenv` 绕过 per-profile secret scope（标记 `sweeper:implemented-on-main`，👍=2） | [#54675](https://github.com/NousResearch/hermes-agent/issues/54675) |
| PR | #68999 | TUI widget-grid 强化，作为 #20379 的 fast-follow，已合并 | [#68999](https://github.com/NousResearch/hermes-agent/pull/68999) |

其中 #54675 涉及跨 Profile 安全边界被绕过，是一项值得肯定的**安全修复**。

---

## 4. 社区热点

按评论数排序的活跃讨论：

- **[#47349（13 评论，👍1）](https://github.com/NousResearch/hermes-agent/issues/47349)** — `@TechFlipsi` 提议将 `memory.md` 重命名为 `rules.md` 并支持可配置 Memory Backends（honcho / fact_store 等），是当前社区最热的架构级讨论。
- **[#27683（8 评论）](https://github.com/NousResearch/hermes-agent/issues/27683)** — 新装环境 web 工具不可用的根因调查，揭示插件系统与 web registry 之间的初始化顺序问题。
- **[#25083（7 评论）](https://github.com/NousResearch/hermes-agent/issues/25083)** — 提议引入"受保护技能"机制，防止 agent 修改关键 skill（如治理规则、安全约束）。
- **[#68915（5 评论，P1）](https://github.com/NousResearch/hermes-agent/issues/68915)** — Worker 在 LLM 用 `&` 后台启动服务器时死锁（孤儿 subshell 占用 stdout pipe）。
- **[#64900（5 评论）](https://github.com/NousResearch/hermes-agent/issues/64900)** — 插件平台无法扩展 `send_message` 的 schema 与发送处理器，呼吁引入平台级 schema 扩展点。
- **[#68920（4 评论，P2）](https://github.com/NousResearch/hermes-agent/issues/68920)** — Desktop/TUI 会话租约泄漏，`max_concurrent_sessions` 逐渐失效。

**社区诉求画像**：用户强烈希望提升 **可扩展性**（插件、Memory 后端、技能保护）与 **多 Profile/多用户安全边界**（token 隔离、配置作用域）。

---

## 5. Bug 与稳定性

按严重程度排列（仅列代表性 P1/P2）：

### 🚨 P1 · 阻塞性
- **[#68915](https://github.com/NousResearch/hermes-agent/issues/68915)** Worker 在 shell `&` 后台化场景下进入永久 Python-level 死锁。LLM 给出的 `cd X && node server.js &` 校验场景常见，**目前无明确 fix PR**。

### ⚠️ P2 · 高优先（节选）
| Issue | 标题 | 是否已有 fix PR |
|---|---|---|
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) | Desktop/TUI 活跃会话租约泄漏 | ❌ 无 |
| [#68979](https://github.com/NousResearch/hermes-agent/issues/68979) | 长线程压缩后会话消息顺序紊乱 | ❌ 无 |
| [#68920](https://github.com/NousResearch/hermes-agent/issues/68920) / [#68895](https://github.com/NousResearch/hermes-agent/issues/68895) | 孤立 composer 队列项无法清空 | ❌ 无 |
| [#65868](https://github.com/NousResearch/hermes-agent/issues/65868) | Hermes Desktop v0.17.0 在 Rust→V8 IPC bridge 反复崩溃（SIGTRAP） | ❌ 无 |
| [#68990](https://github.com/NousResearch/hermes-agent/issues/68990) | TUI 流式渲染时丢失/重复泰文组合字符 | ✅ [#69032](https://github.com/NousResearch/hermes-agent/pull/69032)、[#69024](https://github.com/NousResearch/hermes-agent/pull/69024) 双 PR 已就位 |
| [#69008](https://github.com/NousResearch/hermes-agent/issues/69008) | OpenRouter `deepseek-v4-flash` 工具连续调用被拒 | ❌ 无 |
| [#69033](https://github.com/NousResearch/hermes-agent/issues/69033) | Windows 本地 terminal 工具遗留 bash/find/grep 子进程 | ❌ 无 |
| [#68911](https://github.com/NousResearch/hermes-agent/issues/68911) | Gateway 强制 redact E.164 电话号码无 opt-in 通道 | ❌ 无 |
| [#68943](https://github.com/NousResearch/hermes-agent/issues/68943) | 移除 API | Provider 后模型列表残留 | ❌ 无 |
| [#68944](https://github.com/NousResearch/hermes-agent/issues/68944) | `hermes mcp add` 中 `--env` 静默吞入 `--args` | ❌ 无 |

### 👍 P3 / Crash 级
- **[#65868](https://github.com/NousResearch/hermes-agent/issues/65868)** Hermes Desktop macOS 在 `electron@40.10.2` 中因 Rust→V8 桥接出现 SIGTRAP，main process abort on update-skew。
- **[#68989](https://github.com/NousResearch/hermes-agent/issues/68989)** Telegram 适配器在 Docker 容器内"完整 Gateway 进程"中无限挂起（单独运行不复现）。

**健康度判断**：今日涉及 Desktop 端的 Crash/泄漏/渲染问题扎堆，**短板集中在桌面应用**。服务端、CLI 表现相对稳健。

---

## 6. 功能请求与路线图信号

按采纳概率排序：

1. **Memory Backends 可配置化（[#47349](https://github.com/NousResearch/hermes-agent/issues/47349)）** — 13 评论、`needs-decision` 标签，建议合并 `MEMORY.md` 与 `USER.md` 为 `RULES.md`，接入 honcho / fact_store。提案成熟，**最有可能进入下一迭代**。
2. **受保护 Skills（[#25083](https://github.com/NousResearch/hermes-agent/issues/25083)）** — 安全相关，呼声稳步累积。
3. **`send_message` 插件平台扩展点（[#64900](https://github.com/NousResearch/hermes-agent/issues/64900)）** — 与插件生态扩张策略一致。
4. **Desktop 设置页搜索（[#69025](https://github.com/NousResearch/hermes-agent/issues/69025)）** + **可搜索时区下拉（[#68970](https://github.com/NousResearch/hermes-agent/issues/68970) / [#69025 PR](https://github.com/NousResearch/hermes-agent/pull/69025)）** — 已对应 PR [#68969](https://github.com/NousResearch/hermes-agent/pull/68969)，合并可期。
5. **`Atomic Hermes` 移动端 send_message 支持（[#68951](https://github.com/NousResearch/hermes-agent/issues/68951)）** — 跨端一致性的合理诉求。
6. **Per-function 工具过滤（[#68964](https://github.com/NousResearch/hermes-agent/issues/68964)）** — 现有 toolset 粒度过粗，社区需求明确。
7. **智能审批注入受信任网络上下文（[#68701](https://github.com/NousResearch/hermes-agent/issues/68701)）** — 减少内网 mesh 流量的误报。
8. **TUI `/compress` 期间允许 type-ahead（[#61042](https://github.com/NousResearch/hermes-agent/issues/61042)）** — UX 改进。

PR 一侧已落地的"未来形状"：
- **[#68306](https://github.com/NousResearch/hermes-agent/pull/68306)** TUI widget-app SDK（state + reducer + render）— 大幅扩展 TUI 可编程表面。
- **[#68857](https://github.com/NousResearch/hermes-agent/pull/68857)** 跨 CLI / TUI / Desktop 统一主题 SDK，热生效。

---

## 7. 用户反馈摘要

提炼自高评论 Issue 的痛点：

- **"硬编码 memory 让我无法接入真实事实库"** — `#47349` 的核心抱怨：MEMORY.md / USER.md 写死并冻结注入，违反 RAG 时代对可插拔后端的预期。
- **"我的 web 工具一直不工作，错误提示误导"** — `#27683`：新装用户首用 web 工具，体验破裂。
- **"agent 篡改了我的核心 skill"** — `#25083`：技能目录缺乏"不可写"语义，用户担忧安全治理。
- **"Desktop 会话数莫名其妙被占满"** — `#68920`：单活跃会话却触发 `max_concurrent_sessions` 上限。
- **"生成的图片明明在本地，却显示 [Image blocked]"** — `#38786` 👍=2：Windows 路径与桌面渲染管线的衔接错误，且无明确归因。
- **"Chatbot token 在多 Profile 下错用默认 Profile 的"** — `#54675` 👍=2：用户在多业务接入时对凭据隔离的强烈需求。
- **"Ollama 模型想用 web search 但找不到入口"** — `#23207`：与 openclaw 体验落差。
- **"TUI 不让我边压缩边打字"** — `#61042`：长会话下交互节奏卡顿。
- **"泰文显示被乱码"** — `#68990`：泰语等组合字符脚本的国际化 bug，影响真实工作场景。

可观测的正向信号：#38786、#54675 等被标记 `sweeper:implemented-on-main`，意味着社区反馈确实在快速回流到 main 分支。

---

## 8. 待处理积压 · 维护者关注提醒

- **[#47349](https://github.com/NousResearch/hermes-agent/issues/47349)**（创建于 2026-06-16，已 1 个月）— 当前最热讨论但 `needs-decision`，维护者尚未给出方向性回复，建议立项 RFC。
- **[#25083](https://github.com/NousResearch/hermes-agent/issues/25083)**（2026-05-13，约 2 个月）— 受保护 skills 提案，无明确归属。
- **[#23207](https://github.com/NousResearch/hermes-agent/issues/23207)**（2026-05-10，超过 2 个月）— Ollama 模型 web search 入口缺失，用户反馈与 openclaw 体验存在差距。
- **[#61042](https://github.com/NousResearch/hermes-agent/issues/61042)**（2026-07-08，半个月）— TUI `/compress` type-ahead，仍无 PR 关联。
- **[#68915](https://github.com/NousResearch/hermes-agent/issues/68915)**（P1 死锁）— 阻塞级，目前**无对应修复 PR**，建议立即标记 owner。

---

### 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐⭐ | 50 条 Issue / 50 条 PR 更新 |
| 桌面稳定性 | ⭐⭐ | Desktop Crash 与会话泄漏集中爆发 |
| 修复响应速度 | ⭐⭐⭐⭐ | 多项 `sweeper:implemented-on-main` 闭环 |
| 架构演进 | ⭐⭐⭐⭐ | Memory / Plugin / Theme SDK 等多个长期提案并行 |
| 文档/教程 | ⭐⭐⭐ | Kanban 教程存在流程矛盾（[#69021](https://github.com/NousResearch/hermes-agent/issues/69021)） |

**核心建议**：1) 为 #68915 的 P1 死锁指派 owner；2) 对 #47349 Memory Backends 给出 RFC 答复；3) 启动 Desktop 端稳定性专题 sprint。

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-07-22** | **数据周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 仓库今日保持中等活跃度，过去 24 小时内共产生 **16 条更新**（8 条 Issue + 8 条 PR），整体节奏平稳但偏 Bug 修复导向。其中 **Issue 关闭率达 50%**（4/8）、**PR 关闭率约 37.5%**（3/8），显示维护团队响应及时。今日无新版本发布，最新的 v0.3.1 仍在主线上承载。值得注意的是，多个 Issue 与同日或近期 PR 形成明确修复对（auth、seahorse、bot_name、fallback chain），说明社区与维护者协同进入"提出问题 → 提交修复"的良性循环。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新稳定版为 **v0.3.1**，社区已围绕该版本报告多个 Bug（如 #3153、#3281、#3255），下一版本（v0.3.2 或 v0.4.0）的修复范围值得持续关注。

---

## 3. 项目进展（已合并/关闭 PR）

| PR | 标题 | 影响领域 | 意义 |
|---|---|---|---|
| [#3282](https://github.com/sipeed/picoclaw/pull/3282) | feat(nodes): add policy-gated system exec | Nodes / 安全性 | 新增 opt-in `system.exec.v1`，在 slim node 伴侣中引入可治理的系统执行通道，含可执行文件/工作根/环境变量/超时/输出限制，并在持久化接受前后双重校验。**当日创建当日关闭**，合并效率极高，属当日最大功能落地。 |
| [#303](https://github.com/sipeed/picoclaw/pull/303) | fix: make bot greeting name configurable via `bot_name` setting | Channel（Telegram/DingTalk）| 终结 Telegram `/start` 与 DingTalk 回复标题硬编码 "PicoClaw" 的历史问题，让用户可通过 `soul.md` 真正实现自定义身份。**5 个月长跑 PR 终于合入**，呼应 Issue #3255。 |
| [#3233](https://github.com/sipeed/picoclaw/pull/3233) | Fix pr 3222 backward compat | 兼容性 | 为 PR #3222 补充向后兼容路径，避免升级用户配置文件破裂。 |

**进度评估：** 项目今日在节点安全执行能力（#3282）和品牌身份可定制性（#303）两个维度同步推进，是实质性"向前迈步"的一天。

---

## 4. 社区热点

### 讨论最活跃

- **[Issue #3088](https://github.com/sipeed/picoclaw/issues/3088)** —— 用 vodozemac 替代 libolm（9 条评论，2 👍）
  - 长期 stale 但社区关注度高，诉求清晰：libolm 已无人维护且存在安全问题，vodozemac 是官方替代。**标记 `help wanted` + `priority: high`**，但 40+ 天未获实质响应，是当前最迫切的安全债。

- **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** —— Volcengine Doubao Seed tool_call 文本泄漏（5 条评论，已关闭）
  - 反映用户使用国产模型（火山引擎 Doubao）时工具调用兼容性问题的痛点；今日关闭，配套修复路径见 PR #3279。

### 关注度较高

- **[Issue #3203](https://github.com/sipeed/picoclaw/issues/3203)** —— Matrix 同步循环无重连机制（4 条评论，1 👍）
  - 反映了"长连接静默死亡"这一严重生产稳定性缺陷。

**热点信号：** 安全债（libolm）、国产模型兼容性（Volcengine）、连接稳定性（Matrix）是当前三大社区主线诉求。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 现象 | 是否已有修复 PR |
|---|---|---|---|
| 🔴 **高** | [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix 通道 `/sync` 长轮询在网络/服务重启后永久静默死亡，主进程不退出导致 systemd `Restart=on-failure` 不触发 | ❌ 尚无 PR，亟需关注 |
| 🔴 **高** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 单会话历史稍长后输入框严重卡顿 | ❌ 今日新开，待认领 |
| 🟡 **中** | [#3153](https://github.com/sipeed/picoclaw/issues/3153) | Doubao Seed 模型工具调用偶发以 `<seed:tool_call>` 文本泄漏 | ✅ 关联修复 [PR #3279](https://github.com/sipeed/picoclaw/pull/3279)（待合并） |
| 🟡 **中** | [#3274](https://github.com/sipeed/picoclaw/issues/3274) | Antigravity provider 在 main 分支（85dcfcc）出现 `INVALID_ARGUMENT`，从 v0.3.1 回归 | ✅ 已关闭（main 分支已修复） |
| 🟡 **中** | [#3278](https://github.com/sipeed/picoclaw/issues/3278) | Antigravity OAuth 登录被 Google 政策拦截 | ✅ 关联修复 [PR #3280](https://github.com/sipeed/picoclaw/pull/3280)（待合并） |
| 🟢 **低** | [#3232](https://github.com/sipeed/picoclaw/issues/3232) | 未配置 fallback 时 RPM 限速不生效 | ✅ 关联修复 [PR #3200](https://github.com/sipeed/picoclaw/pull/3200)（待合并） |
| 🟢 **低** | [#3255](https://github.com/sipeed/picoclaw/issues/3255) | 钉钉会话列表预览固定显示 "PicoClaw" | ✅ 已通过 [PR #303](https://github.com/sipeed/picoclaw/pull/303) 解决 |

**关键观察：** 7 个 Bug 中 5 个已有关联修复 PR，修复覆盖率 ~71%，仓库 Bug 处理链路相当健康；剩余的两个 P0/P1 级问题（Matrix 重连、Web UI 性能）需维护者主动认领。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 PR | 落地概率评估 |
|---|---|---|
| **可配置默认 fallback 模型链**（解决限速失效、提升多模型调度灵活性） | [#3200](https://github.com/sipeed/picoclaw/pull/3200) | ⭐⭐⭐⭐ 极高，已与 #3232 形成闭环，API + Web UI 全链路改造，社区刚需 |
| **用 vodozemac 替代 libolm**（端到端加密安全债） | ❌ 无 | ⭐⭐⭐ 中等，标 `help wanted` 高优先级，但需投入移植工作 |
| **节点策略化系统执行**（slim node 伴侣）| [#3282](https://github.com/sipeed/picoclaw/pull/3282) | ⭐⭐⭐⭐⭐ 已合并，下版本可用 |
| **Anthropic 提示缓存支持**（`SystemParts` + `cache_control`）| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | ⭐⭐⭐ 高价值性能优化，但仍 OPEN 待审 |
| **Feishu 原生音视频消息类型**（不再降级为文件下载）| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | ⭐⭐⭐⭐ 已实现，需 Review |

**路线图预判：** v0.3.x 后续版本大概率会整合 #3200 + #3228 + #3256 + #303 等已进入流程的功能；libolm → vodozemac 的迁移是潜在的下一个 breaking change 候选。

---

## 7. 用户反馈摘要

**真实痛点：**
- **品牌身份僵硬** —— 多个用户（#303、#3255）希望自定义 bot 名称，"硬编码 PicoClaw"在群聊/钉钉预览中暴露工程化痕迹，与 `soul.md` 自定义角色冲突。✅ 已解决。
- **国产模型兼容性边缘场景** —— Doubao Seed、Antigravity 等新接入 provider 在工具调用 schema 转换与 OAuth 流程上仍有粗糙之处（#3153、#3274、#3278），影响国内云与企业部署体验。
- **长连接稳定性盲区** —— Matrix 用户（#3203）反馈 systemd 守护失效后无任何告警，意味着线上故障只能依赖用户主动报修，运维体验差。
- **Web UI 性能边界** —— v0.3.1 Web UI（#3281）随会话长度增加出现明显输入卡顿，提示前端虚拟滚动或状态管理存在性能瓶颈。
- **限速配置失效** —— #3232 用户反馈"按文档配了 RPM 却无效"，反映文档/默认值/配置优先级之间存在认知不一致。

**使用场景：** 用户已普遍在 Docker（gpt-5.5、antigravity）、Azure VM、CGO 静态编译等生产化部署场景使用，对兼容性与可观测性要求显著提升。

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 标题 | 状态 | 积压天数 |
|---|---|---|---|
| [#3088](https://github.com/sipeed/picoclaw/issues/3088) | use vodozemac instead of libolm | OPEN / stale / **high priority** | **43 天** |
| [#3203](https://github.com/sipeed/picoclaw/issues/3203) | Matrix sync loop 无重连逻辑 | OPEN | 20 天 |
| [#3256](https://github.com/sipeed/picoclaw/pull/3256) | fix(feishu): 原生音视频消息 | OPEN / stale | 8 天 |
| [#3228](https://github.com/sipeed/picoclaw/pull/3228) | fix(anthropic-messages): SystemParts + cache_control | OPEN / stale | 16 天 |
| [#3200](https://github.com/sipeed/picoclaw/pull/3200) | feat(models): 可配置 fallback 链 | OPEN | 21 天 |
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史卡顿 | OPEN（今日新开）| 0 天 |

**优先级建议：** 维护者应优先推进 **#3088（安全债）** 与 **#3200（功能闭环）**；同时为 **#3281、#3203** 寻找 owner，避免再次进入 stale 状态。

---

### 📊 项目健康度仪表盘

| 指标 | 数值 | 评估 |
|---|---|---|
| 24h Issue 活动 | 8 | 🟢 正常 |
| 24h PR 活动 | 8 | 🟢 正常 |
| Issue 关闭率 | 50% | 🟢 良好 |
| Bug → PR 覆盖率 | ~71% | 🟢 优秀 |
| Stale Issue 占比 | 37.5%（3/8）| 🟡 需关注 |
| 安全债 | libolm 替换 | 🔴 长期未推进 |
| 新版本发布 | 0 | 🟡 距 v0.3.1 已逾 3 周 |

**整体判断：项目处于"活跃维护 + 持续迭代"的健康状态，Bug 修复链路顺畅，但需警惕安全债（#3088）与长连接稳定性（#3203）这两类可能引发生产事故的隐患。**

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：2026-07-22**
**数据范围：过去 24 小时**

---

## 1. 今日速览

NanoClaw 过去 24 小时保持中等开发活跃度，共产生 1 条新 Issue 与 12 条 PR 更新（9 条待合并 / 3 条关闭）。当日 PR 主题高度集中于 **WhatsApp 通道的媒体处理回归修复**、**容器运行环境的兼容性问题**（SELinux、WORKDIR、端口冲突）以及 **多通道扩展**（LINE、Dial）。3 条 PR 被关闭（2 条重复/同步类、1 条文档重写），未见新增 Release，整体处于「修修补补 + 生态扩展」并行的状态，项目健康度良好。

---

## 2. 版本发布

**无新版本发布。**

---

## 3. 项目进展

过去 24 小时内合并/关闭的 3 条 PR：

| PR | 标题 | 类型 | 影响 |
|---|---|---|---|
| [#3116](https://github.com/qwibitai/nanoclaw/pull/3116) | sync pr | Sync | 同步类 PR，已关闭（推测为重复或无需合并） |
| [#3114](https://github.com/qwibitai/nanoclaw/pull/3114) | Langfuse tracing skill | Skill | LLM 可观测性工具提案，已关闭（可能未达技能准入标准） |
| [#3095](https://github.com/qwibitai/nanoclaw/pull/3095) | docs: rewrite branch maintenance guide | Docs | **核心团队合并**：将分支维护指南重写为 registry-branch 模型，统一社区贡献者对分支管理流程的理解 |

**整体推进评估**：今日直接合并的功能性代码较少，#3095 文档改写是为后续多通道/多技能协作铺路，属于「基础设施级」贡献。Langfuse tracing 与 sync 类 PR 关闭，说明维护团队对技能准入有把关标准，对生态质量有控制。

---

## 4. 社区热点

| 排名 | Issue / PR | 评论数 | 关注点 |
|---|---|---|---|
| 🥇 | [Issue #3096](https://github.com/qwibitai/nanoclaw/issues/3096) `/add-line` LINE 官方账号通道支持 | **3 条评论** | 区域化通道诉求 |
| 🥈 | [PR #2896](https://github.com/qwibitai/nanoclaw/pull/2896) WhatsApp 入站边界 media-failure note 修复 | 持续 review | 回归修复 |
| 🥉 | [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050) Dial 通道 picker + wizard 集成 | 持续迭代 | 多通道扩展 |

**诉求分析**：

- **#3096（LINE 通道）**：用户 [joshm1230212](https://github.com/joshm1230212) 提出为日本、台湾、泰国主流通讯工具 LINE 增加官方账号支持，是迄今讨论最多的当日议题。这表明项目受众已从英语圈扩展到东亚市场，区域化诉求强烈。
- **#3050（Dial 通道）**：另一条长期推进的 PR，将 Dial 加入初始设置向导，反映社区希望「开箱即用」地接入更多企业 IM。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级

| PR | 描述 | 严重程度 | 是否已有 fix PR |
|---|---|---|---|
| [#2896](https://github.com/qwibitai/nanoclaw/pull/2896) | WhatsApp 审批问答路径上 `appendMediaFailureNote` 顺序错误导致回归 | 高（影响审批工作流） | ✅ 已有 fix PR（#2896 本身），是 #2895 的 follow-up |
| [#3113](https://github.com/qwibitai/nanoclaw/pull/3113) | WhatsApp 入站媒体应暂存到容器可读的目录 | 高（容器读不到媒体） | ✅ 已有 fix PR |

### 🟡 中优先级

| PR | 描述 | 严重程度 | 是否已有 fix PR |
|---|---|---|---|
| [#2236](https://github.com/qwibitai/nanoclaw/pull/2236) | 容器 WORKDIR 与实际挂载路径 `/workspace/agent` 不一致，导致工作目录默认指向空目录 | 中（Agent 工作空间不可见） | ✅ 已有 fix PR，自 2026-05-03 开放至今未合并（**⚠️ 积压 80 天**） |
| [#1530](https://github.com/qwibitai/nanoclaw/pull/1530) | Docker 卷挂载在 SELinux 强制系统（Fedora/RHEL）失败，未添加 `:z` 重标记 | 中（特定发行版完全无法使用） | ✅ 已有 fix PR，自 2026-03-29 开放（**⚠️ 积压 114 天**） |
| [#3115](https://github.com/qwibitai/nanoclaw/pull/3115) | OneCLI 未屏蔽 Gmail 旧 API 路由 `www.googleapis.com`，Gmail 策略可被绕过 | 中（安全策略缺口） | ✅ 已有 fix PR |

### 🟢 低优先级 / 体验类

| PR | 描述 | 严重程度 | 是否已有 fix PR |
|---|---|---|---|
| [#3111](https://github.com/qwibitai/nanoclaw/pull/3111) | Telegram 旧 Markdown 解析器剥离包含下划线的 URL（如 GitLab `/-/merge_requests/`），3 次重试后消息被静默丢弃 | 中低（特定场景） | ✅ 已有 fix PR |
| [#3112](https://github.com/qwibitai/nanoclaw/pull/3112) | `onecli setup` 在主机已运行 PostgreSQL 的情况下因 5432 端口冲突失败 | 中低（环境冲突） | 📝 文档 PR（非代码修复） |

**稳定性结论**：当前有多个被广泛使用的发行版（Fedora/RHEL）和通道（WhatsApp、Telegram、Gmail）存在已知 bug，但均有对应 fix PR 待合并。**主要风险不在发现能力，而在合并速度。**

---

## 6. 功能请求与路线图信号

### 明确的功能请求

| 需求 | 提出形式 | 路线图可能性 |
|---|---|---|
| **LINE 官方账号通道** | [Issue #3096](https://github.com/qwibitai/nanoclaw/issues/3096) 提案 `/add-line` skill | 🟢 高 — 已有专门的 RFS 流程支持通道扩展 |
| **Dial 通道集成** | [PR #3050](https://github.com/qwibitai/nanoclaw/pull/3050) 完整实现 + wizard | 🟢 高 — 代码已完成，待评审 |
| **Traditional Chinese README** | [PR #2950](https://github.com/qwibitai/nanoclaw/pull/2950) | 🟢 高 — 与 LINE 区域化诉求同步 |

### 间接信号

- **OneCLI 安全加固**（[PR #3115](https://github.com/qwibitai/nanoclaw/pull/3115)）和**端口冲突文档化**（[PR #3112](https://github.com/qwibitai/nanoclaw/pull/3112)）显示团队开始将 OneCLI 视为「产品化部署入口」，未来可能推出更多企业部署相关功能。
- **Langfuse tracing skill**（[#3114](https://github.com/qwibitai/nanoclaw/pull/3114)）虽被关闭，但反映了 LLM 可观测性需求——后续可能以更规范的形式重新提交。

---

## 7. 用户反馈摘要

从 Issue #3096 的 3 条评论中提炼：

- **痛点**：LINE 在日本/台湾/泰国是事实标准通讯工具，NanoClaw 当前未覆盖，存在显著的东亚用户空白。
- **使用场景**：提案者引用 README 的 RFS 流程，主动按照官方规范提交，说明社区贡献者对项目治理结构接受度高。
- **技术细节**：评论中提到需要补全 `@chat-adapter/line` 包和 SKILL.md，意味着用户对项目架构有较深入理解。
- **满意度侧**：未见负面反馈，今日讨论氛围以「建设性提案」为主。

其他 PR 评论数均未公开，但 PR #2896（WhatsApp 修复）从标题看是 review 推动的二次提交，反映维护者对代码质量要求严格。

---

## 8. 待处理积压

⚠️ **需要维护者关注的长周期 PR**：

| PR | 标题 | 开放天数 | 状态 |
|---|---|---|---|
| [#1530](https://github.com/qwibitai/nanoclaw/pull/1530) | SELinux `:z` 标签修复 | **114 天** | OPEN，自 2026-03-29 至今 |
| [#2236](https://github.com/qwibitai/nanoclaw/pull/2236) | WORKDIR 对齐 | **80 天** | OPEN，自 2026-05-03 至今 |
| [#2896](https://github.com/qwibitai/nanoclaw/pull/2896) | WhatsApp media-failure note follow-up | 22 天 | OPEN，2026-06-30 |
| [#3050](https://github.com/qwibitai/nanoclaw/pull/3050) | Dial 通道 picker | 8 天 | OPEN，2026-07-14 |
| [#2950](https://github.com/qwibitai/nanoclaw/pull/2950) | 繁体中文 README | 18 天 | OPEN，2026-07-04 |

**建议**：#1530（SELinux）和 #2236（WORKDIR）已开放超 2 个月且均为明确 bug 修复，建议维护者优先评审合并，以释放积压信号并提升 Fedora/RHEL 用户与容器场景的可用性。

---

## 📊 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 12 PR + 1 Issue，节奏稳健 |
| 合并速度 | ⭐⭐ | 3 条关闭无正式合并，2 条 PR 积压超 2 个月 |
| 社区参与 | ⭐⭐⭐⭐ | 跨地区贡献者（东亚、欧美），主动遵循 RFS 流程 |
| 文档同步 | ⭐⭐⭐⭐ | 繁体中文 README、端口冲突文档、branch 维护指南并行推进 |
| 稳定性 | ⭐⭐⭐ | 多个已识别 bug 等合并，存在分发渠道兼容性风险 |

**总评**：项目处于「稳定扩张期」，生态扩展（通道/技能）与基础设施修复同步进行；建议维护者关注积压 PR，以避免社区贡献者流失。

---

*报告基于 2026-07-22 抓取的 GitHub 数据生成。所有链接均指向 [github.com/qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-22

**项目**: [nearai/ironclaw](https://github.com/nearai/ironclaw) ｜ **报告日期**: 2026-07-22 ｜ **数据窗口**: 过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日处于 **高密度合并与重构阶段**，围绕着 2 天前（07-20）发布的 **v1.0.0-rc.1** 持续推进 Reborn 架构落地收尾工作。过去 24 小时共产生 **41 条 Issue 更新**（新开/活跃 27、已关闭 14）与 **50 条 PR 变动**（待合并 33、已合并/关闭 17），其中绝大多数实质性 PR 与 Issue 都聚焦于 "Reborn" 主线架构的一致性与债务清理。整体可视为发布前的稳态强化期：依赖更新（Dependabot）和边界/见证者（witness）型架构加固同步推进。**健康度评估**：方向明确、社区反馈未大规模涌入，但需关注 #6432 在缺失 HIGH 级别 review fix 的情况下被合并的流程信号。

---

## 2. 版本发布

### 🚀 [ironclaw-v1.0.0-rc.1](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.0.0-rc.1)（2026-07-20）

首个发布候选版本，**非小版本迭代**，而是从零重写的 Reborn 架构：

- **重写范围**：agent 运行时、存储层、extension host、Web UI 全部重建
- **CLI 变化**：`ironclaw` 二进制被替换为重新设计的 CLI；旧 v1 单体不再作为 `ironclaw` 命令入口
- **定位**：v1.0.0 的候选版本，发布说明明确建议用于评估、集成测试与早期采用

**迁移注意事项**：
1. 升级前请分离 v1 与 reborn 的配置/数据目录，二进制语义不兼容
2. 不应从 0.29.x 系列平滑滚动升级；请按项目公布的迁移手册重新初始化
3. 关注后续的 RC 修订版本，预计会有 1～2 次 RC 解决 #2987 主 Epic 中尚未完成的工作项

---

## 3. 项目进展

### 3.1 已合并 / 关闭的重要 PR

| PR | 标题 | 风险 | 影响 |
|---|---|---|---|
| [#6432](https://github.com/nearai/ironclaw/pull/6432) | feat(reborn): witness always-present + §5.2.1 origin→gate matrix + dispatch-through-witness | Low | 完成 §5.3.2 路径上"单一权威站点"的同步派发部分,推动 #6396 前进 |
| [#6430](https://github.com/nearai/ironclaw/pull/6430) | Remove in-memory ratchet stores | Medium | 关闭 subagent goals、OpenAI-compat refs、instruction materialization 三个内存型 store,迁移至 fs 后端,完成 [Issue #6263](https://github.com/nearai/ironclaw/issues/6263) 的前置条件 |
| [#6196](https://github.com/nearai/ironclaw/pull/6196) | build(deps): bump dompurify 3.2.3→3.4.11 | Low | WebUI 前端安全组件升级,修复 DOMPurify 已知问题 |

### 3.2 整体推进度判断

- **架构一致性**: §5.2.1 / §5.3.2 / §9 的"single authority site"与 witness 矩阵两条主线在 24 小时内各有一个 PR 落地,#6263、#6396 均向前显著推进。
- **依赖卫生**: 多个 Dependabot PR (#6431, #6428, #6361, #6440) 涵盖 Rust 全量、tokio-ecosystem、serde 组以及前端 dompurify,显示项目对供应链安全的常态化维护。
- **下一步阻塞点**: 复盘 PR [#6436](https://github.com/nearai/ironclaw/pull/6436) 明确指出 [#6432](https://github.com/nearai/ironclaw/pull/6432) 的 2 条 HIGH review 修复未随合并一起落地。这意味着 review→merge 流程存在 race condition,建议维护者追加 post-merge 守门机制。

---

## 4. 社区热点

### 4.1 高评论 Issues（按评论数排序）

| 排名 | Issue | 标题 | 评论数 | 状态 |
|---|---|---|---|---|
| 1 | [#2987](https://github.com/nearai/ironclaw/issues/2987) | [EPIC] Track Reborn architecture landing strategy and grouped PR plan | 44 | OPEN · P2 |
| 2 | [#6263](https://github.com/nearai/ironclaw/issues/6263) | §4.3 final store consolidation: retire InMemoryTurnStateStore | 10 | CLOSED |
| 3 | [#6389](https://github.com/nearai/ironclaw/issues/6389) | Phase 4: collapse build_local_runtime + build_production_shaped into one build_runtime(cfg) | 10 | OPEN |
| 4 | [#2767](https://github.com/nearai/ironclaw/issues/2767) | Epic: Separate engine v2 capability background from callable tool schemas | 7 | CLOSED |
| 5 | [#3036](https://github.com/nearai/ironclaw/issues/3036) | [EPIC] Configuration-as-Code for IronClaw Reborn: tenant blueprints | 7 · 👍1 | OPEN · P2 |
| 6 | [#3031](https://github.com/nearai/ironclaw/issues/3031) | [EPIC] Reborn product surface migration | 7 | OPEN · P1 |
| 7 | [#2792](https://github.com/nearai/ironclaw/issues/2792) | Epic: Gateway state convergence — eliminate UI/backend state drift | 5 | OPEN |

### 4.2 诉求分析

- **架构收敛共识（#2987, #3031, #6389）**: 当前讨论集中在如何把多个 build/runtime 路径合并为统一入口,体现社区对"不再分层暴露内部结构"的强烈诉求。
- **开发者体验（#3036 👍1）**: 配置即代码（tenant blueprints / use-case harnesses）获得首个正反馈,是产品化方向的关键投资信号。
- **前端状态可靠性（#2792）**: "前端必须是后端的纯函数"诉求持续 3 个月以上,基于 v1.0.0-rc.1 的发布,该 issue 进入可落地窗口期。

---

## 5. Bug 与稳定性

> 数据窗口内未检出明确的"崩溃/回归/P0 缺陷"Issue,绝大多数为 EPIC 和 Refactoring。但检出以下需重点关注的稳定性与质量信号:

| 严重度 | 编号 | 主题 | 状态 |
|---|---|---|---|
| 🟠 中 | [#6394](https://github.com/nearai/ironclaw/issues/6394) | Epic: Dogfooding & QA bug fixing 07/20 - 07/24 | OPEN（专项 bug 修复追踪）|
| 🟠 中 | [#6432 → #6436](https://github.com/nearai/ironclaw/pull/6436) | #6432 合并时遗漏 2 条 HIGH review fixes,需 #6436 补齐 | 补提 PR #6436 已 OPEN |
| 🟡 低 | [#6425](https://github.com/nearai/ironclaw/pull/6425) | fix(webui): restore SSE streams across navigation | OPEN,已有 fix PR |
| 🟡 低 | [#6437](https://github.com/nearai/ironclaw/pull/6437) | fix(reborn): make model-visible failures recoverable | OPEN,与 #6284 EPIC 联动 |

**判断**: 没有外部用户报告的紧急故障,稳定性风险集中在 RC 阶段内部 dogfooding 与代码评审流程。**建议关注**: #6394 是 07-20 ~ 07-24 周期内的滚动 QA 收集器,有任何用户反馈都应回流到此 issue。

---

## 6. 功能请求与路线图信号

### 6.1 新提交的功能请求

- **[#6433](https://github.com/nearai/ironclaw/issues/6433)** Feature: Dedicated custom instructions / master prompt section
  - 来自 `@sergeiest`,7-21 新开。明确对标 ChatGPT / Claude 的"主提示词"配置面板。
  - **路线图判断**: 与 Reborn 产品表面迁移（#3031）及设置面板（[Issue #2792](https://github.com/nearai/ironclaw/issues/2792) 前端状态收敛）天然契合。**高概率在 v1.0 GA 前或紧随 GA 后落地**,因为它填补的是最基础的"个人助手"心智模型。

### 6.2 长期追踪的高价值 Epic

- **[#2355](https://github.com/nearai/ironclaw/issues/2355)** Epic: persistent multi-identity agent browsing via Chrome + CDP — 长期开放,需 Rust 内置工具 + CDP + 加密 profile 持久化,工作量大。
- **[#2392](https://github.com/nearai/ironclaw/issues/2392)** Host-level multi-account support for messaging channels — WeCom 触发的多账号需求,跨 Slack/Telegram/WeCom。
- **[#5261](https://github.com/nearai/ironclaw/issues/5261)** Reborn capability policy: admin-shared tools & skills with per-user auth — 已在今日关闭,Reborn 栈已具备此类能力。

---

## 7. 用户反馈摘要

> 今日 Issues 主要为内部 Epic 追踪和 reviewer 讨论,**缺少大量直接的终端用户评论**。从可读评论中可提炼以下趋势:

- **配置与诊断是用户最直白的痛点**: [#3036](https://github.com/nearai/ironclaw/issues/3036) 中提到的"今天操作者必须手动混编 .env / 工作区文档 / settings JSON / 扩展安装 / 运行时标志,且无 schema、无 diff、无审计、无源代码管理",是目前最尖锐的运维抱怨。
- **透明度诉求**: [#4533](https://github.com/nearai/ironclaw/issues/4533)（今日关闭）的核心是 Reborn 不可"自我诊断、自我排错",直到补齐 doctor / logs / setup API 才被视为可替换 V1。
- **AI 时代的开发者效率诉求**: [#6284](https://github.com/nearai/ironclaw/issues/6284) 的 recoverability contract 把"模型必须从 100% 错误中恢复"作为终局标准,呼应了社区对 agent 内循环稳定性的高期待。

---

## 8. 待处理积压（需要维护者关注）

| # | 类型 | 标题 | 创建日期 | 关注理由 |
|---|---|---|---|---|
| [#5598](https://github.com/nearai/ironclaw/pull/5598) | PR · XL | chore: release（ironclaw_common 0.4.2→0.5.0,⚠ 破坏性变更）| 2026-07-03 | 已开 **19 天**,与 RC 节点相关,带 ⚠ API breaking 标签,需确认是否纳入 RC1 或推迟到 v1.0 final |
| [#6116](https://github.com/nearai/ironclaw/pull/6116) | PR · XL | feat(reborn): unified generic extension runtime + Option A state machine (reconcile main) | 2026-07-15 | 跨 92 commits 的合并,7-22 已关闭,需确认是否落地或回滚分片 |
| [#5503](https://github.com/nearai/ironclaw/pull/5503) | PR · XL | [Experiment] Add compact Google extension capabilities | 2026-07-01 | 已 21 天未决,实验性 PR 是否纳入 RC 路径需明示 |
| [#6205 类似的 Onboarding epic](https://github.com/nearai/ironclaw/issues/6394) | Epic | QA bug fixing 滚动窗口 | 周一启动 | 维护者应在周五统一回顾并归档 |
| [#4632](https://github.com/nearai/ironclaw/issues/4632) | Epic | [Epic] Build out Reborn WebUI v2 end-to-end smoke coverage | 2026-06-09 | 与 RC 强相关,接近 5 周仍未结案,需产品/QA 介入 |

**风险提示**: 合并与开放的 PR 中有相当比例（数项 XL）的代码量级较高，建议在 v1.0 final 之前为每个 RC 引入"PR size-budget"的上限（推荐单 PR < ~500 LOC,大型工作以 Epic 切分为多 PR），避免 #6432 类 "HIGH 修复漏合并" 的事件在 v1.0 后再次发生。

---

### TL;DR

> IronClaw v1.0.0-rc.1 已发布,Reborn 架构进入"补齐债务、统一入口"的关键一周。架构师社区主动加压,内部 Epic 推进顺畅,#2987 / #3031 / #3036 是后续 1~2 周最值得追踪的主线 Issue;外部用户最重要的新增声音是"主提示词"功能 [#6433](https://github.com/nearai/ironclaw/issues/6433)。建议维护者优先处理:RC 范围内待决 PR、流程侧的 review-merge race、以及 Dogfooding EPIC [#6394](https://github.com/nearai/ironclaw/issues/6394) 的滚动归档。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-07-22**
**项目地址：** [github.com/netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日呈现高活跃度的开发态势：过去 24 小时内共有 10 个 PR 更新、1 个 Issue 活跃，其中 5 个 PR 已被合并/关闭，标志着项目在协作（cowork）、Artifacts 分享、OpenClaw 通信、Windows 自动更新等多个方向同步推进。值得注意的是，PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373) 直接响应了长期未解决的 Issue [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)，说明维护团队对图片附件与模型能力同步问题已形成明确修复路径。整体而言，项目健康度良好，PR 流转顺畅，无新增版本发布。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

今日共有 5 个 PR 完成合并/关闭，项目在以下方向取得实质进展：

| PR | 模块 | 核心变更 | 链接 |
|---|---|---|---|
| **#2372** | main / openclaw | 修复 OpenClaw Token 代理 SSE 流截断问题，提升代理通道稳定性 | [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) |
| **#2371** | renderer / cowork / artifacts | 完善浏览器注释内容与会话状态，支持无评论的元素样式修改、截图元数据保留、webview 标注会话清理 | [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) |
| **#2370** | renderer / artifacts | 统一 Artifacts 分享与部署的订阅拦截弹窗，新增权限判断组件与文案 | [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) |
| **#2369** | renderer / artifacts | 优化 Artifacts 分享访问权限提交流程，区分"创建分享"与"更新权限"主操作 | [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) |
| **#2368** | main / Windows | Windows 平台通过 PowerShell `Start-Process /S` 实现静默自动更新，UAC 拒绝时回退到交互式安装 | [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) |

**整体评估：** 项目在"用户体验打磨"层面推进显著，Artifacts 分享/部署权限流程的连续三个 PR（#2369 → #2370 → #2371）形成完整闭环，加上 Windows 静默更新，构成了今日的主要交付成果。

---

## 4. 社区热点

由于过去 24 小时内 Issues/PRs 评论数普遍较低（多数为 0 条评论），社区互动度处于较低水平。最值得关注的话题点为：

- **图片附件与模型能力同步问题**（Issue [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)）：这是今日唯一活跃 Issue，作者 `btc69m979y-dotcom` 在 4 月 28 日提出，今天更新并已有 2 条评论。问题描述细致，涵盖了"非视觉→视觉"和"视觉→非视觉"两种切换路径下的附件状态错乱，对实际用户体验影响明显，已具备修复 PR（#2373）等待合并。
- **侧边栏广告横幅永久隐藏设置**（PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)）：源自用户反馈 Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)，反映用户对广告展示的长期诉求。

**诉求分析：** 当前社区热点集中在"功能完整性"与"使用体验清洁度"两个维度，反映出用户在多模型切换、订阅引导、广告展示等环节存在较高敏感度。

---

## 5. Bug 与稳定性

### 🔴 已有关联 fix PR 的问题

**Issue #1861 - 图片附件不随模型切换重新处理**
- **严重程度：** 中（功能 Bug，不影响崩溃但导致视觉模型无法读取图片）
- **场景：** 用户在切换支持/不支持图片的模型后，已上传的图片附件仍保留旧的 base64/file path 状态，submit 时送出的格式与目标模型能力不匹配
- **修复状态：** ✅ PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)（作者 `yaodong-shen`）已提交并 OPEN，针对 prompt 构建逻辑做了同步处理，等待合并
- **关联 Issue：** [#1861](https://github.com/netease-youdao/LobsterAI/issues/1861)

### 🟡 已通过今日 PR 修复的稳定性问题

| 问题 | PR | 性质 |
|---|---|---|
| OpenClaw Token 代理 SSE 流截断 | [#2372](https://github.com/netease-youdao/LobsterAI/pull/2372) | 通信可靠性 |
| Artifacts 浏览器注释草稿与会话不同步 | [#2371](https://github.com/netease-youdao/LobsterAI/pull/2371) | 状态一致性 |
| Artifacts 分享/部署订阅门槛判断缺失 | [#2370](https://github.com/netease-youdao/LobsterAI/pull/2370) | 权限校验 |
| Artifacts 分享权限自动创建逻辑缺陷 | [#2369](https://github.com/netease-youdao/LobsterAI/pull/2369) | 交互正确性 |
| Windows 更新弹出安装向导阻断自动化 | [#2368](https://github.com/netease-youdao/LobsterAI/pull/2368) | 更新体验 |

---

## 6. 功能请求与路线图信号

### 强信号：即将/可能进入下一版本的功能

1. **侧边栏广告永久隐藏开关**（PR [#2374](https://github.com/netease-youdao/LobsterAI/pull/2374)）
   - 来源：Issue [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)
   - 实现：在 Settings → General 增加用户级开关，覆盖原有的临时关闭行为
   - 概率：⭐⭐⭐⭐⭐（PR 已就绪，等待 review）

2. **图片附件随模型能力动态同步**（PR [#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)）
   - 直接修复 Issue #1861，逻辑改动清晰
   - 概率：⭐⭐⭐⭐⭐（与活跃 Issue 一一对应）

### 中等信号：Artifacts 体验持续优化

PR #2369、#2370、#2371 形成连续的"分享/部署权限流程优化"系列，暗示团队正将 Artifacts 视为近期重点打磨模块，预计后续还会有相关迭代。

### 弱信号：依赖升级（dependabot）

3 个长期 OPEN 的依赖升级 PR 暂未合并：
- [#1279](https://github.com/netease-youdao/LobsterAI/pull/1279) cross-env 7.0.3 → 10.1.0
- [#1280](https://github.com/netease-youdao/LobsterAI/pull/1280) react-dom 18.3.1 → 19.2.4（React 19 升级，影响面较大）
- [#1281](https://github.com/netease-youdao/LobsterAI/pull/1281) vite 5.4.21 → 8.0.9

> ⚠️ 这三个 PR 标注 `[stale]`，自 4 月 2 日创建后仅在今天被刷新时间戳，长期处于搁置状态。React 19 升级尤为关键，涉及渲染层兼容性，建议维护者评估风险与时机。

---

## 7. 用户反馈摘要

由于今日 Issues 评论区仅在 Issue #1861 有 2 条评论，信息有限。但从 Issue 内容与 PR 描述中可提炼出以下用户痛点：

1. **多模型协作的语义一致性缺失**（来自 #1861）
   - 用户期望：在模型切换后，所有上下文（包括附件处理方式）应自动与新模型能力匹配
   - 当前痛点：视觉/非视觉切换存在"显示正确但行为错位"的隐性 bug，普通用户很难自我排查
   - 满意度：低

2. **Artifacts 订阅门槛体验碎片化**（来自 #2369/#2370 PR 描述）
   - 用户场景：分享文件或部署本地服务时，多次弹窗、模糊文案、自动创建导致状态困惑
   - 团队回应：本次系列 PR 已正面回应，区分了"创建分享"与"更新权限"，并补全中英文文案
   - 满意度：即将改善

3. **广告横幅干扰**（来自 PR #2374 引用的 #2342）
   - 用户期望：一次性永久关闭而非每次手动 dismiss
   - 满意度：低，但即将有解

4. **Windows 更新体验**（来自 #2368）
   - 部署/运维场景下用户希望更新过程无感化
   - 满意度：得到改善

---

## 8. 待处理积压

以下 Issue/PR 长期处于未响应状态，建议维护者关注：

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 链接 |
|---|---|---|---|---|---|
| **#1861** | Issue | 图片附件不随模型切换重新处理 | 2026-04-28 | OPEN，已有关联 PR #2373 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1861) |
| **#1279** | PR | cross-env 7.0.3 → 10.1.0（dependabot） | 2026-04-02 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1279) |
| **#1280** | PR | react-dom 18.3.1 → 19.2.4（dependabot） | 2026-04-02 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1280) |
| **#1281** | PR | vite 5.4.21 → 8.0.9（dependabot） | 2026-04-02 | OPEN / stale | [链接](https://github.com/netease-youdao/LobsterAI/pull/1281) |
| **#2374** | PR | 侧边栏广告永久隐藏设置 | 2026-07-21 | OPEN，新提交 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2374) |
| **#2373** | PR | 图片附件与模型能力同步 | 2026-07-21 | OPEN，新提交 | [链接](https://github.com/netease-youdao/LobsterAI/pull/2373) |

**维护建议：**
- **优先合并 #2373、#2374**：两者均为今日新提交 PR，对应明确的用户反馈，影响面可控，是释放用户期待的最佳切入点。
- **评估 #1280（React 19 升级）**：影响范围较大，需要先做兼容性与渲染回归测试，建议在专门的 spike issue 中讨论升级窗口。
- **清理 #1279、#1281**：cross-env 与 vite 升级相对独立，可在常规维护窗口合并。

---

*报告基于 2026-07-22 公开 GitHub 数据生成。所有链接均指向 `netease-youdao/LobsterAI` 仓库对应编号。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**日期：2026-07-22**
**项目：[moltis-org/moltis](https://github.com/moltis-org/moltis)**

---

## 1. 今日速览

Moltis 项目在 2026-07-22 整体处于**低活跃度**状态。过去 24 小时内仅有 1 个 Issue 更新和 1 个 PR 待合并，均为常规维护类变动，无新版本发布，无重要功能合并或 Bug 修复。社区讨论热度较低，依赖项自动化更新（dependabot）是今日唯一可见的提交动作。建议关注长期挂起的功能请求（如 #574）以及积压 PR 的处理节奏。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发版情况未在本次数据中体现，建议参考 [GitHub Releases 页面](https://github.com/moltis-org/moltis/releases) 获取历史版本信息。

---

## 3. 项目进展

今日无 PR 合并或关闭。仅有 1 条待合并 PR：

- **[#1161](https://github.com/moltis-org/moltis/pull/1161)** — `dependabot[bot]` 提交的依赖更新：将 `/docs` 目录下的 `astro` 从 7.0.9 升级至 7.1.3（npm_and_yarn 组）。该 PR 等待维护者审阅，性质为常规维护更新，不涉及核心功能变更。

**评估：** 项目今日在功能演进层面无明显推进，仅维持文档站点依赖项的常规升级。

---

## 4. 社区热点

今日唯一活跃的 Issue 是：

- **[#574 Model Routing Per topic](https://github.com/moltis-org/moltis/issues/574)** — 由 `azharkov78` 于 2026-04-06 创建，今日（2026-07-22）更新，累计 5 条评论、1 个 👍。该 Issue 为 `[enhancement]` 类型，请求**按主题（topic）进行模型路由**的功能。

**诉求分析：** 用户希望在多模型场景下，能够根据对话主题或上下文自动选择不同的 AI 模型执行推理，以优化成本、性能或专业能力。这是当前 AI Agent/助手领域的常见高级需求，反映出 Moltis 用户群体中存在**多模型编排**的真实使用场景。

---

## 5. Bug 与稳定性

**今日无新 Bug 报告、无崩溃或回归问题记录。**

当前 Issue 列表中也无以 `bug` 标签标记的活跃问题，项目在稳定性方面暂无显著风险信号。

---

## 6. 功能请求与路线图信号

**核心信号：[#574 按主题模型路由](https://github.com/moltis-org/moltis/issues/574)**

- **状态：** OPEN，已存在约 3.5 个月（自 2026-04-06）
- **评论数：** 5
- **关联 PR：** 暂无对应实现 PR

**判断：** 该功能请求已获得一定社区互动，但尚未进入实施阶段。鉴于其属于"高级路由"能力，可能涉及较大的架构改动（如路由策略引擎、模型元数据系统），短期内纳入下一版本的可能性较低，建议关注维护者后续在 Issue 中的回应信号。

---

## 7. 用户反馈摘要

从今日活跃 Issue [#574](https://github.com/moltis-org/moltis/issues/574) 的 5 条评论可提炼以下用户场景与诉求：

- **使用场景：** 用户预期在 Moltis 中同时接入多个 LLM 模型，并希望按任务/主题动态分配。
- **核心痛点：** 当前缺乏细粒度的模型路由机制，可能迫使用户手动切换或在外层应用做路由，增加使用成本。
- **满意度信号：** 👍 数仅为 1，互动规模有限，说明该需求虽合理但尚未形成广泛的社区共识压力。

⚠️ **数据局限说明：** 由于本次数据仅涵盖 Issue 摘要而非完整评论原文，以上反馈分析基于标题与元数据推断，详细诉求需查阅 Issue 原文。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 待处理时长 | 链接 |
|------|------|------|----------|------------|------|
| Issue | #574 | Model Routing Per topic | 2026-04-06 | ~3.5 个月 | [查看](https://github.com/moltis-org/moltis/issues/574) |
| PR | #1161 | chore(deps): bump astro 7.0.9 → 7.1.3 | 2026-07-21 | 1 天 | [查看](https://github.com/moltis-org/moltis/pull/1161) |

**提醒维护者关注：**
- **#574** 已挂起超过 3 个月，建议至少给出官方回应（如 `acknowledged` / `planned` / `needs-design` 等标签），明确该功能是否在路线图中，以降低贡献者期望偏差。
- **#1161** 为低风险依赖更新，建议尽快合并以保持文档站点构建链的时效性。

---

## 总结

Molttis 项目在 2026-07-22 处于**静默维护期**。无新版本、无功能合并、无 Bug 报告，唯一可见动作为 dependabot 文档依赖升级。社区讨论集中在一条已存在 3 个月的模型路由功能请求上，整体健康度需通过更长时间窗口的趋势数据综合判断。

> 📌 本报告基于过去 24 小时窗口数据生成，建议结合周报/月报视角观察项目演进节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报

**日期：2026-07-22**

> 备注：用户提供的仓库为 `agentscope-ai/CoPaw`，但 Issues/PRs/Release 数据中的标题与链接均显示项目名为 **QwenPaw**（如 `agentscope-ai/QwenPaw#6257`）。本日报按数据实际情况统一以 "QwenPaw" 标识。

---

## 1. 今日速览

QwenPaw 仓库在 24 小时内继续保持高活跃度：共处理 42 条 Issue（21 新开/活跃、21 已关闭）和 50 条 PR（20 待合并、30 已合并/关闭），并发布 **v2.0.1-beta.1** 预发布版本。今日重心明显集中在 v2.0 系列上线后的"修缺陷、补回归"阶段，多个高优先级 Bug 集中修复（含 Scroll 会话隔离、计划模式复读、模型 token 上限失效等）；同时 OMP 工作流模式（UltraQA / Ralph / Ultrawork / Autopilot / Team）的治理与安全机制快速推进。整体节奏稳定、社区贡献活跃，但 v2.x 引入的约 2 秒固定开销、Web 控制台移动端适配、内置工具 token 膨胀等问题尚未根治，需关注。

---

## 2. 版本发布

### v2.0.1-beta.1（预发布）

- **发布时间**：2026-07-22（基于 PR 合并时间）
- **链接**：[Release v2.0.1-beta.1](https://github.com/agentscope-ai/QwenPaw/pull/6266)
- **核心变更**：
  - `fix`: 在 Tauri 入口点改用绝对导入（[#6234](https://github.com/agentscope-ai/QwenPaw/pull/6234)）
  - `chore`: 版本号升级至 2.0.1b1（[#6266](https://github.com/agentscope-ai/QwenPaw/pull/6266)）
  - `fix(memoryspace)`: `_saved_tool_refs` 增加 `OSError` 捕获（仅在摘要中可见）
- **破坏性变更**：未明示，从 PR 标题看均为修复性质；建议仍按 beta 渠道谨慎升级
- **迁移注意事项**：Tauri 入口改用绝对导入，若下游自定义构建脚本基于相对路径打包，需同步调整；其余升级可平滑覆盖

---

## 3. 项目进展（今日已合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) | **fix(governance): 通过 @tool_descriptor 和 PluginApi 自动注册工具** | 统一内置/插件工具注册来源，治理白名单、工具默认规则、UI `BuiltinToolConfig` 全部由元数据派生；显著降低手工维护成本 |
| [#5882](https://github.com/agentscope-ai/QwenPaw/pull/5882) | **feat(omp): 集成 OMP 工作流模式 + 扩展 spawn_subagent** | 引入 5 种工作流模式（UltraQA / Ralph / Ultrawork / Autopilot / Team），`spawn_subagent` 支持工具白名单、批量分发、轮询退避 |
| [#6313](https://github.com/agentscope-ai/QwenPaw/pull/6313) | **fix(governance): 刷新插件工具默认值、校验 tool_type** | 修复 #6190 合并后 3 个回归问题（默认值冻结、tool_type 校验、缓存预热时机） |
| [#6270](https://github.com/agentscope-ai/QwenPaw/pull/6270) | **feat: 支持用户可编辑的 agent mode** | 用户可在 UI 中自定义 agent 模式，扩展了 OMP 的可玩性 |
| [#6262](https://github.com/agentscope-ai/QwenPaw/pull/6262) | **feat(agents): 一键复制 agent 配置** | 在 Agent 设置页新增 Copy 操作，支持基于现有配置创建新 agent（不含会话/媒体/内存） |
| [#6183](https://github.com/agentscope-ai/QwenPaw/pull/6183) | **feat(logging): 日志轮转参数可配置** | 新增 `QWENPAW_LOG_MAX_SIZE` / `QWENPAW_LOG_MAX_BACKUPS`，向后兼容旧默认值 |
| [#6079](https://github.com/agentscope-ai/QwenPaw/pull/6079) | **fix: 对 sudo 操作请求用户授权** | 强化高危命令的人工确认 |
| [#5546](https://github.com/agentscope-ai/QwenPaw/pull/5546) | **feat: 泛化治理策略模式** | 为 OMP 模式提供可复用治理框架 |
| [#5088](https://github.com/agentscope-ai/QwenPaw/pull/5088) | **feat: 治理与沙箱接口（初始讨论）** | 长期讨论性 PR，定义治理/沙箱边界 |

**小结**：今日进展集中在 **治理/工具元数据统一** 与 **OMP 工作流模式落地** 两条主线，标志 QwenPaw 2.x 正在向"插件化、可治理、可配置"方向演进。

---

## 4. 社区热点

### 4.1 Issues

| Issue | 标题 | 评论数 | 链接 |
|---|---|---|---|
| [#2291](https://github.com/agentscope-ai/QwenPaw/issues/2291) | 🐾 Help Wanted: Open Tasks — Come Contribute! | **65** | 维护者集中发布新手任务清单，按 P0–P2 优先级排列，今日再次更新 |
| [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | Multiple tool calls produce identical thinking output | **13** | 同一轮多次工具调用共享同一思考块，影响调试与可观测性 |
| [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 两个 subagent 同时开启导致主 agent 无限快速轮询 | **5** | 多 subagent 并发 + 飞书频道无法打断 |
| [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | Console 嵌入维度未发送 `use_dimensions` | **4** | ReMe Light 嵌入维度设置缺失底层开关 |
| [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 希望支持拖拽上传图片/PDF/Office 文档 | **4** | Windows 11 下不可用，影响合同审核等场景 |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web 控制台适配移动端 | **4** | 移动端无法正常使用控制台 |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | 分开控制 channel 工具调用参数和结果 | **4** | 工具结果过长问题 |
| [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | 计划模式反复读取同一文件 | **4** | 已关闭（详见 Bug 部分） |
| [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | 2.0 频繁出现对话进度丢失和无限循环 | **4** | 上下文丢失/重复提问 |
| [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | `model_factory.py` WARNING 误用致日志刷屏 | **4** | 已关闭 |

### 4.2 PR

| PR | 标题 | 链接 |
|---|---|---|
| [#6296](https://github.com/agentscope-ai/QwenPaw/pull/6296) | fix(console): market 安装技能后刷新 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6296) |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | feat(apps): 增加 qwenpaw-creator app | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6284) |
| [#6323](https://github.com/agentscope-ai/QwenPaw/pull/6323) | feat(scroll): 分段压缩 + 指针支持的任务连续性 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6323) |
| [#6317](https://github.com/agentscope-ai/QwenPaw/pull/6317) | fix(omp): 加固 workspace/fork/deny-all 入口 + 回归测试 | [链接](https://github.com/agentscope-ai/QwenPaw/pull/6317) |

**诉求分析**：
- **可观测性**：#6257、#5771 显示用户对"日志/思考块可见性"高度关注
- **多端体验**：#6281、#6297、#6308 共同指向"移动端 + 文件上传"的体验短板
- **工作流自动化**：#5876 反映了工具结果在 channel 中的可定制诉求

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 问题描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 高 | [#6307](https://github.com/agentscope-ai/QwenPaw/issues/6307) | v2.0 引入约 2 秒固定开销（每次简单对话回复） | ⚠️ 待修复 |
| 🔴 高 | [#6299](https://github.com/agentscope-ai/QwenPaw/issues/6299) | 删除会话记录仍残留于 `history.db`，导致 seq 冲突、跨会话污染 | ✅ [#6068](https://github.com/agentscope-ai/QwenPaw/pull/6068) PR 进行中 |
| 🔴 高 | [#6257](https://github.com/agentscope-ai/QwenPaw/issues/6257) | 多工具调用共享同一思考块 | ⚠️ 待修复 |
| 🔴 高 | [#4873](https://github.com/agentscope-ai/QwenPaw/issues/4873) | 双 subagent 并发触发主 agent 无限快速轮询 + 飞书侧无法打断 | ⚠️ 待修复 |
| 🟡 中 | [#5759](https://github.com/agentscope-ai/QwenPaw/issues/5759) | 计划模式重复读取同一文件 5 次 | ✅ 已关闭（疑似 [#6317](https://github.com/agentscope-ai/QwenPaw/pull/6317) 关联） |
| 🟡 中 | [#5860](https://github.com/agentscope-ai/QwenPaw/issues/5860) | v2.0 对话进度丢失 + 无限循环 | ⚠️ 待修复 |
| 🟡 中 | [#6258](https://github.com/agentscope-ai/QwenPaw/issues/6258) | OpenAI 模型 `max_tokens` 不生效 | ⚠️ 待修复 |
| 🟡 中 | [#6242](https://github.com/agentscope-ai/QwenPaw/issues/6242) | 嵌入维度设置未发送至 OpenAI 兼容 API | ✅ 已关闭 |
| 🟡 中 | [#5771](https://github.com/agentscope-ai/QwenPaw/issues/5771) | `model_factory.py` WARNING 误用致日志刷屏 | ✅ 已关闭 |
| 🟡 中 | [#6314](https://github.com/agentscope-ai/QwenPaw/issues/6314) | `RemoteProtocolError: peer closed connection` | ⚠️ 待修复 |
| 🟡 中 | [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) | naive UTC 时间戳被当作本地时区处理 | ✅ [#6309](https://github.com/agentscope-ai/QwenPaw/pull/6309) PR 进行中 |
| 🟢 低 | [#6310](https://github.com/agentscope-ai/QwenPaw/issues/6310) | goal/loop 模式下 reasoning + text 合并错误 | ✅ [#6310](https://github.com/agentscope-ai/QwenPaw/pull/6310) PR 修复中 |
| 🟢 低 | [#6320](https://github.com/agentscope-ai/QwenPaw/issues/6320) | LaTeX 公式含根号无法渲染 | ⚠️ 待修复 |
| 🟢 低 | [#6324](https://github.com/agentscope-ai/QwenPaw/issues/6324) | 大模型响应被截断（MiniMax-M3） | ⚠️ 待修复 |

**稳定性观察**：
- **v2.0 升级痛点集中**：#6307、#5860、#5759、#4873 共同指向 2.x 架构调整带来的副作用
- **历史数据迁移隐患**：#6299 揭示出 `seq` 全局自增 + 删除只清理索引的脏数据问题，对从 v1.x 升级用户影响显著
- **可观测性缺口**：WARNING 误用、思考块重复让生产环境调试困难，建议治理类 PR（[#6190](https://github.com/agentscope-ai/QwenPaw/pull/6190) 系列）后续扩展到日志分级

---

## 6. 功能请求与路线图信号

| Issue | 诉求 | 已相关 PR | 纳入下版本可能性 |
|---|---|---|---|
| [#6297](https://github.com/agentscope-ai/QwenPaw/issues/6297) | 拖拽上传图片/PDF/Office 文档 | 无 | 🟢 高（通用 UX 缺失） |
| [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | Web 控制台适配移动端 | 无 | 🟡 中（需前端重构） |
| [#6308](https://github.com/agentscope-ai/QwenPaw/issues/6308) | Coding 模式支持自定义命令终端 | 无 | 🟡 中 |
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | 分开控制 channel 工具调用参数/结果（可截断） | 无 | 🟢 高（已关闭但诉求未完全满足） |
| [#6083](https://github.com/agentscope-ai/QwenPaw/issues/6083) | Desktop 窗口快速访问工作区产出物 | 无 | 🟢 高（Desktop 用户流程痛点） |
| [#6283](https://github.com/agentscope-ai/QwenPaw/issues/6283) | 在每轮上下文自动附加当前真实时间 | 无 | 🟡 中（与 [#6301](https://github.com/agentscope-ai/QwenPaw/issues/6301) 时区修复方向一致） |
| [#6321](https://github.com/agentscope-ai/QwenPaw/issues/6321) | AGENTS.md 支持工具调用前置条件规则 | 无 | 🟡 中（与治理/工具 descriptor 方向吻合） |
| [#6285](https://github.com/agentscope-ai/QwenPaw/issues/6285) | 支持 `qwen3.8-max-preview` 模型 | 无 | 🟢 高（仅需更新硬编码模型列表） |
| [#6286](https://github.com/agentscope-ai/QwenPaw/issues/6286) | 支持禁用/自定义内置工具描述（节省 8K–10K tokens/请求） | [#6312](https://github.com/agentscope-ai/QwenPaw/pull/6312)（主题模块草稿） | 🟡 中 |
| [#5657](https://github.com/agentscope-ai/QwenPaw/issues/5657) | Loop Detection 机制 | 无 | 🟡 中（[#6241](https://github.com/agentscope-ai/QwenPaw/issues/6241) 已暴露相同问题） |
| [#6284](https://github.com/agentscope-ai/QwenPaw/pull/6284) | qwenpaw-creator app（脚本→素材→分镜→视频） | PR 进行中 | 🟢 高（差异化功能） |

**路线图信号**：用户需求集中在 **移动端/桌面端 UX 完善**、**多模态输入（文件/图片）**、**

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期：2026-07-22**
**仓库：zeroclaw-labs/zeroclaw**
**报告人：开源项目分析师**

---

## 1. 今日速览

ZeroClaw 过去 24 小时社区活跃度处于**中高水位**：共产生 100 条工单交互（50 Issues + 50 PRs），但仅 3 条 Issue 关闭、9 条 PR 合并/关闭，**吞吐量明显低于产出量**。新版本**零发布**，工作重心集中在四条主线：① **Goal 模式闭环**（vrurg 的 stacked PR 栈 #8687→#8688→#8689→#8746→#8996）；② **Eval 评测体系建设**（IftekharUddin 一日提交 3 个关联 PR）；③ **Gateway 兼容层扩展**（OpenAI Chat Completions、Webhook 验证握手）；④ **Provider 流式稳定性修复**（SSE 共享传输、Anthropic tool_use flush）。多张 PR 标记 `needs-author-action` 与 `risk:high`，合并阻力较大，**整体项目健康度评估：中等偏活跃，但需要重点跟进作者响应与评审拥堵**。

---

## 2. 版本发布

**无新版本发布**。过去 24 小时无任何 Release 标签更新。

---

## 3. 项目进展

过去 24 小时已合并/关闭的 3 条 Issue 与 9 条 PR 进展：

| 类型 | 编号 | 标题 | 意义 |
|---|---|---|---|
| Issue 已关 | [#9086](https://github.com/zeroclaw-labs/zeroclaw/issues/9086) | RFC: 结构化安全审计管道（防篡改日志、上传与异常检测） | 关停/转 tracker。AuditLogger Merkle 哈希链（1392 行）仍**未接入生产路径**，主线方向进入追踪阶段 |
| Issue 已关 | [#9120](https://github.com/zeroclaw-labs/zeroclaw/issues/9120) | Bug: SOP 路由在顶层 `when` 为 false 后仍评估 `switch` | 与 #8771 行为修复相关，SOP 控制面继续收口 |
| Issue 已关 | [#7082](https://github.com/zeroclaw-labs/zeroclaw/issues/7082) | feat(channel/mattermost): 增加 WebSocket 监听模式 | 长期挂起的 Mattermost 频道增强正式收尾 |
| Issue 已关 | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Docs: Telegram 示例文档错误 | 文档同步，但用户语气强烈（"slop remains slop"），提示文档质量需系统化校验 |

**项目整体前进进度**：以工单/合并数衡量，今日净增 ~97 条新工单、净合并/关闭 12 条，**项目仍处于"重投入期"而非"收尾期"**。Goal Mode、Eval Harness、OpenAI 适配器三条战略线均有实质性 PR 提交，但因标注 `size:XL` 多、`stacked` 多，距离主线合并仍有距离。

---

## 4. 社区热点

按评论数与互动量排序的热点条目：

### 4.1 高讨论度 Issues（评论 ≥ 3）

1. **[#8226](https://github.com/zeroclaw-labs/zeroclaw/issues/8226) - 为内置 Git 操作增加类型化 per-agent 身份（6 条评论）**
   诉求：在 `AliasedAgentConfig` 中引入非密钥 `runtime_context` 与遮蔽 `runtime_secrets`，解决身份/参数/token 在进程通道与共享 MCP 中的多租户问题。
2. **[#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) - Telegram 频道无法配置（S1 workflow blocked，6 条评论）**
   用户痛点：`zeroclaw channels doctor` 报告频道未配置，即便通过 quickstart 和 zerocode 设置后机器人仍无响应；CLI 中 agent 能回复。属于 quickstart 引导链路崩溃问题。
3. **[#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) - RFC: Goal Mode 用于有界自治会话工作（4 条评论，1 👍）**
   战略级 RFC：填补 ZeroClaw 缺乏"持续追求单一用户目标直至完成/暂停/取消/失败/预算耗尽"的一等模式的空白。
4. **[#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) - RFC: OpenAI Chat Completions 兼容适配器（4 条评论，in-progress）**
   战略级 RFC：让 Open WebUI / LobeChat / 自定义集成无需自行构建适配器即可接入 ZeroClaw。已与 PR [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) 形成 Issue↔PR 闭环。
5. **[#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) - delegate 绕过父级工具白名单（S0 安全风险，3 条评论）**
   子代理可调用被父策略排除的工具，定位为数据丢失/安全风险级别。
6. **[#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) - 频道任务需要一等"故意不回复"结果（3 条评论）**
   讨论 #8394 衍生：条件性频道任务（如"有新邮件告诉我，否则保持沉默"）在条件不满足时仍发送可见回复。
7. **[#8541](https://github.com/zeroclaw-labs/zeroclaw/issues/8541) - Matrix 频道会话按 thread/conversation 范围隔离历史（3 条评论）**
   将 Matrix thread 视为会话边界而非仅投递锚点。
8. **[#8600](https://github.com/zeroclaw-labs/zeroclaw/issues/8600) - 易于按会话切换多模型 provider 中的模型（3 条评论，1 👍）**
   从 moltis 迁移用户的功能缺口诉求。
9. **[#8720](https://github.com/zeroclaw-labs/zeroclaw/issues/8720) - 通过配置文件禁用 Bedrock Nova 2 Lite 的 cachePoint（3 条评论，zerocode）**

### 4.2 高讨论度 PRs

- **[#9194](https://github.com/zeroclaw-labs/zeroclaw/pull/9194)** `feat(secrets): 抽象 KeySource trait + FileKeySource`（REL-mame，risk:high）—— 与 #9086 安全审计方向呼应。
- **[#8949](https://github.com/zeroclaw-labs/zeroclaw/pull/8949)** `feat(gateway): webhook GET + 挑战回显`（JordanTheJet，XL/stacked）—— 频道插件握手补全。
- **[#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486)** `feat(gateway): OpenAI chat completions 端点`（REL-mame，XL，关联 #8603/#8550/#6850）—— 闭环 OpenAI 适配。
- **[#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443)** `feat(matrix): 单消息进度草稿`（vrurg，XL）—— Matrix 流式体验增强。
- **[#8687](https://github.com/zeroclaw-labs/zeroclaw/pull/8687) → [#8688](https://github.com/zeroclaw-labs/zeroclaw/pull/8688) → [#8689](https://github.com/zeroclaw-labs/zeroclaw/pull/8689) → [#8746](https://github.com/zeroclaw-labs/zeroclaw/pull/8746) → [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996)** Goal Mode 完整 stacked PR 栈（vrurg）—— 项目级最大战略提交。

**诉求分析**：讨论集中在三类 —— ① **多租户身份与权限边界**（#8226、#8279）；② **快速上手与文档准确性**（#8505、#8810）；③ **生态兼容与新交互模式**（#8603、#8303、#8780 Gemini Live）。前两类直接关系生产可用性，第三类决定长期生态位。

---

## 5. Bug 与稳定性

按严重程度排序的今日活跃 Bug：

| 严重度 | 编号 | 标题 | 关联 PR | 状态 |
|---|---|---|---|---|
| **S0** 数据丢失/安全 | [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell 工具工作区边界绕过（软链接逃逸） | ❌ 无 | OPEN，新开 |
| **S0** 数据丢失/安全 | [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | delegate 绕过父级工具白名单 | ❌ 无 | OPEN |
| **S1** workflow blocked | [#8505](https://github.com/zeroclaw-labs/zeroclaw/issues/8505) | Telegram 频道无法配置 | ❌ 无 | OPEN |
| **S1** | [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP/tool-schema 克隆导致 agent loop 中 RSS 无界增长（拆自 #5542） | ❌ 无 | in-progress |
| **S1** quickstart | [#8718](https://github.com/zeroclaw-labs/zeroclaw/issues/8718) | `zeroclaw config init` 写入的模板被自身守护进程拒绝，导致本地 whisper 转写静默失效 | ❌ 无 | in-progress |
| **S2** degraded | [#8731](https://github.com/zeroclaw-labs/zeroclaw/issues/8731) | 基于 stdio 的 MCP 服务器在 daemon PID 下累积为僵尸进程 | ❌ 无 | in-progress |
| **S2** | [#8410](https://github.com/zeroclaw-labs/zeroclaw/issues/8410) | 频道任务缺乏一等"故意不回复"结果 | ❌ 无 | OPEN |
| **S2** | [#8615](https://github.com/zeroclaw-labs/zeroclaw/issues/8615) | compatible provider 无条件剥离 `<think>` 标签导致内容静默删除 | ❌ 无 | in-progress |
| S2 | [#9240](https://github.com/zeroclaw-labs/zeroclaw/issues/9240) | `save_dirty` 静默丢弃任何 key 含点的写入（gpt-4.1, claude-3.5-sonnet 等） | ❌ 无 | OPEN，新开 |
| S2 docs | [#8810](https://github.com/zeroclaw-labs/zeroclaw/issues/8810) | Telegram 示例文档错误 | ❌ 无 | 已关，但用户语气提示文档系统问题 |
| Provider 流式 | PR [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | 修复 OpenAI/Anthropic/compatible SSE 共享传输的 idle-bound | ✅ 自身 | OPEN |
| Provider 流式 | PR [#9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070) | Anthropic 流在 `message_stop` flush 未关闭的 `tool_use` 块 | ✅ 自身 | OPEN |
| Provider 配置 | PR [#8966](https://github.com/zeroclaw-labs/zeroclaw/pull/8966) | RPC 错误地把 32k fallback stub 当作实际 `model_context_window` | ✅ 自身 | OPEN |
| QQ 频道 | PR [#9180](https://github.com/zeroclaw-labs/zeroclaw/pull/9180) | QQ 群回复未携带触发 msg_id 导致 QQ Bot API 拒绝 | ✅ 自身 | OPEN |
| Web UI | PR [#9234](https://github.com/zeroclaw-labs/zeroclaw/pull/9234) | gateway web chat 仅推理无内容时静默挂起 | ✅ 自身 | OPEN |
| 新开 #9182 | PR [#9182](https://github.com/zeroclaw-labs/zeroclaw/pull/9182) | Windows 上 `runtime.shell` 被静默忽略 | ✅ 自身 | OPEN |

**结论**：今日 4 个**严重 S0/S1 Bug 均无关联

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*