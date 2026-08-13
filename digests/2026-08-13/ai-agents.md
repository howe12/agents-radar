# OpenClaw 生态日报 2026-08-13

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-13 01:22 UTC

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

# OpenClaw 项目日报 · 2026-08-13

> 数据来源：GitHub `openclaw/openclaw` 仓库过去 24 小时动态

---

## 一、今日速览

OpenClaw 今日维持**极高的社区活跃度**，过去 24 小时 Issues 更新 500 条（活跃 405 / 已关闭 95）、PR 更新 500 条（待合并 358 / 已合并或关闭 142），但**无新版本正式发布**——`2026.8.1-beta.2` 仍在进行 rebase 与合并门控修复（[#122893](https://github.com/openclaw/openclaw/pull/122893)）。从信号结构看，社区关注高度集中在**三个核心痛点**：(1) subagent 完成消息在父会话中被静默丢弃的"幽灵回复"问题（多个 P1 长期未解）；(2) 沉默回复 (`NO_REPLY`) 在流式阶段可见；(3) Telegram 渠道路由与 OAuth/Codex 鉴权链路的回归。整体仓库健康度处于"高活跃 + 高积压"状态，PR 关闭率约 28%，低于活跃 Issue 关闭率 23%，维护者工作量饱和迹象明显。

---

## 二、版本发布

**今日无新版本发布。**

- 当前候选版本：`2026.8.1-beta.2` 正在基于最新的 `main` 进行 rebase（[#122893](https://github.com/openclaw/openclaw/pull/122893)）。
- 关键门控：合并必须包含 Telegram "trusted isolation" 修复（[#122878](https://github.com/openclaw/openclaw/pull/122878)、[#122897](https://github.com/openclaw/openclaw/pull/122897)）以及 Discord 入站解阻塞修复，否则会影响线上发布验证。
- 等待发布的修复候选还包括：subagent announce 投递链路（[#122850](https://github.com/openclaw/openclaw/pull/122850)）、embedded-runner 流式片段 flush（[#116253](https://github.com/openclaw/openclaw/pull/116253)）、skill 重启后快照刷新（[#122110](https://github.com/openclaw/openclaw/pull/122110)）。

---

## 三、项目进展

### 3.1 今日合并 / 关闭的重要 PR

| PR | 说明 | 价值 |
|---|---|---|
| [#119603](https://github.com/openclaw/openclaw/pull/119603) | `fix(reef)`: 隐藏 relay 错误中的凭据 | **安全闭环**——修复 Reef 鉴权链路中 setup token、bearer session、WS close 原因泄露到诊断信息的安全问题 |
| [#122894](https://github.com/openclaw/openclaw/pull/122894) | `fix(telegram)`: 在调用 Bot API 前拒绝超长 caption 编辑 | 渠道可靠性——避免 `editMessageCaption` 因超过 1024 字符限制导致回退失败 |

### 3.2 今日关闭的重要 Issue

| Issue | 说明 |
|---|---|
| [#57901](https://github.com/openclaw/openclaw/issues/57901) | safeguard compaction 忽略 `compaction.model`——已通过关联 PR 修复 |
| [#39604](https://github.com/openclaw/openclaw/issues/39604) | `tools.web.fetch.allowPrivateNetwork` 配置开关——安全相关的功能请求落地 |
| [#42820](https://github.com/openclaw/openclaw/issues/42820) | Feishu message tool 的 send/poll schema 污染问题 |
| [#45031](https://github.com/openclaw/openclaw/issues/45031) | Skill 安装安全扫描（关联 AgentShield） |
| [#65538](https://github.com/openclaw/openclaw/issues/65538) | 无障碍：streaming 期间 `aria-live="polite"` 造成的屏幕阅读器逐 token 朗读 |
| [#57256](https://github.com/openclaw/openclaw/issues/57256) | `openclaw status` 错误地报告 `openclaw-mem0` 不可用 |
| [#33413](https://github.com/openclaw/openclaw/issues/33413) | Slack assistant thread 状态显示工具级进度 |
| [#8299](https://github.com/openclaw/openclaw/issues/8299) | 抑制 sub-agent announce 的配置项 |

### 3.3 项目前进度量

- **bug 修复闭环率**：今日关闭的 P1 关键 bug 包括 silent reply streaming（[#122508](https://github.com/openclaw/openclaw/pull/122508) 准备合并）、Telegram caption 越界、Reef 凭据泄露——三者均与线上稳定性直接相关。
- **渠道可靠性进展**：Discord ingress 修复（[#122878](https://github.com/openclaw/openclaw/pull/122878)）、Telegram caption guard（[#122897](https://github.com/openclaw/openclaw/pull/122897)）、Matrix 替代失败时保留可见流式内容（[#122850](https://github.com/openclaw/openclaw/pull/122850)）同步推进，显示出多渠道稳定性正在系统性收敛。
- **核心 agent 运行时**：`embedded-runner` 现在能在运行预算中止前 flush 已生成片段（[#116253](https://github.com/openclaw/openclaw/pull/116253)），subagent 完成链路引入 steer 保护避免被请求方 run 提前结束而丢失（[#92433](https://github.com/openclaw/openclaw/issues/92433) 关联代码改动）。

---

## 四、社区热点

### 4.1 评论数排行 Top 5

| # | Issue | 评论 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#121058](https://github.com/openclaw/openclaw/issues/121058) | **91** | 0 | silent reply 故障在 [#116277](https://github.com/openclaw/openclaw/issues/116277) 关闭后**继续复发**——含 2026-08-09 新增监控日志；维护团队与用户对"是否真的修好"存在持续争论 |
| 2 | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 45 | 0 | Memory Trust Tagging by Source——用户希望通过信任标签缓解 memory poisoning |
| 3 | [#44925](https://github.com/openclaw/openclaw/issues/44925) | 26 | 2 | subagent 完成被静默丢失（无重试、无通知、超时无自动重启） |
| 4 | [#77598](https://github.com/openclaw/openclaw/issues/77598) | 23 | 1 | Pash dev agent 24 小时行为观察笔记（maintainer 标注，**请勿干预**） |
| 5 | [#57901](https://github.com/openclaw/openclaw/issues/57901) | 15 | 1 | safeguard compaction 忽略 `compaction.model`（今日已关） |

### 4.2 诉求分析

- **沉默回复失效**（[#121058](https://github.com/openclaw/openclaw/issues/121058)、[#122508](https://github.com/openclaw/openclaw/pull/122508)）：用户对 `NO_REPLY` 机制在流式阶段渲染出一个孤立的大写 `N` 极度敏感，部分用户已经写监控 cron 跟踪复发情况，**信任危机明显**。
- **subagent 完成链路的"幽灵"问题**（[#44925](https://github.com/openclaw/openclaw/issues/44925)、[#96975](https://github.com/openclaw/openclaw/issues/96975)、[#67777](https://github.com/openclaw/openclaw/issues/67777)、[#92433](https://github.com/openclaw/openclaw/issues/92433)、[#47975](https://github.com/openclaw/openclaw/issues/47975)）：5 个相关高优 issue 同时活跃，反映这是**用户感知最强的核心缺陷**——主会话无响应但 agent 已经完成的"假死"场景。
- **Trust-aware memory**：[#7707](https://github.com/openclaw/openclaw/issues/7707) 长期高居讨论榜首，open 已超 6 个月，反映社区对 web 抓取与第三方 skill 注入引发的 memory poisoning 焦虑持续上升。
- **配置语言与可观察性**：[#45758](https://github.com/openclaw/openclaw/issues/45758)（YAML 配置）、[#42276](https://github.com/openclaw/openclaw/issues/42276)（reasoning stream）、[#45501](https://github.com/openclaw/openclaw/issues/45501)（可配置 session.resetPrompt）显示用户对"运行可解释性"和"配置人体工学"的强烈需求。

---

## 五、Bug 与稳定性

按严重程度排列，附 P1 / P2 / 关联 PR 标注：

### 🔴 P1（影响 session 状态 / 消息丢失 / 崩溃循环）

| Issue | 简述 | Fix PR | 状态 |
|---|---|---|---|
| [#121058](https://github.com/openclaw/openclaw/issues/121058) | silent reply 复发，监控日志持续告警 | [#122508](https://github.com/openclaw/openclaw/pull/122508) | 待合并 |
| [#44925](https://github.com/openclaw/openclaw/issues/44925) | subagent 完成静默丢失 | — | 待修复 |
| [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多 agent 并发配置覆盖 / 会话锁失败 | — | 待修复 |
| [#72015](https://github.com/openclaw/openclaw/issues/72015) | active-memory 在多 agent 网关上阻塞回复 | — | 待修复 |
| [#67777](https://github.com/openclaw/openclaw/issues/67777) | subagent 直接 announce 失败后消息丢失 | — | 待修复 |
| [#47975](https://github.com/openclaw/openclaw/issues/47975) | subagent 会话残留，主会话无响应 | — | 待修复 |
| [#91363](https://github.com/openclaw/openclaw/issues/91363) | isolated cron 在 `model-call-started` 阶段必败 | — | 待修复 |
| [#92433](https://github.com/openclaw/openclaw/issues/92433) | subagent 完成 steer 入请求方 run 但 run 提前结束 | [#122850](https://github.com/openclaw/openclaw/pull/122850) 等 | 多个 PR 推进 |
| [#89278](https://github.com/openclaw/openclaw/issues/89278) | Codex OAuth 刷新 > 10s，cron / heartbeat 失败 | — | 待修复 |
| [#97983](https://github.com/openclaw/openclaw/issues/97983) | iOS/WebChat 消息写入 transcript 但不触发回复 | — | 待修复 |
| [#111498](https://github.com/openclaw/openclaw/issues/111498) | Anthropic auth 恢复后 workspace-state 迁移卡死主 agent | — | 待修复 |
| [#41165](https://github.com/openclaw/openclaw/issues/41165) | Telegram DM 仍会落入 `agent:main:main` | [#122878](https://github.com/openclaw/openclaw/pull/122878) | PR 待合并 |
| [#78493](https://github.com/openclaw/openclaw/issues/78493) | `sudo openclaw update` 产生混合所有权，doctor 覆盖配置 | — | 待修复 |
| [#40611](https://github.com/openclaw/openclaw/issues/40611) | PR #39182 heartbeat drift 修复导致 Telegram 阻塞 | — | 待修复 |
| [#44502](https://github.com/openclaw/openclaw/issues/44502) | Discord 路由 / mention-gating 回归 | [#122878](https://github.com/openclaw/openclaw/pull/122878) | PR 待合并 |
| [#54488](https://github.com/openclaw/openclaw/issues/54488) | followup drain 占用 session lane，阻塞入站 20-30 分钟 | — | 待修复 |
| [#43374](https://github.com/openclaw/openclaw/issues/43374) | 4 agent 并发时所有 LLM 调用同步超时 | — | 待修复 |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程未回收，僵尸累积 | — | 待修复 |

### 🟠 P2（影响 UX / 鉴权 / 性能）

- [#89278](https://github.com/openclaw/openclaw/issues/89278) Codex OAuth 刷新超时（兼 P1，已列出）
- [#107814](https://github.com/openclaw/openclaw/issues/107814) `gpt-5.3-codex-spark` 必填工具调用参数为空
- [#37966](https://github.com/openclaw/openclaw/issues/37966) `cacheRetention` 对 LiteLLM 代理的 Anthropic 模型无效
- [#115001](https://github.com/openclaw/openclaw/issues/115001) hybrid 记忆搜索的 FTS LIKE 回退硬编码 `textScore=1.0`
- [#115001](https://github.com/openclaw/openclaw/issues/115001) 已关联 PR 待合并
- [#43747](https://github.com/openclaw/openclaw/issues/43747) memory 管理混乱（chunking / embedding / 存储路径不一致）
- [#44431](https://github.com/openclaw/openclaw/issues/44431) browser 工具 7 项真实场景改进（无 CSS 选择器等）
- [#95610](https://github.com/openclaw/openclaw/issues/95610) OpenAI prompt cache 前缀抖动（per-turn dynamic 注入破坏 cache）
- [#75782](https://github.com/openclaw/openclaw/issues/75782) embedded-run `auth` 阶段同步阻塞 10–15s
- [#77733](https://github.com/openclaw/openclaw/issues/77733) `/new` `/reset` 不再触发 persona greeting（2026.5.3 回归）

**修复覆盖评估**：今日活跃 P1 中约 **22%（4/18）** 已有明确关联修复 PR 且进入待合并状态（[#122508](https://github.com/openclaw/openclaw/pull/122508)、[#122850](https://github.com/openclaw/openclaw/pull/122850)、[#122878](https://github.com/openclaw/openclaw/pull/122878)、[#116253](https://github.com/openclaw/openclaw/pull/116253) 等），其余 P1 仍待立项。

---

## 六、功能请求与路线图信号

| 主题 | Issue | 已有 PR 关联 | 路线图概率 |
|---|---|---|---|
| **YAML 配置文件** | [#45758](https://github.com/openclaw/openclaw/issues/45758) | 无 | **中**——请求与 DevOps 工具链一致，符合用户习惯 |
| **Memory 信任标签**（防 memory poisoning） | [#7707](https://github.com/openclaw/openclaw/issues/7707) | 无 | **高**——长期高居评论榜首；与 [#45031](https://github.com/openclaw/openclaw/issues/45031) Skill 安全扫描方向一致 |
| **自托管 STT/TTS（webchat）** | [#45508](https://github.com/openclaw/openclaw/issues/45508) | 无 | **中**——

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**报告日期：2026-08-13**

---

## 1. 生态全景

2026 年 8 月中旬的开源 AI Agent 生态呈现"**头部高强度迭代 + 尾部项目休眠**"的明显分化态势。在 13 个观测项目中，**6 个项目过去 24 小时无任何活动**（NullClaw、TinyClaw、Moltis、ZeptoClaw、NanoClaw 数据缺失），而 OpenClaw、ZeroClaw、Hermes Agent、IronClaw、CoPaw 等头部项目均维持日均 30–50 条 Issue/PR 级别的高频更新。**安全收敛与多渠道稳定性**成为本轮全行业共同的主旋律，跨项目集中出现 CVE 级修复（ZeroClaw 浏览器逃逸、OpenClaw Reef 凭据泄露、LobsterAI 卸载残留质疑），反映出生态正从"功能爆发期"进入"工程化沉淀期"。

---

## 2. 各项目活跃度对比

| 项目 | Issue 更新 | PR 更新 | 今日 Release | Issue 关闭率 | 健康度 | 当前阶段 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500 (活跃 405/关 95) | 500 (待合 358/合 142) | ❌ 无（2026.8.1-beta.2 rebase 中） | ~23% | ⭐⭐⭐ 活跃但高积压 | 高活跃 + 维护者饱和 |
| **ZeroClaw** | 50 | 50 | ❌ 无（最新 v0.8.3） | — | ⭐⭐⭐⭐ 高活跃 | 向 v0.9.0 演进 |
| **Hermes Agent** | 50 | 50 | ❌ 无（流通 v0.20.0） | 14 条 Issue 关 / 6 PR 关 | ⭐⭐⭐⭐ 功能爆发 | 插件接口一期清账 |
| **IronClaw** | 41 (29 新/12 关) | 50 (31 待/19 合) | ✅ **v1.2.0-rc.2 + rc.3** | ~29% | ⭐⭐⭐⭐ 良好 | 1.2.0-rc 系列冲刺 |
| **CoPaw (QwenPaw)** | 29 | 43 | ✅ **v2.1.0-beta.4** | — | ⭐⭐⭐ 中-高 | v2.1.0 Beta 冲刺（含一次 revert） |
| **NanoBot** | 8 | 36 | ❌ 无 | 50% (4/8) | ⭐⭐⭐⭐ 健康 | 安全加固 + Provider 重构 |
| **LobsterAI** | 6 (5 stale) | 7 | ❌ 无（准备 2026.8.12） | ~33% | ⭐⭐ 中等 | 版本冲刺 + 长期积压 |
| **PicoClaw** | 2 (均 stale) | 3 | ❌ 无 | 0% | ⭐⭐ 偏低 | 轻度停滞 |
| NullClaw / TinyClaw / Moltis / ZeptoClaw / NanoClaw | — | — | — | — | ⭐ 无数据 | 静默 |

> **关键观察**：OpenClaw 的 500/500 数量级远超同行（第二梯队约 50/50），但 28% 的 PR 关闭率低于活跃 Issue 关闭率 23%（口径接近但仍滞后），属于"高活跃下的高积压"；IronClaw 是唯一当日发版的活跃项目。

---

## 3. OpenClaw 在生态中的定位

### 与同类项目的对比

| 维度 | OpenClaw | ZeroClaw | Hermes Agent | IronClaw | CoPaw |
|---|---|---|---|---|---|
| 社区体量（24h Issue+PR） | **1000** | 100 | 100 | 91 | 72 |
| PR 合并率（合/总） | 28% | 38% | 12% | 38% | — |
| Release 节奏 | 频繁 beta + rebase 中 | 阶段性 minor | 阶段性（v0.20.0） | RC 系列冲刺 | Beta 系列密集 |
| 多渠道支持 | **Telegram/Discord/Slack/Matrix/Feishu**（最广） | Telegram 为主 | 多端覆盖 | Telegram/Slack 密集 | 自有 + 插件 |
| 安全治理 | Reef 凭据修复、CVE 闭环 | 浏览器逃逸、MCP 策略统一 | kanban 审批漏洞待修 | 容器镜像加固 | 插件静默 cron 风险 |
| 核心痛点 | subagent "幽灵回复"、沉默回复失效 | Windows 74 测试失败 | Windows Desktop 重启回归 | Telegram Bug Bash（11 个新 Issue） | v2.0.1 频繁崩溃、agent 中途停顿 |

### OpenClaw 的差异化定位

- **生态核心地位**：以 10 倍体量领先第二梯队，是事实上的"事实标准"参照系；但维护者工作量饱和信号明显（PR 关闭率仅 28%，活跃 P1 中仅 22% 已有明确修复 PR）。
- **多渠道深耕**：唯一覆盖 5+ 主流渠道（Telegram/Discord/Slack/Matrix/Feishu）并系统性收敛稳定性的项目，与 Hermes Agent、IronClaw 在 Telegram 端的反复挣扎形成对比。
- **技术路线特征**：`embedded-runner` + `subagent` 双层架构带来独有的"幽灵回复"问题（其他项目较少出现），但同时也是支撑复杂多 agent 协作的能力基础；这构成"能力越强 → 一致性挑战越大"的典型权衡。

---

## 4. 共同关注的技术方向

| 共同方向 | 涉及项目 | 核心诉求 |
|---|---|---|
| **沉默/丢失消息的可靠性** | OpenClaw（#121058 沉默回复、#44925 subagent 幽灵）、NanoBot（#5327 推理重复）、Hermes（#78069 clarify 失败）、CoPaw（#6921 中途停顿） | 4 个项目独立呈现"用户感知完成但系统未响应"或"中途静默"现象，是**当前生态最尖锐的体验痛点** |
| **多渠道一致性 / Telegram 集成** | OpenClaw（caption 越界、trusted isolation）、IronClaw（Telegram Bug Bash 一日 11 Issue）、ZeroClaw（命令超限截断）、NanoBot（#5275 Matrix thread）、CoPaw（#6924 自定义频道入口丢失） | 5 个项目同时在 Telegram/Discord/Matrix 上挣扎，渠道适配层仍是行业级薄弱环节 |
| **Windows / 跨平台稳定性** | ZeroClaw（74 测试失败 S2）、Hermes Agent（Desktop 重启回归 #83683）、IronClaw（Windows 安装权限）、LobsterAI（EPERM symlink） | 4 个项目涉及 Windows 路径异常，**跨平台 CI 矩阵**成为共同刚需 |
| **内存 / 记忆系统的可观测性与防注入** | OpenClaw（#7707 Memory Trust Tagging 长期榜首）、ZeroClaw（#6998 Schema-validated consolidation）、CoPaw（#6853 prompt 与实际行为不符）、NanoBot（#5278 session 移出工作区） | 4 个项目都在加固记忆系统的可信边界，反映对 **memory poisoning / 路径越权** 的行业级焦虑 |
| **CI / 安全治理基础设施** | ZeroClaw（Semgrep、rustdoc、#9101 收敛 attestation）、IronClaw（容器 curl 健康检查）、NanoBot（Docker capability drop）、OpenClaw（Reef 凭据隐藏） | 4 个项目同步投资构建/CI/供应链层面，"快速合并"让位于"系统性安全治理" |
| **可观测性 / Langfuse + Doctor 诊断** | ZeroClaw（Langfuse PR #9556、Doctor 显示日志路径）、Hermes Agent（#84916 插件 manifest v2）、OpenClaw（#45758 reasoning stream 可视化） | 3 个项目独立引入观测后端/诊断面板，**Agent 行为可解释性**成为新增共识 |
| **插件 / Hook 扩展体系** | Hermes Agent（teknium1 一日 10 个插件 PR）、NanoBot（hook 自动发现 #4878）、IronClaw（per-field help）、ZeroClaw（插件化 Kanban #8832） | 4 个项目集中重构扩展点，**Plugin Interface Expansion** 是当前最显著的架构演进趋势 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 多渠道全场景 agent 平台 | 个人/小团队高级用户 | `embedded-runner` + `subagent` 双层架构；多渠道路由；OAuth/Codex 鉴权链 |
| **ZeroClaw** | 安全优先的 Rust 运行时 | 注重隐私/合规的企业/技术用户 | Rust 实现，强调 CVE 收敛、release attestation 严格签名 |
| **Hermes Agent** | 插件生态 + 多平台桌面 | 喜欢自托管+多机的开发者 | 插件接口一期（manifest v2/事件总线/审批传输/索引）；Desktop 多 gateway 架构 |
| **IronClaw** | Loop-host 框架 + WebUI 设计系统 | 产品化体验导向的团队 | `@ironclaw/ui` workspace 包；Reborn 框架（context eviction/token estimator 并行策略） |
| **CoPaw** | AgentScope 生态下的 Beta 快速迭代 | Qwen 模型用户的早期采用者 | v2.1.0 Beta 密集节奏；computer-use / 多 agent 协作实验场 |
| **NanoBot** | Provider 兼容 + 工具执行安全 | 跨模型多 provider 重度用户 | 容器化部署（cap_drop + no-new-privileges）；Jina reader 防 SSRF；hook 自动发现 |
| **LobsterAI** | 桌面端 UI 精细化 + 模型选择体验 | 国内个人用户（中文场景） | 跨平台 Electron；skills 管理 + 模型思考档位记忆；Flybook/Feishu 集成 |
| **PicoClaw** | 轻量嵌入式场景 | 资源受限设备/极简场景 | （数据不足，疑似维护者缺席） |

---

## 6. 社区热度与成熟度分层

### 🥇 第一梯队：高活跃 + 高产出（功能爆发期）
- **OpenClaw / ZeroClaw / Hermes Agent / IronClaw**：均维持日均 40–50 条 Issue+PR 级别，PR 合并率 28–38%，有明确的版本/RC 计划。
- **特征**：多线并行推进（安全 + 渠道 + Provider + 插件），社区与维护者双向投入高。

### 🥈 第二梯队：中-高活跃（Beta 冲刺期）
- **CoPaw**：v2.1.0 Beta 密集节奏，单日 43 PR + 1 个 revert，体现"为快速迭代付稳定性代价"的典型 Beta 阶段特征。
- **NanoBot**：8 Issue + 36 PR 规模略小，但 PR 合并率 47%、安全 PR 占比 29%，是**投入产出比最高**的项目之一。

### 🥉 第三梯队：版本准备 + 长期积压（质量巩固期）
- **LobsterAI**：单日 7 PR 合并质量良好，但用户支持侧几乎停滞（83% Issue 为 stale），Issue #1173 卸载残留质疑风险高。
- **PicoClaw**：轻度停滞，3 个 PR 等待 review、2 个高优 Bug 超 20 天无响应，**维护者疑似缺席**。

### 💤 第四梯队：静默期（休眠）
- **NullClaw / TinyClaw / Moltis / ZeptoClaw / NanoClaw**：5 个项目无任何活动信号，需要进一步核实仓库是否存在或仅是观测周期错配。

---

## 7. 值得关注的趋势信号

### 🔥 趋势一：Agent 系统的"幽灵回复"成为行业级痛点
**OpenClaw（#121058/#44925）、CoPaw（#6921）、NanoBot（#5327）、Hermes Agent（#78069）** 同时暴露"用户感知任务完成但实际丢失 / 中途停顿"的现象。这不是孤立 bug，而是 **agent 系统从确定性执行转向流式异步架构的必然代价**——流式响应 + subagent + 多渠道路由三层叠加后，状态同步与取消传播变得极其脆弱。**对开发者的启示**：构建 agent 系统时必须设计"心跳 + 重试 + 显式状态广播"三件套，不能依赖单一完成信号。

### 🔥 趋势二：安全治理从"被动修复"转向"主动收敛"
**ZeroClaw（浏览器逃逸 + MCP 策略统一）、OpenClaw（Reef 凭据隐藏）、NanoBot（Jina SSRF + 容器 capability）、Hermes Agent（kanban 审批漏洞）、LobsterAI（卸载残留）**——安全类 PR 在今日合并/关闭清单中占比 25–35%，且开始系统化（统一访问策略、签名 attestation 收敛、容器加固）。**对开发者的启示**：agent 系统的攻击面已从"模型层 prompt injection"扩展到"工具层路径越权、供应链层签名、运行时层进程逃逸"，需要建立纵深防御而非单点修复。

### 🔥 趋势三：可观测性成为 Agent 框架的"水电煤"
**ZeroClaw（Langfuse #9556、Doctor 日志路径）、Hermes Agent（Plugin Doctor、事件总线）、OpenClaw（#45758 reasoning stream）** 同时投入"诊断 + trace + 状态可视化"。结合 **IronClaw 上下文窗口静默驱逐修复** 暴露的"系统行为对用户不可见"问题，**对开发者的启示**：agent 的可解释性已从 nice-to-have 变为 must-have，否则用户无法区分"系统在思考"与"系统已卡死"。

### 🔥 趋势四：插件 / Hook 体系从"可选扩展"变为"一等公民"
**Hermes Agent（teknium1 一日 10 个插件 PR）、NanoBot（hook 自动发现 #4878）、ZeroClaw（插件化 Kanban #8832）、IronClaw（per-field help）** 集体发力 Plugin Interface Expansion。**对开发者的启示**：插件系统的设计质量直接决定项目寿命——一个清晰的 manifest schema + 事件总线 + 版本化契约，比实现更多内置功能更重要。

### 🔥 趋势五：渠道适配仍是行业级薄弱环节
**IronClaw 一日新增 11 个 Telegram Bug、OpenClaw Telegram caption 越界、ZeroClaw BOT_COMMANDS_TOO_MUCH、NanoBot Matrix thread、CoPaw 自定义频道入口丢失**——5 个项目在 Telegram/Discord/Matrix 上同时挣扎。**对开发者的启示**：渠道适配是"无底洞"工作，建议抽象出"渠道适配框架"层（如 OpenClaw 的 trusted isolation 思路），而非每个项目各自为战。

### 🔥 趋势六：Windows 跨平台 CI 成为新的"入场券"
**ZeroClaw 74 个 Windows 测试失败、Hermes Desktop 重启回归、IronClaw Windows 安装权限、LobsterAI EPERM symlink**——4 个项目涉及 Windows 路径异常。**对开发者的启示**：在 CI 矩阵中纳入 Windows/macOS 已不再是加分项，而是维持用户基本信任的必要条件。

### 📊 对 AI Agent 开发者的整体参考价值

| 决策场景 | 建议 |
|---|---|
| **选型参考** | 高频使用 / 多渠道需求：OpenClaw；安全合规：ZeroClaw；插件生态：Hermes Agent；快速迭代尝鲜：CoPaw；轻量部署：NanoBot |
| **架构参考** | 学习 subagent + 流式异步的取舍（OpenClaw 的痛）、Plugin Interface 设计（Hermes Agent）、可观测性集成（ZeroClaw Langfuse） |
| **风险预警** | "幽灵回复" + Windows 兼容性 + 渠道适配是三大已知雷区，新立项需重点规避 |
| **趋势押注** | 投资 Plugin 系统、可观测性、跨平台 CI 三个方向，回报周期约 6 个月可见效 |

---

*本报告基于 2026-08-13 过去 24 小时的 GitHub 公开数据自动生成，覆盖 13 个观测项目中的 8 个活跃项目；5 个项目（NullClaw/TinyClaw/Moltis/ZeptoClaw/NanoClaw）观测周期内无活动信号，建议进一步核实仓库状态。*

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-13

---

## 📌 今日速览

NanoBot 在 2026-08-12 至 2026-08-13 期间继续保持高强度迭代节奏：过去 24 小时内共产生 **8 条 Issue 更新** 和 **36 条 PR 更新**，其中 **17 条 PR 已合并/关闭**（占 PR 活动的 47%），流转效率健康。维护重点集中在 **安全加固**（容器能力/SSRF 防护/工作区越权修复）和 **Provider 重构**（OpenAI 兼容 Responses 能力声明）两大主线；同时 WebUI、Channel（Matrix/Weixin）、MCP 三大方向均有显著推进。整体看，项目处于成熟期的密集 bug-fix + 安全加固阶段，功能演进稳健。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时未发布新的 Release tag，用户仍使用最近一次版本。建议关注 main 分支合入的修复量是否在下一版本中以 patch release 形式回灌。

---

## 🛠 项目进展

过去 24 小时共 **17 条 PR 关闭/合并**，覆盖安全、Provider、Channel、工具执行与 WebUI 多个方向。以下为代表性合并项：

### 安全与权限加固（重点方向）

| PR | 标题 | 价值 |
|---|---|---|
| [#5329](https://github.com/HKUDS/nanobot/pull/5329) | fix(exec): guard bare and named-user home paths | 修复 `ExecTool` 路径提取对 `~`、`~/...`、`~user` 等 shell tilde 展开形式以及输入重定向 `<~root/.bashrc` 的绕过，工作区边界防护更严密 |
| [#5258](https://github.com/HKUDS/nanobot/pull/5258) | fix(web): keep credential-bearing URLs away from the remote Jina reader | 解决 #4884：带凭证/签名的 URL 不再外发 Jina，短链重定向链会被完整本地审计 |
| [#5320](https://github.com/HKUDS/nanobot/pull/5320) | fix(docker): restore capabilities for privilege drop | 修复 #5295 部署权限拒绝问题：保留 `cap_drop: ALL` 同时恢复 root bootstrap 所需 capability，并启用 `no-new-privileges`，新增 CI 验证 |
| [#5218](https://github.com/HKUDS/nanobot/pull/5218) | fix(tools): treat redirection and grouping delimiters in ExecTool path guard | 解决 #5218：路径守卫正确处理重定向/分组分隔符，不再误截断带引号或转义的工作区路径 |
| [#5279](https://github.com/HKUDS/nanobot/pull/5279) | fix(session): store session history outside the agent workspace | 关闭 #5278：会话记录移出 `<workspace>/sessions/`，避免 workspace-scoped 工具可越权访问历史 |

### Provider 与模型兼容性

| PR | 标题 | 价值 |
|---|---|---|
| [#5230](https://github.com/HKUDS/nanobot/pull/5230) | fix(gemini): preserve imported tool calls with signature fallback | 修复 Gemini 3 在 conversation 从非 Gemini 提供方迁移后因缺少 thought signature 而拒绝 function call replay 的问题 |
| [#5362](https://github.com/HKUDS/nanobot/pull/5362) | feat(providers): support DeepSeek V4 Pro Responses | 将 `deepseek-v4-pro` 接入 DeepSeek 原生 Responses API，保留 `reasoning.effort: "none"` 显式声明，含模型路由测试 |

### 架构与可扩展性

| PR | 标题 | 价值 |
|---|---|---|
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | feat(hooks): add auto-discovery mechanism for agent hooks | 引入 `pkgutil` 扫描 + entry_points 自动发现机制，与 channels/tools 模式一致；新 hook 只需放入目录即可，零手工接线 |

**整体进度评价：** 仅过去一天就关闭了 **5 条与安全/权限相关的 PR**，集中在"防止信息外泄/越权访问"这一明确主题，表明项目正在系统性地进行安全收敛。Provider 层（Gemini、DeepSeek）和 hook 体系也在同步演进。

---

## 💬 社区热点

### 高讨论度 Issue

| Issue | 标题 | 评论 | 👍 | 链接 |
|---|---|---|---|---|
| [#5327](https://github.com/HKUDS/nanobot/issues/5327) | Nanobot repeats multiple times the same message while reasoning | 11 | 0 | 已关闭 |
| [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker compose deploy failed: "Permission denied" on entrypoint.sh | 5 | 0 | 已关闭 |
| [#4010](https://github.com/HKUDS/nanobot/issues/4010) | Feature proposal: text-to-speech / voice output support | 3 | 3 | 仍开放 |
| [#4858](https://github.com/HKUDS/nanobot/issues/4858) | Refactor dynamic tool provider lifecycle out of AgentLoop | 2 | 0 | 已关闭 |
| [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Matrix: reply in thread should form a dedicated context | 1 | 0 | 仍开放 |

### 诉求分析

- **#4010（3 个 👍，社区呼声最高的长期未决 feature）**：用户希望 Nanobot 补齐语音输出能力，已支持语音输入但回复仍只能文本，期望在原生支持语音消息的渠道上闭环。维护者尚未给出明确时间表。
- **#5327（11 条评论）**：用户对推理中"重复同一句话"的随机现象表达强烈困扰。Issue 已关闭，但需关注根因是否在已合并的相关 PR 中被修复（如 subagent 转录保存 #5291、session 生命周期 #5271）。
- **#5275**：Matrix 渠道"reply in thread"上下文隔离能力与 Discord/Slack 线程对齐，反映出多渠道一致性的用户体验诉求。

---

## 🐛 Bug 与稳定性

### 严重程度排序

| 级别 | Issue / PR | 描述 | 状态 |
|---|---|---|---|
| **P0** | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | stale background task 在 `/new` 后可能覆盖新 session 数据 | **OPEN PR**（p0，yorkhellen）—— 仍需 review/合并 |
| **P2** | [#5348](https://github.com/HKUDS/nanobot/issues/5348) | `tests/webui/test_settings_api.py` 两个 token-usage 用例在每日约 5 小时窗口内确定性失败；`record_token_usage()` 使用 UTC，而 settings payload 读取配置时区 | **新开 Issue**，尚无 PR |
| **Bug（已修）** | [#5327](https://github.com/HKUDS/nanobot/issues/5327) | 推理时重复同一消息 | 已关闭（11 条评论） |
| **Bug（已修）** | [#5295](https://github.com/HKUDS/nanobot/issues/5295) | Docker compose 部署 entrypoint.sh 权限拒绝 | 已关闭，已通过 #5320 修复 |
| **Bug（已修）** | [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini 3 在迁移会话后拒绝 function call replay | 已合并 |
| **Bug（已修）** | [#5361](https://github.com/HKUDS/nanobot/pull/5361) | Weixin QR-login token 在 `config.json` 无 `channels` 字段时静默丢失 | **OPEN PR** 待合并 |
| **Bug（已修）** | [#5360](https://github.com/HKUDS/nanobot/pull/5360) | MCP 工具名对全非 ASCII 输入（如"获取天气"）碰撞为 `"_"` | **OPEN PR** 待合并 |

### 稳定性关注点

- **[#5348](https://github.com/HKUDS/nanobot/issues/5348)** 属于时区相关的确定性 CI 闪烁（flaky test），需修 `record_token_usage()` 与 settings 端共享同一时区源。
- **[#5271](https://github.com/HKUDS/nanobot/pull/5271)** 是当前最高优先级（p0）的活跃 session 数据竞争问题，建议维护者优先 review。

---

## ✨ 功能请求与路线图信号

| 提案 | 来源 | 关联 PR | 纳入下一版本的概率评估 |
|---|---|---|---|
| **TTS / 语音输出** | [#4010](https://github.com/HKUDS/nanobot/issues/4010) (3 👍) | 无 | 中等偏长线：呼声稳定但缺 PR，需核心维护者驱动 |
| **QwenCloud Provider 路径** | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | 无 | 较高：与现有 DashScope 兼容，描述为"向后兼容"路径，落地成本低 |
| **Matrix "reply in thread" 上下文隔离** | [#5275](https://github.com/HKUDS/nanobot/issues/5275) | [#5292](https://github.com/HKUDS/nanobot/pull/5292) 已部分涉及 room-level 回复 | 较高：#5292 已在路上 |
| **TypeScript 原生终端 UI** | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | 自带 PR，标记 conflict | 中等：PR 长期开放，冲突未解，观望 |
| **WebUI 多 session @mention 协作** | [#5358](https://github.com/HKUDS/nanobot/pull/5358) | 自带 PR | 较高：chengyongru 主推，配套 [#5357](https://github.com/HKUDS/nanobot/pull/5357) 删除前取消活动 turn |
| **Apps Discovery 重设计** | [#5342](https://github.com/HKUDS/nanobot/pull/5342) | 自带 PR，conflict | 中等：依赖 nanobot.wiki registry 与离线缓存策略 |
| **WebUI 跨渠道设置流程优化** | [#5356](https://github.com/HKUDS/nanobot/pull/5356) | 自带 PR | 较高：chengyongru 维护 |

**信号总结：** WebUI 增强（[#5356](https://github.com/HKUDS/nanobot/pull/5356) / [#5357](https://github.com/HKUDS/nanobot/pull/5357) / [#5358](https://github.com/HKUDS/nanobot/pull/5358) / [#5342](https://github.com/HKUDS/nanobot/pull/5342)）由 chengyongru 集中推进，未来版本大概率会一次性合入一组相关改进。QwenCloud (#5350) 由于描述为"向后兼容"且实现成本低，纳入概率较高。

---

## 🗣 用户反馈摘要

从开放 Issue 的描述与评论中可提炼以下真实使用场景与痛点：

- **#4010（TTS）** 用户在原生支持语音消息的渠道上希望 Nanobot 能"说回来"，补齐对话闭环。当前缺失导致在语音 IM 渠道里只能"读出"文字，体验割裂。
- **#5275（Matrix thread）** 在 Matrix 房间中，用户使用 **reply in thread** 后，Nanobot 持续在 thread 内回复且上下文不断累积；用户期望与 Discord/Slack 的 thread 行为一致——每次 thread 是独立上下文。这反映出**多渠道一致性**已成为阻碍规模化采用的关键体验门槛。
- **#5348（CI 时区 bug）** 用户以美中时间 22:00–03:00 复现该问题，揭示出**测试时区处理未与运行时一致**导致的跨区域 CI 不可靠问题。
- **#5327（推理重复）** 用户反馈"随机"出现同一句话重复多次，干扰使用且难以定位 root cause，说明**推理流的可观测性**（turn log、stream event replay）仍有改进空间——这一点恰好与 PR #5291（persist subagent conversation transcripts）的目标契合。
- **#5295（Docker 部署）** 用户按官方 deployment.md 操作即遇到权限问题，反映**默认安全策略（root + capability drop）**对开箱即用体验造成摩擦。

**满意度信号：** Issue 关闭率（4/8 = 50% 在 24h 内被关闭/合入对应 PR）显示用户报告能在合理时间窗口内被响应，社区维护反馈循环健康。

---

## 📋 待处理积压

### 长期未响应 / 优先级高的开放项

| 类型 | 编号 | 标题 | 创建日期 | 优先级 | 备注 |
|---|---|---|---|---|---|
| Feature | [#4010](https://github.com/HKUDS/nanobot/issues/4010) | text-to-speech / voice output support | 2026-05-26 | — | 持续 2.5+ 月未明确动作，3 个 👍 |
| PR (P1) | [#5204](https://github.com/HKUDS/nanobot/pull/5204) | refactor(providers): declare Responses capabilities | 2026-08-01 | P1 | 已标记 conflict，chengyongru 主推，需解决冲突后合入 |
| PR (P1) | [#5291](https://github.com/HKUDS/nanobot/pull/5291) | fix(agent): persist subagent conversation transcripts | 2026-08-07 | P2（功能影响大） | 解决 subagent 不可审计问题，conflict 标记 |
| PR (P0) | [#5271](https://github.com/HKUDS/nanobot/pull/5271) | fix(session): prevent stale background task saves from overwriting session data | 2026-08-06 | P0 | 最高严重度，建议优先 review |
| PR | [#4329](https://github.com/HKUDS/nanobot/pull/4329) | feat(cli): native TypeScript terminal UI | 2026-06-13 | — | 已挂起近 2 个月，conflict 标记，长期未推进 |
| Issue | [#5275](https://github.com/HKUDS/nanobot/issues/5275) | Matrix messaging streams for "reply in thread" | 2026-08-06 | — | 已有相关 PR #5292 但仅覆盖 room-level 部分 |
| Issue | [#5350](https://github.com/HKUDS/nanobot/issues/5350) | QwenCloud provider path | 2026-08-12 | — | 当日新开，尚待维护者确认 |
| Issue | [#5348](https://github.com/HKUDS/nanobot/issues/5348) | token-usage settings tests 时区闪烁

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-08-13**
**仓库：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日呈**高活跃度**状态，24 小时内 Issues/PRs 各更新 50 条，无新版本发布。**核心主线明显由 `teknium1` 主导推进 "Plugin Interface Expansion" 战略**，今日集中提交了 10+ 个相关 PR（涵盖 manifest v2、插件索引、@prefix 上下文、事件总线、消息注入等），形成可观的合并前队列。**值得关注的是两条 P1 Bug 同时浮现**——Windows 桌面端重启导致消息网关静默，以及 `clarify` 工具绑定失败使回合挂起——叠加 P2 安全修复（kanban worker 自动批准漏洞），表明稳定性和安全面正成为近期焦点。整体健康度：⭐⭐⭐⭐（功能爆发 vs 稳定性承压）。

---

## 2. 版本发布

无新版本发布。Hermes 当前流通版本为 **v0.20.0**（社区报告中仍被广泛引用）。

---

## 3. 项目进展

**今日合并/关闭的 Issues（14 条关闭）** 集中体现了 "Plugin Interface Expansion" 主题的阶段性落地：

| Issue | 类型 | 影响 |
|---|---|---|
| [#64174](https://github.com/NousResearch/hermes-agent/issues/64174) | feat: 通过插件注册的辅助模型插槽路由 ctx.llm | 完成 #44673，推进插件 LLM 调用路径 |
| [#64180](https://github.com/NousResearch/hermes-agent/issues/64180) | docs: Pi + OpenCode 插件架构研究 | 为设计决策提供参考 |
| [#64177](https://github.com/NousResearch/hermes-agent/issues/64177) | fix: secret-source 插件启动时序 + 文档 | 闭合已交付的密钥源接口剩余缺口 |
| [#64900](https://github.com/NousResearch/hermes-agent/issues/64900) | feat: 允许插件扩展 send_message schema | 解锁平台插件自定义发送参数 |
| [#64162](https://github.com/NousResearch/hermes-agent/issues/64162) | feat: 可插拔审批传输 + 审批策略 | 引入 ApprovalTransport / ApprovalPolicy 接口 |
| [#64179](https://github.com/NousResearch/hermes-agent/issues/64179) | feat: 插件 API 版本化与稳定性契约 | v1 插件契约形式化 + 兼容测试套件 |
| [#64167](https://github.com/NousResearch/hermes-agent/issues/64167) | feat: 缓存安全的上下文注入 | 落实 #50203 / RFC #58547 |
| [#64227](https://github.com/NousResearch/hermes-agent/issues/64227) | feat: config & state 桥接 | 插件停止使用原始文件 I/O |
| [#64230](https://github.com/NousResearch/hermes-agent/issues/64230) | feat: 插件开发者工具链 | Plugin Doctor 升级 + `hermes plugins new` 脚手架 |
| [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) | fix: Windows atomic_replace 静默丢写 | 修复 ERROR_SHARING_VIOLATION 导致的并发写丢失 |

**关闭的 PRs（6 条）：**
- [#82961](https://github.com/NousResearch/hermes-agent/pull/82961) VoxCPM TTS 提供商 — 已关闭（未合并）
- [#84935](https://github.com/NousResearch/hermes-agent/pull/84935) npm 自动修复 lint — Bot 自动合并

**进展评估：** 插件接口一期全面清账 + Windows 并发文件 I/O 修复，**主线推进约 8-10% 里程碑**；但 44 条 PR 待合并形成积压，需关注 review 吞吐。

---

## 4. 社区热点

### 4.1 最热门讨论

🥇 **[#6839 — Lazy Tool Schema Loading（39 评论，18 👍）](https://github.com/NousResearch/hermes-agent/issues/6839)**
提案"两遍式工具注入"以减少 token 开销。背景：当前每次 API 调用注入全部 50+ 工具的完整 schema，单次消耗 3,500-5,000 tokens；本地模型上 tool-formatting 成本尤为突出**。**
- 标签：`needs-decision`、`area/usage-cost`、`P2`
- **诉求本质**：成本控制 + 本地模型可用性
- **建议处理**：高 👍 数反映强烈社区共识，应优先纳入路线图

🥈 **[#64182 — Plugin Interface Expansion 跟踪 Issue（33 评论）](https://github.com/NousResearch/hermes-agent/issues/64182)**
7 月社区创意蒸馏出的官方插件扩展路线图，是今日 10+ PR 的"母议题"。多个子 issue 今日关闭。

🥉 **[#64231 — Lifecycle-Event Catalog 与 Hook 分类（24 评论）](https://github.com/NousResearch/hermes-agent/issues/64231)**
定义一致的 hook 接受标准，对积压的 observer-hook PR 做批量裁决。

### 4.2 自动化告警

**[#66616 — Skills 索引陈旧（degraded，19 评论）](https://github.com/NousResearch/hermes-agent/issues/66616)**
索引 29.8h 超阈值（26h），由 `.github/workflows/skills-index.yml` 6/18-UTC cron 重建失败导致。属基础设施层问题。

### 4.3 Discord 功能对齐活动

**[#79564 — Discord API v10 功能对齐活动（3 评论）](https://github.com/NousResearch/hermes-agent/issues/79564)**
andrexibiza 发起的元议题，目标是将 Discord 表面对齐官方 v10 + discord.py 2.7.1。

### 4.4 Webhook 改革活动

**[#84834 — Webhook Revolution graph-gated 修复活动（3 评论）](https://github.com/NousResearch/hermes-agent/issues/84834)**
覆盖 ingress / 执行 / 投递 / 配置 / UI / 部署 / 文档全链路的 5×2×3 修复计划。对应 PR [#84939](https://github.com/NousResearch/hermes-agent/pull/84939)（delivery mixin 抽取）已开。

---

## 5. Bug 与稳定性

### 🚨 P1 严重（影响生产可用性）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#83683](https://github.com/NousResearch/hermes-agent/issues/83683) | Desktop 重启终止 gateway 但不再拉起，导致 WeChat/QQ/Telegram 全静默（**回归**） | OPEN（9 评论） | ❌ 无 |
| [#78069](https://github.com/NousResearch/hermes-agent/issues/78069) | `clarify` 工具自由文本响应间歇性绑定失败，回合挂起 | OPEN（9 评论） | ❌ 无（已被 [#82975](https://github.com/NousResearch/hermes-agent/issues/82975) 作为 follow-up） |

### ⚠️ P2 中等（功能受损 / 体验降级）

| Issue | 标题 | 状态 | Fix PR |
|---|---|---|---|
| [#83427](https://github.com/NousResearch/hermes-agent/issues/83427) | `browser_exec` 在 PYTHONPATH 指向 Hermes venv 时崩溃（pydantic_core 缺失） | OPEN（4 评论） | ❌ 无 |
| [#83390](https://github.com/NousResearch/hermes-agent/issues/83390) | DeepSeek 辅助 title_generation 失败：HTTP 400 "response_format unavailable" | OPEN（2 👍） | ❌ 无 |
| [#84206](https://github.com/NousResearch/hermes-agent/issues/84206) | `@file:` 上下文扩展假定 UTF-8，本地编码（GBK/Shift_JIS/CP932/Big5）CSV/TXT 报错 | OPEN（2 评论） | ❌ 无 |
| [#81039](https://github.com/NousResearch/hermes-agent/issues/81039) | Windows：每个子进程弹出控制台窗口（serve/gateway/desktop 后端） | CLOSED | ✅ 部分 fix 见 [#84936](https://github.com/NousResearch/hermes-agent/pull/84936) |
| [#57775](https://github.com/NousResearch/hermes-agent/issues/57775) | Windows `atomic_replace` 静默丢写 | CLOSED | ✅ |
| [#11359](https://github.com/NousResearch/hermes-agent/pull/11359) | Discord 语音消息波形渲染（PR 形式） | OPEN PR | 🔄 |

### 🔧 P3（次要）

- [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) CLI updater 在浅克隆下信任 `rev-list --count`（与 #51922 桌面端已修复同类）
- [#71331](https://github.com/NousResearch/hermes-agent/issues/71331) install.sh 在 Termux + Python 3.14+ 失败
- [#84931](https://github.com/NousResearch/hermes-agent/pull/84931) MCP 跨重试保留工具尝试 ID — 已有 fix PR ✅
- [#84933](https://github.com/NousResearch/hermes-agent/pull/84933) CDPSupervisor 每次 attach 泄漏一个 tab — 已有 fix PR ✅

**安全告警**：[#55946](https://github.com/NousResearch/hermes-agent/pull/55946) — kanban worker 子进程绕过 `approval.py` 所有上下文检查，**静默自动批准任何非 hardline 危险命令**。该 P2 安全 PR 当前开放未合并，**建议优先 review**。

---

## 6. 功能请求与路线图信号

### 高潜力（社区已投票 / 已有相关 PR）

| 提案 | 信号 | 入版可能性 |
|---|---|---|
| [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) Lazy Tool Schema Loading | 18 👍 / 39 评论 / 直接节省 token 成本 | ⭐⭐⭐⭐⭐ 高 |
| [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) Desktop 多 Gateway 连接（标签页） | 7 👍 / 跨 VPS/家庭服务器/Mac Mini 用户刚需 | ⭐⭐⭐⭐ |
| [#46257](https://github.com/NousResearch/hermes-agent/issues/46257) Xiaomi MiMo-V2.5 TTS/ASR | 中文场景首选语音模型；与已关闭的 #43700 关联 | ⭐⭐⭐ |
| [#84921](https://github.com/NousResearch/hermes-agent/issues/84921) Desktop `display.autolink_urls` 关闭自动转链 | 简单配置项 | ⭐⭐⭐⭐ |

### 创新性提案（观察中）

[#38275](https://github.com/NousResearch/hermes-agent/issues/38275) **HAMP — Agent Address System + 异步消息 + 加密身份**
针对 A2A 的三个真实缺口：无可寻址（agent@domain 缺失）、无可离线收件箱、无加密身份。属长期愿景，需 RFC 形态讨论。

### 已被合并 / 正在路上

`teknium1` 今日连开 10 个插件系统 PR（[#84916](https://github.com/NousResearch/hermes-agent/pull/84916) manifest v2、[#84919](https://github.com/NousResearch/hermes-agent/pull/84919) 社区插件索引、[#84937](https://github.com/NousResearch/hermes-agent/pull/84937) 插件 @prefix、[#84923](https://github.com/NousResearch/hermes-agent/pull/84923) 所有权账本、[#84934](https://github.com/NousResearch/hermes-agent/pull/84934) pre_transcription hook、[#84914](https://github.com/NousResearch/hermes-agent/pull/84914) pre_command + ctx.call_mcp、[#84929](https://github.com/NousResearch/hermes-agent/pull/84929) ctx.inject_message、[#84927](https://github.com/NousResearch/hermes-agent/pull/84927) 重写模式注册表、[#84932](https://github.com/NousResearch/hermes-agent/pull/84932) 插件事件总线、[#84917](https://github.com/NousResearch/hermes-agent/pull/84917) session-librarian 技能）——预计下一个版本将集中整合。

---

## 7. 用户反馈摘要

**主要痛点：**

1. **平台稳定性回归** — 用户明确指出 Windows Desktop 重启是 v0.20.0 引入的回归（[#83683](https://github.com/NousResearch/hermes-agent/issues/83683)），影响 WeChat/QQ/Telegram 三端，"before this version" 之前工作良好。说明发行前回归测试覆盖不足。

2. **成本敏感度** — [#6839](https://github.com/NousResearch/hermes-agent/issues/6839) 39 条评论一致反映：本地模型用户难以承担全量 schema 注入。`area/usage-cost` 标签暗示这是**全局性问题**而非个案。

3. **多平台体验不一致** — `clarify` 工具失败在 Discord（#78069）和 Telegram（#82975）以**不同模式**触发相同症状，提示同一根因可能跨多个 platform adapter 传播。

4. **本地化体验缺口** — `#46257`（中文 TTS/ASR）与 `#84206`（非 UTF-8 编码 CSV/TXT 失败）共同显示 i18n/locale 处理仍是盲区。

5. **开发者工作流摩擦** — [#45779](https://github.com/NousResearch/hermes-agent/issues/45779) 表明"多机部署但单桌面控制"是当前架构的明显短板。

**积极信号：**
- VoxCPM TTS（[#82961](https://github.com/NousResearch/hermes-agent/pull/82961)）虽被关闭，反映社区对**本地优先语音栈**的兴趣强烈
- Discord API v10 功能对齐活动（[#79564](https://github.com/NousResearch/hermes-agent/issues/79564)）和 Webhook Revolution（[#84834](https://github.com/NousResearch/hermes-agent/issues/84834)）显示生态建设意愿

---

## 8. 待处理积压

维护者需关注的**沉默议题**：

| Issue | 创建 | 沉默时长 | 备注 |
|---|---|---|---|
| [#38275](https://github.com/NousResearch/hermes-agent/issues/38275) HAMP Agent Address System | 2026-06-03 | ~2.5 个月 | 0 👍，创新性议题但无进展 |
| [#53479](https://github.com/NousResearch/hermes-agent/issues/53479) CLI updater rev-list 信任问题 | 2026-06-27 | ~7 周 | 与桌面端已修复同类 #51922，CLI 未跟进 |
| [#46257](https://github.com/NousResearch/hermes-agent/issues/46257) Xiaomi MiMo-V2.5 TTS/ASR | 2026-06-14 | ~

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报

**日期：2026-08-13**
**数据周期：过去 24 小时**
**报告分析师：开源项目观察站**

---

## 1. 今日速览

PicoClaw 仓库在过去 24 小时内整体活跃度偏低，处于**轻度停滞**状态。Issues 端仅有的 2 条更新均为存量 Issue 被 GitHub 标记为 `stale`（陈旧），并非新讨论产生；PR 端有 3 条仍处于待合并状态，无任何合并、关闭或新评论。**当日 0 新版本发布、0 PR 合并、0 Issue 关闭**，项目节奏明显放缓。值得关注的信号是：3 条待合并 PR 均涉及较核心的功能修复与扩展（路由上下文管理、Telegram 私聊话题、Exa 搜索），但缺少维护者介入，推进进度停滞。

---

## 2. 版本发布

⚪ **无新版本发布**

过去 24 小时未检测到任何 Release / Tag 变更，最新公开版本仍为社区报告中提到的 `v0.3.1`。

---

## 3. 项目进展

📉 **过去 24 小时：0 PR 合并 / 0 PR 关闭**

三条待合并 PR 均停留在「已提交，等待审阅」阶段，自创建以来未产生任何评论或点赞，亦未触发 CI 互动信号：

| PR | 标题 | 提交日期 | 已等待 |
|---|---|---|---|
| [#3316](https://github.com/sipeed/picoclaw/pull/3316) | fix: routed-agent context management | 08-03 | 10 天 |
| [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | 08-03 | 10 天 |
| [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | 07-26 | 18 天 |

**健康度评估**：三条 PR 中 [#3299](https://github.com/sipeed/picoclaw/pull/3299) 已悬置 18 天，超过一般开源项目的响应 SLA（7-14 天），存在被遗忘的风险。

---

## 4. 社区热点

🔥 **今日无新增讨论热度**，最活跃的载体仍是两条存量 Issue，二者均拥有 4 条评论与 1 个 👍：

- 🥇 [#3269](https://github.com/sipeed/picoclaw/issues/3269) — MCP server 连接失败导致 agent loop 挂死（创建 07-20，4 评论，1 👍）
- 🥇 [#3281](https://github.com/sipeed/picoclaw/issues/3281) — Web UI 长历史会话输入卡顿（创建 07-21，4 评论，1 👍）

**诉求分析**：
- 用户痛点集中在 **「生产可用性」** 与 **「交互流畅度」** 两个维度，前者影响系统可靠性，后者影响日常使用体验。两者都属于会直接劝退新用户的体验门槛问题，但点赞数仅 1 个，说明**社区扩散度有限**，未形成高热度议题。

---

## 5. Bug 与稳定性

按严重程度排序：

| 等级 | Issue | 描述 | 影响范围 | 是否有 Fix PR |
|---|---|---|---|---|
| 🔴 **High** | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP server 连接失败时 agent loop 挂死，聊天接口停止响应 | 整个聊天会话（致命阻塞） | ❌ 无 |
| 🟠 **Medium** | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 在历史会话较长时输入框响应极慢 | Web UI 用户（性能/UX） | ❌ 无 |

**观察**：两条 Bug 均已存在 20 天以上且无对应修复 PR 进入仓库，**项目当前 Bug 修复链路处于脱节状态**，维护者应优先对 #3269（高严重度）进行 triage 并贴标签 `priority:high`。

---

## 6. 功能请求与路线图信号

以下三条 PR 揭示了社区贡献者认为「应当被纳入」的功能方向：

1. **Web 搜索能力扩展** — [#3299](https://github.com/sipeed/picoclaw/pull/3299) 引入 Exa 作为原生 `tools.web` / `web_search` 提供方，附带 `d/w/m/y` 时间范围过滤。这与 [#3299](https://github.com/sipeed/picoclaw/pull/3299) 自身实现完整度较高（含配置项）有关，若维护者 review 通过，可成为下个 minor 版本的功能卖点。
2. **Telegram 集成边界扩展** — [#3315](https://github.com/sipeed/picoclaw/pull/3315) 修复私聊机器人在 forum topic 模式下的 topic 识别，反映社区对**多场景 Telegram 部署**的真实需求。
3. **路由 Agent 上下文机制修复** — [#3316](https://github.com/sipeed/picoclaw/pull/3316) 是对分发路由 Agent 的上下文/摘要/压缩/Seahorse 引导逻辑的整体修复，属于**质量层改进**，不引入新特性。

**预测**：若维护者本周介入，#3299 与 #3316 最有可能被打包进入下一版本（因其面向公共能力扩展与质量保证）。

---

## 7. 用户反馈摘要

从 [#3269](https://github.com/sipeed/picoclaw/issues/3269) 与 [#3281](https://github.com/sipeed/picoclaw/issues/3281) 的公开评论中可提炼：

| 用户 | 使用场景 | 痛点 | 满意度 |
|---|---|---|---|
| ruiyigen | 使用 nightly 版本 + Qwen3 模型 | MCP server 接入失败导致整个会话不可用，必须重启 | ❌ 强烈不满（生产阻塞） |
| xpader | Web UI 用户，PicoClaw 0.3.1 | 长会话历史下输入框卡顿，影响正常对话节奏 | ❌ 不满（日常摩擦） |

**共性关键词**：**稳定性缺失**、**会话生命周期脆弱**、**Web 端性能瓶颈**。两项反馈均指向「**会话层**」的核心可靠性，说明会话管理是当前最薄弱的工程环节。

---

## 8. 待处理积压

⏰ 提醒维护者关注以下超期未响应项：

| 类型 | 编号 | 标题 | 等待时长 | 风险 |
|---|---|---|---|---|
| PR | [#3299](https://github.com/sipeed/picoclaw/pull/3299) | Add native Exa web search provider | **18 天** | 🔴 即将被作者放弃 |
| Issue | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 连接失败导致 agent loop 挂死 | 24 天 | 🔴 高严重度未响应 |
| Issue | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入卡顿 | 23 天 | 🟠 无修复进度 |
| PR | [#3316](https://github.com/sipeed/picoclaw/pull/3316) | routed-agent context management fix | 10 天 | 🟡 缺少 review |
| PR | [#3315](https://github.com/sipeed/picoclaw/pull/3315) | Support topics in private bot chats | 10 天 | 🟡 缺少 review |

**建议**：维护者应在本周内对 [#3299](https://github.com/sipeed/picoclaw/pull/3299) 与 [#3269](https://github.com/sipeed/picoclaw/issues/3269) 给出明确反馈（合并/拒绝/triage 标签），以避免贡献者流失与社区信任损耗。

---

## 📊 项目健康度评分（24h 维度）

| 维度 | 评分 | 说明 |
|---|---|---|
| 开发活跃度 | ⭐⭐☆☆☆ | 无 PR 合并，无新版本 |
| 社区响应度 | ⭐⭐☆☆☆ | 陈旧 Issue 未清理，PR 长期挂起 |
| Bug 处理速度 | ⭐☆☆☆☆ | 两条 Bug 20+ 天无修复 |
| 贡献者活跃度 | ⭐⭐⭐☆☆ | 仍有社区 PR 提交，但维护者缺席 |
| **综合** | **⭐⭐☆☆☆ 偏低** | 建议维护者集中清理积压 PR/Issue |

---

*报告基于 GitHub 公开数据自动生成，数据时点：2026-08-13。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>



</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报 · 2026-08-13

> 数据源：[github.com/nearai/ironclaw](https://github.com/nearai/ironclaw)
> 统计窗口：过去 24 小时（截至 2026-08-13）

---

## 1. 今日速览

IronClaw 在过去 24 小时内共录得 **41 条 Issue 更新（29 新开/活跃 + 12 关闭）** 和 **50 条 PR 更新（31 待合并 + 19 已关闭/合并）**，并集中发布了 **v1.2.0-rc.2 与 v1.2.0-rc.3** 两个 Release Candidate，整体活跃度处于 **高水位**。从结构看，本日主要工作集中在三块：(a) **Reborn 框架的稳定性收敛**（loop-host / token estimator / context window / 重构治理）；(b) **WebUI 设计系统与 OOBE 入职体验**（Storybook / `@ironclaw/ui` 包 / 频道优先策略）；(c) **Telegram 通道的密集 Bug Bash**（QA 一次性新增 10+ 个 P1–P3 缺陷）。版本节奏正稳步推进 1.2.0-rc 系列，社区治理与产品体验两条线并行发力，项目健康度评估为 **良好**。

---

## 2. 版本发布

### 🚢 [ironclaw-v1.2.0-rc.3](https://github.com/nearai/ironclaw/releases/tag/1.2.0-rc.3) · 2026-08-12

- **修复**：运行时容器镜像（runtime container image）现在显式安装 `curl`，使容器内 HTTP 健康检查可执行；此前镜像未携带 HTTP 客户端，编排器通过 `curl -fsS http://localhost:3000/` 探测 worker 时无法运行，导致容器永远无法被标记为健康。
- **关联 PR**：[#7555](https://github.com/nearai/ironclaw/pull/7555) — 由 [@henrypark133](https://github.com/henrypark133) 提交，从 `release/1.1.0-rc.1`（[#7303](https://github.com/nearai/ironclaw/pull/7303)）前向移植。
- **影响面**：所有使用 hosted orchestrator 做 liveness/readiness probe 的部署；属于 silent-failure 修复，建议所有 RC 用户升级。

### 🚢 [ironclaw-v1.2.0-rc.2](https://github.com/nearai/ironclaw/releases/tag/1.2.0-rc.2) · 2026-08-12

- **修复**：Windows 首次启动时的文件系统发布现在使用 **原生原子重命名** 语义而非硬链接，并兼容不支持的目录同步。
- **修复**：Release 冒烟测试现在保留用于保护 standalone secrets 密钥的 Windows 账户身份，并隔离 worker。
- **影响面**：仅影响 Windows 安装路径；属于兼容性 / 安全性修复，无破坏性变更。

### ⚠️ 已知发布阻塞

[PR #7560](https://github.com/nearai/ironclaw/pull/7560)（`fix(release): retry the dist installer download`，已关闭）记录了 v1.2.0-rc.3 在 `x86_64-unknown-linux-musl` 阶段因 `curl: (56) Connection died` 失败；修复已合并，下个 RC 应能消除该 flaky 路径。

---

## 3. 项目进展

以下 PR 已在过去 24 小时内关闭 / 合并，对项目向前推进有实质贡献：

| # | PR | 主题 | 战略意义 |
|---|---|---|---|
| [#7555](https://github.com/nearai/ironclaw/pull/7555) | fix(docker): install curl so orchestrator healthchecks can run | 容器健康检查从「永远失败」变为「可观测」 | 基础设施可用性 |
| [#7560](https://github.com/nearai/ironclaw/pull/7560) | fix(release): retry the dist installer download | 消除 RC 发布链的 flaky 网络失败 | 发布工程稳健性 |
| [#7550](https://github.com/nearai/ironclaw/pull/7550) | feat(extensions): per-field help text on admin configuration forms + Telegram 文档重写 | Admin → Configuration 表单增加 `description` 提示；Telegram manifest 首吃螃蟹 | 运维自助化 |
| [#7427](https://github.com/nearai/ironclaw/pull/7427) | release: prepare 1.1.1-rc.1 | 将 IronHub / custom MCP / WebUI / retrieval / 凭证 / Slack / Telegram 紧急修复回移植到 1.1 线 | 长期维护分支 |
| [#5503](https://github.com/nearai/ironclaw/pull/5503) | [Experiment] Add compact Google extension capabilities | Gmail `fetch_message_summaries`、Calendar 等上下文高效能力 | 第三方扩展生态 |
| [#6836](https://github.com/nearai/ironclaw/pull/6836) | feat(webui): `@ironclaw/ui` and workspace refactor | WebUI 设计系统作为 workspace package 重新衍生（取代 #5563 / #6830） | 设计系统底座 |

**已关闭的 Issue 体现的修复深度**：

- [#7407](https://github.com/nearai/ironclaw/issues/7407) — `invoke_capability_batch` 真正并发执行 `BatchPolicy::Parallel`（bounded），agent loop 的并行策略终于落地。
- [#7484](https://github.com/nearai/ironclaw/issues/7484) — 修复上下文窗口静默驱逐任务：固定 user message、驱逐后 compact、重审 128 条消息上限。
- [#7485](https://github.com/nearai/ironclaw/issues/7485) — token estimator 对 ASCII **double-count**，统一两个估计器，使上下文窗口有效利用率回归正常。
- [#5508](https://github.com/nearai/ironclaw/issues/5508) — Slack 投递目标在已连接状态下被错误报告为未配置。
- [#6541](https://github.com/nearai/ironclaw/issues/6541) — WebUI 持续弹出 "Reconnecting" 假通知（v1 启动清单项）。
- [#7302](https://github.com/nearai/ironclaw/issues/7302) — 工具调用失败时的 UI 不再「激进报错」。
- [#7383](https://github.com/nearai/ironclaw/issues/7383) — 跟踪 `tool_disclosure_port.rs`（~4,425 行）分解任务，符合架构规则 #5。

> 综合判断：**loop-host 这一层的核心可靠性问题（context eviction / token estimation / 并行策略）一次性收敛**，是本日最大进展。

---

## 4. 社区热点

按评论数 / 关注度排序：

| 排名 | # | 标题 | 评论 | 👍 | 性质 |
|---|---|---|---|---|---|
| 🥇 | [#7360](https://github.com/nearai/ironclaw/issues/7360) | Expand stress coverage across built-in and durable write paths | 3 | 0 | epic · 性能 / e2e 覆盖 |
| 🥈 | [#7407](https://github.com/nearai/ironclaw/issues/7407) | Execute `BatchPolicy::Parallel` concurrently | 3 | 0 | 已关闭 · 性能 |
| 🥉 | [#7554](https://github.com/nearai/ironclaw/issues/7554) | Custom MCP server 添加流程显示验证错误 | 1 | 0 | bug · 用户反馈（Slack） |
| 4 | [#7484](https://github.com/nearai/ironclaw/issues/7484) | fix(loop): 上下文窗口静默驱逐任务 | 1 | 0 | 已关闭 · bug |
| 5 | [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack 投递目标未找到 | 1 | 0 | 已关闭 · QA |
| 6 | [#6541](https://github.com/nearai/ironclaw/issues/6541) | WebUI 持续 reconnecting | 1 | 0 | 已关闭 · v1 清单 |
| 7 | [#7517](https://github.com/nearai/ironclaw/issues/7517) | Cloud.near.ai：允许 Google/GitHub 登录的 staking 路径 | 1 | 0 | 增强 · 用户反馈 |

**诉求分析**：

- **性能与覆盖**：`#7360` 指出 nightly API-capacity 压测的 mock model 永远返回无 tool-call 的最终回复，导致内置能力写入路径的回归无法被 harness 触发——属于「**测试基础设施滞后于产品能力**」的典型信号。
- **能力完整性**：`#7407` 揭示 agent loop 已经在 *策略层* 计算出并行批，但 *端口层* 仍是串行；说明框架意图已先于实现，存在「设计-执行鸿沟」。
- **多渠道接入摩擦**：`#7554`（Custom MCP 验证错误）与 `#7517`（第三方登录用户无法质押）均来自真实用户，反映出 **新用户首装的可用性痛点**。

---

## 5. Bug 与稳定性

今日新增 / 活跃的 Bug 集中来自 **8 月 Bug Bash**，按严重度排序：

### 🔴 P1 — 核心路径阻塞

| # | 标题 | 状态 | 关联 PR |
|---|---|---|---|
| [#7538](https://github.com/nearai/ironclaw/issues/7538) | Telegram 收到 GIF / sticker 后 agent 完全卡死 | OPEN | — |
| [#7536](https://github.com/nearai/ironclaw/issues/7536) | 多用户访问流程破坏：附加用户得到 "Invalid secret" | OPEN | — |
| [#7535](https://github.com/nearai/ironclaw/issues/7535) | 保存 Telegram bot 配置后 webhook 未激活 | OPEN | — |

### 🟠 P2 — 体验降级

| # | 标题 | 状态 |
|---|---|---|
| [#7554](https://github.com/nearai/ironclaw/issues/7554) | Custom MCP 添加流程验证错误 | OPEN |
| [#7541](https://github.com/nearai/ironclaw/issues/7541) | Agent 无法将生成文件作为 Telegram 附件回传 | OPEN |
| [#7539](https://github.com/nearai/ironclaw/issues/7539) | Telegram 消息在 agent 启动后才出现，顺序错乱 | OPEN |
| [#7540](https://github.com/nearai/ironclaw/issues/7540) | 长 Telegram 消息被切分，只有第一段被处理 | OPEN |
| [#7451](https://github.com/nearai/ironclaw/issues/7451) | Telegram agent 错误地索要凭证 | OPEN |
| [#7542](https://github.com/nearai/ironclaw/issues/7542) | Agent 不识别当前对话已在 Telegram 通道 | OPEN |
| [#7545](https://github.com/nearai/ironclaw/issues/7545) | Agent 在多代币查询时错误声称无实时行情数据 | OPEN |
| [#7544](https://github.com/nearai/ironclaw/issues/7544) | Agent 把内部推理 / 规划直接输出给用户 | OPEN |
| [#7543](https://github.com/nearai/ironclaw/issues/7543) | Telegram routine 首次执行未投递 | OPEN |
| [#7508](https://github.com/nearai/ironclaw/issues/7508) | GitHub MCP 启动时给出令人困惑的端点验证提示 | OPEN |

### 🟡 P3 — 轻微问题

| # | 标题 | 状态 |
|---|---|---|
| [#7546](https://github.com/nearai/ironclaw/issues/7546) | Agent 完全不响应 Telegram sticker | OPEN |

### 🟢 已修复（本日）

| # | 标题 |
|---|---|
| [#5508](https://github.com/nearai/ironclaw/issues/5508) | Slack delivery target 报告错误 |
| [#6541](https://github.com/nearai/ironclaw/issues/6541) | WebUI 持续 reconnecting |
| [#7407](https://github.com/nearai/ironclaw/issues/7407) | 串行执行并行批 |
| [#7484](https://github.com/nearai/ironclaw/issues/7484) | 上下文窗口静默驱逐 |
| [#7485](https://github.com/nearai/ironclaw/issues/7485) | Token estimator double-count ASCII |
| [#7302](https://github.com/nearai/ironclaw/issues/7302) | 工具失败 UI 过于激进 |

### 🟠 平台运维类

- [#7547](https://github.com/nearai/ironclaw/issues/7547) — `agent-stg.near.ai` 实例 "wise-jay-voros" 升级在 egress apply 步骤失败（**v1 启动清单项**，P3 标记但实际阻塞发布流）。

> **观察**：Telegram Bug Bash 一日新增 11 个 Issue，但目前 **0 个修复 PR 入站**。维护者需尽快 triage，否则将影响 v1.2 GA 时间表。

---

## 6. 功能请求与路线图信号

| 请求 | 来源 Issue | 关联 PR / Epic | 路线图研判 |
|---|---|---|---|
| **通用 per-request thinking/effort 控制**

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-08-13** | **数据源：github.com/netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日呈现"版本冲刺 + 长期积压"的双重状态：在过去 24 小时内，仓库集中处理了 7 个 PR（含 2026.8.12 发布准备 PR #2480）以及关闭 2 条历史 Issue，但 Issues 整体活跃度依然偏低，6 条更新中 5 条为 `[stale]` 标记的历史问题（最早可追溯至 3 月），新问题反馈渠道近乎停滞。值得注意的是，仍有 1 条 PR（#1181，自 4 月起）长期未合并，且出现用户对"卸载后程序仍可运行并发送飞书消息"的安全性质疑（#1173），需要维护团队关注。

---

## 2. 版本发布

**今日无新版本发布。**

但从已合并的 PR #2480（`Release/2026.8.12`）来看，团队已为 2026.8.12 版本完成了发布准备工作，预计近期会发布。涉及内容详见下文"项目进展"部分。

---

## 3. 项目进展

今日 7 个 PR 全部关闭/合并，覆盖渲染层、协作模块、主进程三大领域，整体反映出团队在 **UI 一致性、Windows 平台稳定性、模型选择体验** 方面的持续打磨。

### 核心合并 PR

| PR | 模块 | 描述 | 链接 |
|---|---|---|---|
| #2480 | renderer/main | **Release/2026.8.12 发布准备** | [PR #2480](https://github.com/netease-youdao/LobsterAI/pull/2480) |
| #2482 | renderer | Skills 管理器拆分为"我的/内置"两个 Tab | [PR #2482](https://github.com/netease-youdao/LobsterAI/pull/2482) |
| #2481 | renderer/cowork | 任务搜索框移至 Header Actions（图标化，跨平台对齐） | [PR #2481](https://github.com/netease-youdao/LobsterAI/pull/2481) |
| #2479 | main | 修复 Windows 安装插件时因 `EPERM` symlink 失败导致依赖 junction 丢失的问题 | [PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479) |
| #2478 | main | 修复 macOS/Windows 上 `extractIcon` 传入 `large` 不支持尺寸导致 fallback | [PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478) |
| #2475 | renderer | **修复模型选择器思考强度在模型间互斥的 Bug**（每个模型独立记忆思考档位） | [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475) |
| #1233 | main | 为模型提供商添加官网链接与 API Key 获取引导（中英文 i18n） | [PR #1233](https://github.com/netease-youdao/LobsterAI/pull/1233) |

**整体评估**：项目在 8.12 版本周期内向"跨平台一致性 + 模型体验精细化"方向稳步推进，单日合并量较高，但需注意 PR #1181 仍处 Open 状态（见第 8 节积压）。

---

## 4. 社区热点

今日 Issues 互动量较低（评论数均 ≤ 2），**无明显热点议题**。从话题分布看：

- **历史沉疴集中爆发**：3 条 3 月底 Issue（#1173、#1174、#1180）在今日被自动/手动重新激活（`stale` 标签更新），说明系统性问题长期未响应。
- **质量参差的话题**：
  - [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) — 3.31 强制沙箱讨论：用户因找不到关闭入口被迫回滚 3.30，反映出**新版本默认行为变更未配齐引导**。
  - [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) — 卸载后仍可运行的"安全后门"质疑：表达激烈，社区信任风险较高。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 高严重度
| Issue | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#1173](https://github.com/netease-youdao/LobsterAI/issues/1173) | **卸载后程序仍可运行并向飞书发消息**（用户质疑为后门） | OPEN / stale | ❌ 无 |
| [#1180](https://github.com/netease-youdao/LobsterAI/issues/1180) | 修改自建 Agent 触发网关反复重启 | OPEN / stale | ❌ 无 |

### 🟡 中严重度
| Issue | 描述 | 状态 | 是否有 fix PR |
|---|---|---|---|
| [#2071](https://github.com/netease-youdao/LobsterAI/issues/2071) | 创建定时任务错误（v2026.5.27） | CLOSED / stale | ❌ 关闭无 PR 关联 |
| [#1236](https://github.com/netease-youdao/LobsterAI/issues/1236) | mcp-bridge 插件 entry key 与 manifest ID 不匹配，启动告警 | CLOSED / stale | ❌ 关闭无 PR 关联 |
| [#1179](https://github.com/netease-youdao/LobsterAI/issues/1179) | 3.31 强制沙箱无法关闭 | OPEN / stale | ❌ 无（用户回滚 3.30 规避） |

### 🟢 已修复
| PR | 描述 | 链接 |
|---|---|---|
| #2479 | Windows 安装插件时保留 junction 依赖 | [PR #2479](https://github.com/netease-youdao/LobsterAI/pull/2479) |
| #2478 | macOS/Windows 文件图标尺寸兼容 | [PR #2478](https://github.com/netease-youdao/LobsterAI/pull/2478) |
| #2475 | 模型思考档位跨模型独立（互斥 Bug 修复） | [PR #2475](https://github.com/netease-youdao/LobsterAI/pull/2475) |

**风险提示**：2 条高严重度 Issue（#1173、#1180）均无对应 fix PR，且 #1173 涉及用户安全信任，建议优先处理。

---

## 6. 功能请求与路线图信号

| 需求 | 来源 | 评估 |
|---|---|---|
| **多个自定义模型提供商** | [#1174](https://github.com/netease-youdao/LobsterAI/issues/1174) | 合理但无 PR 跟进；用户场景明确（保留旧 provider 切换新 provider），可纳入中短期路线图 |
| **为模型提供商添加官网链接与 API Key 引导** | [#1233](https://github.com/netease-youdao/LobsterAI/pull/1233)（已关闭/合并） | ✅ 已在 8.12 周期实现 |
| **Skills 管理器拆 Tab** | [#2482](https://github.com/netease-youdao/LobsterAI/pull/2482) | ✅ 已合并 |
| **隐藏 OpenClaw 主 Agent 会话** | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | ⚠️ PR 仍 OPEN（4 月起未合并） |

**信号判断**：产品路线图偏向 **UI 精细化 + 模型使用引导**；"多 Provider 管理"作为高价值需求尚未排期。

---

## 7. 用户反馈摘要

- **卸载残留问题（#1173）**：用户措辞激烈（"偷偷留后门"），即使非主观恶意，**卸载不彻底**是典型负面体验，对企业用户尤为敏感，需官方澄清。
- **强制沙箱无关闭入口（#1179）**：用户选择"回滚旧版本"作为应对方案，说明**新版本默认行为变更缺乏渐进式开关**，文档/UI 引导未跟上。
- **定时任务创建失败（#2071）**：用户附带了错误截图（v2026.5.27），关闭时无修复说明，社区可能继续踩坑。
- **自建 Agent 修改触发网关重启（#1180）**：用户通过"删除自建 agent"绕过，暴露出**配置变更的热更新稳定性**不足。
- **多 Provider 需求（#1174）**：体现用户对**模型灵活管理**的诉求，是个人/企业级 AI 助手的常见痛点。

---

## 8. 待处理积压

| 类别 | 编号 | 创建时间 | 描述 | 链接 |
|---|---|---|---|---|
| 🔴 高优先级积压 PR | #1181 | 2026-04-01 | 隐藏 OpenClaw 主 Agent 会话（已实现，但 PR 4 月至今未合并） | [PR #1181](https://github.com/netease-youdao/LobsterAI/pull/1181) |
| 🟠 安全信任类 Issue | #1173 | 2026-03-31 | 卸载后程序仍可运行 | [Issue #1173](https://github.com/netease-youdao/LobsterAI/issues/1173) |
| 🟠 稳定性 Issue | #1180 | 2026-03-31 | 修改自建 Agent 触发网关反复重启 | [Issue #1180](https://github.com/netease-youdao/LobsterAI/issues/1180) |
| 🟠 体验回退 Issue | #1179 | 2026-03-31 | 3.31 强制沙箱无关闭入口 | [Issue #1179](https://github.com/netease-youdao/LobsterAI/issues/1179) |
| 🟡 长期功能需求 | #1174 | 2026-03-31 | 多自定义模型提供商 | [Issue #1174](https://github.com/netease-youdao/LobsterAI/issues/1174) |

> **维护者提醒**：以上 5 条均产生于 3 月 31 日（v3.31 发布前后），**疑似该版本引入的回归与设计争议**。建议在 8.12 发布说明中明确回应，并优先合并 PR #1181（实现已完成，仅缺合入动作）。

---

## 附录：项目健康度速览

| 指标 | 数值 | 评价 |
|---|---|---|
| 日 PR 合并量 | 7 | 🟢 较高 |
| 日 Issue 关闭量 | 2 | 🟡 偏低（含 stale 自动关闭） |
| 新问题反馈 | 0 | 🔴 无新增反馈可能为流量下降或渠道问题 |
| Stale Issue 占比 | 5/6 (83%) | 🔴 长期响应机制需优化 |
| 跨平台修复占比 | 3/7 (43%) | 🟢 平台兼容仍是重点 |
| 待合并 PR 数 | 1 | 🟢 积压可控 |

**总体判断**：项目处于"版本发布冲刺期"，代码侧活跃度良好，但**用户支持侧响应链路存在明显脱节**，建议在 8.12 版本发布同期公开一次 Issue 集中回复。

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

# CoPaw (QwenPaw) 项目日报

**日期**：2026-08-13
**数据周期**：过去 24 小时

---

## 1. 今日速览

CoPaw 项目处于 **v2.1.0 Beta 冲刺阶段**，今日发布 v2.1.0-beta.4 版本，整体活跃度较高。过去 24 小时共产生 29 条 Issue 更新和 43 条 PR 更新，社区参与度持续高涨。然而值得关注的是，**PR #6956 当日合并了一个回归性 revert 操作**，回退了 #6816 的修复，提示主分支当前存在不稳定性。多个高优 Bug（智能体中途停顿、网络中断无法恢复、内存管道未实现等）持续涌入，且至少 5 个 Bug 已有对应修复 PR 在评审中。项目整体节奏在加快，但稳定性问题需要优先解决。

---

## 2. 版本发布

### v2.1.0-beta.4 已发布

🔗 https://github.com/agentscope-ai/QwenPaw/releases/tag/v2.1.0-beta.4

**主要变更：**
- `fix(files)`: 修复文件预览和暗色模式样式问题（[#6915](https://github.com/agentscope-ai/QwenPaw/pull/6915) by @rayrayraykk）
- `fix(tools)`: 修正 `read_file` 工具描述（[#6898](https://github.com/agentscope-ai/QwenPaw/pull/6898) by @AntiQuality）
- 版本号升级至 2.1.0b4

**注意事项：**
- 这是 Beta 预发布版本，不建议生产环境使用
- 已触发 [Release Duty 安装验证 Issue #6946](https://github.com/agentscope-ai/QwenPaw/issues/6946)，4 小时窗口期内验证各平台安装
- 上一版本 v2.1.0-beta.3 的 [Release Duty Issue #6914](https://github.com/agentscope-ai/QwenPaw/issues/6914) 今日已关闭

---

## 3. 项目进展

### 已合并/关闭的关键 PR

| PR | 标题 | 影响 |
|---|---|---|
| [#6956](https://github.com/agentscope-ai/QwenPaw/pull/6956) | **Revert "fix(chats): handle dict-like model responses"** | ⚠️ 回退 #6816 的修复，提示该修复可能引入了新问题，需重新审视 |
| [#6944](https://github.com/agentscope-ai/QwenPaw/pull/6944) | chore: update release notes for v2.1.0 | 发布说明更新 |
| [#6913](https://github.com/agentscope-ai/QwenPaw/pull/6913) | fix(computer-use): improve macOS element activation | macOS 端 Computer Use 元素激活（瞬态菜单/复合元素）稳定性提升 |
| [#6540](https://github.com/agentscope-ai/QwenPaw/pull/6540) | fix(agents): sanitize tool messages before model calls | 修复孤儿工具结果导致 OpenAI 兼容 provider 报错（修复 #6407） |
| [#6816](https://github.com/agentscope-ai/QwenPaw/pull/6816) | fix(chats): handle dict-like model responses | ⚠️ 修复 #6813 的 KeyError，但被 #6956 revert |

### 推进中的重要 PR（待合并）

- **[#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938)** `ready-for-human-review` - 修复对话历史中助手回复完成时间显示（修复 #6826）
- **[#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936)** `Under Review` - 强制将 string 类型工具参数从数字转为字符串（修复 #6839）
- **[#6947](https://github.com/agentscope-ai/QwenPaw/pull/6947)** - scroll 压缩占位符改用 SystemMsg，避免 DeepSeek 等 provider 报错
- **[#6942](https://github.com/agentscope-ai/QwenPaw/pull/6942)** - 简化长期记忆提示词，关闭 #6853
- **[#6953](https://github.com/agentscope-ai/QwenPaw/pull/6953)** - 稳定 LLM prefix cache（首次贡献者）
- **[#6818](https://github.com/agentscope-ai/QwenPaw/pull/6818)** - 修复 summary 忽略 `disable_thinking` 和中断（#6811）

**整体进展**：本周项目在「回复质量、内存准确性、UI 细节」三方面均有实质性推进，但「revert + 多个未修复的严重 Bug」表明 v2.1.0 正式版还需打磨。

---

## 4. 社区热点

### 评论最多的 Issues

1. **[#6853](https://github.com/agentscope-ai/QwenPaw/issues/6853)** - 5 条评论
   `prompts.py` 向 agent 撒谎，声称 Dream 会将摘要同步到 MEMORY.md，但实际从未实现。
   - **诉求**：纠正 agent 的记忆系统 prompt 与实际行为不符的问题，避免误导 agent 决策。

2. **[#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921)** - 5 条评论
   多步任务中途 agent 无提示停止，需要用户输入"继续"才能恢复。
   - **诉求**：连续任务的执行不应中途无故中断，期望自动推进。

3. **[#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780)** - 4 条评论
   v2.0.1 闲置几十分钟后卡死，必须重启进程。
   - **诉求**：长时间空闲后应保持可用，存在内存泄漏或连接超时嫌疑。

4. **[#6928](https://github.com/agentscope-ai/QwenPaw/issues/6928)** - 4 条评论
   历史消息无法向上滚动查看 + 输入栏编辑时追加内容会删除后续字符。
   - **诉求**：基本 UI 交互体验缺陷（标记为 invalid，可能已修复或重复）。

5. **[#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826)** - 4 条评论
   助手消息完成时间显示异常，实际 2 分钟却显示为几秒。
   - **诉求**：使用真实完成时间，而非首次分段写入时间。

6. **[#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839)** - 4 条评论
   MCP 工具调用时将字符串参数序列化为数字（如 `"assetInfo": 1.000001`），导致 jsonschema 校验失败。
   - **诉求**：严格遵循 schema 中声明的参数类型。

7. **[#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924)** - 4 条评论
   2.0.x 后自定义频道插件不再出现在交互配置菜单。
   - **诉求**：恢复 2.0.x 之前的自定义频道配置入口，限制过多。

8. **[#6847](https://github.com/agentscope-ai/QwenPaw/issues/6847)** - 4 条评论
   QwenPaw 在执行任务时被杀软拦截甚至强制关停，但 WorkBuddy 正常。
   - **诉求**：修复易被安全软件误杀的问题。

**热点分析**：用户诉求集中在「**稳定性 + UI 一致性 + 与模型行为对齐**」三大主题。多个高优 Bug（#6921、#6839、#6780）反映了 v2.x 版本在实际生产中的可靠性仍不足。

---

## 5. Bug 与稳定性

### 🔴 严重（核心功能不可用）

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| [#6921](https://github.com/agentscope-ai/QwenPaw/issues/6921) | 多步任务中途无提示停止 | ❌ 无 | 待处理 |
| [#6780](https://github.com/agentscope-ai/QwenPaw/issues/6780) | v2.0.1 闲置后卡死 | ❌ 无 | 待处理 |
| [#6926](https://github.com/agentscope-ai/QwenPaw/issues/6926) | sync.py 用随机 UUID 而非真实 session_id（已关闭，但需回归测试） | ❌ 无 | ⚠️ |
| [#6919](https://github.com/agentscope-ai/QwenPaw/issues/6919) | v2.0.1 经常性崩溃（已关闭） | ❌ 无 | 需关注 |

### 🟠 高（功能受阻）

| Issue | 描述 | 修复 PR | 状态 |
|---|---|---|---|
| [#6927](https://github.com/agentscope-ai/QwenPaw/issues/6927) | 多子 agent 调用陷入死循环 | ❌ 无 | 待处理 |
| [#6932](https://github.com/agentscope-ai/QwenPaw/issues/6932) | 网络短暂中断后无法自动恢复 | ❌ 无 | 待处理 |
| [#6955](https://github.com/agentscope-ai/QwenPaw/issues/6955) | 概率性启动报错/崩溃退出 | ❌ 无 | 待处理 |
| [#6951](https://github.com/agentscope-ai/QwenPaw/issues/6951) | Scroll 压缩后原始聊天记录不可见 | ❌ 无 | 待处理 |
| [#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916) | **安全：插件可静默创建 cron 任务并注入消息** | ❌ 无 | 待处理 |

### 🟡 中（体验问题）

| Issue | 描述 | 修复 PR |
|---|---|---|
| [#6826](https://github.com/agentscope-ai/QwenPaw/issues/6826) | 助手消息完成时间显示异常 | [#6938](https://github.com/agentscope-ai/QwenPaw/pull/6938) ✅ 待合并 |
| [#6839](https://github.com/agentscope-ai/QwenPaw/issues/6839) | MCP 工具 string 参数被当数字传 | [#6936](https://github.com/agentscope-ai/QwenPaw/pull/6936) ✅ 待合并 |
| [#6883](https://github.com/agentscope-ai/QwenPaw/issues/6883) | 日记页子文件夹笔记分组到错误日期 | ❌ 无 |
| [#6948](https://github.com/agentscope-ai/QwenPaw/issues/6948) | 管理后台时间显示为 UTC | ❌ 无 |
| [#6945](https://github.com/agentscope-ai/QwenPaw/issues/6945) | 智能模式写入沙盘外失败 | ❌ 无 |
| [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | Inter-agent 消息每次创建新会话 | ❌ 无 |
| [#6852](https://github.com/agentscope-ai/QwenPaw/issues/6852) | 长多行工具输出折叠成不可读 blob（已关闭） | ✅ 已修复 |

### 🔒 安全告警

**[#6916](https://github.com/agentscope-ai/QwenPaw/issues/6916)**（中-高严重度）插件可在无任何用户确认的情况下静默创建定时任务，并向 agent 会话注入用户可见消息。这是当前最值得关注的安全问题，建议维护者优先修复。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 对应 PR | 评估 |
|---|---|---|---|
| Agent 应能把任意报告/消息主动投递进收件箱（Inbox） | [#6917](https://github.com/agentscope-ai/QwenPaw/issues/6917) | ❌ | 高价值，建议纳入路线图 |
| 智能体协作希望在同一个会话窗口内 | [#6925](https://github.com/agentscope-ai/QwenPaw/issues/6925) + [#6918](https://github.com/agentscope-ai/QwenPaw/issues/6918) | ❌ | 与现有「多智能体协作」功能矛盾，需架构调整 |
| 自定义频道插件在交互配置菜单的入口恢复 | [#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) | ❌ | 反映 2.0.x 版本的回归，需重新开放 |
| 项目-对话-文件夹以文件夹为对话基础（Codex 风格） | [#6929](https://github.com/agentscope-ai/QwenPaw/issues/6929)（已关闭作为 feature request） | ❌ | 中优先级，与工作区改造相关 |
| LongHorizon-Harness 长期任务支持 | [#6923](https://github.com/agentscope-ai/QwenPaw/issues/6923) | ❌ | 来自外部项目（AMAP-ML）的合作建议 |
| MiniMax TTS 支持 | [#6924](https://github.com/agentscope-ai/QwenPaw/issues/6924) | ✅ [#6954](https://github.com/agentscope-ai/QwenPaw/pull/6954) | 待合并 |
| 长期记忆博客文章（双语） | — | ✅ [#6949](https://github.com/agentscope-ai/QwenPaw/pull/6949) | 待合并 |
| 文件工作区博客改进 | — | ✅ [#6950](https://github.com/agentscope-ai/QwenPaw/pull/6950) | 待合并 |
| Native DataPaw 应用运行时 + 持久化分析工作区 | — | ✅ [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 待合并（首次贡献者） |

**信号解读**：用户对「**单窗口多智能体协作 + Inbox 集中交付 + 项目文件夹工作流**」三个方向呼声强烈，且都已有多位用户独立提出，可能成为下一版本重点。

---

## 7. 用户反馈摘要

### 🔥 主要痛点

1. **「v2.0.1 太脆弱」** —— 多名用户反映 v2.0.1 闲置崩溃、启动崩溃、概率性崩溃（#6780、#6919、#6955）
2. **「Agent 自己停下来不干活」** —— 多步任务中途停顿无提示，需手动「继续」（#6921、#6927）

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-13

---

## 1. 今日速览

ZeroClaw 仓库今日处于 **高活跃期**：24 小时内共发生 50 条 Issue 更新与 50 条 PR 更新，仓库整体健康度良好。**当日无新版本发布**，但有 19 个 PR 已合并/关闭，其中多聚焦于 **安全修复（Telegram/浏览器/MCP 访问策略）、CI 治理（依赖方向、rustdoc 主题、Semgrep）以及 release attestation 收敛**。社区讨论最热烈的议题集中在 Windows 平台测试覆盖率（74 个失败用例）、RFC 治理投票协议、插件化 Kanban 看板以及 Langfuse 可观测性集成。整体来看，项目正在 **向 v0.9.0 迈进，安全治理与跨平台稳定性是当前两大主线**。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次发布为 v0.8.3（已合并的 PR #9101 仍在讨论将 53 个 release assets 收敛到 ~20 个并合并三套签名机制）。

---

## 3. 项目进展（今日合并/关闭的重点 PR）

| PR | 标题 | 影响域 | 亮点 |
|---|---|---|---|
| [#9362](https://github.com/zeroclaw-labs/zeroclaw/pull/9362) / [#8741](https://github.com/zeroclaw-labs/zeroclaw/pull/8741) | fix(browser): validate screenshot destination path against workspace policy | **安全** | 关闭浏览器工具 `screenshot` 的任意文件写入逃逸漏洞，所有路径强校验 |
| [#9695](https://github.com/zeroclaw-labs/zeroclaw/pull/9695) / [#9037](https://github.com/zeroclaw-labs/zeroclaw/pull/9037) | fix(runtime): strip terminal markers from streaming and non-streaming responses | **核心运行时** | 修复 `<eom>`/`<|eom|>` 标记泄漏问题（#9006），覆盖流式与非流式路径 |
| [#9040](https://github.com/zeroclaw-labs/zeroclaw/pull/9040) | fix(daemon): restore foreground startup feedback lost in #7934 | **DX** | 恢复被结构化日志吞掉的前台 7 行启动回显 |
| [#8963](https://github.com/zeroclaw-labs/zeroclaw/pull/8963) | fix(channels): cap Telegram bot commands and repair truncation WARN | **Channel** | 解决 `BOT_COMMANDS_TOO_MUCH` 错误，命令截断告警 |
| [#8496](https://github.com/zeroclaw-labs/zeroclaw/pull/8496) | fix(tools/mcp): centralize deferred-MCP access policy | **安全 / MCP** | 延迟 MCP 工具访问策略统一为单一真实源 |
| [#8937](https://github.com/zeroclaw-labs/zeroclaw/pull/8937) | fix(agent): stream-hash tool args in loop_detector | **性能** | 用流式哈希替代 `serde_json::Value` 深拷贝，#8936 |
| [#8928](https://github.com/zeroclaw-labs/zeroclaw/pull/8928) | feat(zerocode): show active resolved log path in Doctor | **可观测性** | Doctor 诊断面板显示真实日志路径 |
| [#8927](https://github.com/zeroclaw-labs/zeroclaw/pull/8927) | fix(providers): remove unconditional strip_think_tags from compatible provider | **Provider** | 兼容 OpenAI 兼容上游的 `<think>` 推理内容（#8615） |
| [#8874](https://github.com/zeroclaw-labs/zeroclaw/pull/8874) | fix(ci): scope rustdoc --default-theme away from cargo test --doc | **CI** | 修复 #8847 rustdoc 主题作用域 |
| [#8751](https://github.com/zeroclaw-labs/zeroclaw/pull/8751) | fix(config): LocalWhisperConfig::default reuses serde defaults | **配置** | 修复 `max_audio_bytes`/`timeout_secs` 默认 0 的回归（#8718） |
| [#9684](https://github.com/zeroclaw-labs/zeroclaw/pull/9684) | zerocode SOP pane live run-status icons | **ZeroCode** | SOP 列表增加实时状态图标（绿/黄/蓝/红）|
| [#9796](https://github.com/zeroclaw-labs/zeroclaw/pull/9796) | fix: cron parent help prints invalid examples | **文档** | 修正 `zeroclaw cron --help` 中 `add-at`/`add-every`/`once` 错误示例 |
| [#9340](https://github.com/zeroclaw-labs/zeroclaw/pull/9340) | fix: CLI-created cron jobs cannot deliver output | **Cron** | 修复 cron `delivery.mode` 硬编码为 `none` 的问题 |

**总体评价**：项目在 **安全（CVE 收敛）、CI 治理、Provider/Channel 兼容性、ZeroCode TUI 体验** 四个方向均取得实质推进。多处 PR 关闭后留下阻塞依赖项（如 #9499 治理、#9511 Semgrep 评论），说明项目正向系统化交付能力演进。

---

## 4. 社区热点

### Issues 讨论热度 Top 5

1. [#7462 — 74 test failures on Windows (14 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)
   - Windows 11 简体中文环境下 74 个测试失败，CI 仅跑 Linux 无法拦截；诉求：**跨平台 CI 矩阵**（与 #7461 配套）
2. [#8692 — Maintainer decision queue for RFCs (13 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)
   - 维护者对 RFC/设计 Issue 的决策跟踪器；治理流程类讨论
3. [#8832 — Plugin-owned Kanban board for agent work (9 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/8832)
   - 提议由插件域承载 Agent 工作的 Kanban 看板，宿主提供通用能力
4. [#9101 — Consolidate release attestation mechanisms (9 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/9101)
   - v0.8.3 同时跑了 3 套签名/溯源机制（cosign、GitHub Attestation、slsa-github-generator），共 53 个 release assets；建议收敛为 ~20 个
5. [#7929 — Unify slash-command registries (7 评论)](https://github.com/zeroclaw-labs/zeroclaw/issues/7929)
   - web UI / ZeroCode TUI / channel runtime 三套斜杠命令注册表相互漂移

### PR 关注度 Top 5（按体量与影响面）

- [#9556 — feat(observability): add Langfuse observer backend](https://github.com/zeroclaw-labs/zeroclaw/pull/9556) — 新增 Langfuse 后端，背后是社区对**多可观测性后端**的强烈诉求
- [#9194 — feat(secrets): extract KeySource trait + FileKeySource backend](https://github.com/zeroclaw-labs/zeroclaw/pull/9194) — 主密钥抽象为 trait，扩展性强
- [#8337 — feat(observability): herdr agent reporting integration](https://github.com/zeroclaw-labs/zeroclaw/pull/8337) — Herdr 面板集成 agent 状态
- [#9419 — fix(providers): rotate live credentials after rate limits](https://github.com/zeroclaw-labs/zeroclaw/pull/9419) — 解决 429 后多个 key 轮换
- [#9694 — feat(zerocode): expose the SOP pane as a read-only status view](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) — SOP 面板暴露为只读状态视图

**诉求总结**：社区对 **可观测性（Langfuse/Herdr）、跨平台稳定性、Provider 弹性（key 轮换）、TUI 易用性（命令统一、SOP 状态）** 的呼声最高，且均已存在对应 PR，方向清晰。

---

## 5. Bug 与稳定性

### 已识别 P1 / S1 严重 Bug

| 严重度 | Issue | 描述 | 是否有 Fix PR |
|---|---|---|---|
| **S1** | [#9207](https://github.com/zeroclaw-labs/zeroclaw/issues/9207) | `web_fetch` 对 gzip/brotli/deflate 压缩响应返回乱码（status: in-progress） | ❌ 无 |
| **S1** | [#7527](https://github.com/zeroclaw-labs/zeroclaw/issues/7527) | macOS 桌面 app 重启后窗口消失或空白（needs-author-action） | ❌ 无 |
| **S1** | [#9290](https://github.com/zeroclaw-labs/zeroclaw/issues/9290) | Windows 桌面安装包启动失败，缺少 `TaskDialogIndirect` | ❌ 无 |
| **S2** | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 个测试失败 | ❌ 无（建议 #7461） |
| **S2** | [#9796](https://github.com/zeroclaw-labs/zeroclaw/issues/9796) ✅ | cron `--help` 示例错误 | ✅ 已关闭 |
| **S3** | [#9198](https://github.com/zeroclaw-labs/zeroclaw/issues/9198) | Discord typing indicator 在 dashboard 重载后卡死 | ❌ 无 |
| **S3** | [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | `zeroclaw desktop` 用死链 + 不检测已安装 AppImage | ❌ 无 |

### 今日已修复的 Bug

- ✅ [#9006](https://github.com/zeroclaw-labs/zeroclaw/issues/9006) — `<eom>` 终端标记泄漏（#9695 / #9037）
- ✅ `#8950` — Telegram 命令超 100 截断（#8963）
- ✅ `#8936` — LoopDetector 深拷贝性能问题（#8937）
- ✅ `#8847` — rustdoc 主题作用于 `cargo test --doc`（#8874）
- ✅ `#8718` — `LocalWhisperConfig` 默认值 0（#8751）
- ✅ `#8615` — 兼容上游 `<think>` 标签被吞（#8927）
- ✅ `#8650` — Doctor 不显示日志路径（#8928）
- ✅ `#9000` — daemon 前台启动回显丢失（#9040）
- ✅ `#9672`/`#9704` — cron 帮助示例错误（#9796）
- ✅ `#8054 Surface 1(b)` — 延迟 MCP 访问策略（#8496）
- ✅ 浏览器 `screenshot` 任意文件写入漏洞（#8741 / #9362）
- ✅ `#8650` — Doctor 路径（#8928）

**安全净趋势**：浏览器 `screenshot` 与延迟 MCP 策略两条 CVE 级别修复今日合并，**安全态势显著改善**。

---

## 6. 功能请求与路线图信号

| 优先级 | 提案 | 现状 | 路线图可能性 |
|---|---|---|---|
| P1 | [#9101](https://github.com/zeroclaw-labs/zeroclaw/issues/9101) 收敛 release attestation | 讨论中 | **较高** — 显式针对 v0.8.3 历史负担 |
| P1 | [#7461](https://github.com/zeroclaw-labs/zeroclaw/issues/7461) CI 跨平台 Windows/macOS | 已接受 | **高** — 与 #7462/#7910 形成强配套 |
| P2 | [#8832](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) 插件化 Kanban | 已接受 | **中** — 依赖插件域架构 |
| P2 | [#7929](https://github.com/zeroclaw-labs/zeroclaw/issues/7929) 统一斜杠命令注册表 | 已接受 | **高** — UX 痛点明确 |
| P2 | [#6644](https://github.com/zeroclaw-labs/zeroclaw/issues/9644) v0.9.0 移除 Lucid memory connector | 新提出 | **高** — 上游停摆，已明确时间表 |
| P2 | [#6998](https://github.com/zeroclaw-labs/zeroclaw/issues/6998) Schema-validated memory consolidation | 已接受 | **中** — 涉及多个 provider |
| P2 | [#9323](https://github.com/zeroclaw-labs/zeroclaw/issues/9323) 执行树迭代预算所有权 | 已接受 | **中** — 影响 SOP / sub-agent |
| P2 | [#5316](https://github.com/zeroclaw-labs/zeroclaw/issues/5316) SearXNG 完整化 + CAPTCHA 检测 | 已接受 | **中** — privacy 搜索长期诉求 |
| P2 | [#5907](https://github.com/zeroclaw-labs/zeroclaw/issues/5907) ZeroCode LSP 支持 | 已接受 | **低-中** — 与 OpenCode/Claude Code 对齐 |
| P2 | [#8059](https://github.com/zeroclaw-labs/zeroclaw/issues/8059) `deny.toml` 策略清理 | 已接受 | **高** — 直接落地 |
| P2 | [#9507

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*