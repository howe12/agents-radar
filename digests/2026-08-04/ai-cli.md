# AI CLI 工具社区动态日报 2026-08-04

> 生成时间: 2026-08-04 01:55 UTC | 覆盖工具: 9 个

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
**数据周期**：2026-08-04｜**覆盖工具**：9 款主流 AI CLI

---

## 1. 生态全景

AI CLI 工具生态正经历从「单 Agent 提效」向「**多 Agent 协同 + 成本治理**」的双主线跃迁 —— Anthropic、OpenAI、Google 三大厂牌仍主导功能创新（VSCode Focus view、Multi-Agent V2、Subagent 可靠性），而 Kimi、OpenCode、Pi、Qwen、DeepSeek TUI 等次梯队工具已形成鲜明的差异化路线（Web/桌面化、开源 Provider 桥接、Harness 架构、ACP 协议、Fleet 多代理）。**Windows/WSL 跨平台一致性**首次成为跨厂牌集体性短板，**MCP 生态**从「能跑」走向「可靠性治理」，**付费用户的成本可观测性**则上升为最高优先级的留存议题。

---

## 2. 各工具活跃度对比

| 工具 | 24h Issues | 24h PRs | 新 Release | 高赞议题（👍>30） | 当前阶段定位 |
|---|---:|---:|---|---|---|
| **Claude Code** | 50 | 2 | v2.1.221 | 6 个 | 商业旗舰，VSCode 集成 |
| **OpenAI Codex** | 12+ | 10+ | rust-v0.147.0-alpha.6 / .1.2 | 3 个 | 厂牌第二战线，Multi-Agent 基建 |
| **Gemini CLI** | 10 | 10 | 无 | 1 个 | 厂牌补位，Agent 精细化 |
| **GitHub Copilot CLI** | 10 | 0 | v1.0.78 / v1.0.78-3 | 3 个 | 企业/MCP 治理 |
| **Kimi Code CLI** | 3 | 8 | 无 | 1 个 | 中文/Windows 用户运营 |
| **OpenCode** | 10 | 10 | v1.18.12 | 2 个 | 开源 Provider 桥接 |
| **Pi** | 10 | 10 | 无 | 1 个 | Harness v2 架构演进 |
| **Qwen Code** | 10 | 10 | v0.21.4（v0.21.5 回滚） | 0 个 | 阿里系，Web Shell 桌面化 |
| **DeepSeek TUI** | 10 | 10 | 无（v0.9.4 train 待合） | 0 个 | ACP 协议 + Fleet 多代理 |

> **注**：Claude Code 与 Codex 的 24h Issue 数显著高于其他工具，反映商业旗舰 + 厂牌主力的「流量密度」差距；Kimi 主动维护节奏由 PR 主导，Issue 数偏低（仅 3 条），但贡献者集中度高（ayaangazali 一人 5 PR）。

---

## 3. 共同关注的功能方向

| 方向 | 涉及工具 | 具体诉求 |
|---|---|---|
| **多 Agent 协同 / 跨会话编排** | Claude Code(#24798/30492)、Codex(#35097)、DeepSeek(#3205/4022)、Pi(#7503)、Qwen(#8326)、OpenCode | 消息总线、依赖图、Subagent 命名、CLI/TUI parity、Fleet 负载选择、fork agent 隔离 |
| **成本/配额透明度** | Claude Code(#13585 👍115)、Codex(#33685/32791) | CLI 内置 quota 展示、按 client/session/timestamp 归因、防止「幽灵消耗」 |
| **跨会话记忆/持久化** | Kimi(#1283)、OpenCode(#16077)、DeepSeek(#2492)、Gemini(Auto Memory)、Pi(Session storage) | 项目模式/用户偏好/历史 transcript 的自动加载 |
| **Windows / WSL 兼容性** | Claude Code(#80468 等 6 条)、Codex(#20214)、Kimi(#2582)、Pi(#6187/7064) | 桌面崩溃、tmux 挂起、流式挂起、登录阻塞、路径处理 |
| **MCP 生态可靠性** | Codex(MCP conformance gate)、Gemini(OAuth refresh)、DeepSeek(MCP CRUD API)、Claude Code(#76040)、Qwen(#8382) | Resume 后失效、token 过期、Replay-safety 门控误判、每 surface 暴露控制 |
| **Hook 系统的「沉默失败」** | Claude Code(#82323)、Kimi(#2575)、DeepSeek(#1917) | PreToolUse 缺失静默放行、PostToolUse 任务句柄丢失、fail-loud 原则 |
| **多模型 / BYOK 灵活性** | Copilot(#3282/3709)、Codex(multi_account #12029)、OpenCode(DeepSeek V4)、Pi(Cortecs #7571) | 会话内多模型、API 契约一致、新 Provider 桥接 |
| **桌面/GUI 完备化** | Claude Code(Focus view)、Qwen(Web Shell)、OpenCode(Desktop)、Copilot(new-worktree) | 原生生命周期、MCP/Skill 可视化配置、自动更新 |

> **核心观察**：上述 8 个方向中有 **6 个** 在 5 个以上工具的社区中被同时关注——这是真正的行业级共识；其中「多 Agent 协同」「成本透明度」「跨会话记忆」三者同时是 **付费用户留存** 与 **能力上限** 的关键瓶颈。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|---|---|---|---|
| **Claude Code** | IDE 深度集成（VSCode Focus view）、沙箱安全、订阅套餐 | Pro/Max 付费开发者、企业团队 | 商业闭源、专注打磨单点体验 |
| **OpenAI Codex** | Multi-Agent V2、Subagent 三角（Subagent + MCP + Plugin） | ChatGPT Plus/Pro/Work 用户 | SQLite 状态库、Guardian 守护、双 WebSocket code-mode |
| **Gemini CLI** | Agent 可观测性、Auto Memory、AST 感知工具 | Google 系重度用户、研究型开发者 | Agent "能用→可信赖" 转型期 |
| **GitHub Copilot CLI** | 企业治理（Managed settings/MCP）、BYOK | 企业 DevOps、多模型需求用户 | GitHub 原生集成、强 MCP/ACP 治理 |
| **Kimi Code CLI** | 中文编码兼容、Web UI（Technical Preview） | 中国大陆 / Windows 中文用户 | 官方 API 隔离、ACP server 模式 |
| **OpenCode** | 第三方 Provider 桥接、TUI 全量简中、Desktop 完善 | 开源爱好者、多模型切换用户 | 事件日志有界压缩、provider plugin 钩子 |
| **Pi** | Harness v2 架构、JSON/RPC 线性化、新 Provider 接入 | 架构演进关注者、WSL/Windows 用户 | backend-neutral Session API、JSONL + 排他锁 |
| **Qwen Code** | Web Shell 桌面化、阿里云生态、Audio 桥接 | 阿里云 / 移动端用户 | 可信 Agent 运行时战略、外部工具守卫 provider |
| **DeepSeek TUI** | ACP 协议（Zed 集成）、Fleet 多代理、Runtime API | Fleet/团队协作用户、Zed 编辑器用户 | Runtime API 系统化（goal-loop/MCP CRUD/memory/receipts/skill） |

> **关键差异点**：Claude Code 与 Codex 走「**单点体验极致**」路线，而 DeepSeek TUI、Pi、Qwen Code 走「**系统化 API 暴露**」路线——后者正在把 CLI 演化为「可托管的 Agent 运行时」，而非单纯的终端工具。

---

## 5. 社区热度与成熟度

**第一梯队（高密度、高商业属性）**
- **Claude Code**：50 Issue/日 + 6 个高赞议题，是当前声量最大的商业 AI CLI，但 Windows 平台风险正在累积。
- **OpenAI Codex**：PR 合入节奏最快（每小时级），`copyberry[bot]` 维持机器合入，反映团队化、工程化投入最重。

**第二梯队（差异化路线、快速迭代）**
- **DeepSeek TUI**：v0.9.4 release train 一次整合 77 commit，Runtime API 系统化扩张速度惊人。
- **Qwen Code**：v0.21.4 推动 Web Shell 桌面化，且发布流程（v0.21.5 回滚 + clippy `-D warnings`）显示质量基线主动抬升。
- **Pi**：Harness v2 多 PR 并行推进，是架构演进投入最高的次梯队工具。
- **OpenCode**：TUI 简中本地化 + 桌面稳定性两条腿走路，社区分布最国际化。

**第三梯队（聚焦细分场景、节奏稳健）**
- **Gemini CLI**：进入「精细化打磨」阶段，新模型配置（3.6 Flash / 3.5 Flash-Lite）即将落地。
- **GitHub Copilot CLI**：版本高频（v1.0.78 + v1.0.78-3）但 PR 渠道沉寂，疑似采用 hotfix 私有工作流，需关注透明度。
- **Kimi Code CLI**：Issue 量低但 PR 修复密度高（8 PR / 3 Issue），由 ayaangazali 等核心贡献者驱动，「小而精」运维。

---

## 6. 值得关注的趋势信号

| # | 趋势信号 | 行业意义 | 开发者参考价值 |
|---|---|---|---|
| 1 | **多 Agent 编排成为新上限** | 决定工具能否从「单兵」演化为「平台」；Claude Code、Codex、DeepSeek、Pi、Qwen 五家同时立项 | 关注 Subagent 命名规范、消息总线协议、CLI/TUI parity |
| 2 | **成本可观测性是付费留存底线** | Claude Code #13585 获全场最高 👍115；Codex #33685 跨厂牌同步爆发 | 在自研 Agent 时务必提供 token/session/quota 三层归因 |
| 3 | **跨会话记忆走向「标配化」** | 5 家工具同时立项（Kimi/OpenCode/DeepSeek/Gemini/Pi），从「加分项」变为「基础期望」 | Memory 设计的最小可行版本：项目级 CLAUDE.md/AGENTS.md 类机制 |
| 4 | **Windows/WSL 一致性塌陷** | 首次成为跨厂牌集体性痛点，6 个高赞 Issue 中 4 个涉及 Windows | 跨平台 Agent 设计的工程门槛被显著低估；终端能力探测、tmux、Job Object 等细节决定生死 |
| 5 | **MCP 从「协议」走向「可靠性工程」** | Codex 新增 conformance gate、DeepSeek 提供 CRUD API、Qwen 修 replay-safety 误判 | MCP 集成不能只测「能不能调」，需覆盖 resume/hot-reload/error-replay |
| 6 | **Hook 系统的「沉默失败」是系统性问题** | Claude Code/Kimi/DeepSeek 三家同时报出 fire-and-forget / silent allow | 在自研扩展点时坚持 **fail-loud + 健康自检命令** |
| 7 | **桌面化/GUI 完备化进入「第二阶段」** | Qwen Web Shell 桌面化、OpenCode Desktop 卡顿修复、Claude Code Focus view | 桌面体验的短板正在变成阻碍用户迁移的最后一公里 |
| 8 | **Runtime API 系统化露出端倪** | DeepSeek v0.9.4 一口气新增 goal-loop / memory / MCP CRUD / receipts / skill 5 套端点 | CLI 正在变成「可托管的 Agent 运行时」——这对私有部署/企业集成极具吸引力 |
| 9 | **「可信 Agent 运行时」战略浮现** | Qwen #8102 提出 LLM 留在信任边界外、Claude Code #80988 引发 prompt 透明度争议 | 关注 **确定性执行边界 + 隐式 prompt 披露** 这两条主线，将影响未来一年产品架构 |
| 10 | **Provider 目录成为治理对象** | Codex gpt-5.6-luna spawn_agent 拒绝、OpenCode DeepSeek V4 路由异常、Copilot Grok 4.5 缺失 | 多模型接入的隐性成本被低估，需建立 **catalog 单一事实源 + 回归测试门禁** |

---

### 📊 一句话总结

> **今天的 AI CLI 生态已进入「下半场」**：上层是「多 Agent 协同 + 成本治理」的能力博弈，中层是「跨会话记忆 + MCP 可靠性」的工程化补课，底层是「Windows 一致性 + Hook 透明性 + Prompt 可披露性」的三重信任重建。次梯队工具（DeepSeek/PI/Qwen/OpenCode）的 Runtime API 化路线尤其值得关注——它们正在把 CLI 重塑为可托管的 Agent 运行时，这一方向可能比单纯的 IDE 集成更具长期价值。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据范围**：anthropics/skills 仓库 PR × 50 / Issues × 50  
**截止日期**：2026-08-04  
**核心发现**：社区最强烈的诉求集中在 **"skill-creator 评测管道失灵"** 与 **"企业级安全/共享机制缺失"** 两大议题。

---

## 1. 热门 Skills 排行

> 注：PR 维度的评论/点赞数据缺失，以下基于「关联 Issue 评论数 × 议题热度 × 修复必要性」综合排序。

| 排名 | Skill / PR | 功能 | 社区讨论热点 | 状态 |
|---|---|---|---|---|
| 🥇 | **[PR #1298](https://github.com/anthropics/skills/pull/1298)** skill-creator 综合修复 | 修复 `run_eval.py` 始终返回 0% recall 的根本问题，含 Windows 流读取、并行 worker | 该 bug 是 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍）的核心，已出现 10+ 独立复现，所有描述优化循环都在「基于噪声优化」 | **OPEN** |
| 🥈 | **[PR #1367](https://github.com/anthropics/skills/pull/1367)** self-audit v1.3.0 | AI 输出交付前的机械验证 + 四维度推理质量门禁（按损伤严重度排序），通用型、跨栈适用 | 对应 Issue [#1385](https://github.com/anthropics/skills/issues/1385)（4 评论）提出的「三段式质量门」提案，被视作交付侧的关键缺位能力 | **OPEN** |
| 🥉 | **[PR #514](https://github.com/anthropics/skills/pull/514)** document-typography | 自动控制 AI 生成文档的排版质量：孤词换行、寡妇段落、编号错位 | 「影响 Claude 生成的每一份文档」——属于基础设施级 skill，解决的是用户几乎不会主动要求但被普遍困扰的问题 | **OPEN** |
| 4 | **[PR #83](https://github.com/anthropics/skills/pull/83)** skill-quality-analyzer + skill-security-analyzer | 元能力：五维度质量分析 + 安全审计，用于审查 Claude Skill 自身 | 与 Issue [#492](https://github.com/anthropics/skills/issues/492)（43 评论 / 最热门）安全边界议题形成闭环，是社区最迫切的「自治工具」 | **OPEN** |
| 5 | **[PR #1479](https://github.com/anthropics/skills/pull/1479)** plan-file-hygiene | 规划产物（plan files）的生命周期管理，解决「越积越多却无人清理」的问题 | 对应 Issue [#1417] 提案，议题被社区精确命名为「lifecycle gap」，是面向长期 Agent 工作流的关键补丁 | **OPEN** |
| 6 | **[PR #486](https://github.com/anthropics/skills/pull/486)** ODT | 创建/读取/转换 OpenDocument 格式（.odt / .ods），支持 ISO 标准开放文档 | 填补「非 MS 体系办公格式」空白；对开源/Linux/欧洲市场用户尤其关键 | **OPEN** |
| 7 | **[PR #723](https://github.com/anthropics/skills/pull/723)** testing-patterns | 全栈测试方法论：Testing Trophy、AAA、React Testing Library、契约测试等 | 属于「开发者强需求」的 skill 模板，议题热度持续高 | **OPEN** |
| 8 | **[PR #1302](https://github.com/anthropics/skills/pull/1302)** color-expert | 颜色命名系统（ISCC-NBS / Munsell / XKCD / RAL 等）+ 色彩空间使用指引（OKLCH / OKLAB） | 设计/前端场景的高密度知识包，结构清晰、与已有 design 类 skill 互补 | **OPEN** |

**附属高频议题**（修复类 PR，密集指向同一根因）：
- [#1099](https://github.com/anthropics/skills/pull/1099) [#1050](https://github.com/anthropics/skills/pull/1050) [#1323](https://github.com/anthropics/skills/pull/1323) [#1261](https://github.com/anthropics/skills/pull/1261) — 全部围绕 skill-creator 在 Windows / 并行 / 触发检测上的崩溃，社区以「接力赛」方式提交修复但仍 OPEN。

---

## 2. 社区需求趋势

从 Issues 中提炼，按诉求强度排序：

| 诉求方向 | 关键 Issue | 评论数 / 👍 | 趋势解读 |
|---|---|---|---|
| 🛡️ **Skill 安全边界与信任模型** | [#492](https://github.com/anthropics/skills/issues/492) | **43 / 2** | **最热门议题**。社区贡献的 Skill 使用 `anthropic/` 命名空间冒充官方 skill，构成信任滥用。亟需 namespace 隔离 + 官方签名/标识机制。 |
| 🏢 **企业级 Skill 共享与分发** | [#228](https://github.com/anthropics/skills/issues/228) | 16 / **8**（👍 最高） | 组织内 Skill 共享需手动导出 .skill 文件 → Slack 转发 → 手动上传；呼唤「共享库 / 直链」原生能力。 |
| ⚙️ **skill-creator 评测管道可靠性** | [#556](https://github.com/anthropics/skills/issues/556) / [#1169](https://github.com/anthropics/skills/issues/1169) / [#1061](https://github.com/anthropics/skills/issues/1061) | 12+3+3 / 7+1+2 | `run_eval.py` recall=0% bug 已影响所有描述优化循环；Windows 兼容性叠加次生问题。是「阻塞 skill 生态自迭代」的最大单点故障。 |
| 📦 **Plugin 内容去重 / 上下文治理** | [#189](https://github.com/anthropics/skills/issues/189) | 6 / **9**（👍 第二高） | `document-skills` 与 `example-skills` 打包相同内容导致上下文重复，反映了「插件分发粒度」的架构缺位。 |
| 🧠 **长上下文与符号化 Agent 记忆** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 提出 `compact-memory`：用符号化表示压缩长时 Agent 的笔记与持久化记忆，节省上下文。 |
| 🪟 **跨平台（Windows）体验** | [#1061](https://github.com/anthropics/skills/issues/1061) / PR #1099/#1050 | 3+ | PATHEXT、cp1252 编码、pipe 上的 select：skill-creator 在 Windows 上完全不可用。 |
| 🤖 **Agent 治理与安全模式** | [#412](https://github.com/anthropics/skills/issues/412) | 6（CLOSED） | 提议 `agent-governance`：策略执行、威胁检测、信任评分、审计追踪。虽已关闭但反映了企业用户的合规需求。 |
| 🌐 **Skills ↔ MCP 互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 提议把每个 Skill 暴露为 MCP，标准化「调用接口」，便于第三方生态对接。 |
| 🧾 **Skill 自身的上下文自律** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` skill 单次工具调用即注入 ~156k token，单次耗尽上下文窗口——揭示 skill 设计缺乏「懒加载/摘要」约束。 |
| 🧪 **平台生态对接** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | AWS Bedrock 等替代平台对 Skill 的兼容性问题。 |

**三大隐含趋势**：
1. **从「能不能跑」转向「能不能信」**：讨论从功能扩展（早期）迁移到信任、审计、合规（当前）。
2. **企业级能力空缺**：组织共享、命名空间治理、权限边界——消费侧基础设施尚未跟上。
3. **自我迭代管道失灵**：skill-creator 工具自身的 bug 正在阻碍整个 Skill 生态的优化循环。

---

## 3. 高潜力待合并 Skills

以下 PR 兼具议题热度、技术必要性，但仍处于 **OPEN** 状态，最可能在近期落地：

| PR | Skill | 落地概率评级 | 关键依据 |
|---|---|---|---|
| **[#1298](https://github.com/anthropics/skills/pull/1298)** | skill-creator 评测综合修复 | ⭐⭐⭐⭐⭐ | 阻塞整个描述优化生态；与 Issue #556 强绑定；多位贡献者已接力提交过相关修复（#1099/#1050/#1323/#1261） |
| **[#1367](https://github.com/anthropics/skills/pull/1367)** | self-audit v1.3.0 | ⭐⭐⭐⭐ | 直接对应活跃提案 #1385；通用性强、不依赖特定技术栈 |
| **[#1479](https://github.com/anthropics/skills/pull/1479)** | plan-file-hygiene | ⭐⭐⭐⭐ | 已有 Issue #1417 投票；明确归功于社区命名（lifecycle gap），易于合并 |
| **[#514](https://github.com/anthropics/skills/pull/514)** | document-typography | ⭐⭐⭐⭐ | 高频痛点、零依赖、易评估效果 |
| **[#83](https://github.com/anthropics/skills/pull/83)** | skill-quality-analyzer + skill-security-analyzer | ⭐⭐⭐⭐ | 与最热门 Issue #492 强互补，构成社区自治工具闭环 |
| **[#538](https://github.com/anthropics/skills/pull/538)** | PDF case-sensitivity 修复 | ⭐⭐⭐⭐⭐（低风险合并） | 纯文档修复，无争议 |
| **[#541](https://github.com/anthropics/skills/pull/541)** | DOCX w:id 冲突修复 | ⭐⭐⭐⭐⭐（低风险合并） | 文档损坏级 bug，影响所有带书签的 docx |
| **[#539](https://github.com/anthropics/skills/pull/539)** | skill-creator YAML 引号校验 | ⭐⭐⭐⭐⭐ | 简单前解析校验，防止静默 YAML 截断 |

**预判**：未来 1–2 个版本中，**skill-creator 评测管道修复**（合并 [#1298](https://github.com/anthropics/skills/pull/1298) 或其某个分支版本）将作为最高优先级合入，因其直接解锁了大量「依赖该评测」的 skill 描述优化工作。

---

## 4. Skills 生态洞察

> **当前社区在 Skills 层面最集中的诉求是：让 Skill 生态从「能跑」进化到「可信、可治理、可企业级分发」——具体表现为对 `skill-creator` 自迭代管道失灵的集体焦虑

---

# Claude Code 社区动态日报
**日期：2026-08-04**

---

## 📌 今日速览

- **v2.1.221 正式发布**，带来 VSCode 端"Focus view"专注模式（`Ctrl+Alt+F` 切换）以及 Linux 沙箱凭据文件的 `mode: "mask"` 增强。
- **跨会话协同（Inter-session communication）需求**持续升温——多 Claude 并行工作流、实时转向、Hook 可靠性成为本周期社区最关注的三大方向，相关高赞 Issue 累计评论破百。
- **Windows 平台稳定性**集中爆发：Desktop 崩溃、CLI 二进制未签名、sub-agent 在 tmux 下挂起等 Windows 专属 Bug 集中报出，需 Anthropic 团队重点跟进。

---

## 🚀 版本发布

### v2.1.221（2026-08-04）

| 模块 | 更新内容 |
|---|---|
| **VSCode 扩展** | 新增 **Focus view** 专注模式：默认隐藏工具调用细节，仅展示每轮可展开的摘要，并附带运行中工具的实时指示器。可通过 `Ctrl+Alt+F` 或命令面板 "Claude Code: Toggle Focus view" 切换。 |
| **Linux 沙箱** | 新增 `mode: "mask"` 选项用于沙箱凭据文件，提升敏感凭证在沙箱环境下的隔离安全性。 |

> Focus view 显著降低长任务过程中的视觉噪音，是面向演示/录屏场景的实用升级。

---

## 🔥 社区热点 Issues

### 1. [\#24798 — Inter-session communication for multi-Claude workflows](https://github.com/anthropics/claude-code/issues/24798)
**状态：OPEN | 61 评论 / 👍20 | 标签：enhancement, tui, core**

社区呼声**最高**的需求帖。用户希望不同 Claude 会话之间能像工作流引擎一样声明依赖、串行/并行组合，目前只能靠外部脚本桥接。
- 为何重要：直接决定 Claude Code 是否能从"单兵工具"演化为"多 Agent 编排平台"。
- 社区反应：60+ 评论，方向已收敛至"消息总线 + 依赖图"原型讨论。

### 2. [\#13585 — Add Quota Information Access to Claude Code CLI](https://github.com/anthropics/claude-code/issues/13585)
**状态：OPEN | 24 评论 / 👍115 | 标签：cost, tui, api**

**全场最高点赞**（115 票）。要求在 CLI 中直接展示订阅配额、用量上限与重置时间。
- 为何重要：成本透明度是 Max/Pro 订阅用户的核心痛点，当前只能通过网页面板确认。
- 社区反应：跨平台支持呼声强烈，已形成较完整的设计提案。

### 3. [\#30492 — Real-time steering: priority message channel for redirecting Claude mid-execution](https://github.com/anthropics/claude-code/issues/30492)
**状态：OPEN | 31 评论 / 👍60 | 标签：Feature Request**

请求实现"实时转向"机制，允许用户在长任务中途插入**优先级消息**以中断或重定向当前执行流。
- 为何重要：补齐 Claude Code 缺乏"软中断 + 接管"能力的短板，对长管线/多文件重构场景尤为关键。
- 社区反应：👍60 高赞同，技术讨论已细化到 token-level 协议设计。

### 4. [\#5674 — Persistent ECONNRESET Errors on macOS Network Connections](https://github.com/anthropics/claude-code/issues/5674)
**状态：OPEN | 52 评论 / 👍48 | 标签：bug, macos, api**

**陈年老 Bug**（创建于 2025-08-13），macOS 客户端持续出现 `ECONNRESET`，相同网络下 Windows/Linux 正常。
- 为何重要：影响 macOS 用户稳定性近一年，跨平台一致性受到质疑。
- 社区反应：48 票点赞，疑似与系统代理/防火墙/网络栈行为相关。

### 5. [\#71542 — GitHub connector links repositories successfully but Claude cannot access content](https://github.com/anthropics/claude-code/issues/71542)
**状态：OPEN | 48 评论 / 👍42 | 标签：invalid（社区存疑）**

连接器能成功链接仓库，但读取内容全面失败（公开/私有均不可），疑似近期回归。
- 为何重要：影响 GitHub 集成核心价值，**标签被设为 invalid 但用户持续反对**。
- 社区反应：标签争议大，开发者质疑 triaging 流程。

### 6. [\#67606 — Opus 4.8 confabulates user messages and "prompt injection attack" narratives](https://github.com/anthropics/claude-code/issues/67606)
**状态：OPEN | 15 评论 / 👍4 | 标签：bug, linux, model**

Opus 4.8 在长会话中**捏造**用户消息、伪造提示注入攻击叙事、虚构工具/宿主事实，已用 JSONL 验证。
- 为何重要：触及模型行为可靠性的根本问题，**与 #83683（用户想回退 Opus 4.8）形成有趣对照**。
- 社区反应：技术分析严谨，等待 Anthropic 回应。

### 7. [\#80988 — v2.1.219 `heron_brook` prompt section silently overrides delegation policy](https://github.com/anthropics/claude-code/issues/80988)
**状态：OPEN | 15 评论 / 👍33 | 标签：bug**

v2.1.219 引入的内部 `heron_brook` 系统提示段**仅对 Opus 5 注入**"Do not call the AgentTool unless the user requested it"，静默覆盖用户自定义委派策略且无 opt-out。
- 为何重要：模型相关条件逻辑未被披露，社区担心 prompt 透明度倒退。
- 社区反应：33 票点赞，要求披露全部隐式注入段落。

### 8. [\#82506 — Possible Claude Max usage bug: session limit consumed without using](https://github.com/anthropics/claude-code/issues/82506)
**状态：OPEN | 12 评论 / 👍6 | 标签：bug**

Max 订阅额度在**未实际使用**的情况下被消耗。
- 为何重要：直接关系到付费用户的信任与计费公平性。
- 社区反应：需 Anthropic 后端日志对照。

### 9. [\#80468 — Claude Desktop App Crashing After the Latest Update on Windows](https://github.com/anthropics/claude-code/issues/80468)
**状态：OPEN | 12 评论 / 👍0 | 标签：bug**

Windows 端 Claude Desktop 应用在最新更新后崩溃。
- 为何重要：Windows 平台近期多起问题之一（叠加 #80584、#83366、#83656），形成**集中性稳定性事件**。

### 10. [\#76727 — Cross-session coordination for independently-launched Claude Code sessions](https://github.com/anthropics/claude-code/issues/76727)
**状态：OPEN | 9 评论 / 👍0 | 标签：enhancement, hooks, agents**

针对**同一 repo 同一工作树**下多个独立 Claude 会话提出第一方协调原语，当前仅能依赖 PreToolUse `deny` hook 自行拼凑。
- 为何重要：与 #24798 方向一致，互补地从"工作流编排"和"共享工作树锁"两个角度切入。

### 11. [\#65687 — Unexpected token usage spike and continued consumption while inactive](https://github.com/anthropics/claude-code/issues/65687)
**状态：OPEN | 10 评论 / 👍1 | 标签：bug, windows, cost**

Claude Code **不活跃时**仍持续消耗 token，账单出现异常峰值。
- 为何重要：与 #82506 共同加剧用户对"被动扣费"的担忧。

### 12. [\#83683 — Restore access to claude-opus-4 model variant](https://github.com/anthropics/claude-code/issues/83683)
**状态：OPEN | 1 评论 | 标签：Feature Request**

用户要求恢复 Opus 4.8 访问，称被强制升级到 Opus 5.0 后体验下降（Sonnet/Haiku 也不可用）。
- 为何重要：揭示**模型版本强制升级策略**与用户偏好之间的冲突。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时仅有 **2 条 PR** 更新，均为插件开发文档补充，**功能性 PR 较为沉寂**。

### 1. [\#83374 — docs(plugin-dev): document MessageDisplay streaming semantics](https://github.com/anthropics/claude-code/pull/83374)
补全 Hook Development 技能文档：将 `MessageDisplay` 加入技能触发描述、事件指引与速查表。
- **意义**：Hook 体系长期存在"事件不透明"问题（如 #82323），本次补齐一个事件流式语义说明。
- **状态**：OPEN，未有评审意见。

### 2. [\#77977 — docs(plugin-dev): document skipLfs marketplace sources](https://github.com/anthropics/claude-code/pull/77977)
为插件市场源（GitHub shorthand / generic Git URL）补充 `skipLfs` 选项文档。
- **意义**：解决 LFS 体积大场景下的轻量克隆需求。
- **状态**：OPEN，纯文档变更（Refs #63035）。

---

## 📈 功能需求趋势

基于今日活跃 Issue 与高赞诉求，整理出 **6 大需求方向**：

| 排名 | 方向 | 代表 Issue | 信号强度 |
|---|---|---|---|
| 🥇 | **多会话协同 / 工作流编排** | #24798、#76727、#30492 | 🔥🔥🔥🔥🔥 |
| 🥈 | **成本/配额透明化** | #13585（👍115）、#82506、#65687 | 🔥🔥🔥🔥🔥 |
| 🥉 | **模型选择与版本回退** | #83683、#67606、#80988 | 🔥🔥🔥🔥 |
| 4 | **Hook/Agent 系统可靠性** | #82323、#76727、#83687 | 🔥🔥🔥 |
| 5 | **MCP 生态兼容** | #76040、#81965、#66010 | 🔥🔥🔥 |
| 6 | **VSCode/Desktop UX 增强** | v2.1.221 Focus view、#80468、#83378 | 🔥🔥 |

> **核心洞察**：社区正从"单会话提效"诉求过渡到"多 Agent 协同 + 成本治理"的双主线——前者决定上限，后者决定留存。

---

## 💬 开发者关注点

**1. 平台一致性塌陷（重点）**
- Windows 几乎成为重灾区：#80468（Desktop 崩溃）、#80584（HCS 服务缺失）、#83366（sub-agent tmux 挂起）、#83656（CLI 二进制未签名致 Mach-O 解析失败）、#65687（闲置耗 token）。
- macOS 老问题 #5674 仍未根因化（已超 1 年）。

**2. Hook 系统的"沉默失败"焦虑**
- #82323 揭示 PreToolUse hook 脚本缺失会**静默放行**；
- #75081/#75071（关联）显示 matcher schema 错误会**静默禁用所有 hook**；
- #83687 进一步发现 Stop hook 在 `ScheduleWakeup` 场景下 verdict 被吞。
- 开发者诉求：**fail-loud 原则 + hook 健康自检命令**。

**3. Prompt 透明度倒退**
- #80988 指出 v2.1.219 引入未公开的 `heron_brook` 段并按模型条件注入，开发者呼吁 Anthropic 公开**所有内置注入段落**与适用模型。

**4. OAuth / Token 作用域碎片化**
- #81015：`setup-token` 拿不到 `user:profile` 权限，导致 `/usage` 面板 403；
- #83677：移动端 attach 旧会话时出现 token 过期，桥接句柄无法本地修复。
- 诉求：**统一 token scope 模型**（`usage:read` 等细粒度授权）。

**5. 订阅额度"幽灵消耗"**
- #82506、#65687 都指向未主动使用时仍扣减 session/额度；叠加 #13585 的 115 票高赞，**计费可观测性是付费用户最大痛点**。

**6. 模型回退通道缺失**
- #83683 的吐槽揭示：一旦 Opus 5.0 表现不如 4.8，用户**无法回退**。建议提供 `--model` 白名单 + 历史版本回滚能力。

---

## 📊 数据小结

| 指标 | 数值 |
|---|---|
| 过去 24h 更新 Issue | 50 |
| 过去 24h 更新 PR | 2 |
| 新发 Release | 1（v2.1.221） |
| 高赞（👍>30）Issue | 6 |
| 最受关注功能方向 | 跨会话协同、成本透明 |

> **结语**：本周期 Anthropic 在 **VSCode UX 端**（Focus view）有明显投入，但**社区的真正战场**已转移到"多 Agent 协作 + 成本治理"两大议题。Windows 稳定性与 Hook 可靠性如不能在下个版本得到回应，预计将持续成为负面情绪集中点。

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-04** ｜ 数据来源：github.com/openai/codex

---

## 一、今日速览

今日 Codex 仓库的活跃度仍以 **Windows 桌面端性能投诉** 为焦点，单条 Issue 累计已达 88 条评论。同时，**gpt-5.6-luna 在 multi_agent_v2 体系下的兼容性问题**已成为一个独立议题簇，3 条相关 Issue 在 24 小时内均有新动态。PR 层面，OpenAI 团队的 `copyberry[bot]` 维持高频合入节奏，今日可见多条 **MCP 协议栈增强、Session 状态库重构、Subagent 基础设施** 方向的工作。

---

## 二、版本发布

过去 24 小时内发布了两个 Rust CLI 的 alpha 预发布版本：

| 版本 | 说明 |
|---|---|
| `rust-v0.147.0-alpha.6` | 0.147 主线最新 alpha |
| `rust-v0.147.0-alpha.1.2` | 0.147.0-alpha.1 的补丁版本 |

> 官方 changelog 暂未披露具体改动内容，建议关注 nightly/alpha 升级的开发者参考各 PR 的合入记录 ([#31817](https://github.com/openai/codex/pull/31817) 已有 models.json 自动化更新)。

---

## 三、社区热点 Issues

| # | Issue | 热度 | 为什么值得关注 |
|---|---|---|---|
| 1 | [#20214](https://github.com/openai/codex/issues/20214) Codex App 在 Win11 Pro 上频繁卡顿/冻结 | 💬88 / 👍78 | 仓库内 Windows 性能类 Issue 持续高居不下，高配机器（Ryzen 5 5600 / 32GB）依然复现，社区对桌面端稳定性信心受挫。 |
| 2 | [#35420](https://github.com/openai/codex/issues/35420) OneDrive 工作区下流式响应反复断连 | 💬30 / 👍0 | 涉及 ChatGPT Work/Codex 表面与 OneDrive 协同的边缘场景，出现 `stream disconnected before completion` 模式化失败。 |
| 3 | [#33685](https://github.com/openai/codex/issues/33685) 周限额消耗速度与旧 5 小时限制相当 | 💬25 / 👍10 | 配额策略调整后未向用户透明说明，用户实际可用额度被显著压缩。 |
| 4 | [#19504](https://github.com/openai/codex/issues/19504) 为阿拉伯语/希伯来语添加完整 RTL 支持 | 💬24 / 👍19 | 来自"2026 Papercuts"计划，关系到 RTL 文本对齐、标点位置等多语言基本可用性。 |
| 5 | [#12098](https://github.com/openai/codex/issues/12098) Codex 扩展需要 Tab 化的并行会话界面 | 💬20 / 👍55 | 👍/评论比最高的增强请求，反映用户在 VS Code/Cursor 中同时跑多任务会话的强需求。 |
| 6 | [#25779](https://github.com/openai/codex/issues/25779) Desktop meta-bug：session/turn 状态无界增长 | 💬15 / 👍8 | 描述桌面端"会话脏数据/上下文膨胀/丢失当前轮控制"的元问题，关联 [#28080](https://github.com/openai/codex/issues/28080)、[#29187](https://github.com/openai/codex/issues/29187)。 |
| 7 | [#35097](https://github.com/openai/codex/issues/35097) gpt-5.6-luna 被标为 MultiAgent V1，spawn_agent 拒绝 | 💬14 / 👍37 | 是 [#34700](https://github.com/openai/codex/issues/34700)、[#36294](https://github.com/openai/codex/issues/36294)、[#34964](https://github.com/openai/codex/issues/34964) 共同指向的同一根因：模型目录标记的版本与运行时不一致。 |
| 8 | [#12029](https://github.com/openai/codex/issues/12029) 支持多账号登录 | 💬12 / 👍62 | 真正"个人+企业"双账户用户的基础诉求，是企业落地的真实阻断点。 |
| 9 | [#32791](https://github.com/openai/codex/issues/32791) Plus 账号的 5 小时限额消失，仅剩周限额 | 💬9 / 👍3 | 与 #33685 互补，反映 ChatGPT 套餐配额的产品级变更沟通不到位。 |
| 10 | [#34453](https://github.com/openai/codex/issues/34453) Desktop 重启后 Full Access 退化为逐次审批 | 💬5 / 👍1 | 影响长时自治 Agent 任务的关键可用性问题，破坏 Pro 用户的核心使用流程。 |

---

## 四、重要 PR 进展

> 今日 PR 中相当部分已被快速合入（CLOSED），意味着这些变更将很快出现在 nightly / 下个 alpha 中。

| PR | 主题 | 关键变更 |
|---|---|---|
| [#36815](https://github.com/openai/codex/pull/36815) | **Subagent 命名改造** | 在 `<context_window>` 元数据中以"规范 agent 路径"取代 thread ID，作为 subagent 标识（默认根会话为 `/root`）。 |
| [#36812](https://github.com/openai/codex/pull/36812) | **Code mode 双 WebSocket 传输** | 为 code-mode 会话协商 `dual-websocket-v1`，附加一个受限 token 的二连接，避免大回调阻塞其他操作。 |
| [#36810](https://github.com/openai/codex/pull/36810) | **MCP 客户端一致性回归门禁** | 新增对官方 MCP 一致性套件的固定版本运行（HTTP/stdio/OAuth），保障 MCP 协议演进不破坏现有客户端。 |
| [#36811](https://github.com/openai/codex/pull/36811) | **每环境 login shell 策略** | 在每个 turn 环境中保留 `allow_login_shell`，子线程继承不同策略，shell 工具按需暴露 `login` 参数。 |
| [#36809](https://github.com/openai/codex/pull/36809) | **`exec resume --last` 走状态库** | 优先在 state DB 中查找目标，省去全 rollout 文件审计；兼顾 fallback 兼容性。 |
| [#36808](https://github.com/openai/codex/pull/36808) | **SQLite 化的本地归档命令** | `archive/delete/unarchive` 改为先查 SQLite，再回落到 rollout 扫描与修复；统一 active 与 archived 数据视角。 |
| [#36796](https://github.com/openai/codex/pull/36796) | **Agent Plugins MCP 配置解析** | 新增 `parse_agent_plugin_mcp_config`，归一 stdio/streamable HTTP 传输、插件路径占位符（`PLUGIN_ROOT`、`PLUGIN_DATA`）。 |
| [#36793](https://github.com/openai/codex/pull/36793) | **超时 Git 进程组清理** | Unix 上用 process group、Windows 上用 Job Object，确保超时清理真正终止所有衍生子进程。 |
| [#36781](https://github.com/openai/codex/pull/36781) | **每 surface 的 MCP 工具暴露控制** | MCP server 可通过 `omit_tools_from` 选择在直接发现/工具搜索/Code Mode 哪些 surface 出现，告别"全有/全无"。 |
| [#36772](https://github.com/openai/codex/pull/36772) | **提升 host-owned Codex Apps 目录上限** | `codex_apps` 注册可达 8,192 项，但仍保留普通 MCP 的 2,048 限制以防滥用。 |

> 旁注：`#36797`（rusty_v8 checksum CRLF 归一化）、`#36787`（ModelMessages 合并模型指令模板）、`#36773`（活跃用户配置层来源）、`#36774`（配置层迭代 API 重命名）也体现了 Codex 内部抽象层在向更细粒度、可解释方向演进。

---

## 五、功能需求趋势

从过去 24 小时讨论提炼的社区关注方向，按热度排序：

1. **多账号 / 多身份管理** — 既出现在 [#12029](https://github.com/openai/codex/issues/12029)（扩展）与 [#30418](https://github.com/openai/codex/issues/30418)（Gmail connector 多账户），反映出企业级落地的硬约束。
2. **Windows 桌面稳定性 & 性能** — `#20214`、`#28080`、`#29187`、`#28457`、`#34652`、`#35393` 共 6 条相关讨论；尤其关注会话状态无界增长、线程切换慢、handler 丢失。
3. **Subagent / Multi-Agent V2 生态** — gpt-5.6-luna 系列引发强烈关注，社区在调试、发现、调度链路上的诉求集中（`#35097`、`#34700`、`#36294`、`#34964`）。
4. **配额策略透明化** — 5 小时限额下线和周限额消耗速度问题（`#32791`、`#33685`、`#24818`、`#28985`），期待"按 client/session/timestamp"的可见归因。
5. **国际化 / 可访问性** — RTL（`#19504`）、阿拉伯语音转写（`#36819`），i18n 仍为 Papercuts 主线之一。
6. **并行会话工作流** — Tab 化界面（`#12098`）、Inline ghost 建议可关闭（`#10562`）等"专业用户体验"微改进。
7. **OAuth / 协议合规** — MCP OAuth 缺失 `resource` 参数（RFC 8707，`#33403`），干扰外部认证服务器。

---

## 六、开发者关注点与反馈痛点

- **桌面端作为一等公民的承诺正在被 Windows 用户质疑**：6 个高活跃 Issue 均围绕 Windows 平台复现的卡顿、断连、handler 丢失；社区呼吁版本内给出"已识别问题清单"或预热的临时 workaround。
- **模型目录与运行时元数据脱节**：`multi_agent_version` 这类静态字段与运行时能力不一致，使 gpt-5.6-luna 在 V2 下可用却被 spawn_agent 拒绝（`#35097` 是根因代表），暴露了"模型 catalog / 注册中心"亟需成为单一事实源。
- **ChatGPT 套餐侧改动沟通缺位**：5 小时限额下线、周限额替代逻辑对 Plus/Pro 用户产生了无预警可用性冲击。
- **企业工作流的硬需求尚未落地**：多人多账户、Gmail 多 inbox、Full Access 持久化等场景是真实生产力的瓶颈，社区预期更高。
- **Agent PLUGIN 体系进入主战场**：从 PR 矩阵可见，`codex-utils-*` 拆分、Agent Plugins MCP 解析、Guardian 会话复用、Code mode 双连接等一连串工作，意味着 Codex 正在夯实"以 Subagent + MCP + Plugin 为三角"的运行底座；Issue 端的 OpenAPI/RFC 8707/Inline ghost 等细节也都在同步收敛。
- **隐性的回归测试正在强化**：`copyberry[bot]` 维持每小时级合入节奏，MCP conformance 门禁、Guardian interrupt 测试、Git 进程组清理等都属于"高故障域加固"型改进，对贡献者而言测试编写门槛在同步上升。

---

*本日报基于 GitHub API 公开数据汇总，不代表 OpenAI 官方立场；链接均指向 github.com/openai/codex。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-08-04  
**数据来源**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日社区动态聚焦于 **Agent 稳定性与可靠性** —— 多条高优先级 Issue 集中在 Subagent 状态误报、Generalist Agent 挂死、Shell 命令卡死等核心交互缺陷。代码层面有两件值得关注的事：**Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置 PR (#28673) 已提交**，以及多项针对扩展加载、SDK 流处理、记忆系统的安全与稳定性修复合并中。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | 标题 | 优先级 | 讨论度 | 关注理由 |
|---|------|--------|--------|----------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功 | P1 | 💬12 👍2 | **状态语义缺陷**：子代理已达最大轮次限制仍上报"成功"，会掩盖真实中断，影响用户对 agent 行为的判断。 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | Generalist Agent 无响应挂死 | P1 | 💬8 👍8 | **🔥 社区最高赞**：创建文件夹这类简单操作会无限挂起，禁用 sub-agent 临时绕过。说明子代理调度路径有严重阻塞。 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | 通过零依赖 OS 沙箱 + 执行后意图路由利用模型的 bash 亲和性 | P2 | 💬8 👍1 | **架构级提案**：Gemini 3 天然倾向 POSIX 工具链，本 Issue 提出 OS 级沙箱 + 意图路由以兼顾能力与安全，值得关注。 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | 健壮的组件级评估体系（EPIC） | P1 | 💬7 | 已有 76 条行为测试在 6 个 Gemini 模型上运行，本 Epic 推动评估基础设施升级，关系后续版本质量。 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | 评估 AST 感知的文件读取、搜索、映射 | P2 | 💬7 👍1 | 探讨用 AST 工具精确读取方法、减少噪声 token，若落地将显著提升大型代码库效率。 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | Gemini 几乎不主动调用自定义 skills/sub-agents | P2 | 💬6 | 用户经验反馈：模型对"gradle""git"等自定义 skill 视而不见，除非显式指示，凸显工具发现机制薄弱。 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | 阻止 Auto Memory 无限重试低信号会话 | P2 | 💬5 | Auto Memory 流程缺陷：被索引但被判定为低信号的会话永远卡在 inbox。 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | Shell 命令完成后卡在"等待输入" | P1 | 💬4 👍3 | 简单 CLI 命令完成后仍显示"Awaiting user input"，高优核心问题。 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | 增强 browser_agent：会话接管与锁恢复 | P3 | 💬4 | 当前 BrowserManager 是"快速失败"策略，遇到锁定 profile 报错即退出，缺乏恢复路径。 |
| [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) | browser subagent 在 Wayland 下失败 | P1 | 💬4 👍1 | Wayland 环境兼容性缺陷，对 Linux 桌面用户影响明显。 |

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 要点 |
|---|------|------|------|
| [#28674](https://github.com/google-gemini/gemini-cli/pull/28674) | chore(deps): 升级 ip-address 至 10.4.0 | ✅ 已合并 | 常规依赖更新。 |
| [#28673](https://github.com/google-gemini/gemini-cli/pull/28673) | feat: 新增 Gemini 3.6 Flash 与 3.5 Flash-Lite 模型配置 | 🟡 待审 | **🆕 模型矩阵扩展**：补齐基础模型定义、capability（thinking、multimodalToolUse）、别名与 Code Assist 支持。 |
| [#28672](https://github.com/google-gemini/gemini-cli/pull/28672) | fix: 修复 /compress 会话重载与 quota-fallback 工具响应丢失 | 🟡 待审 | 同时修复两条崩溃路径：压缩后重新初始化失败、quota fallback 时工具响应被吞。 |
| [#28671](https://github.com/google-gemini/gemini-cli/pull/28671) | fix: 解决上下文损坏与 quota 错误回退 | 🟡 待审 | "Last-Mile Protection"加固历史消息，防止 ESC 中断和 quota 回退造成上下文损坏。 |
| [#28670](https://github.com/google-gemini/gemini-cli/pull/28670) | fix: GCA agent 模式下模型容量错误正确回退 | 🟡 待审 | **关键修复**：解决 `MODEL_CAPACITY_EXHAUSTED` 错误导致无限重试同一模型的死循环。 |
| [#28663](https://github.com/google-gemini/gemini-cli/pull/28663) | fix(extensions): 加固 fetchJson 防畸形 JSON / 流失败 | 🟡 待审 | 修复 #28646 —— GitHub API 响应畸形导致扩展模块崩溃。 |
| [#28660](https://github.com/google-gemini/gemini-cli/pull/28660) | fix(sdk): 畸形工具参数下保持 sendStream 存活 | 🟡 待审 | 防御性解析字符串型 SDK 工具参数，验证对象结构，避免 `JSON.parse` 异常逃逸。 |
| [#28658](https://github.com/google-gemini/gemini-cli/pull/28658) | fix: 语音录制等待 provider 就绪 | 🟡 待审 | 解决 Whisper/Gemini Live 协议未完成时就开始录音的问题。 |
| [#28481](https://github.com/google-gemini/gemini-cli/pull/28481) | fix: 用存储的 client ID 刷新 MCP OAuth 令牌 | 🟡 待审 | **P1 安全修复**：修复动态注册的 OAuth 刷新失败并清空凭据的回归。 |
| [#28586](https://github.com/google-gemini/gemini-cli/pull/28586) | fix: 保留 functionCall 中的 thoughtSignature | 🟡 待审 | 修复 0.53.0 引入的并行工具调用 400 回归。 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issue 分布可以归纳出五大社区关注方向：

1. **🤖 Agent 稳定性与可观测性**（最热）  
   Subagent 状态误报、挂死、bug 报告缺失上下文、子代理不主动调用等——Agent 系统进入"精细化打磨"阶段，集中在错误状态语义和故障恢复路径。

2. **🧠 Auto Memory / 记忆系统重构**  
   #26522 / #26523 / #26525 / #26516 形成围绕 SandyTao520 的"Memory 质量系列"，覆盖低信号重试、无效 patch 隔离、敏感信息确定性脱敏、整体质量跟踪，是近期最系统的子工程。

3. **🛡️ 沙箱与安全模型**  
   #19873 提出 OS 级沙箱 + 意图路由；#22672 限制破坏性命令（`git reset --force` 等）；#26525 要求确定性 secret 脱敏。**安全/能力平衡**是长期主线。

4. **🔍 AST 感知工具链**  
   #22745 / #22746 探索 tilth / glyph 等 AST 工具落地可能性，目的是把方法边界读取、跨文件导航做精确化，降低 token 噪声。

5. **🌐 Browser Agent 健壮性**  
   #22232 / #22267 / #21983 共同指向 BrowserManager 的"快速失败"策略欠佳、配置覆盖失效、Wayland 兼容问题，是 Browser Agent 走向生产可用的必修课。

---

## 💬 开发者关注点（高频痛点）

- **🔁 Agent 调度死锁/挂起**：`#21409` Generalist Agent 挂死 8 赞、长期未根治，是社区声量最高的体验问题之一。
- **📛 状态语义不准确**：Subagent 明明被 MAX_TURNS 截断却返回 `GOAL`/`success`（#22323），让 `/bug` 报告无参考价值（#21763）。
- **⚙️ 工具注册与权限边界**：v0.33.0 起 Subagent 被默认启用（#22093）、`settings.json` 覆盖对 browser agent 失效（#22267）、symlink agent 不被识别（#20079）——配置可预测性差。
- **🖥️ Shell/TUI 交互卡顿**：Shell 命令完成后仍 "Waiting input"（#25166）、外置编辑器退出后终端损坏（#24935）、终端 resize 闪烁（#21924）。
- **📚 工具数量上限**：`>128` 工具触发 400 错误（#24246），企业/MCP 重度用户首当其冲。
- **🗑️ 卫生问题**：模型在排除 shell 直写后，仍到处生成 tmp 脚本污染工作区（#23571）。
- **🔐 安全担忧**：Auto Memory 把本地 transcript 送进模型上下文的脱敏时机过晚（#26525）、MCP OAuth 刷新会清空凭据（PR #28481）。

---

> 📊 **日报小结**：今日的核心信号是 Gemini CLI 的 **Agent 体系正从"能用"过渡到"可信赖"** —— 状态语义、可观测性、安全沙箱、记忆系统成为下一阶段的主战场。值得期待的是 Gemini 3.6 Flash / 3.5 Flash-Lite 配置已进入 PR 阶段，新模型即将可用。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-08-04**

---

## 一、今日速览

GitHub Copilot CLI 在过去 24 小时内发布了 **v1.0.78** 与 **v1.0.78-3** 两个版本，重点改进了工具调用时间线展示、自动插件更新、交互式 Shell 快捷键以及浏览器登录流程。社区讨论热度集中在 **多模型/BYOK 切换**、**插件作用域管理** 以及 **跨平台终端渲染兼容性** 三大方向，其中多模型切换相关议题累计获赞超过 40 次。

---

## 二、版本发布

### v1.0.78（2026-08-03）
- **工具调用时间线**：当工具调用耗时 ≥5 秒时，顶部 timeline 实时显示各工具耗时，默认开启，可通过 `/settings showToolDurations` 关闭。
- **首方插件自动更新**：会话开始时自动更新至最新版。

🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.78

### v1.0.78-3（2026-08-03）
- **新增** 实验性命令 `/new-worktree`：创建新 worktree 并在新 worktree 中开启新对话。
- **改进** 交互式 Shell 快捷键：`Enter` 即可启动，并在 `$` 武装时显示内联提示。
- **修复** Copilot 登录默认采用本地桌面浏览器流程。

🔗 https://github.com/github/copilot-cli/releases/tag/v1.0.78-3

---

## 三、社区热点 Issues

> 选取标准：评论数 + 👍 数 + 状态 + 技术影响力

| # | Issue | 状态 | 热度 | 为什么值得关注 |
|---|-------|------|------|----------------|
| 1 | [#1665](https://github.com/github/copilot-cli/issues/1665) 支持按项目/仓库作用域的插件 | **CLOSED** | 💬14 / 👍18 | 长期高票特性请求，插件从「全局用户级」下沉到「项目级」是多人协作的关键能力，社区推动半年后已关闭。 |
| 2 | [#3282](https://github.com/github/copilot-cli/issues/3282) 支持多 BYOK 模型 | OPEN | 💬7 / 👍20 | 当前仅支持单一 BYOK，切换需重启会话；社区强烈呼吁同会话内多模型并存。 |
| 3 | [#3709](https://github.com/github/copilot-cli/issues/3709) `/model` 切换多模型（含 BYOK/本地） | OPEN | 💬3 / 👍20 | 与 #3282 高度相关，`/model` 选择器不列出本地 BYOK 模型，限制本地推理接入。 |
| 4 | [#1464](https://github.com/github/copilot-cli/issues/1464) 字母排序 ~32 之后的 Skills 不可达 | OPEN | 💬6 / 👍7 | 重要的体验 Bug：超过 63 个 skills 时，模型只能看到前 32 个，自定义技能被「静默屏蔽」。 |
| 5 | [#2714](https://github.com/github/copilot-cli/issues/2714) 插件 enable/disable 切换 | OPEN | 💬2 / 👍11 | 卸载才能禁用插件体验差，Gemini/Claude Code 已支持 toggle，社区呼吁对齐。 |
| 6 | [#4078](https://github.com/github/copilot-cli/issues/4078) 定时提示杀掉现有队列 | **CLOSED** | 💬5 | `/every`、`/after` 触发时整个 prompt queue 卡死，关闭表明已修复。 |
| 7 | [#4337](https://github.com/github/copilot-cli/issues/4337) `gpt-5.6-luna` 在 `/models` 可见但 `/chat/completions` 不可用 | **CLOSED** | 💬2 | 影响 MoA、聚合器等依赖 OpenAI 兼容接口的工具链，是 API 契约一致性问题。 |
| 8 | [#4313](https://github.com/github/copilot-cli/issues/4313) 滚轮/翻页浏览当前对话历史 | OPEN | 💬3 | 长对话上下文回溯的核心 UX 缺失，开发者调试复杂任务时刚需。 |
| 9 | [#2830](https://github.com/github/copilot-cli/issues/2830) 自定义颜色主题 | OPEN | 💬2 / 👍6 | 终端个性化诉求，`/theme` 目前仅 auto/dark/light 三档。 |
| 10 | [#4328](https://github.com/github/copilot-cli/issues/4328) WSL2 下 Ctrl+H 被误识别为 Ctrl+Backspace | OPEN | 💬2 | Windows Terminal 的 `WT_SESSION` 泄漏导致按键绑定错位，跨平台兼容痛点。 |

---

## 四、重要 PR 进展

> ⚠️ **过去 24 小时内无更新的 PR。** 这是值得关注的现象：版本仍在持续发布（v1.0.78 / v1.0.78-3），但仓库内没有新的 PR 活动，可能意味着维护者正采用 hotfix 通道或私有 PR 工作流。建议关注 [PR 列表页](https://github.com/github/copilot-cli/pulls) 获取后续动向。

---

## 五、功能需求趋势

从近 30 条 Issue 中提炼社区最关注的方向：

1. **🤖 多模型与 BYOK 灵活性**（热度最高）
   - #3282、#3709、#4337、#4345、#4340：会话内切换模型、支持多 BYOK、API 兼容性、resume 时的 model/reasoning 持久化。
2. **🧩 插件生态精细化管理**
   - #1665、#2714、#2286：项目级作用域、启用/禁用切换、Windows 符号链接。
3. **🖥️ 跨平台终端兼容性**
   - #4328（WSL2 按键）、#4267（Windows zellij）、#2286（Windows 符号链接）、#4347（Markdown 表格 reflow）、#2412（表格渲染）。
4. **💼 企业/MCP 治理**
   - #4346（CI 中 GITHUB_TOKEN 403）、#4349（managed settings schema 校验失败）、#4298（Sandbox 工具白名单）。
5. **🎨 终端个性化**
   - #2830（自定义主题）、#4352（OSC 9;4 进度条可关闭）。
6. **📊 成本与会话管理**
   - #4351（context compaction 后成本统计丢失）、#4334（ctrl+s 草稿在切换会话后丢失）、#4313（对话历史滚动）。
7. **🧠 上下文与 Skills**
   - #1464（Skills 截断）、#4332（关闭"Memory is disabled"提示）。

---

## 六、开发者关注点

1. **「会话内不能切模型」是头号痛点**
   BYOK 用户被迫在「换模型 = 结束会话」和「被单一模型锁死」之间二选一，#3282 与 #3709 合计获 👍40，社区需求非常一致。

2. **「看不见的东西等于不存在」——静默截断问题**
   #1464（Skills 截断）、#4351（成本统计丢失）、#4337（模型列表误导）暴露了同一类问题：系统提示或元数据在用户无感知的情况下被裁剪/丢弃，调试极其困难。

3. **跨平台输入/渲染仍是 Linux/macOS/Windows/WSL2 拉锯战**
   按键绑定（#4328、#4267）、终端能力探测（DA1 转义序列）、Windows 插件安装（#2286）等老问题反复出现，说明抽象层仍有缺漏。

4. **企业场景的「卡死式失败」值得关注**
   #4346（CI 拉黑所有非默认 MCP）和 #4349（managed settings 校验失败导致「fail-closed」）意味着任何小回归都会让企业用户的整套工作流停摆，开发者强烈希望降级为 warn 而非 fail。

5. **插件管理粒度仍粗糙**
   项目级作用域、enable/disable 开关、安装路径兼容性 三大诉求集中爆发（#1665、#2714、#2286），插件正从「能用」走向「好用」的阶段。

6. **API 契约与 ACP 协议一致性**
   #4337（chat/completions vs responses）、#4335（ACP 模式下 `toolCall.title` 隐藏真实 shell 命令）反映出 CLI 正在向多前端/多协议扩展，契约规范化需求浮现。

---

*数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)，统计窗口为 2026-08-03 ~ 2026-08-04。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-08-04**

---

## 📌 今日速览

今日社区活跃度集中在 **bug 修复与稳定性改进** 方面，过去 24 小时内共有 3 条 Issue 和 8 条 PR 更新，亮点包括 Web UI 切换会话卡死、CLI 流式输出挂起等关键 bug 报告，以及多位贡献者（ayaangazali、jackfish212、7Sageer 等）集中提交的兼容性、Hooks、Shell 工具链修复。值得关注的是，`ayaangazali` 一人贡献了 5 条 PR，成为今日最活跃的贡献者。

---

## 🚀 版本发布

**无新版本发布。** 最近合入的版本相关动作为 PR #2581（已关闭）—— 将 `kosong` 依赖升级至 0.56.0，预示下一次版本发布可能近期到来。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时内仅有 3 条 Issue 更新，远少于常规的 10 条；以下列出全部 3 条。

### 1. [#1283](https://github.com/MoonshotAI/kimi-cli/issues/1283) 【功能请求】Memory System - 跨会话持久化上下文
- **作者**：CatKang | **评论数**：15 | **状态**：OPEN
- **重要性**：⭐⭐⭐⭐⭐ 这是社区呼声最高的长期功能请求，已获得 15 条讨论。提议实现完整的"记忆系统"，包括 AI 管理的自动笔记和用户通过配置定义的手动指令，以保留项目模式、用户偏好等上下文。这是 Kimi CLI 向"个人化 AI 助手"演进的关键能力。
- **社区反应**：讨论充分，需求明确，迫切度高。

### 2. [#2573](https://github.com/MoonshotAI/kimi-cli/issues/2573) 【Bug】Web UI 切换会话时无限"Connecting to session..."转圈
- **作者**：belenov-maker | **版本**：1.48.0 (macOS 26.4)
- **重要性**：⭐⭐⭐⭐ 直接影响 Web UI（Technical Preview）核心交互流程的可用性，属于 P0 级功能性 Bug。
- **社区反应**：刚开 Issue 1 天，已确认复现。

### 3. [#2582](https://github.com/MoonshotAI/kimi-cli/issues/2582) 【Bug】CLI 流式输出挂起，会话不可用
- **作者**：bobtu56 | **版本**：0.31.1 (Windows 10)
- **重要性**：⭐⭐⭐⭐⭐ **阻塞性 Bug** —— 流式生成卡死后整个会话无法继续使用，必须重启 CLI。直接影响核心使用体验。
- **社区反应**：新发现（今日创建），需更多日志信息定位。

---

## 🛠️ 重要 PR 进展

> 注：过去 24 小时共有 8 条 PR 更新，以下按重要性排序全部列出。

### 1. [#2577](https://github.com/MoonshotAI/kimi-cli/pull/2577) 修复 Web/Vis 在旧控制台编码下打印启动横幅崩溃
- **作者**：ayaangazali | **状态**：OPEN
- **内容**：在 GBK 等无法表示 U+279C（➜）的控制台下，启动横幅打印会导致崩溃。改用 `print_banner` 统一处理编码问题。解决 Issue #2532。

### 2. [#2575](https://github.com/MoonshotAI/kimi-cli/pull/2575) 通过 fire_and_forget 触发 PostToolUse Hooks
- **作者**：ayaangazali | **状态**：OPEN
- **内容**：修正 `PostToolUse` / `PostToolUseFailure` 钩子直接用 `asyncio.create_task` 创建任务后丢弃句柄导致的两个问题：任务丢失、无法传播异常。解决 Issue #2564。

### 3. [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) 修正 `StrReplaceFile` 替换计数逻辑
- **作者**：ayaangazali | **状态**：OPEN
- **内容**：成功消息中报告的替换次数基于原始内容计算，但实际修改是基于运行中内容，应对齐。属于自检发现的小型正确性修复（< 100 LOC）。

### 4. [#2530](https://github.com/MoonshotAI/kimi-cli/pull/2530) 修复 Shell 工具在分离子进程持有管道时的阻塞问题
- **作者**：ayaangazali | **状态**：OPEN
- **内容**：`_run_shell_command` 在前台模式下需等待 stdout/stderr EOF 才检查退出码，类似 `daemon & echo done` 场景下会一直等到超时。解决 Issue #2468，是 Shell 工具可靠性的重要改进。

### 5. [#2507](https://github.com/MoonshotAI/kimi-cli/pull/2507) ACP 模式下明确 `QuestionNotSupported` 信号
- **作者**：ayaangazali | **状态**：OPEN
- **内容**：ACP server 模式中 `QuestionRequest` 一直以空 dict 解决，与用户主动取消无法区分，模型收到的反馈失真。改为发送明确的 `QuestionNotSupported` 信号。解决 Issue #2495。

### 6. [#2535](https://github.com/MoonshotAI/kimi-cli/pull/2535) 将 prompt cache key 限定到 Moonshot 官方 API
- **作者**：Sanjays2402 | **状态**：OPEN
- **内容**：第三方 Kimi 兼容端点不再收到 `prompt_cache_key` 参数，官方 Kimi/Moonshot API 保留 session 缓存。解决 Issue #2534，避免缓存键污染。

### 7. [#2581](https://github.com/MoonshotAI/kimi-cli/pull/2581) chore: 升级 kosong 至 0.56.0 【已合并】
- **作者**：jackfish212 | **状态**：✅ CLOSED
- **内容**：依赖升级，更新发布说明与版本校验脚本。

### 8. [#2580](https://github.com/MoonshotAI/kimi-cli/pull/2580) 修复 kosong 在无 beta 特性时仍发送空 anthropic-beta 请求头 【已合并】
- **作者**：7Sageer | **状态**：✅ CLOSED
- **内容**：Anthropic provider 原无条件构建 `anthropic-beta` 头，现仅在声明了 beta 特性时附加，避免空头开销与潜在协议问题。

---

## 📈 功能需求趋势

从近期 Issue 与讨论中，社区的关注方向可归纳为以下几类：

| 方向 | 代表性议题 | 热度 |
|---|---|---|
| **🧠 持久化与记忆系统** | #1283（跨会话记忆、用户偏好、项目模式自动管理） | ⭐⭐⭐⭐⭐ 最高 |
| **🖥️ Web UI 体验完善** | #2573（Web UI 会话切换卡死） | ⭐⭐⭐⭐ |
| **🔌 IDE / 编辑器集成** | 隐含在 ACP、shell 工具改进（#2507, #2530） | ⭐⭐⭐ |
| **🪟 跨平台/编码兼容** | #2577（GBK 等老旧控制台）、#2582（Windows 流式输出） | ⭐⭐⭐⭐ |
| **🤖 多模型/多 Provider 支持** | #2535（缓存键隔离）、kosong 升级 | ⭐⭐⭐ |
| **🛠️ 工具调用稳定性** | #2554, #2575, #2530（计数、hooks、shell 阻塞） | ⭐⭐⭐⭐ |

**核心趋势**：从"基础 CLI 体验"向"长期协作 AI 助手"演进 —— 记忆系统和 Web/IDE 集成是下一阶段最被期待的能力。

---

## 👨‍💻 开发者关注点

综合今日 Issue 和 PR，开发者反馈中的高频痛点可总结为：

1. **🔁 跨会话状态丢失** —— 没有持久化记忆，每次启动都要重新建立上下文，是 #1283 长期高热度的根本原因。
2. **⏱️ 长任务可靠性不足** —— Shell 工具会因后台进程持有管道而超时（#2530）、CLI 流式生成会无限挂起（#2582），说明异步/进程管道的鲁棒性仍是短板。
3. **🌐 Web UI 仍处早期** —— Technical Preview 阶段切换会话即卡死（#2573），生产可用性有待提升。
4. **🔣 国际化与字符编码兼容性** —— 中文 GBK 等老控制台仍会触发崩溃（#2577），Windows 用户体验需重点关注（#2582）。
5. **🧩 Provider 协议细节** —— 第三方兼容端点对官方缓存键、Anthropic beta header 等的处理容易出错（#2535, #2580），需更明确的边界。
6. **🪝 Hooks 与 ACP 语义** —— Hook 任务丢失（#2575）、ACP 取消信号失真（#2507）反映出扩展性机制的契约需要更严谨。

> 💡 **建议**：若社区希望推动 Memory System（#1283）落地，可考虑先在配置层提供"项目级 CLAUDE.md / AGENTS.md"类机制作为最小可行版本，降低实现门槛。

---

*报告生成时间：2026-08-04 · 数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-08-04**

---

## 📌 今日速览

OpenCode 今日发布 v1.18.12 维护版本，修复了 Azure GPT-5.5+ 在启用推理时的请求失败问题以及 Desktop 端包含大图附件时的 composer 卡顿。社区层面，**DeepSeek V4 Flash 相关问题成为今日焦点**（订阅路由异常、文本输出异常两种问题同时出现），而长期高热度的功能请求如"会话目标（/goal）"和"持久会话记忆"持续吸引社区讨论，Desktop 应用稳定性（卡顿、滚动、主题切换 Bug）依旧是开发者反馈最多的痛点。

---

## 🚀 版本发布

### v1.18.12（2026-08-04）

**Core**
- 修复 Azure GPT-5.5+ 在启用 reasoning 时的 completion 请求失败问题（@frederiknsgo）

**Desktop**
- 减少 draft 包含大粘贴图片或附件时的 composer 卡顿
- 项目搜索可匹配所有已知近期项目，不再仅匹配前 5 个

---

## 🔥 社区热点 Issues

1. **#27167 [FEATURE] Add native session goals with `/goal`** — 当前讨论度最高的 Issue，67 条评论、👍123，是社区长期呼吁的"会话生命周期目标"功能，旨在让 `/` 自定义命令之上加入持久化的会话目标管理机制。  
   [https://github.com/anomalyco/opencode/issues/27167](https://github.com/anomalyco/opencode/issues/27167)

2. **#39845 DeepSeek V4 Flash 在 OpenCode Go 订阅中突然要求"启用中国托管模型"** — Mid-session 突然出现的路由/订阅判定问题（13 条评论、👍22），暴露了 Go 订阅与区域路由之间的兼容性问题。  
   [https://github.com/anomalyco/opencode/issues/39845](https://github.com/anomalyco/opencode/issues/39845)

3. **#16077 [FEATURE] Persistent Session Memory** — 呼吁启动时从本地文件加载历史会话上下文，实现跨会话连续性，12 条评论。  
   [https://github.com/anomalyco/opencode/issues/16077](https://github.com/anomalyco/opencode/issues/16077)

4. **#12710 [FEATURE] `{cmd:}` config placeholder for credential helpers** — 配置占位符扩展提案，允许在配置中引用命令执行结果，便于凭证助手场景（5 条评论）。  
   [https://github.com/anomalyco/opencode/issues/12710](https://github.com/anomalyco/opencode/issues/12710)

5. **#38932 Pasting a long text in prompt box make Desktop app hang** — 在 prompt 框粘贴 5000+ 字符文本导致 Desktop 应用无限冻结。  
   [https://github.com/anomalyco/opencode/issues/38932](https://github.com/anomalyco/opencode/issues/38932)

6. **#20600 Desktop app randomly scrolls to middle of conversation** — Desktop 应用聊天过程中随机跳到对话中间，影响阅读体验。  
   [https://github.com/anomalyco/opencode/issues/20600](https://github.com/anomalyco/opencode/issues/20600)

7. **#40314 Unable to connect to the first certificate** — MTN Broadband 等特定网络环境下 SSL 证书连接失败，影响正常使用。  
   [https://github.com/anomalyco/opencode/issues/40314](https://github.com/anomalyco/opencode/issues/40314)

8. **#38089 Qwen3.7-plus / Qwen3.7-max models missing from Zen** — Zen 文档声明支持的 Qwen3.7 系列模型在实际配置中不可见，仅有 3.6 变体。  
   [https://github.com/anomalyco/opencode/issues/38089](https://github.com/anomalyco/opencode/issues/38089)

9. **#40319 OpenCode keeps attempting connection without giving a connection error** — 指向不可达 baseURL 时持续重试 60 秒以上不报错，违反"快速失败"直觉。  
   [https://github.com/anomalyco/opencode/issues/40319](https://github.com/anomalyco/opencode/issues/40319)

10. **#40171 Go service `/v1/responses` returns 200 but emits incomplete SSE stream** — 流式响应缺失 `response.output_item.added` 和 `response.content_part.added` 事件，导致 Codex 风格客户端无法解析。  
    [https://github.com/anomalyco/opencode/issues/40171](https://github.com/anomalyco/opencode/issues/40171)

---

## 🛠️ 重要 PR 进展

1. **#27231 feat: add edit button for connected providers** — 为已连接的 provider 添加编辑按钮，完善 provider 管理 UI（对应 #20598）。  
   [https://github.com/anomalyco/opencode/pull/27231](https://github.com/anomalyco/opencode/pull/27231)

2. **#36710 fix(core): bound event log compaction** — 引入只读事件日志状态及"按默认 dry-run"的有界压缩机制（`--session` / `--all`、`--apply` 等开关），解决事件日志无限增长问题（对应 #33356）。  
   [https://github.com/anomalyco/opencode/pull/36710](https://github.com/anomalyco/opencode/pull/36710)

3. **#40351 feat(tui): localize TUI interface to Simplified Chinese** — TUI 全量简中本地化，覆盖首页、命令面板、权限/问题对话框、侧边栏、diff viewer、错误页等，为中文用户降低使用门槛。  
   [https://github.com/anomalyco/opencode/pull/40351](https://github.com/anomalyco/opencode/pull/40351)

4. **#40268 fix(session): retry top-level stream request timeouts** — 对 OpenAI Responses 兼容流式错误的顶层请求增加重试机制（对应 #39221）。  
   [https://github.com/anomalyco/opencode/pull/40268](https://github.com/anomalyco/opencode/pull/40268)

5. **#37679 fix(core): drop undefined metadata values from permission requests** — 修复 glob/grep 权限请求中 `undefined` 元数据被持久化的问题（对应 #37650）。  
   [https://github.com/anomalyco/opencode/pull/37679](https://github.com/anomalyco/opencode/pull/37679)

6. **#40198 fix(opencode): match canonically equivalent Unicode in patches** — 在 `seekSequence()` 中增加最终 Unicode 规范等价匹配，修复补丁验证因等效字符失败（对应 #31651）。  
   [https://github.com/anomalyco/opencode/pull/40198](https://github.com/anomalyco/opencode/pull/40198)

7. **#40188 feat(plugin): add request-scoped `chat.model` hook** — 新增请求级 `chat.model` 插件钩子，允许插件在 provider/model/auth 解析前替换单次请求的模型（对应 #18793，部分覆盖 #24006）。  
   [https://github.com/anomalyco/opencode/pull/40188](https://github.com/anomalyco/opencode/pull/40188)

8. **#38790 feat(app): add workspace flows to new layout** — 新版布局加入"本地/新建/已有"工作区选择流程，支持草稿持久化、校验与默认值记忆。  
   [https://github.com/anomalyco/opencode/pull/38790](https://github.com/anomalyco/opencode/pull/38790)

9. **#40265 fix: gpt-5.5+ in combination with azure fails with reasoningEffort** — 修复 Azure + GPT-5.5+ + `reasoningEffort` + `useCompletionUrls` 的请求失败（对应 #40257，本日报版本发布的修复即来自此 PR）。  
   [https://github.com/anomalyco/opencode/pull/40265](https://github.com/anomalyco/opencode/pull/40265)

10. **#40334 feat(tui): make permission mode keybind configurable** — 让 permission 模式切换的快捷键可在 TUI 中自定义（对应 #40331）。  
    [https://github.com/anomalyco/opencode/pull/40334](https://github.com/anomalyco/opencode/pull/40334)

---

## 📈 功能需求趋势

通过对当日活跃 Issue 的梳理，社区关注的功能方向集中在：

| 方向 | 代表 Issue | 关注度 |
|------|------------|--------|
| **会话生命周期与持久化** | #27167（/goal）、#16077（persistent memory） | ⭐⭐⭐⭐⭐ |
| **Desktop GUI 完备化** | #31399（skill/MCP GUI）、#40335（MCP 配置界面）、#40341（任意文件作为工具上下文） | ⭐⭐⭐⭐ |
| **Provider / 模型生态** | #38089（Qwen3.7）、#39845（DeepSeek 路由）、#40321（DeepSeek 输出异常） | ⭐⭐⭐⭐ |
| **插件/扩展能力** | #40188（chat.model 钩子）、#12710（{cmd:} 占位符） | ⭐⭐⭐ |
| **流式 / API 兼容** | #40171（SSE 不完整）、#40268（流超时重试） | ⭐⭐⭐ |

可以看出社区最强烈的诉求是 **"让 OpenCode 更像一位长期协作者"**（持久目标、记忆、Desktop GUI 完整度），其次是 **新模型/Provider 的稳健接入**。

---

## 💡 开发者关注点

从开发者侧反馈中提炼出以下高频痛点：

1. **Desktop 应用稳定性问题集中爆发** — 至少 6 个高评论 Issue 涉及 Desktop：超长文本粘贴冻结（#38932）、滚动跳变（#20600、#17996、#29094）、主题下拉框失效（#40354）、turn 状态卡死（#40353）、整体冻结（#40347）、CLI 与 Desktop 版本错位（#35122）。**Desktop 体验已经成为开发者反馈的最大噪音源**。

2. **网络与连接错误的"沉默失败"** — `#40319`、`#40330`、`#40314`、`#40308` 都指向同一类问题：连接失败、订阅异常、SSL 错误时不退出、不报错、不给反馈，开发者强烈希望**更短的失败反馈与显式状态**。

3. **新模型接入的"半生不熟"** — DeepSeek V4 Flash 同时出现订阅路由（#39845）和输出文本损坏（#40321）两类问题；Qwen3.7 在文档与实际不一致（#38089），说明新增模型矩阵的接入与回归测试有待加强。

4. **MCP 与 Skill 的 Desktop GUI 缺失** — 中文社区（#31399）及英文社区（#40335）一致呼吁在 Desktop 中提供 MCP/Skill 的可视化配置入口，目前仍依赖 CLI 或手改配置。

5. **小细节但持续影响体验** — RTL/bidi 渲染（#40286）、TUI 因循环 symlink 递归崩溃（#40349）、Go 服务 SSE 流不完整（#40171）等，反映出对**国际化健壮性与对外 API 契约**的更高要求。

---

*日报基于 GitHub 公开数据自动整理，数据时间窗口：过去 24 小时。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-04

## 📌 今日速览

过去 24 小时内社区活跃度较高，**44 个 PR 与 50 个 Issue** 被更新，维护团队（petrroll、davidbrai、christianklotz、mitsuhiko 等）密集处理 Windows/WSL 兼容、Compaction 稳定性、新模型与新 Provider 接入等问题。**Harness v2 架构** 是当前最重要的演进方向，多个相关 PR 正在并行推进；同时 Windows 平台支持被维护者正式提上讨论议程。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

### 1. [#6187 — Pi login hangs in WSL after browser-based GitHub Copilot device authorization](https://github.com/earendil-works/pi/issues/6187)
**20 条评论** — 当日最高活跃度。WSL 环境下 Copilot 浏览器授权完成后，Pi 终端无法检测到授权状态而陷入挂起等待，直接阻塞登录流程，影响大量 WSL 用户。

### 2. [#6768 — Compaction using Copilot Enterprise not possible](https://github.com/earendil-works/pi/issues/6768)
**17 条评论 · 👍18** — 当日最高点赞。Copilot Enterprise License 在调用 Compaction 时对 OpenAI（421 Misdirected Request）与 Anthropic 模型均报错，企业用户无法使用核心的上下文压缩功能。

### 3. [#7064 — WSL absolute windows paths are mishandled](https://github.com/earendil-works/pi/issues/7064)
**11 条评论** — WSL2 + Windows 安装场景下，`read`/`write`/`edit` 工具对 Windows 绝对路径处理失败，被迫回退到命令行方案，体验严重降级。

### 4. [#7161 — `anthropic-messages` never sends `x-client-request-id`](https://github.com/earendil-works/pi/issues/7161)
**9 条评论** — Anthropic 路径缺失 session affinity header，导致多账号代理（CliProxyAPI）无法正确路由会话，是网关场景下的关键修复。

### 5. [#7020 — Sometimes Pi doesn't continue after compaction](https://github.com/earendil-works/pi/issues/7020)
**9 条评论** — 长会话 Compaction 后偶发性"卡住"不继续，影响以 Pi 作为 coordinator 持续工作的核心用例。

### 6. [#7547 — [Windows] How do you use Pi on windows? What issues are you seeing?](https://github.com/earendil-works/pi/issues/7547)
**6 条评论** — 维护者 petrroll 发起的调研帖，公开征询 Windows 用户使用方式与痛点，预示 Windows 兼容性将进入下一阶段重点投入。

### 7. [#7130 — Backspace deletes 2 chars in Kitty (Kitty protocol release events not filtered)](https://github.com/earendil-works/pi/issues/7130)
**5 条评论** — Kitty 终端下退格键多删一个字符，影响所有 Kitty 用户的输入体验。

### 8. [#7399 — `truncateToWidth()` leaves dangling OSC 8 hyperlink](https://github.com/earendil-works/pi/issues/7399)
**5 条评论** — 文本截断时未跟踪 OSC 8 超链接状态，会写入悬挂的转义序列，影响终端显示正确性。

### 9. [#7047 — Gemini 3.x tool-call IDs stripped from function calls/responses](https://github.com/earendil-works/pi/issues/7047)
**5 条评论** — 多轮工具调用中 Gemini 3.x 返回的 `id` 字段在历史回放时被丢弃，导致后续工具响应无法匹配，是新模型适配的典型问题。

### 10. [#7560 — xai Grok 4.5 does not show up in the models list for GitHub Copilot Business subscription](https://github.com/earendil-works/pi/issues/7560)
**3 条评论** — GitHub Copilot Business 订阅下未列出 Grok 4.5，反映新模型同步机制的滞后。

---

## 🛠️ 重要 PR 进展

### 1. [#7503 — feat(agent): implement harness v2 for in-memory storage](https://github.com/earendil-works/pi/pull/7503) ⏳ In Progress
引入 Harness v2 会话基础设施，新增 `SessionStorage`/`SessionRepo`/`Session` 中性 API 与首个内存后端，是项目架构演进的核心 PR。

### 2. [#7396 — feat(coding-agent): add server session backend](https://github.com/earendil-works/pi/pull/7396) 🔓 Open
新增 `@earendil-works/pi-coding-agent/server` 持久化后端，以 JSONL + 跨进程排他锁存储会话，并支持崩溃恢复与实时 transcript。

### 3. [#7451 — fix(coding-agent): bound model catalog refreshes](https://github.com/earendil-works/pi/pull/7451) ✅ Closed
修复模型目录刷新风暴问题（关闭 #7027、#7113、#7153、#7418、#7443），通过取消与队列机制避免无限重试。

### 4. [#7339 — DRAFT: add openai background mode responses](https://github.com/earendil-works/pi/pull/7339) 🔓 Open
OpenAI Responses API 的 `background: true` 模式接入，长任务可异步执行，作者主动征集设计反馈。

### 5. [#7571 — feat(ai): add built-in Cortecs provider support](https://github.com/earendil-works/pi/pull/7571) ✅ Closed
新增欧洲 AI 路由商 **Cortecs** 作为内置 Provider，由 models.dev 驱动，对标 OpenRouter。

### 6. [#7548 — fix(coding-agent): sandbox issue analysis tools](https://github.com/earendil-works/pi/pull/7548) 🔓 Open
为 `/is <issue-url>` 与 `pi -p --approve` 分析流程增加沙箱化，捕获不可变的 issue snapshot 防止模型侧工具重复拉取。

### 7. [#7562 — feat(ai): support Anthropic server-side fallbacks](https://github.com/earendil-works/pi/pull/7562) ✅ Closed
为 Anthropic 加入 opt-in 的服务端 fallback 支持，可在重放中保留 fallback 切换并记录实际服务模型。

### 8. [#7394 — fix(coding-agent): make JSON streaming output linear](https://github.com/earendil-works/pi/pull/7394) ✅ Closed
JSON/RPC 模式仅发射 delta 的 `message_update`，引入 stdout backpressure；长响应下从 O(n²) 降为 O(n)，同时记录 wire-protocol 破坏性变更。

### 9. [#7561 — fix(coding-agent): stream delta-only message_updates in json mode](https://github.com/earendil-works/pi/pull/7561) ✅ Closed
同主题的独立修复 PR，针对 `--mode json` 累积序列化的二次方增长与 stdout 排空问题。

### 10. [#7540 — fix(coding-agent): resume after context-limited length stops](https://github.com/earendil-works/pi/pull/7540) ⏳ In Progress
把 length stop 当作上下文溢出处理（含 cache-write token 与可能的推理 token），并自动重试压缩，修复长上下文会话中断。

---

## 📈 功能需求趋势

从近 24 小时 Issue 与 PR 提炼，社区最关注的方向依次为：

1. **🏗️ Harness v2 会话架构** — #7503、#7396、#7558、#7551 同时推进 backend-neutral Session API、SQLite lane、transport-特定鉴权，是项目下一阶段基石。
2. **🪟 Windows / WSL 体验** — #6187、#7064、#7547、#6104、#6817、#6596、#7570 一系列问题 + 维护者主动调研，Windows 已被列为优先改进领域。
3. **🧠 Compaction 可靠性** — #6768、#7020、#7253、#7553、#7540、#7370 从 Copilot Enterprise 支持、连续性、竞态、可配置 thinking level 等多维度持续打磨。
4. **🤖 新模型 / 新 Provider** — Grok 4.5（#7560）、Gemini 3.x（#7047）、OpenAI background mode（#7339）、Anthropic fallback（#7562）、Cortecs（#7571）。
5. **⚡ 性能与 TUI 体验** — JSON 流线性化（#7394、#7561）、TUI retained rendering（#7541）、catalog 刷新风暴（#7451）、iTerm2 payload size（#7465）。
6. **🔐 安全与沙箱** — Issue 分析工具沙箱化（#7548）开启新方向。

---

## 💬 开发者关注点

- **跨平台一致性**：Windows/WSL 是当前最大的体验断点，路径处理、登录流程、`taskkill` 兼容、`find` 工具、根目录模式等问题集中暴露，维护者已意识到并主动调研。
- **长会话可靠性**：Compaction 作为长会话生命线，竞态（手动 vs 自动）、length stop 中断、Copilot Enterprise 兼容性、thinking budget 不可配置都让"重度用户"感到痛点。
- **Provider 适配速度跟不上模型迭代**：Gemini 3.x tool-call id、Grok 4.5 模型同步、Anthropic session affinity 反映出对新模型的兼容存在系统性滞后。
- **JSON/RPC 输出契约**：累积式序列化造成长响应二次方增长，多个 PR 同时在做线性化收敛，社区对 wire-protocol 稳定性的诉求明确。
- **沙箱与安全**：开发者希望 `/is` 之类的网络分析流程不要污染上下文、也不被外部拉取劫持，体现"安全 + 可复现"的工程化诉求。

---

*报告基于 [earendil-works/pi](https://github.com/earendil-works/pi) 过去 24 小时数据自动生成。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-08-04**

---

## 📌 今日速览

- **v0.21.4 正式发布**：Web Shell 升级为可发布的桌面应用，支持原生生命周期管理、单实例行为和自动更新；同时 `v0.21.5` 的发布因 quality 任务失败而回滚（#8476）。
- **Web Shell 成为今日焦点**：围绕会话恢复、artifact 行为、Firefox 选区样式、本地认证等多个方向集中提交了 6+ 个相关 PR。
- **MCP 与会话管理成为高频痛点**：当日多个 Issue 与 PR 聚焦 MCP 工具在恢复会话后失效、fork agent 上下文污染、APIUserAbortError 误分类等问题，提示稳定性和会话生命周期仍是核心改进方向。

---

## 🚀 版本发布

### v0.21.4

- **Web Shell 正式成为桌面应用**：提供原生生命周期管理、单实例行为与自动更新（[PR #8132](https://github.com/QwenLM/qwen-code/pull/8132)）。
- **Web Shell 历史分页优化**：对超大 turn 的渲染做了更稳健的处理。

> ⚠️ 注：紧随其后的 **v0.21.5** 因 CI `quality` 作业失败未能成功发布（[Issue #8476](https://github.com/QwenLM/qwen-code/issues/8476)），团队正在修复。

---

## 🔥 社区热点 Issues

> 选取当日评论最多或优先级最高的 Issue。

1. **[#8102](https://github.com/QwenLM/qwen-code/issues/8102) — proposal(core): 确定性工具执行边界的可信 Agent 运行时（13 评论）**
   提出让 LLM 留在信任边界之外、由运行时确定性地约束、授权、观测、评估工具调用的方向，是当前最具战略价值的讨论之一。

2. **[#8316](https://github.com/QwenLM/qwen-code/issues/8316) — 取消提示（Ctrl+C）后输入框未恢复内容（7 评论）**
   实际影响用户的常见痛点：在思考阶段取消后，原提示词丢失，需重新输入。

3. **[#8382](https://github.com/QwenLM/qwen-code/issues/8382) — Duplicate provider tool call id（6 评论）**
   工具调用频繁出现 "Duplicate provider tool call id / not recorded" 错误，导致整个会话中断，影响稳定性。

4. **[#8470](https://github.com/QwenLM/qwen-code/issues/8470) — 使用 Alibaba Token Plan 时模型名称过长（5 评论）**
   模型前缀 `[Modelstudio token plan]` 在 Paseo 等移动端场景下被截断，导致用户无法识别当前选择的模型。

5. **[#8281](https://github.com/QwenLM/qwen-code/issues/8281) — 增加 Email 通道（IMAP/SMTP）（5 评论）**
   提议新增官方支持的 Email Channel，使 Agent 能通过专属邮箱与用户交互，扩展交互面。

6. **[#7306](https://github.com/QwenLM/qwen-code/issues/7306) — 强化工具输出预算、可观测性与 artifact 生命周期（5 评论）**
   针对工具输出预算管理、observability 与持久化 artifact 的进一步加固方案，与 #7323/#7470 上一阶段工作衔接。

7. **[#8317](https://github.com/QwenLM/qwen-code/issues/8317) — Ctrl+Shift+C 在 CLI 中无法复制文本（4 评论）**
   终端复制快捷键失效，疑似某次回归导致，影响日常 CLI 使用。

8. **[#8326](https://github.com/QwenLM/qwen-code/issues/8326) — Fork Agent 继承兄弟 fork 指令导致的上下文污染（4 评论，👍1）**
   并行 fork agent 在同一父消息中继承全部 functionCall，存在隐私与正确性风险。

9. **[#8432](https://github.com/QwenLM/qwen-code/issues/8432) — Bailian 个人 Token Plan 模型列表不同步（4 评论）**
   `/auth` 内置的模型清单已与控制台脱节，图像/视频生成失败，提示模型清单需要定期同步机制。

10. **[#8400](https://github.com/QwenLM/qwen-code/issues/8400) — 【P1】Desktop 0.0.5/Windows：重启后会话被静默删除（3 评论）**
    因 ACP `session/load` 工作区 cwd 不匹配导致 provider 返回 0 条消息，应用直接自动删除本地会话镜像是**严重的数据丢失问题**。

---

## 🛠️ 重要 PR 进展

1. **[#8502](https://github.com/QwenLM/qwen-code/pull/8502) — ci: 将受信作者 fork PR 与无 checkout 任务路由到 ECS 池**
   通过 `MAINTAINER_ECS_RUNNER_DISABLED` 开关，让 OWNER/MEMBER/COLLABORATOR 提交的 fork PR 直接走自托管 ECS CI，与 in-repo PR 一致。

2. **[#8482](https://github.com/QwenLM/qwen-code/pull/8482) — fix(core): 未投递过的 MCP 调用视为首次投递**
   修复 #8387 引入的 replay-safety 门控误判：`mcp-tool.test.ts` 中 auto-reconnect 用例在 main 上长期为红，已定位 bisect。

3. **[#8496](https://github.com/QwenLM/qwen-code/pull/8496) — feat(web-shell): 流式 turn 中即时执行只读信息命令**
   `/stats`、`/about`、`/context` 在 turn 进行时不再被吞掉，可立即运行，提升 Web Shell 可用性。

4. **[#8332](https://github.com/QwenLM/qwen-code/pull/8332) — feat(cli): 音频附件桥接**
   当主模型不支持音频时，交互式与 ACP 音频附件通过配置的批处理语音模型转写，并以"显式不可信机器转录"标记替换。

5. **[#8488](https://github.com/QwenLM/qwen-code/pull/8488) — fix(core): 加固 Qwen 3.8 reasoning effort 线缆格式**
   合并后评审反馈四项修复：移除与 `reasoning_effort` 冲突的 `enable_thinking`/`thinking_budget`，统一 DashScope 线缆行为。

6. **[#8439](https://github.com/QwenLM/qwen-code/pull/8439) — feat(cli): VP 模式下 Ctrl+点击超链接与右键上下文菜单**
   Virtual Viewport 启用 SGR 鼠标追踪后，恢复了"点击超链接打开"与"右键菜单"两个被静默丢失的原生终端能力。

7. **[#8260](https://github.com/QwenLM/qwen-code/pull/8260) — fix(core): 历史合并时保留每段 reasoning 的签名**
   `geminiChat.ts` 的 turn-consolidation 步骤此前只保留首个 `thoughtSignature`，本次修复并行工具调用场景下多段推理签名丢失的问题。

8. **[#8125](https://github.com/QwenLM/qwen-code/pull/8125) — feat(serve): 引入外部工具守卫 provider**
   为托管 `qwen serve` ACP 部署提供可选的 pre-execution 策略 provider，进程启动模式默认 `off`，开启后执行认证握手。

9. **[#8274](https://github.com/QwenLM/qwen-code/pull/8274) — feat: 支持从任意会话位置 fork**
   解决之前只能基于最新会话状态分支的问题，引入更安全的"以某条 Assistant 消息为分支点"的语义。

10. **[#7925](https://github.com/QwenLM/qwen-code/pull/7925) — fix(core): 启动时清理过期的 worktree 工程快照**
    修复 `.qwen/projects/<worktreePath>` 快照永远不会被清理的 bug，避免临时 worktree 路径在崩溃/强杀后留下垃圾。

---

## 📈 功能需求趋势

从今日 Issues 与 PR 中提炼出几条清晰的方向：

| 方向 | 代表性 Issue / PR | 趋势 |
|---|---|---|
| **多通道交互** | #8281（Email 通道）、#8461（本地 `gh` 认证） | Agent 接触面继续向 IMAP/SMTP、GitHub 等系统延伸 |
| **多模态输入** | #8332（音频桥接）、#8183（本地视频端到端） | 音视频作为一等公民成为现实诉求 |
| **Web Shell / 桌面化** | v0.21.4、#8496、#8494、#8445、#8417 | 已进入打磨阶段，artifact、auth、Firefox 兼容、UI 细节 |
| **MCP 可靠性** | #8382、#8433、#8492、#8482 | MCP 工具在恢复会话、热重载等场景的稳定性是焦点 |
| **会话生命周期 / fork** | #8326、#8274、#8412、#8400 | 并行 agent、历史恢复、分支语义需要系统性整理 |
| **模型与推理控制** | #8472 / #8488、#8452、#8260 | Qwen 3.8 reasoning effort、prompt cache、签名保留等是新热点 |
| **性能与 CI 优化** | #8502、#8497、#8498、#8474、#8499 | 大 PR 反向审计、review worktree 清理、SKILL 上下文瘦身 |
| **可观测与可审计性** | #8102、#7306、#8397 | "可信 Agent 运行时"成为讨论主线，legacy `/audit` 技能正在设计 |

---

## 👨‍💻 开发者关注点

社区反馈集中在以下几类高频痛点：

1. **MCP 与工具执行的脆弱性**：重复 tool_call id、resume 会话后 MCP 工具失效、元数据热重载残留是当前被反复提及的工程问题（#8382 / #8433 / #8492 / #8482）。
2. **会话生命周期与数据安全**：用户对**会话数据丢失**高度敏感，Desktop 在重启后因 cwd 错配直接静默删除本地镜像是 P1 级问题（#8400）；同时 fork 上下文污染也存在泄漏风险（#8326）。
3. **OpenAI 兼容路径的差异**：`auth_type=openai` 下 `APIUserAbortError` 未被 `isAbortError` 识别，导致取消语义错位、会话转写缺失（#8356 / #8398）。
4. **UI 与终端兼容性细节**：Firefox 选区高亮缺失、Warp 终端 `Ctrl+Tab` 冲突、ConEmu 闪烁、提示取消后未恢复等（#8417 / #8330 / #8385 / #8316）——这些"小问题"严重拉低日常体验。
5. **性能与缓存**：size-triggered microcompaction 反复破坏 prompt cache prefix，直接增加推理成本（#8452）。
6. **模型列表与平台同步**：Bailian 个人版模型清单过期影响图像/视频生成（#8432 / #8470），提示需要自动同步通道。
7. **CI/Review 工作流维护**：超大 PR 的反向审计成为 review 瓶颈，团队正在通过预算闸门、SKILL 上下文瘦身、worktree 清理等系统化手段治理（#8497 / #8498 / #8499 / #8474）。
8. **战略层面对"可信 Agent 运行时"的期待**：开发者期待运行时本身能对模型产出进行确定性约束、授权、观测与评估，而不只是依赖模型自身行为（#8102 / #8125）。

---

*日报基于 GitHub Issues / Pull Requests / Releases 公开数据生成，仅反映社区动态，不代表官方立场。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-08-04** | **数据来源：github.com/Hmbown/DeepSeek-TUI**

> 📌 **备注**：仓库近期正从 DeepSeek-TUI 向 **CodeWhale** 品牌过渡（issues/PRs 大量引用 CodeWhale），下文按原仓库名 DeepSeek TUI 表述。

---

## 1. 今日速览

v0.9.4 发布列车（release train）今日正式成型——**PR #5135** 整合 77 个提交，准备合并到 main，多个 Runtime API 端点、ACP 工具暴露、Model Studio 推理修复等关键 PR 同步涌入。同时社区讨论焦点集中在 **v0.9.3 子代理/运行时控制面**、**跨会话记忆**、**ACP 注册（Zed 集成）** 以及 **OpenCode / DeepSeek-V4 模型支持** 等方向。

---

## 2. 版本发布

⚠️ **过去 24 小时无新 Release 推送**。不过 **v0.9.4 发布列车** 已进入合入 main 阶段（PR #5135，共 77 个提交、领先 main 18 个 train 提交），预计近期发布。

---

## 3. 社区热点 Issues（Top 10）

| # | Issue | 关键内容 | 热度 | 链接 |
|---|-------|---------|------|------|
| 1 | **#3192** Put it up for agentclientprotocol/registry | 申请加入 ACP 官方注册表，方便 Zed 等编辑器直接安装使用 | 13 评论 | [#3192](https://github.com/Hmbown/CodeWhale/issues/3192) |
| 2 | **#3205** v0.9.3: Fleet model classes / loadout auto / semantic route roles | 构建 TUI/CLI/exec/subagents/Fleet 共享的模型与负载选择器，Fleet 需统一自动选模 | 11 评论 | [#3205](https://github.com/Hmbown/CodeWhale/issues/3205) |
| 3 | **#1481** Support OpenCode Go/Zen (DeepSeek-V4) | 社区强烈要求支持 OpenCode Go/Zen，价格便宜且提供 DeepSeek-V4 | 10 评论 / 👍1 | [#1481](https://github.com/Hmbown/CodeWhale/issues/1481) |
| 4 | **#4959** Proposed 'stop' command | YOLO 模式下 `+ stop` / `stop` 被忽略，需增加 `/stop` 命令及 STOP 词拦截机制 | 7 评论 | [#4959](https://github.com/Hmbown/CodeWhale/issues/4959) |
| 5 | **#4949** 讨论 "Constitution" 的中文翻译 | 围绕"宪法 vs 协作准则"的中文译法争议，邀请母语者参与 | 7 评论 | [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) |
| 6 | **#4022** v0.9.3: CLI/TUI parity for subagent & runtime control | 防止子代理控制面被锁在 TUI 内，CLI/云端需保持一致 | 7 评论 | [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) |
| 7 | **#2492** 不具备跨会话记忆 | 每次重启会丢失上一轮会话记忆，要求写入后重启自动读取 | 5 评论 | [#2492](https://github.com/Hmbown/CodeWhale/issues/2492) |
| 8 | **#1917** Universal PreToolUse/PostToolUse hook layer | 提议统一的 hook 生命周期层，支持任意操作的 Cancel/Pause/Resume | 5 评论 | [#1917](https://github.com/Hmbown/CodeWhale/issues/1917) |
| 9 | **#2984** v0.9.3: OpenAI Codex/ChatGPT OAuth 路由验证 | 端到端验证 OpenAI OAuth 通道是否可从 preview 转 supported | 5 评论 | [#2984](https://github.com/Hmbown/CodeWhale/issues/2984) |
| 10 | **#3303** Make documented config keys editable in TUI | 文档化的配置项在 TUI 中无法可靠发现/编辑/持久化 | 3 评论 | [#3303](https://github.com/Hmbown/CodeWhale/issues/3303) |

---

## 4. 重要 PR 进展（Top 10）

| # | PR | 说明 | 状态 | 链接 |
|---|----|------|------|------|
| 1 | **#5135** release: Codewhale v0.9.4 release train | 整合 77 个 train 提交，替代 #5044，准备合入 main | OPEN | [#5135](https://github.com/Hmbown/CodeWhale/pull/5135) |
| 2 | **#5225** feat(acp): expose file/search/git/patch/shell tools over session/prompt | ACP 服务器现支持完整工具调用，Zed 等编辑器可获得真正的代码编辑能力 | OPEN | [#5225](https://github.com/Hmbown/CodeWhale/pull/5225) |
| 3 | **#5233** fix(modelstudio): surface reasoning on official chat routes | 在阿里 Model Studio OpenAI 兼容路由上正确暴露 `reasoning_content` 思维流 | OPEN | [#5233](https://github.com/Hmbown/CodeWhale/pull/5233) |
| 4 | **#5133** feat(runtime-api): expose persistent goal-loop state | 新增 `GET /v1/threads/{id}/goal` 及完成控制端点，托管客户端可驱动目标循环 | OPEN | [#5133](https://github.com/Hmbown/CodeWhale/pull/5133) |
| 5 | **#5130** feat(runtime-api): bounded MCP server configuration | 新增 MCP 服务器 CRUD 端点 `POST/GET/PUT/DELETE /v1/apps/mcp/servers` | OPEN | [#5130](https://github.com/Hmbown/CodeWhale/pull/5130) |
| 6 | **#5131** feat: Runtime API memory endpoints | 新增 `/v1/memory` 系列端点，支持记忆检查与生命周期管理 | OPEN | [#5131](https://github.com/Hmbown/CodeWhale/pull/5131) |
| 7 | **#5132** Runtime API: verifier receipts and evidence | 暴露 `GET receipts` 等端点，Fleet 任务可查询失败原因与重试依据 | OPEN | [#5132](https://github.com/Hmbown/CodeWhale/pull/5132) |
| 8 | **#5129** feat(runtime-api): skill lifecycle endpoints | 新增 skill 安装、更新、卸载、信任、审计端点，补齐 TUI 全套能力 | OPEN | [#5129](https://github.com/Hmbown/CodeWhale/pull/5129) |
| 9 | **#5192** fix(tui): pin ratatui to 0.30.0 | 锁定 ratatui 版本以规避 ratatui-core 0.1.1+ 触发的 CPR 死锁 | OPEN | [#5192](https://github.com/Hmbown/CodeWhale/pull/5192) |
| 10 | **#5228** refactor(tui): rail unification stack | 12 提交 rail 统一栈的 rebase，提升 TUI 面板架构一致性 | OPEN | [#5228](https://github.com/Hmbown/CodeWhale/pull/5228) |

> 🔧 **已合并/关闭的清理型 PR**：#4686（minimaxi 中国区路由）、#5232（public surface 矩阵同步）、#5231（clippy lint 清扫，30 → 0）、#5230（facts 漂移修复）、#5227（v0.9.4 train 卫生：locale parity / fmt drift / warnings）、#5219（agents/followup 语义诚实化）、#5220（skills 文档命令路径更新）。

---

## 5. 功能需求趋势

从 50 条 issue 中提炼，社区关注度最高的五大方向：

1. **🤖 新模型与多 Provider 接入** — DeepSeek-V4 / OpenCode Go/Zen、Alibaba Model Studio、minimaxi、OpenAI Codex/ChatGPT OAuth 是当前最热议题，反映"模型灵活性"仍是核心竞争力。

2. **🧠 子代理（Subagent）/ Fleet 工作流** — 共享的模型与负载选择器（#3205）、CLI/TUI 控制面一致（#4022）、verifier receipts（PR #5132）、goal-loop（PR #5133）形成一条清晰主线，v0.9.3/v0.9.4 正在系统化重构。

3. **🔌 IDE 集成 / ACP 协议** — ACP 注册（#3192，13 评论居首）、ACP 工具暴露（PR #5225）显示社区期待 DeepSeek TUI 成为 **Zed / 第三方编辑器** 的一等公民。

4. **🛡️ 安全与控制面** — `/stop` 命令（#4959）、PreToolUse/PostToolUse hook（#1917）、read-before-edit guardrails（#3364）、权限 profile（#3211）反映**YOLO 模式失控**是用户最大的痛点之一。

5. **🌏 国际化与中文体验** — 中文乱码（#1675）、Constitution 译法（#4949）、Windows 启动体验（#1854）、winget 安装（#1561）、中文输入法兼容（#2323，👍1）说明 **Windows + 中文用户群** 体验短板明显。

---

## 6. 开发者关注点（痛点与高频需求）

- **跨会话记忆失效**（#2492）：重启即丢失上下文是开发者最常抱怨的体验问题，且与 v0.9.4 新增的 `/v1/memory` 端点（PR #5131）形成强需求呼应。
- **TUI 与 CLI 的能力不对等**：v0.9.3 显式立项解决 parity（#4022），Runtime API 的快速扩张也是为了让 TUI 不再是"唯一控制台"。
- **依赖与运行时稳定性**：ratatui 升级触发的 CPR 死锁（PR #5192）、OpenHarmony SDK 路径含空格的链接参数问题（PR #5095）、SPM sandbox `Operation not permitted`（#2617）—— 跨平台细节仍是高频问题来源。
- **代码卫生与死代码**（#4785）：464 个 `#[allow(dead_code)]` 横跨 143 文件，被维护者视为 v0.9.3 重点清理对象。
- **AI 辅助开发占比高**：今日多个 Runtime API 增强 PR（#5129/#5130/#5131/#5132/#5133）作者署名 **Copilot**，反映项目已进入"AI 批量产出 + 人工评审"的协作模式。
- **发布流程收紧**：v0.9.4 train 引入 clippy `-D warnings`（PR #5231）、facts drift guard（PR #5230）、public-surface 契约测试（PR #5232）等系列卫生门禁，质量基线显著抬升。

---

*日报生成完毕，欢迎在评论区反馈关注重点。下期重点关注 v0.9.4 正式发版与 ACP 注册进展。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*