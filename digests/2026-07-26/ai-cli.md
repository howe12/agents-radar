# AI CLI 工具社区动态日报 2026-07-26

> 生成时间: 2026-07-26 02:09 UTC | 覆盖工具: 9 个

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
**数据周期：2026-07-26 ｜ 覆盖工具：9 款**

---

## 1. 生态全景

当前 AI CLI 工具生态已全面进入 **"工程化深水区"**。Claude Code 单日 50 条 Issue 仍围绕 AGENTS.md 标准化（4.4k+ 👍）这一开放协议诉求展开，标志着社区正从"功能丰富度"竞争转向"互操作性 + 持久化可靠性"竞争；与此同时，9 款工具中有 6 款同步发布预发布版本（Codex、Pi、Qwen Code、Gemini CLI 等），**版本节奏持续加速但工程化打磨明显滞后**——子代理生命周期、会话恢复、Windows 平台稳定性、Desktop GUI 崩溃持续占据各社区热点前三。值得关注的是，**个别工具正从"命令行工具"演化为"自动化开发平台"**（如 Gemini CLI 的 Issue-to-PR 流水线、Qwen Code 的多工作区守护进程、DeepSeek TUI 的 CWC 浏览器控制平面），行业边界正在模糊。

---

## 2. 各工具活跃度对比

| 工具 | 24h Issue | 24h PR | Release | 头部 Issue 👍 | 社区阶段 |
|---|---|---|---|---|---|
| **Claude Code** | ~50 | 5 | 无 | 4.4k+ (#6235) | 成熟期·高曝光 |
| **OpenAI Codex** | ~40 | 10 | rust-v0.146.0-alpha.10/.10.1 | 690 (#10450 已关闭) | 快速迭代 |
| **Gemini CLI** | ~50 | 10 | v0.54.0-nightly | 8 (#21409) | 快速迭代 |
| **GitHub Copilot CLI** | 18 | 2 | 无 | 15 (#17 已关闭) | 稳定期·渐进 |
| **Kimi Code CLI** | 2 | 4 | 无 | 16 (#1282) | 早期·低活跃 |
| **OpenCode** | ~30 | 10 | 无 | 31 (#37012) | 迭代期·争议 |
| **Pi** | 50 | 19 | **v0.82.1**（Opus 5 + Bedrock） | 11 (#6768) | 快速迭代 |
| **Qwen Code** | 28 | **50** | v0.21.0-nightly | 8 (#6378) | 高密度迭代 |
| **DeepSeek TUI** | ~15 | 10 | 无（v0.9.2 收尾） | 6 (#4520) | 早期·重构 |

**关键观察**：
- **PR 产出最密集**：Qwen Code（50 条，含 30+ 关闭），显示夜间机器人式合入流水线已成型
- **Issue 热度最高**：Claude Code #6235（4.4k+ 👍）是其他工具头部 Issue 的 **50–500 倍**，体现"主流 vs 长尾"差距
- **持续发版**：仅 4 款工具 24h 内有 Release，Codex 连续推 alpha.10/.10.1 显示 OpenAI 加速节奏

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 共性诉求 |
|---|---|---|
| **跨工具互操作标准** | Claude Code（#6235 AGENTS.md）、DeepSeek TUI（#2743 适配 CC 技能）、OpenCode（插件市场） | 反对厂商私有协议，呼吁开放规范 |
| **子代理（Sub-agent）生命周期** | Claude Code（#77554/#78313）、Gemini CLI（#22323/#21409）、Qwen Code（#7685/#7702）、OpenCode | 孤儿任务、挂死、权限绕过、错误传播——**9 款中有 6 款正在同时修** |
| **会话持久化与恢复** | Claude Code（#76844/#80871）、Copilot CLI（#4251/#4246）、Pi（#6768/#7020）、Kimi（#2520/#2519） | TaskCreate ID 重生、resume OOM、context 丢失是**结构性痛点** |
| **Windows 平台稳定性** | Codex（#33776/#34133）、Gemini CLI（#28348 OAuth）、OpenCode（#38844）、Pi（#7064）、Kimi（#2558） | 高频反映"Windows 是二等公民" |
| **Compaction（上下文压缩）** | Claude Code（auto-compaction）、Copilot CLI（#4183）、Pi（#6768/#7020/#7048） | 5 MB 请求体上限、截断在单词中间、后不再续跑 |
| **多 Provider 路由** | OpenCode、Pi（#7067）、DeepSeek TUI（#4832/#4838/#4829 三连）、Qwen Code | 切换前校验、协议差异、错误处理 |
| **TUI 渲染性能** | Pi（#6665 Intl.Segmenter）、OpenCode、DeepSeek TUI（#3904–#3908） | 流式输出 CPU 占用、滚动位置丢失、超宽行崩溃 |
| **可观测性/用量透明度** | Codex（#32195）、Qwen Code（#7719）、DeepSeek TUI（#4520） | 状态栏 token 明细、配额可见性 |
| **远程/跨端会话** | Kimi Code（#1282 Remote Control）、Codex（#10450 Remote-SSH）、DeepSeek TUI（#4844 `/rc` host） | 从"终端独占"向"多端协作"演进 |
| **安全与脱敏** | Gemini CLI（#26525 Auto Memory）、Pi（#7090 CVE-2026-14257）、Gemini CLI（#28353 路径遍历） | Auto Memory 隐私、依赖漏洞、纵深防御 |

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 关键技术路线 |
|---|---|---|---|
| **Claude Code** | 通用主力 + 开放生态旗手 | 企业团队、跨平台开发者 | Anthropic 模型优先、AGENTS.md 倡导者 |
| **OpenAI Codex** | OpenAI 生态深度集成 | OpenAI/Azure 订阅用户 | Rust 重写、MCP-first、GPT-5.x 快速跟进 |
| **Gemini CLI** | Google 自动化平台 | AI 工程师、Agent 开发者 | Issue-to-PR 自动化流水线（Firestore + Cloud Run + Antigravity） |
| **GitHub Copilot CLI** | GitHub 工作流助手 | GitHub 生态用户 | 较保守，靠 IDE 集成 |
| **Kimi Code CLI** | MoonshotAI 国产化入口 | 中文开发者、Moonshot 订阅用户 | 深度修会话链路、跨端会话 |
| **OpenCode** | 开源多 Provider 入口 | 注重 UI 与多模型的开发者 | 仅桌面 GUI 公开，终端=TUI |
| **Pi** | 开发者级 TUI 工具 | 性能敏感型个人/企业 | 显式 compaction、eval harness、扩展 API |
| **Qwen Code** | 阿里云 + Web Shell | 国内企业、多工作区团队 | 多工作区守护进程、sandbox 强化 |
| **DeepSeek TUI** | DeepSeek-first 迁移中 | DeepSeek 早期用户、多模型探索者 | 从 DeepSeek-only 向 provider-无关重构 |

**核心差异点**：
- **协议开放度**：Claude Code（推动 AGENTS.md）> Pi/OpenCode（开放 API）> Copilot CLI（GitHub 锁定）
- **智能化深度**：Gemini CLI（自动化流水线）> Claude Code/Pi（compaction + sub-agent）> Codex（依赖模型）
- **架构先进性**：Qwen Code（多工作区 daemon）≈ DeepSeek TUI（CWC 浏览器控制）> 其他
- **生态绑定度**：Copilot CLI（GitHub）> Codex（OpenAI）> Kimi Code（Moonshot）> Claude Code（中立）

---

## 5. 社区热度与成熟度

### 🟢 高活跃 + 成熟（Anthropic / OpenAI 系）
- **Claude Code**：4.4k+ 👍 单议题、AGENTS.md 标志性诉求，**业内议程设置者**；但社区情绪显示"功能已领先、工程化滞后"
- **OpenAI Codex**：MCP 资源回收、Windows 桌面、Remote-SSH 三线推进，**快速迭代但稳定性债明显**

### 🟡 高活跃 + 快速迭代（新兴势力）
- **Gemini CLI**：50 issues + 10 PRs，外加 SSR 流水线大型基础设施 PR 持续涌入，**正从 CLI 升级为平台**
- **Pi**：v0.82.1 一次性整合 Opus 5 + Bedrock + CVE 修复，**版本治理节奏最专业**
- **Qwen Code**：28 issues + **50 PRs**（PR 密度最高），架构演进（多工作区守护进程）讨论热烈

### 🟠 中活跃 + 争议期
- **OpenCode**：Desktop v1.18.5 升级阵痛 + UI 布局争议（#37012 31 👍），**用户体验与稳定性进入瓶颈期**
- **GitHub Copilot CLI**：18 issues 反映渐进式问题，1.0.74 OOM 回归说明**回归测试体系待加强**

### 🔴 低活跃 / 早期阶段
- **Kimi Code CLI**：仅 2 issues，但 Remote Control（16 👍）显示**典型长尾产品的高需求低响应**
- **DeepSeek TUI**：v0.9.2 收尾，PR 中性能债清理与多 Provider 重构并行，**正在跨越"DeepSeek-only"历史包袱**

---

## 6. 值得关注的趋势信号

### 🔔 信号 1：**AGENTS.md 标准之争将决定未来 18 个月的生态格局**
Claude Code #6235（4.4k+ 👍）与 Codex/Amp/Cursor 形成跨工具联盟，**Anthropic 公开生态的姿态**正在测试其与 OpenAI 生态的开放度差距。开发者应关注：是否在自己的项目中预埋 `AGENTS.md` 兼容性。

### 🔔 信号 2：**"Sub-agent 不可信"已成行业共识**
9 款工具中 6 款同步暴露子代理生命周期 bug（孤儿任务、挂死、权限绕过、错误报告为成功）。**第一代 Agent 框架的工程化短板正在集中暴露**，建议：在生产场景中子代理仍需人工兜底，不要完全依赖自动委派。

### 🔔 信号 3：**版本加速 vs 质量基线** 的剪刀差正在扩大
Codex（α.10 → α.10.1 当日双发）、Gemini CLI（nightly 自动化）、Qwen Code（50 PRs/日）的节奏下，**1.0.74 OOM 回归、Desktop v1.18.5 崩溃潮**说明灰度机制是下一个分水岭。决策者应建立"内部版本灰度 + 关键回归 case 套件"。

### 🔔 信号 4：**"长会话的工程化"成为新主战场**
Claude Code auto-compaction、Copilot CLI 5 MB 上限、Pi 的 compaction 主题群（#6768/#7020/#7048）共同指向：**token 上下文管理已从模型能力下沉到 CLI 工具责任**。建议关注各工具的 compaction 策略（截断检测、续跑机制、摘要完整性）。

### 🔔 信号 5：**AI CLI 工具正在"上移"为自动化平台**
- Gemini CLI 内部构建 Issue-to-PR 自动化流水线（pr-generator-* 系列）
- Qwen Code 推动多工作区共享守护进程（#6378 RFC）
- DeepSeek TUI 接入 CWC 浏览器控制平面（#4844 `/rc` host）
- Kimi Code 提议 Remote Control（#1282）

**传统 CLI 终端边界正在被打破**，未来 6–12 个月可能看到 AI CLI 与 IDE、浏览器、Web 平台的深度融合。

### 🔔 信号 6：**国产工具的差异化路径已清晰**
Kimi Code（远程会话）+ Qwen Code（多工作区 + Web Shell）+ DeepSeek TUI（多 Provider + plugin 生态）正以**"本地化 + 跨端 + 开放生态"**区别于硅谷系工具，**国内 B 端采购通道（年费、发票、桌面安装）**成为差异化竞争点。

---

## 📌 给技术决策者的速查建议

| 关注点 | 推荐跟进 | 关键 Issue/PR |
|---|---|---|
| 互操作性 | Claude Code #6235 AGENTS.md 进展 | 推动项目内预埋 |
| 生产稳定性 | 暂缓升级 Copilot CLI 1.0.74 | #4251 OOM 回归 |
| 长会话 | Pi compaction 后续补丁 | #6768/#7020/#7048 |
| 多 Provider 切换 | DeepSeek TUI v0.9.2 release notes | #4829/#4832/#4838 |
| 跨端能力 | Kimi Code Remote Control | #1282 |
| 安全更新 | 立即升级 Pi 规避 brace-expansion CVE | #7090 |
| 架构演进 | Qwen Code 多工作区守护进程 RFC | #6378 |

---

> **报告小结**：AI CLI 工具生态正从"功能竞速"切换为"工程化深耕 + 开放生态 + 平台化演进"的三轨赛道。开发者的核心机会在于：选择对 AGENTS.md 兼容的工具链、谨慎对待子代理在生产场景的自动委派、关注 compaction 与多 Provider 路由这两个尚未收敛的关键问题。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点分析报告
**数据范围**：anthropics/skills 仓库 · 截止 2026-07-26
**样本**：Top 20 PR + Top 15 Issues

> ⚠️ 说明：本次抓取的 PR 评论数字段为空，本报告以"关联 Issue 评论数 / 更新活跃度 / 修复覆盖面"作为关注度代理指标。

---

## 1. 🔥 热门 Skills 排行（按社区关注度）

| # | Skill / PR | 关注热度来源 | 当前状态 |
|---|---|---|---|
| 1 | **skill-creator 评测体系修复** · [PR #1298](https://github.com/anthropics/skills/pull/1298) | 直接修复 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论）+ [#1169](https://github.com/anthropics/skills/issues/1169)；10+ 独立复现者，反复发帖 | OPEN |
| 2 | **skill-quality-analyzer / skill-security-analyzer** · [PR #83](https://github.com/anthropics/skills/pull/83) | 双 meta-skill，呼应 Security Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论，全榜最高） | OPEN |
| 3 | **document-typography** · [PR #514](https://github.com/anthropics/skills/pull/514) | 命中"AI 生成长文档排版痛点"的普遍需求，覆盖 orphan/w widow/编号错位 | OPEN |
| 4 | **self-audit (v1.3.0)** · [PR #1367](https://github.com/anthropics/skills/pull/1367) | 关联 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate 三段式提案） | OPEN |
| 5 | **color-expert** · [PR #1302](https://github.com/anthropics/skills/pull/1302) | 唯一覆盖色名系统/色空间决策的专业 skill，最近一次更新 2026-07-21 | OPEN |
| 6 | **ODT (OpenDocument)** · [PR #486](https://github.com/anthropics/skills/pull/486) | 补齐 LibreOffice / ISO ODF 生态空白，编辑动密集 | OPEN |
| 7 | **testing-patterns** · [PR #723](https://github.com/anthropics/skills/pull/723) | 覆盖 Testing Trophy + React + 契约测试，社区强烈呼吁"测试 skill" | OPEN |
| 8 | **pyxel 复古游戏开发** · [PR #525](https://github.com/anthropics/skills/pull/525) | MCP + 创意编程交叉，长尾活跃度（最近更新 2026-07-15） | OPEN |

**最热门的不是"新 Skill"，而是 skill-creator 工具链**——仅"评测失效（recall=0%）"一个问题就催生了 [#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#1099](https://github.com/anthropics/skills/pull/1099) 三份重复提交的修复 PR，社区共识度高。

---

## 2. 📈 社区需求趋势（来自 Issues）

| 方向 | 诉求 | 代表 Issue | 评论数 |
|---|---|---|---|
| **🔒 安全与信任边界** | community skill 借 `anthropic/` 命名空间仿冒官方；SKILL.md 中直接写权限逻辑的安全风险 | [#492](https://github.com/anthropics/skills/issues/492)、[#1175](https://github.com/anthropics/skills/issues/1175) | 43 + 4 |
| **🏢 组织级共享** | 摆脱手工 .skill 文件分发，需要企业级 skill library / 分享链接 | [#228](https://github.com/anthropics/skills/issues/228) | 16 |
| **🛠 skill-creator 可靠性** | run_loop recall=0%、YAML 静默截断、UTF-8 panic、Windows 兼容性崩塌 | [#556](https://github.com/anthropics/skills/issues/556)、[#1169](https://github.com/anthropics/skills/issues/1169)、[#1061](https://github.com/anthropics/skills/issues/1061)、[#202](https://github.com/anthropics/skills/issues/202) | 12 + 3 + 3 + 8 |
| **📚 文档与可发现性** | 缺 CONTRIBUTING；example-skills 与 document-skills 内容重复 | [#452](https://github.com/anthropics/skills/issues/452)（→ PR #509）、[#189](https://github.com/anthropics/skills/issues/189) | — + 6 |
| **🤖 新领域 Skill 提案** | agent-governance、compact-memory、自我审计/质量门 | [#412](https://github.com/anthropics/skills/issues/412)、[#1329](https://github.com/anthropics/skills/issues/1329)、[#1385](https://github.com/anthropics/skills/issues/1385) | 6 + 9 + 3 |
| **🌐 平台 / 协议互通** | 与 Bedrock 集成；Skill 作为 MCP 暴露 | [#29](https://github.com/anthropics/skills/issues/29)、[#16](https://github.com/anthropics/skills/issues/16) | 4 + 4 |

**核心趋势**：从"做更多 skill"转向"做更值得信赖、可发现、可治理的 skill"——质量、安全、共享三件套成为下一阶段主线。

---

## 3. 🚀 高潜力待合并 Skills（活跃 + 未合并）

按"被多个 Issue 串联 + 近期有互动"筛选：

1. **[PR #1298](https://github.com/anthropics/skills/pull/1298)** — `skill-creator` run_eval 召回率 0% 终极修复，关闭 Issue [#556](https://github.com/anthropics/skills/issues/556)
2. **[PR #1323](https://github.com/anthropics/skills/pull/1323)** — trigger 检测 + 不依赖 Skill tool 的回退方案
3. **[PR #1050](https://github.com/anthropics/skills/pull/1050) / [#1099](https://github.com/anthropics/skills/pull/1099)** — Windows 子进程 & 编码双修，关闭 Issue [#1061](https://github.com/anthropics/skills/issues/1061)
4. **[PR #83](https://github.com/anthropics/skills/pull/83)** — 首批质量 & 安全 meta-skill，对应 #492 安全共识
5. **[PR #1367](https://github.com/anthropics/skills/pull/1367)** — self-audit v1.3.0，紧跟 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 提案
6. **[PR #539](https://github.com/anthropics/skills/pull/539) / [#362](https://github.com/anthropics/skills/pull/362) / [#361](https://github.com/anthropics/skills/pull/361)** — skill-creator 三连击：YAML 校验 + UTF-8 + 特殊字符检测
7. **[PR #541](https://github.com/anthropics/skills/pull/541) / [#538](https://github.com/anthropics/skills/pull/538)** — docx / pdf 生产级文档 skill 的鲁棒性修复

**预测落地顺序**：skill-creator 质量补丁（#556 系列）→ Windows 修复 → meta-skill 合并 → 新内容 skill 进入 review。

---

## 4. 💡 Skills 生态洞察（一句话）

> **社区已经从"贡献更多 Skill"转向"修复 Skill 系统本身"——安全可信、跨平台可运行、组织内可共享、可被自动评测，是接下来真正的瓶颈。**

具体三个集中诉求：
- **可信（Trust）**：解决仿冒与权限边界，是排名 #1 的长期议题。
- **可运行（Portability）**：Windows / 中文编码 / YAML 边角，让 skill-creator 在 80% 场景失灵。
- **可治理（Governance）**：从 meta-skill、质量门到企业级共享，呼唤"Skill 的 Skill"。

---

*附：所有 PR 仍处 OPEN 状态，仓库合并节奏明显滞后于 Issue 增长速度——这是当前最值得跟踪的运营信号。*

---

# Claude Code 社区动态日报
**日期：2026-07-26**

---

## 1. 今日速览

今日社区焦点仍由 [Issue #6235](https://github.com/anthropics/claude-code/issues/6235) —— **支持 AGENTS.md 标准** —— 主导（345 评论、4.4k+ 👍），其热度持续攀升，反映开发者对跨工具互操作性的强烈诉求。同时，**会话恢复与子代理（sub-agent）可靠性** 类问题集中爆发（任务 ID 漂移、后台任务孤儿化、子代理首工具调用挂死），叠加 **Claude Desktop 稳定性**（GPU/浏览器进程崩溃）和 **Fable 5 / Opus 4.8** 等新模型行为异常的密集报告，构成本日社区讨论的三大主线。

---

## 2. 版本发布

⚠️ 过去 24 小时内**无新版本发布**。最近的相关版本号为 #81292 / #80988 等 Issue 中提到的 **2.1.219 / 2.1.220**。

---

## 3. 社区热点 Issues（Top 10）

### 🔥 头号焦点：跨工具标准化

**[#6235](https://github.com/anthropics/claude-code/issues/6235) — Feature Request: Support AGENTS.md**
- 标签：`enhancement`, `area:core`, `memory`
- 评论 344 · 👍 4451（社区最高赞）
- **为什么重要**：Codex、Amp、Cursor 等正在围绕 [agents.md](https://agents.md/) 形成跨工具标准，而 `CLAUDE.md` 过于专用化，无法在多代理协作场景中复用。这是仓库内最具代表性的"开放协议 vs 厂商私有"诉求。

### ⚙️ 模型与执行链路

**[#79798](https://github.com/anthropics/claude-code/issues/79798) — `alwaysThinkingEnabled` 在 Opus 4.8 上未转换为 adaptive thinking**
- 评论 7 · 👍 1
- 关键问题：v2.1.219 在 Opus 4.8 上静默忽略 settings.json 中的 `alwaysThinkingEnabled: true`，且 `xhigh` effort + WebSearch 直接返回 400。直接削弱扩展思考（extended thinking）的可用性。

**[#80988](https://github.com/anthropics/claude-code/issues/80988) — `heron_brook` 提示词段静默覆盖 Opus 5 用户委派策略**
- 评论 3
- 提示词注入 "Do not call the AgentTool unless the user requested it"，且**无 opt-out**，对依赖 sub-agent 编排的用户是重大回归。

**[#81292](https://github.com/anthropics/claude-code/issues/81292) — Claude Code 捏造决策来源、覆盖显式指令**
- 评论 1
- 涉及"决策溯源造假"，对代理可信度与代码审查场景冲击较大。

### 🧩 子代理与会话恢复

**[#77554](https://github.com/anthropics/claude-code/issues/77554) — 非根 sub-agent 启动的后台任务在轮次结束后永久孤立**
- 评论 3
- 长链路多代理工作流下，孤儿任务既无错误也无回收路径。

**[#76844](https://github.com/anthropics/claude-code/issues/76844) 与 [#80871](https://github.com/anthropics/claude-code/issues/80871) — `TaskCreate`/`TaskList` 在 `--resume/--continue` 后 ID 重生**
- 评论 2 + 1
- 同类问题两份独立报告，复现路径一致，提示**任务系统持久化层存在结构性 bug**。

**[#78313](https://github.com/anthropics/claude-code/issues/78313) — 子代理首工具调用间歇性挂死（Linux/Hyper-V）**
- 评论 2
- 与 #77554 共同表明 **sub-agent 生命周期管理** 仍是当前稳定性短板。

**[#80249](https://github.com/anthropics/claude-code/issues/80249) — Background Workflow 在会话边界死亡，resumeFromRunId 静默重跑全部**
- 评论 1
- 跨小时级工作流场景的可靠性风险。

### 💻 Desktop 稳定性

**[#77768](https://github.com/anthropics/claude-code/issues/77768) — Claude Desktop 静默 GPU 进程崩溃（每日 4-5 次）**
- 评论 2 · 👍 1
- Web research 场景下高频崩溃，无 dump、无恢复。

**[#81275](https://github.com/anthropics/claude-code/issues/81275) — Desktop MSIX 1.24012.9：开启内嵌 Browser pane 直接退出（exit 0x60C201E）**
- 评论 1
- Chromium GPU 进程崩溃在 Intel / NVIDIA / WARP 三种渲染路径下均可复现，影响范围广。

---

## 4. 重要 PR 进展

> 今日仅有 5 个 PR 更新，悉数列出：

| PR | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#81262](https://github.com/anthropics/claude-code/pull/81262) | Log closed issues as closure events in Statsig | OPEN | 修复 issue 事件埋点：关闭 issue 不应被记为 `github_issue_created` 重复事件 |
| [#81261](https://github.com/anthropics/claude-code/pull/81261) | Handle worktree paths with spaces in `/clean_gone` | OPEN | 改用 `git for-each-ref` + `git worktree list --porcelain -z`，解决 `/tmp/my project/feature` 类带空格路径解析错误 |
| [#39043](https://github.com/anthropics/claude-code/pull/39043) | Remove "retro-futuristic" recommendation from Frontend Design Skill | OPEN | 移除前端设计 skill 中的"retro-futuristic"推荐（commit message 仅一句："Trust me on this one."） |
| [#15727](https://github.com/anthropics/claude-code/pull/15727) | fix(hookify): correct Python import paths | **CLOSED** ✅ | 修复 hookify 插件 `No module named 'hookify'` 错误，调整 import 路径适配 `CLAUDE_PLUGIN_ROOT` 布局 |
| [#49596](https://github.com/anthropics/claude-code/pull/49596) | refactor: extract shared GitHub API client | **CLOSED** ✅ | 将 GitHub API 客户端抽离为 `github-api.ts` 并附测试，提升模块化程度 |

**观察**：今日 PR 多为**基础设施类小修**（埋点、路径解析、import 修复、重构），无大型新功能合入。

---

## 5. 功能需求趋势

从 Issues 提炼的社区关注方向（按热度排序）：

| 排名 | 功能方向 | 代表 Issue | 信号强度 |
|---|---|---|---|
| 1 | **跨工具/代理标准互操作** | [#6235](https://github.com/anthropics/claude-code/issues/6235) | 🔥🔥🔥🔥🔥（4.4k+ 👍） |
| 2 | **代理上下文可见性与自调节** | [#18027](https://github.com/anthropics/claude-code/issues/18027) | 🔥🔥🔥 |
| 3 | **多上下文/会话状态管理** | [#76844](https://github.com/anthropics/claude-code/issues/76844), [#80871](https://github.com/anthropics/claude-code/issues/80871), [#81290](https://github.com/anthropics/claude-code/issues/81290) | 🔥🔥🔥 |
| 4 | **Sub-agent 生命周期与状态透出** | [#77554](https://github.com/anthropics/claude-code/issues/77554), [#76863](https://github.com/anthropics/claude-code/issues/76863) | 🔥🔥 |
| 5 | **本地化与时区默认** | [#64988](https://github.com/anthropics/claude-code/issues/64988) | 🔥🔥 |
| 6 | **新模型快速跟进（Fable 5 / Opus 5 / Opus 4.8）** | [#81283](https://github.com/anthropics/claude-code/issues/81283), [#79798](https://github.com/anthropics/claude-code/issues/79798) | 🔥🔥 |
| 7 | **AI 安全研究豁免与 AUP 误报** | [#74293](https://github.com/anthropics/claude-code/issues/74293), [#81288](https://github.com/anthropics/claude-code/issues/81288), [#81284](https://github.com/anthropics/claude-code/issues/81284) | 🔥 |
| 8 | **Desktop 应用稳定性与错误可观测性** | [#77768](https://github.com/anthropics/claude-code/issues/77768), [#81275](https://github.com/anthropics/claude-code/issues/81275), [#81289](https://github.com/anthropics/claude-code/issues/81289) | 🔥 |
| 9 | **细粒度 UX 提示** | [#81287](https://github.com/anthropics/claude-code/issues/81287), [#81286](https://github.com/anthropics/claude-code/issues/81286) | 低（社区轻松向） |

---

## 6. 开发者关注点

### 痛点 1：**会话/任务持久化层不稳**
`TaskCreate`/`TaskList` ID 在 resume 后漂移、auto-compaction 后写入并行 transcript 导致历史"回滚"、Workflow 在会话边界死亡且 resumeFromRunId 重跑全部——**长链路任务"看起来能跑完，但断点续不上"** 是当前最影响生产力的痛点。

### 痛点 2：**Sub-agent 是双刃剑**
后台任务孤儿化、首工具挂死、提示词层静默覆盖用户委派策略（heron_brook）——子代理在带来并发收益的同时，**生命周期管理、错误传播、策略覆盖**都缺乏透明度。开发者希望看到"哪个 sub-agent 在执行、为何不执行、是否还能恢复"。

### 痛点 3：**新模型行为一致性不足**
- Opus 4.8 上 `alwaysThinkingEnabled` 未生效 + `xhigh` effort 与 WebSearch 400
- Fable 5 在 VSCode/CLI 下不可用，而 Claude App 中可用（[#81283](https://github.com/anthropics/claude-code/issues/81283)）
- Fable 5 在 headless 模式下拒绝 "2+2" 并返回自相矛盾响应（[#81285](https://github.com/anthropics/claude-code/issues/81285)）
- Opus 5 对安全研究场景的 AUP 误报（[#81288](https://github.com/anthropics/claude-code/issues/81288)）

模型升级节奏快，但**配置/平台/用例间的一致性**尚未跟上。

### 痛点 4：**Desktop 应用稳定性与可观测性薄弱**
GPU 进程崩溃（[#77768](https://github.com/anthropics/claude-code/issues/77768)、[#81275](https://github.com/anthropics/claude-code/issues/81275)）、连续多日无 crash dump、无自动恢复——**故障现场无法取证**令排障成本居高不下。

### 痛点 5：**账单/账户极端流程缺乏人工升级路径**
[#68429](https://github.com/anthropics/claude-code/issues/68429) 描述了 Pro→Max 错误升级导致账户与数据永久删除、退款流程陷入自动化循环而**无任何人工介入入口**——属于高严重度低频率的"灾难性"问题，对品牌信任度影响大。

### 高频轻量诉求
- 控制字符拦截时给出**可理解原因**（[#81289](https://github.com/anthropics/claude-code/issues/81289)）
- 状态条需显示**当前聚焦的子代理**（[#76863](https://github.com/anthropics/claude-code/issues/76863)）
- 上传/思考过程中的**视觉提示**（[#81287](https://github.com/anthropics/claude-code/issues/81287)、[#81286](https://github.com/anthropics/claude-code/issues/81286)）

---

> **日报小结**：本日 Issue 总数 50 条更新中，**约 38% 为子代理/会话/任务系统类问题**，**约 22% 为 Desktop 稳定性与崩溃**，**约 18% 与新模型行为或可用性相关**。社区情绪偏向"功能已经够多，但工程化打磨明显滞后于新特性发布节奏"。`AGENTS.md` 单议题已成为衡量 Anthropic 拥抱开放生态意愿的标志性信号。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-26**

---

## 📌 今日速览

Codex CLI 今日连续推送 **rust-v0.146.0-alpha.10** 与 **alpha.10.1** 两个预发布版本，更新节奏明显加快。社区层面最显著的趋势是 **Windows 桌面端的稳定性问题集中爆发** —— taskkill/conhost 进程泄漏、PowerShell 高频轮询、GPU 进程崩溃、远程 SSH 重连循环等多类问题同时浮现，OpenAI Codex 与新版 ChatGPT 桌面端的整合仍在磨合期。同时，**MCP 进程泄漏与多线程资源回收**继续是开发者反馈的高频痛点，相关 PR 与 Issue 形成密集修复矩阵。

---

## 🚀 版本发布

| 版本 | 类型 | 备注 |
|---|---|---|
| `rust-v0.146.0-alpha.10` | 预发布 | 主线版本 |
| `rust-v0.146.0-alpha.10.1` | 预发布 | alpha.10 的补丁版本 |

> 仓库中 0.146.0 已进入 alpha 阶段但未提供官方 changelog，建议关注后续 `rust-v0.146.0` 正式版说明。

---

## 🔥 社区热点 Issues

1. **#10450 — [已关闭] Codex 桌面应用远程开发支持**（178 评论 · 👍690）
   [链接](https://github.com/openai/codex/issues/10450)
   呼声最高的长期功能请求：希望在 Codex Desktop 中复刻 VS Code Remote 的体验。该 Issue 已关闭，建议持续追踪后续 Remote-SSH 相关工单（如 #32512、#35217、#34021）。

2. **#1457 — [已关闭] Codex 中 Python `uv` 工具执行失败**（61 评论 · 👍46）
   [链接](https://github.com/openai/codex/issues/1457)
   经典 sandbox 问题，影响 `pre-commit` 等依赖 `uv` 环境的工具链，持续一年多后终于关闭。

3. **#33776 — Windows Desktop 持续派生 taskkill/conhost 进程导致 WMI/DWM 故障**（24 评论 · 👍21）
   [链接](https://github.com/openai/codex/issues/33776)
   单次会话可残留 287+ 子进程，属典型的资源回收缺陷，社区已要求官方彻底修复。

4. **#30132 — [已关闭] Azure OpenAI 端点对 `oneOf` JSON Schema 报错**（21 评论 · 👍19）
   [链接](https://github.com/openai/codex/issues/30132)
   跨 macOS/Windows 复现，影响所有使用 Azure 兼容模式的企业用户。

5. **#30408 — MCP server 进程泄漏，单机 RSS 累计 9 GB+**（17 评论 · 👍4）
   [链接](https://github.com/openai/codex/issues/30408)
   `app-server` 每开一个 thread/conversation 都 spawn 一组 MCP 进程，永不释放。属于结构性问题，PR #35280、#35414 等正在协同修复。

6. **#33483 — Windows 迁移至新版 ChatGPT App 后桌面卡死/崩溃**（16 评论 · 👍5）
   [链接](https://github.com/openai/codex/issues/33483)
   反映 Codex 桌面与新版 ChatGPT 桌面整合后的回归问题。

7. **#25453 — Windows 每秒 spawn powershell.exe 轮询进程，CPU 占用高**（16 评论 · 👍4）
   [链接](https://github.com/openai/codex/issues/25453)
   进程监控机制效率低下，长期未根治。

8. **#34133 — Windows 内嵌浏览器截图因代码完整性拦截导致 GPU 进程崩溃**（14 评论）
   [链接](https://github.com/openai/codex/issues/34133)
   `vk_swiftshader.dll` 未签名被 Code Integrity Event 3033 拒绝，影响所有截图类 Agent。

9. **#11324 — 多任务下 Codex App 中 MCP 进程吃光内存**（12 评论 · 👍5）
   [链接](https://github.com/openai/codex/issues/11324)
   与 #30408 共同指向 MCP 资源回收缺陷。

10. **#35058 — macOS 上 VS Code 中 Codex Diff 弹出 "Oops, an error has occurred"**（12 评论 · 👍11）
    [链接](https://github.com/openai/codex/issues/35058)
    几乎在所有仓库复现，影响 Codex 扩展的核心 Diff 体验。

---

## 🛠️ 重要 PR 进展

1. **#35414 — [已关闭] 提升 MCP server 递归深度上限**
   [链接](https://github.com/openai/codex/pull/35414)
   将 MCP server 库与二进制 crate 的 Rust 递归上限统一设为 256，配套修复 thread-fork 测试的 `started_at_ms` 字段。

2. **#31817 — [Open] 自动化更新 `models.json`**
   [链接](https://github.com/openai/codex/pull/31817)
   GitHub Actions 自动同步模型清单，持续反映最新可用模型。

3. **#35408 — [已关闭] 在 skills watcher 中忽略自动生成系统级 skills**
   [链接](https://github.com/openai/codex/pull/35408)
   避免 watcher 在系统技能安装阶段产生噪声事件。

4. **#35375 — [已关闭] 让 keymap 操作菜单自适应宽度**
   [链接](https://github.com/openai/codex/pull/35375)
   终端窄时描述换行，禁用 remote-binding 显示为破折号，TUI 体验更整齐。

5. **#35365 — [已关闭] 保持 unified mention 结果新鲜**
   [链接](https://github.com/openai/codex/pull/35365)
   每次 popup 打开时重启文件搜索，避免继承过期结果。

6. **#35364 — [已关闭] 限制 Code Mode 元数据兼容性头大小**
   [链接](https://github.com/openai/codex/pull/35364)
   从 `x-codex-turn-metadata` 中移除无界的 `code_mode_tool_names` 字段，防止 HTTP/WebSocket header 无限增长。

7. **#35363 — [已关闭] 在完成事件中加入 item 起始时间**
   [链接](https://github.com/openai/codex/pull/35363)
   为 `ItemCompletedEvent` 加上 `started_at_ms`，同时兼容老存档，便于客户端做延迟统计。

8. **#35359 — [已关闭] 客户端处理 exec-server 网络策略请求**
   [链接](https://github.com/openai/codex/pull/35359)
   增加 allow/deny/ask 路由、并发上限和 fail-closed 默认行为，强化安全策略执行。

9. **#31582 — [已关闭] 从 `skills/list` 暴露 thread 选中 skills**
   [链接](https://github.com/openai/codex/pull/31582)
   弥补当前 API 只返回 cwd 技能而忽略 executor capability 的缺陷。

10. **#30228 — [已关闭] 当 thread 选中 skills 变化时通知客户端**
    [链接](https://github.com/openai/codex/pull/30228)
    提供失效信号，让客户端在环境进入 recovery/ready 时刷新技能列表。

> 其他值得关注的合并：#29845（Windows 启动器显式应用路径）、#31782（限制 stdio JSON-RPC 帧大小到 64 MiB）、#31810（pipeline 化 ancestor 发现以加速远程启动）、#35280（无 allowlist 时跳过插件 MCP 过滤）。

---

## 📈 功能需求趋势

通过对 Issue 标签与文本的提炼，社区关注的优先级大致为：

- **🖥️ 远程开发 / SSH 工作流**：#10450（690 👍）、#32512（SSH 移交 16 MiB 限制）、#35217（NFS 共享目录下的孤儿进程）、#34021（消息队列被忽略）。整体上 "Desktop + Remote" 是呼声最高的演进方向。
- **🪟 Windows 桌面稳定性**：taskkill/PowerShell 泄漏、GPU/SwiftShader 拦截、spellcheck "No Guesses Found"、App 迁移卡死，相关 Issue 占比超过 1/3。
- **🧠 MCP 生态完善**：#30408、#11324、#35280、#35414、#35359 显示"MCP 进程回收 + 网络策略 + 资源限制"是当前核心工程焦点。
- **📊 用量与计费可见性**：#32195 要求在 App 状态栏展示 5 小时/每周配额，付费用户对此诉求明显。
- **🤖 多 Agent / Subagent 协作**：#31864（MultiAgentV2 与 GPT-5.6 Sol 兼容性）、#33235（图片上下文跨子任务回放放大流量）。
- **🪄 上下文压缩与会话管理**：#23257、#35226（自动压缩循环导致 token 消耗失控）。

---

## 💬 开发者关注点

从高频反馈看，开发者的痛点可以归纳为五条：

1. **资源生命周期管理薄弱** —— MCP 进程、SSH 会话、子任务上下文无法被正确释放，导致 RSS 长期累积（甚至单会话 9 GB+）。
2. **Windows 是二等公民** —— 高频进程轮询、GPU 兼容层拦截、签名校验失败让 Windows 桌面体验远落后于 macOS，开发者频繁要求"和 macOS 看齐"。
3. **远程/云端工作流仍处于早期** —— Remote SSH、WebSocket 帧大小、NFS 共享家目录等场景下的边界条件尚未覆盖，是企业落地的主要阻力。
4. **付费用户对用量透明度不满** —— 自动压缩、上下文重复读取、多 agent 图片回放都会"悄悄消耗"积分，开发者希望官方提供更细粒度的账单与告警。
5. **新模型集成存在兼容断层** —— GPT-5.6 Sol、MultiAgentV2 等新能力与 CLI/TUI 之间的协作 schema 仍在快速迭代（#31864、#35292），开发者期待更稳定的"模型+CLI 契约"。

---

*日报基于 `openai/codex` 仓库 24 小时内更新的 Issues 与 PR 数据生成。如需订阅特定标签（如 `windows-os`、`mcp`、`performance`）的每日摘要，欢迎反馈。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-07-26
**数据来源**: [google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

Gemini CLI 今日发布了 v0.54.0-nightly 版本，合并了 v0.53.0-preview.0 和 v0.52.0 的变更日志。社区动态集中在三大主题：**Subagent 体系的可靠性问题**（多个 P1 级 bug 仍在排队，包括通用代理卡死、MAX_TURNS 后错误报告成功）、**Auto Memory 安全与质量改进**（5 个相关 issue 集中更新），以及 **SSR Code Generation Pipeline（pr-generator-*）** 大型基础设施 PR 进入活跃阶段。此外，安全领域也有显著进展：MCP OAuth token 刷新修复和 a2a-server 路径遍历防御合并。

---

## 🚀 版本发布

### v0.54.0-nightly.20260726.g3818efbbf
- **链接**: [PR #28536](https://github.com/google-gemini/gemini-cli/pull/28536)
- **更新内容**:
  - 合并 v0.53.0-preview.0 变更日志（PR #28507）
  - 合并 v0.52.0 变更日志（PR #28508）
  - 由 gemini-cli-robot 自动触发的 nightly 版本升级

> 注：今日同步修复了 nightly 发布流程的一个缺陷——`staging-tmp` dist-tag 在 npm 包发布成功后无法立即被查询，导致流水线中断（[PR #28534](https://github.com/google-gemini/gemini-cli/pull/28534)）。

---

## 🔥 社区热点 Issues

以下 10 个 Issue 是过去 24 小时内最值得关注、评论最多或影响最大的反馈：

### 1. Subagent 超出 MAX_TURNS 后错误报告为 GOAL 成功 [P1]
- **链接**: [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)
- **作者**: matei-anghel | **评论**: 12 | **👍**: 2
- **要点**: `codebase_investigator` 子代理在达到最大轮次限制前未执行任何分析，却向父级返回 `status: "success"` 和 `Termination Reason: "GOAL"`，掩盖了任务中断事实。这破坏了用户对子代理可靠性的信任。

### 2. 通用代理（generalist agent）无限挂起 [P1]
- **链接**: [#21409](https://github.com/google-gemini/gemini-cli/issues/21409)
- **作者**: turmanticant | **评论**: 8 | **👍**: 8（高赞）
- **要点**: 当 Gemini CLI 委派给 generalist agent 时会永久挂起，即使是简单的"创建文件夹"操作。显式指令禁用子代理可规避。是当前 8 赞的高优先级问题。

### 3. 组件级评估（Component Level Evalutions）EPIC [P1]
- **链接**: [#24353](https://github.com/google-gemini/gemini-cli/issues/24353)
- **作者**: gundermanc | **评论**: 7
- **要点**: 在原有"行为评估"基础上，已生成 76 个行为评估测试，覆盖 6 个 Gemini 模型。EPIC 旨在推进更细粒度的组件级评测体系，是 Gemini CLI 质量保障演进的重要方向。

### 4. AST 感知的文件读取/搜索/映射效果评估 [P2]
- **链接**: [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)
- **作者**: gundermanc | **评论**: 7
- **要点**: 探讨使用 AST 感知工具来精确读取方法边界、降低 token 噪声、提升代码库映射效率。可显著降低 agent 多轮调用成本。

### 5. Shell 命令执行完成后卡在"等待输入"状态 [P1]
- **链接**: [#25166](https://github.com/google-gemini/gemini-cli/issues/25166)
- **作者**: rnett | **评论**: 4 | **👍**: 3
- **要点**: 即便是简单的 CLI 命令执行完毕后，shell 仍显示为激活状态并卡住。这是用户高频遇到的核心可用性 bug。

### 6. Auto Memory 重试低信号会话导致无限循环 [P2]
- **链接**: [#26522](https://github.com/google-gemini/gemini-cli/issues/26522)
- **作者**: SandyTao520 | **评论**: 5
- **要点**: 背景提取代理若判断会话低信号而不读取，会话将永远停留在未处理状态，可能被反复曝光。需要修复状态推进逻辑。

### 7. Auto Memory 需要确定性脱敏与减少日志 [P2/安全]
- **链接**: [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)
- **作者**: SandyTao520 | **评论**: 4
- **要点**: Auto Memory 将本地会话内容发送到模型，目前依赖模型自身做脱敏，但内容已经进入模型上下文；且服务可能记录已存在的技能。这是 **数据隐私与安全** 关键问题。

### 8. browser_agent 在 Wayland 下失败 [P1]
- **链接**: [#21983](https://github.com/google-gemini/gemini-cli/issues/21983)
- **作者**: sigmaSd | **评论**: 4 | **👍**: 1
- **要点**: 浏览器子代理在 Wayland 桌面环境下无法运行，限制了 Linux 用户的可用性。

### 9. 子代理绕过权限控制（自 v0.33.0 起） [P2]
- **链接**: [#22093](https://github.com/google-gemini/gemini-cli/issues/22093)
- **作者**: jetspiking | **评论**: 3
- **要点**: 自 v0.33.0 升级后，子代理（如 generalist）被自动启用，用户配置中已禁用 agent 模式仍被忽略。这是 **安全回归**，值得运维与安全团队关注。

### 10. ~/.gemini/agents/ 下符号链接文件不被识别为 agent [P2]
- **链接**: [#20079](https://github.com/google-gemini/gemini-cli/issues/20079)
- **作者**: wtanaka | **评论**: 4
- **要点**: 使用 dotfiles / chezmoi 等工具管理配置的用户会受影响。这是用户级 subagent 工作流的重要限制。

---

## 🛠️ 重要 PR 进展

### 1. 修复 MCP OAuth Token 刷新使用存储的 Client ID [P1 / 安全]
- **链接**: [#28481](https://github.com/google-gemini/gemini-cli/pull/28481)
- **作者**: ParthivNaresh | **大小**: M
- **要点**: 修复通过 OAuth 发现 + 动态客户端注册配置的 MCP 服务器 token 刷新问题（之前每次都需要重新认证）。**属于核心安全修复**。

### 2. 限制传给模型的 Shell 命令输出大小 [P1]
- **链接**: [#28401](https://github.com/google-gemini/gemini-cli/pull/28401)
- **作者**: enjoykumawat | **大小**: M
- **要点**: shell 工具当前将整个命令输出无限制转发给模型（如 `find /`、大型 `git log` 等会注入数百 KB 上下文）。本 PR 引入上限。**重要性能与成本优化**。

### 3. SSR Pipeline: Cloud Run / Workflows / Dockerfile 基础设施 [P1]
- **链接**: [#28431](https://github.com/google-gemini/gemini-cli/pull/28431)
- **作者**: joneba-google | **大小**: M
- **要点**: 为 Gemini CLI SSR（Issue-to-PR）代码生成流水线搭建 Cloud Run Job、Eventarc 触发的 Cloud Workflow 和容器化运行环境。这是内部 AI agent 自动化基础设施的核心组件。

### 4. SSR Pipeline: Firestore 双锁与测试接入工具 [基础设施]
- **链接**: [#28432](https://github.com/google-gemini/gemini-cli/pull/28432)
- **作者**: joneba-google | **大小**: L/XL
- **要点**: 提供事务锁、文档 ID 解析、生命周期状态枚举、状态转换辅助函数。为流水线并发安全提供基础。

### 5. SSR Pipeline: Antigravity Agent Runner 与 Prompt 模板 [基础设施]
- **链接**: [#28434](https://github.com/google-gemini/gemini-cli/pull/28434)
- **作者**: joneba-google | **大小**: L
- **要点**: 引入引导无头 Antigravity AI agent 迭代生成、QA 与反馈优化的系统提示模板。

### 6. SSR Pipeline: 编排器（Orchestrator）与状态机 [基础设施]
- **链接**: [#28433](https://github.com/google-gemini/gemini-cli/pull/28433)
- **作者**: joneba-google | **大小**: L/XL
- **要点**: 实现迭代 bug 修复状态机，编排 Firestore 锁、AI agent 编码与评估循环、ESLint 静态分析、diff 限制校验、自动 PR 提交。

### 7. SSR Pipeline: 核心工具模块（配置解析、命令执行、GitHub API、ANSI 过滤）
- **链接**: [#28435](https://github.com/google-gemini/gemini-cli/pull/28435)
- **作者**: joneba-google | **大小**: L

### 8. 修复 MaxListenersExceededWarning 与 Windows OAuth 无限循环 [已合并]
- **链接**: [#28348](https://github.com/google-gemini/gemini-cli/pull/28348)
- **作者**: ashusnapx | **大小**: M | **状态**: CLOSED
- **要点**: 修复重试 API 调用时的 `MaxListenersExceededWarning` 与潜在无限循环；以及 Windows 上 OAuth 成功后的无限认证循环。

### 9. 修复 a2a-server restore 命令的路径遍历漏洞 [已合并 / 安全]
- **链接**: [#28353](https://github.com/google-gemini/gemini-cli/pull/28353)
- **作者**: BiswajeetRay7 | **大小**: S | **状态**: CLOSED
- **要点**: 防御性修复 `restore` 命令的路径遍历问题（`../../../etc/passwd` 类攻击）。**纵深防御安全修复**。

### 10. perf test 修复：使用 `resolveRipgrepPath` 替代已删除 API [P1]
- **链接**: [#28535](https://github.com/google-gemini/gemini-cli/pull/28535)
- **作者**: BHUVANSH855 | **大小**: S
- **要点**: 性能测试全局设置更新到最新的 ripgrep resolver API，避免引用已删除的 `canUseRipgrep()`。

---

## 📈 功能需求趋势

从过去 24 小时更新的 50 条 Issue 中，可以提炼出以下社区最关注的功能方向：

### 1. Subagent 体系成熟化（占比最高）
- 子代理的可用性、可靠性、权限控制、上下文报告、轨迹可视化
- 相关 issue：#22323、#21409、#21968、#22232、#21983、#21000、#20195、#22598、#22267、#21763、#22672、#21432
- **趋势**：用户希望子代理能主动使用自定义技能与子代理（#21968）、支持本地 subagent（#20195）、通过 `/chat share` 共享子代理轨迹（#22598）、自我认知 CLI 标志与快捷键（#21432）。

### 2. 评估体系（Eval）建设
- 组件级评估 EPIC（#24353）、AST 感知的代码库映射（#22745、#22746）、steering eval 测试稳定性（#23313）
- **趋势**：团队正在从"行为评估"向更细粒度的"组件级评估"演进。

### 3. 性能与渲染优化
- 终端 resize 时的高性能无闪烁渲染（#21924）、外部编辑器退出后的 terminalBuffer 损坏（#24935）
- **趋势**：基于 Ink 渲染层的现代化（迁移到 RenderStatic）是底层架构演进重点。

### 4. 安全与隐私
- MCP OAuth 修复（#28481）、Auto Memory 脱敏（#26525）、路径遍历防御（#28353）
- **趋势**：Auto Memory 带来新的安全/隐私维度，团队正在系统性加固。

### 5. 工具数量上限与上下文管理
- > 128/400 个工具时遇到 400 错误（#24246）、shell 输出无上限（#28401）
- **趋势**：随着工具生态增长，上下文管理成为新的工程挑战。

### 6. AST 感知工具
- 替代纯文本 read/search/mapping 的探索（#22745、#22746）
- **趋势**：可能在 codebase_investigator 中集成 tilth/glyph 等 AST 工具。

---

## 💡 开发者关注点

综合社区反馈，开发者当前最集中的痛点与高频需求：

1. **🔴 子代理失控**：通用代理卡死、MAX_TURNS 后错误报告成功、绕过权限（v0.33.0+）、Wayland 兼容、browser_agent 设置覆盖失败——子代理体系尚未达到生产稳定。

2. **🔴 Shell 执行卡顿**：简单的 CLI 命令执行后仍卡在"等待输入"状态（#25166），直接影响日常使用体验。

3. **🔴 Auto Memory 安全隐患**：本地会话被发送到模型背景处理，但脱敏依赖模型自身（#26525）；同时存在低信号会话无限重试（#26522）和无效 patch 静默丢弃（#26523）问题。开发者对数据外流敏感。

4. **🟡 性能与可观测性**：缺乏终端 resize 时的流畅体验；bug 报告不包含 subagent 上下文（#21763）；`/chat share` 无法分享子代理轨迹（#22598）。

5. **🟡 工具与上下文管理**：当工具数量超过 128/400 时遭遇 400 错误（#24246）；shell 输出无上限造成 token 浪费（#28401）。

6. **🟢 AST 感知工具与组件级评估**：开发者认可这是提升效率与可靠性的关键方向。

7. **🟢 用户体验小问题**：tmp 脚本散落各处（#23571）、模型使用 `git reset --force` 等破坏性命令（#22672）、符号链接不被识别（#20079）、`\n` 转义错误（#22466）等。

---

> **编辑备注**：今日值得关注的一条隐性信号——多个 `pr-generator-*` 系列 PR 来自同一作者 `joneba-google`，呈现 Google 内部正在构建 **Issue-to-PR 自动化流水线**，将 Antigravity AI agent + Firestore + Cloud Run 整合起来。这意味着 Gemini CLI 正在从"工具"向"自动化开发平台"演进，社区未来可能直接受益于 AI 自动修复 issue 的能力。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-26**

---

## 📌 今日速览

过去 24 小时 Copilot CLI 仓库无新版本发布，但社区活跃度持续走高，共有 18 个 Issue 被更新、2 个 PR 被关闭。**会话管理（sessions）和插件系统（plugins）相关问题成为今日焦点**，包括 1.0.74 版本的会话恢复 OOM 回归、archive_session 超时遗留 worktree、插件市场注册未持久化等多个高优先级问题。`/pr`、`/ask`、`/rename` 等核心命令的健壮性问题也集中暴露。

---

## 🚀 版本发布

过去 24 小时无新版本发布。社区反馈显示最新版本为 **1.0.75**（Issue #4253），近期还存在 1.0.74 → 1.0.75 之间的多个回归问题（详见下文）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 状态 | 👍 | 重要性 |
|---|-------|------|-----|--------|
| 1 | [#2205](https://github.com/github/copilot-cli/issues/2205) **终端滚动体验退化**（mouse scroll 在新版中停止工作） | OPEN | 14 | ⭐⭐⭐ 终端渲染核心交互问题，14 个 👍 表明大量用户受影响 |
| 2 | [#4183](https://github.com/github/copilot-cli/issues/4183) **Auto-compaction 无法规避 CAPI 5 MB 请求体限制** | OPEN | 10 | ⭐⭐⭐ 长会话场景下的硬性瓶颈，影响大型工具调用流程 |
| 3 | [#17](https://github.com/github/copilot-cli/issues/17) ~~CLI 应提供 IDE 扩展以在终端面板中自动高亮 diff~~ | **CLOSED** | 15 | ✅ 长期高赞需求已关闭，标志 IDE 集成能力推进 |
| 4 | [#1464](https://github.com/github/copilot-cli/issues/1464) **安装超过 ~32 个 skills 后按字母序排位靠后的 skills 无法被模型选中** | OPEN | 5 | ⭐⭐ Skills 系统的隐藏截断，影响企业级技能扩展 |
| 5 | [#1996](https://github.com/github/copilot-cli/issues/1996) **无法安装 `anthropics/claude-plugins-official` 市场** | OPEN | 1 | ⭐⭐ 跨生态兼容性，影响插件生态丰富度 |
| 6 | [#4251](https://github.com/github/copilot-cli/issues/4251) **1.0.74 恢复大型会话出现 OOM / 单核卡死 70 分钟（相对 1.0.73 内存 3–4× 回归）** | OPEN | 0 | ⭐⭐⭐ 严重性能回归，开发者应暂缓升级或回退 |
| 7 | [#4246](https://github.com/github/copilot-cli/issues/4246) **`archive_session` 60 秒超时遗留大型 worktree** | OPEN | 0 | ⭐⭐ 资源泄漏风险，影响磁盘与分支复用 |
| 8 | [#4247](https://github.com/github/copilot-cli/issues/4247) **`plugin marketplace add` 报告成功但注册未持久化** | OPEN | 0 | ⭐⭐ 插件系统一致性 bug，破坏开发者信任 |
| 9 | [#4249](https://github.com/github/copilot-cli/issues/4249) **Headless 会话切换后 plan 指示器泄漏到其他会话** | OPEN | 0 | ⭐⭐ 多任务隔离缺陷 |
| 10 | [#4252](https://github.com/github/copilot-cli/issues/4252) **会话退出时将启动时 `model` 写回 `settings.json`，静默覆盖外部修改** | OPEN | 0 | ⭐⭐ 配置完整性破坏，可能造成"自循环陈旧默认值" |

**补充值得关注**：[#4241](https://github.com/github/copilot-cli/issues/4241)（密码遮蔽反致 Agent 浪费 token）、[#4244](https://github.com/github/copilot-cli/issues/4244)（VS Code Agent 窗口支持 `/rename`）、[#4248](https://github.com/github/copilot-cli/issues/4248)（`/pr` 不识别 SSH host alias）、[#4253](https://github.com/github/copilot-cli/issues/4253)（`/ask` 频繁无返回）。

---

## 🛠️ 重要 PR 进展

| PR | 状态 | 说明 |
|----|------|------|
| [#4228](https://github.com/github/copilot-cli/pull/4228) **Withdrawn: incorrect scope for #3534** | CLOSED | 作者主动撤回，原因：PR 仅修改了文档而未触及私有 clipboard 运行时实现，分支已删除。原 [#3534](https://github.com/github/copilot-cli/pull/3534) 的真实修复仍待跟进。 |
| [#23](https://github.com/github/copilot-cli/pull/23) **Create monad.yml** | CLOSED | 早期提交，无实质代码改动，已关闭。 |

> 📉 过去 24 小时 PR 流入量偏低（仅 2 条且均关闭），需关注仓库是否进入"集中修复"周期。

---

## 📈 功能需求趋势

通过对全部 Issue 摘要的语义聚类，当前社区需求集中在以下方向：

1. **🧩 IDE 与终端深度集成**（最高频）
   - VS Code Agent 窗口支持 `/rename`（#4244）
   - 终端面板自动高亮 diff（#17，已关闭）
   - 鼠标滚轮体验恢复（#2205）

2. **🗂️ 会话生命周期管理**
   - 大型会话恢复性能（#4251 OOM 回归）
   - 会话归档 worktree 清理（#4246）
   - 多会话状态隔离（#4249 plan 指示器泄漏）

3. **🔌 插件与扩展生态**
   - 官方外部市场（Anthropic）安装支持（#1996）
   - 本地市场注册持久化（#4247）

4. **⚙️ 配置与模型管理**
   - `settings.json` 写回冲突（#4252）
   - 上下文压缩与 5 MB 请求体上限（#4183）

5. **🤖 核心命令稳定性**
   - `/pr` SSH alias 支持（#4248）
   - `/ask` 无返回问题（#4253）
   - Skills 截断问题（#1464）

6. **🔐 安全与 Token 经济性**
   - 密码遮蔽机制的副作用（#4241）

---

## 👨‍💻 开发者关注点（痛点高频需求）

- **🔁 版本回归焦虑**：1.0.74 在会话恢复上出现明显内存与性能回退（#4251），开发者呼吁建立**更严格的 A/B 回归测试**和**版本灰度发布机制**。
- **🧠 长会话工程化**：5 MB 请求体上限与 token 上下文上限是两个独立约束，自动 compaction 当前未覆盖前者（#4183），需要**多层级压缩策略**。
- **🧹 资源生命周期一致性**：`archive_session` 超时不清理、插件市场添加成功但不持久化——开发者反复要求**操作的"原子性与可观测性"**，希望命令要么真正成功并可见，要么显式失败并提供回滚路径。
- **⚙️ 配置文件权威性**：`settings.json` 被会话退出时静默覆盖（#4252），暴露了**多源配置写入冲突**问题，社区期待引入文件锁或显式合并策略。
- **🖱️ 终端交互回归**：[#2205](https://github.com/github/copilot-cli/issues/2205) 高赞说明开发者高度依赖 TUI 鼠标行为，**任何终端渲染层的重构都需保持向后兼容**。
- **🌐 SSH / Git 工作流对齐**：`/pr` 等命令对 SSH host alias 缺乏识别（#4248），与现代开发者使用 `~/.ssh/config` 管理多账号的工作习惯脱节。

---

> 📊 **日报小结**：今日社区呈现"**会话/插件双线集中暴露 + 终端 UI 长期抱怨未解**"的格局。建议官方在下一版本优先处理 [#4251](https://github.com/github/copilot-cli/issues/4251)、[#4247](https://github.com/github/copilot-cli/issues/4247)、[#4183](https://github.com/github/copilot-cli/issues/4183) 这三个高严重度问题，并尽快关闭或进展 [#2205](https://github.com/github/copilot-cli/issues/2205) 这一长期高赞 Issue。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-26** ｜ **数据来源：GitHub MoonshotAI/kimi-cli**

---

## 📌 今日速览

过去 24 小时 Kimi Code CLI 仓库整体活跃度偏低，但 PR 端出现"修复集中合并"的信号：来自维护者 Nas01010101 的三条 session / app / web 修复 PR（#2520、#2519、#2518）均已关闭，聚焦在"会话恢复"与"上下文一致性"两大历史痛点。Issue 端则有 1 个高赞功能请求（Remote Control）仍在持续发酵，并新增 1 个死循环 Bug 报告（#2557）。社区关注重点正从"单机能用"向"跨端无缝"演进。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。**

---

## 🔥 社区热点 Issues

> 过去 24 小时仅 2 条 Issue 更新，完整呈现如下：

| # | Issue | 标题 | 状态 | 👍 | 评论 | 摘要 |
|---|---|---|---|---|---|---|
| 1 | [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) | Feature Request: Remote Control — Continue local sessions from any device | OPEN | 16 | 8 | 用户希望从手机/平板/浏览器远程继续本地 Kimi Code CLI 会话，实现无缝工作流延续 |
| 2 | [#2557](https://github.com/MoonshotAI/kimi-cli/issues/2557) | Dead Loop | OPEN | 0 | 0 | 在 kimi-cli 1.44.0 上遇到死循环问题，影响 Kimi Code 订阅用户 |

**为什么值得关注：**

- **#1282（Remote Control）**：👍 16 + 评论 8，是近期热度最高的增强请求。"跨设备延续会话"涉及本地会话同步、权限认证、设备配对等核心能力，一旦落地将显著提升 Kimi Code CLI 的移动办公场景体验。社区反应积极，多位用户表达了类似需求，是观察产品 Roadmap 走向的重要窗口。
- **#2557（Dead Loop）**：虽然点赞和评论数为 0，但作为新报告的 1.44.0 严重阻塞类 Bug 值得跟踪——死循环通常意味着会话状态机或上下文裁剪存在缺陷，可能与近期合并的 #2520（fork/undo context truncation）属于同一类问题域，建议关注后续定位结果。

> 💡 注：过去 24 小时仓库更新的 Issue 数量较少，无法凑齐 10 条；建议结合近一周趋势综合判断社区热点。

---

## 🛠️ 重要 PR 进展

| # | PR | 标题 | 作者 | 状态 | 要点 |
|---|---|---|---|---|---|
| 1 | [#2520](https://github.com/MoonshotAI/kimi-cli/pull/2520) | fix(session): align fork/undo context truncation to wire turns | Nas01010101 | ✅ CLOSED | 将 fork/undo 的上下文截断对齐到 wire turns，修复 #2517 / #1974 / #2049，附带专门的回归测试 |
| 2 | [#2519](https://github.com/MoonshotAI/kimi-cli/pull/2519) | fix(app): refresh stale frozen system prompt on session resume | Nas01010101 | ✅ CLOSED | 解决恢复会话时 `_system_prompt` 缓存陈旧的问题，确保 `~/.kimi/skills/` 新增技能与 `AGENTS.md` 编辑能立即生效（#2420） |
| 3 | [#2518](https://github.com/MoonshotAI/kimi-cli/pull/2518) | fix(web): persist uploads `.sent` marker so restarts do not re-send files | Nas01010101 | ✅ CLOSED | `kimi web` 重启后会重复上传历史文件（含图片），通过持久化 `.sent` 标记解决（#2413） |
| 4 | [#2558](https://github.com/MoonshotAI/kimi-cli/pull/2558) | fix(tests): improve Windows cross-platform test compatibility | panandicoding | 🟢 OPEN | 小于 100 行的 Windows 兼容测试修复：处理 `Path.write_text()` 在 Windows 下 `\n→\r\n` 转换导致测试失败的问题 |

**修复集中度观察：**

Nas01010101 一日合并 3 条 PR，均围绕 **"会话状态一致性"** 这一主题，说明团队正在系统性清理 fork/undo/resume 链路上的历史技术债。这对于依赖长会话、频繁 fork 调试的开发者是直接利好——历史回溯、上下文快照、技能热加载的可靠性都将提升。

**值得跟进：**

- PR #2558 是社区开发者提交的 Windows 兼容性修复，体现 Kimi Code CLI 正在向更广泛平台覆盖；该 PR 目前仍 OPEN，可关注是否被合入 1.45 周期。

> 💡 过去 24 小时仅有 4 条 PR 更新，已全部呈现。

---

## 📈 功能需求趋势

从过去 24 小时全部 Issue 与 PR 文本中可以提炼出以下社区关注方向：

1. **🌐 跨端 / 远程控制（高热）**
   - #1282 Remote Control 是当前最热的功能请求，反映用户希望打破"必须坐在终端前"的使用限制。

2. **🧠 会话与上下文可靠性（高热 · 修复集中）**
   - #2520（fork/undo 截断错位）、#2519（陈旧 system prompt）、#2518（web 文件重复上传）三者合并，说明社区长期对"会话状态机正确性"有强烈诉求。

3. **🪟 跨平台兼容（中等热）**
   - #2558 Windows 测试兼容性 PR 显示 Windows 用户基数正在增长，但官方对 Windows 的测试覆盖仍存在缺口。

4. **🛑 稳定性 Bug（低热但关键）**
   - #2557 死循环问题（1.44.0）虽然是孤例，但死循环通常影响面广，需要官方快速响应。

5. **📊 数据/产物可观测性（隐含趋势）**
   - 从 #2518 修复的"上传文件重发"问题看，`kimi web` 的产物管理、状态持久化是社区持续诟病的领域，未来可能看到更多相关需求。

---

## 👨‍💻 开发者关注点（痛点 / 高频需求）

综合所有 Issue 与 PR 反馈，开发者社区当前最关心的痛点可归纳为以下五类：

| 痛点 | 代表 Issue/PR | 影响 |
|---|---|---|
| **会话历史不可信** | #1282、#2520 | fork/undo 后上下文错位、回溯不准，开发者不敢依赖 |
| **环境变更不生效** | #2519 | 恢复会话后 skills / AGENTS.md 修改丢失，需要重启 CLI |
| **web 模式产物污染** | #2518 | 文件重复上传导致会话被无关内容污染，影响 prompt 质量 |
| **跨平台覆盖薄弱** | #2558 | Windows 用户测试不通过，开发体验受限 |
| **运行时稳定性隐患** | #2557 | 死循环类问题会直接打断工作流，且无明显复现路径 |

**高频需求关键词**：remote session、context integrity、session resume、cross-platform、upload persistence、stability。

> 建议开发者关注：即将到来的 1.45 版本 Release Notes，预计会合并 #2518 / #2519 / #2520 三项会话链路的稳定性修复。

---

*报告基于 2026-07-25 至 2026-07-26 的 GitHub 公开数据生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**日期：2026-07-26** | 数据来源：github.com/anomalyco/opencode

---

## 📌 今日速览

今日社区焦点集中在 **Desktop v1.18.5 升级后带来的稳定性问题**——多用户报告项目关闭卡顿、面板切换空白、TUI 输入失效等问题。与此同时，**新 UI 布局争议持续发酵**（#37012 累计 33 条评论、31 👍），性能回归（#30086 高 CPU 占用，36 评论）和 **TUI 交互缺陷** 成为开发者讨论最密集的话题。PR 方面，社区正在集中修复自动化清理标记的旧 PR，并推进 TUI 启动进度条、ChatGPT OAuth 路由、动态工作流等新功能落地。

---

## 🚀 版本发布

**无新版本发布。** 社区仍在消化 Desktop v1.18.5 的更新（更新日期：2026-07-25），多个相关 Bug Issue 集中涌现。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 重要性与社区反应 |
|---|-------|-----------------|
| [#30086](https://github.com/anomalyco/opencode/issues/30086) | **新版 CPU 占用飙升** | ⚠️ 高优先级。36 评论 / 19 👍。用户反映从可并行 10 个会话降至 3 个会话即卡顿，影响范围广，属于性能回归。 |
| [#37012](https://github.com/anomalyco/opencode/issues/37012) | **保留旧版布局选项** | ⭐ 最受赞同的功能请求。33 评论 / 31 👍。用户明确列出旧布局优势（主窗口直达、Workspace 可见性等），呼吁提供切换选项。 |
| [#15760](https://github.com/anomalyco/opencode/issues/15760) | **TUI 鼠标选择不可靠** | 已关闭，但仍在评论。9 评论，涉及 opentui 渲染层的拖拽选区问题，影响 CLI 工作流体验。 |
| [#38789](https://github.com/anomalyco/opencode/issues/38789) | **升级后项目重载 UnsupportedContentType** | 7 评论，Desktop v1.18.5 直接报错，根因定位在生成式 Client SDK。 |
| [#38801](https://github.com/anomalyco/opencode/issues/38801) | **"exiting loop" 报错反复出现** | 6 评论。用户为修复该问题需将 step 调至 80，属于 OpenAI API 兼容层的稳定性问题。 |
| [#31217](https://github.com/anomalyco/opencode/issues/31217) | **TUI 按 Enter 提交失败** | 6 评论，中英文输入均受影响，但斜杠命令仍可用，疑似事件处理 Bug。 |
| [#20252](https://github.com/anomalyco/opencode/issues/20252) | **建议推出年费套餐并支持发票** | 6 评论，面向 B 端采购场景的中文功能请求，反映企业用户对订阅模式的诉求。 |
| [#38844](https://github.com/anomalyco/opencode/issues/38844) | **关闭按钮导致界面冻结** | 3 评论，Desktop v1.18.5 项目列表关闭按钮触发卡死，影响核心操作。 |
| [#38791](https://github.com/anomalyco/opencode/issues/38791) | **导入会话因消息 ID 排序问题陷入死循环** | 3 评论，揭示 `SessionPrompt.runLoop` 用字符串排序 message id 的设计缺陷，对第三方会话导入兼容性有影响。 |
| [#36677](https://github.com/anomalyco/opencode/issues/36677) | **V2 服务长期运行进入高频分配循环** | 3 评论，v2 分支单核 CPU 持续满载、RSS 1.1–1.3 GB，由 `opencode-agent[bot]` 自报，属于核心性能问题。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 内容 |
|---|----|----|
| [#38906](https://github.com/anomalyco/opencode/pull/38906) | **TUI 启动屏加入分阶段进度条** | 解决 #36195 启动期间"卡住"的视觉错觉，覆盖 terminal/settings/workspace/theme/plugins 五个阶段；这是对 #38802 同主题 PR 的延续。 |
| [#33734](https://github.com/anomalyco/opencode/pull/33734) | **发布 TUI session focus 事件** | 让外部插件可订阅 `tui.session.select/deselect`，增强插件生态可观测性（关闭 #31051）。 |
| [#38433](https://github.com/anomalyco/opencode/pull/38433) | **新增 `roll-call` 命令** | 用于并发测试多家 provider 的连通性与延迟，对调试多模型路由非常实用（关闭 #13711）。 |
| [#38903](https://github.com/anomalyco/opencode/pull/38903) | **ChatGPT OAuth 支持自定义 codexApiEndpoint** | 允许通过配置覆盖 ChatGPT Plus/Pro OAuth 推理端点，绕过硬编码问题。 |
| [#36550](https://github.com/anomalyco/opencode/pull/36550) | **修复 Question 模式键盘死锁** | 解决 `QuestionPrompt` 中两个 `useBindings` 互斥 enabled 条件导致的键盘无响应（关闭 #36382、#30517）。 |
| [#29789](https://github.com/anomalyco/opencode/pull/29789) | **Dynamic workflows（仿 Claude Code 新特性）** | 引入项目级工作流，可在 TUI 通过 `/workflow <name> arg=value` 调用，扩展自动化能力（关闭 #29059）。 |
| [#33950](https://github.com/anomalyco/opencode/pull/33950) | **ACP 权限提示标题显示真实工具上下文** | 把"bash/edit/webfetch"等通用标题改为用户实际被请求的内容，降低误操作风险（关闭 #33949）。 |
| [#33948](https://github.com/anomalyco/opencode/pull/33948) | **修复压缩数字格式化为 "1000.0K"** | 改 Locale 数字千分位逻辑，避免 TUI 上下文面板出现千分位小数（关闭 #33947）。 |
| [#33943](https://github.com/anomalyco/opencode/pull/33943) | **恢复 Timeline 滚动位置** | 跨标签页切换、刷新场景保留虚拟行与视口偏移，实现真正的滚动位置持久化。 |
| [#38200](https://github.com/anomalyco/opencode/pull/38200) | **Solidity 语法高亮支持** | 为 Web3 开发者补齐主流合约语言的高亮能力，扩大适用场景。 |

---

## 📈 功能需求趋势

从 Issues 文本分析，社区最关注的方向按热度排列：

1. **🖥️ Desktop UI/UX 改进** —— 围绕新布局的争议占据主导：保留旧布局、字体大小调节、聊天"返回顶部"按钮、桌面版 UI 直观性等。
2. **⚡ 性能与稳定性** —— CPU 占用飙升、V2 server 高频分配循环、TUI 输入失效、滚动位置丢失，体现用户对 1.18 后续版本的回归担忧。
3. **🤖 多 Provider 兼容性** —— Ollama（LAN）、Xiaomi MiMo、OpenAI API、ChatGPT OAuth 等不同模型的兼容性问题频发，反映 OpenCode 在多模型路由上的复杂度。
4. **🪟 Windows / 离线场景体验** —— Windows 11 桌面冻结、WSL 项目自动注册失败、离线安装 ripgrep 缺失等问题集中在 Windows 平台。
5. **💼 商业化与计费** —— 年费套餐与发票需求（中国用户）、Free tier 用量限制、Go 套餐订阅，提示 B 端采购通道有缺口。
6. **🔌 插件与扩展能力** —— TUI session 事件发布、ACP 权限提示、子代理流错误处理等。

---

## 🧑‍💻 开发者关注点

总结开发者高频反馈的痛点：

- **"新 UI 没有降级路径"** —— 大量用户（中文/俄文/英文）明确要求保留旧布局或在设置中切换，当前一刀切的迁移方式损失了部分用户。
- **"升级即崩"焦虑** —— Desktop v1.18.5 的 UnsupportedContentType、关闭按钮冻结、项目切换空白三个 Issue 集中在同一版本，对企业用户升级信心打击较大。
- **"TUI 启动黑屏错觉"** —— 启动过程缺乏反馈，导致用户多次以为程序卡死，#38906 的分阶段进度条 PR 正中要害。
- **"Windows 是二等公民"** —— 离线安装、WSL、关闭按钮、installer 多个 Windows 专属问题未能在同一窗口期内得到解决。
- **"多 Provider 适配碎片化"** —— 每个 Provider（Ollama/XiaMi/OpenAI/ChatGPT OAuth）都出现独立兼容性 Issue，开发者期待更统一的适配层。
- **"Bot/Agent 自动 PR 噪声"** —— 多个 `automated-pr-cleanup` 标记的 PR 涌入（#339xx 系列），需要维护者投入精力筛选。

---

> 📊 **日报小结**：今日 OpenCode 社区呈现"升级阵痛 + UI 争论 + TUI 修复"的三角态势。建议维护者优先处理 #30086 性能回归、#37012 布局选项诉求，以及 Desktop v1.18.5 的稳定性 Issue 群；与此同时，#38906 进度条、#29789 动态工作流等新特性若能快速合入，将显著缓解社区的负面情绪。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-26

> 数据来源：`github.com/badlogic/pi-mono`（仓库已迁移至 `earendil-works/pi`）
> 统计周期：过去 24 小时

---

## 一、今日速览

**v0.82.1 正式发布，Claude Opus 5 全面接入。** Anthropic 与 Amazon Bedrock 双通道上线，并启用 adaptive thinking（含 `xhigh` 档位）、推理配置文件与 Prompt Caching。社区高度活跃，过去 24 小时涌入 50 条 Issue 与 19 条 PR，**Compaction（上下文压缩）相关问题占比显著上升**，TUI 渲染性能与多 Provider 模型切换也是当前的两大焦点。

---

## 二、版本发布

### 🚀 v0.82.1（今日发布）

**重大变更：**

- **Claude Opus 5 上线**：在 Anthropic 与 Amazon Bedrock 两个 Provider 中开放，支持 adaptive thinking（含 `xhigh`）、inference profiles、Prompt Caching。Opus 5 已是 Anthropic 当前主推的编程模型，与 Opus 4.8 同价。
- 配套 PR #7081 已合并 Bedrock 通道，并修复了 Bedrock 错误信息泄露细节的问题。

📦 完整说明：<https://github.com/earendil-works/pi/blob/v0.82.1/packages/coding-agent/docs/providers.md#api-keys>

---

## 三、社区热点 Issues

| # | 标题 | 状态 | 👍 | 评论 | 重要性 |
|---|------|------|----|------|--------|
| [#6768](https://github.com/earendil-works/pi/issues/6768) | **Copilot Enterprise 下 Compaction 完全不可用**（返回 421 Misdirected Request 与 Anthropic 兼容层报错） | OPEN | **11** | 13 | ⭐⭐⭐ 多人企业级方案受阻，赞数高 |
| [#4877](https://github.com/earendil-works/pi/issues/4877) | 会话文件夹哈希碰撞：不同路径产生相同 session folder | CLOSED | 2 | 21 | ⭐⭐ 讨论度最高，边缘但有数据冲突风险 |
| [#6665](https://github.com/earendil-works/pi/issues/6665) | 长会话流式输出时 TUI 占用整核：未缓存的 `Intl.Segmenter` + 每 chunk Markdown 重建 | OPEN | 0 | 7 | ⭐⭐⭐ 性能瓶颈，已定位到 ICU BreakIterator |
| [#6050](https://github.com/earendil-works/pi/issues/6050) | TUI 全量重绘导致终端 scrollback 被清空 | CLOSED | 0 | 15 | ⭐⭐ 自定义 UI 受影响，根因在核心渲染器 |
| [#5990](https://github.com/earendil-works/pi/issues/5999) | 对话框内容超高时 TUI 持续闪烁/重绘 | OPEN | 3 | 5 | ⭐⭐ 影响交互体验 |
| [#7090](https://github.com/earendil-works/pi/issues/7090) | **安全告警**：v0.82.0 shrinkwrap 锁定的 `brace-expansion@5.0.7` 受 CVE-2026-14257（DoS）影响，需重新生成 | CLOSED | 0 | 4 | ⭐⭐⭐ 安全隐患，建议尽快升级到 5.0.8+ |
| [#7020](https://github.com/earendil-works/pi/issues/7020) | Compaction 后 Pi 有时不再继续执行（Coordinator 长会话场景） | OPEN | 1 | 4 | ⭐⭐ 长会话管理痛点 |
| [#7048](https://github.com/earendil-works/pi/issues/7048) | Compaction 摘要碰到 token 上限时被截断在单词中间（未检查 `stopReason='length'`） | OPEN | 0 | 3 | ⭐⭐ 影响摘要完整性与后续上下文质量 |
| [#7067](https://github.com/earendil-works/pi/issues/7067) | **多 Provider 模型切换破坏会话**：GPT 返回 HTML 错误页、Qwen 触发 `enable_thinking` 400，缺少切换前校验 | CLOSED | 0 | 3 | ⭐⭐⭐ 模型切换可靠性的代表性问题 |
| [#7064](https://github.com/earendil-works/pi/issues/7064) | WSL 下 Windows 绝对路径处理错误，导致 read/write/edit 工具失效 | OPEN | 0 | 3 | ⭐⭐ WSL 用户日常工作流受阻 |

**社区反应总结：**
- Compaction 相关（#6768、#7020、#7048）形成"问题族"，从 Copilot Enterprise 兼容性、到续跑逻辑、再到摘要截断，是当前最大痛点。
- TUI 性能与稳定性（#6665、#6050、#5990）持续高频出现，根因都指向渲染核心。

---

## 四、重要 PR 进展

| PR | 标题 | 关键变更 |
|----|------|----------|
| [#7081](https://github.com/earendil-works/pi/pull/7081) | feat(ai): 支持 Claude Opus 5 on Bedrock ✅ | 启用 adaptive thinking（Bedrock 强制要求）；隐藏 Bedrock 错误细节，体验更友好 |
| [#7116](https://github.com/earendil-works/pi/pull/7116) | fix(tui): 截断超宽行而不是崩溃 ✅ | `doRender()` 之前遇到超宽行直接抛错杀死会话，本次改为安全截断（典型触发：长 JSON 工具输入） |
| [#7118](https://github.com/earendil-works/pi/pull/7118) | Expose extension context clear callback ✅ | 暴露扩展用的 context clear 回调，让 Mecha 等工具可"无摘要清空 + 注入 handoff"，避免维护小型 fork |
| [#7111](https://github.com/earendil-works/pi/pull/7111) | feat: durable external tool results ✅ | 通用外部工具结果流：工具返回 `defer:true` → Pi 持久化 assistant tool call + JSONL pending marker，不伪造 tool-result |
| [#7114](https://github.com/earendil-works/pi/pull/7114) | OpenRouter OAuth 登录增加手动重定向 URL 回退 🟡 | 解决 SSH/容器等无 loopback 场景下的登录闭环（与 Claude/Codex 流程对齐） |
| [#7112](https://github.com/earendil-works/pi/pull/7112) | 跨平台 footer 路径分隔符规范化 ✅ | Windows 下 `path.sep` 是 `\` 导致 `~\project` 显示错误，统一用 `/` |
| [#7106](https://github.com/earendil-works/pi/pull/7106) | 资源加载器排除目录 ✅ | 修复 `EISDIR` 警告：加载 `AGENTS.md` 等配置时遇到目录不再报错 |
| [#7091](https://github.com/earendil-works/pi/pull/7091) | 拒绝重叠的用户 bash 命令 ✅ | RPC 层面拦截并发 bash，提升并发安全 |
| [#7072](https://github.com/earendil-works/pi/pull/7072) | 缓存 llama.cpp 模型目录 ✅ | 关闭 #6948：消除启动时异步刷新与 defaultProvider/defaultModel 之间的竞态 |
| [#7085](https://github.com/earendil-works/pi/pull/7085) | feat(coding-agent): 引入 vitest eval harness ✅ | 新增 `packages/evals` 工作区，复用 Pi 凭据解析，为后续 PR #7117 的扩展创建评估打基础 |

---

## 五、功能需求趋势

从 50 条更新 Issue 中提炼，社区关注的功能方向按热度排序：

1. **🧠 Compaction 体验重做**（~7 条相关）
   - 支持自定义摘要模型、Token 截断保护、停止原因校验、Compaction 后可靠续跑。

2. **🤖 新模型与 Provider 接入**（~6 条）
   - Claude Opus 5（已落地）、OpenRouter Inkling 长输出上限、xAI Grok 4.5 长上下文定价分层、Moonshot/Kimi 自定义端点。

3. **🎨 TUI 性能与稳定性**（~5 条）
   - 渲染热路径缓存、流式输出时的 CPU 占用、超宽行保护、scrollback 保护。

4. **🔄 模型切换可靠性**（~3 条）
   - 上下文窗口校验、thinking block 转换、切换前预检。

5. **🧩 扩展 API 增强**（~3 条）
   - context clear 回调、RPC 触发 `refreshModels`、成本预览扩展。

6. **🔐 安全 / 合规**（~2 条）
   - shrinkwrap 锁版本 CVE 响应、session-affinity 头转发、OAuth 远程登录闭环。

7. **💰 成本可视化**（~2 条）
   - 模型选择器增加 cost 列、OpenRouter 路由别名实际成本解析。

---

## 六、开发者关注点

1. **Compaction 是当前最大痛点**——既影响个人开发者的长会话体验，也阻断企业级 Copilot Enterprise 用户。建议关注 #6768、#7020、#7048 的修复路径。

2. **TUI 渲染瓶颈已被定位**——#6665 通过 spindump 把问题收敛到 `Markdown.render → Intl.Segmenter`，缓存化方案预计将成为下一个 release 的重点。

3. **多 Provider 切换缺乏"事务性"**——#7065/#7067 暴露的问题显示，切换模型时不校验上下文与协议（thinking block、enable_thinking），急需切换前的 preflight 校验。

4. **跨平台细节仍在补漏**——WSL 路径（#7064）、Windows footer（#7112 ✅）、自定义 OpenAI 端点忽略 `OPENAI_API_BASE`（#7105）等小问题累计体验损耗明显。

5. **生态正向完善**——durable external tool results (#7111)、context clear 回调 (#7118)、vitest eval harness (#7085/#7117) 等 PR 表明 Pi 正在从"能用"走向"可扩展、可测试、可被第三方工具链深度集成"。

---

📌 **建议开发者动作：**
- 升级到 v0.82.1 以获取 Claude Opus 5，并避开 `brace-expansion@5.0.7` 的 CVE。
- 长会话/大上下文场景关注 Compaction 后续补丁（#7020、#7048）。
- 自托管 OpenAI 兼容端点（Moonshot 等）暂用社区 PR #7105 的临时方案或等待官方合并。

---

*日报基于 `badlogic/pi-mono` 过去 24 小时公开数据生成。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-26**

---

## 📌 今日速览

Qwen Code 发布了 `v0.21.0-nightly.20260726` 版本，社区活跃度持续高涨，过去 24 小时内共有 **28 个 Issue** 和 **50 个 PR** 更新。开发重心明显聚焦于 **Web Shell/WebUI 体验升级、Subagent 系统增强、Sandbox 运行时安全、内存管理** 四大方向；同时围绕"多工作区守护进程"的 RFC 讨论激烈（30 条评论），社区对架构演进的关注度持续升温。

---

## 🚀 版本发布

**v0.21.0-nightly.20260726.9d19eafa9** 已发布

本次 nightly 主要更新：
- **CLI 指标统一本地时区**：`fix(cli)` 修复了洞察天/小时指标在各处显示时区不一致的问题 ([#7670](https://github.com/QwenLM/qwen-code/pull/7670))
- **Autofix 重构**：对 autofix 扩展机制进行了重构（提交截断）

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 | 链接 |
|---|-------|--------|------|
| 1 | **#6378** RFC: 多工作区共享单一 `qwen serve` 守护进程 | 架构级讨论，30 条评论，社区对从"1 daemon = 1 workspace"向多租户模式演进的兴趣浓厚 | [查看](https://github.com/QwenLM/qwen-code/issues/6378) |
| 2 | **#7585** 提案：直接外部上下文提供器 Profile | 通过扩展机制接入外部记忆/知识服务，不改动 Core；6 条评论，need-discussion | [查看](https://github.com/QwenLM/qwen-code/issues/7585) |
| 3 | **#7684** Command 模式下多行 statusline 导致输入法候选框错位（macOS） | 国际化开发者高频痛点，影响中文/日文/韩文用户输入体验 | [查看](https://github.com/QwenLM/qwen-code/issues/7684) |
| 4 | **#7697** VS Code 扩展无法连接 Unity MCP，Claude Code 可用 | 凸显 Qwen Code 在 IDE 生态集成上的短板 | [查看](https://github.com/QwenLM/qwen-code/issues/7697) |
| 5 | **#7685** Subagent 启动时支持按模型等级（small/medium/high/super）选模 | 与 Roadmap/subagents-tools 直接挂钩，已被 PR #7702 快速响应 | [查看](https://github.com/QwenLM/qwen-code/issues/7685) |
| 6 | **#7665** 安装 Qwen Code Desktop 后遇 520/522 错误 | 用户入门门槛问题，影响初次体验 | [查看](https://github.com/QwenLM/qwen-code/issues/7665) |
| 7 | **#7719** CLI 不显示 Token 用量或用量百分比 | 基础可观测性诉求，反映用户对成本/配额监控的需求 | [查看](https://github.com/QwenLM/qwen-code/issues/7719) |
| 8 | **#6801** 提案：pinned/ 目录——受 `/dream` 合并保护的只读记忆文件 | 与"长期记忆可控性"主题强相关，PR #7714 已跟进实现 | [查看](https://github.com/QwenLM/qwen-code/issues/6801) |
| 9 | **#7700** 数学公式渲染：明确 source-preserving 的契约 | 终端数学渲染后续规范讨论，延续 #3680 话题 | [查看](https://github.com/QwenLM/qwen-code/issues/7700) |
| 10 | **#7732** Sandbox 运行时仅按 PATH 探测，存在"装而不通"风险 | 安全与可用性双重隐患，PR #7734 同步响应 | [查看](https://github.com/QwenLM/qwen-code/issues/7732) |

> 已关闭但同样值得关注：**#7659**（thinking 模式下 tool_choice required 被 DashScope 拒绝，已修）、**#4252**（TPS/TTFT 性能指标请求）、**#7588**（loop 检测早退未触发 stop hooks）。

---

## 🛠️ 重要 PR 进展

| # | PR | 功能/修复 | 链接 |
|---|----|----------|------|
| 1 | **#7724** fix(web-shell): 无会话任务中允许 shell 命令 | 修复新任务中 `!` 命令被误拒的体验问题 | [查看](https://github.com/QwenLM/qwen-code/pull/7724) |
| 2 | **#7686** perf(core): 延迟加载首次使用依赖 | 冷启动性能优化，对 CLI 启动速度有显著收益 | [查看](https://github.com/QwenLM/qwen-code/pull/7686) |
| 3 | **#7733** feat(review): 重新定义中等 effort 为带验证的均衡扫描 | 重塑 review 档位语义，medium 也能捕到一类结构性问题 | [查看](https://github.com/QwenLM/qwen-code/pull/7733) |
| 4 | **#7731** feat(web-shell): Git 分支选择器、提交对话框与建 PR 流程 | IntelliJ 风格的 Web Shell Git 工作流增强 | [查看](https://github.com/QwenLM/qwen-code/pull/7731) |
| 5 | **#7710** feat(triage): 沙箱化的 `/verify` 深度验证通道 | 维护者级证据回合，含 A/B 负载证明、mock-free wire-oracle | [查看](https://github.com/QwenLM/qwen-code/pull/7710) |
| 6 | **#7734** fix(cli): 选定沙箱运行时前先做能力探测 | 解决 #7732，Docker/Podman "装而不通"导致选错运行时 | [查看](https://github.com/QwenLM/qwen-code/pull/7734) |
| 7 | **#7735** feat(review): Agent 5 测试覆盖率通道引入变异测试 | 防止"假阳性覆盖"——只检查测试存在性，不检查是否真能捕获缺陷 | [查看](https://github.com/QwenLM/qwen-code/pull/7735) |
| 8 | **#7702** feat(core): Subagent 启动支持模型等级选择 | 落地 #7685 提案，在 `agent` 工具上新增 `model` 参数 | [查看](https://github.com/QwenLM/qwen-code/pull/7702) |
| 9 | **#7729** feat(core): 新增 Goal v3 worker 工具 | 提供"当前 Goal 快照 + 受限证据目录 + 验证器反馈"读取/更新工具 | [查看](https://github.com/QwenLM/qwen-code/pull/7729) |
| 10 | **#7714** feat(memory): 保护 pinned 文件不被 forked Dream 写入 | 落地 #6801，opt-in 权限门禁 + 合并跳过策略 | [查看](https://github.com/QwenLM/qwen-code/pull/7714) |

> 备选关注：**#7725**（tool-control E2E 去抖 + autofix 抖动检测）、**#7620**（Web Shell 解析 256/truecolor SGR）、**#7711**（IME 光标与 footer 重绘对齐）、**#7661**（DashScope thinking 模式不再强发 tool_choice required，已合并）、**#7728**（WebUI Channel 管理 hook）。

---

## 📈 功能需求趋势

从近 24 小时更新的 Issues 中可提炼出以下社区焦点：

1. **🏗️ 架构演进（高热度）**：多工作区守护进程（#6378）、Goal v3 worker 工具（#7729），社区希望 Qwen Code 从"单租户"向"企业级多项目协作"演进。
2. **🤖 Subagent 能力升级**：模型等级选模（#7685 / #7702）、扩展提供 subagent 的可写权限收敛（#7242），子代理成为差异化竞争点。
3. **🧠 记忆与上下文管理**：pinned/ 受保护目录（#6801 / #7714）、外部上下文提供器（#7585），社区希望记忆系统更可控、更可扩展。
4. **🖥️ Web Shell / WebUI**：分支选择器、建 PR 流程、Channel 管理（#7724/#7731/#7728），CLI 与 Web 双端体验并重。
5. **🔌 MCP 生态**：VS Code 集成能力（#7697）、OAuth 回调转发（#7503）、远程 MCP 部署，IDE/MCP 是当前最大短板。
6. **📊 可观测性**：Token 用量（#7719）、TPS/TTFT 指标（#4252）、流式重试可配置（#7658）。
7. **🌏 国际化体验**：IME 光标错位（#7684/#7711）、中文环境渲染细节。
8. **🧮 数学/富文本渲染**：明确 source-preserving 契约（#7700/#7699），学术/教育场景诉求强烈。

---

## 👨‍💻 开发者关注点

综合 Issue 与 PR 反馈，当前社区痛点与高频需求集中在：

- **🔁 稳定性与抖动（CI/测试）**：连续出现 E2E 抖动治理（#7712、#7725）、autofix 工作流本身的重复标记冲突（#7723），反映出对 nightly 质量基线的强诉求。
- **🐛 多平台/环境兼容**：Sandbox 运行时探测（#7732/#7734）、ARM64 上 ripgrep 兼容（#2676）、macOS IME（#7684/#7711），跨平台一致性仍是重点。
- **🔐 安全与权限边界**：Destructive-git 守卫补漏（#7531）、pinned/ 文件保护（#7714）、MCP OAuth 重定向端口硬编码（#7503）。
- **⚡ 性能与启动速度**：冷启动依赖懒加载（#7686），CLI 大型化的副作用已开始显现。
- **🧩 扩展机制与冲突**：扩展安装时的 ID 归属校验（#7568）、Skills 启用/禁用的作用域合并语义（#7347）。
- **🛎️ 入门友好度**：Desktop 安装后 520/522 错误（#7665）、Prompt 行高 off-by-one 导致输入自动上滚（#7713），新用户体验需打磨。

---

*报告基于 GitHub 公开数据整理，仅反映 2026-07-25 至 2026-07-26 的活跃更新。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**2026-07-26**

---

## 📌 今日速览

v0.9.2 进入收尾冲刺阶段，今日重点集中在 **多 Provider 路由治理** 和 **TUI 性能清理** 两条主线：连续三例 DeepSeek-only 验证逻辑导致的"非默认 provider 被静默吞掉"问题（#4829/#4832/#4838）已闭环；同时一批针对 `App` god object、render 路径中同步 syscalls、tool-run collapse 全历史扫描等性能债（#3904–#3908）继续推进。社区方面，**远控会话 / `/rc` host**（#4844）与 **plugin / skill 生态互通**（#1172、#4836）成为最新需求焦点。

---

## 🚀 版本发布

> 过去 24 小时无新 Release。`main` 上累积的 v0.9.2 相关修复（#4743 SSE 超时、#4760 home_dir 修正、#4756 MCP 重试回归、#4841 移除死代码 flag 等）仍在持续合入，建议关注下一窗口期的版本标签。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 主题 | 为什么值得关注 |
|---|-------|------|----------------|
| 1 | [#4520](https://github.com/Hmbown/CodeWhale/issues/4520) | TUI 头部栏可配置 session token 明细（in / cache hit / out） | 评论数最高（4）。PR #2411 把状态行压成单一累计值后，老用户希望保留分项显示，反映**默认 vs 高级可观测性**的张力。 |
| 2 | [#4831](https://github.com/Hmbown/CodeWhale/issues/4831) | 完整测试套件间歇写入真实 `~/.codewhale/config.toml` | 已 CLOSED（3 评论）。`RUSTFLAGS="-D warnings" cargo test` 复跑结果与 `allow_shell_save` flake 高度相关——**测试隔离回归**值得每个贡献者复盘。 |
| 3 | [#2743](https://github.com/Hmbown/CodeWhale/issues/2743) | 适配 Claude Code 技能生态（中文） | 3 评论。社区用户对**跨生态 skill 移植保真度**存在疑虑，是 CodeWhale 走向"开放插件市场"的关键前提。 |
| 4 | [#1172](https://github.com/Hmbown/CodeWhale/issues/1172) | Plugin 工作流迁移支持（Cursor / CC / codex） | 3 评论。要求支持 plugin / plugin market + hook 生命周期，是 **plugin 系统需求** 最具代表性的反馈。 |
| 5 | [#3927](https://github.com/Hmbown/CodeWhale/issues/3927) | 新手引导增加 provider-independent 的离线体验路径 | 3 评论。#3960、#4504 之后仍有"必须激活某 provider 才能继续"的问题——**首次启动的零摩擦体验**直接关系用户留存。 |
| 6 | [#3314](https://github.com/Hmbown/CodeWhale/issues/3314) | v0.9.2：将 App god object 拆分为 owned submodules | 3 评论，已 CLOSED。`App` 已膨胀至 ~252 字段 / ~4450 行，是 **TUI 内核可维护性** 的头号工程债。 |
| 7 | [#3091](https://github.com/Hmbown/CodeWhale/issues/3091) | v0.9.2：网站与日文 / 越南文 README 拉齐本地化 | 3 评论。README 已支持多语种但网站仍是中英，**国际化一致性**长期被追踪。 |
| 8 | [#2974](https://github.com/Hmbown/CodeWhale/issues/2974) | v0.9.2：接入面向模型的 workflow tool 和 run driver | 3 评论。workflow runtime 已编译但 TUI 未暴露对应工具；**JS-authored → typed plan → sub-agent → bounded** 这条链路仍未贯通。 |
| 9 | [#4698](https://github.com/Hmbown/CodeWhale/issues/4698) | v0.9.2：补齐默认 skill-pack 路由元数据与可选 smoke 文档 | 2 评论。v0.9.1 内置 v5 默认技能包已落地，**follow-up 项需保持显式追踪**避免混入合并历史。 |
| 10 | [#4683](https://github.com/Hmbown/CodeWhale/issues/4683) | DeepSeek completions URL 错误（`api.deepseek.com` 偶发网络错） | 2 评论。**域名拼写或 DNS 解析不稳定**造成的偶发失败，老用户高频遇到。 |

> 另请关注 **#4832 / #4838 / #4829** 这一组三连：分别揭示 `codew model resolve` 撒谎、CLI 对非 DeepSeek provider 静默 no-op、`Config::validate()` 只用 DeepSeek normalizer 校验三个相互咬合的 bug——社区维护者建议作为 v0.9.2 必修。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 内容 | 状态 |
|---|----|------|------|
| 1 | [#4844](https://github.com/Hmbown/CodeWhale/pull/4844) | **`/rc` 远控 host**：把已运行的 CLI/TUI 会话注册为可由 CWC 浏览器会话驱动的远控端 | OPEN（今日创建） |
| 2 | [#4843](https://github.com/Hmbown/CodeWhale/pull/4843) | **fix(tui)**：composer 高度自适应内容（#4809 第二半） | OPEN |
| 3 | [#4842](https://github.com/Hmbown/CodeWhale/pull/4842) | **feat(tui)**：workflow 每个 worker 用量遥测 + 受限 run-record 负载（落实 #2974） | OPEN |
| 4 | [#4841](https://github.com/Hmbown/CodeWhale/pull/4841) | **refactor(cli)**：移除已失效的 `--no-alt-screen` 兼容 flag（`should_use_alt_screen` 已恒返回 true） | OPEN |
| 5 | [#4455](https://github.com/Hmbown/CodeWhale/pull/4455) / [#4442](https://github.com/Hmbown/CodeWhale/pull/4442) / [#4444](https://github.com/Hmbown/CodeWhale/pull/4444) | 一次性清理 legacy memory push/inject 三处调用点 | CLOSED |
| 6 | [#4840](https://github.com/Hmbown/CodeWhale/pull/4840) | **chore(credit)**：补齐 AUTHOR_MAP 中缺失的五位贡献者元数据 | OPEN |
| 7 | [#4839](https://github.com/Hmbown/CodeWhale/pull/4839) | **docs(localization)**：为 `crates/tui/locales/` 八个 TUI 语言包建立文档，并在 CI 中 gate locale drift | OPEN |
| 8 | [#4766](https://github.com/Hmbown/CodeWhale/pull/4766) | **docs**：新增 `docs/CATALOG_REFRESH.md`，梳理 model 元数据更新层级、24h TTL 磁盘缓存边界 | CLOSED |
| 9 | [#4566](https://github.com/Hmbown/CodeWhale/pull/4566) | **v0.9.2**：调整 tui `Cargo.toml`，在 HarmonyOS PC 上重新跑通 TUI 构建 | CLOSED |
| 10 | [#4743](https://github.com/Hmbown/CodeWhale/pull/4743) | **fix**：`codewhale exec` 非流式请求不再被 45s SSE open timeout 误杀 | CLOSED（重要修复，影响所有非流式后端） |

> 已合入的零碎修复同样值得关注：#4722（edit 预览完整化）、#4724（后台 Shell 输出归档）、#4742（fleet 字符串保留 `#`）、#4756（qualified MCP 失败不再重试）、#4760（`dirs::home_dir()` → `effective_home_dir()`，修两个 Windows CI 用例）。

---

## 📈 功能需求趋势

从过去 24h 活跃 Issue 中可提炼以下高优先级方向：

1. **多 Provider / 多模型路由治理**（权重最高）
   - 代表条目：#4832、#4838、#4829、#4683、#4758
   - 关键词：DeepSeek-only normalizer、provider resolve、`codew model set` no-op、Kimi Code plan tier、错误 URL。
   - 趋势含义：项目从"以 DeepSeek 为默认"向"provider 无关"演进，验证/路由/CLI 表层都需重构。

2. **TUI 内核性能**
   - 代表条目：#3904、#3905、#3906、#3907、#3908（均 `lane-perf`）
   - 关键词：render fn 中同步 `fs::metadata`、Ctrl+P `git status` 子进程、`serde_json::to_string` per frame、tool-run collapse 全历史扫描、Ctrl+T overlay deep-clone。
   - 趋势含义：TUI 帧率下的 O(history) 工作正在被系统性盘点，需要把"动画节奏下的 syscall"替换为显式 invalidate。

3. **Plugin / Skill 生态扩展**
   - 代表条目：#1172、#4836、#2743
   - 关键词：plugin market、hook、Claude Code skill 转写、starter plugin pack。
   - 趋势含义：v0.9.1 已落地 trust/enable registry，但"开箱即用包"与"跨生态迁移"仍为空缺。

4. **本地化纵深（i18n + l10n）**
   - 代表条目：#3091（ja/vi 网站）、#3092（ru）、#3093（ko/es/pt-BR）、#4784（双语 constitution 契约）
   - 趋势含义：从 README → 网站 → TUI 语言包层层推进，并开始把 locale drift 拉进 CI。

5. **远控 / 协作化**
   - 代表条目：#4844（`/rc` host）、#3927（offline onboarding）
   - 趋势含义：CLI 不再是单机终端，正在融入 CWC 浏览器控制平面。

6. **macOS 体验**
   - 代表条目：#4828（underwater shell 破坏 `open`/`osascript`/`launchctl`，exit -54）、#4834（通知用 Script Editor 图标）
   - 趋势含义：v0.9.0 默认水下交互层带来 macOS 兼容回归。

---

## 👨‍💻 开发者关注点 & 痛点

- **"provider 假设"侵蚀 CLI 体验**：#4829 / #4832 / #4838 三连显示，DeepSeek-only 校验链已经从"默认值"蔓延成"隐式硬编码"，导致非默认 provider 配置直接 brick CLI——这是 v0.9.2 必须解决的**契约清晰度**问题。
- **测试隔离缺失被官方仓库背书**：#4831 用 `RUSTFLAGS="-D warnings" cargo test --workspace --all-features --locked` 复现了"测试写入真实 `~/.codewhale/config.toml`"，意味着 CI 与本地环境交叉污染风险被低估。
- **TUI god object 不可持续**：#3314 关闭后留下的 `App` 仍极度膨胀，社区呼吁把 `ComposerState` 这类子结构推广到 memory、palette、tool-run、selection、history 等所有"耦合簇"。
- **可观测性在压缩中丢失**：#4520 是用户对 PR #2411 简化状态行的反弹，提示**"开箱简单 / 高级可配置"双档**应成为产品原则。
- **跨生态工作流迁移**：#1172 / #2743 都来自希望把 Cursor / Claude Code / Codex 已有 plugin 资产搬进 CodeWhale 的开发者——**插件发现 + 签名 + 隔离运行**是下一阶段落地门槛。
- **远端控制与本地会话融合**：#4844 + cwc#119 / #120 表明官方正在推动"浏览器 ↔ 本地 TUI"双向通路，下游开发者可关注 host enrollment 与 auth 模型的细节。

---

*日报生成时间：2026-07-26 · 数据范围：Hmbown/CodeWhale GitHub 过去 24h 活动（DeepSeek-TUI 生态项目）*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*