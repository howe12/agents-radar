# AI CLI 工具社区动态日报 2026-09-06

> 生成时间: 2026-09-06 02:23 UTC | 覆盖工具: 9 个

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

**报告日期**：2026-09-06  
**数据范围**：基于 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（Codewhale）共 9 款工具过去 24 小时的 GitHub 公开动态

---

## 1. 生态全景

当前 AI CLI 工具生态已从"通用对话终端"的单点能力竞争，进入**「Agent 可编程性 + 跨平台稳定性 + 模型/Provider 协议适配」**的三轴拉锯战。一方面，Claude Code、Codex、Copilot CLI 等成熟玩家继续在 Connector、MCP、Hook 等扩展层加码；另一方面，OpenCode、Pi、Qwen Code、Codewhale 等社区驱动型项目通过快速迭代试图重构协议层（ACP v2、mid-conversation system messages、session timeline）。与此同时，**「静默失败」与「Windows 兼容性」**成为几乎所有项目共同的工程债，暴露出 Agent 类工具在真实生产环境中尚未完全收敛。

---

## 2. 各工具活跃度对比

| 工具 | 今日 Release | 活跃 Issues（精选/总估） | 重要 PR | 综合活跃度 |
|------|-------------|---------------------|---------|-----------|
| **Claude Code** |  无 | 10 精选 + 5 补充 ≈ 15 | 2 | ⭐⭐⭐⭐ |
| **OpenAI Codex** | ❌ 无 | 10 精选 + 5 补充 ≈ 15 | 10（Voice 为主） | ⭐⭐⭐⭐⭐ |
| **Gemini CLI** | ✅ nightly ×1 | 10 精选 | 10 | ⭐⭐⭐⭐ |
| **GitHub Copilot CLI** | ❌ 无 | 10 精选 + 5 补充 ≈ 15 | 0 | ⭐⭐⭐ |
| **Kimi Code CLI** |  无 | 2 | 0 |  |
| **OpenCode** | ❌ 无 | 10 精选 + 5 补充 ≈ 15 | 10 | ⭐⭐⭐⭐ |
| **Pi** | ✅ v0.85.1 | 10 精选 | 12 | ⭐⭐⭐⭐⭐ |
| **Qwen Code** | ✅ preview ×1 + nightly ×2 | 10 精选 | 10 | ⭐⭐⭐⭐⭐ |
| **DeepSeek TUI / Codewhale** | ✅ v0.9.12 | 10 精选 | 10 | ⭐⭐⭐⭐⭐ |

> **观察**：Kimi Code CLI 的极低活跃度与其在中文社区的曝光度形成反差，建议关注其是否进入维护期或战略调整；Codex、Pi、Qwen Code、OpenCode、Codewhale 形成第一梯队"高 PR + 高 Issue"的活跃象限。

---

## 3. 共同关注的功能方向

以下需求在 **3 个及以上工具**的社区中同时被点名为热点：

### 3.1 🔌 MCP（Model Context Protocol）生态成熟度
- **Claude Code**：HTTP MCP 工具调用不通（#86875）
- **OpenAI Codex**：`codex mcp login` OAuth scope 缺失（#20503）
- **GitHub Copilot CLI**：JSON-RPC 序列化损坏（#4721）、tools/list 刷新时序（#4731）
- **OpenCode**：Jira MCP Markdown 附件被忽略（#35538）
- **Codewhale**：MCP 启动卡在 "connecting"（#5887）

**社区共识**：MCP 已成为 Agent 工具的事实标准，但其**协议层稳定性**（错误处理、序列化、取消语义、附件类型）仍是系统性短板。

### 3.2 🪟 Windows 跨平台一致性
- **Claude Code**：启动崩溃（#53247）、Dispatch Tab 缺失（#77071）、内存压力失效（#92059）、MSIX 文件关联劫持（#91750）
- **OpenAI Codex**：宠物交互、Computer Use、首启 15+ 分钟解包 cua_node runtime
- **Copilot CLI**：Windows 25H2 沙箱不支持（#4652）
- **OpenCode**：TUI 大文件挂起（#31916）
- **Pi**：TUI 输入框逐键重绘（#6300）、维护者主动调研 Windows 现状（#7547，52 评论）
- **Qwen Code**：`@-file` 缺 O_NOFOLLOW（#8227）
- **Codewhale**：Win32 computer-use 假成功（#5908）

**社区共识**：Windows 是 Agent CLI 工具的"体验洼地"，且 QA 覆盖度普遍受到开发者质疑。

### 3.3 🪝 插件/Hook 可编程能力
- **Claude Code**：Function Hooks 提案（#91870，112 评论）
- **Gemini CLI**：Hook 迁移秒/毫秒单位错位（#29125）、事件键名错位（#29124）
- **OpenCode**：Session 生命周期 Context Hooks（#28695）
- **Pi**：mid-conversation system messages 重构（#9116/#9117）、扩展 API 暴露 `ModelRuntime`（#8791）
- **Qwen Code**：扩展按 workspace runtime 作用域（#11086）

**社区共识**：从"配置式扩展"演进到"行为拦截式扩展"已成趋势，但**跨工具 Hook 语义未对齐**（秒 vs 毫秒、大小写、事件名）正在制造迁移摩擦。

### 3.4  会话/历史管理与可回放性
- **OpenAI Codex**：分页 rollout 丢消息 + ordinal 冲突（#35746、#41079，合计 67 评论）
- **OpenCode**：升级后 session 消失（#35690、#35750）、Desktop/CLI 不同步（#29071）、session timeline 重构（#47552）
- **Pi**：`/export` HTML 静默丢失 `display:false` 上下文（#8896）、压缩期拒绝树导航（#9179）

**社区共识**：会话历史是 Agent 类工具的"信任底线"，但当前在分页、跨端同步、导出完整性上均有显著缺陷。

### 3.5 🤫 静默失败与可观测性
- **Claude Code**：Bash 工具 8KB+ 截断（#85111）、OAuth 凭据被覆盖（#88583）
- **Gemini CLI**：shell 命令完成后虚假 "Waiting input"（#25166）、模型选择被静默改写（#29217/#29222）
- **Codewhale**：Win32 输入 `action_sent:true` 假成功（#5908）、web fetch JS-shell 200 失败无重试（#5904）
- **Qwen Code**：cron 静默触发（#5823）、serve 后台输出丢失（#11119）
- **Copilot CLI**：工具调用前助手文本被吞（#4735）

**社区共识**：「工具说成功但其实没做」是开发者容忍度最低的失败模式，普遍要求**如实上报失败 + 进度可见性**。

---

## 4. 差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线亮点 |
|------|---------|---------|-------------|
| **Claude Code** | Anthropic 一站式工作台 | 企业 / 多账户 Connector 重度用户 | Connector 生态 + Function Hooks（中间件模型） |
| **OpenAI Codex** | OpenAI 全栈 + 实时通信 | ChatGPT Pro/Plus 付费用户 + 实时场景探索者 | Voice / WebRTC / RTP 基础设施；/rewind 检查点 |
| **Gemini CLI** | Google Gemini 模型入口 + Agent 编排 | 模型/工具实验型开发者 | Subagent 体系 + AST 感知工具路线图 + Auto Memory |
| **GitHub Copilot CLI** | GitHub/Microsoft 企业级 AI 助手 | 企业 + Copilot 订阅用户 | MCP 协议深度集成 + 桌面 CLI 协同 |
| **Kimi Code CLI** | Moonshot K2 Thinking 模型入口 | 中文社区 + 跨生态用户 | 第三方 Agent 集成（Claude Code/Cursor） |
| **OpenCode** | 协议化、平台化的开源 Agent 运行时 | 多 Provider 用户 + IDE/编辑器生态 | ACP v2 + Session Timeline + 多模型抽象 |
| **Pi** | 独立维护者驱动的轻量 Coding Agent | 重视 prompt/tool 可扩展性的进阶用户 | mid-conversation system messages + 多 Provider（Muse/GPT-6/LLM Gateway） |
| **Qwen Code** | 阿里 Qwen 模型 + Web Shell 体验 | Web/云端部署场景 + 中文用户 | Web Shell 统一化 + daemon/serve 模式 + 中文文档 |
| **Codewhale**（DeepSeek TUI） | computer-use + 多模态 TUI | 本地化多模态交互用户 | Computer Use（Windows Win32 / PowerShell）+ EPIC-005 crate 拆解 |

**关键差异点**：

- **从「模型入口」转向「协议/平台」**：OpenCode（ACP v2）、Pi（mid-conversation system messages）、Qwen Code（Web Shell 统一化）都在做"模型无关"的基础设施层升级；相比之下，Claude Code、Codex 仍以自家模型+服务为锚。
- **「企业 Connector」vs「个人开发者 IDE 扩展」**：Claude Code 押注多账户 Connector，Copilot 押注企业策略+桌面协同；OpenCode、Pi、Codewhale 则把"换 Provider、换编辑器"当作核心叙事。
- **「实时/语音」赛道的唯一玩家是 Codex**：10 个核心 PR 中过半是 Voice/WebRTC/RTP 管线和本地音频设备，其他工具尚未跟进。

---

## 5. 社区热度与成熟度

### 🔥 第一梯队：高频迭代 + 大量 Issue
- **OpenAI Codex**、**Pi**、**Qwen Code**、**OpenCode**、**Codewhale**：均呈现「PR ≥ 10 + Issue ≥ 10」的活跃象限，表明项目处于**高速功能扩张期**。
  - Codex 集中投入 Voice 基础设施（接近产品化窗口）
  - Pi 进行架构级重构（mid-conversation system messages）
  - Qwen Code 在 CI 流水线、Web Shell、daemon 三线作战
  - OpenCode 同时推进 ACP v2、Session Timeline、Provider 抽象
  - Codewhale 完成品牌重塑 + EPIC-005 crate 拆解

###  第二梯队：成熟稳定 + 局部修复
- **Claude Code**、**Gemini CLI**、**GitHub Copilot CLI**：社区体量大但今日仅做局部修复，反映**功能趋稳、问题集中于边界场景**。
  - Claude Code 焦点在 Connector 多账户、Function Hooks、Windows 桌面 Bug 群
  - Gemini CLI 焦点在子代理可靠性与 Hook 迁移兼容性
  - Copilot CLI 焦点在升级回归与 MCP 协议细节

### ⚠️ 关注期：低活跃度
- **Kimi Code CLI**：仅 2 条 Issue、0 PR、0 Release，**活跃度异常低迷**，与其在中文 AI 社区的能见度不匹配，建议确认项目状态。

---

## 6. 值得关注的趋势信号

### 趋势 1： 「中间件化」的 Agent 扩展模型
Claude Code Function Hooks（Express/Koa 式）+ Pi mid-conversation system messages + Qwen Code workspace runtime scoping 三者共同指向同一方向：**Agent CLI 正在从"配置式扩展"升级为"行为拦截式扩展"**。
- **对开发者的参考价值**：若你在构建 Agent 工具或编写插件，应关注 Hook 的**事件标准化、生命周期可见性、并发安全**，而非仅仅是 YAML 配置。

### 趋势 2：📡 「实时/语音」正在成为差异化护城河
Codex 一日内 6 个 PR 集中在 Voice（Bazel、WebRTC、RTP、本地设备），其他工具几乎无跟进。  
- **对开发者的参考价值**：短期内 Codex 将在"语音 + 实时协作"场景形成**短期独占窗口**；其他工具需评估是否需要在 2026 H2 跟进。

### 趋势 3：🗂️ 「Session 历史」成为产品级竞争焦点
OpenCode 引入 **timeline-backed session history**（支持分支、合并、时间线穿梭），Codex 持续修分页+ordinal 冲突，Pi 重构压缩期树导航。  
- **对开发者的参考价值**：Session 不再是"日志"而是"产品"——分支、回放、跨端同步、导出完整性将成为核心

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止 2026-09-06 | 数据源：anthropics/skills 仓库

---

## 一、热门 Skills 排行

| # | Skill | PR | 关注度 | 当前状态 | 核心亮点 |
|---|-------|-----|--------|----------|----------|
| 1 | **skill-creator 评测修复套件** | [#1298](https://github.com/anthropics/skills/pull/1298) | 🔥 跨平台+核心流程 | OPEN | 修复 `run_eval.py` 0% recall bug、Windows 子进程读取、并行 worker 问题；至少 10+ 复现。属于"基础设施级"修复 |
| 2 | **document-typography（文档排版质量控制）** | [#514](https://github.com/anthropics/skills/pull/514) | 🌐 普适性强 | OPEN | 防止孤行/寡行、编号错位等所有 Claude 生成文档的共性缺陷 |
| 3 | **Hivemind 零成本多 Agent 编排** | [#1628](https://github.com/anthropics/skills/pull/1628) |  趋势前沿 | OPEN | 将机械任务下放至 headless opencode worker，主模型专注规划/审阅；契合"上下文是稀缺资源"理念 |
| 4 | **frontend-design 可执行性强化** | [#210](https://github.com/anthropics/skills/pull/210) |  长期热点 | OPEN | 让指令真正可被一次会话执行，结束"看着像 skill 但用不起来"的痛点 |
| 5 | **skill-quality-analyzer / skill-security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 🛡️ 生态基础设施 | OPEN | 元技能（meta skill），从 5 维度评估 skill 质量与安全，是生态自我治理的关键 |
| 6 | **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) |  工程刚需 | OPEN | 覆盖 Testing Trophy + React/Vitest/Playwright 全链路 |
| 7 | **ODT（OpenDocument）** | [#486](https://github.com/anthropics/skills/pull/486) | 📄 文档格式补全 | OPEN | 补齐 LibreOffice/ODF 生态，触发"开源 ISO 标准"自动激活 |
| 8 | **ServiceNow 平台技能** | [#568](https://github.com/anthropics/skills/pull/568) |  企业级 | OPEN | 覆盖 ITSM/ITOM/FSM/SecOps/CSDM 等 8 大模块，跨度极大 |

---

## 二、社区需求趋势

从 50 条热门 Issues 提炼，社区诉求集中在 **6 大方向**：

### 1. 🔐 信任与安全边界（最强烈）
- **[#492](https://github.com/anthropics/skills/issues/492)**（43 评论 ⭐）社区 Skill 以 `anthropic/` 命名空间分发，存在仿冒官方、诱导提权的信任漏洞——**这是当前社区最关切的议题**。

### 2.  组织级 Skill 共享
- **[#228](https://github.com/anthropics/skills/issues/228)**（16 评论 ⭐⭐）要求在 Claude.ai 内置 org 级 Skill 库，避免手动下载/分发 `.skill` 文件。

### 3. 🛠️ 评测与可靠性基础设施
- **[#556](https://github.com/anthropics/skills/issues/556)**（12 评论 ⭐⭐）`run_eval.py` 触发率 0%
- **[#1487](https://github.com/anthropics/skills/issues/1487)** `claude-api` 单次注入 156k tokens 直接撑爆上下文
- **[#1390](https://github.com/anthropics/skills/issues/1390)** `mcp-builder` 评测对真实 MCP 全军覆没
- **[#1362](https://github.com/anthropics/skills/issues/1362)** `web-artifacts-builder` 在 pnpm≥10.1 完全无法打包

> **共识**：Skill 越多，自动化评测/上下文控制越成瓶颈。

### 4. 🧬 元技能（Meta-Skill）与治理
- **[#412](https://github.com/anthropics/skills/issues/412)** Agent Governance（已关闭）
- **[#1385](https://github.com/anthropics/skills/issues/1385)** Reasoning Quality Gate 三段管线
- **[#1367](https://github.com/anthropics/skills/pull/1367)** self-audit：交付前机械+推理双校验

### 5. 🔌 Skill ↔ MCP 互通
- **[#16](https://github.com/anthropics/skills/issues/16)** 把 Skill 暴露为 MCP，标准化对外 API 契约。

### 6. 🌍 跨平台与生态扩展
- **[#29](https://github.com/anthropics/skills/issues/29)** AWS Bedrock 集成
- **[#189](https://github.com/anthropics/skills/issues/189)**（9 👍）`document-skills` 与 `example-skills` 重复安装冲突
- **[#1329](https://github.com/anthropics/skills/issues/1329)** 紧凑符号化 agent 状态（compact-memory）

---

## 三、高潜力待合并 PR

按"近 30 天活跃 + 影响面广 + 解决真问题"筛选：

| PR | Skill | 提交时间 | 为何有潜力 |
|---|---|---|---|
| [#1628](https://github.com/anthropics/skills/pull/1628) | **Hivemind** | 2026-08-21 | 解决成本焦虑，符合 multi-agent 编排风口 |
| [#1627](https://github.com/anthropics/skills/pull/1627) | **buffer-api** | 2026-08-21 | Agent Skill 跨平台示例（Claude/Cursor/Codex/n8n），具范式意义 |
| [#1615](https://github.com/anthropics/skills/pull/1615) | **scnet-hpc** | 2026-08-20 | HPC 科研场景专用，差异化定位 |
| [#1607](https://github.com/anthropics/skills/pull/1607) | **claude-api 退役模型清理** | 2026-08-18 | 低风险高价值，合入阻力小 |
| [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 2026-06-28 | 回应 #1385 的质量门需求，正面击中"Skill 越多越不可信"痛点 |
| [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 综合修复** | 2026-06-10 | 阻塞整个 skill-creator 工作流，落地后释放多个 PR |

---

## 四、Skills 生态洞察

> **社区最集中的诉求是"给 Skills 装上刹车与刻度"**：当 Skill 数量爆炸、第三方 Skill 以官方名义分发、评测工具自身不可靠时，社区不再只问"能多做什么"，而是强烈要求**可信命名空间、自动化质量门、上下文预算控制、可观测的评测信号**——Skills 生态正从"功能堆叠期"进入"治理与可信期"。

---

# Claude Code 社区动态日报
**日期：2026-09-06**

---

## 1. 今日速览

今日社区焦点集中在 **Claude Desktop 的多平台稳定性** 与 **连接器/认证扩展性** 两大方向。最受关注的 Issue 仍是多账户连接器支持提案（242 条评论、369 👍），同时 Function Hooks 插件增强提案快速升温。Windows 平台出现多个高优先级 Bug（启动崩溃、内存占用异常、文件关联劫持），显示出桌面端在跨平台一致性上的紧迫需求。值得注意的是，过去 24 小时 **无新版本发布**，所有动态都集中在 Issue 讨论与 PR 修复上。

---

## 2. 版本发布

过去 24 小时内 **无新版本发布**，跳过本节。

---

## 3. 社区热点 Issues

| # | Issue | 类型 | 评论 | 👍 | 重要性 |
|---|-------|------|------|-----|--------|
| 1 | [#27302](https://github.com/anthropics/claude-code/issues/27302) **支持多 Connector 账户** | enhancement | 242 | 369 | 🔥 超高人气，企业用户刚需，支持同一连接器下绑定多个不同账户 |
| 2 | [#91870](https://github.com/anthropics/claude-code/issues/91870) **Function Hooks** | enhancement | 112 | 72 | 提案让插件可深度修改 CC 行为，类似 Express/Koa 中间件模型 |
| 3 | [#53247](https://github.com/anthropics/claude-code/issues/53247) **Windows Desktop 启动崩溃** | bug | 66 | 29 | 应用崩溃后遗留孤儿 Silo/Job Object，需注销或重启才能恢复 |
| 4 | [#91188](https://github.com/anthropics/claude-code/issues/91188) **MEMORY.md 压缩阈值可配置** | enhancement | 24 | 0 | 当前硬编码 200 行 / 25KB，开发者希望自定义或可禁用 |
| 5 | [#77071](https://github.com/anthropics/claude-code/issues/77071) **Windows Dispatch Tab 丢失** | bug | 23 | 4 | Pro 计划用户侧边栏完全缺失 Dispatch 入口 |
| 6 | [#55206](https://github.com/anthropics/claude-code/issues/55206) **Cowork 沙盒 Git 写入失败** | bug | 15 | 11 | Windows 上 bash 沙盒能创建但无法删除文件，所有 git 写入操作失败 |
| 7 | [#86647](https://github.com/anthropics/claude-code/issues/86647) **Cowork 连接文件夹显示不一致** | bug | 7 | 2 | Session 报零连接，但 UI 显示已连接 |
| 8 | [#88583](https://github.com/anthropics/claude-code/issues/88583) **OAuth Keychain 竞态覆盖** | bug | 6 | 3 | 并发 Desktop 会话竞争 refresh token，致凭据被清空 |
| 9 | [#85111](https://github.com/anthropics/claude-code/issues/85111) **Bash 工具静默截断 8KB+ 命令** | bug | 5 | 0 | 超长命令被截断并误报为引号错误，隐患严重 |
| 10 | [#86875](https://github.com/anthropics/claude-code/issues/86875) **HTTP MCP 工具调用不可达** | bug | 4 | 0 | /mcp 显示已连接但调用工具报 "No such tool available" |

**额外值得关注：**
- [#66516](https://github.com/anthropics/claude-code/issues/66516) / [#87895](https://github.com/anthropics/claude-code/issues/87895) macOS/Windows Desktop 窗口"始终置顶"问题（72 👍）已标记 invalid
- [#91750](https://github.com/anthropics/claude-code/issues/91750) Windows MSIX 注册为 .docx/.pdf/.csv 默认处理器且无 opt-out
- [#92059](https://github.com/anthropics/claude-code/issues/92059) Windows 内存压力调节器失效，RSS 飙至 12.4 GB
- [#91477](https://github.com/anthropics/claude-code/issues/91477) / [#92407](https://github.com/anthropics/claude-code/issues/92407) Fable 5.1 在 Windows 上仍默认使用 Bash

---

## 4. 重要 PR 进展

| PR | 作者 | 内容 |
|----|------|------|
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | anishsamant | **安全规则 glob 修复**：`**/*.ts` 在 `security-patterns.json` 中因 fnmatch 行为不匹配零深度路径，导致顶层文件被静默排除；属安全规则，修复意义重大 |
| [#89404](https://github.com/anthropics/claude-code/pull/89404) | bcherny | **validate-agent.sh 修复**：解决 `set -euo pipefail` 与 `((x++))` 交互导致的假阳性，让 plugin-dev 自带的 agent 文件能通过验证；关联 [#83803](https://github.com/anthropics/claude-code/issues/83803) |

> 注：过去 24 小时内仅有 2 个 PR 更新，均针对开发者工具链/安全规则的细节修复，反映出本周期提交活跃度偏低。

---

## 5. 功能需求趋势

从今日 Issue 数据中提炼出五大社区诉求方向：

1. **🔌 连接器与认证生态扩展** — 多账户连接器、跨设备 `~/.claude/` 同步、OAuth 凭据一致性是呼声最高的三个方向
2. **🧩 插件/Hook 可编程能力** — Function Hooks 让插件从"配置层"扩展到"行为拦截层"
3. ** Windows 桌面体验** — 启动崩溃、文件关联、内存管理、Always-on-top、Tab 缺失形成系统性 Bug 群
4. ** MCP 与 Cowork 协同** — HTTP MCP 调用不通、文件夹连接状态不一致、Git 写入受限等
5. **🤖 模型可靠性** — Fable 5.1 token 消耗异常、模型静默 fallback、Windows 下误用 Bash 工具

---

## 6. 开发者关注点

汇总社区反馈，开发者的核心痛点集中在：

- **跨平台一致性**：Windows 上的 Desktop / Cowork / VSCode 扩展出现大量"只在 Windows 出现"的问题，开发者质疑 QA 覆盖度
- **静默失败模式**：Bash 工具截断命令、MCP 工具不可达、OAuth 凭据被清空等问题都难以察觉，开发者呼吁增加显式错误提示
- **可配置性缺失**：MEMORY.md 阈值、`security-patterns.json` glob 语义、`NO_COLOR` 等环境变量被硬编码，限制了高级用户定制
- **可观测性不足**：Auto-continue 失效、内存压力调节器失灵等问题暴露出内部状态不可见，开发者希望增加更详细的日志与诊断命令
- **凭据/会话竞态**：OAuth refresh token 在并发会话下被覆盖（[#88583](https://github.com/anthropics/claude-code/issues/88583)），提示 Anthropic 需要为多会话场景设计更稳健的状态机

---

*数据来源：GitHub `anthropics/claude-code` 仓库，统计窗口为 2026-09-05 至 2026-09-06。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报 · 2026-09-06

> 数据来源：[openai/codex](https://github.com/openai/codex) | 统计窗口：过去 24 小时

---

## 1. 今日速览

- **语音/实时通信基础设施密集落地**：过去 24 小时合并/关闭的 PR 中，超过一半集中在 Voice 助手的 Bazel 构建、WebRTC 会话、RTP 音频管线与本地音频设备接入，Voice 功能距离正式可用更进一步。
- **Windows 桌面 + 会话历史分页成为社区痛点集中区**：多个高评论 Issue 指向 Windows 端的宠物、插件、Computer Use 延迟，以及跨平台的 rollout 历史分页丢消息、ordinal 错乱问题。
- **配额与容量问题在付费用户中持续发酵**：ChatGPT Pro 用户在多个 Issue 中反映"模型容量已满"误报、5 小时配额异常消耗、周配额对账错误，叠加 /rewind checkpoint 等长期高呼声功能仍待兑现。

---

## 2. 版本发布

过去 24 小时**无新 Release**。社区主要通过 PR 持续迭代，CLI 版本号在 Issue 中观察到 `0.146.0-alpha.10`、`0.151.0`、`0.153.4` 等多个分支并行；Desktop 端常见版本包括 `26.715.4045`、`26.820.9563`、`26.901.31953`、`26.901.4073`、`26.901.41600`。

---

## 3. 社区热点 Issues（精选 10 条）

| # | Issue | 关键看点 |
|---|-------|---------|
| 1 | **[#11626](https://github.com/openai/codex/issues/11626)** — CLI: 添加 `/rewind` checkpoint 恢复对话 + 工作区编辑 | **212 👍 / 41 评论**。长期最高呼声增强请求。当前 `Esc` 只能回滚对话，无法同时回滚 Codex 已应用的代码改动，社区期待原生 `/rewind` 一体化检查点。 |
| 2 | **[#35746](https://github.com/openai/codex/issues/35746)** — 分页 rollout 历史丢弃有效记录并复用 ordinal | 39 评论。`0.146.0-alpha.10` 起，`RolloutLine` 解码在分页时出现 ordinal 冲突，直接影响 CLI 历史回放。 |
| 3 | **[#41079](https://github.com/openai/codex/issues/41079)** — Windows Desktop 分页线程历史卡在旧 ordinal | 28 评论。即便 canonical JSONL 完整，桌面 UI 仍只展示更早快照，是典型的历史投影停滞。 |
| 4 | **[#34227](https://github.com/openai/codex/issues/34227)** — Windows 宠物覆盖层点击区域随时间偏移 | 27 评论。宠物 hit-region 与可视位置逐渐错位，影响交互稳定性。 |
| 5 | **[#32297](https://github.com/openai/codex/issues/32297)** — 桌面内置图像生成自 7 月 9 日更新后反复报网络错误 | 26 评论。属于 Imagen 通道连通性问题，跨多用户复现。 |
| 6 | **[#29639](https://github.com/openai/codex/issues/29639)** — Windows Desktop + WSL 工作区下 Browser Use/Node REPL 失败 | 20 评论。`sandboxCwd` 为 Linux 路径但 desktop 自动注入 Windows `node_repl.exe`，路径语义未映射。 |
| 7 | **[#41790](https://github.com/openai/codex/issues/41790)** — ChatGPT Pro 反复出现 "Selected model is at capacity" | 15 评论。付费用户在常规任务中频繁遭遇容量错误，影响 Pro 体验感知。 |
| 8 | **[#34309](https://github.com/openai/codex/issues/34309)** — Windows 26.715.4045 无法拖动宠物 | 13 评论。从 `26.715.2305` 升级后回归，包括默认宠物在内全部失效。 |
| 9 | **[#29079](https://github.com/openai/codex/issues/29079)** — Windows Desktop 残留 Node/MCP 辅助进程导致内存压力 | 8 评论。疑似子代理或 MCP REPL 调用后未回收，长时间运行后整机变卡。 |
| 10 | **[#20503](https://github.com/openai/codex/issues/20503)** — `codex mcp login` OAuth 不在动态注册中传递 scopes | 4 评论但 **11 👍**。导致 Fastmail 等要求 `scope` 的远程 MCP 无法登录，影响 MCP 生态兼容性。 |

> 补充关注：[#42660](https://github.com/openai/codex/issues/42660) 周配额对账异常、[#31110](https://github.com/openai/codex/issues/31110) Remote Control 在 Cloudflare HTML Challenge 下失败、[#38611](https://github.com/openai/codex/issues/38611) macOS Chrome rollout tracker 在 JSONL 超 V8 string 长度后陷入 160% CPU 循环，均为高严重度问题。

---

## 4. 重要 PR 进展（精选 10 条）

| # | PR | 要点 |
|---|----|------|
| 1 | **[#43120](https://github.com/openai/codex/pull/43120)** — TUI 会话命令加入受管 worktree 创建 | 新增 `/worktree`，并让 `/new`、`/fork` 提供"当前 checkout / 新 worktree"选项，保留可选会话名。 |
| 2 | **[#43113](https://github.com/openai/codex/pull/43113)** — App Server 保存 subagent 与 memory 启用选项 | TUI 的启用提示改为走服务端配置写入，仅作用于新线程，当前线程不变，并上报成功/失败。 |
| 3 | **[#43110](https://github.com/openai/codex/pull/43110)** — 在会话历史中记录 reasoning effort 变更 | 新增默认关闭的 `reasoning_effort_override` 特性，绑定 `use_responses_lite`，写入可信 `configuration_update`。 |
| 4 | **[#43104](https://github.com/openai/codex/pull/43104)** — Guardian 线程上下文迁入 `guardianv2` | 配置 schema 由 `features.guardian_thread_context` 改为 `features.guardianv2.thread_context`，控制同步/异步 Guardian 上下文。 |
| 5 | **[#43097](https://github.com/openai/codex/pull/43097)** — Helper 驱动的实时 WebRTC 会话 API | 新增 `RealtimeWebrtcSession` 与可克隆句柄，覆盖启动、应答协商、音频控制、电平表与错误上报。 |
| 6 | **[#43090](https://github.com/openai/codex/pull/43090)** — voice-host 通过 RTP 发送处理后的麦克风音频 | 将采集流接入出站媒体轨道，保留静音边界并限制陈旧音频。 |
| 7 | **[#43100](https://github.com/openai/codex/pull/43100)** — voice-host 加入有界的入站 Opus RTP | 在上行 track queue 前拦截，限制 64 包 / 2 MiB、单包 64 KiB 上限，避免堆积。 |
| 8 | **[#43079](https://github.com/openai/codex/pull/43079)** — voice helper 支持可选本地音频设备 | 协议层新增 `openDevices` / `setAudioControls`，macOS/Linux/Windows 通过 CPAL 打开默认麦/扬声器（默认静音抑制）。 |
| 9 | **[#43074](https://github.com/openai/codex/pull/43074)** — Apps 弹窗失败时显示可重试错误 | 初始 `/apps` 失败且无缓存时，原"Loading apps..."被替换为通用错误 + `Retry` 按钮。 |
| 10 | **[#43144](https://github.com/openai/codex/pull/43144)** — Windows MSVC Bazel 目标（voice native 库） | 为 x64 / ARM64 增加显式 native 构建、运行时准备与链接目标，需原生 Windows 执行对应架构。 |

> 同期 [#43126](https://github.com/openai/codex/pull/43126)、[#43114](https://github.com/openai/codex/pull/43114)、[#43111](https://github.com/openai/codex/pull/43111)、[#43083](https://github.com/openai/codex/pull/43083) 等 PR 共同构成 voice 助手的 Bazel 构建管线骨架，提示该模块正进入正式可分发的窗口期。

---

## 5. 功能需求趋势

通过对 50 条活跃 Issue 的语义聚类，社区关注度集中在以下方向（按热度排序）：

1. **TUI/CLI 体验增强**：`/rewind` 一体化 checkpoint、worktree 集成、TUI 会话分叉 → Issue #11626 高赞长期居首。
2. **会话历史与持久化**：分页 rollout 丢消息、ordinal 冲突、跨平台历史投影停滞 → #35746 / #41079 / #43124 / #43129 一组相关问题。
3. **Windows Desktop 稳定性**：宠物交互、Computer Use/Edge 桥延迟、插件选择器卡死、首启 15+ 分钟解包 cua_node runtime → #34309 / #34227 / #42790 / #41170 / #42259。
4. **配额与容量治理**：Pro/Plus 用户的 5 小时滚动配额异常消耗、周配额对账、模型容量误报、"按周池消耗"诉求 → #41790 / #42660 / #42912 / #43135。
5. **MCP / OAuth 生态**：`codex mcp login` 缺少 scope 参数、WSL 下 Browser Use Node REPL 失败 → #20503 / #29639。
6. **Voice / 实时通信**：桌面端进入 audio + WebRTC 收尾阶段（见 PR 一览），配套的本地音频设备与 RTP 管线正在落地。
7. **Remote / 跨设备控制**：Android Remote 缺线程、Remote Control Cloudflare 拦截、VS Code 扩展续聊失败 → #43017 / #31110 / #42760 / #40167。

---

## 6. 开发者关注点

- **历史回放可信度**：分页 + ordinal 复用导致"明明 JSONL 里有，但 UI 看不到"的体验黑洞，是 CLI/Desktop 共通的高优先级缺陷。
- **Windows Desktop 已成体验洼地**：宠物、Computer Use、远程控制、插件、首启速度等多个维度同时出现回归或性能问题，且常与 WSL/原生路径混合工作区耦合，调试成本高。
- **付费用户对容量/配额透明度不满**：Plus/Pro 用户对"5 小时窗口"边界、静默消耗、容量误报敏感，呼吁把配额池模式（连续消费周配额）作为可选项 ([#43135](https://github.com/openai/codex/issues/43135))。
- **/rewind 是社区"最重要"待办**：212 👍、41 评论维持热度，开发者希望"代码 + 对话"原子级回滚，以减少调试 agent 行为时的反复重放成本。
- **MCP 生态兼容性正成为差异化指标**：`codex mcp login` 的 scope 参数缺失直接阻断与 Fastmail 等第三方 MCP 互通，反映 OAuth 细节对 MCP 落地至关重要。
- **Voice 功能进入"基础设施可用、UX 待打磨"阶段**：Bazel 构建、WebRTC、RTP、本地设备接入逐个合入，下一阶段关注点会转向延迟、质量监测与产品化入口。

---

*日报由 AI 自动汇总自 GitHub 公开数据，仅供研发团队参考；具体细节请以原文链接为准。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期**: 2026-09-06
**数据来源**: [github.com/google-gemini/gemini-cli](https://github.com/google-gemini/gemini-cli)

---

## 📌 今日速览

今日 Gemini CLI 发布 v0.60.0-nightly 日常构建版本，社区关注度集中在 **子代理（Subagent）行为异常** 与 **Auto Memory 安全加固** 两大方向。多条 P1 级 Bug 涉及子代理错误地将 `MAX_TURNS` 中断上报为 `GOAL` 成功，可能掩盖任务失败；与此同时，多位开发者反馈 `--model gemini-2.5-flash` 被静默改写为 `gemini-3.5-flash`，引发对模型显式选择被覆盖的担忧。

---

## 🚀 版本发布

### [v0.60.0-nightly.20260906.g85aca163f](https://github.com/google-gemini/gemini-cli/compare/v0.60.0-nightly.20250905.g85aca163f...v0.60.0-nightly.20260906.g85aca163f)

自动化 nightly 版本号 bump，由 `gemini-cli-robot` 提交（[#29223](https://github.com/google-gemini/gemini-cli/pull/29223)）。无独立功能变更日志，按惯例整合于主分支。

---

## 🔥 社区热点 Issues

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) — 子代理 MAX_TURNS 后误报 GOAL 成功 ⭐ P1
**13 评论 | 👍 2**
`codebase_investigator` 子代理在达到最大轮次限制后仍返回 `status: "success"`、`Termination Reason: "GOAL"`，隐藏了任务中断的事实。直接影响任务编排的可观测性，是子代理可靠性层面的关键 Bug。

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) — Generalist agent 频繁卡死 ⭐ P1
**8 评论 | 👍 8**
当 Gemini CLI 将任务委派给 generalist agent 时，常驻挂起（如创建文件夹等简单操作最长等待 1 小时）。通过提示禁止使用子代理可绕过。社区点赞数高，反映普遍痛点。

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) — 零依赖 OS 沙箱 + 执行后意图路由  P2
**9 评论 | 👍 1**
提议借助 Gemini 3 模型原生 bash 能力（grep/sed/awk）链式操作，通过零依赖沙箱机制释放模型偏好的执行路径，同时不牺牲安全与 UX。属于较大规模的增强需求。

### 4. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) — AST 感知的文件读取/搜索/映射评估 ⭐ P2
**7 评论 | 👍 1**
EPIC 级议题，评估引入 AST 感知工具（精确读取方法边界、降低 token 噪声、辅助 codebase_investigator）。与 [#22746](https://github.com/google-gemini/gemini-cli/issues/22746)（推荐 tilth/glyph 起点）形成关联路线图。

### 5. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) — 模型未充分利用自定义 skills 与 sub-agents ⭐ P2
**6 评论 | 👍 0**
开发者反馈 Gemini 几乎不会主动调用自定义 skills（如 gradle/git），仅在显式指令下才使用。属于 Agent 行为调优的核心议题。

### 6. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) — Shell 执行完成后卡在 "Waiting input" ⭐ P1
**4 评论 | 👍 3**
简单 CLI 命令执行完毕后，shell 仍保持 "active/awaiting user input" 状态。属于影响日常使用的稳定性问题。

### 7. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) — Wayland 下 browser 子代理失败 ⭐ P1
**4 评论 | 👍 1**
浏览器子代理在 Wayland 环境下报 `Termination Reason: GOAL` 后失败，Linux 桌面用户受影响。

### 8. [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) — browser_agent 会话接管与锁恢复 ⭐ P3
**4 评论 | 👍 0**
当前 BrowserManager 对锁定的浏览器 profile 采用 fail-fast 策略，需要引入自动接管与孤儿进程恢复机制。

### 9. [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) — 符号链接的 agent 文件无法识别 ⭐ P2
**4 评论 | 👍 0**
`~/.gemini/agents/filename.md` 若为符号链接则不会被识别为子代理。常见于用户通过软链接集中管理配置的场景。

### 10. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) — Auto Memory 缺乏确定性脱敏 ⭐ P2（安全）
**5 评论 | 👍 0**
Auto Memory 在提取会话内容时依赖模型在 prompt 中做"事后脱敏"，但内容已进入模型上下文，存在密钥泄露隐患。同时日志可能泄露已有技能路径。属于平台级安全加固议题。

---

## ️ 重要 PR 进展

### 1. [#29163](https://github.com/google-gemini/gemini-cli/pull/29163) — 修复 Git 仓库下认证崩溃 ⭐ P1
`useGitBranchName` 钩子在受限权限环境（如 macOS Seatbelt）下启动时崩溃。修复后 Gemini CLI 能在更多受限环境下正常启动。

### 2. [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) / [#29222](https://github.com/google-gemini/gemini-cli/pull/29222) — 不再静默改写 `gemini-2.5-flash` 选择 ⭐ P1
`isFlashModel()` 使用宽泛的 `endsWith('flash')` 匹配，导致用户显式传入 `--model gemini-2.5-flash` 时被替换为 `gemini-3.5-flash`，在未开通 3.5 Flash GA 的环境下会出现 400 错误。两个 PR 分别从不同分支修复同一问题，值得关注合并冲突。

### 3. [#29125](https://github.com/google-gemini/gemini-cli/pull/29125) — Hook 超时单位修正（秒 → 毫秒） ⭐ P2
Claude Code 的 hook 超时单位为秒（默认 60），而 Gemini CLI 解释为毫秒。`gemini hooks migrate` 直接复制数值导致迁移后超时被错误缩小 60 倍，hook 静默失效。

### 4. [#29124](https://github.com/google-gemini/gemini-cli/pull/29124) — 修正 `SubagentStop` 事件键名 ⭐ P2
`EVENT_MAPPING` 将 Claude Code 的 `SubagentStop`（小写 a）错误映射为 `SubAgentStop`，迁移过程中钩子被静默丢弃。

### 5. [#29126](https://github.com/google-gemini/gemini-cli/pull/29126) — a2a-server 中间件顺序修复 ⭐ P2
`express.json()` 在 `setupRoutes()` 之后挂载，导致 `POST /` 收到 `req.body = undefined`，JSON-RPC 解析失败。修复后 A2A 协议可用。

### 6. [#29195](https://github.com/google-gemini/gemini-cli/pull/29195) — `/resume` 容错非数组 history ⭐ P2
合法 JSON 但 `history` 非数组的 checkpoint 文件曾导致 `/resume resume` 抛出 `TypeError`。修复后降级为空 checkpoint，行为与不可解析文件一致。

### 7. [#29211](https://github.com/google-gemini/gemini-cli/pull/29211) — 避免在 state updater 中调度状态更新 ⭐ P2
`useInputHistoryStore.addInput()` 在 `setCurrentSessionMessages` updater 内部调用了 `setPastSessionMessages` 与 `recalculateHistory`，违反 React updater 纯函数约束。

### 8. [#28968](https://github.com/google-gemini/gemini-cli/pull/28968) — 去除 skills 目录符号链接重复扫描（已合并）⭐ P3
`.gemini` 与 `.agents` 通过 junction/symlink 互链时，扫描器将两个入口重复注册。修复后正确去重，遵循 Open Agent Skills 标准。

### 9. [#28967](https://github.com/google-gemini/gemini-cli/pull/28967) — 修复终端静态刷新清屏问题（已合并）⭐ P2
非 alternate buffer 模式下 `refreshStatic()` 调用 `ansiEscapes.clearTerminal` 导致 Linux 主流终端滚动历史被清除。

### 10. [#28966](https://github.com/google-gemini/gemini-cli/pull/28966) — 修正 `excludeTools` 文档示例（已合并）⭐ P1
`excludeTools` 按工具名精确匹配，原文档示例 `run_shell_command(rm -rf *)` 实际不会排除任何工具，导致用户安全策略形同虚设。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **AST 感知代码工具** | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745)、[#22746](https://github.com/google-gemini/gemini-cli/issues/22746)、[#19561](https://github.com/google-gemini/gemini-cli/issues/19561)（Tactful Extraction） | 🔥 高 |
| **Auto Memory 系统** | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525)、[#26523](https://github.com/google-gemini/gemini-cli/issues/26523)、[#26522](https://github.com/google-gemini/gemini-cli/issues/26522)、[#26516](https://github.com/google-gemini/gemini-cli/issues/26516) | 🔥 高 |
| **子代理可观测性** | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323)、[#21763](https://github.com/google-gemini/gemini-cli/issues/21763)、[#22598](https://github.com/google-gemini/gemini-cli/issues/22598) |  高 |
| **本地 / 持久化子代理** | [#20195](https://github.com/google-gemini/gemini-cli/issues/20195)（Sprint 1） | 中 |
| **任务跟踪系统重构** | [#21000](https://github.com/google-gemini/gemini-cli/issues/21000)、[#18836](https://github.com/google-gemini/gemini-cli/issues/18836)（持久化文件 CRUD） | 中 |
| **终端渲染性能** | [#21924](https://github.com/google-gemini/gemini-cli/issues/21924)（resize 防闪烁 + Ink RenderWorker） | 中 |
| **工具规模管理** | [#24246](https://github.com/google-gemini/gemini-cli/issues/24246)（>128 工具 400 错误） | 中 |
| **Agent 自我认知** | [#21432](https://github.com/google-gemini/gemini-cli/issues/21432)（准确的 CLI flag / hotkey 知识） | 低 |

---

## 💬 开发者关注点

1. **子代理可靠性是最大痛点** — 多条 P1 Bug 集中暴露子代理在终止判定、bug 报告上下文、可观测性（`/chat share` 不含 subagent 轨迹）、Wayland 兼容性等方面的缺陷，开发者对"模型何时算完成"缺乏信任。

2. **模型显式选择被静默覆盖** — `gemini-2.5-flash` 被自动改写为 `gemini-3.5-flash` 引发开发者强烈反弹，反映社区对"配置黑魔法"的零容忍：迁移与默认值应可关闭。

3. **Hook 迁移存在兼容性陷阱** — 单位（秒 vs 毫秒）、事件键名大小写等细节差异导致用户从 Claude Code 迁移后钩子静默失效，文档与迁移工具需对齐。

4. **Auto Memory 安全边界** — 开发者关注"先读后脱敏"的反模式，期待确定性（deterministic）脱敏与可疑 patch 的隔离/告警机制。

5. **Terminal UX 与沙箱冲突** — `useAlternateBuffer=false` 模式下的滚动清空、shell 命令完成后虚假 "Waiting input"、Wayland 浏览器失败等，反映 CLI 在异构终端/桌面环境下的鲁棒性挑战。

6. **Skills/Sub-agents 发现能力不足** — 即使提供了 `.md` 配置，模型也几乎不主动调用，期待更明确的提示或调度逻辑（[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)）。

---

*日报由 AI 自动生成，基于 GitHub 公开数据。数据时点：2026-09-06 (UTC)。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-06**
**数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 📌 今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布，也无新 PR 合并，但社区活跃度依然较高，共 20 条 Issue 被更新，其中 2 条已关闭、18 条保持开放。**今日焦点集中在四类问题**：输入交互体验（队列消息取消、内联补全）、MCP/工具链稳定性（JSON-RPC 序列化、tools/list 刷新）、跨平台兼容性（Windows 沙箱、macOS SSH 剪贴板、Linux 内存泄漏），以及新版本（desktop 2.98.0 / runtime 1.1.15）带来的 worktree 与 CLI 自动升级回归问题。

---

## 🚀 版本发布

*过去 24 小时无新版本发布。*

---

## 🔥 社区热点 Issues

以下为社区反响或技术影响力最值得关注的 10 条 Issue：

### 1. [#1857 允许取消已入队的消息](https://github.com/github/copilot-cli/issues/1857)
- **状态**：OPEN ｜ 👍 28 ｜ 💬 11
- **标签**：`area:input-keyboard`
- **重要性**：今日最高赞 Issue。用户希望通过 `Ctrl+Q` / `Ctrl+Enter` 入队的消息在执行前能够被取消或删除——这是 TUI 工作流中一个长期被忽视但高频使用的痛点。

### 2. [#4728 自动更新破坏 GitHub Copilot 桌面应用捆绑的 CLI](https://github.com/github/copilot-cli/issues/4728)
- **状态**：OPEN
- **标签**：`area:sessions`, `area:installation`
- **重要性**：严重回归问题。终端中运行 `copilot` 会静默覆盖 `copilot.exe`，导致桌面应用无法恢复任何已有会话（"Session unavailable"）。该问题涉及 CLI 与桌面 App 的安装/升级边界。

### 3. [#4734 desktop 2.98.0 / runtime 1.1.15 升级后所有项目会话报 "Worktree missing"](https://github.com/github/copilot-cli/issues/4734)
- **状态**：OPEN
- **标签**：`triage`
- **重要性**：与 #4728 同期出现的另一个升级回归，几乎影响所有 worktree-backed 项目会话，社区反应迅速。

### 4. [#4721 Canvas open_canvas 参数被 CLI 损坏 —— JSON-RPC 序列化 Bug](https://github.com/github/copilot-cli/issues/4721)
- **状态**：OPEN
- **标签**：`area:mcp`, `area:tools`
- **重要性**：模型解析的参数被错误拼接了 `}{}` 后缀，生成畸形 JSON。对扩展生态影响较大，是底层协议层的缺陷。

### 5. [#4731 tools/list 刷新进入刚被取消的服务器后永久剥离该服务器工具](https://github.com/github/copilot-cli/issues/4731)
- **状态**：OPEN
- **标签**：`area:mcp`, `area:tools`
- **重要性**：MCP stdio 服务器的取消与重试时序问题，描述精准，给出了可重现路径，是 MCP 集成稳定性的关键 bug。

### 6. [#4652 Windows 25H2 上 sandbox 不受支持导致命令失败](https://github.com/github/copilot-cli/issues/4652)
- **状态**：OPEN
- **标签**：`triage`
- **重要性**：影响最新 Windows 用户群，错误信息本身提示不清，开发者需补充对主机版本检测的友好引导。

### 7. [#4725 Linux 下 JavaScript 堆内存频繁 OOM](https://github.com/github/copilot-cli/issues/4725)
- **状态**：OPEN
- **标签**：`area:platform-linux`
- **重要性**：长时间会话下反复崩溃（Mark-Compact 阶段 4 GB+），典型内存未回收问题，会显著影响生产/Agent 长任务可靠性。

### 8. [#4724 按模型 Prompt Cache TTL 自动压缩](https://github.com/github/copilot-cli/issues/4724)
- **状态**：OPEN
- **标签**：`area:context-memory`, `area:models`
- **重要性**：高质量功能提案。当前后端模型普遍存在 5 分钟左右的 cache TTL，作者建议在 idle 窗口对齐做 compact，兼顾成本与延迟。

### 9. [#4272 新模型在企业策略下被灰显且无法选择](https://github.com/github/copilot-cli/issues/4272) — **已关闭**
- **状态**：CLOSED
- **标签**：`area:enterprise`, `area:models`
- **重要性**：组织管理员开启策略的引导链路曾经不清晰，目前 Issue 已关闭，意味着文档或设置入口得到修复，是企业用户的好消息。

### 10. [#3498 GitHub Mobile (Android) 远程会话 UI 不渲染](https://github.com/github/copilot-cli/issues/3498)
- **状态**：OPEN ｜ 👍 3
- **标签**：`area:sessions`
- **重要性**：WebSocket 数据正常但 UI 只显示静态文字，长期未解，移动端体验受损。

### 附：另外值得关注的 5 条

| # | 标题 | 标签 | 一句话点评 |
|---|------|------|----------|
| [#4736](https://github.com/github/copilot-cli/issues/4736) | 让 `Ctrl+E` 接受内联补全 | triage | 今日新建，符合 Emacs 风格 TUI 习惯 |
| [#4735](https://github.com/github/copilot-cli/issues/4735) | 工具调用前的助手文本被吞进 "Thought for Ns" | triage | 多段响应被错误折叠为 reasoning，用户看不到 |
| [#4733](https://github.com/github/copilot-cli/issues/4733) | 命中 `max_output_tokens` 时事件丢失 | triage | BYOK 用户受影响，会话断流 |
| [#4551](https://github.com/github/copilot-cli/issues/4551) | macOS 经 SSH 复制到剪贴板失败 | triage | 终端-系统剪贴板桥接问题 |
| [#4722](https://github.com/github/copilot-cli/issues/4722) | 下划线开头文本（如 `_test`）被 Markdown 吞掉 | input-keyboard / terminal-rendering | 小但高频的渲染缺陷 |

---

## 🛠 重要 PR 进展

*过去 24 小时无 PR 更新。*

---

##  功能需求趋势

从 24 小时内更新的 20 条 Issue 中，可以归纳出社区最关注的方向：

1. **输入与键盘交互体验**（3 条）
   - 队列消息可取消（#1857）、`Ctrl+E` 接受补全（#4736）、Markdown 渲染吃掉下划线（#4722）。CLI 的"打字感"仍是高频投诉点。

2. **MCP 工具链稳定性**（3 条）
   - #4731、#4721、#4729 揭示 MCP 协议在取消/重试、参数序列化、工具可用性一致性上的多处隐患。随着 MCP 生态扩展，这块正在成为新的"事故多发地"。

3. **会话管理 / 安装升级回归**（5 条）
   - 桌面 App 2.98.0 / runtime 1.1.15 升级触发 #4728、#4734、#4726；以及移动端 #3498、远程 SSH #4551、会话流式 #4677。**升级路径的健壮性是当前最集中的痛点**。

4. **模型相关体验**（4 条）
   - 企业灰显模型（#4272，已关闭）、GPT-5 mini 行为变化（#4732）、`max_output_tokens` 截断（#4733）、基于 cache TTL 的自动 compact（#4724）。社区正在从"模型可选性"转向"模型调用边界管理"。

5. **跨平台可靠性**（3 条）
   - Windows 沙箱（#4652）、macOS SSH 剪贴板（#4551）、Linux 内存 OOM（#4725）。三大平台各有 1-2 个长期未解决的硬伤。

6. **Agent / 子代理协同**（2 条）
   - 内置 research agent 调用不存在的 `github/get_me`（#4729）、本地插件自定义 agent 吞掉 `--interactive` 启动 prompt（#4723）。

---

## 🧑‍💻 开发者关注点

综合 Issue 反馈，开发者社区当前的核心痛点集中在以下五个方面：

- **🔄 升级回归风险**：CLI 自动升级与桌面应用捆绑版本之间的边界混乱（#4728、#4734），一次升级即可让所有会话失效，对生产环境极为不友好。
- **🧩 MCP 协议成熟度**：JSON-RPC 序列化、tools/list 刷新时序、agent 提示词与可用工具不一致（#4721、#4731、#4729），说明协议层仍有较薄弱的环节。
- **⌨️ TUI 输入/渲染细节**：从队列管理、快捷键到 Markdown 解析（#1857、#4736、#4722），看似小问题却在"日均上千次"的命令行场景中被显著放大。
- ** 长会话稳定性**：Linux 上的 OOM（#4725）、`max_output_tokens` 截断（#4733）、cache TTL 与 compact 时机（#4724）共同表明：**长时间运行的 Agent 会话缺乏资源与上下文的精细化调度**。
- ** 企业/策略可发现性**：模型被灰显但启用入口不直观（#4272），提示产品在"组织策略 → 用户引导"的链路上仍有缺口，关闭速度说明团队响应积极，值得保持关注。

> 💡 **建议**：如果你正在使用 CLI + 桌面 App 组合，**升级前先暂停自动更新**（关注 #4728、#4734 进展）；BYOK 用户可关注 #4733 的修复进度，以避免输出截断丢事件。

---

*日报由 AI 自动生成，基于 github.com/github/copilot-cli 公开数据。如需追踪特定 Issue，请点击对应链接订阅通知。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-06**

---

##  今日速览

过去 24 小时 Kimi CLI 仓库整体活跃度较低，无新版本发布，无新 PR 提交。Issue 方面仅 2 条更新值得关注：一条围绕第三方 Coding Agent（Claude Code）集成文档的增强建议被关闭关闭，另一条新开的 VS Code 扩展字符渲染/复制丢失 Bug 报告进入待处理状态。

---

## 🚀 版本发布

无（过去 24 小时内未发布新版本）

---

## 🔥 社区热点 Issues

> ⚠️ **说明**：过去 24 小时仅有 2 条 Issue 更新，远少于日常 10 条的体量。以下呈现全部可用数据。

### 1. [#1210 [CLOSED] 在第三方 Coding Agent 中使用文档完善](https://github.com/MoonshotAI/kimi-cli/issues/1210)

- **作者**：bosens-China ｜ **创建**：2026-02-23 ｜ **更新**：2026-09-05
- **状态**：已关闭
- **关注度**：👍 0 ｜ 💬 1
- **重要性**：用户反映 Claude Code 中使用 Kimi K2 Thinking 模型的切换说明过于简略，且每次需要 export 环境变量的方式不够便捷，希望参考智谱等第三方文档提供更顺滑的接入方式。
- **社区反应**：讨论度不高，但属于实际开发者集成体验问题，关闭可能意味着已合并入文档计划或转向其他渠道跟进。

### 2. [#2635 [OPEN] VS Code 扩展流式文本渲染/复制丢失字符](https://github.com/MoonshotAI/kimi-cli/issues/2635)

- **作者**：TserenTserenov ｜ **创建**：2026-09-05 ｜ **更新**：2026-09-05
- **状态**：待处理
- **关注度**：👍 0 ｜ 💬 0
- **重要性**：用户报告 Kimi Code VS Code 扩展聊天面板中助手消息渲染时偶尔丢失单个字符，但底层模型输出与 session wire log 一致，定位为渲染层或面板复制层 Bug。属于影响生产可用性的渲染缺陷，值得优先排查。
- **社区反应**：新开 Issue，尚未形成讨论，但问题描述清晰、复现路径明确，便于后续排查。

---

## 🛠 重要 PR 进展

无（过去 24 小时内无 PR 更新）

---

## 📈 功能需求趋势

虽然 24 小时样本量小，但两条 Issue 共同指向两个明确的需求方向：

| 趋势方向 | 具体体现 | 优先级判断 |
|---------|---------|-----------|
| **IDE/编辑器扩展体验** | VS Code 扩展渲染 Bug（#2635）反映扩展层稳定性仍需打磨 | 🔴 高（直接影响日常使用） |
| **第三方 Coding Agent 集成** | Claude Code 中 K2 Thinking 切换体验改进（#1210） | 🟡 中（影响跨生态用户） |
| **文档/上手成本** | 用户希望文档更详尽、减少手动环境配置 | 🟡 中（影响新用户转化） |

**核心洞察**：社区关注点正在从"基础命令行能力"向"与主流 IDE、第三方 Agent 框架无缝衔接"迁移，Kimi CLI 的下一步增长点很可能在于**跨工具链的兼容性与稳定性**。

---

##  开发者关注点

从仅有的两条 Issue 可以提炼出以下高频痛点：

1. **扩展层稳定性不足**
   - VS Code 扩展的流式输出渲染/复制存在字符丢失，影响用户对回复完整性的信任。
   - 建议：加强扩展端与 CLI 核心的协议一致性测试，建立跨平台的渲染回归测试。

2. **集成摩擦成本偏高**
   - 在 Claude Code 等第三方 Coding Agent 中使用 Kimi 模型，需手动 export 环境变量，切换 K2 Thinking 模型的方式也缺乏直观指引。
   - 建议：提供开箱即用的配置脚本或 CLI 子命令（如 `kimi init --agent claude-code`），参考智谱、Anthropic 等竞品的最佳实践。

3. **文档深度有待加强**
   - 用户主动呼吁补充"第三方 Agent 集成"章节的细节，反映官方文档对高级使用场景覆盖不足。
   - 建议：增设"集成场景"专栏，覆盖 Claude Code、Cursor、Cline 等主流工具。

---

> 📊 **数据备注**：本期日报基于过去 24 小时的 GitHub 公开数据生成，样本量较少（2 Issues / 0 PRs / 0 Releases）。建议结合周报或月度趋势分析以获取更全面的社区动态画像。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报

**报告日期：2026-09-06** | 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)

---

## 📌 今日速览

过去 24 小时，OpenCode 仓库无新版本发布，但社区活跃度依然高位运行——共 50 条 Issue 和 50 条 PR 更新。今日焦点集中在 **1.17.x 版本升级引发的回归问题**（资源占用飙升、Session 历史丢失、Desktop 与 CLI 数据不同步），同时 **Bedrock 凭据发现、ACP v2 协议草案、以及 Session 时间线共享机制** 等基础设施层面的改进正逐步推进。

---

## 🚀 版本发布

**今日无新版本发布。** 社区讨论仍围绕 1.17.11 → 1.17.14 的升级回归问题（详见下方 Issues）。

---

## 🔥 社区热点 Issues

按评论数与社区影响排序，挑选出 10 条最值得关注：

### 1. [#35009](https://github.com/anomalyco/opencode/issues/35009) — 1.17.11 → 1.17.13 升级后资源占用飙升（10 评论）⭐
**重要性：** 🔴 高 | 👍 2
用户反馈从 1.17.11 升级到 1.17.13 后，RSS 内存占用飙升至约 1GB，CPU 占用达 22%，进程内存峰值异常增长。这是当前讨论最多的稳定性问题。

### 2. [#34030](https://github.com/anomalyco/opencode/issues/34030) — OpenCode 无法调用 GitHub Copilot 企业版第三方模型（9 评论）⭐
**重要性：** 🟠 中-高 | 👍 2
企业用户无法使用公司在 GitHub Copilot 平台中添加的第三方模型（即使已通过 oh-my-opencode 插件），影响企业级部署。

### 3. [#15315](https://github.com/anomalyco/opencode/issues/15315) — Copilot Gemini 模型结构化工具调用失败（8 评论）⭐
**重要性：** 🟠 中 | 👍 1
定位到根因：`ProviderTransform.schema` 中的 `sanitizeGemini` 处理逻辑有缺陷，Gemini 模型输出纯文本工具调用（如 `[tool_call: ...]`）而非结构化格式。

### 4. [#25430](https://github.com/anomalyco/opencode/issues/25430) — `format.json_schema.retryCount` 参数被忽略（7 评论）⭐
**重要性：** 🟠 中 | 👍 0
API 暴露的 `retryCount` 参数实际未被后端使用，当模型输出 JSON 不符合 schema 时立即失败，无法按预期重试。

### 5. [#28695](https://github.com/anomalyco/opencode/issues/28695) — Session 生命周期 Context Hooks（6 评论）⭐
**重要性：** 🟢 中 | 👍 2
基于历史请求 #5409（SessionStart hook）等，构建持久化插件状态的 Session 生命周期 hook 体系，属核心扩展能力。

### 6. [#35690](https://github.com/anomalyco/opencode/issues/35690) — 更新后 Session 历史消失（6 评论）⭐
**重要性：** 🔴 高 | 👍 0
从 1.17.13 升级到 1.17.14 后，已积累数周的 Session 在 `opencode --port 36996` 启动时全部不可见，数据疑似被新版本隔离。

### 7. [#33102](https://github.com/anomalyco/opencode/issues/33102) — OpenCode Go 订阅孤立/无法在 Dashboard 管理（6 评论）⭐
**重要性：** 🟠 中 | 👍 1
用户信用卡被反复扣费，但 Dashboard 看不到对应订阅条目，无法正常管理。涉及计费/账户体系对齐问题。

### 8. [#31916](https://github.com/anomalyco/opencode/issues/31916) — TUI 在大文件内容时挂起（5 评论）⭐
**重要性：** 🟠 中 | 👍 1
Windows 11 + 1.17.3 下，TUI 在处理 150+ 行 write/bash 工具输出时无限卡在 "Preparing to write..."；小内容（1-2 行）正常。无界 diff 渲染是根因。

### 9. [#35741](https://github.com/anomalyco/opencode/issues/35741) — WebChat 中 LLM 幻觉用户回复（5 评论）⭐
**重要性：** 🟠 中 | 👍 1
在 Agent/build 模式下，LLM 自己回答自己的提问（"用户选择了选项1"）并继续流程，造成对话状态错乱。

### 10. [#35538](https://github.com/anomalyco/opencode/issues/35538) — Jira MCP Markdown 附件被当作不支持类型省略（4 评论）⭐
**重要性：** 🟡 中-低 | 👍 0
`atlassian_jira_download_attachments` 返回的 `.md` 附件被当作 binary 资源省略，模型无法读取。需扩展 MCP 附件类型白名单。

> **补充关注**：[#35784](https://github.com/anomalyco/opencode/issues/35784)、[#35750](https://github.com/anomalyco/opencode/issues/35750)、[#34676](https://github.com/anomalyco/opencode/issues/34676)、[#32046](https://github.com/anomalyco/opencode/issues/32046)、[#29071](https://github.com/anomalyco/opencode/issues/29071) 同样值得关注，分别涉及 GLM-5.2 读文件循环、升级后隐藏旧 session、DeepSeek V4 Flash 的 DSML/XML 工具调用格式问题、Windows 大 diff 渲染冻结、Desktop 与 CLI Session 列表不同步。

---

## 🛠️ 重要 PR 进展

### 1. [#44524](https://github.com/anomalyco/opencode/pull/44524) — feat(acp): ACP v2 草案支持（OPEN）
按官方迁移指南实现 [ACP v2 draft](https://agentclientprotocol.com/announcements/acp-v2-draft) 规范，为后续 IDE/编辑器生态对接打好基础。

### 2. [#47293](https://github.com/anomalyco/opencode/pull/47293) — feat(core): 控制台 Web 搜索（OPEN）
从 Console v2 配置加载可选的 hosted web-search descriptor，校验端点所有权后代理搜索请求。涉及端点身份校验与重定向拒绝，安全性考量充分。

### 3. [#47555](https://github.com/anomalyco/opencode/pull/47555) — fix(tui): 停止获取占位符 session id（OPEN）
修复 `opencode --continue` 在 `OPENCODE_FAST_BOOT=1` 下用 `sessionID: "dummy"` 提前挂载路由导致 server 400 的问题。

### 4. [#47554](https://github.com/anomalyco/opencode/pull/47554) — fix(core): 允许读取许可的 skill 资源（OPEN）
修复已加载 skill 在读取其依赖资源时被无关的外部目录审批打断的问题，对符号链接 `~/.opencode/skill` 场景做了覆盖。

### 5. [#47552](https://github.com/anomalyco/opencode/pull/47552) — feat(core): 通过 Timelines 共享 Session 历史（OPEN）
引入时间线支持的 Session 历史机制：分支引用冻结前缀，提交型撤销选择新时间线，读取保持增量。是 Session 管理架构级演进。

### 6. [#47536](https://github.com/anomalyco/opencode/pull/47536) — feat(core): Astra 异步工具与实时 Steering（OPEN）
在 v2 session runner 中加入 Astra Responses 异步函数调用与纯文本实时 steering，inbox 更新持久化。

### 7. [#47549](https://github.com/anomalyco/opencode/pull/47549) — fix(tui): 使用 renderer frames 进行动画（OPEN）
用 renderer 帧回调替换 `createAnimatable` 的独立 16ms 定时器；暴露 `targetFps`/`maxFps` 配置。对动画稳定性与功耗都有帮助。

### 8. [#47548](https://github.com/anomalyco/opencode/pull/47548) — feat(core): 在 provider 插件中发现 Bedrock 凭据（OPEN）
跟进 #47436，让原生 Bedrock 路由支持 AWS 默认凭据链。当前 `AISDKNative.map` 会强制替换 AI SDK Bedrock 包，导致插件 hook 失效。

### 9. [#45590](https://github.com/anomalyco/opencode/pull/45590) — fix(session-ui): 消息时间戳显示日期（OPEN）
修复旧消息只显示创建时间的体验问题，session-ui 现在会展示完整日期。

### 10. [#47527](https://github.com/anomalyco/opencode/pull/47527) — fix(core): 提升使用统计响应速度（OPEN）
`/stats` 在历史较大时会卡在 "Gathering your stats…" 数十秒；实测 20.78s。优化消息 JSON 读取与 SQL 聚合，使统计快速响应。

> **已合入的修复**：[#47436](https://github.com/anomalyco/opencode/pull/47436)（Bedrock 默认凭据链）、[#47213](https://github.com/anomalyco/opencode/pull/47213)（Copilot 请求携带 session ID）、[#47306](https://github.com/anomalyco/opencode/pull/47306)（GitLab 推理变体）、[#46912](https://github.com/anomalyco/opencode/pull/46912)（管道 JSON 截断修复）、[#47441](https://github.com/anomalyco/opencode/pull/47441)（worktree 库存按需加载）等 PR 已关闭。

---

## 📈 功能需求趋势

从今日活跃 Issues 提炼出的社区重点关注方向：

| 方向 | 代表 Issue | 关注热度 |
|---|---|---|
| **Session 管理 & 数据持久化** | #35690、#35750、#29071、#35703、#47552 | 🔴 极高 |
| **第三方 Provider / 企业模型集成** | #34030、#35798、#25430、#15315、#34676 | 🔴 高 |
| **TUI / 渲染性能** | #31916、#32046、#35611、#35717 | 🟠 高 |
| **插件 & Hook 体系扩展** | #28695、#35742、#35728 | 🟠 中-高 |
| **IDE 集成 / Desktop 体验** | #35751（侧边栏浏览器预览）、#35703（统一目录） | 🟡 中 |
| **新模型支持** | GLM-5.2、DeepSeek V4 Flash/Pro、GPT-5.5、Claude thinking、Minimax M3 | 🟡 中 |
| **计费 / 订阅 / Dashboard** | #33102、#35667 | 🟡 中 |
| **自动化能力** | #35653（延迟发送）、#35728（消息注入） | 🟢 低-中 |

---

## 💡 开发者关注点

通过今日数据可观察到以下核心痛点：

### 1. 升级回归问题集中爆发
1.17.x 系列频繁更新带来了若干 **破坏性变更**：
- 资源占用飙升（#35009）
- Session 历史消失（#35690、#35750）
- Desktop/CLI Session 不互通（#29071）
- 升级路径中 `path` 列未回填导致旧 session 隐藏

**建议：** 升级前备份 `opencode.db`；关注迁移日志。

### 2. Provider 兼容性矩阵亟需统一
- Copilot 第三方模型、Copilot Gemini、GitLab 推理变体、OpenAI 兼容后端、自定义 Bedrock 等多条线索
- 工具调用格式、reasoning effort、temperature forwarding、chat/completions vs responses 接口差异大
- 反映在 PR 中表现为大量 [contributor] provider fix 与模型适配

### 3. Session/历史管理的根本性架构改造在进行中
PR #47552 引入 timeline-backed session history 是 **里程碑级变更**，未来将支持分支、合并、时间线穿梭等高级能力——可显著改善当前的多端不一致与升级丢失问题。

### 4. TUI/渲染层仍有性能天花板
"Preparing to write..."、大 diff 卡顿、Go 模型在 v1.17.14 后 Windows 卡顿等问题，提示前端 diff/流式渲染需要更严格的性能基线。

### 5. 生态协议升级窗口
ACP v2 draft 推进中（#44524），加上 Console v2 Web 搜索（#47293）、Astra async tools（#47536），OpenCode 正在 **协议化、平台化**——这对长期生态发展是正向信号。

---

*日报由 GitHub 公开数据自动整理生成。如需特定维度（如特定 Provider、特定版本段）深度分析，请告知。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-06

## 📌 今日速览

今日发布了 **v0.85.1 补丁版本**，主要修复了 0.85.0 中 `@earendil-works/pi-server` 依赖未声明导致全局安装失败的问题，并正式接入 OpenAI **GPT-6 Astra** 模型。与此同时，0.85.0/0.85.1 暴露出一系列打包与运行时问题（subagent 无法启动、Vercel Gateway 路由失效、Anthropic 1h 缓存计费错误等），社区正密集修复。架构层面，`mitsuhiko` 推进的「mid-conversation system messages」重构（#9116/#9117）正在为后续的 prompt/tool 变更提供更干净的承载方式。

---

## 🚀 版本发布

### v0.85.1（今日）

- **新模型接入**：[GPT-6 Astra](https://github.com/earendil-works/pi/blob/v0.85.1/packages/coding-agent/docs/providers.md#api-keys) 可通过 OpenAI API Key 与 OpenAI Codex 订阅使用。
- **打包修复**：针对 0.85.0 中 `dist/cli.js` 静态导入 `@earendil-works/pi-server` 但未声明依赖的问题（[#9132](https://github.com/earendil-works/pi/issues/9132)）进行修复。
- **历史 PR 累积**：合入 #9214（mid-sentence 技能/模板调用）、#9215（自定义 footer 零行高）、#9208（RPC 示例 flag 修正）等。

---

## 🔥 社区热点 Issues

1. **[#7547](https://github.com/earendil-works/pi/issues/7547) — Windows 使用现状调研**  
   作者 `petrroll`，52 条评论。项目维护者主动发起的「Windows 用户分布与痛点」摸底，讨论 Pi 在 Windows 上的运行方式（WSL、原生 cmd、PowerShell 等），用于决定哪些问题由核心修复、哪些外包给扩展。👍2

2. **[#5023](https://github.com/earendil-works/pi/issues/5023) — 终端无故回滚到开头**  
   19 条评论的「偶发滚动跳转」长期 bug，模型工作时随机跳到 session 顶部再快速滚到底部，干扰阅读与调试。👍3

3. **[#8896](https://github.com/earendil-works/pi/issues/8896) — `/export` HTML 静默丢失 `display:false` 上下文**  
   `ackalker` 指出 export 误用 TUI 专属 `display` 标志，把发往模型的 custom message 一并过滤，导致导出的会话与模型实际看到的上下文不一致，是潜在的「幻觉溯源」风险。

4. **[#6300](https://github.com/earendil-works/pi/issues/6300) — Windows TUI 输入框每按一键就重绘一行**  
   `polemotionkor-arch` 报告 Windows 10 + cmd/Windows Terminal 下 TUI 输入框的严重渲染 bug，影响最基本的使用体验。

5. **[#8834](https://github.com/earendil-works/pi/issues/8834) — `pi.namespace` 包命名空间提案（已关闭）**  
   `maskshell` 提出的「技能与 prompt 模板统一命名空间」方案被关闭（no-action），但讨论中衍生出多中端调用能力的诉求。

6. **[#8684](https://github.com/earendil-works/pi/issues/8684) — `PI_OFFLINE` 静默关闭所有 provider 模型发现**  
   `mxr576` 指出环境变量实际作用域与文档严重不符，应仅禁用启动网络请求，但当前会禁用整个会话的模型目录发现，破坏离线/受限网络场景的可用性。

7. **[#9132](https://github.com/earendil-works/pi/issues/9132) — 0.85.0 打包缺依赖**  
   `kleb` 报告的发布事故，引发 #9170/#9172/#9218 一连串修复 PR，点赞 5，是今日推动最直接的修复链。

8. **[#7317](https://github.com/earendil-works/pi/issues/7317) — OpenAI Responses 有状态续接与服务端压缩**  
   长期请求：使用 `previous_response_id` 与 `/responses/compact` 减少长会话的工具调用回放开销。

9. **[#9212](https://github.com/earendil-works/pi/issues/9212) — Sonnet-5 via Gateway：13% edit 工具调用被截断为 `edits:[{}]`**  
   `vieko` 一周内统计 134 次 edit 调用中 18 次 schema 失败，仅在 `vercel-ai-gateway` 复现，fable 通道为 0%。结合 #9211 与 #9210 暴露的 Gateway 一系列问题。

10. **[#6451](https://github.com/earendil-works/pi/issues/6451) — `packages/agent` 会话投影与压缩清理**  
    维护者 `badlogic` 亲自开的重构项：消除 `buildContext()` 与压缩逻辑中重复的 entry-to-context 投影通道。

---

## 🛠️ 重要 PR 进展

1. **[#9116](https://github.com/earendil-works/pi/pull/9116) — `feat(ai)`：新增 mid-conversation system messages**  
   `mitsuhiko` 主推的架构重构第一层。解决扩展在会话中途修改工具/提示时强行重写顶层 prompt 的问题，让 pi-agent-core 与 coding-agent 支持新 role 类型不破坏现有行为。

2. **[#9117](https://github.com/earendil-works/pi/pull/9117) — `feat(coding-agent)`：将 prompt 与工具变更以 system delta 投递**  
   上述重构的第二层（依赖 #9116），将工具列表与系统提示改为增量下发，避免每次请求重复传送完整 prompt。

3. **[#9170](https://github.com/earendil-works/pi/pull/9170) — 声明 `pi-server` 运行时依赖**  
   直接修复 #9132，纠正 0.85.0 缺失的 `@earendil-works/pi-server` 依赖。

4. **[#9172](https://github.com/earendil-works/pi/pull/9172) — 防止破损的包根再次发布**  
   基于 #9170 的后续，给发布流水线加护栏。

5. **[#9214](https://github.com/earendil-works/pi/pull/9214) — 技能与 prompt 模板支持句子中段调用**  
   `FORRESTAL-G` 实现 #8457，让 `/skill:name` 与 `/template` 都能在消息中间展开，与现有 `/template` 第一行展开行为对齐。

6. **[#9163](https://github.com/earendil-works/pi/pull/9163) — 简化 TUI 剪贴板处理**  
   `mitsuhiko` 将原生剪贴板库解耦，便于 NixOS 等无 GUI 依赖环境构建。

7. **[#9137](https://github.com/earendil-works/pi/pull/9137) — 添加 Nix flake 支持（WIP）**  
   `mitsuhiko` 个人仓库的 WIP，呼应 #7547 中 Windows/Nix 用户呼声。

8. **[#9096](https://github.com/earendil-works/pi/pull/9096) — 新增 Meta 提供商与 Muse 订阅 OAuth**  
   解决 #7543，内置 Meta 订阅登录；文档化了「每日 identity-token 重签」与「流式实际为整段 burst」两个反直觉行为。

9. **[#7610](https://github.com/earendil-works/pi/pull/7610) — 新增 LLM Gateway / LLM Gateway DevPass 提供商**  
   替换被秒关的 #7480，由 LLM Gateway 团队直接贡献。

10. **[#8734](https://github.com/earendil-works/pi/pull/8734) — OpenAI Responses 兼容提供商的顶层 `instructions`**  
    关闭 #8388，新增 `systemPromptFormat` 兼容性选项，把动态系统提示移动到顶层 `instructions` 而不再重复塞入 `input`。

11. **[#9179](https://github.com/earendil-works/pi/pull/9179) — 压缩期间拒绝树导航**  
    解决压缩与树形会话导航并发竞争导致的会话错乱。

12. **[#9182](https://github.com/earendil-works/pi/pull/9182) — 在失效扩展 runner 上跳过会话事件**  
    关闭 #9181，修复 `/new` 与 Ctrl+C 退出竞态时的双重 teardown 导致的扩展运行时悬挂。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue / PR | 社区热度 |
|---|---|---|
| **Windows / 跨平台兼容** | #7547（52 评论）、#6300、#9169、#9137（Nix） | 🔥🔥🔥 |
| **新模型与提供商接入** | GPT-6 Astra（v0.85.1）、Meta/Muse #9096、LLM Gateway #7610、Requesty #5473 | 🔥🔥🔥 |
| **架构重构：mid-conversation system messages** | #9116 / #9117 / #8998 | 🔥🔥 |
| **OpenAI Responses 服务端能力** | #7317（续接）、#6676（compact）、#9113（async tool calling）、#8734（top-level instructions） | 🔥 |
| **Vercel AI Gateway 兼容性** | #9210（1h 缓存计费）、#9211（routing inert）、#9212（模型截断） | 🔥 |
| **包管理与发布工程** | #9132、#9170、#9172、#9218、#8834（namespace） | 🔥🔥 |
| **TUI 体验改进** | #9163（剪贴板）、#9166（Alt 加速滚动）、#9215（零行 footer）、#7970（滚动指示器）、#9199（菜单一致性） | 🔥 |
| **扩展 API 增强** | #8791（暴露 `ModelRuntime`）、#8457（mid-sentence 技能，已实现） | 🔥 |
| **离线/受限网络场景** | #8684（`PI_OFFLINE`）、#8896（export 完整性） |  |

---

##  开发者关注点

1. **打包与发布链路是当前最大痛点**  
   0.85.0→0.85.1 在 24 小时内集中爆发 4 个相关 Issue（#9132、#9218、#9170、#9172），全部围绕 `@earendil-works/pi-server` / `@earendil-works/pi-client` 缺失声明。社区已经用「立刻修 + 加护栏」双 PR 模式回应，但提示发布流程亟需引入未声明依赖扫描。

2. **Windows 用户长期被低估**  
   仅 #7547 一条调研帖就 52 条评论，加上 #6300 输入框重绘、#9169 WezTerm 全屏图片错位、#5200 IME 候选窗口错位，开发者明确希望核心工程投入更多 Windows 原生场景的回归测试。

3. **Vercel AI Gateway 成为新问题高发地**  
   一日内连开 #9210、#9211、#9212 三条 Issue，集中在缓存 TTL 计费、routing 配置不生效、Sonnet-5 输出截断。建议在文档中标注 Gateway 通道的限制，或在 pi-ai 层做协议对齐。

4. **架构演进信号明显**  
   `mitsuhiko` 主导的 #9116/#9117 拆分 #8998 是一次系统级的会话模型重构，意味着 Pi 正在为「动态工具 / 动态 prompt」扩展场景铺设正式通路，未来扩展作者可用更原生方式介入会话。

5. **离线与可复现性受重视**  
   #8684 关于 `PI_OFFLINE` 实际作用域与文档脱节，以及 #8896 关于 `/export` 与模型上下文不一致，反映出企业/合规场景下「Pi 看到的内容必须可回放、可审计」的强诉求。

---

*日报基于 2026-09-06 过去 24 小时的 GitHub 公开数据整理。数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) → 镜像仓库 earendil-works/pi。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：2026-09-06**

---

##  今日速览

今日社区动态以 **v0.23.x 版本的密集发布与踩坑修复** 为主线，v0.23.1-preview.0 在一天内连续三次触发 `quality` 作业失败，暴露出 release.yml 工作流的冗余步骤问题；与此同时，**Web Shell 的导出体积优化**（从 19.5 MB 压缩到仅含只读 transcript 所需依赖）成为多个高优先级 issue 的讨论核心，涉及 mermaid 渲染、daemon hook runtime 残留等多个细节。**后台守护进程（daemon/serve）的稳定性** 问题集中爆发，包括会话回收逻辑、后台 shell 输出丢失、reconnect 时的传输洪水等。

---

## 🚀 版本发布

| 版本 | 类型 | 主要变更 |
|------|------|----------|
| [v0.23.1-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.1-preview.0) | Preview | feat(web-shell): 可视化管理动态工作流运行；perf(web-shell): 派生会话工作流项目 |
| [v0.23.0-nightly.20260905.0c945a6136](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260905.0c945a6136) | Nightly | 同上 web-shell 工作流改进 |
| [v0.23.0-nightly.20260905.e3d26283e6](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.0-nightly.20260905.e3d26283e6) | Nightly | 同上 |

> ⚠️ **注意**：三个新版本中，preview.0 在 24 小时内触发 3 次 release 失败，nightly 版本也有 1 次失败，均与 CI 质量门禁有关。

---

## 🔥 社区热点 Issues

### 1. [#11031 — 停止在导出的 HTML 中嵌入 Web Shell 运行时](https://github.com/QwenLM/qwen-code/issues/11031) `P1`
当前 `/export html` 会把整个 React + Web Shell 运行时内联进每个导出文件，**空会话的 HTML 也有约 19.5 MB**。作者提出通过 unpkg CDN + SRI 固定哈希的方式外置运行时，相关 #9812 已合入，但 #11091 指出 mermaid (~6 MB) 仍被扁平化进渲染器。该问题是 Web Shell 导出生态优化的核心。

### 2. [#11091 — Mermaid 仍被扁平化进导出的 transcript 渲染器](https://github.com/QwenLM/qwen-code/issues/11091) `P2` ⭐6
紧接 #9812 的后续问题。即使外置了渲染器入口，mermaid (~6 MB) 仍被静态展开进 transcript 渲染器，需要进一步剥离。这条 issue 反映了社区对导出体积优化的持续关注。

### 3. [#5823 — /loop cron 静默触发，模型无法列出或停止自己的定时任务](https://github.com/QwenLM/qwen-code/issues/5823) `P2` ⭐6 **已关闭**
开发者丢了一次"测试性"的 cron 后，回来发现每次开新会话都会自动开干。这是会话管理与后台自动化的 UX 灾难，揭示 cron 任务缺乏可见性和可控性。

### 4. [#8227 — Windows 上 @-file 读取丢失 O_NOFOLLOW 与 dev/ino 校验](https://github.com/QwenLM/qwen-code/issues/8227) `P2` 6 **已关闭**
跟随 #7206 的安全加固。Windows 平台无 `O_NOFOLLOW`，现有的符号链接/TOCTOU 保护实质较弱且缺乏测试。这条 issue 是安全补丁的典型案例。

### 5. [#10780 — serve 重连洪水重放整个历史记录](https://github.com/QwenLM/qwen-code/issues/10780) `P1` ⭐4 **已关闭**
长生命周期的 `qwen serve` 守护会话（数万到数十万 token 历史）每次客户端重连都会产生数 MB 的回放流量，挤爆 ACP NDJSON 传输通道，导致不相关会话卡死或断开。

### 6. [#5883 — 提案：将 web-shell/VSCode webview/desktop 的聊天面板统一到 web-shell](https://github.com/QwenLM/qwen-code/issues/5883) `Feature` ⭐4 👍1
跨平台的 UI 一致性提案：把消息流和输入框统一到 web-shell，是 qqqys 关于 Web Shell 战略整合的关键讨论。

### 7. [#11119 — serve 后台 shell 输出与唤醒通知被静默丢弃](https://github.com/QwenLM/qwen-code/issues/11119) `P1` ⭐3
daemon 化的 Web Shell 会话中，启动一个后台 shell 后输出与唤醒通知在会话 runtime 回收时直接消失，导致会话卡死。这是后台自动化稳定性的严重缺陷。

### 8. [#10879 — hk4 作为发布主机却仍携带共享 ecs-qwen 标签](https://github.com/QwenLM/qwen-code/issues/10879) `P1` ⭐4
release.yml 把 8 个验证作业钉到 hk4 host 的专用 label 上，但该 host 仍持有 `ecs-qwen` 共享 label，导致发布与 PR CI 互相抢占资源。

### 9. [#10904 — E2E cron-interactive nightly 在 30s 触发超时上抖动](https://github.com/QwenLM/qwen-code/issues/10904) `P2` ⭐3
集成测试 3 个用例中有 2 个间歇性 30s 超时，且 `continue-on-error: true` 把红色结果吞掉，让发布流水线对此失去感知。

### 10. [#11118 — 正在做 cron/goal/monitor 的会话永远无法被回收](https://github.com/QwenLM/qwen-code/issues/11118) `P2` ⭐3
daemon 与子进程对"忙"的两套定义不一致，导致持有会话永远无法被回收。这与 #11120 PR 配套修复。

---

## 🛠️ 重要 PR 进展

### 1. [#11120 — 限定并诊断永远无法成功的会话回收](https://github.com/QwenLM/qwen-code/pull/11120) `Open`
doudouOUC 提出：不做"让它可回收"，而是 **限定 + 诊断**。让失败可见、可记录，避免 daemon 无休止地重试关闭。这是 #11118 的官方修复路径。

### 2. [#11038 — 缩小导出的 transcript 渲染器至只读所需](https://github.com/QwenLM/qwen-code/pull/11038) `Open`
直接从 `WebShellTranscript` 的 facade 切断到 App/daemon providers 的依赖，仅保留只读 transcript 真正需要的代码，是 #11031 主线的核心实现。

### 3. [#10938 — 让 Session Workflow 的依赖可导航、降低其装饰噪音](https://github.com/QwenLM/qwen-code/pull/10938) `Open`
关掉 #8583 留下的导航与文档缺口，并对 plan DAG 与 inspector 装饰做一轮设计走查。**计划 DAG 主视图改为以"步骤"为主而非"状态"。**

### 4. [#11086 — 把扩展按 workspace runtime 限定作用域](https://github.com/QwenLM/qwen-code/pull/11086) `Open`
让全局扩展目录在每个 workspace 选定的 runtime 下可用，对扩展状态做调和，并暴露 workspace 限定的 daemon/SDK 访问。直接影响扩展管理、composer 添加菜单与 `@` 引用。

### 5. [#11080 — 用 PR 上下文与责任人丰富延迟跟踪 issue](https://github.com/QwenLM/qwen-code/pull/11080) `Open`
改写 `upsert-deferred-issue.sh`：原本每 PR 一份固定标题与模板体的延迟问题，现增加 PR 上下文与责任人字段，方便维护者跟进。

### 6. [#10906 — 在 Web Shell 显示 shell 与 monitor 任务输出](https://github.com/QwenLM/qwen-code/pull/10906) `Open`
把 monitor 的 stdout/stderr 与现有 shell 捕获一起持久化，daemon 暴露一个由 live-session-owner 限定的端点，返回脱敏后的尾部输出。直接回应 #11119 类问题。

### 7. [#11090 — 让用户铸造的 controller token 驱动无逐消息审核的会话](https://github.com/QwenLM/qwen-code/pull/11090) `Open`
入站闸门原本仅允许同 review 类的两个会话直发，对无 review 类的发送方一律拦截；该 PR 引入用户铸造的 controller token，在保留防陌生人能力的同时释放合法场景。

### 8. [#11134 — 给瞬时全绿的 macOS E2E 分片死亡增加一次重试](https://github.com/QwenLM/qwen-code/pull/11134) `Open`
仿照 #10572 给 Linux `sandbox:none` 增加的预算门控重试机制，macOS E2E 也享有同样一次重试。

### 9. [#10962 — 把浏览器授权的本地目录桥接到会话](https://github.com/QwenLM/qwen-code/pull/10962) `Open`
当 daemon 跑在云盒/容器时，agent 看不见开发机的文件系统。该 PR 让浏览器侧用户把本地目录"上传桥"到一个会话，扩展 agent 的可达范围。

### 10. [#10221 — 增加散文执行审计与对立框架审计](https://github.com/QwenLM/qwen-code/pull/10221) `Open`
补齐 #9655 复盘（#9707 提案 3 和 4）剩余的两个审查视角，替代 #9717，纳入 review 名册与门禁。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 关注度 |
|------|----------------|--------|
| **Web Shell 整合与一致性** | #5883、#10938、#10906、#11086 | 🔥🔥🔥 |
| **导出/HTML 体积优化** | #11031、#11091、#11038、#11142 | 🔥🔥 |
| **daemon/serve 稳定性** | #10780、#11118、#11119、#11120、#11123 | 🔥🔥🔥 |
| **CI/CD 与发布工程** | #10879、#10904、#11109、#11134、#10858 | 🔥🔥 |
| **多 agent / Agent View** | #10148、#11086 | 🔥🔥 |
| **后台自动化（cron/monitor）** | #5823、#11119、#10904 | 🔥🔥 |
| **IDE 集成（IDEA/VSCode）** | #11141、#5883 | 🔥 |
| **新模型支持** | #6019（`/model --compaction`）、#5823 | 🔥 |
| **浏览器-本地文件桥** | #10962 | 🔥 |
| **审查质量（prose/counter-frame audit）** | #10221、#9071 | 🔥 |

---

## 💬 开发者关注点

1. **导出文件"巨型化"是 blocker 级别的体验问题**：19.5 MB 的空 HTML 会话让分享与归档几乎不可行，社区正分多条线拆解（外置运行时、剔除 mermaid、剥离 daemon runtime）。

2. **daemon 长会话的可靠性焦虑**：从 #10780 的重连洪水、#11119 的后台输出丢失到 #11118 的回收死锁，开发者明显感觉到 `qwen serve` 在长生命周期下的边界条件尚未完全收敛。`/loop` 与 cron 的可见性问题（#5823）也指向同一个根本症结——**后台任务的可见性、可控性、可观测性都不足**。

3. **CI 流水线与发布工程的脆弱性**：v0.23.1-preview.0 一天三次 `quality` 失败、release.yml 重复劳动（#11109）、hk4 host 资源抢占（#10879）、cron 集成测试超时被吞错（#10904）——这些问题让发布频率和信心双受冲击。

4. **Windows 平台的差距**：#8227 揭示 Windows 下安全原语缺失导致 `@`-file 读取保护变弱，测试覆盖也不足，社区呼吁跨平台一致性。

5. **性能"小细节但乘以海量调用点"**：#10865 指出 session workflow 投影每次渲染被算三遍；#10892 指出 `vi.waitFor` 的 1s 默认超时在 2047 个调用点上失效；这类问题提示开发者重视"被多次调用的慢路径"。

6. **协作/治理流程改进**：#11080（延迟跟踪 issue 携带责任人）、#11134（macOS E2E 重试）、#10758（光栅化无关断言）说明项目正在把工程治理做细，从"修 bug"转向"降低 bug 成本

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报

**日期：2026-09-06** | **数据源：github.com/Hmbown/DeepSeek-TUI**

> ⚠️ 项目已正式更名为 **Codewhale**（来自 Shannon Labs），legacy npm 包 `deepseek-tui` 已停止维护，本日报统一以 Codewhale 指代该项目。

---

## 一、今日速览

v0.9.12 正式发布后，社区进入"发布后修缮期"——主线问题集中在 Windows computer-use 后端的输入可靠性、Fleet 菜单的可用性、以及 MCP 启动可观测性；同时 Rust 工程化（EPIC-005 crate 拆解、FEAT-023 命令形状重构）和文档中文化（#5482）也在持续推进。

---

## 二、版本发布

### 🚀 v0.9.12（已发布）

Codewhale 0.9.12 是品牌重塑后的首个稳定版本，主要更新：

- **品牌切换**：`codewhale` 命令行、npm 包与 release-asset 名称统一为小写技术标识符，legacy `deepseek-tui` 包废弃。
- **模型目录**：Muse Spark 1.3 reasoning effort、Codex XHigh/Ultra 选择行补齐（[#5853](https://github.com/Hmbown/Codewhale/issues/5853)）。
- **品牌资产**：全新 whale 标 + 文字标识（[#5850](https://github.com/Hmbown/Codewhale/issues/5850)）。

但发布流程暴露了一个发布闸门缺陷：`codewhale-tui` tarball 漏掉 16 个 computer-use 内嵌文件，crates.io 上传至 18 个 crate 后才被发现，相关 fix 已在 [#5890](https://github.com/Hmbown/Codewhale/pull/5890)、[#5893](https://github.com/Hmbown/Codewhale/pull/5893) 中修复。

---

## 三、社区热点 Issues（精选 10 条）

| # | Issue | 状态 | 重要性 |
|---|-------|------|--------|
| [#5573](https://github.com/Hmbown/Codewhale/issues/5573) | v0.9.12 milestone tracker | OPEN | 项目"中枢仪表盘"，24 条评论，跟踪所有 slice、PR、gate |
| [#5316](https://github.com/Hmbown/Codewhale/issues/5316) | EPIC-005 TUI Crate Decomposition | OPEN | 顶层架构 EPIC，22 条评论，决定 TUI crate 拆解的子任务树 |
| [#5909](https://github.com/Hmbown/Codewhale/issues/5909) | `write_file` 静默将 CRLF 转为 LF | OPEN | 数据完整性 bug，`edit_file` 与 `write_file` 行为不一致 |
| [#5908](https://github.com/Hmbown/Codewhale/issues/5908) | Win32 computer-use 输入"假成功" | OPEN | Windows 后端 3 个独立缺陷，PowerShell 失败仍报 `action_sent:true` |
| [#5906](https://github.com/Hmbown/Codewhale/issues/5906) | Fleet write claim 永久占用 | OPEN | 父回合取消的子 agent 仍持有写锁，同 worktree 后续 spawn 全被拒 |
| [#5904](https://github.com/Hmbown/Codewhale/issues/5904) | Web fetch JS-shell 200 抽取失败 | OPEN | 与缓存状态相关，Explore/scout agent 间歇性误报 URL 不可抓取 |
| [#5901](https://github.com/Hmbown/Codewhale/issues/5901) | `/theme` 选取器列出自定义主题 | OPEN | 自定义主题已存在但未在 picker 中暴露，体验断裂 |
| [#5888](https://github.com/Hmbown/Codewhale/issues/5888) | Fleet 菜单选项过多 | OPEN | Founder dogfooding 直接反馈，"选项太多找不到下一步" |
| [#5887](https://github.com/Hmbown/Codewhale/issues/5887) | MCP 启动卡在"20 connecting" | OPEN | 缺乏进度反馈，用户无法判断是慢、停滞还是计数陈旧 |
| [#2323](https://github.com/Hmbown/Codewhale/issues/2323) | 未适配中文输入法 | OPEN | 长期未解决，影响中文用户体验（含拼音在弹窗中误输入） |

**关闭亮点**：#5769 网络错误致引擎停止、#5820 Ollama 32K 模型输入预算坍塌至 1024、#5863/#5864 ACP `session/list`/`session/load` 缺失均已在 0.9.12 周期内闭环。

---

## 四、重要 PR 进展（精选 10 条）

| # | PR | 内容 |
|---|----|----|
| [#5911](https://github.com/Hmbown/Codewhale/pull/5911) | **fix(tools)**: `write_file` 保留 CRLF 行结束 | 修复 #5909，让 `write_file` 与 `edit_file` 在行尾风格处理上对齐 |
| [#5910](https://github.com/Hmbown/Codewhale/pull/5910) | **fix(computer-use)**: Win32 输入如实失败 + 鼠标按下修复 | 修复 #5908 / #5896，加载 User32 类型、修正按钮按下逻辑 |
| [#5905](https://github.com/Hmbown/Codewhale/pull/5905) | **feat(tui)**: 精简 Fleet 菜单 | 关闭 #5888，`/fleet` 顶层 14→5 个动词，深层动作进 `/fleet help` |
| [#5907](https://github.com/Hmbown/Codewhale/pull/5907) | **feat(tui)**: `/theme` 列出自定义主题 | 解决 #5901，扫描 `$CODEWHALE_HOME/themes/` 并保留 `custom:<name>` 选择器 |
| [#5899](https://github.com/Hmbown/Codewhale/pull/5899) | **fix(version)**: 移除 published crate 的 `(dev)` 标记 | 修复 #5891，正式发布的二进制不再看起来像未发布 checkout |
| [#5903](https://github.com/Hmbown/Codewhale/pull/5903) | **fix(computer-use)**: Win32 PowerShell 失败如实上报 | 关闭 #5896，三处独立修复（type 加载、`withUser32` 返回值、按下路径） |
| [#5897](https://github.com/Hmbown/Codewhale/pull/5897) | **fix(mcp)**: 启动期按服务器逐个更新进度 | 修复 #5887，每个 MCP 连接任务完成即消费、引擎立即可见 |
| [#5902](https://github.com/Hmbown/Codewhale/pull/5902) | **refactor(tui)**: session 生命周期采用命令形状（FEAT-023） | EPIC-005 落地切片，覆盖 `/branch` `/compact` `/fork` `/load` `/new` 等 9 个命令 |
| [#5900](https://github.com/Hmbown/Codewhale/pull/5900) | **fix**: 让 shell 提示与实际执行对齐 | 模型可见的小写 bash 工具与 Bash handler 改为从 `ShellDispatcher` 派生实际解释器 |
| [#5893](https://github.com/Hmbown/Codewhale/pull/5893) | **fix(release)**: 上传前验证全部 crate tarball | 关闭发布闸门漏洞，对全部 21 个待发布 crate 先做一次 dry-run |

**已合入并关闭**：#5895（HarmonyOS 临时文件清理）、#5890（computer-use 内嵌资源归位）、#5889（首页终端预览紧凑化）、#5886（网站记录 v0.9.12 发布事实）。

---

## 五、功能需求趋势

从过去 24 小时的 Issues 提炼，社区关注度集中在六大方向：

1. **🪟 Windows computer-use 可靠性**（#5908、#5896、#5898、#5903）—— 多条 issue + PR 联动，PowerShell 输入失败上报与 Worker idle timeout 测试稳定性是当下最热的回归主题。
2. ** UX 信息架构简化**（#5888、#5887、#5901）—— Fleet 菜单、MCP 进度、主题选取器都指向"工具变多后入口需要分层"。
3. ** 模型与 Provider 适配**（#5820 Ollama、#5868 OpenCode Go header、#5853 Muse Spark 1.3）—— 多 provider 的协议细节与目录发现仍在补齐。
4. **🎙️ 多模态输入**（#5846 语音输入）—— 端侧 STT 默认 + API key 回退成为下一个差异化方向。
5. ** 工程化与发布**（#5891 `(dev)` 标记、#5892/5893 tarball 验证、EPIC-005 crate 拆解）—— crates.io 发布链路的可信度被反复打磨。
6. **🌏 文档本地化**（#5482 中文文档 EPIC）—— 中文用户群增长驱动 docs 全量本地化议题。

---

## 六、开发者关注点

汇总 Issues 与 PR 中的痛点信号：

- **🔇 沉默失败最致命**：Windows 输入报错仍返回 `action_sent:true`、Web fetch JS-shell 200 失败无重试、Parked agent 永久持锁——社区对"工具说成功但其实没做"的容忍度极低，要求失败必须如实上报。
- **📊 长任务可观测性差**：MCP 启动卡在"20 connecting"、Worker idle timeout 间歇性红，缺乏进度与确定性反馈是高频抱怨。
- **⚖️ 行为一致性**：同一条路径在 `write_file` vs `edit_file`、modeler vs engine、PowerShell vs Bash 上行为不一致（行尾、reasoning effort、shell 提示）会迅速演变为 issue。
- **🚀 发布闸门薄弱**：v0.9.12 暴露的 crates.io tarball 漏文件、版本号 `(dev)` 等问题，正在通过 #5893/5899 等 PR 重建"先验证、后上传"的发布契约。
- ** TUI 工程化**：EPIC-005 + FEAT-023 表明项目正从单一 TUI crate 向多 crate workspace + 命令形状过渡，关注点在于"重构期不破坏生产文件路径"。

---

*日报生成时间：2026-09-06 · 数据范围：过去 24 小时活跃 Issues/PRs*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*