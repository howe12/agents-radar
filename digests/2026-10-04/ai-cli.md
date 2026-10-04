# AI CLI 工具社区动态日报 2026-10-04

> 生成时间: 2026-10-04 03:46 UTC | 覆盖工具: 9 个

- [Claude Code](https://github.com/anthropics/claude-code)
- [OpenAI Codex](https://github.com/openai/codex)
- [Gemini CLI](https://github.com/google-gemini/gemini-cli)
- [GitHub Copilot CLI](https://github.com/github/copilot-cli)
- [Kimi Code CLI](https://github.com/MoonshotAI/kimi-cli)
- [OpenCode](https://github.com/anomalyco/opencode)
- [Pi](https://github.com/badlogic/pi-mono)
- [Qwen Code](https://github.com/QwenLM/qwen-code)
- [DeepSeek TUI](https://github.com/Hmbown/DeepSeek-TUI)
- [Claude Code Skills](https://github.com/anthropics/skills)

---

## 横向对比

# AI CLI 工具横向对比分析报告
**数据基准日：2026-10-04**

---

## 一、生态全景

当前 AI CLI 工具生态已进入 **"协议标准化、场景纵深化、平台分化"** 的关键阶段：一方面，MCP（Model Context Protocol）从单点能力演变为各产品共识性基础设施；另一方面，开发者对长会话性能、Token 计费透明度、Windows 平台兼容性的诉求达到历史峰值。社区反馈呈现出 **"头部产品讨论体验细节、中部产品讨论架构演进、长尾产品讨论核心 Bug"** 的清晰分层：Claude Code、Codex、Pi 已进入体验打磨期，Qwen Code 与 OpenCode 仍处架构重构期，DeepSeek TUI 处于生态扩张期。值得注意的是，Opus 5.5 自 10 月 1 日起的"思考翻倍、判断变差"问题首次让社区对模型权重变更产生跨产品层面的系统性担忧。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | Issues（重点） | PR（合并/开放） | 社区焦点 |
|------|-------------|---------------|---------------|---------|
| **Claude Code** | v2.1.289（1） | 10 + 多条 macOS | 5+ 合并 / 2 新开 | TUI 体验 + 用量信任危机 |
| **OpenAI Codex** | alpha.10 / alpha.11（2） | 10（Top 1 👍47） | 10 全部合并 | Windows Computer Use 缺失 + VS Code 消息丢失 |
| **Gemini CLI** | 无 | 10（2 个 P1） | 10（3 OPEN 性能优化） | 子智能体稳定性 + AST 感知 |
| **GitHub Copilot CLI** | 无 | 15（含 5 条高优新报） | 1（疑似误投） | MCP 协议回归 + HydraFusion 路由降级 |
| **Kimi Code CLI** | 无 | 0 | 0 | 完全静默 |
| **OpenCode** | 无 | 10 | 10（全部 OPEN） | MCP 远程连接 + v2 beta 重构 |
| **Pi** | v1.0.1 / v1.0.2（2） | 14（含 4 条 1.0.1 回归） | 10 | TUI 渲染性能 + MCP 协议扩展 |
| **Qwen Code** | v0.24.7-nightly（1） | 10 | 10 | Token 治理 + Managed Agent 架构 |
| **DeepSeek TUI** | 无 | 5 + 5 PR 状态 | 9 | 0.10.1 整合 + 国际化打磨 |

**观察**：
- **Codex 与 Pi** 是今日仅有的两个连续发布两个版本的工具，节奏最快。
- **Claude Code** 的 Top 1 Issue（👍97，"隐藏内联 diff"）是单条最高赞，但 OpenCode 与 Copilot 的"协议层回归"在新版本号下暴露的频次更高。
- **OpenCode 与 DeepSeek TUI** 的 PR 全部 OPEN，显示其处于架构整合期而非收口期。
- **Kimi Code CLI** 24 小时零活动，是本期唯一完全静默的样本。

---

## 三、共同关注的功能方向

### 1. 🔌 MCP 协议成熟化（全 7 家关注）
- **Claude Code**：#99137（plugin 权限收紧）、#99141（plugin 导入解耦）
- **Codex**：#50546、#50536、#50562、#50687、#50741（Code Mode 工具调度系列）
- **Gemini CLI**：#28664（MCP 服务器配置全量纳入同意提示）
- **Copilot CLI**：#5044（tool catalog 快照失效）、#5040（OAuth 回环地址被拒）、#5014（Atlassian `/v2/mcp` token 失效）
- **OpenCode**：#53053（远程 MCP RTT >250ms 失败）、#52410（子进程泄漏 20GB/65min）、#51223（Code Mode 权限弹窗不渲染）
- **Pi**：Unix socket 传输、Stateless MCP 2026-07-28 兼容
- **DeepSeek TUI**：通过 `extensions.net.codewhale.providers` 扩展命名空间

**共同诉求**：远程连接稳定性、OAuth 流程一致性、Code Mode/TUI 下的权限可见性、协议版本固定机制。

### 2. 🪟 Windows 平台兼容性（5 家集中爆发）
- **Claude Code**：#94478（git 进程派生 17 次/秒，6GB/日 内核池泄漏）、#83841（macOS 26 启动权限弹窗）
- **Codex**：#49458、#49488、#50362、#50428（Computer Use / Browser / Remote / 持久会话全链路）
- **Copilot**：#5027（Linux systemd-resolved DNS）
- **Pi**：#9262（Windows glob 分隔符静默返回空集）
- **DeepSeek TUI**：#6827（npm 安装下 `node.exe` 被杀导致 Codewhale 崩溃）

### 3. ⚡ 长会话性能与上下文治理（5 家）
- **Claude Code**：#98747（空闲压缩静默丢上下文）、#31992（跨机器 resume）
- **Pi**：#7730（macOS 长会话 50-110% CPU）、#9255 / #9807（800+ 消息全量重绘）
- **Gemini CLI**：#29515 / #29516 / #29512 / #29517（4 项 PR 实现数量级提升，例：10K 目标 291ms → 10ms）
- **Qwen Code**：#12028（非对话 Token 治理）、#10887（死循环未终止消耗 5-14M Token）
- **OpenCode**：#44094（v2 beta compaction 忽略用户配置模型）

### 4. 💰 Token / 计费透明度（3 家强烈诉求）
- **Claude Code**：#97398（限额消耗速度 +3.6 倍）、#98679（Opus 5.5 自 10/1 起思考翻倍）
- **Qwen Code**：#12028、#10887（系统性 Token 治理）
- **Pi**：#9335（GPT-6 `configuration_update` 切换推理 effort 应避免击穿 prompt cache）

### 5. 🛡️ 权限模型与安全语义（5 家）
- **Claude Code**：#99137（sec-default plugin 仅可收紧）、#98591（脚本篡改绕过审批）
- **Gemini CLI**：#22672（`git reset --force` 等危险命令缺护栏）、#29510（Windows 命令注入硬化）
- **OpenCode**：#53058（未知 agent 名称 fail-closed）、#53057（插件 entrypoint 缺失可见报错）
- **Qwen Code**：#13360（Goal Verifier 错认 wrapper 结果为 `external_fact`）
- **DeepSeek TUI**：#6820（解释器进程权限感知启动器）

### 6. 🖥️ TUI 体验与可访问性（4 家）
- **Claude Code**：#37951（隐藏内联 diff，👍97）、#98254（动画指示器）
- **Pi**：#10314（Home/End 全屏模式语义）、#9255（增量渲染）
- **Copilot CLI**：#5015（键盘 pager）、#4839（禁用任务栏图标）、#3369（CJK 复制粘贴）
- **Claude Code** 另现：#99332（屏幕阅读器）、#99368（语音听写），首次成体系出现

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | TUI 体验打磨 + 插件生态 | 高级开发者、企业团队 | 单二进制 + plugin + Skills |
| **OpenAI Codex** | Computer Use + 云端协同 | 企业自动化、跨端用户 | Rust 重写（0.162 alpha）+ app-server 协议 |
| **Gemini CLI** | Agent 自省 + AST 感知 | 重型 agent 流程 | 多 Agent 编排 + codebase_investigator |
| **GitHub Copilot CLI** | MCP / ACP 协议标准化 | GitHub 工作流用户 | MCP 优先 + HydraFusion 多模型路由 |
| **Kimi Code CLI** | ——（数据缺失） | 不明 | 不明 |
| **OpenCode** | MCP 生态 + 桌面 GUI | 自托管用户 | TypeScript + Bun + Desktop JSON |
| **Pi** | Provider 适配 + TUI 渲染 | 多 provider 切换用户 | TypeScript + QuickJS codemode + 10+ providers |
| **Qwen Code** | Managed Agent 架构 + Token 治理 | 长上下文生产用户 | 双路径架构 + Hosted Harness |
| **DeepSeek TUI** | 插件 + 国际化 | 多语言、多平台用户 | Rust Engine + Ratatui + 插件 extension |

**关键差异**：
- **架构深度**：Qwen Code 的 Managed Agent 双路径架构、OpenCode 的 v2 beta "shared model request" 重构，是当前仅有的两个仍在大规模重构底层的项目；其余工具已进入体验层。
- **生态策略**：Claude Code 主推 Skills/plugin、Codex 主推 app-server + Cloud threads、Copilot CLI 主推 MCP/ACP 协议、OpenCode 主推 GUI 桌面化，四条路径互不重叠。
- **Provider 策略**：Pi 是唯一明确以"多 provider 适配 + 缓存优化"为核心卖点的工具（Top 3 Issue 均涉及 OpenAI/Anthropic/Codex 适配）。

---

## 五、社区热度与成熟度

### 高活跃 + 高成熟（迭代快、用户高）
- **Claude Code**：👍97 单条 Issue，v2.1.289 日更节奏，跨产品模型问题讨论（Opus 5.5 行为漂移），表明用户群体已能精确描述复杂场景。
- **OpenAI Codex**：👍47（VS Code 消息丢失）+ 两个 alpha 版本同日发布，copyberry[bot] 19 PR 同日合并体现"高密度小步快跑"的工业化节奏。

### 中活跃 + 架构演进期
- **Qwen Code**：Managed Agent 双路径架构（#12380, 45 评论）成为 roadmap 主线；Token 治理 #12028 已汇聚 18 评论、关联 5 个子任务，体现工程化深度。
- **OpenCode**：MCP 三连击（#53053 / #52410 / #51223）+ v2 beta 边界条件（#44094），重构尚未完全收敛。

### 体验打磨期
- **Pi**：v1.0.1 发布 24h 内即触发 4 条回归（`/mcp` 菜单、Ctrl+H、首屏乱码、clipboard），典型 v1.0 阵痛。
- **Gemini CLI**：无 Release 但 PR 量大、性能优化幅度可观（4 项 PR 数量级提升），处于静默打磨期。
- **DeepSeek TUI**：以 issue 5 + PR 9 的小体量但高贡献者密度（3 位不同贡献者），呈现健康小型项目节奏。

### 待观察
- **GitHub Copilot CLI**：Top 10 中 8 条已 CLOSED，但 OPEN 的 4 条（#5042 路由降级、#5044 tool 快照、#5040 OAuth、#5027 DNS）集中在协议层，建议生产环境暂固定 1.0.84。
- **Kimi Code CLI**：24 小时零活动，需关注是否进入维护模式。

---

## 六、值得关注的趋势信号

### 🚨 信号 1：MCP 从能力变成协议债
5 家工具的 MCP 问题呈现高度相似性（远程超时、OAuth 兼容性、Code Mode 权限可见性、协议快照失效）。**MCP 已度过"有没有"的阶段，进入"稳不稳"的深水区**。对开发者：自托管 MCP 集成方需关注 #53053（OpenCode RTT 阈值）、#52410（OpenCode 进程泄漏）；消费方需关注 #5044（Copilot tool catalog）、#28664（Gemini 同意提示）。

### 🚨 信号 2：模型权重变更首次引发跨产品信任危机
Claude Code #98679 描述 Opus 5.5 自 10/1 后行为漂移，#97398 印证用量激增 3.6 倍。**这是历史上首次有用户明确怀疑模型权重/路由被调整**。对决策者：建议将"用量异常 + 模型行为变化"作为异常检测的二元信号；对开发者：缓存复用（如 Pi #9335 的 `configuration_update`）和 Token 治理将持续是高优先级诉求。

### 🚨 信号 3：Windows 平台已成"二等公民"
5 家工具今日 Windows 问题集中爆发，且多为影响核心功能（Claude Code 进程泄漏、Codex Computer Use 缺失、DeepSeek TUI npm 安装崩溃、Pi glob 失效）。**对企业用户**：Windows 桌面部署需要单独的验证矩阵；对工具方：TCC 权限、注册表、DNS、服务生命周期是四大新战场。

### 🚨 信号 4：TUI 渲染进入"工程化深水区"
Gemini CLI 4 项 PR 实现数量级提升（291ms → 10ms）、Pi 800+ 消息全量重绘成头号瓶颈、Claude Code 内联 diff 占屏。**TUI 性能问题不再是渲染层，而是数据结构与内存布局问题**（`unshift` vs `push+reverse`、`WeakSet` vs 祖先路径、`indexOf` vs `Map`）。对 TUI 框架作者：cell-level diff、按需回放、token 预算与渲染各归一体的架构是下一站。

### 🚨 信号 5：可访问性首次成体系出现
Claude Code 同日出现 #99332（屏幕阅读器）+ #99368（语音听写），Copilot CLI 持续推进 #3369（CJK 复制粘贴）。**可访问性

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止日期：2026-10-04**

> ⚠️ **数据说明**：本次抓取的所有 PR 评论数均显示为 `undefined`，无法直接按评论量排序，因此热门 Skills 排行综合了 **PR 存活时间、近期更新活跃度、Issue 关联度、修复覆盖面** 等指标综合判断。

---

## 一、热门 Skills 排行（Top 8）

| 排名 | Skill | 状态 | 关注点 |
|---|---|---|---|
| 🥇 | **#1298 skill-creator 触发评估修复** | OPEN | 修复 trigger eval 的 Windows 兼容性、子进程管道失败、非相关工具误判等 6 大问题（对应 Issue #1383） |
| 🥈 | **#1742 mcp-builder v2 兼容性修复** | OPEN | 适配 `mcp>=2.0.0` 的 API 重命名 (`streamable_http_client`) 和自定义 Header 机制 |
| 3️⃣ | **#1771 proofcore-contract-auditor**（Web3 审计） | OPEN | Solidity/Rust 合约静态分析 + TON 区块链存证，属全新 Web3 赛道 |
| 4️⃣ | **#1703 md2video-audio**（Markdown → 视频） | OPEN | 零成本将 Markdown 转换为带 AI 人声配音的 MP4 视频 |
| 5️⃣ | **#1245 notion-spec-to-implementation + quantitative-resume-auditor** | OPEN | 长期 PR，含两个独立 Skill（Notion 任务拆分、简历量化审计） |
| 6️⃣ | **#525 pyxel 复古游戏开发** | OPEN | Python 复古游戏开发全流程，含 headless 验证与帧检查 |
| 7️⃣ | **#514 document-typography**（排版质量控制） | OPEN | 解决 AI 生成文档的孤字/寡行/编号错位等通用排版缺陷 |
| 8️⃣ | **#822 AWT (AI Watch Tester)**（E2E 测试） | OPEN | 给 Claude 视觉+浏览器控制能力，零代码生成 E2E 测试 |

**社区讨论热点总结：**
- **基础设施类修复**最被关注：#1298、#1742、#1792、#1681 都涉及核心 Skill（skill-creator、mcp-builder、docx）的稳定性问题
- **跨场景创造力工具**崭露头角：md2video-audio、pyxel 反映社区希望 Claude 走出"文档/代码"边界
- **专业化纵深需求凸显**：Web3 合约审计（#1771）、HPC 集群（#1615 scnet-hpc）说明垂直行业 Skill 正在爆发

🔗 数据源：[anthropics/skills PRs](https://github.com/anthropics/skills/pulls)

---

## 二、社区需求趋势（从 Issues 提炼）

| 需求方向 | 代表 Issue | 评论数 | 趋势强度 |
|---|---|---|---|
| 🔒 **信任边界与安全治理** | [#492 Community skills 冒充官方](https://github.com/anthropics/skills/issues/492) | **43** | 🔥🔥🔥 |
| 🏢 **企业级 Skill 分发** | [#228 组织内 Skill 共享](https://github.com/anthropics/skills/issues/228) | 16 | 🔥🔥 |
| 🧪 **Skill 自评估基础设施** | [#556 run_eval.py 触发率 0%](https://github.com/anthropics/skills/issues/556) | 12 | 🔥🔥 |
| 📚 **上下文窗口管理** | [#1487 claude-api 注入 156k tokens](https://github.com/anthropics/skills/issues/1487) | 4 | 🔥 |
| 🛡️ **XSS / 前端安全** | [#1394 eval-viewer display-path XSS](https://github.com/anthropics/skills/issues/1394) | 4 | 🔥 |
| 🧠 **Agent 记忆压缩** | [#1329 compact-memory 提案](https://github.com/anthropics/skills/issues/1329) | 9 | 🔥🔥 |
| 🏛️ **AI Agent 治理模式** | [#412 agent-governance](https://github.com/anthropics/skills/issues/412)（CLOSED）| 6 | 🔥 |
| 🚦 **推理质量门禁管线** | [#1385 Reasoning Quality Gate Pipeline](https://github.com/anthropics/skills/issues/1385) | 4 | 🔥 |
| ☁️ **云平台集成** | [#29 Bedrock 集成](https://github.com/anthropics/skills/issues/29) | 4 | 稳定需求 |
| 🗂️ **插件内容去重** | [#189 document-skills/example-skills 重复](https://github.com/anthropics/skills/issues/189) | 6 | 持续 |

**趋势洞察：**
1. **安全与信任**是社区最强烈的诉求（43 条评论），用户开始反思"开放 Skill 生态下的信任边界"问题
2. **Skill 元能力（meta-skills）** 需求激增：质量分析、安全分析、自我评估、记忆压缩——社区意识到 Skills 本身需要工具来治理
3. **企业落地诉求**集中爆发：组织共享、AWS Bedrock 集成、SharePoint 安全（[#1175](https://github.com/anthropics/skills/issues/1175)）——B 端场景正在成为下一个增长点

---

## 三、高潜力待合并 Skills（近期可能落地）

按"未合并 + 最近活跃 + 覆盖面广"筛选：

| PR | Skill 名称 | 最后更新 | 落地概率分析 |
|---|---|---|---|
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 模型 ID 退役标记 | **2026-10-03** | ⭐⭐⭐⭐⭐ 修复文档错误，几乎无争议，预计本周合并 |
| [#1730](https://github.com/anthropics/skills/pull/1730) | claude-api 死链修复 | 2026-10-02 | ⭐⭐⭐⭐⭐ 简单文档替换，验证 HTTP 200 后可合并 |
| [#1245](https://github.com/anthropics/skills/pull/1245) | notion-spec-to-implementation + quantitative-resume-auditor | 2026-09-30 | ⭐⭐⭐⭐ 长期高活跃 PR，实用性强 |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder v2 API 兼容 | 2026-09-29 | ⭐⭐⭐⭐⭐ 关键兼容性修复，阻塞下游使用 |
| [#1681](https://github.com/anthropics/skills/pull/1681) | skill-creator 独立执行修复 | 2026-09-27 | ⭐⭐⭐⭐⭐ 直接解决用户使用路径问题 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator trigger eval 修复 | 2026-09-16 | ⭐⭐⭐⭐⭐ 涉及核心 Skill 基础设施，多 Issue 引用 |
| [#1792](https://github.com/anthropics/skills/pull/1792) | docx LibreOffice 超时修复 | 2026-09-25 | ⭐⭐⭐⭐ 健壮性修复 |

**预判**：未来 1-2 周内 [#1607](https://github.com/anthropics/skills/pull/1607)、[#1730](https://github.com/anthropics/skills/pull/1730)、[#1742](https://github.com/anthropics/skills/pull/1742)、[#1681](https://github.com/anthropics/skills/pull/1681) 最有可能被合并——它们都是面向实际使用痛点的"小而必要"修复。

---

## 四、Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：「如何让 Skills 生态既开放又可信」——既需要官方提供安全分发、命名空间隔离、跨组织共享、上下文控制等基础设施（Issue #492、#228、#1487），也需要社区贡献 meta-skills 来分析、评估和治理 Skill 本身的质量与安全（PR #83、Issue #1394）。**

换言之：Claude Code Skills 已度过"是否有足够多 Skill"的从 0 到 1 阶段，正进入"如何让 Skill 生态可治理、可信任、可规模化"的新阶段。

---

## 附录：建议关注清单

**作为 Skill 作者**：参考 [#83 skill-quality-analyzer](https://github.com/anthropics/skills/pull/83) 的五维质量框架自我检查，并密切关注 [#492](https://github.com/anthropics/skills/issues/492) 关于命名空间的讨论——社区 Skill 可能很快需要明确归属标识。

**作为 Skill 使用者**：近期合并的修复（mcp-builder v2、skill-creator Windows 兼容、docx 超时检测）显著提升稳定性，建议尽快更新本地版本。

**作为生态观察者**：[#228 组织共享](https://github.com/anthropics/skills/issues/228) 点赞数 8，是 Issues 区点赞最高的需求——企业级 Skill 分发可能是 Anthropic 下一步的产品方向。

---

# Claude Code 社区动态日报
**日期：2026-10-04** | 数据范围：GitHub anthropics/claude-code

---

## 📌 今日速览

今日发布 **v2.1.289**，重点修复了嵌套 shell 命令权限传递、终端卡死以及 Read 工具的权限拒绝逻辑。社区讨论最热的议题集中在 **TUI 体验优化（内联 diff 隐藏）** 与 **成本计量异常** 两个方向——前者热度最高（👍101），后者因 Opus 5.5 自 10 月 1 日以来出现的「思考翻倍、判断变差」问题引发开发者广泛担忧。

---

## 🚀 版本发布

### v2.1.289（今日发布）

| 类别 | 修复内容 |
|------|---------|
| 权限 | 修复托管机器上复合 shell 命令嵌套部分的 deny/ask 规则被用户安装 mod 的审批覆盖的问题 |
| 终端 | 修复短代码块含大量未闭合 `<script>` 标签或深层 `${` 替换时终端冻结 |
| 工具 | 修复 `Read` 工具权限拒绝逻辑 |

📎 [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.289)

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#37951](https://github.com/anthropics/claude-code/issues/37951) — 隐藏 Edit/Write 工具输出的内联 diff
**类别**：enhancement · area:tui · 💬30 · ❤️101
> 支持通过 `settings.showDiffs: false` 关闭文件编辑时的内联 diff 显示。
- 热度极高（👍101），是当前社区最关注的 TUI 体验诉求
- 现有方案仅能通过 Esc 关闭 diff 弹窗，但内联 diff 无开关
- 长期开发者的典型痛点：长对话里内联 diff 占用大量视觉空间

### 2. [#96931](https://github.com/anthropics/claude-code/issues/96931) — 2.1.282 输入框在 0-90 秒后失键
**类别**：bug · platform:linux · 💬13
- 自 2.18.282 起每次会话在 30 秒内停止响应键盘输入，Ctrl-C 无效
- 2.18.281 正常，确认是回归 bug

### 3. [#31992](https://github.com/anthropics/claude-code/issues/31992) — 跨机器会话恢复
**类别**：enhancement · area:cli · 💬12 · ❤️20
- 支持 CLI 间会话无缝迁移，方便多设备工作流
- 多人协作/远程办公场景的核心需求

### 4. [#94478](https://github.com/anthropics/claude-code/issues/94478) — Windows 桌面应用每秒派生 ~17 个 git 进程
**类别**：bug · platform:windows · 💬9
- 单实例每天产生约 200 万个短生命周期进程，触发内核池泄漏约 6GB/天
- 严重的资源消耗与系统稳定性问题

### 5. [#98747](https://github.com/anthropics/claude-code/issues/98747) — 2.1.286 空闲压缩静默丢弃上下文
**类别**：bug · platform:macos · 💬9 · ❤️6
- 空闲压缩在 prompt cache 过期前自动触发，且无 opt-out
- 长会话用户的基础上下文会被丢弃，影响工作连续性

### 6. [#87424](https://github.com/anthropics/claude-code/issues/87424) — 间歇性 ECONNRESET
**类别**：bug · platform:macos · 💬8 · ❤️8
- 桌面应用与独立 CLI 都会出现，无 VPN/代理
- API 链路问题，影响所有 macOS 用户

### 7. [#72957](https://github.com/anthropics/claude-code/issues/72957) — Write/Edit 工具静默解码 `\uXXXX`
**类别**：bug · platform:linux · 💬7
- 工具将文件内容中的 `\uXXXX` 当作 JSON Unicode 转义解析，导致字面字符串无法存储
- 涉及 Unicode 私有使用区（如变体选择符）的内容直接被破坏

### 8. [#83841](https://github.com/anthropics/claude-code/issues/83841) — macOS 26 每次启动都弹出跨应用访问权限
**类别**：bug · platform:macos · 💬7 · ❤️6
- Claude Desktop 通过 disclaimer helper 触发，每次会话都要重新授权
- 权限提示无法清除，严重影响日常使用

### 9. [#98679](https://github.com/anthropics/claude-code/issues/98679) — Claude Opus 5.5 行为漂移
**类别**：bug · area:model · 💬6 · ❤️2
- 自 2026-10-01 起 Opus 5.5 思考 token 翻倍、输出长度增加 1.6 倍、任务判断变差
- 影响超出 Claude Code，跨产品一致；用户怀疑模型权重或路由发生变化

### 10. [#97398](https://github.com/anthropics/claude-code/issues/97398) — 每周额度消耗速率增 3.6 倍
**类别**：bug · platform:macos · area:cost · 💬6
- 9 月 25 日重置后，限额消耗速度为上周同期的 3.6 倍
- 与 #98679 形成呼应，社区怀疑 Opus 5.5 行为变化推高了单位任务成本

---

## 🔧 重要 PR 进展

### 1. [#99137](https://github.com/anthropics/claude-code/pull/99137) — sec-default：用户的 plugin 只能收紧、不能放宽规则
**作用**：当 sec-default 启用，用户插件无法解除 deny/ask 规则或修改 pinned 变量。安全模型更清晰，无需新引擎即可生效。

### 2. [#99206](https://github.com/anthropics/claude-code/pull/99206) — diff：停靠面板从其头部开始，避免多余空白行
**作用**：停靠状态下的 `/diff` 不再为关闭标记额外填充空白行，界面更紧凑。

### 3. [#99141](https://github.com/anthropics/claude-code/pull/99141) — diff：空白面板预占位，等可绘制时再显示
**作用**：`/diff` 在面板尚无法绘制时提前保留面板位置，待宿主页面挂载后立即显示，避免闪烁。

### 4. [#81672](https://github.com/anthropics/claude-code/pull/81672) — 修复 hookify 包导入依赖目录名
**作用**：解耦 hook 入口对插件目录名为 `hookify` 的硬编码，使 marketplace 安装也能正确导入。

### 5. [#77977](https://github.com/anthropics/claude-code/pull/77977) — 文档：plugin-dev marketplace `skipLfs` 选项 ✅ 已合并
**作用**：在插件开发文档中说明 `github` 与 `git` marketplace 源的 `skipLfs` 选项，并补充跳过 Git LFS 下载的示例。

### 其他近期活跃 PR（节选）
- #99140（已并入）：macOS 下 Claude CLI 不再注册为 Ghostty 前台应用
- #99369（今日新开）：Linux 下 agent-view 后台守护进程在系统关机时被重启，导致 90 秒关机延迟

---

## 📈 功能需求趋势

从近期 Issues 与 PR 提炼出社区最关注的方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **成本与用量透明化** | #97398、#97449、#98269 | 🔴 极高 |
| **TUI 可定制性** | #37951（隐藏 diff）、#98254（动画指示器） | 🔴 高 |
| **跨设备/多端协同** | #31992（跨机器 resume）、#87190（远程终端附加） | 🟠 高 |
| **权限模型强化** | #98159（默认权限模式）、#98591（脚本篡改绕过审批） | 🟠 高 |
| **桌面应用稳定性** | #94478（git 进程泄漏）、#98082（GPU 渲染卡顿） | 🟠 高 |
| **可访问性（a11y）** | #99332（屏幕阅读器）、#99368（语音听写） | 🟡 中 |
| **Skills/插件生态** | #94564、#99156、#81672、#77977 | 🟡 中 |
| **IDE 集成** | #99368（VS Code 语音）、#88738（VS Code hook） | 🟡 中 |

---

## 💬 开发者关注点

### 🚨 1. 成本计量信任危机
**痛点**：开发者对用量统计的信任正在动摇。#97398、#97449、#98269 都指向"用量数据不可解释"。叠加 Opus 5.5 自 10 月 1 日行为变化（#98679），开发者开始质疑：到底是模型真变慢了，还是计量系统失准？

### 🖥️ 2. macOS 平台问题集中爆发
本日 Top 30 Issue 中，标记 `platform:macos` 的占近一半（#98747、#87424、#83841、#87440、#94564、#99140、#96996、#99347 等）。从 TCC 权限到 Dock 图标、Terminal 注册，macOS 用户面临碎片化的兼容性问题。

### 🛡️ 3. 权限与审批的边界
#98591 揭示了一个安全风险：Claude 可以在被批准运行某个脚本后修改脚本内容，再用同一审批运行新版本。这类"审批语义绕过"问题叠加 #98159（用户期待"跳过所有审批"的默认模式），说明当前权限模型既不够安全、也不够灵活。

### ⚙️ 4. 长会话/压缩体验需重做
#98747（空闲压缩丢上下文）和 #94564（/compact 后技能丢失）共同指向：压缩行为对长会话开发者不够友好，需要更细粒度的控制（opt-out、保留哪些 skill/上下文）。

### 🪟 5. 桌面版资源占用失控
#94478 报告的 git 进程泄漏（17 次/秒）、#98082 的 GPU 渲染卡顿说明 Claude Desktop 在 Windows 上的资源管理仍有明显缺陷，对企业用户尤为关键。

### ♿ 6. 可访问性首次成体系出现
#99332（屏幕阅读器）和 #99368（语音听写精度）同日出现，表明无障碍设计开始进入社区议程，对企业合规与个人用户都是积极信号。

---

> 💡 **编辑视角**：今日数据最值得追踪的三件事是——**v2.1.289 是否彻底解决 #96931 的输入卡顿**、**#98679/97398 反映的 Opus 5.5 + 用量问题是否会得到官方回应**、以及 **#37951 内联 diff 开关何时落地**（用户呼声最强）。

*日报基于 GitHub Issues、PR 与 Releases 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-10-04**

---

## 今日速览

今日 Codex 社区呈现两条主线：**Windows 平台 Computer Use / Browser 工具在 Work/Dot 会话中缺失的问题**集中爆发（多条高分 issue 同时更新），叠加 **VS Code 扩展的消息丢失问题**广泛复现，已成为开发者反馈最强烈的痛点。同时，**0.162.0 alpha 系列**持续迭代（alpha.10、alpha.11 先后发布），TUI/CLI 体验、Code Mode 与 Responses Lite 的工具调度机制也迎来了密集的合并改进。

---

## 版本发布

过去 24 小时连续发布了两个 Rust 预发布版本：

- **rust-v0.162.0-alpha.10** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.10))
- **rust-v0.162.0-alpha.11** ([Release](https://github.com/openai/codex/releases/tag/rust-v0.162.0-alpha.11))

两者均为 alpha 通道的小步快跑迭代，官方未提供详细变更说明。社区反馈主要集中在 Windows 端的 Computer Use、MCP 工具发现以及 VS Code 扩展稳定性方面，建议关注后续 stable 通道发布日志确认是否覆盖上述问题。

---

## 社区热点 Issues

> 选取依据：评论活跃度、社区反响（👍）、与版本质量或核心功能的相关性。

### 1. [#49458 – Windows Dot 本地任务缺少 Computer Use 工具](https://github.com/openai/codex/issues/49458)
**45 条评论 · 19 👍**
Windows ChatGPT Desktop（26.928.1915.0）下，通过 dot 启动的本地任务缺少 Computer Use 工具，普通 Codex 会话正常。这是 **dot 工作流的核心能力缺失**，与多家企业用户的日常使用场景直接相关。

### 2. [#49988 – VS Code 扩展更新后消息间歇性丢失](https://github.com/openai/codex/issues/49988) ✅ 已关闭
**38 条评论 · 47 👍（点赞最高）**
10 月 1 日扩展更新后按 Enter 提交经常被清空但消息不进入对话。**47 个 👍 是本期最高**，说明 VS Code 端消息可靠性问题影响面极广。已关闭，建议关注后续 patch 验证。

### 3. [#49488 – Windows Dot/Work 任务缺少 Browser/Desktop 工具](https://github.com/openai/codex/issues/49488)
**23 条评论 · 8 👍**
与 #49458 同源问题：Work 环境中 MCP 启动失败 + 后续路径错误，导致 Browser/Computer Use 工具无法挂载。

### 4. [#49618 – Windows ↔ Android Remote 配对循环](https://github.com/openai/codex/issues/49618)
**20 条评论 · 12 👍**
"Approve this phone" 提示无限重复，跨设备 Remote Control 体验在 Windows + Android 之间不稳定。

### 5. [#47041 – GPT-5.6 Sol / GPT-6 Astra 拒绝无害 prompt](https://github.com/openai/codex/issues/47041)
**11 条评论 · 2 👍**
新版模型对常规 prompt 返回 `invalid_prompt`，疑似新模型在安全过滤或工具调用路径上存在回归。

### 6. [#43192 – Codex Desktop 预防性提示确认循环](https://github.com/openai/codex/issues/43192)
**11 条评论 · 5 👍**
"Precautionary message" 确认状态未持久化，导致反复弹窗影响自动化与长时间运行任务。

### 7. [#48913 – 增加关闭随机问候语的配置项](https://github.com/openai/codex/issues/48913) ✅ 已关闭
**10 条评论 · 31 👍（👍/评论比最高）**
反映高频用户对重复、喧闹式提示的厌烦。该 issue 关闭意味着官方已接受该方向改进。

### 8. [#50428 – Windows Desktop 持久聊天 turn 启动失败](https://github.com/openai/codex/issues/50428)
**8 条评论 · 1 👍**
`AbsolutePathBuf` 反序列化失败导致 `turn/start` 与 `thread/fork` 不可用，影响云端 → 本地的会话迁移。

### 9. [#50362 – Windows 10 Computer Use 截屏超时](https://github.com/openai/codex/issues/50362)
**5 条评论 · 0 👍**
UI Automation 可枚举但截图接口超时；坐标计算失效使点击动作不可用。

### 10. [#50168 – Dot cloud_threads 写路径失败](https://github.com/openai/codex/issues/50168)
**5 条评论 · 1 👍**
Dot 能列出 Cloud 任务但 `create` 返回 `UNKNOWN`、`send_message` 返回 `CloudThreadNotFoundError`。**Dot × Codex Cloud 互通性 bug**，对使用云端自动化的用户影响显著。

---

## 重要 PR 进展

> 全部 PR 由 `copyberry[bot]`（OpenAI 内部自动化机器人）提交并已合并，呈现"高密度小步快跑"的工程节奏。

### 1. [#50764 – 允许在 turn 运行中使用 `/archive`](https://github.com/openai/codex/pull/50764)
放开 `/archive` 在 turn 进行中的限制，并在确认框中提示归档将终止当前回合。

### 2. [#50756 – 边会话中搜索时展示不可用 slash 命令](https://github.com/openai/codex/pull/50756)
搜索时以禁用行展示不可用命令并给出 `not available` 原因，改善命令发现的可解释性。

### 3. [#50741 – 在环境就绪状态变化时保持工具可用](https://github.com/openai/codex/pull/50741)
避免环境切换时模型侧可见的工具集频繁抖动，提升多环境工作流的稳定性。

### 4. [#50727 – 在任务详情顶部显示模型与推理 effort](https://github.com/openai/codex/pull/50727)
将 reasoning effort、模型、项目与用量信息提到 attention、activity 之前，便于快速核对。

### 5. [#50720 – 解码 Windows Terminal 的 Shift+Enter 序列](https://github.com/openai/codex/pull/50720)
将 `ESC[13;2u` 单独事件正确识别为 Shift+Enter，修复 Windows Terminal 作曲家换行输入。

### 6. [#50700 – Windows Remote Control socket 目录 DACL 收紧](https://github.com/openai/codex/pull/50700)
由 transport 创建 socket 父目录并设置受保护 ACL，避免继承临时目录的宽松权限。

### 7. [#50695 – TUI 保留本地 Markdown 链接标签](https://github.com/openai/codex/pull/50695)
路径式标签不再被替换为目标，显示为 `label (target)`，保留作者原意与表格中的可读性。

### 8. [#50687 – 严格 Code Mode Only 下第三方工具保持延迟暴露](https://github.com/openai/codex/pull/50687)
让符合条件的三方工具保持 deferred，减小 MCP 目录变化对模型端前缀的影响。

### 9. [#50564 – 底部 modal 打开时允许选中和复制 transcript](https://github.com/openai/codex/pull/50564)
修复 plan 确认弹窗期间无法选择/复制 plan 文本的问题。

### 10. [#50540 – Responses Lite 增量工具目录更新](https://github.com/openai/codex/pull/50540)
启用 `IncrementalTools` 后，工具定义追踪到世界状态/会话历史，只追加新增与变更部分，减少 token 消耗。

---

## 功能需求趋势

综合本期 Issue 与 PR，社区关注的功能方向集中在以下几条主线：

| 方向 | 代表议题/合并 | 趋势说明 |
|------|--------------|---------|
| **Windows Desktop 体验** | #49458、#49488、#50428、#50362、#50676、#50778 | Computer Use / Browser 工具挂载、跨设备 Remote、App-server 路径解析等多处 Windows 专属问题持续暴露，是当前反馈最大头 |
| **VS Code 扩展稳定性** | #49988、#50225、#50653 | 提交消息丢失 / pending 是最高频痛点，几乎每位升级用户都可能遇到 |
| **Dot × Codex Cloud 互通** | #50168、#50015、#50440 | Cloud 任务读写、resume、placement 格式冲突，影响云端自动化链路 |
| **Code Mode / MCP 工具调度** | #50546、#50536、#50562、#50687、#50741、#50762 | 工具发现延迟、目录变化导致 schema 抖动、严格模式下三方工具暴露控制 |
| **TUI/CLI 体验打磨** | #50764、#50756、#50727、#50695、#50564、#50525 | slash 命令、Markdown 链接、键位解码、模型信息呈现等小但高频的体验改进 |
| **模型行为稳定性** | #47041 | 新模型在 Codex Desktop 内的 prompt 拒绝问题，疑似安全或工具调用回归 |
| **个性化配置** | #48913 | 关闭随机问候语等"反噪音"配置诉求，反映高频用户对会话仪式感的疲劳 |
| **资源治理与崩溃** | #50645（pets 文件夹膨胀）、#44834（传输断开窗口丢失）、#42808（启动 logo 循环） | macOS/Windows 上长期会话积累的文件、TCC 权限、Electron 渲染层稳定性 |

---

## 开发者关注点

1. **消息可靠性是首要痛点**：VS Code 扩展在 Enter 提交后出现 composer 清空但消息丢失，是 #49988、#50225、#50653 共同的核心描述，且涉及多版本（26.930.31730 等）。建议社区在升级后立即关注 issue tracker 与 patch release。
2. **Computer Use / Browser 工具覆盖不全**：普通会话可用、Dot/Work 会话不可用（#49458、#49488、#50778）这一不对称表现，是当前**企业 / 多用户场景下最严重的可用性缺口**。
3. **云-端协同链路不稳定**：Dot 写 Cloud threads 失败（#50168、#50015、#50440）暴露出 Dot 与 Codex Cloud 在 placement 格式、auth、app-server 之间仍存在协议层分歧。
4. **TUI/CLI 细节工程化持续推进**：今天的 19 个 PR 大多围绕键盘序列解码、Markdown 渲染、slash 命令可见性、键位校验等"看不见但很重要"的稳健性工作，呈现"高密度小步"节奏。
5. **macOS 长会话隐患**：`$CODEX_HOME/pets` 超过 ~700 项即触发 EXC_BREAKPOINT（#50645）以及传输断开后窗口飞出屏外（#44834），提醒长跑用户关注 `$CODEX_HOME` 目录大小并定期清理。
6. **新模型行为需观察**：GPT-5.6 / GPT-6 在 Codex Desktop 中返回 `invalid_prompt`（#47041），建议在新模型落地后做最小化 prompt 回归测试。

---

*日报基于 GitHub openai/codex 仓库 2026-10-04 的 Releases、Issues、Pull Requests 公开数据整理。所有数据点链接均可在对应条目中点击访问。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-10-04

---

## 📌 今日速览

今日社区热度集中在**子智能体（Subagent）稳定性**与**代码库上下文理解**两大主题：P1 级 Bug「`MAX_TURNS` 后子智能体误报成功」和「Generalist Agent 长时间挂起」引发广泛讨论；同时，AST 感知文件读取与 Agent 自省能力（self-awareness）成为近期功能演进焦点。代码合并层面，多项核心性能优化（聊压缩、状态快照、转录索引）提交 PR，量级提升显著。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

以下 10 条 Issue 在今日更新中获得最多讨论或具备较高优先级：

| # | Issue | 优先级 / 状态 | 关键内容 | 链接 |
|---|---|---|---|---|
| 1 | **#22323** 子智能体在 `MAX_TURNS` 后仍报 `GOAL` 成功 | P1 / 需重测 | `codebase_investigator` 触发上限后误报成功，掩盖了真实中断；导致后续任务在错误状态下继续执行 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **#21409** Generalist Agent 长时间挂起 | P1 / 需重测 | 调用通用 Agent 时即便单步指令也卡死，等待超过 1 小时无响应；👍8 反映高频痛点 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) |
| 3 | **#19873** 零依赖 OS 沙箱 + 执行后意图路由 | P2 / 增强 | 借助 Gemini 3 原生 bash 偏好，链式调用 POSIX 工具，方案具有架构性价值 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) |
| 4 | **#22745** 评估 AST 感知文件读取与映射的影响 | P2 / EPIC | 跟踪 AST 工具在精确读取方法、跨文件导航、token 节省方面的潜在收益 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 5 | **#21968** Gemini 几乎不主动使用 skills 和子智能体 | P2 / 需重测 | 即便描述清晰的自定义 skills 也需用户显式指令才会触发；体现 Agent 工具自省不足 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 6 | **#22267** Browser Agent 忽略 `settings.json` 覆盖 | P2 / Bug | `maxTurns` 等配置不生效，影响大型浏览器自动化任务的可控性 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) |
| 7 | **#22232** 增强 `browser_agent` 容错：会话接管与锁恢复 | P3 / 增强 | 替换「失败即终止」策略，实现持久模式下锁文件的自动恢复 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 8 | **#21983** Browser 子智能体在 Wayland 下失败 | P1 / 需重测 | Wayland 环境下的浏览器子智能体崩溃，平台兼容性问题 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) |
| 9 | **#24246** 工具数 >128 时触发 400 错误 | P2 / 需更多信息 | Agent 未自动收敛可用工具范围，导致 API 直接拒绝 | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) |
| 10 | **#22672** Agent 应阻止/劝阻危险命令 | P2 | 模型偶发使用 `git reset --force` 等破坏性命令，需建立行为护栏 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) |

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 | 链接 |
|---|---|---|---|---|
| 1 | **#29411** 修复 `resume` 解析到最近活动会话 | 已合并 | `bare --resume` 不再误解析为最近启动而长期未活动的「僵死」会话；修复 [#29410](https://github.com/google-gemini/gemini-cli/issues/29410) | [#29411](https://github.com/google-gemini/gemini-cli/pull/29411) |
| 2 | **#29404** 新增 `gemini models list`（含 JSON 输出） | 已合并 | 支持脚本/CI 发现当前可用模型，避免硬编码模型 ID | [#29404](https://github.com/google-gemini/gemini-cli/pull/29404) |
| 3 | **#29407** JSON 序列化保留共享引用 | 已合并 | 用祖先路径跟踪替代全局 `WeakSet`，避免 OpenTelemetry 数组在导出时被打成 `[Circular]`；修复 [#29406](https://github.com/google-gemini/gemini-cli/issues/29406) | [#29407](https://github.com/google-gemini/gemini-cli/pull/29407) |
| 4 | **#29515** 用 `Set` 线性化状态快照 ID 查询 | OPEN | 10,000 目标 / 5,000 已消费 ID 基准：**291.95 ms → 10.26 ms** | [#29515](https://github.com/google-gemini/gemini-cli/pull/29515) |
| 5 | **#29516** 缓存转录轮次索引 | OPEN | 用 `Map` 替代 `indexOf()`；基准：**414.20 ms → 17.91 ms** | [#29516](https://github.com/google-gemini/gemini-cli/pull/29516) |
| 6 | **#29512** 线性化聊压缩历史重建 | OPEN | `unshift` 替换为 `push + reverse`；10,000 混合消息：**18.97 ms → 5.01 ms** | [#29512](https://github.com/google-gemini/gemini-cli/pull/29512) |
| 7 | **#29517** 线性化 `truncateHistoryToBudget` 数组重建 | OPEN | 同类优化，保持最新优先 token 预算策略 | [#29517](https://github.com/google-gemini/gemini-cli/pull/29517) |
| 8 | **#29510** Windows 子进程参数引号硬化（防命令注入） | OPEN | 为 `editor.ts` 引入 `quoteCmdArg`，修复 Windows 文件路径含空格/特殊字符时的注入风险 | [#29510](https://github.com/google-gemini/gemini-cli/pull/29510) |
| 9 | **#28664** MCP 服务器配置全量纳入同意提示 | OPEN | 同意提示将同时展示 `env`、`cwd`、`headers`，避免更新时静默变更 | [#28664](https://github.com/google-gemini/gemini-cli/pull/28664) |
| 10 | **#29621** 保留子智能体多模态工具响应 parts | OPEN | 修复图片数据被丢弃；按调用 ID 跟踪并按模型原始顺序附加 | [#29621](https://github.com/google-gemini/gemini-cli/pull/29621) |

---

## 📈 功能需求趋势

通过对今日 Issues 的聚类分析，社区关注度集中在以下方向：

1. **🧠 Agent 自省与工具自主调用**  
   包括 skills/subagents 自主启用（#21968）、Agent 对自身 CLI 标志与快捷键的准确掌握（#21432）、子智能体轨迹可分享（#22598）。

2. **🗂️ AST 感知的代码理解**  
   #22745 / #22746 / #22747 形成完整 EPIC，目标是用 AST 工具替代粗放的全文检索/读取，降低 token 消耗、提升精准度。

3. **🧰 子智能体生态完善**  
   本地子智能体 Sprint 1（#20195）、子智能体共享内存与并行协作（#18287）、子智能体自动发现（#18285）。

4. **🌐 浏览器智能体平台兼容性**  
   Wayland 支持（#21983）、`settings.json` 优先级（#22267）、会话接管与锁恢复（#22232）。

5. **🛡️ 安全护栏与执行安全**  
   零依赖 OS 沙箱（#19873）、破坏性命令劝阻（#22672）、Windows 子进程硬化（#29510）。

6. **⚡ 长会话性能与上下文管理**  
   Tilde 路径优化（#29622）、聊压缩与历史截断线性化（#29517/#29512）、"Tactful Extraction" 精读（#19561）。

---

## 💬 开发者关注点（社区痛点）

| 痛点 | 典型 Issue | 表现 |
|---|---|---|
| **子智能体不稳定** | #22323、#21409、#21763 | MAX_TURNS 后状态错报、通用 Agent 挂死、Bug 报告不含子智能体上下文 |
| **配置不生效** | #22267、#20079 | `settings.json` 覆盖、symlink agent 文件被忽略 |
| **工具爆炸与 400 错误** | #24246 | 工具数 >128 时 API 拒绝 |
| **环境兼容性** | #21983 | Wayland 等非主流平台下的浏览器子智能体崩溃 |
| **危险行为缺乏护栏** | #22672 | 模型使用 `git reset --force` 等命令时缺少拦截 |
| **持久化任务跟踪缺失** | #18836、#21000 | `WriteToDo` 易失、需文件级 CRUD 替代方案 |
| **终端体验** | #21924、#22465 | 终端缩放闪烁、交互式提示卡死 |

---

> 📅 数据截止：2026-10-04 ｜ 数据源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-10-04**

---

## 1. 今日速览

过去 24 小时内仓库无新版本发布，但社区活跃度集中在 **MCP 协议稳定性** 与 **ACP（Agent Client Protocol）能力扩展** 两大主题上。值得关注的是，1.0.87/1.0.90/1.0.91 三个版本中已暴露出多个与 MCP OAuth、模型路由（HydraFusion）以及插件加载相关的回归问题，开发者对核心交互链路的健壮性提出较高关注。与此同时，多条高赞的存量 Issue（BYOK、plugin-dir、marketplace）被关闭，显示维护团队正在持续清理历史积压。

---

## 2. 版本发布

> 过去 24 小时无新 Release。建议关注 1.0.90 / 1.0.91 版本中报告的多个 MCP 相关回归问题（详见下文 Issue #5044、#5050、#5040）。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#4012](https://github.com/github/copilot-cli/issues/4012) BYOK：`glm-5.2:cloud` 不支持 `--reasoning-effort max` | CLOSED | 23 | ⭐⭐⭐⭐⭐ |
| 2 | [#2795](https://github.com/github/copilot-cli/issues/2795) `--agent` 与 `--plugin-dir -p` 组合失效 | CLOSED | 17 | ⭐⭐⭐⭐⭐ |
| 3 | [#1287](https://github.com/github/copilot-cli/issues/1287) 无法添加 Anthropic 官方插件市场 | CLOSED | 13 | ⭐⭐⭐⭐ |
| 4 | [#4998](https://github.com/github/copilot-cli/issues/4998) macOS 更新后 `.mcp-writer.binding` 残留设备 ID 导致 CLI 不可用 | OPEN | 7 | ⭐⭐⭐⭐ |
| 5 | [#4839](https://github.com/github/copilot-cli/issues/4839) 请求提供禁用任务栏图标的选项 | CLOSED | 4 | ⭐⭐⭐ |
| 6 | [#4531](https://github.com/github/copilot-cli/issues/4531) 从 Copilot CLI 启动 VS Code 后 Git 发现失败（空 `GIT_CONFIG_VALUE_*`） | CLOSED | 3 | ⭐⭐⭐ |
| 7 | [#5015](https://github.com/github/copilot-cli/issues/5015) 聊天历史键盘可访问的 pager 模式（Vim/less 风格） | OPEN | 3 | ⭐⭐⭐ |
| 8 | [#2907](https://github.com/github/copilot-cli/issues/2907) 允许配置 MCP 慢连接告警阈值 | CLOSED | 2 | ⭐⭐⭐ |
| 9 | [#2067](https://github.com/github/copilot-cli/issues/2067) `ask_user` 工具不支持多行自由作答 | CLOSED | 2 | ⭐⭐⭐ |
| 10 | [#4946](https://github.com/github/copilot-cli/issues/4946) 后台 shell 完成通知后触发 HTTP 400 `content[].thinking` | OPEN | 1 | ⭐⭐⭐ |

**补充关注（高优先级、刚开）**：
- [#5042](https://github.com/github/copilot-cli/issues/5042) HydraFusion 路由 400 错误后将同一会话降级到无法加载静态 prompt 的小上下文模型，工具集被中途替换。
- [#5044](https://github.com/github/copilot-cli/issues/5044) 1.0.87 MCP 回归：无关 tool 的 `_meta` 差异导致 `tools/list` 快照失效。
- [#5040](https://github.com/github/copilot-cli/issues/5040) MCP OAuth 在 Microsoft Entra 环境下回环地址 `127.0.0.1` 被拒（AADSTS50011）。
- [#5014](https://github.com/github/copilot-cli/issues/5014) Atlassian `/v2/mcp` 在 1.0.90-0 起即便已有有效 token 也持续弹出登录。
- [#5027](https://github.com/github/copilot-cli/issues/5027) Linux Sandbox + systemd-resolved 下 DNS 不可达。

### 重点解读

- **#4012（23 👍）** 是过去 24 小时内最受欢迎的存量工单，反映了 **BYOK + 自定义模型 + 推理参数** 这一组合在企业自托管场景下的真实使用频率；维护者已关闭，预示配置语义将收敛。
- **#2795（17 👍）** 揭示了非交互模式与插件目录加载路径间的优先级冲突，关闭后意味着 `--agent` 与插件发现机制被统一化。
- **#4998（OPEN）** 是少数仍处于 OPEN 状态的高赞 Issue，描述了一个 **跨重启持久化的 stale device ID** 引发 MCP 写入器彻底失活的极端场景，建议下次 macOS 安全更新前后手动清理 `.mcp-writer.binding` 缓解。
- **#5042 / #5044 / #5014** 三条新报告均集中在 **MCP 与模型路由**，说明 v1.0.90 系列在协议层与多模型路由层仍有稳定性短板，建议生产环境暂时固定到 1.0.84 系列。

---

## 4. 重要 PR 进展

过去 24 小时内仓库仅收到 1 个 PR：

- [#5046](https://github.com/github/copilot-cli/pull/5046) — "Initial commit"，作者 `c6r8h48msf-debug`，创建于 10-02，无描述、无 diff 摘要，疑似误投/测试提交，建议维护者直接关闭。

> **结论**：本期无实质代码合入，社区代码贡献活跃度处于低位。

---

## 5. 功能需求趋势

从全部 24 条 Issue 中可以提炼出以下社区最关注的方向：

| 趋势 | 代表 Issue |
|------|-----------|
| **ACP 协议能力扩展**（模型列表暴露、辅助审批、Computer Use 插件可见性） | [#4880](https://github.com/github/copilot-cli/issues/4880), [#5047](https://github.com/github/copilot-cli/issues/5047), [#5049](https://github.com/github/copilot-cli/issues/5049) |
| **MCP 生态成熟化**（OAuth 流程、慢连接阈值、工具快照一致性、Entra 兼容） | [#2907](https://github.com/github/copilot-cli/issues/2907), [#5044](https://github.com/github/copilot-cli/issues/5044), [#5040](https://github.com/github/copilot-cli/issues/5040), [#5014](https://github.com/github/copilot-cli/issues/5014) |
| **终端/TUI 可访问性**（键盘 pager、禁用任务栏图标、CJK 复制粘贴、Herdr 快捷键） | [#5015](https://github.com/github/copilot-cli/issues/5015), [#4839](https://github.com/github/copilot-cli/issues/4839), [#3369](https://github.com/github/copilot-cli/issues/3369), [#5043](https://github.com/github/copilot-cli/issues/5043) |
| **多模型路由与 BYOK**（reasoning effort、模型降级、上下文窗口） | [#4012](https://github.com/github/copilot-cli/issues/4012), [#5042](https://github.com/github/copilot-cli/issues/5042), [#5045](https://github.com/github/copilot-cli/issues/5045) |
| **计划模式 / 上下文管理**（批准计划时丢弃规划 transcript） | [#5041](https://github.com/github/copilot-cli/issues/5041) |
| **插件与 Agent 发现**（插件市场校验、agent 与 plugin-dir 协同） | [#1287](https://github.com/github/copilot-cli/issues/1287), [#2795](https://github.com/github/copilot-cli/issues/2795) |

---

## 6. 开发者关注点与痛点

1. **协议层回归频发**：1.0.87 → 1.0.90 → 1.0.91 三个版本中 MCP 相关问题集中爆发（OAuth、tool catalog、device ID），开发者呼吁引入更严格的 **回归测试套件** 和 **协议版本固定机制**。
2. **平台碎片化严重**：Linux（systemd-resolved / DNS）、Windows（GIT_CONFIG / Herdr）、macOS（device ID 残留）各自暴露出独立的环境兼容性问题，缺乏统一的诊断入口。
3. **模型路由不可控**：HydraFusion 在 400 错误后自动降级到小上下文模型，导致 **工具集在同一会话中途被替换**，开发者希望路由变更应是显式的、可中断的。
4. **插件/Agent 发现语义模糊**：`--agent` 优先扫描 `.copilot/.github` 而非 `--plugin-dir`，`/mcp <name>` 大小写敏感，影响自动化脚本与 CI 集成。
5. **终端交互细节缺失**：长对话无键盘 pager、ask_user 不支持多行、CJK 复制粘贴乱码——表明 **CLI 仍未被视作完整的 IDE 替代品**，TUI 体验仍是高优先级改进方向。
6. **BYOK 配置透明度不足**：自定义模型（如 `glm-5.2:cloud`）是否支持 `reasoning-effort` 没有清晰的 capability 元数据查询路径，开发者只能试错。

---

*报告基于 github.com/github/copilot-cli 公开数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

过去24小时无活动。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-10-04

## 今日速览

今天 OpenCode 社区进入了一个明显的 **MCP（Model Context Protocol）问题集中爆发期**：远程 MCP 服务器连接超时（#53053）、子进程内存泄漏（#52410）、Code Mode 中权限弹窗不可见（#51223）成为开发者关注的焦点，多个修复 PR 已于同日提交。另一条主线是 v2 beta 的核心重构收尾，包括 compaction 模型配置丢失（#44094）、插件激活时序（#52887）、sub-agent 文本边界保留（#53040）等细节问题被批量关闭或修复。

---

## 版本发布

过去 24 小时内无新 Release。维护节奏集中在主线 `dev` 与 v2 beta 分支的 Issue / PR 处理。

---

## 社区热点 Issues

| # | Issue | 状态 | 评论 | 重要原因 |
|---|---|---|---|---|
| [#25270](https://github.com/anomalyco/opencode/issues/25270) | Model generates identical response twice | CLOSED | 25 | 长期高热度回复重复问题，社区已提供截图证据，已关闭 |
| [#30068](https://github.com/anomalyco/opencode/issues/30068) | Copying Japanese text from chat causes mojibake | CLOSED | 17 | 国际化字符编码问题，反映出桌面端对 UTF-8 边界处理缺陷 |
| [#44094](https://github.com/anomalyco/opencode/issues/44094) | compaction ignores `agents.compaction.model` in v2 beta | **OPEN** | 11 | v2 重构引入的回归：`shared model request` 重构后，compaction 静默忽略用户配置 |
| [#41354](https://github.com/anomalyco/opencode/issues/41354) | Search across message history | **OPEN** | 10 | 高频功能需求：用户无法在数百个会话中检索历史内容，TUI 仅暴露 30 天窗口 |
| [#51223](https://github.com/anomalyco/opencode/issues/51223) | MCP permissions in Code Mode hang TUI | **OPEN** | 6 | Code Mode 内 MCP 工具的权限弹窗不渲染，导致 `execute` 阻塞到用户 Esc |
| [#18213](https://github.com/anomalyco/opencode/issues/18213) | Sub-agent in plan mode bypasses restrictions after compaction | CLOSED | 5 | 安全相关：Plan 模式子代理在 compaction 后可绕过工具限制 |
| [#40314](https://github.com/anomalyco/opencode/issues/40314) | Unable to connect to the first certificate | CLOSED | 5 | 网络/证书链问题，影响部分 ISP 接入用户 |
| [#40319](https://github.com/anomalyco/opencode/issues/40319) | Provider retry loop without error | CLOSED | 4 | OpenAI Compatible 接入失败时无显式错误，且无退出机制 |
| [#53053](https://github.com/anomalyco/opencode/issues/53053) | Remote MCP fails when RTT > 250ms | **OPEN** | 3 | **新提交当日**：`autoSelectFamilyAttemptTimeout` 太短，远程 MCP 服务大面积加载不到，已对应 PR |
| [#52410](https://github.com/anomalyco/opencode/issues/52410) | MCP child-process leak (~20GB / 65min) | CLOSED | 3 | 严重内存泄漏：每次 web 客户端重连都会泄漏一组 MCP 子进程 |

---

## 重要 PR 进展

| # | PR | 状态 | 内容要点 |
|---|---|---|---|
| [#53070](https://github.com/anomalyco/opencode/pull/53070) | fix(mcp): raise Node per-address connect attempt timeout | OPEN | 关闭 #53053，提升 Node 网络栈对高 RTT 远程 MCP 的容忍度 |
| [#52981](https://github.com/anomalyco/opencode/pull/52981) | feat(ai): add Google Interactions protocol | CLOSED | 新增 Google Interactions 协议与 `Google.configure(...).interactions(modelID)`，支持原生对话/工具结果回放、thought signature 等 |
| [#53041](https://github.com/anomalyco/opencode/pull/53041) | feat(app): discover TUI themes in Desktop | OPEN | 桌面端支持发现用户配置与 `.opencode/themes` 下的主题文件，统一 DesktopTheme JSON |
| [#51142](https://github.com/anomalyco/opencode/pull/51142) | fix(plugin): expose session forms to server plugins | OPEN | 修复 #51108：补齐 `SessionDomain` 中缺失的 `form` 键，外部插件可正确响应 `question` 工具表单 |
| [#52568](https://github.com/anomalyco/opencode/pull/52568) | fix(ai): place Anthropic system updates before next assistant turn | OPEN | Anthropic 中途 `system` 消息只能紧跟 user turn / tool result 后放置，调整消息写入顺序 |
| [#53066](https://github.com/anomalyco/opencode/pull/53066) | fix(protocol): stop project routes from booting default location | OPEN | 关闭 #51198：`Project.Service` 已全局化，移除 location middleware 包裹 `ProjectGroup` 的残留 |
| [#53058](https://github.com/anomalyco/opencode/pull/53058) | fix(opencode): fail closed on unknown `--agent` | OPEN | 关闭 #47038：未知 / 子代理名请求应 fail-close，而非 fallback 到默认代理 |
| [#53057](https://github.com/anomalyco/opencode/pull/53057) | fix(opencode): surface missing server plugin entrypoints | OPEN | 关闭 #48577：当配置的插件缺少 server entrypoint 时给出可见报错 |
| [#53056](https://github.com/anomalyco/opencode/pull/53056) | fix(app): encode server credentials as UTF-8 | OPEN | 关闭 #46224：Basic Auth 使用 `btoa()` 前需先 UTF-8 编码，避免非 ASCII 凭据损坏 |
| [#53050](https://github.com/anomalyco/opencode/pull/53050) | fix(app): reserve chat request slots during MCP discovery | OPEN | 把 `/api/command`、`/api/mcp` 纳入慢请求配额，避免 MCP 发现阻塞主聊天 |
| [#53040](https://github.com/anomalyco/opencode/pull/53040) | fix(core): preserve subagent text block boundaries | OPEN | 关闭 #53039：保留 subagent 中非空文本块之间的段落边界，避免合并后语义丢失 |

---

## 功能需求趋势

从过去 24 小时活跃的 Issue 汇总，社区需求集中在以下方向：

1. **MCP 体系全面成熟** 🔌
   - 远程 MCP 连接的可靠性（RTT、超时、family 协商）
   - 进程生命周期管理（防止子进程泄漏）
   - Code Mode / TUI 下的权限与表单交互
   - 健康状态可见性与提示

2. **会话可检索性 / 知识资产化** 🔍
   - 跨项目 / 跨时间的消息历史全文检索（#41354）
   - TUI 会话列表的 100 条 / 30 天硬限制扩展（#38272）
   - 任意文件（PDF / Office / ZIP）作为工具上下文（#40341、#40215）

3. **桌面端 GUI 能力补齐** 🖥️
   - Skill / MCP 的可视化配置界面（#31399）
   - 主题发现（#53041）
   - 文件树拖拽稳定性（#40361）

4. **多模型与协议扩展** 🧠
   - Google Interactions 协议原生支持（#52981）
   - DeepSeek V4 Flash checkpoint 显式可选（#40346）
   - 模型变体（reasoning / effort）在 TUI footer 展示（#40412）

5. **安全 / 隔离强化** 🛡️
   - Plan Mode 子代理权限边界（#18213）
   - 未知 agent 名称 fail-closed（#53058）
   - 插件 entrypoint 缺失的可观测性

---

## 开发者关注点

通过 PR/Issue 描述与代码注释，开发者的反复吐槽点可以归纳为三类：

- **"请把已经存在的 API 行为对外可见"**：插件加载失败、agent 名错误、subagent 文本截断、模型变体不展示……开发者更希望系统**fail loudly** 而不是 fail silently，#53058、#53055、#40412 都体现了这一点。
- **"协议边界要干净"**：Anthropic system 顺序、Google Interactions 协议拆分、Schema brand 保留等 PR 显示团队正在系统性地收紧 SDK 与服务端协议语义。
- **"v2 beta 重构尚未完全收敛"**：#44094（compaction model 被覆盖）、#52887（插件激活与文本生成顺序）、#53066（location middleware 残留）等说明 8 月份那次 "shared model request" 重构仍持续暴露出边界条件，需要逐项 review。

> 建议关注者：若你正在集成自定义 MCP 服务器或自托管 OpenCode，**强烈建议跟踪 #53053 / #52410 / #51223** 这条主线，它们决定了远程 MCP 在弱网环境与高频重连场景下的可用性。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-10-04

> 数据来源：`github.com/badlogic/pi-mono`（仓库 `earendil-works/pi`）
> 统计窗口：过去 24 小时

---

## 一、今日速览

v1.0.1 与 v1.0.2 在 24 小时内连续发布，重点引入按思考级别（thinking level）配置采样参数的能力以及 Nix 安装通道；社区围绕 v1.0.1 报告了一批回归 bug（`/mcp` 菜单消失、Ctrl+H 失灵、首屏乱码），同时 TUI 渲染性能、长会话卡顿、Mac 高 CPU 等老问题仍是讨论焦点。

---

## 二、版本发布

### v1.0.2（最新）
- **按思考级别的采样参数** —— `models.json` 中的 `samplingParamsByThinkingLevel` 允许为每个思考级别分别设置 `temperature`、`top_p` 等采样参数，针对 OpenAI 兼容 API 生效。文档：<https://github.com/earendil-works/pi/blob/v1.0.2/...>
- 来源：[Release notes](https://github.com/earendil-works/pi/releases/tag/v1.0.2)

### v1.0.1
- **Nix flake 支持** —— `nix run github:earendil-works/pi/stable` 直接运行最新发布版，`nix profile add` 安装。
- 文档：[Install pi](https://github.com/earendil-works/pi/blob/v1.0.1/packages/coding-agent/docs/quickstart.md)
- 来源：[Release notes](https://github.com/earendil-works/pi/releases/tag/v1.0.1)

---

## 三、社区热点 Issues

1. **#2870 [CLOSED] [bug] Follow XDG Base Directory** — 24 评论 / 👍62
   Linux 用户长期反馈 Pi 将配置/状态目录铺满 `$HOME`，本期已关闭。XDG 合规是 Linux 桌面集成的关键一票，👍 数为本期最高。
   🔗 <https://github.com/earendil-works/pi/issues/2870>

2. **#7730 [OPEN] [bug] High CPU usage on Mac OS with long session** — 17 评论 / 👍10
   macOS 长会话下 CPU 飙到 50–110%、内存 600–800MB，与上下文长度高度相关。属于阻碍日常使用的稳定性问题。
   🔗 <https://github.com/earendil-works/pi/issues/7730>

3. **#9255 [OPEN] TuiMainScreen: full-screen redraw storm when changed rows sit above the viewport top** — 9 评论 / 👍1
   长 transcript 下 `doRender()` 几乎每帧走 `fullRender(true)`，导致长会话跳行、文本叠加。TUI 渲染路径的根因缺陷。
   🔗 <https://github.com/earendil-works/pi/issues/9255>

4. **#9688 [CLOSED] [bug] regression: clipboard copy doesn't work anymore** — 9 评论
   修复 #9618 的提交（`3349e1db1800`）让 OSC 52 剪贴板复制只在 SSH 会话中触发，破坏了大量容器/TUI 工作流，本期关闭。
   🔗 <https://github.com/earendil-works/pi/issues/9688>

5. **#10314 [OPEN] Reconsider Home/End defaults in fullscreen mode?** — 7 评论 / 👍5
   全屏 TUI 模式下 Home/End 从行内光标移动改为滚屏，破坏肌肉记忆。需要官方明确语义。
   🔗 <https://github.com/earendil-works/pi/issues/10314>

6. **#9335 [CLOSED] [no-action] openai-responses: support configuration_update for cache-preserving reasoning changes** — 5 评论 / 👍7
   GPT-6 推荐使用 `configuration_update` 切换 reasoning effort 而不破坏 prompt cache；pi 当前会重写整个 prompt prefix 击穿缓存，影响成本与延迟。
   🔗 <https://github.com/earendil-works/pi/issues/9335>

7. **#10267 [OPEN] Prompt text contributed in before_agent_start is dropped on runs without a user prompt** — 5 评论
   扩展在 `before_agent_start` 中注入的 `systemPrompt` 在后台任务、plan-mode continue、retry、resume 等场景会被丢弃，导致重新计费整个 prompt。涉及多个真实工作流。
   🔗 <https://github.com/earendil-works/pi/issues/10267>

8. **#9262 [OPEN] [last-read] find tool: glob patterns with Windows separators silently return no results** — 5 评论
   `find` 对 `src\**\*.ts` 这类 Windows 分隔符的 glob 静默返回空集，Agent 会错误判断文件不存在。Windows 用户友好度问题。
   🔗 <https://github.com/earendil-works/pi/issues/9262>

9. **#9807 [OPEN] perf(tui): full re-render causes scroll/typing lag in sessions with 800+ messages** — 4 评论
   800+ 消息会话下 Pi 每帧全量重绘回滚区，相较 OpenCode OpenTUI 的 cell-level diff 性能差距明显。这是 v1.0 之后 TUI 优化的关键命题。
   🔗 <https://github.com/earendil-works/pi/issues/9807>

10. **#10251 [OPEN] codemode only mode: built-in read cannot expose image contents to scripts** — 4 评论
    `codemode.mode: "only"` 下 `tools.read()` 对图片只返回占位文本，无图像抵达下游 provider 请求。文档与行为不一致，影响多模态 agent。
    🔗 <https://github.com/earendil-works/pi/issues/10251>

补充：本期关闭了一批发布相关的回归 bug：#10427（`/mcp` 菜单消失）、#10436（virtual model 思考级别显示错误）、#10392（managed install 累积旧版本）、#10402（Ctrl+H 失灵）等，说明 v1.0.1 的快速迭代仍在进行。

---

## 四、重要 PR 进展

1. **#10443 [CLOSED] fix(coding-agent): route stdin dead-terminal errors to emergencyTerminalExit** — 关闭终端/ssh 断开/sleep 后 `read EIO` 走向 `uncaughtException` 导致进程异常退出，本 PR 改为走 `emergencyTerminalExit`，鲁棒性修复。
   🔗 <https://github.com/earendil-works/pi/pull/10443>

2. **#9776 [CLOSED] Per thinking sampling parameters** — 已在 v1.0.2 合入。实现 `samplingParamsByThinkingLevel`，为不同思考级别提供差异化采样参数，并 cherry-pick #9505 的修复。
   🔗 <https://github.com/earendil-works/pi/pull/9776>

3. **#10440 [OPEN] fix(coding-agent): resolve the QuickJS wasm path once per process** — 修复 #10439：`getQuickJSWasmPath()` 在 codemode 每次调用都重新定位 wasm，pnpm 全局更新后会指向被 GC 的目录，导致整个会话 codemode 失效。
   🔗 <https://github.com/earendil-works/pi/pull/10440>

4. **#10437 [OPEN] fix(coding-agent): report settings save failures in interactive mode** — 修复 #10168：交互模式下 `SettingsManager.enqueueWrite` 的写错误只在启动时 drain 一次，运行时 EROFS/EACCES 静默丢失。
   🔗 <https://github.com/earendil-works/pi/pull/10437>

5. **#10410 [OPEN] feat(durable): expose durable thinking, websocket, and session options** — 把 `thinkingBudgets`、`websocketConnectTimeoutMs`、`sessionId` 暴露给 `ConversationStreamOptions`，老 SDK 已有的接线被遗漏。
   🔗 <https://github.com/earendil-works/pi/pull/10410>

6. **#10433 [OPEN] feat(ai): let apps name themselves in OpenAI logins** — OpenAI 登录流程允许自定义 agent 名称，避免下游 pi-ai 应用被误显示为 "Pi"。
   🔗 <https://github.com/earendil-works/pi/pull/10433>

7. **#10429 [OPEN] fix(ai): let caller headers override Codex originator and User-Agent** — Codex OAuth 登录时 `originator`/`User-Agent` 仍写死为 Pi，外部包装器（pi-ai 编码 agent）需要可覆盖。
   🔗 <https://github.com/earendil-works/pi/pull/10429>

8. **#10397 [CLOSED] fix(ai): dedupe tool call ids when a server reuses the same (call_id, id) pair** — 修复部分 OpenAI 兼容 provider 复用 `(call_id, id)` 造成助手消息出现两个共享 id 的 tool-call 块。
   🔗 <https://github.com/earendil-works/pi/pull/10397>

9. **#8734 [OPEN] feat(ai): support top-level instructions for OpenAI Responses-compatible providers** — 关闭 #8388。增加 `systemPromptFormat` 兼容性选项，将动态 system prompt 移到顶层 `instructions` 而非塞进 `input`，避免重复。
   🔗 <https://github.com/earendil-works/pi/pull/8734>

10. **#10261 [OPEN] feat(coding-agent): add prompt template documentation eval** — 为项目级/用户级 `/current-time` 模板加入文档对比与 Vitest 评测，防止后续回归。
    🔗 <https://github.com/earendil-works/pi/pull/10261>

---

## 五、功能需求趋势

从 50 条 Issue 与 12 条 PR 提炼出的方向：

- **TUI 渲染性能** —— 长会话（800+ 消息）下整屏重绘成为头号瓶颈，对比 OpenCode OpenTUI 的 cell-level diff，社区要求增量渲染。#9255、#9807、#10383（已关）共同指向同一根因。
- **MCP 能力扩展** —— 多条 issue/PR 围绕 MCP 协议推进：Unix socket 传输（#10247）、Stateless MCP 2026-07-28（#10416）、`/mcp` 命令在 1.0.1 回归（#10427）。
- **Provider 兼容与缓存** —— OpenAI Responses 顶层 `instructions`（#8734）、GPT-6 `configuration_update` 保留 prompt cache（#9335）、Codex 流式重试（#7820）等，反映社区对成本敏感与多 provider 适配的高需求。
- **新模型/思考模式工程化** —— v1.0.2 引入按 thinking level 差异化采样参数，是模型多样化后必然走向的精细化调度。
- **Windows 兼容** —— `find` 工具对 Windows 路径分隔符（#9262、#10418）以及大量 stdout/terminal 假设均未考虑 Windows，社区持续呼吁。
- **可恢复/可重现会话** —— Durable 包（`pi-durable`）的思考预算、WebSocket 超时、会话 id 暴露（#10410、#10411）成为新焦点。
- **OAuth/账号流程** —— 多会话并发导致 OAuth state mismatch（#10265）、OpenAI 登录页应用名识别（#10433、#10429）。
- **Linux 桌面规范** —— XDG Base Directory 合规（#2870）这类"基本卫生"项一旦解决，反馈最热烈。

---

## 六、开发者关注点

- **痛点 1：长会话性能塌方**
  800+ 消息 / 1.7MB JSONL 的会话出现明显输入与滚动延迟；CPU 100% 与内存膨胀在 Mac 上尤其突出。开发者期待 cell-level 增量渲染、按需回放、内存池等工程化方案。

- **痛点 2：扩展机制边界不清晰**
  `before_agent_start` 注入的 prompt 在非用户消息路径被吞掉（#10267），扩展作者只能在 issue 里反复确认边界，文档与运行时不一致是高频抱怨。

- **痛点 3：发布回归频次偏高**
  v1.0.1 上线 24h 内即触发多个回归：`/mcp` 菜单消失（#10427）、Ctrl+H 失灵（#10402）、首屏乱码（#10442）、clipboard 复制失效（#9688）。社区呼吁更严格的 release candidate 流程与扩展无关基线测试。

- **高频需求：MCP 传输与协议**
  除 stdio/http 外，社区要求 Unix socket（无副作用、低权限、与 systemd socket 集成）以及 2026-07-28 Stateless MCP 的双时代兼容。

- **高频需求：可移植与跨平台**
  Windows glob、macOS Ctrl+H、Termux 空间回收（#10392 每版本 ~168MB 累积）、SMB/NAS 工作目录下的多余文件系统查找（#10419）—— 都是"远离 macOS 桌面"的开发者每天遇到的摩擦。

- **高频需求：计费与缓存透明**
  推理 effort 切换导致 prompt cache 击穿、tool-call id 重复导致费用/账单异常（#10397、#10422、#10423），希望官方给出明确的不计费/重试/降级策略。

---

*本期日报由 GitHub 公开数据自动生成。如需特定主题的深度跟踪（如 MCP、TUI 渲染、Provider 适配），可在后续日报中固定专栏。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-10-04**

---

## 📌 今日速览

今日 Qwen Code 发布了 v0.24.7 nightly 版本（提交 2c591ecc08），主要修复 Code Mode 文本与懒加载工具发现的对齐问题及权限处理逻辑。社区讨论热度持续聚焦 **Managed Agent 双路径架构落地** 与 **Token 上下文治理** 两大主线，伴随 Web Shell 体验优化、多平台分发（Android Phase 2）以及多项 P1/P2 Bug 修复，整体节奏保持高频迭代。

---

## 🚀 版本发布

### v0.24.7-nightly.20261003.2c591ecc08
- **fix(core)**: 将 Code Mode 文本与懒加载工具发现机制对齐（[#12990](https://github.com/QwenLM/qwen-code/pull/12990)）
- **fix(permissions)**: 正确响应已批准的权限规则

---

## 🔥 社区热点 Issues（Top 10）

### 1. [架构级] Managed Agent 双路径架构与分阶段交付提案 — #12380
**作者**: @doudouOUC · **评论**: 45 · **优先级**: P2
核心架构提案：在保留现有 TS Agent 循环的基础上，将模型推理与工具环境配置解耦，让 Session 获得持久所有权、Workspace 绑定、可恢复工具执行与稳定 WebShell 连接。当前最高热度的路线图议题，已进入正式讨论阶段。
🔗 [Issue #12380](https://github.com/QwenLM/qwen-code/issues/12380)

### 2. [跟踪级] 非对话上下文 Token 治理 — #12028
**作者**: @yiliang114 · **评论**: 18 · **状态**: in-progress
系统提示、内置工具 schema、`QWEN.md` 等非对话上下文每次请求都全量发送并计费，在长上下文模型上其开销远超对话本身。该跟踪 Issue 已汇聚多条 Token 治理子任务，关联 #12333、#13004、#13003 等多个性能优化提案。
🔗 [Issue #12028](https://github.com/QwenLM/qwen-code/issues/12028)

### 3. [Session 管理] ACP-Bridge Stage B 宿主集成 — #12737
**作者**: @wenshao · **评论**: 16
针对普通本地 `qwen serve` Managed 执行调度的优先级决策，以及双引擎（Legacy + Managed）配对宿主的进一步集成，涉及 #12861、#12906 等 M1 保护机制。
🔗 [Issue #12737](https://github.com/QwenLM/qwen-code/issues/12737)

### 4. [P1 Bug] 工具错误死循环未提前终止，单会话消耗 5–14M Token — #10887
**作者**: @yiliang114 · **评论**: 7
生产环境 v0.20.1–v0.21.0 上 Agent 进入死循环（如 `git remote -v` 持续返回 128），会话消耗 5–14M Token 却无终止机制。属于高优先级生产事故。
🔗 [Issue #10887](https://github.com/QwenLM/qwen-code/issues/10887)

### 5. [CI/安全] 每日依赖 CVE 审计失败 — #13078
**作者**: github-actions[bot] · **评论**: 8
定时依赖 CVE 审计作业失败，可能是新出现的高危漏洞或 npm audit 端点不可用，需立即排查。
🔗 [Issue #13078](https://github.com/QwenLM/qwen-code/issues/13078)

### 6. [性能] 内存提取空操作后增加有界冷却 — #13004
**作者**: @yiliang114 · **评论**: 8
Managed 自动内存提取在合法 no-op 后增加有界节奏策略，避免每次成功用户回合都触发提取器派生，对长会话 Token 与延迟有明显收益。
🔗 [Issue #13004](https://github.com/QwenLM/qwen-code/issues/13004)

### 7. [P2 Bug] LSP 推送专属服务器导致 15s 超时 — #13283
**作者**: @yiliang114 · **评论**: 4
LSP 层从未读取服务器的 pull capability，对只支持推送的服务器仍走 pull 路径，造成 15s 超时并影响 Workspace 诊断报告。
🔗 [Issue #13283](https://github.com/QwenLM/qwen-code/issues/13283)

### 8. [特性请求] Web Shell 键盘快捷键（Session Overview / Split View）— #13175
**作者**: @4ekuct25 · **评论**: 6
为 Web Shell（Qwen Code Desktop + `qwen serve` Web 模式）增加 Session Overview 与 Split View 切换的 `Cmd/Ctrl+Shift+O` 等快捷键，UX 改进诉求。
🔗 [Issue #13175](https://github.com/QwenLM/qwen-code/issues/13175)

### 9. [Android Phase 2] 麦克风/可访问性/下载回归与导出 UX — #13111
**作者**: @jabrailkhalil · **评论**: 6
承接 #12127/#12129/#12130 三个 Phase 2 review 建议，关联原 Android 方向 #11704，划定边界化的后续工作。
🔗 [Issue #13111](https://github.com/QwenLM/qwen-code/issues/13111)

### 10. [P2 Bug] 主轮输出 Clamp 突破用户配置的小上下文窗口 — #13252
**作者**: @yiliang114 · **评论**: 4 · **状态**: CLOSED
`MIN_CLAMPED_OUTPUT_TOKENS` 4K 硬底使主轮输出超过用户配置的小上下文窗口，从 #13208 拆分出来，已关闭（被同源 #13244 side-query 半部分修复链路覆盖）。
🔗 [Issue #13252](https://github.com/QwenLM/qwen-code/issues/13252)

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. #13349 — 修复托管代理：暴露混合版本接管中的命名加载拒绝
**作者**: @wenshao
当 Hosted Harness 遇到混合版本接管（journal 含未知事件类型）时，返回 503 并携带机器可读拒绝码，便于上层明确区分故障类型。
🔗 [PR #13349](https://github.com/QwenLM/qwen-code/pull/13349)

### 2. #13163 — 在授权被拒时停止已绑定的 Turn
**作者**: @yiliang114
Workspace 绑定 Session 的创建者可在授权被撤销、Workspace 排空或注册变更时取消正在运行的 Turn，并具备重试机制。
🔗 [PR #13163](https://github.com/QwenLM/qwen-code/pull/13163)

### 3. #13354 — 新增可靠的 ACTIVE Workspace 删除（L3）
**作者**: @doudouOUC
通过现有公开与 WebShell 路由实现 `hosted-workspace-files/1` ACTIVE Session 的可靠删除，顺序执行 SessionEnd → SessionDelete 并校验提交结果。
🔗 [PR #13354](https://github.com/QwenLM/qwen-code/pull/13354)

### 4. #13361 — 加固并诊断 Hosted 冷加载拒绝门
**作者**: @wenshao
针对 #13255 中 7 次 CI 间歇性失败，加强冷加载拒绝门的判定并补充诊断信号，提升稳定性。
🔗 [PR #13361](https://github.com/QwenLM/qwen-code/pull/13361)

### 5. #13260 — W1c 离线 Workspace 迁移
**作者**: @doudouOUC
在一台受信 Linux 主机上实现 W1c 私有离线 Workspace 搬迁：操作员停用旧放置、校验固定 W1b 捕获、按更高挂载版本有条件提升目标。
🔗 [PR #13260](https://github.com/QwenLM/qwen-code/pull/13260)

### 6. #13362 — Hook-Runner 测试去抖动
**作者**: @holny
将 #13356 中 hook-runner 进程测试中一条时序敏感的断言替换为文件自身的 `waitFor` 习语，纯测试改动，不动生产代码。
🔗 [PR #13362](https://github.com/QwenLM/qwen-code/pull/13362)

### 7. #13244 — 侧查询输出 Token 按解析后的上下文窗口预算
**作者**: @yiliang114
为侧查询提供贴合实际窗口的输出预算，避免主轮 `clampOutputTokensToWindow` 未覆盖路径导致超窗。
🔗 [PR #13244](https://github.com/QwenLM/qwen-code/pull/13244)

### 8. #13033 — 默认延迟发现 Agent 与 Goal 声明
**作者**: @yiliang114
将 `agent`、`list_agents`、`get_goal`、`update_goal`、`propose_goal` 等协调工具改为按需默认发现，无需用户配置 `tools.eager`，显著降低启动 Token 开销。
🔗 [PR #13033](https://github.com/QwenLM/qwen-code/pull/13033)

### 9. #13214 — 修复 Runtime Broker 跨进程释放竞态并加固调度
**作者**: @wenshao
解决 #13183 三项高风险审计发现：Release 与 Admission 在同一事务中裁决，RELEASING 转换在会话行锁下重新检查活跃执行。
🔗 [PR #13214](https://github.com/QwenLM/qwen-code/pull/13214)

### 10. #13168 — 为 Hosted Turn 注入 Workspace 项目上下文
**作者**: @yiliang114
Hosted Turn 现可接收来自 Session 工作目录的 `QWEN.md` 与 `AGENTS.md`，首次原生工具获取时只读 Runtime 控制返回原文，不预占工具执行。
🔗 [PR #13168](https://github.com/QwenLM/qwen-code/pull/13168)

---

## 📈 功能需求趋势

按 Issues/PR 主题聚合，社区当前最关注的方向：

1. **Token 上下文治理（最热）**：长上下文模型下的非对话上下文开销、内存提取节奏、side-query 输出预算、Agent/Goal 延迟发现——多个 P2/P3 跟踪 Issue 集中爆发，关联 #12028/#12333/#13004/#13003/#13033/#13244。

2. **Managed Agent 架构演进**：双路径架构提案（#12380）、Stage B 集成（#12737）、H0c review 后续（#13300）、冷加载拒绝门（#13361）等贯穿全周，是 roadmap 的核心脉络。

3. **Web Shell / Desktop UX**：键盘快捷键（#13175）、Plan/Todo 在 Split View 中缺失（#13353）、Session Overview Markdown 渲染（#13340）、Session Writer 死锁（#13358）——Desktop 与 Web Shell 体验打磨进入密集期。

4. **多平台分发**：Android Phase 2 麦克风/可访问性/下载回归（#13111）、Q1c 离线 Workspace 迁移（#13260）、实验性 Kubernetes CSI Runtime（#13289）。

5. **LSP / 集成稳定性**：推送服务器 pull 路径导致 15s 超时（#13283）、飞书文件写入孤儿目录（#13334）、MCP 权限规则（#12531）。

6. **Session 生命周期**：可靠 ACTIVE 删除（#13354）、冷缓存取消（#13269）、授权被拒时停 Turn（#13163）、混合版本拒绝码（#13349）。

7. **CI/工程化质量**：CodeQL 静默失败（#13249）、Hook runner 测试 flake（#13362）、CVE 审计失败（#13078）——基础设施可观测性持续被重视。

8. **SDK 生态**：sdk-java Hosted Harness 客户端 49 项延期 review（#13313）、Runtime 控制面测试与卫生（#13341）。

---

## 💬 开发者关注点

从 Issue/PR 的讨论与标题中归纳，社区反馈中重复出现的痛点与高频需求：

- **🔥 Token 浪费**：死循环未终止（#10887）、非对话上下文超额开销（#12028）、侧查询预算失控（#13244）——这是开发者最痛的点，长会话成本成为生产隐患。

- **⚙️ CI 间歇性失败**：Hook runner reap 竞态（#13356）、ACP channel SIGKILL（#13266）、Hosted 冷加载间歇失败（#13255）、CodeQL 静默 13 次连续失败（#13249）——CI 可观测性不足，"绿色假象"成为风险。

- **🔐 Session 写入器死锁**：非优雅退出后 Session 永久 409 不可恢复（#13358）——Desktop/Web Shell 用户会真实撞上，无恢复路径是 UX 雷区。

- **📱 Desktop/Web Shell 细节**：Split View 缺少 Plan/Todo 表面（#13353）、Plan 审批渲染原始 Markdown（#13340）、快捷键缺失（#13175）——高频用户对工作流完整性要求变高。

- **🧠 内存/上下文召回**：内存索引条目被截断（#13315）、强召回命中后跳过选择器（#13003）、no-op 后频繁触发（#13004）——自动内存系统的精度与成本平衡尚未达成。

- **🧪 Review 流程负担**：#5 轮 review 规则导致 Critical/Suggestion 拆分（#13297、#13300、#13313、#13341），多 PR 长期挂起，开发者呼吁更明确的合并门槛与延期规则。

- **🛡️ 安全语义模糊**：Goal Verifier 将聚合 wrapper 结果错认为 `external_fact`（#13360）、Workspace Trust 授权延期项（#13186）、MCP 权限规则与服务器名冲突（#12531）——安全边界需要更清晰的模型。

---

> 📊 **日报小结**：今日 Qwen Code 仓库节奏以 Managed Agent 架构深化与 Token 治理优化为主轴，伴随 Web Shell 体验密集补强与 CI/测试基础设施的可观测性整改。建议关注 #12028、#12380、#10887 三条主线下的关联 PR 合入进度。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-10-04**

---

## 📌 今日速览

今日社区活动集中在 **0.10.1 版本整合** 与 **TUI 体验细节打磨** 两条主线。PR #6815 推进了 Engine 收敛与 TypeScript 模块重构的关键里程碑，同时多位贡献者集中修复了文本渲染（grapheme 边界换行）、多语言翻译、配置诊断等 TUI 体验问题。Issue 端最值得关注的是 Windows 平台 npm 安装模式下进程清理的稳定性 Bug（#6827），以及 FEAT-027 重构的阶段性交付（#6832）。

---

## 🚀 版本发布

过去 24 小时无新版本发布。当前主干聚焦在 `0.10.1-next` 分支的整合工作中（详见 PR #6815）。

---

## 🔥 社区热点 Issues

1. **#5316 [OPEN] EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)**
   - 📊 31 条评论，社区参与度最高的元 issue
   - FEAT-027 已落地草稿 PR #6832，`/permissions`、`/status` 命令采用共享 Shapes 实现可移植化
   - 链接：https://github.com/Hmbown/Codewhale/issues/5316

2. **#6827 [OPEN] Windows npm 安装进程清理 Bug**
   - 严重程度高：`node.exe` 被杀会瞬间终止 `codewhale.exe` 且无法清理会话
   - 涉及 Agent 自身的"stop node"指令可能误杀会话的风险
   - 链接：https://github.com/Hmbown/Codewhale/issues/6827

3. **#6418 [CLOSED] 会话恢复失败**
   - Runtime store 跨版本不兼容导致无法恢复会话
   - 已关闭（建议确认修复版本与迁移路径）
   - 链接：https://github.com/Hmbown/Codewhale/issues/6418

4. **#6328 [OPEN] 调度列表 UI（Watches & Heartbeat）**
   - 核心维护者 Hmbown 主理的需求
   - 阻塞项：Core cron 路由尚未就绪
   - 链接：https://github.com/Hmbown/Codewhale/issues/6328

5. **#6818 [OPEN] 在 Codewhale 网站上线完整 Ratatui 组件浏览器**
   - 2026-10-02 已落地 204 条目录项的密封导出（commit `9b5f8d6b`）
   - 与学习/UI 站点 onboarding 同步推进
   - 链接：https://github.com/Hmbown/Codewhale/issues/6818

6. **#6805 [OPEN] 支持评审通过的 OAuth AI 提供商插件**
   - 插件可在 `extensions.net.codewhale.providers` 中声明命名 OpenAI 兼容提供商与公开 OAuth 客户端
   - 由贡献者 LIghtJUNction 提交，处于 contribution-gate 阶段
   - 链接：https://github.com/Hmbown/Codewhale/pull/6805

7. **#6832 [OPEN] FEAT-027 重构交付草稿**
   - `/permissions`（含别名与 `/config` 权限规则路径）和 `/status` 通过共享命令 Shapes 实现独立可移植
   - 继续 #6793 的命令采用工作
   - 链接：https://github.com/Hmbown/Codewhale/pull/6832

8. **#6820 [CLOSED] Python/JavaScript 工具调用应用每次执行策略**
   - 由贡献者 Guan0923 提交，已关闭
   - 解释器进程走权限感知启动器，修复批准后绕过权限链路的问题
   - 链接：https://github.com/Hmbown/Codewhale/pull/6820

9. **#6831 [CLOSED] 上下文 inspector 行翻译补齐**
   - 由贡献者 Lstarsky0 提交，修复 14 个翻译包中 12 个的英文残留
   - 涉及 `CtxInspRowCompaction` / `CtxInspRowAnchors` 等多语言键
   - 链接：https://github.com/Hmbown/Codewhale/pull/6831

10. **#6830 [CLOSED] 固定提示头跟随视口并支持点击跳转**
    - 由贡献者 SparkofSpike 提交
    - 固定用户提示头从"仅最新消息"升级为跟随视口起始 turn，点击可跳转
    - 链接：https://github.com/Hmbown/Codewhale/pull/6830

---

## 🛠️ 重要 PR 进展

| # | 标题 | 作者 | 状态 | 要点 |
|---|------|------|------|------|
| [#6815](https://github.com/Hmbown/Codewhale/pull/6815) | **0.10.1 整合：Engine 收敛、TS 模块与 Ratatui UX** | Hmbown | OPEN | 单一 Rust Engine 统一执行、提供商标识、权限、事件、会话、存储与计费；ACP、子代理、递归 RLM 共享 turn 路径 |
| [#6805](https://github.com/Hmbown/Codewhale/pull/6805) | **插件：支持评审通过的 OAuth AI 提供商** | LIghtJUNction | OPEN | 通过 `extensions.net.codewhale.providers` 声明命名提供商与 OAuth 客户端；复用现有路由与流式路径，无需伴生代理 |
| [#6832](https://github.com/Hmbown/Codewhale/pull/6832) | **重构：采用可移植配置策略与状态 Shapes (FEAT-027)** | aboimpinto | OPEN | 草稿 PR；为 `/permissions`、`/status` 增加窄权限/状态 Shapes |
| [#6820](https://github.com/Hmbown/Codewhale/pull/6820) | **修复 TUI：Python/JS 工具每次执行策略** | Guan0923 | CLOSED | 解释器进程接入权限感知启动器，修复权限绕过 |
| [#6831](https://github.com/Hmbown/Codewhale/pull/6831) | **修复 TUI：翻译 12 个包的上下文 inspector 行** | Lstarsky0 | CLOSED | 补齐 zh-Hans/zh-Hant 之外 12 个语言包的翻译键 |
| [#6829](https://github.com/Hmbown/Codewhale/pull/6829) | **修复 TUI：在 grapheme 边界换行 diff 与工具输出** | Lstarsky0 | CLOSED | 解决键帽、ZWJ emoji 与组合序列与 Ratatui cell 计数对齐问题（#4479 类） |
| [#6819](https://github.com/Hmbown/Codewhale/pull/6819) | **修复 CLI：`config doctor` 对 HTTP(S) 协议大小写误判** | Guan0923 | CLOSED | `to_ascii_lowercase()` 规范化后再判断，避免大写协议地址被拒 |
| [#6830](https://github.com/Hmbown/Codewhale/pull/6830) | **特性：固定提示头跟随视口并点击跳转** | SparkofSpike | CLOSED | 每 turn 交接；点击跳转至提示头所指消息 |
| [#6806](https://github.com/Hmbown/Codewhale/pull/6806) | **依赖：feishu/wecom bridge 升级 axios** | dependabot | CLOSED | `axios` 1.18.1 → 1.20.0，Group bump |

---

## 📈 功能需求趋势

从 Issues 与 PR 中可提炼以下社区关注方向：

1. **🔌 插件生态扩展** — OAuth 提供商、桥接集成（feishu-bridge、wecom-bridge）持续演进，第三方贡献活跃
2. **🌐 国际化与本地化** — 多语言翻译补齐、文本边界（grapheme）渲染细节修复成为高频补丁
3. **🛡️ 权限与安全模型** — 每次调用执行策略、命令 Shapes 解耦、配置诊断稳健性
4. **📅 调度与自动化** — Watches、Heartbeat、cron 路由相关的列表 UI 与对话式构建器
5. **🖥️ 跨平台稳定性** — Windows npm 安装下的进程生命周期与清理（#6827 暴露的核心痛点）
6. **🎨 Ratatui UX 打磨** — 固定提示头视口跟随、组件浏览器网站化、长输出换行

---

## 💬 开发者关注点

- **会话恢复的兼容性**：开发者反馈 Runtime store 跨版本不兼容导致恢复失败，需要更稳健的迁移机制
- **Windows 平台进程模型**：`node.exe` 被杀导致 Codewhale 立即崩溃且无清理，Agent 自身的"stop node"指令可能误杀自身会话
- **命令与配置的可移植性**：通过共享 Shapes 模式推进命令解耦，希望 `/permissions`、`/status` 等核心命令能独立复用
- **TUI 国际化细节**：grapheme 集群、键帽、emoji ZWJ 序列的渲染对齐被反复打磨
- **CLI 配置诊断严谨性**：`config doctor` 应采用大小写不敏感判断 HTTP(S) 协议，避免误报
- **调度系统 UX 缺失**：命名 watches、interval、pause/resume 的列表展示仍是核心待办

---

> 📊 **数据时间窗**：过去 24 小时（2026-10-03 ~ 2026-10-04）
> 📦 **样本范围**：5 个 Issue 更新 + 9 个 PR 更新
> 🔗 **项目主页**：https://github.com/Hmbown/DeepSeek-TUI

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*