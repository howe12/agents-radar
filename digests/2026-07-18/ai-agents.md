# OpenClaw 生态日报 2026-07-18

> Issues: 412 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-07-18 01:53 UTC

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

**日期**: 2026-07-18
**数据窗口**: 过去 24 小时
**项目主页**: [github.com/openclaw/openclaw](https://github.com/openclaw/openclaw)

---

## 一、今日速览

OpenClaw 今日整体处于**高强度迭代期**，单日触发 412 条 Issue 更新与 500 条 PR 更新，社区活跃度持续高位。发布节奏方面，主线刚刚推进到 `v2026.7.2-beta.2`，但与此同时出现了至少 2 个 P0 级别的"升级即坏"问题（gateway 启动失败、SQLite 迁移顺序错误），表明 beta 通道的发布质量需要重点关注。议题讨论热度方面，社区长期关注的 **Linux/Windows 桌面客户端缺位**（#75，114 条评论、81 👍）依然稳居第一，而 Codex/OAuth app-server 相关的 turn-completion 回归问题（#88312 关闭、#87744、#95121 关闭、#107464）形成了一组关联的"Codex 后端稳定性"话题簇。整体来看，项目处于"功能扩展 + 后端返修"双线推进的状态，但需要警惕 beta 通道对生产用户的冲击。

---

## 二、版本发布

### v2026.7.2-beta.2（今日发布）

**Highlights（已披露部分）：**

- **远程编码会话**：可在云端 worker 上运行 Control UI 会话；在所属宿主终端中打开 Codex 与 Claude catalog 会话；可直接在终端中恢复 OpenCode 与 Pi 会话。([#107670](https://github.com/openclaw/openclaw/issues/107670), [#107086](https://github.com/openclaw/openclaw/issues/107086), [#107200](https://github.com/openclaw/openclaw/issues/107200))
- **原生自动化与节点（Native automation and nodes）**：变更说明被截断，需查阅完整 release notes。

**已知问题（升级前必读）：**

- [#109867](https://github.com/openclaw/openclaw/issues/109867) **P0**：从 `2026.7.2-beta.1` 升级到 `beta.2` 时，共享 SQLite 迁移在尚未添加 `managed_outgoing_image_records.agent_id` 列的情况下就创建了引用该列的索引，导致 `doctor --fix` 与 gateway 启动失败。**已被标记为 release-blocker**。
- [#108435](https://github.com/openclaw/openclaw/issues/108435) **P0**：`2026.7.1` 起在 systemd / ollama / 手动启动三种方式下 gateway 全部无法启动（`Error: gateway did not start on 127.0...`），日志见附件。

**迁移注意事项：**

- 在 `2026.7.x` 通道内升级前，建议先在 staging 跑 `openclaw doctor --fix` 验证 SQLite 模式与 `agent_id` 列状态；
- 同时持有 Codex 插件的部署需特别留意 [#99449](https://github.com/openclaw/openclaw/issues/99449)（已关闭）类型的插件/核心版本漂移问题（[#83337](https://github.com/openclaw/openclaw/issues/83337)）；
- 若依赖 TUI 或 Telegram 频道，请同步检查 [#10118](https://github.com/openclaw/openclaw/issues/10118)、[#96242](https://github.com/openclaw/openclaw/issues/96242)、[#107464](https://github.com/openclaw/openclaw/issues/107464) 涉及的行为变化。

---

## 三、项目进展

今日 PR 列表中有若干已进入"ready for maintainer look"或带充分 proof 的高质量提交，对项目稳定性与可维护性形成实质性推进：

**会话/Agent 核心**
- [#110297](https://github.com/openclaw/openclaw/pull/110297) **P1 · 铂金 hermit**：修复长生命周期、工具密集型 session 因保守字符估算误判压力、丢弃 provider 可接受的 projected prompt 并触发整段 compaction 的问题（closes [#107655](https://github.com/openclaw/openclaw/issues/107655)）。这条对最近 #78562、#86684 一类"auto-compaction 抖动"工单具有根治意义。
- [#110300](https://github.com/openclaw/openclaw/pull/110300)：修复 cancelled 部分回复仍会持久化到绑定 transcript，导致用户看到内容与 transcript 不一致。
- [#108846](https://github.com/openclaw/openclaw/pull/108846)：修复 `deleteSession()` 不杀子进程、不关 stdio stream 导致僵尸进程泄漏。
- [#109055](https://github.com/openclaw/openclaw/pull/109055) **P1**：修复子 agent 内部 session 因无 sender identity 落到 `"*"` 通配策略而被静默剥夺文件系统/运行时工具的安全隐患。
- [#98328](https://github.com/openclaw/openclaw/pull/98328) **P1**：CLI session reseed 历史中用户消息全部硬编码为 `User:` 标签，矩阵/Discord/Telegram 群聊中无法区分参与者。
- [#99115](https://github.com/openclaw/openclaw/pull/99115)：cron 初始投递解析补齐 `current` 与 `session:` 目标支持。
- [#110303](https://github.com/openclaw/openclaw/pull/110303)：在 schema 中接受 `agents.defaults.compaction.enabled`，补齐文档。

**安全/网关**
- [#109980](https://github.com/openclaw/openclaw/pull/109980)：修复 Vault 解析器在非 2xx 响应上未取消未读 body 导致的连接/内存泄漏（CVE-2024-24750 同源风险）。
- [#109792](https://github.com/openclaw/openclaw/pull/109792) **XL · 安全边界**：SecretRef 降级在日志与 doctor 中显式告警。
- [#99160](https://github.com/openclaw/openclaw/pull/99160)：修复 plugin HTTP prefix 路由被 percent-encoded 兄弟路径匹配的潜在越权。
- [#98621](https://github.com/openclaw/openclaw/pull/98621)：把 `isLoopbackClientIp` 从 `127.0.0.1` 扩到完整 `127.0.0.0/8`，适配容器/sandbox 环境。
- [#99090](https://github.com/openclaw/openclaw/pull/99090)：Discord 网关/迁移存储的 `JSON.parse` 加防御性 try/catch。

**配置/工具链**
- [#106888](https://github.com/openclaw/openclaw/pull/106888)：新增 `CLAW.md` 作为人类可读的 Claw 清单格式（保留 JSON 兼容性）。
- [#98901](https://github.com/openclaw/openclaw/pull/98901)：修复 `openclaw config set models.providers.<id> '<json>' --merge` 静默覆盖模型目录。
- [#109675](https://github.com/openclaw/openclaw/pull/109675)：Control UI config 表单 `Number(...)` 强转拒绝非十进制字符串。
- [#102982](https://github.com/openclaw/openclaw/pull/102982) **XL**：把 `claws update` 从只读 plan 升级为受 `--yes` + `--plan-integrity` 保护的批量变更。

**UI / Onboarding**
- [#110269](https://github.com/openclaw/openclaw/pull/110269)：onboarding 结束后 OpenClaw 仍以"系统管理员"身份常驻侧栏与 Settings dock（Phase 6 PR1）。
- [#110295](https://github.com/openclaw/openclaw/pull/110295)：五区侧栏的 Home 页与身份行信息架构。
- [#110302](https://github.com/openclaw/openclaw/pull/110302)：浏览器实时 Talk 在停止/重启竞速中不再残留旧 relay。
- [#110305](https://github.com/openclaw/openclaw/pull/110305)：长会话中已生成图片内存按 Blob URL 释放。
- [#110292](https://github.com/openclaw/openclaw/pull/110292)：Wear Talk 替换在迟到音频错误下不再卡死。
- [#110304](https://github.com/openclaw/openclaw/pull/110304) **P1**：TUI 编辑器 `Ctrl+V` 剪贴板图片粘贴。

**CI / 工具脚本**
- [#110298](https://github.com/openclaw/openclaw/pull/110298)、[#110248](https://github.com/openclaw/openclaw/pull/110248) **XL**：合并爆发期间保留 main 验证矩阵、捕获脚本声明漂移。
- [#98867](https://github.com/openclaw/openclaw/pull/98867)：补齐 `src/transcripts/` 单元测试。
- [#104851](https://github.com/openclaw/openclaw/pull/104851)：防止 doctor 报告中的 emoji 在跨长度边界时损坏。

**已关闭/合并的回归修复**
- [#88312](https://github.com/openclaw/openclaw/issues/88312)（Codex turn-completion 回归）、[#95121](https://github.com/openclaw/openclaw/issues/95121)（Codex OAuth 28s 延迟回归）、[#50248](https://github.com/openclaw/openclaw/issues/50248)（`sessions cleanup --fix-missing` 误裁新鲜 cron session）、[#76171](https://github.com/openclaw/openclaw/issues/76171)（陈旧 worker 进程累积）、[#99449](https://github.com/openclaw/openclaw/issues/99449)（Codex 插件劫持 runtime）、[#108344](https://github.com/openclaw/openclaw/issues/108344)（cron session mid-prep 被驱逐）、[#91352](https://github.com/openclaw/openclaw/issues/91352)（OAuth 迁移残留默认 profile）均在过去 24 小时内关闭。

> 总体而言，**session-state 与 OAuth/Codex app-server 的稳定性是这一轮的主旋律**；UI/Onboarding 的重构也通过 [#110259](https://github.com/openclaw/openclaw/pull/110259)→[#110295](https://github.com/openclaw/openclaw/pull/110295)→[#110269](https://github.com/openclaw/openclaw/pull/110269) 串联进入产品化阶段。

---

## 四、社区热点

按评论数与点赞数排序，今日最受关注的 10 个讨论：

| # | 链接 | 标题 | 评论 | 👍 | 类型 |
|---|------|------|------|----|------|
| 1 | [#75](https://github.com/openclaw/openclaw/issues/75) | Linux/Windows Clawdbot Apps | 114 | 81 | 长期增强 |
| 2 | [#88312](https://github.com/openclaw/openclaw/issues/88312) | Codex turn-completion stall 回归（已关闭） | 21 | 5 | P1 回归 |
| 3 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | Memory Trust Tagging by Source | 18 | 0 | 安全/功能 |
| 4 | [#87744](https://github.com/openclaw/openclaw/issues/87744) | Codex-backed Telegram turns 超时 | 16 | 3 | P1 稳定性 |
| 5 | [#10659](https://github.com/openclaw/openclaw/issues/10659) | Masked Secrets（API Key 屏蔽） | 14 | 4 | P1 安全 |
| 6 | [#91352](https://github.com/openclaw/openclaw/issues/91352) | OAuth 迁移残留（已关闭） | 11 | 1 | P2 回归 |
| 7 | [#11665](https://github.com/openclaw/openclaw/issues/11665) | Webhook 多轮会话 | 11 | 0 | 增强 |
| 8 | [#10687](https://github.com/openclaw/openclaw/issues/10687) | 动态模型发现（OpenRouter 等） | 10 | 3 | 增强 |
| 9 | [#7722](https://github.com/openclaw/openclaw/issues/7722) | Filesystem 沙箱配置 | 10 | 4 | 安全/功能 |
| 10 | [#96975](https://github.com/openclaw/openclaw/issues/96975) | 隔离子 agent 完成事件回流 | 10 | 1 | 增强 |

**背后的诉求分析：**

- **平台覆盖**（#75）：社区对 Linux/Windows 桌面端近乎"刚需"——81 个 👍 是数据库中最高的增强票，且 issue 跨越 2026-01 至今未被解决，已经成为项目**最具代表性的未兑现承诺**。
- **安全与可信度**（#7707、#10659、#7722）：三者共同指向"Agent 不可信输入/不可信输出"这一同一主题：分别对应**记忆投毒防护**、**凭证外泄防护**、**文件系统越权防护**。这表明 OpenClaw 的用户群体正从"玩具尝试"过渡到"承载真实数据/真实密钥的生产负载"。
- **Codex 后端稳定性**（#88312、#87744、#95121、#107464）：当 Codex app-server 取代传统 LLM 调用成为默认运行时后，turn completion / OAuth refresh / subagent 调度路径上的任何抖动都会被放大。社区对这条路径的容错预期极高。
- **会话与子 agent 治理**（#96975、#11665、#8299、#86684、#78562、#107873）：体现"OpenClaw 是被编排进工作流而非独立使用"的趋势——子 agent 输出隔离、cron 会话复用、announce 抑制等都是为多轮/多 agent 场景设计的。

---

## 五、Bug 与稳定性

按严重程度排列：

### P0（release-blocker / 启动级失败）

- [#108435](https://github.com/openclaw/openclaw

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**报告日期：2026-07-18 ｜ 数据窗口：过去 24 小时 ｜ 覆盖 13 个项目**

---

## 1. 生态全景

个人 AI 助手与自主智能体开源生态正进入**"高活跃但分化加剧"的成熟前夜**：以 OpenClaw 为代表的旗舰项目单日维持 400+ Issue / 500+ PR 的吞吐强度，处于全速迭代期；而 LobsterAI、CoPaw、IronClaw 等项目已形成稳定的"日/周发版"节奏；与此同时，NullClaw、TinyClaw、ZeptoClaw 等项目出现零活动或单点维护者停滞，呈现明显的长尾分化。技术焦点从"模型接入"全面转向**会话稳定性、安全架构、可观测性与多渠道体验一致性**四大方向，企业级特性（OIDC、RBAC、Air-gapped、供应链签名）成为新一轮 RFC 集群的核心议题。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | 已关闭 Issues | PRs 更新 | 已合并/关闭 PRs | 新版本 | 健康度 | 核心状态 |
|------|---------|----------|--------|--------------|------|------|--------|
| **OpenClaw** | 412 | — | 500 | — | v2026.7.2-beta.2 | ⭐⭐⭐⭐ | 高强度迭代 + 2 个 P0 |
| **Hermes Agent** | 50 | 7 | 50 | 1 | 无 | ⭐⭐⭐ | 49 PR 积压，无 release |
| **IronClaw** | 50 | 24 | 50 | 25 | 无 | ⭐⭐⭐⭐⭐ | Reborn 整合期，自净率高 |
| **ZeroClaw** | 50 | 8 | 50 | 10 | 无 | ⭐⭐⭐ | 维护者过渡期，多 RFC blocked |
| **CoPaw (QwenPaw)** | 25 | 10 | 40 | 23 | v2.0.0.post3 | ⭐⭐⭐⭐ | 2.0 后修复密集 |
| **LobsterAI** | — | 5 (stale) | — | 13 | 2026.7.16 | ⭐⭐⭐⭐⭐ | 高频发版，体验升级 |
| **NanoClaw** | 3 | 1 | 12 | 3 | 无 | ⭐⭐⭐⭐ | agent-runner 重构 + 安全修复 |
| **PicoClaw** | 4 | — | 12 | 2 | 无 | ⭐⭐ | 全 stale 标记 |
| **NanoBot** | — | 2 | — | 4 | 无 | ⭐⭐⭐⭐ | 响应极快 < 24h |
| **Moltis** | 1 | 0 | 2 | 0 | 20260717.03/02 | ⭐⭐⭐⭐ | 每日发版，代码空窗 |
| **NullClaw** | 1 | 0 | 0 | 0 | 无 | ⭐⭐ | P0 崩溃未修复 |
| **ZeptoClaw** | 8 (全关闭) | 8 | 0 | 0 | 无 | ⭐⭐ | 单维护者，零外部交互 |
| **TinyClaw** | 0 | 0 | 0 | 0 | 无 | ⭐ | 完全静默 |

**关键洞察**：IronClaw 的 PR 自净率（50%）与 LobsterAI 的版本节奏（已发布 + 下版本待发布）是当前生态"健康度天花板"；OpenClaw 凭绝对体量领跑但 beta 通道质量承压；NullClaw / TinyClaw / ZeptoClaw 形成"长尾风险带"。

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 同类对比 |
|------|---------|---------|
| **社区规模** | Issue 412 / PR 500（24h） | 约为 Hermes / IronClaw / ZeroClaw 的 8-10 倍 |
| **发布模式** | 每日 beta 推进 + P0 阻断 | CoPaw / LobsterAI 采用 post-release 修复模式更稳 |
| **桌面覆盖** | 仅 macOS，Linux/Windows 缺位（#75，81 👍） | CoPaw、IronClaw、ZeroClaw 均已有 Tauri/Electron 多端 |
| **后端运行时** | Codex app-server 已成默认路径 | Hermes / NanoBot 仍以 OpenAI 兼容为主 |
| **安全 RFC** | 渐进式硬化（Vault / SecretRef / loopback 扩展） | ZeroClaw 走 OIDC + RBAC 体系化路线 |
| **代码体量** | 单日 500 PR 流转暗示万级 PR/月 | Hermes 50 PR/天 ≈ 1500/月，规模差 6-7 倍 |

**OpenClaw 的相对优势**：
- 议题广度（Codex、OAuth、Vault、Compaction、Telegram、Matrix、Discord、cron、sub-agent）无项目能匹敌
- 会话/Agent 核心（auto-compaction 根治 PR #110297、子 agent 权限 PR #109055、transcript 一致性 PR #110300）已进入"深水区打磨"
- 安全边界设计（SecretRef 降级告警、plugin HTTP prefix 越权修复、loopback 扩展）体系化

**OpenClaw 的相对短板**：
- Beta 通道出现 2 个 P0 release-blocker（SQLite 迁移顺序 #109867、gateway 启动失败 #108435），与 LobsterAI/CoPaw 的 post-release 模式相比风险更高
- 桌面端缺位已从"功能请求"升级为"产品级承诺透支"
- 跨平台一致性诉求分散在 100+ Issue，缺乏统一路线图

---

## 4. 共同关注的技术方向

| 方向 | 涉及项目 | 具体诉求 |
|------|---------|---------|
| **Codex / MCP 后端稳定性** | OpenClaw、CoPaw、ZeroClaw | Codex turn-completion stall、prompt_cache_key 超限、Codex 插件劫持 |
| **OAuth / 多 Provider 认证鲁棒性** | PicoClaw、OpenClaw、IronClaw、ZeroClaw | 刷新语义不一致、并发竞态、scope 携带、provider CA 证书 |
| **企业级安全（OIDC / RBAC / Air-gapped / 供应链签名）** | ZeroClaw、CoPaw、IronClaw、OpenClaw | ZeroClaw 五条 RFC 集中；OpenClaw 渐进硬化 |
| **多渠道 UX 一致性** | PicoClaw、OpenClaw、Hermes、NanoBot | 流式输出、typing 状态、卡片降级 |
| **会话 / 上下文生命周期管理** | OpenClaw、NanoClaw、Hermes、IronClaw | agent-runner 漂移、子 session 锚定、context 无界增长（#4278） |
| **Memory / 向量库后端可替换** | OpenClaw、Moltis、NanoBot | Moltis 新增 Zvec 后端；OpenClaw 推进 memory trust tagging |
| **CLI / TUI 升级体验** | OpenClaw、Hermes | `hermes update` 输出被吞；OpenClaw `Ctrl+V` 剪贴板粘贴 |
| **长期 PR / Issue 积压治理** | PicoClaw（全部 stale）、LobsterAI（4 月 PR 滞留）、Hermes（25106 已 close 但 release note 模糊） | 跨项目共性运维痛点 |

---

## 5. 差异化定位分析

| 项目 | 目标用户 | 功能侧重 | 技术架构特征 |
|------|---------|---------|------------|
| **OpenClaw** | 个人/团队重度 AI Agent 用户 | 多 Provider、多渠道、Sub-agent、会话治理 | Codex app-server 优先 + 多 transport；Mac 优先 |
| **CoPaw (QwenPaw)** | 桌面端日常用户 | Windows/macOS 桌面应用 + MCP + 多模型 | Tauri + PyInstaller sidecar；2.0 架构重构中 |
| **IronClaw** | 平台/工程化导向用户 | Reborn 架构 + Engine V2 + Capability Conduit | Rust crate 体系化、ratchet test 强制收敛 |
| **ZeroClaw** | SaaS / 企业级部署 | OIDC + RBAC + Air-gapped + 多 Agent 路由 | 多 transport + plugin queue + Webhook ingress |
| **Hermes Agent** | CI/CLI 重度用户 | CLI 调度、Provider 切换、可观测性 | Stdio MCP + Codex transport + 状态机 |
| **LobsterAI** | 中文桌面用户 | AI 主题皮肤 + Cowork + Pageant | Electron + Renderer/Main 多进程 |
| **NanoBot** | 中文模型生态用户 | Moonshot/ModelScope/Qwen/DeepSeek/Kimi/GLM | WebUI 优先 + Provider registry |
| **NanoClaw** | 多 CLI harness 高级用户 | Claude Code + Codex + OpenCode 三栈兼容 | Skill 系统 + agent-runner |
| **Moltis** | 极简/研究用户 | ACP 优先 + 多 vector DB memory | Rust + daily 版本号 + Cargo feature flag |
| **PicoClaw** | 嵌入式/低资源 | 多渠道轻量集成 | — |
| **NullClaw / ZeptoClaw** | 研究/安全方向 | 平台兼容性 / CVE 数据治理 | aarch64 / 内部工具链 |

**架构分化趋势**：Rust 项目（IronClaw、ZeroClaw、Moltis）正以"crate 化 + RFC 驱动 + ratchet test"形成工程化范式；TS/JS 项目（OpenClaw、CoPaw、NanoClaw）则集中在 Channel/Skill/Provider 抽象层演进。

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高强度迭代期（5 个）
- **OpenClaw**：万级 Issue/PR 月吞吐，多 P0/P1 同步收尾
- **IronClaw**：Reborn 1.0 前整合，ratchet test 驱动收敛
- **ZeroClaw**：v0.9.0 前安全 RFC 集群爆发
- **CoPaw**：2.0 后 post-release 修复密集期
- **LobsterAI**：每日发版、跨模块协同

### 🟡 第二梯队：质量巩固期（4 个）
- **NanoBot**：响应速度快但 PR 积压中等（7 个）
- **NanoClaw**：CVE 待合并 + agent-runner 群集修复
- **Hermes Agent**：49 PR 待审、维护者 review 节奏放缓
- **Moltis**：代码空窗但版本节奏稳定

### 🟠 第三梯队：响应风险期（2 个）
- **PicoClaw**：全部条目 stale，4 个月跨仓 PR 滞留
- **NullClaw**：2 个月无版本、P0 崩溃无响应

### 🔴 第四梯队：停滞 / 内循环（2 个）
- **ZeptoClaw**：单维护者、零外部交互
- **TinyClaw**：24 小时零活动

---

## 7. 值得关注的趋势信号

### 趋势 1：从"模型驱动"转向"会话治理驱动"
OpenClaw（auto-compaction 根治、子 agent 权限、transcript 一致性）、NanoClaw（agent-runner 群集修复）、IronClaw（Engine V2 上下文无界增长）形成同一信号——**当 Agent 承载生产负载后，会话状态机的可预测性远比模型调用本身更影响可用性**。对开发者的启示：在自建 Agent 框架时，应优先设计 session state machine 与 context budget broker，而不仅关注 prompt engineering。

### 趋势 2：安全 RFC 集群化进入 RFC 驱动时代
ZeroClaw 同期推进 OIDC、RBAC、Air-gapped、可插拔安全接口、供应链签名五条 RFC；CoPaw 锁定 MCP 驱动占位符转 env credential；OpenClaw 推进 SecretRef 降级告警、plugin HTTP prefix 越权修复——**企业级落地正在把"安全"从代码评审后置项转为 RFC 阶段前置项**。对架构师的启示：单一 RFC 不再能解决合规需求，需要"认证 + 授权 + 部署模式 + 供应链"的体系化设计。

### 趋势 3：渠道一致性需求被低估
OpenClaw、Telegram 渠道稳定性（#87744）、Hermes 的 Feishu 卡片降级、PicoClaw 的 QQ 流式输出 + WhatsApp typing 状态、CoPaw 的 Channel 工具结果独立控制——**Channel 层正在从"适配器"升级为"产品差异化主战场"**。对产品经理的启示：流式输出、typing 状态、卡片降级是 AI 助手"拟人化"体验的三个核心触点，缺一不可。

### 趋势 4：可观测性从"日志"升级为"结构化诊断"
LobsterAI 的 `CoworkErrorDetail` 结构、OpenClaw 的 doctor emoji 跨长度修复、IronClaw 的 curator staleness 暴露、Hermes 的 multi-model routing metadata

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报
**日期：2026-07-18**
**数据来源：[HKUDS/nanobot](https://github.com/HKUDS/nanobot)**

---

## 1. 今日速览

NanoBot 今日活跃度**较高**，呈现典型的"问题驱动 + 即时修复"工作流。过去 24 小时关闭了 2 个 Issue，并紧跟了 4 个相关 PR 的合并，形成"报告 → 修复"闭环。社区关注点集中在 **Moonshot Kimi 系列模型兼容性**（k2.5/k2.6/k3）、**WebUI 体验优化**和 **Provider 生态扩展**（新增 ModelScope）。整体项目健康度良好，Issue 响应速度极快（当日提交、当日关闭），但仍有 7 个 PR 待合并，积压压力需关注。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展（已合并/关闭 PR）

今日合并/关闭的关键 PR 主要围绕 **Moonshot Kimi 模型兼容性修复** 与 **WebUI 体验增强**：

| PR | 标题 | 意义 |
|---|---|---|
| [#4962](https://github.com/HKUDS/nanobot/pull/4962) | fix(providers): correct Moonshot kimi-k2.6 temperature override to 0.6 | 修复 Moonshot kimi-k2.6 因 API 温度策略变更（`>=1.0` → `exactly 0.6`）导致的请求失败，移除硬编码 1.0 覆盖 |
| [#4967](https://github.com/HKUDS/nanobot/pull/4967) | fix(providers): omit temperature for Moonshot Kimi K2.5/K2.6 | 对 Kimi K2.5/K2.6 直接 provider 路径不再发送 temperature，由 Moonshot 根据 thinking 模式自行决定 |
| [#4958](https://github.com/HKUDS/nanobot/pull/4958) | Improve zh-TW Traditional Chinese locale | 改进繁体中文本地化质量，提升国际化体验 |
| [#4953](https://github.com/HKUDS/nanobot/pull/4953) | feat(webui): support native folder picker bridges | WebUI 支持原生文件夹选择桥接（loopback 受限 + tab-scoped token 鉴权），安全设计合理 |

**推进评估**：今日修复直面真实生产故障（Kimi 模型无法调用），并扩展了 WebUI 的本地集成能力，属于"质量 + 功能"双重推进。

---

## 4. 社区热点

**当日最活跃 Issue：[#4968 Unbound cron jobs](https://github.com/HKUDS/nanobot/issues/4968)**
- 评论数 4 条，为今日讨论最热的议题
- 用户 [`wzrayyy`](https://github.com/wzrayyy) 质疑为何代码禁止创建 unbound cron jobs（[`cli/commands.py:1883`](https://github.com/HKUDS/nanobot/blob/main/nanobot/cli/commands.py#L1883)），认为该限制不合理
- **诉求分析**：用户希望获得更灵活的定时任务调度能力，反映 cron 调度系统当前设计过于严苛

**新增 Provider 关注度：[#4965 ModelScope provider support](https://github.com/HKUDS/nanobot/pull/4965)**
- P1 优先级，涉及新 provider 接入（OpenAI 兼容端点 `api-inference.modelscope.cn/v1`）
- 覆盖 Qwen、DeepSeek、Kimi、GLM、MiniMax 等开源模型，包含 LLM 聊天与图像生成
- **诉求分析**：中文/开源模型用户对多 Provider 接入需求旺盛，ModelScope 的接入将进一步扩大生态

---

## 5. Bug 与稳定性

### 🔴 P1 严重（已修复 ✅）

| Issue | 描述 | Fix PR |
|---|---|---|
| [#4961](https://github.com/HKUDS/nanobot/issues/4961) | Moonshot kimi-k2.6 要求 `temperature=0.6`，但 registry 硬编码为 1.0，导致所有请求被拒 | [#4962](https://github.com/HKUDS/nanobot/pull/4962) ✅ <br> [#4967](https://github.com/HKUDS/nanobot/pull/4967) ✅（补充修复，更彻底方案） |

**评估**：两个 PR 协同处理同一问题（#4962 修正为 0.6，#4967 直接不传温度让 provider 自决），形成防御纵深。问题响应时间 < 24 小时，质量值得肯定。

### 🟡 待观察

- **[#4908 refactor(channels): make built-in channels self-contained](https://github.com/HKUDS/nanobot/pull/4908)** — P1 大型重构，标记 `conflict`，存在合并冲突风险，可能影响后续 channel 相关 PR 的兼容性。

---

## 6. 功能请求与路线图信号

### 高概率纳入下一版本

| 功能 | PR | 理由 |
|---|---|---|
| **ModelScope Provider** | [#4965](https://github.com/HKUDS/nanobot/pull/4965) | P1 + 完整测试，开源模型生态刚需 |
| **Kimi K3 支持** | [#4966](https://github.com/HKUDS/nanobot/pull/4966) | 紧跟 Moonshot 新模型发布节奏，且 K2.5/K2.6 修复已落地 |
| **Render 一键部署** | [#4937](https://github.com/HKUDS/nanobot/pull/4937) | 降低部署门槛，文档/CI 完整 |
| **WebUI 智能体输出优化** | [#4963](https://github.com/HKUDS/nanobot/pull/4963) | 由核心维护者 [`Re-bin`](https://github.com/Re-bin) 提交，合并率高 |
| **图像生成设置热更新** | [#4964](https://github.com/HKUDS/nanobot/pull/4964) | 核心维护者提交，与 WebUI 改进协同 |

### 用户提出但尚未实现

- **Unbound cron jobs 支持**（[#4968](https://github.com/HKUDS/nanobot/issues/4968)，已关闭但未见对应实现 PR）— 需关注是否转 PR 或被标记为 wontfix

---

## 7. 用户反馈摘要

- **🔴 模型 API 兼容性问题**（[#4961](https://github.com/HKUDS/nanobot/issues/4961)）：用户 [`SkyLeo-ozim`](https://github.com/SkyLeo-ozim) 反馈 Moonshot 调整 kimi-k2.6 温度策略后所有请求静默失败，体现**"provider 行为变更 → 客户端需快速跟进"**的运维痛点。
- **🟡 定时任务灵活性**（[#4968](https://github.com/HKUDS/nanobot/issues/4968)）：4 条评论反映用户对 cron 调度的"过度绑定"设计不满，希望支持 unbound 模式以获得更轻量的调度能力。
- **🟢 国际化需求**（[#4958](https://github.com/HKUDS/nanobot/pull/4958)）：繁体中文改进被主动提出并实施，说明社区有真实的中文用户基础。

---

## 8. 待处理积压

### ⚠️ 长期未响应的重要 PR

| PR | 标题 | 创建日期 | 等待天数 | 风险 |
|---|---|---|---|---|
| [#4937](https://github.com/HKUDS/nanobot/pull/4937) | feat: add one-click deploy to render | 2026-07-14 | 4 天 | P2，文档/CI 完整，需 reviewer 关注 |
| [#4908](https://github.com/HKUDS/nanobot/pull/4908) | refactor(channels): make built-in channels self-contained | 2026-07-13 | 5 天 | **P1 + conflict**，大型重构，存在合并冲突累积风险，建议优先处理 |

### 📌 维护者提醒

- 当前 7 个 open PR 中含 **2 个 conflict 标记**（#4908、#4965），应优先 rebase 以避免后续集成成本
- 核心维护者 [`Re-bin`](https://github.com/Re-bin) 单日提交 2 个 WebUI 相关 PR（#4963、#4964），建议关注其 review 负载
- Issue #4968 已关闭但**未关联实现 PR**，若需求有效应转为 enhancement 跟踪

---

## 📊 数据汇总

| 指标 | 数值 |
|---|---|
| 新开/活跃 Issues | 0 |
| 已关闭 Issues | 2 |
| 待合并 PRs | 7 |
| 已合并/关闭 PRs | 4 |
| 新版本 | 0 |
| P1 优先级 PRs（开放中） | 4 |
| 存在冲突的 PRs | 2 |

**项目健康度评估**：⭐⭐⭐⭐☆（4/5）
- ✅ 问题响应速度极佳（< 24h）
- ✅ 修复质量高（双 PR 防御纵深）
- ⚠️ 待合并 PR 积压中等（7 个）
- ⚠️ 存在合并冲突需维护者介入

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报 · 2026-07-18

> 数据来源：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent) · 统计窗口：过去 24 小时

---

## 1. 今日速览

Hermes Agent 仓库今日依然保持**高活跃但无新版本发布**的状态：过去 24 小时共产生 50 条 Issue 更新（43 条新开/活跃、7 条关闭）与 50 条 PR 更新（49 条待合并、仅 1 条已合并/关闭），增量虽猛但没有一个新 Release 落地。项目整体处于"密集修复期"，P1/P2 级 Bug 持续涌入，集中在 **CLI 调度器、多模态/视觉处理、Codex transport、MCP/stdlib 子进程管理**四条线；同时一批稳定性、性能、跨平台体验类的 PR 正在排队审视。社区反馈显示用户对 Provider 切换、Cron 行为、Desktop 深度链接/卡片格式等场景的真实需求强烈，但维护者尚未给出明确的版本节奏，**健康度评估中等偏紧——代码流动活跃但缺乏收口节点**。

---

## 2. 版本发布

⚠️ 今日 **无新版本发布**。这是数据概览中最值得关注的信号：尽管有 49 个待合并 PR 与多项关键修复（包括 Codex `prompt_cache_key` 超限、Memory 关闭流程、Cron 并发改造），但 `hermes-agent` 尚未发布任何新 `git tag`/Release。建议关注者追踪 `main` 分支 HEAD 或下周 release-note。

---

## 3. 项目进展

过去 24 小时仅 **1 条 PR 进入已合并/已关闭** 状态，其余 49 条 PR 仍 OPEN：

| 进度 | PR | 主题 | 价值 |
|---|---|---|---|
| ✅ 合并/关闭 | #66634 ([链接](https://github.com/NousResearch/hermes-agent/pull/66634)) | `fix(cli): invalidate update cache when Git HEAD changes` | 给源码检出场景的 update-check 缓存加上 Git HEAD 标记，避免切换分支后缓存陈旧；但保留 packaged 安装的原有行为，影响范围克制 |

其余 49 条待合并 PR 覆盖：delegation（[#66308](https://github.com/NousResearch/hermes-agent/pull/66308)）、curator 状态可见性（[#66648](https://github.com/NousResearch/hermes-agent/pull/66648)）、Desktop 深度链接（[#66647](https://github.com/NousResearch/hermes-agent/pull/66647)）、Slack 重连自愈（[#66645](https://github.com/NousResearch/hermes-agent/pull/66645)）、vision override 作用域修复（[#66644](https://github.com/NousResearch/hermes-agent/pull/66644)）、Cron 并发重构（[#61976](https://github.com/NousResearch/hermes-agent/pull/61976)）、Memory drain 关闭（[#64364](https://github.com/NousResearch/hermes-agent/pull/64364)）、macOS Calendar/Reminders 权限声明（[#65220](https://github.com/NousResearch/hermes-agent/pull/65220)）、Codex Worker 暴露 Hermes MCP 工具（[#31279](https://github.com/NousResearch/hermes-agent/pull/31279)）等。**项目整体在 desktop 体验、Cron 安全、Provider 一致性、Memory 生命周期四条主线上持续推进，但合并节奏明显放缓，需要维护者集中 review 才能形成下一版本**。

---

## 4. 社区热点

按评论数排序，今日社区关注度最高的 Issue 集中在 **CLI 行为可预测性、Codex/Multimodal 兼容性、update 流程**：

- 🔥 [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) (💬6) — `hermes update` 在 #3492 之后出现两个回归：git fetch 输出被吞掉、每次都会创建并立即恢复 stash。这是用户首次升级体验最直接的痛感点，影响所有维护更新路径。
- 🔥 [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) (💬5) — CLI 顶层调度器丢弃命令处理器返回的整数 exit code，导致 `set -e`、CI、调度器全部失效。**这是 CI/自动化场景下的破坏性问题**，对企业用户尤其致命。
- 🔥 [#66267](https://github.com/NousResearch/hermes-agent/issues/66267) (💬5, **P1**) — 视觉多模态内容列表在图像/上下文压缩后会进入近乎死循环的重试，最终耗尽 API-call 配额；错误形如 "expected string or bytes-like object"。
- 🔥 [#66045](https://github.com/NousResearch/hermes-agent/issues/66045) (💬5, 已关闭) — Codex transport 把 `prompt_cache_key` 拼到超过 64 字符，每次 openai-codex 调用 400 静默回退。**该 Issue 当日已被关闭**，说明已经产生了对应的修复。
- 🔥 [#9978](https://github.com/NousResearch/hermes-agent/issues/9978) (💬4) — Feishu/Lark 渠道原生 interactive card 支持呼声高，期望带元数据底栏（model / RT / token 用量）。背后场景是 multi-model 路由调试。
- 🔥 [#60841](https://github.com/NousResearch/hermes-agent/issues/60841) (💬4, **Security**) — `uv.lock` 显式钉住含 CVE 的三个包版本，任何 `pip-audit --fix` 都会被下一次 `uv sync` 重置；属于**配置型漏洞+安全供应链问题**。

**诉求归纳**：用户最大的不满来自"**静默失败**"——CLI exit code 被吞、Codex 请求 400 静默回退、Desktop serve 抢占 cron ticker；次之是"**update 体验**"变差；再者集中在多 Provider/多模型场景下的 metadata/状态可见性。

---

## 5. Bug 与稳定性

按严重度（P1 → P3 + 是否有 fix PR）排列：

| 等级 | Issue | 描述 | Fix PR 状态 |
|---|---|---|---|
| **P1** | [#66267](https://github.com/NousResearch/hermes-agent/issues/66267) | 多模态内容列表触发临时处理崩溃+API 配额耗尽 | ❌ 暂无专门 PR，今日 #66635 ([链接](https://github.com/NousResearch/hermes-agent/pull/66635)) 修复了 local compression timeout，是间接相关 |
| **P2** | [#62810](https://github.com/NousResearch/hermes-agent/issues/62810) | CLI 调度器丢弃整数 exit code | ❌ |
| **P2** | [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) | `hermes update` 输出/stash 回归 | ❌ |
| **P2** | [#60197](https://github.com/NousResearch/hermes-agent/issues/60197) | `/exit` 时 MCP Server task `RuntimeError: Event loop is closed` | ❌ |
| **P2** | [#66392](https://github.com/NousResearch/hermes-agent/issues/66392) | Linux/X11 下 `computer_use` 临时 uinput pointer 把整个 KDE Plasma/Qt 会话搞崩（cua-driver 0.8.3） | ❌ |
| **P2** | [#66518](https://github.com/NousResearch/hermes-agent/issues/66518) | stdio MCP 看门狗在 WSL2 上按 `create_time` 相等判定把健康子进程全部 kill | ❌ |
| **P2** | [#66641](https://github.com/NousResearch/hermes-agent/issues/66641) | `_resolve_task_provider_model` 忽略 auxiliary task 的 `key_env`，vision/compression 401 | ❌ |
| **P2** | [#66544](https://github.com/NousResearch/hermes-agent/issues/66544) | 自定义 provider CA 证书不作用于 metadata 探测 | ❌ |
| **P2** | [#66587](https://github.com/NousResearch/hermes-agent/issues/66587) | Gemini 报 `Function call is missing thought_signature` | ❌ |
| **P2** | [#66045](https://github.com/NousResearch/hermes-agent/issues/66045) | Codex `prompt_cache_key` 超 64 字符 | ✅ **当日已关闭**，社区或维护者已修复 |
| **P2** | [#66589](https://github.com/NousResearch/hermes-agent/issues/66589) | Telegram 计划重启后 `_send_home_channel_startup_notifications` 与路径降级标记竞态 | ❌ |
| **P2** | [#65826](https://github.com/NousResearch/hermes-agent/pull/65826) | Gateway 平台 agent 看不到 MCP 工具 | ✅ PR [#65826](https://github.com/NousResearch/hermes-agent/pull/65826) OPEN，`auto-include MCP toolsets for gateway platform agents` |
| **P3** | [#60841](https://github.com/NousResearch/hermes-agent/issues/60841) | uv.lock 钉住 CVE 版本，pip-audit 修复会被重置 | ❌ |
| **P3** | [#58705](https://github.com/NousResearch/hermes-agent/issues/58705) (👍1) | mem0 OSS + Qdrant 本地：plugin 持有文件锁后 agent 工具无法访问 | ❌ |
| **P3** | [#66642](https://github.com/NousResearch/hermes-agent/issues/66642) | 终端工具丢失 venv（login-shell snapshot 重置 PATH） | ❌ |
| **P3** | [#66629](https://github.com/NousResearch/hermes-agent/issues/66629) | Desktop serve cron ticker 抢 `.tick.lock`，Feishu 卡片降级为纯文本 | ❌ |
| **P2** | [#62734](https://github.com/NousResearch/hermes-agent/issues/62734) | Windows 下 terminal_tool.py 后端探测会闪烁可见控制台窗口 | ❌ |
| **P2** | [#66574](https://github.com/NousResearch/hermes-agent/issues/66574) | Windows Desktop/TUI + 本地 reasoning 模型：reasoning 字段耗尽不暴露 + Desktop 进程生命周期留陈旧 runtime state | ❌ |

**稳定性画像**：今日报告的 bug 多为"**配置/状态/资源生命周期相关的隐性回归**"，而非算法/性能类硬错误——意味着开发者需要更系统的状态机可视化与回归测试覆盖。已有 PR 路径的仅 #66045（关闭）和 #65826（OPEN）。

---

## 6. 功能请求与路线图信号

将近期 feature request 与今日 OPEN PR 对照，可识别出几个具有近期落单能力的方向：

- **Delegation 增强**（高概率进入下个版本）
  - [#66536](https://github.com/NousResearch/hermes-agent/issues/66536) `delegate_task` 支持每个子任务独立 `model` / `provider` 覆盖。
  - [#66308](https://github.com/NousResearch/hermes-agent/pull/66308) 已实现 "per-task toolsets / persona / timeout" 三个字段，PR 处于 OPEN，等待 review；与上述 issue 方向高度一致。
- **Desktop 体验**
  - [#9978](https://github.com/NousResearch/hermes-agent/issues/9978) Feishu/Lark interactive card 格式 + 元数据底栏。⚠️ 相反信号：#66629 ([链接](https://github.com/NousResearch/hermes-agent/issues/66629)) 报当前 Desktop serve 会把已有卡片降级为纯文本，需先解决。
  - [#66621](https://github.com/NousResearch/hermes-agent/issues/66621) 用户为 profile 选择自定义图标。
  - [#50748](https://github.com/NousResearch/hermes-agent/issues/50748) Desktop 显示模型 token/s 生成速度。
  - **PR 已就位**：[#66647](https://github.com/NousResearch/hermes-agent/pull/66647) `hermes://session/<id>` 深度链接支持；[#66646](https://github.com/NousResearch/hermes-agent/pull/66646) 修复桌面端 quick-help 抽屉只列出 terminal-only 命令。Desktop 模块是当下最大增量。
- **Provider 一体化**
  - [#11442](https://github.com/NousResearch/hermes-agent/issues/11442) GitHub Copilot 支持 GitHub Enterprise Server。
  - [#33981](https://github.com/NousResearch/hermes-agent/issues/33981) (RFC) 中心化 Model/Provider Registry 已**关闭**——可能已被某 PR 吸收或转为内部 spec。
- **CLI/TUI 体验**
  - [#14859](https://github.com/NousResearch/hermes-agent/issues/14859) 状态栏显示当前会话标题。
  - [#11870](https://github.com/NousResearch/hermes-agent/pull/11870) `/openmd` slash 命令将最后一次回复渲染到第三方 markdown 浏览器。
- **可观测性**
  - [#66648](https://github.com/NousResearch/hermes-agent/pull/66648) `feat(curator): surface staleness` 把已经在 `.curator_state` 中计算的 stale/archived 信号透出到 `hermes status` / `/api/curator` / dashboard。

**判断**：Desktop、Delegation、可观测性 curator 三条线最可能在下一版本一起出现；Provider/Registry 统一化（CVE/registry）则需要维护者主动 plan，不在用户驱动力的直接转化路径上。

---

## 7. 用户反馈摘要

从评论中提炼的真实痛点：

- **CI/自动化断裂**：CLI exit code 被吞（#62810）是企业用户最敏感的场景。一位用户直接指出这破坏了 `set -e`、`&&`、schedulers，连维护者自己的 CI 都差点踩坑（#66559 fork PR 失败曾因 GH_TOKEN 缺失）。
- **升级后失声**：`hermes update` 的两处回归（#3523）让维护更新从"零摩擦"变成"需要肉眼复查"。多位用户反馈需要将 stash/fetch 输出重新打开。
- **Plan 配额无故烧光**：#66267 的无限 retry 直到 `API call budget is exhausted` 让用户在不知不觉中消耗 token 预算，**强烈希望报错而非重试**。
- **WSL2/Windows 上的资源生命周期**：`computer_use` 把整个桌面拉崩（#66392）、stdio MCP 看门狗把健康进程误杀（#66518）、Desktop/TUI 留陈旧 runtime state（#66574）——三件事都指向同一个根因：**Hermes 在云桌面/虚拟机/Windows 容器这些弱时钟/弱 console 场景下对子进程生命周期的假设过于乐观**。
- **多 Provider 切换不彻底**：#25106（已关闭）报 `--global` 切换 model 时 `model.base_url` 与 `model.api_mode` 没被一并清掉，留存"半切换"状态；这是 #66641（auxiliary task 忽略 `key_env`）和 #66544（metadata 探测忽略 SSL CA）的同源问题：**配置层语义分散，缺乏统一 resolver**。
- **企业部署阻断**：`uv.lock` 钉住 CVE 版本（#60841）让任何 `pip-audit` 修复在下一次 `uv sync` 时被抹平，安全审计无法闭环。
- **满意/正向反馈**：虽然数据中没有明确 thumbs-up，但 PR #66647/#66648/#66646 等说明社区贡献者与维护者对 Desktop 体验、curator 可观测性等方向的投入是稳定且细颗粒度的。

---

## 8. 待处理积压（提醒维护者关注）

| 类型 | ID | 标题 | 距今 | 建议 |
|---|---|---|---|---|
| Issue | [#25106](https://github.com/NousResearch/hermes-agent/issues/25106) | CLI `--global` model switch 不持久化 `base_url` / `api_mode` | 2026-05-13 至今约 2 个月 | 虽已 closed，建议在 release note 中明确告知是否完整修复，避免用户重复踩坑 |
| Issue | [#3523](https://github.com/NousResearch/hermes-agent/issues/3523) | `hermes update` 输出/stash 回归 | 2026-03

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**报告日期：** 2026-07-18
**数据来源：** GitHub 仓库 [sipeed/picoclaw](https://github.com/sipeed/picoclaw)
**统计周期：** 过去 24 小时

---

## 1. 今日速览

PicoClaw 仓库过去 24 小时共记录 **4 条 Issue 更新**与 **12 条 PR 更新**，整体活跃度属于中等偏上水平。本日无新版本发布，社区活动以 **Feature 增强** 与 **安全/性能硬化** 类 PR 为主。值得注意的是，所有活跃条目均被标记为 `[stale]`，说明这些 Issue/PR 已较长时间未得到维护者响应，存在积压风险。从贡献者构成看，`corporatepiyush`（3 个 seahorse 包重构 PR）、`As-tsaqib`（OAuth + WhatsApp 相关 2 项）成为当日主要贡献力量，反映出项目在多渠道消息层与认证安全方向持续演进。

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

上一可用版本为 v0.2.9（参考 Issue #3206 中用户报告基于该版本触发配置迁移错误）。建议关注维护者对当前积压 PR 的合并节奏，以便评估下一版本发布时间窗口。

---

## 3. 项目进展

### ✅ 今日已关闭的 PR（2 项）

| PR | 标题 | 贡献者 | 影响 |
|---|---|---|---|
| [#3204](https://github.com/sipeed/picoclaw/pull/3204) | fix(deps): restore Azure dependency freeze baseline | gezhengbin888 | 将 Azure SDK 模块降级至下游供应链校验冻结基线（`azcore v1.21.1` / `azidentity v1.13.1` / MSAL `v1.6.0`），修复供应链一致性 |
| [#3180](https://github.com/sipeed/picoclaw/pull/3180) | fix(cli): skip tool calls with invalid arguments | Alix-007 | 当 CLI 发出 `function.arguments` 非合法 JSON 的工具调用时，跳过该调用而非丢弃整批；新增回归测试 |

**进展评估：** 两个已关闭 PR 中，#3204 为依赖治理动作，#3180 为稳定性修复（避免单条坏数据拖垮整批工具调用）。两者均属于**低风险、高收益**的工程改进，但都不是面向用户的功能突破。项目当日整体向前推进的步伐较为平稳，但缺乏标志性进展。

---

## 4. 社区热点

### 🔥 评论数最高的 Issue

- **[#3201 Support streaming output for QQ channel](https://github.com/sipeed/picoclaw/issues/3201)** —— 3 条评论
  当前仅 Telegram 与 Pico WebSocket 实现 `StreamingCapable`，QQ 渠道用户希望获得 token 级实时反馈。属于典型"**跨渠道体验一致性**"诉求。

### 📌 关联 Issue/PR 集群（值得维护者关注）

`As-tsaqib` 同时提交了 Issue + 对应修复 PR 的两对组合，体现"**发现→修复**"的完整闭环：

| 关联 | 链接 | 主题 |
|---|---|---|
| Issue → PR | [#3240](https://github.com/sipeed/picoclaw/issues/3240) → [#3242](https://github.com/sipeed/picoclaw/pull/3242) | WhatsApp 原生"正在输入"状态 |
| Issue → PR | [#3239](https://github.com/sipeed/picoclaw/issues/3239) → [#3241](https://github.com/sipeed/picoclaw/pull/3241) | OAuth 刷新兼容性 + 并发竞态 |

**诉求分析：** 用户对"**多渠道 UX 一致性**"（typing 指示、流式输出）和"**认证层鲁棒性**"（provider 语义、并发安全）的关注持续上升，这两条线索很可能成为下一版本的功能侧重方向。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 用户安装/升级直接阻断

- **[#3206 v2→v3 config migration fails with false 'unknown field(s): build_info, session.dm_scope'](https://github.com/sipeed/picoclaw/issues/3206)** —— ✅ 已关闭
  在 v0.2.9 上运行 `picoclaw status` 即触发迁移失败，提示 `build_info` 与 `session.dm_scope` 为"未知字段"。属于**迁移器过度严格**问题，会让升级路径直接断裂。该 Issue 已被关闭，暗示修复已合入或转为其他 Issue 跟进，但需确认当前最新版本是否已实际解决。

### 🟠 P1 — 安全/凭据相关

- **[#3239 OAuth refresh requests use incompatible provider semantics and can race](https://github.com/sipeed/picoclaw/issues/3239)** —— 🔧 已有修复 PR [#3241](https://github.com/sipeed/picoclaw/pull/3241)
  - OpenAI 期望 JSON 请求体，当前用通用 form payload → 兼容性问题
  - 始终携带固定 `scope` → 部分 provider 拒绝
  - 缺乏并发控制 → 多 goroutine 同时刷新存在竞态
  
  **建议：** 优先合并 #3241，认证层风险不宜长时间滞留。

### 🟡 P2 — 安全硬化（非紧急）

- **[#3246 fix: security and robustness hardening (MQTT TLS, OAuth timeouts, bounded search reads)](https://github.com/sipeed/picoclaw/pull/3246)**
  - MQTT 渠道默认 `InsecureSkipVerify: true` → **凭据可能被中间人窃取**（高敏感）
  - OAuth 缺少超时 → goroutine 泄漏风险
  - 搜索读取无边界 → DoS 风险
  
  该 PR 集合了 3 项硬化修复，**强烈建议拆分审查并优先合并 MQTT TLS 部分**。

### 🟢 P3 — 体验/边缘问题

- **[#3240 Add typing presence to WhatsApp native replies](https://github.com/sipeed/picoclaw/issues/3240)** —— 🔧 已有 PR [#3242](https://github.com/sipeed/picoclaw/pull/3242)
  处理耗时数秒时用户无任何反馈，纯体验问题。

---

## 6. 功能请求与路线图信号

| 请求 | 已有 PR | 纳入可能性 |
|---|---|---|
| **QQ 渠道流式输出** [#3201](https://github.com/sipeed/picoclaw/issues/3201) | ❌ 无 | ⭐⭐⭐ 渠道一致性需求强烈，但需 QQ SDK 支持增量推送，建议下版本评估 |
| **WhatsApp 原生 typing 状态** [#3240](https://github.com/sipeed/picoclaw/issues/3240) | ✅ [#3242](https://github.com/sipeed/picoclaw/pull/3242) | ⭐⭐⭐⭐⭐ 改动局部、实现完备，**下版本高概率纳入** |
| **SimpleX 渠道支持** [#3193](https://github.com/sipeed/picoclaw/pull/3193) | ✅（即 PR 本身） | ⭐⭐⭐ 隐私导向渠道，社区关注度中等 |
| **安装脚本迁移至主仓** [#1951](https://github.com/sipeed/picoclaw/pull/1951) | ✅（即 PR 本身） | ⭐⭐⭐⭐ 基础设施改进，跨仓库依赖整合 |

**路线图信号：** 下一版本（推测 v0.3.x）很可能聚焦"**多渠道 UX 对齐 + 认证安全**"，#3241、#3242、#3246（MQTT 部分）具备合入候选资格。

---

## 7. 用户反馈摘要

由于所有 Issues 评论数 ≤ 3，可提炼的真实声音有限：

1. **配置迁移的"误报"体验**（[#3206](https://github.com/sipeed/picoclaw/issues/3206)）
   用户在 v0.2.9 新装环境即遭遇迁移失败，说明**配置校验与字段白名单的边界**对升级路径不够友好。建议在迁移器中增加"**宽容模式**"或更明确的错误指引。

2. **OAuth 多 provider 行为不一致**（[#3239](https://github.com/sipeed/picoclaw/issues/3239)）
   反映出用户在生产环境中对接多家 LLM 提供商（OpenAI、Google 等），对**通用认证层抽象的正确性**有较高期待；当前的"一刀切"实现已触及实际使用瓶颈。

3. **WhatsApp 长延迟缺乏反馈**（[#3240](https://github.com/sipeed/picoclaw/issues/3240)）
   用户场景为：消息发送后等待数秒无任何"对方正在输入"提示，体验割裂。这与 #3201 的 QQ 流式诉求属于同一类**交互反馈缺失痛点**。

> 综合判断：社区情绪偏中性，暂无明显不满爆发点，主要诉求集中在**多渠道一致性**与**认证鲁棒性**两条主线。

---

## 8. 待处理积压

⚠️ **重要警示：** 今日全部活跃条目均标记为 `[stale]`。以下为**长期未响应但具备较高价值的条目**，建议维护者优先审视：

| 序号 | 条目 | 类型 | 等待时长 | 价值评估 |
|---|---|---|---|---|
| 1 | [#1951 chore: move installation scripts from docs repo to here](https://github.com/sipeed/picoclaw/pull/1951) | PR (build 增强) | **~4 个月**（创建于 2026-03-24） | 🔴 长期搁置，跨仓整合类改动容易被遗忘 |
| 2 | [#3206 v2→v3 config migration fails](https://github.com/sipeed/picoclaw/issues/3206) | Issue（已关闭但需验证） | 创建于 2026-07-02 | 🟡 需确认修复版本与发布说明 |
| 3 | [#3193 Added simplex channel type](https://github.com/sipeed/picoclaw/pull/3193) | PR（新功能） | 创建于 2026-06-27，**~3 周** | 🟠 新渠道集成需要维护者设计评审 |
| 4 | [#3202 fix(routing): strip leading/trailing underscores in ID normalization](https://github.com/sipeed/picoclaw/pull/3202) | PR (Bug fix) | 创建于 2026-07-01 | 🟠 路由规范化 bug，影响 ID 解析一致性 |
| 5 | [#3201 Support streaming output for QQ channel](https://github.com/sipeed/picoclaw/issues/3201) | Issue（Feature） | 评论数最高 | 🟡 用户已主动讨论，需维护者明确表态 |

**对维护者的建议：**

1. 对 7 月份以来堆积的 10+ 待合并 PR 进行一次集中 triage，避免 stale 状态蔓延；
2. 优先解决 #3202（路由规范化）与 #3241（OAuth 并发安全），两者修复面小、风险低、价值高；
3. 对 #1951 给出明确决策（合并/关闭/拆分），防止长期悬置消耗贡献者意愿。

---

## 📊 项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ★★★☆☆ | 中等量级，但 stale 标记普遍 |
| 响应及时性 | ★★☆☆☆ | 多数 PR/Issue 长时间无维护者反馈 |
| 贡献者多样性 | ★★★★☆ | 当日有 6+ 不同贡献者，分布健康 |
| 代码质量信号 | ★★★★☆ | corporatepiyush 系列重构体现性能意识 |
| 社区讨论深度 | ★★★☆☆ | 评论数偏低，但议题针对性强 |

**总评：** PicoClaw 项目处于**稳定演进但需关注响应节奏**的阶段，代码与功能层面持续推进，但维护者的 triage 节奏存在改善空间。

---

*报告基于 GitHub 公开数据生成，所有链接指向 sipeed/picoclaw 仓库。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报
**日期：2026-07-18**

---

## 1. 今日速览

NanoClaw 过去 24 小时呈现**高强度修复密集型**特征：新增/活跃 Issues 3 条、PR 流入 12 条待合并，关闭 PR 3 条，关闭 Issue 1 条，无新版本发布。整体活动以 **agent-runner 路由与 session 解析重构**（mymac80 一人贡献 5 个 PR）以及 **iMessage 通道统一化**（两条 PR 并行推进）为主线。同时，1 条 CVE 级别的安全修复（GHSA-h9g4-589h-68xv）等待合并。社区健康度良好，问题响应及时，但 Open Issues 中包含 2 个无评论、0 赞的新 Issue，存在未被及时关注的隐患。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

### ✅ 已关闭/合并的 PR（3 条）

| PR | 标题 | 影响 |
|---|---|---|
| [#2952](https://github.com/nanocoai/nanoclaw/pull/2952) | Skill/add opencode stack | 新增 OpenCode 作为 AI 编码栈的 operational/container skill，扩展多模型适配生态 |
| [#2951](https://github.com/nanocoai/nanoclaw/pull/2951) | fix(opencode): dedicated OPENCODE_BASE_URL | 为 OpenCode 提供独立的 BASE_URL 配置，正确读取 `.env`，支持 NO_PROXY 透传 |
| [#3063](https://github.com/nanocoai/nanoclaw/pull/3063) | docs(changelog): drop duplicated Unreleased bullets | 清理 `CHANGELOG.md` 中因合并失误产生的重复条目（4 条 bullet 重复），属常规文档卫生 |

**进展评估**：本日净进展以 **OpenCode 接入链路打通**为主里程碑，配合 changelog 清理，文档与新栈集成同步推进。但涉及核心逻辑（agent-runner、session、security）的多项重要修复仍处于待合并状态。

---

## 4. 社区热点

### 🔥 高关注度讨论

1. **[#3065 - 安全漏洞修复：loopback webhook 鉴权缺失](https://github.com/nanocoai/nanoclaw/pull/3065)**
   - 修复 `src/channels/chat-sdk-bridge.ts` 中本地转发的网关 webhook 缺少身份验证（CWE-306）。任何同主机非特权进程都可伪造 action。
   - 对应 GHSA-h9g4-589h-68xv 安全公告。**这是今日最优先的合并项**。

2. **[#3072 - 技能文档跨 CLI 兼容性问题](https://github.com/nanocoai/nanoclaw/issues/3072)**
   - 文档统一使用 `/name` 风格（Claude Code 语法），但 Codex CLI 仅识别 `$name`，完全不识别 `/name`。
   - 该 Issue 揭示 NanoClaw 技能系统在多编码 harness 之间存在**调用语义割裂**。

3. **[#3071 - Discord 裸 URL 被字面化（已关闭）](https://github.com/nanocoai/nanoclaw/issues/3071)**
   - Discord 通道将 agent 输出的 `https://...` 渲染为字面量 `[url](url)`，不可点击。
   - 问题已关闭，推测已有静默修复或确认转交 SDK 侧。

### 核心开发者贡献集中度

mymac80 一人今日提交 5 个 PR（[#3078](https://github.com/nanocoai/nanoclaw/pull/3078)、[#3079](https://github.com/nanocoai/nanoclaw/pull/3079)、[#3080](https://github.com/nanocoai/nanoclaw/pull/3080)、[#3081](https://github.com/nanocoai/nanoclaw/pull/3081)、[#3082](https://github.com/nanocoai/nanoclaw/pull/3082)），均针对 agent-runner 路由、session 锚定、Matrix ESM 补丁、root 环境下测试隔离等关键路径。建议维护者关注**单点贡献者风险**。

---

## 5. Bug 与稳定性

### 🚨 高严重度

| 级别 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **P0** | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 长时间运行后静默日志丢失 + 入站消息重复插入错误，且**未安装 systemd unit** | ❌ 无 |
| **P1** | [#3074](https://github.com/nanocoai/nanoclaw/issues/3074) | 自定义 `ANTHROPIC_BASE_URL`（OpenRouter）下，`claude` provider 在 SDK 结果事件为空时**静默丢弃回合**（模型实际有有效回复） | ❌ 无（但 [#3077](https://github.com/nanocoai/nanoclaw/pull/3077) 修复了相邻的 rate_limit 处理） |
| **P1** | 安全：[#3065](https://github.com/nanocoai/nanoclaw/pull/3065) | loopback webhook 鉴权缺失（GHSA-h9g4-589h-68xv） | ✅ Fix PR 已就绪待合并 |

### 中严重度

| 级别 | PR | 描述 |
|---|---|---|
| **P2** | [#3078](https://github.com/nanocoai/nanoclaw/pull/3078) | agent-shared session 解析漂移 → 双会话分叉 |
| **P2** | [#3079](https://github.com/nanocoai/nanoclaw/pull/3079) | warm container mid-turn 接收 trigger=0 后台消息并主动回应 |
| **P2** | [#3081](https://github.com/nanocoai/nanoclaw/pull/3081) | 路由在 query 入口冻结，导致跨通道 follow-up 路由错位 |
| **P2** | [#3080](https://github.com/nanocoai/nanoclaw/pull/3080) | matrix-js-sdk ESM 修复通过修改 node_modules，**重装即丢失** |

### 已修复
- **P3** [#3082](https://github.com/nanocoai/nanoclaw/pull/3082) - root 用户运行 chmod 测试假阳性失败（LXC 容器场景）

**稳定性评估**：核心 agent-runner 子系统被识别出**至少 4 个相互关联的会话/路由缺陷**（#3078/#3079/#3081 + #3075），呈现"群集式"问题，应作为一个整体批次修复。

---

## 6. 功能请求与路线图信号

### 已成形的功能提案

| 提案 | PR | 状态 |
|---|---|---|
| **iMessage 通道统一化** | [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) & [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | ⚠️ **两条并行 PR，路径重叠**，需协调合并 |
| **Adoption Companion 技能包**（Memory Receipts + Knowledge Inventory） | [#3073](https://github.com/nanocoai/nanoclaw/pull/3073) | 待合并 |
| **跨 session 调度任务可见性** | [#3068](https://github.com/nanocoai/nanoclaw/pull/3068) | 待合并（解决 #2992） |
| **OpenCode 栈支持** | [#2952](https://github.com/nanocoai/nanoclaw/pull/2952) | ✅ 已合并 |

### 文档/治理类
- [#3066](https://github.com/nanocoai/nanoclaw/pull/3066) - SECURITY.md v2 准确度修正（解决 #2783 全部 5 项）

### 路线图观察

1. **iMessage 路线收敛**：本地 bridge + 托管后端统一为单一 `imessage` 通道（配 `/add-imessage` skill），方向清晰，但存在重复 PR（#2999 与 #3076），维护者需决定合并次序。
2. **多模型/多 CLI 兼容矩阵**：OpenCode 合并后，Claude Code + Codex + OpenCode 三栈并行，#3072 的 `/name` vs `$name` 文档语法问题将进一步放大，**技能调用抽象层**可能是下一个自然演化点。
3. **企业运维缺口**：#3075 指出无 systemd unit，反映出 fork/自部署用户对生产化部署的诉求。

---

## 7. 用户反馈摘要

来自活跃 Issue 与 PR 的真实痛点：

1. **多 CLI 生态碎片化**（[#3072](https://github.com/nanocoai/nanoclaw/issues/3072)）
   - 用户期望技能文档具备"一次编写，多 CLI 运行"的语义无关性。Codex 用户的 `$name` 调用被 `/name` 文档误导。

2. **OpenRouter 等代理后端可靠性**（[#3074](https://github.com/nanocoai/nanoclaw/issues/3074)）
   - 通过自定义 `ANTHROPIC_BASE_URL` 接入 OpenRouter 时，会话回合被静默丢弃——用户**完全感受不到失败**，这是最危险的一类故障。

3. **长时运行可靠性**（[#3075](https://github.com/nanocoai/nanoclaw/issues/3075)）
   - WSL2 + Docker Desktop + Matrix 本地 homeserver 部署用户反馈：长时间运行后日志丢失、消息重复插入。**没有 systemd unit** 意味着崩溃后无法自愈，用户被迫手工重启。

4. **Matrix SDK 安装脆弱性**（[#3080](https://github.com/nanocoai/nanoclaw/pull/3080)）
   - skill 步骤直接修改 `node_modules` 内文件——这是社区发现的"会反复回归"的脆弱实践，用户对此普遍不满。

5. **Discord 体验问题**（[#3071](https://github.com/nanocoai/nanoclaw/issues/3071)，已关闭）
   - 裸 URL 不可点击影响跨平台分发体验。

**整体满意度信号**：PR 描述中的细节深度（issue 编号引用、commit hash、env 详情）表明核心用户群体**高度技术化且参与度高**，这是 NanoClaw 社区的资产。

---

## 8. 待处理积压与维护提醒

### 🔴 紧急关注

| 项目 | 链接 | 原因 |
|---|---|---|
| 安全 PR 滞留 | [#3065](https://github.com/nanocoai/nanoclaw/pull/3065) | CVE 编号已分配（GHSA-h9g4-589h-68xv），延迟合并将延长漏洞公开窗口期 |
| 长时运行核心 bug | [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) | 静默日志丢失 + 无 systemd unit 影响所有自部署用户 |
| OpenRouter 静默失败 | [#3074](https://github.com/nanocoai/nanoclaw/issues/3074) | 用户无任何失败感知，是最严重的产品级缺陷 |

### 🟡 协调与去重

| 项目 | 链接 | 说明 |
|---|---|---|
| iMessage 重复 PR | [#2999](https://github.com/nanocoai/nanoclaw/pull/2999) vs [#3076](https://github.com/nanocoai/nanoclaw/pull/3076) | 两位贡献者（underthestars-zhy / invisicat）目标高度重叠，需维护者协调 |
| agent-runner 修复批次 | [#3078](https://github.com/nanocoai/nanoclaw/pull/3078) / [#3079](https://github.com/nanocoai/nanoclaw/pull/3079) / [#3081](https://github.com/nanocoai/nanoclaw/pull/3081) | 建议作为单一 PR 序列合并，避免引入中间回归 |

### 🟢 新 Issue 0 评论提醒

下列 Issue 创建至今 **0 评论、0 赞**，需维护者主动触达报告者确认细节：

- [#3075](https://github.com/nanocoai/nanoclaw/issues/3075) - Silent log loss
- [#3074](https://github.com/nanocoai/nanoclaw/issues/3074) - OpenRouter silent drop
- [#3072](https://github.com/nanocoai/nanoclaw/issues/3072) - Multi-CLI skill docs

---

## 附录：项目健康度评分（定性）

| 维度 | 评级 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 24h 内 19 个工单流转，强度高于均值 |
| **响应及时性** | ⭐⭐⭐⭐ | 多数问题当日有 PR 跟进，但 3 个新 Issue 0 评论 |
| **安全响应** | ⭐⭐⭐ | CVE 已分配 fix 待合并，需加速 |
| **贡献者多样性** | ⭐⭐ | mymac80 一日 5 PR，存在单点风险 |
| **路线图清晰度** | ⭐⭐⭐⭐ | iMessage、OpenCode、Adoption Companion 等方向明确 |

---

*报告生成基于 GitHub 公开数据，仅反映过去 24 小时的项目动态，不构成投资或采用建议。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报
**日期：2026-07-18**

---

## 1. 今日速览

NullClaw 今日整体活跃度处于**低位水平**：过去 24 小时内仅记录到 1 条 Issue 更新，无 PR 活动，无新版本发布。值得警惕的是，唯一活跃的 Issue 报告了一个**高严重度的稳定性缺陷**——在 aarch64 Linux 平台上，每一次接收 Telegram 入站消息都会触发 SIGSEGV 段错误，并导致 systemd 守护进程陷入 crash-loop。项目整体健康度因该关键 Bug 的存在而**承压**，社区响应节奏也需要提速。

---

## 2. 版本发布

无新版本发布，跳过本节。

> **背景信息**：用户报告的崩溃发生在 `v2026.5.29` 版本，距今已近两个月未见新版本迭代，发布节奏需要关注。

---

## 3. 项目进展

今日无任何 PR 合并或关闭，代码层面的推进为零。建议维护者主动响应 #976 中提出的栈溢出修复方案（如为入站 worker 线程显式设置更大栈空间，或通过编译选项调整默认栈大小），以尽快恢复项目的前进势头。

---

## 4. 社区热点

今日唯一讨论焦点为 **Issue #976**，相关链接：
- [#976 — SIGSEGV on every inbound Telegram message](https://github.com/nullclaw/nullclaw/issues/976)

- **作者**：wonhotoss
- **评论数**：2 条
- **👍 反应**：0

**讨论诉求分析**：用户不仅在报告 Bug，更间接指出了**生产环境可用性**层面的严重后果——由于 systemd `Restart=always` 配置，进程会反复崩溃重启、消息被静默丢弃，用户完全得不到回复，形成"静默失败"的恶劣体验。这反映出 aarch64 平台用户对该项目的实际部署依赖，社区需要认真对待。

---

## 5. Bug 与稳定性

### 🔴 P0 严重：入站消息触发 SIGSEGV（aarch64 Linux）

- **Issue**：[#976](https://github.com/nullclaw/nullclaw/issues/976)
- **影响范围**：`v2026.5.29` 全量 aarch64 用户
- **触发条件**：每一条 Telegram 入站消息
- **症状**：
  - 进程收到 SIGSEGV 信号后崩溃
  - systemd 自动重启后形成 crash-loop
  - 入站消息被**静默丢弃**，用户无感知
- **根因（用户推断）**：入站 worker 线程以约 512 KB 的栈空间启动，在 aarch64 上因栈帧或局部缓冲区需求超出该限制而溢出
- **是否有修复 PR**：❌ 暂无
- **建议优先级**：**立即修复**——这是阻塞 aarch64 平台 Telegram 集成的阻塞性缺陷

> **修复方向建议**：参考 [Issue 评论](https://github.com/nullclaw/nullclaw/issues/976) 中的讨论，可通过 `pthread_attr_setstacksize` 显式扩大线程栈，或在编译阶段使用 `-Wl,--stack` 调整默认栈大小，并补充相应的 aarch64 CI 验证。

---

## 6. 功能请求与路线图信号

今日未观察到明确的新功能请求 Issue 或 PR。但 #976 反映出**平台兼容性覆盖**可能需要纳入后续路线图：

- **信号 1**：aarch64 Linux 已成为生产部署目标平台，需补齐对应 CI 矩阵
- **信号 2**：当前 crash-loop + 静默丢消息的组合暴露出**可观测性不足**，未来可能需要更友好的错误上报与重试机制
- **建议**：维护者可在下次发布说明中明确 aarch64 支持矩阵与最小栈大小要求

---

## 7. 用户反馈摘要

从 Issue #976 的评论与描述中可提炼出以下真实用户痛点：

| 维度 | 用户反馈 |
|------|---------|
| **部署平台** | 生产环境采用 aarch64 Linux + systemd，是严肃的服务器部署场景 |
| **故障感知** | 用户"never gets a reply"，故障完全静默，无任何告警或日志提示 |
| **核心诉求** | 期望项目对生产部署具备基本的健壮性，至少不应在每条消息上都崩溃 |
| **使用场景** | Telegram 作为入站消息通道，长期运行服务（暗示 7×24 部署） |
| **满意度** | 明显不满——已严重影响使用，且至今未见维护者正式回应 |

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 状态 | 风险 |
|------|------|------|------|------|
| 🔴 紧急 Bug | [#976](https://github.com/nullclaw/nullclaw/issues/976) | SIGSEGV on every inbound Telegram message | OPEN，无维护者响应 | 阻塞 aarch64 平台全部用户 |
| ⚠️ 发布节奏 | — | 已近 2 个月未发布新版本 | — | 用户仍在使用 `v2026.5.29` 旧版本，问题积压 |

**维护者关注建议**：
1. 优先回复 #976，确认问题复现并给出修复时间表
2. 考虑发布 `v2026.7.x` 补丁版本，专门修复该回归
3. 将 aarch64 加入 CI 矩阵，避免类似平台特定问题再次遗漏

---

## 📊 项目健康度评分（参考）

| 维度 | 评分 | 说明 |
|------|------|------|
| 社区活跃度 | ⭐⭐☆☆☆ | 24h 内仅 1 Issue 互动 |
| 稳定性 | ⭐☆☆☆☆ | 存在 P0 级未修复崩溃 |
| 响应速度 | ⭐⭐☆☆☆ | 关键 Issue 暂无维护者回应 |
| 发布节奏 | ⭐⭐☆☆☆ | 近 2 个月无新版本 |
| **综合** | **⚠️ 需关注** | 建议尽快处理 #976 |

---

*报告生成时间：2026-07-18 | 数据来源：GitHub API*
*项目地址：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**日期：2026-07-18**
**数据来源：github.com/nearai/ironclaw**

---

## 1. 今日速览

IronClaw 仓库今日保持着极高的开发活跃度，过去 24 小时内 Issues 与 PRs 各有 50 条更新，Issue 闭合率约 48%（24/50）、PR 合并/关闭率约 50%（25/50），整体节奏健康且具备较强的自净能力。**Reborn 架构简化（§4.3 存储整合 + §4.4 部署模式重命名）** 是今日绝对的开发主线，由核心贡献者 `ilblackdragon` 主导了 6+ 个相关 PR。Engine V2 的工具 schema 拆分（#2767 Epic）与 CodeAct 提示工程系列（#2834/#2835/#2836/#2837/#2838）也集中收尾闭合。风险面仍包括一组 Engine V2 已知的 Gateway UI 渲染 Bug 与对话上下文可能无界增长（#4278）等需关注项。整体而言项目处于 **v1 正式版前的密集整合期**，重构类 PR 占主导，没有新版本发布。

---

## 2. 版本发布

**今日无新版本发布**。但有一项关键的发布候选 PR 长期处于 open 状态，标注内容如下：

- **PR #5598** — `chore: release`（作者：`ironclaw-ci[bot]`，2026-07-03 创建，OPEN）
  - 计划版本：`ironclaw_common` **0.4.2 → 0.5.0（⚠ API breaking）**
  - 计划版本：`ironclaw_safety` 0.2.2 → 0.2.3
  - 计划版本：`ironclaw_skills` **0.3.0 → 0.4.0（⚠ API breaking）**
  - 计划版本：`ironclaw` 0.24.0 → 0.29.1
  - **迁移注意**：`ironclaw_common` 与 `ironclaw_skills` 均引入 break，建议下游 crate 关注 `failure` 列字段变更。
  - [→ PR 链接](https://github.com/nearai/ironclaw/pull/5598)

> 维护者建议评估：是否在合并 #6201（crate 级 `ironclaw_reborn_*` → `ironclaw_*` 重命名）后再切此版本，以避免二次破坏性变更叠加。

---

## 3. 项目进展

### 3.1 Reborn 架构简化 — 存储整合 §4.3（Outbound / Budget / Triggered / Gate 四件套）

这是今日合并/关闭中影响最大的一组 PR，连续推进 Outbound 体系下多个 `InMemory*Store` 的下线、迁入统一的 `FilesystemOutboundStateStore` 路径：

| PR | 标题 | 状态 | 链接 |
|---|---|---|---|
| #6212 | refactor(reborn): outbound-state store over RootFilesystem, delete InMemoryOutboundStateStore (§4.3) | OPEN | [链接](https://github.com/nearai/ironclaw/pull/6212) |
| #6213 | refactor(reborn): triggered-run-delivery store over RootFilesystem, delete InMemoryTriggeredRunDeliveryStore (§4.3) | OPEN | [链接](https://github.com/nearai/ironclaw/pull/6213) |
| #6214 | refactor(reborn): delivered-gate-route store over RootFilesystem, delete InMemoryDeliveredGateRouteStore (§4.3) | OPEN | [链接](https://github.com/nearai/ironclaw/pull/6214) |
| #6210 | refactor(reborn): budget-gate store over RootFilesystem, delete InMemoryBudgetGateStore (§4.3) | ✅ CLOSED | [链接](https://github.com/nearai/ironclaw/pull/6210) |

> 含义：`Outbound` 系列存储在 §4.3 计划中仅剩一项（"shrink to empty" ratchet, #6216）即将宣告完成，这是 Reborn 在 1.0 前的关键基础设施清理之一。

### 3.2 §4.4 部署模式命名清理（de-Local 化）

紧随 §4.3，团队启动 `LocalDev` / `Local` / `Hosted` / `Enterprise` 等部署模式前缀的清除：

- ✅ **PR #6209** [CLOSED] — `LocalFilesystem` → `DiskFilesystem`（Bucket 2）
- ✅ **PR #6219** [CLOSED] — 收尾 `telegram_extension` 测试代码中遗漏的 5 处 `LocalFilesystem` 引用
- 🟡 **PR #6218** [OPEN] — 消除 `LocalDevRootFilesystem` 冗余 alias → `CompositeRootFilesystem`
- 🟡 **PR #6220** [OPEN] — `LocalDevOutboundStores` → `OutboundStores`
- 🟡 **PR #6222** [OPEN] — `Hosted*/Enterprise*/Local*` 部署模式 typename ratchet 测试

含义：文档明文要求 *"任何公开类型名不得包含 `Local`/`LocalDev`/`Hosted`/`Enterprise`"*，目前正以一系列机械式重命名 + ratchet 测试强制收敛。

### 3.3 Engine V2 工具提示与能力背景拆分

驱动 `#2767 Epic` 落地的多个子任务今日集中收尾：

- ✅ **#2767** Epic 关闭
- ✅ **#2813** engine-v2 typed assistant content model for final vs internal tool-use text
- ✅ **#2834** Engine v2: compact tool-use action cards and discovery-guided prompting
- ✅ **#2835** Tool discovery: curated summaries for core built-ins
- ✅ **#2836** ActionDef + prompt hints + bridge discovery metadata
- ✅ **#2837** CodeAct: render compact action cards
- ✅ **#2838** Regression coverage for prompt guidance

同时：
- ✅ **#2350** 关闭：step-0 selector (AnswerOnly / DirectActions / CodeAct)
- ✅ **#2838** 关闭：覆盖度补充
- ✅ **#2669** 关闭：engine-v2 review follow-ups 追踪问题

含义：v2 与 Claude Code 工具使用体验对齐工作基本完成下一里程碑的"提示渲染层"铺垫。

### 3.4 Channel / Telegram / 渠道集成

- ✅ **PR #6159** [CLOSED] — Reborn Telegram 频道扩展（admin bot, WebGeneratedCode pairing, DM 入口，[视频](https://github.com/user-attachments/assets/7e575c99-61f9-4731-88e4-6d68a22d5a40)）
- ✅ **PR #6217** [CLOSED] — Docker 生产镜像编译 Telegram host（修复遗漏 feature）
- 🟡 **Issue #5124** OPEN — Telegram 渠道追踪（[链接](https://github.com/nearai/ironclaw/issues/5124)）

含义：Telegram 从"支持目标"走向"生产可发"的最后两步落地。

### 3.5 CLI / 发布前 UX

- 🟡 **PR #6185** [OPEN,scope 跨度极广] — `ironclaw-reborn` → `ironclaw` CLI 提级，`legacy ironclaw` → `ironclaw-v1`
- 🟡 **PR #6211** [OPEN] — 禁用 CLI 中 channels/hooks/logs 假成功 stub
- 🟡 **PR #6174** [OPEN] — 引导流程（keychain 主密钥 + 两段式 prompt + 登录链接）
- ✅ **Issue #6201** OPEN — 后续 crate 级 `ironclaw_reborn_* → ironclaw_*` 重命名 roadmap

### 3.6 文档 / 其他

- ✅ **PR #6208** [CLOSED] — `docs/reborn/architecture-simplification` 修订 r2-r7（capability conduits / dyn-capability gate / 编辑去重）
- ✅ **Issue #6198** [OPEN] — Pre-v1 重构 & legacy 清算 Epic（[链接](https://github.com/nearai/ironclaw/issues/6198)）

**整体评估**：今日合并/关闭推动了 Reborn 1.0 路线图约 **3-4 周的有效工作量**——主要集中在存储层合并与命名清理两件"出清"性质的工作上，Feature 增量以 Engine V2 提示渲染收尾为主。

---

## 4. 社区热点

按评论数 + 触达面排名：

| 排名 | Issue / PR | 评论数 | 关注点 |
|---|---|---|---|
| 1 | [#2767 Epic: Separate engine v2 capability background](https://github.com/nearai/ironclaw/issues/2767) | 7 | v2 工具能力"可调用"与"后台背景"语义拆分 |
| 2 | [#2813 typed assistant content model](https://github.com/nearai/ironclaw/issues/2813) | 6 | final vs internal tool-use 文本扁平化问题 |
| 3 | [#2835 curated summaries for core built-ins](https://github.com/nearai/ironclaw/issues/2835) | 3 | 工具发现摘要质量 |
| 4 | [#6170 Remove user access to file system via shell](https://github.com/nearai/ironclaw/issues/6170) | 2 | **多租户实例安全漏洞** — WebUI 允许 shell 越权访问文件系统 |
| 5 | [#4644 Universal attachments across all channels](https://github.com/nearai/ironclaw/issues/4644) | 2 | Reborn 不丢附件 + 统一格式注册表 |
| 6 | [#5331 Tool-approval 'always' auto-approve](https://github.com/nearai/ironclaw/issues/5331) | 2 | "always" 选项可能未自动授权下一次同工具调用 |
| 7 | [#2834 Engine v2 compact action cards](https://github.com/nearai/ironclaw/issues/2834) | 2 | 工具使用提示对齐 Claude Code |
| 8 | [#3577 Track v1 ports for legacy channels](https://github.com/nearai/ironclaw/issues/3577) | 1 | 渠道迁移到 Reborn 的进度跟踪 |

**诉求分析**：
1. **#2767 系列（最高热度）**：社区对 Engine V2 工具能力"显式可调用 vs 后台存在"的语义边界表达出强烈关切——这是用户体验与安全审查的关键分层。
2. **#6170**：潜伏的安全问题被用户明确披露（多租户 `ls -all` 无限制），具有较高的合规优先级。
3. **#4644 / #3577**：跨渠道体验统一性，是 Reborn 取代 v1 的"卖点级"诉求。

---

## 5. Bug 与稳定性

### 🔴 高优先级

| ID | 标题 | 状态 | 是否有 fix | 链接 |
|---|---|---|---|---|
| **#6170** | 多租户可通过 WebUI shell 命令越权访问文件系统（`ls -all` 不受 workspace 限制） | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/6170) |
| **#4278** | Engine V2 对话上下文无界增长导致上下文窗口耗尽 | OPEN | 无（讨论中） | [链接](https://github.com/nearai/ironclaw/issues/4278) |

### 🟡 中等优先级

| ID | 标题 | 状态 | 是否有 fix | 链接 |
|---|---|---|---|---|
| **#5331** | "Always" 工具审批可能未自动批准下一次同工具调用 | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/5331) |
| **#3463** | Engine V2 生成的图片未在 Gateway UI 渲染为图片卡片 | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/3463) |
| **#3464** | Engine V2 工具调用失败在 Gateway UI 渲染不一致 | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/3464) |
| **#3465** | Engine V2 反复调用 `tool_info(schema)` | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/3465) |
| **#3618** | Debug 面板 Stats 在 engine v2 持续为 0 | OPEN | 无 | [链接](https://github.com/nearai/ironclaw/issues/3618) |
| **#6215** | 回归 — LLM reload chokepoint 后未重建模型成本表/预算会计 | OPEN | 关联 #6174 | [链接](https://github.com/nearai/ironclaw/issues/6215) |

### 🟢 已修复/已闭环（今日成果）

- **#2716** [CLOSED] Engine v2 丢 `chat_tool_execution_metadata` —— v1 message/job/abound_send_wire 工具现已恢复。
- **#4822** [CLOSED] Engine V2 LLM 使用量已纳入 `/api/admin/usage`。
- **#5657** [CLOSED] v1-only crate 覆盖率豁免明确化。
- **PR #6217** [CLOSED] Docker 生产镜像编译 Telegram host。

**维护者关注建议**：#6170（多租户安全）应作为今日最高优先级响应；#4278（对话上下文无界增长）需要明确处理策略。

---

## 6. 功能请求与路线图信号

| 诉求 | 现有追踪 Issue | 关联 PR 进展 | 进入下一版本的概率评估 |
|---|---|---|---|
| Reborn 全渠道附件统一 | #4644 | 无落地 PR | ⭐⭐⭐（已标注 P1） |
| Telegram 渠道支持 | #5124 | #6159 已合并；#6217 修 Docker 编译 | ⭐⭐⭐⭐（实装路径明确） |
| 上下文预算代理（context budget broker） | #2399 [CLOSED] — 设计稿 | 暂未合并实现 | ⭐⭐ |
| 通用 dev / admin / usage 接口支持 v2 | #4822 [CLOSED 今日] | 已合并 | ✅ 已纳入 |
| Legacy v1 渠道分阶段迁至 Reborn | #3577 | 无新 PR | ⭐⭐ |
| Engine V2 沙箱化整体闭环 | #2667 | 仅文档层 | ⭐⭐ |
| 模型成本表 / 预算会计（Reborn 重建） | #6215 | 与 #6174 boot chokepoint 相关 | ⭐⭐⭐ |

**判断**：下一版本最可能纳入的特性是"Telegram + CLI onboarding + 出清的 Reborn Outbound 存储"，形成 1.0 的最小可用骨架。

---

## 7. 用户反馈摘要

- **多租户环境安全担忧**（#6170）：来自 `sergeiest`，反映 WebUI shell 接口在多租户场景下缺乏 workspace 边界——这是从部署方角度提出的、需求端合理的安全建议。
- **Engine V2

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-07-18

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub 仓库过去 24 小时动态

---

## 1. 今日速览

LobsterAI 今日维持**高强度迭代节奏**：合并/关闭 PR 共 13 条，Issues 清理 5 条（多为 stale 旧 issue 自动归档），同时为即将到来的 **2026.7.17 发布版**做最后整合。亮点是面向用户体验的 **AI 自动生成主题皮肤（Skin Pack）能力**正式合入，以及 Cowork 错误展示增加结构化诊断详情。仓库活跃度评估：**高（Healthy）**，且具备清晰的版本节奏与跨模块（renderer / main / cowork / openclaw / artifacts / skills）协同改进能力。

---

## 2. 版本发布

### 2026.7.16（已发布）
[Release 2026.7.16](https://github.com/netease-youdao/LobsterAI/releases)

本次版本主要包含：
- **重构 (cowork)**：将剪贴板附件文件提取逻辑抽取为可测试辅助函数（[#2343](https://github.com/netease-youdao/LobsterAI/pull/2343) by @fisherdaddy）
- **新增功能**：Campaign 最终奖励领取特性（commit [6eafb](https://github.com/netease-youdao/LobsterAI/commit/6eafb) by @Mind-Hand）

⚠️ **下一版本预告**：合并中的 [Release/2026.7.17 #2356](https://github.com/netease-youdao/LobsterAI/pull/2356) 已就绪，预计今日或明日发布，将涵盖本日报"项目进展"中提到的所有合入 PR。无破坏性变更信号。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| 方向 | PR | 说明 |
|---|---|---|
| 🎨 **外观体验** | [#2352](https://github.com/netease-youdao/LobsterAI/pull/2352) | **AI 生成主题皮肤**（Skin Pack）工作流 + 完整生命周期管理（应用/恢复/重应用/删除），覆盖侧边栏、标题栏、对话页沉浸式呈现——属于重大 UX 升级 |
| 🪟 **Windows UI** | [#2355](https://github.com/netease-youdao/LobsterAI/pull/2355), [#2351](https://github.com/netease-youdao/LobsterAI/pull/2351) | 标题栏按钮 hover 颜色与原生 Windows 控件对齐 |
| 📦 **Artifact 面板** | [#2357](https://github.com/netease-youdao/LobsterAI/pull/2357) | 预览面板与输入区布局稳定化（拖拽柄稳定 key + 高度同步） |
| 🧰 **Cowork 错误处理** | [#2348](https://github.com/netease-youdao/LobsterAI/pull/2348) | 失败运行新增 `CoworkErrorDetail` 结构（provider / model / http code / failover 原因），便于展开技术细节 |
| 🦾 **OpenClaw 稳定性** | [#2354](https://github.com/netease-youdao/LobsterAI/pull/2354) | 忽略延迟最终成功后的过期 chat 报错 |
| 💾 **服务部署** | [#2349](https://github.com/netease-youdao/LobsterAI/pull/2349) | 2026.7.6 服务部署数据持久化 |
| 🧱 **构建** | [#2345](https://github.com/netease-youdao/LobsterAI/pull/2345) | NSIS web 安装包多语言提示本地化 + 进度条重叠修复 |
| 🔄 **更新机制** | [#2347](https://github.com/netease-youdao/LobsterAI/pull/2347) | 自动检查更新间隔由 12h 缩短至 **2h** |
| ✉️ **Cowork 邮件** | [#2346](https://github.com/netease-youdao/LobsterAI/pull/2346) | 邮件诊断默认在新会话中打开，避免历史污染 |
| 🧹 **侧边栏** | [#2350](https://github.com/netease-youdao/LobsterAI/pull/2350) | 侧边栏广告位样式优化 |
| 🧩 **UI 主线** | [#2353](https://github.com/netease-youdao/LobsterAI/pull/2353) | 主界面 UI 更新 |

**整体进度评估**：今日合入偏向**打磨与稳定性**，配合重大新能力（AI Skin）落地，LobsterAI 已从"功能可用"阶段进入"体验与生态化"阶段。

---

## 4. 社区热点

按评论数与互动量排序：

| 主题 | Issue / PR | 评论 | 分析 |
|---|---|---|---|
| 启动 Pageant 致蓝屏 | [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) | 3 | **真实崩溃类**问题，附完整日志，但 issue 已被标 stale 关闭，潜在稳定性风险被掩盖 |
| Agent 重名未校验 | [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360) | 2 | 用户创建同名 agent 时无提示，反映**数据完整性**短板 |
| 删除任务重启后重现 | [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | 2 | 任务删除未真正落库，属于**持久化层 bug**，影响用户信任 |
| Pageant"已启动"误报 | [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) | 2 | Agent 报告与系统实际状态不一致——典型的"agent 幻觉 / 系统接口未回执"问题 |
| 定时任务无交互反馈 | [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358) | 2 | 触发后无任何 UI 反馈，**可观测性**不足 |
| 表格长文本截断体验 | [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) | 1 | 诉求清晰：换行 + hover 展示全文，跨数据/报告场景 |
| 侧边栏宽度可拖拽 | [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) / [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | 1 | **已存在 PR** 配套，但 PR 仍为 open 状态（见"待处理积压"） |

> 🔥 共同诉求集中在三个方向：**Agent 行为可信度**、**任务/状态可观测性**、**界面布局灵活性**。

---

## 5. Bug 与稳定性

按严重度排列：

| 等级 | 问题 | Issue | 是否有 fix PR |
|---|---|---|---|
| 🔴 **严重（崩溃）** | 启动 Pageant 后系统蓝屏 | [#1354](https://github.com/netease-youdao/LobsterAI/issues/1354) | ❌ 无（已被标 stale 关闭） |
| 🟠 **严重（数据/状态）** | 删除的任务重启后重现 | [#1359](https://github.com/netease-youdao/LobsterAI/issues/1359) | ❌ 无 |
| 🟡 **中（误报）** | Pageant 启动"已启动"但实际未启动 | [#1357](https://github.com/netease-youdao/LobsterAI/issues/1357) | ❌ 无 |
| 🟡 **中（可观测性）** | 定时任务点击无交互反馈 | [#1358](https://github.com/netease-youdao/LobsterAI/issues/1358) | ❌ 无 |
| 🟢 **轻（数据完整性）** | Agent 自定义创建未做重名校验 | [#1360](https://github.com/netease-youdao/LobsterAI/issues/1360) | ❌ 无 |

> ⚠️ **风险信号**：所有被关闭的 issue 都被标记 `[stale]`，疑似机器人策略自动归档，**潜在稳定性风险未被实质性跟进**，建议维护者复盘并补充 root-cause 修复。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 已有 PR？ | 纳入下一版本的概率 |
|---|---|---|---|
| 表格换行 + hover 全文 | [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) | ❌ | 中（属于低成本 UX 改善） |
| 侧边栏宽度可拖拽（180~480px） | [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) | ✅ [PR #1315](https://github.com/netease-youdao/LobsterAI/pull/1315)（open） | **高** |
| 首页输入草稿按 agent 隔离 | — | ✅ [PR #1308](https://github.com/netease-youdao/LobsterAI/pull/1308)（open） | 中 |

**路线图洞察**：
- **AI 主题皮肤（#2352）**已经合入，预告 LobsterAI 正从"功能工具"转向"个性化助手平台"。
- **结构化错误展示（#2348）** 与 **更新频率提升（#2347）** 表明团队对"产品信任度"建设进入快车道。
- 长期 open 的 #1308、#1315 应纳入 2026.7.18 或 2026.7.19 周期。

---

## 7. 用户反馈摘要

从近 24 小时活跃 issue 评论中提炼：

- 😡 **痛点**：用户对"Agent 说自己做了，但其实没做"高度敏感（#1357、#1359 体现）——表明 AI Agent 在执行层需要**真实回执 + 状态确认**而非自然语言模拟。
- 😟 **痛点**：蓝屏等系统级问题（#1354）严重损伤用户安全感，且无后续跟进令人失望。
- 😊 **诉求**：布局自定义（#1314、#1311）反映用户开始把它当作"日常工具"使用，而非简单试用。
- 🧐 **观察**：当前 issue 多来自 4 月初（stale 批量关闭），近一周新增 issue 极少，**可能意味着**：① 客户端版本稳定性提升后真实故障减少；② 用户遇到问题倾向于在内部渠道反馈。建议团队**主动披露稳定性指标**或建立外部 Beta 通道以持续收集信号。

---

## 8. 待处理积压

> 🔔 以下项目均为 **2026-04-02 创建、至今 OPEN、跨 3 个多月未推进**，已出现 [stale] 标签，建议维护者介入：

| 类型 | 编号 | 标题 | 链接 |
|---|---|---|---|
| Issue | [#1311](https://github.com/netease-youdao/LobsterAI/issues/1311) | 表格内容换行 + 长文本 hover | [链接](https://github.com/netease-youdao/LobsterAI/issues/1311) |
| Issue | [#1314](https://github.com/netease-youdao/LobsterAI/issues/1314) | 侧边栏可拖拽宽度 | [链接](https://github.com/netease-youdao/LobsterAI/issues/1314) |
| PR | [#1308](https://github.com/netease-youdao/LobsterAI/pull/1308) | feat(cowork): isolate home-screen input draft per agent | [链接](https://github.com/netease-youdao/LobsterAI/pull/1308) |
| PR | [#1315](https://github.com/netease-youdao/LobsterAI/pull/1315) | 功能增强：支持拖拽调整侧边栏宽度（关联 #1314） | [链接](https://github.com/netease-youdao/LobsterAI/pull/1315) |

**风险**：长期 open 的 PR 会显著降低外部贡献者的提交意愿，且容易与主分支冲突。建议在 2026.7.18 周期集中 review 这两个 PR（改动量小、需求明确、影响面积极正面）。

---

### 📊 健康度卡片

| 指标 | 数值 |
|---|---|
| 今日合并/关闭 PR | 13 |
| 待合并 PR | 2（均为 4 月旧 PR） |
| 新开/活跃 Issue | 2（均为 stale 旧 issue） |
| 已关闭 Issue | 5（全部为 stale 自动关闭） |
| 新版本 | 1（2026.7.16，2026.7.17 准备中） |
| 跨模块改动 | renderer / main / cowork / openclaw / artifacts / skills / docs |
| 活跃度评级 | 🟢 **High & Healthy** |
| 风险点 | 长期 open PR 积压 + stale 关闭可能掩盖真问题 |

---

*报告生成时间：2026-07-18 · 数据范围：过去 24 小时*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-07-18

> 数据来源：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis) ｜ 统计周期：2026-07-17 ~ 2026-07-18 (UTC)

---

## 1. 今日速览

Moltis 项目过去 24 小时处于**低活跃度维护期**：仅 1 条 Issue 被更新、2 条新 PR 提交、2 个版本发布，无合并或关闭事件。社区层面有 1 个长期 Issue（#574，Model Routing Per topic）被作者重新激活讨论。整体来看，项目在保持日常发版节奏的同时，核心代码合入处于短暂空窗期，**健康度评估：稳定偏静默**。

- 活跃 Issue：**1**｜活跃 PR：**2**（均待合并）
- 版本发布：**2 个**（20260717.03、20260717.02）
- 无关闭/合并事件

---

## 2. 版本发布

过去 24 小时内发布了 2 个新版本标签，但**当前数据源未提供 Release Notes 详细内容**，无法对功能变更、破坏性变更或迁移注意事项做精确解读。建议维护者在每个版本标签下补充 changelog，以便用户评估升级风险。

| 版本 | 发布日期 | 链接 |
|---|---|---|
| 20260717.03 | 2026-07-17 | [查看](https://github.com/moltis-org/moltis/releases/tag/20260717.03) |
| 20260717.02 | 2026-07-17 | [查看](https://github.com/moltis-org/moltis/releases/tag/20260717.02) |

> ⚠️ 版本号采用日期式命名（YYYYMMDD.NN），表明项目当前处于高频迭代节奏，**已接近每日发版**。这种节奏有利于快速反馈，但也要求用户更频繁跟踪变更。

---

## 3. 项目进展

**今日无 PR 合并、无 Issue 关闭**，进度层面无实质推进。以下是当前处于待合并状态的 2 条 PR：

### PR #1157 — `fix(web): support ACP-only chat setup` 🔧
- 作者：[penso](https://github.com/penso)｜创建/更新：2026-07-17
- 链接：[PR #1157](https://github.com/moltis-org/moltis/pull/1157)
- 内容：在 LLM onboarding 流程中展示已安装的 ACP agents，将 ACP-only 配置视为合法状态而非报错；过滤会话头部 picker 仅为支持 ACP 的外部 agents；当未配置 LLM 模型时自动选择已安装的 ACP agent；同时在 ACP agent 激活时禁用底部模型选择器。
- **意义**：这是面向 ACP（Agent Client Protocol）生态集成的可用性修复，让仅使用 ACP agents 的用户也能顺利完成初始配置，避免了 onboarding 阶段的硬阻塞。

### PR #1158 — `feat(memory): add zvec vector database memory backend` 🧪
- 作者：[demyanrogozhin](https://github.com/demyanrogozhin)｜创建/更新：2026-07-17
- 链接：[PR #1158](https://github.com/moltis-org/moltis/pull/1158)
- 内容：作者以"实验性 vibe-coded"方式新增基于 Zvec + redb 的 memory 后端，配合独立部署的 llama-cpp embedding 服务使用；通过 `zvec` cargo feature 开关控制（`full` 中默认启用）。
- **意义**：为 Moltis memory 系统引入第二向量库选项，**降低单一后端依赖风险**；但因属实验性实现，需维护者重点 review 稳定性与 feature flag 默认值的合理性。

---

## 4. 社区热点

### Issue #574 — `[Feature] Model Routing Per topic`
- 作者：[azharkov78](https://github.com/azharkov78)｜创建：2026-04-06｜最近更新：2026-07-18
- 评论：**3 条**｜👍：**1 个**
- 链接：[Issue #574](https://github.com/moltis-org/moltis/issues/574)
- 标签：`enhancement`, `feature`
- **诉求分析**：用户希望按"主题/话题"维度配置不同的模型路由策略（即根据对话主题自动选用不同 LLM）。这是企业/高级用户常见诉求：**用小模型处理闲聊、用大模型处理代码或分析任务**，从而在成本与质量间取得平衡。今日该 Issue 被重新激活，可能预示讨论即将升温，建议维护者明确表态是否纳入路线图。

---

## 5. Bug 与稳定性

仅 1 条与稳定性相关的 PR（已在上节列出），**无新崩溃/回归报告**：

| 严重度 | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| 中 | ACP-only 配置在 onboarding 阶段被错误判定为非法 | [#1157](https://github.com/moltis-org/moltis/pull/1157) | 待合并 |
| 低（实验性） | zvec 后端尚未经过充分稳定性验证 | [#1158](https://github.com/moltis-org/moltis/pull/1158) | 待合并 |

**评估**：当前没有未修复的严重崩溃或回归问题，**项目稳定性处于良好状态**。

---

## 6. 功能请求与路线图信号

### 高优先级信号：模型路由（Issue #574）
- 链接：[Issue #574](https://github.com/moltis-org/moltis/issues/574)
- 用户明确表达希望**按 topic 路由不同模型**，附 preflight checklist 合规度高（已检索重复 Issue、提供会话上下文）。
- **路线图判断**：该需求与当前 ACP 生态扩张趋势契合，**有较高概率被纳入下一季度路线图**；建议维护者评估工作量并给出明确反馈，避免该 Issue 长期空挂。

### 实验性方向：多向量库 Memory 后端
- 链接：[PR #1158](https://github.com/moltis-org/moltis/pull/1158)
- 引入 Zvec 作为 Memory 后端之一。若合并，将使 Moltis 在 memory 存储层具备更好的可替换性，**对长期架构健康度有正面意义**。

---

## 7. 用户反馈摘要

由于今日仅 Issue #574 有活跃评论，且数据中未抓取评论正文，可提炼的反馈信号有限：

- **痛点**：用户在多场景（成本敏感 vs 质量敏感）下需要灵活切换模型，**当前 Moltis 缺乏细粒度路由能力**。
- **使用场景**：高级用户期望针对不同任务主题使用不同模型，与企业级 RAG/Agent 部署模式高度吻合。
- **社区态度**：👍 1 个反应 + 3 条评论表明该需求得到一定范围共鸣，但样本量较小，**代表性有限**。

> 📌 建议：维护者若希望获得更多反馈，可在 Issue 中发起结构化投票或 RFC 流程。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建日期 | 持续时间 | 备注 |
|---|---|---|---|---|---|
| Issue | [#574](https://github.com/moltis-org/moltis/issues/574) | Model Routing Per topic | 2026-04-06 | **~3 个月** | 长期未获维护者正式响应，今日重新激活，建议维护者优先回应 |
| PR | [#1157](https://github.com/moltis-org/moltis/pull/1157) | fix(web): support ACP-only chat setup | 2026-07-17 | 1 天 | 新提交，等待 review |
| PR | [#1158](https://github.com/moltis-org/moltis/pull/1158) | feat(memory): add zvec vector database memory backend | 2026-07-17 | 1 天 | 新提交，实验性代码，需重点 review |

**维护者关注建议**：
1. 对 Issue #574 给出明确的"是否会做/何时做"反馈；
2. 优先 review PR #1157（修复类，影响 onboarding 可用性）；
3. PR #1158 建议增加测试用例与 feature flag 默认值讨论。

---

## 附录：关键链接汇总

- 项目主页：[github.com/moltis-org/moltis](https://github.com/moltis-org/moltis)
- Issue #574：[Model Routing Per topic](https://github.com/moltis-org/moltis/issues/574)
- PR #1157：[fix(web): support ACP-only chat setup](https://github.com/moltis-org/moltis/pull/1157)
- PR #1158：[feat(memory): add zvec vector database memory backend](https://github.com/moltis-org/moltis/pull/1158)

---

*报告生成时间：2026-07-18｜分析方法：基于 GitHub 公开数据的事件统计与语义分析*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw (QwenPaw) 项目动态日报
**日期：2026-07-18**

---

## 1. 今日速览

CoPaw（仓库名 QwenPaw，由 agentscope-ai 维护）过去 24 小时保持**高活跃度**：25 条 Issue 更新（15 条新开/活跃、10 条已关闭）、40 条 PR 更新（17 条待合并、23 条已合并或关闭），并发布 `v2.0.0.post3` 后修复版本。整体工作重心集中在 **Windows Desktop 应用稳定性**、**Tauri 后端优雅停机**、**MCP / 多 Agent 启动性能**、**记忆与 Channel 系统重构**四大方向；社区反馈以"1.x 升级 2.0 后遗症"和"Windows 权限/UAC 行为变化"为主线，多个 Issue 已通过 PR 在 24 小时内闭环，反映项目响应速度良好。

---

## 2. 版本发布

### 🚢 v2.0.0.post3（Post Release）
- **发布时间**：2026-07-17
- **类型**：Post（修复版，非功能新增）
- **关键改动**：
  - `fix(mcp)`：将 MCP 驱动迁移过程中的 `${VAR}` 占位符 header 转换为 env credential 引用（[#6091](https://github.com/agentscope-ai/QwenPaw/pull/6091) by @xiaoming-qxm）
  - `refactor(ci)`：加固 Desktop 工作流，移除遗留 verify dead code（by @yutai78786）
- **破坏性变更**：无。Post 版本定位为兼容修复。
- **迁移注意事项**：无需手动操作，建议通过 pip/Desktop 自更新通道直接升级。当前 `v2.0.0.post2` 用户在升级后应观察是否仍存在 [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161)、[#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) 描述的 UAC 强制提权问题。
- **关联验证任务**：[#6223](https://github.com/agentscope-ai/QwenPaw/issues/6223) 已生成 Release Duty 安装验证工单。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| 类别 | PR | 内容 | 影响 |
|---|---|---|---|
| 性能 | [#6198](https://github.com/agentscope-ai/QwenPaw/pull/6198) | 限制多 Agent 启动并发 + 改进 Readiness UX | 直接缓解 [#6144](https://github.com/agentscope-ai/QwenPaw/issues/6144) 报告的 36 agent 启动内存峰值问题 |
| 架构 | [#6210](https://github.com/agentscope-ai/QwenPaw/pull/6210) | Default loop 升级为 first-class `DefaultMode`，从 AgentBuilder 抽离默认 gate 所有权 | 明确 turn/conversation 生命周期边界，default / goal / mission stop handler 分离 |
| 架构 | [#6159](https://github.com/agentscope-ai/QwenPaw/pull/6159) | 把 per-turn token/context usage 结算从 `ConsoleChannel` 迁入 `BaseChannel` | 全 channel 统一结算/持久化 turn_usage |
| 工具稳定性 | [#6170](https://github.com/agentscope-ai/QwenPaw/pull/6170) | browser_use 增加 `MAX_WAITTIME` 上限 | 修复模型误用 wait_time 导致 agent 阻塞任意时长 |
| Desktop | [#6234](https://github.com/agentscope-ai/QwenPaw/pull/6234) | Tauri PyInstaller entry point 改为绝对导入 | 修复 Windows sandbox 启动包上下文丢失的回归 |
| Desktop | [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) | Desktop 后端 sidecar 优雅停机 | 解决 [#6219](https://github.com/agentscope-ai/QwenPaw/issues/6219) 描述的 `CommandChild::kill()` 强杀问题 |
| Runtime | [#6224](https://github.com/agentscope-ai/QwenPaw/pull/6224) | 保留 AgentScope event extension metadata 到 real-time Host envelope | 提升 SSE/前端扩展字段透传能力 |
| 工具 | [#6220](https://github.com/agentscope-ai/QwenPaw/pull/6220) | TokenUsageBuffer 停止时不持久化未 seed 的磁盘缓存 | 修复冷启动阶段 crash → flush 写空缓存的隐患 |
| 工具 | [#6204](https://github.com/agentscope-ai/QwenPaw/pull/6204) | `get_vram_size_gb()` 移除冗余 nvidia-smi 探针 | 减少 GPU 探测开销 |
| 工具 | [#6218](https://github.com/agentscope-ai/QwenPaw/pull/6218) | HTTP 层传递 `model_slot_override` 到 model factory | 支持运行时模型槽位覆盖 |
| 模型 | [#6217](https://github.com/agentscope-ai/QwenPaw/pull/6217) | 未 probe 的多模态模型改为 fail-open | 避免图片被误剥离 |

**整体评估**：项目在"Desktop 体验打磨 + 启动性能 + Channel/Memory 架构重构"三条主线同步推进，Daily velocity 健康。

---

## 4. 社区热点（评论最多 / 关注度最高）

| 排名 | Issue/PR | 标题 | 评论 | 👍 | 关联诉求 |
|---|---|---|---|---|---|
| 1 | [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | Windows 更新后普通用户无法启动 | 7 | 0 | Windows UAC + HTTP ready 等待 — **桌面分发体验信任危机** |
| 2 | [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | Session busy 时消息静默丢失 | 6 | 0 | 缺队列/缺错误反馈 — **生产可用性问题** |
| 3 | [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | 1.x → 2.0 升级多问题 | 5 | 0 | Embedding 映射、Auto-Memo 等 **升级路径未拉平** |
| 4 | [#6221](https://github.com/agentscope-ai/QwenPaw/issues/6221) / [#6226](https://github.com/agentscope-ai/QwenPaw/issues/6226) | test notification bot | 5+1 | 0 | 测试通知机器人 — 已关闭 |
| 5 | [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | Channel 工具调用结果独立控制 + 截断 | 4 | 0 | Channel 输出噪音问题 |
| 6 | [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) | 同一 model id 多配置 | 3 | 0 | 配置灵活度 |
| 7 | [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | MCP driver 串行初始化 | 3 | 0 | 8 client 从 40s → 5s 的实测收益 |
| 8 | [#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205) | Console 静态资源压缩与缓存 | 3 | 0 | 自部署用户的带宽痛点 |

**背后诉求归纳**：
- **桌面版可用性**：普通用户启动、UAC、自更新路径成为最集中痛点；
- **多 Channel / 多模型生产化**：工具结果、模型配置粒度、消息可靠投递是 2.0 时代的核心诉求；
- **2.0 升级阵痛**：1.x → 2.0 的配置 / Embedding / 默认值迁移需要专门的 migration 工具或文档。

---

## 5. Bug 与稳定性

### 🔴 高严重度（影响主链路）

| Issue | 现象 | 状态 | Fix PR |
|---|---|---|---|
| [#6161](https://github.com/agentscope-ai/QwenPaw/issues/6161) | Windows 普通用户启动卡 `Waiting for HTTP ready...` | CLOSED（invalid）| ❌ 暂未合并修复 |
| [#6169](https://github.com/agentscope-ai/QwenPaw/issues/6169) | pip 安装的 2.0.0.post2 强制 UAC 提权 | CLOSED（invalid，需进一步复现）| ❌ |
| [#5995](https://github.com/agentscope-ai/QwenPaw/issues/5995) | Session busy 时消息静默丢弃 | OPEN | ❌ 急需 PR |
| [#6155](https://github.com/agentscope-ai/QwenPaw/issues/6155) | 升级多问题（Embedding 映射 / Auto-Memo） | OPEN | ❌ 内部已给出修复 diff，待提交 |
| [#6199](https://github.com/agentscope-ai/QwenPaw/issues/6199) | TG 链接间歇性失效（2.0 起） | OPEN | ❌ |
| [#6219](https://github.com/agentscope-ai/QwenPaw/issues/6219) | Desktop 强制 kill backend sidecar | OPEN | ✅ [#6225](https://github.com/agentscope-ai/QwenPaw/pull/6225) 已就绪 |

### 🟡 中严重度

| Issue | 现象 | 状态 |
|---|---|---|
| [#6201](https://github.com/agentscope-ai/QwenPaw/issues/6201) | PubMed MCP 触发 llama.cpp 报错 | CLOSED |
| [#6003](https://github.com/agentscope-ai/QwenPaw/issues/6003) | 控制台不显示飞书消息（但命令执行）| CLOSED |
| [#5934](https://github.com/agentscope-ai/QwenPaw/issues/5934) | Windows `file:///C:/...` 被转成 `/C:/...` | CLOSED |
| [#6202](https://github.com/agentscope-ai/QwenPaw/issues/6202) | Desktop 工作区技能渐进渲染失效 | CLOSED（duplicate）|

**稳定性趋势**：closed 率 40%（10/25），多项 P1 Bug 当日即被 PR 接住（#6225、#6217、#6218），但 Windows 桌面 + Channel 投递两大方向仍有未根治问题。

---

## 6. 功能请求与路线图信号

| Issue | 标题 | 是否已有对应 PR | 路线图可能性 |
|---|---|---|---|
| [#5976](https://github.com/agentscope-ai/QwenPaw/issues/5976) | 频道工具调用结果独立控制 + 截断 | ✅ [#6233](https://github.com/agentscope-ai/QwenPaw/pull/6233) OPEN | **高**，已进入合并评审 |
| [#6231](https://github.com/agentscope-ai/QwenPaw/issues/6231) | 同一 model id 多配置 | ❌ | **中**，需模型存储层重构 |
| [#6193](https://github.com/agentscope-ai/QwenPaw/issues/6193) | MCP 驱动并行初始化 | ❌ | **高**，定位明确、收益可量化 |
| [#6205](https://github.com/agentscope-ai/QwenPaw/issues/6205) | Console 静态资源压缩缓存 | ✅ [#6232](https://github.com/agentscope-ai/QwenPaw/pull/6232) OPEN | **极高**，预计近期合并 |
|

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报

**日期**: 2026-07-18
**仓库**: [qhkm/zeptoclaw](https://github.com/qhkm/zeptoclaw)

---

## 1. 今日速览

ZeptoClaw 过去 24 小时整体活跃度较低，所有 8 条 Issue 均为已关闭状态，**无新增 Issue、无活跃 Issue、无 PR 提交、无版本发布**。今日的动态完全由单一维护者 `YLChen-007` 主导，全部聚焦于 CVE 安全数据的 "D5 gate-point" 元数据刷新工作，属于项目内部的例行数据治理任务。**项目当前处于内部维护与数据完善阶段，外部社区无任何交互**，需关注长期缺乏社区贡献的健康度信号。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

**今日无 PR 合并或关闭**，代码层面无功能推进或修复落地。

不过，从已关闭的 Issues 可以看出项目正在进行一项系统性的 **CVE 安全数据元数据补全工作**（D5 gate-point 流程），覆盖 Issue-zeptoclaw-263、264、268、329、466 等历史安全问题。涉及的 CSV 任务文件为：

```
/root/my-project/agent-research/clawgap/design/study/all-exist-vuls-d5-gate-point-type-missing-data-collect.csv
```

目标是为 `llm-enhance/official-cve/issue-security/` 目录下的 JSON 记录补充 `d5_gate_points` 与 `d5_cross_component` 字段，并撰写工作流完成回执（receipt）。**这表明项目正在为后续的安全分析或合规审计做底层数据准备**，但功能层面并未向前推进。

---

## 4. 社区热点

**今日无社区讨论热点。** 所有 8 条 Issue 均来自同一内部账号 `YLChen-007`，每条 Issue 评论数均为 1、点赞数均为 0，呈现明显的 **自动化/单维护者任务追踪特征**，无外部开发者参与互动。

完整已关闭 Issue 列表：

| Issue | 链接 | 关联安全 Issue |
|-------|------|----------------|
| #643 | [qhkm/zeptoclaw#643](https://github.com/qhkm/zeptoclaw/issues/643) | Issue-zeptoclaw-466（row 38）|
| #642 | [qhkm/zeptoclaw#642](https://github.com/qhkm/zeptoclaw/issues/642) | Issue-zeptoclaw-329（row 37）|
| #641 | [qhkm/zeptoclaw#641](https://github.com/qhkm/zeptoclaw/issues/641) | Issue-zeptoclaw-268（row 36）|
| #640 | [qhkm/zeptoclaw#640](https://github.com/qhkm/zeptoclaw/issues/640) | Issue-zeptoclaw-466（row 38）|
| #639 | [qhkm/zeptoclaw#639](https://github.com/qhkm/zeptoclaw/issues/639) | Issue-zeptoclaw-329（row 37）|
| #638 | [qhkm/zeptoclaw#638](https://github.com/qhkm/zeptoclaw/issues/638) | Issue-zeptoclaw-268（row 36）|
| #637 | [qhkm/zeptoclaw#637](https://github.com/qhkm/zeptoclaw/issues/637) | Issue-zeptoclaw-264（row 35）|
| #636 | [qhkm/zeptoclaw#636](https://github.com/qhkm/zeptoclaw/issues/636) | Issue-zeptoclaw-263（row 34）|

**值得注意的异常**：row 36/37/38 在同一天内分别被拆分成两套 Issue（`chore(llm-enhance)` 与 `chore(analysis)` 各一），疑似工作流迭代过程中新旧模板并行运行，建议团队整理重复模板流程。

---

## 5. Bug 与稳定性

**今日无 Bug 报告、无崩溃问题、无回归问题。** 全部已关闭的 Issues 均标注 "No code changes are expected"，属于纯数据/分析任务，不涉及运行时稳定性修复。

---

## 6. 功能请求与路线图信号

**今日无用户功能请求**，也无任何新功能相关的 Issue 或 PR。结合历史 D5 gate-point 工作流的持续推进，可推测以下路线图信号：

- 🔐 **安全 CVE 数据治理仍是当前阶段重点**：连续多日以同一模式批量关闭 CVE 相关 Issue，说明团队正在系统性补全历史漏洞数据
- 🤖 **AI Agent 安全研究框架化**：项目结构（xclaw D5 gate-points、llm-enhance 子模块）暗示其定位为 **AI 智能体安全研究工具集**，但缺少公开文档与示例，社区感知度低

---

## 7. 用户反馈摘要

**今日无外部用户反馈可供提炼。** 所有 Issue 评论均为维护者内部任务回执，未观察到真实用户的痛点、使用场景或满意度评价。

**这是一个值得警惕的信号**：ZeptoClaw 在过去 24 小时内未产生任何社区交互内容，建议维护者主动在仓库中发布路线图公告、欢迎贡献的说明文档，或在外部渠道（如 X、Discord、Hacker News）进行阶段性成果分享。

---

## 8. 待处理积压

**基于今日可见数据，无法识别积压项。** 不过建议维护者主动核查以下情况：

- ⚠️ **社区增长停滞**：连续多日仅有单一维护者提交，Star/Fork 增长、贡献者招募机制需重新评估
- ⚠️ **重复 Issue 模板并存**：`chore(llm-enhance)` 与 `chore(analysis)` 两套并行模板产生了同一行 CSV 的重复 Issue（#640/#643、#638/#641 等），需清理并统一流程
- ⚠️ **缺少入门文档**：D5 gate-point、llm-enhance、xclaw 等关键模块缺乏面向外部贡献者的说明文档，新人上手门槛高

---

## 📊 项目健康度评估

| 维度 | 状态 | 说明 |
|------|------|------|
| 代码活跃度 | 🟡 中低 | 有内部任务，但无 PR 提交 |
| 发布节奏 | 🔴 停滞 | 无新版本发布 |
| 社区参与度 | 🔴 低迷 | 零外部交互 |
| 数据治理 | 🟢 积极 | CVE 数据系统性补全中 |
| 问题响应 | 🟢 良好 | 已开启 Issue 全部当日关闭 |
| 文档与可见性 | 🔴 不足 | 缺乏面向贡献者的公开说明 |

**总评**：项目内部维护运转良好，但对外透明度与社区吸引力显著不足，建议在下一阶段着重提升文档可读性、对外宣传与贡献者引导机制。

---

*数据来源：GitHub REST API（2026-07-18 抓取） · 报告生成时间：2026-07-18*

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-07-18

> 数据来源：GitHub Issues / Pull Requests
> 数据周期：过去 24 小时（截至 2026-07-18）

---

## 1. 今日速览

ZeroClaw 项目今日社区活跃度**处于高位**：24 小时内 50 条 Issues 更新（其中 8 条已关闭）、50 条 PR 更新（10 条已合并/关闭，40 条待处理），但无新版本发布。议题和 PR 矩阵呈现明显的**安全/架构 RFC 集群化**特征，OIDC、RBAC、Air-gapped、可插拔安全接口、供应链签名等多条 p1/p2 级 RFC 同步推进。值得注意的是，**长期核心维护者 `@singlerider` 已于 2026-07-15 离任**，PR #9107 正在处理 44 个 CODEOWNERS 条目的交接，由 `@JordanTheJet` 接任。整体项目处于**架构重塑与维护者过渡并行**的关键期，部分 RFC 仍处于 `blocked` 状态，需关注对 v0.9.0 节奏的影响。

---

## 2. 版本发布

**今日无新版本发布**。

从 RFC 跟踪看板（#7141 OIDC、#7142 可插拔安全接口）可见 v0.9.0 是当前的目标版本，发布节奏受多条仍处于 `blocked` 状态的 RFC 制约（详见第 8 节）。

---

## 3. 项目进展

今日共有 10 条 PR 完成合并/关闭（含 RFC 对应的实现 PR），其中实质性推进的包括：

| PR | 类型 | 说明 | 链接 |
|---|---|---|---|
| **#8173** | 增强 | **Web 仪表盘应用内一键升级 + 自动重启** 功能落地（实现 RFC #8170）—— 将侧边栏版本号升级为"检测 → 显示 Release Notes → 应用 → 重启"完整闭环，覆盖 Windows in-place swap | [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) |
| **#8743** | 测试 | 补齐 LinkedIn Schema V4 移除的回归测试，从 `Config::prop_fields()` 派生路径 | [#8743](https://github.com/zeroclaw-labs/zeroclaw/pull/8743) |
| **#8742** | 文档 | 完善 SOP 文档（`SOP.toml` 章节空白处补"无 toml 语法"示例） | [#8742](https://github.com/zeroclaw-labs/zeroclaw/pull/8742) |
| **#8768** | 修复 | ZeroCode TUI 配置面板新增根 `[channels]` 行，使 `show_tool_calls` 等设置可在 TUI 直接访问 | [#8768](https://github.com/zeroclaw-labs/zeroclaw/pull/8768) |
| **#8882** | 测试 | 补齐 schema cleaner 对 escaped local `$ref` 名称的回归测试 | [#8882](https://github.com/zeroclaw-labs/zeroclaw/pull/8882) |
| **#8896** | CI | 将 `Benchmarks Compile` 从默认 feature 收窄到 `agent-runtime` 的 `agent_benchmarks` 目标，加快 CI 周期 | [#8896](https://github.com/zeroclaw-labs/zeroclaw/pull/8896) |
| **#8974** | 文档 | 修复 ESP32 固件 README 中已失效的硬件设计文档链接 | [#8974](https://github.com/zeroclaw-labs/zeroclaw/pull/8974) |
| **#9045** | 文档 | 明确"生成文档"和"本地化"两份内容的归属与生命周期 | [#9045](https://github.com/zeroclaw-labs/zeroclaw/pull/9045) |

**关键里程碑**：RFC #8170（Web 仪表盘内升级）从 RFC 走到合并实现，闭环完成，是本周少有的端到端落地。整体而言，**今日的项目推进以"测试补齐 + 文档完善 + CI 优化"为主**，新增特性级别落地仅有 #8173 一项；这与多条重大 RFC（OIDC、可插拔安全、A2A、供应链签名）仍处于 RFC 阶段、未进入实现的状态相吻合。

---

## 4. 社区热点

按评论数与点赞数综合排序：

### 4.1 高互动议题（评论 ≥ 6）

| 排名 | Issue | 👍 | 评论 | 状态 | 链接 |
|---|---|---|---|---|---|
| 1 | **#2767 Multi-Agent Routing** | **9** | 6 | accepted, no-stale | [#2767](https://github.com/zeroclaw-labs/zeroclaw/issues/2767) |
| 2 | **#3566 A2A Protocol Support** | **7** | 8 | accepted, no-stale | [#3566](https://github.com/zeroclaw-labs/zeroclaw/issues/3566) |
| 3 | **#5982 Per-sender RBAC** | 0 | 10 | accepted | [#5982](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) |
| 4 | **#6378 Discord allowed_channels** | 0 | 7 | accepted, no-stale | [#6378](https://github.com/zeroclaw-labs/zeroclaw/issues/6378) |
| 5 | **#6641 Turn-level OTel trace** | 0 | 7 | in-progress | [#6641](https://github.com/zeroclaw-labs/zeroclaw/issues/6641) |
| 6 | **#7141 RFC: OIDC** | 0 | 7 | accepted | [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141) |
| 7 | **#7177 RFC: Supply chain signing** | 0 | 11 | blocked | [#8177](https://github.com/zeroclaw-labs/zeroclaw/issues/8177) |
| 8 | **#7184 i18n → submodule** | 0 | 6 | accepted | [#7184](https://github.com/zeroclaw-labs/zeroclaw/issues/7184) |

### 4.2 诉求分析

- **多代理与互操作** 是社区最强诉求：`#2767`（👍 9）和 `#3566`（👍 7）合计 16 个赞，覆盖"多 Agent 路由 + 外部 Agent 互通"两条主线，与 PR #7218（A2A agent-card.json 发现）和 #8862（webhook ingress → plugin queue）形成完整链路。
- **安全与企业级能力** 集中爆发：OIDC（#7141）、RBAC（#5982）、可插拔安全接口（#7142）、Air-gapped 模式（#6293）、供应链签名（#8177）——五条 RFC 同期讨论，映射出 SaaS 化与企业落地的强烈需求。
- **Channel 生态扩展** 持续：Discord 频道白名单（#6378，与 Matrix/Nextcloud Talk `allowed_rooms` 模式对齐）反映出用户对精细化路由的诉求；PR #8384（Inkbox 通道集成 email/SMS/voice/iMessage）也在积极推进。

---

## 5. Bug 与稳定性

按严重度排序：

### S1 - 工作流阻塞（p1）

| Issue | 描述 | 状态 / Fix | 链接 |
|---|---|---|---|
| **#8563** | Web dashboard 会话中配置的 SOP（`shared/sops/.../SOP.md`）未被 Agent runtime 检测到，用户走 StageHand 模板完全失效 | **OPEN**，无关联 PR | [#8563](https://github.com/zeroclaw-labs/zeroclaw/issues/8563) |
| **#8560** | `browser_open` 在无显示器/headless 环境会无限挂起 Agent turn（同样影响 robot-kit TTS 与 channels ffmpeg）—— 根本原因是 unbounded subprocess wait | **in-progress**（无关联修复 PR） | [#8560](https://github.com/zeroclaw-labs/zeroclaw/issues/8560) |
| **#7527** | macOS 15.7.7 安装后 App 无法识别已授予权限 → 退出后窗口直接消失 | **blocked**，无关联 PR | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) |
| **#5869** | `rumqttc v0.25.1` 传递性钉死旧版 `rustls-webpki 0.102.x`，触发 RUSTSEC 0049/0098/0099/0104/0134 五个公告 | **blocked**（上游未升级） | [#5869](https://github.com/zeroclaw-labs/zeroclaw/issues/5869) |
| **#8913 / PR** | 工具循环达 `max_tool_iterations` 时只返回文本，用户无感停止原因 | **OPEN PR #8913**（小尺寸 fix，待合） | [#8913](https://github.com/zeroclaw-labs/zeroclaw/pull/8913) |

### S2 - 行为降级（p2）

| Issue | 描述 | 链接 |
|---|---|---|
| **#5628** | systemd 安装后 daemon 开机自启并占用 42617 端口，导致手动 `zeroclaw daemon` 报 `Address already in use` | [#5628](https://github.com/zeroclaw-labs/zeroclaw/issues/5628) |
| **#8845 / PR** | `config/set` 仅对 `providers.models.*` 重建会话，`agents.<alias>.model_provider` 修改后运行中会话仍用旧 provider | [#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845) |

**健康度提示**：S1 级 Bug 较多且**多数仍处于 OPEN/blocked 状态**，尤其 macOS 桌面端（#7527）和 RUSTSEC 安全公告（#5869）长期受阻；建议维护者优先关注 #8560 与 #8563，二者影响日常使用但修复面相对局部。

---

## 6. 功能请求与路线图信号

### 6.1 已在进行中的实质性 PR（v0.9.0 候选）

| PR | 功能 | 状态 | 链接 |
|---|---|---|---|
| #8173 | Web 仪表盘内一键升级（RFC #8170 闭环） | 已合并 | [#8173](https://github.com/zeroclaw-labs/zeroclaw/pull/8173) |
| #8384 | 集成 Inkbox（email/SMS/voice/iMessage）通道 + Quickstart onboarding | 待合并, size XL | [#8384](https://github.com/zeroclaw-labs/zeroclaw/pull/8384) |
| #8443 | Matrix 单消息流式进度草稿 + 恢复 `stream_tool_arguments` | 待合并, size XL | [#8443](https://github.com/zeroclaw-labs/zeroclaw/pull/8443) |
| #8862 | Webhook ingress → 插件入队（channel-plugin 能力） | 待合并, size L | [#8862](https://github.com/zeroclaw-labs/zeroclaw/pull/8862) |
| #8866 | 心跳 worker 共享 MCP 注册表（修复 #5903） | 待合并, needs-author | [#8866](https://github.com/zeroclaw-labs/zeroclaw/pull/8866) |
| #8996 | 守护进程 reload 时保留运行中的 goal | 待合并, needs-author | [#8996](https://github.com/zeroclaw-labs/zeroclaw/pull/8996) |
| #8638 | 替换内置 ClawHub 源为 git-catalog `--skill` 选择器（breaking） | 待合并, size L | [#8638](https://github.com/zeroclaw-labs/zeroclaw/pull/8638) |
| #8845 | `agents.<alias>.model_provider` 改动重建实时会话 | 待合并, size S | [#8845](https://github.com/zeroclaw-labs/zeroclaw/pull/8845) |

### 6.2 路线图信号

- **v0.9.0 安全架构三件套**（#7141 OIDC、#7142 可插拔安全接口、#6293 Air-gapped）已锁定为同期 RFC，但目前**全部处于 RFC 阶段**且 #6293 仍 `blocked`。
- **跨 Agent 互操作**：#7218（A2A agent-card.json 发现）与 #3566（A2A 协议支持）正在形成上下游配套，预计将进入 v0.9.0 或紧随其后的版本。
- **持久记忆子系统**（#8891，in-progress，多 PR 滚动发布）目标对标成熟 agent runtime 的 parity，是中期重大路线信号。
- **Wasm-first 插件运行时**（#8135，RFC accepted）一旦落地将合并 #7674 系列的 Node.js 移除，是更远

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*