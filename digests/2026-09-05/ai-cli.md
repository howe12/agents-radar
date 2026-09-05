# AI CLI 工具社区动态日报 2026-09-05

> 生成时间: 2026-09-05 02:26 UTC | 覆盖工具: 9 个

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
**日期：2026-09-05｜数据范围：过去 24 小时 GitHub 动态**

---

## 一、生态全景

当前 AI CLI 工具赛道呈现 **"多模型融合 + 跨平台扩张 + 安全优先架构"** 三大主线。以 GPT-6 Astra 为代表的新一代旗舰模型在 24 小时内被 OpenAI Codex、GitHub Copilot CLI、OpenCode 等多家工具同步接入，"新模型首发支持"已演变为竞争标配；与此同时，**Windows/WSL 兼容性** 与 **长会话稳定性（OOM/CPU 飙升）** 几乎在所有主流工具的 Issue 列表中占据高位，成为制约生产化落地的最大工程债。在架构层面，**沙箱边界（MXC/OS 级/Namespace）**、**MCP 协议健壮性** 与 **Subagent 可观测性** 形成新的差异化护城河——OpenCode、Pi 等 Provider-agnostic 工具凭借快速迭代与开放生态正在赢得开发者心智，而 Gemini CLI、Copilot CLI 等深度绑定单一生态的工具则通过 IDE 集成与企业级安全能力维持阵地。

---

## 二、各工具活跃度对比

> 注：Claude Code 与 Qwen Code 今日数据为空，未列入下表。

| 工具 | 新版本 | Issues | PRs | 综合活跃度 | 关键特征 |
|------|--------|--------|-----|-----------|----------|
| **OpenAI Codex** | 2（rust-v0.153.3/4） | 10+ 热点 + 多条 P1 | 10+ 重要 PR + 亮点数条 | 🔥🔥🔥🔥🔥 | 24h 双版本迭代，Astra 联动密集 |
| **GitHub Copilot CLI** | 3+（v1.0.83/84-0/84-1） | 39 活跃 / Top 10 展示 | 1 外部 / 主要走 Release | 🔥🔥🔥🔥 | v1.0.81+ 集中爆发回归报告 |
| **OpenCode** | 2（v1.18.28/29） | 10 热点 | 10+ 重要 + kitlangton 6 连击 | 🔥🔥🔥🔥 | 新模型首发 + 本地化 + 性能优化 |
| **Pi** | 1（v0.85.0，⚠️ 打包缺陷） | 10 热点 | 10 重要 PR | 🔥🔥🔥🔥 | 紧急修复 + 扩展 API 增强 |
| **Gemini CLI** | 1（v0.60.0 nightly） | 10 热点（含 4 条 P1） | 12 重要 PR | 🔥🔥🔥 | 沙箱加固 + Subagent 可靠性 |
| **Kimi Code CLI** | 0 | 6（5 已 CLOSED） | 1（OPEN） | 🔵🔵 | 集中清理积压 Issue |
| **DeepSeek TUI** | 0 | 5（4 有效） | 10+（多为依赖升级） | 🔵🔵 | TUI 体验修复 + Dependabot 节奏 |

**活跃度评级**：🔴 高强度迭代｜🟡 稳定维护｜🔵 日常维护

---

## 三、共同关注的功能方向

| 方向 | 涉及工具 | 核心诉求 |
|------|----------|----------|
| **🧠 GPT-6 Astra 新模型首发与下放** | Codex、Copilot CLI、OpenCode | 模型可见性、Bedrock 路由、Pro 账号下放滞后（#42853、#47363） |
| **🪟 Windows / WSL 兼容与稳定性** | Codex、Copilot CLI、Kimi | WSL 项目序列化、WebSocket 代理、键位冲突、Pet 多屏 DPI |
| **🔌 MCP 协议生态健壮性** | Codex、Copilot CLI、OpenCode、Kimi | 握手兼容性（#4525）、chroma-mcp 回归（#4647）、临时消失（#42907）、Windows symlink agent 加载 |
| **🛡️ 沙箱与执行边界安全** | Codex、OpenCode、Copilot CLI、Gemini CLI | 原生 MXC 沙箱（#42841）、NTFS 8.3 旁路（#29116）、配置 ACL 校验、env 注入防护 |
| **⏳ 长会话稳定性与资源治理** | Copilot CLI、Pi、OpenCode | V8 堆 OOM（#4699）、Mac CPU 飙升 50-110%（#7730）、Bad Gateway 死循环（#35148） |
| **🤖 Subagent / Agent 可观测性** | Gemini CLI、Pi、Copilot CLI | MAX_TURNS 误报 success（#22323）、Generalist 频繁挂死（#21409）、轨迹可分享化 |
| **📜 系统提示与上下文开销治理** | Copilot CLI、OpenCode | 可裁剪 system prompt（#2627）、按 Agent 控 reasoning effort（#2904）、自动压缩阈值配置 |
| **🔒 隐私与默认安全姿态** | OpenCode、Copilot CLI | 默认 sharing 关闭（#17188）、ACP 自动批准回归（#4537）、自动更新覆盖宿主（#4728） |
| **🎨 TUI 交互细节打磨** | 多数工具 | Tab 补全追加空格（#5593）、全屏滚轮慢 3 倍（#9052）、Markdown 反引号丢失、Todo 历史污染（#5871） |

---

## 四、差异化定位分析

| 工具 | 生态绑定 | 核心定位 | 技术路线特征 |
|------|----------|----------|--------------|
| **OpenAI Codex** | OpenAI 深度绑定 | 多模型 × 跨平台企业级 CLI | Rust 实现，Guardian 审查链 + 上下文压缩保留 + MXC 沙箱 |
| **GitHub Copilot CLI** | Microsoft / GitHub | IDE 集成 + Windows 桌面 | Windows 11 任务栏集成、MCP OAuth CIMD、Agent YAML frontmatter 调优 |
| **Gemini CLI** | Google 深度绑定 | Gemini 3 原生能力 + AST 工具链 | 容器沙箱隔离 settings、强制 envelope 元数据验证、PR Generation 自动评估 |
| **OpenCode** | **Provider-agnostic** | 隐私优先 × 多供应商 | 本地语义索引（transcript recall）、OAuth client_credentials 自动续签、LSP TTL/LRU |
| **Pi** | **Provider-agnostic** | 性能与扩展 API 旗舰 | Monorepo（pi-ai / coding-agent）、中段 system message、剪贴板纯轻量化、NixOS 友好 |
| **Kimi Code CLI** | MoonshotAI 深度绑定 | 中文市场 × Coding 场景 | Hooks 通知系统、Skills 管理面板、Windows 键位适配 |
| **DeepSeek TUI** | DeepSeek + 本地模型 | TUI 体验 × 本地 Ollama | Rust 分配器可选、路由窗口自动推导、OpenCode Go/Zen 协议适配 |
| **Claude Code / Qwen Code** | Anthropic / Alibaba | 单一生态旗舰 | 今日数据空缺，待补充 |

**横向洞察**：Provider-agnostic 工具（OpenCode、Pi）凭借 **多供应商 OAuth 自动化、扩展 API 开放性** 正在侵蚀绑定型工具的开发者基本盘；而绑定型工具则以 **IDE 集成深度、企业级安全（Windows 任务栏、CIMD、ACP）** 维持差异化。

---

## 五、社区热度与成熟度

### 🔥 强度迭代期（每日多版本、外部贡献活跃）

- **OpenAI Codex**：24h 内 0.153.3/4 连续发布，Astra 接入与 Windows 沙箱同步推进。
- **GitHub Copilot CLI**：v1.0.83 → v1.0.84 三版本连发，但同时进入"回归暴露期"（v1.0.81+ 多条 MCP/ACP/BYOK 兼容性连锁问题）。
- **OpenCode**：v1.18.28/29 两版本，重点优化冷启动延迟（背景发现延迟 + 插件并行加载 + LSP LRU）。
- **Pi**：v0.85.0 引入打包缺陷导致 fresh install 失败，催生 #9170/#9172 紧急修复 PR；扩展 API（hook / message queue / label scope）快速演进。

### 🟡 稳定成熟期（节奏稳定，P1 治理为主）

- **Gemini CLI**：nightly 节奏稳定，沙箱与安全加固是主线，4 条 P1 Bug 持续追踪。
- **DeepSeek TUI**：TUI 体验修复 + Dependabot 节奏，本地 Ollama 32K 窗口坍塌为当前最热 Bug。

### 🔵 维护消化期（Issue 集中清理，PR 稀疏）

- **Kimi Code CLI**：24h 无版本发布，6 条 Issue 中 5 条集中关闭，处于积压反馈消化阶段。

### 📊 成熟度梯度
> **企业级旗舰**（Copilot CLI、Codex、Gemini CLI）> **Provider-agnostic 新锐**（OpenCode、Pi）> **中文市场垂直**（Kimi、DeepSeek TUI）> **生态单一型**（Claude Code、Qwen Code，数据待补）

---

## 六、值得关注的趋势信号

### 🎯 1. **"新模型首发支持"成为竞争基线**
GPT-6 Astra 在 24h 内被三家工具同步接入（Codex、Copilot CLI、OpenCode），但 Pro 账号下放滞后、Windows 模型选择器缺失等"发布链路一致性"问题暴露，提示 **"模型发布 → 客户端 → 订阅层级 → 路由"** 链路需要更严格的端到端校验。

### 🎯 2. **Subagent 可靠性进入"系统级挑战"**
Gemini CLI 的 `MAX_TURNS` 误报（#22323，13 评论）、Generalist 挂死（#21409，8 👍）、Kimi 的 ESC 无法终止子 Agent（#1315）—— 多工具同步暴露 Subagent 状态管理缺陷，**这是 Agent 走向生产可用的核心瓶颈**，建议优先跟踪 PR #42903（保留 TUI 问题状态）和 PR #42900（根回合身份）。

### 🎯 3. **MCP 协议成为生态枢纽的"双刃剑"**
MCP 在 v1.0.81+ 给 Copilot CLI 带来 chroma-mcp 兼容性回归（#4647）、#4525 双协议握手冲突；Codex 出现 Windows 自定义远程 MCP 临时消失（#42907）；Kimi 单点 MCP 超时拖垮整个 CLI（#1316）。**MCP 集成质量正成为衡量工具成熟度的关键指标**，建议关注 PR #29215（envelope 元数据验证）和 PR #5877（rmcp 升级）。

### 🎯 4. **长会话资源治理成"生产化阻碍"**
Copilot CLI 的 V8 4 GiB OOM（#4699）、Pi 的 Mac CPU 50-110% 飙升（#7730）、OpenCode 的 Bad Gateway 死循环（#35148）—— 长任务场景下，**内存管理、流式空闲 watchdog、自动压缩阈值配置** 必须并行演进。OpenCode 的 PR #47392（LSP LRU）、Copilot CLI 的 PR #4724（基于缓存 TTL 的空闲压缩）值得关注。

### 🎯

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

**数据周期**：截止 2026-09-05  
**数据源**：[anthropics/skills](https://github.com/anthropics/skills) 仓库 50 条热门 PR + 50 条热门 Issue

---

## 1. 热门 Skills 排行

> 注：PR 列表按综合关注度排序，所有展示的 PR 当前均为 **OPEN** 状态，反映社区最强烈的合并诉求。

### 🥇 #1298 — 修复 skill-creator 核心评测工具
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)
- **作者**：MartinCajiao  
- **功能**：修复 `run_eval.py` 始终返回 `recall=0%` 的致命缺陷，并解决 Windows 流读取、触发检测、并行 worker 等问题
- **讨论热点**：直接影响所有 skill description 优化循环，"正在对着噪声调优"，属于**生态基础设施级 bug**，与 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 条评论）联动，10+ 用户独立复现
- **状态**：OPEN · 关键阻塞性修复

### 🥈 #514 — document-typography（文档排版质量控制）
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)
- **作者**：PGTBoos  
- **功能**：防止 AI 生成文档中的孤立词换行、寡妇段落、编号错位等排版问题
- **讨论热点**：触达"Claude 生成文档的通用痛点"，用户极少主动要求良好排版，但每次输出都会受影响
- **状态**：OPEN

### 🥉 #1628 — Hivemind（零成本多 Agent 编排）
- **链接**：[PR #1628](https://github.com/anthropics/skills/pull/1628)
- **作者**：Hanishchow  
- **功能**：将机械工作下放给运行在免费模型上的无头 opencode worker，Claude Code 仍负责规划/审核/合并
- **讨论热点**：精准命中"昂贵模型的上下文是稀缺资源"这一核心洞察，体现社区对**成本优化型工作流**的强烈兴趣
- **状态**：OPEN

###  #486 — ODT（OpenDocument 文本技能）
- **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)
- **作者**：GitHubNewbie0  
- **功能**：创建、填充、读取、转换 OpenDocument 格式文件（.odt/.ods）
- **讨论热点**：补齐 LibreOffice/ISO 标准办公文档支持，与 [#514](https://github.com/anthropics/skills/pull/514) 共同推动文档生成能力多元化
- **状态**：OPEN

###  #210 — frontend-design 改进
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)
- **作者**：justinwetch  
- **功能**：提升 frontend-design skill 的清晰度、可执行性与内在一致性，确保每个指令 Claude 都能在单轮对话中执行
- **讨论热点**：反映社区对**skill 描述质量决定执行效果**的反思
- **状态**：OPEN

###  #83 — skill-quality-analyzer & skill-security-analyzer
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)
- **作者**：eovidiu  
- **功能**：新增两个 meta skill，从 5 维度评估 skill 质量、提供安全分析
- **讨论热点**：与 Issue [#492](https://github.com/anthropics/skills/issues/492) 的信任边界问题高度呼应，体现"skill 自身也需要被审计"的元需求
- **状态**：OPEN

###  #1615 — scnet-hpc（高性能计算集群）
- **链接**：[PR #1615](https://github.com/anthropics/skills/pull/1615)
- **作者**：lql341  
- **功能**：基于 profile 的 SSH + Slurm 工作流，操作 SCNet HPC 集群
- **讨论热点**：科学计算/HPC 场景的代表性 PR，体现 skill 生态向**垂直行业**渗透
- **状态**：OPEN

###  #1367 — self-audit（输出自审计）
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)
- **作者**：YuhaoLin2005  
- **功能**：交付前先机械校验文件存在性，再按"损伤严重度优先级"做四维推理质量审查
- **讨论热点**：与 Issue [#1385](https://github.com/anthropics/skills/issues/1385) 的"推理质量门禁管线"形成配套
- **状态**：OPEN

---

## 2. 社区需求趋势（按 Issue 评论数）

| 排名 | Issue | 评论数 | 核心诉求 | 类别 |
|---|---|---|---|---|
| 1 | [#492](https://github.com/anthropics/skills/issues/492) | **43** | `anthropic/` 命名空间下社区 skill 冒充官方，存在信任边界漏洞 | 🔒 **安全/信任** |
| 2 | [#228](https://github.com/anthropics/skills/issues/228) | **16** | 推动 Claude.ai 企业级组织内 skill 共享 | 🏢 **协作/分发** |
| 3 | [#556](https://github.com/anthropics/skills/issues/556) | **12** | `run_eval.py` 触发率 0%，skill-creator 工具链不可用 | 🛠 **工具链可靠** |
| 4 | [#62](https://github.com/anthropics/skills/issues/62) | **10** | 用户自定义 skill 消失/出错 | 💾 **数据持久化** |
| 5 | [#1329](https://github.com/anthropics/skills/issues/1329) | **9** | 提案 compact-memory：用符号化压缩 agent 状态 | 🧠 **Agent 状态** |
| 6 | [#202](https://github.com/anthropics/skills/issues/202) | **8** | skill-creator 文档需按最佳实践重写 | 📚 **最佳实践** |
| 7 | [#412](https://github.com/anthropics/skills/issues/412) | **6** | 提案 agent-governance：AI agent 系统的安全治理 |  **Agent 治理** |
| 8 | [#189](https://github.com/anthropics/skills/issues/189) | **6** | document-skills 与 example-skills 插件内容重复 | 📦 **分发去重** |
| 9 | [#1487](https://github.com/anthropics/skills/issues/1487) | **4** | `claude-api` skill 单次注入 ~156k tokens，撑爆上下文 |  **Token 效率** |
| 10 | [#1390](https://github.com/anthropics/skills/issues/1390) | **4** | mcp-builder 的 evaluation.py 静默伪造工具错误 | 🧪 **评测正确性** |
| 11 | [#1385](https://github.com/anthropics/skills/issues/1385) | **4** | 提案推理质量门禁管线（预校准→对抗评审→交付校验） | ✅ **质量门禁** |
| 12 | [#1175](https://github.com/anthropics/skills/issues/1175) | **4** | SharePoint 文档场景下 skill 的安全与上下文顾虑 | 🔐 **企业集成** |
| 13 | [#29](https://github.com/anthropics/skills/issues/29) | **4** | AWS Bedrock 平台兼容性 | ☁️ **跨平台** |
| 14 | [#16](https://github.com/anthropics/skills/issues/16) | **4** | 将 skill 暴露为 MCP，统一 AI 软件打包协议 | 🔌 **协议互操作** |

**趋势聚类**：
- **安全/信任/治理**（#492, #412, #1175）—— 单一最高优先级诉求
- **工具链质量与评测正确性**（#556, #1390, #202）—— skill-creator 是公认薄弱环节
- **企业级协作与分发**（#228, #189, #16）—— 解决"怎么给团队/给生态用"
- **上下文效率与 Agent 状态管理**（#1487, #1329）—— 长期 agent 痛点
- **跨平台与企业系统集成**（#29, #1175）—— Bedrock / SharePoint / ODT

---

## 3. 高潜力待合并 Skills（评论活跃 · 未合并）

| Skill | PR | 关键看点 | 预计影响 |
|---|---|---|---|
| **Hivemind** | [#1628](https://github.com/anthropics/skills/pull/1628) | 零成本多 Agent 编排，"贵模型做规划，便宜模型做执行" | 重新定义 skill 成本模型 |
| **document-typography** | [#514](https://github.com/anthropics/skills/pull/514) | 解决所有 AI 生成文档的排版问题 | 全场景通用，立即受益 |
| **ODT** | [#486](https://github.com/anthropics/skills/pull/486) | 补齐开源办公文档格式支持 | 与 docx/pdf 形成完整办公套件 |
| **self-audit** | [#1367](https://github.com/anthropics/skills/pull/1367) | 输出交付前的"质量门禁" | 配合 #1385 形成完整质保 |
| **scnet-hpc** | [#1615](https://github.com/anthropics/skills/pull/1615) | HPC/科学计算垂直行业 | skill 行业化标杆 |
| **testing-patterns** | [#723](https://github.com/anthropics/skills/pull/723) | 覆盖单元/组件/E2E/契约全栈测试 | 软件工程刚需 |
| **ServiceNow 平台技能** | [#568](https://github.com/anthropics/skills/pull/568) | 覆盖 ITSM/ITOM/FSM/SecOps 等 8 大模块 | 企业 SaaS 集成样板 |
| **skill-quality/security-analyzer** | [#83](https://github.com/anthropics/skills/pull/83) | 直接回应 #492 的信任问题 | 元 skill，治理基础设施 |

> 此外 [`skill-creator` 的多个 Windows 修复 PR](https://github.com/anthropics/skills/pull/1298)（[#1099](https://github.com/anthropics/skills/pull/1099), [#1050](https://github.com/anthropics/skills/pull/1050)）正同时争夺合并窗口，需官方协调解决重复工作。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"让 Skills 生态本身可信、可治理、可规模化"——即在疯狂扩张 skill 数量（ODT/HPC/ServiceNow/Hivemind/typography）的同时，命名空间信任边界（#492, 43 评论）、skill-creator 工具链可靠性（#556/#1390, 多 PR 抢修）和上下文效率（#1487）三大基础设施问题已成为生态能否走向企业级的最大瓶颈。**

---

*报告基于 anthropics/skills 仓库公开数据生成（截止 2026-09-05），所有 PR 链接可直接跳转 GitHub 查看最新进展。*

---



</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-05**

---

## 📌 今日速览

今日 Codex 仓库围绕 **GPT-6-Astra 新模型上线** 与 **Windows/WSL 兼容性** 两条主线密集迭代：rust-v0.153.3/0.153.4 在 24 小时内连续发布，将 Astra 接入 Amazon Bedrock 并设为默认模型；同时大量 PR 集中于 TUI 异步问题交互、Guardian 上下文保护与 Windows 原生沙箱，显示出产品正在快速走向跨平台、多模型与高安全性的下一阶段。Windows 用户反馈的 WSL、模型选择器缺失、Pet 桌面宠物等问题依旧是社区最热的痛点。

---

## 🚀 版本发布

### rust-v0.153.4 — Bug Fixes
- 修复 Astra 模型在内置模型选择器中的可见性，并在未显式配置模型时将其设为默认。([#42874](https://github.com/openai/codex/pull/42874))
- 限定 Astra 的异步问题提示，仅在 `functions.request_user_input_async` 可用时才启用。([#42878](https://github.com/openai/codex/pull/42878))

### rust-v0.153.3 — New Features
- 在 Amazon Bedrock（Mantle 和 Runtime 全球/美国路由）的模型选择器中新增 **GPT-6-Astra**。([#42805](https://github.com/openai/codex/pull/42805))
- 修正 Astra 异步澄清问题的提示，正确使用支持的工具并识别其仅接受文本输入。([#42809](https://github.com/openai/codex/pull/42809))

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 重要性 |
|---|---|---|---|
| 1 | [#28969](https://github.com/openai/codex/issues/28969) — 添加配置项禁用 60 秒自动解题 | 💬86 / 👍204 | **本期最热**。影响所有 CLI 用户，控制权与可预测性诉求强烈，呼声最高 |
| 2 | [#25178](https://github.com/openai/codex/issues/25178) — Windows 10 22H2 截图调用失败 | 💬40 / 👍19 | Computer Use 关键路径在老版本 Windows 上系统性崩溃，影响桌面代理落地 |
| 3 | [#41290](https://github.com/openai/codex/issues/41290) — 切换至 WSL 后项目无法创建/删除 | 💬33 / 👍26 | Windows + WSL 是国内/企业用户的核心组合，连续两周内多次复现 |
| 4 | [#41463](https://github.com/openai/codex/issues/41463) — WSL 项目创建失败：`AbsolutePathBuf` 缺 base path | 💬26 / 👍17 | 与上一条同源，揭示 Windows 子系统序列化层 Bug，复发率高 |
| 5 | [#39678](https://github.com/openai/codex/issues/39678) — Android→macOS Remote 信任错误 | 💬16 / 👍11 | 跨设备 Remote Control 的项目隔离与权限模型仍不稳健 |
| 6 | [#33282](https://github.com/openai/codex/issues/33282) — `create_thread` 未继承 auto-approval | 💬15 / 👍6 | worktree 子任务缺少自动审批继承，沙箱体验割裂 |
| 7 | [#29958](https://github.com/openai/codex/issues/29958) — Windows WebSocket 在 `respect_system_proxy` 下超时 | 💬8 | 企业代理环境用户刚需，影响合规网络接入 |
| 8 | [#31317](https://github.com/openai/codex/issues/31317) — `--remote --cd` 启动后 `/resume` 缺 CWD 过滤 | 💬7 | Remote 工作流与会话恢复的 UX 缺陷 |
| 9 | [#42661](https://github.com/openai/codex/issues/42661) — Windows Pet 重启后点击穿透 | 💬6 | 多显示器 + DPI 缩放下桌面宠物的交互区域错位 |
| 10 | [#42853](https://github.com/openai/codex/issues/42853) — Windows 端 Pro 账号缺失 GPT-6 Astra 选择器 | 💬5 | 与 0.153.x 发布直接相关，反映 Pro 用户模型下放滞后 |

---

## 🛠️ 重要 PR 进展（Top 10）

1. **[#42841](https://github.com/openai/codex/pull/42841) — 原生 Windows MXC 沙箱适配器**
   新增 `codex-mxc-sandbox`，提供原生 MXC 可用性检测与启动器，扩展 Windows 沙箱能力并拒绝未支持的 learning-mode 策略。

2. **[#42903](https://github.com/openai/codex/pull/42903) — 保留 TUI 问题状态，整合历史与队列导航**
   在线程输入恢复与重连时保留问题草稿、选择与展开状态，刷新期间不重放消息，显著改善异步问题可靠性。

3. **[#42904](https://github.com/openai/codex/pull/42904) — Default 协作模式改用静态指令**
   将 Default 与 Plan 直接写入默认模式指令，去除模板渲染，可减少运行时不一致并移除 `codex-utils-template` 依赖。

4. **[#42852](https://github.com/openai/codex/pull/42852) — 上下文压缩后强化 Guardian 审查**
   在 compaction 后保留用户授权约束，避免复用不可读或不兼容的父检查点，提升安全审查闭环稳定性。

5. **[#42844](https://github.com/openai/codex/pull/42844) — Guardian 上下文中保留用户指令**
   即使压缩或转录窗口移除原始用户消息，Guardian 仍可基于宿主保留的完整副本进行审查，避免关键指令丢失。

6. **[#42900](https://github.com/openai/codex/pull/42900) — 为独立任务与记忆请求建立根回合身份**
   修复后台 / 空输入回合缺失 `root_turn_id` 的问题，并防止任务从合并的邮箱输入"领养"错误身份。

7. **[#42850](https://github.com/openai/codex/pull/42850) — Linux musl 二进制切换至 jemalloc**
   在 `x86_64/aarch64-unknown-linux-musl` 上启用 `tikv-jemallocator`，减少 Alpine/Distroless 容器中的内存碎片。

8. **[#42870](https://github.com/openai/codex/pull/42870) — 消除文件系统沙箱冗余路径解析**
   Linux 下跳过无关权限根探测，避免重复解析同一文件系统别名，缩短沙箱启动延迟。

9. **[#42879](https://github.com/openai/codex/pull/42879) — 模型选择器列出 GPT-6-Astra**
   将 Astra 的捆绑可见性设为 `list`，使其在交互式选择器中置顶，并更新 picker 快照。

10. **[#42847](https://github.com/openai/codex/pull/42847) — 复制 TUI 响应时保留 Markdown 格式**
    在剪贴板写入时同时生成渲染后的 HTML，让富文本目标（Slack、Notion、邮件）保留标题、列表、表格与代码块格式。

> 其他亮点：`#42854`（Daybreak 偏好持久化到 thread metadata）、`#42842`（Astra 模型下 TUI 星河特效）、`#42883`（exec-server RPC 指标埋点）、`#42863`（`features`/`feature_requirements` 别名优先级合并）。

---

## 📈 功能需求趋势

按 Issue 标签与议题聚类，近 24 小时社区关注方向如下：

- **🪟 Windows / WSL 兼容与稳定性**（占比最高，约 35%）
  WSL 项目创建、Auto-approval 继承、代理、WebSocket、Pet 多屏 DPI……几乎每条 Bug 都涉及 Windows 桌面端或 WSL 子系统，是当前最迫切的工程债。

- **🧠 新模型分发与可见性**
  GPT-6-Astra 的模型选择器、Bedrock 路由、Pro 账号下放（[#42853](https://github.com/openai/codex/issues/42853)、[#32449](https://github.com/openai/codex/issues/32449)）是发布节奏相关的高频话题。

- **🔌 MCP（Model Context Protocol）健壮性**
  包括 Windows 自定义远程 MCP 临时消失（[#42907](https://github.com/openai/codex/issues/42907)）、`thread_summary` 泄漏完整 MCP 栈（[#39783](https://github.com/openai/codex/issues/39783)）。

- **🎨 TUI 异步交互体验**
  社区围绕 async question 的可选项、可编辑 Other 答案、队列与历史导航形成完整链路（[#42889](https://github.com/openai/codex/pull/42889)→[#42903](https://github.com/openai/codex/pull/42903)）。

- **🛡️ 沙箱与安全策略**
  Windows MXC 沙箱、execpolicy 误判（[#40060](https://github.com/openai/codex/issues/40060)）、Guardian 跨压缩保留授权约束等安全相关议题持续升温。

- **🧩 IDE 扩展与桌面端 UX**
  包括提交信息自动生成（[#20036](https://github.com/openai/codex/issues/20036)）、macOS Composer 消失（[#42583](https://github.com/openai/codex/issues/42583)）、全局新对话默认进入 No Project（[#24731](https://github.com/openai/codex/issues/24731)）。

- **⚙️ 性能与配额**
  Pro 账号子代理 429 限频（[#41702](https://github.com/openai/codex/issues/41702)）、文件沙箱冗余 IO 优化（[#42870](https://github.com/openai/codex/pull/42870)）。

---

## 💬 开发者关注点

综合 Issue 评论与 PR 描述，社区反馈的痛点和高频需求可归纳为：

1. **"不要替我决定" — 控制权回收**
   #28969（204 👍）的极高呼声表明，开发者希望对自动解题、超时、模型默认等行为拥有可配置的开关，而非硬编码默认行为。

2. **Windows 桌面端成为体验瓶颈**
   WSL 项目创建、Windows 代理、Pet 多屏 DPI、Alt+P 崩溃、模型选择器缺失等 Bug 集中爆发，表明 Windows 是当前最大的兼容性短板；MXC 沙箱与 jemalloc 的引入也印证了团队正在加大 Windows 端投入。

3. **异步 / 长时间任务的可靠性**
   Goal resume 死循环（[#37304](https://github.com/openai/codex/issues/37304)）、Pro 子代理 429、上下文压缩后审查退化，反映出"长任务 + 多代理"场景下状态管理与限额策略尚未稳定。

4. **模型发布与权限下放的同步性**
   0.153.x 在数小时内连续修复 Astra 可见性问题，但 Windows Pro 用户仍报缺模型，说明发布链路需要在客户端、订阅层级与路由之间做强一致性校验。

5. **安全策略的"假阳性"成本**
   wasm 编译器（[#42681](https://github.com/openai/codex/issues/42681)）、PowerShell 脚本中的 `Start-Process`（[#40060](https://github.com/openai/codex/issues/40060)）被误拦截，开发者希望 execpolicy 在保持安全的同时降低误报。

6. **远程协作 / 跨设备的会话一致性**
   Android→macOS Remote、iOS Push 不送达（[#32908](https://github.com/openai/codex/issues/32908)）、`/resume` CWD 过滤丢失，提示 Remote Control 的会话状态/通知通道仍需打通。

7. **可观测性与指标**
   [#42883](https://github.com/openai/codex/pull/42883) 新增的 exec-server RPC 指标是社区呼吁已久的可观测性改进，后续预计会有更多关于模型路由、配额、沙箱的指标被纳入。

---

*日报基于 2026-09-05 过去 24 小时 GitHub 数据自动生成，仅供参考。所有链接指向 [github.com/openai/codex](https://github.com/openai/codex) 仓库原始 Issue / PR。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-05**

---

##  今日速览

Gemini CLI 今日发布了 nightly 版本 **v0.60.0**，重点强化了扩展权限管控与命令执行时的路径边界安全检查。社区讨论焦点集中在 **Subagent 可靠性**（频繁挂起、状态误报）与 **Auto Memory 系统**的安全性/质量问题，多个 P1 级 Bug 持续追踪中。沙箱隔离、AST 感知工具、子代理可视化等方向成为新一轮功能需求的热门议题。

---

## 🚀 版本发布

### v0.60.0-nightly.20260905.g85aca163f
本次夜间版本包含两项关键修复：

- **extensions**: 扩展更新时强制要求用户对环境变更进行授权（consent），并对可改变运行时行为的 env 变量进行清理，防止 MCP 子进程被注入未授权配置（[PR #28863](https://github.com/google-gemini/gemini-cli/pull/28863)）。
- **core**: 增强工作区路径边界校验与符号链接解析，覆盖命令安全启发式、文件发现与目录列出工具，跨 POSIX/Windows 平台生效（[PR #29170](https://github.com/google-gemini/gemini-cli/pull/29170)）。

> 自动化发布 PR：[#29218](https://github.com/google-gemini/gemini-cli/pull/29218)

---

##  社区热点 Issues

| # | Issue | 优先级 | 评论/👍 | 关注理由 |
|---|---|---|---|---|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) Subagent 触达 MAX_TURNS 后错误报告为 GOAL success | **P1** Bug | 13 / 2 | 掩盖了真实中断状态，破坏可观测性，影响 eval 准确性 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) Generalist agent 频繁挂死 | **P1** Bug | 8 / **8** | 👍 数最高，简单操作即可挂起 1 小时，阻塞日常使用 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) 零依赖 OS 沙箱 + 执行后意图路由 | **P2** Enhancement | 9 / 1 | 充分利用 Gemini 3 的 bash 原生能力，同时不牺牲安全 |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) AST 感知的文件读取/搜索/映射评估 | **P2** Feature | 7 / 1 | 显著降低误读带来的轮次开销与 token 噪声 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) Gemini 不主动调用 skills 与子代理 | **P2** Bug | 6 / 0 | 影响自定义工作流落地，需 prompt 显式驱动 |
| 6 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) Auto Memory 增加确定性脱敏、减少日志 | **P2** Security | 5 / 0 | 修复密钥/凭据在模型上下文中泄露的风险 |
| 7 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) Shell 执行后卡在 "Waiting input" | **P1** Bug | 4 / 3 | 命令已结束仍显示活跃，造成严重卡顿错觉 |
| 8 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) browser subagent 在 Wayland 下失败 | **P1** Bug | 4 / 1 | Linux 桌面用户的关键路径问题 |
| 9 | [#20079](https://github.com/google-gemini/gemini-cli/issues/20079) `~/.gemini/agents/*.md` 为 symlink 时不识别 | **P2** Bug | 4 / 0 | 影响 dotfiles 仓库用户的代理复用 |
| 10 | [#22672](https://github.com/google-gemini/gemini-cli/issues/22672) Agent 应阻止/抑制破坏性行为（如 `git reset --force`）| **P2** | 3 / 1 | 直接关系到生产环境安全 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 内容摘要 |
|---|---|---|
| [#29218](https://github.com/google-gemini/gemini-cli/pull/29218) | OPEN | v0.60.0 nightly 自动版本号更新 |
| [#29217](https://github.com/google-gemini/gemini-cli/pull/29217) | OPEN | **修复** `--model gemini-2.5-flash` 被 `isFlashModel()` 错误升级到 3.5 Flash（P1） |
| [#29216](https://github.com/google-gemini/gemini-cli/pull/29216) | OPEN | **沙箱**: 容器内隔离 settings 目录，避免 OAuth/token 泄漏到 host |
| [#29215](https://github.com/google-gemini/gemini-cli/pull/29215) | OPEN | **安全**: 强制外部工具/MCP 输出使用 envelope 元数据进行来源验证 |
| [#29214](https://github.com/google-gemini/gemini-cli/pull/29214) | OPEN | **沙箱**: 强化文件系统边界、隔离 runtime 状态、解析符号链接 |
| [#29116](https://github.com/google-gemini/gemini-cli/pull/29116) | OPEN | **核心**: 缓解 NTFS 8.3 短名（SFN）路径绕过攻击 |
| [#29114](https://github.com/google-gemini/gemini-cli/pull/29114) | OPEN | **核心**: `handleExit` 重入保护，修复 spawn 失败时重复调用 |
| [#29110](https://github.com/google-gemini/gemini-cli/pull/29110) | OPEN | **核心**: `read_file` 改为走 `FileSystemService`，统一 ACP 客户端的文件 I/O 路径 |
| [#29118](https://github.com/google-gemini/gemini-cli/pull/29118) | OPEN | **extensions**: 仅剥离尾部 `.git` 后缀，避免破坏 `blog.github.io` 类仓库名 |
| [#28863](https://github.com/google-gemini/gemini-cli/pull/28863) | **MERGED** | **扩展**: 环境变更需用户授权 + 清理运行时 env 变量（已合入 v0.60.0） |
| [#29170](https://github.com/google-gemini/gemini-cli/pull/29170) | **MERGED** | **核心**: 工作区路径边界 + 符号链接解析（已合入 v0.60.0） |

> 同时关闭了一批 PR Generation 评估管线相关 PR（#28948–#28953, #28955, #28942），属于"pr-nudge-sent"清理动作，无新功能影响。

---

## 📈 功能需求趋势

1. **Subagent 可观测性与可靠性** — 状态误报、挂死、bug 报告缺失子代理上下文、trajectory 可分享化（#22323、#21409、#21763、#22598）
2. **Auto Memory 安全与质量** — 确定性脱敏、低信号会话不无限重试、无效 patch 隔离（#26525、#26522、#26523、#26516）
3. **沙箱与执行安全** — OS 级沙箱、sandbox 文件系统隔离、NTFS 短名防护、配置权限校验（#19873、#29214、#29216、#29115、#29116）
4. **AST 感知的代码探索工具** — 用结构化读取替代整文件洪水式加载，降低 token 消耗（#22745、#22746）
5. **任务追踪系统升级** — 从 in-context WriteToDo 迁移到持久化的文件 CRUD（#18836、#21000）
6. **Browser Agent 韧性** — 会话接管、锁恢复、Wayland 兼容、settings.json 覆盖生效（#22232、#21983、#22267）
7. **Skill 与子代理主动性** — 减少用户手动 prompt 驱动（#21968、#20195）
8. **Agent 自我认知** — 准确掌握 CLI flags / hotkeys / 自我调用（#21432）

---

## 💬 开发者关注点

- **🤖 Subagent 不够"自动"**：用户反馈自定义 skills/sub-agents 在未被显式 prompt 时几乎不会被调用，影响个性化工作流的可用性（#21968）。
- **⏳ Shell / Subagent 卡死**：两类"等待用户输入"或永久挂起的现象最让开发者沮丧，#21409 单 issue 收获 8 个 👍。
- **🛡 凭据与执行边界泄露**：沙箱与 host 文件系统未充分隔离、配置 ACL 未校验，扩展/MCP 进程可注入任意 env 变量，社区呼吁"更严的默认安全姿态"。
- ** Memory 系统的副作用**：Auto Memory 在提取阶段把本地会话原文送入模型，存在密钥泄露面，且无效 patch 会"静默吞掉"（#26523、#26525）。
- **📂 平台兼容性碎片化**：Wayland、NTFS 短名、Windows ACL、symlink agent 加载等小问题累积，反映对多平台一致性的诉求。
- ** 评估与生成管线**：评估 harness、LLM-as-judge、diff viewer 工具正在快速迭代（#28948–#28953、#28949），表明团队正加大 PR Generation 自动化投入。

---

> **编辑备注**：本日报基于 2026-09-05 GitHub 数据快照生成。P1 Bug 与 Auto Memory 安全问题建议优先跟踪；nightly 用户的更新可通过 `#29218` 获取 v0.60.0 镜像。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-09-05**

---

## 📌 今日速览

GitHub Copilot CLI 在 24 小时内连续推进 **v1.0.84** 两个子版本，**正式接入 GPT-6 Astra 模型**，并对 Managed Sandbox 的会话级禁用、Windows PowerShell 集成以及多 GitHub 账号凭据场景做了关键修复。社区方面，**Agent 可配置 Reasoning Effort、按 Agent 控制 System Prompt / Token 开销、自动压缩阈值**等"精细化调优"诉求持续升温；同时 **v1.0.81+ 在 MCP、ACP、BYOK、长时间 --resume** 等场景下集中爆发了一批稳定性与兼容性回归报告，需重点关注。

---

## 🚀 版本发布

### v1.0.84-1（Added）
- ➕ 新增对 **GPT-6 Astra** 模型的支持。

### v1.0.84-0（Added / Fixed）
**Added**
- 在已批准的 bypass 提示中，可选择对当前会话剩余时间 **禁用 Managed Sandbox 会话**。

**Fixed**
- PowerShell 中：沙箱阻止执行命令时，给出的"在沙箱外运行该命令"提示被异常写入终端。
- 当凭据存储中存在多个 GitHub 账号时，沙箱化 `gh` 调用的账号选择逻辑被修复。

### v1.0.83 / v1.0.83-5（2026-09-04）
**Added**
- 🪟 在 **Windows 11 任务栏**中展示正在运行的 Copilot 会话，并支持悬停卡片实时查看状态。
- 🔐 MCP OAuth 登录新增 **Client ID Metadata Document (CIMD)** 支持。
- 🧩 自定义 Agent 的 `model` 字段现在支持 **模型列表**，按顺序回退尝试；`model-policy: required` 保证不退到默认模型。

**Improved**
- 在 macOS / Linux 上，**沙箱内命令无法再访问宿主机的本地服务**；macOS 还额外阻断沙箱进程自身在 `127.0.0.1` 上启动的服务，避免测试套件误连。

🔗 Releases: https://github.com/github/copilot-cli/releases

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注点 | 链接 |
|---|-------|--------|------|
| 1 | **#2904** Custom Agent YAML Frontmatter 应支持 Reasoning Effort（8 评论 / 👍23） | 呼声最高的"按 Agent 调推理强度"诉求，是 v1.0.83 多模型回退之后的下一个精细化方向 | [#2904](https://github.com/github/copilot-cli/issues/2904) |
| 2 | **#4328** WSL2 下 Ctrl+H 被误识别为 Ctrl+Backspace（7 评论） | Windows Terminal 的 `WT_SESSION` 环境变量泄漏到 WSL，影响键位语义 | [#4328](https://github.com/github/copilot-cli/issues/4328) |
| 3 | **#4525** 1.0.81-1 在 `server/discover` 成功后重复发 legacy `initialize`（已关闭，6 评论） | MCP 双协议握手兼容性问题，使用 Python MCP SDK 2.0.0 的 stdio 服务受影响 | [#4525](https://github.com/github/copilot-cli/issues/4525) |
| 4 | **#2627** 允许裁剪固定 Token 开销的 System Prompt（4 评论 / 👍19） | 启动即占 ~20.5K token，社区希望提供"轻量 system prompt"配置 | [#2627](https://github.com/github/copilot-cli/issues/2627) |
| 5 | **#232** 新增 `--system-prompt` 参数（5 评论 / 👍10） | 与 #2627 同方向的 CLI 级系统提示诉求，长期未合并 | [#232](https://github.com/github/copilot-cli/issues/232) |
| 6 | **#1688** 在 config.json 中加入可配置的自动压缩阈值（3 评论 / 👍5） | 慢模型（Opus 4.6 等）在 ~45–60% 上下文时性能即下降，固定阈值过晚 | [#1688](https://github.com/github/copilot-cli/issues/1688) |
| 7 | **#4647** v1.0.81 破坏 `chroma-mcp` 兼容性 | MCP 升级带来的生态连锁问题，外部 MCP 服务器维护者关注 | [#4647](https://github.com/github/copilot-cli/issues/4647) |
| 8 | **#3194** Android Studio 集成终端里鼠标滚轮被当作上下方向键 | 自 v1.0.43 起回归，跨 IDE 终端体验问题 | [#3194](https://github.com/github/copilot-cli/issues/3194) |
| 9 | **#2644** 输入行支持 Shift+Arrow / Ctrl+A 等 GUI 选区快捷键 | 基础编辑体验缺失，影响所有平台用户 | [#2644](https://github.com/github/copilot-cli/issues/2644) |
| 10 | **#4699** 长 `--resume` 会话反复触发 V8 4 GiB 堆 OOM，且崩溃 dump 写入当前目录 | 影响生产环境稳定性和文件系统整洁度 | [#4699](https://github.com/github/copilot-cli/issues/4699) |

**加分关注（最新）**
- **#4731** 客户端取消 MCP 工具调用后，`tools/list` 刷新发往同一被锁住的 server，永久下线该 server 工具列表。
- **#4720** v1.0.82 BYOK 模式下静默禁用 Prompt Caching，导致成本 ~5x 上升。

---

## 🔧 重要 PR 进展

过去 24 小时内仅有 1 条 PR 活跃：

| PR | 内容 | 链接 |
|----|------|------|
| **#3771** Initial project setup | 项目初始化 PR，状态 OPEN，无评审动态 | [#3771](https://github.com/github/copilot-cli/pull/3771) |

> 说明：本日 PR 活跃度极低，所有修复与新特性主要通过官方 v1.0.83 / 1.0.84 通道发布，外部贡献以 Issue 反馈为主。

---

## 📈 功能需求趋势

从 39 条活跃 Issue 中提炼出社区最关心的方向：

1. **Agent 级精细控制**（最高热度）
   - Reasoning Effort per Agent（#2904）
   - 多模型回退 + `model-policy: required`（v1.0.83 已落地）
   - Custom Agent 与 Local Plugin 启动提示/参数传递修复（#4723）

2. **System Prompt 与上下文开销治理**
   - 全局 `--system-prompt` CLI 参数（#232，长达近一年未合并）
   - 可裁剪的固定 system prompt（#2627，👍19）
   - 可配置的自动压缩阈值（#1688）
   - **基于 Prompt Cache TTL 的空闲自动压缩**（#4724，新提案，与缓存命中率深度耦合）

3. **MCP / 扩展生态兼容性**
   - `server/discover` 与 legacy `initialize` 共存问题（#4525）
   - chroma-mcp 兼容性回归（#4647）
   - 工具列表刷新导致 server 工具永久下线（#4731）
   - 扩展 SDK 重连销毁 hook processor（#4590）
   - Canvas 工具的 JSON-RPC 参数损坏（#4721）

4. **稳定性 / 资源治理**
   - 长会话 V8 堆 OOM（#4699、#4725）
   - idle 状态下 `copilot-file-search` 线程吃满 CPU 与磁盘（#4710）
   - BYOK 静默禁用 Prompt Caching，成本飙升（#4720）

5. **跨平台终端体验**
   - WSL2 / Windows Terminal 键位泄漏（#4328）
   - Android Studio 终端鼠标滚轮被劫持（#3194）
   - Shift+Arrow / Ctrl+A 选区缺失（#2644）
   - 滚动条在 Shift 复制时污染输出（#4707）
   - Markdown 把 `_test` 解析掉（#4722）

6. **安全 / 权限回归**
   - ACP 模式不再发送 `session/request_permission`，工具调用被静默自动批准（#4537）
   - 自动更新覆盖 `copilot.exe`，连带破坏 GitHub Copilot Desktop App（#4728）
   - "Trusted Access for Cyber" 项目联动诉求（#4322）

---

## 🧑‍💻 开发者关注点

社区反馈集中的"痛点"与"高频需求"归纳如下：

- **🔁 回归比新功能更刺眼**：v1.0.81 / 1.0.82 / 1.0.83 三个版本接连在 MCP 握手、ACP 权限、BYOK 缓存、扩展 SDK 重连上抛出回归，开发者希望建立**更明确的回归测试矩阵与 release notes 标注**。
- **🧠 模型与上下文调优仍是头号诉求**：以 Opus 4.6 为代表的大上下文模型用户强烈要求**按 Agent 控 reasoning effort、按项目控压缩阈值、按缓存 TTL 触发压缩**，避免在 45–60% 上下文即出现严重延迟与质量下滑。
- **🪟 Windows / WSL2 / IDE 集成终端仍是体验洼地**：键位冲突、滚轮劫持、Markdown 误解析等"小问题"严重拖累了日常使用的可信度。
- **🧩 自定义 Agent / Local Plugin 链路尚未打通**：启动 prompt 被静默丢弃（#4723）、`session.resume` 忽略 `model` 参数（#4645）等问题说明 SDK 与 CLI 之间的契约仍不稳定。
- **💥 长时间会话的 OOM 是生产化阻碍**：崩溃 dump 写入 cwd（#4699）、idle 进程占用资源（#4710）等问题使 `--resume` 难以在 CI / 长任务中放心使用。
- **🛡 权限与自动更新的边界**：ACP 自动批准工具调用（#4537）、自动更新覆盖宿主可执行文件（#4728）反映出"自动化"与"用户授权"之间的边界需要更明确的产品设计。

---

> 📎 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)
> 报告生成时间：2026-09-05（基于过去 24 小时活跃数据）

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-09-05
**数据源**：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)

---

## 📌 今日速览

今日仓库活跃度较低，**24 小时内无新版本发布**。社区动态主要集中在历史 Issue 的集中关闭与状态更新：6 条 Issue 中有 5 条被标记为 CLOSED，涵盖 MCP 超时容错、ESC 中止子代理、终端按键绑定、多行输入光标导航、Skills 管理等近期反馈。仅有 1 条关于 Windows 终端粘贴的 Bug 仍处 OPEN 状态。PR 方面有一条针对 `StrReplaceFile` 替换计数的修复仍待合并。

---

##  版本发布

**过去 24 小时无新版本发布**，本节省略。

> 提示：如需查看最新稳定版，可访问仓库 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases)。

---

## 🔥 社区热点 Issues

今日活跃 Issue 数量较少（共 6 条），以下按关注度排序完整列出：

| # | Issue | 状态 | 关键内容 | 重要性 |
|---|-------|------|---------|--------|
| 1 | [#1313](https://github.com/MoonshotAI/kimi-cli/issues/1313) |  CLOSED | **Hooks 通知与生命周期事件系统**：希望在长任务执行期间通过 Hooks 通知用户，避免切换窗口后错过 Agent 状态变更 | ⭐⭐⭐ 最高赞（3 👍），反映长任务场景下的可观测性痛点 |
| 2 | [#1316](https://github.com/MoonshotAI/kimi-cli/issues/1316) | 🟢 CLOSED | **MCP 超时导致 CLI 整体不可用**：单个 MCP 连接失败会中断整个 kimi-cli 进程，容错性差 | ⭐⭐⭐ 涉及核心稳定性，单点故障风险 |
| 3 | [#1315](https://github.com/MoonshotAI/kimi-cli/issues/1315) | 🟢 CLOSED | **按 ESC 后 Subagent 仍在运行**：在 Windows 10 平台使用 kimi-for-coding 模型时，ESC 无法终止已派发的子任务 | ⭐⭐⭐ 用户对中断控制的强需求 |
| 4 | [#1319](https://github.com/MoonshotAI/kimi-cli/issues/1319) | 🟢 CLOSED | **本地 Skills 管理能力**：缺少类似 `/mcp` 的统一管理面板（list / rm / 查看版本与触发词），存储目录也不统一 | ⭐⭐ 反映 Skills 生态管理需求 |
| 5 | [#1320](https://github.com/MoonshotAI/kimi-cli/issues/1320) | 🟢 CLOSED | **多行输入下方向键智能切换**：当前上下方向键始终切换历史命令，无法在多行文本中移动光标 | ⭐⭐ 编辑体验改进 |
| 6 | [#2634](https://github.com/MoonshotAI/kimi-cli/issues/2634) | 🟡 **OPEN** | **Windows Terminal + PowerShell 下 Ctrl+V 粘贴失效**：v0.40.1 中键位修改不生效 | ⭐⭐ 唯一未解决 Issue，影响 Windows 用户 |

> **社区反应**：5 条 CLOSED 的 Issue 普遍点赞数不高（多为 0），但内容覆盖了稳定性、可观测性、UX 等核心维度，说明维护团队正在系统性清理积压反馈。Issue #1313 凭借 Hooks 概念获得最多关注。

---

## 🛠 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|----|------|------|
| 1 | [#2524](https://github.com/MoonshotAI/kimi-cli/pull/2524) | 🟡 OPEN | **fix(tools): StrReplaceFile 替换计数基于运行中内容**<br/>原实现顺序应用编辑但以"原始文件"统计替换次数，导致链式编辑（前一步产生的 `old` 字符串）被错误计数。修复后计数基于当前已编辑的内容。解决 #2526。 |

> **说明**：今日仅 1 条 PR 更新，仍处于待合并状态。该修复属于工具调用层的数据一致性 Bug，影响 Agent 多步骤编辑场景。

---

## 📈 功能需求趋势

从今日活跃 Issue 中可提炼出以下社区关注方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|-----------|---------|
| **🔌 可观测性 / 生命周期 Hooks** | #1313 | 呼声最高（3 👍），开发者希望在长任务、后台执行中获取 Agent 状态通知 |
| ** 稳定性与容错** | #1316 | MCP 等外部依赖的失败不应拖垮整个 CLI，需要更优雅的降级策略 |
| **⏹ 任务中断控制** | #1315 | ESC 等快捷键需真正终止子 Agent，而不只是打断主循环 |
| ** Skills 生态管理** | #1319 | 自定义 Skills 缺乏统一的 list / rm / inspect 命令 |
| **⌨️ 终端交互 UX** | #1320、#2634 | 多行输入的光标导航、Windows 下的按键绑定一致性 |
| **🪟 跨平台兼容** | #1315、#2634 | Windows 平台问题频出，是当前明显短板 |

---

## ‍💻 开发者关注点

综合今日反馈，开发者社区的核心痛点集中在以下三点：

1. **稳定性优先于功能扩展**
   多条 Bug 报告（#1316 MCP 超时、#1315 ESC 失效、StrReplaceFile 计数错误）反映 **Agent 在长链路工具调用中缺乏健壮的错误传播机制**。一旦外部依赖（网络、子进程、文件 IO）出现异常，整个会话极易中断或产生错误结果。

2. **"可被中断 + 可被通知"是刚需**
   随着 Agent 任务变长（代码库分析、构建任务），用户既需要可靠的中断手段（#1315），也需要及时的状态通知（#1313 Hooks）。这两项功能是 Agent 走向"生产可用"的关键拼图。

3. **本地扩展需要"管理面板"**
   Skills（#1319）和 MCP 的本地管理目前依赖手动维护文件系统，缺少 CLI 内置的 list / rm / inspect 等命令，影响可维护性与上手成本。Windows 用户的键位绑定（#2634）也暴露了终端适配工作的不足。

---

**报告生成时间**：2026-09-05
**覆盖数据范围**：过去 24 小时（2026-09-04 ~ 2026-09-05）

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-09-05**

---

## 📌 今日速览

OpenCode 在 24 小时内连续发布 v1.18.28 与 v1.18.29 两版本，主要修复 Codex OAuth 对 GPT-6 新模型的识别与 GitHub Copilot 的会话追踪问题。今日社区关注度最高的是 **GPT-6 Astra 缺失**（20 👍）和**默认隐私模式**（13 👍）两大诉求，同时大量 Issue 围绕多 Provider 兼容性（Ollama、DigitalOcean、Google AI Studio、Custom Provider）和 TUI/Desktop 渲染稳定性。PR 端亮点是 **`feat(core): transcript recall index for semantic session history`**（#46850）——本地跨会话语义检索能力落地。

---

## 🚀 版本发布

### v1.18.29 — Core Bugfixes
- **Codex OAuth 模型过滤增强**：支持识别整数版本号（如 `gpt-6`），修复 `gpt-6-astra` 在 OpenAI 订阅用户中不显示的问题
- 文档修复：中文排版加粗（感谢 [@Peter267](https://github.com/Peter267)）
- 🔗 [v1.18.29 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.29)

### v1.18.28 — Core 改进 + Desktop Bugfixes
- **Core**：将 Session ID 作为 GitHub Copilot 的交互头发送，改善跨请求追踪
- **Desktop**：
  - 设备认证流程使用 Desktop Client ID
  - 增大「在应用中打开」图标尺寸，提升可见性
- 🔗 [v1.18.28 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.28)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 👍 | 重要性 |
|---|---|---|---|---|
| 1 | [#19948](https://github.com/anomalyco/opencode/issues/19948) Ollama 本地集成（Desktop Windows 返回无效 JSON） | 23 | 5 | 本地 LLM 用户最大痛点，模型显示但不可用 |
| 2 | [#25832](https://github.com/anomalyco/opencode/issues/25832) opencode 无法再读取图片（5 月起回归） | 18 | 5 | 多模态核心功能回归，影响工作流 |
| 3 | [#30680](https://github.com/anomalyco/opencode/issues/30680) 自动 compaction 死循环 + 模型停止响应 | 17 | 0 | 严重稳定性问题，耗尽 token 无响应 |
| 4 | [#35148](https://github.com/anomalyco/opencode/issues/35148) Bad Gateway 死循环（Desktop v1.16.2） | 9 | 13 | 影响范围广，点赞数最高之一 |
| 5 | [#47363](https://github.com/anomalyco/opencode/issues/47363) GPT-6 Astra 缺失于 OpenAI Codex OAuth 模型列表 | 3 | **20** | **今日最热门**，反映新模型首发支持诉求 |
| 6 | [#17188](https://github.com/anomalyco/opencode/issues/17188) [FEATURE] 默认 sharing 设为 disabled（隐私优先） | 5 | 13 | 隐私安全共识已形成 |
| 7 | [#34596](https://github.com/anomalyco/opencode/issues/34596) MiniMax-M3 经 9router 代理不支持图像输入 | 3 | 0 | 第三方代理 + 多模态兼容性盲区 |
| 8 | [#33542](https://github.com/anomalyco/opencode/issues/33542) 自定义 Provider `attachment: true` 不生效 | 3 | 0 | 自定义 Provider 行为不符合配置预期 |
| 9 | [#47368](https://github.com/anomalyco/opencode/issues/47368) v1.18.28 远程 MCP 回归（KitWright 工具不可用） | 3 | 0 | 新版本直接破坏现有 MCP 工作流 |
| 10 | [#33881](https://github.com/anomalyco/opencode/issues/33881) DeepSeek V4 Pro 文档定价过期 | 3 | 0 | 商业信息与官方价不一致，损害信任 |

**社区反应观察**：所有展示 Issues 均已 CLOSED，闭环效率较高；👍 集中在**新模型首发**（GPT-6 Astra）、**稳定性回归**（bad gateway）、**隐私默认**三类。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|---|---|
| 1 | [#46850](https://github.com/anomalyco/opencode/pull/46850) `feat(core): transcript recall index` | **本地跨会话语义检索**——长期需求落地，基于嵌入的转录索引，支持语义跨 session 搜索 |
| 2 | [#47423](https://github.com/anomalyco/opencode/pull/47423) `feat(core): provider OAuth client_credentials` | 引入 Provider 级 OAuth 客户端凭据流（Basic / POST），内存缓存 token，401 后自动续签 |
| 3 | [#47428](https://github.com/anomalyco/opencode/pull/47428) `fix(app): defer background workspace discovery` | 延迟历史项目的 worktree 与 MCP 目录发现，按需加载，显著降低冷启动 |
| 4 | [#47391](https://github.com/anomalyco/opencode/pull/47391) `perf(plugin): parallel internal plugin loading` | 插件初始化并行化（Effect.forEach），无功能变更，纯加速 |
| 5 | [#47392](https://github.com/anomalyco/opencode/pull/47392) `fix(lsp): idle TTL + LRU eviction` | LSP 客户端增加空闲 TTL 与 LRU 淘汰，避免无界增长 |
| 6 | [#47404](https://github.com/anomalyco/opencode/pull/47404) `fix(core): compare Codex GPT versions by major.minor` | 修复 `gpt-6` / `gpt-6-astra` 过滤逻辑，解决 `parseFloat` 误排序问题 |
| 7 | [#47427](https://github.com/anomalyco/opencode/pull/47427) `fix(desktop): prevent large paste crashes` | 桌面端大文本粘贴导致 UI 卡顿/崩溃（Windows 尤甚） |
| 8 | [#47417](https://github.com/anomalyco/opencode/pull/47417) `fix(app): Path key normalization` | 修复项目路径归一化，`c:\foo` 与 `d:\foo` 误判问题 |
| 9 | [#47414/47412/47410/47408/47422/47420](https://github.com/anomalyco/opencode/pulls?q=is%3Apr+author%3Akitlangton+is%3Aclosed) | **kitlangton 系列 Markdown/Glob 修复**：保留 agent variant 字面量、保留 `$&` 字面参数、保留内联代码边界反引号、终止超限 code budget、glob 隐藏文件过滤、read 页面保留尾部空行 |
| 10 | [#47416](https://github.com/anomalyco/opencode/pull/47416) `docs: add octx plugin to ecosystem` | 社区插件 octx（会话可视化统计）收录 |

---

## 📈 功能需求趋势

从 Issues 标签与措辞归纳，社区诉求呈现以下五个方向：

1. **🏆 新模型首发支持（最强诉求）**
   GPT-6 Astra、DeepSeek V4 Pro、MiniMax-M3 是高频关键词；OAuth 路径下的模型可见性问题最尖锐。

2. ** 多 Provider 兼容与 OAuth 健壮性**
   Ollama、DigitalOcean（OAuth 端点废弃）、Google AI Studio（JSON schema 不兼容 `strength_areas`/`skills`）、自定义 Provider（`attachment` 失效）—— 不同 Provider 适配缺陷持续暴露。

3. ** MCP / LSP 生态扩展**
   MCP 远程服务回归问题（#47368）、内置 CircleCI LSP（#25735）、LSP TTL/LRU 管理—— 生态正从"能用"向"稳定可管理"演进。

4. **🔒 隐私与安全默认**
   默认 sharing 关闭（#17188）、URL 白名单（#35565）、webhook 幂等性（#28402）—— 反映企业用户对默认安全姿态的诉求。

5. **🎨 TUI / Desktop 体验打磨**
   大粘贴崩溃、Cmd+B 无效、斜杠命令多行失效、SSH 终端污染、SessionReview 阻塞 UI—— 桌面端体验细节成为日常反馈主战场。

---

## ‍💻 开发者关注点

从 PR 与 Issue 交叉分析，开发者社区最迫切的痛点包括：

- **🪲 隐性回归频繁**：v1.18.28 立刻带来 MCP 远程连接问题（#47368），提示版本发布前的 Provider 矩阵回归测试仍需加强。
- **️ 性能与资源管理**：背景任务预加载（#47428）、插件并行加载（#47391）、LSP LRU（#47392）—— 同一日连续三 PR 优化启动时延与内存，说明冷启动是公认短板。
- **🤖 多模态链路脆弱**：图片读取回归（#25832）、Custom Provider 图像附件失效（#33542）、代理下多模态不可用（#34596）—— 多模态的端到端兼容性是当前最大可靠性风险。
- ** Markdown / 模板渲染细节**：kitlangton 一日提交 6 个边界 case 修复（variant、字面参数、反引号、code budget、glob、空白行），提示 Markdown 转模型输入这一层仍存在大量边界 bug。
- ** 测试基础设施缺失**：多个 PR 备注「typecheck 与 E2E 未能运行」或「baseline 已失败」，企业包（enterprise）和 stats/app 存在 pre-existing typecheck 失败，CI 健康度值得关注。

---

> 📊 数据范围：2026-09-05 GitHub API 抓取的最新 50 条 Issues 与 50 条 PRs。趋势判断基于热度（👍 + 评论数）加权。
> 
> 🔗 项目地址：[github.com/anomalyco/opencode](https://github.com/anomalyco/opencode)

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-05

> 数据来源：github.com/badlogic/pi-mono ｜ 仓库已迁移至 earendil-works/pi

---

## 今日速览

**v0.85.0 紧急回归事件**：刚发布的 v0.85.0 被多名用户发现存在致命打包缺陷——`dist/cli.js` 与 `dist/experimental/server.js` 静态导入未声明依赖 `@earendil-works/pi-server`，导致全新安装直接 `ERR_MODULE_NOT_FOUND`。社区已涌现 5+ 关联 Issue 与 2 个紧急修复 PR。同期，#5363（Bedrock Mantle provider）持续高热推进，#7730（Mac 长会话 CPU 飙升）仍是开发者最痛的稳定性问题。

---

## 版本发布

### v0.85.0（昨日发布）

**New Features**
- **Persistent Claude thinking effort**：Anthropic 传输层支持跨回合保留 thinking effort，并在签名 thinking 不匹配时安全恢复。
- 文档：[Model Configuration](https://github.com/earendil-works/pi/blob/v0.85.0/packages/coding-agent/docs/models.md#model-configuration)

> ⚠️ **紧急提醒**：v0.85.0 同时引入打包缺陷，建议暂缓全新安装，等待 #9170 / #9172 修复合并后升级。

---

## 社区热点 Issues

### 1. [#9132] 0.85.0 发布包静态导入未声明依赖 ⭐15
发布即坏的严重回归：v0.85.0 的 `dist/cli.js` 静态导入 `@earendil-works/pi-server`，但该包未在 `dependencies` 中声明，导致 fresh install 启动即崩。这是今天最值得关注的 issue，已催生 #9140 / #9156 / #9158 / #9173 等多个重复报告。

### 2. [#5363] Add amazon-bedrock-mantle provider 💬18 👍15
**进行中**。Bedrock Mantle 模型使用 OpenAI 兼容协议（与现有 Converse API 不兼容），需要新增独立 provider。社区呼声高，作者 tasadurian 持续推进。

### 3. [#7730] High CPU usage on Mac OS with long session 💬15 👍10
Mac 平台长会话场景下 CPU 在 50-110% 之间剧烈波动，内存占用 600-800MB，初步推断与 context size 强相关。开发者痛点，未见修复。

### 4. [#5593] Tab 补全 slash 命令后追加空格，破坏参数补全
交互体验 bug：输入 `/sb-l<Tab>` 后补全为 `/sb-list `，追加的空格阻断了后续参数级自动补全。

### 5. [#8896] /export HTML 静默丢弃 display:false 上下文
自定义消息的 `display:false` 标志本意只是 TUI 噪声控制，却被 `/export` HTML 输出误解，导致模型看到的上下文在导出产物中消失，存在严重的"会话与导出不一致"风险。

### 6. [#9052] 全屏模式滚轮速度比常规慢 3 倍 👍2
用户因需要固定输入框切到全屏模式，却发现滚轮速度严重下降，体验倒退。

### 7. [#8760] OpenRouter `:free` 模型 max_tokens 超限 400 💬5
Pi 直接发送 `models.json` 中 `maxOutputTokens` 给上游，超出 OpenRouter `:free` 模型的硬上限。影响多个 free 模型，社区反映强烈。

### 8. [#8720] 工具仅返回空白字符导致 session 永久砖化
Windows 上 `bash` 返回 `\r\n` 时，OpenAI 兼容 provider 直接 400，且错误消息驻留历史，后续请求全部失败。

### 9. [#8684] PI_OFFLINE 静默禁用所有 provider 模型发现
文档承诺只关闭启动时 housekeeping 网络调用，实际却禁用整会话的 provider 模型目录发现，行为与文档严重不符。

### 10. [#3218] google-vertex provider 多轮交互崩溃
Vertex Model Garden 多轮会话中 `ECONNRESET` 导致 token 丢失，需 stream idle watchdog 覆盖（已部分在 #3020 合并）。

---

## 重要 PR 进展

### 1. [#9170] fix(coding-agent): declare pi-server runtime dependency
**核心修复**：将 `@earendil-works/pi-server` 显式声明为运行时依赖，解决 v0.85.0 启动崩溃。

### 2. [#9172] prevent broken package root publication
#9170 的后续 PR，依赖前者，防止同类打包缺陷再次发布到 npm。

### 3. [#9163] feat(tui): Simplify clipboard handling
mitsuhiko 主理：将 Rust 剪贴板库替换为轻量实现，既减小体积又支持 NixOS 等无法构建 Rust 的环境。

### 4. [#9096] feat: add Meta provider with Muse subscription OAuth
新增 Meta provider，配套 Muse 订阅 OAuth 流程。注意其刷新令牌机制特殊（每日基于 identity token 重铸），流式输出当前为"伪流式"。

### 5. [#9166] feat(tui): accelerate Alt-modified wheel scrolling
按住 Alt 时滚轮 5x 加速，关闭 #9052 全屏滚动体验问题。

### 6. [#9157] fix(coding-agent): render session tree search cursor
修复 Session Tree 中"Type to search"输入框缺失光标的小细节，对齐 Resume Session 的交互体验。

### 7. [#9137] feat(coding-agent): add Nix flake
mitsuhiko WIP：为 NixOS 用户提供官方 Nix flake 安装支持。

### 8. [#9138] feat(coding-agent): use Cmd+V for clipboard image paste on macOS
macOS 平台约定修复：剪贴板图片粘贴绑定 `Cmd+V`（Super），保留 `Ctrl+V` 兜底。

### 9. [#9117 + #9116] mid-conversation system messages（双层 PR）
mitsuhiko 主导的架构重构 #8998 的拆分：#9116 在 pi-ai 层引入中段 system message，#9117 在 coding-agent 层将 prompt / tool loadout 变更改为 system message delta 而非重写顶层 prompt——对扩展开发者意义重大。

### 10. [#9155] fix(coding-agent): reject prompts during tree navigation
会话树导航期间拒绝直接 `AgentSession.prompt()` 调用，避免 RPC 启动已中断的 run，并补齐回归测试。

---

## 功能需求趋势

| 方向 | 代表 Issue | 热度 |
|---|---|---|
| **新模型 / 新 Provider 接入** | #5363 (Bedrock Mantle)、#9096 (Meta Muse OAuth)、#9135 (OrcaRouter)、#7543 | ⭐⭐⭐⭐⭐ |
| **扩展 API 增强** | #9174 (消息队列结构化快照)、#9175 (tool 执行前 hook)、#9161 (hidden-thinking label 作用域) | ⭐⭐⭐⭐ |
| **稳定性与超时治理** | #7730 (Mac CPU)、#8720 (空白 tool result)、#8857 (agent loop timeout)、#3218 (Vertex) | ⭐⭐⭐⭐ |
| **TUI 交互细节打磨** | #9052 (滚动速度)、#5593 (Tab 行为)、#8896 (export 一致性)、#9138 (macOS Cmd+V) | ⭐⭐⭐⭐ |
| **跨平台 / 安装体验** | #9137 (Nix flake)、#9163 (剪贴板简化)、#9077 (Docker Sandbox 文档) | ⭐⭐⭐ |
| **会话 / Resume 体验** | #9139 (会话置顶)、#9157 (搜索光标) | ⭐⭐⭐ |

> **观察**：Provider 生态扩张（Meta / Bedrock Mantle / OrcaRouter）+ 扩展 API 完善（hook / message queue / label scope）是本阶段两大主线，TUI 细节打磨紧随其后。

---

## 开发者关注点

1. **打包 / 发布流程脆弱性**  
   本次 v0.85.0 因单条静态 import 链导致全网安装失败，反映出 `experimental/` 代码与主入口的发布耦合缺乏防御。社区普遍呼吁引入更严格的发布前验证（#9172 正是为此而做）。

2. **平台一致性仍是高频痛点**  
   Mac CPU 飙升、Windows 空白 tool result、NixOS 无法构建 Rust 依赖——非 Linux/Mac 标准环境问题集中暴露。

3. **OpenRouter 等聚合 Provider 的边界处理缺失**  
   `max_tokens` 上限、`:free` 模型特殊协议、Claude Opus 5 的 `output_config` 限制等问题说明，Pi 对聚合 provider 的字段适配仍偏乐观。

4. **扩展 API 处于"快速成长期"**  
   多个 issue 提出 hooks、queue、label 作用域、tool schema 校验等扩展点需求，说明社区生态正围绕扩展构建复杂工作流（如权限控制、消息路由），但底层 API 还在迭代。

5. **`PI_OFFLINE` 等环境变量的真实行为需要文档化**  
   开发者对"未文档化但实际生效"的副作用高度敏感（#8684），建议在 patch note 与 docs 中同步变更。

---

*日报生成时间：2026-09-05 ｜ 基于 GitHub 过去 24 小时数据*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>



</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期：2026-09-05**
**数据来源：[github.com/Hmbown/DeepSeek-TUI](https://github.com/Hmbown/DeepSeek-TUI)**

---

## 📌 今日速览

今日社区动态以 **TUI 体验修复** 与 **依赖维护** 为主线：TUI 模块连续处理了 Todo 列表历史快照与 Ollama 本地模型上下文预算两处核心 Bug，分别由 PR #5873 与 #5883 提交修复；与此同时，Dependabot 集中推送了 8 项依赖升级（涵盖 Rust crate、GitHub Actions 与 npm 包），生态维护节奏稳定。值得注意的是，Issue #5860 提出的"持续自我学习与技能自动进化"提案引发关注，被视为面向长期 AI Agent 能力演进的重要方向。

---

## 🚀 版本发布

**过去 24 小时内无新版本发布。**

---

## 🔥 社区热点 Issues

> 过去 24 小时共更新 5 条 Issue，剔除 1 条无关推广内容后，整理如下：

### 1. [#5820 Ollama provider 输入预算在 32K 本地模型上崩溃至 1024 tokens](https://github.com/Hmbown/Codewhale/issues/5820) — OPEN
- **类型**：Bug Report
- **作者**：slowly247
- **重要性**：⭐⭐⭐⭐⭐
- **热度**：4 条评论
- **核心问题**：默认 64K 输出预留将 32K 窗口的本地 Ollama 模型输入预算压缩至 1024 tokens，严重影响 qwen2.5:7b 等本地大模型的实际可用性。该 Bug 直接关系到本地化部署用户的核心体验。
- **修复进展**：PR #5883 已针对性提交，社区响应较快。

### 2. [#5860 持续自我学习与对话驱动技能自动进化](https://github.com/Hmbown/Codewhale/issues/5860) — OPEN
- **类型**：Enhancement
- **作者**：Edouard-Legoupil
- **重要性**：⭐⭐⭐⭐⭐
- **热度**：3 条评论
- **核心价值**：提议让 Agent 自动从对话中识别重复模式并生成新的 `SKILL.md`，实现"使用即学习"。这是 CodeWhale Skills 系统从静态知识库向动态自进化迈进的里程碑提案，长期看是 Agent 差异化竞争力的关键。

### 3. [#5871 To-do 历史记录污染会话记录且无法清除](https://github.com/Hmbown/Codewhale/issues/5871) — CLOSED
- **类型**：Bug Report
- **作者**：ronohara
- **重要性**：⭐⭐⭐⭐
- **热度**：1 条评论
- **核心问题**：每次 `todo_write` 都会将完整快照以永久卡片形式追加到会话历史，清空列表无法移除旧快照，积累形成"push-down history"干扰阅读。
- **状态**：已于今日通过 PR #5873 修复关闭。

### 4. [#5872 引入 rusty_alloc 作为 mimalloc 之外的特性可选分配器](https://github.com/Hmbown/Codewhale/issues/5872) — OPEN
- **类型**：Enhancement
- **作者**：freedomlovesfrank
- **重要性**：⭐⭐⭐
- **热度**：1 条评论
- **核心价值**：纯 Rust 实现的分配器可避免贡献者引入 C 编译器与构建脚本，便于跨平台交叉编译，降低贡献门槛。

### 5. （已剔除）[#5866 Ophthalmology CPT & ICD-10 Updates](https://github.com/Hmbown/Codewhale/issues/5860)
- **说明**：与项目无关的医疗计费推广内容，已关闭，不计入社区热点。

---

## 🛠️ 重要 PR 进展

### 1. [#5873 fix(tui): 替换过期的 Todo 会话快照](https://github.com/Hmbown/Codewhale/pull/5873) — CLOSED ✅
- **作者**：yiheng-kkk
- **价值**：仅保留最新的 `todo_write` 成功快照，对空快照隐藏但不清理上下文存储。修复 Issue #5871，附 9 项通过测试，TUI 体验明显改善。

### 2. [#5883 fix(tui): 根据路由窗口推导本地输出预算](https://github.com/Hmbown/Codewhale/pull/5883) — OPEN
- **作者**：dajiaohuang
- **价值**：当模型无静态目录条目时，从路由声明的上下文窗口推导自动输出预留，同时保留操作员显式覆盖、兼容性上限等既有约束。新增 32K Ollama 回归测试，直接修复 Issue #5820 的 1024 tokens 坍缩问题。

### 3. [#5882 test: 恢复贡献者 CI 基线与进程生命周期检查](https://github.com/Hmbown/Codewhale/pull/5882) — CLOSED ✅
- **作者**：Hmbown（维护者）
- **价值**：维护者亲自修复 CI 基线：插件生命周期夹具补充必要的 trust token，Unix 符号链接测试在 Windows 跳过，指针断言切换到当前精简页脚，格式与文档注释对齐。保障后续 PR 可在稳定基线上评估。

### 4. [#5870 Tools: 原子提交拆分 — 按依赖顺序处理无关变更](https://github.com/Hmbown/Codewhale/pull/5870) — OPEN
- **作者**：goransh-walia
- **价值**：解决 Issue #3999，为 Tools 模块新增按依赖关系排序并拒绝循环引用的原子提交切分能力，AI 辅助生成并已校验。

### 5. [#5869 fix(shell): 保留任务来源标识于作业快照中](https://github.com/Hmbown/Codewhale/pull/5869) — OPEN
- **作者**：zhuowp
- **价值**：后台 Shell 作业快照与完成事件携带稳定 origin，避免宿主机依赖命令文本做启发式匹配，防止早期作业的报错错误投射到新工具卡片。

### 6. [#5868 feat: 为 OpenCode Go/Zen 提供商发送 x-opencode-session 头](https://github.com/Hmbown/Codewhale/pull/5868) — OPEN
- **作者**：huangxianzhan
- **价值**：OpenCode Go 要求客户端发送稳定的 `x-opencode-session` 头部用于提示缓存与会话流量归属。补齐此前缺失，提升与 OpenCode Go/Zen 的兼容性与性能。

### 7. [#5877 chore(deps): 升级 rmcp 2.2.0 → 3.2.0](https://github.com/Hmbown/Codewhale/pull/5877) — OPEN
- **价值**：Model Context Protocol Rust SDK 升级，涉及 macros 模块新增能力，对 MCP 集成链路较关键。

### 8. [#5880 chore(deps): 升级 jsonschema 0.46.10 → 0.52.1](https://github.com/Hmbown/Codewhale/pull/5880) — OPEN
- **价值**：跨度较大的版本升级，需关注 API 兼容性与 schema 校验行为变化。

### 9. [#5828 chore(deps): npm_and_yarn 组批量升级](https://github.com/Hmbown/Codewhale/pull/5828) — OPEN
- **价值**：覆盖 `/integrations/feishu-bridge`（qs）与 `/extensions/vscode`（qs、fast-uri）两组依赖，修复潜在安全漏洞。

### 10. [#5874 chore(deps): 升级 docker/setup-qemu-action 4.2.0 → 4.3.0](https://github.com/Hmbown/Codewhale/pull/5874) — OPEN
- **价值**：CI 跨架构构建动作升级，与近期 CI 基线修复（PR #5882）协同提升构建稳定性。

> 其余 PR（#5875 base64、#5876 lru、#5881 tower-http、#5878 create-github-app-token、#5879 action-gh-release）均为例行依赖升级。

---

## 📈 功能需求趋势

综合过去 24 小时的 Issue 与 PR，社区关注方向集中在以下四类：

| 方向 | 代表 Issue / PR | 趋势解读 |
|------|----------------|----------|
| **本地模型兼容与上下文预算** | #5820、#5883 | Ollama 等本地大模型的上下文窗口自适应能力成为高频痛点，需求清晰且修复路径明确。 |
| **TUI 交互体验打磨** | #5871、#5873 | Todo 快照、会话历史、卡片渲染等细节持续被关注，反映 TUI 用户对会话可读性的要求在提升。 |
| **Agent 自进化能力** | #5860 | 从"静态 Skills 系统"向"动态自学习"演进，是中长期最受期待的差异化方向。 |
| **跨平台与构建体验** | #5872、#5882 | 纯 Rust 分配器、Windows 符号链接兼容性、CI 基线稳定性，构建链路仍是贡献者体验的瓶颈。 |
| **OpenCode / 第三方厂商协议适配** | #5868 | 跟随 OpenCode Go/Zen 等新兴服务的能力对接，体现生态适配敏感度。 |

---

## 💡 开发者关注点

从今日的 Issue 与 PR 反馈中，可总结出以下高频痛点与需求：

1. **本地模型默认配置"水土不服"** —— Ollama 等本地服务商缺乏精细化目录条目，导致默认 64K 输出预留反噬输入预算。开发者期望代码自动感知路由窗口而非依赖静态映射。

2. **TUI 会话历史"无法清理"的挫败感** —— Todo 列表、空快照等中间态缺乏折叠/折叠机制，反复出现的"卡片堆叠"降低了长会话的可读性。

3. **依赖升级与 CI 稳定性是基础盘** —— 今日 8 项 Dependabot PR 与维护者的 CI 基线修复（#5882）几乎同时出现，说明贡献者对"提交能否被快速验证"高度敏感。

4. **Agent 自学习愿景强烈** —— Issue #5860 仅 3 条评论但被列为长期方向，反映社区对"使用即学习"能力的渴望，期望系统能自动从重复任务中抽象技能。

5. **跨平台与构建门槛** —— Windows 上的符号链接行为差异、C 工具链依赖等老问题仍被反复提及，降低贡献门槛的诉求明显。

---

*日报生成完毕。如需对某条 Issue / PR 做深度解读，欢迎进一步交流。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*