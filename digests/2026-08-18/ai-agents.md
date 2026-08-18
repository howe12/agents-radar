# OpenClaw 生态日报 2026-08-18

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-18 00:51 UTC

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

# OpenClaw 项目日报 · 2026-08-18

---

## 1. 今日速览

OpenClaw 仓库今日呈现**高活跃、高负荷、强维护介入**的态势：过去 24 小时 Issues/PRs 各刷新 500 条（Issues 新开/活跃 482、已关 18；PRs 待合并 375、已合/已关 125），但**无新版本发布**。从信号灯来看，大量 P1/P0 事故工单仍带着 `clawsweeper:needs-product-decision`、`needs-maintainer-review` 标签积压，说明需求交付节奏明显快于维护决策节奏。PR 侧由 `steipete`、`jalehman` 等核心维护者集中提交了 8 个 `ready for maintainer look` 的修复（Gateway 启动、voice-call、session cwd、Android、UI 草稿持久化等），表明主线维护面在进行一次较密集的回归收口。整体来看：**项目处于活跃迭代期，但稳定性账单与产品决策积压是最突出的健康度风险点。**

---

## 2. 版本发布

**今日无新版本发布。** 鉴于 #70903（P0 billing-cooldown 冻结）、#97616（P1 僵尸进程泄漏）等高优先级 Bug 仍未发布补丁，建议下游生产用户在升级前留心 `release notes` 的稳定性标签（呼应 #73537 的"production-readiness 稳定性 label"请求）。

---

## 3. 项目进展

今日有 125 个 PR 关闭或合并，多个核心维护者主导的修复集中在**会话状态、消息交付、Gateway 生命周期**三大主题：

| PR | 主题 | 影响面 |
|---|---|---|
| [#125483](https://github.com/openclaw/openclaw/pull/125483) | `fix(upgrade)` 网关启动前修复退役配置 key | 解决启动迁移期严格校验失败问题 |
| [#125469](https://github.com/openclaw/openclaw/pull/125469) | `fix(voice-call)` 短时流断连时保持 realtime | 修复 `realtime` 在轻微重连中掉线 |
| [#125470](https://github.com/openclaw/openclaw/pull/125470) | `fix(workboard)` 网关启动时误报 lifecycle 失败 | 消除 Workboard 健康启动噪音 |
| [#125484](https://github.com/openclaw/openclaw/pull/125484) | `fix(gateway)` 在 transcript 中持久化 session cwd | 修复 spawn cwd 与 header 不一致 |
| [#125485](https://github.com/openclaw/openclaw/pull/125485) | `fix(agents)` 提示 exec 模型对 shell 元字符加引号 | 减少 zsh glob 误判 |
| [#125467](https://github.com/openclaw/openclaw/pull/125467) | `fix(pr)` 重复 review-checkout 恢复部分切换 | 修维护者工作流 |
| [#125481](https://github.com/openclaw/openclaw/pull/125481) | `fix(skills)` 从认证账户解析 GitHub 身份 | 避免把 issue 指派错人 |
| [#125465](https://github.com/openclaw/openclaw/pull/125465) | `refactor(gateway)` 删除过时的 reverse worker tunnel | 收敛 worker 通道（架构清理） |
| [#124974](https://github.com/openclaw/openclaw/pull/124974) | `fix(ai)` 接受 Responses compact 的保留消息 | 兼容 xAI 与 OpenAI 两种 compact 契约 |

> 节奏判断：在 #91009（Codex hook relay CPU 100%）、#97616（僵尸进程）、#74586（memory_search 误判超时）等阻塞性 Bug 修复合入之前，项目实质上没有完成"可靠性一阶段"的全面收口，仍处于"边修边推"的非稳定状态。

---

## 4. 社区热点

按评论数排序，本日最热议题聚焦于**可观测性、Agent 行为稳定性、多通道消息投递一致性**：

1. **[#77598](https://github.com/openclaw/openclaw/issues/77598)** — `Track live dev agent behavior and trajectory`（23 评论）
   长期运行的 dev agent 观测笔记贴。热度来自其作为"24h 黑盒观测"的公共窗口，社区借此讨论 agent 行为干预边界（"do not steer unless Pash asks"）。

2. **[#91009](https://github.com/openclaw/openclaw/issues/91009)** — `Codex PreToolUse hook relay stalls gateway`（20 评论）
   每次 Codex 工具调用都会孵化多个 CPU 占满的 `openclaw-hooks`，导致 gateway RPC 卡死。诉求直指 **hook 进程生命周期管控**。

3. **[#68596](https://github.com/openclaw/openclaw/issues/68596)** — `Configurable streaming watchdog timeout`（15 评论，👍8）
   DeepSeek-R1/kimi-k2.5 等长推理模型在 30s 看门狗下频繁被重置，呼声集中在"暴露 watchdog 阈值给运维"。

4. **[#62505](https://github.com/openclaw/openclaw/issues/62505)** — `Coding Agent regression: 2026.4.2 之后无法交付`（15 评论）
   高频痛点："工作流彻底瘫痪，只剩模糊状态更新与道歉"。

5. **[#69208](https://github.com/openclaw/openclaw/issues/69208)** — `Umbrella: duplicate transcript / replay`（14 评论）
   把分散在 MS Teams / Telegram / Webchat / followup queue 的"重复回放"问题归并为伞状议题，呼吁一次性根治。

6. **[#50093](https://github.com/openclaw/openclaw/issues/50093)** — `WhatsApp backfill missed messages after reconnect`（13 评论）
   Web 503 后断线窗口期内群组消息**静默丢失**，影响企业可靠部署。

> 共性诉求：`观测性`、`Agent 行为可解释性`、`多通道一致性`、`超时参数开放化`。

---

## 5. Bug 与稳定性

按 P0 → P1 严重度排列：

### P0（业务连续性阻断）
- **[#70903](https://github.com/openclaw/openclaw/issues/70903)** `Persistent file-based provider cooldown blocks user for hours after billing recovery`
  402 后 cooldown 时间戳随重启存活且单调延长，**用户付费成功后仍被拒绝数小时**。标记 `impact:ux-release-blocker`、尚无 fix PR。

### P1（重大回归 / 数据丢失）
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** `Leaked unreaped hook/tool child processes → zombies` — 进程随运行逐渐累积，已观察到 `openclaw-hooks`/`bash`/`codex` 僵尸导致 runtime 退化。无 fix PR。
- **[#91009](https://github.com/openclaw/openclaw/issues/91009)** Codex hook relay 双胞胎 CPU 100%，gateway 实质挂起。fix 形态未定。
- **[#62505](https://github.com/openclaw/openclaw/issues/62505)** 2026.4.2 之后编码 Agent 完全不再产出工作。
- **[#38327](https://github.com/openclaw/openclaw/issues/38327)** Vertex/Gemini-3.1-pro-preview 升级到 2026.3.2 后报 "Cannot convert undefined or null to object"。
- **[#74586](https://github.com/openclaw/openclaw/issues/74586)** `memory_search` 在模型已完成时被误判超时，AM 嵌入式运行被中断。
- **[#86215](https://github.com/openclaw/openclaw/issues/86215)** Codex OAuth 刷新失败后，agent 可被卡住数小时无告警。
- **[#50093](https://github.com/openclaw/openclaw/issues/50093)** WhatsApp 503 重连后消息静默丢失。
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** Subagent 直接 announce 超时后完成投递被静默丢弃。
- **[#53408](https://github.com/openclaw/openclaw/issues/53408)** 长对话下 `write`/`exec` 工具参数被静默吞掉。
- **[#53540](https://github.com/openclaw/openclaw/issues/53540)** 工具参数生成延迟超过底层请求超时即报 `Network connection lost`。
- **[#72015](https://github.com/openclaw/openclaw/issues/72015)** `active-memory` 在多 agent gateway 上诱发 QMD boot 过载、可能回复阻塞。
- **[#112196](https://github.com/openclaw/openclaw/issues/112196)** `memory_search` 暂态同步超时伪装成 "database is not open"，误诊 provider 故障。
- **[#45224](https://github.com/openclaw/openclaw/issues/45224)** Playwright CDP 未捕获的 Assertion 把整个 Gateway 拉崩。
- **[#78493](https://github.com/openclaw/openclaw/issues/78493)** `sudo openclaw update` 导致配置/插件属主混乱，`doctor` 在 EACCES 后覆写配置。
- **[#77930](https://github.com/openclaw/openclaw/issues/77930)** Discord 通道在 2026.5.4 / beta.2/3 不被加载（regression，5.4-beta.1 正常）。
- **[#102636 待并 PR 关联 #102628](https://github.com/openclaw/openclaw/pull/102636)** & **[#62328](https://github.com/openclaw/openclaw/issues/62328)** — 部分有 fix PR 已 `ready for maintainer look`。

### P2 / 影响体验的回归
- **[#51429](https://github.com/openclaw/openclaw/issues/51429)** 工作路径被硬编码为 `/Users/wangtao`，疑似误提交。
- **[#107814](https://github.com/openclaw/openclaw/issues/107814)** `gpt-5.3-codex-spark` 必参工具调用返回空参对象。
- **[#77930](https://github.com/openclaw/openclaw/issues/77930)** Discord 通道加载回归（已在 PR 跟踪）。
- **[#68105](https://github.com/openclaw/openclaw/openclaw/issues/68105)** RTL bidi 在 gateway 出站边界缺失，希/阿标点显示错位。

> **结论**：P0/P1 列表中仅有少数绑定了已开 PR（#77930 / #38327 / #53408 / #62328 / #102628 等）；多数仍在 `needs-product-decision` 阶段，**修复漏斗存在明显断层**。

---

## 6. 功能请求与路线图信号

| 主题 | 线索 Issue | 已相关 PR / 信号 |
|---|---|---|
| 流式 watchdog 阈值可配置 | [#68596](https://github.com/openclaw/openclaw/issues/68596) 👍 8 | 高热度，可能进下一 release |
| 多 Azure/Teams Bot 单网关 | [#71058](https://github.com/openclaw/openclaw/issues/71058) | 当前 schema `additionalProperties: false` 阻碍扩展 |
| 多 Embedding 索引 / 模型感知 failover | [#63990](https://github.com/openclaw/openclaw/issues/63990) | 与 #112196 关联，属于可靠性组合拳 |
| Per-agent dreaming 配置 | [#67413](https://github.com/openclaw/openclaw/issues/67413) 👍 5 | 与 OOM 类 Bug 直接挂钩，落地概率高 |
| Per-Agent TTS/STT 覆盖 | [#66252](https://github.com/openclaw/openclaw/issues/66252) | 多语言场景刚需 |
| YAML 配置格式 | [#45758](https://github.com/openclaw/openclaw/issues/45758) 👍 2 | 长期呼声 |
| LaTeX/MathJax 支持 | [#42840](https://github.com/openclaw/openclaw/issues/42840) 👍 10 | 讨论度与点赞双高 |
| Skill Priority / 重叠消解 | [#50199](https://github.com/openclaw/openclaw/issues/50199) | 多 skill 复用冲突 |
| 持久任务状态面 | [#52640](https://github.com/openclaw/openclaw/issues/52640) | 与今日 PR #125444 `feat(android): render durable progress card` 同向，**已经被推动** |
| Release 稳定性 label | [#73537](https://github.com/openclaw/openclaw/issues/73537) | 来自家庭/企业双重用户，强烈信号 |
| Anthropic advisor tool | [#63930](https://github.com/openclaw/openclaw/issues/63930) | 立即可用的官方 beta 工具 |
| 多槽 Memory 架构 | [#60572](https://github.com/openclaw/openclaw/issues/60572) 👍 3 | 长期演进方向 |
| MacOS Talk Realtime 路径对齐 | [#71195](https://github.com/openclaw/openclaw/issues/71195) | 复用现有 voice-call 通道 |
| 控制面板孤儿会话清理 | [#49259](https://github.com/openclaw/openclaw/issues/49259) | 偏 DX，与 Dashboard 体验直接相关 |
| 国际化命令描述 | [#79458](https://github.com/openclaw/openclaw/issues/79458) | 多语种平台限制 |
| Slack/Telegram MEDIA token 误解析 | [#41966 / #80396](https://github.com/openclaw/openclaw/pull/80396) | 已有修复 PR 待作者进展 |

**信号解读**：可观测性、超时参数开放化、Agent 行为可解释性，与今日主线 PR 的方向（durable progress card、session cwd 持久化、Responses compact 兼容）形成正反馈，**下一版本有较大概率优先解决"流式/超时/可观测性"三角**。

---

## 7. 用户反馈摘要

- **痛点 1：长推理模型的"假死"**：多位用户（#68596、#62505）反映使用 DeepSeek-R1、kimi-k2.5 这类深度思考模型时，watchdog 在 30s 内看不到流更新就直接重置，**整个工作流被反复打断**。
- **痛点 2：升级路径的不安全感**：#78493 与 #77930 显示 macOS 用户在 `sudo openclaw update` 后遇到权限/属主混乱、Discord 通道丢失。`doctor` 在 EACCES 后**覆写配置**的设计被普遍质疑。
- **痛点 3：企业账号的"静默损失"**：#50093（WhatsApp 503 断线丢消息）、#70903（付费后仍被 cooldown 数小时），用户将之总结为"**故障发生后我们被静默地卡住**"，缺明确可见的运维信号。
- **痛点 4：多 agent 部署的脆弱性**：#72015 / #74586 / #86215 共同指向同一根因——**多 agent gateway 在并发/认证/内存侧的扩展性不足**，家庭助手（Telegram / cron / Home Assistant）与企业部署都在此踩坑。
- **痛点 5：硬编码与提交卫生**：#51429 中"wangtao 工作

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比分析

**报告日期：2026-08-18**
**覆盖项目：OpenClaw、NanoBot、Hermes Agent、PicoClaw、NanoClaw、NullClaw、IronClaw、LobsterAI、TinyClaw、Moltis、ZeptoClaw、ZeroClaw、CoPaw**

---

## 1. 生态全景

本周期内 13 个项目呈现明显的**"金字塔分层"**：头部 3 个项目（OpenClaw、ZeroClaw、CoPaw）以 50 条左右的 Issue+PR 双轨并行推进，显示出旗舰级活跃度；中部项目（IronClaw、NanoClaw、Hermes Agent、LobsterAI）以单点突破为主，伴随明确的版本/里程碑节奏；尾部 3 个项目（NullClaw、TinyClaw、ZeptoClaw）已显著进入"静默维护"状态。**安全加固、多通道会话路由、可观测性、长推理模型兼容性**是横跨多个项目的共同技术焦点；安全相关 PR 在 ZeroClaw 当日合并中占比 33%，Hermes Agent 也在闭环 ACL 与威胁扫描——说明 2026 年下半年的核心议程已从"功能扩张"切换为"运行时安全与稳定性收口"。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PRs 更新 | 合并/关闭率 | Release | 健康度评级 | 当日关键特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 482 活跃/18 关 | 375 待/125 关 | ~24% | 无 | 🟠 高活跃 / 高积压 | P0 billing-cooldown、僵尸进程泄漏等 P0/P1 未根治 |
| **ZeroClaw** | 44 活跃/6 关 | 35 待/15 关 | ~30% | 无（0.9.0 安全里程碑推进中） | 🟢 高活跃 / 安全主导 | 单日 5 个安全 PR 合并，原子性会计修复关闭 2 个 P1 |
| **CoPaw** | 8 活跃/6 关 | 13 待/22 关 | ~63% | 无 | 🟢 高活跃 / 高效收口 | v2.1.0 打磨期，DataPaw 工作区正式落地 |
| **IronClaw** | 22 活跃/6 关 | 28 待/16 关 | ~36% | **v1.3.0-rc.1** | 🟢 高活跃 / 节奏可控 | DB 写压力下降 ~60% Epic 推进中 |
| **NanoClaw** | 3 新/1 关 | 17 待/25 关 | ~60% | 无 | 🟢 高活跃 / 架构重构期 | Slack 通道层重构 10+ PR 串行合并 |
| **Hermes Agent** | 50 更新 | 50 更新（16 关/15 合） | ~32% | **v2026.8.16.2 patch** | 🟢 高活跃 / 安全审计期 | Windows ACL 关键缺陷未修复 |
| **NanoBot** | 3 | 10 待/5 关 | ~33% | 无 | 🟢 中高活跃 / 高闭环 | Telegram watchdog + TUI 重构 |
| **LobsterAI** | 7（0 关） | 21 | 较多关闭 | 无 | 🟡 中活跃 / 积压型 | dsh 引擎集成完成，Ollama/MCP 4 月未修 |
| **Moltis** | 2 关 | 6 关/3 待 | ~67% | 无 | 🟢 中活跃 / 卫生型 | 依赖批量升级 + Podman 待修 |
| **PicoClaw** | 2 活/1 关 | 4（3 关） | ~75% | 无 | 🟡 中低活跃 / 历史清理 | 工具循环沉默 bug 已闭环 |
| **NullClaw** | 0 | 1 dependabot | 0% | 无 | 🔴 静默 / 仅依赖更新 | 2 个月 dependabot PR 未合并 |
| **TinyClaw** | 0 | 0 | — | 无 | ⚪ 无活动 | 静默期 |
| **ZeptoClaw** | 0 | 0 | — | 无 | ⚪ 无活动 | 静默期 |

> **关键观察**：合并/关闭率超过 60% 的 PicoClaw、Moltis、NanoClaw、CoPaw 普遍属于"已积累 PR 后批量清理"模式；OpenClaw 与 ZeroClaw 的高 Issue 流量则反映其用户基数更大、问题暴露面更广。

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态的事实核心参照系**：当日 500 条 Issue+PR 的吞吐量相当于第二梯队（ZeroClaw 100 条、CoPaw 49 条）的 5 倍以上，并已形成下游依赖（LobsterAI [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) 在主仓升级 OpenClaw 到 v2026.4.12）。

| 维度 | OpenClaw | ZeroClaw | IronClaw | NanoClaw |
|---|---|---|---|---|
| **多通道广度** | ★★★★★（Teams/Telegram/Discord/WhatsApp/Webchat 等 10+） | ★★★（聚焦 ACP/Webhook） | ★★★（Slack/Telegram 为主） | ★★（Slack + Web Chat） |
| **架构抽象层** | 中（多通道适配层成熟） | 高（driver/agent bundle export） | 高（SessionDriver、notification 收件箱） | 高（driver seam + hook seam） |
| **安全治理深度** | 中（事故驱动型） | 高（系统化 RFC + 单日 5 安全 PR） | 中（Dogfooding Epic 制度化） | 中 |
| **社区规模** | 头部 | 中头部 | 中部 | 中部 |
| **稳定性账单** | 🔴 重（多个 P0/P1 长期未根治） | 🟡 中 | 🟢 轻 | 🟢 轻 |
| **版本节奏** | ⚠️ 阻塞（无新版本） | ⚠️ 无 release | ✅ rc.1 已发 | ⚠️ 无 release |

**OpenClaw 的独特优势**：① 通道广度无出其右；② 已形成下游生态（LobsterAI、nano-series）；③ 核心维护者（steipete、jalehman）密集介入；④ 长期运行的 dev agent 观测贴（#77598）成为行业公共窗口。
**OpenClaw 的差异化短板**：稳定性债务与产品决策积压最严重，bug→fix→merge 漏斗存在明显断层，多数 P0/P1 仍停留在 `needs-product-decision` 阶段。

---

## 4. 共同关注的技术方向

### 4.1 安全加固（最显著共识）
- **SSRF / 文件下载边界**：ZeroClaw [#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713)、[#10000](https://github.com/zeroclaw-labs/zeroclaw/pull/10000)、NanoBot [#5414](https://github.com/HKUDS/nanobot/pull/5414) Slack SSRF、LobsterAI [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) 日志脱敏
- **API Key / 凭证处理**：ZeroClaw [#9973](https://github.com/zeroclaw-labs/zeroclaw/pull/9973) Gemini Key 移出 URL、Hermes Agent [#77462](https://github.com/NousResearch/hermes-agent/issues/77462) Windows ACL 关键缺陷
- **进程/凭证收敛**：Hermes Agent [#83565](https://github.com/NousResearch/hermes-agent/issues/83565) 子进程凭证继承收敛 EPIC

### 4.2 流式 / Watchdog / 超时参数开放
- OpenClaw [#68596](https://github.com/openclaw/openclaw/issues/68596) — DeepSeek-R1/kimi-k2.5 长推理频繁重置
- Hermes Agent [#88787](https://github.com/NousResearch/hermes-agent/pull/88787) — `HERMES_CRON_MEDIA_SEND_TIMEOUT`
- Moltis [#1130](https://github.com/moltis-org/moltis/pull/1130) — webui RPC 超时可配置
- ZeroClaw [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) — Shell 命令 allow/ask/deny 策略

### 4.3 子进程 / 僵尸进程治理
- OpenClaw [#97616](https://github.com/openclaw/openclaw/issues/97616) 僵尸累积
- NanoBot [#5416](https://github.com/HKUDS/nanobot/pull/5416) 跨平台进程身份契约统一
- Hermes Agent Desktop 孤儿 `hermes serve`（已修复 #76245 / #80898）
- ZeroClaw [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) Action budget 原子性会计

### 4.4 多通道会话路由与一致性
- OpenClaw [#69208](https://github.com/openclaw/openclaw/issues/69208) duplicate transcript / replay
- OpenClaw [#50093](https://github.com/openclaw/openclaw/issues/50093) WhatsApp 503 静默丢消息
- NanoBot [#5156](https://github.com/HKUDS/nanobot/pull/5156) Telegram 长轮询守护
- CoPaw [#7011](https://github.com/agentscope-ai/QwenPaw/pull/7011) Console 停止请求误杀飞书会话

### 4.5 工具参数序列化与契约
- NanoBot [#4864](https://github.com/HKUDS/nanobot/issues/4864) `complete_goal` 循环（已修）
- OpenClaw [#53408](https://github.com/openclaw/openclaw/issues/53408)、[#53540](https://github.com/openclaw/openclaw/issues/53540) 工具参数静默吞掉
- NanoClaw [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) codex provider `file` event 未声明

### 4.6 多 Agent 协作与会话隔离
- LobsterAI [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) MD 工作流多 Agent 编排
- CoPaw [#6925](https://github.com/agentscope-ai/QwenPaw/pull/6925) Multi-agent 同会话窗口诉求
- NanoBot [#5358](https://github.com/HKUDS/nanobot/pull/5358) / [#5364](https://github.com/HKUDS/nanobot/pull/5364) WebUI `@mention` 与 side conversation

### 4.7 长期记忆与持久上下文
- IronClaw [#7275](https://github.com/nearai/ironclaw/issues/7275) 跨会话记忆召回验证
- CoPaw [#7079](https://github.com/agentscope-ai/QwenPaw/pull/7079) / [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080) PowerContext 长期记忆后端
- OpenClaw [#60572](https://github.com/openclaw/openclaw/issues/60572) 多槽 Memory 架构

---

## 5. 差异化定位分析

| 维度 | OpenClaw / LobsterAI | ZeroClaw / NanoClaw | Hermes Agent | IronClaw / Moltis |
|---|---|---|---|---|
| **功能侧重** | 多通道生态 + 下游集成 | 安全治理 + 架构抽象（driver/hook seam） | 端到端沙箱 + 桌面端体验 | 持久记忆 + 通知收件箱重构 |
| **目标用户** | 家庭 + 企业双场景 | 重视安全/可移植性的开发者 | 桌面重度用户 + 安全审计受众 | 高频长任务编排用户 |
| **架构特征** | 多通道适配层成熟 / 维护债务重 | 高度模块化 / RFC 驱动治理 | 桌面一体化 + Bot Mode UX | 类型化合约 / Epic 制度化 |
| **生态角色** | 参照系 + 平台底座 | 协议标准 + 安全基准 | 产品形态样本 | 工程实践参考 |
| **关键差异** | 通道最广但稳定账单最重 | RFC 治理与安全 PR 密度行业领先 | 唯一具备 patch 发布节奏的项目 | QA Dogfooding 周度制度化 |

---

## 6. 社区热度与成熟度分层

### 🚀 快速迭代层（高吞吐、变动密集）
- **OpenClaw**：边修边推，需要补可靠性一阶段
- **ZeroClaw**：RFC 治理 + 安全密集，0.9.0 节奏关键
- **CoPaw**：v2.1.0 收尾 + DataPaw 新轨道铺开
- **IronClaw**：1.3.0-rc.1 → GA 冲刺

### 🔧 质量巩固层（节奏稳健、修复为主）
- **Hermes Agent**：patch 消化期，安全审计 Campaign 推进
- **NanoBot**：issue → PR 闭环效率最高
- **NanoClaw**：架构 seam 化稳定推进
- **Moltis**：依赖卫生 + 小功能稳步叠加
- **LobsterAI**：功能爆发 + 维护负债并存
- **PicoClaw**：历史积压清理阶段

### ⚪ 静默维护层
- **NullClaw**：仅 dependabot 在动，2 个月 PR 未合并
- **TinyClaw / ZeptoClaw**：24h 无活动

> **

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报

**日期：2026-08-18**
**数据周期：过去 24 小时**

---

## 1. 今日速览

NanoBot 今日保持高强度迭代节奏，单日 PR 更新达 15 条（10 条待合并、5 条已关闭），Issues 更新 3 条。开发活动集中在三大方向：**Gateway/进程管理的稳定性**、**Telegram 通道的网络韧性**，以及 **WebUI 交互体验增强**。从合并/关闭节奏看，多个 P2 优先级问题（含完整 issue → PR 闭环）已进入收尾阶段，项目健康度整体向好。无新版本发布，但功能侧已具备下一次 release 的素材基础。

---

## 2. 版本发布

**今日无新版本发布。**

---

## 3. 项目进展

以下 5 个 PR 在过去 24 小时内被关闭/合并，对项目稳定性与功能面均有实质性推进：

| PR | 标题 | 影响 |
|---|---|---|
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | **关键修复**，闭环 Issue [#5171](https://github.com/HKUDS/nanobot/issues/5171)。解决 Telegram 通道在网络抖动后永久静默卡死的问题，引入 watchdog 重建连接池 |
| [#5301](https://github.com/HKUDS/nanobot/pull/5301) | fix(telegram): bridge stdlib logging and detect stalled polling | 与 #5156 配套，将 stdlib logging 接入 loguru，叠加轻量级 liveness 检查（仅打日志、不重建），降低风险面 |
| [#5416](https://github.com/HKUDS/nanobot/pull/5416) | fix(gateway): stabilize process identities | 替换 macOS 上 locale 敏感的 `ps lstart` 进程身份识别，改为原生 `proc_pidinfo` 出生时间戳；统一 Windows/Linux/macOS 进程身份契约 |
| [#5410](https://github.com/HKUDS/nanobot/pull/5410) | fix(goal): stop repeating clarification replies | 修复 sustained goal 场景下 `AgentRunner` 对普通模型回复错误地反复注入续接逻辑的问题，闭环 Issue [#4864](https://github.com/HKUDS/nanobot/issues/4864) 中描述的"澄清回复循环"现象 |
| [#5406](https://github.com/HKUDS/nanobot/pull/5406) | feat(cli): add native TypeScript terminal UI | **重大功能**，取代曾被误标 merged 的 #4329。原生 TypeScript TUI 上线，CLI agent 入口走向统一 |

**整体推进评估**：项目在过去 24 小时内完成了"通道韧性 + 进程标识 + 目标循环 + TUI 重构"四个维度的关键收口，相当于为下一个 minor 版本清空了多条 P2 阻塞线。

---

## 4. 社区热点

按评论数与近期活跃度排序：

- **[Issue #4864 — Endless loop for `<tool_call> complete_goal>`](https://github.com/HKUDS/nanobot/issues/4864)**（7 条评论、👍 1）
  持续多日的核心讨论帖，问题指向 Gateway 将 `recap` 参数错误解析为裸字符串而非 JSON 对象，被社区认为是近期工具参数序列化变更引入的回归。今日已由 [PR #5410](https://github.com/HKUDS/nanobot/pull/5410) 提供修复，但 issue 仍处 OPEN 状态，需维护者确认关闭。

- **[PR #5358 — feat(webui): add session messaging via mentions](https://github.com/HKUDS/nanobot/pull/5358)**
  WebUI 多 session `@mention` 寻址能力，是 WebUI 协作化方向上的代表提案，体现社区对"多 agent 协同"诉求。

- **[PR #5364 — feat(webui): add temporary side conversations](https://github.com/HKUDS/nanobot/pull/5364)**
  `/side` 命令并行多会话草稿/流式状态，思路对标主流 IDE 的 inline chat 体验，是 WebUI 体验升级方向上的高曝光提案。

**诉求分析**：社区当前关注点集中在两点——一是 *bot 通道在生产环境的鲁棒性*（Telegram 长连接守护、Goal 循环），二是 *WebUI 从单会话工具向多会话协作终端演进*（mention、side conversation、follow-up suggestions [#5408](https://github.com/HKUDS/nanobot/pull/5408)）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 状态 | 描述 | 是否有 fix |
|---|---|---|---|---|
| 🔴 High | [#4864](https://github.com/HKUDS/nanobot/issues/4864) | OPEN | `complete_goal` 工具陷入无限循环，recap 参数被错误解析为字符串 | ✅ [PR #5410](https://github.com/HKUDS/nanobot/pull/5410)（已关闭，待主仓合并确认） |
| 🔴 High | [#5171](https://github.com/HKUDS/nanobot/issues/5171) | **CLOSED** | Telegram 长轮询在网络抖动后永久静默卡死 | ✅ [PR #5156](https://github.com/HKUDS/nanobot/pull/5156) |
| 🟡 Medium | [#5341](https://github.com/HKUDS/nanobot/pull/5341) | OPEN | Windows PowerShell 下 `curl` 别名导致 weather skill 失败 | ✅ 修复 PR 同号待合并 |
| 🟡 Medium | [#5415](https://github.com/HKUDS/nanobot/pull/5415) | OPEN | Windows venv 子进程 PID 接管失败，gateway 后台生命周期异常 | ✅ 修复 PR 同号待合并 |
| 🟡 Medium | [#5407](https://github.com/HKUDS/nanobot/pull/5407) | OPEN | 关闭 `gateway.heartbeat.enabled` 后持久化 cron job 仍在耗 token（回归问题） | ✅ 修复 PR 同号待合并 |
| 🟢 Low | [#5412](https://github.com/HKUDS/nanobot/pull/5412) | OPEN | 后台 gateway 子进程输出因 Python block-buffering 延迟写盘 | ✅ 修复 PR 同号待合并 |
| 🟢 Low | [#5413](https://github.com/HKUDS/nanobot/pull/5413) | OPEN | Provider 抛异常时未走 fallback 策略 | ✅ 修复 PR 同号待合并 |
| 🟢 Low | [#5414](https://github.com/HKUDS/nanobot/pull/5414) | OPEN | Slack 文件下载未沿重定向链做 URL 校验，SSRF 风险 | ✅ 修复 PR 同号待合并 |

**小结**：今日报告的 bug 多数已"自带修复 PR"，体现项目 issue → PR 闭环效率较高；安全相关条目（#5414 SSRF 校验）建议维护者优先审阅。

---

## 6. 功能请求与路线图信号

- **[Issue #5409 — Hybrid Spend Firewall](https://github.com/HKUDS/nanobot/issues/5409)**（新开，0 评论）
  作者 sophieamoure2026-ui 提出为框架加装"LLM 花费防火墙"：检测 power user 的无限循环 / 长链路推理、防止 surprise bill。该请求面向项目未来的商业化方向（作者明确提及"open-source → commercializing"），具备战略价值，但短期可能优先级不高。

- **WebUI 协作化三件套**（mention [#5358](https://github.com/HKUDS/nanobot/pull/5358) / side conversation [#5364](https://github.com/HKUDS/nanobot/pull/5364) / follow-up suggestions [#5408](https://github.com/HKUDS/nanobot/pull/5408)）
  三者均已落地为 PR 且均带 `priority: p2` 与 `conflict` 标签，呈现明显路线图意图——WebUI 升级到 DeerFlow 风格的协作型 IDE chat 体验。考虑到三者均标 conflict，**很可能在下一版本以"WebUI 协作套件"形式打包合并**。

- **CLI 原生 TUI**：[#5406](https://github.com/HKUDS/nanobot/pull/5406) 已关闭/合并，配套 [PR #5411](https://github.com/HKUDS/nanobot/pull/5411) refactor(cli): isolate local agent runtime 正在做 CLI 调度与运行时解耦，预示 CLI 将很快迎来 TUI + 本地 Python 执行双模式稳定形态。

---

## 7. 用户反馈摘要

- **#4864** 评论中反复出现"tool parameter serialization changed"等措辞，社区判断是"近期更新引入的 Gateway 回归"——暗示近期版本变更可能未充分覆盖参数序列化路径，建议维护者在 changelog 中明示该类契约变更。

- **#5171** 作者 QQQ300kuai 描述了"生产环境真实场景"：不稳定代理下消息永久堆积、process 不退出、log 完全静默。该反馈的价值在于暴露了"长连接守护"是生产级 bot 的硬需求，而日志静默恰恰是最危险的失败模式。

- **#5409** 虽是商业化视角的功能请求，但也折射出社区一个隐性焦虑：随着 agent 自主性增强，**运行成本与失控循环的可观测性**正成为框架的核心竞争力之一。

---

## 8. 待处理积压

- **[Issue #4864](https://github.com/HKUDS/nanobot/issues/4864)**：自 2026-07-09 创建至今已 40 天，虽 [PR #5410](https://github.com/HKUDS/nanobot/pull/5410) 已就位但 issue 仍 OPEN，建议维护者确认修复并正式关闭，避免误导。

- **[PR #5341 — make weather workflow Windows-safe](https://github.com/HKUDS/nanobot/pull/5341)**：标记 `priority: p2`、`conflict`，自 8 月 11 日起已 7 天无 review 动作，Windows 兼容性是社区跨平台体验的重要短板。

- **[PR #5358 / #5364 / #5408](https://github.com/HKUDS/nanobot)**：三件 WebUI 协作 PR 互相 conflict 且均 P2，需要维护者统筹合并顺序，否则会持续互锁。

- **Gateway 进程身份契约系列**（[#5416](https://github.com/HKUDS/nanobot/pull/5416) 已合并、[#5415](https://github.com/HKUDS/nanobot/pull/5415) 待合并、潜在遗留）涉及多平台契约统一，建议整体回归测试后再随版本发布。

---

> **维护者建议**：本日报对应的工作日（2026-08-18），建议优先处理：① 关闭 #4864 并核实 #5410 已落入 main；② 统筹 WebUI 三件套 PR 的合并顺序；③ 审阅安全相关 PR #5414（SSRF 校验）；④ 考虑为下一版本准备 release notes，已积累的修复与 TUI 功能足以支撑一次 minor bump。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**：2026-08-18
**项目地址**：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 一、今日速览

Hermes Agent 在 v0.20.3 patch 发布（v2026.8.16.2）后进入稳定消化期，过去 24 小时整体活跃度处于**中高水位**：50 条 Issue 更新、50 条 PR 更新，关闭率达 32%（16/50 Issues、15/50 PRs），合并/合并意向比例健康。修复主题围绕 **cron 媒体发送超时、安全扫描（threat scanning）、Desktop 子进程治理、Bot Mode 会话归属** 等回归问题集中收敛；同时有 1 项大型重构 Epic（#78647，大文件拆分 20/20 完成）正式关闭。社区讨论仍以安全相关 Issue 为主——Windows ACL 关键缺陷、威胁扫描尾部盲区、SSH/provenance 后续加固三线齐进，提示安全审计 Campaign（EPIC #82591）正在快速推进。

---

## 二、版本发布

### 🚢 v2026.8.16.2 — Hermes Agent v0.20.3（2026-08-16）

- **类型**：Patch release（稳定标签汇总）
- **范围**：自 v0.20.2 起累计约 **125 个 PR** 的合并变更统一打包发布
- **用途**：为 Docker 镜像、托管部署和全新安装提供稳定 tag；不引入新功能或破坏性变更
- **破坏性变更**：无（按 patch 版本约定）
- **迁移注意**：
  - 下游 Docker 镜像与托管部署应将基线 pin 到该 tag，避免漂移到 main 分支
  - 建议在升级后运行 `hermes_state.py` 相关的回归验证（涉及 #57921 的 `state.db` 锁竞争修复）
  - 若使用 cron 大附件发送，请提前确认 `HERMES_CRON_MEDIA_SEND_TIMEOUT` 环境变量（[#87967](https://github.com/NousResearch/hermes-agent/issues/87967) 相关）

> 详细变更日志与已知问题请参见对应 [Release 页面](https://github.com/NousResearch/hermes-agent/releases/tag/v2026.8.16.2)。

---

## 三、项目进展（重要合并/关闭 PR）

| PR | 主题 | 影响面 |
|---|---|---|
| [#88787](https://github.com/NousResearch/hermes-agent/pull/88787) | cron 媒体发送超时可配置 + 失败原因不再为空（合并 [#87965](https://github.com/NousResearch/hermes-agent/pull/87965)、[#87967](https://github.com/NousResearch/hermes-agent/pull/87967) 两线） | **可观测性 + 兼容性** 双改善，默认 300s，可通过 `HERMES_CRON_MEDIA_SEND_TIMEOUT` 或 config.yaml 调整 |
| [#88790](https://github.com/NousResearch/hermes-agent/pull/88790) | 安全：`scan_for_threats` 现在扫描**截断后输入的尾部**（修复 65,536 字符后的扫描盲区，对应 #84259） | **安全** — 关掉 prompt-injection / exfil payload 头部规避 |
| [#88789](https://github.com/NousResearch/hermes-agent/pull/88789) | 终端工具：阻止未引号 heredoc 改用 `write_file` | **可靠性 + 安全** — 防止 bash 变量/命令扩展导致 TypeScript 模板字面量等被破坏 |
| [#88788](https://github.com/NousResearch/hermes-agent/pull/88788) | Desktop：Bot Mode Bots pane 回到 Sessions 区 tab，Cronjobs pane 仅在 Bots 模式出现 | **UX** — 恢复 Teknium 原版 Bot Mode 布局 |
| [#88785](https://github.com/NousResearch/hermes-agent/pull/88785) | Desktop：基于所有权（而非 id）的 hide 扫除，CLI Bot Mode 会话不再泄漏到全局 Sessions 边栏 | **会话归属正确性** |
| [#88793](https://github.com/NousResearch/hermes-agent/pull/88793) | 自动 lint/format 修复（hermes-seaeye[bot]） | **工程卫生** |
| [#88792](https://github.com/NousResearch/hermes-agent/pull/88792) | arxiv skill：旧式含 `v` 的 arXiv ID 不再被错切 | **工具正确性** |

**项目整体推进评估**：今日净合并 8 个修复/小特性 PR，**修复 > 新功能**，符合 patch 后的消化节奏。安全侧（威胁扫描尾部 + heredoc + Bot Mode 归属）三条独立修复形成小高潮；UI/Desktop 团队则完成了"Bot Mode 体验回归原版"为目标的一组改动。

---

## 四、社区热点（评论/反应最活跃）

| 议题 | 链接 | 评论 | 👍 | 诉求分析 |
|---|---|---|---|---|
| **#78647** [CLOSED] Repo-wide god-file sharding epic 20/20 done | [Link](https://github.com/NousResearch/hermes-agent/issues/78647) | **76** | 0 | 长期架构债清理落地，"shard, never revert" 成铁律。**大量评论源自跨 PR 协调**，反映重构是一个跨多周的连续战役 |
| **#66616** [OPEN] Skills index `degraded`（索引 29.8h 旧，超过 26h 上限） | [Link](https://github.com/NousResearch/hermes-agent/issues/66616) | **48** | 0 | Skills Hub 的核心数据源 `/docs/api/skills-index.json` 失活，自动探针已持续告警。**48 条评论多为反复 rebuild / 临时绕过讨论**，提示 cron 调度本身可能不稳 |
| **#83565** [EPIC] 子进程凭证继承收敛 | [Link](https://github.com/NousResearch/hermes-agent/issues/83565) | 5 | 0 | 由 #77027 引发的"可信 Hermes 凭证泄至不可信子进程"问题群；多条 PR/Issue 都被收敛到这里 |
| **#77305** Subagent 迭代预算在 API 调用前就被吃掉，失败链被饿死 | [Link](https://github.com/NousResearch/hermes-agent/issues/77305) | 5 | 0 | 揭示 retry/fallback 行为对可用性的隐性影响 |
| **#87654** `vision_analyze` / `browser_vision` 在首次探测后消失 | [Link](https://github.com/NousResearch/hermes-agent/issues/87654) | 5 | 0 | `_AuxProbeClientStub` 在 `_get_cached_client` 中被缓存，长进程下工具静默丢失 |

**热点背后的诉求**：社区当前最关心的不是新功能，而是**稳定性与可观测性**——具体集中在三个面：① 跨平台/跨进程边界（凭证继承、子进程生命周期）；② 后台数据管线（Skills 索引、Bot Mode 会话）；③ 关键工具的可用性"半衰期"问题（vision、API 失败链）。

---

## 五、Bug 与稳定性

### 🔴 严重（Critical / 验证可复现）

- **[#77462](https://github.com/NousResearch/hermes-agent/issues/77462) — Windows at-rest ACL 洞（CRITICAL，**集群 W-ACL**）**
  - `_secure_file` 在 Windows 下是 no-op，`os.chmod` 仅切换只读位，**未设 ACL**；icacls 现场显示秘密可被 SYSTEM/Administrators 读取
  - 状态：**OPEN**，尚无 fix PR

### 🟠 较高（P2）

- **[#77305](https://github.com/NousResearch/hermes-agent/issues/77305)** — delegation 失败调用消耗子代理迭代预算；fallback 链被饿死 — **OPEN**
- **[#87654](https://github.com/NousResearch/hermes-agent/issues/87654)** — vision 工具首次探测后从所有 session 消失 — **OPEN**
- **[#57921](https://github.com/NousResearch/hermes-agent/issues/57921) [CLOSED]** — `hermes_state.py` `timeout=1.0` 在 dashboard GIL 受压时触发 `database is locked` — **已修复（关闭）**
- **[#76064](https://github.com/NousResearch/hermes-agent/issues/76064) [CLOSED] 👍2** — Desktop 默认开启 demo/dogfood 插件（点击计数器、重复 gateway pill）— **已修复（关闭）**
- **[#76245](https://github.com/NousResearch/hermes-agent/issues/76245) [CLOSED]** — Desktop quit 时 `hermes serve` 子进程未被可靠 kill，遗留孤儿 — **已修复（关闭）**
- **[#80898](https://github.com/NousResearch/hermes-agent/issues/80898) [CLOSED]** — macOS 重启 Desktop 累积孤儿 `hermes serve` — **已修复（关闭）**
- **[#79101](https://github.com/NousResearch/hermes-agent/issues/79101) [CLOSED]** — API server 把虚拟模型别名（`hermes-agent`）当真实 model 持久化，破坏 gateway 默认 — **已修复（关闭）**
- **[#48860](https://github.com/NousResearch/hermes-agent/issues/48860) 👍1** — OAuth prompt sanitizer 把 `hermes-agent.nousresearch.com` 贪心替换成 `claude-code.nousresearch.com`（NXDOMAIN）— **OPEN**
- **[#77529](https://github.com/NousResearch/hermes-agent/issues/77529)** — 刷新失败后 secret provenance 丢失，MCP stdio 子进程丢失现存 secret — **OPEN**
- **[#78793](https://github.com/NousResearch/hermes-agent/issues/78793)** — `write_file` / `patch` 静默破坏 `.git/` 内 git 管理状态（HEAD、refs/、index）— **OPEN**
- **[#84033](https://github.com/NousResearch/hermes-agent/issues/84033) [duplicate]** — macOS `unrestricted` computer_use daemon 在嵌入式子进程中丢失 Accessibility TCC 身份 — **OPEN**
- **[#88661](https://github.com/NousResearch/hermes-agent/issues/88661)** — MCP 工具超时"停泊"整个 server 连接，所有工具被反注册，直至 gateway 重启 — **OPEN**
- **[#88762](https://github.com/NousResearch/hermes-agent/issues/88762)** — Qwen 3.8 在本地 llama.cpp 失败，3.6 OK — **OPEN（需 repro）**

### 🟡 一般（P3）

- **[#78539](https://github.com/NousResearch/hermes-agent/issues/78539)** — README `interrupt` 行与 `/busy` 模型冲突 — OPEN
- **[#78567](https://github.com/NousResearch/hermes-agent/issues/78567)** — `/model provider:model` 文档与代码不一致 — OPEN
- **[#77476](https://github.com/NousResearch/hermes-agent/issues/77476)** — CI pytest 退出码 5 被视作 PASS，flake retry 洗白 gate；无 Windows CI job — OPEN
- **[#84259](https://github.com/NousResearch/hermes-agent/issues/84259) / [#84248](https://github.com/NousResearch/hermes-agent/issues/84248) / [#84257](https://github.com/NousResearch/hermes-agent/issues/84257)** — 三条 SECURITY 42-class 闭合任务 — OPEN（[#88790](https://github.com/NousResearch/hermes-agent/pull/88790) 已修 #84259）

> **修复 vs 报告比例（今日）**：报告 14 条 Bug，**已关闭/已修 6 条**（43%），整体修复响应速度良好。Windows ACL（#77462）和 write_file/patch 破坏 git 状态（#78793）是当前最值得升级处置的两条残留风险。

---

## 六、功能请求与路线图信号

| 请求 | 链接 | 信号 |
|---|---|---|
| Inworld 模型作为一等 provider | [PR #85774](https://github.com/NousResearch/hermes-agent/pull/85774) | 提供 OpenAI-兼容端点 `https://api.inworld.ai/v1`，可聚合多个上游 — **路线图候选**（审查中） |
| OpenAI Responses `text.verbosity` 可配置 | [PR #72638](https://github.com/NousResearch/hermes-agent/pull/72638) | GPT-5 系列正式字段；空值/非法值保留 provider 默认 — **可合入** |
| 设计模式：Desktop 预览/浏览器面板选中元素 → agent 上下文 | [Issue #84177](https://github.com/NousResearch/hermes-agent/issues/84177) | 与 [in-app browser #48760](https://github.com/NousResearch/hermes-agent/issues/48760) 联动；👍 1 |
| 多个 Desktop 客户端连接同一 `hermes serve` 后端 | [PR #88794](https://github.com/NousResearch/hermes-agent/pull/88794) | 多用户/私有部署文档补充 |
| Desktop `host.revealPane()`（插件可召回自己被关闭的窗格） | [PR #88795](https://github.com/NousResearch/hermes-agent/pull/88795) | 修 #88658，扩展 SDK host 表面 |
| Termux：原生 pkg install/upgrade 升格为 Android 一等路径 | [Issue #86986](https://github.com/NousResearch/hermes-agent/issues/86986) [CLOSED] | 解决 rolling Termux 非 manylinux 兼容问题 |
| MCP server 配置支持 env 引用 secret | [Issue #11239](https://github.com/NousResearch/hermes-agent/issues/11239) | 👍 2 — 长期诉求，**待处理积压

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报
**日期：2026-08-18**

---

## 1. 今日速览

PicoClaw 项目过去 24 小时整体处于**中等活跃**状态，仓库没有新版本发布，但 Issue 与 PR 流转正常：3 条 Issue 中有 1 条被关闭、2 条仍有讨论；4 条 PR 中 3 条已完成生命周期、仅 1 条待处理。值得注意的是，当天关闭的关键 PR #3312 与对应 Issue #3311 同步处理，形成了"报告—修复—关闭"的完整闭环，反映出维护者对生产环境稳定性问题的响应效率较高。社区讨论度偏冷清，最活跃的 Issue 也仅有 6 条评论，整体热度低于一般活跃开源项目。

---

## 2. 版本发布

⚠️ 今日无新版本发布。

最近一次版本动态缺失，建议关注 [Releases 页面](https://github.com/sipeed/picoclaw/releases) 获取最新动向。

---

## 3. 项目进展

过去 24 小时共有 **3 条 PR 关闭**，项目在多个方向均有实质推进：

| PR | 主题 | 意义 |
|---|---|---|
| [#3312](https://github.com/sipeed/picoclaw/pull/3312) | fix(agent): stop turn early on repeated identical tool failure | **重要稳定性修复**，对应生产环境 bug #3311。当工具持续返回相同错误时，代理循环会反复调用 LLM 直至 `max_tool_iterations`，导致用户长时间收不到回复。该 PR 在相同错误重复出现时提前终止 turn，显著改善响应体验。 |
| [#271](https://github.com/sipeed/picoclaw/pull/271) | fix: env overrides when config.json is missing and add regression test | 修复了 **Fly.io 等无配置文件部署场景下的环境变量失效问题**，并补齐了回归测试。当 `config.json` 缺失时，`LoadConfig` 不再忽略 env 覆盖，避免默认模型 `glm-4.7` 因凭证缺失而崩溃。该 PR 自 2026-02-16 起积压约 6 个月才合并，反映出长期积压问题正在被清理。 |
| [#2606](https://github.com/sipeed/picoclaw/pull/2606) | feat: enhance Weixin channel support and configuration | 增强 **微信渠道多实例支持**，覆盖后端、前端与文档，新增渠道目录、动态实例处理、非法渠道名校验等能力。该 PR 自 2026-04-21 起积压近 4 个月，同样属于清理历史积压工作。 |

**整体评估**：今日合并的三条 PR 分别覆盖了 **代理稳定性、部署兼容性、渠道扩展** 三个关键方向，项目在健壮性与功能完整度上均有稳步推进。

---

## 4. 社区热点

| 排名 | Issue/PR | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 6 | 0 | [Feature] Better support long messages in IRC |
| 2 | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 2 | 0 | [BUG] Repeated identical tool failure loops silently |

**分析**：
- **#3287** 是当前最活跃的讨论帖，由 `superuser-does` 于 2026-07-22 提出，关注 IRCv3 长消息处理。IRC 协议默认 512 字节上限，超长消息会被客户端自动换行拆分，而 PicoClaw 未能识别同一消息的多段切片，导致语义割裂。6 条评论说明用户对此进行了较深入讨论，但 0 👍 也表明该功能尚未获得广泛投票支持。
- **#3311** 的 2 条评论聚焦于 Telegram 生产环境的"沉默式失败"现象，但因 #3312 修复已落地，讨论热度迅速冷却。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 描述 | 状态 | Fix PR |
|---|---|---|---|---|
| 🟠 **高** | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | Google Antigravity 鉴权与模型发现正常，但每次生成请求均返回 429 `RESOURCE_EXHAUSTED`，响应中无 `quota` 字段。新开 Issue，需关注 Google API 配额策略或客户端重试逻辑 | OPEN | ❌ 无 |
| 🟡 **中** | [#3311](https://github.com/sipeed/picoclaw/issues/3311) | 工具反复相同错误时代理静默循环至 `max_tool_iterations`，用户长时间无回复（Telegram 生产环境出现） | CLOSED | ✅ [#3312](https://github.com/sipeed/picoclaw/pull/3312) |

**稳定性观察**：高严重度的 #3339 涉及 OAuth 范围与配额异常，可能影响依赖 Google Antigravity 的用户，但目前缺乏修复方案；#3311 的快速修复闭环值得肯定。

---

## 6. 功能请求与路线图信号

| 需求 | 提议者 | 关联 PR | 落地可能性评估 |
|---|---|---|---|
| IRC 长消息（>512 字节）合并识别 | superuser-does | 无 | 🟡 中等 — 讨论已持续近一个月，但 0 👍 显示社区支持有限；IRC 渠道在 AI 助手中属于边缘功能，优先级可能不高 |
| Slack 文件上传 `FileSize` 缺失 | octavioturra | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 🟢 较高 — PR 已开，且明确指出 slack-go v0.23.1 校验逻辑，属于明确技术缺陷，预计短期内合并 |

---

## 7. 用户反馈摘要

- **痛点场景 1：IRC 长消息切分**（#3287）
  - 用户明确反映 PicoClaw 无法将 IRC 客户端自动拆分的长消息识别为单一意图，造成回复碎片化。社区虽讨论了 6 楼，但缺少维护者正面回应，用户诉求长期悬置。

- **痛点场景 2：工具循环沉默**（#3311）
  - 生产环境出现于 Telegram 渠道：用户发送 `git` 命令后毫无响应。`lucapette` 在评论中补充了"任何被 shell 安全守卫拦截的命令都会触发此问题"，扩大了影响面 — 修复 PR #3312 已覆盖此类场景。

- **痛点场景 3：Fly.io 无 config.json 部署**（#271）
  - `tbeaudouin05` 在 PR 描述中指出，使用纯环境变量/Secrets 部署时，应用仍走默认 `glm-4.7` 模型并因凭证缺失而崩溃。修复已合入，但反映**项目对纯环境部署场景的文档与默认值处理曾存在盲点**。

- **痛点场景 4：Antigravity 配额误判**（#3339）
  - `k3XD16` 报告 OAuth 鉴权成功且模型发现正常，但生成请求一律返回 429。响应体无 `quota` 字段暗示问题可能在客户端请求重试或 Google 侧速率限制策略上，需要维护者进一步诊断。

---

## 8. 待处理积压

| 类别 | 编号 | 创建日期 | 闲置天数 | 风险 |
|---|---|---|---|---|
| 🟠 无维护者响应 Issue | [#3287](https://github.com/sipeed/picoclaw/issues/3287) | 2026-07-22 | **27 天** | 已有 6 条评论讨论但维护者未正面回应，且被标记为 stale，存在被自动关闭风险 |
| 🟡 待合并 PR | [#3340](https://github.com/sipeed/picoclaw/pull/3340) | 2026-08-17 | 1 天 | 新开 PR，技术描述清晰，建议 1 周内完成 review |
| 🟠 新 Bug 无修复 | [#3339](https://github.com/sipeed/picoclaw/issues/3339) | 2026-08-17 | 1 天 | 涉及 Google Antigravity 集成，影响使用该模型的用户，需尽快确认根因 |

**维护者关注建议**：
1. 优先 review [#3340](https://github.com/sipeed/picoclaw/pull/3340)，技术方案明确，可快速闭环；
2. 对 #3287 给出明确回应（即使是否定），避免社区讨论沦为单方诉求；
3. 启动 #3339 的根因排查，特别是 OAuth scopes 与 429 错误之间的关联。

---

**报告生成时间**：2026-08-18
**数据来源**：PicoClaw GitHub 仓库公开数据
**链接汇总**：[Issues](https://github.com/sipeed/picoclaw/issues) · [Pull Requests](https://github.com/sipeed/picoclaw/pulls) · [Releases](https://github.com/sipeed/picoclaw/releases)

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报

**报告日期：2026-08-18**
**数据来源：github.com/qwibitai/nanoclaw**

---

## 1. 今日速览

NanoClaw 在过去 24 小时呈现**高强度架构级迭代**特征：42 条 PR 更新（25 条合并/关闭，17 条仍待审），4 条 Issue 更新（1 关闭、3 新增 Bug），0 版本发布。整体活跃度**远高于常规基线**，核心贡献者 gavrielc 集中推动 [channels/Slack 通道层重构](https://github.com/nanocoai/nanoclaw/issues?q=author%3Agavrielc+created%3A2026-08-17..2026-08-18)（10 余条 PR 串行合并），同时 glifocat、wakqasahmed、torbenstruever 等贡献者并行提交了 4 条 Bug 修复 PR。项目当前处于**架构稳定化阶段**（driver seam、hook seam、registration seam 全面铺开），但伴随多起真实用户场景下的 Bug 报告（任务投递、消息积压、codex 类型断言）。

---

## 2. 版本发布

**今日无新版本发布。** 当前 trunk 处于活跃重构窗口期，多个架构性 PR（#3306 driver seam、#3307 session 生命周期、#3309 Slack defaults）尚未合并至主干，预计短期不会有新 tag 触发。

---

## 3. 项目进展

### 通道层（Slack）大规模合并集群（gavrielc）

今日关闭的 PR 中，gavrielc 提交的"通道层重构 wave"形成完整闭环：

| PR | 主题 | 意义 |
|---|---|---|
| [#3304](https://github.com/nanocoai/nanoclaw/pull/3304) | channels: adapter-declared session-mode context defaults | 让适配器声明 `sessionMode`，移除调用点硬编码 |
| [#3305](https://github.com/nanocoai/nanoclaw/pull/3305) | slack: shared channel-layer library + canvas cluster（wave A） | 共享 Slack Web API 客户端 + token key 约定 |
| [#3309](https://github.com/nanocoai/nanoclaw/pull/3309) | slack: defaults factory, membership, onboarding（wave B） | `sessionMode: per-thread` 在 Slack 全上下文统一 |
| [#3310](https://github.com/nanocoai/nanoclaw/pull/3310) | restore slack-formatting container skill | 恢复上游 main 合并时丢失的 skill 文件 |
| [#3292](https://github.com/nanocoai/nanoclaw/pull/3292) | channels: bridge inbound-policy registration seam | 入站策略注册扩展点 |
| [#3295](https://github.com/nanocoai/nanoclaw/pull/3295) | channels: generic membership-event hook | 平台成员事件转发 |
| [#3293](https://github.com/nanocoai/nanoclaw/pull/3293) | router: session-created hook | 全新 engaged session 通知 |
| [#3294](https://github.com/nanocoai/nanoclaw/pull/3294) | delivery: post-delivery hook | 首次投递上下文通知 |
| [#3296](https://github.com/nanocoai/nanoclaw/pull/3296) | agent-runner: extendTool | MCP 工具 schema 加性扩展点 |
| [#3297](https://github.com/nanocoai/nanoclaw/pull/3297) | setup: per-channel pre-step and companion-skill | 安装向导扩展点 |

**评估**：这是 NanoClaw 通道抽象的一次**重大里程碑**。从"channel 内联实现"转向"模块化注册 seam"，大幅降低后续接入新平台（如后续可能的 Teams/Discord）的边际成本。

### 会话运行时驱动抽象（driver seam）

| PR | 状态 | 说明 |
|---|---|---|
| [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) | OPEN | 新增 `src/drivers/`，Docker 作为内置实现，纯加性、无调用点变更 |
| [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | OPEN（stack on #3306） | 主机侧 session 生命周期（spawn/adoption/stop/rebuild）走 `SessionDriver` seam |
| [#3308](https://github.com/nanocoai/nanoclaw/pull/3308) | OPEN（stack on #3306） | 拒绝在未清理文件夹上创建 agent group，闭合数据丢失风险 |

**评估**：驱动抽象是项目向**多运行时（K8s/Podman/远程沙箱）可移植**铺路的关键步骤。

---

## 4. 社区热点

按评论/互动维度排序，今日无特别"爆款"讨论贴（点赞均为 0，评论 ≤ 2），整体社区互动较为克制。但**单点深度的技术议题**集中在以下两处：

- **[#3203 codex provider typecheck 失败](https://github.com/nanocoai/nanoclaw/issues/3203)** — 报告者 mshirel 给出完整链路分析：`/add-codex` 在 main 分支 typecheck 失败，codex provider 发出未声明的 `file` ProviderEvent，且无消费方导致图像被静默丢弃。此 Issue 自 8 月 8 日开放至今 10 天，**尚未合并修复**。与之相关的 [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) 已尝试将 `@openai/codex` 从 0.138.0 bump 至 0.146.0 以提前适配 GPT-5.4 模型退役（2026-08-31）。
- **[#1143 Skills 文档 `/data/env` 路径过期](https://github.com/nanocoai/nanoclaw/issues/1143)** — bot 自动化 triage 后于今日关闭，说明已落实文档修订。

整体诉求集中在**"类型契约清晰度"**与**"provider 事件可观测性"**——即用户希望 provider/事件层有更强的 schema 约束。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 严重 — 数据/会话行为异常

1. **[#3301 Tasks firing in chat sessions run one-door](https://github.com/nanocoai/nanoclaw/issues/3301)** — 报告者 glifocat
   - **现象**：自 2.1.48（#2988 one-door task delivery）后，`kind='task'` 行在 chat session 内触发时，整个 query 切换为 task 模式，导致 logs 丢失、回复被吞、series 未列出。
   - **影响**：所有在升级前创建的 task 行都会被影响。
   - **修复 PR**：[#3303](https://github.com/nanocoai/nanoclaw/pull/3303) 保持 task 行的 run logs（OPEN，未合并）

2. **[#3289 Bound pending-message polling](https://github.com/nanocoai/nanoclaw/issues/3289)** — 报告者 glifocat
   - **现象**：`getPendingMessages()` 在 `1e149b3f` commit 上将所有到期 pending 行一次性载入 JS 再施加 max 限制，累积积压下存在内存/性能风险。
   - **修复 PR**：[#3291](https://github.com/nanocoai/nanoclaw/pull/3291) bound pending message polling（OPEN）

3. **[#3203 codex provider `file` event 未声明](https://github.com/nanocoai/nanoclaw/issues/3203)** — `/add-codex` main 分支 typecheck 失败，生成的图像被丢弃。
   - **修复 PR**：暂无针对 event schema 的修复 PR，仅 [#3299](https://github.com/nanocoai/nanoclaw/pull/3299) 的 codex pin 升级部分相关

### 🟡 中等

4. **[#3300 escape attachment type in agent-facing XML](https://github.com/nanocoai/nanoclaw/pull/3300)** — `formatAttachments` 转义了所有字段唯独漏掉 `type`，由 torbenstruever 提交（OPEN）。属于潜在 XSS/injection 风险。

5. **[#3302 OneCLI gateway bind 地址错误](https://github.com/nanocoai/nanoclaw/pull/3302)** — `setup/onecli.ts` 写入了 `api-host` 但未将 gateway 自身的 `docker-compose` bind 对齐，由 wakqasahmed 提交（OPEN）。

6. **[#3311 scheduled-task 错误路由到 operator](https://github.com/nanocoai/nanoclaw/pull/3311)** — 修复 #3223：scheduled-task 抛错被作为 `chat` 消息复制 batch 的 routing 字段，但 task batch 不携带 routing 字段，导致错误消息丢失（OPEN，今日创建）。

### 🟢 已解决

- **[#1143 Skills docs `/data/env` 路径](https://github.com/nanocoai/nanoclaw/issues/1143)** — 已关闭（文档修订）

---

## 6. 功能请求与路线图信号

| 信号 | PR/Issue | 评估 |
|---|---|---|
| **Local Web Chat 通道** | [#3298 feat(channels): add local web chat](https://github.com/nanocoai/nanoclaw/pull/3298)（amit-shafnir，OPEN） | loopback-only 浏览器聊天 UI，作为 channel 适配器示例。**信号意义大**：可作为后续通道适配器开发的参考实现 |
| **GPT-5.4 模型退役适配** | [#3299 bump @openai/codex 0.138.0 → 0.146.0](https://github.com/nanocoai/nanoclaw/pull/3299)（chiptoe-svg，OPEN） | 时效性强（2026-08-31 截止），优先级高 |
| **Driver seam 抽象** | [#3306](https://github.com/nanocoai/nanoclaw/pull/3306) + [#3307](https://github.com/nanocoai/nanoclaw/pull/3307) | 为远程 sandbox（firecracker/gVisor/K8s）铺路，属中长期路线图信号 |
| **Inbound policy hook** | [#3292](https://github.com/nanocoai/nanoclaw/pull/3292) | 允许模块拦截入站派发，潜在 bot-authored-message 防御场景 |

**路线图判断**：短期内可见的版本重点仍是**通道抽象稳定化 + bug 修复**，下一 release 可能集中打包 #3291/#3293/#3294/#3296 等 hook seam + bug fix。

---

## 7. 用户反馈摘要

由于 Issue 评论普遍 ≤ 2 条，今日直接用户痛点信号有限，但可从 Issue 描述中提炼以下场景：

- **任务历史连续性焦虑**（#3301）：用户反馈升级到 2.1.48 后历史 task 行的 logs 与 series 全部失效，反映**用户对版本升级的数据向后兼容极为敏感**。
- **Codex 用户对图像生成的可见性诉求**（#3203）：图像"静默丢弃"是典型的"无声失败"反模式，用户希望失败可见、可诊断。
- **Setup 阶段 OneCLI 网络配置复杂度**（#3302）：用户场景下网关地址配置分散，**呼唤更傻瓜化的 setup 流程**。
- **Skills 文档与代码脱节**（#1143）：技能路径 `/data/env` 已被删除但文档未同步——这是**文档与代码生命周期管理流程**的薄弱环节。

整体满意度信号：暂无明显负面情绪，多数讨论保持技术性、建设性。

---

## 8. 待处理积压

提醒维护者关注以下**长期或优先级未对齐**的条目：

| 编号 | 类型 | 创建日 | 状态 | 备注 |
|---|---|---|---|---|
| [#3203](https://github.com/nanocoai/nanoclaw/issues/3203) | Bug（codex provider event） | 2026-08-08 | OPEN 10 天 | 与 #3299 部分相关但 schema 修复未跟进；GPT-5.4 退役 deadline 临近 |
| [#2988](https://github.com/nanocoai/nanoclaw/issues/2988) | 关联 Bug（one-door task delivery） | 早于 7 月 | 已引入 #3301 回归 | 需回溯此改动对 chat session 内 task 行的影响 |
| [#3223](https://github.com/nanocoai/nanoclaw/issues/3223) | Bug（scheduled-task 错误路由） | 早于 8 月 | PR #3311 待合 | 修复方案已就绪 |
| [#2903](https://github.com/nanocoai/nanoclaw/issues/2903) | Bug（OneCLI bind） | 早于 8 月 | PR #3302 待合 | 修复方案已就绪 |

---

## 附：项目健康度评分卡

| 维度 | 评分 | 说明 |
|---|---|---|
| **活跃度** | ⭐⭐⭐⭐⭐ | 42 PR / 24h，远超常规 |
| **合并吞吐** | ⭐⭐⭐⭐ | 25 closed，但其中 15+ 来自同一作者的串行 wave，存在 reviewer 疲劳风险 |
| **Bug 响应** | ⭐⭐⭐ | 4 个新 bug 中 3 个已有对应 fix PR，但 #3203 已 10 天未根治 |
| **架构演进** | ⭐⭐⭐⭐⭐ | seam 化抽象系统化推进，长期可维护性显著提升 |
| **社区互动** | ⭐⭐ | 点赞/评论密度偏低，需关注是否反映 reviewer 不足 |
| **版本节奏** | ⭐⭐ | 0 release，与高 PR 量形成反差，存在合并堆积风险 |

---

*报告生成依据：NanoClaw GitHub 仓库公开数据（2026-08-17 ~ 2026-08-18 区间）。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期：2026-08-18**
**数据来源：** [github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日活跃度处于**极低水平**。过去 24 小时内仓库没有新 Issue 创建或关闭，仅有 1 条 PR 处于待合并状态，且该 PR 来自 dependabot 自动化依赖更新机器人，无新版本发布。整体来看，项目处于维护期常态运转状态，社区互动较少，无显著的功能推进或问题修复事件。

---

## 2. 版本发布

本周期内 **无新版本发布**，跳过本节。

---

## 3. 项目进展

今日**无 PR 合并或关闭**。唯一活跃的 PR 为 dependabot 提交的依赖更新：

- **[#956](https://github.com/nullclaw/nullclaw/pull/956)** — ci(deps): bump alpine from 3.23 to 3.24 in the docker-images group
  - 该 PR 自 2026-06-15 创建以来长期处于 OPEN 状态，最近更新于 2026-08-17，仍未合并
  - 由于是自动化机器人提交的依赖版本更新，对项目功能性进展无实质性贡献
  - **整体评估：项目今日在功能层面无向前推进**

---

## 4. 社区热点

今日**无新 Issue 或讨论产生**，无评论活跃的 PR（PR #956 评论数未定义，👍 数为 0）。

社区讨论度评估：**极低**。无热点话题可供分析。

---

## 5. Bug 与稳定性

今日**无 Bug 报告、崩溃或回归问题被记录**。

跳过本节详细分析。建议维护者留意是否有历史未解决的稳定性问题长期积压。

---

## 6. 功能请求与路线图信号

今日**无新功能请求提交**。

由于缺乏社区信号输入，无法判断未来版本可能纳入的功能方向。维持现有路线观察。

---

## 7. 用户反馈摘要

今日**无新 Issue 或评论**，无可提取的真实用户痛点、使用场景或满意度反馈。

---

## 8. 待处理积压

| 编号 | 类型 | 标题 | 创建日期 | 状态 | 链接 |
|------|------|------|---------|------|------|
| #956 | PR | ci(deps): bump alpine from 3.23 to 3.24 | 2026-06-15 | OPEN（已挂起约 2 个月） | [查看](https://github.com/nullclaw/nullclaw/pull/956) |

**维护者提醒：**
- PR #956 已开起约 2 个月仍未合并，虽然是依赖更新类 PR，但长期挂起可能导致依赖版本持续落后。建议维护者评估是否合并，或关闭后等待 dependabot 重新生成更新。
- 今日无 Issue 流入意味着也**无新积压产生**，但也意味着社区活跃度需要关注——是否因项目已进入稳定期，或因响应机制导致用户流失？建议关注 GitHub Discussions 区或其他社区渠道的实际活跃情况。

---

## 项目健康度评估

| 指标 | 状态 | 说明 |
|------|------|------|
| 代码提交活跃度 | 🟢 稳定 | 无异常，但功能层面无推进 |
| Issue 响应健康度 | ⚪ 无数据 | 24 小时内无 Issue 流动 |
| PR 流转效率 | 🟡 需关注 | dependabot PR 长期未合并（#956 已挂起 2 个月） |
| 版本发布节奏 | ⚪ 无数据 | 本周期无新版本 |
| 社区互动热度 | 🔴 偏低 | 无新讨论、无评论活跃内容 |

**总结：** NullClaw 今日整体处于"静默维护"状态，无功能性进展也无社区波动。核心关注点应放在 PR #956 的长期挂起问题，以及探究社区活跃度偏低的原因是否反映更深层的项目状态信号。

---
*本报告由 AI 项目分析师自动生成，数据基于 GitHub 公开 API 采集。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**日期：2026-08-18**
**数据周期：过去 24 小时**

---

## 1. 今日速览

IronClaw 今日活跃度处于高位运行状态：28 条 Issue 更新（22 条活跃/新开、6 条关闭）、44 条 PR 更新（28 条待合并、16 条已合并或关闭），并伴随 **v1.3.0-rc.1** 发布，整体推进节奏稳定。社区工作明显围绕两条主线展开：一是以 Epic #7591 为核心的"DB 写压力下降约 60%"优化工程，多个子 Issue 已分层关闭；二是以 #7687–#7691 序列为代表的"持久化通知收件箱"重构，正在打通从存储到 UI 的完整链路。与此同时，QA 团队发起了 08/17–08/23 周度的 Dogfooding Epic (#7685)，持续将反馈反哺产品迭代。

---

## 2. 版本发布

### ironclaw-v1.3.0-rc.1（2026-08-17）

首个 1.3.0 候选版本已发布，提供 shell 与 PowerShell 两种预构建二进制安装方式。

- 安装命令：
  ```sh
  curl --proto '=https' --tlsv1.2 -LsSf https://github.com/nearai/ironclaw/releases/download/ironclaw-v1.3.0-rc.1/ironclaw-installer.sh | sh
  ```
- Release Notes 字段当前为空，详细变更需以 GitHub Release 页面与里程碑 Issue 为准。
- 已知关联：#7647（[v1.3.0] 自动化调度的确定性 no-delivery 结果）已于今日关闭，对应 PR 已合并。
- 建议：RC 阶段不建议生产环境部署，建议先在预生产实例对照 [#7685 Epic](#) 进行 Dogfooding。

🔗 [Release 链接](https://github.com/nearai/ironclaw/releases/tag/ironclaw-v1.3.0-rc.1)

---

## 3. 项目进展

今日 16 条 PR 完成合并/关闭，对多条主线路径形成实质推进：

| 编号 | 主题 | 意义 |
|------|------|------|
| [#7703 (CLOSED)](https://github.com/nearai/ironclaw/pull/7703) | WASM 类型化 WIT 工具响应与 bundled guest 迁移 | 因设计变更被 [#7711](#) 整体吸收，避免"先增后删"发版抖动 |
| [#7710 (CLOSED)](https://github.com/nearai/ironclaw/pull/7710) | 针对 #7682 的多 Agent 评审修复 | 一次性落地 7 项 WebUI 连接落地页加固 + Slack 链接行为收敛 |
| [#7663 (CLOSED)](https://github.com/nearai/ironclaw/pull/7663) | 1.2 修复前向移植 + 线程索引修复 | Windows 文件系统/JSON、运行时 curl 健康检查与稳定 1.2.0 元数据 |
| [#7594 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7594) | Tier 1：循环里程碑走 CoalescingEventSink | 每轮释放 ~30 次池借出，纯收益，无行数变化 |
| [#7598 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7598) | Tier 2：能力调用状态写收敛至 gate/terminal 边界 | 单条最大收益：60→20 行/轮（安全变体） |
| [#7605 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7605) | Tier 3：消息查找索引同行化 | 消除最热表的写放大 |
| [#7275 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7275) | 跨会话持久记忆召回验证 | 验证机制确立，闭环用户反馈 #7185 |
| [#7637 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7637) | 类型化 design-system 组件边界 | 不开 strict mode 也能堵住变体/size/事件处理器的非法穿越 |
| [#7647 (CLOSED Issue)](https://github.com/nearai/ironclaw/issues/7647) | 自动化调度的确定性无投递结果 | 把 `[SILENT]` 语义从提示词层下沉为类型化合约 |

**整体判断**：Epic #7591 的 Tier 1–3 多个节点集中闭合，写压力下降目标处于"代码已落地、待合并释放"阶段；通知中心重构（#7688–#7691 + #7706）从存储到 UI 形成端到端设计；1.2→1.3 的修复前向移植已完成，1.3.0-rc.1 与 main 分支的兼容性风险显著降低。

---

## 4. 社区热点

### 评论活跃度 Top Issues

- **[#7275](https://github.com/nearai/ironclaw/issues/7275)** — 跨会话持久记忆召回（4 评论，已关闭）—— 用户反馈 #7185 反映出"上一会话明确建立的信息在后续会话无法稳定召回"的体验断裂，是高敏感的信任类问题。
- **[#7591](https://github.com/nearai/ironclaw/issues/7591)** — DB 写压力下降 ~60% 的 Epic（3 评论）—— 由四个并行代码审计触发的系统性优化，已经派生至少 6 个 Tier 1–3 子任务。
- **[#7701](https://github.com/nearai/ironclaw/issues/7701)** — 资源治理 reserve+reconcile 合并为单次后置写（2 评论）—— 在 Epic 创建后新发现，可再省 ~11 行/轮。
- **[#7603](https://github.com/nearai/ironclaw/issues/7603)** 与 **[#7604](https://github.com/nearai/ironclaw/issues/7604)** — BeforeModel 批处理与配对写折叠（各 2 评论）。
- **[#3762](https://github.com/nearai/ironclaw/issues/3762)** — AGENTS.md 在 Web UI 编辑后不更新系统提示（[P1]，建议纳入 1.4.0）。

### PR 评论活跃度

PR 列表中今日最值得关注的"超大体积 + 低风险"成果是 **[#7711](https://github.com/nearai/ironclaw/pull/7711)**（WASM 类型化工具响应 + guest 迁移 + 分发错误清理），它取代了 #7703 并整合了 0.3.0 兼容垫片，避免了一次无效合并。其次 **[#7717](https://github.com/nearai/ironclaw/pull/7717)** 直接对应 #7714 的资源治理崩溃级问题，被多个评审线程持续追踪。

**诉求分析**：社区当前两大集中诉求——"存储可承受性"（Epic #7591 集群）与"持久通知可见性"（#7687–#7691 集群），前者已经获得结构化分解与多 PR 推进，后者刚刚从概念落地为四层闭环设计。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue | 摘要 | Fix PR | 状态 |
|--------|-------|------|--------|------|
| 🔴 **Critical** | [#7714](https://github.com/nearai/ironclaw/issues/7714) | libSQL 共享写连接在压测下饿死资源治理 delta journal，导致 ~40s 级联失效、authority 失效、reservation 永久泄漏 | [#7717](https://github.com/nearai/ironclaw/pull/7717) ✅ 已开 | 修复已提交，等待评审合并 |
| 🟠 **Medium-High** | [#7716](https://github.com/nearai/ironclaw/issues/7716) | 添加 MCP 服务器流程缺少 bearer token、STDIO/HTTP 传输选项（QA bug_bash P2） | ❌ 无 | 新开未修复 |
| 🟠 **Medium-High** | [#7715](https://github.com/nearai/ironclaw/issues/7715) | Telegram 连接流程缺少"bot / 个人账户"选择与告知 | ❌ 无 | 新开未修复 |
| 🟡 **Medium** | [#3762](https://github.com/nearai/ironclaw/issues/3762) | AGENTS.md 编辑后系统提示不更新（[P1]，建议 1.4.0） | ❌ 无 | 长期开放（5/18 创建） |
| 🟡 **Medium** | [#7681](https://github.com/nearai/ironclaw/issues/7681) | Slack 未链接用户的连接提示在公开频道全员可见，且需多步往返 | [#7682](https://github.com/nearai/ironclaw/pull/7682) + [#7710](https://github.com/nearai/ironclaw/pull/7710) ✅ | 修复已收敛，等待合并 |
| 🟢 **Low** | [#7705](https://github.com/nearai/ironclaw/issues/7705) | CoalescingEventSink 在事件后端卡死时关闭会悬挂；`pending_flush_error` 未闩锁 | ❌ 无 | 新开非阻塞 |

**健康度判断**：当前最高优先级为 #7714，对应 PR #7717 已同期提交，建议优先合并进 1.3.0-rc.2。#7715/#7716 两项 Telegram/MCP 连接流缺陷属于 QA Bug Bash 集中暴露，建议在 #7685 Epic 周内闭环。

---

## 6. 功能请求与路线图信号

| 请求 | 已有 PR | 纳入下一版本概率 |
|------|---------|------------------|
| 持久化后端建议系统 | [#7694](https://github.com/nearai/ironclaw/pull/7694) XL 已在审 | 较高（与 v1.4.0 主题一致） |
| 原生结构化输出收口 | [#7693](https://github.com/nearai/ironclaw/pull/7693) XL | 较高（与 #7694 同栈） |
| Google Docs 语义编辑工具（4 个新能力） | [#7718](https://github.com/nearai/ironclaw/pull/7718) XL | 中高（保留 11 个遗留工具，破坏性低） |
| 自动化"立即运行" | [#7708](https://github.com/nearai/ironclaw/pull/7708) XL | 高（与 #7650 互补，形成完整闭环） |
| WebUI OOBE 自动化任务原型 | [#6994](https://github.com/nearai/ironclaw/pull/6994) XL | 中（默认关闭 flag，渐进上线） |
| ACP serve CLI（流式 + 取消） | [#7513](https://github.com/nearai/ironclaw/pull/7513) XL | 中（面向 VS Code / Copilot CLI 集成） |
| 编码工具 6 工具统一合约 | [#7491](https://github.com/nearai/ironclaw/pull/7491) XL | 中（破坏性：删除旧 builtins 与 builtin__ 别名） |
| WASM Nostr 主机函数 | [#7184](https://github.com/nearai/ironclaw/pull/7184) XL | 中低（外部贡献，新能力） |
| GitHub Projects v2 字段操作 | ❌ 仅 [#7719](https://github.com/nearai/ironclaw/issues/7719) | 中（已阻塞近 ai 主项目优先级调整） |

**路线图信号**：v1.4.0 的主线明显在"自动化体验增强 + 持久通知收件箱"两轴；v1.3.0-rc.2 应优先吸收 #7717、#7712、#7709 这类纯收益或安全收益的修复。

---

## 7. 用户反馈摘要

- **跨会话记忆信任断裂**（#7275）：用户反馈"在 A 会话明确告知的事项，B 会话无法召回"。当前已闭合验证机制，但需关注上线后召回命中率回归测试覆盖。
- **QA 实例连接流困惑**（#7715 / #7716）：Railway QA 实例出现 Telegram bot/个人账户不告知、MCP 缺少 bearer 认证与传输选项两类问题，提示生产前连接向导仍需打磨。
- **Slack 公开泄露 + 手动往返**（#7681）：用户在共享频道 @-mention 机器人后，所有人看到连接提示，且无 deep link，对企业用户尤其不友好。PR #7682 + #7710 已在审，回应速度较快。
- **AGENTS.md 编辑静默失败**（#3762）：UI 保存成功但系统提示未更新，标记为 P1 与 v1.4.0 候选。属于"看上去工作但实际不工作"的高优先级 UX 问题。
- **运行结果通知缺失**（#7691 + 失败分类 #7704）：用户期待"后台运行完成/失败"被稳定告知；今日提议建立 bounded + redacted 通知生命周期，与 #7688 持久收件箱形成需求闭环。
- **dogfooding 主题周**（#7685）：社区 QA 流程已制度化为周度 Epic，可作为后续反馈反哺效率的参考模板。

---

## 8. 待处理积压

- **[#3762](https://github.com/nearai/ironclaw/issues/3762)** — 自 2026-05-18 起开放，已超过 90 天未关闭。已挂 [P1] 与 v1.4.0 建议标签，仍无对应 PR。建议维护者在下次 Sprint 计划中明确归属负责人。
- **[#6994](https://github.com/nearai/ironclaw/pull/6994)** — OOBE 自动化任务原型 PR，自 2026-08-01 起开放 17 天，体量 XL 且涉及 docs + 集成计划，长时间处于评审等待状态。
- **[#7184](https://github.com/nearai/ironclaw/pull/7184)** — Nostr WASM 主机函数 PR，由新贡献者提交，自 2026-08-04 起等待首次正式评审。
- **[#7406](https://github.com/nearai/ironclaw/pull/7406)** — dependabot actions group 升级，自 2026-08-09 起未合并，存在 CI 漂移风险。
- **[#7491](https://github.com/nearai/ironclaw/pull/7491)** — 编码工具 6 工具统一合约 PR，破坏性变更（删除旧 builtins），自 2026-08-11 起待评审，迁移指南尚未公开。
- **[#7513](https://github.com/nearai/ironclaw/pull/7513)** — ACP serve CLI PR，自 2026-08-11 起等待评审。
- **资源治理写饥饿问题 #7714 与 #7717 联动**：建议在下一次发布前优先级升级，避免 RC 阶段带病进入 1.3.0 GA。

---

**整体健康度评估**：🟢 活跃、可控。

项目在 Epic #7591 与通知收件箱重构两条主线上展现出良好的工程节奏，1.3.0-rc.1 已发出，QA 反馈 → Epic 周 → 修复闭环的制度化程度较高。需重点关注的是：① 1 个 RC 之后是否需要在 GA 前合入 #7717；② 长期开放的 #3762 与体量较大的 #6994/#7491 是否会拖慢 v1.4.0 节奏。

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-08-18**
**数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI)**

---

## 1. 今日速览

LobsterAI 今日处于**中等活跃度**状态，过去 24 小时共有 7 条 Issue 被更新、21 条 PR 被处理，整体呈现"PR 集中清理 + 新功能集成"的双线节奏。值得关注的动向是 **DeepSeek Harness（dsh）引擎集成**的三连 PR（#2502 / #2505 / #2506）已全部关闭合并，意味着 dsh 作为新运行时已正式落地；同时**OrcaRouter 提供方集成**（#2504）作为新增 PR 进入待审阶段。Issue 侧则集中在历史 stale 问题被重新唤醒，本日新开/活跃 7 条但 0 关闭，社区响应存在一定积压。无新版本发布。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时无 Release tag 变更。建议关注 dsh 引擎集成完成后是否会触发 v4.9 或 v5.0 系列发版。

---

## 3. 项目进展

### 今日合并/关闭的重要 PR（按时间倒序）

| 编号 | 标题 | 领域 | 影响 |
|------|------|------|------|
| [#2506](https://github.com/netease-youdao/LobsterAI/pull/2506) | docs: add DeepSeek Harness (dsh) runtime setup instructions | docs | 补齐 dsh 运行时文档 |
| [#2505](https://github.com/netease-youdao/LobsterAI/pull/2505) | feat: dsh process launcher | renderer, main | dsh 进程启动器实现 |
| [#2503](https://github.com/netease-youdao/LobsterAI/pull/2503) | fix(electron): add edit context menu for text inputs | main | 修复输入框右键菜单缺失（贴近 wx/QQ 体验） |
| [#2502](https://github.com/netease-youdao/LobsterAI/pull/2502) | Feat: dsh engine integration | renderer, build, main, macos | **dsh 引擎主线集成**，涉及 macOS 构建 |
| [#2501](https://github.com/netease-youdao/LobsterAI/pull/2501) | fix(skills): portal upgrade progress overlay | renderer | 技能升级进度条层级修复 |
| [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) | feat(agent): 为每个 Agent 添加独立工作目录配置 | renderer, main, openclaw, cowork | 多 Agent 工作空间隔离 |
| [#1663](https://github.com/netease-youdao/LobsterAI/pull/1663) | feat(openclaw): upgrade OpenClaw to v2026.4.12 | main, openclaw | OpenClaw 运行时 + 微信插件升级 |
| [#1667](https://github.com/netease-youdao/LobsterAI/pull/1667) | fix(Settings): 将 Qwen 控制台链接从灵积迁移至百炼 | (settings) | 阿里云灵积下线，迁移到百炼入口 |
| [#1669](https://github.com/netease-youdao/LobsterAI/pull/1669) | feat: 修复设置页模型提供商体验问题 | renderer | 测试连接按钮逻辑、自定义提供方名称显示 |
| [#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) | fix(log): 脱敏导出日志中的敏感信息 | main, cowork | **重要安全修复**：API Key/Bearer token 脱敏 |
| [#1675](https://github.com/netease-youdao/LobsterAI/pull/1675) | feat(cowork): group session list by time period | renderer, cowork | 会话列表按时间分组（今天/昨天/7 天/30 天/更早） |
| [#1636](https://github.com/netease-youdao/LobsterAI/pull/1636) | feat(cowork): 聊天窗口新增悬浮「滚动到底部」按钮 | renderer, cowork | 改进长对话浏览体验 |
| [#1637](https://github.com/netease-youdao/LobsterAI/pull/1637) | feat(cowork): AI 回复消息新增「重新生成」按钮 | renderer, cowork | 与 ChatGPT/Claude 对齐的核心交互 |
| [#1639](https://github.com/netease-youdao/LobsterAI/pull/1639) | fix(i18n): 修复多处按钮 tooltip 硬编码英文未国际化 | renderer, cowork, im | i18n 统一性提升 |
| [#1640](https://github.com/netease-youdao/LobsterAI/pull/1640) | feat(tool-result): 工具执行结果增加一键复制按钮 | renderer, cowork | 工具结果可复制，体验对齐 AI 消息 |
| [#1641](https://github.com/netease-youdao/LobsterAI/pull/1641) | feat(modal): 所有弹窗统一支持 Esc 键关闭 | renderer, cowork | 弹窗交互一致性 |
| [#1642](https://github.com/netease-youdao/LobsterAI/pull/1642) | feat: add right click menu | renderer, main | Windows 右键菜单注册 |
| [#1671](https://github.com/netease-youdao/LobsterAI/pull/1671) | fix: md 文件转 word 做了一半提示 sse response finish reason: full | (openclaw) | 流式中断异常处理（与 Issue #1671 对应） |

### 项目整体推进评估

- **核心能力扩展**：完成 dsh（DeepSeek Harness）引擎从进程拉起到文档的全链路集成，标志 LobsterAI 多运行时架构进一步成熟。
- **Cowork 体验闭环**：本日合并的 PR 集中在 Cowork 会话窗口能力补齐——滚动按钮、重新生成、复制、Esc 关闭、时间分组——形成一组"对标主流 AI 客户端"的功能集。
- **安全与合规**：[#1661](https://github.com/netease-youdao/LobsterAI/pull/1661) 修复导出日志明文密钥问题，是重要合规改进。
- **存量清理**：多个 4 月份提交的 PR 被集中关闭（多数为已合并但状态未及时更新的 stale 项）。

---

## 4. 社区热点

| 编号 | 类型 | 评论数 | 简要分析 |
|------|------|--------|----------|
| [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | Issue | 1 | **外部项目 VOKO 推荐**：作者推广其"A2A 跨平台通信层"，称已接入 OpenClaw/VOKO IM/AstrBot。属于合作意向型 Issue，需维护者评估是否纳入生态合作。 |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Issue | 1 | **MD 工作流（多 Agent 编排）功能请求**：用户反映 main agent 感知不到其他 agent 的存在（除其 spawn 的 subagent），希望基于 Markdown 定义工作流将多个 agent 组织起来完成复杂任务。这是面向"Agent 编排平台"演进的核心需求，与 [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668)（每个 Agent 独立工作目录）形成互补。 |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | Issue | 2 | **groupPolicy 反复被覆盖为 allowlist**：用户认为是稳定性问题，已被标记 stale 但有 2 条评论讨论，需排查策略持久化逻辑。 |

**热度分析**：本日缺乏真正高互动议题（最高仅 2 条评论），社区处于"清理历史"阶段。但 [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) 代表的产品方向（多 Agent 编排）若被采纳，将显著抬升 LobsterAI 在企业场景的竞争力。

---

## 5. Bug 与稳定性

按严重程度排列：

| 等级 | 编号 | 标题 | 影响 | 是否有 Fix PR |
|------|------|------|------|----------------|
| 🔴 高 | [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | ollama 本地模型（qwen3/gemma4）无法使用，调用即报错 | 本地 LLM 用户**完全无法使用** Ollama 后端，是核心集成路径失效 | ❌ 暂无 |
| 🔴 高 | [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | 除 SSE 之外的 MCP 引擎无法找到并使用 | MCP 生态接入严重受限（stdio 等传输方式失效） | ❌ 暂无 |
| 🟠 中 | [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | groupPolicy 每过一会就被覆盖为 allowlist | 权限策略可能错误回退，影响安全预期 | ❌ 暂无 |
| 🟠 中 | [#1671](https://github.com/netease-youdao/LobsterAI/issues/1671) | md 转 word 做一半提示 `sse response finish reason: full` | 长文档生成任务中途失败 | ✅ PR #1671 已 CLOSED |
| 🟡 低 | [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | 手动创建定时任务点击保存时提示"还有内容未保存"（4.8 版本） | UI 误报，但实际保存成功 | ❌ 暂无 |

**严重程度汇总**：🔴 高危 ×2 / 🟠 中危 ×2 / 🟡 低危 ×1，仅 1 个 Bug 已有合并修复。两个高危 Bug（Ollama / 非 SSE MCP）已躺尸 4 个月未解决，需重点跟进。

---

## 6. 功能请求与路线图信号

| 编号 | 诉求 | 现有呼应 | 可能性评估 |
|------|------|----------|------------|
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | 基于 MD 的多 Agent 工作流编排；让 main agent 能发现并调度其他 agent | [#1668](https://github.com/netease-youdao/LobsterAI/pull/1668) 已为每个 Agent 配置独立工作目录 | 🟢 **高** — 路线图方向吻合，跨 Agent 调度是 LMArena 趋势 |
| [#2500](https://github.com/netease-youdao/LobsterAI/issues/2500) | 与 VOKO 跨平台通信层对接 | VOKO 已接入 OpenClaw，理论上兼容 | 🟡 **中** — 取决于维护者生态策略 |
| [#2504](https://github.com/netease-youdao/LobsterAI/pull/2504) | 增加 OrcaRouter 作为 OpenRouter 同级 LLM 网关 | 已有 PR | 🟢 **高** — 合并即可 |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | 非 main agent 首页欢迎区显示 agent 名称/描述 | 已有 OPEN PR | 🟢 **高** — 即将合并 |

---

## 7. 用户反馈摘要

- **痛点 1 · Agent 间互不相通**（[#1644](https://github.com/netease-youdao/LobsterAI/issues/1644)）：用户明确反映"main agent 感知不到其他 agent"，希望出现"主 Agent 作为调度者、其他 Agent 作为专家"的协作模式，这是企业复杂任务场景的核心需求。
- **痛点 2 · 本地模型接入失败**（[#1635](https://github.com/netease-youdao/LobsterAI/issues/1635)）：Ollama 兼容性是社区常见诉求，用户提到 cherrystudio 等同类产品能正常调用，进一步对比下 LobsterAI 体验差距明显。
- **痛点 3 · MCP 多传输协议支持不足**（[#1662](https://github.com/netease-youdao/LobsterAI/issues/1662)）：SSE 之外的传输方式（stdio/HTTP）不可用，限制了 MCP 工具生态接入。
- **痛点 4 · 安全焦虑**（[#1661](https://github.com/netease-youdao/LobsterAI/pull/1661)）：导出日志存在明文 API Key/Bearer Token——虽已修复，但反映出用户对企业数据安全的敏感度。
- **满意信号**：本日合并的 Cowork 体验类 PR（重新生成、滚动按钮、复制按钮、Esc 关闭等）说明社区贡献者深度参与产品打磨，活跃度健康。

---

## 8. 待处理积压

以下 Issue/PR 已存在 4 个月以上、状态长期停滞，**建议维护者优先响应**：

| 编号 | 类型 | 标题 | 创建时间 | 当前状态 |
|------|------|------|----------|----------|
| [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | PR | dependabot: bump electron 40.2.1 → 43.4.0 | 2026-04-02 | **OPEN**，4 个月未合并 — 涉及大版本升级，存在安全/兼容性风险，建议优先评估 |
| [#1635](https://github.com/netease-youdao/LobsterAI/issues/1635) | Issue | ollama 本地模型无法使用 | 2026-04-12 | OPEN + stale — 🔴 高危核心功能失效 |
| [#1662](https://github.com/netease-youdao/LobsterAI/issues/1662) | Issue | 除 SSE 之外的 MCP 无法使用 | 2026-04-14 | OPEN + stale — 🔴 高危 MCP 生态受阻 |
| [#1653](https://github.com/netease-youdao/LobsterAI/issues/1653) | Issue | groupPolicy 被反复覆盖 | 2026-04-13 | OPEN + stale — 🟠 安全策略一致性问题 |
| [#1643](https://github.com/netease-youdao/LobsterAI/issues/1643) | Issue | 定时任务保存提示误报 | 2026-04-12 | OPEN + stale — 🟡 UI 文案 |
| [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) | PR | 非 main agent 首页显示名称描述 | 2026-04-13 | OPEN — 改动小、体验提升明显，可快速合并 |
| [#1644](https://github.com/netease-youdao/LobsterAI/issues/1644) | Issue | MD 工作流多 Agent 编排 | 2026-04-12 | OPEN + stale — 战略级需求，建议官方回复给出 Roadmap 时间表 |

**积压总结**：🔴 高危积压 2 条 / 🟡 低危积压 3 条 / 战略级需求 1 条。整体看，**核心集成的 Bug（Ollama/MCP）优先级应高于新功能 PR**，建议下一周期集中火力修复。

---

## 附：项目健康度快照

| 维度 | 评分 | 说明 |
|------|------|------|
| 提交活跃度 | ⭐⭐⭐⭐ | 21 条 PR 处理 + 7 条 Issue 更新，节奏正常 |
| Issue 响应率 | ⭐⭐ | 7 条活跃但 0 关闭，stale 比例高 |
| 核心 Bug 修复 | ⭐⭐ | 2 个高危 Bug 4 个月未解决 |
| 新功能集成 | ⭐⭐⭐⭐⭐ | dsh 引擎、OrcaRouter、多 Agent 工作目录等亮点功能密集合并 |
| 社区参与 | ⭐⭐⭐⭐ | 多个外部贡献者（0xFLX、fisherdaddy、liuzhq1986 等）持续输出 |
| 安全合规 | ⭐⭐⭐⭐ | 日志脱敏等敏感修复已合入 |

**整体判断**：项目处于"功能爆发期 + 维护负债期"的典型阶段，新功能交付节奏亮眼，但历史 Issue/高危 Bug 需尽快清理以保持长期健康度。

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报
**日期：2026-08-18** | 数据截至：2026-08-17

---

## 1. 今日速览

Moltis 过去 24 小时整体保持**中高活跃度**：3 条 Issues 更新（含 2 条关闭），9 条 PR 流转（6 条关闭/合并、3 条待审）。从结构看，社区工作重心集中在两类事项——**一是日常依赖与 CI 卫生**（dependabot 依赖升级、Format CI 红线修复），**二是外部 Agent 与运行时稳定性**（MiniMax Code ACP 接入、heartbeat 配置语义修正）。今日无新版本发布，但多个 PR 闭环为下一版本的功能底座做了铺垫，项目整体处于稳步推进阶段。

---

## 2. 版本发布

今日**无新版本发布**。以下 PR 已合并但尚未打包发版：
- `PR #1125` 外部 Agent 模型与 effort 选择
- `PR #1204` MiniMax Code ACP agent 接入
- `PR #1130` webui RPC 超时可配置
- `PR #1103` Browser shadow DOM 查找优化
- `PR #1207` / `PR #1087` 依赖批量升级（wasmtime-wasi、cmov、quinn-proto、serde_with、tar）

建议关注维护者对发版节奏的安排。

---

## 3. 项目进展

今日共有 **6 条 PR** 完成合并或关闭，涵盖功能扩展、依赖维护和 Bug 修复：

| PR | 类型 | 影响 | 链接 |
|---|---|---|---|
| **#1125** Support model and effort selection for external agents | Feature | 在 `/model` 中为外部 Agent 提供模型与 effort 选择能力，含配置项、UI 分组、配置持久化 | [#1125](https://github.com/moltis-org/moltis/pull/1125) |
| **#1204** feat: add MiniMax Code ACP agent | Feature | 新增 `acp-minimax-code` 外部 Agent 类型，默认自动发现 `mcode acp`，并在 Agents 设置 UI 中保持同步 | [#1204](https://github.com/moltis-org/moltis/pull/1204) |
| **#1130** feat: make webui rpc timeout configurable | Feature | 闭环 issue #1127，为 webui RPC 调用暴露超时参数 | [#1130](https://github.com/moltis-org/moltis/pull/1130) |
| **#1103** fix(browser): pierce shadow DOM lookups efficiently | Bugfix | 浏览器快照与 ref 查找路径能更高效穿透 Shadow DOM，作为 #1100 的替代分支 | [#1103](https://github.com/moltis-org/moltis/pull/1103) |
| **#1207** chore(deps): bump cargo group (4 updates) | Deps | 升级 wasmtime-wasi、cmov、quinn-proto、serde_with | [#1207](https://github.com/moltis-org/moltis/pull/1207) |
| **#1087** chore(deps): bump tar 0.4.45 → 0.4.46 | Deps | 归档库 tar 增量升级 | [#1087](https://github.com/moltis-org/moltis/pull/1087) |

**整体评估**：项目在外部 Agent 生态、配置可调性、浏览器鲁棒性三个方向都有实质性推进；依赖卫生保持高频更新节奏，无长期阻塞。

---

## 4. 社区热点

过去 24 小时评论数普遍较低（多数条目 0 评论），**Issue #1095（Podman 无法在 moltis 中使用）** 是唯一有 2 条评论的活跃条目。其余互动主要来自 PR 摘要与代码评审。
- 🔗 [#1095 Podman is not working via moltis](https://github.com/moltis-org/moltis/issues/1095)

**分析**：Podman 与 Docker 之间的兼容性问题长期影响偏好容器化部署的用户；该 Issue 自 6 月创建至今未关闭，体现出社区对**非 Docker 容器运行时**支持有明确诉求。

---

## 5. Bug 与稳定性

| 严重程度 | Issue / PR | 状态 | 说明 |
|---|---|---|---|
| 🟠 中 | [#1095 Podman is not working via moltis](https://github.com/moltis-org/moltis/issues/1095) | **OPEN**（2.5 个月未关闭） | 报告 Podman 路径下 moltis 无法正常运行，影响使用 Podman 的用户群体。**目前无对应修复 PR 关联**。 |
| 🟡 低 | [#1202 Format CI gate is red on main](https://github.com/moltis-org/moltis/issues/1202) | **CLOSED** | `main` 上两个文件超过 1500 行限制（memory-zvec/store.rs 1799 行、gateway/services/admin.rs 1531 行），由 commit 9b47001a 引入。CI 卫生类问题，已关闭。 |
| 🟢 低 | [PR #1209 heartbeat.update params 应作为 patch 而非整对象](https://github.com/moltis-org/moltis/pull/1209) | OPEN | 修复 gateway 中 `HeartbeatConfig` 因 `#[serde(default)]` 在增量更新时把未传字段重置为默认值的回归，闭环 #1187。 |
| 🟢 低 | [PR #1208 heartbeat.active_hours 未生效](https://github.com/moltis-org/moltis/pull/1208) | OPEN | `is_within_active_hours` 单元已实现但未被调度器调用，导致配置形同虚设。闭环 #1205。 |

**小结**：当前没有 P0 级崩溃问题。`#1095` 是中长期未解的中等优先级 Bug，建议维护者尽快评估并指派修复 PR。

---

## 6. 功能请求与路线图信号

- **RPC 超时可配置（#1127 → #1130）** ✅ 已合并落地，闭环仅用 1 个 PR，路径清晰。
- **Files 库与设置面板（#1206）** 🆕 OPEN：大文件功能补丁，新增 Files 库、流式 list/upload/download/create/move/delete API，Finder 风格设置浏览器，默认只读挂载 Docker/Podman/Apple Container，并通过 `MOLTIS_FILES_DIR` 发现配置。该 PR **方向上**大概率会进入下一版本，但功能体量较大、需重点关注评审节奏。🔗 [PR #1206](https://github.com/moltis-org/moltis/pull/1206)
- **外部 Agent 生态（#1125 / #1204）** ✅ 已落地 MiniMax Code ACP agent 与模型/effort 选择，外部 Agent 矩阵继续扩张，是项目近期的明确投入方向。

---

## 7. 用户反馈摘要

- **容器运行时多样性**：Issue #1095 反映出使用 Podman 而非 Docker 的用户在企业/本地开发场景下**长期被忽视**，希望 Moltis 能像支持 Docker 一样支持 Podman。
- **RPC 超时配置**：Issue #1127 的核心诉求是 WebUI 调用易在网络不佳时卡住，超时不可调被迫要重写源码——社区对**暴露底层网络参数**有明确需求，目前已通过 #1130 回应。
- **隐性回归信号**：PR #1209、#1208 揭示出"功能写了一半但调度层没接"的隐性 Bug 模式，说明**功能实现 → 调度链路**的端到端测试覆盖还有提升空间。

---

## 8. 待处理积压

| 类别 | 编号 | 创建时间 | 建议 |
|---|---|---|---|
| 🟠 中优先级 Bug | [#1095](https://github.com/moltis-org/moltis/issues/1095) | 2026-06-03 | 已挂起 ~2.5 个月，建议指派 owner 并提供复现脚本或修复 PR |
| 🆕 待审 PR | [#1206](https://github.com/moltis-org/moltis/pull/1206) Add managed Files library | 2026-08-17 | 功能庞大，文档与测试完备性需重点 review |
| 🆕 待审 PR | [#1209](https://github.com/moltis-org/moltis/pull/1209) fix(gateway) heartbeat patch 语义 | 2026-08-17 | 涉及 RPC 状态与配置持久化，建议与 #1208 配套合并 |
| 🆕 待审 PR | [#1208](https://github.com/moltis-org/moltis/pull/1208) fix(cron) active hours 调度 | 2026-08-17 | 与 #1209 同作者、同日提交，建议一同进入评审 |

---

**整体健康度**：🟢 **良好**
- 依赖与 CI 卫生持续自动化维护；
- 外部 Agent 与配置可调性两条产品线稳步推进；
- 主要风险点集中在**未修复的 Podman 兼容性 Issue** 与**待审的大功能 PR** 上，建议在下一次发版前完成回归性 PR #1209/#1208 的合并闭环。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-08-18**

---

## 1. 今日速览

CoPaw 项目今日保持中等偏高活跃度：过去 24 小时内共处理 **14 条 Issues**（8 新开/活跃、6 关闭）和 **35 条 PRs**（13 待合并、22 合并/关闭），整体合并/关闭率约 63%，体现出维护团队对积压 PR 的清理力度。**没有新版本发布**，但开发主线仍围绕 v2.1.0 的稳定性修复（媒体 URL 过期、插件钩子丢失、Token 计算错误等）和多渠道能力扩展（Volcengine Agent Plan、PowerContext 长期记忆、AnySearch 搜索）展开。社区讨论聚焦于 **Console 多渠道模型独立配置**、**历史会话加载问题** 与 **会话身份隔离 Bug**，用户对 2.1.0 的整体稳定性有反馈但也有新功能期待。

---

## 2. 版本发布

⚠️ 今日无新版本发布。当前主线版本仍为 **v2.1.0**（基于 Issues 中频繁出现的版本号）。请关注后续社区热点中提到的相关修复 PR 是否会在补丁版本中合入。

---

## 3. 项目进展（已合并/关闭的重要 PR）

| 主题 | PR | 状态 | 价值 |
|---|---|---|---|
| 停止将图片 base64 算作文本 Token | [#6968](https://github.com/agentscope-ai/QwenPaw/pull/6968) | 已关闭 | 修复 Console 上下文用量环（context-usage ring）在上传一两张图片后即显示接近 100% 的误报，估算逻辑从 `len(base64)//4` 改为正确的媒体处理 |
| Console 上下文用量环在 `/compact` 后更新 | [#6975](https://github.com/agentscope-ai/QwenPaw/pull/6975) | 已关闭 | 修复 SSE trailing `turn_usage` 事件在响应完成后到到达时 SDK 提前中止流式处理的问题，确保压缩后用量环正确刷新 |
| 移除 i18n 占位符中的 `/approve`、`/deny` 提示 | [#6981](https://github.com/agentscope-ai/QwenPaw/pull/6981) | 已关闭 | 清理 7 个语言的 locale 文件，弱化命令强调 |
| 新装 PawApp 无需刷新即可打开 | [#7017](https://github.com/agentscope-ai/QwenPaw/pull/7017) | 已关闭 | 改进 App Center 体验：新装/更新 PawApp 后即时激活，更新已装 App 时自动刷新页面让前端 bundle 生效 |
| GitPanel Tabs 样式失效修复 | [#5151](https://github.com/agentscope-ai/QwenPaw/pull/5151) | 已关闭 | 修复 `GitPanel.module.less` 使用 `ant-` 前缀与 `ConfigProvider` 的 `prefixCls="qwenpaw"` 不匹配导致的样式错误 |
| Console 背景任务列表紧凑化 + 滚动提示 | [#7083](https://github.com/agentscope-ai/QwenPaw/pull/7083) | 已关闭 | 列表可见行数封顶 ~3 行（120px），增加滚动提示，避免长任务列表挤压聊天输入框 |
| 媒体下载按钮统一 | [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) | 已关闭 | 音频播放器将"下载"置于"播放→下载→音量→进度"序列，使用 slot 保证视觉顺序与键盘焦点顺序一致 |
| DataPaw 应用运行时与持久分析工作区 | [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) | 已关闭 | 首次落地 DataPaw PawApp 原生运行时，配套基础设施同步部署 |
| AnySearch 集成（旧版本） | [#6817](https://github.com/agentscope-ai/QwenPaw/pull/6817) | 已关闭 | 旧版 AnySearch 集成 PR 被关闭，作为后续优化版本的参考 |

**整体评估**：今日合并的 PR 集中在 **Console 前端体验**（用量环、任务列表、媒体下载、App Center）和 **底层稳定性**（Token 计算、样式前缀、配置加载）两条线，反映项目进入 v2.1.0 收尾打磨阶段。

---

## 4. 社区热点

### 4.1 最活跃讨论：Console 停止请求误杀飞书会话 — [#7011](https://github.com/agentscope-ai/QwenPaw/pull/7011)
- **类型**：Bug | **评论数**：6 | **状态**：OPEN
- **核心问题**：在多 UI 会话场景下，Console 中的"停止"请求会误取消一个活跃的飞书会话。作者在 8-14 日更新中提供了直接证据：两个 UI 会话身份值交叉后，飞书会话被错误地终止。
- **诉求分析**：这是典型的会话身份/路由隔离问题，对使用多端协作（飞书 + Console）的用户影响较大，反映了 v2.1.0 多渠道架构下 session routing 的成熟度尚待提升。

### 4.2 多渠道独立模型配置 — [#7085](https://github.com/agentscope-ai/QwenPaw/pull/7085)
- **类型**：Feature | **评论数**：3 | **状态**：OPEN
- **核心提议**：用户希望按频道独立配置 LLM（如钉钉用 gpt-4o、微信用 qwen-max、Console 用本地 llama.cpp），目前仅支持全局或智能体级别配置。
- **诉求分析**：这是企业用户的典型诉求 —— 不同渠道有不同响应速度/语言/成本偏好，这是从"能用"到"好用"的关键升级。

### 4.3 智能体协作希望在同一会话窗口 — [#6925](https://github.com/agentscope-ai/QwenPaw/pull/6925)
- **类型**：Feature | **评论数**：2 | **状态**：OPEN
- **核心问题**：Multi-agent 协作时每次对话都创建新会话，并需要切换智能体查看内容，体验割裂。
- **诉求分析**：Multi-agent 协作是 CoPaw 重点宣传的能力之一，但实际协作落地时会话管理仍按单智能体隔离，与用户心智模型不符。

### 4.4 升级 2.0 后 MCP 工具提示 "Tool not found" — [#6405](https://github.com/agentscope-ai/QwenPaw/pull/6405)
- **类型**：Question | **评论数**：7 | **状态**：已关闭 | 👍 0
- **总结**：用户反映 2.0 后 MCP 工具调用总是失败，工具名以 `[mcp-key]__[tool_name]` 格式出现，无法找到。**这是昨日评论数最多的 Issue**，反映了 2.0 版本升级期间的兼容性阵痛。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue | 描述 | 状态 |
|---|---|---|---|
| 🔴 高 | [#7011](https://github.com/agentscope-ai/QwenPaw/pull/7011) | 多 UI 会话下 Console 停止请求误杀飞书会话 | OPEN，**尚无 fix PR** |
| 🟠 中 | [#7082](https://github.com/agentscope-ai/QwenPaw/pull/7082) | `_StructuredOutputDynamicClass is not fully defined` Pydantic 错误导致模型执行失败 | OPEN，**尚无 fix PR** |
| 🟠 中 | [#7076](https://github.com/agentscope-ai/QwenPaw/pull/7076) | qwenpaw-creator LLM 模型配置 404 错误（v2.1.0） | OPEN，**尚无 fix PR** |
| 🟡 中 | [#7084](https://github.com/agentscope-ai/QwenPaw/pull/7084) | 历史会话仅 1 条时，新窗口中点击历史会话无响应 | OPEN，**尚无 fix PR** |
| 🟡 中 | [#7088](https://github.com/agentscope-ai/QwenPaw/pull/7088) | OneBot 频道将含过期 rkey 的 QQ 图片 URL 传给模型 → 400 错误 + 会话污染 | **已关闭**，有修复 PR [#7087](https://github.com/agentscope-ai/QwenPaw/pull/7087)（在客户端本地化远程媒体 URL） |
| 🟡 中 | [#7077](https://github.com/agentscope-ai/QwenPaw/pull/7077) | 工作区重载后插件运行时钩子（runtime hooks）静默丢失 | **已关闭**，但需关注是否已发布修复 |
| 🟢 低 | [#7051](https://github.com/agentscope-ai/QwenPaw/pull/7051) | Console 会话重载后图片附件丢失（backend 返回 data URL，前端缩略图破碎） | **已关闭**，合并 PR [#7036](https://github.com/agentscope-ai/QwenPaw/pull/7036) 修复了媒体下载控件整体 |
| 🟢 低 | [#7063](https://github.com/agentscope-ai/QwenPaw/pull/7063) | agentscope `_execute_tool_call` 用 `async for` 遍历 coroutine 导致 TypeError | **已关闭（invalid）** — 标记为 agentscope 框架问题而非 CoPaw |

**关键观察**：v2.1.0 引入的多渠道会话隔离、`_StructuredOutputDynamicClass` 动态类初始化、模型配置加载路径是当前三大风险点。**会话身份隔离 Bug #7011 应优先修复**，因为它直接破坏跨渠道用户体验。

---

## 6. 功能请求与路线图信号

### 6.1 多渠道独立模型配置 [#7085](https://github.com/agentscope-ai/QwenPaw/pull/7085)
- **成熟度**：已有清晰场景描述（钉钉/微信/Console 各自模型），但**暂无对应 PR**。
- **路线图概率**：⭐⭐⭐⭐ — 与正在进行的 PR #6302（统一 provider 发现、模型元数据、路由）协同性强，预计会被纳入后续版本。

### 6.2 PowerContext 长期记忆后端 [#7079](https://github.com/agentscope-ai/QwenPaw/pull/7079) / [#7080](https://github.com/agentscope-ai/QwenPaw/pull/7080)
- **成熟度**：已有 Issue + PR 同步提出（kic635 首次贡献），实现了 `BaseMemoryManager` 接口并通过 `@memory_registry.register("powercontext")` 注册。
- **路线图概率**：⭐⭐⭐⭐⭐ — 配套 PR 已开，预计 v2.2.x 周期内可能合入。

### 6.3 AnySearch 集成 [#7081](https://github.com/agentscope-ai/QwenPaw/pull/7081)
- **成熟度**：已替代 Tavily 成为内置搜索，并修复 MCP env-ref header 绑定缺陷。
- **路线图概率**：⭐⭐⭐⭐ — 旧 PR #6817 已关闭，新版正在评审。

### 6.4 定时任务运行细节展示 [#7075](https://github.com/agentscope-ai/QwenPaw/pull/7075)
- **诉求**：长时间任务（5-10 分钟）期间无法知晓是否准时触发、是否仍在运行。
- **期望信息**：开始时间、运行时长、结束时间、运行结果。
- **路线图概率**：⭐⭐⭐ — 用户体验改进类，无对应 PR，但实现成本低。

### 6.5 数据科学家工作台相关
- 已合并 PR [#6940](https://github.com/agentscope-ai/QwenPaw/pull/6940) 落地 DataPaw 原生运行时。
- 开放 PR [#7089](https://github.com/agentscope-ai/QwenPaw/pull/7089) 为 datapaw 插件独立版本驱动发布流水线。
- 这表明 **DataPaw 已被纳入正式发布轨道**，可能是 v2.2 的重点特性。

---

## 7. 用户反馈摘要

### 7.1 真实痛点

1. **跨渠道体验割裂**（综合 #7011、#7085、#6925）
   - 用户反馈：飞书会话被 Console 误停、需要切换智能体查看 multi-agent 协作、不同渠道无法使用不同模型。
   - 来源：多个用户，独立提交。

2. **图片/媒体附件丢失与过期**（综合 #7051、#7088）
   - 用户反馈：Console 会话重载后图片破碎、QQ 图片 URL 过期导致后续对话被污染。
   - 已通过 PR #7087、#7036 部分修复。

3. **Pydantic 动态类模型初始化失败**（#7082）
   - 用户反馈：v2.1.0 控制台启动时即崩溃，错误信息含技术细节 `_StructuredOutputDynamicClass is not fully defined`。
   - 反映 v2.1.0 升级后 SDK 与 CoPaw 链路兼容性问题。

4. **定时任务透明度不足**（#7075）
   - 用户反馈：5-10 分钟长任务期间无法获知实时状态。

### 7.2 关键场景

- **企业多渠道部署**：钉钉/微信/飞书各有响应速度和语言偏好，需要按渠道配置模型。
- **数据分析**：DataPaw 引发关注，用户对持久化工作区 + 原生应用运行时表现出期待。
- **MCP 工具生态**：升级 2.0 后 MCP 工具调用路径改变（`[mcp-key]__[tool_name]`），社区需要更明确的迁移文档。

### 7.3 满意度
- **正面**：DataPaw 工作区（PR #6940）、AnySearch 搜索、PawApp 即时激活（PR #7017）等 PR 受欢迎。
- **负面**：v2.1.0 出现多个 Console 启动失败和多渠道会话管理问题，**版本升级信任度受损**。

---

## 8. 待处理积压

提醒维护者关注的长期未响应或重要项：

| 项目 | 状态 | 关注点 |
|---|---|---|
| [#6302](https://github.com/agentscope-ai/QwenPaw/pull/6302) **统一 provider 发现与模型路由** | 7-21 开 | 已开放 28 天，是目前最大的架构级 PR，包含 catalog-driven provider、运行时发现、capability-aware routing、回退支持、模型选择 UI 重设计。**建议召集评审并明确 EP/milestone**。 |
| [#6515](https://github.com/agentscope-ai/QwenPaw/pull/6515) **Volcengine Agent Plan + Xiaomi MiMo V2.5** | 7-28 开 | 已开放 21 天，添加两个市场急需的内置 provider，但仍未合入。 |
| [#7011](https://

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-18

> 数据范围：过去 24 小时 GitHub 活动  
> 数据源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 1. 今日速览

ZeroClaw 今日延续了高强度的治理与安全架构升级节奏：**50 条 Issue 中 44 条仍处于活跃/讨论状态，6 条关闭**；**50 条 PR 中 35 条待合并、15 条已合并/关闭**。当日合并/关闭的 PR 高度集中在 **安全加固（SSRF、API Key 泄露、附件下载边界、Action 预算原子性）** 与 **CI 工程化（Clippy 共享 runner、跨平台定时测试、Lint 去重）**，显示项目正在为 0.9.0 的安全里程碑执行密集的"封堵"操作。没有新版本发布，社区仍处于多轮 RFC 并行讨论与功能 PR 并行 review 的双轨状态，整体健康度稳定，**安全相关 PR 密度异常突出**。

---

## 2. 版本发布

**⚠️ 今日无任何 Release 发布或 Tag 推送。** 最近可参考的版本号仍为项目内 RFC (#6808) 提到的 **0.8.4** 稳定版与 **0.8.0-beta-1** 系列。如需 0.9.0 安全里程碑相关变更，请关注 RFC [#7141](https://github.com/zeroclaw-labs/zeroclaw/issues/7141)、[#7142](https://github.com/zeroclaw-labs/zeroclaw/issues/7142) 以及下方"项目进展"中已合入的安全 PR。

---

## 3. 项目进展

今日共有 **15 条 PR 被合并或关闭**，按主题归类如下：

### 🔒 安全修复（核心推进）
| PR | 主题 | 影响 |
|---|---|---|
| [#9973](https://github.com/zeroclaw-labs/zeroclaw/pull/9973) | **fix(providers): keep Gemini API keys out of URLs** | 关闭 Gemini API Key 通过 URL 泄露的路径（Bearer via `x-goog-api-key`），并对 Header 值做敏感标记 |
| [#10000](https://github.com/zeroclaw-labs/zeroclaw/pull/10000) | **fix(channels): bound QQ and Mattermost downloads** | 引入统一有界 HTTP 响应读取器，复用 QQ 10 MiB、Mattermost 25 MiB 既有上限，应对畸形/缺省 `Content-Length` |
| [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) | **fix(security): make action budget accounting atomic** | 关键原子性修复——并行调用不再能联合突破 `max_actions_per_hour` |
| [#9993](https://github.com/zeroclaw-labs/zeroclaw/pull/9993) | **fix(email): stop implicit attachment file reads** | 出站 Email 附件 MIME 仅从 `MediaAttachment.data` 构造，杜绝空 payload 触发隐式本地文件读取 |
| [#9612](https://github.com/zeroclaw-labs/zeroclaw/pull/9612) | **fix(channels): tie the WhatsApp Cloud approval token to a guard** | 修掉两处 exit 路径上的孤儿 token 注册漏洞 |
| [#9397](https://github.com/zeroclaw-labs/zeroclaw/issues/9397) | **RFC: WhatsApp Web `allowed_groups` 空集 → permit-none** | 把"空白名单 = 放行所有群"改为"permit-none"，默认行为更安全 |

> 上述 5 个修复全部由 maintainer [@Audacity88](https://github.com/zeroclaw-labs/zeroclaw) 主导，**单日内完成 5 个高危安全闭环**，相当于为 0.9.0 安全里程碑一次性回填了关键待办。

### 🛠 CI / 工程化
- [#10043](https://github.com/zeroclaw-labs/zeroclaw/pull/10043) — ci(lint): 去重 Lint 中的 architecture test 调用，归 Test 任务所有
- [#10039](https://github.com/zeroclaw-labs/zeroclaw/pull/10039) — ci(clippy): 共享 Clippy runner（`scripts/ci/run_clippy.sh`），消除 Linux/Windows/CI 间的无声漂移
- [#9398](https://github.com/zeroclaw-labs/zeroclaw/pull/9398) — ci(tests): 新增 `Scheduled Platform Tests`，对 macOS/Windows 夜间与手动触发 cross-platform 测试
- [#9808](https://github.com/zeroclaw-labs/zeroclaw/pull/9808) — chore(deps): dependabot 批量升级 rust-all 组 45-46 个 crate（`clap`、`tokio` 等），仍 OPEN
- [#10010](https://github.com/zeroclaw-labs/zeroclaw/pull/10010) — test(cron): 用 PATH 符号链接替代运行时生成的执行脚本，避免 `ETXTBSY` 竞争

### 🧩 功能 / 行为修复
- [#9765](https://github.com/zeroclaw-labs/zeroclaw/pull/9765) — fix(sop): SOP 定义从共享 workspace 读取，而非 `data_dir`（修掉双重语义串扰）
- [#9547](https://github.com/zeroclaw-labs/zeroclaw/pull/9547) — chore(channels): CPAL 0.15.3 → 0.18.1，统一 Voice Wake PCM 速率/格式
- [#9544](https://github.com/zeroclaw-labs/zeroclaw/pull/9544) — fix(delegate): 委托目标走 canonical session provider builder，恢复 fallback 链路

> 📈 **推进度评估**：今日合入的 5 个安全修复，全部直接关闭或部分关闭了 [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)（v0.9.0 auth/security/gateway/breaking-change 跟踪器）上的高优先级条目；CI 侧的"共用 runner / 跨平台定时测试"是 Issue [#7884](https://github.com/zeroclaw-labs/zeroclaw/issues/7884) 的 RFC 落地。整体可视为 **一个以安全为核心 KPI 的高质量 PR 日**。

---

## 4. 社区热点

### 🔥 评论数 Top 5（全部为 RFC，处于长讨论期）
| 排名 | Issue | 评论数 | 👍 | 主题 |
|---|---|---|---|---|
| 1 | [#6808](https://github.com/zeroclaw-labs/zeroclaw/issues/6808) | **23** | 0 | RFC: Work Lanes / Board 自动化 / Label 清理（治理 RFC，已 Ratified，处于 rollout） |
| 2 | [#8603](https://github.com/zeroclaw-labs/zeroclaw/issues/8603) | **23** | 0 | RFC: ZeroClaw Chat Completions profile（让 ZeroClaw 直接对接 Open WebUI / Continue.dev / Aider / LangChain 等 OpenAI 协议客户端） |
| 3 | [#8303](https://github.com/zeroclaw-labs/zeroclaw/issues/8303) | **22** | **1** | RFC: Goal mode v1 —— 跨多 turn 的有界前台 Matrix 工作（明确与父 RFC 解耦） |
| 4 | [#7155](https://github.com/zeroclaw-labs/zeroclaw/issues/7155) | **20** | 0 | RFC: 高风险 shell 命令的执行级确认 + Claude Code 风格的 allow/ask/deny 策略（已收缩至 normative shell-policy 契约） |
| 5 | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) | **19** | 0 | RFC: Runtime-owned conversation sessions / 传输层适配 |

**诉求解读**：
- **#6808 + #8692 [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692)**（13 条评论）——社区明显感到 maintainer 决策队列需要看板化、自动化路由；
- **#8603** ——核心痛点是 ZeroClaw 当前仅暴露 WebSocket/ACP/Webhook，**OpenAI 协议生态成了最大的接入障碍**，这条 RFC 一旦合入将解锁 Open WebUI、Continue.dev、Aider、LangChain 全部用户；
- **#7155** ——shell 命令执行安全是个人 AI 助手的命门，社区期待参考 Claude Code 的成熟 UX；
- **#8303** ——Goal mode 试图解决"多 turn 有界任务"这一当前零基础架构能支持的稳定性瓶颈。

---

## 5. Bug 与稳定性

按严重度排序（按 issue 标签中的 priority:p1 + risk:high 综合判定）：

| 严重度 | Issue / PR | 现象 | 状态 |
|---|---|---|---|
| 🔴 **P1 / 高危** | [#9594](https://github.com/zeroclaw-labs/zeroclaw/issues/9594) | Coding-agent CLI 工具对同一次成功调用**双重扣减 action budget** | ✅ **已关闭**，由 [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) 的原子化会计修复覆盖 |
| 🔴 **P1 / 高危** | [#9849](https://github.com/zeroclaw-labs/zeroclaw/issues/9849) | `RateLimitedTool` 在并行 dispatch 下 check-before-record-after 非原子，余额仅剩 1 时两个 worker 可同时通过 | ✅ **已关闭**，同由 [#9996](https://github.com/zeroclaw-labs/zeroclaw/pull/9996) 修复 |
| 🔴 **P1 / 高危** | [#9314](https://github.com/zeroclaw-labs/zeroclaw/pull/9314) | Telegram long-poll offset 在下载/转写/交付前即推进，瞬时失败将**永久丢失该 update** | 🟡 **PR 待维护者 review**，代码已就绪 |
| 🟠 **P2 / 高危** | [#10023](https://github.com/zeroclaw-labs/zeroclaw/issues/10023) | Pinned fallback 输出错误日志：记下"agent requested model"而非"实际服务的 pinned model"，混淆运维排障 | 🟡 **OPEN，需 fix PR** |
| 🟠 **P2** | [#10038](https://github.com/zeroclaw-labs/zeroclaw/pull/10038) | `POST /api/cron` 接受任意 `session_target`，未识别值被静默存为 `isolated` | 🟡 **fix PR 已开**，待作者响应 review |
| 🟠 **P2** | [#10011](https://github.com/zeroclaw-labs/zeroclaw/issues/10011) | daemon heartbeat 测试在多线程运行时写入/chmod/exec 新文件，存在可执行文件竞争 | 🟡 **OPEN**，尚无 PR 跟进 |

> 📌 今日最重要的稳定性成果是 **#9996 一举关闭两个 P1 高危问题**（双扣 action budget + 非原子 RateLimited check），考虑到这些都影响计费/安全语义，**这是当日最高 ROI 的合入**。

---

## 6. 功能请求与路线图信号

从新增/活跃 Issue 与 PR 中提炼对路线图有信号价值的请求：

### 🆕 新功能 PR（OPEN，待合入）
- **[#9986](https://github.com/zeroclaw-labs/zeroclaw/pull/9986) `feat(agents): export an agent to a portable bundle`** — 新增 `zeroclaw agents export <alias> --out <dir>` 命令，导出 manifest + 配置闭包 + workspace tree，便于跨实例迁移代理。**作者 SheaHawkins，size:XL，需 maintainer 关注**。
- **[#8713](https://github.com/zeroclaw-labs/zeroclaw/pull/8713) `fix(tools): add allowed_private_hosts opt-in to file_download SSRF gate`** — 修主仓库内仍可被 `http://127.0.0.1`、`http://169.254.169.254/...`、`http://10.0.0.5` 通过的文件下载 SSRF，引入白名单 opt-in。**这是接续今日合入安全 PR 主线的下一个关键修复，应优先 review**。
- **[#10021](https://github.com/zeroclaw-labs/zeroclaw/pull/10021)** — `fix(runtime)` 把目标 runtime 的 thinking 策略应用到独立 delegate（作者 vrurg，size:M）
- **[#10003](https://github.com/zeroclaw-labs/zeroclaw/pull/10003)** — `fix(providers)` Reliable retry/failover 时精确保留 provider/model 用量统计（size:XL）
- **[#10065](https://github.com/zeroclaw-labs/zeroclaw/pull/10065)** — `fix(zerocode)` 修复 ZeroCode 文件浏览器搜索模式下方向键失效

### 🆕 新功能 Issue（小型，可快速合入）
- **[#10059](https://github.com/zeroclaw-labs/zeroclaw/issues/10059)** — `[Feature]: Support Option-Backspace word deletion in ZeroCode text inputs`，标签 `good first issue, priority:p3, risk:low`，**典型的低门槛社区贡献入口**。

### 🎯 路线图明确信号
1. **OpenAI Chat Completions profile（#8603）** ——几乎确定进入下一里程碑，是扩大外部生态的旗舰 RFC；
2. **Shell 命令 allow/ask/deny + Claude Code 风格 UX（#7155）** ——Rev 3 已由 maintainer 收紧，落地节奏明显加快；
3. **Pluggable inbound authentication（#7141）** ——v0.9.0 身份认证里程碑的核心，可能直接推动命名/版本切分；
4. **WhatsApp `allowed_groups` 默认语义反转为 permit-none（#9397）** ——已经在合规/默认安全立场上表态；
5. **CPAL 0.18（#9547）** ——支持最新音频栈，路线图已悄然推进。

---

## 7. 用户反馈摘要

从 Issues 评论和 PR

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*