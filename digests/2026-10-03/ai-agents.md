# OpenClaw 生态日报 2026-10-03

> Issues: 475 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-03 03:18 UTC

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

# OpenClaw 项目动态日报 · 2026-10-03

---

## 1. 今日速览

OpenClaw 在 2026-10-03 进入一个"修复 + 重构双线推进"的阶段：过去 24 小时共发生 **475 条 Issue 更新**（新开/活跃 322，已关闭 153）与 **500 条 PR 更新**（待合并 294，已合并/关闭 206），活跃度显著高于日常水平。新发布的 **v2026.8.35** 为 gateway-only 的 `extended-stable`（等价 LTS）版本，专注于为生产环境提供长期安全与可靠性补丁。社区讨论焦点集中在 **Gateway 稳定性、SQLite 数据库管理、Realtime 语音/MCP/Codex 等子系统的资源回收**，多个 P0 级别的 crash-loop 问题在近几日内得到关闭，但 Windows 长会话、prepared-model-catalog 内存泄漏以及 plugin-captures 临时目录累积等老问题仍待根治。整体而言，项目处于"密集修复期 + 结构性去重（deslop）重构"的并行阶段，工程活跃度高，但 backlog 偏长，需关注维护者可持续投入。

---

## 2. 版本发布

### v2026.8.35 — Gateway-only Extended-Stable Release

- **性质**：等价 LTS，仅 gateway 组件；面向长期生产部署
- **基础线**：2026 年 8 月底的 OpenClaw 主线代码
- **增量内容**：
  - 关键安全更新（critical security fixes）
  - 可靠性与性能修复
  - 新模型支持（new model support）
- **链接**：[openclaw/openclaw Release v2026.8.35](https://github.com/openclaw/openclaw)
- **迁移注意**：
  - 仅 gateway 更新，CLI / Agent / Web UI 等组件保持原有版本节奏
  - 已部署 2026.9.x 的用户可继续留在快速通道；新部署或要求稳定性的生产环境建议固定到 v2026.8.35
  - 由于主线已演进到 2026.9.7，本 LTS 不会包含 9 月之后的任何新功能（如 incognito actor、worktree routing 2/4 等）

---

## 3. 项目进展

### 已关闭的关键 Issue（节选）

| Issue | 主题 | 严重度 | 影响 |
|---|---|---|---|
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server 30s init 超时触发 unhandled promise rejection，击垮整个 Gateway | P0 / 🦞 | crash-loop，已通过 `clawsweeper:fix-shape-clear` 标签标记 fix 形状清晰 |
| [#159514](https://github.com/openclaw/openclaw/issues/159514) | 2026.9.6/9.7 catalog worker 在每次请求都重建发现注册表，~8 MB/请求的 ES module 不释放 | P0 / 🦞 | crash-loop（memory） |
| [#161953](https://github.com/openclaw/openclaw/issues/161953) | Windows `sessions.create` 确定性失败 `\\?\` 路径泄漏到 publication guard | P0 / 🦞 | ux-release-blocker |
| [#108182](https://github.com/openclaw/openclaw/issues/108182) | 2026.7.1 Control UI 回归：Skill Proposals / Dreaming 页面丢失 | P1 | ux-friction |
| [#111519](https://github.com/openclaw/openclaw/issues/111519) | 2026.7.2-beta.3 Telegram DM 回复在 stale DM-scope 清理后丢失 ownership | P1 / 🦞 | message-loss |
| [#96857](https://github.com/openclaw/openclaw/issues/96857) | 普通 tool 文本输出在 agent 上下文被替换为 `(see attached image)` 占位符 | – | bug |
| [#84242](https://github.com/openclaw/openclaw/issues/84242) | `@openclaw/memory-lancedb` 注册 `memory_store` 但未暴露给 agent 工具面 | P2 | session-state |

> 注：项目使用 `clawsweeper` 自动化工单分类机器人，部分"关闭"由机器人基于修复形状、来源复现、合并队列等标签触发，并不完全等同于"已发版修复"。社区解读时需结合 commit 与 release notes 二次确认。

### 已合并/关闭的 PR（结构性重构系列 — steipete 主导的 "deslop"）

今日有大量以 `refactor(...): deslop ...` 命名的 PR 进入待合并或关闭流程，目标都是 **消除单层转发包装、合并重复投影、还原已有 canonical owner**：

| PR | 范围 | 状态 |
|---|---|---|
| [#163990](https://github.com/openclaw/openclaw/pull/163990) | `refactor(config)` 去重 config | OPEN，XL，security-sensitive |
| [#163960](https://github.com/openclaw/openclaw/openclaw/pull/163960) | `refactor(plugins)` 去重 plugins/channels/config | OPEN，等待作者 |
| [#163996](https://github.com/openclaw/openclaw/pull/163996) | `refactor(agents)` 去重 session/subagent plumbing | OPEN，security-sensitive |
| [#163983](https://github.com/openclaw/openclaw/pull/163983) | `refactor(meetings)` 去重 meetings + speech（Google Meet / FaceTime / Zoom / Teams / Slack Huddles 等） | OPEN，XL |
| [#163934](https://github.com/openclaw/openclaw/pull/163934) | `refactor(llm)` 去重 provider runtime + catalog | **CLOSED** ✅ |
| [#163853](https://github.com/openclaw/openclaw/pull/163853) | `feat(gateway)` 路由 1/4：same-root 本地状态变更走 live owner | **CLOSED** ✅ |
| [#163376](https://github.com/openclaw/openclaw/pull/163376) | `refactor(config)` 将 legacy 路径发现迁入 Doctor | OPEN，XL |
| [#163535](https://github.com/openclaw/openclaw/pull/163535) | `refactor(channels)` 强制 canonical 私网设置 | OPEN，🚨 compatibility |
| [#162759](https://github.com/openclaw/openclaw/pull/162759) | `fix(webhooks)` 保留回调的同时下线隐式端口 | OPEN，🚨 message-delivery |

### Gateway 路由栈系列（4 阶段）

| 阶段 | PR | 状态 |
|---|---|---|
| 1/4 同根本地状态变更走 live owner | [#163853](https://github.com/openclaw/openclaw/pull/163853) | CLOSED |
| 2/4 worktree CLI 变更走 live owner | [#163953](https://github.com/openclaw/openclaw/pull/163953) | OPEN |
| 3/4 | – | – |
| 4/4 | – | – |

**进展小结**：今日项目在 **Gateway 进程权威性 / 状态所有权** 这条主线上推进显著（routing 1/4 已落地），同时为后续 worktree 操作可观测性与回滚一致性打下基础；`deslop` 重构未引入用户可见行为变化，但为后续修复工作的最小 patch surface 创造了条件。

---

## 4. 社区热点

按评论数排序的活跃议题（均为 **仍然 OPEN**，代表社区关注但尚未根治）：

| Issue | 评论 | 主题 | 标签 |
|---|---|---|---|
| [#143524](https://github.com/openclaw/openclaw/issues/143524) | **104** | Agent SQLite WAL 在 Windows 上无界增长到 1.4–2.8 GB，阻塞 Gateway 启动 | 🦐 / P0 / crash-loop / ux-release-blocker |
| [#116201](https://github.com/openclaw/openclaw/issues/116201) | **59** | Realtime 语音会话保留无界的 provider 与 consult 状态 | 🐚 / P2 / session-state |
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | **21** | Embedded prompt cache 跨 room-event / policy / Responses 边界时中断 | 🦞 / P2 / security / 需 product-decision |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | **17** | OpenClaw 泄漏未被 reap 的 hook/tool 子进程，形成 zombie 累积 | 🦪 / P1 / crash-loop |
| [#38327](https://github.com/openclaw/openclaw/issues/38327) | **17** | 2026.3.2 上 google-vertex/gemini-

---

## 横向生态对比

# 个人 AI 助手与自主智能体开源生态 · 横向对比分析
**报告日期：2026-10-03**

---

## 1. 生态全景

2026-10-03 当日，个人 AI 助手/自主智能体开源生态呈现 **"高活跃、强分化、修复主导"** 的整体态势：纳入观察的 13 个项目中，4 个有实际代码/社区推进（OpenClaw、ZeroClaw、NanoClaw、Hermes Agent），3 个处于修复密度高但版本停滞阶段（NanoBot、CoPaw/QwenPaw、PicoClaw），1 个进入维护滞后（LobertAI），5 个 24 小时无活动（NullClaw、IronClaw、TinyClaw、Moltis、ZeptoClaw）。**没有项目在这一天发布稳定版本**，仅有 OpenClaw 发布了 `v2026.8.35` 的 gateway-only LTS，表明生态普遍处于"密集合并前的静默期"。从关注焦点看，**Windows 平台短板、上下文/会话生命周期管理、Provider 一致性、自更新链路安全、沉默失败的可观测性** 五大议题在多个项目中独立浮现，反映这些已成为行业的共性痛点。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issues | 24h PRs | Release | 健康度 | 当前阶段 |
|---|---|---|---|---|---|
| **OpenClaw** | 475 (322/153) | 500 (294/206) | ✅ v2026.8.35 LTS | ⭐⭐⭐⭐½ | 修复+结构性 deslop 重构并行 |
| **ZeroClaw** | 50 (47/3) | 50 (50/0) | ❌ | ⭐⭐⭐ | v0.8.6 发布门禁清扫中，PR 全部待合 |
| **NanoClaw** | 50 (33/17) | 30 (24/6) | ❌ | ⭐⭐⭐⭐ | 高活跃工程化清理期 |
| **Hermes Agent** | 50 (38/12) | 50 (43/7) | ❌ | ⭐⭐⭐ | 中等偏紧，Bot 协作愿景主导 |
| **NanoBot** | 6 | 37 (8/29) | ❌ | ⭐⭐⭐½ | 密集小步快跑，文档一致性差 |
| **QwenPaw / CoPaw** | 13 (13/0) | 12 (12/0) | ❌ | ⭐⭐⭐ | V2.2.2 Beta 收尾，issue 零关闭 |
| **PicoClaw** | 3 | 4 (0/2) | ❌ | ⭐⭐ | 社区参与衰减，stale 标记密集 |
| **LobsterAI** | 6 (全 stale) | 3 (1 OPEN / 2 关闭未合) | ❌ | ⭐½ | 维护响应滞后，安全债累积 |
| **NullClaw / IronClaw / TinyClaw / Moltis / ZeptoClaw** | 0 | 0 | ❌ | – | 24h 无活动 |

> 备注：Issues 列格式为 "总更新（活跃/关闭）"；PRs 列格式为 "总更新（待合并/已合并关闭）"。

**关键观察**：
- OpenClaw 在绝对活跃度上量级领先（Issues/PR 均为其他项目的 10x），但 backlog 也最长；
- ZeroClaw 与 NanoClaw 是唯二在 Issues/PR 两端都达到 30+ 活跃度的次梯队项目；
- NanoBot 出现 "Issue 少但 PR 多" 的不对称分布（6 vs 37），说明该仓库以工程化修复合入为主，非用户反馈驱动；
- 半数项目（5/13）当日零活动，说明生态呈现明显的头部聚集效应。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对照 |
|---|---|---|
| **生态广度** | 量级绝对领先，单日 Issues/PR 均超过次梯队 10x | NanoClaw/Hermes Agent 单日均约 50 |
| **版本节奏** | 主线 + Extended-Stable 双通道 | NanoBot/NanoClaw 修复密集但版本停滞 |
| **工程方法学** | 系统化的 deslop 重构 + Gateway 路由栈 4 阶段演进 | 多为零散 PR 修复 |
| **架构重心** | Gateway 进程权威性与状态所有权 | Hermes Agent 偏 Bot 协作；NanoClaw 偏 container/lifecycle |
| **社区成熟度** | 拥有 `clawsweeper` 自动化工单分类机器人、清晰的标签体系 | 大多依赖人工 triage |
| **维护压力** | backlog 偏长，需关注维护者可持续投入（steipete 单点驱动） | ZeroClaw 同样面临 `Audacity88` 单点风险 |

**核心差异点**：OpenClaw 的领先不仅在活跃度数字，更在于其将**重构工作结构化为"deslop"系列**并明确推进 Gateway 路由栈的 4 阶段路线图（1/4 已 CLOSED），这种 **"路线图透明 + 分阶段合并"** 的工程治理在其他项目中罕见。其他头部项目（如 ZeroClaw）虽然提交量高，但合并吞吐明显跟不上贡献节奏，处于"高活跃 + 推进滞后"状态。

---

## 4. 共同关注的技术方向

以下议题在多项目中独立浮现，代表生态的共性需求：

### 4.1 Windows 平台兼容性短板
- **OpenClaw**：sessions.create 确定性失败 (`\\?\` 路径泄漏)
- **Hermes Agent**：Gateway 事件循环死锁 (#41219)、update cleanup kills unit-less serve (#131864)、Dashboard CLOSE_WAIT socket 泄漏 (#62175)、Ctrl+C 强制退出
- **ZeroClaw**：Windows 命名管道身份校验 (#11325)
- **影响面**：CLI/Dashboard/Service 三层入口在 Windows 均存在结构性缺陷

### 4.2 上下文压缩与历史可逆性
- **OpenClaw**：Embedded prompt cache 跨边界中断 (#102175)、Realtime 语音会话无界保留 (#116201)
- **QwenPaw/CoPaw**：#7884 "压缩后历史无法全量加载"（8 评论、情绪激烈，"知道这个体验多差么"）
- **NanoClaw**：PreCompact OOM crash loop (#3716)，全量会话历史无轮转

### 4.3 沉默失败 / 错误可观测性
- **Hermes Agent**：启动时插件随机丢失仅 WARNING (#123926)、Telegram channel_post 漏处理
- **NanoBot**：WebUI sidebar state 静默回滚至默认 (#6008)
- **NanoClaw**：pending `system` 行饥饿正常入站队列，agent 静默停止响应 (#3568)
- **OpenClaw**：catalog worker 内存不释放表现为 silent leak (#159514)

### 4.4 自更新 / 升级链路安全
- **NanoClaw**：升级回滚 EACCES 数据丢失 (#4003)、tsx/esbuild 升级 cutover 崩溃 (#4004)
- **Hermes Agent**：Windows update cleanup 无 respawn (#131864)
- **OpenClaw**：`/update` 通道化为 release-level 设计

### 4.5 Provider 一致性 / 国产模型适配
- **NanoBot**：reasoningEffort 影响 38 个 openai_compat provider 静默丢 temperature (#6002)
- **Hermes Agent**：MiMo reasoning_content 多轮丢失 (#24443)、MiniMax gateway async runtime 失败 (#47658)、StepFun 模型选择器缺失 (#41147)
- **PicoClaw**：llama.cpp / 自定义 provider URL 配置错误
- **ZeroClaw**：同上 (#11296)

### 4.6 渠道适配器完整性
- **NanoClaw**：`channels` 分支合入 main（Discord/Slack/Teams/WhatsApp，463 commits）
- **QwenPaw**：飞书回复 Markdown 渲染丢失、view_audio 多模态补齐
- **Hermes Agent**：Feishu document-comment scope 绑定
- **NanoBot**：QQ 引用消息丢失 (#6006)

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 架构关键差异 |
|---|---|---|---|
| **OpenClaw** | Gateway 权威 + 多渠道 + Agent 子系统 | 全场景生产部署 | 双通道版本（主线/extended-stable），bot-as-process 模型 |
| **ZeroClaw** | ZeroCode + TUI + 插件市场 + 进程沙箱 | 终端原生开发者 | RFC 治理驱动，A2A 协议 crate、RAG、子进程内存隔离 |
| **NanoClaw** | 轻量 OpenClaw 替代 + 容器化部署 | 个人/家庭边缘 | container-centric lifecycle，channels 适配器重构中 |
| **Hermes Agent** | 跨网关 Bot 协作（愿景驱动） | 分布式 agent 探索者 | Bot-as-owner 模型，peer groups + SSH gateway owners |
| **QwenPaw** | 多模态工具（音频）+ 移动端 UI + Qwen 生态 | Qwen/通义用户 | Tauri 桌面 + Web 控制台双端，V2.2.2 Beta 收尾 |
| **NanoBot** | Provider 兼容层 + cron/exec 基础设施 | 多模型用户 | OpenAI 兼容网关聚合，46 个 openai_compat providers |
| **PicoClaw** | 嵌入式/小尺寸场景 | 边缘/IoT 部署 | 轻量 Web UI，前端性能瓶颈明显 |
| **LobsterAI** | Electron 桌面 + 飞书 IM + SQLite 本地 | 中文用户 / 个人桌面 | 商业公司维护（网易有道），安全债累积 |

**架构分野**：
- **进程中心 vs 容器中心**：OpenClaw/Hermes/ZeroClaw 偏 bot-as-process，NanoClaw 偏 container lifecycle；
- **治理驱动 vs 修复驱动**：ZeroClaw/OpenClaw 有 RFC/deslop 等结构化治理，NanoBot/LobsterAI 偏被动响应；
- **广度优先 vs 深度优先**：NanoBot 广接 46 个 provider，CoPaw 深度打磨多模态工具。

---

## 6. 社区热度与成熟度分层

### 第一梯队 · 快速迭代期（工程治理结构化）
- **OpenClaw**：deslop 重构 + Gateway 路由栈路线图，v2026.8.35 LTS 同步推进
- **ZeroClaw**：v0.8.6 release gate 清扫中，RFC（A2A、RAG）进入设计

### 第二梯队 · 质量巩固期（修复密度高、版本待发）
- **NanoClaw**：50 Issues + 30 PRs，但 0 release；channels 分支合入 main 是下个里程碑信号
- **

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**报告日期：2026-10-03**
**项目地址：** [HKUDS/nanobot](https://github.com/HKUDS/nanobot)

---

## 1. 今日速览

NanoBot 今日保持较高的开发活跃度，**24 小时内有 6 个 Issues 互动、37 个 PR 更新**（其中 8 个已合并/关闭、29 个待处理），未发布新版本。社区关注焦点集中在 **Provider 兼容性、WebUI/Channel 边界 bug、以及 cron/exec 等基础设施的健壮性修复**。整体看，仓库处于密集的"小步快跑"阶段，没有新版本但修复密度高，说明维护者更重视问题闭环而非功能扩张。值得关注的是，活跃贡献者 `KailBug` 与 `2gg-bit` 是当前修复 PR 的主要推手，分别覆盖**英美社区与中文社区**两端的问题。

---

## 2. 版本发布

⚠️ **今日无新版本发布。** 最近一次发布停留在旧版本，最新 v0.3.5 仍存在与 GitHub Copilot gpt-6 系列不兼容的问题（见 [#5898](https://github.com/HKUDS/nanobot/issues/5898)），建议关注后续 v0.3.6 或更新版本是否纳入以下 PR 的修复内容。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| PR | 标题 | 作者 | 类型 | 优先级 |
|---|---|---|---|---|
| [#5933](https://github.com/HKUDS/nanobot/pull/5933) | fix(cron): preserve pending actions until store save succeeds | yu-xin-c | bugfix | **P0** |
| [#5995](https://github.com/HKUDS/nanobot/pull/5995) | fix(agent): clear stale failure state when resuming runner iterations | KailBug | regression fix | P2 |
| [#5918](https://github.com/HKUDS/nanobot/pull/5918) | fix(tools): preserve valid JSON Schema union arguments | KailBug | bugfix | P2 |
| [#5997](https://github.com/HKUDS/nanobot/pull/5997) | fix(linear): reject stale member access updates after reauthorization | KDB-Wind | security fix | P2 |
| [#5957](https://github.com/HKUDS/nanobot/pull/5957) | fix(exec): enforce session hard timeouts without polling | KailBug | bugfix | P2 |
| [#5994](https://github.com/HKUDS/nanobot/pull/5994) | fix(agent): preserve explicitly empty tool registries | KailBug | security fix | P2 |

**关键推进方向：**
- 🛡️ **持久化安全闭环：** [#5933](https://github.com/HKUDS/nanobot/pull/5933)（P0）修复 cron 服务在写盘失败时丢失待处理 action 的数据安全问题，是今日唯一 P0 合入项。
- 🔐 **会话与权限硬化：** [#5997](https://github.com/HKUDS/nanobot/pull/5997)、[#5994](https://github.com/HKUDS/nanobot/pull/5994) 解决了 workspace 重新授权后的过期写入、显式禁用工具被绕过的安全隐患。
- ⚙️ **执行可靠性：** [#5957](https://github.com/HKUDS/nanobot/pull/5957) 终结了 exec 会话"超时静默"问题；[#5995](https://github.com/HKUDS/nanobot/pull/5995) 修复延迟消息到来时 runner 误判为失败的状态污染。
- 🧰 **工具协议兼容性：** [#5918](https://github.com/HKUDS/nanobot/pull/5918) 让 JSON Schema 多类型数组（如 `["integer", "string"]`）按规范处理，不再被错误强转。

> 项目整体在「**让 Agent 更难误判、更难丢数据、更难越权**」的方向上稳步推进，**未引入新功能，但健壮性层面有明显抬升**。

---

## 4. 社区热点

### 🔥 最活跃 Issue（评论最多）
- **[#5898](https://github.com/HKUDS/nanobot/issues/5898)** — *gpt-6 model series through Github Copilot*（4 条评论，创建于 9-24）
  - 用户 `gqcao` 报告 v0.3.5 通过 GitHub Copilot 调用 OpenAI gpt-6 系列时报错 *"Mode provider request failed"*。该 Issue 已经存在近 10 天，仍未获得官方回应，是当前社区曝光度最高的兼容性 Bug。

### 📌 关注度上升的新 Issue
- **[#6002](https://github.com/HKUDS/nanobot/issues/6002)** — `reasoningEffort` silently drops `temperature` for all 38 `openai_compat` providers
  - `GZY-SUPER-HACKER` 指出：设置 `reasoningEffort` 后，38 个 `openai_compat` provider（占总数 46 个的 83%）全部不再发送 `temperature` 参数，**远超原本只为 o1/o3/o4 模型设计这一规则的初衷**。这是潜在影响范围最广的回归。
- **[#6000](https://github.com/HKUDS/nanobot/issues/6000)** — sendProgress 默认 true 但实际只产出一行
  - 用户认为 `tool_contract.md` 自相矛盾：开关开着但根本没有内容可发。同作者已提交对应的修复 PR [#6001](https://github.com/HKUDS/nanobot/pull/6001)。
- **[#6006](https://github.com/HKUDS/nanobot/issues/6006)** — QQ 引用消息丢失
  - 影响 QQ C2C 和群聊场景，被引用的原始消息内容无法到达 Agent，依赖引用上下文的功能直接失灵。

**社区诉求分析：** 用户希望 NanoBot 在**多 Provider 行为一致性**、**Channel 协议完整性**、**文档与代码不自相矛盾** 这三方面有更严格的保障，而非追求新功能。

---

## 5. Bug 与稳定性

### 🔴 高严重度（已有 P0/P2 fix PR 跟进）

| 严重度 | 标题 | Issue | 状态 |
|---|---|---|---|
| **P0** | cron 持久化丢失 pending actions | [#5932](https://github.com/HKUDS/nanobot/issues/5932) | ✅ 已关闭，#5933 已合并 |
| **P2 / 高影响** | reasoningEffort 让 38 个 provider 静默丢 temperature | [#6002](https://github.com/HKUDS/nanobot/issues/6002) | 🟡 仅报告，无对应 fix PR |
| **P2** | Codex 图片生成 SSE 解析提前终止 | [#6011](https://github.com/HKUDS/nanobot/pull/6011) | 🟠 PR 待合并 |
| **P2** | Linear 工作区重授权后过期写入回放 | [#5997](https://github.com/HKUDS/nanobot/pull/5997) | ✅ 已合并 |
| **P2** | Exec 会话硬超时不可靠 | [#5957](https://github.com/HKUDS/nanobot/pull/5957) | ✅ 已合并 |
| **P2** | Slack 带按钮消息截断 3000 字符 | [#5961](https://github.com/HKUDS/nanobot/pull/5961) | 🟠 PR 待合并 |

### 🟡 中等严重度（新报告，暂无 PR）
- **[#6008](https://github.com/HKUDS/nanobot/issues/6008)** — WebUI sidebar state 在初次获取失败后被静默回滚至默认，用户后续操作无任何错误提示；这是一个**静默数据丢失**问题。
- **[#6006](https://github.com/HKUDS/nanobot/issues/6006)** — QQ 引用消息丢失。
- **[#6000](https://github.com/HKUDS/nanobot/issues/6000)** — `sendProgress` 配置与实际行为矛盾。

### 🟢 长期遗留
- **[#5898](https://github.com/HKUDS/nanobot/issues/5898)** — v0.3.5 不支持 GitHub Copilot 下的 gpt-6 系列，**已 9 天未修复**，拖到下一个版本可能性高。

**稳定性画像：** 今日报告的 Bug 多为**边界条件/状态污染/协议一致性**类型，而非崩溃类硬错误。系统整体健壮，但细节补丁密度高，反映真实使用场景的复杂性。

---

## 6. 功能请求与路线图信号

### 明确的新功能 PR
- **[#5845](https://github.com/HKUDS/nanobot/pull/5845)** — *Add Opper as a built-in provider*（作者 Felixkw12，仍 OPEN）
  - 新增一个 OpenAI 兼容的网关 Provider（Eden AI / OrcaRouter 风格），使用 `OPPER_API_KEY`。这与 NanoBot 已有的「网关聚合型 Provider」路线一致，**合并门槛较低**，可能纳入下个版本。

### 隐含的功能期望（来自 Issue）
- 来自 [#6002](https://github.com/HKUDS/nanobot/issues/6002)：用户期望「**per-provider reasoningEffort 行为可配置**」，而非一刀切。
- 来自 [#6000](https://github.com/HKUDS/nanobot/issues/6000)：用户期望「**文档与默认行为保持一致**」——配置项应名副其实。
- 来自 [#6006](https://github.com/HKUDS/nanobot/issues/6006)：QQ 用户期望「**完整的消息引用上下文**」，这是 Channel 层的功能性补全请求。

**路线图信号：** 短期内不会有大型功能 PR，重点仍是修复与 Provider 完善；Opper Provider 是下一版本最有可能新增的"功能项"。

---

## 7. 用户反馈摘要

从 Issues 评论与描述中可提炼以下真实痛点：

- 😤 **Provider 不一致令人困惑：** *"Setting `reasoningEffort` … makes nanobot stop sending `temperature` — for every provider"*（#6002）——用户对"为什么换了一个模型，原本能用的 temperature 突然无效"感到困惑。
- 😟 **静默错误让人失去信任：** *"The UI shows no error. Any sidebar mutation the user performs afterwards … silently re-saves the default"*（#6008）——用户在不知情的情况下数据被覆盖。
- 😩 **Channel 协议细节被忽视：** *"The agent only receives the new text. The quoted message's content never reaches it"*（#6006）——QQ 用户实际工作流被破坏。
- 😐 **文档承诺未兑现：** *"sendProgress defaults to true … behaves exactly like false"*（#6000）——配置项"形同虚设"让用户感觉被骗。
- 😕 **版本兼容性滞后：** 用户仍在为 v0.3.5 + GitHub Copilot + gpt-6 的组合挣扎（#5898），对最新模型的支持节奏不满。

**满意面：** 多项 P2 修复被快速合入（如 #5918、#5957、#5995），社区对**修复响应速度**整体正面。

---

## 8. 待处理积压（提醒维护者关注）

| Issue / PR | 主题 | 等待时长 | 风险 |
|---|---|---|---|
| [#5898](https://github.com/HKUDS/nanobot/issues/5898) | gpt-6 + GitHub Copilot 不兼容 | ~9 天 | 🔴 用户期待基础兼容性 |
| [#5845](https://github.com/HKUDS/nanobot/pull/5845) | Add Opper provider | ~12 天 | 🟡 新功能挂起 |
| [#5763](https://github.com/HKUDS/nanobot/pull/5763) | fix(api): return 400 for invalid multimodal field types | ~19 天 | 🟡 API 健壮性 |
| [#5793](https://github.com/HKUDS/nanobot/pull/5793) | fix(tools): scope recursive directory ignores to listed root | ~17 天 | 🟢 工具一致性 |
| [#6002](https://github.com/HKUDS/nanobot/issues/6002) | reasoningEffort 影响 38 个 provider | <1 天 | 🔴 影响面广，需快速响应 |
| [#6008](https://github.com/HKUDS/nanobot/issues/6008) | WebUI sidebar 静默数据丢失 | <1 天 | 🟠 静默错误，需修 |
| [#6006](https://github.com/HKUDS/nanobot/issues/6006) | QQ 引用消息丢失 | <1 天 | 🟡 Channel 完整性 |

> 💡 **维护者提示：** 今日新增的 #6002/#6008/#6006/#6000 均没有对应的修复 PR 跟进，建议**优先分配一位 reviewer**快速分流，避免形成新积压；其中 #6002 影响范围最广，最应优先处理。

---

### 📊 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐⭐⭐ | PR/Issue 更新密集，无版本停滞 |
| 修复闭环速度 | ⭐⭐⭐⭐ | P0 项当日闭环；多数 P2 PR 3-5 天内合并 |
| 社区响应 | ⭐⭐⭐ | 新增 Issue 反馈及时，老 Issue（如 #5898）有积压 |
| 文档/代码一致性 | ⭐⭐ | 出现多处配置项与行为矛盾的报告 |
| 新功能节奏 | ⭐⭐ | 暂无重大功能，但持续引入新 Provider |
| **综合** | **⭐⭐⭐½** | 修复密度高、稳健性增强；需关注文档一致性和新 Issue 分流 |

---
*本报告基于 GitHub 公开数据自动生成，所有链接均指向 HKUDS/nanobot 仓库原始页面。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-10-03

---

## 1. 今日速览

Hermes Agent 仓库今日维持高活跃度的"维护与稳定性攻坚"节奏：过去 24 小时有 **50 条 Issue 更新**（38 条活跃 / 12 条关闭）和 **50 条 PR 更新**（43 条待合并 / 7 条已合并关闭），但**无新版本发布**。今日焦点集中在四类问题：(1) Group Chat 跨网关协作的基础设施落地（[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) 的集成草稿 [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) 仍在合稿阶段）；(2) 平台/插件层的若干"沉默失败"类 Bug（启动时插件随机丢失、Telegram/F飞书 channel_post 漏处理）；(3) Windows 平台的安装/更新/Dashboard 路径回归；(4) Anthropic/OpenAI/小米 等模型的会话状态与压缩路径回归。整体健康度评估：**中等偏紧**——零版本发布 + 大量 P2 Bug 待修 + Windows 路径问题集中爆发。

---

## 2. 版本发布

**无新版本发布**。近期最近一次可见的版本基线为 v0.21.5+2168 / +2441 / +57*（散见于多条 Issue 环境字段），社区期望的"修复 Windows 更新路径 + 插件启动鲁棒性 + 压缩重读闭环"打包版本尚未成型。

---

## 3. 项目进展

过去 24 小时已关闭/合并的 PR 主要集中在**清扫类**与**平台补丁**，未涉及大型功能合并：

| 状态 | PR | 说明 |
|---|---|---|
| 已关闭 | [#131960](https://github.com/NousResearch/hermes-agent/pull/131960) — chore(contributors): map ellannjohnson for attribution | 维护者 @OutThisLife 通过手工映射解决 #109316 fork 因 noreply 邮箱未解析而被 `check-attribution` 卡住的问题，归因链路打通。 |

社区关闭的 Issue（多为 P2/P3 长期悬挂项被结案）包括：
- [#32836](https://github.com/NousResearch/hermes-agent/issues/32836)、[#32837](https://github.com/NousResearch/hermes-agent/issues/32837)、[#32838](https://github.com/NousResearch/hermes-agent/issues/32838)、[#32840](https://github.com/NousResearch/hermes-agent/issues/32840) — 移动端 TUI 缩略图/历史/转写面板系列问题（BSM0oo 报告，4 条同批关闭）
- [#53720](https://github.com/NousResearch/hermes-agent/issues/53720) — Cron tick 日志级别从 DEBUG 提升为 INFO（双调度器可见性）
- [#41147](https://github.com/NousResearch/hermes-agent/issues/41147) — StepFun `step-3.7-flash` 在 `/model` 选择器中缺失（已修复）
- [#54347](https://github.com/NousResearch/hermes-agent/issues/54347) — `search_files` 跳过空目录

**推进度判断**：今天主要是"清扫日"，实质性推进集中在 Bot 协作基础设施的草稿合并（[#98307](https://github.com/NousResearch/hermes-agent/pull/98307) 作为永久集成草稿被维护者保留）和一系列低风险 Bug 补丁入库。

---

## 4. 社区热点

### 讨论最活跃

1. **[#97681 — Let Bots collaborate across gateways](https://github.com/NousResearch/hermes-agent/issues/97681)** by @dokterdok
   - **33 条评论，4 个 👍**
   - 这是本月最核心的长期愿景 Issue：让 Hermes Bots（个人 agent）能够在不同机器、不同 owner 之间协作而无需交出控制权。当前状态停留在"集成草稿"阶段（[#98307](https://github.com/NousResearch/hermes-agent/pull/98307)），需要先分别合入 owner PR（[#97846](https://github.com/NousResearch/hermes-agent/pull/97846)、[#100016](https://github.com/NousResearch/hermes-agent/pull/100016)、[#106742](https://github.com/NousResearch/hermes-agent/pull/106742)）后再清理。
   - 今日相关 PR：[#131353 feat(groups): let remote Bots share files](https://github.com/NousResearch/hermes-agent/pull/131353)、[#130790 feat(desktop): create native peer groups and preserve SSH gateway owners](https://github.com/NousResearch/hermes-agent/pull/130790) 仍处于 draft 等待依赖合入。

2. **[#123926 — Plugins silently dropped at boot](https://github.com/NousResearch/hermes-agent/issues/123926)** by @xxbcy
   - **15 条评论** — 严重可用性问题：启动时 `_evict_modules` 在迭代 `sys.modules` 时增删键，每次启动随机丢插件，仅 `logs/errors.log` 有 WARNING，无用户可见错误。

3. **[#123347 — Group Chat hosted-room worker startup _DeadlockError](https://github.com/NousResearch/hermes-agent/issues/123347)** by @Ethan-Vex
   - **10 条评论** — systemd --user 管理下的 group chat worker 反复出现 `_frozen_importlib._DeadlockError`，根因是 `tui_gateway.server` 导入链与 `run_startup` 之间的死锁路径。

### 反应最多

- [Issue #20582 — Model picker only shows one model for custom providers](https://github.com/NousResearch/hermes-agent/issues/20582)：👍2，自定义 provider 在 `/model` 中只显示一个模型。
- [Issue #48363 — Web Dashboard 黑屏](https://github.com/NousResearch/hermes-agent/issues/48363)：👍2，UI 整体不可见但 agent 仍在工作。
- [Issue #24443 — MiMo reasoning_content 不被保留](https://github.com/NousResearch/hermes-agent/issues/24443)：👍1，新晋国产推理模型兼容性问题。

---

## 5. Bug 与稳定性

按严重程度排列（高 → 低）：

### 🔴 P0/严重（影响核心流程）
暂无新开 P0，但**#131412**（openai-codex 长会话无法压缩）现象严重：[#131412](https://github.com/NousResearch/hermes-agent/issues/131412)
- 现象：`middle_window_tokens` 保持 0，"protected tail" 吞掉所有可压缩历史，重启/手动 /compress 均无效。
- 已关联修复 PR：[#131967 fix(guardrails): reset re-read streak after real compaction](https://github.com/NousResearch/hermes-agent/pull/131967) — 闭环指向 #109683。

### 🟠 P2 关键路径
- **[#41219 — Gateway event loop deadlock on Windows after first crash](https://github.com/NousResearch/hermes-agent/issues/41219)** — Windows 上首次崩溃后 30-60 秒内确定性冻结，asyncio loop 完全停摆。**无关联 fix PR**。
- **[#131864 — Windows update cleanup kills unit-less serve/dashboard, no respawn](https://github.com/NousResearch/hermes-agent/issues/131864)** — 每次更新都退 1，"could not be auto-restarted"，复现稳定。**无关联 fix PR**。
- **[#88332 — Desktop self-update aborts on Windows](https://github.com/NousResearch/hermes-agent/issues/88332)** — 30 秒等待窗口超时，更新中止后 updater 立即重启 Desktop 不应用补丁。**无关联 fix PR**。
- **[#62175 — Dashboard leaks CLOSE_WAIT sockets](https://github.com/NousResearch/hermes-agent/issues/62175)** — 每天约 40 个，约 5 天耗尽 FD（EMFILE），即使 #18766 keepalive 修复后仍复现。**无关联 fix PR**。
- **[#123347 — Group Chat worker _DeadlockError](https://github.com/NousResearch/hermes-agent/issues/123347)** — 见上文。**无关联 fix PR**。
- **[#66110 — Dashboard HTTP server doesn't respawn after PID-recycle restart](https://github.com/NousResearch/hermes-agent/issues/66110)** — 端口 9119 永不重启。**无关联 fix PR**。
- **[#47658 — MiniMax Anthropic-compatible requests fail only in gateway async runtime](https://github.com/NousResearch/hermes-agent/issues/47658)** — 直连 OK，gateway 内 `APIConnectionError`，疑似事件循环/客户端复用问题。
- **[#123343 — httpx2==2.7.0 / httpcore2 2.7.0 命中 6 个 CVE (PYSEC-2026-3844..3849)](https://github.com/NousResearch/hermes-agent/issues/123343)** — `mcp` / `computer-use` extras 死版本号钉死，安全风险高。**无关联 fix PR**。

### 🟡 P2 体验层
- **[#42176 — /stop 命令卡死 agent](https://github.com/NousResearch/hermes-agent/issues/42176)** — 用户排队输入时 /stop 后必须重启 Desktop。**无关联 fix PR**。
- **[#131842 — Desktop chat 中相对路径 markdown 链接被 Electron window-open policy 拦截](https://github.com/NousResearch/hermes-agent/issues/131842)** — 无 PR。
- **[#24319 — 飞书回复丢失 Markdown 渲染](https://github.com/NousResearch/hermes-agent/issues/24319)** — 已有类似修复方向 [#131968 fix(feishu): bind the profile scope for document-comment events](https://github.com/NousResearch/hermes-agent/pull/131968)，但本 Issue 未被该 PR 显式关联。
- **[#20582 — Model picker 自定义 provider 只显示一个模型](https://github.com/NousResearch/hermes-agent/issues/20582)** — 无 PR。

### 🟢 P3 边角
- **[#35184 — `Path.rglob()` 不跟随 symlink，导致软链技能不可见](https://github.com/NousResearch/hermes-agent/issues/35184)** — 无 PR。
- **[#44370 — MemOS skillInjectionMode=full 但 memos_skill_get usage_count=0](https://github.com/NousResearch/hermes-agent/issues/44370)** — 无 PR。
- **[#24443 — MiMo reasoning_content 多轮丢失](https://github.com/NousResearch/hermes-agent/issues/24443)** — 无 PR。
- **[#108335 — 1Password service-account 下 `--vault` 缺失](https://github.com/NousResearch/hermes-agent/issues/108335)** — 无 PR。

### ✅ 已有 fix PR 的活跃 Bug
| Issue | 关联 PR |
|---|---|
| [#123926 插件随机丢失](https://github.com/NousResearch/hermes-agent/issues/123926) | 暂无显式 PR |
| [#131412 openai-codex 压缩失败](https://github.com/NousResearch/hermes-agent/issues/131412) | [#131967](https://github.com/NousResearch/hermes-agent/pull/131967) |
| [#41147 stepfun 模型缺失](https://github.com/NousResearch/hermes-agent/issues/41147)（已关闭） | 已合并 |
| [#53720 cron 日志级别](https://github.com/NousResearch/hermes-agent/issues/53720)（已关闭） | 已合并 |
| [#108335 1Password](https://github.com/NousResearch/hermes-agent/issues/108335) | [#110759](https://github.com/NousResearch/hermes-agent/issues/110759)（feature 方向，与 vault 后端扩展相关） |
| [#41219 Windows gateway 死锁](https://github.com/NousResearch/hermes-agent/issues/41219) | 暂无 |
| [#131864 Windows update cleanup](https://github.com/NousResearch/hermes-agent/issues/131864) | 暂无 |
| [#88332 Desktop self-update](https://github.com/NousResearch/hermes-agent/issues/88332) | 暂无 |

> **观察**：今日 Windows 平台相关 Bug 集中爆发（#41219、#131864、#88332、#62175、#106198），但无对应 fix PR 出现，需维护者重点关注。

---

## 6. 功能请求与路线图信号

1. **[#97681 Bot 跨网关协作](https://github.com/NousResearch/hermes-agent/issues/97681)** — 路线图头号目标，已有 [#98307](https://github.com/NousResearch/hermes-agent/pull/98307) 永久集成草稿。子 PR：
   - [#130790 feat(desktop): create native peer groups and preserve SSH gateway owners](https://github.com/NousResearch/hermes-agent/pull/130790) — Desktop 原生对等组
   - [#131353 feat(groups): let remote Bots share files](https://github.com/NousResearch/hermes-agent/pull/131353) — 远程 Bot 共享文件
   - **预计随 owner PR 合入节奏分批落地**，短期不太可能整版本发布。

2. **[#110759 — Proton Pass / 自定义密码管理器 CLI 支持](https://github.com/NousResearch/hermes-agent/issues/110759)** — 当前 vault 后端硬编码 2 个，扩展接口已具备，今日 PR [#131966 feat(vault): warn when a login's username looks like a password](https://github.com/NousResearch/hermes-agent/pull/131966) 显示该模块正在被频繁改动，路线图信号强。

3. **[#126412 — Plugin Catalog: discord-rpc v1.2.4 SHA bump](https://github.com/NousResearch/hermes-agent/issues/126412)** — 插件目录维护节奏，第三方 plugin 升级到位后即可合入（按 catalog rule 5 需要第三方 maintainer ack）。

4. **[#131964 — catalog: add Chat Studio 1.1.0](https://github.com/NousResearch/hermes-agent/pull/131964)** — Hermes Desktop 的可读性自定义按钮，已提交 PR。

5. **维护者主导的方向**：
   - Anthropic 历史重放去重 ([#131970](https://github.com/NousResearch/hermes-agent/pull/131970))
   - Telegram channel_post 媒体支持 ([#131971](https://github.com/NousResearch/hermes-agent/pull/131971))
   - Gateway `busy_input_mode` 热加载 ([#131973](https://github.com/NousResearch/hermes-agent/pull/131973))
   - MCP stdio leader 退出后清理子进程 ([#131963](https://github.com/NousResearch/hermes-agent/pull/131963))

---

## 7. 用户反馈摘要

提炼自 Issues 评论与摘要：

- **"沉默失败"是用户最痛点**：多个 Issue 反复出现类似描述——启动时随机丢插件、Feishu channel_post 漏处理、Telegram 媒体丢消息，**只产生 WARNING 日志，没有用户可见错误**。这反映出项目在错误可观测性上的系统性问题（[#123926](https://github.com/NousResearch/hermes-agent/issues/123926)、[#24319](https://github.com/NousResearch/hermes-agent/issues/24319)、[#131971](https://github.com/NousResearch/hermes-agent/pull/131971)）。

- **Windows 平台被反复"点名"**：从 #41219、#131864、#88332、#62175 到 [PR #106198](https://github.com/NousResearch/hermes-agent/pull/106198) 的 Windows approval 豁免问题——Windows 用户明显感受到体验断层（路径处理、argv 快照 skip、socket FD 泄漏），这是一个**结构性短板**。

- **国产模型接入仍有缝隙**：[#24443 MiMo](https://github.com/NousResearch/hermes-agent/issues/24443) 的 `reasoning_content` 未保留、[#41147 stepfun](https://github.com/NousResearch/hermes-agent/issues/41147) 的 `/model` 列表不刷新、[#47658 MiniMax](https://github.com/NousResearch/hermes-agent/issues/47658) 的 gateway async runtime 失败——**国产模型适配是高频抱怨点**。

- **Dashboard/Desktop 稳定性**：Dashboard 黑屏（[#48363](https://github.com/NousResearch/hermes-agent/issues/48363)）、/stop 卡死（[#42176](https://github.com/NousResearch/hermes-agent/issues/42176)）、自更新失败（[#88332](https://github.com/NousResearch/hermes-agent/issues/88332)、[#131864](https://github.com/NousResearch/hermes-agent/issues/131864)），构成"Web/桌面用户"的统一负反馈来源。

- **Bot 协作愿景**：[#97681](https://github.com/NousResearch/hermes-agent/issues/97681) 33 条评论 + 4 👍 说明社区对此方向认同度高，但维护者明确标记为"长期路线图"，短期内不会合入主线，**用户预期需管理**。

---

## 8. 待处理积压提醒

按"重要性 × 悬停时间"排序，请维护者重点关注：

| 序号 | Issue/PR | 创建日期 | 悬停天数 | 优先级 |
|---|---|---|---|---|
| 1 | [Issue #20582 — Model picker 自定义 provider](https://github.com/NousResearch/hermes-agent/issues/20582) | 2026-05-06 | ~150 天 | P2，长期无人接 |
| 2 | [Issue #24443 — MiMo reasoning_content](https://github.com/NousResearch/hermes-agent/issues/24443) | 2026-05-12 | ~144 天 | P3，国产模型关键路径 |
| 3 | [Issue #35184 — `rglob` 不跟 symlink](https://github.com/NousResearch/hermes-agent/issues/35184) | 2026-05-30 | ~126 天 | P3，单点修复即可 |
| 4 | [Issue #24319 — 飞书回复 Markdown 渲染](https://github.com/NousResearch/hermes-agent/issues/24319) | 2026-05-12 | ~144 天 | P3，平台插件层 |
| 5 | [Issue #412

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-10-03**
**项目：sipeed/picoclaw**
**报告周期：过去 24 小时**

---

## 1. 今日速览

PicoClaw 过去 24 小时整体活跃度处于**中等偏低**水平：3 条 Issue 出现更新、4 条 PR 出现更新，**无新版本发布**。社区关注度主要集中在一个长期悬而未决的 Web UI 输入性能 Bug（Issue #3281，累计 17 条评论），以及一条新增的反向代理部署需求（Issue #3415）。PR 端有 2 条因停滞（stale）被自动关闭，未推动实质性的功能合并；2 条仍处开放状态的 PR 也已标记 stale，需维护者重新激活。**项目健康度评估：⚠️ 需关注**——多个关键问题与 PR 长期缺乏维护响应，存在社区参与衰减迹象。

---

## 2. 版本发布

🚫 **无新版本发布。** 过去 24 小时内未检测到任何 Release 标签活动。

---

## 3. 项目进展

过去 24 小时共 **2 条 PR 被关闭**：

| PR | 标题 | 状态 | 分析 |
|---|---|---|---|
| [#3368](https://github.com/sipeed/picoclaw/pull/3368) | docs: add Parallel Search MCP setup example | CLOSED (stale) | 为现有 CLI 指南补充 Parallel Search MCP 的复制即用配置教程，附带隐私说明。属于**纯文档贡献**，被自动关闭可能因 stale 标记而非主动驳回，对项目进展影响有限。 |
| [#1544](https://github.com/sipeed/picoclaw/pull/1544) | fix: merge PR #1514 #1513 #1512 #1510 #1509 | CLOSED (stale) | 提议合并 5 个早期修复 PR 的合并请求。该 PR 已存在约 7 个月（自 2026-03-14），最终因 stale 被关闭，意味着这些修复很可能被采用其他方式合并，或相关 PR 已被单独处理/废弃。 |

📌 **进展评估：** 今日无功能性 PR 被合并入库，项目代码层面**无实质推进**。两个关闭动作均属自动机制（stale 清理），不反映主动的代码演进。

---

## 4. 社区热点

### 🔥 最受关注 Issue：Web UI 输入卡顿 Bug
**[#3281](https://github.com/sipeed/picoclaw/issues/3281)** —— Web UI 聊天输入框在历史消息较多时严重卡顿
- 👤 提交者：xpader
- 💬 评论数：**17 条**（最高）
- 👍 反应数：2
- ⏰ 创建于 2026-07-21，已活跃约 2.5 个月
- 📌 状态：仍 OPEN，无关联修复 PR

**诉求分析：** 该 Issue 反映出 Web Console 在长会话场景下的**前端性能瓶颈**，直接影响日常使用体验。17 条评论显示社区对此有持续讨论，可能涉及前端渲染、虚拟滚动、消息历史存储等多个技术层面的反馈。维护者长期未回应或提交修复，是当前最值得关注的用户体验痛点。

### 🆕 新增功能请求：反向代理部署
**[#3415](https://github.com/sipeed/picoclaw/issues/3415)** —— 支持 Nginx 反向代理挂载到子路径（如 `/pico/`）
- 👤 提交者：altman08
- 🕐 创建/更新：2026-10-02（昨日新开）
- 📌 状态：OPEN，0 评论

**诉求分析：** 用户希望在共享域名下将 PicoClaw 部署为子路径应用。Issue 指出当前前端/后端使用了根路径硬编码（如 `/api/...`、`/launcher-login`、`/pico/ws`），单纯的 Nginx 路径转发无法覆盖完整链路。这是一个**典型的企业/个人多服务共存部署场景**，建议为 Web Launcher 增加前缀参数选项。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|---|
| 🔴 **高** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 长历史下输入卡顿 | ❌ 无 | OPEN 2.5 个月 |
| 🟡 **中** | [#3392](https://github.com/sipeed/picoclaw/issues/3392) | CLAassistant 无法识别 CLA 签名 | ❌ 无 | OPEN, stale |

**分析：**
- **#3281** 是当前最严重的稳定性/可用性问题，长会话直接卡顿属于 P0 级前端体验问题。
- **#3392** 与 PR #3381 关联，反映出贡献流程中的合规检测工具异常，可能阻碍外部 PR 合并流程，属于流程性问题但影响贡献者体验。
- 两条 Bug 均**无对应修复 PR 关联**，需要维护者主动介入。

---

## 6. 功能请求与路线图信号

### 明确的新功能需求

**[#3415 反向代理支持](https://github.com/sipeed/picoclaw/issues/3415)**
- 信号强度：⭐⭐⭐（新提出，已给出详细方案）
- 落地路径：建议增加 `-base-path` 之类的启动参数，统一处理前端路由、后端 API、静态资源、WS 连接
- 可行性评估：**高**，属于工程化部署改进，不涉及核心逻辑变更

### 仍处开放状态的 PR（潜在功能方向）

| PR | 功能方向 | 状态 | 落地概率 |
|---|---|---|---|
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | 新增 Cheaper Inference 作为 OpenAI 兼容 provider | OPEN, stale | 中——第三方 provider 接入是常见需求，但需维护者审核 |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | OpenAI provider 切换至 Responses API | OPEN, stale | 中高——跟随 OpenAI 官方演进方向，但变更较大 |

📌 **路线图信号：** 近期路线图关注点偏向 **provider 生态扩展**（Cheaper Inference、OpenAI Responses API）与 **部署灵活性**（反向代理），但因 stale 机制无维护者干预，这些工作均处于停滞状态。

---

## 7. 用户反馈摘要

从 Issue 评论与描述中提炼的真实用户痛点：

| 痛点类别 | 具体场景 | 代表 Issue |
|---|---|---|
| 🎨 **前端性能** | 长会话聊天输入卡顿，严重影响生产可用性 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) |
| 🚀 **部署灵活性** | 多服务共存时无法使用子路径部署 | [#3415](https://github.com/sipeed/picoclaw/issues/3415) |
| 🤝 **贡献流程** | CLA 检测工具异常，外部贡献者 PR 无法被识别 | [#3392](https://github.com/sipeed/picoclaw/issues/3392) |
| 🔌 **provider 选择** | 希望引入更经济的 LLM 网关（Cheaper Inference） | [#3393](https://github.com/sipeed/picoclaw/pull/3393) |

**用户情绪：** 偏中性偏消极。PicoClaw 的核心功能获得使用，但**响应滞后与流程不通畅**正在消耗社区耐心（stale 标记密集出现即为信号）。

---

## 8. 待处理积压（提醒维护者关注）

⚠️ 以下 Issue / PR 已长期未获响应，建议优先处理：

| 编号 | 类型 | 创建时间 | 积压天数 | 备注 |
|---|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | 2026-07-21 | ~74 天 | 🔴 最严重前端性能问题，无修复 PR |
| [#3381](https://github.com/sipeed/picoclaw/pull/3381) | PR (feature) | 2026-09-17 | ~16 天 | OpenAI Responses API 迁移，stale |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | PR (provider) | 2026-09-25 | ~8 天 | Cheaper Inference 接入，stale |
| [#3392](https://github.com/sipeed/picoclaw/issues/3392) | Bug | 2026-09-25 | ~8 天 | CLA 检测工具异常 |

**维护建议：**
1. 🛠 优先为 **#3281** 指派负责人或给出临时解决方案（workaround），避免核心场景持续劣化口碑
2. 🔄 重新激活 #3381 / #3393 的评审流程，决定合并或关闭，避免社区贡献沉没
3. 🆕 评估 #3415 的反向代理需求，可考虑作为下个 minor 版本的部署增强点
4. 🧹 集中清理 stale Issue/PR 池，提升仓库可维护性指标

---

📊 **日报数据来源**：GitHub REST API（Issues & Pull Requests 时间窗口：2026-10-02 ~ 2026-10-03）

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-03

> 数据范围：2026-10-02 ~ 2026-10-03（24h）｜仓库：`nanocoai/nanoclaw`

---

## 1. 今日速览

NanoClaw 过去 24 小时处于**高活跃度的工程化清理期**：50 条 Issue 更新（33 活跃 / 17 关闭）与 30 条 PR 更新（24 待合并 / 6 关闭）同时进行，但 **0 个版本发布**，表明所有提交仍处于合并前的验证与代码审查阶段。社区重心集中在三大方向——**自更新链路稳定性**（#4003 / #4004 升级崩溃+回滚丢数据）、**容器/会话生命周期 Bug 群**（OOM、转录不轮转、operator env 不下发）以及**多渠道适配器重构**（`channels` 分支正在合入 `main`，含 Discord、Slack、Teams、WhatsApp）。核心贡献者 `glifocat` 单人提交了 12+ 条 PR，是当前维护工作的实际主要驱动力。

---

## 2. 版本发布

**无新版本发布**。仓库当前处于"修复一批上线一批"的状态，已积累的多项修复（包括 #3999 自动 compact 窗口下发、#3998 网关 CA 信任、#3997 安装后自动提交技能文件等）尚未合并到带 tag 的 release。`/update-nanoclaw` 的更新通道功能（PR #3986，默认改为追踪 `vX.Y.Z` tag 而非 main tip）落地后，预计下一次 release 才会面向用户放出。

---

## 3. 项目进展

今日合并/关闭的 PR 集中在**安全加固**和**底层修复**两个层面，单条 PR 体量较小但语义清晰：

| PR | 类型 | 影响 |
|---|---|---|
| [#3994](https://github.com/nanocoai/nanoclaw/pull/3994) ❌ | 显示 Claude SDK 真实失败原因 | 改善错误可观测性 |
| [#3985](https://github.com/nanocoai/nanoclaw/pull/3985) 🟢 | proxy 凭据从 systemd unit 移到 root-only 文件 | 提升本地安全模型 |
| [#3969](https://github.com/nanocoai/nanoclaw/pull/3969) ❌ | Iron Proxy 407 加 `Proxy-Authenticate` Basic challenge | 让 libcurl/git 能通过认证 |
| [#2654](https://github.com/nanocoai/nanoclaw/pull/2654) ❌ | `namespacedPlatformId()` 信任任意 `<prefix>:<id>` | 解锁 SDK 侧前缀不一致场景 |
| [#4006](https://github.com/nanocoai/nanoclaw/pull/4006) ❌ | 初始引入 OpenCode provider | 拓展非 Anthropic 后端生态 |
| [#67](https://github.com/nanocoai/nanoclaw/pull/67) ❌ | Telegram skill | 早期 PR 收尾 |

> ❌ = 已关闭但未合并；🟢 = 已合并到 main

**整体推进判断**：项目从"功能扩张"转入"安装/更新体验打磨 + 渠道适配器收口"阶段。最关键的进展是 [#4000](https://github.com/nanocoai/nanoclaw/pull/4000)（channels 分支合入 main，463 commits）和 [#3986](https://github.com/nanocoai/nanoclaw/pull/3986)（update 通道化）——这两项一旦落地，相当于一个小型里程碑版本。

---

## 4. 社区热点

### 🔥 互动量最高的 Issue

**[#1424 Securing One's Fork? · 7 评论 · 👍1](https://github.com/nanocoai/nanoclaw/issues/1424)**
作者 `nealrauhauser` 反馈：安装流程强烈建议 fork，但 fork 必须是 public 不能 private，医疗保健场景下这是合规硬伤。**诉求**：是否能为企业/医疗用户提供 private fork 路径或私有部署模板？这是少数讨论**部署架构层面合规性**的 issue，反映核心用户已超出"个人 hack 工具"场景。

**[#2437 Any appetite for removing/improving the OneCLI dependency? · 👍7](https://github.com/nanocoai/nanoclaw/issues/2437)**
按 👍 计**全场最高**。作者 `carderne` 指出 OneCLI 严重稀释了 NanoClaw "轻量替代 OpenClaw" 的定位。社区情绪：**去 OneCLI 化** 是高呼声方向。已部分由 [#2781 NANOCLAW_NATIVE_CREDENTIALS](https://github.com/nanocoai/nanoclaw/issues/2781) 回应。

**[#3716 PreCompact OOM crash loop · 3 评论](https://github.com/nanocoai/nanoclaw/issues/3716)**
生产环境真实崩溃 ——`PreCompact` 每次触发都把全量会话历史重新序列化写入 `/workspace/agent/conversations/`，无任何轮转/上限。这是**少数用户首次提到生产事故**的 issue，描述风格从"我想用"转向"我们已经在线上跑"。

---

## 5. Bug 与稳定性

按严重程度排序（均为今日报告或活跃推进）：

| 严重度 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| 🔴 **P0 数据丢失** | [#4003](https://github.com/nanocoai/nanoclaw/issues/4003) | 升级回滚时 EACCES 删除失败，留下半残 `data/`，主机服务中断 | ❌ 无 PR |
| 🔴 **P0 升级链路** | [#4004](https://github.com/nanocoai/nanoclaw/issues/4004) | tsx/esbuild 升级导致 cutover 崩溃，触发危险回滚 | ❌ 无 PR |
| 🔴 **P0 生产 OOM** | [#3716](https://github.com/nanocoai/nanoclaw/issues/3716) | PreCompact 无界写入对话存档，导致内存耗尽循环 | ❌ 无 PR |
| 🟠 **P1 静默失能** | [#3568](https://github.com/nanocoai/nanoclaw/issues/3568) | pending `system` 行饥饿正常入站队列，agent 静默停止响应 | ❌ 无 PR |
| 🟠 **P1 升级刷破自定义** | [#3529](https://github.com/nanocoai/nanoclaw/issues/3529) | `update-nanoclaw` skill refresh 把用户自写 adapter 当 skill 覆盖，无 opt-out | ❌ 无 PR |
| 🟠 **P1 Operator env 不透传** | [#3714](https://github.com/nanocoai/nanoclaw/issues/3714) | `CLAUDE_CODE_AUTO_COMPACT_WINDOW` 等 host env 不下发到 container | ✅ [#3999](https://github.com/nanocoai/nanoclaw/pull/3999) 待合并 |
| 🟡 **P2 调度** | [#3705](https://github.com/nanocoai/nanoclaw/issues/3705) | `ncl tasks update --recurrence` 不重算下次触发时间 | ❌ 无 PR |
| 🟡 **P2 错误洪泛** | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) | 速率限制时每轮重试都向 channel 发重复错误 | ❌ 无 PR |
| 🟡 **P2 转录不轮转** | [#3732](https://github.com/nanocoai/nanoclaw/issues/3732) | 长跑容器下转录永不轮转，session 膨胀 | ❌ 无 PR |
| 🟡 **P2 Linux 残留** | [#3951](https://github.com/nanocoai/nanoclaw/issues/3951) | `ncl tasks delete` 在 Linux 留下 root-owned 挂载点，db 不可读 | ❌ 无 PR |
| 🟡 **P2 渠道兼容** | [#4002](https://github.com/nanocoai/nanoclaw/issues/4002) | Discord 对 router 命名空间 message id 返回 400 50035 | ❌ 无 PR |
| 🟢 **P3** | [#3984](https://github.com/nanocoai/nanoclaw/issues/3984) | PreCompact hook 在无 mailbox 时崩溃 | ❌ 无 PR |

**Bug 集中度评估**：今日新开的关键 Issue 全部集中在 `update` 子系统和 `preCompact/会话生命周期`两条路径上 —— 表明维护者近期密集改动的两块代码恰好是**质量回归热点**，需要关注修复策略。

---

## 6. 功能请求与路线图信号

| 请求 | 关联 PR | 落地概率 |
|---|---|---|
| **可家庭边缘部署**（[#3538](https://github.com/nanocoai/nanoclaw/issues/3538)）— 把 NanoClaw container 做成可分发到家用空闲 PC 的边缘 worker | 无 | 中期愿景，目前仅 issue |
| **多用户单实例**（[#2653](https://github.com/nanocoai/nanoclaw/issues/2653)）— 共享 Mac 上多用户各自 Telegram bot + agent_group | 无 | 中等，数据模型已支持，阻塞在 `src/...` 单点 |
| **OpenCode provider**（[#4006](https://github.com/nanocoai/nanoclaw/pull/4006)） | PR 已开，但体量不明 | 取决于实际 provider 实现质量 |
| **Update 通道化**（`stable`/`beta`/`nightly`）（[#3986](https://github.com/nanocoai/nanoclaw/pull/3986)） | ✅ PR 待合并 | **高**，是 self-update 体验前置依赖 |
| **bin/ncl mounts init**（[#2388](https://github.com/nanocoai/nanoclaw/issues/2388)） | 无 | 高，纯 CLI 改造 |
| **去 OneCLI 化**（[#2437](https://github.com/nanocoai/nanoclaw/issues/2437)） | [#2781](https://github.com/nanocoai/nanoclaw/issues/2781) 已部分实现 `NANOCLAW_NATIVE_CREDENTIALS` | 渐进推进中 |

**信号**：版本化更新通道（#3986）+ 升级安全网（针对 #4003/#4004）是当前最确定的下一版本主线。

---

## 7. 用户反馈摘要

| 用户声音 | 来源 |
|---|---|
| "Setup **强烈建议 fork**，但 fork 不能私有，我做医疗保健部署时这是合规问题。" | [#1424](https://github.com/nanocoai/nanoclaw/issues/1424) |
| "想给家人和我自己共用一台 Mac Mini 跑各自的 NanoClaw agent。" | [#2653](https://github.com/nanocoai/nanoclaw/issues/2653) |
| "OneCLI 让部署从 `pnpm run dev` 变成一长串前置配置，违背'轻量替代 OpenClaw'的定位。"（👍7） | [#2437](https://github.com/nanocoai/nanoclaw/issues/2437) |
| "setup.sh **静默向 PostHog 发遥测**，没有 opt-in/opt-out，第一次跑根本不知道。" | [#1819](https://github.com/nanocoai/nanoclaw/issues/1819) |
| "家里好几台空闲 PC，能不能让 NanoClaw container 跑到那些机器上而不是再买 GPU？" | [#3538](https://github.com/nanocoai/nanoclaw/issues/3538) |
| "在 Ubuntu 上 debug 一直 missing dependencies，能不跑 container 直接调试吗？" | [#2590](https://github.com/nanocoai/nanoclaw/issues/2590) |
| "Claude code 跟 llama.cpp 跑得很顺，NanoClaw 连接失败，是参数还是网络？" | [#2234](https://github.com/nanocoai/nanoclaw/issues/2234) |
| "add-gmail-tool skill 只支持单 Gmail 账号，我有两个 Gmail。" | [#2195](https://github.com/nanocoai/nanoclaw/issues/2195) |

**痛点聚类**：(a) 安装/部署透明度（遥测、依赖、Node 版本）；(b) 单实例多用户场景被忽视；(c) 替代/补充 Anthropic 后端的 provider 生态。

---

## 8. 待处理积压

以下 Issue/PR 创建或最后更新已超过 30 天，且与当前问题群相关，维护者建议优先 review：

| 编号 | 年龄 | 主题 | 状态 |
|---|---|---|---|
| [#3596](https://github.com/nanocoai/nanoclaw/pull/3596) | ~36 天 | Teams card 点击 sender 命名空间匹配 | OPEN |
| [#3597](https://github.com/nanocoai/nanoclaw/pull/3597) | ~36 天 | host-local HTTP MCP 服务绕过 gateway proxy | OPEN |
| [#1955](https://github.com/nanocoai/nanoclaw/issues/1955) | ~163 天 | Codex provider 延迟优化（已关但仍无人合并相关代码） | CLOSED |
| [#1819](https://github.com/nanocoai/nanoclaw/issues/1819) | ~168 天 | PostHog 遥测无 opt-in（关闭但**问题描述的处理动作未见独立 commit**） | CLOSED |
| [#1424](https://github.com/nanocoai/nanoclaw/issues/1424) | ~192 天 | 私有 fork / 企业部署路径（高互动但**仅关未解决**） | CLOSED |

**维护者提醒**：当下 24 条 OPEN PR 中有 12 条 tag 为 `core-team`，意味着

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-10-03**
**数据周期：过去 24 小时**

---

## 1. 今日速览

LobsterAI 仓库在过去 24 小时内呈现"低活跃度"状态，所有 6 条 Issues 更新均为 [stale] 自动标记触发的状态刷新，并非真实的新讨论或新反馈。Issues 全部停留在 2026-03-26 创建时的时间点，PR 端有 1 个仍 OPEN、2 个被 CLOSED（未合并）。**仓库整体活跃度较低，维护者响应明显滞后**，社区提交的安全加固 PR（#909、#911）均以"已关闭（未合并）"形式落幕，叠加多条涉及数据丢失、命令注入的安全隐患仍处 Open 状态，建议关注项目治理节奏与安全债问题。

| 指标 | 数值 |
|---|---|
| Issues 新开/活跃 | 6 |
| Issues 已关闭 | 0 |
| PR 待合并 | 1 |
| PR 已合并 | 0 |
| PR 已关闭（未合并） | 2 |
| 新版本发布 | 0 |

---

## 2. 版本发布

本周期内 **无新版本发布**。

---

## 3. 项目进展

过去 24 小时未产生新的已合并 PR，整体推进有限。具体动向：

- **PR #908 `fix(mcp): validate stdio command to prevent command injection`**（[链接](https://github.com/netease-youdao/LobsterAI/pull/908)）
  作者 vdorchan 提出对 MCP Server 的 stdio command 做白名单校验，修复渲染进程被 XSS/Prompt 注入攻陷后的命令注入漏洞。**当前仍处 OPEN 状态，等待维护者评审**。

- **PR #909 `fix(security): require user confirmation when skill security scan fails`**（[链接](https://github.com/netease-youdao/LobsterAI/pull/909)）
  修复技能安全扫描抛异常后被绕过、自动静默安装的风险。**状态：CLOSED（未合并）**。该 PR 内容质量高、描述清晰，未合并意味着安全加固被搁置，是本周期值得关注的负面信号。

- **PR #911 `fix(auth): encrypt auth tokens at rest using safeStorage`**（[链接](https://github.com/netease-youdao/LobsterAI/pull/911)）
  使用 Electron safeStorage 加密持久化的 access/refresh token，避免明文落库。**状态：CLOSED（未合并）**。明文存储 token 属于较严重的安全隐患，关闭而非合并值得向维护者求证原因。

> **小结**：本周期净进展为 0，2 个高价值安全 PR 被关闭，1 个安全 PR 待评审，仓库安全债正在累积。

---

## 4. 社区热点

按评论数（均为 1 条，量级较小）排序，关注的实质更多在于**问题严重度而非讨论热度**：

1. **Issue #906 SQLite 数据丢失风险**（[链接](https://github.com/netease-youdao/LobsterAI/issues/906)）—— tomZou12 提出 `fs.writeFileSync()` 无异常处理、无重试、无原子写保护，磁盘满/权限问题/文件锁都会直接丢失用户数据。**安全/数据完整性维度最高优先级**。
2. **Issue #900 定时任务频率被错误改为 1 分钟**（[链接](https://github.com/netease-youdao/LobsterAI/issues/900)）—— 用户用自然语言让龙虾把"每半小时"改为"每 1 小时"，结果变成"每 1 分钟"。反映出 NL 解析与任务调度链路存在偏差。
3. **Issue #898 Cherry Studio 更新致 LobsterAI 网关断开**（[链接](https://github.com/netease-youdao/LobsterAI/issues/898)）—— 端口 18789 被阻断，影响用户多工具联调体验。

---

## 6. Bug 与稳定性

按严重程度排列：

| 等级 | Issue | 简述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#906](https://github.com/netease-youdao/LobsterAI/issues/906) | SQLite 写入无异常处理/无重试/无原子性，存在数据丢失与文件损坏风险 | ❌ 无 |
| 🟠 中高 | [#898](https://github.com/netease-youdao/LobsterAI/issues/898) | Cherry Studio 重启后 LobsterAI 网关（端口 18789）被 ban，多端协同失效 | ❌ 无 |
| 🟡 中 | [#900](https://github.com/netease-youdao/LobsterAI/issues/900) | 定时任务频率调整 NL 解析错误（半小时→1 分钟） | ❌ 无 |
| 🟡 中 | [#910](https://github.com/netease-youdao/LobsterAI/issues/910) | 飞书机器人配置后定时任务无法送达，提示缺少 `chatId`/`openId` 目标 | ❌ 无 |
| 🟢 低 | [#886](https://github.com/netease-youdao/LobsterAI/issues/886) | `CopyButton` 使用裸 `setTimeout` 而非 `useRef`，卸载后回调 setState 产生 warning 与潜在泄漏 | ❌ 无 |

**整体判断**：5 个 Bug 全部**无对应修复 PR**，修复链路未形成闭环；其中 #906 涉及数据丢失，应作为下一版本的 P0 处理。

---

## 7. 功能请求与路线图信号

| Issue | 诉求 | 是否已有相关 PR |
|---|---|---|
| [#914 支持记忆导入/导出](https://github.com/netease-youdao/LobsterAI/issues/914) | 用户更换设备/分享记忆，期望记忆可迁移 | ❌ 无明确 PR；可与 #911（凭证加密）联合设计导入导出安全策略 |
| [#910 飞书机器人定时推送](https://github.com/netease-youdao/LobsterAI/issues/910) | 飞书 IM 已可对话但定时任务无法送达，需补全 IM 投递目标解析 | ❌ 无 |
| [#898 Cherry Studio 联调](https://github.com/netease-youdao/LobsterAI/issues/898) | 网关端口稳定性、与第三方客户端协同 | ❌ 无 |

**路线图建议**：记忆可携带性（#914）契合多设备用户增长趋势，建议列入下一版本规划；#910 的 IM 投递目标解析属于必须补齐的能力缺口，否则 IM 机器人价值受损。

---

## 8. 用户反馈摘要

- **数据安全焦虑**：#906、#911（CLOSED）反映出用户对本地 SQLite 落库方案的担忧——明文凭证 + 非原子写入双重风险，是 LobsterAI 在隐私敏感场景推广的阻碍。
- **NL 调度可控性差**：#900 中用户期望"调成每 1 小时"却得到"每 1 分钟"，提示自然语言→CRON 表达式的中间层缺少校验与确认机制，建议在落盘前对用户回显确认。
- **跨端/跨工具协同体验差**：#898 显示端口冲突导致 Cherry Studio 重启后 LobsterAI 网关失效，影响用户多工具组合工作流。
- **设备迁移成本**：#914 直指记忆无法导出/导入，意味着用户的"个性化配置"沉淀在本地后被锁死，影响留存与口碑。

整体反馈偏向**对核心稳定性与可控性的不满**，对新功能/UI 的诉求反而较少。

---

## 9. 待处理积压（提醒维护者关注）

> 以下条目均被自动标记为 **stale**，长期无人响应，存在社区沟通断点风险。

- **Issues（6 条，全部 stale）**
  - [#886](https://github.com/netease-youdao/LobsterAI/issues/886) React 卸载警告 / 内存泄漏
  - [#898](https://github.com/netease-youdao/LobsterAI/issues/898) Cherry Studio 网关断开
  - [#900](https://github.com/netease-youdao/LobsterAI/issues/900) 定时任务频率 NL 解析错
  - [#906](https://github.com/netease-youdao/LobsterAI/issues/906) SQLite 数据丢失风险（**P0**）
  - [#910](https://github.com/netease-youdao/LobsterAI/issues/910) 飞书机器人定时推送失败
  - [#914](https://github.com/netease-youdao/LobsterAI/issues/914) 记忆导入/导出

- **PR（3 条，2 条 stale + 1 条仍 OPEN）**
  - [#908](https://github.com/netease-youdao/LobsterAI/pull/908) **OPEN** —— MCP 命令注入校验，建议优先评审合并
  - [#909](https://github.com/netease-youdao/LobsterAI/pull/909) **CLOSED（未合并）** —— 技能安全扫描绕过修复，需解释关闭原因
  - [#911](https://github.com/netease-youdao/LobsterAI/pull/911) **CLOSED（未合并）** —— Token 加密存储，明文落库仍存在，建议重开或给出替代方案

**健康度提醒**：6 个 Bug 0 关闭、3 个 PR 中 2 个安全修复被关闭，是本周期最值得警惕的信号。建议维护者：
1. 对 PR #908 尽快 review；
2. 明确说明 #909/#911 关闭原因并给出后续计划；
3. 将 #906 列为下一版本 P0。

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

# CoPaw (QwenPaw) 项目动态日报

**报告日期**：2026-10-03
**数据周期**：过去 24 小时
**仓库路径**：agentscope-ai/QwenPaw（注：用户提示为 CoPaw，实际数据指向 QwenPaw 仓库，下文统一以 QwenPaw 为准）

---

## 1. 今日速览

过去 24 小时项目活跃度处于**中等偏高**水平：Issues 新增/活跃 13 条、PR 新增/活跃 12 条，且 **PR 合并转化活跃**（7 项已闭环），但 Issues 端零关闭，社区问答与 Bug 反馈仍待维护者响应。当日最大动作来自 AaronZ 一次性关闭 7 个历史 PR（涉及桌面/控制台/Provider/MCP 等），同时移动端 UI、Beta 版回归、音频工具三条主线有明显进展。整体看，项目正进入 **V2.2.2 Beta 收尾 + 多模态工具扩展**并行推进的阶段。

---

## 2. 版本发布

无新版本发布。值得关注的版本信号：Issue #8073 报告 **V2.2.2.beta4** 在 LAN 跨设备访问下出现对话页无法打开的回归，Issue #8078 报告同一版本出现跨会话消息分裂 Bug——Beta 阶段的稳定性问题仍在累积。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

过去 24 小时有 **7 个 PR 关闭**，来自同一贡献者 AaronZ，集中度较高：

| PR | 标题 | 影响面 | 链接 |
|---|---|---|---|
| #6877 | feat(desktop): remember window geometry | 桌面端持久化窗口大小/位置，Tauri window-state 插件 | [#6877](https://github.com/agentscope-ai/QwenPaw/pull/6877) |
| #6874 | feat(mcp): add configurable tool call timeout | MCP 工具调用可配置超时（默认 300s），旧 `timeout` 键仅 stdio 兼容 | [#6874](https://github.com/agentscope-ai/QwenPaw/pull/6874) |
| #7347 | fix: keep rich input caret visible | 富文本编辑器长输入时光标可见性修复 | [#7347](https://github.com/agentscope-ai/QwenPaw/pull/7347) |
| #7344 | feat(console): support game-dev file languages | 控制台支持 Unity/Godot/Shader 等游戏开发文件高亮（修复 #7068） | [#7344](https://github.com/agentscope-ai/QwenPaw/pull/7344) |
| #7356 | feat(console): add chat scroll lock | 长流式输出时可锁定滚动 | [#7356](https://github.com/agentscope-ai/QwenPaw/pull/7356) |
| #7357 | feat(chat): add tool call visibility toggle | 工具调用卡片可隐藏，降低长对话噪音 | [#7357](https://github.com/agentscope-ai/QwenPaw/pull/7357) |
| #7359 | feat(providers): expose per-media inline caps | 媒体内联容量按 provider 区分，UI 暴露配置（修复 #7201） | [#7359](https://github.com/agentscope-ai/QwenPaw/pull/7359) |

**推进方向**：桌面端 UX、MCP 健壮性、控制台可读性、游戏开发场景适配、Provider 媒体策略**全部打开。集中在"打磨长尾体验"层面，未触及核心架构。

---

## 4. 社区热点

按评论数排序的前 4 个活跃 Issue：

1. **#7884 [question] 压缩后刷新前端，历史信息无法全量加载**（8 评论，happieme）
   - [链接](https://github.com/agentscope-ai/QwenPaw/issues/7884)
   - 自 9 月 19 日起持续发酵。用户对"上下文压缩触发历史信息断档"强烈不满，情绪偏激烈（"知道这个体验多差么"）。这是今日**社区情绪温度最高的帖子**。

2. **#7997 [enhancement] 支持消息撤回/编辑 + 工作区回滚**（8 评论，ysf7762-dev）
   - [链接](https://github.com/agentscope-ai/QwenPaw/issues/7997)
   - WebUI 缺失"消息编辑撤回 + 工作区快照回滚"，讨论度高，反映用户对"操作可逆"的强诉求。

3. **#6281 希望 Web 控制台适配移动端**（6 评论，ook826092-cloud，自 7 月 20 日）
   - [链接](https://github.com/agentscope-ai/QwenPaw/issues/6281)
   - 老牌请求，今日有更新，与 PR #8086（移动端设置抽屉）形成呼应。

4. **#2975 [enhancement] 用户输入消息渲染 Markdown**（4 评论，ooopzlong，自 4 月 6 日）
   - [链接](https://github.com/agentscope-ai/QwenPaw/issues/2975)
   - 长期被忽视的体验请求。

**诉求归纳**：社区当前三大痛点集中在 **历史/上下文管理可逆性**、**移动端可用性**、**消息渲染一致性**。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#8088](https://github.com/agentscope-ai/QwenPaw/issues/8088) | 图片被路由至 `chat_with_image` 后陷入 Bash+PIL 暴力裁剪循环，最终静默取消，用户无回复 | 无 |
| 🔴 高 | [#8078](https://github.com/agentscope-ai/QwenPaw/issues/8078) | 跨会话消息被注册成独立 chat，UI 中同一 session 被分裂为多个页面（2.2.2b4） | 无 |
| 🟠 中 | [#8073](https://github.com/agentscope-ai/QwenPaw/issues/8073) | V2.2.2.beta4 在 LAN 跨设备访问时对话页无法打开 | 无 |
| 🟠 中 | [#8077](https://github.com/agentscope-ai/QwenPaw/issues/8077) | Qoder 第三方 agent 自定义模型不可见/不可用 + 上下文计量条隐藏（3 个缺陷） | 无 |
| 🟡 中 | [#8085](https://github.com/agentscope-ai/QwenPaw/issues/8085) | `finish_reason="length"` 截断时停止原因被静默丢弃 | PR [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) 部分覆盖（处理 oversized prompt 空回复，但未直接处理 finish_reason 透出） |
| 🟡 中 | [#8076](https://github.com/agentscope-ai/QwenPaw/issues/8076) （未列出数据中但被 PR 引用） | reload drain timeout 到期未通知房间、未取消 in-flight | ✅ PR [#8079](https://github.com/agentscope-ai/QwenPaw/pull/8079) |

**趋势提示**：当前 Beta 版（2.2.2.beta4）的稳定性问题呈**集中爆发**态势，集中在 WebUI 路由、子 agent 行为、跨设备访问三个面，需关注是否影响正式版发布。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 纳入概率评估 |
|---|---|---|---|
| **音频理解内置工具 `view_audio`** | [#8081](https://github.com/agentscope-ai/QwenPaw/issues/8081) | ✅ PR [#8083](https://github.com/agentscope-ai/QwenPaw/pull/8083) | **极高**：PR 已提交，issue 与 PR 同日同作者，可能直接合入下版本 |
| **飞书机器人回复追加 agent/模型元信息** | [#8087](https://github.com/agentscope-ai/QwenPaw/issues/8087) | 无 | 中：参考 OpenClaw 实现，成本可控 |
| **消息撤回/编辑 + 工作区回滚** | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 无 | 中：工作区快照机制可能复用现有基建 |
| **跨实例 Agent 通信**（自动发现/任务委托/记忆传授） | [#8080](https://github.com/agentscope-ai/QwenPaw/issues/8080) | 无 | 低：架构级，重大方向 |
| **Web 控制台移动端适配** | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | ✅ PR [#8086](https://github.com/agentscope-ai/QwenPaw/pull/8086) | **高**：今日已有人动刀 |
| **用户输入 Markdown 渲染** | [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 无 | 中：纯前端 |
| **context overflow / oversized prompt 显式处理** | （隐含于 PR #8084） | ✅ PR [#8084](https://github.com/agentscope-ai/QwenPaw/pull/8084) | **极高**：与 #8085 关联 |

**路线图信号**：多模态补齐（音频） + 移动端 UI + Provider 健壮性（超时/容量/截断）是当前可预见的近期方向。

---

## 7. 用户反馈摘要

- **上下文压缩后历史丢失**（#7884）：用户原文"讨论过的问题，回头往上翻，看不到了？？？咱聊天记录多存点，做不到么？知道这个体验多差么？？？"——**强烈负面情绪**，指向"压缩策略"与"前端历史加载"的双重不满。
- **Beta 版回归**：多位用户在 2.2.2.beta4 报告**对话页打不开**、**跨会话分裂**等问题，发布前回归覆盖明显不足。
- **子 agent 失控**（#8088）：图片处理子 agent 陷入 PIL 暴力裁剪循环并被静默取消——用户对"agent 不可观测、不可中断"的不满。
- **i18n 缺失**（PR #7936）：zh locale 缺失 `channels.username` 翻译，是当前唯一未覆盖键——小但显眼。
- **正面信号**：PR #8086（新贡献者首贡献）与 PR #7936（i18n 修补）说明项目对新贡献者与多语言支持仍有活力。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | 编号 | 标题 | 创建日期 | 风险 |
|---|---|---|---|---|
| Issue | [#2975](https://github.com/agentscope-ai/QwenPaw/issues/2975) | 用户输入 Markdown 渲染 | **2026-04-06** | 🔴 已 175+ 天，重复请求 |
| Issue | [#6281](https://github.com/agentscope-ai/QwenPaw/issues/6281) | 移动端适配 | **2026-07-20** | 🔴 已 75+ 天，移动端体验仍是空白（今日有 PR 但仅针对设置抽屉） |
| Issue | [#7884](https://github.com/agentscope-ai/QwenPaw/issues/7884) | 压缩后历史无法全量加载 | 2026-09-19 | 🟠 评论密集，情绪高，需官方表态 |
| PR | [#7936](https://github.com/agentscope-ai/QwenPaw/pull/7936) | i18n: zh 翻译 channels.username | 2026-09-22 | 🟡 提交 11 天未审，first-time-contributor |
| Issue | [#7997](https://github.com/agentscope-ai/QwenPaw/issues/7997) | 消息撤回/编辑 + 工作区回滚 | 2026-09-27 | 🟠 评论密集、需求合理，需设计回应 |

**维护者建议优先级**：① #8088 / #8078 / #8073 Beta 回归修复合并；② #8084 / #8083 / #8079 / #8086 评审与合入；③ #2975 / #6281 / #7884 给出版本时间线回应；④ #7936 优先 review 以鼓励新贡献者。

---

**项目健康度评分（仅供参考）**：
- 活跃度：★★★★☆
- 响应度：★★☆☆☆（13 个 issue 零关闭，积压明显）
- 代码合并节奏：★★★★

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目动态日报
**日期：2026-10-03** ｜ **数据来源：GitHub (zeroclaw-labs/zeroclaw)**

---

## 一、今日速览

ZeroClaw 过去 24 小时社区热度极高，**Issues 更新 50 条（47 活跃 / 3 已关闭）、PR 更新 50 条（全部待合并）**，但无任何 PR 完成合并或关闭，且无新版本释出，呈现"高活跃 + 推进滞后"的状态。当前**v0.8.6 发布门禁**上有数个 S1/S2 级阻塞性 Bug 在排队关闭，而多个 RFC（如 A2A 协议、文档 RAG）已进入设计/评审阶段。大量 PR 由单一贡献者 `Audacity88` 主导提交，社区贡献集中度极高，需关注维护者负载与代码评审吞吐能力。

---

## 二、版本发布

**今日无新版本释出。** 但从 Issues 标签可见，**v0.8.6** 是当前主要进行中的发布目标，至少包含以下阻塞性修复候选：

- [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode 启动目录回归（v0.8.6）
- [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) plugin info/verify 报告错误（v0.8.6）
- [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) Skill review 看不到 skill_bundles（v0.8.6）
- [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) Skill review 在非 CLI 渠道不触发（v0.8.6）

下一里程碑 **v0.9.0** 已有重大特性入轨：[#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) zeroclaw-gw 作为独立 IPC 客户端（blocked）。

---

## 三、项目进展

### 3.1 已关闭 Issues（推进信号）

| 编号 | 标题 | 严重度 | 链接 |
|---|---|---|---|
| #11369 | Docker 镜像构建后启动即退出 + 升级中断可能损坏数据库（S1） | release-gate | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) |
| #10791 | 本地 RPC 连接在 writer 失败后未退出（follow-up） | 中 | [链接](https://github.com/zeroclaw-labs/zeroclaw/issues/10791) |

> **说明：** 数据集显示关闭 3 条，但 Top30 中仅展示上述 2 条 S1/S2；这意味着至少 1 条较低优先级 Issue 已闭环，但 v0.8.6 release-gate 的核心阻塞（#11369）已被关闭，说明发布门禁正逐步被清扫。

### 3.2 PR 推进评估

**今日 50 个 PR 全部处于 OPEN 状态，0 已合并 / 0 已关闭**，较昨日活跃度（50 PR 全 OPEN）维持但推进停滞。主要 PR 集中在以下主题：

| 主题 | 代表 PR | 状态 |
|---|---|---|
| **运行时架构例外（文档型）** | [#11476](https://github.com/zeroclaw-labs/zeroclaw/pull/11476)、[#11474](https://github.com/zeroclaw-labs/zeroclaw/pull/11474)、[#11472](https://github.com/zeroclaw-labs/zeroclaw/pull/11472)、[#11448](https://github.com/zeroclaw-labs/zeroclaw/pull/11448)、[#11439](https://github.com/zeroclaw-labs/zeroclaw/pull/11439) | 多个 bounded exception 提案待评审 |
| **关键 Bug 修复** | [#11450](https://github.com/zeroclaw-labs/zeroclaw/pull/11450)（delegate worker 恢复）、[#11452](https://github.com/zeroclaw-labs/zeroclaw/pull/11452)（RPC 通道注册）、[#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463)（file_write 元数据） | 评审中 |
| **安全/稳定性** | [#11475](https://github.com/zeroclaw-labs/zeroclaw/pull/11475)（Wasmtime 升级，修复 8 个 RustSec 漏洞）、[#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)（子进程内存 watchdog） | 高风险 |
| **ZeroCode 体验** | [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460)（provider alias 重命名）、[#11449](https://github.com/zeroclaw-labs/zeroclaw/pull/11449)（队列暂停提示）、[#11459](https://github.com/zeroclaw-labs/zeroclaw/pull/11459)（transcript 布局缓存重构） | XL 级别 |
| **功能扩展** | [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473)（内置工具 schema 延迟加载，关联 #5808）、[#11464](https://github.com/zeroclaw-labs/zeroclaw/pull/11464)（model fallback 通知） | stacked/XL |

**整体判断：** 项目在「架构治理 + 安全加固」方向持续推进，但代码评审吞吐明显跟不上提交节奏。`Audacity88` 单人提交 PR 占比极高，存在显著的单点故障隐患。

---

## 四、社区热点

按评论数排序，最活跃讨论均集中在 **架构治理、发布门禁、运行时稳定性** 三大主题：

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision queue for RFCs and design issues**（15 评论，p2）
   - 维护者决策队列跟踪器，是项目治理核心入口。评论密度显示社区高度期待 RFC 流程透明化。

2. **[#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) Defer built-in tool schemas to reduce the fixed prompt floor**（9 评论，S1 阻塞）
   - 修复后首轮 LLM 调用上下文预算超 3.3x。已有配套实现 [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473)。

3. **[#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) zerocode ignores its launch directory (regression of #10609)**（5 评论，p1，release-gate）
   - v0.8.6 阻塞项：本地启动的 zerocode 会话忽略 shell 当前目录。是 #10609 的二次回归，社区对回归管控表达不满。

4. **[#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) Process-memory limits on shell/skill_tool subprocess**（4 评论，p1，high risk）
   - 已有现成实现 [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456)，需关注是否能进入 v0.8.6。

5. **[#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) llama.cpp / custom provider URL 错误**（4 评论，p2）
   - 自定义 provider URI 配置不正确，凸显 provider 配置 schema 的健壮性问题。

**诉求分析：** 社区当前最关心的并非新功能，而是 **回归治理**（多次出现"regression of #XXXXX"）、**架构例外管理**（多个 docs(runtime) PR 申请 bounded exception）、以及**发布透明度**（RFC 与 release-gate 跟踪器）。

---

## 五、Bug 与稳定性

### 5.1 高严重度 / Release-Gate 阻塞

| Issue | 标题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) | zerocode cwd 回归（S2，v0.8.6 release-gate） | OPEN | 未见对应 PR |
| [#11369](https://github.com/zeroclaw-labs/zeroclaw/issues/11369) | Docker 镜像启动即退出（S1，v0.8.6 release-gate） | **CLOSED** | 已关闭 |
| [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) | llama.cpp / 自定义 provider URL 错误 | OPEN | 未见 |
| [#10225](https://github.com/zeroclaw-labs/zeroclaw/issues/10225) | ZeroCode RPC 无法访问 channel-backed 工具（S1） | OPEN | [#11452](https://github.com/zeroclaw-labs/zeroclaw/pull/11452) 部分相关 |
| [#10673](https://github.com/zeroclaw-labs/zeroclaw/issues/10673) | ZeroCode Code pane 失败 ACP turn 未持久化（S1） | OPEN | 未见 |

### 5.2 中等严重度

| Issue | 标题 | 状态 | 是否已有 fix PR |
|---|---|---|---|
| [#11336](https://github.com/zeroclaw-labs/zeroclaw/issues/11336) | `plugin info` / `plugin list --verify` 误报 `[loads]` | OPEN | 未见 |
| [#11333](https://github.com/zeroclaw-labs/zeroclaw/issues/11333) | Skill review 看不到 skill_bundles 中的 skills | OPEN | 未见 |
| [#11332](https://github.com/zeroclaw-labs/zeroclaw/issues/11332) | Skill review/creation 在 channel/webhook/gateway 路径下不触发 | OPEN | 未见 |
| [#10700](https://github.com/zeroclaw-labs/zeroclaw/issues/10700) | CostTracker session_id 是 daemon 生命周期级，无法按会话统计 | OPEN | [#11454](https://github.com/zeroclaw-labs/zeroclaw/pull/11454) 间接相关 |
| [#10294](https://github.com/zeroclaw-labs/zeroclaw/issues/10294) | `file_write` 无法区分创建/覆盖 | OPEN | [#11463](https://github.com/zeroclaw-labs/zeroclaw/pull/11463) 已就绪 |
| [#10741](https://github.com/zeroclaw-labs/zeroclaw/issues/10741) | ZeroCode 队列在正常完成响应后静默暂停 | OPEN | [#11449](https://github.com/zeroclaw-labs/zeroclaw/pull/11449) 已就绪 |
| [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) | Windows Ctrl+C 导致 agent 强制退出 | OPEN | 未见 |

**整体观察：** v0.8.6 发布门禁上的 Bug 中，**约一半有现成 fix PR 待合并**，但合并进度停滞，需维护者加速评审。

---

## 六、功能请求与路线图信号

### 6.1 已进入实现阶段的功能（短期路线图）

| Issue / PR | 功能 | 优先级 | 关联实现 |
|---|---|---|---|
| [#5808](https://github.com/zeroclaw-labs/zeroclaw/issues/5808) | 内置工具 schema 延迟加载 | p2（影响 S1） | [#11473](https://github.com/zeroclaw-labs/zeroclaw/pull/11473) stacked |
| [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) | shell/skill 子进程内存上限 | p1 | [#11456](https://github.com/zeroclaw-labs/zeroclaw/pull/11456) |
| [#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468) | Zerocode 非 agent alias 可重命名 | p2（icebox） | [#11460](https://github.com/zeroclaw-labs/zeroclaw/pull/11460) |
| [#5836](https://github.com/zeroclaw-labs/zeroclaw/issues/5836) | 工具执行协同取消 | p2 | 实现阶段（in-progress） |
| [#7743](https://github.com/zeroclaw-labs/zeroclaw/issues/7743) | delegate 独立 handoff 审批转发 | p2 | 实现阶段 |
| [#7883](https://github.com/zeroclaw-labs/zeroclaw/issues/7883) | 同 provider 族内 fallback 通知 | p3 | [#11464](https://github.com/zeroclaw-labs/zeroclaw/pull/11464) |
| [#10293](https://github.com/zeroclaw-labs/zeroclaw/issues/10293) | `sessions_send` 生命周期语义明确化 | p2 | [#11461](https://github.com/zeroclaw-labs/zeroclaw/pull/11461) |
| [#9460](https://github.com/zeroclaw-labs/zeroclaw/issues/9460) | Windows 密钥文件 ACL 加固 | p2 | 跟进中 |

### 6.2 RFC / 中长期路线图

| Issue | 主题 | 评级 |
|---|---|---|
| [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | **RFC: A2A 协议 crate (zeroclaw-a2a)** | 高风险架构重构 |
| [#11235](https://github.com/zeroclaw-labs/zeroclaw/issues/11235) | **RFC: 知识语料 / 文档 RAG** | 新能力边界 |
| [#11002](https://github.com/zeroclaw-labs/zeroclaw/issues/11002) | zeroclaw-gw 作为独立 IPC 客户端（v0.9.0） | blocked |
| [#9226](https://github.com/zeroclaw-labs/zeroclaw/issues/9226) | 评测体系加入隔离 memory seeding + 副作用评分 | p3（parking-lot） |
| [#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763) | ZeroCode 显示子 agent 活动 + 工具结果可展开 | p2（icebox） |

### 6.3 用户新提交的功能反馈

- **[#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)** "Copy" 一键复制按钮失效（zerocode/tui，S1 阻塞）— 较新提交，标记 `needs-repro`。

---

## 七、用户反馈摘要

从活跃 Issue 评论中提炼：

1. **回归问题引发强烈不满**
   - [#11387](https://github.com/zeroclaw-labs/zeroclaw/issues/11387) 是 [#10609](https://github.com/zeroclaw-labs/zeroclaw/issues/10609) 的二次回归，社区对修复-再回归的循环表达挫败感。
   - 多处出现"regression of #XXXXX"措辞，提示项目治理应强化 **回归测试 + release blocker 标记**。

2. **生产环境的 OOM 事故推动安全特性**
   - [#6916](https://github.com/zeroclaw-labs/zeroclaw/issues/6916) 由 LLM 触发 shell 调用 `wkhtmltopdf` 导致容器 OOM 的真实生产事故驱动，社区迫切需要子进程内存隔离。

3. **provider 配置错误导致本地体验受阻**
   - [#11296](https://github.com/zeroclaw-labs/zeroclaw/issues/11296) 用户用 llama.cpp + router 配置时，模型列表为空。凸显 **quickstart 与自定义 provider 文档** 需补充。

4. **ZeroCode TUI 体验细节受关注**
   - 一键 Copy 失效（[#11418](https://github.com/zeroclaw-labs/zeroclaw/issues/11418)）、alias 重命名（[#7468](https://github.com/zeroclaw-labs/zeroclaw/issues/7468)）、subagent 活动展示（[#8763](https://github.com/zeroclaw-labs/zeroclaw/issues/8763)）— 表明 TUI 是终端用户接触面，社区期待打磨。

5. **Windows 平台兼容性痛点持续**
   - [#9028](https://github.com/zeroclaw-labs/zeroclaw/issues/9028) Ctrl+C 强制退出（exit 1073741510）
   - [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) 命名管道服务端身份校验
   - [#11444](https://github.com/zeroclaw-labs/zeroclaw/pull/11444) Windows service smoke fixture 优化
   - Windows 用户在 CLI/Service 路径上持续遇到边界问题。

---

## 八、待处理积压（提醒维护者关注）

### 8

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*