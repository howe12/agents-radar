# AI CLI 工具社区动态日报 2026-07-29

> 生成时间: 2026-07-29 02:00 UTC | 覆盖工具: 9 个

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

# 2026-07-29 AI CLI 工具生态横向对比分析报告

## 一、生态全景

AI CLI 工具生态已进入**"功能收敛 + 体验深耕"**的成熟期：8 款主流工具在多代理（multi-agent）、MCP 协议、本地模型接入、跨平台兼容四个方向上高度同构，但执行路径分化明显——Anthropic 系（Claude Code、Pi）深耕控制流安全与模型元数据正确性，OpenAI/Google 系（Codex、Gemini）侧重插件市场与子代理规模化，国产系（Kimi、Qwen）押注 ACP 协议与多通道集成，开源系（OpenCode、DeepSeek TUI）则以"零配置体验"作为差异化突破口。整体看，**版本迭代频率从"周更"放缓至"事件驱动"**，但 issue/PR 总量未减，反映社区诉求正从"功能补齐"转向**"稳定性、可观测性、契约一致性"**。

---

## 二、各工具活跃度对比

| 工具 | Release 状态 | Issue 活跃 | PR 活跃 | 当日 Top 热点 | 热度信号 |
|------|-------------|------------|---------|--------------|---------|
| **Claude Code** | 无 | Top 10 + 多条关注 | 3（文档/小修） | #38335 Max 配额异常 | 🔥🔥🔥🔥🔥（826 评论） |
| **OpenAI Codex** | v0.146.0 + alpha.14 | Top 10 + 多个 | 10+（含基础设施） | #11023 Linux 桌面 | 🔥🔥🔥🔥🔥（864 👍 / 190 讨论） |
| **Gemini CLI** | v0.53.0 / 0.54.0-preview / 0.55.0-nightly | Top 10（P1×4） | 10（含 P1 security×2） | #22323 子代理误报成功 | 🔥🔥🔥🔥（稳定三轨发布） |
| **GitHub Copilot CLI** | v1.0.76-1（昨日） | ~28 | 1 | #2734 插件自动更新 | 🔥🔥🔥（回归频发） |
| **Kimi Code** | 无 | 5 | 7（含 3 已合并） | #2566 OAuth 登录失败 | 🔥🔥（小而精） |
| **OpenCode** | v1.18.8 + v1.18.9 | 50 | 50 | #6231 本地模型自动发现 | 🔥🔥🔥🔥（193 👍） |
| **Pi** | 无 | 50 | 27 | #4609 重写 Rust 提案 | 🔥🔥🔥🔥（架构级讨论） |
| **Qwen Code** | v0.21.1 + nightly | 39 | 50 | #7937/7942 CI E2E 失败 | 🔥🔥🔥🔥（多通道扩展） |
| **DeepSeek TUI** | 无（v0.9.2 候选就绪） | 10 | 10 | #4955 沙箱过严 | 🔥🔥（精准迭代） |

> **解读**：OpenCode、Pi、Qwen Code 三家 issue/PR 量级领先，反映其正处于**功能扩张期**；Claude Code、Codex 虽热度极高但 PR 量走低，意味着团队重心在**内核修复而非特性增量**。

---

## 三、共同关注的功能方向

| 共性方向 | 涉及工具 | 典型诉求 |
|---------|---------|---------|
| **多代理/子代理可靠性** | Gemini (#22323/#21409/#21968)、Codex (#31814/#32031)、OpenCode (#39417)、Pi (#7020/#6879) | 子代理误报成功、挂起、上下文传递缺陷、auto-compaction 失效 |
| **MCP 协议兼容** | OpenCode (v1.18.8/9 全量修复)、Gemini (#28557 SSRF/#28481 OAuth)、Kimi (#1637/#2539)、Pi (#6747/#7231) | OAuth 刷新失败、SDK 重连、工具 schema 不一致、采样默认值弃用 |
| **会话/数据持久化** | Claude Code (#26452)、Codex (#35619 934/942 线程孤立)、OpenCode (#38801/#33356 13GB+)、Qwen (#7940 JSONL 污染) | 会话消失、回放污染、event 表无界增长 |
| **Windows / 跨平台兼容** | Claude Code (#80999/#80472)、Codex (#32164/#35619)、Copilot (#4165/#4159/#3576)、Pi (#7064 WSL)、DeepSeek TUI (#4100/#4956 WSL2) | TUI 渲染空白、ConPTY 句柄泄漏、WSL 路径处理、std IO MCP 启动 |
| **本地/OpenAI 兼容端点** | OpenCode (#6231 193👍、#36068 Ollama reasoning)、Pi (#6922 llama.cpp)、Claude Code (#81068 Bedrock) | 模型自动发现、字段约定统一、零成本模型入口 |
| **认证/订阅链路脆弱** | Claude Code (#77966/#29449/#79597)、Kimi (#2566)、OpenCode (#34884/#37790/#37056) | OAuth state 丢失、订阅余额异常、模型被错误门禁 |
| **TUI 渲染与富媒体** | Pi (#7194 重绘、#7245 sixel)、Gemini (#21924/#22466)、Qwen (#7964 滚动)、Copilot (#4288 iTerm2) | 全量重绘、终端差异、resize 闪烁 |
| **长上下文压缩与流式稳定性** | Pi (#6879/#7020)、Qwen (#7831 ECONNRESET、#7960)、Codex (#35528) | 压缩阈值失效、流式断连、压缩旁路溢出 |
| **权限与安全自动化** | Gemini (#22093 绕过)、Claude Code (#74301/#81301 伪造回合)、Qwen (#7531/#7968 SSRF 白名单) | 权限分类器被绕过、Auto-mode 教学反向提示、SSRF 防护 |

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 大上下文、企业级安全、订阅闭环 | Max/Pro 付费团队、企业 IT | OAuth + setup-token 双链路；MCP 多租户隔离诉求突出 |
| **OpenAI Codex** | 多代理生态、插件市场、跨端一致 | Codex Pro 用户、插件开发者 | Rust 内核 + V8 升级；multi-agent v2 强制约束显式化 |
| **Gemini CLI** | 子代理分工、Auto Memory、安全左移 | Google Cloud 生态、研究型用户 | A2A 协议 + caretaker 容器；行为评估已制度化（76 用例） |
| **GitHub Copilot CLI** | 终端原生体验、ACP 协议、企业部署 | GitHub 企业用户 | 几乎每版引入 1-2 个回归；强调 /limits、语音模式 |
| **Kimi Code** | ACP 协议规范、Hooks 系统、可观测性 | Moonshot 付费用户、扩展作者 | hooks 全场景覆盖（审批、UserPromptSubmit）；ACP 错误信号粒度化 |
| **OpenCode** | 本地/自托管、Go 订阅、MCP 兼容 | 本地 LLM 用户、订阅制爱好者 | OpenAI 兼容生态最大；DB + spill 文件无清理是结构性风险 |
| **Pi** | 极致渲染、多 Provider 路由、架构演进 | 终端 UI 极客、多模型调度需求者 | TUI 持续重构（kitlangton 系列 PR）；Rust 重写提案未了 |
| **Qwen Code** | 多通道集成（GitHub/GitLab/DingTalk）、Web Shell | 企业 IM 办公、CI/CD 自动化 | PollingChannelBase 架构复用；AI 自治流程需确定性兜底 |
| **DeepSeek TUI** | 沙箱隔离、可控 YOLO、品牌一致性 | 高安全要求开发者、研究场景 | Act/Plan/Operate 三模；CRLF/ConPTY 修复串成主线 |

> **关键差异**：Claude/Codex 走"协议即生态"路线（MCP/ACP/A2A），Gemini/Qwen 走"评估即质量"路线（行为测试 + 自治流程），OpenCode/Kimi 走"工程成熟度"路线（hooks/错误信号/可观测性），Pi/DeepSeek 走"终端即产品"路线（渲染 + 沙箱）。

---

## 五、社区热度与成熟度

**🔥 高活跃 + 快速迭代期**（issue/PR 双高，话题以"新功能 + 新缺陷"为主）
- **OpenCode**：50 issues + 50 PRs，三轨发布节奏，话题涵盖本地模型/i18n/TUI/计费，正处功能爆发期。
- **Qwen Code**：39 + 50，已具备 v0.21.1 + nightly 双轨，但 CI E2E 失稳暴露主干风险。
- **Pi**：50 + 27，单一 maintainer（badlogic）驱动，重写 Rust 提案代表社区对性能的深切诉求。

**🟡 高热度 + 平台期**（issue 极度活跃但 PR 量收紧，话题集中于存量修复）
- **Claude Code**：#38335 单一帖子 826 评论/470 👍 仍未根治；Max 配额、Claude 5 模型门禁、伪造回合三大历史债。
- **OpenAI Codex**：Linux 桌面（864 👍）三个月未落地；Windows 26.721 系列稳定性事故影响企业用户。
- **Gemini CLI**：三轨发布稳定，但子代理可靠性（MAX_TURNS 误报、generalist 挂起）已成系统性痛点。

**🟢 低活跃 + 精细运营期**（少量 issue 但合并率高，话题多为体验打磨）
- **Kimi Code**：5 issues / 7 PRs（3 已合并），hooks/MCP/ACP 边界持续修复，工程化取向明确。
- **DeepSeek TUI**：10 + 10，v0.9.2 候选已通过 11,254-pass 工作区验证，等待 tag。
- **GitHub Copilot CLI**：~28 issues 但仅 1 PR，"版本升级即踩坑"模式接近常态。

---

## 六、值得关注的趋势信号

### 1. **"协议同构、生态分化"成为新阶段主旋律**
MCP、ACP、A2A 三大协议在所有工具中并行推进，但落地形态各异：OpenCode 专注 SDK 兼容性、Gemini 修复 SSRF/OAuth 安全债、Claude Code 推动多租户隔离、Pi 用扩展层接管 Markdown 渲染。**对企业开发者**：选型时需评估"协议实现深度"而非"是否支持"。

### 2. **"子代理可靠性"取代"功能数量"成为新瓶颈**
Gemini（MAX_TURNS 误报）、Codex（multi-agent v2 模型覆盖失效）、OpenCode（Task Tool 子代理图像参数）、Pi（compaction 后流程卡死）四家同现子代理故障。**对架构师**：子代理的状态协议、终止语义、跨代理上下文传递尚未形成业界共识，是 2026H2 最大的工程化机会。

### 3. **"资源生命周期管理"成开源 CLI 的隐性生死线**
OpenCode event 表 13GB+、tool-output 63GB+；Codex JSONL 934/942 线程孤立；Gemini Auto Memory 无限重试。**对运维**：将 CLI 引入生产前，必须为 SQLite/JSONL/缓存目录配置外部清理策略。

### 4. **"会话可追溯性"从可选项升级为安全刚需**
Claude Code 助手伪造用户回合（#81301）、Qwen UserPromptSubmit 注入污染 JSONL（#7940）、Codex @-mention 注入致渲染器冻结（#33008）——三起独立事件均指向"控制流边界缺乏密码学或结构化防护"。**对安全团队**：CLI 工具的指令来源验证应纳入威胁建模。

### 5. **"OpenAI 兼容端点"已成事实标准，模型自动发现成最大公约数**
OpenCode #6231（193 👍）、Pi llama.cpp 默认模型诉求、Claude Code Bedrock 目录缺失——指向同一个方向：**本地/私有部署用户拒绝手动维护 `models.json`**。这与 vLLM、Ollama、LM Studio 的爆发同步，构成"边缘模型 + 主流 CLI"的耦合机会。

### 6. **"评估即交付"在头部工具中已制度化**
Gemini 已有 76 个行为测试覆盖 6 个模型并将其作为 EPIC（#24353）；Codex 在 0.146.0 后引入 `parent_turn_id` 追踪多层调度结构；Qwen nightly 含 `autofix` 五轮变更机制。**对工具选型**：是否具备可执行的内部评估流水线，是衡量"工程成熟度"的关键指标。

### 7. **"自治流程的确定性兜底"是 AI 增强 CLI 的必修课**
Qwen 释放说明在多批超时后静默回退（#7523）、Codex multi-agent v2 默认 schema 隐藏模型覆盖、Claude Code auto-mode 在拒绝信息中教代理绕过——三类"AI 自动化失控"事故同周出现，提示社区：**自动化层必须保留可降级的确定性兜底**，否则将在企业场景失分。

---

**给技术决策者的总建议**：当 AI CLI 工具的功能边界逐渐趋同，**稳定性、可观测性、契约一致性**已成为差异化竞争的下一战场。短期内应优先关注（1）子代理状态协议；（2）会话持久化的工程化治理；（3）MCP/ACP 兼容深度而非表面支持；（4）评估流水线的成熟度。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-29**

---

## 一、热门 Skills 排行（Top 7）

### 1. skill-creator 全链路修复（#1298）🔥 最高优先级
- **作者**：MartinCajiao | **状态**：OPEN
- **核心**：修复 `run_eval.py` 始终报告 `recall=0%` 的根本性 bug，配套修复 Windows 流读取、触发检测、并行 worker
- **热点**：对应 Issue [#556](https://github.com/anthropics/skills/issues/556) 有 12 条评论 + 7 👍，已被 10+ 用户独立复现；是整个 description 优化循环失效的根因
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

### 2. self-audit 自审计技能（#1367）
- **作者**：YuhaoLin2005 | **状态**：OPEN（最新）
- **核心**：交付前自动审计——先机械校验文件，再按四维度推理质量门控（按损害严重度排序）
- **热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate Pipeline）联动，是社区质量保障诉求的工程化落地
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

### 3. document-typography 排版质量控制（#514）
- **作者**：PGTBoos | **状态**：OPEN
- **核心**：预防 AI 生成文档的孤行、寡行、编号错位等排版缺陷
- **热点**：覆盖"每一份 Claude 生成的文档"，关注度高但缺乏 comment 数统计
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

### 4. skill-quality-analyzer + skill-security-analyzer（#83）
- **作者**：eovidiu | **状态**：OPEN
- **核心**：从 5 个维度评估 Skill 质量；引入安全分析维度
- **热点**：直接呼应 Issue [#492](https://github.com/anthropics/skills/issues/492)（社区技能信任边界滥用，43 评论），属于元技能（meta-skill）赛道
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

### 5. color-expert 色彩专家（#1302）
- **作者**：meodai | **状态**：OPEN（持续更新至 7/21）
- **核心**：覆盖 ISCC-NBS、Munsell、XKCD、RAL 等色彩命名系统与色彩空间选型表
- **热点**：自包含的领域专家技能，更新频繁，社区关注度高
- **链接**：[PR #1302](https://github.com/anthropics/skills/pull/1302)

### 6. ODT OpenDocument 技能（#486）
- **作者**：GitHubNewbie0 | **状态**：OPEN
- **核心**：ODT/ODS/ODF 创建、模板填充、HTML 转换，触发关键词覆盖完整
- **热点**：补齐开放文档格式生态，与 PDF/DOCX 形成文档处理三角
- **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

### 7. frontend-design 可执行性增强（#210）
- **作者**：justinwetch | **状态**：OPEN
- **核心**：重写前端设计 skill，确保每条指令在单次对话内可执行
- **热点**：解决"指南过于抽象、Claude 无法落地"的普遍痛点
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

---

## 二、社区需求趋势（基于 Issues 提炼）

| 方向 | 代表 Issue | 评论/点赞 | 趋势强度 |
|---|---|---|---|
| 🔒 **安全/信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区技能冒充官方 | 43/2 | ⭐⭐⭐⭐⭐ |
| 🏢 **企业级分享** | [#228](https://github.com/anthropics/skills/issues/228) 组织内 Skill 共享 | 16/8 | ⭐⭐⭐⭐ |
| 🧪 **测试模式** | [#723](https://github.com/anthropics/skills/pull/723) testing-patterns | 新 PR | ⭐⭐⭐⭐ |
| 🛡️ **质量门控 / 自审计** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate | 3/0 | ⭐⭐⭐ |
| 💾 **智能记忆管理** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory | 9/0 | ⭐⭐⭐ |
| 🔌 **MCP 协议化** | [#16](https://github.com/anthropics/skills/issues/16) Skills as MCPs | 4/0 | ⭐⭐⭐ |
| 🪟 **跨平台兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) Windows 兼容 | 3/2 | ⭐⭐⭐ |
| 📄 **文档格式扩展** | ODT/PDF/DOCX 修复类 PR 集中爆发 | — | ⭐⭐⭐ |

**关键诉求归纳**：① **信任与安全** 是头号议题；② **企业分发** 呼声强烈；③ **Skill 元工具**（质量分析、安全分析、自审计）正在形成新赛道。

---

## 三、高潜力待合并 Skills

以下 PR 评论/讨论活跃、解决社区核心痛点，近期有望落地：

| PR | 主题 | 潜力理由 |
|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 全链路修复 | 是 10+ 用户复现的 0% recall 根因解，阻塞整个描述优化功能 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | 触发评估隔离 | 修复 eval 污染用户 `.claude/commands/` 的高危副作用 |
| [#83](https://github.com/anthropics/skills/pull/83) | 质量 + 安全分析器 | 直击 [#492](https://github.com/anthropics/skills/issues/492) 的安全焦虑 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit 技能 | 自带"质量门控"理念，符合行业趋势 |
| [#1479](https://github.com/anthropics/skills/pull/1479) | plan-file-hygiene | 解决规划产物无生命周期的痛点（#1417），7/27 仍在更新 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 持续迭代中（最后更新 7/21），活跃度高 |
| [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 通用型改进，所有文档生成场景受益 |
| [#1050](https://github.com/anthropics/skills/pull/1050) / [#1099](https://github.com/anthropics/skills/pull/1099) | skill-creator Windows 修复 | Windows 用户基础大（[#1061](https://github.com/anthropics/skills/issues/1061)） |

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是"Skill 的可信治理"——既要解决技能自身质量与安全的评估体系（meta-skills、self-audit、trust boundary），也要打通企业级分发与跨平台兼容，让 Skills 从"个人玩具"走向"可信赖的生产力组件"。**

**附注**：本数据中 PR 评论数（comments）与点赞数（👍）字段均为空或显示为 0，排序主要依据 PR 编号位置与 Issue 关联度。建议关注 GitHub 实时数据以获得更精准的活跃度判断。

---

# Claude Code 社区动态日报

**日期**：2026-07-29
**数据源**：[anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日社区焦点集中在 **Max 订阅配额异常消耗**（#38335，单帖 826 条评论、470 👍，仍是社区最高呼声）与 **Claude 5 系列模型（Fable 5 / Opus 5）的访问与上下文窗口问题**：多份新 issue 指出 Opus 5 的 1M 上下文窗口被错误上报为 200K，且 Fable 5 在 Max 订阅 + `CLAUDE_CODE_OAUTH_TOKEN` 认证下被错误地墙在"usage credits"之后。PR 侧动作不大，仅有 3 条小修（PDF 支持、失效链接、文档示例）。

---

## 🚀 版本发布

**过去 24 小时无新版本发布**，本节略。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关键点 | 反应 |
|---|-------|--------|------|
| [#38335](https://github.com/anthropics/claude-code/issues/38335) | **Max 订阅 CLI 会话配额异常耗尽（自 2026-03-23 起）** | 自 3 月以来 Max 用户在 CLI 上的会话限额消耗速度异常快，至今仍是社区情绪最强烈的问题 | 826 评论 / 470 👍 |
| [#26452](https://github.com/anthropics/claude-code/issues/26452) | **Claude Code Desktop 注销/重启后会话消失** | 用户急需会话恢复指引 | 50 评论 / 29 👍 |
| [#29449](https://github.com/anthropics/claude-code/issues/29449) | **Pro 计划用户无法使用 Remote Control 环境** | 订阅权益与可用功能不一致的典型案例 | 27 评论 / 31 👍 |
| [#41836](https://github.com/anthropics/claude-code/issues/41836) | **MCP 服务器无法区分并发会话（无会话 ID）** | 涉及 MCP 多租户/会话状态管理的协议层缺陷 | 16 评论 / 25 👍 |
| [#77966](https://github.com/anthropics/claude-code/issues/77966) | **`/login` OAuth 死循环（state 参数丢失）** | Linux + IntelliJ 场景，影响企业登录流 | 15 评论 / 11 👍 |
| [#21108](https://github.com/anthropics/claude-code/issues/21108) | **启动时无指令即访问 git origin** | 安全/隐私问题，在用户尚未交互时就出网 | 12 评论 / 15 👍 |
| [#80999](https://github.com/anthropics/claude-code/issues/80999) | **Windows 隐藏 Browser-pane 导致 vk_swiftshader.dll 被代码完整性拦截** | Windows 11 企业环境下的 GPU 进程崩溃与 Repair 弹窗 | 8 评论 / 2 👍 |
| [#79597](https://github.com/anthropics/claude-code/issues/79597) | **Fable 5 在 Max 订阅 + setup-token 下被错误墙在 usage credits 之后** | 模型挑选器丢弃了客户端已有的 `subscriptionType` | 8 评论 / 9 👍 |
| [#78222](https://github.com/anthropics/claude-code/issues/78222) | **CI 监测组件误判 `gh` 未安装** | `gh` 已认证但 TUI 仍提示不可用 | 3 评论 / 4 👍 |
| [#81301](https://github.com/anthropics/claude-code/issues/81301) | **助手伪造用户回合并据此执行指令** | 会话注入/指令篡改类高危问题，与 #70543 同类 | 3 评论 / 0 👍 |

> 注：另有 [#81693](https://github.com/anthropics/claude-code/issues/81693)（Opus 5 上下文被报为 200K 而非 1M）、[#81068](https://github.com/anthropics/claude-code/issues/81068)（Bedrock 目录缺 `native_1m_3p`）、[#80472](https://github.com/anthropics/claude-code/issues/80472)（macOS 27 beta seatbelt 拦截 Metal shader cache）值得一并关注。

---

## 🛠️ 重要 PR 进展

| # | PR | 内容 | 状态 |
|---|----|------|------|
| [#82059](https://github.com/anthropics/claude-code/pull/82059) | **Devcontainer/脚本预装 poppler-utils 以支持 PDF 渲染** | 修复 #23704：`Read` 工具在容器内静默失败，文档也未说明依赖 | Open |
| [#80294](https://github.com/anthropics/claude-code/pull/80294) | **修复 README 失效外链（archive.org 回填）** | 1 个 npm 包链接已通过 Wayback 快照恢复 | Open |
| [#77709](https://github.com/anthropics/claude-code/pull/77709) | **新增示例：仅允许官方 marketplace 的 settings 配置** | 演示 `strictKnownMarketplaces` 的安全用法，对应 #77713 文档需求 | Open |

> 今日 PR 数量较少（仅 3 条），且以文档/配置示例和小修补为主，未涉及 CLI 主干功能改动。

---

## 📈 功能需求趋势

从今日活跃 issue 中可提炼出社区最集中的几条诉求：

1. **Claude 5 系列模型的可访问性与正确性**
   - 上下文窗口：#81693、#81068（1M vs 200K）
   - 模型可用性：#79597、#81350（Fable 5 + setup-token 被错误墙）、#82136（汇总 V5 模型问题）

2. **跨设备 / 跨会话连续性**
   - #61849（已关闭，标记为重复/enhancement）、#26452（Desktop 会话丢失）

3. **MCP 协议增强**
   - #41836：需要会话/对话标识符以便服务端做多租户隔离

4. **TUI / Agent View 可配置化**
   - #74139：可配置的 agent 视图、按 repo 分组、worktree 折叠、statusLine 化设置入口

5. **会话可追溯性 / 防注入**
   - #82146：请求增加 assistant 消息边界和 Stop hook 判定语义标记
   - #81301 / #70543：助手伪造用户回合的高危问题，亟需防护

6. **插件/缓存生命周期**
   - #82145：插件缓存中死进程留下的 `.in_use` 租约未被回收，导致 14 天清理策略失效

---

## 💡 开发者关注点（高频痛点）

| 痛点 | 代表 Issue |
|------|------------|
| **订阅配额异常消耗**（尤其 Max + CLI） | #38335 |
| **认证/登录链路脆弱**（OAuth state 丢失、Remote Control 拒访、登录路由回退到"创建新账户"） | #77966、#29449、#82008 |
| **模型元数据/上下文窗口显示错误** | #81693、#81068 |
| **订阅权益被客户端 UI 错配**（Fable 5 在 Max 下被门禁） | #79597、#81350 |
| **Windows 平台代码完整性策略冲突**（MSIX + CIG + SwiftShader） | #80999、#81341 |
| **macOS 27 beta 兼容性**（seatbelt/Metal shader 缓存路径） | #80472 |
| **权限分类器自身被绕过的可能**（auto-mode 在拒绝信息中教代理如何绕过） | #74301 |
| **启动期隐私/出网行为**（未发指令即访问 git origin） | #21108 |
| **工具在特定计划下"消失"**（Artifact 工具在 Team 计划 CLI 中不可用） | #80418 |
| **会话控制流被伪造**（assistant 假造 user turn 并据此执行） | #81301、#70543 |

---

**小结**：今日最值得 Anthropic 团队优先回应的三件事是——（1）Max 配额异常的历史遗留问题（#38335）；（2）Opus 5 / Fable 5 的上下文窗口与订阅门禁错误（#81693、#81068、#79597、#81350）；（3）助手伪造用户回合并据此执行的高危控制流缺陷（#81301、#70543、#82146）。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**📅 2026-07-29**

---

## 🔥 今日速览

今日 Codex 仓库迎来 **v0.146.0 正式版** 重大更新，重点新增会话命名、侧边对话切换、Agent Plugins 工作区发布以及 Amazon Bedrock / Claude 插件市场支持，社区呼声最高的 Linux 桌面端请求继续位列榜首（190 条讨论、864👍）。与此同时，**GPT-5.6 Sol 系列模型在多代理（multi-agent v2）架构下出现的子代理模型覆盖问题**成为当天最具热度的技术争议，影响范围覆盖 CLI、Desktop、app-server 三端。

---

## 📦 版本发布

### Codex CLI v0.146.0（正式版）
基于 Rust 的 **0.146.0 主版本** 发布，核心亮点：

| 类别 | 新功能 |
|------|--------|
| **会话管理** | 使用 `/new` 或 `/clear` 为新会话命名，置顶重要线程，可在侧边对话间切换而无需关闭 (#34605, #34840, #35011) |
| **插件生态** | 支持 Agent Plugins manifest、工作区插件发布，新增 Amazon Bedrock 与 Claude 插件市场 |
| **依赖升级** | bundled V8 升级至 150.4.0 |

同时发布的还有 `0.146.0-alpha.14` 预发布版本供早期测试。

---

## 🌟 社区热点 Issues（Top 10）

### 1. [#11023 — Codex desktop app for Linux](https://github.com/openai/codex/issues/11023) 🏆
**190 条讨论 · 864👍** — 当日最高热度 Issue。大量 Linux 用户希望在桌面端使用 Codex（macOS 因功耗问题难以长时间使用），请求发布 Linux 版本。社区已持续推动数月。

### 2. [#31814 — GPT-5.6 Sol 无法指定子代理模型](https://github.com/openai/codex/issues/31814) — ✅ CLOSED
**99 条讨论 · 163👍** — 已被关闭。报告 GPT-5.6 Sol 在 multi-agent v2 默认开启时，`hide_spawn_agent_metadata=true` 导致子代理不得不全部为 Sol 实例，模型覆盖失效。修复详见下文章节。

### 3. [#10571 — "Bad request" 错误](https://github.com/openai/codex/issues/10571)
**24 条讨论** — 使用 gpt-5.2 xhigh 时偶发 "Bad request" 报错，影响 Pro 用户。

### 4. [#19504 — 阿拉伯语 / 希伯来语 RTL 文本支持](https://github.com/openai/codex/issues/19504)
**22 条讨论 · 19👍** — 阿拉伯文渲染方向、标点位置不正确，需要原生 RTL 支持，涵盖 Codex 与 Chat 双面板。

### 5. [#23078 — Mac 端移除设备后 Codex Mobile 无法重新配对](https://github.com/openai/codex/issues/23078)
**21 条讨论** — 用户误删移动设备后无法再次配对，影响远程控制工作流。

### 6. [#13036 — 支持多会话并发显示](https://github.com/openai/codex/issues/13036)
**13 条讨论** — macOS 桌面端当前仅支持单会话，多代理/多任务场景受限。

### 7. [#24534 — Codex Desktop 自定义存储路径](https://github.com/openai/codex/issues/24534)
**11 条讨论 · 23👍** — Windows 端"无项目"对话默认保存位置不便，支持自定义目录呼声强烈。

### 8. [#35619 — Rollout JSONL 文件在 app-server 进程切换时被删除](https://github.com/openai/codex/issues/35619)
**9 条讨论** — Windows 26.721.4979 版本下 934/942 个 thread 被孤立，严重的会话丢失问题。

### 9. [#32031 — multi-agent v2 spawn_agent UX 严重回归](https://github.com/openai/codex/issues/32031)
**8 条讨论 · 16👍** — 自然调用方式失败，默认 schema 让用户无法发现模型覆盖选项，与 #31814 同源。

### 10. [#32164 — Windows 远程控制注册无法完成](https://github.com/openai/codex/issues/32164)
**8 条讨论** — Windows 11 平台桌面端远程控制（Remote Control）注册流程卡死，连接不可用。

> 此外值得关注：**#35528**（上下文残差保真度不足）、**#27207**（归档聊天入口被埋深）、**#33008**（@-mention 引用聊天导致整段对话注入，引发渲染器永久冻结）。

---

## 🛠️ 重要 PR 进展

### 1. [#35859 — 暴露插件安装时间戳](https://github.com/openai/codex/pull/35859)
为 `PluginSummary` 增加 `installedAt` 元数据（Unix 秒级时间戳），用于远程插件跨会话识别。

### 2. [#35852 — codex-protocol 迁移至共享 HTTP 类型](https://github.com/openai/codex/pull/35852) 🟢 OPEN
用 `codex-http-client::HttpError` 和 `http::StatusCode` 替换 protocol 层直接对 `reqwest` 的依赖，统一错误模型。

### 3. [#35859/#35837 — 插件元数据治理](https://github.com/openai/codex/pull/35837)
为 `PluginSummary` 增加 `disabledReason` 与 `eligiblePlanTypes` 字段，让第三方应用能基于订阅计划判断插件可用性。

### 4. [#35854 — App-Server 事件载荷 Box 化](https://github.com/openai/codex/pull/35854)
将 `ServerNotification` / `ServerRequest` 放入 `Box`，减小 `AppServerEvent` / TUI 事件值类型栈占用，提升大量事件场景的性能。

### 5. [#35845 — 支持明文协作工具消息](https://github.com/openai/codex/pull/35845)
为 `spawn_agent` / `send_message` / `followup_task` 增加 plaintext 通路，并保留 `encrypted_function_args`，便于回放。

### 6. [#35835 — 嵌套 Codex 请求的父回合追踪](https://github.com/openai/codex/pull/35835)
在代理生成、跟进、审查中传播 `parent_turn_id`，让多层 Codex 调度结构可追溯。

### 7. [#35843 — 远程执行服务器随父 stdin 关闭退出](https://github.com/openai/codex/pull/35843)
新增 `--exit-on-stdin-close` 与 `CODEX_EXEC_SERVER_EXIT_ON_STDIN_CLOSE` 环境变量，避免孤儿进程。

### 8. [#35831 — 升级 rusty_v8 至 150.4.0](https://github.com/openai/codex/pull/35831)
V8 引擎 15.0.245.2 同步升级、checksums + Bazel targets 完整刷新，配合 v0.146.0 发布。

### 9. [#35830 — WebRTC 副信道接入路由 Realtime API](https://github.com/openai/codex/pull/35830)
统一使用 `https://api.openai.com/v1`，保留 `experimental_realtime_ws_base_url` 作为本地开发覆盖。

### 10. [#35828 — 强制中心化 SQLite 连接创建](https://github.com/openai/codex/pull/35828)
在 workspace Clippy 配置中 deny SQLx 直构造，避免绕过 `codex-state` 共享配置。

> 工程基础设施类 PR 同样值得关注：**#35857**（Bazel Rust 二进制测试目标）、**#35851**（Windows 设备命名空间路径规范化）、**#35825/#35821**（公告/TUI 网络检查统一使用共享 HTTP 客户端）、**#31817**（models.json 自动更新机器人）。

---

## 📈 功能需求趋势

从 Issue 标签与讨论聚类来看，社区当前最关心的方向集中在以下几类：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Linux 桌面端支持** | #11023 | 🔥🔥🔥🔥🔥（864👍） |
| **多代理/子代理可观测性** | #31814, #32031, #32587, #32283 | 🔥🔥🔥🔥 |
| **Windows Desktop 稳定性** | #35619, #32164, #33561, #27453 | 🔥🔥🔥🔥 |
| **多会话与并发显示** | #13036, #27207, #31845 | 🔥🔥🔥 |
| **会话存储/归档可访问性** | #24534, #27207, #31845 | 🔥🔥🔥 |
| **RTL 与本地化** | #19504 | 🔥🔥 |
| **远程控制与多设备** | #23078, #21816, #32164 | 🔥🔥🔥 |
| **上下文保真与压缩语义** | #35528, #30375, #28531 | 🔥🔥🔥 |
| **浏览器/MCP/插件市场** | #21816, #28704, 多个 PR | 🔥🔥🔥 |

---

## 💬 开发者关注点

1. **多代理模型覆盖失效** — 当天最热的工程问题。GPT-5.6 Sol / Terra 启用 multi-agent v2 后，子代理被强制回退到 Sol 系列，"模型=Sol" 实际失效导致 UX 与预期严重偏离，阻碍复杂工作流。

2. **Windows 端稳定性的集中爆发** — 多个近期版本（特别是 26.721.4979 系列）出现 JSONL 线程被删、远程控制注册卡死、桌面端启动即崩溃等问题，对企业用户影响突出。

3. **会话数据丢失风险** — 进程切换/升级路径下的 thread 孤立问题（#35619 报告 942 个会话中 934 个受影响）暴露了数据持久化层的健壮性短板。

4. **长会话性能坍塌** — 长对话（尤其含图像）会变得越来越慢直至冻结（#30375、#28531），社区认为与 JSONL base64 嵌入图片和上下文压缩策略有关。

5. **UI 信息隐藏回归** — 多个"Papercuts 2026"标签的 Issue 指出近期版本移除了子代理模型显示、归档聊天入口、@-mention 引用聊天等功能或将其埋入深层菜单，影响工作效率。

6. **跨平台路径处理** — Windows 设备命名空间路径、远程会话中的外平台路径规范化为近期频繁出现的小型稳定性问题。

7. **插件生态期待** — 0.146.0 新增 Amazon Bedrock / Claude 插件市场，但开发者同时呼吁更多元的市场、原生 manifest 工具链以及更清晰的 eligibility metadata。

---

*日报由 GitHub Data 自动汇总生成，覆盖 Releases、Issues 与 PRs 三类数据源。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-29**

---

## 📌 今日速览

今日 gemini-cli 完成了 **v0.53.0 稳定版** 与 **v0.54.0-preview.0** 的同步发布，同时启动了 **v0.55.0 nightly** 迭代。社区关注度最高的议题集中在**子代理（Subagent）行为缺陷**（如 `MAX_TURNS` 后误报成功、generalist agent 死锁）与**Auto Memory 系统稳定性**；安全方面，修复了 **MCP OAuth 刷新** 与 **web-fetch SSRF** 两项 P1 级别漏洞。

---

## 🚀 版本发布

| 版本 | 类型 | 关键内容 |
|------|------|---------|
| [v0.53.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.53.0) | 稳定版 | 修复 a2a 协议下取消工具响应被错误分组导致的 400 错误；引入 LLM triage orchestrator 与 caretaker 容器构建流程 |
| [v0.54.0-preview.0](https://github.com/google-gemini/gemini-cli/releases/tag/v0.54.0-preview.0) | 预览版 | 同步 v0.52.0 / v0.53.0-preview.0 changelog；版本号 bump 至 0.54.0-nightly |
| [v0.55.0-nightly.20260729](https://github.com/google-gemini/gemini-cli/releases/tag/v0.55.0-nightly.20260729.g3499c84f7) | 夜间版 | 集成 PR Generator Firestore 并发双锁与测试接入工具 |

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在 `MAX_TURNS` 后误报 GOAL 成功 ⭐ P1
**12 条评论**：`codebase_investigator` 子代理在达到最大轮次限制前就停止任何分析，却返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了真实的中断状态。属 P1 优先级且标记需复测，影响核心代理可靠性。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 永久挂起 ⭐ P1
**8 条评论 / 👍8**：当 CLI 委派给 generalist agent 时无响应，可持续一小时以上。显式禁用子代理可绕过，强烈暗示路由或上下文传递存在缺陷。

### 3. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 稳健的组件级评估（EPIC） ⭐ P1
**7 条评论**：继 #15300 引入"行为评估"后，目前已有 76 个行为测试覆盖 6 个 Gemini 模型。EPIC 旨在将"组件级评估"制度化，提升改动安全性。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — 评估 AST 感知的文件读取/搜索/映射 ⭐ P2
**7 条评论**：通过 AST 边界精确读取方法可显著降低轮次消耗与 token 噪声。这是社区对"减少噪声、提升精度"诉求的代表性诉求。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不主动使用自定义 skills / sub-agents ⭐ P2
**6 条评论**：即便定义了 `gradle`、`git` skills，模型也很少主动调用，除非显式提示。涉及 skill 路由与 prompt 引导。

### 6. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 无限重试低信号会话 ⭐ P2
**5 条评论**：Auto Memory 仅在成功 `read_file` 后才标记为已处理，会话易被反复拉入提取队列，导致低信号会话死循环。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input" ⭐ P1
**4 条评论 / 👍3**：简单 shell 命令完成后仍停留在"Awaiting user input"，需要手动干预。属 P1 用户体验阻塞问题。

### 8. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Browser subagent 在 Wayland 下失败 ⭐ P1
**4 条评论 / 👍1**：Wayland 环境下 browser 子代理失败，仅打印 `Termination Reason: GOAL` 无具体错误信息。

### 9. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — Browser Agent 会话接管与锁恢复 ⭐ P3
**4 条评论**：当 `persistent` 模式下存在浏览器锁时，BrowserManager 采用"快速失败"策略，希望引入自动接管/锁恢复机制。

### 10. [#24246](https://github.com/google-gemini/gemini-cli/issues/24246) — 工具数 > 128 触发 400 错误 ⭐ P2
**3 条评论**：当工具数量较多时（用户报告 400+）后端返回 400，期待 agent 自动收窄作用范围。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#28566](https://github.com/google-gemini/gemini-cli/pull/28566) — 将 `InvalidStreamError` 详情透传到 UI ⭐ P1/core
在 CLI UI 上展示后端 `type`/`message`，便于推荐 `/compress` 等针对性故障排查建议。

### 2. [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) — MCP OAuth Token 刷新使用存储的 client ID ⭐ P1/security
修复通过 OAuth discovery + 动态客户端注册配置的 MCP 服务在刷新 token 时本地失败并清空凭据、强制重认证的问题。

### 3. [#28557](https://github.com/google-gemini/gemini-cli/pull/28557) — 修复 web-fetch SSRF 漏洞 ⭐ P1/security
`isBlockedHost` 之前仅校验字面 IP，对解析至 169.254.169.254 等内网段的域名无防护。改用异步 DNS 解析路径解决 SSRF 风险。

### 4. [#28551](https://github.com/google-gemini/gemini-cli/pull/28551) — macOS 沙箱缺失时回退到内嵌 Seatbelt 配置 ⭐ size/L
解决 macOS/gMac 沙箱模式（`-s`）下未找到静态 `.sb` profile 时的启动崩溃，属于企业用户高价值修复。

### 5. [#28526](https://github.com/google-gemini/gemini-cli/pull/28526) — 修复 VSCode 伴侣 disposable 泄漏 ⭐ P2/core
`activate()` 中一对 `context.subscriptions.push` 被多余括号折叠为逗号表达式，导致 `gemini.diff.accept` 与 `onDidChangeWorkspaceFolders` 监听未被持有。

### 6. [#28576](https://github.com/google-gemini/gemini-cli/pull/28576) — vitest 启动性能优化
在自托管 runner 上添加缓存预热，将 `gemini-cli-ubuntu-16-core` 上 CI 启动提速约 15%。

### 7. [#28577](https://github.com/google-gemini/gemini-cli/pull/28577) — 增强 e2e 稳定性（pre-flight 环境检查）
通过测试前环境校验降低自托管 runner 上的 flaky 失败。

### 8. [#28434](https://github.com/google-gemini/gemini-cli/pull/28434) — Antigravity 智能体执行器与 Prompt 模板
为 Gemini CLI SSR 代码生成流水线引入无头 Antigravity agent 的 prompt 模板系统。（已关闭）

### 9. [#28432](https://github.com/google-gemini/gemini-cli/pull/28432) — Firestore 并发双锁与测试接入工具
PR 生成器后端数据库接口（事务锁、文档 ID 解析、生命周期枚举）。（已关闭）

### 10. [#28565](https://github.com/google-gemini/gemini-cli/pull/28565) — 查找活跃循环时跳过已合并的 function-response 轮次
针对工具调用缺 thought signature 被 API 拒为 `400 INVALID_ARGUMENT`、污染历史导致会话不可恢复的回归。（已关闭）

> 此外，多个 **dependabot 依赖升级 PR**（js-yaml 4.3.0、postcss 8.5.24、tar 7.5.21、linkify-it 5.0.2、shell-quote 1.10.0、@opentelemetry 系列等）已合并或关闭，反映出团队对供应链安全的高度重视。

---

## 📈 功能需求趋势

从 50 条热门 Issue 中提炼出以下社区聚焦方向：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **🧠 子代理 / 智能体可靠性** | #22323、#21409、#21968、#22093、#22672 | ⭐⭐⭐⭐⭐ |
| **📝 Auto Memory 系统** | #26522、#26525、#26523、#26516 | ⭐⭐⭐⭐ |
| **🌐 Browser Agent 鲁棒性** | #22232、#21983、#22267 | ⭐⭐⭐ |
| **📊 评估与基准测试** | #24353、#22745、#22746、#23166、#23313 | ⭐⭐⭐ |
| **🔐 安全（OAuth / SSRF）** | #28557（PR）、#28481（PR）、#26525 | ⭐⭐⭐ |
| **⚡ 终端渲染性能** | #21924、#24935、#22466 | ⭐⭐ |
| **🛠 自描述与可控性** | #21432、#21763、#22598 | ⭐⭐ |
| **🍎 平台兼容（macOS / Wayland）** | #28551、#21983 | ⭐⭐ |

---

## 💬 开发者关注点

1. **子代理是当前最大的痛点**：错误的状态报告、不可预测的挂起、绕过权限配置（#22093）、不主动调用 skills（#21968）等系列问题表明 subagent 体系仍处于快速演进但不够稳健的阶段。
2. **Auto Memory 系统亟待质量整治**：来自 @SandyTao520 的 4 个相关 issue 集中暴露了"无限重试低信号会话"、"日志泄露"、"无效补丁被静默跳过"等问题，说明新功能的可靠性验证尚有缺口。
3. **"工具数量"成为扩展性瓶颈**（#24246）：随着 MCP、自定义 skill 增加，工具规模超过 ~128 即触发 400，开发者期望 agent 自适应收窄工具集。
4. **安全审计日趋严格**：SSRF 与 OAuth refresh 两项 P1 漏洞同日被修复，加上 dependabot 持续高频升级依赖，反映团队已将"安全左移"作为日常工作。
5. **评估体系基础设施化**（#24353、#23166）：社区明显希望把行为测试、内部 eval 从"个人尝试"升级为正式流水线的一部分，这是产品走向成熟期的关键信号。
6. **终端 UX 细节被反复提及**：`\n` 转义、resize 闪烁、外部编辑器退出后的 buffer 损坏等"小问题"高频出现，说明高质量终端体验仍是竞品差异化点。

---

*数据来源：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli) · 报告生成时间 2026-07-29*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-29**

---

## 📌 今日速览

GitHub Copilot CLI 于昨日发布 **v1.0.76-1**，新增语音模式媒体控制、计划任务状态指示、限额预测等多项体验优化。然而新版本同步暴露了一个严重回归 (Issue #4285)：当日志级别设为 `none/error/warning/info/debug` 时 CLI 静默退出 code 1。社区侧，Windows 平台仍存在多项未解决的关键问题（resume 卡死、终端渲染空白），且 `--acp` 模式与 BYOK、contextTier 的认证/配置回归问题持续受到关注。

---

## 🚀 版本发布

### v1.0.76-1（2026-07-28）

**Added**
- **语音模式媒体控制**：录音前自动暂停正在播放的媒体，录音结束后恢复（macOS / Windows 适用）
- **计划任务状态可见性**：Footer 新增活跃计划任务数量显示
- **`/limits` 智能预测**：基于历史会话预测当前会话的 AI-credit 用量上限
- **可配置定时刷新**：用户可自定义刷新频率

> ⚠️ 注意：v1.0.76-1 存在严重回归（Issue #4285），建议生产环境暂缓升级。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#4016](https://github.com/github/copilot-cli/issues/4016) BYOK 在 `--acp` 模式仍被拒 (回归 1.0.61–1.0.68) | **CLOSED** | 4 | 自定义 provider (`COPILOT_PROVIDER_*`) 在 `--acp` 模式下反复触发 `-32000 Authentication required`，是 #3048、#3902 之后的第三次同类回归 |
| 2 | [#2734](https://github.com/github/copilot-cli/issues/2734) 插件自动更新功能请求 | OPEN | **9** | 当前 9 👍 居首，反映插件分发体验痛点；作者无法推送修复，用户易错过关键更新 |
| 3 | [#4285](https://github.com/github/copilot-cli/issues/4285) v1.0.76-1 静默退出 code 1 | OPEN | 0 | 影响所有非 `default/all` 日志级别的用户，CLI 完全无输出且不写日志文件 |
| 4 | [#4161](https://github.com/github/copilot-cli/issues/4161) `task_complete` 工具在 autopilot 模式消失 | OPEN | 4 | 标记为 #1523 的回归——maintainer 曾确认 v1.0.4 修复，但当前版本仍触发 |
| 5 | [#4159](https://github.com/github/copilot-cli/issues/4159) Windows Terminal 提交 prompt 后 UI 空白 | OPEN | 3 | 交互模式完全不可用，但 `-p` 模式正常，疑似 TUI 渲染层 bug |
| 6 | [#4165](https://github.com/github/copilot-cli/issues/4165) Windows `copilot --resume` 冷启动卡死 | OPEN | 1 | 直接从 PowerShell 启动 TUI 卡在 `Resuming session...` 无响应 |
| 7 | [#4078](https://github.com/github/copilot-cli/issues/4078) 计划任务 (`/every`, `/after`) 触发后清空队列 | OPEN | 0 | 计划任务挤占主队列上下文，调度完成后队列不再出队 |
| 8 | [#4005](https://github.com/github/copilot-cli/issues/4005) 企业环境下 "Copilot billing entity isn't selected" | OPEN | 2 | 记忆功能无法保存，1.0.65 后出现，影响 enterprise 部署 |
| 9 | [#4286](https://github.com/github/copilot-cli/issues/4286) 流式 `tool_use` 长时间静默 | OPEN | 0 | `/v1/messages` 流式协议中 `input_json_delta` 被缓冲至完整后才 flush，大工具参数导致数分钟无响应 |
| 10 | [#4269](https://github.com/github/copilot-cli/issues/4269) 空模型 turn 持久化为 `content: null` 永久破坏会话 | OPEN | 0 | 严格 OpenAI 兼容端点拒绝此消息，导致 session 完全不可恢复 |

**其他值得关注**：
- [#4288 iTerm2 滚轮失效](https://github.com/github/copilot-cli/issues/4288) — 已 CLOSED
- [#4281 "Pending" 标记未及时清除](https://github.com/github/copilot-cli/issues/4281) — UI 状态混淆
- [#3934 MCP 被策略拦截](https://github.com/github/copilot-cli/issues/3934) — 企业 MCP 注册中心兼容性问题
- [#3576 Windows stdio MCP 启动失败](https://github.com/github/copilot-cli/issues/3576) — `npx`/`ps1` 在 1.0.56-1 后回归
- [#4272 新模型被灰显](https://github.com/github/copilot-cli/issues/4272) — 企业策略 UI 提示链路断裂

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [#4100](https://github.com/github/copilot-cli/pull/4100) *(作者: huangyoufeng76-debug)* | OPEN | 仅标注「安全性」，无描述性内容，待 maintainer 评估具体变更范围 |

> 📉 今日 PR 活跃度极低，仅 1 条更新，建议关注后续审查结论。

---

## 📈 功能需求趋势

从今日 28 条 Issue 提炼的高频诉求方向：

1. **Windows 平台稳定性**（占比最高）
   - #4165、#4159、#3576 均指向 Windows 特有的 resume 卡死、TUI 渲染空白、std IO MCP 启动失败
   - 反映 Windows 终端/进程管理子系统的回归测试覆盖薄弱

2. **企业部署能力**
   - #4005（billing entity）、#3934（MCP 策略）、#4283（server-managed 插件未持久化）、#4272（模型启用提示）
   - Enterprise 用户需明确的策略→终端映射链路

3. **会话/上下文持久化**
   - #4269（空 turn 破坏 session）、#4282（模型前缀不一致导致 resume 失败）、#4268（退出摘要回归）、#4078（计划任务挤占队列）
   - session metadata 兼容性亟需 schema 化

4. **ACP 协议对等性**
   - #4016（BYOK）、#4275（contextTier 配置）— 交互模式能力未在非交互/ACP 模式同步暴露

5. **模型与子代理调度**
   - #4287（subagent 默认 mini 而非 inherit）、#4270（Claude Sonnet 5 自行委派 minor agent）
   - 智能体路由策略需更显式可控

---

## 💬 开发者关注点

**高频痛点**：
- **版本升级即踩坑**：1.0.74/75（exit summary 缺失）、1.0.56-1（MCP）、1.0.73（`view` 工具）、1.0.76-1（silent exit）—— 几乎每个版本都引入 1-2 个用户级关键回归
- **TUI 跨平台一致性**：Windows Terminal、iTerm2、PowerShell 上的渲染与输入事件处理差异显著，键位重复触发 (#4274)、滚轮失效 (#4288) 等问题反复出现
- **macOS 代码签名/钥匙串共享**：#4273 揭示同时存在 GitHub-signed 与 Microsoft-signed 的 CLI 二进制时，钥匙串 ACL 反复弹窗，属深层 XARA 问题
- **UX 过度干预**：#4284 指出 `/update` 提示与自动更新机制重复，造成每日多次提示

**高频需求**：
- 插件级自动更新（#2734 👍 9，社区最高）
- 会话/退出摘要可观测性回归修复
- ACP 协议与交互模式能力对齐
- 流式协议低延迟（避免缓冲所有 `input_json_delta`）
- 显式子代理模型继承与路由控制

---

*日报基于 github.com/github/copilot-cli 公开数据生成，覆盖时间窗口：2026-07-28 → 2026-07-29（UTC）。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-29**

---

## 📌 今日速览

今日社区动态以 **Bug 修复与体验优化** 为主线：无新版本发布，但仓库合并了 3 项重要修复 PR（涉及 MCP 日志、审批通知、模型显示名），同时新提交了 4 个修复/特性 PR。Issues 方面以 **用户认证失败、插件崩溃、Session 管理缺失** 等影响日常使用的痛点最受关注，反映出社区对 CLI 稳定性与可用性的高要求。

---

## 🚀 版本发布

今日无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [\#2566](https://github.com/MoonshotAI/kimi-cli/issues/2566) | 受邀免费用户 OAuth 登录失败（有活跃 Coding Credits） | 🟢 OPEN | ⭐⭐⭐⭐⭐ |
| [\#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) | `/plugins` 在安装 2+ 插件时崩溃（Windows / v0.29.0） | 🟢 OPEN | ⭐⭐⭐⭐⭐ |
| [\#1783](https://github.com/MoonshotAI/kimi-cli/issues/1783) | 建议添加 `/delete` 命令直接删除 Session | 🟢 OPEN | ⭐⭐⭐⭐ |
| [\#708](https://github.com/MoonshotAI/kimi-cli/issues/708) | Agent 违反 Git 安全协议，未授权提交 | 🔴 CLOSED | ⭐⭐⭐⭐ |
| [\#732](https://github.com/MoonshotAI/kimi-cli/issues/732) | 完善 llamacpp 本地后端配置文档 | 🔴 CLOSED | ⭐⭐⭐ |

**重点解读：**

- **#2566（OAuth 登录被拒）**：直接影响新用户入门路径，且属"邀请制免费用户"这一关键增长场景，建议优先修复。
- **#2553（`/plugins` 崩溃）**：复现条件明确（Windows + ≥2 插件），TypeError 提示指向数据结构边界处理缺陷，影响所有插件重度用户。
- **#1783（Session 删除命令）**：5 条评论 + 1 👍，说明社区对 Session 管理能力有持续呼声；当前需手动清理 `~/.kimi/sessions/` 体验欠佳。
- **#708（Git 安全违规）**：已关闭，反映出安全合规问题被严肃处理；尽管无点赞，仍属高风险议题。
- **#732（llamacpp 文档）**：体现本地/离线部署需求，社区希望降低自定义后端的接入门槛。

> 注：今日窗口内仅 5 条 Issue 更新，已全部覆盖。

---

## 🛠️ 重要 PR 进展

| # | PR | 作者 | 状态 | 内容要点 |
|---|----|------|------|---------|
| [\#1637](https://github.com/MoonshotAI/kimi-cli/pull/1637) | MCP 日志重定向至 loguru | he-yufeng | ✅ Merged | 修复 MCP server 日志污染 TUI 的问题 |
| [\#2284](https://github.com/MoonshotAI/kimi-cli/pull/2284) | 审批请求触发 Notification 钩子 | he-yufeng | ✅ Merged | 完善 hooks 系统对审批场景的覆盖 |
| [\#2174](https://github.com/MoonshotAI/kimi-cli/pull/2174) | 尊重 kimi-for-coding 模型 display_name | tears-mysthla | ✅ Merged | 修复后端模型名（如 Kimi-k2.6）被硬编码覆盖 |
| [\#2176](https://github.com/MoonshotAI/kimi-cli/pull/2176) | UserPromptSubmit 钩子提取 ContentPart 文本 | tears-mysthla | 🟢 Open | 修复 list[ContentPart] 输入下 matcher 失效 |
| [\#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) | ACP 模式下空回答改为 QuestionNotSupported | ayaangazali | 🟢 Open | 解决 ACP 协议下"用户取消"与"空回答"无法区分 |
| [\#2567](https://github.com/MoonshotAI/kimi-cli/pull/2567) | `/usage` 面板显示绝对重置时间 | versun | 🟢 Open | 将模糊"4d 后重置"改为精确本地时间 |
| [\#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) | Moonshot API MCP 工具名规范化 | lihailong00 | 🟢 Open | 生成稳定别名 + 补齐 object 类型，提升兼容性 |

**重点解读：**

- **#1637、#2284（he-yufeng 贡献）**：连续两个 MCP/hooks 体系修复，体现贡献者在 **可观测性 + 扩展性** 方向的持续投入。
- **#2174（模型 display_name）**：解决后端返回"Kimi-k2.6"却被显示为旧名的问题，对模型迭代期间的用户识别至关重要。
- **#2567（`/usage` 增强）**：纯体验优化，将相对时间改为绝对时间，便于用户规划配额使用，属"低成本高满意度"改动。
- **#2539（MCP 工具规范化）**：针对 Moonshot API 的兼容性补丁，反映 MCP 生态在多 API 间仍存在 schema 差异。

> 注：今日窗口内仅 7 条 PR 更新，已全部覆盖。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issue 提炼，社区关注方向可归纳为以下四类：

1. **🔐 用户认证与账户体系** —— OAuth 登录逻辑、免费/付费用户路径分歧（#2566）。
2. **🗂️ Session / 资源生命周期管理** —— 缺少直接删除 Session 的能力（#1783）。
3. **🧩 插件与扩展生态稳定性** —— `/plugins` 多插件崩溃、Windows 兼容（#2553）。
4. **🖥️ 本地部署与自定义后端** —— llamacpp 文档完善需求（#732）。

> 综合趋势：**"从能用 → 好用 → 稳定"**——社区重心正从基础功能补全，转向日常使用体验与企业级稳定性。

---

## 👨‍💻 开发者关注点

基于今日更新的 Issue 与 PR，开发者反馈中反复出现的痛点包括：

| 痛点 | 代表 Issue/PR |
|------|--------------|
| **登录流程对新用户不友好**（邀请制免费用户被拒） | #2566 |
| **CLI 错误恢复能力弱**（崩溃即全 CLI 退出） | #2553 |
| **隐藏路径过多**（手动清理 Session、文档晦涩） | #1783, #732 |
| **hooks 系统边界场景未覆盖** | #2176, #2284 |
| **MCP 工具 schema 与上游 API 不完全兼容** | #2539 |
| **ACP 协议下错误信号粒度不足** | #2507 |
| **模型迭代过程中显示名不同步** | #2174 |

**核心洞察：** 开发者最希望提升的并非"新功能"，而是 **错误处理、信息披露、可观测性** 这三项"工程成熟度"指标——这些改进往往成本不高，却能显著提升留存与口碑。

---

*📊 报告基于 github.com/MoonshotAI/kimi-cli 过去 24 小时公开数据自动生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-29

## 📌 今日速览

OpenCode 在过去 24 小时内发布了 **v1.18.8 / v1.18.9** 双版本，重点修复 MCP SDK 兼容性和 Desktop 应用导航问题。社区方面，**#6231「自动发现 OpenAI 兼容端点模型」** 以 193 👍 与 33 条评论稳居热度榜首，反映出本地 LLM 部署用户对配置体验的强烈诉求；同时 **OpenCode Go 订阅相关的计费/余额异常** 问题持续发酵，多个高赞 Issue 集中暴露后端服务的稳定性短板。

---

## 🚀 版本发布

### v1.18.9 — MCP 兼容性与 Desktop 修复
**Core**
- 恢复与遗留 MCP SDK 客户端的兼容性。

**Desktop**
- 修复 Solid 清理逻辑导致的崩溃，避免破坏应用导航。
- 修复首页会话加载逻辑，会话列表现在可独立刷新而不再挂起整个页面。

### v1.18.8 — MCP 协议改进
**Core**
- 提升与较新 MCP 服务器及 OAuth 流程的兼容性。
- 修复 SDK 会话过期后 MCP 服务器重连逻辑（包括并发请求）。
- 正确识别 `mcp debug` 中配置的 OAuth 回调端口。
- 不再向 MCP 发送已废弃的 sampling 默认值。

> 两个版本聚焦同一主题：**MCP 生态兼容性修复** + **Desktop 应用稳定性提升**，表明团队正集中精力打磨集成层与桌面端体验。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 👍 | 评论 | 重要性 |
|---|-------|---|------|--------|
| 1 | [#6231](https://github.com/anomalyco/opencode/issues/6231) Auto-discover models from OpenAI-compatible provider endpoints | 193 | 33 | ⭐⭐⭐ |
| 2 | [#19604](https://github.com/anomalyco/opencode/issues/19604) Write tool fails silently on large files (~1000+ lines) | 13 | 20 | ⭐⭐⭐ |
| 3 | [#34884](https://github.com/anomalyco/opencode/issues/34884) Go returns "Provider rate limit exceeded" despite 0% rolling usage | 6 | 19 | ⭐⭐⭐ |
| 4 | [#19130](https://github.com/anomalyco/opencode/issues/19130) Windows ARM64 native: OpenTUI fails to initialize | 10 | 14 | ⭐⭐ |
| 5 | [#33356](https://github.com/anomalyco/opencode/issues/33356) Unbounded growth of `event` table: opencode.db reaches 13GB+ | 2 | 12 | ⭐⭐⭐ |
| 6 | [#37790](https://github.com/anomalyco/opencode/issues/37790) OpenCode Go subscription paid but shows "Insufficient balance" | 0 | 12 | ⭐⭐ |
| 7 | [#38801](https://github.com/anomalyco/opencode/issues/38801) message="exiting loop" | 0 | 11 | ⭐⭐ |
| 8 | [#33696](https://github.com/anomalyco/opencode/issues/33696) GitHub Copilot provider broken *(已关闭)* | 8 | 10 | ⭐⭐ |
| 9 | [#37056](https://github.com/anomalyco/opencode/issues/37056) opencode-go provider returns 400/401/500 for subscribed models | 0 | 7 | ⭐⭐ |
| 10 | [#29039](https://github.com/anomalyco/opencode/issues/29039) macOS x64 baseline binary crashes on Ivy Bridge CPUs | 1 | 6 | ⭐ |

**点评：**
- **#6231** 是当之无愧的「年度需求王」——LM Studio/Ollama/llama.cpp 用户希望 OpenCode 自动发现本地模型，替代手动维护 `opencode.json` 的繁琐流程。
- **#19604** 与 **#33356 / #29694（tool-output 63GB 累积）** 共同指向**静默失败与资源管理缺失**两大顽疾，对长期使用者影响极大。
- **#34884 / #37790 / #37056 / #36399** 集中暴露 **OpenCode Go 订阅** 服务的多项问题（限流判定、支付状态同步、订阅计费），团队亟需一次系统性排查。

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 内容 | 状态 |
|----|------|------|
| [#39423](https://github.com/anomalyco/opencode/pull/39423) | **feat(i18n)** — 新增希伯来语支持并处理 RTL 布局 | OPEN |
| [#39413](https://github.com/anomalyco/opencode/pull/39413) | **fix(session)** — 对 HTTP 408 请求超时增加重试机制，关闭 [#39221](https://github.com/anomalyco/opencode/issues/39221) | OPEN |
| [#39429](https://github.com/anomalyco/opencode/pull/39429) | **fix(tui)** — 总会话标签条（tab strip）始终显示 | OPEN |
| [#39428](https://github.com/anomalyco/opencode/pull/39428) | **feat(tui)** — 为未读活动标签增加静态光晕 | OPEN |
| [#39425](https://github.com/anomalyco/opencode/pull/39425) | **fix(acp)** — `usage_update` 尊重提供方实际货币而非硬编码 USD | OPEN |
| [#39417](https://github.com/anomalyco/opencode/pull/39417) | **feat(task)** — 子代理支持 `images` 参数传递图像 | OPEN |
| [#39298](https://github.com/anomalyco/opencode/pull/39298) | **fix(core)** — 为 ripgrep 搜索引入默认 wall-clock 上限 | CLOSED |
| [#38045](https://github.com/anomalyco/opencode/pull/38045) | **fix(core)** — Shell 模式使用 `shell-quote` 正确转义命令 | CLOSED |
| [#36068](https://github.com/anomalyco/opencode/pull/36068) | **fix(provider)** — OpenAI Chat delta 兼容 Ollama `reasoning` 字段 | OPEN |
| [#34794](https://github.com/anomalyco/opencode/pull/34794) | **feat(provider)** — 新增 `--model free` 随机选择零成本模型 | OPEN |

**亮点：**
- **PR #39413** 直接修复会话级网络可靠性问题，对生产环境用户体验改善显著。
- **PR #39417** 让多 Agent 工作流支持视觉任务，是 **Task Tool 能力扩展** 的重要一步。
- **PR #39298** 给 ripgrep 加上默认超时，缓解了 #32981（大型目录快照挂死）的根因。
- **TUI 系列 PR（#39418 / #39419 / #39421 / #39422 / #39428 / #39429）** 显示 kitlangton 在集中重构会话/标签路由，清理冗余渲染路径，UI 一致性有望大幅提升。

---

## 📈 功能需求趋势

从近 24 小时及近期 Issue 中可清晰识别以下方向：

1. **本地/自托管模型体验升级**
   - 自动模型发现（#6231，193👍）、Ollama `reasoning` 字段支持（#36068）、零成本模型快捷入口（#34794）。
   - 反映出 **OpenAI 兼容 API 生态** 已成为社区最核心的扩展场景。

2. **多语言 / 国际化**
   - 希伯来语 + RTL 支持（#39423）、意大利语文档 typo 修复（#39405/#39424）。
   - 暗示产品已走出英语圈，**欧洲 + 中东用户群** 在形成。

3. **TUI 体验打磨**
   - 标签条、未读提示、可见的运行指示、剪贴板支持（#7134 已关闭）、macOS 终端复制（#7134）。
   - 多 Agent 上下文丢失、`--continue` 占位错误（#39416）等会话可靠性问题被同步治理。

4. **权限与安全自动化**
   - "Auto mode" LLM 分类器自动批准权限（#37564）、auto-approve 后续工作（#39412）。
   - 反映社区希望**降低 Agent 模式下的交互摩擦**。

5. **订阅与计费透明度**
   - 多条 Issue 围绕 OpenCode Go 展开：订阅后余额异常、qwen3.7-max 高频扣费、Kimi K3 不可用等。
   - 用户期待更清晰的**用量/账单仪表盘**（#4925「显示会话总成本」呼声已久）。

---

## 💡 开发者关注点

汇总 50 条 Issue 后，开发者反馈的**高频痛点**主要集中在：

| 类别 | 代表 Issue | 核心痛点 |
|------|-----------|---------|
| **静默失败** | #19604、#38801、#37687 | 工具调用返回空错误、模型过早 `exiting loop`，排障极其困难 |
| **资源无界增长** | #33356、#29694、#32981 | SQLite event 表与 tool-output spill 文件无清理策略，单实例吃掉 60GB+ 磁盘 |
| **跨平台兼容** | #19130、#38520、#29039 | Windows ARM64 的 bun:ffi 限制、macOS 老 CPU 缺失 AVX2/FMA |
| **本地提供方体验** | #6231、#36068、#33696 | 模型清单手动维护、字段约定不一致、认证流程脆弱 |
| **Go 订阅可靠性** | #34884、#37790、#37056、#36399、#39406 | 限流误判、支付未同步、订阅模型报错、计费异常 |
| **会话与导航稳定性** | #38801、#39086、#39415、#39419 | 会话无故消失、task 工具丢失、`Invalid server route` 崩溃 |

> **建议关注方向：** OpenCode 团队当前应优先投入 **资源生命周期管理（DB + spill 文件清理）** 与 **Go 订阅服务可观测性**——这两类问题已多次复现且影响付费用户留存；其次是 **本地提供方自动发现**（#6231），若落地将显著降低新用户上手门槛。

---

*日报基于 2026-07-29 GitHub 公开数据生成，共统计 2 个 Release、50 条 Issue 更新、50 条 PR 更新。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-29

> 数据来源: [github.com/earendil-works/pi](https://github.com/earendil-works/pi) (原 `pi-mono` 已完成仓库重命名,详见 #7229)
>
> 报告周期: 过去 24 小时社区动态

---

## 📌 今日速览

过去 24 小时 Pi 仓库共活跃 50 条 Issue + 27 条 PR,**无新版本发布**。社区焦点集中在三件事:**架构演进讨论**(#4609 重写 Rust 提案虽已关闭但依然高互动)、**渲染与压缩机制缺陷**(全量重绘与 auto-compaction 触发失效)以及**多 Provider 适配密集落地**(Vertex、Kimi K3、Apiário、Z.AI 纷纷完成或即将完成合入)。

---

## 📦 版本发布

无。过去 24 小时未发布新版本(最新合入分支仍在 `0.82.x` 节奏中)。

---

## 🔥 社区热点 Issues

以下按社区互动量(评论 + 👍)与话题代表性排序:

1. **[#4609 Rewrite pi in Rust](https://github.com/earendil-works/pi/issues/4609)** 🏁 CLOSED · 💬12 · 👍13
   badlogic 本人发起的"重写为 Rust"提案虽然已关闭,但仍稳居榜首,代表社区对性能与单二进制部署的强烈诉求。

2. **[#6747 An API for enhancing agent message markdown](https://github.com/earendil-works/pi/issues/6747)** 🟢 OPEN · 💬11 · 👍2
   扩展作者xl0提出的"在不污染 LLM 输入的前提下改写 agent 消息渲染层"API,已标记 inprogress;看 xl0 的 PR #7231 已经直接实现了它。

3. **[#7064 WSL 绝对路径处理错误](https://github.com/earendil-works/pi/issues/7064)** 🟢 OPEN · 💬9 · 👍1
   WSL2 下 Windows 风格路径在 read/write/edit 工具中失效,agent 频繁降级到命令行;是 WSL 用户长期未解的高频痛点。

4. **[#6922 llama.cpp 不可作默认模型](https://github.com/earendil-works/pi/issues/6922)** 🏁 CLOSED · 💬7 · 👍13
   启动时 `defaultProvider=llama.cpp` 直接报错"No models available";13 个 👍 让其成为本地模型用户最关心的旧 issue 之一。

5. **[#7195 Extensions 不识别符号链接目录](https://github.com/earendil-works/pi/issues/7195)** 🏁 CLOSED · 💬6 · 👍0
   `~/.pi/agent/extensions` 设成 symlink(配合 dotfiles 管理)后就读不到扩展;典型"灵活配置撞上硬编码路径"。

6. **[#7161 anthropic-messages 缺少 x-client-request-id](https://github.com/earendil-works/pi/issues/7161)** 🟢 OPEN · 💬5 · 👍0
   多 Claude 账号轮询的代理场景下,缺少该 header 会让 session affinity 直接失效;意味着所有走代理的 Anthropic 路径都受影响。

7. **[#7194 active tool card 移出视口后每秒全量重绘](https://github.com/earendil-works/pi/issues/7194)** 🟢 OPEN · 💬5 · 👍0
   在远程沙箱+PTY 转发的场景下尤其严重,直接卡 IO;与 #7195 一起暗示渲染层需要一次比较系统的重构。

8. **[#6879 auto-compaction 在 >100% 后不触发直至 provider 报错](https://github.com/earendil-works/pi/issues/6879)** 🟢 OPEN · 💬5 · 👍3
   gpt-5.6-sol 长会话踩到 373k token 才被服务端拒绝;作者建议在每个 agent turn 后做阈值检查,逻辑上属于"必须修"。

9. **[#7020 compaction 后 Pi 不继续](https://github.com/earendil-works/pi/issues/7020)** 🟢 OPEN · 💬5 · 👍2 · `[inprogress]`
   coordinator 长会话场景下 compaction 后流程卡死;与 #6879 是同一主题的两面。

10. **[#7248 Wayland 下 Ctrl+V 静默失败](https://github.com/earendil-works/pi/issues/7248)** 🏁 CLOSED · 💬3 · 👍0
    今日新开 issue,根因明确:`readClipboardText()` 只支持 X11;Linux Wayland 桌面用户必须切到 X11 应用复制才能粘贴。

---

## 🛠 重要 PR 进展

1. **[#7245 feat(tui): inline images under tmux via sixel](https://github.com/earendil-works/pi/pull/7245)** 🟢 OPEN
   取消"`TMUX` 一律禁图"的粗暴策略,引入 sixel 后端,在多路复用器内也能显示图片;TUI 富媒体方向的关键补完。

2. **[#7236 feat(tui): pin chat input + mouse caret](https://github.com/earendil-works/pi/pull/7236)** 🏁 CLOSED
   新增 `Viewport` 组件,输入框/底部常驻,历史独立滚动;同时给 `pi-tui` 加了 SGR 鼠标追踪与组件级路由,大幅提升长会话可读性。

3. **[#5262 feat(ai): Anthropic Vertex provider](https://github.com/earendil-works/pi/pull/5262)** 🟢 OPEN
   复用现成 Anthropic Messages 流式管线,薄适配接到 Vertex AI;等待已久的"Vertex 上的 Claude"原生支持即将到来。

4. **[#7240 feat(ai): Apiário 作为内置 provider](https://github.com/earendil-works/pi/pull/7240)** 🏁 CLOSED
   拉美聚合 API(OpenAI/Anthropic/DeepSeek/Maritaca/Moonshot),巴西开发者用 BRL 计费的关键接入。

5. **[#7230 fix(ai): Kimi K3 走 Fireworks openai-completions](https://github.com/earendil-works/pi/pull/7230)** 🏁 CLOSED
   同日闭合 #7199,把 `kimi-k3` 与 `kimi-k3-fast` 路由到 `https://api.fireworks.ai/inference/v1`,覆盖模型滞后两天的空白。

6. **[#7231 Markdown API 实现](https://github.com/earendil-works/pi/pull/7231)** 🟢 OPEN
   xl0 直接给出 #6747 的实现,代表扩展层将可接管"agent message → 用户视图"的渲染,公式/图表渲染成为可能。

7. **[#7225 fix: undici 8.5.0 → 8.8.0](https://github.com/earendil-works/pi/pull/7225)** 🏁 CLOSED
   修了 #7049:`proxyTunnel` 默认值导致 HTTP 代理失效,`HTTP_PROXY`/`HTTPS_PROXY` 现在能正常工作。

8. **[#7243 fix(ai): TypeBox 1.1.38 → 1.3.7 升级](https://github.com/earendil-works/pi/pull/7243)** 🟢 OPEN
   闭合 #7003,修复 nullable 数组 `array[T] | null` 的校验;同时移除 1.3 弃用 API,扩展作者要关注是否需要适配。

9. **[#7163 feat: search index sqlite](https://github.com/earendil-works/pi/pull/7163)** 🟢 OPEN
   `SessionRepo.search()` 上线 FTS5 contentless 虚表;JSONL/memory 仓库暂仍走全量加载,后续 PR 单独优化。Session 检索性能拐点。

10. **[#7210 fix(coding-agent): 清理失败的 git install](https://github.com/earendil-works/pi

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-29**

---

## 一、今日速览

今日 Qwen Code 发布了 **v0.21.1 稳定版**，无破坏性变更；同步推出 v0.21.0 nightly。社区活跃度持续高位：过去 24 小时内有 **39 条 Issue** 与 **50 条 PR** 更新，话题集中在 **CI/E2E 稳定性、长上下文场景的流式连接问题、TUI/执行台可读性**以及**多平台适配**（Windows OEM 编码、终端滚动）。社区已展示出对 **GitLab/DingTalk/GitHub 等通道扩展**、**模型/会话作用域切换**、**MCP 安全模式**等方向的高频需求。

---

## 二、版本发布

### v0.21.1（稳定版）
- **Breaking Changes**：无
- **主要变更**：核心层 GenAI 内容遥测字段对齐（[#7667](https://github.com/QwenLM/qwen-code/pull/7667)），以及其他若干修复
- **次日发布**：v0.21.0-nightly.20260729.0c0ca5fed，已合入 [PR #7913](https://github.com/QwenLM/qwen-code/pull/7913)（`autofix`: 在五轮变更后再展示修复建议，避免噪声）

> ⚠️ 用户反馈 0.21.1 在 Windows 上存在终端无法滚动 ([#7964](https://github.com/QwenLM/qwen-code/issues/7964)) 与多次崩溃 ([#7972](https://github.com/QwenLM/qwen-code/issues/7972)) 问题，请升级前留意。

---

## 三、社区热点 Issues（Top 10）

1. **[#7937](https://github.com/QwenLM/qwen-code/issues/7937) – Main CI E2E 失败：sdk-typescript `canUseTool` asyncGenerator 用例（已 ready-for-agent）**  
   主干 E2E 出现 SDK 工具控制流程回归，对所有使用 SDK 的下游项目都有影响。

2. **[#7942](https://github.com/QwenLM/qwen-code/issues/7942) – Main CI E2E 失败：交互式文件系统 read-then-write 用例**  
   与 #7937 同期发生，主干 E2E 疑似在大批量改动后不稳定，社区关注 CI 修复速度。

3. **[#7940](https://github.com/QwenLM/qwen-code/issues/7940) – `UserPromptSubmit` 注入污染用户消息 JSONL 与续会话显示（welcome-pr）**  
   会话持久化数据的"系统性污染"是较高优先级问题，已被标记欢迎 PR，影响数据回放与回溯。

4. **[#7831](https://github.com/QwenLM/qwen-code/issues/7831) – 长上下文（>150k tokens）流式响应反复 ECONNRESET**  
   真实用户场景：长会话末尾频繁断连，影响大上下文能力的可用性。

5. **[#7757](https://github.com/QwenLM/qwen-code/issues/7757) – `perf(serve)`: 守护进程首模型输出延迟测量与优化**  
   接续 #7264 的会话冷启动优化，目标是把"首 token"作为可观测指标；性能主题持续受关注。

6. **[#7819](https://github.com/QwenLM/qwen-code/issues/7819) – `--safe-mode` 无差别丢弃 ACP `session/new` 中的 mcpServers**  
   安全模式与 ACP 协议集成产生契约冲突，影响 IDE 等 ACP 客户端使用 MCP 的能力。

7. **[#7828](https://github.com/QwenLM/qwen-code/issues/7828) – Git 分支显示在切换后仍保持旧值（UI）**  
   经典脚手架级 UI 缺陷，但凡频繁切分支的用户都会遇到。

8. **[#7936](https://github.com/QwenLM/qwen-code/issues/7936) – Windows 非 UTF-8 OEM 代码页下 Shell 命令输出乱码**  
   CP-866 / GBK / Shift-JIS 场景；非英文用户痛点明显。

9. **[#7946](https://github.com/QwenLM/qwen-code/issues/7946) – `serve` 拒绝 >256KiB 文本文件的有界读取**  
   即便只请求 20 行，超大文件仍直接返回 `file_too_large`，与"按窗口读"的契约不符。

10. **[#7960](https://github.com/QwenLM/qwen-code/issues/7960) – 压缩旁路查询的固定 `maxOutputTokens` 在小窗口部署上溢出 → `COMPRESSION_FAILED_EMPTY_SUMMARY`**  
    自托管 vLLM 等小窗口部署的开发者高度关注，影响上下文压缩的稳定性。

---

## 四、重要 PR 进展（Top 10）

1. **[#6579](https://github.com/QwenLM/qwen-code/pull/6579) – `fix(cli)`: 模型切换仅作用于当前会话**  
   `/model <id>` 仅改当前会话，默认模型须显式 `/model --default`。属于语义级 UX 变更，对所有用户都有影响。

2. **[#7846](https://github.com/QwenLM/qwen-code/pull/7846) – `feat(skills)`: 自动 Skill 生命周期管理**  
   自动生成的 Skills 通过工具调用与斜杠命令分别记录"成功使用"次数；30 天未用即标记 stale，已完成包移出活跃集合。

3. **[#7968](https://github.com/QwenLM/qwen-code/pull/7968) – `feat(hooks)`: 新增 `security.allowPrivateNetworkHooks` 以旁路 SSRF 私网段检查**  
   为平台托管的可信 hook 场景打开"白名单"，同时保留仓库本地 hook 的 SSRF 防护。

4. **[#7862](https://github.com/QwenLM/qwen-code/pull/7862) – `feat(channels)`: 新增 GitLab 轮询通道适配器**  
   复用与 GitHub 适配器一致的 `PollingChannelBase` 架构，多平台集成能力再加一城。

5. **[#7929](https://github.com/QwenLM/qwen-code/pull/7929) – `feat(web-shell)`: 上下文化任务面板**  
   把 Web Shell 右侧改造为持久化上下文工作区：环境信息、子代理、Monitor 任务、Shell 后台任务，并提供可扩展的标签页。

6. **[#7531](https://github.com/QwenLM/qwen-code/pull/7531) – `fix(core)`: 修补破坏性 Git 防护中 `git clean`/`git checkout` 的命令形态覆盖**  
   不引入新拦截命令，仅补齐既有规则没覆盖到的写法，安全护栏更稳。

7. **[#7911](https://github.com/QwenLM/qwen-code/pull/7911) – `feat(core)`: 静态图片读取输出规范化 JPEG 概览**  
   PNG/JPEG/WebP 现在返回带方向信息的概览图与可"放大"的提示；解决跨客户端缩放体验不一致问题。

8. **[#7877](https://github.com/QwenLM/qwen-code/pull/7877) – `feat(external-context)`: 私有 Direct External Context 新增"提交即自动回忆"配置**  
   作为 `UserPromptSubmit` Hook 安装，与既有按需 MCP 配置互斥。

9. **[#7867](https://github.com/QwenLM/qwen-code/pull/7867) – `fix(core)`: 不再误报 `[0 lines truncated]`**  
   当 ripgrep 因输出上限被截断时，Grep 工具给出"未知数量被丢弃"的诚实提示。

10. **[#7970](https://github.com/QwenLM/qwen-code/pull/7970) – `fix(release)`: 当上一次发布与目标分叉时跳过 `--notes-start-tag`**  
    修复 AI 自动生成发布说明时锚点错误的边界条件，让历史回溯更准确。

---

## 五、功能需求趋势

通过对当日 Issue/PR 文本的归类，社区关注点集中在以下几个方向：

| 方向 | 典型信号 | 优先级 |
|---|---|---|
| **多平台 & 多通道集成** | DingTalk 图片外发、GitHub 通知原因分发、GitLab 通道适配器、ACP 安全模式下的 MCP 行为 | P2–P3 持续放量 |
| **CI/E2E 稳定性与可观测性** | 多个"Main CI failed"工单集中在过去 24h；首 token 延迟度量、release notes AI 兜底策略 | 高（开发者体验） |
| **长上下文与流式稳定性** | 150k+ token ECONNRESET；压缩旁路的 `maxOutputTokens` 溢出；CJK 字符计数偏差 | 高（场景刚需） |
| **TUI / Web Shell 可读性** | Dynamic Workflow 执行台化、上下文任务面板、静默错误与重试区分 | 中（P2） |
| **Skill / Hook / Workflow 等生命周期治理** | 自动 Skill curator、`/review` 编排者模型路由、提交即自动回忆 | 中（自治能力） |
| **Windows & 国际化** | 终端滚动、OEM 编码、内存越界（Linux/wasm） | 中（边缘用户） |
| **安全护栏** | 破坏性 Git 命令形态补齐、SSRF 私网白名单 | 持续 |

---

## 六、开发者关注点

从当日的反馈来看，开发者社群对以下几点最敏感：

- **CI 失稳的连锁效应**：连续多个 `Main CI failed` 工单与相应的修复 PR（[#7944](https://github.com/QwenLM/qwen-code/pull/7944)、[#7950](https://github.com/QwenLM/qwen-code/pull/7950)、[#7885](https://github.com/QwenLM/qwen-code/pull/7885)）说明主干近期波动较大，开发者希望更稳定的基线与更短的反馈环。
- **"契约一致性"比新功能更迫切**：例如 `readText` 大文件的有界读取（#7946）、`--safe-mode` 下 mcpServers 的丢弃（#7819）、`UserPromptSubmit` 的 JSONL 污染（#7940）——都属于"已有功能没按文档/约定工作"，直接影响生产可用性。
- **长上下文与自托管部署**：vLLM/OpenAI 兼容端点的小窗口模型上，token 预算与压缩策略暴露了多处边界（#7960、#7961、#7831），被自托管开发者强烈关注。
- **可观测与回放**：JSONL 会话回放、续会话显示、首 token 延迟等"事后能看清发生了什么"的能力，是开发者信任系统的底层需求。
- **平台适配盲区**：Windows OEM 编码、终端滚动、wasm 内存越界——非主流平台用户被一致性问题反复困扰，建议关注 [#7964](https://github.com/QwenLM/qwen-code/issues/7964)、[#7936](https://github.com/QwenLM/qwen-code/issues/7936)、[#6820](https://github.com/QwenLM/qwen-code/issues/6820)。
- **AI 自治流程本身需要可降级**：AI 辅助的 release notes 在多批超时后静默回退（#7523），提示社区在引入更多 AI 自动化的同时要保留确定性兜底。

---

*日报生成时间：2026-07-29｜数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-29** · 数据来源：github.com/Hmbown/CodeWhale（DeepSeek-TUI 仓库）

---

## 1. 今日速览

v0.9.2 发布进入最终冲刺阶段：昨日 Hmbown 一次性合入 8 个面向发布的修复 PR（含 VS Code 渲染回归、`edit_file` 对 CRLF 的支持、Operate 启动模式、`/rc` 远程控制恢复、首页品牌对齐等），并通过 PR #4954 / #4945 完成最终交付账本。社区侧则在**沙箱绕过诉求、WSL2 网络连通性、LaTeX 渲染、停止命令拦截**等方面集中提交了新的功能请求与缺陷报告。

---

## 2. 版本发布

**过去 24 小时无新 Release 推送**，但 v0.9.2 候选构建（commit `823280557…`）已通过 11,254-pass 工作区运行与完整 dogfood 验证，等待 tag 落地：

- PR #4954：记录最终 v0.9.2 Operate dogfood → [链接](https://github.com/Hmbown/CodeWhale/pull/4954)
- PR #4945：刷新 v0.9.2 landing gates → [链接](https://github.com/Hmbown/CodeWhale/pull/4945)

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 状态 | 为什么值得关注 |
|---|-------|------|---------------|
| 1 | **#4955 零沙箱 / `--no-sandbox` 模式诉求** | OPEN 👍1 | 开发者在自有机器上被内核级 Seatbelt 沙箱频繁阻断基本 shell 命令，工作流不可用。属于高优先级 UX 痛点。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4955) |
| 2 | **#4956 WSL2 下 Provider 网络连接失败** | OPEN | 影响新用户首启设置路径，与 #4950 错误码链路相关，社区安装门槛问题。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4956) |
| 3 | **#4957 TUI 不渲染 LaTeX 数学公式** | OPEN | 直接影响技术 / 科研场景下的可读性，源码态 `$...$` 全量出现，跨模型稳定复现。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4957) |
| 4 | **#4959 提议 `stop` 命令与运行时 STOP 词拦截** | OPEN | YOLO / 自治流程中缺少硬中断机制，文本类停止指令被模型忽略，是安全控制缺口。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4959) |
| 5 | **#4906 录制真实会话用于 README / 官网 GIF** | OPEN | 当前无任何视觉演示，TUI 是"重动作、重视觉"的产品，转化与认知依赖动效展示。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4906) |
| 6 | **#4934 官网主题视觉吐槽（非正式 critique）** | OPEN | 用户对官网"过于活泼"的视觉风格提出异议，主张主题收敛。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4934) |
| 7 | **#4941 Thinking level 重启后静默回退 Auto** | OPEN | 持久化层是好的，问题在 picker → `StartupDefaults` 路径丢弃 `reasoning_effort`，影响模型族路由体验。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4941) |
| 8 | **#4949 "Constitution" 中文译法讨论（宪法 / 协作准则 / 宪章）** | OPEN | 已促成 #4948 决定性合并（采用"宪章"），但仍在征集中文母语者意见，i18n 公共话题。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4949) |
| 9 | **#4100 Windows 上 `exec_shell` 退出码 `2147483647`** | CLOSED | 长期会话 ConPTY 资源泄漏 / 句柄耗尽，已在 v0.9.2 修复链路中。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4100) |
| 10 | **#4764 `edit_file` 在 Windows CRLF 文件失败** | CLOSED | 跨平台编辑正确性问题，PR #4942 已落地 LF-normalized 搜索 + 字节回写修复。→ [链接](https://github.com/Hmbown/CodeWhale/issues/4764) |

社区反应观察：昨日新开 issue 中"运行控制权"（#4955、#4959、#4956）与"展示层"（#4957、#4906、#4934）占比最高，反映用户既在向生产可用性要控制权，也在向新用户要"看得见的吸引力"。

---

## 4. 重要 PR 进展（Top 10）

| PR | 摘要 | 影响 |
|----|------|------|
| **#4953** fix(tui): expose Operate startup mode | 把 Operate 加回原生启动模式选择器，避免 canonicalizer 把它误归到 Act | 补齐 v0.9.2 三模（Act/Plan/Operate）闭环 → [链接](https://github.com/Hmbown/CodeWhale/pull/4953) |
| **#4951** fix(v0.9.2): calm VS Code rendering & retry upstream 499 | 恢复 VS Code 终端下装饰性动效的 calm 渲染；将流前 499 归类为瞬态错误以纳入有界指数退避 | 解决 v0.9.2 终端可用性 + 上游服务抖动 → [链接](https://github.com/Hmbown/CodeWhale/pull/4951) |
| **#4942** fix(tools): preserve CRLF edits | 在 LF-normalized 视图上做匹配，把唯一 span 映射回原 CRLF 字节 | 终结 Windows 编辑正确性回归 → [链接](https://github.com/Hmbown/CodeWhale/pull/4942) |
| **#4943** fix(tui): restore account-owned remote control (`/rc`) | 恢复 `/rc`，让已认证 Web 会话接管正在运行的 CLI/TUI 实例 | 关键的"账户级远程控制"能力回归 → [链接](https://github.com/Hmbown/CodeWhale/pull/4943) |
| **#4944** feat(web): align landing with managed product | 首页品牌换为 CWC Signal Current，去除装饰性鱼 / 水母，统一 hero 视觉 | 收敛官网视觉，与托管产品对齐 → [链接](https://github.com/Hmbown/CodeWhale/pull/4944) |
| **#4946** fix(web): keep install onboarding truthful | 首启流程按契约渲染，允许用户在选择 key 前启动 CodeWhale，FAQ / roadmap 跟随激活 locale | 新用户 onboarding 降摩擦 → [链接](https://github.com/Hmbown/CodeWhale/pull/4946) |
| **#4948** fix(i18n): call the zh-Hans constitution a charter | 简体中文产品词统一为"宪章"，但 `/constitution`、`constitution.json` 等技术标识符保持不变 | 关闭译法争论、给出可扩展约定 → [链接](https://github.com/Hmbown/CodeWhale/pull/4948) |
| **#4935** fix(tui): stop the ambient jellyfish reading as a face | 调整环境水母轮廓，去除 `(v_v)` / `(v.v)` 类表情化构图 | 修复合规 / 视觉伦理细节 → [链接](https://github.com/Hmbown/CodeWhale/pull/4935) |
| **#4938** chore: land the bounded dead-code slice + budget ratchet (#4785) | 落定受限死代码清理切片并加 CI 预算棘轮；剩余 sweep 推至 v0.9.3 | 让大清理变成可执行、可度量 → [链接](https://github.com/Hmbown/CodeWhale/pull/4938) |
| **#4931** Migrate QA PTY test harness from vt100 to rio-vt | 测试 PTY 解析从 `vt100` 换到 Rio 的 `rio-vt` 终端引擎 | 提升 QA harness 与真实终端一致性 → [链接](https://github.com/Hmbown/CodeWhale/pull/4931) |

---

## 5. 功能需求趋势

从过去 24 小时 issue + PR 提炼，社区最关注的方向（按热度排序）：

1. **运行控制与安全策略**：`--no-sandbox`（#4955）、`/stop` 拦截（#4959）、远程控制恢复（#4943）——用户希望在不牺牲核心隔离的前提下获得"我在掌控"的体验。
2. **跨平台 / IDE 集成稳定性**：WSL2 网络（#4956）、VS Code 终端渲染（#4950 / #4951）、Windows ConPTY（#4100）、CRLF 编辑（#4764 / #4942）——Windows + WSL 是当前最大摩擦面。
3. **模型能力路由化**：modality 路由成为一等公民（#4794）、`reasoning_effort` 持久化（#4941）——从"猜测"走向"声明式"。
4. **新用户触达与视觉资产**：官网品牌对齐（#4944 / #4946 / #4934）、真实会话录制（#4906 / #4940）——TUI 的"动作美学"必须被看见。
5. **i18n 质量与术语治理**：zh-Hans 二轮对抗评审（#4908 + #4948 + #4949）——翻译正在从"覆盖"走向"产品级语言"。
6. **供应链可信**：容器镜像 provenance + SBOM 附着（#4958）——面向企业部署的硬性要求。
7. **死代码与代码预算治理**（#4938 / #4785）——工程化护栏进入主线。

---

## 6. 开发者关注点（痛点与高频需求）

- **沙箱过严成为开发机杀手**：内核级 Seatbelt 在自有机器上误杀基础命令，工作流被迫中断（#4955）。开发者明确呼吁分层配置能力。
- **Windows / WSL 仍是高摩擦面**：CRLF 编辑、ConPTY 句柄泄漏、VS Code 渲染抖动、WSL2 下 provider 网络配置问题（#4764、#4100、#4950、#4956）——任何一项都会把新用户挡在门外。
- **缺失硬停止机制**：在自治 / YOLO 工作流中，文本类指令无法可靠中断工具调用（#4959），开发者期望引入确定性 STOP 信号。
- **持久化设置与模型路由的耦合不稳**：`reasoning_effort` 在重启后被 auto 模型族静默丢弃（#4941），而 modality 数据虽在却从未被用于路由（#4794）——开发者要求这两条路径"贯通且可观察"。
- **首屏叙事缺位**：README 与官网无真实会话视频（#4906），对"终端即产品"的形态尤其吃亏，开发者正在推动可执行捕获框架（#4940）落地。
- **企业部署对供应链证据的需求**：容器镜像缺乏 provenance / SBOM 附着（#4958），无法在合规场景被采信。

---

*本日报基于 GitHub 公开数据自动生成，仅作社区动态参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*