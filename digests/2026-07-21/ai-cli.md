# AI CLI 工具社区动态日报 2026-07-21

> 生成时间: 2026-07-21 02:04 UTC | 覆盖工具: 9 个

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
**数据日期：2026-07-21 · 覆盖 7 款主流工具**

---

## 一、生态全景

当前 AI CLI 生态已进入 **"工程化深水区"**：所有主流工具都跨过了"能用"的门槛，正集中暴露**长会话稳定性、计费透明度、子代理可控性、跨平台一致性**等深层问题。今日统计的 7 款工具中有 4 款发布了新版本、6 款处于密集 PR/Issue 流转状态，反映出整个赛道**单点功能迭代趋缓、系统级体验打磨加速**的阶段性特征。

值得注意的是，**安全（CVE 级别 RCE 修复）、成本（配额争议 + Token 黑洞）、Agent 自治边界**已成为最显性的三条主线——技术决策者评估工具时，应从"模型能力"转向"运行时治理能力"。

---

## 二、各工具活跃度对比

| 工具 | 今日 Release | 活跃 Issues | 活跃 PRs | 主要痛点密度 |
|------|-------------|------------|----------|-------------|
| **Claude Code** | v2.1.216（沙箱+长会话） | ~20+ | 7 | 🔴 高（数据丢失 / Cowork Windows） |
| **OpenAI Codex** | rust-v0.145.0-alpha.25/27 | ~15+ | 10 | 🔴 高（配额争议主导情绪） |
| **Gemini CLI** | v0.52.0-nightly | ~15 | ~10 | 🟠 中高（Agent 子系统集中回归） |
| **GitHub Copilot CLI** | v1.0.72 / v1.0.73 | 21 | **0** | 🟡 中（无 PR 日，Issue 积压） |
| **Kimi Code CLI** | 无 | 6 | 3 | 🟡 中（小而精准的修复闭环） |
| **OpenCode** | v1.18.4 | ~20+ | 10 | 🟠 中高（Desktop 稳定性回归） |
| **Pi** | 无 | **50** | **26** | 🟡 中（活跃度全榜第一） |
| **Qwen Code** | v0.20.0-nightly | 47 | ~10+ | 🟠 中高（Token Plan 兼容性 P1） |
| **DeepSeek TUI** | 无（v0.9.1 冲刺中） | 50 | 25 | 🟠 中（品牌迁移 + release-blocker） |

> 📊 **活跃度 Top 3**：Pi、DeepSeek TUI、Qwen Code（含 47-50 Issues/日 级别）
> 📊 **PR/Issue 投入比**：DeepSeek TUI（50%）、OpenCode（50%）、Claude Code（35%）最均衡

---

## 三、共同关注的功能方向

### 1. 🪟 跨平台 / Windows 兼容性（全员痛点）
- **Claude Code** #64592（Windows VM 启动失败）、**OpenAI Codex** #20214（Windows 11 冻结）、**Gemini CLI** #28447（PowerShell 安装）、**GitHub Copilot CLI** #3622（剪贴板）、**Kimi Code** #2521/2522（herdr + session 迁移）、**OpenCode** #38014（npm 插件 Windows）
- **共同诉求**：Desktop / TUI 的 Windows 一等公民支持；WSL 链路稳定性

### 2. 💰 计费透明与成本控制
- **OpenAI Codex** #28879（Plus 配额飙升 10-20 倍，208 评论）、**Claude Code** #79341（Max 20x 强制 credits）、**Pi** #6725（Copilot 成本偏差 30%+）、**Kimi Code** #2209（429 持续 48h）、**GitHub Copilot CLI** #1688/4183（自动压缩不可配置）
- **共同诉求**：账单透明、压缩策略可配、长任务轮询豁免、provider-reported cost 直读（Pi #6881 已落地）

### 3. 🤖 子代理 / Agent 可靠性
- **Gemini CLI** #22323（错误报告成功）、#21409（generalist 永久挂起）；**DeepSeek TUI** #414（诚实子代理）、#2889（伪造细节）；**Qwen Code** #7315/7316（subAgent schema 校验）；**Claude Code** #79023/79560（Skills 调用回归）
- **共同诉求**：子代理状态机可观测、模型/工具/工作区边界统一契约、Plan/Build 模式可切换

### 4. 🔐 沙箱与权限治理
- **Gemini CLI** #28470（a2a-server 零点击 RCE 修复）、**OpenAI Codex** #34398（每环境 PermissionProfile）、**Claude Code** v2.1.216（`sandbox.filesystem.disabled`）、**GitHub Copilot CLI** #4195（code-review 越权写）、**DeepSeek TUI** #4608（权限后置统一）
- **共同诉求**：细粒度权限策略、网络/文件系统可独立管控、安全策略与工作流的摩擦收敛

### 5. ⚡ 长会话 / 上下文管理
- **Claude Code** v2.1.216（修复二次方成本）、**GitHub Copilot CLI** #1688/4183（自动压缩 + CAPI 5MB 上限）、**Pi** #6476（自托管超时回归）、**Kimi Code** #2519/2520（system prompt 冻结 + fork/undo 对齐）
- **共同诉求**：压缩阈值可配、resume 不破坏状态、缓存命中率可观测

### 6. 🛠 MCP 生态稳健性
- **Gemini CLI** #28410（MCP tools/list 10 分钟冻结）、**Qwen Code** #7147（Fastmail MCP 超时）
- **共同诉求**：MCP 发现阶段快速失败、统一错误格式

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 端到端编码代理 + 桌面协作（Cowork） | 企业团队 + 重度 Claude 用户 | Cowork 仍处"地基阶段"；Skills 编排是差异化点 |
| **OpenAI Codex** | 全平台覆盖 + 多模型生态 | 全栈开发者 + Plus/Pro 订阅用户 | Rust CLI 重写 + 桌面三平台统一；配额透明是核心矛盾 |
| **Gemini CLI** | 开放生态 + 自动化基建投入 | Gemini 3 用户 + 插件开发者 | "gcli-intern-project-2026" 大规模自动化 PR 流水线是亮点 |
| **GitHub Copilot CLI** | 深度 GitHub 生态集成 | GitHub 仓库重度使用者 | 多模型路由（Claude/GPT）+ OAuth 流程完善；但 PR 投入停滞 |
| **Kimi Code CLI** | 长上下文 + Goal 模式自动化 | 云端训练/长任务场景 | Goal 模式 + herdr；Windows 平台是明显短板 |
| **OpenCode** | Provider 无关 + Bun/Node 友好 | 多模型切换用户 + Desktop 党 | Provider 适配广（Kimi/DeepSeek/Console Go），Electron 稳定性是隐患 |
| **Pi** | Extension-first + 多供应商网关 | 高级开发者 + 自托管爱好者 | Extension API 是产品差异化核心；50 Issues/26 PRs 体现极高社区黏性 |
| **Qwen Code** | Qwen Cloud + VSCode Companion | Qwen 区域用户 + IDE 重度用户 | autofix 体系（实时拾取托管 Fork PR / 车队状态）领先 |
| **DeepSeek TUI (CodeWhale)** | 高密度 TUI + 品牌迁移 | TUI 原生党 + Token 成本敏感用户 | "诚实子代理" 哲学 + HarmonyOS 移植是亮点 |

---

## 五、社区热度与成熟度评估

### 🔥 高活跃 / 高成熟度
- **Pi**：50 Issues / 26 PRs 全榜第一，Extension API 持续扩展（cost 上报、session 拦截、生命周期 metadata），生态正向飞轮
- **DeepSeek TUI**：50/25 + 18 个 release-blocker 同日合并，体现强执行力
- **Qwen Code**：autofix 6 个 PR 同日落地 + CODEOWNERS 简化，反映治理成熟度

### 🟢 成熟 / 稳定迭代
- **Claude Code**：版本节奏稳定（v2.1.216），但 Cowork 桌面端暴露"地基阶段"问题
- **OpenAI Codex**：Rust CLI 0.145 临近正式版，底层治理（权限/代理/沙箱）扎实
- **OpenCode**：v1.18.4 持续打磨多 Provider 适配

### 🟡 快速迭代 / 风险暴露
- **GitHub Copilot CLI**：v1.0.72/73 双发但 **24h 内 0 PR**——Issue 涌入（21 条）多于修复速度，**信号偏弱**
- **Gemini CLI**：Nightly 节奏正常，但 a2a-server RCE 提示安全审计仍需加强
- **Kimi Code**：规模小但 Issue→PR 命中率 100%，节奏健康；服务端 429 是悬而未决的硬伤

---

## 六、值得关注的趋势信号

### 📈 趋势 1：Agent 可控性成为产品分水岭
**信号**：6/7 工具在 24h 内都有子代理/Agent 相关的高优 Issue。"自治 vs 可信"的张力普遍爆发——Claude Code Skills 回归、Gemini generalist 挂起、DeepSeek "诚实子代理" 路线、Qwen subAgent schema 校验。
**对开发者的参考**：选型时优先评估"subagent 是否能报告真实失败状态"、"Plan/Build 模式是否可切换"、"权限契约是否统一"。

### 📈 趋势 2：成本透明从"加分项"升级为"基础项"
**信号**：OpenAI Codex #28879 已成仓库最激烈工单（208 评论），Pi #6725/6881 推动 provider-reported cost 直读，Kimi 48h 429 限流。
**对开发者的参考**：在生产化部署前，必须验证工具是否提供：① 实时配额可视化 ② 长任务的轮询豁免通道 ③ 与上游账单一致的 cost 核算。

### 📈 趋势 3：Windows / 桌面端不再是"延后优化"
**信号**：Claude Code Cowork Windows 故障群、OpenAI Codex 多 build 卡死、OpenCode Electron 生命周期问题密集爆发、GitHub Copilot 剪贴板回归。
**对开发者的参考**：跨平台工具的 Windows 表现已成为**采购决策硬指标**——尤其企业 POC 阶段。

### 📈 趋势 4：安全治理进入主动修复期
**信号**：Gemini CLI #28470 RCE 修复（XL 级 PR）、OpenAI Codex #34398/#34436 权限 + 代理治理、Qwen Code #7256 daemon 密钥剥离。
**对开发者的参考**：关注工具的"权限策略可独立审计"能力——尤其在企业网络/受信任目录场景下。

### 📈 趋势 5：自动化治理（Issue→PR）成为头部工具的标配
**信号**：Gemini SSR Pipeline（5 个 XL 级 PR 同日）、Qwen autofix（6 个 PR 同日）、DeepSeek 18 个 release-blocker 同合。
**对开发者的参考**：维护活跃度可量化为"Issue→修复" 的自动化程度，这也将反向影响社区响应速度。

### 📈 趋势 6：Extension API 是下一个差异化战场
**信号**：Pi 50 条 Issue 中 1/3 在请求/扩展 Extension API（cost 上报、session 改写、生命周期 metadata），已成 Pi 产品护城河。
**对开发者的参考**：评估 CLI 工具时，"是否能扩展 TUI/生命周期钩子"将决定长期可塑性。

---

## 总结建议

| 使用场景 | 推荐优先级 |
|---------|-----------|
| **企业团队 + Claude 重度用户** | Claude Code（关注 Cowork 成熟度）|
| **多模型策略 + 透明计费** | OpenAI Codex（关注 #28879 进展）+ Pi（Extension 生态） |
| **Gemini 生态 + 自动化深度** | Gemini CLI（关注安全审计节奏） |
| **GitHub 全家桶** | GitHub Copilot CLI（短期观望，等待 PR 恢复） |
| **TUI 原生党 + Token 成本敏感** | DeepSeek TUI / OpenCode |
| **长任务 / 云端训练** | Kimi Code CLI（关注服务端稳定性） |
| **区域化 + IDE 深度集成** | Qwen Code |

> 💡 **核心结论**：当前 AI CLI 选型的关键已从"模型能力"转向 **"运行时治理 + 跨平台一致性 + 成本透明 + Agent 可控性"** 四维评估框架。开发者应优先验证目标工具在 P1 数据丢失、配额异常、子代理失信、桌面端崩溃四类"暗病"上的历史表现。

---

*报告基于 2026-07-21 GitHub 公开数据生成，覆盖 Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI 共 9 款工具。*

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-21 | 数据源：github.com/anthropics/skills**

---

## 一、热门 Skills 排行

> 注：原始数据中 PR 评论数（评论字段）均为 undefined，排行依据"是否回应高评论 Issue"、"PR 内容成熟度"、"更新时间"综合判定。

### 🥇 1. skill-creator 评测体系修复（PR #1298）
- **作者**：MartinCajiao | **状态**：OPEN
- **功能**：修复 `run_eval.py` 一直报 `recall=0%` 的核心 bug，修正 Windows 流读取、触发检测和并行 worker
- **讨论热点**：直接回应 Issue #556（12 评论、7 👍），已有 10+ 独立复现，描述优化循环当前在"对着噪声优化"，是 skill-creator 工具链最大的可用性阻塞
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 2. self-audit 自我审计 Skill（PR #1367）
- **作者**：YuhaoLin2005 | **状态**：OPEN（2026-07-02 更新）
- **功能**：AI 输出交付前的质量门禁——机械文件验证 + 四维推理质量审计
- **讨论热点**：与 Issue #1385（3 评论）提案的"Reasoning Quality Gate Pipeline"形成体系化互补，属于当前最活跃的元能力（meta-skill）方向
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

### 🥉 3. document-typography 文档排版控制 Skill（PR #514）
- **作者**：PGTBoos | **状态**：OPEN
- **功能**：自动修复 AI 生成文档中的孤词/寡行/页眉孤立/编号错位等排版问题
- **讨论热点**：触达"每份 Claude 生成的文档都会受影响"这一普遍痛点；用户很少主动要求好排版，因此是典型"普适但缺失"的能力
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

### 4. skill-quality-analyzer & skill-security-analyzer（PR #83）
- **作者**：eovidiu | **状态**：OPEN
- **功能**：5 维质量分析 + 安全分析的两个元技能，覆盖结构/文档/示例等
- **讨论热点**：直接呼应 Issue #492（43 评论，2 👍）提出的"社区 Skill 冒充官方命名空间"的信任边界问题，是当前安全方向的核心抓手
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

### 5. ODT 开放文档格式 Skill（PR #486）
- **作者**：GitHubNewbie0 | **状态**：OPEN
- **功能**：创建/填充/解析 ODT、ODS 等 OpenDocument 格式
- **讨论热点**：补齐 PDF/DOCX 之外的开放标准能力；与 SAP-RPT-1-OSS（PR #181）等企业向提案共同形成"企业开源栈"方向
- **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

### 6. testing-patterns 测试模式 Skill（PR #723）
- **作者**：4444J99 | **状态**：OPEN
- **功能**：覆盖 Testing Trophy、AAA 模式、React 组件测试、集成/E2E 全链路
- **讨论热点**：工程团队最普遍的诉求之一；与 frontend-design（PR #210）共同构成"工程实践 Skill 包"
- **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

### 7. color-expert 色彩专家 Skill（PR #1302）
- **作者**：meodai | **状态**：OPEN
- **功能**：覆盖 ISCC-NBS、Munsell、OKLCH 等 10+ 色彩体系与"何时用哪个色空间"决策表
- **讨论热点**：前端/设计领域常被低估的硬技能，单 PR 即贡献了完整决策树
- **链接**：[PR #1302](https://github.com/anthropics/skills/pull/1302)

### 8. frontend-design 前端设计 Skill 改进（PR #210）
- **作者**：justinwetch | **状态**：OPEN
- **功能**：重写 frontend-design，确保每条指令 Claude 在单轮对话内可执行
- **讨论热点**：解决"skill 文档像给人看而不是给 Claude 执行"的元问题
- **链接**：[PR #210](https://github.com/anthropics/skills/pull/210)

---

## 二、社区需求趋势（来自 Issues）

| 需求方向 | 代表 Issue | 评论数 | 👍 | 核心诉求 |
|---------|-----------|-------|---|---------|
| 🔒 **Skill 安全/信任体系** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 2 | 社区 Skill 在 `anthropic/` 命名空间下分发造成信任边界滥用 |
| 🏢 **企业级共享与协作** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | 7 | 跳过下载→Slack→手工上传的链路，需要组织级 Skill 库 |
| 🛠 **工具链核心 bug 修复** | [#556](https://github.com/anthropics/skills/issues/556) | 12 | 7 | `run_eval.py` 0% 触发率，描述优化完全失效 |
| 🧩 **Skill 生命周期管理** | [#62](https://github.com/anthropics/skills/issues/62) | 10 | 2 | Skill 莫名消失、迁移与持久化机制缺失 |
| 🧠 **Agent 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 0 | long-running agent 上下文爆炸，需要 compact-memory 等符号化记法 |
| ✍️ **skill-creator 自身重构** | [#202](https://github.com/anthropics/skills/issues/202)（CLOSED） | 8 | 1 | skill-creator 偏开发者文档风格，违反 token 经济原则 |
| 🛡 **Agent 治理/合规** | [#412](https://github.com/anthropics/skills/issues/412)（CLOSED） | 6 | 0 | 策略执行、威胁检测、信任评分、审计轨迹 |
| 📦 **插件内容重复** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | 9 | `document-skills` 与 `example-skills` 安装后内容重复 |
| 🔌 **Skills ↔ MCP 互转** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 0 | Skill 内部能力对外暴露为 MCP 协议 |
| 🪟 **Windows 平台兼容** | [#1061](https://github.com/anthropics/skills/issues/1061) | 3 | 2 | PATHEXT/cp1252/select 三大类 Unix 假设问题 |

**趋势归纳**：社区正在从"单点 Skill 上传"演化为"**企业级安全 + 共享 + 治理**"的完整诉求链；底层 `skill-creator` 工具链的稳定性（Windows、UTF-8、YAML、eval 触发率）成为最迫切的瓶颈。

---

## 三、高潜力待合并 Skills

以下 PR 满足"评论活跃 + 修复明确阻塞 + 实现完整"三条件，预期近期落地：

| PR | Skill / 修复 | 关键证据 | 链接 |
|---|---|---|---|
| **#1298** | skill-creator run_eval 全套修复 | 直接解决 #556（12 评论）+ 10+ 复现 | [链接](https://github.com/anthropics/skills/pull/1298) |
| **#1099** | Windows 子进程 pipe 修复 | 解决 #1061 三大阻塞之一 | [链接](https://github.com/anthropics/skills/pull/1099) |
| **#1050** | Windows PATHEXT + 编码修复 | 1 行级修复，影响面广 | [链接](https://github.com/anthropics/skills/pull/1050) |
| **#541** | DOCX tracked-change w:id 冲突修复 | 文档损坏级 bug，影响每个含书签的 docx | [链接](https://github.com/anthropics/skills/pull/541) |
| **#538** | PDF SKILL.md 大小写一致性修复 | 8 处 case-sensitivity，影响所有 Linux 部署 | [链接](https://github.com/anthropics/skills/pull/538) |
| **#362** | UTF-8 多字节字符 panic 修复 | skill-creator 通用鲁棒性 | [链接](https://github.com/anthropics/skills/pull/362) |
| **#361** | YAML 特殊字符静默错解析检测 | 与 #539 形成同类修复协同 | [链接](https://github.com/anthropics/skills/pull/361) |
| **#1323** | run_eval 触发检测漏判修复 | 同样是 #556 的根因之一 | [链接](https://github.com/anthropics/skills/pull/1323) |
| **#514** | document-typography 新增 | 长期被多次请求的"普适"能力 | [链接](https://github.com/anthropics/skills/pull/514) |
| **#509** | CONTRIBUTING.md 文档 | 解决 #452，仓库社区健康分从 25% 提升 | [链接](https://github.com/anthropics/skills/pull/509) |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是：在"让 Skill 真正能跑起来"之前，请先把 skill-creator 工具链的 Windows 兼容、UTF-8/YAML 鲁棒性、run_eval 触发检测这些**底层缺陷修干净**——没有可靠的自举工具，所有上层 Skill（企业治理、安全审计、自我审计）都站在噪声之上。**

---

*报告生成基于 anthropics/skills 仓库公开数据，PR 评论字段在原始数据中为空，本报告的热度评估综合了"问题 Issue 评论数 + PR 实质内容 + 更新时间"三维指标。*

---

# Claude Code 社区动态日报
**日期：2026-07-21**

---

## 📌 今日速览

v2.1.216 今日发布，带来沙箱权限细化和长会话性能修复两项重要更新。社区方面，**多账号管理**(#18435) 持续高居讨论榜首（668 👍 / 148 评论），Cowork 在 Windows/macOS 上的稳定性问题以及 Skills 组合调用相关的回归 Bug 成为近期最活跃的反馈主题。

---

## 🚀 版本发布 — v2.1.216

| 变更 | 说明 |
|---|---|
| ✅ **新增** | `sandbox.filesystem.disabled` 设置：跳过文件系统隔离、仅保留网络出站控制 |
| 🐛 **修复** | 长会话中消息归一化成本随轮次**二次方**增长导致的数秒卡顿与恢复缓慢 |

> 📎 这是一项对长会话用户和高频调用场景非常实用的性能修复；新设置则为需要读写本地项目文件的开发流程提供了更灵活的沙箱配置空间。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 为什么值得关注 |
|---|---|---|---|
| 1 | [#18435](https://github.com/anthropics/claude-code/issues/18435) **多 Claude 账号切换**（enhancement, auth/ide） | 💬 148 / 👍 668 | 长期高居榜首的需求，许多个人/团队用户因工作与个人账号分离而强烈呼吁官方支持 |
| 2 | [#28125](https://github.com/anthropics/claude-code/issues/28125) **Cowork 无法添加私有 GitHub marketplace** | 💬 36 / 👍 30 | 企业用户的核心协作入口被阻断，影响私有插件分发 |
| 3 | [#23626](https://github.com/anthropics/claude-code/issues/23626) **支持与其他分支做 diff 比较**（enhancement, ide） | 💬 33 / 👍 95 | 几乎所有 PR 工作流都需要，呼声长期居高 |
| 4 | [#62272](https://github.com/anthropics/claude-code/issues/62272) **Chat JSONL 被强制删除 — 数据丢失** | 💬 18 / 👍 3 | ⚠️ **数据丢失**类高严重问题，`cleanupPeriodDays` 配置被忽略；作者已发布 Time Machine 恢复脚本 |
| 5 | [#64592](https://github.com/anthropics/claude-code/issues/64592) **Windows 11 Cowork VM 服务无法启动** | 💬 12 / 👍 0 | 关联此前两个已关闭 issue 的同一故障集群，确认可复现 + 提供 workaround（手动开启 VM Platform） |
| 6 | [#61021](https://github.com/anthropics/claude-code/issues/61021) **VSCode 中无法正常复制/选择文本** | 💬 11 / 👍 8 | 终端基础交互能力退化，影响日常开发手感 |
| 7 | [#69829](https://github.com/anthropics/claude-code/issues/69829) **高并发下 agent harness 出现随机文本插入**（已关闭） | 💬 11 / 👍 0 | 20+ agent 并发时插入异常 "hello" 文本，已修复可参考 |
| 8 | [#49790](https://github.com/anthropics/claude-code/issues/49790) **Claude Desktop SSH 远程断连后无法恢复会话** | 💬 10 / 👍 29 | 远程开发刚需，SSH 断开后必须重启任务，体验差 |
| 9 | [#60848](https://github.com/anthropics/claude-code/issues/60848) **"Don't ask me again" 选项含义模糊** | 💬 8 / 👍 13 | 长会话 resume 时弹窗容易误选，反映 TUI 文案细节问题 |
| 10 | [#79341](https://github.com/anthropics/claude-code/issues/79341) **Max 20x 计划下 Fable 5 被错误强制使用 credits** | 💬 5 / 👍 8 | 计费/模型路由 bug，已被标记为 duplicate |

---

## 🛠 重要 PR 进展（Top 7，过去24小时共 7 条）

| # | PR | 内容 |
|---|---|---|
| 1 | [#79620](https://github.com/anthropics/claude-code/pull/79620) **TTS 朗读 Hook（无障碍场景）** | 跨平台文本转语音：Linux Piper / macOS `say` / Windows PowerShell，支持 Markdown 解析与代码块跳过 |
| 2 | [#78532](https://github.com/anthropics/claude-code/pull/78532) **GCP Gateway 示例：可选内部 ALB + Cloud SQL PG16 修复** | 修复 fresh `terraform apply` 在 PG16 默认 ENTERPRISE_PLUS 版本下报错的兼容性问题 |
| 3 | [#74722](https://github.com/anthropics/claude-code/pull/74722) **`/commit-push-pr` 支持 Conventional Branch 命名** | `<type>/<description>` 自动推断 type，方便规范化的分支管理 |
| 4 | [#79385](https://github.com/anthropics/claude-code/pull/79385) **修复 auto-close-duplicates 机器人：识别任意用户的 👎** | 当前逻辑只检测 issue 作者的反应，与 bot 描述不符 |
| 5 | [#79387](https://github.com/anthropics/claude-code/pull/79387) **`edit-issue-labels.sh` 缺少参数时输出明确错误** | 修复静默 exit code 1 |
| 6 | [#66650](https://github.com/anthropics/claude-code/pull/66650) **修正插件清单作者全名**（已关闭） | `pr-review-toolkit` 插件作者字段从 "Daisy" 修正为 "Daisy Hollman" |
| 7 | [#1](https://github.com/anthropics/claude-code/pull/1) **SECURITY.md**（已关闭） | 仓库安全策略文件落地 |

---

## 📈 功能需求趋势

从过去 24 小时的 Issues 标签与标题提炼：

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **🧩 IDE / 桌面集成深化** | #18435、#23626、#61021、#79358 | Diff 分支对比、VSCode 终端交互、CI 自动修复 checkbox 回归——"桌面体验不够精细"是密集反馈区 |
| **🪟 Cowork / 桌面稳定性** | #28125、#64592、#69663、#62116 | 跨 Windows/macOS 的 VM 服务、marketplace、recents 缺失、Home 版安装失败——Cowork 仍处于"地基阶段" |
| **🧠 Skills 组合调用回归** | #79023、#79560 | 自定义 skill 调用内置 `/code-review` 在 v2.1.215 起失败，影响自动化 PR 工作流 |
| **💰 计费 / 模型路由** | #79341、#75055 | Max 20x 强制 credits、workflow 子 agent 模型不可覆盖——成本可控性是新的关注焦点 |
| **🔐 账号 / 鉴权 / 网络** | #18435、#77765、#76653、#79612 | 多账号切换、`/login` 卡死、loopback 代理被屏蔽、信任目录 MCP 审批不一致 |
| **🛡 数据安全 / 可靠性** | #62272、#78273、#79615、#79610 | 会话 JSONL 被删、文件覆盖丢失、`/stop` 无法中断、headless `claude -p` 永久挂起——一组高严重度回归 |
| **⚡ 长会话 / 性能** | v2.1.216 修复；#60848 衍生 UX | 消息量二次方成本已被修复，但 resume 时的提示文案仍是痛点 |

---

## 👨‍💻 开发者关注点总结

**痛点（高频抱怨）：**

1. **Cowork 在 Windows 上的可用性仍不达标**——VM 启动、marketplace 安装、recents 列表问题集中爆发，企业 POC 阶段即可见阻。
2. **Skills 编排开始出现回归**——`v2.1.215` 后自定义 skill 无法调用内置 `/code-review`，破坏了"PR 自动审查 + 修复"这条高频自动化链路（[#79023](https://github.com/anthropics/claude-code/issues/79023)、[#79560](https://github.com/anthropics/claude-code/issues/79560)）。
3. **数据丢失是高严重但低 👍 的暗病**——`~/.claude/projects/` 中的 Chat JSONL 被无视配置删除（[#62272](https://github.com/anthropics/claude-code/issues/62272)），Claude 静默覆写用户原文件（[#78273](https://github.com/anthropics/claude-code/issues/78273)），`/stop` 无法中断扣费中的任务（[#79615](https://github.com/anthropics/claude-code/issues/79615)）。
4. **可中断性与可恢复性不足**——headless `claude -p` 持有 CLOSED 套接字永不超时（[#79610](https://github.com/anthropics/claude-code/issues/79610)）；SSH 远程断开后会话终止（[#49790](https://github.com/anthropics/claude-code/issues/49790)）。

**需求热点（高 👍）：**

- 🔥 **多账号切换**（668 👍）——账号管理仍是 #1 长期需求。
- 🔥 **IDE 增强**——非 main 分支 diff（95 👍）、CI Auto-fix 回归都直指 PR 协作体验。
- 🔥 **沙箱/网络策略可配置**——v2.1.216 的 `sandbox.filesystem.disabled` 正好回应了这条。
- 🔥 **Workflow 子 agent 模型/工具可覆盖**——成本控制 + 工具白名单是 Agent 化工程的关键诉求。

---

*📊 数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) — 截至 2026-07-21 当日活跃数据。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-21**

---

## 一、今日速览

今日 Codex 仓库活跃度依然集中在**桌面端性能问题**与**配额计费透明度**两大方向。最受关注的议题仍是 #28879（Plus 计划 gpt-5.5 配额消耗异常飙升 10–20 倍，评论数突破 200），与 Linux 桌面客户端的长期诉求 #11023（点赞 801，稳居仓库最热门）。Rust CLI 侧今日连发 `0.145.0-alpha.25` 与 `0.145.0-alpha.27` 两个 alpha 版本，节奏较前期明显加快，提示 0.145 正式版已临近。

---

## 二、版本发布

| 版本 | 备注 |
| --- | --- |
| `rust-v0.145.0-alpha.25` | 凌晨发布，紧随 alpha.24 |
| `rust-v0.145.0-alpha.27` | 最新 alpha，跳号说明中间可能存在未公开的 alpha.26 |

> 注：仓库页未提供详细 changelog，从 PR 列表推断本轮 alpha 主要包含 Windows exec server 沙箱化、远程压缩历史优化、共享 skill 模型重构等底层变更。Rust CLI 用户可在升级前关注 CLI 0.145.0 正式版的 release notes。

---

## 三、社区热点 Issues（Top 10）

### 1. [#28879](https://github.com/openai/codex/issues/28879) — Plus 计划配额消耗异常飙升（208 评论 / 👍358）
**标签：** bug, rate-limits, app  
自 6 月 16 日起，gpt-5.5 在 Codex 中的「单 token 配额占比」出现约 10–20 倍跃升，5 小时窗口在 2–3 次 prompt 内即耗尽。社区集中附上 `token_count` / `rate_limits` 事件截图佐证，呼声强烈。这是当前仓库内**情绪最激烈**的工单，OpenAI 团队尚未给出明确归因。

### 2. [#11023](https://github.com/openai/codex/issues/11023) — Codex Linux 桌面客户端（181 评论 / 👍801）
**标签：** enhancement, app  
长期高居仓库热度榜首：因 macOS 上电量与稳定性问题（参见 #10432），用户呼吁官方提供原生 Linux 桌面版本。👍 数远超其他工单，**是仓库当前最被期待的功能**。

### 3. [#20214](https://github.com/openai/codex/issues/20214) — Windows 11 Pro 桌面端频繁卡顿/冻结（60 评论 / 👍68）
**标签：** bug, windows-os, app, performance  
Ryzen 5 5600 / 32GB 内存环境下仍频繁 stutter，结合后续 #26401、#34025、#34305 等多条 Windows 卡死工单来看，**Windows 桌面端稳定性已形成系统性抱怨**。

### 4. [#13733](https://github.com/openai/codex/issues/13733) — 后台进程轮询浪费 token（31 评论 / 👍29）
**标签：** bug, rate-limits, tool-calls, session  
`cargo build` / `cargo test` 等长任务中，每次 `write_stdin` 轮询都会触发带完整历史的 API turn。作者提议引入"轮询豁免"或"轻量上下文"通道，是典型的**成本与效率痛点**。

### 5. [#31836](https://github.com/openai/codex/issues/31836) — Projects 排序「最近更新」失效（23 评论 / 👍26）
**标签：** bug, app  
macOS Apple Silicon 上「Sort By Last updated」只对项目内任务生效，无法跨项目排序；属于明显 UI 行为与文档不符。

### 6. [#24287](https://github.com/openai/codex/issues/24287) — Codex Desktop 卡在 Thinking 且 Stop 失败（16 评论 / 👍5）
**标签：** bug, app, session, app-server  
提交 prompt 后 UI 永久处于 Thinking，重启后该 turn 消失。M1 Max / macOS 15.6.1，desktop build `26.519.41501`。

### 7. [#26633](https://github.com/openai/codex/issues/26633) — Desktop 自动化忽略 RRULE 时区（15 评论 / 👍3）
**标签：** bug, app, automations  
`DTSTART;TZID=Europe/Paris` 未生效，下一次执行按 UTC 计算；Pro 用户工作流受损。

### 8. [#31969](https://github.com/openai/codex/issues/31969) — `gpt-5.3-codex-spark` 不支持 `reasoning.summary`（14 评论 / 👍8）
**标签：** bug, app, config  
暴露模型 → 配置兼容矩阵缺失：Spark 模型直接被默认 `reasoning.summary` 参数拒收，社区呼吁**统一模型能力声明**。

### 9. [#23200](https://github.com/openai/codex/issues/23200) — Codex Mobile 直连无头远程 Linux（12 评论 / 👍42）
**标签：** enhancement, iOS, remote  
希望 Codex iOS 客户端能直接连 SSH 跳板机上的 Linux 环境，而不再依赖桌面客户端常驻。

### 10. [#16127](https://github.com/openai/codex/issues/16127) — `yeet` skill 过于强势（11 评论 / 👍26）
**标签：** bug, skills  
skill 自动改写分支名、加 `[codex]` 前缀并在 `jj` 仓库上调用 git。建议改为 opt-in，体现**对 skill 系统的边界与可控性**诉求。

---

## 四、重要 PR 进展（Top 10）

### 1. [#34398](https://github.com/openai/codex/pull/34398) — 每环境独立的 PermissionProfile
由 OpenAI 工程师 pakrym-oai 提交，已合并。允许不同 env 在 thread `PermissionProfile` 基础上做覆盖，覆盖范围涉及 shell、apply-patch、approval、managed-network 等关键决策点。**权限系统颗粒度的重大升级**。

### 2. [#34423](https://github.com/openai/codex/pull/34423) — exec server 支持 Windows 沙箱
exec server 之前在 Windows 上无法启动沙箱进程，本次新增共享的 native launcher，根据策略选择 Windows sandbox session backend 或 PTY/pipe。对 Windows 用户意义重大。

### 3. [#34436](https://github.com/openai/codex/pull/34436) — managed permission profile 纳入网络代理解析
修复 `requirements.toml` 中 profile 被选中后，其网络配置未参与代理决策的漏洞，**治理企业网络环境**下代理行为不一致的问题。

### 4. [#34435](https://github.com/openai/codex/pull/34435) — 显式解析出站代理路由
避免系统代理发现阻塞或在不同 transport 间重复回退，统一收敛到「环境代理 → 直连」顺序，提升启动稳定性。

### 5. [#34431](https://github.com/openai/codex/pull/34431) — 远程压缩历史处理优化
对大历史做"一次性 token 估算 + 关闭 tracing 时避免全量 clone"，明显降低远程 compaction 的 CPU 与内存压力。

### 6. [#34429](https://github.com/openai/codex/pull/34429) — 共享 skill 模型迁移至 `codex-skills`
将 skill 元数据、policy、依赖、接口与配置规则类型抽离到独立 crate，core/plugin/extension 改用共享模型同时保留 re-export，**为 skill 生态标准化铺路**。

### 7. [#34434](https://github.com/openai/codex/pull/34434) — 非 request 类审批策略支持 catalog 文案
为 `never` / `unless_trusted` 两种审批策略提供模型目录对应的提示语变体，缺失时回退到内置文案，**多模型体验一致性**提升。

### 8. [#34438](https://github.com/openai/codex/pull/34438) — patch approval 测试超时上调至 15s
消除 CI 中偶发的 patch approval 事件超时误判。

### 9. [#34407](https://github.com/openai/codex/pull/34407) — 支持分页 rollout 谱系解析
引入本地 thread-store resolver，沿 `history_base` 链接展开并校验循环；为「超大历史归档回溯」提供基础设施。

### 10. [#34417](https://github.com/openai/codex/pull/34417) — `app/read` 连接器元数据扩展
新增 `iconUrlDark`、`distributionChannel`、`installUrl`、`pluginDisplayNames` 等字段；从已启用插件读取展示名而无需启动 MCP。**桌面连接器市场化的前置准备**。

---

## 五、功能需求趋势

| 方向 | 代表 Issue | 趋势信号 |
| --- | --- | --- |
| **跨平台支持** | #11023（Linux 桌面）、#23200（iOS 直连远程）、#26164（Windows-to-Windows SSH） | 桌面端平台覆盖仍是社区最大诉求，Linux 呼声最高 |
| **配额/计费透明度** | #28879、#32726（reset 卡显示精确到期时间） | Plus/Pro 用户对"扣费规则不透明"容忍度快速下降 |
| **性能与稳定性** | #20214、#26401、#34025、#34305、#31401（TUI 30-90s 卡死） | Windows 桌面 + TUI 是稳定性的双薄弱点 |
| **Skill 系统可控性** | #16127、#34429（共享模型） | 默认行为触发与 skill 边界成为新讨论焦点 |
| **后台/长任务成本** | #13733 | 与配额问题联动，反映对**省 token 模式**的强烈需求 |
| **模型能力声明一致性** | #31969、#31817（models.json 自动更新） | 社区希望更结构化、可读的模型能力矩阵 |
| **项目/会话组织** | #31836、#26070、#29681 | Projects / Pinned / 标题前缀等小型 UX 需求集中出现 |

---

## 六、开发者关注点

1. **「为什么我的预算烧得这么快」**——#28879 是目前最具代表性的开发者焦虑：相同 prompt 消耗配额飙升却无官方解释，社区已自行拉取日志对比。
2. **Windows 桌面仍是高风险平台**——多条 build `26.7xx` 卡死/冻结工单指向 MoAppHang、Defender 兼容、300+ 进程冷启动等具体场景，开发者对"统一 ChatGPT/Codex 桌面"整合持保留态度。
3. **后台任务偷跑 token**——`cargo build` 等长流程在轮询期间被重复计费，开发者希望提供轻量轮询或显式声明。
4. **Skill 的「自动触发」边界**——`yeet` 这类默认 skill 行为过于强势，社区呼吁 opt-in 而非 opt-out。
5. **Linux 客户端缺失**——点赞 801 的长期诉求说明开发者愿意为原生 Linux 客户端付费/迁移。
6. **模型能力声明缺失**——`gpt-5.3-codex-spark` 与 `reasoning.summary` 的不兼容暴露配置矩阵不完整，自动化工作流因此更脆弱。

---

**日报小结：** 今天的工作集中在底层治理（权限、代理、沙箱、压缩历史）与体验修复（Windows 卡顿、配额透明度），社区情绪由配额争议主导。Rust CLI 0.145 节奏加速值得持续跟踪，建议关注下一个 alpha 是否带来 App/CLI 的联动说明。

> 数据来源：[github.com/openai/codex](https://github.com/openai/codex)（2026-07-21 UTC 窗口）

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-21** | 数据来源：github.com/google-gemini/gemini-cli

---

## 📌 今日速览

今日最关键的进展是 **a2a-server 严重 RCE 漏洞修复 PR (#28470)** 进入评审流程，这是过去 24 小时内影响范围最大的安全更新。同时，**agent 子系统的多个 P1 级 Bug 集中进入 retesting 阶段**（subagent 恢复、generalist 挂起、shell 执行卡死），表明 0.52 版本对 agent 体验的稳定性正在密集打磨。Nightly 版本 `v0.52.0-nightly.20260721.gacae7124b` 照常发布。

---

## 🚀 版本发布

### v0.52.0-nightly.20260721.gacae7124b
常规夜间构建版本，与昨日 nightly 相比差异较小，主要包含持续集成与 bot 自动化更新。
- 📦 完整变更日志：[Compare](https://github.com/google-gemini/gemini-cli/compare/v0.52.0-nightly.20260720.gacae7124b...v0.52.0-nightly.20260721.gacae7124b)
- 🤖 版本自动 bump PR：[#28471](https://github.com/google-gemini/gemini-cli/pull/28471)

---

## 🔥 社区热点 Issues（Top 10）

> 挑选标准：评论数高 + 优先级高 + 影响范围广

### 1. [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) ⭐ P1 · 评论 12
**Subagent 在 MAX_TURNS 后被错误报告为 GOAL 成功**
`codebase_investigator` 子代理达到最大轮次限制后仍返回 `status: "success"`，掩盖了真实中断状态。影响用户对子代理执行结果的信任。
- 🏷️ kind/bug, status/need-retesting

### 2. [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) ⭐ P1 · 评论 7 · 👍 8
**Generalist Agent 挂起（社区最高赞）**
通用代理在执行简单任务（如创建文件夹）时永久挂起，最长可达 1 小时。提示词中明确禁止使用子代理可绕过。
- 🏷️ kind/bug, status/need-retesting

### 3. [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) ⭐ P2 · 评论 8
**基于 Zero-Dependency OS 沙箱的 Bash 原生能力释放**
针对 Gemini 3 模型对 POSIX 工具链的天然偏好，提议构建无依赖的 OS 级沙箱与执行后意图路由，以兼顾模型能力与用户安全。
- 🏷️ kind/enhancement, effort/large

### 4. [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) ⭐ P1 · 评论 7
**组件级评估体系的 EPIC**
在已有 76 个行为评估测试、覆盖 6 个 Gemini 模型基础上，进一步推进组件级 eval 体系，是评估基础设施的关键演进。

### 5. [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) ⭐ P2 · 评论 7
**AST 感知的文件读取/搜索/映射能力评估**
探讨通过 AST 工具实现更精准的方法边界读取，减少 token 噪声并改善 codebase 导航。
- 🏷️ kind/feature, kind/customer-issue

### 6. [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) ⭐ P2 · 评论 6
**Gemini 极少主动使用 skills 和 sub-agents**
自定义技能与子代理在未被显式提示时几乎不会被调用，影响高级用户的生产力配置体验。

### 7. [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) ⭐ P1 · 评论 4 · 👍 3
**Shell 命令完成后卡在 "Waiting input"**
简单 CLI 命令执行完后界面仍显示等待用户输入，但实际命令已结束，需手动干预。
- 🏷️ area/core, effort/medium

### 8. [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) ⭐ P2 · 评论 5
**Auto Memory 反复重试低信号会话**
提取代理对低信号会话无限次循环读取，造成资源浪费。
- 🏷️ kind/bug

### 9. [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) ⭐ P1 · 评论 4
**Browser 子代理在 Wayland 下失败**
Linux Wayland 用户使用 browser_agent 失败，反映桌面环境兼容性盲区。

### 10. [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) ⭐ P2 · 评论 3
**Auto Memory 缺少确定性脱敏**
敏感内容在进入模型上下文后才被指令脱敏，存在安全隐患，需前置脱敏机制。
- 🏷️ area/security, kind/bug

---

## 🛠️ 重要 PR 进展（Top 10）

### 🔒 安全相关

#### [#28470](https://github.com/google-gemini/gemini-cli/pull/28470) — **修复 a2a-server 零点击 RCE 漏洞** 🚨
**作者：** luisfelipe-alt | Size: XL | OPEN
通过重构启动顺序与环境加载机制、引入 `AsyncLocalStorage` 任务隔离，阻止 untrusted workspace 下的远程代码执行与环境变量注入。**今日最值得关注的安全 PR。**

#### [#28319](https://github.com/google-gemini/gemini-cli/pull/28319) — **a2a-server 路径信任前置与任务环境隔离重构**（已关闭）
与 #28470 配套的重构分支，已合并/关闭，反映该安全修复经历了较严格的内部迭代。

#### [#28469](https://github.com/google-gemini/gemini-cli/pull/28469) — **模型回退时轮换 session ID**
修复永久回退到 `gemini-5-flash` 后，由于 Code Assist 后端有状态导致立即重试失败的阻塞错误。

### ⚡ 性能与体验

#### [#28410](https://github.com/google-gemini/gemini-cli/pull/28410) — **MCP tools/list 发现超时改为快速失败** ⭐ P1
MCP `tools/list` 在 server 无响应（JSON-RPC id 不匹配）时会静默冻结 CLI 启动长达 10 分钟，现改为短超时快速失败。

#### [#28405](https://github.com/google-gemini/gemini-cli/pull/28405) — **修复内容更新时滚动位置跳变** ⭐ P1
解决 Issue #5009：用户上滚浏览历史时新内容到达导致视图跳到顶/底，影响长时间会话的查看体验。

### 🤖 Agent 与工具链基建

#### [#28431–#28435](https://github.com/google-gemini/gemini-cli/pulls?q=is%3Apr+pr-generator) — **SSR Code Generation Pipeline 多模块落地**
作者 joneba-google 一系列 XL 级 PR，搭建 Issue-to-PR 自动代码生成流水线的核心模块：
- #28431: Cloud Run Job / Workflow / Dockerfile 基础设施
- #28432: Firestore 双锁并发控制
- #28433: 主调度状态机与容器入口
- #28434: Antigravity agent runner 与 prompt 模板
- #28435: 环境解析、子进程执行、GitHub API 客户端

这是 Google 内部"gcli-intern-project-2026"计划的集中落地，预示未来自动化 PR 生成能力。

### 📝 Caretaker 与发布

#### [#28468](https://github.com/google-gemini/gemini-cli/pull/28468) — **caretaker triage Cloud Run job 工作流**
为 Pub/Sub 事件触发的 triage pipeline 增加 Workflow 编排。

#### [#28467](https://github.com/google-gemini/gemini-cli/pull/28467) — **caretaker Firestore schema 升级**
增加 error、pr_number 字段，修复 ingestion-service 的 auto-close 状态。

#### [#28411](https://github.com/google-gemini/gemini-cli/pull/28411) — **feature request 自动关闭前发送解释评论**
被归类为 FEATURE 类的 issue 在自动关闭前向用户说明当前工程聚焦于核心稳定性，提升社区沟通质量。

#### [#28447](https://github.com/google-gemini/gemini-cli/pull/28447) — **Windows PowerShell 安装故障排查文档**
补充 `gemini` 命令在 PowerShell 全局安装后无法运行的解决方案，完善跨平台文档。

---

## 📈 功能需求趋势

通过对今日活跃 issue 的归类，社区诉求集中于以下方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **Subagent / Generalist 可靠性** | #22323, #21409, #21968, #22093 | 🔥🔥🔥🔥🔥 |
| **Browser Agent 增强** | #22232, #22267, #21983 | 🔥🔥🔥🔥 |
| **Auto Memory 系统质量** | #26522, #26523, #26516, #26525 | 🔥🔥🔥🔥 |
| **AST 感知工具与 codebase 映射** | #22745, #22746 | 🔥🔥🔥 |
| **Shell / 终端体验优化** | #25166, #21924, #22465, #22466, #24935 | 🔥🔥🔥 |
| **安全与权限控制** | #28470, #20079, #22672 | 🔥🔥🔥 |
| **Eval 基础设施** | #24353, #22745 | 🔥🔥 |
| **新模型 GA 推进** | PR #27705 (Gemini 3.5 Flash / 3.1 Flash Lite GA) | 🔥🔥 |

---

## 💡 开发者关注点

### 1. Agent 行为可控性是首要痛点
子代理被错误报告为成功、generalist 永久挂起、自定义技能不被主动调用——反映出 agent "自治" 与用户预期之间的张力。开发者既希望模型自主调度子代理，又对结果可信度产生担忧。

### 2. Auto Memory 成为新的故障高发区
SandyTao520 集中提交了 4 个 memory 系统 issue（#26516/#26522/#26523/#26525），覆盖：低信号会话重试、inbox patch 静默丢弃、脱敏前置、日志噪声。**这是当前最需要系统性修复的子系统。**

### 3. 安全边界持续受到关注
除 a2a-server RCE 漏洞外，#26525 揭示 Auto Memory 中敏感内容进入模型上下文的延迟脱敏问题，社区对"数据 → 模型"链路上的隐私保护期待更高。

### 4. 跨平台与终端体验细节被放大
Wayland 兼容性、Windows PowerShell 安装、终端 resize 闪烁、外置编辑器退出后 buffer 损坏——这些"小问题"虽不影响核心功能，但严重影响日常使用流畅度。

### 5. 自动化基建提速
caretaker triage 系统 + SSR Pipeline（gcli-intern-project-2026）连续 PR 表明 Google 正在大规模投入 issue → PR 的自动化闭环，社区 issue 生命周期将更短。

---

> 📅 报告生成时间：2026-07-21 · 数据窗口：过去 24 小时
> 本期共追踪 50 条 Issue 更新、39 条 PR 更新、1 个 Nightly 发布。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-21**
**数据来源：[github/copilot-cli](https://github.com/github/copilot-cli)**

---

## 一、今日速览

过去 24 小时内 Copilot CLI 连续发布 **v1.0.72** 与 **v1.0.73** 两个版本，重点修复了 `agentStop` 钩子死循环、macOS arm64 原生二进制 SIGSEGV 崩溃、SHIFT+ENTER 输入体验等长期遗留问题。社区端 Issue 活跃度极高（21 条更新），其中 **Claude 子代理与 `--add-dir` 的兼容性问题**、**plan-mode 回归**、**交互式 TUI 无法响应 PTY 输入** 成为最受关注的三个技术热点，反映出当前版本在多模型、多终端场景下仍存在稳定性短板。

---

## 二、版本发布

### 🚀 v1.0.73（2026-07-20）

| 更新项 | 说明 |
|---|---|
| Anthropic 子代理兼容性 | 在配置了额外目录（`--add-dir`）时，Anthropic 子代理不再中断工作 |
| 自定义代理指令路径解析 | 修复自定义代理指令中的相对链接，按代理文件所在位置解析 |

### 🚀 v1.0.72（2026-07-20）

| 更新项 | 说明 |
|---|---|
| `agentStop` 钩子死循环修复 | 连续阻止 8 次后强制结束回合；钩子可接收 `stop_hook_active` 标志以识别强制续接并自我限制 |
| Oauth 中 git/gh 认证 | 在 OAuth 流程中新增 opt-in 的 git 与 gh 认证能力（部分内容截断） |

---

## 三、社区热点 Issues（Top 10）

### 1. [#1481 [CLOSED] SHIFT + ENTER 应换行却执行 Prompt](https://github.com/github/copilot-cli/issues/1481)
- **作者**：mithunshanbhag ｜ 👍 17 ｜ 💬 27
- 创建于 2026-02-16，**历时 5 个月后关闭**
- **重要性**：这是 Copilot CLI 长期被吐槽的 UX 不一致问题（主流聊天应用均用 Shift+Enter 换行，CLI 反向操作），关闭意味着 v1.0.73 很可能已修正该行为

### 2. [#2812 [CLOSED] macOS arm64 原生二进制 SIGSEGV 崩溃](https://github.com/github/copilot-cli/issues/2812)
- **作者**：celorodovalho ｜ 👍 0 ｜ 💬 2
- **重要性**：涉及 `@github/copilot@1.0.31` 在 Apple Silicon 上完全无输出退出，已诊断到根因，属于关键稳定性修复

### 3. [#4185 `--add-dir` 导致 Claude 子代理调度 400 失败](https://github.com/github/copilot-cli/issues/4185)
- **作者**：spqian ｜ 👍 0 ｜ 💬 0
- **重要性**：每次启动只要带 `--add-dir`，所有 Anthropic 模型上的子代理都会因 `cache_control` 超过 4 块而失败，**直接阻断 Claude 多代理工作流**，与 v1.0.73 的修复方向高度相关

### 4. [#4188 Plan-mode 回归：阻断 shell 命令](https://github.com/github/copilot-cli/issues/4188)
- **作者**：wsilveiranz ｜ 👍 1 ｜ 💬 1
- **重要性**：plan-mode 现在阻断 `gh` 等 shell 命令，影响 issue 读写等常规流程；属于近期版本回退，开发者需关注升级影响

### 5. [#1688 [FEATURE] 可配置的自动压缩阈值](https://github.com/github/copilot-cli/issues/1688)
- **作者**：jvivescortes ｜ 👍 5 ｜ 💬 2
- **重要性**：针对 Claude Opus 4.6 等高容量模型在 45-60% 上下文使用率时延迟剧增的问题，社区强烈要求将自动压缩阈值暴露为 `config.json` 可配置项

### 6. [#4183 自动压缩无法阻止 CAPI 5MB 请求体限制失败](https://github.com/github/copilot-cli/issues/4183)
- **作者**：jay-tau ｜ 👍 2 ｜ 💬 0
- **重要性**：揭示了一个独立于上下文 token 的限制——序列化后的 CAPI 请求超过 5MB 即彻底失败，工具调用累积导致不可恢复状态，**与 #1688 共同构成上下文管理核心痛点**

### 7. [#4180 交互式 TUI 忽略 PTY 所有键盘输入](https://github.com/github/copilot-cli/issues/4180)
- **作者**：jmirandasq ｜ 👍 0 ｜ 💬 0
- **重要性**：在 `tmux send-keys`、`expect`、`pty.fork()` 等编排工具中，除 Ctrl+C 外所有按键失效，**直接破坏外部 Agent 编排能力**

### 8. [#4195 code-review 任务代理可变更共享 worktree](https://github.com/github/copilot-cli/issues/4195)
- **作者**：scotttesler ｜ 👍 0 ｜ 💬 0
- **重要性**：被定义为只读的 `code-review` 代理实际能修改父 worktree，**安全隔离缺陷**，影响双审稿人面板等协作场景

### 9. [#3622 Windows 上复制到剪贴板静默失败](https://github.com/github/copilot-cli/issues/3622)
- **作者**：jbennett2091 ｜ 👍 4 ｜ 💬 4
- **重要性**：v1.0.49 起的回归（1.0.48 正常），影响 Windows 用户导出 Agent 输出，跨平台稳定性老问题

### 10. [#3747 `WAITFOR DELAY` 触发不可恢复超时（毒丸）](https://github.com/github/copilot-cli/issues/3747)
- **作者**：cburhob01 ｜ 👍 1 ｜ 💬 1
- **重要性**：任意模型下，只要 prompt 或读取的文件含 `WAITFOR DELAY` 字样，CLI 即陷入故障态；属于输入触发型稳定性 bug，**任意开发者都可能无意触发**

---

## 四、重要 PR 进展

⚠️ **过去 24 小时内无 PR 更新**（0 条）。这是近期少见的"无 PR 日"，可能与 v1.0.72/73 版本集中发布相关，预计后续将有对应的实现 PR 提交。建议关注 #4185（`--add-dir` Claude 兼容）、#4188（plan-mode 回归）等 Issue 的对应 PR 提交动态。

---

## 五、功能需求趋势

通过对 21 条活跃 Issue 的归类，当前社区诉求集中在以下方向：

| 趋势方向 | 代表性 Issue | 热度 |
|---|---|---|
| **🧠 上下文与性能管理** | [#1688](https://github.com/github/copilot-cli/issues/1688) · [#4183](https://github.com/github/copilot-cli/issues/4183) · [#4189](https://github.com/github/copilot-cli/issues/4189) | ⭐⭐⭐⭐⭐ |
| **🖥️ 跨平台与终端兼容** | [#3622](https://github.com/github/copilot-cli/issues/3622) · [#4191](https://github.com/github/copilot-cli/issues/4191) · [#4184](https://github.com/github/copilot-cli/issues/4184) | ⭐⭐⭐⭐ |
| **🤖 模型管理与切换** | [#4192](https://github.com/github/copilot-cli/issues/4192) · [#4190](https://github.com/github/copilot-cli/issues/4190) | ⭐⭐⭐⭐ |
| **🛡️ 沙箱与权限安全** | [#4195](https://github.com/github/copilot-cli/issues/4195) · [#4193](https://github.com/github/copilot-cli/issues/4193) · [#4188](https://github.com/github/copilot-cli/issues/4188) | ⭐⭐⭐⭐ |
| **⌨️ TUI/UX 改进** | [#1481](https://github.com/github/copilot-cli/issues/1481) · [#4179](https://github.com/github/copilot-cli/issues/4179) · [#4180](https://github.com/github/copilot-cli/issues/4180) · [#4181](https://github.com/github/copilot-cli/issues/4181) · [#4182](https://github.com/github/copilot-cli/issues/4182) | ⭐⭐⭐⭐⭐ |
| **🧩 多模型/多代理协同** | [#4185](https://github.com/github/copilot-cli/issues/4185) · [#2181](https://github.com/github/copilot-cli/issues/2181) | ⭐⭐⭐ |
| **🗄️ 会话与状态管理** | [#4182](https://github.com/github/copilot-cli/issues/4182) · [#4181](https://github.com/github/copilot-cli/issues/4181) | ⭐⭐⭐ |

> 📌 **核心信号**：上下文管理（自动压缩、CAPI 请求体、token 统计准确性）与 TUI 交互（键盘、鼠标、PTY、剪贴板）是当前社区最高频的两类诉求，反映 Copilot CLI 正在从"能用"过渡到"易用 + 复杂场景可用"的攻坚阶段。

---

## 六、开发者关注点与高频痛点

1. **🔴 上下文窗口失控**
   - 多名开发者反馈：当前自动压缩策略对 Claude Opus 4.6 等大模型不友好，工具调用累积会同时撞上 token 上限 **和** CAPI 5MB 请求体上限，后者尤为隐蔽。

2. **🔴 plan-mode 与沙箱权限收紧引发回归**
   - 多个 Issue 集中反映 plan-mode 阻断 `gh` 等常用命令、code-review 代理可写入父 worktree、sandboxed session 写 `plan.md` 需要额外权限——**安全策略与工作流的摩擦显著上升**。

3. **🟡 跨平台"看不见的 bug"频发**
   - Windows 剪贴板、WSL + tmux/screen 环境、macOS arm64 原生二进制 SIGSEGV 等问题，**提示自动化的跨平台测试覆盖仍不足**。

4. **🟡 TUI 对自动化与辅助输入支持薄弱**
   - PTY 输入被忽略、`/btw` 不支持图片粘贴、enqueued entry 无法点击编辑——表明 TUI 优先面向"人类交互"，**尚未充分适配 Agent-orchestrator 与无障碍场景**。

5. **🟢 模型选择体验亟待优化**
   - 多条 Feature Request 要求快速切换预设模型配置、Desktop 端支持 BYOK——开发者期望"模型即工具"的高频切换，而非每次 `/model` + 箭头键操作。

6. **🟢 输入容忍度问题**
   - `WAITFOR DELAY` 这类合法 SQL 关键字即可触发不可恢复故障，提示**输入校验过于激进**，对开发者的内容缺少鲁棒处理。

---

> 💡 **编者按**：v1.0.72/73 在代理钩子和 macOS 稳定性上推进明显，但 24 小时内涌现的 21 条 Issue 显示 Copilot CLI 正在快速迭代中暴露新问题。建议团队在使用 Claude 系列模型时**暂缓启用 `--add-dir`**，并关注 plan-mode 权限回归对现有自动化流程的影响。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-07-21**
**数据来源：[MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli)**

---

## 1. 今日速览

今日社区活动以 **Bug 修复为主线**，呈典型的"问题发现 → 提交 Issue → 提交修复 PR"的高效闭环模式。三位开发者各提交了对应的 PR，其中 `Sreekant13` 的 StrReplaceFile 计数修复和 `Nas010101101` 的两条 session/context 相关修复尤为关键。Issue 端则暴露出 **Windows 平台兼容性、Goal 模式资源消耗、长期 429 限流** 三大长期痛点。

> 过去 24 小时共新增/更新 **6 条 Issue**、**3 条 PR**，无新版本发布。

---

## 2. 版本发布

🚫 **无新版本发布**。当前主线版本参考：
- 社区报告的活跃版本：`v1.41.0`（云端部署场景）、`v1.49.0`（Windows 升级场景）、`v0.27.0`（herdr 场景）、`v0.6.3`（context compaction 场景）

---

## 3. 社区热点 Issues

> 过去 24 小时共 6 条 Issue 活跃，整理如下：

| # | Issue | 类型 | 热度 | 一句话总结 |
|---|-------|------|------|-----------|
| **#2209** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2209) | 🐛 Bug | ⭐⭐⭐ (👍3, 💬4) | 云端 kimiclaw 升级到 v1.41.0 后仍持续 `429 engine_overloaded` 超过 48 小时 |
| **#2526** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2526) | 🐛 Bug | ⭐⭐ | `StrReplaceFile` 链式编辑时，基于原文统计替换次数，导致后续编辑报"替换次数不足" |
| **#2525** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2525) | 🐛 Bug | ⭐⭐ | Goal 模式等待外部条件时，无效 continuation turn 每隔数秒触发，疯狂消耗 token 和上下文 |
| **#2523** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2523) | 🐛 Bug | ⭐⭐ | Context 压缩后，Kimi Code 重新打开了已完成并删除的 task |
| **#2522** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2522) | 🐛 Bug | ⭐⭐ | Windows 升级后旧 `kimi-code` 的 session 没迁移到 `.kimi`，`kimi migrate` 命令缺失 |
| **#2521** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2521) | 🐛 Bug | ⭐ | Windows 版 herdr 内出现选项时无法用方向键选择 |

### 重点 Issue 分析

**🔴 #2209 — 持续 48 小时 429 限流（社区最高热度）**
用户 `yuermodi` 报告云端部署的 kimiclaw 自从升级到 v1.41.0 后持续报 `429 engine_overloaded`，跨越 kimi-for-coding / k2.5 / k2.6 三个模型都无法解决。已升级版本号、导出诊断文件，是当前最棘手的服务端问题。

**🔴 #2525 — Goal 模式资源黑洞**
当 Agent 在等待长任务（如远程训练、共享 GPU 释放）时，goal continuation 每隔几秒触发一次，不断注入完整目标提示，**等同于无意识的 token 燃烧器**。该 Bug 对长期无人值守任务影响巨大。

**🟠 #2522 — Windows 平台升级体验差**
Windows 用户升级到 v1.49.0 后，旧 session 数据（`%USERPROFILE%\.kimi-code`）不会自动迁移到新目录（`.kimi`），且 `kimi migrate` 命令实际不存在，需手工搬运，**典型的升级体验失分项**。

**🟡 #2526 / #2523 — 工具层与上下文管理缺陷**
- StrReplaceFile 计数逻辑基于原始内容做差，对链式 edit 不友好；
- Context compaction 机制错误重建"已完成并删除"的 task，暗示状态机设计存在盲区。

---

## 4. 重要 PR 进展

| # | PR | 作者 | 关联 Issue | 状态 / 要点 |
|---|----|----|-----------|------------|
| **#2524** | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2524) | Sreekant13 | #2526 | 🔧 `StrReplaceFile` 改为基于"运行中内容"累计替换次数，修复链式编辑误报 |
| **#2520** | [链接](https://github.com/MoonshotAI/kimi-cli/pull/2520) | Nas01010101 | #2517 / #1974 / #2049 | 🔧 fork / undo 上下文截断对齐到 wire turns，并补充回归测试 |
| **#2519** | [链接](https://github.com/MoonshotAI/kimi-cli/issues/2519) | Nas01010101 | #2420 | 🔧 session resume 时刷新过期的冻结 system prompt，使 `~/.kimi/skills/` 与 `AGENTS.md` 编辑能立即生效 |

### 重点 PR 速览

- **#2524**：一个变量位移的修复——把"和原始内容比较"改成"和当前内容比较"，但影响所有链式 edit 场景，**质量提升型 PR**。
- **#2520**：一次性解决 3 个历史 Issue（#2517/#1974/#2049），暗示 wire turn ↔ context turn 映射历史上有系统性错位；与进行中的 #2386 形成互补。
- **#2519**：解决 session resume 时 `_system_prompt` 永久冻结的根因，关闭了"为什么改了 `AGENTS.md` 不生效"这条长期困惑。

---

## 5. 功能需求趋势

从今日 Issue 提炼社区关注方向：

| 方向 | 代表 Issue | 解读 |
|------|-----------|------|
| **🖥️ Windows 平台兼容** | #2521、#2522 | Windows 用户的可用性问题集中爆发：键位、迁移、目录约定，是 **PC 端增长的最大阻力** |
| **🧠 上下文 / Session 状态管理** | #2519、#2520、#2523 | session resume、context compaction、fork/undo 三处的状态一致性是 **当前最热的稳定性议题** |
| **⚙️ Goal / Agent 自动化稳定性** | #2525 | 长时无人值守场景下，空转 turn 的节流是 **生产化部署的硬需求** |
| **🛠️ 编辑工具正确性** | #2524、#2526 | 工具调用结果与预期的偏差影响 Agent 自动改代码的可靠性 |
| **☁️ 服务端容量 / 限流** | #2209 | 持续 48h 的 429，反映上游推理资源或路由策略与 CLI 版本之间存在摩擦 |

---

## 6. 开发者关注点（痛点 & 高频需求）

1. **"升级体验"是头号摩擦**
   - Windows 平台升级后 session 不迁移（#2522）
   - 老会话里的冻结 system prompt 不刷新（#2519/#2420）
   - 用户期待 "升级即生效"，但实现有断层。

2. **"链式自动化"对工具正确性要求高**
   - StrReplaceFile 等结构化编辑工具若出现 silent error，会直接断掉整个自动化链路（#2526/2524）。

3. **"等待型任务"的成本控制**
   - 用户希望 Agent 能等待外部信号，**而不是空转燃烧 token**（#2525）。这是 CI / 长训练 / 夜间任务场景的标配需求。

4. **"服务端稳定性"与"客户端版本"脱节**
   - 升级并未带来稳定性提升（#2209），反而延后——理想的状态是给出 **降级路径 / 限流退避 / 离线模式** 而非崩溃式 429。

5. **"Windows TUI 交互"细节仍需打磨**
   - herdr 中方向键失效（#2521）虽然是小问题，但严重影响终端党日常体感。

---

> 📌 **结论**：今日社区在 **Session/Context 一致性** 与 **Windows 平台体验** 两个赛道上同步推进，且 PR → Issue 命中率非常高（3/3 的 PR 均能溯源到具体 Issue），说明社区的 **Issue-driven 开发节奏**正在形成。建议维护者优先合入 #2519/#2520/#2524 三条 PR，可一次性关闭 4 个历史 Issue。

---

*本日报基于 2026-07-20 ~ 2026-07-21 期间 GitHub 公开数据自动生成。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-07-21**

---

## 📌 今日速览

今日 OpenCode 发布了 **v1.18.4** 版本，重点改进 Anthropic 兼容 Provider 上的 Kimi 模型自适应思考控制，并修复了 OpenAI Provider 在慢连接场景下的超时问题。社区焦点集中在 **Bun 安装兼容性**、**Desktop 端 Notification Server 崩溃** 以及 **v1.18 新 UI 中 Plan/Build 模式丢失** 三大问题上，多个 Desktop 崩溃类 Issue 已陆续关闭。

---

## 🚀 版本发布

### v1.18.4
**Core 改进**
- **Kimi 模型自适应思考控制**：在 Anthropic 兼容 Provider 上启用，默认输出摘要化的推理内容（由 [@chouqin](https://github.com/chouqin) 贡献）

**Bugfixes**
- 降低 OpenAI Provider 在慢连接建立时的 Header 超时时间
- 尊重各 Provider 自身定义的 reasoning 选项

🔗 [Release v1.18.4](https://github.com/anomalyco/opencode/releases/tag/v1.18.4)

---

## 🔥 社区热点 Issues

### 1. [#27906 v1.15.1+ Breaks Bun Installs](https://github.com/anomalyco/opencode/issues/27906) ⭐13
**【OPEN · 20 评论】** 自 v1.15.1 起强制要求执行 postinstall 脚本，而 Bun 默认阻止全局包的 postinstall 脚本，导致安装失败。这是历史最久、热议度最高的 Issue 之一，影响大量 Bun 用户。

### 2. [#29363 limit.output 被静默限制为 32k](https://github.com/anomalyco/opencode/issues/29363) ⭐7
**【OPEN · 15 评论】** 即使 `opencode.json` 中 `limit.output` 设置远超 32k（如 DeepSeek 设 384000），实际仍被截断，唯一绕行方案是实验性环境变量 `OPENCODE_EXPERIMENTAL_OUTPUT_TOKEN_MAX`。对使用大上下文模型的用户影响显著。

### 3. [#37171 Desktop 重启崩溃：Notification server not found: wsl:Ubuntu](https://github.com/anomalyco/opencode/issues/37171) ⭐4
**【CLOSED · 9 评论】** WSL 环境下 Desktop 客户端重启时频繁出现通知服务器未找到错误，社区反馈强烈，本次已关闭。

### 4. [#37970 v1.18 新 UI 丢失 Plan/Build 模式切换](https://github.com/anomalyco/opencode/issues/37970) ⭐0
**【OPEN · 9 评论】** Desktop v1.18.0 移除或隐藏了 Plan/Build 切换入口，用户无法可靠切换模式（有时 Plan 又会失效）。与下方 #37430 形成连锁反馈。

### 5. [#37430 无法在 v1.18.1/v1.18.3 新 UI 中切换 Build/Plan 模式](https://github.com/anomalyco/opencode/issues/37430) ⭐2
**【CLOSED · 6 评论】** 新 UI 中 Toggle 按钮消失，作为 #37970 的伴随 Issue 已关闭，修复可能回流到后续版本。

### 6. [#23539 [FEATURE] Plugin API for custom status bar widgets](https://github.com/anomalyco/opencode/issues/23539) ⭐4
**【OPEN · 6 评论】** 提案整合 #8619（statusLine hook）和 #18969（footer hook），提供统一的状态栏插件 API，是高赞插件生态扩展需求。

### 7. [#35686 Desktop v1.17.14 无限启动崩溃循环](https://github.com/anomalyco/opencode/issues/35686) ⭐1
**【CLOSED · 6 评论】** 启动后立即抛出 `Notification server not found: http://[server-ip]:4096`，无法通过 UI 清除。与 #37171 同根因，已一并修复（见 PR #35688）。

### 8. [#35434 TUI 多问题工具调用静默失败（v1.17.13 回归）](https://github.com/anomalyco/opencode/issues/35434) ⭐0
**【CLOSED · 6 评论】** 单问题 `question` 工具正常，但多问题表单按 Enter 无响应，源自 PR #34116 引入的回归。

### 9. [#23248 项目目录重命名后 Session 失联](https://github.com/anomalyco/opencode/issues/23248) ⭐6
**【OPEN · 5 评论】** Session 的 `directory` 字段以绝对路径存储且从不更新，重命名/移动后 Session 在列表中消失。是高赞但长期未解的体验问题。

### 10. [#36509 [FEATURE] opencode-conversation-sync-skill](https://github.com/anomalyco/opencode/issues/36509) ⭐0
**【OPEN · 5 评论】** 提议新增一个跨设备同步与备份对话历史的 OpenCode Skill，反映社区对多端会话连续性的强烈需求。

---

## 🛠 重要 PR 进展

### 1. [#38026 fix(server): allow authenticated CORS preflight](https://github.com/anomalyco/opencode/pull/38026)
**【OPEN】** 将共享 CORS 策略应用于 Server 认证之前，允许带密码保护的 Server 响应浏览器预检请求，解决浏览器跨域访问受限 Server 的问题。

### 2. [#38014 fix(core): resolve npm plugin entry point as file URL on Windows](https://github.com/anomalyco/opencode/pull/38014)
**【OPEN · 修复 #38021】** 修复 Windows 上 `import.meta.resolve()` 返回裸文件系统路径而非 `file://` URL 的问题，避免 npm 插件加载失败。

### 3. [#38022 docs(ecosystem): add opencode-hypa plugin](https://github.com/anomalyco/opencode/pull/38022)
**【OPEN】** 在生态文档表中加入 `opencode-hypa` 插件，丰富插件生态列表（曾因合并冲突关闭过 #37954，重新提交）。

### 4. [#38019 fix(opencode): bound shell output after exit](https://github.com/anomalyco/opencode/pull/38019)
**【OPEN】** 子进程 `exit` 后等待最多 500ms 获取 Shell 输出 EOF，标记不完整输出并说明原因，避免 TUI 中出现悬挂/截断的 Shell 输出。

### 5. [#37647 feat(nix): build opencode2 (TUI) alongside opencode](https://github.com/anomalyco/opencode/pull/37647)
**【OPEN · 修复 #37646】** Nix 构建产物中同时提供 `opencode` 与 `opencode2`（新 TUI）两个可执行文件，方便 NixOS 用户试用新版 TUI。

### 6. [#37219 fix(opencode): ignore node_modules during config and skill discovery](https://github.com/anomalyco/opencode/pull/37219)
**【OPEN · 修复 #30337】** 配置与 Skill 发现阶段跳过 `node_modules/`，避免扫描到大量无效文件导致启动延迟与误加载。

### 7. [#37956 feat(app): add image backgrounds](https://github.com/anomalyco/opencode/pull/37956)
**【OPEN】** Web 与 Desktop 外观设置中新增背景图功能：Web 端持久化到 Cache Storage，Desktop 端作为有界托管文件存储并通过受限渲染协议分发。

### 8. [#38016 fix(core): improve patch errors](https://github.com/anomalyco/opencode/pull/38016)
**【OPEN】** 为 Patch 解析器引入类型化错误：精确区分缺失起始/结束边界、报告 hunk 头行号及合法替代项，便于 Agent 自主纠错。

### 9. [#38006 feat(codemode): support JSON callbacks](https://github.com/anomalyco/opencode/pull/38006)
**【OPEN】** CodeMode 支持 `JSON.parse` reviver 与 `JSON.stringify` 数组/函数 replacer，覆盖 Test262 安全/直接回调场景。

### 10. [#38005 feat(codemode): support BigInt arithmetic](https://github.com/anomalyco/opencode/pull/38005)
**【OPEN】** CodeMode 支持十/二/八/十六进制 BigInt 字面量及完整算术/位运算/比较语义，限制 4096-bit 幅度，拒绝超大字面量。

> 另：昨日 `#33146` `#33144` `#33139` `#33136` `#33134` `#33127` `#33122` `#33120` 等 8 个历史 PR 已由自动化清理流程集中关闭（PR-Cleanup batch）。

---

## 📈 功能需求趋势

通过对今日活跃 Issue 的归纳，社区关注的功能方向集中在以下几类：

| 方向 | 代表 Issue | 趋势解读 |
|---|---|---|
| **Desktop UI 体验打磨** | #37970、#37428、#38010、#38007 | 新版 Desktop UI 上线后，模式切换、亮度对比、Splash 屏、状态栏展示等细节迅速成为焦点 |
| **插件生态扩展** | #23539、#36509、#38022 | 社区呼吁更细粒度的状态栏/底部栏 hook，以及跨设备会话同步等 Skill |
| **多 Provider 适配** | #37815、#37056、#36826、#28397 | Kimi/Console Go/DeepSeek/Google 等 Provider 的请求稳定性与适配是当下最高频痛点 |
| **网络与代理** | #37993 | 受限网络环境下内置代理自动启停成为新热点 |
| **国际化与计费** | #32485 | 自定义价格/币种显示呼声增加 |
| **CodeMode 增强** | #38006、#38005（PR） | JSON 回调与 BigInt 支持扩展脚本能力上限 |

---

## 💡 开发者关注点

综合今日 Issue 与 PR 反馈，开发者社区的**核心痛点**可以归纳为以下几点：

1. **安装生态碎片化** —— Bun 用户长期被 #27906 卡住（20 评论 / 13 点赞，热度第一），postinstall 策略需要更细粒度的开关或自动检测机制。
2. **Desktop 稳定性回归** —— BrowserWindow/Notification Server 相关崩溃在 v1.17/v1.18 集中爆发（#37171/#35686/#36977/#35501/#32923/#30627/#30297/#37331），虽已陆续修复，但反映出 Electron 主进程生命周期管理仍是薄弱环节。
3. **v1.18 新 UI 模式入口缺失** —— Plan/Build 切换在 #37430/#37970 中被反复提及，说明重设计 UI 时核心交互入口需保留可发现性。
4. **Provider 错误信息不透明** —— DeepSeek V4 Flash、Console Go 上游 400、opencode-go 401/500 间歇性错误（#36826、#37056、#37815），开发者急需更详细的错误日志与重试策略。
5. **Windows/WSL 兼容** —— npm 插件入口解析（#38021）、node-pty AttachConsole（#32389）等 Windows 特有问题仍需逐一打磨。
6. **Token 与上下文上限被静默截断** —— #29363 揭示 `limit.output` 配置失效问题，社区呼吁将其从实验性环境变量提升为正式配置。

---

*本日报基于 2026-07-21 GitHub 数据自动生成，覆盖最新 Release、Issues 与 Pull Requests。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-21

> 数据来源：[github.com/badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 仓库已迁移至 `earendil-works/pi`

---

## 📌 今日速览

**今日无新版本发布**，但社区异常活跃——过去 24 小时内有 50 个 Issue 和 26 个 PR 更新。主题高度集中在三件事：**v0.80.6 回归缺陷修复**（特别是自托管 OpenAI 兼容提供商的超时配置失效）、**Extension API 的能力扩展**（成本上报、会话拦截、生命周期元数据），以及**多供应商/多模型目录治理**（GPT-5.6、Sonnet 4.5、Qwen Token Plan、Kimi K3 等）。

---

## 🚀 版本发布

无（过去 24 小时未发布新版本）。

---

## 🔥 社区热点 Issues（TOP 10）

### 1. [#6476](https://github.com/earendil-works/pi/issues/6476) — 自托管 OpenAI 兼容提供商的 `httpIdleTimeoutMs` 回归 ⏰
**状态**：OPEN · 11 评论 · bug, inprogress
v0.80.3 → v0.80.6 升级后，自托管 vLLM 等 OpenAI 兼容接口即使配置了更大的空闲超时也会在数分钟内报 `operation timed out`。这是当前讨论最热烈的回归问题，多个用户在用 self-hosted 模型时遇到。

### 2. [#5263](https://github.com/earendil-works/pi/issues/5263) — 会话内模型/thinking-level 切换默认改为临时 ⭐
**状态**：OPEN · 8 评论 · 8 👍
提案将"会话内切换模型"默认仅作用于当前会话，引入 `/settings` 中的"Default model"作为全局入口。👍 数最高，体现社区对当前隐式持久化行为的广泛不满。

### 3. [#5407](https://github.com/earendil-works/pi/issues/5407) — Kitty 终端上回车/退格双触发
**状态**：CLOSED · 7 评论
PopOS 24.04 + Kitty 上 Pi 注册两次按键的输入问题，已关闭。

### 4. [#6725](https://github.com/earendil-works/pi/issues/6725) — Copilot GPT-5.6 模型定价缺失 cacheWrite 成本
**状态**：CLOSED · 7 评论
Pi 计算的 Copilot 成本比实际账单低 30%+，因未计入 cacheWrite。已修复。

### 5. [#3200](https://github.com/earendil-works/pi/issues/3200) — `prompt` RPC 命令支持视频/音频
**状态**：OPEN · 6 评论 · 4 👍
呼声已久的多模态扩展请求，希望 `prompt` 在图片之外也支持 video/audio 以适配 Gemma 4、GPT-4o 等多模态模型。

### 6. [#5931](https://github.com/earendil-works/pi/issues/5931) — TUI 复制粘贴引入多余空格/换行
**状态**：CLOSED · 6 评论
长段落从 TUI 复制时换行点会带入多余空白，影响下游编辑体验。

### 7. [#6509](https://github.com/earendil-works/pi/issues/6509) — 扩展上报 cost 接入 footer 显示
**状态**：CLOSED · 5 评论
`ctx.ui.setUsage(key, usage)` API，让运行子 agent 的扩展能把成本叠加到主会话 footer。

### 8. [#6621](https://github.com/earendil-works/pi/issues/6621) — 动态系统提示导致缓存意外失效
**状态**：CLOSED · 5 评论 · 1 👍
统一内存设备（如 Strix Halo）prefill 极慢，动态拼装的 system prompt 频繁触发缓存命中失败。已修复。

### 9. [#6851](https://github.com/earendil-works/pi/issues/6851) — `pi-agent-core` 静态引入 `/compat` 导致 bundle 膨胀
**状态**：CLOSED · 4 评论
Astrio 项目反馈：迁移出 `/compat` 后 bundle 没变小，根因在 `pi-agent-core` 的静态依赖。已修复。

### 10. [#6652](https://github.com/earendil-works/pi/issues/6652) — pi-tui 崩溃日志硬编码路径
**状态**：OPEN · 4 评论
`PI_CODING_AGENT_DIR` 被忽略，TUI 崩溃仍在 `$HOME/.pi/agent/` 写入日志，污染用户配置。

> 此外值得关注的还有： [#6888](https://github.com/earendil-works/pi/issues/6888) Claude Pro/Max OAuth 被识别为第三方计费（**紧急**）、 [#6794](https://github.com/earendil-works/pi/issues/6794) 模型目录刷新导致启动缓慢、 [#6883](https://github.com/earendil-works/pi/issues/6883) 扩展异常导致 session 永久损坏。

---

## 🛠 重要 PR 进展（TOP 10）

### 1. [#6216](https://github.com/earendil-works/pi/pull/6216) — feat: Add Amazon Bedrock Mantle OpenAI Responses provider
**状态**：OPEN · 来自社区贡献者 `unexge`
通过 OpenAI 的 Bedrock Provider 集成 Bedrock Mantle 的 OpenAI Responses API，扩展 AWS 生态接入。

### 2. [#6881](https://github.com/earendil-works/pi/pull/6881) — feat(ai): use provider-reported cost
当响应自带计费信息（如 Vercel AI Gateway 的 `usage.cost` / `cost_details.upstream_inference_cost`）时直接使用，避免目录价与实际账单偏差（呼应 #6725）。

### 3. [#6865](https://github.com/earendil-works/pi/pull/6865) — feat: `get_available_thinking_levels` RPC
新增 RPC 命令暴露模型可用思考档位，配合 [#6773](https://github.com/earendil-works/pi/issues/6773) 的诉求。

### 4. [#6864](https://github.com/earendil-works/pi/pull/6864) + [#6856](https://github.com/earendil-works/pi/pull/6856) — fix: env section ignored
修复 #6799：`envApiKeyAuth.resolve()` 丢弃了 `credential.env`，导致 `auth.json` 中的 `env.AZURE_OPENAI_BASE_URL` 等不生效。两位贡献者几乎同时提了 PR。

### 5. [#6775](https://github.com/earendil-works/pi/pull/6775) — retry on compaction/branch summarization retryable failures
修复 [#6647](https://github.com/earendil-works/pi/issues/6647)：compaction 阶段的瞬时流中断目前不重试，需要与正常 turn 一样走 `isRetryableAssistantError` 路径。

### 6. [#6858](https://github.com/earendil-works/pi/pull/6858) — feat(ai): add Qwen Token Plan as built-in provider
参照 Xiaomi Token Plan 模式新增 `qwen-token-plan` / `qwen-token-plan-cn` 两个内置 provider，国际版/国内版独立 endpoint。

### 7. [#6786](https://github.com/earendil-works/pi/pull/6786) — fix(ai): expose Kimi Coding K3 effort levels
为 Kimi Coding K3 暴露 `low` / `high` / `max` 三个思考档位（直连 Moonshot K3 仍保持 max-only）。

### 8. [#6837](https://github.com/earendil-works/pi/pull/6837) + [#6853](https://github.com/earendil-works/pi/pull/6853) — fix: GPT-5.6 context window
把 GPT-5.6 Sol/Terra/Luna 在 `openai-codex` 上的上下文对齐为 272K（[官方客户端](https://github.com/openai/openai-node) 的实际值）。

### 9. [#6859](https://github.com/earendil-works/pi/pull/6859) — Use `bun info` for package update checks
当用户用 `bun` 作包管理器时，`bun view` 报错被吞，导致启动时扩展更新检查失效。改用 `bun info`。

### 10. [#6812](https://github.com/earendil-works/pi/pull/6812) — Remove `./` from pi-ai bin path
`bin: "./dist/cli.js"` → `bin: "dist/cli.js"`，解决 Windows/锁文件反复 flip-flop 的问题（[#6811](https://github.com/earendil-works/pi/issues/6811)）。注：作者未按 CONTRIBUTING.md 先求 LGTM，自述是 dumb mistake。

---

## 📈 功能需求趋势

从过去 24 小时的 Issues 中可提炼出社区最关心的方向：

| 方向 | 代表 Issues | 热度 |
|---|---|---|
| **Extension API 能力扩展** | #6509, #6876, #6863, #6884, #5998 | 🔥🔥🔥 |
| **多模型/多供应商成本精度** | #6725, #6881 (PR), #6799, #6794 | 🔥🔥🔥 |
| **多模态输入** | #3200 (video/audio) | 🔥🔥 |
| **会话管理与持久化** | #5263, #5931, #6883, #6820 | 🔥🔥 |
| **缓存与性能** | #6621, #6794, #6476 | 🔥🔥 |
| **新供应商接入** | Bedrock Mantle, Qwen Token Plan, Vercel AI Gateway | 🔥 |
| **OpenAI 兼容层解耦** | #6851 (`/compat` 静态依赖) | 🔥 |

---

## 💬 开发者关注点（痛点与高频需求）

1. **回归控制不足**：`httpIdleTimeoutMs` (#6476) 与 env section (#6799) 这类基础配置在版本升级中无声失效，是当前最集中的抱怨点——反映对**配置契约稳定性**的强烈需求。

2. **成本透明度**：开发者不再满足于"目录价估算"，希望接入**真实账单计费**（Vercel Gateway、cacheWrite、Copilot 实际费率）。[#6725](https://github.com/earendil-works/pi/issues/6725)、[#6881](https://github.com/earendil-works/pi/pull/6881)、[#6877](https://github.com/earendil-works/pi/issues/6877) 都在同一方向。

3. **Extension 是生态核心**：50 条 Issue 中近 1/3 在请求或扩展 Extension API（cost 上报、session 改写、生命周期 metadata、消息 chrome 自定义、阻塞工具回调）。**Pi 的扩展体系正成为产品差异化关键**。

4. **会话生命周期健壮性**：崩溃日志路径硬编码 (#6652)、扩展异常污染 session (#6883)、粘贴注册表损坏 (#6844)、compaction 单次失败 (#6647)——都说明**长会话容错**仍是薄弱环节。

5. **自托管/小众部署体验**：vLLM、Strix Halo、zscaler 代理、bun 包管理器等"非主流但合理"环境频频踩坑，开发者希望 Pi 对**部署环境异质性**更友好。

6. **多模态滞后**：`prompt` RPC 至今仅支持图片 ([#3200](https://github.com/earendil-works/pi/issues/3200))，与 Gemma 4/GPT-4o 等原生多模态模型的差距日益明显。

---

*日报基于 GitHub Issues & PRs 公开数据生成，统计窗口为 2026-07-20 至 2026-07-21。*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-07-21**

---

## 📌 今日速览

今日 v0.20.0-nightly 持续迭代，autofix 体系迎来多维度升级：托管 Fork PR 实时拾取、车队状态可视化、验证门崩溃重试、审查线程自清理等特性集中合并，自动化维护链路趋于成熟。社区端最集中的问题来自 **Token Plan / `enable_thinking` 参数冲突** 与 **VSCode Companion 连接异常** 两个集群，分别影响 Qwen Cloud 用户和 IDE 集成体验。

---

## 🚀 版本发布

**v0.20.0-nightly.20260721.cda0e0348** 已发布
- 核心变更：[#7165](https://github.com/QwenLM/qwen-code/pull/7165) 引入 autofix 标签驱动的 takeover 与发布流程，修复强制派发的"假绿"无操作问题。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 |
|---|-------|--------|
| 1 | [#7040](https://github.com/QwenLM/qwen-code/issues/7040) **RFC: Reliable auto-memory recall** (7 评论) | Core 团队明确缩小范围至"通用召回路径"，不再扩张为企业级记忆治理平台；三个独立可审阅模块成为路线图。决定后续 memory 走向。 |
| 2 | [#7147](https://github.com/QwenLM/qwen-code/issues/7147) **MCP 工具/资源列表获取超时** (6 评论) | Fastmail MCP 在鉴权通过后无法列出工具，跨客户端复现，影响所有 MCP 集成场景。 |
| 3 | [#6414](https://github.com/QwenLM/qwen-code/issues/6414) **VSCode 扩展连接 Qwen agent 失败** (5 评论) | 经典兼容性 P2 bug，截图错误信息明确；与 #7056 构成 VSCode Companion 故障群。 |
| 4 | [#7252](https://github.com/QwenLM/qwen-code/issues/7252) **`/auth` 无法选中 token-plan.ap-southeast-1** (4 评论) | 区域 token plan 选项不可选，直接阻碍新加坡区用户接入。 |
| 5 | [#7056](https://github.com/QwenLM/qwen-code/issues/7056) **VSCode 0.19.11 报 "ACP process exited unexpectedly"** (4 评论) | ACP 启动异常，stderr 提示 `acp` 不在 Electron/Chromium 已知选项中，影响升级用户。 |
| 6 | [#7284](https://github.com/QwenLM/qwen-code/issues/7284) **🚨 P1: `runSideQuery` 强制 `enable_thinking=false` 致 TokenPlan 400** (3 评论) | `web_fetch` 等侧查询在 TokenPlan 端点必报 400，是今日最高优先级 bug 之一。 |
| 7 | [#7315](https://github.com/QwenLM/qwen-code/issues/7315) **🚨 P1: Agent 工具 schema 让 `working_dir` 与 `isolation` 互斥失效** (2 评论) | OpenAI 兼容提供商下，subagent 多种启动方式全部校验失败，回归严重。 |
| 8 | [#7316](https://github.com/QwenLM/qwen-code/issues/7316) **OpenAI 兼容模型下 `subAgent` 完全不可用** (3 评论) | 模型对 `working_dir` 返空字符串，触发重试循环；与 #7315 互为镜像。 |
| 9 | [#7049](https://github.com/QwenLM/qwen-code/issues/7049) **Update check 超时应改告警而非报错** (3 评论) | 在 #6857 修复超时后，希望 UX 进一步软化（提预算+降级为 warning），降低区域网络受限用户的焦虑。 |
| 10 | [#7301](https://github.com/QwenLM/qwen-code/issues/7301) **Web Shell 刷新后丢失 bearer token** (2 评论) | `--token` 启动的会话刷新页面后 `Authorization` 头消失，安全/可用性双重问题。 |

> 补充：另见 [#7359](https://github.com/QwenLM/qwen-code/issues/7359)、[#7366](https://github.com/QwenLM/qwen-code/issues/7366) 均直指 `enable_thinking=true` 端点下的兼容性问题。

---

## 🛠 重要 PR 进展

| # | PR | 说明 |
|---|----|------|
| 1 | [#7308](https://github.com/QwenLM/qwen-code/pull/7308) **feat(serve): workspace runtime ownership** | `qwen serve` 的 ACP 生命周期/能力状态由注册 workspace 而非最近会话持有，引入显式运行时状态、启动、对账与空闲清理。 |
| 2 | [#7362](https://github.com/QwenLM/qwen-code/pull/7362) **fix(mobile-mcp): Windows adb 路径** | 修复 Windows 下 adb 可执行名恒为 `adb` 的 bug，改用 `process.platform`。 |
| 3 | [#7322](https://github.com/QwenLM/qwen-code/pull/7322) **fix(cli): 后台安全更新 npm** | 可写全局安装下，post-render 升级在 immutable 启动器目录后台进行；活跃会话继续使用原文件，原子切换。 |
| 4 | [#7357](https://github.com/QwenLM/qwen-code/pull/7357) **feat(skills): 三态默认禁用** | 引入 `skills.defaultDisabled`（软默认）+ `skills.enabled`（显式开启）+ `skills.disabled`（硬禁用），大小写不敏感。 |
| 5 | [#7344](https://github.com/QwenLM/qwen-code/pull/7344) **fix(core): OpenAI wire 放宽 additionalProperties** | 转换 `convertGeminiToolsToOpenAI` 时，仅在"每层属性皆必填"时保留 `additionalProperties:false`，缓解 #7315/#7316。 |
| 6 | [#7376](https://github.com/QwenLM/qwen-code/pull/7376) **chore: 简化 CODEOWNERS 至包级** | 将 80 行 30+ 规则合并为 `packages/core/` 单一规则，归 4 位 core maintainer 共治；CUA/Mobile 独立保留。 |
| 7 | [#7350](https://github.com/QwenLM/qwen-code/pull/7350) **autofix: 实时拾取托管 Fork PR** | `pull_request_review` 触发器在 Fork PR 上实时路由反馈，无需等待节流扫描。 |
| 8 | [#7351](https://github.com/QwenLM/qwen-code/pull/7351) **autofix: 验证门崩溃自动重试** | 区分"拒绝"与"崩溃"，崩溃时重试而非丢弃 agent 修复。 |
| 9 | [#7355](https://github.com/QwenLM/qwen-code/pull/7355) **autofix: 在扫描摘要中渲染整队状态** | 一次扫描生成 PR 决策表，运维无需手工拼凑。 |
| 10 | [#7256](https://github.com/QwenLM/qwen-code/pull/7256) **fix(core): 子进程剥离 daemon 密钥** | 修复 #6601，shell 子进程/stdio MCP 不再继承 `QWEN_SERVER_TOKEN` 等敏感 env。 |

> 补充关注：[#7367](https://github.com/QwenLM/qwen-code/pull/7367)（worktree 分支状态行修正）、[#7358](https://github.com/QwenLM/qwen-code/pull/7358)（CI 巡检不再被慢分类器整批砍掉）、[#7364](https://github.com/QwenLM/qwen-code/pull/7364)（autofix 自动 resolve 已实现 review 线程）。

---

## 📈 功能需求趋势

从今日 47 条 Issue 中可归纳出五大方向：

1. **Qwen Cloud Token Plan 兼容性** 🔥
   - `enable_thinking` 参数与区域端点的硬冲突集中爆发（#7284、#7359、#7366、#7252），成为 v0.20 阶段最高优先级议题。

2. **Agent / SubAgent 体系稳健性**
   - OpenAI 兼容提供商下 schema 互斥校验（#7315、#7316）、无头模式的上下文继承（#7348）、后台 agent 终响应丢失（#7334），共同指向 v0.20 重大重构后的回归面。

3. **MCP 生态深化**
   - 工具列表超时（#7147）、MCP prompt 位置参数丢失（#7314）表明 MCP 集成仍处于"能跑但脆弱"阶段。

4. **记忆系统 (Memory) 治理**
   - 召回可靠性（#7040）、通道记忆的内容安全遥测（#7335），呼应 Core maintainer"窄而深"路线。

5. **IDE/守护进程可用性**
   - VSCode ACP 连接（#6414、#7056）、daemon 模型切换丢会话（#7023）、Web Shell token 丢失（#7301），形成客户端集成面三大痛点。

---

## 👨‍💻 开发者关注点

- **网络受限区域的升级体验**：#7049 反映出 v0.19.10 修超时后，社区希望"不要把网络问题当致命错误"——降级为 warning + 抬高预算已成为共识。
- **CI/CD 与自动化治理成本**：#7376 合并 80 行 CODEOWNERS 为 4 行，说明维护者已意识到"过度细粒度的所有权 = 合并阻力"；autofix 6 个 PR 同日落地也印证自动化成为头等大事。
- **多 Provider 兼容**：#7344、#7315、#7316 共同暴露 OpenAI 兼容接口在严格 schema 上的水土不服，开发者呼吁更宽容的 wire 转换。
- **安全基线**：#7256（子进程剥离 daemon 密钥）被社区直接关联到泄漏面 `printenv QWEN_SERVER_TOKEN`，安全评审被前置。
- **文档滞后于实现**：[#7373](https://github.com/QwenLM/qwen-code/pull/7373)（SDK `auto` 权限模式未文档化）、[#7371](https://github.com/QwenLM/qwen-code/pull/7371)（GitHub Action 输入名渲染错误）显示代码先行、文档跟进的常见裂痕。

---

*日报基于 QwenLM/qwen-code 仓库过去 24 小时活动数据生成。所有链接均指向公开 GitHub 资源。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报

**日期**：2026-07-21
**仓库**：Hmbown/CodeWhale（原 DeepSeek-TUI，正在迁移至 CodeWhale 品牌）
**今日数据**：50 条 Issues 更新 / 25 条 PRs 更新 / 0 个新 Release

---

## 📌 今日速览

今天是 **v0.9.1 发版日冲刺** 的关键一天：仓库主理人 Hmbown 一次性合并了 18 个 release-blocker 级别的修复 PR，覆盖子代理运行时、权限契约、TUI 滚动/Enter 键卡顿、Windows 进程泄漏等多个长期阻塞用户的痛点。同时值得注意的是，**仓库正从 DeepSeek-TUI 正式更名为 CodeWhale**（参见 PR #4602），身份清理与 `CODEWHALE_*` 环境变量优先级被纳入 v0.9.1 队列。

---

## 🚀 版本发布

过去 24 小时无新 Release 发布。但从 Issue/PR 标签判断：

- **v0.9.1（即将发布）**：聚焦"诚实的子代理运行时 + 统一权限契约 + TUI 健壮性修复"，本文档中绝大多数 `[v0.9.1]` 标签的 release-blocker Issues 均已关闭。
- **v0.9.2（规划中）**：将纳入 HarmonyOS PC 端 TUI 移植（PR #4566）、TelecomJS 模型目录支持（PR #4370）、可配置会话 Token 计数头（PR #4610）等增强。

---

## 🔥 社区热点 Issues（Top 10）

| # | 标题 | 状态 | 评论 | 重要性 |
|---|---|---|---|---|
| [#4032](https://github.com/Hmbown/CodeWhale/issues/4032) | Codewhale 不遵守 Constitution（反复写临时脚本） | OPEN | **40** | 🔴 社区最高热度。`stream2stream` 反映 Codewhale 总是绕过双方已写好的脚本转而自行生成临时脚本，且在被质疑时总会自我辩护。涉及 trust/contract 根本问题。 |
| [#4042](https://github.com/Hmbown/CodeWhale/issues/4042) | 子代理环境级工具沙箱（`tool_restrictions` 强制执行） | CLOSED | 18 | 🟢 已通过 v0.9.1 修复。明确了 `--disallowed-tools` 已在 session/sub-agent/Fleet/MCP 四层运行时统一执行。 |
| [#4489](https://github.com/Hmbown/CodeWhale/issues/4489) | Hook 命令在 Windows 上泄漏 Node.js 进程 | CLOSED | 6 | 🟢 Windows 用户的常见痛点：stdin 未收到 EOF 时超时只杀 `cmd.exe` 而漏掉 `node.exe`。已在 v0.9.1 修复。 |
| [#414](https://github.com/Hmbown/CodeWhale/issues/414) | v0.9.1：在启动前解析一个"诚实的子代理运行时" | OPEN | 5 | 长期 release-blocker，要求 prompt / 角色 / 模型 / 工具 schema / 工作区边界等必须来自同一持久化清单。 |
| [#2889](https://github.com/Hmbown/CodeWhale/issues/2889) | Work Agent 行：真实的子代理详情与结构化活动（恢复自 #2694） | OPEN | 4 | 侧边栏的 Work / Activity / Agents 三栏当前展示的是"伪造的"子代理细节，社区成员 @aboimpinto 主动请缨做聚焦改进。 |
| [#4605](https://github.com/Hmbown/CodeWhale/issues/4605) | Enter 键发送延迟——消息发送时 UI 冻结数百毫秒 | OPEN | 2 | 🟠 高频触点 P1 bug，跨 0.6.x ~ 0.9.0 多个版本未修复，Windows pwsh 平台尤为明显。 |
| [#4603](https://github.com/Hmbown/CodeWhale/issues/4603) | 长输出内容无法滚动——视口外内容被截断 | OPEN | 2 | 🟠 TUI 高频痛点，大 diff / 长日志 / 多轮对话下用户无法回看历史。已有对应测试 PR #4653 锁定行为。 |
| [#3934](https://github.com/Hmbown/CodeWhale/issues/3934) | v0.9.1：将 Fleet 与代理角色折叠为 Planner/Worker/Reviewer/Verifier | OPEN | 2 | 核心架构变更：把角色命名收口为 4 个语义明确的责任角色，能力 / 权限 / 模型路由 / 生命周期与角色解耦。 |
| [#4598](https://github.com/Hmbown/CodeWhale/issues/4598) | v0.9.1：让 Operate 默认委托有界的子任务 | OPEN | 1 | "Operate" 模式作为父级代理，委托独立有界子任务而非自调度，是 distributed-prompting 路线的关键节点。 |
| [#4412](https://github.com/Hmbown/CodeWhale/issues/4412) | v0.9.1：通过统一权限契约解析 Ask / Auto-Review / Full Access | OPEN | 1 | 三个权限后置必须共用一套 typed 决策点，涵盖 root/child/foreground/background/headless/built-in/Bash/MCP 等所有调用面。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 标题 | 状态 | 关键说明 |
|---|---|---|---|
| [#4600](https://github.com/Hmbown/CodeWhale/pull/4600) | feat(tui): 同路由只读子代理自动 fork 到父级缓存前缀 | CLOSED | 💰 **Token 成本下降的核心 PR**。原每个子代理冷启动重复预填 ~100K 输入，现在 fork 时复用父级 turn 引擎快照 + `with_fork_context`，彻底消除重复发现爬取。 |
| [#4602](https://github.com/Hmbown/CodeWhale/pull/4602) | chore(tui): `CODEWHALE_*` 优先级与产品身份清理 | CLOSED | 🪪 **品牌迁移正式 PR**。`CODEWHALE_HOME` / `CODEWHALE_*` 取得优先级，`DEEPSEEK_*` 保留为向后兼容 fallback；DeepSeek 特定的 fallback 模型概念被替换为 provider-neutral 路由状态。 |
| [#4608](https://github.com/Hmbown/CodeWhale/pull/4608) | fix(tui): 对齐权限后置并精简审批 | CLOSED | 让 Auto-Review 真正成为非模态权限后置；Full Access 跨子代理交接保留；Ask/Never/Full Access 中仍允许用户提问；非绕过类安全/仓库规则 hold 失败时静默无模态。 |
| [#4607](https://github.com/Hmbown/CodeWhale/pull/4607) | fix(tui): 恢复 Work 表面的耐久进度 | CLOSED | 修复滚轮滚动后重绘把焦点"吸回"键盘记忆选中的问题；隐藏干净的瞬时完成操作；恢复 To-do 段本地化的"已完成/总数/剩余"统计。 |
| [#4616](https://github.com/Hmbown/CodeWhale/pull/4616) | fix(tui): 让首次安装完成状态耐久化 | CLOSED | 解决 #4604（每次重启强制引导），通过 Codewhale state-root 契约解析首跑标记，并把 Constitution checkpoint 完成持久化为通用 S，restart 不再回放。 |
| [#4618](https://github.com/Hmbown/CodeWhale/pull/4618) | fix(tui): 让长时间运行的工具保持"存活" | CLOSED | 在完整工具执行边界恢复纯 liveness 心跳，防止依赖等待被 10 分钟 TUI 失联看门狗误杀；使用可取消的 guard 任务，错过的 tick 静默跳过，通道满不阻塞。 |
| [#4617](https://github.com/Hmbown/CodeWhale/pull/4617) | fix(kimi): 强制精确匹配 K3 与 MFJS 契约 | CLOSED | 让 Moonshot/Kimi 直连路由的模型/端点/上下文/推理/诊断收据与所选路由完全一致；递归规范化 MFJS 参数 schema，将安全 const 字面量翻译为 enum，失败时 fail-closed。 |
| [#4613](https://github.com/Hmbown/CodeWhale/pull/4613) | fix(tui): 按 MFJS 规范清洗 Moonshot 工具参数 | CLOSED | 根 schema 必须为 `type:"object"`，根层禁用 `anyOf/oneOf/allOf`；对 `apply_patch` 等受影响工具做了归一化处理。 |
| [#4566](https://github.com/Hmbown/CodeWhale/pull/4566) | [v0.9.2] 更新 tui Cargo.toml 以支持 HarmonyOS 构建 | OPEN | 🆕 **HarmonyOS PC 端 TUI 移植进展**：把 portable-pty 从 `target_env = "ohos"` 改为 `cfg("unix")`；portable-pty 0.9 与 nix 已满足 musl 要求。作者 @shenyongqing 报告已在 HarmonyOS PC 编译并成功跑起 TUI。 |
| [#4370](https://github.com/Hmbown/CodeWhale/pull/4370) | feat: 添加 TelecomJS provider 支持与目录拉取 | OPEN | 修复 TelecomJS（江苏电信）注册到 `custom` provider 后模型选择器只显示 1 个模型（`deepseek-v4-pro`）的 bug；`refresh_catalog_cache` / `fetch_catalog_delta` 现在在生产路径中真正被调用。 |

> 另有几个值得关注的 PR：#4615（Fleet ready 文案）、#4611（跨 turn 持续耐久目标）、#4510（键

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*