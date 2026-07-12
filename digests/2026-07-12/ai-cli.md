# AI CLI 工具社区动态日报 2026-07-12

> 生成时间: 2026-07-12 02:06 UTC | 覆盖工具: 9 个

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

**报告日期：2026-07-12 ｜ 数据窗口：过去 24 小时**

---

## 1. 生态全景

当前 AI CLI 工具赛道呈现 **"模型层聚变、应用层稳态"** 的格局：OpenAI GPT-5.6 系列（Sol/Terra/Luna）的发布触发 Codex、OpenCode、Pi 三家同步适配；与此同时，多数主流工具进入"无新版本发布、密集 PR 打磨"的状态，社区讨论从功能扩展转向 **可靠性、可观测性、跨平台一致性** 等工程化议题。MCP 协议成为事实标准的工具扩展通道，但其稳定性、鉴权、跨进程桥接等基础设施问题在多个工具中并行暴露。

---

## 2. 各工具活跃度对比

| 工具 | 活跃 Issue 数 | PR 更新数 | 新版本 | 当日热度信号 |
|------|:---:|:---:|:---:|---|
| **OpenAI Codex** | ~50 | 10 | ❌ | #20161 关闭仍 205 评论；#11023 (Linux Desktop) 👍733 |
| **Pi (earendil-works/pi)** | ~50 | 19 | ❌ | GPT-5.6 适配密集（#6475, #6097 👍18） |
| **Claude Code** | ~30 | 5 | ❌ | #24798 (55 评论)、#74649 (52 评论) |
| **GitHub Copilot CLI** | 18 | 1 | ❌ | MCP OAuth 5 条关联 Issue 集中爆发 |
| **Gemini CLI** | ~10 | 8 | ❌ | Subagent 协议可靠性问题热度高 |
| **OpenCode** | ~10 | 10+ | ❌ | #36140 GPT-5.6 Luna 👍70 |
| **Qwen Code** | ~10 | 10 | ❌ | RFC #6378 多工作区架构（20 评论） |
| **Kimi Code CLI** | 1 | 5 | ❌ | 维护者集中提交（nankingjing 3 PR） |
| **DeepSeek TUI / CodeWhale** | 5 | 4 | ❌ | Anthropic 适配三件套修复 |

> **观察**：所有工具当日均无新版本发布，但 Issue + PR 的合并处理节奏并未放缓，反映出"日常维护密集、版本节奏趋稳"的成熟期特征。

---

## 3. 共同关注的功能方向

### 3.1 新模型集成（GPT-5.6 Sol/Terra/Luna）
- **Codex** (#31814)、**OpenCode** (#36140, #36141, PR #36476)、**Pi** (#6475, #6097, #6528) 三家工具在同一天密集提交模型注册、Prompt Cache、推理档位（`max`）支持
- **共性诉求**：首发日即"开箱即用"，包括端点路由、cache 选项、思维链占位符渲染、reasoning 字段格式等

### 3.2 MCP 协议稳定性
- **Claude Code** #76769（stdio MCP 4h SIGINT 静默退出）、**Copilot CLI** #4084/#4085/#4086/#4089/#4096（OAuth 全链路失控）、**Qwen Code** #6639（401 未触发 OAuth 恢复）、**Kimi Code** #1769（连接失败导致假死）、**Gemini CLI** PR #28319（a2a-server 环境隔离）
- **共性诉求**：从"能连上"升级到"能稳定用数小时"

### 3.3 长会话与多 Agent 协同
- **Claude Code** #24798（多会话编排，55 评论）、#76500（Agent Teams 邮箱缺陷）、#76769（MCP 4h SIGINT）
- **Gemini CLI** #22323（Subagent 错误报告 GOAL 成功）、#21409（generalist agent 永久挂起，👍8）
- **OpenCode** V2 TUI subagent picker 改进（PR #36480、#35762）
- **Pi** PR #6474（message-anchored tool loading 重写 Agent 工具编排）
- **共性诉求**：小时级、跨进程、跨会话场景的鲁棒性

### 3.4 平台兼容性（Windows + 跨平台）
- **Claude Code** #74649（Win11 Cowork HCS 缺失）、#57998（%APPDATA% 不可配置）、#76804（WSL 误触发）
- **Codex** #22428/#28248/#30178（Windows 沙盒 + Webview 链路）
- **OpenCode** #4804/#19466（macOS Intel OpenTUI 高 CPU）
- **Pi** #6502（Windows Terminal ESC[3J 滚动跳跃）
- **DeepSeek TUI** #4350（Termux/Android）、#4349（BSD 系构建）
- **共性诉求**：非 macOS / Linux 主线环境的可用性差距明显

### 3.5 会话持久化与可观测性
- **Copilot CLI** #4098（JSONL 截断/拼接）、#4097（二进制残留超 CAPI 限制）
- **Claude Code** #74709（用量阈值分级告警）
- **Kimi Code** PR #2493（后台任务 `started_at` 记录）
- **Qwen Code** #6487（Memory 索引陈旧）、#6743（chat recording 持久化失败）
- **共性诉求**：把"操作成功 ≠ 数据落盘"作为头号可靠性指标

### 3.6 危险操作的显式确认
- **Claude Code** #64615（/rewind Esc Esc 静默破坏代码）
- **OpenCode** #36465（revert 隐式破坏 Git 状态）
- **Gemini CLI** #22672（`git reset --force` 误用）
- **共性诉求**：默认行为可观测、可中断、可回滚

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业级多 Agent 协同、深 Anthropic 生态 | 大型多模块项目团队 | 桌面 + CLI 双端、Agent Teams 实验功能 |
| **OpenAI Codex** | ChatGPT 深度集成、多平台覆盖 | 广谱开发者 | 用户基数最大，桌面端稳定性为当下短板 |
| **Gemini CLI** | AST-aware 工具链、Auto Memory 记忆系统 | 长期项目维护者、Google 生态用户 | 子代理协议 + 行为评测体系（76 项 eval） |
| **GitHub Copilot CLI** | GitHub 原生集成、Voice 模式、BYOK | GitHub 重度用户、企业开发者 | MCP OAuth 集成是当前主要风险点 |
| **Kimi Code CLI** | ACP 协议、IDE 编辑器集成 | JetBrains/Zed 用户 | 多 provider 兼容，核心维护者驱动 |
| **OpenCode** | TUI 极致体验、模型族广覆盖 | 终端原住民、性能敏感型开发者 | V2 TUI 重构进行中，GPT-5.6 适配最快 |
| **Pi** | 轻量、Extension API、Developer-first | 偏好 codex/claude 迁移的极客 | 19 条 PR 集中在协议层演进（developer role、constrained sampling） |
| **Qwen Code** | 多工作区 daemon、Web Shell UI | 中文 AI 生态、团队协作场景 | `qwen serve` 架构演进 + 长上下文模型适配 |
| **DeepSeek TUI (CodeWhale)** | Rust 性能、跨平台、i18n | 高级用户、小众平台用户 | 高频迭代（10+ PR/天），Anthropic 适配密集 |

---

## 5. 社区热度与成熟度

### 5.1 热度分层

**第一梯队（高互动 + 重大需求）**
- **Codex**：👍733 的 Linux Desktop App 请求是整个生态的最高赞 Issue
- **Claude Code**：多 Agent 编排 #24798（55 评论）+ Windows Cowork 阻塞（52 评论）
- **Pi**：单日 19 条 PR，活跃度堪比中型项目

**第二梯队（稳定维护 + 工程化打磨）**
- **OpenCode**：TUI + 模型支持双线推进，6+ 核心 PR
- **Qwen Code**：架构 RFC 驱动，长期价值高
- **Gemini CLI**：Agent 协议与 Memory 双子系统深化

**第三梯队（核心维护者驱动 + 周边生态）**
- **Kimi Code CLI**：5 条 PR 集中在 `nankingjing` / `he-yufeng` 两人
- **DeepSeek TUI**：5 Issue / 4 PR 高度聚焦的冲刺状态

### 5.2 成熟度信号

- **数据完整性**已成为多个工具的共同短板（Copilot CLI JSONL、Qwen Code chat recording、Claude Code /rewind）——说明长任务"持久记忆"场景已被用户实际使用，但底层尚未就绪
- **Windows 平台**仍是生态普遍薄弱面（Claude Code、Codex、OpenCode 都有相关问题）
- **供应链/插件安全**首次成为集中议题（Claude Code #76581 符号链接覆盖、Gemini CLI PR #28359 shell wrapper），表明生态从"功能竞赛"进入"防御性加固"阶段

---

## 6. 值得关注的趋势信号

### 6.1 "新模型首发日"成为生态节点
GPT-5.6 在 OpenAI 上架当日即触发 Codex / OpenCode / Pi 三家同步适配。**对开发者的启示**：依赖单一 provider 的工具会显著滞后，多 provider 抽象层正成为差异化竞争力（Kimi #1771、OpenCode PR #35985 从 models.dev 派生推理变体都是这一方向的早期信号）。

### 6.2 MCP 从"功能扩展"升级为"基础设施"
MCP OAuth、stdio 进程生命周期、跨进程 credential 桥接在多家工具集中暴露问题。**对开发者的启示**：构建 MCP server 时需为长会话、断网重连、token 刷新做显式处理；接入 MCP 的工具方需在客户端做更主动的连接态校验（Gemini PR #28359 思路值得参考）。

### 6.3 可观测性成为新的"功能"而非"补丁"
Claude Code 用量阈值告警 (#74709)、Kimi 后台任务运行时长 (#2493)、OpenCode server 启动失败原因透传 (PR #36478)、Qwen Code 跨 workspace 会话可见 (#6746) —— **开发者越来越把"系统在做什么"视为可用性前提**。建议优先投资日志结构化、错误可观测、状态可视化。

### 6.4 "破坏性默认行为"被密集质疑
/rewind (Claude Code)、revert (OpenCode)、git reset --force (Gemini)、模型静默降级 (Codex) —— **设计模式正在从"智能化默认"转向"显式确认"**。开发者应主动审视 CLI 中的隐式破坏性路径。

### 6.5 AI-friendly 文档成为新需求
OpenCode #8816（`llms.txt`，👍35）反映出 **LLM 检索与自动化集成对机器可读文档的需求**。这一趋势可能在未来 6 个月内成为各工具的标配。

### 6.6 中文 AI 生态的差异化路径
Qwen Code 的多工作区 daemon、Web Shell UI、长期记忆系统，与西方主流工具形成 **"团队协作 + 长上下文 + 服务化部署"** 的差异化路线。对中文场景开发者，Qwen Code + ACP 集成可能是 Claude Code 之外值得关注的备选。

---

**报告说明**：以上分析基于 2026-07-12 当日各工具 GitHub 公开数据，不含版本/订阅/定价等商业维度评估。建议结合各工具自身 Roadmap 与团队的 Provider 偏好、平台环境、协作模式做综合选型决策。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期**：截至 2026-07-12 · **样本**：50 PR + 50 Issue

> ⚠️ 说明：原始 PR 数据中评论数为 `undefined`，本报告以"PR + Issue 的交叉活跃度"与"近期修改时间"作为热度代理指标。

---

## 一、热门 Skills 排行（按社区讨论密度）

### 🥇 1. `skill-creator` 评测管线修复集群
不是单个 Skill，而是社区投入最多精力的**基础设施修复风暴**。
- 相关 PR：**#1298**（run_eval 全链路修复）、**#1323**（trigger detection）、**#1099 / #1050**（Windows）、**#1261**（trigger-eval 隔离）、**#362 / #361**（UTF-8 + YAML）
- 相关 Issue：**#556**（12 条评论，"0% trigger rate"复现 10+ 次）、**#1169**（3 条）、**#1061**（3 条）
- **热点**：当前 `run_eval.py` 对所有 description 报告 `recall=0%`，导致 `improve_description.py` 实际在"对噪声做优化"。这是阻塞整个 description 优化闭环的 P0 Bug。
- **状态**：全部 OPEN，多个 PR 在并行解决同一问题的不同切面。
- 🔗 https://github.com/anthropics/skills/pull/1298

### 🥈 2. `document-typography`（#514）
- **功能**：在生成文档中自动防止孤字/寡行/widow 段落、编号错位等排版瑕疵。
- **热点**：作者指出"AI 生成文档普遍存在排版问题，但用户极少主动要求高质量排版"——把隐性质量要求变成显性 Skill。
- **状态**：OPEN（2026-03-04 创建，03-13 最后更新）。
- 🔗 https://github.com/anthropics/skills/pull/514

### 🥉 3. `frontend-design` 改进（#210）
- **功能**：重构该 Skill 让 Claude 在单次对话中**真能 follow** 每条指令。
- **热点**：典型的"Skill 写得对，但 Claude 执行不到位"问题——社区开始反思 SKILL.md 的可执行性（actionability）而非仅内容完整性。
- **状态**：OPEN。
- 🔗 https://github.com/anthropics/skills/pull/210

### 4. `ODT` 开放文档支持（#486）
- **功能**：OpenDocument Format（.odt / .ods）的创建、模板填充、HTML 转换。
- **热点**：补齐文档格式生态短板（已有 pdf/docx，缺 ODF），对欧洲/政府/LibreOffice 用户场景关键。
- **状态**：OPEN。
- 🔗 https://github.com/anthropics/skills/pull/486

### 5. `testing-patterns`（#723）
- **功能**：覆盖 Testing Trophy、AAA、React Testing Library、契约测试、Mutation 等完整测试方法论。
- **热点**：继 `frontend-design` 之后，社区对**领域方法论型 Skill**（而非工具调用型）的需求上升。
- **状态**：OPEN。
- 🔗 https://github.com/anthropics/skills/pull/723

### 6. `self-audit`（#1367）
- **功能**：交付前的"机械校验 + 四维推理审计"双闸门质量门禁，号称 v1.3.0。
- **热点**：与 Issue **#1385**（Reasoning Quality Gate Pipeline，3 评论）形成方法论呼应——社区正在自发构建"AI 输出 QA 体系"。
- **状态**：OPEN。
- 🔗 https://github.com/anthropics/skills/pull/1367

### 7. `color-expert`（#1302）
- **功能**：覆盖 ISCC-NBS / Munsell / OKLCH / CAM16 等颜色命名系统与色彩空间选用指南。
- **热点**：由知名色彩工程师 meodai 贡献，定位"通用色彩知识库"。
- **状态**：OPEN。
- 🔗 https://github.com/anthropics/skills/pull/1302

### 8. `skill-quality-analyzer` + `skill-security-analyzer`（#83）
- **功能**：元 Skill，分别从五个维度评估 Skill 质量、从安全维度审计 Skill。
- **热点**：呼应 Issue **#492**（社区 Skill 冒充官方 `anthropic/` 命名空间，34 条评论，热度 No.1）——社区急需**自我审计基础设施**。
- **状态**：OPEN（已 8 个月）。
- 🔗 https://github.com/anthropics/skills/pull/83

---

## 二、社区需求趋势（Issues 信号）

| 需求方向 | 代表 Issue | 评论数 | 趋势判断 |
|---|---|---|---|
| **🔒 安全与信任边界** | #492（社区 Skill 冒充官方 namespace） | **34** | 🔥🔥🔥 最强烈诉求 |
| **🏢 企业级共享** | #228（Org 内 Skill 共享） | 14 | 🔥🔥🔥 落地阻塞点 |
| **🛠 Skill 工具链可靠性** | #556 / #1169 / #1061（run_eval 全失效） | 12 + 3 + 3 | 🔥🔥🔥 阻塞性 Bug |
| **📚 Skill 消失/管理** | #62（用户技能突然消失） | 10 | 🔥🔥 用户体验痛点 |
| **🧠 压缩/记忆管理** | #1329（compact-memory 提议） | 9 | 🔥🔥 长会话关键 |
| **📦 插件去重** | #189（document-skills 与 example-skills 重复） | 6 | 🔥 中度 |
| **🤖 Agent 治理** | #412（agent-governance，已关闭） | 6 | 中度 |
| **🔌 Skills → MCP 化** | #16（把 Skills 暴露为 MCP） | 4 | 早期但有远见 |
| **☁️ 多平台支持** | #29（Bedrock 集成） | 4 | 长期诉求 |
| **🏗 工具链升级** | #1362（web-artifacts-builder 兼容 pnpm 10+） | 3 | 持续维护 |

---

## 三、高潜力待合并 PR（近期可能落地）

按"修阻塞性问题 + 改动局部"打分，下列 PR 优先级最高：

| PR | 标题 | 价值 |
|---|---|---|
| **#1298** | run_eval 全链路修复（含 Windows） | 直接解锁 description 优化闭环 |
| **#1261** | trigger-eval 隔离命令文件 | 防止 eval 污染用户项目 |
| **#538** | pdf 大小写引用修复 | 1 行修复，case-sensitive FS 立即可用 |
| **#541** | docx tracked change w:id 冲突修复 | 防止文档损坏，安全敏感 |
| **#539** | YAML 特殊字符前置校验 | 防止静默解析失败 |
| **#1099 / #1050** | Windows subprocess + 编码 | 跨平台可用性 |
| **#509** | CONTRIBUTING.md | 仓库健康分从 25% → 提升 |
| **#361 / #362** | UTF-8 安全 + YAML 检测 | skill-creator 健壮性 |

🔗 总入口：https://github.com/anthropics/skills/pulls

---

## 四、Skills 生态洞察（一句话总结）

> **社区最集中的诉求是「Skill 的工程化基建」——围绕「评测/校验流水线（run_eval 系列）+ 跨平台兼容（Windows）+ 安全与命名空间治理（#492）」三大支柱，远多于对新功能 Skill 本身的渴望；当前生态正从「能用什么 Skill」转向「Skill 怎么可靠地被发现、评估、分发、信任」。**

---

### 📌 给贡献者的建议
1. **捡漏策略**：去 Issue 区搜"0%"、"Windows"、"trigger"等关键词——这些都是已复现的 P0 修复点，PR 极易被接受。
2. **高 ROI 方向**：`skill-quality-analyzer` / `skill-security-analyzer` (#83) 等待了 8 个月，是回应 #492 安全诉求的最佳杠杆。
3. **避坑**：近期合入的 `CONTRIBUTING.md`（#509）即将发布，新贡献请先对齐其规范。

---

# Claude Code 社区动态日报

**日期：2026-07-12** | **数据源：anthropics/claude-code**

---

## 📌 今日速览

过去 24 小时社区讨论最热的话题集中在 **多 Claude 会话协同工作流**（#24798，55 条评论）与 **Windows 平台 Cowork 故障**（#74649，52 条评论）两条线索上。与此同时，2.1.207 版本刚发布即触发 **stdio MCP 服务 4 小时静默退出**（#76769）与 **VSCode 扩展误触发 WSL 安装提示**（#76804）两个回归性 Bug，反映出近期版本在跨平台兼容性与长会话稳定性方面仍存在隐患。

---

## 🚀 版本发布

> 过去 24 小时内**无新版本发布**。当前社区最新可用版本仍为 **v2.1.207**（7 月 11 日发布），但已收到多个回归性 Issue 反馈。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#24798 - 多 Claude 会话间通信](https://github.com/anthropics/claude-code/issues/24798) ⭐ 18
**类别：enhancement | 评论：55**
社区呼声最高的增强请求：希望在多个并行的 Claude Code 会话之间建立直接的工作流编排机制，按依赖顺序串接任务。这对大型多模块项目协作是关键能力，55 条评论中包含大量用例讨论与方案提议。

### 2. [#74649 - Windows 11 Pro 上 Cowork 无法启动（缺少 HCS 服务）](https://github.com/anthropics/claude-code/issues/74649) ⚠️
**类别：bug, platform:windows | 评论：52**
Windows 11 Pro 用户在启动 Cowork 时遭遇 `vfpext` HCS 服务缺失导致功能完全不可用。高评论数说明影响面较广，是当前 Windows 端最严重的可用性阻塞。

### 3. [#17951 - 终端标题脚本化配置](https://github.com/anthropics/claude-code/issues/17951) ⭐ 32
**类别：enhancement | 评论：24 👍 32**
类比 `statusLine`，希望允许通过脚本自定义终端标题栏（如显示当前任务、CWD、项目名）。高达 32 的 👍 数表明该需求有强共识，是 TUI 体验改进的高 ROI 项。

### 4. [#36800 - MCP 通道插件重复实例化（已 CLOSED）](https://github.com/anthropics/claude-code/issues/36800) ✅
**类别：bug, area:mcp | 评论：16 👍 6**
约 3 分钟后无征兆生成第二个 Telegram channel plugin 进程，触发 409 冲突与工具丢失。该问题已被关闭，说明官方已修复，对长期运行的 MCP 插件用户意义重大。

### 5. [#57998 - Windows 下可配置 %APPDATA%\Claude\ 路径](https://github.com/anthropics/claude-code/issues/57998) ⭐ 12
**类别：enhancement, platform:windows | 评论：10**
希望新增 `CLAUDE_DATA_DIR` 环境变量，便于企业用户将配置/缓存/会话数据迁移到非系统盘（如 OneDrive、企业管控目录），是 Windows 部署场景的常见痛点。

### 6. [#64615 - /rewind（Esc Esc）静默破坏代码](https://github.com/anthropics/claude-code/issues/64615) 🚨
**类别：bug, area:tui | 评论：5 👍 3**
"Restore code and conversation" 默认为破坏性操作且无确认提示。开发者描述"误按 Esc Esc 后辛苦写的代码消失"——这是潜在的数据安全风险，建议官方在默认行为上加入二次确认或提供明确关闭开关。

### 7. [#71726 - Desktop 应用缺少 CLI 风格的 mid-task 消息注入](https://github.com/anthropics/claude-code/issues/71726) ⭐ 7
**类别：enhancement, area:desktop | 评论：5**
在 CLI 中消息可在工具调用之间"steering"注入；Desktop 应用却只能等回合结束，破坏了跨端体验一致性。7 个 👍 反映用户对功能对齐有明确期待。

### 8. [#75897 - macOS 上 API 连接 ConnectionRefused（v2.1.204 回归）](https://github.com/anthropics/claude-code/issues/75897)
**类别：bug, regression, platform:macos | 评论：2**
重装、Safe Mode、重启均无法解决。标记为 regression 表明这是近期版本引入的问题，需要官方关注是否会进一步扩散。

### 9. [#76769 - CC 2.1.207：stdio MCP 服务运行 ~4h 后被 SIGINT 且不再 respawn](https://github.com/anthropics/claude-code/issues/76769) ⚠️
**类别：bug, regression, platform:linux | 评论：1**
长会话 MCP 服务在 4 小时后被静默终止且因 #43177 设计不自动重连，直接导致工具"消失"。这是 2.1.207 的明确回归，对长任务工作流影响显著。

### 10. [#76500 - Agent Teams 邮箱：5-62 分钟延迟、报告丢失、关闭握手失败](https://github.com/anthropics/claude-code/issues/76500)
**类别：bug, area:agents | 评论：1**
开启 `CLAUDE_CODE_EXPERIMENTAL_AGENT_TEAMS=1` 的实验功能存在多个投递缺陷（轮次边界延迟、最终报告被 `idle_notification` 取代、`/clear` 队列泄漏）。对早期尝试多 Agent 编排的用户来说是关键质量信号。

---

## 🔧 重要 PR 进展

> 注：过去 24 小时内仅有 5 个 PR 更新，全部列出。

### 1. [#39043 - 移除 Frontend Design Skill 中"retro-futuristic"推荐](https://github.com/anthropics/claude-code/pull/39043)
作者 t3dotgg 拟移除默认设计风格推荐中的 "retro-futuristic"，认为该偏好过于局限。社区可关注该 PR 引发的"默认设计风格是否应被定制"讨论。

### 2. [#76673 - 修复再现性审计中发现的设计缺陷（已 CLOSED）](https://github.com/anthropics/claude-code/pull/76673)
针对 Issue triage、`invalid` 标签判定、Ralph 会话状态隔离、Hookify 不可达分支等的设计性修正。被快速关闭，可能为回归或与上游策略冲突。

### 3. [#76640 - Bun 运行时加载 macOS 系统证书 + NO_PROXY 黑名单处理（closes #24470）](https://github.com/anthropics/claude-code/pull/76640)
修复 v2.1.17+ 引入 Bun 运行时后，macOS Cowork 报 "Self-signed certificate detected" 的问题。对企业代理/PAC 环境用户尤为关键。

### 4. [#76581 - 加固插件脚本的 YAML / 路径 / 符号链接处理](https://github.com/anthropics/claude-code/pull/76581)
修复 `ralph-wiggum` setup 中 `completion_promise` 的 YAML 注入、路径穿越以及 **符号链接导致的凭据覆盖**。对官方插件供应链安全有显著价值。

### 5. [#76576 - 对齐 plugin-dev 文档与 v2.1.207 shell-injection 修复](https://github.com/anthropics/claude-code/pull/76576)
v2.1.207 拒绝 `${user_config.*}` 在 shell-form plugin hook/MCP `headersHelper` 中的展开，并停止读取项目级 `.claude/settings.json` 的 `pluginConfigs`。此 PR 同步官方 hosted 插件文档至新规范，避免开发者按旧文档踩坑。

---

## 📈 功能需求趋势

从今日更新的 30 条 Issue 中可归纳出以下高频方向：

| 方向 | 代表 Issue | 趋势特征 |
|---|---|---|
| **多 Agent / 多会话协同** | #24798, #76500, #76777 | 社区正在自发探索"Agent Teams"工作流，需求旺盛但实验功能稳定性不足 |
| **Windows 平台体验** | #74649, #57998, #76804, #76806 | 占比最高，包括 Cowork 启动、配置目录迁移、IDE 扩展、preview 工具等多个面 |
| **TUI / 终端体验** | #17951, #64615, #66343, #76801, #76777 | 终端标题、可编辑折叠粘贴、隐藏干扰元素、运行中 fork |
| **模型选择与降级** | #76793, #76800, #76540 | 围绕 Fable 5 / Opus 4.8 的静默回退、误触发 safeguards、输出内容审查 |
| **成本与用量预警** | #74709 | 请求按日/周/月阈值（80/90/100%）给出分级告警 |
| **MCP 与插件生态** | #36800, #76769, #76581, #76576 | 长期运行可靠性 + 供应链安全是当前主线 |
| **安全与权限** | #76795, #76808 | Bash 权限匹配器在引号内的解析漏洞、Hook 在 CWD 失效时 fail-open |
| **CLI/Desktop 体验对齐** | #71726, #62011 | 桌面端缺少 CLI 的 steering、远程预览面板等关键能力 |

---

## 💡 开发者关注点

通过 Issue 描述与评论语义可提炼出几条最集中的痛点：

1. **"破坏性默认行为"担忧加剧**：`/rewind`（#64615）、模型静默降级（#76793）、Agent 被中断后无法恢复（#76807）等都指向同一个诉求——**关键操作必须显式确认或至少可观测**。

2. **Windows 仍是薄弱面**：从 IDE 扩展误弹 WSL 安装（#76804）、preview_start `cmd.exe ENOENT`（#68341）、Cowork HCS 缺失（#74649）来看，Windows 上的安装检测、子进程调用、Hyper-V/WSL/VirtualBox 共存是高频踩坑点。

3. **长会话与后台进程的"时间炸弹"**：MCP 4h SIGINT（#76769）、Agent Teams 邮箱延迟（#76500）、多 Claude 协同（#24798）共同暴露出 Claude Code 在 **小时级、跨进程、跨会话** 场景下的鲁棒性短板。

4. **可观测性诉求突出**：阈值通知（#74709）、远程控制 footer 可隐藏（#66343）、粘贴内容可展开编辑（#76801）等请求本质都希望"让用户看到系统在做什么"。

5. **供应链/插件安全被首次集中提出**：#76581 提到的符号链接凭据覆盖、#76576 的 shell 注入修复，标志着社区关注点从"功能"开始向"安全加固"扩展。

---

*日报基于 GitHub 公开数据生成。如需关注特定 Issue/PR，请点击对应链接跳转参与讨论。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-12**

---

## 🔍 今日速览

今日 Codex 仓库无新版本发布，社区讨论热度集中在 **使用配额（rate limits）异常**、**Windows 桌面端稳定性**以及 **GPT-5.6 系列模型的子代理配置**三大方向。值得一提的是，长期高赞需求 —— **Codex Linux Desktop App**（👍 733）持续受到社区追捧，而困扰多时的 **Codex Desktop + Windows 沙盒崩溃**问题则出现多个新报告，疑似回归。

---

## 📦 版本发布

**无新版本发布**（过去 24 小时）

---

## 🔥 社区热点 Issues（按关注度筛选 10 条）

| # | Issue | 关键看点 |
|---|---|---|
| 1 | [#20161](https://github.com/openai/codex/issues/20161) **【已关闭】** 电话号码验证异常 | 评论 205 / 👍 131。用户在新设备 SSO 登录后被强制要求绑定手机号，影响认证流程，状态已关闭等待回归修复 |
| 2 | [#11023](https://github.com/openai/codex/issues/11023) **Linux 桌面 App 呼声** | 评论 164 / 👍 **733**（仓库最高赞之一）。鉴于 macOS 版本问题频繁，用户希望官方推出原生 Linux 桌面端以提升续航与稳定性 |
| 3 | [#28224](https://github.com/openai/codex/issues/28224) **SQLite 反馈日志吞 SSD** | 评论 145 / 👍 432。理论写入量高达 ~640 TB/年，作者反馈已有 3 个 PR（v0.142.0 起）合并解决约 85% 日志量 |
| 4 | [#31814](https://github.com/openai/codex/issues/31814) **GPT-5.6 Sol 子代理模型被强制绑定 Sol** | 评论 49 / 👍 102。MultiAgent V2 默认行为导致用户无法为子代理指定其他模型，与产品预期不符 |
| 5 | [#28190](https://github.com/openai/codex/issues/28190) **macOS 拦截 `rg`（ripgrep）调用** | 评论 46 / 👍 71。0.139.0 版本下 `rg` 命令被系统安全策略阻断，影响检索增强流程 |
| 6 | [#31606](https://github.com/openai/codex/issues/31606) **重置配额失败，次数白白消耗** | 评论 34 / 👍 41。用户点击 reset 后配额未生效，但可用次数从 2 → 1，疑似服务端响应丢失 |
| 7 | [#28969](https://github.com/openai/codex/issues/28969) **关闭 Plan 阶段 60 秒自动跳过** | 评论 27 / 👍 105。在长思考场景下，用户希望保留对澄清问题的可控权，要求提供显式开关 |
| 8 | [#32032](https://github.com/openai/codex/issues/32032) **Computer Use 在 macOS 15.7.7 崩溃** | 评论 20 / 👍 11。dyld 无法解析 Swift Concurrency 符号，相关历史 issue #22822 仍未合入修复 |
| 9 | [#31322](https://github.com/openai/codex/issues/31322) **使用限额"日间修正，傍晚回退"** | 评论 10 / 👍 0。疑似系统性回归（约 5 倍速消耗），需后端团队介入 |
| 10 | [#23200](https://github.com/openai/codex/issues/23200) **iOS 移动端支持无头 Linux 服务器** | 评论 6 / 👍 31。开发者希望脱离对桌面客户端的强依赖，直接通过 SSH 操控 always-on Linux 工作站 |

---

## 🛠 重要 PR 进展（挑选 10 条）

| # | PR | 内容 |
|---|---|---|
| 1 | [#32485](https://github.com/openai/codex/pull/32485) | Skill 切换视图改为自适应宽度，修复 21 字符硬截断，便于区分同名技能 — [🔗链接](https://github.com/openai/codex/pull/32485) |
| 2 | [#31526](https://github.com/openai/codex/pull/31526) | 托管 app-server 客户端的工具调用收敛为"仅服务器注册"白名单，提升安全性与一致性 — [🔗链接](https://github.com/openai/codex/pull/31526) |
| 3 | [#32461](https://github.com/openai/codex/pull/32461) | TUI diff 渲染时将 Tab 字符扩展为四个空格，避免折行宽度错乱 — [🔗链接](https://github.com/openai/codex/pull/32461) |
| 4 | [#32460](https://github.com/openai/codex/pull/32460) | Guardian 多次审核拒绝中断回合后，补充 `thread-idle` 生命周期事件，便于扩展方感知 — [🔗链接](https://github.com/openai/codex/pull/32460) |
| 5 | [#32441](https://github.com/openai/codex/pull/32441) | 内存整合子代理继承父回合沙盒/权限配置，防止权限绕过 — [🔗链接](https://github.com/openai/codex/pull/32441) |
| 6 | [#31806](https://github.com/openai/codex/pull/31806) | 将 Codex 安装包 shadow copy 至 Cloudflare R2，提升下载稳定性与冗余 — [🔗链接](https://github.com/openai/codex/pull/31806) |
| 7 | [#30036](https://github.com/openai/codex/pull/30036) | Windows 可执行文件解析改为显式 `application_path`，消除 PATH 注入歧义 — [🔗链接](https://github.com/openai/codex/pull/30036) |
| 8 | [#29960](https://github.com/openai/codex/pull/29960) | 缓存稳定执行器的 skill 元数据并按模型 step 投影，减少重复 IO — [🔗链接](https://github.com/openai/codex/pull/29960) |
| 9 | [#32332](https://github.com/openai/codex/pull/32332) | 分页 rollout 记录新增零基序数字段，使客户端可独立处理历史片段 — [🔗链接](https://github.com/openai/codex/pull/32332) |
| 10 | [#32312](https://github.com/openai/codex/pull/32312) | 引入带类型前缀（UUIDv7）的 `ResponseItemId`，统一对外 ID 格式 — [🔗链接](https://github.com/openai/codex/pull/32312) |

> **补充观察**：bot 账号 `copyberry[bot]` 在今天关闭的 17 个 PR 中贡献了大量文档/小修类变更（diff 渲染、链接、规范命名），体现出 Codex 在 polish 阶段的密集维护节奏；社区贡献者 `sayan-oai`、`jif-oai` 主导了 deferred executor / 沙盒 / 子代理环境继承相关的核心重构。

---

## 📈 功能需求趋势

通过对 50 条活跃 Issue 的标签归纳，社区关注点呈现以下集中趋势：

1. **桌面端多平台覆盖**
   - Linux Desktop（#11023，👍 733）维持 Top 1 呼声
   - iOS 移动端对无头服务器的远程操控（#23200，👍 31）

2. **GPT-5.6 系列（Sol / Luna）的精细化配置**
   - 子代理模型选择（#31814、#32291）
   - 默认上下文窗口跨越 272K 高耗能阈值警告（#32486）
   - 旧 availability 公告的回退策略（#32316 已修复）

3. **Windows 平台稳定性**
   - 沙盒初始化失败（#22428、#28248、#32487）
   - 应用内 Webview 崩溃（#30178）
   - "ChatGPT 新应用"性能异常（#32268）

4. **使用配额 / 订阅体验**
   - 多次出现 rate-limit 数据抖动、5 小时配额消失（#31322、#31606、#32410、#32484）

5. **会话生命周期与元数据安全**
   - Desktop 端长时间会话状态失控（#25779）
   - 子会话可见性与可恢复性（#30350）
   - 父沙盒强制在子代理中继承（#32441 已修复）

6. **本地化与写作辅助**
   - Windows 拼写检查无候选词（#30749）

---

## 💬 开发者关注点

综合评论与 👍 反馈，社区开发者当前的高频痛点可归纳为四类：

- **"我控制不了 Codex 在用什么模型"** —— 大量用户（特别是 GPT-5.6 Sol 用户）希望显式控制子代理、memory consolidation 等内部 Agent 的模型选择，而非被 metadata 强绑定。
- **"桌面端在 Windows 上不够可靠"** —— 多个 issue 描述了 Smart App Control、沙盒 ACL、Webview 等引发的崩溃与失活，显著影响 Windows 11 用户生产环境。
- **"为什么我的配额悄悄少了？"** —— Rate limit 计算不稳定（早晨修正 / 傍晚回退、reset 失败、5h 窗口跳变）使得计费/订阅预期变得不可信。
- **"为什么 Linux 还不被官方支持？"** —— 尽管只是"enhancement"，#11023 的 👍 持续走高于多数核心 bug，揭示社区对"开放桌面平台"的强烈期待。

> 建议下一步关注：新版本是否会修复 #22428 / #28248 / #30178 这条 Windows 沙盒 – Webview 链路，并就 GPT-5.6 系列模型默认上下文（#32486）给出官方调参指引。

---

*数据来源：[openai/codex](https://github.com/openai/codex) GitHub 仓库 * | *报告生成时间 2026-07-12*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-12**

---

## 📌 今日速览

今日社区活跃度适中，过去 24 小时内没有新版本发布，但 Issues 与 PR 持续滚动更新。讨论焦点高度集中于 **Subagent 行为可靠性**、**Auto Memory 子系统的若干缺陷** 以及 **Shell 命令执行的卡死问题**；PR 侧则在推进 VS Code 插件体验、a2a-server 安全加固、以及对模型推理轮次与合并逻辑的资源保护。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

> 按评论数与 👍 综合排序

1. **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — Subagent 在达到 MAX_TURNS 后错误地报告为 GOAL 成功（10 评论 / 2 👍）**
   `codebase_investigator` 子代理即使已撞到最大轮数限制，仍以 `status: "success"` 和 `Termination Reason: "GOAL"` 返回，使得真实中断被掩盖。这是 agent 协议层的可靠性问题，涉及 #21409 关于"generalist agent 卡死"的同类信号。

2. **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 永久挂起（7 评论 / 8 👍）**
   本日热度最高的"高 👍"问题。一旦 CLI 委派给 generalist agent，即便是创建文件夹这样的简单操作也会无限等待，用户被迫手工取消。这是影响最深、用户投票最多的可用性问题之一。

3. **[#24353](https://github.com/google-gemini/gemini-cli/issues/24353) — 健壮的组件级评测（7 评论）**
   跟进 #15300 的"行为评测"理念：已生成 76 项 behavioral eval，覆盖 6 款 Gemini 模型。社区正在讨论组件维度（model / tools / agent）下如何更稳定地评估整个产品栈。

4. **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取/检索/映射（7 评论 / 1 👍）**
   Epic 级提案：通过 `tilth` 或 `glyph` 等 AST 工具精确读取方法边界、降低 token 噪声、加速 navigate。可与 #22746（用 AST 工具映射 codebase）与 `codebase_investigator` 协同，潜在影响长期性能与成本。

5. **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — Gemini 几乎不主动使用 skills 和 sub-agents（6 评论）**
   一线用户反馈：除非显式提示，否则模型不会自发启用 `gradle`/`git` skills 或子代理。讨论涉及 prompt 策略与注册表可见性。

6. **[#26522](https://github.com/google-gemini/gemini-cli/issues/26522) — Auto Memory 对低信号会话无限重试（5 评论）**
   Auto Memory 只有在被抽取代理成功 `read_file` 后才标记会话为已处理；若代理认为某会话信号过低而跳过，该会话会反复出现在索引中。属于新晋活跃的 Memory 系联串问题。

7. **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 命令完成后卡在 "Waiting input"（4 评论 / 3 👍）**
   即便是明显无交互的简单命令，CLI 也常误判为 "Awaiting user input"，反复复现。此 bug 直接破坏 CLI 的可用性，是高优先级 p1。

8. **[#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — browser subagent 在 Wayland 下失败（4 评论 / 1 👍）**
   与 Wayland 桌面环境的兼容性崩溃，叠加 #22267（忽略 settings.json 的 maxTurns）、#22232（session takeover 与 lock recovery），共同表明浏览器代理子系统的鲁棒性亟需提升。

9. **[#21000](https://github.com/google-gemini/gemini-cli/issues/21000) — 用原生文件工具维护 task tracker（4 评论）**
   一个偏实验向的功能实验，希望摆脱当前临时脚本式的任务追踪方式，让 agent 拥有更结构化的任务管理能力。

10. **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — `~/.gemini/agents/` 中的 symlink 不被识别为 agent（4 评论）**
    影响将 agents 集中管理（如 dotfiles 仓库 symlink 化）的开发者，属于长期未解决的体验问题。

> 顺带关注：**#23571**（模型随意生成 tmp 脚本污染工作区）、**#22672**（模型使用 `git reset --force` 等破坏性命令）、**#26516/#26525/#26523**（Auto Memory 安全与脏补丁隔离三连），均呈现集中化趋势。

---

## 🛠️ 重要 PR 进展

1. **[#28359](https://github.com/google-gemini/gemini-cli/pull/28359) — fix(core): 在 `stripShellWrapper` 中去除登录/交互式 shell 包装器**
   此前 `bash -lc "..."`、`bash --login -c "..."` 等未被识别，policy engine 因此不会重新审核被包装的命令载荷，存在潜在绕过风险。

2. **[#28349](https://github.com/google-gemini/gemini-cli/pull/28349) — fix(cli): 守护 `customDeepMerge` 防止循环引用**
   修复 #28270。用户在 settings 中引入自引用对象（例如 `obj.self = obj`）会导致 `mergeRecursively` 无限递归并抛 `RangeError`，对设置管理链路是一项硬性稳定性修复。

3. **[#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — refactor(a2a-server): 在加载环境变量前强制路径信任校验 + 任务环境隔离**
   通过 `AsyncLocalStorage` 隔离每次任务的运行环境，避免在不可信路径下泄露或污染环境变量，是 a2a-server 的重要安全升级。

4. **[#28183](https://github.com/google-gemini/gemini-cli/pull/28183) — fix(vscode-ide-companion): 关闭 diff tab 时保留终端焦点**
   编辑被批准后，VS Code 综合终端的焦点被 diff 预览劫持。该 PR 修复了每次编辑后必须重新点击终端的体验痛点。

5. **[#28164](https://github.com/google-gemini/gemini-cli/pull/28164) — fix(core): 限制单次用户请求的递归推理轮次（已关闭）**
   在核心 agent 中引入 15 轮硬上限（可通过 `maxSessionTurns` 调整），用以保护本地 CPU 资源与模型配额，避免无限循环。

6. **[#28247](https://github.com/google-gemini/gemini-cli/pull/28247) — fix(core): 让 `ls` 的 ignore glob 按相对路径匹配**
   修复 #28207：以前只对 basename 匹配，导致诸如 `**/*.log` 的 glob 失效；改用 `picomatch` 后语义与直觉一致。

7. **[#28248](https://github.com/google-gemini/gemini-cli/pull/28248) — docs: 解释 MCP 的环境变量展开规则**
   文档新增 `mcpServers` 路径/环境展开小节，明确支持 `$VAR` / `${VAR}` / `${VAR:-fallback}` / Windows `%VAR%`，并指出 `{{VAR}}`、`${env:VAR}`、`~` 不被支持；降低用户接入 MCP server 的踩坑成本。

8. **[#28023](https://github.com/google-gemini/gemini-cli/pull/28023) — chore(deps): bump `@modelcontextprotocol/sdk` 1.23.0 → 1.26.0（已关闭）**
   Dependabot 维护的 VS Code 伴生扩展 MCP SDK 升级，常规依赖更新。

---

## 📈 功能需求趋势

从近 24 小时的高频 Issues 中可以提炼出以下社区关注方向：

- **Subagent / Agent 协议可靠性**：错误状态（GOAL vs MAX_TURNS）、挂起（generalist hang）、Wayland 浏览器崩溃，反映出当前 agent 系统在边界场景下稳定性不足。
- **Auto Memory 安全与质量**：脏补丁隔离、确定性 redaction、日志敏感信息收敛、低信号会话无限重试，呈现"四件套"集中维护态势。
- **AST-aware 工具链**：`#22745` + `#22746` 共同指向更精确的代码库阅读与映射能力，长期可降低 token 成本并提升 `codebase_investigator` 的产出质量。
- **IDE 集成细节打磨**：VS Code 终端焦点、settings.json 优先级，是开发者体验层的隐性瓶颈。
- **资源与安全护栏**：递归轮数硬上限、shell wrapper 规范化、循环引用合并、a2a-server 环境隔离，社区在主动补齐"防御性"护栏。
- **行为/组件级评测体系**：76 项 behavioral eval 已在 6 款模型上运转，社区正在把评测维度往组件级推进。

---

## 💬 开发者关注点

1. **"卡死/挂起"类的体验型 Bug 仍然是头号痛点**：shell 命令 "Waiting input"、generalist agent 不返回、browser agent 在 Wayland 崩溃——开发者期望 CLI 是一个"立即可用、对环境宽容"的工具。
2. **配置可见性与一致性**：settings.json 中 `maxTurns` 被 Browser Agent 忽略、symlink 不被识别为 agent——配置生效路径的"哪一层最终胜出"对用户而言不透明。
3. **安全敏感操作**：模型使用 `git reset --force`、`bash --login -c` 等"绕过型"命令，促使社区呼吁更强的破坏性命令识别与策略引擎重审。
4. **Auto Memory 的双重期待**：既希望它能跨会话沉淀经验，又担心日志泄露与脏写入；版本团队需同时给出可观测性与隔离能力。
5. **MCP 集成的易用性**：环境变量展开规则被文档化后立刻获得关注，说明 MCP server 的接入体验仍处于"需要降低门槛"的阶段。

> 备注：以上 Issue/PR 排序综合考量了评论数、👍 数、优先级标签（p1/p2）以及与近期可观察趋势的相关性。"维护者专属"标签（🔒 maintainer only）不代表普通开发者无法关注，仅意味着主线协调由维护者集中管理。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**📅 2026-07-12 · 数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库活跃度较高，**18 条 Issue 更新 + 1 条 PR 更新**，但无新版本发布。最值得关注的趋势有两点：其一，**MCP 协议的 OAuth 鉴权流程出现集中性故障**（涉及 Atlassian、Work IQ、Skyline 等多家第三方服务器），社区报告大量"连接成功但工具不可用"的诡异状态；其二，**会话持久化层暴露出多个数据完整性 Bug**（JSONL 损坏、二进制残留、删除不同步），直接影响用户恢复会话的能力。此外，Voice 模式的多项增强请求（自动发送、静音冲突）持续涌现，反映该功能正式进入可用性打磨阶段。

---

## 🚀 版本发布

**无新版本发布。** 过去 24 小时无 Release 活动，相关修复可能尚在 PR 评审中。

---

## 🔥 社区热点 Issues

> ⚠️ 数据已按"技术影响面 + 社区活跃度"综合排序，下列 10 条为本周最值得开发者关注的 Issue。

### 1. [\#4098 — 会话恢复后 events.jsonl 出现截断/拼接事件](https://github.com/github/copilot-cli/issues/4098)
- **标签**：triage｜🆕 当日新开
- **重要性**：🔴 **高** —— 直接阻断用户对已保存会话的二次恢复能力
- **摘要**：恢复会话后 `events.jsonl` 中出现三行物理行，每行包含一个不完整的事件前缀 + 完整 JSON，导致再次恢复失败
- **社区反应**：2 条评论，创建不足 24 小时即引发关注
- **关键点**：JSONL 是会话存档的事实标准格式，此 Bug 会造成数据级损坏

### 2. [\#4097 — apply_patch 删除二进制后永久超 CAPI 5 MB 限制](https://github.com/github/copilot-cli/issues/4097)
- **标签**：triage｜🆕 当日新开
- **重要性**：🔴 **高** —— 影响所有处理二进制资源的会话
- **摘要**：`apply_patch` 删除大文件时把整个二进制以 `detailedContent` 文本形式存入历史，无法通过 `/compact` 清除
- **社区反应**：0 评论但问题极其具体，可独立复现
- **关键点**：与 CAPI Responses API 的 5 MB 输入上限形成正交瓶颈

### 3. [\#4024 — Voice 模式所有 ASR 模型静默失败（RNNT 路由 Bug）](https://github.com/github/copilot-cli/issues/4024)
- **标签**：area:models
- **重要性**：🔴 **高** —— 让 `/voice` 功能完全不可用
- **摘要**：`/voice` 能录音、能检测音量，但三种 nemotron ASR 模型均返回空文本；根因疑为 MultiModalProcessor 对 RNNT 的路由缺失
- **社区反应**：💬 7 条评论（本期最多）、👍 0
- **关键点**：涉及 Foundry Local Core 的模型分发与转录管道，是 Voice 模式的基础设施 Bug

### 4. [\#4096 — 第三方 MCP 服务器"已连接"但工具未下发到 CLI 会话](https://github.com/github/copilot-cli/issues/4096)
- **标签**：triage｜🆕 当日新开
- **重要性**：🟠 **中高** —— 与 MCP OAuth 集中故障形成关联
- **摘要**：Copilot App UI 中 Atlassian Remote MCP 显示绿色 Connected，但 CLI 会话中工具永不出现，OAuth token 未桥接到子进程
- **社区反应**：0 评论但立即被 triage
- **关键点**：暴露了 App 与 CLI 之间的会话级 credential 传递漏洞

### 5. [\#4095 — Windows 上插件更新失败 "Access is denied (os error 5)"](https://github.com/github/copilot-cli/issues/4095)
- **标签**：triage｜🆕 当日新开
- **重要性**：🟠 **中高** —— 影响所有 Windows + VS Code 用户
- **摘要**：`copilot plugin update` 在 VS Code 运行期间失败，因为 Copilot 扩展持有了 installed-plugins 的 watcher 句柄
- **社区反应**：0 评论
- **关键点**：典型的 Windows 文件锁问题，需要协调 VS Code 扩展与 CLI 的生命周期

### 6. [\#4093 — web_search 工具返回捏造答案且无任何拒绝机制](https://github.com/github/copilot-cli/issues/4093)
- **标签**：area:tools
- **重要性**：🟠 **中高** —— 信任与安全级问题
- **摘要**：检索无结果时，AI 搜索仍输出"自信、详细、完全虚构"的答案并附引用，伪装成事实
- **社区反应**：0 评论
- **关键点**：内置工具产生幻觉对开发者生产力是反效果，影响 CLI 作为可信助手的定位

### 7. [\#4089 — Atlassian MCP: OAuth 成功但零工具暴露](https://github.com/github/copilot-cli/issues/4089)
- **标签**：area:authentication、area:mcp
- **重要性**：🟡 **中** —— MCP 鉴权系列 Bug 之一
- **摘要**：同主机的 LeanIX、Lucid HTTP MCP 正常，但 Atlassian 完成 OAuth 后无工具可用
- **社区反应**：2 条评论
- **关键点**：与 #4086、#4096 共同指向 Atlassian MCP 的特殊处理路径

### 8. [\#4085 — MCP OAuth 流程破裂：发现期标 needs-auth 后连接 ~90s 断开](https://github.com/github/copilot-cli/issues/4085)
- **标签**：area:authentication、area:mcp
- **重要性**：🟡 **中** —— 影响 Azure AD / Microsoft Work IQ / agent365
- **摘要**：因未注册 auth handler，OAuth 流程在发现阶段即被取消，服务器永久 `needs-auth`；即使重试也仅维持约 90 秒
- **社区反应**：0 评论
- **关键点**：详见 #4084，配合阅读可还原 MCP OAuth 子系统的全貌

### 9. [\#4084 — MCP OAuth 客户端发现：短暂连接后断开，工具不可用](https://github.com/github/copilot-cli/issues/4084)
- **标签**：area:authentication、area:mcp
- **重要性**：🟡 **中**
- **摘要**：Work IQ（Calendar/Mail/Teams/OneDrive/Word）+ 自定义 SkylineApi 在设置页显示绿色，工具一律不可用
- **社区反应**：0 评论
- **关键点**：与 #4085 互补，建议维护者合并处理

### 10. [\#3983 — 澄清 Global instructions.md / AGENTS.md / CLAUDE.md 的文档](https://github.com/github/copilot-cli/issues/3983)
- **标签**：area:context-memory、area:configuration
- **重要性**：🟡 **中** —— 文档类 PR 但影响所有上下文行为
- **摘要**：用户对全局指令文件的默认加载行为存在困惑（多文件优先级、是否合并、是否沙箱化等），需要官方明确说明
- **社区反应**：👍 2（最多）、💬 1
- **关键点**：随着 Anthropic 的 CLAUDE.md 和社区的 AGENTS.md 成为事实标准，CLI 必须给出清晰的级联规则

---

## 🛠️ 重要 PR 进展

> 📉 本期 PR 更新较少（仅 1 条），但反映了 CLI 安装体验的细节打磨。

### [#2565 — install: 防止 reinstall 时 PATH 重复追加](https://github.com/github/copilot-cli/pull/2565)
- **作者**：marcelsafin｜**状态**：OPEN｜**创建**：2026-04-07
- **说明**：当前安装脚本通过 `command -v copilot` 判定是否需要 PATH 提示，但该命令需重启 Shell 才生效，导致用户在未重启的情况下重复安装会把 PATH 配置追加第二遍
- **修复方向**：建议直接检查 shell profile 中的标记行（例如特定注释或 GUID），而非依赖命令可探测性
- **重要性**：🟢 低-中｜属于安装器鲁棒性改进，社区影响有限但属于长期累积的"小坑"

---

## 📈 功能需求趋势

对全部 18 条活跃 Issue 进行聚类分析，社区目前最集中的诉求如下：

| 排名 | 方向 | 代表 Issue | 热度信号 |
|------|------|------------|----------|
| 🥇 | **MCP / OAuth 集成稳定性** | #4084、#4085、#4086、#4089、#4096 | 5 条相关，占本期 28% |
| 🥈 | **Voice 模式可用性** | #4024、#4083、#4090、#4092 | 4 条相关，覆盖了 ASR、网络、交互三类问题 |
| 🥉 | **会话持久化与跨端同步** | #4082、#4094、#4097、#4098 | 4 条相关，集中在数据完整性 |
| 4 | **BYOK / 自定义 Provider 模型发现** | #3795 | BYOK 用户长期痛点 |
| 5 | **Skills 动态上下文（`!command` 占位符）** | #4088 | 提权 Agent Skills 的可组合性 |
| 6 | **全局指令文档化（AGENTS.md/CLAUDE.md）** | #3983 | 👍2，呼声稳定 |

---

## 🧩 开发者关注点

综合 Issue 摘要与评论，下列痛点和需求反复出现：

1. **🔐 MCP OAuth 全链路失控**：从发现、授权、token 桥接到连接维持，5 条相关 Issue 几乎覆盖整条调用链，是本期最紧急的方向。开发者期望一个"能跑通 Outlook、Atlassian、Work IQ 的标准参考实现"。

2. **💾 会话数据完整性比预期更脆弱**：JSONL 损坏、二进制残留、删除不同步、跨 App 不同步 —— 用户把 Copilot CLI 用作"长任务记忆"的需求已经出现，但底层存储尚未就绪。建议官方考虑为 `events.jsonl` 增加校验和或行级序列号。

3. **🎙️ Voice 模式进入"上线后体验打磨期"**：基础设施（ASR 路由、Foundry 下载）与交互细节（自动提交、避免与播放冲突）同时推进，说明 `/voice` 已被视为核心入口而非实验性功能。

4. **🪟 Windows 文件锁愈发成为阻力**：插件更新失败（#4095）是继此前若干 Windows-specific 问题后的最新一例，开发者社区对"VS Code 扩展 × CLI × 文件锁"三方协调的诉求持续累积。

5. **🧠 信任风险：内置工具也会幻觉**：#4093 揭示 `web_search` 在检索为空时不会"say no"，这对把 Copilot 作为研究/调研工具的开发者是严重的反信号。社区期待类似"未找到时显式拒绝"的兜底策略。

6. **📚 上下文配置文件语义模糊**：`AGENTS.md` / `CLAUDE.md` / `instructions.md` 三种文件名并存，开发者希望官方明确级联、覆盖、作用域规则（#3983 👍2 是本期得票最高的 Issue）。

---

*📊 报告生成时间：2026-07-12 ｜ 数据范围：过去 24 小时更新*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-12**

---

## 📌 今日速览

今日社区动态相对平稳，无新版本发布，活跃度集中于 **Bug 修复与功能一致性补齐**。核心开发者 `nankingjing` 一次性提交了 3 个 PR，覆盖后台任务计时、字符串截断精度以及 ACP 服务器 MCP 配置加载等关键路径，体现出对 **ACP 模式与交互模式功能对等性** 的重点关注。此外，两个 4 月份长期搁置的 PR（#1771、#1769）也于昨日重新获得更新，显示社区正在推进存量 issue 的清理。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布，本节省略。

---

## 🔥 社区热点 Issues

> ⚠️ 说明：过去 24 小时仅 1 条 Issue 更新，以下为完整呈现。

### 1. [#2491](https://github.com/MoonshotAI/kimi-cli/issues/2491) — Bug: kimi-datasource CHANGELOG.md 被错误识别为 skill
- **状态**：OPEN ｜ 👍 0 ｜ 💬 0
- **作者**：zhangleilaoge
- **重要性**：这是一个典型的**插件配置解析边界问题**。`/skill` 自动补全中混入了 `CHANGELOG` 入口，会污染用户提示体验，并反映出 `skill` 资源发现机制缺少对文件类型/命名的白名单过滤。
- **社区反应**：刚创建，关注度尚低，但属于**易复现、低修复成本**的体验类问题，预计会被快速处理。

---

## 🛠 重要 PR 进展

> ⚠️ 说明：过去 24 小时共 5 条 PR 更新，以下按重要性排序。

### 1. [#2490](https://github.com/MoonshotAI/kimi-cli/pull/2490) — fix(acp): 在 `kimi acp` server 中加载全局 MCP 配置
- **作者**：nankingjing ｜ **修复 #2464**
- **要点**：解决了 ACP 服务器（多会话模式）从未加载用户全局 MCP 配置的问题，使得 Zed、JetBrains AI Assistant 等 ACP 客户端能看到与交互式 `kimi` 一致的工具集。
- **价值**：直接消除 **交互模式 vs ACP 模式的功能差异**（parity gap），对生态扩展意义重大。

### 2. [#1769](https://github.com/MoonshotAI/kimi-cli/pull/1769) — fix: MCP server 连接失败时的优雅降级
- **作者**：he-yufeng
- **要点**：当 MCP server 启动失败（如 TUI 与 Web UI 端口冲突）时，原有代码会抛出未捕获的 `MCPRuntimeError`，导致 worker 崩溃且前端卡死在 "thinking" 状态。
- **价值**：涉及**系统鲁棒性**，修复后用户将获得更明确的错误反馈而非"假死"。

### 3. [#1771](https://github.com/MoonshotAI/kimi-cli/pull/1771) — fix: 在 Chat Completions provider 中始终将 tool message content 转为字符串
- **作者**：he-yufeng ｜ **修复 #1762**
- **要点**：OpenAI Chat Completions API 要求 `role: "tool"` 的 `content` 必须是字符串。当工具结果包含多个 `ContentPart`（如 system-reminder + 实际输出）时，原实现保留了数组结构，导致 400 错误。
- **价值**：修复了与 OpenAI 兼容 provider 的兼容性问题，扩展了 Kimi CLI 的多 provider 生态。

### 4. [#2493](https://github.com/MoonshotAI/kimi-cli/pull/2493) — Fix: 为后台 agent 任务记录 `started_at` 以正确报告运行时长
- **作者**：nankingjing
- **要点**：后台 agent 任务从未设置 `runtime.started_at`，导致运行时长被静默丢失。后台 bash 任务则正确设置。
- **价值**：补齐**可观测性**短板，对调试与性能分析至关重要。

### 5. [#2492](https://github.com/MoonshotAI/kimi-cli/pull/2492) — fix: `shorten_middle` 输出超出目标宽度（受 ellipsis 长度影响）
- **作者**：nankingjing
- **要点**：`src/kimi_cli/utils/string.py` 中的 `shorten_middle` 未将 3 字符 `"..."` 计算在内，导致输出始终比目标 `width` 多出最多 3 个字符。
- **价值**：底层字符串处理工具的精度修正，影响所有依赖该函数的下游 UI 渲染。

---

## 📈 功能需求趋势

从今日活跃数据中提炼的社区关注方向：

| 方向 | 体现 |
|---|---|
| **ACP 模式功能对等** | #2490（全局 MCP 加载）反映出 ACP server 与交互模式的功能 gap 是当前重点 |
| **MCP 生态稳定性** | #1769（连接失败降级）显示 MCP 集成正逐步成熟，但鲁棒性仍待加强 |
| **多 Provider 兼容性** | #1771（OpenAI Chat Completions）表明 Kimi CLI 正在主动拓展非 Moonshot provider 支持 |
| **可观测性增强** | #2493（started_at 记录）说明后台任务的运维可视化正在被系统化补齐 |
| **用户体验细节** | #2491（skill 提示污染）、#2492（字符串截断精度）显示社区对终端体验细节敏感度提升 |

---

## 💡 开发者关注点

1. **ACP 客户端集成仍是热点**：#2490 修复的全局 MCP 加载问题直接关系到 Zed、JetBrains AI Assistant 等编辑器用户的工具可用性，是 Kimi CLI 进入 IDE 生态的关键卡点。

2. **错误处理与降级体验**：#1769 揭示的"假死"问题说明，开发者对**故障时的可恢复性**和**明确的错误反馈**有强烈需求，而非静默失败或界面卡顿。

3. **多 Provider 适配是扩展必经之路**：#1771 反映开发者希望 Kimi CLI 不仅限于 Moonshot 自家模型，而是能作为**通用 LLM 代理框架**与多种 API 兼容。

4. **长期 issue/PR 清理正在进行**：#1769 与 #1771 均创建于 2026-04-06，已搁置约 3 个月后于昨日更新，说明社区正在系统化处理存量技术债。

5. **核心贡献者集中度较高**：今日 5 个 PR 中，3 个来自 `nankingjing`、2 个来自 `he-yufeng`，核心维护者驱动的特征明显，外部贡献者参与度有提升空间。

---

*报告生成基于 2026-07-11 至 2026-07-12 的 GitHub 数据，由 AI 分析师自动整理。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-12**

---

## 📌 今日速览

今日 OpenCode 社区动态主要集中在 **GPT-5.6 模型族集成** 和 **V2 TUI 稳定性优化** 两个方向，多位核心贡献者（kitlangton、aditya-vithaldas）集中提交了 6 个以上 TUI/CLI 相关修复 PR。同时 **CPU 高占用** 类问题持续发酵，已形成多个跨版本 Issue；Ollama、OpenAI provider 的兼容性问题仍是开发者关注焦点。

---

## 🚀 版本发布

> 过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 + 👍数）排序，挑选以下 10 条：

| # | Issue | 状态 | 热度 | 要点 |
|---|-------|------|------|------|
| 1 | [#36140 GPT-5.6 Luna 返回 404（ChatGPT OAuth）](https://github.com/anomalyco/opencode/issues/36140) | OPEN | 👍70 / 💬16 | **社区反应最热烈**。`gpt-5.6-luna` 出现在内置 OpenAI provider 列表中，但调用返回 HTTP 404，影响 ChatGPT OAuth 用户。已存在对应修复 PR #36476。 |
| 2 | [#8816 提供 llms.txt 和 Markdown 文档](https://github.com/anomalyco/opencode/issues/8816) | OPEN | 👍35 / 💬16 | 35 人点赞的高需求功能。开发者希望以 `llms.txt` 形式提供可解析的 OpenCode 文档，便于 LLM 检索与自动化集成。 |
| 3 | [#4751 增加禁用 copy-on-select 的配置项](https://github.com/anomalyco/opencode/issues/4751) | CLOSED | 👍18 / 💬25 | 老牌功能请求，25 条评论。用户在阅读高亮文本时误触剪贴板污染问题，呼声较高。 |
| 4 | [#30086 新版 OpenCode CPU 高占用](https://github.com/anomalyco/opencode/issues/30086) | OPEN | 👍13 / 💬24 | **性能核心痛点**。用户从可同时运行 10 个会话降至 3 个即卡顿，伴随鼠标响应延迟。已与 #4804、#19466 形成问题簇。 |
| 5 | [#19466 opencode 空闲时仍高 CPU 占用](https://github.com/anomalyco/opencode/issues/19466) | OPEN | 👍11 / 💬14 | 在 API 限流等待（18 分钟级）期间，进程仍占用 i9-14900 单核 50%，疑似空闲循环 bug。 |
| 6 | [#4804 [bug, opentui, perf] High CPU usage](https://github.com/anomalyco/opencode/issues/4804) | CLOSED | 👍5 / 💬19 | macOS Intel 平台 OpenTUI 持续高 CPU 问题，已关闭（推测有 commit 修复）。 |
| 7 | [#36141 GPT-5.6 模型缺少 max 推理档位](https://github.com/anomalyco/opencode/issues/36141) | OPEN | 👍8 / 💬5 | OpenCode 仅暴露到 `xhigh`，未暴露 OpenAI 已支持的 `max` 推理档位，影响长上下文任务。 |
| 8 | [#29548 OpenAI provider 10000ms header 超时](https://github.com/anomalyco/opencode/issues/29548) | OPEN | 👍4 / 💬12 | 1.14.28 → 1.15.11 升级后回归，需手动调大 `headerTimeout` 才能恢复。 |
| 9 | [#22132 OpenCode 1.4.3 与本地 Ollama 挂死](https://github.com/anomalyco/opencode/issues/22132) | OPEN | 👍5 / 💬12 | 通过 `@ai-sdk/openai-compatible` 配置的 Ollama 在简单 prompt 上挂死，但 `curl /v1/chat/completions` 正常，问题在客户端路径。 |
| 10 | [#36465 Revert message 不应修改代码](https://github.com/anomalyco/opencode/issues/36465) | OPEN | 💬4 | 误点旧会话的"revert"操作直接破坏 Git 状态，缺少二次确认。属于影响代码安全的 UX 缺陷。 |

---

## 🛠 重要 PR 进展

| # | PR | 作者 | 内容摘要 |
|---|----|------|----------|
| 1 | [#36478 保留 server 启动失败的具体原因](https://github.com/anomalyco/opencode/pull/36478) | kitlangton | CLI 启动报错时透传 readiness 失败根因（如 `NotFound: FileSystem`），告别通用 "Failed to start server"。 |
| 2 | [#36475 update preflight 持续到 TUI 加载完成](https://github.com/anomalyco/opencode/pull/36475) | kitlangton | 修复 TUI 启动期间 footer 已 "Ready" 但终端空白的体验割裂问题。 |
| 3 | [#35985 从 models.dev 推导推理变体](https://github.com/anomalyco/opencode/pull/35985) | rekram1-node | **基础设施级重构**。废弃硬编码推理 effort 表，统一从 `models.dev` 的 `reasoning_options` 派生，跨 Core 与 legacy provider 路径共享映射。 |
| 4 | [#36476 plugin/openai 增加 GPT-5.6 模型族](https://github.com/anomalyco/opencode/pull/36476) | dalisoft | 修复 #36140、#36427，添加 gpt-5.6 系列模型注册。 |
| 5 | [#36480 V2 subagent picker 状态改进](https://github.com/anomalyco/opencode/pull/36480) | opencode-agent[bot] | Ctrl-B 后台化在子代理选择器内仍生效；前台运行用标准 spinner，后台用标签区分。 |
| 6 | [#35762 恢复 subagent 导航](https://github.com/anomalyco/opencode/pull/35762) | aryaminus | 关闭 #34457，并修复 #32432、#15972 中的子代理导航与嵌套子代理切换问题。 |
| 7 | [#33563 长请求时权限面板按钮保持可见](https://github.com/anomalyco/opencode/pull/33563) | Arcadi4 | 关闭 #28979/#33575/#29515；长 `permission.patterns` 不再把 dock 挤出视口。 |
| 8 | [#36471 右键粘贴剪贴板](https://github.com/anomalyco/opencode/pull/36471) | aditya-vithaldas | 关闭 #36456。在启用鼠标捕获且 prompt 聚焦时，右键触发 `prompt.paste`。 |
| 9 | [#36468 保留合法的空 JSON 配置](https://github.com/anomalyco/opencode/pull/36468) | aditya-vithaldas | 关闭 #36374。插入 `$schema` 时仅在已有键时才追加逗号，避免 JSON 解析失败。 |
| 10 | [#35405 Gemini 工具调用参数还原为嵌套结构](https://github.com/anomalyco/opencode/pull/35405) | kagura-agent | 关闭 #35105。Gemini 有时返回扁平 `questions[0].header` 形式参数，此 PR 将其还原为嵌套 JSON。 |

> 另有 [#36479](https://github.com/anomalyco/opencode/pull/36479)（降低 durable event 日志级别）、[#36477](https://github.com/anomalyco/opencode/pull/36477)（一次性上报 malformed tool 失败）已合并关闭，体现对日志噪声与失败语义统一性的重视。

---

## 📈 功能需求趋势

从近期 Issues 提炼，社区最关注的 5 大方向：

1. **新模型与 Provider 支持**（最高热度）
   - GPT-5.6 完整家族（luna/terra/sol、Codex OAuth 限额、`max` 推理档位）
   - xAI → SpaceXAI 品牌更新（#35866）
   - `--model free` 随机零成本模型选择（#34794）

2. **性能与资源占用**
   - CPU 高占用横跨多个版本（#30086、#4804、#19466），已成为仅次于模型支持的首要痛点
   - OpenTUI 渲染路径、空闲循环、限流等待均为高嫌疑区

3. **文档与可机器消费性**
   - 提供 `llms.txt` 文档（#8816，35 👍）反映了"AI-friendly docs"的社区共识

4. **TUI/UX 细节增强**
   - 禁用 copy-on-select、右键粘贴、bell 提示、session picker 启动入口（`--resume`）、V2 子代理导航

5. **数据协作与隐私**
   - 匿名会话数据共享以改进开源模型（#35303）、社区用户目录（#36460）体现社区化运营诉求

---

## 💡 开发者关注点

| 痛点类别 | 代表 Issue | 高频诉求 |
|----------|------------|----------|
| **Provider 兼容性回归** | #29548、#22132、#36140 | 升级版本不破契约；保持 OAuth / 自托管 / 本地 Ollama 全路径可用 |
| **空闲状态 CPU 异常** | #30086、#19466、#4804 | 等待限流、空闲 TUI 不应持续占用主线程 |
| **V2 TUI 稳定性** | #35988、#36458、#36417、#35986 | leader key、初始消息丢失、GUI 卡 thinking、sidebar 宽度回归等密集出现 |
| **会话/项目管理** | #36439、#36464 | 会话不自动重命名；同一 git 目录产生多个 project ID 导致历史会话不可见 |
| **危险操作缺少确认** | #36465 | revert 隐式破坏 Git，需二次确认或独立按钮 |
| **可观测性** | #17846、#36283、#36446 | `--log-level DEBUG` 在 10 个日志文件后失效；多 TUI 连接时事件日志被 N 倍复制 |

**整体观察**：开发者最迫切的需求集中在"升级不破东西"和"空闲不烧 CPU"两点上；GPT-5.6 集成与 V2 TUI 的打磨是当前 PR 工作的两大主线。建议关注者收藏 [#30086](https://github.com/anomalyco/opencode/issues/30086)（CPU 专题）与 [#8816](https://github.com/anomalyco/opencode/issues/8816)（llms.txt 文档）以跟进后续进展。

---

*数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode) · 统计窗口：2026-07-11 ~ 2026-07-12*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-12

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) （earendil-works/pi）

---

## 📌 今日速览

**GPT-5.6 模型（Sol / Terra / Luna）成为绝对焦点。** 围绕 GitHub Copilot 与 OpenAI Codex 两个 Provider，Pi 社区在 24 小时内集中提交了模型目录注册、Prompt Cache、Responses Lite、思维链占位符等一连串适配 PR 与 Issue，呈现出"新模型首发日"的典型态势。与此同时，Extension API 也在快速演进，mitsuhiko 提出了"开发者消息角色"和"消息锚定的工具加载"两项实验性能力，为下一轮 Agent 架构升级铺路。

---

## 🚀 版本发布

过去 24 小时内 **无新版本发布**。

---

## 🔥 社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 评论 | 👍 | 价值点 |
|---|-------|------|------|------|--------|
| 1 | [#6475](https://github.com/earendil-works/pi/issues/6475) Add GPT-5.6 (Sol/Terra/Luna) to GitHub Copilot | CLOSED | 9 | **8** | GitHub 当天上架的 GPT-5.6 三档模型，8 赞说明社区迫切期待官方支持 |
| 2 | [#5916](https://github.com/earendil-works/pi/issues/5916) Provider extensions + 模型别名 + 搜索增强 | OPEN, in progress | 12 | 0 | OpenRouter 自定义 provider 体验的核心痛点，长期高互动议题 |
| 3 | [#6206](https://github.com/earendil-works/pi/issues/6206) 上下文窗口钳制 vs maxTokens 语义混淆 | CLOSED | 9 | 0 | 修正了此前 `max_tokens` 行为缺陷，影响所有模型调用 |
| 4 | [#6097](https://github.com/earendil-works/pi/issues/6097) Add 'max' thinking level | CLOSED | 4 | **18** | 全榜最高赞，反映开发者对 GPT-5.6 Sol 第六档推理强度的强需求 |
| 5 | [#6510](https://github.com/earendil-works/pi/issues/6510) Copilot `mai-code-1-flash-picker` API 路由错误 | CLOSED | 5 | 0 | 暴露了 Copilot Provider 端点分派的边界问题，已被快速修复 |
| 6 | [#6502](https://github.com/earendil-works/pi/issues/6502) Windows Terminal ESC[3J 滚动跳跃 | OPEN | 4 | 0 | Windows 平台 TUI 体验回归，影响所有 Windows 用户 |
| 7 | [#6513](https://github.com/earendil-works/pi/issues/6513) Codex WebSocket 跨账号串用 | OPEN | 3 | 0 | 安全级 Bug：同会话切换账号可能复用旧 socket，属于关键修复 |
| 8 | [#6157](https://github.com/earendil-works/pi/issues/6157) 压缩摘要按会话语言生成 + 去重 | CLOSED | 4 | 0 | 多语言场景下压缩体验的关键改进 |
| 9 | [#6472](https://github.com/earendil-works/pi/issues/6472) `compaction.enabled=false` 被溢出恢复路径绕过 | CLOSED | 3 | 0 | 设置项失效类 Bug，修复保证了用户配置优先级 |
| 10 | [#6456](https://github.com/earendil-works/pi/issues/6456) ctrl-p 应改为显示上一条 Prompt | CLOSED | 4 | 0 | 经典快捷键习惯冲突，从 codex/claude 迁移用户的核心诉求 |

---

## 🛠️ 重要 PR 进展（精选 10 条）

| # | PR | 作者 | 状态 | 要点 |
|---|----|------|------|------|
| 1 | [#6534](https://github.com/earendil-works/pi/pull/6534) feat(ai): add developer message role | mitsuhiko | OPEN | 实验性引入 `developer` 角色，对应 RFC 54，扩展消息角色语义 |
| 2 | [#6474](https://github.com/earendil-works/pi/pull/6474) feat(ai): message-anchored tool loading | mitsuhiko | CLOSED | 支持工具中途注入，Anthropic 后端可用 `ToolReference`，改写 Agent 工具编排模型 |
| 3 | [#6341](https://github.com/earendil-works/pi/pull/6341) feat(ai): constrained sampling | mitsuhiko | OPEN | 工具调用支持 provider 侧 JSON-schema 约束采样（`strict` / `tool_choice`） |
| 4 | [#6540](https://github.com/earendil-works/pi/pull/6540) Surface provider errors via advisories | yeshao | CLOSED | 上下文溢出 / 重试耗尽 / 压缩失败不再静默丢弃，注入 advisory 提示 LLM 自愈 |
| 5 | [#6539](https://github.com/earendil-works/pi/pull/6539) Bind Codex WebSocket reuse to account | robinbraemer | CLOSED | 修复 #6513：将 WS 缓存绑定到 normalized endpoint + JWT 账号，防跨账号串用 |
| 6 | [#6530](https://github.com/earendil-works/pi/pull/6530) Cut Node CLI startup cost | wattsjs | CLOSED | `--version` 走 fast-path，Bun 虚拟模块仅在 Bun 入口加载，大幅缩短 Node 冷启动 |
| 7 | [#6528](https://github.com/earendil-works/pi/pull/6528) Support GPT-5.6 prompt cache options | AbdoKnbGit | CLOSED | OpenAI Responses 新增 `prompt_cache_options{ mode: implicit, ttl: 30m }`，老模型保持兼容 |
| 8 | [#6520](https://github.com/earendil-works/pi/pull/6520) Edit tool not-found 显示上下文 | korverdev | CLOSED | `edit` 找不到 oldText 时回显附近文件内容，附带 `findClosestMatchContext` 辅助定位 |
| 9 | [#6551](https://github.com/earendil-works/pi/pull/6551) Deferred extension reload requests | Tarun-joy | CLOSED | 新增 `ExtensionContext.requestReload()`，事件/工具中可请求延迟重载，interactive 与 RPC 双模式支持 |
| 10 | [#6556](https://github.com/earendil-works/pi/pull/6556) Expose Codex responses API to extensions | robinbraemer | CLOSED | 补齐 `@earendil-works/pi-ai/api/*` 子路径对 Extension loader 的可见性，文档化 WebSocket 清理 helper |

> 此外还有 [#6523](https://github.com/earendil-works/pi/pull/6523) Alt 符号键终端兼容修复、 [#6532](https://github.com/earendil-works/pi/pull/6532) Bedrock `AWS_PROFILE` 认证回退修复、 [#6496](https://github.com/earendil-works/pi/pull/6496) OpenRouter 会话亲和 header 支持 等多项修复类 PR。

---

## 📈 功能需求趋势

从今日 Issues 分布来看，社区关注点高度集中：

1. **GPT-5.6 新模型适配（最高优先级）**
   涉及 GitHub Copilot 目录注册、OpenAI Codex Responses Lite、`mai-code-1-flash-picker` 端点分派、Prompt Cache、思维链占位符渲染等 — 单一模型首发即触发 10+ 条 Issue/PR。

2. **Provider 生态扩展**
   - 新 Provider 接入：LLM Gateway（#6554）、GitHub Copilot `auto` 伪模型（#6550）
   - OpenRouter 通过 `modelOverrides` 实现的别名 + 搜索能力（#5916）
   - Cloudflare Workers AI / Bedrock `AWS_PROFILE` 残留问题

3. **Extension / SDK 能力深化**
   - RPC 模式 `attachments` 字段（#6493）
   - `input` 事件对 `steer()` / `followUp()` 路径覆盖（#6491）
   - 延迟重载 API（#6551）、扩展点触发压缩（#6553）
   - 公开 pi-ai API 子路径供扩展导入（#6557）

4. **Agent / 压缩体验**
   多语言摘要生成（#6157）、`compaction.enabled=false` 真正生效（#6472）、压缩阶段的 provider 错误可视化（#6540）。

5. **性能与冷启动**
   Node CLI 启动耗时（#6530）以及早期 glibc 兼容性问题（#6546 移除原生剪贴板 addon）。

---

## 👨‍💻 开发者关注点与痛点

- **新模型首发体验割裂**：GPT-5.6 在 Copilot 推送当日，Pi 在模型注册、Prompt Cache、思维链显示、Codex 端点路由四方面几乎同步暴雷；开发者期望"开箱即用"。
- **OpenRouter 是隐形的"主力 Provider"**：配置覆盖、别名、搜索、会话亲和等多个 Issue 指向同一个痛点 — 缺乏一等公民 UI。
- **Extension API 仍处于快速演进期**：可见性问题（typebox 导入 #6512、pi-ai 子路径 #6557）、事件覆盖一致性（input 在 steer 路径缺失 #6491）、重载与压缩接口缺失，反映扩展作者需要更稳定的契约。
- **平台兼容不容忽视**：Windows Terminal ESC 序列、旧 Linux glibc、原生剪贴板 addon 等跨平台细节频繁回归 TUI 主线。
- **快捷键习惯迁移成本**：ctrl-p 模型切换 vs. 历史命令唤起，迁移自 codex / claude 的开发者反馈集中。
- **成本透明度诉求**：#6545 提出在 config 中预览每个 extension/skill 对上下文的影响，社区对 token 预算管理愈发敏感。

---

*日报生成依据：截至 2026-07-12，过去 24 小时内更新的 50 条 Issue 与 19 条 PR。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-12

> 数据来源：[QwenLM/qwen-code](https://github.com/QwenLM/qwen-code) ｜ 过去 24 小时窗口

---

## 📌 今日速览

今天的核心动态集中在三大主线：**(1) `qwen serve` 多工作区架构**进入落地阶段，多个 RFC 与 PR 协同推进 workspace 注册、移除、会话跨域；**(2) Web Shell UI 集中重构**，新增 Goals 页、git branch 指示器、composer toolbar 重设计；**(3) Claude Opus 4.6–4.8 1M 上下文窗口支持**正在修补 token limit 常量错误（131072 vs 128000）和上下文回退问题。无新版本发布。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论数 | 重要性 |
|---|---|---|---|
| [#6378](https://github.com/QwenLM/qwen-code/issues/6378) | RFC: Support multiple workspaces in one `qwen serve` daemon | 20 | **P2**多工作区架构的核心 RFC，催生了后续 #6726、#6646、#6745、#6740 等多个衍生 PR，是当前最重要的设计讨论 |
| [#6565](https://github.com/QwenLM/qwen-code/issues/6565) | 糟糕！连接到 Qwen Coder 时出现问题。Internal Error | 11 | 已关闭的多语言连接错误报告，反映认证链路在多语言环境下偶发不可用 |
| [#6581](https://github.com/QwenLM/qwen-code/issues/6581) | JetBrains ACP agent 不接收 user prompt | 8 | **P2** IDE 集成的关键缺陷，ACP 协议下 Qwen Code CLI 正常但 IntelliJ 只收到 bootstrap context |
| [#6590](https://github.com/QwenLM/qwen-code/issues/6590) | macOS standalone 安装缺失 `@teddyzhu/clipboard` 原生模块 | 5 | **welcome-pr** Ctrl+V 粘贴图片在 macOS 直接安装包中完全失效，影响 macOS 用户基本功能 |
| [#6654](https://github.com/QwenLM/qwen-code/issues/6654) | API Error: tool_use blocks missing corresponding tool_result | 5 | **P2** 长会话中工具结果配对错误，导致 API 直接拒绝请求，影响大型 agent 任务 |
| [#6721](https://github.com/QwenLM/qwen-code/issues/6721) | Deferred tool discovery 破坏 prompt cache 前缀 | 4 | **P2** 性能关键——`tool_search` 揭示新工具后重建声明集使缓存前缀失效，造成 token 与延迟浪费 |
| [#6666](https://github.com/QwenLM/qwen-code/issues/6666) | Qwen 3.7 max 返回 `<think>` 标签而非 `reasoning_content` | 3 | **P2** 新模型 reasoning 字段约定异常，可能影响后续 reasoning-aware UI 与评估 |
| [#6487](https://github.com/QwenLM/qwen-code/issues/6487) | `/remember` 后 MEMORY.md 索引陈旧；压缩后 memory 内容丢失 | 3 | **P2** 跨回合记忆系统的双重失效，是 long-horizon agent 体验的核心痛点 |
| [#6639](https://github.com/QwenLM/qwen-code/issues/6639) | HTTP MCP server 返回 401 未触发 OAuth 恢复 | 3 | **P2** **welcome-pr** MCP 鉴权失效后所有 server 显示 offline，SDK 进度发现路径丢状态码 |
| [#5967](https://github.com/QwenLM/qwen-code/issues/5967) | 内联模型切换 `/model <id> <prompt>` | 3 | 减少两步操作摩擦，长期呼声，社区期待与 Claude Code 对齐 |

> 💡 备注：另有 #6699（Web Shell composer 重设计, 3 评论）、#6710（ACP 中断 vs 取消区分, 3 评论, **P1**）、#6695（会话中断自动续接, 3 评论）、#6713（microcompaction 清除 managed memory, 3 评论）、#6488（MessageDisplay hook, 3 评论）等高价值 Issues 值得一并跟踪。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 内容摘要 |
|---|---|---|---|
| [#6711](https://github.com/QwenLM/qwen-code/pull/6711) | `feat(review)`: 过程化 correctness finders 与 effort levels | OPEN | 重构 `/review` skill 的 finder 层与精度/成本控制，仅修改 `SKILL.md`、`DESIGN.md` 与文档，无运行时代码改动 |
| [#6638](https://github.com/QwenLM/qwen-code/pull/6638) | `feat(serve)`: Extension Management V2 | OPEN | 在 `qwen serve` 下引入 additive `extension_management_v2` capability，扩展激活从"已安装即激活"转向策略化（全局默认 + workspace 例外） |
| [#6741](https://github.com/QwenLM/qwen-code/pull/6741) | `feat(cli)`: 运行时 daemon channel 控制 | OPEN | 为无 `--channel` 启动的 daemon 增加 runtime enable/replace/query/reload/stop channel 的 HTTP、SDK 与 `qwen channel` CLI 三种入口 |
| [#6723](https://github.com/QwenLM/qwen-code/pull/6723) | `fix(prompt-cache)`: 稳定 deferred tool 调用 | OPEN | 修复 #6721：`tool_search` 返回模型可见 schema 而非向 provider 重新声明工具集，避免破坏 cache prefix |
| [#6561](https://github.com/QwenLM/qwen-code/pull/6561) | `feat(web-shell)`: Goals 页 + 修复 daemon resume 丢失 `/goal` | OPEN | 为 Web Shell 增加 workspace Goals 可视化页面，并修复 daemon 模式下 `/goal` 被静默丢弃的先决 bug |
| [#6748](https://github.com/QwenLM/qwen-code/pull/6748) | `fix(web-shell)`: 修复 `ScheduledTasksDialog` 失效的 `composerTagIcons` import | OPEN | 修复 `main` 分支 Vite 构建因 PR #6589 先于 #6537 改路径而引入的悬挂 import |
| [#6745](https://github.com/QwenLM/qwen-code/pull/6745) | `feat(serve)`: 运行时 workspace 移除 | OPEN | 与 #6726 配套，允许在不重启 daemon 的前提下注销已注册 workspace，含完整验证计划 |
| [#6743](https://github.com/QwenLM/qwen-code/pull/6743) | `fix`: Chat recording 失败的持久化与可见性 | OPEN | 修复 #6742：首次 JSONL 写入失败即终止 recorder、保留原失败链，防止 parent UUID 在记录写入前推进 |
| [#6746](https://github.com/QwenLM/qwen-code/pull/6746) | `fix(web-shell)`: 跨 workspace 会话在 Split View 与 Overview 可见 | OPEN | 修复跨信任 workspace 会话仅在自身可见的限制，每个会话标签显示 workspace 名（主工作区显示 `primary`） |
| [#6747](https://github.com/QwenLM/qwen-code/pull/6747) | `perf(core)`: web-tree-sitter runtime 惰性加载 | OPEN | 将 `web-tree-sitter` 由静态 import 改为首次使用时动态 import，运行时分发方式不变，正则回退仍生效 |

---

## 📈 功能需求趋势

1. **多工作区 daemon 架构（热度最高）**
   `qwen serve = 1 workspace × N sessions` 的旧模型正被打破，围绕 workspace 注册/移除、跨工作区会话、组织变更、恢复等形成持续 RFC/PR 队列（#6378、#6646、#6695、#6726、#6740、#6745）。

2. **Web Shell UX 系统化**
   composer toolbar 重设计（#6699、#6725、#6702）、Goals 页（#6561）、跨工作区会话可见（#6746）、inline composer tag tooltip（#6728/#6729）—— 桌面级 IDE 体验正在快速补齐。

3. **超长上下文模型支持**
   Claude Opus 4.6–4.8 的 1M context / 128K output 落地中（#6718 → #6734、#6719 修补常量与回退），未来对 `qwen` 系列自研 long-context 模型的支持也在预期内。

4. **MCP / OAuth 生态完善**
   Streamable HTTP 401 后的 OAuth 自动恢复（#6732 / #6639）以及 extension 管理 V2（#6638），反映出"工具生态治理"成为产品分化点。

5. **持久化记忆与会话恢复**
   `/remember` 索引陈旧、microcompaction 清空 managed memory（#6487、#6713）+ 统一恢复服务（#6730）+ 跨环境自动续接（#6695）勾勒出"long-horizon agent 基础设施"。

6. **CLI 工作流小优化**
   内联模型切换（#5967）、Ctrl+S 暂存输入（#6669）、自动补全、shell 命令默认超时（#6628）等高频小需求，体现开发者对"摩擦点优化"的持续呼吁。

---

## 💡 开发者关注点

从过去 24 小时的对话里，可以提炼出几条反复出现的痛点：

- **可靠性 ≠ 报告成功**：chat recording 把入队当作成功（#6742）、tool_use 配对丢失（#6654）、OAuth 修复未触发（#6639）——开发者对"操作成功 ≠ 数据落盘/状态真实"高度敏感。
- **缓存失效是隐形税**：deferred tool 揭示动作破坏 cache prefix（#6721/#6723）表明 token 成本与延迟是真实工作痛点。
- **跨平台/打包细节决定可用性**：macOS standalone 缺原生模块（#6590）、APK 安装包体积、初次引导等"看起来很小但直接劝退用户"的问题。
- **IDE 集成仍是短板**：JetBrains ACP 用户 prompt 丢失（#6581）说明与 IntelliJ/VS Code 的协议层细节尚未完全对齐。
- **状态机语义模糊**：ACP restore 后"用户取消 vs 进程中断"难以区分（#6710, **P1**），体现对会话恢复正确性的更高要求。
- **模型协议的演进压力**：Qwen 3.7 max reasoning 字段格式不一致（#6666）、DashScope 流式空内容（#6670）等持续要求客户端快速适配上游变化。
- **配置可扩展性**：`tools.shell.defaultTimeoutMs`（#6628）、`todosDirectory`（#5928）等"可调一个默认值"类型 PR 占比上升，反映社区对"开箱即用 + 可语义化覆盖"的双重需求。

> 📎 关注后续：明天的看点是 RFC #6378 的落地节奏、Claude Opus 4.6–4.8 1M 上下文的最终修复（#6734 / #6719），以及 Web Shell composer 重设计的合并窗口。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**📅 2026-07-12** ｜ 数据来源：Hmbown/DeepSeek-TUI（GitHub Issues & PRs）

> ⚠️ **数据说明**：本次抓取的实际仓库为 `Hmbown/CodeWhale`（与 DeepSeek TUI 共享同一组织/项目线），链接均指向该仓库的 Issue/PR 编号。

---

## 1. 今日速览

今日社区最显著的信号是 **Anthropic 适配层的连环问题集中爆发**：Issue #4329 报告的 `tool_use / tool_result` 失配 400 错误，与 PR #4346 修复的 `input_schema` 中 `oneOf/anyOf/allOf` 被拒、PR #4348 调整的 Anthropic cache-write 计费，三者共同反映出项目在多 Provider 兼容方面进入密集打磨期。**性能治理**（#4326 RSS 泄漏）、**跨平台构建**（#4350 Android/Termux、#4349 BSD 系）以及 **i18n 拓展**（#4347 韩语）则是社区协作的另外三条主线。

---

## 2. 版本发布

过去 24 小时 **无新版本发布**。项目仍处于高频迭代期（社区提及每日 10+ PR），建议关注 `main` 分支。

---

## 3. 社区热点 Issues

| # | 标题 | 标签 | 评论 | 重要性 |
|---|------|------|------|--------|
| [#4227](https://github.com/Hmbown/CodeWhale/issues/4227) | feat: 🐋 help JayBeest map the CodeWhale tsunami | doc, enhancement, workflow | 5 | ⭐⭐⭐ 提出针对 10+ PR/天高速迭代的"环境同步"工作流，影响所有贡献者 |
| [#4329](https://github.com/Hmbown/CodeWhale/issues/4329) | Anthropic API error (HTTP 400 tool_use/tool_result 失配) | bug, enhancement | 4 | ⭐⭐⭐ 阻塞性问题，与 #4346 修复同源，已被 PR 闭环 |
| [#4326](https://github.com/Hmbown/CodeWhale/issues/4326) | Perf: 32-worker storm 取消后 RSS 异常驻留 | bug, tui, subagents, perf | 1 | ⭐⭐⭐ 32 工人并发基准下的内存治理，是高扇出场景的潜在隐患 |
| [#4345](https://github.com/Hmbown/CodeWhale/issues/4345) | key 太不友好了，不能放在终端进行吗？ | bug, workflow-runtime | 2 | ⭐⭐ UX 痛点：API Key 引导流程不符合终端用户直觉 |
| [#4350](https://github.com/Hmbown/CodeWhale/issues/4350) | Termux (aarch64-linux-android) 构建失败：rquickjs 无预编译绑定 | bug, tui | 1 | ⭐⭐ 移动端/Termux 场景的可用性问题，与 #4349 跨平台修复形成呼应 |

> 注：今日仅有 5 条活跃 Issue，已全部收录；其中 #4329 与 #4326 由维护者/资深贡献者发起，权重较高。

---

## 4. 重要 PR 进展

| # | 标题 | 改动要点 | 链接 |
|---|------|----------|------|
| [#4346](https://github.com/Hmbown/CodeWhale/pull/4346) | fix: sanitize tool input_schema for Anthropic adapter | 在 Anthropic 适配器中对 `input_schema` 的 `oneOf/anyOf/allOf` 做扁平化处理，规避 HTTP 400 | [查看](https://github.com/Hmbown/CodeWhale/pull/4346) |
| [#4348](https://github.com/Hmbown/CodeWhale/pull/4348) | fix(tui): bill Anthropic cache-write tokens at published rates | `CurrencyPricing` 新增 `cache_write_per_million`，为 Anthropic/Qwen 行发布 5 分钟写费率（claude-fable-5 = 12.50） | [查看](https://github.com/Hmbown/CodeWhale/pull/4348) |
| [#4347](https://github.com/Hmbown/CodeWhale/pull/4347) | i18n: add Korean (ko) locale support | 新增 `ko.json`，覆盖全部 752 个叶子键 | [查看](https://github.com/Hmbown/CodeWhale/pull/4347) |
| [#4349](https://github.com/Hmbown/CodeWhale/pull/4349) | Update Cargo.toml to allow build under NetBSD (FreeBSD/OpenBSD/DragonFly 同源) | 解决 rquickjs 在 BSD 系上无预生成绑定的问题 | [查看](https://github.com/Hmbown/CodeWhale/pull/4349) |

> 注：今日仅有 4 条活跃 PR，已全部收录；#4346 与 #4348 在 24 小时内同时落地 Anthropic 适配的 3 项缺陷修复。

---

## 5. 功能需求趋势

从今日活跃 Issue/PR 提炼，社区诉求集中在 **四个方向**：

1. **多 Provider 兼容与计费准确性**（🔥 最热）
   - Anthropic `input_schema` 清洗、cache_write 单独计费、`tool_use/tool_result` 一致性——形成"三件套"修复合集。
2. **跨平台可移植性**
   - 移动端/Termux（Android aarch64）→ #4350
   - BSD 系（NetBSD/FreeBSD/OpenBSD/DragonFly）→ #4349
   - 反映出"CLI/终端工具必须随处可跑"的硬性需求。
3. **本地化（i18n）**
   - 韩语 (#4347) 上游，叠加既有的 zh/en 体系，提示社区开始关注非英语圈用户体验。
4. **高并发性能治理**
   - #4326 在 32-worker PTY 基准下对 RSS 上限做明确划界，呼应 10+ PR/天迭代下的资源压力测试。

---

## 6. 开发者关注点

- **痛点一：Anthropic 适配层的隐式约束**。`input_schema` 含组合关键字、`tool_use` 与 `tool_result` 顺序错位等都会触发 400，导致"明明本地能跑、Anthropic 拒收"——开发者呼吁在适配器层做主动校验而非被动抛错。
- **痛点二：构建环境的"长尾"平台覆盖不足**。rquickjs 等 Rust 生态库对 Android/BSD 的支持缺失，把负担转嫁给下游项目，需要逐个仓库打补丁（#4350、#4349）。
- **痛点三：终端交互的"非终端"反直觉设计**。#4345 直指 API Key 配置仍依赖图形化或文档步骤，与"终端原生工具"定位相悖，呼吁支持纯终端内嵌引导。
- **痛点四：高速迭代下的贡献者摩擦**。#4227 揭示 10+ PR/天带来 `main` 漂移风险，开发者期待"一键同步 + 重建"的辅助 Skill。
- **高频需求：清晰的 cache 计费可视化和多语言切换**。PR #4348 把"cache 写"独立为可观测字段，#4347 把 i18n 颗粒度做到键级别——两者指向同一价值观：**让成本与语言不再成为使用门槛**。

---

*报告生成时间：2026-07-12 ｜ 数据窗口：过去 24 小时*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*