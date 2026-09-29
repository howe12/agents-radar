# OpenClaw 生态日报 2026-09-29

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-09-29 03:41 UTC

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

# OpenClaw 项目日报 · 2026-09-29

---

## 1. 今日速览

OpenClaw 项目今日活跃度极高，过去 24 小时累计更新 **500 条 Issues**（活跃 425 / 已关闭 75）与 **500 条 PRs**（待合并 329 / 已合并或关闭 171），并发布了 **v2026.8.33 扩展稳定版**（即 LTS 等效分支）。社区关注高度集中在 **2026.9.5 → 2026.9.6 升级引发的一系列稳定性回归**：prepared-model-catalog worker 内存泄漏、Gateway 启动期崩溃循环、状态数据库生命周期与 macOS/Windows 更新路径异常等问题几乎包揽了今日 Top 10 高评论条目。整体看，项目处于**关键修复窗口期**：主线版本迭代节奏快，但 release-blocker 级别的 Bug 大量集中在刚发出的 2026.9.6 上，**长期健康度承压、短期响应量大**。

---

## 2. 版本发布

📦 **v2026.8.33（extended-stable / LTS-equivalent）**
- 仓库：openclaw/openclaw
- 定位：网关专属 LTS，仅包含 2026 年 8 月底快照 + 关键安全、可靠性、性能修复与新模型支持
- 与最新主线对照：当前最新版本为 **2026.9.6**；本版本不携带 9.x 系列的新功能
- **迁移注意**：从 2026.8.x 升级到 9.x 主线需关注 schema 17 → 18 迁移（见 #157160）；建议生产环境优先停留在 8.33 LTS，等待 2026.9.7 修复回炉
- **破坏性变更**：根据描述无主动破坏性变更，但仍需参考配套的安全公告与 #157531（2026.9.7 Fixes Tracker）核对风险

参考：
- [Release 公告](https://github.com/openclaw/openclaw) — v2026.8.33
- 修复追踪：[#157531](https://github.com/openclaw/openclaw/issues/157531)

---

## 3. 项目进展

过去 24 小时**已合并/关闭的代表性条目较少**，主线仍以修补为主，主要推进的实质性改动集中在以下方向：

| 方向 | 代表条目 | 状态 | 影响 |
|---|---|---|---|
| 模型目录 worker 重构 | [#159514](https://github.com/openclaw/openclaw/issues/159514) 已关闭 | 关闭 | 2026.9.6 上 catalog worker 每请求重建注册表导致 ESM 模块无法释放、堆增长 ~8MB/请求；说明修复路径已建立 |
| 持久化上下文引擎 | [#156425](https://github.com/openclaw/openclaw/issues/156425) 已关闭 | 关闭 | 修复 Anthropic 路由下 durable context-engine turn 不提交（cache-TTL marker 被当作 transcript 终点） |
| macOS npm 更新 | [#145072](https://github.com/openclaw/openclaw/issues/145072) 已关闭 | 关闭 | 修复 global install swap 在 macOS 上的 `Package rollback launcher backup changed` 失败（launcher fingerprint 含 symlink mode） |
| Control UI 模型来源标注 | [#122403](https://github.com/openclaw/openclaw/issues/122403) 已关闭 | 关闭 | 在模型选择器中标注 local / third-party 溯源 |
| 调度器去重（refactor） | [#160915](https://github.com/openclaw/openclaw/pull/160915) 已关闭 | 关闭 | scheduler owner lifetimes 去重，修复节点告警竞态 |

**今日推进评估**：从已关闭 Issue 类型看，今日主线推进主要是**清理历史回归与 refactor**，但新合入的面向 release-blocker 的修复 PR 暂未在 Top 30 内出现，**说明修复热度集中在 PR 队列前段（多为 P0/P1 待 maintainer review），尚未大规模合入主干**。下一版本（2026.9.7）的修复准备源（prepared PR）目前为 18/21 P1 candidates。

---

## 4. 社区热点（评论最多）

按 24 小时评论数排序：

1. **[#153257](https://github.com/openclaw/openclaw/issues/153257)** — 39 评论 · 🦐 Gold Shrimp · P0
   2026.9.5 把稳定环境变成 8 小时故障恢复，作者 abuegab1-spec 表达强烈后悔情绪
2. **[#149538](https://github.com/openclaw/openclaw/issues/149538)** — 22 评论 · 🦐 Gold Shrimp · P0
   632-agent 集群上 Gateway ready 后不响应、event loop 被饿死、RSS 持续上涨直至 OOM
3. **[#102175](https://github.com/openclaw/openclaw/issues/102175)** — 21 评论 · 🐚 Platinum Hermit · P2
   嵌入式 prompt cache 在 room-event / policy / Responses 边界丢失复用
4. **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — 16 评论 · 🦐 Gold Shrimp · P1
   hook/tool 子进程未收割导致僵尸累积与运行时降级
5. **[#40001](https://github.com/openclaw/openclaw/issues/40001)** — 16 评论 · 🦞 Diamond Lobster · P0
   `write` 工具无 append 模式，隔离 cron 会话覆盖共享文件引发**静默数据丢失**
6. **[#157531](https://github.com/openclaw/openclaw/issues/157531)** — 15 评论 · 🌊 Off-Meta Tidepool · P0
   **2026.9.7 Fixes Tracker**，是本周期最具结构性意义的跟踪 Issue
7. **[#98435](https://github.com/openclaw/openclaw/issues/98435)** — 15 评论 · 🦞 Diamond Lobster · P1
   MCP loopback 在 Gateway 重启后不自动重连，`recovered=1` 误导用户
8. **[#156571](https://github.com/openclaw/openclaw/issues/156571)** — 13 评论 · 🦪 Silver Shellfish · P0
   model-catalog worker 磁盘泄漏 1–3 GB/min（#155753 的磁盘面表现）
9. **[#127148](https://github.com/openclaw/openclaw/issues/127148)** — 12 评论 · 🦞 Diamond Lobster · P1
   Codex `sessions.compact` 抢占第二个 app-server 触发 active-writer 冲突
10. **[#121661](https://github.com/openclaw/openclaw/issues/121661)** — 12 评论 · 🦞 Diamond Lobster · P1
    CLI-backed handoff 子代理 announce-wake 模型**凭空伪造工具调用与输出**

**诉求分析**：今日热点集中在三类问题——**(a) 数据安全**（#40001 静默数据丢失）、**(b) 升级后稳定性**（#153257、#149538、#156571）、**(c) 子代理/会话状态一致性**（#98435、#121661、#127148）。社区情绪偏向"升级即踩坑"，对 **2026.9.7 修复追踪**（#157531）寄予厚望。

---

## 5. Bug 与稳定性

按严重程度排序，标注是否已有 fix PR：

### 🔴 P0 / UX-release-blocker

| Issue | 描述 | Fix PR |
|---|---|---|
| [#153257](https://github.com/openclaw/openclaw/issues/153257) | 2026.9.5 升级造成 8h 故障恢复 | ❌ 等待 maintainer review |
| [#149538](https://github.com/openclaw/openclaw/issues/149538) | Gateway ready 后 `/health` 全超时（632-agent fleet） | ❌ |
| [#40001](https://github.com/openclaw/openclaw/issues/40001) | `write` 无 append 模式 → 静默数据丢失 | ❌ |
| [#156571](https://github.com/openclaw/openclaw/issues/156571) | model-catalog worker 磁盘泄漏 1–3 GB/min | ❌ |
| [#157160](https://github.com/openclaw/openclaw/issues/157160) | Gateway 在 `plugin-doctor-post-session-state` 上 crash-loop（即便修了 busyTimeoutMs=0） | ❌ |
| [#155859](https://github.com/openclaw/openclaw/issues/155859) | 启动墙钟时间随启用插件数线性增长，超过 120s 发布预算 | ❌ |
| [#154114](https://github.com/openclaw/openclaw/issues/154114) | `openclaw update` candidate rehearsal 误报 "No usable...route" | ❌ |
| [#158095](https://github.com/openclaw/openclaw/issues/158095) | gateway worker acquireSqliteWorkerLifecycle 持有后无法再次获取 | ❌ |
| [#154924](https://github.com/openclaw/openclaw/issues/154924) | Update 失败：global-install-failed (2026.9.4) | ❌ |
| [#152965](https://github.com/openclaw/openclaw/issues/152965) | 热重载非 channel 插件会 dispose channel 插件，切断活跃流 | ❌ |
| [#156986](https://github.com/openclaw/openclaw/issues/156986) | `openclaw update` 在 update-candidate-state 阶段失控输出 233MB+ | ❌ |
| [#156917](https://github.com/openclaw/openclaw/issues/156917) | state-lifecycle 租约无心跳/强制接管，阻塞 Gateway 启动 31 分钟 | ❌ |
| [#156424](https://github.com/openclaw/openclaw/issues/156424) | 共享状态 audit_events 索引损坏致 Gateway 瘫痪 | ❌ |
| [#140161](https://github.com/openclaw/openclaw/issues/140161) | Windows scheduled-task 冷启动 5–7 分钟或静默退出 | ❌ |

### 🟠 P1 / 内存与性能回归

| Issue | 描述 | Fix PR |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏 → 僵尸累积 | ❌ |
| [#98435](https://github.com/openclaw/openclaw/issues/98435) | MCP loopback 不自动重连 | ❌ |
| [#159596](https://github.com/openclaw/openclaw/issues/159596) | 2026.9.6 Gateway 内存锯齿，约 200 次 critical 压力事件/天 | ❌ |
| [#159662](https://github.com/openclaw/openclaw/issues/159662) | model-catalog worker 泄漏 4–5 GB/h，provider-agnostic | ❌ |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | model-catalog worker 每 5 min 漏 ~1 GiB，reclamation 杀掉等待中的 turn | ❌ |
| [#158936](https://github.com/openclaw/openclaw/issues/158936) | macOS app readiness 看门狗误杀慢启动 gateway → 重启循环 | ❌ |
| [#158127](https://github.com/openclaw/openclaw/issues/158127) | 2026.9.6 多代理 Codex turn 间歇失败 | ❌ |
| [#150132](https://github.com/openclaw/openclaw/issues/150132) | `claude-cli` `--include-partial-messages` 在 8 MiB 硬上限下丢长回合最终回复 | ❌ |
| [#158421](https://github.com/openclaw/openclaw/issues/158421) | 默认模型 @profile 解析为显式 user pin，阻塞跨 provider 回退 | ❌ |
| [#158239](https://github.com/openclaw/openclaw/issues/158239) | Gateway 启动失败 "Session membership store changed before publication"（kernel <5.6） | ❌ |
| [#156864](https://github.com/openclaw/openclaw/issues/156864) | `tools.alsoAllow: ["browser"]` 不生效 | ❌ |
| [#154180](https://github.com/openclaw/openclaw/issues/154180) | Telegram polling 在 source-checkout 模式下找不到 ingress worker runtime | ❌ |

### 🟡 P2 / 行为与体验

| Issue | 描述 | Fix PR |
|---|---|---|
| [#102175](https://github.com/openclaw/openclaw/issues/102175) | 嵌入式 prompt cache 在多边界失效 | ❌ |
| [#121187](https://github.com/openclaw/openclaw/issues/121187) | yielded requester completion 误将 NO_REPLY 重试 | ✅ 关联 PR 开启 |
| [#137710](https://github.com/openclaw/openclaw/issues/137710) | Native Codex 完成未唤醒 sessions_yield 父 | ✅ 关联 PR 开启 |
| [#150635](https://github.com/openclaw/openclaw/issues/150635) | 短时 recall 容量满后 dreaming deep 永不晋升 | ❌ |
| [#120006](https://github.com/openclaw/openclaw/issues/120006) | CLI session reset (message-policy) 丢弃工具历史 | ❌ |
| [#154716](https://github.com/openclaw/openclaw/issues/154716) | Native Claude CLI auth 报 auth-unknown 阻塞历史 reseed | ❌ |
| [#141017](https://github.com/openclaw/openclaw/issues/141017) | dashboard-channel subagent 继承父工具权限必失败 | ❌ |
| [#120385](https://github.com/openclaw/openclaw/issues/120385) | Code Mode 工具目录对 cron/memory-flush turn 残缺 | ❌ |

**整体观察**：Top Bug **绝大多数没有对应的 fix PR**，且有大量 P0 被标记为 `clawsweeper:needs-maintainer-review`、`clawsweeper:needs-info`、`clawsweeper:manual-only` 与 `clawsweeper-recovery-stuck`，**修复管线明显积压**。

---

## 6. 功能请求与路线图信号

按需求热度与可纳入性判断：

| 需求 | Issue | 现有 PR | 进入下一版本的可能性 |
|---|---|---|---|
| 官方支持 Databricks Unity Gateway 模型提供方 | [#155633](https://github.com/openclaw/openclaw/issues/155633) | [#155634](https://github.com/openclaw/openclaw/pull/155634) | 🟢 高（实现 PR 已存在） |
| Cron 维护窗口 + 角色隔离 | [#120244](https://github.com/openclaw/openclaw/issues/120244) | 草案（跟随 #79192/#119575） | 🟡 中（设计阶段） |
| Onboarding Wizard 强制 Memory/Embedding 设置 | [#16670](https://github.com/openclaw/openclaw/issues/16670) | ❌ | 🟡 中（用户呼声高，9 评论 2 👍） |
| Agents API 接入 HTTP MCP 服务器 | — | [#160931](https://github.com/openclaw/openclaw/pull/160931) | 🟢 高（PR 今日开） |
| Conversational turn 可选省略工具 | [#155316](https://github.com/openclaw/openclaw/issues/155316) | [#153340](https://github.com/openclaw/openclaw/pull/153340) | 🟢

---

## 横向生态对比

# AI 智能体开源生态横向对比分析报告
**报告日期：2026-09-29 · 数据来源：12 个项目 GitHub 公开数据**

---

## 一、生态全景

个人 AI 助手/自主智能体开源生态正处在**"高活跃、强分化"的双轨并行期**：以 ZeroClaw、OpenClaw 为代表的旗舰项目已步入"日均 50 条 Issues/PRs"的大型协作规模，进入版本分层（LTS / 主线）与运行时插件化的架构升级通道；而 NanoBot、CoPaw、LobsterAI 等中型项目则在稳定性闭环与企业部署能力（B 端可观测性、自托管市场源、OIDC/RBAC）上集中发力。整体看，**Provider 矩阵扩张、跨通道可靠性、会话状态一致性与本地 CA/私有部署**是当前社区的四大共性主线；同时 PicoClaw 等项目因维护响应乏力而出现主动 Fork 分流，提示"社区对项目价值的认可"与"维护者侧的可持续性"之间的张力正在显性化。

---

## 二、各项目活跃度对比

| 项目 | Issues 24h | PRs 24h | 关闭/合并 | 新版本 | 健康度评估 | 关键特征 |
|---|---|---|---|---|---|---|
| **OpenClaw** | 500（活跃 425/关闭 75） | 500（待合 329/合并 171） | 171 | ✅ v2026.8.33 LTS | 🟡 修复窗口期承压 | P0 积压严重，9.6→9.7 关键修复 |
| **ZeroClaw** | 50 | 50 | 24 Issues + 11 PRs | ❌ | 🟢 大版本切换前夜 | v0.9.0 网关分层 + 运行时插件化主线 |
| **Hermes Agent** | 50（活跃 34/关闭 16） | 50（待合 46/合并 4） | 20 | ❌ | 🟡 32% 关闭率稳健 | Windows 桌面端债务清理期 |
| **LobsterAI** | 5 | 14（13 已合） | 13 | ❌ | 🟢 高效推进 | 文档编辑 + 网关加固 + Cowork 体验 |
| **NanoClaw** | 净减 3（关 3/开 1） | 31（合并 18/待合 13） | 21 | ❌ | 🟢 合并率高 | update 流程健壮性 + Iron/OpenCode 网关 |
| **NanoBot** | 7 | 23（合并 10） | 17 | ❌ | 🟢 P0 当日闭环 | 文件原子写、多通道、Provider 扩展 |
| **NullClaw** | 17（关闭 16） | 6（全合并） | 22 | ⚠️ v20260929 PR 待发 | 🟢 批量收尾型 | Provider 矩阵 + 钉钉/邮件通道 |
| **CoPaw** | 8 | 16（合并 3） | 6 | ❌ | 🟢 6 个首次贡献者 | 字体缩放体系 + QQ 事件去重 |
| **PicoClaw** | 17（含 1 Issue 关） | 5 | 0 | ❌ | 🔴 合并率 0% | x1F916 单日 5 PR 待审，Fork 分流 |
| **IronClaw** | 2 | 5（合并 1） | 1 | ❌ | 🟡 常规维护 | CLI 排错 + WebUI a11y 小步迭代 |
| **Moltis** | 0 | 1（待审） | 0 | ❌ | 🟡 轻活跃 | Tsubasa provider 待 Review |
| **ZeptoClaw** | 2 | 1（待审） | 0 | ❌ | 🟢 自提自答 | tool spill-to-disk 设计债修复 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | ⚪ 无活动 | — |

> 📊 **活跃度梯度**：高活跃（OpenClaw / ZeroClaw / Hermes Agent / NanoClaw）→ 中等活跃（LobsterAI / NanoBot / NullClaw / CoPaw）→ 维护期（IronClaw / Moltis / ZeptoClaw）→ 停滞（TinyClaw）。

---

## 三、OpenClaw 在生态中的定位

**OpenClaw 是当前生态的"参照基准"**，但处于异常承压的修复窗口：

| 维度 | OpenClaw | 与同类对比 |
|---|---|---|
| **社区规模** | 日均 500 Issues + 500 PRs，是 ZeroClaw 的 10×、NanoBot 的 17× | 单体规模无对标 |
| **版本策略** | LTS（v2026.8.33）+ 主线（v2026.9.6/9.7）双轨 | NullClaw 单线、ZeroClaw v0.9.0 大版本 |
| **风险面** | P0 级 Bug 14+ 个集中于 9.6 升级回归，无 fix PR | NanoBot / CoPaw P0 当日闭环 |
| **响应量** | 24h 处理量极大但 PR 待审队列 329 条积压 | NanoBot 仅 13 待合 |
| **架构方向** | 子代理、Context Engine、MCP、模型目录 worker | 与 ZeroClaw 接近但更碎片化 |

**OpenClaw 的独有优势**：(a) 真实生产规模验证（632-agent 集群场景）使其 Bug 报告具有强代表性；(b) 子代理 announce-wake、prepared-model-catalog、状态数据库生命周期等架构细节被多家项目（Hermes Agent / LobsterAI / NanoBot）参考借鉴。
**显著差距**：(a) 修复管线积压最严重（"clawsweeper:needs-maintainer-review" 大量堆积）；(b) 跨平台桌面端治理弱于 Hermes Agent、CoPaw；(c) 文档与新手体验弱于 NullClaw（README 直接导致"沉默失败"）。

---

## 四、共同关注的技术方向

以下 7 个方向在多家项目同步涌现：

| # | 技术方向 | 涉及项目 | 代表诉求 |
|---|---|---|---|
| 1 | **Provider / 模型注册矩阵扩展** | NullClaw（Eden AI）、Moltis（Tsubasa）、IronClaw（Tsubasa 命名化）、PicoClaw（OpenAI Compatible） | 减少安装摩擦；OpenAI 兼容端点标准化 |
| 2 | **IM 通道可靠性（去重 / 重连）** | NanoBot（飞书 #5903、#5956）、CoPaw（QQ #7946）、LobsterAI（飞书 #477、钉钉 #319/#376）、Hermes Agent（MCP loopback #98435） | 重连后事件重投导致重复执行、内部消息泄露 |
| 3 | **文件写入原子性 / 并发安全** | NanoBot（PR #5953 P0、#4798 长期未关）、ZeroClaw（#11136 并发 file_edit 静默丢失） | 多会话并发写损坏、崩溃窗口数据丢失 |
| 4 | **多模态/会话上下文毒性恢复** | CoPaw（#8009 大图毒化会话）、ZeroClaw（#10778 多模态驱逐致 prefix 失效）、OpenClaw（#102175 prompt cache 失效） | 失败 payload 未清理导致整段会话死亡 |
| 5 | **企业部署：OIDC/RBAC + 自托管市场源 + 本地 CA** | ZeroClaw（#5982/#8289/#10573/#9816）、NanoClaw（#3950 本地 CA）、CoPaw（#8015 自托管市场源）、LobsterAI（#2776 文档全流程） | SaaS 化部署刚需、内网/离线场景合规 |
| 6 | **桌面端 UI 可调与 a11y** | CoPaw（#8005 字体缩放体系 #7999/#6252）、Hermes Agent（#127287/#119895 Windows 桌面）、IronClaw（#8117 命令面板焦点恢复 #8118） | 字体可调、键盘焦点管理、可访问性 |
| 7 | **工具输出长任务处理（spill / 实时性）** | ZeptoClaw（PR #708 spill-to-disk）、NanoBot（#5924 sudo 死循环、#5957 会话硬超时）、CoPaw（#8013 技能池 30s 超时） | 超大输出"截断即蒸发"、长任务可恢复传输 |

---

## 五、差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈 Agent Gateway、子代理生态 | （1）大型生产 + 集成开发者 | 插件医生、prepared-model-catalog、context engine、scheduler owner lifetime |
| **ZeroClaw** | 网关分层 + 运行时插件化 + OIDC/RBAC | SaaS 平台搭建者 | v0.9.0 网关分层、运行时插件（manifest `provides`）、release efficiency tracker |
| **Hermes Agent** | Windows 桌面端 + 跨端会话 | 桌面端重度用户 | 远程后端 + 本地 Desktop 架构、Windows arm64 适配 |
| **LobsterAI** | 协作模式（cowork）+ 办公文档编辑 | 团队协作用户 | OpenClaw 网关 + 文档全流程（PPT/Word/Excel）、Cowork 进度卡片 |
| **NanoClaw** | 更新/回滚/卸载健壮性 + 容器管理 | 自部署运维者 | Iron Proxy / OpenCode 网关适配、cutover 探针、容器 role 抽象 |
| **NanoBot** | 多通道集成 + 文件/会话可靠性 | 中小团队 + 个人开发者 | 原子文件写、Provider 三线并行（Claude on Vertex / Unbrowse / GPT-6） |
| **NullClaw** | Provider 矩阵 + 多通道稳定性 | 全平台自部署用户 | Eden AI、自适应智能管道（回合评分）、工具触发词调度 |
| **CoPaw** | 企业部署 + 桌面端 UI 体验 | 企业 + 桌面端用户 | Tauri 桌面端、Ant Design Modal、统一字体 token 体系 |
| **PicoClaw** | 轻量化 + 可靠性修补 | 嵌入式 / 边缘场景 | Asset 匹配 32-bit ARM、channel nil-safety |
| **IronClaw** | CLI/WebUI 体验打磨 | 命令行 + Web UI 用户 | `runtime::effective_profile` 配置档案、命令面板焦点管理 |
| **Moltis** | 多 Provider 轻量接入 | 偏好"开箱即配"用户 | 接入抽象成熟（环境变量 + URL + 模型列表 4 件套） |
| **ZeptoClaw** | 长任务输出可靠性 | shell/grep/find 重度用户 | tool spill-to-disk 设计、0700/0600 权限目录 |
| **TinyClaw** | — | — | 当前无活动 |

**架构分化主线**：(1) **网关/无头服务化**（OpenClaw / ZeroClaw / NanoClaw / LobsterAI）vs **桌面端原生**（Hermes Agent / CoPaw）vs **命令行优先**（IronClaw / ZeptoClaw）；(2) **单体架构** vs **运行时插件化**（ZeroClaw 是后者代表）；(3) **轻量级**（PicoClaw / ZeptoClaw / Moltis）vs **全功能**（OpenClaw / ZeroClaw）。

---

## 六、社区热度与成熟度

### 📈 快速迭代阶段（活跃度 ★★★★）
**OpenClaw / ZeroClaw / Hermes Agent** —— 单日 50+ Issues/PRs 流转，处于大型协作规模。OpenClaw 处于 release-blocker 修复窗口，ZeroClaw 处于 v0.9.0 集成瓶颈期，Hermes Agent 处于 Windows 桌面债务清理期。三者共同特征：S0/P0 级 Issue 大量集中但修复管线承压，PR 待审队列长。

### 🔧 质量巩固阶段（活跃度 ★★★）
**NanoClaw / LobsterAI / NanoBot / NullClaw / CoPaw** —— 24h 关闭率高于新开率，PR 合并节奏稳健（NanoClaw 18/31、LobsterAI 13/14、NullClaw 22/23）。这些项目已度过"功能扩展爆发期"，进入"逐项闭环 + 文档同步"的稳健期。

### 🛠️ 维护期（活跃度 ★★）
**IronClaw / Moltis / ZeptoClaw** —— 日均 1–5 条 PR 流转，新人贡献者持续加入（IronClaw 的 `changeroa`、ZeptoClaw 的 abda11ah 咨询），但合并速度慢导致 momentum 流失风险。

### ⚠️ 风险信号
- **PicoClaw**：日合并 PR=0，外部贡献者自发批量提交可靠性修复（x1F916 单日 5 PR），社区已出现主动 Fork 公告（#3398），**维护响应已成为生态最显性的张力点**。
- **TinyClaw**：24h 零活动，需关注是否进入长期停滞。
- **OpenClaw**：329 条待合并 PR 中含大量 release-blocker，提示需要外部维护者支援。

---

## 七、值得关注的趋势信号

### 🎯 趋势 1：从"功能扩展"到"可靠性闭环"的范式转移
NanoBot PR #5953（文件原子写）、ZeroClaw #11136（并发写入丢失）、OpenClaw #40001（`write` 无 append 导致静默数据丢失）三家项目同日报同主题，提示**"原子性 / 并发安全 / 数据保真"成为 2026 下半年生态共识级刚需**。对开发者的启示：在自研 Agent 框架时，文件工具应默认 temp-file + rename 原子化、会话写入应有 sequence/owner 标识、跨 session 必须有锁或版本。

### 🎯 趋势 2：OIDC/RBAC/自托管 = 企业部署"三件套"
ZeroClaw（#5982/#8289/#10573）、CoPaw（#8015）、NanoClaw（#3950 本地 CA）共同指向**"AI Agent SaaS 化"路径**：身份认证、权限隔离、私有网络/凭据支持缺一不可。对 B 端 AI 工程师的启示：早期架构设计应将 sender/topic/agent 三层 RBAC 与 OIDC 入站认证预留为插件化抽象。

### 🎯 趋势 3：Provider 接入从"写代码"到"配置项"
NullClaw（Eden AI）、Moltis（#1288 Tsubasa 4 件套接入）、IronClaw（#8115 Tsubasa 32K 命名注册项）共同显示：**新的 provider 接入标准正在收敛为"环境变量 + 默认 URL + 模型列表 + 文档"四项内容**。这意味着模型托管服务进入"接口已稳定、生态已分层"的成熟期。

### 🎯 趋势 4：桌面端 UX 成为差异化竞争点
CoPaw（字体缩放体系 #8005）、Hermes Agent（Windows 桌面崩溃闭环 #98794/#119895/#73149）、IronClaw（命令面板焦点恢复 #8117）三线并进，提示**桌面端 Agent 不再是 CLI 的"附属"，而是新一轮 UX 竞争的入口**。对桌面 AI 产品经理的启示：a11y、字体、键盘焦点、可访问性正在从"加分项"变成"合格项"。

### 🎯 趋势 5：会话状态一致性是"跨平台 Agent"的硬骨头
Hermes Agent（#51058 跨端会话路由错乱、#123801 macOS 重复渲染）、OpenClaw（#98435 MCP 不重连、#121661 announce-wake 伪造输出）、CoPaw（#8009 大图毒化会话）共同反映：**当 agent 跨 CLI / TUI / Desktop / IM 多端时，会话路由、上下文清理、事件重连的一致性问题被指数放大**。对架构师的启示：必须建立"session id + sequence + owner + payload validity"的

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-09-29

## 1. 今日速览

NanoBot 项目今日保持高活跃度，24 小时内共产生 **30 条更新（7 个 Issue + 23 个 PR）**，PR 关闭/合并比例约 **43%（10/23）**，整体节奏接近正常工作日峰值。无新版本发布。

- **稳定性议题集中爆发**：文件写入原子性（PR #5953 P0）、会话硬超时（PR #5957）、并发文件写（Issue #4798 持续挂起）共同指向"文件与会话可靠性"这一核心痛点。
- **多通道集成持续完善**：飞书会话检查点泄露（Issue #5903/#5956）、Telegram 主题重命名（PR #5902）、WebUI 流式渲染（Issue #5908）密集进入视野。
- **Provider 生态扩展**：Claude on Vertex AI（PR #5955）、Unbrowse 抓取后端（PR #5945）、GPT-6 Copilot 兼容性（Issue #5898）三线并行。

> 📊 健康度评估：**活跃且有序**。P0 修复当日即开 PR，关闭率高；但 1 个 3 个月前的并发写 Bug（#4798）仍未关闭，长期积压需关注。

---

## 2. 版本发布

今日无新版本发布。

---

## 3. 项目进展（已合并/关闭的重要 PR）

今日关闭/合并 10 条 PR，按影响力排序：

| # | PR | 类别 | 影响 |
|---|------|------|------|
| [#5861](https://github.com/HKUDS/nanobot/pull/5861) | `fix(tokens): warm fallback tokenizer in background` | **P1 修复** | 网关启动时在后台守护线程预热 tokenizer，CLI/SDK 延迟加载；解决 Issue #5843 反映的"BUILD 阶段 10s 延迟"现象 |
| [#5958](https://github.com/HKUDS/nanobot/pull/5958) | `fix(tui): keep unknown terminal themes readable` | TUI 修复 | 终端不响应 OSC 10/11 时回退到默认前景/背景色，浅色终端下普通文本不再近乎不可见 |
| [#5952](https://github.com/HKUDS/nanobot/pull/5952) | `fix(webui): restore Codex title generation and diagnose API failures` | WebUI + Provider | WebUI 标题生成改用模型默认 reasoning，绕开 GPT-6 Astra 对 `reasoning.effort="none"` 的 400 拒绝 |
| [#5949](https://github.com/HKUDS/nanobot/pull/5949) | `fix(web): propagate web_fetch failures as structured tool errors` | Web 工具 | `web_fetch` 失败不再伪装成功，遵循 harness 错误生命周期 |
| [#5951](https://github.com/HKUDS/nanobot/pull/5951) | `docs: refresh contributors and preserve historical credits` | 文档 | README 贡献者墙从 365 → 392 个账户，保留历史信用 |
| [#1502](https://github.com/HKUDS/nanobot/pull/1502) | `feat(mcp): add support for enabling and disabling tools in MCP server configuration` | MCP | MCP 服务器新增 `enabled_tools`/`disabled_tools`，工具管理更灵活 |
| [#1443](https://github.com/HKUDS/nanobot/pull/1443) | `feat: decouple heartbeat reasoning from notification` | 心跳 | Heartbeat agent 默认静默推理，仅显式 `message` 调用触达用户；新增 `sendReasoning` 开关 |
| [#1355](https://github.com/HKUDS/nanobot/pull/1355) | `fix: image preservation` | 对话历史 | 修复 bot 在多轮消息中重复提及历史图片的问题 |

**今日推进要点**：
- 🔧 **核心稳定性闭环**：`#5861` 与 Issue `#5843` 配对关闭，Tokenizer 预热链路打通。
- 🎨 **多端一致性**：`#5958` + `#5952` 改善了 TUI 与 WebUI 的可见性/可用性。
- 🔌 **协议增强**：`#1502` 让 MCP 工具注册支持白/黑名单制，配置粒度提升。

---

## 4. 社区热点

### 🔥 讨论最活跃的 Issues

1. **[#5924 Agent gets stuck in sudo loop](https://github.com/HKUDS/nanobot/issues/5924)** · 5 条评论 · P1  
   *诉求*：sudo 授权仅维持 1 个 turn，agent 在循环重试授权；达到最大迭代次数后，agent 仍执着于失败命令，影响可用性。需要：① sudo 会话延长策略；② 失败命令的"放下"机制。

2. **[#5903 Feishu 隐藏会话检查点消息泄露给用户](https://github.com/HKUDS/nanobot/issues/5903)** · 4 条评论  
   *诉求*：飞书通道的 session-checkpoint 内部标记（`Continue the active task from the working-memory checkpoint above.`）在 idle 自动压缩后被当作普通消息发送给用户。需要确保 `_hidde...` 标志的消息严格不出频道。

4. **[#5908 WebUI 显示实时 tokens/sec](https://github.com/HKUDS/nanobot/issues/5908)** · 4 条评论 · P2  
   *诉求*：流式输出期间无速率可见性，希望新增 live tokens/sec 指标以快速区分"正常推理 vs. 停滞"。

### 💬 高关注 PR

- **[#5945 feat(web-fetch): add optional Unbrowse reader backend](https://github.com/HKUDS/nanobot/pull/5945)** — 提供 Unbrowse 作为 web_fetch 可选后端，无 Key 时回退 Jina Reader 与本地 readability。
- **[#5902 feat(tg): rename topic to generated session title](https://github.com/HKUDS/nanobot/pull/5902)** — WebUI / Telegram 会话标题自动生成并用于重命名论坛主题。
- **[#5953 fix(tools): atomic writes for file tools](https://github.com/HKUDS/nanobot/pull/5953)** · P0 — 文件工具改为原子写入，避免并发读"撕裂"和崩溃窗口丢失。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | Issue / PR | 描述 | 是否已有 fix PR |
|--------|----------|------|---------|
| 🟥 P0 | [PR #5953](https://github.com/HKUDS/nanobot/pull/5953) | 文件写入非原子：并发读者可见撕裂内容、崩溃窗口数据丢失 | ✅ 自带 fix |
| 🟧 P1 | [Issue #5924](https://github.com/HKUDS/nanobot/issues/5924) | sudo 授权窗口过窄导致 agent 死循环；最大迭代后仍执着于失败命令 | ❌ 暂无 fix |
| 🟨 中 | [Issue #4798](https://github.com/HKUDS/nanobot/issues/4798) | 多会话并发文件写未串行化，工作区文件损坏 | ❌ 无 fix，**3 个月未响应** |
| 🟨 中 | [Issue #5903](https://github.com/HKUDS/nanobot/issues/5903) | 飞书通道在 idle 压缩后向用户泄露内部检查点消息 | ❌ 暂无 fix |
| 🟨 中 | [Issue #5898](https://github.com/HKUDS/nanobot/issues/5898) | v0.3.5 通过 GitHub Copilot 调用 OpenAI 6 系列失败 | ⚠️ Issue #5898 提及 GPT-6，但相关 fix（#5952 改默认 reasoning）已关闭 |
| 🟨 中 | [Issue #5956](https://github.com/HKUDS/nanobot/issues/5956) | 飞书无 in-place edit 能力，compaction 通知应可关闭（与 #5784 同类） | ❌ 暂无 fix |
| 🟢 已关 | [Issue #5843](https://github.com/HKUDS/nanobot/issues/5843) | 长会话 BUILD 阶段延迟 10s+ | ✅ 已由 PR #5861 解决并关闭 |

---

## 6. 功能请求与路线图信号

| 需求 | 信号来源 | 进入下一版本的概率 |
|------|----------|-------------------|
| **文件原子写** | [Issue #4798](https://github.com/HKUDS/nanobot/issues/4798) + [PR #5953](https://github.com/HKUDS/nanobot/pull/5953) | 🟢 **极高**（P0 + 已有 PR） |
| **WebUI 实时 tokens/sec** | [Issue #5908](https://github.com/HKUDS/nanobot/issues/5908) | 🟡 中（已明确设计建议） |
| **Claude on Vertex AI** | [PR #5955](https://github.com/HKUDS/nanobot/pull/5955) | 🟢 高（PR 已开，Provider 路线明确） |
| **Unbrowse 抓取后端** | [PR #5945](https://github.com/HKUDS/nanobot/pull/5945) | 🟡 中（可选后端，无破坏性） |
| **心跳用更便宜模型** | [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) | 🟡 中（开源 PR 已存在 3 个月） |
| **MiniMax 音乐生成指引** | [PR #5212](https://github.com/HKUDS/nanobot/pull/5212) | 🟡 中 |
| **exec 会话硬超时无轮询** | [PR #5957](https://github.com/HKUDS/nanobot/pull/5957) | 🟢 高（可靠性刚需） |
| **subagent 并发结果聚合通知** | [PR #5954](https://github.com/HKUDS/nanobot/pull/5954) | 🟡 中 |
| **Telegram 主题自动重命名** | [PR #5902](https://github.com/HKUDS/nanobot/pull/5902) | 🟡 中 |
| **MCP 工具白/黑名单** | [PR #1502](https://github.com/HKUDS/nanobot/pull/1502) ✅ 已合并 | 🟢 已落地 |

---

## 7. 用户反馈摘要

- **🔴 高频痛点：sudo 与授权窗口**（Issue #5924, 5 评论）  
  用户反映："Sudo 只持续一个回合，agent 卡在循环中。即使后续继续对话，agent 仍执着于那条没成功的命令。" — 需要"授权缓存"或"放弃失败任务"的明确策略。

- **🔴 可靠性担忧：工作区文件损坏**（Issue #4798）  
  报告者指出文件工具无任何文件级锁，两个并发 session 同时写会出现交错的脏内容。

- **🟡 跨通道体验不一致**（Issue #5903、#5956）  
  飞书用户对内部消息泄露和 compaction 通知噪音敏感，与 #5784 类似问题反复出现，提示内部通知与用户可见消息的边界需要文档化。

- **🟡 模型选型不透明**（Issue #5908）  
  WebUI 用户无法判断模型是否"卡住"还是"思考中"，希望 live tokens/sec 来提升等待体验。

- **🟢 已有改善的体感**  
  Issue #5843（构建阶段 10s 延迟）今日由 PR #5861 解决并关闭，表明后台预热策略正在缓解长会话首字延迟。

---

## 8. 待处理积压提醒

以下 Issue/PR 长期未响应，建议维护者优先关注：

| # | 类型 | 创建日期 | 等待时长 | 风险 |
|---|------|---------|---------|------|
| [Issue #4798](https://github.com/HKUDS/nanobot/issues/4798) | Bug：并发文件写损坏 | 2026-07-06 | **~85 天** | 与 PR #5953 议题重叠，需评估合并一致性 |
| [PR #4549](https://github.com/HKUDS/nanobot/pull/4549) | feat(heartbeat): model_override | 2026-06-26 | **~95 天** | 成本敏感场景，受关注 |
| [PR #5212](https://github.com/HKUDS/nanobot/pull/5212) | feat: MiniMax music guidance | 2026-08-02 | ~58 天 | 多媒体能力扩展 |
| [PR #5302](https://github.com/HKUDS/nanobot/pull/5302) | Fix: Dream consolidation tool mismatch | 2026-08-09 | ~51 天 | 涉及 memory consolidation 正确性 |
| [PR #5539](https://github.com/HKUDS/nanobot/pull/5539) | fix(tools): ToolLoader log context | 2026-08-25 | ~35 天 | 日志可观测性 |

> 💡 **维护者建议**：Issue #4798 与 PR #5953 在主题上高度一致，建议合并讨论或互相引用，避免重复工作。Heartbeat model_override（#4549）等待近 3 个月，可考虑合入或关闭归档以明确路线。

---

*报告生成时间：2026-09-29 · 数据来源：HKUDS/nanobot GitHub 公开数据*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**报告日期**: 2026-09-29
**项目**: [NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)

---

## 1. 今日速览

Hermes Agent 今日保持高度活跃的开发节奏，过去 24 小时内共处理 **50 条 Issue 更新**（34 条活跃、16 条关闭）和 **50 条 PR 更新**（46 条待合并、4 条已合并/关闭），但**未发布新版本**。当前主线工作明显集中于**会话状态一致性、Windows 桌面端稳定性以及插件/CLI 子系统的健壮性**——三大长期被诟病的风险面（`sweeper:risk-session-state`、`sweeper:risk-platform-windows`、`sweeper:risk-compatibility`）今日同时有多个 P0/P1 级别 Issue 与对应修复 PR 在流转。社区讨论度持续旺盛，最热的 Feature Request #4335 已累计 20 条评论，凸显用户对**跨平台会话上下文共享**的强烈需求。项目整体处于"密集修 bug、稳步推进功能"的阶段，issue 关闭率（32%）与 PR 处理节奏均处于健康水平。

---

## 2. 版本发布

**今日无新版本发布。**

版本号仍维持在最近一次的 v0.21.5（参考 #123801、#126524 中的 footer 标识）。鉴于今日有大量 P0/P1 修复已进入 PR 流程，建议关注维护者是否会在本周内集中发版。

---

## 3. 项目进展

今日**已关闭/合并的 4 条 PR** 显示项目在稳定性维度取得实质推进：

| PR | 描述 | 影响 |
|---|---|---|
| [#98794](https://github.com/NousResearch/hermes-agent/pull/98794) | **fix(desktop): staged skill write review** —— 桌面端现在可审查 staged skill 写入，避免静默堆积审批队列 | 桌面端 UX 与权限治理改进 |
| [#119895](https://github.com/NousResearch/hermes-agent/issues/119895) (Issue 已关闭) | Desktop Preview tabs 关闭后重启丢失 | 已修复并验证 |
| [#96403](https://github.com/NousResearch/hermes-agent/issues/96403) (Issue 已关闭) | Desktop 截图文件名使用 UTC 而非本地时区 | 小但精确的修复 |
| [#73149](https://github.com/NousResearch/hermes-agent/issues/73149) (Issue 已关闭) | 自 2026-07-27 起每次启动都显示"Background gateway didn't come up"覆盖层 | 已修复 Windows 启动回归 |

**整体评估**：今日的合并量不大（4 条），但 PR 池中已有 **46 条待合并**，其中至少 5–6 条针对 P0/P1 严重问题（session state、Windows 崩溃、tool 执行安全）——意味着下一波发版可能集中修复一批"老问题"。这是典型的"在主干上做了一次集中清理"节奏。

---

## 4. 社区热点

### 🔥 最热 Issue（按评论数）

1. **[#4335](https://github.com/NousResearch/hermes-agent/issues/4335)** — Feature Request: Cross-platform session context sharing (CLI ↔ Telegram)
   - **20 评论，6 个 👍**，标签：`needs-decision`、`P2`
   - 用户诉求：CLI、Telegram、Discord 等多平台的会话存储相互隔离，希望 agent 能在所有平台上共享上下文。当前需要 `needs-decision` 标记，意味着架构决策尚未敲定（是否需要共享存储层？隐私边界如何？）。

2. **[#123801](https://github.com/NousResearch/hermes-agent/issues/123801)** — macOS Desktop duplicate assistant reply (16 评论)
   - 已定位到 gateway 仅存一行但前端渲染两次，与 #126524 可能是同源问题。

3. **[#123926](https://github.com/NousResearch/hermes-agent/issues/123926)** — Plugins silently dropped at boot (10 评论)
   - 根因明确：`_evict_modules` 在迭代 `sys.modules` 时修改字典大小。**该 bug 无可见报错**，仅在 `logs/errors.log` 中有警告——属于典型的"沉默失败"类型 bug，对插件生态健康发展不利。

5. **[#51058](https://github.com/NousResearch/hermes-agent/issues/51058)** — TUI/Desktop session mix-up after compression / reconnect (8 评论)
   - 上下文压缩或重连后会话路由错乱，**"聊天混合"**——用户发送到会话 A 的消息进了会话 B。涉及 session state 安全面。

### 🔥 热门 PR

- **[#119863](https://github.com/NousResearch/hermes-agent/pull/119863)** — `feat(plugins): support native browser-login backends`
  - 引入 `PluginContext.register_login_backend()`，让第三方密码管理器复用 browser autofill 工具，标签为 `needs-decision`、`sweeper:risk-security-boundary`——这是**安全敏感的功能扩展**，需维护者决策集成边界。
- **[#127287](https://github.com/NousResearch/hermes-agent/pull/127287)** — `fix(desktop): keep configured provider across force reload`（fixes [#123339](https://github.com/NousResearch/hermes-agent/issues/123339)）
  - 由原作者 @finn763 的 fork 因落后 main 太多导致 rebase 失败，现由 @OutThisLife 接手 rebase——体现良好的社区接力。

**整体社区诉求**：用户普遍希望"**少一点沉默失败、多一点跨平台一致性、session 状态更可靠**"。Windows 平台是投诉重灾区。

---

## 5. Bug 与稳定性

按严重程度排列今日关注的 Bug：

### 🔴 P0（严重，影响主流程可用性）

| Issue | 描述 | 是否有对应 PR |
|---|---|---|
| [#127283](https://github.com/NousResearch/hermes-agent/issues/127283) | Windows Desktop 静默崩溃循环（~60–80s 后窗口消失，无任何日志） | **#127325** 修复 source-completion-pending 标记 TTL 问题，疑似相关但未直接覆盖 |
| [#127260](https://github.com/NousResearch/hermes-agent/issues/127260) | Tool-call 参数（terminal/write_file/execute_code）在 context compression 时被截断/插入随机 token，Windows git-bash 上还存在 BOM 不稳定 | 暂无对应 PR |

### 🟠 P1（高，影响核心体验）

| Issue | 描述 | 是否有对应 PR |
|---|---|---|
| [#123801](https://github.com/NousResearch/hermes-agent/issues/123801) | macOS Desktop 渲染重复 assistant 回复（DB 中只有一行） | 暂无 |
| [#126591](https://github.com/NousResearch/hermes-agent/issues/126591) | 远程后端安装 catalog 插件时，Desktop 端代码拉取到 HEAD（忽略版本固定） | 暂无 |
| [#123926](https://github.com/NousResearch/hermes-agent/issues/123926) | 启动时插件静默丢弃（`dict changed size during iteration`） | 暂无 |
| [#83918](https://github.com/NousResearch/hermes-agent/issues/83918) | Desktop 启动时所有 runtime 插件 SyntaxError（`completion-sound-CVNTpiO1.js:3`） | 暂无 |

### 🟡 P2（中等，影响特定场景）

| Issue | 描述 | 是否有对应 PR |
|---|---|---|
| [#126524](https://github.com/NousResearch/hermes-agent/issues/126524) | Desktop 客户端全新启动后 assistant 回复渲染两次（与 #123801 可能同源） | 暂无 |
| [#127284](https://github.com/NousResearch/hermes-agent/issues/127284) | `source-completion-pending` 无 TTL 无自愈，每次启动都重新进入 | **[#127325](https://github.com/NousResearch/hermes-agent/pull/127325)** 直接修复 |
| [#125922](https://github.com/NousResearch/hermes-agent/issues/125922) | `hermes update` 失败（Python 依赖安装阶段） | 暂无 |
| [#82943](https://github.com/NousResearch/hermes-agent/issues/82943) | hindsight 插件 `config_changed` 永久为 true，每次 session 启动 daemon 被 SIGTERM | 暂无 |
| [#119018](https://github.com/NousResearch/hermes-agent/issues/119018) | Windows 终端命令含 `> /dev/tcp/<host>/<port>` 重定向会杀死 backend（exit 1073741845），desktop 陷入 crash loop | 暂无 |
| [#77051](https://github.com/NousResearch/hermes-agent/issues/77051) | agent-browser spawn fails with EFTYPE on Windows arm64（已关闭） | 已关闭 |
| [#53352](https://github.com/NousResearch/hermes-agent/issues/53352) | Windows Desktop renderer crash 引导循环（build 还会覆盖源码） | 暂无 |
| [#51058](https://github.com/NousResearch/hermes-agent/issues/51058) | TUI/Desktop session mix-up after context compression | 暂无 |

### 🟢 P3（低，边缘场景）

- [#121692](https://github.com/NousResearch/hermes-agent/issues/121692) Windows Hindsight local_embedded daemon 无法 import pywintypes
- [#125683](https://github.com/NousResearch/hermes-agent/issues/125683) `plugins.manage` 在 `tree:0` partial clone 上阻塞 40–80s
- [#82203](https://github.com/NousResearch/hermes-agent/issues/82203) Windows Hub Mode 工具栏在 100% 缩放下垂直裁剪
- [#101853](https://github.com/NousResearch/hermes-agent/issues/101853) Desktop 输入框光标自动失焦
- [#125413](https://github.com/NousResearch/hermes-agent/issues/125413) 辅助模型选择器缺少 goal_judge / background_review / monitor / MoA 槽位
- [#123339](https://github.com/NousResearch/hermes-agent/issues/123339) Desktop Force Reload 在远程后端下显示 provider 选择器并丢失会话 → **PR #127287 已修复**

**稳定性观察**：今日关闭的 Issue 中 Windows/Desktop 相关占据主导（[#119895](https://github.com/NousResearch/hermes-agent/issues/119895)、[#73149](https://github.com/NousResearch/hermes-agent/issues/73149)、[#70371](https://github.com/NousResearch/hermes-agent/issues/70371)、[#66095](https://github.com/NousResearch/hermes-agent/issues/66095)、[#123111](https://github.com/NousResearch/hermes-agent/issues/123111)），说明维护团队正在**集中清理 Windows 桌面端的长期债务**——这是一个值得肯定的方向。但仍有 **2 个 P0 + 6 个 P1/P2 关键问题没有对应修复 PR**，积压风险上升。

---

## 6. 功能请求与路线图信号

### 🎯 高价值 Feature Request

| Issue | 内容 | 已有 PR? | 评估 |
|---|---|---|---|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | **跨平台会话上下文共享** | 否 | 20 评论 + 6 👍，明确打 `needs-decision`，是潜在的重大架构演进。下一版本可能性中等，需架构级讨论 |
| [#65308](https://github.com/NousResearch/hermes-agent/issues/65308) | CLI 支持 Ctrl+End / Ctrl+Home 跳转对话顶部/底部 | 否 | 小功能、实现成本低，**短期内合入可能性高** |
| [#120584](https://github.com/NousResearch/hermes-agent/issues/120584) | TUI 屏幕阅读器模式（NVDA 友好） | 否 | 无障碍可访问性改进，社区驱动 PR 出现概率高 |

### 🛠️ PR 中已实现但待合并的功能

- **[#119863](https://github.com/NousResearch/hermes-agent/pull/119863)** native browser-login backends（plugin 系统扩展）——若合并将显著扩展插件生态。
- **[#118328](https://github.com/NousResearch/hermes-agent/pull/118328)** Anthropic manual thinking path 完整支持全部 7 个 reasoning effort。
- **[#112553](https://github.com/NousResearch/hermes-agent/pull/112553)** / **[#112555](https://github.com/NousResearch/hermes-agent/pull/112555)** 文档补全：`hermes update` 6 个未文档化 flag + `hermes sessions` 5 个未文档化子命令。

**路线图信号**：从标签分布看，维护者近期重点是 **gate 修复 session/state 一致性问题** 和 **Windows 兼容性**，大型新功能（如跨平台会话共享）可能要到架构评审完成后才会纳入计划。

---

## 7. 用户反馈摘要

从 Issue 评论和描述中收集的真实痛点：

### 😤 痛点 1：Windows 桌面端的"反复无常"
> "Hermes Desktop enters a **silent crash loop**… no exit or crash log anywhere. The user can only reopen it, which repeats the cycle indefinitely." — [#127283](https://github.com/NousResearch/hermes-agent/issues/127283)

> "Every Hermes Desktop launch on Windows shows the BootFailureOverlay… and forces the user to click Retry 1-4 times." — [#73149](https://github.com/NousResearch/hermes-agent/issues/73149)（已修复）

Windows 用户反映 Hermes Desktop 的崩溃/启动失败问题尤其严重，部分问题甚至**没有任何日志**——挫败感明显。

### 😤 痛点 2：插件加载的"沉默失败"
> "On boot, a different, random subset of plugins silently fails to load… only one WARNING per plugin in logs/errors.log" — [#123926](https://github.com/NousResearch/hermes-agent/issues/123926)

`dict changed size during iteration` 导致插件随机加载失败，但用户没有任何提示——对插件生态是巨大隐患。

### 😤 痛点 3：会话状态在不同端表现不一致
> "a message intended for one chat can be routed into a different existing session after context compression" — [#51058](https://github.com/NousResearch/hermes-agent/issues/51058)

CLI/TUI/Desktop/远程后端的会话路由在 compression 或 reconnect 后行为不一致。

### 😊 正面反馈
- [#96403](https://github.com/NousResearch/hermes-agent/issues/96403) 等问题快速被定位到根因（截图文件名时区），反映社区调查能力强。
- [#127287](https://github.com/NousResearch/hermes-agent/pull/127287) PR 接力（@finn763 → @OutThisLife）展现良好的协作文化。

### 📊 用户场景集中点
- **远程后端 + 本地 Desktop** 组合用户：频繁遇到连接、provider 持久化、会话丢失问题
- **Windows arm64 用户**：最被忽视的硬件组合，多个 bug（agent-browser EFTYPE、Hindsight daemon）尚未修复
- **长会话重度用户**：context compression 引发的 tool-call 参数损坏和 session 错乱

---

## 8. 待处理积压

### ⚠️ 长期未关闭的重要 Issue

| Issue | 标题 | 创建日期 | 评论 | 状态 |
|---|---|---|---|---|
| [#4335](https://github.com/NousResearch/hermes-agent/issues/4335) | Cross-platform session context sharing | 2026-03-31 | 20 | OPEN，`needs-decision`，已 6 个月未推进 |
| [#53352](https://github.com/NousResearch/hermes-agent/issues/53352) | Desktop renderer crash boot loop on Windows | 2026-06-27 | 3 | OPEN，**Windows 桌面引导循环的根因

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报
**报告日期：2026-09-29**

---

## 一、今日速览

PicoClaw 今日整体活跃度中等但呈"输入型"特征——过去 24 小时共产生 17 条 Issues/PRs 更新，但**无任何 PR 合并或关闭**，仓库处于"大量积压待审"状态。值得注意的是，社区贡献者 **x1F916 单日提交 5 个修复型 PR**（#3399–#3403）外加 1 个综合性 Issue（#3404），体现出社区自发的可靠性补救行动；同时用户 **afjcjsbx** 公开宣布活跃 Fork（#3398），明确表达对当前维护状态的疑虑。**新版本 0 个**，维护节奏需关注。

---

## 二、版本发布

⚠️ **无新版本发布**。当前最新公开版本仍为用户反馈中的 **v0.3.1**（参见 [Issue #3281](https://github.com/sipeed/picoclaw/issues/3281)）。

---

## 三、项目进展

**今日合并/关闭 PR：0 条**——这是今日最显著的健康度信号。

仅有 1 条 Issue 被关闭：[Issue #258 Security Audit (2026-02-16)](https://github.com/sipeed/picoclaw/issues/258) 在保持 open 长达 7 个月后终于关闭。该 Issue 原报告严重级别 **CRITICAL VULNERABILITIES**，建议维护者回溯关闭评论，确认漏洞修复闭环。

**实质进展评估：** 仓库代码层面今日净变化为零，但社区端产出大量"待合并修复候选"。

---

## 四、社区热点

### 🔥 高讨论度 Issues

| Issue | 标题 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI chat input is very laggy when history has a little bit long | **15** | 2 | OPEN (stale) |
| [#258](https://github.com/sipeed/picoclaw/issues/258) | Security Audit | 5 | 1 | **CLOSED** |
| [#3366](https://github.com/sipeed/picoclaw/issues/3366) | Add support for OpenAI compatible providers | 5 | 0 | OPEN (stale) |

### 🆕 今日新开 Issues 引发的关注

- **[#3398 Active Fork 公告](https://github.com/sipeed/picoclaw/issues/3398)**：afjcjsbx 宣布建立活跃维护 Fork `afjcjsbx/picoclaw`。**这是项目治理层面的重要信号**，反映社区对当前维护节奏不满。
- **[#3404 Reliability fixes wave 1](https://github.com/sipeed/picoclaw/issues/3404)**：x1F916 系统化梳理主分支（bbf6893）与 v0.3.1 上的可复现 Bug。
- **[#3405 Private vulnerability reporting](https://github.com/sipeed/picoclaw/issues/3405)**：x1F916 请求开启 GitHub 私有漏洞报告通道，反映其发现的安全问题未获合适披露路径。

---

## 五、Bug 与稳定性

### 🔴 严重（与稳定性/安全直接相关）

1. **[#3404 Reliability fixes wave 1](https://github.com/sipeed/picoclaw/issues/3404)** — x1F916 整理的多个可复现核心 Bug（agent loop / channels manager / config / updater）。其中 #3400、#3401、#3402、#3403 全部已配套 PR。
2. **[#3400 fix(config): persist all api_keys and enabled flag of multi-key models](https://github.com/sipeed/picoclaw/pull/3400)** — 多 key 模型保存时丢失 `Enabled` 标志位，每次保存都破坏配置。**已有 fix PR，待合并**。
3. **[#3401 fix(channels): make Reload synchronous and nil-safe](https://github.com/sipeed/picoclaw/pull/3401)** — 启用但未就绪的 channel 触发 Reload 时会因 nil 指针导致网关 panic（`manager.go:1956`）。**严重，已有 fix PR**。
4. **[#3403 fix(agent): deliver async tool results to the originating session](https://github.com/sipeed/picoclaw/pull/3403)** — async tool（如 `spawn`）结果错误路由到 default agent 的主会话，造成跨用户/会话结果污染。**严重，已有 fix PR**。
5. **[#3399 fix(updater): select the matching 32-bit ARM release asset](https://github.com/sipeed/picoclaw/pull/3399)** — 32 位 ARM 用户运行 `picoclaw update` 实际安装 arm64 归档（asset 匹配子串 bug）。**已有 fix PR**。

### 🟡 中等

6. **[Issue #3281 Web UI 卡顿](https://github.com/sipeed/picoclaw/issues/3281)** — 聊天历史稍长时输入框严重卡顿。**已有 fix PR [#3347](https://github.com/sipeed/picoclaw/pull/3347)**，由 iMilnb 提交，仍待合并。
7. **[#3378 fix(auth): RefreshAccessToken 硬编码 scope](https://github.com/sipeed/picoclaw/pull/3378)** — OAuth token 刷新使用硬编码 `"openid profile email"`，覆盖 provider 自定义 scopes。**已有 fix PR，待合并**。

### ⚪ 关闭归档

- [#258 Security Audit](https://github.com/sipeed/picoclaw/issues/258) — 严重级，今日关闭，**建议审查关闭原因**。

---

## 六、功能请求与路线图信号

| 需求 | Issue | 配套 PR | 纳入下一版本可能性 |
|---|---|---|---|
| OpenAI Compatible 通用 Provider | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 无 | ⭐⭐⭐⭐ 高，社区呼声明确 |
| Tsubasa 加入 OpenAI-compatible 目录 | [#3397](https://github.com/sipeed/picoclaw/issues/3397) | 无 | ⭐⭐ 中 |
| Keenable 作为 web_search 提供方 | — | [#3370](https://github.com/sipeed/picoclaw/pull/3370) | ⭐⭐ 中 |
| IRCv3 multiline 支持 | — | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | ⭐⭐ 中 |
| DeltaChat 实现清理 (-200 LOC) | — | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | ⭐⭐⭐ 中，refactor 价值明确 |
| 开启私有漏洞报告 | [#3405](https://github.com/sipeed/picoclaw/issues/3405) | — | ⭐⭐⭐⭐ 应立即处理（治理层面） |

**路线图信号判断——** Provider 生态扩展（OpenAI Compatible / Tsubasa / Keenable）是当前最清晰的路线图方向；同时**可靠性与稳定性**（config 持久化、channel nil 安全、updater asset 匹配）正成为社区自发推动的下一个主战场。

---

## 七、用户反馈摘要

- **🛑 痛点：维护停滞感知**  
  [#3398](https://github.com/sipeed/picoclaw/issues/3398) 明确指出 "this repository currently appears to be unmaintained"，反映用户对响应速度与 PR 合并节奏的不满。这与今日 0 个 PR 合并相印证。

- **⚠️ 痛点：Web UI 长会话可用性差**  
  [#3281](https://github.com/sipeed/picoclaw/issues/3281) 描述历史稍长时输入框卡顿严重，影响日常使用；用户 iMilnb 自发提交 PR [#3347](https://github.com/sipeed/picoclaw/pull/3347) 修复，但等待超过 1 个月仍未合并，评论区情绪偏消极。

- **🔐 痛点：缺少漏洞披露通道**  
  [#3405](https://github.com/sipeed/picoclaw/issues/3405) 用户准备上报安全问题却发现 GitHub 私有漏洞报告未启用，且无 SECURITY.md。这是影响外部安全研究者参与意愿的硬性阻碍。

- **✅ 正面信号：Fork 延续项目生命**  
  [#3398](https://github.com/sipeed/picoclaw/issues/3398) 的 Fork 公告本身是一种社区对项目价值的认可——"there is still significant interest and demand from the community"。

---

## 八、待处理积压 ⚠️

**以下长期未响应项需维护者优先关注：**

| 类型 | 编号 | 创建日期 | 已等待 | 标签 |
|---|---|---|---|---|
| Bug | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | 2026-07-21 | ~70 天 | stale（已附 fix PR #3347） |
| Feature | [#3366](https://github.com/sipeed/picoclaw/issues/3366) | 2026-09-04 | ~25 天 | stale |
| PR (auth) | [#3378](https://github.com/sipeed/picoclaw/pull/3378) | 2026-09-12 | ~17 天 | stale |
| PR (irc) | [#3354](https://github.com/sipeed/picoclaw/pull/3354) | 2026-08-31 | ~29 天 | stale |
| PR (refactor) | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | 2026-07-03 | ~88 天 | 无 stale 标签但已近 3 个月 |
| PR (web fix) | [#3347](https://github.com/sipeed/picoclaw/pull/3347) | 2026-08-27 | ~33 天 | 无 stale 标签 |

**关键提示：** x1F916 单日提交的 5 个可靠性修复 PR（[#3399](https://github.com/sipeed/picoclaw/pull/3399)–[#3403](https://github.com/sipeed/picoclaw/pull/3403)）覆盖 panic、配置污染、跨会话污染、架构错配等多类核心问题，建议维护者优先批量合并，可作为下一个 patch 版本（如 v0.3.2）的基础。

---

## 📊 项目健康度评估

| 维度 | 评估 | 说明 |
|---|---|---|
| 代码活跃度 | 🟡 中 | 10 个新 PR，但合并率为 0 |
| 社区参与 | 🟢 良 | 高质量外部贡献集中涌入 |
| 维护响应 | 🔴 弱 | 长期 PR 未合，治理信号负面 |
| 安全治理 | 🔴 弱 | SECURITY.md 缺失、私有漏洞通道未开 |
| 版本节奏 | 🟡 中 | 距 v0.3.1 已久，无新版本 |
| **综合** | **🟡 偏弱** | 项目价值仍被认可，但维护端承压 |

---

*报告基于 2026-09-29 GitHub 数据快照生成。*

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-09-29

> 数据周期：2026-09-28 ~ 2026-09-29 ｜ 仓库：[qwibitai/nanoclaw](https://github.com/qwibitai/nanoclaw)

---

## 1. 今日速览

NanoClaw 进入一轮明显的「更新流程与稳定性加固」集中冲刺。24 小时内 PR 流转 31 条（合并/关闭 18，待合并 13），Issue 净减少 3 条（关闭 3、新开 1），社区活跃度处于高位。提交高度集中在 `glifocat`（核心维护者）和 `tchopoorian` 两位贡献者手中，主题几乎全部围绕 `/update-nanoclaw` 流程健壮性、Iron Proxy / OpenCode 网关适配、容器生命周期管理以及 CI 兼容性。整体来看，项目处在 v2.4.0 之后的快速迭代阶段，合并节奏稳健，无未发布版本但有多个修复在收尾。

---

## 2. 版本发布

**今日无新版本发布。**

最近一次发布为 **v2.4.0**（commit `c313d061`），本期多个 bug 与修复均围绕该版本暴露出的更新/容器/网关问题展开，强烈建议关注后续 v2.4.x 补丁版本。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 价值 |
|---|---|---|
| [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) | fix(update): 拒绝在存活探针自身失败时执行 cutover | 修复"看似成功、实际旧 host 仍运行"的危险误报 |
| [#3957](https://github.com/nanocoai/nanoclaw/pull/3957) | fix(scheduling): 预任务脚本超时时杀掉整个进程组 | 解决 bash fork 导致子进程泄漏的根本问题 |
| [#3959](https://github.com/nanocoai/nanoclaw/pull/3959) | test(agent-runner): 异步 spawn bun 子进程 | 解锁 9/28 主干 CI 5/8 失败的 agent-runner 容器测试 |
| [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) | feat(iron): 信任操作员名称约束的本地 CA | 打通私有命名（如 `models.home.arpa`）下 Iron 后端的本地模型服务 |
| [#3949](https://github.com/nanocoai/nanoclaw/pull/3949) | fix(add-mattermost): 缺失 callback 密钥时由 verify-runtime 派生 | 移除对 `.env` 中 `MATTERMOST_CALLBACK_SECRET` 的硬性要求 |
| [#3948](https://github.com/nanocoai/nanoclaw/pull/3948) | fix(update): cutover 与残留回收保留 gateway 自有容器 | 让 `gateway` 成为一等 container role，Iron Proxy 容器不再被错误回收 |
| [#3946](https://github.com/nanocoai/nanoclaw/pull/3946) | fix(skill-apply): 显示失败步骤自身错误 | 改善 skill 失败时的可调试性 |
| [#3960](https://github.com/nanocoai/nanoclaw/pull/3960) | fix(add-onecli): 错误信息命名凭据而非 provider | 错误语义更贴近抽象边界 |
| [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) | fix(update): rollback 停止 live nohup host 并排空 agent 容器 | 修复 nohup 模式下 rollback 留下旧 host 的问题 |
| [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) | test(update): 用 unlinkSync 而非 rmSync 删除数据软链 | 适配 Node 24 早于 24.13.1 版本的 e2e 套件 |
| [#3883](https://github.com/nanocoai/nanoclaw/pull/3883) | fix(iron-proxy): 卸载时删除 Iron Control 数据库 | 重装同名目录时不再残留旧凭据 |

**总体评价**：今日合入的修复几乎都集中在「让更新与卸载在真实环境下更可靠」，是一次显著的可观测性 / 可恢复性推进；特性侧仅 [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) 一项重要功能，扩展了 Iron 网关在私有 CA 场景下的可用性。

---

## 4. 社区热点

由于本期数据未显示 PR/Issue 的具体 👍 与评论排行，仅以「更新热度」作为近似指标：

- 持续受关注：[#3906](https://github.com/nanocoai/nanoclaw/issues/3906) — controller archive 自 #3816 起遗漏 `setup/`，导致 stage-rooted 命令先于依赖执行。已关闭但衍生出多个后续修复 PR。
- 持续受关注：[#3907](https://github.com/nanocoai/nanoclaw/issues/3907) — 嵌套 pnpm 输出 workspace 警告干扰网关检测；与 [#3883](https://github.com/nanocoai/nanoclaw/pull/3883)、[#3948](https://github.com/nanocoai/nanoclaw/pull/3948) 形成 Iron 一条线。
- 关注但相对休眠：[#3839](https://github.com/nanocoai/nanoclaw/issues/3839) — `add-opencode` reapply 在 bun test 中挂起到 6 小时取消。今日关闭，长期挂起的稳定性问题终于落地。

**热点背后诉求**：用户对「更新失败回退不到位」「错误信息无法定位」「本地私有网络/凭据场景不被覆盖」的痛点最为集中；维护者在响应上明确呈现"按问题串成一组修复"的工作模式。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（破坏核心流程）
1. **[#3961](https://github.com/nanocoai/nanoclaw/issues/3961) OPEN** — `/update-nanoclaw` 在 `systemctl --user` 无法到达 bus 时仍报 `phase: complete`，且不重启 host。  
   - **修复 PR**：✅ 已有 [#3962](https://github.com/nanocoai/nanoclaw/pull/3962)（修复存活探针误判）
   - **状态**：未完全闭环，仍需进一步处理 systemd bus 不可达路径。

2. **[#3906](https://github.com/nanocoai/nanoclaw/issues/3906) CLOSED** — controller archive 自 #3816 起漏掉 `setup/`，stage-rooted 命令在依赖就绪前执行。  
   - **修复 PR**：✅ 已被多个 update 相关 PR 间接覆盖（[#3948](https://github.com/nanocoai/nanoclaw/pull/3948)、[#3956](https://github.com/nanocoai/nanoclaw/pull/3956)、[#3963](https://github.com/nanocoai/nanoclaw/pull/3963)）

### 🟠 高（特定平台/环境）
3. **[#3953](https://github.com/nanocoai/nanoclaw/pull/3953) OPEN PR** — arm64 引擎无法运行 amd64 Iron Control 镜像时仍执行完整安装并以 `exec format error` 失败。  
   - **修复 PR**：✅ 自身即为修复（取代 #3891），未合并。

4. **[#3956](https://github.com/nanocoai/nanoclaw/pull/3956) OPEN PR** — `update-nanoclaw.ts rollback` 在 nohup 安装中无法真正停止旧 host、未排空 agent 容器。

5. **[#3947](https://github.com/nanocoai/nanoclaw/pull/3947) OPEN PR** — 主机扫除不再清理已删除 session/agent group 的容器，删除会话后容器残留到下次重启。

### 🟡 中（功能/可观测性）
6. **[#3907](https://github.com/nanocoai/nanoclaw/issues/3907) CLOSED** — 嵌套 pnpm 的 workspace 警告污染网关检测 stdout。
7. **[#3839](https://github.com/nanocoai/nanoclaw/issues/3839) CLOSED** — `add-opencode` reapply 挂死 6 小时（GitHub Actions）。
8. **[#3958](https://github.com/nanocoai/nanoclaw/pull/3958) OPEN PR** — `formatErr/formatData` 直接调用 `JSON.stringify`，循环引用或 BigInt 会让 host 崩溃。

整体看：**严重/高危 bug 全部已有对应 PR**，只是合并节奏需关注；没有出现"裸奔"的未覆盖崩溃路径。

---

## 6. 功能请求与路线图信号

直接功能型 PR（可能进入下个版本）：

| PR | 信号 |
|---|---|
| [#3950](https://github.com/nanocoai/nanoclaw/pull/3950) | Iron 支持本地 CA → 直接扩展 Iron 在 home/企业网中的可用性 |
| [#3955](https://github.com/nanocoai/nanoclaw/pull/3955) | OpenCode 网关说明迁移到各自网关技能文档 |
| [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) | 文档化 OneCLI / Iron 适配器对并发值轮换的盲点 |
| [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) | 让主机服务可通过 HTTPS 代理访问互联网 |
| [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | OpenCode 在 prompt 阶段核对模型 URL 与所选网关的匹配 |
| [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | 删除会话/agent group 后立即清理对应容器 |

**路线图判断**：未来 1~2 个 patch 版本将围绕 **Iron/OpenCode 网关** 与 **update 流程健壮性** 两条主线推进；**HTTPS 代理支持**与**本地 CA 信任**是社区强烈需要的功能扩展，值得排入 v2.5 路线。

---

## 7. 用户反馈摘要

从 Issue 文本中提炼出的真实场景与痛点：

- **🔁 更新流程脆弱**：「`phase: complete` 但服务并未重启」（[#3961](https://github.com/nanocoai/nanoclaw/issues/3961)）、「旧 host 仍在响应，但提示已完成」（同 issue）、「更新后所有 agent spawn 失败，因为 Iron Proxy 容器被错误清理」（[#3948](https://github.com/nanocoai/nanoclaw/pull/3948)）—— 用户对更新/回滚的"可观测真相"极度敏感。
- **🔒 私有网络与凭据**：本地模型服务（`models.home.arpa`）无公网 CA 可签发证书，Iron 在该场景下完全无法工作（[#3950](https://github.com/nanocoai/nanoclaw/pull/3950)）。这是家庭/企业部署的典型诉求。
- **🏗️ 平台异构**：arm64 机器尝试跑 amd64 Iron Control 镜像失败（[#3953](https://github.com/nanocoai/nanoclaw/pull/3953)）；nohup 安装（非 systemd）成为 update rollback 的盲区（[#3956](https://github.com/nanocoai/nanoclaw/pull/3956)）。用户对"我的部署不属于最常见那类"感到挫败。
- **📦 卸载重装不干净**：`nanoclaw uninstall` 残留 Iron Control 数据库，导致同目录重装后状态污染（[#3883](https://github.com/nanocoai/nanoclaw/pull/3883)）。
- **🪵 错误信息不友好**：「step did not complete」通用回弹让用户无法定位问题（[#3946](https://github.com/nanocoai/nanoclaw/pull/3946)）；错误信息把 provider 名带到了 provider-agnostic 抽象背后（[#3960](https://github.com/nanocoai/nanoclaw/pull/3960)）。
- **🤖 CI 兼容性**：Bun 1.4.0 的 `spawnSync` 在 `ubuntu-latest` 上有 bug（oven-sh/bun#34069），导致 5/8 主干构建失败（[#3959](https://github.com/nanocoai/nanoclaw/pull/3959)），用户痛点来自"我的 PR 通过但合入后主干挂"。

总体反馈基调：**核心能力认可，更新/恢复体验与边缘场景细节不足**。

---

## 8. 待处理积压（提醒维护者关注）

按 OPEN 状态且当日未更新的重要 Issue/PR 排序：

| 编号 | 类型 | 距上次更新 | 说明 |
|---|---|---|---|
| [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) | PR OPEN | ~1 个月（8-29 → 9-28）| `NO_PROXY` 本地跳跃修复，关系容器侧 MCP 服务器连通性，长期未合 |
| [#3919](https://github.com/nanocoai/nanoclaw/pull/3919) | PR OPEN | 3 天 | OpenCode 模型 URL 与网关一致性核对 |
| [#3947](https://github.com/nanocoai/nanoclaw/pull/3947) | PR OPEN | 1 天 | 删除会话/agent group 后容器清理 |
| [#3953](https://github.com/nanocoai/nanoclaw/pull/3953) | PR OPEN | 1 天 | arm64 引擎早停 |
| [#3958](https://github.com/nanocoai/nanoclaw/pull/3958) | PR OPEN | 1 天 | 日志不可序列化值容错 |
| [#3962](https://github.com/nanocoai/nanoclaw/pull/3962) | PR OPEN | 1 天 | cutover 存活探针失败拒绝 |
| [#3963](https://github.com/nanocoai/nanoclaw/pull/3963) | PR OPEN | 1 天 | Node 24 e2e 适配 |
| [#3901](https://github.com/nanocoai/nanoclaw/pull/3901) | PR OPEN | 3 天 | HTTPS 代理支持 |
| [#3955](https://github.com/nanocoai/nanoclaw/pull/3955) | PR OPEN | 1 天 | OpenCode 网关文档迁移 |
| [#3954](https://github.com/nanocoai/nanoclaw/pull/3954) | PR OPEN | 1 天 | OneCLI/Iron 并发轮换盲点文档 |
| [#3956](https://github.com/nanocoai/nanoclaw/pull/3956) | PR OPEN | 1 天 | rollback nohup / 容器排空 |
| [#3961](https://github.com/nanocoai/nanoclaw/issues/3961) | Issue OPEN | 1 天 | `/update-nanoclaw` systemd bus 不可达 |

**重点关注**：
- **[#3654](https://github.com/nanocoai/nanoclaw/pull/3654) 接近 1 个月未合并**，且涉及 `containers` 与 `credentials` 双向领域，建议维护者尽快 review 并给出合并/拒绝理由。
- **多个 update 相关 PR（#3962/#3956/#3948/#3963）同时在途**，存在重叠/冲突风险，建议维护者按依赖顺序串成同一批次。

---

## 📊 项目健康度速读

| 维度 | 评分 | 备注 |
|---|---|---|
| 活跃度 | ★★★★★ | 单日 31 PR / 4 Issue |
| Issue 处理速度 | ★★★★☆ | 3 关 1 开，积压可控 |
| PR 合并吞吐 | ★★★★☆ | 18 合/关 / 13 待合 |
| 文档同步 | ★★★★☆ | 多 PR 主动迁移/澄清文档 |
| 稳定性 | ★★★☆☆ | 多条关键路径 bug 在修，但需警惕 update 流程复合风险 |
| 多样贡献者 | ★★☆☆☆ | 仍高度依赖 1~2 名核心维护者 |

> 建议维护者：(1) 优先 review 并合并 update 流程相关 PR 集合；(2) 关注 [#3654](https://github.com/nanocoai/nanoclaw/pull/3654) 等长期挂起 PR；(3) 考虑为 v2.4.x 释出补丁版本，承载这一轮 update / Iron / OpenCode 修复。

---

*报告基于 GitHub 公开数据生成，所有条目附原始链接以便追溯。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**报告日期**：2026-09-29
**数据来源**：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日呈现高度集中的一次"批量收尾"动作：过去 24 小时内共处理 17 条 Issue（16 条已关闭、1 条仍开放）和 6 条 PR（全部已合并/关闭），且所有 17 条 Issue 与 6 条 PR 均在 2026-09-28 当天集中更新，体现出维护者一次集中性的清理与发布节奏。社区层面没有新增开放讨论，仍以历史积压需求（如多 Provider 子代理、Vision、配置可读性、Web UI 隧道化）的归档关闭为主。综合评估：**项目维护活跃度高，但讨论热度低**——典型的"封板式"工作日，需要关注仍有 1 条开放 Issue 与若干长期未实质推动的功能诉求。

---

## 2. 版本发布

⚠️ **今日没有正式 Release tag，但发布流程已启动**

PR #1014 ([链接](https://github.com/nullclaw/nullclaw/pull/1014)) 标题为 `v20260929`，明确标注：
> "Pin web search to the configured provider and stop Exa from rejecting duplicate Content-Type headers. Strip Markdown markers before official QQ replies. Version bump for v20260929."

可推断 v20260929 版本即将或刚刚发布。变更要点：

- **修复**：Web search 固定到配置的 provider；解决 Exa 重复 `Content-Type` header 导致的请求拒绝。
- **修复**：QQ 官方回复前剥离 Markdown 标记，避免富文本渲染异常。
- **建议用户关注**：升级后请确认 `web_search` provider 配置；如有依赖 QQ 官方回复内容格式的下游脚本，需自验 Markdown 剥离后的输出。

**迁移注意事项**：当前 PR 测试清单尚未勾选（"Release workflow builds the tag" 与 `nullclaw version` 校验仍为待办），用户在升级前可关注该 PR 的合并状态确认版本已实际落地。

---

## 3. 项目进展

过去 24 小时共有 6 条 PR 被合并/关闭，整体推进力度较大，覆盖**新 Provider、多通道能力、底层智能管道、工具系统**四大方向：

| PR | 主要推进 | 链接 |
|---|---|---|
| #1014 | 发布版本修复（Web search 绑定、QQ Markdown 剥离） | [#1014](https://github.com/nullclaw/nullclaw/pull/1014) |
| #990 | 新增 **Eden AI** 作为 OpenAI 兼容网关 Provider，扩展 EU 数据合规选项 | [#990](https://github.com/nullclaw/nullclaw/pull/990) |
| #319 | 钉钉官方 Bot API 接入，支持**消息发送与撤回** | [#319](https://github.com/nullclaw/nullclaw/pull/319) |
| #667 | 邮件通道升级为**双向 IMAP + IDLE 持久连接**，附带网络韧性回退 | [#667](https://github.com/nullclaw/nullclaw/pull/667) |
| #527 | **自适应智能管道** + 邮件 / WhatsApp Web 通道：回合评分、技能路由、模型归因 | [#527](https://github.com/nullclaw/nullclaw/pull/527) |
| #411 | **工具定制系统**：基于触发词的优先级调度与参数预置 | [#411](https://github.com/nullclaw/nullclaw/pull/411) |

**整体向前迈进的判断**：
- **Provider 矩阵**首次引入 Eden AI，符合 #922 系列网关化策略；
- **通道能力**显著增强：钉钉从 webhook 升级到官方 API（支持撤回），邮件从 send-only 升级为 IDLE 双向；
- **智能化底盘**开始落地：#527 的回合评分与技能路由为后续自适应学习打底；
- **工具系统**进入精细化阶段：#411 的触发词与参数管理为后续多工具协同铺路。

---

## 4. 社区热点

由于今日所有讨论几乎都是历史 Issue 的批量关闭，真正的"实时讨论"热度极低。可观察到的最活跃 Issue 仍为长期讨论：

- **[#764 Add NullClaw logo to Agent Skills client list](https://github.com/nullclaw/nullclaw/issues/764)** — 5 条评论，**目前唯一开放**。维护者尚未对该请求作出回应，建议尽快响应以避免社区"被忽视感"。
- **[#861 How to enable the Web UI on headless VPS server?](https://github.com/nullclaw/nullclaw/issues/861)** — 5 条评论，反映 README 中 Web UI / Browser Relay 章节对新人不友好，是典型"技术债 vs 用户体验"矛盾。
- **[#190 Subagent spawn](https://github.com/nullclaw/nullclaw/issues/190)** — 5 条评论，跨 Provider 的子代理调度是社区长期诉求，但今日以关闭方式归档。
- **[#619 Improve error message: error(channel_loop): Agent error: error.ApiError](https://github.com/nullclaw/nullclaw/issues/619)** — 5 条评论 + 1 👍，代表性"用户友好化"诉求。

**背后诉求分析**：
- 用户越来越关注**生态可见度**（#764：被官方目录收录）与**上手路径**（#861：headless 部署）；
- 跨 Provider 多代理协同（#190）已上升为社区层面的"差异化能力"诉求；
- 错误信息可读性（#619）反映出**日志透明性**已成为新手留存的关键瓶颈。

---

## 5. Bug 与稳定性

今日共关闭 6 条 Bug 类 Issue，全部已带修复合并。按严重程度排序：

| 严重度 | Issue | 简述 | 是否有 Fix PR | 链接 |
|---|---|---|---|---|
| 🔴 高 | [#354](https://github.com/nullclaw/nullclaw/issues/354) | Homebrew 升级后 daemon 静默失效（plist 硬编码 Cellar 路径） | ✅ 已含修复 | [#354](https://github.com/nullclaw/nullclaw/issues/354) |
| 🟠 中 | [#477](https://github.com/nullclaw/nullclaw/issues/477) | 飞书 WS 断开，组件非活动 | ✅ 已关闭（应已修复） | [#477](https://github.com/nullclaw/nullclaw/issues/477) |
| 🟠 中 | [#408](https://github.com/nullclaw/nullclaw/issues/408) | 工具调用 JSON 解析错误（`:` 被误识别为工具名） | ✅ 已关闭 | [#408](https://github.com/nullclaw/nullclaw/issues/408) |
| 🟡 低 | [#665](https://github.com/nullclaw/nullclaw/issues/665) | `error.NoResponseContent` 在 Windows 自编译版本上 | ✅ 已关闭 | [#665](https://github.com/nullclaw/nullclaw/issues/665) |
| 🟡 低 | [#427](https://github.com/nullclaw/nullclaw/issues/427) | 自定义 skill 无法被 agent 加载为工具 | ✅ 已关闭 | [#427](https://github.com/nullclaw/nullclaw/issues/427) |
| 🟢 文档 | [#932](https://github.com/nullclaw/nullclaw/issues/932) | 文档中 Zig 版本号错误（应为 0.16+） | ✅ 已关闭 | [#932](https://github.com/nullclaw/nullclaw/issues/932) |

**稳定性观察**：
- 关键 Bug（#354 Homebrew 路径硬编码、#408 工具解析）一旦修复，应在下次发布说明里明确告知，避免升级用户重蹈覆辙。
- #665 在 Windows 上的 NoResponseContent 错误未在摘要中暴露根因，建议维护者补充 commit 引用。

---

## 6. 功能请求与路线图信号

今日关闭的 enhancement 类 Issue 中，以下需求与已合并 PR 存在明确关联，**最有可能在下个版本落地**：

| 需求 | 已对应 PR | 落地概率 | 链接 |
|---|---|---|---|
| 钉钉消息接收（不仅发送） | [#319](https://github.com/nullclaw/nullclaw/pull/319) 官方 API + 撤回 | ⭐⭐⭐⭐⭐ 已合并 | [#376](https://github.com/nullclaw/nullclaw/issues/376) |
| 邮件通道双向 / IDLE 推送 | [#667](https://github.com/nullclaw/nullclaw/pull/667) | ⭐⭐⭐⭐⭐ 已合并 | — |
| Web UI 隧道化（Cloudflare / Nginx） | — | ⭐⭐ 需 PoC | [#495](https://github.com/nullclaw/nullclaw/issues/495) |
| `GET /status` 监控端点 | — | ⭐⭐⭐ 实施门槛低 | [#631](https://github.com/nullclaw/nullclaw/issues/631) |
| Vision Pipeline（多模态图片输入） | — | ⭐⭐ 已有自写 skill 范式 | [#624](https://github.com/nullclaw/nullclaw/issues/624) |
| `ddgs` 作为 web_search 备选 | — | ⭐⭐⭐ 可作为 #1014 修复的延伸 | [#623](https://github.com/nullclaw/nullclaw/issues/623) |
| 跨 Provider 子代理调度 | — | ⭐⭐ 与 #527 自适应管道相关 | [#190](https://github.com/nullclaw/nullclaw/issues/190) |
| 配置文件可读性改进 | — | ⭐⭐⭐ 文档侧可直接闭环 | [#613](https://github.com/nullclaw/nullclaw/issues/613) |
| README 基准数据修正（binary size > 1MB） | — | ⭐⭐⭐⭐⭐ 一行表更新 | [#473](https://github.com/nullclaw/nullclaw/issues/473) |

**信号解读**：
- 钉钉 + 邮件的官方接入已经"补齐一半"短板，下一步应聚焦**多模态**和**Web UI 部署**；
- `GET /status` 是低成本高收益的功能，建议尽快开放；
- 子代理（#190）是社区呼声最高的"差异化"能力，与 #527 自适应管道存在天然结合点，可作为下一阶段 Roadmap 重点。

---

## 7. 用户反馈摘要

从已关闭 Issue 的评论中提炼：

**痛点**：
1. **文档晦涩**：[#861](https://github.com/nullclaw/nullclaw/issues/861) 用户明确表示 "I don't understand 70% of that"，README 的 Web UI / Browser Relay 描述脱离新手视角。
2. **错误信息不透明**：[#619](https://github.com/nullclaw/nullclaw/issues/619) 用户反馈 `error.ApiError` 让测试者 "frustrated"，需要更细粒度提示。
3. **升级陷阱**：[#354](https://github.com/nullclaw/nullclaw/issues/354) Homebrew 升级后 daemon 静默失败，反映安装路径未使用相对路径或 symlink 解析策略。
4. **自定义 skill 不生效**：[#427](https://github.com/nullclaw/nullclaw/issues/427) 5 步操作后 skill 仍不可用，CLI 与运行时之间的加载语义不一致。
5. **Windows 报错不一致**：[#665](https://github.com/nullclaw/nullclaw/issues/665) `error.NoResponseContent` 缺乏诊断上下文。
6. **钉钉只发不收**：[#376](https://github.com/nullclaw/nullclaw/issues/376) 配置按文档完成后，gateway 仍报 "send only"。

**使用场景**：
- 个人用户在 headless 服务器 / VPS 上部署 Web UI；
- 跨平台自编译用户（Windows、Linux）跑本地模型（如 llama 系列）；
- 钉钉 / 飞书 / QQ / 邮件作为 IM 通道接入企业 IM；
- 通过 CloudFlare / Nginx 隧道将本地 Web 通道暴露到公网；
- README 中 benchmark 数字与现实差异（binary size 实际已 > 1MB）。

**满意度信号**：
- 👍 数据集中在 [#613](https://github.com/nullclaw/nullclaw/issues/613)（4）、[#631](https://github.com/nullclaw/nullclaw/issues/631)（1）、[#619](https://github.com/nullclaw/nullclaw/issues/619)（1）、[#473](https://github.com/nullclaw/nullclaw/issues/473)（1），说明社区对"文档与可观测性"改进的认同度最高。
- 多条 Issue 评论数 ≥ 4 但 👍 = 0，提示部分用户只"围观"未明确背书，社区参与深度有提升空间。

---

## 8. 待处理积压

**今日仍开放的 Issue**：

- **[#764 Add NullClaw logo to Agent Skills client list](https://github.com/nullclaw/nullclaw/issues/764)** — 距今最近一次更新 2026-09-28，**维护者尚未回应**。建议至少给出一个明确态度（接受 / 拒绝 / 待评估），避免社区感知"被忽视"。

**值得提醒维护者关注的历史信号**：

- **跨 Provider 子代理**（[#190](https://github.com/nullclaw/nullclaw/issues/190)）— 今日被关闭，但无明确 PR 承接，与 #527 自适应管道存在天然结合点，建议在 Roadmap 中明确归属。
- **Vision Pipeline**（[#624](https://github.com/nullclaw/nullclaw/issues/624)）— 已有用户在 NullClaw 中自写 skill 跑通，是高频未被满足的"现代化 LLM 能力"。
- **`GET /status` 端点**（[#631](https://github.com/nullclaw/nullclaw/issues/631)）— 实施成本极低，应作为下个 minor 版本的快赢项。
- **README 基准数据更新**（[#473](https://github.com/nullclaw/nullclaw/issues/473)）— 一行 PR 即可闭环。
- **Headless VPS 上 Web UI 部署教程**（[#861](https://github.com/nullclaw/nullclaw/issues/861)）— 长期高门槛，建议增补 "Non-jargon" 文档。

---

## 健康度小结

| 维度 | 评分 | 说明 |
|---|---|---|
| 维护响应速度 | ⭐⭐⭐⭐ | 单日关闭 16 条 Issue + 6 条 PR，节奏稳健 |
| 社区讨论活跃度 | ⭐⭐ | 今日无新增讨论，依赖历史积压消化 |
| 功能推进广度 | ⭐⭐⭐⭐⭐ | Provider / 通道 / 智能管道 / 工具系统四线并进 |
| 文档与新手体验 | ⭐⭐ | 仍存在 README 晦涩、错误信息不透明等问题 |
| 开放透明度 | ⭐⭐⭐ | #764 等开放 Issue 长期无回应，需加强 |

**建议**：
1. 立即响应 #764，避免社区品牌曝光机会流失；
2. 尽快发布 v20260929 正式 tag（基于 #1014）；
3. 把 #631 `GET /status`、#473 README 数据更新列入下个 minor 版本快赢清单；
4. 将 #190 子代理与 #527 自适应管道明确列入公开 Roadmap。

---

*报告生成基于 2026-09-28 当日 GitHub 公开数据快照*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报 · 2026-09-29

## 1. 今日速览

IronClaw 今日整体处于**中低强度的稳定维护态**：24 小时内无新版本发布，Issues 与 PRs 数量均偏少（2 个活跃 Issue、5 个 PR 流转），但结构健康。值得关注的两点信号是：（1）新贡献者 `changeroa` 同日提交 2 个面向 CLI/WebUI 体验修复的 PR，显示出外部开发者的参与意愿；（2）两条由 `ironclaw-ci[bot]` 自动生成的知识图谱 / 文档刷新 PR 仍处于待审状态，需维护者主动跟进合入。整体活跃度可评为 **B（常规维护日）**，无重大事件。

---

## 2. 版本发布

**无新版本发布。** 今日无 Release 标签动作，跳过本节。

---

## 3. 项目进展

今日有 **1 个 PR 已关闭**（[#5132](https://github.com/nearai/ironclaw/pull/5132)），并有 **4 个 PR 待合并**，其中包括若干对终端用户体验的实际改进：

- **[#5132] fix(webui-v2): redirect invalid chat thread routes** — *已关闭*（贡献者 `flyagents`）。修复 WebUI v2 在访问保留或无效的 `/chat/:threadId` 路由时回退到 `/chat` 的逻辑，并避免与本地线程列表的刷新竞态。该合入夯实了 WebUI v2 的深链接可用性。  
  🔗 https://github.com/nearai/ironclaw/pull/5132

- **[#8118] fix(cli): report effective config profile** — *待合并*（新贡献者 `changeroa`）。让 `ironclaw config path` / `ironclaw doctor` / `ironclaw status` 在未设置 `IRONCLAW_REBORN_PROFILE` 时，正确显示来自 `config.toml` 的有效启动配置档案，复用 `runtime::effective_profile` 已有优先级链路，降低了配置排查摩擦。  
  🔗 https://github.com/nearai/ironclaw/pull/8118

- **[#8117] fix(webui): restore focus after closing the command palette** — *待合并*（新贡献者 `changeroa`）。修复了通过 Cmd/Ctrl+K 唤起命令面板后再关闭时，键盘焦点丢失在 `body` 而非原输入框的可访问性问题。  
  🔗 https://github.com/nearai/ironclaw/pull/8117

综合来看，**项目在 CLI 可观测性与 WebUI 可访问性上迈进了小步但实质的一步**，属于典型的"以小修复累积大体验"型进展。

---

## 4. 社区热点

按互动指标（评论 / 👍）看，**今日 Issues 与 PRs 的互动量都为零或尚未沉淀**（issues 区 0 评论 / 0 👍，新 PRs 暂无评论）。但仍有两个值得关注的"隐性热点"：

- **新贡献者 `changeroa` 双 PR 同日提交**（[#8117](https://github.com/nearai/ironclaw/pull/8117)、[#8118](https://github.com/nearai/ironclaw/pull/8118)），两条均为 Medium 级别、低风险。社区层面的诉求指向：**配置排错工具的可用性** 与 **键盘驱动的 WebUI 可访问性**——这通常是高频使用者的真实痛点。
- **每日失败分类 Issue #8116**（[链接](https://github.com/nearai/ironclaw/issues/8116)）继续作为常驻的"评测复盘"机制存在，反映了维护团队对模型质量（DeepSeek-V4-Flash 在 officeqa 上的真实错误 vs. 环境噪声）的持续诊断投入。

---

## 5. Bug 与稳定性

| 严重度 | 问题 | 状态 | Fix PR |
|---|---|---|---|
| 🟡 中（可访问性 / UX） | WebUI 命令面板关闭后焦点丢失 ([#8117](https://github.com/nearai/ironclaw/pull/8117)) | 已有修复，待合并 | [#8117](https://github.com/nearai/ironclaw/pull/8117) |
| 🟢 低（诊断友好性） | CLI 子命令未显示有效配置档案 ([#8118](https://github.com/nearai/ironclaw/pull/8118)) | 已有修复，待合并 | [#8118](https://github.com/nearai/ironclaw/pull/8118) |
| ✅ 已修复（WebUI v2） | 无效 `/chat/:threadId` 路由未正确重定向 ([#5132](https://github.com/nearai/ironclaw/pull/5132)) | 已关闭 | [#5132](https://github.com/nearai/ironclaw/pull/5132) |
| 🟡 中（持续观测） | officeqa 套件 31 个非通过任务，含模型质量错误（[#8116](https://github.com/nearai/ironclaw/issues/8116)） | 开放，作为每日失败分类记录 | — |

今日**无崩溃或 P0 级别回归**报告，已知问题均处于有 fix 跟进或持续跟踪状态，整体稳定性良好。

---

## 6. 功能请求与路线图信号

- **[#8115] Add a Tsubasa registry entry with an explicit 32K context-budget path**（[链接](https://github.com/nearai/ironclaw/issues/8115)，作者 `cenab`，OPEN）  
  诉求：**将 Tsubasa 列为具名的 provider 注册项**，而不是依赖用户手动填入 OpenAI 兼容端点与模型名；并显式标注 32K 上下文预算路径，以便配置时可预期。  
  路线图含义：这是典型的"减少安装摩擦 + 让上下文预算可被框架感知"的功能请求，与 IronClaw 既有"OpenAI 兼容后端 + 命名 provider"的演进方向一致。**预计在下一个小版本窗口被纳入**（风险低、改动局部）。

---

## 7. 用户反馈摘要

由于今日 Issues 评论数普遍为 0，直接的"用户声音"较为稀薄。从 Issue 与 PR 文本中可提炼的隐含反馈如下：

- **配置排错仍是用户痛点**：用户需要一种"不读源码也能知道现在生效的是哪个 profile"的简单方式（[#8118](https://github.com/nearai/ironclaw/pull/8118)）。
- **键盘 / 无障碍体验不容忽视**：命令面板关闭后焦点丢失是 WebUI 类产品的典型 a11y 缺陷（[#8117](https://github.com/nearai/ironclaw/pull/8117)）。
- **新 provider 接入路径应"开箱即配置"**：用户希望在 UI / 配置文件层面看到 Tsubasa 等新模型，而不是被要求手填 endpoint（[#8115](https://github.com/nearai/ironclaw/issues/8115)）。
- **模型质量仍是核心满意度指标**：officeqa 失败分类显示团队在认真区分"真错误" vs. "环境噪声"，说明用户对模型可靠性敏感（[#8116](https://github.com/nearai/ironclaw/issues/8116)）。

---

## 8. 待处理积压

需要维护者主动推进的"积压"主要集中在 **bot 自动生成、需要人工审批** 的 PR：

| 编号 | 类型 | 创建日期 | 搁置时长 | 链接 |
|---|---|---|---|---|
| [#7988](https://github.com/nearai/ironclaw/pull/7988) | `chore(agents): refresh codebase knowledge graph`（XS, 低风险） | 2026-08-29 | **~31 天** | https://github.com/nearai/ironclaw/pull/7988 |
| [#6698](https://github.com/nearai/ironclaw/pull/6698) | `docs: update OpenWiki wiki`（XL, 文档, 低风险） | 2026-07-27 | **~64 天** | https://github.com/nearai/ironclaw/pull/6698 |

⚠️ 提醒：两条均为 `ironclaw-ci[bot]` 触发的周期性刷新 PR，根据变更管理策略**不会自动合入**。[#6698](https://github.com/nearai/ironclaw/pull/6698) 已是 XL 级别文档改动，搁置两个月风险累积，建议优先 review 与合并；[#7988](https://github.com/nearai/ironclaw/pull/7988) 影响代码库记忆图的新鲜度，长期不合并会让下游代理检索到陈旧快照。

---

*报告生成时间：2026-09-29 · 数据源：nearai/ironclaw GitHub 公开数据*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报
**日期：2026-09-29**

---

## 1. 今日速览

LobsterAI 项目今日进入 **OpenClaw 网关与协作（cowork）功能的密集打磨期**：14 个 PR 中 13 个已合并/关闭，主题集中在 OpenClaw 启动逻辑、网关锁恢复、一键修复超时等长期稳定性问题。同时，协作模式（cowork）获得两项体验改进（进度卡片、长时间回合折叠），并新增 **PPT/Word/Excel 文档编辑能力**，是本期最具影响力的功能增量。Issues 侧活跃度较低（5 条均为旧 stale 问题被集中刷新或清理），社区讨论量明显收敛。整体活跃度评级：**中高**，呈现"集中修底、稳步加新"的健康推进节奏。

---

## 2. 版本发布

无新版本发布。当前合并的修复与功能预计将在后续 `2026.9.x` 或 `2026.10.x` 系列版本中累计释放。

---

## 3. 项目进展

### 🚀 重要新功能
| PR | 标题 | 影响范围 |
|---|---|---|
| [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) | feat: support ppt/word/excel document editing | **跨域大特性**：render / build / docs / main / openclaw / skills / artifacts |
| [#2778](https://github.com/netease-youdao/LobsterAI/pull/2778) | feat(cowork): show OpenClaw progress cards above the composer | 用户体验：协作模式可直观看到 Agent 的规划卡片 |
| [#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) | feat(cowork): keep long running turns to their latest five steps | UI 防刷屏：避免长时间回合渲染数百行干扰阅读 |

### 🔧 关键稳定性修复
- **OpenClaw 启动逻辑**：[#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 修复了应用启动时网关被启动三次（~80s 才稳定）的根因——IM 通道同步在 MCP bridge 监听前抢跑，导致反复重启。
- **网关锁恢复**：[#2771](https://github.com/netease-youdao/LobsterAI/pull/2771) 处理 Windows 非正常关闭后 PID 被 SYSTEM 进程复用导致网关锁被错误持有的问题。
- **一键修复超时**：[#2774](https://github.com/netease-youdao/LobsterAI/pull/2774) 引入基于输出活动的有界等待（最少 5 分钟，最长单命令 15 分钟），并保存退出诊断信息。
- **旧会话迁移**：[#2772](https://github.com/netease-youdao/LobsterAI/pull/2772) + [#2773](https://github.com/netease-youdao/LobsterAI/pull/2773) 修复纯中文 Agent 目录名规范化后启动门控误判导致死锁的问题，并补齐回归测试。

### 🔒 安全加固
- [#974](https://github.com/netease-youdao/LobsterAI/pull/974) Markdown 渲染拒绝 `//evil.com` 这类协议相对 URL。
- [#1034](https://github.com/netease-youdao/LobsterAI/pull/1034) `shell:openExternal` IPC 仅允许 `http(s):`，阻断 `file://`/`steam://` 等任意协议调用风险（对应 [#1031](https://github.com/netease-youdao/LobsterAI/issues/1031)）。

> 📈 **整体评估**：项目今日在"协作体验 + 网关稳定性 + 文档能力"三条线同时向前推进，是近一周推进幅度较大的一天。

---

## 4. 社区热点

今日评论与互动主要集中在长尾已存在 issue 上，新开 issue 的关注度普遍偏低（0 赞 ≤ 1 评论）。被特别标记关闭的热点为：

- **[#1035](https://github.com/netease-youdao/LobsterAI/issues/1035)** — `NimGateway` 重连后消息去重缓存未清空。2 条评论，引发对"模块级全局缓存 vs 实例级缓存"的架构讨论，对 IM 消息可靠性意义重大，已被关闭（修复应已落地或合并）。
- **[#968](https://github.com/netease-youdao/LobsterAI/issues/968)** — 自建 Agent 用 skill-creator 查询杭州天气，返回非杭州结果且浏览器未关闭。体现用户对 **Agent 工具调用准确性 + 浏览器进程回收** 的双重诉求。
- **[#971](https://github.com/netease-youdao/LobsterAI/issues/971)** — "生成小说封面"答非所问并输出大量无关内容，反映模型输出边界控制与提示词工程稳定性问题。
- **[#972](https://github.com/netease-youdao/LobsterAI/issues/972)** — QWEN 模型关闭重启后卡在"AI 引擎正在启动网关"反复弹窗，与今日 [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 修复高度吻合。
- **[#973](https://github.com/netease-youdao/LobsterAI/issues/973)** — macOS 设置面板显示 `Ctrl` 而非 `Cmd`，违反 macOS 平台惯例，影响专业用户上手体验。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 问题 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| 🔴 高 | **NimGateway 重连后正常消息被静默丢弃** ([#1035](https://github.com/netease-youdao/LobsterAI/issues/1035)) | 已关闭 | 需在合并历史中核验对应实现 |
| 🔴 高 | **AI 网关重启后卡死在"正在启动网关"** ([#972](https://github.com/netease-youdao/LobsterAI/issues/972)) | Open | 🟢 [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 已合并启动逻辑修复，建议回归 |
| 🟠 中 | **macOS 快捷键显示 Ctrl 而非 Cmd** ([#973](https://github.com/netease-youdao/LobsterAI/issues/973)) | Open | ❌ 暂未发现对应 PR |
| 🟠 中 | **Agent 工具调用返回非杭州天气结果 + 浏览器未关闭** ([#968](https://github.com/netease-youdao/LobsterAI/issues/968)) | Open | ❌ 需拆分为"工具结果路由"与"浏览器进程生命周期"两路修复 |
| 🟡 低 | **生成小说封面输出大量无关内容** ([#971](https://github.com/netease-youdao/LobsterAI/issues/971)) | Open | ❌ 提示词/输出约束相关，建议作为体验优化 |

> 同步已落地的稳定性修复：[#2771](https://github.com/netease-youdao/LobsterAI/pull/2771)（网关锁 PID 复用）、[#2772](https://github.com/netease-youdao/LobsterAI/pull/2772)（启动门控死锁）、[#2774](https://github.com/netease-youdao/LobsterAI/pull/2774)（一键修复超时）、[#975](https://github.com/netease-youdao/LobsterAI/pull/975)（小蜜蜂网关被踢下线后不可恢复）、[#1037](https://github.com/netease-youdao/LobsterAI/pull/1037)（Windows WSL 与 Git Bash 共存时找不到 node）。

---

## 6. 功能请求与路线图信号

1. **📊 文档全流程编辑（PPT/Word/Excel）**——今日 [#2776](https://github.com/netease-youdao/LobsterAI/pull/2776) 直接覆盖。属于官方主动布局的"AI Agent + 办公文档"场景，路径清晰，预计为下一版本的旗舰特性。
2. **🪟 Cowork 体验完善**——[#2778](https://github.com/netease-youdao/LobsterAI/pull/2778)、[#2777](https://github.com/netease-youdao/LobsterAI/pull/2777) 合并后，Cowork 已具备"进度可视化 + 长任务折叠"两项关键能力，路线图信号指向"让协作模式成为默认工作面"。
3. **🌍 macOS 平台适配**——[#973](https://github.com/netease-youdao/LobsterAI/issues/973) 提示项目仍需补齐 macOS 快捷键、可能还有更多平台惯例（菜单命名、滚动行为等）的一致性。
4. **🤖 模型切换的稳定性**——[#972](https://github.com/netease-youdao/LobsterAI/issues/972) 暴露 QWEN 这类第三方模型在网关切换时仍存在状态残留问题，建议列入"多模型网关可靠性"专项。
5. **🌐 浏览器/工具调用的资源回收**——[#968](https://github.com/netease-youdao/LobsterAI/issues/968) 提示浏览器自动化任务缺少进程级生命周期管理，是 Agent 长期运行的隐性风险点。

---

## 7. 用户反馈摘要

- **🎯 真实痛点**：用户在自建 Agent 中期待"工具调用结果与用户意图精确匹配"（[#968](https://github.com/netease-youdao/LobsterAI/issues/968)）；在切换模型时期待"状态机干净、可重入"（[#972](https://github.com/netease-youdao/LobsterAI/issues/972)）；在长内容生成时期待"输出聚焦、避免答非所问"（[#971](https://github.com/netease-youdao/LobsterAI/issues/971)）。
- **💬 平台期望**：macOS 用户明确期待遵循系统级快捷键惯例（[#973](https://github.com/netease-youdao/LobsterAI/issues/973)）。
- **😶 静默失败**：IM 消息被静默丢弃（[#1035](https://github.com/netease-youdao/LobsterAI/issues/1035)）是用户最反感的"无声 bug"——无报错、无日志、用户无感知。
- **✅ 改进方向认同**：今日 PR 内容显示维护团队对"OpenClaw 网关稳定性"投入显著，用户层面的启动卡顿与 IM 可靠性问题预计将随下个版本得到缓解。

---

## 8. 待处理积压

> 以下 Issue/PR 自创建起响应较少，且涉及较深的架构/平台适配问题，建议维护者排期评估。

| 类型 | 编号 | 标题 | 创建日期 | 风险 |
|---|---|---|---|---|
| PR（OPEN） | [#1277](https://github.com/netease-youdao/LobsterAI/pull/1277) | bump the electron group across 1 directory with 2 updates | 2026-04-02 | ⚠️ 依赖长期未合并，可能阻塞 Electron 主版本升级；建议评估兼容性后合入 |
| Issue（stale OPEN） | [#968](https://github.com/netease-youdao/LobsterAI/issues/968) | skill-creator 查询杭州天气结果错误 + 浏览器未关闭 | 2026-03-27 | 🟠 影响自定义 Agent 可信度 |
| Issue（stale OPEN） | [#971](https://github.com/netease-youdao/LobsterAI/issues/971) | 内容输出错乱、答非所问 | 2026-03-27 | 🟠 影响创作者场景 |
| Issue（stale OPEN） | [#972](https://github.com/netease-youdao/LobsterAI/issues/972) | QWEN 网关重启后卡死在启动页 | 2026-03-27 | 🔴 已有 PR [#2775](https://github.com/netease-youdao/LobsterAI/pull/2775) 修复，待回归后关闭 |
| Issue（stale OPEN） | [#973](https://github.com/netease-youdao/LobsterAI/issues/973) | macOS 快捷键显示 Ctrl 而非 Cmd | 2026-03-27 | 🟡 平台一致性 |

---

### 📌 一句话总结
> **今天 LobsterAI 在"协作体验升级（cowork 卡片/折叠） + OpenClaw 网关全面加固 + 文档编辑能力拓展"三线同时取得实质进展**，新功能（文档编辑）与稳定性修复（启动逻辑、网关锁、超时）双管齐下，项目健康度向好；建议后续重点跟进 macOS 平台适配、Agent 工具结果路由及第三方模型切换的回归验证。

*数据口径：基于 2026-09-29 抓取的 GitHub Issues/PR 数据。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报 · 2026-09-29

---

## 1. 今日速览

Moltis 项目今日活跃度处于**低位**。过去 24 小时内无任何 Issues 新开/活跃/关闭记录，仅有 1 条 Pull Request 处于待合并状态（PR #1288），且暂无新版本发布。整体来看，项目处于常规维护节奏，无重大事件，仓库呈"轻活跃"状态。值得关注的信号是社区贡献者仍在围绕 provider/model registry 方向提交集成工作。

---

## 2. 版本发布

⚪ 今日无新版本发布。

---

## 3. 项目进展

今日**无 PR 被合入主干**。仅有 1 条 PR 进入待审队列：

- **[#1288 - feat: add Tsubasa provider to setup and model registry](https://github.com/moltis-org/moltis/pull/1288)**（OPEN，作者：cenab）
  - 内容：将 Tsubasa 接入现有的 provider setup 与 OpenAI 兼容 registry
  - 关键细节：
    - 环境变量：`TSUBASA_API_KEY`
    - 默认 Endpoint：`https://api.tsubasa.sh/v1`
    - 注册模型：`tsubasa-fast`、`tsubasa-pro`，均为 32,768 tokens 上下文窗口
  - 涉及文件范围：config-name 校验、生成的模板、README 等文档同步更新
  - 状态：待维护者 Review，0 评论、0 反应

**进展评估**：仓库今日实际"向前推进"距离为零，需等待 Review 与合并后才会落地。

---

## 4. 社区热点

今日唯一讨论对象即上述 PR #1288。由于 Issues 板块完全无活动，且该 PR 尚无评论与互动，**社区热度极低**，暂无多维度可分析。

- [PR #1288](https://github.com/moltis-org/moltis/pull/1288) —— 唯一待处理条目

---

## 5. Bug 与稳定性

⚪ 今日**未报告**任何 Bug、崩溃或回归问题。Issues 入口 24 小时零更新。

---

## 6. 功能请求与路线图信号

尽管今日无独立的功能请求 Issue，但 PR #1288 本身即是一项社区驱动的功能集成提案，可视为一条**路线图信号**：

- **多 Provider 扩展仍是社区参与的主要抓手**：继此前已支持的多个 OpenAI-compatible 提供商之后，社区正在自行贡献接入新的模型托管服务（如 Tsubasa）。
- **轻量接入范式趋于稳定**：PR 摘要显示新增 provider 仅涉及环境变量、默认 URL、模型列表与文档四项内容，说明 Moltis 的 provider 接入抽象已较为成熟，门槛友好，便于第三方贡献。
- **可纳入下一版本的候选**：若 PR #1288 通过 Review，预计将作为下一个 patch/minor 版本的轻量特性合入，不涉及 API 重命名或破坏性变更。

---

## 7. 用户反馈摘要

⚪ 今日 Issues 板块零活动，**无新用户评论可提炼**。无法从用户侧获取痛点、使用场景或满意度信号。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建时间 | 等待时长 | 链接 |
|------|------|------|----------|----------|------|
| PR | #1288 | feat: add Tsubasa provider to setup and model registry | 2026-09-28 | 1 天 | [查看](https://github.com/moltis-org/moltis/pull/1288) |

**提醒维护者关注**：PR #1288 已挂起 1 天且无人评论/Review，建议分配 reviewer 评估该 provider 接入的合规性与配置默认值，避免成为长期挂起项。

---

### 📊 健康度仪表盘

| 指标 | 数值 | 趋势 |
|------|------|------|
| Issues 新增 | 0 | — |
| Issues 关闭 | 0 | — |
| PR 合并 | 0 | — |
| PR 新增 | 1 | — |
| Release 发布 | 0 | — |
| 综合活跃度 | 🟡 轻活跃 | 平稳 |

> **结论**：Moltis 今日为典型的"维护期空窗日"，仓库健康度未出现负面信号，但社区参与与维护者响应均处于低位，建议关注 PR #1288 的 Review 流转，以保持贡献者参与感。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目日报
**日期：2026-09-29**
**数据来源：agentscope-ai/CoPaw**

> 说明：本期日报中 Issues/PRs 链接显示归属 `agentscope-ai/QwenPaw`，与 CoPaw 同源（数据源展示口径），以下统称 CoPaw。

---

## 1. 今日速览

CoPaw 今日进入**高活跃期**：过去 24 小时内共产生 8 条 Issue 更新、16 条 PR 更新，无新版本发布。PR/Issue 比例约 **2:1**，说明项目处于密集开发与社区反馈并行阶段。Issue 关闭率（3/8 = 37.5%）较为健康，多个 Bug 已经获得伴随 fix PR，整体开发节奏稳健。本日 PR 中包含 **6 份首次贡献者（first-time-contributor）提交**，社区贡献活跃度显著提升。

---

## 2. 版本发布

本期无新版本发布。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#8005](https://github.com/agentscope-ai/CoPaw/pull/8005) | feat(console): unify interface font scaling | **关闭** 统一 Console 字体缩放体系，新增 12–20px 字号档位、持久化与语义化 token，覆盖侧边栏、设置、聊天、文件区、MCP、Skills、Tools 等模块 |
| [#8006](https://github.com/agentscope-ai/CoPaw/pull/8006) | fix(qq): drop replayed gateway events by id and sequence | **关闭** 修复 QQ 网关重连后会话恢复导致事件重投、Agent 重复执行的严重一致性问题（对应 #7946） |
| [#8016](https://github.com/agentscope-ai/CoPaw/pull/8016) | fix(console): stabilize modal and tool config transitions | **关闭** 修复 Ant Design Modal 弹层与 Tauri 桌面端的转场抖动，提升设置中心稳定性 |

**总结**：今日共 3 个 PR 完成合并/关闭，涵盖**一致性 Bug 修复（QQ 事件重投）、UI 体系化（字体缩放）、交互稳定性（Modal 转场）**三个方向。Console 字体缩放合并后，用户期待已久的桌面端可调字号需求（#7999、#6252）可视为已落地。

---

## 4. 社区热点

本期 Issues 评论数普遍偏低（最高仅 2 条），但话题密度高、分布广，反映多个并行问题线：

- **[#8009](https://github.com/agentscope-ai/CoPaw/issues/8009)** Oversized image stored in context makes a session permanently unusable
  - 痛点直指**会话级稳定性**：一次被 Provider 拒绝的大图会让整段对话永久失效。
- **[#8015](https://github.com/agentscope-ai/CoPaw/issues/8015)** 支持配置自定义 Skill/Plugin 市场源（自托管 · 内网/离线部署）
  - 反映**企业/内网/离线部署**用户的强诉求，对项目 B 端可用性影响深远。
- **[#7991](https://github.com/agentscope-ai/CoPaw/issues/7991)** TaskTracker `_runs` zombie entries
  - 反映 Dashboard 与 API 状态计数不一致，影响**监控/调度可观测性**。
- **[#8013](https://github.com/agentscope-ai/CoPaw/issues/8013)** 技能池广播 30s 超时
  - 反映 Console 后端长任务未配套前端可中断或可恢复的传输机制，是**大文件/批量操作 UX** 典型痛点。

整体诉求集中在：**会话鲁棒性、桌面 UI 可调、企业部署能力、UI 长任务处理**。

---

## 5. Bug 与稳定性

按严重程度排序（高 → 低）：

| 严重度 | Issue | 描述 | 已有 fix PR |
|---|---|---|---|
| 🔴 高 | [#8009](https://github.com/agentscope-ai/CoPaw/issues/8009) | 被 Provider 拒绝的大图会毒化整段会话上下文，导致后续所有消息（含纯文本）均 400 | ✅ [#8010](https://github.com/agentscope-ai/CoPaw/pull/8010)（first-time-contributor，待审） |
| 🟠 中高 | [#7946](https://github.com/agentscope-ai/CoPaw/issues/7946)（已关） | QQ 网关重连后事件重投，触发重复执行非幂等命令 | ✅ [#8006](https://github.com/agentscope-ai/CoPaw/pull/8006)（已关闭） |
| 🟠 中 | [#7991](https://github.com/agentscope-ai/CoPaw/issues/7991) | TaskTracker zombie run 导致 `running_task_count` 与 `/api/chats` 不一致 | ✅ [#8007](https://github.com/agentscope-ai/CoPaw/pull/8007)（first-time-contributor，待审） |
| 🟠 中 | [#8013](https://github.com/agentscope-ai/CoPaw/issues/8013) | 技能池广播/下载 30s 前端硬超时；解压后 80.1 MB 文件无法落到目标工作区 | ❌ 暂无对应 PR |
| 🟡 中 | [#8011](https://github.com/agentscope-ai/CoPaw/issues/8011) | Telegram HTML formatter 不能正确处理 `c++`、Objective-C info 字符串及 `~~~`/嵌套代码块 | ✅ [#8012](https://github.com/agentscope-ai/CoPaw/pull/8012)（first-time-contributor，待审） |
| 🟡 中低 | [#6252](https://github.com/agentscope-ai/CoPaw/issues/6252)（已关） | Linux 桌面端 Ctrl +/- / Ctrl+wheel 缩放无效 | ⚠️ 部分由 #8005 字体缩放体系间接覆盖，但原生快捷键绑定未单独修复 |

**稳定性观察**：3 个核心 Bug 已有配套 PR，会话毒化（#8009）和技能池超时（#8013）是当前最值得优先 review 的稳定性风险。

---

## 6. 功能请求与路线图信号

| 需求 | Issue | 是否已有 PR | 路线图可能性 |
|---|---|---|---|
| 桌面端 UI 字体可调 | [#7999](https://github.com/agentscope-ai/CoPaw/issues/7999)（已关） | ✅ #8005 已合 | **已落地**，等下一版本（推测 2.2.2）发布 |
| 自托管 Skill/Plugin 市场源 | [#8015](https://github.com/agentscope-ai/CoPaw/issues/8015) | ❌ | 高 — 涉及企业部署关键能力，建议列入 2.2.x 路线图 |
| Console 持久化聊天记录 | — | ✅ [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931)（进行中，09-22 起） | 中 — 持久化分页转写历史 + SSE 去重，是 Chat 模块重大升级 |
| Playwright 默认参数排除 | — | ✅ [#7987](https://github.com/agentscope-ai/CoPaw/pull/7987) | 中 — 完善 browser 工具配置面 |

**信号总结**：下一版本（推测 2.2.2）大概率包含**字体缩放体系 + QQ/Telegram 通道修复 + TaskTracker 鲁棒性**，而**自托管市场源**是企业用户增长的关键卡点，建议维护者重点评估。

---

## 7. 用户反馈摘要

提炼自 Issues 摘要：

- **企业/内网用户**（#8015）：当前内置公网市场源在内网/离线环境完全不可用，"补丁级 workaround 不可接受"，希望一等公民配置。
- **桌面端用户**（#7999、#6252）：视力较弱用户、高 DPI 显示器用户、电视投屏场景对字号调节有刚需；Linux 用户反馈原生缩放快捷键失效。
- **多通道重度用户**（#7946、#8011）：QQ 机器人"重连后双发消息"、Telegram "代码块渲染异常"严重影响生产可用性，反映长连接通道在异常路径下的鲁棒性需补强。
- **Console 重度用户**（#8013）：技能池批量分发到 Agent 的 UX 缺失 —— 没有进度条、没有可恢复传输，30s 硬超时直接报错，期望与底层能力匹配的前端体验。
- **Agent 稳定性受害者**（#8009）：一次图片拒绝导致整段会话死亡，用户痛点非常尖锐，说明"已失败 payload 必须从上下文中清理"是会话引擎的关键不变量。

总体满意度信号：用户在多个场景下仍在主动报告问题并提供复现细节，说明社区对项目**仍有信心并愿意投入时间协助迭代**。

---

## 8. 待处理积压

| 类型 | 编号 | 主题 | 状态 |
|---|---|---|---|
| 长期未合并 PR | [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931) | feat(chat): add durable paginated transcript history | 自 09-22 起开放 7 天，涉及核心 Chat 数据模型，review 优先级建议提升 |
| 长期未合并 PR | [#7871](https://github.com/agentscope-ai/CoPaw/pull/7871) | fix(tools): prevent literal markers from bypassing output truncation | 自 09-18 起开放 11 天，**安全性/正确性相关**，建议尽快审 |
| 无 fix PR 的新 Bug | [#8013](https://github.com/agentscope-ai/CoPaw/issues/8013) | 技能池下载 30s 超时 | 报告当日即明确根因（前端 AbortController + 后端无流式响应），需要有人认领 |
| 潜在跟进 Issue | [#8015](https://github.com/agentscope-ai/CoPaw/issues/8015) | 自托管市场源 | 无 PR，企业部署关键路径，建议维护者亲自回应以避免冷启动失败 |

---

## 📊 项目健康度评分

| 维度 | 评估 |
|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ 24h 16 PR / 8 Issue |
| 关闭率 | ⭐⭐⭐⭐ Issues 37.5%、PRs 18.8% |
| 社区贡献 | ⭐⭐⭐⭐⭐ 6 个 first-time-contributor PR |
| Bug 修复闭环 | ⭐⭐⭐⭐ 多数核心 Bug 已有配套 fix |
| 发布节奏 | ⭐⭐⭐ 本期无 release，需关注是否积压 |
| 路线图清晰度 | ⭐⭐⭐ 自托管市场源等关键需求待回应 |

**总评**：项目处于**密集迭代期**，社区参与度极高，研发闭环良好，但建议维护者在 24–48 小时内回应 [#8015](https://github.com/agentscope-ai/CoPaw/issues/8015)（企业部署关键信号）并推进 [#7931](https://github.com/agentscope-ai/CoPaw/pull/7931)、[#7871](https://github.com/agentscope-ai/CoPaw/pull/7871) 的 review，以避免高价值 PR 因等待而失去 momentum。

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

# ZeptoClaw 项目动态日报
**日期：2026-09-29**

---

## 1. 今日速览

ZeptoClaw 今日活跃度处于**中等偏稳**水平。仓库在 24 小时内新开 2 条 Issues（均处 OPEN 状态）、提交 1 条 PR（待合并状态），未发布新版本。其中维护者 qhkm 主动发起并提交了关于工具输出处理的 Feature Issue (#707) 与对应实现 PR (#708)，形成完整的"需求—实现"闭环；同时收到 1 条用户主动提出的功能咨询 #709。整体节奏平稳，提交质量较高，但暂无合并/关闭动作推进。

---

## 2. 版本发布

无新版本发布。当前进度维持在代码提交层面，尚未触达 Release 流程。

---

## 3. 项目进展

**今日尚无 PR 合并**，但有一条与 Issue 强对齐的高质量提交：

- **PR #708 `feat(tools): spill oversized tool output instead of discarding it`**
  - 链接：https://github.com/qhkm/zeptoclaw/pull/708
  - 提交者：qhkm（项目维护者）
  - 状态：OPEN（待合并）
  - 内容：将原本"截断即丢弃"的超大工具输出（>2,000 行 / >50KB）改为**溢出落盘（spill-to-disk）**机制，写入 `~/.zeptoclaw/sessions/<key>/spill/<seq>-<tool>.txt`（0600 权限，位于 0700 目录），上下文内仅保留预览、路径与一行索引，使模型可按需回查。
  - 推进意义：解决 shell、grep、filesystem、find 工具链中长期存在的数据不可恢复问题，提升长任务执行的可靠性。
  - 关联 Issue：https://github.com/qhkm/zeptoclaw/issues/707

**项目整体推进幅度**：技术债层面的实质性改进，但因 PR 仍待审，距离"落地"尚有 review → merge → release 的流程距离。

---

## 4. 社区热点

今日**最值得关注的讨论**集中在两条强关联的条目上：

| 排名 | 条目 | 类型 | 关注点 |
|---|---|---|---|
| 1 | Issue #707 | 功能/缺陷 | 工具输出溢出丢失问题，影响所有调用 shell/grep/find 的场景 |
| 2 | PR #708 | 关联实现 | 对 #707 的直接工程回应 |
| 3 | Issue #709 | 用户提问 | 用户询问是否支持类 ohmypi 的 `/goal` 模式 |

**背后诉求分析**：
- #707/#708：反映用户与模型在长输出场景下"上下文窗口受限"的核心痛点——开发者希望大输出能"暂存而非蒸发"。
- #709：表明外部用户（abda11ah）正在横向对比类似项目（ohmypi/omp），关心 ZeptoClaw 是否具备**自主目标驱动循环**能力。这是评估类代理框架成熟度的重要指标。

---

## 5. Bug 与稳定性

今日未出现显式崩溃/回归报告。但以下问题具有稳定性影响，应视作"潜在缺陷"关注：

1. **【高严重度】Issue #707 — 工具输出截断即丢弃**
   - 链接：https://github.com/qhkm/zeptoclaw/issues/707
   - 标签：`P2-high`
   - 影响范围：`truncate_tool_output` 实现被 `shell`、`grep`、`filesystem`、`find` 共同调用，覆盖大部分日常工具调用链路
   - 修复进展：**已有对应 PR #708 待合并**，若审阅通过即可闭环
   - 备注：该项被维护者自身标注为高优先级（`P2-high`），可视为"维护者主动认领的可靠性债"

其他常见故障类别（崩溃、内存、回归）暂无报告。

---

## 6. 功能请求与路线图信号

**用户主动提出的新需求：**

- **Issue #709 `/goal` 模式**
  - 链接：https://github.com/qhkm/zeptoclaw/issues/709
  - 诉求：希望 ZeptoClaw 具备类似 ohmypi（omp）的 `/goal` 模式，agent 能持续工作直到预设条件满足
  - 路线图可能性评估：⭐⭐（中低）
    - 当前仓库仅 2 条 OPEN Issues，且 #709 缺乏维护者响应，无法判断是否进入路线图
    - 但 `/goal` 模式属于代理框架的"高阶自治能力"，若 ZeptoClaw 定位为类 omp/Cline/Claude Code 的自主代理，则具备落地价值

**维护者主导的功能推进：**

- **Issue #707 / PR #708（tool spill）**
  - 已被维护者主动提入 `P2-high` 队列并附实现，**几乎确定**纳入下一版本
  - 一旦合并，将成为 ZeptoClaw 在"长任务可靠性"维度的标志性改进

---

## 7. 用户反馈摘要

由于今日 Issues 均无评论（comments: 0），直接反馈信号有限。可提炼的信号点如下：

- **abda11ah（Issue #709）**：横向对比 ohmypi 项目，关注 ZeptoClaw 的自主目标循环能力；当前仓库 README/文档是否清晰传达能力边界，是该用户的潜在关注点。
- **qhkm（Issue #707）**：从维护者自述看，团队已意识到工具输出"截断即丢失"是反复出现的设计痛点，主动立项修复，体现**对开发者体验的自我审视**。
- **互动数据**：所有条目 👍=0、评论=0，社区响应尚未发酵，建议维护者主动置顶或关联 PR 以引导讨论。

---

## 8. 待处理积压

目前仓库**待处理积压压力较小**，OPEN 状态 Issues 仅 2 条且全部在 24 小时内创建，不存在长期未响应项。建议维护者关注以下两点：

1. **PR #708 审阅流转**
   - 链接：https://github.com/qhkm/zeptoclaw/pull/708
   - 与 Issue #707 一一对应，审阅通过即可关闭 #707，避免需求与实现长期分叉

2. **Issue #709 首次响应**
   - 链接：https://github.com/qhkm/zeptoclaw/issues/709
   - 新用户首次接触提出的能力咨询，及时回应有助于建立社区信任与贡献者漏斗；可考虑在 README 或文档中明确说明现有 agent 循环机制（如有）

---

### 📊 项目健康度总评

| 维度 | 评分 | 备注 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐☆☆ | 日均 2 Issues + 1 PR，处于中型项目常规水平 |
| 代码质量信号 | ⭐⭐⭐⭐☆ | 维护者主动识别并修复 P2-high 设计债 |
| 社区互动 | ⭐⭐☆☆☆ | 新条目尚无评论与点赞，需主动引导 |
| 版本节奏 | ⭐⭐☆☆☆ | 当日无 Release，提交未流转至 merge |
| 待办压力 | ⭐⭐⭐⭐⭐ | OPEN 积压极低（仅 2 条），处理窗口充裕 |

**一句话总结**：维护者今日完成了一项高价值可靠性改进的"自提自答"，项目处于**自我迭代的健康小周期**内，下一步关键动作是推动 PR #708 完成合并并出包。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报

**日期：2026-09-29**
**项目：ZeroClaw (github.com/zeroclaw-labs/zeroclaw)**

---

## 1. 今日速览

ZeroClaw 今日继续保持高强度迭代节奏：过去 24 小时内共更新 50 条 Issues 与 50 条 PRs，其中 Issues 关闭 24 条、PR 合并/关闭 11 条，呈现"高吞吐、高关闭率"的健康态势。社区讨论聚焦于 **v0.9.0 网关分层、零代码（ZeroCode）体验改进、插件系统从编译期到运行时的迁移、以及多租户 RBAC/OIDC 身份体系** 四大方向。整体活跃度极高，但仍有 S0 级别的安全/数据丢失类 Issue 待修复（#11197），且近 40 条 PR 仍处待合并状态，提示维护者审阅压力较大。

---

## 2. 版本发布

**今日无新版本发布。**

从 PR #10814（[Release efficiency tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/10814)）的状态来看，团队正聚焦于降低重复构建、缩短发布准备时长，项目仍在为 v0.8.6/v0.9.0 做 release engineering 层面的打磨。

---

## 3. 项目进展

### 3.1 已合并/关闭的重要 PR（推进项）

| PR | 主题 | 影响 |
|---|---|---|
| [#11131](https://github.com/zeroclaw-labs/zeroclaw/pull/11131) | **feat(runtime): 守护进程独占 observer 事件总线** | 解锁网关离线场景下 ZeroCode/TUI 仍能收到日志订阅事件；这是 v0.9.0 网关分层（#7432 tracker）的关键前置依赖 |
| [#11089](https://github.com/zeroclaw-labs/zeroclaw/pull/11089) | relay 浏览器注册页链接预填充（依赖项已合入） | 推动 [#10315](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) 中"零手工 TLS 浏览器注册"工作落地 |
| [#11098](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)（在 tracker #8850 内合并） | 工具 egress 授权 + 加载 verdict | 将可选 channel/tool 从编译期 feature flag 转向运行时插件（[#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)）的核心一环 |
| [#11082](https://github.com/zeroclaw-labs/zeroclaw/issues/8289)（在 tracker #8289 内合并） | OIDC 入站认证合并切片 | 完成 OIDC 入站认证里程碑的合并切片，#8289 进入收尾期 |
| [#11178](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)（在 tracker #8850 内合并） | manifest `provides` 镜像准入 | 停止在构造/routing 通道上，仍是 runtime plugin 化工作的进展 |

### 3.2 已关闭的重要 Issue

- [#10549](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) **RFC：简化 RFC 投票流程** — 移除强制的 48h/72h 讨论窗口，让 REVISE 直接停止当前快照。已 accepted。
- [#6250](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) **网关配置/快速入门认证在路由层强制实施** — 通过 tower Layer 替换散落的 `require_auth` 调用，标准化网关鉴权。
- [#4853](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) **支持从 `.well-known/agent-skills` 发现索引安装 skills** — 配合 Agent Skills 标准化工作，Cloudflare/Vercel 等方已采用。
- [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) **S0 Bug：并发 file_edit/file_write 静默丢失写入** — `parallel_tools` 路径下的未同步写，已修复关闭。
- [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) **S0 Bug：Code/ACP 局部轮次在进程退出前消失** — ZeroCode 关闭生命周期问题已修复。
- [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) **S0 Bug：多模态图片封顶驱逐重写历史并失效缓存前缀** — 涉及 Anthropic 兼容 provider 的 cache 失效问题已修复。

> **综合判断**：今日完成的工作显著推进了 **v0.9.0 网关分层** 与 **运行时插件化** 两条主线，OIDC/RBAC 体系接近收尾。但仍有大量 XL 大型 PR 处于待合并状态，反映项目正处于大版本切换前的"集成瓶颈"阶段。

---

## 4. 社区热点

| 排行 | Issue | 评论数 | 状态 | 关注点 |
|---|---|---|---|---|
| 1 | [#10549 RFC 简化投票](https://github.com/zeroclaw-labs/zeroclaw/issues/10549) | 12 | CLOSED | 治理流程优化 |
| 2 | [#5982 多租户 per-sender RBAC](https://github.com/zeroclaw-labs/zeroclaw/issues/5982) | 10 | OPEN | SaaS 化部署刚需 |
| 3 | [#8832 插件化 Kanban 看板](https://github.com/zeroclaw-labs/zeroclaw/issues/8832) | 9 | OPEN | 智能体工作面板 |
| 4 | [#4853 .well-known skill 发现](https://github.com/zeroclaw-labs/zeroclaw/issues/4853) | 8 | CLOSED | 生态标准化 |
| 5 | [#8850 插件化运行时迁移 tracker](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) | 6 | OPEN | 架构级 tracker |
| 6 | [#10315 浏览器注册入口](https://github.com/zeroclaw-labs/zeroclaw/issues/10315) | 5 | OPEN | ZeroRelay 前端体验 |
| 7 | [#6250 网关路由层鉴权](https://github.com/zeroclaw-labs/zeroclaw/issues/6250) | 5 | CLOSED | 安全基建 |
| 8 | [#9816 Anthropic provider 成本 0](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | 5 | OPEN | 成本核算可信度 |

**诉求分析**：
- **多租户/SaaS 化**（#5982）是当前最强烈的企业诉求：希望在 ZeroClaw 之上构建服务化的 Agent 平台，按发送方隔离权限；
- **插件化架构**（#8832、#8850）反映社区希望 ZeroClaw 不只是单体内核，而是可被外部扩展的应用框架；
- **ZeroRelay 用户体验**（#10315、#11099、#10592）三连击显示团队正集中力量让"非工程师用户"也能完成节点注册；
- **成本核算可信度**（#9816）是隐性但关键的问题：直接影响日/月预算告警能否生效，关乎所有 Anthropic 用户的财务控制能力。

---

## 5. Bug 与稳定性

### 5.1 S0 — 数据丢失 / 安全风险（最高优先级）

| Issue | 描述 | 状态 | 是否有 Fix PR |
|---|---|---|---|
| [#11197](https://github.com/zeroclaw-labs/zeroclaw/issues/11197) | **会话恢复时，管理员撤销授权后仍能恢复已转发的环境变量** — 安全沙箱 / 身份访问 | OPEN（新增） | ❌ 未见 |
| [#11136](https://github.com/zeroclaw-labs/zeroclaw/issues/11136) | `parallel_tools` 下并发 file_edit/file_write 静默丢失写入 | ✅ CLOSED | ✅ 已修 |
| [#10121](https://github.com/zeroclaw-labs/zeroclaw/issues/10121) | ZeroCode/ACP 局部轮次在进程结束前消失 | ✅ CLOSED | ✅ 已修 |
| [#10778](https://github.com/zeroclaw-labs/zeroclaw/issues/10778) | 多模态图片封顶驱逐使 Anthropic cache prefix 失效 | ✅ CLOSED | ✅ 已修 |

### 5.2 P1 — 重要功能缺陷

| Issue | 描述 | 状态 |
|---|---|---|
| [#9816](https://github.com/zeroclaw-labs/zeroclaw/issues/9816) | Anthropic provider 报 $0.00，预算上限永不触发 | OPEN（in-progress） |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands = false` 不生效，`rm` 在白名单仍被父路径硬拦截 | ✅ CLOSED |
| [#10645](https://github.com/zeroclaw-labs/zeroclaw/issues/10645) | 委派子循环未携带 cost-tracking 上下文 | ✅ CLOSED |
| [#10644](https://github.com/zeroclaw-labs/zeroclaw/issues/10644) | 后台委派结果未绑定 owner principal | ✅ CLOSED |
| [#10802](https://github.com/zeroclaw-labs/zeroclaw/issues/10802) | `session/list-acp` 与 `turn_end` 报告不同 `message_count` | ✅ CLOSED |
| [#10887](https://github.com/zeroclaw-labs/zeroclaw/issues/10887) | 非视觉能力门控对"marker-shaped prose"误杀 turn | ✅ CLOSED |
| [#10785](https://github.com/zeroclaw-labs/zeroclaw/issues/10785) | ZeroCode 通知滞后错误取消所有运行中的 turn | ✅ CLOSED |
| [#10530](https://github.com/zeroclaw-labs/zeroclaw/issues/10530) | OpenAI 兼容网关未透传 Anthropic extended-thinking 参数 | ✅ CLOSED |
| [#10008](https://github.com/zeroclaw-labs/zeroclaw/issues/10008) | 缺乏 wasi:http hook 拨号钉死地址集的测试覆盖 | ✅ CLOSED |

### 5.3 P2 / 中等严重度

- [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) 守护进程 launcher stdout/stderr 未设大小/年龄/文件数上限 ✅ 已关闭
- [#10186](https://github.com/zeroclaw-labs/zeroclaw/issues/10186) 终端 fallback 文本绕过实时投递 seam ⚠️ 仍 OPEN
- [#10280](https://github.com/zeroclaw-labs/zeroclaw/issues/10280) Web 搜索 GET 传输错误未归一化即透传给模型 ✅ 已关闭

**稳定性判断**：S0 级数据丢失/安全风险大部分已闭合，但 **#11197（环境变量恢复绕过授权撤销）仍 OPEN**，建议维护者优先处置。

---

## 6. 功能请求与路线图信号

### 6.1 高确定性进入路线图（已有对应 PR）

| 需求 | 关联 Issue / PR | 信号强度 |
|---|---|---|
| 共享原子 SessionBackend 契约 | [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | 🟢 强（XL PR 在 master 集成中） |
| 应用层组合 DefaultCapabilities | [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) | 🟢 强（XL PR, 架构级） |
| ZeroCode 标准编辑器（undo/redo/剪切板） | [#11175](https://github.com/zeroclaw-labs/zeroclaw/pull/11175) | 🟢 强（已开 3 天，XL） |
| 自服务 `relay claim` 注册 | [#10592](https://github.com/zeroclaw-labs/zeroclaw/pull/10592) | 🟢 强 |
| 注册时打印配对链接 + 二维码 | [#11099](https://github.com/zeroclaw-labs/zeroclaw/pull/11099) | 🟢 强 |
| RPC 与 HTTP 配置路由 parity | [#11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172), [#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176) | 🟢 强（v0.9.0 P4） |
| 持久化会话附件（≤4 个） | [#10407](https://github.com/zeroclaw-labs/zeroclaw/pull/10407) | 🟢 强（XL 跨多组件） |
| Schema V4 迁移废弃键 | [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218), [#11217](https://github.com/zeroclaw-labs/zeroclaw/pull/11217) | 🟢 强 |
| Backup 真正实现 encrypt/compress/destination | [#11224](https://github.com/zeroclaw-labs/zeroclaw/pull/11224) | 🟢 强 |
| RPC 有界可回放订阅 hub | [#11167](https://github.com/zeroclaw-labs/zeroclaw/pull/11167) | 🟢 强（依赖 #11131 已合并） |
| 委派文件系统工具尊重目标 workspace | [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | 🟢 强 |
| CLI 在 SIGPIPE 时静默退出 | [#11173](https://github.com/zeroclaw-labs/zeroclaw/pull/11173) | 🟢 强（小但刚需） |
| 修复 `logs_subscribe` 在 master 上失败 | [#11227](https://github.com/zeroclaw-labs/zeroclaw/pull/11227) | 🟢 强 |
| 插件命名 TLS profile 硬化 | [#11228](https://github.com/zeroclaw-labs/zeroclaw/pull/11228) | 🟢 强 |
| 权限 profile selector 在 agent 重命名时级联 | [#11226](https://github.com/zeroclaw-labs/zeroclaw/pull/11226) | 🟢 强 |
| 委派保留 owner 身份 | [#11225](https://github.com/zeroclaw-labs/zeroclaw/pull/11225) | 🟢 强 |

### 6.2 中长期诉求（Open Issue，无明确 PR）

- **多租户 RBAC（#5982）** — 已被接受，方向收窄为"基于现有 agent/risk-profile 模型构建 sender roles"，是 v0.9.0 之后的 SaaS 化基石；
- **插件化 Kanban（#8832）** — 已从 RFC 队列中移出，转为普通 issue/PR 路径；
- **OIDC 收尾（#8289）** — 进入 close-out 阶段；
- **网关配对 token 绑定 roster 用户（#10573）** — 已接受，等 #10248/#10259 落地后推进；
- **运行时与网关交付 tracker（#7432）** — v0.8.6/v0.9.0 单一真相源。

> **路线图信号**：项目正处在大版本切换

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*