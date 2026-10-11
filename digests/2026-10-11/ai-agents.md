# OpenClaw 生态日报 2026-10-11

> Issues: 500 | PRs: 500 | 覆盖项目: 13 个 | 生成时间: 2026-10-11 03:23 UTC

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
**日期：2026-10-11**

---

## 1. 今日速览

OpenClaw 今日处于高频迭代状态：过去 24 小时内 Issues 产生 500 条更新事件（新开/活跃 397，关闭 103），PRs 产生 500 条更新事件（待合并 390，已合并/关闭 110），并发布了 **v2026.10.1** 稳定版。项目当前阶段呈现"集中修复 + 大规模 UI 重构 + 持续积压"三重并行特征：维护团队正同时推进 Solid 2 前端迁移、Codex/Claude CLI 兼容修复以及 sqlite/Worker 资源类长期缺陷，但 P0 级 Release-Blocker 数量仍居高不下，社区需要持续关注。

---

## 2. 版本发布

### v2026.10.1（稳定版，今日发布）

**Highlight — Sessions and Memory（会话与记忆）：**
- 在 Registry 变更场景下保留 usage（已用资源记录）
- 支持从远程 Workspace 下发 Worker 附件
- 防止队列取消（queued cancellations）与 transcript 别名阻塞当前活动 turn
- 保持 continuation 签名对齐
- 完成 embedding 缓存迁移

**配套修复 PR 提示：** [#168849](https://github.com/openclaw/openclaw/pull/168849) `fix(update): complete the first upgrade from stable 2026.10.1` 正在跟进该版本的首升级路径修复（status: ⏳ waiting on author）。

**迁移注意：** 从更早稳定版（≤ 2026.10.1 之前的 9.x 分支）首次升级到此版本时，CLI 退出阶段可能失败；建议升级前预留一次手动重试窗口。

---

## 3. 项目进展

### 3.1 已合并/关闭的代表性 PR

| PR | 主题 | 状态 | 链接 |
|---|---|---|---|
| #168836 | fix(release): stop live npm dist-tags from failing validated release candidates | CLOSED | [#168836](https://github.com/openclaw/openclaw/pull/168836) |
| #168670 | fix: preserve Claude CLI tools after exec completion（修复 #168342） | CLOSED | [#168670](https://github.com/openclaw/openclaw/pull/168670) |
| #168682 | perf(worktrees): avoid eager partial-clone blobs and clean tree rebuilds | CLOSED | [#168682](https://github.com/openclaw/openclaw/pull/168682) |
| #168765 | chore(ui): refresh control ui locales | CLOSED | [#168765](https://github.com/openclaw/openclaw/pull/168765) |
| #168206 | fix(control-ui): keep the sidebar stable across deep-link reloads | CLOSED | [#168206](https://github.com/openclaw/openclaw/pull/168206) |

### 3.2 进行中的关键重构

- **Solid 2 UI 迁移**：多条 XL 级 PR 并行推进，包括 #168852（侧边栏）、#168790（共享 viewer）、#168762（Chat 叶子节点）、#168739（聊天工具与附件）。目标是替换底层 Lit 渲染而不改变交互契约。
- **Service / Reply / Agents 简化重构**：#168690（metadata/catalog）、#168847（reply coordination）、#168789（subagent/runner），属于"删除冗余 book-keeping + 保留真正副作用保护"的整体治理批次。
- **2026.9.33 维护线准备**：[#168346](https://github.com/openclaw/openclaw/pull/168346) 提供基于 2026.9.9 的 backport 清单与可审阅修复提案，但本身不下发任何修复。

### 3.3 推进度判断

保持主线"前端迁移 + 兼容性 + 稳定性"三条流并进，单日合并/关闭数量与活动 PR 数量基本平衡，但**整体向前推进速度受 P0 阻塞影响**，真正的 release-blocker 修复仍多由 Critical/Platinum Hermit 级 issue 主导。

---

## 4. 社区热点

### 4.1 评论密度最高的 Issues

| # | 标题 | 评论数 | 链接 |
|---|---|---|---|
| #143524 | Bug: Agent SQLite WAL 增长至 1.4–2.8 GB，阻塞 gateway 启动（Windows）| **118** | [#143524](https://github.com/openclaw/openclaw/issues/143524) |
| #48003 | Steer mode 不在主会话 turn 中注入消息 | 20 | [#48003](https://github.com/openclaw/openclaw/issues/48003) |
| #22438 | 功能：分层 Bootstrap 文件加载以实现渐进式上下文控制 | 19 | [#22438](https://github.com/openclaw/openclaw/issues/22438) |
| #97616 | Bug: 钩子/工具子进程未收割导致僵尸累积 | 18 | [#97616](https://github.com/openclaw/openclaw/issues/97616) |
| #87744 | Bug: Codex-backed Telegram turn 在 2026.5.27 频繁超时 | 18 | [#87744](https://github.com/openclaw/openclaw/issues/87744) |
| #40001 | Write 工具缺少 append 模式，cron 会话会覆盖共享文件 | 16 | [#40001](https://github.com/openclaw/openclaw/issues/40001) |
| #167771 | 更新被 update-recovery-pending / managed handoff lease 永久阻塞 | 10 | [#167771](https://github.com/openclaw/openclaw/issues/167771) |
| #157630 | 显式 `--max-old-space-size` 静默覆盖 worker `resourceLimits` | 14 | [#157630](https://github.com/openclaw/openclaw/issues/157630) |

### 4.2 热点诉求归纳

1. **存储/资源生命周期失控**（SQLite WAL、plugin-capture tmp dir、heap policy 覆盖）—— 用户对"磁盘被吃满"、"升级前清场"高度不满。
2. **会话可用性**（steer 中断、Codex 端无 completed、Telegram 死信）—— 操作员关注"用户回复能否最终送达"。
3. **更新器/安装链路可靠性**（LXC FICLONE EPERM、Windows 35 分钟 Doctor、Gateway 启动后永久 stuck）—— 升级体验仍是主要失望点。
4. **Codex 兼容**（403 owner-verification、长回复 ~1100 字符截断、app-server turn/started 后失声）—— 持续供给侧问题。

---

## 5. Bug 与稳定性

按严重程度自高到低排列，标注是否已有关联 PR：

### P0 / Release-Blocker（影响 UX 与升级路径）

| Issue | 描述 | 修复状态 | 链接 |
|---|---|---|---|
| #143524 (118 💬) | Agent SQLite WAL 无限增长阻塞 gateway | 无公开 fix PR，标记 `no-new-fix-pr` | [#143524](https://github.com/openclaw/openclaw/issues/143524) |
| #167771 | 更新被 `update-recovery-pending` / handoff lease 死锁，无修复路径 | 无 fix PR，标记 `needs-live-repro` | [#167771](https://github.com/openclaw/openclaw/issues/167771) |
| #160959 | plugin 捕获在 2026.9.6 回归中阻塞事件循环数分钟 | 无 fix PR | [#160959](https://github.com/openclaw/openclaw/issues/160959) |
| #160521 | Gateway 在 reconcileActive 中状态库读取封印导致崩溃 | 无 fix PR | [#160521](https://github.com/openclaw/openclaw/issues/160521) |
| #158390 | plugin-captures 临时目录不 GC，磁盘无限填充 | 无 fix PR | [#158390](https://github.com/openclaw/openclaw/issues/158390) |
| #91931 | 预置 SOUL.md/IDENTITY.md/USER.md 触发 bootstrap auto-complete 误删 BOOTSTRAP.md | 无 fix PR | [#91931](https://github.com/openclaw/openclaw/issues/91931) |
| #167652 | Windows 升级到 2026.9.9 后 Gateway 永久挂起 | 无 fix PR | [#167652](https://github.com/openclaw/openclaw/issues/167652) |
| #164396 | 2026.9.8 Windows 全新安装无法连接本地 gateway | 无 fix PR | [#164396](https://github.com/openclaw/openclaw/issues/164396) |
| #168307 (CLOSED, 13 💬) | 2026.9.9 单核 grind + 间歇拒连 6+ 小时（Windows） | 已关闭待验证 | [#168307](https://github.com/openclaw/openclaw/issues/168307) |

### P0 Beta / 安全相关

| Issue | 描述 | 修复状态 | 链接 |
|---|---|---|---|
| #142821 | 默认开启的 model-visible transcript 脱敏导致重放上下文污染 | 无 fix PR；标签 `security-sensitive-changed` 正在 PR #168401 等治理 | [#142821](https://github.com/openclaw/openclaw/issues/142821) |
| #157126 (CLOSED, 13 💬) | claude-cli MCP bridge 重启恢复后 owner turn 丢失 operator.admin | 修复链路中（PR 关联） | [#157126](https://github.com/openclaw/openclaw/issues/157126) |
| #162047 (CLOSED, 9 💬) | Windows 升级 35+ 分钟 Doctor 硬链接 namespace 校验 | 已关闭 | [#162047](https://github.com/openclaw/openclaw/issues/162047) |
| #164113 (CLOSED, 9 💬) | LXC 容器内更新 fail at `updater-runtime-retention`（FICLONE EPERM） | 已关闭 | [#164113](https://github.com/openclaw/openclaw/issues/164113) |

### P1 可靠性/会话状态

- [#48003](https://github.com/openclaw/openclaw/issues/48003) Steer mode 不注入 — 无 fix PR
- [#97616](https://github.com/openclaw/openclaw/issues/97616) 子进程泄漏 / 僵尸累积 — 无 fix PR
- [#87744](https://github.com/openclaw/openclaw/issues/87744) Codex-backed Telegram turn 超时 — 无 fix PR
- [#162119](https://github.com/openclaw/openclaw/issues/162119) Codex 403 owner-verification — 无 fix PR
- [#137710](https://github.com/openclaw/openclaw/issues/137710) Native Codex completion 不唤醒 yield parent — 无 fix PR
- [#156895](https://github.com/openclaw/openclaw/issues/156895) automations 工具创建 job fail closed in 20ms — 无 fix PR

### P1–P2 体验/数据丢失

- [#40001](https://github.com/openclaw/openclaw/issues/40001) `write` 缺 append 模式 → cron 共享文件被覆盖
- [#157630](https://github.com/openclaw/openclaw/issues/157630) `--max-old-space-size` 静默覆盖 worker `resourceLimits`
- [#94939](https://github.com/openclaw/openclaw/issues/94939) 6.x 状态迁移让 channel conversation-store SQLite 留 0 字节
- [#84516](https://github.com/openclaw/openclaw/issues/84516) Codex 长回复 ~1100 字符被静默截断
- [#159094](https://github.com/openclaw/openclaw/issues/159094) macOS 2026.9.6 状态生命周期租约冲突

---

## 6. 功能请求与路线图信号

下表中的功能请求均带 PR/Issue 双向关联，按"近期可纳入下一版本"的概率排序：

| 主题 | Issue | 跟进 PR | 进入下一版本概率 | 备注 |
|---|---|---|---|---|
| 分层 Bootstrap 文件加载 | [#22438](https://github.com/openclaw/openclaw/issues/22438) | 尚无 PR | 中 | 与 #67419 bootstrap 重注入 token 浪费问题互为镜像 |
| 内置无头浏览器 | [#53763](https://github.com/openclaw/openclaw/issues/53763) | 尚无 PR | 中-低 | 取决于 Chromium 体积与维护负担评估 |
| restart 期间补齐入站消息 | [#55792](https://github.com/openclaw/openclaw/issues/55792) | 尚无 PR | 中 | 涉及 provider reconnect 历史回放 |
| Control UI 档案命名 | [#164825](https://github.com/openclaw/openclaw/pull/164825) | 已开 PR | **高** | size L / P3，状态 ⏳ waiting on author |
| Profile UI 管理 channel identity link | [#164607](https://github.com/openclaw/openclaw/pull/164607) | 已开 PR | **高** | 与 #162164 同源，安全敏感 |
| ChatGPT sign-in 远程压缩 V2 | [#168401](https://github.com/openclaw/openclaw/pull/168401) | 已开 PR | **高** | 显式关闭 #168088；security-sensitive-changed |
| Volta shim 路径偏好（macOS LaunchAgent） | [#52184](https://github.com/openclaw/openclaw/issues/52184) | 尚无 PR | 低 | stale 标签，需维护者决策 |
| Kubernetes 安装文档更新 | [#91455](https://github.com/openclaw/openclaw/issues/91455) | 尚无 PR | 中 | 文档型 |

---

## 7. 用户反馈摘要（提炼自高评论 Issues）

**关键痛点（按出现频次）：**

1. **升级即赌博**：用户普遍反映"在 Windows/macOS/Linux/Windows VM/LXC 各组合下升级后行为不可预测"。—— [#160521](https://github.com/openclaw/openclaw/issues/160521) [#162047](https://github.com/openclaw/openclaw/issues/162047) [#164396](https://github.com/openclaw/openclaw/issues/164396) [#164113](https://github.com/openclaw/openclaw/issues/164113) [#167652](https://github.com/openclaw/openclaw/issues/167652)
2. **Telegram/Codex 通道静默失败**：用户期望"消息一定会到达"，但实际表现为"没有错误、没有重试、没有 reconcileUnknownSend"，偶发即丢失。 —— [#125764](https://github.com/openclaw/openclaw/issues/125764) [#87744](https://github.com/openclaw/openclaw/issues/87744) [#101656](https://github.com/openclaw/openclaw/issues/101656)
3. **磁盘失控**：plugin-captures tmp、SQLite WAL、Upstash 类资源未 GC。多个用户表示"用几天就满了"，却无内建清理命令。 —— [#143524](https://github.com/openclaw/openclaw/issues/143524) [#158390](https://github.com/openclaw/openclaw/issues/158390)
4. **Codex/Claude 兼容链路**：长回复截断、403 owner-verification、turn/started 后静默——反映"我们仍依赖未公开协议"。 —— [#84516](https://github.com/openclaw/openclaw/issues/84516) [#162119](https://github.com/openclaw/openclaw/issues/162119) [#85251](https://github.com/openclaw/openclaw/issues/85251)

**正面信号：**

- 对 [#67419](https://github.com/openclaw/openclaw/issues/67419)（bootstrap 重新注入 token 浪费 20-30%）的 👍=2、#157630 的 👍=0 表示社区态度"早该如此"。
- 用户对 [#119411](https://github.com/openclaw/openclaw/issues/119411)（memory watcher 不重新索引）已被关闭表示关注，但其根因修复仍需追踪是否进入下一个稳定版 changelog。
- "Sessions and Memory" 在 v2026.10.1 highlights 中作为头条说明维护团队正把用户高频反馈显式纳入发布边界。

---

## 8. 待处理积压（建议维护者优先关注）

> 选取标准：评论数≥8、P0/P1 且无 fix PR、长期未合并。

| 序号 |

---

## 横向生态对比

# 个人 AI 助手 / 自主智能体开源生态横向对比报告

**报告日期：2026-10-11｜数据周期：过去 24 小时**

---

## 1. 生态全景

过去 24 小时观察到的开源个人 AI 助手 / 自主智能体生态呈现**"头部高强度冲刺、腰部稳态维护、尾部沉寂"**的三层结构：OpenClaw、ZeroClaw、NanoBot、Hermes Agent、CoPaw 处于高并发迭代期（PR/Issue 更新 ≥ 17 条/日），LobsterAI 集中爆发了 22 条 PR 合入，LobsterAI、NanoClaw、Moltis 处于问题/缺陷收敛阶段，PicoClaw、IronClaw、NullClaw、TinyAGI、ZeptoClaw 则进入低活跃维护或沉寂期。**安全语义边界、跨渠道可靠性、长会话资源生命周期**成为本周贯穿整个生态的三大共同焦虑；多 Provider 网关、Windows 兼容性、per-agent 隔离则是新增的功能热点。

---

## 2. 各项目活跃度对比

| 项目 | Issues 更新 | PR 更新 | Release | 当日活跃度 | 健康度评估 |
|---|---|---|---|---|---|
| **OpenClaw** | 500（397 活跃 / 103 关闭） | 500（390 待合并 / 110 已合并/关闭） | ✅ **v2026.10.1 稳定版** | 🔴 极高 | ⭐⭐⭐⭐☆ 高强度迭代 + P0 积压 |
| **NanoBot** | 2（1 新开 / 1 关闭） | 63（29 待合并 / 34 合并/关闭） | ❌ | 🟢 高 | ⭐⭐⭐⭐☆ 4/5，PR 池偏厚 |
| **Hermes Agent** | 50（42 活跃 / 8 关闭） | 50（42 待合并 / 8 合并/关闭） | ❌ | 🟢 高 | ⭐⭐⭐☆☆ 活跃高、稳定下滑 |
| **ZeroClaw** | 13 | 50（39 待合并 / 11 合并/关闭） | ❌ | 🟢 高 | ⭐⭐⭐⭐☆ v0.8.6/v0.9.0 冲刺期 |
| **CoPaw** | 15（6 活跃 / 9 关闭） | 17（7 待合并 / 10 合并/关闭） | ❌ | 🟢 中-高 | ⭐⭐⭐⭐☆ 扫旧账 + 拓新端 |
| **LobsterAI** | 1（无关） | 22（21 合并/关闭 / 1 Open） | ❌ | 🟢 中 | ⭐⭐⭐⭐☆ 高密度并发修复 |
| **Moltis** | 4 新开 | 1 待合并 | ❌ | 🟡 中-低 | ⭐⭐☆☆☆ 用户先行、代码滞后 |
| **NullClaw** | 2 新开 | 1 待合并 | ❌ | 🟡 低 | ⭐⭐⭐☆☆ 单点修复驱动 |
| **NanoClaw** | 0 | 6（1 关闭 / 5 Open） | ❌ | 🟡 低 | ⭐⭐⭐☆☆ 稳态维护 |
| **PicoClaw** | 1 存量 | 2 关闭（无合入） | ❌ | 🔴 低 | ⭐⭐☆☆☆ 维护带宽受限 |
| **IronClaw** | 2（1 新开 / 1 关闭） | 0 | ❌ | 🔴 低 | ⭐⭐☆☆☆ PR 活跃度为 0 |
| **TinyClaw** | 0 | 0 | ❌ | ⚪ 沉寂 | ⭐☆☆☆☆ 无活动 |
| **ZeptoClaw** | 0 | 0 | ❌ | ⚪ 沉寂 | ⭐☆☆☆☆ 无活动 |

---

## 3. OpenClaw 在生态中的定位

**OpenClaw 是当前生态中唯一同时具备「巨型社区规模 + 高频稳定版节奏 + 全栈覆盖」三项特征的项目。**

| 维度 | OpenClaw | 同梯队对比（NanoBot / ZeroClaw / Hermes） |
|---|---|---|
| **单日 PR 量** | 500 | NanoBot 63、ZeroClaw 50、Hermes 50 |
| **单日 Issue 量** | 500 | 50 / 13 / 50 |
| **发版节奏** | 当日 v2026.10.1 稳定版 | 三家当日均无版本发布 |
| **架构覆盖** | Solid 2 UI + Codex/Claude CLI + sqlite/Worker + 多 Channel + bootstrap + cron | NanoBot 多 Provider 网关；ZeroClaw RPC 拆分 + per-agent 隔离；Hermes 推理保真 |
| **P0 Release-Blocker** | 9 个 P0 + 4 个 P0 Beta，4 个无 fix PR | 三家 P0 普遍 1–3 个且多有对应 PR |
| **社区规模** | 评论数 100+ 的长期 Issue 存在（#143524 118 💬） | NanoBot 头部 Issue 2–3 💬，Hermes 头部 25 💬 |

**技术路线差异：**
- **OpenClaw** 走**全栈 Agent 平台**路线——UI 重构（Sold 2）+ 兼容性 + 稳定性三条流并进，单点修复覆盖范围广。
- **NanoBot** 走**多 Provider / 多渠道网关**路线，体积轻、社区小但合并节奏快。
- **ZeroClaw** 走**安全优先 + Rust 架构重塑**路线，v0.9.0 正在做 gateway→RPC 拆分与 per-agent 强 boundary。
- **Hermes Agent** 走**推理保真 + Nous Research 模型生态**路线，长会话压缩与 Desktop 是当前痛点。

**社区规模：** OpenClaw 单日活跃量约为第二梯队的 **10 倍**，稳定版节奏稳定（P0 级 Issue 居高的代价是「快速迭代 + 长期积压并存」）。

---

## 4. 共同关注的技术方向

下表汇总多个项目共同涌现的需求，按议题聚合：

| 议题 | 涉及项目 | 具体诉求 |
|---|---|---|
| **会话/上下文资源生命周期** | OpenClaw (#143524, #158390)、NullClaw (#1053, #1055)、Hermes Agent (#127260, #136349, #136350) | SQLite WAL 无界增长、plugin-captures tmp 不 GC、压缩标记泄漏、threshold_tokens 默认值文档与实现脱节——长会话/多并发场景下"配置项与实现脱节"造成信任损耗 |
| **升级/迁移路径可靠性** | OpenClaw (#167652, #164396, #160521, #164113)、LobsterAI (#2831, #2825)、NanoClaw (#3275)、ZeroClaw (#11579, #11218) | 跨平台升级后行为不可预测；Schema 版本号错标导致配置消失；symlink 丢失；`meta.lastTouchedAt` 废弃字段迁移失败 |
| **多 LLM Provider / 网关支持** | NanoBot (#5915, #5666)、PicoClaw (#3393)、IronClaw (#8131) | OpenAI 兼容端点 + 廉价推理网关 + 文档/onboarding 与实际可用列表不匹配 |
| **多渠道适配完整性** | NanoBot (#6152 WhatsApp, #5930 Feishu)、Moltis (#1297 WhatsApp 群聊, #1300 Discord DM)、CoPaw (飞书入站媒体) | 渠道适配器对上游平台身份模型的简化假设（bot 误判审批、channel 匿名广播） |
| **安全语义边界** | NanoBot (#6147 `<tool_call>` 误执行)、ZeroClaw (#9646, #9647 per-agent 越权)、Hermes Agent (#133856 `sk-ant-usr-` OAuth 误判)、CoPaw (MCP Driver 配置接口 RCE) | 共享全局资源→per-agent 强 boundary 的范式转变；API Key 类型分类错误 |
| **Windows 平台兼容性** | OpenClaw (#167652, #164396, #162047)、Hermes Agent (#136390 调度任务, #127260 git-bash BOM, #122190 session hidden)、CoPaw (#8163 长路径) | 升级、调度任务、长路径、shell 编码 BOM 持续拖累 Windows 体验 |
| **Desktop UI 体验** | Hermes Agent (#129993, #129731, #136335 重复渲染)、PicoClaw (#3281 输入卡顿)、CoPaw (#8172 Console 静默空完成) | 长回合后消息重复渲染、UI 假活、空响应无错误提示 |
| **第三方集成 / 嵌入式** | PicoClaw (#3421 HTTP API)、NanoClaw (#4057 Docker 清理时序) | Agent 框架从聊天机器人向"可编程后端"演进，HTTP/RPC 化需求上升 |

---

## 5. 差异化定位分析

| 项目 | 功能侧重 | 目标用户 | 关键技术架构 |
|---|---|---|---|
| **OpenClaw** | 全栈 Agent 平台，多 channel + 多 CLI 后端 + bootstrap + cron + UI | 企业 / 重度自托管用户 | TS/JS 前端（Solid 2 迁移）+ Node 后端 + sqlite |
| **NanoBot** | 多 Provider 网关 + 多渠道桥接 | 个人 / 小团队快速集成 | 轻量、Provider/Channel 抽象层 |
| **Hermes Agent** | 推理保真、跨平台 Desktop | Nous Research 生态用户、模型实验者 | TUI + Desktop + 上下文压缩层 |
| **ZeroClaw** | 安全优先 + per-agent 隔离 | 对安全敏感的部署场景 | Rust，gateway→RPC 进程内拆分，per-agent ownership scoping |
| **CoPaw** | Console 端稳定性 + 多模型适配 | AgentScope 生态、Hub 用户 | Console-first，OpenAI Responses API 兼容 |
| **LobsterAI** | 办公场景（Word/Excel/WPS）+ Cowork 引擎 | 网易有道办公协作用户 | Electron + Univer + OpenClaw v2026.8.1 后端 |
| **Moltis** | 自托管 Agent + 渠道适配 | 个人 / 小团队自托管 | 渠道适配层 + 安全策略精细化 |
| **NanoClaw** | Docker 容器化 Agent + 跨 channel 身份 | 运维 / 容器化部署用户 | DockerHandle、agent runner 容器栈 |
| **NullClaw** | Zig 实现 + 资源有界 | 资源敏感场景、嵌入式 | Zig，`max_history_messages` 双层保护 |
| **IronClaw** | 多 Provider onboarding | 试用型用户 | 文档-体验一致性较差 |
| **PicoClaw** | 轻量 Web UI | 入门用户 | Web UI 为主，社区贡献流失 |
| **TinyClaw / ZeptoClaw** | — | — | 当前无活跃信号 |

**关键架构差异：**
- **语言栈**：Rust（ZeroClaw）、Zig（NullClaw）、TS/JS（OpenClaw/CoPaw/LobsterAI）、Python（NanoBot/Hermes Agent）。
- **部署形态**：进程内嵌（NullClaw / PicoClaw）vs. CLI 守护进程（OpenClaw / NanoBot）vs. 容器化（NanoClaw）vs. Desktop 应用（Hermes Agent / LobsterAI）vs. 自托管服务（Moltis）。
- **安全模型**：粗放黑名单（OpenClaw 当前阶段）→ 身份感知分流（NanoClaw #3446/#3450、Moltis #1297/#1300）→ per-agent 强 boundary（ZeroClaw v0.9.0 路线）。

---

## 6. 社区热度与成熟度分层

### 第一梯队 · 快速迭代期
- **OpenClaw / ZeroClaw / Hermes Agent / NanoBot / CoPaw**
- 特征：单日 PR + Issue 更新 ≥ 50，存在 1–2 个高评论数议题（OpenClaw #143524 118 💬、Hermes #131859 25 💬），处于功能扩展与架构重塑并行阶段。
- 风险：P0 积压 + PR 待合并数高（OpenClaw 390、NanoBot 29、ZeroClaw 39、Hermes 42），合并节奏可能跟不上代码流入。

### 第二梯队 · 质量巩固期
- **LobsterAI**
- 特征：当日 22 条 PR 中 21 条合并/关闭，

---

## 同赛道项目详细报告

<details>
<summary><strong>NanoBot</strong> — <a href="https://github.com/HKUDS/nanobot">HKUDS/nanobot</a></summary>

# NanoBot 项目日报 · 2026-10-11

## 1. 今日速览

NanoBot 在过去 24 小时内呈现出**高活跃度、多线并进**的开发态势：累计 63 个 PR 发生更新，其中 34 个已合并或关闭，29 个仍处于待处理状态；2 个 Issue（1 新开/1 已关闭）。社区贡献者分布广泛，外部贡献者与核心维护者（chengyongru、Re-bin）协同推进了 Provider、Channel、WebUI、Skills、Release Pipeline 等多条主线。**整体来看项目处于健康迭代期，但 PR 积压（29 待合并）需要关注，特别是部分高优先级修复仍未落地。**

---

## 2. 版本发布

⚠️ **今日无新版本发布。**

但相关 Release 流程正在被重新设计：
- [#5817](https://github.com/HKUDS/nanobot/pull/5817) — 新增 `nanobot update` 命令，支持 PyPI 稳定版与源码 `--dev` 升级
- [#6146](https://github.com/HKUDS/nanobot/pull/6146) — 定义 stable / preview 双轨发布策略

建议关注者留意下个版本窗口期。

---

## 3. 项目进展

今日合并/关闭的重要 PR（部分已 landed），推进了多个核心模块：

| PR | 标题 | 影响 |
|---|---|---|
| [#4819](https://github.com/HKUDS/nanobot/pull/4819) | fix(memory): replace WeakValueDictionary with plain dict for consolidation locks | ✅ **已关闭** — 修复 GC 周期导致 per-session consolidation lock 失效的稳定性问题 |
| [#4919](https://github.com/HKUDS/nanobot/pull/4919) | feat(telegram): support custom Bot API base URL and extra headers | ✅ **已关闭** — 实现 #4702，支持自建 Bot API / 企业网关 |
| [#6145](https://github.com/HKUDS/nanobot/pull/6145) | feat(webui): improve model and provider settings UX | ✅ **已关闭** — 模型/Provider 设置增加可搜索字段与重试机制 |

**项目整体向前推进的信号**：底层 memory 健壮性、Telegram 通道灵活性、WebUI 设置面板的可用性均得到改善；新的 Provider/Channel/MCP 集成正在加速汇聚至主干。

---

## 4. 社区热点

按讨论与上下文权重，以下议题获得最多关注：

- 🥇 **[#6123 — Telegram 媒体 URL 类型误判](https://github.com/HKUDS/nanobot/issues/6123)**  
  已 2 条评论，由 `gianfrancodemarco` 报告带 query string 的远程图片（如 `card.jpg?width=672`）被识别为 document 的问题。**该 Issue 已有对应 fix PR #6149 在路上**。

- 🥈 **[#6147 — 收紧 tool calls 与兼容性回退 [P1]](https://github.com/HKUDS/nanobot/pull/6147)**  
  **优先级最高的安全类修复**。讨论重点：移除 PR #4662 引入的明文 `<tool_call>` 提取逻辑，防止 Assistant 文本中的示例被误执行；统一要求使用 API 结构化 tool-call 字段。

- 🥉 **[#6152 — 新增 WhatsApp Agent Platform Channel](https://github.com/HKUDS/nanobot/pull/6152)**  
  接入 WhatsApp 官方 `api.whatsapp.com/agent/v1`，将显著扩展 nanobot 在企业消息生态的可达性。

- **[#5915 — Cheaper Inference Provider](https://github.com/HKUDS/nanobot/pull/5915)** & **[#5666 — aimlapi.com Provider](https://github.com/HKUDS/nanobot/pull/5666)**  
  两条 Provider 接入 PR 同时涌入，标志社区对**低成本/聚合型 LLM 网关**的需求集中爆发。

**背后的诉求**：用户希望 nanobot 既能覆盖主流商用 API，也能灵活接入自托管/聚合网关/官方 WhatsApp 等多端生态；同时对**安全语义边界**（tool call 不被文本触发）越发敏感。

---

## 5. Bug 与稳定性

按严重程度排列：

| 级别 | 描述 | Issue/PR | 是否有 Fix |
|---|---|---|---|
| 🔴 **P1** | 助手文本中的 `<tool_call>` 标记可能被错误执行（含示例） | [#6147](https://github.com/HKUDS/nanobot/pull/6147) | ✅ PR 已 OPEN，待合并 |
| 🟠 **P2** | Telegram 远程带 query string 的图片/视频被误判为 document | [#6123](https://github.com/HKUDS/nanobot/issues/6123) | ✅ [#6149](https://github.com/HKUDS/nanobot/pull/6149) 已在路上 |
| 🟢 **P2** | WebUI 自动打开浏览器失败（尤其 WSL）时，用户无法找到登录入口 | [#6150](https://github.com/HKUDS/nanobot/pull/6150) | ✅ PR 已 OPEN |
| 🟢 **P2** | 删除 Provider 连接后重启会重新出现为空默认项 | [#6148](https://github.com/HKUDS/nanobot/pull/6148) | ✅ PR 已 OPEN（依赖 #6145，后者已关闭 ✅） |

**评估**：所有今日报告的 Bug 均有对应的修复在准备中，**未发现无人接管的崩溃级问题**。

---

## 6. 功能请求与路线图信号

**可能被纳入下个版本的特性**（依据 PR 状态 + 优先级）：

| 特性 | PR | 优先级 | 状态 |
|---|---|---|---|
| 🔐 WebUI 本地登录简化 + 网络访问 | [#6150](https://github.com/HKUDS/nanobot/pull/6150) | P2 | OPEN |
| 📲 WhatsApp Agent Platform Channel | [#6152](https://github.com/HKUDS/nanobot/pull/6152) | P2 | OPEN |
| 💰 Cheaper Inference / aimlapi 网关 Provider | [#5915](https://github.com/HKUDS/nanobot/pull/5915), [#5666](https://github.com/HKUDS/nanobot/pull/5666) | P2 | OPEN |
| 🪟 Feishu 群聊 Bot-to-Bot 消息支持 | [#5930](https://github.com/HKUDS/nanobot/pull/5930) | P2 | OPEN |
| 🧠 `my` 工具会话级 `focus` 持久化（修复 #3292） | [#5537](https://github.com/HKUDS/nanobot/pull/5537) | P2 | OPEN（长期未合） |
| 🛠 Skills `disable-model-invocation: true` 手动模式 | [#5405](https://github.com/HKUDS/nanobot/pull/5405) | P2 | OPEN（长期未合） |
| 🔍 ProviderPicker 搜索过滤 | [#5776](https://github.com/HKUDS/nanobot/pull/5776) | P2 | OPEN |
| 🌐 FXMacroData / Keenable MCP preset | [#6068](https://github.com/HKUDS/nanobot/pull/6068), [#6014](https://github.com/HKUDS/nanobot/pull/6014) | P2 | OPEN |

**信号**：路线图明显向「多通道多网关 + 跨会话连续性 + 显式技能授权」三方向倾斜。

---

## 7. 用户反馈摘要

从 Issues 与 PR 描述中提炼：

- **痛点 1：WSL/Headless 用户被登录页卡住**  
  [#6150](https://github.com/HKUDS/nanobot/pull/6150) — 自动开浏览器失败时，新用户面对登录页但没有自己设置的密码。维护者已通过打印完整带凭据链接缓解。

- **痛点 2：Provider 配置"删不掉"**  
  [#6148](https://github.com/HKUDS/nanobot/pull/6148) — 删除 Provider 连接后，重启应用会"死而复生"为空白默认项，反映**配置持久化语义不清**。

- **痛点 3：DeepSeek `reasoning_effort="minimal"` 行为反直觉**  
  [#6122](https://github.com/HKUDS/nanobot/issues/6122) — 同时发送 `reasoning_effort="minimal"` 与 `thinking.type="disabled"` 的矛盾参数，**该 Issue 已关闭**，说明修复已落地。

- **痛点 4：`<tool_call>` 文本误触发**  
  [#6147](https://github.com/HKUDS/nanobot/pull/6147) — 用户在文档/示例中写明 tool_call 格式，结果反被模型当成指令执行。**对安全语义边界的诉求强烈。**

- **使用场景**：Feishu 群里多个 Bot 协作（#5930）、Skill 需限制为手动调用以避免副作用（#5405）、多 Bot 部署在自托管 Telegram Bot API（#4919）。

---

## 8. 待处理积压 ⚠️

部分重要 Issue/PR 长期未合，建议维护者关注：

| Issue/PR | 创建时间 | 状态 | 备注 |
|---|---|---|---|
| [#5405](https://github.com/HKUDS/nanobot/pull/5405) — Skills manual-only invocation | 2026-08-16 | OPEN 56 天 | 解决"副作用技能被模型误触发"，P2，标记 conflict |
| [#5537](https://github.com/HKUDS/nanobot/pull/5537) — `my` 工具 session focus 持久化 | 2026-08-25 | OPEN 47 天 | 修复 #3292，P2，标记 conflict |
| [#5727](https://github.com/HKUDS/nanobot/pull/5727) — WebUI headless 登录 secret 文档 | 2026-09-10 | OPEN 31 天 | 仅文档优化，P2，标记 conflict |
| [#5776](https://github.com/HKUDS/nanobot/pull/5776) — ProviderPicker 搜索 | 2026-09-15 | OPEN 26 天 | 提升多 Provider 用户体验，P2，标记 conflict |
| [#5915](https://github.com/HKUDS/nanobot/pull/5915) — Cheaper Inference Provider | 2026-09-25 | OPEN 16 天 | P2 new-provider |
| [#5930](https://github.com/HKUDS/nanobot/pull/5930) — Feishu 群聊 bot-to-bot | 2026-09-26 | OPEN 15 天 | P2 channel |

**提醒**：以上 6 个 PR 均超过 2 周以上未合并，多数被自动标签为 `conflict`，建议在下次发版前集中 rebase 处理，避免合并成本指数级增长。

---

> 📊 **项目健康度评估**：⭐⭐⭐⭐☆（4/5）  
> 提交活跃度高、PR 多线推进、Issue 响应快、Bug 修复链路完整。扣分点：29 个待合并 PR 与多个长期未合项目存在积压风险，Release Pipeline 仍在重构中。

</details>

<details>
<summary><strong>Hermes Agent</strong> — <a href="https://github.com/nousresearch/hermes-agent">nousresearch/hermes-agent</a></summary>

# Hermes Agent 项目动态日报

**日期：2026-10-11**
**数据来源：[NousResearch/hermes-agent](https://github.com/nousresearch/hermes-agent)**

---

## 1. 今日速览

Hermes Agent 仓库今日保持高强度迭代节奏，过去 24 小时共更新 **50 条 Issues**（42 条活跃 / 8 条已关闭）和 **50 条 PRs**（42 条待合并 / 8 条已合并或关闭），但**无新版本发布**。议题集中在三个高频故障域：上下文压缩（Context Compression）的标记泄漏与参数错误、桌面端（Desktop）消息重复渲染、以及 Windows 平台的兼容性问题。安全侧出现 1 条 P1 级别的高危议题（[#133856](https://github.com/NousResearch/hermes-agent/issues/133856) 关于 `sk-ant-usr-` 类型 API Key 被误判为 OAuth）。整体活跃度评级：**中高**，社区反馈活跃但积压较多长期未响应议题。

---

## 2. 版本发布

**今日无新版本发布。** 上一可推断版本为桌面端 `v0.21.5+4972.g7239625`（见 [#129731](https://github.com/NousResearch/hermes-agent/issues/129731)）。

---

## 3. 项目进展

今日关闭的 8 条 Issues 与 8 条 PR 反映出多个核心模块向前推进：

- **[#56004](https://github.com/NousResearch/hermes-agent/issues/56004)（已关闭）**：OpenAI 兼容端点上推理模型在工具调用之间丢失推理内容的问题得到修复，影响 Qwen/思考类模型，长会话稳定性提升。
- **[#122303](https://github.com/NousResearch/hermes-agent/issues/122303)（已关闭）**：Kimi 模型经 OpenRouter 中转的推理连续性问题已修复，补齐 `_REASONING_ECHO_RULES` 模型名回退。
- **[#136340](https://github.com/NousResearch/hermes-agent/issues/136340)（已关闭）**：自动续跑后 Goal 状态错误暂停的回归被确认并关闭。
- **[#122190](https://github.com/NousResearch/hermes-agent/issues/122190)（已关闭，Windows）**：Windows 桌面端切换 profile 时 session 被静默 `hidden=1` 的问题处理完成。
- **PR [#59562](https://github.com/NousResearch/hermes-agent/pull/59562) 等 Telegram 网关重排队、FIFO 修复**进入合并候选列表。
- **[#136414](https://github.com/NousResearch/hermes-agent/pull/136414)**：网关重投递回复现按 `created_at` 顺序冲刷，可观察调度时延。

总体看，项目在「推理保真 + 跨平台消息可靠性」两条主线稳步推进。

---

## 4. 社区热点

按评论数排序，今日讨论最热的议题：

| 排名 | 编号 | 主题 | 评论数 | 链接 |
|---|---|---|---|---|
| 1 | [#131859](https://github.com/NousResearch/hermes-agent/issues/131859) | **PR 创建权限被拒**（仅影响某账号，影响开源贡献流程） | 25 | [🔗](https://github.com/NousResearch/hermes-agent/issues/131859) |
| 2 | [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) | terminal 工具后台提示引用了不存在的工具名 | 17 | [🔗](https://github.com/NousResearch/hermes-agent/issues/124583) |
| 3 | [#103410](https://github.com/NousResearch/hermes-agent/issues/103410) | TUI 上下文压缩在外部 LCM 引擎上热重载崩溃 | 13 | [🔗](https://github.com/NousResearch/hermes-agent/issues/103410) |
| 4 | [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) | Desktop：助手回复在 UI 中渲染两次（DB 仅 1 行） | 12 | [🔗](https://github.com/NousResearch/hermes-agent/issues/129993) |
| 5 | [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | 跨平台会话组：选择性 session 键重映射（Feature） | 10 | [🔗](https://github.com/NousResearch/hermes-agent/issues/79198) |

**背后诉求分析**：
- 开源贡献者反馈（[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)）：权限策略单账号误判直接影响 PR 提交链路，社区期待更透明的解释。
- 工具一致性（[#124583](https://github.com/NousResearch/hermes-agent/issues/124583)、[#123345](https://github.com/NousResearch/hermes-agent/issues/123345)）：用户按 UI 提示操作时撞墙，期待"提示 = 行为"的强一致性。
- 跨平台会话连续性（[#79198](https://github.com/NousResearch/hermes-agent/issues/79198)）：用户在不同 IM（Discord/Telegram）间切换失去上下文，是高频痛点。

---

## 5. Bug 与稳定性

按严重程度排序：

### 🔴 P1（高危，需优先处理）

- **[#133856](https://github.com/NousResearch/hermes-agent/issues/133856)** Anthropic `sk-ant-usr-` 前缀 API Key 被误判为 OAuth 凭据 → 计费/认证路径错误。**目前未见修复 PR**。该类 token 被 `_is_oauth_token()` 在 [agent/anthropic_credentials.py](https://github.com/NousResearch/hermes-agent) 中错误分类，影响 Anthropic 计费安全边界。

### 🟠 P2（次高优先级）

- **[#131859](https://github.com/NousResearch/hermes-agent/issues/131859)** `gh pr create` 因 `CreatePullRequest` 权限被拒（仅对单账号）。
- **[#127260](https://github.com/NousResearch/hermes-agent/issues/127260)** 工具调用参数在上下文压缩中被破坏（`U+27EA` 截断标记 + 词符注入 + Windows git-bash BOM 不稳定）。
- **[#136349](https://github.com/NousResearch/hermes-agent/issues/136349)** 压缩标记泄漏到 agent 写入的文件中（数据损坏）。
- **[#136350](https://github.com/NousResearch/hermes-agent/issues/136350)** `compression.threshold_tokens` 解析为 256000 而文档默认值是 `null`。
- **[#54572](https://github.com/NousResearch/hermes-agent/issues/54572)** `patch` 工具在 `replace` 模式下当 `old_string` 非精确匹配时改错区域。
- **[#94928](https://github.com/NousResearch/hermes-agent/issues/94928)** Desktop：`terminal`/`read_file` 在管道 fd 超过 FD_SETSIZE 后返回空输出。
- **[#119190](https://github.com/NousResearch/hermes-agent/issues/119190)** 图像回合把注入的 memory / `pre_llm_call` 上下文当成用户原话显示。
- **[#108967](https://github.com/NousResearch/hermes-agent/issues/108967)** `GET /v1/skills` 总返回 HTTP 500。
- **[#136412](https://github.com/NousResearch/hermes-agent/issues/136412)** Telegram 网关：每路径连接预算 ≥ 全发送超时 → 静默丢消息。
- **[#136390](https://github.com/NousResearch/hermes-agent/issues/136390)** Windows：调度任务登录自启在 pm/Python 3.14 下静默失败。
- **[#136335](https://github.com/NousResearch/hermes-agent/issues/136335)** / [#129731](https://github.com/NousResearch/hermes-agent/issues/129731) / [#129993](https://github.com/NousResearch/hermes-agent/issues/129993) Desktop：长回合后助手消息重复渲染（inflight journal 重折叠问题）。
- **[#123345](https://github.com/NousResearch/hermes-agent/issues/123345)** `terminal` 工具 `notify=true` 被校验器拒收。

### 🟡 P3 / 信息提示

- **[#124010](https://github.com/NousResearch/hermes-agent/issues/124010)** Photon 侧车：quiet 专用 IM 链每 10 分钟被误重启。
- **[#120016](https://github.com/NousResearch/hermes-agent/issues/120016)** Desktop 状态栏 commit-behind 数值为 24h 缓存伪实时。
- **[#136413](https://github.com/NousResearch/hermes-agent/issues/136413)** `opencode-go` slug 以 `-free` 结尾的模型被错误路由到匿名 Zen 端点。
- **[#122190](https://github.com/NousResearch/hermes-agent/issues/122190)** 已关闭（Windows session 隐藏）。

**配套修复 PR（已进入合并候选）**：
- [#136414](https://github.com/NousResearch/hermes-agent/pull/136414) 重投递回复时序修复
- [#136416](https://github.com/NousResearch/hermes-agent/pull/136416) one-shot 保留 `x-opencode-session`
- [#136419](https://github.com/NousResearch/hermes-agent/pull/136419) 共享指标工具词汇表
- [#59562](https://github.com/NousResearch/hermes-agent/pull/59562) Telegram FIFO 队列照片中间回合
- [#107791](https://github.com/NousResearch/hermes-agent/pull/107791) Docker 容器复用绑定到运行时姿态

---

## 6. 功能请求与路线图信号

### 较受欢迎 / 路线图候选

| Feature | 编号 | 现有 PR | 信号解读 |
|---|---|---|---|
| **跨平台 Session 组（选择性键重映射）** | [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | 暂无 | 高价值方向，能够让 Discord/Telegram 用户获得跨平台记忆连续性 |
| **`MEMORY.md` / `USER.md` 写时预算 + 验收管线** | [#135039](https://github.com/NousResearch/hermes-agent/issues/135039) | 暂无 | 控制长期上下文成本的关键能力 |
| **`/learn` 记录脱敏工作流** | — | [#112393](https://github.com/NousResearch/hermes-agent/pull/112393) | 已经合并候选，将带来更可用的会话回顾 |
| **Desktop 插件内置动作（`ctx.runAction`）** | — | [#136417](https://github.com/NousResearch/hermes-agent/pull/136417) | 拓展插件生态系统 |
| **Discord 入站 reaction 触发** | — | [#95749](https://github.com/NousResearch/hermes-agent/pull/95749) / [#136418](https://github.com/NousResearch/hermes-agent/pull/136418) | 增强 Discord 体验，预计很快合并 |
| **Discord 语音加入/退出工具** | — | [#136420](https://github.com/NousResearch/hermes-agent/pull/136420) | 语音代理体验补齐 |
| **Session 关闭（不删除）** | [#75489](https://github.com/NousResearch/hermes-agent/issues/75489) | 暂无 | 用户期待基础会话生命周期管理 |

### 有争议 / 待决策

- **[#59764](https://github.com/NousResearch/hermes-agent/issues/59764)** 调度契约双重不匹配（`goal_mode` 拒收部分 `kanban_block`、`card.skills` 静默丢弃）—— 需要先决定 Worker Profile 是否承载扩展能力。

---

## 7. 用户反馈摘要

1. **新用户上手阶段：终端提示不一致** —— [#124583](https://github.com/NousResearch/hermes-agent/issues/124583) 与 [#123345](https://github.com/NousResearch/hermes-agent/issues/123345) 表明 **agent 给出的"自然语言提示"和真实工具名称/参数不一致**，导致新用户按提示调用即出错。这是首次接触 Hermes 的用户最大的挫败源。
2. **长会话体验：上下文压缩过激 + 标记泄漏** —— 多个 [#127260](https://github.com/NousResearch/hermes-agent/issues/127260) / [#136349](https://github.com/NousResearch/hermes-agent/issues/136349) / [#136350](https://github.com/NousResearch/hermes-agent/issues/136350) 反馈压缩过频（77 分钟 7–8 次）、标记污染写入输出、`threshold_tokens` 默认值文档与实际不一致。用户希望获得"可预测、可关闭、可观察"的压缩行为。
3. **跨设备：Desktop 重复渲染是高频痛点** —— 三条独立报告（[#129993](https://github.com/NousResearch/hermes-agent/issues/129993) / [#129731](https://github.com/NousResearch/hermes-agent/issues/129731) / [#136335](https://github.com/NousResearch/hermes-agent/issues/136335)）确认这是 Desktop 用户最直观的稳定性问题，且"DB 内单行但 UI 双泡"让用户怀疑数据一致性。
4. **平台接纳：Windows 是负担最大的平台** —— 调度任务自启 ([#136390](https://github.com/NousResearch/hermes-agent/issues/136390))、git-bash BOM ([#127260](https://github.com/NousResearch/hermes-agent/issues/127260))、session hidden=1（[#122190](https://github.com/NousResearch/hermes-agent/issues/122190) 已闭）三条集中证据建议维护者优先一次 Windows 兼容性 sprint。
5. **正向信号** —— ChatCompletions 中断时部分回复持久化已通过 PR [#136191](https://github.com/NousResearch/hermes-agent/pull/136191) 修复方向上；[#136425](https://github.com/NousResearch/hermes-agent/pull/136425) 修复了 Alibaba guardrail 4 分钟重试循环显著降低用户等待时间。

---

## 8. 待处理积压

按"创建日期→更新日期"时长排序，需要维护者主动关注：

| Issue | 标题 | 创建日期 | 关注点 |
|---|---|---|---|
| [#54572](https://github.com/NousResearch/hermes-agent/issues/54572) | `patch` 工具 `replace` 模式匹配错误区域 | 2026-06-29 | 修复风险高，影响核心工具可信度 |
| [#59764](https://github.com/NousResearch/hermes-agent/issues/59764) | 调度契约双重不匹配 | 2026-07-06 | 需要决策（needs-decision） |
| [#75489](https://github.com/NousResearch/hermes-agent/issues/75489) | 无法在不删除的情况下关闭 session | 2026-07-31 | 用户呼声高，被关闭会话挤占并发槽 |
| [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) | 跨平台 Session 组 | 2026-08-05 | 路线图级需求，需要 RFC 决策 |
| [#68957](https://github.com/NousResearch/hermes-agent/pull/68957) | PR：`hermes mcp add --args … --env` 静默丢变量 | 自 2026-07-21 | CLI 易用性严重问题，PR 待合并 |
| [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) | Anthropic `sk-ant-usr-` 误判 OAuth | 2026-10-06 | **P1 安全**，最优先响应 |

**建议**：维护者本周内回复 [#54572](https://github.com/NousResearch/hermes-agent/issues/54572)、[#59764](https://github.com/NousResearch/hermes-agent/issues/59764) 与 [#79198](https://github.com/NousResearch/hermes-agent/issues/79198) 三条卡点，否则风险继续放大；同时 P1 [#133856](https://github.com/NousResearch/hermes-agent/issues/133856) 应作为下一发布的必修项。

---

## 总体健康度评估

- **活跃度**：⭐⭐⭐⭐（高）
- **稳定性**：⭐⭐☆☆（下滑中，受上下文压缩副作用影响）
- **安全响应**：⭐⭐⭐⭐（社区主动上报高危问题）
- **平台覆盖**：⭐⭐☆☆（Windows 体验拖累）
- **社区响应**：⭐⭐⭐（积压较多长寿命议题）

**总结**：项目仍在高频迭代，但**上下文压缩**与 **Desktop 重复渲染**已成为当前最影响用户信任的两类问题，建议作为下一 patch

</details>

<details>
<summary><strong>PicoClaw</strong> — <a href="https://github.com/sipeed/picoclaw">sipeed/picoclaw</a></summary>

# PicoClaw 项目日报

**日期：2026-10-11**
**项目：sipeed/picoclaw**

---

## 1. 今日速览

PicoClaw 项目在过去 24 小时内整体处于**低活跃度**状态：仅 1 条 Issue 被更新（但实际为存量 Issue 互动），2 条 PR 处于关闭状态，无新版本发布。从数据信号看，社区贡献节奏放缓——2 条 PR 均以关闭收尾且无正向合并（其中 1 条因 stale 被系统关闭），同时长期未解决的 Bug 仍处于 Open 状态，提示维护响应链路需要加强关注。项目整体推进缓慢，未观察到显著的功能落地里程碑。

---

## 2. 版本发布

**今日无新版本发布。**

近期可参考的版本仍是社区 Issue 中提及的 `0.3.1`，建议关注后续是否会有补丁版本针对 Web UI 性能问题（详见第 5 节）发布。

---

## 3. 项目进展

今日无 PR 被合并。今日关闭/动态的 PR 情况如下：

| PR | 标题 | 作者 | 状态 | 影响 |
|---|---|---|---|---|
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | feat(provider): add Cheaper Inference provider | aiapienthusiast | CLOSED (stale) | 未合并。提议添加 Cheaper Inference 作为 OpenAI 兼容 LLM 网关，因长时间无活动被系统关闭。 |
| [#3421](https://github.com/sipeed/picoclaw/pull/3421) | feat(apiserve): serve PicoClaw agents over HTTP for internal services | hms58 | CLOSED | 未合并。提议新增独立 HTTP 服务以支持内部服务通过单一 API 调用驱动 Agent，但未进入合并流程。 |

**整体进展评估：** 今日项目净推进量为 **0**。两条 PR 关闭均未带来代码合入，#3421（HTTP Agent 服务化）若被合并可显著提升 PicoClaw 的可嵌入性，建议作者重新提交或与维护者沟通后续方向。

---

## 4. 社区热点

今日最活跃的讨论集中在长期未解决的 Bug Issue 上：

- **[#3281](https://github.com/sipeed/picoclaw/issues/3281) – Web UI chat input is very laggy when history has a little bit long**（xpader 提出）
  - **评论数：18** ｜ **👍：2**
  - 创建于 2026-07-21，至今已逾 2.5 个月，最后更新 2026-10-10
  - 已被标记为 `[stale]`

**热点诉求分析：** 这是一个用户感知强烈的体验类 Bug——聊天历史稍长后，输入框即出现明显卡顿。18 条评论表明社区持续有用户遇到/跟评此问题，👍 数为 2（社区认可但反响不算激烈）。由于没有 PR 提交 fix，且 Issue 已被自动标记 stale，反映出**前端性能问题未进入修复流程**，是当前社区最迫切的痛点。

---

## 5. Bug 与稳定性

| 严重程度 | Issue | 标题 | 状态 | 是否有 Fix PR |
|---|---|---|---|---|
| 🟠 中 | [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Web UI 输入框在历史稍长时严重卡顿 | OPEN, `[stale]` | ❌ 无 |

**分析：** 该 Bug 长期开放未被处理，标记 stale 后仍有用户互动（最近更新 2026-10-10），说明问题持续存在且未消解。考虑到 PicoClaw Web 是官方推荐的交互渠道（Issue 中明确标注 `Channels: PicoClaw Web`），输入卡顿直接影响核心用户体验，建议维护者尽快 triage 并给出修复时间表或临时 workaround。

---

## 6. 功能请求与路线图信号

从今日关闭/活跃的 PR 中可提取以下功能方向信号：

1. **多 LLM 提供商扩展**（[#3393](https://github.com/sipeed/picoclaw/pull/3393)）
   - 诉求：集成 Cheaper Inference 等低成本 OpenAI 兼容网关，降低推理成本 15–60%。
   - 现状：PR 已 stale 关闭，作者社区动力不足。
   - 路线图可能性：⭐⭐ 中等。低成本推理仍是用户刚需，但 PicoClaw 当前未在路线图中明确表态，可能需要维护者主动邀请或 fork 后重提。

2. **HTTP API 服务化**（[#3421](https://github.com/sipeed/picoclaw/pull/3421)）
   - 诉求：在不动现有 channel/gateway/config 的前提下，新增 `/v1/messages` 等 HTTP 端点，支持内部服务通过 Bearer Token 一键调用 Agent。
   - 现状：刚关闭，无 merge。
   - 路线图可能性：⭐⭐⭐ 较高。HTTP 服务化是 Agent 框架走向生产化的标准路径，与"嵌入式 AI 助手"的定位高度契合，建议跟进作者是否愿意按 review 意见调整后重新提交。

---

## 7. 用户反馈摘要

提炼自活跃 Issue 与 PR 评论：

- **🔴 痛点集中**：Web UI 在会话历史变长后输入卡顿（[#3281](https://github.com/sipeed/picoclaw/issues/3281)），18 条评论表明这是高频再现的问题，而非个例——可能与前端渲染/虚拟列表/状态更新策略相关。
- **🟡 集成诉求**：开发者希望将 PicoClaw Agent 作为内部 HTTP 服务被调用（[#3421](https://github.com/sipeed/picoclaw/pull/3421)），体现从"聊天机器人"向"可编程 Agent 后端"的演进需求。
- **🟢 成本诉求**：社区希望接入 Cheaper Inference 等廉价推理网关（[#3393](https://github.com/sipeed/picoclaw/pull/3393)），反映对运行成本的敏感。
- **⚪ 满意度信号缺失**：今日数据中未观察到明确的功能表扬或新采用者反馈，需进一步结合 Discussions/Star 趋势综合判断。

---

## 8. 待处理积压

提醒维护者重点关注以下长期未响应项：

| 编号 | 类型 | 标题 | 创建时间 | 当前状态 | 风险 |
|---|---|---|---|---|---|
| [#3281](https://github.com/sipeed/picoclaw/issues/3281) | Bug | Web UI 输入卡顿 | 2026-07-21（约 82 天） | OPEN, stale | 🟠 用户体验核心问题，长期未 triage |
| [#3393](https://github.com/sipeed/picoclaw/pull/3393) | Feature PR | Cheaper Inference 提供商 | 2026-09-25 | CLOSED (stale) | 🟡 社区贡献流失，无人接手 |

**维护建议：**
1. 对 #3281 主动 review 并指派，确认是否为前端性能回归，必要时给出 milestone 计划。
2. 对 #3393、#3421 两条 PR 的作者表达感谢并说明后续走向（reopen/reject/roadmap），避免贡献者沉默流失。
3. 当前 PR 合并速率与 Issue 响应周期显示项目维护带宽可能受限，建议在 README 中明示维护状态（如 "looking for contributors"），以管理社区预期并吸引参与。

</details>

<details>
<summary><strong>NanoClaw</strong> — <a href="https://github.com/qwibitai/nanoclaw">qwibitai/nanoclaw</a></summary>

# NanoClaw 项目日报 · 2026-10-11

> 数据来源：github.com/qwibitai/nanoclaw ｜ 采样窗口：过去 24 小时

---

## 1. 今日速览

NanoClaw 过去 24 小时内 **无 Issue 活动**（新开/活跃/关闭均为 0），但 PR 端持续有节奏地推进：**6 条 PR 被更新，其中 1 条已关闭（版本依赖升级），5 条仍处于 Open 状态**。整体而言，项目处于"无新需求涌入、清理存量与依赖更新"的稳态维护期，无新版本发布。今日的实质性进展仅来自一条依赖升级 PR 的合并，其余 5 条 Open PR 全部为历史修改记录更新，并未带来新合并。社区活跃度偏冷，但代码健康度良好。

---

## 2. 版本发布

无新版本发布。最新依赖升级动作见下文 PR #4069。

---

## 3. 项目进展

今日唯一已完成合并/关闭动作为：

- **PR #4069**: `chore(container): bump Claude Code to 2.1.296, the Agent SDK to 0.3.296 and Codex to 0.162.1`
  - 作者：`gavrielc` ｜ 时间：2026-10-10 创建并关闭
  - 标签集合明确标 `[core-team]`，可视为维护方主导变更
  - 实质内容：将 agent 容器栈迁移至最新版本，最关键的行为变更是 **Claude Haiku 5.5 成为 Claude Code 的默认 Haiku 模型**
  - 影响面：跨 `area/agent-runner`、`area/containers`、`area/providers`、`area/skills`，是全链路依赖升级
  - 状态：CLOSED（推断为已合并或主动撤回）
  - 链接：[nanocoai/nanoclaw #4069](https://github.com/qwibitai/nanoclaw/pull/4069)

> 其他 5 条 Open PR 虽仍在更新，但均未在 24h 内跨过合并门槛，对外信号仍属"在途"而非"落地"。

---

## 4. 社区热点

由于 Issues 在过去 24h 内 **完全无新增/无评论/无关闭**，无法以评论数或反应数反映社区讨论热度。以"关注度 × 时效"维度来看，**PR #4057 是今天最具讨论价值的条目**：它既在 2026-10-11 当日有更新（最近一次活动时间 < 24h），又涉及容器编排的关键稳定性路径，是核心维护者最可能优先处理的对象。

| 排名 | 条目 | 讨论热度依据 |
|----|------|---------|
| 1 | PR #4057（DockerHandle.stop 等待 --rm 自动清理完成）| 最新更新时间 2026-10-11，时效性最强 |
| 2 | PR #3446 / #3450（自动 sender gate / Telegram sender_scope）| 长期未合并的安全/会话领域 PR，社区引用度高 |

> ⚠️ 本日所有 PR 的 `comment_count` 与 `reactions` 字段均为 `undefined`，建议下次数据抓取确认这两个字段是否被正确采集。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P1 — 容器清理时序导致"误报失败"（影响 stop 调用可观测性）
- **PR #4057**: `fix(docker-driver): wait out in-flight --rm auto-removal on stop`
  - 问题：使用 `--rm` 启动的 agent 容器在 `stop()` 时，Docker auto-removal 与 `docker rm --force` 存在竞态，daemon 会拒绝，导致 `DockerHandle.stop()` 上报"拆解失败"
  - Fix：在 stop 流程中等待 in-flight 的 --rm 清理完成
  - 状态：Open，未合并
  - 链接：[#4057](https://github.com/qwibitai/nanoclaw/pull/4057)

### 🟠 P2 — 安装/升级路径缺失 symlink
- **PR #3275**: `fix(setup): install ncl symlink on upgrade path (#2355)`
  - 问题：`~/.local/bin/ncl` 仅在 fresh install 时创建，通过 `/update-nanoclaw` 升级后会丢失符号链接
  - 历史包袱：先前 PR #2356 因 diff 异常被维护者关闭，本 PR 为 clean re-attempt
  - Fix：在 upgrade 路径上同步刷新 `ncl` symlink
  - 状态：Open
  - 链接：[#3275](https://github.com/qwibitai/nanoclaw/pull/3275)

### 🟠 P2 — 附件暂存路径判定误伤 Google Chat 消息 ID
- **PR #3276**: `Sanitize path-separator message IDs for attachment staging (#3206)`
  - 问题：Google Chat 的 message ID 形如 `spaces/<space>/messages/<id>`，但 `isSafeAttachmentName` 直接拒绝任何含 `/` 或 `\` 的值，导致所有 Google Chat 附件完全无法暂存
  - Fix：对 message ID 做路径分隔符规范化后再校验
  - 状态：Open
  - 链接：[#3276](https://github.com/qwibitai/nanoclaw/pull/3276)

### 🟡 P3 — 自动发送者误触发人工审批门禁
- **PR #3446**: `Auto-drop automated senders in the unknown-sender gate (#3235)`
  - 问题：Discord `author.bot`/`webhook_id`、Slack `bot_id`、Telegram `from.is_bot` 被当成人类走 `request_approval`，但发送方根本看不到也无法点击审批卡片
  - Fix：在 unknown-sender gate 上识别自动化发送方并直接 deny（非持久）
  - 状态：Open
  - 链接：[#3446](https://github.com/qwibitai/nanoclaw/pull/3446)

### 🟡 P3 — Telegram 频道广播身份被错误识别为陌生人
- **PR #3450**: `Telegram: trust channel's own identity in sender_scope gate`
  - 问题：Telegram 频道广播帖匿名，Bot API 通过 `sender_chat` 回填为频道本身，被错误打入 unknown-sender 审批路径
  - Fix：信任来自 `chat:<chatId>` 的发送身份
  - 状态：Open
  - 链接：[#3450](https://github.com/qwibitai/nanoclaw/pull/3450)

---

## 6. 功能请求与路线图信号

由于今日 **无新 Feature 类 Issue**，路线图信号主要来自 Open PR 中尚未被合并的功能性变更：

- **#4069 模型策略层**（已闭）：明确将 Claude Haiku 5.5 推到默认 Haiku 位 —— 这是面向成本/质量权衡的一次主动调整，未来若继续与 Anthropic 模型家族耦合，Haiku 角色定位很可能成为下一个迭代的热点。
- **#3446 / #3450 安全护栏精细化**：用差异化 deny 策略替换"一刀切审批"。这两条都试图把'是 bot / 是频道'从陌生发送者中剔除，**反映出路线图信号：审批系统正从粗放黑名单向身份感知分流演进**。
- **#4057 容器可观测性**：在 stop 路径上尊重 Docker daemon 的清理节奏，是少数以"少报错"为目标的方向，**符合稳态成熟阶段的路线图偏好**。

> 综合判断：下一版本（若基于当前 PR 池整合）大概率是 **小版本号迭代**（依赖升级 + Bug 修复合集），而非引入新 capability。功能请求信号偏弱。

---

## 7. 用户反馈摘要

> ⚠️ 数据集未提供任何 Issue 评论文本，因此本节只能从 PR 描述中"用户/维护者面临的痛点"侧来还原。

- **运维侧痛点**：PR #4057 / #3275 / #3276 均反映出用户在与"未文档化的副作用"作斗争——清理竞态、升级后 symlink 丢失、跨平台消息 ID 格式假设。这些不是孤立 bug，而是 **CLI/install/integration 这类基础设施层的覆盖面长期不足**。
- **集成侧痛点**：Google Chat（Telegram #3450、Bot 身份 #3446）持续暴露适配器对各上游平台身份模型的简化假设——尤其对于多频道桥接用户而言，这是真实工作流阻塞。
- **正面信号**：从作者署名频次看，`wakqasahmed` 一人在 8 月连续提交 3 条相关修复（#3446/#3275/#3276/#3450），说明社区中至少有一名长期贡献者持续投入安全/会话领域，可视为维护者群体外的稳定力量。

---

## 8. 待处理积压

按"创建距今时长"排序，最值得维护者优先 review 的长期悬而未决项：

| PR | 标题 | 创建日 | 已挂时长 | 领域 |
|----|------|--------|---------|------|
| [#3275](https://github.com/qwibitai/nanoclaw/pull/3275) | install `ncl` symlink on upgrade path | 2026-08-16 | ~56 天 | setup-installation / skills |
| [#3276](https://github.com/qwibitai/nanoclaw/pull/3276) | Sanitize path-separator message IDs | 2026-08-16 | ~56 天 | core / security / sessions |
| [#3446](https://github.com/qwibitai/nanoclaw/pull/3446) | Auto-drop automated senders | 2026-08-22 | ~50 天 | channels / core / security |
| [#3450](https://github.com/qwibitai/nanoclaw/pull/3450) | Telegram trust channel's own identity | 2026-08-22 | ~50 天 | security |

🔔 **建议**：4 条 PR 的 issue tracker 关联（#2355、#3206、#3235、#2991）都已超过 50 天未见合并动作，对一个核心团队的 review 排队来说偏长。建议维护者下一次 triage 会议优先评估 **#3275 + #3276** 这对"低风险、低争议"组合，作为下一次小版本发布的稳定候选。

---

### 备注
- 本日报以 24h 为窗口，但 Open PR 的实际"动量"取决于创建/更新/合并时间三者的差值，请结合上述"已挂时长"自行判断优先级。
- 仓库名 `qwibitai/nanoclaw` 与 PR 链接中 `nanocoai/nanoclaw` 出现差异，建议维护者确认是否为 fork 镜像或数据抓取时的命名解析问题。

</details>

<details>
<summary><strong>NullClaw</strong> — <a href="https://github.com/nullclaw/nullclaw">nullclaw/nullclaw</a></summary>

# NullClaw 项目日报

**日期**：2026-10-11
**数据周期**：过去 24 小时
**项目地址**：[github.com/nullclaw/nullclaw](https://github.com/nullclaw/nullclaw)

---

## 1. 今日速览

NullClaw 今日活跃度较低，但围绕一个核心议题——**长会话历史无界增长问题**——形成了清晰的"问题定位 → 修复 PR → 后续跟进"的技术闭环。24 小时内仅产生 2 条新 Issue 和 1 条待合并 PR，无新版本发布，整体表现为**静默但有方向性**的维护状态。本日所有动态均来自同一维护者 `vernonstinebaker`，社区外部参与度近乎为零（所有条目 👍 均为 0）。

---

## 2. 版本发布

无新版本发布。版本发布通道当日保持静默。

---

## 3. 项目进展

**今日合并/关闭的重要 PR：无**

**今日关键推进（待合并）**：

- **PR [#1054](https://github.com/nullclaw/nullclaw/pull/1054) — `fix(session): bound restored history to max_history_messages`**（OPEN，待合并）
  - 内容：将 `session` 从存储中恢复时，限制仅加载最近 `max_history_messages` 条历史消息。
  - 验证质量：`zig build test --summary all` 显示 **7491/7500 通过（9 个跳过），0 失败，0 内存泄漏**。
  - 推进意义：直接回应 Issue [#1053](https://github.com/nullclaw/nullclaw/issues/1053) 中报告的"会话上下文无界增长"问题，是首个落地的代码层修复。
  - 局限性：作者在 PR Notes 中已明确指出，`persistTurn` 仍逐轮追加 user+assistant，未解决**持久化层**无界问题，#1055 作为延续被开立。

整体而言，项目今天在"会话生命周期管理"这一基础设施层面**向前迈出了第一步**，但仅是局部修复，尚未达成闭环。

---

## 4. 社区热点

今日讨论最集中的议题集中于一条主线——**会话历史（session history）管理**：

- **[Issue #1053](https://github.com/nullclaw/nullclaw/issues/1053)** — Session history is reloaded unbounded; auto-compaction cannot bound per-request context
  - 评论：2 条（当日活跃度最高）
  - 核心诉求：`agent.history` 经 `trimHistory`/`auto-compaction` 缩减后，结果**从未回写**到会话存储；`max_history_messages` 在持久化层失效，每次恢复都会重载完整历史。
  - 性质：性能/资源稳定性问题，属于长期会话使用场景下的**可观测性 bug**。

- **[Issue #1055](https://github.com/nullclaw/nullclaw/issues/1055)** — memory: bound the persisted session transcript（compaction write-back with a sequence guard）
  - 紧随 #1053 / #1054，被定位为"持久化侧"的延续修复，致谢社区成员 `@O96a`。

**诉求分析**：用户希望长会话（long-lived session）能在磁盘层面真正做到上下文有界——而非仅在内存中做表面裁剪。这反映出对**生产可用性**的诉求，暗示用户开始将 NullClaw 部署在更长生命周期的场景中（如多轮 agent、个人助理）。

---

## 5. Bug 与稳定性

| 严重程度 | 编号 | 简述 | 是否有 fix PR |
|---|---|---|---|
| 🟠 中-高 | [#1053](https://github.com/nullclaw/nullclaw/issues/1053) | 会话恢复时无界加载历史 → 单次请求上下文膨胀，潜在 OOM 风险 | ✅ PR #1054 已部分覆盖（仅恢复侧） |
| 🟠 中 | [#1055](https://github.com/nullclaw/nullclaw/issues/1055) | 持久化层会话记录无界增长（compaction 结果丢弃） | ❌ 尚无 PR |

**评估**：属于**资源耗尽类风险**，在长会话或多并发场景下可能放大。PR #1054 已对恢复侧做了硬性限制，缓解了最坏情况；持久化侧（#1055）目前仍是敞口。

---

## 6. 功能请求与路线图信号

严格意义上的"功能请求"本日**未出现新条目**。但从 #1053 / #1055 的措辞可推断出隐含路线图信号：

- **会话压缩回写（compaction write-back）**：将内存中的 `trimHistory`/auto-compaction 结果持久化到会话存储，而非每轮原样追加。
- **序列号守卫（sequence guard）**：防止压缩回写与并发写入产生顺序错乱。
- **会话上限双层保护**：restore 端（已有）+ store 端（待做）。

结合 PR #1054 已被提交流程判断，#1055 所述的"store 端有界化"极有可能成为**下一个版本的候选 PR**，建议维护者将其纳入同一里程碑或连续编号 PR。

---

## 7. 用户反馈摘要

由于本日所有更新均来自同一提交者，**缺乏外部用户评论**。可提炼的信号有限：

- **痛点**：
  - "auto-compaction 看起来在工作，但其实没用"——表面有机制，实际无效，反映出**配置项与实现脱节**的信任损耗风险。
  - "长会话跑久了，token/内存失控"——典型生产场景下的资源焦虑。
- **满意信号**：PR #1054 测试结果干净（**0 失败，0 泄漏**），表明该作者对自测质量有信心，可作为后续 PR 模板的正面示范。
- **缺失反馈维度**：尚无外部用户对 UI、易用性、文档的反馈，无法判断产品侧满意度。

---

## 8. 待处理积压

按当日数据，仅 1 条待合并 PR、2 条 OPEN Issues，积压量小但需关注：

| 类型 | 编号 | 标题 | 创建日 | 风险提示 |
|---|---|---|---|---|
| PR | [#1054](https://github.com/nullclaw/nullclaw/pull/1054) | bound restored history to `max_history_messages` | 2026-10-10 | 🟢 验证完整，建议尽快合入或反馈 review 意见，避免悬置 |
| Issue | [#1053](https://github.com/nullclaw/nullclaw/issues/1053) | unbounded session reload | 2026-10-10 | 🟠 与 #1054 强关联，合入后应同步 close |
| Issue | [#1055](https://github.com/nullclaw/nullclaw/issues/1055) | bound persisted session transcript | 2026-10-11 | 🟠 尚无对应 PR，需维护者关注以免形成"orphan issue" |

**提醒维护者**：建议在 PR #1054 合入后的同一周期内，对 #1055 给出"接受 / 纳入下一里程碑 / 不予处理"的明确回应，以保持议题闭环节奏。

---

## 📊 项目健康度速览

| 维度 | 评估 |
|---|---|
| 代码活跃度 | 🟢 有明确推进（1 PR 待合并） |
| 社区参与度 | 🔴 当日外部贡献/反馈为零 |
| 测试质量 | 🟢 PR #1054 自测覆盖率高且无泄漏 |
| 议题闭环 | 🟡 已有"问题→修复→跟进"链路，但尚未完全闭环 |
| 发布节奏 | ⚪ 当日无发布，无信号判断 |

**总体判断**：项目处于**小步快跑、问题驱动**的维护期，技术债务被主动识别并修复，但社区广度与发布节奏需要进一步激活。

</details>

<details>
<summary><strong>IronClaw</strong> — <a href="https://github.com/nearai/ironclaw">nearai/ironclaw</a></summary>

# IronClaw 项目日报

**报告日期：2026-10-11**
**项目主页：** [nearai/ironclaw](https://github.com/nearai/ironclaw)

---

## 1. 今日速览

IronClaw 在过去 24 小时整体活跃度偏低，仅记录到 2 条 Issue 更新（1 新开/活跃、1 关闭），无 PR 变更，也无新版本发布。从指标看，项目处于相对平静期，无明显开发主线推进信号。值得关注的是，新开 Issue #8131 反映出文档宣传与 onboarding 实际可用 provider 列表之间的预期落差，可能演变为社区信任问题；此外，关闭的 Issue #1047（DeepSeek API key 配置问题）虽然是旧问题，但说明维护者仍在做长尾清理。综合判断：**项目健康度中等，社区互动量偏低，需关注文档/产品承诺一致性与 PR 活跃度提升**。

---

## 2. 版本发布

*本节无内容（过去 24 小时未发布新版本）。*

---

## 3. 项目进展

过去 24 小时无 PR 合并或关闭，**无代码层面进展**。

唯一与"推进"相关的动作是关闭了 Issue #1047（2026-03-12 开，2026-10-10 关，存在约 7 个月）。该 Issue 反映 DeepSeek provider 鉴权失败（HTTP 401），目前无法确认是代码修复、文档更新还是被作为 invalid/wontfix 关闭——建议维护者在关闭评论中补充说明原因，以便用户了解后续行为。

🔗 [Issue #1047](https://github.com/nearai/ironclaw/issues/1047)

---

## 4. 社区热点

| 排名 | 议题 | 类型 | 评论 | 👍 | 链接 |
|------|------|------|------|----|------|
| 1 | #8131 Is this a joke? (ironclaw onboard provider list) | OPEN / 新开 | 0 | 0 | [🔗](https://github.com/nearai/ironclaw/issues/8131) |
| 2 | #1047 [scope: llm, scope: setup] can not use deepseek | CLOSED | 0 | 0 | [🔗](https://github.com/nearai/ironclaw/issues/1047) |

**分析：**
- 虽然两条 Issue 的互动数（评论 0、👍 0）都非常低，但 #8131 的标题"Is this a joke?"以及摘要中的"Seriously?"语气表明用户带有强烈不满情绪，这是一种需要重视的舆情信号。
- 核心矛盾在于 **docs 宣称支持 20+ provider 包含"any OpenAI-compatible endpoint"，但 onboarding 流程内置选项似乎与该承诺存在差距**。
- 这类"文档-体验不一致"类问题如果扩散，会显著影响新用户的 first-run 体验和口碑。

---

## 5. Bug 与稳定性

| 严重度 | 议题 | 描述 | 状态 | 是否有 fix PR |
|--------|------|------|------|---------------|
| 🟡 中 | [#1047](https://github.com/nearai/ironclaw/issues/1047) | 配置 DeepSeek 后调用报 HTTP 401：API key 鉴权失败，提示 "Your api key: ****bbaa is invalid" | 已 CLOSED（2026-10-10） | ❌ 不明确 |
| 🟡 中 | [#8131](https://github.com/nearai/ironclaw/issues/8131) | onboarding 中可选项与文档宣传不符，可能导致用户按文档预期选 provider 时失败 | OPEN（2026-10-10 新开） | ❌ 无 |

**说明：** Issue #1047 是典型的 provider 鉴权链路问题，可能涉及环境变量解析、API key 校验或 provider 配置 schema 三处之一。建议排查 commit 历史确认根因。Issue #8131 更偏向产品/体验类问题，但若属实，会构成系统性可用性 Bug。

---

## 6. 功能请求与路线图信号

直接的功能请求今日未出现，但以下信号值得关注：

- **🔵 OpenAI-compatible 自定义 endpoint 支持的"完善度"信号（来自 #8131）**
  文档已将该能力列为卖点，但 onboarding 流程似乎未提供清晰的入口。建议维护者评估：
  1. 是否需要将 "Custom OpenAI-compatible" 作为 onboarding 的显式选项；
  2. 是否需要内置 base_url 与模型名模板；
  3. 是否应在 README 中提供"如何在 onboarding 中使用 DeepSeek 等第三方 provider"的快速指引。

由于当前无相关 PR，暂无法判断该方向是否已纳入下一版本路线图。

🔗 [Issue #8131](https://github.com/nearai/ironclaw/issues/8131)

---

## 7. 用户反馈摘要

| 来源 | 用户痛点 | 情绪倾向 |
|------|----------|----------|
| [#8131](https://github.com/nearai/ironclaw/issues/8131) | 文档承诺与 onboarding 实际可用 provider 列表不匹配，用户感受到"被忽悠" | 😡 强烈不满 |
| [#1047](https://github.com/nearai/ironclaw/issues/1047) | 按官方文档配置 DeepSeek 失败，错误信息仅返回 API key 无效，缺少环境变量是否被正确读取的诊断信息 | 😟 受挫 |

**提炼：** 两个 Issue 共同指向一个核心体验问题——**"配置第三方 LLM provider 的链路对用户不友好"**，既包括 onboarding 步骤的明确性，也包括错误信息的可调试性。IronClaw 主打多 provider 灵活性，这恰是其差异化卖点，相关体验必须打磨到位。

---

## 8. 待处理积压

| 议题 | 标题 | 创建时间 | 待办时长 | 链接 |
|------|------|----------|----------|------|
| #8131 | Is this a joke? (ironclaw onboard provider list) | 2026-10-10 | **1 天**（高情绪风险，需尽快响应） | [🔗](https://github.com/nearai/ironclaw/issues/8131) |

⚠️ **维护者关注建议：**
- **优先响应 #8131**：标题语气强烈，0 评论状态下若 24–48 小时内无回应，存在升级为公开抱怨（社交平台 / Discord）的风险；建议先以官方口径确认是 onboarding 文档缺失还是功能未交付。
- **补充 #1047 关闭说明**：以避免后续用户重复踩坑。
- **PR 活跃度为 0** 是更值得长期关注的信号——若连续多日无 PR，可能反映贡献者瓶颈，建议维护者主动在社区发布"good first issue"或求助式号召。

---

*报告生成时间：2026-10-11｜数据来源：GitHub Issues / PRs（nearai/ironclaw）*

</details>

<details>
<summary><strong>LobsterAI</strong> — <a href="https://github.com/netease-youdao/LobsterAI">netease-youdao/LobsterAI</a></summary>

# LobsterAI 项目日报
**日期：2026-10-11**
**数据周期：过去 24 小时（基于 2026-10-10 的更新）**

---

## 1. 今日速览

LobsterAI 今日呈现**高强度代码合入、内收并发修复**的开发节奏：过去 24 小时内共有 **22 条 PR 更新，其中 21 条已合并或关闭、1 条仍处 Open 状态**，而 Issues 仅新增 1 条且与项目本身无直接技术关系。无新版本发布。从 PR 主题分布看，本轮迭代高度集中于 **Cowork / OpenClaw 引擎稳定性、Office 文档编辑能力、Artifacts 与文件预览刷新逻辑**三大方向，叠加一处 1 个月未关闭的安全加固 PR (#2590) 仍待 review。项目整体健康度良好，缺陷修复密度高于功能新增，符合"先收敛体验问题"的工程节奏。

---

## 2. 版本发布

**无新版本发布。** 过去 24 小时未检测到任何 Release 标签或正式版/测试版产出。本次大量合并的修复预计将汇入下一构建版本（推测为 2026.9.x 补丁线或 2026.10 系列）。

---

## 3. 项目进展

### 3.1 Cowork / OpenClaw 引擎稳定性（最大头）

本轮迭代的**核心重心**是消除 OpenClaw v2026.8.1 在 Windows / macOS 场景下的体验卡点，多个 PR 形成上下游修复链：

| PR | 解决的问题 |
|---|---|
| [#2825](https://github.com/netease-youdao/LobsterAI/pull/2825) | 网关启动 / Quick Repair 的超时计时改用 awake time，避免机器睡眠后被 wall-clock 时间"提前判死" |
| [#2831](https://github.com/netease-youdao/LobsterAI/pull/2831) | 升级 2026.9.4 → 2026.9.24 时移除废弃的 `meta.lastTouchedAt` 字段，解决 auth-profiles 迁移失败 |
| [#2824](https://github.com/netease-youdao/LobsterAI/pull/2824) | 配置恢复卡住时不再把引擎直接判定为失败，任务、协作者、IM 连接应保持可用 |
| [#2826](https://github.com/netease-youdao/LobsterAI/pull/2826) | 收尾前重新检查未完成的 progress-card 计划，避免 MiniMax-M3.1-Flash-Preview 等模型只跑 10 步计划中的部分就停 |
| [#2827](https://github.com/netease-youdao/LobsterAI/pull/2827) | 用户中断 turn 时丢弃已入队的 steer 输入；该 PR 同时合并了 #2823 的内容，并**取代** #2823 |
| [#2830](https://github.com/netease-youdao/LobsterAI/pull/2830) | 新任务计时从 submit 时刻起算；明确标注 nsp-clawguard 2.5.5 写入约 1,429 条 skill-scan 发现的引擎等待时长 |
| [#2837](https://github.com/netease-youdao/LobsterAI/pull/2837) | **移除**输入框上方的 OpenClaw 进度卡（自 #2778 起存在），因模型自我报告的计划常不准确、性价比低 |

> 评价：这一组 PR 系统性修复了 Windows 用户在 OpenClaw v2026.8.1 上遇到的"任务卡住、计时不准、状态误判"系列问题，是过去 24 小时里**价值最高的一批合并**。

### 3.2 Office 文档编辑能力补齐

| PR | 改进点 |
|---|---|
| [#2833](https://github.com/netease-youdao/LobsterAI/pull/2833) | Word 编辑器新增**插入表格 / 图片**能力，并修复内核光标段前/段中/段末插入的边界问题，合并多步插入为一次撤销 |
| [#2828](https://github.com/netease-youdao/LobsterAI/pull/2828) | Windows 下 Excel / WPS 占用文件时给出明确提示，关闭后自动重试保存 |
| [#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) | 修复 Electron 默认 session 只挂一个权限请求处理器导致 Univer 表格无法读写剪贴板的回归 |

> 评价：回应了用户"Word 不支持插入表格、图片"这类直接吐槽；剪贴板权限问题（来自 bdd16b94 引入）一并回补。

### 3.3 Artifacts / Library 预览体验

| PR | 改进点 |
|---|---|
| [#2832](https://github.com/netease-youdao/LobsterAI/pull/2832) | 后续回复改写文件时，不再关闭用户当前正在查看的预览 |
| [#2836](https://github.com/netease-youdao/LobsterAI/pull/2836) | 让 artifact panel 的内置浏览器 / SVG / 代码 / 文本 / 图片 / 文档预览能正确刷新 agent 就地编辑的内容 |
| [#2838](https://github.com/netease-youdao/LobsterAI/pull/2838) | My Files（我的文件）预览中保存 Word 时不再误显示"加载中…"并强制重载 |

### 3.4 其他重要合并

- [#2829](https://github.com/netease-youdao/LobsterAI/pull/2829) **侧边栏视觉回归**：恢复 agent 行与嵌套任务行的高度/缩进差异（自 41db64c2 36px 重构后丢失层级区分）。
- [#2834](https://github.com/netease-youdao/LobsterAI/pull/2834) **测试卫生**：`logs/cowork.log` 误提交后被 `npm test` 持续污染工作区，本 PR 把它从 git 中彻底摘除。
- [#2835](https://github.com/netease-youdao/LobsterAI/pull/2835) **Computer Use 安装**：避免安装 Computer Use 后网关被二次"重启"（实际并非真重启，但造成用户感知错误），并让重启后任务可被引擎重新接管。
- [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) **provider 前缀保留**：当模型 ID 含 `/`（如 `deepseek-ai/DeepSeek-V4-Flash`）时，不再丢失 provider 信息。
- [#1660](https://github.com/netease-youdao/LobsterAI/pull/1660) **首页欢迎区域动态化**：切换到非 main agent 时显示该 agent 的名称与描述；自 2026-04-13 起长期 stale，今日被关闭。

---

## 4. 社区热点

过去 24 小时评论/讨论热度集中在 **Cowork 引擎行为修复**与 **Office 编辑器能力补齐**两组 PR 上，但 GitHub 数据中评论数普遍 ≤ 1，仍属"代码合入驱动"而非"讨论驱动"的一日。

唯一具备较长生命周期讨论潜力的：

- **[#2839 网易有道的双休情况](https://github.com/netease-youdao/LobsterAI/issues/2839)** —— 作者 `dujeongil-galaxy`，创建于 2026-10-10，已 1 条评论、0 👍。该 Issue 实际询问的是**网易有道（项目所属公司）的双休口径与公开数据校验**，与 LobsterAI 软件本身的功能/缺陷无关，属于典型的**离题 issue**。建议维护者评估是否需要在仓库 Issue 模板中明确非技术议题的处理方式，或在 README 中加入行为准则链接。

---

## 5. Bug 与稳定性

按严重程度排序（高 → 低）：

| 严重度 | 问题 | 是否有 Fix PR | 链接 |
|---|---|---|---|
| 🔴 高 | Windows 用户从 2026.9.4 升级 2026.9.24 后网关启动失败（`meta.lastTouchedAt` 迁移错误） | ✅ 已合并 | [#2831](https://github.com/netease-youdao/LobsterAI/pull/2831) |
| 🔴 高 | Cowork 任务卡在"第 3/10 步 · 本轮已结束"，模型未完成 plan 但已停止 | ✅ 已合并 | [#2826](https://github.com/netease-youdao/LobsterAI/pull/2826) |
| 🔴 高 | Windows 网关首次任务耗时数分钟且计时中途重置 | ✅ 已合并（nsp-clawguard 等待被明确标注） | [#2830](https://github.com/netease-youdao/LobsterAI/pull/2830) |
| 🟠 中 | 配置恢复卡住导致引擎被误判失败、composer 被禁用、IM 拒绝连接 | ✅ 已合并 | [#2824](https://github.com/netease-youdao/LobsterAI/pull/2824) |
| 🟠 中 | 用户中断 turn 后，已入队的 steer 输入被 OpenClaw 作为新一轮重放 | ✅ 已合并（#2827 取代 #2823） | [#2827](https://github.com/netease-youdao/LobsterAI/pull/2827) |
| 🟠 中 | Windows 下 Excel/WPS 占用导致 Office 内嵌编辑器保存失败（`EPERM`） | ✅ 已合并 | [#2828](https://github.com/netease-youdao/LobsterAI/pull/2828) |
| 🟠 中 | Univer 表格无法读写剪贴板（默认 session 权限处理器冲突） | ✅ 已合并 | [#2822](https://github.com/netease-youdao/LobsterAI/pull/2822) |
| 🟡 低 | Agent 编辑 HTML / SVG / 文档后 artifact 预览不刷新 | ✅ 已合并 | [#2836](https://github.com/netease-youdao/LobsterAI/pull/2836) |
| 🟡 低 | My Files 预览中保存 Word 触发误重载 | ✅ 已合并 | [#2838](https://github.com/netease-youdao/LobsterAI/pull/2838) |
| 🟡 低 | 侧边栏 36px 重构后 agent 行与嵌套任务行视觉无差异 | ✅ 已合并 | [#2829](https://github.com/netease-youdao/LobsterAI/pull/2829) |
| 🟡 低 | 机器睡眠后网关启动因 wall-clock 时间被提前超时 | ✅ 已合并 | [#2825](https://github.com/netease-youdao/LobsterAI/pull/2825) |
| 🟡 低 | Computer Use 安装后网关"再次重启"的误导日志 | ✅ 已合并 | [#2835](https://github.com/netease-youdao/LobsterAI/pull/2835) |
| ⚪ 卫生 | `logs/cowork.log` 被误提交并被 `npm test` 持续修改 | ✅ 已合并 | [#2834](https://github.com/netease-youdao/LobsterAI/pull/2834) |
| ⚪ 卫生 | 含 `/` 的模型 ID 丢失 provider 前缀 | ✅ 已合并 | [#2452](https://github.com/netease-youdao/LobsterAI/pull/2452) |

**结论**：今日报告的所有 Bug **均已有对应 fix PR 合并**，未发现尚未被处理的生产级崩溃。

---

## 6. 功能请求与路线图信号

- **Word 表格与图片插入**（[#2833](https://github.com/netease-youdao/LobsterAI/pull/2833)）：用户原话"Word 文件编辑不支持插入表格、图片之类的吗？"——已被纳入并合并，是**最确定的功能补强**。
- **非 main agent 首页个性化**（[#1660](https://github.com/netease-youdao/LobsterAI/pull/1660)）：被关闭而非合并，长期 stale，路线信号**暂不明朗**。
- **进度卡移除**（[#2837](https://github.com/netease-youdao

</details>

<details>
<summary><strong>TinyClaw</strong> — <a href="https://github.com/TinyAGI/tinyagi">TinyAGI/tinyagi</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>Moltis</strong> — <a href="https://github.com/moltis-org/moltis">moltis-org/moltis</a></summary>

# Moltis 项目动态日报

**报告日期**：2026-10-11
**数据周期**：过去 24 小时
**项目**：[moltis-org/moltis](https://github.com/moltis-org/moltis)

---

## 1. 今日速览

过去 24 小时内 Moltis 项目共新增 **4 条 Issue**、**1 条 PR 待合并**，**无新版本发布**，整体活跃度处于中等偏低水平。值得关注的是，所有新增 Issue 均由同一用户 `texxronn` 提出，且其中两条（#1300、#1299）指向**核心运行时与渠道适配层**的功能缺失，显示出用户对生产可用性的进一步要求。唯一在飞的 PR（#1295）已挂起 6 天未推进，建议维护者关注。

---

## 2. 版本发布

⚠️ **无新版本发布**。本节跳过。

---

## 3. 项目进展

过去 24 小时 **无 PR 被合并或关闭**，项目代码层面无实质性推进。

唯一在飞 PR：

- **[#1295 fix(discord): classify direct messages as direct chats](https://github.com/moltis-org/moltis/pull/1295)**（作者：tomachianura，创建 2026-10-05，更新 2026-10-10，待合并）
  - **作用**：修复 Discord 所有对话被归类为 "shared"，导致 1:1 DM 同样被剥离工具调用能力的问题。
  - **与今日 Issue 强相关**：直接对应 [Issue #1300](https://github.com/moltis-org/moltis/issues/1300) 提出的诉求。
  - **未推进天数**：6 天未获 review/merge，**建议维护者优先处理**。

---

## 4. 社区热点

按评论活跃度排序，今日热度最高的 Issue 列表：

| 排名 | Issue | 评论数 | 关键诉求 |
|------|-------|--------|----------|
| 1 | [#1300 Discord DM 信任模型](https://github.com/moltis-org/moltis/issues/1300) | 1 | 运营商 DM 不应被 fail-closed |
| 2 | [#1298 OpenAI gpt-6 原生支持](https://github.com/moltis-org/moltis/issues/1298) | 1 | reasoning + tools 共存 |
| 3 | [#1297 共享渠道触发词配置](https://github.com/moltis-org/moltis/issues/1297) | 1 | WhatsApp 群聊稳定唤醒词 |
| 4 | [#1299 运行时日期时间未注入](https://github.com/moltis-org/moltis/issues/1299) | 0 | datetime 上下文注入失效 |

**诉求分析**：
- 用户正在尝试把 Moltis 用作**自托管个人/小团队 Agent**，对**渠道适配（Discord / WhatsApp）**、**模型兼容（OpenAI 新代际）**、**上下文正确性（时间）** 这三条主线有强烈诉求。
- 4 个 Issue 表面独立，实际上都指向同一根本设计权衡：**"shared by default"** 安全策略对运营商场景过严，亟需按"信任域"细分。

---

## 5. Bug 与稳定性

按严重程度排列：

### 🔴 P0 — 影响核心功能可用性
- **[#1299 Bug: runtime datetime never injected](https://github.com/moltis-org/moltis/issues/1299)**
  - **症状**：Agent 无法回答 "今天几号/现在几点"。`runtime_datetime_message()` 设计存在但 host runtime context 中 `time: None, today` 未设置，导致前置注入永远不触发。
  - **影响范围**：所有依赖时间上下文的对话轮次。
  - **是否已有 fix PR**：❌ 无。建议作为最高优先级修复。

### 🟠 P1 — 影响功能但有 workaround
- **[#1300 Discord: forward DM vs guild](https://github.com/moltis-org/moltis/issues/1300)**
  - **症状**：Discord 渠道把所有 channel turn 一律视为 "shared"，工具被无条件剥离，包括与运营商的 1:1 DM。
  - **是否已有 fix PR**：✅ [PR #1295](https://github.com/moltis-org/moltis/pull/1295) 已就绪但未合并。

### 🟡 P2 — 模型兼容性 Bug
- **[#1298 gpt-6-luna + tools 报 HTTP 400](https://github.com/moltis-org/moltis/issues/1298)**
  - **症状**：OpenAI `gpt-6-luna` 在含工具调用的轮次失败，报 "Function tools with reasoning_effort are not supported"。
  - **临时方案**：使用 `/v1/responses` 或将 `reasoning_effort` 设为 `'none'`。
  - **是否已有 fix PR**：❌ 无。

---

## 6. 功能请求与路线图信号

| Issue | 请求 | 进入下一版本的可能性 |
|-------|------|----------------------|
| [#1297 触发词配置](https://github.com/moltis-org/moltis/issues/1297) | WhatsApp 等 linked-device 群聊支持 `@Rio` 这类稳定唤醒词 | **高** —— 用例清晰，与 `mention_mode` 设计正交，扩展成本低 |
| [#1298 gpt-6 原生支持](https://github.com/moltis-org/moltis/issues/1298) | OpenAI 渠道适配新代际模型的（reasoning + tools 路径选择） | **高** —— 用户已升级到 gpt-6，若不支持将流失该用户群体 |
| [#1300 DM 信任模型](https://github.com/moltis-org/moltis/issues/1300) | Discord / MS Teams / Mattermost 区分 DM 与 guild | **中-高** —— PR #1295 已就绪但需扩展到多渠道 |

**路线图信号总结**：下一版本的核心主题大概率围绕 **"运营商/受信域的精细化授权"** 与 **"新代际模型兼容"** 展开。

---

## 7. 用户反馈摘要

从今日 4 条 Issue 评论中提炼的真实用户痛点：

- 🗣️ **自托管 Agent 用户**（[#1297](https://github.com/moltis-org/moltis/issues/1297)）：希望把 Agent 接入个人 WhatsApp（linked device）并在群聊中作为稳定身份被唤醒，对当前 `mention_mode="mention"` 在 linked-device 场景下失效表示失望。
- 🗣️ **Discord 集成用户**（[#1300](https://github.com/moltis-org/moltis/issues/1300)）：明确指出"工具在 DM 中被无条件剥离"是 fail-closed 过度反应，期望信任 `operators` 列表中的发送者。
- 🗣️ **OpenAI gpt-6 早期采用者**（[#1298](https://github.com/moltis-org/moltis/issues/1298)）：内置 `openai` provider 在 gpt-6 上完全不可用，被迫回退到老模型。
- 🗣️ **基础可用性诉求**（[#1299](https://github.com/moltis-org/moltis/issues/1299)）：Agent 应当能正确回答"今天日期"等基础问题。

> 共性结论：用户对 Moltis 的**渠道集成完整性**与**模型前沿跟进**满意度偏低，但持续投入精力提 Issue 表明仍对项目抱有期待。

---

## 8. 待处理积压

| 类型 | 编号 | 创建日期 | 挂起天数 | 备注 |
|------|------|----------|----------|------|
| PR | [#1295](https://github.com/moltis-org/moltis/pull/1295) | 2026-10-05 | **6 天** | 唯一在飞 PR，直接修复核心安全模型问题 |

**提醒维护者**：
- [PR #1295](https://github.com/moltis-org/moltis/pull/1295) 与 [Issue #1300](https://github.com/moltis-org/moltis/issues/1300) 强相关，建议尽快 review。若认可方向，可一并扩展至 MS Teams / Mattermost（#1300 摘要中已提及）。
- 今日 4 条新 Issue 中 #1299（datetime 注入）目前 **0 评论**，存在被遗漏的风险。

---

## 📊 健康度小结

| 维度 | 评分 | 说明 |
|------|------|------|
| 活跃度 | ⭐⭐☆☆☆ | 4 Issue + 1 PR，无合并、无发版 |
| 响应及时性 | ⭐⭐☆☆☆ | PR 挂起 6 天，新 Issue 多来自单一贡献者 |
| 社区参与深度 | ⭐⭐⭐☆☆ | 单个高级用户（texxronn）深度使用、持续反馈 |
| 问题多样性 | ⭐⭐⭐⭐☆ | 覆盖渠道/模型/运行时三大模块 |
| 代码推进 | ⭐☆☆☆☆ | 24h 内无任何代码变更落地 |

**总体判断**：项目处于**"用户先行、代码滞后"**的状态，Issue 池持续扩容但合并节奏放缓。建议维护者本周集中处理 PR #1295 与 Issue #1299，恢复节奏。

</details>

<details>
<summary><strong>CoPaw</strong> — <a href="https://github.com/agentscope-ai/CoPaw">agentscope-ai/CoPaw</a></summary>

# CoPaw 项目动态日报

**日期：2026-10-11**
**数据周期：过去 24 小时**
**报告人：AI 开源项目分析师**

> ⚠️ 数据说明：今日 GitHub 数据中 Issues 与 PR 链接均指向 `agentscope-ai/QwenPaw`，与仓库当前显示名 CoPaw 不一致，建议核实项目是否近期发生重命名或迁移。下文沿用数据原文编号。

---

## 1. 今日速览

过去 24 小时 CoPaw 仓库活动**相当活跃**：共产生 15 条 Issues 更新（6 条仍活跃、9 条已关闭）和 17 条 PR 更新（7 条待合并、10 条已合并/关闭），**未发布新版本**。

整体健康度评估：**活跃度偏高，问题集中度偏高**。今日工作呈现出明显的两条主线 —— 一是 **Console 端稳定性收尾**（连续关闭 5–7 个相关 Bug 报告，配合 1 个 XXL 级修复 PR #8154 一次性扫清多个长存问题），二是 **OpenAI Responses API 流式解析、Hub 模型上下文、Windows 长路径、飞书入站媒体** 等多个边缘场景的兼容性补强。社区同时出现 1 个标记为 Security 的 MCP Driver 配置接口 RCE 报告，以及一个规模 XXXL 的**鸿蒙原生客户端**新增提案。整体属于"扫旧账 + 拓新端"的双轮节奏。

---

## 2. 版本发布

**今日无新版本发布。** 过去 24 小时所有 PR 均为代码修复与文档补强，未触发版本号变更。

---

## 3. 项目进展

### 3.1 重要合并 / 关闭 PR（今日已关闭 10 条）

| PR | 标题 | 影响范围 | 关联 Issue |
|---|---|---|---|
| [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) | `fix(console): improve chunk error recovery and diagnostics` (XXL) | 一举关闭 4 个长存 Console 启动/恢复 Bug | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) · [#8094](https://github.com/agentscope-ai/QwenPaw/issues/8094) · [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) · [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) |
| [#8168](https://github.com/agentscope-ai/QwenPaw/pull/8168) | `fix(console): use resolved model context limits in Hub validation` (XS) | Hub 模型配置不再因发现请求挂起而误拒合法上下文窗口 | — |
| [#8169](https://github.com/agentscope-ai/QwenPaw/pull/8169) | `fix(hub): respect administrator token capability overrides` (XS) | Hub 上下文限制尊重管理员手动覆盖 | — |
| [#8157](https://github.com/agentscope-ai/QwenPaw/pull/8157) | `fix(chat): prevent invalid copy icon size` (XS) | 修复 Bubble 复制图标 `size="small"` 触发 SVG 长度警告 | [#8143](https://github.com/agentscope-ai/QwenPaw/issues/8143) |
| [#8159](https://github.com/agentscope-ai/QwenPaw/pull/8159) | `fix(console): skip empty text messages in response grouping` (S) | 修复 Scroll headline 单独成段时主回复被吞 | [#8158](https://github.com/agentscope-ai/QwenPaw/issues/8158) |
| [#8149](https://github.com/agentscope-ai/QwenPaw/pull/8149) | `fix(console): refresh expanded file directories and preserve pagination` (L) | Files 面板刷新保持展开状态与分页 | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) |
| [#7996](https://github.com/agentscope-ai/QwenPaw/pull/7996) | `fix(console): refresh expanded folders in Files panel` | 同上议题的并入实现（与 #8149 同一目标） | [#7995](https://github.com/agentscope-ai/QwenPaw/issues/7995) |
| [#7096](https://github.com/agentscope-ai/QwenPaw/pull/7096) | `fix(tools): resolve PEP 563 annotations` | 作者主动关闭：#8008 已将 agentscope 固定到 2.0.9，问题自然消失 | — |
| [#7132](https://github.com/agentscope-ai/QwenPaw/pull/7132) | `feat(console): pin chat icon to top of collapsed sidebar` | 主动关闭：当前侧边栏重设计已覆盖此提案 | — |
| [#7889](https://github.com/agentscope-ai/QwenPaw/pull/7889) | `fix(console): recover from transient DOM-mutation render errors` (XXXL) | 作者基于最新版主线重开为 #8170 | [#8170](https://github.com/agentscope-ai/QwenPaw/pull/8170) |

### 3.2 整体推进评价

**向前迈进的距离已经稳定且扎实**，本日报亮点是 **`#8154` 一笔扫清 4 个 Console 长期 Bug**（#8120、#8094、#7815、#7074 全部关闭），其中 #7074 与 #7815 均为 8–9 月的报告，跨度 1–2 个月才等到的修复，对用户信心修复意义重大。同时 Hub 模型上下文校验的两个 XS 修复 (#8168、#8169) 闭环了 qwen3.8-max 系列在 Hub 上的体验断点。**Files 面板刷新**和 **Scroll headline 空消息** 两个 UI 细节修复也已完成。

仍需关注的是：今日**未关闭**的活跃 Issue 与未合并 PR 中，包含 1 个鸿蒙原生客户端 XXXL 级提案 [#8164](https://github.com/agentscope-ai/QwenPaw/pull/8164)、1 个 Windows 长路径 S 级修复 [#8167](https://github.com/agentscope-ai/QwenPaw/pull/8167) 和 1 个 Responses API M 级修复 [#8165](https://github.com/agentscope-ai/QwenPaw/pull/8165)，均属于"等合并即可发版"的候补。

---

## 4. 社区热点

按过去 24 小时 Issues 评论数排序：

| 排名 | 编号 | 评论 | 标题 |
|---|---|---|---|
| 🥇 | [#8162](https://github.com/agentscope-ai/QwenPaw/issues/8162) | 7 | OpenAI Responses API 流式事件-空响应问题（**已关闭**，由 [#8165](https://github.com/agentscope-ai/QwenPaw/pull/8165) 修复中） |
| 🥈 | [#8120](https://github.com/agentscope-ai/QwenPaw/issues/8120) | 5 | 频繁页面加载失败（**已关闭**，由 [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) 修复） |
| 🥈 | [#7815](https://github.com/agentscope-ai/QwenPaw/issues/7815) | 5 | Console 懒加载页面失败后无法恢复（**已关闭**，由 [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) 修复） |
| 4 | [#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311) | 4 | v2.1.1b2 缺失 `_qwenpaw_remote_backend` 模块（**仍 OPEN**） |
| 4 | [#7074](https://github.com/agentscope-ai/QwenPaw/issues/7074) | 4 | 正常运行崩溃需刷新页面（**已关闭**，由 [#8154](https://github.com/agentscope-ai/QwenPaw/pull/8154) 修复） |
| 6 | [#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172) | 3 | Console 聊天间歇性静默空完成（**仍 OPEN**） |
| 6 | [#8163](https://github.com/agentscope-ai/QwenPaw/issues/8163) | 3 | Windows 长路径导致 qwenpaw-creator 评审决策日志永久阻塞（**仍 OPEN**，PR [#8167](https://github.com/agentscope-ai/QwenPaw/pull/8167) 待合并） |

### 社区诉求分析

- **Console 启动/恢复链路**是过去一周的最大热点（#8120、#7815、#7074、#8094 累计 16+ 评论），反映 **WebView2 缓存陈旧 + 懒加载分片失败** 的组合痛点在多用户/多设备复现。今日由 #8154 一次性兜底，对社区是强心剂。
- **OpenAI Responses API 兼容**（#8162）是新出现的"Provider 差异"诉求 —— 部分 Provider 不发增量 delta、只在终结事件下发整段 output，AgentScope 流式解析需要更宽松的兼容。
- **桌面端模块缺失**（#7311）一个 8 月报告至今无修复响应，社区耐性正在下降。

---

## 5. Bug 与稳定性

### 🔴 严重（仍 OPEN，建议 24–48h 内响应）

1. **[#8172](https://github.com/agentscope-ai/QwenPaw/issues/8172)** Console 聊天间歇性静默空完成 —— 回合约 1 秒结束、output 为空、模型从未被调用，前端无任何回复（v2.2.0 Docker/Linux）。**性质：可用性灾难**，用户连错误提示都拿不到。
2. **[#7311](https://github.com/agentscope-ai/QwenPaw/issues/7311)** v2.1.1b2 缺失 `_qwenpaw_remote_backend` 模块，所有 agent 工具不可用（Windows 10）。**性质：功能完全失效**，8 月 26 日至今 46 天无响应。

### 🟠 高（仍 OPEN，已有 fix PR）

3. **[#8163](https://github.com/agentscope-ai/QwenPaw/issues/8163)** Windows 长路径导致 qwenpaw-creator 评审决策永久不可发布（503 + 409 双重错误）→ 已有 [#8167](https://github.com/agentscope-ai/QwenP

</details>

<details>
<summary><strong>ZeptoClaw</strong> — <a href="https://github.com/qhkm/zeptoclaw">qhkm/zeptoclaw</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>ZeroClaw</strong> — <a href="https://github.com/zeroclaw-labs/zeroclaw">zeroclaw-labs/zeroclaw</a></summary>

# ZeroClaw 项目日报 · 2026-10-11

---

## 1. 今日速览

ZeroClaw 今日维持高强度开发节奏：**24 小时内 13 条 Issue 更新、50 条 PR 更新**，其中 PR 待合并数高达 39 条，闭环数 11 条，当日无新版本发布。当前所有主线活动围绕两个版本目标展开：**v0.8.6 收尾**（cron 提取、release size 决策、迁移修复）与 **v0.9.0 gateway 拆分**（RPC 分层、SessionBackend、per-agent scoping）。主线贡献者 @JordanTheJet 持续推进 RPC/parity 工作流，@IftekharUddin 同步落地身份与访问相关的安全修复。整体处于 **重要里程碑冲刺期**，变更以高风险（risk:high）和 XL 尺寸为主，社区讨论亦集中于安全/部署边界。

---

## 2. 版本发布

无新版本发布。当日活跃分支主要在为 **v0.8.6 / v0.9.0** 蓄力，详见第 8 节待合入指引。

---

## 3. 项目进展

今日共 **11 条 PR 完成其生命周期**（已合并或被关闭），其中明确闭环的代表性 PR 包括：

| PR | 标题 | 状态 | 影响 |
|---|---|---|---|
| [#11652](https://github.com/zeroclaw-labs/zeroclaw/pull/11652) | docs(runtime): record the holding-crate exception for bounded-delegation ceiling | 已关闭 | 在 `zeroclaw-runtime` 的 holding-crate 例外表中新增一行记录，为 #10391 合并铺路（**ADR-016 文档化**）。虽无代码改动，但解除了 #10391 长期被 review 阻塞的状态。 |
| 多条 release/v0.9.0 与 v0.8.6 标签 PR | 跨架构、RPC、Channel、SOP、Config、Memory 等 | 进入下一评审轮 | 推动 v0.9.0 gateway 与 core 拆分、半双工 SessionBackend、per-agent memory 隔离。 |

今日推进的主要方向：

- **v0.9.0 RPC 拆分主线加速**：[#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187)（DefaultCapabilities 应用层组装）、[#11186](https://github.com/zeroclaw-labs/zeroclaw/pull/11186)（gateway 进程内传输层）[#11182](https://github.com/zeroclaw-labs/zeroclaw/pull/11182)（workspace / pairing / canvas RPC 范化）[#11185](https://github.com/zeroclaw-labs/zeroclaw/pull/11185)（session-owned turn 与 viewers 附加模型）[#11176](https://github.com/zeroclaw-labs/zeroclaw/pull/11176)（cron / memory / skills RPC 增补）[#11172](https://github.com/zeroclaw-labs/zeroclaw/pull/11172)（配置 HTTP→RPC 拓宽）[#11169](https://github.com/zeroclaw-labs/zeroclaw/pull/11169)（SOP 取消 / dispatch / decide RPC 增补）[#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068)（按 sender role 收窄 channel turn）同步在评审与 rebase 中。
- **Schema V4 配置迁移闭环**：[#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218)（`schema version 4` 迁移陈旧 key、缺失 schema_version 警告）已合并 [#8754](https://github.com/zeroclaw-labs/zeroclaw/pull/8754) 起点，回应 **#11579** 中暴露的 schema_version=3 误盖写问题。
- **Per-agent 资源隔离修复矩阵初具**：[#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)（session / discord 工具 ownership scoping）、[#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745)（knowledge graph per-agent attribution）、[#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301)（committed-rename 状态恢复跨 CLI / gateway / RPC 一致性）同步推进。
- **JPEG 解码预分配修复**：[#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637)（停止为 zune-jpeg 不需要分配的 coefficient plane 收费，减少拒绝误报）进入最终评审，并直接催生 [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) 后续 ticket。
- **Cron 沉默失败观测化**：[#10599](https://github.com/zeroclaw-labs/zeroclaw/pull/10599)（cron `skip_missed_run` 记录非执行）已 tracked，呼应 #10546 cron crate 拆分方向。

整体而言，项目处于 **架构层重塑（gateway→RPC in-process）+ 安全收紧（per-agent ownership）+ 配置迁移（V3→V4）三线并进** 阶段，距离 v0.9.0 release 应还有数周开发+维护者评审窗口。

---

## 4. 社区热点

按评论数与关注度排序：

| 排名 | 编号 | 标题 | 评论数 | 关注面 |
|---|---|---|---|---|
| 1 | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | harden runtime-written executable test fixtures under the parallel runtime gate | 15 | 测试稳定性，cron / Parallel Runtime Test 闸口，可执行 shim 残留问题讨论活跃。 |
| 2 | [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | Downscale oversized images instead of dropping them + multimodal limits 0=disable | 7 | 多模态大图策略分歧——降级与禁用并存，社区倾向「不丢图」。 |
| 3 | [#7432](https://github.com/zeroclaw-labs/zeroclaw/issues/7432) | Runtime and gateway delivery - v0.8.6 and v0.9.0 tracker | 6 | v0.9.0 进度中央跟踪贴，被多 PR 引用。 |
| 4 | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel read+write tools lack per-agent ownership scoping | 4 | S0 安全，反映出 S0 漏洞累积已引发社区对 identity-access 模型的全面反思。 |
| 5 | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph has no per-agent attribution | 4 | 与 #9646 同源，关注 shared global graph 的横向越权。 |
| 6 | [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | ZeroCode sidebar turns failed sessions green after daemon restart（**已关闭**） | 3 | UX 一致性，3 轮评论后修复上线。 |
| 7 | [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | save_dirty 强制 schema_version=3 抹除 V1/V2 迁移 | 2 | 与 [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218) 修复直接对应，闭环迅速。 |
| 8 | [#10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546) | Extract cron into dedicated zeroclaw-cron crate | 2 | ADR-016 推进，争取 v0.8.6 内吸收。 |
| 9 | [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | Email channel cannot preserve CC / Reply All | 2 | P2 高风险但社区推动力偏弱，仍待 sponsor。 |
| 10 | [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | 重复 shell call 中断 ACP agent loop（**已关闭**） | 2 | 由外部 fuzzer 团队 DefuzeX 上报，闭环迅速，体现外部红队价值。 |

**诉求总结**：社区当前主要议题为「跨 agent 越权」「多模态图过大降级」「cron 与 release 闸口」「频道 CC/Reply All 行为保真」。其中安全议题（#9646 / #9647 / #9746 / #9745 体系）已形成明显主线，相关讨论互相交叉引用。

---

## 5. Bug 与稳定性

按严重度排序：

| 严重度 | 编号 | 标题 | 是否有同向 fix PR | 备注 |
|---|---|---|---|---|
| **S0 (data loss / security risk)** | [#9646](https://github.com/zeroclaw-labs/zeroclaw/issues/9646) | Session/channel 工具无 per-agent ownership scoping | ✅ [#9746](https://github.com/zeroclaw-labs/zeroclaw/pull/9746)（含 PR 在评审） | release-gate，p1 |
| **S0** | [#9647](https://github.com/zeroclaw-labs/zeroclaw/issues/9647) | Knowledge graph 无 per-agent attribution | ✅ [#9745](https://github.com/zeroclaw-labs/zeroclaw/pull/9745) | release-gate，p1 |
| **S1 (workflow blocked)** | [#11648](https://github.com/zeroclaw-labs/zeroclaw/issues/11648) | Web dashboard 配对输入仍限 6 位而非 32 位 | ❌ 暂无 PR | PairingCodePolicy 默认变更后未同步前端 |
| **S1** | [#11579](https://github.com/zeroclaw-labs/zeroclaw/issues/11579) | `save_dirty` 把未迁移文档错标 schema_version=3 | ✅ [#11218](https://github.com/zeroclaw-labs/zeroclaw/pull/11218) | V1/V2 配置消失，配置迁移跳过 |
| **S2 (degraded)** | [#9506](https://github.com/zeroclaw-labs/zeroclaw/issues/9506) | Email channel 不保 CC / Reply All | ❌ 暂无 PR | 邮件语义受损 |
| **S3 (minor)** | [#11586](https://github.com/zeroclaw-labs/zeroclaw/issues/11586) | ZeroCode sidebar 重启后失败会话被标绿（**已关闭**） | 🔧 修复中 | 已闭环 |
| **S3** | [#11612](https://github.com/zeroclaw-labs/zeroclaw/issues/11612) | ACP 重复 shell call 中断 agent loop（**已关闭**） | 🔧 修复中 | 已闭环 |
| **S3** | [#11654](https://github.com/zeroclaw-labs/zeroclaw/issues/11654) | JPEG admission 在内存上限检查前拷贝 + 解析 header | ✅ [#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637)（已闭环一阶段） | 评审延伸 ticket |
| **回归** | [#9965](https://github.com/zeroclaw-labs/zeroclaw/issues/9965) | Parallel Runtime Test 下 execut

> 注：P1 之上仍属 v0.8.6 与 v0.9.0 双重 release gate 名单的包含 #9646 / #9647 / #11579 / #9965，这批应作为下周重点闭环跟踪。

**核心建议**：保留维护者 #11579 / #11218 的修复轮次闭环后顺延至 v0.8.6 / v0.9.0 release notes；对 #11648 应主动加 help-wanted 标签以吸引 contributor。

---

## 6. 功能请求与路线图信号

新出现与已经存在多轮的 enhancement：

| 编号 | 提议 | 路线归属 | 当前节点 |
|---|---|---|---|
| [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887) | 大图降级而非丢弃 + `0 = disable multimodal limits` | provider/multimodal | 社区意见伯仲（降级默认 vs. 可配置），需要 maintainer 拍板 |
| [#11187](https://github.com/zeroclaw-labs/zeroclaw/pull/11187) | DefaultCapabilities 应用层组装，让 CLI 运行于其上 | v0.9.0 | XL，多轮 rebase，依赖 #11174 |
| [#11068](https://github.com/zeroclaw-labs/zeroclaw/pull/11068) | 按 sender role 收窄 channel turn | v0.9.0 | XL，与 peer_groups 互动尚需评审 |
| [#10412](https://github.com/zeroclaw-labs/zeroclaw/pull/10412) | SessionBackend 共享原子 ownership | v0.9.0 | XL 持续 review |
| [#10325](https://github.com/zeroclaw-labs/zeroclaw/pull/10325) | tool-elicitation 预轮提示（#7431 第 2/2 片） | runtime 增强 | XL，默认 off，fail closed |
| [#9809](https://github.com/zeroclaw-labs/zeroclaw/pull/9809) | 单 provider profile 支持多 model alias | provider | XL，作者守听，principal contributor |
| [#10546](https://github.com/zeroclaw-labs/zeroclaw/issues/10546) | cron crate 拆分 | v0.8.6 | 与 PR #10599 互补 |
| [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391) | bounded delegate workspace/tool ceiling 跨 turn 绑定 | v0.9.0 | XL，待 #11652（已完成）入库后合并 |
| [#11637](https://github.com/zeroclaw-labs/zeroclaw/pull/11637) | 优化 JPEG 预分配估算 | provider/runtime | L，待合并 |
| [#11301](https://github.com/zeroclaw-labs/zeroclaw/pull/11301) | committed-rename 状态恢复跨 CLI/gateway/RPC | v0.9.0 | XL 持续 review |

**信号归纳**：v0.9.0 重心明显放在「**进程外 gateway → 进程内传输层**」「**per-agent 强 boundary**」「**capabilities 在应用层组装**」三个核心理念上。建议关注 maintainer 是否会在下次 RFC 中肯定 [#10391](https://github.com/zeroclaw-labs/zeroclaw/pull/10391)（bounded delegate ceiling）与 [#9887](https://github.com/zeroclaw-labs/zeroclaw/issues/9887)（多模态降级）的路线。

---

## 7. 用户反馈摘要

- **安全/越权反馈（#9646 / #9647）**：用户明确指出 agent 之间可互读互改状态，期望 **per-agent ownership** 与 **read_knowledge_from 类型 grant** 机制。社区认为这是「共享全局资源 → scoped per-agent」的范式转变，意與 #9745 / #9746 PR 设计方向契合。
- **多模态（#9887）**：现有默认 5 MiB 限制下，大图被直接拒绝并告知模型「N 张图加载失败」，用户希望至少能 **降级到可处理尺寸**，或在受限环境中通过 `0` 完全禁用该闸口保护。
- **外部红队反馈（#11612）**：DefuzeX / KUMA 工具发现 supervised 模式下重复调用同一个 shell tool 会被判定为「重复 prompt-required tool call」并 abort ACP session。这表明 ZeroClaw 已经能被业内 fuzzer 工具发现 logic-level bug，反向说明项目安全敏感度提升。
- **迁移体验（#11579）**：用户报告 V1/V2 配置在保存后「升级后消失」——这是典型的 schema_version 写错造成配置 cold start 损坏。修复 PR #11218 已被接纳并迁移为 V4 转换路径。
- **UX 一致性（#11586）**：ZeroCode sidebar 在 daemon 重启后错误把失败会话标记为 ready，说明 session 状态没有持久化最终状态——已闭环修复。
- **Release size（#11580）**：x86_64 Linux 二进制距 64 MiB 上限仅剩 0.7 MB，CI 即将拒发，**需要 maintainer 决定何时调整闸门**——这是个明确的 maintainer-level 决策信号。
- **Web dashboard

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*