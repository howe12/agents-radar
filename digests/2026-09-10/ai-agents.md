# OpenClaw 生态日报 2026-09-10

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-10 02:36 UTC

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

# OpenClaw 项目日报 · 2026-09-10

## 1. 今日速览

OpenClaw 仓库今日呈现出"高吞吐、强清积"的运营状态。24 小时内共 500 条 Issues 更新（307 活跃/193 已关闭）与 500 条 PR 更新（250 待合并/250 已合闭），整体关闭率（38.6% Issue、50% PR）显著高于一般开源项目均值，提示维护团队正在集中处理 P0/P1 级别的回归与升级阻塞类问题。无新版本发布，但已合并/关闭的 PR 中至少包含 6 项修复类变更，覆盖 Windows 网关启动失败、Telegram 内部上下文泄露、Feishu 插件工具被静默丢弃、npm 更新阶段卡死、Codex 最终回复丢失（beta blocker）、Codex 历史回放等高优先级问题。项目健康度评估：**中等偏上**，主线稳健推进，但 P1 级历史积压（进程泄漏、内存索引无法重建、Gateway 控制请求长时间挂起）仍未根治。

---

## 2. 版本发布

**今日无新版本发布。**

最近的关键版本节点为 v2026.9.1 与 v2026.9.2/9.3（均见 Issue #137813、#141617、#142585、#143278），多条已关闭 Issue 显示该系列引入了若干回归与升级兼容性问题。

---

## 3. 项目进展

今日合闭的 PR 与关闭的 Issue 集中体现了三大推进方向：

### 3.1 Gateway 启动与稳定性
- **PR #143494**（已就绪）：将标题/锚点投影从全量转录读取器解耦，降低 Gateway 控制面 IO 成本。
- **PR #143496**（已就绪）：延迟 worker workspace 执行模块的导入，减少 admission 前的依赖链加载。
- **Issue #137813 [已关闭]**：Windows 网关在 2026.9.1 升级后因 `--task-supervisor` 子进程静默退出而无法启动 — 该 P0 释放阻塞问题已修复。
- **Issue #141617 [已关闭]**：2026.9.2 npm 更新阶段卡在 `requested/running`，已提供支持的修复路径。

### 3.2 Codex / OAuth 路径修复
- **Issue #116851 [已关闭]**（P1 beta-blocker）：Codex canonical SQLite 会话最终回复丢失 — 关键 beta 阻塞已解决。
- **Issue #140971 [已关闭]**：Feishu 插件工具在 2026.8.1 被 `feishu_chat` 主机限制全部静默丢弃 — 已修复。
- **Issue #96732 [已关闭]**：`reasoning_content` 泄露到 moonshot/kimi-k2.6 的聊天输出 — 已修复。
- **PR #143506**（已就绪）：修复 Codex 在本地 `message` 工具成功投递后仍重放 Telegram 历史的问题。

### 3.3 用户体验与文档
- **PR #143625**（已就绪）：会话历史加载期间允许用户在 Web UI 中先起草消息。
- **PR #143343**（已就绪）：防止加载更早消息时聊天视图跳动。
- **PR #143541**（已就绪）：悬停/聚焦时显示聊天小部件操作。
- **PR #143583**：让 Telegram 消息取消原因对 Agent 可见（区分 hook 抑制 vs 中断）。
- **PR #143626 / #143627**：保留已复制插件上下文引擎与 TTS summary 模型的所有权，避免清理后回退失败。

整体而言，项目在 Gateway 控制面性能、Codex/OAuth 兼容性、Windows 安装可靠性三条主线同步推进，但尚未形成可发布的稳定版本。

---

## 4. 社区热点

### 4.1 评论数最高的 Issue（Top 5）

| 排名 | Issue | 评论数 | 状态 | 主题 |
|---|---|---|---|---|
| 1 | [#135111](https://github.com/openclaw/openclaw/issues/135111) | 26 | 已关闭 | v2026.8.1 间歇性 "Provider completed tool call with malformed JSON arguments" |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | 仍开放 | hook/tool 子进程泄漏为僵尸 |
| 3 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 15 | 仍开放 | 同步持久化阻塞 Gateway 事件循环（钻石龙虾级） |
| 4 | [#137927](https://github.com/openclaw/openclaw/issues/137927) | 14 | 已关闭 | Telegram 可见消息泄露内部 context block |
| 5 | [#53628](https://github.com/openclaw/openclaw/issues/53628) | 14 | 仍开放 | 安装 skill 时未处理 `${XDG_CONFIG_HOME}` |

### 4.2 反应数（👍）最高的 Issue
- [#95610](https://github.com/openclaw/openclaw/issues/95610)（👍2）：OpenAI 模型 prompt-cache 前缀抖动导致缓存复用失效 — 反映成本与延迟痛点。
- [#87441](https://github.com/openclaw/openclaw/issues/87441)（👍2）：诊断/内存阈值参数未接入配置 — 运维可观测性诉求。
- [#6757](https://github.com/openclaw/openclaw/issues/6757)（👍2）：Agent 自主触发上下文压缩 — 长期呼声。
- [#88757](https://github.com/openclaw/openclaw/issues/88757)（👍3）：主动消息在会话上下文中不可见导致会话失同步 — 跨渠道一致性核心痛点。

### 4.3 诉求分析
社区讨论集中在三类问题：
1. **运行时正确性**：会话状态丢失、回复丢失、附件/STT 跳过（[#139274](https://github.com/openclaw/openclaw/issues/139274)、[#132762](https://github.com/openclaw/openclaw/issues/132762)）；
2. **生产稳定性**：进程泄漏、Gateway 挂起、僵尸进程累积（[#97616](https://github.com/openclaw/openclaw/issues/97616)、[#138042](https://github.com/openclaw/openclaw/issues/138042)）；
3. **升级兼容性**：2026.7→2026.9 跨版本迁移中的 Doctor 拒绝（[#142585](https://github.com/openclaw/openclaw/issues/142585)）、更新阶段卡死（[#141617](https://github.com/openclaw/openclaw/issues/141617)）。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P0（释放阻塞）
| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#137813](https://github.com/openclaw/openclaw/issues/137813) | Windows 网关 2026.9.1 升级后无法启动 | ✅ 已关闭 | — |
| [#141617](https://github.com/openclaw/openclaw/issues/141617) | 2026.9.2 npm 更新卡在 requested/running | ✅ 已关闭 | — |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 2026.9.3 Doctor 拒绝合法 legacy workspace | 🟡 仍开放 | 无关联 fix PR |
| [#115642](https://github.com/openclaw/openclaw/issues/115642) | 订阅鉴权 billing cooldown 持续 5h 无法手动重置 | 🟡 仍开放 | 无关联 fix PR |

### 🟠 P1（高优先级回归与稳定性）
| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#135111](https://github.com/openclaw/openclaw/issues/135111) | v2026.8.1 间歇性 JSON 参数错误 | ✅ 已关闭 | — |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 子进程泄漏累积僵尸 | 🟡 仍开放（自 6/29）| 无 |
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步持久化阻塞事件循环 | 🟡 仍开放（部分修复已落地）| #140231/#138984（已合并） |
| [#132762](https://github.com/openclaw/openclaw/issues/132762) | overflow retry 以 toolResult 结尾但无最终交付 | 🟡 仍开放 | 无 |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core 重索引锁导致 19GB 孤立临时库 | 🟡 仍开放 | 无 |
| [#138042](https://github.com/openclaw/openclaw/issues/138042) | Gateway 控制请求挂起数分钟 | 🟡 仍开放 | 无 |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex `sessions.compact` 触发 active-writer 冲突 | 🟡 仍开放 | 无 |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 唤醒后 UI/WebSocket 重连失败 30-60s+ | 🟡 仍开放 | 无 |
| [#116851](https://github.com/openclaw/openclaw/issues/116851) | Codex SQLite 会话最终回复丢失 | ✅ 已关闭 | — |
| [#140971](https://github.com/openclaw/openclaw/issues/140971) | Feishu 插件工具被全部丢弃 | ✅ 已关闭 | — |
| [#139274](https://github.com/openclaw/openclaw/issues/139274) | Native `/codex bind` 丢语音附件/跳过 STT | 🟡 仍开放 | 无 |
| [#115367](https://github.com/openclaw/openclaw/issues/115367) | Provider 读门要求 `origin:bundled`，外部 chat 插件被锁 | 🟡 仍开放 | 无 |
| [#135838](https://github.com/openclaw/openclaw/pull/135838) | worker 在 turn authority 关闭后仍继续 provisioning | 🟡 PR 待合并 | PR 自身 |

### 🟡 P2（行为/回归类）
[#139714](https://github.com/openclaw/openclaw/issues/139714)（post-core update 状态卡死）、[#41201](https://github.com/openclaw/openclaw/issues/41201)（Control UI 头像破损）、[#43367](https://github.com/openclaw/openclaw/issues/43367)（多 Agent 并发不稳定）、[#126906](https://github.com/openclaw/openclaw/issues/126906)（deny write tool 静默关闭 memory 持久化）等仍开放，多个具备 `clawsweeper:no-new-fix-pr` 标签，提示维护者尚未找到修复路径或缺少维护者关注。

---

## 6. 功能请求与路线图信号

### 6.1 高呼声功能请求
| Issue | 标题 | 反应 | 关联 PR |
|---|---|---|---|
| [#88757](https://github.com/openclaw/openclaw/issues/88757) | 主动消息在会话上下文中可见 | 👍3 | 无 |
| [#95610](https://github.com/openclaw/openclaw/issues/95610) | 修复 OpenAI prompt-cache 前缀 | 👍2 | 无 |
| [#6757](https://github.com/openclaw/openclaw/issues/6757) | Agent 自主触发上下文压缩 | 👍2 | 无 |
| [#87441](https://github.com/openclaw/openclaw/issues/87441) | diagnostics/memory 阈值参数化 | 👍2 | 无 |
| [#6599](https://github.com/openclaw/openclaw/issues/6599) | `/models test-fallback` 命令 | 👍1 | 无 |
| [#87584](https://github.com/openclaw/openclaw/issues/87584) | 群组房间事件可配置转向 | 👍2 | 无 |

### 6.2 可能纳入下个版本的 PR（已就绪或接近）
- **PR #132103**（XL, 已就绪）：Sandbox 发现环境 skill 与已授权 workspace MCP — 扩展原生 agent runtime 能力边界。
- **PR #132453 / #132454**（XL/L, 已就绪）：暴露每个 Codex 登录的使用配额 — 与 [#95610](https://github.com/openclaw/openclaw/issues/95610) 互补，回应用户成本管理诉求。
- **PR #87764**（L, 待证明）：支持 owner-scoped ClawHub skill 引用 — 强化插件生态可发现性。
- **PR #142100**（XL, 待证明）：跨 reload/compact/fallback 保持精确模型选择 — 直接缓解 [#43367](https://github.com/openclaw/openclaw/issues/43367) 等多 Agent 场景。
- **PR #67421**（L, 待证明）：per-agent web_fetch SSRF overrides — 满足企业部署细分策略需求。

### 6.3 长期讨论方向
- **Android 客户端**：[#46058](https://github.com/openclaw/openclaw/issues/46058) 提出独立 chat-first 移动端，主线尚未表态。
- **macOS Talk Mode**：[#70266](https://github.com/openclaw/openclaw/issues/70266) 建议 overlay 使用已配置的助手头像。

---

## 7. 用户反馈摘要

### 7.1 真实痛点
1. **生产部署升级焦虑**：[#123799](https://github.com/openclaw/openclaw/issues/123799) 用户明确表示"我们是受 #123706 关闭影响的在产部署，需要 2026.5.12 上 Codex compact 404 的安全升级/回迁指导" — 维护者关闭关联 Issue 时未提供迁移路径，导致生产用户被"挂着"。
2. **可观测性不足**：[#87441](https://github.com/openclaw/openclaw/issues/87441) 指出诊断阈值参数定义了但从未被调用 — 用户感受到"代码写了、配置接不上"的落差。
3. **静默失败**：[#126906](https://github.com/openclaw/openclaw/issues/126906) 反馈 "deny 一个 write tool 静默关闭 memory 持久化，agent 还报告成功" — 用户对"无声失败"特别敏感。
4. **macOS Doctor 误报**：[#60612](https://github.com/openclaw/openclaw/issues/60612) 用户抱怨 NVM node 警告无法解决（因为 OpenClaw 自动重写 launchd plist）。
5. **Telegram 上下文泄露与心跳泄露**：[#137927](https://github.com/openclaw/openclaw/issues/137927) 与 [#143278](https://github.com/openclaw/openclaw/issues/143278) 反映"内部信息混入用户可见消息"已成为 Telegram 渠道的反复痛点。
6. **runtime 开销无 opt-out**：[#141747](https://github.com/openclaw/openclaw/issues/141747) 指出 `<system-reminder>` 每回合注入约 686 token 且无法关闭 — 成本敏感用户希望有开关。

### 7.2 满意信号
- [#143509](https://github.com/openclaw/openclaw/pull/143509) 回移植 Claude CLI 会话连续性探针并

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态横向对比分析
**报告日期：2026-09-10 ｜ 数据范围：当日 24 小时动态**

---

## 1. 生态全景

本生态当日呈现"**头部高负载运维、中部密集修复、长尾停滞/休眠**"的三段式格局：以 OpenClaw、ZeroClaw、CoPaw、Hermes Agent、LobsterAI 为代表的活跃项目合计处理超过 600 条 Issue/PR 更新，集中暴露并修复 2026.8.x 升级回归、MCP 多租户安全、跨通道会话状态一致性、Anthropic 成本计量四大共性痛点；NanoBot、IronClaw、NanoClaw 处于**质量巩固与边缘能力扩展**阶段（macOS 沙箱、IME 兼容、跨仓协议收口）；PicoClaw、NullClaw、TinyAGI、Moltis、ZeptoClaw 等 5 个项目**当日无活动**，其中 PicoClaw 已出现 P0/P1 Bug 因 stale 自动关闭而无人修复的危险信号。整体而言，**个人 AI 助手赛道已从"功能拼装期"进入"协议治理 + 成本/安全合规期"**，未来 1–2 个版本的关键竞争点将集中在 MCP 协议深度、多模型 cache 可控性、以及跨桌面/IM 通道的可观测性。

---

## 2. 各项目活跃度对比

| 项目 | 新开/活跃 Issue | 关闭 Issue | 待合并 PR | 已合并/关闭 PR | 当日 Release | 健康度 |
|---|---:|---:|---:|---:|:---:|:---:|
| **OpenClaw** | 307 | 193 | 250 | 250 | ❌ | ⭐⭐⭐⭐ 中等偏上 |
| **ZeroClaw** | 29 | 3 | 49 | 1 | ❌ | ⭐⭐⭐ 活跃但 PR 积压 |
| **CoPaw** | 11 | 14 | 25 | 10 | ❌ | ⭐⭐⭐⭐ 良好 |
| **Hermes Agent** | 38 | 12 | 40 | 10 | ❌ | ⭐⭐⭐⭐ 中等偏上 |
| **LobsterAI** | 16 | 4 | 2 | 11 | ❌ | ⭐⭐⭐ 中等（安全风险高）|
| **NanoBot** | 4 | — | 11 | 9 | ❌ | ⭐⭐⭐⭐ 健康（代码热/社区冷）|
| **IronClaw** | 1 | 0 | 4 | 0 | ❌ | ⭐⭐⭐ 稳定但审阅迟缓 |
| **NanoClaw** | 1 | 0 | 4 | 3 | ❌ | ⭐⭐⭐⭐ 良好 |
| **PicoClaw** | 0 | 3 (stale) | 4 | 1 | ❌ | ⚠️ 需关注 |
| **NullClaw / TinyAGI / Moltis / ZeptoClaw** | 0 | 0 | 0 | 0 | ❌ | — 休眠 |

**关键观察**：当日 **Release 数为 0**，但 PR 合并总量达 295 条，呈现"**合并密集、版本未发**"的典型清积期特征——多个项目（OpenClaw、ZeroClaw、LobsterAI、CoPaw）均在为下一次发布做集中收口。

---

## 3. OpenClaw 在生态中的定位

### 规模与吞吐量
OpenClaw 当日 500 条 Issue + 500 条 PR 更新，体量约为第二梯队头部（ZeroClaw/Hermes Agent）的 **10 倍**，稳居该生态的**事实标准 / 参照实现**地位。其关闭率（Issue 38.6%、PR 50%）显著高于一般开源项目均值，维护团队具备"**P0/P1 集中清积**"的工程化能力。

### 相比同类的优势
1. **通道覆盖最广**：Telegram、Feishu、Discord、QQ、BlueBubbles、Codex、WhatsApp 等均已具备生产级支持，跨通道会话状态同步（#88757 主动消息可见性）是其他项目尚未系统解决的问题。
2. **OAuth/Codex 路径完整**：独有的 Codex canonical SQLite 会话、Compaction 机制、history replay 修复（#116851、#127148、#143506）形成完整链路。
3. **企业级可观测性信号**：#87441（诊断阈值参数化）、#95610（OpenAI cache 前缀抖动）、#88757（主动消息上下文可见）等已被列入社区高反应数诉求，提示**自托管运维方对 OpenClaw 的诉求最接近"准商业 SRE 工具"**。

### 技术路线差异
- **vs. NanoBot**：NanoBot 走"前端一致性 + 单点精修"路线（chengyongru 单日 6 个 WebUI PR），OpenClaw 走"**控制面 IO + 多通道稳定性**"路线；
- **vs. ZeroClaw**：ZeroClaw 强调"**协议/状态 first-class**"（多个 RFC 推动 wire protocol、append-only event log、WASM plugin），OpenClaw 仍以**实用主义修补**为主；
- **vs. LobsterAI**：LobsterAI 是 OpenClaw 的**下游消费方/适配层**，今日 9 个 PR 全部围绕 OpenClaw v2026.8.1 升级回归（#2632–#2640），呈现明显依赖关系。

### 社区规模对比
OpenClaw 在 Issues 评论数（Top 1 高达 26 条）和 👍 反应数（#88757 达 3 赞）两个维度上**全面领先**其他项目，反映其用户基数与"在产部署"密度最高。

---

## 4. 共同关注的技术方向

跨项目数据表明，**以下 7 个技术方向在 2026-09-10 当日出现多项目共性聚焦**：

| 方向 | 涉及项目 | 典型 Issue/PR | 共同诉求 |
|---|---|---|---|
| **① MCP 协议治理** | NanoBot、IronClaw、OpenClaw、Hermes Agent | NanoBot #5661/#5662、IronClaw #8090/#8084/SEP-414、Hermes #106810/SEP-2243、OpenClaw #115367 | 多租户目录隔离、caller attribution、缓存键与重试语义标准化 |
| **② Sandbox/安全加固** | NanoBot、OpenClaw、ZeroClaw、LobsterAI | NanoBot #5536 (fail-closed)、OpenClaw #115642、ZeroClaw RFC #6996、LobsterAI #2176/#2181/#2286-88 | 沙箱规范模型（filesystem 粒度）、受限 shell 默认拒绝、SSRF/任意文件读取防护 |
| **③ 跨通道会话状态** | OpenClaw、Hermes Agent、NanoBot、LobsterAI、CoPaw | OpenClaw #88757/#137927、Hermes #106963/#106935、CoPaw #7011/#7237 | 主动消息上下文可见、in-flight run 终止、跨 Tab/会话身份隔离 |
| **④ 成本/cache 可控性** | OpenClaw、ZeroClaw、Hermes Agent | OpenClaw #95610、ZeroClaw #9816/#10662/#10663/#10699、Hermes #106319 | Anthropic cache TTL 可配、cost ledger 准确计费、cache breakpoint 优化 |
| **⑤ 桌面/IM 客户端稳定** | OpenClaw、LobsterAI、CoPaw、NanoBot、Hermes Agent | OpenClaw #137813/#140010、LobsterAI #2632-34、CoPaw #7363、NanoBot 6 PR 密集合并 | Windows 启动失败、WebSocket 重连、QQ/Discord 升级兼容、IME 回归 |
| **⑥ Provider 协议对齐** | NanoBot、ZeroClaw、IronClaw、OpenClaw | NanoBot #5662 (x-opencode-session)、ZeroClaw #10687/#10686、OpenClaw #135111 | 上游 breaking change 响应、OpenAI/Anthropic 兼容端点修复 |
| **⑦ 长时记忆 / 跨 session 持久化** | NanoBot、OpenClaw、ZeroClaw、LobsterAI | NanoBot #5721 (MemCode)、OpenClaw #6757/#88757、ZeroClaw #10721、LobsterAI #2046 | 自主压缩、跨部署共享记忆、短期/长期分级 |

> **数据洞察**：①、②、③ 三个方向在当日涉及 **5 个及以上项目**同时发力，是生态级共识；⑤ 反映"**桌面端从可选项变为生产阻塞**"的拐点信号。

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全通道 + Codex/OAuth + 插件生态 | 中大型自托管团队 / SaaS 集成方 | Gateway 控制面 + 多 channel 适配 + ClawHub 插件市场 |
| **ZeroClaw** | 协议/状态 first-class、RFC 驱动治理 | 架构师 / 平台型开发者 | Rust 核心 + WASM 插件运行时草案 + append-only event log |
| **CoPaw** | AgentScope 多模态运行时 + 移动/简洁模式 | 终端用户 / 移动场景 | Tauri 桌面 + Qwen 模型默认 + 应用市场分发 |
| **Hermes Agent** | 跨平台桌面 + 通道一致性 + Skills Hub | 研究型 / 桌面重度用户 | Electron 桌面 + 多 backend profile + MCP/A2A 插件 |
| **LobsterAI** | OpenClaw 下游适配 + 网易模型集成 | 中文办公用户 / 网易系产品 | OpenClaw Gateway 之上的桌面封装 + i18n 增强 |
| **NanoBot** | 前端一致性 + 单点精修 | 个人开发者 / CLI 重度用户 | 单仓轻量 + WebUI/TUI 双前端 + 6 维护者高频迭代 |
| **IronClaw** | MCP 多租户 + 跨渠道聊天 | 企业多用户场景 | NEAR AI 生态 + 托管 MCP 目录 + WebChat v2 |
| **NanoClaw** | 跨仓协议收口 + 边界防御 | 自动化工作流用户 | Agent-runner + ClawHub 技能市场 + 错误码结构化 |
| **PicoClaw** | 轻量通道集成（IRC/QQ/DeltaChat） | 极简部署 / 资源受限设备 | Sipeed RISC-V 方向，**当前维护放缓** |

> **关键差异点**：ZeroClaw 押注"**协议即护城河**"（RFC 数量最多），OpenClaw 押注"**通道即护城河**"，NanoBot 押注"**开发者体验即护城河**"，三者代表了三种截然不同的生态位策略。

---

## 6. 社区热度与成熟度分层

### 第一梯队：快速迭代期（活跃 + 大量合并）
- **OpenClaw、ZeroClaw、CoPaw、Hermes Agent、LobsterAI**
- 共同特征：日均 Issue+PR 处理量 > 30，关闭率 30–50%，但普遍存在"**PR 积压 > 维护者审阅能力**"问题（ZeroClaw 50 PR 仅合 1、OpenClaw 250 待合并）。
- 风险信号：Hermes Agent #66616（187 评论，自动化 2 个月未恢复）、OpenClaw 多条 P1 开放超 60 天。

### 第二梯队：质量巩固期（高频精修 + 社区冷）
- **NanoBot、IronClaw、NanoClaw**
- 共同特征：核心维护者驱动，PR 合并率高（NanoBot 9/20 = 45%、NanoClaw 3/7 = 43%），社区互动量低（多数 Issue 0 评论）。
- 风险信号：NanoBot #5536（p1 安全修复含 conflict 阻塞）、#4819/#4820（66 天未合）。

### 第三梯队：维护停滞/休眠
- **PicoClaw（需关注）、NullClaw、TinyAGI、Moltis、ZeptoClaw**
- 共同特征：无新提交或仅有 stale 自动关闭。PicoClaw 尤为危险——**P0/P1 Bug (#3269 MCP 挂死、#3265 deltachat 启动错误) 因 stale 关闭但未实际修复**。
- 决策建议：若 PicoClaw 维护者无法响应，应**显式标注 "将在 vX.Y 修复"** 或主动 cherry-pick patch，避免社区信任流失。

---

## 7. 值得关注的趋势信号

### 趋势 1：**MCP 协议从"集成点"演变为"治理对象"**
- 当日 4 个项目（NanoBot、IronClaw、Hermes Agent、OpenClaw）同时在 MCP 多租户隔离、caller attribution（SEP-414）、路由头（SEP-2243）方向发力。
- **对开发者的参考价值**：MCP 即将从"工具调用协议"升级为"**多租户安全 + 成本归属 + 缓存策略**"三位一体的治理层，开发者应将其视为生产级 API 网关对待。

### 趋势 2：**Anthropic Prompt Cache 成为成本优化的主战场**
- ZeroClaw #10662/#10663 暴露 OAuth 路径下 system-prefix cache marker 不足、TTL 硬编码 5 分钟；
- OpenClaw #95610 反映 OpenAI prompt-cache 前缀抖动；
- Hermes Agent #106319 推 free-only OpenRouter profile。
- **对开发者的参考价值**：成本可控性正在成为个人 AI 助手"**与商业 SaaS 同台竞争**"的关键能力，建议在架构早期就纳入 `cache_aware_router` 抽象。

### 趋势 3：**会话生命周期 vs. in-flight 执行的张力成为系统性 Bug 来源**
- OpenClaw #119720/#138042、Hermes Agent #100401/#106963/#106935 多个不

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报

**报告日期**：2026-09-10
**项目地址**：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日继续保持高强度的代码迭代节奏，24 小时内共推动 **20 个 PR 更新**（其中 9 个已合并/关闭）和 **4 个 Issue 更新**，整体活跃度处于高位。当前没有新版本发布，提交主要集中在 WebUI 体验打磨、Provider 集成扩展、安全沙箱加固三条主线。值得关注的是单个贡献者 `chengyongru` 单日涉及 9 个 PR（含 6 个已合并的 WebUI/TUI 改进），显示核心维护者高度聚焦前端一致性问题的连续清理工作流。Issue 侧互动较少（多数 0 评论），但出现 1 条来自外部 SaaS（MemCode）的合作提案，提示项目生态正在向外延伸。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时内的代码改动将随下一次常规 release 集成。

---

## 3. 项目进展

今日共有 **9 个 PR 已合并/关闭**，项目在多个方向向前实质性迈进：

### 🚀 新功能落地
- **[#5628] feat(exec): add a macOS Seatbelt sandbox backend** — 由 `LuckTerence` 提交，新增 macOS 平台的可选 sandbox 后端（基于系统 `/usr/bin/sandbox-exec`，无新增依赖），保留工作区读写权限与显式附加根目录能力。这标志着 ExecTool 的安全模型正式覆盖 macOS 平台，与现有 Linux 沙箱形成对称。
  👉 [PR #5628](https://github.com/HKUDS/nanobot/pull/5628)

- **[#5705] feat(tui): add /usage context and token charts** — `chengyongru` 为 Agent TUI 添加本地 `/usage` 面板，复用 WebUI 已有的上下文计量与最近模型轮次 usage 数据，对齐 TUI 与 WebUI 的可观测性能力。
  👉 [PR #5705](https://github.com/HKUDS/nanobot/pull/5705)

- **[#5662] feat(providers): send x-opencode-session header for OpenCode session** — `GUTYL` 提交的 PR 已合入 `OpenAICompatProvider`，自动发送 `x-opencode-session` 头以维持 OpenCode Zen/Go 的 prompt-cache 优化。这是针对上游 OpenCode **2026-09-06** 起强制要求该头部的紧急修复，**实际关闭 #5661**。
  👉 [PR #5662](https://github.com/HKUDS/nanobot/pull/5662) ｜ [Issue #5661](https://github.com/HKUDS/nanobot/issues/5661)

### 🎨 WebUI/TUI 体验一致性改进（密集合并 6 条）
由 `chengyongru` 主导的小颗粒修复连续合入：
- **#5717** 修复「从项目菜单新建 topic 时项目选择被清空」的路由竞态。
- **#5703** 限制历史渲染与缓存路径的开销，缓解长对话/工具密集响应的卡顿。
- **#5714** 让编辑差异（diff）独立于 reasoning 折叠，避免折叠后丢失 diff 与其控件。
- **#5713** 为斜体活动标签增加 2px 右内边距，解决末字符裁切。
- **#5712** 修复流式响应中 KaTeX 公式（如 `\prod_{j<i}(...)`）被误判为 HTML 标签而截断。
- **#5716**（`re-bin`）打开技能选择器时刷新推荐列表，避免热加载技能不可见。
👉 上述 PR 均已 CLOSED，集中在 https://github.com/HKUDS/nanobot/pulls?q=is%3Apr+author%3Achengyongru

**整体评估**：今日推进程度显著，**安全（macOS 沙箱）、Provider 兼容性（OpenCode）、可观测性（TUI usage）、前端一致性（WebUI 6 连击）** 四个维度均有实质交付。

---

## 4. 社区热点

按互动量（评论 + 👍）排序：

| 排名 | 编号 | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#5661](https://github.com/HKUDS/nanobot/issues/5661) | send `x-opencode-session` header（已 CLOSED） | 0 | **1** |
| 2 | [#5647](https://github.com/HKUDS/nanobot/issues/5647) | session title not generated when envelope lacks webui flag | **1** | 0 |

**诉求分析**：
- **#5661** 是今日唯一获得 👍 的条目，反映社区对 OpenCode 上游兼容性问题的关切。PR #5662 当日合并，体现维护团队对该上游 breaking change 的响应速度令人满意。
- **#5647** 是仅有的有评论 Issue，核心问题是 PR #5528 的修复在某些 envelope 场景下仍存在 race（frontend envelope 缺 `webui` flag 时不生成 session 标题）。已有两条相关 PR 在跟进：
  - [#5715](https://github.com/HKUDS/nanobot/pull/5715)（`ZIFeIYUuuuuuu`）— 通过 `metadata.webui` 持久化 marker 兼容 envelope 缺 flag 的场景；
  - 主线修复本身在 [#5647](https://github.com/HKUDS/nanobot/issues/5647) 中持续讨论。

整体社区热度偏低（绝大多数条目 0 评论），属于典型的「代码热、社区冷」状态，主要由核心维护者驱动。

---

## 5. Bug 与稳定性

### 🔴 高优先级（安全/数据一致性）
- **[#5536] fix(exec): fail closed when restricted shell lacks a sandbox** — `KDB-Wind` 提交的 **p1 安全修复**，修复 #4072。`ExecTool` 在 `restrict_to_workspace=true` 时仅依赖应用层路径校验，无法覆盖 symlink、shell 展开与命令替换，可能逃逸工作区。修复策略为「fail closed」：受限模式必须确保有可用沙箱，否则拒绝执行。状态：**OPEN，含 conflict 标记，需关注合并阻塞**。
  👉 [PR #5536](https://github.com/HKUDS/nanobot/pull/5536)

- **[#4819] fix(memory): replace WeakValueDictionary with plain dict for consolidation locks** — `axelray-dev` 提交的 **p2 数据一致性修复**。由于 `weakref.WeakValueDictionary` 可能在 GC 后丢失 lock，导致同一 session 的并发 consolidation 拿到不同锁，破坏互斥语义。⚠️ **此 PR 已开放 2 个月以上（自 2026-07-06）**，处于待处理积压状态。
  👉 [PR #4819](https://github.com/HKUDS/nanobot/pull/4819)

### 🟡 中优先级（用户可见 Bug）
- **[#5719] Discord: automatic compaction notices delivered with sendProgress: false** — `jhonnyisaacc` 报告的 Discord 通道 Bug。当 `channels.sendProgress: false` 时，idle 自动 compaction 仍发送两条独立消息（`Compressing context…`、`Context compacted.`）。根本原因为 outbound dispatch loop 仅 gate `ProgressEvent`，未 gate `ContextCompactionEvent`。**修复 PR [#5720](https://github.com/HKUDS/nanobot/pull/5720)（`L4XB`）同日已提交**，状态 OPEN。
  👉 [Issue #5719](https://github.com/HKUDS/nanobot/issues/5719) ｜ [PR #5720](https://github.com/HKUDS/nanobot/pull/5720)

- **[#5647] session title not generated when envelope lacks webui flag** — WebUI session 标题生成回归，`PR #5528` 修复不完整。已有 [PR #5715](https://github.com/HKUDS/nanobot/pull/5715) 提供补丁。
  👉 [Issue #5647](https://github.com/HKUDS/nanobot/issues/5647)

- **[#4820] fix(runtime): reject non-string web fetch URLs** — `axelray-dev` 提交的 p2 修复，`external_lookup_signature()` 对 truthy 非字符串（如数字 123）误生成缓存签名 `web_fetch:123`，干扰后续合法查询。⚠️ **同样开放 2 个月以上**。
  👉 [PR #4820](https://github.com/HKUDS/nanobot/pull/4820)

---

## 6. 功能请求与路线图信号

### 🆕 新提出的需求
- **[#5721] Could nanobot support durable memory across sessions?** — `memcodeoff`（Vivek Gupta, MemCode CEO）提议将 MemCode 作为可选的 hosted/self-managed 持久化记忆后端，与 NanoBot 的 memory 工具链互操作。商业合作信号明显，可能涉及后续合作发布。
  👉 [Issue #5721](https://github.com/HKUDS/nanobot/issues/5721)

### 🛠️ 在途且指向明确的功能 PR（OPEN）
| PR | 功能 | 纳入概率评估 |
|---|---|---|
| [#5704](https://github.com/HKUDS/nanobot/pull/5704) | WebUI 设置面板扩展、自动保存与 Advanced 分组 | ⭐⭐⭐⭐ 高（同一作者 6 个 WebUI PR 已合并，模式成熟） |
| [#5710](https://github.com/HKUDS/nanobot/pull/5710) | WebUI 项目组织重构 + 侧边栏导航简化 | ⭐⭐⭐ 中（已有 conflict，需协调） |
| [#5718](https://github.com/HKUDS/nanobot/pull/5718) | OpenRouter 原生图片生成 API 支持 | ⭐⭐⭐⭐ 高（Provider 扩展主线） |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | Serply（Google SERP API）作为 web_search provider | ⭐⭐⭐ 中（已开 3 周，需评审） |
| [#5711](https://github.com/HKUDS/nanobot/pull/5711) | 连字符斜杠命令改名为 Telegram 安全下划线 | ⭐⭐⭐⭐ 高（明确合规需求） |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | Agent TUI onboarding 统一化 | ⭐⭐⭐ 中（已有 conflict） |

**路线图信号**：WebUI 项目化（projects/automations 作为一等公民）、Provider 多样化（Serply、OpenRouter image）、跨通道命令规范化（连字符→下划线）是三条最清晰的演进轴。

---

## 7. 用户反馈摘要

由于 Issue 评论数量极少，今日可提炼的真实用户声音有限：

- **痛点（#5719）**：Discord 用户希望禁用 progress 消息时获得「真正的静音体验」，但 compaction 提示打断了聊天流程——揭示 `sendProgress` 的语义应覆盖所有非交互性通知，而非仅 `ProgressEvent`。
- **痛点（#5647）**：WebUI 重启后 session 标题丢失，暴露 envelope transient field 与持久化 metadata 的设计脱节。
- **需求（#5721）**：企业级用户希望「跨部署共享记忆」，表明 NanoBot 正被认真考虑纳入更广的多 agent / SaaS 工作流。
- **积极信号（#5661）**：唯一一条 👍 来自对 OpenCode 兼容性修复的认可，反映维护团队对上游 breaking change 的响应速度被视为亮点。

---

## 8. 待处理积压

以下条目已超过 2 周未合并，建议维护者关注：

| 编号 | 类型 | 标题 | 开放时长 | 优先级 | 状态备注 |
|---|---|---|---|---|---|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | PR (bug) | 替换 WeakValueDictionary 修复 consolidation lock 丢失 | **≈ 66 天** | p2 | 数据一致性风险 |
| [#4820](https://github.com/HKUDS/nanobot/pull/4820) | PR (bug) | 拒绝非字符串 web fetch URL | **≈ 66 天** | p2 | 缓存污染风险 |
| [#5437](https://github.com/HKUDS/nanobot/pull/5437) | PR (feature) | Serply web search provider | ≈ 22 天 | p2 | 待评审 |
| [#5498](https://github.com/HKUDS/nanobot/pull/5498) | PR (feature) | Agent TUI onboarding 统一化 | ≈ 18 天 | p2 | conflict 阻塞 |
| [#5536](https://github.com/HKUDS/nanobot/pull/5536) | PR (security) | 受限 shell fail-closed | ≈ 16 天 | **p1** | conflict 阻塞，安全问题不宜久挂 |

**维护者建议**：
1. 重新评估 #4819 / #4820 是否需要补充测试或 reviewer 认领，避免长期数据一致性问题无人背书。
2. 对 #5536（p1 安全修复）建议优先解除 conflict 并合入。
3. 对含 `conflict` 标记的 PR（#5536, #5498, #5704, #5710, #4819）建议协调 rebasing，避免与主干漂移扩大。

---

### 项目健康度速评

| 维度 | 评分 | 说明 |

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-09-10**

---

## 1. 今日速览

Hermes Agent 在过去 24 小时保持**高度活跃**的工程节奏：50 条 Issue 更新（38 新开/活跃，12 关闭）和 50 条 PR 更新（40 待合并，10 关闭），活跃度显著高于一般开源项目均值。讨论热度集中在 **P1 级会话状态/消息投递风险**（sweeper:risk-session-state / risk-message-delivery 标签）以及 **Desktop 端跨平台稳定性**问题。今日没有新版本发布，但修复了一批 gateway、Discord、QQBot、BlueBubbles 等通道相关的回归与多端协同 Bug，整体健康度评估为**中等偏上**——主干持续推进，但仍有 5+ 条 P1 级未修复 Issue 暴露会话生命周期相关的系统性风险。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共关闭 **10 个 PR**，集中在跨平台通道一致性、会话状态生命周期和小型桌面体验改进：

| PR | 模块 | 推进方向 |
|---|---|---|
| [#106827](https://github.com/NousResearch/hermes-agent/pull/106827) | gateway / BlueBubbles | 规范化 DM 会话 ID 为裸地址，消除同一 DM 因 webhook payload 形状差异而 fan-out 到两个会话的副作用（关闭 [#106824](https://github.com/NousResearch/hermes-agent/issues/106824)）|
| [#106826](https://github.com/NousResearch/hermes-agent/pull/106826) | gateway / BlueBubbles | 跟踪近期 inbound message GUID，对 `new-message` 与 `updated-message` 双发场景做去重 ack |
| [#106810](https://github.com/NousResearch/hermes-agent/pull/106810) | tools / MCP | 在 streamable HTTP 上发送 SEP-2243 路由头 `Mcp-Method` / `Mcp-Name`，但保留 SDK 已 stamp 的 header（关闭 [#106799](https://github.com/NousResearch/hermes-agent/issues/106799)）|
| [#106794](https://github.com/NousResearch/hermes-agent/pull/106794) | gateway / QQ Bot | 启动 WS 时遵守 `NO_PROXY`，避免代理宕机时本地地址也被强制走代理 |
| [#106829](https://github.com/NousResearch/hermes-agent/pull/106829) | desktop | 显式 chat 链接（`source === 'explicit-link'`）改为新开 Browser 标签，避免 tool/file-browser 结果淹没标签页 |
| [#107019](https://github.com/NousResearch/hermes-agent/pull/107019) | desktop / bots workspace | 修复 Bot workspace 中 `openNewSessionTile()` 误传 `hidden: true`，让普通 New session 在全局 Sessions 侧栏中可见可搜（关闭 [#107016](https://github.com/NousResearch/hermes-agent/issues/107016)）|
| [#106977](https://github.com/NousResearch/hermes-agent/pull/106977) | plugins / A2A | orphan-task 清理使用 `A2A_REPLY_TIMEOUT` 而非硬编码 300s，避免长任务被误判 `TASK_STATE_FAILED` 后真实回复被丢弃 |
| [#106827](https://github.com/NousResearch/hermes-agent/pull/106827) + [#106826](https://github.com/NousResearch/hermes-agent/pull/106826) | BlueBubbles | 同一 DM 双发问题一次性从 ID 规范化与事件去重两个维度根治 |

**整体评估**：今日的合并不涉及大型架构演进，而是**对会话/消息投递链路的一次系统性收口**——BlueBubbles、QQ Bot、Discord、A2A、Desktop 五处都完成了与近期新机制（去重、代理、会话归属、Orphan sweep）的对齐。向前迈进程度约 **+3%**，主要落在稳定性而非新功能。

---

## 4. 社区热点

**最高热度**两条均属自动化 Sweeper 在持续打卡：

- **[#66616 skills-index-watchdog degraded](https://github.com/NousResearch/hermes-agent/issues/66616)** —— 187 评论，自动探针失败，索引 29.8h 老（限 26h）。Skills Hub 文档站依赖的 `/docs/api/skills-index.json` 由 `skills-index.yml` (cron 6/18 UTC) 与 `deploy-site.yml` 重建。这是当前社区关注度绝对 Top 1，诉求集中在**让索引重建更鲁棒或缩短周期**，避免文档站陈旧。

- **[#78647 Repo-wide godfile eradication](https://github.com/NousResearch/hermes-agent/issues/78647)** —— 82 评论，工程规范级 Epic。在 [#102117](https://github.com/NousResearch/hermes-agent/issues/102117) 后仍残留 2K 任务。立场是「**所有 god file 持续分片、永不回滚**」。诉求是**架构一致性 + 模块边界清晰度**，反映项目对长期可维护性的承诺。

**值得关注的新热点**：

- **[#100401 Cron heartbeat deadlock](https://github.com/NousResearch/hermes-agent/issues/100401)** —— 11 评论，P1。cron 投递仍在飞行时被自身 fire-claim 心跳杀死，所有 >60s 的任务被误标 `Interrupted by shutdown`。这与今日同主题 P1 Issue 集中爆发相呼应（见下节）。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1（会话状态/消息投递关键风险）

| Issue | 模块 | 描述 | 是否有 Fix PR |
|---|---|---|---|
| [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) | cron | fire-claim 心跳与自身 fence 死锁，>60s 任务被误杀 | ❌ 无 |
| [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) | desktop / sessions / profiles | Bot 瓦片无限重连耗尽 Warm Bot Backends 槽位 | ❌ 无 |
| [#106963](https://github.com/NousResearch/hermes-agent/issues/106963) | gateway / sessions / usage-cost | 驱逐被 reap 的会话时未中断在 flight run（51 次调用 / 7.9M token 浪费） | ✅ [#106964](https://github.com/NousResearch/hermes-agent/pull/106964)（待合并）|
| [#106935](https://github.com/NousResearch/hermes-agent/issues/106935) | desktop / SSH / sessions | `--isolated` idle-exit 误退兄弟 backend，触发整体重启杀活 turn | ✅ [#107042](https://github.com/NousResearch/hermes-agent/pull/107042)（待合并）|

### 🟠 P2（影响体验/可观测性）

| Issue | 模块 | 描述 | Fix 状态 |
|---|---|---|---|
| [#106596](https://github.com/NousResearch/hermes-agent/issues/106596) | desktop | YouTube 嵌入 Error 153（Referer 修到了未使用的 session partition）| ❌ |
| [#106608](https://github.com/NousResearch/hermes-agent/issues/106608) | dashboard / auth | profile-scoped 插件发现覆盖隔离 Dashboard 的 Basic Auth | ❌ |
| [#107028](https://github.com/NousResearch/hermes-agent/issues/107028) | codex | Codex app-server 仍用 90s 后工具看门狗 retire TUI turns | ❌ |
| [#106987](https://github.com/NousResearch/hermes-agent/issues/106987) | tui | `prompt.submit` 错误 5072 留下 inflight 但无执行线程 | ❌ |
| [#106994](https://github.com/NousResearch/hermes-agent/issues/106994) | cron | worker 自建子任务与 `recompute_ready` 形成死锁 | ❌ |
| [#100740](https://github.com/NousResearch/hermes-agent/issues/100740) | cli / Windows | `local_runtime` 仅探测 NVIDIA，AMD/Intel 退化为 CPU llama.cpp | ❌ |
| [#53416](https://github.com/NousResearch/hermes-agent/issues/53416) | cron / MCP | `enabled_toolsets` 过滤在 cron 上被 MCP 工具绕过 | ❌ |

### 🟡 P3

- [#100573](https://github.com/NousResearch/hermes-agent/issues/100573) desktop Linux SIGTRAP from `string_view::substr` (Electron 40.10.2)
- [#107026](https://github.com/NousResearch/hermes-agent/issues/107026) Windows Dashboard 故障（已关闭，需 repro）
- [#106994](https://github.com/NousResearch/hermes-agent/issues/106994) kanban worker 子任务死锁

**观察**：P1 议题集中于「**会话生命周期 vs 在 flight 执行**」这一系统性张力 —— 多个不相关模块（cron、gateway、desktop SSH、codex）各自独立报告同一类症状。这是值得维护者做横向专题 review 的信号。

---

## 6. 功能请求与路线图信号

### 已有 PR 跟进（可能进入下一版本）

| 提议 | 状态 | 信号 |
|---|---|---|
| **[#5505 Terminal tab/title + 思考指示](https://github.com/NousResearch/hermes-agent/issues/5505)** | Issue OPEN（8 评论）| 用户体验层细节，TUI/Skin 系统联动，**长期开放但活跃** |
| **[#74302 Desktop 内联 diff 默认折叠开关](https://github.com/NousResearch/hermes-agent/issues/74302)** | Issue OPEN（3 👍）| 偏好项改动，优先级低但有真实需求 |
| **[#106319 profile-scoped free-only OpenRouter](https://github.com/NousResearch/hermes-agent/pull/106319)** | PR OPEN | 已在多端（CLI/gateway/web/desktop/TUI）一致化应用规则，**可纳入下个 release** |
| **[#106318 只读凭据池诊断](https://github.com/NousResearch/hermes-agent/pull/106318)** | PR OPEN | 依赖轻、不破坏兼容性，**高纳入概率** |
| **[#106913 cron 周期任务 honor `start_at`](https://github.com/NousResearch/hermes-agent/pull/106964)** | PR OPEN | 持久化 + 无 LLM clock 介入，**可纳入** |
| **[#106974 (image routing) `supports_vision` 覆盖 aux de-facto 规则](https://github.com/NousResearch/hermes-agent/pull/107046)** | PR OPEN | 关闭 [#638](https://github.com/NousResearch/hermes-agent/issues/638)（vision 检测）+ 增强 UX |
| **[#106874 Discord bot handoff 显式化 + 批量续接](https://github.com/NousResearch/hermes-agent/pull/106874)** | PR OPEN | 解决两个 Discord bot 互聊的「reply ping 误触发无限循环」|
| **[#106911 Firecrawl `waitFor`](https://github.com/NousResearch/hermes-agent/pull/106911)** | PR OPEN | 让懒加载页面提取完整 |

### 长期开放但低活跃

- [#60414 Desktop 背景图配置（**已关闭**为 duplicate）](https://github.com/NousResearch/hermes-agent/issues/60414)
- [#96897 / 等] —— Desktop 偏好体系正在累积多个微特性（diff、背景图、tab title），可能预示下一版 Desktop 偏好页重构。

---

## 7. 用户反馈摘要

**真实痛点画像**（提炼自多条 Issue）：

1. **多 backend 资源争抢**：用户在 macOS/SSH/20 profile 部署中遭遇 idle-exit 与 warm backend slot 抢占（[#103375](https://github.com/NousResearch/hermes-agent/issues/103375)、[#106935](https://github.com/NousResearch/hermes-agent/issues/106935)）。痛点是「**长连接不稳定**」「**资源被回收后再次启动延迟**」。

2. **大上下文/压缩失败**：超过 context limit 的会话**永久无法压缩**，且 `/compress` no-op；用户反映每次 turn 都需手动 reset session（[#106459](https://github.com/NousResearch/hermes-agent/issues/106459)）。

3. **平台差异化 Bug 集中爆发**：
   - macOS 27 (arm64) 上 kanban 调度器 SIGSEGV（[#97296](https://github.com/NousResearch/hermes-agent/issues/97296)）
   - Windows 上 local runtime 永远退化为 CPU（[#100740](https://github.com/NousResearch/hermes-agent/issues/100740)）
   - Linux Wayland + Electron 40.10.2 SIGTRAP（[#100573](https://github.com/NousResearch/hermes-agent/issues/100573)）

4. **会话归属与可发现性差**：Bot workspace 中 New session 被持久化为 hidden，从侧栏搜索中消失（[#107016](https://github.com/NousResearch/hermes-agent/issues/107016)，已修）。

5. **MCP / 插件生态一致性差**：cron 注入不受 `enabled_toolsets` 过滤、pyproject pin 与 fastmcp 1.x 不兼容、MCP SEP-2243 routing header 缺失 —— 反映 **plugin/extension 边界治理**正在成为新痛点区。

6. **正面反馈**：[#106968](https://github.com/NousResearch/hermes-agent/issues/106968) proxy combo 路线希望 footer 显示 routed member，体现用户对成本/延迟透明度有期待。

---

## 8. 待处理积压

需维护者主动关注的**长期未响应/关键事项**：

| 优先级 | Issue / PR | 状态 |
|---|---|---|
| 🔥 自动化未恢复 | [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) skills-index degraded | **187 评论**，自动化失败自 7/18 起持续打卡 |
| 🔥 架构积压 | [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) godfile eradication 残留 2K 任务 | **82 评论**，规范层 Epic |
| 🔴 P1 无修复 | [#100401](https://github.com/NousResearch/hermes-agent/issues/100401) cron heartbeat deadlock | 9/1 起开放，跨 session/turn 边界 |
| 🔴 P1 无修复 | [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) Bot 瓦片无限重连 | 9/5 起开放 |
| 🟠 MCP 治理 | [#53416](https://github.com/NousResearch/hermes-agent/issues/53416) MCP 绕过 enabled_toolsets | **6/27 起开放**，3 个月未被合并修复 |
| 🟠 TUI 体验 | [#5505](https://github.com/NousResearch/hermes-agent/issues/5505) terminal tab title | **4/6 起开放**，5 个月未合 |
| 🟠 旧 CLI Bug | [#637](https://github.com/NousResearch/hermes-agent/issues/637)、[#638](https://github.com/NousResearch/hermes-agent/issues/638)、[#633](https://github.com/NousResearch/hermes-agent/issues/633)、[#632](https://github.com/NousResearch/hermes-agent/issues/632) | 已关闭（自 teknium1），但反映历史 CLI bug 集中清仓 |

**维护者建议**：
1. 优先评审 **P1 in-flight run 终止**相关 PR（[#106964](https://github.com/NousResearch/hermes-agent/pull/106964)），这是横跨 cron / gateway / desktop 多个症状的共同根因方向。
2. [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) skills-index 自动化需要运行时侧操作（手动触发或调整 cron），不应继续每日自我打卡。
3. [#78647](https://github.com/NousResearch/hermes-agent/issues/78647) godfile epic 残留 2K 任务是技术债，建议在每次 sprint 中分摊配额。
4. [#53416](https://github.com/NousResearch/hermes-agent/issues/53416) MCP 治理 + [#95855](https://github.com/NousResearch/hermes-agent/issues/95855) 依赖 pin 不一致，建议集中做一次 plugin dependency audit。

---

**报告生成时间**：2026-09-10
**数据范围**：过去 24 小时 Issue / PR 更新
**生成方式**：基于 GitHub Issues & Pull Requests 公开数据自动

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-09-10

> 数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw) ｜ 报告周期：2026-09-09 ~ 2026-09-10

---

## 1. 今日速览

PicoClaw 今日活跃度偏低，呈现"清理式停滞"特征。**过去 24 小时内无新版本发布、无新增 Issue、无新 PR 提交**，所有 Issues 动态均为系统自动关闭的 stale 标记，PR 端仅有一条长期悬挂的增强被关闭。项目整体推进节奏放缓，维护者注意力可能正集中于内部重构或里程碑规划阶段，社区反馈渠道响应周期偏长值得关注。

- 📊 活跃度：**低** ｜ 新提交 0 ｜ 关闭 3 Issues + 1 PR
- 🚦 健康度：**需关注**（关键 Bug 因 stale 被关闭而非修复关闭）

---

## 2. 版本发布

无新版本发布。

> 建议关注 main 分支最新 commit（`2cf030d2`，被 #3269 报告用户引用），后续如需追踪 release 节奏可订阅 [Releases 页面](https://github.com/sipeed/picoclaw/releases)。

---

## 3. 项目进展

### ✅ 已关闭 PR（1 条）

**[#1349 feat(qq): support parsing and replying to more attachment types](https://github.com/sipeed/picoclaw/pull/1349)** — 由 [@aishannon](https://github.com/sipeed/picoclaw) 提交，开置于 2026-03-11，今日关闭。

该 PR 自提交起悬置约 **6 个月**后终获处理。主要贡献：

1. 支持 QQ Channel emoji 结构解析
2. 支持处理来自 QQ Channel 的语音/图片/视频/文件入站消息
3. 支持本地附件上传回复（语音/图片/视频/文件）
4. 回复优先级：Markdown → 降级到纯文本

📌 **推进意义**：补齐了 QQ Channel 作为 PicoClaw 对话通道的多模态能力，但因长期未合并关闭，对 QQ 生态用户的体验改进存在明显延迟。

### 🟡 待合并 PR（4 条，均为 open 状态）

| PR | 标题 | 创建日期 | 领域 |
|---|---|---|---|
| [#3358](https://github.com/sipeed/picoclaw/pull/3358) | fix(agent): thread responses to the originating question | 2026-09-01 | Agent |
| [#3354](https://github.com/sipeed/picoclaw/pull/3354) | feat(irc): assemble IRCv3 multiline messages | 2026-08-31 | Channel |
| [#3353](https://github.com/sipeed/picoclaw/pull/3353) | fix(channels): bound tool feedback animations | 2026-08-31 | Channel |
| [#3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat): cleanup implementation -200LOC | 2026-07-03 | Channel |

---

## 4. 社区热点

按评论数与互动量排序，今日最热议题集中在 **MCP 服务器连接异常** 与 **网关启动失败** 两个稳定性问题上：

| 排名 | 议题 | 评论 | 👍 | 性质 |
|---|---|---|---|---|
| 1 | [#3269 MCP server 连接失败导致 agent loop 挂起](https://github.com/sipeed/picoclaw/issues/3269) | 9 | 1 | 🔴 严重 Bug |
| 2 | [#3265 Gateway 启动报错 `channel deltachat has unknown type`](https://github.com/sipeed/picoclaw/issues/3265) | 4 | 1 | 🔴 严重 Bug |
| 3 | [#3345 轻量化家庭边缘设备 worker 模式提案](https://github.com/sipeed/picoclaw/issues/3345) | 2 | 0 | 💡 路线图建议 |

📌 **诉求分析**：
- 用户对 **生产可用性** 的诉求强烈——MCP 失败直接挂死聊天界面，是典型的可用性杀手；
- 通道注册（deltachat）错误反映出 **配置加载路径缺乏类型校验**，是潜在的多通道回归问题；
- #3345 代表了社区对 PicoClaw 在 **RISC-V/ARM/低内存设备** 部署场景的期待，与项目"个人 AI 助手"定位契合度高。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🔴 **P0** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server 连接失败 → agent loop 挂死 → 聊天界面无响应 | ⚠️ **已 stale 关闭**（未修复） | ❌ 无 |
| 🟠 **P1** | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | 配置未启用 deltachat，但 gateway 启动仍报错 | ⚠️ **已 stale 关闭**（未修复） | ❌ 无 |

📌 **风险提示**：
两条严重 Bug 均因社区超时而被自动标记 stale 关闭，但**并非真正修复**。这意味着当前 nightly 版本（`2cf030d2`）中这两个问题理论上依然存在：

1. **#3269 影响所有使用 MCP 集成的用户** —— 这是一个会让整个聊天界面完全失能的故障，建议维护者优先 review 是否有 patch 可 cherry-pick。
2. **#3265 影响新部署用户** —— 网关层启动失败会导致 onboarding 体验断裂。

PR [#3222](https://github.com/sipeed/picoclaw/pull/3222)（deltachat 重构 -200LOC）若合并，可能间接缓解 #3265 描述的注册路径问题，值得关联 review。

---

## 6. 功能请求与路线图信号

### 新提出 / 活跃中的功能方向

1. **轻量化边缘 worker 模式**（[#3345](https://github.com/sipeed/picoclaw/issues/3345)，by @kvnloo）
   - 针对 10–20 MB 内存的 RISC-V/ARM/MIPS/旧 Android 设备
   - 多机协同：弱设备 + 强 PC 组合
   - 与 PicoClaw "个人 AI 助手" 定位强契合，**进入路线图的概率较高**

2. **IRCv3 multiline 协议支持**（[#3354](https://github.com/sipeed/picoclaw/pull/3354)）
   - 默认请求 `batch`、`message-tags`、`draft/multiline`
   - 实现完整度高（描述详细），**合并概率较高**

3. **消息线程溯源**（[#3358](https://github.com/sipeed/picoclaw/pull/3358)）
   - 解决群聊中 bot 回复"飘"的问题（缺少 `ReplyToMessageID`）
   - 用户体验改进型修复，**应优先纳入下个补丁版本**

4. **工具反馈动画生命周期收敛**（[#3353](https://github.com/sipeed/picoclaw/pull/3353)）
   - 5 分钟硬上限 + 首次编辑错误立即停止
   - 稳定性修复，**应优先纳入下个补丁版本**

---

## 7. 用户反馈摘要

从 Issues 评论中提炼的真实痛点：

- 🚨 **"MCP 失败 = 聊天彻底失能"**：用户报告当 MCP server 不可达时，agent loop 进入挂起状态，聊天界面**完全无响应**（[#3269](https://github.com/sipeed/picoclaw/issues/3269)）。这是最强烈的不满意信号，指向 **缺乏连接级超时与降级策略**。
- 😤 **"幽灵通道配置错误"**：用户未在 config.json 配置 deltachat，但启动报错 ([#3265](https://github.com/sipeed/picoclaw/issues/3265))，说明通道注册表在加载阶段缺少过滤/校验。
- 🌱 **"资源受限设备的渴望"**（[#3345](https://github.com/sipeed/picoclaw/issues/3345)）：社区明确表达希望 PicoClaw 能跑在树莓派、旧 Android、廉价 RISC-V 板上，并构成分布式节点。这是积极的建设性反馈。
- 🔇 **沉默的反向信号**：所有 stale 关闭的 Issue 都暗示 **维护者响应周期偏长**（多则 2-6 个月），这可能影响外部贡献者的积极性。

---

## 8. 待处理积压（提醒维护者关注）

| 项目 | 标题 | 悬置时长 | 风险 |
|---|---|---|---|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor(deltachat) -200LOC | **~2 个月** | 长期未 review 的较大重构，建议尽快安排 reviewer |
| [PR #3358](https://github.com/sipeed/picoclaw/pull/3358) | thread responses to originating question | 10 天 | 用户体验类小修，合并成本低 |
| [PR #3354](https://github.com/sipeed/picoclaw/pull/3354) | IRCv3 multiline | 10 天 | 协议级增强，建议技术审 |
| [PR #3353](https://github.com/sipeed/picoclaw/pull/3353) | bound tool feedback animations | 10 天 | 稳定性补丁，合并风险低 |
| [Issue #3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接挂死 | 已 stale 关闭 | ⚠️ Bug 未实际修复，建议人工 reopen |
| [Issue #3265](https://github.com/sipeed/picoclaw/issues/3265) | deltachat 启动错误 | 已 stale 关闭 | ⚠️ Bug 未实际修复，建议人工 reopen |

📌 **维护建议**：
- **优先**：人工 reopen #3269 与 #3265（不应让 P0/P1 Bug 因 stale 而消失），或显式说明"将在 vX.Y 修复"以保留可见性。
- **次优**：推动 #3222（deltachat 重构）与 #3358/#3353/#3354 三项小 PR 的 review 流水，避免新一轮积压。

---

*报告生成时间：2026-09-10 ｜ 数据基于 GitHub 公开 API 抓取*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**日期：2026-09-10**
**仓库：[nanocoai/nanoclaw](https://github.com/qwibitai/nanoclaw)**

---

## 1. 今日速览

NanoClaw 今日维持了较高的修复型活跃度，24 小时内共产生 1 条 Issue 更新与 7 条 PR 变更，其中 3 条 PR 已完成关闭/合并、4 条仍处于待审状态。本轮迭代无版本发布，所有变更集中在 Bug 修复层面，涵盖 agent-runner 核心逻辑、WhatsApp 通道、安装引导与社区门户等多个模块，整体呈现出"小步快跑、按问题域聚焦收口"的健康修复节奏。项目处于稳定的维护期，未出现重大功能合入或破坏性变更信号。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共关闭/合并 3 条 PR，整体推进体现在四个方向：

- **跨仓库错误处理契约落地（#3756）**：作为三联修复的最后一环，该 PR 解决了当 Gateway 因用户耗尽使用额度（usage allowance）而拒绝请求时，agent-runner 端向用户呈现的提示文案问题。它与 `nanoco-gw#152`（把额度耗尽转为 403）、`nanoco#534`（贯通跨仓协议）配合，形成完整的"额度耗尽"错误链路。这意味着用户在触发额度上限时，将看到语义更准确、更易理解的反馈。

  🔗 [PR #3756](https://github.com/qwibitai/nanoclaw/pull/3756)

- **社区门户 Echo 镜像记录准确性（#3753）**：修复了登录阶段过早写入 `NANOCLAW_HARDENED_IMAGE=true` 标志、导致 Echo 实际产物与用户点击不一致的问题。该 PR 标签密集（`kind/bug` + `area/repository-maintenance` + `area/setup-installation`），属于社区门户可信度的一次加固。

  🔗 [PR #3753](https://github.com/qwibitai/nanoclaw/pull/3753)

- **线程回复归属正确性（#3738）**：修复 `send_message`、`send_file` 及 `<message to>` 回复落入被回复消息所在线程而非主频道的路由问题。该变更涉及 `resolveRouting` 核心逻辑与 sessions/tools 模块，影响所有使用线程回复的渠道，属于关键路径修复。

  🔗 [PR #3738](https://github.com/qwibitai/nanoclaw/pull/3738)

综合来看，今日合并的修复显著增强了 **错误可读性、状态一致性、消息路由正确性** 三个核心维度，项目在"agent 对话交互可信度"上向前迈出了坚实一步。

---

## 4. 社区热点

- **最值得关注的未结 Issue：#3705** —— 关于 `ncl tasks update --recurrence` 不重算 `process_after` 的缺陷，已存在 7 天（自 2026-09-03 起），当前评论 1 条、点赞 0，热度不高但属于定时任务核心机制问题。该问题影响将周任务切换为日任务后的实际触发时刻，可能导致任务错过首次执行窗口，对自动化用户尤为关键。
  🔗 [Issue #3705](https://github.com/qwibitai/nanoclaw/issues/3705)

- **PR 矩阵聚焦"通道层 + agent 层"双线**：今日 PR 集中在 `area/agent-runner`、`area/channels (whatsapp)`、`area/setup-installation` 三大领域，反映出社区贡献者正围绕 WhatsApp 通道健壮性与 agent runner 内部状态治理两条主线推进。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 编号 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| 🔴 高 | `sqliteGetPendingMessages` 无时间边界全表扫描 `processing_ack`，行数膨胀后存在性能/正确性风险 | [#3755](https://github.com/qwibitai/nanoclaw/pull/3755) | 待合并（OPEN） | ✅ 同 PR 内提供修复 |
| 🟠 中 | `ncl tasks update --recurrence` 修改调度频率后未重算 `process_after` | [#3705](https://github.com/qwibitai/nanoclaw/issues/3705) | 待修复（OPEN） | ❌ 暂无关联 PR |
| 🟠 中 | WhatsApp 通道对 `@newsletter` JID 在入站边界未做拦截，可能污染消息流 | [#3751](https://github.com/qwibitai/nanoclaw/pull/3751) | 待合并（OPEN） | ✅ 同 PR 内提供修复 |
| 🟡 低 | WhatsApp 同一聊天内多个待回答问题的可回答性失效 | [#3752](https://github.com/qwibitai/nanoclaw/pull/3752) | 待合并（OPEN） | ✅ 同 PR 内提供修复 |
| 🟢 低 | 未注册浏览器门户交接流程打印了"在另一设备登录"的备用说明文案，但该路径仅完成登录、不替代体验 | [#3754](https://github.com/qwibitai/nanoclaw/pull/3754) | 待合并（OPEN） | ✅ 同 PR 内提供修复 |

**稳定性评估**：今日未报告崩溃级或回归性问题，已发现缺陷均在受控范围内且大多数自带修复 PR，整体运行健康。

---

## 6. 功能请求与路线图信号

今日未见明确的新功能请求 Issue。从 PR 流向可推断的潜在路线图信号：

- **WhatsApp 通道加固**：`#3751`、`#3752` 两条 PR 来自同一作者 `horsehcj`，表明 WhatsApp 通道正在进入"边界防御 + 交互一致性"的集中收尾，后续可能随这些修复合并发布补丁版本。
- **Agent-runner 状态机治理**：`#3755`（`processing_ack` 清理）与 `#3738`（路由解析）共同指向"长生命周期状态治理"这一方向，暗示下一阶段项目会持续打磨 agent 内部状态一致性。
- **跨仓契约演进**：#3756 所在的"额度耗尽 403 化"三联修复揭示了 `nanoclaw ↔ nanoco-gw ↔ nanoco` 的契约正在向"结构化错误码"方向演进，未来用户面将获得更确定的错误语义。

---

## 7. 用户反馈摘要

基于 Issue #3705 公开评论提炼的痛点：

- **痛点 1：调度更新"看似成功，实际无效"** —— 用户通过 `ncl tasks update --recurrence` 修改任务频率后，无法预知任务是否仍按旧节奏触发，需要手动校验 `process_after`。这对依赖定时通知（周报、日报、巡检）的工作流构成可靠性隐患。
- **痛点 2：缺乏回退或确认提示** —— 命令行层面未提示"已切换 cadence 但下次触发时间未刷新"，导致用户在生产场景中可能错过执行窗口。
- **使用场景**：从 issue 描述判断，主要受影响的用户为自动化工作流重度使用者（如将低频巡检升级为高频巡检的场景）。

满意点方面：WhatsApp 用户群体通过 #3751、#3752 持续向项目提交修复 PR，反映出该通道仍有活跃的真实用户在使用并反哺生态，社区反馈通道健康。

---

## 8. 待处理积压

| 项目 | 编号 | 类型 | 创建时间 | 等待时长 | 备注 |
|---|---|---|---|---|---|
| `ncl tasks update --recurrence` 不重算 `process_after` | [#3705](https://github.com/qwibitai/nanoclaw/issues/3705) | Bug | 2026-09-03 | **7 天** | 0 👍、1 条评论，暂无关联修复 PR，属于调度核心逻辑，建议优先响应 |

**提醒**：今日无其他长期未响应的 Issue 或 PR，整体积压水位较低。但 #3705 涉及定时任务核心正确性，建议维护者在下一迭代窗口内给出修复意向或认领信号。

---

## 📊 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐ | 24h 内 1 Issue + 7 PR，PR/Issue 比例 7:1，社区贡献活跃 |
| 维护响应 | ⭐⭐⭐⭐ | 多数 PR 自带修复、Issue 已更新，无重大积压 |
| 稳定性 | ⭐⭐⭐⭐⭐ | 无崩溃/回归报告，已知缺陷均有修复路径 |
| 路线清晰度 | ⭐⭐⭐⭐ | 修复方向聚焦，无散点状变更 |
| 发布节奏 | ⭐⭐⭐ | 今日无版本发布，属常规维护窗口 |

**整体判断**：项目处于稳健的修复性迭代期，建议在下个版本窗口对积压 Issue #3705 与 WhatsApp 两条待合并 PR 集中收口，发布小版本补丁。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报
**日期：2026-09-10** | **数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 过去 24 小时整体活跃度处于**中等偏上**水平：社区提交了 **1 条新 Issue 和 4 条新 PR**，但所有 PR 均处于待审核状态，无合并、无关闭，也无新版本发布。技术动态高度集中在 **MCP（Model Context Protocol）多租户隔离** 与 **跨渠道聊天扩展** 两条主线——前者关注托管 MCP 服务的调用者归属、缓存键与重试语义（#8090、#8084），后者涉及 WebChat v2 的输入法（IME）兼容性与 Telegram Bot API 命令菜单注册（#8091、#8072）。项目健康度整体稳定，但维护者审阅节奏放缓，存在一定 PR 积压迹象。

---

## 2. 版本发布

**本期无新版本发布。** 最近一次 Release 信息未在本次数据中体现，建议关注 [Releases 页面](https://github.com/nearai/ironclaw/releases) 跟踪后续版本节奏。

---

## 3. 项目进展

过去 24 小时内 **无 PR 被合并或关闭**，所有 4 条 PR 仍处于 OPEN 状态。以下是值得关注、但尚未落地的工作：

| PR | 标题 | 作者 | 状态 | 影响面 |
|---|---|---|---|---|
| [#8090](https://github.com/nearai/ironclaw/pull/8090) | fix(mcp): key discovered hosted-MCP catalogs per caller, not per extension | kirikov | 待合并 | 多用户安全/正确性 |
| [#8084](https://github.com/nearai/ironclaw/pull/8084) | feat(mcp): opt-in SEP-414 caller attribution on outbound hosted-MCP calls | kirikov | 待合并 | MCP 协议对齐 |
| [#8085](https://github.com/nearai/ironclaw/pull/8085) | fix(extensions): treat operator-installed packages like host-bundled ones | kirikov | 待合并 | 扩展系统一致性 |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | feat(telegram): register the Bot API command menu at activation | thisisjoshford | 待合并 | Telegram 渠道 UX |

**整体推进度评估：** 项目向前推进了**约 30–40%**——4 条 PR 的设计意图都已成形、作者也已完成自描述说明，但缺少 review/merge 信号。考虑到 #8090 与 #8084 涉及多租户隔离与协议级调用归属，是面向生产可用性的关键修复，建议维护者优先处理。

---

## 4. 社区热点

按互动量排序（点赞与评论均较少，热度主要由"问题质量与覆盖面"决定）：

1. **[Issue #8091 — WebChat v2 Enter 键误触发送](https://github.com/nearai/ironclaw/issues/8091)**  
   用户 `supermomonga` 报告：在 WebChat v2 中按下 Enter 确认 IME（日文/中文输入法）转换时，消息被错误地直接发送。这是一个**输入流可用性**问题，影响所有使用 IME 的非英文用户。作者明确指出"这是一个先前用户可见行为的回归"，说明该 Bug 此前曾出现过并被再次引入，**优先级应被提高**。

2. **[PR #8090 — 托管 MCP 目录缓存键修复](https://github.com/nearai/ironclaw/pull/8090)**  
   描述了一个**多用户串扰**的严重场景：托管 MCP 服务的工具清单取决于调用者凭证，但当前实现以"扩展 ID"为单一槽位发布目录，导致后一位用户的发现结果会**直接覆盖**前一位用户的工具。这是涉及**用户数据隔离**的正确性问题，社区关注度高。

3. **[PR #8084 — SEP-414 调用者归属](https://github.com/nearai/ironclaw/pull/8084)**  
   让托管 MCP 提供方能识别"调用来自哪个会话"以及"这是同一调用的重试"。这关系到**计费/幂等性**等下游语义，触及 MCP 生态标准化方向。

**诉求分析：** 社区热点反映出两条主线诉求——一是**多用户多租户安全**，二是**国际化与多渠道可用性**。两者都是产品走向"严肃生产部署"必须跨越的门槛。

---

## 5. Bug 与稳定性

| 严重程度 | Issue/PR | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 **高（功能可用性 / 用户体验回归）** | [#8091](https://github.com/nearai/ironclaw/issues/8091) | WebChat v2 在 IME 组合确认时，Enter 键误触发消息发送。属于**已修复问题再次回归**。影响所有依赖 IME 的中文/日文用户。 | ❌ 暂无关联 fix PR |
| 🔴 **高（多租户安全 / 数据串扰）** | [#8090](https://github.com/nearai/ironclaw/pull/8090) | 托管 MCP 工具目录以"扩展"为粒度缓存，导致不同用户的工具列表互相覆盖，是**安全与正确性双重风险**。 | ✅ 同一作者已提 PR |
| 🟠 **中（系统一致性问题）** | [#8085](https://github.com/nearai/ironclaw/pull/8085) | 操作员安装的扩展包在构造与校验阶段对"内联动态描述符 schema"的允许来源不一致，导致**可构建但无法使用**。 | ✅ 同一作者已提 PR |
| 🟢 **低（协议对齐 / 可选能力）** | [#8084](https://github.com/nearai/ironclaw/pull/8084) | 缺少 SEP-414 调用者归属头，影响托管 MCP 提供方做会话级状态或重试去重。 | ✅ 同一作者已提 PR |

---

## 6. 功能请求与路线图信号

| 候选功能 | 信号来源 | 路线图可能性评估 |
|---|---|---|
| **Telegram Bot API 命令菜单注册** | [PR #8072](https://github.com/nearai/ironclaw/pull/8072)（`size: L, scope: docs + dependencies`） | 🟢 **高**。已具备详细摘要与激活/反激活设计，预计可纳入下一个 minor 版本 |
| **SEP-414 调用者归属（opt-in）** | [PR #8084](https://github.com/nearai/ironclaw/pull/8084) | 🟢 **高**。与 MCP 协议方向一致，opt-in 机制降低破坏性 |
| **托管 MCP 多调用者目录隔离** | [PR #8090](https://github.com/nearai/ironclaw/pull/8090) | 🟢 **高**。属于修复而非新功能，但必须尽快合并 |

注：本周期未观察到由用户提出、独立于现有 PR 的"全新"功能请求。

---

## 7. 用户反馈摘要

- **真实痛点（非英文输入）：** `supermomonga` 在 [#8091](https://github.com/nearai/ironclaw/issues/8091) 中描述"按下 Enter 意在完成输入法转换，却被当作发送键，导致未完成的草稿被错误发送"。这是一个**东亚输入法用户的高频场景**，反映 WebChat v2 在 `keydown` 与 IME composition 事件上的处理不够细致。
- **多租户使用场景：** [#8090](https://github.com/nearai/ironclaw/pull/8090) 描述了**同一托管 MCP 服务下"用户 A → 用户 B"的工具串扰**，这是共享后端 + 多前端架构下的典型问题。
- **扩展生态使用场景：** [#8085](https://github.com/nearai/ironclaw/pull/8085) 暴露了**操作员安装扩展包**这条路径与 host-bundled 路径之间的不一致，说明社区已开始尝试 operator-level 部署。
- **渠道扩展使用场景：** [#8072](https://github.com/nearai/ironclaw/pull/8072) 反映出用户希望 Telegram 端的菜单与命令能"自动化注册"，减少手工维护成本。

---

## 8. 待处理积压

以下 PR/Issue 已开放但**24 小时内无维护者响应**，建议优先 review：

| 类别 | 编号 | 提交时间 | 待处理时长 | 建议优先级 |
|---|---|---|---|---|
| 安全/正确性 | [PR #8090](https://github.com/nearai/ironclaw/pull/8090) | 2026-09-08 | ~2 天 | 🔴 P0 |
| 协议对齐 | [PR #8084](https://github.com/nearai/ironclaw/pull/8084) | 2026-09-08 | ~2 天 | 🟠 P1 |
| 系统一致性 | [PR #8085](https://github.com/nearai/ironclaw/pull/8085) | 2026-09-08 | ~2 天 | 🟠 P1 |
| 用户体验回归 | [Issue #8091](https://github.com/nearai/ironclaw/issues/8091) | 2026-09-09 | ~1 天 | 🟠 P1 |
| 功能增强 | [PR #8072](https://github.com/nearai/ironclaw/pull/8072) | 2026-09-04 | ~6 天 | 🟡 P2 |

**风险提示：** [#8091](https://github.com/nearai/ironclaw/issues/8091) 若未及时修复，将在 WebChat v2 上线后影响所有东亚输入法用户的产品体验，且为已知回归，沟通成本较低；[#8090](https://github.com/nearai/ironclaw/pull/8090) 涉及多租户数据串扰，越早合并越能避免在生产环境被利用。

---

*本报告由 GitHub 公开数据自动整理生成。链接均指向 github.com/nearai/ironclaw 仓库。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-10** | [GitHub 仓库](https://github.com/netease-youdao/LobsterAI)

---

## 1. 今日速览

LobsterAI 今日整体活跃度处于**中等偏高水平**，过去 24 小时内共更新 20 条 Issue（16 条活跃/新开、4 条关闭）和 13 条 PR（11 条已关闭、2 条仍开放）。**当日最显著的特征是围绕 OpenClaw v2026.8.1 升级带来的一系列连锁问题进行集中修复**，贡献者 `btc69m979y-dotcom` 在一天内集中关闭了 9 个相关 PR，覆盖 Gateway 启动、IM 插件配置、模型选择作用域、Windows 进程优雅退出等关键路径。**无新版本发布**，但 PR 修复密度表明维护者正在为下一次版本迭代做集中收尾。**需关注**：社区积累的多个高危安全 Issue（来自 `YLChen-007`）自 6–7 月提出至今未获任何修复 PR 关联，处于长期积压状态。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。根据 PR 内容推测，项目正在围绕 OpenClaw v2026.8.1 适配做集中修复，下一次发版可能包含本次合并的所有 fix。

---

## 3. 项目进展

今日合并/关闭的 11 个 PR 中，**核心进展集中在 OpenClaw 升级适配与桌面端 IM 通道恢复**，以下是重要合并项：

### 🔧 OpenClaw v2026.8.1 适配修复（主线）
- **[#2632](https://github.com/netease-youdao/LobsterAI/pull/2632)** `fix(openclaw): preserve IM config and gracefully stop Windows gateway`
  退出登录或服务端模型未加载时，配置同步会丢失 IM 账号、Agent 路由和本地网关认证；Windows 下 `child.kill(SIGTERM)` 直接结束进程，跳过 OpenClaw 清理。保留非模型配置，并改用 IPC 请求网关正常停止，避免累积不洁退出。

- **[#2633](https://github.com/netease-youdao/LobsterAI/pull/2633)** `fix(openclaw): update Discord DM config for gateway startup`
  修复 OpenClaw v2026.8.1 升级后 Discord schema 拒绝旧 `dm.policy` / `dm.allowFrom` 导致网关启动失败的回归。

- **[#2634](https://github.com/netease-youdao/LobsterAI/pull/2634)** `fix(openclaw): restore QQ shutdown and desktop IM sync`
  QQ 2.0.1 收到关闭信号直接退出，OpenClaw 启动记录收尾未完成；配置变更重启后桌面客户端消息同步失效。本 PR 修复两条恢复路径。

- **[#2635](https://github.com/netease-youdao/LobsterAI/pull/2635)** `fix(openclaw): avoid gateway restarts on stale config hashes`
  切换默认模型时 `config.get` 缓存返回旧 hash 导致配置下发失败、触发不必要 Gateway 重启。引入有界退避重试。

- **[#2638](https://github.com/netease-youdao/LobsterAI/pull/2638)** `fix(openclaw): migrate legacy workspace state before gateway startup`
  网关就绪后对话准备 Agent 工作区时被 `Legacy workspace setup state requires migration` 拦截。在网关启动前主动迁移旧 setup / attestation 元数据到 SQLite。

### 🎨 模型选择与 UI
- **[#2639](https://github.com/netease-youdao/LobsterAI/pull/2639)** `fix(openclaw): keep default model out of system prompts`
  修复切换其他会话的模型会更新 agent 默认模型，导致 system 前缀被破坏的问题。

- **[#2640](https://github.com/netease-youdao/LobsterAI/pull/2640)** `fix(openclaw): keep model selection session-scoped`
  在缺省 scope 下，会话内模型选择被额外写入 agent 或共享默认模型，导致切换影响默认偏好。显式写入 `agents.defaults.modelSelectionScope = "session"`。

### 🔌 插件与基础设施
- **[#2637](https://github.com/netease-youdao/LobsterAI/pull/2637)** `fix(openclaw): bundle Discord with trusted plugin origin`
  Discord 官方包因被发布在 `third-party-extensions`、以 `origin=config` 注册而失败。改在 `dist/extensions/` 下作为可信插件分发。

- **[#2636](https://github.com/netease-youdao/LobsterAI/pull/2636)** `fix(i18n): refresh About update label when switching languages`
  设置从中文切换到英文时，"检查更新"按钮标签未刷新。改为每次渲染重新计算。

### 📦 依赖与社区
- **[#2166](https://github.com/netease-youdao/LobsterAI/pull/2166)** `ci: bump dorny/paths-filter from 3 to 4`（Dependabot 自动）
- **[#2294](https://github.com/netease-youdao/LobsterAI/pull/2294)** `docs: add TakoAPI directory badge`（社区目录收录徽章）

**整体评估**：项目在 OpenClaw v2026.8.1 适配方向上迈进了**实质性一步**，11 个 PR 几乎全部围绕升级链路稳定性，体现出维护团队对此次重大版本变更的快速响应能力。

---

## 4. 社区热点

### 🔥 高关注度 Issue
- **[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)** —— Agent 记忆体系产品建议（已关闭，3 评论）
  作者 @X9-laser 系统性提出 Session 对话标题/元数据持久化、跨 session 历史检索、记忆分级（短期/长期）等需求，反映社区对 Agent 长时记忆能力的普遍期待。**虽已关闭但诉求长期存在**。

- **[#2120](https://github.com/netease-youdao/LobsterAI/issues/2120)** —— 综合功能建议（开放，3 评论）
  @nbjoe 提出借鉴 WorkBuddy 任务存储、延长单次任务运行时长（避免 `terminated`）、调整高分辨率下的技能界面 UI（3 列布局）。**反映高频使用用户对稳定性与生产力扩展性的双重诉求**。

- **[#2180](https://github.com/netease-youdao/LobsterAI/issues/2180)** —— "AI Collaborator" 自然语言命令栏与跨模型任务调度控制台提案（开放，1 评论）
  @woxinsj 提议将 OpenClaw 从底层工具集升级为面向"技术型非精英程序员"的 AI 协作平台，包含项目级记忆与跨模型编排。

- **[#2239](https://github.com/netease-youdao/LobsterAI/issues/2239)** —— "OpenClaw 化"编程工具趋势判断与生态联动建议（开放，1 评论）
  @woxinsj 系统性分析 AI 编程工具与通用办公 Agent 融合趋势，提出通过 MCP 协议实现与 OpenCode、CodeBuddy CN 等编程工具的深度联动方案。

### 🔐 安全类高危 Issue（讨论度虽不高，但严重性极高）
由 @YLChen-007 一人连续披露的 **4 个独立安全漏洞**（[#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)、[#2181](https://github.com/netease-youdao/LobsterAI/issues/2181)、[#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)、[#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)、[#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)），涉及任意本地文件读取、SSRF 防护被削弱、本地 token 代理未鉴权、媒体流任意文件外泄、HTML preview 跟随符号链接泄露本地文件等。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

| 严重度 | Issue | 简述 | 是否有 fix PR |
|:---:|:---|:---|:---:|
| 🔴 极高 | [#2286](https://github.com/netease-youdao/LobsterAI/issues/2286) | [Security] 未鉴权本地 token 代理，任意本地进程可重放受害者已认证的服务端模型 API 能力 | ❌ 无 |
| 🔴 极高 | [#2287](https://github.com/netease-youdao/LobsterAI/issues/2287) | [Security] NIM 出站媒体流允许通过 assistant 生成的绝对路径实现任意文件外泄 | ❌ 无 |
| 🔴 极高 | [#2288](https://github.com/netease-youdao/LobsterAI/issues/2288) | [Security] HTML 预览服务器跟随 in-root 符号链接泄露任意本地文件 | ❌ 无 |
| 🔴 极高 | [#2176](https://github.com/netease-youdao/LobsterAI/issues/2176) | [Security] 自动 artifact 加载允许消息派生的任意本地文件读取 | ❌ 无 |
| 🔴 极高 | [#2181](https://github.com/netease-youdao/LobsterAI/issues/2181) | [Security] 恢复私网浏览器默认访问并削弱内置 OpenClaw SSRF 防护 | ❌ 无 |
| 🟠 高 | [#2214](https://github.com/netease-youdao/LobsterAI/issues/2214) | 桌面端"数据备份"功能导致主进程卡死（未响应），100% 可复现 | ❌ 无 |
| 🟠 高 | [#2215](https://github.com/netease-youdao/LobsterAI/issues/2215) | 安装 LobsterAI 时反复出现 `Resource extraction failed: could not start extractor process` 错误 | ❌ 无 |
| 🟠 高 | [#2230](https://github.com/netease-youdao/LobsterAI/issues/2230) | 同一模型在 LobsterAI 比 CodeBuddy 慢数十倍（25 分钟 vs 2m24s） | ❌ 无 |
| 🟡 中 | [#2079](https://github.com/netease-youdao/LobsterAI/issues/2079) | 执行结果窗口滚动到顶端会假死（v2026.5.27 可复现） | ❌ 无 |
| 🟡 中 | [#2121](https://github.com/netease-youdao/LobsterAI/issues/2121) | 怀疑 Agent 重复输出大量消耗 token | ❌ 无 |

**核心稳定性观察**：
- 过去 24 小时**关闭的所有 PR 都属于 Bug 修复**，其中 #2632–#2640 系列是 OpenClaw v2026.8.1 升级回归的集中修复。
- **但社区报告的 5 个安全漏洞仍未有任何 PR 关联**，这是当前最重要的稳定性风险敞口。

---

## 6. 功能请求与路线图信号

### 用户提出、尚无 PR 的需求
- **Agent 跨 session 记忆体系**（[#2046](https://github.com/netease-youdao/LobsterAI/issues/2046)，已关闭但建议内容详实）
  优先级 1：Session 对话标题/元数据持久化到文件系统
  优先级 2：自动索引历史对话
  优先级 3：短期/长期记忆分级

- **"AI Collaborator" 形态升级**（[#2180](https://github.com/netease-youdao/LobsterAI/issues/2180)）
  含自然语言命令栏、跨模型任务调度、项目级记忆。

- **与编程工具深度联动**（[#2239](https://github.com/netease-youdao/LobsterAI/issues/2239)）
  通过 MCP 协议实现与 OpenCode、CodeBuddy CN 等编程工具的原生联动。

### 已有 PR 跟进的需求（高概率纳入下一版本）
- **会话内重命名失败时的本地化反馈**（[#2358](https://github.com/netease-youdao/LobsterAI/pull/2358)，开放）
  修复 #670，预计很快合并。

- **图片附件与模型视觉能力同步**（[#2373](https://github.com/netease-youdao/LobsterAI/pull/2373)，开放）
  切换到非视觉模型时清除 stale `dataUrl`，避免无效 payload 浪费 token。

- **技能文件监听改为手动开关**（建议见 [#2243](https://github.com/netease-youdao/LobsterAI/issues/2243)，暂无 PR）
  174 个技能下 watch 启动扫描与编辑器保存触发的高频 I/O 问题。

---

## 7. 用户反馈摘要

### 😐 不满意 / 痛点
1. **会员登录体验差**（[#1903](https://github.com/netease-youdao/LobsterAI/issues/1903)，已关闭）
   用户无法登录使用网易付费模型，影响核心付费功能可用性。

2. **IM 通道升级后体验倒退**（关联 [#2632](https://github.com/netease-youdao/LobsterAI/pull/2632)、[#2633](https://github.com/netease-youdao/LobsterAI/pull/2633)、[#2634](https://github.com/netease-youdao/LobsterAI/pull/2634)）
   OpenClaw v2026.8.1 升级后 Discord / QQ 出现启动失败、消息不同步、连接丢失等问题。

3. **数据备份功能导致主进程卡死**（[#2214](https://github.com/netease-youdao/LobsterAI/issues/2214)）
   在 71.6 MB 数据库 + WAL 模式下，备份操作 5–10 秒内即可让主窗口"未响应"。

4. **执行速度显著慢于同类工具**（[#2230](https://github.com/netease-youdao/LobsterAI/issues/2230)）
   同模型、同提示词下，LobsterAI 耗时 25 分钟 / 60M tokens，CodeBuddy 仅 2m24s / 67k tokens —— **效率差距约 10–900 倍**，属于严重体验问题。

5. **跨模型子任务协作不顺畅**（[#2132](https://github.com/netease-youdao/LobsterAI/issues/2132)，已关闭）
   M3 负责规划 + 验收监督、DeepSeek 负责快速执行，但网关级函数调用机制下子任务完成事件无法及时回流主任务。

6. **Memory Search 供应商锁定**（[#2216](https://github.com/netease-youdao/LobsterAI/issues/2216)）
   UI 中 provider 被固定为 openai，配额耗尽（429）后记忆搜索完全不可用；切换本地 embedding 时索引重建被 DB 锁阻塞（EBUSY）。

### 👍 满意 / 积极信号
- PR [#2294](https://github.com/netease-youdao/LobsterAI/pull/2294) 来自 TakoAPI 社区目录收录请求，表明 LobsterAI 已在外部 AI-Agent 目录获得曝光。
- Dependabot 自动 PR [#2166](https://github.com/netease-youdao/LobsterAI/pull/2166) 说明 CI 维护节奏稳定。

---

## 8. 待处理积压（重点提醒维护者）

### 🚨 紧急：未响应的安全漏洞
- **[#2176](https://github.com/netease-youdao/LobsterAI/issues/2176)** 任意本地文件读取（2026-06-18 开）
- **[#2181](https://github.com/netease-youdao/LobsterAI/issues/2181)** SSRF 防护被削弱（2026-06-21 开）
- **[#2286](https://github.com/netease-youdao/LobsterAI/issues/2286)** 未鉴权本地 token 代理（2026-07-07 开）
- **[#2287](https://github.com/netease-youdao/LobsterAI/issues/2287)** 媒体流任意文件外泄（2026-07-07 开）
- **[#2288](https://github.com/netease-youdao/LobsterAI/issues/2288)** HTML preview 符号链接泄露（2026-07-07 开）

⏰ **5 个安全 Issue 自披露至今已 2–3 个月，全部处于 `[stale]` 标记状态，无任何 PR 关联**。建议优先协调安全修复并在下个版本统一打包发布。

### 🟠

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-10

> 数据源：agentscope-ai/QwenPaw（用户标注为 CoPaw）
> 报告周期：2026-09-09 ~ 2026-09-10（UTC）

---

## 1. 今日速览

CoPaw 今日保持**高活跃度**：过去 24 小时内共产生 25 条 Issue 更新（11 条活跃、14 条关闭）和 35 条 PR 更新（25 条待合并、10 条已合并/关闭），仓库整体进入**密集修复阶段**。当日没有发布新版本，但合并的 4 条 PR 覆盖了 Console 会话竞态、MCP 客户端超时、ClawHub 下载路径、Console 消息排队等关键问题，**稳定性问题正在被快速闭环**。值得关注的信号是关于跨会话/跨标签页的"消息串号"和"渲染异常"类 Bug 集中爆发（#7642、#7231、#7011），以及桌面端对历史 FTS 索引的修复正在落地（#7655、#7639）。整体看，社区贡献者（包含多位首次贡献者）参与度高，仓库健康度良好。

---

## 2. 版本发布

今日**无新版本发布**。最新版本仍为 QwenPaw v2.2.0，迭代工作主要在主分支以 PR 形式进行。

---

## 3. 项目进展

今日有 **10 条 PR 被合并或关闭**，其中 4 条为实质性合并/关闭：

| PR | 作者 | 关键变化 | 关联 Issue |
|----|------|----------|------------|
| [#7237](https://github.com/agentscope-ai/QwenPaw/pull/7237) | zhijianma | **Console 会话竞态防护**：防止快速提交、切换会话/Agent、跨 Tab 切换时消息串号 | 解决 #7011、#7231 类问题的根因 |
| [#7649](https://github.com/agentscope-ai/QwenPaw/pull/7649) | yuanxs21 | **MCP HTTP/SSE 客户端超时可配置**：`MCPClientConfig` 增加 `http_timeout`，全链路打通 | 解决 [#3997](https://github.com/agentscope-ai/QwenPaw/issues/3997) |
| [#7640](https://github.com/agentscope-ai/QwenPaw/pull/7640) | Leirunlin | 修复 ClawHub 技能下载 URL 路径错误 | 修复 [#7634](https://github.com/agentscope-ai/QwenPaw/issues/7634) |
| [#7577](https://github.com/agentscope-ai/QwenPaw/pull/7577) | kabishou11 | **Console 消息排队**：运行中的会话不再直接 409 拒绝后续消息，而是入队 | 改善 Console 交互 UX |

此外，**多位首次贡献者（first-time-contributor）**提交了高质量 PR，包括 [#7659](https://github.com/agentscope-ai/QwenPaw/pull/7659)（Tauri sidecar CA 信任）、[#7542](https://github.com/agentscope-ai/QwenPaw/pull/7542)（滚动上下文消息分页）、#7577 等，显示项目对新贡献者友好、门槛合理。

---

## 4. 社区热点

按评论数排序的热门话题：

| 排名 | Issue | 标题 | 评论数 | 热度分析 |
|------|-------|------|--------|----------|
| 1 | [#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177) | 优化 deploy 首页（手机端入口位置、按钮顺序） | 8 | **移动端体验**成为重点诉求，用户反馈部署页核心操作入口被挤压 |
| 2 | [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console 停止请求误取消飞书活跃会话 | 8 | **多 UI 会话身份隔离**缺陷，存在数据丢失风险，今日已关闭 |
| 3 | [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | 工具返回 image/PDF 二进制以裸 base64 发送触发 400 | 7 | **AgentScope 多模态工具结果传输协议**问题，揭示运行时与网关的字段约定不一致 |
| 4 | [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | 同步调用阻塞事件循环且 timeout 失效（启动 118-135s 卡顿） | 6 | **Windows 桌面端启动性能**严重问题，至今未合并修复 PR |
| 5 | [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) | 应用市场已安装应用悬停仍显示"安装"按钮 | 6 | UI 状态管理 Bug，已关闭 |
| 6 | [#5329](https://github.com/agentscope-ai/QwenPaw/issues/5329) | 简洁模式下缺少切换 Agent 按钮（移动端痛点） | 5 | 长期未满足需求，今日关闭但需跟进确认实现位置 |

**背后诉求**：移动端/简洁模式 UI 的可用性，以及跨会话/跨通道消息路由的可靠性，是当前社区最关心的两个方向。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 高严重度（影响核心功能或安全）

| Issue | 描述 | 是否有修复 PR |
|-------|------|---------------|
| [#7363](https://github.com/agentscope-ai/QwenPaw/issues/7363) | Windows 桌面端同步调用阻塞事件循环，启动卡顿 118-135s，timeout 失效 | ❌ 无修复 PR 关联，需关注 |
| [#7011](https://github.com/agentscope-ai/QwenPaw/issues/7011) | Console 停止请求误取消飞书活跃会话（跨会话身份泄露） | ✅ PR #7237 已合并 |
| [#7231](https://github.com/agentscope-ai/QwenPaw/issues/7231) | 切换会话时消息被发往错误会话（消息丢失） | ✅ PR #7237 已合并 |
| [#7633](https://github.com/agentscope-ai/QwenPaw/issues/7633) | llama.cpp 5 位 build 号解析失败，**静默回滚用户手动升级的运行时** | ❌ 无修复 PR，严重数据丢失风险 |
| [#3254](https://github.com/agentscope-ai/QwenPaw/issues/3254) | Console chat UUID 因 GET /chats 时延而缺失（与 stop/delete 竞态） | ✅ 已关闭 |
| [#7596](https://github.com/agentscope-ai/QwenPaw/issues/7596) | `history.db` FTS 损坏未被完整性检查发现，保留清理静默失败 | ✅ PR [#7655](https://github.com/agentscope-ai/QwenPaw/pull/7655) 待合并 |
| [#6460](https://github.com/agentscope-ai/QwenPaw/issues/6460) | Edge + Wayland 下单标签高 CPU 占用（疑似大结果集渲染/WS 推送） | ❌ 无修复 PR |
| [#7597](https://github.com/agentscope-ai/QwenPaw/issues/7597) | 工具返回 image/PDF 二进制裸 base64 触发 400 | ⚠️ 已关闭但未见明确修复 PR 关联 |

### 🟡 中等严重度

| Issue | 描述 | 是否有修复 PR |
|-------|------|---------------|
| [#7642](https://github.com/agentscope-ai/QwenPaw/issues/7642) | Chrome Console 流式渲染直到回合完成才显示（同会话 Safari 正常） | ❌ 无 |
| [#7622](https://github.com/agentscope-ai/QwenPaw/issues/7622) | v2.2.0 后台弹窗背景透明、遮罩失效 | ⚠️ 已关闭 |
| [#7228](https://github.com/agentscope-ai/QwenPaw/issues/7228) | 应用市场已安装应用悬停仍显示"安装"按钮 | ⚠️ 已关闭 |
| [#7634](https://github.com/agentscope-ai/QwenPaw/issues/7634) | ClawHub 同名技能安装失败 | ✅ PR #764

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报

**日期**: 2026-09-10  
**数据周期**: 过去 24 小时

---

## 1. 今日速览

ZeroClaw 今日社区活跃度处于高位，Issues 与 PRs 双线高负载运行：32 条 Issue 更新（其中 29 条新开/活跃，3 条关闭）、50 条 PR 更新（49 条待合并，仅 1 条完成合并/关闭）。讨论焦点高度集中在**架构级 RFC** 与**Anthropic / 兼容协议的成本与缓存**相关问题。无新版本发布。从 PR 合并比（1/50）来看，维护者审阅积压压力较大，建议优先关注带 `needs-maintainer-review` 与 `risk:high` 标签的 PR。

---

## 2. 版本发布

今日无新版本发布。当前 `v0.8.5` 仍为可获取的最新版本（参考 Issue [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) 中的版本字段）。

---

## 3. 项目进展

### 已合并 / 关闭

虽然整体合并量较小，但今日**关闭的 3 条 Issues 均聚焦 ZeroCode 的侧边栏重构**，形成完整的串联链路：

| Issue | 标题 | 价值 |
|---|---|---|
| [#9729](https://github.com/zeroclaw-labs/zeroclaw/issues/9729) | zerocode: track multiple concurrent live sessions per chat pane | 为侧边栏提供多会话底层数据 |
| [#9730](https://github.com/zeroclaw-labs/zeroclaw/issues/9730) | zerocode: agent sidebar with status dots, add-picker, and click-to-switch | 实现侧边栏 UI 与切换交互 |
| [#9731](https://github.com/zeroclaw-labs/zeroclaw/issues/9731) | zerocode: move Quickstart from the mode bar into the sidebar | 将 Quickstart 入口迁移到侧边栏 |

三者是父 Issue [#9727](https://github.com/zeroclaw-labs/zeroclaw) 拆分出的子任务，统一收尾意味着 ZeroCode 的多会话与导航重构向前推进了一大步，**侧边栏作为 Agent 入口的形态基本定型**。

### 待合并 PR 中的关键推进方向

- **沙箱策略规范化**：PR [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821)（rarean）提出 `SandboxPolicyConfig` 规范模型，关联 RFC [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)，是沙箱分层的核心实现。
- **Web 入口流式输出**：PR [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) 为 `POST /webhook` 增加 SSE 流式响应，保留 JSON 兼容性。
- **共享工作区权限收紧**：PR [#10308](https://github.com/zeroclaw-labs/zeroclaw/pull/10308) 引入默认拒绝的 `can_use_shared_workspace` per-agent 开关。
- **OpenAI 兼容端点修复**：PR [#10687](https://github.com/zeroclaw-labs/zeroclaw/pull/10687) 与 [#10686](https://github.com/zeroclaw-labs/zeroclaw/pull/10686) 分别修复自定义 OpenAI 兼容端点工具调用默认值与 V2 → V3 配置迁移遗漏问题。

---

## 4. 社区热点

按评论数排序的今日 / 近期讨论焦点：

| 排名 | 编号 | 标题 | 评论数 |
|---|---|---|---|
| 1 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | RFC: Runtime-owned conversation sessions and transport surface adapters | 36 |
| 2 | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) | RFC: Granular sandbox policy - filesystem restrictions | 29 |
| 2 | [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) | RFC: Unified file and attachment architecture for conversation surfaces | 29 |
| 4 | [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) | RFC: Make wire protocol first-class in provider construction and onboarding | 19 |
| 5 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) | Tracker: Maintainer decision queue for RFCs and design issues | 15 |
| 6 | [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | RFC: Composable WASM plugin runtime architecture | 12 |
| 7 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | RFC: Simplify RFC voting by removing mandatory discussion windows | 7 |
| 7 | [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) | RFC: Append-only session event history, deterministic state replay | 7 |

**诉求分析**：今日热点的核心议题是**架构层的"统一化"与"流程治理"**。

- **统一化**诉求（#9487、#9488、#8396、#10076、#10526）：社区与维护者都在试图将原本散落在 channels、tools、provider、runtime 中的职责收敛到一个 first-class 的抽象上——会话生命周期、文件/附件、wire protocol、WASM 插件、会话历史事件——以减少漂移。
- **流程治理**诉求（#8692、#10549）：RFC 数量膨胀使维护者决策队列出现拥堵，#10549 直接提议**取消强制讨论窗口**，认为定时器在实践中并未提高审阅质量，反而延迟了关键决策。这两项与 [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487)、[#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488) 已多次出现 "Revision N" 的现象互为印证——旧投票快照被新草案替代，治理成本可见。

---

## 5. Bug 与稳定性

按严重程度从高到低排列（基于 `priority` 与 `risk` 标签 + 业务影响）：

### P1 / High Risk

| 编号 | 标题 | 组件 | 关联 Fix |
|---|---|---|---|
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | anthropic provider reports $0.00 spend，daily/monthly budget caps can never fire | provider / cost | 暂无 PR |
| [#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) | ZeroCode ACP transcript drops assistant text emitted before a tool call | zerocode / ACP | 暂无 PR |

**重点关注 #9816**：Anthropic provider 所有 usage 记录写入 `cost_usd: 0.0`，导致 `zeroclaw status` 显示始终为 `$0.0000`，更严重的是日/月预算上限因比较逻辑失效而**永远无法触发**。这是一个静默、可被滥用为"突破预算"的稳定性与成本治理双重问题。

### P2 / High Risk

| 编号 | 标题 | 组件 | 关联 Fix |
|---|---|---|---|
| [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) | cost ledger prices cache writes at the plain input rate | provider / cost | 暂无 PR |
| [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) | OAuth system-prefix cache marker 低于 Anthropic 最小长度并消耗 breakpoint | provider / anthropic | 暂无 PR |
| [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) | Pre-output stream failure skips advertised non-streaming fallback | provider | 暂无 PR |
| [#10625](https://github.com/zeroclaw-labs/zeroclaw/issues/10625) | `[media attachment]` 占位符在非视觉模型场景下被发送给用户 | channel | 暂无 PR |
| [#10690](https://github.com/zeroclaw-labs/zeroclaw/issues/10690) | Integrations 页 "Configure" 链接 slugify 显示名导致 404 | web | 暂无 PR |
| [#10721](https://github.com/zeroclaw-labs/zeroclaw/issues/10721) | `knowledge.db_path` 波浪号扩展是全局替换而非 home 前缀，knowledge tool 被静默丢弃 | tool / memory | 暂无 PR |

### P2 / Medium Risk

| 编号 | 标题 | 组件 | 关联 Fix |
|---|---|---|---|
| [#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) | `zeroclaw service logs` 在 macOS / Windows / OpenRC 健康情况下无输出 | daemon | 暂无 PR |

### P2 / High Risk（已有 Fix PR）

| 编号 | 标题 | Fix PR |
|---|---|---|
| [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) | `process_line` 在受限 Windows 线程栈上栈溢出 | PR [#10735](https://github.com/zeroclaw-labs/zeroclaw/pull/10735)（同日提交，XS 体积） |

**安全告警**：

- [#10728](https://github.com/zeroclaw-labs/zeroclaw/issues/10728) `ci: npm audit failed — 2026-09-09`：发现 `js-yaml` 高危漏洞（间接依赖）。建议跟进升级路径。

---

## 6. 功能请求与路线图信号

按"实现可能性 / 信号强度"排序：

### 高确定性（已有 RFC + 关联 PR）

| 需求 | 关联 Issue / PR | 路线图状态 |
|---|---|---|
| 沙箱策略规范化（filesystem 粒度） | RFC [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) + PR [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) | 已在 review，进度较高 |
| Webhook 流式响应 | PR [#10450](https://github.com/zeroclaw-labs/zeroclaw/pull/10450) | 等待 maintainer review |
| Anthropic 1 小时 prompt-cache TTL | [#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663) | 已有明确目标函数（`crates/zeroclaw-providers/src/anthropic.rs` ~L441），实现成本低 |
| WASM 可组合插件 | RFC [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) | 架构草案，路径清晰 |
| ZeroCode 子代理活动 + 工具结果展开 | [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | 状态 `accepted`，待实现 |
| ZeroCode 结构化工具输入可读化 | [#10725](https://github.com/zeroclaw-labs/zeroclaw/issues/10725) | 新开 issue，待 triage |
| OpenAI Responses 推理状态跨调用路径保留 | [#10706](https://github.com/zeroclaw-labs/zeroclaw/issues/10706) | 状态 `accepted` |

### 中等确定性（RFC 讨论中）

- **Append-only 会话事件历史 + 确定性状态回放 + 派生 Agent 流**：RFC [#10526](https://github.com/zeroclaw-labs/zeroclaw/issues/10526) 已被 [#10076](https://github.com/zeroclaw-labs/zeroclaw/issues/10076) 显式指定为会话历史的"唯一权威"，是 ZeroClaw 状态可重现能力的核心。
- **统一文件 / 附件架构**：RFC [#9488](https://github.com/zeroclaw-labs/zeroclaw/issues/9488)（Revision 10）。
- **Wire protocol 一等公民**：RFC [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396)，按 FND-003 Rev. 15 治理。

### 探索性

- **家庭级边缘 Mesh（pull workers + 签名回执）**：RFC [#10360](https://github.com/zeroclaw-labs/zeroclaw/issues/10360)，`needs-author-action`，仍处于早期。
- **Gateway / channels 复用 heartbeat worker 的 MCP-registry 缓存模式**：[#10346](https://github.com/zeroclaw-labs/zeroclaw/issues/10346)。

---

## 7. 用户反馈摘要

从 Issue 描述与评论中可提炼的**真实使用痛点**：

1. **成本治理不可信**：[#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) 与 [#10699](https://github.com/zeroclaw-labs/zeroclaw/issues/10699) 揭示用户对"看到真实账单"的诉求——无论是 Anthropic 直连还是兼容提供方，cache 写入 token 与缓存命中率都未被准确计费，**`zeroclaw status` 的可观测性数据存在系统性失真**。

2. **多模型协作的成本优化受阻**：用户希望对 Anthropic prompt-cache TTL 进行配置（[#10663](https://github.com/zeroclaw-labs/zeroclaw/issues/10663)），但目前被硬编码为 5 分钟 ephemeral 模式；同时 [#10662](https://github.com/zeroclaw-labs/zeroclaw/issues/10662) 暴露 OAuth 路径下 system-prefix 缓存标记消耗了宝贵的 breakpoint 槽位——**说明重度用户对缓存行为有明确预期，但当前实现并未提供调优点**。

3. **多会话 UX 是真实需求**：今日关闭的三连 Issues（#9729 / #9730 / #9731）背后是用户希望在单一 ZeroCode 实例中同时跟踪多个 Chat / Code 会话，**模式栏已无法承载**。

4. **流式输出的可靠性问题**：[#10697](https://github.com/zeroclaw-labs/zeroclaw/issues/10697) 与 [#10736](https://github.com/zeroclaw-labs/zeroclaw/issues/10736) 都集中在流式路径——用户在工具调用前后的 assistant 内容丢失，以及流式失败后承诺的非流式回退未实际生效，反映出**流式优先策略在边界场景下的体验缺陷**。

5. **跨平台支持不足**：[#10731](https://github.com/zeroclaw-labs/zeroclaw/issues/10731) 与 [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) 同时出现在 macOS / Windows 平台——日志查看与

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*