# AI CLI 工具社区动态日报 2026-07-15

> 生成时间: 2026-07-15 01:50 UTC | 覆盖工具: 9 个

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



---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-15 · 数据源：anthropics/skills**

---

## 1. 热门 Skills 排行（基于关联 Issue 关注度与技术影响力）

> 注：原始 PR 数据评论数为 undefined，以下排行结合关联 Issue 评论数、技术影响范围和近期活跃度综合排序。

### 🥇 #1298 — skill-creator：修复 run_eval.py 始终报告 0% recall
- **作者**：MartinCajiao ｜ **状态**：OPEN
- **核心问题**：description-optimization 循环目前针对"噪声"做优化，影响所有使用 skill-creator 的开发者
- **热点**：直接关联 Issue **#556（12 条评论）**、**#1169（3 条评论）**，是社区报修最集中的"基础工具失灵"问题
- **价值**：修复后整个 skill 描述优化工作流才能真正生效
- 🔗 [PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #514 — Add document-typography skill（文档排版质量控制）
- **作者**：PGTBoos ｜ **状态**：OPEN
- **功能**：防止孤儿行、寡头段落、编号错位等排版问题，覆盖所有 Claude 生成的文档
- **热点**：切入点小但痛点普遍——用户极少主动要求好的排版，但人人都能感知到差排版
- 🔗 [PR #514](https://github.com/anthropics/skills/pull/514)

### 🥉 #1367 — self-audit skill v1.3.0（交付前自审计）
- **作者**：YuhaoLin2005 ｜ **状态**：OPEN
- **功能**：先做机械文件验证，再做四维推理质量审计（按损害严重度排序）
- **热点**：与 Issue **#1385（Reasoning Quality Gate Pipeline）** 形成提案联动，作者正推动成为跨项目通用质量门
- 🔗 [PR #1367](https://github.com/anthropics/skills/pull/1367)

### 4. #83 — skill-quality-analyzer & skill-security-analyzer（元技能）
- **作者**：eovidiu ｜ **状态**：OPEN
- **功能**：从结构/文档、效率、稳健性、清晰度、安全五个维度评估任意 Skill
- **热点**：直接呼应 Issue **#492（34 条评论，社区最热）**——社区技能冒充官方命名空间引发的信任边界问题
- 🔗 [PR #83](https://github.com/anthropics/skills/pull/83)

### 5. #1302 — Add color-expert skill
- **作者**：meodai ｜ **状态**：OPEN
- **功能**：覆盖 ISCC-NBS / Munsell / OKLCH 等颜色命名系统与色彩空间选择决策
- **价值**：自包含的"色彩知识中枢"，跨前端、设计、数据可视化通用
- 🔗 [PR #1302](https://github.com/anthropics/skills/pull/1302)

### 6. #210 — Improve frontend-design skill（可操作性提升）
- **作者**：justinwetch ｜ **状态**：OPEN
- **价值**：确保每条指令都可在单轮对话内执行，减少模糊指导
- 🔗 [PR #210](https://github.com/anthropics/skills/pull/210)

### 7. #723 — Add testing-patterns skill
- **作者**：4444J99 ｜ **状态**：OPEN
- **功能**：Testing Trophy 模型、单元/组件/E2E 测试、React Testing Library 等全覆盖
- 🔗 [PR #723](https://github.com/anthropics/skills/pull/723)

### 8. #486 — Add ODT skill（OpenDocument 读写转换）
- **作者**：GitHubNewbie0 ｜ **状态**：OPEN
- **价值**：补齐文档格式工具链中的开源/ISO 标准格式支持
- 🔗 [PR #486](https://github.com/anthropics/skills/pull/486)

---

## 2. 社区需求趋势（从高评论 Issue 提炼）

| 优先级 | 需求方向 | 代表 Issue | 评论数 | 状态 |
|---|---|---|---|---|
| 🔴 **信任与安全** | 社区技能冒充 `anthropic/` 命名空间造成的信任边界滥用 | [#492](https://github.com/anthropics/skills/issues/492) | **34** | OPEN |
| 🟠 **企业级分发** | Claude.ai 内组织级 Skill 共享（取代 Slack 传文件） | [#228](https://github.com/anthropics/skills/issues/228) | **14** | OPEN |
| 🟠 **核心工具可靠性** | skill-creator 整套评估链路在 Windows/macOS 上 0% recall | [#556](https://github.com/anthropics/skills/issues/556) [#1169](https://github.com/anthropics/skills/issues/1169) [#1061](https://github.com/anthropics/skills/issues/1061) | **12+3+3** | OPEN |
| 🟡 **跨平台兼容** | Bedrock、SharePoint Online、agentskills.io 站点等集成场景 | [#29](https://github.com/anthropics/skills/issues/29) [#1175](https://github.com/anthropics/skills/issues/1175) [#184](https://github.com/anthropics/skills/issues/184) | **4+4+3** | OPEN/CLOSED |
| 🟡 **协议化暴露** | 把 Skill 暴露为 MCP 服务（标准 API 化） | [#16](https://github.com/anthropics/skills/issues/16) | **4** | OPEN |
| 🟢 **创新 Skill 提案** | compact-memory（符号化状态压缩）、agent-governance、Reasoning Quality Gate | [#1329](https://github.com/anthropics/skills/issues/1329) [#412](https://github.com/anthropics/skills/issues/412) [#1385](https://github.com/anthropics/skills/issues/1385) | **9+6+3** | 部分 CLOSED |
| 🟢 **生态一致性** | document-skills 与 example-skills 插件内容重复导致 context 重复 | [#189](https://github.com/anthropics/skills/issues/189) | **6** | OPEN |

**趋势小结**：社区需求从"补齐格式/工具"快速向 **信任安全（Trust Boundary）** 与 **企业级协作分发** 演进，传统提 PR 加新 Skill 的热度反而让位于基础设施类议题。

---

## 3. 高潜力待合并 PR（评论活跃 + 技术就绪度高）

以下 PR 已具备合并潜力，多为解决高频报修问题的 1–N 行小改动，可视为"近期落地候选"：

| PR | 主题 | 关联 Issue | 落地价值 |
|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | run_eval.py 全面修复（含 Windows + 触发检测 + 并行） | #556 | 让 skill-creator 优化循环真正可用 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | run_eval 触发检测错过真实 skill 名 | #556 | 同上，独立补丁 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | Windows 子进程管道读取崩溃 | #556 | 解决 WinError 10038 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | Windows subprocess + 编码 1 行修复 | #556 | 解决 WinError 2 + cp1252 |
| [#1261](https://github.com/anthropics/skills/pull/1261) | trigger-eval 命令文件污染用户项目 | #1260 | 防止并发会话互相污染 .claude/commands |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf SKILL.md 大小写引用错误 | — | Linux/macOS case-sensitive 环境直接报错 |
| [#539](https://github.com/anthropics/skills/pull/539) | 未加引号 YAML 描述字段告警 | — | 防止 yaml.safe_load 静默错切 |
| [#362](https://github.com/anthropics/skills/pull/362) | UTF-8 多字节字符 panic 修复 | — | Rust CLI 处理中文/表情时崩溃 |
| [#361](https://github.com/anthropics/skills/pull/361) | 检测描述字段中未引用的 YAML 特殊字符 | — | 同 #539，防御深度加强 |
| [#541](https://github.com/anthropics/skills/pull/541) | DOCX tracked change w:id 与书签冲突 | — | 防止文档损坏 |
| [#509](https://github.com/anthropics/skills/pull/509) | 新增 CONTRIBUTING.md | [#452](https://github.com/anthropics/skills/issues/452) | 社区健康分从 25% 提升 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert 新 Skill | — | 设计/前端通用知识库 |

> 💡 **观察**：6 个"Windows/编码/YAML"类小修几乎都服务于同一个根因——**skill-creator 在跨平台/鲁棒性上的欠债**。这是仓库当前的合并优先级核心。

---

## 4. Skills 生态洞察（一句话）

> **当前社区最集中的诉求，是把"会做 Skill 的工具（skill-creator）"修对——信任边界（#492，34 评论）与跨平台可靠性（#556 系，>18 评论）已成为生态天花板；新 Skill 提案已经让位于"让现有 Skill 真的能跑起来"。**

---

### 📌 附：编辑建议（如需进一步动作）
1. **优先跟读** #1298 / #1261 / #83 这三个 PR——分别解锁 skill-creator 修复链路、并发安全、以及信任评估能力。
2. **关注 Issue #228**（企业级 Skill 分发）——一旦官方响应，会重塑分发形态。
3. **警惕 #492**——任何未来要合入的 PR 都需要明确的命名空间策略。

---

# Claude Code 社区动态日报

**日期**: 2026-07-15  
**数据源**: github.com/anthropics/claude-code

---

## 📌 今日速览

今日 Claude Code 在 24 小时内发布了两个补丁版本（v2.1.210 / v2.1.209），重点改进 TUI 体验并修复后台 agent 对话框被屏蔽的问题。社区方面，**Windows 平台 Cowork 服务与 Desktop 应用的稳定性问题**仍是讨论焦点（#74649 累计 75 条评论、54 点赞），同时围绕 **Anthropic API 连接中断**（#69415, 👍54）的可用性问题持续发酵。新增大量 docs 类型 Issue（#77639–#77648），显示用户开始系统性反馈文档与实际行为的不一致。

---

## 🚀 版本发布

### v2.1.210
- **TUI 体验改进**：在折叠工具摘要行新增 **实时计时器**，长时间运行的 tool 调用将可见地跳动，避免让用户误以为卡死
- **启动时权限规则提示**：新增对 `Write(path)`、`NotebookEdit(path)`、`Glob(path)` 权限规则的告警，建议改用 `Edit(path)` / `Read(path)` 更精确的控制

### v2.1.209
- **后台 agent 会话修复**：撤销一个过于宽泛的防护，解决了 `claude agents` 后台会话中 `/model` 等对话框被屏蔽的问题

---

## 🔥 社区热点 Issues

| # | Issue | 为什么重要 | 社区反应 |
|---|-------|-----------|---------|
| [#74649](https://github.com/anthropics/claude-code/issues/74649) | **Windows 11 Pro 缺少 HCS vfpext 服务，Cowork 完全不可用** | 阻塞级 bug，影响所有 Windows 上的 Cowork 用户；9 天仍未关闭 | 💬 75 / 👍 4 |
| [#69415](https://github.com/anthropics/claude-code/issues/69415) | **API Error: Connection closed mid-response，高频发生使产品几乎不可用** | 跨平台（VSCode/WSL）网络层稳定性问题；点赞数最高之一 | 💬 26 / 👍 54 |
| [#54461](https://github.com/anthropics/claude-code/issues/54461) | **Desktop 应用无法切换主工作目录或打开新会话** | Desktop 端 UX 阻塞性 bug，持续 2 个多月未解决 | 💬 18 / 👍 9 |
| [#64592](https://github.com/anthropics/claude-code/issues/64592) | **Cowork VM 服务无法启动（含可复现步骤与 workaround）** | 关联 #54891 / #61559 的同类集群，提供了手动启用 VM Platform 的临时方案 | 💬 11 / 👍 0 |
| [#56089](https://github.com/anthropics/claude-code/issues/56089) | **允许配置 VM bundle (vhdx) 存储位置** | 高优 enhancement，社区反馈强烈；C 盘空间焦虑是 Windows 用户共性需求 | 💬 6 / 👍 26 |
| [#73587](https://github.com/anthropics/claude-code/issues/73587) | **Desktop 应用忽略 `permissions.allow` 规则，每次都需授权** | 涉及 MCP 与权限系统，且发生在 Claude 自有配置目录，破坏信任基线 | 💬 5 / 👍 2 |
| [#72004](https://github.com/anthropics/claude-code/issues/72004) | **支持通过 CLAUDE.md 配置会话标题语言** | 用户在日本/非英文场景下会话标题仍强制为英文，缺少可配置入口 | 💬 3 / 👍 4 |
| [#66683](https://github.com/anthropics/claude-code/issues/66683) | **Bun 启动段错误（Windows 11 + Intel Meteor Lake）** | 硬件特定崩溃，与 #55219 同类被自动关闭，回归到 2.1.170+ 仍复现 | 💬 2 / 👍 4 |
| [#77548](https://github.com/anthropics/claude-code/issues/77548) | **Advisor 将真实转录内容误判为 prompt injection** | 子 agent 信任校准问题，从 #76199 拆分；影响安全模型而非可用性 | 💬 1 / 👍 0 |
| [#76238](https://github.com/anthropics/claude-code/issues/76238) | **MCP 白名单工具在新会话中仍触发授权提示（macOS）** | 影响所有使用 MCP 的用户，权限持久化逻辑疑似丢失 | 💬 1 / 👍 0 |

---

## 🛠️ 重要 PR 进展

| # | PR | 功能/修复 |
|---|----|----------|
| [#77556](https://github.com/anthropics/claude-code/pull/77556) | **fix(plugin-dev): 修正 `validate-hook-schema.sh` 对 hooks.json 的 schema 校验** | 修复了 hook 校验脚本对自身文档描述格式的校验失败（含 Bash 数组格式） |
| [#77492](https://github.com/anthropics/claude-code/pull/77492) | **fix(hookify): 匹配 Write 与 prompt 规则** | 让文件规则真正检查 `Write` 的内容，并将 prompt 规则映射到当前 `UserPromptSubmit` payload |
| [#77443](https://github.com/anthropics/claude-code/pull/77443) | **fix(ralph-wiggum): 让 stop hook 的 jq 错误处理在 `set -e` 下可达** | 修复 pipefail 下 `$?` 被覆盖导致停止钩子静默失败的经典坑 |
| [#77442](https://github.com/anthropics/claude-code/pull/77442) | **fix: 修复 issue-automation 的遥测时间戳与死参数** | dedupe workflow 的 Statsig 事件时间戳现为 1970，tasks/days_back 输入未真正生效 |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | **docs(plugins): 同步 security-guidance 清单到 v2.0.0 manifest** | marketplace.json 中插件版本仍为 v1.0.0 旧描述，与实际重写不符 |
| [#77427](https://github.com/anthropics/claude-code/pull/77427) | **fix(pr-review-toolkit): 将 code-reviewer 改造为 leaf agent** | 限制工具为仓库检查类、禁止再调用子 agent/工作流，提升评审边界 |
| [#77613](https://github.com/anthropics/claude-code/pull/77613) | **claude-compare** | 社区新提 PR，功能待补充说明 |
| [#76298](https://github.com/anthropics/claude-code/pull/76298) | **docs: 描述 Remote Control 后台任务面板（#75884）** | 补充 Web/移动端后台任务面板文档，反映 v2.1.205 引入的行为（**已 CLOSED**） |
| [#77260](https://github.com/anthropics/claude-code/pull/77260) | **fix(hookify): match Write and prompt rules（已 CLOSED）** | 同主题重复 PR 的早期版本，被 #77492 重新打开替换 |
| [#77439](https://github.com/anthropics/claude-code/pull/77439) | **docs(plugins): sync security-guidance listing（已合并方向）** | 见上 |

> 注：今日 PR 主题高度集中在 **plugin/hook 生态的稳定性**（plugin-dev、hookify、ralph-wiggum）和 **issue 自动化管线**的修正。

---

## 📈 功能需求趋势

从过去 24 小时全部 Issue 提炼出最受关注的方向：

1. **🪟 Windows Cowork / Desktop 体验**（最集中话题）
   - VM/Hyper-V 服务不可用、vhdx 路径不可配置、Desktop 权限失效、会话切换阻塞——Windows 端到端体验仍是 P0 痛点。
2. **🔌 MCP 与权限模型**
   - 白名单工具仍弹窗（#76238）、Desktop 忽略 `permissions.allow`（#73587）、Chrome 扩展站点授权仅 `duration:once`（#74715）——权限持久化与 MCP 边界需要一次系统化重构。
3. **📚 文档对齐实际行为（DOCS 类型 Issue 集中爆发）**
   - 用户提交了一组（#77643、#77644、#77645、#77646、#77647、#77648、#77639）覆盖 sandbox、memory、agent、bash/skills、a11y 等多处的"文档与代码不一致"问题。
4. **⚡ 稳定性 / 崩溃**
   - Bun 段错误（#66683、#77625，Windows + Intel Meteor Lake）、API 连接中断（#69415）、Anthropic API 5xx（#77656）——不同症状指向一个共同主题：跨平台基础稳定性。
5. **🌐 国际化与本地化**
   - 会话标题语言可配置（#72004）、错误信息不可读（API 报错缺少可操作细节，#77656）——非英语用户与企业用户正在推动更精细化配置。
6. **🧠 模型与后台 agent 行为**
   - Fable 5 在 plan mode 的可用性（#77650）、Advisor 误判（#77548）、后台会话身份错乱（#77649、#77655）——新型模型/Subagent 的边界正在被现实场景压测。

---

## 💡 开发者关注点

汇总 24 小时内开发者的主要痛点与高频诉求：

- **"弹窗太多、权限不够智能"**：MCP 白名单在 Desktop 上失效、Chrome 站点授权仅持久化 `once`，开发者希望权限一次性放行而非每次打扰；这一摩擦在跨工具链场景中被显著放大。
- **"Cowork 在 Windows 上行不通"**：从 VM 服务失败、到 bundle 路径不可改、再到还原后仍旧损坏，构成了「不重启重装三连」级别的体验噩梦。`#56089` 高点赞说明用户预期 Anthropic 提供至少一个配置选项。
- **"API 偶发断连使 CLI 不可用"**：`Connection closed mid-response` 仍然是上手即弃的高频原因，跨 VSCode + WSL 的网络栈需要更详细的错误诊断（如重试计数、req-id、network path hint）。
- **"新版本 Bun 包在 Windows 段错误"**：2.1.112+ 引入的 Bun runtime 在 Windows 11 + Intel Meteor Lake 上触发 0xC0000005，开发者呼吁针对 Windows 平台提供非 Bun 回退或更稳健的 native 路径。
- **"文档≠代码"成为新一类 Issue**：社区明显开始系统性地审阅 `code.claude.com/docs`，对参数边界、错误信息、副作用披露提出精确修订请求（一次提了 7 条 DOCS 类 Issue），这是个值得官方文档团队关注的信号。
- **"模型分类误判与可用性差异"**：Usage Credits 被识别为 cybersecurity（#77652/77653/77654，同一用户三次提交）、Fable 5 在 plan mode 不可用、Advisor 把真实 tool_result 当成注入——开发者希望看到更精细的 trust calibration 与模型能力边界说明。

---

*日报由 GitHub Issues / PR 数据自动聚合而成，所有链接均为 `anthropics/claude-code` 仓库原始地址。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-15**

---

## 1. 今日速览

今日 Codex 社区主要围绕 **v0.145.0-alpha 系列密集迭代** 与 **GPT-5.6 上下文回归修复** 展开。Browser 插件 `Cannot redefine property: process` 错误成为当周最热门 Bug（Issue #32925，52 条评论），同时社区对"可定制状态栏"长期呼声不减（👍 103）。PR 方面，TUI 对话分支编辑、GPT-5.4 → GPT-5.6 模型迁移（Terra/Luna）以及 Amazon Bedrock 登录支持成为今日亮点。

---

## 2. 版本发布

| 版本 | 性质 | 说明 |
|---|---|---|
| **rust-v0.0.145.0-alpha.12** | 预发布 | 最新 alpha 版本，无详细 changelog |
| **rust-v0.144.4** | 补丁 | 维护性更新，无用户可见变更 |
| **rust-v0.0.145.0-alpha.8 ~ .11** | 预发布 | 4 个连续 alpha 迭代，节奏密集 |

📌 观察：v0.145 在 24 小时内连发 5 个 alpha 编号，暗示 0.145 stable 即将合并窗口。

🔗 https://github.com/openai/codex/releases

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论/👍 | 重要性 |
|---|---|---|---|---|
| [#32925](https://github.com/openai/codex/issues/32925) | Desktop Browser/Chrome 插件 `Cannot redefine property: process` | **CLOSED** | 52 / 31 | 🔥 最高热度，跨平台 Browser 集成崩溃 |
| [#17827](https://github.com/openai/codex/issues/17827) | 可定制 TUI 状态栏（参考 Claude Code） | OPEN | 28 / **103** | 👍 数最高，需求长期未解 |
| [#32806](https://github.com/openai/codex/issues/32806) | 🚨 GPT-5.6 Sol 上下文从 353K 缩水到 258K | **CLOSED** | 22 / 23 | 严重回归，影响付费用户 |
| [#20880](https://github.com/openai/codex/issues/20880) | App 启动时静默创建 `~/Documents/Codex` 空目录 | OPEN | 16 / 36 | 低级但高频，长期无人处理 |
| [#30178](https://github.com/openai/codex/issues/30178) | Windows 端内嵌 Browser 导航时主进程崩溃 | OPEN | 15 / 0 | Windows Browser 体验缺陷 |
| [#32683](https://github.com/openai/codex/issues/32683) | Windows Browser Use 触发 `CrBrowserMain` 0xC0000005 | OPEN | 13 / 2 | Windows Chromium 崩溃栈 |
| [#29968](https://github.com/openai/codex/issues/29968) | Pro20x 订阅额度与 Plus 相同 | OPEN | 16 / 14 | 订阅权益争议 |
| [#25463](https://github.com/openai/codex/issues/25463) | Desktop 项目线程从 UI 消失（JSONL 仍存在） | OPEN | 16 / 1 | 严重数据可见性问题 |
| [#28919](https://github.com/openai/codex/issues/28919) | Windows 端"控制其他设备"设置页缺失 | OPEN | 12 / 21 | 跨设备 Remote 功能缺陷 |
| [#15723](https://github.com/openai/codex/issues/15723) | 子代理/后台子进程完成时无法唤醒主代理 | OPEN | 10 / 5 | Subagent 可靠性核心问题 |

**社区反应**：Browser 相关 Bug 在 macOS / Windows / Chrome 扩展三端同时爆发，疑似同一根因；TUI 可定制化（状态栏、对话分支）需求被多次 upvote。

---

## 4. 重要 PR 进展

| # | PR | 作者 | 关键变更 |
|---|---|---|---|
| [#33203](https://github.com/openai/codex/pull/33203) | 恢复线程输入时保留 in-flight 状态 | copyberry[bot] | 防止中断恢复时丢失待发送 steer/queued 输入 |
| [#33201](https://github.com/openai/codex/pull/33201) | 编辑早期 TUI 提示时分支对话 | copyberry[bot] | 关键 UX 改进：fork 而非原地回滚，保留原对话 |
| [#33200](https://github.com/openai/codex/pull/33200) | 拆分 exec 权限路径与 core 模型 | copyberry[bot] | 用 `AbsolutePathBuf` 区分原生路径与可移植 URI |
| [#33198](https://github.com/openai/codex/pull/33198) | 在对话历史中保留被中断的提示 | copyberry[bot] | 统一 Esc/Ctrl-C 中断体验，避免提示消失 |
| [#33187](https://github.com/openai/codex/pull/33187) | 在 rate-limit 处理中尊重 workspace 花费控制 | copyberry[bot] | 防止过期全量读取覆盖更新的 workspace 硬停 |
| [#33184](https://github.com/openai/codex/pull/33184) | 跨会话复用 MCP 工具目录 | copyberry[bot] | 启动不再等待未变更的 stdio MCP 初始化 |
| [#33180](https://github.com/openai/codex/pull/33180) | 串行化并发 MCP stdin 写入 | copyberry[bot] | 信号量保护，避免 JSON-RPC 消息交错 |
| [#33177](https://github.com/openai/codex/pull/33177) | 支持 Guardian 策略提示的模型目录模板 | copyberry[bot] | 引入 `policy_template`，统一策略来源优先级 |
| [#33175](https://github.com/openai/codex/pull/33175) | 登出时正确处理 Amazon Bedrock 凭据 | copyberry[bot] | 区分托管 API Key 与 AWS 托管凭据 |
| [#33173](https://github.com/openai/codex/pull/33173) | 将 GPT-5.4 用例迁移到 GPT-5.6 变体 | copyberry[bot] | 🆕 引入 `gpt-5.6-terra`（记忆整合）与 `gpt-5.6-luna`（提取/限流切换） |

📌 值得特别关注：#33173 标志 Codex 默认模型族正式从 5.4 切到 5.6；#33184 + #33180 共同改善 MCP 启动延迟与并发安全。

---

## 5. 功能需求趋势

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **TUI 可定制化** | #17827（状态栏） | 👍 103，呼声最高、周期最长 |
| **对话编辑/分支** | #33201 已合入 | 用户长期要求"编辑历史消息不破坏原对话" |
| **模型目录升级** | #33173 落地 GPT-5.6 系列 | 新模型 + 旧模型灰度策略 |
| **Amazon Bedrock 集成** | #33170 / #33175 | 企业级云供应商登录完整化 |
| **Browser Use 稳定性** | #32925 / #30178 / #32683 / #32935 / #33004 | 5 个相关 issue 集中爆发 |
| **可访问性** | #20957（Read Aloud） / #32689（Option+Space） | macOS 集成 ChatGPT 后的回归 |
| **Subagent 可靠性** | #15723 | 多代理调度核心问题 |
| **会话/线程管理** | #25463 / #24464 | 跨端线程可见性双向同步 |

---

## 6. 开发者关注点

**🔴 高频痛点**

1. **Browser 集成系统性失败**：`Cannot redefine property: process` 错误覆盖 macOS 内嵌 Browser、Windows Chrome 插件、Chrome 扩展三条路径，疑似 26.707.x 版本统一回归。
2. **Windows 平台体验差距**：Browser 崩溃、sandbox 强制二选一（#31220）、apply_patch 卡顿 40–60s（#32477）、Remote-SSH 扩展挂起（#32385）等集中暴露。
3. **模型/订阅权益混乱**：GPT-5.6 Sol 上下文缩水、Pro20x 退化为 Plus 额度，付费用户信任度受冲击。
4. **会话持久化异常**：项目线程"幽灵消失"但 JSONL 完好（#25463）、移动端列表在桌面恢复后丢失（#24464）。

**🟡 中频需求**

- **多终端并发**：`state_5.sqlite` 锁竞争无 BUSY 重试（#20213）— 影响 DevOps / 团队协作。
- **TUI 体验补全**：状态栏可定制、对话分支编辑、保留中断消息（#33201/#33298 已在路上）。
- **大体积会话**：base64 图片嵌入 JSONL 导致主进程崩溃（#28531），需要外置附件方案。
- **网络抖动**：Desktop 几乎每个 prompt 后都需要恢复连接（#32670）。

**🟢 积极信号**

- MCP 性能优化（工具目录缓存、stdin 并发安全）即将合入。
- GPT-5.6 Terra/Luna 分工细化，反映模型治理走向成熟。
- Amazon Bedrock 完整登录链路补齐，企业市场拓展加速。
- TUI 大量细节打磨（branch、interrupt、restore）密集落地。

---

> 📅 **日报生成时间**：2026-07-15  
> 📊 **数据范围**：过去 24 小时 Releases / Issues / PRs（基于 GitHub openai/codex 仓库）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**：2026-07-15
**项目**：[google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日发布 **v0.52.0 nightly 版本**，社区讨论仍高度集中在 **Subagent（子代理）稳定性** 与 **Auto Memory 系统** 两大主题上。多个高优先级 P1 Bug（Generalist Agent 挂起、Subagent 误报 GOAL 成功、Shell "Waiting input" 卡死）持续获关注，同时零依赖 OS 沙箱、AST 感知工具等长期 Enhancement 提案也在稳步推进。

---

## 🚀 版本发布

### v0.52.0-nightly.20260715.gfa975395b

Nightly 例行版本发布，配套自动化版本号同步 PR [gemini-cli/gemini-cli#28402](https://github.com/google-gemini/gemini-cli/pull/28402)。完整变更请参考 [Compare Diff](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260714.gfa975395b...v0.52.0-nightly.20260715.gfa975395b)。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 关键点 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 在 MAX_TURNS 后误报 GOAL 成功 | P1 | 10 | **严重可靠性缺陷**：`codebase_investigator` 子代理达到最大回合数后仍报告 `status: "success"`，掩盖了真实的中断状态 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 挂起 | P1 | 7 (👍8) | 简单任务（如创建文件夹）可挂起**长达一小时**，禁止子代理调用可绕过，社区情绪强烈（👍 数最高） |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 后置意图路由 | P2 | 8 | 利用 Gemini 3 原生 bash 偏好，借助 OS 级沙箱（gVisor/bubblewrap）兼顾安全与模型能力释放 |
| 4 | [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 组件级评测基础设施 | P1 | 7 | 行为评测已扩至 **76 个测试**、6 个 Gemini 模型，急需更稳健的组件级评测体系 |
| 5 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知文件读取/搜索/映射评估 | P2 | 7 | 通过 AST 工具**减少误读回合、降低 token 噪声**，潜在显著提升大型代码库效率 |
| 6 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 几乎不使用自定义 skills/sub-agents | P2 | 6 | 模型缺乏主动调度子代理与 Skill 的倾向，需要提示工程或工具调用优化 |
| 7 | [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) Auto Memory 无限重试低信号会话 | P2 | 5 | 提取代理判定"低信号"后会话仍卡在 index，导致后续反复重试，浪费配额 |
| 8 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 命令完成后卡在 "Waiting input" | P1 | 4 (👍3) | 简单命令执行完后状态机未正确退出，影响所有使用 Shell Tool 的用户 |
| 9 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) Browser subagent 在 Wayland 下失败 | P1 | 4 | Linux 桌面用户受影响，浏览器子代理直接报错终止 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应避免破坏性操作 | P2 | 3 | 模型偶尔使用 `git reset --force` 等危险命令，需引入安全引导策略 |

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 |
|---|---|---|
| 1 | [#28401](https://github.com/google-gemini/gemini-cli/pull/28401) `fix(shell): 限制发送给模型的命令输出` (P1) | Shell 工具之前会把 `find /` 等命令的完整输出全部塞进上下文，此 PR 加上限，避免数百 KB 注入导致响应劣化与 token 浪费 |
| 2 | [#28164](https://github.com/google-gemini/gemini-cli/pull/28164) `fix(core): 限制单次请求递归推理回合` | 为核心推理引擎增加 **每请求最多 15 回合** 的硬限制（可被 `maxSessionTurns` 覆盖），防止无限循环耗尽 CPU 与 API 配额 |
| 3 | [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) `a2a-server 路径信任检查前置 + 任务环境隔离` | 引入 `AsyncLocalStorage` 隔离任务环境变量，并确保 workspace 路径信任检查在 env 加载之前完成，**修复潜在 RCE 风险** |
| 4 | [#24303](https://github.com/google-gemini/gemini-cli/pull/24303) `feat(diagnostics): 原生 V8 内存与性能分析套件` | GSoC 2026 提案，为 CLI 增加**集成终端的性能/内存调查伴侣**，便于开发者就地诊断 |
| 5 | [#28402](https://github.com/google-gemini/gemini-cli/pull/28402) `chore/release: 版本号 bump 至 0.52.0-nightly.20260715` | 例行自动化发布 |

> 注：过去 24 小时活跃 PR 仅 5 个，含 1 个自动版本号 PR。

---

## 📈 功能需求趋势

1. **Subagent / 多代理系统** — 占 Issue 总量过半：覆盖稳定性、调度、可见性（`/chat share`）、权限隔离、Settings 覆盖、错误上报等全链路
2. **Auto Memory 体系** — SandyTao520 集中提出 4 个相关 Issue（[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516)），关注重试循环、secret 脱敏、inbox patch 校验
3. **AST 感知工具** — [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) + [#22746](https://github.com/google-gemini/gemini-cli/issues/22746) 形成 Epic，正在评估 tilth / glyph 等候选
4. **安全沙箱** — [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 提议利用 OS 级沙箱替代用户层防护
5. **终端体验** — [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)（resize 闪烁）、[#24935](https://github.com/google-gemini/gemini-cli/issues/24935)（编辑器退出后终端损坏）等 Ink 渲染层改进
6. **评测与质量度量** — [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) 推动组件级行为评测规模化

---

## 💬 开发者关注点

- **🔴 挂死与卡顿是第一痛点**：Generalist Agent 挂起（[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)）、Shell "Waiting input"（[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)）、Vite 交互卡死（[#22465](https://github.com/google-gemini/gemini-cli/issues/22465)）反映出 **异步状态机与子代理生命周期管理** 是当前最薄弱环节
- **🔴 子代理"假成功"误导用户**：MAX_TURNS 后仍报 GOAL success（[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)）、Bug Report 缺失子代理上下文（[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)），表明**终止语义与可观测性**需要重做
- **🟡 权限与配置优先级混乱**：subagent 无视 `settings.json`（[#22267](https://github.com/google-gemini/gemini-cli/issues/22267)）、symlink agent 不被识别（[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)）、v0.33.0 后 subagent 莫名启用（[#22093](https://github.com/google-gemini/gemini-cli/issues/22093)）
- **🟡 模型调用成本与上下文管理**：开发者强烈希望默认限制 shell 输出、工具数量（[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)：>128 个工具触发 400 错误），PR #28401、#28164 直接回应
- **🟢 主动调度能力**：希望 Gemini 更积极使用 skills 与 sub-agents（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)），同时需要防止破坏性命令（[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)）

---

*日报由 Gemini CLI 社区数据自动生成 · 数据时间窗口：2026-07-14 → 2026-07-15*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-07-15** ｜ 数据来源：github.com/github/copilot-cli

---

## 📌 今日速览

过去 24 小时，Copilot CLI 在 1.0.71 版本线迎来两次快速迭代（v1.0.71-1 与 v1.0.71-2），重点补齐插件市场、语音模式、Canvas 交互及 MCP 工具集持久化等能力。社区侧则集中爆发了一批围绕 **v1.0.71 引入的功能** 的缺陷反馈（断点续对话 `/resume`、插件市场克隆、ACP 协议 `session/close`、`/app` 默认目录等），以及呼声极高的 **PDF 原生阅读** 与 **主题/色彩定制** 需求，工单数量与互动量显著抬升。

---

## 🚀 版本发布

### v1.0.71-2（最新）
- **新增**
  - `/voice devices`：语音模式新增麦克风设备选择并持久化
  - 限制 `tasks` 与子代理（subagents）可见的内置 agent
  - CLI 增加 **Canvas 支持**，便于扩展驱动交互
- **改进**
  - `/chronicle` 成本提示的推荐内容更加丰富（更细的成本画像）

### v1.0.71-1
- **新增**
  - GitHub MCP 工具集/工具配置可通过 `settings.json`（`githubMcpToolsets`、`githubMcpTools` 等）持久化
  - 新增 `plugins marketplace` 子命令：列出、添加、删除 plugin marketplace
  - 持久化侧边栏会话（跨重启保留）
  - `plugins marketplace browse` 与 `update` 命令

> 提示：暂无对应 Pull Request 详情列出，变更细节以上述 Release Note 为准。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | 标题 | 👍 | 💬 | 为何值得关注 |
|---|---|---:|---:|---|
| [#443](https://github.com/github/copilot-cli/issues/443) | **Feature Request: Built-in PDF Reading Support** | 33 | 5 | 历史最久的高赞需求，希望原生支持读取学术论文、技术文档等 PDF |
| [#4118](https://github.com/github/copilot-cli/issues/4118) | `/app` 命令未默认选择当前工作目录 | 33 | 0 | 一次点击即可直达 Copilot App 的体验差距，开发者关注度飙升 |
| [#1274](https://github.com/github/copilot-cli/issues/1274) | CLI 频繁抛出 400（invalid request body）错误 | 11 | 25 | 评论数最高的活跃工单，影响代码审查等核心工作流 |
| [#2165](https://github.com/github/copilot-cli/issues/2165) | Ubuntu keychain 支持存在缺陷 | 21 | 3 | Linux 鉴权链路的核心问题，且官方文档指引也需修正 |
| [#4024](https://github.com/github/copilot-cli/issues/4024) | Voice mode: 所有内置 ASR 模型静默失败（Foundry Local `nemotron_speech` 路由 bug） | 0 | 8 | 语音模式"全部不可用"，是 v1.0.71 系列引入语音设备选择后的关键回归 |
| [#4096](https://github.com/github/copilot-cli/issues/4096) | 第三方 MCP OAuth token 未桥接至 CLI 会话（Atlassian Remote MCP 案例） | 2 | 3 | OAuth → CLI sessions 的凭据接力失败，影响第三方 MCP 接入闭环 |
| [#4097](https://github.com/github/copilot-cli/issues/4097) | `apply_patch` 储存已删除二进制内容触发 CAPI 5MB 上限 | 1 | 1 | 删除大二进制会撑爆会话历史，揭示会话压缩策略缺陷 |
| [#4054](https://github.com/github/copilot-cli/issues/4054) | `/resume` 对非 GitHub / ADO / 非 git 仓库不可用 | 0 | 1 | v1.0.70/71 引入的回归，影响跨平台开发者（ADO/无 git 场景） |
| [#4103](https://github.com/github/copilot-cli/issues/4103) | 插件市场克隆破坏 Git 凭证助手（私有 HTTPS 仓库克隆失败） | 2 | 1 | v1.0.70 "严格校验凭据" 变更引发的回归，私有仓接入受阻 |
| [#3477](https://github.com/github/copilot-cli/issues/3477) | Feature Request: Enterprise OTel 鉴权 — mTLS + 动态 headers（对齐 Claude Code） | 0 | 2 | 企业合规部署的核心诉求；当前仅支持静态 `OTEL_EXPORTER_OTLP_HEADERS` |

---

## 🛠 重要 PR 进展

> ⚠️ 过去 24 小时内暂无公开更新的 Pull Request。建议关注 v1.0.71-1 / v1.0.71-2 Release 中所列能力的对应 PR 落地（特别是 `plugins marketplace`、MCP `settings.json` 持久化、Canvas 支持等子模块）。

---

## 📈 功能需求趋势（提炼自全部 30 条工单）

1. **PDF / 富文档原生支持**：[#443](https://github.com/github/copilot-cli/issues/443)（33 👍） 长期霸榜，社区希望避免再依赖 `pdftotext` 等外部工具。
2. **多模型 & 多模态**：
   - Voice mode 模型稳定性 ([#4024](https://github.com/github/copilot-cli/issues/4024))
   - `--output-format json` 需补齐 token / cost 用量字段，对齐 OTel ([#4107](https://github.com/github/copilot-cli/issues/4107))
3. **IDE / 平台集成与一致性**：
   - `/app` 默认工作目录 ([#4118](https://github.com/github/copilot-cli/issues/4118))
   - 终端 / Tab Title 跨终端（SecureCRT）退化 ([#4121](https://github.com/github/copilot-cli/issues/4121))
4. **可观测性与企业合规**：
   - OTel mTLS + 动态鉴权 ([#3477](https://github.com/github/copilot-cli/issues/3477))
5. **会话 / 上下文管理**：
   - `/resume` 多平台 ([#4054](https://github.com/github/copilot-cli/issues/4054))
   - 应用崩溃后会话保存 ([#4115](https://github.com/github/copilot-cli/issues/4115))
   - 删除二进制导致 CAPI 5MB 限 ([#4097](https://github.com/github/copilot-cli/issues/4097))
6. **扩展 / 协议能力**：
   - ACP `session/close` 协议补齐 ([#4113](https://github.com/github/copilot-cli/issues/4113))
   - Canvas 扩展事件修复 ([#4112](https://github.com/github/copilot-cli/issues/4112))
7. **个性化与可用性**：
   - 主题/色彩粒度化定制 ([#4117](https://github.com/github/copilot-cli/issues/4117))
   - 会话视图显示标题 ([#4124](https://github.com/github/copilot-cli/issues/4124))
   - 双击回车跳过队列（对齐 Grok CLI）([#4125](https://github.com/github/copilot-cli/issues/4125))
8. **行为可控性 / 安全护栏**：
   - `apply_patch` 历史清洗、`sql` 工具保留字误判 ([#4128](https://github.com/github/copilot-cli/issues/4128))、确认卡无法关闭 ([#4114](https://github.com/github/copilot-cli/issues/4114))

---

## 💡 开发者关注点 & 高频痛点

- **可靠性回归集中**：v1.0.70/71 引入的"严格鉴权 + 严格 git 路径"导致一批回归工单（[#4103](https://github.com/github/copilot-cli/issues/4103)、[#4054](https://github.com/github/copilot-cli/issues/4054)、[#4024](https://github.com/github/copilot-cli/issues/4024)），用户希望发版前的兼容性矩阵更严格。
- **跨平台碎片化体验**：
  - Linux Snap 缺 x11/wayland plug 导致 `/copy` 失败 ([#4109](https://github.com/github/copilot-cli/issues/4109))
  - Ubuntu keychain 文档与实现不一致 ([#2165](https://github.com/github/copilot-cli/issues/2165))
  - Windows 长会话跨自动更新出现孤儿进程 ([#4111](https://github.com/github/copilot-cli/issues/4111))
  - macOS Dock 出现 Python 图标 ([#4108](https://github.com/github/copilot-cli/issues/4108))
- **语音 / 异步输入的"逃离键"缺失**：
  - `/voice` 全部 ASR 失败 ([#4024](https://github.com/github/copilot-cli/issues/4024))
  - `ctrl+x → b` 无法在 `read_bash` delay 时中断 ([#4110](https://github.com/github/copilot-cli/issues/4110))
- **交互细节的低分但高频抱怨**：
  - 右键"复制"会同时粘贴 ([#4126](https://github.com/github/copilot-cli/issues/4126))
  - 复制内容包含输入框左边框字符 ([#4116](https://github.com/github/copilot-cli/issues/4116))
  - 后台代理被新轮的 `user.abort` 一并取消 ([#4127](https://github.com/github/copilot-cli/issues/4127))
  - `AGENTS.MD` 行为不明显 ([#4123](https://github.com/github/copilot-cli/issues/4123))
  - 子代理相对路径 markdown 解析错位 ([#4122](https://github.com/github/copilot-cli/issues/4122))
- **API/网络层告警**：400 错误与请求体校验问题 ([#1274](https://github.com/github/copilot-cli/issues/1274)) 持续消耗社区精力，需要服务端与 CLI 双向排查。

---

*本日报基于 GitHub 公开数据自动汇总。建议同时关注官方博客与 Discussions 获取功能路线图更新。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**: 2026-07-15
**数据周期**: 过去 24 小时
**仓库**: [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

过去 24 小时内，Kimi Code CLI 仓库活跃度集中在 **kosong 底层推理参数处理** 与 **会话/上下文管理修复** 上——三位维护者（RealKai42、bigeagle）连续合入 3 个 PR，集中解决 reasoning effort 隐式传递、空 reasoning_content 丢失、以及 Kimi 完成预算计算三大问题。社区侧暂无新增 Issue 涌入，仅有一个长期挂账的 TPD 限速计算 Bug（#2318）仍在等待回复。整体氛围属于"维护窗口期"，未涉及新功能发布。

---

## 🚀 版本发布

**无新版本发布**。过去 24 小时仓库无 Release 活动，最新版本仍维持此前发布状态。

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅 2 条 Issue 更新，以下为完整列表。

### 1. [#2318 [OPEN] TPD 限速计算存在严重偏差](https://github.com/MoonshotAI/kimi-cli/issues/2318)
- **状态**: OPEN · 👍 1 · 💬 1 评论 · 持续更新
- **摘要**: 报告者称 `kimi 2.6`（Windows 10 / moonshot.ai 平台）出现 "Critical Bug: Incorrect TPD Calculation"，当前累计计数已达 **1,505,241**，疑似被组织级 TPD 限速误判为超额。
- **重要性**: 这是个高优先级问题——若 TPD 计算逻辑有误，正常用户会被无故限流，影响面广；涉及配额/账单相关功能，社区敏感度高。
- **社区反应**: 仅有 1 个点赞、1 条评论，关注度不高，但因属于"组织级限速"类问题，单点影响可能放大，建议关注维护者回应。

### 2. [#2496 [CLOSED] 分叉会话恢复后输出损坏](https://github.com/MoonshotAI/kimi-cli/issues/2496)
- **状态**: CLOSED · 👍 0 · 💬 0 评论
- **摘要**: 使用 `kimi -r` 恢复一个 forked session 时（v1.36.0 / kimi-for-coding / Windows 10），输出出现损坏。
- **重要性**: 分叉会话是协作与上下文复用的关键功能，损坏问题直接影响日常工作流；不过 0 评论、0 点赞说明报告者可能是孤例，且已被快速关闭（可能由维护者直接处理或归并到 PR 中）。

---

## 🛠️ 重要 PR 进展

> 注：过去 24 小时仅 3 条 PR 更新，且全部已合入（CLOSED）。

### 1. [#2499 [MERGED] fix(kosong): 停止隐式传递 Kimi reasoning effort](https://github.com/MoonshotAI/kimi-cli/pull/2499)
- **作者**: RealKai42
- **核心变更**:
  - Kimi 思考请求改为通过 `thinking.type` 配置，**不再自动序列化旧的 `reasoning_effort` 参数**
  - 保留调用方显式提供的 thinking effort，避免隐式 clamp 或反向映射遗留参数
- **意义**: 这是对 kosong 抽象层与 Kimi Provider 之间协议对齐的一次清理，可避免不同 thinking 配置在多层封装时互相覆盖，减少"明明设了 effort 却没生效"类问题。

### 2. [#2498 [MERGED] fix(kosong): 保留空字符串 reasoning_content 为 ThinkPart](https://github.com/MoonshotAI/kimi-cli/pull/2498)
- **作者**: bigeagle
- **触发场景**: 线上会话抓包发现 `coding-model-okapi-0711-vibe` 返回 400 错误——`preserved thinking (thinking.keep=all)` 要求每条 assistant 消息都有 `reasoning_content`，但第 6 条缺失。
- **核心变更**: 将**空字符串**也视为合法的 `ThinkPart` 保留下来，避免上游校验失败。
- **意义**: 这是个典型的"边界值 Bug"修复——上游 API 对"空"的判定不同（missing vs empty string），下游必须做更宽松的兼容，否则在 `thinking.keep=all` 模式下整个会话可能直接中断。

### 3. [#2494 [MERGED] fix(kimi): 使用剩余上下文作为完成预算](https://github.com/MoonshotAI/kimi-cli/pull/2494)
- **作者**: RealKai42
- **核心变更**:
  - 默认 Kimi 完成预算从**固定 32k provider cap**改为**模型剩余上下文窗口**
  - 动态完成上限**仅**对 Kimi 请求生效（包括经 ChaosChatProvider 包装的 Kimi），不影响通用 ChatProvider、kosong.generate/step 及非 Kimi provider
- **意义**: 32k 硬上限在长上下文任务下极易提前截断，改为动态剩余上下文后能显著提升长会话/长代码库的可用性；同时通过作用域隔离避免对其他 provider 造成回归。

---

## 📈 功能需求趋势

综合近期 Issue 主题分布，社区关注点呈现以下趋势（按热度排序）：

| 排名 | 需求方向 | 证据 | 趋势判断 |
|------|----------|------|----------|
| 1 | **会话/上下文管理稳定性** | #2496 (fork session 损坏) + #2494 (上下文预算) | 🔥 高——两个 PR 直击此方向，是当前迭代核心 |
| 2 | **推理参数协议一致性** | #2499 + #2498 集中在 reasoning effort / thinking type 对齐 | 🔥 高——kosong 抽象层与多 provider 间的语义对齐是基础设施级需求 |
| 3 | **配额/限速正确性** | #2318 TPD 误判 | ⚠️ 中——发生频率未必高，但一旦命中影响严重（被限流） |
| 4 | **多 provider/多模型兼容性** | #2494 明确要求"仅 Kimi 生效、不影响通用 provider" | 📌 持续——kosong 作为统一抽象层需要持续打磨 |

> 💡 **趋势洞察**: 近期工作明显倾向"**kosong 抽象层加固**"——既要对齐 Kimi/Chaos/通用 ChatProvider 的语义边界，也要兼容上游 API 的细节差异（如 thinking keep、空 reasoning_content）。新功能/新模型支持类需求在本周期内未被提及。

---

## 💬 开发者关注点

从过去 24 小时的反馈中可提炼出以下开发者痛点：

1. **🧠 思考/推理行为不可预期**
   - 开发者关心：设置的 `reasoning_effort` 是否真正生效？不同 provider 间是否一致？
   - 体现：PR #2499 专门解决"隐式传递"问题，说明历史版本存在黑盒行为。

2. **📏 长上下文下的截断焦虑**
   - 开发者关心：为什么代码写到一半被 32k 上限砍掉？
   - 体现：PR #2494 改为按剩余窗口动态分配，正是为此兜底。

3. **🪝 Fork / Resume 会话可用性**
   - 开发者关心：forked session 恢复后能否完整复现上下文？
   - 体现：Issue #2496 虽已关闭但暴露了恢复路径上的数据完整性问题。

4. **🧮 配额计数透明度**
   - 开发者关心：为什么会被 TPD 限速？计数是否准确？
   - 体现：Issue #2318 显示用户对**配额计算逻辑的可解释性**有明确诉求，目前缺少可视化/可调试入口。

5. **🛡️ 上游 API 边界值健壮性**
   - 开发者关心：模型返回"空字段"时程序不应崩溃。
   - 体现：PR #2498 修复的 400 错误就是上游判 "missing" 而下游判 "empty" 导致的协议裂缝。

---

## 📊 数据总览

| 指标 | 数值 |
|------|------|
| 新 Release | 0 |
| 更新 Issue | 2（1 OPEN / 1 CLOSED） |
| 更新 PR | 3（全部 CLOSED / MERGED） |
| 活跃维护者 | 2（RealKai42、bigeagle） |
| 涉及模块 | kosong（核心抽象）、kimi provider |

---

*报告生成时间: 2026-07-15 · 数据源: GitHub API · 仅汇总过去 24 小时更新项*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-15**

---

## 📌 今日速览

OpenCode 在 24 小时内连续发布了 **v1.18.0** 和 **v1.18.1** 两个版本，正式完成 Desktop v2 迁移并提供新旧布局切换开关。然而，新 UI 引发了社区强烈反弹：标签页无法显示、Agent 选择器丢失、Plan/Build 模式无法切换等问题集中爆发，Issues 区出现大量相关反馈。开发者主线工作则集中在 LLM 错误处理重构、推理选项扩展以及 v2 平台对 xAI OAuth / 项目配置等关键缺失能力的回填。

---

## 🚀 版本发布

### v1.18.0（Desktop v2 迁移）
- **完成 Desktop v2 迁移**：包含升级处理与首次启动引导
- **新增布局切换开关**：过渡期可在新旧 Desktop 布局间切换
- **Bugfix**：修复了文件视图使用错误背景的问题

### v1.18.1（v1.18.0 补丁）
- 修复 Settings 中模型提供商分区之间的间距问题

> 建议在 v2 UI 尚不稳定时，可通过开关暂时切回旧版（[#36936](https://github.com/anomalyco/opencode/issues/36936) 中已确认 v1.17 可正常显示会话标题）。

---

## 🔥 社区热点 Issues

1. **[#36936] Desktop v2 标签页布局回归，标题无法显示** — 评论 10 / 👍 5  
   升级到新布局后会话标题被截断不可见，回退到 1.17 即修复。属于 v2 迁移最显眼的视觉回归。  
   👉 https://github.com/anomalyco/opencode/issues/36936

2. **[#28957] BUG：Upstream idle timeout exceeded** — 评论 20 / 👍 3  
   长期未解决：在 macOS Tahoe 26.5 + M4 上使用 "writing-plans" skill 时频繁出现模型服务空闲超时。社区讨论度最高的稳定性问题。  
   👉 https://github.com/anomalyco/opencode/issues/28957

3. **[#12472] 原生 Claude Code Hooks 兼容（PreToolUse/PostToolUse/Stop）** — 评论 16 / 👍 37  
   OpenCode 已兼容 CLAUDE.md、skills 等，但缺少对 Claude Code Hooks 系统的支持。👍 数高企，反映用户希望无缝迁移。  
   👉 https://github.com/anomalyco/opencode/issues/12472

4. **[#25239] FEATURE：在模型选择器中暴露 GitHub Copilot "Auto" 选项** — 评论 16 / 👍 14  
   Copilot 用户希望直接在前端切换 Auto 自动模型路由。  
   👉 https://github.com/anomalyco/opencode/issues/25239

5. **[#22129] TUI 自动补全缺少 Skills（Web 应用中可见）** — 评论 13 / 👍 15（已关闭）  
   已定位到 `autocomplete.tsx:363`，TUI 与 Web 端存在功能不一致。  
   👉 https://github.com/anomalyco/opencode/issues/22129

6. **[#32747] `@` 文件提及不包含启动后新增的文件** — 评论 10 / 👍 8  
   启动后再创建的文件无法被 `@` 检索到，需要重启。属于搜索索引陈旧状态问题。  
   👉 https://github.com/anomalyco/opencode/issues/32747

7. **[#31972] 开启新布局后无法切换 Plan/Build 模式** — 评论 8 / 👍 8  
   Windows 10 上 UI 切换与 `Ctrl+.` 快捷键均失效。v2 迁移的代表性功能缺失。  
   👉 https://github.com/anomalyco/opencode/issues/31972

8. **[#36979] Ctrl+. 不显示 Agent 列表 + 中心文件管理器无法展开文件夹** — 评论 5  
   Desktop v1.18.1 Windows 下的双重 v2 迁移问题。  
   👉 https://github.com/anomalyco/opencode/issues/36979

9. **[#36971] VPS 作为服务器时，主页不再显示会话历史** — 评论 3  
   当日 v1.18.1 部署后立即出现的新回归。  
   👉 https://github.com/anomalyco/opencode/issues/36971

10. **[#35426] 会话历史难以发现：无持久化侧边栏，Ctrl+S 与编辑器冲突** — 评论 2  
    反映新版本将侧边栏改为独立页面后造成的导航体验下降，与 #36986 中文化反馈形成对照。  
    👉 https://github.com/anomalyco/opencode/issues/35426

---

## 🛠️ 重要 PR 进展

1. **[#36975] fix(core): restore default model headers**（已合并）  
   回填 V1 风格的会话级请求头（affinity / session / parent / user-agent），同时保留 V2 项目/客户端关联头。v2 兼容性的关键修补。  
   👉 https://github.com/anomalyco/opencode/pull/36975

2. **[#36978] perf(codemode): batch OpenAPI query parameters**（已合并）  
   将 OpenAPI 查询参数序列化为有序元组后批量追加，避免深层对象/数组展开时的二次方不可变重建，性能显著优化。  
   👉 https://github.com/anomalyco/opencode/pull/36978

3. **[#36894] fix(core): expand reasoning option variants**  
   扩展 models.dev 推理 effort / budget 映射，新增 `none/...` 条件切换变体，并按模型与包输出上限裁剪生成预算。  
   👉 https://github.com/anomalyco/opencode/pull/36894

4. **[#36691] refactor(llm): replace LLMError reasons with flat tagged union**  
   三连重构第一棒：将 `LLMError` 改造为扁平标签联合体（BadRequest / Auth / RateLimit / ContextOverflow 等），便于上游消费方进行精确分支处理。  
   👉 https://github.com/anomalyco/opencode/pull/36691

5. **[#36968] feat(app): add archived sessions browser dialog**  
   引入 `/archived` 斜杠命令打开已归档会话浏览对话框，按归档时间排序。回应 #36963 的需求。  
   👉 https://github.com/anomalyco/opencode/pull/36968

6. **[#36967] feat(app): add delete session with confirmation dialog**  
   在侧边栏会话项右键菜单加入"删除会话"动作及确认对话框。  
   👉 https://github.com/anomalyco/opencode/pull/36967

7. **[#36966] feat(app): add inline session rename in sidebar**  
   利用已有 `InlineEditor` 组件实现双击侧边栏会话项进行就地重命名。  
   👉 https://github.com/anomalyco/opencode/pull/36966

8. **[#36965] feat(app): add fork button to assistant response texts**  
   在每条 assistant 消息旁添加 Fork 按钮，一键从该消息分叉新会话。  
   👉 https://github.com/anomalyco/opencode/pull/36965

9. **[#36964] feat(app): add one-click context compaction button**  
   在会话上下文使用率指示器旁添加一键压缩按钮。  
   👉 https://github.com/anomalyco/opencode/pull/36964

10. **[#36950] feat(tui): add V2 theme system**（已合并，#36969 跟进）  
    引入 Effect Schema 主题契约、确定性 V1→V2 主题迁移，18 个单元测试通过。主题体系开始向 v2 演进。  
    👉 https://github.com/anomalyco/opencode/pull/36950

> 此外，#36970 修复 max-steps 指令误以 assistant 角色发送的 bug；#36752 修复通过 OpenAI 兼容网关调用 Anthropic 时缓存写入 token 计为 0 的问题；#36919 已在 v2 恢复 xAI 浏览器 OAuth 与设备码流程。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势解读 |
|------|------------|---------|
| **会话管理 UX** | #36963 / #36962 / #36961 / #36960 / #36959（ohsalmeron 一组） | 单个用户提出 5 项配套功能（归档浏览、删除、就地重命名、消息分叉、一键压缩），并已对应实现为 PR，社区正快速跟进。 |
| **Claude Code 生态兼容** | #12472 | 与 Claude Code 工具链深度对齐（hooks、skills、CLAUDE.md）仍是高频诉求。 |
| **v2 UI 回归修复** | #36936 / #31972 / #36979 / #36971 | 迁移到 v2 布局后，核心交互（标签页、Agent 选择、Plan/Build 切换、会话历史）密集出现可用性问题。 |
| **模型/推理能力扩展** | #25239、#36894、#36976 | 暴露 Copilot Auto、扩展 reasoning 变体、Meta 默认 xhigh——模型可调能力持续增强。 |
| **CLI/无障碍** | #22073 | `opencode run --no-color` 进入关闭流程，反映命令行与 CI 集成场景需求。 |

---

## 💡 开发者关注点

1. **v2 Desktop 稳定性是当务之急**：连续三个版本（1.18.0 / 1.18.1 / 即将发布）需要在回归上投入大量修复，建议在 v1.17 与 v1.18 之间保留明确的回退路径。
2. **LLM 错误模型正在统一化**：#36691/36692/36693 的扁平标签联合体重构，将让上层 UI 与 SDK 消费方在 RateLimit、ContextOverflow、QuotaExceeded 等场景下获得更精确的控制流。
3. **会话生命周期管理开始产品化**：归档/删除/重命名/分叉/压缩的整套 PR 已合入或即将合入，OpenCode 在多会话协作能力上正在对标主流 Chat 产品。
4. **Claude Code 兼容是被低估的迁移杠杆**：Hooks 是用户从 Claude Code 切换到 OpenCode 时的最大摩擦点之一，补齐后有望显著降低迁移成本。
5. **提供商兼容性持续扩面**：xAI OAuth 已回填、Anthropic 缓存写入 token 修复、Meta 推理默认值调整、OpenAI 兼容网关 null 参数修复——多平台/多网关的边界 case 是稳定性的长期战场。
6. **中英文社区反馈均活跃**：#36986、#36981、#36977 等中文 Issue 显示中文用户对新 UI 改动同样敏感，建议在发布说明中提供中文摘要以降低沟通成本。

---

*数据来源：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)，采样窗口：2026-07-14 ~ 2026-07-15*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-15

## 📌 今日速览

Pi 项目今日发布 **v0.80.7**，带来 session affinity 配置重构（`compat.sendSessionIdHeader` 标志被弃用，行为改由 `compat.sessionAffinityFormat` 控制），社区讨论集中在三块：**OpenAI Codex gpt-5.6-luna 模型 404 问题**（多个 PR 已合并修复）、**xAI Grok 订阅 OAuth 接入**（双 PR 并行推进），以及 **Amazon Bedrock Mantle OpenAI 兼容 provider** 的持续讨论。同时，多个 compaction、tool call、session-id 相关的边界 bug 集中被发现和修复。

---

## 🚀 版本发布

### v0.80.7（Breaking Changes）

**主要变更：**
- 移除了 `openai-responses` 在 `models.json` 中的 `compat.sendSessionIdHeader` 标志
- 新增 `compat.sessionAffinityFormat` 配置，支持 `"openai"` / `"openai-nosession"` / `"openrouter"` 三种模式
- 迁移指南：原 `sendSessionIdHeader: false` 需替换为对应的 `sessionAffinityFormat` 取值
- 同步修复了 #6531（Bedrock AWS_PROFILE 认证相关问题），但 #6657 报告显示该修复在 v0.80.7 中仍未完全生效

> 💡 升级前请检查 `models.json` 中的 session-affinity 配置，避免兼容性问题。

---

## 🔥 社区热点 Issues

| # | 标题 | 重要性 | 社区反应 |
|---|------|--------|---------|
| [#5363](https://github.com/earendil-works/pi/issues/5363) | **新增 amazon-bedrock-mantle provider** | 🌟🌟🌟 | 💬16 / 👍8 |
| [#6476](https://github.com/earendil-works/pi/issues/6476) | **v0.80.6 回归：self-hosted OpenAI 兼容 provider 的 `httpIdleTimeoutMs` 不再被尊重** | 🌟🌟🌟 | 💬10 / 👍0 |
| [#6522](https://github.com/earendil-works/pi/issues/6522) | **openai-completions: `max_completion_tokens` 没有最小值，会发送 1 token 导致 400** | 🌟🌟 | 💬7 / 👍0 |
| [#6509](https://github.com/earendil-works/pi/issues/6509) | **Footer 成本显示支持扩展上报的用量（`ctx.ui.setUsage`）** | 🌟🌟 | 💬5 / 👍0 |
| [#6624](https://github.com/earendil-works/pi/issues/6624) | **为 GitHub Copilot 添加 GPT-5.6 模型与长上下文支持** | 🌟🌟 | 💬5 / 👍0 |
| [#3200](https://github.com/earendil-works/pi/issues/3200) | **prompt 命令支持 video/audio 内容**（多模态扩展） | 🌟🌟 | 💬5 / 👍3 |
| [#6461](https://github.com/earendil-works/pi/issues/6461) | **内置 xAI Grok SuperGrok OAuth 登录** | 🌟🌟 | 💬4 / 👍0 |
| [#6075](https://github.com/earendil-works/pi/issues/6075) | **v0.80.2 启动过慢（约 10s）**（Fedora 42） | 🌟🌟 | 💬4 / 👍0 |
| [#5611](https://github.com/earendil-works/pi/issues/5611) | **GitLab Duo Anthropic 流式响应 ~90s 提前截断** | 🌟🌟 | 💬4 / 👍0 |
| [#6167](https://github.com/earendil-works/pi/issues/6167) | **thinking block 规范化与 `requiresReasoningContentOnAssistantMessages` 交互的 bug** | 🌟🌟 | 💬3 / 👍0 |

**要点点评：**
- **#5363** 是讨论度最高的特性请求：用户希望新增 Bedrock Mantle 的 OpenAI 兼容 provider，与现有 Converse API 不兼容的问题需要单独适配。
- **#6476** 揭示了一个真实升级回归：v0.80.3→v0.80.6 之间超时配置悄然失效，影响所有自托管 vLLM 用户。
- **#6522** 暴露了 Pi 在代理场景下对错误 context 报告缺乏兜底，会用 1 token 这种荒谬值去打 400。

---

## 🛠️ 重要 PR 进展

| # | 标题 | 状态 | 价值 |
|---|------|------|------|
| [#6659](https://github.com/earendil-works/pi/pull/6659) | **fix(openai-codex): clamp session-id header 到 64 字符** | ✅ CLOSED | 修复 [#6630](https://github.com/earendil-works/pi/issues/6630)，与 body 内 `prompt_cache_key` 保持一致 |
| [#6654](https://github.com/earendil-works/pi/pull/6654) | **新增 `promptCacheKey` stream option 覆盖 prompt cache key** | 🟢 OPEN | 4 个 OpenAI 兼容 provider 受益，支持 opt-in 覆盖 |
| [#6656](https://github.com/earendil-works/pi/pull/6656) | **feat(ai): xAI 订阅 OAuth** | ✅ CLOSED | 实现 [#6626](https://github.com/earendil-works/pi/issues/6626)，为 Grok 4.5 铺路 |
| [#6651](https://github.com/earendil-works/pi/pull/6651) | **xAI 设备码 OAuth + `grok-4.5` 走 Responses API** | ✅ CLOSED | 实现 [#6461](https://github.com/earendil-works/pi/issues/6461)，提供三档推理强度 |
| [#6216](https://github.com/earendil-works/pi/pull/6216) | **新增 Amazon Bedrock Mantle OpenAI Responses provider** | 🟢 OPEN | 配套 #5363，使用 OpenAI 官方 Bedrock Provider |
| [#6636](https://github.com/earendil-works/pi/pull/6636) | **刷新 models.dev 生成的模型目录** | ✅ CLOSED | 新增 `gpt-5.6-luna` / `gpt-5.6-sol` / `gpt-5.6-terra` |
| [#6635](https://github.com/earendil-works/pi/pull/6635) | **fix(ai): 恢复嵌入在 content 字段中的 OpenAI 兼容 tool call** | ✅ CLOSED | 让 Ollama、LM Studio 等本地推理引擎的"内容里塞 JSON"行为能被 pi-agent-core 正确分发 |
| [#6633](https://github.com/earendil-works/pi/pull/6633) | **feat(agent): AgentHarness `message_end` hook 允许替换最终消息** | ✅ CLOSED | 扩展可对 PII/密钥做持久化前脱敏 |
| [#6632](https://github.com/earendil-works/pi/pull/6632) | **fix(coding-agent): RPC 扩展结果关联** | ✅ CLOSED | stdout 改为 `extension_output` 事件按 RPC request id 关联，错误关联处理统一 |
| [#6594](https://github.com/earendil-works/pi/pull/6594) | **feat: SQLite session 存储** | 🟢 OPEN | 新增 `retainedTail` 字段，避免回溯到 compaction 之前的整棵树 |

---

## 📈 功能需求趋势

从今日活跃的 50 条 Issue 可提炼出几个清晰方向：

### 1. **多 provider 接入与 OAuth 化** 🔥🔥🔥
- xAI Grok（API Key → OAuth 双轨：#6461、#6626）
- Amazon Bedrock Mantle（OpenAI 兼容层：#5363）
- GitHub Copilot 新模型（GPT-5.6 全家桶：#6624）
- **趋势**：用户更倾向"和 Claude/Codex/Copilot 一致的设备码/订阅体验"

### 2. **Prompt Cache 优化（成本与时延）** 🔥🔥🔥
- 核心级 prompt cache 稳定性（#5253）
- `promptCacheKey` opt-in 覆盖（#6654）
- `pi update --extensions` 与 npm 11.16.0 脚本阻断（#6600）
- 防止 dynamic system prompt 误失效（#6621）
- **趋势**：本地推理（Strix Halo 等统一内存设备）的 prefill 瓶颈让 cache 复用成为刚需

### 3. **Compaction / 上下文管理可靠性** 🔥🔥
- MiMo zero-output 反复 auto-compaction（#6639）
- image 估算过大导致 keep-recent budget 失效（#6603）
- 响应后主动 compaction（#6606）
- compaction LLM 调用继承 session transport（#6555）
- **趋势**：从"溢出时被动兜底"转向"内建策略化"

### 4. **多模态与扩展能力** 🔥
- video/audio 进 prompt RPC（#3200，长期议题）
- 子 agent 用量上报到 footer（#6509）
- 暴露"等待用户输入"信号给宿主集成（#5329，用于 cmux）
- **趋势**：扩展生态要求更细粒度的 UI/runtime 钩子

### 5. **OpenAI Codex 的多项兼容性问题** 🔥
- gpt-5.6-luna 404（originator 硬编码）：#6601、#6615、#6533
- session-id header 长度未 clamp：#6630
- compaction 切到其它渠道会 "Model not found"：#6533
- **趋势**：gpt-5.6 系列已经成为一个高频踩坑测试集

---

## 💭 开发者关注点

汇总社区反馈的**高频痛点**：

1. **⚠️ 回归风险被低估**
   - v0.80.6 中悄然修改的 `httpIdleTimeoutMs` 行为（#6476）展示了"无 changelog 细节"会让自托管用户措手不及。建议在 release notes 中显式列出 provider/transport 行为变更。

2. **🐛 边界场景缺乏兜底**
   - `max_completion_tokens` 发送 1（#6522）、compaction 重复触发（#6639）、session-id 超长 header（#6630）——这些都是"上游代理解析错误 → pi 直接撞墙"的典型链路，社区呼吁对代理链路做更稳健的输入校验。

3. **🚀 多模态支持滞后于模型能力**
   - Gemma 4、GPT-4o 等都原生支持视频/音频，但 pi 的 `prompt` RPC 仍未扩展（#3200 跨越三个月仍未合并）。

4. **🔌 扩展协议细节抖动**
   - extension 输出/错误的 RPC 关联问题（#6632）、`message_end` hook 可替换性（#6633）——一个隐藏但重要的扩展语义升级，第三方扩展作者需关注。

5. **🐢 TUI 启动性能**
   - Fedora 42 用户反馈 v0.80.2 启动 ~10 秒（#6075），需要进一步 profiling；CRASH 日志硬编码 `~/.pi/agent/pi-crash.log` 忽略 `PI_CODING_AGENT_DIR`（#6652）是同类体验问题的代表。

6. **💰 成本透明度**
   - `ctx.ui.setUsage` 让扩展上报成本到 footer（#6509）与 compaction 的 cache 写入策略（#6618）共同指向：**用户希望在小 token 时代精确控制每一分钱的去向**。

---

📅 *Generated from GitHub data for `badlogic/pi-mono` · 报告期：2026-07-14 → 2026-07-15*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-15

## 📌 今日速览

今日 Qwen Code 发布了 **v0.19.10 稳定版**，最大亮点是**多 Workspace 支持**全面落地，覆盖 ACP 传输、daemon workers、分屏会话和工作区感知动作。与此同时，社区讨论最热烈的话题是 Issue #6378 关于"单 daemon 多 workspace"的 RFC（23 条评论），恰好与本次发布形成呼应。Issue 与 PR 方面，安全与权限模型相关讨论显著升温（trusted folders、MCP readOnlyHint、文件路径规范化），TUI/渲染细节持续打磨。

---

## 🚀 版本发布

| 版本 | 类型 | 要点 |
|------|------|------|
| **v0.19.10** | 稳定版 | **Multi-workspace 支持**贯穿 ACP transport、daemon workers、split-view sessions、workspace-aware actions（#6621, #6635, #6746 等） |
| v0.19.10-nightly.20260715.c538bd70d | 每日构建 | 包含 PR #6848（review 流程规范）与 web-shell 工作区路径锁定 |
| v0.19.9-preview.0 | 预览版 | 同步 #6848 改动 + workspace path lock |
| sdk-typescript-v0.1.8 | SDK | 捆绑 CLI 0.19.10 |

👉 [Release v0.19.10](https://github.com/QwenLM/qwen-code/releases) | [v0.19.9-preview.0](https://github.com/QwenLM/qwen-code/releases)

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 热度 | 为什么值得关注 |
|---|------|------|----------------|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | **RFC: 单 daemon 支持多 workspace** | 💬 23 | 与 v0.19.10 头条特性强相关；当前"1 daemon = 1 workspace"模型被广泛质疑，正推动架构演进 |
| [#3696](https://github.com/QwenLM/qwen-code/issues/3696) | **Skills/Extensions/MCP/Config 热重载** | 💬 7 · ✅ Closed | 跟踪完成：运行时热重载已覆盖 settings-driven MCP 刷新，可视为里程碑式收口 |
| [#4748](https://github.com/QwenLM/qwen-code/issues/4748) | **优化 daemon 冷启动 + qwen serve fast-path** | 💬 5 | daemon 启动 ~2.5s vs CLI ~0.7s 的差距是核心性能瓶颈，P2 但影响所有用户体感 |
| [#5979](https://github.com/QwenLM/qwen-code/issues/5979) | **`/auth` 切换供应商后新会话 401** | 💬 5 · ✅ Closed | 典型配置缓存失效 bug，Windows 用户多发，反映认证链路仍不够鲁棒 |
| [#5219](https://github.com/QwenLM/qwen-code/issues/5219) | **CI 集成测试仅在 Release 时跑** | 💬 5 · ✅ Closed | 揭示了 PR 合入无回归保护的工程隐患，已推动流程改进 |
| [#2629](https://github.com/QwenLM/qwen-code/issues/2629) | **VSCode 插件 `file_path` 参数缺失** | 💬 5 · ✅ Closed | 影响 VSCode 用户群；体现 IDE 集成层面的稳定性问题 |
| [#6809](https://github.com/QwenLM/qwen-code/issues/6809) | **Ctrl+S 多行编辑 diff 预览错位** | 💬 4 | 权限确认对话框渲染 bug，TUI 体验细节但影响交互可信度 |
| [#6149](https://github.com/QwenLM/qwen-code/issues/6149) | **VP 模式链接无法点击 / 非 VP 模式溢出无法滚动** | 💬 4 | 终端 buffer 模式的两难，体现 TUI 架构仍需打磨 |
| [#5971](https://github.com/QwenLM/qwen-code/issues/5971) | **Linux TUI 窗口持续从首条消息回滚刷屏** | 💬 4 | Anolis OS 等 Linux 发行版高频出现，影响多轮对话体验 |
| [#5239](https://github.com/QwenLM/qwen-code/issues/5239) | **subagent 与主会话缺少双向通信** | 💬 4 | Multi-agent 路线下的关键缺口：当前仅靠文件 monitor 监听子 agent 状态，属明显工程痛点 |

> 另值得关注的未入榜项：[#6914](https://github.com/QwenLM/qwen-code/issues/6914)（会话/工具调用上限接受小数导致提前终止）、[#6831](https://github.com/QwenLM/qwen-code/issues/6831)（P1：trusted folders preview 检查污染缓存）、[#6883](https://github.com/QwenLM/qwen-code/issues/6883)（👍 2：钉钉 Webhook 单聊投递，集成方向有赞）。

---

## 🛠 重要 PR 进展（Top 10）

| # | 类型 | 内容 |
|---|------|------|
| [#6893](https://github.com/QwenLM/qwen-code/pull/6893) | fix(core) | 处理**未签名的 Claude thinking 块**：代理返回缺签名时丢弃不可信块，保留签名完整块与可见内容 |
| [#6854](https://github.com/QwenLM/qwen-code/pull/6854) | fix(core) | 净化**孤立 `` 闭合标签**：仅丢标签、保留命名工具调用，避免整轮作废 |
| [#6891](https://github.com/QwenLM/qwen-code/pull/6891) | feat(channels) | **钉钉 Webhook 单聊投递**：复用同一 channel 配置，新增 `userIds` 单聊机器人分支（对应 #6883） |
| [#6846](https://github.com/QwenLM/qwen-code/pull/6846) | feat(core) | **PDF 视觉回退桥接**：纯文本模型解析失败或单页过大时自动渲染并转写 |
| [#6900](https://github.com/QwenLM/qwen-code/pull/6900) | fix(cli) | **修复 trusted-folders preview 污染缓存**：克隆而非 mutate 单例（修复 #6831） |
| [#6920](https://github.com/QwenLM/qwen-code/pull/6920) | fix(config) | **拒绝小数化 session/tool-call 上限**：core config 校验强制整数，恢复时也复校验（修复 #6914） |
| [#6887](https://github.com/QwenLM/qwen-code/pull/6887) | fix(cli) | `/update` 检查接入 `FETCH_TIMEOUT_MS=2000`，原本是死代码；并日志化 `fetchInfo`（修复 #6857） |
| [#6926](https://github.com/QwenLM/qwen-code/pull/6926) | fix(mcp) | **MCP 发现超时后清理子进程**：stdio 模式下终止 transport 之下所有 descendant PID |
| [#6923](https://github.com/QwenLM/qwen-code/pull/6923) | fix(core) | **规范化限制类权限路径**：同时比对原拼写与 canonical 真实路径，覆盖 `..`、符号链接场景 |
| [#6895](https://github.com/QwenLM/qwen-code/pull/6895) | feat(core) | **可信调用上下文传播** `InvocationContextV1`：CLI/ACP/daemon/channel/scheduler 各自建立上下文根 |

> 同期已合并：[#6847](https://github.com/QwenLM/qwen-code/pull/6847)（长 tool 摘要自动换行）、[#6766](https://github.com/QwenLM/qwen-code/pull/6766)（PR 失败自动巡检机器人）、[#6924](https://github.com/QwenLM/qwen-code/pull/6924)（MCP readOnly 工具需 server trust 才能默认放行）、[#6925](https://github.com/QwenLM/qwen-code/pull/6925)（畸形工具结果保留 display 输出）。

---

## 📈 功能需求趋势

从近 24 小时 50 条 Issue 提炼，社区关注点呈以下分布：

1. **多 Workspace / Daemon 架构**（🔥 热度最高）
   - #6378 RFC 单 daemon 多 workspace 直接推动 v0.19.10 头条特性落地；#4748 跟进 daemon 冷启动与 fast-path。

2. **TUI 渲染与交互体验**
   - 滚动/溢出 (#6149, #5971)、权限对话框 diff (#6809)、tool 摘要截断 vs 换行 (#6814, #6813, #6847) 形成小集群。

3. **安全与权限模型**
   - Trusted folders (#6831)、MCP readOnlyHint 误授权 (#6917)、文件路径规范 (#6915/6923)、daemon 子进程密钥净化 (#6606)、thinking 块签名校验 (#6893, #6854)。**安全相关占比明显抬升**。

4. **集成与通道（Channels）**
   - 钉钉单聊 (#6883/6891)、钉钉交互卡片 (#6443)；体现企业 IM 接入成为新方向。

5. **CI/工程化**
   - 集成测试纳入 PR 流程 (#5219)、PR 失败巡检 (#6766)、本地 PR 验证 (#6873)、发布异步化 (#6868)、desktop UI 方向 RFC (#6896)。

6. **Long-session 资源管理**
   - #2128 长期会话内存无限增长仍 OPEN，配合 #3696 热重载已闭环部分场景，但 UI History 无界问题未根治。

---

## 🧑‍💻 开发者关注点

**主要痛点：**

- **Daemon 启动慢 + 多 workspace 架构演进**：开发者最关心的不是新功能而是 daemon 是否能"既快又多"，daemon 模式从单 workspace 到多 workspace 的过渡期存在兼容与性能权衡。
- **安全默认值过宽**：MCP `readOnlyHint`、trusted folders preview、shell 通知频次（#6898：每次工具都弹窗）等都指向"安全 / 安静运行"和"开发节奏"之间的张力。
- **TUI 在不同终端/OS 表现不一致**：Anolis、PyCharm 内置终端、VSCode 内置终端各有特殊场景（Ctrl+C 误退 #4586、scroll 刷屏 #5971），跨终端鲁棒性仍是 TUI 老大难。
- **配置生效链路**：配置改了但新会话不生效（#5979 已修）、`/update` 检测不到新版本（#6857 已修），反映"写入即生效"的契约仍未完全闭环。
- **Subagent 监控缺位**（#5239）：缺少对子 agent 状态的可见性，开发者被迫用文件 monitor 折中，催生 multi-agent 路线下的可观测性需求。
- **VSCode 集成稳定性**（#2629, #6902, #6904）：IDE 集成是用户增长入口，但近 24 小时就有多条相关 issue/PR，提示需要更多资源投入。

**高频需求关键词：** multi-workspace · MCP trust · file permission · TUI polish · daemon perf · channel integration · long-session memory · subagent observability

---

*日报基于 GitHub Issues / Pull Requests / Releases 公开数据自动生成，覆盖窗口：2026-07-14 ~ 2026-07-15 UTC。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-07-15** · **数据周期：过去 24 小时**

---

## 1. 今日速览

v0.8.68 发布候选（PR #4361）进入最终整合阶段，伴随大量 v0.8.68 标签的 Issue 在 24 小时内集中关闭，社区进入"封板冲刺"节奏。TUI 流式渲染卡顿（#4270）、`@` 文件索引导致终端冻结（#4365/#4367）、以及 Provider 路由与定价匹配（#4318/#4335/#4351）成为本轮最受关注的三大热点。同时，新版官网正式以文档门户为核心重构落地（#4362）。

---

## 2. 版本发布

**过去 24 小时无新 Release。**

需要关注的在途版本：**v0.8.68 RC**（PR #4361），预计将在水下主题动效、Exec 流式 Receipt、Provider 路由定价、状态化终端会话持久化等方面完成最后打磨。

---

## 3. 社区热点 Issues

按关注度与影响力排序，挑选 10 条：

| # | 编号 | 标题 | 状态 | 重要性 |
|---|------|------|------|--------|
| 1 | [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | Codewhale not following the constitution | OPEN | **35 条评论，社区热度最高**。用户抱怨 Codewhale 反复绕过既定脚本自行生成临时脚本，与 Constitution 约束冲突，体现规范执行层面的张力。 |
| 2 | [#4365](https://github.com/Hmbown/CodeWhale/issues/4365) | `@` 文件监听扫描整目录导致终端卡死 | OPEN | 大型非工作区路径触发完整子目录遍历，pwsh7 下直接冻结 TUI，已由 PR #4367 给出修复方案。 |
| 3 | [#4270](https://github.com/Hmbown/CodeWhale/issues/4270) | 流式文本显示太慢 | CLOSED | 用户反馈 DeepSeek V-flash 响应极快，但终端"打字机"效果拖累体验，且经常在流末尾"咻"地一次性吐出剩余内容。 |
| 4 | [#4208](https://github.com/Hmbown/CodeWhale/issues/4208) | TUI 复制粘贴混入制表符装饰 | CLOSED | `╎ ▎ ● │ ┃` 等 Unicode 装饰被一同复制，影响后续脚本粘贴使用。 |
| 5 | [#4368](https://github.com/Hmbown/CodeWhale/issues/4368) | 覆盖 kimi baseUrl 与上下文窗口预热 | OPEN | 用户期望通过 `config.toml` 覆盖 `https://api.kimi.com/coding/v1`，并改善 kimi-k2.7-code 的上下文长度预热。 |
| 6 | [#4369](https://github.com/Hmbown/CodeWhale/issues/4369) | "Constitution"/"Code" 中文翻译不自然 | OPEN | 向导页第 4 步将 Constitution 译为"宪法"，代词"你"指代不清，反映 i18n 体验需要打磨。 |
| 7 | [#4350](https://github.com/Hmbown/CodeWhale/issues/4350) | Termux (aarch64-linux-android) 编译失败 | CLOSED | rquickjs 未提供 Android 绑定，Termux 用户无法直接 cargo build。 |
| 8 | [#4345](https://github.com/Hmbown/CodeWhale/issues/4345) | API Key 显示不友好、不便终端粘贴 | CLOSED | 终端展示长 API Key 可读性差，用户希望提供更紧凑或可遮盖的展示方式。 |
| 9 | [#4318](https://github.com/Hmbown/CodeWhale/issues/4318) | Pricing 模块丢弃 cache_write 费率 | CLOSED | `CurrencyPricing` 与 `TokenUsage` 硬编码 `cache_write: 0`，导致 Anthropic 1.25×–2× input 的写入费用被低估。 |
| 10 | [#4333](https://github.com/Hmbown/CodeWhale/issues/4333) | "已配置"选择器误判空 provider 头 | CLOSED | `[providers.anthropic.http_headers]` 仅含空表也被判为已配置，影响 Model · configured 视图准确性。 |

> 其余值得关注的关闭项：#4335（离线 scorecard 需 provider-aware）、#4359（detach 后台 Agent 的 stop 语义）、#4358（PTY 鼠标交互覆盖）、#4357（水下主题动效收尾）、#4356（Exec 流 Receipt 版本化）、#4355（状态化终端身份持久化）。

---

## 4. 重要 PR 进展

| # | 编号 | 标题 | 说明 |
|---|------|------|------|
| 1 | [#4361](https://github.com/Hmbown/CodeWhale/pull/4361) | Prepare CodeWhale v0.8.68 RC | 合并水下 TUI 完成态、权限语义、动效与主题可达性，作为单一可审分支准备 v0.8.68 RC。 |
| 2 | [#4367](https://github.com/Hmbown/CodeWhale/pull/4367) | 修复 `@` 补全文件索引的墙钟预算 | 通过为 `Workspace::build_file_index` 引入时间预算并切换为惰性子树遍历，解决大目录冻结 TUI（修复 #4365）。 |
| 3 | [#4354](https://github.com/Hmbown/CodeWhale/pull/4354) | 新增 MiniMax Messages Provider | 接入 MiniMax-M3 / MiniMax-M2.7，支持 Global / China Base URL，覆盖鉴权、路由、请求路径、持久化与文档生成。 |
| 4 | [#4351](https://github.com/Hmbown/CodeWhale/pull/4351) | Scorecard 成本绑定 Provider 路由 | 让离线 scorecard 严格按 provider/model 路由定价，OAuth/本地/未知网关走 fail-closed，并保留 `turn_end` 中的有效路由与计费表面判别符。 |
| 5 | [#4362](https://github.com/Hmbown/CodeWhale/pull/4362) | Codewhale 官网改为文档主导 | 替换长篇 marketing 序列为紧凑文档门户，主页以仓库派生的安装、运行、Provider、版本指南为核心，引入水下视觉系统。 |
| 6 | [#4364](https://github.com/Hmbown/CodeWhale/pull/4364) | Docs hub / FAQ 关键词搜索 | 在 `/docs` 与 FAQ 页面加入客户端 `DocsSearch`，支持 `/` 快捷键过滤中英文标签、描述、源文件与分类。 |
| 7 | [#4366](https://github.com/Hmbown/CodeWhale/pull/4366) | 站点品牌字符串统一 | 将所有面向用户的品牌串对齐到 "Codewhale" 字标（仓库 URL 与 slug 不变），清理 #4362 评审遗留点。 |
| 8 | [#4360](https://github.com/Hmbown/CodeWhale/pull/4360) | 修复 BSD 系统打开浏览器失败 | 为 NetBSD / FreeBSD / OpenBSD / DragonFly 补充 `browser_open_command` 平台分支。 |
| 9 | [#3780](https://github.com/Hmbown/CodeWhale/pull/3780) | 暴露上下文压缩开关 | 新增 `[compaction].enabled` 与 `[seam_manager].enabled` 配置项，关闭 #3765。 |
| 10 | [#4342](https://github.com/Hmbown/CodeWhale/pull/4342) | 升级 rmcp 至 2.2.0 | 依赖升级（其它同期合并的依赖升级：#4338 actions/stale、#4339 jsonschema、#4340 ignore、#4341 lru、#4343 colored）。 |

---

## 5. 功能需求趋势

从本期 Issue 标签聚合可识别出社区最关注的几个方向：

- **🖥️ TUI 性能与可用性**：流式输出节奏（#4270）、文件监听与补全阻塞（#4365）、复制粘贴污染（#4208）、密文展示（#4345）——渲染与交互层面的"最后一公里"打磨。
- **🔌 多 Provider 路由与定价准确性**：kimi baseUrl 覆盖（#4368）、cache_write 费率（#4318）、scorecard provider-aware（#4335/#4351）、空 header 误判（#4333）——成本归因可信度持续是工程焦点。
- **🌐 跨平台与本地化**：Android/Termux 编译（#4350）、BSD 浏览器调用（#4360）、中文翻译质量（#4369）——非主流平台与中文用户体验显著提升。
- **🤖 Agent 可靠性**：detached 后台 Agent 的 stop 语义（#4359）、状态化终端身份持久化（#4355）、Exec 流 Receipt 版本化（#4356）——为可重放与支持归因奠基。
- **🎨 水下主题与动效**：receipt 沉降、phase-aware 深度、reduced-motion 兜底（#4357）——视觉系统进入收尾。
- **📚 文档与官网**：以仓库内容为核心的文档门户（#4362/#4364/#4366），降低新用户上手门槛。
- **🆕 新模型接入**：MiniMax Messages Provider（#4354）落地，预示模型矩阵仍在扩张。

---

## 6. 开发者关注点

1. **TUI 在大路径/长输出下的稳定性仍待加强**——`@` 文件补全、流式输出这两条路径上的卡顿或"延迟尾巴"在多平台被反复报告，已分别由 #4367 / #4270 处理，但说明该类问题需要持续压测。
2. **Provider 配置与定价一致性是高频痛点**——从空表头被误识为已配置，到 cache_write 费用被压平，再到 OAuth/本地路由定价差异，开发者希望"看到的价格就是真实的价格"。
3. **API Key 在终端中的可用性**——长字符串在窄终端里既难读也不便复制，开发者呼吁更紧凑或可遮盖的呈现形式。
4. **跨平台支持缺口**——Android/Termux、*BSD 等平台陆续浮出，社区需要更系统的构建矩阵与 CI 覆盖。
5. **国际化的"信达雅"**——尤其是 Constitution、Code 这类带有项目语境的核心词，需要术语表与上下文一致的中文翻译。
6. **Constitution / 规范执行力**——Issue #4032 的 35 条评论反映出"AI 是否真的会遵循既定规则"是产品信任的关键变量，需要更明确的执行/审计机制。
7. **后台 Agent 与终端会话的可控性**——detach、stop、跨进程恢复等语义需要面向用户的明确契约，避免误把"成功 detach"误判为"可取消"。

---

*报告基于 Hmbown/DeepSeek-TUI（关联仓库 Hmbown/CodeWhale）公开数据生成，仅供参考。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*