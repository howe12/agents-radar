# OpenClaw 生态日报 2026-07-16

> Issues: 467 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-16 02:01 UTC

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

# OpenClaw 项目日报 · 2026-07-16

---

## 1. 今日速览

OpenClaw 今日进入 **v2026.7.2-beta.1** 发布周期，整体仓库活跃度维持在高位：24 小时内共 **467** 条 Issue 更新（活跃 299、关闭 168）、**500** 条 PR 更新（待合并 322、已合并/关闭 178）。**健康度信号偏负**：大量 P0/P1 严重 Bug 集中在 `2026.7.1` 升级后的启动迁移路径上，社区出现"**升级后 Gateway crash-loop**"的群体性反馈（[#103076](https://github.com/openclaw/openclaw/issues/103076)、[#107220](https://github.com/openclaw/openclaw/issues/107220)、[#107227](https://github.com/openclaw/openclaw/issues/107227)、[#107694](https://github.com/openclaw/openclaw/issues/107694)），相关修复 PR（[#108536](https://github.com/openclaw/openclaw/pull/108536)）已进入评审。维护团队需要在 beta 周期内尽快收敛 startup-migration 防线。

---

## 2. 版本发布

### 🚀 v2026.7.2-beta.1（beta 预发布）

**关键更新**：

- **Remote coding sessions**：支持在云端 worker 上运行 Control UI 会话；Codex/Claude catalog 会话可在其归属主机终端中打开；OpenCode/Pi 会话可直接在终端恢复（[#107670](https://github.com/openclaw/openclaw/pull/107670), [#107086](https://github.com/openclaw/openclaw/pull/107086), [#107200](https://github.com/openclaw/openclaw/pull/107200)）
- **Native automation and nodes**：原生自动化节点能力（release notes 截断）

**升级注意**：

- ⚠️ 强烈建议先在 staging 环境验证 `2026.7.1 → 2026.7.2-beta.1` 升级路径。`2026.7.1` 引入的 startup-migration gate 在多份 issue 报告中被指对 **legacy memory sidecar、plugin install index、update-check state** 等冲突采取"致命策略"，会导致 Gateway crash-loop。`openclaw doctor --fix` 目前的修复路径并不能完整回收（[#107227](https://github.com/openclaw/openclaw/issues/107227)）。
- macOS Keychain 路径的同步 I/O 阻塞事件循环问题在 [#94871](https://github.com/openclaw/openclaw/pull/94871) 中已有修正，是该版本的可期亮点。
- Windows 安装升级后 `openclaw update` 进程崩溃（[#107330](https://github.com/openclaw/openclaw/issues/107330)）需确认 beta 是否已包含回归修复。

---

## 3. 项目进展

今日已合并/关闭的 PR（按价值排序）：

| PR | 主题 | 影响 |
|----|------|------|
| [#106395](https://github.com/openclaw/openclaw/pull/106395) | fix(device-pair): bound notifier polling overlap | 修复 pairing 通知 10s 轮询竞态，避免重复 Telegram 配对提醒 |
| [#104663](https://github.com/openclaw/openclaw/pull/104663) | fix(feishu): bound stalled docx image URL reads | 修复飞书 docx 远程图片读取卡死的挂起问题 |
| [#103116](https://github.com/openclaw/openclaw/pull/103116) | fix(active-memory): normalize legacy toggle timestamps | 杜绝 `Infinity` 数值被导入 plugin state |
| [#108225](https://github.com/openclaw/openclaw/pull/108225) | fix(config): allow config backup snapshot retry after transient I/O failure | EBUSY 等瞬时错误不再永久阻塞备份快照（关闭 [#106581](https://github.com/openclaw/openclaw/issues/106581)） |
| [#108177](https://github.com/openclaw/openclaw/pull/108177) | fix(mcp): preserve image blocks in normalizeToolCallContent | MCP 浏览器截图块在 `normalizeToolCallContent` 中保留（修复 [#108082](https://github.com/openclaw/openclaw/issues/108082)） |

**推进评估**：日常稳定性维护 PR 落地节奏正常，**但 7.x 系列引入的深层架构变更（启动迁移、多会话模型）尚处于"修修补补"阶段**。今日新增 12 条 P0/P1 报告多于已落地修复，P0 净增长为正。

---

## 4. 社区热点

按评论/反应排序的今日最具舆情价值条目：

### 🔥 长期高热（历史沉淀）

- **#75 [Linux/Windows Clawdbot Apps](https://github.com/openclaw/openclaw/issues/75)** — `enhancement` · **113 评论 / 👍81** · 自 2026-01-01 持续累积
  - 诉求：补齐 Linux/Windows 端 App，与 macOS 同等能力。`off-meta tidepool` 的评级与高赞数形成反差——**这是个被搁置的"地表最强请求"**。

### 🔥 2026.7.1 升级灾情

- **#104721 [[Bug] 工具结果全部变成字面量 "(see attached image)"](https://github.com/openclaw/openclaw/issues/104721)** · 17 评论 · P0 UX 阻断
- **#103076 [[Bug] 启动迁移仍阻断 Gateway（Matrix/Memory Core/Update-check）](https://github.com/openclaw/openclaw/issues/103076)** · 9 评论 · **已被关闭**（按修复标准满足，但 source-repro 标签显示根因仍未完全清晰）
- **#107220 [gateway crash-loop：memory sidecar meta/chunks 致命 vs files 自动恢复](https://github.com/openclaw/openclaw/issues/107220)** · 8 评论 · P0
- **#107694 [Gateway fail to start：strict startupMigrationWarnings guard](https://github.com/openclaw/openclaw/issues/107694)** · 7 评论 · P0
- **#107727 [[Bug] plugin install metadata conflict 阻断 readiness](https://github.com/openclaw/openclaw/issues/107727)** · 7 评论 · **已关闭**（#107330 的 Windows update crash 也同根）

### 🔥 模型/Provider 兼容性

- **#107449 [[Bug] cron 工具 JSON Schema 与 llama.cpp tool parser 不兼容 (pattern:"\\S")](https://github.com/openclaw/openclaw/issues/107449)** · 10 评论 / 👍4 · P1 · 跨厂商回归
- **#106779 [2026.7.1 + llama.cpp：parser 自动生成失败](https://github.com/openclaw/openclaw/issues/106779)** · 9 评论 · P1
- **#94518 [DeepSeek 缓存命中率 <10%（6.x 升级后 boundary-aware caching）](https://github.com/openclaw/openclaw/issues/94518)** · 9 评论 / **👍10** · P1 · 升级带来成本显著上升

### 🔥 多回合/会话管理

- **#102020 [会话中第二条消息失败 "reply session initialization conflicted"](https://github.com/openclaw/openclaw/issues/102020)** · 14 评论 · 跨渠道 position-dependent
- **#11665 [Webhook hook sessionKey 多回合失效](https://github.com/openclaw/openclaw/issues/11665)** · 10 评论 · 文档/实现不一致

**背后共性诉求**：升级的可观察性、可回滚性、跨 Provider 兼容性。社区对 OpenClaw 当前"快迭代 + 牺牲稳定性"的取舍表达出明显焦虑。

---

## 5. Bug 与稳定性

按严重程度汇总当前最关键的回归/崩溃报告：

### 🔴 P0 — 已影响生产/升级阻断

| Issue | 标题 | Fix PR | 状态 |
|-------|------|--------|------|
| [#107330](https://github.com/openclaw/openclaw/issues/107330) | Win11 `openclaw update` crash | 未指派 | **未修复** |
| [#107220](https://github.com/openclaw/openclaw/issues/107220) | memory sidecar meta/chunks 致命冲突 | [#108536](https://github.com/openclaw/openclaw/pull/108536) 已开 | 评审中 |
| [#107694](https://github.com/openclaw/openclaw/issues/107694) | startupMigrationWarnings 误致命 | [#108536](https://github.com/openclaw/openclaw/pull/108536) 已开 | 评审中 |
| [#107227](https://github.com/openclaw/openclaw/issues/107227) | `openclaw doctor --fix` 无法回收 migration 冲突 | — | 已关闭但路径未稳定 |
| [#103076](https://github.com/openclaw/openclaw/issues/103076) | 多种 legacy-state 迁移源仍未排除 | — | 已关闭 |
| [#104721](https://github.com/openclaw/openclaw/issues/104721) | 工具结果全部变字面量 | 未指派 | **未修复** |
| [#101763](https://github.com/openclaw/openclaw/issues/101763) | Molty 模型选择器持久化失败（点号 vs 连字符） | 未指派 | **未修复** |

### 🟠 P1 — 高优先级回归/功能失效

- [#107449](https://github.com/openclaw/openclaw/issues/107449) cron schema & llama.cpp 兼容性 — 已有标签引导修复但未见关联 PR
- [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hooks relay 100% CPU 阻塞 — linked-pr-open 但未见落地
- [#96834](https://github.com/openclaw/openclaw/issues/96834) WhatsApp 入站图片卡死 3 分钟
- [#94518](https://github.com/openclaw/openclaw/issues/94518) DeepSeek 缓存命中率断崖
- [#85103](https://github.com/openclaw/openclaw/issues/85103) 模型 fallback chain 在 quota 耗尽时未触发
- [#84583](https://github.com/openclaw/openclaw/issues/84583) cron announce 触发 EmbeddedAttemptSessionTakeoverError

### 🟡 P2 — 数据/会话状态风险

- [#70024](https://github.com/openclaw/openclaw/issues/70024) channel stop 永久死亡
- [#77012](https://github.com/openclaw/openclaw/issues/77012) WebChat 5.2 回归：每次覆写 transcript
- [#91532](https://github.com/openclaw/openclaw/issues/91532) Cron 工具级误报失败
- [#107683](https://github.com/openclaw/openclaw/issues/107683) ✅ `allow-always` 脚本内容变更后仍可执行（**安全**）— 已关闭

**整体稳定性评估**：🔴 **偏负面**。当前 P0 列表与修复速度不匹配，建议维护团队在 7.2 周期内集中处置 startup-migration、provider 兼容两条主轴。

---

## 6. 功能请求与路线图信号

按落地概率从高到低排序：

### ✅ 已开 PR，下个版本高概率合并

- **#88504 [[memory] multi-slot memory role architecture](https://github.com/openclaw/openclaw/pull/88504)** · XL · 产品级架构调整，将 `plugins.slots.memory` 拆分为多个角色（factual recall / auto-capture / compaction）。P2 🦐，但因是根因级修复且 `maintainer` 已多次评估，存在随 7.3 进版的可能。

### 🟢 与近期热点对齐，进入下一两个版本的可能性高

- **#97098（子代理完成默认仅返回 status + 子 session 链接） [#96975](https://github.com/openclaw/openclaw/issues/96975)** — 多 token 成本/上下文污染，社区力量正在汇集。
- **#101276 [[exec] deny-over-allow exec approval denylist](https://github.com/openclaw/openclaw/pull/101276)**（接续 #92456） — 与今日关闭的 [#107683](https://github.com/openclaw/openclaw/issues/107683)（脚本 allow-always 跨内容变更存活）联动，**安全优先级应前置**。
- **#106832 [[feat] 暴露可读的会话展示元数据](https://github.com/openclaw/openclaw/pull/106832)** · L · 解决客户端被迫反向解析内部路由键（`agent:main:telegram:main:direct:...`）的隐私/可维护性问题。等待作者补充上下文。
- **#107686 [[Feature] 智能多模型路由](https://github.com/openclaw/openclaw/issues/107686)** — 5 评论 · 与 llama.cpp 兼容性问题交织，社区对成本敏感。

### 🟡 长尾，需维护者明确表态

- **#75** Linux/Windows 客户端：当前 P2 + `off-meta tidepool` 标签意味着**维护团队尚未对资源分配表态**，但 81 个 👍 在策略上是不可忽视的信号。
- **#82548 [[Feature] AI safety & quality observability](https://github.com/openclaw/openclaw/issues/82548)** · 6 评论 · OTEL/日志扩展，建议与 qa-lab 联动（参考 [#108537](https://github.com/openclaw/openclaw/pull/108537)）。

---

## 7. 用户反馈摘要

从今日高互动 Issue 评论中提炼的真实声音：

- **🔥 升级焦虑**："升级 2026.6.11 → 2026.7.1 后 gateway 完全拉不起来，`openclaw doctor` 也救不回" — 来自 [#107227](https://github.com/openclaw/openclaw/issues/107227)、[#107220](https://github.com/openclaw/openclaw/issues/107220) 的多份评论一致。"修复路径不闭环"是社区对 7.x 系列最集中的批评点。

- **💸 成本冲击**："从 2026.5.28 升到 2026.6.x 后 DeepSeek 缓存命中率从 70%+ 跌到 <10%，账单翻倍" — [#94518](https://github.com/openclaw/openclaw/issues/94518)。社区怀疑是 boundary-aware caching 改变了前缀切分语义。

- **🧩 工具调用回归**："所有工具结果都被替换成 `(see attached image)` 字面量字符串，包括读文件" — [#104721](https://github.com/openclaw/openclaw/issues/104721)。这是新近发生（7-11 起）的高严重度 UX 阻断，影响所有非视觉工具调用。

- **🤖 多 Provider 失败**："本地 Ollama 一切正常，但 llama.cpp provider 全部 400 — `Automatic parser generation failed`" — [#106779](https://github.com/openclaw/openclaw/issues/106779)。

- **📡 通信通道失稳**："Discord/Moonshot 渠道输入到模型 dispatch 之间 ~30s 静默" — [#84783](https://github.com/openclaw/openclaw/issues/84783)。"WhatsApp 1:1 图片入站卡死 3 分钟" — [#96834](https://github.com/openclaw/openclaw/issues/96834)。

- **✅ 积极信号**：[#94342](https://github.com/openclaw/openclaw/pull/94342)（hook system）与 [#94871](https://github.com/openclaw/openclaw/pull/94871)（同步 I/O 替换）的方向获得社区认可 — 这两处修复可视为 OpenClaw 对"事件循环被同步锁阻塞"和"内部 hook 不触发"两类长期抱怨的正面回应。

- **🛡️ 安全意识提升**：社区

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析报告
**数据周期：2026-07-16 · 共纳入 12 个项目 · 参照基线：OpenClaw**

---

## 1. 生态全景

个人 AI 助手 / 自主智能体开源生态在 2026 年中已显著分化成两条赛道：**"平台化运行时"**（OpenClaw、CoPaw、ZeroClaw、IronClaw 等多 Provider/多 Channel 框架）与 **"轻量个人助手"**（NanoBot、TinyClaw、PicoClaw 等 CLI/嵌入式工具）。今日数据显示头部项目（OpenClaw、ZeroClaw、CoPaw）单日吞吐量在 38–500 条 Issue/PR 之间，呈现"快迭代 + 集中治理"的双轨节奏；而 NanoClaw、LobsterAI 等中等规模项目通过单一版本节点（如 2026.7.15）实现集中推进。社区关注点高度趋同——**多 Provider 兼容、Session/记忆一致性、Channel 生命周期鲁棒性、安全授权模型**——但实现路径差异巨大：ZeroClaw 走"WASM 插件 + OIDC + air-gap"的企业级路线，OpenClaw 走"Gateway + 多会话模型"的通用平台路线，CoPaw 走"中文生态 + Doom Loop 治理 + 国产化系统支持"的本土化路线。NullClaw、ZeptoClaw 在今日的零活跃度也从侧面印证了生态已进入"头部收敛、长尾沉寂"的阶段。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 已合并/关闭 | 新版本 | 健康度 | 阶段定位 |
|------|------|------|------|------|------|------|
| **OpenClaw** | 467 (活跃 299 / 关闭 168) | 500 (待合并 322 / 已处理 178) | 178 PR | v2026.7.2-beta.1 | 🔴 偏负（P0 净增长为正） | 高强度迭代 + 稳定性压力 |
| **ZeroClaw** | 38 | 50 | 12 PR | v0.8.3（昨日 379 commits） | 🟢 活跃稳健 | 大版本收尾 + v0.9 RFC 推进 |
| **CoPaw** | 50 (活跃 19 / 关闭 31) | 43 (待合并 21 / 已处理 22) | 22 PR | 无（2.0.0.post2 主线） | 🟢 响应高效 | v2.0 打磨期 |
| **IronClaw** | 23 (关闭 8 / 活跃 15) | 38 (待合并 25 / 已处理 13) | 13 PR | 无 | 🟡 中等偏上 | Reborn 架构迁移期 |
| **NanoBot** | 24 | 27 | 11 PR | 无 | 🟢 健康（审计集中结算） | 治理债清理 |
| **Hermes Agent** | 50 (新活 28 / 关闭 22) | 50 | **0 PR 合并** | 无 | 🟡 PR 审阅瓶颈 | 高吞吐/低合并日 |
| **NanoClaw** | 2 Issue + 11 PR | 11 | 4 PR | 无（PR 待发版） | 🟢⭐⭐⭐⭐☆ (4/5) | 功能扩展 + 质量收敛并行 |
| **LobsterAI** | — | — | 11 PR | **2026.7.15 已发布** | 🟢⭐⭐⭐⭐ (4/5) | 版本迭代完成 + 依赖待跟进 |
| **Moltis** | 1 活跃 | — | 6 PR | 无 | 🟢⭐⭐⭐⭐☆ (4/5 工程强 / 社区弱) | 多线并行开发 |
| **PicoClaw** | 6 (新活 3 / stale 关 3) | 2 | **0 PR** | 无（v0.3.1 已 13 天未更新） | 🔴 偏低 | 维护节奏放缓 |
| **TinyClaw** | 0 | 1 (待合并) | 0 | 无 | 🟡⭐⭐⭐ (3/5) | 静默但稳定 |
| **NullClaw** | 0 | 0 | 0 | 无 | ⚪ 沉寂 | 24h 零活动 |
| **ZeptoClaw** | 0 | 0 | 0 | 无 | ⚪ 沉寂 | 24h 零活动 |

**统计观察**：13 个项目中，5 个（38%）处于 🟢 健康活跃区，4 个处于 🟡 中等区，2 个处于 🔴 风险区，2 个完全沉寂。整体呈现"头部 3–5 个项目占据 70%+ 活跃度"的金字塔结构。

---

## 3. OpenClaw 在生态中的定位

### 3.1 规模与吞吐
OpenClaw 以 **467 条 Issue 更新 + 500 条 PR 更新** 居于生态绝对头部，单日吞吐是第二梯队（ZeroClaw / CoPaw 38–50 条）的近 10 倍。这种体量既反映了**用户基数与功能广度**，也意味着维护团队面临远超同行的**审阅与回归治理压力**。

### 3.2 与同类核心差异

| 维度 | OpenClaw | ZeroClaw | CoPaw | NanoBot | Hermes Agent |
|------|---------|---------|-------|---------|--------------|
| **核心架构** | Gateway + 多会话模型 | WASM 插件宿主 + SOP 引擎 | Console/Web 多渠道 | CLI + Channel 抽象 | Telegram Gateway + Desktop |
| **版本节奏** | 7.2-beta 收尾 | v0.8.3 稳定 + v0.9 RFC | 2.0.0.post2 修复 | 审计驱动合版 | v0.18.2 待发 |
| **安全模型** | startup-migration gate | OIDC + air-gap + 权限画像 | per-channel 授权 | hamb1y 审计已闭环 | Webhook loopback 强制 |
| **Provider 战略** | 多 Provider 抽象 + 兼容层 | 多用户 + 多 agent 互操作 | 多模态 + Qwen 系生态 | OpenAI/Codex 代理统一 | Plugin 接口稳定化 |
| **最大痛点** | 升级灾情 + crash-loop | 4 个 S1 同时 OPEN | v2.0 失忆 + 内存泄漏 | 跨用户授权绕过 | 0 PR 合并 / 审阅瓶颈 |
| **社区规模信号** | 113 评论/81 👍 的 #75 长期置顶 | 56 贡献者/版本 | 50 评论/3 👍 的 #2969 | 42 条审计一次性提交 | sweeper 机器人活跃 |

### 3.3 社区规模对比
OpenClaw 拥有生态中**最长的用户反馈沉淀**（#75 自 2026-01 累积 113 评论）和**最广的渠道覆盖**（Telegram/Discord/Feishu/WhatsApp/Moonshot 等多 Channel 同时暴露问题）。但**"快迭代 + 牺牲稳定性"的取舍**已被社区明确批评——这是与 ZeroClaw（重 RFC + 长周期）最显著的路线差异。

---

## 4. 共同关注的技术方向

### 4.1 🔐 安全与授权模型（涉及 6 个项目）
- **NanoBot**：hamb1y 单人审计出 42 条安全/正确性发现（#4776-#4780、#4075/4076 等），涵盖 `process_direct()` 绕过授权、`/stop`/`/restart` 零授权 DoS、跨用户 session 泄漏
- **Hermes Agent**：[#64207](https://github.com/nousresearch/hermes-agent/pull/64207) webhook 默认 loopback + `allow_public_bind`；[#64208](https://github.com/nousresearch/hermes-agent/pull/64208) middleware 前置 tool scope
- **ZeroClaw**：[#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) 多用户 auth provider + 权限画像 + principal 隔离；[#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) Config V4 破坏性变更
- **IronClaw**：[#6135](https://github.com/nearai/ironclaw/pull/6135) OAuth 激活后 Slack host 恢复；[#6128](https://github.com/nearai/ironclaw/pull/6128) auth 全链路审计
- **OpenClaw**：今日安全意识上升（#107683 allow-always 跨内容变更存活已关闭）
- **CoPaw**：[#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) pawapp SDK 实验性引入

**共同诉求**：从"被动修补"走向"主动审计 + 设计时隔离"，多用户/企业场景是核心驱动。

### 4.2 🧠 记忆与会话状态一致性（涉及 6 个项目）
- **OpenClaw**：[#102020](https://github.com/openclaw/openclaw/issues/102020)（多回合 session 初始化冲突）、[#11665](https://github.com/openclaw/openclaw/issues/11665)（Webhook sessionKey 失效）
- **CoPaw**：[#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148)（v2.0 失忆症）+ [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123)（context hardening）+ [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153)（ReMe 内存泄漏 48GB）
- **NanoBot**：[#4793](https://github.com/HKUDS/nanobot/issues/4793)（全局 ExecSessionManager 跨会话数据可见）
- **NanoClaw**：[#3012](https://github.com/qwibitai/nanoclaw/pull/3012)/[#3013](https://github.com/qwibitai/nanoclaw/pull/3013)（provider-agnostic 持久化记忆）
- **Hermes Agent**：[#64789](https://github.com/nousresearch/hermes-agent/issues/64789)/[#65297](https://github.com/nousresearch/hermes-agent/issues/65297)/[#65300](https://github.com/nousresearch/hermes-agent/issues/65300)（Desktop session 身份漂移三连）
- **ZeroClaw**：[#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048)（分离 conversation history 与 curated 长记忆 RFC，v0.9 候选）

**共同诉求**：跨 Provider / 跨 Channel / 跨重启的会话身份一致性；分页、artifact、压缩的硬上限；显式的 provenance。

### 4.3 🌐 多 Provider 兼容与互操作（涉及 7 个项目）
- **OpenClaw**：DeepSeek 缓存命中率 <10%（#94518）、llama.cpp cron schema 不兼容（#107449/#106779）
- **NanoClaw**：Claude→Codex quota fallback（#3057）+ OpenCode 第三 provider（#3056）
- **CoPaw**：mimo-v2.5-free 多模态标注错误（#6154）
- **ZeroClaw**：Anthropic tool_use flush 修复（#9070）、Kimi streaming 400（#5600，S1 阻塞）
- **PicoClaw**：Doubao tool_call XML 泄漏（#3153）
- **LobsterAI**：GPT-5.6 + Grok 4.5 默认模型接入（#2332）
- **Moltis**：MiniMax M3 + 13+ ACP 代理类型（#1151/#1149）

**共同诉求**：Provider 元数据结构化（context window、vision、tools 归一化）；fallback / quota 调度；本地 LLM（llama.cpp / Ollama）的工具调用 schema 兼容。

### 4.4 📡 Channel 生命周期与稳定性（涉及 5 个项目）
- **IronClaw**：Slack 4 个 P1/P2 同时 OPEN（#5834/#5877/#5943/#5944/#5882），社区提议 cron canary lanes（#6105）
- **NanoBot**：DingTalk Stream SDK 重连吞 cancel 信号（#4944）
- **OpenClaw**：Discord/Moonshot ~30s 静默（#84783）、WhatsApp 1:1 图片卡死 3 分钟（#96834）
- **Hermes Agent**：Telegram 409 死循环 4 天无感知（#63724）、DM topic root-lobby 吞事件（#63911）
- **CoPaw**：飞书 webhook 消息静默丢弃（#5995，无 PR）

**共同诉求**：Channel 重连不应永久死亡、错误必须可观测、retry 必须区分 transient/permanent。

### 4.5 🛠️ Tool Call 可靠性（涉及 5 个项目）
- **OpenClaw**：[#104721](https://github.com/openclaw/openclaw/issues/104721) 工具结果全部变字面量 "(see attached image)"；[#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hooks 100% CPU
- **PicoClaw**：[#3258](https://github.com/sipeed/picoclaw/issues/3258) `before_tool` modify 反序列化缺陷
- **ZeroClaw**：[#9060](https://github.com/zeroclaw-labs/zeroclaw/pull/9060) 原生 tool_call 参数归一化；[#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) `[AUDIO:]` marker 被当字面量
- **CoPaw**：[#2930](https://github.com/agentscope-ai/QwenPaw/issues/2930) llama.cpp 工具调用解析失败；[#6154](https://github.com/agentscope-ai/QwenPaw/pull/6154) 多模态图片被剥离
- **NanoBot**：[#4813](https

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-07-16

> 数据范围：HKUDS/nanobot 过去 24 小时 GitHub 活动  
> 报告时间：2026-07-16 | 数据源：Issues 24 条 / PRs 27 条 / Releases 0 个

---

## 1. 今日速览

NanoBot 在过去 24 小时内呈现**大规模集中清理 + 持续工程化推进**的态势：21 条 Issue 被关闭、11 条 PR 完成合入或关闭，单日合并/关闭比例远高于新增/活跃。活跃度评估为**高**——但更准确地说，这是社区贡献者 `hamb1y` 在 7 月 6 日提交的一组**系统性安全/正确性审计**（共 42 条发现，详见 [Issue #4815](https://github.com/HKUDS/nanobot/issues/4815)）在当日被集中处置完成的结果。新开/活跃 Issue 仅 3 条，新 PR 持续流入待合并通道，整体节奏健康，无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release 标签变更。建议关注主干上持续合并的修复与重构（见第 3、5 节）何时合并为下一个正式版本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 类别 | 影响 |
|---|---|---|---|
| [#4944](https://github.com/HKUDS/nanobot/pull/4944) | fix(gateway): stop channels before draining tasks | P1 Bug | 修正网关关闭顺序，避免 DingTalk Stream 等 SDK 在 transport 重连时吞掉 cancel 信号 |
| [#4943](https://github.com/HKUDS/nanobot/pull/4943) | fix(providers): honor Codex proxy config consistently | P1 Bug | OpenAI Codex 登录与图片生成客户端统一代理配置，避免登录阶段使用错误代理 |
| [#4813](https://github.com/HKUDS/nanobot/pull/4813) | fix(loop): guard `.strip()` on msg.content against list-form multimodal data | P1 Bug | 修复多模态消息（list 形式 content）触发 `AttributeError` 导致消息丢弃的回归（闭合 [Issue #4800](https://github.com/HKUDS/nanobot/issues/4800)） |
| [#4870](https://github.com/HKUDS/nanobot/pull/4870) | Share channel markdown helpers | P2 Refactor | 抽出 Telegram/Signal/Feishu 共用的 Markdown → 平台格式转换逻辑（闭合 [Issue #4810](https://github.com/HKUDS/nanobot/issues/4810)） |
| [#4649](https://github.com/HKUDS/nanobot/pull/4649) | fix(webui): correct activity timer duration | P2 Bug | WebUI "Working for ..." 计时改从用户回合起点计算，而非首个活动行 |
| [#4926](https://github.com/HKUDS/nanobot/pull/4926) | fix: include Feishu SDK in dev dependencies | 修复 | 将 `lark-oapi` 加入 dev extras，使 `uv sync --extra dev` 与 Feishu 测试对齐 |

**整体评估：** 今日推进以"治理债清理"为主，覆盖**安全命令路径、网关关闭语义、多模态兼容、跨频道重复代码、WebUI 时序**等 5 个长期摩擦点。这是过去一周多以来审计发现的一次集中结算，对项目稳定性提升明显，但 PR 数量密集也意味着回归风险上升，需要关注 [Issue #4815](https://github.com/HKUDS/nanobot/issues/4815) 中剩余未关闭条目。

---

## 4. 社区热点

按评论数排序的活跃讨论：

- **[Issue #4924](https://github.com/HKUDS/nanobot/issues/4924)** — `[OPEN] [bug] cli/commands.py:_pick_heartbeat_target_from_sessions fails when unifiedSession: true`  
  作者 wzrayyy，**4 条评论**，👍 0。讨论集中在 `unifiedSession: true` 下心跳目标无法正确选取的回退路径，已有对应修复 PR [#4928](https://github.com/HKUDS/nanobot/pull/4928) 待合并。**诉求：统一会话模式下的心跳路由需要保留最后一个真实 channel:chat_id，而不是回退到不存在的具体会话。**

- **[Issue #4815](https://github.com/HKUDS/nanobot/issues/4815)** — `Audit summary: 42 security / bug / refactor findings from deep code audit`  
  作者 hamb1y，**1 条评论**，👍 0（但作为 42 条子 issue 的索引，是过去一周社区活动的事实中心）。**诉求：一次系统化的安全/正确性审计，需要被分批处置。**

- 7 条 7 月 6 日提交的安全类 Issue（[#4776](https://github.com/HKUDS/nanobot/issues/4776)、[#4777](https://github.com/HKUDS/nanobot/issues/4777)、[#4778](https://github.com/HKUDS/nanobot/issues/4778)、[#4779](https://github.com/HKUDS/nanobot/issues/4779) 等）每条 2 条评论，均已关闭。**诉求集中于：命令路由授权、跨用户隔离、`process_direct()`/`system` 通道绕过授权等问题。**

**热点趋势：** 安全/授权模型是当前社区焦点。从 hamb1y 一人独立完成 42 条审计这一事实看，**项目当前最稀缺的不是新功能 PR，而是安全复审者与维护者带宽**。

---

## 5. Bug 与稳定性

### 🔴 高严重度（已修复或修复中）

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#4779](https://github.com/HKUDS/nanobot/issues/4779) | `process_direct()` 绕过全部 channel 授权，6+ 调用方 | ✅ 已关闭 |
| [#4778](https://github.com/HKUDS/nanobot/issues/4778) | `system` channel 消息绕过授权/路由/状态机 | ✅ 已关闭 |
| [#4777](https://github.com/HKUDS/nanobot/issues/4777) | `/stop` 可取消他人任务（按 chat_id 而非 sender_id） | ✅ 已关闭 |
| [#4776](https://github.com/HKUDS/nanobot/issues/4776) | `/restart` 零授权即可 DoS 进程 | ✅ 已关闭 |
| [#4076](https://github.com/HKUDS/nanobot/issues/4076) | message 工具缺乏出站授权 + 任意媒体路径 | ✅ 已关闭 |
| [#4075](https://github.com/HKUDS/nanobot/issues/4075) | Dream 可覆盖用户 skill 无所有权校验 | ✅ 已关闭 |
| [#4800](https://github.com/HKUDS/nanobot/issues/4800) / [#4813](https://github.com/HKUDS/nanobot/pull/4813) | `.strip()` 在多模态 list-form content 上崩溃 | ✅ PR 已关闭 |
| [#4793](https://github.com/HKUDS/nanobot/issues/4793) / [#4862](https://github.com/HKUDS/nanobot/pull/4862) | 全局 `ExecSessionManager` 单例导致跨会话数据可见 | 🟡 PR 待合并 |
| [#4789](https://github.com/HKUDS/nanobot/issues/4789) | `WeakValueDictionary` 存 `asyncio.Lock` 可能被 GC | ✅ 已关闭 |
| [#4062](https://github.com/HKUDS/nanobot/issues/4062) | WebSocket 通道无订阅者时丢弃主动消息 | ✅ 已关闭 |

### 🟠 中严重度（已关闭或正在修复）

| Issue/PR | 描述 | 状态 |
|---|---|---|
| [#4924](https://github.com/HKUDS/nanobot/issues/4924) / [#4928](https://github.com/HKUDS/nanobot/pull/4928) | unified session 心跳目标选取失败 | 🟡 PR 待合并 |
| [#4934](https://github.com/HKUDS/nanobot/issues/4934) / [#4946](https://github.com/HKUDS/nanobot/pull/4946) | Qwen 模型 thinking/reasoning 内容泄漏到 chat | 🟡 PR 待合并 |
| [#4082](https://github.com/HKUDS/nanobot/issues/4082) | cron job 跨运行共享固定 session 上下文 | ✅ 已关闭 |
| [#4802](https://github.com/HKUDS/nanobot/issues/4802) | context window=0 时返回虚假 128 token budget | ✅ 已关闭 |
| [#4799](https://github.com/HKUDS/nanobot/issues/4799) | `None` URL 生成 `"web_fetch:none"` 缓存假条目 | ✅ 已关闭 |
| [#4067](https://github.com/HKUDS/nanobot/issues/4067) | 无效 config 静默回退到默认 | ✅ 已关闭 |
| [#4056](https://github.com/HKUDS/nanobot/issues/4056) | 上下文裁剪可能丢弃紧邻用户回复的助手提问 | ✅ 已关闭 |

### 🟡 当前 OPEN、尚无修复 PR

- **[#4940](https://github.com/HKUDS/nanobot/issues/4940)** — `read_session_metadata()` 缺少对旧文件名（`websocket_<uuid>.jsonl`）的回退，重启后 `workspace_scope` 静默丢失。**影响 WebUI 多项目用户的会话路由正确性，建议优先处理。**

**Bug 整体趋势：** 7 月 6 日集中的 21 条安全/正确性 Bug 在当日被**全部关闭或挂上修复 PR**。剩余 3 条 OPEN Bug 中 [#4940](https://github.com/HKUDS/nanobot/issues/4940) 缺修复 PR，需要维护者认领。

---

## 6. 功能请求与路线图信号

| 需求 | 关联 Issue/PR | 状态 |
|---|---|---|
| 本地化（session-scope）触发器，供 Agent 管理 | [#3437](https://github.com/HKUDS/nanobot/issues/3437) → [#4942](https://github.com/HKUDS/nanobot/pull/4942) | 🟡 PR 待合并 |
| 一键部署到 Render | → [#4937](https://github.com/HKUDS/nanobot/pull/4937) | 🟡 PR 待合并 |
| Jina Reader 敏感 URL 处理 | [#4884](https://github.com/HKUDS/nanobot/issues/4884) → [#4947](https://github.com/HKUDS/nanobot/pull/4947) | 🟡 PR 待合并 |
| 心跳触发命令（CLI） | [#3437](https://github.com/HKUDS/nanobot/issues/3437) → [#4620](https://github.com/HKUDS/nanobot/pull/4620) | 🟡 PR 待合并 |
| Telegram 自定义 Bot API base URL + 自定义头 | [#4702](https://github.com/HKUDS/nanobot/issues/4702) → [#4919](https://github.com/HKUDS/nanobot/pull/4919) | 🟡 PR 待合并 |
| 心跳目标路由修复 | [#4924](https://github.com/HKUDS/nanobot/issues/4924) → [#4928](https://github.com/HKUDS/nanobot/pull/4928) | 🟡 PR 待合并 |
| Memory archive 加入 provenance 上下文 | → [#4621](https://github.com/HKUDS/nanobot/pull/4621) | 🟡 PR 待合并 |
| 上下文硬溢出时自动重提示 | → [#4925](https://github.com/HKUDS/nanobot/pull/4925) | 🟡 PR 待合并 |
| Qwen 模型思考内容控制 | [#4934](https://github.com/HKUDS/nanobot/issues/4934) → [#4946](https://github.com/HKUDS/nanobot/pull/4946) | 🟡 PR 待合并 |
| 内置 channel 自我封装（移除中央耦合） | → [#4908](https://github.com/HKUDS/nanobot/pull/4908) | 🟡 PR 待合并 |
| 配置仓库统一（FileConfigRepository） | → [#4918](https://github.com/HKUDS/nanobot/pull/4918) | 🟡 PR 待合并（标注 `conflict`） |

**路线图信号：** 待合并队列（16 条 OPEN PR）以**配置层重构、channel 架构解耦、心跳/触发器系统**三大主线为核心。这与 `hamb1y` 审计指出的"中央耦合 + 跨会话状态泄漏"形成相互印证——下一阶段很可能围绕"配置原子化 + 状态隔离"做一次结构性升级。

---

## 7. 用户反馈摘要

由于本日大部分 Issue 评论来自审计作者本人 `hamb1y`，**真实最终用户的反馈**主要集中在以下几条：

1. **多模态消息被丢弃（[Issue #4800](https://github.com/HKUDS/nanobot/issues/4800)）**  
   痛点：当 channel 投递 list-form content（多模态块）时，`.strip()` 直接抛 `AttributeError`，用户消息完全丢失。已通过 [PR #4813](https://github.com/HKUDS/nanobot/pull/4813) 修复。

2. **WebUI 重启后项目上下文丢失（[Issue #4940](https://github.com/HKUDS/nanobot/issues/4940)）**  
   痛点：使用旧文件名格式的会话在重启后 `workspace_scope` 静默丢失，导致多项目用户的工作区选择失效。**尚无修复 PR。**

3. **WebSocket 主动消息丢失（[Issue #4062](https://github.com/HKUDS/nanobot/issues/4062)）**  
   痛点：cron / heartbeat / 后台通知在无 WebUI 连接时被丢弃，对依赖 WebUI 监控调度任务的用户尤其不友好。已关闭但**未在摘要中看到对应修复 PR**，建议确认是否在 PR #4944 等关闭顺序修复中顺带处理。

4. **Qwen 模型思考内容泄漏（[Issue #4934](https://github.com/HKUDS/nanobot/issues/4934)）**  
   痛点：qwen3.6-flash 等混合思考模式模型把 thinking 文本暴露给用户，简单查询响应变慢且噪声大。已有 [PR #4946](https://github.com/HKUDS/nanobot/pull/4946) 处理。

5. **Jina Reader 泄漏敏感 URL（隐含于 [Issue #4884

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-16

> 数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent) · 报告生成时间：2026-07-16

---

## 1. 今日速览

Hermes Agent 今日进入**高吞吐、低合并**的典型"积压式开发日"：过去 24 小时共有 **50 条 Issue 更新**（28 新开/活跃、22 关闭）和 **50 条 PR 更新**，但 **PR 合并数为 0**，且无新版本发布，提示仓库当前处于"提交密集、审阅阻塞"的状态。已关闭 Issue 中绝大多数携带 `sweeper:implemented-on-main` 或 `duplicate` 标签，表明它们主要由 sweeper 机器人或重复检测机制结案——并非真正的功能闭环。社区侧最大热点仍集中在 **Telegram Gateway** 异常链路、**Desktop 会话状态漂移** 以及 **插件/工具接口的可编程性** 三个长期主题上。

---

## 2. 版本发布

**今日无新版本发布。** 仓库当前可见的最新基线仍为 v0.18.2（被多个 Issue 与 PR 引用），下一版本节奏待维护者确认。

---

## 3. 项目进展

### 3.1 已合并 / 已关闭（PR 维度）
**今日 PR 合并数为 0**，所有 50 条 PR 均处于 OPEN 状态。这是值得维护团队关注的信号——可能是审阅带宽不足，也可能是等待 CI / 安全复核。

### 3.2 已关闭 Issue 中值得关注的"实质性"推进
虽然多数关闭由 sweeper 触发，但以下关闭代表功能确实落地到 main：

| Issue | 内容 | 关闭原因 |
|---|---|---|
| [#63911](https://github.com/nousresearch/hermes-agent/issues/63911) | Telegram DM topic mode root-lobby 静默吞掉 kanban 唤醒事件 | sweeper 标记无法复现/已实现 |
| [#64201](https://github.com/nousresearch/hermes-agent/issues/64201) | 主 Agent 流式输出期间 subagent 结果丢失 | sweeper:implemented-on-main |
| [#64089](https://github.com/nousresearch/hermes-agent/issues/64089) | delegate_subagent / delegate_task 应支持可配置超时 | sweeper:implemented-on-main（duplicate） |
| [#63698](https://github.com/nousresearch/hermes-agent/issues/63698) | Windows 下 `windows_hide_console: true` 仍弹窗 | sweeper:implemented-on-main |
| [#63680](https://github.com/nousresearch/hermes-agent/issues/63680) | 自定义 provider 端点不传 tool 定义 | sweeper:cannot-reproduce |
| [#63805](https://github.com/nousresearch/hermes-agent/issues/63805) | Linux Desktop 缺 node-pty 原生模块 | duplicate |
| [#63724](https://github.com/nousresearch/hermes-agent/issues/63724) | Telegram 409 Conflict 永久死循环 | sweeper:implemented-on-main |
| [#63712](https://github.com/nousresearch/hermes-agent/issues/63712) | AsyncSessionDB 缺 await 静默丢失写入（P0） | sweeper:implemented-on-main |
| [#64217](https://github.com/nousresearch/hermes-agent/issues/64217) | `switch_model` 丢失用户自定义 `extra_headers` 致 403 | sweeper:implemented-on-main |
| [#64079](https://github.com/nousresearch/hermes-agent/issues/64079) | Hermes Studio 自动更新遗漏 pip 依赖（Windows，二次出现） | sweeper:implemented-on-main |

**项目整体推进评估**：今日净修复数量约 **15-18 个真实 Bug**，其中至少 2 个为 P0/P2 级别的会话一致性问题（#63712、#64201、#64217），1 个为 Telegram 4 天沉默式故障的可用性 bug（#63724）。**安全相关**也由多个 PR 推进（见第 3.3）。整体而言，"代码流入 main 的速度"仍 OK，但"PR 流入 main 的速度"为零，存在审阅瓶颈。

### 3.3 待合并的重要 PR（明日合并候选）
| PR | 主题 | 风险/标签 | 备注 |
|---|---|---|---|
| [#64207](https://github.com/nousresearch/hermes-agent/pull/64207) | webhook 默认 loopback + 需显式 `allow_public_bind` 同意 | P2 security | 防止公网意外暴露 |
| [#64208](https://github.com/nousresearch/hermes-agent/pull/64208) | 运行时在 middleware 之前强制 tool scope | P3 security | 关闭越权工具调用路径 |
| [#64205](https://github.com/nousresearch/hermes-agent/pull/64205) | 备份与写暂存的权限加固 | P3 security | 原子写入 + 0600 权限 |
| [#64202](https://github.com/nousresearch/hermes-agent/pull/64202) | OpenRouter 元数据/模型缓存 owner-only | P3 security | 与 #64205 一脉相承 |
| [#64215](https://github.com/nousresearch/hermes-agent/pull/64215) | shutdown 诊断跨平台化 | P3 bug | 替换 GNU `timeout`，适配 macOS |
| [#64195](https://github.com/nousresearch/hermes-agent/pull/64195) | Desktop 首次启动迁移 active-profile | P3 | 修 #64160 |
| [#64192](https://github.com/nousresearch/hermes-agent/pull/64192) | Kanban 派单前拒绝不安全 assignee | P3 bug | 修复路径遍历 |
| [#64197](https://github.com/nousresearch/hermes-agent/pull/64197) | CLI skill 发现改用 `Path.is_relative_to()` | P3 bug | 修复 `.hub-backup` 被误判 |
| [#64198](https://github.com/nousresearch/hermes-agent/pull/64198) | Windows LSP 子进程隐藏控制台 | P3 bug | 与 #63698 同源问题 |
| [#63874](https://github.com/nousresearch/hermes-agent/pull/63874) | CLI 优先加载 profile 配置 | P3 feature | 修 profile 键被静默吞掉 |
| [#65087](https://github.com/nousresearch/hermes-agent/pull/65087) | Desktop 检测 QEMU/UTM 虚拟 GPU | — | 修 UTM 下无法显示窗口 |
| [#65206](https://github.com/nousresearch/hermes-agent/pull/65206) | CI 中以语义化方式呈现 lockfile diff | ci-reviewed | 提升 PR 评审效率 |
| [#65318](https://github.com/nousresearch/hermes-agent/pull/65318) | /background 任务关闭前收敛 | bug | 三小时合作式预算 |

---

## 4. 社区热点

### 4.1 评论数最高
| 排名 | Issue | 评论数 | 主题 |
|---|---|---|---|
| 1 | [#64182](https://github.com/nousresearch/hermes-agent/issues/64182) | **12** | 插件接口扩展跟踪（来自 Discord 社区） |
| 2 | [#63911](https://github.com/nousresearch/hermes-agent/issues/63911) | 5 | Telegram DM 主题模式 root-lobby 静默丢事件 |
| 3 | [#23359](https://github.com/nousresearch/hermes-agent/issues/23359) | 4 | Provider/Model 库存无脚本化接口 |
| 4 | [#64201](https://github.com/nousresearch/hermes-agent/issues/64201) | 2 | 流式输出期间 subagent 结果丢失 |
| 4 | [#64089](https://github.com/nousresearch/hermes-agent/issues/64089) | 2 | delegate 子代理超时应可配置 |
| 4 | [#44771](https://github.com/nousresearch/hermes-agent/issues/44771) | 2 | Curator LLM 评审在符号链接技能集群上空转 4 小时 / 91M token |
| 4 | [#64666](https://github.com/nousresearch/hermes-agent/issues/64666) | 2 | Desktop 右栏文件预览默认视图应可配置 |

### 4.2 反应（👍）最高
- [#3326](https://github.com/nousresearch/hermes-agent/issues/3326) `feat(cli): add --output-format json` — **5 个 👍**，是今日所有 Issue 中社区认同度最高的请求，主题是给 `hermes chat -q` 增加结构化输出（用于 CI / MCP / Symphony 编排）。

### 4.3 诉求分析
- **可编程/可脚本化**（#3326、#23359）：用户希望 Hermes 不只是交互式工具，而是可被编排的"端点"。这是 CI/CD 与 MCP 服务器场景反复出现的诉求。
- **插件边界稳定性**（#64182）：维护者 teknium1 亲自挂帅，明确"长期排队的 PR 现在有稳定入口"，是项目治理层面的积极信号。
- **Telegram Gateway 鲁棒性**：连续 3-4 个 Telegram 相关 Issue 被关闭（含 P0、P2），表明该子系统在过去 24 小时是最大焦点，且 sweeper 评估认为已修。但 [#63911](https://github.com/nousresearch/hermes-agent/issues/63911) 仍存在根因级风险（root-lobby 门控吞事件），需人工复核 sweeper 的"cannot-reproduce"判断。

---

## 5. Bug 与稳定性

按严重程度排列（基于 `P0`/`type/bug` + 多个 bug 关键词与用户影响面）：

| 等级 | Issue / PR | 状态 | 是否有 fix PR | 备注 |
|---|---|---|---|---|
| 🔴 P0 | [#63712](https://github.com/nousresearch/hermes-agent/issues/63712) AsyncSessionDB 缺 await 静默丢失写入 | 已关闭（sweeper:implemented-on-main） | ✅ 落地 main | 触发场景：网关 `/model` 切换；附带 `RuntimeWarning` |
| 🟠 P2 | [#63911](https://github.com/nousresearch/hermes-agent/issues/63911) Telegram root-lobby 静默吞 kanban 唤醒事件 | 已关闭（cannot-reproduce） | ❓ 需复核 | sweeper 标记无法复现，但问题描述非常具体 |
| 🟠 P2 | [#64201](https://github.com/nousresearch/hermes-agent/issues/64201) 流式输出时 subagent 结果丢失 | 已关闭 | ✅ 落地 main | Windows 10 / v0.18.2 |
| 🟠 P2 | [#63724](https://github.com/nousresearch/hermes-agent/issues/63724) Telegram 409 死循环 4 天不感知 | 已关闭 | ✅ 落地 main | fatal/restart 路径不可达 |
| 🟠 P2 | [#64217](https://github.com/nousresearch/hermes-agent/issues/64217) `switch_model` 丢 `extra_headers` → 403 | 已关闭 | ✅ 落地 main | 自托管 WAF 用户受影响 |
| 🟠 P2 | [#64079](https://github.com/nousresearch/hermes-agent/issues/64079) Studio 自动更新缺 pip 依赖（二次出现） | 已关闭 | ✅ 落地 main | Windows 嵌入式 Python runtime |
| 🟠 P2 | [#63698](https://github.com/nousresearch/hermes-agent/issues/63698) Windows 控制台闪现 | 已关闭 | ✅ 落地 main / [#64198](https://github.com/nousresearch/hermes-agent/pull/64198) | 同一根因 |
| 🟠 P2 | [#63680](https://github.com/nousresearch/hermes-agent/issues/63680) 自定义 provider 不传 tools | 已关闭（cannot-reproduce） | ❓ | Ollama 自定义端点用户 |
| 🟠 P2 | [#44771](https://github.com/nousresearch/hermes-agent/issues/44771) Curator 4 小时 91M token 死循环 | OPEN | ❌ | 26 个 `lark-*` 符号链接触发；Kimi 限流兜底 |
| 🟠 P2 | [#64789](https://github.com/nousresearch/hermes-agent/issues/64789) Desktop 三种 session 身份漂移 → 提交命中错误 runtime | OPEN | ❌ | `#54527` 漂移守卫存在缝隙 |
| 🟠 P2 | [#65297](https://github.com/nousresearch/hermes-agent/issues/65297) Desktop 图片粘贴 session ID 漂移 | OPEN | ❌ | macOS Apple Silicon / v0.18.2 |
| 🟠 P2 | [#52514](https://github.com/nousresearch/hermes-agent/issues/52514) Desktop 检查点恢复失败 | OPEN | ❌ | Win11 / Desktop v0.17.0 |
| 🟠 P2 | [#65300](https://github.com/nousresearch/hermes-agent/issues/65300) Desktop 新会话忽略 config.yaml 默认模型 | OPEN | ❌ | sticky composer 模型覆盖默认 |
| 🟡 P3 | [#65034](https://github.com/nousresearch/hermes-agent/issues/65034) Dashboard 全量备份静默失败 | OPEN | ❌ | v0.18.2 / CLI 参数语法不匹配 |
| 🟡 P3 | [#63668](https://github.com/nousresearch/hermes-agent/issues/63668) Termux 下希望去除 `--tui` | 已关闭 | ✅ 落地 main | 重复诉求 |

**稳定性趋势**：会话状态类 bug（session drift、ID 漂移）正成为 Desktop 与 Gateway 的最大系统性风险，已出现 [#64789](https://github.com/nousresearch/hermes-agent/issues/64789)、[#65297](https://github.com/nousresearch/hermes-agent/issues/65297)、[#65300](https://github.com/nousresearch/hermes-agent/issues/65300)、[#52514](https://github.com/nousresearch/hermes-agent/issues/52514) 四个同源问题，建议后续版本专门做一个"会话身份一致性"主题 sprint。

---

## 6. 功能请求与路线图信号

| 方向 | 代表 Issue | 已关联 PR | 进入下版本可能性 |
|---|---|---|---|
| **CLI 可脚本化**（JSON 输出、profile 优先加载） | [#3326](https://github.com/nousresearch/hermes-agent/issues/3326)（👍 5）、[#63874](https://github.com/nousresearch/hermes-agent/pull/63874) | ✅ [#63874](https://github.com/nousresearch/hermes-agent/pull/63874) OPEN | **高**（已有 PR，社区认可度高） |
| **插件接口稳定化** | [#64182](https://github.com/nousresearch/hermes-agent/issues/64182) | — | **高**（teknium1 亲自追踪） |
| **Provider/Model 可脚本清单** | [#23359](https://github.com/nousresearch/hermes-agent/issues/23359) | ❌ | 中（5 个并行 PR 重复造轮子，亟需收敛） |
| **OpenAI 图像端点配置化** | [#65309](https://github.com/nousresearch/hermes-agent/issues/65309) | ❌ | 中 |
| **Delegate 超时可配置** | [#64089](https://github.com/nousresearch/hermes-agent/issues/64089) | ❌ | 中（已标记 duplicate 但根问题仍存在） |
| **Desktop 右栏默认视图可配置** | [#64666](https://github.com/nousresearch/hermes-agent/issues/64666) | ❌ | 中 |
| **MCP 元数据透传** | [#64890](https://github.com/nousresearch/hermes-agent/issues/64890) | ❌ | 中（企业级多租户诉求） |
| **PreToolUse 强制钩子** | [#63770](https://github.com/nousresearch/hermes-agent/issues/63770) | ❌ | 中（重复 issue 已关，根因未触及） |
| **新会话默认模型** | [#65300](https://github.com/nousresearch/hermes-agent/issues/65300) | ❌ | 中 |
| **背景任务收敛** | [#65318](https://github.com/nousresearch/hermes-agent/pull/65318) | ✅ 已有 PR | **高** |
| **Hermes 高速度模型变体** | [#11367](https://github.com/nousresearch/hermes-agent/issues/11367) | ❌ | 低（仅模型清单补充） |

---

## 7. 用户反馈摘要

从今日 Issues 评论与摘要中提炼：

1. **"提交了却没被看到"——Telegram 用户群最深痛点**
   [#63724](https://github.com/nousresearch/hermes-agent/issues/63724) 用户描述："在 4 天里我都没注意到 bot 已经聋了。" 反映当前 Telegram 适配器**健康检查与 fatal 路径之间存在缺口**，监控告警不够。

2. **"系统消息

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-07-16**
**项目：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日活跃度处于**中等偏低**水平：过去 24 小时内共产生 6 条 Issues 更新与 2 条 PR 更新，但**无任何 PR 合并或新版本发布**。新开/活跃 Issues 3 条（2 个 Bug + 1 个功能请求），同时有 3 条历史 Issues 因长期无活动被标记为 stale 并自动关闭，呈现"清理与新建并行"的状态。项目当前最新线上版本仍为 **v0.3.1**（构建于 2026-07-03），距今已 13 天无新发布，维护节奏放缓信号明显。

---

## 2. 版本发布

**今日无新版本发布。** 当前最新版本为 [v0.3.1](https://github.com/sipeed/picoclaw/releases)（构建时间 2026-07-03T07:10:50Z），距今 13 天未更新。

---

## 3. 项目进展

**今日无 PR 合并或关闭。** 推进中的 PR 包括：

- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222)** — `refactor(deltachat): cleanup implementation, documentation -200LOC`
  - 该 PR 创建于 2026-07-03（已开放 13 天），今日仍有更新动作，作者 trufae 对 DeltaChat 通道进行重构，删除遗留特性、改用官方 relay 列表替代硬编码、移除基于密码的邮件配置（凭据迁移至 jsonrpc），并重命名 `invite_link` 为 `join_invite_link`。
  - **影响评估**：属于通道层清理，技术债偿还类工作，未涉及核心协议变更，但 jsonrpc 凭据迁移属于**潜在破坏性变更**，需用户关注配置迁移。
  - **当前状态**：长期未合并，建议维护者安排 review。

- **[PR #3259](https://github.com/sipeed/picoclaw/pull/3259)** — `Update PicoClaw description for parallelization`
  - 仅为项目描述文档微调，补充关于并行化能力的说明。**影响极低**。

**整体评估**：项目今日在功能推进上**实质性进展为零**，DeltaChat 重构 PR 已悬置近两周，是当前最值得维护者关注的合并候选。

---

## 4. 社区热点

按评论数与活跃度排序：

| 排名 | Issue | 标题 | 评论数 | 链接 |
|------|-------|------|--------|------|
| 1 | #3153 | Volcengine Doubao Seed tool calls occasionally leak as `<seed:tool_call>` text | 4 | [链接](https://github.com/sipeed/picoclaw/issues/3153) |
| 2 | #3197 | Codex and antygravity oauth login not working | 2 | [链接](https://github.com/sipeed/picoclaw/issues/3197) |
| 2 | #3196 | Codex and antygravity oauth login not working (疑似重复) | 2 | [链接](https://github.com/sipeed/picoclaw/issues/3196) |

**诉求分析**：
- **#3153** 反映了用户在使用火山引擎 Doubao 模型时，工具调用（tool call）解析出现异常，原始 XML 文本泄漏给用户——这是典型的 **provider 适配层健壮性**问题，社区有 4 条讨论说明该问题并非偶发个案。
- **#3196/#3197** 高度疑似重复 Issue（同作者 nyawitniorang 同一日创建，同标题），均反映 Codex 与 antygravity 的 OAuth 登录失败（v0.2.9）。**重复 Issue 的出现**说明项目缺乏 issue 模板引导，且搜索体验有待优化。

⚠️ 需注意：上述 3 条 Issues 今日均已被标记为 `[stale]` 并自动关闭，社区讨论热度虽存但已被系统清理，存在**有价值的反馈被误伤**的风险。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度
- **[Issue #3260](https://github.com/sipeed/picoclaw/issues/3260)** — `picoclaw launcher doesn't exist for ARM64 (arm64) release`
  - **环境**：v0.3.1 / Go 1.25.11 / Raspbian Lite (aarch64) / Raspberry Pi 3B
  - **现象**：从 [picoclaw.io](https://picoclaw.io/) 下载的 ARM64 release 包中缺失 launcher 二进制文件
  - **影响**：直接导致树莓派用户**完全无法运行** PicoClaw，是平台兼容性问题
  - **是否已有 fix PR**：❌ 无

### 🟡 中严重度
- **[Issue #3258](https://github.com/sipeed/picoclaw/issues/3258)** — `Process Hook before_tool modify not working`
  - **环境**：v0.3.1 / DeepSeek / Ubuntu 22.04 / Telegram 通道
  - **现象**：`before_tool` hook 的 modify 模式下，`decision` 字段被丢弃、`args` 因反序列化缺陷被错误解析
  - **影响**：Hook 系统的核心拦截/修改能力失效，影响 Rtk 等基于 hook 的扩展生态
  - **是否已有 fix PR**：❌ 无

### ⚪ 已关闭（stale）
- **[Issue #3153](https://github.com/sipeed/picoclaw/issues/3153)** — Doubao tool_call 泄漏（v0.2.8）
- **[Issue #3196](https://github.com/sipeed/picoclaw/issues/3196) / [#3197](https://github.com/sipeed/picoclaw/issues/3197)** — Codex/antygravity OAuth 登录失败（v0.2.9）

---

## 6. 功能请求与路线图信号

### [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257) — `Add stateless/no-history mode for gateway sessions`
- **提出者**：lisiying（2026-07-15）
- **核心诉求**：在 `picoclaw gateway` 模式下，目前无法像 `picoclaw agent --session` 那样通过指定唯一 session 值来创建无历史会话。当前 gateway 模式的 session key 由 channel/chat 派生，缺乏"一次性对话"能力。
- **使用场景**：CLI 一次性调用、Webhook 触发等无状态场景
- **路线图纳入可能性评估**：⭐⭐⭐ **较高**
  - 该需求清晰、范围明确、与已有 `agent --session` 行为存在一致性预期
  - 实施成本可控（仅为 gateway 层 session 策略扩展）
  - 建议维护者将其纳入 v0.3.2 或 v0.4.0 的 milestone

### [PR #3259](https://github.com/sipeed/picoclaw/pull/3259) — 并行化描述更新
- 补充项目"better parallelization"宣传文案，结合其他并发相关进展（如 hook 改进），可推断**并行化能力是当前路线图重点之一**。

---

## 7. 用户反馈摘要

从过去 24 小时的 Issues 与 PR 中提炼的真实用户声音：

| 痛点/场景 | 证据来源 |
|----------|---------|
| **国产模型适配脆弱**：用户使用火山引擎 Doubao 时遭遇 tool call 解析崩溃（#3153），说明 provider 适配层对国产模型协议支持不够成熟 | [Issue #3153](https://github.com/sipeed/picoclaw/issues/3153) |
| **OAuth 登录链路不稳定**：v0.2.9 中 Codex 与 antygravity 的 OAuth 流程均失败，影响新用户 onboarding | [Issue #3196](https://github.com/sipeed/picoclaw/issues/3196), [#3197](https://github.com/sipeed/picoclaw/issues/3197) |
| **ARM 平台用户体验差**：Raspberry Pi 用户从官网下载 ARM64 release 后无法启动，反映**发布物质量校验缺失** | [Issue #3260](https://github.com/sipeed/picoclaw/issues/3260) |
| **Hook 扩展机制存在契约缺陷**：`before_tool` 的 modify 协议与文档描述不符，反序列化行为未对齐 | [Issue #3258](https://github.com/sipeed/picoclaw/issues/3258) |
| **Gateway 灵活性不足**：在 webhook/无状态调用场景下缺乏会话隔离手段 | [Issue #3257](https://github.com/sipeed/picoclaw/issues/3257) |

**整体满意度信号**：🔴 **偏低**。今日新开的 3 条 Issues 中有 2 个为阻塞性 Bug（ARM64 不可用、Hook 失效），且历史 Issues 普遍依赖 stale 机制关闭（而非人工响应），社区维护响应度有待提升。

---

## 8. 待处理积压

### 长期未响应的重要项

- **[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) — DeltaChat 重构（已开放 13 天）**
  - 涉及 -200LOC 的清理工作与凭据存储迁移，影响使用 DeltaChat 通道的用户
  - **建议**：维护者应尽快安排 review，决定合并或退回，避免与主线产生更大合并冲突

- **[Issue #3260](https://github.com/sipeed/picoclaw/issues/3260) — ARM64 启动器缺失**
  - 新开 Issue 但影响范围明确（所有 Raspberry Pi/ARM64 用户）
  - **建议**：纳入下个 patch 版本的 hotfix 优先级

- **[Issue #3258](https://github.com/sipeed/picoclaw/issues/3258) — Hook 反序列化缺陷**
  - 影响 Rtk 等第三方 hook 扩展生态
  - **建议**：建议在合并 hook 相关 PR 时一并处理

### 风险提示
- **Stale 机制误关有价值 Issue**：#3153、#3196、#3197 均因无活动被自动关闭，但 #3153 的 4 条评论与 #3196/3197 的 OAuth 失败描述表明问题真实存在，关闭后无后续跟踪，存在**用户声音流失**风险。建议维护者审查 stale 关闭列表，对涉及具体版本的可复现 Bug 重新开启并打上版本标签。

---

## 附录：数据汇总

| 指标 | 数值 |
|------|------|
| 24h Issues 更新 | 6 |
| └ 新开/活跃 | 3 |
| └ 已关闭（stale） | 3 |
| 24h PR 更新 | 2 |
| └ 待合并 | 2 |
| └ 已合并/关闭 | 0 |
| 新版本发布 | 0 |
| 当前最新版本 | v0.3.1 (2026-07-03) |
| 距上次发布 | 13 天 |

**报告生成时间**：2026-07-16
**数据来源**：GitHub REST API (sipeed/picoclaw)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-07-16 | 数据周期：过去 24 小时**

---

## 1. 今日速览

NanoClaw 过去 24 小时共发生 **13 起更新事件**（2 个 Issue + 11 个 PR），整体活跃度处于 **中等偏上** 水平，且呈现明显的"修 bug + 加 provider + 加基础设施"三轮驱动特征。社区侧当天有 4 个 PR 完成合并/关闭，其中 **provider-agnostic 持久化记忆系统**（#3012 / #3013）和 **OpenCode provider 接入**（#3056）是本周最具实质意义的进展；与此同时，仓库迎来了一波稳定性修复 PR 集中提交（容器运行、消息投递、provider 预检），反映出项目进入"功能扩展 + 质量收敛"并行的阶段。Issue 端 1 开 1 关，存量 #3058 在 24 小时内即被原作者附带 fix PR #3059 跟进，修复链条完整。

---

## 2. 版本发布

无新版本发布。本周期内合并的 4 个 PR（#3012、#3013、#3055、#3056）将随下一次常规发版一起进入 tag。

---

## 3. 项目进展

过去 24 小时共 **关闭/合并 4 个 PR**，其中 3 个来自核心团队（`core-team` 标签），代表 NanoClaw 当下优先级最高的几个方向：

| PR | 主题 | 影响 |
|---|---|---|
| [#3012](https://github.com/qwibitai/nanoclaw/pull/3012) | **feat(memory): provider-agnostic 持久化记忆** | **里程碑级**。为每个 agent group 注入 `memory/index.md` 与 `memory/system/definition.md`，在 startup / clear / compaction 时加载并排除 resume，是 NanoClaw 跨 provider 记忆系统的地基。 |
| [#3013](https://github.com/qwibitai/nanoclaw/pull/3013) | **feat(codex): 加载共享记忆** | #3012 在 Codex 侧的镜像实现，通过注册 Codex 原生 `SessionStart` hook 完成衔接。两者同日合并，意味着"持久化记忆"已完整闭环到 Claude 与 Codex 两个 provider。 |
| [#3056](https://github.com/qwibitai/nanoclaw/pull/3056) | **feat(opencode): 接入 OpenCode provider** | 容器 agent-runner 引入第三个 provider（继 Claude、Codex 之后），新增 `opencode serve` 子进程生命周期管理、MCP 配置翻译与 idle-timeout 处理，多 provider 战略进一步推进。 |
| [#3055](https://github.com/qwibitai/nanoclaw/pull/3055) | **feat: 部署脚本 deploy.sh** | 仓库根新增一键重部署脚本（`git pull --ff-only` → `pnpm install --frozen-lockfile` → `pnpm build` → 重启 naunchd/systemd），降低运维门槛。 |

整体来看，项目在 **多 provider 抽象、跨 provider 记忆、运维脚本化** 三条主线上完成了一次实质推进，向"框架级 agent runtime"形态又迈进了一步。

---

## 4. 社区热点

按互动量与潜在影响力排序：

- **#3058 [OPEN] Transient outbound-send failures are permanently dropped after 3 fast retries** —— [Issue 链接](https://github.com/qwibitai/nanoclaw/issues/3058)
  作者 @mashkovtsevlx 指出 `src/delivery.ts` 在 `MAX_DELIVERY_ATTEMPTS = 3` 之后无条件调用 `markDeliveryFailed()`，未区分网络抖动（timeout / 429 / 5xx）和真正的永久错误，导致用户消息在临时故障下被永久丢弃。该 Issue 当日已引发 1 条评论，并直接催生了配套 PR #3059，**属于"高优缺陷 + 当日修复"的典型样本**。

- **#3054 [CLOSED] agent_message_policies 行可能孤立存在** —— [Issue 链接](https://github.com/qwibitai/nanoclaw/issues/3054)
  涉及 `017-agent-message-policies` 迁移的两条 `NOT NULL REFERENCES agent_groups(id)` FK，group 删除路径与 CLI 目的地清理路径都未级联清理，已关闭（暂未在公开数据中看到对应的修复 PR，需维护者确认）。

- **#3057 [OPEN] feat: automatic Claude↔Codex quota fallback (+ Telegram/WhatsApp channels, pilot activation)** —— [PR 链接](https://github.com/qwibitai/nanoclaw/pull/3057)
  作者 @elia-ben-cnaan 的"野心之作"：在 Claude 配额耗尽时自动 fail-over 到 Codex，并在同 PR 内新增 Telegram / WhatsApp 通道适配器与 pilot 激活模块。覆盖面广、关注度高，是本周最具讨论潜力的 PR。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 问题 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3058](https://github.com/qwibitai/nanoclaw/issues/3058) | 投递失败仅重试 3 次（约 3 秒）即永久丢弃，未做 transient / permanent 区分；正常网络抖动会导致用户消息丢失。 | ✅ 已有 [#3059](https://github.com/qwibitai/nanoclaw/pull/3059)（同日提交，待合并） |
| 🟠 中 | [#3054](https://github.com/qwibitai/nanoclaw/issues/3054) | `agent_message_policies` 表在 group 删除 / CLI 目的地移除路径下未级联清理，遗留孤儿行；因 `foreign_keys = ON` 会导致后续 FK 失败。 | ⚠️ Issue 已关闭但当日无对应修复 PR 公开 |
| 🟠 中 | [#3053](https://github.com/qwibitai/nanoclaw/pull/3053) | `agent-runner` 在空闲时不会主动 stand down，全部依赖宿主 30 分钟 SIGTERM 兜底，产生大量无效容器。 | ✅ 已有修复 PR（待合并） |
| 🟠 中 | [#3052](https://github.com/qwibitai/nanoclaw/pull/3052) | Colima / Lima / Rancher Desktop 等 macOS VM 容器运行时无法解析 `host.docker.internal`。 | ✅ 已有修复 PR（待合并） |
| 🟡 低 | [#3051](https://github.com/qwibitai/nanoclaw/pull/3051) | 修改 `provider` / `model` 等字段保存前未做 provider 配置预检，可能保存后才发现不可用。 | ✅ 已有修复 PR（待合并） |

**稳定性总评**：24 小时内新报告的关键 bug 均已附带修复 PR，缺陷从发现到 patch 的链路较短，社区响应健康。

---

## 6. 功能请求与路线图信号

- **Claude → Codex quota fallback（#3057）**：是当下最可能进入下一版本的功能。作者将"per-agent-group 自动 fail-over + Telegram/WhatsApp 通道 + pilot 激活"打包进一个 PR，体量偏大，预计需要拆分 review；但其信号明确——**多 provider 互备将成为 NanoClaw 的差异化卖点**。
- **OpenCode provider（#3056，已合并）**：标志着"可插拔 provider"路线已扩展到第 3 家实现，可推断后续还会有更多 provider 适配（PR 描述中已提到 MCP 翻译、idle-timeout 等可复用抽象）。
- **Provider 预检（#3051）**：虽为 bug fix，但实际是"配置校验"功能的雏形，暗示后续可能演化为完整的 provider 健康检查模块。
- **统一审批生命周期（#3040）**：把分散的 approval holds 收敛到单一 lifecycle contract，是 #3054 FK 孤儿行问题的根本解法，路线图价值较高。

---

## 7. 用户反馈摘要

过去 24 小时 Issue/PR 评论量整体偏低（公开数据中 #3058 仅 1 条评论，其余多为 0），可直接提炼的用户声音有限。仍可识别的痛点：

- **"消息丢了我都不知道"** —— #3058 的实质诉求：失败必须有可观测性，3 秒内重试 3 次就放弃，对终端用户而言等同静默丢消息，且不可恢复。
- **"改了 provider 配置保存才报失败"** —— #3051 的诉求方强调希望"保存即生效"，保存前就应校验，避免需要"撤销"或"清理孤儿"操作。
- **"容器赖着不走"** —— #3053 / #3052 反映同一类运维体感：在 Colima 等非主流 runtime 上，容器退出时机不可控，宿主资源被无谓占用。

总体满意度信号：当日合并的核心 PR（#3012、#3013、#3056）均来自 `core-team`，说明维护者节奏稳定；新功能 PR（#3057）的高覆盖度也表明社区贡献者对项目方向有较强认同。

---

## 8. 待处理积压

需要维护者关注、长期未推进的条目：

- **#2591（创建于 2026-05-22，更新于 2026-07-15）** —— [PR 链接](https://github.com/qwibitai/nanoclaw/pull/2591)
  `fix: namespace user IDs by channel-type prefix, not bare colon`。该 PR 已躺了 **近两个月**，涉及 channel 类型命名空间标准化，属于可能引发跨 channel ID 冲突的底层问题，建议核心团队优先 review。
- **#3040（创建于 2026-07-14）** —— [PR 链接](https://github.com/qwibitai/nanoclaw/pull/3040)
  `fix: unify approval holds behind one lifecycle contract`，与已关闭的 #3054 同源，是真正能根除孤儿 policy 行的方案，目前仍 OPEN。
- **#3057（体量偏大）** —— 包含 fallback、两个新 channel、pilot 激活四块功能，建议拆 PR 推进，否则 review 周期可能拖至下周。

---

**报告生成时间**：2026-07-16  
**数据来源**：GitHub REST API（issues + pulls 列表快照）  
**健康度评分**：⭐⭐⭐⭐☆（4/5）—— 缺陷修复链路短、核心 PR 合并节奏稳；但存在 1 个近两个月未动的 PR（#2591）和 1 个体量过大的待审 PR（#3057），需关注 review 吞吐。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-07-16

> 数据来源：[nearai/ironclaw](https://github.com/nearai/ironclaw) GitHub 仓库，过去 24 小时动态

---

## 1. 今日速览

IronClaw 今日维持高强度开发节奏，仓库在 24 小时内处理了 23 条 Issue（关闭 8 条、新开/活跃 15 条）和 38 条 PR（合并/关闭 13 条、待合并 25 条），整体活跃度处于"高产期"。工作重心明显集中在两条主线：**Reborn 架构迁移与清理**（#6116、#6123、#6122、#6121 等 XL 级 PR 推动 v1 运行时退役）以及**集成测试与可观测性建设**（tier-2 harness 扩展、SSE 契约、channel-lifecycle 状态机）。Slack 集成仍是 QA Bug Bash 的"重灾区"——5 条 P1/P2 级 Slack 相关 Issue 在过去 24 小时内仍处于 Open 状态，需要重点关注。**项目健康度评估：中等偏上**，代码侧推进强劲但用户体验层（Slack 通知、加载态、忙碌错误）有持续累积风险。

---

## 2. 版本发布

**今日无新版本发布。**

> 提示：上一变更出现在 [PR #5598](https://github.com/nearai/ironclaw/pull/5598) 提议的 `chore: release`（`ironclaw` 0.24.0 → 0.29.1），该 PR 仍处 Open 状态，包含 `ironclaw_common` 0.4.2 → 0.5.0、`ironclaw_skills` 0.3.0 → 0.4.0 等**破坏性 API 变更**，合并前应重点评估。

---

## 3. 项目进展

今日合并/关闭的 13 条 PR 中，多条推进了**可观测性、UX 一致性、Slack 恢复能力**等关键能力：

| PR | 标题 | 影响 |
|---|---|---|
| [#6135](https://github.com/nearai/ironclaw/pull/6135) (XL) | fix(reborn): recover Slack host after OAuth activation | 修复 OAuth 激活后 Slack host 不可用问题，强化 catalog 校验与 post-OAuth 恢复 |
| [#6128](https://github.com/nearai/ironclaw/pull/6128) (XL) | fix(auth): audit + review blockers（scope ceiling、Notion refresh、fan-out retryability、removal/callback race） | 修复统一扩展运行时分支上的鉴权生命周期审计问题 |
| [#6084](https://github.com/nearai/ironclaw/pull/6084) (M) | feat(webui): replace native confirmations with a shared modal | 替换浏览器原生 `confirm()`，统一 Reborn 设计系统，对应 [#6083](https://github.com/nearai/ironclaw/issues/6083) |
| [#6082](https://github.com/nearai/ironclaw/pull/6082) (S) | fix(webui-v2): render extension registry without enrichment delay | 解决扩展注册表加载延迟，直接渲染 catalog，提升首屏响应 |
| [#6055](https://github.com/nearai/ironclaw/pull/6055) (M) | test(reborn): StaleSurface same-run refresh + extension-remove channel-cleanup | 集成测试覆盖 StaleSurface 同 run 刷新与扩展移除时的 channel 清理 |
| [#6087](https://github.com/nearai/ironclaw/issues/6087) → 配套修复 | Extension catalog load failures shown as empty state | 区分"空目录"与"加载失败"两种状态 |
| [#6085](https://github.com/nearai/ironclaw/issues/6085) → 配套修复 | Admin user details broken Create token action | 移除无效的 Create token 按钮 |
| [#6052](https://github.com/nearai/ironclaw/issues/6052) | Extensions Registry 10 秒加载 | 性能优化落地 |
| [#6044](https://github.com/nearai/ironclaw/issues/6044) | Enter 键偶发不提交消息 | WebUI 修复 |
| [#5886](https://github.com/nearai/ironclaw/issues/5886) | Pending approval 阻塞后续自动化运行 | 调度器修复 |
| [#5741](https://github.com/nearai/ironclaw/issues/5741) | builtin.http.save 大响应输出 | 修复大输出场景 |
| [#3533](https://github.com/nearai/ironclaw/issues/3533) | Telegram UI 配对流程 | 文档/UI 提示更新 |

**整体进展评估：** 单日合并 13 条 PR 中 4 条为 XL 级（[#6135](https://github.com/nearai/ironclaw/pull/6135)、[#6128](https://github.com/nearai/ironclaw/pull/6128) 等），含金量较高；功能、测试、UX 修复三类工作分布均衡，**项目整体处于稳步向 v1 退役、Reborn 全面接管的过渡期**。

---

## 4. 社区热点

虽然 Issue 评论数普遍不高（多数为 0–3 条），但以下议题**反映了反复出现的用户痛点和 QA 团队的一致关注**：

- **[#6105 Extension/channel lifecycle state-machine test](https://github.com/nearai/ironclaw/issues/6105)**（ilblackdragon 提议）：明确指出"extension/channel lifecycle — Slack above all — 是过去两周**用户面第一大 bug 家族**"，已在 4 次 QA Bug Bash 中反复回归（#5834、#5877、#5882、#5943、#5944、#5851、#5898、#5953、#5957、#6054 多次修复后仍复现），并要求"把 channel canary lanes 挂上 cron"。**诉求核心：把当前被动救火变为主动监控。** 对应交付 PR [#6113](https://github.com/nearai/ironclaw/pull/6113) 已 OPEN。
- **[#6124 Daily ironclaw failure taxonomy — 2026-07-15](https://github.com/nearai/ironclaw/issues/6124)**（pranavraja99）：每日故障分类法日报，沉淀 clawbench 等基准中**约 77% 失败来自基准缺陷而非模型质量**——是项目质量治理走向数据驱动的重要信号。
- **[#6138 / #6137 / #6136](https://github.com/nearai/ironclaw/issues/6138)**：来自 tier-2 集成 harness 扩展（[#6134](https://github.com/nearai/ironclaw/pull/6134)）过程中的发现，说明**测试驱动正在反向暴露生产代码的真实缺陷**（如 `WebChatV2Event` 的 dead code 变体、混合批次门控不重派、复合 denied-gate 场景无法表达），工程文化健康。

---

## 5. Bug 与稳定性

按严重程度排列的今日活跃 Bug（仅列仍 OPEN 且有意义的项）：

### 🔴 P1（高严重度）
- **[#5943 Slack DM action posts to current channel instead of user's DMs](https://github.com/nearai/ironclaw/issues/5943)**：要求 IronClaw"给我发个 Slack DM"，结果发到 QA 共享频道。**当前无 fix PR**。
- **[#5877 Slack notification delivered to the wrong user](https://github.com/nearai/ironclaw/issues/5877)**：通知误发给无关用户，**可能涉及敏感工作流结果泄露**。当前无 fix PR。
- **[#3533 (新关闭)](https://github.com/nearai/ironclaw/issues/3533)**：Telegram 0.28.1 配对流程 UI 文档陈旧 ✅ 已关闭。

### 🟠 P2（中等严重度）
- **[#5834 Slack disconnect request is incorrectly rejected by agent](https://github.com/nearai/ironclaw/issues/5834)**（评论 3 条）：Agent 拒绝执行 disconnect。当前无 fix PR。
- **[#5944 Slack DM silently fails but run reports success](https://github.com/nearai/ironclaw/issues/5944)**：绿勾 + 实际未送达，**误导性成功状态**。当前无 fix PR。
- **[#5882 Repeated Slack reconnect attempts leave auth flow in broken state](https://github.com/nearai/ironclaw/issues/5882)**：反复重连后 OAuth 卡死，唯一恢复方式是卸载重装。当前无 fix PR。
- **[#6125 User message rejected with "busy" error while routine runs in background](https://github.com/nearai/ironclaw/issues/6125)**：后台 routine 运行时用户消息被拒，等于"对话锁死"。当前无 fix PR。
- **[#5886 (已关闭)](https://github.com/nearai/ironclaw/issues/5886)**：Pending approval 阻塞后续自动化运行 ✅。

### 🟡 P3（低严重度）
- **[#6127 Running routine incorrectly displays "Previous run still in progress"](https://github.com/nearai/ironclaw/issues/6127)**：首次运行状态显示错误。
- **[#6126 First message in a new chat has no loading or streaming state](https://github.com/nearai/ironclaw/issues/6126)**：新会话首条消息无任何 loading 反馈，**体验冻结感**。
- **[#6052 (已关闭)](https://github.com/nearai/ironclaw/issues/6052)**：扩展注册表 10 秒加载 ✅。

### 🔬 隐性 Bug（由测试发现）
- **[#6137 Mixed-batch gate resume never redispatches the non-first gated call](https://github.com/nearai/ironclaw/issues/6137)**：批处理中非首位的 gated call 不被重新调度。
- **[#6136 WebChatV2Event accepted/cancelled/failed variants are dead code](https://github.com/nearai/ironclaw/issues/6136)**：死代码揭示 SSE 协议中 3 个变体**从未在生产构造**。
- **[#6138 Tier-2 harness can't express compound denied-gate + HTTP-egress-error](https://github.com/nearai/ironclaw/issues/6138)**：测试覆盖盲点。

**稳定性观察**：Slack 相关 P1/P2 已有 4 条**同时 Open 且无对应 fix PR**，建议在下一次 Bug Bash 前优先处理 [#5834](https://github.com/nearai/ironclaw/issues/5834)、[#5944](https://github.com/nearai/ironclaw/issues/5944)、[#5882](https://github.com/nearai/ironclaw/issues/5882) 这三条**用户完全无法自助恢复**的场景。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 关联 PR / 状态 | 进入下一版本的概率 |
|---|---|---|---|
| Channel canary lanes on cron（持续监控 channel 生命周期） | [#6105](https://github.com/nearai/ironclaw/issues/6105) | [#6113](https://github.com/nearai/ironclaw/pull/6113) 已在做 | **高**（PR 已在 review） |
| `github.get_job_logs` 能力 + SSRF-safe redirect egress | — | [#6140](https://github.com/nearai/ironclaw/pull/6140) OPEN | **高**（带录制 demo） |
| OAuth 流程生命周期修复（supersede-on-start、持久化 PKCE verifiers） | — | [#6130](https://github.com/nearai/ironclaw/pull/6130) OPEN | **高**（red-first 测试齐全） |
| 统一通用扩展运行时（Unified generic extension runtime） | — | [#6116](https://github.com/nearai/ironclaw/pull/6116) OPEN | **中**（与 main 有 92 commits delta，复杂） |
| 退役 v1 运行时 | — | [#6123](https://github.com/nearai/ironclaw/pull/6123) OPEN | **中**（XL + DB migration + 高风险） |
| Release/Docker 路径重定向至 Reborn | — | [#6122](https://github.com/nearai/ironclaw/pull/6122) OPEN | **中** |
| 迁移默认走 legacy-free 路径 | — | [#6121](https://github.com/nearai/ironclaw/pull/6121) OPEN | **中** |
| Admin UI 暴露 per-user secrets 管理 | [#6118](https://github.com/nearai/ironclaw/issues/6118) | 后端 API 已支持，UI 缺 | **中**（小工作量） |
| Workspace 本地化（区域名）+ 人类可读文件大小 | [#6117](https://github.com/nearai/ironclaw/issues/6117) | 无 | **中** |
| Approval gate 通知打开时 hydrate | — | [#5910](https://github.com/nearai/ironclaw/pull/5910) OPEN（7-10 创建，已 6 天） | **中**（老 PR，需推动） |

**路线图信号**：未来 1–2 个版本明显会围绕"Reborn 全面接管 + v1 退役"展开；与之配套的 OAuth/host/channel 生命周期加固是必经之路。**`github.get_job_logs` 能力**的引入暗示 IronClaw 正尝试把自身定位为可"修复自家 CI"的 agent。

---

## 7. 用户反馈摘要

虽然评论数量整体偏低，但从已关闭和活跃 Issue 的描述中可提炼出以下**真实用户痛点**：

1. **"Slack 集成像是在玩俄罗斯轮盘"** —— [#5877](https://github.com/nearai/ironclaw/issues/5877) "通知被发给无关用户"、[#5944](https://github.com/nearai/ironclaw/issues/5944) "报告成功但消息未送达"、[#5943](https://github.com/nearai/ironclaw/issues/5943) "DM 发到频道"、[#5882](https://github.com/nearai/ironclaw/issues/5882) "重连后 OAuth 卡死"、[#5834](https://github.com/nearai/ironclaw/issues/5834) "agent 拒绝 disconnect"。**用户感受：失败模式不可预测且无法自助恢复。**
2. **"后台任务一跑就锁住对话"** —— [#6125](https://github.com/nearai/ironclaw/issues/6125) routine 执行时用户消息被 "busy" 拒绝。**用户感受：多任务场景下被单线程化。**
3. **"加载体验不友好"** —— [#6126](https://github.com/nearai/ironclaw/issues/6126) 首条消息无任何 loading 反馈、#6052 旧问题中注册表 10 秒白屏。**用户感受：分不清"加载中"还是"页面挂了"。**
4. **"反馈与实际不一致"** ——

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-07-16**

---

## 1. 今日速览

LobsterAI 今日整体活跃度较高，项目迎来 **2026.7.15 版本发布**，围绕该版本合并/关闭了 11 个 PR，涵盖更新提示优化、设置页重构、新模型接入、IM 会话加载修复等多项改进。Issues 侧呈现典型的"僵尸清理日"特征——5 个旧 Issue 因 stale 策略被自动关闭，仅 1 个新 Issue 由用户提出（关于左下角广告弹窗）。CI 侧 dependabot 仍有 5 个依赖升级 PR 待合并。项目处于**版本迭代完成、依赖维护待跟进**的健康状态。

---

## 2. 版本发布

### 🦞 LobsterAI 2026.7.15（2026-07-15 发布）

**核心更新内容**：

- **优化文件卡片** (#2322) — 提升文件展示体验
- **新增 Windows Web 安装包构建目标** (#2323) — 扩展 Windows 端分发渠道
- **改版首页快捷操作场景** (#23xx) — 提升 Cowork 模块首页引导

**破坏性变更**：未明确披露，但从 PR #2340（revert #2337 "fix: fixed model not allowed"）可见，模型权限相关曾有一次回滚操作，提示该版本在模型接入稳定性上仍需观察。

**迁移注意事项**：
- 用户升级后默认模型列表将新增 **GPT-5.6 与 Grok 4.5**（#2332），系统会通过归一化 ID 匹配已有用户模型，避免重复创建
- 通用设置页被重组为"基础 / 通知 / 数据与隐私"三大分组，权限与问题通知合并为统一的"消息提醒"开关，旧用户需重新熟悉新布局

---

## 3. 项目进展

今日推进的 11 个已合并/关闭 PR 覆盖了产品体验、稳定性、AI 能力扩展三个维度：

| 类型 | PR | 价值 |
|------|-----|------|
| 模型升级 | [#2332](https://github.com/netease-youdao/LobsterAI/pull/2332) — 新增 GPT-5.6 / Grok 4.5 默认模型 | 跟进前沿模型，提供版本化迁移路径避免重复 |
| 设置重构 | [#2336](https://github.com/netease-youdao/LobsterAI/pull/2336) — 通用设置页分组卡片化 | 显著提升设置可扫描性，修复 ThemedSelect 长文本溢出 |
| 更新体验 | [#2338](https://github.com/netease-youdao/LobsterAI/pull/2338) / [#2339](https://github.com/netease-youdao/LobsterAI/pull/2339) / [#2333](https://github.com/netease-youdao/LobsterAI/pull/2333) | 集中改进更新流程：进度居中、长说明可滚动、错误可恢复、增加阻塞遮罩，避免用户误操作 |
| Bug 修复 | [#2335](https://github.com/netease-youdao/LobsterAI/pull/2335) 内容复制修复 / [#2334](https://github.com/netease-youdao/LobsterAI/pull/2334) IM 会话加载恢复 | 修复用户高频操作痛点 |
| 回滚 | [#2340](https://github.com/netease-youdao/LobsterAI/pull/2340) — Revert #2337 "fixed model not allowed" | 提示模型权限修复存在副作用，需后续重做 |

**总体评估**：项目今日在 UX 一致性、模型生态、更新流程标准化方面均有实质性推进，向前迈进了**中等偏显著**的一步。

---

## 4. 社区热点

今日 Issues/PR 互动量整体偏低（多条 0 评论、0 点赞），相对活跃的社区讨论集中在：

- **[Issue #2342](https://github.com/netease-youdao/LobsterAI/issues/2342)** — *"左下角广告可以彻底关闭吗"*  
  用户 PYUDNG 在 2026.7.15 升级后首次发现左下角出现广告弹窗，反馈当前仅能单次点击关闭，设置中无彻底关闭开关。这是**新版本引入的负面用户体验**，具有一定代表性意义——若商业化策略与用户体验出现冲突，将影响社区好感。

- **[Issue #1381](https://github.com/netease-youdao/LobsterAI/issues/1381)** — *"定时任务每次都会新开会话窗口"*  
  用户 isaiah5818 反映 cron 任务每次运行都新开会话，导致短期定时任务下重复会话堆积。该议题反映了对**会话管理颗粒度**的真实需求，虽已 stale 关闭，仍具参考价值。

- **[Issue #1384](https://github.com/netease-youdao/LobsterAI/issues/1384) / PR [#1372](https://github.com/netease-youdao/LobsterAI/pull/1372)** — *"多文件上传只保留最后一个"*  
  Issue 与 PR 同日清理关闭，说明该问题已在更早版本得到修复，PR #1372 提供了对应的 Vitest 单元测试覆盖。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 |
|---------|------|------|
| 🔴 中 | **左下角广告无法彻底关闭** ([#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)) — 新版本引入，破坏沉浸式使用体验 | **OPEN**，尚无 fix PR |
| 🟡 中 | **Revert #2337 "fix: fixed model not allowed"** ([#2340](https://github.com/netease-youdao/LobsterAI/pull/2340)) — 模型权限修复引入回归 | 已回滚，需后续重做 |
| 🟢 低 | **微信机器人重复消息同步丢失** ([#1383](https://github.com/netease-youdao/LobsterAI/issues/1383)) — 重复提问仅同步一条 | 已 stale 关闭（仍可能在生产环境出现） |
| 🟢 低 | **微信删除会话后历史未清理** ([#1385](https://github.com/netease-youdao/LobsterAI/issues/1385)) | 已 stale 关闭 |
| 🟢 低 | **导出日志红色提示语义不当** ([#1382](https://github.com/netease-youdao/LobsterAI/issues/1382)) — 红色被滥用为失败标识 | 已 stale 关闭 |

**稳定性评估**：除广告弹窗外，无重大崩溃/数据丢失类报告。Revert 操作反映出团队具备快速回滚能力，CI 流程健康。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 进入下一版本的概率 |
|------|------|---------------------|
| 彻底关闭左下角广告 | [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) | ⭐⭐⭐⭐ — 商业化与体验需平衡，预计官方会在设置中提供"不再展示"开关 |
| 定时任务复用同一会话 | [#1381](https://github.com/netease-youdao/LobsterAI/issues/1381) | ⭐⭐⭐ — 会话管理是 Cowork 核心场景，已关闭 stale 但功能上确有合理性 |
| 微信机器人去重/会话清理 | [#1383](https://github.com/netease-youdao/LobsterAI/issues/1383)、[#1385](https://github.com/netease-youdao/LobsterAI/issues/1385) | ⭐⭐ — 微信生态适配需求长期存在 |
| Windows Web Installer 正式发布 | PR #2323 已 opt-in 引入 | ⭐⭐⭐⭐⭐ — 下一版本很可能转正 |
| LLM 记忆判断缓存 LRU 修复 | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | ⭐⭐⭐ — PR 已 OPEN 一个月，逻辑清晰，可能随性能优化批次合入 |

---

## 7. 用户反馈摘要

**真实痛点**：

- 🔸 **重复会话污染**：用户希望定时任务不要每次创建新会话（[#1381](https://github.com/netease-youdao/LobsterAI/issues/1381)），反映了对 Cowork 工作流"任务-会话"映射的深层诉求
- 🔸 **微信机器人体验粗糙**：消息同步丢失、会话清理不彻底（[#1383](https://github.com/netease-youdao/LobsterAI/issues/1383)、[#1385](https://github.com/netease-youdao/LobsterAI/issues/1385)），提示微信生态适配仍是短板
- 🔸 **商业化弹窗敏感**：用户对"广告"字眼反应强烈（[#2342](https://github.com/netease-youdao/LobsterAI/issues/2342)），即便只是推广/引导，也会显著降低对产品的好感度

**满意之处**（从 PR 内容侧面推断）：
- 设置页分组卡片化后用户应能更容易定位功能（[#2336](https://github.com/netease-youdao/LobsterAI/pull/2336)）
- 更新流程增加了阻塞遮罩与错误恢复，降低了升级焦虑（[#2333](https://github.com/netease-youdao/LobsterAI/pull/2333)）

---

## 8. 待处理积压

以下 PR/Issue 已 OPEN 较长时间，建议维护者关注：

| 类型 | 编号 | 标题 | 停留时间 | 建议 |
|------|------|------|---------|------|
| 依赖 | [#2167](https://github.com/netease-youdao/LobsterAI/pull/2167) | bump actions/stale 9.1.0 → 10.3.0 | ~30 天 | dependabot 积压，纳入下一波 CI 升级批次 |
| 依赖 | [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) | bump dorny/paths-filter 3 → 4 | ~30 天 | 同上 |
| 依赖 | [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) | bump actions/checkout 4 → 6 | ~30 天 | **主版本升级，建议人工 review** |
| 依赖 | [#2164](https://github.com/netease-youdao/LobsterAI/pull/2164) | bump trufflehog 3.88.30 → 3.95.5 | ~30 天 | 安全扫描器升级，优先级较高 |
| 依赖 | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | bump electron 40.2.1 → 43.1.0 | ~3 个月 | **Electron 大版本跨级**，需重点验证兼容性 |
| 功能 | [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) | true LRU eviction for LLM memory judge cache | ~3 个月 | 代码质量改进，可合并 |

**维护者建议**：
1. 优先处理 [#2165](https://github.com/netease-youdao/LobsterAI/pull/2165) 与 [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) 的主版本依赖升级，避免安全债务累积
2. 尽快回应 [#2342](https://github.com/netease-youdao/LobsterAI/issues/2342) 关于广告弹窗的诉求，避免社区情绪发酵
3. 评估 [#1322](https://github.com/netease-youdao/LobsterAI/pull/1322) 的合并可行性，作为性能改进亮点纳入下个版本

---

**报告生成时间**：2026-07-16  
**数据来源**：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub 公开数据  
**项目健康度评估**：⭐⭐⭐⭐ (4/5) — 版本迭代节奏稳定，CI 维护待跟进，社区反馈渠道畅通但响应偏慢。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

# TinyClaw 项目日报 · 2026-07-16

> 数据来源：[TinyAGI/tinyagi](https://github.com/TinyAGI/tinyagi) GitHub 仓库（统计窗口：过去 24 小时）

---

## 1. 今日速览

TinyClaw 仓库在过去 24 小时呈**低活跃度**状态：社区侧无新 Issue 开立、无既有 Issue 评论更新、无任何 Release 推送；唯一的动态来自 1 条仍处于 **OPEN** 状态的 CLI Bug 修复 PR（[#295](https://github.com/TinyAGI/tinyagi/pull/295)），尚未获得评论、审阅或点赞反应。整体来看，项目当日处于**维护期 / 静默期**，无功能推进、无社区讨论积压，但仓库心跳并不算完全停滞——CLI 团队管理命令的细节打磨仍在持续。考虑到 Issue/评论数均为 0，建议关注者将注意力放在 PR 审阅与合入节奏上。

| 指标 | 数值 |
|---|---|
| 新开 / 活跃 Issues | 0 / 0 |
| 已关闭 Issues | 0 |
| 待合并 PR | 1 |
| 已合并 / 关闭 PR | 0 |
| 新版本发布 | 0 |
| 评论数 | 0 |
| 👍 反应数 | 0 |

---

## 2. 版本发布

**无新版本发布。** 当前公开分支无任何 Release 标签更新，版本号维持上一发行版不变。如需查询历史发版记录，请访问 [Releases 页面](https://github.com/TinyAGI/tinyagi/releases)。

> *本节按规定在无新版本时省略详细说明。*

---

## 3. 项目进展

**今日无 PR 合入，无新功能落地。** 唯一在动的代码变更仍处于 Pending Review 状态：

- **🟡 待审阅 PR #295** — `fix(cli): print the "New leader" note after removing a team leader`
  - 作者：[Osamaali313](https://github.com/Osamaali313)
  - 创建时间：2026-07-15
  - 链接：[PR #295](https://github.com/TinyAGI/tinyagi/pull/295)
  - **性质**：缺陷修复（CLI 边界逻辑）
  - **影响范围**：`packages/cli/src/team.ts` 中 `teamRemoveAgent` 函数
  - **摘要**：当被移除的 agent 恰好是团队 leader 时，CLI 会先提示选择继任者，再拼接成功消息。当前实现中，由于条件判断始终为 `false`，"New leader: XXX" 这条提示**永远不会被打印**。该 PR 重写了判断逻辑，使成功消息在 `leader_agent` 真正变更时正确输出继任者信息。
  - **推进度**：🔸 极小增量（修复 1 处条件分支），但属于**用户体验语义正确性**层面的修复。

**整体评估**：今日项目代码基线**未发生任何前进**，但有一项已准备就绪的修复等待维护者抬手即可合入。建议维护者在本周内完成审阅并合入，避免变更被后续 PR 覆盖。

---

## 4. 社区热点

**今日无任何高互动议题。** 由于：

- 0 条新 Issue
- 1 条 PR 的评论数与 👍 反应数均为 `undefined` / `0`
- 无 Discussion 同步记录

社区互动层面**完全静默**，无法识别热点话题或趋势诉求。这一现象在开源维护项目中通常意味着以下三种情形之一：

1. 项目处于功能稳定期，用户无迫切需求反馈；
2. 用户集中在 Discord / Slack 等 GitHub 之外的渠道交流（需确认项目是否设有此类社区）；
3. 潜在 Bug 用户尚未升级到受影响版本，因此尚未发声。

建议项目维护者关注 Issue 模板是否过严、开 Issue 是否需要繁琐环境信息填表——这些都可能在客观上降低社区反馈意愿。

---

## 5. Bug 与稳定性

| 严重程度 | 条目 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 🟡 中（CLI 体验缺陷） | `teamRemoveAgent` 成功后"New leader"提示永不打印 | 已有报告背景的修复 PR | ✅ 是——PR #295 待合并 |

**详细分析**：

- **症状**：当用户通过 CLI 移除 team leader 时，预期看到 `New leader: <新负责人>` 的成功提示，但终端始终不输出该行。
- **根因**：`packages/cli/src/team.ts` 中成功消息的构建条件引用了已被前置赋值的变量比较，导致条件恒为 `false`。
- **影响面**：仅限 CLI 调用者；不影响 SDK / API 路径；不会导致数据损坏或权限泄漏——纯文本输出缺失问题。
- **风险评级**：**低-中**。虽然不构成 crash，但会导致**操作反馈缺失**，在自动化脚本或多步骤运维中可能被误判为 leader 未被切换。
- **Fix 进度**：PR #295 已提交，**等待维护者 review**。

---

## 6. 功能请求与路线图信号

**今日无新增功能请求**。从现有信号看：

- Issue 区为空，无新功能诉求；
- PR #295 属纯 Bug 修复，不引入新功能；
- 无 RFC、无 Discussion、无里程碑（Milestone）变更。

因此**无法基于当日数据预判下一版本路线图方向**。若要从历史趋势推断，须查阅更长时间窗口的 PR 标签（如 `enhancement`、`feature`）分布——本日报不外推此结论。

---

## 7. 用户反馈摘要

**今日无 Issues 评论可分析，社区声音为零。** 无法提炼任何用户痛点、使用场景或满意度评价。

可观察到的间接信号：

- PR #295 描述中"success message built with an always-false condition"一句暗示**该 Bug 至少被一位用户（Osamaali313 本人或其同事）在实际使用 CLI 时撞见过**——这一行为本身就是用户反馈的一种形式，**值得在合入后回写 Changelog**，体现对原始报告者的尊重。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日 | 已等待 | 优先级评估 |
|---|---|---|---|---|---|
| 🟡 PR | [#295](https://github.com/TinyAGI/tinyagi/pull/295) | fix(cli): print the "New leader" note after removing a team leader | 2026-07-15 | **1 天** | 🟢 时效性尚可，建议 3 天内回复 |

**维护者关注清单**：

1. ⏰ **PR #295** — 距创建仅 24 小时，无 review 介入。鉴于改动范围小（CLI 单文件、条件判断），建议维护者在 1–2 个工作日内完成 review，决定合入或退回修改。
2. 📭 **Issue 区** — 当前 0 条开放 Issue。若长期保持空仓状态可作为社区健康指标，但需警惕"沉默用户"——建议周期性通过 Twitter/X、Discord 或邮件列表主动征求意见。

**积压警告阈值**：当开放 PR 数 ≥ 5 且 7 日内无任何互动时，才算进入"积压告警"阶段。目前远未到达该阈值，**健康度良好**。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活力 | ⭐⭐☆☆☆ | 仅有 1 条修复 PR 待合并 |
| 社区活跃度 | ⭐☆☆☆☆ | Issues/PRs 评论与反应均为零 |
| 文档与发版节奏 | ⭐⭐⭐☆☆ | 无新版本，但仓库可达 |
| 维护响应性 | ⭐⭐⭐☆☆ | PR 提交后无回应，但等待时长短，无需担忧 |
| 综合 | **3.0 / 5** | **静默但稳定**，关键修复已就绪待合入 |

> 📅 报告生成于 2026-07-16，数据快照来源于 GitHub REST API。下期日报将追踪 PR #295 是否合入及 Issue 区动向。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**日期：2026-07-16**
**仓库：github.com/moltis-org/moltis**

---

## 1. 今日速览

Moltis 项目今日呈现**高 PR 处理量、低 Issue 流动**的典型推进日特征。在过去 24 小时内，仓库共合并/关闭 6 个 Pull Request，涵盖模型提供商扩展、依赖升级、认证修复、外部代理检测以及服务管理等多个方向，但 Issues 板块仅有 1 条活跃更新，且为已存在近 3 个月的长期功能请求。整体来看，开发节奏紧凑、代码合并活跃，但用户侧的反馈与需求捕获相对滞后，社区互动健康度处于中等水平。

---

## 2. 版本发布

**今日无新版本发布。**

由于今日所有 PR 均已合并/关闭，建议关注维护者是否会基于这些变更在短期内打 tag（尤其是涉及 openai-codex 认证修复 PR #1152 这种已明确描述影响范围的重要修复）。

---

## 3. 项目进展

今日共有 **6 个 PR 被合并/关闭**，整体推进显著：

### 🚀 功能与能力扩展

- **[PR #1151](https://github.com/moltis-org/moltis/pull/1151)** — 新增 MiniMax M3 模型支持
  - 在静态模型注册表中加入 M3，保留 M2.7
  - 记录模型上下文与图像输入能力元数据
  - 文档化全球与中国区端点及两种兼容模式
  - **影响**：扩大了平台对最新 MiniMax 模型系列的兼容性

- **[PR #1149](https://github.com/moltis-org/moltis/pull/1149)** — 外部 ACP 代理自动检测
  - 新增 Copilot、Codex、Claude、Pi、opencode、Gemini、Augment、Kiro、OpenClaw、OpenHands、Kimi、Stakpak、fast-agent 等命名 ACP 代理类型及默认值
  - 支持通过独立 `claude-agent-acp` 适配器检测 Claude ACP
  - **影响**：显著扩展了 Moltis 与外部 AI 编码代理的集成能力

### 🔧 关键 Bug 修复

- **[PR #1152](https://github.com/moltis-org/moltis/pull/1152)** — openai-codex Token 过期机制修复
  - 解决 Codex OAuth token 过期导致所有会话中断且仅能通过手动重新登录恢复的严重问题
  - 通过从 JWT 的 `exp` 声明推导过期时间，替代原本的 `expires_at: null`
  - **影响**：修复了一个影响所有 Codex 用户长达约 10 天的可用性严重 Bug

- **[PR #1150](https://github.com/moltis-org/moltis/pull/1150)** — 上下文窗口从能力元数据派生
  - 在模型能力中增加上下文窗口值并集中管理回退映射
  - 解析 GitHub Copilot 实时模型元数据
  - **影响**：提升多提供商的上下文窗口管理一致性

- **[PR #1153](https://github.com/moltis-org/moltis/pull/1153)** — 无 systemd 环境下 CLI 服务支持
  - 为 Coder/devbox 类容器添加 Linux 服务回退方案
  - 通过用户级 supervisor 脚本管理 install/status/stop/restart/uninstall
  - **影响**：拓展了在受限容器环境中的部署能力

### 📦 依赖维护

- **[PR #1148](https://github.com/moltis-org/moltis/pull/1148)** — 跨 3 个目录的 npm_and_yarn 依赖批量升级
  - 更新 `/crates/web/ui` 中的 esbuild 与 vite
  - 更新 `/docs` 中的 esbuild 与 vite
  - 由 dependabot 自动生成并合并

**整体评估**：今日代码层面推进**多线并行**，覆盖模型生态、稳定性、部署灵活性三大方向，项目工程成熟度持续提升。

---

## 4. 社区热点

### 🔥 唯一活跃 Issue

- **[Issue #574 — Model Routing Per topic](https://github.com/moltis-org/moltis/issues/574)** （作者：azharkov78）
  - 标签：`enhancement` `Feature`
  - 创建时间：2026-04-06，**已开放约 3 个月**
  - 互动数据：1 条评论、1 个 👍
  - **诉求分析**：用户希望按主题（topic）维度进行模型路由——即不同对话主题可路由到不同 AI 模型。这反映出用户在多场景使用（如编程 vs 通用对话 vs 长文档分析）下对**精细化模型调度**的强烈需求。从今日合并的 PR #1150（上下文窗口能力化）来看，模型元数据正在趋于结构化，这为未来实现按 topic 的智能路由提供了良好的基础架构信号。

### ⚠️ 社区互动提示

今日所有 PR 的评论数均为 `undefined`（即无人工评论），点赞数均为 0，说明这些 PR 主要通过 CI/Code Review 流程合并，**社区参与度极低**，缺乏外部开发者的反馈循环。

---

## 5. Bug 与稳定性

### 🔴 严重（已修复）

| 严重度 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| **严重** | openai-codex 提供商 token 过期机制失效，约 10 天后所有会话不可用且仅能手动重登 | ✅ 已修复 | [PR #1152](https://github.com/moltis-org/moltis/pull/1152) |

### 🟡 中等（已修复）

| 严重度 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| **中等** | GitHub Copilot/Codex 等动态提供商的上下文窗口不一致 | ✅ 已修复 | [PR #1150](https://github.com/moltis-org/moltis/pull/1150) |
| **中等** | 在无 systemd 的容器环境中服务管理不可用 | ✅ 已修复 | [PR #1153](https://github.com/moltis-org/moltis/pull/1153) |

**稳定性评分**：⭐⭐⭐⭐⭐ **优秀**。今日所报告的所有稳定性问题均已合并对应修复，且 PR #1152 描述的影响范围（影响所有 Codex 用户）显示这是一个值得尽快发布的修复。

---

## 6. 功能请求与路线图信号

### 新提出的功能请求

无（今日无新 Issue 创建）。

### 长期未实现的高价值功能

| 需求 | Issue | 开放时长 | 路线图可能性 |
|------|-------|----------|--------------|
| 按主题（Per topic）的模型路由 | [#574](https://github.com/moltis-org/moltis/issues/574) | ~3 个月 | **中等** — 今日 PR #1150 将模型能力（capabilities）结构化，为实现更精细的路由策略奠定了数据基础，但仍需独立的路由调度层开发 |

### 已落地功能（今日）

- MiniMax M3 模型支持 → PR #1151
- ACP 外部代理自动检测（13+ 类型）→ PR #1149

---

## 7. 用户反馈摘要

由于今日 Issue 板块流动极低（仅 1 条已存在 Issue 被更新），且所有 PR 均无用户评论，用户反馈信号较弱。可提取的信息如下：

- **来自 Issue #574 的隐含诉求**：用户希望更细粒度的模型控制能力，暗示当前"全局单一模型"或"手动切换模型"的体验不能满足多场景使用需求。
- **痛点场景**（基于已修复 Bug 推断）：
  - **Codex 用户**：经历约 10 天后整个平台不可用，被迫手动重登 → 反映**认证状态的健壮性**是真实生产痛点
  - **容器化部署用户**：在没有 systemd 的环境中无法使用 Moltis 服务 → 反映**部署场景多样化**的真实需求
- **满意点**：
  - ACP 代理自动检测支持 13+ 工具 → 体现社区生态整合力度获得认可（虽无显式评论）

---

## 8. 待处理积压

### ⏰ 长期未响应 Issue

| Issue | 标题 | 开放时长 | 状态 |
|-------|------|----------|------|
| [#574](https://github.com/moltis-org/moltis/issues/574) | Model Routing Per topic | ~101 天（自 2026-04-06） | OPEN，仅 1 条评论 |

**维护者关注建议**：
- Issue #574 虽然互动量低，但代表了"精细化模型路由"这一清晰的产品演进方向。建议维护者至少给出**官方回应**（标注为 `needs-design`、`planned` 或 `not-now`），以避免社区对路线图失去预期。
- 建议维护者在下次发布说明中预告 PR #1152 的修复（涉及所有 Codex 用户的可用性），以提升用户对版本质量的感知。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐⭐⭐⭐ | 6 个 PR 合并/关闭，覆盖面广 |
| 稳定性 | ⭐⭐⭐⭐⭐ | 关键 Bug 全部当日修复 |
| 社区互动 | ⭐⭐ | 几乎无外部评论与反馈 |
| 路线图透明度 | ⭐⭐ | 长期 Issue 未获维护者回应 |
| 依赖维护 | ⭐⭐⭐⭐⭐ | dependabot 自动化持续运行 |

**综合判断**：Moltis 当前处于**技术执行强劲、社区运营偏弱**的阶段。开发团队展现出高效的合并节奏与问题响应能力，但在用户沟通、Issue 生命周期管理方面存在改进空间。

---

*数据来源：GitHub API 截至 2026-07-16*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-07-16

> 数据来源：[agentscope-ai/CoPaw](https://github.com/agentscope-ai/CoPaw) ｜ 报告生成时间：2026-07-16

---

## 📌 今日速览

CoPaw 项目今日呈现**高活跃度、高吞吐**的状态：过去 24 小时共更新 50 条 Issues（19 条活跃/新开、31 条关闭）和 43 条 PR（21 条待合并、22 条已关闭），Issue 与 PR 的关闭率分别达到 62% 和 51%，反映维护团队响应迅速、积压消化效率较高。当前焦点明显集中在 **v2.0 系列版本**（2.0.0 / 2.0.0.post1 / 2.0.0.post2）暴露的回归问题上——尤其是记忆压缩、会话管理、Doom Loop 与模型能力标注等方面。整体来看，项目处于 v2.0 打磨期，未发布新版本，但有 1 个被标记为「Do not merge」的实验性 SDK PR (#6150) 值得长期关注。

---

## 🚀 版本发布

**今日无新版本发布。**

仓库仍以 `2.0.0.post2` 作为最新主线版本在 Issues 中被广泛引用（#6129、#6148、#6155 等），但多个 v2.0 相关 Bug 已通过 PR 进入修复流程，预计下一个补丁版本（如 2.0.0.post3）将随 PR 合并一同释出。

---

## 📈 项目进展

今日共有 22 个 PR 关闭/合并，重点推进了以下方向：

### ✅ 已关闭/合并的重要 PR

| PR | 主题 | 影响 |
|----|------|------|
| [#6147](https://github.com/agentscope-ai/QwenPaw/pull/6147) | 网站博客增加浏览/点赞统计，并切换 GA 到 QwenPaw 属性 | 社区运营能力升级，数据接入 Supabase |
| [#6143](https://github.com/agentscope-ai/QwenPaw/pull/6143) | CI 注入 Supabase 配置到网站构建 | 网站基础设施完善 |
| [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) | `auto_memory_interval` 校验：必须 ≥ 0 的整数 | 修复 [Issue #6132](https://github.com/agentscope-ai/QwenPaw/issues/6132) 「Web UI 无法设为 0 关闭自动记忆」|
| [#6140](https://github.com/agentscope-ai/QwenPaw/pull/6140) | `_run_command` 增加 `errors='replace'` | 修复 Windows GBK 编码兼容 |
| [#6137](https://github.com/agentscope-ai/QwenPaw/pull/6137) | 微调 Doom Loop 阈值 + 保留 thinking block 中的空格/换行 | 一并修复 [#6116](https://github.com/agentscope-ai/QwenPaw/issues/6116) 和 [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) |
| [#6039](https://github.com/agentscope-ai/QwenPaw/pull/6039) | MCP 旧驱动迁移中解析 `${VAR}` 环境变量 | 修复认证失败问题（[#6029](https://github.com/agentscope-ai/QwenPaw/issues/6029)）|

### 🔍 值得关注但仍 OPEN 的高质量 PR

- [#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123) **Scroll 上下文硬化与工具结果可恢复压缩**——专门修复 v2.0 失忆问题（[#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148)），整合分页、artifact 生命周期与硬上限，是今日最具系统性的修复。
- [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) **官方 Chrome 扩展插件**（基于 Native Messaging ↔ WebSocket 桥）——渠道能力的重要扩展。
- [#6150](https://github.com/agentscope-ai/QwenPaw/pull/6150) **pawapp SDK + 看板 App**（标记 *Do not merge*）——预示 QwenPaw 生态向「应用编排平台」演进。
- [#6159](https://github.com/agentscope-ai/QwenPaw/pull/6159) **重构 Channel 基类**——把每轮 token 结算从 ConsoleChannel 上移到 BaseChannel，多渠道一致性收益。
- [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) **Per-session 模型覆盖**（首次贡献者）——同一 Agent 不同会话可用不同 LLM，前端模型选择器相应升级。
- [#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153) **ReMe 记忆配置与索引保护**——升级至 `reme-ai==0.4.1.1`、增加单文件 10 MiB 上限、记忆任务结果推送开关，关联 [#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124) 的 48GB+ 内存泄漏。
- [#6154](https://github.com/agentscope-ai/QwenPaw/pull/6154) **多模态模型图片被错误剥离**——修复 `mimo-v2.5-free` 标注错误，并让用户覆盖持久化。
- [#6138](https://github.com/agentscope-ai/QwenPaw/pull/6138) **Doom Loop 阈值调整（warn=3, stop=4）+ 前端对齐**——配合 [#6137](https://github.com/agentscope-ai/QwenPaw/pull/6137) 形成完整闭环。
- [#6151](https://github.com/agentscope-ai/QwenPaw/pull/6151) **后台工具调用双 deadline 架构**——修复 [#6056](https://github.com/agentscope-ai/QwenPaw/issues/6056) 中的误触发取消与 hint 注入时序问题。
- [#6127](https://github.com/agentscope-ai/QwenPaw/pull/6127) **Windows 条件性 UAC 提升**——保留 VBS/无头启动器窗口化的能力。
- [#6111](https://github.com/agentscope-ai/QwenPaw/pull/6111) **`delegate_external_agent` 重复返回**——外部 Agent（如 Codex）的最终回答去重。
- [#6139](https://github.com/agentscope-ai/QwenPaw/pull/6139) **Thinking block 保留空格/换行**——独立修复 [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) 的前端渲染部分。

**整体来看**，今日项目同时推进了 **记忆系统硬化、多模态能力修复、Doom Loop 治理、渠道架构重构、生态应用扩展** 五大方向。v2.0 的回归问题正被系统性收口。

---

## 🔥 社区热点

按评论数排序，今日最受关注的议题：

| 排名 | 议题 | 评论 | 👍 | 链接 | 核心诉求 |
|------|------|------|----|------|---------|
| 1 | **Windows 客户端数小时自动关闭（v1.0.1b1 全部版本）** | 6 | 0 | [#2911](https://github.com/agentscope-ai/QwenPaw/issues/2911) | 桌面端稳定性，属长期未根治问题 |
| 2 | **Thinking block 缺失空格与换行（v2.0.0.post2）** | 5 | 0 | [#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129) | 流式思考过程可读性，前端渲染体验 |
| 3 | **支持政企版银河麒麟操作系统** | 5 | 0 | [#6125](https://github.com/agentscope-ai/QwenPaw/issues/6125) | 国产化替代刚需，已与 Win7 议题形成「政企+老系统」双线需求 |
| 4 | **个人知识库能力（控制台直接打开）** | 5 | 3 👍 | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | RAG 场景的官方能力，互动积极 |
| 5 | **工具调用格式解析失败 + providers 配置被重置** | 4 | 0 | [#2930](https://github.com/agentscope-ai/QwenPaw/issues/2930) | 本地模型（llama.cpp + CoPaw-Flash-9B）生态兼容性 |
| 6 | **会话繁忙时消息静默丢弃（无队列、无错误）** | 3 | 0 | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | 飞书 webhook 链路可靠性，**OPEN 状态需重点关注** |
| 7 | **Console 加载动画 Agent 回复后不消失** | 3 | 0 | [#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790) | WebUI 状态机 bug，影响体验 |
| 8 | **官方预制 Agent 模板** | 3 | 0 | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | 降低非技术用户上手门槛 |
| 9 | **多渠道共享会话** | 3 | 0 | [#2899](https://github.com/agentscope-ai/QwenPaw/issues/2899) | 跨平台上下文连续性 |
| 10 | **Tavily MCP 在 Node.js v25 启动失败（ESM 目录导入）** | 3 | 0 | [#2906](https://github.com/agentscope-ai/QwenPaw/issues/2906) | MCP 生态兼容性 |

**热点背后的真实诉求**：v2.0 升级带来的回归问题（记忆、思考渲染、稳定性）占据半壁江山，而另一半则是生态扩展诉求——政企国产系统、知识库、预制模板、多渠道融合，反映社区对 QwenPaw 「个人 AI 助手」定位的期待已经从「能用」向「好用 + 适用多种场景」迁移。

---

## 🐛 Bug 与稳定性

按严重程度排列（🔴 严重 / 🟠 中等 / 🟡 一般）：

### 🔴 严重

1. **v2.0 升级后失忆症严重** ([#6148](https://github.com/agentscope-ai/QwenPaw/issues/6148))
   - 症状：忘记前文对话、出现「截断」字样、`/compact` 形同虚设。
   - **已有修复 PR**：[#6123](https://github.com/agentscope-ai/QwenPaw/pull/6123)（hardening context limits）。
   - 状态：OPEN，待合并。

2. **Editable install 内存泄漏：36 个 ReMe 后台循环，启动期占 48GB+ 内存** ([#6124](https://github.com/agentscope-ai/QwenPaw/issues/6124))
   - 环境：2.0.0.post2 + reme-ai==0.4.0.9（已从 0.4.1.0 降级）+ 68GB RAM + Win10。
   - **已有修复 PR**：[#6153](https://github.com/agentscope-ai/QwenPaw/pull/6153)（单文件 10MiB 上限 + 升级 reme-ai==0.4.1.1）。
   - 状态：OPEN，待合并。

3. **`MODEL_EXECUTION_ERROR` 后会话不可恢复** ([#6141](https://github.com/agentscope-ai/QwenPaw/issues/6141))
   - 症状：`/mission` 中途中断后，工具消息找不到对应 `tool_calls`，会话永久报错。
   - 状态：**OPEN，无对应 PR**——建议维护者优先关注。

### 🟠 中等

4. **会话繁忙时消息静默丢弃** ([#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995))
   - 飞书 webhook 已接收但未入队/未处理。**缺队列、缺错误提示**。
   - 状态：**OPEN，无对应 PR**——属于可用性严重退化。

5. **v2.0 多 Bug 集合报告** ([#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155))
   - Embedding 映射漏传 `pass_dimensions`、Auto-Memo 异常、网关 400 拒绝 `dimensions`。
   - 状态：**OPEN**，由同一报告者提供修复方案片段，可能直接 cherry-pick。

6. **多模态模型图片被错误剥离** ([#6154 PR](https://github.com/agentscope-ai/QwenPaw/pull/6154))
   - `mimo-v2.5-free` 标注为 text-only，导致图片被剥。
   - **已有修复 PR**：[#6154](https://github.com/agentscope-ai/QwenPaw/pull/6154) ready-for-human-review。

### 🟡 一般

7. **Thinking block 缺失空格/换行** ([#6129](https://github.com/agentscope-ai/QwenPaw/issues/6129))
   - **已有 2 个修复 PR**：[#6137](https://github.com/agentscope-ai/QwenPaw/pull/6137)（合并）+ [#6139](https://github.com/agentscope-ai/QwenPaw/pull/6139)（OPEN，独立前端修复）。

8. **Console 加载动画 Agent 回复后不消失** ([#5790](https://github.com/agentscope-ai/QwenPaw/issues/5790))
   - 状态：**OPEN，无对应 PR**。

9. **Web UI 自动记忆间隔无法设为 0** ([#6132](https://github.com/agentscope-ai/QwenPaw/issues/6132))
   - **已通过 PR [#6142](https://github.com/agentscope-ai/QwenPaw/pull/6142) 修复并关闭**。

10. **桌面端 WKWebView 缓存旧前端** ([#6107](https://github.com/agentscope-ai/QwenPaw/pull/6107))
    - **已有修复 PR**：ready-for-human-review。

**总结**：今日 50 条 Issues 中，**已有明确对应 PR 的关键 Bug 比例约 60%**，修复链路清晰；但 **#5995（消息丢弃）、#5790（加载动画）、#6141（MODEL_EXECUTION_ERROR）** 三条仍缺乏 PR，建议维护者重点分诊。

---

## 💡 功能请求与路线图信号

| 功能请求 | Issue | 关联 PR | 纳入下一版本概率 |
|---------|-------|---------|----------------|
| 官方预制 Agent 模板 | [#4259](https://github.com/agentscope-ai/QwenPaw/issues/4259) | 无 | ⭐⭐⭐（已被关闭但无 PR，需求真实） |
| 个人知识库（控制台集成） | [#2969](https://github.com/agentscope-ai/QwenPaw/issues/2969) | 无 | ⭐⭐⭐（3 👍，呼声高） |
| Per-session 模型覆盖 | — | [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | ⭐⭐⭐⭐⭐（PR 已就绪） |
| Chrome 扩展插件 | — | [#6157](https://github.com/agentscope-ai/QwenPaw/pull/6157) |

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-16

---

## 1. 今日速览

ZeroClaw 仓库今天继续保持高强度迭代节奏，**过去 24 小时共更新 38 条 Issue 与 50 条 PR**，Issue 关闭/打开比约为 1.1:1，PR 关闭/待合并比约为 1:3.2，整体处于"集中合并收尾 + 新一轮 RFC 与 RFC 跟进 PR 并行"的阶段。v0.8.3 大版本已于昨日发布，**包含 379 个 commit、56 位贡献者**，重点落地了 SOP 引擎、WebAssembly 插件宿主、Git forge channel，并完成了一轮运行时/provider/安全加固。今天合并的 PR 集中体现了 v0.8.3 之后的 bug fix 与 v0.9.0 RFC（OIDC、零信任 air-gap、A2A 发现）的稳步推进。**项目健康度评估：🟢 活跃且稳健**——大版本交付后修复速度依旧很快，但仍有少量高优先级 Bug（如 #5600 kimi-code provider、#9085 pgvector panic）等待修复。

---

## 2. 版本发布

### v0.8.3 已发布 🚀

链接：[Release v0.8.3](https://github.com/zeroclaw-labs/zeroclaw/releases/tag/v0.8.3)

**核心更新**（379 commits, 56 contributors）：
- **新 SOP（Standard Operating Procedure）引擎**：daemon 拥有的 SOP 控制面，13 项能力进入验收阶段（[#8288](https://github.com/zeroclaw-labs/zeroclaw/issues/8288)）
- **WebAssembly 插件宿主**：Wasmtime + WASI 集成（含 [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) 涉及的安全审计）
- **Git forge channel**：新增 Git 平台作为 agent 对话通道
- **运行时加固**：包括 SSE 流式空闲超时（[#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838)）、Anthropic 工具调用 flush 修复（[#9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070)）、live session 重建修复（[#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845)）等
- **Provider 兼容层强化**：原生工具调用参数归一化（[#9060](https://github.com/zeroclaw-labs/zeroclaw/pull/9060)）、vision 能力可配置化（[#9099](https://github.com/zeroclaw-labs/zeroclaw/pull/9099)）
- **安全体系升级**：workspace 级 `#![forbid(unsafe_code)]` 重启（[#7130](https://github.com/zeroclaw-labs/zeroclaw/issues/7130)）、auth provider trait 拆分

**迁移注意事项**：
- Config Schema V4 破坏性变更随 [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) 引入，移除了已退役的 channel、SaaS/CLI 集成工具与冗余可调参数，下游用户需参考 V4 schema 迁移
- API 层的认证方式从 per-handler `require_auth` 改为 route-layer middleware（[#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250)）

> **运营侧提示**：v0.8.3 发布曾在 GitHub Actions 上连续两次在 40 分钟被超时杀掉（[#9098](https://github.com/zeroclaw-labs/zeroclaw/pull/9098)），release workflow 的 `timeout-minutes` 已上调至 90 分钟。

---

## 3. 项目进展

今日合并/关闭了 **12 条 PR**，主要推进了以下方向：

| PR | 标题 | 影响 |
|---|---|---|
| [#9062](https://github.com/zeroclaw-labs/zeroclaw/pull/9062) | fix(tools): gate execute_pipeline sub-tools by per-agent access policy | 修复 execute_pipeline 绕过 `ToolAccessPolicy` 的安全洞 |
| [#9060](https://github.com/zeroclaw-labs/zeroclaw/pull/9060) | fix(providers): normalize malformed native tool-call arguments before outbound requests | OpenAI 系 provider 出站侧统一规范 tool_call JSON |
| [#8838](https://github.com/zeroclaw-labs/zeroclaw/pull/8838) | fix(providers): idle-bound SSE streaming on one shared transport | 修复本地 LLM 后端"接受请求后 stall"导致 agent 卡死的回归 |
| [#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845) | fix(runtime): rebuild live sessions on `agents.<alias>.model_provider` edits | 修复 config/set 后模型更换未生效 |
| [#9070](https://github.com/zeroclaw-labs/zeroclaw/pull/9070) | fix(providers/anthropic): flush open tool_use block at message_stop | 修复 Anthropic SSE 在 `message_stop` 时丢失工具调用 |
| [#9071](https://github.com/zeroclaw-labs/zeroclaw/pull/9071) | fix(acp): log agent init failure on session/new | 修复 ACP `session/new` 失败静默吞错 |
| [#9098](https://github.com/zeroclaw-labs/zeroclaw/pull/9098) | ci(release): raise build matrix timeout to 90 minutes | 解锁被卡住的 release CI |
| [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) | feat(security): multi-user auth providers, permission profiles, and principal isolation | 落地 RFC #7141 的多用户认证栈（peercred/native pairing/SSH-key/OIDC） |
| [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) | feat(config)!: schema V4 cut | Config V4 破坏性变更主分支 |
| [#8901](https://github.com/zeroclaw-labs/zeroclaw/pull/8901) | chore(repo): strip comment bureaucracy across the tree and gate it in CI | 注释清洁 + CI 守卫 |
| [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) | Reconcile cargo-audit ignores and remediate wasmtime-wasi CVEs | 安全审计对齐 |
| [#6293](https://github.com/zeroclaw-labs/zeroclaw/issues/6293) | RFC: Air-gapped execution mode with companion daemon over unix socket | **关闭**——RFC 已被拆分到对应实现 PR |

**整体进度判断**：v0.8.3 的收尾修复基本完成，v0.9.0 的几大 RFC（OIDC、可插拔安全、air-gap、A2A 发现）正在以"先合并基座 PR，再叠加功能层"的方式有序推进。

---

## 4. 社区热点

**今日讨论最热的 5 个 Issue：**

1. **[#5600 (12 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/5600)** —— `kimi-code` provider 在流式工具调用时报 400 "thinking is enabled but reasoning_content is missing"，S1 阻塞级，**至今仍 OPEN**。作者 `hvvvvvvv` 多次跟进，反映 streaming + 推理内容兼容是 Kimi/Moonshot 用户的高频痛点。

2. **[#7141 (7 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)** —— RFC: OIDC authentication provider support（v0.9.0 目标）。今天通过 [#8672](https://github.com/zeroclaw-labs/zeroclaw/pull/8672) 落地实现后关闭，说明 RFC → PR 的转化非常快。

3. **[#6641 (6 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/6641)** —— `JordanTheJet` 提交的 Turn-level OTel trace correlation（nest llm/tool/memory spans），承接 #6009 / #6190，是观察性领域的核心诉求，仍 OPEN。

4. **[#7184 (6 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7184)** —— i18n 文件迁移到独立 git submodule，PR 落地后关闭。

5. **[#7218 (5 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7218)** —— A2A agent discovery (`.well-known/agent-card.json`) for multi-agent installs。互操作需求，关闭但实现 PR 待跟进。

**讨论热度分析**：今天的热点话题集中在三类：
- **多用户/企业级安全**（OIDC、plug-in 安全、air-gap）
- **可观测性**（OTel turn-level tracing）
- **多 agent 互操作**（A2A discovery）

这些都体现了 ZeroClaw 从"个人玩具"向"团队/企业级 agent 平台"演进的清晰方向。

---

## 5. Bug 与稳定性

按严重程度排序：

| Issue | 严重度 | 状态 | 描述 | 是否有 fix PR |
|---|---|---|---|---|
| [#5600](https://github.com/zeroclaw-labs/zeroclaw/issues/5600) | **S1** | OPEN | Kimi provider 流式工具调用 400 | ❌ 待修 |
| [#9085](https://github.com/zeroclaw-labs/zeroclaw/issues/9085) | **S1** | OPEN | pgvector 启用时嵌套 runtime panic（gateway/agent 启动阻塞） | ❌ 待修 |
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | **S1** | OPEN | 退出 web dashboard 聊天窗口导致 agent 工作中断 | ❌ 待修 |
| [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) | **S1** | OPEN | web dashboard 停止 agent 中途会清空 tool call 与思考上下文 | ❌ 待修 |
| [#9078](https://github.com/zeroclaw-labs/zeroclaw/issues/9078) | S2 | OPEN | Serial transport 收到非匹配 response ID 后未 drain，导致同步错位 | ❌ 待修 |
| [#9089](https://github.com/zeroclaw-labs/zeroclaw/issues/9089) | S2 | OPEN | tool output 只支持 `[IMAGE:]`，`[AUDIO:]` marker 被当字面量文本 | ❌ 待修 |
| [#9092](https://github.com/zeroclaw-labs/zeroclaw/issues/9092) | S2 | OPEN | ZeroCode 长会话 keystroke 卡顿（active frame 全量重渲染） | ❌ 待修 |
| [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) | S1 | **CLOSED** | `browser_open` 在无显示器主机上挂死 agent turn | ✅ 已有修复 |

**值得维护者关注的信号**：4 个 S1 级 Bug 同时 OPEN，**全部为阻塞用户工作流的严重问题**，且都集中在过去 2 周内新报告的：web dashboard 体验、provider 兼容、pgvector 后端。其中 web dashboard 两个 S1（#8559 + #8794）由同一位用户 `susyabashti` 报告，说明 web UI 体验需要一轮专项治理。

---

## 6. 功能请求与路线图信号

**今日出现的新需求 / 待合并方向：**

| Issue | 类别 | 信号强度 | 与已有 PR 的对应 |
|---|---|---|---|
| [#9048](https://github.com/zeroclaw-labs/zeroclaw/issues/9048) | RFC: 分离 conversation history 与 agent-curated 长记忆 | 🔥 高（4 评论, v0.9.0 候选） | 暂无实现 PR，预计进入下个迭代 |
| [#8046](https://github.com/zeroclaw-labs/zeroclaw/issues/8046) | Telegram webhook 模式（替代 long polling） | 🔥 高 | 暂无实现 PR，社区已有 NAT/企业部署诉求 |
| [#9086](https://github.com/zeroclaw-labs/zeroclaw/issues/9086) | 结构化安全审计管线（Merkle 日志、异常检测） | 🔥 高 | 模块已实现但未上线，RFC 阶段 |
| [#9099](https://github.com/zeroclaw-labs/zeroclaw/pull/9099) | provider vision 能力可配置 | 中 | PR 已开，待合并 |
| [#8486](https://github.com/zeroclaw-labs/zeroclaw/pull/8486) | gateway 增加 OpenAI Chat Completions HTTP 端点 | 🔥 高（XL PR） | 与 LangChain/Continue.dev/Aider 互操作 |
| [#8880](https://github.com/zeroclaw-labs/zeroclaw/pull/8880) | SOP approval broker（组/法定人数） | 🔥 高（XL PR, SOP 5/5 里程碑） | 接续 [#8848](https://github.com/zeroclaw-labs/zeroclaw/pull/8848) |
| [#9093](https://github.com/zeroclaw-labs/zeroclaw/issues/9093) | ZeroCode TUI 顶栏显示版本 | 低 | 简单补丁 |

**路线图信号**：v0.9.0 的方向已经从 RFC 阶段全面转入实现阶段，重点是**多用户安全**（OIDC + 权限画像 + principal 隔离）、**多 agent 互操作**（A2A discovery）、**企业部署**（air-gap、relay、审计）。这些都强烈指向 ZeroClaw 朝"agent 平台"演进。

---

##

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*