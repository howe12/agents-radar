# AI CLI 工具社区动态日报 2026-07-22

> 生成时间: 2026-07-22 02:02 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比分析报告
**日期：2026-07-22 · 数据范围：8 款主流工具的 24 小时社区动态**

---

## 一、生态全景

AI CLI 赛道在 2026 年中已形成**"三梯队"**格局：以 Claude Code、OpenAI Codex 为代表的头部工具进入**架构收敛与跨生态互通阶段**（Codex `/import`、Qwen 共享 Skill 目录）；以 Gemini CLI、Copilot CLI 为代表的中坚力量正补齐 **MCP 三件套（Tools/Resources/Prompts）** 与**企业级鉴权/审计**；Kimi Code、OpenCode、Pi 等新兴工具则聚焦**本地模型接入**与**多 Provider 兼容**。与此同时，**SubAgent 稳定性**、**长上下文/会话管理**、**桌面/Windows 兼容性**成为全行业的共性痛点，**MCP 协议**则首次成为跨厂商的"通用语"，8 款工具中有 7 款在 24 小时内有相关讨论。

---

## 二、各工具活跃度对比

| 工具 | Release | Issues（活跃/重点） | PR（重点） | 当日亮点强度 |
|------|---------|---------------------|-----------|--------------|
| **Claude Code** | v2.1.217（正式） | ~15+ / 10 | 10 | 🔥🔥🔥🔥 |
| **OpenAI Codex** | v0.145.0 + 3 alpha | ~12+ / 10 | 10 | 🔥🔥🔥🔥🔥 |
| **Gemini CLI** | nightly.20260722 | 10 / 10 | 10 | 🔥🔥🔥 |
| **Copilot CLI** | v1.0.74-0（pre） | 10 / 10 | 1（垃圾 PR） | 🔥🔥 |
| **Kimi Code** | 无 | 5 / 5 | 1 | 🔥 |
| **OpenCode** | 无 | 10 / 10 | 10 | 🔥🔥🔥 |
| **Pi** | v0.81.0 + v0.81.1 | ~5 / 5（部分 CLOSED） | 未详 | 🔥🔥 |
| **Qwen Code** | v0.20.1 + preview + nightly + cua v0.7.3 | 10 / 10 | 10 | 🔥🔥🔥🔥 |
| **DeepSeek-TUI**\* | 无（v0.9.1 冻结中） | 10 / 10 | 10 | 🔥🔥🔥 |

> \* DeepSeek-TUI 当日报告实际数据源指向 `Hmbown/CodeWhale` 仓库，存在仓库归属疑问，以下分析沿用其内容。  
> **活跃度判定综合考量**：Issue/PR 数量、版本节奏、社区反应（点赞/评论）、问题严重度。

**关键观察**：
- **OpenAI Codex** 当日最活跃：主版本 + 3 个 alpha + 17 个 PR，是当日唯一有"架构级重构"动作的工具。
- **Qwen Code** 与 **Claude Code** 紧随其后，前者 4 个并行 release，后者持续修复桌面端与新模型问题。
- **Copilot CLI** 出现"PR 空窗"，仅 1 条垃圾 PR，合入节奏放缓。
- **Kimi Code** 处于"低活动期"，Issue 多为新提交的 P1 Bug，无新版本响应。

---

## 三、共同关注的功能方向

### 1. 🔌 MCP 协议生态化（7/8 工具涉及）
| 工具 | 具体诉求 |
|------|---------|
| **Copilot CLI** | MCP resources/prompts 原语（#1518、#1803）、远程 OAuth CIMD（#1305，👍 26 全榜第一） |
| **Claude Code** | macOS filesystem MCP 静默丢消息（#79992、#80002） |
| **Kimi Code** | MCP Schema 兼容性（#2531，Moonshot API 拒收 `anyOf`） |
| **OpenAI Codex** | 配合分页历史提供 sub-agent 调用与记忆 |
| **Gemini CLI** | skills/sub-agents 主动调用率低（#21968） |
| **Qwen Code** | background sub-agent 复活与 roster（#7454、#7459） |
| **OpenCode** | MCP sampling（#11948）、system message 缓存不再截断（#38206） |

**共识**：MCP 已从"可选协议"变为"基础能力"；当前瓶颈在 **Resources/Prompts 原语补齐** 与**企业级鉴权（OAuth/CIMD）**。

### 2. 🤖 SubAgent / 多 Agent 可靠性（6/8 工具）
| 工具 | 痛点描述 |
|------|---------|
| **Claude Code** | subagent `max_tokens: 8000` 固定上限（#78460）、超额仍计费（#75757） |
| **Gemini CLI** | subagent 达到 MAX_TURNS 误报 GOAL 成功（#22323）、Generalist Agent 挂死（#21409） |
| **Kimi Code** | k2.5 工具调用完全失效 + goal mode 死循环（#2527） |
| **Qwen Code** | SubAgent 篡改主会话模型（#7156，P1）、OpenAI 兼容模型下参数互斥冲突（#7316） |
| **DeepSeek-TUI** | Work Agent 行与单一 Work 队列统一（#2889、#4636） |
| **OpenAI Codex** | v0.145.0 正式将 sub-agent 纳入分页线程历史 |

**共识**：SubAgent 已成 Agent 体验"分水岭"——头部工具将其作为一等公民（Codex/Qwen/DeepSeek），其余工具仍在修补稳定性。

### 3. 🪟 桌面端与跨平台稳定性（5/8 工具）
| 工具 | 典型问题 |
|------|---------|
| **Claude Code** | Windows MSIX 更新失败（#76357）、macOS kernel panic（#79920）、Linux 主题不跟随（#79995） |
| **OpenAI Codex** | Crashpad 4.9G/天 dump（#25921）、taskkill 风暴（#34260） |
| **Gemini CLI** | Wayland 下 Browser Agent 失败（#21983） |
| **Kimi Code** | Windows Numpad 无响应（#2529）、UI 抖动（#2474） |
| **Qwen Code** | VSCode 扩展连接失败（#7056）、Windows PowerShell 兼容 |

**共识**：Windows 是当前"重灾区"，Linux 桌面次之；macOS 主要问题集中在 MCP 派发与 daemon 资源治理。

### 4. 🧠 长上下文与会话管理（5/8 工具）
| 工具 | 进展 |
|------|------|
| **Claude Code** | 1M-context 缓存失效 ECONNRESET（#74544）、177k 误触发 auto-compact（#79665） |
| **Copilot CLI** | CAPI 5MB 序列化上限独立于 token 限制（#4183） |
| **OpenAI Codex** | v0.145.0 分页线程历史（核心新功能） |
| **Qwen Code** | Web Shell 长会话 >500 UI blocks 触发内存回收（#7408） |
| **DeepSeek-TUI** | 长输出滚动锁定的 PTY 测试（#4653） |

### 5. 🔐 鉴权 / 订阅 / 配额透明化（4/8 工具）
- **Claude Code** Max 计划 setup-token 无法读 entitlements（#79360，👍 30）
- **OpenAI Codex** 周限额重置无确定性（#9508，46 评论 / 31 👍）
- **OpenCode** OpenCode Go "已支付但余额不足"群发问题（#37790/#37056/#38195/#38208）
- **Qwen Code** token-plan 鉴权地区缺失（#7252）

### 6. 🛡️ 安全沙箱（4/8 工具）
- **Gemini CLI** a2a-server 零点击 RCE 修复（#28470，已合入 nightly）
- **Claude Code** v2.1.216 sandbox 双重回归（#79606、#79997）
- **OpenAI Codex** Linux bwrap 代理加固（#34641）
- **Qwen Code** Docker 沙箱 cwd 解析

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|--------------|
| **Claude Code** | Anthropic 生态深度集成、MCP、Hookify 插件 | 付费 Max 用户、企业开发者 | 跨平台桌面 + TUI，强权限/审计模型 |
| **OpenAI Codex** | 线程历史、跨工具迁移、HTTP 架构 | 企业 IT、需要审计/合规的团队 | Rust 核心 + `codex-http-client` 收敛、`app-server` 远程通道 |
| **Gemini CLI** | Google AI 整合、Memory、Eval 基建 | 研究型开发者、追求 Gemini 3 能力 | a2a-server + 多 Provider、组件级评估体系 |
| **Copilot CLI** | GitHub 生态、MCP 完整化、BYOK | GitHub 重度用户、自带 Key 团队 | Plan/Build 双模式、聚焦远程 MCP 与 Agent 协作 |
| **Kimi Code** | Moonshot 国内模型、Shell 模式 | 中文开发者、Moonshot 用户 | Textual TUI、单仓库多模型（k2.5/k2.7/k3）兼容挑战大 |
| **OpenCode** | 本地模型 + 商业 OpenCode Go | 本地 LLM 玩家、付费用户 | llama.cpp/Ollama 自动发现、强 Provider 抽象 |
| **Pi** | llama.cpp 原生、可验证发布 | 极客、本地推理研究者 | 小而精、Hugging Face 直连模型管理 |
| **Qwen Code** | Web Shell、SubAgent、跨工具 Skill 共享 | 阿里云生态、容器化部署团队 | ACP 子进程冷启动优化、autofix label-driven 流程 |
| **DeepSeek-TUI** | "单一真相源"原则、constitution 约束 | 关注 Agent 可控性的开发者 | PreToolUse/PostToolUse 统一 hook 层、命令边界分阶段重构 |

**典型分化路径**：
- **"AI 编辑器之争"**：OpenAI Codex `/import` 直接抢 Cursor/Claude Code 用户，Qwen Code 反向开放 Skill 目录共享——**存量用户争夺战已打响**。
- **"本地 vs 云端"**：OpenCode/Pi 押注 llama.cpp/Hugging Face 直连；Claude/Codex/Copilot 强化企业云端鉴权。
- **"单一架构师 vs 多 Provider 抽象"**：DeepSeek-TUI 收敛为单一 Work 队列；OpenCode/Codex 走多 Provider 适配路线。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-07-22 截止）

---

## 一、热门 Skills 排行（Top PRs）

按"社区关注度 × 问题影响力 × 跨 PR 关联度"综合排序：

| # | PR | Skill 名称 | 核心功能 | 状态 | 热度信号 |
|---|----|-----------|---------|------|---------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 评测修复** | 修复 `run_eval.py` 永远报 0% recall 的根因（误装为 skill、未检测触发、Windows 流读取、并行 worker）；使描述优化循环真正生效 | OPEN | 关联 Issue [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) / [#1323](https://github.com/anthropics/skills/pull/1323)，是社区头号技术债 |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit (v1.3.0)** | 交付前的机械文件核验 + 四维推理质量门禁（按损伤严重度排序）；与语言/技术栈/模型无关 | OPEN | 与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提案直接呼应，构成"Quality Gate Pipeline"主线 |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 自动避免 AI 生成文档中的 orphan/w widow/numbering misalignment 等排版缺陷 | OPEN | 2026-03 创建至今持续有人跟进；面向"全文档场景"，通用性极强 |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 五维度质量评分（结构/示例/资源/语义/触发）+ 注入/越权检测 | OPEN | 长期 Open（2025-11 起），呼应 Issue [#492](https://github.com/anthropics/skills/issues/492) 安全诉求，是"元 Skill"基础设施 |
| 5 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 覆盖 ISCC-NBS/Munsell/XKCD/RAL/Ridgway 等命名系统 + OKLCH/OKLAB/CAM16 色空间"何时用哪个"决策表 | OPEN | 7-21 仍在更新，是少有的"垂直领域专家型"Skill |
| 6 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | OpenDocument 格式创建/模板填充/HTML 转换，补齐 ODF 协议栈 | OPEN | 文档格式矩阵中最后一个主流缺口 |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | Testing Trophy 哲学 + 单元/React/E2E/性能/可观测性测试全栈模式 | OPEN | 工程实践类 Skill 的标杆提案 |
| 8 | [#525](https://github.com/anthropics/skills/pull/525) | **pyxel** | 复古像素游戏开发（pyxel-mcp 工作流：写→运行→捕获→检视→迭代） | OPEN | 7-15 仍活跃，代表"游戏/创意"长尾场景 |

> **讨论焦点**：#1298 不是新 Skill，而是"修复让 Skill 创造机制失效的 Bug"——这意味着大量用户上传 Skill 后发现 `improve_description.py` 实质在优化噪声，反映社区已开始规模化的元改进需求。

---

## 二、社区需求趋势（Issues 信号）

按评论 + 👍 综合提取的诉求方向：

### 🔴 高优 / 已成痛点

1. **信任边界与安全（Issue [#492](https://github.com/anthropics/skills/issues/492)，43 评论 / 👍2）**
   - 社区 Skill 混入 `anthropic/` 命名空间造成官方冒充
   - 需要：命名空间隔离 + 数字签名 + 维护者认证机制

2. **企业级共享与协作（Issue [#228](https://github.com/anthropics/skills/issues/228)，14 评论 / 👍7）**
   - 当前需手工下载 `.skill` 文件经 Slack/Teams 分发再手动导入
   - 需要：组织级 Skill 库 / 共享链接 / Settings 一键启用

3. **评测管线失效（Issue [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169)，共 15 评论 / 👍8）**
   - `claude -p` 永远不触发 Skill，recall=0%
   - 修复战线已蔓延到 #1298/#1099/#1050/#1323/#1061

4. **插件内容去重（Issue [#189](https://github.com/anthropics/skills/issues/189)，6 评论 / 👍9 👍率最高）**
   - `document-skills` 与 `example-skills` 打包了相同 Skill，污染上下文窗口
   - 需要明确两个插件的边界（README 与实际不一致）

### 🟡 结构性 / 协议类

5. **Skill 标准化为 MCP（Issue [#16](https://github.com/anthropics/skills/issues/16)，4 评论）**
   - 将每个 Skill 暴露为 MCP tool，便于异构工具链集成

6. **跨平台兼容（Issue [#1061](https://github.com/anthropics/skills/issues/1061)，3 评论 / 👍2）**
   - Windows 下 `PATHEXT`、`cp1252`、`select()` on pipes 三连击
   - 影响所有 `run_loop.py` 用户

7. **Bedrock/云平台兼容（Issue [#29](https://github.com/anthropics/skills/issues/29)，4 评论）**
   - AWS Bedrock 用户无法加载 Skills

### 🟢 新 Skill 提案（增长方向）

8. **agent-governance / 智能体治理（[#412](https://github.com/anthropics/skills/issues/412) 已 CLOSED）** — 策略执行、威胁检测、信任评分、审计轨迹
9. **compact-memory（[#1329](https://github.com/anthropics/skills/issues/1329)，9 评论）** — 长会话符号化压缩，节省 Agent 自占用 context
10. **Reasoning Quality Gate Pipeline（[#1385](https://github.com/anthropics/skills/issues/1385)）** — 预校准 → 对抗审 → 交付验证三段式，与 #1367 联动

> **趋势归纳**：社区诉求从"我要更多 Skill"已转向 **"我要更可信、可治理、可共享、可评测的 Skill 基础设施"**。

---

## 三、高潜力待合并 Skills（近期可能落地）

以下 PR 评论活跃、仍 OPEN、且已通过多轮迭代，最接近合并：

| PR | Skill | 合并概率信号 |
|----|-------|------------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 必合项：阻塞 `run_loop`/`improve_description` 全链路，3 个相关 PR (#1099/#1050/#1323) 都在等此基线 |
| [#1099](https://github.com/anthropics/skills/pull/1099) + [#1050](https://github.com/anthropics/skills/pull/1050) | Windows 兼容 | 与 #1298 同源，PR 体量极小（多为 1 行修复），合并阻力低 |
| [#539](https://github.com/anthropics/skills/pull/539) + [#361](https://github.com/anthropics/skills/pull/361) | YAML 引号校验 | 防 `description: Use when:` 这类静默截断，已两路独立实现 |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 安全截断 | 防 Rust panic，多语言 Skill 作者刚需 |
| [#538](https://github.com/anthropics/skills/pull/538) + [#541](https://github.com/anthropics/skills/pull/541) | PDF/DOCX 文件引用与 ID 冲突修复 | 文档 Skill 生态必修课，作者 Lubrsy706 持续输出 |
| [#509](https://github.com/anthropics/skills/pull/509) | CONTRIBUTING.md | 关闭 [#452](https://github.com/anthropics/skills/issues/452)，社区健康分从 25% 提升，合并阻力极小 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 与 Issue #1385 形成完整提案链，作者持续迭代至 v1.3.0 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 与 #492 安全议题耦合，落地后将解锁"Skill 商店"前提 |

---

## 四、Skills 生态洞察（一句话总结）

> **社区当前的集中诉求是"Skill 的工业化"——当 Skill 数量爆炸后，最缺的不是更多内容，而是评测可信（recall=0%）、信任边界（命名冒充）、组织分发（共享链路）和质量门禁（self-audit）这四项基础设施。**

---

### 📎 附：观察到的异常/关注点

- **所有 20 条热门 PR 评论数均为 `undefined`**：疑似官方仓库已关闭评论计数或数据采集口径不一致，建议关注 GitHub UI 实际数据。
- **同质化修复集中**：skill-creator 评测管线 Bug 至少引发 6 条独立 PR 反复打补丁，反映该组件缺乏维护 owner。
- **Lubrsy706 一个人贡献了 #538/#539/#541 三条 PDF/DOCX 修复**，是当前最活跃的文档格式维护者。
- **CLOSED Issue 中"skill-creator 应该现代化（[#202](https://github.com/anthropics/skills/issues/202)）"与 OPEN 的 #1298 形成完整证据链**：社区已用脚投票——先把工具修好，再谈新 Skill。

---

# Claude Code 社区动态日报
**日期：2026-07-22**

---

## 📌 今日速览

今日 Claude Code 发布 **v2.1.217**，新增提示符中的 emoji 短代码自动补全与 transcript 写入失败告警。社区关注焦点集中在 **2.1.216 sandbox 回归**（root 安装下 `--cap-drop ALL` 与 bwrap 链路连环故障）、**macOS Filesystem MCP 工具静默丢弃**，以及 **Max 计划下 Fable 5 仍被用量额度拦截**（已获 30 👍）。Windows 桌面端更新/性能问题持续高发。

---

## 🚀 版本发布

### v2.1.217 — https://github.com/anthropics/claude-code/releases/tag/v2.1.217

- **Emoji 短代码自动补全**：在提示符输入 `:heart:` 即可插入 ❤️，输入 `:hea` 触发候选。可通过 `emojiCompletionEnabled` 设置关闭。
- **Transcript 写入告警**：磁盘写满导致 transcript 写入失败、session 保存因继承被关闭时，新增明确警告提示，避免数据丢失静默发生。

---

## 🔥 社区热点 Issues

### 1. #79360 — Fable 5 在 Max 计划下被误拦截为用量额度耗尽 — 👍 30
通过 `claude setup-token` 认证的 Max 用户仍被提示"usage credits exhausted"，原因是 inference-only scope 无法读取 entitlements。**点赞数全榜第一**，反映该 bug 影响了一批付费 Max 用户使用最新模型的体验。
👉 https://github.com/anthropics/claude-code/issues/79360

### 2. #45810 — Marketplace 更新按钮始终灰化（15 条评论）🔥
插件市场 UI 的 Update 按钮即便有可用新版本也无法点击，长期被标记为 duplicate 但仍未修复，社区呼声持续 3 个月。
👉 https://github.com/anthropics/claude-code/issues/45810

### 3. #72215 — 全屏模式下滚动条与键盘导航完全失效（Windows）
终端输出超过一屏后，全屏模式下既无滚动条，方向键 / PageUp / PageDown 也失效，早期输出不可访问。
👉 https://github.com/anthropics/claude-code/issues/72215

### 4. #76357 — Windows MSIX 每次更新都失败，必须重启
提示 "Another program is currently using this file"，更新失败后 App 无法启动直至重启。
👉 https://github.com/anthropics/claude-code/issues/76357

### 5. #79992 — macOS filesystem MCP 工具调用被静默丢弃
自 7-21/22 夜间起，filesystem-class MCP 工具在审批通过后从未被派发到本地服务器，跨应用回滚、扩展重装、换连接器身份均无效。
👉 https://github.com/anthropics/claude-code/issues/79992

### 6. #72181 — Desktop App 无法清理"Recent"文件夹列表（👍 10）
项目选择器中 Recent 列表没有删除入口，旧项目堆积，用户强烈要求补全清理能力。
👉 https://github.com/anthropics/claude-code/issues/72181

### 7. #70733 — Windows 11 重装后 Cowork 缺失，rootfs.vhdx 无法下载
Cowork Tab 在干净重装后检测到 rootfs.vhdx 缺失但永远不重新拉取。
👉 https://github.com/anthropics/claude-code/issues/70733

### 8. #79920 — 后台会话 fd 风暴触发 kernel panic
后台 agent 守护进程耗尽系统文件表（ENFILE），触发 launchd SIGBUS，最终导致 macOS 内核 panic——属于严重稳定性事故。
👉 https://github.com/anthropics/claude-code/issues/79920

### 9. #78460 — Subagent 输出 token 上限被固定为 8000
主循环不受限制，但子 agent `max_tokens: 8000`，高 effort 模型仅思考阶段就耗尽预算，从未产出任何内容。
👉 https://github.com/anthropics/claude-code/issues/78460

### 10. #75757 — 月度额度耗尽后 subagent 仍被计费
在已超支的情况下，三个 xhigh 多 agent code-review 仍被计费，且 agent 失败时被错误标记为 review 通过。
👉 https://github.com/anthropics/claude-code/issues/75757

**其他值得关注的近期 issue**：
- #74544：1M-context 会话在缓存失效后 `ECONNRESET`，`/compact` 也以同一错误失败
- #78769：新模型下 Task 工具与 TodoWrite 同时被 tengu 实验隐藏
- #79606 / #79997：2.1.216 sandbox 双重回归（root 与非 root 安装都被击中）
- #79995：Desktop Linux 不监听系统 portal 色彩信号，主题不随系统切换
- #79665：1M-context 会话在约 177k tokens 就触发 auto-compact 警告（按 200k 默认窗口标定）
- #80002：macOS Desktop 从不向 first-party Filesystem 扩展派发 `tools/call`
- #79999：Windows Desktop 多会话下渲染进程 CPU/内存失控

---

## 🛠️ 重要 PR 进展

### 1. #79620 — 文本转语音（TTS）朗读 Hook ✨
新增生产级 TTS 钩子：Linux 用 Piper、macOS 用 `say`、Windows 用 PowerShell，支持 Markdown 提取与代码块跳过，面向无障碍与免提场景。
👉 https://github.com/anthropics/claude-code/pull/79620

### 2. #79898 — Claude Apps Gateway on AWS 参考部署（已合入）✅
新增 AWS + Bedrock 部署资产，与 `examples/gateway/gcp` 对齐，文档即将发布。
👉 https://github.com/anthropics/claude-code/pull/79898

### 3. #79873 — Hookify `event: prompt` 规则永不触发
实际 payload key 为 `prompt`，但 `_extract_field` 只识别 `user_prompt`，导致 UserPromptSubmit 规则全部失效。
👉 https://github.com/anthropics/claude-code/pull/79873

### 4. #79889 — Hook 入口支持无 `CLAUDE_PLUGIN_ROOT` 运行
当环境变量缺失时 guard 直接跳过 `sys.path` 设置，导致后续 import 失败。
👉 https://github.com/anthropics/claude-code/pull/79889

### 5. #79647 — Hookify 导入不再依赖插件目录名
修复 #69665：当插件目录不叫 `hookify` 时 `from hookify.core...` 解析失败。
👉 https://github.com/anthropics/claude-code/pull/79647

### 6. #79645 — Hookify 文件以 UTF-8 读取
Windows cp1252 解码 UTF-8 规则文件（emoji、箭头、破折号）失败，根因修复。
👉 https://github.com/anthropics/claude-code/pull/79645

### 7. #79644 — `${CLAUDE_PLUGIN_ROOT}` 加引号
macOS 路径含空格时未加引号导致 shell word-split、hook 静默失败。
👉 https://github.com/anthropics/claude-code/pull/79644

### 8. #79642 — 修正 marketplace 名为 `claude-code-plugins`
文档与 `marketplace.json` 不一致，导致 `/plugin install plugin-dev@...` 失败。
👉 https://github.com/anthropics/claude-code/pull/79642

### 9. #79640 — 用 `disable-model-invocation` 隐藏 ralph-wiggum 命令
`hide-from-slash-command-tool` 是无效 key，改用文档化字段。
👉 https://github.com/anthropics/claude-code/pull/79640

### 10. #78532 — GCP Gateway Terraform：可选 internal ALB + PG16 修复
Cloud SQL PG16 默认 ENTERPRISE_PLUS 拒绝共享核 tier；新增可选 ALB 模块。
👉 https://github.com/anthropics/claude-code/pull/78532

**其他合入**：#79643（commit-push-pr 文档与行为对齐）、#79636（Hookify 示例添加 `hookify.` 前缀）、#79635（pr-review-toolkit 文档指向 in-repo agents）。

---

## 📈 功能需求趋势

| 方向 | 代表 issue | 社区热度 |
|------|-----------|----------|
| **桌面端体验（Windows / macOS / Linux）** | #76357, #70733, #79999, #79995 | 🔥🔥🔥 |
| **新模型 Fable 5 / 1M-context 正确性** | #79360, #74544, #79665, #78460 | 🔥🔥🔥 |
| **MCP 工具链可靠性** | #79992, #80002 | 🔥🔥 |
| **后台 Agent / Daemon 稳定性** | #75037, #79920, #79921 | 🔥🔥 |
| **Sandbox 与权限沙箱** | #79606, #79997 | 🔥🔥 |
| **可访问性 / 体验微调** | #79620（TTS）, #79994（隐藏用量指示器）, #72181（清理 Recent） | 🔥 |
| **Hookify 插件健壮性** | #79873, #79645, #79644, #79647, #79889 | 🔥 |
| **认证 / Gateway 体验** | #80000, #79975, #79360 | 🔥 |

---

## 🧩 开发者关注点（痛点 / 高频诉求）

1. **2.1.216 sandbox 回归是当前最紧迫问题**
   `#79606` 与 `#79997` 同时影响 root 与非 root 安装，所有 Bash 调用在 bwrap 阶段即失败，社区呼吁尽快回滚或热修。

2. **付费用户的模型可用性矛盾**
   Max 计划用户使用 `setup-token` 后无法读 entitlements，被错误拦截使用 Fable 5（#79360），叠加 subagent 超额仍计费（#75757），信任成本上升。

3. **桌面端跨平台一致性差**
   Windows 更新失败需重启（#76357）、macOS MCP 静默丢消息（#79992）、Linux 主题不跟随系统（#79995）——三方桌面体验均被报告存在严重缺陷。

4. **1M-context 模型尚未真正端到端可用**
   缓存失效后 `ECONNRESET`、`/compact` 也失败、auto-compact 阈值按 200k 标定（#74544、#79665），1M 窗口在长会话下不可靠。

5. **Hookify 插件"看不见的失败"**
   多项 PR（#79644、#79645、#79647、#79873、#79889）说明：路径空格、UTF-8 解码、目录名、payload key、`CLAUDE_PLUGIN_ROOT` 缺失——任意一项都会让 hook 静默失效，调试体验差。

6. **后台 agent 资源治理缺位**
   fd 泄漏（#79920）、worker 崩溃循环（#75037）、跨 session 冻结（#79921）说明 background-session daemon 缺乏资源上限与隔离，长跑工作流风险高。

7. **微体验诉求强烈**
   "隐藏每周用量指示器"（#79994）、"清理 Recent 文件夹"（#72181）、"会话可在 App Code 中恢复"（#79975）等小需求点赞不低，反映用户希望拥有更"克制"的可定制 UI。

---

*日报生成时间：2026-07-22 · 数据来源：github.com/anthropics/claude-code*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-22**

---

## 📌 今日速览

今日 OpenAI Codex 仓库迎来里程碑版本 **v0.145.0**，核心亮点是实验性的**分页线程历史**功能，并配套支持高效恢复、搜索、子代理与记忆机制；同时 `/import` 命令扩展，可一键迁移 Cursor 与 Claude Code 的配置、会话与插件。当日共合并 17 个 PR、活跃 30+ Issues，社区关注重点集中在 **HTTP 客户端架构重构**、**Windows 桌面稳定性** 与 **Linux 沙箱兼容性** 三大方向。

---

## 🚀 版本发布

### [v0.145.0](https://github.com/openai/codex/releases/tag/rust-v0.145.0) — 主版本

**新增功能**
- **实验性分页线程历史**：支持高效 resume、搜索、持久化命名、子代理（sub-agent）调用与记忆（memories）系统（[#33364](https://github.com/openai/codex/issues/33364)、[#33907](https://github.com/openai/codex/issues/33907)、[#34085](https://github.com/openai/codex/issues/34085)、[#34229](https://github.com/openai/codex/issues/34229)、[#34386](https://github.com/openai/codex/issues/34386)）
- **`/import` 命令扩展**：可迁移 Cursor / Claude Code 的 settings、MCP servers、plugins、sessions、commands 及项目配置

### Alpha 系列
- [rust-v0.145.0-alpha.30](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.30)
- [rust-v0.145.0-alpha.29](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.29)
- [rust-v0.145.0-alpha.28](https://github.com/openai/codex/releases/tag/rust-v0.145.0-alpha.28)

---

## 🔥 社区热点 Issues

1. **[#9508 周限额重置缺乏确定性](https://github.com/openai/codex/issues/9508)** — 46 评论 / 31 👍  
   用户对每周配额重置时间点不一致表示强烈不满，呼吁可预测的限额机制。这是本周最受关注的体验性问题。

2. **[#28058 MultiAgentV2 加密破坏审计追溯](https://github.com/openai/codex/issues/28058)** — 26 评论 / 99 👍  
   6 月合并的 `Encrypt multi-agent v2 message payloads` 改动后，任务审计信息不再可读。**高达 99 个点赞**说明这是企业用户的高优先级诉求。

3. **[#14919 Linux bwrap 沙箱 RTM_NEWADDR 失败（已关闭）](https://github.com/openai/codex/issues/14919)** — 44 评论 / 48 👍  
   自 0.115.0 起在 Ubuntu 上 bubblewrap 沙箱崩溃导致子代理无法执行命令。已关闭但仍是历史痛点，反映 Linux 兼容性反复出现的问题。

4. **[#32149 Windows 安装在 UAC 提示前即失败](https://github.com/openai/codex/issues/32149)** — 24 评论  
   Windows 桌面端安装流程两条路径均不可用，影响新用户入门体验。

5. **[#25921 Codex Desktop Crashpad 无限制生成 dump 文件](https://github.com/openai/codex/issues/25921)** — 15 评论  
   单日产生 4.9G / 5.4 万个 `.dmp` 文件，严重占用磁盘空间——典型"被忽视的副作用"问题。

6. **[#34260 Windows taskkill.exe / conhost.exe 清理风暴](https://github.com/openai/codex/issues/34260)** — 14 评论 / 8 👍  
   桌面端进程清理循环耗尽 WMI 配额，导致系统失能，是 Windows 平台另一关键稳定性问题。

7. **[#10428 "Open In" 菜单支持自定义编辑器（已关闭）](https://github.com/openai/codex/issues/10428)** — 19 评论 / 33 👍  
   高需求功能请求，目前合并或回应。

8. **[#26951 / #27597 VS Code Remote-SSH 环境下扩展卡加载](https://github.com/openai/codex/issues/26951)** — 各 16/14 评论  
   远程开发场景下 IDE 扩展无法工作，但 CLI 正常——说明 app-server 与远程通道仍存缺陷。

9. **[#16423 对任意周限额重置的不满（已关闭）](https://github.com/openai/codex/issues/16423)** — 11 评论 / 34 👍  
   与 #9508 形成"双胞胎"issue，反映社区对**配额机制透明度**的集体诉求。

10. **[#28078 Xcode 27 Codex 仅 Pro 邮箱 OTP 登录失败](https://github.com/openai/codex/issues/28078)** — 12 评论  
    ChatGPT Pro 账户在 Xcode 27 beta 无法完成 sign-in，而 ChatGPT Go 账户正常，暴露认证链路兼容性问题。

---

## 🛠️ 重要 PR 进展

1. **[#34645 始终为响应项分配 ID](https://github.com/openai/codex/pull/34645)**  
   涵盖流式、分叉历史、压缩结果及非 OpenAI 提供商，统一响应项 ID 稳定性——为分页线程历史（v0.145.0）的基础设施。

2. **[#34621 跨 rollout 谱系加载分页模型上下文](https://github.com/openai/codex/pull/34621)**  
   配合 v0.145.0 新功能，使历史回溯能跨多代 rollout 解析。

3. **[#34630 新增策略感知的 HTTP 客户端构建器](https://github.com/openai/codex/pull/34630)**  
   `HttpClientBuilder` 统一管理默认头、重定向、Cloudflare cookie 与诊断能力，**架构级重构**。

4. **[#34651 / #34643 / #34631 HTTP 客户端集中化迁移](https://github.com/openai/codex/pull/34651)**  
   三连发 PR 分别将 core test、login、agent identity 迁入 `codex-http-client`，移除散落的 `reqwest` 直接使用。

5. **[#34650 / #34649 认证路由接受解析后的代理策略](https://github.com/openai/codex/pull/34650)**  
   AuthManager 现在显式接收 `AuthRouteConfig`，避免 fallback 到传输层默认代理行为——增强企业网络环境可靠性。

6. **[#34641 强化 Linux 沙箱代理设置](https://github.com/openai/codex/pull/34641)**  
   让 bubblewrap 受限沙箱可访问生成的代理 socket 目录，WS/WSS_PROXY 走桥接——直接回应近期 bwrap 相关 issue。

7. **[#34624 Windows 进程树用 Job Object 终止](https://github.com/openai/codex/pull/34624)**  
   Windows 端 pipe / ConPTY / sandbox 进程统一挂入 Job Object，避免 [#34260](https://github.com/openai/codex/issues/34260) 类残留进程问题。

8. **[#34629 加固 Windows 提权沙箱启动](https://github.com/openai/codex/pull/34629)**  
   单一 DACL 快照检查沙箱组与 root capability SID 写权限并刷新 ACL，提升 Windows 沙箱启动鲁棒性。

9. **[#34626 按模型上下文窗口缩放技能元数据预算](https://github.com/openai/codex/pull/34626)**  
   由固定字符上限改为按 2% 模型上下文窗口（最大 4000 tokens）计算，更合理利用不同模型的容量。

10. **[#34636 TUI 启动 turn 失败时保持开启](https://github.com/openai/codex/pull/34636)**  
    `turn/start` 拒绝时不再退出 TUI，而是作为错误显示并恢复输入队列——改善 CLI 用户体验。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区热度 |
|---|---|---|
| **线程历史与上下文管理** | [#3968 后台终端](https://github.com/openai/codex/issues/3968)、v0.145.0 分页历史 | 🔥🔥🔥 |
| **跨工具生态迁移** | `/import` 支持 Cursor/Claude Code | 🔥🔥🔥 |
| **IDE 集成** | VS Code Remote-SSH [#26951](https://github.com/openai/codex/issues/26951)、Xcode 27 [#28078](https://github.com/openai/codex/issues/28078) | 🔥🔥🔥 |
| **配额与计费透明化** | [#9508](https://github.com/openai/codex/issues/9508)、[#16423](https://github.com/openai/codex/issues/16423) | 🔥🔥🔥 |
| **TUI/CLI 体验优化** | [#26311 输入框钉底](https://github.com/openai/codex/issues/26311)、[#31239 Ctrl+C 误回滚](https://github.com/openai/codex/issues/31239) | 🔥🔥 |
| **审计与可观测性** | [#28058 加密破坏审计](https://github.com/openai/codex/issues/28058) | 🔥🔥 |
| **会话/任务恢复** | [#27104 窗口恢复](https://github.com/openai/codex/issues/27104)、[#33579 已固定任务隐藏](https://github.com/openai/codex/issues/33579) | 🔥🔥 |

---

## 💡 开发者关注点

1. **Windows 平台稳定性已成最大痛点**  
   Crashpad 无限制生成（[#25921](https://github.com/openai/codex/issues/25921)）、进程清理风暴（[#34260](https://github.com/openai/codex/issues/34260)）、UI 冻结（[#34327](https://github.com/openai/codex/issues/34327)）、TUI 导航键（[#34625](https://github.com/openai/codex/pull/34625)）——PR 端已密集出手（#34624、#34625、#34629），预计 0.146 将显著改善。

2. **Linux 沙箱在受限环境下的可用性反复被关注**  
   AppArmor / userns 限制（[#15057](https://github.com/openai/codex/issues/15057)）、bwrap 失败（[#14919](https://github.com/openai/codex/issues/14919)、[#12572](https://github.com/openai/codex/issues/12572)）。PR [#34641](https://github.com/openai/codex/pull/34641) 直接针对代理桥接做了加固。

3. **HTTP 客户端架构正在集中化**  
   通过新增 `HttpClientBuilder` 与 `codex-http-client` crate，将原本散落在 login / agent identity / test support 等各处的 `reqwest` 直用统一收敛。这一系列 PR（#34630 → #34631 → #34643 → #34651）暗示团队正在为更复杂的网络策略（企业代理、Cloudflare 兼容）做准备。

4. **企业级审计诉求强烈**  
   [#28058](https://github.com/openai/codex/issues/28058) 获得 99 个👍但仍未关闭——加密与审计可读性的平衡是企业用户核心需求。

5. **迁移友好性是新版本隐藏价值**  
   `/import` 支持 Cursor/Claude Code 全量迁移，结合分页线程历史 + 子代理记忆，是 OpenAI 在 AI 编辑器赛道争夺存量用户的明确信号。

---

*数据来源：github.com/openai/codex（截至 2026-07-22）*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报 · 2026-07-22

## 📌 今日速览

今日发布 nightly 版本 **v0.52.0-nightly.20260722**，重点修复 `a2a-server` 中可能造成零点击 **RCE（远程代码执行）** 的高危安全问题（PR #28470）。社区层面，**Sub-agent 稳定性** 与 **Memory 系统** 成为过去 24 小时讨论最密集的主题，多个 P1 Bug 持续浮现；同时，自动化 PR Generator 流水线基础设施进入大规模合入阶段。

---

## 🚀 版本发布

### v0.52.0-nightly.20260722.gc776c665b

- 🔒 **安全修复**（PR #28470）：重写 `a2a-server` 启动序列与任务隔离机制，防止不受信任工作区下的零点击 RCE 与环境污染。
- [查看完整变更](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260721.gacae7124b...v0.52.0-nightly.20260722.gc776c665b)

---

## 🔥 社区热点 Issues

| # | Issue | 优先级 | 关注点 | 评论数 |
|---|-------|--------|--------|--------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 达到 MAX_TURNS 后错误上报为 GOAL 成功 | p1 bug | 12 | 状态判断失误会掩盖中断行为，影响回溯与调试 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 频繁挂死 | p1 bug | 8 | 简单任务挂起 1 小时，已知最严重的稳定性问题之一，👍8 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 基于零依赖 OS 沙箱与执行后意图路由 | p2 enhancement | 8 | 充分利用 Gemini 3 的 Bash 直觉，提升安全性与体验 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 组件级评估体系（EPIC） | p1 | 7 | 76 项 behavioral eval 覆盖 6 款模型，质量基建核心 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | AST-aware 文件读取/搜索/映射评估 | p2 | 7 | 减少读取轮次与 token 噪声，长期效率优化 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 很少主动调用 skills 和 sub-agents | p2 bug | 6 | 模型自主调用能力不足，影响扩展生态落地 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | Auto Memory 无限重试低信号 session | p2 bug | 5 | 资源浪费与干扰，Memory 系统重点问题 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 执行完成后卡在 "Waiting input" | p1 bug | 4 | 简单 CLI 都会触发，用户体验崩坏，👍3 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | Browser Agent session 接管与锁恢复 | p3 feature | 4 | 解决持久模式下的 fail-fast 痛点 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | Browser subagent 在 Wayland 下失败 | p1 bug | 4 | 跨桌面环境兼容性，Linux 用户广泛受影响 |

**总体观察**：超过 60% 的高热度 Issue 集中在 **Agent 行为正确性** 与 **子代理/浏览器代理的稳定性**。

---

## 🛠️ 重要 PR 进展

| # | PR | 类型 | 亮点 |
|---|----|------|------|
| [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) | a2a-server 工作区信任与任务隔离 | 🔒 安全 | **今日已合入 nightly**，防止零点击 RCE |
| [#28403](https://github.com/google-gemini/gemini-cli/pull/28403) | 阻止 `$VAR`/`${VAR}` 变量扩展绕过 (GHSA-wpqr-6v78-jr5g) | 🔒 安全 p1 | 修补旧补丁漏洞，CI workflow 加固 |
| [#28472](https://github.com/google-gemini/gemini-cli/pull/28472) | 顺序校验缓存凭证并恢复 `GOOGLE_APPLICATION_CREDENTIALS` 回退 | bug 修复 | 解决 GCA Agent Mode `code 41` 鉴权回归 |
| [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) | 模型降级时轮换 session ID | bug 修复 | 解决 Flash 模型状态化 API 阻断重试 |
| [#28474](https://github.com/google-gemini/gemini-cli/pull/28474) | 工具调用遥测增加 `skill_name` 维度 | p3 企业 | 增强可观测性，便于分析技能使用情况 |
| [#28397](https://github.com/google-gemini/gemini-cli/pull/28397) | 移除 shell 工具关键路径上的同步 I/O | p2 perf | 解决 Ink 终端卡顿 |
| [#28394](https://github.com/google-gemini/gemini-cli/pull/28394) | 后台进程退出时清理临时目录 | bug 修复 | 修复资源泄露 |
| [#28389](https://github.com/google-gemini/gemini-cli/pull/28389) | 为事件驱动 Agent 状态转换增加真实时间预算 | p1 agent | 防止 agent 无限循环 |
| [#28305](https://github.com/google-gemini/gemini-cli/pull/28305) | Evals：工具调用格式化与失败摘要 | enhancement | 大幅提升 eval 失败排查效率 |
| [#28433 / #28432 / #28435 / #28431](https://github.com/google-gemini/gemini-cli/pull/28433) | **PR Generator Pipeline** 全栈基础设施（编排/数据库/核心/部署） | feature XL | Issue-to-PR 自动化生成系统成型 |

---

## 📈 功能需求趋势

从过去 24 小时的活跃 Issue 提炼，社区最强烈的诉求集中在以下方向：

1. **🛡️ 安全与沙箱** — RCE 防御、变量扩展绕过、OS 级沙箱与意图路由，是当前最高优先级方向。
2. **🧠 Agent 行为可靠性** — Sub-agent 挂死、退出原因错误、skills/sub-agents 主动调用率低，反映 agent loop 的鲁棒性远未成熟。
3. **🗂️ Memory 系统质量** — 5 个相关 Issue 集中爆发，涉及无效 patch 隔离、确定性脱敏、低信号重试等。
4. **🌐 浏览器代理稳定性** — Wayland 兼容、settings.json 优先级、session 接管成三大痛点。
5. **⚙️ Eval 基础设施** — 从 behavioral eval 走向组件级评估，配套覆盖率报告（PR #28169）。
6. **🧩 AST 感知工具链** — 探索符号级读取/搜索对 token 与轮次的优化。
7. **🖥️ 终端性能** — resize 闪烁、shell 工具同步 I/O 导致的 Ink 卡顿。

---

## 💬 开发者关注点

综合高频反馈，开发者当前的核心痛点包括：

- **Agent "假成功" 现象**：`Termination Reason: GOAL` 掩盖了 MAX_TURNS 中断，调试与生产监控均受影响。
- **子代理被静默忽略**：模型倾向于自行实现而不调用配置好的 skills/sub-agents，扩展能力被严重低估。
- **Shell 工具悬挂**：命令已完成却仍卡在 "Awaiting user input"，无超时保护。
- **权限回退**：v0.33.0 之后 subagents 即使在配置中禁用也会被调用（#22093），引发信任问题。
- **Memory 系统泄露风险**：自动 Memory 上传转录内容至模型后才脱敏，存在原始秘密泄露窗口（#26525）。
- **Linux 桌面兼容性**：Wayland 下的 Browser Agent 失败是 Linux 用户最常见报告。
- **VS Code 集成**：激活 disposable 跟踪 bug 导致扩展注册丢失（PR #28386），IDE 用户频繁踩坑。

> **建议**：升级到 v0.52.0-nightly.20260722 以获得 a2a-server 安全修复；关注近期 Memory 与 Sub-agent 稳定性 PR 的合并节奏。

---

*日报基于 github.com/google-gemini/gemini-cli 过去 24 小时数据自动生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-22**

---

## 📌 今日速览

今日 Copilot CLI 发布 **v1.0.74-0** 预发布版本，重点新增了 Plan 模式下独立选择模型的能力（`/model plan`），延续了团队在多模型工作流上的迭代。社区方面，**MCP 生态相关讨论依然是最热主线**——OAuth 远程服务器、CIMD 注册、资源/订阅原语、注册表策略等话题持续被推进；同时，多个 **Plan 模式回归** 与 **僵尸进程/内存泄漏** 类底层 Bug 被密集报告，显示出 1.0.7x 版本在稳定性方面仍存在改进空间。

---

## 🚀 版本发布

### v1.0.74-0（预发布）

| 类型 | 内容 |
|------|------|
| **Added** | 新增 `/model plan`（或 `/model --plan`）命令，可在 Plan 模式下独立指定模型：传入模型 ID、`off` 清除选择，或留空打开选择器；离开 Plan 模式时自动恢复为会话模型。 |
| **Improved** | Resume 搜索现在在会话标题存在空白差异时也能匹配结果。 |

👉 [查看 Release](https://github.com/github/copilot-cli/releases)

> 这是一次小型但实用的更新：Plan 模式与主会话的模型解耦，是高级用户对成本/质量做精细化管理的关键能力。

---

## 🔥 社区热点 Issues（Top 10）

以下按"评论活跃度 × 社区认同（👍）× 问题严重度"综合排序：

### 1. [#1305 Support CIMD for Remote OAuth MCP Servers](https://github.com/github/copilot-cli/issues/1305)
**标签：** `authentication` `mcp` · 👍 26 · 💬 4
继 DCR 之后，社区继续推动 OAuth MCP 服务器支持 **CIMD（Client ID Metadata Document）**，进一步降低远程 MCP 服务的接入门槛。**这是当前 MCP 认证方向最受欢迎的需求**，👍 远超其他 Issue。

### 2. [#4012 Bug with BYOK: reasoning effort not supported for model "glm-5.2:cloud"](https://github.com/github/copilot-cli/issues/4012)
**标签：** `models` `configuration` · 👍 16 · 💬 2
BYOK（自带 Key）用户在调用 `glm-5.2:cloud` 等第三方模型时，`--reasoning-effort max` 参数报错。**BYOK 体验正成为越来越多开发者的核心场景**，模型适配不全直接影响可用性。

### 3. [#1518 Support MCP resources and prompts](https://github.com/github/copilot-cli/issues/1518)
**标签：** `mcp` · 👍 14 · 💬 2
当前 Copilot 仅支持 MCP **tools**，社区长期呼吁补齐 **resources / prompts** 两大原语，是 MCP 完整能力建设的"必选项"。

### 4. [#2193 Default model configuration for /fleet subagents](https://github.com/github/copilot-cli/issues/2193)
**标签：** `agents` `models` · 👍 14 · 💬 3
`/fleet` 派生的子代理目前每次都要在 prompt 中显式声明所用模型，开发者希望在全局/项目级别配置默认模型。**子代理工作流的可用性痛点**。

### 5. [#1803 Support MCP resources/read primitive](https://github.com/github/copilot-cli/issues/1803)
**标签：** `mcp` · 👍 8 · 💬 1
聚焦 `resources/list` 与 `resources/read` 的最小可用实现，是 #1518 的子集，但因其"可分阶段交付"而受到关注。

### 6. [#4183 Auto-compaction does not prevent CAPI 5 MB failure from accumulated normal tool history](https://github.com/github/copilot-cli/issues/4183)
**标签：** `context-memory` `models` · 👍 5 · 💬 2
长时间、工具密集的会话即使在 token 上限内，仍可能因序列化后的 CAPI Responses 请求体超过独立的 **5 MB 上限**而彻底失败，自动压缩无法挽救。**该 Bug 影响所有重度 CLI 用户**。

### 7. [#4188 Regression on plan-mode](https://github.com/github/copilot-cli/issues/4188)
**标签：** `permissions` `tools` · 👍 2 · 💬 3
最新版本 Plan 模式开始屏蔽 shell 命令（包括 `gh` CLI），破坏了许多原有的 plan 增强流程。**典型回归 Bug**，与今日新发布的 `/model plan` 功能形成直接呼应。

### 8. [#4163 copilot CLI 1.0.71 does not reap child processes — zombies accumulate](https://github.com/github/copilot-cli/issues/4163)
**标签：** `platform-linux` `tools` · 👍 0 · 💬 2
Linux 上每会话每分钟泄漏约 2 个僵尸子进程，长时间运行的 CLI 会留下大量 `state=Z` 进程。**底层进程管理问题**，对系统整洁度与运维体验有直接影响。

### 9. [#3976 native tgrep indexer OOM-kills the host on large monorepos](https://github.com/github/copilot-cli/issues/3976)
**标签：** `tools` · 👍 0 · 💬 1
实验性 `copilot_cli_tgrep`（原生 Rust trigram 索引器）在大型 monorepo 启动时**直接 OOM 杀掉主机**——没有任何内存上限或沙箱保护。

### 10. [#2282 [CLOSED] Not Able to connect to MCP servers](https://github.com/github/copilot-cli/issues/2282)
**标签：** `mcp` · 💬 11 · ✅ 已关闭
历史最热 MCP 连接问题，本次已关闭。说明近期 Windows + WinGet 安装路径下 `github-mcp-server` 连接失败问题已得到修复或收敛。

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时仅 1 条 PR 更新，且 **[#3163](https://github.com/github/copilot-cli/pull/3163)** 命名疑似垃圾 PR（"ViewSonic monitor"）并无可审阅的代码改动，**今日无实质性 PR 合并进展**。

建议关注仍在 Open 状态、未在数据中体现但与今日 Issue 直接相关的方向：
- `/model plan` 实现细节（很可能很快会出现对应 PR）
- Plan 模式回归（#4188）的修复 PR
- CAPI 5 MB 限制的 bypass 或压缩策略（#4183）

---

## 📈 功能需求趋势

将今日 Issues 按主题聚合，可以看到清晰的社区诉求图谱：

| 趋势方向 | 关键 Issue | 关注度 |
|----------|-----------|--------|
| **🧩 MCP 生态完善** | #1305、#1518、#1803、#3073、#3125、#4205 | ⭐⭐⭐⭐⭐（最热） |
| **🔐 OAuth/远程 MCP 接入** | #1305、#4203、#4205 | ⭐⭐⭐⭐⭐ |
| **🤖 自定义 Agent & 子代理** | #2193、#4208、#4209、#4207 | ⭐⭐⭐⭐ |
| **🔌 BYOK 多模型支持** | #4012、#4196 | ⭐⭐⭐⭐ |
| **⚙️ Plan 模式细化** | #4188、#4190 + v1.0.74-0 | ⭐⭐⭐⭐ |
| **📊 用量与计费可视化** | #4207、#4005 | ⭐⭐⭐ |
| **🖥️ 终端/TUI 体验** | #4212、#4213、#4191 | ⭐⭐⭐ |
| **🧠 上下文与压缩** | #4183 | ⭐⭐⭐ |
| **⚡ 性能与稳定性** | #4163、#3976、#4202、#4206 | ⭐⭐⭐ |

**一句话总结**：MCP（尤其是 OAuth 与资源/订阅原语）是社区的"一号工程"，Agent 与 Plan 模式是"二号工程"，BYOK 是"三号工程"。

---

## 💬 开发者关注点

综合今日 Issue，可以归纳出开发者最集中的几个痛点：

1. **MCP 仍"半成品"** —— 三件套只通了 Tools，Resources/Promises/Subscriptions 全部在排队；远程 OAuth 的 CIMD、refresh_token 静默刷新、注册表策略等"企业级"能力缺口明显。

2. **Plan 模式"好用但脆弱"** —— `/model plan` 刚发布，紧接着就出现 #4188 的回归，说明新功能与原有权限/工具体系的整合尚未完全打磨。

3. **BYOK 体验参差** —— `--reasoning-effort`、流式 `reasoning_content`、模型兼容性矩阵未覆盖，导致第三方模型可用性受限，#4012、#4196 均反映此痛点。

4. **稳定性与资源治理** —— 僵尸进程（#4163）、tgrep OOM（#3976）、view 工具误报路径不存在（#4202）、环境页脚永久 Loading（#4206），表明 1.0.7x 系列在长会话和大仓库场景下需要更严格的回归测试。

5. **Agent 多层级管理诉求** —— `/fleet` 子代理默认模型、sub-agent 信用明细、prompt 内显式链式调用 Agent 等请求，说明"多 Agent 协作"正从实验走向日常工作流。

6. **终端兼容性细节** —— tmux/screen/VS Code-WSL/Remote-SSH 等真实开发环境下的渲染、剪贴板、按键事件问题持续出现，说明 TUI 在跨平台适配上仍有空间。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli) · 报告生成时间：2026-07-22*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-22**
**数据范围：MoonshotAI/kimi-cli 过去 24 小时动态**

---

## 📌 今日速览

过去 24 小时内社区活跃度集中在 **Bug 报告** 而非新功能，5 条更新 Issue 中有 4 条为新提交的缺陷反馈，涵盖 **模型工具调用失效、shell 模式异常、MCP 协议兼容性** 等核心链路问题；唯一推进的 PR #2530 修复了后台子进程持有管道导致 shell 阻塞的顽固问题。整体看，**k2.5 模型的 tool calling 与 goal mode 行为异常** 成为当前最紧迫的社区痛点。

---

## 🚀 版本发布

**无新版本发布。** 社区反馈的 Bug 集中出现在 v0.28.1 与 v1.49.0 等近期版本上，团队尚未发布修复版本，建议持续关注 Release 页面。

---

## 🔥 社区热点 Issues

> 说明：过去 24 小时仅 5 条 Issue 处于活跃状态，以下为全部条目。

### 1. [#2527](https://github.com/MoonshotAI/kimi-cli/issues/2527) ⭐ k2.5 模型 tool calling 完全失效 + goal mode 无限循环
- **作者**: lesteryan | **状态**: OPEN
- **重要性**: 🔴 **最高优先级** —— 涉及核心 Agent 能力（工具调用）和 goal mode（任务规划）的完全失效，属"必现"严重故障。
- **关键细节**: 模型尝试所有命名格式（`functions_Bash`、`functions_Bash_0`、`<functions_Bash_0>`、JSON）均返回 "Tool not found"；goal mode 在该模型下陷入无限循环无法退出。
- **社区反应**: 0 评论 / 0 👍（新提交），但属于阻断性问题，预计短期内将引发大量关注。

### 2. [#2531](https://github.com/MoonshotAI/kimi-cli/issues/2531) ⭐ MCP tool 名称/Schema 被 Moonshot API 拒绝（HTTP 400）
- **作者**: sbdsam | **状态**: OPEN
- **重要性**: 🟠 **高** —— MCP（Model Context Protocol）是 Kimi CLI 拓展能力的关键路径，此问题直接阻断第三方工具接入。
- **关键细节**: 报错 `tools.function.parameters is not a valid moonshot flavored json schema`，根因疑似 `anyOf` 用法不规范；用户建议在客户端侧做 Schema 清洗。
- **环境**: kimi-cli 1.49.0 · macOS arm64 · Model K3。
- **社区反应**: 0 评论 / 0 👍（今日新建）。

### 3. [#2474](https://github.com/MoonshotAI/kimi-cli/issues/2474) UI 抖动 / 反复重渲染整个对话
- **作者**: yudichimiantiao | **状态**: OPEN
- **重要性**: 🟡 **中** —— 体验类 Bug，影响日常使用舒适度与可读性。
- **关键细节**: Linux 5.10 + K2.7 模型 + v0.19.2 下，CLI 界面"莫名其妙重新从头渲染整个对话"。
- **社区反应**: 2 👍 / 1 评论，是当日获赞最高的 Issue，表明有一定复现率。

### 4. [#2529](https://github.com/MoonshotAI/kimi-cli/issues/2529) 键盘右侧数字键点击后输入框无响应
- **作者**: woai3c | **状态**: OPEN
- **重要性**: 🟡 **中** —— 典型输入事件未监听问题，疑似 Textual/底层 TUI 框架对小键盘事件处理遗漏。
- **关键细节**: Windows 10 + v0.28.1 + kimi3 模型下复现；数字小键盘（Numpad）按键无响应。
- **社区反应**: 0 评论 / 0 👍（今日新建）。

### 5. [#2528](https://github.com/MoonshotAI/kimi-cli/issues/2528) shell 模式输出过长
- **作者**: wenli7363 | **状态**: OPEN
- **重要性**: 🟡 **中** —— 影响 shell 模式（`!` 前缀）的可用性，可能涉及输出截断/分页策略。
- **关键细节**: Windows 11 + v0.28.1 + k3 模型，输入 `!` 进入 shell 模式后输出异常过长。
- **社区反应**: 0 评论 / 0 👍（今日新建）。

---

## 🛠️ 重要 PR 进展

> 说明：过去 24 小时仅 1 条 PR 处于活跃状态。

### [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) fix(shell): 解决 detached child 持有管道时前台 shell 阻塞至超时
- **作者**: ayaangazali | **状态**: OPEN
- **修复对象**: Issue [#2468](https://github.com/MoonshotAI/kimi-cli/issues/2468)
- **核心改动**: 在 `_run_shell_command` 路径中，原先需等到 stdout/stderr EOF 才检查退出码（`asyncio.wait_for(gather(...), timeout)`）；当命令形如 `some_daemon & echo done` 时，detached 子进程持有管道导致主进程阻塞至超时。PR 调整了等待/检查顺序，避免等待被后台进程劫持的管道。
- **意义**: 这是 shell 模式稳定性与正确性层面的关键修复，对 #2528 类"输出过长"问题可能存在间接缓解作用。

---

## 📈 功能需求趋势

从过去 24 小时的 Issues 提取，社区关注的功能方向按热度排序：

| 排名 | 方向 | 代表 Issue | 关注度 |
|------|------|-----------|--------|
| 1 | **模型兼容性与工具调用可靠性**（k2.5/k3 工具调用、goal mode） | #2527, #2531 | 🔴 极高 |
| 2 | **MCP 生态完善**（工具 Schema 标准化、客户端校验） | #2531 | 🟠 高 |
| 3 | **Shell 模式稳定性**（后台进程、输出长度） | #2528, #2530 | 🟡 中 |
| 4 | **TUI 渲染与交互体验**（渲染抖动、键盘事件） | #2474, #2529 | 🟡 中 |

**趋势判断**：开发者正从"能用"阶段进入"稳定用+多模型适配"阶段，**多模型兼容性** 和 **MCP 协议生态** 是当前最被关注的演进方向。

---

## 💬 开发者关注点

1. **工具调用是 Agent 体验的命门** —— #2527 显示 k2.5 在 tool calling 上"全军覆没"且 goal mode 死循环，说明 Agent 框架在模型适配层缺乏健壮的兜底与重试机制，开发者迫切期望工具调用在所有模型上保持一致行为。

2. **MCP 接入门槛偏高** —— #2531 揭示 Moonshot API 对工具 Schema 校验严格（`anyOf` 必须带 `type`），客户端未做清洗直接转发 400；开发者期望 CLI 在发送前对 Schema 做规范化。

3. **Shell 模式的鲁棒性不足** —— #2530 PR 揭示当前实现假设管道一定会被主进程关闭，对 `daemon &` 类常见模式处理失当；同时 #2528 提示输出长度管理策略待优化。

4. **跨平台 TUI 细节待打磨** —— #2474（Linux 渲染抖动）、#2529（Windows 小键盘失效）表明 Textual 类 TUI 框架在 Linux/Windows 上的事件与渲染处理仍有边缘场景未覆盖。

5. **响应速度期待** —— 多数 Bug 报告提交当日即被记录，但 Issue 评论数普遍为 0，社区希望维护者能更快介入并给出 workaround。

---

> 📊 **日报小结**：今日动态以"质量修复"为主旋律，#2527（k2.5 工具调用全失效）和 #2531（MCP Schema 兼容性）是开发者最应优先关注的两个方向；PR #2530 的合入有望显著改善 shell 模式体验，建议订阅以跟踪合并进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-07-22**

---

## 📌 今日速览

今日 OpenCode 仓库无新版本发布，活跃焦点集中在三类问题：**OpenCode Go 订阅账单与鉴权异常**（多个 Issue 集中爆发）、**Web/Desktop 新版布局的回归与回退诉求**（连续 3 个相关 Issue），以及 **MiniMax M3 思考模式（thinking）路由修复**（多个 PR 在一天内合并）。社区同时关注 Memory Megathread 长期跟进和 OpenAI-兼容提供商的模型自动发现能力。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#20695 Memory Megathread](https://github.com/anomalyco/opencode/issues/20695)
- 状态：OPEN ｜ 评论 119 ｜ 👍 90
- **为什么重要**：由核心维护者 thdxr 发起的官方"内存问题统一跟进帖"，要求社区收集 heap 快照以系统性解决 OOM/泄漏问题。明确警告"不要让 LLM 提解决方案，它永远是错的"，是近期质量治理的关键信号。

### 2. [#6231 自动发现 OpenAI-兼容端点的模型](https://github.com/anomalyco/opencode/issues/6231)
- 状态：OPEN ｜ 评论 26 ｜ 👍 **182**
- **为什么重要**：👍 数遥遥领先，反映 LM Studio、Ollama、llama.cpp 等本地用户对"免手动维护模型列表"的强烈需求，是社区呼声最高的特性请求。

### 3. [#37012 保留旧版布局选项](https://github.com/anomalyco/opencode/issues/37012)
- 状态：OPEN ｜ 评论 26 ｜ 👍 27
- **为什么重要**：用户从可用性、workspace 操作便捷度等角度明确反对强制迁移新布局，与后续 #37546、#38124 形成"布局回退"主题集群。

### 4. [#31119 Error: no such column: name](https://github.com/anomalyco/opencode/issues/31119)
- 状态：OPEN ｜ 评论 14 ｜ 👍 15
- **为什么重要**：升级后直接无法使用的硬性崩溃，影响所有从旧版本升级的用户，疑似 SQLite schema 迁移缺陷。

### 5. [#19130 Windows ARM64 原生 TUI 初始化失败](https://github.com/anomalyco/opencode/issues/19130)
- 状态：OPEN ｜ 评论 12 ｜ 👍 8
- **为什么重要**：ARM64 原生二进制可执行但 OpenTUI 启动失败（bun:ffi dlopen TinyCC 报错），揭示 ARM 平台原生依赖链尚未成熟。

### 6. [#37790 OpenCode Go 订阅已支付但显示余额不足](https://github.com/anomalyco/opencode/issues/37790)
- 状态：OPEN ｜ 评论 10
- **为什么重要**：Stripe 支付成功但 workspace 状态未同步，影响付费用户的核心使用路径，已与 #37056、#38195、#38208 形成订阅问题群。

### 7. [#37056 opencode-go (Console Go) 返回 400/401/500](https://github.com/anomalyco/opencode/issues/37056)
- 状态：OPEN ｜ 评论 6
- **为什么重要**：订阅代理链路（go-proxy → opencode.ai/zen/go/v1）出现高频鉴权与上游错误，尤其是 deepseek-v4-pro 大请求场景。

### 8. [#37481 Desktop WSL sidecar 未就绪即崩溃](https://github.com/anomalyco/opencode/issues/37481)
- 状态：CLOSED ｜ 评论 7
- **为什么重要**：持久化窗口引用 WSL sidecar 时未等就绪即解析服务器，导致桌面端空白死窗；该问题已有 PR #38186 同步关闭。

### 9. [#34652 Anthropic 原生 Provider 工具调用 SchemaError](https://github.com/anomalyco/opencode/issues/34652)
- 状态：OPEN ｜ 评论 5
- **为什么重要**：内置 `todowrite` 等工具在 Anthropic 原生通道下因嵌套 JSON 字符串参数解析失败，与 OpenAI 路径行为不一致，是 SDK 抽象层缺陷。

### 10. [#37546 Web 端新布局无法回退且丢失 workspace](https://github.com/anomalyco/opencode/issues/37546)
- 状态：OPEN ｜ 评论 4 ｜ 👍 5
- **为什么重要**：v1.17.19 之后 Web 端自动启用新布局却无 UI 切换入口，且新布局未实现 git worktree，直接影响重度 Web 用户。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#38214 fix(provider): route MiniMax M3 thinking controls](https://github.com/anomalyco/opencode/pull/38214)
- 路由 NVIDIA / Lilac MiniMax M3 思考模式至 `chat_template_kwargs.thinking_mode`，Kilo / Vercel 网关使用规范化 `reasoning.enabled`，保留直连 MiniMax 的 `adaptive` 类型。**针对今日订阅问题的上游修复**。

### 2. [#38213 fix: stop clock-skew response loops](https://github.com/anomalyco/opencode/pull/38213)
- 关闭 #24476、#25270：修复客户端与服务端时钟不一致导致的无限重试循环，提升分布式/容器环境稳定性。

### 3. [#38080 fix(app): show running shell command](https://github.com/anomalyco/opencode/pull/38080)
- 在 shell 工具输入可用时立即展示命令，保持 Shell 标签流光动效，可折叠展开查看实时输出。

### 4. [#35181 fix(transform): set MiniMax M3 thinking type to enabled](https://github.com/anomalyco/opencode/pull/35181)
- MiniMax M3 兼容 API 仅接受 `enabled/disabled`，不再误传 `adaptive`，修复 #35138。已与 #38214 形成完整修复链。

### 5. [#38188 fix(core): reject malformed patch hunks](https://github.com/anomalyco/opencode/pull/38188)
- 拒绝畸形 add/delete/update hunk 行、空 hunk、空 `@@`、错位 EOF；保留 Codex 隐式 update 与缩进标记，提升 patch 工具鲁棒性。

### 6. [#37832 fix(app): prevent Solid cleanNode crash on session switch](https://github.com/anomalyco/opencode/pull/37832)
- 修复桌面端切换会话时的 `TypeError: Cannot read properties of undefined` 冻结崩溃（#37534）。

### 7. [#37620 fix(desktop): use custom titlebar on linux](https://github.com/anomalyco/opencode/pull/37620)
- Linux Electron 窗口此前回退到 GTK 原生装饰，现统一启用自定义 titlebar（#36225）。

### 8. [#38206 fix(provider): cache all system messages instead of only first 2](https://github.com/anomalyco/opencode/pull/38206)
- `applyCaching` 不再截断 system 消息，保留插件和 MCP 注入的指令，显著降低缓存命中率损失。

### 9. [#38184 fix(core): discover Copilot API endpoint](https://github.com/anomalyco/opencode/pull/38184)
- V2 设备 OAuth 完成后发现账户专属 Copilot 端点并持久化至凭据元数据，免去常规启动额外请求。

### 10. [#37833 fix(provider): add NVIDIA NIM DeepSeek request compatibility](https://github.com/anomalyco/opencode/pull/37833)
- 修复 deepseek-v4-flash / v4-pro 在 NVIDIA NIM 上 hang 死的问题（#24264），提升大模型路由稳定性。

---

## 📈 功能需求趋势

通过对今日 50 个活跃 Issue 的归类，社区关注集中在以下方向：

| 方向 | 代表 Issue | 社区热度 |
|---|---|---|
| **UI/布局回退与可定制** | #37012, #37546, #38124 | 🔥🔥🔥 |
| **OpenCode Go / 订阅计费稳定性** | #37790, #37056, #38195, #38208 | 🔥🔥🔥 |
| **多 Provider 兼容与路由** | #34652, #37833, #6231, #31119 | 🔥🔥🔥 |
| **平台原生支持（ARM64/Linux）** | #19130, #37620 | 🔥🔥 |
| **会话与编辑器体验增强** | #37381（提示队列）, #38163（自动命名）, #4925（成本汇总） | 🔥🔥 |
| **内存与稳定性治理** | #20695, #38154, #31119 | 🔥🔥 |
| **生态扩展** | #11948（MCP sampling）, #38022（hypa 插件）, #33257（snippets） | 🔥 |

---

## 💡 开发者关注点

1. **平台一致性缺失**：Windows ARM64 原生支持不完整（#19130）、Linux 桌面端装饰回退（#37620）、Web 端布局行为与 Desktop 不同步（#37546、#38124），跨平台体验落差明显。

2. **Provider 适配是长期攻坚点**：Anthropic 原生通道 schema 解析（#34652）、Google 数值 enum（#33041）、NVIDIA NIM DeepSeek 兼容（#37833）、Gemini 速率限制提示异常（#21823）持续暴露多后端 SDK 抽象的脆弱性。

3. **OpenCode Go 商业链路需打通**：Stripe 支付、订阅状态同步、go-proxy 鉴权（#37790/#37056/#38195/#38208）形成"付费但用不了"的高优先级信任危机，是当前最迫切的运维议题。

4. **本地模型体验亟待自动化**：#6231 高 👍 数（182）明确反映 Ollama / LM Studio 用户不愿手维护模型清单，开发者希望 OpenCode 能"自动感知"本地服务。

5. **工作流细节持续打磨**：提示队列与中断（#37381）、会话自动命名（#38163）、会话总成本（#4925 已关）、shell 命令实时可见（#38080）等"小但高频"的功能改进，体现出向日常重度用户的体验倾斜。

6. **内存治理进入工程化阶段**：thdxr 主导的 Memory Megathread（#20695）要求真实堆快照，说明项目正从"修 bug"转向系统性内存工程。

---

*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) ｜ 报告生成时间：2026-07-22*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-22

## 今日速览

Pi 项目今日连发 v0.81.0 与 v0.81.1 两个版本,核心新增 llama.cpp 本地模型管理以及可验证的源码归档能力。但 v0.81.0 升级后引发多条严重崩溃报告(#6915、#6918),Claude 新模型与 edit 工具约 20% 失败率问题(#6278)持续高热讨论;与此同时,扩展 API、自动压缩与 Session 管理三条主线均有重要 PR 推进。

## 版本发布

### v0.81.1
- **可验证的发布源码归档**:GitHub Release 现包含确定性、带校验和的源码归档,并提供重建独立二进制文件的指南。([README](https://github.com/earendil-works/pi/blob/v0.81.1/README.md))

### v0.81.0
- **本地 llama.cpp 模型管理**:可连接 llama.cpp 路由器、搜索/下载 Hugging Face 模型,并显式加载/卸载模型(带实时进度)。([文档](https://github.com/earendil-works/pi/blob/v0.81.0/packages/coding-agent/docs/llama-cpp.md))

## 社区热点 Issues

1. **#3357 [CLOSED] Official local LLM provider extension**([链接](https://github.com/earendil-works/pi/issues/3357))
   评论 30、点赞 43。讨论如何从 `baseUrl/models` 动态拉取模型列表,直接促成 v0.81.0 的 llama.cpp 集成,是本月最高互动量议题。

2. **#6278 [CLOSED] Claude 新模型与 edit 工具兼容性差**([链接](https://github.com/earendil-works/pi/issues/6278))
   评论 23、点赞 9。Claude 新模型在约 20% 的 edit 调用中因注入额外字段而失败(`new_text_x`、`type`、`closeenough` 等),直接阻塞生产使用。

3. **#5653 [OPEN] Move off Shrinkwrap**([链接](https://github.com/earendil-works/pi/issues/5653))
   评论 19。同时安装 `pi-ai` 与 `pi-coding-agent` 会在磁盘上产生两个 `pi-ai` 副本,导致模块级 provider registry 失效,属架构级讨论。

4. **#6915 [CLOSED]

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-22

---

## 📌 今日速览

v0.20.1 正式发布，核心修复了 `autofix` 的 label-driven 接管与发布机制，但仍因 Docker 集成测试失败导致 Release 流程二次触发。社区焦点集中在 **SubAgent 工具调用冲突**（多个 P1 bug 涌现）与 **Web Shell 持续打磨**（子代理面板、Workspace 选择器、长会话渲染），同时冷启动性能优化（undici 懒加载）合入 main 分支，ACP 子进程冷启动体积再砍 2MiB。

---

## 🚀 版本发布

### v0.20.1 (2026-07-21)
- **Highlights**: `autofix` 引入 label-driven 接管与发布流程；修复了 forced-dispatch green no-op 的缺陷
- **Breaking Changes**: 无
- **Feats**: [#7165](https://github.com/QwenLM/qwen-code/pull/7165) autofix label 驱动机制
- ⚠️ **注**: 由于 `integration_docker` Job 失败（[#7441](https://github.com/QwenLM/qwen-code/issues/7441)），v0.20.1 发布流程被自动重试

### v0.20.0-preview.0 & v0.20.0-nightly.20260722
- 包含测试覆盖：daemon metrics 初始化顺序 + `metricReader` 不对称性文档化（[#7456](https://github.com/QwenLM/qwen-code/pull/7456)）

### cua-driver-rs v0.7.3
- 引入**相对坐标**支持（fork 自上游）
- macOS 已签名 + 公证；Linux/Windows 仍为未签名二进制
- 在 `packages/cua-driver` 下 vendored

---

## 🔥 社区热点 Issues（TOP 10）

| # | Issue | 重要性 | 评论数 |
|---|-------|--------|--------|
| 1 | [#7156](https://github.com/QwenLM/qwen-code/issues/7156) **SubAgent 篡改主会话模型 — 上下文溢出复发** | P1·核心 session 管理 | 11 |
| 2 | [#7316](https://github.com/QwenLM/qwen-code/issues/7316) OpenAI 对 `toolCall` 的特殊反应导致 subAgent 完全不可用 | P2·Subagent Tools | 5 |
| 3 | [#7056](https://github.com/QwenLM/qwen-code/issues/7056) VSCode 扩展 v0.19.11 无法连接 Qwen agent (Windows) | P2·IDE 集成 | 5 |
| 4 | [#7306](https://github.com/QwenLM/qwen-code/issues/7306) 工具输出预算、可观测性、artifact 生命周期加固（umbrella） | P2·Core 增强 | 4 |
| 5 | [#7427](https://github.com/QwenLM/qwen-code/issues/7427) web-shell artifact 面板自动刷新时报错刷屏 | P2·UI 缺陷 | 4 |
| 6 | [#5540](https://github.com/QwenLM/qwen-code/issues/5540) 允许恢复已完成的 background sub-agent（通过 send_message） | 特性·长期未解 | 4 |
| 7 | [#7252](https://github.com/QwenLM/qwen-code/issues/7252) `/auth` 无法选择 token-plan.ap-southeast-1 | P2·鉴权 | 4 |
| 8 | [#7287](https://github.com/QwenLM/qwen-code/issues/7287) MEMORY.md 未注册到 FileReadCache 导致 write_file 被拒 | P2·Core | 3 |
| 9 | [#7404](https://github.com/QwenLM/qwen-code/issues/7404) 启动时版本检查超时太短（旧会话加载必超时） | P3·CLI | 3 |
| 10 | [#7452](https://github.com/QwenLM/qwen-code/issues/7452) cronParser `*/N` 偏离 vixie 语义 | P2·Core | 2 |

**热点解读**:
- **SubAgent 体系是当前最大痛点**：#7156 揭示了 #7119 修复未根除模型被篡改问题（不同代码路径）；#7316、#7315 反映出 OpenAI 兼容模型下 `working_dir` / `isolation` 参数互斥冲突。这些都是 P1/P2 高优先级问题。
- **Web Shell 进入密集打磨期**：artifact 面板、token 刷新丢失、Workspace 选择器初始化等 5+ 个 Issue 同步推进。
- **CI 稳定性警报**：#7445 / #7435 / #7417 三条 main 分支 E2E 测试失败被自动创建，提示近期存在回归风险。

---

## 🛠️ 重要 PR 进展（TOP 10）

| PR | 主题 | 影响面 |
|----|------|--------|
| [#7453](https://github.com/QwenLM/qwen-code/pull/7453) | `acp-bridge`: 关闭 #7400 prompt-terminal 一次性交付的 self-review | Daemon 可靠性 |
| [#7458](https://github.com/QwenLM/qwen-code/pull/7458) | 通过 epoch token 检测跨重启的 stale SSE 游标 | Web Shell 重连 |
| [#7408](https://github.com/QwenLM/qwen-code/pull/7408) | 优化 Web Shell 长会话渲染（>500 UI blocks 触发内存回收） | Web Shell 性能 |
| [#7455](https://github.com/QwenLM/qwen-code/pull/7455) | undici 懒加载 → ACP 子进程冷启动再砍 ~2MiB | 启动性能 |
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | 守护进程支持 workspace trust 热重载（无需重启） | Daemon 体验 |
| [#7380](https://github.com/QwenLM/qwen-code/pull/7380) | Web Shell detail 面板展示子代理会话 | SubAgent 可视化 |
| [#7454](https://github.com/QwenLM/qwen-code/pull/7454) | 宣传 background task 复活能力（含 completed） | 回应 #5540 |
| [#7459](https://github.com/QwenLM/qwen-code/pull/7459) | 恢复 background agent roster（重开父会话时） | Session 恢复 |
| [#7388](https://github.com/QwenLM/qwen-code/pull/7388) | Daemon 显式 Channel delivery 合约（替代轮询） | 通知架构升级 |
| [#7395](https://github.com/QwenLM/qwen-code/pull/7395) | 支持自定义 skill 目录（跨 Claude Code/Codex/qwen-code 共享） | 跨工具互操作 |

**关注点**: 本日 PR 高度集中在 **Web Shell / Daemon 两条主线**，性能（#7455、#7408）和功能（#7459、#7454）双管齐下。autofix label-driven 流程已稳定接管一批问题（[#7438](https://github.com/QwenLM/qwen-code/pull/7438)、[#7390](https://github.com/QwenLM/qwen-code/pull/7390)、[#7393](https://github.com/QwenLM/qwen-code/pull/7393)）。

---

## 📈 功能需求趋势

通过对 50 条 Issues 的归类分析，社区关注焦点按热度排序：

1. **🤖 SubAgent / 工具调用体系** (~25%)
   - 多 Provider 兼容性（OpenAI 兼容模型）
   - 参数互斥校验（working_dir × isolation）
   - Background agent 生命周期管理（复活、roster 恢复）
   - 模型在 subagent 中被覆写导致的主会话污染

2. **🌐 Web Shell (qwen serve)** (~20%)
   - 工作区选择器、Start-In 上下文选择器
   - 长会话渲染性能与内存
   - 鉴权 token 持久化（刷新丢失）
   - Artifact 面板错误处理

3. **⚡ 启动与运行时性能** (~15%)
   - ACP 子进程冷启动体积优化
   - 启动时版本检查超时
   - 工具输出预算与压缩

4. **🪟 平台兼容 (Windows 优先)** (~15%)
   - VSCode 扩展连接中断
   - Docker 沙箱 cwd 解析
   - PowerShell Get-FileHash 兼容性
   - 独立安装包 SHA-256 校验

5. **🧠 模型与认证** (~10%)
   - Thinking-only 模型 enable_thinking 参数
   - 鉴权页面地区选项
   - Token 用量统计准确性

6. **🛠️ 跨工具互操作 / 生态** (~10%)
   - 自定义 Skill 目录共享
   - Fleet Shepherd Dashboard（CI/Shepherd）
   - Channel 投递合约（IM 集成）

---

## 💡 开发者关注点

综合 issue 描述与 PR 讨论，开发者社区反映最强烈的痛点：

### 🔴 高频痛点
- **SubAgent 可靠性担忧**：连续出现的 P1 bug（#7156、#7316、#7315）显示 subagent 与多 Provider 的协同尚未稳定，OpenAI 兼容模型是重灾区
- **Web Shell token 持久化缺失**（#7301、#7398）：`--token` 启动后刷新即失效，反复出现重复 issue
- **CI 流水线脆弱**：main 分支 24h 内 3 次 E2E 失败（#7445、#7435、#7417），影响正常发布节奏
- **启动时阻塞式更新检查**：在加载长会话时必然超时，体验断裂

### 🟡 体验类高频需求
- **会话恢复的完整性**：sub-agent roster、artifact、memory 均需在重启后保留
- **更透明的内部操作**：思考模型（thinking-only）调用 enable_thinking=false 时需要更友好的错误提示
- **更细粒度的 Cron**：当前 `*/N` 与文档声明的 vixie 语义不一致，需要对齐

### 🟢 积极信号
- 社区贡献者（@doudouOUC、@ytahdn、@LaZzyMan 等）开始主导多个核心模块（Daemon、Web Shell、CLI），不再是单点维护
- `autofix` 的 label-driven 机制显著缩短 issue → PR 的闭环时间
- 跨工具互操作（共享 Skill 目录）显示出 Qwen Code 愿意与 Claude Code / Codex 生态互联

---

> 📅 数据范围：2026-07-21 ~ 2026-07-22 24h 滚动窗口  
> 📊 样本：50 Issues + 50 PRs + 4 Releases  
> 🔗 数据源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code)

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek-TUI 社区动态日报
**日期：2026-07-22**

---

## 一、今日速览

v0.9.1 发布冻结进入最后冲刺，仓库围绕"一个真相源（single source of truth）"原则集中关闭了 20+ 项 release-blocker 任务，涵盖子代理调度、权限契约、命令边界重构、TUI 渲染与计费溯源等核心子系统。社区贡献者 fleitz、bevis-wong、SamhandsomeLee 等提交的多项高优先级修复已合入主线，同时 v0.9.2 的早期工作（TelecomJS 提供商、Moonshot MFJS schema、HarmonyOS 编译）也正式启动。

---

## 二、版本发布

过去 24 小时内无新版本发布。当前仓库处于 v0.9.1 发布冻结阶段，#4675（v0.9.1 runtime 集成与发布面合并）仍为 OPEN 状态，预计作为发布前的最终整合 PR。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 重要性 |
|---|-------|------|------|--------|
| 1 | [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) Codewhale 不遵守 constitution | CLOSED | 41 | 讨论度最高的 Issue：作者长期反馈 Codewhale 倾向自写临时脚本而非复用既有脚本，与"constitution"约束冲突；已关闭但反映出 LLM 代理行为合规与可控性是社区核心关注点 |
| 2 | [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) EPIC: 命令边界分阶段重构 | OPEN | 15 | v0.9.1 release-blocker 级别的总跟踪 EPIC，串联 #2791 命令边界重构的多个可合并子层 |
| 3 | [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) 帮助贡献者搭建开发环境 | OPEN | 11 | 社区基础设施型需求：因项目日均 10+ PR，新人 onboarding 工具链呼声高 |
| 4 | [#2766](https://github.com/Hmbown/CodeWhale/issues/2766) UI 重构需求 | OPEN | 9 | 用户体验类核心痛点：输出难以复制、确认弹窗遮挡主界面 |
| 5 | [#4410](https://github.com/Hmbown/CodeWhale/issues/4410) 恢复 xAI device-code OAuth | CLOSED | 7 | v0.9.1 release-blocker：xAI 官方 CLI 已迁移至 `/oauth2/device`，旧路径解析失败，本次修复对齐官方 |
| 6 | [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) Work Agent 行：真实子代理详情与结构化活动 | OPEN | 7 | 恢复自已删 #2694，承载 @aboimpinto 的设计方向，是 v0.9.1 中 Work 面板的核心 UX 设计 |
| 7 | [#2886](https://github.com/Hmbown/CodeWhale/issues/2886) 工具生命周期 Gherkin 验收 E2E 覆盖 | OPEN | 6 | 命令边界重构前置条件，决定 E2E 自动化能否覆盖命令所有权变更 |
| 8 | [#1917](https://github.com/Hmbown/CodeWhale/issues/1917) 通用 PreToolUse/PostToolUse hook 层 | OPEN | 5 | 跨命令类型的 Cancel/Pause/Resume 统一架构提案，是未来 v0.9.2+ 的关键扩展点 |
| 9 | [#4650](https://github.com/Hmbown/CodeWhale/issues/4650) v0.9.1 完成板与本地 dogfood 关口 | OPEN | 3 | 发布前的"非发布汇流板"，决定本地最终 dogfood 是否放行公开发布 |
| 10 | [#4660](https://github.com/Hmbown/CodeWhale/issues/4660) 自定义提供商与大模型配置参考 Kimi Code | OPEN | 1 | 中文社区需求：希望后续版本参考 Kimi Code 方案提供更灵活的自定义提供商配置 |

---

## 四、重要 PR 进展（精选 10 条）

| # | PR | 状态 | 内容要点 |
|---|----|------|---------|
| 1 | [#4675](https://github.com/Hmbown/CodeWhale/pull/4675) v0.9.1 runtime 集成与发布面合并 | OPEN | 将 runtime 简化、空 Work 修复与公开发布面集成至 main，并加入 composer 模式/权限的冷暖色 TUI 语法 |
| 2 | [#4046](https://github.com/Hmbown/CodeWhale/pull/4046) Layer 5.1 用户命令注册与加载边界 | CLOSED | 验证 #2870 EPIC 第 5.1 层用户命令注册已满足验收，无需改动生产代码 |
| 3 | [#4673](https://github.com/Hmbown/CodeWhale/pull/4673) 修复 BashTool 默认 cwd 行为 | CLOSED | 修复 #4674：当 sub-agent 以 `worktree: true` 启动时，无显式 cwd 的 shell 命令现在回退到 `context.workspace`，不再跑在父 checkout |
| 4 | [#4678](https://github.com/Hmbown/CodeWhale/pull/4678) 修复 v0.9.1 集成作者署名 | CLOSED | 将 Hunter Bown 与 Fred Leitz 映射到规范 noreply ID，保留原始 commit 与合并谱系，加入反向校验测试 |
| 5 | [#4654](https://github.com/Hmbown/CodeWhale/pull/4654) 修复 Enter 发送延迟 | CLOSED | 修复 #4605：Enter 立刻触发 Preparing 占位调度，将 UI 反馈与慢速发送准备解耦，告别数百毫秒卡顿 |
| 6 | [#4658](https://github.com/Hmbown/CodeWhale/pull/4658) 新增 provider registry + 切换端点 | CLOSED | runtime API 增加 3 个端点，让 GUI 可原子切换 provider/model，避免旧版 setConfig 链式调用丢失 per-provider 设置 |
| 7 | [#4653](https://github.com/Hmbown/CodeWhale/pull/4653) 长输出滚动锁定的 PTY 测试 | CLOSED | 用 qa_pty 端到端场景锁定 #4603 的长输出滚动行为：内容不截断、可在视口外保留 |
| 8 | [#4656](https://github.com/Hmbown/CodeWhale/pull/4656) 未知本地模型显式上限修复 | CLOSED | 修复 #4655：自托管路由下，显式 output limit 优先于 4K 兼容性回退，保留已知模型与托管商上限 |
| 9 | [#4613](https://github.com/Hmbown/CodeWhale/pull/4613) Moonshot 工具参数 MFJS 规范化 | CLOSED | Moonshot/Kimi 校验 MFJS：根必须 `type:"object"` 且禁止 `anyOf`/`oneOf`/`allOf` 顶层组合，对 `apply_patch` 等工具进行 schema 清洗 |
| 10 | [#4657](https://github.com/Hmbown/CodeWhale/pull/4657) 流式空闲超时上报进度 | CLOSED | 在 Chat Completions SSE 空闲超时错误中附带已收字节与时序遥测，区分 prefill 卡死与流中段停滞（含被截断的 tool call 参数） |

---

## 五、功能需求趋势

综合所有 Issues 与 PR，可以提炼出以下五大社区关注方向：

1. **TUI/UX 体验重构**：输出可复制性、确认弹窗、Enter 发送延迟、长内容滚动 — 多个 Issue (#2766、#4603、#4605) 反映出 TUI 在高频使用下的体验短板，#4654、#4653 已在 v0.9.1 中逐一修复。
2. **多模型/多提供商架构**：自定义提供商配置（#4660）、Moonshot MFJS schema（#4613）、TelecomJS 提供商（#4370）、自托管模型的显式 limits（#4655/#4656）、runtime API 注册中心（#4658）— 生态正在快速向"任意模型可插拔"演进。
3. **子代理/Work 队列的真相性**：Work Agent 行 (#2889)、单一 Work 队列 (#4636)、子代理决策与上下文协调 (#4647)、BashTool cwd 上下文 (#4673/#4674) — 围绕"一个真相源"原则持续收敛。
4. **权限与模式持久化**：Ask/Auto-Review/Full Access 统一契约 (#4412)、模式与权限渲染无副作用 (#4628)、credit 公平性 (#4649) — 治理与可审计性是 v0.9.1 的核心叙事。
5. **跨平台与发布工程**：HarmonyOS 编译 (#4566)、Verifiers 兼容 (#4641)、无项目配置可复现 headless (#4652)、依赖更新 js-yaml/axios (#4668/#4661) — 工程化与下游生态接入同步推进。

---

## 六、开发者关注点

- **LLM 行为可控性**：#4032 高居评论榜首，凸显开发者对"代理偏离 constitution、自写脚本"这类隐性回归的焦虑，社区期望通过更强的指令边界与合规校验来约束模型行为。
- **TUI 性能与可用性**：Enter 发送卡顿、长输出截断、复制不便等微交互问题被反复报，反映开发者对终端类工具的容错阈值极低。
- **多模型兼容性**：Moonshot MFJS schema、xAI OAuth 路径变化、自托管模型默认上限等具体集成问题频出，说明接入新模型的"最后一公里"仍是痛点。
- **贡献者体验**：#4227 提议用 Skill/workflow 帮新人快速搭建开发环境，映射出高迭代节奏下 onboarding 自动化的真实需求。
- **审计与公平性**：#4649 要求将 reporters / verifiers / implementers 平等计入贡献者列表，社区对协作透明度与署名公平性有强诉求。
- **可复现发布**：#4652 `--no-project-config` 与 #4650 完成板，体现社区对"可复现、可审计、可 dogfood"的工程化发布流程的高度重视。

---

*数据来源：GitHub Issues & Pull Requests (Hmbown/CodeWhale)，采集时间 2026-07-22。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*