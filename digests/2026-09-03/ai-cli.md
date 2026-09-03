# AI CLI 工具社区动态日报 2026-09-03

> 生成时间: 2026-09-03 02:31 UTC | 覆盖工具: 9 个

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

**报告日期：2026-09-03**

---

## 一、生态全景

当前主流 AI CLI 工具已进入 **"能力平台化 + 稳定性债务"并行**的关键阶段：一方面，各工具在 Plugin SDK、可恢复 Agent 运行时、多 Provider 中立化、headless 自动化等纵深方向持续投入；另一方面，Windows 桌面端稳定性、长会话内存治理、流式中断可靠性成为全行业共性短板。**企业级管控能力**（managedMcpServers、permission-prompts none、OS Keychain 凭证）与 **开发者级可观测性**（per-model rate limit、OTel 计费 span、subagent 终止语义）正成为下一代 CLI 的分水岭。从迭代节奏看，OpenAI Codex / DeepSeek TUI / OpenCode 处于密集小版本节奏，Claude Code / Gemini CLI 进入企业硬化阶段，而 Copilot CLI 暴露的 1.0.82 OOM 危机则提示了"快速扩张后必须偿还稳定性债"的教训。

---

## 二、各工具活跃度对比

| 工具 | 今日 Issues 更新 | 今日重要 PR | 版本发布 | 整体节奏 |
|------|:---:|:---:|---|---|
| **Claude Code** | ~50 | 4 | v2.1.259 | 稳健，企业硬化 |
| **OpenAI Codex** | ~50 | 12 | rust-v0.153.0 + 3 alpha | 快速迭代 |
| **Gemini CLI** | ~50 | 10 | 无 | 安全主题主导 |
| **GitHub Copilot CLI** | ~13+ | 0 | v1.0.83-2 / v1.0.83-3 | ⚠️ 稳定性债爆发 |
| **Kimi Code CLI** | 3 | 0 | 无 | 低活跃度 |
| **OpenCode** | ~10 | 11 | v1.18.27 | Plugin 化扩张 |
| **Pi** | ~50 | 28 | 无 | AgentHarness 新主线 |
| **Qwen Code** | ~50 | 10 | live-host-v0.2.0 | OpenTUI 迁移期 |
| **DeepSeek TUI** | ~10 | 37 | 无 | 0.9.12 集成收尾 |

> **判读**：Pi 与 DeepSeek TUI（Codewhale）在 PR 提交密度上最高（28 / 37），反映正处于架构重构与功能扩张并行阶段；Kimi Code CLI 当日仅 3 条历史 Issue 归档处理，社区活跃度显著低于其他头部工具。

---

## 三、共同关注的功能方向

以下需求在多个工具的 Top Issues 中同时出现，反映了行业级共识：

### 1. 🪟 Windows 桌面端稳定性（全行业短板）
- **Claude Code**：GPU 进程崩溃 (#80444)、always-on-top (#85891)、stealth update 失败 (#89680)、OS Keychain (#73582) — Top10 占 4 席
- **OpenAI Codex**：Pets 浮动层 click-through (#41513)、自动更新后窗口缺失 (#41523)、多屏溢出 (#25826)、Remote Control 重连循环 (#39954) — 占 Top10 半壁
- **GitHub Copilot CLI**：WSL2 31GB RSS (#4694)、PowerShell Constrained Language (#4683)
- **Kimi Code CLI**：Windows 下 Esc 取消触发未处理异常 (#1297)

### 2. 🧠 多 Provider / 多模型灵活性
- **Claude Code**：statusline 暴露分模型限速 (#73770)
- **GitHub Copilot CLI**：`/model` 同会话切换多模型 / BYOK (#3709，本月热度最高，29 👍)、per-agent provider (#4703)
- **OpenCode**：OpenAI-compatible endpoint auto-discovery (#6231，225 👍)、Anthropic thinking 配置精细化 (#46729)
- **DeepSeek TUI**：Provider 中立化审计（18 个 gate 已清零，#5588）

### 3. 🔌 MCP 生态成熟度
- **Claude Code**：v2.1.259 新增 `managedMcpServers` 企业下发
- **OpenAI Codex**：PR #42413 实现 MCP OAuth 协调刷新、`#42384` RMCP OAuth 凭据存储
- **GitHub Copilot CLI**：协议握手双重调用 (#4525)、OAuth 缓存键漂移 (#4695)
- **Qwen Code**：MCP 图片绕过 read_file 视觉预算 (#10834)
- **DeepSeek TUI**：MCP 密钥应限定在 owning runtime 内 (#5637)

### 4. 📡 会话生命周期 / 可恢复运行时
- **Claude Code**：SSH reconnect/resume (#49790)、session 跨重启恢复 (#89946)
- **OpenCode**：`/goal` 会话目标（140 👍，PR #46328 提供最小插件示例）
- **Pi**：**AgentHarness** 统一运行时 (#9044)，整合 prompt/compact/abort/resume/lanes
- **DeepSeek TUI**：每会话控制 socket + RuntimeBackendKind::External (#5533)
- **Qwen Code**：Goal 用户取消语义 (#10802)

### 5. 🛡️ 安全硬化与依赖卫生
- **Gemini CLI**：CVE-2026-28292（simple-git）、CVE-2026-9277（shell-quote）紧急升级；NTFS 8.3 短名绕过 (#29116)、`$VAR` 变量展开绕过 (GHSA-wpqr-6v78-jr5g)
- **Qwen Code**：P1 级 CVE audit 失败 (#10850)
- **Claude Code**：security-guidance `**` glob 语义安全漏洞 (#87079)

### 6. 📊 可观测性 / 成本透明度
- **Claude Code**：per-model 周配额 (#73770)、subagent effort 文档化 (#91415)
- **GitHub Copilot CLI**：子 Agent OTel span 缺计费属性 (#4224)
- **Pi**：JSONL 会话被陈旧句柄复活 (#9038)、EOF 但无 terminal event 暴露为错误 (#8996)
- **Gemini CLI**：Subagent MAX_TURNS 后仍报告 success (#22323)

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|------------|
| **Claude Code** | 企业管控 + 自动化代理 | 企业 DevOps / DevSecOps | managedMcpServers + permission-prompts none + Anthropic 一线模型 |
| **OpenAI Codex** | 跨平台一致性 + Mobile Remote | 桌面 + iOS 全场景 | 后台守护进程跨平台化（Windows 补齐）+ Rust TUI |
| **Gemini CLI** | 安全硬化 + 模型迭代 | 安全敏感型企业 / 多模态用户 | 强沙箱（Seatbelt）+ Flash 系列快速迭代 + 多层 CVE 防御 |
| **GitHub Copilot CLI** | GitHub 原生集成 + 模型矩阵 | GitHub 深度用户 / Copilot 订阅者 | Agent Plugins 1.0 规范 + 多模型回退机制 |
| **Kimi Code CLI** | 简洁 / YOLO 模式 | 国内长上下文用户 | 轻量级 + Moonshot 模型 + 自动化执行 |
| **OpenCode** | Plugin 化生态 + Provider 中立 | 扩展开发者 / 自托管用户 | Plugin SDK 表单/事件流/键查找 + OpenAI-compatible 自动发现 |
| **Pi** | Agent 运行时抽象 + Provider 中立 | 框架作者 / 高级开发者 | AgentHarness + ToolPolicy + capability 决策审计 |
| **Qwen Code** | 渲染层现代化 + 国产化 | 国内企业 / 钉钉生态 | OpenTUI 迁移 + `qwen serve` 守护进程 + 多渠道聚合 |
| **DeepSeek TUI** | 重构清理 + Provider 中立化 | 本地 LLM 用户 / 多 Provider 切换者 | 巨石文件拆分（lib.rs 18.7k 行）+ Ollama/DeepSeek/OpenRouter 余额查询 |

**关键差异化信号**：
- **企业管控 vs 开发者扩展**：Claude Code 偏管控（自上而下），OpenCode / Pi 偏扩展（自下而上）
- **Provider 锁定 vs 中立**：Claude / Gemini / Qwen 紧绑自家模型；OpenCode / Pi / DeepSeek TUI 走中立路线
- **闭源成熟 vs 开源迭代**：Claude / Codex 闭源为主；OpenCode / Pi / DeepSeek TUI 仓库型生态，PR 密度显著更高
- **TUI 现代化路线分歧**：Qwen Code 迁 OpenTUI、Codex 持续 Rust TUI、Pi 走 capability 抽象

---

## 五、社区热度与成熟度

### 热度金字塔（基于 Issues/PR 密度 + 👍 极值）

```
        🔥 高活跃 + 高热度
        ┌─────────────────┐
        │ Claude Code (#36151: 675👍) │
        │ OpenCode (#6231: 225👍)    │
        │ Codex (#23200: 56👍)       │
        │ Copilot (#3709: 29👍)      │
        └─────────────────┘
        ⚡ 高活跃 + 快速迭代
        ┌─────────────────┐
        │ Pi (50 issues, 28 PRs)     │
        │ DeepSeek TUI (37 PRs)      │
        │ Codex (12 PRs)             │
        └─────────────────┘
        🔧 集中清理期
        ┌─────────────────┐
        │ Qwen Code (OpenTUI 迁移)  │
        │ Gemini CLI (安全硬化)      │
        │ Copilot CLI (稳定性债)    │
        └─────────────────┘
        😴 低活跃度
        ┌─────────────────┐
        │ Kimi Code CLI (3 issues)   │
        └─────────────────┘
```

### 成熟度评估

| 成熟度档位 | 工具 | 判定依据 |
|----------|------|---------|
| **头部成熟** | Claude Code / OpenAI Codex / Gemini CLI | 大量企业级特性沉淀，Issue 多围绕稳定性与权限精细化；代表「能力已上线、体验需打磨」阶段 |
| **快速扩张** | OpenCode / Pi / DeepSeek TUI | PR 密度极高、Plugin 化或运行时抽象正在搭建；处于「定义未来形态」的关键期 |
| **平台重构** | Qwen Code | OpenTUI 迁移 + 多渠道扩展并行；架构升级阵痛期 |
| **稳定性危机** | Copilot CLI | 1.0.82 暴露的 OOM / libuv 句柄泄漏 / SEA 忽略 NODE_OPTIONS 三连击，需要版本回退或紧急补丁 |
| **稳健低调** | Kimi Code CLI | 3 条 Issue 全部已关，缺乏新版本信号，社区存在感偏弱 |

---

## 六、值得关注的趋势信号

### 📡 趋势 1：AgentHarness — "可恢复运行时"成为下一代 Agent 框架共识
- **Pi 的 #9044** 首次把 prompt/compact/abort/resume/lanes/watch 纳入统一生命周期契约
- **OpenCode 的 #27167** /goal + /loop 走插件化实现
- **DeepSeek TUI 的 #5533** 提供 per-session 控制 socket 接入外部 supervisor
- **Qwen Code 的 #10802** 补齐 Goal 用户取消语义

> **决策价值**：单一对话式 Agent 已触顶，「Agent 即服务」必须支持可中断、可恢复、可监督。

### 📡 趋势 2：Provider 中立化从「可选」变为「必修课」
- **DeepSeek TUI** 清理 18 个 DeepSeek-exclusive gate
- **OpenCode** 自动发现 OpenAI-compatible endpoints（225 👍 极值 Issue）
- **Pi** 同时维护 xAI / Gemini 3.x / Bedrock / Codex / llama.cpp / vLLM / OpenCode Go 等 8+ Provider 适配
- **Copilot CLI** 紧随其后支持 BYOK 与多模型回退（v1.0.83-2）

> **决策价值**：单一模型绑定 = 长期负债；BYOK / per-agent provider / 本地 LLM 适配是用户黏性的护城河

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（截止 2026-09-03）

> 数据观察：本次抓取的 20 条热门 PR 中评论数均显示为 `undefined`，因此排行基于 **PR 排序位次、内容热度、Issue 关联度与更新时间** 综合判断，而非严格评论数。Issues 部分的评论数完整可用。

---

## 1. 热门 Skills 排行（Top 8）

| # | Skill | 状态 | 核心热度来源 |
|---|-------|------|------------|
| 1 | **#1298 skill-creator 评测修复**<br>修复 `run_eval.py` 永远返回 0% recall 的核心 bug，并补齐 Windows 兼容 | OPEN | 直击 Issue #556（12 评论，👍7），是当前最关键的元技能修复——优化回路正在"对着噪声调参" |
| 2 | **#514 document-typography**<br>AI 文档排版质量控制（孤立行/孤寡段落/编号错位） | OPEN | 击中"AI 生成文档几乎都有排版问题"的高频痛点，作者明确指出 *every document Claude generates* 都会受影响 |
| 3 | **#1628 Hivemind**<br>零成本多 Agent 编排，把机械任务下放给 headless opencode worker | OPEN | 提出"昂贵模型的 context 才是稀缺资源"的新范式，社区对降本编排范式关注度高 |
| 4 | **#1367 self-audit (v1.3.0)**<br>AI 输出自审计：先机械验证文件，再做四维推理质量门 | OPEN | 与 Issue #1385（Reasoning Quality Gate Pipeline）联动，是质量门控方向代表 |
| 5 | **#83 skill-quality-analyzer + skill-security-analyzer**<br>元技能：5 维度质量评分 + 安全审计 | OPEN | 配合 Issue #492 安全话题（43 评论，👎区热度最高），生态"治理工具"刚需 |
| 6 | **#1615 scnet-hpc**<br>SCNet 高性能计算集群的 SSH/Slurm 操作技能 | OPEN | 8 月新近提交，垂直领域（科研 HPC）专业技能代表 |
| 7 | **#568 ServiceNow 平台技能**<br>覆盖 ITSM/ITOM/SecOps/ITAM/FSM/SPM/CSDM/IntegrationHub | OPEN | 已迭代 5 个月，企业 SaaS 平台技能代表，体量大、覆盖广 |
| 8 | **#486 ODT Skill**<br>OpenDocument 创建、模板填充、ODT↔HTML 解析 | OPEN | 弥补 LibreOffice/ODF 生态在 Skills 中的空白，文档处理矩阵补全 |

> 注：**#210 frontend-design**、**#723 testing-patterns**、**#525 pyxel** 紧随其后，是开发者体验向技能的代表。

---

## 2. 社区需求趋势（按 Issues 提炼）

按 Issue 评论数 + 👍 数综合排序，呈现五大趋势：

| 趋势 | 代表 Issue | 信号强度 |
|------|------------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 skill 假冒 `anthropic/` 命名空间 | 43 评论 / 👍2 —— **全榜最热** |
| **🏢 企业级分发与共享** | [#228](https://github.com/anthropics/skills/issues/228) Org 内 Skill 共享 | 16 评论 / 👍8 |
| **🧪 评测/基准可靠性** | [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 0% 触发率 + [#1390](https://github.com/anthropics/skills/issues/1390) mcp-builder 0/N | 12+4 评论 |
| **📦 数据/分发完整性** | [#62](https://github.com/anthropics/skills/issues/62) Skills 莫名消失 + [#189](https://github.com/anthropics/skills/issues/189) 插件重复 Skill | 10+6 评论 |
| **🧠 高级能力扩展** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory（紧凑符号）+ [#412](https://github.com/anthropics/skills/issues/412) agent-governance（已关闭） | 9+6 评论 |

**细分方向洞察：**
- **元技能（meta-skills）爆发**：治理、审计、质量分析、安全扫描成为新刚需
- **文档格式全覆盖**：ODT、PDF、Typography、SharePoint 安全（[#1175](https://github.com/anthropics/skills/issues/1175)）、docx 空白问题（[#12](https://github.com/anthropics/skills/issues/12)） —— 文档技能矩阵仍有空白
- **协议化与跨平台**：Skills as MCPs（[#16](https://github.com/anthropics/skills/issues/16)）、Bedrock 兼容（[#29](https://github.com/anthropics/skills/issues/29)）
- **上下文控制**：claude-api skill 一次性注入 156k tokens（[#1487](https://github.com/anthropics/skills/issues/1487)）暴露了"skill 内容过于 eager load"的设计问题

---

## 3. 高潜力待合并 Skills

这些 PR 已展现明显社区信号但仍处于 OPEN 状态，是近期最可能落地的候选：

| 优先级 | PR | Skill | 合并潜力依据 |
|--------|----|----|------|
| 🔥 极高 | [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测修复 | 修复全栈阻塞性 bug，关联 #556 高赞 issue |
| 🔥 极高 | [#83](https://github.com/anthropics/skills/pull/83) | quality/security-analyzer | 配套 #492 安全议题，元技能生态刚需 |
| 🔥 高 | [#1367](https://github.com/anthropics/skills/pull/1367) | self-audit | 与 #1385 提案呼应，质量门方向明确 |
| 🔥 高 | [#1628](https://github.com/anthropics/skills/pull/1628) | Hivemind | 编排范式创新，零成本卖点突出 |
| ⭐ 高 | [#514](https://github.com/anthropics/skills/pull/514) | document-typography | 击中普遍痛点，但需评估与现有 docx/pdf skill 的协同 |
| ⭐ 高 | [#568](https://github.com/anthropics/skills/pull/568) | ServiceNow | 体量大、覆盖广，企业市场关注度高 |
| ⭐ 中 | [#1615](https://github.com/anthropics/skills/pull/1615) | scnet-hpc | 垂直专业，新近提交，Niche 但精准 |
| ⭐ 中 | [#486](https://github.com/anthropics/skills/pull/486) | ODT | 文档矩阵空白点补全 |
| 💡 观察 | [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 退役模型标注 | 修复 #1603，模型生命周期管理，合并阻力最小 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区当前最集中的诉求是"Skills 自身需要 Skills 来治理"——元技能（评测可靠性 / 安全扫描 / 质量门 / 信任边界）的优先级已超过新领域技能本身**，生态正从"快速堆量"转入"建立可信赖、可审计、可共享的 Skill 基础设施"阶段。

---

# Claude Code 社区动态日报
**2026-09-03**

---

## 📌 今日速览

今日 v2.1.259 版本带来 `managedMcpServers` 管理设置与 `--permission-prompts none` 无人值守模式，但社区聚焦于 Windows 桌面端的多个稳定性问题（GPU 崩溃、always-on-top、自更新失败）。最热议题仍是呼声最高的**多账户切换功能**（169 评论 / 675 👍），延续数月仍未有官方回应。

---

## 🚀 版本发布

### v2.1.259 — [Release Notes](https://github.com/anthropics/claude-code/releases/tag/v2.1.259)

- **新增 `managedMcpServers` 管理设置**：组织管理员可向所有用户下发 HTTP/SSE 类型的 MCP 服务器，配置结构与 `.mcp.json` 一致（命令型条目会被自动跳过）。
- **新增 `--permission-prompts none` 标志**：专为无人值守 headless 主机设计，自动跳过所有原本会触发确认提示的操作，适合 CI/CD 与自动化流水线场景。

> 💡 两条更新都聚焦在「企业管控」和「无人值守运行」两个场景，进一步强化 Claude Code 作为自动化代理工具的可用性。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 要点 |
|---|-------|--------|------|
| 1 | [Multi-account switching in Claude Mobile app](https://github.com/anthropics/claude-code/issues/36151) | 💬 169 / 👍 675 | **今日最热**。要求在 Claude 移动端支持多账户切换而无需共享邮箱，长期诉求但官方尚未回应。 |
| 2 | [Windows Desktop GPU-process crash (0x060C201E)](https://github.com/anthropics/claude-code/issues/80444) | 💬 104 / 👍 16 | Desktop 1.24012.1 通过内嵌 Browser 触发致命 GPU 进程崩溃，MSIX 包进入 `appxState=2` 不可启动，需手动 Repair。RTX 2080 双驱动版本均复现。 |
| 3 | [Windows Desktop stays always-on-top](https://github.com/anthropics/claude-code/issues/85891) | 💬 65 / 👍 145 | Windows 11 上 Claude Desktop 主窗口始终置顶、无相关设置项；与已关闭的 macOS 同类 bug (#66516) 形成跨平台镜像。 |
| 4 | [Cowork git proxy blocks all pushes](https://github.com/anthropics/claude-code/issues/76248) | 💬 32 / 👍 12 | 自 7 月 10 日起 Cowork/Cloud 会话的 git proxy 拒绝推送至授权仓库外的目标，**连用户自带的 fine-grained PAT 也无法绕过**，疑似 `CCR_TEST_GITPROXY` 灰度。 |
| 5 | [Desktop SSH remote session should survive disconnect](https://github.com/anthropics/claude-code/issues/49790) | 💬 17 / 👍 41 | SSH 远程客户端断连（主动退出/网络中断/合盖）会一并终止远端的 Claude Code 进程，缺乏 reconnect/resume 能力，长任务痛点。 |
| 6 | [July 17 mass billing incident — credits charged despite plan allowance](https://github.com/anthropics/claude-code/issues/81703) | 💬 12 / 👍 0 | 7 月 17 日批量计费事件，争议金额 $604.71，今日更新澄清部分费用为 Claude Platform 信用赠送而非超额扣费。 |
| 7 | [Windows stealth update leaves orphaned processes (0x80070020)](https://github.com/anthropics/claude-code/issues/89680) | 💬 8 / 👍 0 | Windows 桌面静默更新后旧 AppX 容器进程未释放，新版本启动失败 `0x80070020`，必须重启机器才能恢复。 |
| 8 | [Unrequested background `git fetch` to origin](https://github.com/anthropics/claude-code/issues/84698) | 💬 4 / 👍 2 | Desktop 在 diff/commit 刷新时静默触发 `git fetch`，且设计上不可追溯、无开关可关闭，隐私/审计风险。 |
| 9 | [Store API credentials in OS secret store](https://github.com/anthropics/claude-code/issues/73582) | 💬 3 / 👍 4 | 建议将 API Key / OAuth token / MCP 第三方 token 迁移至系统 Keychain/Credential Manager，取代 `~/.claude/` 明文存储。 |
| 10 | [statusline: expose per-model weekly rate limits](https://github.com/anthropics/claude-code/issues/73770) | 💬 2 / 👍 7 | statusline JSON 仅暴露统一限速，期望补充 Opus/Sonnet/Fable 分模型周配额，便于自建仪表盘。 |

> 📊 **趋势观察**：今日 Windows Desktop 稳定性问题占据 4 席 (#2/#3/#7/#9)，建议近期升级 Windows 端的团队暂缓生产部署。

---

## 🛠️ 重要 PR 进展

过去 24 小时仅有 4 个 PR 更新，全量列出：

| PR | 状态 | 内容 |
|----|------|------|
| [#41938](https://github.com/anthropics/claude-code/pull/41938) | ❌ CLOSED | 新增 Linux/macOS Bash 脚本用于 DevContainer 启动，补充原有 Windows PowerShell 脚本。 |
| [#87079](https://github.com/anthropics/claude-code/pull/87079) | 🟢 OPEN | **修复 security-guidance 中 `**` glob 语义**：使 `**/*.ts` 能匹配零深度路径，闭合 `**` 跨深度匹配承诺与 fnmatch 实际行为之间的安全语义漏洞。 |
| [#86537](https://github.com/anthropics/claude-code/pull/86537) | 🟢 OPEN | 修正 CHANGELOG.md 中 `CLAUDE_BASH_NO_LOGIN` 条目的重复 "to to" 拼写错误。 |
| [#61691](https://github.com/anthropics/claude-code/pull/61691) | 🟢 OPEN | 为 Windows 用户新增 PowerShell 诊断脚本，修复 GitHub MCP 连接器显示 "Connected" 但 tools 列表为空的长期 bug（关联 #28695/#41658/#5758）。 |

---

## 📈 功能需求趋势

从今日 50 条更新 Issues 中归纳出社区最强烈的诉求方向：

1. **🔐 账户与认证体系** —— **多账户切换** (#36151) 累计 675 👍 一骑绝尘；**OS Keychain 凭证存储** (#73582) 反映安全合规呼声。
2. **🪟 Windows Desktop 体验** —— 跨 always-on-top、GPU 崩溃、自更新失败、session 损坏四条线 (#85891/#80444/#89680/#91528)，是当前最大短板。
3. **🌐 远程/SSH 会话韧性** —— SSH reconnect/resume (#49790) 与后台 session 跨重启恢复 (#89946) 共同指向"会话是工作流核心资产"的诉求。
4. **📊 可观测性与成本透明度** —— 分模型限速 (#73770)、跨 session 内容交叉引用 (#76440)、subagent effort 字段文档化 (#91415) 均体现开发者对"可控可观测"的强烈需求。
5. **🛡️ 安全策略精确度** —— `**` glob 行为 (#87079)、`bypassPermissions` 被忽略 (#91296)、Bash cd 复合读权限提示误触发 (#91650) 反映权限系统精细化规则仍有缺口。
6. **⚙️ 自动化与无人值守** —— 与 v2.1.259 新增的 `--permission-prompts none` 形成需求-供给闭环。

---

## 💡 开发者关注点

整理社区高频痛点供工程团队参考：

- **🔴 桌面端可恢复性差**：更新崩溃 → 容器损坏 → 需手动 Repair/重启的链路尚未闭环；建议官方提供「桌面修复模式」命令行工具（#61691 是社区自发的尝试）。
- **🔴 隐式网络行为**：未请求的 `git fetch`、后台 MCP 探测缺乏 opt-out 开关，企业内网场景易触发审计告警 (#84698/#86650)。
- **🔴 权限系统边界模糊**：`.claude/settings.local.json` 的 `bypassPermissions` 在某些平台被静默忽略，开发者难以判断当前生效的权限等级 (#91296)。
- **🟡 文档与实现脱节**：subagent `effort` 字段 (#91415)、security-guidance v1 描述 (#89728) 已实现但未文档化，导致用户"以为不生效"。
- **🟡 计费透明度**：批量计费事件后续澄清机制响应慢，影响 Pro/Max 用户信任 (#81703)。
- **🟢 自动化场景被正向解锁**：`--permission-prompts none` + `managedMcpServers` 的发布，说明官方正在认真对待 enterprise/headless 用例，社区可关注后续 CI/CD 集成文档的补充。

---

*数据范围：2026-09-02 ~ 2026-09-03 · 数据源：[anthropics/claude-code](https://github.com/anthropics/claude-code)*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-03**
**数据来源：[github.com/openai/codex](https://github.com/openai/codex)**

---

## 1. 今日速览

今日 Codex 生态最显著的动态集中在 **Windows 平台体验修复** 与 **后台守护进程架构演进** 上：多条高热度 Issue 指向 Windows 上的 Pets 浮动窗、Auto-Update 后窗口缺失、Computer Use 失效等共性问题，同时 PR #42405 / #42392 将 Unix 端的 `app-server` 守护进程与 daemon 更新机制移植到 Windows，补齐跨平台一致性。稳定版 **rust-v0.153.0** 今日发布，重点补齐 Vim 模式下的 `u` / `Ctrl+R` 撤销重做体验。

---

## 2. 版本发布

### 🚢 rust-v0.153.0（稳定版）
- **Vim 模式完整撤销/重做**：支持 `u` 撤销与 `Ctrl+R` 重做，可恢复包括粘贴内容与附件在内的完整草稿。([#41941](https://github.com/openai/codex/pull/41941) / [#42140](https://github.com/openai/codex/pull/42140))
- **Plugin CLI 能力扩展**：插件 CLI 支持列表、安装与移除操作。

### 🧪 rust-v0.153.0-alpha.6 / alpha.5.1 / alpha.5
预发布通道在 24 小时内连发三次，反映 0.153 主线在临近稳定前存在密集的小幅回归与热修。

---

## 3. 社区热点 Issues

| # | Issue | 标题 | 评论 | 👍 |
|---|------|------|------|---|
| 1 | [#23200](https://github.com/openai/codex/issues/23200) | iOS 端支持无桌面端常驻的远程 Linux 主机 | 22 | 56 |
| 2 | [#39954](https://github.com/openai/codex/issues/39954) | Windows + Android Remote Control 在 `initialize/thread-list` 后陷入重连循环 | 20 | 0 |
| 3 | [#41513](https://github.com/openai/codex/issues/41513) | Windows Pets（内置 + 自定义）在某些场景下变成 click-through 无法拖动 | 19 | 6 |
| 4 | [#39989](https://github.com/openai/codex/issues/39989) | Windows 桌面端重启后仍保留已删除 ChatGPT 会话到 Recents | 14 | 1 |
| 5 | [#40782](https://github.com/openai/codex/issues/40782) | macOS 26.820.60940 后全局 UI 文本显著变细/模糊 | 13 | 4 |
| 6 | [#30385](https://github.com/openai/codex/issues/30385) | Windows 桌面侧边栏缺失部分本地项目线程 | 12 | 1 |
| 7 | [#25826](https://github.com/openai/codex/issues/25826) | Windows 多显示器环境下最大化窗口跨屏溢出 | 12 | 15 |
| 8 | [#38144](https://github.com/openai/codex/issues/38144) | `/fork` 后父线程仍持有 writer，阻塞其他终端恢复 | 8 | 7 |
| 9 | [#24224](https://github.com/openai/codex/issues/24224) | 并发会话在不同项目间泄露 workspace root | 8 | 4 |
| 10 | [#41523](https://github.com/openai/codex/issues/41523) | Windows 自动更新后首次启动无窗口（`MainWindowHandle=0`） | 7 | 0 |

**为什么值得关住：**
- **#23200** 是当日热度最高的功能请求（👍 56），反映社区强烈希望 Codex Mobile 作为「远程 Linux 开发机的控制平面」，而非必须依赖桌面端常驻。
- **Windows 平台问题占主导**（#39954 / #41513 / #39989 / #25826 / #41523 等），主要集中于 Pets 浮动层、Remote Control、多屏渲染、自动更新后的进程生命周期。
- **#38144** 与 **#24224** 揭示 CLI/桌面端在并发场景下的资源隔离问题（writer 锁、workspace root 泄漏），属于影响核心使用流程的稳定性缺陷。

---

## 4. 重要 PR 进展

| # | PR | 内容 |
|---|----|------|
| 1 | [#42422](https://github.com/openai/codex/pull/42422) | Guardian computer-use 评分遵循当前模型的 REPL auto-review 需求，并在活线程切换模型时实时同步 |
| 2 | [#42419](https://github.com/openai/codex/pull/42419) | 在 agent command center 增加 `agents.resume` 会话恢复动作，默认绑定 `Ctrl+O` |
| 3 | [#42417](https://github.com/openai/codex/pull/42417) | 新增 `application.network` 受管网络需求（精确域名 allow/deny + 域名归一化） |
| 4 | [#42413](https://github.com/openai/codex/pull/42413) | 启用 MCP OAuth 的协调刷新（`Coordinated` 模式 + 凭据锁） |
| 5 | [#42410](https://github.com/openai/codex/pull/42410) | 允许用户在 misalignment 暂停后查看服务端 findings 并显式决定是否继续 |
| 6 | [#42408](https://github.com/openai/codex/pull/42408) | 加固内嵌编辑器输入：`!`/`/`/`?` 改为纯文本；切换 Vim 模式/取消草稿/粘贴时保留缓冲区字符 |
| 7 | [#42405](https://github.com/openai/codex/pull/42405) | Windows 端支持 managed app-server 守护进程 + 自动 TUI attach（AF_UNIX 等价） |
| 8 | [#42401](https://github.com/openai/codex/pull/42401) | TUI 启动/重连时通过 app server 发现 `collaborationMode/list` 协作模式目录 |
| 9 | [#42395](https://github.com/openai/codex/pull/42395) | 在用户 shell 与 unified exec 中强制写入最新 `CODEX_VERSION`，并在 MCP turn 元数据中暴露 `codex_version` |
| 10 | [#42392](https://github.com/openai/codex/pull/42392) | Windows 端支持 managed daemon 更新循环（非交互 PowerShell 安装 + readiness 握手） |
| 11 | [#42385](https://github.com/openai/codex/pull/42385) | 新增实验性 `features.context_management.experimental_mode`（token 预算上下文 + 历史备注，限 Plus/Pro/Pro Lite） |
| 12 | [#42384](https://github.com/openai/codex/pull/42384) | 新增 RMCP OAuth 凭据存储适配器，刷新事务需经过守卫 |

**重点解读：**
- **#42408** 是对 Issue #21804（Vim 模式提交后保留）的直接回应，解决了切换模式时输入丢失、粘贴突发期间 Enter 行为不一致等历史痛点。
- **#42405 / #42392** 系列把后台守护进程能力扩展到 Windows，是补齐跨平台架构一致性的关键一步。
- **#42385** 引入实验性上下文管理（token 预算 + 历史备注），是 GPT-5.6 时代应对长上下文推理成本的重要信号。

---

## 5. 功能需求趋势

从今日 50 条 Issue 中提炼出以下社区最关注的演进方向：

| 方向 | 代表 Issue | 趋势信号 |
|------|------------|----------|
| **📱 Mobile / Remote 工作流** | #23200、#39954、#31110 | 希望摆脱对桌面端常驻的依赖，实现 mobile ↔ Linux 服务器直连 |
| **🪟 Windows 平台质量** | #41513、#39989、#25826、#41523、#41752、#34351 | Pets、Remote Control、自动更新、多屏渲染出现系统性回归 |
| **⌨️ Vim / TUI 体验** | #21804、#37769、#41242 | Vim 模式在提交/粘贴/主题切换下的状态保持；WT_SESSION 触发的背景色切换 |
| **🤖 多 Agent 与自定义 Provider** | #37858、#37859 | Ultra multi-agent / Responses multi_agent 在 API-key 自定义 `model_providers` 下失效或被遮挡 |
| **🖱️ Computer Use** | #42214、#36459 | Windows 下 `cua.getApp` 不可用；macOS 上坐标点击出现 `-10005 noWindowsAvailable` |
| **🧮 配额与速率限制** | #42127、#42262 | Pro 20x 配额在小任务下异常消耗；reasoning 配额耗尽时 reasoning effort 被强制降级 |
| **🧠 上下文与压缩** | #38370、#24224 | Windows 上 `/responses/compact` 404；并发会话间 workspace root 泄漏 |
| **🔌 MCP / 凭据管理** | #38160、#24446 | Responses encrypted reasoning 在 Desktop 上不可见；本地 Markdown 图片缓存陈旧 |

---

## 6. 开发者关注点

综合 Issue 讨论与 PR 落地，社区目前的高频痛点与诉求可归纳为以下几类：

1. **Windows 平台稳定性已成为第一优先级**
   - Pets 浮动层 click-through、自动更新后窗口缺失、Microsoft Store 升级覆盖 `local-projects` 状态等连续性 bug 严重影响日常使用；PR #42405、#42392、#42384 表明团队正在系统性补齐 Windows 端的 daemon / 更新 / 凭据链。

2. **跨平台会话一致性与恢复能力**
   - `/fork` 后父线程 writer 未释放、并发会话间 workspace root 泄漏、删除会话仍残留 Recents — 开发者期望获得「会话即工程」的稳定模型，#42419 的 `agents.resume` 是回应方向之一。

3. **高级 Agent 能力对自定义 Provider 用户的可见性**
   - Ultra multi-agent 与 Responses multi_agent 在 API-key 自定义 provider 下不工作或被文档隐藏（#37858 / #37859），#37859 建议至少提供文档/配置开关，避免 Pro 用户被强制绑定 ChatGPT 订阅。

4. **Vim 模式与 TUI 输入的人机工程学**
   - #21804、#42408 共同指向 Vim 模式在「提交后是否保持」「粘贴突发期间 Enter 行为」「切换模式时字符缓冲保留」三方面的体验补齐，#42408 是这一方向的关键落地。

5. **配额透明度与推理强度可解释性**
   - Pro 20x 用户在小任务中消耗异常配额（#42127）、reasoning effort 在配额耗尽时被强制降级（#42262）— 开发者希望获得更细粒度的 token / reasoning 用量明细。

6. **实验能力需要清晰边界**
   - context management 实验开关（#42385）、misalignment 暂停后可审阅继续（#42410）均表明团队正在把「实验性」与「用户控制权」做更明确的隔离，是负责任的发布策略。

---

> 📌 **TL;DR**：今日 Codex 的主线是「Windows 平台体验补齐 + 后台守护进程跨平台一致性」，伴随 Vim / TUI 体验的精细化打磨（#42408）以及实验性 context management 的边界化（#42385 / #42410）。社区最大呼声仍来自 Mobile / Remote 工作流（#23200）与 Windows 桌面端的系统性回归，建议开发者优先关注 0.153 主线与 Windows daemon 相关 PR。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-09-03**

---

## 📌 今日速览

今天社区整体处于"安全加固与模型迭代"双主线节奏：一方面，**gemini-3.8-flash 被正式提为默认 Flash 模型**（PR #29172），同时多条 P1 级 CVE 修复（simple-git / shell-quote / fast-uri）进入合并窗口；另一方面，**Subagent 行为可靠性**仍是讨论最热的议题 —— #22323 关于 MAX_TURNS 后仍被报告为"GOAL success"的隐性问题已收到 13 条评论，是近 24 小时更新最频繁的 thread。Antigravity CLI 与自定义 slash commands 的兼容性问题（#27325）也在今日关闭，标志着官方对迁移路径给出明确指引。

---

## 🚀 版本发布

过去 24 小时无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| 1 | **#22323** Subagent recovery after MAX_TURNS 仍返回 success，掩盖了执行中断（P1 / area/agent / 13 评论） | 子智能体执行流可靠性核心问题，可能影响大量长会话调试与评估 | [🔗](https://github.com/google-gemini/gemini-cli/issues/22323) |
| 2 | **#27325** Antigravity CLI 是否支持 `commands` 目录的自定义 slash command（9 评论，**已关闭**） | 用户迁移路径关键问题，关闭意味着官方给出"无需转换 skill"的明确答复 | [🔗](https://github.com/google-gemini/gemini-cli/issues/27325) |
| 3 | **#22745** EPIC：评估 AST-aware 文件读取、搜索、映射的价值（7 评论） | 代表了下一阶段代码理解能力的方向性投资 | [🔗](https://github.com/google-gemini/gemini-cli/issues/22745) |
| 4 | **#21968** Gemini 几乎不会主动调用自定义 skills 与 sub-agents（6 评论） | 用户体验与能力发现的核心痛点，反映默认行为过于保守 | [🔗](https://github.com/google-gemini/gemini-cli/issues/21968) |
| 5 | **#26525** Auto Memory 缺乏确定性 redact，导致敏感内容进入模型上下文（P2 / security / 5 评论） | 安全合规关键，关系到 Auto Memory 能否在企业场景落地 | [🔗](https://github.com/google-gemini/gemini-cli/issues/26525) |
| 6 | **#29042** Shell 工具解析后台 PID 时将非数字行变为 NaN（P2 / 5 评论） | 小型但影响面广的解析缺陷，会污染 session 输出 | [🔗](https://github.com/google-gemini/gemini-cli/issues/29042) |
| 7 | **#25166** Shell 命令执行完后仍卡在 "Waiting input"（P1 / 4 评论 / 3 👍） | 用户高频碰到的可用性问题，关注度较高 | [🔗](https://github.com/google-gemini/gemini-cli/issues/25166) |
| 8 | **#29045** `read-many-files` 通过子串匹配错误地将二进制资源 inline 进上下文（P1 / 4 评论） | 上下文污染问题，会显著增加 token 消耗与误导模型 | [🔗](https://github.com/google-gemini/gemini-cli/issues/29045) |
| 9 | **#22232** Browser agent 在 persistent session 下需"失败即接管"的会话恢复策略 | Browser agent 鲁棒性增强，影响长流程自动化 | [🔗](https://github.com/google-gemini/gemini-cli/issues/22232) |
| 10 | **#21983** Browser subagent 在 Wayland 下失败（P1 / 4 评论） | Linux 桌面环境兼容性，影响 Wayland 用户 | [🔗](https://github.com/google-gemini/gemini-cli/issues/21983) |

> 注：**#27938** / **#27976** 两例高内存占用崩溃报告虽今日关闭，但反映了 memory leak 仍是社区反复出现的高影响问题。

---

## 🛠 重要 PR 进展

| # | PR | 内容要点 | 链接 |
|---|----|---------|------|
| 1 | **#29172** feat(core): 将 `gemini-3.8-flash` 设为默认 Flash 模型 | 同步注册 `3.5-flash-lite` / `3.6-flash` / `3.7-flash` / `3.8-flash` 为可选项 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29172) |
| 2 | **#29115** fix(config): 系统级配置文件强制权限与所有权校验 | Windows (ACL via PowerShell) + POSIX 双平台防御 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29115) |
| 3 | **#29170** fix(core): 加强 workspace 边界检查与 symlink 解析 | 命令安全启发式、文件发现、目录列举全链路加固 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29170) |
| 4 | **#29116** fix(core): 缓解 NTFS 8.3 短名（SFN）路径绕过 | 在 path normalization 与 AllowedPathChecker 中处理 `git~1` 等短名 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29116) |
| 5 | **#29171** fix(cli): macOS Seatbelt 沙箱临时目录独立化 | 修复 host tmpdir 透传给 Seatbelt 导致跨进程共享写的问题 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29171) |
| 6 | **#29094** fix: 升级 simple-git 至 3.32.3（CVE-2026-28292, **CRITICAL**） | 依赖安全 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29094) |
| 7 | **#29095** fix: 升级 shell-quote 至 1.8.4（CVE-2026-9277, **CRITICAL**） | 依赖安全 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29095) |
| 8 | **#29173** chore(deps): fast-uri 3.1.2 → 3.1.7（**含 Security Warning**） | 依赖安全 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29173) |
| 9 | **#28902** fix(core): 阻断 `$VAR` / `${VAR}` 变量展开绕过（GHSA-wpqr-6v78-jr5g） | 完善 `detectBashSubstitution` / `detectPowerShellSubstitution`，并加固 issue dedup workflow | [🔗](https://github.com/google-gemini/gemini-cli/pull/28902) |
| 10 | **#29098** fix(cli): `useInputHistoryStore` state updater 恢复纯函数 | 修复 StrictMode 下 React 双调用导致的副作用隐患 | [🔗](https://github.com/google-gemini/gemini-cli/pull/29098) |

> 顺带关注：**#29138** 清理 README.md、**#29097** GitHub repo 解析 bug（`blog.github.io` 被错误识别）、**#29093** #29077 的 gitignore 路径缓存与子树剪枝优化，均在合并窗口。

---

## 📈 功能需求趋势

| 方向 | 典型 Issue | 信号 |
|------|-----------|------|
| **🧠 AST-aware 代码理解** | #22745, #22746 | 社区与官方都在评估 AST 工具（tilth / glyph）替代纯文本 glob 读取 |
| **🧠 Memory 系统成熟化** | #26516, #26522, #26523, #26525 | 形成一个完整的"memory quality"工作流，关乎隐私与质量 |
| **🌐 Browser Agent 鲁棒性** | #22232, #21983, #22267 | 锁定恢复、Wayland 兼容、settings 覆盖三连发 |
| **🤖 Subagent 可观测性** | #22598, #22323 | `/chat share` 暴露 subagent 轨迹、与终止状态正确性 |
| **🛡️ 路径/沙箱安全** | #26525, #28418→#28902 | shell 变量展开、NTFS SFN、symlink 一连串 |
| **🚀 新模型上线节奏** | PR #29172 | Flash 系列快速迭代，`3.8-flash` 成为默认 |
| **↔️ Antigravity 迁移** | #27325 | 用户关心既有 `commands/` 资产能否复用 |
| **📦 Prompt as Code** | #28315 | Nunjucks 结构化模板呼声高 |

---

## 💬 开发者关注点

1. **Skills / Sub-agents 默认调用频率过低**（#21968）—— 用户反映"必须显式告诉 Gemini 才用"，社区希望默认能基于描述更主动地调度能力。
2. **Shell 工具可靠性**（#25166, #29042）—— 命令完成后挂起、PID 解析异常等小 bug 反复影响日常使用，"Waiting input" 类问题尤其令人挫败。
3. **资源消耗与崩溃**（#27938 / #27976）—— 多例 7GB+ 内存 OOM 报告，长期运行的会话稳定性仍是生产化障碍。
4. **安全纵深防御** —— 今天的 PR 矩阵几乎被安全主题主导：路径边界、SFN 短名、变量展开、依赖 CVE，反映团队已进入"企业级 hardening"阶段。
5. **迁移焦虑** —— Antigravity CLI 的推出让部分重度自定义用户担心既有 commands/skills 不兼容，#27325 的快速关闭有助于稳定预期。
6. **Subagent 终止语义** —— "GOAL" / "MAX_TURNS" 状态被误标为代表性问题（#22323），暴露出子智能体评测与可调试性的短板。

---

*日报基于 GitHub Issues / Pull Requests 在 2026-09-03 过去 24 小时的更新动态生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-03** | 数据来源：[github.com/github/copilot-cli](https://github.com/github/copilot-cli)

---

## 1. 今日速览

今日 Copilot CLI 连续发布 v1.0.83-3 和 v1.0.83-2 两个版本，重点引入自定义 Agent 多模型回退机制、Claude Fable 5.1 模型支持以及 Linux 沙箱网络出站限制。社区方面，**长期会话 OOM（内存溢出）**问题依然是核心痛点——多条 Issue 报告 1.0.82 在恢复会话、长时间运行等场景下出现 V8 堆内存耗尽或 libuv 句柄泄漏；MCP 协议兼容性和 Agent Plugins 1.0 规范的发现机制也引发较多讨论。过去 24 小时无新增 PR，合入节奏趋于平稳。

---

## 2. 版本发布

### [v1.0.83-2](https://github.com/github/copilot-cli/releases/tag/v1.0.83-2)

**新增（Added）**
- 自定义 Agent 的 `model` 字段支持列出多个模型，按顺序尝试直到找到可用模型；`model-policy: required` 确保模型变更始终在该列表内
- 新增对 **Claude Fable 5.1** 的支持

**改进（Improved）**
- Linux 沙箱现将网络出站流量限制到配置的代理（proxy）范围内（说明文字被截断，预计包含更细粒度的出站规则）

### [v1.0.83-3](https://github.com/github/copilot-cli/releases/tag/v1.0.83-3)
- 常规 Bug 修复与小幅改进（公告内容被截断）

---

## 3. 社区热点 Issues

> 按评论数与点赞数综合排序，挑选最值得关注的前 10 条

| # | Issue | 关键点 | 社区反应 |
|---|---|---|---|
| 1 | [#2630](https://github.com/github/copilot-cli/issues/2630) **【已关闭】** 自定义 Agent 的 `mcp-servers` 在子 Agent / `--prompt` 模式下未连接 | 影响所有依赖 MCP 工具扩展的自定义 Agent 场景 | 9 条评论，已修复 |
| 2 | [#3709](https://github.com/github/copilot-cli/issues/3709) 允许 `/model` 在同一会话中切换多个模型（含 BYOK/本地模型） | BYOK 当前通过 `COPILOT_MODEL` 钉死单模型，本地模型在 picker 中不可见 | 7 评论，**👍29**——本月最高热度 |
| 3 | [#4664](https://github.com/github/copilot-cli/issues/4664) 恢复长会话时 JavaScript 堆内存溢出崩溃 | 进程在加载历史会话阶段就触发 OOM，无法继续工作 | 5 评论，多人复现 |
| 4 | [#4525](https://github.com/github/copilot-cli/issues/4525) 1.0.81-1 在 MCP `server/discover` 成功后仍发送旧的 `initialize`，导致 -32022 | 与 Python MCP SDK 2.0.0 双协议时代 runner 不兼容 | 5 评论，协议层兼容问题 |
| 5 | [#4224](https://github.com/github/copilot-cli/issues/4224) 子 Agent 调用的 OTel span 缺少计费属性 | 外部成本核算系统低估实际 AI 额度消耗 | 4 评论，与 #4207 关联 |
| 6 | [#4438](https://github.com/github/copilot-cli/issues/4438) `disable-model-invocation: true` 使 Skill 不可达，而非仅禁用模型调用 | `copilot skill list` 显示正常但模型无法调用 | 4 评论，**👍6** |
| 7 | [#2861](https://github.com/github/copilot-cli/issues/2861) `/compact` 在 Opus 4.6 上连续 3 次失败（收到空响应） | 手动压缩也失败，影响会话续期 | 3 评论，**👍4** |
| 8 | [#4695](https://github.com/github/copilot-cli/issues/4695) MCP OAuth 令牌在跨会话时未可靠复用，重复触发重新认证 | HTTP 型 MCP OAuth（PKCE，公网客户端）出现缓存键不一致 | 3 评论，新发 |
| 9 | [#4674](https://github.com/github/copilot-cli/issues/4674) 恢复会话时未恢复自定义 Agent（#917 的回归） | `mcp-servers` 和 `tools` 白名单都丢失 | 3 评论，回归问题 |
| 10 | [#3074](https://github.com/github/copilot-cli/issues/3074) **【已关闭】** 新增 `/effort` 命令快速切换推理强度 | 替代 `/model` 中繁琐的多步切换 | 3 评论，**👍9** |

**补充关注（高内存/稳定性类，今日集中爆发）：**

- [#4686](https://github.com/github/copilot-cli/issues/4686) Node.js OOM（37 分钟后崩溃，31,965 个 libuv 句柄泄漏，SEA 忽略 `NODE_OPTIONS`）
- [#4694](https://github.com/github/copilot-cli/issues/4694) WSL2 下 Copilot CLI 1.0.82 占用 ~31 GB RSS、~57% CPU
- [#4699](https://github.com/github/copilot-cli/issues/4699) 长期 `--resume` 会话 OOM，dump 文件污染用户 cwd

---

## 4. 重要 PR 进展

⚠️ **过去 24 小时内无新增或更新的 Pull Request**（数据源显示 0 条）。

请知悉：合入节奏近期趋于停滞，而 Issue 侧持续高频涌入（含 #2630、#3074 等多条已关闭），建议关注主干分支后续的修复 PR 是否会快速跟进，特别是与 **OOM 修复**、**Agent Plugins 1.0 兼容**、**MCP 协议双轨初始化**相关的修复方向。

---

## 5. 功能需求趋势

从过去 24 小时的 Issue 中可提炼出以下社区最关注的方向：

| 方向 | 代表性 Issue | 趋势解读 |
|---|---|---|
| **多模型 / BYOK 灵活性** | [#3709](https://github.com/github/copilot-cli/issues/3709), [#4703](https://github.com/github/copilot-cli/issues/4703) | 单一会话内跨多个 provider（含本地 LLM）调度成为最强诉求；同时希望每个自定义 Agent 独立选 provider |
| **Agent Plugins 1.0 规范适配** | [#4655](https://github.com/github/copilot-cli/issues/4655) | 新插件规范下自定义 Agent 未被发现，规范落地遇到阻力 |
| **长期会话稳定性 / 内存治理** | [#4664](https://github.com/github/copilot-cli/issues/4664), [#4686](https://github.com/github/copilot-cli/issues/4686), [#4694](https://github.com/github/copilot-cli/issues/4694), [#4699](https://github.com/github/copilot-cli/issues/4699) | "OOM" 成为本周最高频词，1.0.82 在 SEA/WSL2/长会话场景下稳定性堪忧 |
| **MCP 协议兼容性** | [#4525](https://github.com/github/copilot-cli/issues/4525), [#4695](https://github.com/github/copilot-cli/issues/4695), [#4598](https://github.com/github/copilot-cli/issues/4598), [#4697](https://github.com/github/copilot-cli/issues/4697) | 协议握手双重调用、OAuth 缓存、子进程清理、启动只连 3/18 等老问题仍待根治 |
| **会话上下文管理** | [#2861](https://github.com/github/copilot-cli/issues/2861), [#4698](https://github.com/github/copilot-cli/issues/4698), [#4665](https://github.com/github/copilot-cli/issues/4665)（已关闭） | `/compact` 空响应、Hook `sessionStart` 重复注入上下文 |
| **ACP / 非交互模式功能对等** | [#4275](https://github.com/github/copilot-cli/issues/4275), [#4700](https://github.com/github/copilot-cli/issues/4700) | 交互 CLI 拥有的 `contextTier`、`skillDirectories` 等配置在 ACP 模式丢失 |
| **推理强度快捷切换** | [#3074](https://github.com/github/copilot-cli/issues/3074)（已关闭） | `/effort` 命令被引入，呼应社区呼声 |
| **Windows / 企业环境兼容** | [#2271](https://github.com/github/copilot-cli/issues/2271), [#4683](https://github.com/github/copilot-cli/issues/4683), [#4671](https://github.com/github/copilot-cli/issues/4671)（已关闭）, [#4702](https://github.com/github/copilot-cli/issues/4702), [#4701](https://github.com/github/copilot-cli/issues/4701) | Shell 选择、PowerShell Constrained Language、TLS 代理下 OAuth 失败、路径分隔符导致指令文件重复加载 |

---

## 6. 开发者关注点

**核心痛点：**

1. **1.0.82 内存治理失控** —— 三条独立 Issue 分别在 Linux SEA（libuv 句柄泄漏）、WSL2（31 GB RSS）、`--resume` 长会话（4 GiB 堆上限崩溃）上同时复现，社区普遍怀疑 v1.0.82 升级引入了资源回收回归，且 SEA 打包忽略 `NODE_OPTIONS` 让用户无法自救。

2. **MCP 生态成熟度不足** —— 既要兼容新协议又要兼顾旧实现（#4525）、OAuth 缓存键漂移（#4695）、启动只连部分服务器（#4598）、`/clear` 不杀旧子进程（#4697）—— 四个不同症状指向同一子系统的可靠性短板。

3. **Agent Plugins 1.0 落地滞后** —— `#4655` 显示按官方规范的 `com.github.copilot/agents` 路径无法被发现，文档与运行时不一致阻碍插件生态扩散。

4. **Windows 体验碎片化** —— PowerShell ConstrainedLanguage、企业代理下的 OAuth、`\` vs `/` 路径去重、剪贴板在 WSL+tmux 失效等小问题持续积累，反映 Windows / 企业场景下仍有较多边缘用例未覆盖。

5. **BYOK 与多 Agent provider 选择受限** —— `COPILOT_PROVIDER_BASE_URL` 是进程级环境变量，无法让同一会话中两个 Agent 指向不同端点（#4703），社区呼吁引入 per-agent provider 机制。

6. **会话恢复的"半残"状态** —— 自定义 Agent、MCP servers、tools 白名单在 resume 时丢失（#4674），让 `--resume` 的实际价值大打折扣。

7. **可观测性与计费对账** —— 子 Agent 调用的 OTel span 缺计费属性（#4224），让外部成本核算系统持续低估，影响企业 FinOps 流程。

---

> 📌 **小结**：今日主线是 **"稳定性债"集中暴露**——1.0.82 在内存与长会话场景集体失火，而 v1.0.83-3 的发布节奏表明团队仍在修修补补。建议生产用户暂时锁版本至 1.0.83 系列，并关注即将到来的 OOM / MCP 兼容性修复 PR。

*报告生成时间：2026-09-03 | 数据窗口：过去 24 小时*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-09-03**

---

## 📌 今日速览

今日 Kimi Code CLI 仓库动态较少，主要以历史 Issue 的归档关闭为主。没有新版本发布和新的 Pull Request 提交，但社区反馈的三个问题均已关闭处理。其中"YOLO 模式下的命令可见性"以及"遵循 XDG Base Directory 规范"两项增强请求受到开发者关注，反映出用户对透明化执行流程和标准化配置管理的诉求。

---

## 🚀 版本发布

今日无新版本发布，无需更新内容。

---

## 🔥 社区热点 Issues

由于过去24小时内更新的 Issue 数量为 3 条，且均已关闭，以下逐一呈现：

### #1298 [CLOSED] Enhancement｜YOLO 模式下查看 Shell 执行与文件写入内容
- **作者**：Wolido | 👍 0 | 💬 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1298
- **重要性**：用户希望 YOLO 模式下能够查看完整的 Shell 命令和文件写入内容，目前长命令中间部分以 `...` 省略，存在严重错误时无法及时人工终止。该需求直击自动化代理场景下的"可观测性"痛点。
- **社区反应**：虽然点赞数为 0，但问题触及所有高阶用户的关键诉求，代表性较强。

### #1297 [CLOSED] Bug｜按 Esc 取消子代理时显示错误
- **作者**：chriswingler | 👍 1 | 💬 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1297
- **重要性**：在 Kimi Code CLI 1.16.0 版本、Windows 平台下，按 Esc 取消 subagents 会抛出 `Unhandled excepti...` 未处理异常。这属于影响日常使用体验的稳定性缺陷。
- **社区反应**：获得 1 个点赞，表明并非个例问题，是 Windows 用户高频操作的回归。

### #1294 [CLOSED] Enhancement｜遵循 XDG Base Directory 规范
- **作者**：sisrfeng | 👍 1 | 💬 0
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1294
- **重要性**：开发者请求使用 `~/.config/kimi` 替代 `~/.kimi`，遵循 XDG Base Directory 规范，避免 home 目录被大量 dotfiles 污染。这是 Linux/Unix 生态下开发者对工具整洁度的高频反馈。
- **社区反应**：获得 1 个点赞，符合开源社区主流规范要求，关闭说明维护者可能已纳入或归并处理。

---

## 🛠️ 重要 PR 进展

今日无 Pull Request 更新，该部分无内容。

---

## 📈 功能需求趋势

从今日更新的 Issue 来看，社区关注的功能方向集中在三个核心维度：

1. **执行可观测性（Observability）**
   - 代表 Issue：#1298
   - 趋势：随着 YOLO 模式等自动化执行能力增强，用户对"执行过程透明化"的需求日益凸显，希望能在出错时及时介入。

2. **跨平台稳定性（Cross-platform Stability）**
   - 代表 Issue：#1297
   - 趋势：Windows 平台下的边界场景（异常中断、子代理取消）仍是稳定性短板，需要更友好的错误处理与降级方案。

3. **生态规范遵循（Standards Compliance）**
   - 代表 Issue：#1294
   - 趋势：希望 CLI 工具遵循 XDG 等行业规范，提升与 Linux/macOS 桌面生态的兼容性。

---

## 💡 开发者关注点

综合今日 Issue 反馈，开发者社区的高频痛点可归纳为：

- **🔍 透明度不足**：长命令或自动写入操作被截断，无法审阅完整内容，增加误操作风险（#1298）
- **⚠️ 异常捕获不完善**：用户主动取消操作（如 Esc 中断）触发未处理异常，缺少用户友好的提示与恢复路径（#1297）
- **📁 配置目录不规范**：自定义路径（`~/.kimi`）偏离 XDG 标准，期待统一治理（#1294）
- **🤖 自动化场景的"安全网"诉求**：开发者追求效率的同时，希望保留"人在回路"的可控性，YOLO 模式不应剥夺可见性

---

*报告基于 GitHub 公开数据整理，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-09-03

---

## 📌 今日速览

OpenCode 今日发布 v1.18.27，核心修复了提供商超时配置默认值以及 Anthropic `thinking.blockBinding` 的灵活配置。社区方面，被讨论最热烈的 `/goal` 会话生命周期特性终于有了可运行的示例插件 PR（#46328 → 关闭 #27167），而 Plugin SDK 正在持续扩展——表单、会话列表、事件流以及编辑器键查找陆续落地，标志生态正进入"插件化主导"阶段。

---

## 🚀 版本发布

**v1.18.27**（Core / Bugfixes）

- **提供商头超时默认值改为 5 分钟**：缓解慢启动模型（如本地推理后端）首请求失败的常见问题。
- **流式 chunk 超时同样默认 5 分钟**，并支持通过 `false` 显式禁用，给长时间流式输出更大的灵活度。
- **Anthropic `thinking.blockBinding` 支持通过配置 opt-out**：用户在某些 Bedrock/代理后端可绕开该字段，避免请求失败。

> 这些都属于"配置默认值更友好、错误更可恢复"方向的稳定性修复，与上一阶段的多模型兼容工作形成连贯节奏。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 / 👍 | 为什么值得关注 |
|---|---|---|---|
| [#27167](https://github.com/anomalyco/opencode/issues/27167) | Add native session goals with /goal | 78 / 140 | 长期呼声最高的特性之一，社区已自发构造 PR（#46328），即将落地 |
| [#6231](https://github.com/anomalyco/opencode/issues/6231) | Auto-discover models from OpenAI-compatible provider endpoints | 48 / 225 | 👍 数极高，LM Studio / Ollama / llama.cpp 用户最大的痛点之一 |
| [#46729](https://github.com/anomalyco/opencode/issues/46729) | `thinking.adaptive.block_binding.prefix_mismatch_behavior` 报错 | 6 / 13 | v1.18.25 → 1.18.26 升级后 Bedrock + Claude Opus 5 全量失败，影响生产用户 |
| [#37650](https://github.com/anomalyco/opencode/issues/37650) | 工具可选元数据导致 pending permission 列表 schema 失败 | 6 / 0 | 已有 PR #46964 修复（同时取代被自动清理关闭的 #37679），是权限系统核心稳定性 |
| [#36413](https://github.com/anomalyco/opencode/issues/36413) | `opencode run` 在工具调用被自动拒绝时退出码 0 + 无输出 | 7 / 0 | 直接破坏 CI / 自动化集成，是企业用户的高优先级缺陷 |
| [#28590](https://github.com/anomalyco/opencode/issues/28590) | `writeOsc52` 在 GNU screen 下错误使用 tmux DCS 格式（已关闭） | 11 / 2 | 长期终端兼容性问题，由 #26491 系列合并后真正修复 |
| [#46868](https://github.com/anomalyco/opencode/issues/46868) | 配置 `clang-format` / `air` / `uv` 格式化器会被静默禁用 | 3 / 0 | 命名查找逻辑的回归，影响 formatter 用户 |
| [#46931](https://github.com/anomalyco/opencode/issues/46931) | Go usage dashboard 对 `glm-5.3-flash` 显示双倍费用 | 2 / 0 | 促销价模型计费错配，需关注配额准确性 |
| [#46932](https://github.com/anomalyco/opencode/issues/46932) | 添加 auth meta 后 muse spark 1.3 不可见 | 2 / 0 | 新接入模型元数据注册缺陷 |
| [#46941](https://github.com/anomalyco/opencode/issues/46941) | 自定义 OpenAI-compatible provider 通过 GET /models 自动发现 | 2 / 0 | 与 #6231 同方向，进一步降低自定义模型配置门槛 |

---

## 🛠 重要 PR 进展

| # | PR | 核心内容 |
|---|---|---|
| [#46328](https://github.com/anomalyco/opencode/pull/46328) | **feat(plugin): add goal-loop example plugin** | 关闭 #27167，提供 `/goal` + `/loop` 的最小可运行插件示例，纯插件 SDK 实现，不引入 SQLite 或自动续接 |
| [#46957](https://github.com/anomalyco/opencode/pull/46957) | **fix(core): retry failed location initialization** | 修复 Location 启动失败导致缓存永久卡死的缺陷（缺配置引用/不可读目录等场景） |
| [#46964](https://github.com/anomalyco/opencode/pull/46964) | **fix(core): drop undefined metadata values from permission requests** | 关闭 #37650（取代 #37679），清理 glob/grep 待处理权限中的 `undefined` 元数据 |
| [#46690](https://github.com/anomalyco/opencode/pull/46690) | **feat(plugin): expose session forms, session list, and global event stream** | 扩展 Plugin SDK，新增会话表单/列表与全局事件流，使 Telegram bot 等外部集成成为可能 |
| [#46962](https://github.com/anomalyco/opencode/pull/46962) | **feat(core): persist compaction model and provider state** | 压缩事件携带 `model: Model.Ref` + 可选 `providerState`，跨会话保留压缩上下文身份 |
| [#46963](https://github.com/anomalyco/opencode/pull/46963) | **refactor(cli): move update checks to TUI clients** | 将后台 server 的更新轮询下沉到 TUI 客户端，简化事件流 |
| [#46965](https://github.com/anomalyco/opencode/pull/46965) | **refactor(ai): drop responses replay tombstones** | 移除 OpenAI Responses 解析器中两个冗余 tombstone 集合，简化 #46064 / #45789 历史包袱 |
| [#46960](https://github.com/anomalyco/opencode/pull/46960) | **feat(ai): add UnsupportedOperation error for route capability mismatches** | 引入类型化错误，使消费者无需匹配错误消息文本即可区分"路由不支持" |
| [#46959](https://github.com/anomalyco/opencode/pull/46959) | **fix(core): reject GitHub Copilot login without chat entitlement** | 关闭 #46891，OAuth 成功后校验 Copilot 订阅/席位，避免"假连接" |
| [#23108](https://github.com/anomalyco/opencode/pull/23108) | **feat(opencode): add cache_point_ttl for Bedrock provider** | 关闭 #23106，支持 `5m` / `1h` 缓存点 TTL，显著降低 Bedrock 成本 |

---

## 📈 功能需求趋势

按 Issue 主题聚合，社区当前最强烈的诉求集中在以下方向：

1. **会话生命周期 / 持久化目标**（`/goal`、循环、记忆）：#27167、#35291 等多个高赞 Feature 帖指向"让 Agent 不只是单次对话"。
2. **OpenAI 兼容提供商的模型自动发现**：#6231（225 👍）、#46941，本地/自托管场景下用户不再需要手工维护模型清单。
3. **Plugin SDK 能力扩展**：#46690、#46328、#46952、#46956 表明社区正在用插件替代核心功能，编辑器键查找、表单/列表/事件流是当下最关键的扩展面。
4. **Anthropic 思维链控制精细化**：#46729 + v1.18.27 的 `thinking.blockBinding` opt-out 反映用户希望对不同后端有差异化的 reasoning 配置能力。
5. **TUI / 桌面体验打磨**：subagent 卡片动画、icon 尺寸、move session 快捷键（#46893、#46540、#35307）等小但高频的可用性细节。
6. **Bedrock 类云后端增强**：#23108 的缓存 TTL 优化，是企业降本刚需。

---

## 🧑‍💻 开发者关注点

- **Windows 平台集中爆发**：edisonzerolam 一口气提交/关闭了多条 Windows 相关 Issue（#35328–#35332、#35329），涵盖路径分隔符、终端标题恢复、`@file` 自动补全、NSIS 安装器误杀 CLI、进程误杀等——说明 Windows 用户长期被忽视，近期得到集中治理。
- **非交互模式可观测性差**：#36413 反映 `opencode run` 在工具被拒后无任何 stdout 提示，CI/Agent 编排场景缺乏机器可读信号，是开发者自动化的关键短板。
- **权限系统的边界行为不稳定**：#37650、`#46891` 等连续暴露 schema/订阅校验漏洞，PR #46964 / #46959 显示团队正在逐项收紧。
- **第三方模型元数据同步**：muse spark 1.3、glm-5.3-flash 等新模型接入与计费元数据（#46931、#46932）正在成为高频问题。
- **插件加载顺序与错误隔离**（#45367）：目录插件按文件系统顺序加载，单个 hook 异常静默吞掉后续插件——开发者需要确定的插件初始化语义。

---

*日报基于 anomalyco/opencode 仓库 2026-09-03 公开数据生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-03

> 数据来源：`github.com/badlogic/pi-mono`（仓库主体为 earendil-works/pi）
> 统计口径：过去 24 小时更新；Issues 50 条，PRs 28 条

---

## 一、今日速览

过去 24 小时 Pi 仓库没有新的版本发布，但 **Issues 与 PR 活跃度极高**，社区围绕三大方向密集讨论：

1. **AgentHarness 与可恢复运行时**正在成为新主线（#9042、#9043、#9044），配套的 `ToolPolicy` 能力策略 hook 同步进入评审；
2. **流式取消与状态一致性**是当前的工程热点——Esc 中断不可靠、RPC `abort` 不真正取消 compaction、JSONL 会话被删除后被陈旧句柄复活等多起 race；
3. **多 Provider 兼容性补丁扎堆合并**（xAI tool_choice、Gemini thought_signature、Codex SSE OOM、llama.cpp reasoning_effort、vLLM priority、OpenCode Go quota 等），反映 Pi 的"Provider 中立"路线仍在持续扩张。

---

## 二、版本发布

**无新版本发布。** 最近 24 小时内 `badlogic/pi-mono` 未发布新的 release tag，跳过本节。

---

## 三、社区热点 Issues（精选 10 条）

| # | 标题 | 评论 | 状态 | 为什么值得关注 |
|---|---|---|---|---|
| [#6996](https://github.com/earendil-works/pi/issues/6996) | Gemini 3.x 在 tool use 阶段因缺少 `thought_signature` 失败 | 8 | OPEN | 当前评论数最高的 issue；揭示了 Gemini 3.5/3.6 模型在多轮工具调用历史中签名丢失的协议层缺陷 |
| [#8845](https://github.com/earendil-works/pi/issues/8845) | 分支摘要确定性失败：`generateBranchSummary` 硬编码 `maxTokens: 2048` | 7 | OPEN | 大分支 `/tree` 摘要必坏，影响所有使用 tree 会话导航的用户 |
| [#7121](https://github.com/earendil-works/pi/issues/7121) | write 字节计数错误 / find 限制误报 / truncateLine 代理对截断 | 6 | CLOSED | 三连工具 bug 已修复，覆盖 UTF-8 字节、surrogate pair 等国际化场景 |
| [#8643](https://github.com/earendil-works/pi/issues/8643) | Bedrock 上 OpenAI 模型拒绝 `toolResult.content` 内嵌图片 | 4 | OPEN | 唯一获得 👍 的 issue；修复与回归测试已在 fork 就绪 |
| [#8928](https://github.com/earendil-works/pi/issues/8928) | 并发启动时 expired OAuth 凭据导致 ~48s "No API key found" | 3 | OPEN | 生产环境调试 3 小时才定位，作者提供了确定性复现与时序数据 |
| [#9032](https://github.com/earendil-works/pi/issues/9032) | 在 pi-tui `Editor` 上暴露 frameless 与 prompt-prefix 选项 | 3 | CLOSED | 扩展作者诉求强烈，能显著降低自定义 UI 的 hack 成本 |
| [#8820](https://github.com/earendil-works/pi/issues/8820) | openai-responses：无 tools 时省略 `tool_choice`，xAI 需发送 `tools: []` | 3 | CLOSED | 直击 xAI 压缩 400 bug，是 Provider 中立策略的关键补丁 |
| [#8920](https://github.com/earendil-works/pi/issues/8920) | RPC `abort` 在 compaction 中返回成功却不真正取消 | 2 | OPEN | 影响所有 RPC 集成方，误导性的 `success: true` 可能造成客户端逻辑误判 |
| [#8823](https://github.com/earendil-works/pi/issues/8823) | 流式期间 Esc 经常无法取消 in-flight 请求 | 2 | OPEN | 与 #9022 形成热点组合，反映 abort 链路存在系统性薄弱环节 |
| [#9036](https://github.com/earendil-works/pi/issues/9036) | openai-codex SSE 解析器把整段响应塞进单个字符串，堆 OOM | 1 | CLOSED | FATAL 级问题，已由 #9037 修复；提醒所有流式解析路径都需要上限保护 |

---

## 四、重要 PR 进展（精选 10 条）

| # | 标题 | 状态 | 说明 |
|---|---|---|---|
| [#9044](https://github.com/earendil-works/pi/pull/9044) | feat(agent): 新增初始 AgentHarness 可恢复运行时 + capability policy | CLOSED | 闭环 #9042/#9043，把 prompt/compact/abort/resume/lanes/watch 纳入统一生命周期契约 |
| [#9040](https://github.com/earendil-works/pi/pull/9040) | fix(agent): 删除后拒绝陈旧的 JSONL 会话写入 | CLOSED | 修复 #9038：`JsonlSessionRepo.delete()` 移除文件后，仍可能因已打开的 Session 句柄创建"无 v4 header"的损坏文件 |
| [#9041](https://github.com/earendil-works/pi/pull/9041) | 同上，开放评审版 | OPEN | 与 #9040 同一作者两个变体，提示该修复仍在迭代 |
| [#9037](https://github.com/earendil-works/pi/pull/9037) | fix(ai): 限定大小 + CRLF 感知的 Codex SSE 解析 | CLOSED | 修复 #9036：流式解析器此前无上界且对 `\r\n` 处理错误，存在致命 OOM |
| [#9039](https://github.com/earendil-works/pi/pull/9039) | feat(coding-agent): 新增 `PI_DISABLE_MOUSE` 环境变量 | CLOSED | 全屏模式可关闭鼠标跟踪；底层 `TuiAltScreenOptions.mouse` 已存在但调用处从未透传 |
| [#8818](https://github.com/earendil-works/pi/pull/8818) | fix(ai): Responses API 在无 tools 时省略 `tool_choice` | CLOSED | 解决 xAI 压缩 400 |
| [#8998](https://github.com/earendil-works/pi/pull/8998) | System prompt refactor | OPEN（DRAFT） | mitsuhiko 本人提交，支持 system prompt 的**局部更新**，让扩展可在 mid-conversation 注入提示而不擦除历史 |
| [#9015](https://github.com/earendil-works/pi/pull/9015) | fix(coding-agent): 为 llama.cpp provider 启用 reasoning 与 reasoning_effort | CLOSED | 跟进 llama.cpp PR #26045，让本地推理模型获得思考档位控制 |
| [#9004](https://github.com/earendil-works/pi/pull/9004) | feat(ai): 为 vLLM 增加 `vllmPriority` 兼容标志 | CLOSED | vLLM 0.28+ 的 `priority` 请求字段；用于同一节点上混合交互与批处理负载 |
| [#8997](https://github.com/earendil-works/pi/pull/8997) | fix(agent): 把代理流 EOF 但无 terminal event 暴露为错误 | CLOSED | 修复 #8996：避免 SSE 静默挂死消费者 |
| [#8627](https://github.com/earendil-works/pi/pull/8627) | cwd 敏感工具统一使用 `ctx.cwd` | CLOSED | read/write/edit/grep 等工具在扩展场景下使用真实会话 cwd，回退到创建时 cwd |

> 备注：#9040 / #9041 内容高度相似，疑似作者先开再合；社区宜关注最终合并版本。

---

## 五、功能需求趋势

通过对 50 条更新的聚类，社区关注的功能方向呈以下分布：

### 1. 多 Provider 兼容与稳定性（占比最高）
- **新模型 / 新协议适配**：Gemini 3.x thought_signature（#6996）、xAI Responses（#8820/#8818）、Bedrock OpenAI 图像（#8643）、Codex SSE（#9036/#9037）、llama.cpp reasoning（#9015）、vLLM priority（#9004）、OpenCode Go 配额（#9030/#9031）
- **Provider 输出清洗**：`<think>` 推理泄露（#9007）、unmapped thinking level 降级（#9026）
- **趋势判断**：Pi 的"Provider 中立"是核心卖点，**每接入一个 Provider 都伴随 2–5 个稳定性补丁**，已成为持续投入项

### 2. Agent 运行时可恢复性与能力边界（新兴主线）
- `AgentHarness` 统一运行时（#9042、#9044）
- `ToolPolicy` 策略 hook（#9043）
- per-tool `timeoutMs`（#9027）
- capability policy 决策审计（#9043）
- **趋势判断**：正在从"工具能跑"过渡到"工具有边界、可恢复、可审计"

### 3. 流式取消与状态一致性
- Esc 中断失败（#8823、#9022）
- RPC abort 不可靠（#8920）
- JSONL 陈旧写入（#9038/#9040/#9041）
- `/import` 静默覆盖（#8995、#8993）
- compaction 边界在 fork 时丢失（#8990）
- **趋势判断**：会话状态的"原子化"是分布式/多进程/扩展场景的硬需求

### 4. 扩展 API 友好度
- host keybinding 暴露（#8872、#4748）
- `ctx.cwd` 注入（#8627）
- TUI Editor frameless 选项（#9032）
- 系统提示局部更新（#8998，DRAFT）
- **趋势判断**：mitsuhiko 亲自下场重构，扩展作者体验是平台化的下一阶段

### 5. CLI 与包管理 UX
- `--mode` 静默吞错（#9045）
- pnpm update 失败（#8207、#9029）
- 钉版本包报告（#9008）
- Windows 非拉丁用户名（#8895）
- **趋势判断**：CLI 静默失败（silent no-op）是社区最大怨念之一

### 6. TUI / 终端体验
- 鼠标跟踪可关闭（#9039）
- 折叠已完成交互（#9020）
- musl 静态链接 fd/ripgrep（#9033）
- **趋势判断**：终端兼容矩阵（NixOS/Almac/musl）碎片化严重，工具二进制分发仍是痛点

---

## 六、开发者关注点与高频痛点

| 痛点类别 | 典型案例 | 社区反馈关键词 |
|---|---|---|
| **静默失败 / 错误信息错位** | #9045 `--mode` 静默接受、`#8928` 报错指向当前 provider 但实际是其他 provider 的过期凭据、`#9029` pnpm MRA 静默 no-op | "silent no-op"、"reported error points at the wrong credentials"、"diagnostics 缺失" |
| **Abort 不可靠** | #8823 Esc 不取消 in-flight、`#8920` RPC abort 假成功、`#9022` Esc 把队列消息弹回编辑器 | "the abort is registered but"、"hangs the consumer" |
| **Provider 协议兼容** | #6996 Gemini thought_signature、`#8820` xAI tool_choice、`#9007` <think> 泄露 | "

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**2026-09-03**

---

## 📌 今日速览

今日 Qwen Code 仓库最显著的进展集中在 **OpenTUI 渲染层迁移**（tracking issue #8662，已积累 23 条评论）与 **服务端守护进程（`qwen serve`）的安全治理**两条主线；同时，`qwen-live-host` 发布了 v0.2.0 新版本。Issues 侧频繁出现的"CI 失败自动建单"机器人产物掩盖了少量高价值人工报告，需要关注的是 `content` 字段中 XML 工具调用/`<thinking>` 标签泄漏的多条 P2 级核心 Bug。

---

## 🚀 版本发布

### live-host-v0.2.0 — Qwen Live Host v0.2.0
- 📦 配套 PR #10836 已合并：在发布 job 中先构建 `@qwen-code/sdk` 再构建 `qwen-live`，修复 `--ignore-scripts` 跳过构建导致 `tsc` 找不到模块的问题。
- 🔗 [PR #10836](https://github.com/QwenLM/qwen-code/pull/10836)

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 优先级 | 关注点 |
|---|-------|--------|--------|
| 1 | **#8662** [Migrate TUI rendering layer from ink to OpenTUI (tracking)](https://github.com/QwenLM/qwen-code/issues/8662) | P3 | **23 条评论**，社区最大热点。当前 ink 7 + React 19 渲染层存在闪烁、补丁过大（~1037 行）等问题，跟踪整次 OpenTUI 迁移。PR #10667/#10831/#10773 均与此相关。 |
| 2 | **#10860** [`qwen serve` 内置 shell guard 忽略会话审批模式](https://github.com/QwenLM/qwen-code/issues/10860) | P3 / 安全 | Web Shell 中"Full access"标签承诺与实际行为严重不符：只读 Git、非 Git 命令也被拒，且不可配置/审计/可见。 |
| 3 | **#10859** [Serve shell guard 阻断 session 目录外 git](https://github.com/QwenLM/qwen-code/issues/10859) | P3 / 安全 | 与 #10860 同一作者的姊妹单，聚焦 daemon-git-worktree-guard 的硬编码阻断行为。 |
| 4 | **#10850** [Dependency CVE audit 失败（fast-uri/qs/uuid 公告）](https://github.com/QwenLM/qwen-code/issues/10850) | **P1 / 安全** | `npm audit` 在 main 分支一次性报 4 个漏洞（1 high），需立即关注。 |
| 5 | **#10818** [Monitor pulse storm DoS 交互会话](https://github.com/QwenLM/qwen-code/issues/10818) | **P1** | 25 MB / 13,806 条 transcript 触发的脉冲风暴使 ESC 取消失效、用户输入被饿死。已 CLOSED。 |
| 6 | **#10791** [平衡的 `<thinking>` 块仍泄漏到用户可见输出](https://github.com/QwenLM/qwen-code/issues/10791) | P2 | 仅捕获未闭合标签的设计盲区，是当前 sanitizer 的核心缺陷之一。 |
| 7 | **#10692** [`tool_call` XML 工具调用泄漏为纯文本](https://github.com/QwenLM/qwen-code/issues/10692) | P2 | 回退逻辑只覆盖 `invoke` 方言，遗漏 qwen-code 系统提示自身教授的 `<tool_call>` 方言。 |
| 8 | **#10700** [孤立的工具调用闭合标签泄漏](https://github.com/QwenLM/qwen-code/issues/10700) | P2 | 模型仅发出 `</parameter></invoke>` 时的 XML 恢复失败。 |
| 9 | **#10797** [非 thinking 脚手架标签（tool-result、系统提醒）回显](https://github.com/QwenLM/qwen-code/issues/10797) | P2 | sanitizer 覆盖不到的两类内部脚手架泄漏形态。 |
| 10 | **#10834** [MCP 工具返回图片绕过 read_file 视觉预算](https://github.com/QwenLM/qwen-code/issues/10834) | P2 | MCP 图片按原始分辨率直接进入上下文，可绕过 1568px 缩放预算，存在上下文污染风险。 |

> **社区反应总结**：#8662 是真正的"明星"，讨论链最长；其余几条核心 Bug（#10791/#10692/#10700/#10797）由同一作者 `yiliang114` 串联，形成了"content 字段净化"这一系列工程问题；安全类 issue（#10860/#10859/#10850）反映 `qwen serve` 守护进程在权限模型与依赖卫生上的薄弱环节。

---

## 🛠 重要 PR 进展（Top 10）

| # | PR | 说明 |
|---|----|------|
| 1 | **[#10831](https://github.com/QwenLM/qwen-code/pull/10831)** `fix(cli): close OpenTUI submit-path gaps, restore its E2E leg` | 让 OpenTUI 渲染器的提交路径与 ink 对齐：composer 提交同时携带原文与模型内容、`@` mention 真正落地为文件内容。 |
| 2 | **[#10183](https://github.com/QwenLM/qwen-code/pull/10183)** `feat(memory): add structured on-demand recall` | 把 managed auto-memory 从扁平 body-heavy 提示改造为结构化 push/pull 召回协议：两段 ref/title 树 + 查询元数据子树 + 专用 tool。 |
| 3 | **[#10842](https://github.com/QwenLM/qwen-code/pull/10842)** `fix(release): stop one flaky test from failing a stable release` | 为稳定版本引入 workspace test 重试机制（与 nightly/preview 一致），并硬化 6 个真正阻塞发布的测试。 |
| 4 | **[#10800](https://github.com/QwenLM/qwen-code/pull/10800)** `feat(ipc): keep the peer inbox reachable, and say so when it is not` | 跨会话收件箱按 `$XDG_RUNTIME_DIR/qwen-socks/` 等候选路径依次绑定，失败时显式报错，避免抢占活会话地址。 |
| 5 | **[#10807](https://github.com/QwenLM/qwen-code/pull/10807)** `feat(dingtalk): aggregate background agent responses` | 钉钉渠道（blocked streaming）下按 background Agent 维度独立缓冲响应文本，保留旧渠道行为。 |
| 6 | **[#10756](https://github.com/QwenLM/qwen-code/pull/10756)** `ci: split lint and static checks out of the Test job` | 把 20 个确定性 lint/static 步骤从 `test` job 拆出到 `lint_and_static`，复用 `classify_pr` 路由，缩短 PR 反馈周期。 |
| 7 | **[#10080](https://github.com/QwenLM/qwen-code/pull/10080)** `fix(core): normalize tool schemas for grammar-based providers` | OpenAI-compatible 提供方保留完整工具集，仅在出站前规范化 schema，避开空对象 schema 在老 llama.cpp 上的语法坑。 |
| 8 | **[#10802](https://github.com/QwenLM/qwen-code/pull/10802)** `fix(goal): pause the Goal on every user-cancel path, and say why` | 补齐 Goal 中"部分工具已完成、部分取消"的混合批次的取消语义。 |
| 9 | **[#10761](https://github.com/QwenLM/qwen-code/pull/10761)** `feat: load custom output styles from ~/.qwen/output-styles and .qwen/output-styles` | 用户/项目级自定义 output styles：Markdown 正文 + 可选 YAML frontmatter。 |
| 10 | **[#10773](https://github.com/QwenLM/qwen-code/pull/10773)** `fix(opentui): pre-select the configured output style in the picker` | OpenTUI `/output-style` 选择器按"用户配置值"预选（与 ink 对齐），不再跟随当前会话生效值。 |

---

## 📈 功能需求趋势

从今日 50 条 Issues 中提炼，社区诉求集中在以下几个方向：

1. **TUI 现代化（最热）**：以 #8662 为首的 OpenTUI 迁移是 roadmap 上的明确方向，#10831/#10773/#10831/#10758 等 PR 都在为其铺路，目标是摆脱对 ink 7 + React 19 的重度补丁。
2. **守护进程安全与权限治理**：#10860 / #10859 揭示 `qwen serve` 的 shell guard 在审批模式、配置可见性、审计追踪上的多处缺口；#10793 进一步把权限决策路由到会话级 vote path。
3. **模型输出净化（content 字段）**：#10692 / #10700 / #10791 / #10797 形成一组工程化诉求，要求 sanitizer 覆盖 `<tool_call>` 孤立闭合、平衡 thinking 块、tool-result 回显等多种泄漏形态。
4. **MCP 生态一致性**：#10834 反映 MCP 图片预算、tool 协议与原生工具的差异需要被拉齐。
5. **内存与上下文管理**：#10183 的结构化 on-demand recall 表明用户对"显式可控、按需加载"的记忆系统有强烈偏好。
6. **CI / 发布工程**：#10756/#10842 关注测试稳定性与 PR 反馈速度；#10850 关注依赖安全。
7. **可扩展性**：自定义 output styles（#10761）、extension skills 命名空间（#10841）、自定义模型提供商（#10778）等"用户可配置面"的扩展持续扩张。

---

## 👨‍💻 开发者关注点（痛点 & 高频需求）

- **渲染层脆弱**：OpenTUI 迁移（#8662）背后是 ink 在长时间运行、复杂布局下闪烁/对齐/性能的多类症状，开发者普遍希望彻底摆脱约 1037 行的手工 patch。
- **守护进程不可观测**：`qwen serve` 的 shell guard 决策既不暴露给运维，也不能审计/配置，#10860/#10859 直接批评这是"黑盒权限"——可观测性 + 可配置性是首要呼声。
- **依赖卫生告警**：#10850 的 fast-uri/qs/uuid CVE 一次性浮现说明供应链安全需常态化进入 CI。
- **`<thinking>` 与工具调用标签泄漏**：开发者对"模型输出与渲染输出不一致"的容忍度正在降低；多 PR / Issue 联动显示团队已把它列为系统性议题而非个案。
- **CI 噪声**：大量"Main CI failed on <sha>"自动建单（#10833/#10840/#10819/#10823 等）虽已关闭，但表明 E2E 与 Qwen Code CI 仍存在 flaky 测试，#10842 直接针对此痛点。
- **MCP 协议与原生工具的对齐**：#10834 揭示图像/数据从 MCP 进入上下文时绕过既有预算，开发者期望所有工具路径共享统一的资源约束。
- **Skill / Output Style 命名空间**：当 skills 越来越多，#9942 的"隐藏 skill 命令"诉求与 #10841 的"extension-prefixed skill 命名"共同指向同一趋势——需要更强的命名空间与可发现性控制。

---

*日报基于 2026-09-03 过去 24 小时内 GitHub `QwenLM/qwen-code` 仓库数据生成。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（Codewhale）社区动态日报

**日期：2026-09-03**

> 注：原项目 `Hmbown/DeepSeek-TUI` 已演进为 `Hmbown/Codewhale`，本期日报沿用旧称并标注当前品牌。

---

## 📌 今日速览

v0.9.12 集成大浪潮持续推进，今日有 **37 个 PR** 在 24 小时内更新，其中 **PR #5826**（shell、brand、fleet、Operate mega 集成）已合并，多个里程碑切片正在收尾。Issues 端最热话题集中在 **TUI crate 重组（EPIC-005）**、**提供商中立化（#5588 已关闭）** 以及 **mega 文件拆分（#5586）** 等 0.9.12 清理工作。社区同时在密集提交新的 enhancement 提案，覆盖持续自学习、MCP 密钥隔离、Mid-turn 引导等方向。

---

## 🚀 版本发布

**过去 24 小时无新 Release。** 当前主线版本仍为 v0.9.11，v0.9.12 处于集成收尾阶段。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#5573 — v0.9.12: milestone tracker — start here (pick order)](https://github.com/Hmbown/Codewhale/issues/5573) 💬 23 评论
0.9.12 里程碑追踪总入口，由 Hmbown 维护，更新于 09-02。这是 v0.9.12 的"作战地图"，包含切片表、门禁、PR/重装/自检步骤，定义了发布节奏。所有贡献者从这里开始选单。

### 2. [#5316 — EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)](https://github.com/Hmbown/Codewhale/issues/5316) 💬 21 评论
umbrella 级史诗，由 aboimpinto 主导，聚焦 TUI crate 拆分结构。所有子 EPIC 与 FEAT 在此处收敛报告，是 0.9.12 架构重构的总指挥。

### 3. [#5588 — [v0.9.12] Provider neutrality: 18 DeepSeek-exclusive gates](https://github.com/Hmbown/Codewhale/issues/5588) ✅ 已关闭 💬 7 评论
审计了 2,281 行 279 个文件中所有 `deepseek` 字样，发现 18 个"可疑 gate"。今日已由 PR #5832 合并关闭，标志着 Codewhale 正在系统性地从 DeepSeek 专用演进为多 provider 平台。

### 4. [#5586 — Decompose the mega files: lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k)](https://github.com/Hmbown/Codewhale/issues/5586) 💬 6 评论
社区长期呼吁的 1 万行级"巨石文件"拆分清单，量化数据清晰，是 0.9.12 的清理核心目标之一。

### 5. [#5533 — [enhancement] Per-session control socket + RuntimeBackendKind::External](https://github.com/Hmbown/Codewhale/issues/5533) ✅ 已关闭 💬 5 评论
由 M-Maciej 提出，要为外部 supervisor（tmux wrapper / CI 编排）提供每会话控制面（消息/中断/重启/状态）。今日由 PR #5831 合并落地，是 0.9.12 的"可监督性"关键能力。

### 6. [#3957 — Refactor: split shared modal infrastructure and owned views](https://github.com/Hmbown/Codewhale/issues/3957) 💬 4 评论
长时间挂账的重构议题：把 `tui/views/mod.rs` 中混合的 modal 基础设施与 owned views 拆分，并按 provider 隔离凭据渲染。属于 0.9.12 清理工作流的一部分。

### 7. [#5268 — Mid-turn control (queue / send-now / Esc-keep-draft) + named waits](https://github.com/Hmbown/Codewhale/issues/5268) 💬 3 评论
解决"转向时无法优雅介入"的体验痛点：把队列/立即发送/取消保留草稿合并为统一契约，并让状态栏明示 agent 在等待什么。Agent-ready 体验的核心增强。

### 8. [#5637 — Design: scope MCP secret providers to the owning runtime](https://github.com/Hmbown/Codewhale/issues/5637) 💬 2 评论
由 h3c-hexin 提出的安全设计议题：嵌入式 host 的 MCP 密钥不应通过进程环境变量注入，应限定在拥有它的 runtime 内。涉及密钥生命周期与多线程隔离。

### 9. [#5575 — Fleet/subagent role posture has no single source of truth](https://github.com/Hmbown/Codewhale/issues/5575) 💬 2 评论
揭示了 #5562 验证器角色 bug 不是孤例：role posture 在 5 个不同模块独立定义已发生漂移，需要单一事实来源。

### 10. [#5625 — Mid-turn guidance: deliver a committed queued follow-up as a steer](https://github.com/Hmbown/Codewhale/issues/5625) 💬 2 评论
ronohara 提出"非阻塞的待定用户输入"peek 工具，目标是让 mid-turn 引导不打断 agent 运行。

---

## 🛠️ 重要 PR 进展（Top 10）

### 1. [#5862 — Codewhale 0.9.12: Fleet-only UX (workbar, startup, underwater, provider, settings, logo, hover, roles, retro)](https://github.com/Hmbown/Codewhale/pull/5862)
最新 mega 集成 PR（09-03 创建），把 10 个 0.9.12 切片合并到 `fix/0912-ux-20260902` 分支：workbar 改名（sidebar→workbar，bottom 默认）、hover 统一契约、settings 重分组、logo 一致性、roles 展示、retro 主题等。是 0.9.12 UX 主线。

### 2. [#5861 — chore(brand): serve the canonical whale on account-entry pages](https://github.com/Hmbown/Codewhale/pull/5861)
修复品牌一致性 bug：登录/注册页曾显示与其他产品不同的鲸鱼 logo，现在统一为 C-curl 品牌标记。

### 3. [#5826 — feat: Codewhale 0.9.12 shell, brand, fleet, and Operate (mega)](https://github.com/Hmbown/Codewhale/pull/5826) ✅ 已合并
0.9.12 集成波（启动卡片、品牌 trace、fleet 词汇、Operate 目标循环、DashScope 描述符）。用户感知最大改动：`codewhale` 启动变为自家启动卡片，引入⑂品牌线。

### 4. [#5858 — tui: collapse ocean_treatment into ThemeId::Underwater](https://github.com/Hmbown/Codewhale/pull/5858)
11 commit 完成"海洋主题"折叠：locale 字符串、mark 资产、深海别名、单一选择器列表、只读配置迁移、主题键统一。shell UX 工作收尾。

### 5. [#5833 — feat(memory): FEAT-019 memory capability, memory facet, and typed outcomes](https://github.com/Hmbown/Codewhale/pull/5833)
关闭 #5609。加入 MEMORY capability 位、`CommandMemoryContext` facet，TUI memory 适配器带类型化结果（search/remember/get/export/reindex/delete），`/memory` 命令族标准化。

### 6. [#5832 — fix(providers): provider neutrality gates](https://github.com/Hmbown/Codewhale/pull/5832) ✅ 已合并
关闭 #5588。补齐余额查询（DeepSeek /user/balance、OpenRouter /credits、SiliconFlow /user/info）、解除 wire protocol 上的 ghost-text 提示门禁、派发层中立化。

### 7. [#5855 — feat(plugins): computer-use bundle - screenshot, click, and type over MCP](https://github.com/Hmbown/Codewhale/pull/5855)
第一个独立的 computer-use 插件（截图/点击/键入 over MCP），9/9 服务协议测试通过，已在 macOS 实拍 1920px JPEG 截图。

### 8. [#5842 — feat(runtime-api): plugin + marketplace management over /v1/apps](https://github.com/Hmbown/Codewhale/pull/5842)
本地插件系统的 Engine 侧：通过 `/v1/apps` 提供插件与市场管理。App 侧 PR 紧随其后。

### 9. [#5840 — runtime: persist tool-call identity so restarts replay valid history](https://github.com/Hmbown/Codewhale/pull/5840) ✅ 已合并
关闭 #5823。修复 `serve --http` 在 runtime 重启后，含工具调用历史的线程以"缺失字段名"400 失败的问题——持久化 tool-call identity。

### 10. [#5854 — lane: require verified managed-worktree identity before TTL cleanup](https://github.com/Hmbown/Codewhale/pull/5854) ✅ 已合并
关闭 #5824。Lane TTL 清理现在必须先验证 path 是托管的 Git worktree 才能递归删除，避免损坏状态下被误删。

---

## 📈 功能需求趋势

从近 24 小时 Issues 与 PR 中可提炼出社区最关注的五大方向：

| 方向 | 代表议题 / PR | 关注度 |
|---|---|---|
| **多 Provider 中立化** | #5588, #5832, #5820 (Ollama 上下文预算 bug), #5443 (DEEPSEEK_YOLO 退役) | ⭐⭐⭐⭐⭐ |
| **TUI 架构重构 / 巨石文件拆分** | #5586, #3957, #3954, #5316 (EPIC-005), #4167 (JobManager/TaskManager 合并) | ⭐⭐⭐⭐⭐ |
| **Sub-agent / Fleet 多会话体验** | #5479 (agents rail), #5271 (session peek), #5268 (mid-turn control), #5269 (durable plan artifact) | ⭐⭐⭐⭐ |
| **Agent 工具面扩展（IDE/调试/浏览器/代码搜索）** | #3358 (Playwright), #3981 (debugger protocol), #3980 (AST search), #3975 (LSP rename), #3977 (notebook/archive), #5855 (computer-use) | ⭐⭐⭐⭐ |
| **记忆 / 持续自学习 / Skills** | #5833 (FEAT-019 memory), #5829 (FEAT-022 skills), #5860 (continuous self-learning) | ⭐⭐⭐ |

---

## 💡 开发者关注点

1. **Provider 兼容性是一等公民** —— 社区强烈要求"不要把 DeepSeek 写在行为路径上"。`#5588` 的 18 个 gate 已修，但 `DEEPSEEK_YOLO` 等环境变量名（#5841）也在退役，说明品牌迁移至 Codewhale 后，内部仍要保持多 provider 公平。

2. **Ollama / 本地模型是真痛点** —— `slowly247` 在 #5820 报告 32K 上下文窗口模型因默认 64K 输出预留被压到 1024 token；这类预算计算 bug 是本地 LLM 用户最常踩的坑。

3. **生产稳定性 vs 破坏性清理的权衡** —— Lane TTL（#5824 → #5854）反复出现"未验证 path 直接递归删除"问题，开发者期望更严格的"先验证身份，再操作"门禁。

4. **TUI 可监督性 / 多会话控制** —— 用户希望把会话交给外部 supervisor 管理（#5533、#5271、#5831），这对 CI、tmux wrapper、长跑任务是刚需。

5. **巨石文件影响开发体验** —— `lib.rs` 18.7k 行、`config.rs` 12.3k 行；这是社区明确点名的痛点，#5586 用数字列出，期望在 0.9.12 一次性拆分。

6. **Mid-turn 引导与人机协作契约化** —— 多个 issue（#5268、#5625、#5271）都在呼吁把"用户在 agent 运行时介入"做成一组统一可见的契约（queue / send-now / peek / approval）。

---

*数据来源：github.com/Hmbown/Codewhale（DeepSeek-TUI 演进项目） · 统计窗口：2026-09-02 → 2026-09-03 UTC*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*