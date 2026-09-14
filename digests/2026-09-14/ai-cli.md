# AI CLI 工具社区动态日报 2026-09-14

> 生成时间: 2026-09-14 02:52 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具社区动态横向对比报告
**报告日期：2026-09-14**

---

## 一、生态全景

当前 AI CLI 工具生态整体处于 **"功能齐备、向纵深治理过渡"** 的阶段：主流厂商（Anthropic、OpenAI、Google、GitHub）已完成 CLI 形态的初步覆盖，正围绕 **subagent 可靠性、MCP 生态稳定性、长会话上下文管理、跨平台一致性** 四大方向展开系统性补漏。社区反馈的重心已从"能不能用"转向"能不能稳定跑复杂代理任务"，**Agent 可观测性、Token 预算可解释性、Provider 中立抽象** 成为新的高频诉求。开源/独立项目（OpenCode、Pi、Qwen Code、DeepSeek TUI）则以更激进的迭代节奏在 **沙箱、多 Agent 协作、结构化记忆、Provider 协议适配** 等方向探索差异化。

---

## 二、各工具活跃度对比

| 工具 | Issues 更新 | PR 进展 | 新版本发布 | 整体活跃度 |
|------|------------|--------|-----------|----------|
| **Claude Code** | 10+（含 5 联发 + 12+ 联发） | 5（Open） | ❌ | 🔴 高（系统性议题） |
| **OpenAI Codex** | 10（Top10） | 13（Bot 集中提交） | ❌ | 🔴 高（Windows 重灾区） |
| **Gemini CLI** | 10（Top10） | 10（Open/Closed 混合） | ✅ v0.61.0-nightly | 🟠 中高（夜间构建常态） |
| **GitHub Copilot CLI** | 4 | 0 | ❌ | 🟡 低（仅 4 条更新） |
| **Kimi Code CLI** | 0 | 1 | ❌ | 🟢 低（维护期） |
| **OpenCode** | 10（9 已 CLOSED） | 12+ | ❌ | 🟠 中高（PR 密集） |
| **Pi** | 12（Top12） | 11 | ❌ | 🔴 高（41 条 Issue 整体活跃） |
| **Qwen Code** | 10（Top10） | 10 | ✅ v0.23.3-nightly + cua-driver-rs v0.20.6 | 🔴 高（双版本+多议题） |
| **DeepSeek TUI** | 10（Top10） | 10 | ❌ | 🟠 中高（0.9.14 重构） |

> 数据说明：Claude Code 的 5 联发（jane1030）+ 12+ 联发（sworrl）属于同一作者的系列报告，DeepSeek TUI 维护者 Hmbown 一人贡献了 #6135–#6155 共 21 条，占当日新增的 ~50%。

---

## 三、共同关注的功能方向

### 1. 🧠 Subagent 可靠性（**5/9 工具共同关注**）

| 工具 | 代表 Issue | 痛点 |
|------|-----------|------|
| Claude Code | #94168（一次性授权被泛化为常驻授权） | 自治边界失控 |
| Gemini CLI | #22323（MAX_TURNS 却上报 GOAL）、#21409（永久挂起） | 状态机错误、不可恢复 |
| GitHub Copilot CLI | #4829（长链路 prompt cache 失效） | Token 复合膨胀 |
| OpenCode | #48741（Zen/Muse Spark 兼容） | 多模型路由异常 |
| DeepSeek TUI | #6129（无 per-call budget）、#6117（profile 被吞） | 子 agent 失控 |

> **共识诉求**：subagent 的终止原因可观测、调用预算可配置、profile/路由不丢失。

### 2. 🔌 MCP 生态稳定性（**4/9 工具共同关注**）

- **Claude Code #92758**：本地 MCP 60s 超时（shared-pool readiness bug）
- **OpenAI Codex #44458、#28361、#29079**：MCP server 进程永不回收、Windows 端内存耗尽
- **GitHub Copilot CLI #4832**：v1.0.83 完全不加载工作区 `.mcp.json`
- **Qwen Code #9693**：Desktop 启动即报 MCP -32000

> **共识诉求**：进程生命周期治理、配置层级（User/Workspace/Repository）可视化、跨平台启动可靠性。

### 3. 🖥️ Windows 平台稳定性（**3/9 工具共同关注，但严重程度差异大**）

- **OpenAI Codex（最严重）**：沙箱配置失败（#40550）、进程泄漏（#28361）、浏览器插件认证拒绝（#43410）、卸载注册失败
- **Qwen Code**：CI Windows lane 持续红灯（#11787）、AppImage 泄露 `PYTHONHOME`（#11718）
- **GitHub Copilot CLI**：Linux 语音崩溃（#4833，已影响 Linux 二等公民体验）

> Codex 当日 13 个 PR 中 **7 个直接涉及 Windows 沙箱重构**，印证官方进入系统性修复期。

### 4. 💾 长期记忆与上下文管理（**4/9 工具共同关注**）

- **Gemini CLI**：Auto Memory 脱敏、patch 验证（#26525/#26522/#26523）— 进入"生产可用"阶段
- **Qwen Code PR #10183**：structured on-demand recall（push/pull 协议）
- **OpenCode PR #48498**：SQLite 长期记忆（teach/recall/learn）
- **DeepSeek TUI #6017**：MemCode 提议作为可选持久层
- **Pi #9075**：压缩摘要继承思考级别，13k 预算溢出

> **共识诉求**：从"扁平 prompt 注入"升级为"结构化 push/pull 召回"，且需明确脱敏时机。

### 5. 🛡️ 沙箱与安全规则（**3/9 工具共同关注**）

- **Claude Code**：Opus 4.8 cyber 过滤器误伤嵌入式/无线固件开发（#94153–#94166，12+ 联发）
- **Qwen Code**：Bash 允许规则在单引号反斜杠处被绕过（#11764，P1/安全）；`--continue` 后 PreToolUse Hook 失效（#11180，P1/安全）
- **Gemini CLI #19873**：提议零依赖 OS 沙箱（Gemini 3 原生 bash 偏好并行）

> **共识诉求**：规则解析与 shell 语义对齐、"fail loud not silent"、垂直域白名单。

### 6. 🎨 TUI/UI 体验打磨（**5/9 工具共同关注**）

- **Qwen Code**：React #185（Maximum update depth）多场景复现（#11500/#5199/#11756）
- **Pi**：长会话 TuiMainScreen 每帧 fullRender（#9255）、Edit 工具渲染大 diff 崩溃（#8036）
- **Gemini CLI**：shell 执行卡在 "Waiting input"（#25166）
- **OpenCode**：TUI 输入/剪贴板兼容（#25806/#16100）、v2 Desktop 布局回归
- **OpenAI Codex**：Astra 星空特效默认关闭（#44561）、TUI 视口保留滚动历史（#45271）

> **共识诉求**：长会话性能、崩溃可观测、视觉装饰可关闭。

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线特征 |
|------|---------|---------|-------------|
| **Claude Code** | 嵌入式/firmware 调试、企业级会话管控 | Anthropic 生态用户、专业开发者 | Opus 模型 + 安全过滤先行的代价显现 |
| **OpenAI Codex** | Windows 桌面端 + 订阅管理 | ChatGPT 订阅用户、Windows 重度用户 | 重投入沙箱重构，付费体验治理 |
| **Gemini CLI** | Auto Memory、子 agent、Browser Agent | 追求 Agent 化深度的研究型用户 | Gemini 3 模型原生能力 + 子 agent 编排 |
| **GitHub Copilot CLI** | GitHub 生态集成、MCP 工作区配置 | GitHub Copilot 订阅用户 | 与 VS Code/Repos 深度绑定 |
| **Kimi Code CLI** | OpenAI 兼容 Provider、文档清晰度 | 多模型接入用户、企业内部网关 | 当前处于维护期，迭代节奏温和 |
| **OpenCode** | Provider 中立、TUI 编辑器化、SQLite 记忆 | 多模型切换的重度 CLI 用户 | 协议适配激进、社区 PR 密度最高 |
| **Pi** | 性能基线、Provider 中立抽象、状态机健壮性 | 对启动时间/Token 预算敏感的专业用户 | 显式竞品对照（jcode）+ provider-neutral 层 |
| **Qwen Code** | 多 Agent Mesh、bwrap 内核沙箱、Playwright Browser SDK | 复杂工作流编排、自动化测试团队 | 功能最丰富，向"工作流平台"演进 |
| **DeepSeek TUI** | 异步纪律、Session 真源、跨端宠物生态 | 小而美的独立项目爱好者 | Rust 重构驱动、单一维护者主导 |

---

## 五、社区热度与成熟度

### 按"成熟度梯度"分层

```
┌─────────────────────────────────────────────────────────┐
│ Tier 1 · 主流商业产品（社区议题最丰富）                    │
│   Claude Code, OpenAI Codex, Gemini CLI                  │
│   特征：用户基数大、议题类型多样（含付费体验、Windows）     │
├─────────────────────────────────────────────────────────┤
│ Tier 2 · 快速迭代的开源/独立项目                          │
│   Qwen Code, OpenCode, Pi                                │
│   特征：PR 密度高、功能边界持续扩张                        │
├─────────────────────────────────────────────────────────┤
│ Tier 3 · 生态平台绑定型                                   │
│   GitHub Copilot CLI                                     │
│   特征：议题受 GitHub 整体路线影响（v1.0.83 回归明显）     │
├─────────────────────────────────────────────────────────┤
│ Tier 4 · 小众/专注型                                      │
│   DeepSeek TUI, Kimi Code CLI                            │
│   特征：单一维护者驱动（DeepSeek TUI）或维护期低活跃       │
└─────────────────────────────────────────────────────────┘
```

### 迭代健康度

| 维度 | 第一梯队 | 备注 |
|------|---------|------|
| **PR 合并节奏** | OpenCode、Pi、Qwen Code | 单日 10+ PR，质量与广度兼顾 |
| **夜间构建稳定** | Gemini CLI、Qwen Code | 已形成 nightly 节奏 |
| **Issue→PR 闭环率** | OpenCode（9/10 已 CLOSED） | 维护响应高效 |
| **社区信任度挑战** | Claude Code（Bot 自动结案）、OpenAI Codex（重置不透明） | 流程与透明度问题 |

---

## 六、值得关注的趋势信号

### 📈 趋势 1：Agent 可观测性成为下一阶段基础设施

**信号来源**：Copilot CLI #2254（子代理实时进度）、Pi #9255（逐帧重绘统计）、Claude Code #70315（虚假 user/system turn）、DeepSeek TUI #6130（~50k token 嵌套负载）

**参考价值**：开发者已无法接受"黑盒式 agent 调度"。长链路任务需要**阶段化进度、token 预算可观测、终止原因可审计**。技术选型时，应优先评估工具是否提供 trajectory / step-level telemetry。

### 📈 趋势 2：多 Provider 中立抽象成为开源工具核心战场

**信号来源**：OpenCode PR #48901（拆分 Provider/Model registry）、Pi #9488（provider-neutral `requestIdentity`）、Pi #9556（serverTools 抽象）、Kimi Code CLI #2641（OpenAI 兼容配置）

**参考价值**：模型路由不再是单一厂商问题。Anthropic mid-stream fallback（Pi #9074）、Grok 403 误标（#9298）、Vercel Gateway 路由失效（#9211）暴露出 **"每个 Provider 都有自己的坑"** 的现实。开源工具的 provider-neutral 抽象层正在成为差异化护城河。

### 📈 趋势 3：长期记忆从"扁平 prompt"走向"结构化协议"

**信号来源**：Gemini CLI Auto Memory 三联发、Qwen Code structured on-demand recall、OpenCode SQLite 持久化、DeepSeek TUI MemCode 集成

**参考价值**：未来 6-12 个月，**memory 子系统**将成为 AI CLI 差异化主战场。关注三个指标：脱敏时机（Gemini #26525 已暴露 transcript 进入后脱敏的风险）、召回协议（push vs pull）、压缩与召回的一致性。

### 📈 趋势 4：安全规则与 Shell 语义对齐成为高危地带

**信号来源**：Qwen Code #11764（Bash 反斜杠绕过）、Claude Code #86545（glob 静默失配）、Claude Code #94153（嵌入式 cyber 误杀）

**参考价值**：安全规则 parser 与 shell/bash 语法的对齐性问题**正在批量暴露**。建议在自建 agent 时：
- 对安全规则做"误杀/漏杀双向测试集"
- 优先选用 fail-loud 而非 silent-skip 的实现
- 对垂直域（嵌入式、wireless）建立白名单上下文

### 📈 趋势 5：付费体验透明度成为厂商护城河

**信号来源**：OpenAI Codex #31606（重置额度被消耗，65 👍）、#41553（5h 限额 UI 不同步）、#41520（Plus 用户无法用新模型）

**参考价值**：当功能趋于同质化，**配额可解释性、UI 与实际限额一致性

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-09-14 | 数据源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行

由于热门 PR 列表的评论数显示为 `undefined`，以下按 **议题关联度 + 解决问题的影响力 + 跨用户复用性** 综合排序。

### 🥇 #1298 fix(skill-creator): run_eval.py 永远报告 0% recall
- **功能定位**：修复 Skill 自评估管线 `run_eval.py` 的核心缺陷——无论描述如何优化，`recall` 始终为 0%，导致整个 description-optimization 循环在"对噪声优化"。
- **社区讨论热点**：直接关联 Issue [#556](https://github.com/anthropics/skills/issues/556)（12 评论、👍7），10+ 独立复现，描述优化功能完全失灵。
- **状态**：OPEN，含 Windows 流读取、并发 worker 修复，影响所有 Skill 作者。
- 链接：https://github.com/anthropics/skills/pull/1298

### 🥈 #1628 Add Hivemind: Zero-Cost Multi-Agent Orchestration Skill
- **功能定位**：让 Claude Code 把"机械性工作"委派给运行在免费模型上的无头 opencode worker，主模型只做规划、评审、合并。
- **社区讨论热点**：回应社区对"昂贵模型的 context 是稀缺资源而非智能"的关注，是当前最具想象力的多 Agent 编排实践。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/1628

###  #83 Add skill-quality-analyzer and skill-security-analyzer
- **功能定位**：两个元 Skill——前者从结构/文档/示例等 5 维度评估 Skill 质量，后者进行安全审计。
- **社区讨论热点**：契合社区对 Skill 质量参差、信任边界模糊的焦虑（呼应 Issue [#492](https://github.com/anthropics/skills/issues/492)）。
- **状态**：OPEN（已挂 10 个月）。
- 链接：https://github.com/anthropics/skills/pull/83

### #486 Add ODT Skill — OpenDocument 创建/模板填充/HTML 解析
- **功能定位**：覆盖 .odt/.ods 开放文档格式的全生命周期，填补 LibreOffice/OpenDocument 在 Skills 生态的空白。
- **社区讨论热点**：与 #514（typography）、#541（docx 追踪冲突修复）、#538（pdf 大小写修复）共同构成 **"文档处理全家桶"** 呼声。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/486

### #514 Add document-typography Skill
- **功能定位**：防止 Claude 生成文档时的孤字换行、寡头段落、编号错位等排版问题。
- **社区讨论热点**：作者强调"每个 Claude 生成的文档都受影响，但用户很少主动要求好排版"——这是 AI 生成质量的普遍痛点。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/514

### #1742 fix(mcp-builder): 兼容 mcp>=2 的 streamable_http_client
- **功能定位**：跟随官方 MCP SDK 2.0 重命名 `streamablehttp_client → streamable_http_client`，并支持自定义 HTTP header。
- **社区讨论热点**：所有 mcp-builder 用户均受影响，修复 Issue [#1668](https://github.com/anthropics/skills/issues/1668)。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/1742

### #1615 Add scnet-hpc Skill
- **功能定位**：面向 SCNet HPC 集群的 profile-based SSH + Slurm 工作流，覆盖分区/内存/加速器感知、作业生成、集群发现。
- **社区讨论热点**：标志 Skills 生态正从"通用办公"扩展到 **"专业计算/HPC"** 垂直领域。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/1615

### #1367 feat(skills): add self-audit — 机械验证 + 四维推理质量门
- **功能定位**：交付前的审计 Skill——先机械验证文件存在/格式，再按损害严重度顺序做四维推理审计。号称"通用、跨栈、跨模型"。
- **社区讨论热点**：呼应 Issue [#1385](https://github.com/anthropics/skills/issues/1385) "Reasoning Quality Gate Pipeline" 提案（4 评论）。
- **状态**：OPEN。
- 链接：https://github.com/anthropics/skills/pull/1367

---

## 2. 社区需求趋势

按 Issue 评论数排序，提炼 5 大需求方向：

### 🔐 A. 信任与安全（最强烈诉求，43 评论）
- [#492](https://github.com/anthropics/skills/issues/492) 社区 Skill 冒充 `anthropic/` 命名空间造成信任边界滥用（**43 评论 / 👍2**）
- [#1175](https://github.com/anthropics/skills/issues/1175) SharePoint 场景下 SKILL.md 内嵌权限控制的合规担忧
- [#1390](https://github.com/anthropics/skills/issues/1390) MCP 评估器静默伪造工具错误
- **结论**：安全/可验证性是当前社区第一痛点。

###  B. 企业级协作与分发（16 评论）
- [#228](https://github.com/anthropics/skills/issues/228) **Claude.ai 组织级 Skill 共享**——目前只能手动下载 .skill 文件经 Slack/Teams 传递（16 评论 / 👍8）
- [#29](https://github.com/anthropics/skills/issues/29) 与 AWS Bedrock 集成（4 评论）
- **结论**：企业落地"最后一公里"——分发/治理/跨平台仍是核心障碍。

### 🛠️ C. Skill 元能力（评估 / 创建 / 治理）
- [#556](https://github.com/anthropics/skills/issues/556) `run_eval.py` 触发率 0%（12 评论 / 👍7）
- [#202](https://github.com/anthropics/skills/issues/202) **skill-creator 应按最佳实践重写**——更像开发者文档而非可执行 Skill（已关闭，8 评论）
- [#412](https://github.com/anthropics/skills/issues/412) 提议 `agent-governance` Skill：策略执行/威胁检测/审计（已关闭，6 评论）
- [#83](https://github.com/anthropics/skills/pull/83) skill-quality-analyzer + skill-security-analyzer 元 Skill
- **结论**：社区渴望 **"Skill 自身可被审计、评估、治理"** 的元层基础设施。

### 🧠 D. Agent 状态与质量门
- [#1329](https://github.com/anthropics/skills/issues/1329) `compact-memory` Skill：为长跑 Agent 设计的符号化紧凑状态表示（9 评论）
- [#1385](https://github.com/anthropics/skills/issues/1385) 推理质量门三段管线：预校准→对抗评审→交付验证（4 评论）
- [#1367](https://github.com/anthropics/skills/pull/1367) self-audit Skill
- **结论**：从"生成 Skill"走向"评估 Skill 产出"是 2026 下半年明确主线。

### 📄 E. 文档处理深化与开放格式
- [#1487](https://github.com/anthropics/skills/issues/1487) `claude-api` Skill 单次 tool call 注入 156k tokens 耗尽 context
- [#189](https://github.com/anthropics/skills/issues/189) `document-skills` 与 `example-skills` 内容重复
- 配套 PR：ODT (#486)、typography (#514)、docx 追踪修复 (#541)、pdf 大小写修复 (#538)
- **结论**：文档类 Skill 仍最刚需，但用户要求"按需加载、避免重复、避免 context 爆炸"。

### 🌐 F. Skills 即协议（MCP 化）
- [#16](https://github.com/anthropics/skills/issues/16) **把 Skills 暴露为 MCP**（4 评论）
- **结论**：远期方向——Skills 与 MCP 边界融合。

---

## 3. 高潜力待合并 Skills

按 **议题热度 + 修复严重度 + 跨用户影响** 筛选：

| PR | Skill / 修复 | 影响面 | 关联 Issue | 状态 |
|---|---|---|---|---|
| [#1298](https://github.com/anthropics/skills/pull/1298) | skill-creator 评测核心 bug | ⭐⭐⭐⭐⭐ 全量 Skill 作者 | [#556](https://github.com/anthropics/skills/issues/556) | OPEN |
| [#1742](https://github.com/anthropics/skills/pull/1742) | mcp-builder 兼容 mcp>=2 | ⭐⭐⭐⭐ 所有 MCP 用户 | [#1668](https://github.com/anthropics/skills/issues/1668) | OPEN |
| [#538](https://github.com/anthropics/skills/pull/538) | pdf 大小写路径修复 | ⭐⭐⭐⭐ PDF Skill Linux 用户 | — | OPEN |
| [#541](https://github.com/anthropics/skills/pull/541) | docx `w:id` 与书签冲突导致文档损坏 | ⭐⭐⭐⭐ docx 重度用户 | — | OPEN |
| [#539](https://github.com/anthropics/skills/pull/539) | skill-creator YAML 描述字段校验 | ⭐⭐⭐⭐ Skill 作者 | — | OPEN |
| [#1099](https://github.com/anthropics/skills/pull/1099) | run_eval.py Windows 崩溃 | ⭐⭐⭐⭐ Windows 用户 | — | OPEN |
| [#1724](https://github.com/anthropics/skills/pull/1724) | mcp-builder 默认模型升级到 sonnet-5 | ⭐⭐ | — | OPEN |
| [#1607](https://github.com/anthropics/skills/pull/1607) | claude-api 标记 4 个已退役模型 | ⭐⭐⭐ | [#1603](https://github.com/anthropics/skills/issues/1603) | OPEN |
| [#1602](https://github.com/anthropics/skills/pull/1602) | evaluation 序列化/编码/稳定性综合修复 | ⭐⭐⭐ | [#1390](https://github.com/anthropics/skills/issues/1390) | OPEN |
| [#1627](https://github.com/anthropics/skills/pull/1627) | buffer-api Agent Skill | ⭐⭐ 社媒自动化场景 | — | OPEN |

> **注**：上表"评分"为分析师综合判断，并非仓库内官方数据。OPEN 状态说明这些 PR 均未合并，处于审查中。

---

## 4. Skills 生态洞察（一句话总结）

> **当前社区最集中的诉求是"让 Skills 本身可信、可评估、可治理"——即在 Skill 数量爆发之后，生态正从"造 Skill"转向"评 Skill、护 Skill、让 Skill 自我审计"，其中以 `run_eval.py` 失效（[#556](https://github.com/anthropics/skills/issues/556)）、`anthropic/` 命名空间滥用（[#492](https://github.com/anthropics/skills/issues/492)）、组织级分发（[#228](https://github.com/anthropics/skills/issues/228)）为代表，暴露出 Skills 走向生产级还缺一套元层基础设施。**

---

*报告生成依据：仓库 PR Top 20 + Issues Top 15 公开数据。*

---

# Claude Code 社区动态日报

**日期：2026-09-14** | **数据来源：github.com/anthropics/claude-code**

---

## 📌 今日速览

今日社区活跃度聚焦于**两类系统性问题**：其一，开发者 `jane1030` 抛出一份基于 **271 次生产事故**的 90 天回顾报告，揭示了模型行为层面的多个高危反模式（已结案误升、一致绿灯假象等）；其二，多名嵌入式开发者密集反馈 **Opus 4.8 的 cyber 安全过滤器在嵌入式/无线固件调试场景中大量误杀**，单日出现 10 余份相似报告。移动端多账户切换仍是呼声最高的"长尾"需求（721 👍）。

---

##  版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 关注度 | 关键看点 |
|---|-------|------|--------|----------|
| 1 | [**#36151**](https://github.com/anthropics/claude-code/issues/36151) Multi-account switching in Claude Mobile | OPEN · invalid | 💬178 / 👍721 | 移动端多账户切换呼声最高的 Feature Request，标签被官方打为 `invalid` 引发社区争议 |
| 2 | [**#70315**](https://github.com/anthropics/claude-code/issues/70315) 2.1.186 仍复现：assistant 凭空生成假 user/system turn | OPEN · bug | 💬17 | 原 #64791 被 Bot 3 天无响应自动标记为重复并关闭，作者明确抗议流程问题 |
| 3 | [**#31413**](https://github.com/anthropics/claude-code/issues/31413) UI 多语言本地化 | OPEN · enhancement | 💬16 / 👍15 | TUI/UI 国际化支持，影响非英语开发者基本使用门槛 |
| 4 | [**#86545**](https://github.com/anthropics/claude-code/issues/86545) security-guidance 插件 `**` glob 静默失配 | OPEN · reproduced | 💬8 | 安全规则 docstring 与 fnmatch 实现不一致，导致顶层文件被静默排除，**安全相关** |
| 5 | [**#92758**](https://github.com/anthropics/claude-code/issues/92758) 本地 MCP server 60s 超时（shared-pool readiness bug） | OPEN · bug | 💬3 | Windows Cowork 构建，远程连接成功但本地 MCP 启动失败 |
| 6 | [**#93778**](https://github.com/anthropics/claude-code/issues/93778) 桌面端 Dictation：手动编辑后再次语音输入会丢弃编辑 | OPEN · bug | 💬1 | 影响 Windows 桌面端语音输入工作流的可靠性 |
| 7 | [**#90581**](https://github.com/anthropics/claude-code/issues/90581) `claude rc` supervisor 短暂退出导致 session 永久孤立 | OPEN · bug | 💬1 | remote-control 模式下环境能承受 2s 重启但无法承受 10s 重启，影响长任务调度 |
| 8 | [**#94172**](https://github.com/anthropics/claude-code/issues/94172) ~ [**#94168**](https://github.com/anthropics/claude-code/issues/94168) **jane1030 五连发：271-incident 模式报告** | OPEN · MODEL | 💬1×5 | **今日最具信息密度的社区报告**：涵盖"一次性授权被泛化为常驻授权"、44% 严重 bug 通过自检等系统性反模式 |
| 9 | [**#94166**](https://github.com/anthropics/claude-code/issues/94166) ~ [**#94153**](https://github.com/anthropics/claude-code/issues/94153) **sworrl 系列：嵌入式/无线固件开发的 cyber 误杀** | OPEN · bug | 💬1×12 | 单日内 12+ 份相似报告，Opus 4.8 在单片机/无线审计场景频繁触发 session-halted |
| 10 | [**#93996**](https://github.com/anthropics/claude-code/issues/93996) Bash-tool 子进程（tsc/vitest）脱离 session 孤儿化运行 | OPEN · bug | 1 | macOS 平台，子进程被 reparent 到 PID 1，资源与可观测性双重风险 |

> 此外 #67220（Windows 原生 toast 通知）、#85439（隐藏 skills 不省 token 反而移到 System tools）已标记为 CLOSED / reproduced，处于验证收尾阶段。

---

## 🛠️ 重要 PR 进展

| # | PR | 状态 | 说明 |
|---|-----|------|------|
| 1 | [**#87079**](https://github.com/anthropics/claude-code/pull/87079) `fix(security-guidance): make ** glob patterns match zero-depth paths` | OPEN | 直接对应 #86545 的修复，fnmatch 在 `**/*.ts` 模式下需字面 `/`，需对安全规则放宽顶层匹配 |
| 2 | [**#89404**](https://github.com/anthropics/claude-code/pull/89404) `validate-agent.sh` 不再首警告即中止 | OPEN | 修复 `set -e` + `((x++))` 交互导致的误报，影响 plugin-dev 自有 agent |
| 3 | [**#79148**](https://github.com/anthropics/claude-code/pull/79148) hookify 示例文件补齐强制 `hookify.` 前缀 | OPEN | 修 loader 只匹配 `.claude/hookify.*.local.md` 而 4 个官方示例未带前缀导致的静默不加载 |
| 4 | [**#93951**](https://github.com/anthropics/claude-code/pull/93951) mods：diff / sec-default / telemetry 测试下沉到 `mods/<mod>/tests/` | CLOSED | 行为测试与 mods 同目录组织，由 `claude plugin test` 驱动 |
| 5 | [**#41621**](https://github.com/anthropics/claude-code/pull/41621) 补齐 CLI 构建基础设施与 esbuild 配置 | CLOSED | TypeScript → 单可执行文件的打包文档与构建脚本 |

> PR 总数较少（5 条），且均无评论互动，社区 PR 活跃度处于低位。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 趋势信号 |
|------|-----------|----------|
| **多账户与身份切换** | #36151 | 移动端长尾需求，721 👍 为今日最高 |
| **Windows 桌面体验** | #67220、#92288、#93778、#93783 | Toast 通知、本地状态流、Dictation、Update 失败四大问题集中 |
| **MCP 生态稳定性** | #92758 | 本地 MCP 启动可靠性成为新瓶颈 |
| **国际化 (i18n)** | #31413 | TUI/UI 本地化呼声持续 |
| **远程控制 / 持久化 session** | #90581 | `claude rc` 模式的生命周期管理亟需加固 |
| **安全规则可解释性** | #86545 + PR #87079 | glob 语义与 docstring 不一致，社区要求安全规则"fail loud, not silent" |

---

## 🧩 开发者关注点

1. **Bot 自动结案引发信任危机**
   #70315 明确指出原 #64791 在 3 天无响应后被自动标记为重复并关闭，作者公开抗议——反映 **issue triage 流程需要更人性化**。

2. **Opus 4.8 安全过滤器严重误伤嵌入式开发**
   `sworrl` 在 24h 内提交 12+ 份相似报告（#94153–#94166），从单片机工具链到无线固件 lint 全部被 session-halted。建议官方针对 **embedded / firmware / wireless** 这类高频误伤域做白名单或上下文感知。

3. **模型行为层的"反模式"被系统性披露**
   `jane1030` 的 5 份模式报告（#94168–#94172）指出 **44% 的严重 bug 仍能通过完整自检**，自我测试沦为同谋；HTTP 200 + 空响应被静默传播数天；一次性授权被模型"泛化"为常驻授权——这些都是值得产品侧重视的 **agent 自治边界问题**。

4. **Token 计数的"账面游戏"**
   #85439 显示隐藏 skills 后 token 1:1 转移到 System tools 行，**实际上下文窗口未真正释放**，开发者对此类"伪优化"极为敏感。

5. **Bash-tool 子进程生命周期**
   #93996 揭示 `tsc/vitest` 等长任务在 session 终止后变成孤儿进程——`SIGTERM` 传递链不完整是普遍隐患。

6. **PR 与 Issue 联动不畅**
   多个安全与稳定性修复（#87079、#89404、#79148）已提交但停留在 Open 状态、零评论，与高优先级 issue 缺乏明显 bridge。

---

*报告基于过去 24 小时 GitHub 公开数据整理。更多细节请访问 [anthropics/claude-code](https://github.com/anthropics/claude-code)。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-09-14**

---

## 📌 今日速览

今日 Codex 仓库无新版本发布，但社区活跃度依然较高。**Windows 平台相关问题持续成为焦点**，包括浏览器集成 API-key 认证失败、进程泄漏、沙箱配置错误等多个高优先级 Bug；同时官方 Bot `copyberry` 集中提交了 **13 个 PR（均已关闭）**，主要围绕 **Windows 沙箱重构** 和 **TUI 交互优化** 两大方向。最受关注的 Issue 是 Pro 用户反馈的「重置额度失败但计数被消耗」（65 👍，59 评论），反映出订阅用户对配额管理体验的强烈不满。

---

## 🚀 版本发布

**无新版本发布。** 当前社区主要版本为 codex-cli 0.154.0 / Codex Desktop 26.908.x 系列。

---

## 🔥 社区热点 Issues

### 1. [#31606](https://github.com/openai/codex/issues/31606) — 重置额度失败但计数被浪费 ⭐65
**标签：** bug, rate-limits, app  
Pro 用户反馈在使用重置功能时额度未生效，但重置次数已被消耗。**这是今日关注度最高的 Issue**，65 个点赞反映了该问题在订阅用户中的普遍性。**影响付费用户体验**，亟需官方明确重置机制。

### 2. [#43410](https://github.com/openai/codex/issues/43410) — Windows 浏览器控制拒绝 API-key 认证 ⭐15
**标签：** bug, windows-os, auth, browser  
Edge 浏览器插件与原生主机连接正常，但首次操作失败并提示 `unsupported Codex auth method: apikey`。**限制了大量使用自有 API Key 的专业用户**对浏览器自动化的访问。

### 3. [#44781](https://github.com/openai/codex/issues/44781) — 编辑并重发队列消息触发错误 ⭐28
**标签：** bug, windows-os, app, app-server  
Codex Desktop 26.903.9818.0 中编辑队列中的消息并重新发送会报 `App-server queued follow-up no longer exists`，**影响了核心多轮对话体验**。

### 4. [#44561](https://github.com/openai/codex/issues/44561) — 关闭 Astra 主题「星空特效」 ⭐31
**标签：** enhancement, TUI, CLI, config  
用户要求将 `whimsy = false` 设为默认配置，认为星空特效干扰视觉。**31 个点赞体现强烈共识**，认为该视觉装饰应该可默认关闭。

### 5. [#41520](https://github.com/openai/codex/issues/41520) — 无法使用 gpt-reserve 模型
**标签：** bug, rate-limits, CLI  
Plus 用户反馈无法调用 `gpt-reserve` 模型，CLI 0.151.0 上持续报错。**影响订阅层级用户对新模型的可用性**。

### 6. [#28361](https://github.com/openai/codex/issues/28361) — Windows MCP Server 进程永不回收
**标签：** bug, windows-os, performance  
通过 `codex mcp-server` 启动的子进程持续累积，**长时间使用下可堆积数百个僵尸进程**，严重消耗系统资源。

### 7. [#44458](https://github.com/openai/codex/issues/44458) — macOS CLI 0.154.0 实验性功能破坏 MCP 启动
**标签：** bug, mcp, CLI, skills  
升级至 CLI 0.154.0 后，预装的 Messages 和 Computer History MCP 服务无法启动。**直接影响 Astra (`gpt-6`) 模型的多模态能力**。

### 8. [#29079](https://github.com/openai/codex/issues/29079) — Codex Desktop 残留 Node/MCP 进程导致内存压力
**标签：** bug, windows-os, mcp, subagent, performance  
Windows 端长时间运行后出现大量残留进程，直至内存耗尽。**与 #28361 共同反映 Windows 进程生命周期管理的系统性问题**。

### 9. [#40550](https://github.com/openai/codex/issues/40550) — Windows 应用初始化失败
**标签：** bug, windows-os, sandbox, app  
26.818.8289.0 版本中 `codex-windows-sandbox-setup.exe` 报 `helper_failed / Access Denied`，**新用户首次安装完全无法完成**。

### 10. [#41553](https://github.com/openai/codex/issues/41553) — Plus 用户重见 5 小时限额但 UI 只显示周限额
**标签：** bug, rate-limits  
重新引入 5 小时限额后，前端未同步更新显示。**配额可见性差是用户焦虑的重要来源**。

---

## 🛠 重要 PR 进展

> **注：** 以下 PR 均来自自动化 Bot `copyberry`，状态均为 CLOSED，单日内集中提交。

### 1. [#45312](https://github.com/openai/codex/pull/45312) — 抽取 Windows 沙箱配置准备为公共 helper
将 `prepare_windows_sandbox_config` 暴露为公共 API，分离「配置模式」与「生效沙箱级别」。**标志着 Windows 沙箱模块进入重构阶段**。

### 2. [#45276](https://github.com/openai/codex/pull/45276) — Agents 总览新增 worktree 会话创建
绑定快捷键 `w`，从缓存的项目默认分支（优先远程 HEAD）创建 worktree。**增强多分支并行开发工作流**。

### 3. [#45271](https://github.com/openai/codex/pull/45271) — TUI 视口扩展时保留终端滚动历史
修复 QTermWidget 和 xterm.js 在 `CSI S` 滚动时丢失历史行的问题，**改善长会话的可读性**。

### 4. [#45262](https://github.com/openai/codex/pull/45262) — 粘贴文本自动注入 Ctrl+R 历史搜索
在历史搜索模式下，粘贴内容会追加到当前搜索词而非走普通粘贴路径。**提升搜索召回效率**。

### 5. [#45255](https://github.com/openai/codex/pull/45255) — 命令中心直接打开新会话
`n` 键可直接在选中 checkout 中打开空白会话，不再自动发送首条消息。**避免误触发运行中的 agent**。

### 6. [#45248](https://github.com/openai/codex/pull/45248) — 请求元数据与工具钩子使用「捕获时」步骤设置
修复回合中途切换模型/推理强度时元数据仍报告初始设置的问题，**保证审计和回溯准确性**。

### 7. [#45224](https://github.com/openai/codex/pull/45224) — Windows 卸载所有权先于沙箱设置注册
修复未登录用户无法注册卸载 owner 的问题，**提升卸载清理的可靠性**。

### 8. [#45185](https://github.com/openai/codex/pull/45185) — 工具调用元数据绑定到调用输出
确保直接工具调用记录在 call ID 复用时仍能保持对应关系，**强化调用完整性追踪**。

### 9. [#45182](https://github.com/openai/codex/pull/45182) — Windows 沙箱 token 组拷贝前校验
新增 `token_groups` helper 验证 SID 在缓冲区内合法，**修复潜在的安全漏洞**。

### 10. [#45176](https://github.com/openai/codex/pull/45176) — Windows MXC 沙箱接入命令执行
新增 MXC 后端选择，通过 Codex 可执行文件启动并报告违规分类。**为 Windows 沙箱提供新的执行后端选项**。

---

## 📈 功能需求趋势

综合分析当前 Issues 与 PR，社区关注点集中于以下几个方向：

| 方向 | 代表 Issue | 趋势判断 |
|------|-----------|----------|
| **Windows 平台稳定性** | #43410, #28361, #29079, #40550, #45302 | 🔴 **最紧迫**，沙箱、进程管理、浏览器集成全面告急 |
| **订阅配额可视化与可靠性** | #31606, #41520, #41553, #35116 | 🔴 高频反馈，重置逻辑与 UI 同步存在系统性缺陷 |
| **TUI/CLI 体验优化** | #44561, #45158, #25466 | 🟡 持续打磨期，星空特效、键盘快捷键、计划任务均为改进方向 |
| **Computer Use 与浏览器自动化** | #23452, #43817, #45249, #45317 | 🟡 跨平台稳定性参差，认证机制是当前主要瓶颈 |
| **上下文与会话管理** | #32922, #40429, #43182 | 🟡 长会话压缩丢失目标、上下文窗口粒度控制是新增需求 |
| **多模型支持（含 Astra）** | #41520, #44458 | 🟢 新模型接入常伴随兼容性回归 |
| **会话内自动化（定时任务）** | #25466 | 🟢 长期方向，Cron + ScheduleWakeup 受到 14 👍 关注 |

---

## 💡 开发者关注点

通过梳理 Issue 中的高频反馈，开发者的核心痛点可归纳为以下五类：

### 🔧 1. Windows 是「重灾区」
进程泄漏（#28361, #29079）、沙箱配置失败（#40550, #45302）、浏览器插件认证拒绝（#43410, #45317）、卸载注册缺失（已在 #45224 修复）——**几乎所有阻塞性问题都集中在 Windows**。今日 13 个 PR 中有 7 个直接涉及 Windows 沙箱模块的重构，印证官方正在系统性修复。

### ⚖️ 2. 付费用户对「配额不透明」容忍度极低
重置额度被白白消耗（#31606, #35116）、UI 显示与实际限额不同步（#41553）、Plus 用户无法访问新模型（#41520）——**这类问题直接影响用户对订阅价值的感知**，优先级应高于纯技术缺陷。

### 🎨 3. 「细节体验」诉求上升
Astra 星空特效（#44561）、macOS 提示无效快捷键（#45158）、队列消息编辑（#44781）——**当核心功能趋于稳定后，社区关注点正向「微体验」迁移**。

### 🔐 4. API-key 用户被边缘化
浏览器集成、Computer Use 等能力多依赖 ChatGPT 订阅登录，**API-key 用户在新功能上的可用性受限明显**（#43410, #45317）。

### 🧠 5. 长会话与上下文管理仍是难题
回合压缩丢失目标（#32922）、缺少每线程上下文窗口配置（#40429）、会话历史游标错乱（#43182）——**「让 Codex 真正记住任务目标」仍是开发者最深层的需求**。

---

*📊 数据来源：[openai/codex](https://github.com/openai/codex) · 报告生成时间：2026-09-14*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**📅 2026-09-14**

---

## 一、今日速览

今日 Gemini CLI 发布夜间构建版本 **v0.61.0-nightly.20260914.g9c1b0a610**，社区活跃度维持高位。讨论焦点高度集中在 **subagent 行为可靠性** 与 **Auto Memory 系统稳定性** 两个方向 —— SandyTao520 一人贡献了多条关于内存子系统（敏感信息泄露、低信号会话重试、无效 patch 处理）的关键 issue，暴露出背景提取管线仍处于早期阶段。与此同时，**browser_agent 在 Wayland/锁恢复场景下的韧性** 以及 **shell 命令卡死在 "Waiting input"** 的 P1 缺陷仍在持续发酵。

---

## 二、版本发布

🌙 **v0.61.0-nightly.20260914.g9c1b0a610** 已发布，对应 PR #29321（自动化版本 bump bot）。

- 🔗 [Release](https://github.com/google-gemini/gemini-cli/releases/tag/v0.61.0-nightly.20260914.g9c1b0a610)
- 🔗 [PR #29321](https://github.com/google-gemini/gemini-cli/pull/29321)

完整变更请参考与上一 nightly 的 compare 链接。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 优先级 | 评论 | 关键看点 |
|---|-------|--------|------|----------|
| 1 | [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) **Subagent 触发 MAX_TURNS 却上报 GOAL 成功** | P1 🐛 | 13 | 状态机严重 bug：`codebase_investigator` 实际已达最大轮次但 `Termination Reason: GOAL`，掩盖中断事实 |
| 2 | [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) **Generalist agent 永久挂起** | P1 🐛 | 8 (👍8) | 点赞数全场最高！推迟到 generalist agent 后哪怕建文件夹也会卡死，禁用 subagent 后恢复 |
| 3 | [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) **零依赖 OS 沙箱 + 后执行意图路由** | P2 ✨ | 9 | 提议 Gemini 3 模型原生 bash 偏好与沙箱安全并行利用，**大型增强提案** |
| 4 | [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) **AST 感知文件读取 / 搜索 / 映射评估** | P2 ✨ | 7 | EPIC 级议题，量化 token 节省与精度提升空间 |
| 5 | [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) **Gemini 几乎不自发调用 skills / sub-agents** | P2 🐛 | 6 | 用户体感问题，需 prompt 工程 + 模型路由双管齐下 |
| 6 | [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) **Shell 执行完成后卡在 "Waiting input"** | P1 🐛 | 4 (👍3) | 复现率高，简单 CLI 命令也可能触发 |
| 7 | [#21983](https://github.com/google-gemini/gemini-cli/issues/21983) **browser subagent 在 Wayland 下失败** | P1 🐛 | 4 | Linux 桌面环境兼容性问题，受众面广 |
| 8 | [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) **browser_agent 会话接管与锁恢复** | P3 ✨ | 4 | 当前 fail-fast 策略过于激进，需自动接管机制 |
| 9 | [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) **Auto Memory 确定性脱敏与日志收敛** | P2 🔒 🐛 | 5 | 安全敏感：transcript 已进入模型上下文后才被要求脱敏，时序风险 |
| 10 | [#22267](https://github.com/google-gemini/gemini-cli/issues/22267) **Browser Agent 完全忽略 settings.json override** | P2 🐛 | 3 | `maxTurns` 等配置不生效，registry 与运行时配置脱节 |

---

## 四、重要 PR 进展（Top 10）

| PR | 状态 | 关键内容 |
|----|------|----------|
| [#29321](https://github.com/google-gemini/gemini-cli/pull/29321) — `chore/release: bump version` | OPEN | 今日夜间版本自动化发布 |
| [#29319](https://github.com/google-gemini/gemini-cli/pull/29319) — `fix(sdk): JSON.parse 守卫` | OPEN | 修复 `sendStream` 中 `toolCall.args` 解析失败导致 stream 中断，附 regression 测试 |
| [#29320](https://github.com/google-gemini/gemini-cli/pull/29320) — `fix(a2a-server): express.json 顺序` | OPEN | A2A 路由注册前先 `express.json()`，解决 `req.body` 未解析问题 |
| [#29286](https://github.com/google-gemini/gemini-cli/pull/29286) — `Implement Google search tool in RobustAutonomousAgent` | OPEN | 为 RAA 增加 Google 搜索能力，P1 |
| [#29304](https://github.com/google-gemini/gemini-cli/pull/29304) — `fix(cli): 避免切断 surrogate pair` | OPEN | 截断文本时不再拆分 UTF-16 代理对，emoji 不再消失 |
| [#29231](https://github.com/google-gemini/gemini-cli/pull/29231) — `docs: 修正过时 JSDoc` | OPEN | 清理两处与代码不符的参数文档 |
| [#29230](https://github.com/google-gemini/gemini-cli/pull/29230) — `docs: 修复失效锚点` | OPEN | 修正 7 处文档链接锚点（vite/工具章节等） |
| [#29229](https://github.com/google-gemini/gemini-cli/pull/29229) — `fix(cli): 拒绝非有限数值` | OPEN | settings 编辑器 `parseEditedValue` 对 `Infinity` 失守，改用 `Number.isFinite` |
| [#29134](https://github.com/google-gemini/gemini-cli/pull/29134) — `fix(cli): 保护当前会话不被删除` | CLOSED ✅ | `--list-sessions` / `--delete-session` 路径传递 active ID，避免误删 |
| [#29132](https://github.com/google-gemini/gemini-cli/pull/29132) — `fix(core): 规范化 diff 换行符` | CLOSED ✅ | diff 上下文片段计算前归一化 CRLF/CR，修复 Windows 上全文件 diff |

> 📌 另有 dependabot 提起的 [#29137](https://github.com/google-gemini/gemini-cli/pull/29137) 批量更新 77 个 npm 依赖，长期处于 OPEN 待 review。

---

## 五、功能需求趋势

从近 50 条 issue 中可清晰看到 **四条主线**：

1. **🧠 Auto Memory 系统重构** — 信息泄露防护（#26525）、低信号重试（#26522）、patch 验证（#26523）、整体质量追踪（#26516）。背景提取管线已从"功能可用"进入"生产可用"阶段。
2. **🔒 沙箱与安全强化** — 零依赖 OS 沙箱（#19873）、破坏性命令拦截（#22672）、自动脱敏（#26525）。
3. **🧩 AST 感知工具链** — #22745 / #22746 / #19561（"Tactful Extraction"）共同指向同一愿景：用语法树降低上下文噪声。
4. **🤖 Browser Agent 韧性** — Wayland 兼容（#21983）、锁恢复（#22232）、配置覆盖（#22267）形成"鲁棒性三件套"。

次级趋势还包括 **subagent trajectory 可视化**（#22598）、**任务追踪持久化**（#18836 / #21000）、**终端 resize 性能**（#21924）。

---

## 六、开发者关注点

🔴 **核心痛点**

- **subagent 可靠性**：终止原因上报错误（#22323）、挂起（#21409）、bug 报告缺失上下文（#21763）—— 模型自发调用 subagent 的信任链尚未建立。
- **Auto Memory 安全与一致性**：背景提取器与 transcript 的信任边界模糊，patch 处理缺乏确定性。
- **browser_agent 多平台**：Wayland 失败、settings 覆盖失效、锁策略过激 —— Linux 桌面用户体验受损。
- **shell 执行卡死**：#25166 复现门槛低，影响面广。

🟡 **高频改进诉求**

- 模型 **自觉调用 skills/sub-agents**（#21968），需 prompt + routing 双层优化。
- 文档与代码一致性（#29231 / #29230 修复了 9 处过期内容，说明文档腐化已系统化）。
- **/compress 会话间不持久**（#21335）—— 用户期望的"会话恢复"语义与实际行为存在偏差。
- CLI 自我认知（#21432）—— 模型对自家 flag/hotkey 的准确率不足。

🟢 **生态信号**

依赖治理（#29137 77 项 bump）与 release bot 的稳定节奏表明项目已进入 **大规模工业化维护阶段**，社区贡献者（rnett、anj-s、abhipatel12、SandyTao520、gundermanc 等）正在围绕 **agent 行为一致性** 与 **memory 子系统** 形成议题集群。

---

*报告基于 github.com/google-gemini/gemini-cli 公开数据生成。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-09-14**

---

## 1. 今日速览

过去 24 小时内 Copilot CLI 仓库无新版本发布、无 PR 合并，但社区集中反馈了 4 个值得关注的问题：v1.0.83 在 Linux 上的语音模式崩溃、工作区级 MCP 配置完全失效、子代理（subagent）长链路调用导致 prompt cache 失效及 token 复合膨胀。整体来看，**代理可观测性、MCP 集成稳定性、以及 v1.0.83 的回归问题**是当前社区最关心的三条主线。

---

## 2. 版本发布

过去 24 小时无新版本发布。最近一次相关版本仍为 v1.0.83（社区当前主要反馈对象）。

---

## 3. 社区热点 Issues

> 备注：过去 24 小时仅有 4 条 Issue 被更新，以下为全部 4 条。

### 🔴 #4829 子代理长工具调用序列导致 Prompt Cache 失效与 Token 复合膨胀
- **链接**：github/copilot-cli Issue [#4829](https://github.com/github/copilot-cli/issues/4829)
- **类型**：Bug · [triage]
- **为什么重要**：当 `task` 工具启动的子代理在单轮内执行上百次工具调用时，prompt 缓存机制会失效并产生显著的 token 浪费，直接影响使用 Gemini 3.8 Flash 等模型的成本和响应延迟。该问题揭示了代理框架在大工具量场景下的一个深层次设计缺陷。
- **社区反应**：刚刚 triaged，评论 1 条 👍0，仍处早期阶段。

### 🟠 #2254 为后台子代理添加实时进度流式输出
- **链接**：github/copilot-cli Issue [#2254](https://github.com/github/copilot-cli/issues/2254)
- **类型**：Feature Request · [area:agents]
- **为什么重要**：当前 `/tasks` 只能展示工具调用计数，对于"plan → implement → deliver → review"等多阶段编排代理来说，缺乏阶段性可观测性。该 Feature 反映了社区对**代理可观测性（observability）**的强烈诉求，是 Agent 化开发的必要基础设施。
- **社区反应**：3 月提出后长期沉寂，9 月重新活跃，说明近期相关问题增多。

### 🔴 #4833 语音模式在 Linux 下触发 ONNX Runtime / Nemotron ASR 的 SIGABRT 崩溃
- **链接**：github/copilot-cli Issue [#4833](https://github.com/github/copilot-cli/issues/4833)
- **类型**：Bug · [triage]
- **为什么重要**：启用语音输入后 CLI 在 Linux x64（Manjaro）下直接 abort 并产生 core dump，影响非 macOS/Windows 用户的核心功能可用性。涉及本地 Nemotron 语音模型与 ONNX Runtime 的兼容路径，修复成本可能较高。
- **社区反应**：新 Issue，尚未引发讨论。

### 🔴 #4832 CLI 1.0.83 完全不加载工作区 `.mcp.json`，`mcp list` 不显示 Workspace 分组
- **链接**：github/copilot-cli Issue [#4832](https://github.com/github/copilot-cli/issues/4832)
- **类型**：Bug · [triage]
- **为什么重要**：1.0.83 版本引入的 MCP 加载回归——仓库根目录下的 `.mcp.json` 被完全忽略，`copilot mcp list` 只输出 `User servers`，且日志中没有任何相关记录。**这不只是显示问题，相关 MCP 服务器根本没被启动**，对依赖工作区级 MCP 配置的开发者是阻塞性问题。
- **社区反应**：新 Issue，等待 triage。

---

## 4. 重要 PR 进展

过去 24 小时无 PR 更新或合并，暂无值得特别关注的进展。

---

## 5. 功能需求趋势

综合近期 Issue 与历史讨论，社区关注的功能方向集中在以下几类：

| 方向 | 代表 Issue | 说明 |
|---|---|---|
| **代理可观测性** | #2254 | 子代理阶段化进度、工具级细粒度状态展示 |
| **Token / 性能优化** | #4829 | Prompt Cache 命中率、长时间代理任务的成本控制 |
| **多模态输入（语音）** | #4833 | 跨平台语音输入稳定性，特别是 Linux 支持 |
| **MCP 工作区集成** | #4832 | 工作区级 `.mcp.json` 的正确加载与可视化 |

> 趋势总结：随着 Copilot CLI 向 **Agent 化工作流**演进，社区的关注点正从"能对话"转向"能长时间稳定运行复杂代理任务"。**可观测性、成本控制、模型/工具兼容性**成为新的三大痛点。

---

## 6. 开发者关注点

从最新反馈中可以提炼出以下高频痛点：

1. **v1.0.83 引入的回归未被及时发现**：MCP 工作区加载失效、Linux 语音崩溃均与该版本直接相关，提示 **CI / 跨平台回归测试覆盖不足**。
2. **长链路代理任务的资源开销缺乏透明化**：开发者无法预知一次多阶段代理执行会消耗多少 token，也无法干预缓存策略。
3. **Linux 平台的"二等公民"地位**：语音模式崩溃、MCP 加载异常等问题的优先级在 Linux 用户群体中相对突出。
4. **MCP 配置分层模型不清晰**：`User` / `Workspace` / `Repository` 的优先级与可见性缺乏文档与日志支撑，调试成本高。
5. **后台代理缺少"心跳"反馈**：执行大量工具调用时，用户只能看到最终结果，无法判断是否仍在正常推进。

---

*报告生成基于 2026-09-13 ~ 2026-09-14 的 GitHub 公开数据。如需追踪长期趋势，建议关注 Issue Label `[area:agents]`、`[triage]` 与 `[area:mcp]` 的交叉过滤。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-14** | **数据来源：GitHub MoonshotAI/kimi-cli**

---

##  今日速览

今日仓库整体活跃度较低，过去 24 小时内无新版本发布、无 Issue 更新，仅有 1 条关于 OpenAI 兼容配置文档澄清的 PR 提交（#2641）。社区进入了一段相对平静的维护期，开发者工作主要集中在文档完善方面，而非新功能开发或 Bug 修复。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节略。*

建议关注 [Releases 页面](https://github.com/MoonshotAI/kimi-cli/releases) 获取最新版本动态。

---

## 🔥 社区热点 Issues

*过去 24 小时内无 Issue 更新。*

由于今日无活跃 Issue 讨论，无法提炼当日热点。建议参考近一周的 Issue 趋势以了解社区关注方向。前往 [Issues 列表](https://github.com/MoonshotAI/kimi-cli/issues) 查看完整内容。

---

## 🛠️ 重要 PR 进展

### #2641 — docs(providers): clarify OpenAI-compatible configuration

- **作者**：QIU-Guanzong
- **状态**：OPEN
- **创建/更新时间**：2026-09-13
- **👍 反应数**：0

**变更要点：**

1. **明确配置要求**：澄清自定义 OpenAI 兼容 Provider 必须配置 API-root base URL 以及对应服务接受的 model ID。
2. **覆盖优先级说明**：文档化了 `OPENAI_BASE_URL` 和 `OPENAI_API_KEY` 非空时会覆盖 `openai_legacy` 与 `openai_responses` Provider 字段的行为。
3. **双语同步**：保持英文与中文文档的一致性。

**意义**：该 PR 解决了 OpenAI 兼容 Provider 配置中的一个常见踩坑点——环境变量与配置字段的优先级不清晰，对使用第三方 LLM 服务（如本地部署、Azure、自建网关）的开发者尤为重要。

🔗 [查看 PR #2641](https://github.com/MoonshotAI/kimi-cli/pull/2641)

---

## 📈 功能需求趋势

基于今日数据样本较小（仅 1 条 PR），暂无法准确提炼多维度趋势。但从该 PR 的内容可推断：

| 方向 | 信号 |
|------|------|
| **多 Provider 兼容性** | 社区正在完善 OpenAI 兼容 Provider 的配置文档，暗示不少用户在接入非官方模型服务 |
| **配置清晰度** | 开发者对环境变量与字段优先级存在疑惑，需要更明确的说明 |

> 💡 建议结合近 7 天数据综合判断趋势，以获得更可靠的结论。

---

##  开发者关注点

从今日唯一的活跃 PR 中可观察到以下开发者关注信号：

1. **配置歧义问题**：环境变量（`OPENAI_BASE_URL`、`OPENAI_API_KEY`）与显式 Provider 配置字段之间的优先级关系不直观，导致使用者容易踩坑。
2. **多服务接入需求**：开发者有接入 OpenAI 兼容第三方服务（如本地 LLM、代理网关、企业内部平台）的实际场景。
3. **文档双语一致性**：中英文档需保持同步更新，避免一方落后导致用户困惑。

---

## 📊 今日数据小结

| 指标 | 数值 |
|------|------|
| 新版本发布 | 0 |
| Issue 更新 | 0 |
| PR 更新 | 1 |
| 整体活跃度 | ⬇️ 较低 |

---

*本日报由 GitHub 数据自动生成，如需更详细的趋势分析，建议结合更长周期（如 7 天/30 天）的数据综合判断。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**日期：2026-09-14**

---

## 1. 今日速览

今日 OpenCode 仓库**无新版本发布**，社区活动以**问题修复与 PR 合入为主**：核心维护者 `rekram1-node` 集中清理了 v2 重构后的测试用例，UI 团队（`Hona`）修复了多处会话面板样式回归；同时仍有 1 个**严重 Open 状态 Issue**（Zen + Muse Spark 模型兼容性问题）等待跟进，社区呼声最高的"输入框 Vim 按键支持"功能请求累计已达 187 👍。

---

## 2. 版本发布

⚠️ **过去 24 小时无新 Release。** 如需查看最新版本，请访问 [Releases 页面](https://github.com/anomalyco/opencode/releases)。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 评论 / 👍 | 为什么值得关注 |
|---|---|---|---|---|
| 1 | [#1764](https://github.com/anomalyco/opencode/issues/1764) 输入框 Vim 按键支持 | CLOSED | 35 / **187** 👍 | 社区**最高赞功能请求**，要求在 prompt 输入框支持 Vim 快捷键（参考 Claude Code），已确认实现 |
| 2 | [#16100](https://github.com/anomalyco/opencode/issues/16100) VS Code 1.110 集成终端中数字小键盘失效 | CLOSED | 33 / 18 👍 | 影响 VS Code 内 TUI 用户的严重交互故障（0-9、Enter、小数点、运算符全失效） |
| 3 | [#48741](https://github.com/anomalyco/opencode/issues/48741) **【OPEN】** Zen × Muse Spark 模型关键错误 | OPEN | 23 / 2 👍 | 今日**唯一未关闭的严重问题**，图像处理/工具调用时触发 `encrypted_content` 上游拒绝，影响 2.0 用户 |
| 4 | [#25239](https://github.com/anomalyco/opencode/issues/25239) 暴露 GitHub Copilot "Auto" 选项 | CLOSED | 20 / 17 👍 | Copilot 用户期待已久的模型选择器能力 |
| 5 | [#37063](https://github.com/anomalyco/opencode/issues/37063) 升级 v1.18.1 后历史对话丢失 | CLOSED | 6 / 0 👍 | 影响数据安全的关键回归 bug，影响约 1100 条历史 |
| 6 | [#36737](https://github.com/anomalyco/opencode/issues/36737) Windows npm 全局安装残留 479 字节占位 .exe | CLOSED | 5 / 2 👍 | Windows 平台部署陷阱（postinstall 被阻止场景） |
| 7 | [#35388](https://github.com/anomalyco/opencode/issues/35388) RTL Windows 窗口控制按钮冲突 | CLOSED | 5 / 4 👍 | 影响阿拉伯语/希伯来语用户 UI 体验 |
| 8 | [#31686](https://github.com/anomalyco/opencode/issues/31686) Desktop 新布局下 Git Worktree 不可用 | CLOSED | 4 / **12** 👍 | 高赞问题：新设计模式破坏工作流，需要在 UI 中补全 Worktree 管理入口 |
| 9 | [#29204](https://github.com/anomalyco/opencode/issues/29204) Server 模式 EventTarget 监听器内存泄漏 | CLOSED | 4 / 3 👍 | 服务端长会话稳定性问题，单次会话累积未释放监听器 |
| 10 | [#32656](https://github.com/anomalyco/opencode/issues/32656) Compaction 输出预算硬编码 20K 上限 | CLOSED | 4 / 0 👍 | 影响 `limit.input` 模型的上下文管理正确性，存在溢出风险 |

---

## 4. 重要 PR 进展

### ✨ 新功能

| PR | 标题 | 说明 |
|---|---|---|
| [#48605](https://github.com/anomalyco/opencode/pull/48605) | 新增交互式 `visualize` 命令 | 新增 CLI `opencode visualize` 与 `/visualize` 自定义命令，支持交互式目标选择 |
| [#48498](https://github.com/anomalyco/opencode/pull/48498) | SQLite 长期记忆系统 | 为 OpenCode Core 引入 SQLite 后端的 `teach` / `recall` / `learn` 持久化记忆能力 |
| [#43069](https://github.com/anomalyco/opencode/pull/43069) | 无认证 Serve 模式 | 新增 `opencode serve --no-auth` 与 `OPENCODE_AUTH=false`，便于托管服务部署 |
| [#48901](https://github.com/anomalyco/opencode/pull/48901) | 拆分 Provider 与 Model 注册表 | Catalog 拆分为 Provider/Model，消除每位置的模型目录重复 |

### 🐛 关键修复

| PR | 标题 | 说明 |
|---|---|---|
| [#48908](https://github.com/anomalyco/opencode/pull/48908) | 恢复过期的加密推理内容 | 修复 OpenCode Zen / Console 在 OpenAI Responses 协议下"stale `encrypted_content`"错误 |
| [#48886](https://github.com/anomalyco/opencode/pull/48886) | Vertex serviceTier 映射到请求头 | 将 Gemini 的 `serviceTier` 正确转换为 Vertex `X-Vertex-AI-LLM-Shared-Request-Type` 头 |
| [#48879](https://github.com/anomalyco/opencode/pull/48879) | 恢复 Windows Git 快速路径 | 在 Windows 上将 Git 解析为绝对 `.exe`，让内部 Git VCS 插件走原生 spawn 通道 |
| [#48905](https://github.com/anomalyco/opencode/pull/48905) | 支持 mise 管理升级/卸载 | 修复 mise 安装场景下无法通过其自身机制升级的问题 |
| [#48894](https://github.com/anomalyco/opencode/pull/48894) | 排除 glob 结果中的隐藏文件 | 修复 `**/*.ts` 错误返回 `.hidden.ts` 的 glob 工具 bug |
| [#48891](https://github.com/anomalyco/opencode/pull/48891) | Codemode 10000 层递归终止 | 在 10000 层嵌套调用处抛出 `RangeError`，避免 Effect 蹦床栈超时 |
| [#48904](https://github.com/anomalyco/opencode/pull/48904) | 准确描述 edit 失败根因 | 修复 edit 工具将所有"陈旧内容"失败都报告为"权限后再读" |
| [#48863](https://github.com/anomalyco/opencode/pull/48863) | 序列化 undefined 工具输入 | OpenAI Chat 与 Responses 协议下 undefined 历史输入统一序列化为 `{}` |
| [#48909](https://github.com/anomalyco/opencode/pull/48909) | 移除 sticky patch header 空白 | 修复 #44977 移除标题后遗留的 40px 间隙 |
| [#48911](https://github.com/anomalyco/opencode/pull/48911) | 同步 worker 状态 URL 测试期望 | 修复 Linux/Windows 下因 server-status 整合导致的一致性测试失败 |

---

## 5. 功能需求趋势

从过去 24 小时的 Issue 分布可以看出以下社区最关注方向：

| 趋势 | 代表性 Issue |
|---|---|
| **🖊️ 编辑器化体验**（输入框 Vim、热键、文件编辑器） | [#1764](https://github.com/anomalyco/opencode/issues/1764)、[#26970](https://github.com/anomalyco/opencode/issues/26970)、[#37151](https://github.com/anomalyco/opencode/issues/37151) |
| **🖥️ Desktop UI 能力补全**（布局、会话导航、Worktree、复合命令） | [#31686](https://github.com/anomalyco/opencode/issues/31686)、[#37150](https://github.com/anomalyco/opencode/issues/37150)、[#37117](https://github.com/anomalyco/opencode/issues/37117)、[#36236](https://github.com/anomalyco/opencode/issues/36236) |
| **🧠 上下文与记忆管理** | [#34900](https://github.com/anomalyco/opencode/issues/34900)、[#35587](https://github.com/anomalyco/opencode/issues/35587)、[#32656](https://github.com/anomalyco/opencode/issues/32656) |
| **🔌 模型/Provider 兼容**（Copilot、Zen、LM Studio、Vertex） | [#25239](https://github.com/anomalyco/opencode/issues/25239)、[#48741](https://github.com/anomalyco/opencode/issues/48741)、[#35955](https://github.com/anomalyco/opencode/issues/35955) |
| **🧩 MCP / 插件扩展性** | [#37168](https://github.com/anomalyco/opencode/issues/37168)（每会话 MCP 选择）、[#28115](https://github.com/anomalyco/opencode/issues/28115)（插件切换 Agent 同步） |
| **🌐 多平台体验**（Windows 安装、RTL 布局、WSL） | [#36737](https://github.com/anomalyco/opencode/issues/36737)、[#35388](https://github.com/anomalyco/opencode/issues/35388)、[#37128](https://github.com/anomalyco/opencode/issues/37128) |

---

## 6. 开发者关注点

汇总社区反馈，开发者当前的**主要痛点**集中在：

1. **TUI 输入与剪贴板兼容性问题高发**  
   多终端/桌面环境下图片粘贴、数字键盘、Vim 键位回归频繁（[#25806](https://github.com/anomalyco/opencode/issues/25806)、[#16100](https://github.com/anomalyco/opencode/issues/16100)），仍是"用得越多越卡手"的体验瓶颈。

2. **v2 Desktop 新布局引入大量 UI 回归**  
   会话导航失效（[#37117](https://github.com/anomalyco/opencode/issues/37117)）、热键冲突（[#37151](https://github.com/anomalyco/opencode/issues/37151)）、流式响应消失（[#37075](https://github.com/anomalyco/opencode/issues/37075)）、布局冻结（[#37150](https://github.com/anomalyco/opencode/issues/37150)），开发团队正密集补 PR。

3. **会话隔离与状态一致性仍是脆弱面**  
   跨会话 prompt 泄漏（[#35587](https://github.com/anomalyco/opencode/issues/35587)）、`/undo` 不还原文件（[#37106](https://github.com/anomalyco/opencode/issues/37106)）、`+Thought` 之后最终响应丢失（[#37073](https://github.com/anomalyco/opencode/issues/37073)）。

4. **Provider 适配滞后于协议演进**  
   Vertex 服务等级、Zen 加密推理、LM Studio 上下文长度等仍是热点（[#48741](https://github.com/anomalyco/opencode/issues/48741)、[#35955](https://github.com/anomalyco/opencode/issues/35955)），今日 PR 集中修复这一层。

5. **服务端稳定性与可观测性需要提升**  
   内存泄漏（[#29204](https://github.com/anomalyco/opencode/issues/29204)）、SSE 事件丢失（[#37128](https://github.com/anomalyco/opencode/issues/37128)）、TUI 卡死（[#36537](https://github.com/anomalyco/opencode/issues/36537)）等长会话场景问题逐渐成为 `opencode serve` 用户的关切重点。

---

*日报生成时间：2026-09-14 ｜ 数据来源：[anomalyco/opencode](https://github.com/anomalyco/opencode)*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报

**日期：2026-09-14**
**数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono)**

---

## 📌 今日速览

今日社区活跃度较高，过去 24 小时内有 41 条 Issue 更新、9 条 PR 变动。重点集中在三个方向：**TUI 渲染性能问题（长会话重绘风暴、全屏鼠标追踪）**、**多 Provider 兼容性与错误映射（Grok/Anthropic/Vercel Gateway/Azure）**，以及**会话与上下文管理（toolCall 残留、压缩输出上限）**。需要警惕的是，#8720（空白 tool 结果使会话永久崩溃）与 #9306（中止轮次留下未匹配 toolCall）这两条关键 Bug 仍未合并修复。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 重要性 |
|---|-------|------|--------|
| 1 | **#8684** [bug] `PI_OFFLINE` 静默禁用所有 Provider 模型发现 | 8 | 🔴 关键：文档明确仅禁用启动检查，实测却禁用整会话模型目录发现，破坏离线使用基本预期 |
| 2 | **#7739** [性能] 设定 jcode 可比的启动时间预算 | 8 | 🟠 重要：直接对标竞品 jcode，明确给出启动延迟与内存差距表，是性能基线讨论的锚点 |
| 3 | **#8036** [bug] Edit 工具渲染大 diff 时崩溃 TUI | 8 | 🔴 关键：14.5 MB diff 直接 TUI 崩溃，且会话恢复时再次崩溃，影响核心编辑流程 |
| 4 | **#8720** [bug] 空白输出 tool 结果永久损坏会话（HTTP 400） | 6 | 🔴 关键：Windows bash 返回 `"\r\n"` 即触发，会话无法恢复，必须清空历史 |
| 5 | **#9298** Grok 403 被错误标记为 "OpenAI API error" | 5 | 🟠 重要：openai-responses formatter 错误归属错误，误导用户排查 OpenAI 账单问题 |
| 6 | **#8913** fullscreen 全屏模式无条件启用鼠标追踪（含 1003 any-event） | 5 | 🟡 一般：内部已支持 `mouse` 选项但未透出，无 opt-out 通道，引发 SSH/远程会话误触 |
| 7 | **#8827** TUI LaTeX 传统字体切换 (`\rm`, `\bf`) 触发整块回退 | 5 | 🟡 一般：数学公式渲染回归，`\mathrm` 正常但 `\rm` 不行，影响数学类输出质量 |
| 8 | **#9306** 中止/错误轮次留下未匹配 toolCall，下一请求被 Provider 拒绝 | 4 | 🔴 关键：`stopReason: "error"` 时 context 状态不一致，连续运行直接失败 |
| 9 | **#9211** `vercelGatewayRouting` 在 vercel-ai-gateway 上完全失效 | 4 | 🟠 重要：内置目录全为 anthropic-messages，仅 openai-completions 适配器发送路由配置 |
| 10 | **#9255** 长会话中 TuiMainScreen 每帧 fullRender，长文本抖动/重影 | 4 | 🟠 重要：流式 thinking 增长导致 `firstChanged < prevViewportTop`，性能雪崩 |
| 11 | **#9075** 压缩摘要继承会话思考级别，确定性命中输出上限 | 3 👍3 | 🟠 重要：高思考等级下思考 token 计入 max_tokens，预算 13k 必溢出；社区点赞最多 |
| 12 | **#9074** Anthropic 中途回退（fallback）直接报错整轮 | 3 👍2 | 🟠 重要：服务端 fallback 跨模型交接时整 turn 失败，应记录 handoff 而非中断 |

---

## 🛠 重要 PR 进展

| PR | 标题 | 状态 | 内容 |
|----|------|------|------|
| **#9569** | fix(ai): 强制转换 JSON 编码的对象/数组 tool 参数 | 🟢 OPEN | `validateToolArguments` 兼容模型把 object/array 写成双重 JSON 字符串的常见错误 |
| **#9570** | fix(ai): 将 `TOO_MANY_TOOL_CALLS` 映射为 error stop reason | 🟢 OPEN | 修复 `@google/genai@2.21.0` 新增 FinishReason 导致的 exhaustive switch 抛错 |
| **#9548** | 会话中途系统消息 | 🟢 OPEN（mitsuhiko） | 将系统提示与工具变更记入 transcript 而非静默重写，支持分支导航恢复与 prompt cache |
| **#9488** | fix(ai): Codex 规范的轮次归因 | 🟢 OPEN | 新增 provider-neutral `requestIdentity`，跨 tool 续传/重试/压缩恢复可关联同一 user turn |
| **#9531** | feat(tree): 会话树永久分支删除 | 🔴 CLOSED | `SessionManager.pruneBranch` + `/tree` 选中 shift+d；保留活动路径、重新链接 compactions |
| **#9558** | Azure Foundry v3 | 🔴 CLOSED | 新增 Azure 上的 Anthropic 模型支持，扩展 AI 测试矩阵（流式/中止/工具调用/图片/跨 Provider） |
| **#9556** | feat(ai): serverTools — 模型配置中声明服务端工具 | 🔴 CLOSED | 支持 OpenAI Responses 内建 `web_search` 等服务器侧工具，含智谱 GLM coding-plan 代理 |
| **#9550** | fix(coding-agent): 发送前压缩（系统+工具 token） | ⚪ Withdrawn | 作者主动撤回 |
| **#9543** | feat: 模型可调用的 "Exit" 工具 | 🔴 CLOSED | 让模型在用户输入 `/exit` 或 `bye` 时主动结束会话 |
| **#9571** | provider-retry 解析畸形 HTTP-date 时 NaN 立即重试 | 🟢 新 Bug | 429 畸形 Retry-After → 0 退避 → 紧循环，需关注关联修复 |

---

## 📈 功能需求趋势

从近 24 小时更新的 41 条 Issue 提炼，社区关注度由高到低排序：

1. **TUI 渲染性能** — 长会话下的全量重绘、滚动抖动、大 diff 崩溃构成最集中痛点（#8036 / #9255 / #9549）。背后是 `--tui-mode fullscreen` 流式组件与视口算法的耦合。
2. **多 Provider 兼容与错误归因** — Anthropic mid-stream fallback、Grok 403、vercel-ai-gateway 路由配置、Azure Foundry、Codex deadline、GPT-6 Astra 压缩，覆盖了几乎所有主流 Provider 的边界 case。
3. **会话/上下文状态机健壮性** — toolCall 残留（#9306）、空白 tool 结果（#8720）、resume 时图像全尺寸重渲染（#9256），反映长会话的 context 维护复杂度。
4. **压缩（Compaction）预算与可恢复性** — 思考级别继承（#9075）、输出 token 上限（#9512）、compact 前置策略（#9550 withdrawn），形成子议题簇。
5. **扩展生态与安装链** — 扩展工具名冲突（#9071）、jiti 缓存权限（#9565）、pnpm 11 blockExoticSubdeps（#9567），集中在 npm/pnpm/扩展沙箱。
6. **LaTeX / 数学渲染保真度** — `#8827` 的字体切换与 `#9564` 的下标一致性，要求渲染管线对 TeX 子集更宽容。
7. **离线/启动语义清晰化** — `#8684` 主张环境变量行为应与文档一致；`#7739` 要求显式预算，体现对"可控性"的偏好。

---

## 👨‍💻 开发者关注点

1. **稳定性 > 新功能**：过去 24h 多条"永久性损坏会话"的 Bug（#8720、#9306、#8036）获高评论，社区呼吁优先修复"难以恢复"类问题，而非快速推进功能。
2. **文档与实现一致性**：开发者对"环境变量/开关的实际行为与文档不符"零容忍（#8684 是典型），期望语义边界严格化。
3. **可观测的预算与基线**：#7739 提供竞品对照表、#9255 提供逐帧统计；开发者偏好用可量化指标而非主观感受推动性能优化。
4. **Provider 中立抽象**：多 Provider 问题反复出现，#9488 的 `requestIdentity`、`#9556` 的 `serverTools` 都是为了让上层不必为每个 Provider 写适配，社区期望更纯净的 provider-neutral 层。
5. **闭环分类标签**：不少 Issue 标题以 `[closed-because-weekend]`、`[untriaged]`、`[no-action]` 关闭，反映维护者用显式标签沟通处置意图，便于后续 triage 跟踪。

---

*日报生成时间：2026-09-14 ｜ 数据窗口：过去 24 小时｜ 下次更新：2026-09-15*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报
**日期：2026-09-14**

---

##  今日速览

今日 Qwen Code 主线持续高强度迭代：TUI 渲染层出现 **React #185（Maximum update depth exceeded）崩溃** 的多源复现，社区讨论热烈；CI 在 Linux/Windows/macOS 多个 lane 上仍有非确定性失败，多项修复 PR 集中落地；功能侧则在 Browser SDK、Linux 内核级 bwrap 沙箱、Mesh 多 Agent 协作、Web Shell 远程 Daemon 等方向继续推进。

---

##  版本发布

- **[v0.23.3-nightly.20260913.faa395885e](https://github.com/QwenLM/qwen-code/releases/tag/v0.23.3-nightly.20260913.faa395885e)**：nightly 构建；合并了 dingtalk 频道下废弃的后台响应聚合逻辑清理（[#11570](https://github.com/QwenLM/qwen-code/pull/11570)）。
- **[cua-driver-rs v0.20.6](https://github.com/QwenLM/qwen-code/releases/tag/cua-driver-rs-v0.20.6)**：Qwen CUA Driver 预编译产物更新。macOS 提供签名 + 公证的 universal binary 与 `QwenCuaDriver.app`；Linux（x86_64 / arm64，需 glibc ≥ 2.31）与 Windows UIA worker 仍为未签名构建。

---

## 🔥 社区热点 Issues

1. **[#11500 TUI 静默崩溃（React #185）](https://github.com/QwenLM/qwen-code/issues/11500)** · 12 评论
   多个后台 Agent 几乎同时完成时，TUI 因 Ink `useBoxMetrics` 的 layout-listener `setState` 循环触发 "Maximum update depth exceeded"，进程无报错返回 shell。**P1**，是最受关注的渲染层崩溃问题。

2. **[#5199 Minified React error #185（Windows/CherryStudio）](https://github.com/QwenLM/qwen-code/issues/5199)** · 9 评论
   长期未结的老问题，Windows 环境下通过 `@qwen-code/qwen-code` 嵌入 CherryStudio 触发相同 React #185。本日重新被活动并参与分类，待回归验证。

3. **[#11590 非 Qwen 模型兼容 Bug（已 CLOSED）](https://github.com/QwenLM/qwen-code/issues/11590)** · 5 评论
   Qwen Code 向 DashScope OpenAI 兼容网关注入 `metadata` 字段，导致 `ZHIPU/GLM-5.3-Flash` 等第三方厂商在 `metadata: string` 反序列化时返回 400。删除字段后请求立即正常，是 **跨厂商模型路由** 的典型障碍。

4. **[#9693 Desktop 启动即报 MCP -32000（已 CLOSED）](https://github.com/QwenLM/qwen-code/issues/9693)** · 7 评论
   Qwen Desktop 在 Windows 上即使未启用 MCP 也出现 `MCP -32000: Connection closed`，影响 `server-filesystem` 与 `server-sequential-thinking`。

5. **[#11795 ACP 多路会话权限请求被串行化](https://github.com/QwenLM/qwen-code/issues/11795)** · 3 评论 · **P1**
   `qwen serve` 单 Bridge 单 `--acp` 子进程的设计使 `ask_user_question` 在一个会话中未应答时，会 **静默阻塞同 daemon 上其他会话**，下游分发链路已复现生产事故。

6. **[#11180 `--continue` 后 PreToolUse Hook 失效（已 CLOSED）](https://github.com/QwenLM/qwen-code/issues/11180)** · 3 评论 · **P1 / 安全**
   Skill 的 `PreToolUse` 安全门控在 `--continue` 恢复会话后停止生效，而技能指令仍保留在上下文中——典型的"指令与守卫脱钩"问题。

7. **[#11764 Bash 允许规则在单引号反斜杠处被绕过](https://github.com/QwenLM/qwen-code/issues/11764)** · 3 评论 · **P1 / 安全**
   一条 `Bash(...)` 允许规则可借由"首命令在单引号内以反斜杠结尾"触发 shell 续行，从而 **静默执行第二条无关命令**，无确认提示。是 Bash 解析器与 allowlist 规则对齐性的高危问题。

8. **[#11756 Virtualized History + 后台 Agent 触发 React #185](https://github.com/QwenLM/qwen-code/issues/11756)** · 4 评论 · **P1**
   启用 Virtualized History 后，复杂工作流下历史渲染与后台 Agent 状态更新交互引发递归更新崩溃。

9. **[#11724 / #11725 高内存占用 7 GB（OOM）](https://github.com/QwenLM/qwen-code/issues/11724)** · 4 评论
   长会话中出现 "High memory usage detected: 7.00 GB" 并直接崩溃，无法续接；为后续频繁出现的内存/会话管理类问题代表。

10. **[#11718 Desktop AppImage 泄露 PYTHONHOME（已 CLOSED）](https://github.com/QwenLM/qwen-code/issues/11718)** · 4 评论
    AppImage 将 `PYTHONHOME`/`PYTHONPATH` 注入到所有子进程，导致用户配置的 stdio MCP Python 服务被 **AppImage 内嵌解释器劫持** 并崩溃，是 Linux 打包的代表性环境串扰问题。

---

## 🛠 重要 PR 进展

1. **[#10183 feat(memory): structured on-demand recall](https://github.com/QwenLM/qwen-code/pull/10183)** · OPEN · [autofix/takeover]
   将"自动记忆"从扁平 prompt 升级为 **结构化 push/pull 召回协议**：memory 变化时下发完整 ref/title 两级树，相关 turn 附带 query-focused 子树，并提供专用工具用于显式拉取。

2. **[#11561 feat(channels): shared output policy + DingTalk](https://github.com/QwenLM/qwen-code/pull/11561)** · OPEN
   引入三条共享输出边界 `per_turn` / `per_response` / `per_task`，默认 `per_turn`：主结果即时交付，后台回合独立推送；DingTalk 率先接入。

3. **[#11241 feat(browser-use): Playwright Browser SDK](https://github.com/QwenLM/qwen-code/pull/11241)** · OPEN · [autofix/takeover]
   持久 Node REPL 内运行的强类型 Browser SDK，复用现有 Chrome 会话；语义 Playwright locator / DOM snapshot 引用 / 视觉坐标三种目标识别方式统一暴露给模型。

4. **[#11614 feat(cli): bwrap kernel sandbox for Linux](https://github.com/QwenLM/qwen-code/pull/11614)** · OPEN
   Linux 上基于内核（bubble-wrap）的新沙箱后端，**无需容器运行时、root 或守护进程**；按 backend 名称显式 opt-in，默认行为不变，macOS/容器后端不受影响。

5. **[#11206 feat(mesh): persistent shared-thread agent collaboration](https://github.com/QwenLM/qwen-code/pull/11206)** · OPEN
   在工作区引入持久 Agent 身份：派单、@提及、运行中插话、归属化结果与 per-run 历史、取消/解除阻塞/已审标记——多 Agent 协作从临时 subagent 走向"共享线程"模型。

6. **[#11548 feat(web-shell): connect to selected remote daemon](https://github.com/QwenLM/qwen-code/pull/11548)** · OPEN
   独立部署的 Web Shell 可选择连接到指定远程 daemon（地址 + 可选 bearer token），统一复用工作区、会话、文件、终端界面；切换目标会刷新页面。

7. **[#11796 fix(goal): checkpoint replay 不再消耗 stall](https://github.com/QwenLM/qwen-code/pull/11796)** · OPEN
   Goal 证据 checkpoint 在 checkpoint 成功重放时不再扣 stall 配额；同时清理 batching 后续问题；与 [#11690](https://github.com/QwenLM/qwen-code/pull/11690) 配合，目标停滞重试改为"逐次缩小批次"。

8. **[#11647 fix(cli): ACP 核心设置基于 active target dir 解析](https://github.com/QwenLM/qwen-code/pull/11647)** · OPEN
   Core 设置、memory、权限 handler 使用请求会话的 worktree 解析；MCP/hook/extension 写操作仅在显式 cwd 下解析，避免多工作区共享 daemon 时设置串扰。

9. **[#11787 fix(ci): restore Windows test baseline](https://github.com/QwenLM/qwen-code/pull/11787)** · OPEN
   通过让运行时路径与文件系统恒等校验跨平台、把 POSIX-only 语义移出 Windows 断言、在原生 Windows 绑定无法加载时安装 tokenizer 的 WASI 回退，修复 Windows CI 持续红灯。

10. **[#11163 feat(web-shell): workspace 分支选择器管理 git remotes](https://github.com/QwenLM/qwen-code/pull/11163)** · OPEN
    Web Shell 工作区 git popover 新增 **Manage Remotes**：列出 fetch/push URL、添加 remote、删除需二次确认。

---

## 📈 功能需求趋势

综合近 24h Issues 与 PR 摘要，社区关注的方向集中在以下几类：

- **多 Agent / 工作流编排**：Mesh 共享线程 ([#11206](https://github.com/QwenLM/qwen-code/pull/11206))、Dynamic Workflows 与 Claude Code 2.1.260 对齐 ([#11013](https://github.com/QwenLM/qwen-code/issues/11013))、checkpoint 批量重试 ([#11690](https://github.com/QwenLM/qwen-code/pull/11690) / [#11796](https://github.com/QwenLM/qwen-code/pull/11796))——围绕"更稳健、可恢复、可治理"的工作流。
- **沙箱与安全**：Linux bwrap 内核沙箱 ([#11614](https://github.com/QwenLM/qwen-code/pull/11614))、Bash allow rule 反斜杠绕过 ([#11764](https://github.com/QwenLM/qwen-code/issues/11764))、skill `--continue` 后 hook 失效 ([#11180](https://github.com/QwenLM/qwen-code/issues/11180))——沙箱能力与规则解析对齐性同步加强。
- **浏览器 / 桌面自动化**：Playwright Browser SDK ([#11241](https://github.com/QwenLM/qwen-code/pull/11241))、CUA Driver 多平台分发（v0.20.6）。
- **跨厂商模型路由**：DashScope 兼容端点下 `metadata` 注入导致非 Qwen 模型 400 ([#11590](https://github.com/QwenLM/qwen-code/issues/11590))——突出"模型无关"网关与厂商后端 schema 冲突。
- **Web Shell 体验升级**：远程 Daemon 连接 ([#11548](https://github.com/QwenLM/qwen-code/pull/11548))、分支选择器管理 remotes ([#11163](https://github.com/QwenLM/qwen-code/pull/11163))、命令解释面板多语言 ([#11791](https://github.com/QwenLM/qwen-code/issues/11791))。
- **记忆与上下文管理**：structured on-demand recall ([#10183](https://github.com/QwenLM/qwen-code/pull/10183))、`/delete` 后日志残留 ([#11762](https://github.com/QwenLM/qwen-code/issues/11762))。
- **CI/构建稳定性**：Windows lane 全面恢复 ([#11787](https://github.com/QwenLM/qwen-code/pull/11787))、macOS E2E 单次重试 ([#11134](https://github.com/QwenLM/qwen-code/pull/11134))、tsc OOM ([#11780](https://github.com/QwenLM/qwen-code/issues/11780))。

---

##  开发者关注点

- **TUI 渲染脆弱性最突出**：React #185 在多个场景复现（后台 Agent 收尾、Virtualized History、`run_shell_command is_background`），根因指向 Ink `useBoxMetrics` 与渲染层耦合，社区希望尽快引入 **生产可读的 error overlay / 崩溃可观测性**。
- **CI 非确定性仍是高频痛点**：Linux lane SIGTERM、Windows 路径/编码、macOS E2E 偶发整体死亡、tsc OOM——核心需求是"先把绿灯变绿"，并希望配套 lockfile freshness、构建审批范围、回归 pin 等结构性改进（见 [#11797](https://github.com/QwenLM/qwen-code/pull/11797)）。
- **多会话并发模型需要重构**：单 daemon 单 `--acp` 子进程导致权限请求、审批 (`AUTO` 模式) 跨会话串扰 ([#11795](https://github.com/QwenLM/qwen-code/issues/11795), [#11019](https://github.com/QwenLM/qwen-code/issues/11019))，下游集成方已开始踩坑。
- **内存与日志治理**：7GB OOM、`logs.json` 在 `/delete` 后残留、`PYTHONHOME` 跨进程污染，开发者希望引入更显式的 **会话级资源预算 + 日志保留策略**。
- **非 Qwen 模型开箱即用**：希望官方提供更明确的"避免注入厂商特异字段"的开关或兼容性矩阵，便于将 Qwen Code 接入 GLM、Claude 兼容端点等多模型网关。
- **本地化与可解释性**：Web Shell "命令解释"面板硬编码中英文 ([#11791](https://github.com/QwenLM/qwen-code/issues/11791))、`/statusline` 在短终端被裁剪 ([#9037](https://github.com/QwenLM/qwen-code/issues/9037))，体现"用户语言/终端尺寸自适应

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-09-14** | 数据来源：github.com/Hmbown/DeepSeek-TUI（项目同时引用 Codewhale 命名）

---

## 📌 今日速览

今日社区焦点集中在 **0.9.14 重构计划** —— 项目维护者 Hmbown 一次性抛出了 20+ 个 cleanup/backlog issue，主题围绕异步纪律、Session 真源、MCP 客户端栈整合、配置单源化等架构债清理。与此同时，**`/pet` 模式 PR #6154 已合并**，伴随 #6109、#6110 完成"确定性音像宠物"第一阶段交付，跨 TUI / 浏览器 / 原生端的共享 owner 工作以 #6155 跟进。

---

## 🚀 版本发布

过去 24 小时无新 Release。上一可考版本为 **0.9.13**（包含 `/pet`、TLS 修复、execpolicy 迁移），0.9.14 处于重构准备阶段。

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 状态 | 为什么值得关注 |
|---|------|------|------|----------------|
| 1 | [#6017](https://github.com/Hmbown/Codewhale/issues/6017) | Could Codewhale support durable memory across sessions? | OPEN | MemCode 创始人提出作为可选持久记忆层，评论 4 条，社区对跨会话项目上下文记忆反响积极 |
| 2 | [#6095](https://github.com/Hmbown/Codewhale/issues/6095) | Expose TUI `@file` fuzzy search to local API clients | CLOSED | 推动 Runtime API 暴露工作区文件搜索，已被 PR #6120 实现 |
| 3 | [#6116](https://github.com/Hmbown/Codewhale/issues/6116) | Copy on select & paste on middle click (Linux) | CLOSED | 增强 Linux TUI UX 体验 |
| 4 | [#6109](https://github.com/Hmbown/Codewhale/issues/6109) | Build the deterministic audiovisual pet across Codewhale surfaces | CLOSED | 跨端宠物总览 issue，已被 #6110/#6154 拆分落地 |
| 5 | [#6136](https://github.com/Hmbown/Codewhale/issues/6136) | `save_session` silently deletes oldest transcript at MAX_SESSIONS | OPEN | **会话丢失数据 bug**，MAX_SESSIONS=50 无告警清理，生产风险 |
| 6 | [#6137](https://github.com/Hmbown/Codewhale/issues/6137) | Empty "New Session" records evict real transcripts | OPEN | 与 #6136 同源的 quota 抢占问题，0~2h 时序漂移证据详实 |
| 7 | [#6138](https://github.com/Hmbown/Codewhale/issues/6138) | Design: resume behavior when target session/provider is gone | OPEN | 涉及 NotFound 错误 UX 与孤儿 provider 状态的恢复语义 |
| 8 | [#6117](https://github.com/Hmbown/Codewhale/issues/6117) | Agent profiles ignored when spawning sub-agents | CLOSED | 子 agent 静默忽略 profile 走 session 默认 route 的关键 bug |
| 9 | [#6129](https://github.com/Hmbown/Codewhale/issues/6129) | No per-call budget on `agent()`: cannot cap tokens per call | OPEN | **子 agent 失控**问题，呼吁支持 "100k token 上限后立即回传" |
| 10 | [#6130](https://github.com/Hmbown/Codewhale/issues/6130) | `action=status` returns ~50k tokens nested payload | OPEN | 文档承诺"compact" 路径实测 ~50k，Engine event 流泄漏 |

**社区反应**：维护者本人主动出击，#6135–#6155 几乎全部由 Hmbown 提交，呈现出"集中清账"特征；外部贡献者（Gabriel-Degret、LmeSzinc、dmt4、7jrxt42BxFZo4iAnN4CX）继续以高质量 bug 报告为主。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | 编号 | 标题 | 状态 | 关键内容 |
|---|------|------|------|----------|
| 1 | [#6154](https://github.com/Hmbown/Codewhale/pull/6154) | feat(tui): `/pet` mode | CLOSED | **`/pet` 命令**让宠物占据整个内容视口，Escape 返回，揭示真实助手回复 |
| 2 | [#6110](https://github.com/Hmbown/Codewhale/pull/6110) | feat(pet): persistent world & work-driven dot forms | CLOSED | 980 颗持久化点构成推理结/代码线/分支等形态，浏览器/TUI/原生共享一个确定性世界 |
| 3 | [#6120](https://github.com/Hmbown/Codewhale/pull/6120) | feat(runtime-api): expose workspace file suggestions | CLOSED | 新增 `GET /v1/workspace/files/search`，复用 composer 排序算法，关 #6095 |
| 4 | [#6111](https://github.com/Hmbown/Codewhale/pull/6111) | feat(tui): file-scoped restore & gate whole-tree rollback | CLOSED | 恢复 GUI 单文件 Revert（响应 VSCode 扩展 #3），并修复整树回滚两处缺陷 |
| 5 | [#6105](https://github.com/Hmbown/Codewhale/pull/6105) | chore(deps): rustls 0.23.43 → 0.23.44 | OPEN | Dependabot 例行升级 |
| 6 | [#6134](https://github.com/Hmbown/Codewhale/pull/6134) | Professionalize Computer Use + official download page | OPEN | Computer Use 0.3.0：本地操作改走注册的独立 helper，失败即关闭，含 native 权限引导与人控 Pause/Stop |
| 7 | #6155 | Pet: qualify `/pet` habitat + shared owner across TUI + desktop | OPEN | 拆分自 #6109，补齐真实终端验收项 |
| 8 | #6153 | Guard: reqwest via `codewhale_release::tls` only | OPEN | 防止 rustls-no-provider 下裸 `Client::builder()` panic（0.9.13 现场翻车） |
| 9 | #6150 | `Op::SendMessage` god-payload → `TurnSpec` | OPEN | 提取 TurnSpec 让每轮权威字段停止向 enum 累积，惠及 ACP/app-server |
| 10 | #6148 | Structured concurrency: JoinSet + child cancellation | OPEN | 92 处 `tokio::spawn` vs 9 处 JoinSet，fleet 与子 agent fan-out 收敛 |

---

## 📈 功能需求趋势

从过去 24 小时 40 条 issue 中提炼出五大方向：

1. **0.9.14 重构主线（占比 ~50%）**
   - 异步纪律（#6146/6148/6149）：wake-driven 多路复用、`JoinSet`、`thread::sleep` 治理
   - 无界 channel 收敛（#6147）：`tx_subagent_completion`/`progress_tx` 必须有界
   - 依赖去重（#6151）：reqwest 0.12/0.13、toml/toml_edit、thiserror 1/2 等

2. **Session 管理真源（#6136/6137/6138/6144）**
   - `session_manager` vs `codewhale-state` 谁拥有真源？quota 抢占与孤儿恢复语义未决

3. **MCP / execpolicy / config 栈整合（#6140–#6143）**
   - 双 MCP 客户端栈合并、深海残留 API 退役、`tui/src/config*` 收缩为适配器

4. **跨端 /pet 宠物生态（#6109/6110/6154/6155）**
   - TUI + 桌面 + 浏览器共享 owner 的世界/分数/回放模型

5. **Runtime SDK 契约化（#6133）**
   - 一份 schema 生成 Rust + TypeScript 双侧事件定义，Schemars 1.2.2 已就位

---

## 💬 开发者关注点

汇总 issue/PR 中的高频痛点：

| 痛点 | 代表 issue |
|------|-----------|
| **会话数据丢失/抢占**——MAX_SESSIONS 静默清理 + 空记录耗尽配额 | #6136, #6137 |
| **子 agent 不可控**——无 per-call budget、profile 被吞、`status` 返回 ~50k 嵌套负载 | #6117, #6129, #6130 |
| **配置分裂**——`tui/src/config*` 与 `crates/config` 双轨，`session_manager` 与 `StateStore` 双源 | #6143, #6144 |
| **异步模型不收敛**——`try_recv` 自旋、unbounded channel 内存膨胀、`spawn` 失控 | #6146, #6147, #6148, #6149 |
| **SDK 契约漂移**——手写 TS 类型与 Rust 模型不再同步 | #6133 |
| **GitHub App 评审质量**——证据链虚化、结论需引用具体源码 | #6135 |
| **持久记忆诉求**——MemCode 等第三方愿意提供跨会话上下文层 | #6017 |

---

**编辑备注**：当前仓库同时使用 "DeepSeek-TUI" 与 "Codewhale" 命名，建议关注后续是否会有正式品牌统一公告。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*