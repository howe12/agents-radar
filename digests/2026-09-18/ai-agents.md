# OpenClaw 生态日报 2026-09-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-18 02:40 UTC

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
**日期：2026-09-18**

---

## 1. 今日速览

OpenClaw 仓库今日继续保持高强度活动，24 小时内共更新 500 条 Issue 与 500 条 PR，整体活跃度处于近几个月的高位区间。Issue 侧活跃/新开 353 条、关闭 147 条，PR 侧待合并 297 条、合并/关闭 203 条，**无新版本发布**，近期发布节奏明显收紧。今日讨论焦点高度集中在 2026.9.x 系列的回归问题——尤其围绕 Gateway 启动、消息丢失、Crash Loop、频道（Telegram/Discord/WeChat/Teams）以及 MCP/子代理（subagent）生命周期。多个 P0/P1 级 Bug 已带可合并的修复 PR 进入 "ready for maintainer look" 状态，项目整体处于"集中修回归、暂缓新功能"的修复窗口期。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注以下已修复但尚未发布的修复 PR 集合，可能在下一版本合并：
- 632-agent Gateway 启动兼容 ([PR #151074](https://github.com/openclaw/openclaw/pull/151074))
- 服务化管理升级 ([PR #150898](https://github.com/openclaw/openclaw/pull/150898))
- Teams 轮询权限收紧 ([PR #151287](https://github.com/openclaw/openclaw/pull/151287))
- Onboarding auth 模式保留 ([PR #150992](https://github.com/openclaw/openclaw/pull/150992))

---

## 3. 项目进展

今日无新发布，但仓库整体向前推进明显，合并/关闭 203 条 PR，新提交约 297 条待评审。**已关闭 PR** 中值得关注的修复：

| 编号 | 标题 | 链接 |
|---|---|---|
| #150959 | fix: keep update ownership until canceled commands finish cleanup | [链接](https://github.com/openclaw/openclaw/pull/150959) |
| #150898 | fix(update): reconcile a managed service pinned to another install | [链接](https://github.com/openclaw/openclaw/pull/150898) |

**今日关闭的关键 Issue**（验证修复落地）：
- [#150452](https://github.com/openclaw/openclaw/issues/150452) 2026.7.1-2 → 2026.9.4 更新需约一天手动修复（多 Agent Gateway）
- [#145563](https://github.com/openclaw/openclaw/issues/145563) WeChat 渠道回复派发失败
- [#146719](https://github.com/openclaw/openclaw/issues/146719) Windows 升级时 `$OPENCLAW_STATE_DIR` 未展开
- [#139809](https://github.com/openclaw/openclaw/issues/139809) Telegram 收不到 Codex 受保护 Secrets 提示
- [#148898](https://github.com/openclaw/openclaw/issues/148898) claude-cli 看门狗误算宿主机休眠时间
- [#142965](https://github.com/openclaw/openclaw/issues/142965) 每会话 MCP 子进程未被回收

此外，**已就绪等待维护者审阅**的重要修复 PR 包括：
- [PR #151074](https://github.com/openclaw/openclaw/pull/151074) Gateway 启动慢盘兼容（回应 [#149538](https://github.com/openclaw/openclaw/issues/149538) / [#148529](https://github.com/openclaw/openclaw/issues/148529)）
- [PR #151279](https://github.com/openclaw/openclaw/pull/151279) cron 绑定未变时跳过 session-list 重建
- [PR #151291](https://github.com/openclaw/openclaw/pull/151291) 恢复远程管理员的 automation 创建权限
- [PR #151289](https://github.com/openclaw/openclaw/pull/151289) 减少 session refresh 的 CPU 占用
- [PR #151048](https://github.com/openclaw/openclaw/pull/151048) 恢复 skill 使用计数与 Workshop 清单

整体判断：**项目处于密集的回归修复期**，核心组件（Gateway、doctor、update、session 生命周期）有系统性推进；新功能层（WebUI、mattermost、discord、tts）保持稳定的小步提交。

---

## 4. 社区热点

按评论数排序，今日讨论最热的话题集中在以下几处：

| 排名 | 类型 | 编号 / 标题 | 评论 | 链接 |
|---|---|---|---|---|
| 1 | Issue | #97616 Hook/Tool 子进程泄漏导致僵尸累积 | 30 | [链接](https://github.com/openclaw/openclaw/issues/97616) |
| 2 | Issue | #144911 MCP 服务器初始化超时拖垮 Gateway | 29 | [链接](https://github.com/openclaw/openclaw/issues/144911) |
| 3 | Issue | #149361 WebUI 性能与稳定性 Umbrella | 21 | [链接](https://github.com/openclaw/openclaw/issues/149361) |
| 4 | Issue | #149538 632-agent Gateway 启动后不服务 | 15 | [链接](https://github.com/openclaw/openclaw/issues/149538) |
| 4 | Issue | #139847 同一会话并发回复时消息被丢 | 15 | [链接](https://github.com/openclaw/openclaw/issues/139847) |
| 6 | Issue | #127229 Telegram 看门狗将耐久更新误标记为 tombstone | 14 | [链接](https://github.com/openclaw/openclaw/issues/127229) |
| 6 | Issue | #137332 终端 requester-settle 批次无限重试 | 14 | [链接](https://github.com/openclaw/openclaw/issues/137332) |
| 6 | Issue | #139710 插件生成中 supersede 杀掉 system-agent turn | 14 | [链接](https://github.com/openclaw/openclaw/issues/139710) |

**热点诉求分析**：
- **生命周期 / 资源回收**：#97616 与 #142965（已关闭）形成对子进程回收问题的反复投诉，说明这是用户长期痛点。
- **Gateway 健壮性**：#144911、#149538、#148529、#150574 共同描绘了 Gateway 启动期/服务期的脆弱面。
- **会话并发安全**：#139847、#148707、#137332、#141474 都指向同一根因——"no active tool authority snapshot"，社区已识别这是 2026.9.x 的核心回归。
- **WebUI 体验**：#149361 是一个有意为之的 Umbrella Issue（#149727 是子项），代表 WebUI 维护者 @vyctorbrzezowski 在做集中整改。

---

## 5. Bug 与稳定性

按严重程度排列（重点关注 P0/P1 且有 fix PR 的项）：

### 🔴 P0 严重（阻塞 / Crash Loop）
| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后不响应 /health，事件循环饿死 | ✅ [#151074](https://github.com/openclaw/openclaw/pull/151074)（ready） |
| [#150574](https://github.com/openclaw/openclaw/issues/150574) | 硬编码 30s SQLite 启动预算，慢盘崩 Gateway | ⚠️ 暂无（已关闭但未带合并 PR） |
| [#145563](https://github.com/openclaw/openclaw/issues/145563) | WeChat 渠道 PreparedModelCatalogConfigReplacedError | ⚠️ 已关闭但需跟进回归 |
| [#146719](https://github.com/openclaw/openclaw/openclaw/issues/146719) | Windows 升级 mkdir 路径含未展开 `$OPENCLAW_STATE_DIR` | ⚠️ 已关闭，需验证修复落地 |
| [#150452](https://github.com/openclaw/openclaw/issues/150452) | 2026.7.1-2 → 2026.9.4 升级需一天手动修复 | ⚠️ 已关闭，UX release blocker |

### 🟠 P1 严重（功能受损 / 消息丢失）
| Issue | 标题 | 是否有 Fix PR |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏 + 僵尸累积（持续 80+ 天） | ❌ 未见明确 fix PR |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP 30s init 超时拖垮 Gateway | ❌ 未见 |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 并发回复消息被丢（2026.9.2 回归） | ❌ 未见 |
| [#127229](https://github.com/openclaw/openclaw/issues/127229) | Telegram 看门狗误标记 tombstone | ❌ 未见 |
| [#137332](https://github.com/openclaw/openclaw/issues/137332) | requester-settle 无限重试 | ❌ 未见 |
| [#119411](https://github.com/openclaw/openclaw/issues/119411) | 内存文件 watcher 永不重建索引 | ❌ 未见 |
| [#148707](https://github.com/openclaw/openclaw/issues/148707) | 2026.9.4 同会话并发回复丢失 | ❌ 未见 |
| [#110190](https://github.com/openclaw/openclaw/issues/110190) | 运行时上下文载体位置导致模型混乱 | ❌ 未见 |
| [#148529](https://github.com/openclaw/openclaw/issues/148529) | 632-agent Gateway 启动 ~12 分钟 | ✅ [#151074](https://github.com/openclaw/openclaw/pull/151074) |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 长 turn 丢失 reply | ❌ 未见 |
| [#141474](https://github.com/openclaw/openclaw/issues/141474) | Collector sessions_yield 永久挂起 | ❌ 未见 |
| [#105528](https://github.com/openclaw/openclaw/issues/105528) | Windows exec/read 静默返回空输出 | ❌ 未见 |
| [#139239](https://github.com/openclaw/openclaw/issues/139239) | iOS 2026.8.1 图片附件挂起 | ❌ 未见 |

### 🟡 P2 中等（功能异常 / UX 问题）
- [#143278](https://github.com/openclaw/openclaw/issues/143278) Heartbeat 内部输出泄漏到 Telegram 用户聊天（2026.9.3）
- [#146004](https://github.com/openclaw/openclaw/issues/146004) Subagent 完成时触发无通道 dashboard 心跳 turn
- [#140723](https://github.com/openclaw/openclaw/issues/140723) WebChat 文本重复 ×2-×3
- [#145098](https://github.com/openclaw/openclaw/issues/145098)（已关闭）Control UI 升级后提供陈旧缓存包
- [#140978](https://github.com/openclaw/openclaw/issues/140978) Discord 工具除 send 外全被守卫阻挡

### 🔒 安全相关
- [#111985](https://github.com/openclaw/openclaw/issues/111985)（已关闭）memory-core 将 ChatGPT/Codex OAuth token 发给 OpenAI embeddings API
- [#98976](https://github.com/openclaw/openclaw/issues/98976) Provider refusal 不触发模型 fallback 链

**稳定性评估**：🔴 **回归问题密度偏高**。多个 P0/P1 Bug 集中在 2026.9.x（尤其 2026.9.2、2026.9.3、2026.9.4）的小版本差异上，"no active tool authority snapshot" 已成为本周期的高频关键词。修复 PR 供给侧明显，但合并节奏被大量评审积压拖慢。

---

## 6. 功能请求与路线图信号

今日未见明确的全新大型 feature Request**，社区关注点偏向"修旧"而非"上新"。但有若干增强型需求可在下一窗口纳入：

| 方向 | 信号来源 | 建议纳入 |
|---|---|---|
| **大舰队启动优化** | [#149538](https://github.com/openclaw/openclaw/issues/149538) / [#148529](https://github.com/openclaw/openclaw/issues/148529) | ✅ 已在 [#151074](https://github.com/openclaw/openclaw/pull/151074) |
| **WebUI 性能伞形整改** | [#149361](https://github.com/openclaw/openclaw/issues/149361) | ✅ [#150518](https://github.com/openclaw/openclaw/pull/150518) / [#150573](https://github.com/openclaw/openclaw/pull/150573) / [#151246](https://github.com/openclaw/openclaw/pull/151246) |
| **远程管理员权限修复** | [#151265](https://github.com/openclaw/openclaw/issues/151265)（修复见 [#151291](https://github.com/openclaw/openclaw/pull/151291)） | ✅ 已就绪 |
| **Onboarding auth 模式保留** | [#150083](https://github.com/openclaw/openclaw/issues/150083)（修复见 [#150992](https://github.com/openclaw/openclaw/pull/150992)） | ✅ 已就绪 |
| **升级流程可靠性** | [#150744](https://github.com/openclaw/openclaw/issues/150744)（修复见 [#150898](https://github.com/openclaw/openclaw/pull/150898)） | ✅ 已就绪 |
| **Teams 权限收紧** | [#151278](https://github.com/openclaw/openclaw/issues/151278)（修复见 [#151287](https://github.com/openclaw/openclaw/pull/151287)） | ✅ 已就绪 |
| **扩展稳定版 npm 恢复文档** | [#151323](https://github.com/openclaw/openclaw/pull/151323) | ✅ 文档型 |
| **Skill 使用计数 + Workshop 清单** | [#151048](https://github.com/openclaw/openclaw/pull/151048) | ✅ 已就绪 |
| **Discord 轮询/贴纸 caption 格式** | [#141057](https://github.com/openclaw/openclaw/pull/141057) | ✅ 已就绪 |
| **TTS 本地 CLI 空引号保留** | [#151322](https://github.com/openclaw/openclaw/pull/151322) | ✅ 已就绪 |

**路线图信号**：下一版本（暂称 2026.9.5）的核心叙事已可清晰看见**为**：Gateway 大规模舰队启动可靠性、2026.9.x 三个回归修复、WebUI 体验闭环、upgrade/onboarding 流程加固。

---

## 7. 用户反馈摘要

**核心痛点**：
- **大舰队场景下 Gateway 几乎不可用**：`609NFT` 在 [#149538](https://github.com/openclaw/openclaw/issues/149538) 中反馈 632-agent 集群 Gateway ready 但 `/health` 全超时，RSS 涨到 OOM；[#148529](https://github.com/openclaw/openclaw/issues/148529) 中同一集群从 ~2s 退化到 ~12 分钟启动。
- **升级体验崩坏**：`arrobapontocom-ui` 在 [#150452](https://github.com/openclaw/openclaw/issues/150452) 描述 2026.7.1-2 → 2026.9.4 升级**需要一天手工修复**（配置迁移失败 + Telegram crash-loop + iOS node 重新审批 + Usage 空屏）。
- **同会话并发消息丢失**：`motochan` [#139847](https://github.com/openclaw/openclaw/issues/139847)、`WolvenRA` [#148707](https://github.com/openclaw/openclaw/issues/148707)、`Emi-ercel` [#144809](https://github.com/openclaw/openclaw/issues/144809) 多位用户报告同一根因 "no active tool authority snapshot"，影响 2026.9.2/9.4。
- **子进程泄漏长期未根治**：`avp717` [#97616](https://github.com/openclaw/openclaw/issues/97616) 长达 80 天仍在榜首；`michaeljgood71` [#142965](https://github.com/openclaw/openclaw/issues/142965)（已关闭）描述每会话 MCP 子进程累积到重启才清。
- **WebUI 性能与稳定性**：维护者 @vyctorbrzezowski 在 [#149361](https://github.com/openclaw/openclaw/issues/149361) 自发组建 Umbrella，并主动提了大量 fix（[#150518](https://github.com/openclaw/openclaw/pull/150518)、[#150573](https://github.com/openclaw/openclaw/pull/150573)、[#151246](https://github.com/openclaw/openclaw/pull/151246)、[#149727](https://github.com/openclaw/openclaw/issues/149727)）。
- **认证 / Auth 隐患**：`a-m-a-r-a` [#111985](https://github.com/openclaw/openclaw/issues/111985) 报告 memory-core 把 OAuth token 错

---

## 横向生态对比

# 2026-09-18 AI 智能体与个人助手开源生态横向对比分析

---

## 1. 生态全景

2026 年 9 月中旬，个人 AI 助手与自主智能体开源生态呈现出**"大规模回归修复 + 平台化扩张"**的双轨格局：以 OpenClaw（500 条更新）、CoPaw（60 条更新）、ZeroClaw（100 条更新）为代表的旗舰项目处于"先稳后进"的密集修复期，2026.9.x 系列集中暴露了 Gateway、子进程回收、会话并发等共性架构债；与此同时，CoPaw 的 Hub 模型网关、LobsterAI 的 Cowork 工作区、ZeroClaw 的 append-only 事件流等大型 PR 揭示了行业正从"单点智能体"向"组织级 AI 中台"演进。社区生态呈金字塔分层——头部三强（OpenClaw/CoPaw/ZeroClaw）吸纳了绝大多数活跃流量，而 NanoClaw、NanoBot、PicoClaw、ZeptoClaw 等中型项目聚焦垂直场景（多渠道、企业网关、边缘 runtime）做差异化突围；NullClaw、IronClaw、TinyClaw 则进入维护静默期。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | 关闭/合并 | 新 Release | 健康度评级 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | ~353 活跃 / 147 关闭 | 297 待合并 / 203 合并 | 350 条 | ❌ 无 |  中（回归密度高） | 密集回归修复期 |
| **ZeroClaw** | 41 活跃 / 9 关闭 | 45 待合并 / 5 关闭 | 14 条 | ❌ 无 |  中高（安全补强） | 重构+安全修补并行 |
| **CoPaw** | 16 开放 / 2 关闭 | 24 待合并 / 18 合并 | 20 条 | ⏳ v2.2.2b2 bump | 🟢 中高（Hub 落地） | "修 Bug + 推版本"高压期 |
| **LobsterAI** | 5 全部 stale 关闭 | 13 关闭 / 5 待合并 | 13 条 | ⚠️ 2026.9.16 分支已 close | 🟡 中（互动停滞） | 发版后稳定期 |
| **NanoBot** | 4 活跃 | 7 合并 / 16 总数 | 7 条 | ❌ 无 |  健康（35% 关单率） | "修 bug + 加功能"双轨 |
| **NanoClaw** | 1 更新 | 18 更新 / 4 关闭 | 4 条 | ❌ 无 | 🟢 活跃 | 网关 2.0 重构期 |
| **PicoClaw** | 1 stale 关闭 | 7 关闭 / 7 待合并 | 7 条 | ❌ 无 | 🟡 中（QQ 渠道隐患） | 依赖刷新 + 功能补齐 |
| **ZeptoClaw** | 5 / 部分关闭 | 6 总数 / 多已合并 | 8 条 | ❌ 无 |  中等（安全响应优秀） | 内部整顿期 |
| **Hermes Agent** | 42 活跃 / 8 关闭 | 50 全部待合并 / 0 合并 | 8 条 | ❌ 无 | 🔴 偏低（PR 全滞留） | 密集修复但流水线积压 |
| **Moltis** | 2 新增 | 3 新增 OPEN | 0 条 | ❌ 无 | 🟡 中低（评审慢） | 稳定性打磨期 |
| **IronClaw** | 1（自动生成） | 0 | 0 条 | ❌ 无 | ⚪ 静默（仅自动化） | 维护静默期 |
| **NullClaw** | 0 | 0 | 0 | ❌ 无 |  静默 | 无活动 |
| **TinyClaw** | 0 | 0 | 0 | ❌ 无 | ⚪ 静默 | 无活动 |

**关键观察**：
- **吞吐量第一梯队**（>50 条更新/日）：OpenClaw、ZeroClaw、CoPaw、Hermes Agent
- **转化效率第一梯队**（合并率 >35%）：NanoBot（35%）、CoPaw（43%）、ZeptoClaw（72.7%）
- **静默层**：NullClaw / TinyClaw / IronClaw 三项目进入"零人工活动"状态

---

## 3. OpenClaw 在生态中的定位

### 3.1 与同类核心差异

| 维度 | OpenClaw | CoPaw (QwenPaw) | ZeroClaw | Hermes Agent |
|---|---|---|---|---|
| **流量体量** | ⭐⭐⭐⭐⭐（500/日） | ⭐⭐⭐⭐（60/日） | ⭐⭐⭐（100/日） | ⭐⭐⭐⭐（100/日） |
| **代码库成熟度** | 多 Agent Gateway + 12+ 渠道 | 组织级 Hub + Desktop | 多模态+多通道 | 多协议网关 + 计费 |
| **平台策略** | 全场景覆盖 | 组织化 AI 中台 | 协议级创新 | 桌面 + 商业化 |
| **回归压力** | 🔴 最高（632-agent 集群问题） | 🟠 中（plugin 事件循环） | 🟡 中（多模态安全） | 🟠 中（计费路由） |

### 3.2 核心优势
- **场景纵深**：OpenClaw 是少数能同时承载"632-agent 大舰队"与"个人单 Agent"两种极端场景的项目，#149538/#148529 暴露的问题反映了**大规模部署才是真正的护城河**。
- **渠道完整度**：同时维护 Telegram/Discord/WeChat/Teams/QQ/Mattermost 等 12+ 渠道，是生态中最广的适配面。
- **修复供给侧**：2026.9.x 周期内沉淀 297 条待审 PR，显示出强大的贡献者吸纳能力。

### 3.3 相对劣势
- **回归密度**：与 CoPaw、ZeroClaw 相比，OpenClaw 的 2026.9.x 三轮小版本都伴随 P0/P1 回归，"no active tool authority snapshot" 成为高频词，提示**架构演进速度 > 验证覆盖**。
- **PR 流转**：日合并 203 条看似强劲，但 297 条待合并队列 + 多条 P1 Bug 缺 fix PR，说明**评审瓶颈比想象中严重**。

---

## 4. 共同关注的技术方向

跨项目涌现的高频需求，揭示行业共性挑战：

### 4.1 多渠道适配与一致性（涉及 8+ 项目）
- **OpenClaw**：#145563 WeChat 派发失败、#127229 Telegram 看门狗误标记、#140978 Discord 工具守卫阻挡
- **NanoBot**：#5799 QQ 压缩通知刷屏、#5800 Discord `replyToMessage` 对齐、#5803 Telegram 富文本换行
- **PicoClaw**：#3349 QQ 渠道完全不可用、#3376 DeltaChat 配置错误
- **NanoClaw**：#3156 频道附件结构化传递
- **ZeroClaw**：#10875 Telegram media-group 测试 flaky、#10922 WhatsApp TTS 队列、#10926 Matrix `send_via`

> **行业共识**：渠道数量扩张进入"打补丁阶段"，下一阶段必然走向**统一渠道抽象 + 行为规约**。

### 4.2 会话与状态一致性（涉及 7 项目）
- **OpenClaw**："no active tool authority snapshot" 根因波及 #139847/#148707/#144809/#141474 四条 issue
- **NanoBot**：#5792 架构级 FIFO inbox 序列化修复（近 24h 最重要 PR）
- **CoPaw**：#7839 session-sync 跳过孤立文件、#7810 context window 不生效
- **ZeroClaw**：#10408 并发重复回复、#10526 RFC append-only 事件流
- **LobsterAI**：#1088/#1089 Prefetch 跨轮次污染

> **核心议题**：从"消息队列"向"事件溯源（event sourcing）"演进是行业确定方向。

### 4.3 Gateway 与启动健壮性（涉及 5 项目）
- **OpenClaw**：#149538/#148529/#144911/#150574 Gateway 启动/服务期四联 Bug
- **CoPaw**：#7840 plugin 共享事件循环冻结、#7841 Desktop 启动竞态
- **NanoBot**：#5801 会话句柄陈旧化
- **PicoClaw**：#3376 DeltaChat 渠道注册失败

> **共性教训**：在大规模部署下，启动期的硬编码超时、慢盘假设、单点故障假设都被放大。

### 4.4 安全与认证（涉及 4 项目）
- **OpenClaw**：#111985 memory-core 误传 OAuth token、#98976 Provider refusal 不触发 fallback
- **LobsterAI**：#1031 `shell:openExternal` 无协议校验（高危 RCE）
- **ZeptoClaw**：#697 RUSTSEC-2026-0285（Rustls 漏洞）24h 内闭环
- **ZeroClaw**：#9882 图像标记绕过内容验证、#10908 工具结果中 image marker 提升为附件、#9899 bitmaps 未维护 advisory

> **趋势**：从"功能安全"向"供应链 + 多模态注入"演进，#9819 的像素级图像校验是行业标杆动作。

### 4.5 子进程 / 资源回收（涉及 3 项目）
- **OpenClaw**：#97616 长达 80+ 天的子进程泄漏榜首、#142965 MCP 子进程累积
- **NanoBot**：#5792 启动期特判路径收敛
- **ZeroClaw**：#9708 bound service stdout/stderr 日志、#10928 进程退出判断

### 4.6 Linux 安装友好性（涉及 3 项目）
- **NanoClaw**：#3844/#3847 双 PR 修复 `EACCES` 死锁（Fedora 等系统 Node + 非 root 用户）
- **Hermes Agent**：#113683 Linux 后端更新致 Windows GUI 失效
- **OpenClaw**：#146719 Windows 升级时 `$OPENCLAW_STATE_DIR` 未展开

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构特征 |
|---|---|---|---|
| **OpenClaw** | 全场景智能体框架 + 12 渠道 | 个人开发者 → 企业舰队 | 多 Agent Gateway、会话总线、子代理生命周期 |
| **CoPaw** | 组织级 AI 中台 + Desktop 端 | 企业 IT / 组织管理员 | Hub 模型网关、成员治理、用量看板、Plugin 沙箱 |
| **ZeroClaw** | 协议与多模态安全 | 安全敏感型开发者 | append-only 事件流、像素级图像校验、RFC 治理 |
| **Hermes Agent** | 桌面 + 商业化计费 | C 端个人 + 企业订阅 | Nous Portal 计费、MoA 聚合、Kanban 调度 |
| **NanoBot** | 多渠道稳定性 + Provider 生态 | 自托管中级用户 | FIFO inbox 权威调度、Provider 插件化 |
| **NanoClaw** | 网关可插拔化 | 平台架构师 / DevOps | 多网关契约、OneCLI 解耦、安装链路加固 |
| **LobsterAI** | 桌面协作 + Cowork 体验 | C 端知识工作者 | CoworkRunner 工作区、IM 桥接、Thinking 阶段轮播 |
| **PicoClaw** | LLM 协议覆盖 | 集成开发者 | Anthropic/OpenAI Responses 双协议、IRC/DeltaChat |
| **ZeptoClaw** | 边缘 runtime + 本地模型 | 边缘 AI / Jetson/Pi 用户 | Ollama 本地 provider、Tool Schema 净化、轻量 CI |
| **Moltis** | 可复现构建 + 调度安全 | Nix 化运维 / 高级用户 | Nix flake 打包、sandbox 细粒度旋钮、cron 语义修正 |
| **IronClaw** | Benchmark 质量监测 | 内部模型评估 | 每日失败分类流水线 |

**关键架构路线分化**：
1. **中心化 vs 可插拔化**：CoPaw 强化 Hub 中心化（#7779）；NanoClaw 推多网关可选（#3815-#3818）
2. **事件溯源派 vs 状态快照派**：ZeroClaw 提 append-only 事件流（#10526）；OpenClaw 仍以 session 快照为主
3. **商业化深度**：Hermes Agent 唯一深耕订阅计费（#110912 暴露的折扣路由缺陷也是独有痛点）

---

## 6. 社区热度与成熟度

### 🟢 快速迭代阶段（高吞吐 + 高转化）
- **CoPaw**（v2.2.2b2 在即，Hub 模型网关落地，42 PR/日）
- **NanoBot**（35% 关单率，#5792 架构级 PR 已合入）
- **NanoClaw**（Linux 引导路径重大修复 + 网关 2.0 重构启动）

### 🟡 质量巩固阶段（高吞吐 + 中转化）
- **OpenClaw**（最大流量但回归密度高，进入"集中修旧"窗口）
- **ZeroClaw**（100 条更新 + 5 关闭，P1 比例上升，重在安全加固）
- **LobsterAI**（13 PR 关闭但 Issue 互动停滞，9.16 发版后稳定期）

### 🟠 评审瓶颈阶段（高活跃 + 低转化）
- **Hermes Agent**（50 PR 全部待合并，0 流转，#62055 计费失控 70 天未修）

### 🟢 稳态维护阶段
- **PicoClaw**（依赖刷新 + 功能补齐，stale 积压 4 条）
- **ZeptoClaw**（Rustls 漏洞 24h 闭环，安全响应优秀但社区互动 0）
- **Moltis**（5 条 OPEN，#1262 cron fail-open 安全修复已 11 天未合）

### ⚪ 静默阶段
- **NullClaw / TinyClaw / IronClaw**（仅 IronClaw 有自动审计流水线）

**成熟度光谱**：

```
[功能爆发期] ──→ [架构稳定期] ──→ [生态扩展期] ──→ [商业化深化期]
   NanoClaw      OpenClaw          CoPaw            Hermes Agent
   NanoBot       ZeroClaw          LobsterAI
   PicoClaw      ZeptoClaw
```

---

## 7. 值得关注的趋势信号

### 7.1 🏛️ 治理与可观测性升级
- **ZeroClaw #10526 append-only 事件流 + #8692 维护者决策队列** 代表行业向"可重放、可审计"演进；
- **CoPaw #7842 plugin 事件循环 watchdog** 是首个"插件隔离 + 监控"的工程化范式；
- **OpenClaw Umbrella Issue #149361**（WebUI 集中整改）展示了"集中式治理"取代散点修复的新工作流。

**对开发者的启示**：智能体项目复杂度已超出"开发者肉眼可读"边界，**事件溯源、watchdog、Umbrella Issue** 应成为标配工程实践。

### 7.2 🛡️ 多模态与供应链安全并列成新战场
- ZeroClaw 的图像标记旁路（#10908、#10912、#10908）揭示**"工具结果中夹带的图像标记"是新的注入面**；#9819 像素级校验是行业首个深度防御范式。
- ZeptoClaw RUSTSEC-2026-0285 24h 闭环 + ZeroClaw #9899 bitmaps advisory 同步治理，说明 **Rust 生态智能体的供应链安全已成日常运营**。

**对开发者的启示

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-18 | 数据范围：过去 24 小时**

---

## 1. 今日速览

NanoBot 今日继续保持高强度迭代节奏，**过去 24 小时共触发 20 条 Issue/PR 更新**（4 Issues + 16 PRs），合并/关闭率达 **35%**（7/20），社区活跃度处于高位。修复类工作集中在**多渠道消息处理、Telegram/QQ/Discord 适配、内存压缩与会话调度**等核心稳定性领域，多个 P1/P2 级别的回归 Bug 已通过 PR 完成闭环。功能侧则继续推进 **Provider 生态扩展**（Vertex AI、OpenRouter 图像生成）与 **WebUI 体验优化**。整体来看，项目处于稳健的"修 bug + 加功能"双轨推进状态，健康度良好。

---

## 2. 版本发布

无新版本发布。最近一次版本为 Issue #5798 中用户提及的 `0.3.5`，当前 main 分支已包含多项未发布的修复与新功能。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

今日共 **7 条 PR 完成合并或关闭**，按重要性排列如下：

| PR | 标题 | 类型 | 价值 |
|---|---|---|---|
| [#5792](https://github.com/HKUDS/nanobot/pull/5792) | fix(agent): serialize and batch per-session messages | **P1 回归修复** | 引入权威 FIFO inbox，统一频道输入、自动化轮次与 `/compact` 命令的入队路径，消除启动期特判与总线重发路径，是近 24h 最关键的架构级修复 |
| [#5799](https://github.com/HKUDS/nanobot/pull/5799) | fix(channels): drop compaction notices on channels without in-place affordance | P2 修复 | 关闭 #5784，解决 QQ 等无消息编辑/撤回接口的渠道将压缩通知以独立消息形式刷屏的问题 |
| [#5802](https://github.com/HKUDS/nanobot/pull/5802) | fix(webui): hide model details until AI setup is complete | P2 修复 | 模型未完成配置前不再暴露默认模型与提供商信息，修复本地化引导文案与无障碍标签被陈旧运行时回退覆盖的问题 |
| [#5379](https://github.com/HKUDS/nanobot/pull/5379) | fix(memory): preserve full consolidation input | P2 修复 | 重新基于结构化压缩流程解决 #5377，确保调用方推进 `last_consolidated` 前保留所有公开的 raw-fallback 字符 |
| [#5765](https://github.com/HKUDS/nanobot/pull/5765) | fix(api): require boolean stream values | P2 修复 | OpenAI 兼容聊天补全端点对 `stream` 字段强制 boolean 判断，避免 `"stream":"false"` 误触发 SSE 模式 |
| [#5766](https://github.com/HKUDS/nanobot/pull/5766) | fix(cron): reject conflicting schedule fields | P2 修复 | cron 工具拒绝同时提供多个互斥排期字段，避免静默丢弃 |
| [#5762](https://github.com/HKUDS/nanobot/pull/5762) | fix(cron): reject past one-time schedules | P2 修复 | cron 工具拒绝过去时间的一次性任务，避免产生永不触发的"僵尸作业" |

> **整体评价**：今日合入的工作对**会话调度（FIFO 序列化）、渠道一致性、API 严格性、cron 可靠性**四个长期痛点形成集中突破。`#5792` 是其中最值得关注的架构级 PR，它把分散的入队路径收敛为单一调度函数，为后续会话层改造奠定了基础。

---

## 4. 社区热点

| 热度排序 | 主题 | 链接 | 评论数 / 关注点 |
|---|---|---|---|
| 🥇 | #5377 压缩逻辑截断原始批次却推进 `last_consolidated` | [Issue](https://github.com/HKUDS/nanobot/issues/5377) / [PR #5379](https://github.com/HKUDS/nanobot/pull/5379) | 3 条评论；揭示了**内存压缩数据丢失**这一高危隐患，已闭环 |
| 🥈 | #5784 QQ 频道压缩通知刷屏 | [Issue](https://github.com/HKUDS/nanobot/issues/5784) / [PR #5799](https://github.com/HKUDS/nanobot/pull/5799) | 2 条评论；QQ 自部署用户的真实痛点，已闭环 |
| 🥉 | #5459 新增 Google Vertex AI 原生 Provider（Claude 模型） | [Issue](https://github.com/HKUDS/nanobot/issues/5454) | 1 条评论；**生态扩展信号最强**的需求 |
| #5798 多会话串回复问题 | [Issue](https://github.com/HKUDS/nanobot/issues/5798) | 0 评论（新建）但描述详尽，复现步骤清晰，可能与 #5792 修复高度相关 |

**社区诉求分析**：
- **渠道一致性问题**成为当前最集中的痛点（QQ / Telegram / Discord 各有 PR），反映出 NanoBot 正在经历多渠道适配的"打补丁阶段"。
- **Provider 生态扩张**呼声明显：Vertex AI 与 OpenRouter 图像生成两个 PR/Issue 几乎同期浮现，说明企业级用户在持续涌入。
- **会话/状态一致性**问题（#5798、#5792、#5801）从代码层面证实了多轮次、多会话调度仍是当前最容易出 Bug 的子模块。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue / PR | 状态 | 简述 | 是否有 fix PR |
|---|---|---|---|---|
| 🔴 **P1 回归** | [#5792](https://github.com/HKUDS/nanobot/pull/5792) | ✅ 已关闭 | 会话消息未串行化批处理，存在竞争与启动期特判路径 | 已修复并合并 |
| 🟠 **P1 回归** | [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 🟡 Open | 子代理后台任务完成消息缺失，可能导致父轮次状态不一致 | PR 待审 |
| 🟡 **P2 回归** | [#5801](https://github.com/HKUDS/nanobot/pull/5801) | 🟡 Open | 元数据更新期间分配会话句柄会导致 checkpoint 时间戳陈旧化，重启丢失已完成工具结果 | PR 待审 |
| 🟡 **P2** | [#5798](https://github.com/HKUDS/nanobot/issues/5798) | 🟡 Open | Windows 0.3.5 上多会话"串回复"，回归自 0.3.0 | 建议关联 #5792 验证 |
| 🟢 **P2** | [#5377](https://github.com/HKUDS/nanobot/issues/5377) / [#5379](https://github.com/HKUDS/nanobot/pull/5379) | ✅ 已闭环 | 压缩过程截断输入但仍推进游标 | ✅ |
| 🟢 **P2** | [#5784](https://github.com/HKUDS/nanobot/issues/5784) / [#5799](https://github.com/HKUDS/nanobot/pull/5799) | ✅ 已闭环 | QQ 压缩通知刷屏 | ✅ |
| 🟢 **P2** | [#5765](https://github.com/HKUDS/nanobot/pull/5765) | ✅ 已闭环 | API `stream` 字段非 boolean 误触发 SSE | ✅ |
| 🟢 **P2** | [#5766](https://github.com/HKUDS/nanobot/pull/5766) / [#5762](https://github.com/HKUDS/nanobot/pull/5762) | ✅ 已闭环 | cron 工具多处一致性缺陷 | ✅ |

> **稳定性判断**：4 条历史 P2 Bug 在 24 小时内全部闭环，#5792 这条 P1 架构级回归修复被合入，意味着项目**短期稳定性风险显著下降**。但 #5798、#5152、#5801 三条仍未关闭，建议维护者在下一迭代集中处理。

---

## 6. 功能请求与路线图信号

| 信号 | 链接 | 当前状态 | 入版概率评估 |
|---|---|---|---|
| Google Vertex AI 原生 Provider（Claude 模型） | [Issue #5459](https://github.com/HKUDS/nanobot/issues/5459) | Issue Open，**尚无对应 PR** | 🟢 高：与 AWS Bedrock/Azure OpenAI 并列的企业级需求，作者 xuayan-nokia 提供了清晰的对标分析 |
| OpenRouter 原生图像生成 API | [PR #5718](https://github.com/HKUDS/nanobot/pull/5718) | PR 待合并 | 🟢 高：方案贴合现有 `generate_image` 抽象 |
| OpenAI 兼容流式端点暴露工具进度事件 | [PR #5562](https://github.com/HKUDS/nanobot/pull/5562) | 待合并，含冲突 | 🟡 中：闭环 #3698，是开发者集成体验的重要补全 |
| Discord `replyToMessage` 与 Telegram 对齐 | [PR #5800](https://github.com/HKUDS/nanobot/pull/5800) | 待合并 | 🟢 高：渠道一致性诉求明确 |
| Telegram 富文本换行 + topic 支持 | [PR #5803](https://github.com/HKUDS/nanobot/pull/5803) | 待合并 | 🟢 高 |
| WebUI 模型提供商删除控件 | [PR #5352](https://github.com/HKUDS/nanobot/pull/5352) | 待合并（8/12 开） | 🟡 中 |
| 推理回放限定到最新助手轮次 | [PR #5611](https://github.com/HKUDS/nanobot/pull/5611) | 待合并，含冲突 | 🟢 高：性能与成本双赢 |
| 会话文件并发写串行化 | [PR #5779](https://github.com/HKUDS/nanobot/pull/5779) | 待合并 | 🟢 高：解决 #4798 |

**路线图信号**：下一版本（推测为 `0.3.6` 或 `0.4.x`）很可能包含 **Vertex AI Provider、OpenRouter 图像生成、Discord/Telegram 渠道增强、推理回放优化**这四项能力。

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实用户痛点与场景：

- 🇨🇳 **QQ 自部署用户**（AlfredChaos，#5784）：明确的"自托管 + QQ 渠道"使用场景，反馈**压缩通知刷屏**影响交互体验，期望与 Web 端一致的"原地折叠"行为；这是该用户提出的**第二类同源噪声**问题（首类为 #5719），说明 QQ 渠道的体验细节问题密度较高。
- 🇨🇳 **Windows 中文用户**（#5798）：从 **0.3.0 升级到 0.3.5 后**出现"会话串回复"回归，怀疑是并发调度层引入的 Bug，**强烈建议维护者在 Windows 平台增加更细粒度的回归测试**。
- 🏢 **企业开发者**（xuayan-nokia，#5459）：希望获得与 Anthropic 直连、AWS Bedrock、Azure OpenAI 同等级的 Vertex AI 一等支持，意味着企业内部 GCP 环境部署需求正在浮现。
- 🛠️ **集成开发者**（Shuxiabit，#5562 引用 #3698）：长期（自 2025 起）呼吁 OpenAI 兼容流式端点暴露**工具执行生命周期事件**，用于前端实时显示工具进度，是开发者集成体验的明显短板。

> 整体反馈呈现 **"渠道一致性 > 提供商生态 > 工具可观测性"** 的诉求优先级。

---

## 8. 待处理积压

| 链接 | 创建日期 | 等待天数 | 备注 |
|---|---|---|---|
| [#5352](https://github.com/HKUDS/nanobot/pull/5352) | 2026-08-12 | 37 天 | WebUI 模型提供商删除控件，已长期待审 |
| [#5152](https://github.com/HKUDS/nanobot/pull/5152) | 2026-07-28 | 52 天 | 子代理部分完成结果标记，P1 回归风险 |
| [#5562](https://github.com/HKUDS/nanobot/pull/5562) | 2026-08-27 | 22 天 | 流式工具进度事件，含合并冲突需维护者介入 |
| [#5611](https://github.com/HKUDS/nanobot/pull/5611) | 2026-08-30 | 19 天 | 推理回放限制到最新轮次，含冲突 |
| [#5459](https://github.com/HKUDS/nanobot/issues/5459) | 2026-08-20 | 29 天 | Vertex AI Provider 请求，**0 回复/0 PR**，社区信号强但响应空缺 |
| [#5779](https://github.com/HKUDS/nanobot/pull/5779) | 2026-09-15 | 3 天 | 会话文件并发写串行化，闭环 #4798 |

> ⚠️ **建议维护者优先处理**：`#5459`（无 PR 的高需求 Issue）、`#5152`（P1 长期未关闭）、`#5352`（近 40 天未审 PR），并对 `#5562`、`#5611` 两份含冲突的 PR 提供合并协助。

---

### 📊 项目健康度速览

| 指标 | 当前值 | 评估 |
|---|---|---|
| 24h 活跃度 | 20 条更新 | 🟢 高 |
| 合并/关闭率 | 35% | 🟢 健康 |
| P1 回归积压 | 1 条（#5152） | 🟡 需关注 |
| 长期未审 PR (>30 天) | 2 条 | 🟡 需关注 |
| 长期未回复 Issue (>30 天) | 1 条 | 🟢 可控 |
| 渠道/会话稳定性 | 显著改善 | 🟢 今日亮点 |

**总评**：NanoBot 在 2026-09-17 表现出"修 bug 集中打歼灭战 + 渠道生态稳步扩张"的健康节奏，#5792 的合入尤为关键。建议下一阶段重点是**清理 P1 积压、补齐 Vertex AI 缺口、推动 Discord/Telegram 渠道 PR 合并**。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-18**

---

## 1. 今日速览

Hermes Agent 今日呈现 **高活跃、低流转** 的状态：过去 24 小时共 50 条 Issues 更新（42 条活跃、8 条关闭）与 50 条 PR 更新（**全部仍为待合并状态，0 条合入**），且无新版本发布。这种 "全部 PR 滞留" 的现象在配置高度活跃的项目中并不罕见，但结合 issue 端有 8 条被关闭可以看出，**维护团队在持续处理 Bug 但 PR Review 流水线可能存在积压**。社区讨论热度集中于桌面端 UI 缺陷、MCP 协议稳定性、计费/订阅路由异常以及 Kanban 调度器等长尾问题，P1 级问题达 6 条，**项目整体处于密集修复期，但版本节奏放缓**。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未观察到任何 Release 标签更新。最新版本仍为 Hermes 0.21.x 系列（用户报告涉及 v0.21.0、v0.21.2、v0.21.3）。

---

## 3. 项目进展

由于过去 24 小时 **0 条 PR 被合并**，今日没有 "合入主干" 的功能推进。但从关闭的 8 条 Issues 可以看出以下修复已落地或被标记为已处理：

| Issue | 模块 | 关闭原因 / 推进内容 |
|---|---|---|
| [#110912](https://github.com/NousResearch/hermes-agent/issues/110912) | Nous Portal 计费 | 25 条评论的高优先级 Bug，涉及订阅额度耗尽后折扣路由失效，被标记 CLOSED |
| [#98503](https://github.com/NousResearch/hermes-agent/issues/98503) | Desktop / TUI | `clarify.request` WebSocket 事件丢失导致澄清卡片不渲染，已关闭 |
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) | MCP | "复活" 逻辑导致 MCP 服务器在 60-90s 后断裂，已关闭 |
| [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) | Gateway 流 | 提供商 ReadError 后 turn lease 未释放、session 锁死，已关闭 |
| [#109824](https://github.com/NousResearch/hermes-agent/issues/109824) | WAL / Cron | Cron writer 与 Gateway 写入产生 inode 冲突；`_refresh_tools` 在 MCP 重启时崩溃，已关闭 |

**项目推进度**：稳定性问题集中处理中，但 PR 端 0 合并意味着修复虽确认但未主干化，**短期内不会出现新版本**，建议关注者监控 PR Review 队列。

---

## 4. 社区热点

按评论数排序的 Top 讨论：

### 🥇 [#110912 — Nous Portal 折扣路由 Bug](https://github.com/NousResearch/hermes-agent/issues/110912) — 25 条评论
- 标签：`type/bug`, `provider/nous`, `P1`, `comp/portal`, `area/billing`
- 用户 @LohasGuy 报告 Plus 订阅（$20/mo, 22 credits）在 deepseek-v4-flash 等模型上出现 **3 倍计费异常**，怀疑是折扣路由未走 credit 链路而非额度耗尽
- 反映 **真实经济损失**，已关闭但需关注后续 PR 修复版本

### 🥈 [#98503 — Desktop 澄清卡片不渲染](https://github.com/NousResearch/hermes-agent/issues/98503) — 8 条评论
- `clarify.request` WebSocket 事件在 transport routing 层丢失
- 已关闭，疑已修复

### 🥉 [#34271 — Mnemosyne 纳入官方文档](https://github.com/NousResearch/hermes-agent/issues/34271) — 7 条评论 / 👍 8
- 用户 @AxDSan 提议将 Mnemosyne 加入 8 个内置 memory provider 文档
- 获得 8 个点赞（**今日最受欢迎话题**），反映社区对本地优先 memory 方案的认可
- 已关闭

### [#107544 — Desktop composer 取消 pin](https://github.com/NousResearch/hermes-agent/issues/107544) — 6 条评论
- 缺少 "use profile default / unpin" UI 操作
- 已通过 [#114588](https://github.com/NousResearch/hermes-agent/pull/114588) 的 FAQ 文档部分响应

### [#113683 — Windows GUI 更新后崩溃](https://github.com/NousResearch/hermes-agent/issues/113683) — 6 条评论
- 每日 Linux 后端更新后 Windows Web 端失效
- **仍 OPEN**

---

## 5. Bug 与稳定性

按严重程度排序的待处理 Bug：

### 🔴 P1 — 高严重性

| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#114592](https://github.com/NousResearch/hermes-agent/issues/114592) | `hermes update --yes` 在 `pre_update_backup` 失败时仍继续，导致 SOUL.md 留下 symlink loop，gateway 无法启动（exit-75 重启风暴） | ❌ 无 |
| [#113683](https://github.com/NousResearch/hermes-agent/issues/113683) | Linux 后端更新致 Windows GUI 失效 | ❌ 无 |
| [#104303](https://github.com/NousResearch/hermes-agent/issues/104303) ✅ 已关闭 | 流断后 turn lease 永不释放 | 已修复 |
| [#103746](https://github.com/NousResearch/hermes-agent/issues/103746) ✅ 已关闭 | MCP "复活" 逻辑 | 已修复 |

### 🟠 P2 — 中严重性

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#103633](https://github.com/NousResearch/hermes-agent/issues/103633) | MCP OAuth `code→token` 交换对带路径的 URL 失败 | [#114591](https://github.com/NousResearch/hermes-agent/pull/114591) |
| [#114484](https://github.com/NousResearch/hermes-agent/issues/114484) | 模型将 batch envelope 发出为 JSON 字符串导致 tool-call 循环 |  无 |
| [#114540 / #114538](https://github.com/NousResearch/hermes-agent/issues/114540) | `/stop` 消费已接纳的内部 wake | 有 PR |
| [#114552](https://github.com/NousResearch/hermes-agent/issues/114552) | `disk-cleanup` 对 `cache/` 顶层目录执行 `rmtree` | ❌ 无 |
| [#91713](https://github.com/NousResearch/hermes-agent/issues/91713) | 缺少 per-session 累计 token 预算 | ❌ 无 |
| [#62055](https://github.com/NousResearch/hermes-agent/issues/62055) | Desktop composer 静默覆盖 Settings 默认模型 → **产生真实计费损失** | ❌ 无 |
| [#114582 / #114405](https://github.com/NousResearch/hermes-agent/issues/114582) | 含连字符的 provider id 产生错误环境变量名 | [#114582](https://github.com/NousResearch/hermes-agent/pull/114582) |

### 🟡 P3 — 一般严重性（典型问题）

- [#114526](https://github.com/NousResearch/hermes-agent/issues/114526) — 插件安装时 git 提示用户名（公开仓库）
- [#83047](https://github.com/NousResearch/hermes-agent/issues/83047) — Kanban `blocker_auth` 守护阻塞 ready task
- [#44843](https://github.com/NousResearch/hermes-agent/issues/44843) — `read_file` 在 `execute_code()` 沙盒中响应结构不一致
- [#114467](https://github.com/NousResearch/hermes-agent/issues/114467) — Cron ticker 漂移（`sleep-after-work`）
- [#106904](https://github.com/NousResearch/hermes-agent/issues/106904) — `web_extract` 在 Firecrawl 后端先于懒加载完成快照

**稳定性观察**：高严重性 Bug 集中在 **session 状态泄漏、计费路由、MCP 长连接** 三大类；这与 Hermes 的多协议网关架构演进阶段相吻合。

---

## 6. 功能请求与路线图信号

### 已被 PR 响应或明确落地的功能请求

| 功能请求 | 对应 PR | 状态 |
|---|---|---|
| Desktop 模型选择器取消 pin [#107544](https://github.com/NousResearch/hermes-agent/issues/107544) | [#114588](https://github.com/NousResearch/hermes-agent/pull/114588) | 文档 FAQ 形式落地 |
| MoA per-turn solo aggregator [#114576](https://github.com/NousResearch/hermes-agent/issues/114576) | [#114581](https://github.com/NousResearch/hermes-agent/pull/114581) | OPEN（实现已就绪） |
| Kanban `reasoning_effort` 支持 | [#114432](https://github.com/NousResearch/hermes-agent/pull/114432) | OPEN |
| Per-session 累计 token 预算 [#91713](https://github.com/NousResearch/hermes-agent/issues/91713) | ❌ 尚无 PR | 待实现 |
| Project-scoped memory [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | ❌ 尚无 PR | 待实现 |
| Memory 在长时 Desktop 会话中刷新 [#66025](https://github.com/NousResearch/hermes-agent/issues/66025) |  尚无 PR | 待实现 |
| Voice context 暴露给 agent [#109455](https://github.com/NousResearch/hermes-agent/issues/109455) | [#109548](https://github.com/NousResearch/hermes-agent/pull/109548) | OPEN |
| Per-session stamp 标签 | [#114499](https://github.com/NousResearch/hermes-agent/pull/114499) | OPEN |
| 统一包管理器 [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | （自提 PR） | OPEN |

### 路线图信号

- **Kanban 体系进入硬化阶段**：[#114586](https://github.com/NousResearch/hermes-agent/pull/114586)、[#114589](https://github.com/NousResearch/hermes-agent/pull/114589) 集中在 completion safeguards、Windows 解码、review-lane 失败预算
- **MCP 协议成熟化**：[#114591](https://github.com/NousResearch/hermes-agent/pull/114591)、[#114578](https://github.com/NousResearch/hermes-agent/pull/114578) 围绕 401 语义和工具可见性
- **Eval 体系引入 fail-closed 评估**：[#114436](https://github.com/NousResearch/hermes-agent/pull/114436) 标志着 Hermes 评估管线从启发式转向 paired comparison
- **Microsoft 365 独立插件**：[#114530](https://github.com/NousResearch/hermes-agent/pull/114530) 反映企业集成需求增长

---

## 7. 用户反馈摘要

###  真实痛点

1. **计费失控恐慌** — [@LohasGuy](https://github.com/NousResearch/hermes-agent/issues/110912) 报告日账单在订阅额度归零后立刻 3 倍跳涨，"没有 UI 提示、没有警告"。同一痛点在 [#62055](https://github.com/NousResearch/hermes-agent/issues/62055) 复现：用户设置默认模型为免费 Gemma 4，但 Desktop composer 静默覆盖为计费模型，**产生真实经济损失**。这是 **最值得维护团队关注的产品体验缺陷**。

2. **跨平台升级体验割裂** — [@TheColetrain](https://github.com/NousResearch/hermes-agent/issues/113683) 报告 "每天更新 Linux 后端，Windows GUI 就不工作"，尝试多种方法偶尔才能恢复，反映 **升级路径在 Windows 用户的脆弱性**。

3. **长会话 memory 失效** — [@itzikpoltorak25](https://github.com/NousResearch/hermes-agent/issues/66025) 指出 MEMORY.md / USER.md 在 Desktop 长会话中"冻结"，对 TUI/Discord 频繁建会话的用户无所谓，但 Desktop 用户会"看着自己说过的话被遗忘"。

4. **MCP 静默断连** — 多条 issue 反映 MCP 服务器断连后没有用户可见反馈，开发者必须读日志才能发现。

5. **MoA 资源浪费** — [@skhdev](https://github.com/NousResearch/hermes-agent/issues/114576) 抱怨"每条 prompt 都强制 fan-out 全部参考模型"对简单任务（如 markdown 解释）极度浪费 token / 费用。

### 😊 满意信号

- Mnemosyne 提案 [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) 获 8 👍，社区对 **本地优先 memory** 方案表现出明确偏好。
- Mnemosyne 文档化的关闭说明其为 "feature-rich local-first option"，反映社区对隐私 / 本地化趋势的认可。

---

## 8. 待处理积压

###  长期 OPEN 高价值 Issue

| Issue | 创建日期 | 等待天数 | 标签 | 备注 |
|---|---|---|---|---|
| [#91713](https://github.com/NousResearch/hermes-agent/issues/91713) | 2026-08-21 | ~28 天 | P2 | 已有真实事故依据（18.7M token / 5h），仍未实现 per-session token budget |
| [#62055](https://github.com/NousResearch/hermes-agent/issues/62055) | 2026-07-10 | ~70 天 | P2 | Desktop 计费失控 Bug，无 PR |
| [#33638](https://github.com/NousResearch/hermes-agent/issues/33638) | 2026-05-28 | ~113 天 | P3 | Project-scoped memory 功能 |
| [#66025](https://github.com/NousResearch/hermes-agent/issues/66025) | 2026-07-17 | ~63 天 | P3 | Desktop 长时间会话 memory 刷新 |
| [#83047](https://github.com/NousResearch/hermes-agent/issues/83047) | 2026-08-10 | ~39 天 | P3 | Kanban `blocker_auth` 阻塞 |
| [#52816](https://github.com/NousResearch/hermes-agent/issues/52816) | 2026-06-26 | ~84 天 | P3 | Desktop prompt-indicator rail `scrollToPrompt` no-op |
| [#34271](https://github.com/NousResearch/hermes-agent/issues/34271) | 2026-05-29 | ~112 天 | P3 | Mnemosyne 文档（已关闭但留意后续 PR） |
| [#102765](https://github.com/NousResearch/hermes-agent/pull/102765) | 2026-09-04 | ~14 天 | — | 统一包管理器大型 PR，仍 OPEN |

### 🚨 维护者建议关注

1. **PR Review 流水线**：

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期**：2026-09-18
**项目**：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**数据周期**：过去 24 小时

---

## 1. 今日速览

PicoClaw 今日整体处于**中等活跃度**的维护节奏，以依赖清理与历史 PR 收尾为主旋律。**7 个 PR 被关闭**（其中 5 个为批量版本升级），同时仍有 **7 个 PR 待合并**，涵盖 OpenAI Responses API 切换、IRCv3 多行消息组装、DeltaChat 配置修复等实质性功能演进。社区侧**仅 1 条 Issue 被关闭**（已标记为 stale），新问题反馈趋缓。整体来看，项目无新版本发布，处于"积压清理 + 小步快跑"阶段。

---

## 2. 版本发布

**今日无新版本发布。**

仓库在数据周期内未产出新的 Release 标签，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 跟踪后续进展。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR（推进功能与修复）

| PR | 标题 | 意义 |
|---|---|---|
| [#1158](https://github.com/sipeed/picoclaw/pull/1158) | feat: add anthropic-messages protocol for native Anthropic API format | **重要功能落地**：新增 `anthropic-messages` 协议前缀，解决 Issue #269——部分仅支持 Anthropic 原生 Messages API 格式的服务（各类代理服务）此前无法使用的问题，扩展了 LLM 服务兼容性。 |
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | fix(agent): thread responses to the originating question message | **体验修复**：在群聊非回复消息触发回合时，补齐出站回复的 `ReplyToMessageID`，解决"回答与提问脱节"的群聊可读性缺陷。 |
| [#3360](https://github.com/sipeed/picoclaw/pull/3360) | bump larksuite/oapi-sdk-go/v3 → 3.11.0 | 飞书 SDK 升级 |
| [#3361](https://github.com/sipeed/picoclaw/pull/3361) | bump google.golang.org/protobuf → 1.36.12 | Protobuf 补丁版本 |
| [#3362](https://github.com/sipeed/picoclaw/pull/3362) | bump golang.org/x/term → 0.45.0 | 终端库升级 |
| [#3363](https://github.com/sipeed/picoclaw/pull/3363) | bump ergochat/irc-go → 0.7.0 | IRC 客户端库升级（含 v0.7.0 release notes 引用） |
| [#3364](https://github.com/sipeed/picoclaw/pull/3364) | bump aws-sdk-go-v2 → 1.45.1 | AWS SDK 升级 |

### 3.2 推进评估

今日最实质的功能进展是 **PR #1158 正式合并**——该项目已挂起近 6 个月（创建于 2026-03-06），其落地意味着 PicoClaw 对 Anthropic 生态服务（如各类第三方代理）的支持能力得到显著扩展。依赖层面，**5 个 dependabot 批量升级**被集中关闭（含 AWS、飞书、Protobuf、term、irc-go），反映出维护者正在做一次集中的依赖基线刷新。

---

## 4. 社区热点

今日**评论与点赞数据整体偏低**，所有活跃 Issue/PR 的 👍 数均为 0，社区互动度偏冷清。**互动量最高的 Issue** 为：
- **[#3349](https://github.com/sipeed/picoclaw/issues/3349)** [BUG] QQ 频道无法正常使用——5 条评论，标记为 [stale] 后被关闭。

这条 Issue 反映的诉求是：**QQ 频道渠道在 Docker 版与 Linux x86 版本均不可用**，gateway 报错 `failed to get websocket info: code:401, err_code:40011005`（"请求头 Authorization 参数格式错误"）。虽然已被关闭，但 QQ 作为国内重要 IM 平台，这一渠道的可用性问题对中文用户群体具有较高关注度，建议维护者后续重新评估。

---

## 5. Bug 与稳定性

### 5.1 今日报告/关闭的 Bug

| 严重度 | Issue/PR | 状态 | 描述 |
|---|---|---|---|
| **中** | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | 已关闭（stale，无 PR 修复） | QQ 频道 401 鉴权错误，`Authorization` 请求头格式错误，`err_code: 40011005`。**无对应 fix PR**，渠道仍处于不可用状态。 |

### 5.2 与 Bug 相关的活跃修复 PR

- **[#3376](https://github.com/sipeed/picoclaw/pull/3376)** fix(deltachat): initialize as custom channel to solve config validation error
  修复 #3265 报告的 DeltaChat 渠道启用时 `unknown type "deltachat"` 验证错误，方案是将 DeltaChat 注册为 custom channel。**优先级：中**，建议合并后随下一版本发布。
- **[#3358](https://github.com/sipeed/picoclaw/pull/3358)**（已关闭）线程化回复归属，已并入主线。
- **[#3353](https://github.com/sipeed/picoclaw/pull/3353)** fix(channels): bound tool feedback animations
  防止工具反馈动画在生命周期清理失败的情况下无限编辑频道消息，设定 5 分钟上限（对齐 Telegram typing 反馈的生命周期）。**仍待合并**。

> 注：今日数据周期内**未出现新增的高严重度崩溃或回归报告**。

---

## 6. 功能请求与路线图信号

| 提案 | PR | 路线图可能性 |
|---|---|---|
| **OpenAI 切换至 Responses API** | [#3381](https://github.com/sipeed/picoclaw/pull/3381) | ⭐ **高** —— 该 PR 今日新开（2026-09-17），方向与 OpenAI 新一代端点对齐，是 AI Agent 类项目的明确演进信号，建议纳入近期路线图。 |
| **IRCv3 draft/multiline 多行消息接收** | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 中 —— 改善长消息体验，已有明确技术方案。 |
| **DeltaChat 大重构（-200LOC）** | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 中 —— 清理遗留特性、改用官方 relay 列表、删除基于密码的邮件配置、重命名 `invite_link` → `join_invite_link`，与 [#3376](https://github.com/sipeed/picoclaw/pull/3376) 配合可形成完整 DeltaChat 路线。 |
| **Parallel Search MCP 设置示例** | [#3368](https://github.com/sipeed/picoclaw/pull/3368) | 中 —— 文档型增强，让 PicoClaw 在无 Parallel 账号的情况下获得网页搜索与页面抽取能力。 |
| **Build Remote Agent（gbr/1）手机配对** | [#3344](https://github.com/sipeed/picoclaw/pull/3344) | 待评估 —— 新增桌面代理与手机观察的配对协议，引入 MIT `gbr-agent` v0.6.0+ 依赖。 |

---

## 7. 用户反馈摘要

由于数据周期内新反馈量极少（仅 1 条被关闭的 Issue），可提炼的用户痛点如下：

- **🔴 QQ 渠道完全不可用**（Issue #3349）：用户尝试 Docker 版与 Linux x86 版本均失败，错误指向 Authorization 头格式问题，可能是 SDK 升级或鉴权协议变更后的回归。**该 Issue 被标记为 stale 后关闭，但实质问题未解决**，反映用户对国内 IM 平台支持的切实需求未被满足。
- **⚠️ 互动冷淡**：今日所有 PR/Issue 的 👍 均为 0，评论也极少，可能意味着：(a) 项目进入稳定期后用户更"沉默"；(b) 社区激励机制不足，建议维护者主动在 Discord/论坛上征集反馈。

---

## 8. 待处理积压

| 项 | 类型 | 创建日期 | 滞留时长 | 备注 |
|---|---|---|---|---|
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | PR（deltachat 重构） | 2026-07-03 | ~77 天 | 实质性的 -200LOC 重构，被打 stale，仍待审。 |
| [#3344](https://github.com/sipeed/picoclaw/pull/3344) | PR（gbr/1 手机配对） | 2026-08-23 | ~26 天 | 引入新协议与外部二进制依赖，复杂度高，建议尽快 review 或给出反馈。 |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | PR（IRCv3 multiline） | 2026-08-31 | ~18 天 | 已 stale，待维护者响应。 |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | PR（动画上限） | 2026-08-31 | ~18 天 | 已 stale，简单改动可快速合并。 |
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | PR（DeltaChat 配置） | 2026-09-10 | ~8 天 | **优先级建议最高**，修复 #3265 用户可见的启动失败。 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR（OpenAI Responses API） | 2026-09-17 | 1 天 | 最新提案，建议尽早 review 以纳入下一版本。 |
| [#3349](https://github.com/sipeed/picoclaw/issues/3349) | Issue（QQ 渠道） | 2026-08-30 | 已关闭 | 问题**未实际修复**，可能被遗忘，建议维护者重新评估。 |
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | PR（Parallel Search MCP 文档） | 2026-09-05 | ~13 天 | 纯文档增强，review 成本低。 |

> **提醒**：积压 7 个 Open PR 中有 4 个已带 `[stale]` 标签，建议维护者在下次例行清理前进行一轮集中审阅，特别是 #3376（用户可见 Bug 修复）与 #3381（重要功能演进）。

---

## 项目健康度简评

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护活跃度 | ⭐⭐⭐☆☆ | 有依赖清理与 PR 流转，但 Issue 端响应偏冷。 |
| 功能演进 | ⭐⭐⭐⭐☆ | Anthropic 原生协议合并、OpenAI Responses API 新提案，方向清晰。 |
| 社区互动 | ⭐⭐☆☆☆ | 👍 与评论数普遍为 0，需关注用户激励。 |
| 稳定性 | ⭐⭐⭐⭐☆ | 无新增严重崩溃报告，但 QQ 渠道问题未实质修复存在隐患。 |
| 待处理积压 | ⚠️ 中度 | 7 个 Open PR 中半数已 stale，需集中处理。 |

**一句话总结**：PicoClaw 今日处于"依赖刷新 + 功能补齐"双轨并行的稳定期，Anthropic 协议落地与 OpenAI 端点迁移是值得跟踪的两大方向，建议维护者集中清理 stale 积压并重新评估 QQ 渠道可用性问题。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-18

---

## 1. 今日速览

NanoClaw 项目今日整体处于**高活跃度维护期**，过去 24 小时内共处理 18 个 PR 更新、1 个 Issue 更新，无新版本发布。当日合并/关闭 4 个 PR，其中 2 个聚焦于 Linux 系统下 pnpm/corepack 安装路径的修复（#3844、#3847），解决了系统级 Node.js 安装场景下的 `EACCES` 死锁问题。同时，Issue #957（建议支持 Podman 替代 Docker）被关闭，社区贡献度评分高达 8 👍。PR 队列中积压了大量 `area/gateway`、`area/providers` 相关的大型重构与功能提案，显示出维护团队正在推进一次较大规模的网关层架构升级。

---

## 2. 版本发布

**无新版本发布。** 当前主干代码仍在活跃开发中，未生成新的 Release。建议关注以下高优先级 PR 合入后的发版节奏。

---

## 3. 项目进展

今日 4 个 PR 完成关闭，体现三方面进展：

### 🛠️ 安装与引导修复（高优先级）
- **PR #3844** [closed] — `fix(setup): replace broken sudo retry with user-owned npm prefix fallback`  
  作者 [@DorZvulun](https://github.com/nanocoai/nanoclaw/pull/3844)  
  修复了 Linux 上使用发行版包管理器（如 Fedora 的 `dnf install nodejs`）安装 Node.js 时，`setup.sh` 因 npm 全局目录无写权限而永久失败的问题，改为 fallback 到用户自有的 npm prefix。  
  🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3844)

- **PR #3847** [closed] — `fix(setup): enable corepack pnpm in ~/.local/bin when the global bin dir is read-only`  
  作者 [@glifocat](https://github.com/nanocoai/nanoclaw/pull/3847)  
  与 #3844 互补：解决 `corepack enable` 在非 root 用户下因 `/usr/bin` 只读而触发 `EACCES symlink` 的引导挂死问题。  
  🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3847)

  > 💡 两 PR 形成"双保险"，意味着此前 Linux 上系统级 Node + 非 root 用户组合是项目引导的重大痛点，本次合入显著改善了 Linux 桌面体验。

### 🔧 端口与配置修复
- **PR #3148** [closed] — `fix: honor WEBHOOK_PORT from .env`  
  作者 [@ogarciarevett](https://github.com/nanocoai/nanoclaw/pull/3148)  
  关闭 Issue #2901，使 `WEBHOOK_PORT` 遵循 NanoClaw 标准配置优先级（环境变量 > `.env` > 默认 3000）。  
  🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3148)

### 🧩 技能生态扩展
- **PR #3846** [closed] — `feat(skills): add /add-typesafe-tool and the maintainer agent template`  
  作者 [@glifocat](https://github.com/nanocoai/nanoclaw/pull/3846)  
  引入 TypeSafe 的 Jev 判定模型作为容器工具，以及一个 `maintainer` 智能体模板。  
  🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3846)  
  > ⚠️ 注意：同名技能的精简版 #3848 仍保持 OPEN 状态，#3846 可能是被替代或拆分。

**整体评估**：今日项目在"安装友好性"维度取得实质性进展，Linux 用户引导体验显著改善；同时基础设施类 PR（端口、环境变量）持续收敛。

---

## 4. 社区热点

### 🔥 关闭但受关注的 Issue
- **Issue #957** — *Suggest supporting Podman as an alternative to Docker*  
  作者 [@fuyb](https://github.com/nanocoai/nanoclaw/issues/957) | 创建 2026-03-11，更新 2026-09-17 | 👍 **8** | 💬 **11 条评论**  
  该 Issue 持续活跃近 6 个月，获 8 个 👍，反映社区对**去 Docker 化、支持轻量替代容器运行时**的强烈诉求。最终被关闭，暗示维护者可能不计划支持或已另有安排。  
  🔗 [链接](https://github.com/nanocoai/nanoclaw/issues/957)

### 🔥 长期高争议 PR
- **PR #3156** [OPEN] — *fix(agent-runner): carry channel attachments to providers as structured parts*  
  作者 [@glifocat](https://github.com/nanocoai/nanoclaw/pull/3156) | 创建 2026-07-30  
  标签 `:area/agent-runner, area/core, area/providers`，从创建至今已超过 1.5 个月仍未合并，处于待处理状态。

- **PR #2681** [OPEN] — *fix(service): skip linger on per-home-encrypted systems*  
  作者 [@glifocat](https://github.com/nanocoai/nanoclaw/pull/2681) | 创建 2026-06-03（已超过 3 个月）  
  解决 systemd-homed 等 per-home 加密系统中 linger 行为异常问题，长期未合入。

### 🔥 战略性大重构 PR（同期开放）
维护者 [@zvi-fried](https://github.com/nanocoai/nanoclaw) 在 2026-09-15 一次性开启 4 个网关层重构 PR（#3815、#3816、#3817、#3818），构成一个完整的"OneCLI 网关可插拔化"系列，互相依赖：
- **#3815** — centralize the credential gateway contract（核心契约）
- **#3816** — extract OneCLI into an installable skill（OneCLI 提取）
- **#3817** — add the Iron Proxy gateway（新网关技能）
- **#3818** — select the gateway without changing provider login（解耦网关选择与登录）

这表明项目正在从"OneCLI 一统天下"过渡到**多网关可选架构**，是重要的战略性变更。

---

## 5. Bug 与稳定性

| 严重程度 | 问题 | 状态 | 修复 PR |
|---|---|---|---|
| 🟠 中 | Linux 非 root 用户 + 系统包 Node 触发 `EACCES` 引导挂死 | ✅ 已修复 | [#3844](https://github.com/nanocoai/nanoclaw/pull/3844)、[#3847](https://github.com/nanocoai/nanoclaw/pull/3847) |
| 🟡 低 | `WEBHOOK_PORT` 未读取 `.env` | ✅ 已修复 | [#3148](https://github.com/nanocoai/nanoclaw/pull/3148) |
| 🟠 中 | OpenCode 历史记录中 Gemini `functionCall` 顺序错误导致反序列化失败 | 🟡 修复 PR 待合并 | [#3849](https://github.com/nanocoai/nanoclaw/pull/3849) |
| 🟠 中 | 频道附件未被正确结构化传递给 provider | 🟡 修复 PR 待合并（已超 1.5 个月） | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) |
| 🟢 低 | systemd-homed 加密家目录下 linger 行为异常 | 🟡 修复 PR 待合并（已超 3 个月） | [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) |
| 🟡 低 | Codex MCP 策略在 OneCLI 网关下未生效 | 🟡 修复 PR 待合并 | [#3551](https://github.com/nanocoai/nanoclaw/pull/3551)、[#3552](https://github.com/nanocoai/nanoclaw/pull/3552) |
| 🟢 低 | Webhook 端口恢复测试偶发 `EADDRINUSE` | 🟡 修复 PR 待合并 | [#3803](https://github.com/nanocoai/nanoclaw/pull/3803) |

**观察**：今日关闭的 3 个修复 PR 集中在"安装/启动期失败"，是典型的用户引导路径问题，对**新用户转化率**影响显著。其余待合入修复在功能层面属于非阻塞性，但仍存在长期积压现象（#2681、#3156）。

---

## 6. 功能请求与路线图信号

### 路线图核心信号：网关层可插拔化

由 [@zvi-fried](https://github.com/nanocoai/nanoclaw) 主导的 4 个 PR 构成完整的"网关架构 2.0"提案：

| PR | 内容 | 链接 |
|---|---|---|
| #3815 | 集中化凭据网关契约与人工审批生命周期 | [链接](https://github.com/nanocoai/nanoclaw/pull/3815) |
| #3816 | 将 OneCLI 提取为可安装 skill | [链接](https://github.com/nanocoai/nanoclaw/pull/3816) |
| #3817 | 新增 Iron Proxy 网关技能 | [链接](https://github.com/nanocoai/nanoclaw/pull/3817) |
| #3818 | 解耦"选择网关"与"提供商登录" | [链接](https://github.com/nanocoai/nanoclaw/pull/3818) |

**含义**：项目正在从"单一 OneCLI 网关"演进为**多网关架构**，社区呼声（Podman 替代等）可能是路线图的考虑因素。

### 来自社区的新功能请求

- **Issue #957**（已关闭）— 用户希望文档中提及 Podman 作为 Docker 替代方案。建议未被采纳，反映**项目当前阶段仍以 Docker 为主流部署目标**，短期内不太可能引入多容器运行时支持。

### 较有可能进入下一版本的功能 PR

1. **#3741** *feat(tasks): --fresh-session* — 让定时任务支持无状态执行，避免长对话膨胀（作者用例：一周增长 15%）。轻量且需求明确，**合入概率较高**。  
   🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3741)
2. **#3845** *feat(dashboard): add local monitoring dashboard* — 本地监控面板，新增 `DASHBOARD_SECRET`/`DASHBOARD_PORT` 配置。面向运维，**可能作为后续版本亮点**。  
   🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3845)
3. **#3848** *feat(skills): add /add-typesafe-tool* — TypeSafe Jev 判定容器工具，与 #3846 互补，可能作为 #3846 替代方案。  
   🔗 [链接](https://github.com/nanocoai/nanoclaw/pull/3848)

---

## 7. 用户反馈摘要

基于 Issue #957 的 11 条评论与 8 个 👍，可提炼以下真实痛点：

| 痛点 | 场景 |
|---|---|
| **macOS/Linux 桌面端 Docker Desktop 体验不佳** | 用户对 Docker Desktop 资源占用、许可证模式不满，希望使用系统自带或更轻量的容器运行时 |
| **企业/隐私敏感场景** | Docker Desktop 涉及遥测、注册要求，部分企业用户无法使用 |
| **Podman 原生无守护进程、rootless** | 被视为更符合 Unix 哲学的替代方案 |
| **对项目整体满意** | 用户明确写道"this project is very useful and well designed"，说明 NanoClaw 在功能设计层面获得认可，主要卡点在环境依赖 |

**维护者回应倾向**：通过关闭 Issue 的方式明确表态"暂不支持"，但保留了文档建议的可能性。

---

## 8. 待处理积压

### ⚠️ 长期未合入的 PR（建议维护者优先关注）

| PR | 创建日期 | 等待天数 | 关键模块 |
|---|---|---|---|
| [#2681](https://github.com/nanocoai/nanoclaw/pull/2681) | 2026-06-03 | **106 天** | area/setup-installation |
| [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) | 2026-07-30 | **49 天** | area/agent-runner, area/providers |
| [#3551](https://github.com/nanocoai/nanoclaw/pull/3551) | 2026-08-26 | **23 天** | area/configuration, area/providers |
| [#3552](https://github.com/nanocoai/nanoclaw/pull/3552) | 2026-08-26 | **23 天** | area/agent-runner, area/providers |
| [#3741](https://github.com/nanocoai/nanoclaw/pull/3741) | 2026-09-07 | **11 天** | area/scheduled-tasks |
| [#3803](https://github.com/nanocoai/nanoclaw/pull/3803) | 2026-09-14 | **4 天** | area/configuration |

### 🔗 战略性 PR 互依关系风险

PR #3815 → #3816 → #3817/#3818 形成链式依赖，若主干合并顺序不当，可能导致集成冲突。建议尽快协调评审节奏。

---

## 📊 项目健康度评分（基于今日数据）

| 维度 | 评级 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 18 个 PR 更新，4 个关闭，节奏稳健 |
| 稳定性修复 | ⭐⭐⭐⭐ | Linux 引导路径重大问题已修复 |
| 社区参与 | ⭐⭐⭐ | Issue #957 显示用户深度参与，但维护者回应有限 |
| 路线图清晰度 | ⭐⭐⭐ | 网关层重构有清晰愿景，但 PR 间依赖增加复杂度 |
| 积压管理 | ⭐⭐ | 2 个 PR 超 1 个月未动，需关注维护者工作量 |

---

*报告生成时间：2026-09-18 | 数据来源：GitHub API · 仓库 [qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-09-18
**项目地址**：[nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**低位**。过去 24 小时内仅有 1 条 Issue 被创建/更新，无 PR 活动，无新版本发布。具体来看，唯一的新增条目 #8101 属于自动化的"每日失败分类（daily failure taxonomy）"机制，由 pranavraja99 创建，属于项目内部对 benchmark 跑分结果的例行审计记录，而非用户驱动的功能/Bug 反馈。整体而言，今日项目处于"维护静默期"，仓库未观察到代码层面的推进或社区互动。

---

## 2. 版本发布

*本节无内容（过去 24 小时无新版本发布）。*

---

## 3. 项目进展

*本节无内容（过去 24 小时无 PR 合并或关闭，无代码层面的向前推进）。*

---

## 4. 社区热点

### #8101 [OPEN] Daily ironclaw failure taxonomy — 2026-09-17
- **作者**：pranavraja99
- **链接**：[nearai/ironclaw#8101](https://github.com/nearai/ironclaw/issues/8101)
- **互动数据**：评论 0、👍 0
- **热度评估**：⭐ 低（无人互动，但属于自动生成的结构化审计条目）

**分析**：该 Issue 并非传统意义上的社区讨论帖，而是项目质量保障体系的一部分。它系统性地分析了当日 `officeqa` 测试套件中的 35 个失败任务，指出 DeepSeek-V4-Flash 模型在导航类任务中产生的失败主要属于"真实的模型质量问题"，而非基础设施或测试脚本错误。这表明项目运行着**每日自动化的模型质量评估流水线**，并将结果透明地以 Issue 形式归档，是良好的工程治理实践。背后诉求并非社区呼声，而是项目维护方对模型表现的持续监测。

---

## 5. Bug 与稳定性

### #8101 — 模型质量相关失败报告
- **严重程度**：🟡 中（非代码 Bug，属模型能力问题）
- **类别**：模型质量回归 / Benchmark 退化
- **是否有 fix PR**：❌ 否（且通常此类条目不通过 PR 修复，而需模型迭代）

**详情**：在 `officeqa` 套件中观察到 35 个非通过任务，失败模式高度集中于 DeepSeek-V4-Flash 的导航能力。该报告本身是"症状记录"，修复路径指向**底层模型升级**而非代码 hotfix。建议关注：是否后续会切到 DeepSeek 新版或新基模以改善该类失败率。

---

## 6. 功能请求与路线图信号

*本节无内容（今日无用户驱动的功能请求，无新 PR 暗示路线图走向）。*

如需观察长期路线图，建议回溯近 30 天合并的 PR 列表，以判断维护者当前的优先事项。

---

## 7. 用户反馈摘要

今日 Issue 评论区为 0，无新增用户原声可提炼。#8101 作为自动化条目，反映的并非终端用户体验，而是**模型在 officeqa 导航任务上的能力短板**——若该短板延伸至真实用户场景，可能表现为：在办公类问答/工作流自动化场景中，模型出现较高比例的步骤错乱或目标偏离。维护方应在下一轮模型迭代中优先改善此能力。

---

## 8. 待处理积压

| 编号 | 标题 | 状态 | 链接 | 备注 |
|------|------|------|------|------|
| #8101 | Daily ironclaw failure taxonomy — 2026-09-17 | OPEN | [#8101](https://github.com/nearai/ironclaw/issues/8101) | 新开（昨日），自动化条目无需即时人工响应，但建议维护者确认归档机制是否正常触发 |

> ⚠️ **提醒**：仅凭今日数据无法判断项目是否已积累大量长期未响应 Issue。建议结合仓库整体的 Open Issue 平均响应时长（median time to first response）来评估社区健康度。

---

## 项目健康度总评

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐☆☆☆☆ | 0 PR |
| 社区互动度 | ⭐☆☆☆☆ | 0 评论、0 反应 |
| 发布节奏 | — | 今日无版本 |
| 自动化机制健康度 | ⭐⭐⭐⭐☆ | 每日 benchmark 审计流水线正常运行 |

**结论**：今日为典型的"低噪声日"，仓库依靠自动化机制维持最低限度的健康信号。**未观察到任何异常或风险信号**，但也未观察到任何主动推进项目前进的迹象。维护者层面的活跃度需结合更长周期数据评估。

---

*本报告基于 GitHub 公开数据自动生成，所有数据均可通过上述链接验证。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# 🦞 LobsterAI 项目日报
**日期：2026-09-18** | [GitHub 仓库](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日进入 **2026.9.16 版本收尾与合并高潮期**：18 条 PR 更新中已有 13 条关闭，且包含一条 `Release/2026.9.16` 发布分支 PR（#2699）被关闭，暗示版本已正式发布或正处于最后合并阶段。Issue 侧全部 5 条更新均被标记为 `[stale]` 并自动关闭（含 2 条仍处于 OPEN 状态），反映社区提单活跃度偏低、安全类积压未及时响应。当日零新版本 tag 落地，仍以代码合并与回归修复为主旋律，整体项目健康度评估为 **中等偏活跃**。

---

## 2. 版本发布

🚫 **今日无新版本发布。** 

值得注意的是 PR #2699 分支名为 `Release/2026.9.16`，已于 9 月 17 日关闭，**高度疑似 2026.9.16 版本已通过该 PR 落地**，但未生成对应的 GitHub Release 资产。建议维护者确认是否需要发布正式 Release tag 与 changelog。

---

## 3. 项目进展

### 🎯 已合并/关闭的重要 PR（精选）

| PR | 标题 | 模块 | 影响 |
|---|---|---|---|
| [#2698](https://github.com/netease-youdao/LobsterAI/pull/2698) | fix(openclaw): safely recover stale gateway lock owners | openclaw / main | 修复遗留网关或迁移锁仍引用存活 PID 时一键修复被维护锁阻断的问题，补齐 Windows 下创建时间/可执行文件/运行时入口的核验 |
| [#2695](https://github.com/netease-youdao/LobsterAI/pull/2695) | fix(openclaw): prevent browser DNS failures from restarting gateway | openclaw / main | 防止 Playwright 浏览器导航中的 DNS 错误逃逸出异步回调导致 Gateway 退出；限制导航失败在工具调用内 |
| [#2694](https://github.com/netease-youdao/LobsterAI/pull/2694) | fix(openclaw): guard IM workloads and observe config recovery | openclaw / main / docs | 将有效 IM 生命周期与 active 轮询证据纳入自动配置重启检查，避免误判空闲重启网关 |
| [#2693](https://github.com/netease-youdao/LobsterAI/pull/2693) | fix(main): make app quit hide windows immediately and stop skill services faster | main | 退出时立即隐藏窗口，并以轮询方式判断 web search skill service 实际退出（替代固定 2 秒等待） |
| [#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) | feat(cowork): rotate thinking phases and show finished step count in the activity indicator | cowork / renderer | 模型静默时轮播多个"思考阶段"提示词，附带已完成步骤计数，缓解用户对"Thinking 卡死"的焦虑 |
| [#2691](https://github.com/netease-youdao/LobsterAI/pull/2691) | fix(openclaw): restore native Feishu plugin loading | openclaw / docs | 修复 `@larksuite/openclaw-lark@2026.7.16` 在 ESM 范围下 `exports is not defined` 导致飞书渠道无法注册 |
| [#1087](https://github.com/netease-youdao/LobsterAI/pull/1087) | fix(cowork): 修复 continueSession 失败时向用户展示两条重复错误消息 | cowork | 移除第一处冗余 `addMessage`，保留更通用的错误分类路径 |
| [#1081](https://github.com/netease-youdao/LobsterAI/pull/1081) | fix(mcp): 同步提示国际化补全 & 修复编辑弹窗滚动条超出圆角边框 | mcp | 完善 `mcpBridgeSyncDone` 中英文模板，修弹窗滚动条视觉溢出 |

> 📈 **总体评估**：今日合并的修复集中在 **OpenClaw 网关健壮性** 与 **Cowork 用户体验**，IM 工作负载证据、网关锁恢复、飞书插件加载三项属于版本阻断级问题，合并节奏反映维护团队在发版前集中扫尾。功能侧仅 #2692 与 #2696 带来可见增量。

### 🔀 仍处 OPEN 的 PR（5 条待合并）

- [#2699 Release/2026.9.16](https://github.com/netease-youdao/LobsterAI/pull/2699) — 发布分支已 close，但仓库仍残留
- [#2696 feat(cowork): turn workspace review, inline question dock and Tasks panel](https://github.com/netease-youdao/LobsterAI/pull/2696) — 借鉴下游 fork 引入 Codex 风格会话工作区改进
- [#2669 chore(deps-dev): bump vite from 5.4.21 to 8.3.0](https://github.com/netease-youdao/LobsterAI/pull/2669) — Vite 重大版本升级（跨 3 个大版本）
- [#1027 fix(plugins): skip optional plugins with unreachable custom registries immediately](https://github.com/netease-youdao/LobsterAI/pull/1027)
- [#1028 fix(im): guard v2Client null in sendTeamTextReply and fetchTeamName](https://github.com/netease-youdao/LobsterAI/pull/1028)
- [#1029 fix(im): replace auto-derived PLATFORM_TO_CHANNEL_MAP with explicit definition](https://github.com/netease-youdao/LobsterAI/pull/1029)

---

## 4. 社区热点

由于今日所有 Issues 均被系统标记 `[stale]` 并自动关闭（无人工互动迹象），社区讨论热度处于 **历史低位**：

- 🔥 评论数最多的 Issue 为 [#1082](https://github.com/netease-youdao/LobsterAI/issues/1082)（2 条评论）— 关于 `package.json` 中 `openclaw.version` v2026.3.2 是否需要升级，以及监管合规性关切。
- [#1088](https://github.com/netease-youdao/LobsterAI/issues/1088) 与 [#1089](https://github.com/netease-youdao/LobsterAI/issues/1089) 各有 2 条评论，分别涉及 Prefetch 异步回调跨轮次污染、CoworkRunner 缺重入保护两个并发安全议题。
- 仍 OPEN 的 [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) 与 [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) 各自仅 1 条评论，未形成社区讨论。

**背后诉求**：开发者关注焦点集中在 **异步/并发安全**、**协议级安全（shell:openExternal 任意协议调用）** 和 **依赖合规**，但缺乏维护者响应，问题被 stalebot 沉默处理。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 问题 | 关联修复 PR | 状态 |
|---|---|---|---|
| 🔴 高（安全） | [Issue #1031](https://github.com/netease-youdao/LobsterAI/issues/1031) — `shell:openExternal` 未校验 URL 协议，可调用 `file:///` 等任意协议，存在 RCE/信息泄露风险 | ❌ 无 | OPEN，stale |
| 🔴 高（崩溃） | [Issue #1026](https://github.com/netease-youdao/LobsterAI/issues/1026) — `NimGateway.sendTeamTextReply()` 与 `stop()` 并发时 `v2Client` 为 null 导致 `TypeError` 崩溃 | ✅ [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) | OPEN PR，stale |
| 🟠 中（安全） | [Issue #1088](https://github.com/netease-youdao/LobsterAI/issues/1088) — Prefetch 异步回调不校验 turnToken，跨轮次污染 session 状态 | ❌ 无 | CLOSED(stale) |
| 🟠 中（数据损坏） | [Issue #1089](https://github.com/netease-youdao/LobsterAI/issues/1089) — `CoworkRunner.startSession/continueSession` 无重入保护，并发导致流式消息损坏和重复 | ❌ 无 | CLOSED(stale) |
| 🟡 中（构建卡死） | [PR #1027](https://github.com/netease-youdao/LobsterAI/pull/1027) — `ensure-openclaw-plugins.cjs` 对 optional 插件无差别等待内网 registry 超时，外部开发者 `npm install` 卡死 5 分钟 | 自带 PR | OPEN，stale |
| 🟡 中（体验） | [Issue #1082](https://github.com/netease-youdao/LobsterAI/issues/1082) — `package.json` 中 openclaw 版本号滞后，可能不符合监管更新要求 | ❌ 无 | CLOSED(stale) |
| 🟢 低 | [PR #1081](https://github.com/netease-youdao/LobsterAI/pull/1081) — MCP 同步提示中英混杂 + 弹窗滚动条溢出圆角 | 自带 PR | 已关闭 |
| 🟢 低 | [PR #1087](https://github.com/netease-youdao/LobsterAI/pull/1087) — `continueSession` 失败，用户看到两条重复错误消息 | 自带 PR | 已关闭 |

> ⚠️ **关键警示**：尽管 9.16 合并了一批 OpenClaw 网关修复（#2694/#2695/#2698），但 **安全类 Issue #1031（shell:openExternal 任意协议调用）与并发类 Issue #1088/#1089 均未合并修复 PR**，仍存在版本残留风险。

---

## 6. 功能请求与路线图信号

### 已具备明确 PR 支撑（合并/关闭）
- **Cowork 工作区增强** [#2696](https://github.com/netease-youdao/LobsterAI/pull/2696) — Codex 风格会话工作区、inline 问题停靠面板、Tasks 面板（移植自下游 fork）
- **Cowork "当前进程"面板** [#1079](https://github.com/netease-youdao/LobsterAI/pull/1079) — 工具执行记录 + diff 视图
- **Cowork 思考阶段轮播** [#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) — 解决"Thinking 卡死"焦虑
- **Cowork 双击重命名会话标题** [#641](https://github.com/netease-youdao/LobsterAI/pull/641)
- **定时任务失败 IM 告警** [#1078](https://github.com/netease-youdao/LobsterAI/pull/1078) — 对称化成功/失败投递
- **依赖升级** [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) — Vite 5.4.21 → 8.3.0（大跨度，需关注破坏性变更）

### 信号判断
当前 PR 池明显倾向于 **Cowork 子模块体验打磨** 与 **OpenClaw 网关稳定性**，下一版本（推测 2026.9.x 或 2026.10）大概率继续延续这条主线。`shell:openExternal` 安全加固、Vite 升级、IM 通道映射规范化 (#1029) 是最有希望在下一窗口纳入的候选。

---

## 7. 用户反馈摘要

> ⚠️ 由于所有活跃 Issues 仅有 0-2 条评论且都被 stalebot 自动关闭，本节能提炼的一手用户反馈非常有限：

- **合规与升级焦虑**（[Issue #1082](https://github.com/netease-youdao/LobsterAI/issues/1082)）：用户 `baleli668` 担忧 `package.json` 中 `openclaw.version: v2026.3.2` 是否需要按"国家互联网应急中心"要求升级到最新版本，反映出 **企业级用户对监管合规的敏感度**，但未获维护者回应。
- **IM 工具稳定性**：从 [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026)、[#1028](https://github.com/netease-youdao/LobsterAI/pull/1028)、[#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) 看，IM 通道（特别是 Nim/网易 popo 与企业微信）仍是高使用频次场景下的痛点区，表现为断连崩溃、平台↔渠道映射歧义。
- **构建工具链对外部开发者不友好**（[#1027](https://github.com/netease-youdao/LobsterAI/pull/1027)）：内网 registry `npm.nie.netease.com` 导致外部贡献者构建卡死 5 分钟，反映 **内部基建对开源协作的隐性摩擦**。
- **正面反馈隐含**：[#2692](https://github.com/netease-youdao/LobsterAI/pull/2692) 的"轮播思考阶段"修复指向用户长期投诉"模型 Thinking 阶段显示为卡死"，侧面证明活跃用户对 Cowork 体验有持续关注。

---

## 8. 待处理积压

🚨 **以下重要 Issue/PR 长期未被维护者响应，建议立即关注**：

| 链接 | 类型 | 问题摘要 | 创建时间 | 风险 |
|---|---|---|---|---|
| [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) | 安全 Issue | `shell:openExternal` 无协议校验，任意协议调用 | 2026-03-30 | 🔴 高 |
| [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028) | PR | 修复 IM `v2Client` null 崩溃（已附完整 patch） | 2026-03-30 | 🔴 高 |
| [#1026](https://github.com/netease-youdao/LobsterAI/issues/1026) | Bug Issue | IM 客户端断连并发崩溃 | 2026-03-30 | 🟠 中 |
| [#1029](https://github.com/netease-youdao/LobsterAI/pull/1029) | PR | IM 平台映射歧义（popo/wecom 多对一）显式化 | 2026-03-30 | 🟠 中 |
| [#1027](https://github.com/netease-youdao/LobsterAI/pull/1027) | PR | optional 插件不可达 registry 立即跳过 | 2026-03-30 | 🟡 中 |
| [#2669](https://github.com/netease-youdao/LobsterAI/pull/2669) | PR | Vite 跨三个大版本升级（5→8） | 2026-09-14 | 🟡 中 |

> 📌 **建议**：以上 6 条均已超过 5 个月（最久近 6 个月）未推进，且大多自带可直接合并的修复代码。维护者应优先 review [#1028](https://github.com/netease-youdao/LobsterAI/pull/1028)（崩溃修复）、[#1029](https://github.com/netease-youdao/LobsterAI/pull/1029)（多平台映射规范化）、[#1027](https://github.com/netease-youdao/LobsterAI/pull/1027)（降低外部贡献者门槛），并为 [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031) 安全 Issue 制定修复计划。

---

### 📊 项目健康度速览

| 维度 | 状态 | 评分 |
|---|---|---|
| 发布节奏 | 9.16 发布分支已关闭但无正式 tag | ⭐⭐⭐ |
| Issue 响应 | 5/5 被 stale 自动关闭，0 人工回复 | ⭐⭐ |
| PR 合入效率 | 13/18 当日关闭（含 stale） | ⭐⭐⭐⭐ |
| 安全治理 | 1 个高危 RCE 类 Issue 长期未处理 | ⭐⭐ |
| 路线图清晰度 | 集中在 OpenClaw 网关 + Cowork 体验 | ⭐⭐⭐⭐ |

**整体结论**：LobsterAI 处于 **发版后稳定期**，核心维护力量已转向下一窗口规划，但 **社区互动通道近乎停摆**（stale 自动沉默）与 **安全债务累积** 是需要警惕的两大健康风险点。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-18

> 数据范围：2026-09-17 至 2026-09-18（GitHub Issues & PRs）

---

## 1. 今日速览

Moltis 仓库在过去 24 小时整体处于**低强度、稳态运营**状态：新增 2 条 Issue、3 条 PR，均处于 OPEN 状态，无任何版本发布、合并或关闭动作。议题方向集中于**构建/打包（Nix flake）**、**搜索能力（wasm-web-search）**、**沙箱隔离**与**定时任务边界条件**四个工程化主题，体现出项目正由功能扩展期转向**稳定性与可复现性打磨期**。社区互动量较低（所有条目评论数均为 0），短期内未出现热点讨论。

---

## 2. 版本发布

本周期无新版本发布。最近一次可参照的 tag 为社区提及的 `20260913.02`（commit `6aa4881`），但该 tag 已被 Issue [#1273](https://github.com/moltis-org/moltis/issues/1273) 报告存在构建问题，建议维护者评估是否需要补丁发布。

---

## 3. 项目进展

⚠️ **过去 24 小时内无 PR 被合并或关闭。** 以下为持续推进中的关键 PR：

| PR | 方向 | 状态 | 价值评估 |
|---|---|---|---|
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | `feat(sandbox): per-agent mounts, run_as and a forced sandbox` | OPEN（9-16 创建，9-17 更新） | **高价值** — 为 agent preset 引入 `mounts`、`run_as`、`force` 三个沙箱细粒度旋钮，强化多租户/多代理安全模型 |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | `fix(cron): treat active_hours end="24:00" as end-of-day` | OPEN（9-7 创建，9-17 更新） | **高价值修复** — 修复文档化默认窗口（`08:00 – 24:00`）下因 chrono `%H` 不接受 `24` 而导致 fail-open 恒为 active 的隐性安全/行为缺陷 |
| [#1275](https://github.com/moltis-org/moltis/pull/1275) | `chore(deps): bump smol-toml 1.7.0 → 1.8.0`（/docs） | OPEN | 例行依赖更新，影响面小 |

**整体判断**：项目向前迈进的方向明确（安全沙箱精细化 + 调度语义修正），但合并节奏偏慢，需关注评审瓶颈。

---

## 4. 社区热点

由于评论数均为 0，**"热点"主要体现在议题本身的关注价值**：

- 🔥 **[Issue #1273 – Nix flake cannot build the published tag](https://github.com/moltis-org/moltis/issues/1273)**
  - 诉求：发布产物（`20260913.02`）的 Nix 打包路径在 `cargoLock.outputHashes` 与 web assets 两端均存在缺口，新依赖 `wacore-0.6.0`、`zvec-rust-0.6.0` 未纳入哈希锁定。
  - 背后诉求：用户希望实现**可复现构建**与**离线/Nix 化部署**，反映 Moltis 正被更严肃的运维场景采纳。

- 🔥 **[Issue #1274 – Prepaid search hop for Moltis wasm-web-search?](https://github.com/moltis-org/moltis/issues/1274)**
  - 诉求：在 wasm-web-search 链路中引入 prepaid/预付费代理 hop，以解耦上游搜索 API 计费与本地用户关系。
  - 背后诉求：降低外部 API 成本风险，可能为多用户部署或多模型路由场景铺路。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | 条目 | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🟠 **中高** | [#1273](https://github.com/moltis-org/moltis/issues/1273) | 官方 tag `20260913.02` 的 Nix flake **完全无法构建**：缺 `wacore-0.6.0` 与 `zvec-rust-0.6.0` 的 vendored 哈希，且 web assets 缺失 | ❌ 暂无 fix PR |
| 🟡 **中**（隐性） | [#1262](https://github.com/moltis-org/moltis/pull/1262) | cron 模块 `active_hours` 在 `end="24:00"` 时 fail-open 为全天 active，存在**静默行为偏差** | ✅ 已有 fix PR（待合并） |
|  **低** | — | 无崩溃/回归报告 | — |

**建议**：维护者优先合并 [#1262](https://github.com/moltis-org/moltis/pull/1262)，并尽快回复 [#1273](https://github.com/moltis-org/moltis/issues/1273)，必要时追加 hotfix tag。

---

## 6. 功能请求与路线图信号

- **[Issue #1274](https://github.com/moltis-org/moltis/issues/1274) — Prepaid search hop**
  属于**网络/成本层增强**，与 `wasm-web-search` 现有架构耦合度低，可作为独立模块迭代；当前无关联 PR，预计纳入中期路线图的概率中等。

- **[PR #1272](https://github.com/moltis-org/moltis/pull/1272) — Per-agent sandbox knobs**
  已是可合并形态，补全了 Moltis agent preset 的安全语义，**有望成为下一版本亮点**。

- **[PR #1275](https://github.com/moltis-org/moltis/pull/1275) — smol-toml bump**
  常规依赖卫生维护，几乎必然随下一次例行更新合入。

---

## 7. 用户反馈摘要

由于评论数为 0，本期直接用户声音有限，但可从 Issue 正文提取以下信号：

- **可复现构建需求**（[#1273](https://github.com/moltis-org/moltis/issues/1273)）：用户期望官方 tag 即"可构建产物"，对发布工程链路提出更高要求。
- **文档与实际行为一致性**（[#1262](https://github.com/moltis-org/moltis/pull/1262)）：文档化的 `start="08:00"` / `end="24:00"` 默认窗口未按字面意义生效，说明**默认值与解析器之间的契约**仍需加固。
- **成本可控性诉求**（[#1274](https://github.com/moltis-org/moltis/issues/1274)）：用户希望本地代理层介入上游搜索 API 计费，反映对**长期运营成本敏感度**提升。

整体而言，用户对项目能力认可（愿意投入做 Nix 化、探索计费优化），但对**发布质量与默认行为契约**存在不满。

---

## 8. 待处理积压

| 条目 | 类型 | 闲置天数 | 建议 |
|---|---|---|---|
| [#1273](https://github.com/moltis-org/moltis/issues/1273) | Bug（发布阻塞） | 1 | 标记 `release-blocker`，24h 内回应 |
| [#1274](https://github.com/moltis-org/moltis/issues/1274) | Enhancement | 1 | 维护者认领 + 标 `needs-design` |
| [#1272](https://github.com/moltis-org/moltis/pull/1272) | Feature PR | 2 | 安排评审，重点核查 `[sandbox]` schema 向后兼容性 |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | Bugfix PR | **11** | ⚠️ 长期未合并，且修复涉及安全相关 fail-open 行为，建议**优先合入** |
| [#1275](https://github.com/moltis-org/moltis/pull/1275) | Deps bump | 0 | 加入批量合并队列即可 |

**积压健康度**：中等偏低。#1262 已闲置 11 天仍未合入，与"修复静默 fail-open"的安全属性叠加，建议维护者本周内优先处理。

---

> 📊 **报告生成时间**：2026-09-18 · 数据来源：Moltis GitHub Repository
> 🔗 项目主页：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报
**报告日期：2026-09-18**

---

## 1. 今日速览

CoPaw（QwenPaw）今日呈现高强度迭代节奏：过去 24 小时共发生 **18 条 Issue 更新**（16 开放 / 2 关闭）与 **42 条 PR 更新**（24 待合并 / 18 已合并或关闭），单日 PR 流量为近期峰值。仓库无正式版本发布，但 **PR #7844 已发起版本号 bump 至 v2.2.2b2**，预示 2.2.2 补丁版本即将进入发布窗口。今日多起关键 Bug 被密集提交，覆盖 Console 流式协议、事件循环隔离、上下文管理与 MCP 驱动等核心路径；同时 Hub 模型网关等大型特性已合并落地。整体来看，项目处于"修 Bug + 推版本"并行的高压节奏，健康度评估为中等偏紧。

---

## 2. 版本发布

**暂无正式 Release**。

但需关注：
- **PR #7844**（OPEN，今日新建）：`chore: bump the version to v2.2.2b2` —— 由维护者 cuiyuebing 发起，预示 **v2.2.2 beta2** 版本号即将生效。修复内容预计来自本日报涉及的多条 Bug 修复 PR。
- 当前线上版本仍为 **v2.2.1**（来自 Issue 标题反复确认），多个新 Bug 均明确报告于 2.2.0/2.2.1。

> 📌 维护者需注意：2.2.2b2 的 changelog 应优先覆盖 Console SSE 健壮性、plugin 事件循环隔离、scroll 上下文管理三类高危修复。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 意义 |
|---|---|---|
| [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | `feat(hub): add model gateway, member governance and usage dashboard` | **大型特性合并**：Hub 升级为组织级模型网关，管理员可统一发布模型并保管供应商密钥，会员无需接触组织凭据即可选用 Hub 模型。是项目从"个人助手"走向"组织化 AI 中台"的关键一步。 |
| [#6353](https://github.com/agentscope-ai/QwenPaw/pull/6353) | `feat(crons): support per-job model overrides` | **关闭长期 Feature Request #6316**：cron job 可固定使用指定模型（`model_slot_override`），与活动模型解耦。 |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | `feat(console): add per-cron-job model override picker`（首次贡献者） | 配套前端 UI：Cron Jobs 抽屉新增模型选择器，与 #6353 共同构成完整功能闭环。 |
| [#7488](https://github.com/agentscope-ai/QwenPaw/pull/7488) | `fix(pawapp-sdk): finalize stream resources exactly once` | 修复 PawApp SSE 流与长任务句柄在多路径（正常完成/异常/取消/abort 竞争）下的资源释放，确保只释放一次。 |
| [#7808](https://github.com/agentscope-ai/QwenPaw/pull/7808) | `refactor(loop): pass DoomLoopStageConfig objects from catalog factory`（首次贡献者） | 清理 doom-loop 工厂的类型边界，由 catalog 阶段直接产出已校验对象，避免 Gate 层做"双形态"兼容。 |

**进展评估**：项目在"Hub 平台化"和"运维可治理性"（定时任务、模型覆盖、资源清理）方面取得实质性推进；2.2.2b2 的稳定性补丁窗口已成型。

---

## 4. 社区热点（按讨论密度）

| 议题 | 评论数 | 链接 | 背后诉求 |
|---|---|---|---|
| #7678 `spawn subAgent` 全量超时 | **10** | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7678) | 多代理编排核心路径不可用，所有 spawn 子代理任务即便大幅延长 timeout 也全部失败，属于 **P0 级功能性故障**，作者已附详细调试日志。 |
| #6316 / #6353 / #7050 Cron 模型覆盖 | 4 + 2 PR | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 用户希望精细化控制定时任务使用的模型，与活动模型解耦。该需求今天被前后端 PR 联合关闭，反映社区驱动力的高效转化。 |
| #7840 Plugin 共享事件循环 | **4** | [Issue](https://github.com/agentscope-ai/QwenPaw/pull/7840) | 任何一个 plugin 内的同步 I/O 冻结整个实例 40s+，**多租户/插件生态的根本性架构缺陷**，已有对应修复 PR #7842。 |
| #7815 Console lazy 加载失败不恢复 | 4 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 错误边界内的重试机制无法生效，只能硬刷新，**破坏性的前端可用性问题**。 |
| #7810 上下文管理 131k→271k 爆表 | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7810) | 用户对**配置不生效**的困惑，已引发文档/UI 透明度讨论，并催生修复 PR #7832。 |
| #7814 Console SSE 裸 `null` 帧 | 3 | [Issue](https://github.com/agentscope-ai/QwenPaw/issues/7814) | SSE 协议层健壮性问题，附 #7813 同一根因。 |

> 💡 综合分析：今日社区关注集中在 **Console 健壮性、插件隔离、上下文管理与多代理编排** 四大方向，与第 9 节 PR 分布高度重合，说明社区反馈正快速传导到工程实现。

---

## 5. Bug 与稳定性（按严重程度排序）

### 🔴 P0 — 阻塞核心功能
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) | `spawn subAgent` 任务全部 timeout | ❌ 暂无 fix PR，需关注 |
| [#7840](https://github.com/agentscope-ai/QwenPaw/pull/7840) | 插件同步调用冻结整个事件循环 ~40s | ✅ [PR #7842](https://github.com/agentscope-ai/QwenPaw/pull/7842) `fix(plugins): isolate synchronous hooks and add event loop lag watchdog` |

### 🟠 P1 — 关键路径缺陷
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#7839](https://github.com/agentscope-ai/QwenPaw/issues/7839) | session-sync 静默跳过 86 个孤立会话文件；`history.db` 报 "database disk image is malformed" | ❌ 暂无 fix PR |
| [#7836](https://github.com/agentscope-ai/QwenPaw/issues/7836) | scroll 驱逐在 tool-heavy 区间丢用户轮次 | ❌ 暂无 fix PR |
| [#7814](https://github.com/agentscope-ai/QwenPaw/issues/7814) + [#7813](https://github.com/agentscope-ai/QwenPaw/issues/7813) | SSE 帧携带裸 `null` 字面量 → Console 流冻结；`stream_one` 失败不发送终止事件 | ❌ 暂无 fix PR |
| [#7821](https://github.com/agentscope-ai/QwenPaw/issues/7821) | MCP 驱动丢弃刷新的 OAuth access_token，连接时凭证一直有效 | ❌ 暂无 fix PR |
| [#7827](https://github.com/agentscope-ai/QwenPaw/issues/7827) | `server/discover` 500 空响应未被识别为旧协议证据 → DashScope 千问 MCP 商店 streamable_http 驱动永远无法激活 | ❌ 暂无 fix PR |

### 🟡 P2 — 体验/可用性退化
| Issue | 描述 | 修复 PR |
|---|---|---|
| [#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) | Desktop 2.2.1 启动时 Console UI 早于 backend 就绪 | ❌ 暂无 fix PR |
| [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) | 启动后立即打 slash 命令作用于 fallback session | ✅ [PR #7834](https://github.com/agentscope-ai/QwenPaw/pull/7834) `fix(console): send /compact on the current chat` |
| [#7818](https://github.com/agentscope-ai/QwenPaw/issues/7818) | UI 经常卡死、内存占用率高 | ❌ 暂无 fix PR（建议配合 #7829 chat bundle 拆分） |
| [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | Console 错误边界无法从 lazy chunk 加载失败恢复 | ❌ 暂无 fix PR |
| [#7837](https://github.com/agentscope-ai/QwenPaw/issues/7837) | `user` 行无标题，scroll 驱逐索引被迫调用模型打标签 | ❌ 暂无 fix PR |
| [#7838](https://github.com/agentscope-ai/QwenPaw/issues/7838) | 无 sandbox（kernel < 5.13）时 `recall_history_python` 静默未注册 | ❌ 暂无 fix PR |
| [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) | 上下文管理配置不生效，131k 配置下飙到 271k | ✅ [PR #7832](https://github.com/agentscope-ai/QwenPaw/pull/7832) `fix(providers): make the context-window override explicit` |

> 📊 **覆盖率统计**：今日报告的 11 条 Bug 中，**已有对应修复 PR 的为 3 条（27%）**；另有 PR #7829（chat bundle 拆分/语言懒加载）、#7835（memory-recall payload 不再泄漏到 channel）等针对性能与内存的间接修复。整体覆盖率偏低，**2.2.2 正式版前需优先解决 P0/P1 未覆盖项**。

---

## 6. 功能请求与路线图信号

| 需求 | 状态 | 链接 | 路线图判断 |
|---|---|---|---|
| Cron job 单独指定模型 | ✅ **已合并**（后端 #6353 + 前端 #7050） | [#6316](https://github.com/agentscope-ai/QwenPaw/issues/6316) | 进入 v2.2.2 |
| Hub 模型网关与用量看板 | ✅ **已合并** | [#7779](https://github.com/agentscope-ai/QwenPaw/pull/7779) | Hub 平台化主线 |
| Realtime 语音对话（providers 可配置、含打断/播放/历史复用） | 🟡 PR 进行中 | [#7785](https://github.com/agentscope-ai/QwenPaw/pull/7785) | 高优先级特性，进入 v2.3 候选 |
| Agent 自主上下文管理（跨越驱逐的平滑交接） | 🟢 Feature Request 已开 | [#7733](https://github.com/agentscope-ai/QwenPaw/issues/7733) | 中长期信号，关联多个 scroll Bug |
| OS 桌面模式下注册自有应用 | 🟢 Feature Request 已开 | [#7830](https://github.com/agentscope-ai/QwenPaw/issues/7830) | 生态扩展信号 |
| ReMeLightMemoryCard reranker UI 配置 | 🟡 PR 待审（开于 7 月） | [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | **积压**，但需求明确 |
| Feishu 可折叠推理面板 | 🟡 PR 进行中 | [#7685](https://github.com/agentscope-ai/QwenPaw/pull/7685) | 适配长思维链模型 |
| AgentScope Platform 内置 provider | 🟢 PR 进行中 | [#7843](https://github.com/agentscope-ai/QwenPaw/pull/7843) | 与 Hub 模型网关互为补强，路线图主线 |
| QwenPaw-Data App 0.3（数据问答/澄清/报告） | 🟡 PR 待审 | [#7637](https://github.com/agentscope-ai/QwenPaw/pull/7637) | 数据智能化方向 |
| Local runtime CLI 与 Hub 模型默认值修正 | 🟡 PR 进行中 | [#7833](https://github.com/agentscope-ai/QwenPaw/pull/7833) | 跟进 #7779 的修复 |

**路线图信号**：项目正在从"个人 AI 助手"向 **"组织级 AI 平台 + 桌面生态"** 演进；Hub 网关、AgentScope Platform 内置、Desktop 应用注册、Realtime 语音构成下一阶段四大支柱。

---

## 7. 用户反馈摘要（来自 Issue 评论/正文）

- **配置不生效引发强烈挫败感**：用户 xiaohushi512 在 [#7810](https://github.com/agentscope-ai/QwenPaw/issues/7810) 反映，将模型上下文设置成 131k 后，每次提交都飙到 271k，"问 AI 也没解决"。这暴露出 **运行时实际生效的窗口与 UI 显示不一致**（已由 #7832 部分回应），是当前最直接的"信任损耗"反馈。
- **多代理编排可信度受损**：[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678) 中用户直言"没有一个 spawn subAgent 任务能跑下去"，并已尝试大幅延长 timeout——这意味着 subAgent 路径可能根本未被该用户的工作流接受。
- **插件生态的"隐性约束"**：[#7840](https://github.com/agentscope-ai/QwenPaw/pull/7840) 指出 plugin 共享宿主事件循环但**没有任何契约文档/监控/隔离机制**，作者感叹"插件作者怎么知道不能用同步 I/O"。这是**生态扩展的关键卡点**。
- **桌面端启动竞态**：[#7841](https://github.com/agentscope-ai/QwenPaw/issues/7841) 与 [#7812](https://github.com/agentscope-ai/QwenPaw/issues/7812) 共同表明桌面端 WebView2 启动序列对 backend readiness 缺乏同步，是 2.2.1 用户的高频痛点。
- **长期用户满意点**：从合并的 Hub 网关 (#7779) 与 cron 模型覆盖 (#6353/#7050) 可见，"组织治理 + 精细控制"类需求获得社区一致响应，反映项目对企业

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目日报
**日期：2026-09-18**
**数据范围：过去 24 小时**

---

## 1. 今日速览

ZeptoClaw 今日整体处于**中等活跃度**的"基础设施维护日"。过去 24 小时内共处理 11 条工单（5 Issues + 6 PRs），其中 **8 条已关闭**（72.7%），单日结案率较高。今日动作以**安全修复**（Rustls 0.23.45 升级）与**重大架构调整**（删除 GitHub Actions CI 检查）为两大主线，叠加一次常规 Dependabot 批量更新。值得注意的是一条仍处于 OPEN 状态的**工具 Schema 净化**功能 PR/Issue #698/#701，是面向本地/边缘模型适配的关键改进，后续值得重点跟踪。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未推送任何 Release tag 或版本号变更。最新版本仍需回溯至前序 Release（建议维护者在合入 Rustls 安全修复 #692 与工具 Schema 功能 #701 后，安排一次 patch 版本发布）。

---

## 3. 项目进展

今日合并/关闭的 PR 多数属于"清账式"操作，但其中蕴含两项实质性推进：

### 重大架构调整：删除 GitHub Actions CI
- **PR #700**（qhkm，2026-09-17）：应用户明确要求，删除所有 GitHub Actions CI 检查（CI / E2E / PR Hygiene 三个 workflow），保留 tag 触发的 Release 与 Docker 发布链路。README 的 CI 徽章已移除，Agent 与贡献者文档改为要求**本地验证**。
  - 对应 Issue：[#699](https://github.com/qhkm/zeptoclaw/issues/699)
  - 对应 PR：[#700](https://github.com/qhkm/zeptoclaw/pull/700)
  - **影响评估**：这是一个具有强社区信号意味的决策——表明 ZeptoClaw 倾向于更轻量的贡献门槛，但同时也意味着外部贡献者将更难判断 PR 健康度，需维护者人工把关。

### 安全修复合入：Rustls 升级
- **PR #692**（Dependabot，2026-09-17）：将 Rustls 升级至 **0.23.45**，修复 [RUSTSEC-2026-0285](https://rustsec.org/advisories/RUSTSEC-2026-0285.html)。原提案版本 0.23.43 同样存在漏洞。
  - [PR #692](https://github.com/qhkm/zeptoclaw/pull/692)
  - [Issue #697](https://github.com/qhkm/zeptoclaw/issues/697)
  - **影响**：解除了当前 18 个 Dependabot PR 被 Security audit 与 Cargo deny 阻挡的状态，是后续依赖批量合入的"开门钥匙"。

### 历史性 Issues 收尾
- **Issue #629**（2026-06-06 开 → 2026-09-17 关）：aarch64 7MB 二进制体积 gate 关闭。
- **Issue #545**（2026-04-23 开 → 2026-09-17 关）：可选集成 feature 的 PR CI 编译覆盖问题关闭。
  - 这两条遗留 Issue 的关闭意味着维护者对历史 CI 路线做了"一次性了断"——结合 #700 删 CI 的动作，可推断团队整体策略转向"降低 CI 复杂度、由本地把关"。

### 依赖例行更新
- **PR #683**（open, 待合并）：[Swatinem/rust-cache 2.9.1 → 2.9.2](https://github.com/qhkm/zeptoclaw/pull/683)
- **PR #684**（closed, 已合并）：[EmbarkStudios/cargo-deny-action 2.0.18 → 2.1.1](https://github.com/qhkm/zeptoclaw/pull/684)
- **PR #682**（closed, 已合并）：[taiki-e/install-action 2.79.7 → 2.87.6](https://github.com/qhkm/zeptoclaw/pull/682)

---

## 4. 社区热点

今日所有 Issues/PRs 的评论数与反应数均为 **0**（无表情、无讨论），说明这是典型的"维护者驱动的静默推进日"，未形成社区讨论氛围。

**潜在热点预判**：从议题本身的影响力看，下列两项未来最有可能引爆讨论：

1. **[Issue #699 / PR #700：删除 GitHub Actions CI](https://github.com/qhkm/zeptoclaw/issues/699)** —— 删除 CI 是一个高度争议性动作，目前 0 评论说明尚处于"安静落地期"。一旦外部贡献者尝试提 PR 时遇到"无法判断是否健康"的体验，可能集中反馈。

2. **[Issue #698：工具 Schema 净化与本地模型适配](https://github.com/qhkm/zeptoclaw/issues/698)** —— 这触及 ZeptoClaw 作为**边缘 runtime 的核心竞争力**（ollama / local provider 在 strict backend 下的存活能力），是面向"弱本地模型 + 严格后端"场景的关键。

---

## 5. Bug 与稳定性

今日报告的 Bug 类工单：

| 严重度 | Issue | 描述 | Fix 状态 |
|---|---|---|---|
| **P2-High（安全）** | [#697](https://github.com/qhkm/zeptoclaw/issues/697) | Rustls 0.23.39/0.23.43 受 [RUSTSEC-2026-0285](https://rustsec.org/advisories/RUSTSEC-2026-0285.html) 影响 | ✅ 已有 PR #692 修复（Rustls → 0.23.45），已关闭 |

**评估**：
- 今日仅有 1 个安全类 Bug，无应用层崩溃、性能退化或回归报告，**整体稳定性表现良好**。
- 安全漏洞修复链路顺畅：从 Issue #697 提出 → Dependabot PR #692 同步升级 → 双向关闭。
- **遗留关注**：RUSTSEC-2026-0285 是 TLS 链路的关键漏洞，建议维护者在下一版本 Release Note 中显式注明此修复，提升下游用户感知。

---

## 6. 功能请求与路线图信号

### 主要新功能请求（OPEN）

#### [#698](https://github.com/qhkm/zeptoclaw/issues/698) — 工具 JSON Schema 净化 + 模型工具参数强制转换
**标签**：`feat`, `area:tools`, `area:providers`, `P2-high`
**作者**：qhkm
**状态**：OPEN，已有对应实现 PR **#701**（同样 OPEN）

**诉求核心**：
- **出站层**：所有 `ToolRegistry::definitions*()` 路径在到达 Provider 前需经过 `utils::tool_schema::sanitize_schema()` 校验；目前 `src/tools/mcp/wrapper.rs` 的外部 MCP `input_schema` 是**逐字透传**，插件亦然。
- **入站层**：模型返回的工具参数在转发给 MCP/插件前，需进行**类型强制**与**字段规范化**，以适配严格 JSON-Schema 后端与弱本地模型。

**路线图信号**：
- 这是 ZeptoClaw "边缘 + 本地模型" 定位的**核心技术债**。维护者亲自提 Issue 并同步实现 PR（#701），表明**已进入实质开发阶段**，极可能纳入下一版本。
- 优先级 P2-High + 已有 working PR = **近期合入概率高**。

### 其它路线图信号
- **CI 全面本地化**（#699/#700 已落地）：暗示后续版本可能减少对云端 CI 服务的依赖，文档侧链变薄。
- **二进制体积治理**（#629 已关闭）：aarch64 7MB 上限策略被搁置，意味着体积优化的优先级被调低。

---

## 7. 用户反馈摘要

**今日无社区反馈互动**（0 评论 / 0 👍）。仅有以下可推断的用户信号：

1. **来自 Issue #699 的"用户明确请求"**：
   > "User explicitly requested removal of all GitHub Actions CI checks."
   
   这表明存在**一位（或一类）核心用户对 CI 体验不满**，理由可能包括：CI 噪音过多、维护成本高、希望降低外部贡献门槛等。但**缺乏更多用户背书**是该决策的潜在风险点。

2. **来自 Issue #698 的需求语境**：
   > "ZeptoClaw ships `ollama`/`local` providers and positions itself as an edge runtime, but does nothing to make tool calling survive weak local models or strict backends."
   
   反映出**目标用户场景**——在 Pi/Jetson/Apple Silicon 上跑弱本地模型（如 7B 以下量化模型）+ 严格后端时，工具调用链路频繁失败。这是边缘 AI Agent 场景的真实痛点，但今日 Issue 内无第三方用户案例补充。

3. **痛点盲区**：
   - 缺少"哪些工作流实际崩溃"的用户场景报告；
   - 缺少"哪些 MCP 服务器表现明显"的对比数据；
   - 建议维护者在 #698 中主动 @ 几个典型边缘用户收集实测。

---

## 8. 待处理积压

### 仍处 OPEN 状态的重要条目

| 编号 | 类型 | 标题 | 创建日期 | 风险点 |
|---|---|---|---|---|
| [#698](https://github.com/qhkm/zeptoclaw/issues/698) | Feature | sanitize tool JSON schemas + coerce model tool-args | 2026-09-17 | 已有 PR #701 但未合入，**建议维护者尽快 Review** |
| [#701](https://github.com/qhkm/zeptoclaw/pull/701) | PR | feat(providers): sanitize tool schemas | 2026-09-17 | 等待首次 Review；与 #698 一对一映射 |
| [#683](https://github.com/qhkm/zeptoclaw/pull/683) | Dependabot PR | bump Swatinem/rust-cache 2.9.1 → 2.9.2 | 2026-09-15 | 已在队列 3 天，**Rustls 修复 PR #692 已合入**，预计可顺势合入 |

### 维护者建议
- 🔴 **#701 Review 优先级最高**：这是当前唯一未关闭的功能性 PR，且影响 ZeptoClaw 在边缘场景的核心竞争力。
- 🟡 **#683 可批量合入**：在 Rustls 修复后，被 Security audit 挡住的 Dependabot PR 链路已通畅，建议一次过审。
- 🟢 **整体积压健康**：当前 OPEN 队列短（3 条），无 > 30 天的僵尸 Issue，社区响应链路顺畅。

---

## 项目健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐☆☆ | 中等，有明确动作但缺乏社区互动 |
| **安全响应** | ⭐⭐⭐⭐⭐ | Rustls 漏洞 24h 内闭环，表现优秀 |
| **路线清晰度** | ⭐⭐⭐⭐☆ | 核心功能（#698/#701）方向明确 |
| **社区参与** | ⭐⭐☆☆☆ | 0 评论 / 0 👍，缺乏外部反馈 |
| **积压健康** | ⭐⭐⭐⭐⭐ | OPEN 队列短，无僵尸 Issue |

**总评**：ZeptoClaw 处于**内部整顿期**，维护者主导特征明显。建议在功能 PR #701 上加力推进，并主动收集边缘场景用户反馈，以激活社区参与度。

---

*报告生成时间：2026-09-18 | 数据源：GitHub REST API*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-18

> 数据范围：过去 24 小时 GitHub 活动 | 数据源：github.com/zeroclaw-labs/zeroclaw

---

## 一、今日速览

ZeroClaw 仓库今日保持高强度协作节奏，**24 小时内共 50 条 Issues 与 50 条 PRs 更新**，Issues 新开/活跃 41 条、已关闭 9 条，PRs 待合并 45 条、已合并/关闭 5 条，**无新版本发布**。讨论重心集中在三大方向：**多模态输入安全加固（图像标记绕过内容验证的多个高危问题）、RFC 治理流程简化、以及多通道（Telegram / Matrix / WhatsApp）的稳定性和测试治理**。从数据看，项目处于密集重构 + 安全修补并行的阶段，Issue 中 p1（最高优先级）比例显著上升，社区活跃度较高但维护者负担也在累积。

---

## 二、版本发布

**无新版本发布**。过去 24 小时未检测到新的 release tag。多个大型 PR（`size:XL`，如 #9535、#10214、#10407、#10391、#9819、#10197、#8966、#10621、#10351、#9724、#10407）仍处于待合并状态，建议下一版本（如有 0.9.x 计划）重点合并 runtime/session/logging/multimodal 安全相关变更。

---

## 三、项目进展

### 今日已关闭/合并的重要 Issue 与 PR

| 编号 | 类型 | 标题 | 意义 |
|---|---|---|---|
| [#9882](https://github.com/zeroclaw-labs/zeroclaw/issues/9882) | Bug (Security) | Image markers bypass content validation on the run_model_query direct-dispatch seam | 关闭一个高危多模态注入路径（resolved-model 旁路） |
| [#10292](https://github.com/zeroclaw-labs/zeroclaw/issues/10292) | Bug | ACP session tools cannot list or inspect Code sessions | ACP 会话可见性缺陷修复 |
| [#5269](https://github.com/zeroclaw-labs/zeroclaw/issues/5269) | Bug + Docs | validate and document the nix run installation path | 完善 `cargo binstall zeroclaw` 与 nix run 安装文档 |
| [#10883](https://github.com/zeroclaw-labs/zeroclaw/issues/10883) | Bug (Dup) | Telegram media-group listener tests time out | 标记为 #10875 的重复 |
| [#9370](https://github.com/zeroclaw-labs/zeroclaw/issues/9370) | Test | ACP near-live JSON-RPC transport smoke for deliver_file | ACP 传输层冒烟测试落地 |
| [#10618](https://github.com/zeroclaw-labs/zeroclaw/pull/10618) | CI/工具 | surface approval carry-forward candidates | 维护者工具改进（已关闭，可能合并到其他分支） |

### 实质性进展评估

- **多模态安全补强**：#9882 关闭标志着一处直接派发的图像标记绕过漏洞的修复；同期 PR [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) 增加了**像素级图像校验**（`validate_image_content`），可从根本上识别伪造图像头/截断图像，是重要的纵深防御举措。
- **ACP 会话与传输可靠性**：#10292 与 #9370 共同推动 ACP 在 Code 会话列表与 JSON-RPC 传输层的可观测性。
- **安装路径 UX**：#5269 关闭后，`cargo binstall` 与 `nix run` 的安装路径得到正式文档化。
- **治理工具**：#10618 改进了维护者审批的 carry-forward 视图。

整体来看，**今日推进幅度中等**——5 条关闭项中 4 条是 Issue 修复，1 条是 PR，但仍有大量 XL 级核心 PR 待合并，next-milestone 的"质变"尚未发生。

---

## 四、社区热点

### 讨论最活跃的 Issue（按评论数）

| 排名 | 编号 | 标题 | 评论数 |
|---|---|---|---|
| 1 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 15 |
| 2 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting by removing mandatory discussion windows | 12 |
| 3 | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | 11 |
| 4 | [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | Feature: install skills from .well-known agent-skills discovery indexes | 7 |
| 5 | [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | Tracker: triage and remove bitmaps unmaintained advisory waiver (RUSTSEC-2026-0247) | 5 |

### 趋势诉求分析

1. **RFC 治理现代化（#8692、#10549、#10526、#10855）**：社区对当前 RFC 流程的"讨论窗口强制等待"感到低效，希望改为基于 REVISE 即停快照的新模型，并要求**维护者决策队列的透明化**。这是 governance 层面持续发酵的话题，相关 PR [#10855](https://github.com/zeroclaw-labs/zeroclaw/pull/10855) 已开始落地文档。
2. **可重放/可审计的会话历史（#10526）**：要求将 `TurnEvent`、tool receipts、cost records、delegate result 等分散状态统一为 **append-only event log**，并支持确定性 state replay——这是为生产环境追溯/调试做准备的核心架构变更。
3. **Agent Skills 标准化发现协议（#4853）**：紧跟 Agent Skills Group 的 `.well-known` URI 标准（agentskills/agentskills#254），希望 Cloudflare、Vercel 等生态集成。
4. **供应链安全（#9899）**：处理 `bitmaps 3.2.1` 触发的 `RUSTSEC-2026-0247`，需要将 `imbl`/Matrix SDK dev-deps 中的传递依赖剔除或替换。

---

## 五、Bug 与稳定性

### 高危 Bug（p1 / S1-S2 / HIGH risk）

| 编号 | 标题 | 严重度 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| [#9899](https://github.com/zeroclaw-labs/zeroclaw/issues/9899) | triage and remove bitmaps unmaintained advisory (RUSTSEC-2026-0247) | p1, security, HIGH | OPEN | 暂无明确 fix PR |
| [#10912](https://github.com/zeroclaw-labs/zeroclaw/issues/10912) | Streaming text guard suppresses whole replies when prose quotes tool-result-shaped object | p1, HIGH | OPEN, in-progress | 需关联 sanitize_image_markers 修复链 |
| [#10908](https://github.com/zeroclaw-labs/zeroclaw/issues/10908) | Image markers in tool-result text promoted to attachments without provenance | p1, security, HIGH | **BLOCKED** | 等 #9819 合并 |
| [#10854](https://github.com/zeroclaw-labs/zeroclaw/issues/10854) | Literal image marker in tool output promoted into malformed provider image | p1, HIGH | OPEN, in-progress | 部分由 [#9819](https://github.com/zeroclaw-labs/zeroclaw/pull/9819) 覆盖 |
| [#10408](https://github.com/zeroclaw-labs/zeroclaw/issues/10408) | Second message during active turn starts parallel run → duplicate reply | p1, HIGH | OPEN, in-progress | 暂无 |
| [#10780](https://github.com/zeroclaw-labs/zeroclaw/issues/10780) | Restore proactive token-budget context compaction (context_compression removed) | p1, HIGH | OPEN, in-progress, parking-lot | 关联 [#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535) |
| [#10875](https://github.com/zeroclaw-labs/zeroclaw/issues/10875) | Flaky: Telegram media-group tests fail Parallel Runtime Test repeat | p1, S1 workflow-blocked | OPEN, in-progress | 暂无 |

### 中危 Bug（p2）

- [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) bound service launcher stdout/stderr 日志（in-progress）
- [#10805](https://github.com/zeroclaw-labs/zeroclaw/issues/10805) Windows nextest 上 `control_plane` liveness 测试竞态
- [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) Non-vision capability gate 在含 image marker 的 prose 上误拒 turn
- [#10924](https://github.com/zeroclaw-labs/zeroclaw/issues/10924) Runtime-command replies 进入对话式 voice routing
- [#10922](https://github.com/zeroclaw-labs/zeroclaw/issues/10922) WhatsApp Web 排队 TTS 时忽略 `suppress_voice`
- [#10926](https://github.com/zeroclaw-labs/zeroclaw/issues/10926) Matrix `send_via` 将 peer user 当作 room destination

### 关键观察

- **多模态/图像标记类问题成簇出现**：#10908、#10854、#10912、#9882（已关闭）、#10887 都与 `parse_image_markers` / `sanitize_image_markers` 路径相关，#9819 的像素级校验落地后可一次性覆盖大半。
- **Windows 兼容性浮出水面**：#10805（nextest 竞态）+ #10811（PowerShell 分析缓存）+ #10928（已识别的进程退出判断）表明 Windows 是当前需要补强的薄弱平台。
- **会话并发与"重复回复"**（#10408）是用户可见性最强的体验问题，建议优先修复。

---

## 六、功能请求与路线图信号

### 明确的新功能请求（今日创建或活跃）

| 编号 | 标题 | 关联 PR / 路线图信号 |
|---|---|---|
| [#10925](https://github.com/zeroclaw-labs/zeroclaw/issues/10925) | Support input-driven mirror voice replies on Matrix | Matrix 通道继 #10489 之后的扩展，**breaking-change** 标签表明 API 演进 |
| [#10932](https://github.com/zeroclaw-labs/zeroclaw/issues/10932) | Surface the voice-note transcript to the user (STT echo) | 增强语音输入 UX，建议作为可配置 per-channel 选项 |
| [#10930](https://github.com/zeroclaw-labs/zeroclaw/issues/10930) | RFC: One durable primitive for questions an agent asks a human | 提议复用 SOP 批准门作为统一 durable gate；与 #10526 append-only 事件流方向一致 |
| [#10929](https://github.com/zeroclaw-labs/zeroclaw/issues/10929) | RFC: Delivery receipts for outbound messages | 在 `SendMessage` 上添加 id，建立投递追踪；与 #10930 同属"agent ↔ human 通信原语"主题 |
| [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | install skills from .well-known agent-skills discovery indexes | 跟进外部标准（agentskills/agentskills#254），可能进入 0.9 路线图 |
| [#9511](https://github.com/zeroclaw-labs/zeroclaw/issues/9511) | Surface diff-aware Semgrep findings as advisory PR comment | 仅 SARIF 不直观，需要 PR comment；维护者视图增量 |
| [#8766](https://github.com/zeroclaw-labs/zeroclaw/issues/8766) | Add user-behavior E2E coverage for first-run setup | quickstart/zerocode 入门流程的 E2E 覆盖 |
| [#9649](https://github.com/zeroclaw-labs/zeroclaw/issues/9649) | Flip parity row 1 to tested sealed state after registry seal | 跟进 PR 9319 ScopedToolRegistry seal 之后的 parity 文档对齐 |

### 可能进入下个版本的候选

- **Context 预算按模型窗口比例动态化**：[#9535](https://github.com/zeroclaw-labs/zeroclaw/pull/9535)（XL）正在解决 `context_compact_ratio` 取代硬编码 32K，与 #10780 互补。
- **Token usage 估算回退**：[#9453](https://github.com/zeroclaw-labs/zeroclaw/pull/9453)（M）修复 OpenAI-compatible provider 不返回 token 计数时上下文计为空的问题，UX 改进明确。
- **日志分片与多

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*