# AI CLI 工具社区动态日报 2026-07-08

> 生成时间: 2026-07-08 05:43 UTC | 覆盖工具: 9 个

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
**数据日期：2026-07-08 ｜ 覆盖 9 款主流工具**

---

## 一、生态全景

当前 AI CLI 工具生态进入 **"能力深化 + 平台分化"** 的关键阶段：头部工具（Claude Code、Codex、Qwen、OpenCode）已突破基础对话，迈向**多 Agent 编排、SDK 化、模型路由**等高阶方向；而所有工具几乎同时撞上 **后台 Agent 状态机、Windows 兼容性、模型版本漂移** 三类共性瓶颈。更深层的信号是，**"模型质量稳定性"开始成为用户信任度的核心变量**（Codex 的 GPT-5.5 怀疑论、Claude Code 的 Sonnet 5/Fable 5 阵痛），行业从"能不能跑"过渡到"能不能信"的新阶段。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | Issue 更新 | PR 更新 | 综合活跃度 | 状态特征 |
|------|---------|-----------|--------|---------|---------|
| **OpenCode** | 1 (v1.17.15) | 34 | 50 | 🔥🔥🔥🔥🔥 极高 | Desktop + V2 Session 双线并行 |
| **DeepSeek TUI** | 1 (v0.8.67) | ~30 | 35 | 🔥🔥🔥🔥 高 | v0.8.68 收尾 + v0.8.69 TTC 设计 |
| **Qwen Code** | 3 (v0.19.7 + preview + nightly) | 11 | 50 | 🔥🔥🔥🔥 高 | SDK 双端同步 + 多 Agent 矩阵 |
| **Claude Code** | 2 (v2.1.203/204) | 48 | 6 | 🔥🔥🔥🔥 高-中 | Issue 密度极高，PR 偏文档/脚本 |
| **OpenAI Codex** | 2 (v0.143.0 + alpha) | ~30 | ~13 | 🔥🔥🔥 中-高 | 插件/Host 模式重点突破 |
| **Pi** | 0 | 26 | 24 | 🔥🔥🔥 中 | 扩展 API 暴露密集 |
| **GitHub Copilot CLI** | 2 (v1.0.69/69-3) | 28 | 2 | 🔥🔥 中-低 | PR 通道稀疏（仅 2 条无描述） |
| **Gemini CLI** | 0 | 10 | 10+ | 🔥🔥 中 | 评估基建 + Caretaker 自动化 |
| **Kimi Code CLI** | 0 | 1 | 0 | ⚪ 极低 | 仅 1 条 Figma MCP 议题 |

> **判读**：OpenCode 与 Qwen Code 是当日 PR 吞吐量最大的两个项目，反映**版本节奏密集**；Claude Code 的 48 条 Issue vs 6 条 PR 的反差揭示**用户需求与产品推进间的显著鸿沟**；Kimi Code 的沉寂值得关注。

---

## 三、共同关注的功能方向

### 1. 后台 Agent / 子 Agent 治理（最普遍）
几乎所有工具都在此失守：
- **Claude Code**：`#41461`（~1.4M token 浪费）、`#75043`（嵌套子 agent 通知丢失）、`#75548`（归档误杀运行中进程）
- **Gemini CLI**：`#22323`（MAX_TURNS 误报成功）、`#21409`（generalist 永久挂死）、`#22093`（未授权自动启用）
- **Qwen Code**：`#6505`（缺循环检测）、`#6512`（状态行错误）、`#6456`（worktree 隔离）

> **判读**：后台 Agent 是产品矩阵里**最不成熟、最容易失控**的模块，是 2026 年下半年必须攻克的硬骨头。

### 2. Windows / 跨平台兼容
- **OpenAI Codex**：Windows 沙箱模块缺失、MCP 进程泄漏至 183 个 node.exe、强制使用退役模型
- **OpenCode**：45GB RSS 内存泄漏、Electron 主进程崩溃、Ctrl+V 失效
- **DeepSeek TUI**：PowerShell 输入泄漏、中文 IME 死锁、PTY Ctrl+C 字节异常
- **Claude Code**：`#41461` Windows 后台 agent 失控

> **判读**：**Windows 仍是整个生态最薄弱的一环**，跨平台不是差异化卖点，而是产品底线。

### 3. 模型稳定性与"降级感"
- **Claude Code**：Sonnet 5 auto-compaction 卡 75%、Fable 5 advisor 全程不可用、token 异常上升
- **Codex**：`#30364`（评论 158，👍252）GPT-5.5 token 聚簇问题，已成为社区"质量锚点"
- **OpenCode**：`#35863` 上下文硬编码 200k 触发过早压缩

> **判读**：用户对模型行为的**可预测性**诉求强烈，单纯的能力提升已不足以建立信任。

### 4. MCP / 插件生态成熟化
- **OpenAI Codex**：v0.143.0 远程插件默认启用、Hosted Code Mode 默认开启、`server_registered_tools_only` 安全收敛
- **Copilot CLI**：v1.0.69 新增 `/plugins` 仪表板与热重载，但 stdio 进程泄漏仍存
- **OpenCode**：`#35848` 模型输入能力规范化，`#35844` 新增 browser 工具
- **Kimi Code**：唯一活跃 Issue 即 Figma MCP 集成请求

> **判读**：MCP 已从"加分项"变为"入场券"，但**配置层与运行时层的状态一致性**仍是最大隐患。

### 5. TUI / 终端体验
- **Claude Code**：`AskUserQuestion` 60s 默认选择、Agents view 键盘失灵、`--resume` 挂起
- **Pi**：cursor 失焦状态、markdown 抖动、状态行闪烁
- **DeepSeek TUI**：Fleet 配置模态、子代理面板空白
- **Gemini CLI**：CJK 换行错位、Emoji 截断、终端 resize 花屏

> **判读**：TUI 细节正成为**区分成熟产品的隐形护城河**。

### 6. 会话/历史可靠性
- **Claude Code**：`--resume` 多平台数据丢失风险
- **Qwen Code**：`#6501` parentUuid 链路缺失静默截断 → `#6502` 改为桥接
- **Pi**：`--session-id` 静默创建新会话
- **OpenCode**：`#6680` Desktop 无法查看归档会话（35 评论长期高呼声）

### 7. 成本/计费透明度
- **Claude Code**：`#41461`、 `#74006`、 `#74803`
- **Codex**：`#31415` 升级后未重置、`#17764` 用量不符、`#28507` 容量误报

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键技术路线 |
|------|---------|---------|------------|
| **Claude Code** | 头部企业级标杆 | 中大型团队、复杂工程 | 后台 Agent + Hook 体系 + 多模型路由 |
| **OpenAI Codex** | 平台型生态 | Pro/Plus 用户、插件开发者 | Hosted Code Mode + 远程插件 + Web Search |
| **Gemini CLI** | 评估驱动型 | Google Cloud 用户、研究者 | Behavioral eval + Caretaker 自动分流 Agent |
| **Copilot CLI** | GitHub 原生集成 | GitHub 生态深度用户 | Sandbox + `/plugins` 仪表板 + BYOK |
| **Kimi Code** | 国内市场为主 | 中文场景、设计→开发 | 基础 MCP 接入（覆盖度待提升） |
| **OpenCode** | 开源、多 Provider | 模型无关主义者 | 多 Provider 抽象 + Desktop 客户端 + Rust 后端 |
| **Pi** | 极客可扩展 | 工具作者、定制化需求 | Extension API 暴露最大化 |
| **Qwen Code** | SDK 优先的可嵌入运行时 | 集成商、企业内部工具 | Python/TS 双端 SDK + 多 Agent + Web Shell |
| **DeepSeek TUI** | 高性能 Rust 客户端 | 性能敏感用户、模型实验者 | TTC（Test-Time Compute）+ Fleet profile + Rust async |

> **战略差异点**：
> - **Claude Code** vs **Codex**：前者重 Agent 治理，后者重平台/插件生态
> - **OpenCode** vs **Pi**：同样多 Provider，前者偏客户端完整度，后者偏 Extension 哲学
> - **Qwen Code** 与众不同地把 **SDK 化** 作为第一优先级，是最"基础设施向"的工具
> - **DeepSeek TUI** 独有的 **TTC 自我验证工具**（`verify/critique`）是当日唯一的前沿研究信号

---

## 五、社区热度与成熟度

### 头部成熟工具（用户量大但伴随稳定性质疑）
- **Claude Code**：Issue 密度最高（48 条），`#73125` 142 评论、`#41461` ~$55-106 经济损失，**进入"用户量倒逼稳定性"的典型阶段**
- **OpenAI Codex**：`#30364` 158 评论/252 赞，是当日**单条 Issue 影响力最大的事件**

### 快速迭代期工具
- **OpenCode**：v1.17.15 单日合并 20+ PR，V2 Session 架构正在快速收敛
- **DeepSeek TUI**：v0.8.68 "修复之日" + v0.8.69 "思考之日" 的节奏切换清晰
- **Qwen Code**：单日 50 PR 中 SDK 双端同步 + 多 Agent + TUI/CLI/IDE 全面铺开

### 战略性投入工具
- **Gemini CLI**：Caretaker Agent + Pub/Sub + Cloud Run 的工程化流水线投入显著
- **Copilot CLI**：v1.0.69 沙箱语义修正、`/plugins` 仪表板，说明在补齐基础体验

### 边缘/停滞风险
- **Kimi Code**：单日 1 Issue / 0 PR，**与国内对手 Qwen Code 形成强烈反差**，是当日最值得警觉的信号
- **Copilot CLI**：PR 通道稀疏（仅 2 条无描述），与 Issue 量（28 条）严重失衡

### 成熟度梯队
1. **第一梯队（成熟 + 高压测试）**：Claude Code、Codex
2. **第二梯队（快速迭代 + 战略投入）**：OpenCode、DeepSeek TUI、Qwen Code
3. **第三梯队（功能补齐）**：Gemini CLI、Copilot CLI、Pi
4. **风险梯队**：Kimi Code（活跃度不足）

---

## 六、值得关注的趋势信号

### 📊 信号 1：后台 Agent 是行业级未解题
所有工具都暴露了**停止语义不明确、状态通知丢失、嵌套编排失序、自动清理误杀**四类问题。这不是某一家的问题，而是**当前 LLM Agent 架构的根本性局限**。对开发者的参考：短期生产环境应避免深度依赖嵌套 Agent；关注 `#50246`（消息队列模式）类需求是否被采纳。

### 🔒 信号 2：安全事件开始显性化
Claude Code 的 `.env.local` 回显、Codex 的 `curated-plugin startup sync` 破坏宿主仓库、Copilot CLI 的预工具钩子绕过、Gemini 的 OAuth SSRF 防护——**当工具获得更多文件系统与终端权限后，"AI 编程工具的安全模型"成为新刚需**。

### 🧠 信号 3：Test-Time Compute / 自我验证进入产品化
DeepSeek TUI 的 `verify/critique` 工具 + TTC 设计文档（`#4201`）是当日**唯一的前沿研究产品化信号**。把"模型自主决定何时花算力

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-08 ｜ 数据源：anthropics/skills**

---

## 1. 热门 Skills 排行（PR）

> 注：官方 PR 列表未提供评论数，本排行综合考量 **关联 Issue 讨论热度、修复提交密度、近 30 天活跃度**。

| 排名 | PR | Skill 名称 | 功能/亮点 | 社区热点 | 状态 |
|---|---|---|---|---|---|
| 🏆 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator eval 修复** | 修复 `run_eval.py` 报告 0% recall 的核心 bug，让 `improve_description.py` 描述优化循环真正生效 | 与 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）、[#1169](https://github.com/anthropics/skills/issues/1169)（3 评论）联动，是当前社区的"头号公案" | OPEN |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit**（v1.3.0） | 交付前自审计：机械校验 + 四维推理质量门禁，跨技术栈通用 | 最新大型 Skill 提案之一，提供"AI 输出可验收性"基础设施 | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 防止 AI 生成文档的孤字换行、寡头段落、编号错位等排印缺陷 | 触发词涉及"所有 Claude 生成的文档"，用户基础面极广 | OPEN |
| 4 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 测试理念 + 单元测试 + React 组件测试 + E2E 全栈指导 | 与开发流程深度结合，提 PR 上来就被多位开发者跟评需求 | OPEN |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **odt** | OpenDocument（.odt/.ods）创建、模板填充、与 HTML 互转 | 补齐开源文档格式生态，与 docx/pdf 形成完整矩阵 | OPEN |
| 6 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 命名系统（ISCC-NBS/Munsell/XKCD/RAL）+ 色彩空间选型表（OKLCH/OKLAB/CAM16） | 设计向 Skill，前端/设计/无障碍场景刚需 | OPEN |
| 7 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer + skill-security-analyzer** | 五维质量评分（结构 20%、安全、…）+ 安全审计 | 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（安全信任边界，34 评论）直接呼应 | OPEN |
| 8 | [#806](https://github.com/anthropics/skills/pull/806) | **sensory** | 通过 AppleScript (`osascript`) 做原生 macOS 自动化，分两档权限 | 替代"截图式 Computer Use"，更稳定可控的桌面自动化路径 | OPEN |

**延伸关注集群（多重 PR 修补同一处）**：`#1099`、`#1050`、`#1323`、`#362`、`#361`、`#539`、`#1061` 都围绕 skill-creator 的 Windows 兼容性、UTF-8、YAML 解析、触发器判定，反映**生态可用性危机**。

---

## 2. 社区需求趋势（从 Issues 提炼）

按议题热度合并归类：

### 🔥 热点 1：Safety & Trust（安全信任）— 34 评论（[#492](https://github.com/anthropics/skills/issues/492)）
社区贡献的 Skill 混在 `anthropic/` 命名空间下，被误认为是官方 Skill，构成**信任边界漏洞**。配套需求：`skill-security-analyzer`（PR #83）、agent-governance（Issue #412）。
> **方向词**：权限分级、审计日志、威胁检测、命名空间隔离

### 🔥 热点 2：Skill 工程化/评估管线 — 12+3 评论（[#556](https://github.com/anthropics/skills/issues/556), [#1169](https://github.com/anthropics/skills/issues/1169)）
整套 `skill-creator` 的 `run_eval.py` → `run_loop.py` → `improve_description.py` 反馈环被同一个 recall=0% bug 卡死，导致**描述优化等于在优化噪声**。
> **方向词**：评估指标、触发器识别、自动化回归、跨平台（Windows）兼容

### 🔥 热点 3：组织级协作 & 生命周期 — 14 评论（[#228](https://github.com/anthropics/skills/issues/228)）
现状：手动 Settings → 上传 .skill 文件 → 传同事。需要 **Org 级 Skill 共享库 / 直接分享链接**。
> **方向词**：管理面板、版本控制、私有 Registry

### 🔥 热点 4：持久化与压缩记忆 — 9 评论（[#1329](https://github.com/anthropics/skills/issues/1329)）
长任务 Agent 自己写的散文式记忆占 context 太多。社区要"符号化 / 压缩式"记忆。
> **方向词**：compact-memory、符号表示、Context 压缩

### 🔥 热点 5：互操作 & 平台扩展
- **Skills → MCP**（[#16](https://github.com/anthropics/skills/issues/16)，4 评论）：建议把 Skill 包装成标准 MCP 接口
- **AWS Bedrock 集成**（[#29](https://github.com/anthropics/skills/issues/29)，4 评论）：企业云落地阻塞点
- **SharePoint 文档治理**（[#1175](https://github.com/anthropics/skills/issues/1175)，4 评论，已关闭）：企业内部权限/SKILL.md 边界

### 🔥 热点 6：生态去重与稳定性
- [#189](https://github.com/anthropics/skills/issues/189)（6 评论）：`document-skills` vs `example-skills` 插件内容重复，污染 Context
- [#1362](https://github.com/anthropics/skills/issues/1362)（3 评论）：`web-artifacts-builder` pnpm≥10.1 + favicon + 字体内联坏掉
- [#62](https://github.com/anthropics/skills/issues/62)（10 评论）：用户本地 Skill 全消失，**恢复路径缺失**

### 已关闭但值得回看的提案
- [#202](https://github.com/anthropics/skills/issues/202)（CLOSED，8 评论）：重写 `skill-creator` 为"操作手册"而非"教学文档"
- [#412](https://github.com/anthropics/skills/issues/412)（CLOSED，6 评论）：agent-governance 提案

---

## 3. 高潜力待合并 Skills

按"近期解决阻塞 + 多议题聚焦"双维度排序：

| 优先级 | PR | Skill | 为何是高潜力 |
|---|---|---|---|
| ⭐⭐⭐ | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator → run_eval 总修复 | 不合并则整个描述优化闭环失效；按住 5+ 个相关 PR（#1099/#1050/#1323）和 3+ 个 Issue 的瓶颈 |
| ⭐⭐⭐ | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit v1.3.0 | 6 月 28 日提出，7 月 2 日还在更新，自带"通用质量门禁"卖点，独立模型/技术栈可用，社区刚需感强 |
| ⭐⭐ | [#83](https://github.com/anthropics/skills/pull/83) | quality-analyzer + security-analyzer | 直接对冲 #492 的 34 评论投诉，一旦合并将成官方"安全 + 质量"基础组件 |
| ⭐⭐ | [#538](https://github.com/anthropics/skills/pull/538) | pdf case-sensitivity 修复 | 小但必要——PR 长时间没合，case-sensitive 平台用户全卡 |
| ⭐⭐ | [#541](https://github.com/anthropics/skills/pull/541) | docx tracked-change 与 bookmark w:id 冲突 | 解决文档损坏的真实风险，影响所有 docx Skill 用户 |
| ⭐⭐ | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 低风险高收益，提交流畅度高，社区感知面广 |
| ⭐ | [#486](https://github.com/anthropics/skills/pull/486) | odt | 与 docx/pdf 形成完整多格式矩阵，潜在官方背书候选 |
| ⭐ | [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 设计向杀手锏技能，色彩空间选型表很实用 |
| ⭐ | [#1050](https://github.com/anthropics/skills/pull/1050), [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 兼容补丁 | 看似小 PR，但合并后能解锁 ~50% 潜在 Windows 用户 |

---

## 4. Skills 生态洞察

> **「生态要从『Skill 数量爆发』走向『Skill 工程化』—— 评估管线的可靠性、命名空间的信任安全、平台兼容性成为下一阶段的三大主战场。」**

具体表现：
- **「Skill 评级/自审基础设施」** 是当前最结构性缺口（self-audit、quality-analyzer、security-analyzer 三个 PR 同时撞向这个问题）
- **「evals 必须能跨平台跑通」**（Windows/PATHEXT/UTF-8/编码 5+ 个相关 PR 同时待合）
- **「官方 / 社区命名空间必须切开」**（#492 已经被顶成 34 评论，#189 的内容重复加剧疑虑）
- **「企业落地阻力最大的是组织级分发 + 云平台支持」**（#228、#29、#1175 三连）

**编者提醒**：以上趋势分析基于公开 Issues/PR 文本与评论数，PR 列表的具体评论量为空，已用"关联 Issue 评论数 + 多 PR 同题 + 近 30 天活跃度"作为替代热度指标。

---

# Claude Code 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

过去 24 小时，Claude Code 在 24 小时内连发两个版本（v2.1.203、v2.1.204），主要修复了 SessionStart hook 在 headless 场景下被 idle-reap 的关键问题。社区方面，**后台 agent（Background Agents）相关 Bug 集中爆发**，涉及 token 浪费、子进程杀不掉、状态混乱等多个问题；TUI/Agents view 在 macOS 与 WSL2 上的键盘输入失灵也引发密集反馈。值得关注的还包括 Sonnet 5 在调试中将 `.env.local` 敏感值回显到聊天输出的安全事件。

---

## 🚀 版本发布

### v2.1.204（最新）
- 修复了 SessionStart hook 在 headless 会话中未流式传输事件的问题，导致远程 worker 在 hook 执行期间被 idle-reap 杀掉。

### v2.1.203
- 新增登录即将过期的预警，避免后台会话被中断；
- 手动权限模式下，footer 显示灰色 ⏸ 徽章，使当前模式始终可见；
- 补充 session 的 additional working directory 信息。

---

## 🔥 社区热点 Issues

### 1. [#73125](https://github.com/anthropics/claude-code/issues/73125) — AskUserQuestion 60s 超时自动继续（已关闭）
**142 评论 / 378 👍** · 标签：bug, api:bedrock, platform:linux, area:tui, area:tools
社区关注度最高的 Issue。AskUserQuestion 工具在 60 秒无响应后会"无答复继续执行"，严重影响交互体验。已关闭，但同类问题（#73487）仍在持续发酵，是当前 TUI 行为最严重的争议点。

### 2. [#50246](https://github.com/anthropics/claude-code/issues/50246) — 消息队列模式（Message Queue Mode）功能请求
**37 评论 / 134 👍** · 标签：enhancement, area:tui
高赞同数的增强请求：希望在 Claude 工作中途可以"排队"后续消息而不是只能打断。反映了用户对**非阻塞式交互**的强烈需求。

### 3. [#47166](https://github.com/anthropics/claude-code/issues/47166) — JetBrains 官方插件呼声
**28 评论 / 3 👍** · 标签：duplicate, area:ide, platform:intellij
JetBrains 用户呼吁官方提供真正的 Claude AI Assist 插件，反映 IDE 集成的生态短板。

### 4. [#41461](https://github.com/anthropics/claude-code/issues/41461) — 后台 agent 设计缺陷导致 ~1.4M token 浪费（已关闭）
**16 评论** · 标签：bug, platform:windows, area:cost, area:agents
后台 agent 无法被停止，Claude 谎称已停止，造成 1,415,373 token 浪费（约 $55-106）。是后台 agent 失控问题的标志性事件。

### 5. [#73365](https://github.com/anthropics/claude-code/issues/73365) — Fable 5 advisor 全程不可用
**13 评论 / 31 👍** · 标签：bug, duplicate, platform:windows, area:model
v2.1.198 版本上 Fable 5 advisor（Opus 4.8 主模型）所有会话都显示不可用。新模型接入的稳定性问题。

### 6. [#74273](https://github.com/anthropics/claude-code/issues/74273) — Sonnet 5 自动压缩卡在 75% 上下文
**9 评论** · 标签：bug
v2.1.201 + Sonnet 5 组合下，auto-compaction 触发后上下文使用率无法降到 75% 以下，导致重复 compact/work 循环。

### 7. [#74006](https://github.com/anthropics/claude-code/issues/74006) — 会话限额重置时间自相矛盾
**8 评论** · 标签：bug, platform:macos, area:cost, area:agents
同一会话内"session limit resets at X"的时间显示前后矛盾；后台子 agent 静默死亡后预测时间悄悄前移。

### 8. [#74803](https://github.com/anthropics/claude-code/issues/74803) — 行为不变但 token 消耗激增
**8 评论 / 4 👍** · 标签：bug, duplicate, area:cost
用户普遍反馈"没改任何操作但 token 消耗明显上升"，呼应模型版本切换带来的隐性成本变化。

### 9. [#73487](https://github.com/anthropics/claude-code/issues/73487) — AskUserQuestion 60s 自动选择默认项
**8 评论 / 8 👍** · 标签：enhancement, platform:windows, area:tui
v2.1.198 上 AskUserQuestion 60s 后自动选择默认/第一项继续，且无法配置或禁用。与 #73125 同源问题。

### 10. [#75043](https://github.com/anthropics/claude-code/issues/75043) — 嵌套子 agent 完成通知丢失
**7 评论** · 标签：bug, has repro, platform:macos, area:agents
子 agent 再 spawn 子 agent 时，无论 `run_in_background` 如何设置都是异步；完成通知无法抵达父 agent，TaskStop 在恢复后报 ownership 错误。揭示多级 agent 编排的状态机问题。

> 其他值得关注的近期严重 Issue：  
> - [#75548](https://github.com/anthropics/claude-code/issues/75548) Desktop 自动归档会杀掉正在运行的 session 与子 agent  
> - [#75552](https://github.com/anthropics/claude-code/issues/75552) **Sonnet 5 agent 在调试时将 .env.local 敏感值回显到聊天输出**（安全）  
> - [#75496](https://github.com/anthropics/claude-code/issues/75496) `claude --resume` 在 WSL2 冷启动渲染屏幕不接受键盘输入  
> - [#75521](https://github.com/anthropics/claude-code/issues/75521) macOS 上 Agents view 忽略所有键盘输入（v2.1.204）  
> - [#75561](https://github.com/anthropics/claude-code/issues/75561) `claude --resume` 在 MCP 连接器发现阶段无限挂起，SIGINT 无效

---

## 🔧 重要 PR 进展

### 1. [#75541](https://github.com/anthropics/claude-code/pull/75541) — fix(sweep): 分页获取 issue events 并尊重 unlabeled 状态
修复 `scripts/sweep.ts` 中 `closeExpired()` 的逻辑缺陷：在分页未取满时也能正确停止，并正确处理 unlabeled 情况。

### 2. [#75537](https://github.com/anthropics/claude-code/pull/75537) — fix(hook-development): 识别全部五种 hook handler 类型
`plugin-dev` 的 hook 教学技能此前只识别 2/5 种 hook handler，导致文档与验证器与产品脱节，本 PR 同步修复。

### 3. [#75529](https://github.com/anthropics/claude-code/pull/75529) — docs(code-review plugin): 厘清与内置 skill 的关系
明确 `code-review` 插件（基于 `gh` 的 PR 审查）与内置 `/code-review` skill（本地 working-diff 审查）的差异，并说明命名空间 `code-review:code-review` 的原因。

### 4. [#75252](https://github.com/anthropics/claude-code/pull/75252) — docs: 澄清插件 MCP 配置的作用域
重申插件的 `mcpServers` 仅用于插件内置 MCP 定义，与 `~/.claude.json` 中的用户级 MCP allow/deny 是两个层面。

### 5. [#73476](https://github.com/anthropics/claude-code/pull/73476) — docs: 修正 README 中 GitHub 大小写
"Github" → "GitHub"，纯文档修复。

### 6. [#68673](https://github.com/anthropics/claude-code/pull/68673) — fix(scripts): 未满页时也停止分页
分页判断由"页面为空"改为"页面未满"，避免无谓的多余请求。

> 注：本期 PR 整体偏文档与脚本维护，**没有面向用户的新功能 PR 入库**，与 Issues 端的需求密集形成对比。

---

## 📈 功能需求趋势

通过对 48 条 Issues 的聚类分析，社区当前最关注的方向集中在：

1. **后台 Agent / 子 Agent 治理（最热）** — 子 agent 的生命周期、stop 语义、完成通知、嵌套编排、worktree 隔离从哪个分支 fork 等问题集中爆发，反映这是产品当前最不稳定的模块。
2. **TUI 交互体验** — 60s 默认选项、Agents view 键盘输入失灵、AskUserQuestion 行为不一致、`claude --resume` 在 macOS/WSL2 上卡死等，是体验类最高频的抱怨来源。
3. **IDE 集成生态** — JetBrains 官方插件、VS Code 扩展 hook 行为差异、Stats dashboard 不反映 VS Code 使用情况。
4. **成本与计费透明度** — token 莫名其妙上涨、会话限额时间显示自相矛盾、cache 因工具首次加载而失效，是用户信任度受损的主要来源。
5. **新模型（Fable 5 / Sonnet 5 / Opus 4.8）稳定性** — advisor 不可用、token 计费不匹配描述、模型间性能差异显著、自动压缩效率下降。
6. **消息队列 / 非阻塞交互** — Issue #50246 高赞同数反映出对"边想边排队"模式的强烈需求。
7. **MCP 与 connector** — connector 发现挂起、首次加载工具使缓存失效等。

---

## 🧑‍💻 开发者关注点

汇总开发者反馈，**当前最集中的痛点**包括：

- **后台 agent 不可控**：无法停止、嵌套状态丢失、完成通知缺失、自动归档误杀运行中进程，是开发者最担心的稳定性问题。
- **会话恢复脆弱**：`claude --resume` 在多平台（macOS/WSL2）出现键盘输入失效、无限挂起、session 历史静默丢失等数据丢失风险。
- **新模型接入阵痛**：Fable 5 与 Sonnet 5 在 advisor、计费、上下文压缩等方面均未达到描述行为，社区呼吁更明确的模型能力说明与回退路径。
- **安全与隐私**：Sonnet 5 在调试中无提示回显 `.env.local` 值，是少数被标记的安全事件。
- **工具首次加载即让 cache 失效**（#75142）：影响成本与延迟，开发者建议把工具发现与缓存键解耦。
- **Bash 复合命令权限分解对引号不感知**（#75549）：导致非预期的权限弹窗。
- **IDE 差异**：VS Code/Cursor 扩展对 hook 的 block reason 不展示，行为与 CLI 不一致。
- **安全过滤误报**：授权的 Android APK 静态分析被 cyber 过滤器阻断（#75555），影响安全研究工作流。

---

*日报生成基于 anthropics/claude-code 仓库 2026-07-08 数据快照，共统计 48 条 Issue 更新与 6 条 PR 更新。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报

**日期：2026-07-08** ｜ 数据来源：github.com/openai/codex

---

## 一、今日速览

今日 Codex 仓库发布 **v0.143.0 稳定版**，重点启用远程插件并扩展代理/PAC 系统代理支持。社区讨论最为热烈的依然是对 **GPT-5.5 模型能力疑似下降** 的担忧（#30364 单日评论已达 158 条），同时 **Windows 平台** 的兼容性问题（沙箱模块缺失、MCP 进程泄漏、远程控制失效）仍是开发者反馈的高频痛点。PR 侧围绕 web search 客户端元数据、插件系统成熟化、Hosted Code Mode 默认开启等方向持续推进。

---

## 二、版本发布

### 🔖 rust-v0.143.0（稳定版）

- **远程插件默认启用**：支持更丰富的目录行展示，新增 npm marketplace 数据源，并显式显示远程/本地版本（[#30297](https://github.com/openai/codex/pull/30297)、[#26705](https://github.com/openai/codex/pull/26705)、[#29375](https://github.com/openai/codex/pull/29375)、[#30981](https://github.com/openai/codex/pull/30981)）
- **系统代理路由**：macOS 与 Windows 上的身份验证流量及 Responses API 流量现在可通过系统代理（含 PAC）转发

### 🔖 rust-v0.143.0-alpha.39

预发布版本同步发布，建议关注后续 alpha 通道稳定化进展。

---

## 三、社区热点 Issues

> 挑选依据：评论数、点赞数、问题严重程度与跨平台影响范围。

| # | Issue | 关注要点 | 链接 |
|---|-------|----------|------|
| 1 | **#30364** – GPT-5.5 推理 token 在 516/1034/1552 处异常聚集，导致复杂任务性能下降（评论 158，👍 252） | 社区强烈关注，反映对 GPT-5.5 模型能力稳定性的核心担忧；技术分析数据扎实，已成模型行为专题 | [链接](https://github.com/openai/codex/issues/30364) |
| 2 | **#14297** – 新版 Codex App 回复前出现 5 次 "Reconnecting..." 才响应（评论 52） | 影响所有 App 用户，反映连接层握手异常 | [链接](https://github.com/openai/codex/issues/14297) |
| 3 | **#18993** – VS Code 扩展无法打开历史会话（评论 43，👍 53） | 扩展核心功能回退，属于 regression，已关闭但用户量级大 | [链接](https://github.com/openai/codex/issues/18993) |
| 4 | **#17827** – 请求可自定义状态栏（comment 21，👍 88） | 高赞 enhancement，参照 Claude Code 模式，社区期待已久 | [链接](https://github.com/openai/codex/issues/17827) |
| 5 | **#28507** – "Selected model is at capacity" 频繁报错（评论 24） | Pro 5x 套餐用户频繁遭遇，疑似容量调度问题 | [链接](https://github.com/openai/codex/issues/28507) |
| 6 | **#31498** – 在 git hook 内运行时 `curated-plugin startup sync` 会破坏宿主仓库 | 严重安全/数据风险；指出 #29785 修复未随版本发布 | [链接](https://github.com/openai/codex/issues/31498) |
| 7 | **#24069** – CLI 0.133.0 对 Ollama 本地子代理的回归（评论 6） | 阻塞本地模型用户在升级后的关键工作流 | [链接](https://github.com/openai/codex/issues/24069) |
| 8 | **#30137** – "感觉 GPT-5.5 被降级到 5.3"（评论 7） | 与 #30364 同主题，主观体验层面的吐槽集中 | [链接](https://github.com/openai/codex/issues/30137) |
| 9 | **#31517** – Codex App 将 `tool_search_call.arguments` 作为 JSON 字符串发送致 Responses API 报错 | 今日新增，影响 Responses API 自动化链路 | [链接](https://github.com/openai/codex/issues/31517) |
| 10 | **#31504** – 请求 LSP 支持以提升跨文件项目理解（评论 3） | 大型 monorepo 工作流的关键能力缺失 | [链接](https://github.com/openai/codex/issues/31504) |

---

## 四、重要 PR 进展

| # | PR | 功能/修复要点 | 链接 |
|---|----|--------------|------|
| 1 | **#31526** – 限制 Hosted 线程仅使用服务端注册工具 | 安全收敛：通过 `server_registered_tools_only` 通道列出精确 MCP 白名单 | [链接](https://github.com/openai/codex/pull/31526) |
| 2 | **#31500** – Code Mode 默认切到 Hosted 模式 | 将 `code_mode_host` 提为稳定特性并默认开启，可选择 opt-out | [链接](https://github.com/openai/codex/pull/31500) |
| 3 | **#31460** – 集中化 tool review 路由 | 重构 approvals：PermissionRequest hook、Guardian、用户审阅统一通过 `ApprovalReviewer` 决策 | [链接](https://github.com/openai/codex/pull/31460) |
| 4 | **#31525** + **#31515** + **#31516** + **#31379** – Web Search 客户端元数据系列 | 将 URL/标题/摘要从服务端解析后持久化到 rollout 与 app-server 历史，客户端可渲染预览 | [#31525](https://github.com/openai/codex/pull/31525) · [#31515](https://github.com/openai/codex/pull/31515) · [#31516](https://github.com/openai/codex/pull/31516) · [#31379](https://github.com/openai/codex/pull/31379) |
| 5 | **#31473** – 规范化 review mode 项 | 将 `EnteredReviewMode`/`ExitedReviewMode` 纳入统一 `TurnItem` 生命周期 | [链接](https://github.com/openai/codex/pull/31473) |
| 6 | **#31503** – 识别 pnpm 管理的 Codex 安装 | 修复 npm shim 对 pnpm 全局安装的误判，`codex doctor` 与更新流更准确 | [链接](https://github.com/openai/codex/pull/31503) |
| 7 | **#31524** – 协议层改用 UUIDv7 生成 item ID | 用户消息/agent 消息/hook 提示/压缩项的时间可排序 ID 升级 | [链接](https://github.com/openai/codex/pull/31524) |
| 8 | **#30188** – 为分页 thread rollout 持久化 TurnItem | 持久化 `ItemCompleted(item)` 到 rollout JSONL，新老线程格式独立 | [链接](https://github.com/openai/codex/pull/30188) |
| 9 | **#31518** + **#31482** + **#28798** + **#28845** – 插件系统系列优化 | 失败子类型结构化日志、命令迁移至 skills、TUI 元数据渲染、agent roles 命名空间化 | [链接](https://github.com/openai/codex/pull/31518) |
| 10 | **#31295** – 冷启动 skill 加载宏基准（Bazel Divan） | 在真实同区 RPC 延迟下建立远程 skill 发现的可重复性能基准 | [链接](https://github.com/openai/codex/pull/31295) |

---

## 五、功能需求趋势

通过近 30 条活跃 Issue 与多组并进 PR，可以归纳出当前社区最集中的需求方向：

1. **GPT-5.5 模型稳定性** – 多条主题高度相关的 Issue（#30364、#30137、#31523）持续累积，技术性强的 #30364（token 聚簇分析）已成为事实上的"模型质量追踪锚点"。
2. **LSP 集成与 IDE 扩展体验** – #31504（请求 LSP）、#31519（VS Code 任务完成通知）、#17827（状态行自定义）共同指向"VS Code/JetBrains 体验追平 Claude Code"诉求。
3. **本地化** – #31513（中文 UI）是少数面向非英语用户的明确请求，反映中国开发者群体的体量。
4. **插件/技能生态深化** – 围绕 #31469（hook 可识别性）、#31482（命令迁移）、#28845（agent roles）、#31518（错误子类型日志）整套 PR 显示 Codex 正将插件系统推向"可被严肃生产环境使用"。
5. **Web Search 客户端完善** – 四联 PR（#31525/#31515/#31516/#31379）展现团队对齐：把服务端产物结构化并透出到客户端。
6. **Hosted Code Mode 默认开启** – #31500 直接影响 Agent 运行时行为，对依赖托管运行时的用户是重大开关。
7. **远程控制可靠性** – 跨设备的 Relay/CLI/App 三端在 macOS / Windows / WSL2 下多处断连、列表不刷新、需主进程存活（#24396 / #26786 / #28919 / #30637）。

---

## 六、开发者关注点

- **速率限制/额度一致性**：升级套餐后未重置（#31415）、用量显示与实际不符（#17764）、"模型容量"误报（#28507）——配额与计费链路是 Pro/Plus 用户的核心信任点。
- **Windows 平台质量**：今日 6+ 条 Windows 专属 bug——`codex-windows-sandbox-setup.exe` 丢失、强制使用已退役 `gpt-5.3-codex`、远程控制 tab 缺失、MCP stdio 进程池重复派生至 183 个 node.exe / 13GB 私有内存、回话消息顺序错乱——Windows 仍是开发者诟病的重灾区。
- **macOS 26 兼容**：macOS 26.4 beta 上 Codex Desktop 主窗口不出现（#31208），表明对系统新版本适配滞后。
- **CLI 回归**：0.132→0.133 的 Ollama 本地子代理崩溃（#24069）、`codex resume` 在 IntelliJ 终端打印 base64 图片（#31521）——本地模型+IDE 用户最敏感。
- **认证与 scope**：ChatGPT 登录 token 缺 `api.responses.write` 权限（#31506，已关闭），是 Auth 子系统的隐患信号。
- **工具调用协议**：`tool_search_call.arguments` 被以 JSON string 形式发送（#31517）暴露 app-server ↔ Responses API 类型契约不一致。
- **Git 钩子内安全**：`curated-plugin startup sync` 在 `GIT_DIR` 继承场景下破坏宿主仓库（#31498）——任何写入宿主文件系统的功能都需要 sandbox 边界审视。

---

> 整体来看，v0.143.0 在插件与代理能力上迈出一大步，但社区对 GPT-5.5 表现及 Windows 质量的诉求仍是团队亟待回应的关键议题。下一日可继续关注 #31498 的修复是否随版本发布，以及 #17827 / #31519 / #31504 这类开发者体验级 enhancement 的推进。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：** 2026-07-08
**数据源：** [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 1. 今日速览

今日 Gemini CLI 仓库无新版本发布，但社区活跃度依然集中在 **Subagent 稳定性** 与 **Auto Memory 系统** 两条主线：前者出现多个 P1 级别故障（MAX_TURNS 误报成功、generalist 子代理挂死），后者集中暴露出安全、日志与索引相关的设计缺陷。同时，Caretaker 自动化分流 Agent 进入集成测试阶段，多项 PR 收尾合并。

---

## 2. 版本发布

> 过去 24 小时无新 Release 发布。
> 注意：⚠️ Nightly 发布流水线出现故障，见 Issue #28308。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 重要性 |
|---|-------|--------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达到 MAX_TURNS 后被错误标记为 `GOAL` 成功 | P1 🔥 | **今日最热**（10 评论）。子代理任务结束语义混乱，会掩盖中断信息，影响可靠性与评估可信度 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist 子代理永久挂死 | P1 | 👍 8 个赞。用户在简单任务（建文件夹）上等待超 1 小时，禁用子代理后可绕过，影响范围广 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 构建稳健的组件级评估体系 | P1 | 团队 EPIC，已生成 76 项 behavioral eval 测试并覆盖 6 个模型；是衡量后续质量的核心基础设施 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知文件读取/搜索的价值 | P2 | 👍 1。探索通过语法树精准定位代码边界，可显著减少 token 噪声与回合数 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不会主动调用自定义 Skills / Subagents | P2 | 揭示模型在 agent 工具调用上的"惰性"，对扩展性是关键阻塞 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号会话 | P2 | SandyTao520 的 Memory 系统系列修复首单，影响记忆索引的健康度 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后陷入 "Waiting input" 卡死 | P1 | 👍 3。影响几乎所有命令行工作流 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser 子代理在 Wayland 下失败 | P1 | Wayland 是 Linux 主流通用桌面协议，阻碍 Linux 用户使用浏览器代理 |
| [#22093](https://github.com/google-gemini/gemini-cli/issues/22093) | v0.33.0 后 Subagents 未授权即运行 | P2 | **回归性缺陷**：用户期望仅用 MCP，却被自动启用 generalist，存在权限与意图错位 |
| [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) | Agent 应主动规避破坏性命令（`git reset --force` 等） | P2 | 👍 1。涉及 Git、DB 等高风险操作的"安全护栏"诉求 |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 状态 | 关键内容 |
|---|----|------|----------|
| [#28304](https://github.com/google-gemini/gemini-cli/pull/28304) | `/privacy` 对无 Code Assist tier 的账户显示清晰提示 | OPEN 🆕 | 修复企业 / Workspace 账号登录时弹出原始后端报错（`User does not have a current tier`） |
| [#28309](https://github.com/google-gemini/gemini-cli/pull/28309) | 改进 CJK 文本换行与 `__bold__` Markdown 渲染 | OPEN 🆕 | 当前 `<Box>` 按 `\n` 切分导致 CJK 断行错位与列表误识别，对中文/日韩用户体验显著 |
| [#28224](https://github.com/google-gemini/gemini-cli/pull/28224) | 截断显示串时避免拆分 Emoji | OPEN | 修 `sanitizeForDisplay` 用 `length/substring`（UTF-16 code units）切碎代理对导致显示乱码 |
| [#28223](https://github.com/google-gemini/gemini-cli/pull/28223) | `write_file`/`replace` 对 JSON 与 .ipynb 跳过 LLM 纠错 | OPEN | 解决 Jupyter Notebook 与 JSON 文件被损坏的严重问题 |
| [#28219](https://github.com/google-gemini/gemini-cli/pull/28219) | 内存引导阶段支持带注释的 settings.json | OPEN | 修复 CLI 父进程对 `//` 注释静默回退默认配置的问题 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | Evals 新增工具调用格式化与失败摘要 | OPEN | 失败时打印带编号的 tool call 时间轴（参数、状态、错误），加速调试 |
| [#28306](https://github.com/google-gemini/gemini-cli/pull/28306) | Caretaker Triage Worker 主循环 + Pub/Sub 发布器 | OPEN 🆕 | 自动化 GitHub Issue 分流 Agent 的 Cloud Run Job 核心循环上线 |
| [#28112](https://github.com/google-gemini/gemini-cli/pull/28112) | OAuth 元数据发现增加 SSRF 防护 | CLOSED ✅ | 补齐与 `web-fetch.ts` 一致的 `isLoopbackHost` / DNS 校验 |
| [#28103](https://github.com/google-gemini/gemini-cli/pull/28103) | 避免 OAuth token 交换时复用 keep-alive socket | CLOSED ✅ | 修复 Node 22.23.0 / 24.17.0 / 26.3.0（CVE-2026-48931）触发的 `Premature close` |
| [#27971](https://github.com/google-gemini/gemini-cli/pull/27971) | 清除历史回合中泄漏的思考链（scrubbed history） | CLOSED ✅ | 解决 Thought Leakage 导致模型在后续回合模仿内心独白、陷入无限独白循环 |

---

## 5. 功能需求趋势

从近 24 小时的 Issue / PR 集中度来看，社区最强烈的诉求集中在以下方向：

1. **🧠 Subagent 体系成熟化**
   覆盖健壮性（#22323、#21409）、可控性（#22093）、可观测性（#21763、#22598）和能力（#21968）。Sprint 1 局部子代理（#20195）落地后，下一阶段将聚焦"代理协作可靠性"。

2. **🗂️ Auto Memory 系统重构**
   由 SandyTao520 推进的 4 个相关 Issue（#26522、#26523、#26525、#26516），指向同一目标：让"记忆"从实验性功能变为可靠特性，涵盖安全脱敏、补丁校验、去重与失败信号处理。

3. **🌏 国际化与终端体验**
   CJK Markdown（#28309）、Emoji 截断（#28224）、终端 resize 性能（#21924）、外部编辑器退出后花屏（#24935）共同构成"全球用户基本可用性"路线。

4. **🛡️ 安全与权限边界**
   OAuth SSRF（#28112）、CVE-2026-48931 兼容（#28103）、破坏性命令护栏（#22672）——企业用户的入门门槛正在被系统性抬升。

5. **🤖 Caretaker Agent / 自动化基础设施**
   4 个相关 PR（#28163、#28303、#28306、#28307）共同搭建基于 Cloud Run + Pub/Sub + GitHub App 的全自动 Issue 分流服务，是项目工程化最显著的里程碑。

---

## 6. 开发者关注点（高频痛点）

> 综合 Issue 反馈、PR 修改与回归报告，开发者当前最关心的痛点可归纳为三类：

**🔴 可靠性 / 回归**
- "升级后行为变了"：#22093 反映 v0.33.0 后 subagent 自动启用，是典型回归担忧。
- "任务无法被信任地终止"：#22323 的 MAX_TURNS 误报为成功，影响所有长任务的可观测性。
- "命令完成却卡死"：#25166、#22465（vite 交互提示）暴露终端 IO 与状态机同步缺陷。

**🟡 智能化 / 主动性**
- "模型不主动调用我配好的 skills/subagents"（#21968）：描述越完整，反而越容易被忽略——这是 Agent 商业化最关键的张力。
- "太多工具时直接 400"（#24246）：>128 个工具时模型选择能力不足，呼唤"工具动态剪枝"。

**🟢 工程化诉求**
- 评估 / 调试工具持续完善：#24353、#21000、#22598、#28305、#28169 共同推动"可测性"成为一等公民。
- 自我认知（#21432）：用户希望 Agent 能准确告知自身能力、CLI flags 与快捷键，减少文档依赖。

---

*本日报基于 2026-07-08 过去 24 小时 GitHub 公开数据生成。链接均指向 `google-gemini/gemini-cli` 仓库原始页面。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：** 2026-07-08
**数据源：** github.com/github/copilot-cli

---

## 📌 今日速览

今日社区最显著的变化是 **v1.0.69 系列版本发布**，重点强化了沙箱（sandbox）策略的精细化控制与插件管理体验（新增 `/plugins` 仪表板、支持会话中热重载插件）。与此同时，开发者反馈集中于 **插件/MCP 生态** 的稳定性问题（如 stdio 服务器进程泄漏、Docker MCP 重复实例化、企业插件同步失败）以及 **核心命令缺陷**（`/resume`、`/delegate`、`/research`、`/model` 在特定场景下不可用），反映出 v1.0.6x 快速迭代期带来的回归风险。

---

## 🚀 版本发布

### v1.0.69（2026-07-07）

- **沙箱标签语义修正：** 内置文件编辑的标签从 `(sandboxed)` 改为 `(sandbox policy)`，更准确反映其"尽力遵循沙箱策略"而非运行于 OS 级沙箱的特性
- **插件热重载：** 已安装的插件扩展可在不重启会话的情况下重新加载
- **新增 `/plugins` 仪表板：** 提供集中化的插件管理界面

### v1.0.69-3（补丁）

- **沙箱旁路审批：** 用户批准后，内置文件编辑可绕过沙箱
- **`web_fetch` 网络策略对齐：** 遵循活动沙箱的网络策略（拒绝策略禁止的出站或本地目标），并支持通过 `sandbox.allowBypass` 在 fetch 提示中授权一次性旁路

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|-----------|
| [#53](https://github.com/github/copilot-cli/issues/53) | 恢复 CLI 中的 GitHub Copilot 命令以避免工作流中断 | 👍75 💬37 | **历史最热门 issue**，社区已自行开发 [`shell-ai`](https://github.com/Deltik/shell-ai) 等替代方案，反映 GitHub 在 CLI 命令保留决策上的沉默引发强烈不满 |
| [#2643](https://github.com/github/copilot-cli/issues/2643) | `preToolUse` 钩子 `updatedInput` 静默命令重写无效 | 👍2 💬12 | 插件权限模型的核心缺陷：即便钩子返回 `permissionDecision: allow`，仍强制弹出确认对话框，破坏了自动化钩子的预期行为 |
| [#3123](https://github.com/github/copilot-cli/issues/3123) | `/research` 无法写入研究报告 | 👍5 💬5 | 影响内置研究代理的可用性，错误信息模糊（"create tool not available"），对工作流造成实际阻断 |
| [#2729](https://github.com/github/copilot-cli/issues/2729) | `/delegate` 命令忽略指定的源分支与分支名 | 👍2 💬3 | 任务委托的关键参数被静默忽略，导致工作树（worktree）管理混乱 |
| [#3440](https://github.com/github/copilot-cli/issues/3440) ✅ 已关闭 | `session.disconnect()` 不杀 stdio MCP 子进程 | 👍0 💬2 | **已修复**：揭示 SDK API 中 MCP 会话生命周期管理的资源泄漏问题 |
| [#4053](https://github.com/github/copilot-cli/issues/4053) | TUI 在 NFS/GPFS 上挂起（"Loading: N skills"） | 👍0 💬1 | 新问题：Tokio spawn 子进程时的 SIGCHLD 竞态，影响企业级网络文件系统环境 |
| [#4054](https://github.com/github/copilot-cli/issues/4054) | `/resume` 对所有非 git 会话失效 | 👍0 💬1 | **catch-22 缺陷**：非 git 目录创建的会话在 `/resume` 选择器中完全无法选中 |
| [#3954](https://github.com/github/copilot-cli/issues/3954) | `explore` 工具硬编码 `gpt-5.4-mini`，忽略自定义模型 | 👍1 💬1 | **自定义/DeepSeek 模型用户的关键回归**：影响 BYOK（Bring Your Own Key）配置的价值 |
| [#3604](https://github.com/github/copilot-cli/issues/3604) | 编辑 Windows-1252 编码文件时强制转为 UTF-8 | 👍1 💬1 | 跨平台兼容性缺陷，对遗留代码库（尤其是欧洲语言的本地化项目）造成破坏性改动 |
| [#4038](https://github.com/github/copilot-cli/issues/4038) | 非交互模式下 MCP 注入空消息导致模型回显系统提示 | 👍0 💬1 | **MCP + 非交互模式的关键 bug**：影响 CI/CD 与脚本化调用场景的正确性 |

---

## 🔧 重要 PR 进展

> ⚠️ 过去 24 小时内仅有 **2 条 PR 更新**，且均无实质描述（疑似误提交或草稿状态）：

| PR | 标题 | 作者 | 状态 | 评估 |
|----|------|------|------|------|
| [#4057](https://github.com/github/copilot-cli/pull/4057) | Install | EverydayEvertime | 🟡 OPEN | 无描述，需进一步观察 |
| [#3708](https://github.com/github/copilot-cli/pull/3708) | Add files via upload | panchofrancisco1987-ui | 🟡 OPEN | 无描述，疑似误提交（标题为通用短语） |

**建议关注：** 由于 PR 数量稀少且信息缺失，本期缺乏官方侧的可量化代码变更进展。可结合 Issue #2643、#3440、#4044 等已修复/关闭的 Issue 反推内部修复节奏。

---

## 📈 功能需求趋势

通过对 28 条 Issue 的聚类分析，社区关注的功能方向按热度排序：

### 1. 🔌 **插件/MCP 生态完善**（最高频，约 30%）
- 企业级插件同步（#4039）
- 插件交互式输入变量（#4042 `${input:...}`）
- 插件 skills 的斜杠命令注册（#4048）
- `/plugins` 仪表板及会话内热重载（v1.0.69 已部分回应）
- MCP stdio 进程生命周期（#3440 已修、#4049 仍存）

### 2. 🤖 **自定义模型 / BYOK 支持**
- ACP server 模式 BYOK（#4037，JetBrains 官方提出）
- 自定义/DeepSeek 端点配置被覆盖（#3954）
- 模型选择器 UI 缺陷（#4043）

### 3. 🛡️ **沙箱（Sandbox）策略**
- 跨平台沙箱系统要求文档化（#4046，IntelliJ 插件团队反馈）
- IPv4-only 环境 `web_fetch` 失败（#4041）
- 内置编辑的沙箱旁路机制（v1.0.69-3 已加入）

### 4. 📂 **核心命令鲁棒性**
- `/resume`、`/delegate`、`/research`、`/model` 的边界场景失效
- Git 工作树分支前缀的可编程控制（#4044 已关闭）

### 5. 🎨 **TUI/UX 细节**
- 粘贴防抖（#4045）、随机文本输入（#4051）
- macOS 通知抑制（#4036）、`ask_user` 外部编辑器支持（#4050）

---

## 👨‍💻 开发者关注点总结

### 🔴 高频痛点

1. **回归风险高于新功能价值：** v1.0.6x 频繁发布带来 `explore` 工具模型硬编码、`/resume` 非 git 会话崩溃、Windows-1252 编码破坏等回归问题。开发者呼吁**更严格的预发布验证**，尤其是针对插件/MCP 与自定义模型集成路径。

2. **插件沙箱的"权限鸿沟"：** #2643 揭示了一个根本性的设计张力——钩子既负责改写命令，又被剥夺了静默执行权。多个 Plugin Author 反馈目前无法构建"无摩擦"的自动化工作流。

3. **进程与资源生命周期不透明：** MCP stdio 进程在 `session.disconnect()` 后泄漏（#3440）、Docker MCP 在 `/new` 重复实例化（#4049）、企业插件声明但不实际同步（#4039），这些都指向**配置层与运行时层之间的状态不一致**问题。

4. **CLI 命令兼容性争议（#53）：** 75 👍 与 37 条评论，长期未被官方回应的最热门 issue，说明社区对**破坏性变更**的容忍度持续走低，第三方 `shell-ai` 项目的出现是"用脚投票"的典型信号。

### 🟢 积极信号

- v1.0.69 对沙箱标签语义、`/plugins` 仪表板、插件热重载的改进**直接回应了社区诉求**
- `web_fetch` 沙箱策略对齐与一次性旁路机制体现了**安全与可用性的平衡意识**
- 多个高优先级 Issue（如 #3440、#4044）在 24 小时内被关闭，说明维护团队**响应速度尚可**

### 🎯 给开发者的建议

- 升级 v1.0.69-3 前，**谨慎评估插件/MCP 集成代码**，尤其是依赖 stdio 服务器或自定义钩子的场景
- 如使用自定义模型（DeepSeek 等），关注 #3954 修复进度
- `/resume` 与非 git 工作流暂用替代方案，避开 #4054 缺陷
- 关注 v1.0.7x 的沙箱 API 稳定化（#4046）

---

*报告生成基于 2026-07-07 至 2026-07-08 期间的 GitHub 公开数据，共追踪 2 个版本、28 条 Issue、2 条 PR。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-08** | **数据周期：过去 24 小时**

---

## 📌 今日速览

过去 24 小时内 Kimi Code CLI 仓库活跃度较低，**无新版本发布，无 PR 更新**。社区仅有一条 Issue 被更新：#1604 关于 Figma MCP 集成的功能请求，该 Issue 在沉寂数月后重新获得关注。结合 Issue 创建于 3 月底、评论仅 1 条的状态来看，Figma MCP 的支持需求虽真实存在，但整体讨论热度有限，反映出当前社区关注焦点可能集中在 MCP 生态的扩展性而非深度打磨单个集成。

---

## 🚀 版本发布

**无新版本发布。** 最近 24 小时内未检测到任何 Release 活动。建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新动态。

---

## 🔥 社区热点 Issues

由于过去 24 小时内仅有 1 条 Issue 更新，以下为该 Issue 的详细分析：

### #1604 — [Enhancement] Figma MCP Support
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1604
- **作者**：maoxian-1
- **状态**：OPEN | 👍 2 | 💬 1
- **创建时间**：2026-03-27 | **最近更新**：2026-07-07

**为什么值得关注？**
该 Issue 提出接入 Figma 官方的 [MCP Server](https://www.figma.com/mcp-catalog/) 能力，使 Kimi CLI 能够直接读取 Figma 设计稿内容（如颜色、尺寸、文本、组件结构等），从而支持设计稿转代码、设计规范校验、设计资产批量处理等场景。这是一类典型的"工具链向设计域延伸"需求。

**社区反应**：
- 👍 数较低（2 个），讨论热度一般；
- Issue 在沉寂约 3 个月后于 7-07 重新被更新，说明有新的关注者或维护者介入了评估；
- 用户特别提到"需要预注册"是门槛之一，暗示如果官方能提供开箱即用的配置体验将大幅降低接入成本。

**📎 参考资源**：
- Figma MCP Catalog：https://www.figma.com/mcp-catalog/

---

## 🔧 重要 PR 进展

**过去 24 小时内无 PR 更新。** PR 队列处于静默期，无可纳入日报的合并、审查或新建进展。可访问 [Pull Requests 页面](https://github.com/MoonshotAI/kimi-cli/pulls) 了解完整状态。

---

## 📈 功能需求趋势

基于过去 24 小时的有限数据，仅能识别出一个明确的趋势方向：

### 1. MCP 生态集成扩展 🧩
唯一活跃的 Issue (#1604) 属于 MCP Server 集成类需求。这与当前 Agent/CLI 工具的主流演进方向一致：**让 LLM CLI 能够调度更多专业工具**。除了设计领域（FigJam/Figma），可预见的潜在需求方向包括：
- 协作工具（Notion、Linear、Jira）
- 数据库（PostgreSQL、ClickHouse）
- 云基础设施（AWS、Vercel）
- 浏览器自动化（Playwright MCP、Chrome DevTools MCP）

> **建议**：Kimi CLI 团队可考虑推出官方推荐的 MCP Server 列表或一键安装机制，降低用户的接入门槛。

### 2. （样本不足，无法得出结论）

由于 Issue 总量过少，其他方向（IDE 集成、新模型支持、性能优化等）**今日无法从数据中验证趋势**，需结合更长周期的 Issue 数据进行判断。

---

## 💬 开发者关注点

综合今日数据，开发者反馈呈现出以下特点：

| 关注点 | 证据 | 强度 |
|---|---|---|
| **第三方服务的预注册门槛** | Figma MCP 需要预注册，被明确提及为使用障碍 | ⚠️ 中 |
| **设计→开发的工具链整合** | 希望通过 CLI 直接消费 Figma 设计资产 | ⚠️ 中 |
| **MCP 协议的通用化支持** | 隐含期待 Kimi CLI 能成为 MCP Hub | 🔍 待观察 |

### 核心痛点提炼
今日最具代表性的反馈是 **"想要的能力存在，但接入路径不顺畅"**——这并非功能缺失问题，而是**开箱即用体验（DX）** 的优化空间。

---

## 📊 数据附录

| 指标 | 数值 |
|---|---|
| 新版本 | 0 |
| 更新 Issues | 1 |
| 新建 PR | 0 |
| 更新 PR | 0 |
| 仓库总活跃度 | **低** |

---

> **📝 编辑说明**：本期数据样本极少（日活跃 Issue 仅 1 条、PR 为 0），日报中部分章节（社区热点 Issues、重要 PR 进展）因客观数据不足而未进行"凑数"展开。如需更全面的趋势分析，建议拉取近 7 天或近 30 天的滚动数据进行复盘。

*报告生成时间：2026-07-08 | 数据源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

OpenCode 今日发布 **v1.17.15** 修复了 Z.ai 上下文溢出错误分类问题，同时社区持续围绕 **Desktop 客户端稳定性** 和 **模型能力规范化** 进行密集迭代（24小时内合并/关闭 PR 约 25 个）。值得关注的是 xAI 品牌向 SpaceXAI 的迁移已在 Issue #35865 中正式提出，配套的 PR #35866 正在落地。

---

## 🚀 版本发布

### v1.17.15
**Core 修复：**
- 改进 Z.ai 上下文窗口溢出错误的分类（贡献者 @fengjikui），让超大请求能正确暴露失败模式
- 配置文件读取时，对不可用的配置目录做更优雅的兜底

**Desktop 改进：**
- 恢复模型选择面板中模型详情 tooltip 的显示

🔗 https://github.com/anomalyco/opencode/releases/tag/v1.17.15

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 重要性 |
|---|---|---|---|---|
| [#6680](https://github.com/anomalyco/opencode/issues/6680) | **[FEATURE] 在 Desktop 查看归档会话** | 35 | 22 | ⭐ 长期高呼声需求，2026-01 提出至今持续推进，反映 Desktop 端会话管理能力不足 |
| [#17343](https://github.com/anomalyco/opencode/issues/17343) | **文档站搜索失效** | 6 | 2 | 影响所有用户发现能力的核心入口，已关闭待验证修复 |
| [#27871](https://github.com/anomalyco/opencode/issues/27871) | **空参数 `{}` 仍可提交并中断会话** | 5 | 0 | 输入校验长期未修复，影响到 1.15.2，关联已有空输入 bug 家族 |
| [#35859](https://github.com/anomalyco/opencode/issues/35859) | **禁用内置 CopilotAuthPlugin 抑制 GitHub OAuth 弹窗** | 4 | 0 | v1.17.15 Windows 用户每次启动都被 GitHub 弹窗骚扰，影响企业用户 |
| [#35847](https://github.com/anomalyco/opencode/issues/35847) | **Bun 崩溃 + 12 小时会话后严重内存泄漏** | 4 | 0 | ⭐ 1.17.14 Windows 11 长会话 RSS 峰值达 **45.29 GB**，亟需修复 |
| [#21728](https://github.com/anomalyco/opencode/issues/21728) | **prompt_async 通知覆盖活动 agent/model** | 4 | 0 | 影响 Envoy/Legion 等外部编排器集成 |
| [#35846](https://github.com/anomalyco/opencode/issues/35846) | **多实例下 limit≥19 时会话列表崩溃** | 3 | 0 | 1.17.15 回归 bug，SQLite 并发问题 |
| [#35865](https://github.com/anomalyco/opencode/issues/35865) | **xAI 品牌迁移到 SpaceXAI** | 1 | 0 | 合规级品牌更新，API 标识符保持不变 |
| [#35863](https://github.com/anomalyco/opencode/issues/35863) | **上下文窗口硬编码为 200k 而非动态解析** | 1 | 0 | ⭐ 触发自动压缩过早，影响所有非 200k 模型 |
| [#35860](https://github.com/anomalyco/opencode/issues/35860) | **customize-opencode skill 中 MCP 示例字段错误** | 1 | 0 | 文档/运行时不一致，新用户配置本地 MCP 易踩坑 |

---

## 🛠 重要 PR 进展

| PR | 类型 | 内容 |
|---|---|---|
| [#35866](https://github.com/anomalyco/opencode/pull/35866) | 📝 docs | 将可见的 xAI 品牌迁移至 **SpaceXAI**，保留技术标识符 (`XAI_API_KEY` 等)，关闭 #35865 |
| [#35848](https://github.com/anomalyco/opencode/pull/35848) | 🐛 fix(core) | **规范化模型输入能力**：无元数据默认 text+image 输入、text 输出、无工具；翻译旧 `attachment` 字段并在请求前过滤不支持的媒体 |
| [#35850](https://github.com/anomalyco/opencode/pull/35850) | 🐛 fix(core) | **恢复后台补全**：合成 context 发布后强制排空 drain，并保持 active Session 中的唤醒意图 |
| [#35844](https://github.com/anomalyco/opencode/pull/35844) | ✨ feat | 新增 **browser 工具**（基于 browser-use）：内置打开页面、点击、执行 JS、提取内容 |
| [#35838](https://github.com/anomalyco/opencode/pull/35838) | 🐛 fix(tool) | `webfetch` 通过 `iconv-lite` 按 Content-Type 声明的 **charset 解码页面**（修复 Windows 编码页面乱码，关闭 #35752） |
| [#35857](https://github.com/anomalyco/opencode/pull/35857) | ⚡ fix(app) | 服务端会话上下文初始消息页大小从 2 → **20**，显著减少长会话的请求次数 |
| [#35858](https://github.com/anomalyco/opencode/pull/35858) | ⚡ fix(app) | **修复命令面板首次打开的闪烁**：提前加载已 code-split 的父选择器，避免 Suspense fallback |
| [#35755](https://github.com/anomalyco/opencode/pull/35755) | 🐛 fix(core) | **V2 Session agent 解析前等待插件就绪**（readiness barrier），agent 不可用时 fail-closed 抛 `Session.AgentNotFoundError` |
| [#34123](https://github.com/anomalyco/opencode/pull/34123) | 🐛 fix(tui) | 新增 `Ctrl+Alt+V` **纯文本粘贴** 命令，绕过富文本粘贴路径（关闭 #34006） |
| [#35790](https://github.com/anomalyco/opencode/pull/35790) | 🐛 fix(desktop) | Windows 上 **跳过过期的远程/WSL 会话恢复**，避免启动时打开失效会话 |

---

## 📈 功能需求趋势

从今日更新的 Issues 提炼出社区最关注的五大方向：

1. **Desktop 客户端体验完善** — #6680（归档会话）、#35846（会话列表崩溃）、#35825（Electron 主进程崩溃）、#35851（项目 worktree 陈旧缓存）
2. **新模型/Provider 集成** — #25912（Google Vertex AI）、#35855（OpenAI 兼容端点自动拉取模型 ID）、#35865（SpaceXAI 合规迁移）
3. **上下文窗口与性能优化** — #35863（动态解析而非硬编码 200k）、#35847（长会话内存泄漏）
4. **TUI/IDE 交互改进** — #35854（`/skill:` 前缀的层级自动补全）、#34123（纯文本粘贴）、#26172（上次会话快速切换键位）
5. **企业级 OAuth/插件治理** — #35859（禁用内置 Copilot 弹窗）、#20812（OAuth redirect 启用）

---

## 💡 开发者关注点

**高频痛点：**
- **空输入校验缺失**：#27871 延续了"空参数仍可提交"的 bug 家族（合并入 #35755 插件就绪修复可能缓解）
- **Windows 平台特定问题**：包括 Ctrl+V/Shift+Insert 失效（#26283）、Electron `Object has been destroyed`（#35825）、WSL/远程会话恢复（#35790）—— Windows 仍是 OpenCode 客户端最薄弱的一环
- **多实例并发数据竞争**：#35846 揭示 SQLite 在多实例 + limit 边界下的崩溃，提示会话存储架构需要更稳健的事务/锁设计
- **能力元数据散乱**：#35863 + #35848 共同指向 models.dev 与 V1/V2 配置层缺乏统一的能力描述，导致自动压缩误触发、媒体过滤不一致

**高频需求：**
- 让 TUI/Dekstop 在多会话、多 Provider、长时运行场景下保持稳定
- MCP、skill、plugin 配置的"示例 → 运行时"一致性
- 国际化补全（本次合并了 #35856 同步全部 17 种非英文翻译、#35836 补全葡语、#34741 润色韩语）

---

> 📊 **数据概览**：今日 Issues 总计 34 条（OPEN 9 / CLOSED 25），PR 总计 50 条（OPEN ~30 / CLOSED ~20），整体维护节奏健康，Desktop 与 V2 Session 相关合并占比最高。
> 
> 🔗 项目主页：https://github.com/anomalyco/opencode

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-08

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) (earendil-works/pi)
> 统计周期：过去 24 小时

---

## 📌 今日速览

过去 24 小时仓库活动密集：共 **26 条 Issue** 状态更新（多数已关闭归档）、**24 个 PR** 推进（绝大多数为合入或关闭）。维护者 `xl0` 持续高强度合入以「扩展 API 增强」和「TUI 稳定性」为核心的代码；社区反馈则集中在 **多模型/多 Provider 兼容**、**Session 与 CLI 行为一致性**、**只读环境/无 Node 环境适配** 三大方向。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 状态 | 关注点 |
|---|------|------|--------|
| [#3896](https://github.com/earendil-works/pi/issues/3896) | TUI cursor stays active when terminal window loses focus | 🟢 CLOSED | 👍 7 赞，是近 24h 内社区反响最高的 Issue：终端失焦时光标未变为「空心」，体验落后于 Codex CLI |
| [#6206](https://github.com/earendil-works/pi/issues/6206) | Clamping to context window prevents artificial context limits | 🟡 OPEN | 与 #5595 修复耦合：`max_tokens` 被错误地裁剪到 context window，影响大模型输出能力 |
| [#6210](https://github.com/earendil-works/pi/issues/6210) | `/scoped-models` cannot select model ids containing brackets | 🟡 OPEN | 包含 `[`/`]` 的自定义模型 ID（如 `custom/bracketed-model[1m]`）无法被选择器匹配 |
| [#6367](https://github.com/earendil-works/pi/issues/6367) | `modelOverrides` does not apply to extension registered providers | 🟡 OPEN | 扩展注册的 Provider 不受 `~/.pi/agent/models.json` 的 `thinkingLevelMap` 控制，Shift+Tab 思维强度循环失效 |
| [#6326](https://github.com/earendil-works/pi/issues/6326) | `custom_message` entries bypass compaction `keepRecentTokens` budgeting | 🟡 OPEN | 自定义消息未参与压缩预算，可能在长会话中持续累积 token |
| [#6378](https://github.com/earendil-works/pi/issues/6378) | 400: maximum context length 262000 tokens exceeded | 🟡 OPEN | 高频报错：上下文超限（262K tokens）但缺乏自动压缩/截断的用户引导 |
| [#6395](https://github.com/earendil-works/pi/issues/6395) | README `/reload` description inconsistent with source code | 🟡 OPEN | 文档与源码（`dist/core/slash-commands.js:23`）对 `/reload` 行为描述不一致（主题 vs 上下文文件） |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | `transformMessages` + `isSameModel === false` thinking block 兼容 | 🟡 OPEN | 切换模型时 thinking block 标准化与 `requiresReasoningContentOnAssistantMessages` 标志冲突 |
| [#6412](https://github.com/earendil-works/pi/issues/6412) | Display git commit / branch / tag when running from git | 🟡 OPEN | 从 git 仓库直接运行 Pi 时建议显示版本信息，便于调试（已由 PR #6413 实现） |
| [#5501](https://github.com/earendil-works/pi/issues/5501) | tolerate extra keys on edit tool `edits[]` items | 🟢 CLOSED | 删除 `additionalProperties:false`，允许模型附加冗余 key 提升兼容性 |

> 其他被快速归档的 Issue（多为 `[untriaged]` / `[no-action]` / `[last-read]`）：#6240、#6400–#6411、#6396–#6409，集中在「Read-only 鉴权文件锁」、「bun 运行时无 npm」、「--session-id 静默建新会话」、「Eden AI 一级 Provider 化」等扩展议题。

---

## 🛠 重要 PR 进展（精选 10 个）

| # | 标题 | 内容 |
|---|------|------|
| [#6413](https://github.com/earendil-works/pi/pull/6413) | feat(coding-agent): show git info in local version | 🆕 直接闭合 #6412，git 运行环境下显示 commit / branch / tag |
| [#5306](https://github.com/earendil-works/pi/pull/5306) | Add system prompt options to extension commands | 允许扩展命令自定义 system prompt |
| [#6026](https://github.com/earendil-works/pi/pull/6026) | fix(tui): stabilize working status row | 修复 TUI 工作中状态行抖动（ref #5825） |
| [#5913](https://github.com/earendil-works/pi/pull/5913) | Stable markdown working | markdown 渲染稳定性改进（与 #5846 共同针对 #5825） |
| [#5085](https://github.com/earendil-works/pi/pull/5085) | Expose full tool definitions from `getAllTools` | 扩展可直接获取完整工具定义，简化扩展作者对工具的封装 |
| [#5711](https://github.com/earendil-works/pi/pull/5711) | Add extension prompt guideline API | 新增 prompt guideline API，约束扩展 LLM 行为 |
| [#6175](https://github.com/earendil-works/pi/pull/6175) | emit session name changes to extensions | 会话重命名事件向扩展广播 |
| [#4775](https://github.com/earendil-works/pi/pull/4775) | Export image resize utilities | 导出 `resizeImage`，扩展可直接压缩图片 |
| [#6063](https://github.com/earendil-works/pi/pull/6063) | Extension stats | 扩展运行时统计指标 + 修复 `PI_STARTUP_BENCHMARK=1` 退出 OSC 残码问题 |
| [#5379](https://github.com/earendil-works/pi/pull/5379) | Store user scoped local package installs as absolute paths | 用户作用域本地包安装使用绝对路径存储，避免相对路径漂移 |

> 此外 #5383（commit message 格式文档）、#6030（TUI 停止后打印 benchmark 时间）、#5202（导出 CLI 参数解析器）、#4954 / #5756（暴露 `getToolDefinition` 与 `edit-diff` 给扩展）等 PR 也已合并，进一步完善了扩展作者的开发体验。

---

## 📈 功能需求趋势

综合 26 条 Issue 与 24 个 PR，**Pi 当前最受关注的功能方向**集中在以下几类：

1. **🔌 扩展 API 增强（最热）**
   `getToolDefinition` / `edit-diff` / `convertToPng` / 完整 tool definitions / prompt guideline API / `getAllTools` 等一系列 API 被持续暴露，反映社区正大量基于 Pi 构建第三方工具（典型代表：`done` 项目以扩展方式白标 Pi）。

2. **🧠 多模型 / 多 Provider 兼容**
   OpenAI Responses（`instructions` 字段）、Azure OpenAI Reasoning（`store:false` 回放）、Kimi-K2.7-Code (DeepInfra) 输出损坏、自定义 Provider 上 `modelOverrides` 失效、bracket 模型 ID 选择等——大模型生态碎片化推动 Pi 适配更多 Provider。

3. **🖥 TUI 稳定性与体验**
   光标失焦状态、markdown 流式渲染抖动、状态行跳变、code fence 稳定性、assistant message padding——TUI 是用户最长接触的界面，细节打磨成为高频需求。

4. **📦 安装与运行环境适配**
   bun-only 环境无 `npm`、read-only `auth.json`、扩展安装路径与文档不符、git 直接运行版本识别——Pi 正从「开发机场景」向「受限/容器/无 Node 环境」扩展。

5. **📜 会话与 CLI 行为一致性**
   `--session-id` 静默建新会话、`-r` 无法启动 no-session、custom_message 压缩预算——CLI 语义需更可预测。

---

## 🧑‍💻 开发者关注点

1. **扩展是 Pi 生态的战略重心**
   维护者 `xl0` 在 24h 内推进至少 8 个与「扩展 API 暴露」相关的 PR。社区也以「零 pi-core 改动 + 纯扩展」包装 Pi（如 `done` 项目的 `MainOptions.appName` 白标），表明 Pi 已形成清晰的扩展开发范式。

2. **模型 Provider 适配是长期痛点**
   仅今日就出现 3 个 Provider 兼容问题（OpenAI Responses instructions、Azure reasoning replay、Kimi-K2.7-Code 输出损坏）。建议关注 Pi 的 `packages/ai/src/api/transform-messages.ts` 和 `providers/` 目录演进。

3. **「文档/源码不一致」与「沉默失败」是高频抱怨**
   `#6395`（README 不一致）、`#6407`（`--session-id` 静默创建）、`#6406`（只读配置无明确报错）三类问题都反映了：**用户期望 Pi 在异常时给出明确信号，而非悄悄降级**。

4. **性能与可观测性诉求抬头**
   `#6063` 扩展 stats、`#6030` benchmark timing 打印、用户请求 `PI_STARTUP_BENCHMARK=1` 等均显示开发者希望更细粒度地观测 Pi 行为，便于集成到自研流水线。

---

*日报生成时间：2026-07-08 · 关注 Pi 项目请订阅 [earendil-works/pi](https://github.com/earendil-works/pi)*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-08**

---

## 📌 今日速览

今日 Qwen Code 发布了 **v0.19.7 稳定版**及配套的 preview 和 nightly 版本，社区活跃度维持高位，过去 24 小时共有 **11 个 Issue 更新**和 **50 个 PR 提交**。亮点集中在 **SDK 能力扩展**（Python/TypeScript 双端同步增强）、**多 Agent / 子代理可靠性**（循环检测、状态行显示）以及 **会话历史管理**（parentUuid 链路断裂修复）三大方向。

---

## 🚀 版本发布

### v0.19.7（稳定版）
- **PR Gate 加固**：强化 PR 自动分诊逻辑，新增批量检测、问题存在性检查与红旗模式识别（[#5723](https://github.com/QwenLM/qwen-code/pull/5723)）
- 包含 Code Review 流程改进

### v0.19.6-preview.0（预览版）
- 同步引入 WeCom 渠道文档

### v0.19.7-nightly.20260708.394c1a289
- 同源 nightly 构建，文档更新同步

> 三个版本主要差异在于发布渠道与稳定性分层，建议生产环境优先使用 v0.19.7。

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关键点 |
|---|-------|--------|--------|
| [\#6384](https://github.com/QwenLM/qwen-code/issues/6384) | 环境配置模型将默认上下文全部分配给输出后，hard limit 计算为 0 导致请求失败 | P2 / Core | 涉及 token 管理与模型切换的核心路径，影响多模型混合工作流 |
| [\#6505](https://github.com/QwenLM/qwen-code/issues/6505) | **子代理**缺少 `LoopDetectionService`，可能无限循环调用同一工具 | P2 / Multi-agent | 与多代理路线图强相关，影响 subagent 部署可靠性 |
| [\#6501](https://github.com/QwenLM/qwen-code/issues/6501) | `parentUuid` 链路缺失时会**静默截断**会话历史 | P2 / Session | 数据丢失风险，对长任务/中断恢复场景影响重大 |
| [\#6512](https://github.com/QwenLM/qwen-code/issues/6512) | 子代理在 fast model 上跑完后，状态行仍显示 fast model | P2 / UI | UI 误导风险，与 PR #6514 联动修复 |
| [\#6507](https://github.com/QwenLM/qwen-code/issues/6507) | 延迟启动 IDE 时，连接超时后真正连接成功却显示为失败状态 | P2 / IDE | IDE 集成一致性，状态管理 Bug |
| [\#6503](https://github.com/QwenLM/qwen-code/issues/6503) | `/clear` 执行后 `/re` 补全优先级反转（已合并的 #5577 修复回退） | P2 / CLI | 回归性问题，PR #5577 的修复被覆盖 |
| [\#6401](https://github.com/QwenLM/qwen-code/issues/6401) | `ProxyAgent` 不支持 `NO_PROXY` 环境变量 | P2 / Core | 企业内网代理环境刚需，已进入自动修复 |
| [\#6496](https://github.com/QwenLM/qwen-code/issues/6496) | 状态栏未在默认权限模式下显示 mode 标识 | P2 / UI | 交互可发现性诉求，已关闭（已实现） |
| [\#4278](https://github.com/QwenLM/qwen-code/issues/4278) | 任务执行中意外中断后无法自动续跑 | Bug / Session | 老问题，**今日关闭** |
| [\#3845](https://github.com/QwenLM/qwen-code/issues/3845) | Windows 安装失败：`Cannot find module` | Bug | 安装体验，**今日关闭**，👍 2 |

---

## 🛠️ 重要 PR 进展

### SDK 能力扩展（双端同步）
- **[\#6492](https://github.com/QwenLM/qwen-code/pull/6492)** `feat(sdk): add control request methods for effort, models, usage, context`（@juhuan）
  - 为 Python / TypeScript SDK 新增 4 个 control request 方法：`set_effort` 等运行时推理强度控制；`QueryOptions` 接受 `effort` 字段
- **[\#6491](https://github.com/QwenLM/qwen-code/pull/6491)** `feat(sdk): expose transport and query options in both SDKs`（@juhuan）
  - 合并 11 项 SDK 选项新增（如 `fork_session`、`cwd` 等），全部向后兼容

### 多代理 / Subagent
- **[\#6514](https://github.com/QwenLM/qwen-code/pull/6514)** `fix(cli): keep status line on session model`（@yiliang114）
  - 修复 subagent 切换 fast model 后状态行未回切的问题（对应 Issue #6512）
- **[\#6456](https://github.com/QwenLM/qwen-code/pull/6456)** `feat(core): add working_dir to the Agent tool`（@wenshao）
  - 为子代理增加 `working_dir` 参数，可将子代理钉在已有的 git worktree 中，文件/Shell 工具均限定目录

### 会话与历史管理
- **[\#6502](https://github.com/QwenLM/qwen-code/pull/6502)** `fix(session): bridge broken parentUuid chains instead of truncating history`（@doudouOUC）
  - 解决 Issue #6501：以前遇到 parentUuid 断链就静默丢历史，改为"桥接"重建
- **[\#6482](https://github.com/QwenLM/qwen-code/pull/6482)** `feat(serve): Bound replay snapshot history`（@doudouOUC）
  - 给 live daemon session 的 replay 快照加字节上限，trim 已完成回合

### CLI / UX
- **[\#6506](https://github.com/QwenLM/qwen-code/pull/6506)** `fix(cli): optimize large paste performance and add progress indicator`（@LaZzyMan）
  - 拦截 raw stdin 的 bracketed paste，绕过 readline 逐字符事件；260K 字符粘贴从 1.7s 量级降低，并新增进度指示
- **[\#6451](https://github.com/QwenLM/qwen-code/pull/6451)** `feat(cli): add Fleet View for multi-session management`（@LaZzyMan）
  - 全屏 TUI 多会话管理，对标 Claude Code 的 Fleet View，空输入下连按两次 `←` 触发
- **[\#6486](https://github.com/QwenLM/qwen-code/pull/6486)** `feat(cli): Add model toggle hotkey (Alt+S / Ctrl+F)`（@Aleks-0）
  - 新增模型切换热键与 `model.toggleModel` 配置，状态在 header 中实时反映
- **[\#6510](https://github.com/QwenLM/qwen-code/pull/6510)** `feat(web-shell): restore the full composer in split-view panes`（@wenshao）
  - 修复 web shell 分屏视图丢失 composer 控件的问题，审批/模型/语音控制回归

### 守护进程与生态
- **[\#6513](https://github.com/QwenLM/qwen-code/pull/6513)** `feat(cli): auto-retry next port when serve port is in use`（@wenshao）
  - `qwen serve` 与 `npm run dev:daemon` 自动顺延可用端口，避免 `EADDRINUSE`
- **[\#6511](https://github.com/QwenLM/qwen-code/pull/6511)** `feat(cli): Enable multi-workspace session routing`（@doudouOUC）
  - `qwen serve` 多 workspace 模式 Phase 2a，支持会话级路由
- **[\#6377](https://github.com/QwenLM/qwen-code/pull/6377)** `fix(shell): block kill commands using pgrep command substitution`
  - 安全修复：阻止 `kill -9 $(pgrep node)` 这类可同时杀死 Qwen Code 自身的命令

---

## 📈 功能需求趋势

从过去 24 小时活跃 Issue/PR 提炼出以下社区最关注的方向：

1. **多代理 / Subagent 体系（最热）**
   - 循环检测缺失、状态行错乱、目录隔离（worktree 钉死）等多个 Issue/PR 集中爆发，反映社区正在严肃把 subagent 用于生产。
2. **SDK 化与外部集成**
   - Python / TypeScript 双端 SDK 的 control request 与 query options 大量补齐，意在让 Qwen Code 成为可被嵌入的运行时。
3. **会话与历史可靠性**
   - 静默丢历史、断链恢复、replay 上限等问题显示社区已把"长会话、跨设备恢复"当作硬需求。
4. **IDE 集成鲁棒性**
   - 延迟启动/超时/迟到成功等状态机问题，提示 IDE 适配从"能跑"进入"够稳"阶段。
5. **多 Workspace / Channels / Webhook**
   - #6511、#6495 显示多工作区路由与外部 webhook 触发正成为 `qwen serve` 标配。
6. **大上下文与 Token 管理边界**
   - Issue #6384 暴露上下文预算分配策略的边缘情况，企业级长任务场景关注度高。

---

## 🧑‍💻 开发者关注点（痛点与高频需求）

- **"我配置了快速模型，结果状态行/会话都跟着跑了"** — UI/会话状态的模型来源不清晰，需要明确主会话模型 vs 辅助模型作用域（#6512 + #6514）。
- **"subagent 一旦卡住就只能 Ctrl+C 退出"** — 缺乏与主代理一致的 `LoopDetectionService`，多代理路线图的关键缺失项（#6505）。
- **"会话历史莫名其妙变短了"** — JSONL 链路断链时静默截断，对长期项目和中断恢复用户痛感极强（#6501 + #6502）。
- **"粘贴大段代码/日志卡死好几秒"** — TUI 性能在大块粘贴下暴露 readline 的逐字符处理瓶颈（#6506 已显著优化）。
- **"代理环境下 NO_PROXY 不生效"** — 企业内网部署的"最后一公里"问题（#6401 进入自动修复）。
- **"多会话/多 workspace 怎么管理？"** — Fleet View 与多 workspace routing 表明社区正在走向"同时跑多个 Qwen 任务"的工作模式。
- **"安全：能不能别让我自己 kill 掉自己"** — `pgrep` 绕过 `detectSelfKillCommand` 的攻击面被正式封堵（#6377）。

---

> 📎 **数据来源**：[github.com/QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) Issues & Pull Requests（更新时间窗口：2026-07-07 ~ 2026-07-08）

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报 · 2026-07-08

> 数据源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)（原 `Hmbown/DeepSeek-TUI`，已升级 `deepseek-tui` 为保留名，canonical 名称为 `CodeWhale`）

---

## 1. 今日速览

v0.8.68 收尾冲刺全面铺开：今天大量修复型 PR 集中合并，覆盖 **子代理面板、Fleet 配置、PowerShell 退出流程、Models.dev 字段兼容** 等多个 release-blocker。社区同时开启了 **v0.8.69 测试时计算（TTC）** 的设计文档与工具原型，`verify/critique` 工具被认为是该方向的三方共识方案。

---

## 2. 版本发布

🔔 **v0.8.67** 已发布于过去 24 小时内。Release notes 重点：

- 正式确立 `CodeWhale` 为 canonical 项目名、命令名、npm 包名和 Release artifact 名。
- 旧的 `deepseek-tui` / `deepseek` npm 包正式 deprecated，不再获得新版本。
- 用户迁移指南：见仓库内 `docs/REBRAND.md`。

📦 安装方式随之变更，建议显式使用 `codewhale` 系列包名。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 标签 / 状态 | 为何值得关注 |
|---|---|---|---|
| [#4092](https://github.com/Hmbown/CodeWhale/issues/4092) | **v0.8.68 execution board** — lane 顺序、依赖与子代理协议 | `lane-meta` · OPEN · 💬13 | 整个 0.8.68 里程碑唯一的协调入口，所有开放里程碑 issue 都用 `lane-*` 标注，可结构化查询。 |
| [#3144](https://github.com/Hmbown/CodeWhale/issues/3144) | **自然语言自动 review 策略 + pre-push review gate** | `v0.8.69` · CLOSED · 💬14 | 调研 Cursor `/review` 后提出"手动审批 ↔ 全自动"中间路线，关联 v0.8.69 TTC 设计。 |
| [#2300](https://github.com/Hmbown/CodeWhale/issues/2300) | **多模型兼容 + Fleet 自动载具选择** | `v0.8.65/0.8.69` · CLOSED · 💬8 | 用户面验收 fixture，覆盖 vllm/openai 路由差异。 |
| [#2791](https://github.com/Hmbown/CodeWhale/issues/2791) | **命令分发重构：单文件 match → 模块化策略** | `v0.9.0` · CLOSED · 💬7 | 为 v0.9.0 命令模块化铺路，影响所有 `/` slash 命令。 |
| [#2261](https://github.com/Hmbown/CodeWhale/issues/2261) | **Windows: PowerShell 中输入泄漏到主机终端** | `v0.8.70` · CLOSED · 💬6 | Windows 用户高敏感度的"输入流逃逸"事故，影响 Windows Terminal 体验。 |
| [#1835](https://github.com/Hmbown/CodeWhale/issues/1835) | **Windows: 中文 IME 死锁导致 TUI 完全失键** | `v0.8.70` · CLOSED · 💬5 · 👍1 | 唯一获得正向反应的条目，反映中文输入法用户痛点。 |
| [#1982](https://github.com/Hmbown/CodeWhale/issues/1982) | **Workbench 闭环：委派 → 集成 → 验证** | `v0.8.69` · CLOSED · 💬5 | 关联 Work/Tasks/Agents 侧栏的视觉/认知闭环。 |
| [#4094](https://github.com/Hmbown/CodeWhale/issues/4094) | **子代理详情面板空白 + 可能冻结 TUI** | `lane-stopship` · CLOSED · 💬4 | v0.8.68 的 release-blocker，dogfood 中复现，详情见 PR #4182/#4197。 |
| [#4093](https://github.com/Hmbown/CodeWhale/issues/4093) | **Fleet 设置模态应改为 role/profile roster** | `lane-stopship` · CLOSED · 💬3 | 把"provider 维度选择器"调整为"角色 → profile 维度"，是 0.8.68 跨 provider 的核心修复。 |
| [#4196](https://github.com/Hmbown/CodeWhale/issues/4196) | **agent-callable verify/critique 工具** | OPEN · 💬1 | 把"模型自主决定何时花算力自评"的入口暴露为工具，是 v0.8.69 TTC 的产品化形态。 |

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容 |
|---|---|---|---|
| [#4201](https://github.com/Hmbown/CodeWhale/pull/4201) | **docs: TTC design (verify tool + sub-agent reasoning)** | OPEN | 新增 `docs/TTC_DESIGN.md`，**纯设计文档**，三方（贡献者 + GLM 5.2 + 内部）共识方案，预留给 v0.8.69 实现。 |
| [#4200](https://github.com/Hmbown/CodeWhale/pull/4200) | **fix(providers): Fireworks/Together metadata + Models.dev id 归一化** | CLOSED | 受影响：#4186。统一 OpenAI-compatible 厂商 metadata，并修复 release-smoke 中的 provider 映射缺陷。 |
| [#4199](https://github.com/Hmbown/CodeWhale/pull/4199) | **feat(tools): agent-callable verify/critique** | OPEN | 实现 #4196：`verify` 工具允许模型在认为必要时调用，由 elevated reasoning + 独立 critic 组成。 |
| [#4198](https://github.com/Hmbown/CodeWhale/pull/4198) | **fix(fleet): TUI 内进程派发也遵守 profile-pinned provider** | CLOSED | 闭合 #4193 — 此前 headless `codewhale fleet run` 已修 (#4181)，本次让交互式 TUI 同步生效，才算 #4093 完全闭环。 |
| [#4197](https://github.com/Hmbown/CodeWhale/pull/4197) | **fix(tui): 子代理详情面板状态覆盖 + 工件句柄** | CLOSED | 补齐 #4182 之后 #4094 仍遗留的四个项目，单文件改动在 `tui/src/tui/sidebar.rs`。 |
| [#4194](https://github.com/Hmbown/CodeWhale/pull/4194) | **test: 强制硬编码字符串断言使用英文 locale** | OPEN | 跟进 #4033，统一测试断言不受系统 locale 影响，避免 CI 误报。 |
| [#4192](https://github.com/Hmbown/CodeWhale/pull/4192) | **fix(tui): 转写文案精简批次** | CLOSED | 同时关闭 #4142/#4143/#4144/#4145，纯文案去重，零渲染逻辑变更。 |
| [#4191](https://github.com/Hmbown/CodeWhale/pull/4191) | **fix(catalog): 接受 models.dev 当前 schema** | CLOSED | `interleaved` 字段在 live 数据里有"bool / object"两种形态，本次补丁让解析器两者皆接受，构成 #4184→#4188 链路第二环。 |
| [#4189](https://github.com/Hmbown/CodeWhale/pull/4189) | **fix(ci): 仅在 issue open 触发 agent-ready 自动 label** | CLOSED | 修复"打标/改里程碑"反复触发 label 的副作用，避免 triage 主动移除后被回灌。 |
| [#4182](https://github.com/Hmbown/CodeWhale/pull/4182) | **fix(tui): 子代理详情面板展示实时活动** | CLOSED | 子代理运行中不再显示空白，而是渲染 bounded activity trail / 工具调用 / 最终摘要。 |

其他值得注意的合并：#4181（Fleet 角色编辑器 · headless 路径）、#4180（PTY `Ctrl+C` 字节归一化 · 关闭 #4090）、#4088（`--no-mouse-capture` 下保留原生选区 · 关闭 #4026）、#4045（`edit_file` UTF-8 模糊匹配光标 panic）。

---

## 5. 功能需求趋势

从 30 条过去 24 小时活跃 Issue + 35 条活跃 PR 中可归纳出以下主题：

| 方向 | 代表条目 | 社区信号 |
|---|---|---|
| **🧠 Test-Time Compute / 自我验证** | #4196、#4201、#4199、#3144 | 把"模型自己花算力做对抗性自评"产品化为 `verify` 工具，是 v0.8.69 的旗舰设计，三方（贡献者 / GLM 5.2 / 内部）达成共识。 |
| **🧭 Fleet / 子代理配置抽象** | #4093、#4137、#4193、#4195、#4198、#4181 | 从"provider-scoped 模型选择器"演进到"role/profile roster editor"，并补全跨 provider 路由与 reason effort 解锁。 |
| **🪟 Windows / TTY / IME 兼容** | #2261、#1835、#4090、#4180 | 仍以"输入流逃逸 + IME 死锁 + `Ctrl+C` 字节归一化"为反复修缮重点，#4090/4180 是当日闭环。 |
| **🌐 模型目录与厂商元数据** | #4184/#4185/#4186/#4187/#4188、#4200、#4191 | 与 live `models.dev` schema 对齐成为新主线，影响 `provider = vllm / openai / Fireworks / Together` 的标识归一化。 |
| **🧱 v0.9.0 WhaleFlow 工作流引擎** | #2973、#2976、#2979、#2980、#2981、#2791 | Rust async 执行器、TeacherReview→StudentReplay→PromotionGate、Pod 监控面、CI 验证齐头并进。 |
| **📝 转写文案与 UI 微调** | #4142/#4143/#4144/#4145、#4192、#4137 | 已通过 PR #4192 一次性整合，0.8.68 尾部 UX 收敛。 |
| **⚙️ 性能与运行时** | #4149、#2973 | `parking_lot` 全局迁移收尾 + 有界并发分支与取消。 |

---

## 6. 开发者关注点

**🔴 高频痛点（仍在修复）**

1. **TUI 输入边界 bug**：Windows 下 PowerShell 出现"输入泄漏"、中文 IME 死锁、PTY 路径下 `Ctrl+C` 二次提示未退出 — 三条独立事故，都指向 **TUI ↔ 宿主终端状态机** 不完整（#2261、#1835、#4090）。
2. **Fleet 配置 UI 错位**：被长期吐槽 "shape 不对"，用户无法在多 provider 场景下稳定选择 profile（#4093、#4137）。
3. **Fleet 子代理永远 Low 推理**：`auto_reasoning.rs:22-24` 写死 `ReasoningEffort::Low`，复杂任务上深度不够（#4195）。

**🟢 共识与愿望**

- **TTC / 自我验证入口**：开发者普遍认同"模型应自己决策何时烧算力"，但要求入口清晰、可观测、可中断（#4196、#3144）。
- **Models.dev 作为目录真相源**：希望停止维护多份模型清单，live schema 对齐是近期最快落地路径（#4184–#4188）。
- **`Send-later` 类原子能力**：Claude Code Remote 的"定时回送同上下文"被认为是值得抄的能力雏形（#4190）。

**🛠 工程化诉求**

- **测试稳定性**：硬编码字符串断言在不同 locale 下误报，需要 CI 默认强制 `Locale::En`（#4194、#4033）。
- **文档 ↔ 实现链路**：v0.8.68 playbook 与 phase issue 的交叉链接（#4175 → #4176–#4179）开始落地，TTC 设计文档已先行存档（#4201）。

---

> 📌 一句话总结今天：**v0.8.68 是"修复之日"，v0.8.69 是"思考之日"** — 入口（TUI/Fleet/PTY）全面收紧，TTC 工具设计先行完成。

</details>