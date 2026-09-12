# OpenClaw 生态日报 2026-09-12

> Issues: 498 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-12 02:37 UTC

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
**日期：2026-09-12** | 数据来源：GitHub API

---

## 1. 今日速览

OpenClaw 今日保持高度活跃：**Issues 498 条（277 新开/活跃、221 已关闭）、PRs 500 条（289 待合并、211 已合并/已关闭）、1 个新版本发布**。项目处于 **2026.9.4 发布日** 的关键窗口：版本刚刚上线，但已经出现数个被标记为 `impact:ux-release-blocker` 的 P0 级缺陷（包括 #144742、#145192、#144678），社区讨论密度集中于 **升级路径兼容性、Gateway 事件循环阻塞、provider 凭证绑定** 三条主线。整体处于"高频修复 + 发布后回滚压力"的稳健迭代节奏，需要维护者优先处置更新通道阻塞类问题。

---

## 2. 版本发布

### 🚀 v2026.9.4 — openclaw 2026.9.4

**主要更新（Highlights）：**

- **可恢复的兼容性失败更新（Recover from compatible failed updates）**：当 schema 与配置检查证明回滚安全时，保留旧版本包并恢复其先前的配置与服务。**注意：数据库迁移仍然要求经过验证的预更新备份**。（#140339）

**升级建议与注意事项：**

1. **数据库迁移前必须自行完成 pre-update backup**——本版本无法在 schema 迁移失败时自动恢复数据库。
2. ⚠️ 该版本**未包含 #144208**（main commit `00edac804478`，合并于 2026-09-10 17:16 UTC，发布分支已切出），导致存在 v1 handoff lease 行时所有 config 写入失败 → [#144742](https://github.com/openclaw/openclaw/issues/144742)（release blocker）。
3. macOS 用户从 2026.9.2 升级到 2026.9.4 会在 candidate-Doctor 阶段失败 → [#145192](https://github.com/openclaw/openclaw/issues/145192)。
4. 2026.9.4 中 stdio MCP server 在 30 秒 `initialize` 超时后会触发 unhandled rejection "service child cleanup identity lost" → [#144911](https://github.com/openclaw/openclaw/issues/144911)。

> 🔴 **建议：在 #144208 / #144742 修复合并并补发 2026.9.4.x 之前，谨慎从 2026.9.2 跨版本升级到 2026.9.4**。

---

## 3. 项目进展

今日已合并/关闭的 PR 集中在 **provider 凭证治理、CLI 校验收紧、Gateway 健康检查、备份异步化** 等可观测性/稳定性维度：

| 主题 | PR | 意义 |
|---|---|---|
| Copilot subagent 持久化失败后保留结果 | [#145467](https://github.com/openclaw/openclaw/pull/145467) ✅ CLOSED | 修复原生 Copilot 子代理在持久化失败时丢失完成结果或卡死的问题 |
| Discord 已解析令牌在未配对运行时配置下的保留 | [#145424](https://github.com/openclaw/openclaw/pull/145424) ✅ CLOSED | 解决 SecretRef 命名账户在 Discord 消息中报"已配置但不可用"令牌错误的回归 |
| Plugin 公共表面惰性化 | [#145443](https://github.com/openclaw/openclaw/pull/145443) | 减少重复插件工件读取开销 |
| 模型目录 thinking 索引 | [#145439](https://github.com/openclaw/openclaw/pull/145439) | 降低大型模型目录下的 Gateway 响应延迟 |
| 配置覆盖按目录投影索引 | [#145433](https://github.com/openclaw/openclaw/pull/145433) | 减少 model-list 重复工作 |
| 终端健康状态扫描优化 | [#145401](https://github.com/openclaw/openclaw/pull/145401) | 避免长健康诊断字符串的小写化处理 |
| AI 根 schema 收集单次化 | [#145425](https://github.com/openclaw/openclaw/pull/145425) | 减少 provider 工具准备时的重复定义收集 |
| CLI 空白 gateway stability `--bundle` 拒绝 | [#145537](https://github.com/openclaw/openclaw/pull/145537) | 收紧 CLI 校验 |
| CLI 空白 native hook relay `--timeout` 拒绝 | [#145523](https://github.com/openclaw/openclaw/pull/145523) | 收紧 CLI 校验 |
| UI 移除已弃用环境分隔样式 | [#145513](https://github.com/openclaw/openclaw/pull/145513) | 清理冗余样式 |
| 备份录制异步化与状态新鲜度 | [#145353](https://github.com/openclaw/openclaw/pull/145353) | 为共享 SQLite 所有者采用异步执行做准备 |

**整体判断**：项目在「稳健性 + 可观测性 + 严格校验」方向上推进明显，但更新链路本身（doctor/upgrade/runtime-verification）依然是当周的最大负债。

---

## 4. 社区热点（评论数 Top 10）

| # | Issue | 评论 | 关注点 |
|---|---|---|---|
| 1 | [#119720](https://github.com/openclaw/openclaw/issues/119720) | 17 | 同步代理持久化与 transcript 维护在规模下阻塞 Gateway 事件循环（diamond lobster） |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | 15 | OpenClaw 泄漏未收割的 hook/tool 子进程，僵尸累积（gold shrimp） |
| 3 | [#96834](https://github.com/openclaw/openclaw/issues/96834) | 15 | WhatsApp 1:1 入站图片在主通道上 wedge ~3 分钟（silver shellfish） |
| 4 | [#140620](https://github.com/openclaw/openclaw/issues/140620) | 12 | 2026.7.1-2 → 2026.9.2 session-transcript 对账导入 27/~1500 会话后停滞 |
| 5 | [#144712](https://github.com/openclaw/openclaw/issues/144712) ✅ CLOSED | 12 | npm update 在 "global install swap" 失败；完整回滚被报为 "recovery is unverified" |
| 6 | [#127148](https://github.com/openclaw/openclaw/issues/127148) | 12 | Codex `sessions.compact` 获取第二个 app-server 触发 active-writer 冲突 |
| 7 | [#142585](https://github.com/openclaw/openclaw/issues/142585) | 12 | 2026.9.3 Doctor 在 canonical 行缺失时拒绝合法旧版工作区设置与 attestation 导入 |
| 8 | [#49876](https://github.com/openclaw/openclaw/issues/49876) ✅ CLOSED | 12 | Cron 会话在工具失败时交付幻觉输出而非干净失败（platinum hermit, 安全/信任） |
| 9 | [#40786](https://github.com/openclaw/openclaw/issues/40786) ✅ CLOSED | 12 | 备份 CLI 增加 `.gitignore`-like exclude 模式的需求 |
| 10 | [#141252](https://github.com/openclaw/openclaw/issues/141252) | 11 | 2026.9.2 回归：reply 失败 "no active tool authority snapshot"（fallback 误触发） |

**核心诉求归纳**：

- **更新链路的可靠性**成为社区第一痛点（#144712、#140620、#142585、#136203、#144742、#142394、#145192、#144581），单一升级动作被反复阻断在 doctor/runtime-verification/candidate-snapshot 等不同阶段。
- **Gateway 事件循环与生命周期管理**是第二大热点（#119720、#97616、#144911、#142476、#141252、#139847），长期累积的同步调用在多 agent / 大规模部署中显形。
- **provider 边界治理**（绑定凭证、未配对配置保留）由 PR [#144768](https://github.com/openclaw/openclaw/pull/144768) 牵头回应。

---

## 5. Bug 与稳定性

### 🔴 P0 / 释放阻塞级（需立刻关注）

| Issue | 状态 | 说明 | 是否有 Fix PR |
|---|---|---|---|
| [#144742](https://github.com/openclaw/openclaw/issues/144742) | OPEN | 2026.9.4 未包含 #144208，v1 handoff lease 行使所有 config 写入失败 | ❌ 需合并 #144208 后重发 |
| [#145192](https://github.com/openclaw/openclaw/issues/145192) | OPEN | macOS 2026.9.2→9.4 managed update 在 candidate-Doctor 上因 #144742 失败 | ❌ 同上 |
| [#140620](https://github.com/openclaw/openclaw/issues/140620) | OPEN | 2026.7.1-2→9.2 升级仅导入 27/~1500 会话后停滞 | ❌ 无 |
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | OPEN | 2026.9.3 Doctor 拒绝合法 legacy 工作区设置 | ❌ 无 |
| [#136203](https://github.com/openclaw/openclaw/issues/136203) | OPEN | Windows de-DE 2026.7.1-2→8.2 升级后 Doctor 维护阻塞 | ❌ 无 |
| [#144678](https://github.com/openclaw/openclaw/issues/144678) | OPEN | iOS 手动 Gateway host scheme 静默禁用 Connect | ❌ 无 |
| [#142394](https://github.com/openclaw/openclaw/issues/142394) ✅ CLOSED | EPIPE 在 2026.9.3 升级后无自动重启 | 已有 #140339 行为改进（v2026.9.4） |
| [#144581](https://github.com/openclaw/openclaw/issues/144581) ✅ CLOSED | Windows dev 通道 canary 路径畸形 | ✅ 已修复 #142749 |

### 🟠 P1 / 高严重度

| Issue | 主题 | 是否有 Fix PR |
|---|---|---|
| [#119720](https://github.com/openclaw/openclaw/issues/119720) | 同步代理持久化阻塞 Gateway | 部分（#140231、#138984 已落地） |
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | 进程泄漏 / 僵尸累积 | ❌ 无 |
| [#96834](https://github.com/openclaw/openclaw/issues/96834) | WhatsApp 入站图片 wedge 3 分钟 | ❌ 无 |
| [#127148](https://github.com/openclaw/openclaw/issues/127148) | Codex `sessions.compact` 冲突 | ❌ 无 |
| [#141252](https://github.com/openclaw/openclaw/issues/141252) | "no active tool authority snapshot" 回归 | ❌ 无 |
| [#139847](https://github.com/openclaw/openclaw/issues/139847) | 同一会话 reply run 活动期间消息丢失 | ❌ 无 |
| [#141747](https://github.com/openclaw/openclaw/issues/141747) | 运行时 scaffolding 强制注入 ~686 tokens/turn | ❌ 无 |
| [#142476](https://github.com/openclaw/openclaw/issues/142476) | 2026.9.3 cron reaper 同步 PRAGMA integrity_check 每几分钟阻塞 14-76s | ❌ 无 |
| [#144809](https://github.com/openclaw/openclaw/issues/144809) | claude-cli 超过 RUN_STALE_TAKEOVER_MS 的回合丢失整条回复 | ❌ 无 |
| [#144911](https://github.com/openclaw/openclaw/issues/144911) | MCP server init 30s 超时拖垮 Gateway | ❌ 无 |
| [#139710](https://github.com/openclaw/openclaw/issues/139710) | 插件生成 supersede 中途杀死 system-agent turn | ❌ 无 |

### 🟡 P2 / 中等严重度（部分精选）

- [#138260](https://github.com/openclaw/openclaw/issues/138260) doctor runtime-tool-schemas 自检失败
- [#139098](https://github.com/openclaw/openclaw/issues/139098) 一次性自动化会话因 worker_session_placements 非终结行残留无法删除
- [#124759](https://github.com/openclaw/openclaw/issues/124759) iOS 应用启用"显示推理与工具活动"后严重卡顿
- [#143980](https://github.com/openclaw/openclaw/issues/143980) Docker 沙箱代理 `taskSuggestions.accept` 失败
- [#121558](https://github.com/openclaw/openclaw/issues/121558) cron 隔离运行为 claude-cli 后端注入运行旁白
- [#121187](https://github.com/openclaw/openclaw/issues/121187) 父级 NO_REPLY 被重试而非静默结算
- [#137294](https://github.com/openclaw/openclaw/issues/137294) 预压实被 300s 入站监管中断
- [#93120](https://github.com/openclaw/openclaw/issues/93120) Gemini TPM/RPM 限流正则误分类不重试

---

## 6. 功能请求与路线图信号

| 需求 | Issue / PR | 评估 |
|---|---|---|
| **Provider-bound credentials 强制要求** | [#144768](https://github.com/openclaw/openclaw/pull/144768)（OPEN, XL, maintainer） | 🔥 **大概率纳入**：XL 级别跨多 provider（Anthropic

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告
**报告日期：2026-09-12** · 数据基准：各项目 24 小时 GitHub 活动

---

## 1. 生态全景

当前个人 AI 助手 / 自主智能体开源生态呈现明显的**两极分化**：以 OpenClaw 为核心参照的"高迭代梯队"（OpenClaw、Hermes Agent、ZeroClaw、CoPaw）单日 Issue + PR 流量均达到 50–1000 量级，伴随稳定版本发布节奏；而**低活跃梯队**（PicoClaw、Moltis）与**完全静默项目**（NullClaw、IronClaw、TinyClaw、ZeptoClaw）则暴露出"维护者资源稀释"的真实风险。**跨项目共性痛点集中在三条主线**：升级路径可靠性、Gateway 事件循环与生命周期管理、Provider 多模型兼容性。整体生态正从"功能可用"迈入"运维可信"阶段，**配置持久化、安全合规、多租户演进**成为新的竞争焦点。

---

## 2. 各项目活跃度对比

| 项目 | Issues | PRs | 今日 Release | 健康度 | 关键观察 |
|---|---|---|---|---|---|
| **OpenClaw** | 498（277 活跃 / 221 关闭） | 500（289 待合并 / 211 已合并） | ✅ **v2026.9.4** | ⭐⭐⭐⭐ | P0 release blocker 集中爆发，更新链路是当周最大负债 |
| **Hermes Agent** | 50 / 50 | 50 / 50 | ✅ **v0.21.2**（紧急补丁） | ⭐⭐⭐⭐ | "One Gateway" 架构 PR 评审中，单日迭代密度极高 |
| **ZeroClaw** | 50 / 50 | 50 / 50（仅 2 闭环） | ❌ 无 | ⭐⭐ | OIDC stack（10 PR）阻塞 #10248 base，PR 积压 48 条 |
| **CoPaw (QwenPaw)** | 24（17 活跃 / 7 关闭） | 38（20 待合并 / 18 已合） | ✅ **v2.2.1 Stable** | ⭐⭐⭐⭐ | 2.2.x 升级回归潮（停止按钮、subagent 模型、MCP） |
| **NanoBot** | 4（2 开 / 2 关） | 28（18 合 / 10 待） | ❌ 无 | ⭐⭐⭐⭐½ | P1 Provider bug 基本清空，社区自助能力强 |
| **NanoClaw** | 5（3 活跃 / 2 关闭） | 38（9 合 / 29 待） | ❌ 无 | ⭐⭐⭐ | 安装链路连续触发同类问题，Voice Channel 双 PR 待评审 |
| **LobsterAI** | 3（新开/活跃） | 6（5 合 / 1 待） | ❌ 无 | ⭐⭐⭐ | OpenClaw 集成致命 Bug 集中清理，但配置持久化 Issue 长期未响应 |
| **PicoClaw** | 4（全部 stale） | 2（1 合 / 1 待） | ❌ 无 | ⭐⭐½ | 维护者响应缺口明显，1 个月未发版 |
| **Moltis** | 1（新建） | 1（OPEN 71 天） | ❌ 无 | ⭐⭐ | 唯一 OPEN PR 积压超 70 天，社区沉默循环 |
| NullClaw / IronClaw / TinyClaw / ZeptoClaw | — | — | — | ⭐ | 过去 24 小时无活动 |

---

## 3. OpenClaw 在生态中的定位

| 维度 | OpenClaw | 生态对照 |
|---|---|---|
| **Issue/PR 流量** | 单日 498 / 500，约为 Hermes / ZeroClaw 的 **10 倍** | Hermes / ZeroClaw / CoPaw 处于第二梯队（日均 50–100 条） |
| **发布纪律** | 严格 semver（v2026.9.4），关键修复走补丁版 | Hermes（v0.21.2 patch）、CoPaw（v2.2.1 stable）节奏相近；NanoBot / NanoClaw / LobsterAI 等多个项目**单日无版本推进** |
| **架构纵深** | Gateway + Provider + Channel + CLI + UI 五层齐备 | Hermes 主推"One Gateway"重构、CoPaw 主推 Hub 多租户——均在向 OpenClaw 架构对齐 |
| **社区规模** | Top10 热点评论数 11–17 条，单 Issue 最高 17 | NanoBot / NanoClaw 多数 Issue 评论 0–1 条；CoPaw #7318（Hub 方向）评论 26 为单点峰值 |
| **差异化优势** | 唯一在"可恢复升级"、"备份异步化"、"Doctor 多阶段拦截"等企业级运维特性上系统投入 | Hermes 偏研究（teknium1 主推架构）、ZeroClaw 偏安全（OIDC 主线）、CoPaw 偏多租户（Hub） |

**结论**：OpenClaw 已是事实上的**参照实现（reference implementation）**——LobsterAI 几乎是其下游集成方（按 OpenClaw 版本节奏同步修复），NanoClaw / PicoClaw / Hermes 在架构命名（Gateway、Channel、Provider）上趋同收敛。

---

## 4. 共同关注的技术方向

| 技术方向 | 涉及项目 | 具体诉求 |
|---|---|---|
| **升级路径可靠性** | OpenClaw（#144742 #145192 #140620 #142585）、NanoClaw（#3769 #3765 #3762 #3204）、Hermes（#108735）、ZeroClaw（#10734 Windows 栈溢出） | Doctor / candidate-snapshot / runtime-verification 各阶段反复阻断；建议将"pre-update backup + safe rollback"纳入版本基线 |
| **Gateway 事件循环与生命周期** | OpenClaw（#119720 #97616 #144911 #141252）、NanoBot（#5215 关停泄漏）、CoPaw（#7567 停止按钮失效） | 长会话下同步持久化阻塞 event loop；agent / MCP 子进程的确定性释放成通用需求 |
| **Provider 多模型兼容** | NanoBot（#5214 DeepSeek #5230 Gemini 3 thought signature #5216 Gemini Flash）、Hermes（#108656 Gemini 配额）、CoPaw（#7717 DeepSeek V4.1 原生能力） | 第三方路由（AnySearch、Requesty、DaoXE）持续涌入；"OpenAI 兼容 Provider"已成标配 |
| **WebUI 性能与一致性** | NanoBot（#5745 大历史回放 #5732 流式刷新 50ms #5736 favicon 缓存）、PicoClaw（#3347 laggy interface）、CoPaw（#7688 分组分页） | 首屏渲染、长 history 回放、流式刷新节奏是三个共性瓶颈 |
| **配置 / 数据持久化** | LobsterAI（#2293 #1006 #2654）、OpenClaw（#144742 v1 handoff lease 覆盖写入）、CoPaw（#7708 大模型配置丢失） | "模板覆盖用户文件"成反复出现的用户信任杀手 |
| **多 Profile / 多租户** | Hermes（#107485 #70688 #108575 profile 行为不一致）、CoPaw（#7318 Hub 方向 + #7696 本地管理员引导） | 调度、订阅、安全边界在多 profile 模式下行为分裂是真实痛点 |
| **Channel 层健壮性** | NanoBot（#5737 Email 中间事件）、OpenClaw（#96834 WhatsApp 图片 wedge 3 分钟）、Hermes（#91813 Bot Mode transcript 暴露） | Discord / WhatsApp / Telegram 等渠道的事件抑制策略不一致 |
| **安全合规** | ZeroClaw（OIDC 全栈 10 PR）、Hermes（#92758 MCP OAuth RFC 9207 #108716 auth.json 绕过）、CoPaw（安全相关回归） | OIDC / OAuth iss / 安全根继承是新一代基线 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 通用个人 AI 助手，企业级可靠性 | 个人开发者 + 中小团队 | 五层架构 + Doctor 多阶段校验 + 异步备份；DLM-style upgrade safety |
| **Hermes Agent** | 研究驱动、Bot Mode、远程 Gateway 接入 | 研究型用户 + 多端用户 | "One Gateway owns every session"（#106742）；多 profile 行为对齐 |
| **CoPaw / QwenPaw** | 个人助手 + 团队 Hub 演进 | 阿里生态用户 + 团队 | "按 Agent 配置模型路由"（v2.2.1）；Auto Fin 主动记忆 |
| **ZeroClaw** | 安全 / 隔离 / 授权 | 安全敏感型部署 | RFC #7141（OIDC 全栈）+ canonical principals + 工具选择器 |
| **NanoBot** | 学术背景，Provider 兼容 | 模型研究者 + 兼容多 LLM 用户 | table-driven provider 镜像、WebUI 性能优先 |
| **NanoClaw** | 轻量化 + Voice Channel | 个人用户 + 多模态先行者 | `/add-voice`（GPT-Live-1 全双工）+ add-remote-storage（rclone） |
| **LobsterAI** | OpenClaw 上游集成 + 桌面体验 | 有道用户 + OpenClaw 生态下游 | 紧跟 OpenClaw 版本节奏做兼容性补丁；hooks / USER.md 持久化 |
| **PicoClaw** | 边缘 / 国产 IM 平台适配 | sipeed 硬件用户 + 自托管玩家 | 轻量 Web UI + 多 IM 适配；自托管路由器（9Router）诉求 |
| **Moltis** | Telegram / OpenRouter 集成 | 社交化部署用户 | OpenAI 兼容 provider 矩阵；当前停滞 |
| NullClaw / IronClaw / TinyClaw / ZeptoClaw | — | — | 过去 24h 无活动迹象，需关注项目可持续性 |

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：高频快速迭代（成熟稳定 + 大量 PR 流入）
- **OpenClaw / Hermes Agent / ZeroClaw / CoPaw**
- 共同特征：单日 24h 流量 ≥ 50 issues + 50 PRs，有稳定发布节奏（本日 3 个项目共发布 3 个版本），活跃贡献者 ≥ 5 人。
- 风险点：PR 积压（ZeroClaw 48 条待合并、OpenClaw 289 条待合并）、回归潮（CoPaw 2.2.x）。

### ⚙️ 第二梯队：质量巩固期（功能稳定，进入补漏阶段）
- **NanoBot / NanoClaw / LobsterAI**
- 共同特征：本日重点是"修 bug 而非添功能"。NanoBot 清空积压的 P1 Provider 问题，NanoClaw 集中加固安装链路，LobsterAI 集中清理 OpenClaw 集成致命 Bug。
- 风险点：社区互动偏低，多数 PR/Issue 评论数 0–1，路线图透明度有限。

### 🪫 第三梯队：维护者响应缺口（基本面扎实但濒临停滞）
- **PicoClaw / Moltis**
- 共同特征：高质量社区贡献者（用户已给完整修复方案），但维护者 review 介入不足；PicoClaw 1 个月未发版、Moltis 唯一 PR 积压 71 天。
- 风险点：**贡献者热情消磨风险**——Moltis 若 48 小时内仍不响应 #1143，可能进入事实停摆。

### 💤 静默梯队：零活动项目
- **NullClaw / IronClaw / TinyClaw / ZeptoClaw**
- 24h 0 活动，无版本、无 Issue、无 PR 更新。建议归档或合并入主线项目。

---

## 7. 值得关注的趋势信号

### 趋势 1：升级可靠性从"加分项"变为"准入门槛"
OpenClaw 一天内出现 6 个 release-blocker issue（#144742、#145192、#140620、#142585、#136203、#144678），NanoClaw 一周内触发 4 个同类 setup issue（#3769、#3762、#3765、#3204）。**对 AI 智能体开发者的启示**：release 工程（含 doctor、snapshot、rollback safety）应与新功能开发并列为同等优先级的工程化投入。

### 趋势 2：Provider 生态进入"长尾聚合"阶段
NanoBot 接入 AnySearch、Moltis 接入 Requesty、CoPaw 接入 Serply、PicoClaw 接入 OpenAI Compatible（9Router）、NanoBot 接入 DaoXE、ZeroClaw 接入 Hailo-Ollama——**一周内至少 6 个新 provider 接入请求**。"统一接入 OpenAI 兼容协议"成事实标准，但 thought signature（Gemini 3）、reasoning items（DeepSeek）、cache prefix 等模型特有语义仍是兼容性深水区。

### 趋势 3：Voice / 多模态成为下一波差异化战场
NanoClaw 双 PR（#3764 + #3772）引入 GPT-Live-1 全双工浏览器通话，是本周最显著的多模态突破。OpenClaw 在 MCP stdio 30s timeout（#144911）、WhatsApp 入站图片 wedge（#96834）等多模态边界问题上的密集 Bug 修复，则揭示**多模态管道正在从"能用"过渡到"稳定"**。

### 趋势 4：安全 / OIDC 成为新一代基线
ZeroClaw 的 OIDC 全栈（10 个 PR stack）冲刺 RFC #7141，Hermes 修复 MCP OAuth RFC 9207

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目动态日报
**报告日期：2026-09-12**

---

## 1. 今日速览

NanoBot 仓库今日维持高强度迭代节奏，过去 24 小时共产生 **28 条 PR 更新**（18 条已合并/关闭，10 条待合并）和 **4 条 Issue 更新**（2 开 2 关），无新版本发布。提交主题高度集中在 **WebUI 体验打磨**、**Provider 兼容性修复**（Gemini / DeepSeek）和 **Channel 层健壮性提升**（Email / Discord）三个方向。整体活跃度高，单日合并量在近期 PR 流中处于偏高水位，项目健康度良好。

---

## 2. 版本发布

本统计周期内无新版本发布，跳过本节。

---

## 3. 项目进展（已合并/关闭 PR）

今日共有 **18 条 PR 进入合并/关闭流程**，其中以 bug 修复和性能优化为主，覆盖多个子系统：

### WebUI 体验与性能
- **#5740** `feat(webui): simplify automation management and unify disclosure motion` — 重构 Automations 面板为响应式任务列表 + 按需详情对话框，降低界面拥挤度。
- **#5742** `fix(webui): restore navigation after automation deletion` — 修复删除自动化后侧边栏与页面无法点击的回归 bug，并补充回归测试。
- **#5741** `fix(webui): omit binary data from tool progress` — 解决 `read_file` 图片结果中的 base64 数据被复制到 WebSocket 进度帧，造成多 MB WebUI 记录的问题。
- **#5732** `perf(ui): reduce long-text streaming refresh overhead` — 流式更新最小间隔提升到 50ms，并对可见 reasoning 文本做 UTF-16 边界截断。
- **#5736** `perf(webui): cache public favicon requests` — Service Worker 新增 favicon 专属 cache-first 存储（上限 128 项）。
- **#5744** `chore: remove core agent line count script` — 清理未维护的 `core_agent_lines.sh` 脚本。

### Provider 兼容性修复
- **#5214** `fix(providers): keep DeepSeek reasoning items wire-valid` — 修复 DeepSeek 经 OpenAI Responses API 路由时的反序列化失败。
- **#5230** `fix(gemini): preserve imported tool calls with signature fallback` — 修复 Gemini 3 因缺失 thought signature 而拒绝重放 function-call 的问题。
- **#5216** `fix(image): send Gemini Flash hints via generationConfig.imageConfig` — 修复 Gemini Flash 图像模型因 aspect ratio / size hint 路径错误返回 400 的问题。
- **#5215** `fix(gateway): close agent resources deterministically on stop` — P1 修复：解决 gateway 停止时 exec 会话 / MCP 子进程造成的 asyncio teardown 噪音与卡顿。

### Channel / 提示工程
- **#5356** `feat(webui): improve setup flows across chat channels (NAN-112)` — 重构 channel 设置面板为分组两列布局，本地化文案、安装与激活解耦。
- **#5737** `fix(email): disable intermediate progress delivery` — 为 Email 通道显式禁用 progress 与 tool-hint 默认值，避免生成 SMTP 无法呈现的中间事件。
- **#5734** `fix(memory): clarify Dream prompt write permissions` — 在 identity 层明确定义 Dream 任务的写入边界，缓解 Codex 拒绝 `/dream` 期间的记忆更新。

### 草案 / 草稿
- **#5255** `Draft: truthful API service status` — 提案让 WebUI API 服务面板对外部 `nanobot serve` 进程显示真实状态。

**整体看，项目本日在 WebUI 性能与稳定性、Provider 多模型兼容、Channel 行为一致性三个维度同步推进了显著工作，积压的 P1 Provider 问题（DeepSeek、Gemini 工具调用、Gateway 关停）已基本清理完毕。**

---

## 4. 社区热点

### Issues
- **#5505** [CLOSED] *Add AnySearch as a web search provider* — 评论数 **8 条**，是当日讨论最热的 issue。来自 AnySearch 团队主动申请以 API / MCP / Skill 三种方式接入 nanobot 的 `web_search` 工具，并提供 key-optional 的匿名配额方案。该工单被关闭后，#5731 已接续推进 `web_fetch` 后端集成。([链接](https://github.com/HKUDS/nanobot/issues/5505))

### Pull Requests
- **#5602** *feat(webui): add completion notification sound* — 在 WebUI 中加入可选的"回合完成提示音"，补齐现有浏览器通知仅覆盖后台场景的缺口。当前标记 **conflict**，需维护者解决合并冲突。([链接](https://github.com/HKUDS/nanobot/pull/5602))
- **#5745** *fix(webui): make large history replay incremental and cached* — P1 性能修复：将后端历史回放按消息/记录/字节三重预算限流，并将解析/恢复/序列化/gzip 移出 gateway event loop，首屏仅取 40 条消息。([链接](https://github.com/HKUDS/nanobot/pull/5745))
- **#5746** *feat(providers): add DaoXE gateway provider* — 引入 DaoXE 作为命名 gateway provider（命名含中文项目代号，需关注合规与品牌一致性）。([链接](https://github.com/HKUDS/nanobot/pull/5746))

**诉求分析：** 当前社区诉求明显集中在"补全 WebUI 使用细节体验"（提示音、设置面板简化、删除流程稳定性）和"扩展模型/服务生态"（新 Provider、新搜索后端）两条主线。

---

## 5. Bug 与稳定性

按严重程度从高到低排列：

| 严重度 | Issue/PR | 标题 | 状态 |
|---|---|---|---|
| **P1** | [#5726](https://github.com/HKUDS/nanobot/issues/5726) | Startup initial password? | **OPEN**，尚无关联 fix PR |
| **P1** | [#5215](https://github.com/HKUDS/nanobot/pull/5215) | gateway 关停时 agent 资源未确定性释放 | 已关闭（已修） |
| **P1** | [#5214](https://github.com/HKUDS/nanobot/pull/5214) | DeepSeek reasoning items wire 不合法 | 已关闭（已修） |
| **P1** | [#5230](https://github.com/HKUDS/nanobot/pull/5230) | Gemini 3 缺失 thought signature 重放失败 | 已关闭（已修） |
| **P1** | [#5745](https://github.com/HKUDS/nanobot/pull/5745) | 大历史回放阻塞 gateway | 待合并（fix PR 已就绪） |
| **P2** | [#5719](https://github.com/HKUDS/nanobot/issues/5719) | Discord 自动 compaction 仍触发消息 | 已关闭（无需代码改动） |
| **P2** | [#5737](https://github.com/HKUDS/nanobot/pull/5737) | Email 通道发出无法呈现的中间事件 | 已关闭（已修） |
| **P2** | [#5216](https://github.com/HKUDS/nanobot/pull/5216) | Gemini Flash 图像 hint 400 | 已关闭（已修） |
| **P2** | [#5741](https://github.com/HKUDS/nanobot/pull/5741) | 工具进度帧携带二进制数据 | 已关闭（已修） |

**关注重点：** `#5726`（启动初始密码未知）是当前**唯一仍处 OPEN 状态的 P1 Bug**，无对应修复 PR，建议维护者优先响应。

---

## 6. 功能请求与路线图信号

| 方向 | 来源 | 进入下一版本的概率 |
|---|---|---|
| 集成 AnySearch 作为 `web_search` 提供方 | [#5505](https://github.com/HKUDS/nanobot/issues/5505)（已关）+ [#5731](https://github.com/HKUDS/nanobot/issues/5731)（新增 `web_fetch` 后端） | **高**，社区方持续推进 |
| WebUI 回合完成提示音 | [#5602](https://github.com/HKUDS/nanobot/pull/5602) | 中，需先解决 conflict |
| 简化 Automations / Settings 面板 | [#5740](https://github.com/HKUDS/nanobot/pull/5602)（已合） + [#5743](https://github.com/HKUDS/nanobot/pull/5743)（待合并） | **高**，已部分落地 |
| 新增 DaoXE Gateway Provider | [#5746](https://github.com/HKUDS/nanobot/pull/5746) | 中，依赖评审对供应商的合规审查 |
| API 服务状态真实化（`nanobot api status`） | [#5255](https://github.com/HKUDS/nanobot/pull/5255) | 中，仍为 Draft |
| 大历史回放增量 + 缓存 | [#5745](https://github.com/HKUDS/nanobot/pull/5745) | **高**，P1 性能修复 |

---

## 7. 用户反馈摘要

- **#5505（AnySearch 集成）**：第三方搜索供应商主动以"为 AI 代理设计"为卖点寻求集成，并提供匿名配额，体现 nanobot 在 Agent 工具生态中具备外部吸引力。
- **#5726（初始密码）**：用户反馈 *"installed on a headless server … default it start with links that has no JS support, so i had to close it down and access via firefox from another workstation, but now i have no idea which password"* —— 真实痛点：无头服务器场景下首次访问 WebUI 的初始凭据不可见，暴露出文档与首次启动引导的缺失。
- **#5719（Discord compaction）**：用户反馈"routine internal maintenance still interrupts the chat"，反映"内部维护消息抑制"与"用户实际进度消息抑制"策略不一致的体验落差。
- 整体 PR 描述风格显示：用户在意的体验细节集中在 **首次上手（密码 / 引导）**、**长时间会话的响应性（流式刷新、历史回放）**、**跨 Channel 行为一致性** 三个层面。

---

## 8. 待处理积压

| 条目 | 类型 | 标题 | 风险点 |
|---|---|---|---|
| [#5726](https://github.com/HKUDS/nanobot/issues/5726) | P1 Issue | Startup initial password? | 无头部署场景下用户无法登录 WebUI，**至今无 fix PR** |
| [#5602](https://github.com/HKUDS/nanobot/pull/5602) | P2 PR | feat(webui): add completion notification sound | 标记 **conflict**，需维护者 rebase |
| [#5739](https://github.com/HKUDS/nanobot/pull/5739) | P2 PR | Dev | 仅含标签、缺少描述，**可读性极低，建议作者补充说明或关闭** |
| [#5255](https://github.com/HKUDS/nanobot/pull/5255) | Draft PR | truthful API service status | 仍是 Draft，需推动到可审阅状态 |

**维护者建议优先关注：** `#5726`（真实用户阻塞问题）与 `#5739`（描述缺失的 PR 影响仓库整洁度）。

---

*数据来源：HKUDS/nanobot GitHub 仓库 24 小时滚动更新。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：** 2026-09-12
**数据范围：** 过去 24 小时
**项目仓库：** [NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日维持高活跃度，单日更新 **50 条 Issue + 50 条 PR**，并伴随一次紧急补丁版本发布（v0.21.2）。整体生态呈"修 bug 与架构演进并行"的状态：核心团队在推进"单一 Gateway 统一会话"的重大架构改造（[#106742](https://github.com/NousResearch/hermes-agent/pull/106742)），同时针对昨日 v0.21.0 引入的 `state.db` 写锁退化问题打出了 v0.21.2 补丁。但 v0.21.2 本身又引入了一处 P1 回归（systemd 单元命名不一致），社区反馈需要快速跟进。社区讨论热度集中在 Skills 索引过期、Vision 工具缓存污染等长期问题。

---

## 2. 版本发布

### 🚀 v0.21.2 (v2026.9.11) — state.db Patch Release
**发布时间：** 2026-09-11
**类型：** Patch（补丁）

**主要内容：**
- 修复 v0.21.0 大改 session store 连接处理后引发的 `state.db` 脆弱性问题（第二个 writer 互相取消锁、健康状态误报等）

**注意事项：**
- ⚠️ **已发现回归：** [#108674](https://github.com/NousResearch/hermes-agent/issues/108674) — `sudo hermes gateway start|stop --system` 因 systemd 单元名 `hermes-gateway-<hash>` 与已安装的 `hermes-gateway.service` 不匹配而失败（exit 5）。这是 [#105525](https://github.com/NousResearch/hermes-agent/pull/105525) 修复带来的二次回归，已标记 P1，需尽快 hotfix。
- Windows 平台用户升级前请关注 [#108735](https://github.com/NousResearch/hermes-agent/issues/108735)（PowerShell 挂起问题，PR [#108742](https://github.com/NousResearch/hermes-agent/pull/108742) 已提交）。

**迁移建议：** 升级到 v0.21.2 后，使用 `--system` 模式的用户需临时回退到非 system 模式运行，或等待下一次补丁。

---

## 3. 项目进展

### ✅ 今日已合并/关闭的重要 PR（15 个已闭环）

| PR | 标题 | 影响 |
|---|---|---|
| [#108752](https://github.com/NousResearch/hermes-agent/pull/108752) | fix(desktop): Bot Mode 宠物选择器可加载自生成宠物 | 修复 [#90465](https://github.com/NousResearch/hermes-agent/issues/90465)，Desktop Bot Mode 可正常选用本地宠物头像 |
| [#108753](https://github.com/NousResearch/hermes-agent/pull/108753) / [#108749](https://github.com/NousResearch/hermes-agent/pull/108749) | `npm run fix` 自动修复 | 机器人自动 PR，规范 JS 代码格式 |
| [#108742](https://github.com/NousResearch/hermes-agent/pull/108742) | fix(update): 隔离 PowerShell 安装进程 | 解决 Windows `hermes update` 因加载用户 profile 而无限挂起 |
| [#90931](https://github.com/NousResearch/hermes-agent/pull/90931) | pet avatar picker 修复（已被 #108752 取代） | 闭环旧尝试 |

### 🔄 重大架构推进（已发布待合并）

- **[#106742 — "One gateway owns every session"](https://github.com/NousResearch/hermes-agent/pull/106742)**（作者：teknium1）  
  这是当前最具战略意义的 PR。目标：CLI、TUI、Desktop、API、ACP、bot、cron 全部接入同一个实时会话，统一由一个 Gateway 托管。当前 CI 全绿（34 通过、3 跳过、0 失败），已发布供 review。包含原生恢复、Webhook 投递、托管多 profile / 文件执行等子系统。这一改动若合并，将显著提升 Hermes 的多端一致性与可观测性。
- **[#108748 — Multiplexed profiles parity lane](https://github.com/NousResearch/hermes-agent/pull/108748)**（teknium1）  
  让多 profile 复用默认多路复用器时，cron / kanban / `/loop` / 完成通知等行为与其独立 `hermes -p <name> gateway run` 完全一致，消除过去在 multiplexer 模式下的功能落差。

**整体判断：** 项目在"统一会话架构 + 多 profile 行为对齐"两条主线上推进明显，向前迈出了实质性一步。

---

## 4. 社区热点

### 🔥 讨论最活跃

1. **[#66616 — Skills index 过期或降级](https://github.com/NousResearch/hermes-agent/issues/66616)**（评论 199 条，自动化巡检）  
   持续由 nousbot-eng 推送：当前 `degraded`，索引已 29.8h（阈值 26h）。Skills Hub `/docs/skills` 依赖 `/docs/api/skills-index.json`，重建任务在 `.github/workflows/skills-index.yml`（cron 6/18 UTC）失败。**本质诉求：** 站点文档与技能发现能力受损，需修复或增强 CI 巡检链路。

2. **[#87654 — Vision 工具首次可用性探测后消失](https://github.com/NousResearch/hermes-agent/issues/87654)**（11 条评论）  
   `vision_analyze` / `browser_vision` 在长进程首轮探测后被错误缓存为 `_AuxProbeClientStub`，导致后续会话全部丢失视觉工具。Dashboard 显示"启用"，但实际不可用。**已有修复 PR：** [#108733](https://github.com/NousResearch/hermes-agent/pull/108733) 已提交，待合并。

3. **[#92758 — MCP OAuth 桌面端回调丢失 RFC 9207 iss 参数](https://github.com/NousResearch/hermes-agent/issues/92758)**（6 条评论）  
   桌面应用发起 MCP OAuth 登录时，对所有声明 `authorization_response_iss_parameter_supported: true` 的授权服务器失败（已在 Resend MCP 复现）。**社区诉求：** 桌面 ↔ Web 行为一致性、安全合规。

### 👍 反应较多

- **[#38617 — Windows managed uv install 失败](https://github.com/NousResearch/hermes-agent/issues/38617)**（3 个 👍）  
  长期 Windows 安装体验类抱怨。
- **[#91813 — Bot Mode 群组活动暴露 bot 级实时会话 transcript](https://github.com/NousResearch/hermes-agent/issues/91813)**（2 个 👍）  
  反映用户希望多 Bot 协作过程更可观测、可监管。

---

## 5. Bug 与稳定性

### P1（高优先级，需立即关注）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#108674](https://github.com/NousResearch/hermes-agent/issues/108674) | sudo `gateway --system` 找不到 systemd unit（v0.21.2 回归） | 待提交 |
| [#87654](https://github.com/NousResearch/hermes-agent/issues/87654) | Vision 工具首次探测后被缓存为 stub | [#108733](https://github.com/NousResearch/hermes-agent/pull/108733) ✅ |
| [#92758](https://github.com/NousResearch/hermes-agent/issues/92758) | MCP OAuth 桌面回调丢弃 iss 参数 | 待提交 |
| [#108747](https://github.com/NousResearch/hermes-agent/pull/108747) | Codex 迭代上限摘要调用未剥离工具 | [#108747](https://github.com/NousResearch/hermes-agent/pull/108747) ✅（rebase 自 [#32777](https://github.com/NousResearch/hermes-agent/pull/32777)） |
| [#106742](https://github.com/NousResearch/hermes-agent/pull/106742) | One Gateway 架构（含会话恢复与 webhook 投递） | 待合并 |

### P2（重要修复）

| Issue | 标题 | 修复 PR |
|---|---|---|
| [#108656](https://github.com/NousResearch/hermes-agent/issues/108656) | Gemini 配额处理丢失 scope 与 RetryInfo | 待提交 |
| [#108735](https://github.com/NousResearch/hermes-agent/issues/108735) | Windows `hermes update` 无限挂起 | [#108742](https://github.com/NousResearch/hermes-agent/pull/108742) ✅ |
| [#108707](https://github.com/NousResearch/hermes-agent/issues/108707) | hardline 命令 `#` 注释里单引号导致引号追踪失同步 | 待提交 |
| [#84102](https://github.com/NousResearch/hermes-agent/issues/84102) | Local TTS 写 Ogg/Vorbis，平台语音气泡退化 | 待提交 |
| [#107485](https://github.com/NousResearch/hermes-agent/issues/107485) | SSH 隔离后端的 cron 调度被空闲退出看门狗杀掉 | 待提交 |
| [#57180](https://github.com/NousResearch/hermes-agent/pull/57180) | `web_extract` provider 调用无超时保护（修复中） | [#57180](https://github.com/NousResearch/hermes-agent/pull/57180) ✅ |

### P3 / 一般

- [#108575](https://github.com/NousResearch/hermes-agent/issues/108575) — `profile clone` 不携带 `agent.max_turns`
- [#108716](https://github.com/NousResearch/hermes-agent/issues/108716) — `HERMES_HOME/auth.json` 安全策略被绕过
- [#107259](https://github.com/NousResearch/hermes-agent/issues/107259) — `/v1/responses` 流式响应缺 reasoning 字段
- [#108659](https://github.com/NousResearch/hermes-agent/issues/108659) — 自定义 provider 强制 `cache_prompt` 导致图像/视频轮次错位
- [#70688](https://github.com/NousResearch/hermes-agent/issues/70688) — kanban worker 继承全局 `HERMES_WRITE_SAFE_ROOT`
- [#103586](https://github.com/NousResearch/hermes-agent/issues/103586) — 桌面分屏全局滚动状态污染
- [#80055](https://github.com/NousResearch/hermes-agent/issues/80055) — WhatsApp Cloud 引用回复文本丢失

**判断：** 修复覆盖率较高，多数 P1/P2 已有对应 PR；新出现的回归（#108674）需要快速响应。

---

## 6. 功能请求与路线图信号

### 大概率进入下一版本（有对应 PR 或方向明确）

- **远程 Gateway 链接接入**（[#108721](https://github.com/NousResearch/hermes-agent/pull/108721)）：通过 `hermes://gateway/connect` 链接无凭据连接远程 Gateway，重用既有 WebSocket 路径。
- **桌面分屏平铺/均分**（[#108756](https://github.com/NousResearch/hermes-agent/pull/108756) 修复 [#108751](https://github.com/NousResearch/hermes-agent/issues/108751)）：双击分隔条均匀分布可见兄弟窗格。
- **Browser takeover via WireGuard + noVNC**（[#108660](https://github.com/NousResearch/hermes-agent/pull/108660)）：Grok Bot 风格的浏览器交接 POC。
- **Bot Mode 确定性事件钩子**（[#106807](https://github.com/NousResearch/hermes-agent/issues/106807)）：连接持久专家，事件驱动 + 对抗式审阅工作流。
- **共享根 MEMORY.md 覆盖层（opt-in）**（[#108743](https://github.com/NousResearch/hermes-agent/pull/108743)）：为命名 profile 添加默认禁用的共享记忆层。
- **审批决策审计日志**（[#104102](https://github.com/NousResearch/hermes-agent/issues/104102)）：所有工具、所有路径的持久化审批记录。
- **历史对话快速跳转目录**（[#47809](https://github.com/NousResearch/hermes-agent/issues/47809)）：类似 DeepSeek 官网右侧导航。
- **TUI 自动提交（停顿 2s）**（[#47873](https://github.com/NousResearch/hermes-agent/issues/47873)）：照顾语音输入法用户。
- **CLI 阻塞澄清时弹桌面通知**（[#47403](https://github.com/NousResearch/hermes-agent/issues/47403)）：后台运行 CLI 时不再"静默等待"。

### 方向尚在讨论

- Bot Mode 群组级会话 transcript 公开（[#91813](https://github.com/NousResearch/hermes-agent/issues/91813)）：涉及隐私与可观测性平衡。
- Feishu 审批卡片的超时/过期生命周期（[#8896](https://github.com/NousResearch/hermes-agent/issues/8896)）。

---

## 7. 用户反馈摘要

- **Windows 用户群持续抱怨安装与更新体验**：[#38617](https://github.com/NousResearch/hermes-agent/issues/38617)（managed uv 安装失败）、[#108735](https://github.com/NousResearch/hermes-agent/issues/108735)（PowerShell 挂起）、[#108742](https://github.com/NousResearch/hermes-agent/pull/108742)（已在修复）。Windows 平台已成为 bug 集中地之一，团队反应速度较快，但需要更长远的 CI 覆盖。
- **多 profile 用户反馈行为不一致**：[#107485](https://github.com/NousResearch/hermes-agent/issues/107485)（SSH 隔离后端 cron 被看门狗杀掉）、[#70688](https://github.com/NousResearch/hermes-agent/issues/70688)（kanban worker 继承全局安全根）、[#76483](https://github.com/NousResearch/hermes-agent/issues/76483)（notify-subscribe 订阅错配 profile）、[#108575](https://github.com/NousResearch/hermes-agent/issues/108575)（profile clone 不携带 max_turns）。**痛点本质：** 多 profile 模式下，调度、订阅、安全边界行为与独立 profile gateway 仍有差异。
- **桌面端 UX 呼声集中**：分屏均分（[#86266](https://github.com/NousResearch/hermes-agent/issues/86266)、[#108751](https://github.com/NousResearch/hermes-agent/issues/108751)）、滚动按钮污染（[#103586](https://github.com/NousResearch/hermes-agent/issues/103586)）、Bot Mode 可观测性（[#91813](https://github.com/NousResearch/hermes-agent/issues/91813)）。
- **安全合规**：MCP OAuth RFC 9207（[#92758](https://github.com/NousResearch/hermes-agent/issues/92758)）、File Write Safety auth.json 绕过（[#108716](https://github.com/NousResearch/hermes-agent/issues/108716)）。**痛点本质：** 桌面/Web 安全边界一致性、凭据保护文档与实际行为存在差异。
- **积极信号**：发布 v0.21.2 响应社区 issue，社区 PR（含 teknium1、TotalLag、Heybinshao 等核心贡献者）持续高产；Bot 模式、远程 Gateway 接入、记忆层等创新方向持续被讨论。

---

## 8. 待处理积压（提醒维护者关注）

- **[#66616 — Skills index 巡检](https://github.com/NousResearch/hermes-agent/issues/66616)**（自 2026-07-18 起，199 条自动化评论，状态 `degraded`）：Skills Hub 索引重建任务持续失败。已影响文档/技能发现，建议优先排查 workflows/skills-index.yml 与 deploy-site.yml。
- **[#38617 — Windows managed uv 安装](https://github.com/NousResearch/hermes-agent/issues/38617)**（自 2026-06-04 起，3 👍）：长期未解决 Windows 平台安装问题。
- **[#8896 — Feishu 审批卡片生命周期](https://github.com/NousResearch/hermes-agent/issues/8896)**（自 2026-04-13 起）：从 [#8847](https://github.com/NousResearch/hermes-agent/issues/8847) 拆分出的独立子任务，尚未合并相关实现。
- **[#70688 — kanban worker 安全根](https://github.com/NousResearch/hermes-agent/issues/70688)**（自 2026-07-24 起）：`_default_spawn()` 安全上下文传递问题。
- **[#47809 — 历史对话跳转目录](https://github.com/NousResearch/hermes-agent/issues/47809)**（自 2026-06-17 起）：高频用户体验诉求，无 PR。
- **[#47873 — TUI 自动提交](https://github.com/NousResearch/hermes-agent/issues/47873)**（自 2026-06-17 起）：语音输入法用户长期诉求。
- **[#47403 — CLI 桌面通知](https://github.com/NousResearch/hermes-agent/issues/47403)**（自 2026-06-16 起）：后台运行 CLI 痛点。
- **[#68263 — Smart approval max_tokens 与 reasoning 模型不兼容](https://github.com/NousResearch/hermes-agent/issues/68263)**（自 2026-07-20 起，1 👍）：`_smart_approve

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 — 2026-09-12

> 数据来源：github.com/sipeed/picoclaw  
> 报告周期：2026-09-11 ~ 2026-09-12（过去 24 小时）

---

## 1. 今日速览

PicoClaw 项目今日动态处于**低活跃度**状态：过去 24 小时内共 4 条 Issue 和 2 条 PR 发生更新，但**全部条目均带有 `[stale]` 标记**，意味着维护者近期响应速度偏慢。值得注意的是，Slack 媒体上传 Bug（#3338）与其对应修复 PR（#3340）形成了"提交即合并"的良好闭环，社区贡献链运转正常。整体而言，项目无新版本发布，Issue/PR 流转呈"用户自助解决为主、维护者介入较少"的态势，**需关注维护者活跃度下滑的迹象**。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。  
社区反馈中提及的最新版本仍为 `v0.3.1` 和 `nightly-50-gbbf6893c`，距离上次正式发版已超过一个月的迹象明显，建议维护者评估发版节奏。

---

## 3. 项目进展

### ✅ 已合并/关闭的关键 PR

- **PR #3340 — `fix(slack): set FileSize on media upload params`**（已关闭）  
  链接：https://github.com/sipeed/picoclaw/pull/3340  
  作者 @octavioturra 修复了 Slack 频道上传媒体时 `FileSize` 字段缺失导致 `file.upload.v2: file size cannot be 0` 错误的问题。该 PR 与 Issue #3338 配对关闭，标志着 Slack 媒体上传通道已恢复可用，**是今日项目唯一实质性的代码层面推进**。

### 🟡 仍待合并的 PR

- **PR #3347 — `fix laggy interface`**（开放，仍标 stale）  
  链接：https://github.com/sipeed/picoclaw/pull/3347  
  修复 Web UI 在长对话场景下的卡顿问题，作者 @iMilnb 自述非 TS/Node 专业开发者，已完成桌面端与移动端 Brave 浏览器测试。该 PR 对 Web 端用户体验改善显著，但尚未获得 review，建议维护者优先处理。

---

## 4. 社区热点

| 排名 | 议题 | 评论数 | 👍 | 状态 |
|------|------|--------|-----|------|
| 1 | #3338 Slack 媒体上传失败 | 4 | 0 | 已关闭 |
| 2 | #3366 OpenAI 兼容 Provider 支持 | 2 | 0 | 开放 |
| 3 | #3346 RKLLM 异常响应 | 2 | 0 | 已关闭 |

### 🔥 热点分析

- **#3338 Slack 媒体上传**（https://github.com/sipeed/picoclaw/issues/3338）  
  评论最多（4 条），属于"典型第三方 SDK 升级兼容性问题"。社区用户主动定位了根因（`slack-go v0.23.1` 对 `FileSize` 的强制校验）并提交了 PR，体现了**社区具备较强的自我修复能力**，但维护者的 review 介入是当前瓶颈。

- **#3366 OpenAI 兼容 Provider**（https://github.com/sipeed/picoclaw/issues/3366）  
  用户 @ItachiSan 提出对自托管路由器（如 9Router）的支持需求。这类需求反映出 PicoClaw 用户群体中存在显著的**私有化部署场景**，与项目"轻量化 AI Agent"定位高度契合。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 描述 | 已有 Fix？ |
|--------|-------|------|-----------|
| 🔴 高 | **#3355 飞书配置报错**（https://github.com/sipeed/picoclaw/issues/3355） | `config.json contains unknown field(s): channel_list.feishu.app_id`，用户附有解决方案 | ❌ 无对应 PR |
| 🟡 中 | #3346 RKLLM 异常响应（已关闭） | ARM 开发板上 Qwen3.5-0.8B_w4 模型回复异常，附截图 | ⚠️ 已关闭，但未见修复 PR，可能为模型本身问题 |
| 🟢 低（已修复） | #3338 Slack FileSize 缺失 | ✅ 已被 PR #3340 修复闭环 |

**重点关注 #3355**：用户已明确给出修复方案（疑似字段命名校验逻辑问题），但至今无 PR 跟进，属于**低垂果实**，建议维护者优先处理。

---

## 6. 功能请求与路线图信号

### 📌 今日新增功能请求

- **#3366 支持 OpenAI 兼容 Provider**（https://github.com/sipeed/picoclaw/issues/3366）  
  用户建议新增"OpenAI Compatible"通用 Provider 模板，实现自托管路由器接入。  
  **可行性评估**：实现成本低（基于现有 OpenAI Provider 复制即可），社区需求清晰，**建议纳入下一版本路线图**。

### 📈 路线图信号

结合历史 Issue 模式，PicoClaw 当前最迫切的演进方向：
1. **多 Provider 生态扩展**（OpenAI 兼容、本地化部署）
2. **Web UI 性能优化**（PR #3347 已铺路）
3. **国产 IM 平台适配稳定性**（飞书、Slack、微信）

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的真实用户痛点：

- 😤 **维护者响应迟缓**：今日所有活跃 Issue/PR 均带 `[stale]` 标签，反映**机器人/自动化 stale 检测已先于人工介入**触发，用户等待 review 时间偏长。
- 💡 **自托管需求明确**：#3366 用户明确表达"想要接入 9Router"等本地路由器，说明**轻量化 + 本地化**是该项目的核心吸引力。
- 🔧 **社区自助能力强**：#3338、#3355 均由用户提供根因分析与修复方案，**社区贡献者质量较高**，但维护者需补足 review 环节。
- 🐛 **第三方 SDK 升级隐患**：Slack-go v0.23.1 的字段校验变化未被及时发现，提示**依赖升级测试覆盖**有待加强。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 积压时长 | 优先级建议 |
|------|------|------|----------|-----------|
| PR | #3347 | fix laggy interface | ~16 天 | ⭐⭐⭐ 高 |
| Issue | #3366 | OpenAI 兼容 Provider | ~8 天 | ⭐⭐ 中 |
| Issue | #3355 | 飞书 app_id 配置报错 | ~11 天 | ⭐⭐⭐ 高（用户已给方案） |

### 🚨 维护者提醒

1. **#3347 + #3355** 是两个"用户已提供完整解决方案"的项目，**合并/响应成本极低、收益高**，建议 48 小时内处理。
2. **#3366** 反映用户基础需求，建议至少给出回应（如 `accepted` / `needs-design`），避免进一步 stale。
3. 建议在仓库配置中**调整 stale 阈值**或**主动关闭长期无进展 Issue**，保持项目治理清晰。

---

## 📊 项目健康度评分（5 分制）

| 维度 | 评分 | 说明 |
|------|------|------|
| 代码活跃度 | ⭐⭐ | 仅 1 个有效代码提交 |
| 维护者响应 | ⭐⭐ | 多条 stale，维护者介入明显不足 |
| 社区贡献 | ⭐⭐⭐⭐ | 社区自助能力强，已有多位高质量贡献者 |
| 发布节奏 | ⭐⭐ | 无新版本，距离上次发版偏久 |
| Issue 治理 | ⭐⭐⭐ | 闭环率尚可（2/4 关闭），但开放项缺乏跟进 |

**综合评估**：⭐⭐½ / 5  
项目基本面扎实、社区活跃，但**维护者层面存在响应缺口**，短期内若无动作可能影响贡献者积极性。

---

*报告生成时间：2026-09-12 | 数据快照截止：2026-09-11 24h 窗口*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报
**日期：2026-09-12**

---

## 1. 今日速览

NanoClaw 项目今日呈现"高频迭代 + 安装链路集中修复"的特征：38 条 PR 更新中 9 条已关闭/合并，仍有 29 条待处理，仓库整体活跃度较高但 PR 积压较为明显。Issues 侧新开/活跃 3 条、关闭 2 条，主题集中在 **setup/bootstrap 路径**（uvx 安装、Node 版本兼容、SQLite 并发迁移、add-opencode 残留文件）。最值得关注的是核心团队推动的 **Voice Channel（/add-voice，基于 GPT-Live-1 全双工浏览器通话）** 双 PR（#3764 + #3772）进入评审阶段，标志着 NanoClaw 在多通道对话上的进一步扩展。整体代码健康度良好，但安装链路连续触发多个同类问题，提示该链路需要一次系统性加固。

---

## 2. 版本发布

**今日无新版本发布。** 最近一次版本活动迹象为 PR #2798（v2.1.17 CHANGELOG 扩展），今日已关闭，但仓库未观察到对应的 release tag 推送。

---

## 3. 项目进展

今日共关闭/合并 9 条 PR，覆盖 setup 修复、agent-runner 稳定性、文档与仓库治理多个方向：

| PR | 标题 | 类别 | 链接 |
|---|---|---|---|
| #3771 | fix: recover uvx-installed pnpm after bootstrap | 安装修复 | [#3771](https://github.com/nanocoai/nanoclaw/pull/3771) |
| #3291 | fix: bound pending message polling | 稳定性 | [#3291](https://github.com/nanocoai/nanoclaw/pull/3291) |
| #3249 | fix(setup): handle existing Node outside supported range | 安装修复 | [#3249](https://github.com/nanocoai/nanoclaw/pull/3249) |
| #3649 | chore(github): repair CODEOWNERS | 仓库治理 | [#3649](https://github.com/nanocoai/nanoclaw/pull/3649) |
| #1598 | feat: add-remote-storage skill（WebDAV/S3 via rclone + systemd） | 新功能 | [#1598](https://github.com/nanocoai/nanoclaw/pull/1598) |
| #2798 | chore(release): expand CHANGELOG for v2.1.17 | 文档 | [#2798](https://github.com/nanocoai/nanoclaw/pull/2798) |
| #2086 | v2 docs: update capability installer model | 文档 | [#2086](https://github.com/nanocoai/nanoclaw/pull/2086) |
| #2082 | v2 docs: clarify upstream developer references | 文档 | [#2082](https://github.com/nanocoai/nanoclaw/pull/2082) |

**关键进展解读：**
- **安装链路加固**：#3771 + #3249 + #3291 三连击，覆盖 uvx 安装 pnpm 路径冲突、Node 版本越界、轮询无界等安装后第一次启动的典型失败点。
- **远程存储能力上线**：#1598 引入 `/add-remote-storage` 技能（WebDAV/S3 via rclone + systemd）以及 `ncl groups config add-mount/remove-mount`，补齐了 NanoClaw 在持久化挂载方向的能力。
- **仓库治理规范化**：#3649 修复 CODEOWNERS 的默认 owner、自动化覆盖与供应链文件划分，为后续多人协作铺路。
- **v2 文档体系成型**：#2086、#2082、#2798 三条文档类 PR 集中关闭，v2 文档的"能力安装模型"和"上游开发者引用"基本定型。

**整体评估**：今日推进的项目价值密度较高，setup 链路一次集中修复值得肯定；项目整体向前推进幅度约相当于 1 个小版本（v2.1.17 文档已就绪）。

---

## 4. 社区热点

由于 PR/Issue 评论数据稀疏（多数为 0-1 条），结合"创建/更新时间"与"主题相关性"筛选出以下热点：

| 序号 | 条目 | 热度原因 | 链接 |
|---|---|---|---|
| 1 | PR #3764 — /add-voice 全双工浏览器通话 | 引入 GPT-Live-1 新通道，是当前最大的功能级 PR | [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) |
| 2 | PR #3772 — voice adapter payload | 配套 voice 适配器，与 #3764 联动 | [#3772](https://github.com/nanocoai/nanoclaw/pull/3772) |
| 3 | Issue #3576 — Rate-limited turns flood channel | 持续 2 周未根治，标题"flood the channel"反映用户感知强烈 | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) |
| 4 | PR #3713 — per-agent-group delivery mode | 影响所有 agent 投递契约，跨 agent-runner / configuration / core / ncl-cli 四个模块 | [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) |
| 5 | PR #3501 — docs: mention Dial channel | README 与 CHANGELOG 漏掉 Dial 渠道，是社区"被看见"诉求的体现 | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501) |

**诉求分析：**
- **能力扩张**：Voice Channel 是 NanoClaw 从"文本聊天"走向"实时语音通话"的标志性扩展，反映社区对多模态接入的持续兴趣。
- **能力曝光**：#3501 的存在说明"已发布能力未在文档/CHANGELOG 中被收录"是真实痛点。
- **稳定容忍度下降**：#3576 显示一旦错误信息刷屏，用户体验会迅速劣化。

---

## 5. Bug 与稳定性

按严重程度排序（高 → 低）：

| 严重度 | 标题 | 状态 | 是否有修复 PR | 链接 |
|---|---|---|---|---|
| 🔴 高 | **#3576** Rate-limited turns flood channel with duplicate error notices — no backoff/dedup on `deliverErrorResult` | OPEN（自 2026-08-27 起未根治） | ❌ 暂未发现修复 PR | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) |
| 🟠 中 | **#3765** Concurrent SQLite migrations can fail during fresh setup | OPEN | ❌ 暂未发现修复 PR | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) |
| 🟠 中 | **#3769** Fresh uvx bootstrap exits with pnpm not found when `~/.local/bin` is absent from PATH | CLOSED（2026-09-12 关闭） | ✅ PR #3771 | [#3769](https://github.com/nanocoai/nanoclaw/issues/3769) |
| 🟡 低 | **#3762** add-opencode leaves the pre-8772ec97 Dockerfile guard test behind on remove and upgrade | OPEN | ✅ 已有对应修复 PR #3763 | [#3762](https://github.com/nanocoai/nanoclaw/issues/3762) |
| 🟡 低 | **#3204** add-opencode still instructs Dockerfile ARG+RUN edits removed by cli-tools.json refactor | CLOSED | — | [#3204](https://github.com/nanocoai/nanoclaw/issues/3204) |

**关注点：**
- **#3576 与 #3765 是当前最需要维护者投入的两条**：分别影响"线上运行用户感知"与"首次安装成功率"，且暂无修复 PR。
- **add-opencode 残留**问题形成了"先 #3204（skill 文档滞后）→ 再 #3762（guard test 残留）"的连锁，两条 PR（#3204 已关、#3763 待合并）需要在同一版本闭环。
- **安装链路**连续触发同类问题（#3769、#3762、#3765、#3204），建议维护者合并后输出一篇"Fresh install checklist"。

---

## 6. 功能请求与路线图信号

今日虽未出现"用户提需求"型 Issue，但通过 PR 流向可以清晰看到项目路线图：

| 候选功能 | 状态 | 落入下一版本可能性 | 链接 |
|---|---|---|---|
| **/add-voice**（GPT-Live-1 全双工通话） | 评审中（#3764 + #3772 双 PR） | ⭐⭐⭐⭐⭐ 极高 | [#3764](https://github.com/nanocoai/nanoclaw/pull/3764) |
| **per-agent-group delivery mode**（agent 组级投递契约） | OPEN（#3713，仅 schema） | ⭐⭐⭐⭐ 高（基础设施先行） | [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) |
| **Dial channel** 文档化 | OPEN（#3501） | ⭐⭐⭐⭐⭐ 极可能并入下一个文档小版本 | [#3501](https://github.com/nanocoai/nanoclaw/pull/3501) |
| **registry tracking refs** 显式拉取（#3773） | OPEN | ⭐⭐⭐⭐ 高 | [#3773](https://github.com/nanocoai/nanoclaw/pull/3773) |
| **OneCLI gateway files** 跨重启持久化（#3774） | OPEN | ⭐⭐⭐⭐ 高 | [#3774](https://github.com/nanocoai/nanoclaw/pull/3774) |
| **downloaded installers** 用系统 shell 绝对路径运行（#3776） | OPEN | ⭐⭐⭐⭐ 高 | [#3776](https://github.com/nanocoai/nanoclaw/pull/3776) |
| **channel attachments → structured parts**（#3156） | OPEN（2026-07-30 创建） | ⭐⭐⭐ 中（长期待评审） | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) |
| **stale CI dry-run policy**（#3656） | OPEN | ⭐⭐⭐ 中 | [#3656](https://github.com/nanocoai/nanoclaw/pull/3656) |

**信号解读：** 下一版本（推测为 v2.1.18 或 v2.2.x）大概率包含"语音通道 + 安装链路加固 + 文档同步 + 注册表显式 ref"四件套。

---

## 7. 用户反馈摘要

由于 Issues 评论数据普遍稀少，仅能从摘要文本与状态变化中提取信号：

- **#3576（DawoudIO）**：用户在真实部署环境中观察到 rate-limited 错误被反复投递，称其为"prod 影响"，明确表达了对**默认错误处理策略过于激进**的不满。该 Issue 自 2026-08-27 创建至今 16 天无根治，提示用户感知到的支持响应节奏偏慢。
- **#3769（glifocat）**：在 fresh VM 上复现 uvx bootstrap 失败，定位到 `~/.local/bin` 路径问题，反映**首次安装的"新手路径"仍是高频故障面**。
- **#3765（glifocat）**：在 macOS 原生首次安装时遭遇 host + initializer 并发跑 SQLite migration 失败，是**"双重初始化"类架构缺陷**的典型表现。
- **#3762（glifocat）**：发现 `/add-opencode` 升级路径遗留 `opencode-dockerfile.test.ts`，提示**技能升级与 Dockerfile 重构之间存在迁移债务**。
- **#3204（mshirel）**：用户指出 SKILL.md 仍在指导已被移除的 Dockerfile 操作，反映**技能文档与代码演进存在脱节**。

整体而言，**真实用户痛点集中在"安装 → 启动 → 升级"三段链路**，核心功能层（如 agent 对话、渠道）反馈密度反而较低，说明 NanoClaw 在"基础功能可用性"上已建立基本信任，但"Onboarding 体验"仍是短板。

---

## 8. 待处理积压

**长期未响应 / 待维护者关注的条目**：

| 条目 | 创建日 | 等待天数 | 关注理由 | 链接 |
|---|---|---|---|---|
| Issue **#3576** | 2026-08-27 | 16 天 | 用户生产环境被影响，暂无修复 PR | [#3576](https://github.com/nanocoai/nanoclaw/issues/3576) |
| PR **#3156** | 2026-07-30 | 43 天 | channel attachments → structured parts，长期待评审 | [#3156](https://github.com/nanocoai/nanoclaw/pull/3156) |
| PR **#3656** | 2026-08-29 | 14 天 | stale CI dry-run policy，未推进 | [#3656](https://github.com/nanocoai/nanoclaw/pull/3656) |
| PR **#3652** | 2026-08-29 | 14 天 | bounded heartbeat keep-alive，能力向修复 | [#3652](https://github.com/nanocoai/nanoclaw/pull/3652) |
| PR **#3713** | 2026-09-03 | 9 天 | per-agent-group delivery mode（schema 先行） | [#3713](https://github.com/nanocoai/nanoclaw/pull/3713) |
| Issue **#3765** | 2026-09-11 | 1 天 | SQLite 并发迁移，但尚无修复 PR | [#3765](https://github.com/nanocoai/nanoclaw/issues/3765) |

**给维护者的提醒：**
1. **#3576 是当前积压中最有用户感知度的项**，建议尽快合并 backoff/dedup 方案或给出明确时间表。
2. **#3156 已等待 43 天**，属于跨模块（agent-runner ↔ providers）的核心功能，建议给出审阅状态。
3. **Issue #3765 与同类 setup bug 合并处理**可一次性降低未来安装类 Issue 的产生概率。

---

### 附录：项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 38 PR + 5 Issue |
| 响应速度 | ⭐⭐⭐ | 部分 Issue（如 #3576）超过两周无响应 |
| 安装稳定性 | ⭐⭐ | 连续多日报告同类 setup 失败 |
| 文档同步性 | ⭐⭐⭐⭐ | v2 文档集中推进，但 #3501 类滞后仍存在 |
| 路线图清晰度 | ⭐⭐⭐⭐ | Voice / delivery mode / setup 加固方向明确 |

---

*报告基于 2026-09-12 公开 GitHub 数据生成。所有链接均指向 `nanocoai/nanoclaw` 仓库。*

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

# LobsterAI 项目日报 · 2026-09-12

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) 过去 24 小时 GitHub 活动

---

## 1. 今日速览

LobsterAI 过去 24 小时呈现"PR 密集合入、Issue 关注不足"的典型维护日特征：共合并/关闭 6 个 PR，其中 5 个集中在 OpenClaw v2026.8.1 升级后的兼容性修复（覆盖插件清理、内存归档、桌面会话恢复、网关自愈、native 依赖打包），另 1 个为安装包体积优化；新开 3 个 Issue 中，2 个为长期悬而未决的配置持久化缺陷再度被带起讨论，1 个为新报告的 hooks 字段丢失 Bug。整体来看，维护者团队响应迅速，单日 PR 吞吐量较高，但社区侧（评论、点赞）参与度偏低，建议加强 Issue 端跟进。

---

## 2. 版本发布

**今日无新版本发布。** 修复内容主要集中在 main / openclaw 分支代码层面，预计将随下一版本（推测为 v2026.9.x 系列）一起打包发布。建议关注 milestone 标签或 OpenClaw 上游动态。

---

## 3. 项目进展

今日合并/关闭 6 个 PR，主题高度统一——均为 OpenClaw v2026.8.1 升级后的连锁问题修复，体现维护团队对历史债的快速清理：

| PR | 主题 | 价值评估 |
|---|---|---|
| [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | 缩略图渲染 + native 依赖构建问题（待合并） | ⭐⭐⭐ 用户体验与跨平台稳定性 |
| [#2656](https://github.com/netease-youdao/LobsterAI/pull/2656) | OpenClaw 网关启动自愈（已关闭） | ⭐⭐⭐ 提升启动鲁棒性 |
| [#2655](https://github.com/netease-youdao/LobsterAI/pull/2655) | 安装包体积优化（Windows/macOS，已关闭） | ⭐⭐ 改善分发体验 |
| [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653) | 插件清理时保留宿主 runtime（已关闭） | ⭐⭐⭐⭐ 防删主程序的高危回归修复 |
| [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652) | nsp-clawguard 2.5.0 native 兼容补丁（已关闭） | ⭐⭐⭐ 解锁插件启用链路 |
| [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) | 防止陈旧桌面会话被自动恢复（已关闭） | ⭐⭐⭐⭐ 避免误触发历史任务 |
| [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) | 修复 memory sidecar 归档冲突导致启动失败（已关闭） | ⭐⭐⭐⭐⭐ 致命性阻塞 Bug 修复 |

**整体推进评估：** 在不新增功能的前提下，团队用一次"修复批次"显著提升了 OpenClaw 集成层的稳定性。#2653、#2651、#2650 三项均属于可能直接导致用户数据丢失或任务误执行的严重问题，其快速合入体现了良好的工程纪律。项目健康度：📈 **良好（修复期）**。

---

## 4. 社区热点

按评论数排序的活跃议题：

1. **[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) - 重启后多个 agent 的 USER.md 被覆盖替换**（5 条评论，作者 yepcn，自 2026-07-07 起 stale）
   - 核心诉求：不同 agent 必须能保留各自的个性化 USER.md 配置
   - 当前状态：用户自行排查后定位为疑似 Bug，但维护者尚未确认是否复现

2. **[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) - 配置文件和工作空间文件在重启后被重置**（2 条评论，作者 1323588848，自 2026-03-28 起长期 open）
   - 涉及 `openclaw.json` 的 `channels.feishu.streaming` 与 `AGENTS.md` 反复被覆盖

3. **[#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) - hooks 字段在 syncToDisk 时丢失**（1 条评论，作者 maxbxkj，2026-09-11 新开）
   - 已附带明确的根因分析与修复建议（`openclawConfigSync.ts` 中 `getUserPlugins` 缺 hooks 字段）

**洞察：** 三条热点 Issue 均指向"配置/数据持久化"这一系统性问题，说明 LobsterAI 在用户自定义文件保护机制上存在设计缺陷，亟待一次系统性的根因治理（而非个案打补丁）。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue/PR | 描述 | 修复状态 |
|---|---|---|---|
| 🔴 高 | [#2650](https://github.com/netease-youdao/LobsterAI/pull/2650) | 内存归档冲突导致 OpenClaw 网关启动失败 | ✅ 已修复并关闭 |
| 🔴 高 | [#2651](https://github.com/netease-youdao/LobsterAI/pull/2651) | 启动孤儿扫描误将历史桌面会话视为中断并自动重跑 | ✅ 已修复并关闭 |
| 🔴 高 | [#2653](https://github.com/netease-youdao/LobsterAI/pull/2653) | Windows 下 `fs.rmSync` 递归删除宿主 OpenClaw runtime | ✅ 已修复并关闭 |
| 🟠 中 | [#2652](https://github.com/netease-youdao/LobsterAI/pull/2652) | nsp-clawguard 2.5.0 graceful-fs interop proxy 污染宿主 fs.close | ✅ 已修复并关闭 |
| 🟠 中 | [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | 缩略图渲染失败 + native 依赖构建异常 | ⏳ PR 待合并 |
| 🟡 低 | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | hooks 配置在 Gateway 重启后丢失 | ❌ 仅有 Issue，暂无 PR |
| 🟡 低 | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 多 agent USER.md 被 main agent 覆盖 | ❌ 长期未响应 |
| 🟡 低 | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 自定义配置/工作空间文件被模板重置 | ❌ 长期未响应 |

**总结：** OpenClaw 集成相关的核心阻塞 Bug 在今日得到集中清理，但"配置持久化"类问题（[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)、[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)、[#2654](https://github.com/netease-youdao/LobsterAI/issues/2654)）至今没有对应的修复 PR，存在重复出现风险。

---

## 6. 功能请求与路线图信号

虽然今日无明确的功能请求 Issue，但用户讨论中暗含以下可纳入下一版本的改进方向：

| 诉求 | 来源 | 可参考的现有 PR | 入版本可能性 |
|---|---|---|---|
| 提供官方持久化配置的方式，避免重启被模板覆盖 | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)、[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | 暂无对应 PR | ⭐⭐⭐⭐⭐ 高（已被多次报告） |
| hooks 字段持久化存储 | [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) | 暂无对应 PR | ⭐⭐⭐⭐ 提交者已给出明确实现方案 |
| OpenClaw main agent 会话从 Cowork 列表隐藏（避免用户混淆） | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | PR 自 2026-04 起 stale | ⭐⭐⭐ 中 |
| 安装包体积优化 | [#2655](https://github.com/netease-youdao/LobsterAI/pull/2655) | 已合并 | ✅ 即将落地 |

**路线图信号：** 配置持久化将大概率成为下一个维护窗口的重点治理对象。

---

## 7. 用户反馈摘要

从 Issue 评论中提炼的用户痛点与场景：

- **😣 多 agent 个性化失效（[#2293](https://github.com/netease-youdao/LobsterAI/issues/2293)）**：用户希望为不同 agent 维护专属上下文，但当前架构下 main agent 的 USER.md 会"吞噬"所有子 agent 的配置。这破坏了 agent 系统的基本可用性假设。
- **😣 配置不能跨重启保留（[#1006](https://github.com/netease-youdao/LobsterAI/issues/1006)）**：用户反馈 `openclaw.json`、`AGENTS.md` 等文件在每次启动时都会被内置模板"暴力重写"，目前只能用 cron 定时备份作为 workaround，体验极差。
- **😐 技术协作较积极但响应延迟**：例如 [#2654](https://github.com/netease-youdao/LobsterAI/issues/2654) 提交者直接给出了根因定位（`getUserPlugins` 未返回 hooks）+ 三步修复方案，说明社区中存在熟悉代码的开发者；但目前尚无 maintainer 回复确认采纳。
- **✅ OpenClaw 集成获得持续修复**：从今日合入的 5 个 PR 看，用户在 v2026.8.1 升级后遇到的启动崩溃、插件误删等问题被迅速响应，这是用户满意度的正向来源。

---

## 8. 待处理积压

提醒维护者关注以下长期未响应项：

| 类型 | 编号 | 标题 | 创建时间 | 现状 |
|---|---|---|---|---|
| Issue | [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) | USER.md 被覆盖 Bug | 2026-07-07 | stale 标记，2 个月未响应 |
| Issue | [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) | 配置/工作空间文件被重置 | 2026-03-28 | 长期 open，5 个月以上未解决 |
| PR | [#1181](https://github.com/netease-youdao/LobsterAI/pull/1181) | 隐藏 OpenClaw main agent 会话 | 2026-04-01 | stale 标记，5 个月未 review |
| PR | [#2657](https://github.com/netease-youdao/LobsterAI/pull/2657) | 缩略图渲染 + native 依赖构建 | 2026-09-11 | 今日新开，待合并 |

**风险提示：** [#1006](https://github.com/netease-youdao/LobsterAI/issues/1006) 与 [#2293](https://github.com/netease-youdao/LobsterAI/issues/2293) 反映的是同一类机制问题（"模板覆盖用户文件"），长期不修复将持续损害用户信任，建议统一规划方案后一并解决。

---

### 📊 项目健康度仪表盘

| 维度 | 评分 | 说明 |
|---|---|---|
| 代码活跃度 | 🟢 高 | 24h 合入 6 PR，节奏良好 |
| Bug 响应速度 | 🟢 优秀 | OpenClaw 相关致命 Bug 当日修复 |
| Issue 跟进 | 🟡 待提升 | 多条 stale Issue 长期未回复 |
| 社区参与度 | 🟡 偏低 | 评论/点赞数整体较低 |
| 路线图透明度 | 🟡 模糊 | 无近期 release 计划说明 |

---

*报告生成时间：2026-09-12 · 数据基准：GitHub REST API · 报告人：开源项目分析师 Agent*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报
**日期：2026-09-12**

---

## 1. 今日速览

Moltis 今日整体活跃度偏低，处于**轻度维护状态**。过去 24 小时内仅新增 1 条 Issue（Bug 报告）和 1 条 PR 更新，无版本发布、无 PR 合/关闭记录。值得关注的是，PR #1143（添加 Requesty 提供商）自 7 月 2 日提交以来已挂起超过 **70 天**，至今未获任何评论或评审反馈，社区响应链条明显存在滞后。整体项目健康度评估为**中等偏弱**——功能集成类 PR 缺乏维护者跟进，而平台集成相关 Bug 开始浮现，提示维护者需重新分配审查资源。

---

## 2. 版本发布

**本期无新版本发布。** 建议关注上游 release 节奏以确认是否处于版本空窗期。

---

## 3. 项目进展

今日**无 PR 合入或关闭**。从待处理 PR 状态看，项目在代码合并层面处于停滞：

- 🔗 [PR #1143 - Add Requesty as an OpenAI-compatible provider](https://github.com/moltis-org/moltis/pull/1143)（仍 OPEN）
  - 由社区贡献者 `Thibaultjaigu` 提交，最新更新时间为 2026-09-11
  - 旨在以 table-driven 方式镜像 `openrouter` 现有架构，新增 Requesty（https://requesty.ai）作为 OpenAI 兼容 LLM 路由器
  - 该 PR 提交至今已逾 2 个月（2026-07-02 → 至今），属严重积压

**项目向前推进程度：⚠️ 几乎无进展。**

---

## 4. 社区热点

| 排名 | 条目 | 类型 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [#1143 Add Requesty as provider](https://github.com/moltis-org/moltis/pull/1143) | PR | 0 | 0 | OPEN（积压 70+ 天） |
| 2 | [#1264 Tools stop working in shared Telegram channels](https://github.com/moltis-org/moltis/issues/1264) | Issue | 0 | 0 | OPEN（新建） |

**诉求分析：**
- PR #1143 反映出社区用户对**多模型路由/聚合层**有实际需求——Requesty 作为聚合多家 LLM 的路由器，与 Moltis 的 OpenRouter 集成形成同类补充，说明用户希望有更多模型接入选择。
- Issue #1264 则揭示了**多用户/共享渠道场景**（Telegram 群组）下的功能稳定性问题，是社交化 AI 助手部署中的典型痛点。
- 两者均无评论/互动，说明社区参与深度不足，可能是维护者响应不及时导致的"沉默循环"。

---

## 5. Bug 与稳定性

### 🟠 中等严重度（仅 1 例）

**[Bug] #1264 - Tools stop working in shared Telegram channels**
- 🔗 https://github.com/moltis-org/moltis/issues/1264
- 报告者：`stratus-ss` | 创建/更新时间：2026-09-12
- 评论：0 | 👍：0
- **是否已有修复 PR：❌ 无**

**问题描述：** 工具调用（tools）在 Telegram 共享/群组频道中失效。该问题已通过预检清单确认（搜索了现有 Issue、确认使用最新版本）。

**潜在影响分析：**
- Telegram 群组/频道属于 Moltis 的重要部署场景之一，此 Bug 直接削弱了多用户场景下的核心能力
- 推测可能与共享会话上下文、bot token 权限范围、或消息权限过滤逻辑相关
- **建议维护者优先响应**，因该 Bug 影响实际生产可用性

---

## 6. 功能请求与路线图信号

**新功能信号：**

| 信号源 | 内容 | 集成可能性 |
|---|---|---|
| [PR #1143](https://github.com/moltis-org/moltis/pull/1143) | 添加 Requesty 作为 OpenAI 兼容提供商 | 🟡 中等——实现方式成熟（镜像 openrouter），但缺乏维护者反馈 |
| [Issue #1264](https://github.com/moltis-org/moltis/issues/1264) | Telegram 共享频道工具调用失效 | 🟢 高优先级修复——属稳定性而非新功能 |

**路线图观察：** PR #1143 的代码结构清晰、遵循既有模式，技术风险低；维护者若能在近期 review，此 PR 完全有条件被纳入下一版本。但当前停滞状态已使其**错过多个潜在发布窗口**，社区贡献者热情可能被消磨。

---

## 7. 用户反馈摘要

由于今日 Issues/PRs 评论数均为 0，**无直接用户文字反馈可供提炼**。仅能从条目摘要中推断：

- **场景一（Issue #1264）：** 用户在 Telegram 群组/共享频道中部署 Moltis，反映出真实的多用户协作需求。该场景属于"AI Agent 进群"这一新兴应用模式，是个人 AI 助手向团队/社群延伸的典型尝试。
- **场景二（PR #1143）：** 贡献者主动引入第三方 LLM 路由服务，表明现有 Moltis 用户中存在**模型供应商多样化**诉求，对单点供应商存在潜在的可用性/成本/特性方面的担忧。

**痛点提炼：** 共享渠道下的功能可靠性 + 多模型灵活接入，是当前 Moltis 用户最实在的两类需求。

---

## 8. 待处理积压

### 🔴 长期未响应 PR

**[PR #1143](https://github.com/moltis-org/moltis/pull/1143) - Add Requesty as an OpenAI-compatible provider**
- 提交日期：2026-07-02
- 距今：**71 天**
- 评论：0 | 👍：0 | 最近更新：2026-09-11
- ⚠️ **风险评估：**
  - 严重偏离社区贡献响应最佳实践（通常 < 14 天首响应）
  - 已出现代码冲突/过期的可能（2 个月内主干可能已演进）
  - 贡献者体验受损，可能影响后续社区参与意愿
- 📌 **建议：** 维护者应在 48 小时内给出明确反馈（合入/请求修改/关闭），即使简短回复也有助于打破沉默

### 🟡 新开未响应 Issue

**[Issue #1264](https://github.com/moltis-org/moltis/issues/1264) - Tools stop working in shared Telegram channels**
- 创建日期：2026-09-12（今日）
- 评论：0 | 👍：0
- 📌 **建议：** 作为功能性 Bug，应在首个工作日内给予初步确认或标签分类（如 `confirmed`/`needs-triage`）

---

## 📊 数据汇总

| 指标 | 数值 | 趋势 |
|---|---|---|
| 新开 Issues | 1 | ➡️ 正常 |
| 关闭 Issues | 0 | ⚠️ 偏低 |
| 待合并 PRs | 1（积压 71 天） | 🔴 严重积压 |
| 合入 PRs | 0 | ⚠️ 偏低 |
| 新 Releases | 0 | ➡️ 待观察 |
| 社区互动（评论+👍） | 0 | 🔴 沉默 |

**综合判定：项目处于低活跃度周期，但存在结构性响应问题。** 维护者应优先处理 PR #1143 的积压与 Issue #1264 的确认，避免社区信任流失。

---
*报告生成时间：2026-09-12 · 数据源：GitHub REST API*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报 · 2026-09-12

> 数据来源：GitHub `agentscope-ai/QwenPaw`（即 CoPaw 主仓库）  ·  统计窗口：过去 24 小时

---

## 一、今日速览

CoPaw 在过去 24 小时保持**中高度活跃**：24 条 Issues 更新（17 条新开/活跃、7 条关闭），38 条 PR 更新（20 条待合并、18 条关闭/合并），并发布稳定版 **v2.2.1**。社区关注度集中于三个主题——**多租户 Hub 的演进方向**（Issue #7318 评论数 26 条）、**2.2.x 的多项回归 Bug**（停止按钮失灵、子代理模型丢失、模型配置丢失等），以及**移动端与 Console 的交互细节优化**。整体节奏显示项目处于"2.2.x 修补 + 2.3.x 路线图收集"的并行阶段。

---

## 二、版本发布

### 🚀 v2.2.1（Stable）已发布

**更新要点：**
- **Models, Agents & Memory**
  - 支持**按 Agent 独立配置模型路由**，含 provider 偏好与 fallback 行为（[#7501](https://github.com/agentscope-ai/QwenPaw/pull/7501)）
  - 引入 **Auto Fin 主动记忆复盘**（Auto Fin proactive memory review）
  - **ReMe 升级**，增强记忆能力

**稳定性验证：**
v2.2.1-beta.2 与 v2.2.1 的安装验证均已自动触发：
- [#7692](https://github.com/agentscope-ai/QwenPaw/issues/7692) — v2.2.1 Stable 安装验证（deadline 09-11 08:19 UTC）
- [#7674](https://github.com/agentscope-ai/QwenPaw/issues/7674) — v2.2.1-beta.2 Beta 安装验证（已关闭）

⚠️ **升级注意事项**：2.2.x 系列仍有若干回归 Bug 集中爆发（见第五节），生产环境升级前建议关注 #7567（停止按钮失效）、#7676（subagent_model 不生效）、#7687（切换智能体后静默跳到新对话）等修复进度。

---

## 三、项目进展（已合并/关闭的重要 PR）

| PR | 主题 | 影响 |
|---|---|---|
| [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) **CLOSED** | API：非有限数验证输入返回 422 | 修复 FastAPI 异常处理，避免不可序列化输入引发 500 |
| [#7688](https://github.com/agentscope-ai/QwenPaw/pull/7688) **CLOSED** | Console：简化分组会话分页 | 移除"折叠列表"，改用"加载更多"，保持选择状态不重置 |
| [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) **CLOSED** | Models：从 provider 解析的 context window 不被保留 | 修复部分模型 `context_size` 错误退化为 32768 导致过早压缩的问题 |
| [#7590](https://github.com/agentscope-ai/QwenPaw/pull/7590) **CLOSED** | Telegram：Markdown 表格渲染为 `<pre>` | 修复 #7585，管道符不再裸发 |
| [#6994](https://github.com/agentscope-ai/QwenPaw/pull/6994) **CLOSED** | Release notes: v2.1.0 | 历史 release notes 整理 |

**阶段小结**：今天合并/关闭的 PR 多为**质量修补类**（API 异常处理、Console UX、Telegram 渲染、模型上下文窗口），未涉及重大新功能——这与 v2.2.1 刚发布后的"稳定期"节奏一致。

---

## 四、社区热点 🔥

### 🥇 [#7318 — QwenPaw Hub 接下来应该做什么？](https://github.com/agentscope-ai/QwenPaw/issues/7318)
- **评论数 26** 👍4  · 标签：Discussion
- 由 `rayrayraykk` 发起，关联 #2324（多用户访问与 admin-managed skills）
- 核心诉求：QwenPaw 从个人 AI 助手走向团队场景，**Hub 多租户版**是社区反复呼吁的方向
- 今日配套 PR：[#7696 — Hub 本地管理员引导](https://github.com/agentscope-ai/QwenPaw/pull/7696)（`qwenpaw hub --init-admin`），无需浏览器/SSH 即可初始化首位管理员

> 📌 背后的产品诉求：让 CoPaw 不只停留在"个人助手"，而是支撑小团队的协作场景（共享技能、权限分级、计费）。

### 🥈 [#7177 — 优化 platform.agentscope.io/deploy 首页](https://github.com/agentscope-ai/QwenPaw/issues/7177) **CLOSED**
- **评论数 10**，移动端入口摆放 + 防止误触"停止"按钮
- 关联 [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) —— 后者揭露了"UI 显示已停止，但任务仍在执行"的真实风险

### 其他活跃讨论
- [#4901 — `spawn_subagent` 支持每任务选模型](https://github.com/agentscope-ai/QwenPaw/issues/4901)（3 评论，已开 3 个月）—— 与 v2.2.1 新增的"按 Agent 独立配置模型路由"功能形成强呼应
- [#7567 — 停止按钮后任务仍在执行](https://github.com/agentscope-ai/QwenPaw/issues/7567)（6 评论）—— 移动端用户的强烈痛点

---

## 五、Bug 与稳定性 ⚠️

按严重程度排序：

### 🔴 高严重（可能造成数据/执行不一致）

| Issue | 标题 | 版本 | 是否已有 fix PR |
|---|---|---|---|
| [#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567) | 点了停止后 UI 显示已停止，但实际仍在执行（会导致重复抛 409） | 2.2 web | ❌ 暂无 |
| [#7676](https://github.com/agentscope-ai/QwenPaw/issues/7676) | `subagent_model` 无效，subagent 永远继承父 agent 的 `active_model` | 2.2.1-beta.1/2 | ✅ [PR #7680](https://github.com/agentscope-ai/QwenPaw/pull/7680) 已诊断 |
| [#7698](https://github.com/agentscope-ai/QwenPaw/issues/7698) **CLOSED invalid** | 幽灵会话：侧边栏 9/10 会话点击加载出 9/9 内容，且历史丢失 | Tauri 2.2.1 | ❌ 标记 invalid |
| [#7687](https://github.com/agentscope-ai/QwenPaw/issues/7687) **CLOSED** | 切换智能体后发消息被静默切到新对话（2.2.1-beta.2 回归） | Desktop 2.2.1-beta.2 | ❌ 待观察 |
| [#7709](https://github.com/agentscope-ai/QwenPaw/issues/7709) | 定时任务经常无输出，结果被折叠到 thinking 步骤 | 2.2.1 | ❌ 暂无 |

### 🟡 中严重

| Issue | 标题 | 版本 | 是否已有 fix PR |
|---|---|---|---|
| [#7689](https://github.com/agentscope-ai/QwenPaw/issues/7689) | PDF 文档块在 #7621 后仍发送到多模态 `/chat/completions`，被 HTTP 拒绝 | — | ❌ 暂无 |
| [#7715](https://github.com/agentscope-ai/QwenPaw/issues/7715) | ReMe Daily Paper 在 arxiv 不可达时静默失败，错误信息遮蔽根因 | 2.2.1-beta.2 | ❌ 暂无 |
| [#7716](https://github.com/agentscope-ai/QwenPaw/issues/7716) | MCP 自 2.2.x 起无法连接和注册（2.1.1b3-qwenpaw-hub 正常） | 2.2.0/2.2.1 | ❌ 暂无（升级回归） |
| [#7708](https://github.com/agentscope-ai/QwenPaw/issues/7708) | 设置好的大模型无故丢失 | 2.2.1 Desktop | ❌ 暂无 |
| [#7705](https://github.com/agentscope-ai/QwenPaw/issues/7705) | Agent 工作目录不生效，新任务仍用旧目录 | 2.2.1 Desktop | ❌ 暂无 |
| [#7693](https://github.com/agentscope-ai/QwenPaw/issues/7693) | Creator 多图生成期间用户"审核通过"会中断在执行任务并永久卡在 RUNNING | — | ❌ 暂无 |

### 🟢 低/已闭环
- [#7590 / PR #7585](https://github.com/agentscope-ai/QwenPaw/pull/7590) Telegram Markdown 表格裸发 ✅
- [#7677](https://github.com/agentscope-ai/QwenPaw/pull/7677) API 非有限数 422 ✅
- [#7652](https://github.com/agentscope-ai/QwenPaw/pull/7652) Provider 解析的 context window 被覆盖 ✅

> 📌 **质量观察**：2.2.x 出现"**升级回归潮**"——MCP 连接、subagent 模型、智能体切换、工作目录等多模块在 2.1.x 工作正常却在 2.2.x 出现异常，建议下一补丁版本（2.2.2）优先收敛这些回归。

---

## 六、功能请求与路线图信号 🚧

| Issue / PR | 主题 | 进入下版本的概率 |
|---|---|---|
| [#7711 / PR #7712](https://github.com/agentscope-ai/QwenPaw/issues/7711) | 添加 Serply 作为 `web_search` provider | ⭐⭐⭐⭐ **高** — PR 已就绪，默认关闭（BYOK） |
| [#7717](https://github.com/agentscope-ai/QwenPaw/issues/7717) | DeepSeek 模型：原生能力元数据、prompt-prefix 稳定性、KV-cache 可观测性 | ⭐⭐⭐⭐ **高** — 借鉴 deepseek-harness，针对 DeepSeek V4.1 Flash |
| [#7710](https://github.com/agentscope-ai/QwenPaw/issues/7710) | 为 inter-agent tool chats 与 proactive messages 增加历史分组 | ⭐⭐⭐ **中高** — 与 v2.2.1 新增的 Auto Fin 主动记忆强关联 |
| [#7679](https://github.com/agentscope-ai/QwenPaw/issues/7679) | loop 增加 `/compact` 上下文压缩命令 | ⭐⭐⭐ **中高** — 与 [PR #7703 可视压缩](https://github.com/agentscope-ai/QwenPaw/pull/7703) 形成呼应 |
| [#7714](https://github.com/agentscope-ai/QwenPaw/issues/7714) | 支持自定义默认 Loop 模式（"默认"改名"标准"） | ⭐⭐⭐ **中** — UX 改进 |
| [#7700](https://github.com/agentscope-ai/QwenPaw/issues/7700) | 会话区切换到左侧 + 文档预览放到右侧 | ⭐⭐ **中** — 配套 PR [#7704](https://github.com/agentscope-ai/QwenPaw/pull/7704) |
| [#4901](https://github.com/agentscope-ai/QwenPaw/issues/4901) | `spawn_subagent` 每任务选模型（Haiku/Opus 模式） | ⭐⭐⭐⭐⭐ **极高** — v2.2.1 已落地"按 Agent 配置模型路由"，此为任务级延伸 |
| [#7318 Hub 方向](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 多租户 Hub 路线图 | ⭐⭐⭐⭐ **战略级** — 决定 CoPaw 能否从个人产品走向团队产品 |
| [#6499](https://github.com/agentscope-ai/QwenPaw/pull/6499) | 添加 Atlas Cloud provider | ⭐⭐⭐⭐ **高** — PR 待审 40+ 天 |
| [#6776](https://github.com/agentscope-ai/QwenPaw/pull/6776) | Playwright driver 自愈 | ⭐⭐⭐⭐⭐ **极高** — 修复"driver 死一次，永远坏掉"的硬伤 |
| [#7702](https://github.com/agentscope-ai/QwenPaw/pull/7702) | bot-manager：统一多渠道 bot 管理插件 | ⭐⭐⭐ **中** — first-time contributor，逻辑较复杂 |

---

## 七、用户反馈摘要 💬

### 痛点提炼
1. **移动端体验仍存关键缺口**（[#7177](https://github.com/agentscope-ai/QwenPaw/issues/7177)、[#7567](https://github.com/agentscope-ai/QwenPaw/issues/7567)、[#7707](https://github.com/agentscope-ai/QwenPaw/issues/7707)）
   - 入口位置不便、停止按钮误触风险、安卓输入法无回车键
   - 用户原文："手机上操作极不方便"、"每次操作都很紧张，怕误点到了停止"

2. **2.2.x 升级带来"看不见的破坏"**（[#7716 MCP](https://github.com/agentscope-ai/QwenPaw/issues/7716)、[#7676 subagent](https://github.com/agentscope-ai/QwenPaw/issues/7676)、[#

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-09-12

> 数据来源：github.com/zeroclaw-labs/zeroclaw · 统计窗口：过去 24 小时

---

## 1. 今日速览

ZeroClaw 今日延续了高强度协作态势：过去 24 小时共 **50 条 Issues** 与 **50 条 PRs** 更新，关闭 11 条 Issue、关闭 2 条 PR，但 **无任何新版本发布**。当前有 **48 条 PR 处于待合并状态**，其中超过 10 条 XL 级别的大型变更集中于 OIDC/安全栈（#10248–#10321），由同一位核心贡献者（JordanTheJet）以 stack 形式推进，反映项目正处于 RFC #7141（认证、隔离与授权）落地冲刺阶段。社区活跃度整体偏高，但 PR 积压风险显著，建议维护者关注评审节奏。

- 📊 [Issue 列表](https://github.com/zeroclaw-labs/zeroclaw/issues) · [PR 列表](https://github.com/zeroclaw-labs/zeroclaw/pulls)

---

## 2. 版本发布

⚠️ **今日无新版本发布**。当前主干仍处于 v0.8.5 之后的开发分支状态，多个 XL 级安全重构 PR 尚未合并，短期内不适宜发版。

---

## 3. 项目进展

今日仅 2 条 PR 完成生命周期动作：

| PR | 状态 | 影响 | 链接 |
|---|---|---|---|
| **#10262** fix(rpc): close RPC connections on daemon reload and unstick zerocode quickstart | 已关闭（作者修复 + 双重 master 合并，CI run 34618807959 通过） | 修复守护进程重载时 RPC 连接未关闭导致 ZeroCode quickstart 卡死的回归 | [#10262](https://github.com/zeroclaw-labs/zeroclaw/pull/10262) |
| **#10676** fix(ci): compare publish exceptions as paths | 待合并，XS 级修复 | 让 publish-contract 例外源在 Windows 上以路径而非平台字符串比对，补 Windows 回归测试 | [#10676](https://github.com/zeroclaw-labs/zeroclaw/pull/10676) |

**整体方向：** ZeroClaw 在 9 月 12 日没有显著的"前进里程碑"，但 OIDC 全栈（OIDC 浏览器 PKCE、设备授权、Token 校验、网关鉴权、RPC 鉴权、principal 内存隔离、principal 会话隔离、principal 工具选择器、共享 grant 解析、canonical principal）形成了一个约 10 PR 的 stack，等候 base PR #10248 合并后逐级解栈。

---

## 4. 社区热点

按评论数排序的活跃议题：

| 排名 | Issue | 标题 | 评论数 | 链接 |
|---|---|---|---|---|
| 🥇 | #8692 | [Tracker] Maintainer decision queue for RFCs and design issues | 15 | [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) |
| 🥈 | #10549 | RFC: Simplify RFC voting by removing mandatory discussion windows | 9 | [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) |
| 🥉 | #5514（已关闭） | batch Telegram media groups into one multimodal turn | 8 | [#5514](https://github.com/zeroclaw-labs/zeroclaw/issues/5514) |
| 4 | #10734 | RpcDispatcher::process_line 在 2 MB 栈上 Windows 溢出 | 6 | [#10734](https://github.com/zeroclaw-labs/zeroclaw/issues/10734) |
| 5 | #8289 | [Tracker] OIDC milestone: canonical principals and inbound authentication | 3 | [#8289](https://github.com/zeroclaw-labs/zeroclaw/issues/8289) |

**诉求分析：**
- **#8692 + #10549** 显示社区对 **治理流程本身** 的优化需求强烈——维护者决策队列、RFC 投票窗口可缩短——表明项目进入"制度化"阶段。
- **#5514** 关闭说明 Telegram 多模态消息合并能力已被实现并验证（8 条评论多来自复现协助）。
- **#8289** 是 OIDC 路线的"母追踪器"，其下衍生 PR 是近一周最重的工程量来源。

---

## 5. Bug 与稳定性

按严重程度排列（结合 S 等级与 priority）：

| 严重度 | Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| **S1 · P1** | #10609（已关闭） | zerocode 忽略启动目录并强制 agent workspace 作为 cwd | 已关 | 修复随 PR 关闭 |
| **S2 · P1** | #10734 | Windows nextest 上 `RpcDispatcher::process_line` 栈溢出（距离 2 MB 警戒仅 2%） | OPEN，in-progress | 🔧 关联关闭的 #10753 |
| **S2 · P1** | #10115（已关闭） | tool-result 截断在模型上下文外不可见 | 已关 | ✅ |
| **S2 · P1** | #10788 | 失败的 Code/ACP turn 会丢弃已接受的 prompt 与完成的 tool exchange | OPEN | ❌ |
| **S2 · P1** | #10785 | zerocode 通知滞后误触发 session/cancel 取消所有运行 turn | OPEN | ❌ |
| **S2 · P1** | #10778 | 多模态图片上限驱逐重写早期历史消息并使缓存前缀失效 | OPEN | ❌（是 #10701 跟进） |
| **S2 · P1** | #10777 | thinking/effort 请求配置在 turn 间切换并重写整个缓存历史 | OPEN | ❌ |
| **S2 · P1** | #10782 | channel reply-intent 预检丢弃 LLM usage，分类器开销永不记账 | OPEN | ❌ |
| **S2 · P2** | #10736 | 预输出流失败时跳过公布的 non-streaming fallback | OPEN，in-progress | ❌ |
| **S2 · P2** | #10787 | 单候选流恢复忽略 provider_retries；529 过载无 backoff | OPEN | ❌ |
| **S2 · P1** | #10780 | 缺失主动 token-budget 上下文压缩（context_compression 已移除） | OPEN | ❌ |
| **S2 · P1** | #10731 | `zeroclaw service logs` 在 macOS/Windows/OpenRC 健康守护进程下无输出 | OPEN，in-progress | ❌ |
| **S3 · P2** | #10690（已关闭） | Integrations 页 "Configure" 链接用 display name slug 化 | 已关 | ✅ |
| **S3 · P2** | #10779 | OpenCode FreeUsageLimitError (429) 错误使用 sub-second backoff 重试 | OPEN | ❌ |

**关键观察：**
- **Anthropic 提供商缓存语义回归** 是今日最集中的稳定性议题（#10701 / #10777 / #10778 / #10786），涉及 thinking 块、cache 前缀、image cap。
- **Windows 栈空间** 是 CI 真实阻塞项（#10734 + #10753），需要持续监控 Advisory Windows job。
- **ZeroCode TUI 长会话性能**（#10785、#9092 已关闭）持续是用户感知最强的退化源。

---

## 6. 功能请求与路线图信号

| 信号 | Issue/PR | 状态 | 落地路径 |
|---|---|---|---|
| 缺失的 token-budget 上下文压缩 | #10780（enh, P1） | OPEN | 已与 #10781（清理 inert 配置键）联动，是 v0.9 主要呼声 |
| Docker 沙箱镜像可配置 | #10745（feat, size:S） | PR 待合并 | 文档误导（troubleshooting.md 提到 `[security.sandbox].image` 但无对应配置），实现风险低，预计下个补丁版可纳入 |
| 插件加载时 WIT ABI 校验 | #10746（feat, size:M） | PR 待合并 | 解决 ABI drift 的静默安装失败，安装链路可见化 |
| Hailo-Ollama 原生 provider | #9109（feat, size:XL，do-not-merge 标记） | PR 待合并 | 边缘模型支持，按 OIDC 主栈合并后再评估 |
| RFC 投票流程简化 | #10549（RFC, P2） | OPEN | 48h/72h 强制讨论窗将被取消、REVISE 行为变更 |
| OIDC 完整路线图 | #8289 + 10 个 PR | 部分待合并 | RFC #7141 落地的核心，下一版本最大看点 |

---

## 7. 用户反馈摘要

从评论与摘要中提炼的真实用户痛点：

1. **多模态缓存失效是当下最高频痛点**（#10701、#10777、#10778、#10786）：
   - 用户场景：在兼容 provider 上传图片后整段历史缓存命中失效 → 计费/延迟双上升。
   - 用户明确诉求：图片不应"污染"缓存前缀，Anthropic thinking 块在跨 turn 重写时也破坏缓存。

2. **ZeroCode 长会话体验下降**（#9092、#10785）：
   - 长会话下击键/滚动延迟、通知滞后误触发 cancel——直接影响 ACP 用户的核心交互面。

3. **配置项"幽灵"问题**（#10781）：
   - 用户在 `context_compression.*`、`keep_recent`、`collapse_tool_results` 等键上设置无任何效果——文档与实现不一致造成信任损耗。

4. **跨平台 service logs 行为不一致**（#10731）：
   - Linux journalctl 合并 stdout/stderr，但 macOS/Windows/OpenRC 只挑一个文件，运维排障受阻。

5. **Telegram 多模态轮次合并**（#5514，已关）：
   - 用户原本要发多张图触发多次模型调用，关闭说明该问题已被感知并修复，正向反馈。

---

## 8. 待处理积压

维护者需关注的高优先级长期未响应项：

| 项 | 类型 | 创建日 | 关注点 |
|---|---|---|---|
| [#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) Maintainer decision tracker | Issue, P2 | 2026-07-04 | 已 70 天未结案，评论 15，是治理流程关键枢纽 |
| [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) RFC: Simplify RFC voting | Issue, RFC | 2026-09-02 | RFC 文本待最终共识，建议维护者明确取舍 |
| [#10275](https://github.com/zeroclaw-labs/zeroclaw/pull/10275) refactor(security): retire Nevis/iam_policy | PR, XL, stacked | 2026-08-23 | 阻塞 #10321、#10274 等下游 stack，20 天未合 |
| [#10248](https://github.com/zeroclaw-labs/zeroclaw/pull/10248) feat(security): canonical principals | PR, XL, needs-author-action | 2026-08-22 | OIDC stack 的最底层 base，标记 needs-author-action |
| [#9635](https://github.com/zeroclaw-labs/zeroclaw/pull/9635) fix(config): resolve git subcommand past global options | PR, XL, needs-author-action | 2026-08-01 | 安全策略相关风险分类，已 42 天 |
| [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109) feat(providers): Hailo-Ollama | PR, XL, do-not-merge | 2026-07-17 | 标记 do-not-merge，需作者继续修订 |
| [#9967](https://github.com/zeroclaw-labs/zeroclaw/issues/9967) Tracker: harness evaluation framework | Issue, P2 | 2026-08-13 | 路标/评估体系尚未实质推进 |
| [#9047](https://github.com/zeroclaw-labs/zeroclaw/issues/9047)（已关闭）Code session 与 memory 隔离澄清 | Issue, P2 | 2026-07-14 | 虽关闭，文档更新需在下次发版前落地 |

**积压观察：** PR 待合并数为 Issue 关闭数的 4 倍以上（48 vs 11），OIDC stack 是最大瓶颈；维护者资源应优先评估 #10248 与 #10255 两条 base PR 的可合并性，否则整条 OIDC 路线将延后。

---

### 📌 健康度评估

| 维度 | 评分 | 说明 |
|---|---|---|
| 社区活跃度 | ⭐⭐⭐⭐ | Issue/PR 互动频密，治理类讨论上升 |
| PR 通过率 | ⭐⭐ | 仅 2 条 PR 走完生命周期，48 条积压 |
| Bug 响应速度 | ⭐⭐⭐ | 多数新 Bug 在 24h 内被分流到合适标签 |
| 安全演进 | ⭐⭐⭐⭐ | OIDC stack 设计完整、单元/集成测试齐备 |
| 用户体验风险 | ⭐⭐ | Anthropic 缓存语义、ZeroCode 长会话问题待集中修复 |

---

*日报生成时间：2026-09-12 · 数据范围：过去 24 小时 · 项目主页：https://github.com/zeroclaw-labs/zeroclaw*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*