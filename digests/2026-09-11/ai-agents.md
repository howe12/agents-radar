# OpenClaw 生态日报 2026-09-11

> Issues: 436 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-11 02:29 UTC

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

# OpenClaw 项目日报
**报告日期：2026-09-11**

---

## 1. 今日速览

OpenClaw 仓库今日维持高强度迭代节奏：过去 24 小时内共更新 **436 条 Issues**（新开/活跃 234 条、已关闭 202 条，关闭率约 **46.3%**）和 **500 条 PR**（待合并 230 条、已合并/关闭 270 条，合并/关闭率约 **54%**），同时发布了 **v2026.6.35** 作为 6 月 Extended Stable 线的最终 LTS 版本。社区侧关注热点集中在 **Codex 原生 hook 链路、子进程泄漏、SQLite 锁竞争、Gateway 重启/迁移可靠性** 等稳定性议题，整体反映出 2026.9.x 处于 release-blocker 集中消化阶段，项目处于**关键质量收敛期**。

---

## 2. 版本发布

### v2026.6.35 — June 2026 Extended Stable (LTS) 最终版

- **类型**：LTS 终结版（无破坏性变更承诺的延续补丁线）
- **核心变更**：Bundled provider 与 channel adapter 引入了**更严格的不可信响应边界**——在昂贵处理前对响应体做大小限制与拒绝，并对失败恢复路径做了安全保留。
- **影响范围**：建议在生产环境中长期固定在 6.x LTS 线的用户**直接升级到该版本**，作为下一波 9.x 升级前的稳态基线。
- **迁移注意事项**：6.x → 9.x 的跳跃式升级已经在 #142585、#135776 等 issue 中暴露了多处迁移兼容性问题（Doctor 拒绝合法旧配置、core/plugin 版本错位等），建议先在本版本完成所有存量问题验证再规划跨大版本升级。

链接：[Release v2026.6.35](https://github.com/openclaw/openclaw/releases/tag/v2026.6.35)

---

## 3. 项目进展

今日合并/关闭活动**显著高于平均水平**（270 条 PR 流转、202 条 Issue 关闭），反映出维护团队正在集中清扫积压。以下为代表性推进：

| 类型 | Issue / PR | 进展说明 |
|------|-----------|---------|
| Issue 关闭 | [#125626](https://github.com/openclaw/openclaw/issues/125626) OpenClaw 2026.8.1 beta 反馈（24 评论） | 8.1 beta 周期正式收尾 |
| Issue 关闭 | [#132762](https://github.com/openclaw/openclaw/issues/132762) overflow-retry 提前以 toolResult 收尾 | 重要消息丢失类 bug 已修复 |
| Issue 关闭 | [#139714](https://github.com/openclaw/openclaw/issues/139714) `update_runs` 永久 in-progress | post-core 升级状态机回归修复 |
| Issue 关闭 | [#101763](https://github.com/openclaw/openclaw/issues/101763) Molty 模型 ID 误传 | 模型路由数据规范化 |
| Issue 关闭 | [#90711](https://github.com/openclaw/openclaw/issues/90711) launchd plist stderr 丢弃 | 5.28 回归修复 |
| Issue 关闭 | [#109657](https://github.com/openclaw/openclaw/issues/109657) 通道耐用 ingress drain 推广 | maintainer 增强已落地 |
| Issue 关闭 | [#140770](https://github.com/openclaw/openclaw/issues/140770) 上下文溢出预算忽略 tool schema | max_tokens 估算回归修复 |
| Issue 关闭 | [#144424](https://github.com/openclaw/openclaw/issues/144424) heartbeat 撞 Anthropic 429 自激 | 关键认证/调度风暴修复 |
| Issue 关闭 | [#141033](https://github.com/openclaw/openclaw/issues/141033) `infer model run` 本地 secret 未物化 | 认证路径修复 |
| PR 关闭 | [#144177](https://github.com/openclaw/openclaw/pull/144177) 通道图标按 owning plugin 解析 | UI 资产一致化 |
| PR 关闭 | [#110848](https://github.com/openclaw/openclaw/pull/110848) device pairing 接受填充请求 ID | 边界规范化 |
| PR 关闭 | [#144560](https://github.com/openclaw/openclaw/pull/144560) 移除模型浏览中无用的 auth 预热 | 死代码清理 |

**整体评估**：项目在「升级体验」「认证/路由」「消息不丢」三个最受关注的痛点方向上有**实质性推进**，且多个 P0/P1 release-blocker 已转 closed。

---

## 4. 社区热点

按 24 小时内评论数排序：

| 排名 | Issue / PR | 评论数 | 关注焦点 |
|----|-----------|------|--------|
| 1 | [#125626](https://github.com/openclaw/openclaw/issues/125626) 2026.8.1 beta 反馈 | **24** | Beta 用户汇总的多渠道反馈集中地 |
| 2 | [#91009](https://github.com/openclaw/openclaw/issues/91009) Codex PreToolUse hook relay CPU 100%+ 阻塞 gateway RPC | **22** | Codex 原生集成的 hook 链路可靠性 |
| 3 | [#97616](https://github.com/openclaw/openclaw/issues/97616) OpenClaw 泄漏未收割的 hook/tool 子进程 | **15** | 进程生命周期管理 |
| 4 | [#114612](https://github.com/openclaw/openclaw/issues/114612) memory-core SQLite 无界增长 | **13** | 长期运行实例的存储治理 |
| 5 | [#139714](https://github.com/openclaw/openclaw/issues/139714) update_runs 永久 in-progress | **13** | 升级状态机 |
| 6 | [#132762](https://github.com/openclaw/openclaw/issues/132762) overflow-retry 提前成功 | **12** | 多阶段工作流的尾部确认 |
| 7 | [#136183](https://github.com/openclaw/openclaw/issues/136183) 命令执行器 ssh 挂死 | **11** | 2026.8.1/8.2 回归 |
| 8 | [#142585](https://github.com/openclaw/openclaw/issues/142585) 2026.9.3 Doctor 拒绝合法旧 workspace | **11** | 跨版本迁移阻断 |
| 9 | [#117262](https://github.com/openclaw/openclaw/issues/117262) SQLite 锁竞争致 33s 事件循环停顿 | **10** | DEF-61 性能缺陷 |
| 10 | [#141747](https://github.com/openclaw/openclaw/issues/141747) runtime scaffolding 每轮注入 ~686 tokens | **10** | 上下文效率 |
| 11 | [#101763](https://github.com/openclaw/openclaw/issues/101763

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期：2026-09-11 | 数据窗口：过去 24 小时 | 项目数：13（含 2 个静默项目）**

---

## 1. 生态全景

今天的生态呈现明显的"**三梯队 + 一极化**"格局：**OpenClaw 以 436 条 Issue + 500 条 PR 的吞吐**继续承担基础设施型中枢角色，CoPaw/QwenPaw、ZeroClaw、Hermes Agent 紧随其后组成"高活跃二线阵营"，而 NanoBot、Moltis、LobsterAI、ZeptoClaw、IronClaw、NanoClaw、PicoClaw 则呈现"小步快跑 + 主题聚焦"的维护性节奏。NullClaw 与 TinyClaw 连续 24 小时无活动，需警惕社区活跃度衰减。整体来看，**多通道 IM 适配、长任务超时、WebUI 一致性、Token 成本可控化、安全加固**构成五大共性痛点，反映行业仍处于"个人助手向团队/多租户演进"的临界点。

---

## 2. 各项目活跃度对比

| 项目 | Issues（活跃/关闭） | PRs（待合并/已合） | 今日 Release | 主旋律 | 健康度 |
|------|------------------|------------------|------------|-------|------|
| **OpenClaw** | 234 / 202（46.3% 关闭率） | 230 / 270（54%） | **v2026.6.35 LTS** | 6.x 收尾、9.x 迁移收敛 | 🟢 高活跃 |
| **CoPaw/QwenPaw** | 17 / — | 25 / 2 | **v2.2.1-beta.2** | Hub 多租户、IM 稳定性告警 | 🟢 高活跃 |
| **ZeroClaw** | 50 / **0** | 50 / **0** | 无 | 高活跃零产出，治理 RFC 集中 | 🟡 流量瓶颈 |
| **Hermes Agent** | 43 / 7 | 46 / 4 | 无（v0.21.1 维护期） | Desktop v0.21.0 回归大爆发 | 🟡 活跃承压 |
| **NanoBot** | 2 / 1 | 11 / 11 | 无 | WebUI 打磨 + 多通道稳定性 | 🟢 健康 |
| **LobsterAI** | 0 / 0 | 3 / 9 | 无 | OpenClaw 8.1 升级兼容性 | 🟢 集中修复 |
| **ZeptoClaw** | 0 / 3 | 1 / 18 | 无 | WebSocket 鉴权重构、Dependabot 批更 | 🟢 安全加固 |
| **Moltis** | 2 / 0 | 4 / 3 | 无 | Bug 当日闭环、外部 agent 扩展 | 🟢 健康 |
| **IronClaw** | 1 / 0 | 7 / 2 | 无 | Telegram 命令菜单、MCP 多租户 | 🟢 良好 |
| **PicoClaw** | 2 / 1 | 7 / 0 | 无 | 通道注册 + 新 provider | 🟡 审 PR 放缓 |
| **NanoClaw** | 1 / 2 | 3 / 3 | 无 | setup 链路、SQLite 稳健化 | 🟢 稳扎稳打 |
| **NullClaw** | — | — | — | 24h 无活动 | 🔴 沉默 |
| **TinyClaw** | — | — | — | 24h 无活动 | 🔴 沉默 |

**关键观察**：
- OpenClaw 一家的 Issue + PR 总量（936）相当于其余 12 个活跃项目总和的 **1.6 倍**以上。
- ZeroClaw 50/50 的"双 50"零产出是今日最值得警惕的活跃度信号——需关注其合入管道是否出现系统性阻塞。
- LobsterAI 单日合并 9 个 PR（全部来自 btc69m979y-dotcom），单点贡献者依赖度偏高。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 与同类对比 |
|------|----------|----------|
| **吞吐量** | 436 Issues + 500 PR（24h） | 约为 Hermes/ZeroClaw 的 9 倍、NanoBot 的 30 倍 |
| **版本治理** | 6.x LTS + 9.x 主线双轨制 | 仅 OpenClaw 与 CoPaw 具备正式版本节奏，其余多为持续集成 |
| **下游消费者** | LobsterAI（直接跟随 8.1 升级） | 形成"OpenClaw → LobsterAI"的明确上下游关系 |
| **基础设施深度** | Codex 原生 hook、SQLite 治理、Gateway 多进程 | 远超 NanoBot/IronClaw 等单层抽象项目 |
| **社区规模** | 多日累计数千活跃 issues | 估算活跃贡献者为 Hermes 的 3-5 倍 |

**核心优势**：
1. **LTS 制度化**：v2026.6.35 作为 6.x 终结 LTS，是生态中唯一提供长期支持承诺的项目。
2. **跨版本迁移工具化**：Doctor、memory index 等迁移辅助为下游 LobsterAI 等同类项目树立范式。
3. **架构成熟度**：hook 链路、子进程治理、锁竞争等多层稳定性议题，反映其已度过"快速扩张期"进入"质量收敛期"。

**技术路线差异**：OpenClaw 倾向于"**平台型基座**"（多 provider、多 channel、多 runtime），而 Hermes Agent 偏"**多 Profile Gateway**"、CoPaw 偏"**Hub 协作平台**"、ZeptoClaw 偏"**安全 Rust 容器**"——四者构成生态中四种主流架构范式。

---

## 4. 共同关注的技术方向

### 4.1 多通道 IM 适配与一致性（涉及 7 个项目）
- **OpenClaw #109657**：通道耐用 ingress drain
- **NanoBot #5707/#5711/#5720**：Telegram 命令路由、命名适配、Discord 压缩消息噪音
- **Hermes #44488**：Discord 429 重试；#103363：Telegram schema v2→v3 迁移
- **PicoClaw #3265/#3376**：deltachat 通道初始化；#3349：QQ 鉴权
- **IronClaw #8072/#8076**：Telegram/Slack 命令菜单与配对文案
- **CoPaw #7534/#7662/#7507**：飞书 consumer 卡死、Telegram 代理黑洞、WeCom 150ms 节流
- **ZeroClaw #5514/#6157**：Telegram 多模组合并、Nextcloud Talk API 误用

**核心诉求**：跨通道命令语义统一、流式消息状态生命周期、鉴权健壮性。

### 4.2 长任务 / 后台任务可观测性（涉及 5 个项目）
- **OpenClaw #91009/#97616/#117262/#144424**：hook 子进程泄漏、SQLite 锁竞争 33s 停顿、429 自激
- **NanoBot #5429/#5724**：AgentLoop 后台任务异常被吞（24 天未合并）
- **NanoClaw #3643**：硬编码 30 分钟 ceiling 误杀长回合（14 天无 PR）
- **Hermes #77311/#103375**：Desktop renderer 5GB 内存增长、Bot 槽位饥饿
- **ZeroClaw #9191/#8642**：Cron 无墙钟超时、MCP schema 克隆 OOM

**核心诉求**：超时配置化、后台异常可视化、内存/资源上限显式配置。

### 4.3 WebUI 跨端一致性（涉及 5 个项目）
- **NanoBot #5710/#5722/#5723/#5725/#5641**：侧边栏重构、iOS PWA 触摸一致性、页面宽度对齐
- **IronClaw #8092**：CJK IME 合成保护
- **CoPaw #7177/#7642/#7623**：移动端 Deploy 首页、Chrome 流式空白、移动 Agent 选择器
- **Hermes #107774/#107847**：macOS 折叠侧栏覆盖、TUI 深色主题对比度
- **Moltis #1256/#1263**：前端依赖升级

**核心诉求**：桌面-移动-PWA 三端体验对等、CJK 输入法兼容、视觉层级统一。

### 4.4 Token 成本与记忆治理（涉及 4 个项目）
- **LobsterAI #2641/#2643**：自动技能评审、压缩前记忆保存 opt-in 化
- **CoPaw #7664/#7679**：RemeLight 独立记忆模型、loop /compact 命令
- **NanoBot #5630**：Dream 记忆文件大小保护（防止回归）
- **OpenClaw #114612/#141747**：memory-core SQLite 无界增长、runtime scaffolding 686 tokens 注入

**核心诉求**：用户主导成本开关、轻量模型做后台记忆写入、上下文预算可视化。

### 4.5 安全与多租户隔离（涉及 4 个项目）
- **ZeptoClaw #653/#655/#656/#674**：WebSocket 凭据泄露、token 打印、非恒定时间比较
- **CoPaw #7672**：Windows 沙箱突破（外部研究者披露）
- **ZeroClaw #8279/#9247/#9393/#9391**：delegate 白名单绕过、shell symlink 越界、Bluesky/Reddit 无授权、审计日志空写入
- **Hermes #84266/#107857**：profile 回调解析、隔离 profile OAuth 凭证

**核心诉求**：凭据生命周期治理、多用户工具列表隔离、命令授权中央关卡。

### 4.6 安装/部署一致性（涉及 4 个项目）
- **NanoBot #5726/#5727**：无头服务器初始密码未知
- **NanoClaw #3759/#3760/#3757/#3758**：systemd user instance 缺失、ambient env 误读、setup 提醒去重
- **Moltis #293/#1252**：Docker 新部署 bind-mount 权限
- **OpenClaw #142585**：Doctor 拒绝合法旧 workspace

**核心诉求**：验证工具与运行时行为对齐、文档/默认值与实际部署拓扑匹配。

---

## 5. 差异化定位分析

| 项目 | 核心定位 | 目标用户 | 技术架构关键差异 |
|------|---------|---------|---------------|
| **OpenClaw** | 通用 AI 代理平台基座 | 二次开发者、企业集成方 | Codex 原生 hook、SQLite + Memory-core、双 Runtime、6.x/9.x 双轨 |
| **CoPaw/QwenPaw** | 团队协作型 Hub 平台 | 多人/企业团队 | Hub 多租户管理、AgentScope 生态、记忆系统统一化 |
| **Hermes Agent** | 多 Profile Desktop Gateway | 重度 Desktop 用户、AWS Bedrock 用户 | 多 Profile 隔离、Renderer/Backend 分离、Schema v2→v3 迁移 |
| **ZeroClaw** | 跨平台治理严格型代理 | 工程化导向开发者 | 强制 release 签名（cosign + slsa-gh）、CI 矩阵扩展、PR 评审证据 RFC |
| **NanoBot** | 个人助手 WebUI 优先 | 桌面/移动用户、WebUI 重度用户 | Sidebar 信息架构、统一 49.5rem 内容宽度、Dream/evaluator 命令规范 |
| **LobsterAI** | OpenClaw 中文上层封装 | 中文桌面用户、成本敏感者 | OpenClaw 8.1 跟随、opt-in 默认保守、MCP 热重载收敛 |
| **IronClaw** | NEAR AI 托管 MCP 部署 | 多租户 SaaS 部署方 | hosted-MCP 按 caller 隔离、Telegram/Slack 命令菜单 |
| **Moltis** | 外部 CLI Agent 集成枢纽 | 复合 CLI 用户 | AGY/Gemini CLI 直连、stream-json 协议、reasoning effort 多档位 |
| **NanoClaw** | 轻量级 setup/agent-runner | 裸服务器/容器化部署者 | admission gate 接缝、ABSOLUTE_CEILING 配置化、setup verify 拓扑感知 |
| **ZeptoClaw** | Rust 安全加固容器 | 安全敏感部署者 | 30s 单次 ticket、CSRF 防护、rustsec/audit-check 门禁 |
| **PicoClaw** | 边缘 / Sipeed 硬件生态 | 硬件玩家、QQ 用户 | 轻量 Gateway、多 provider 自动路由（opencode-go 新增） |

---

## 6. 社区热度与成熟度

### 🔴 快速迭代期（High-velocity Iteration）
- **OpenClaw**：936 条/天的吞吐 + LTS 发布线，6.x→9.x

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**日期：2026-09-11**

---

## 1. 今日速览

NanoBot 项目今日保持高度活跃，过去 24 小时共处理 **3 个 Issue**（1 关闭/2 活跃）和 **22 个 PR**（11 已合并或关闭/11 待合并），PR/Issue 比接近 7:1，呈现典型的"集中修复+持续功能演进"模式。代码合并以 **WebUI 体验优化**（侧边栏重构、对话元素对齐、页面宽度统一）和**多通道稳定性修复**（Telegram、Discord 命令路由与上下文压缩提示）为主线，同时完成了 MCP OAuth 令牌自动刷新、UTF-8 流式输出编码、AgentLoop 后台任务异常捕获等关键缺陷修复。核心维护者 **chengyongru** 单日提交 5 个 PR（3 合/2 待），是今日的主要推动力。整体而言，项目健康度良好，缺陷响应迅速，社区贡献者参与度持续提升。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日共有 **11 个 PR 完成生命周期**，其中绝大多数为 Bug 修复与 WebUI 体验打磨，标志着 9 月初密集的修复周期进入收尾阶段：

### 🔧 关键 Bug 修复
- **#5573 [已关闭]** `fix(mcp): refresh expired OAuth tokens automatically` —— MCP 集成层面实现 OAuth 令牌过期自动刷新，持久化绝对过期时间、AS 元数据与绑定发行者，网关重启后仍能完成刷新循环。([链接](https://github.com/HKUDS/nanobot/pull/5573))
- **#5708 [已关闭]** `fix(exec): preserve UTF-8 across streaming output chunks` —— 修复长时 exec 会话中跨 4,096 字节读取边界的 UTF-8 多字节字符被替换为无效字符的问题。([链接](https://github.com/HKUDS/nanobot/pull/5708))
- **#5711 [已关闭]** `fix(telegram): adapt command spellings within the channel` —— Telegram 通道内将下划线命令名适配为规范连字符命名（Dream、evaluator），保持跨通道命令一致性。([链接](https://github.com/HKUDS/nanobot/pull/5711))
- **#5707 [已关闭]** `fix(tg): route /compact and /evaluator-prompt to the command router` —— 修复 `/compact` 与 `/evaluator-prompt` 在 Telegram 中被静默丢弃的问题。([链接](https://github.com/HKUDS/nanobot/pull/5707))
- **#5469 [已关闭]** `fix(tui): show measured request context` —— TUI 空闲页脚仅显示供应商报告的最新请求上下文，移除临时推理 token 显示。([链接](https://github.com/HKUDS/nanobot/pull/5469))

### 🎨 WebUI 体验优化
- **#5710 [已关闭]** `feat(webui): organize projects and simplify sidebar navigation` —— 侧边栏重组为 Topics/Projects/Automations 三大固定入口，主题历史进入主面板。([链接](https://github.com/HKUDS/nanobot/pull/5710))
- **#5722 [已关闭]** `feat(webui): refine sidebar hierarchy and selection feedback` —— 侧边栏采用统一滑动圆角背景作为选中反馈，子主题与父标题对齐并显示左侧折叠箭头。([链接](https://github.com/HKUDS/nanobot/pull/5722))
- **#5723 [已关闭]** `fix(webui): align standalone page widths with conversations` —— Apps/Skills/Automations/Channels 页面统一使用 49.5rem 内容宽度并对齐会话主界面。([链接](https://github.com/HKUDS/nanobot/pull/5723))
- **#5725 [已关闭]** `fix(webui): align chat elements and fix prompt rail grouping` —— 消息底部图标与对话左缘对齐，渲染上下文压缩提示为分隔符元素。([链接](https://github.com/HKUDS/nanobot/pull/5725))

### 📌 Issue 关闭
- **#5647 [已关闭]** `fix(webui): session title not generated when frontend envelope lacks webui flag` —— PR #5528 的回归已修复。([链接](https://github.com/HKUDS/nanobot/issues/5647))

**项目整体向前推进**：多通道（Telegram/Discord/MCP）稳定性进一步加固；WebUI 信息架构完成一次重要迭代；AgentLoop 后台任务可观测性正在被补齐。

---

## 4. 社区热点

今日评论区活跃度整体偏低（多数 PR 评论数显示为 `undefined`，意味着主要是提交说明而非长讨论），但仍可识别几个高关注主题：

| 主题 | 代表 PR/Issue | 讨论焦点 |
|------|--------------|---------|
| **WebUI 跨端体验一致性** | [#5641](https://github.com/HKUDS/nanobot/pull/5641) [#5723](https://github.com/HKUDS/nanobot/pull/5723) [#5725](https://github.com/HKUDS/nanobot/pull/5725) | iOS PWA 触摸一致性、页面宽度对齐、消息元素对齐——表明用户对跨设备一致体验的需求强烈 |
| **后台任务可观测性** | [#5429](https://github.com/HKUDS/nanobot/issues/5429) [#5724](https://github.com/HKUDS/nanobot/pull/5724) | AgentLoop 后台任务异常被吞，开发者难以排查失败任务；多人共同关注 |
| **无头服务器 WebUI 部署** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) [#5727](https://github.com/HKUDS/nanobot/pull/5727) | 用户在无 JS 环境下访问 WebUI 找不到初始密码，文档与产品体验的鸿沟凸显 |
| **多通道命令对齐** | [#5711](https://github.com/HKUDS/nanobot/pull/5711) [#5707](https://github.com/HKUDS/nanobot/pull/5707) | Telegram 命令名与 Dream/evaluator 规范命名需要适配，命令路由器需要覆盖全部内置命令 |
| **会话上下文压缩提示体验** | [#5720](https://github.com/HKUDS/nanobot/pull/5720) | Discord 上 `Compressing context…` 与 `Context compacted.` 重复发消息被认定为噪音，需就地更新 |

**背后诉求**：用户希望 NanoBot 在多通道、多设备部署场景下保持一致的可用性与可观测性，配置项（如 WebUI 登录密钥）应透明可寻。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 修复 PR |
|--------|------|------|---------|
| 🔴 高 | **AgentLoop 后台任务异常被丢弃**（#5429）—— 后台任务失败仅以 asyncio "Task exception was never retrieved" 出现，业务侧（后回合整合、会话归档、WebUI 标题生成、后台命令）无可见反馈 | OPEN（自 8 月 18 日） | [#5724](https://github.com/HKUDS/nanobot/pull/5724) 待合并 |
| 🟠 中 | **Telegram `/compact` 与 `/evaluator-prompt` 被静默丢弃**（#5707）—— 用户输入合法命令却无响应 | 已修复 | [#5707](https://github.com/HKUDS/nanobot/pull/5707) |
|  中 | **Discord 上下文压缩重复发消息**（#5720 关联 #5719）—— 即便 `channels.sendProgress: false` 也会产生两条噪音消息 | 已修复 | [#5720](https://github.com/HKUDS/nanobot/pull/5720) |
| 🟠 中 | **WebUI 无头服务器无法登录**（#5726）—— 用户不知初始密码来源 | OPEN（新增） | 文档修复 [#5727](https://github.com/HKUDS/nanobot/pull/5727) 待合并 |
|  低 | **exec 流式输出 UTF-8 损坏**（#5708）—— 长任务中文/表情符号输出被替换为 `?` | 已修复 | [#5708](https://github.com/HKUDS/nanobot/pull/5708) |
| 🟡 低 | **WebUI 搜索切换丢失 API 类型选择**（#5698）—— 启用 OpenAI 搜索后禁用搜索时，原 API 类型未恢复 | OPEN | [#5698](https://github.com/HKUDS/nanobot/pull/5698) 待合并 |
|  低 | **WebUI iOS PWA 首击吞没**（#5641）—— `:hover` 链导致 group-hover 按钮状态异常 | OPEN | [#5641](https://github.com/HKUDS/nanobot/pull/5641) 待合并 |

**回归风险提示**：PR #5630（Dream 记忆文件大小保护）尚未合并，PR #5622 修复 `SOUL.md` / `USER.md` / `MEMORY.md` 系统提示重复 bug 时顺手移除了原有的 8000 字符上限，存在"修复引入新漏洞"的回归窗口。

---

## 6. 功能请求与路线图信号

| 需求/提议 | 来源 | 路线图可能性 |
|----------|------|-------------|
| **无头服务器部署文档** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) | ⭐⭐⭐ 极高 —— [#5727](https://github.com/HKUDS/nanobot/pull/5727) 当日即提交文档 PR，几乎确定进入下一版本 |
| **Cron 任务投递目标与批量归档** | [#5620](https://github.com/HKUDS/nanobot/pull/5620) | ⭐⭐⭐ 高 —— 已实现完整生命周期管理、工具与 WebUI 双重入口，预计近期合并 |
| **模型 Provider 删除控制** | [#5352](https://github.com/HKUDS/nanobot/pull/5352) | ⭐⭐⭐ 高 —— 实现引用检测与本地化反馈，符合"安全删除"产品方向 |
| **通道目录两列分组重设计** | [#5356](https://github.com/HKUDS/nanobot/pull/5356) | ⭐⭐ 中高 —— 与 #5710/#5722/#5725 一脉相承，UI 改版主线推进中 |
| **WebUI 完成提示音** | [#5602](https://github.com/HKUDS/nanobot/pull/5602) | ⭐⭐ 中 —— 关闭 [#5524](https://github.com/HKUDS/nanobot/issues/5524)，opt-in 设计较为克制 |
| **Dream 记忆文件大小上限恢复** | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | ⭐⭐⭐ 极高 —— 属于回归修复，合并概率高 |
| **Archive 整合 prompt 工作区覆盖** | [#5702](https://github.com/HKUDS/nanobot/pull/5702) | ⭐⭐ 中 —— 与 Dream 现有的 `/dream-prompt init` 模式对齐，逻辑清晰 |

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

- 🗣️ **gardiol（Issue #5726）**："我在无头服务器上安装了 nanobot，默认它启动的链接没有 JS 支持，我不得不关闭它再用 Firefox 从另一台机器访问……但我现在完全不知道该在 WebUI 里填什么密码。" —— **核心痛点**：文档与默认行为的鸿沟；用户对引导流程的"开箱即用"期望强烈。
- 🗣️ **yu-xin-c（Issue #5429）**：`AgentLoop.schedule_background()` 通过 `set.discard` 静默清理任务，从不调用 `task.result()`，导致后台任务失败仅暴露为 asyncio 的通用警告。 —— **核心痛点**：业务关键路径（后回合整合、会话归档、标题生成）的失败被掩盖，运维与排障困难。
- 🗣️ **zpljd（Issue #5647 总结）**：报告 PR #5528 在 WebUI 会话标题生成中存在的回归，需要在 envelope 缺少 webui flag 时正确投影到 per-chat session key。 —— **核心痛点**：unifiedSession 模式下多频道标题相互覆盖，影响产品体验。
- 🗣️ **L4XB（PR #5720）**：Discord 上下文压缩发出两条独立消息是"信息噪音"，压缩生命周期对用户而言是有意义的状态提示，应就地更新而非新发消息。 —— **核心痛点**：通道推送不应淹没用户的真实对话流。

**满意点**：多通道命令路由器、Telegram 命令名适配、模型 Provider 删除的引用检查等受到开发者欢迎；UTF-8 流式编码修复被多人确认解决中文输出乱码。

**不满意点**：iOS PWA 触摸一致性、Windows/Linux 桌面浏览器适配仍需打磨；后台任务失败可观测性长期不足（自 8 月 18 日起未完全解决）。

---

## 8. 待处理积压

以下重要 Issue/PR 长期未响应，维护者应优先关注：

| 类型 | 编号 | 标题 | 创建时间 | 等待天数 | 备注 |
|------|------|------|---------|---------|------|
| 🔴 Issue | [#5429](https://github.com/HKUDS/nanobot/issues/5429) | AgentLoop does not retrieve exceptions from background tasks | 2026-08-18 | **24 天** | 已有 PR #5724 候选，但 Issue 主线程仍 OPEN，需推动 PR 合入 |
|  PR | [#5356](https://github.com/HKUDS/nanobot/pull/5356) | feat(webui): improve setup flows across chat channels (NAN-112) | 2026-08-12 | **30 天** | 大型 WebUI 重构 PR，审查周期长，与其他侧边栏改版 PR（#5710/#5722）存在功能重叠风险 |
| 🟠 PR | [#5352](https://github.com/HKUDS/nanobot/pull/5352) | Add model provider removal controls | 2026-08-12 | **30 天** | 含 conflict 标记，需要 rebase |
|  PR | [#5620](https://github.com/HKUDS/nanobot/pull/5620) | feat(cron): support configurable delivery and batch archive | 2026-09-01 | **10 天** | 功能完整、含 WebUI 入口，建议优先 review |
| 🟡 PR | [#5630](https://github.com/HKUDS/nanobot/pull/5630) | fix(agent): add size guardrails to Dream memory files | 2026-09-02 | **9 天** | 关键回归修复，建议加急 |
|  PR | [#5641](https://github.com/HKUDS/nanobot/pull/5641) | fix(webui): iOS PWA tap and status-bar fixes | 2026-09-03 | **8 天** | iOS 用户体验问题，影响移动场景 |
| 🟡 PR | [#5698](https://github.com/HKUDS/nanobot/pull/5698) | fix(webui): preserve explicit API types across search toggles | 2026-09-08 | **3 天** | OpenAI Responses API 切换体验修复 |
| 🟡 PR | [#5702](https://github.com/HKUDS/nanobot/pull/5702) | fix(memory): add workspace override for the Archive consolidation prompt | 2026-09-08 | **3 天** | 与 #5630 共同完善记忆系统 |
| 🟡 PR | [#5602](https://github.com/HKUDS/nanobot/pull/5602) | feat(webui): add completion notification sound | 202

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**日期：2026-09-11**

---

## 1. 今日速览

Hermes Agent 仓库今日保持高度活跃，24 小时内处理 **50 条 Issue 更新**（43 活跃 / 7 关闭）和 **50 条 PR 更新**（46 待审 / 4 已关闭），但 **无新版本发布**，整体处于 v0.21.x 的密集修bug阶段。Issue 端大量集中在 **桌面端 (Desktop) 与多 Profile/Gateway 架构** 的回归问题（尤其 0.21.0 升级后的 schema/迁移缺陷），PR 端则呈现出 "一个 bug 多个 PR 并行修复" 的特点，反映出 0.21 大版本迁移遗留问题较多，社区贡献踊跃但合并节奏偏慢。项目当前健康度评估：**活跃但承压**——社区贡献度极高，但 P1 级回归问题尚未完整收敛，下一版本发布前仍需重点关注。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发版仍为 v0.21.1（基于 Issue 引用），当前代码库处于 0.21.x 维护期，密集修复 0.21.0 引入的回归问题。

---

## 3. 项目进展

今日 **4 条 PR 被关闭**（含 1 条合并），推进了以下修复：

| PR | 说明 | 影响面 |
|---|---|---|
| [#44488](https://github.com/NousResearch/hermes-agent/pull/44488) | Discord 适配器在独立发送路径下重试 429，遵守 `retry_after` | 多块消息投递 |
| [#41296 关闭](https://github.com/NousResearch/hermes-agent/issues/41296) | Bedrock 中途 `/model` 切换未设置 `_bedrock_region` 导致区域推理 profile 失败 | AWS Bedrock 用户 |
| [#105666 关闭](https://github.com/NousResearch/hermes-agent/issues/105666) | Desktop 更新检查在浅克隆上下载过量 pack（573MB） | Desktop 自动更新 |
| [#84266 关闭](https://github.com/NousResearch/hermes-agent/issues/84266) | 带 profile 前缀的平台回调可能经默认适配器解析 | 安全边界 |

总体看，项目稳步推进了 **Discord 投递、Bedrock 区域推理、Desktop 更新体积、安全审计 4 大类** 修复，但相较于 50 条新增 PR 而言合并节奏仍偏慢（合并率 8%）。

---

## 4. 社区热点

**🔥 最热讨论：自动化监控告警 Issue**
- [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) — **193 条评论**，由 `nousbot-eng` 创建的自动化 freshness 探针报告 Skills 索引陈旧（29.8h 超 26h 上限）。这是机器人维护 Issue，并非真实用户反馈，但其触发说明 `.github/workflows/skills-index.yml`（每 6/18 UTC 执行）持续异常，需关注。

**📌 用户真实热度 Top 5：**

1. [#77311](https://github.com/NousResearch/hermes-agent/issues/77311) — **8 评论** | Desktop renderer 内存随会话内容线性增长，重度使用后达 **5GB**。`$messages` atom 永久保留所有会话所有消息。
2. [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) — **7 评论** | 20 个 profile 配置下 Bot 瓦片无限重连循环，Warm Bot Backends 槽位永不释放。
3. [#107387](https://github.com/NousResearch/hermes-agent/issues/107387) — **6 评论** | Skill 斜杠命令（如 `/grilling`）静默失败，仅打印 "⚡ Loading skill" 后无响应。
4. [#18990](https://github.com/NousResearch/hermes-agent/issues/18990) — **5 评论** | Kimi Coding 视觉能力恢复（上游已支持 image input）。
5. [#101535](https://github.com/NousResearch/hermes-agent/issues/101535) — **5 评论** | Hermes Desktop v0.21.0 中 Bot Mode Bots tab 消失。

**背后诉求分析：** Top 5 中 **3 项直接与 Desktop v0.21.0 回归相关**（#103375、#107387、#101535），反映出 0.21 大版本迁移在 Desktop 端的 QA 覆盖明显不足，UI 与 Session/Profile 架构变更未充分端到端验证。

---

## 5. Bug 与稳定性

### 🔴 P1 严重（影响核心功能）

| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#77311](https://github.com/NousResearch/hermes-agent/issues/77311) | Desktop renderer 内存无界增长至 5GB |  无 |
| [#103375](https://github.com/NousResearch/hermes-agent/issues/103375) | Bot tiles 无限重连，Warm Backends 槽位饥饿 | ❌ 无 |
| [#107387](https://github.com/NousResearch/hermes-agent/issues/107387) | Skill 斜杠命令静默丢弃 prompt | ❌ 无 |
| [#103363](https://github.com/NousResearch/hermes-agent/issues/103363) | 0.21.0 升级后 Telegram 自动 topic 重命名静默失效（schema v2→v3 迁移未触发） | ✅ [#107207](https://github.com/NousResearch/hermes-agent/pull/107207) |
| [#79859](https://github.com/NousResearch/hermes-agent/issues/79859) | Desktop "Talk to Hermes" 在 OpenAI TTS 下仍走延迟 MP3 全文件播放 | ❌ 无 |
| [#107833 修复](https://github.com/NousResearch/hermes-agent/pull/107833) | Anthropic 流式 JSON 解析失败导致工具调用失败 | ✅ PR 已开 |

### 🟠 P2 中等

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#101535](https://github.com/NousResearch/hermes-agent/issues/101535) | Desktop v0.21.0 Bot Mode Bots tab 不显示 | ❌ |
| [#80625](https://github.com/NousResearch/hermes-agent/issues/80625) | Desktop SSH 远程后端在 Fish shell 账户下失败 | ✅ [#107849](https://github.com/NousResearch/hermes-agent/pull/107849) |
| [#106009](https://github.com/NousResearch/hermes-agent/issues/106009) | Desktop Sessions 侧栏宽度为 0 但 focus_pane 报成功 | ✅ [#107217](https://github.com/NousResearch/hermes-agent/pull/107217) |
| [#90782](https://github.com/NousResearch/hermes-agent/issues/90782) | 终端 env snapshot 泄漏 `HERMES_DELEGATED_CHILD_CONTEXT` 破坏 kanban CLI | ❌ |
| [#96776](https://github.com/NousResearch/hermes-agent/issues/96776) | approvals hardline 在 grep 引号方括号类上误判 | ❌ |
| [#107850](https://github.com/NousResearch/hermes-agent/issues/107850) | Background Review 同会话注入轮未设 `write_origin` | ❌ |
| [#107817](https://github.com/NousResearch/hermes-agent/issues/107817) | 更新回执记录非 gateway runtime 时 fleet-restart 警告不消失 | ❌ |
| [#107774](https://github.com/NousResearch/hermes-agent/issues/107774) | macOS 折叠侧栏时 panel tab 覆盖标题栏按钮 | ✅ [#107217](https://github.com/NousResearch/hermes-agent/pull/107217) |
| [#105855](https://github.com/NousResearch/hermes-agent/issues/105855) | Windows Desktop 更新检查报告服务器不可达 | ❌ |
| [#105951](https://github.com/NousResearch/hermes-agent/issues/105951) | 浅克隆更新累积 graft，失败检查每次 CLI 启动都重试 | ✅ [#93759](https://github.com/NousResearch/hermes-agent/pull/93759) |
| [#107848](https://github.com/NousResearch/hermes-agent/issues/107848) | Desktop clarify 问题卡死 spinner | ✅ [#107848](https://github.com/NousResearch/hermes-agent/pull/107848) |

###  P3 较低

- [#18990](https://github.com/NousResearch/hermes-agent/issues/18990) Kimi Coding 视觉恢复  
- [#87739](https://github.com/NousResearch/hermes-agent/issues/87739) `/hatch` 浪费付费图像请求重试不可分割动画 → ✅ [#107796](https://github.com/NousResearch/hermes-agent/pull/107796) [#107797](https://github.com/NousResearch/hermes-agent/pull/107797)
- [#77881](https://github.com/NousResearch/hermes-agent/issues/77881) Kanban 重试丢失 worker 上下文
- [#103355](https://github.com/NousResearch/hermes-agent/issues/103355) hermes-lcm 插件下压缩预算不重置
- [#107854](https://github.com/NousResearch/hermes-agent/issues/107854) Windows 11 25H2 默认浏览器检测失效 → ✅ [#107855](https://github.com/NousResearch/hermes-agent/pull/107855)
- [#107813](https://github.com/NousResearch/hermes-agent/issues/107813) `GLUED_AFTER_PROSE` 在 CJK 上过度切分粗体
- [#107847](https://github.com/NousResearch/hermes-agent/pull/107847) TUI 深色主题 diff 对比度

**统计：** 18 个已识别 bug 中，**9 个已有对应修复 PR**（50% 覆盖率），P1 级别仍有 4 个无修复 PR 待认领。

---

## 6. 功能请求与路线图信号

| 提案 | 内容 | 实现可能性 |
|---|---|---|
| [#48693](https://github.com/NousResearch/hermes-agent/issues/48693) | Gateway config.yaml 热重载（无需 `/restart`） | 🟢 高 — 长期用户痛点，对应 PR [#93759](https://github.com/NousResearch/hermes-agent/pull/93759) 已部分解决 update 路径 |
| [#107700](https://github.com/NousResearch/hermes-agent/issues/107700) | secrets 系统拆分：source-apply 与 tools/HTTP 注入分离 | 🟡 中 — 与今日关闭的 #102041（secret-source 丢失）直接相关 |
| [#92345](https://github.com/NousResearch/hermes-agent/pull/92345) | CLI skin 系统扩展 diff hunks 与 confirm 面板配色键 | 🟢 高 — PR 状态积极 |
| [#107533](https://github.com/NousResearch/hermes-agent/pull/107533) | 通过 `tool_search` 在系统提示中提示隐藏的 MCP 工具 |  中 — duplicate 标签需合并 |
| [#107857](https://github.com/NousResearch/hermes-agent/pull/107857) | 隔离 profile 自有的 OAuth 凭证 | 🟢 高 — 与安全审计联动 |

**路线图信号：** 安全边界加固（OAuth 隔离、profile 隔离）、Desktop UX 稳定化、配置热重载生态 三大方向并行推进。

---

## 7. 用户反馈摘要

**🔴 主要痛点：**

1. **Desktop v0.21.0 升级翻车集中爆发** — 多个用户在升级后报告 Bot tab 消失、Sidebar 异常、Telegram schema 迁移静默失败，**强烈要求加强迁移路径的可见性**（如启动时打印 schema 版本与待迁移任务）。
2. **资源占用失控** — 用户对 Desktop renderer 内存 5GB 占用深恶痛绝（#77311），希望提供 `window.session.maxMessages` 等显式上限配置。
3. **Bot 后端槽位饥饿** — 20+ profile 用户（#103375）反映本地后端池被隐藏的 bot 永久占用。
4. **Fish shell 用户被忽视** — #80625 / #107849 显示 Fish 用户在 Desktop SSH 与 PATH 探测场景下完全无法使用。
5. **CJK 用户体验** — #107813 指出 reasoning-block 切分在 DeepSeek 中文思考流上严重破坏粗体语义。
6. **Windows 11 25H2 默认浏览器检测** — #107854 / #107855 反映出 Microsoft UCPD.sys + Settings 不写 ProgId 的双重阻碍。

**🟢 满意点：**
- Discord 429 重试（#44488）修复后用户反馈多块消息投递恢复。
- Windows browser detection 修复 PR（#107855）当日即被响应，响应速度获好评。

---

## 8. 待处理积压（提醒维护者关注）

| Issue/PR | 创建日期 | 等待时长 | 风险 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | ~55 天 | Skills Hub 索引陈旧，文档站数据可信度下降 |
| [#18990](https://github.com/NousResearch/hermes-agent/issues/18990) | 2026-05-02 | ~

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-09-11**
**仓库：[sipeed/picoclaw](https://github.com/sipeed/picoclaw)**

---

## 1. 今日速览

PicoClaw 今日整体处于**中等活跃、以维护性更新为主**的节奏。过去 24 小时共产生 2 条 Issue 更新和 7 条 PR 更新，其中 5 条 PR 来自 Dependabot 的常规依赖升级，实质性人工贡献较少。值得关注的是：Issue #3265（deltachat 启动失败）已于今日关闭，对应修复 PR #3376 已同步提交，形成了完整的"问题报告→修复"闭环；新增的 PR #3371 则带来了 opencode-go provider 支持，扩展了模型接入能力。整体而言，项目运转正常，但缺乏新版本发布，关键 PR 合并进度有待推进。

---

## 2. 版本发布

**今日无新版本发布。**

由于 7 条 PR 均处于 OPEN 状态、0 条已合并，且包含较多依赖升级类变更，建议维护者在合并关键 PR（特别是 #3371 和 #3376）后适时发布补丁版本。

---

## 3. 项目进展

今日无 PR 被合并，以下两项 PR 为今日核心进展：

| PR | 标题 | 影响 |
|---|---|---|
| [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat): initialize as custom channel | 修复 Gateway 启动时的 deltachat 通道配置校验错误，直接闭环 Issue [#3265](https://github.com/sipeed/picoclaw/issues/3265) |
| [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider with session header support | 新增对 OpenCode Go (`opencode.ai/zen/go/v1`) 的支持，并自动按模型 ID 路由，支持 `x-opencode-session` 会话头 |

其余 5 条 PR 均为 Dependabot 的依赖升级：

- [#3364](https://github.com/sipeed/picoclaw/pull/3364)：`aws-sdk-go-v2` 1.42.0 → 1.45.1
- [#3363](https://github.com/sipeed/picoclaw/pull/3363)：`ergochat/irc-go` 0.6.0 → 0.7.0
- [#3362](https://github.com/sipeed/picoclaw/pull/3362)：`golang.org/x/term` 0.44.0 → 0.45.0
- [#3361](https://github.com/sipeed/picoclaw/pull/3361)：`google.golang.org/protobuf` 1.36.11 → 1.36.12
- [#3360](https://github.com/sipeed/picoclaw/pull/3360)：`larksuite/oapi-sdk-go/v3` 3.9.4 → 3.11.0

**整体评估**：依赖卫生保持良好（常规安全更新），核心功能有 1 项新 provider 接入和 1 项通道修复 PR 待审。推进节奏**中等偏慢**——7 条 PR 均 OPEN 0 条合并，建议维护者加快审查。

---

## 4. 社区热点

按评论数与互动度排序，今日最活跃的讨论集中在两个 Issue：

1. **[#3265 - Gateway startup fails with deltachat unknown type](https://github.com/sipeed/picoclaw/issues/3265)** ⭐1 · 💬6
   - 状态：今日关闭
   - 热度最高，反映社区对**通道注册机制**存在较多疑问
   - 用户诉求：希望即使未配置 deltachat，Gateway 也能正常启动（或给出明确提示）

2. **[#3349 - QQ 频道无法正常使用](https://github.com/sipeed/picoclaw/issues/3349)** · 💬4
   - 状态：OPEN（标记 stale）
   - 报告 Docker 与 Linux x86 两个版本均存在 QQ WebSocket 鉴权失败（错误码 40011005）

**诉求分析**：当前热点反映两个方向 ——（a）通道（channel）配置健壮性；（b）国内 IM 平台（QQ）适配质量。这两类问题直接影响 PicoClaw 作为"个人 AI 助手网关"的核心价值。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 通道 401 鉴权错误（`Authorization header 格式错误`），多平台复现 | ❌ 无 |
| 🟡 中 | [#3265](https://github.com/sipeed/picoclaw/issues/3265) | deltachat 通道类型识别错误导致 Gateway 启动失败 | ✅ [PR #3376](https://github.com/sipeed/picoclaw/pull/3376) 已提交 |

**风险提示**：#3349 报告的错误码 `40011005` 来自 QQ 开放平台官方返回，通常意味着 Authorization 头部格式或 token 类型与预期不匹配（如 Bot Token 与 Access Token 混淆），需检查 PicoClaw 的 QQ 鉴权实现。Issue 已被标记 stale，建议维护者主动响应。

---

## 6. 功能请求与路线图信号

今日明确的功能扩展信号来自：

- **[PR #3371 - opencode-go provider](https://github.com/sipeed/picoclaw/pull/3371)**：由社区贡献者 `EMTumariscal` 主动新增 provider。如果合并，PicoClaw 将原生支持 OpenCode Go（含按模型 ID 自动路由和会话头），这是继 provider 生态扩展的又一个新增选项，**很可能纳入下一版本**。

**隐含信号**：
- QQ 通道问题（#3349）的多次出现，暗示用户对**多 IM 平台支持**有较强需求，若维护者愿意投入，QQ 适配加固可成为路线图候选。
- Dependabot 高频出现 irc-go 升级，提示 **IRC 通道**仍是活跃使用场景。

---

## 7. 用户反馈摘要

从 Issue 评论中可提炼以下真实声音：

- **通道健壮性**（#3265）：用户反馈即便不在 `config.json` 中启用 deltachat，Gateway 也会因"unknown type"启动失败 —— 说明**配置校验逻辑过于严格**，缺少对未知通道的优雅降级或更友好的错误提示。
- **QQ 通道稳定性**（#3349）：用户同时测试 Docker 和 Linux x86 二进制，均出现 401 鉴权错误，且错误响应中暴露了 trace_id，表明问题**可稳定复现**，但目前仍无修复或官方回应。
- **社区响应满意度**：#3265 在关闭前积累了 6 条评论与 1 个 👍，且最终通过 PR #3376 形成修复闭环，**处理流程值得肯定**。

---

## 8. 待处理积压

维护者需关注以下长期未推进的事项：

| 类型 | 编号 | 标题 | 创建日期 | 状态 |
|---|---|---|---|---|
| PR | [#3371](https://github.com/sipeed/picoclaw/pull/3371) | feat(providers): add opencode-go provider | 2026-09-08 | OPEN 3 天 |
| PR | [#3376](https://github.com/sipeed/picoclaw/pull/3376) | fix(deltachat): initialize as custom channel | 2026-09-10 | OPEN 1 天 |
| PR | [#3360](https://github.com/sipeed/picoclaw/pull/3360) ~ [#3364](https://github.com/sipeed/picoclaw/pull/3364) | 5 个 Dependabot 依赖 PR | 2026-09-03 | OPEN 8 天，均已标 stale |
| Issue | [#3349](https://github.com/sipeed/picoclaw/issues/3349) | QQ 通道 401 鉴权失败 | 2026-08-30 | OPEN 12 天，标 stale |

**提醒**：
- 5 条 Dependabot PR 已挂起超过一周并被标记 stale，建议批量合并以保持依赖新鲜度。
- Issue #3349（QQ）作为高严重度可复现问题，长期无官方响应可能影响国内用户口碑，建议维护者优先响应或给出 workaround 说明。

---

### 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐ | 7 PR / 2 Issue，中等节奏 |
| 响应度 | ⭐⭐ | 高严重度 Issue #3349 长期无回应 |
| 代码流入 | ⭐⭐⭐ | 含 1 项新 provider + 1 项通道修复，质量较高 |
| 依赖卫生 | ⭐⭐⭐ | Dependabot 正常运转，但合并滞后 |
| 版本节奏 | ⭐⭐ | 今日无版本发布，关键 PR 待合并 |

**结论**：PicoClaw 处于**稳定维护期**，无明显衰退迹象，但维护者审 PR 节奏有放缓趋势，建议本周内集中合并 #3376、#3371 及 Dependabot PR，并就 #3349 给出官方回应，以维持社区信心。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**日期：2026-09-11** | **数据来源：qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 今日维持中低强度但高质量的开发节奏：过去 24 小时共处理 **3 条 Issue 关闭/活跃**、**6 条 PR 更新**，其中 **3 条已合并/关闭、3 条仍待合并**，**无新版本发布**。今日的核心主题集中在 **setup/verify 安装链路的一致性修复** 和 **agent-runner 的 SQLite 资源调度优化**，呈现"安装侧打磨 + 运行侧稳健化"的双线推进。唯一高优先级开放 Issue（#3643）讨论硬编码 30 分钟超时对长回合本地模型的误杀问题，社区反馈量仍较低，需要维护者主动推动。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注 PR #3689（symlink 快照修复）和 PR #3758（setup 提醒去重）合并后是否触发 patch 版本（如 2.3.1）。

---

## 3. 项目进展

今日共有 3 条 PR 完成关闭周期，对项目稳定性形成实质性推进：

- **PR #3707 — feat(agent-runner): add `registerAdmissionGate` poll-loop seam** （[链接](https://github.com/qwibitai/nanoclaw/pull/3707)）
  - 在 `admission-gate.ts` 引入注册/评估/重置三件套，嵌入到外层 poll 循环的 abort 检查之后。
  - **意义**：为 `getPendingMessages` 之前的入队策略提供了可插拔接缝，是后续限流、准入控制、单元测试化的关键基础设施。

- **PR #3708 — fix(agent-runner): set `busy_timeout` before `journal_mode` on outbound open** （[链接](https://github.com/qwibitai/nanoclaw/pull/3708)）
  - 调换两个 PRAGMA 语句顺序。原因清晰：`journal_mode` 需要数据库文件的排他锁，而 `busy_timeout` 正是避免其他连接忙等的兜底机制。
  - **意义**：避免 outbound 写库时的死锁/超时回归，属于底层稳健性修复。

- **PR #3760 — fix(setup): verify sees a nohup-started host when systemd has no user instance** （[链接](https://github.com/qwibitai/nanoclaw/pull/3760)）
  - 修复 #3759：当 systemd 是 PID 1 但用户实例不可达（`systemctl --user` 报 Failed to connect to bus）时，`setup/service.ts` 回退到 nohup 启动，verify 也需识别该路径。
  - **意义**：让"无 systemd 用户实例的服务器"成为一等部署目标，降低非桌面 Linux 环境下的安装门槛。

**整体评价**：今日合并 PR 集中在 agent-runner 与 setup 两块，没有横向新功能，但都为后续更复杂的特性（如入队限流、跨环境部署）打下基线。

---

## 4. 社区热点

按评论/互动密度排序，今日话题分布：

| 排名 | 话题 | 类型 | 评论 | 链接 |
|------|------|------|------|------|
| 1 | #3643 硬编码 30 分钟 ceiling 误杀长回合 | Issue（高优） | 1 | [链接](https://github.com/qwibitai/nanoclaw/issues/3643) |
| 2 | #3761 permission probe | Issue（关闭） | 1 | [链接](https://github.com/qwibitai/nanoclaw/issues/3761) |

**诉求分析**：
- **#3643** 是今日唯一高优未关 Issue，反映本地模型（OpenCode + OpenAI-compatible server）用户在跑长上下文/多步推理时的真实痛点——host 在 30 分钟硬上限处无情终止容器，且没有 config seam 让用户调高。该问题至今 0 👍、评论少，说明可能是单一用户场景但影响严重，需核心维护者介入设计可配置项。
- **#3761** 是带 `[probe-permission-test-do-not-merge]` 标签的权限探针 Issue，已快速关闭，符合自动化流水线预期。

社区活跃度整体偏低，所有议题点赞均为 0，评论均为 1，说明**项目仍处于内部迭代驱动期，外部用户反馈通道尚未形成规模**。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高优先级（开放）
1. **#3643 — 硬编码 30 分钟 ABSOLUTE_CEILING_MS 冷杀长回合** （[链接](https://github.com/qwibitai/nanoclaw/issues/3643)）
   - **影响**：本地模型后端跑超过 30 分钟的 turn 会被 host sweep 直接 KILL，丢失上下文。
   - **根因**：`ceilingMs=1800000` 写死在代码中，无配置注入点。
   - **修复状态**：❌ 无对应 PR。该问题已存在 14 天，需维护者主动评估。

### 🟡 中优先级（今日关闭）
2. **#3759 → #3760 — verify 在 systemd 无 user instance 时误报 not_found** （[Issue](https://github.com/qwibitai/nanoclaw/issues/3759) / [PR](https://github.com/qwibitai/nanoclaw/pull/3760)）
   - **影响**：服务器部署（无 systemd 用户实例）时 verify 步骤误判失败，但 host 实际正常工作。
   - **修复状态**：✅ PR #3760 今日已关闭，问题闭环。

### 🟢 低/已闭环
- PR #3708 已合并，从源头消除 SQLite 锁竞争导致的潜在崩溃。
- #3761 为权限探针，非真实 bug。

---

## 6. 功能请求与路线图信号

从今日动态看，尚未出现**明确的新功能请求**。可观察到的**路线图信号**包括：

- **PR #3707（已合并）** 引入的 `registerAdmissionGate` 暗示项目在为**入队限流 / 多租户准入控制**留扩展点，未来可能衍伸出消息优先级、并发上限等用户可调参数。
- **PR #3689（待合并）** 的 symlink 快照语义修补（[链接](https://github.com/qwibitai/nanoclaw/pull/3689)）说明更新系统在处理真实部署目录结构（容器/挂载/软链）上仍有边界 case 待收敛。
- **PR #3758（待合并）** "skip portal reminders the operator already answered"（[链接](https://github.com/qwibitai/nanoclaw/pull/3758)）反映 setup UX 正在朝"记住用户决策"演进，**长期看可能演进为持久化的 setup 偏好系统**。

预测：若 #3643 长期未解，下一个 minor 版本（2.4.x）很可能将 `ABSOLUTE_CEILING_MS` 暴露为环境变量或 setup 选项。

---

## 7. 用户反馈摘要

由于评论数据极少（均仅 1 条），可提炼的真实用户痛点有限但具有代表性：

- **本地模型长回合用户**（#3643 报告者 glifocat）：在 OpenCode + 本地 OpenAI-compatible server 场景下，agent 需要数十分钟完成复杂任务时，**30 分钟硬墙直接切断执行流，且没有任何超时延长手段**——这是"AI 容器抽象"与"长任务模型"之间尚未对齐的张力。

- **裸服务器/容器化部署用户**（#3759 报告者 glifocat）：很多 Linux 服务器**只有 systemd 系统实例，没有 user instance**，导致标准 systemctl --user 检查失败；用户期望 verify 工具能识别"nohup 直跑"也是合法启动方式。

- **环境变量污染用户**（PR #3757 报告者 javexed）：当 verify 误读 shell 中的 ambient credential 环境变量时，会"凭空"发明一个 channel 配置，导致 verify 失败但运行时正常——**用户期望 verify 严格只读自身 env 文件**。

**满意度信号**：#3759、#3760 形成完整 issue→fix 闭环，说明核心团队对 setup 类问题响应及时；但 #3643 14 天无 PR 表明**对"非常规部署拓扑"的响应优先级偏低**。

---

## 8. 待处理积压

维护者应优先关注以下未闭环项：

| 优先级 | 项目 | 类型 | 已开 | 链接 |
|--------|------|------|------|------|
| 🔴 P0 | #3643 30 分钟 ceiling 配置化 | Issue（高优） | 14 天 | [链接](https://github.com/qwibitai/nanoclaw/issues/3643) |
| 🟡 P1 | #3689 symlink 快照修复 | PR（待合并） | 11 天 | [链接](https://github.com/qwibitai/nanoclaw/pull/3689) |
| 🟡 P1 | #3758 setup 提醒去重 | PR（待合并） | 1 天 | [链接](https://github.com/qwibitai/nanoclaw/pull/3758) |
| 🟡 P1 | #3757 verify 不读 ambient env | PR（待合并） | 1 天 | [链接](https://github.com/qwibitai/nanoclaw/pull/3757) |

**特别提醒**：#3643 是当前积压中**唯一标记为 `priority/high` 且无对应 PR** 的 Issue，建议在下一次 triage 中明确归属与 ETA；同步建议将 #3689 纳入本周 code review 议程，避免继续老化。

---

> **日报小结**：今日 NanoClaw 处于"小步快跑、稳扎稳打"的开发节奏，安装/启动链路的边缘场景得到系统性清理，agent-runner 的底层健壮性也获得两次加固。但**长任务超时（#3643）仍是悬而未决的最大缺口**，建议核心团队在下一迭代窗口优先处理，以支撑本地模型用户的核心使用场景。

*本报告基于公开 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-09-11**
**仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 在过去 24 小时内整体处于**中低强度的维护性更新状态**，无新版本发布。Issue 端仅有 1 条「失败分类学」日常分析报告产生，PR 端则呈现「依赖批量更新 + 零散功能修复」的双轨格局：9 条 PR 中 7 条仍待合并、2 条已关闭，其中 5 条来自 dependabot 自动机器人（Rust 与 JavaScript 依赖批量升级）。在功能层面，值得关注的实质改动包括 Telegram Bot 命令菜单注册修复、WebUI 输入法（IME）合成态保护，以及托管 MCP 目录按调用者维度的隔离修复——三者均涉及生产环境下的真实痛点。整体活跃度评估为**中等偏轻**，项目健康度良好，无重大风险信号。

---

## 2. 版本发布

**今日无新版本发布。** 建议关注后续 dependabot 批量 PR 合并后是否会触发新版本 tag。

---

## 3. 项目进展（今日已合并/关闭的 PR）

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#8080](https://github.com/nearai/ironclaw/pull/8080) | chore(deps): bump everything-else group with 21 updates | CLOSED | Rust 依赖组批量升级（与 #8097 重复内容的前序 PR，已被新版替代） |
| [#8072](https://github.com/nearai/ironclaw/pull/8072) | feat(telegram): register the Bot API command menu at activation | CLOSED | **实质性功能推进**：Telegram 扩展激活时通过 `setMyCommands` 注册 `/model`、`/status`、`/new`、`/stop`、`/interrupt` 等命令，卸载时清理——使 Telegram 用户首次激活即可在「汉堡菜单」中看到命令列表，降低了使用门槛 |

**整体评价**：今日推进的功能量不大但质量较高——`#8072` 的 Telegram 命令菜单自动注册是一次面向终端用户的可感知体验提升，标志着多渠道适配工作进入收尾打磨阶段。

---

## 4. 社区热点

今日 Issues 与 PR 的评论数普遍为 0，未形成强讨论热点。但从**议题价值密度**来看，以下三项最值得关注：

- 🔥 **[#8093 Daily ironclaw failure taxonomy — 2026-09-10](https://github.com/nearai/ironclaw/issues/8093)**（由 pranavraja99 提交）：这是项目方定期产出的「失败模式分类」报告，展示了 officeqa 套件 42 个非通过用例中绝大部分为 DeepSeek-V4-Flash 的真实模型错误。这类自动化诊断 Issue 反映了团队对模型行为的可观测性投入。
- 🔥 **[#8090 fix(mcp): key discovered hosted-MCP catalogs per caller](https://github.com/nearai/ironclaw/pull/8090)**（作者 kirikov）：精准命中了 hosted-MCP 部署模式下多用户工具列表互相覆盖的竞态问题，描述清晰、可复现，属于「真痛点」型 PR。
- 🔥 **[#8092 fix(webui): preserve IME composition in the chat composer](https://github.com/nearai/ironclaw/pull/8092)**（作者 huiq777）：针对中文、日文、韩文等 CJK 用户输入法的回归修复，是面向非英语用户的友好改进。

---

## 5. Bug 与稳定性

今日明确指向 Bug 的 PR 共 3 条，按严重程度排列：

| 严重度 | PR | 问题描述 | 修复状态 |
|---|---|---|---|
| 🟠 **高（多用户安全/正确性）** | [#8090](https://github.com/nearai/ironclaw/pull/8090) | hosted-MCP 目录按扩展 id 发布，导致多用户工具列表相互覆盖（最近一次发现获胜） | **已有 fix PR**，待合并 |
| 🟡 **中（功能可见性）** | [#8076](https://github.com/nearai/ironclaw/pull/8076) | Slack 中「已配对用户断开共享通道」与「未配对账户」状态混淆，引导文案不一致 | **已有 fix PR**，待合并 |
| 🟡 **中（跨语言可用性）** | [#8092](https://github.com/nearai/ironclaw/pull/8092) | WebUI 在输入法合成（IME composition）阶段拦截了 Enter 与命令菜单按键，破坏中日韩用户输入 | **已有 fix PR**，待合并 |

另需关注：[#8093](https://github.com/nearai/ironclaw/issues/8093) 中报告的 officeqa 42 个非通过用例多为模型层面错误（非代码 Bug），属质量基线跟踪范畴，不算稳定性事故。

---

## 6. 功能请求与路线图信号

今日没有显式的「Feature Request」标签 Issue，但 PR 中蕴含的功能推进信号如下：

- **多渠道命令菜单统一化**：[#8072](https://github.com/nearai/ironclaw/pull/8072)（已关闭）证明 Telegram 已落地 Bot API 命令注册——可推断路线图下一步大概率是**将相同模式复用到 Slack、Discord 等其他渠道**（#8076 正在做的就是 Slack 侧的对应打磨）。
- **托管 MCP 的多租户安全**：[#8090](https://github.com/nearai/ironclaw/pull/8090) 表明 hosted-MCP 部署已进入实战阶段，「按调用者隔离」很可能成为下一个 minor 版本的强制基线要求。
- **国际化输入体验**：[#8092](https://github.com/nearai/ironclaw/pull/8092) 反映出项目开始系统性地处理非英语用户输入边界，这是从「英文为主」向「全球可用」演进的明显信号。

---

## 7. 用户反馈摘要

今日 Issues 评论数为 0，无可提炼的直接用户声音。但从 PR 描述中可以反向推断出三类典型使用场景与痛点：

1. **企业 SaaS 部署方（hosted-MCP 用户）**：在共享实例中遇到工具列表互相污染——典型的多租户隔离诉求。
2. **CJK 用户群（中文/日文/韩文输入法使用者）**：在 WebUI 聊天框中打字时，Enter 键或命令菜单被误捕获，导致频繁输入中断。
3. **Slack 工作区管理员**：对已断开但曾配对的共享通道，与完全未配对的账户，需要不同的引导文案与权限处理。

---

## 8. 待处理积压

维护者需关注的「长期无评论/无反应」条目（按重要性排序）：

| 优先级 | 编号 | 类型 | 创建距今 | 风险 |
|---|---|---|---|---|
| 🔴 高 | [#8090](https://github.com/nearai/ironclaw/pull/8090) | MCP 修复 PR | 3 天 | 涉及多用户数据隔离，建议优先 review |
| 🟡 中 | [#8097](https://github.com/nearai/ironclaw/pull/8097) | Rust 依赖批量升级（24 项） | 1 天 | 需 CI 全面验证后合并，避免破坏 nightly 构建 |
| 🟡 中 | [#8076](https://github.com/nearai/ironclaw/pull/8076) | Slack 渠道区分修复 | 5 天 | 已描述详细但尚无 reviewer 反馈 |
| 🟢 低 | [#8096](https://github.com/nearai/ironclaw/pull/8096) / [#8094](https://github.com/nearai/ironclaw/pull/8094) / [#8095](https://github.com/nearai/ironclaw/pull/8095) | 前端单包升级 | 1 天 | 风险低，可批量合并 |

**建议**：维护者本轮 review 重点应放在 `#8090`（多租户安全）与 `#8097`（依赖基线更新）上，前者是产品正确性问题，后者影响后续所有 PR 的合并基线。

---

*报告生成时间：2026-09-11 ｜ 数据来源：GitHub REST API*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**日期：2026-09-11**
**仓库：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 在过去 24 小时呈现典型的"集中式 bug 修复日"模式：**12 个 PR 更新中有 9 个被关闭/合并，且全部来自同一贡献者 `btc69m979y-dotcom`**，聚焦于 OpenClaw v2026.8.1 升级后的稳定性收敛与可配置性增强。Issues 侧完全静默（0 新开、0 活跃、0 关闭），说明这些修复主要来自 QA 反馈与主动回归排查，而非用户上报。3 个仍处 OPEN 状态的 PR 均为 dependabot 提交的依赖升级，已被标记为 stale，长期未获处理，需维护者介入。整体活跃度中等偏高，单点贡献者依赖度较高。

---

## 2. 版本发布

无新版本发布。当前代码主要在主干分支进行集成，预计将随下一个稳定版（与 OpenClaw v2026.8.1 对齐）发布。

---

## 3. 项目进展

今日合并/关闭的 9 个 PR 构成一个紧密耦合的修复集，主题为 **"OpenClaw v2026.8.1 升级兼容性 + 用户体验可控化"**，项目整体向前推进明显：

| PR | 类型 | 关键成果 |
|---|---|---|
| [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) | fix | Gateway 启动状态迁移补全：解决 `memory index --force` 后 device identity 未导入导致 preflight 跳过自动导入的问题 |
| [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) | fix | 解锁 legacy session 迁移：修复 SQLite 存档事件数与源事件数不一致导致的归档阻塞 |
| [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) | fix | 启动前隔离损坏 workspace 证明：避免空/NUL legacy attestation 阻断所有 gateway 启动 |
| [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) | fix | 抑制配置同步期"假重启"画面：消除 `sessionStore` 字段在 LobsterAI 与上游之间的反复补入/移除 |
| [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) | fix | IM/MCP 重启策略收敛：去除 IM 编辑后的重复重启，MCP 改用 OpenClaw 原生热重载 |
| [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) | fix | 计划任务历史日期过滤在本地执行：避免向 OpenClaw 发送 `startMs`/`endMs` 导致的 `cron.runs` 拒绝 |
| [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) | fix | 恢复引擎失败弹窗折叠后的点击：将状态胶囊标为 `non-draggable` |
| [#2641](https://github.com/netease-youdao/LobsterAI/pull/2641) | feat | 自动技能评审改为 opt-in：避免长任务后额外模型调用造成的 token 成本 |
| [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) | feat | 新增"压缩前记忆保存"开关：默认关闭，需用户主动启用，并附 token 成本说明 |

**整体评估**：这一组 PR 显著提升了 OpenClaw v2026.8.1 升级路径的鲁棒性（覆盖了启动、迁移、配置同步、热重载全链路），并通过两个 opt-in 开关赋予用户对**模型调用成本**的更细粒度控制，是向"用户可感知成本"设计哲学靠拢的明确信号。

---

## 4. 社区热点

由于 Issues 侧今日无更新，且所有 PR 评论数均为 undefined（无公开讨论），无法识别真正的"讨论热度"。从信号强度看：

- **依赖升级 PR [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464)（react-dom 18 → 19.2.8）**：已 OPEN 一个月仍未处理，是 React 生态重大版本升级，影响面广，值得关注。
- **依赖升级 PR [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459)（@nodesecure/js-x-ray 14 → 16）**、[#2461](https://github.com/netease-youdao/LobsterAI/pull/2461)（eslint-plugin-react-hooks 5 → 7）**：均已被标 stale，反映维护者对依赖治理节奏关注不足。

建议读者直接点击链接查看是否有新评论，本日报无具体评论数据可引用。

---

## 5. Bug 与稳定性

今日合并的 9 个 PR 中有 7 个为 Bug 修复（其余 2 个为 opt-in 开关新功能）。按严重程度排列：

| 严重度 | PR | 现象 | 是否已有 fix |
|---|---|---|---|
| 🔴 阻塞级 | [#2647](https://github.com/netease-youdao/LobsterAI/pull/2647) | 升级到 OpenClaw v2026.8.1 后，空/NUL legacy workspace attestation 阻止所有 gateway 启动（Windows 观察到 59 字节 NUL 文件） | ✅ 已合并 |
| 🔴 阻塞级 | [#2642](https://github.com/netease-youdao/LobsterAI/pull/2642) | 重复 session header 导致存档事件数与源不一致（8 vs 9），归档整体被拒 | ✅ 已合并 |
| 🔴 阻塞级 | [#2649](https://github.com/netease-youdao/LobsterAI/pull/2649) | `memory index --force` 后 device identity 未导入，Gateway preflight 跳过自动迁移 | ✅ 已合并 |
| 🟠 体验级 | [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) | 短暂就绪探针超时反复触发引擎启动页 | ✅ 已合并 |
| 🟠 体验级 | [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) | 编辑 IM 开关后 gateway 重启两次；MCP 安装时多次重启 | ✅ 已合并 |
| 🟡 功能级 | [#2646](https://github.com/netease-youdao/LobsterAI/pull/2646) | 计划任务历史日期过滤发送不支持参数导致 `cron.runs` 拒绝 | ✅ 已合并 |
| 🟡 交互级 | [#2645](https://github.com/netease-youdao/LobsterAI/pull/2645) | Windows 下折叠引擎失败弹窗后点击被拖拽区吞掉 | ✅ 已合并 |

**关键观察**：所有阻塞级问题均与 **OpenClaw v2026.8.1 升级**直接相关，集中在启动期/迁移期，建议发布说明中明确"升级前需备份 workspace attestation 与 session 历史"。

---

## 6. 功能请求与路线图信号

今日虽无新功能 Issues，但通过合并的 PR 可清晰看出产品方向：

1. **Token 成本可视化与用户主导**
   - [#2643](https://github.com/netease-youdao/LobsterAI/pull/2643) 压缩前记忆保存 opt-in
   - [#2641](https://github.com/netease-youdao/LobsterAI/pull/2641) 自动技能评审 opt-in
   - 两个开关均默认关闭、中英双语成本说明，预示未来更多"默认保守 + 用户主动启用"的设计模式。

2. **OpenClaw 原生能力复用**
   - [#2648](https://github.com/netease-youdao/LobsterAI/pull/2648) MCP 改用 OpenClaw 原生热重载，去除 LobsterAI 自有重启链路，表明项目倾向于收敛自定义逻辑、复用上游能力。

3. **配置交付逻辑收敛**
   - [#2644](https://github.com/netease-youdao/LobsterAI/pull/2644) 抑制 `sessionStore` 字段反复补入/移除，#2635、#2642 等前序 PR 共同形成一条"配置交付一致性"改进主线，预期将在后续版本中以"配置审计/校验"形式落地。

---

## 7. 用户反馈摘要

Issues 侧今日无数据。可从 PR 摘要中提取的"还原真实用户痛点"线索：

- **"编辑 IM 开关后 gateway 重启两次"**（[#2648](https://github.com/netease-youdao/LobsterAI/pull/2648)）—— 反映配置变更的非原子化造成的可见等待时间，QoL 痛点。
- **"安装 MCP 时有时也出现多次重启"**（[#2648](https://github.com/netease-youdao/LobsterAI/pull/2648)）——"有时"一词暗示存在竞态，用户无法预测行为，对开发者用户尤为困扰。
- **"压缩前记忆保存带来额外 token 消耗"**（[#2643](https://github.com/netease-youdao/LobsterAI/pull/2643)）、**"自动技能评审在长任务后产生大量额外模型调用"**（[#2641](https://github.com/netease-youdao/LobsterAI/pull/2641)）—— 共同指向**预算敏感型用户对默认行为的抗拒**，是 LobsterAI 在 OpenClaw 默认策略与用户成本预期之间需要持续调和的矛盾。
- **"升级到 v2026.8.1 后 Windows 上无法启动"**（[#2647](https://github.com/netease-youdao/LobsterAI/pull/2647)）—— 跨平台升级兼容性反馈，集中在 Windows 平台。

满意度方面，由于本次为"集中修复日"，用户满意度应在修复发布后回升，但目前无正向评论数据可印证。

---

## 8. 待处理积压

| 项 | 类型 | 状态 | 已 OPEN | 风险 |
|---|---|---|---|---|
| [#2464](https://github.com/netease-youdao/LobsterAI/pull/2464) | dependabot: react-dom 18 → 19.2.8 | OPEN / stale | ~32 天 | React 大版本升级，影响渲染层整体兼容性 |
| [#2461](https://github.com/netease-youdao/LobsterAI/pull/2461) | dependabot: eslint-plugin-react-hooks 5 → 7 | OPEN / stale | ~32 天 | 主版本跳变，规则集可能有 breaking changes |
| [#2459](https://github.com/netease-youdao/LobsterAI/pull/2459) | dependabot: @nodesecure/js-x-ray 14 → 16 | OPEN / stale | ~32 天 | 跳两个 major 版本，安全扫描工具变化 |

**提醒维护者**：
- 三个依赖 PR 均已 stale，但本次合并的 9 个 PR 均未触及依赖治理。建议优先安排**#2464 (react-dom)** 的 review，因为 React 19 涉及并发渲染与新 Hooks API，与 `area: renderer` 的活跃改动直接相关。
- 此外，单一贡献者 `btc69m979y-dotcom` 在 24 小时内连续合并 9 个跨 build/docs/main/openclaw/renderer/cowork 多个 area 的 PR，建议关注**评审覆盖率**是否充分，避免密集合入带来的回归风险。

---

**报告生成时间**：2026-09-11
**数据范围**：2026-09-10 ~ 2026-09-11（UTC）

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-09-11**

---

## 1. 今日速览

Moltis 项目今日整体处于**中等活跃的维护与功能迭代期**。过去 24 小时内仓库共更新 9 条记录（2 个 Issue、7 个 PR），无新版本发布。值得关注的是两个用户报告的 Bug（#293、#279）在同一天被对应修复 PR（#1252、#1260）关闭并合入，社区响应链路完整高效。同时，dependabot 持续推动前端依赖更新（#1256、#1263），核心功能侧有两条值得期待的新 PR（AGY 直连流式传输、推理 effort 增加 max 档位）仍在评审中。整体健康度良好，呈"修 bug + 推新功能 + 升级依赖"三线并进态势。

---

## 2. 版本发布

**无新版本发布。** 最近 24 小时内仓库无 Release 标签更新。若修复 PR（#1260、#1252）后续被合入主干并发布补丁版本，预计将带来：
- 更准确的 exec 工具错误信息（区分工作目录缺失 vs shell 缺失）
- Docker 全新部署的 bind-mount 权限问题文档化

建议关注下个 patch 版本的发布说明。

---

## 3. 项目进展

### ✅ 已合并/关闭的重要 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#1260](https://github.com/moltis-org/moltis/pull/1260) | fix(exec): report missing shell accurately | 修复了 `sh` 不在 PATH 时误导性报错问题，关 [#279](https://github.com/moltis-org/moltis/issues/279)，增强 exec 工具可观测性 |
| [#1252](https://github.com/moltis-org/moltis/pull/1252) | docs(docker): document the bind-mount permission fix for fresh deploys | 关 [#293](https://github.com/moltis-org/moltis/issues/293)，补全 Docker 新部署的权限修复文档，降低新用户上手门槛 |
| [#1256](https://github.com/moltis-org/moltis/pull/1256) | chore(deps-dev): bump browserslist 4.28.2 → 4.28.8 | 提升前端构建兼容性 |

### 🔄 进行中的重要 PR

- [#1263](https://github.com/moltis-org/moltis/pull/1263) – babel/core、astro、js-yaml 等 4 个 npm 依赖统一升级
- [#1258](https://github.com/moltis-org/moltis/pull/1258) – **feat(external-agents): add direct AGY streaming**，为 `agy` CLI 引入一等流式传输，复用其 Google OAuth session，去除对 Gemini CLI 或 API Key 的强依赖，对外部 agent 集成架构是显著扩展
- [#1253](https://github.com/moltis-org/moltis/pull/1253) – **feat(reasoning): add max effort level**，在共享 schema 增加 `max` 档位并打通 OpenAI Codex Responses API，对不支持 max 的 provider 做 clamping 处理
- [#1262](https://github.com/moltis-org/moltis/pull/1262) – **fix(cron): treat active_hours end="24:00" as end-of-day**，修复 chrono 解析 24 时失败导致 active_hours 配置失效（fail-open 退化为始终激活）的逻辑漏洞，影响定时任务正确性

**整体推进度：** 两条用户上报的痛点 bug 在同一日内完成"报告→修复→合入"闭环，社区响应能力优良。

---

## 4. 社区热点

由于所有今日更新的 Issue 评论数均为 0，"讨论热度"主要体现在**功能吸引力**而非评论数量上。今日最受关注的方向集中在以下两条 PR（按功能影响力排序）：

1. **[#1258 feat(external-agents): add direct AGY streaming](https://github.com/moltis-org/moltis/pull/1258)**  
   作者：GTanger | 更新：2026-09-10  
   标志着 Moltis 在"多 CLI 后端集成"路线上的又一次扩展，触及 OAuth session 复用、stream-json 协议转换、子 agent 协议等深层设计，社区用户若关注"减少 API Key 依赖、统一外部 agent 体验"应重点跟进。

2. **[#1253 feat(reasoning): add max effort level](https://github.com/moltis-org/moltis/pull/1253)**  
   作者：GTanger | 更新：2026-09-10  
   直接影响模型推理档位控制粒度，对在乎"思考深度可控"的开发者是实质能力增强。

> 注：现有 Issue 评论数普遍偏低（0 评论），未来若需要衡量真实社区热度，建议关注 PR review 讨论与 maintainer 互动。

---

## 5. Bug 与稳定性

### 🔴 已修复（今日闭环）

| Issue | 标题 | 严重度 | 状态 |
|---|---|---|---|
| [#293](https://github.com/moltis-org/moltis/issues/293) | No db file on fresh Docker Compose deployment | **高（阻塞新用户部署）** | ✅ 已修复（[#1252](https://github.com/moltis-org/moltis/pull/1252)） |
| [#279](https://github.com/moltis-org/moltis/issues/279) | exec tool reports "working directory does not exist" when sh is not in PATH | **中（误导性错误，影响排障）** | ✅ 已修复（[#1260](https://github.com/moltis-org/moltis/pull/1260)） |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | cron active_hours end="24:00" 解析失败致 fail-open | **中（定时任务静默失效）** | 🔄 PR 待合入 |

### 评估
两个用户报告的 bug 都在当日完成修复闭环，质量与响应速度良好。**#293** 是阻塞全新 Docker 部署的问题，影响新用户体验；**#279** 的修复提升了错误诊断清晰度。**#1262** 暴露的"fail-open 退化为始终激活"问题有一定安全隐患，建议维护者优先合入。

---

## 6. 功能请求与路线图信号

今日无新增功能请求 Issue，但通过进行中的 PR 可推断下一阶段的路线图信号：

| 方向 | 信号来源 | 可能纳入下一版本的概率 |
|---|---|---|
| **外部 Agent 直连（AGY streaming）** | [#1258](https://github.com/moltis-org/moltis/pull/1258) | 🟢 高（架构级扩展，作者 GTanger 持续推进同类工作） |
| **推理档位 max** | [#1253](https://github.com/moltis-org/moltis/pull/1253) | 🟢 高（schema 层小改动，对外语义友好） |
| **Cron 边界时间处理** | [#1262](https://github.com/moltis-org/moltis/pull/1262) | 🟢 高（bug fix，无破坏性） |
| **Docker 部署文档完善** | [#1252](https://github.com/moltis-org/moltis/pull/1252) | ✅ 已在本次合入 |

观察：项目当前 PR 节奏说明 maintainer 偏好"小步快跑、即时合入"，下一 patch 版本很可能打包上述 bug fix + max effort + cron fix 的组合。

---

## 7. 用户反馈摘要

由于今日更新的 Issue 评论数均为 0，可从 Issue 摘要中提炼的用户痛点如下：

- **#293（@temobard）**：Docker Compose 全新部署出现"找不到 db 文件"的 panic。痛点指向**新用户首次体验**，反映官方文档与默认部署配置存在不一致。修复路径（[#1252](https://github.com/moltis-org/moltis/pull/1252)）选择了**文档修复**而非代码修复，可能是因为 db 创建逻辑已正常工作，根因在于权限或目录归属。
- **#279（@elsbrock）**：exec 工具在 `sh` 不在 PATH 时报"工作目录不存在"，属于**错误信息误导**类问题，root cause 定位准确（[issue 摘要](https://github.com/moltis-org/moltis/issues/279)明确指向 spawn 错误分类），修复 PR（[#1260](https://github.com/moltis-org/moltis/pull/1260)）的思路（用 NotFound + cwd 分类）也较为优雅。

**用户满意度信号**：两位报告者均完成了 Preflight Checklist（搜过旧 issue、确认最新版），表明用户群体具备基本自助排查能力，社区素养良好。修复闭环速度快，反映用户对项目的信任度较高。

---

## 8. 待处理积压

### 仍处于 OPEN 状态的 PR（建议维护者优先评审）

| PR | 标题 | 距创建 | 备注 |
|---|---|---|---|
| [#1263](https://github.com/moltis-org/moltis/pull/1263) | dependabot 多目录依赖升级 | 1 天 | 🟢 常规依赖，期望快速合入 |
| [#1258](https://github.com/moltis-org/moltis/pull/1258) | AGY streaming | 7 天 | 🟡 涉及外部协议与 OAuth 复用，需要 maintainer 重点 review |
| [#1253](https://github.com/moltis-org/moltis/pull/1253) | reasoning max effort | 9 天 | 🟡 schema 变动 + 多 provider 适配，需验证兼容性矩阵 |
| [#1262](https://github.com/moltis-org/moltis/pull/1262) | cron active_hours 24:00 边界 | 4 天 | 🔴 涉及静默 fail-open 安全隐患，建议优先合入 |

### 提醒关注
- **#1262 的 fail-open 行为**属于"配置错误时退化为最宽松模式"，在生产场景下可能导致非预期的 cron 执行。建议在合入修复的同时，审视其他类似 fail-open 路径是否也存在安全隐患。
- **GTanger 贡献的两条 PR（#1258、#1253）已积压超一周**，均为外部能力扩展，需要 maintainer 安排专项评审以避免贡献者流失。

---

## 总结

Moltis 今日呈现**健康活跃**状态：bug 响应链路高效（当日闭环 2 条），前端依赖维护及时，核心功能扩展稳步推进。建议下一阶段重点关注 **#1262 安全相关 fix 优先合入**、**#1258/#1253 外部 PR 评审排期**，以及未来 patch 版本的发布节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报 · 2026-09-11

> 数据来源：GitHub agentscope-ai/QwenPaw 仓库
> 统计周期：过去 24 小时（2026-09-10 ~ 2026-09-11）

---

## 1. 今日速览

CoPaw 仓库在过去 24 小时呈现**高强度迭代态势**：发布 1 个 Beta 版本（v2.2.1-beta.2），新增/活跃 Issue 17 条、PR 25 条待合并。社区反馈维度多元，**多租户版 Hub 的功能讨论**成为焦点（单条讨论 24 条评论、4 个 👍），同时**飞书/Telegram/企业微信三大 IM 通道的稳定性问题集中爆发**，反映 2.2.x 跨通道产品在真实部署环境下的兼容性问题。整体活跃度评级：**🔥 高（High）**。

---

## 2. 版本发布

### v2.2.1-beta.2（Beta）

- **发布类型**：Beta（预发布）
- **主要变更**：
  - `feat(console)`：改进移动端 Agent 选择器（[#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623)）
  - `chore`：版本号 bump 至 2.2.1b2（[#7643](https://github.com/agentscope-ai/QwenPaw/pull/7643)）
  - `fix(console)`：统一 QwenPaw CSS 选择器命名
- **发布说明**：配套 Release Duty 安装验证 issue 已开启（[#7674](https://github.com/agentscope-ai/QwenPaw/issues/7674)），需在发布后 4 小时内完成跨平台校验
- **破坏性变更**：无明确披露
- **迁移注意**：仍为 Beta，不建议生产环境直接升级；桌面端 Windows/Mac 用户可关注后续 stable 版本

---

## 3. 项目进展（重要合并/关闭的 PR）

| PR | 标题 | 类型 | 价值 |
|---|---|---|---|
| [#7663](https://github.com/agentscope-ai/QwenPaw/pull/7663) | `fix(memory)`：插件后端不可用时回退至内置 ReMeLight | 稳定性修复 | 已 CLOSED — 提升 Agent 启动韧性，避免因插件缺失导致 workspace 启动失败 |
| [#6978](https://github.com/agentscope-ai/QwenPaw/pull/6978) | `feat(commands)`：新增会话管理斜杠命令（/sessions、/session） | 功能（IM 通道补齐） | 已 CLOSED — 为 Matrix/QQ/Telegram 等 IM 通道补齐会话切换入口 |

**进度评估**：今日净增 25 个待合并 PR，覆盖 Console UI 修复（侧边栏持久化、主题色变量）、Hub 安全审计日志、API 输入校验、History DB 性能优化等。维护团队在 **Hub 治理（[#7683](https://github.com/agentscope-ai/QwenPaw/pull/7683)）** 与 **Console 体验一致性**两条战线同时推进，整体向前稳健迈进。

---

## 4. 社区热点 

### 🥇 [#7318 — QwenPaw Hub 多租户版功能征集](https://github.com/agentscope-ai/QwenPaw/issues/7318)
- **数据**：24 条评论、4 👍、跨度 16 天持续活跃
- **诉求**：用户希望从"个人助手"演进为"团队协作平台"，已合并相关需求 [#2324](https://github.com/agentscope-ai/QwenPaw/issues/2324)（多用户访问 + 管理员托管技能）
- **趋势**：Hub 2.2.0 已上线，社区在持续追问下一阶段方向，这是当前产品路线的**风向标议题**

### 🥈 [#7579 — 模型回复从上下文意外丢失](https://github.com/agentscope-ai/QwenPaw/issues/7579)
- **数据**：10 条评论，已 CLOSED
- **背景**：2.2.0 Desktop 打包版（PyInstaller 后端），助手回复已持久化但后续请求中缺失，模型"看不到自己刚说的话"
- **价值**：典型的会话状态一致性问题，影响核心使用体验

### 🥉 [#7177 — platform.agentscope.io/deploy 首页优化](https://github.com/agentscope-ai/QwenPaw/issues/7177)
- **数据**：9 条评论
- **诉求**：移动端体验问题——入口位置应靠前、运行/停止按钮顺序需调整，避免误触
- **趋势**：反映 Web Console 在手机端真实使用场景下的可用性问题

---

## 5. Bug 与稳定性 ️

按严重程度排列：

| 等级 | Issue | 模块 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| 🔴 严重 | [#7672 — Windows 安全沙箱被突破](https://github.com/agentscope-ai/QwenPaw/issues/7672) | 核心安全 | OPEN | ❌ 无（外部研究者披露） |
|  严重 | [#7534 — 飞书 session queue consumer 卡死](https://github.com/agentscope-ai/QwenPaw/issues/7534) | 飞书通道 | OPEN | ❌ 无；同一 session 新消息无法新建 consumer |
| 🟠 高 | [#7676 — subagent_model 不生效](https://github.com/agentscope-ai/QwenPaw/issues/7676) | Agent 核心 | OPEN | ✅ [#7680](https://github.com/agentscope-ai/QwenPaw/pull/7680)（诊断增强，待合并） |
|  高 | [#7678 — spawn subAgent 全部 timeout 失败](https://github.com/agentscope-ai/QwenPaw/issues/7678) | Agent 核心 | OPEN | ❌ 无 |
| 🟠 高 | [#7662 — Telegram 代理黑洞下 polling 静默死亡](https://github.com/agentscope-ai/QwenPaw/issues/7662) | Telegram 通道 | CLOSED | 需关注修复是否进入 2.2.1 |
| 🟠 高 | [#7507 — WeCom 通道逐字流式过慢（150ms 节流）](https://github.com/agentscope-ai/QwenPaw/issues/7507) | 企业微信 | OPEN | ❌ 无 |
|  中 | [#7661 — 错误地创建新会话](https://github.com/agentscope-ai/QwenPaw/issues/7661) | Console | OPEN | ❌ 无 |
|  中 | [#7642 — Chrome 流式渲染空白直到回合完成](https://github.com/agentscope-ai/QwenPaw/issues/7642) | Console | CLOSED | Safari 正常，浏览器兼容性问题 |
|  中 | [#7445 — 2.2.0-beta.5 Hub 无法连接模型服务](https://github.com/agentscope-ai/QwenPaw/issues/7445) | Hub | OPEN | ❌ 无 |
|  中 | [#7668 — Mail 监控 last_uid=0 绕过首跑保护](https://github.com/agentscope-ai/QwenPaw/issues/7668) | Mail 监控 | OPEN | ❌ 无 |
| 🟢 低 | [#7660 — 安装失败](https://github.com/agentscope-ai/QwenPaw/issues/7660) | 安装 | OPEN | ❌ 无 |
| 🟢 低 | [#7666 — 本地模型无法从 HF 下载](https://github.com/agentscope-ai/QwenPaw/issues/7666) | 桌面端 | CLOSED | 标记为 close-and-review-later |

**整体评估**：IM 通道（飞书/Telegram/企业微信）连续出现稳定性问题，且问题模式各不相同（消费者卡死 / 代理黑洞 / 节流过慢），建议维护团队**专题审视跨通道鲁棒性**。Windows 安全沙箱突破（[#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672)）需要优先响应。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 信号强度 | 路线图可能性 |
|---|---|---|---|
| [#7679 — loop 增加 /compact 压缩命令](https://github.com/agentscope-ai/QwenPaw/issues/7679) | 长任务模式上下文压缩 | ⭐⭐⭐⭐ | 极高 — Token 经济性是高频痛点，预计 v2.3 路线图 |
| [#7671 — 大图自动降采样而非丢弃](https://github.com/agentscope-ai/QwenPaw/issues/7671) | 附件图片处理优化 | ⭐⭐⭐ | 高 — 当前直接替换为占位符体验不佳 |
| [#7670 — Files 面板代码语法高亮](https://github.com/agentscope-ai/QwenPaw/issues/7670) | Preview 模式增强 | ⭐⭐ | 中 — 体验增强类 |
| [#7664 — RemeLight 独立记忆模型](https://github.com/agentscope-ai/QwenPaw/issues/7664) | 用轻量模型做 summarize/dream | ⭐⭐⭐⭐ | 高 — 直接降本，与 #4901 per-task 模型选型路线一致 |
| [#7177 — Deploy 首页移动端优化](https://github.com/agentscope-ai/QwenPaw/issues/7177) | UI/UX | ⭐⭐⭐ | 高 — 移动端使用量证据明确 |

**关联已有 PR**：
- [#7444 — feat(memory): unify ReMe slash commands](https://github.com/agentscope-ai/QwenPaw/pull/7444)（待合并） — 表明记忆系统正在统一化，与 [#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664) 的"独立记忆模型"诉求方向一致
- [#6960 — PawPort 跨 Agent 数据迁移](https://github.com/agentscope-ai/QwenPaw/pull/6960)（待合并，跨度 1 个月） — 用户生态扩展能力

---

## 7. 用户反馈摘要

**真实痛点提炼**：

1. **Token 成本焦虑**（[#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679)、[#7664](https://github.com/agentscope-ai/QwenPaw/issues/7664)）：长任务模式下上下文未压缩、记忆写入消耗旗舰模型 Token，用户明确提出"用更便宜的模型做后台写入"诉求，**经济性已成为主要使用门槛**。

2. **企业 IM 通道不稳定**（飞书/Telegram/企业微信）：多通道用户在生产环境遭遇静默卡死、流式过慢、代理黑洞等问题，反映 v2.2.x 在跨通道鲁棒性上**尚未达到生产就绪**。

3. **移动端体验落后**（[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)）：Web Console 在手机端的入口布局、操作可达性成为活跃用户的高频反馈点。

4. **SubAgent 功能成熟度不足**（[#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676)、[#7678](https://github.com/agentscope-ai/QwenPaw/issues/7678)）：subagent_model 配置不生效、spawn 全部 timeout 失败，团队协作模式的核心能力存在明显短板。

5. **桌面端安全信任**（[#7672](https://github.com/agentscope-ai/QwenPaw/issues/7672)）：外部研究者公开 Windows 沙箱突破细节，**安全姿态需主动回应**。

**满意度信号**：v2.2.1-beta.2 桌面端的移动端 Agent 选择器改进获得正面合并（[#7623](https://github.com/agentscope-ai/QwenPaw/pull/7623)）；Console 历史记录分页（[#7665](https://github.com/agentscope-ai/QwenPaw/pull/7665)）等微体验持续打磨。

---

## 8. 待处理积压 📋

需要维护者重点关注的"长尾"项目：

| 编号 | 类型 | 标题 | 创建/更新 | 风险 |
|---|---|---|---|---|
| [#3113](https://github.com/agentscope-ai/QwenPaw/issues/3113) | Bug | 团队协作模式首条指令被忽略 | 2026-04-08 / 2026-09-10 | 🔴 **跨度 5 个月未修** — 核心功能缺陷 |
| [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) | PR | per-session 模型覆盖 | 2026-07-12 / 2026-09-10 | 🟠 评审 2 个月未合并，与 #4901/#6302/#7676 直接相关 |
| [#6399](https://github.com/agentscope-ai/QwenPaw/pull/6399) | PR | ReMeLightMemoryCard reranker UI 面板 | 2026-07-23 / 2026-09-10 |  评审 1.5 个月未合并 |
| [#6969](https://github.com/agentscope-ai/QwenPaw/pull/6969) | PR | MCP 返回 structuredContent 时避免重复 | 2026-08-13 / 2026-09-10 | 🟠 评审近 1 个月 |
| [#6960](https://github.com/agentscope-ai/QwenPaw/pull/6960) | PR | PawPort 跨 Agent 数据迁移 | 2026-08-13 / 2026-09-10 | 🟠 评审近 1 个月 — 战略级功能 |

**积压健康度**：⚠️ **中等偏差**。PR 积压集中在"评审中"状态而非"被拒绝"，说明维护者注意力被 Beta 发布分散，建议在 v2.2.1 stable 之前清理一轮长期评审项。

---

## 总结

CoPaw 今日呈"**Beta 密集迭代 + IM 通道稳定性告警 + 社区路线图共识初现**"的复合态势。维护团队在 Hub 治理、Console 体验、记忆系统三条主线推进有序，但**跨通道鲁棒性、SubAgent 核心能力、Windows 安全沙箱**三处需在 v2.2.1 stable 之前集中资源攻克。建议：(1) 优先合并 [#5992](https://github.com/agentscope-ai/QwenPaw/pull/5992) 并修复 [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) 的 subagent_model 问题；(2) 对飞书/Telegram/企业微信做专题稳定性回归；(3) 在 Hub 议题 [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) 给出阶段性路线图答复，巩固社区信心。

---

*报告生成时间：2026-09-11 · 数据窗口：24h*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**报告日期：** 2026-09-11
**数据周期：** 过去 24 小时
**仓库：** [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

ZeptoClaw 今日呈现"**安全加固 + 依赖批量更新**"双线推进态势。社区共合并/关闭 18 个 PR（其中 16 个为 Dependabot 自动化依赖升级），并同步关闭 3 个由外部贡献者 @morler 提交的安全类 Bug。今日无新版本发布，但代码健康度有实质改善——尤其是 `fix(panel): replace websocket bearer URLs with tickets`（#674）的合入，从架构层面解决了 WebSocket 凭据泄露问题。整体活跃度中等偏高，质量信号偏正向。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布。**

---

## 3. 项目进展

今日最重要的功能/修复性 PR（非依赖更新类）：

### ✅ 已合并：#674 — fix(panel): replace websocket bearer URLs with tickets
- **作者：** qhkm
- **链接：** [#674](https://github.com/qhkm/zeptoclaw/pull/674)
- **意义：** 面板 WebSocket 连接过去通过 `?auth=<token>` 查询参数传递长期 API token 或 JWT，导致凭据进入访问日志与浏览器历史。新实现改为：通过经过认证 + CSRF 防护的端点获取 30 秒单次 ticket，再于 WebSocket 握手时消费；支持重放保护。
- **关联：** 直接闭环 [Issue #653](https://github.com/qhkm/zeptoclaw/issues/653)。

### 🟡 待合并：#677 — fix(ci): allow rustsec audit check reporting
- **作者：** qhkm
- **链接：** [#677](https://github.com/qhkm/zeptoclaw/pull/677)
- **意义：** 为 `rustsec/audit-check` 作业显式授予 `contents: read` 与 `checks: write`，解决安全审计结果因权限不足无法发布 Check Run 的问题。
- **关联：** 闭环 [Issue #676](https://github.com/qhkm/zeptoclaw/issues/676)，权限仍按作业最小作用域配置。

### 📦 Dependabot 批量更新（已合并 16 项）
涵盖 Rust 核心依赖（tokio、serde_json、tower-http、scraper、rpassword）、GitHub Actions（docker/build-push-action、docker/login-action、docker/metadata-action、codecov-action、taiki-e/install-action）、Docker 基础镜像（rust 1.95→1.98-slim-trixie、debian trixie-slim）、前端依赖（react、@types/react、tailwindcss、@types/node、astro ×2）。这些 PR 多创建于 2026-06-03，今日集中落地。

**整体进度评估：** 项目安全姿态显著提升（WebSocket 鉴权重构完成 + CI 审计链路修复），供应链版本对齐到 2026 年 9 月时点，主线前进明显。

---

## 4. 社区热点

⚠️ **今日所有 Issues 评论数与 👍 数均为 0**，暂无传统意义上的"热度爆点"。但按**安全语义权重**与**外部贡献度**排序，今日最值得关注的是由外部贡献者 @morler 提交、集中在 8 月 31 日的"安全三连"：

| 排名 | Issue | 标签 | 摘要 | 链接 |
|---|---|---|---|---|
| 1 | #653 | bug, safety | Panel WebSocket 通过 `?auth=` 传递 token，泄露至代理/浏览器日志 | [链接](https://github.com/qhkm/zeptoclaw/issues/653) |
| 2 | #656 | bug, safety | `panel start` 将完整 API token 打印到 stdout，进入终端回滚与 CI 日志 | [链接](https://github.com/qhkm/zeptoclaw/issues/656) |
| 3 | #655 | bug, safety | Bearer token 用 `==` 非恒定时间比较（3 处），且函数注释虚假承诺 | [链接](https://github.com/qhkm/zeptoclaw/issues/655) |

**诉求分析：** @morler 在 24 小时内系统性指出了 ZeptoClaw 在「凭据生命周期」上的多个薄弱环节（生成、展示、传输、验证），并指出 `auth.rs` 中 `verify_bearer_token` 的注释与实现不一致（注释声称"constant-time-like"但实际为 `==`）——属于文档欺骗性陈述。今日 #653 已通过 #674 闭环，#655/#656 的修复 PR 尚未在数据中显现，建议持续跟踪。

---

## 5. Bug 与稳定性

按严重程度排序（基于安全影响范围）：

| 严重度 | Issue | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 High（安全/隐私） | [#653](https://github.com/qhkm/zeptoclaw/issues/653) | WS 凭据经 query string 泄露 | ✅ **已修复**（PR #674） |
| 🔴 High（安全/隐私） | [#656](https://github.com/qhkm/zeptoclaw/issues/656) | API token 打印至 stdout | 🟡 **关闭但未见关联修复 PR**（请维护者确认是文档调整还是代码修复） |
| 🟠 Medium（安全） | [#655](https://github.com/qhkm/zeptoclaw/issues/655) | Bearer token 非恒定时间比较 | 🟡 **关闭但未见关联修复 PR** |
| 🟢 Low（CI） | [#676](https://github.com/qhkm/zeptoclaw/issues/676) | rustsec 审计作业缺少 `checks: write` | 🟢 **修复 PR 待合并**（#677） |

⚠️ **维护者关注点：** #655 与 #656 已被关闭，但在今日数据中未出现对应的修复 PR 链接。强烈建议在合并关闭前明确附上修复 PR，或在 issue 中说明关闭原因（如重复/Won't Fix/通过其他途径修复），以保持 issue→PR 的可追溯性。

---

## 6. 功能请求与路线图信号

今日**无明确的新功能请求**类 Issue。但从已合并 PR #674 可以观察到的产品演进信号：

- **「短期一次性 ticket」鉴权模式已落地**，取代长期凭据直传。这暗示项目正在向"会话级、短期化"的认证范式迁移，未来可能进一步推广到 HTTP API（目前中间件仍以静态 token 为主，见 #655 提到的 `state.api_token`）。
- **CI 安全审计链路补齐**（#676+#677），可视为将 `rustsec/audit-check` 正式纳入发布门禁的信号。

---

## 7. 用户反馈摘要

由于全部 Issues 评论数为 0，本节基于 Issue 文本内容提炼**真实使用场景与痛点**：

| 痛点 | 场景 | 出处 |
|---|---|---|
| **凭据泄露多渠道化** | 用户的 token 会同时进入终端回滚、CI 日志、截图、反向代理访问日志、浏览器历史 | #653, #656 |
| **安全断言与实现不一致** | `verify_bearer_token` 注释声称"constant-time-like"但实际是 `==`，降低代码可信度 | #655 |
| **CI 审计"假阳性"失败** | `rustsec/audit-check` 实际未发现漏洞，但因权限缺失导致步骤失败，污染 main 分支健康信号 | #676 |

**总体满意度信号：** 维护者 @qhkm 响应积极，外部贡献者 @morler 的 3 条安全报告在 10 天内获得修复或关闭处理，社区协作链路健康。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 状态 |
|---|---|---|---|---|
| 🟡 PR 待合并 | [#677](https://github.com/qhkm/zeptoclaw/pull/677) | fix(ci): allow rustsec audit check reporting | 2026-09-10 | OPEN |

**维护者提醒：**
1. **#677** 是 #676 的修复 PR，建议尽快合入以恢复 CI 审计信号。
2. **#655 / #656** 已关闭但未关联修复 PR，请补充说明以避免"无声关闭"造成的协作摩擦。
3. Dependabot PR 自 2026-06-03 起累积了约 16 个，于 2026-09-10 集中落地——建议设置 Dependabot 的 `schedule.interval` 为 weekly，避免长尾堆积。

---

## 📊 项目健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码安全 | ⬆️ 显著改善 | WebSocket 鉴权架构升级，CI 审计即将补齐 |
| 维护者响应 | ⭐ 优秀 | 外部安全报告 10 天内闭环 |
| 依赖新鲜度 | ⬆️ 已对齐 | 16 项依赖批量更新至 2026-09 时点 |
| 社区参与 | ⚠️ 偏低 | 全部 issue 0 评论、0 👍，互动活跃度待提升 |
| 发布节奏 | ➖ 持平 | 今日无新版本 |

**结论：** ZeptoClaw 在安全维度迈出扎实一步，但社区互动数据（评论/点赞）几乎为零，建议维护者在关闭外部 issue 时附致谢评论，以提升贡献者留存与项目可见度。

---

*本日报由 AI 自动生成，数据源：GitHub REST API | 报告生成时间：2026-09-11*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-11

---

## 1. 今日速览

ZeroClaw 在过去 24 小时维持了**高活跃度但零产出**的态势：50 条 Issue 与 50 条 PR 同时刷新，但**无任何 Issue 被关闭、无任何 PR 被合并、无新版本发布**。从评论热度与 PR 规模看，社区仍保持活跃（尤其是核心贡献者 @IftekharUddin 一次性推动了多 XL 级 PR），但合入节奏与版本推进近乎停滞。结合多个跨越 4-6 个月未结案的高优先级 Bug，项目当前呈现典型的"流量高峰 + 合入瓶颈"特征，**健康度需要重点关注**。

> 📊 当前发布线为 **v0.8.5**（见 [#10765](https://github.com/zeroclaw-labs/zeroclaw/pull/10765)），距离上次发版已积累较多未合并变更。

---

## 2. 版本发布

⚠️ **过去 24 小时无新版本发布**。安全政策文档 ([#10765](https://github.com/zeroclaw-labs/zeroclaw/pull/10765)) 正在修订 `SECURITY.md` 中"仅 0.1.x 受支持"的过期表述，以对齐当前 0.8.5 发布线，这是下一版本文档侧的明确信号。

---

## 3. 项目进展

今日无合并记录。但从 PR 队列的**成熟度**看，多项变更已具备合并条件，建议维护者优先 review：

| PR | 主题 | 类型 | 链接 |
|---|---|---|---|
| [#10765](https://github.com/zeroclaw-labs/zeroclaw/pull/10765) | docs(security): 修正受支持版本声明至 0.8.5 | 文档 | XS |
| [#10507](https://github.com/zeroclaw-labs/zeroclaw/pull/10507) | docs(plugins): 记录 WIT 版本偏斜问题 | 文档 | XS |
| [#10749](https://github.com/zeroclaw-labs/zeroclaw/pull/10749) | refactor(channels): 共享 8 个渠道的 vendor 错误状态检查 | 重构 | S |
| [#10751](https://github.com/zeroclaw-labs/zeroclaw/pull/10751) | fix(plugins): 区分"连接上限"与"拒绝"错误 | 修复 | L |
| [#10768](https://github.com/zeroclaw-labs/zeroclaw/pull/10768) | feat(channels): 新增 Sendblue iMessage/SMS 渠道（跨平台，非 macOS 专属） | 新功能 | XL |

**关注点**：#10768 的 Sendblue 渠道是非 macOS 主机接入 iMessage 的关键基础设施，一旦合并将扩大 ZeroClaw 的渠道生态覆盖。

---

## 4. 社区热点

**评论最多的 Issue：**

| Issue | 评论 | 主题 | 链接 |
|---|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | 19 | Windows 平台 74 个测试失败（CI 仅 Linux 跑测） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) | 9 | 合并三种并行 release 签名机制（cosign + GitHub attestations + slsa-gh） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | 8 | RFC: 移除强制讨论窗口期、REVISE 中断快照 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) |
| [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) | 8 | Telegram 媒体组合并到一次多模态轮次 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| [#6157](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) | 8 | Nextcloud Talk 使用了错误的 bot 消息 API | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/6157) |
| [#10366](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) | 7 | RFC: 明确 PR 评审证据、新鲜度警告与作者行为边界 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/10366) |

**社区诉求分析：**
- **#7462** 暴露的"CI 仅在 Linux 跑测"问题与 [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461)（macOS/Windows 矩阵扩展）形成耦合，社区希望建立真正的跨平台质量门。
- **#5514 + #8955(PR)** 是 Telegram 用户多图交互的基础设施痛点——当前每张图片生成一次 LLM 调用，浪费 token 且割裂语义。
- **#9101 / #10366 / #10549** 三条 RFC 共同指向**治理流程的现代化**，反映社区对项目工程化规范化的持续期待。
- **#6157** 显示 Nextcloud Talk 用户完全无法获得响应（被阻塞 4 个月未推进）。

---

## 5. Bug 与稳定性

按严重程度排序（无任何 Bug 今日有对应的修复 PR 被合并，需关注"修而未合"的现状）：

### 🔴 S0 - 数据丢失 / 安全风险
| Issue | 描述 | 状态 | 链接 |
|---|---|---|---|
| [#8279](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) | `delegate` 工具绕过父 agent 的工具白名单，子 agent 可调用父策略排除的工具 | OPEN（无对应 PR） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8279) |
| [#9247](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) | Shell 工具工作区边界绕过（symlink 指向外部目录） | OPEN（无对应 PR） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9247) |

### 🟠 S1 - 工作流阻塞
| Issue | 描述 | 链接 |
|---|---|---|
| [#8559](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) | Web 仪表盘关闭聊天窗口会终止 agent 任务 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8559) |
| [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` 在 gzip/brotli/deflate 响应下返回二进制乱码 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) |
| [#9333](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) | 失败的 ACP turn 在切换会话后消失 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9333) |
| [#9191](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) | Cron agent 任务无墙钟超时，锁仅在进程启动时清除 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9191) |
| [#9421](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) | 不完整的 provider 终态响应会被报告为成功 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9421) |

### 🟡 S2 - 行为降级 / 高优先级
| Issue | 描述 | 链接 |
|---|---|---|
| [#9284](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) | `flush_config` 在并发写时可能覆盖数据 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9284) |
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 上 74 个测试失败（最热门讨论） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) |
| [#9486](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) | 高熵检测器把 Solana 钱包地址标 `[REDACTED]`，关闭标志也无效 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9486) |
| [#8642](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) | MCP 工具 schema 克隆导致 agent loop 内存无界增长（OOM 风险） | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/8642) |
| [#9393](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) | Bluesky / Reddit 无发送者授权、无中央关卡 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9393) |
| [#9390](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) | 紧急停止仅 CLI 状态文件，无运行时路径读取 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9390) |
| [#9391](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) | 命令审计日志默认开启但实际写入为空 | [link](https://github.com/zeroclaw-labs/zeroclaw/issues/9391) |

### 🟢 其他值得注意
- [#8519](https://github.com/zeroclaw-labs/zeroclaw/issues/8519) wasmtime-wasi CVE 修复 + audit.toml/deny.toml 漂移（P1 依赖安全）
- [#8800](https://github.com/zeroclaw-labs/zeroclaw/issues/8800) Windows 杀进程后端口被僵尸 LISTENING/CLOSE_WAIT 占用
- [#8794](https://github.com/zeroclaw-labs/zeroclaw/issues/8794) Web 仪表盘中途停止 agent 会清除工具调用与思考上下文

---

## 6. 功能请求与路线图信号

| 信号 | 来源 | 路线图可能性评估 |
|---|---|---|
| **Telegram 媒体组合并** | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) + PR [#8955](https://github.com/zeroclaw-labs/zeroclaw/pull/8955) | ⭐⭐⭐⭐⭐ PR 已就绪，几乎确定进入下一版本 |
| **Sendblue iMessage/SMS 渠道（非 macOS）** | PR [#10768](https://github.com/zeroclaw

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*