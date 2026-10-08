# OpenClaw 生态日报 2026-10-08

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-08 03:59 UTC

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

**报告日期：2026-10-08**

---

## 1. 今日速览

OpenClaw 今日发布 **v2026.10.1-beta.2** Beta 版本，重点围绕"会话与记忆"子系统修复与优化，过去 24 小时内 Issue 池新增/活跃 445 条、关闭 55 条，PR 池活跃 500 条（待合并 367、已合并/关闭 133），整体活跃度处于**中高水位**。讨论焦点显著复现了"Sessions/Memory/订阅"领域的若干 P0/P1 Bug（如梦境晋升停滞、Doctor 回归、子代理结算死循环、Mac 唤醒后 runtime publication 超时等），说明该模块仍是当前版本的稳定性瓶颈。从指标看，项目维护响应（5条新增 XML、`🐚 platinum hermit` 与 `🦞 diamond lobster` 高分标签占比可观）维持稳定，但 P0/P1 积压较多，**整体健康度评估为"活跃但承压"**。

---

## 2. 版本发布

### 🚢 v2026.10.1-beta.2

**Release 链接：** [openclaw/openclaw Release v2026.10.1-beta.2](https://github.com/openclaw/openclaw/releases/tag/v2026.10.1-beta.2)

**核心 Highlights（Sessions & memory 方向）：**

- **跨注册表变更保留使用情况**（preserved usage across registry changes）—— 解决注册表元数据变更时 token/配额计数丢失问题。
- **从远程工作区下发 worker 附件**（delivered worker attachments from remote workspaces）—— 子代理/worker 现在可以从其归属的远程 workspace 获取 attachment 资源。
- **阻止队列取消与 transcript 别名卡住活跃 turn**（prevented queued cancellations and transcript aliases from stalling active turns）—— 直指 [Issue #150635](https://github.com/openclaw/openclaw/issues/150635) 这类"dreaming deep phase never promotes"卡顿问题的根因之一。
- **保持续接签名一致**（kept continuation signatures aligned）—— 多 turn 链路上 signature 对齐，修复 #48709 这类 Gemini `textSignature` 会话膨胀问题。
- **迁移 embedding 缓存**（migrated embedding caches）—— 记忆子系统升级伴随存储迁移。

**破坏性变更 / 迁移注意事项：**

- ⚠️ 该版本为 **beta**，不建议生产环境直接采用。
- 由于 embedding 缓存迁移，升级后**首次启动时间可能明显变长**，建议保留旧版本以备回滚。
- 建议在升级前运行 `openclaw doctor` 配合 [Issue #142585](https://github.com/openclaw/openclaw/issues/142585) 涉及的合法 legacy workspace 校验路径，避免迁移卡顿。

---

## 3. 项目进展

今日 PR 池合并/关闭 133 条，从展示的高优先级变更可见几条**主线推进**：

### ✅ 已合并 / 已关闭

| PR | 内容 | 影响 |
|---|---|---|
| [#166938](https://github.com/openclaw/openclaw/pull/166938) | 恢复嵌入式 runner E2E 覆盖（补全 17 个用例） | 测试基础设施补齐 |
| [#166854](https://github.com/openclaw/openclaw/pull/166854) | 修复 logical transcript store 下 child recovery 失败（解锁 #165741） | 子代理恢复链路 |
| [#137531](https://github.com/openclaw/openclaw/pull/137531) | 从共享 display projection 中剥离内部 runtime context envelopes | P1 安全 / 会话完整性 |

### 🔧 重要待合并（"👀 ready for maintainer look"）

- **Codex 体验改善**：[#84680](https://github.com/openclaw/openclaw/pull/84680)（直接读取列出 `SKILL.md`）、[#156531](https://github.com/openclaw/openclaw/pull/156531)（首 turn 即运行原生 account 模型）、[#141270](https://github.com/openclaw/openclaw/pull/141270)（workspace persona + memory 随 thread developer carrier 传递）—— 三连击共同把 Codex 路径的"首 turn 即稳定"向前推了一大步。
- **安全与凭据路径**：[#144065](https://github.com/openclaw/openclaw/pull/144065) 把 auth-profile SecretRef 路由到**真正发现的 store**而非默认 agent DB，闭合 [Issue #143262](https://github.com/openclaw/openclaw/issues/143262)（P1，`impact:security`）。
- **凭据规范化**：[#143781](https://github.com/openclaw/openclaw/pull/143781) 用 canonical auth 替代生成式 catalog 中重复的 provider 凭据。
- **CLI 子代理委托**：[#138596](https://github.com/openclaw/openclaw/pull/138596) 修复 CLI/backend agent 调 `openclaw.chat` 的 delegated approval 链路（关联 [#136036](https://github.com/openclaw/openclaw/issues/136036)）。
- **Cron 性能**：[#140096](https://github.com/openclaw/openclaw/pull/140096) 用 session visibility filtering 加速 cron job list。
- **UI 可用性**：[#144596](https://github.com/openclaw/openclaw/pull/144596) 修复 macOS app 中 "New window/New tab" 触发"Allow pop-ups"的体验回归；[#144324](https://github.com/openclaw/openclaw/pull/144324) Control UI Markdown 渲染 LaTeX；[#150045](https://github.com/openclaw/openclaw/pull/150045) `/approve` 页浅色主题下 Allow 按钮可读性。
- **Doctor 优化**：[#166955](https://github.com/openclaw/openclaw/pull/166955) Doctor 不再捕获未使用的插件依赖树。
- **Gateway 诊断**：[#166942](https://github.com/openclaw/openclaw/pull/166942) 修复 `gateway start` 在已有进程但未就绪时误报 success；[#166946](https://github.com/openclaw/openclaw/pull/166946) 修复 Gateway 启动失败被无关日志遮挡。
- **Windows 兼容**：[#142875](https://github.com/openclaw/openclaw/pull/142875) 识别 asdf Node 与 pnpm CLI；[#138344](https://github.com/openclaw/openclaw/pull/138344) 修复 Windows Defender 误报 scheduled-task 健康检查。

**整体推进评估：** 今天合并数量不多（133 条中真正高价值的少），但**待合并的"Ready for maintainer look"PR 含金量高**——主要集中在凭据/安全边界、Codex 首 turn、CLI 委托链路、UI 体验修复四条主线，意味着下一 stable 版本（2026.10.1 GA）有可能完成度不错。

---

## 4. 社区热点

按评论数排序的今日讨论焦点：

| 排名 | 编号 | 主题 | 评论数 | 状态 |
|---|---|---|---|---|
| 1 | [#150635](https://github.com/openclaw/openclaw/issues/150635) | 短期 recall retention 逐出已 recall 条目，dreaming deep phase 无法晋升 | 19 | OPEN |
| 2 | [#97616](https://github.com/openclaw/openclaw/issues/97616) | OpenClaw 泄漏未收割的 hook/tool 子进程，僵尸堆积 | 18 | OPEN |
| 3 | [#142585](https://github.com/openclaw/openclaw/issues/142585) | 2026.9.3 Doctor 拒绝合法 legacy workspace 与 attestation 导入 | 18 | OPEN |
| 4 | [#68596](https://github.com/openclaw/openclaw/issues/68596) | 可配置 streaming watchdog timeout（支持 extended reasoning 模型） | 17 | OPEN |
| 5 | [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI-backed 子代理 announce-wake turn 无工具，伪造 tool call 输出 | 16 | OPEN |
| 6 | [#79902](https://github.com/openclaw/openclaw/issues/79902) | 在 database-first runtime 之上加 SQLite transcript seam | 15 | OPEN |
| 7 | [#43367](https://github.com/openclaw/openclaw/issues/43367) | 多代理编排不稳定：concurrent add/config 覆盖、session-lock 失败 | 15 | OPEN |
| 8 | [#159612](https://github.com/openclaw/openclaw/issues/159612) | 子代理结算无限重试 "owner changed before settlement" | 15 | **CLOSED** |
| 9 | [#136183](https://github.com/openclaw/openclaw/issues/136183) | ssh 命令执行器卡在 banner 阶段被 SIGTERM（2026.8.1 回归） | 14 | OPEN |
| 10 | [#157630](https://github.com/openclaw/openclaw/issues/157630) | `--max-old-space-size` 静默覆盖 worker `resourceLimits` | 13 | OPEN

**诉求分析：**

- **"Sessions / Memory / 工具执行"三大子系统的稳定性** 是当前社区关注绝对核心（占 50%+ 高热议题）。
- 多个高赞 Issue 揭示了用户对**长任务/长程记忆/长程 streaming** 场景的痛点（如 [#68496](https://github.com/openclaw/openclaw/issues/68596)、[#150635](https://github.com/openclaw/openclaw/issues/150635)），揭示 OpenClaw 用户群体正在跑 extended reasoning 模型（kimi-k2.5、DeepSeek-R1）这类高 token / 长延迟场景。
- **多代理**（[#43367](https://github.com/openclaw/openclaw/issues/43367)）、**子代理委派**（[#121661](https://github.com/openclaw/openclaw/issues/121661)、[#159612](https://github.com/openclaw/openclaw/issues/159612)）是另一个被反复报告的痛点 —— 这与今日合并的 [#138596](https://github.com/openclaw/openclaw/pull/138596) 方向吻合。
- 唯一一个进入闭环的高热 Issue 是 [#159612](https://github.com/openclaw/openclaw/issues/159612)（子代理结算死循环），说明维护者确实在主动清理这一类会话完整性问题。

---

## 5. Bug 与稳定性

按严重程度排列（P0 → P3）：

### 🔴 P0（影响发布/升级）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#142585](https://github.com/openclaw/openclaw/issues/142585) | 2026.9.3 Doctor 拒绝合法 legacy workspace 迁移 | ❌ 未见 fix PR |
| [#137177](https://github.com/openclaw/openclaw/issues/137177) | `@wecom/wecom-openclaw-plugin@2026.7.2` 安装失败 | ❌ 未见 fix PR |
| [#156112](https://github.com/openclaw/openclaw/issues/156112) | npm global 升级卡在 global install swap（直接 npm install -g 13 秒成功） | ❌ manual-only |
| [#160548](https://github.com/openclaw/openclaw/issues/160548) | 2026.9.6 prepared-model-catalog worker 每 5 分钟泄漏 ~1 GiB | ❌ 未见 fix PR |
| [#158592](https://github.com/openclaw/openclaw/issues/158592) | macOS 睡眠唤醒后 prepared model runtime publication 超时且不可恢复 | ❌ 未见 fix PR |
| [#157812](https://github.com/openclaw/openclaw/issues/157812) | Windows auto-update 三种失败模式累计 5 次 | ❌ manual-only |

### 🟠 P1（生产影响显著）

| Issue | 标题 | 是否有 fix PR |
|---|---|---|
| [#97616](https://github.com/openclaw/openclaw/issues/97616) | hook/tool 子进程泄漏为僵尸 | ❌ needs-maintainer-review |
| [#121661](https://github.com/openclaw/openclaw/issues/121661) | CLI-backed announce-wake 伪造 tool call | ❌ |
| [#157630](https://github.com/openclaw/openclaw/issues/157630) | `--max-old-space-size` 覆盖 resourceLimits | ❌ |
| [#136311](https://github.com/openclaw/openclaw/issues/136311) | memory-core reindex lock 每启动都抢，19 GB 临时文件堆积 | ❌ |
| [#140010](https://github.com/openclaw/openclaw/issues/140010) | Windows 睡眠唤醒后 UI/WebSocket 重连 30-60s+ 失败 | ❌ |
| [#138272](https://github.com/openclaw/openclaw/issues/138272) | Android Talk (gateway-relay) task-turn 必掉 | ❌ |
| [#165686](https://github.com/openclaw/openclaw/issues/165686) | 2026.9.8 升级后 Windows 高 CPU / 事件循环饥饿 | ❌ |
| [#112259](https://github.com/openclaw/openclaw/issues/112259) | 可见入站 channel turn 被静默丢弃（无重试/dead-letter） | ❌ |
| [#140738](https://github.com/openclaw/openclaw/issues/140738) | Talk 确认反复被 supersede，跨 session 动作永远不执行 | ❌ |
| [#84983](https://github.com/openclaw/openclaw/issues/84983) | Native cron agent-turn 触发饱和事件循环（chat 几分钟不可用） | ❌ |
| [#56693](https://github.com/openclaw/openclaw/issues/56693) | OpenAI Codex OAuth 可绑定已停用 ChatGPT workspace | ❌ |
| [#138599](https://github.com/openclaw/openclaw/issues/138599) | 自动压缩在超过其上下文窗口时死锁 | ❌ needs-live-repro |
| [#142336](https://github.com/openclaw/openclaw/issues/142336) | 2026.9.2+ core `/dashboard` 与 Telegram Mini App 冲突 | ❌ |
| [#137729](https://github.com/openclaw/openclaw/issues/137729) | transcript replay / 错误分类中未防护的 `.trim()` | ❌（PR 候选 [#137446](https://github.com/openclaw/openclaw/pull/137446) 在路上） |
| [#135858](https://github.com/openclaw/openclaw/issues/135858) | opencode-go 本地 catalog 不投影 provider.npm→api 覆盖 | ❌ |
| [#90840](https://github.com/openclaw/openclaw/issues/90840) | 子代理 run 完成被当作 worker 原始输出直送聊天用户 | ❌ |

### 🟡 P2（功能/可用性）

- [#136183](https://github.com/openclaw/openclaw/issues/136183) ssh 协议 banner 阶段 SIGTERM（2026.8.1 回归，2026.8.2 仍存在）—— ❌
- [#157415](https://github.com/openclaw/openclaw/issues/157415) `Doctor --fix` 拒绝外部安装的 acpx/codex 插件迁移（2026.9.6 回归）—— ❌
- [#161728](https://github.com/openclaw/openclaw/issues/161728) Codex legacy native-task 迁移在连接身份变更后仍 pending —— ❌
- [#48709](https://github.com/openclaw/openclaw/issues/48709) Gemini 2.5 Pro `textSignature` 膨胀 + think 标签混乱 —— ❌
- [#160610](https://github.com/openclaw/openclaw/issues/160610) Discord autoPresence 在 SecretRef/env-only 凭据下始终报 "runtime degraded" —— ❌
- [#161728](https://github.com/openclaw/openclaw/issues/161728) Codex 迁移 pending —— ❌

### 🟢 P3（低优先级 / 体验）

- [#79902](https://github.com/openclaw/openclaw/issues/79902) SQLite transcript/session seam；[#44502](https://github.com/openclaw/openclaw/issues/44502) Discord 路由 mention-gating；[#47273](https://github.com/openclaw/openclaw/issues/47273) macOS 内存检测被跳过；[#

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期**：2026-10-08
**覆盖项目**：13 个（其中 10 个有活跃动态，3 个当日无活动）

---

## 1. 生态全景

个人 AI 助手/智能体生态整体处于**强迭代、高并发、低合并**的典型"功能爆发期"特征：今日仅有 OpenClaw 发布了 v2026.10.1-beta.2 一个新版本（Beta 性质，禁用于生产），其余项目均处于代码层面有显著推进但缺乏正式 release 节点的"评审堆积"状态。从内容分布看，**Sessions/Memory 子系统稳定性、Provider 适配、Web UI 诚实反馈、安全边界（含沙箱/凭据/技能元数据）、CJK 与国际化**已成为跨生态共识痛点。整体态势可总结为——"**用户量跑起来了，证据不足**"：交互反馈缺失、错误静默吞咽、会话状态失真等"诚实性问题"普遍存在，揭示 AI Agent 行业从"能力扩展"向"语义正确性"过渡的关键拐点。

---

## 2. 各项目活跃度对比

| 项目 | Issues (新/活跃) | Issues 关闭 | PRs (活跃) | PRs 合并/关闭 | Release | 健康度 | 当日特征 |
|---|---|---|---|---|---|---|---|
| **OpenClaw** | 445 | 55 | 500 (367 待合并) | 133 | ✅ v2026.10.1-beta.2 | ⭐⭐⭐⭐ (活跃但承压) | P0/P1 积压多但响应面广 |
| **ZeroClaw** | 45 | 1 | 47 | 3 | ❌ | ⭐⭐⭐ (保守但稳定) | 合并率 6%，单点维护者风险 |
| **Hermes Agent** | 50 | 12 | 50 | 2 | ❌ | ⭐⭐⭐ (缓慢推进) | PR 合并率仅 4%，安全债突出 |
| **NanoBot** | - | 3 | 17 | 8 | ❌ | ⭐⭐⭐⭐ (高健康度) | 合并率 47%，响应迅速 |
| **LobsterAI** | 2 | - | 51 | 50 | ❌ | ⭐⭐⭐⭐ (修复 + 清理) | 大量 Dependabot + 安全闭环 |
| **CoPaw** | 11 | 3 | 12 | 2 | ❌ | ⭐⭐⭐⭐ (中等活跃) | 社区驱动 + 主线版本未发 |
| **PicoClaw** | 2 | 0 | 6 | 0 | ❌ | ⭐⭐ (承压) | 全员 stale，0 合并 |
| **NanoClaw** | 1 | 0 | 3 | 0 | ❌ | ⭐⭐ (低活跃) | 长期 Issue #3136 已 73 天 |
| **IronClaw** | 1 | 0 | 2 | 0 | ❌ | ⭐⭐ (低活跃) | 187 天核心 Bug 未修 |
| **NullClaw** | 0 | 0 | 1 | 0 | ❌ | ⭐⭐ (静默) | 1 条高危 PR 待审 |
| **TinyClaw / Moltis / ZeptoClaw** | - | - | - | - | ❌ | ⭐ (休眠) | 24 小时无活动 |

**关键观察**：
- **吞吐量梯队**：OpenClaw (133) ≫ LobsterAI (50) > NanoBot (8) > ZeroClaw (3) > Hermes (2)
- **质量梯队**：NanoBot (47% 合并率) ≈ LobsterAI (98%) > OpenClaw (26%) > ZeroClaw (6%) > Hermes (4%)
- **仅 OpenClaw 当日发版**，但为 Beta，全生态处于"版本空窗期"

---

## 3. OpenClaw 在生态中的定位

### 3.1 核心定位

OpenClaw 在生态中处于**"事实上的核心参照点（Reference Implementation）"**位置：从 LobsterAI 的 v2026.8.1 迁移问题、CoPaw 的 OpenClaw runtime 集成、NanoBot 的 Critical Issue 修复中均可观察到对 OpenClaw 行为的兼容。

### 3.2 优势对比

| 维度 | OpenClaw | 同类对比 |
|---|---|---|
| **规模** | 445 Issues / 500 PRs 单日活跃 | 10x 于 Hermes、NanoBot、LobsterAI |
| **Subsystem 广度** | Sessions/Memory/CLI/Desktop/Cron/Gateway 全栈 | ZeroClaw 偏向沙箱、NanoBot 偏 UI、LobsterAI 偏 Skills |
| **响应面** | 维护标签体系丰富（platinum/diamond/P0/P1） | Hermes 仅基本分类 |
| **版本节奏** | 唯一当日发版 | 多数项目数周未更新 |

### 3.3 技术路线差异

- **vs ZeroClaw**：ZeroClaw 走**强沙箱/插件原子化**路线（firejail/bubblewrap/SandboxPolicyConfig），OpenClaw 走**会话完整性/记忆系统**路线
- **vs NanoBot**：NanoBot 走**协议层复用 + CJK 优化**（Codex WebSocket 复用、CJK 渲染），OpenClaw 走**多 Provider 适配 + 跨 workspace worker**
- **vs Hermes Agent**：Hermes 走**Plugin Catalog 生态扩张**（4 个社区插件/日），OpenClaw 走**官方子系统深度打磨**
- **vs LobsterAI**：LobsterAI 是 OpenClaw 的**下游 + Skills 二次封装**，今日 LobsterAI 修复的 #2680 / #2811 直接呼应 OpenClaw v2026.8.1 的回归

### 3.4 社区规模

OpenClaw 单日活跃 Issue/PR 总数（945 条）≈ NanoClaw 全年积压量。社区规模优势显著但**响应吞吐压力**同步放大——这是其"活跃但承压"评估的根因。

---

## 4. 共同关注的技术方向

跨项目涌现的**横向共识方向**（按出现频次排序）：

### 4.1 🏆 Sessions / Memory / 会话完整性（涉及 6 个项目）
- **OpenClaw**：#150635 dreaming 卡顿、#79902 SQLite transcript seam、#159612 结算无限重试
- **NanoBot**：#6100 Dream batch 被 policy 阻断时丢弃终止原因、#6033 runtime sidecar 失效
- **Hermes**：#119163 429 冷却绕过、#119652 PR
- **LobsterAI**：#2680 模型策略被覆盖
- **ZeroClaw**：#11420 SQLite 每次整 transcript 覆写 created_at、#11554 路径标记图片反复重发
- **IronClaw**：#1993 187 天未修的 Agent 虚报完成态
- **共识**：会话状态管理的"原子性 + 终止语义"普遍薄弱，长程任务失真是跨项目痛点

### 4.2 🏆 诚实性反馈 / 静默失败（涉及 7 个项目）
- **PicoClaw**：#3408 消息队列满时静默丢弃、#3412 错误通知三处被吞
- **OpenClaw**：#112259 可见入站 turn 被静默丢弃、#84983 cron 饱和无反馈、#90840 子代理 run 误送用户
- **Hermes**：#123985 Desktop 消息渲染两次
- **NanoBot**：#5980 WebSocket 1009 后 draft 丢失
- **IronClaw**：#1993 Agent 虚报"Done"
- **CoPaw**：#8116 消息重发 + 串号
- **NanoClaw**：#3136 sendToDestination 静默丢消息（73 天）
- **共识**：UI/输出层的"假象 vs 现实"是当前**最具共识的体验短板**

### 4.3 🏆 CJK 与国际化（涉及 3 个项目）
- **NanoBot**：#6099 CJK/Latin 加粗归一化
- **CoPaw**：#8067 CJK Markdown 强调边界
- **LobsterAI**：Cowork 体验中 CJK 渲染细节
- **Hermes**：#49422 中文社区求可配置 Enter 键（👍4）

### 4.4 🏆 安全边界绕过（涉及 5 个项目）
- **Hermes**：#59293 hermes config set 绕过审批、#98078 write_file 绕过 mutation guard、#133922 Desktop 混合 profile
- **LobsterAI**：#2793 任意目录删除（已合并修复 #2794/#2809）、#2440 系统提示词重复注入
- **ZeroClaw**：#11552 工具 egress 忽略声明、#11562 manifest 错配、#8424 RFC .zeroclawignore
- **CoPaw**：#8065 skills 路径穿越
- **OpenClaw**：#143262 auth-profile SecretRef 路由到错 store、#137531 envelope 内

### 4.5 🏆 Provider 适配稳定性（涉及 5 个项目）
- **OpenClaw**：Codex 体验三连击 (#84680/#156531/#141270)、#68596 streaming watchdog
- **NanoBot**：#6096 Codex WebSocket 复用
- **ZeroClaw**：#11583 Opper provider、#11606 routing 回写污染
- **CoPaw**：#8117 max_tokens overflow-recovery
- **Hermes**：#134107 solstice provider httpx 依赖缺失

### 4.6 🏆 Computer Use / GUI 自动化（新兴共识）
- **NanoBot**：#6091 Cua Driver（首个正式信号）
- **OpenClaw**：#121661 CLI 子代理 announce-wake turn 工具缺失
- **共识**：Agent 能力从"文本/对话"向"GUI 操作"演进的趋势开始跨项目浮现

### 4.7 🏆 Reasoning Effort 控制（新兴共识）
- **NanoBot**：#4419 自动 reasoning 升级策略
- **CoPaw**：#8114 限制推理强度（"3.8 太爱思考"）
- **共识**：reasoning 模型"过度思考"成为生产痛点，自动/可控切换策略成为新刚需

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 技术架构关键差异 |
|---|---|---|---|
| **OpenClaw** | 全栈个人 AI 助手（多通道 + 记忆 + 工作区 + 工具） | 高级用户/团队/长任务场景 | 多 Provider + 跨 workspace worker + Doctor 校验 |
| **NanoBot** | 学术驱动（HKUDS）+ 多模态 + Computer Use 演进 | 研究者/开发者 | 协议层复用（Codex WebSocket）+ CJK-first |
| **Hermes Agent** | Plugin 生态 + 多平台消息网关 | 开源生态贡献者 | Plugin Catalog 优先 + Desktop 跨平台 |
| **ZeroClaw** | 强安全沙箱 + 插件原子化 + Config 正确性 | 企业/隐私敏感场景 | firejail/bubblewrap + staged admission |
| **LobsterAI** | OpenClaw 下游 + Skills 系统 + Cowork 体验 | 终端用户/技能市场 | Skills 沙箱加固 + Cowork UI |
| **CoPaw (QwenPaw)** | 多租户 Hub + Console 体验 | 团队/企业协作 | Hub 架构 + Tauri Desktop |
| **PicoClaw** | 轻量级 Pico 平台 + Web UI 透明化 | 个人/小团队 | 单一作者聚焦（racso2609） |
| **NanoClaw** | 消息路由 + 频道适配器 | IM/消息密集型场景 | a2a 返回路径 + 频道进程生命周期 |
| **NullClaw** | 网关层稳定性 | 集成商/API 网关场景 | 单线程 accept 循环 + 总线 |
| **IronClaw** | Agent 延迟优化 + 工具选择 | 性能敏感用户 | Embedding-based tool selection |
| **TinyClaw / Moltis / ZeptoClaw** | 待观察 | - | 当日无活动 |

**关键差异维度**：
- **安全姿态从"粗硬"到"严肃"**：ZeroClaw > Hermes > LobsterAI > OpenClaw > NanoBot
- **国际化优先级**：NanoBot > CoPaw > Hermes > 其他
- **UI 透明度**：PicoClaw > OpenClaw > LobsterAI > NanoBot

---

## 6. 社区热度与成熟度分层

### 🔥 第一梯队：快速迭代期（活跃度高 + 合并吞吐高）
- **OpenClaw**：体量大、PR 池 500、合并 133 条，但 P0/P1 积压多，处于**"功能爆发 + 稳定性瓶颈"双期并存**
- **NanoBot**：合并率 47%，Issue-to-PR 闭环快，**健康度高**
- **LobsterAI**：当日合并 50 条（多为 Dependabot + 安全修复），**安全响应极敏感**

### 🔥 第二梯队：质量巩固期（活跃度中等 + 响应慢）
- **ZeroClaw**：吞吐偏低（6%），但**深度架构演进**清晰（沙箱、Config 正确性）
- **Hermes Agent**：吞吐 4%，但 Plugin 生态与安全治理并重
- **CoPaw**：稳定迭代节奏，**社区贡献转化良好**（首次贡献者频繁出现）

### 🔥 第三梯队：承压期（活跃但欠响应）
- **PicoClaw**：8 条更新全部 stale，**维护者响应中断风险**
- **NanoClaw**：Issue #3136 已 73 天，**长期 Issue 警示**

### 🔥 第四梯队：低活跃 / 静默期
- **IronClaw**：187 天核心 Bug 未修 + 仅 2 PR，**维护者注意力减弱**
- **NullClaw**：1 条高危 PR 待审，**互动维面需激活**
- **TinyClaw / Moltis / ZeptoClaw**：24 小时无活动，**生态边缘项目**

---

## 7. 值得关注的趋势信号

### 7.1 🚨 行业级"诚实性危机"

跨 7 个项目（PicoClaw、OpenClaw、Hermes、NanoBot、IronClaw、CoPaw、NanoClaw）共同涌现的"静默失败"模式揭示一个**核心矛盾**：模型能力快速扩展（reasoning、多模态、Computer Use）的同时，**应用层的可观测性、可追溯性、错误可见性未能跟上**。

**对 AI 智能体开发者的启示**：
- "Quiet failure" 应作为一等公民纳入错误预算
- 必须区分"模型沉默"（token 浪费）与"系统沉默"（用户信息丢失）
- 需要建立**全项目统一的 Action Visibility 模型**（参考 PicoClaw #3410–#3413 的"诚实反馈"路线图）

### 7.2 🔮 "Subsystem Stability Tax" 现象

OpenClaw v2026.10.1-beta.2 + NanoBot 多 issue 同日聚焦 Sessions/Memory，揭示一个**架构性规律**：一旦 AI Agent 从"工具调用"进入"长程任务 + 持久记忆"，Sessions/Memory 子系统会立刻成为稳定性瓶颈（O(n) 状态 = O(n²

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-08

---

## 1. 今日速览

NanoBot 今日保持高强度迭代节奏，**24 小时内合并/关闭 PR 共 8 条，处理 Issues 3 条**。维护重点集中在三大方向：**WebUI/TUI 交互优化**（深色模式对比度、CJK 渲染、命令补全、附件上传）、**Provider 与 Memory 稳定性加固**（Codex WebSocket 复用、Dream 策略阻断处理）、**文档解析鲁棒性**（XLSX/PDF 边缘场景）。整体 PR 合并率约 47%（8/17），社区贡献者参与度高，项目处于健康活跃期。

---

## 2. 版本发布

**无新版本发布**。最近版本为 nanobot-ai 0.3.5（见 #6088）。

---

## 3. 项目进展

今日 8 个 PR 顺利关闭，多个高价值改进落地：

| PR | 类型 | 说明 |
|---|---|---|
| [#5980](https://github.com/HKUDS/nanobot/pull/5980) | fix(webui) | 修复 WebSocket 1009 帧超限导致 TUI/WebUI 附件上传失败、draft 丢失问题；改用 HTTP 二进制通道 |
| [#6096](https://github.com/HKUDS/nanobot/pull/6096) | feat(providers) | Codex WebSocket 复用 Responses 后端，避免历史图像/推理项在每次请求时重传，节省带宽与延迟 |
| [#6099](https://github.com/HKUDS/nanobot/pull/6099) | fix(webui) | 扩展 CJK 加粗归一化，支持 CJK 标签在前、Latin 在后的渲染（如 `**边界说明：**issue`） |
| [#6098](https://github.com/HKUDS/nanobot/pull/6098) | fix(tui) | TUI 斜杠命令补全改为名称匹配优先，避免 `/se` 错误匹配 `/sessions` |
| [#6095](https://github.com/HKUDS/nanobot/pull/6095) | fix(webui) | 修复深色模式下 Delete 按钮 1.17:1 对比度过低问题（对应 [#6088](https://github.com/HKUDS/nanobot/issues/6088)） |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | feat(hooks) | 引入 hook 自动发现机制（pkgutil + entry_points），对齐 channels/tools 现有设计；此前开放数月，终于合入 |
| [#6092](https://github.com/HKUDS/nanobot/pull/6092) | feat(webui) | Apps/Channels/Skills 加载骨架屏，避免 CJK 与 MCP 源 race 导致的空目录闪烁 |
| [#6087](https://github.com/HKUDS/nanobot/pull/6087) | refactor(ui) | 移除 WebUI/TUI 中滥用作分隔符的中圆点（·），以间距/分层 Tooltip 替代，提升视觉层次 |

**整体评估**：今日项目在**国际化（CJK）**、**无障碍对比度**、**协议层复用** 三方面均有显著推进，多个长期 Issue（如 #6088）一日内得到响应关闭，效率可观。

---

## 4. 社区热点

按评论数与互动度排序：

- **[#4419](https://github.com/HKUDS/nanobot/issues/4419) Feature: Automatic reasoning effort escalation** — 评论 6 条，👍 0
  - 诉求：当推理结果置信度不足时，自动从默认等级升级到更深层 reasoning。当前各 provider（OpenAI o-series、Anthropic extended thinking、Google thinkingBudget）已普遍支持 `reasoningEffort` 字段，但 nanobot 缺乏自动升级策略。维护方需权衡升级成本与收益。

- **[#5298](https://github.com/HKUDS/nanobot/issues/5298) [enhancement] Budget model-visible MCP schemas for large tool sets** — 评论 3 条
  - 诉求：随着 MCP 工具增多，tool schema 占用上下文成本急剧上升。已有对应 PR [#5388](https://github.com/HKUDS/nanobot/pull/5388) 提出 opt-in 字节预算方案（默认关闭，使用最新用户请求做词汇选择），但被标记 `[conflict]`，进入评审阻塞期，需维护者介入协调。

> 关注度特征：当前 Issue 讨论数整体偏低（多在 0–6 条区间），社区更倾向于"开 PR 解决问题"而非纯讨论，体现工程导向文化。

---

## 5. Bug 与稳定性

按严重程度排列：

| 严重度 | 编号 | 描述 | Fix 状态 |
|---|---|---|---|
| 🟠 中 | Patch | [#6033](https://github.com/HKUDS/nanobot/pull/6033) **fix(session): preserve runtime sidecars across metadata updates** — handle 元数据更新改写 JSONL mtime，导致重启后仍有效的 runtime sidecar 失效 | 已有 PR，待合并 |
| 🟡 低 | Patch | [#6097](https://github.com/HKUDS/nanobot/pull/6097) **fix(documents): skip chart-only sheets when reading XLSX files** — 含 Chartsheet 的 XLSX 触发 `'Chartsheet' has no attribute 'reset_dimensions'`，连累共享文档流的 `read_file`/`grep` | 已有 PR，待合并 |
| 🟡 低 | Patch | [#6093](https://github.com/HKUDS/nanobot/pull/6093) **fix(documents): preserve complete PDF pages across reads** — PDF 在页中间触达字符上限时，续读指引跳到下一页，丢失该页剩余部分（16 页 PDF 默认 128k 限制下复现） | 已有 PR，待合并 |
| 🟠 中 | Bug 卡 | [#6100](https://github.com/HKUDS/nanobot/pull/6100) **fix(memory): preserve Dream batches after provider policy blocks** — provider 返回 `refusal`/`content_filter` 时，runner 误将其视为完成回合并推进 Dream 历史游标，丢弃 provider 终止原因 | 已有 PR，待合并 |

**回归风险提示**：今日 3 个文档解析相关 bug（XLSX/PDF）集中在边缘数据形态，表明文档加载栈在非典型工作簿下的鲁棒性仍需加强。

---

## 6. 功能请求与路线图信号

**新功能 PR（待合并，9 条中 5 条为 feature）**：

| PR | 功能 | 路线图概率 |
|---|---|---|
| [#6091](https://github.com/HKUDS/nanobot/pull/6091) **feat(apps): managed computer use with Cua Driver** — Apps 目录加入 Computer Use 预设，由 nanobot 持有模型与权限、Cua Driver 提供桌面观测 | 🟢 高，符合"Agent 能力扩展"方向，需评估安全模型 |
| [#6094](https://github.com/HKUDS/nanobot/pull/6094) **feat(webui): Mnemosyne MCP memory preset** — Apps 加入多语言词汇记忆预设，隔离 stdio MCP 环境 | 🟢 中等，符合 memory 增强方向 |
| [#6089](https://github.com/HKUDS/nanobot/pull/6089) **feat(webui): column directory picker & streamlined composer actions** — 替换原生 workspace 选择器为应用内目录选择器 | 🟢 高，已是 WebUI 反复打磨方向 |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) **feat(webui): configurable local trusted extension surface** — 本地受信任浏览器扩展机制，含 manifest 校验、`/extensions/...` 路由 | 🟡 中等，安全敏感，需 reviewer 深审 |
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) **feat(agent): budget model-visible MCP schemas**（关联 #5298） | 🟡 中等，已被标记 `[conflict]`，需维护者协调 |

**重要信号**：
- **Computer Use 是新热点**：今日由 [@Re-bin](https://github.com/Re-bin) 提出，预示 nanobot 即将跨出"文本/对话 Agent"边界，向 GUI 自动化演进。
- **WebUI 扩展体系化**：从 #6032（安全扩展加载）到 #6089（目录选择器），WebUI 正演化为可定制客户端。

---

## 7. 用户反馈摘要

- **CJK 用户高频痛点**：今日 [#6099](https://github.com/HKUDS/nanobot/pull/6099) 反映 Assistant 输出 `**边界说明：**issue` 时加粗标记字面化，提示**模型训练时的 CJK/Latin 混合加粗习惯**与 nanobot 解析器假设不匹配，未来或需文档化或加宽容错。
- **深色模式可读性反馈闭环**：[#6088](https://github.com/HKUDS/nanobot/issues/6088) → [#6095](https://github.com/HKUDS/nanobot/pull/6095) 一日内 Issue 关闭 + PR 合并，删除按钮 1.17:1 对比度问题（远低于 WCAG AA 4.5:1 标准）得到修复，体现快速 bug 响应机制。
- **TUI 命令补全可用性反馈**：[#6098](https://github.com/HKUDS/nanobot/pull/6098) 反映 `/se` 错误选中 `/model`，揭示**斜杠补全算法未充分考虑名称命中权重**，需在 changelog 中告知用户。
- **附件上传静默数据丢失**：[#5980](https://github.com/HKUDS/nanobot/pull/5980) 描述 WebSocket 1009 关闭后未确认的 draft 会丢失，这对**长任务/异步场景**是严重体验问题，已修复但应在 release notes 中重点提示。
- **Codex 带宽成本**：[#6096](https://github.com/HKUDS/nanobot/pull/6096) 揭示每次请求都重传历史图像与推理项，对**长 PDF 对话**成本影响显著，用户或迎来显著成本下降。

---

## 8. 待处理积压

以下 PR/Issue 已开放较长时间，建议维护者优先 review：

| 编号 | 类型 | 标题 | 开放时间 | 状态提示 |
|---|---|---|---|---|
| [#5388](https://github.com/HKUDS/nanobot/pull/5388) | PR | feat(agent): budget model-visible MCP schemas | 2026-08-13 | ⚠️ 标记 `[conflict]`，近 2 个月无明确进展，与 #5298 强关联 |
| [#4878](https://github.com/HKUDS/nanobot/pull/4878) | PR | feat(hooks): add auto-discovery mechanism | 2026-07-10 | ✅ 今日已合并，解除 |
| [#4419](https://github.com/HKUDS/nanobot/issues/4419) | Issue | Automatic reasoning effort escalation | 2026-06-20 | 6 条评论但无对应 PR，已 3.5 个月 |
| [#6033](https://github.com/HKUDS/nanobot/pull/6033) | PR | fix(session): preserve runtime sidecars | 2026-10-04 | 4 天前更新，仍 OPEN |
| [#6032](https://github.com/HKUDS/nanobot/pull/6032) | PR | feat(webui): configurable local trusted extension surface | 2026-10-04 | 安全敏感，需要维护者深度 review |
| [#6091](https://github.com/HKUDS/nanobot/pull/6091) | PR | feat(apps): managed computer use with Cua Driver | 2026-10-07 | 新功能，Computer Use 路线图重要信号 |

**维护者建议**：优先解决 [#5388](https://github.com/HKUDS/nanobot/pull/5388) 的 `[conflict]` 标记（与 #5298 串联），并为 [#4419](https://github.com/HKUDS/nanobot/issues/4419) 指定结论性回应（接受/拒绝/转 PR），以关闭 3 个月以上的开放 Issue。

---

*报告基于 GitHub Issues/PR 数据生成，覆盖周期：2026-10-07 ~ 2026-10-08。*

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目日报

**日期：2026-10-08**
**项目地址：[NousResearch/hermes-agent](https://github.com/NousResearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 今日继续保持高频迭代状态，过去 24 小时共有 **50 条 Issues** 与 **50 条 PRs** 活跃更新，Issues 关闭率 24%（12/50），PRs 合并/关闭率仅 4%（2/50），整体合并吞吐偏低。讨论最集中的主题是 **bundled "solstice" provider 启动失败**（#134107 累计 24 条评论）、**安全边界绕过**（#59293、#98078、#133922）以及 **macOS/Windows Desktop 更新链路回归**（#133992、#79087）。Plugin Catalog 当日新增 4 个社区提交（radio-dm-gateway、nowstamp、hyatlas、commandcode-oauth），生态扩张势头良好。**当日无版本发布**，但积压的 P1 安全与更新链问题应优先处理。

---

## 2. 版本发布

**无新版本发布。** 当日合并的 PR 数量极少（仅 2 条），尚未达到发版门槛。最近可观察的版本为 Issue 中提到的 `v0.21.4+canary.20260928T071354Z`，距今已有 10 天未更新正式/Canary 标签，建议维护者评估是否需要基于安全修复（#59293、#98078）发布补丁版本。

---

## 3. 项目进展

当日仅有 **2 个 PR 关闭**（均非通过 merge 方式），可见于 Issues 的 closed PR 引用：

- **#92251**（引用自 #59293）：与 hermes config 写入保护相关的前置修复
- **#119652**（引用自 #119163）：处理 429 冷却逻辑的绝对 reset 时间问题

其他高价值但**仍 OPEN** 的进展：
- **#134853** (P2)：`/yolo` 切换在 backend 重启后会话恢复时不再被重置（[#134605](https://github.com/NousResearch/hermes-agent/pull/134853) 跟进）
- **#134903** (P2)：修复 Linux GPU 恢复中对 Electron `'launch-failed'` 事件名的识别
- **#134900** (P3)：`hermes doctor` 接受 provider profile 中带斜杠的模型 ID
- **#134901** (P3)：文档——明确 CI 执行与维护者触发流程
- **#134904**、**#134278**、**#134419**、**#121892**、**#134371**：Plugin Catalog 新增条目（Meshtastic 网关、nowstamp 文本工具、hyatlas 7 层记忆、commandcode-oauth、Ohvii MCP）

**整体评估：** 项目向前**缓慢推进**，主要技术债集中在桌面应用跨平台稳定性与安全边界，PR 积压明显，需要更多维护者带宽。

---

## 4. 社区热点

### 🔥 最高讨论热度

1. **[#134107](https://github.com/NousResearch/hermes-agent/issues/134107) — Bundled 'solstice' provider fails to load（24 条评论）**
   bundled provider `solstice` 因缺少 `httpx` 依赖启动失败，警告通过继承的 stderr 泄漏到终端/TUI，每次 `hermes update` 重复 6 次，TUI 布局被破坏。**多个用户遇到相同问题**，#134220 是其重复（👍6）。

2. **[#59293](https://github.com/NousResearch/hermes-agent/issues/59293) — `hermes config set` 绕过系统配置写入保护（22 条评论）**
   v0.18.0 引入的审批层对 shell 写 `config.yaml` 做了拦截，但 `hermes config set` CLI 可从"正门"绕过该保护 — 一个有终端权限的 agent turn 可执行 `hermes config set approval.*` 完全禁用审批层。**这是安全层级的关键漏洞**。

4. **[#133992](https://github.com/NousResearch/hermes-agent/issues/133992) — macOS Desktop 更新握手失败（17 条评论，👍2）**
   macOS Desktop 每次点更新按钮都失败，exit code 2，错误为 `Another Hermes update is already running`。这是 #78119 / #87514 的回归 — 自身的托管/握手锁拒绝了自己的更新。

### 💬 中等热度

- **[#49422](https://github.com/NousResearch/hermes-agent/issues/49422) — 自定义 Enter/Ctrl+Enter 快捷键（8 条评论，👍4）**
  用户希望参照微信、QQ、飞书等应用可自定义发送/换行快捷键，这是**中文社区用户反馈最多的人性化 UX 请求**。
- **[#79087](https://github.com/NousResearch/hermes-agent/issues/79087) — Windows Desktop 误将健康安装送入首次 onboarding（9 条评论）**
- **[#123985](https://github.com/NousResearch/hermes-agent/issues/123985) — Desktop 在会话压缩后渲染首条消息两次（6 条评论）**
- **[#119163](https://github.com/NousResearch/hermes-agent/issues/119163) — 订阅期 429 的绝对 reset 时间绕过唯一凭证短冷却（5 条评论）**
- **[#98078](https://github.com/NousResearch/hermes-agent/issues/98078) — 通过解释器+write_file 绕过自仓库变异 guard（5 条评论，真实事件报告）**

---

## 5. Bug 与稳定性

### 🔴 P1 — 需立即处理

| Issue | 标题 | 平台 | Fix PR |
|---|---|---|---|
| [#133992](https://github.com/NousResearch/hermes-agent/issues/133992) | macOS Desktop 更新握手拒绝自己的 `hermes update` | macOS | 待 |
| [#79087](https://github.com/NousResearch/hermes-agent/issues/79087) | Windows 运行时探针超时将健康安装送入首次 onboarding | Windows | 待 |
| [#123985](https://github.com/NousResearch/hermes-agent/issues/123985) | Desktop 在就地压缩后会话首条消息渲染两次 | All | 待 |
| [#134858](https://github.com/NousResearch/hermes-agent/issues/134858) | Cron `no_agent=True` 每日任务连续 3 天在调度层被静默跳过 | All | 待 |

### 🟠 P2 — 安全与回归

| Issue | 标题 | Fix PR |
|---|---|---|
| [#59293](https://github.com/NousResearch/hermes-agent/issues/59293) | `hermes config set` 绕过系统配置写保护（**安全**） | 待 |
| [#98078](https://github.com/NousResearch/hermes-agent/issues/98078) | 通过 `write_file` + 解释器绕过自仓库变异 guard（**安全**） | 待 |
| [#133922](https://github.com/NousResearch/hermes-agent/issues/133922) | Desktop 可持久化混合 profile 的 system prompt（**隐私/安全**） | 待 |
| [#119163](https://github.com/NousResearch/hermes-agent/issues/119163) | 绝对 `last_error_reset_at` 绕过唯一凭证短冷却 | [#119652](https://github.com/NousResearch/hermes-agent/pull/119652)（OPEN） |
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic `sk-ant-usr-` 凭证被误判为 OAuth（计费错误） | 待 |
| [#134897](https://github.com/NousResearch/hermes-agent/issues/134897) | Anthropic workspace API key 被误判为 Claude Code OAuth | 待（重复） |
| [#125040](https://github.com/NousResearch/hermes-agent/issues/125040) | Terminal tool 解析 PM tool Python 先于依赖 venv | 待 |
| [#101756](https://github.com/NousResearch/hermes-agent/issues/101756) | MCP OAuth `async_auth_flow` 不 `aclose()` SDK 生成器 | 待 |
| [#132742](https://github.com/NousResearch/hermes-agent/issues/132742) | ssh backend 远程 cwd 用本地 `TERMINAL_CWD` 校验 | **CLOSED**（重复） |
| [#126272](https://github.com/NousResearch/hermes-agent/issues/126272) | Bot Chat 因会话无 active 行而永久无法打开 | **CLOSED** |
| [#101216](https://github.com/NousResearch/hermes-agent/issues/101216) | Desktop "新聊天"操作意外切换 Dark/Light 主题 | **CLOSED** |

### 🟡 P3 — 一般 Bug

- [#134107](https://github.com/NousResearch/hermes-agent/issues/134107)、[#134220](https://github.com/NousResearch/hermes-agent/issues/134220) — solstice provider 缺 httpx 依赖（多个用户）
- [#134822](https://github.com/NousResearch/hermes-agent/issues/134822) — stock config 出现两条误报警告
- [#87973](https://github.com/NousResearch/hermes-agent/issues/87973) — `git clean -f` 文本在引号内被误判为危险命令
- [#131321](https://github.com/NousResearch/hermes-agent/issues/131321) — NVIDIA SwiftShader 错误地 sticky 在 fallback（13 天）
- [#134866](https://github.com/NousResearch/hermes-agent/issues/134866) — 4 个 SQLite 存储出现 TLS 形头部损坏（offset 5）
- [#134880](https://github.com/NousResearch/hermes-agent/issues/134880) — Windows updater 在过滤进程视图时报 "NoSuchProcess"
- [#134864](https://github.com/NousResearch/hermes-agent/issues/134864) — MoA preset 名称含空格在所有 picker 中被隐藏
- [#134898](https://github.com/NousResearch/hermes-agent/issues/134898) — `message_agent` 发送方会话关闭导致投递停止
- [#77312](https://github.com/NousResearch/hermes-agent/issues/77312) — Desktop Window 透明度滑块几乎不可用 — **已 CLOSED**

### ✅ 已修复 PR

- [#134853](https://github.com/NousResearch/hermes-agent/pull/134853) — `/yolo` 在 backend 重启后保持
- [#134903](https://github.com/NousResearch/hermes-agent/pull/134903) — Linux GPU 恢复匹配 Electron `'launch-failed'` 原因
- [#134900](https://github.com/NousResearch/hermes-agent/pull/134900) — `hermes doctor` 接受斜杠模型 ID
- [#89949](https://github.com/NousResearch/hermes-agent/pull/89949) — ACP 报告失败 turn 而非作为回答
- [#63298](https://github.com/NousResearch/hermes-agent/pull/63298) — 保留排队 prompt 边界（修复 #45560）
- [#59420](https://github.com/NousResearch/hermes-agent/pull/59420) — Mattermost 富 Markdown 安全归一化

---

## 6. 功能请求与路线图信号

| 请求 | 链接 | 已有相关 PR | 评估 |
|---|---|---|---|
| **自定义 Enter / Ctrl+Enter 发送/换行**（中文社区） | [#49422](https://github.com/NousResearch/hermes-agent/issues/49422) | 无 | 高需求，👍4，预计纳入下个版本桌面应用 UX 改进 |
| **依赖感知的异步 subagent 调度**（DAG） | — | [#102112](https://github.com/NousResearch/hermes-agent/pull/102112)（P3） | 重要架构演进，待 maintainer 决策 |
| **`delegate_task` 每个任务固定 provider/model** | — | [#107945](https://github.com/NousResearch/hermes-agent/pull/107945)（重复） | 多 provider 编排刚需 |
| **`hermes mcp configure` 非交互式工具选择** | — | [#85688](https://github.com/NousResearch/hermes-agent/pull/85688) | CI/容器化友好 |
| **WhatsApp Agent Platform 路由与终端/Desktop 设置文档** | — | [#134867](https://github.com/NousResearch/hermes-agent/issues/134867) | 文档缺陷，优先级 P3 |
| **WhatsApp observe-unmentioned-group 模式（Telegram parity）** | — | [#133418](https://github.com/NousResearch/hermes-agent/pull/133418) | 多平台行为一致性 |
| **OpenAI 官方 Sign in with ChatGPT 计划 provider** | — | [#128926](https://github.com/NousResearch/hermes-agent/pull/128926) | 重要平台扩展 |
| **实验性 closed-display 模式 / keep-awake**（macOS） | — | [#112769](https://github.com/NousResearch/hermes-agent/pull/112769) | 桌面移动场景体验 |
| **Plugin Catalog 扩张（radio-dm-gateway、nowstamp、hyatlas、commandcode-oauth、Ohvii MCP）** | — | [#134278](https://github.com/NousResearch/hermes-agent/pull/134278)、[#134904](https://github.com/NousResearch/hermes-agent/pull/134904)、[#134419](https://github.com/NousResearch/hermes-agent/pull/134419)、[#121892](https://github.com/NousResearch/hermes-agent/pull/121892)、[#134371](https://github.com/NousResearch/hermes-agent/pull/134371) | 生态活跃 |
| **修复 ZAI 视觉模型 403 entitlement 错误提示** | — | [#101653](https://github.com/NousResearch/hermes-agent/pull/101653) | 用户体验改进 |
| **视频参考/音频参考输入透传**（FAL Seedance 2.0） | — | [#53965](https://github.com/NousResearch/hermes-agent/pull/53965) | 视频模型能力扩展 |

**总体路线图信号：** 桌面应用跨平台 UX、安全边界、多平台消息网关（WhatsApp/Mattermost）、Plugin 生态扩张是当前的四大主线。

---

## 7. 用户反馈摘要

### 痛点

1. **"solstice provider 启动报错污染界面"** — 多个用户（laoli-no1, apacay）在 fresh install 时遭遇 `Failed to load bundled provider plugin solstice: No module named 'httpx'`，且警告通过 stderr 泄漏**覆盖在已绘制的 TUI 内容之上**，破坏布局。用户明确反馈"messages render over already-drawn TUI content, garbling the screen"。

2. **"每次 macOS/Windows 更新都被自己卡住"** — TheRu27、uevuleocha 等用户对反复出现更新失败感到 frustration，"every update started from the Desktop app's Update button fails with exit code 2"。

3. **"安全保护形同虚设"** — 用户反映 `hermes config set` 与 `terminal.tools` 的 guard 极易用 `write_file + python script` 绕过，"a benign local commit whose message happens to mention a force-clean gets blocked"。权限保护存在可绕过面让用户感到不安。

4. **"MCP OAuth 一旦断连永远恢复不了"** — 长连接 gateway 中，SSE keepalive 触发重连后 OAuth MCP 服务 session 永久丢失，"every tool call returns `MCP server is not connected`"，但 `hermes mcp status` 显示已连接。

5. **"中文用户希望 Enter 键可配置"** — bfsy24680 等中文用户认为 Enter 发送"非常容易误触"，希望像微信/QQ/飞书一样自定义。

### 使用场景

- **source-built Electron 桌面 + 多 profile 部署**（grym3s、svista 等）— Windows 11 + 多 profile 切换场景下出现 Bot Mode 主题意外翻转、Bot Chat 永久无法打开等问题。
- **ssh backend + 容器化部署** — 远程 cwd 校验逻辑混淆了 local 与 remote 路径。
- **WhatsApp Bot 生产部署** — 需要 `require_mention: true` 但仍需观察 group 上下文。
- **source install + NVIDIA GPU** —

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报 · 2026-10-08

> 数据来源：[github.com/sipeed/picoclaw](https://github.com/sipeed/picoclaw)
> 报告周期：2026-10-07 ~ 2026-10-08（UTC）

---

## 1. 今日速览

PicoClaw 今日处于 **"待审阅积累期"**——过去 24 小时共有 **6 条新待合并 PR** 和 **2 条活跃 Issue**，**0 次合并、0 次关闭、0 个新 Release**。值得关注的是，单一贡献者 `racso2609` 集中提交了 4 条围绕 **Web UI 反馈机制** 的协调性改动（PR #3410–#3413），呈现明显的主题聚焦态势。同时，全部 8 条更新均被打上 `[stale]` 标签，提示仓库可能存在 stale-bot 自动清理风险，需要尽快人工 review 以避免有价值的工作被误关。

- 📊 活跃度：**中等**（有显著代码活动但无合并闭环）
- ⚠️ 健康度提示：所有条目 stale、0 合并 → **维护者响应积压警告**

---

## 2. 版本发布

**本节无内容**。过去 24 小时未发布任何新版本（无 Release 事件）。

---

## 3. 项目进展

⚠️ 过去 24 小时 **无 PR 被合并或关闭**，因此"实质推进"为零。但从 PR 队列可以看出明确的演进方向：

| PR | 主题 | 状态 |
|---|---|---|
| [#3410](https://github.com/sipeed/picoclaw/pull/3410) | `fix(pico/web)`: 暴露 steering queue 状态，告别静默丢弃 | 待合并 |
| [#3411](https://github.com/sipeed/picoclaw/pull/3411) | `feat(web)`: 用诚实的状态驱动 working indicator 取代轮播文案 | 待合并 |
| [#3412](https://github.com/sipeed/picoclaw/pull/3412) | `fix(agent)`: 让失败 turn 对用户可见（修三个静默丢错路径） | 待合并 |
| [#3413](https://github.com/sipeed/picoclaw/pull/3413) | `feat(web)`: 全局多渠道 session sidebar（issue #3406 第 2-A 部分） | 待合并 |

**整体评估**：本期代码层面 **净推进 = 0**（无合并）。但仓库出现一组高质量、面向同一问题域（Web UI 可观测性）的 PR 集，等待 maintainer 启动 review 工作流。一旦合并，将是 PicoClaw Web 端"诚实反馈"特性的关键一步。

---

## 4. 社区热点

按评论数与议题热度综合排序：

### 🔥 #1 Issue [Issue #3408](https://github.com/sipeed/picoclaw/issues/3408) — Web UI 消息队列隐形丢失
- 作者：`racso2609`，💬 2 评论，👍 0
- 核心痛点：用户发消息时若 agent 忙碌，消息被静默入队甚至丢弃，**完全无反馈**。要求增加 queue/events 表面。
- 已被 PR #3410 配套响应。

### 🔥 #2 Issue [Issue #3409](https://github.com/sipeed/picoclaw/issues/3409) — 子代理轮询触发意外自主循环
- 作者：`rogeriomarino2014-ship-it`，💬 2 评论，👍 0
- 核心痛点：将 `ScheduleWakeup` 作为子代理完成轮询机制使用，会触发意外的 autonomous-loop tick。
- **尚无对应修复 PR**，是真实的设计缺陷信号。

### 🔥 #3 PR 簇 [PR #3410 ~ #3413](https://github.com/sipeed/picoclaw/pull/3413) — Web UI 反馈系统重构
- 同一作者 `racso2609` 一日内连发 4 个 PR，明确指向 Issue #3406 的多阶段路线图。
- **诉求分析**：用户群普遍不满当前 Web UI 的"假象反馈"——agent 在做什么、是否还在线、是否失败，对用户都是黑盒。

---

## 5. Bug 与稳定性

按严重程度排序：

| 严重度 | 编号 | 描述 | 是否有 fix PR |
|---|---|---|---|
| 🔴 高 | [#3408](https://github.com/sipeed/picoclaw/issues/3408) | Web UI 消息队列满时**静默丢弃**，用户无任何反馈，且失败模式下完全不可见 | ✅ [PR #3410](https://github.com/sipeed/picoclaw/pull/3410) 待合并 |
| 🟠 中-高 | [#3409](https://github.com/sipeed/picoclaw/issues/3409) | `ScheduleWakeup` 被滥用为 wait 机制时，会触发自主循环 tick（**设计层缺陷**，影响子代理编程模型） | ❌ 无 |
| 🟡 中 | [PR #3412](https://github.com/sipeed/picoclaw/pull/3412) | Agent turn 失败时错误通知被三处静默丢弃：① message tool 抑制、② 中间件吞掉、③ 客户端未呈现 | ✅ 同一 PR 修复 |
| 🟢 低-中 | [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) | OAuth `RefreshAccessToken` 硬编码 scope 覆盖 provider 配置，导致 OIDC provider 自定义 scope 失效 | ✅ 同一 PR 修复 |

**修复覆盖率**：3/4 报告问题已有 fix PR 跟进，**Issue #3409 是唯一完全无响应的设计问题**。

---

## 6. 功能请求与路线图信号

从 Issue 与 PR 描述中可识别出 PicoClaw **Web 端体验层** 的下一阶段路线图：

| 信号 | 来源 | 进入下一版本可能性 |
|---|---|---|
| **多渠道 session sidebar**（全局、非仅 `pico`） | [PR #3413](https://github.com/sipeed/picoclaw/pull/3413) 标记为 Issue #3406 的"Part 2-A" | 🟢 高（已结构化、明确分阶段） |
| **状态驱动 working indicator**（替换固定轮播文案） | [PR #3411](https://github.com/sipeed/picoclaw/pull/3411) 标记为 Issue #3406 的"Part 1" | 🟢 高 |
| **Queue/Events 可见性面板** | [Issue #3408](https://github.com/sipeed/picoclaw/issues/3408) | 🟡 中（已有 PR #3410，但仅解决"信号有无"，UI 表面尚未交付） |
| **`ScheduleWakeup` 行为隔离/标记**（避免被误用为轮询） | [Issue #3409](https://github.com/sipeed/picoclaw/issues/3409) | 🟠 中-低（无 PR 跟进，可能延后） |

📌 **路线图主线**：以 **Issue #3406** 为锚点的 Web UI "诚实反馈 + 多渠道" 二阶段路线，是本期最清晰的演进方向。

---

## 7. 用户反馈摘要

提炼自评论与 Issue 描述中的真实用户声音：

- 😡 **痛点 — 沉默丢失**（[#3408](https://github.com/sipeed/picoclaw/issues/3408)）：
  > "消息看起来消失了……直到 turn 结束，回复出现，没有任何视觉提示。"
  用户感受到的是 **agent 是否还在工作的不确定感**，严重影响信任。

- 😟 **痛点 — 假象进度反馈**（[#3411](https://github.com/sipeed/picoclaw/pull/3411) 描述）：
  > "4 条轮播的 'thinking' 文案从不让用户知道 agent 真正在做什么。"
  现有 UI 给的是"看起来在工作"假象，而非真实状态。

- 😟 **痛点 — 失败不可见**（[#3412](https://github.com/sipeed/picoclaw/pull/3412) 描述）：
  > "turn 死掉时用户只能盯着一片空白。错误通知生成了但被丢掉三次。"
  静默失败模式挫败调试体验。

- 😟 **痛点 — 设计工具误用**（[#3409](https://github.com/sipeed/picoclaw/issues/3409)）：
  > 用户合理预期调度原语作为 wait 机制工作，但副作用引发额外 tick。这是 **API 契约不够清晰** 的反馈。

- 🙂 **正向信号**：[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 中 `@trufae` 主动推进 DeltaChat 渠道重构（-200 LOC），反映社区对多 IM 渠道支持持续投入。

---

## 8. 待处理积压（⚠️ 维护者关注）

### 🔴 高度优先 — Stale 风险

所有 8 条今日活跃 Issue/PR **均已被自动 stale 标记**，距 stale-bot 默认关闭阈值（通常 30-60 天）持续倒计时：

| 编号 | 类型 | 创建 → 至今 | 备注 |
|---|---|---|---|
| [PR #3222](https://github.com/sipeed/picoclaw/pull/3222) | refactor | **~3 个月** (2026-07-03) | 最久远期。技术债清理型 PR，最容易被 stale-bot 误关 |
| [PR #3378](https://github.com/sipeed/picoclaw/pull/3378) | bugfix | ~26 天 | OAuth scope 修复，影响所有 OIDC 集成用户 |
| [Issue #3408](https://github.com/sipeed/picoclaw/issues/3408) | bug | ~9 天 | 高严重度但有 PR 跟进 |
| [Issue #3409](https://github.com/sipeed/picoclaw/issues/3409) | bug (设计层) | ~9 天 | **无 PR 跟进**，存在被遗忘风险 |
| [PR #3410](https://github.com/sipeed/picoclaw/pull/3410) ~ [#3413](https://github.com/sipeed/picoclaw/pull/3413) | feat+fix | ~9 天 | 高度相关的同主题工作集，建议一并 review |

### 📣 行动建议

1. **紧急**：对 racso2609 的 4 个 Web UI PR（#3410–#3413）发起集中 review，避免 stale-bot 在差异较大的改动上引入风险。
2. **关注**：Issue #3409（scheduling 设计缺陷）需要 maintainer 设计层面响应而非分发 fix。
3. **清理积压**：[PR #3222](https://github.com/sipeed/picoclaw/pull/3222) 已有 3 个月，需明确"合并/拒/拆分"三选一定论，避免成为永久 zombie PR。

---

> 📈 **总体健康度评级**：⭐⭐⭐☆☆（3/5）
> 优点：贡献活跃、议题聚焦、有完整 PR 跟进链路。
> 风险：0 合并闭环 + 全部 stale → 需紧急触发维护者干预。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目动态日报

**报告日期**：2026-10-08
**数据周期**：过去 24 小时
**项目**：NanoClaw (nanocoai/nanoclaw)

---

## 1. 今日速览

NanoClaw 今日整体活跃度处于**低位运行**状态：过去 24 小时内仅有 1 个 Issue 获得更新、3 个 PR 获得刷新，无新版本发布，且**所有 PR 均处于待合并状态**，无合并或关闭动作。项目处于"持续打磨、但缺乏关键节点推进"的阶段。值得关注的是，Issue #3136 这一已存在逾 2 个月的 Bug 今日重新浮出水面，叠加 3 个频道/信号相关的 PR 集中刷新，提示**通信通道（channels）与消息路由**仍是当前社区重点关注的工程问题。综合评估：**项目健康度中等偏下**，需要维护者更积极的合并与响应节奏。

---

## 2. 版本发布

⚠️ 过去 24 小时**无新版本发布**。本节略。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，未产生新的可发布代码增量。但有 3 个 PR 在过去 24 小时内有更新动作，反映出维护层面一定的协调迹象：

- **PR #3837** 与 **PR #3838**（同作者 seefood）今日同时刷新，二者明显存在**联动关系**：#3837 是 Signal 适配器的合并修复补丁（附件投递、DM 路由、出站队列），#3838 则是配套的 `/add-signal` SKILL.md/REMOVE.md 文档更新。两者形成"代码 + 文档"的双轨交付，一旦合并将显著改善 Signal 集成的健壮性。
  - 链接：[PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837)、[PR #3838](https://github.com/nanocoai/nanoclaw/pull/3838)

- **PR #4055**（jsboige）提交于今日，定位为频道适配器在网络故障下的"再武装（re-arm）"机制，目前处于待评审初始阶段。
  - 链接：[PR #4055](https://github.com/nanocoai/nanoclaw/pull/4055)

**整体评估**：项目在**功能性前进上为零增量**，但贡献者活跃度尚在。建议维护者尽快对 #3837/#3838 给出 review 反馈，避免作者"合并多个陈旧 PR"的工作因反复 refresh 而失去动力。

---

## 4. 社区热点

由于今日数据中 Issues/PRs 的评论与反应数普遍极低（最高仅 1 条评论），**社区热度整体偏冷**。按互动度排序如下：

| 排名 | 对象 | 类型 | 评论数 | 👍 | 状态 |
|---|---|---|---|---|---|
| 1 | [Issue #3136](https://github.com/nanocoai/nanoclaw/issues/3136) | Bug | 1 | 0 | OPEN（已开 73 天） |
| 2 | [PR #4055](https://github.com/nanocoai/nanoclaw/pull/4055) | 频道修复 | 0 | 0 | OPEN（新建） |
| 3 | [PR #3838](https://github.com/nanocoai/nanoclaw/pull/3838) | 文档 | 0 | 0 | OPEN |
| 4 | [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) | Signal 修复 | 0 | 0 | OPEN |

**诉求分析**：
- Issue #3136 反映出用户对**消息可靠投递**的强需求——`in_reply_to` 字段被错误复用导致消息静默丢失，属于"无声故障"，对生产环境危害极大。
- seefood 的两个 PR 揭示了 Signal 集成长期存在的**文档与代码脱节**问题，作者不得不"合并陈旧分支"以推进修复，体现社区贡献者面临 rebased/maintenance burden。
- jsboige 的 #4055 暴露**频道进程生命周期管理**的设计薄弱——一旦 `adapter.setup()` 失败，整个进程生命周期内频道再无复活机会。

---

## 5. Bug 与稳定性

### 🔴 高严重度

**Issue #3136 — `sendToDestination` 在出站消息上错误地盖上外源 `in_reply_to`，导致消息静默丢失**
- **文件位置**：`container/agent-runner/src/poll-loop.ts` 中的 `sendToDestination()`
- **机制**：当目标容器无任何入站历史时，函数回退到唤醒批次（waking batch）的 `in_reply_to`，错误地将其作为 a2a 返回路径的路由 ID。
- **影响**：依赖 a2a 返回路径的目标将丢失消息，且**无任何错误日志提示**——典型的"silent failure"。
- **当前状态**：OPEN，自 2026-07-26 创建以来已 **73 天未修复**，今日仅有 1 条评论。
- **是否已有 fix PR**：❌ **无**。
- **链接**：[Issue #3136](https://github.com/nanocoai/nanoclaw/issues/3136)

> 📌 **风险提示**：此 Bug 涉及核心消息路由路径，建议维护者优先处理。在无 fix PR 的情况下，可考虑短期内为该函数添加防御性日志（当 fallback 路径触发时记录 warn 级日志），便于用户观测。

### 🟡 中严重度

**PR #4055 — 频道适配器在网络抖动超出 17s 重试预算后永久失败**
- **机制**：`SETUP_RETRY_DELAYS_MS`（2s/5s/10s）累计仅 ~17s，超出后频道进程生命周期内不再尝试，也无健康检查。
- **修复方向**：引入 re-arm 机制 + 健康检查。
- **链接**：[PR #4055](https://github.com/nanocoai/nanoclaw/pull/4055)
- **是否已有 fix PR**：✅ 有，但尚未合并。

---

## 6. 功能请求与路线图信号

从今日数据看，**没有明确的新功能请求**，但以下 PR 与 Issue 间接透露了路线图走向：

1. **消息路由可靠性**（Issue #3136）→ 提示下一版本需强化 `in_reply_to` / 出站路径的类型安全，可能需要重写 `sendToDestination` 的回退策略。
2. **频道进程弹性**（PR #4055）→ 信号表明项目正在从"启动期重试"向"运行时健康监测"演进，可能成为 channels 模块下一里程碑的一部分。
3. **Signal 集成成熟化**（PR #3837 + #3838）→ 附件统一走 mounted-inbox、DM `platform_id` 前缀规范化（`signal:` vs `group:`）等，是 Signal 作为一等公民集成的关键补丁。

**预判**：若 #4055 被合并，可能引入一个新的 `ChannelHealthMonitor` 抽象；若 #3837/#3838 被合并，将首次为 `/add-signal` 提供权威文档 + 可信代码的双重支撑。

---

## 7. 用户反馈摘要

由于今日 Issues 总评论数仅为 1，**反馈样本非常有限**。可观察到的信号如下：

- **Issue #3136 评论（1 条）**：用户 JoshuaJFogg 在创建 Issue 时即给出了详细的根因分析与代码位置定位，说明该用户属于**深度使用者/贡献者**，对 `poll-loop.ts` 的内部机制熟悉。其痛点集中在：
  - 缺乏对 `in_reply_to` 字段语义的边界保护；
  - 故障发生时**无任何可观测信号**（无 warn 日志、无 metric），定位成本高。
- **贡献者 seefood 的 PR 描述**（间接反馈）：
  > "Consolidates ... from two of my stale PRs into a single, current patch against `main`"

  这一表述透露出**贡献者面临 rebased/陈旧分支管理负担**——侧面反映项目对外部贡献的 review 与合并节奏偏慢，导致贡献者需自行"合并整理"工作流。这是社区健康的负面信号。

- **贡献者 jsboige 的 PR 描述**（间接反馈）：
  > "no re-arm, no health check. The host st..."

  显示用户在生产环境遭遇过**频道长时间失活后无法自愈**的问题，期望运行时弹性能力。

**满意度评估**：基于有限数据，社区对核心消息路径的可靠性**满意度较低**；对贡献流程的顺畅度**满意度中等偏下**（陈旧 PR 累积现象）。

---

## 8. 待处理积压 ⚠️

以下 Issue / PR 已长期未得到处理，建议维护者优先关注：

| 优先级 | 对象 | 类型 | 开置时长 | 状态 | 链接 |
|---|---|---|---|---|---|
| 🔴 P0 | [Issue #3136](https://github.com/nanocoai/nanoclaw/issues/3136) | Bug（消息丢失） | **73 天** | OPEN，无 fix PR | [→](https://github.com/nanocoai/nanoclaw/issues/3136) |
| 🟠 P1 | [PR #3837](https://github.com/nanocoai/nanoclaw/pull/3837) | Signal 适配器修复 | **22 天** | OPEN，作者已自发 rebase 整理 | [→](https://github.com/nanocoai/nanoclaw/pull/3837) |
| 🟠 P1 | [PR #3838](https://github.com/nanocoai/nanoclaw/pull/3838) | /add-signal 文档 | **22 天** | OPEN，配套 #3837 | [→](https://github.com/nanocoai/nanoclaw/pull/3838) |

**给维护者的建议**：
1. **Issue #3136** 已逼近"长尾 Issue"的临界线（>60 天），建议本周内给出 triag 回应，至少指派负责人或加入 `help wanted` 标签。
2. **PR #3837 / #3838** 是一对紧密耦合的合并单元，单独合并 #3838 而不合并 #3837 会导致文档与代码不一致，建议同步处理。
3. 建议建立**"陈旧 PR 清理窗口"**（例如每月一次），减少外部贡献者的 rebased 负担，提升社区健康度。

---

*本报告基于公开 GitHub 数据自动生成，所有链接均指向 nanocoai/nanoclaw 仓库。*

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目动态日报
**报告日期：2026-10-08**

---

## 1. 今日速览

NullClaw 项目今日整体活跃度**偏低**。过去 24 小时内无新增或活跃的 Issue，无新版本发布，社区交互仓库略显扁平。仅有 1 条 PR 处于待合并状态（#1047），且尚未收到任何评论或点赞，表明项目维护节奏在当日进入了一个相对静默的窗口。值得关注的是，这条唯一的 PR 聚焦于**网关层的稳定性修复**，揭示了网关在高负载场景下存在一个值得警惕的阻塞问题，可能在生产环境中带来严重后果。建议维护者优先评审该 PR。

---

## 2. 版本发布

无新版本发布。

---

## 3. 项目进展

今日**无 PR 被合并或关闭**，项目代码主干在最近 24 小时内未发生推进。仅有一条 PR 处于待处理状态：

| PR | 状态 | 作者 | 更新日期 |
|---|---|---|---|
| [#1047](https://github.com/nullclaw/nullclaw/pull/1047) | OPEN | addadi | 2026-10-07 |

整体而言，项目今日**未在主干层面获得实质性进展**，仍停留在评审阶段。

---

## 4. 社区热点

今日社区互动热度极低，**无 Issues 评论、无 PR 评论、无任何点赞反应**。

唯一具备讨论潜力的话题是 PR [#1047](https://github.com/nullclaw/nullclaw/pull/1047)——`fix(gateway): bound inbound bus publish instead of blocking the accept loop`。该 PR 触及网关核心架构问题（单线程 accept 循环的阻塞风险），按常理应当引发维护者重点关注，但截至目前尚无社区反馈。这一沉默可能反映出：
- 维护者尚未注意到该 PR（创建于昨日 2026-10-07）；
- 或者维护者正在评估该修复对网关架构的影响，需要时间审阅。

---

## 5. Bug 与稳定性

今日报告的稳定性问题集中于一条 PR，但该 PR 所揭示的问题严重程度较高，建议列为**高优先级**：

### 🔴 高优先级：网关 accept 循环被入站总线饱和阻塞
- **来源**：[PR #1047](https://github.com/nullclaw/nullclaw/pull/1047)
- **报告者**：addadi（贡献者）
- **问题描述**：网关为单线程模型，其 accept 循环使用 `Bus.publishInbound`（**无界版本**）发布每一条 webhook 消息。当入站队列（容量 100）已满且 agent worker 仍在处理长轮次时，调用会无限期阻塞在 `not_full.wait` 上。在总线饱和场景下：
  1. **Telegram webhook 产生背压**，外部消息处理停滞；
  2. （PR 摘要未完整呈现第 2 条影响）；
  3. **整个 accept 循环被卡死**，整个网关对外不可用。
- **影响范围**：所有依赖入站总线的 webhook 集成（Telegram 等），属于**可用性级别的系统故障**。
- **修复状态**：已有修复提案（PR #1047 OPEN），作者提出了"有界发布"方案以替代当前的无界阻塞，但 PR **尚未合并**，**fix 尚未生效**。
- **建议**：维护者应尽快评审并合并，避免此问题被纳入下一个稳定版本。

---

## 6. 功能请求与路线图信号

今日**无新增功能请求**。PR #1047 属于稳定性修复，不属于新功能范畴，因此暂无路线图信号可供分析。

---

## 7. 用户反馈摘要

今日 **Issues 与 PR 均无评论**，无法从中提炼任何社区痛点、满意度信号。待 PR 评审或社区讨论展开后，方可形成有效的用户反馈样本。

---

## 8. 待处理积压

| 类型 | 编号 | 标题 | 创建/更新时间 | 关注建议 |
|---|---|---|---|---|
| 待合并 PR | [#1047](https://github.com/nullclaw/nullclaw/pull/1047) | fix(gateway): bound inbound bus publish instead of blocking the accept loop | 2026-10-07 | ⭐ **优先关注**，涉及网关高可用问题，建议维护者 48 小时内给出评审结论。

**维护者提醒**：目前积压规模极小（仅 1 条），是清理 PR 队列、推进稳定性的良好时机。建议重点评估 PR #1047 的修复方案是否会引入反向不兼容变更（如总线接口签名调整），并制定配套的负载测试用例。

---

### 健康度总评

| 维度 | 评分 | 说明 |
|---|---|---|
| 活跃度 | ⭐⭐☆☆☆ | 仅 1 条 PR，无 Issue 互动 |
| 稳定性关注 | ⭐⭐⭐⭐☆ | 有重要 Bug fix 浮现但尚未合并 |
| 社区响应 | ⭐☆☆☆☆ | 零评论、零点赞 |
| 整体健康度 | ⭐⭐⭐☆☆ | 代码层面有进展信号，互动维面急需激活 |

---
*数据快照截至 2026-10-08，基于 GitHub 公开数据。*

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目动态日报

**报告日期**：2026-10-08
**数据来源**：github.com/nearai/ironclaw
**监测周期**：过去 24 小时

---

## 1. 今日速览

IronClaw 项目今日活跃度处于**低位水平**，过去 24 小时内仅有 1 条 Issue 被重新讨论、2 条 PR 进入待合并状态，无任何版本发布、无合并/关闭事件。Issue 与 PR 数量均较少且无新增评论热度，说明项目当日无大规模协同动作。值得注意的是，活跃的 Issue #1993 是一个创建于 2026-04-03 的老 Bug（已存在约 6 个月），而唯一的实质功能 PR #8119 来自一名新贡献者，处于评审停滞状态。项目整体处于"例行维护 + 单点跟进"阶段，节奏放缓。

---

## 2. 版本发布

**今日无新版本发布。** 跳过本节。

---

## 3. 项目进展

**今日无 PR 合并、无 PR 关闭。** 没有功能提交被推进到主干，项目代码层面在 24 小时内**整体无向前推进**。

具体情况：
- **PR #8119**（CjS77）继续等待评审，该 PR 提议为 `loop-host` 增加基于嵌入（embeddings）的"可选开启"工具选择机制，可减少首次模型调用时的 `tool_search` 往返次数。PR 已创建 9 天仍未进入审查队列。
- **PR #8128**（dependabot[bot]）提交于今日，提议将 `/tests/e2e` 下的 `urllib3` 从 2.7.0 升级至 2.8.0，属于自动化依赖维护 PR，等待例行合并。

👉 链接：[PR #8119](https://github.com/nearai/ironclaw/pull/8119) ｜ [PR #8128](https://github.com/nearai/ironclaw/pull/8128)

---

## 4. 社区热点

按近 24 小时互动数据排序，本日**无明显社区热点**——所有活跃条目的点赞数均为 0，评论数最多仅 1 条。

相对而言最受关注的两项为：
- **Issue #1993**（1 条评论）— 由维护者复现的 Agent 误报完成态问题，详见 Bug 章节。
- **PR #8119**（0 评论）— 来自新贡献者的功能提案，作为唯一实质性功能 PR 值得关注。

整体来看，项目今日缺少社区驱动的强讨论议题。

---

## 5. Bug 与稳定性

| 严重度 | Issue | 标题 | 状态 | 是否已有 Fix PR |
|---|---|---|---|---|
| **P2（中）** | [#1993](https://github.com/nearai/ironclaw/issues/1993) | Agent falsely reports task completion after chat is closed and reopened | OPEN | ❌ 无 |

**Bug 详情**：
- **触发路径**：连续 502 错误 → 用户关闭并重开 chat → 重新加载时 Agent 在未真正执行的情况下口头声明 "Done! I've sent 'salam aleykum' to your Telegram..."
- **风险**：Agent 状态与现实不一致，存在对外执行类（Telegram、IM、Webhook 等）操作时**对用户误导性反馈**的隐患，可能引发信任问题与下游动作错位。
- **标签**：`scope: agent`、`bug_bash_P2`
- **负责人**：sergeiest 报告，关联 review 工程师为 Emil
- **存续时长**：从 2026-04-03 开出至 2026-10-07，已 ~187 天，**属于积压 Bug**。

👉 链接：[Issue #1993](https://github.com/nearai/ironclaw/issues/1993)

---

## 6. 功能请求与路线图信号

本日仅一项实质功能 PR 被提交，**没有来自用户的纯功能请求 Issues 出现**。

**值得关注的路线图信号：**

- **PR #8119** — `feat(loop-host): opt-in tool selection with embeddings`
  - 核心思路：在会话首次模型调用前，由分类器基于 embedding 预测用户可能用到的延迟加载工具（deferred tools），并由 host 将其与核心工具一同提供给模型，从而避免一次往返。
  - 标签：`risk: medium`、`size: XL`、`scope: docs`、`scope: dependencies`、`contributor: new`
  - 评审状态：**未进入审查**，作者 CjS77 为首次贡献者，需维护者重点跟进与指导。
  - 路线图含义：若合并，将显著降低多工具场景下的首轮延迟与 token 消耗，是 Agent 延迟优化方向的一次尝试。

👉 链接：[PR #8119](https://github.com/nearai/ironclaw/pull/8119)

---

## 7. 用户反馈摘要

本日仅 Issue #1993 包含一条用户/维护者评论，可提炼出以下痛点与场景：

- **痛点：Agent 状态不可靠"。"在 chat 关闭/重开后，Agent 容易基于"上一次会话状态"虚报任务已完成，对用户产生误导。
- **使用场景**：用户与 Agent 通过 IM（Telegram）联动执行对外消息推送等真实动作，对 Agent 完成态陈述有强依赖。
- **触发条件**：服务端 502 错误 → 会话重连 → Agent 状态展示逻辑未对齐"。
- **满意度**：低。该 Bug 让维护者 Emil 在评测里无法信任其回复真实性，**直接影响"agent 是否真的做了事"的可观测性**。

**结论**：用户/维护者对 **Agent 真实完成态的可信反馈**有较强诉求，是当前最具代表性的体验短板。

---

## 8. 待处理积压

以下条目存在**长期未响应或响应停滞**的情况，建议维护者重点关注：

| 类型 | 编号 | 标题 | 创建时间 | 停滞时长 | 备注 |
|---|---|---|---|---|---|
| Bug | [#1993](https://github.com/nearai/ironclaw/issues/1993) | Agent falsely reports task completion after chat is closed and reopened | 2026-04-03 | **~187 天** | P2 标签，bug_bash 范围内，无 fix PR |
| PR | [#8119](https://github.com/nearai/ironclaw/pull/8119) | feat(loop-host): opt-in tool selection with embeddings | 2026-09-29 | ~9 天 | XL 规模、新贡献者，需 reviewer 介入 |
| PR | [#8128](https://github.com/nearai/ironclaw/pull/8128) | chore(deps): bump urllib3 from 2.7.0 to 2.8.0 in /tests/e2e | 2026-10-07 | <1 天 | dependabot 自动 PR，等例行合并 |

**提醒**：
- Issue #1993 已被列入 `bug_bash` 但近 24 小时内**未推进**，建议确认是否分配 owner 并补充复现脚本/单测覆盖。
- PR #8119 为新贡献者首次提交，建议维护者主动反馈评审建议，避免新手贡献流失。
- PR #8128 为依赖维护 PR，建议在 CI 通过后尽快合并，避免依赖更新积压。

---

## 附：数据汇总

| 指标 | 数值 |
|---|---|
| 新/活跃 Issues | 1 |
| 已关闭 Issues | 0 |
| 待合并 PR | 2 |
| 已合并/关闭 PR | 0 |
| 新版本发布 | 0 |
| Issue 总评论数 | 1 |
| 最高赞数 | 0 |

**项目健康度评估**：⚠️ **中等偏低**
- 优点：唯一活跃 Bug 已纳入 `bug_bash`，依赖维护流程正常运转。
- 风险点：核心 Bug 长期未修复、实质功能 PR 评审停滞、新贡献者缺乏反馈，建议维护者优先介入 Issue #1993 与 PR #8119。

---

*报告生成时间：2026-10-08｜数据口径：GitHub Issues & Pull Requests，过去 24 小时增量与昨日变更。*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目动态日报

**报告日期：2026-10-08**
**仓库：netease-youdao/LobsterAI**

---

## 1. 今日速览

LobsterAI 今日进入一轮集中式"修复 + 清理"周期：过去 24 小时共有 **50 个 PR 关闭/合并，1 个 PR 待合并，2 个新开 Issue，无新版本发布**。活跃度较高，但绝大多数 PR 为依赖升级（Dependabot 占比超过 30%）与 stale 标签清理，真正面向用户可见行为的改动约 10 项。值得关注的趋势是 **OpenClaw 运行时修复与 Skills 子系统的安全加固**，今日涉及 #2793 任意目录删除漏洞的修复，以及 #2440 系统提示词重复注入问题的对应修复 PR #2812（仍 OPEN），整体项目健康度中等偏上，安全响应积极。

---

## 2. 版本发布

无新版本发布。最近一次 tag 仍为 `v0.2.4`（据 #2793 描述，该 tag 早于当前 `main` 分支上的若干敏感字段）。

---

## 3. 项目进展（今日合并/关闭的重要 PR）

### 3.1 安全加固（最高优先级）

- **#2794【合并】 fix(skills): stop trusting skill-controlled `_meta.json` for the delete path** — 作者 carfeii
  修复 `skills:delete` 直接信任已安装技能自身 `_meta.json` 中的 `openclawSourceDir` 字段并递归删除该路径的逻辑漏洞。该字段由技能包原样复制而来，存在被恶意包指向任意目录的风险。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2794

- **#2809【合并】 fix(skills): never delete paths named by a skill's `_meta.json`** — 作者 fisherdaddy
  上述同一漏洞的二次加固 PR，立场更激进——完全禁用由 `_meta.json` 指定的删除路径。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2809

- **#908【合并】 fix(mcp): validate stdio command to prevent command injection** — 作者 vdorchan
  为 MCP Server 的 stdio `command` 字段加入校验，阻断通过 XSS / Prompt 注入等路径攻陷渲染进程后构造任意命令注入的能力。
  👉 https://github.com/netease-youdao/LobsterAI/pull/908

### 3.2 OpenClaw 运行时修复

- **#2811【合并】 fix(openclaw): tolerate replaced thinking catalog owners** — 作者 fisherdaddy
  修复 Windows QQ 会话下 "prepared model catalog owner config was replaced during the read" 报错导致连续三轮失败的回归，仅重启可恢复。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2811

- **#2764【合并】 fix(openclaw): reload live gateway policies without restarting** — 作者 alison-xx
  将 `gateway.tools`、`gateway.trustedProxies`、`gateway.allowRealIpFallback` 三个设置标记为热重载，避免策略改动触发网关重启。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2764

- **#2680【合并】 fix(openclaw): preserve model policy during config sync** — 作者 btc69m979y-dotcom
  解决 OpenClaw v2026.8.1 将旧模型目录物化为 `agents.defaults.modelPolicy` 后，被 LobsterAI 配置同步误删的问题。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2680

### 3.3 Skills 子系统健壮性

- **#2711【合并】 fix(skills): keep skill version when SKILL.md frontmatter is invalid YAML** — 作者 alison-xx
  第三方 SKILL.md 因 `description: Use when: ...` 这类非法 YAML 导致 frontmatter 被丢弃、版本回退为 `0.0.0`、市场误报"可升级"。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2711

### 3.4 UI / Cowork 体验

- **#2810【合并】 feat(cowork): collapse the question dock in place** — 作者 fisherdaddy
  修复 Agent 在工具调用中途中提问时，原来的 inline question dock 把上方回答挤出视口、且 X 折叠后隐藏了问题本身的体验缺陷。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2810

- **#2808【合并】 feat(settings): add open-source info and star prompt to About** — 作者 fisherdaddy
  在 Settings → About 中加入 GitHub 仓库、MIT License 与 star/fork 提示。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2808

- **#1634【合并】 fix(cowork): 全局搜索修复与搜索体验升级** — 作者 gongzhi-netease
  修复搜索范围被当前 Agent 隐式限制的 Bug（双重过滤 + Redux 会话数据不稳定）。
  👉 https://github.com/netease-youdao/LobsterAI/pull/1634

- **#1628【合并】 feat(ui)：优化模型选择器 UI 及统一会话工具栏样式** — 作者 gongzhi-netease
  模型选择器重构：供应商图标、超长名称截断、面板自适应宽度，修复多页面下拉面板被裁剪问题。
  👉 https://github.com/netease-youdao/LobsterAI/pull/1628

### 3.5 依赖升级（Dependabot 批量清理，多为 stale）

- **#2671** react-dom 18.3.1 → 19.3.0
- **#2670** @types/react-dom 18.3.7 → 19.3.0
- **#2669** vite 5.4.21 → 8.3.0
- **#2584** @vitejs/plugin-react 4.7.0 → 6.1.1（stale）
- **#1277** electron 43.5.0 → 44.4.5、electron-builder 同步升级（stale）

> 注：依赖一次性跨大版本跳跃（vite 5→8、react 18→19、electron 43→44），后续回归风险需关注。

---

## 4. 社区热点

今日评论/互动数整体偏低（Issues 仅 1 条评论、PRs 评论数据未公开），但话题聚焦度极高，主要围绕 **两条安全与提示词正确性相关的高质量 Issue**：

- **#2440 系统提示词重复注入**（评论 1，👍 0） — 桌面端每个新会话首条消息注入的 `[LobsterAI system instructions]` 块，与 `workspace-main/AGENTS.md` 托管区逐字重复，重复长度约 4,425 字符，占块内容 78%。
  👉 https://github.com/netease-youdao/LobsterAI/issues/2440
  - **诉求背后**：一是 token 浪费（每次会话首轮白白多消耗数千 token），二是用户难以判断"哪一份才是真实系统提示词"，debug 与二次开发门槛被抬高。

- **#2793 Skill-controlled metadata 导致任意目录删除**（评论 1，👍 0） — 安全问题，开发者视角的代表性强 issue。
  👉 https://github.com/netease-youdao/LobsterAI/issues/2793
  - **诉求背后**：用户期望"安装/卸载一个 Skill"是受沙箱保护的动作，不应让技能自身 `_meta.json` 拥有对宿主机任意目录的删除权限。这与 #2794 / #2809 的快速合并一致，反映社区对供应链安全的关切。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | Issue/PR | 描述 | 是否已有 fix PR |
|---|---|---|---|
| 🔴 高（安全） | [#2793](https://github.com/netease-youdao/LobsterAI/issues/2793) | 卸载技能时可触发任意目录删除 | ✅ [#2794](https://github.com/netease-youdao/LobsterAI/pull/2794) + [#2809](https://github.com/netease-youdao/LobsterAI/pull/2809) 已合并 |
| 🟠 中（功能） | [#2440](https://github.com/netease-youdao/LobsterAI/issues/2440) | 系统提示词与 AGENTS.md 重复注入，浪费 token 且易混淆 | 🟡 [#2812](https://github.com/netease-youdao/LobsterAI/pull/2812) OPEN，未合并 |
| 🟠 中（运行时回归） | #2811（PR） | Windows QQ 连续三轮 "prepared model catalog owner config was replaced" 失败 | ✅ #2811 已合并 |
| 🟡 一般 | #2810（PR） | cowork 中途提问 dock 把上文挤出视口 | ✅ #2810 已合并 |
| 🟡 一般 | #2711（PR） | 非法 YAML frontmatter 导致版本归零、市场误报升级 | ✅ #2711 已合并 |
| 🟡 一般 | #2680（PR） | OpenClaw 迁移标记被配置同步误删，模型策略反复重写 | ✅ #2680 已合并 |

**待办提醒**：#2812 仍未合并，建议维护者尽快推进以与 #2440 形成闭环。

---

## 6. 功能请求与路线图信号

- **#2504【合并】 feat: add OrcaRouter provider integration** — 作者 Marc-oss-hub
  将 OrcaRouter 作为一等 provider 接入注册中心，镜像 OpenRouter 接线。说明社区对多 LLM 网关、可命名空间模型 ID 的诉求持续存在。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2504

- **#2808【合并】 feat(settings): add open-source info and star prompt to About**
  Settings → About 显示 GitHub 仓库链接、MIT License 及 star/fork 邀请。信号：项目希望扩大开源影响力、提升用户转贡献者的路径。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2808

- **#2810【合并】 feat(cowork): collapse the question dock in place**
  cowork 模式下的中间态提问体验持续打磨，是当前可见的高频打磨方向。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2810

- **#1634 / #1628【合并】** cowork 全局搜索与模型选择器 UI 升级，长期来看可能预示一次较大规模的 Cowork/Renderer 体验版本。

---

## 7. 用户反馈摘要

- **#2440** 真实用户（fujingzhai）提供可复现的实测数据：基于 `state/agents/main/sessions/<id>.trajectory.jsonl` 中 `trace.artifacts.finalPromptText`（v2026.7.31、OpenClaw 2026.6.1）。痛点："同一指令读两遍"，既费 token 又让人怀疑 prompt 真实来源。
- **#2793** 报告者 carfeii 是开发者视角，附带明确受影响的 commit hash (`791a352d…`) 与未受影响 tag (`v0.2.4`)，并指出该问题"未在最新 tag 中出现"——这种精细化报告方式值得鼓励。
- **#2811** 反映出 Windows + QQ 通道用户对"重启才能恢复"的体验强烈不满，已经推动对应修复。
- **#2810** 反映了 Agent 交互过程中的中间态 UI 体验是被多次打磨的方向。
- 整体反馈语言冷静、专业、有可复现数据，**社区质量较好**，但点赞数（👍）普遍为 0，说明曝光与互动规模仍较小。

---

## 8. 待处理积压（提醒维护者关注）

- **#2812【OPEN】 fix(openclaw): stop re-injecting AGENTS.md instructions into the first message** — 作者 fisherdaddy，2026-10-07 创建，至今未合并。该 PR 直接修复 #2440，是用户关切的高优先级 token 浪费问题，建议尽快评审。
  👉 https://github.com/netease-youdao/LobsterAI/pull/2812

- **#2440【OPEN】** 本身自 2026-08-05 创建，至今 2 个月仍未关闭，仅 1 条评论 + 0 👍。在 #2812 合并前不宜关闭。

- **#2793【OPEN】** 虽然已有 #2794 合并，但 Issue 本身未关闭；建议在合并后由维护者显式关闭并关联 PR。

- **历史 stale PR 关闭潮**（今日一次性关闭的 #1277、#1550、#1547、#1628、#1634、#2504、#2584 等多带 stale 标签）：建议补充 changelog / release notes，记录这些修复首次进入正式版本的版本号，避免用户回溯时无所适从。

---

**报告小结**：LobsterAI 今日呈现"安全优先 + 依赖清理"双主线，安全响应迅速（#2793 → #2794 / #2809 当日闭环），但用户侧的提示词正确性问题（#2440 → #2812）仍处 OPEN 状态，建议作为下一窗口期最高优先级合并。无新版本发布意味着本批修复尚未对外，建议维护者评估是否进入 `v0.2.5` 或更高 tag。

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

# CoPaw (QwenPaw) 项目动态日报 · 2026-10-08

> 数据来源：agentscope-ai/QwenPaw（基于用户提供的 GitHub 元数据）
> 报告生成时间：2026-10-08

---

## 1. 今日速览

过去 24 小时内，仓库共产生 **23 条更新**（11 条 Issues + 12 条 PRs），整体处于中等活跃状态。无新版本发布，但合并/关闭了 **5 条工单（3 Issues + 2 PRs）**，体现了维护团队对前端体验与功能请求的持续响应。从结构上看，**Bug 类报告占主导（约 6 条）**，集中在内存泄漏、桌面端冷启动、Provider 错误恢复等系统性问题；同时社区对多租户 Hub 与"消息附加（steer mode）"等扩展需求保持高讨论度**。当前仓库当前活跃主线版本为 **QwenPaw 2.2.x（beta4）**，提交分布显示近期工作重心已从 Creator 子模块转向 Core/Agents/Channels/Console 四个主线，属于稳定迭代期。

---

## 2. 版本发布

⚠️ 过去 24 小时无新版本发布。

值得关注的待合并版本工作：
- [PR #8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) **feat(creator): release 2.0.1 with controlled media production** — 提交于 2026-10-08，规模 XXXL，旨在将 QwenPaw Creator 从 1.3.0 → 2.0.1 推进，处于待审阶段（Open, 无评论）。

---

## 3. 项目进展

今日合并/关闭的重要 PR 体现项目在前端健壮性与细节修复上的稳步前行：

- ✅ [PR #8119](https://github.com/agentscope-ai/QwenPaw/pull/8119) **fix(console): preserve drafts when pasting long text**（size/L）— 修复 Issue #7948"页面设计破坏用户输入"中提到的长文本粘贴覆盖草稿问题。逻辑为：当粘贴内容超过 10,000 字符时，提示"粘贴为文本 / 粘贴为附件"两选项，避免静默覆盖。这是一项贴近用户、可见即生效的体验改进。
- ✅ [PR #7867](https://github.com/agentscope-ai/QwenPaw/pull/7867) **fix(console): revalidate file-area tab content on activation**（first-time-contributor）— 修复 Issue #7866 中文件工作区切换标签页时缓存未刷新的缺陷，由首次贡献者完成。社区贡献转化良好。

**整体进展评估**：今天在 *streak* 上属于"维护性推进"——既没有重大功能落地，也没有 release 节点；但社区贡献与一线维护均保持活跃，**接近健康仓库的常态迭代节奏**。

---

## 4. 社区热点

按评论数与点赞数排序：

| 排名 | Issue/PR | 标题 | 评论 | 👍 |
|---|---|---|---|---|
| 1 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | QwenPaw Hub 多租户版：接下来做什么？ | **34** | **4** |
| 2 | [#7722](https://github.com/agentscope-ai/QwenPaw/issues/7722) | 容器内存耗尽：三条复合路径 | 7 | 0 |
| 3 | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | 类似 codex 的 steer mode | 4 | 0 |
| 4 | [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | 自定义 Agent 名称与头像 | 4 | 1 |

**分析**：
- **#7318（多租户方向）**是当前社区最强的需求信号：QwenPaw Hub 2.2.0 已发布，社区正围绕"团队/组织级使用"持续展开讨论，热度居高不下。这是当前最有可能定义下一阶段产品形态的话题。
- **#1775** 的 steer mode 提议虽评论不多，但属于 **good first issue** 标签内的实质性能力扩展，长期价值高。
- **#2865**（已关闭）从评论节奏看是用户对身份化与个性化（头像/名称）的强诉求，已被纳入实施路径。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 严重（生产/可用性影响）

1. **[Issue #7722](https://github.com/agentscope-ai/QwenPaw/issues/7722)** — 容器内存耗尽（~1MB/s 增长直至 OOM），由三条复合路径叠加：① 无界流式缓冲区 ② keep-alive 实例堆积 ③ doom-loop 闸门绕过。涉及 v2.2.0，影响所有长期运行实例。**已提供 controlled repro**。暂无对应修复 PR，建议优先立项。

3. **[Issue #8116](https://github.com/agentscope-ai/QwenPaw/issues/8116)** — 消息队列严重问题（中文用户反馈）：① 已被处理的消息后续仍会被重发；② 错误地把消息归属到不存在的另一会话。用户明确指出"半年没处理好"。**无 PR 跟进**，属于**长期未修的回归**。

### 🟠 高（核心路径性能/正确性）

3. **[Issue #8115](https://github.com/agentscope-ai/QwenPaw/pull/8115)** — Desktop 桌面端（Tauri/WebView2）冷启动 ~11s 卡在 splash，后台启动还需 16–25s，且 WebView2 进程可能静默死亡。v2.2.2b4 环境。**严重拉低桌面端首屏体验**。暂无 PR。

4. **[Issue #8117](https://github.com/agentscope-ai/QwenPaw/issues/8117)** — Provider 拒绝 `max_tokens` 上下文超出时，QwenPaw 错过 Scroll overflow-recovery 路径导致请求失败。**对应修复 PR [PR #8118](https://github.com/agentscope-ai/QwenPaw/pull/8118)** 已开启（first-time-contributor），建议关注合并进度。

### 🟡 中（个别用户遭遇）

5. **[Issue #8120](https://github.com/agentscope-ai/QwenPaw/issues/8120)** — "页面加载失败，请稍后重试"在多设备复现，v2.2.2b4。怀疑网络或更新机制问题，需排查前端离线容错。

6. **[Issue #7948](https://github.com/agentscope-ai/QwenPaw/issues/7948)** — Web Console 设计破坏用户输入（**今日关闭**）— 修复 PR [PR #8119](https://github.com/agentscope-ai/QwenPaw/pull/8119) 已合并，问题闭环。

---

## 6. 功能请求与路线图信号

| 提议 | Issue | 已有关联 PR | 落地概率评估 |
|---|---|---|---|
| 多租户 Hub 演进方向 | [#7318](https://github.com/agentscope-ai/QwenPaw/issues/7318) | 无（产品方向讨论） | 🔥 **极高** — 已纳入 2.2.0，是当前主推方向 |
| Codex 式 steer mode（执行中追加指令） | [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | 无 | 🟢 较高 — 已存在 good first issue 标签，技术路径清晰 |
| 自定义 Agent 名称/头像 | [#2865](https://github.com/agentscope-ai/QwenPaw/issues/2865) | 无（已关闭） | 🟡 中 — 已被关闭，但未提及 PR 落地，需关注 |
| 推理强度（reasoning effort）控制 | [#8114](https://github.com/agentscope-ai/QwenPaw/issues/8114) | 无（已关闭） | 🟡 中 — 社区诉求明显（"3.8 模型太爱思考"），有望在下一版模型路由中加入 |
| Hourly Dream 预设 + 错过的运行补跑 | [#8112](https://github.com/agentscope-ai/QwenPaw/issues/8112) | 无 | 🟢 较高 — 改动局限于 Console 调度 UI 与后台补偿逻辑 |

此外，与**功能能力扩展**相关的 PR：
- [PR #8067](https://github.com/agentscope-ai/QwenPaw/pull/8067) 修复 CJK 强调边界（Markdown 渲染），关注国际化体验；
- [PR #8121](https://github.com/agentscope-ai/QwenPaw/pull/8121) Creator 子模块大版本推进。

---

## 7. 用户反馈摘要

从 Issues 评论可提炼以下真实痛点：

- **🐢 启动延迟**：用户反复报告桌面端/页面加载等待过久（#8115、#8120），首屏体验是**新用户第一印象的关键瓶颈**。
- **🧠 模型"过度推理"**：Issue #8114 中文反馈"3.8 这种模型太爱思考了，要限制一下"，反映出 reasoning 模型对日常对话场景的"过度消耗"已成为真实使用障碍。**缺乏推理强度控制**。
- **🔁 消息重复与会话串号**：Issue #8116（中文）"消息已经处理还会再发"、"归属到不存在的会话"，半年来多次反馈未根治，是**体验信任度**上的硬伤。
- **🧱 内存/资源管理不透明**：Issue #7722 详细拆解了三条复合路径，反映**资深用户希望系统性问题得到根治**，而非一次次打补丁。
- **🪪 个性化诉求**：Issue #2865（已关闭）的"自定义 Agent 名称+头像"反映出**用户将 AI 助手视为"角色伙伴"而非纯工具**的产品心智。

整体来看，用户满意度偏中性偏下：**功能丰富度认可度高，但稳定性、错误恢复、首屏体验仍是短板**。

---

## 8. 待处理积压

提醒维护者重点关注的长期未响应项：

| Issue/PR | 类型 | 创建时间 | 持续时间 | 状态 |
|---|---|---|---|---|
| [#1775](https://github.com/agentscope-ai/QwenPaw/issues/1775) | Feature（steer mode） | 2026-03-18 | **~200 天** | Open, good first issue |
| [PR #7865](https://github.com/agentscope-ai/QwenPaw/pull/7865) | fix(console) chat stream 自愈 | 2026-09-18 | ~20 天 | Open, size/M |
| [PR #7869](https://github.com/agentscope-ai/QwenPaw/pull/7869) | fix(providers) session header 透传 | 2026-09-18 | ~20 天 | Open, Under Review |
| [PR #8065](https://github.com/agentscope-ai/QwenPaw/pull/8065) | fix(skills) 路径穿越修复 | 2026-10-01 | ~7 天 | Open, size/S, CodeQL 触发 |
| [PR #8066](https://github.com/agentscope-ai/QwenPaw/pull/8066) | fix(agents) 空媒体块 | 2026-10-01 | ~7 天 | Open, size/S |
| [PR #8067](https://github.com/agentscope-ai/QwenP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-08

> 数据范围：2026-10-07 ~ 2026-10-08  
> 数据来源：[github.com/zeroclaw-labs/zeroclaw](https://github.com/zeroclaw-labs/zeroclaw)

---

## 一、今日速览

ZeroClaw 今日仍处于**高强度维护与发布闸门周期**，但**未产出新版本**。过去 24 小时内共有 46 条 Issue 更新（新开/活跃 45 条，仅关闭 1 条），以及 50 条 PR 更新（待合并 47 条，已合并/关闭 3 条），活跃度维持在高位但**吞吐偏低**——合并/关闭数仅占总 PR 流量的 6%，说明多数提交仍处于"待评审 + 堆叠依赖"的中间态。

从主题分布看，今日工作高度集中于**三个垂直方向**：
1. **插件系统**（plugin update/install/replace 的多 PR 堆叠链）；
2. **沙箱与安全**（firejail/bubblewrap 多项高优先级 Bug 集中爆发）；
3. **配置/Schema 一致性**（schema_version 错写、routing 配置回写污染等回归问题）。

整体健康度判断：**稳定但偏保守**。维护者 IftekharUddin 一人承担了约 30% 的新开/更新工作，单点风险显著。

---

## 二、版本发布

⚠️ **今日无新版本发布**。从 PR 元数据看，**v0.8.6 候选工作仍在进行中**（多个 PR 标注 `release:v0.8.6` 且处于堆叠未合并状态），同时社区已有面向 **v0.9.0** 的回归 Bug 报告（如 [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579)），建议关注下一次 release 节奏。

---

## 三、项目进展

### 已合并/关闭（3 条）

| 类型 | 编号 | 标题 | 价值 |
|---|---|---|---|
| Issue | [#10769](https://github.com/zeroclaw-labs/zeroclaw/issues/10769) | Harden plugin payload opens against concurrent ancestor replacement | 关闭一个高风险 WASM 插件 TOCTOU 竞态（来自 #9134 评审的剩余项） |
| PR | [#11192](https://github.com/zeroclaw-labs/zeroclaw/pull/11192) | test(runtime): isolate payload capture tests by trace id | 修复一个 flaky 测试在并行门下的串扰（紧扣 #11180） |
| PR | [#11232](https://github.com/zeroclaw-labs/zeroclaw/pull/11232) | fix(plugins): open admitted payloads from the retained package root | 插件 payload 通过目录句柄解析，关闭目录替换竞态；为 #11236/#11261/#11262 整条堆叠链奠基 |

### 关键在途工作（虽未合并，但代表项目方向）

- **插件更新体系**：[#11262](https://github.com/zeroclaw-labs/zeroclaw/pull/11262)（`zeroclaw plugin update`）、[#11261](https://github.com/zeroclaw-labs/zeroclaw/pull/11261)（staged admission 替换）、[#11236](https://github.com/zeroclaw-labs/zeroclaw/pull/11236)（不完整安装恢复）形成完整链路；
- **沙箱策略统一**：[#7821](https://github.com/zeroclaw-labs/zeroclaw/pull/7821) 引入 `SandboxPolicyConfig` 作为文件系统策略权威模型，融合 OS 沙箱与应用层强制；
- **会话原子所有权**：[#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) 在 `SessionBackend` 上抽象原子 ownership claim，作用于 RPC Chat 与持久化 WebSocket 准入；
- **文件系统频道路径收紧**：[#11394](https://github.com/zeroclaw-labs/zeroclaw/pull/11394) / [#11405](https://github.com/zeroclaw-labs/zeroclaw/pull/11405) / [#11406](https://github.com/zeroclaw-labs/zeroclaw/pull/11406) / [#11413](https://github.com/zeroclaw-labs/zeroclaw/pull/11413) 按平台拒绝宽根目录（Windows/macOS/Linux/all），是**破坏性变更**（`breaking-change` 标记）。

整体看：今日**净推进约 3 个工作单元**（1 个 Issue 关闭 + 2 个 PR 落定），并为 v0.8.6 累积了 5+ 项关键 PR 的合入条件。

---

## 四、社区热点

按评论数排序的活跃讨论：

1. **[#8692](https://github.com/zeroclaw-labs/zeroclaw/issues/8692) — Maintainer decision queue for RFCs and design issues（15 评论）**  
   维护者决策追踪器，从 7 月开放至今仍在滚动。**诉求**：社区需要一个明确的 RFC/设计 Issue 接受/拒绝/延期/拆分机制。当前累计 15 条评论反映**治理透明度**是核心痛点。

2. **[#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) — RFC: Workspace-relative forbidden path patterns and optional .zeroclawignore（13 评论）**  
   工作区内敏感文件（`rust-toolchain.toml`、`.env`、`config.yaml`）当前可被 Agent 访问。**诉求**：扩展 `forbidden_paths` 机制覆盖工作区内部，并引入 `.zeroclawignore`。属于高风险（`risk:high`）安全 RFC。

3. **[#11055](https://github.com/zeroclaw-labs/zeroclaw/issues/11055) — Standalone channel start SOP turns lack live channel tool handles（7 评论）**  
   频道寻址工具在 daemon 部署下除两个入口外均不可用。**诉求**：暴露 `register_channel_map_fn` 之外的工厂注入点。

4. **[#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) — SQLite session backend rewrites created_at of every message on each turn（5 评论）**  
   每轮 turn 整表替换 transcript，导致**所有消息 `created_at` 被覆写为同一时刻**，`GET /api` 无法返回真实时序。**诉求**：保留每条消息的原始时间戳。

5. **[#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) — Guide local model selection with llmfit（4 评论）**  
   本地模型选型（Ollama / llama.cpp）需要硬件、量化、上下文、工具支持等综合指引，**诉求**：官方文档 + llmfit 工具集成。

6. **[#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) — Earlier path-marker images are re-sent on every later turn（4 评论）**  
   Signal/Telegram/Discord 把 `[IMAGE:<path>]` 标记持续保留在 session 历史中，导致模型将旧图误判为"新图"。与 [#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) 的"按批次驱逐"形成上下文配套。

7. **[#11166](https://github.com/zeroclaw-labs/zeroclaw/issues/11166) — Evict images in batches when the per-request image cap is exceeded（4 评论）**  
   在 `max_images` 上限附近重写 prompt cache，改为每 N 张重写一次。

**分析**：今日讨论焦点集中在**配置/路径安全**与**会话/历史一致性**两条主线，反映出 ZeroClaw 已从"功能扩展期"进入"语义正确性"阶段。

---

## 五、Bug 与稳定性

### 🔴 S0 / 数据丢失或安全风险

| Issue | 标题 | 状态 |
|---|---|---|
| [#11540](https://github.com/zeroclaw-labs/zeroclaw/issues/11540) | bubblewrap sandbox 未在 Linux 上被检测到，回退到应用层 | 开放（`priority:p1, risk:high`） |

### 🟠 S1 / 流程阻塞

| Issue | 标题 | 状态 |
|---|---|---|
| [#11538](https://github.com/zeroclaw-labs/zeroclaw/issues/11538) | Firejail 沙箱失败："invalid private directory" | 开放，无 fix PR |
| [#11539](https://github.com/zeroclaw-labs/zeroclaw/issues/11539) | Firejail 沙箱失败："invalid --nowheel command line option" | 开放，无 fix PR |
| [#11180](https://github.com/zeroclaw-labs/zeroclaw/issues/11180) | Flaky：并行门下的 payload 捕获测试读到其他测试的 record | 已有 [#11192](https://github.com/zeroclaw-labs/zeroclaw/pull/11192) 关闭 |

### 🟡 S2 / 行为降级

| Issue | 标题 | 备注 |
|---|---|---|
| [#11594](https://github.com/zeroclaw-labs/zeroclaw/issues/11594) | `firejail_args` 暴露但从不传给 firejail | `needs-maintainer-review` |
| [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | 成本上限触发后只能重启 daemon 才能清除（`cost.allow_override` 从未被读取） | `in-progress` |
| [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | `save_dirty` 在未迁移的 V1/V2 配置上写 `schema_version=3`，下次加载跳过迁移、agent 消失 | 影响 v0.9.0 |
| [#11606](https://github.com/zeroclaw-labs/zeroclaw/issues/11606) | `model_routing_config upsert_agent` 整配置回写，**捏造** risk/runtime profile、丢字段、重置 agent 限额 | 严重配置污染 |
| [#11552](https://github.com/zeroclaw-labs/zeroclaw/issues/11552) | 工具 egress 仪式忽略 `websocket_client` 和 `socket_client` 声明 | 权限提升风险 |
| [#11562](https://github.com/zeroclaw-labs/zeroclaw/issues/11562) | 插件更新期间，可短暂把上一代 manifest 配对到新一代 component | 影响 v0.8.6 |
| [#11420](https://github.com/zeroclaw-labs/zeroclaw/issues/11420) | SQLite session 每次整 transcript 覆写 | 时序数据丢失 |
| [#11554](https://github.com/zeroclaw-labs/zeroclaw/issues/11554) | 路径标记图片在后续每轮重发 | 多频道一致性问题 |

### 🟢 S3 / 轻微

| Issue | 标题 |
|---|---|
| [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | ZeroCode 侧边栏在 daemon 重启后把失败会话显示为绿色 |
| [#11360](https://github.com/zeroclaw-labs/zeroclaw/issues/11360) | 包锁文件可被其他本地账户读取，触发 install/remove 失败（仅可用性） |

**整体观察**：
- **firejail 三连**（#11538 / #11539 / #11594）由同一作者 [@maacruz](https://github.com/maacruz) / [@tunglambk](https://github.com/tunglambk) 连续报告，且无对应 fix PR 提交——**沙箱后端质量需要维护者立即关注**；
- **配置回写类 Bug**（#11579、#11606）影响多个版本，且都涉及"原子语义被破坏"，是项目可信度的硬伤；
- **插件生命周期**相关的安全/并发问题（#11552、#11562、#11360）已聚集形成 v0.8.6 发布风险。

---

## 六、功能请求与路线图信号

按"已具备 PR 支撑 = 高概率进入下个版本"排序：

| 候选 | 关联 Issue / PR | 路线图概率 |
|---|---|---|
| **工作区路径保护 + .zeroclawignore** | [#8424](https://github.com/zeroclaw-labs/zeroclaw/issues/8424) | 🟢 中等：议题活跃 13 评论，已是 RFC 阶段，但 `needs-author-action` 表明作者未推进 |
| **A2A 协议 crate（zeroclaw-a2a）** | [#11254](https://github.com/zeroclaw-labs/zeroclaw/issues/11254) | 🟢 高：#9106、#7763、#8274 已奠定基础，RFC 阶段 |
| **本地模型选型指南** | [#9549](https://github.com/zeroclaw-labs/zeroclaw/issues/9549) | 🟢 中等：纯文档 + 工具集成，门槛低 |
| **成本上限可热重置** | [#11585](https://github.com/zeroclaw-labs/zeroclaw/issues/11585) | 🟢 高：`status:in-progress` |
| **有界委托的工具级审批** | [#11138](https://github.com/zeroclaw-labs/zeroclaw/issues/11138) | 🟡 待评估：依赖 #10937 链 |
| **Opper 作为 typed OpenAI-compatible provider** | [#11583](https://github.com/zeroclaw-labs/zeroclaw/issues/11583) | 🟢 高：`status:in-progress` |
| **频道独立去抖 + 附件保留** | [#11553](https://github.com/zeroclaw-labs/zeroclaw/issues/11553) | 🟡 待评估 |
| **CLI daemon 身份验证 + 共享本地客户端** | [#11324](https://github.com/zeroclaw-labs/zeroclaw/issues/11324) | 🟡 `status:blocked`，需 #10876 / #11313 先合入 |
| **Windows 命名管道服务验证** | [#11325](https://github.com/zeroclaw-labs/zeroclaw/issues/11325) | 🟡 `status:blocked` |

**信号**：v0.8.6 显然以**插件生命周期 + 路径/沙箱安全**为

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*