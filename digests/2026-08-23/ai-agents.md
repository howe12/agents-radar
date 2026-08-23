# OpenClaw 生态日报 2026-08-23

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-08-23 00:56 UTC

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

# OpenClaw 项目动态日报 · 2026-08-23

---

## 1. 今日速览

OpenClaw 在过去 24 小时内呈现**高活跃度、强积压**的特征：共触发 1000 条 Issue/PR 更新（Issue 500、PR 500），其中 Issue 新开/活跃 474 条、关闭 26 条；PR 待合并 436 条、合并/关闭 64 条，关闭率约 12.8%。当前主线工作围绕 **v2026.8.1-beta.2** 的发布验证展开（[#125626](https://github.com/openclaw/openclaw/issues/125626)，19 条评论），同时社区集中暴露了 v2026.8.1-beta.2 引入的多起回归（事件循环阻塞、SQLite 损坏、vLLM 思维链解析错误等）。无新版本发布，社区关注点明显从"功能推进"转向"稳定性修复"。

---

## 2. 版本发布

**无新版本发布**。当前主线为 v2026.8.1-beta.2，仍处于发布验证阶段（见 [#125626](https://github.com/openclaw/openclaw/issues/125626)），尚未转入正式版。建议关注该 issue 收尾情况。

---

## 3. 项目进展

今日共 64 个 PR 被合并/关闭，以下为推进力较强的关键变更：

| PR | 标题 | 状态 | 影响维度 |
|---|---|---|---|
| [#128047](https://github.com/openclaw/openclaw/pull/128047) | fix(ui): make login recovery commands copyable | CLOSED | Web-UI 体验 |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | feat(ui): review install policy warnings | CLOSED | 安全边界 + UI |
| [#116489](https://github.com/openclaw/openclaw/pull/116489) | feat(security): require acknowledgement for install policy warnings | CLOSED | 安全边界 |
| [#91268](https://github.com/openclaw/openclaw/pull/91268) | fix: stop doctor misreporting trusted-proxy gateways as unauthenticated | OPEN（待合并） | Gateway 诊断准确性 |
| [#126424](https://github.com/openclaw/openclaw/pull/126424) | fix(gateway): keep conversation delivery within agent bindings | CLOSED | 多通道消息投递 |
| [#125471](https://github.com/openclaw/openclaw/pull/125471) | fix(models): keep Claude CLI OAuth available in Control UI | CLOSED | 认证/可用性 |
| [#127818](https://github.com/openclaw/openclaw/pull/127818) | perf(ui): stop long-lived request/session caches growing | OPEN | Web-UI 性能 |
| [#113089](https://github.com/openclaw/openclaw/pull/113089) | feat(agents): return sessionId from sessions_spawn | OPEN | 子代理可观测性 |

**整体推进度评估**：当日合并方向集中在 **Web-UI 体验**、**认证稳定性** 与 **Gateway 诊断准确性**，未涉及大型新功能落地。值得注意的有利信号是安全策略警告（install policy）相关双 PR（#120900 + #116489）已就位，为后续插件供应链治理打好基础。

---

## 4. 社区热点

按评论数排序的 Top 讨论：

1. **[#125626](https://github.com/openclaw/openclaw/issues/125626) — Release validation: v2026.8.1-beta.2**（19 评论）
   发布验证工作单，是当前项目主线，承载多名测试人员结果回收。

2. **[#68596](https://github.com/openclaw/openclaw/issues/68596) — Configurable streaming watchdog timeout**（15 评论，👍8）
   用户使用 kimi-k2.5、DeepSeek-R1 等长推理模型时频繁触发 30 秒流看门狗告警，诉求是暴露阈值配置。

3. **[#96834](https://github.com/openclaw/openclaw/issues/96834) — WhatsApp 1:1 入站图片卡死主链路 3 分钟**（14 评论）
   多模态图片进入 WhatsApp 直聊时，主代理 lane 被阻塞 ~3 分钟，`active_reply_work/queued_work_without_active_run` 滞留。

4. **[#51429](https://github.com/openclaw/openclaw/issues/51429) — 工作路径被硬编码为 `/Users/wangtao`**（12 评论）
   一名用户反馈安装后工作区被建在 `wangtao` 的本地路径下，疑似某提交者遗留的硬编码，已进入 stale 阶段。

5. **[#85030](https://github.com/openclaw/openclaw/issues/85030) — MCP 工具未注入 subagent 会话**（12 评论，👍6）
   `sessions_spawn` 创建的子会话不接收 `bundle-mcp` / per-tool / per-agent 允许列表中的 MCP 工具，子代理只剩内置能力。

**诉求分析**：用户当前最强烈的两类诉求是 **"流式/长任务阈值可调"** 与 **"子代理/工具链可靠性"**，反映 OpenClaw 正从"单代理体验"向"多代理编排场景"演进，基础设施层尚未完全跟上。

---

## 5. Bug 与稳定性

按严重程度排列今日/近期高优 Bug：

### 🔴 P0 级（崩溃 / 数据丢失）

- **[#124788](https://github.com/openclaw/openclaw/issues/124788)** — beta.2 gateway 事件循环每 ~10 分钟阻塞约 100 秒
  - 现象：WebSocket 死亡、HTTP `/ready` 无响应、cron 调度停滞，关闭所有内存插件后仍复现
  - 关联发布验证单 [#125626](https://github.com/openclaw/openclaw/issues/125626)

- **[#126821](https://github.com/openclaw/openclaw/issues/126821)** — SQLite 在全新重建的数据库上 15–24h 内再次损坏
  - 现象：freelist 计数错误、出现"paralyzed gateway"模式（拒绝所有服务但永不退出），WSL2 + 2026.8.1-beta.2 上 5 天 5 次

### 🟠 P1 级（功能失效 / 消息丢失）

- **[#96834](https://github.com/openclaw/openclaw/issues/96834)** — WhatsApp 入站图片卡死主 lane
- **[#67777](https://github.com/openclaw/openclaw/issues/67777)** — Subagent 完成回执在直送超时/drain/orphan prune 时丢失
- **[#72015](https://github.com/openclaw/openclaw/issues/72015)** — `active-memory` 插件在多代理 gateway 上引起 QMD 启动阻塞
- **[#97616](https://github.com/openclaw/openclaw/issues/97616)** — Hook/tool 子进程未被回收，僵尸累积导致运行时退化
- **[#89278](https://github.com/openclaw/openclaw/issues/89278)** — Codex OAuth 刷新成功但 cron/heartbeat 因 10s 鉴权超时失败（**已有 PR 待合并：[#125471](https://github.com/openclaw/openclaw/pull/125471)**）
- **[#108215](https://github.com/openclaw/openclaw/issues/108215)** — 上下文使用率从 57% 突降至 13%，无 compaction 计数变化
- **[#49381](https://github.com/openclaw/openclaw/issues/49381)** — 飞书直聊在模型主备切换后产生重复最终回复
- **[#112246](https://github.com/openclaw/openclaw/issues/112246)** — Codex app-server 稳定 session-key 绑定无 TTL 永久作废
- **[#113701](https://github.com/openclaw/openclaw/issues/113701)** — 大工具输出超上下文窗口后 compaction 无法回收，会话进入失败循环

### 🟡 P2 / 回归类

- **[#85030](https://github.com/openclaw/openclaw/issues/85030)** — MCP 工具未注入子代理
- **[#124284](https://github.com/openclaw/openclaw/issues/124284)** — beta.2 中 vLLM openai-completions + 思维链产出畸形 XML 工具调用
- **[#105528](https://github.com/openclaw/openclaw/issues/105528)** — Windows 上 `exec`/`read` 工具静默返回空输出（2026.6.x 回归）
- **[#115450](https://github.com/openclaw/openclaw/issues/115450)** — Hook 超时释放 lane 后子进程未被清理
- **[#111630](https://github.com/openclaw/openclaw/issues/111630)** — `minimax-portal/MiniMax-M3` 在 `/status` 中显示 `?/1.0m`
- **[#58957](https://github.com/openclaw/openclaw/issues/58957)** — 模型切换时携带上下文过大导致静默失败（**已关闭**）

**修复配套情况**：除 Codex OAuth、doctor 诊断外，多数 P0/P1 Bug 暂无对应 fix PR，仍处于 `needs-maintainer-review` / `needs-product-decision` 状态，存在明显修复缺位。

---

## 6. 功能请求与路线图信号

按可纳入下一版本的潜力排序：

| 诉求 | Issue | 现状信号 |
|---|---|---|
| **流式看门狗阈值可配置** | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 👍8，呼声高，已有 4 个月历史 |
| **Gateway 重启后会话恢复** | [#57425](https://github.com/openclaw/openclaw/issues/57425) | 关联子代理丢失（#67777、#78055），三处协同需求 |
| **Subagent `sessionId` 返回** | — | PR [#113089](https://github.com/openclaw/openclaw/pull/113089) 已 OPEN 并 ready-for-review |
| **session-memory hook 覆盖 reset/prune** | [#51572](https://github.com/openclaw/openclaw/issues/51572) | 与 #57425 同源，扩展点设计可合并 |
| **每会话开发工具模式切换** | — | PR [#128046](https://github.com/openclaw/openclaw/pull/128046) 已 OPEN |
| **UI/UX 整体重设** | [#75947](https://github.com/openclaw/openclaw/issues/75947) | "off-meta tidepool"，低优先级但反映长期诟病 |
| **TUI `--deliver` 默认值可配置** | [#33102](https://github.com/openclaw/openclaw/issues/33102) | 小但长期未处理 |

**路线图判断**：下一版本最可能落地的方向是 **"子代理可观测性 + 会话恢复"**（多 PR/Issue 协同），其次是 **"UI 性能与体验优化"**（PR 活跃且体积可控）。长推理模型适配（#68596）属于体验刚需，但暂无对应 PR，建议维护者主动介入。

---

## 7. 用户反馈摘要

从评论中提炼的真实用户痛点：

- **"长任务静默失败"** 是反复出现的主题：用户在 kimi/DeepSeek 推理（#68596）、Feishu 模型切换（#49381）、Codex OAuth 续期（#89278）等场景下，遭遇失败无错误信息的窘境，**期望明确的状态反馈与可调阈值**。

- **"子代理成为不可控黑盒"**：多个 Issue 反映 subagent 输出丢失（#67777）、状态错乱（#78055）、MCP 工具缺失（#85030）、ACP 子会话零字节转录（#95759）。用户希望获得"父-子"之间的明确契约与可观测性。

- **"Gateway 不健康时无法自救"**：beta.2 的事件循环阻塞（#124788）和 SQLite 损坏（#126821）让用户被迫频繁手工重启，**反映缺乏健康守护与降级通道**。

- **"Windows / WSL 用户被边缘化"**：#105528 报告 `exec`/`read` 静默返回空输出、#60612 报告 Doctor 关于 NVM node 的警告无法修复，社区跨平台一致性仍是长期短板。

- **"已关闭的 #51429 暴露协作卫生"**：用户对工作目录被硬编码为陌生用户名感到意外，提示对提交审查流程的轻度不信任。

- **正面信号**：[#120900](https://github.com/openclaw/openclaw/pull/120900) / [#116489](https://github.com/openclaw/openclaw/pull/116489) 引入的"安装策略警告需确认"机制在社区中获得正向反馈，CLI 体验改善被多位测试者提及。

---

## 8. 待处理积压（提醒维护者关注）

以下 Issue/PR 已长期处于"等待维护者审查/产品决策"状态，建议优先纳入本周评审：

| 编号 | 主题 | 创建日期 | 等待时长 | 标签 |
|---|---|---|---|---|
| [#125626](https://github.com/openclaw/openclaw/issues/125626) | beta.2 发布验证 | 2026-08-18 | 5 天 | 阻塞主线 |
| [#68596](https://github.com/openclaw/openclaw/issues/68596) | 流式看门狗阈值 | 2026-04-18 | 4 个月 | needs-product-decision |
| [#51429](https://github.com/openclaw/openclaw/issues/51429) | 工作路径硬编码 | 2026-03-21 | 5 个月 | stale, needs-product-decision |
| [#85030](https://github.com/openclaw/openclaw/issues/85030) | MCP 工具未注入子代理 | 2026-05-21 | 3 个月 | needs-product-decision |
| [#50291](https://github.com/openclaw/openclaw/issues/50291) | Plugin Hooks 缺少 trace context | 2026-03-19 | 5 个月 | needs-product-decision |
| [#82662](https://github.com/openclaw/openclaw/issues/82662) | 隔离 cron agentTurn 超时 | 2026-05-16 | 3 个月 | needs-live-repro |
| [#113701](https://github.com/openclaw/openclaw/issues/113701) | 上下文溢出 compaction 失败循环 | 2026-07-25 | 1 个月 | needs-live-repro |
| [#75947](https://github.com/openclaw/openclaw/issues/75947) | UI 质量改进 | 2026-05-02 | 4 个月 | enhancement |
| [#120900](https://github.com/openclaw/openclaw/pull/120900) | Install policy 警告 UI（PR，已 CLOSED 合并路径） | 2026-08-09 | 2 周 | ready-for-maintainer-look |
| [#91268](https://github.com/openclaw/openclaw/pull/91268) | Doctor trusted-proxy 误报（PR） | 2026-06-07 | 2.5 个月 | ready-for-maintainer-look |

**积压健康度评估**：今日数据显示 `clawsweeper:no-new-fix-pr` 标签覆盖了大量 P1/P2 Issue，且 `needs-maintainer-review` 与 `needs-product-decision` 同时出现，意味着**审查资源 vs 产品决策资源均存在瓶颈**。建议维护者：(1) 在 beta.2 验证单 [#125626](https://github.com/openclaw/openclaw/issues/125626) 内对 5 起 beta.2 回归做归因汇总；(2) 优先处理 [#124788](https://github.com/openclaw/openclaw/issues/124788) 与 [#126821](https://github.com/openclaw/openclaw/issues/126821) 两个 P0，避免其阻塞正式版发布。

---

> **数据快照**：截至 2026-08-23，OpenClaw 仓库在 24 小时内 Issue/PR 总更新量为 1000 条，整体活跃度高，但合并率（12.8%）低于新开活跃率（94.8%），反映"流入大于流出"。下一报告周期需重点观察 beta.2 是否顺利切正式版，以及 P0 级 Bug 是否进入

---

## 横向生态对比

# 个人 AI 助手开源生态横向对比分析报告

**报告周期**：2026-08-23
**覆盖项目**：13 个（含 OpenClaw 核心参照 + 3 个静默项目）
**数据来源**：各项目 GitHub 仓库当日公开动态

---

## 1. 生态全景

2026-08-23 的开源 AI 智能体生态呈现 **"高活跃 + 高分化 + 高压力"** 的整体态势：日均 50 条以上 Issue/PR 流动的项目占据样本的 50%（OpenClaw、ZeroClaw、Hermes Agent），但 **合并率普遍偏低**（多在 12–33% 之间），社区流入量显著大于流出量，维护者负载普遍紧张。技术关注点高度收敛于 **MCP 协议稳定性、多通道（Telegram/Slack/WhatsApp/Feishu）可靠性、子代理可观测性、流式/长任务超时治理、沙箱安全边界** 五大主线。质量信号呈两极分化：**IronClaw、NanoBot、Moltis** 等项目保持"每 Bug 必有 fix PR"的健康闭环，而 **OpenClaw、Hermes Agent** 出现明显的"积压放大 + 维护者单点风险"。整体而言，生态正从"功能扩张期"过渡至"稳定性治理 + 成本经济性双重压力"阶段。

---

## 2. 各项目活跃度对比

| 项目 | 24h Issue 更新 | 24h PR 更新 | 总更新量 | 新版本 | 合并率 | 健康度评级 | 当前阶段 |
|---|---:|---:|---:|---|---:|---|---|
| **OpenClaw** | 500 | 500 | **1000** | ❌ | 12.8% | 🟡 中 | 稳定性修复期 |
| **ZeroClaw** | 50 | 50 | **100** | ❌ | 12.0% | 🟢 中高 | v0.9.0 安全收紧 |
| **Hermes Agent** | 48 | 47 | **95** | ❌ | 5.3% | 🔴 偏低 | 高吞吐低收口 |
| **IronClaw** | 9 | 21 | **30** | ❌ | 23.8% | 🟢 良好 | 密集重构期 |
| **NanoClaw** | 1 | 25 | **26** | ❌ | 30.8% | 🟢 良好 | 硬骨头清理 |
| **NanoBot** | 0 | 21 | **21** | ❌ | 33.3% | 🟢 良好 | 质量加固+扩展 |
| **CoPaw/QwenPaw** | 7 | 4 | **11** | ❌ | 0% | 🟡 待改进 | 反馈活跃、版本静止 |
| **PicoClaw** | 2 | 6 | **8** | ❌ | 50.0%（含 stale） | 🟡 中 | 历史积压清理 |
| **LobsterAI** | 2 | 5 | **7** | ❌ | 71.4% | 🟡 中低 | stale 收尾 |
| **Moltis** | 1 | 3 | **4** | ❌ | 0% | 🟡 中 | PR 蓄势待审 |
| **NullClaw** | 0 | 0 | 0 | ❌ | — | ⚫ 静默 | 休眠 |
| **TinyClaw** | 0 | 0 | 0 | ❌ | — | ⚫ 静默 | 休眠 |
| **ZeptoClaw** | 0 | 0 | 0 | ❌ | — | ⚫ 静默 | 休眠 |

**关键观察**：
- **"Claw"系项目**（OpenClaw、ZeroClaw、NanoClaw、PicoClaw、TinyClaw、NullClaw、ZeptoClaw）样本数为 7，但其中 **3 个完全静默**，说明该系列生态内部分化严重。
- **零合并率项目**（Hermes Agent 5.3%、CoPaw 0%、Moltis 0%）的维护瓶颈已成为共性信号。

---

## 3. OpenClaw 在生态中的定位

### 3.1 优势

| 维度 | OpenClaw 表现 | 生态对比 |
|---|---|---|
| **绝对活跃度** | 1000 条/24h | 远超第二名 ZeroClaw（100），是 Hermes Agent 的 10 倍 |
| **议题覆盖广度** | 涉及 Gateway、Agent、Channel、WebUI、Provider、Plugin、Auth 等 7+ 模块 | 多项目（如 PicoClaw、Moltis）只聚焦单点 |
| **生态影响力** | 同期被 LobsterAI [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 等外部项目反向引用为兼容性目标 | 已成为事实上的"参照基线" |
| **多通道矩阵** | 覆盖 WhatsApp/Feishu/Telegram/Discord/WebSocket 等 | Hermes Agent 主要覆盖 Desktop，NanoBot 偏 WebUI |

### 3.2 相对短板

| 维度 | OpenClaw | 同类对照（IronClaw / NanoBot / NanoClaw） |
|---|---|---|
| **Bug 响应闭环率** | P0/P1 多为 `needs-maintainer-review` | IronClaw 实现"提 Issue → 出 PR → 合并 → 关闭"一日闭环 |
| **合并率** | 12.8% | NanoBot 33.3%、NanoClaw 30.8% |
| **每 Bug 必带 fix** | ❌ 多处 P0 缺位 | ✅ NanoBot、Moltis 普遍做到 |
| **跨平台稳定性** | Windows/WSL 多处问题（#105528、#60612） | ZeroClaw 单独建立 [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) 跟踪 |

### 3.3 定位结论

OpenClaw 在生态中处于 **"功能最全、流量最大、债务最重"** 的三角中心位置。其优势在于作为参照项目被广泛兼容（外部项目需适配其协议），短板在于扩张速度领先于稳定性治理速度。在 v2026.8.1-beta.2 阶段，维护者若不能同步收紧 P0/P1 修复节奏，存在被 IronClaw、NanoClaw 等"小而稳"项目在专业场景中分流的风险。

---

## 4. 共同关注的技术方向

下表汇总 24h 内多项目共同涌现的需求热点：

| 技术方向 | 涉及项目 | 代表 Issue/PR | 核心诉求 |
|---|---|---|---|
| **MCP 协议稳定性** | OpenClaw、PicoClaw、Hermes Agent、Moltis | [#85030](https://github.com/openclaw/openclaw/issues/85030)（注入缺失）、[#3269](https://github.com/sipeed/picoclaw/issues/3269)（挂死）、[#92565](https://github.com/NousResearch/hermes-agent/issues/92565)（凭证变更不重连）、[#1231](https://github.com/moltis-org/moltis/pull/1231)（重启陈旧引用） | MCP 已成为智能体"工具扩展层"事实标准，但 **失败语义、会话复用、生命周期管理** 均未稳定 |
| **Telegram/Slack 通道可靠性** | OpenClaw、NanoBot、PicoClaw、NanoClaw、Hermes Agent、ZeroClaw | [#5156](https://github.com/HKUDS/nanobot/pull/5156)（静默停轮询）、[#3343](https://github.com/sipeed/picoclaw/issues/3343)（22.8 万次 edit 触发限流）、[#3449](https://github.com/qwibitai/nanoclaw/pull/3449)（channel-post 静默丢失）、[#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718)（重复发送） | 多通道成为产品差异化重点，但 **adapter 层的状态机/超时/重连** 成为共性短板 |
| **子代理 / 多代理编排** | OpenClaw、Hermes Agent、NanoBot | [#67777](https://github.com/openclaw/openclaw/issues/67777)（subagent 回执丢失）、[#78055](https://github.com/NousResearch/hermes-agent/issues/78055)（状态错乱）、[#85030](https://github.com/openclaw/openclaw/issues/85030)（MCP 未注入） | "父-子代理契约"成为新瓶颈，**sessionId 返回、工具链继承、可观测性** 是三大缺口 |
| **长任务 / 流式超时可配置** | OpenClaw、ZeroClaw、Hermes Agent | [#68596](https://github.com/openclaw/openclaw/issues/68596)（30s 硬阈值）、[#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)（无超时）、[#91621](https://github.com/NousResearch/hermes-agent/issues/91621)（120s 钳制） | 长推理模型（Kimi、DeepSeek-R1）普及后，**固定超时已不适用**，社区强烈要求阈值可配 |
| **沙箱 / 安全边界** | ZeroClaw、IronClaw、OpenClaw、Moltis | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)、[#7825](https://github.com/nearai/ironclaw/issues/7825)（沙箱凭据代理）、[#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)（策略绕过）、[#1230](https://github.com/moltis-org/moltis/issues/1230)（fail-closed） | "插件供应链" + "执行沙箱" + "凭据中立化" 是企业化关键路径 |
| **Windows 平台一致性** | OpenClaw、Hermes Agent、ZeroClaw | [#105528](https://github.com/openclaw/openclaw/issues/105528)、[#91459](https://github.com/NousResearch/hermes-agent/issues/91459)（HUD 不透明）、[#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462)（74 测试失败） | Windows 已成为"未达标洼地"，**字符编码、路径语义、控制台行为** 是高频踩坑点 |
| **会话恢复 / 可观测** | OpenClaw、NanoBot、IronClaw、ZeroClaw | [#57425](https://github.com/openclaw/openclaw/issues/57425)、[#5420](https://github.com/HKUDS/nanobot/pull/5420)（WebSocket 显式恢复）、[#7650](https://github.com/nearai/ironclaw/pull/7650)（运行结果证据化）、[#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141） | "可恢复的会话"是用户体验的核心，**版本切换、进程重启、磁盘故障** 场景下的回放能力成为新基线 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全功能通用 agent + 多通道 + 插件生态 | 平台化集成商、企业级用户 | 模块化 Gateway + Plugin Hook + WebUI + TUI 多前端 |
| **NanoBot** | WebUI 可观测性 + Provider 治理 | 终端用户 + 集成开发者 | 回合可观测抽象 + 类型化 LLMUsage 契约 + 多语言本地化（10） |
| **IronClaw** | 性能 + CI 工程基建 + 后台子代理 | 商业化部署、高频使用场景 | Process Journal 状态机 + 沙箱凭据中介 + 4 轨道 CI |
| **Hermes Agent** | Desktop 全平台客户端 + Skills Hub | 桌面端重度用户 | 跨平台 Electron 客户端 + Skills 索引 + Webhook 功能包 |
| **NanoClaw** | Telegram/Slack 多实例 setup + Cursor SDK | 多 bot 运维者、协作场景 | Circuit-breaker 实例隔离 + Cursor Agent 集成 |
| **ZeroClaw** | 安全沙箱 + WASM 运行时 + RFC 治理 | 安全敏感型部署 | SandboxPolicy 一等公民 + 编译期→运行时 WASM 迁移 |
| **Moltis** | Hook fail-closed + 集成兼容性（OpenAI/Browserless） | 合规/企业场景 | 严格 hook 错误策略 + 跨厂商 schema 适配 |
| **CoPaw/QwenPaw** | 桌面 GUI + 多 provider 接入 | 终端个人用户 | Profile Markdown + Cron 模型选择 + 远程 bridge |
| **PicoClaw** | 轻量 + 多通道（DeltaChat/Telegram） | 资源受限环境 | Skills CLI + 小型化部署 |
| **LobsterAI** | 会话导出 + 错误恢复 + 多服务商 | 中文用户 + 私有化部署 | Markdown 导出 + 重试按钮 + 20 自定义服务商 |

**架构关键差异总结**：
- **单代理 vs 多代理**：OpenClaw、Hermes Agent 已进入多代理编排深水区；NanoBot、PicoClaw 仍以单代理可观测性为主。
- **客户端形态**：Hermes Agent、CoPaw 重桌面；IronClaw、NanoBot 重 Web；OpenClaw、ZeroClaw 重 CLI/TUI+多端。
- **安全模型**：ZeroClaw、IronClaw、Moltis 倾向"显式沙箱 + 凭据中介"；OpenClaw、Hermes Agent 仍以"插件 + 信任列表"为主。

---

## 6. 社区热度与成熟度分层

### 第一梯队：高活跃 / 高压力（活跃但债务重）

- **OpenClaw**、**ZeroClaw**、**Hermes Agent**：日更新量 95–1000 条，但合并率均 ≤ 13%，**处于"功能爆发 → 债务积累"转折点**。
- 共同特征：Issue 流入 > 流出、维护者负载饱和、P0/P1 修复积压。

### 第二梯队：稳定迭代 / 质量加固期（推荐关注）

- **NanoBot**、**IronClaw**、**NanoClaw**：合并率 23–33%，**每个 Bug 几乎都有对应 fix PR**，体现了"工程纪律"。
- **IronClaw** 尤其值得关注：在 OpenClaw 风格的大型项目里展示了"高速迭代 + 严密闭环"的样板。

### 第三梯队：中等活跃 / 修复期

- **PicoClaw**、**LobsterAI**、**CoPaw/QwenPaw**、**Moltis**：活跃度中等，主要在做历史积压清理或单点修复。
- **Moltis** 当日零合并，但其修复方向（MCP、OpenAI schema）属于生态级刚需，预计短期合并后会显著改善。

### 第四梯队：休眠期

- **NullClaw**、**TinyClaw**、**ZeptoClaw**：24h 零活动。
- **风险提示**：若连续多周静默，需评估项目健康度（停摆 vs 主动归档）。

---

## 7. 值得关注的趋势信号

### 7.1 行业级趋势

1. **从"功能数量"转向"成本经济性"**
   - 标志性信号：[IronClaw #7824](https://github.com/nearai/ironclaw/issues/

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-08-23

## 1. 今日速览

NanoBot 今日呈现**高活跃度**的开发态势：过去 24 小时共更新 21 条 Pull Request（14 条待合并、7 条已关闭/合并），新开 Issues 为 0，无新版本发布。贡献重心集中在**两条主线**——其一是面向用户的 WebUI / TUI 体验打磨（统一回合可观测性、本地化、智能建议、文件预览等），其二是面向基础设施的 Provider 层重构（类型化 LLMUsage 契约、统一 trajectory 后端）。整体节奏健康，PR 体量适中，回归与 bug 修复 PR 同步推进，未观察到重大风险信号。

---

## 2. 版本发布

⚠️ 今日无新版本发布。最新 release 信息缺失，但根据主线 PR 推进节奏，下一版本或将围绕 WebUI 可观测性、Provider 用量契约与若干稳定性修复集中合入。

---

## 3. 项目进展（今日已合并/关闭 PR）

| PR | 标题 | 影响 |
|---|---|---|
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | **里程碑级**——将每条用户回合投影到统一 answer surface，保留有序 reasoning/tool/编辑片段，并提供可信的回合级 token 用量 |
| [#5488](https://github.com/HKUDS/nanobot/pull/5488) | docs: refresh team and contributor credits | 更新维护者 Xubin Ren / Yongru Chen 信息，替换 contrib.rocks 为响应式社区头像墙 |
| [#4430](https://github.com/HKUDS/nanobot/pull/4430) | feat(web): configure web_fetch provider | 新增 `web_fetch` provider 配置，支持 `auto` / `tavily` / `jina` / `readability` 四种模式，替换原 JinaReader toggle |
| [#3869](https://github.com/HKUDS/nanobot/pull/3869) | fix(providers): DeepSeek message hardening | 修复 DeepSeek v4-pro / v4-flash 的 null content 400 错误、"(empty)" 占位符泄漏、assistant 文本被丢弃等长期问题 |
| [#5156](https://github.com/HKUDS/nanobot/pull/5156) | fix(telegram): recover from silently stalled polling | 修复 Telegram 通道在网络抖动后静默停轮询的生产事故 |
| [#3294](https://github.com/HKUDS/nanobot/pull/3294) | feat(dream): optional kill switch + custom Phase 1/2 template paths | 为 self-learning Dream 循环加入 `enabled` 开关与可自定义模板路径 |
| [#????](https://github.com/HKUDS/nanobot/pull/) | （数据集中第 7 条已关闭 PR） | 详情见 PR 列表 |

📊 **整体推进判断**：今日合入工作显著提升了项目的**可视化质量**（回合可观测性）与**生态兼容度**（DeepSeek 兼容、Telegram 稳定性、web_fetch provider 化），属于"质量加固 + 能力扩展"型迭代，未做破坏性改动。

---

## 4. 社区热点

⚠️ 数据集中所有 PR 的评论数字段均为 `undefined`，无法直接按评论数排序。以下按 **点赞数 / 更新活跃度 / 战略重要性** 综合排序：

| PR | 主题 | 热度信号 |
|---|---|---|
| [#5486](https://github.com/HKUDS/nanobot/pull/5486) | feat(webui): unify turn observability | 今日合入，体量大且触及 WebUI 核心数据模型 |
| [#5481](https://github.com/HKUDS/nanobot/pull/5481) | feat(trajectory): add unified provider usage backend | 原生栈 #5482 的子集 PR，串接 #5480 |
| [#5480](https://github.com/HKUDS/nanobot/pull/5480) | refactor(providers): define typed LLM usage contract | Provider 层基础设施重构，影响所有 LLM 适配器 |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) | feat(webui): add follow-up suggestions | 跟进 DeerFlow 交互范式，社区期待度高 |
| [#5485](https://github.com/HKUDS/nanobot/pull/5485) | fix: restore LangSmith tracing for native providers | 修复 LangSmith 可观测链路，关乎运维/调试能力 |

**诉求分析**：社区关注点集中在 **(a) 回合级别的可观测性** 与 **(b) Provider 层的可治理性**——前者关乎终端用户理解 AI 行为，后者关乎开发者/运维对成本与质量的可控性。这两个方向在 NanoBot 中正在被同步推进。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | PR / Issue | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高（生产事故） | [#5156](https://github.com/HKUDS/nanobot/pull/5156) | Telegram 长轮询在网络抖动后静默停止，进程仍存活但收不到消息——已在生产观察到 | ✅ 已合入 |
| 🟠 中（数据/行为风险） | [#5483](https://github.com/HKUDS/nanobot/pull/5483) | 已删除的 session 被延迟消息重新创建 | ✅ 有 fix PR 待合 |
| 🟠 中（静默失败） | [#5484](https://github.com/HKUDS/nanobot/pull/5484) | MCP 服务器在 `isError=false` 时返回业务错误包络，agent 误判成功 | ✅ 有 fix PR 待合 |
| 🟡 中（可观测性回归） | [#5485](https://github.com/HKUDS/nanobot/pull/5485) | LiteLLM → 原生 SDK 迁移丢失 LangSmith 追踪回调 | ✅ 有 fix PR 待合 |
| 🟡 中（合约违背） | [#5471](https://github.com/HKUDS/nanobot/pull/5471) | `Nanobot.run(ephemeral=True)` 实际上仍会持久化回合与压缩历史 | ✅ 有 fix PR 待合 |
| 🟢 低（语义不一致） | [#5469](https://github.com/HKUDS/nanobot/pull/5469) | TUI 空闲态 footer 展示的 token context 与累计用量语义不一致 | ✅ 有 fix PR 待合 |
| 🟢 低（显示口径） | [#5490](https://github.com/HKUDS/nanobot/pull/5490) | 回合聚合多 prompt 报告时缺少模型调用次数与最新请求上下文 | ✅ 有 fix PR 待合 |
| 🟢 低（UI 渲染） | [#5491](https://github.com/HKUDS/nanobot/pull/5491) | answer → tool → answer 轮次中部分 answer 切片被错误归入 reasoning 壳层 | ✅ 有 fix PR 待合 |

✅ **健康度信号**：所有今日浮现的 bug 均已附随 fix PR，无悬空未跟进的问题。

---

## 6. 功能请求与路线图信号

综合已存在的 PR 与零 Issues 状态，可推断以下方向正在被纳入路线图：

| 信号 | 候选 PR | 潜在下一版本合入 |
|---|---|---|
| WebUI 回合可观测性已合入 | [#5486](https://github.com/HKUDS/nanobot/pull/5486) ✅ | 已成为主线 |
| Provider 用量契约 + trajectory 后端 | [#5480](https://github.com/HKUDS/nanobot/pull/5480) + [#5481](https://github.com/HKUDS/nanobot/pull/5481) | 串接合并后形成统一栈 |
| 用户可控回合恢复 | [#5420](https://github.com/HKUDS/nanobot/pull/5420) | WebSocket 意外中断的"继续/丢弃"显式恢复 |
| 邮件通道性能优化 | [#5489](https://github.com/HKUDS/nanobot/pull/5489) | 先拉 header、用 UID SEARCH 跳过重抓 |
| WebUI 智能追问建议 | [#5408](https://github.com/HKUDS/nanobot/pull/5408) | 对齐 DeerFlow 交互 |
| WebUI Agent 活动本地化（10 语言） | [#5367](https://github.com/HKUDS/nanobot/pull/5367) | 提升国际化体验 |
| WebUI 文件预览路径修正 + subagent 生命周期回放 | [#5487](https://github.com/HKUDS/nanobot/pull/5487) | 完善 subagent 调试体验 |

📌 **路线图主题归纳**：(1) 透明化 AI 行为（可观测、可恢复、可回放），(2) 多 Provider 治理（用量契约、LangSmith 兼容、错误语义），(3) 通道性能与稳定性（邮件、Telegram、SDK ephemeral）。

---

## 7. 用户反馈摘要

⚠️ 由于今日无新增 Issues 且 PR 评论数均未返回，纯"用户声音"维度数据缺失。以下从 PR 描述中提取到的**用户/生产痛点画像**：

- **生产环境运维**：Telegram 通道在不稳定代理后**静默失活**，进程不退出、log 不告警——典型"无心跳"故障，影响实际部署可用性（[#5156](https://github.com/HKUDS/nanobot/pull/5156)）。
- **AI 调试诉求强**：LangSmith 追踪的丢失被视为"迁移代价"被快速修复（[#5485](https://github.com/HKUDS/nanobot/pull/5485)），反映社区对**端到端 trace** 的依赖。
- **多 Provider 用户**：DeepSeek v4 模型的 null content 错误困扰长期存在直到 #3869 才闭环——典型"长尾兼容性"痛点。
- **WebUI 用户对 AI 行为可解释性需求高**：#5486 解决的"回合可观测性"是直接面向用户理解 AI 在做什么、消耗了多少 token 的能力。
- **SDK 集成方对合约一致性敏感**：`ephemeral=True` 名不副实的问题（[#5471](https://github.com/HKUDS/nanobot/pull/5471)）暴露文档与实现偏差，是开发者集成时的"踩坑点"。

---

## 8. 待处理积压提醒

| PR / Issue | 创建日期 | 等待天数 | 风险 |
|---|---|---|---|
| [#5367](https://github.com/HKUDS/nanobot/pull/5367) feat(webui): localize agent activity | 2026-08-13 | ~10 天 | 标记 conflict，标记冲突长期未解可能阻塞其他本地化 PR |
| [#5408](https://github.com/HKUDS/nanobot/pull/5408) feat(webui): add follow-up suggestions | 2026-08-17 | ~6 天 | 标记 conflict，建议优先 rebase 减少合并阻力 |
| [#5469](https://github.com/HKUDS/nanobot/pull/5469) fix(tui): show measured request context | 2026-08-21 | ~2 天 | 与 #5480/#5481 用量重构强耦合，建议先合并底层契约 |
| [#5483](https://github.com/HKUDS/nanobot/pull/5483) fix(session): prevent deleted sessions from being recreated | 2026-08-22 | ~1 天 | 数据完整性问题，建议加急评审 |
| [#5484](https://github.com/HKUDS/nanobot/pull/5484) fix(mcp): flag business-error envelopes | 2026-08-22 | ~1 天 | 影响 MCP 生态正确性，建议优先合并 |

📌 **维护者关注建议**：
1. **优先合并** [#5483](https://github.com/HKUDS/nanobot/pull/5483) 与 [#5484](https://github.com/HKUDS/nanobot/pull/5484)——两者均为低风险、高价值的稳定性修复。
2. **协调 PR 栈** [#5480](https://github.com/HKUDS/nanobot/pull/5480) → [#5481](https://github.com/HKUDS/nanobot/pull/5481) 的评审节奏，避免分叉过久。
3. **解决冲突标记** [#5367](https://github.com/HKUDS/nanobot/pull/5367) / [#5408](https://github.com/HKUDS/nanobot/pull/5408) / [#5487](https://github.com/HKUDS/nanobot/pull/5487) / [#5469](https://github.com/HKUDS/nanobot/pull/5469) — 长期 conflict 会增加维护成本。
4. 关注是否存在 Issue 收集渠道缺失：今日 0 Issues 不一定代表零问题，可能反映社区偏好直接提 PR——可考虑在 README 中引导先开 issue 再提 PR。

---

## 📈 项目健康度速评

| 维度 | 评分 | 说明 |
|---|---|---|
| 提交活跃度 | ⭐⭐⭐⭐⭐ | 24h 内 21 PR，远高于一般中小项目 |
| 合并节奏 | ⭐⭐⭐⭐ | 7/21 ≈ 33% 合并率，比例合理 |
| Bug 响应 | ⭐⭐⭐⭐⭐ | 每个 bug 均有对应 fix PR，无悬空 |
| Issue 收集 | ⭐⭐☆☆ | 24h 内 0 Issues，可能存在收集渠道缺口 |
| 文档同步 | ⭐⭐⭐⭐ | #5488 主动刷新维护者与贡献者信息 |
| 架构治理 | ⭐⭐⭐⭐ | Provider 用量合约化、TUI/WebUI 回合模型统一，方向正确 |

**结论**：NanoBot 目前处于**质量加固期 + 能力扩展期叠加**的状态，工程纪律良好，下一版本值得期待。建议维护者集中精力清理 conflict 标记的 PR 栈，并主动开放 issue 入口以收集更多用户声音。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报
**报告日期：2026-08-23**

---

## 1. 今日速览

Hermes Agent 仓库今日继续保持高强度迭代节奏：过去 24 小时 Issues 活跃 48 条、PR 活跃 47 条，关闭/合并仅 5 条，整体呈现"高吞吐、低收口"的特征。讨论度最高的话题集中在 **Skills 索引陈旧**（#66616，78 条评论）和 **Webhook 功能包设计**（#84834，22 条评论）两条长尾议题上，反映出项目在内容基础设施与外部集成两端均存在悬而未决的系统性问题。今日无新版本发布，PR 池水位仍然偏高，维护者需要在评审节奏上提速。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日明确合并/关闭的 PR 共 3 条，整体推进有限：

| PR | 状态 | 说明 |
|---|---|---|
| [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | CLOSED | 添加同 provider 辅助模型回退 — 关闭（可能因方向调整或重复） |
| [#92594](https://github.com/NousResearch/hermes-agent/pull/92594) | CLOSED | 恢复持久化 heartbeat watch — 已落地 |
| [#92088](https://github.com/NousResearch/hermes-agent/pull/92088) | CLOSED | 修复 Linux `.desktop` Exec 解析 — 已被 #92122 取代 |

值得注意的是 [#92595](https://github.com/NousResearch/hermes-agent/pull/92595)（控制 socket 加固）由维护者 teknium1 亲自提交，明确针对 #92447 的合入后评审意见做硬化后再继续上层构建，体现"先加固再扩展"的稳健节奏。

---

## 4. 社区热点

**最高讨论度：**

- 🔥 [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) **Skills 索引陈旧/降级**（78 评论）— 自动化探针失败，统一索引已达 29.8h（阈值 26h）。这是 Skills Hub `/docs/skills` 的关键依赖，影响文档站可发现性。
- 🔥 [#84834](https://github.com/NousResearch/hermes-agent/issues/84834) **Webhook 功能包元议题**（22 评论）— 作者 andrexibiza 推进的图门控 5×2×3 修复包，覆盖入口、执行、交付、配置、UI、部署、文档全链路。
- 🔥 [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) **Fleet 更新可靠性 tracking**（14 评论，P1）— 作者 teknium1 亲自主导，承认安装/更新是当前最不可靠的能力，约 30 个开放 Issue + 15 个开放 PR 各自修补同一类问题。
- 👍 [#74816](https://github.com/NousResearch/hermes-agent/issues/74816) **多设备会话同步**（2 👍，3 评论）— 类似微信的实时同步愿景，是今日反应最热烈的功能请求。

**背后诉求分析：**
- **基础设施层**：Skills 索引、CI 完整性（#92555）、MCP 会话复用（#92565）都指向"状态可观测、可恢复"的系统级需求。
- **跨平台体验**：Windows 是今日报告最多的 Bug 平台，桌面客户端三端（macOS/Linux/Windows）问题层出不穷。

---

## 5. Bug 与稳定性

按严重程度排列（标 ⭐ 表示已有对应 fix PR）：

### 🔴 P1 严重

| Issue | 标题 | 平台/组件 | 是否有 fix |
|---|---|---|---|
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | DeepSeek 50 万 token 会话上下文压缩挂起后永久死亡 | Desktop / DeepSeek | ❌ |
| [#91277](https://github.com/NousResearch/hermes-agent/issues/91277) | Fleet 更新可靠性 tracking | 全平台 | 部分 PR（#92595、#92122、#92090、#91079） |
| [#92457](https://github.com/NousResearch/hermes-agent/issues/92457) | 暴露的 webhook 凭证需轮换 | 安全/Docker | ❌（需立即响应） |

### 🟠 P2 中等

| Issue | 标题 | 平台/组件 | 是否有 fix |
|---|---|---|---|
| [#40391](https://github.com/NousResearch/hermes-agent/issues/40391) | Desktop 远程 Gateway REST 可连但 WebSocket 失败 | macOS / Desktop | ⭐ 已关闭 |
| [#92095](https://github.com/NousResearch/hermes-agent/issues/92095) | uv 安装下 `.desktop` Exec 损坏 | Linux / Desktop | ⭐ #92122、#92090 |
| [#92091](https://github.com/NousResearch/hermes-agent/issues/92091) | Gateway 控制 socket 改用自有契约 | CLI/Gateway | 设计阶段 |
| [#58593](https://github.com/NousResearch/hermes-agent/issues/58593) | Linux 桌面应用内更新反复失败 | Linux / Desktop | ❌ |
| [#83832](https://github.com/NousResearch/hermes-agent/issues/83832) | PKCE state cookie 含字面 `;` 破坏 OIDC | Dashboard / 安全 | ❌ |
| [#92302](https://github.com/NousResearch/hermes-agent/issues/92302) | 本地模型 120s 连接超时过短 | Windows / 本地后端 | ❌ |
| [#92271](https://github.com/NousResearch/hermes-agent/issues/92271) | Windows Docker 沙箱目录名含 `:` | Windows / Docker | ❌ |
| [#92553](https://github.com/NousResearch/hermes-agent/issues/92553) | pre_tool_call shell hooks 静默丢弃 `approve` | CLI / Agent | ❌ |
| [#92554](https://github.com/NousResearch/hermes-agent/issues/92554) | 写 `config.yaml` 销毁用户注释 | CLI / Config | ❌ |
| [#91621](https://github.com/NousResearch/hermes-agent/issues/91621) | Codex 大上下文 TTFB 被钳回 120s | OpenAI Codex | ❌ |
| [#89332](https://github.com/NousResearch/hermes-agent/issues/89332) | state.db 无文件身份校验 | Gateway | ❌ |
| [#92565](https://github.com/NousResearch/hermes-agent/issues/92565) | MCP 服务器凭证变更不会重连 | MCP | ⭐ #92596 |

### 🟡 P3 轻微

[#71239](https://github.com/NousResearch/hermes-agent/issues/71239)（Telegram dispatcher 静默卡死）、[#70606](https://github.com/NousResearch/hermes-agent/issues/70606)（Hindsight 嵌入式模式覆盖用户配置）、[#91459](https://github.com/NousResearch/hermes-agent/issues/91459)（HUD 模式 Windows 不透明）、[#92480](https://github.com/NousResearch/hermes-agent/issues/92480)（`.pptx`/`.pdf` 附件丢失扩展名）、[#92549](https://github.com/NousResearch/hermes-agent/issues/92549)（lazy-packages 安全审计误报）。

**整体观察**：今日 P2 级别 Bug 中已有 fix PR 的比例不到 1/3，Windows 平台 Bug 占比明显偏高（5/15），Docker/沙箱相关问题呈现聚集态势。

---

## 6. 功能请求与路线图信号

### 已被 PR 跟踪的请求

| 需求 | 关联 Issue | 关联 PR | 状态 |
|---|---|---|---|
| 多设备会话同步（类微信） | [#74816](https://github.com/NousResearch/hermes-agent/issues/74816) | — | 待立项 |
| 同 provider 模型回退 | — | [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | 已关闭（需重启） |
| 网关 session_is_busy 公共 API | — | [#91309](https://github.com/NousResearch/hermes-agent/pull/91309) | 待合并 |
| 会话流中原生 approvals | — | [#92592](https://github.com/NousResearch/hermes-agent/pull/92592) | 待评审 |
| Memory 分层（core / extended） | — | [#51152](https://github.com/NousResearch/hermes-agent/pull/51152) | 待评审 |
| 稳定 tag 更新检查 | — | [#50046](https://github.com/NousResearch/hermes-agent/pull/50046) | 待评审 |
| 移动端可恢复审批 | — | [#63197](https://github.com/NousResearch/hermes-agent/pull/63197) | 待评审 |

### 路线图信号

- **架构级**：作者 andrexibiza 推动的 "Hermes 六大法则"（#91230）和 Webhook 功能包（#84834）显示项目正在系统化沉淀架构原则。
- **运维级**：tekneum1 的 Gateway 控制 socket 重构（#92091）+ teknium1 本人的加固 PR（#92595）意味着项目正在从"进程扫描启发式"过渡到"自有契约"。
- **安全级**：#92457 暴露凭证轮换 + #91906 Electron 依赖固化（#92046）共同构成 P0 安全发布边界，预计将成为近期发版前置条件。

---

## 7. 用户反馈摘要

**真实痛点提炼：**

1. **更新/安装体验成为头号抱怨**
   - #91277 维护者直接承认"安装/更新是当前最不可靠的能力"
   - #58593、#92095、#92122、#92088 形成一个完整症状链：Linux 桌面更新反复失败、`.desktop` 文件 Exec 解析错误、uv venv 软链接被错误反解

2. **Windows 平台体验欠佳**
   - Docker 沙箱目录名含 `:`（#92271）
   - HUD 模式不透明（#91459）
   - 本地模型超时过短（#92302）
   - 附件下载丢失扩展名（#92480）
   - 第三方打包者（#92224）公开质疑 UI 默认值频繁变更

3. **配置可维护性受损**
   - #92554：写 `config.yaml` 销毁所有用户注释
   - #70606：嵌入式模式覆盖用户 embedding/reranker 配置
   - 用户依赖注释记录"为什么"，但框架在每次写入时重置

4. **多设备协同缺失**
   - #74816：用户明确表达"像微信一样"的会话同步愿景
   - 当前实现仍是"每设备一个文件"模型

**正面信号：**
- [#74816](https://github.com/NousResearch/hermes-agent/issues/74816) 收获 2 👍，说明社区对多设备同步有真实共鸣
- [#40391](https://github.com/NousResearch/hermes-agent/issues/40391) 已获 1 👍 并已关闭，问题响应闭环

---

## 8. 待处理积压提醒

下列 Issue/PR 长期未响应或优先级被低估，建议维护者关注：

### 长期未关闭的活跃 Issue

| Issue | 创建日期 | 状态 | 关注理由 |
|---|---|---|---|
| [#66616](https://github.com/NousResearch/hermes-agent/issues/66616) | 2026-07-18 | 开放 | Skills 索引陈旧问题已存在 36 天，78 条评论未根治 |
| [#17235](https://github.com/NousResearch/hermes-agent/pull/17235) | 2026-04-29 | 已关闭但开放同类需求 | 辅助模型回退需求仍存在 |
| [#48069](https://github.com/NousResearch/hermes-agent/pull/48069) | 2026-06-17 | 开放 | MCP keepalive race 修复已等 67 天 |

### 高优先级但缺乏 fix 的 Issue

| Issue | 严重度 | 原因 |
|---|---|---|
| [#78981](https://github.com/NousResearch/hermes-agent/issues/78981) | P1 | DeepSeek 长会话死亡，影响大上下文用户 |
| [#92457](https://github.com/NousResearch/hermes-agent/issues/92457) | P1（安全） | 暴露 webhook 凭证轮换无对应 PR |
| [#58593](https://github.com/NousResearch/hermes-agent/issues/58593) | P2 | Linux 桌面更新反复失败长达 49 天 |
| [#83832](https://github.com/NousResearch/hermes-agent/issues/83832) | P2 | OIDC 登录安全缺陷需立即修复 |
| [#71239](https://github.com/NousResearch/hermes-agent/issues/71239) | P3 但严重 | Telegram dispatcher 静默卡死可导致消息丢失 |

### 维护者负载警示

- andrexibiza 与 teknium1 两位维护者承担了今日 70% 以上的核心 PR（#92046、#91079、#92595、#92091、#91277、#84834、#91230、#92555、#92457），单点风险较高。
- 评审 PR 池 47 条待合并，建议拆分评审责任或引入临时评审者。

---

## 项目健康度评分（主观）

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐⭐⭐⭐ | 24h 50+50 极高吞吐 |
| 收口率 | ⭐⭐ | 仅 5 条关闭，积压扩大 |
| 安全响应 | ⭐⭐⭐ | #92457 已识别但未处理 |
| 跨平台稳定性 | ⭐⭐ | Windows Bug 集中爆发 |
| 社区参与 | ⭐⭐⭐⭐ | 多设备同步等功能帖获正面反馈 |
| 维护者负载 | ⭐⭐ | 集中度过高，存在单点风险 |

**整体判断**：项目处于"高强度施工 + 局部加固"阶段，安全/稳定性债务需要在下一次发版前集中清理。

---

*报告生成时间：2026-08-23 | 数据来源：NousResearch/hermes-agent GitHub API*

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目动态日报 · 2026-08-23

> 数据来源：GitHub `sipeed/picoclaw`，采样窗口：过去 24 小时

---

## 1. 今日速览

PicoClaw 在过去 24 小时整体活跃度**中等偏低**，但呈现"清理积压 + 持续修复"的双重节奏：无新版本发布，2 条 Issue 更新（均为 BUG 类），6 条 PR 更新中 4 条已关闭、2 条仍待合并。值得关注的信号是**核心 bug（MCP 连接挂死）已有对应修复 PR 在流转**，但 PR 标记为 `stale`，社区推动略显迟缓；同日新增的 Telegram 动画滥用 Bug 引发了对外接渠道限流风险的担忧，建议维护者优先评估。

---

## 2. 版本发布

**无新版本发布**。最近 release 信息未在本周期内更新。

---

## 3. 项目进展（今日合并/关闭的 PR）

| PR | 标题 | 影响范围 | 状态 |
|---|---|---|---|
| [#3319](https://github.com/sipeed/picoclaw/pull/3319) | fix(tools): honor exec timeout and boolean run options | 修复 `exec` 工具 `timeout` 参数被忽略、布尔参数 schema 类型错误 | 已关闭（stale） |
| [#714](https://github.com/sipeed/picoclaw/pull/714) | skills: install/reinstall CLI and refactor into skillsCmd | skills 子命令重构，支持 `repo@branch` 与子路径安装，新增 reinstall | 已关闭（stale） |
| [#1083](https://github.com/sipeed/picoclaw/pull/1083) | fix(cron): preserve recurring job schedule after execution | 修复循环 cron 任务执行后变一次性任务，修复 #1043 | 已关闭（stale） |
| [#1545](https://github.com/sipeed/picoclaw/pull/1545) | 合并 #1500/#1490/#1488/#1487/#1485 的 fix | 批量合入历史修复 | 已关闭（stale） |

**整体评估**：本轮关闭的 4 个 PR 均带 `stale` 标记且提交时间集中在 2–3 月，属于**历史积压清理**而非积极推进新能力。其中 #1083（cron 修复）与 #3319（exec 修复）属于真实可观测的功能性 Bug fix，对稳定性有正向价值；#714 进一步把 skills 子命令体系补齐；#1545 是批量合并补丁合集。**项目当日净推进度约为"补丁级"**，无重大架构或新特性落地。

---

## 4. 社区热点

| 议题 | 类型 | 评论数 / 👍 | 链接 |
|---|---|---|---|
| Issue #3269 — MCP server 连接失败导致 agent loop 挂死 | BUG（活跃） | 6 评论 / 1 👍 | [#3269](https://github.com/sipeed/picoclaw/issues/3269) |
| PR #3337 — Fix/mcp failure hangs agent loop | 修复 PR（待合并） | — | [#3337](https://github.com/sipeed/picoclaw/pull/3337) |
| PR #3222 — refactor(deltachat): cleanup implementation | 重构 PR（待合并） | — | [#3222](https://github.com/sipeed/picoclaw/pull/3222) |

**诉求分析**：
- **#3269 + #3337** 是一组高度关联的"用户痛点 + 修复"组合：用户报告 MCP server 不可达时整个聊天界面会失活、必须重启进程才能恢复，社区反馈集中在"agent 应具备降级/容错能力"，而非"一个失败的服务把整个 loop 拖死"。
- **#3222** 表明社区有用户在积极维护 DeltaChat 通道，本次提交 -200LOC 重构并清理遗留代码，是较稀缺的非核心路径贡献。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重：MCP 失败导致 agent loop 永久挂死
- Issue：[#3269](https://github.com/sipeed/picoclaw/issues/3269)（6 评论）
- 已有修复 PR：[#3337](https://github.com/sipeed/picoclaw/pull/3337)（open, stale）
- **结论**：用户复现稳定，影响"聊天主链路"，严重程度最高。修复 PR 已存在但标记 stale，建议维护者**优先 review 并合并**，否则用户将持续遇到"无回复"问题。

### 🟠 高：Telegram editMessageText 动画滥用触发平台限流
- Issue：[#3343](https://github.com/sipeed/picoclaw/issues/3343)（0 评论 / 0 👍，刚创建）
- 现象：当一个 agent turn 进入停滞/失败状态后，工具反馈动画仍每 3 秒调用一次 Telegram `editMessageText`，**单次失败任务期间触发 22.8 万次 edit 请求**，被 Telegram 服务端按 `retry_after` 限流。
- **结论**：这是一个**对外接平台的合规性风险**——单个错误会话可能让整个 bot 被限流数小时甚至封禁。**当前无 fix PR**，建议作为高优先级 patch 处理（例如：turn 结束时必须终止动画 goroutine，或加入最大重试/最大时长阈值）。

### 🟡 中：exec 工具参数被忽略（已随 #3319 处理）
- #3319 已关闭，但其作为 stale 关闭而非合并，存在**修复丢失风险**，建议确认改动是否被重新提交或 cherry-pick。

### 🟡 中：cron 循环任务退化为一次性（已随 #1083 处理）
- #1083 已关闭，同样为 stale 关闭，需确认 commit 是否进入主线。

---

## 6. 功能请求与路线图信号

本周期**无明确的新功能请求 Issue**。但从 PR 与 Issue 的对话可推断以下方向：

1. **Agent 容错 / 降级**（#3269、#3337）：社区希望 agent loop 在子模块（如 MCP）失败时仍能继续响应。短期看 PR #3337 可解燃眉之急；中长期可能演进为"按服务粒度的隔离 + 健康检查"。
2. **DeltaChat 通道重构**（#3222）：核心维护路径外的通道在持续被社区打磨，暗示**多通道矩阵**仍是项目差异化重点。
3. **Skills CLI 化**（#714）：把 skill 安装从脚本化转为正式 CLI 子命令，路线图上看属于"易用性 / 生态化"投入。

---

## 7. 用户反馈摘要

- **来自 #3269 的真实痛点**：
  - "MCP server 一旦不可达，整个 picoclaw 聊天界面就停止回复，直到人工重启。"
  - 用户工作流强依赖 MCP（外部工具/数据源），挂死等同于"代理掉线"。
  - 用户环境：nightly 版本（`2cf030d2`）、Go 1.25.11、模型为 Qwen3，说明该项目**在中文化 + 本地大模型 + 外部 MCP 工具**这一组合下被实际使用。

- **来自 #3343 的真实痛点**：
  - 一次失败 turn 在无人值守时持续打 Telegram API，造成**账号级限流**。用户实际生产中已踩雷。
  - 隐含期望：UI/通道层应有"会话终止 = 资源回收"的硬保证。

- **满意面**：从 PR #3222 的主动性看，社区对**多通道生态**仍有热情，DeltaChat 用户愿意贡献 -200LOC 重构。

- **不满意面**：stale 关闭的 PR 较多（#3319、#714、#1083、#1545），如未真正合入主线，**会消耗贡献者意愿**。

---

## 8. 待处理积压（提醒维护者）

| 类型 | 编号 | 关键问题 | 建议动作 |
|---|---|---|---|
| 高优 PR | [#3337](https://github.com/sipeed/picoclaw/pull/3337) | 修复 MCP 挂死，对应已存在的活跃 Issue | 优先 review，避免 stale 关闭导致修复丢失 |
| 高优 PR | [#3222](https://github.com/sipeed/picoclaw/pull/3222) | DeltaChat 重构，-200LOC 清理 | 安排 review，对通道稳定性是正向资产 |
| 活跃 Issue | [#3269](https://github.com/sipeed/picoclaw/issues/3269) | MCP 失败 → 全局挂死 | 与 #3337 联动处理，给出官方修复时间表 |
| 新 Bug | [#3343](https://github.com/sipeed/picoclaw/issues/3343) | Telegram edit 动画无终止条件 | 建议 48 小时内给出修复方案或临时缓解措施 |
| Stale PR 风险 | #3319 / #714 / #1083 | 已关闭但内容有价值 | 确认改动是否已合并，否则请作者 rebase 重开 |

---

**项目健康度速判**：🟡 中等
- ✅ 核心 bug 有社区修复在路上，多通道生态仍有活力。
- ⚠️ 新增 Telegram 限流风险未处置；stale 关闭的 PR 中可能含未合入的稳定性修复。
- 🔧 建议维护者本周期聚焦：(1) 推动 #3337 合并；(2) 为 #3343 起草"动画终止/上限"补丁；(3) 复核 4 个 stale 关闭 PR 的 commit 落点。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-08-23

---

## 1. 今日速览

NanoClaw 今日维持高强度的合并与重构节奏：过去 24 小时共有 **25 条 PR 更新**（17 待合并、8 已合并/关闭）、**1 条新 Issue** 开放、**0 个新版本发布**。当日工作重心明显集中在 **Telegram 与 Slack 适配器的稳定性修复**、**Setup 向导的多实例/多机器人体验打磨**，以及 **构建与升级流程的健壮性** 上。整体看，issue/incoming PR 比例（约 1:25）偏高，说明这是一个以维护者驱动的迭代日，社区并未集中爆发新需求或回归投诉，项目处于稳健的"硬骨头清理期"。

---

## 2. 版本发布

**今日无新版本发布。** 当前工作集中在未合并 PR 上，最近一次发版大概率要等到合并窗口落地后才会打包。

---

## 3. 项目进展（已合并/关闭 PR）

今日共有 8 条 PR 进入终态，其中 5 条为代码/构建实质改动，2 条为流程性关闭：

| PR | 作者 | 类型 | 要点 |
|---|---|---|---|
| [#3394](https://github.com/qwibitai/nanoclaw/pull/3394) | Koshkoshinsk | fix(slack) | 工作区策略阻塞时，提供可用的 manual-install 回退路径，并解决 agent 自举（agent 创建 agent）的死循环。 |
| [#3390](https://github.com/qwibitai/nanoclaw/pull/3390) | Koshkoshinsk | fix(setup) | 取消后重跑 Slack setup 时正确识别已保存的 SLACK_BOT_TOKEN，避免重复 provisioning 第二个 Slack App。 |
| [#3443](https://github.com/qwibitai/nanoclaw/pull/3443) | gavrielc | build | 将 `better-sqlite3` 从 `onlyBuiltDependencies` 中移除，直接使用其 npm 包内自带 prebuilds，缩短冷启动时间并规避 node-gyp。 |
| [#3444](https://github.com/qwibitai/nanoclaw/pull/3444) | gavrielc | fix(upgrade-state) | 当 Git 无法识别 checkout 时，退化为版本号比对并打 WARN，避免误判升级未完成。 |

另外 2 条 PR 已关闭但无实质内容提交：
- [#3445](https://github.com/qwibitai/nanoclaw/pull/3445)（kftaylor，错误仓库，关闭）
- 另有 2 条关闭未在 Top 20 列出。

**整体推进度：** Slack 设置链路的"已配 bot 重入"和"手动安装回退"两个长期漏洞已封堵；构建侧去掉了 better-sqlite3 的本地编译步骤，CI/容器启动会更轻。这些是**没有引人注目的新功能、但有效降低日常运维摩擦**的实质性推进。

---

## 4. 社区热点

今日最值得关注的讨论集中在以下几条高信号 PR/Issue：

1. **[#3453 stdin-json tests fail on Node 25+](https://github.com/qwibitai/nanoclaw/issues/3453)** —— 唯一新增 Issue，但代表了 Node 主版本升级下的兼容性面。tsx loader 触发的 `module.register()` 弃用警告污染了测试的 stderr 断言，影响 CI 在 Node 25+ 上的可信度。
2. **[#3449 Telegram: pin explicit allowedUpdates](https://github.com/qwibitai/nanoclaw/pull/3449)** —— 揭示了 Telegram Bot API 的一个长期隐藏陷阱：`allowed_updates` 是**服务端持久化**的，缺省调用会复用上次的设置，导致 channel-post 被静默丢弃（blackholing）。这是真实的"修一个 PR、解一个谜"的案例。
3. **[#3450 Telegram: trust channel's own identity in sender_scope gate](https://github.com/qwibitai/nanoclaw/pull/3450)** —— 修复了 Telegram 广播频道匿名发送者的身份归属问题，关联长期 issue [#2991](https://github.com/qwibitai/nanoclaw/issues/2991)。
4. **[#3447 Circuit-breaker: scope crash strikes to the instance that earned them](https://github.com/qwibitai/nanoclaw/pull/3447)** —— 多实例部署下的关键稳定性修复：当前熔断计数以文件存在性为 key，会"串台"互相拖累启动节流。

**背后诉求：** 用户痛点已经从"功能能不能用"转向"多实例/多通道场景下行为可预测"。Telegram 和 Slack 的两个适配器正在被同时精修。

---

## 5. Bug 与稳定性

按严重程度排序：

| 级别 | Issue/PR | 描述 | 是否有 fix |
|---|---|---|---|
| 🔴 高 | [#3447](https://github.com/qwibitai/nanoclaw/pull/3447) | 多实例熔断计数器串扰，可能导致无辜实例被强制延迟启动 | ✅ 已提 PR 待合 |
| 🔴 高 | [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) | Telegram channel-post 静默丢失，无任何错误 | ✅ 已提 PR 待合 |
| 🟠 中 | [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) | Node 25+ 下 tsx loader 弃用警告污染测试 stderr | ⏳ 仅有 issue，尚未见 PR |
| 🟠 中 | [#3448](https://github.com/qwibitai/nanoclaw/pull/3448) | `ncl` group scope 静默覆盖调用方显式参数 | ✅ 已提 PR 待合（[关联 #2464](https://github.com/qwibitai/nanoclaw/issues/2464)） |
| 🟡 低 | [#3452](https://github.com/qwibitai/nanoclaw/pull/3452) | `update` 命令捕获的子命令缺乏独立输出缓冲 | ✅ 已提 PR |
| 🟡 低 | [#3451](https://github.com/qwibitai/nanoclaw/pull/3451) | update-skills 的 barrel import 归因错误 | ✅ 已提 PR |
| 🟡 低 | [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) | 未知发件人网关把 bot/webhook 也送进审批卡 | ✅ 已提 PR（关联 [#3235](https://github.com/qwibitai/nanoclaw/issues/3235)） |

值得特别提醒维护者：**#3453 是 Node 主线兼容性问题**，如果不在下一版修复，使用 Node 25+ 跑 CI 的下游将逐步失去绿灯。

---

## 6. 功能请求与路线图信号

今日的功能侧 PR 集中在三个方向：

- **Cursor Agent SDK 接入**：[#3355](https://github.com/qwibitai/nanoclaw/pull/3355)（setup `/add-cursor` skill）+ [#3356](https://github.com/qwibitai/nanoclaw/pull/3356)（provider payload）由 zvi-fried 提交，属于明确的 agent 提供方生态扩张，**很可能进入下一个 minor 版本**。
- **Setup 向导的多机器人体验**（amit-shafnir 系列）：
  - [#3438](https://github.com/qwibitai/nanoclaw/pull/3438) 已配置 Telegram bot 后新增"再加一个"路径
  - [#3437](https://github.com/qwibitai/nanoclaw/pull/3437) 对应文档
  - [#3435](https://github.com/qwibitai/nanoclaw/pull/3435) 配对/init-first-agent/CLI welcome 贯穿 adapter 实例信息
  - [#3434](https://github.com/qwibitai/nanoclaw/pull/3434) 修复 polling 适配器误开 webhook server 的 bug
  - [#3431](https://github.com/qwibitai/nanoclaw/pull/3431) Telegram pairing 卡片显示"6 位"修正
  这一组 PR 形成了一条**完整的产品改进主题**——同一名作者连续 5 条 PR，是下个版本 changelog 的"招牌区块"。
- **Slack MPDM 审批卡可读性**：[#3385](https://github.com/qwibitai/nanoclaw/pull/3385) 通过 `resolveConversation` 区分群 DM 与命名频道，将 `mpdm-…` slug 渲染为人可读名。属于体验型增强，不是路线图主线。

**信号研判：** Cursor SDK + Telegram 多实例 setup 是当前最确定的两个 next-release 主题；Telegram/Slack 的修复可能以 patch 形式穿插。

---

## 7. 用户反馈摘要

- **多 Telegram bot 的真实使用场景被反复点名**：amit-shafnir 系列 PR 说明用户已稳定运行"同一 agent 多 bot"的拓扑，setup 向导必须为这一形态让步。
- **Telegram 匿名广播**（[#2991](https://github.com/qwibitai/nanoclaw/issues/2991)、[#3450](https://github.com/qwibitai/nanoclaw/pull/3450)）：bot 在频道发帖时身份被错配到非成员用户，`sender_scope` 误判触发审批。社区用户希望"信任频道自身的身份"。
- **Webhook/自动发件人误审批**（[#3235](https://github.com/qwibitai/nanoclaw/issues/3235)、[#3446](https://github.com/qwibitai/nanoclaw/pull/3446)）：Discord bot/Slack bot/Telegram bot 都被卡在 unknown-sender 审批卡里，"sender 永远点不回去"，体验非常差。
- **CI 在 Node 25 上的可信度**（[#3453](https://github.com/qwibitai/nanoclaw/issues/3453)）：属于基础设施层面的隐性诉求，用户尚未在评论区形成讨论，但一旦阻塞 CI 就会迅速发酵。
- 暂无用户表达不满或吐槽的评论样本（多数 issue 评论数为 0），**社区情绪目前偏中性**。

---

## 8. 待处理积压

以下 PR/Issue 已经存在数日但尚未合并，建议维护者关注：

| 编号 | 标题 | 状态 | 龄期 |
|---|---|---|---|
| [#3355](https://github.com/qwibitai/nanoclaw/pull/3355) | feat(setup): add /add-cursor agent provider skill | OPEN | 4 天 |
| [#3356](https://github.com/qwibitai/nanoclaw/pull/3356) | feat(providers): add Cursor Agent SDK payload | OPEN | 4 天 |
| [#3385](https://github.com/qwibitai/nanoclaw/pull/3385) | fix(approvals): MPDM-aware approval cards | OPEN | 3 天 |
| [#3447](https://github.com/qwibitai/nanoclaw/pull/3447) | fix(circuit-breaker): scope crash strikes | OPEN | 1 天（**严重，建议优先**） |
| [#3449](https://github.com/qwibitai/nanoclaw/pull/3449) | fix(telegram): pin explicit allowedUpdates | OPEN | 1 天（**严重，建议优先**） |
| [#3450](https://github.com/qwibitai/nanoclaw/pull/3450) | Telegram: trust channel's own identity | OPEN | 1 天 |
| [#3448](https://github.com/qwibitai/nanoclaw/pull/3448) | ncl: warn when group scope overrides | OPEN | 1 天 |
| [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) | Auto-drop automated senders | OPEN | 1 天 |
| [#3452](https://github.com/qwibitai/nanoclaw/pull/3452) | fix(update): real output buffer | OPEN | 1 天 |
| [#3451](https://github.com/qwibitai/nanoclaw/pull/3451) | fix(update-skills): attribute barrel import | OPEN | 1 天 |
| [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) | stdin-json tests fail on Node 25+ | OPEN（无 PR） | 1 天 |

**维护者建议优先级：**
1. 先合 [#3447](https://github.com/qwibitai/nanoclaw/pull/3447) + [#3449](https://github.com/qwibitai/nanoclaw/pull/3449)（高严重、低风险）；
2. 然后批量处理 Telegram sender 身份/审批卡的 PR 簇（[#3450](https://github.com/qwibitai/nanoclaw/pull/3450)、[#3446](https://github.com/qwibitai/nanoclaw/pull/3446)、[#3448](https://github.com/qwibitai/nanoclaw/pull/3448)）；
3. 同步推进 Cursor SDK 接入（[#3355](https://github.com/qwibitai/nanoclaw/pull/3355)、[#3356](https://github.com/qwibitai/nanoclaw/pull/3356)）以保持发版节奏；
4. 单独跟进 [#3453](https://github.com/qwibitai/nanoclaw/issues/3453) Node 25+ 兼容性，可考虑放 patch 单独发布。

---

*报告基于 2026-08-23 当日 GitHub 数据自动汇总。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期：2026-08-23**
**项目仓库：[nearai/ironclaw](https://github.com/nearai/ironclaw)**

---

## 1. 今日速览

IronClaw 过去 24 小时呈现**高活跃度、多线并进**的工程状态。共产生 9 条 Issue 更新（5 新开/活跃 + 4 关闭）和 21 条 PR 更新（16 待合并 + 5 已关闭），无新版本发布。**核心贡献者 serrrfirat 与 henrypark133 主导了当日主线工作**：前者推进上下文投影性能优化、Hook 生命周期点、沙箱凭据中介等架构级 PR；后者集中交付了 **CI 加速 4 条平行轨道**（T1–T4），显示出项目在"性能/可观测性"和"工程基建"两大方向上的双轨攻坚。社区端 4 条 webui 净化与通知发布的 PR 已合并落地，闭环健康。整体判断：**项目处于密集重构与基础设施升级期，PR 流转效率高，但积压的 XL 级 PR 需关注评审资源**。

---

## 2. 版本发布

**今日无新版本发布。** 当前版本节奏以主干 PR 合并为主，无 tag 发布动作。

---

## 3. 项目进展

### 3.1 已合并/关闭的 PR（5 条）

| PR | 主题 | 影响范围 | 价值评估 |
|---|---|---|---|
| [#7700](https://github.com/nearai/ironclaw/pull/7700) | **feat(notifications): publish authoritative run outcomes** | 后台运行通知 | ⭐⭐⭐⭐⭐ 修复了 Issue #7691；从"投递监控器"切换为"Process Journal 状态机驱动"的通知源，权威性显著提升；区分前台/子运行/无主运行，避免通知噪音 |
| [#7772](https://github.com/nearai/ironclaw/pull/7772) | **fix(webui): surface extension setup phase and blockers** | 扩展配置 UI | ⭐⭐⭐⭐ 修复 Issue #7769；把 `useExtensionSetup` 的 phase/blockers 透传到 Configure，覆盖全生命周期阻塞类型 |
| [#7773](https://github.com/nearai/ironclaw/pull/7773) | **refactor(webui): remove duplicate Settings and Extensions tabs** | 前端清理 | ⭐⭐⭐ 修复 Issue #7768；删除冗余 tab 与 SETTINGS_TABS/EXTENSIONS_TABS 重复清单 |
| [#7774](https://github.com/nearai/ironclaw/pull/7774) | **test(webui): timezone-robust automation presenter** | 测试稳定 | ⭐⭐⭐ 修复 Issue #7767；用 browser-local formatter 替代 UTC 断言，覆盖 Asia/Shanghai 等时区 |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | **Install the packages the catalog already publishes** | 依赖对齐 | ⭐⭐⭐ 新贡献者 rebase 后合并，补齐 main 上 prompt-artifact 重构所需的 `prompt_url` 字段 |

### 3.2 整体推进度量

- **WebUI 净化一条线完整闭环**：3 个清理 PR（#7773/#7774/#7772）+ 对应 3 个跟踪 Issue 同步关闭，UI 健壮性提升。
- **通知系统权威化**：#7700 把"基于证据"的设计原则落到运行结果通知链路上，是 #7650（运行结果证据化）的下游受益者。
- **CI 加速计划进入实施密集期**：henrypark133 一次性提交 4 条 XL 级 CI 改进 PR（#7821/#7817/#7819/#7820/#7809），明确宣告"4 条平行轨道"治理方针，目标直击 "green locally, red in CI" 类历史漂移问题。

---

## 4. 社区热点

按评论数与关注度排序：

### 🔥 #7824 — [Context projection: Pi-style compaction barrier](https://github.com/nearai/ironclaw/issues/7824)（2 评论）
**作者 serrrfirat · 2026-08-22**

这是当日**最具技术深度**的讨论议题。作者提供了**实测数据**而非假设：

> PinchBench（147 任务，DeepSeek-V4-Flash via OpenRouter）对比：
> - `run 949991b5`（PR #7491, 54.4%）：**2.277 亿 input tokens / $10.31**
> - 旧 shell 基线 `72a540b0`（60.5%）：**5510 万 tokens / $2.52**

准确率虽然提升 6 个百分点，但**成本翻了 4 倍、token 量翻了 4 倍**。作者提出借鉴 Pi 风格的"压缩屏障 + 结构化摘要 + 溢出恢复"机制。该议题直接关联 [PR #7491](https://github.com/nearai/ironclaw/pull/7491)（coding 核心工具合约），形成"功能正确性 → 成本经济性"的下一阶段命题。**这是 IronClaw 走向商用的关键拐点议题**。

### 🔥 #7815 — [Onboarding suggestions 累计净新工作](https://github.com/nearai/ironclaw/issues/7815)（1 评论）
**作者 rdisandro · 2026-08-22**

串联起 #7693/#7694/#6994 已合并模块，沉淀出"connect → suggest → thread"端到端 OOBE 流程的剩余净新工作清单。前端补齐由今日的 [PR #7816](https://github.com/nearai/ironclaw/pull/7816) 承担（refresh + connect 入口）。**该议题体现了项目对"用户首次体验"质量的精细化治理**。

---

## 5. Bug 与稳定性

### 5.1 用户报告的集成故障（来自 Slack #x-ai-product-feedback）

| 严重度 | Issue | 现象 | 状态 |
|---|---|---|---|
| 🟡 Medium | [#7823](https://github.com/nearai/ironclaw/issues/7823) — Notion 安装失败 | 用户在 IronClaw 环境中无法安装 Notion 工具 | **未分配，无 fix PR** |
| 🟡 Medium | [#7822](https://github.com/nearai/ironclaw/issues/7822) — Slack 设置失败 | 用户无法在 IronClaw 账户中配置 Slack；并关联 #7823 提示 Notion 同步问题 | **未分配，无 fix PR** |

> ⚠️ **风险提示**：两条均来自同一时段 Slack 反馈（2026-07-28），疑似同一用户报告或同一会话上下文触发的多重集成故障。**当前无 triager 响应、零评论、零 fix PR**，建议维护者优先处理以避免负面口碑扩散。

### 5.2 已修复的稳定性问题

- **后台运行通知投递**：[#7700](https://github.com/nearai/ironclaw/pull/7700) 修复 #7691 描述的"通知内容不权威/不可预测"问题。
- **扩展配置模态误报"无需配置"**：[#7772](https://github.com/nearai/ironclaw/pull/7772) 修复 #7769 描述的多类型 lifecycle blocker 被丢弃问题。
- **时区相关测试漂移**：[#7774](https://github.com/nearai/ironclaw/pull/7774) 修复 #7767 描述的 Asia/Shanghai 时区下 Automation presenter 测试假阳/假阴。

### 5.3 性能与可观测性预警

#7824 揭示的**输入 token 膨胀 4×** 问题虽不是传统"bug"，但已是**生产成本级别的稳定性风险**。建议在主线引入 token 预算仪表与回归门禁。

---

## 6. 功能请求与路线图信号

| 路线图信号 | 来源 | 当前状态 | 落地可能性评估 |
|---|---|---|---|
| **上下文压缩屏障 / 结构化摘要** | [#7824](https://github.com/nearai/ironclaw/issues/7824) | 概念阶段 | 🟢 **极高** — 有量化数据支撑，作者本身就是 serrrfirat，已与 #7491 形成链路 |
| **沙箱通用凭据代理（iron-proxy）** | [#7825](https://github.com/nearai/ironclaw/issues/7825) | 由 [PR #7810](https://github.com/nearai/ironclaw/pull/7810) 推进 | 🟢 **极高** — PR 已 OPEN，方案明确（中立化 authorized requirement 字段、托管 token 分发） |
| **OOBE 建议抽屉补全** | [#7815](https://github.com/nearai/ironclaw/issues/7815) | [PR #7816](https://github.com/nearai/ironclaw/pull/7816) 待合并 | 🟢 **极高** — 小型纯前端 PR，预计快速合并 |
| **`AfterTurn` 钩子点 + 记忆策展** | [PR #7765](https://github.com/nearai/ironclaw/pull/7765) | OPEN，Phase 1 | 🟡 **中** — 是 #7770 更大叙事的一部分，依赖 #7770 评审节奏 |
| **后台子代理模式（2b+2c）** | [PR #7818](https://github.com/nearai/ironclaw/pull/7818) | OPEN，部署门禁式 | 🟡 **中** — 涉及子代理的接收生成/递送/激活/修复扫描，是 #7788 表面背后的"生产者"层 |
| **CI 4 轨道基建** | [#7821](https://github.com/nearai/ironclaw/pull/7821) / [#7817](https://github.com/nearai/ironclaw/pull/7817) / [#7819](https://github.com/nearai/ironclaw/pull/7819) / [#7820](https://github.com/nearai/ironclaw/pull/7820) / [#7809](https://github.com/nearai/ironclaw/pull/7809) | 全部 OPEN | 🟢 **极高** — 已有并行评审基础，#7821/T1 描述最完整 |
| **APDD 治理框架评估** | [PR #7255](https://github.com/nearai/ironclaw/pull/7255) | OPEN，docs-only | 🟢 **中** — 评估类 PR，无阻塞但需核心维护者表态 |
| **WebUI 设计系统提案** | [PR #7257](https://github.com/nearai/ironclaw/pull/7257) | OPEN，docs-only | 🟢 **中** — 跨 Epic（#7038/#7781）的纲领文档，合并后才会产生具体代码任务 |
| **Notion / Slack 集成可用性** | [#7823](https://github.com/nearai/ironclaw/issues/7823) / [#7822](https://github.com/nearai/ironclaw/issues/7822) | 客户报告，待 triage | 🟡 **中** — 不在公开路线图，但属于 P0 级客户信任问题 |

---

## 7. 用户反馈摘要

### 7.1 痛点与场景

- **集成安装体验断裂**：用户反映在 IronClaw 环境中**无法安装 Notion 工具**（#7823），也**无法配置 Slack 集成**（#7822）。两条反馈均来自 Slack #x-ai-product-feedback 频道（时间戳 2026-07-28），具有明显的真实用户场景特征——非开发者的终端用户在尝试接入主流协作工具时遭遇卡点。
- **关联暗示**：#7822 明确提到"和 Notion 无法安装的问题有关联"，提示可能是**共享的 OAuth 回调/凭据流问题**或**托管 MCP 认证选择器**的交互缺陷。这恰好与刚合并的 [#7772](https://github.com/nearai/ironclaw/pull/7772)（扩展配置 phase/blockers 透传）有重叠改进面，但**实际修复是否覆盖这两条 Issue 尚不明确**，需维护者确认。

### 7.2 内部用户/贡献者关注点

- **成本经济性焦虑**（#7824）：#7491（PR 编号）的 54.4% 准确率虽然带来显著能力提升，但**单次评估消耗 $10.31** 的成本结构让核心贡献者明确呼吁 Pi 风格的压缩机制。**这是从"能力优先"转向"能力 + 成本双优"路线的强信号**。
- **首次用户体验闭环**（#7815）：维护者 rdisandro 正在系统化收口 onboarding 流程，反映团队对**漏斗转化指标**的重视。

### 7.3 满意/不满意推测

- **满意侧**：webui 净化 3 PR 一日内完成"提 Issue → 出 PR → 合并 → 关闭 Issue"全闭环（#7768 → #7773、#7767 → #7774、#7769 → #7772），**响应速度堪称模范**。
- **不满意侧**：客户 Slack 反馈进入 GitHub 后**3 天以上零响应**（7-28 → 7-31 区间至今），与内部 Issue 流转效率形成明显落差。

---

## 8. 待处理积压

按优先级与积压时长排序：

### 8.1 紧急但无响应（建议 24 小时内 triage）

| 类型 | 编号 | 标题 | 创建时间 | 积压 |
|---|---|---|---|---|
| 🐛 Bug | [#7823](https://github.com/nearai/ironclaw/issues/7823) | Notion install fails in IronClaw | 2026-08-22 | 客户报告 · 0 评论 |
| 🐛 Bug | [#7822](https://github.com/nearai/ironclaw/issues/7822) | Slack user: unable to set up Slack in IronClaw | 2026-08-22 | 客户报告 · 0 评论 |

### 8.2 大型 PR 长期待审（评审资源预警）

| PR | 大小 | 创建 | 当前状态 | 风险 |
|---|---|---|---|---|
| [#7491](https://github.com/nearai/ironclaw/pull/7491) | XL | 2026-08-11（**12 天**） | OPEN | 跨 CI/docs/dependencies；关联 #7392 slices 1-4；#7824 数据指向其成本问题，可能引发拆解 |
| [#7255](https://github.com/nearai/ironclaw/pull/7255) | XL | 2026-08-05（**18 天**） | OPEN，docs-only | APDD 治理评估，缺核心维护者结论 |
| [#7257](https://github.com/nearai/ironclaw/pull/7257) | L | 2026-08-05（**18 天**） | OPEN，docs-only | WebUI 设计系统纲领，跨 Epic |
| [#7650](https://github.com/nearai/ironclaw/pull/7650) | XL | 2026-08-14（**9 天**） | OPEN | 自动化运行结果证据化，#7700 已合并但 #7650 仍待合并 |
| [#7076](https://github.com/nearai/ironclaw/pull/7076) | XL | 2026-08-03（**20 天**） | **今日关闭** ✅ | 已被 rebase 并合并，积压解除 |

### 8.3 CI 加速 4 轨道的协调风险

[#7821](https://github.com/nearai/ironclaw/pull/7821) / [#7817](https://github.com/nearai/ironclaw/pull/7817) / [#7819](https://github.com/nearai/ironclaw/pull/7819) / [#7820](https://github.com/nearai/ironclaw/pull/7820) / [#7809](https://github.com/nearai/ironclaw/pull/7809) 五条 PR 共同声明**CI-expedite 平行轨道**。其中 #7820 **明确 stacked on #7817**，需协调合并顺序；T1/T2/T3/T4 间也可能存在隐式依赖。**建议维护者显式编排合并矩阵**，避免互相阻塞。

### 8.4 待响应 issue 中最值得优先关注

- **#7824（成本危机）**：若不尽快给出架构级回应，可能影响即将到来的版本节奏与商业化叙事。
- **#7825（沙箱凭据中立化）**：与 #7810 联动，是 IronClaw 多租户可信执行环境的关键演进。

---

## 附：当日数据指标卡

| 维度 | 数值 |
|---|---|
| 新开/活跃 Issues | 5 |
| 关闭 Issues | 4 |
| 待合并 PRs | 16 |
| 合并/关闭 PRs | 5 |
| 新版本 | 0 |
| 高评论 Issues

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报 · 2026-08-23

> 数据来源：[netease-youdao/LobsterAI](https://github.com/netease-youdao/LobsterAI) GitHub 仓库
> 统计周期：过去 24 小时

---

## 一、今日速览

过去 24 小时，LobsterAI 仓库没有新版本发布，社区活跃度处于**较低水平**：所有 2 条 Issues 更新和 5 条 PR 更新均以**关闭（stale/合并）**收尾，无新增未关闭的 Issue。值得关注的是，仓库出现了大量被自动标记为 `[stale]` 的清理动作，说明维护者最近依赖机器人策略清理长期无响应的工单，但仍有 1 条 PR（#2452）保持 OPEN 等待 review。整体来看，今日更多是"收尾"而非"推进"，但被关闭的 PR 中包含若干实质性的功能增强与 Bug 修复，项目仍在前移。

| 指标 | 数值 |
| --- | ---: |
| Issues 新开/活跃 | 0 |
| Issues 已关闭 | 2 |
| PR 待合并 | 1 |
| PR 已合并/关闭 | 5 |
| 新版本发布 | 0 |

---

## 二、版本发布

**今日无新版本发布。**

（无 Releases 数据，跳过本节。）

---

## 三、项目进展

今天共有 **5 条 PR 被关闭**，内容涵盖功能新增与缺陷修复，对项目可用性有明显正向贡献：

1. **[#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)** —— 会话详情新增「导出为 Markdown」功能
   - 作者：MaoQianTu；closes #1345
   - 在 `CoworkSessionDetail.tsx` 的操作菜单中新增"导出为 Markdown"入口，复用已有数据结构 `buildDisplayItems` + `buildConversationTurns`，按"用户消息 → 工具调用 → 助手回复"顺序生成 `.md` 文件，工具调用结果过长自动截断至 300 字，文件头部包含会话标题与导出时间。
   - **意义**：补齐了会话详情仅支持图片导出的能力短板，对长对话归档、复盘、对外分享有较高价值。

2. **[#1208](https://github.com/netease-youdao/LobsterAI/pull/1208)** —— 新增手动重试按钮，支持瞬时错误快速重试
   - 作者：swuzjb
   - 在错误提示气泡中内联一个「重试」按钮，让用户一键重发最后一条消息，重点覆盖 429（速率限制）、网络抖动、服务端瞬时错误等 `RETRYABLE_ERROR_KEYS`。
   - **意义**：显著降低"请求频繁"导致的体验摩擦，是高频使用场景下的关键 UX 提升。

3. **[#1205](https://github.com/netease-youdao/LobsterAI/pull/1205)** —— 修复会话重命名失败时无反馈
   - 作者：mingoLzm
   - `handleRenameSave` 静默吞掉错误；改为 try-catch + 本地化 toast 提示，并保持重命名输入框打开以便用户重试。
   - **意义**：典型的"静音失败"修复，避免用户误以为重命名成功。

4. **[#1209](https://github.com/netease-youdao/LobsterAI/pull/1209)** —— Web Search 屏蔽不支持的 Chrome Flag
   - 作者：0xFLX
   - 解决 `--disable-blink-features=AutomationControlled` 由外部注入导致的 web-search skill 启动失败问题（常见来源：残留 user data、外部 chromeFlags 配置、Chrome 130+ 的白名单变更）。

5. **[#1212](https://github.com/netease-youdao/LobsterAI/pull/1212)** —— 自定义模型服务商上限提升至 20 个
   - 作者：leedalei
   - 根因：Settings 中 `custom_0` ~ `custom_9` 写死；改为动态管理，支持保留旧配置同时切换到新服务商。
   - **意义**：面向企业/研究用户（多模型混合工作流）的关键能力扩展。

> 综合评价：今日合并的功能集中在 **会话导出、错误恢复、稳定性、多服务商管理** 四个方向，彼此关联性较强，属于"协作会话体验"主题的一致性增强。

---

## 四、社区热点

今日 Issues 板块的活跃度由 2 条 `[stale]` 关闭工单构成（其中 #1213 评论数：2），PR 中无明确高评论条目。社区讨论相对清淡，但以下几个议题代表了真实用户关注点：

- **会话存档与导出需求**：[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213)（Markdown 导出建议）与对应的实现 [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214)、关联参考 Issue [#1345](https://github.com/netease-youdao/LobsterAI/issues/1345) 形成完整"需求 → 实现 → 关闭"链条，是今日最具落地价值的社区信号。
- **私有化部署 + 国产生态模型的稳定性**：[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 报告了 Kimi2.5 私有化部署下文档分析时的"重复回复进度"，切模型后正常——是典型的"模型协议/解析层"兼容性问题，反应了有相当数量用户在本地化私有部署路径上运行 LobsterAI。

> 趋势判断：用户对**会话可携带性（Markdown 导出）** 和 **国产模型私有化兼容** 这两个方向正在形成持续呼声。

---

## 五、Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 标题 | 状态 | 是否有 fix PR |
| --- | --- | --- | --- | --- |
| 🔴 高 | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | OpenClaw 对带斜杠的 model id 丢失 provider 前缀（如 `deepseek-ai/DeepSeek-V4-Flash` 被存为裸 id） | **OPEN（待 review）** | 本身就是 fix PR，等待合并 |
| 🟡 中 | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Kimi2.5 私有化部署下文档分析重复回复当前动作（必现） | 已关闭（stale） | ❌ 无 follow-up |
| 🟡 中 | [#1209](https://github.com/netease-youdao/LobsterAI/pull/1209) | web-search 因外部 Chrome flag 启动失败 | 已关闭（PR 内含修复） | ✅ 自带修复 |

**重点提醒**：[#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) 是今日**唯一仍处于 OPEN 状态的 PR**，且修复了真实存在的数据持久化 Bug（model/provider 错位），建议维护者优先 review。

---

## 六、功能请求与路线图信号

今日最具确定性的功能信号：**「导出为 Markdown」**。

- 用户在 [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) 提出该需求，明确给出调用接口方案（`window.electron.dialog.saveInlineFile`）、目标文件格式与覆盖面（用户输入、AI 回复、工具调用信息）。
- 同一作者随即提交 PR [#1214](https://github.com/netease-youdao/LobsterAI/pull/1214) 并标注 closes #1345，说明该需求在社区具有共识。
- 该 PR 已被关闭（likely merged），意味着**很大概率已进入下一可用版本**。

其他具备"可纳入信号"的特性：
- **手动重试按钮** [#1208](https://github.com/netease-youdao/LobsterAI/pull/1208)：429/瞬时错误的痛点长期存在，PR 已合并，预期很快随版本发布。
- **20 个自定义服务商** [#1212](https://github.com/netease-youdao/LobsterAI/pull/1212)：从 10 扩到 20 对企业用户路径是合理的容量扩张。

---

## 七、用户反馈摘要

由于今日更新的所有 Issues/PR 评论数都很低（多为 0–2 条），可提炼的真实反馈有限：

1. **会话导出太弱**：[#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) 反映"只能截图或手动复制，操作繁琐，且图片格式不便于后续编辑和检索"——说明图片导出的局限性在长对话/知识沉淀场景下已被反复遭遇。
2. **私有化模型行为不稳定**：[#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 用户反馈"Kimi2.5 必现重复动作提示，切换模型后正常"——说明私有化模型协议层在 LobsterAI 中的兼容仍不够鲁棒，用户对稳定性"看模型脸色"的体验感到困惑。
3. **静默失败体验差**：[#1205](https://github.com/netease-youdao/LobsterAI/pull/1205) 的修复动机是"input 关闭但标题未变，无反馈"——这是协作类工具的典型 UX 雷区，但往往只有到 PR 阶段才被揭示，社区未来更应鼓励早期反馈。

> 总体满意/不满意方向：**满意面在持续扩展（会话导出、错误恢复）**，**不满面集中在私有化模型兼容性**。

---

## 八、待处理积压

| 类型 | 编号 | 标题 | 风险点 |
| --- | --- | --- | --- |
| OPEN PR | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) | fix(openclaw): preserve provider for slashed model ids | 影响模型持久化正确性，建议优先合并 |
| Stale Issue | [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) | Kimi2.5 文档分析重复处理 | 用户已报告 4+ 个月，无后续 fix PR |
| Stale Issue | [#1213](https://github.com/netease-youdao/LobsterAI/issues/1213) | 导出为 Markdown 功能建议 | 虽已有 PR #1214 闭环，但相关历史链条（如其他导出诉求）需巡检 |

**提醒**：
- 大量 `[stale]` 关闭说明 Issue/PR 的"新鲜度"管理流程已自动化运行，但同时也意味着真实用户问题可能被静默关闭（例如 [#1206](https://github.com/netease-youdao/LobsterAI/issues/1206) 的 Kimi2.5 必现 Bug 在关闭前并未获得明确结论）。建议维护者定期审计 stale 工单，确保高严重度问题不会被策略性消化。
- 今日唯一活跃的非 stale PR 为 [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452)，是健康度信号之一——说明仓库仍有真实 review 流量。

---

*报告生成时间：2026-08-23；数据口径：GitHub Issues & Pull Requests 公开 API。*

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目日报

**报告日期：** 2026-08-23
**数据来源：** GitHub `moltis-org/moltis`

---

## 1. 今日速览

Moltis 项目今日处于**中等活跃、低合并状态**：过去 24 小时内共产生 1 条 Issue 关闭与 3 条 PR 新开，但**无任何 PR 被合并、无新版本发布**。3 条 PR 均聚焦于**修复集成兼容性 Bug**（OpenAI 工具 schema、MCP 客户端重连、Browserless v2 容器），显示出当前迭代以"连接层稳定性"为主线。整体而言，项目处于"PR 蓄势"阶段，多个修复待审。

---

## 2. 版本发布

今日无新版本发布。上一版本相关动态可关注上述 PR 合并后的下一次发布。

---

## 3. 项目进展

**今日仅有 1 条 Issue 被关闭，无 PR 合并。** 推进情况如下：

- **#1230（已关闭）** — `feat(hooks): add an opt-in fail-closed error policy for modifying security hooks`
  - 由 kantorcodes 提出并已关闭，Issue 内评论数为 1
  - 该 Issue 旨在为 `BeforeToolCall` 等可写 hook 增加"失败即阻断"（fail-closed）的错误策略，弥补当前 hook 运行异常时默认降级为"继续执行"的安全策略缺陷
  - 链接：https://github.com/moltis-org/moltis/issues/1230
  - **说明：** 该条目以"已关闭"状态出现于今日数据流，但未给出明确的合并 PR 链接，推测可能由作者自行关闭（例如转为 Draft PR、合并到了未列举的 PR，或放弃该方向）。建议维护者确认该功能是否已落地或重新打开。

**整体推进度：** 项目今日主要停留在"提出修复"阶段，未产生实际代码合入，对外可交付物为零。

---

## 4. 社区热点

按评论数与👍反应排序（数据样本较小，热度均偏低）：

| 排名 | 条目 | 类型 | 评论数 | 👍 | 关注点 |
|------|------|------|--------|-----|--------|
| 1 | [#1230](https://github.com/moltis-org/moltis/issues/1230) | Issue | 1 | 0 | 安全 hook fail-closed 策略 |
| 2 | [#1232](https://github.com/moltis-org/moltis/pull/1232) | PR | - | 0 | OpenAI 工具 schema 兼容性 |
| 3 | [#1231](https://github.com/moltis-org/moltis/pull/1231) | PR | - | 0 | MCP 服务重启后客户端解析 |
| 4 | [#1229](https://github.com/moltis-org/moltis/pull/1229) | PR | - | 0 | Browserless v2 容器协议支持 |

**热点诉求分析：**
今日社区热点高度集中在**"企业/生产级可靠性"** 与**"第三方集成兼容性"** 两类问题。维护者 `IlyaBizyaev` 一人贡献了 3 条 PR 中的 2 条，体现出核心维护者在稳定性方向上的集中投入。

---

## 5. Bug 与稳定性

按严重程度排序，今日报告 3 条 Bug，均已有对应修复 PR：

### 🔴 高严重度

**[#1231](https://github.com/moltis-org/moltis/pull/1231) — fix(mcp): resolve current client after server restart**
- **作者：** IlyaBizyaev | **状态：** 待合并
- **问题：** MCP 工具桥接层在工具注册同步时**捕获了当时的 client 引用**。当 MCP 服务重启后，旧 client 被关闭、新 client 接管，但**正在进行的聊天回合仍通过已关闭的 client 实例派发**，直到下一回合重建注册表为止。这是一个典型的"陈旧引用"导致的下游失败。
- **影响：** 用户在 MCP 服务重启期间发起的请求可能失败或静默丢失，属于**影响生产可靠性的关键 Bug**。
- **修复方案：** 让每个 server connection 保持自身的 client 引用，避免捕获过期实例。

### 🟡 中严重度

**[#1232](https://github.com/moltis-org/moltis/pull/1232) — fix(tools): make object schemas OpenAI-safe**
- **作者：** IlyaBizyaev | **状态：** 待合并
- **问题：** OpenAI 严格模式（strict tool schemas）下，对象会被强制 `additionalProperties=false`。未声明的 patch / map 字段会导致 **Codex 发送 null 或空值代替请求数据**。
- **修复方向：** 显式声明 cron 与 webhook 的 patch 字段；将 MCP 环境变量表达为固定 name/value entries。
- **影响：** 直接影响调用 OpenAI/Codex 模型的用户体验，属于**跨厂商兼容性 Bug**。

### 🟢 中低严重度

**[#1229](https://github.com/moltis-org/moltis/pull/1229) — fix(browser): support Browserless v2 containers**
- **作者：** rubenssoto | **状态：** 待合并
- **问题：** 当前 Browserless 集成基于 v1 镜像与协议，**不支持 v2 容器协议**。
- **修复方向：** 新增 v2 容器协议完整支持，**保留 v1 作为默认行为**（避免破坏性变更）；v2 启动参数通过 Base64 `launch` websocket 查询下发；保留 quit/timeout/concurrent 语义。
- **影响：** 主要影响希望升级到 Browserless v2 的部署方，属"能力补齐"型修复。

---

## 6. 功能请求与路线图信号

**[#1230](https://github.com/moltis-org/moltis/issues/1230) — fail-closed error policy for modifying security hooks**
- **信号意义：** 用户希望将"hook 失败"作为**安全边界**来对待，而不是默认降级。这是面向**安全敏感型部署（企业、合规场景）** 的明确诉求。
- **落地可能性：** 中等。Issue 已关闭但未关联合并 PR，需要追踪其后续归宿。若被纳入路线图，将显著提升 Moltis 在安全审计场景的可用性。

**[#1229](https://github.com/moltis-org/moltis/pull/1229) — Browserless v2 支持**
- 反映社区希望 Moltis **跟随上游 Browserless 版本演进**，避免工具链老化。建议在 v2 稳定后适时将其切为默认。

---

## 7. 用户反馈摘要

> ⚠️ **数据限制说明：** 今日数据中，仅 Issue #1230 有 1 条评论，其余 PR 评论数均未提供（标记为 `undefined`），且所有条目👍数均为 0。以下分析基于 Issue/PR 摘要文本推断。

**提炼的真实痛点：**

1. **安全 hook 降级策略不可接受**（#1230）
   - 用户明确指出"shell-hook timeout"等运行时失败不应**默认放行**，而是阻断。当前 fail-open 默认值在安全边界场景下构成风险。

2. **OpenAI 严格模式 schema 不兼容**（#1232）
   - Codex 用户反馈 patch/map 字段被强制置空，反映出 Moltis 的 schema 生成逻辑在跨厂商严格模式下存在普遍性适配缺口。

3. **MCP 长会话中的连接泄漏**（#1231）
   - 用户场景：MCP server 在运行期重启时，活跃聊天回合失败。这是**多连接长会话**架构下的典型陷阱。

4. **浏览器自动化依赖升级滞后**（#1229）
   - 用户希望使用 Browserless v2，反映出**生产部署对工具链版本敏感**。

**满意度信号：** 无明确正面或负面评价样本（👍数据全为 0），今日反馈整体偏向"问题上报"而非"功能讨论"。

---

## 8. 待处理积压

**3 条待合并 PR 均创建于 2026-08-22，距今约 1–2 天，处于正常 review 窗口内**，但需提醒维护者关注：

| 优先级 | 条目 | 风险点 |
|--------|------|--------|
| **P0** | [PR #1231](https://github.com/moltis-org/moltis/pull/1231) MCP client 重连 | 影响生产可靠性，建议优先 review |
| **P1** | [PR #1232](https://github.com/moltis-org/moltis/pull/1232) OpenAI schema | 影响 Codex 用户，建议尽快合并 |
| **P2** | [PR #1229](https://github.com/moltis-org/moltis/pull/1229) Browserless v2 | 向后兼容，无紧迫性 |

**待确认事项：**
- **Issue #1230** 已关闭但无关联合并 PR，维护者需澄清该功能是否落地、是否会重新打开，或是否在分支中已实现但未关联。
- 3 条 PR 均无 reviewer 互动记录，建议设置 reviewer assignee 以加速流转。

---

## 📊 项目健康度评分

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐⭐☆☆ | 有 PR 进入，但无合并 |
| 代码合并速度 | ⭐⭐☆☆☆ | 24h 内 0 PR 合并 |
| 社区响应 | ⭐⭐☆☆☆ | 评论与反应数据稀薄 |
| 议题质量 | ⭐⭐⭐⭐☆ | Bug 描述清晰，影响范围明确 |
| 向后兼容 | ⭐⭐⭐⭐⭐ | 所有 PR 明确声明不引入破坏性变更 |

**总体判断：** 项目方向健康、修复目标明确，但**合并节奏**是当前主要瓶颈。建议维护者在本周内集中处理 3 条待合并 PR，以释放积压。

---

*本报告基于 2026-08-23 GitHub 公开数据生成，所有链接均指向 `moltis-org/moltis` 仓库。*

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw / QwenPaw 项目动态日报
**日期：2026-08-23**

> 📌 **数据源说明**：本期日报所采集的 Issues/PR 数据全部来源于 `agentscope-ai/QwenPaw` 仓库（与项目名"CoPaw"存在命名差异，推测为同一项目线或姊妹仓库）。本报告以原始数据为准进行分析。

---

## 1. 今日速览

项目当日整体活跃度处于**中等水平**：共记录 7 条 Issue 更新（6 活跃 + 1 已关闭）、4 条 PR 更新（全部待合并，无合并/关闭动作），且无新版本发布。Issue 侧以**Bug 报告**为主（4 条），辅以 2 条增强请求和 1 条历史 Issue 关闭，表明社区用户更聚焦于**当前版本的稳定性与体验**而非新功能。PR 侧无任何合入，说明维护者当前的 review 通道存在积压，需关注处理时效。整体来看，项目处于"**反馈活跃、版本静止**"的稳态阶段。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日**无任何 PR 合并或关闭**，4 条待处理 PR 均保持 Open 状态：

- **#7214** — docs(readme): 将 Access Policy 列为第五层安全防线 ([链接](https://github.com/agentscope-ai/QwenPaw/pull/7214))
- **#7054** — feat(chrome): 支持远程 bridge 端点，扩展 LAN/网络浏览器 ([链接](https://github.com/agentscope-ai/QwenPaw/pull/7054))
- **#7050** — feat(console): 为每个 Cron Job 增加模型选择器 ([链接](https://github.com/agentscope-ai/QwenPaw/pull/7050))
- **#6808** — fix(console): 显示自定义 Profile Markdown 文件 ([链接](https://github.com/agentscope-ai/QwenPaw/pull/6808))

**推进评估**：项目代码主线今日未向前迈进，但 4 条 PR 中有 3 条来自 [first-time-contributor] 标签，表明社区贡献者入口持续敞开，建议维护者尽快 review 以维持贡献者积极性。

---

## 4. 社区热点

| 排名 | Issue | 互动量 | 关注点 |
|---|---|---|---|
| 🥇 | [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 2 评论 / 1 👍 | **默认折叠推理过程**：用户在关注工作进程时，认为持续展示 reasoning 链是严重的视觉干扰 |
| 🥈 | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | 1 评论 | 工具名被字符替换（`l`→`\|`）导致 `ToolNotFoundError` |
| 🥉 | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | 1 评论 | OpenRouter / OpenCode 模型添加后 GUI 无法完整展示 |

**诉求分析**：排名第一的 #7196 是典型的 **UX 偏好问题**——用户希望借鉴 Hermes 等竞品的做法，将"推理过程"折叠为可展开区域。Issue 中已附截图佐证，对维护者而言属于**低成本高收益**的体验改进，建议优先处理。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | Issue | 简述 | 是否已有 Fix PR |
|---|---|---|---|
| 🔴 高 | [#7216](https://github.com/agentscope-ai/QwenPaw/issues/7216) | `execute_shell_command` 工具名在 LLM 输出中被字符替换（`l`→`\|`），导致 `ToolNotFoundError`，**直接影响 agent 工具调用成功率** | ❌ |
| 🔴 高 | [#7212](https://github.com/agentscope-ai/QwenPaw/issues/7212) | 内联图片像素尺寸超过 provider 限制时请求直接崩溃（`MODEL_EXECUTION_ERROR`），**未做降级处理**，且会结束会话 | ❌ |
| 🟡 中 | [#7215](https://github.com/agentscope-ai/QwenPaw/issues/7215) | 添加 OpenRouter / OpenCode 模型后桌面 GUI 无法完整显示 | ❌ |
| 🟡 中 | [#7213](https://github.com/agentscope-ai/QwenPaw/issues/7213) | 会话输出持续出现无意义空行，prompt 干预无效（v2.1.0） | ❌ |
| 🟢 低 | — | — | — |

**关键观察**：
- 今日 4 条 Bug 中**没有任何一条**有对应修复 PR，处于"全裸"状态。
- #7212 与 #7201（功能请求）由同一作者 xiaoka76 提出，二者协同指向**多模态入参校验与降级**这一系统性短板，建议维护者优先规划。
- #7216 涉及的字符替换问题可能与 tokenizer/输出渲染层相关，存在跨场景扩散风险。

---

## 6. 功能请求与路线图信号

| Issue | 提议 | 与已有 PR 关联 |
|---|---|---|
| [#7196](https://github.com/agentscope-ai/QwenPaw/issues/7196) | 默认折叠推理过程，可在设置中切换 | 无对应 PR，**实现成本低**，建议尽快排期 |
| [#7201](https://github.com/agentscope-ai/QwenPaw/issues/7201) | 将 `max_inline_media_bytes` 拆分为 `max_image_bytes` / `max_video_bytes` / `max_audio_bytes` 三项独立配置，并在高级设置 UI 暴露 | 无对应 PR，但与 #7212 关联，**建议作为同一迭代修复** |
| [#7043](https://github.com/agentscope-ai/QwenPaw/issues/7043) | 启动时执行 `chcp 65001` 切换 UTF-8 | ✅ 已 **CLOSED**（2026-08-22），但无关联合并 PR 公告，可能是 duplicate / wontfix / 后续 commit 处理 |

**路线图预判**：媒体处理（#7201 + #7212）与 UI/UX（#7196）构成下一版本最有可能吸纳的两条改进线。

---

## 7. 用户反馈摘要

- **rerbin（#7196）**：核心痛点为"**视觉噪音**"——推理链默认展开干扰用户对实际工作流的关注。竞品 Hermes 的处理方式被点名表扬，说明用户已具备跨产品对比视野。
- **liuyils（#7216）**：反映了 **LLM 输出非确定性带来的系统脆弱性**——单个字符的渲染差异即可击穿工具调用流程。
- **NicholaLau（#7215）**：在尝试接入第三方模型（OpenRouter / OpenCode）时遇到 GUI 适配问题，反映**多 provider 生态兼容性**是新用户的真实痛点。
- **xiaohushi512（#7213）**：v2.1.0 版本下空行问题"说了 N 次仍存在"，传达出对**模型行为不可控**的挫败感。
- **xiaoka76（#7212/#7201）**：从开发者视角提出**健壮性 + 精细化配置**的复合诉求，是高质量反馈的代表。
- **One-sixth（#7043）**：Windows 中文环境下的 UTF-8 痛点，Issue 关闭但具体处理方式不明。

---

## 8. 待处理积压

| 编号 | 类型 | 停滞时长 | 备注 |
|---|---|---|---|
| [#6808](https://github.com/agentscope-ai/QwenPaw/pull/6808) | PR | 16 天（2026-08-07 起） | 修复自定义 Profile 文件不显示，[first-time-contributor]，**存在劝退风险** |
| [#7050](https://github.com/agentscope-ai/QwenPaw/pull/7050) | PR | 8 天 | Cron Job 模型选择器 |
| [#7054](https://github.com/agentscope-ai/QwenPaw/pull/7054) | PR | 8 天 | Chrome 远程 bridge 端点 |

**提醒**：3 条 first-time-contributor PR 长期处于 review 真空，建议维护者至少给出"已收到 / 在排期"的简短反馈，以维护社区贡献热情。

---

## 📊 项目健康度速览

| 维度 | 评级 | 说明 |
|---|---|---|
| 社区活跃度 | 🟢 中等偏高 | 24h 内 7 条 Issue 更新，单日反馈量充足 |
| 维护响应速度 | 🟡 待改进 | 0 PR 合并、0 新版本，积压 4 条 PR |
| 稳定性 | 🔴 风险上升 | 4 条 Bug 全部处于"无 fix PR"状态，含 2 条高严重度 |
| 贡献者多样性 | 🟢 良好 | 当日 PR 中 first-time-contributor 占比 75% |
| 文档同步 | 🟢 良好 | #7214 主动补齐 README 安全层描述 |

---

*报告基于 2026-08-22 至 2026-08-23 的 GitHub 数据自动生成。*

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-08-23

---

## 1. 今日速览

ZeroClaw 项目今日维持高强度迭代节奏，过去 24 小时共处理 **100 条** Issue/PR 更新（Issue 50 条 + PR 50 条），整体活跃度处于高位。讨论焦点高度集中在 **RFC 架构治理** 与 **安全/沙箱加固** 两大主题，#9487 协议级会话架构 RFC 进入第二版修订，#6996 沙箱策略与 #10164 高风险命令绕过等高危议题持续推进。值得注意的是，已关闭的 10 条 Issue 与 6 条 PR 中，多数为桌面端、文档、配置加载等中低危修复，P1 级高危问题（Windows 测试、命令审计默认值）仍开放待处理。

---

## 2. 版本发布

⚠️ **今日无新版本发布**。v0.9.0 认证/安全/网关/破坏性变更队列（[#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432)）仍在协调中，多个核心 PR（如 #7821 SandboxPolicy、#9744 网关鉴权）处于待合并状态。

---

## 3. 项目进展

今日合并/关闭 **6 条 PR**，主要推进方向如下：

| PR | 标题 | 影响力 |
|---|---|---|
| [#9291](https://github.com/zeroclaw-labs/zeroclaw/pull/9291) | fix(cli): 检测已安装的 AppImage 并使用有效下载 URL | 🟢 桌面端可用性修复 |
| [#9694](https://github.com/zeroclaw-labs/zeroclaw/pull/9694) | feat(zerocode): 将 SOP 面板暴露为只读状态视图 | 🟡 SOP 里程碑可视化 |
| [#9281](https://github.com/zeroclaw-labs/zeroclaw/pull/9281) | fix(config): config/set 失败时回滚自动创建的 map aliases | 🟢 配置事务性增强 |
| [#9203](https://github.com/zeroclaw-labs/zeroclaw/pull/9203) | fix(sop): 接入认证 HTTP fan-in | 🟡 SOP 控制平面安全加固 |
| 对应 Issue | | |
| [#9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202) | zeroclaw desktop 下载链接失效 | ✅ 已关闭 |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) | config init 写入模板导致严格加载失败 | ✅ 已关闭 |
| [#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) | WhatsApp Web 文档引用不存在的 V2 字段 | ✅ 已关闭 |
| [#9339](https://github.com/zeroclaw-labs/zeroclaw/issues/9339) | 支持 MCP 远端服务器自定义 CA 信任 | ✅ 已关闭 |
| [#9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682) | zerocode SOP 面板 MVP 状态可见性 | ✅ 已关闭 |
| [#9255](https://github.com/zeroclaw-labs/zeroclaw/issues/9255) | WASM 插件调用无墙钟超时 | ✅ 已关闭 |

**整体评估**：今日进展以"安全诚实化 + 桌面体验修复 + SOP 控制平面"为三条主线。文档与配置类问题闭环率高，P0/P1 高危缺陷仍处开放状态，项目健康度处于**安全收紧阶段的中后期**。

---

## 4. 社区热点

今日讨论最热烈的议题集中在架构级 RFC：

### 🔥 [#9487 — RFC: Runtime-owned conversation sessions and transport surface adapters](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) — 24 评论
作者 NiuBlibing 提出的核心协议级 RFC，已进入 Rev. 2。诉求是**厘清运行时与会话/传输层的所有权边界**，所有迁移入口必须提交 `InboundAction`，并引入持久化准入与歧义结果语义。这关系到整个 agent ↔ channel ↔ gateway 三角的责任划分，是 v0.9.0 的方向性议题。

### 🔥 [#7462 — 74 个 Windows 测试失败](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) — 19 评论
长期未解的 P1 级 bug。CI 仅 Linux 覆盖，Windows 11（简体中文控制台，代码页 936）出现大量 Unix 假设的路径/编码/控制台语义失败。社区对跨平台测试覆盖的呼声强烈。

### 🔥 [#8692 — Maintainer decision queue for RFCs and design issues](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — 13 评论
由 Audacity88 维护的 RFC/设计决策跟踪器，集中管理需要维护者或 code-owner 关注的设计议题。社区诉求是**建立透明的决策排队机制**，避免大量 RFC 沉积无响应。

### 其他高讨论度
- [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) — 细粒度沙箱策略（11 评论）
- [#8396](https://github.com/zeroclaw-labs/zeroclaw/issues/8396) — Wire protocol 作为 provider 构造一等公民（9 评论）
- [#10050](https://github.com/zeroclaw-labs/zeroclaw/issues/10050) — Gateway 直发通道消息不经 agent turn（4 评论，今日新进展）

---

## 5. Bug 与稳定性

按严重程度排序：

### 🚨 P1 高危（直接影响核心功能/安全）
| Issue | 描述 | 是否有修复 PR |
|---|---|---|
| [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) | Windows 74 测试失败 | ❌ 无 |
| [#9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640) ~~WhatsApp 文档引用过期字段~~ | ✅ 已关闭 |
| [#9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436) ~~config init 模板引发严格加载失败~~ | ✅ 已关闭 |
| [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) | 文件系统 channel listener 非 cancellation-aware | ❌ 无 |
| [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) | agent-browser 子进程等待无超时 | ❌ 无 |
| [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) | `block_high_risk_commands=false` 未被尊重，高危命令仍被硬拦截 | ❌ 无 |

### ⚠️ P2 中危
- [#9718](https://github.com/zeroclaw-labs/zeroclaw/issues/9718) — Telegram channel 在 tool_call + content 同时存在时重复发送
- [#9708](https://github.com/zeroclaw-labs/zeroclaw/issues/9708) — Daemon 启动器 stdout/stderr 无大小/年龄/数量边界（潜在磁盘耗尽）
- [#9001](https://github.com/zeroclaw-labs/zeroclaw/issues/9001) — Provider turn 失败时错误诊断被通用 retry 信封掩盖
- [#9590](https://github.com/zeroclaw-labs/zeroclaw/issues/9590) — `models refresh` 并发执行可能丢失缓存条目
- [#10232](https://github.com/zeroclaw-labs/zeroclaw/issues/10232) — Daemon 诊断丢失底层错误链
- [#10251](https://github.com/zeroclaw-labs/zeroclaw/issues/10251) — 17 个 telegram listen_* 测试基于墙钟断言（同 #9429 类缺陷）
- [#9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945) — browser tool 仅暴露 agent-browser 16/100+ 命令，iframe/对话框/标签/表单控件不可达

**稳定性观察**：P1 高危问题整体开放比例偏高，且多个无对应修复 PR。建议维护者优先关注 [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164)（安全策略绕过）与 [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946)（浏览器工具挂死）。

---

## 6. 功能请求与路线图信号

### 大概率进入下一版本（已有对应 PR 推进）
- **SandboxPolicy 一等公民** — [#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) 配套 [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996)，canonical schema + 应用层强制
- **ZeroRouter preset + device-flow login** — [#9645](https://github.com/zeroclaw-labs/zeroclaw/pull/9645) 自托管 metered LLM gateway
- **modality parser 接入 capabilities_for_model** — [#9743](https://github.com/zeroclaw-labs/zeroclaw/pull/9743)
- **Hailo-Ollama 原生 provider** — [#9109](https://github.com/zeroclaw-labs/zeroclaw/pull/9109)
- **A2A 出站客户端 Phase 1** — [#9324](https://github.com/zeroclaw-labs/zeroclaw/pull/9324)，默认关闭
- **将 channel/tools 从编译期 feature flag 迁移到 WASM 运行时插件** — [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850)
- **网关 webhook 鉴权门槛** — [#9744](https://github.com/zeroclaw-labs/zeroclaw/pull/9744)（WhatsApp Cloud / Linq / Nextcloud Talk）

### 信号较强但尚未动工
- **Cron 任务的确定性前置门**（#5607）— 提议以退出码 0/10 控制放行/跳过
- **Realtime voice-host channel**（#7943）— backend-agnostic WS 客户端，Wyoming 对齐
- **零代码 web dashboard 全面平替**（#7790）
- **session 可用性提升**（#10141）— 用户对"复盘历史会话"体验不满

---

## 7. 用户反馈摘要

- **🔴 [klonuo #10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141)** — 用户明确表达"使用 zerocode 会话很 frustrating"，具体痛点：(1) 复制会话或最后一条消息路径繁琐；(2) zerocode 仅能复制片段代码，且需要点两个 ASCII 按钮。反映出 **TUI 与 Web 在会话管理体验上的显著落差**。

- **🟡 [ax-fe #9202](https://github.com/zeroclaw-labs/zeroclaw/issues/9202)** — 用户反馈 `zeroclaw desktop` 提示"未安装"但实际已注册 AppImage，最终被迫手动下载。对**桌面端检测逻辑的鲁棒性**不满。✅ 已被 PR #9291 修复。

- **🟡 [tw-360vier #9436](https://github.com/zeroclaw-labs/zeroclaw/issues/9436)** — `config init` 写入的模板让"全新配置一出生就降级"，且 `config migrate` 退出码为 1。**Onboarding 首印象严重受损**。✅ 已关闭。

- **🟡 [belumume #9640](https://github.com/zeroclaw-labs/zeroclaw/issues/9640)** — 文档注释引用 V2 字段 `allowed_numbers`，V3 实际无此配置键，**按文档配置后配置不生效**。属于文档与代码漂移类典型问题。✅ 已关闭。

- **🟢 [IftekharUddin #9682](https://github.com/zeroclaw-labs/zeroclaw/issues/9682)** — SOP 面板 MVP 状态可见性已交付，用户满意推进，但 Run/Resume 仍延期。

- **🟡 [NiuBlibing #9945](https://github.com/zeroclaw-labs/zeroclaw/issues/9945)** — `browser` tool 仅暴露 16/100+ 命令，iframe/对话框/标签/表单控件不可达。**agent 浏览器自动化能力受限**，影响真实业务场景。

---

## 8. 待处理积压（提醒维护者关注）

下列 Issue/PR 长期处于高优先级但仍未推进，建议纳入下一冲刺：

| 类型 | 链接 | 等待时间 | 备注 |
|---|---|---|---|
| P1 Bug | [#7462](https://github.com/zeroclaw-labs/zeroclaw/issues/7462) Windows 测试 | 2026-06-10 起 ~74 天 | 无对应修复 PR |
| P1 Bug | [#10164](https://github.com/zeroclaw-labs/zeroclaw/issues/10164) `block_high_risk_commands` 不生效 | 2026-08-20 起 3 天 | 安全策略绕过，需紧急修复 |
| P1 Bug | [#9946](https://github.com/zeroclaw-labs/zeroclaw/issues/9946) agent-browser 子进程无超时 | 2026-08-12 起 11 天 | 浏览器工具挂死 |
| P1 Bug | [#9666](https://github.com/zeroclaw-labs/zeroclaw/issues/9666) 文件系统 listener cancellation | 2026-08-02 起 21 天 | 影响 supervisor shutdown |
| RFC | [#9487](https://github.com/zeroclaw-labs/zeroclaw/issues/9487) Runtime-owned sessions | 2026-07-28 起 26 天 | Rev. 2 待批准 |
| RFC | [#6996](https://github.com/zeroclaw-labs/zeroclaw/issues/6996) 细粒度沙箱策略 | 2026-05-28 起 ~87 天 | 已有 #7821 PR 配合，仍 in-progress |
| Feature | [#8850](https://github.com/zeroclaw-labs/zeroclaw/issues/8850) 编译期 → 运行时 WASM 插件 | 2026-07-08 起 46 天 | 二进制体积战略 |
| Feature | [#5607](https://github.com/zeroclaw-labs/zeroclaw/issues/5607) Cron 前置门 | 2026-04-10 起 ~135 天 | 长期未动工 |
| Tracker | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) v0.9.0 安全/网关队列 | 2026-06-09 起 ~75 天 | v0.9.0 发布前需重点 review |
| Feature | [#10141](https://github.com/zeroclaw-labs/zeroclaw/issues/10141) Zenocode session 可用性 | 2026-08-19 起 4 天 | 用户体验痛点 |

---

## 📊 健康度看板

| 指标 | 数值 | 评价 |
|---|---|---|
| 24h 活跃 Issue | 40 | 🟢 高活跃 |
| 24h 关闭 Issue | 10 (25%) | 🟡 中等闭环率 |
| 24h 待合并 PR | 44 | 🟡 积压较多 |
| 24h 合并/关闭 PR | 6 (12%) | 🟡 偏低 |
| P1 开放 Bug | 4+ | 🔴 需关注 |
| 新版本发布 | 0 | 🟡 距 v0.9.0 仍远 |
| RFC 活跃度 | 高 (#9487, #6996, #8396, #10050) | 🟢 治理活跃 |
| 安全议题占比 | ~40% 更新涉及 security 标签 | 🟢 安全加固主线 |

**总体判断**：项目处于 **v0.9.0 前安全收紧阶段**，RFC 治理与架构整合是主线，但 P1 级 Bug 修复节奏偏慢，PR 积压达到 44 条。建议维护者适度将带宽从 RFC 评审转向高危缺陷修复。

---

*报告生成时间：2026-08-23 · 数据来源：ZeroClaw GitHub Repository*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*