# AI CLI 工具社区动态日报 2026-08-19

> 生成时间: 2026-08-19 00:52 UTC | 覆盖工具: 9 个

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

**日期**：2026-08-19  
**覆盖工具**：Claude Code、OpenAI Codex、Gemini CLI、GitHub Copilot CLI、Kimi Code CLI、OpenCode、Pi、Qwen Code、DeepSeek TUI（CodeWhale）

---

## 1. 生态全景

当前 AI CLI 工具市场已进入**多极化深度竞争阶段**：Anthropic（Claude Code）、OpenAI（Codex）、Google（Gemini CLI）、GitHub（Copilot CLI）、Moonshot（Kimi）、开源阵营（OpenCode/Pi/Qwen Code/CodeWhale）共同形成了 9+ 款主流产品的竞争格局。**核心矛盾从"功能有无"转向"可靠性与一致性"**——多款工具今日集中爆发平台稳定性回归（Intel Mac/Windows）、MCP 进程泄漏、TUI 长会话卡顿等"沉默杀手"问题，反映出整个行业正从快速扩张期进入**工程化深耕期**。同时，**多 Agent 协作、跨 Session 通信、上下文压缩智能化**成为新一轮差异化主战场，预示着 CLI 从"单兵工具"向"Agent 编排平台"演进。

---

## 2. 各工具活跃度对比

| 工具 | 新 Release | 活跃 Issue（Top 数） | 活跃 PR | 关键信号 |
|------|:----------:|:-------------------:|:-------:|----------|
| **Claude Code** | ✅ v2.1.235 | 10+（最高 👍107） | 1 | 长期高赞 Issue #2254（14 个月未解）；Intel Mac 回归 4 条连发 |
| **OpenAI Codex** | ✅ v0.148.0 | 10（最高 💬63/👍107） | 13+ | PR 流量最高，Guardian v2 安全风控密集落地 |
| **Gemini CLI** | ✅ v0.56.0-nightly | 10（最高 👍8） | 10 | SSR Agent 修复集群单日合并 7 PR |
| **GitHub Copilot CLI** | ✅ v1.0.81-1 | 36 条活跃 | 1 | Sandbox 系列回归 4 条同日爆发；PR 活跃度显著偏低 |
| **Kimi Code CLI** | ❌ | 2 | 2 | 活跃度极低，疑似维护节奏放缓 |
| **OpenCode** | ❌ | 10（最高 👍36） | 10 | 计费/存储问题密集，无版本但 PR 质量高 |
| **Pi** | ❌ | 10+ | 10+ | PR 合并密度高（多 fail-closed 设计） |
| **Qwen Code** | ✅ v0.21.14-preview.0 + nightly | 10 | 10 | 多 Agent 路线密集落地（live-session registry、agent board） |
| **CodeWhale** | ✅ v0.9.9（品牌重塑） | 10 | 10 | 中文本地化 Tier 1 完成；CI 加固成主线 |

**活跃度梯队**：
- **第一梯队**（高活跃）：OpenAI Codex、Claude Code、Qwen Code、OpenCode、CodeWhale
- **第二梯队**（中等）：Gemini CLI、Pi、GitHub Copilot CLI
- **第三梯队**（低活跃）：Kimi Code CLI

---

## 3. 共同关注的功能方向

### 3.1 🪟 Windows 平台稳定性（5/9 工具）
- **Claude Code**：#76357（MSIX 更新失败）、#77071（Dispatch 标签页丢失）
- **OpenAI Codex**：#39136（浏览器插件初始化）、#35119（WSL Git 误判）、#39173（Chrome Native Messaging）
- **GitHub Copilot CLI**：#4521/#4522/#4524（Sandbox 系列回归）
- **CodeWhale**：#5512（Windows 状态栏渲染回归）
- **Pi**：#8282（Windows `find` 死进程）、#8299（Defender 拖慢冷启动）

**共同诉求**：Windows 几乎每个核心功能都有未解决问题，已成为整个生态的系统性短板。

### 3.2 🔌 MCP 生态治理（4/9 工具）
- **Claude Code**：#73468（macOS 沙箱 ARG_MAX）、OAuth scope 硬编码
- **OpenAI Codex**：#30408（MCP 进程泄漏，9GB+ RSS）、#38754、#31354
- **GitHub Copilot CLI**：#3162、#4096（App-CLI OAuth 桥接）、#4490（Atlassian RFC 8414 回归）
- **Gemini CLI**：OAuth 回调超时修复

**核心痛点**：进程不回收、stdin 重复 spawn、OAuth 刷新僵死、跨平台路径识别失败。

### 3.3 🤖 多 Agent / 跨 Session 协作（4/9 工具）
- **Claude Code**：#86279（`send_message` 静默丢失）、#86608/#87323/#87694 故障群
- **Gemini CLI**：#22323（子代理误报 GOAL）、#21409（通用代理永久挂起）
- **Qwen Code**：#8718（Session 协同 RFC）、#8724、#9276、#9402（Agent Board）
- **CodeWhale**：#5508（持续循环回合）、#5491（审批持久化）

**共同诉求**：从单 Agent 向多 Agent 编排平台跃迁，session 间通信、状态共享、协同语义是核心需求。

### 3.4 📊 TUI 长会话性能（4/9 工具）
- **Gemini CLI**：#28641（窄宽度 ghost text）、#21924（终端 resize 闪烁）
- **Pi**：#8281（10k 行闪烁）、#8309（跳屏）、#8327（render yield）
- **OpenCode**：#7648（流式滚动抑制，👍18）、#32270
- **CodeWhale**：#5486（窄终端紧凑行）、#5437（状态栏语法）

**共同诉求**：长 transcript 下的渲染性能、滚动体验、图片折叠成为高密度改进区。

### 3.5 🧠 上下文压缩与记忆管理（4/9 工具）
- **Pi**：#6339（阈值评估时机）、#8307（cache-friendly compaction）
- **Qwen Code**：#7040（auto-memory recall RFC）、#6806（状态栏百分比）
- **Gemini CLI**：#26516/#26522/#26523/#26525（Auto Memory 质量）
- **Claude Code**：#87783（auto-memory 溯源）、#87804（rules/ 主题触发器）

**共同诉求**：从"压缩"走向"智能压缩 + 溯源 + 触发控制"。

### 3.6 🔐 凭据与认证生命周期（3/9 工具）
- **GitHub Copilot CLI**：#3682（BYOK 热刷新）、#4392
- **OpenAI Codex**：#39316（Edu Plus/Pro 套餐）、#39322（Header 认证）
- **Claude Code**：#87803（forensics 权限）

**共同诉求**：短期凭据（STS/OIDC）需要不中断会话的刷新机制；企业 SSO 场景刚需。

### 3.7 💰 计费透明与配额正确性（3/9 工具）
- **Claude Code**：#81703（7·17 事故 $604）、#83062（$995 争议）
- **OpenCode**：#33495（Zen 余额未生效）、#42935（20 分钟耗尽）、#39891（TUI/Web 报价不一致）
- **CodeWhale**：#5493（Orcarouter 计费分类）

**共同诉求**：付费用户信任问题直接影响商业口碑，是订阅型工具的最大隐性风险。

### 3.8 🛡️ 沙箱与权限模型（3/9 工具）
- **Claude Code**：#73468（macOS 沙箱 ARG_MAX）
- **Gemini CLI**：#19873（零依赖 OS 沙箱 + 意图路由）、#28863（环境变量注入）
- **Codex**：#39307（Guardian V2 fail-closed）、#39311（执行审批绑定 Shell 可执行文件）

**共同诉求**：从"能用"走向"fail-closed + 间接信任绕过防护"。

---

## 4. 差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | TUI + IDE 双线集成、规则系统、跨会话消息 | Anthropic 生态重度用户、IDE 依赖型开发者 | LSP 缓存、`.claude/rules/`、Auto Memory |
| **OpenAI Codex** | 多平台覆盖（VS Code/Cursor/Desktop/Mobile）、安全风控 | OpenAI 生态、企业合规用户 | Guardian v2、Responses API、OAuth 教育账号 |
| **Gemini CLI** | Auto Memory、子代理、AST 工具 | Google Cloud 用户、研究型开发者 | SSR Agent 流水线、组件级行为评估 |
| **GitHub Copilot CLI** | 企业模型目录、组织级策略、Agent 细粒度控制 | GitHub 企业用户、付费 Copilot 订阅者 | 模式化（plan/autopilot）、BYOK、Sandbox |
| **Kimi Code CLI** | OpenAI 兼容多提供商、Web UI | Moonshot 生态、金融/量化垂直场景 | Freqtrade 量化策略生成、垂直落地 |
| **OpenCode** | 自托管友好、多 Provider、可观测 | 本地 LLM 用户、隐私敏感开发者 | vLLM/Ollama 集成、Zen/Go 订阅、event 表存储 |
| **Pi** | 扩展平台化、隐私优先、并发写者锁 | 平台构建者、隐私至上开发者 | 扩展 hook（`agent_recovery_exhausted`）、fail-closed |
| **Qwen Code** | 多 Agent 协作、Review/Autofix 流水线 | 通义生态、CI/CD 重度用户 | Live-session registry、Agent Board、Goal v3 |
| **CodeWhale** | 国际化、AI coordinator、品牌独立 | 中文用户、coordinator 模式构建者 | crate 拆分、dictionary spine、trusted publishing |

**关键差异化信号**：
- **Anthropic vs OpenAI**：Claude Code 重 IDE/TUI 体验，Codex 重多平台广度
- **企业 vs 开源**：Copilot CLI 是企业标杆，OpenCode/Pi 是开源标杆
- **平台化 vs 工具化**：Pi、Qwen Code 已显露出"Agent 平台"野心，Claude Code/Codex 仍是"高级工具"
- **国际化路径**：CodeWhale 唯一系统性投入中文本地化

---

## 5. 社区热度与成熟度

### 社区热度（综合评论数、PR 密度、版本节奏）

| 工具 | 热度评级 | 关键指标 |
|------|---------|---------|
| **OpenAI Codex** | 🔥🔥🔥🔥🔥 | 单日 PR 13+；Issue 评论数最高（63/56/31） |
| **Claude Code** | 🔥🔥🔥🔥🔥 | 👍107 长期榜首；14 个月未解 Issue 反映高粘性 |
| **Qwen Code** | 🔥🔥🔥🔥 | 10 评论 Issue ×4，多 Agent RFC 推进节奏密集 |
| **CodeWhale** | 🔥🔥🔥🔥 | EPIC-005 架构拆分 + 中文本地化双线推进 |
| **OpenCode** | 🔥🔥🔥🔥 | 计费信任危机反而推动 PR 加速 |
| **Gemini CLI** | 🔥🔥🔥 | SSR Agent 单日 7 合并，但热度偏中等 |
| **GitHub Copilot CLI** | 🔥🔥🔥 | 36 条活跃 Issue 但 PR 仅 1 条，疑似维护资源紧张 |
| **Pi** | 🔥🔥 | PR 密度高但热度集中，平台化属性强 |
| **Kimi Code CLI** | 🔥 | 24h 仅 2 Issue + 2 PR，活跃度告警 |

### 成熟度梯队

- **第一梯队（成熟 + 活跃）**：Claude Code、OpenAI Codex、Qwen Code
  - 特征：版本节奏稳定、Issue 讨论深度大、长期高赞 Issue 反映生态成熟
- **第二梯队（成熟 + 稳定）**：Gemini CLI、GitHub Copilot CLI
  - 特征：版本节奏规律，但部分品类活跃度分化
- **第三梯队（快速迭代）**：OpenCode、Pi、CodeWhale
  - 特征：架构演进密集、扩展生态扩张、品牌/技术双重重塑
- **第四梯队（观察期）**：Kimi Code CLI
  - 特征：活跃度显著走低，需关注维护状态

---

## 6. 值得关注的趋势信号

### 📈 信号一：多 Agent 协作成为下一阶段差异化主战场
**Qwen Code**、**Pi**、**Claude Code**、**CodeWhale** 四款工具不约而同在跨 Session 通信、Agent 编排上密集投入（live-session registry、agent board、`agent_recovery_exhausted` hook、approval persistence）。  
**开发者参考价值**：评估 CLI 工具时应关注其"是否支持 Agent 间通信协议、是否提供编排 UI、是否设计为平台而非工具"。

### 📈 信号二：TUI 长会话性能进入"必须解决"阶段
**Gemini CLI

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据周期：2025-10 ~ 2026-08 | 仓库：anthropics/skills**

---

## 一、热门 Skills 排行（Top PRs）

> 注：原数据 PR 评论数为 undefined，以下排名综合"更新活跃度、问题关联性、功能覆盖广度、跨平台影响"四个维度排序。

### 🥇 #1298 — skill-creator 评测闭环修复（run_eval.py 0% recall）
- **功能**：修复 `run_eval.py` 报告 recall=0% 的核心 Bug，并附带 Windows 流读取、子进程并行等多项修复
- **讨论热点**：直接关联 [Issue #556](https://github.com/anthropics/skills/issues/556)（12 评论 / 7 👍），已被 10+ 用户独立复现。修复不到位，skill description 优化闭环就是在"对抗噪声"
- **状态**：🟢 OPEN · 2026-06-10 创建，多次更新
- **链接**：[PR #1298](https://github.com/anthropics/skills/pull/1298)

### 🥈 #1367 — self-audit：输出质量四维审计 v1.3.0
- **功能**：在交付前对 AI 输出做"机械文件校验 + 四维推理审计"，通用、无技术栈绑定
- **讨论热点**：与 [Issue #1385](https://github.com/anthropics/skills/issues/1385)（Reasoning Quality Gate Pipeline）的提案一脉相承，社区对"质量门控"类元能力呼声较高
- **状态**：🟢 OPEN · 2026-07-02 最近更新
- **链接**：[PR #1367](https://github.com/anthropics/skills/pull/1367)

### 🥉 #514 — document-typography：排版质量控制
- **功能**：防止 AI 生成文档出现"孤词换行、寡妇段落、编号错位"等排版瑕疵
- **讨论热点**：痛点普适——"所有 Claude 生成的文档都受影响"，用户极少会主动要求良好排版
- **状态**：🟢 OPEN · 已 2 个月，仍是文档生成场景刚需
- **链接**：[PR #514](https://github.com/anthropics/skills/pull/514)

### 4️⃣ #1099 / #1050 — skill-creator Windows 兼容性修复
- **功能**：修复 `subprocess.Popen` 在 Windows 调用 `claude.cmd` 的 `WinError 2/10038` 问题
- **讨论热点**：直接抑制评测信号——Windows 用户 100% 触发失败、100% precision 0% recall。两个 PR 出现重复贡献，说明 Windows 生态断点是当前最大可用性瓶颈
- **状态**：🟢 OPEN · 核心工具链阻塞性 Bug
- **链接**：[PR #1099](https://github.com/anthropics/skills/pull/1099) · [PR #1050](https://github.com/anthropics/skills/pull/1050)

### 5️⃣ #83 — skill-quality-analyzer & skill-security-analyzer
- **功能**：从结构、文档、正确性、效率、安全五个维度对 Skill 做质量审计
- **讨论热点**：与 [Issue #492](https://github.com/anthropics/skills/issues/492)（43 评论，最高热度）"社区 skill 安全/信任边界"问题形成天然呼应
- **状态**：🟢 OPEN · 静默近半年，但属于生态基础设施级需求
- **链接**：[PR #83](https://github.com/anthropics/skills/pull/83)

### 6️⃣ #486 — ODT Skill（开放文档格式）
- **功能**：创建/读取/转换 ODT、ODS（LibreOffice / ISO 标准格式）
- **讨论热点**：填补 PDF/DOCX 之外的开放格式空白，企业/政府场景强需求
- **状态**：🟢 OPEN · 2026-04-14 更新
- **链接**：[PR #486](https://github.com/anthropics/skills/pull/486)

### 7️⃣ #723 — testing-patterns skill
- **功能**：覆盖 Testing Trophy 理念、单元测试、React 组件、E2E、性能、安全测试全链路
- **讨论热点**：社区代码质量类 Skill 中覆盖最完整的一份
- **状态**：🟢 OPEN
- **链接**：[PR #723](https://github.com/anthropics/skills/pull/723)

### 8️⃣ #568 — ServiceNow 平台 Skill
- **功能**：覆盖 ITSM/ITOM/ITAM/SAM/FSM/SPM/CSDM/IntegrationHub 等大模块
- **讨论热点**：大型企业 SaaS 平台首个系统化 Skill；更新跨度近 5 个月，说明仍在持续打磨
- **状态**：🟢 OPEN
- **链接**：[PR #568](https://github.com/anthropics/skills/pull/568)

---

## 二、社区需求趋势（Issues 提炼）

| 需求方向 | 关键 Issue | 热度信号 |
|---|---|---|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) 社区 skill 冒用 `anthropic/` 命名空间 | 🔥 43 评论，全榜第一 |
| **🏢 企业级共享/分发** | [#228](https://github.com/anthropics/skills/issues/228) Claude.ai 组织级 Skill 共享 | 16 评论 / 8 👍（高赞同比） |
| **🛠️ 评测基础设施可用性** | [#556](https://github.com/anthropics/skills/issues/556) run_eval 0% 触发率 | 12 评论 / 7 👍 |
| **🧠 Agent 状态压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory：长任务符号化记忆 | 9 评论 |
| **📦 插件去重与发现** | [#189](https://github.com/anthropics/skills/issues/189) document-skills 与 example-skills 内容重复 | 6 评论 / 9 👍 |
| **🪟 上下文管理** | [#1487](https://github.com/anthropics/skills/issues/1487) claude-api skill 注入 ~156k token | 4 评论，反响强 |
| **🧪 输出质量门控** | [#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate Pipeline | 4 评论 |
| **🤝 多生态互通** | [#29](https://github.com/anthropics/skills/issues/29) AWS Bedrock 支持；[#16](https://github.com/anthropics/skills/issues/16) Skills → MCP 暴露 | 各 4 评论，长尾需求 |
| **🧹 格式与文档稳健性** | [#12](https://github.com/anthropics/skills/issues/12) docx 空白字符重排导致文档损坏 | 4 评论，长达 10 个月仍 OPEN |

**趋势画像**：社区关切高度集中在 **Skill 自身生态的"可信、可控、可被验证"**——是基础设施层诉求，而非纯功能丰富度诉求。

---

## 三、高潜力待合并 Skills

以下 PR 处于 OPEN 状态、更新动作活跃、与多议题（Issues）形成互锁，是下一波最可能合并的 Skills：

| Skill | 潜力维度 | 预计落地逻辑 | 链接 |
|---|---|---|---|
| **self-audit** (#1367) | 元能力 / 安全 | 与 #1385 提案对照，已有 v1.3.0 版本 | [PR](https://github.com/anthropics/skills/pull/1367) |
| **document-typography** (#514) | 全用户痛点 | 无外部依赖、低风险 | [PR](https://github.com/anthropics/skills/pull/514) |
| **skill-quality/security-analyzer** (#83) | 回应 #492 安全事件 | 与官方版本共存，几乎不可避免 | [PR](https://github.com/anthropics/skills/pull/83) |
| **testing-patterns** (#723) | 代码质量主力 | 覆盖面完整，社区长期请求 | [PR](https://github.com/anthropics/skills/pull/723) |
| **ODT skill** (#486) | 补齐开放格式 | 与 pdf/docx 平级 | [PR](https://github.com/anthropics/skills/pull/486) |
| **pyxel 复古游戏** (#525) | 创意编程 | MCP 驱动、单文件、评审门槛低 | [PR](https://github.com/anthropics/skills/pull/525) |
| **Windows 兼容系列** (#1099/#1050) | 解锁评测 | 是 #556 闭环修复的必要前置 | [PR #1099](https://github.com/anthropics/skills/pull/1099) · [PR #1050](https://github.com/anthropics/skills/pull/1050) |
| **spec 合规修复** (#1538) | 维护性 | 仓库自我参照实现，merge 阻力极小 | [PR](https://github.com/anthropics/skills/pull/1538) |

> 冷启动观察：`run_eval.py` 的 0% recall（#1298）与 Windows 子进程崩溃（#1099/#1050）必须先合并，否则下游的 skill-creator 优化几乎不可信。

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求，是给 Skills 本身建立一套"信用体系"——既能评估 Skill 的质量与安全性（`skill-quality-analyzer` / `self-audit`），也能约束社区 Skill 的命名空间与权限边界（Issue #492），同时还要把优化工具链跑通（#1298、#1099、#1050）。"再做更多 Skill"已经不是瓶颈，"让现有 Skill 值得被信任、值得被采用、值得被优化"才是。**

---

### 📎 数据附录
- 热门 PR 池：50 条（按评论数排序，展示前 20）
- 热门 Issues 池：50 条（按评论数排序，展示前 15）
- 时间窗口：2025-10-16 ~ 2026-08-17
- 报告生成时间：2026-08-19

---

# Claude Code 社区动态日报
**日期：2026-08-19**

---

## 📌 今日速览

昨日发布的 **v2.1.235** 版本带来了拼写检查功能与 LSP 缓存修复，但同期社区集中爆发了大量 **Cowork VM 在 Intel Mac 上的回归 Bug**（与 1.32352.x 版本更新相关），叠加 Windows 桌面端更新失败、跨会话消息投递失效等系统性问题，反映出本周版本质量引发较多用户困扰。长期高赞 Issue #2254（关闭欢迎横幅）持续位居热度榜首，说明基础 UX 体验仍是社区最关心的方向之一。

---

## 🚀 版本发布

### v2.1.235（2026-08-18 发布）

**新功能**
- 新增可选的 `spellcheck` 设置，在提示输入框中实时标记拼写错误（依赖系统已安装的 `aspell` / `hunspell` / `ispell`）

**Bug 修复**
- 修复语言服务器（LSP）在会话中途断连/重连时导致的整段 prompt cache 失效问题
- 修复嵌套模式下相关 Bug（详情被截断）

📎 相关 Issue：[#87803](https://github.com/anthropics/claude-code/issues/87803)（用户在 v2.1.235 上仍遇到 "Account validation state mismatch" 错误）

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#2254](https://github.com/anthropics/claude-code/issues/2254) — 禁用欢迎横幅
- **分类**：enhancement / area:tui | **评论**：35 | **👍**：107
- **作者**：moltar | 创建于 2025-06-18（超 14 个月未解决）
- **重要性**：长期最高赞 Issue。用户希望关闭每次启动时显示的欢迎屏与提示，节省终端空间。**社区反应强烈**，👍 数遥遥领先，反映基础 UX 设置项缺失是普遍痛点。

### 2. [#76357](https://github.com/anthropics/claude-code/issues/76357) — Windows MSIX 更新失败
- **分类**：bug / platform:windows / area:desktop | **评论**：26 | **👍**：6
- **重要性**：每次更新必现的严重问题——错误提示 "Another program is currently using this file"，需重启系统才能启动应用。**影响所有 Windows MSIX 安装用户**，且与 #73107 根因相同。

### 3. [#32726](https://github.com/anthropics/claude-code/issues/32726) — VSCode 扩展抢夺焦点
- **分类**：enhancement / area:ide | **评论**：14 | **👍**：52
- **重要性**：高赞 enhancement。Claude Code 面板在输出时会自动抢走焦点，严重打断用户在编辑器其他标签中的输入流，是 VSCode 集成体验的关键摩擦点。

### 4. [#81703](https://github.com/anthropics/claude-code/issues/81703) — 7·17 大规模计费事故
- **分类**：billing / bug | **评论**：12 | **👍**：0
- **重要性**：涉及 $604.71 自动充值争议。用户订阅额度被错误路由至付费额度，是 Anthropic **已确认的计费事故**，但尚未完成差额核对，关系到用户信任与法务风险。

### 5. [#87503](https://github.com/anthropics/claude-code/issues/87503) — Cowork VM 连接超时（Intel Mac）
- **分类**：bug / regression | **评论**：11
- **重要性**：1.32352.0 更新后在 Intel Mac 上 Cowork VM 完全无法连接 guest，**昨日新增的回归问题**，配合 #87512、#87642、#87759 显示这是 Intel Mac 上的一次系统性故障。

### 6. [#87512](https://github.com/anthropics/claude-code/issues/87512) — Cowork guest kernel 无法枚举 NVMe
- **分类**：bug / platform:macos / regression | **评论**：10
- **重要性**：同上 Intel Mac 回归系列，根因与 NVMe 磁盘枚举失败有关，卡在 `Run /init` 阶段 60 秒后超时。

### 7. [#77071](https://github.com/anthropics/claude-code/issues/77071) — Windows Dispatch 标签页丢失
- **分类**：bug / area:desktop | **评论**：10
- **重要性**：Pro 计划用户的 Windows 11 上 Dispatch 标签完全消失，疑似 UI 灰度/特性开关问题。

### 8. [#73468](https://github.com/anthropics/claude-code/issues/73468) — macOS 沙箱因 ARG_MAX 失效
- **分类**：bug / area:sandbox | **评论**：9 | **👍**：5
- **重要性**：当 git worktree 数量多时，Seatbelt profile 内联传入 `sandbox-exec -p` 超 ARG_MAX，导致 **所有沙箱化 Bash 命令全部失败**，包括 `printf ok` 这种基础命令。Sandbox 功能完全不可用。

### 9. [#87560](https://github.com/anthropics/claude-code/issues/87560) — 桌面端自动更新后对话视图回退
- **分类**：bug / area:desktop | **评论**：4
- **重要性**：静默重启（stealth-relaunch）后导航历史记录的 `active` 索引过期，导致用户在对话列表中"穿越"到错误位置。

### 10. [#86279](https://github.com/anthropics/claude-code/issues/86279) — 跨会话 send_message 永不投递
- **分类**：bug / area:core | **评论**：4
- **重要性**：`mcp__ccd_session_mgmt__send_message` 返回成功，UI 显示已送达，但目标 session 永远不创建 turn，需用户按 Esc 取消。**这是近期社区关注的 agents 跨会话通信基础设施的关键缺陷**（与 #86608、#87323、#87694 同主题）。

---

## 🔧 重要 PR 进展

**过去 24 小时仅有 1 条 PR 更新**，明显低于日常活跃度：

### [#41611](https://github.com/anthropics/claude-code/pull/41611) — 添加缺失的源代码
- **状态**：OPEN | **作者**：tornikeo | **更新**：2026-08-18
- **内容**：补充 Claude Code 缺失的源代码（详情较少）
- **观察**：该 PR 创建于 3 月底仍未合并，社区对源码透明度的关注持续存在。

> 📝 如需了解历史重要 PR，可参考近期合并记录，本日 PR 流量极低。

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 中提炼出的社区关注方向：

| 方向 | 代表性 Issue | 热度信号 |
|---|---|---|
| **🖥️ IDE 集成体验** | #32726（VSCode 焦点抢占）、#2254（欢迎横幅） | 👍 107、👍 52，最高赞集中在 IDE/TUI 体验 |
| **🪟 Windows 桌面端稳定性** | #76357、#73107、#77071、#87750 | 多条 24h 内更新，反复出现的更新失败/启动失败 |
| **💰 计费透明与争议处理** | #81703、#83062 | 大额自动充值争议（$604、$995），直接影响信任 |
| **🤖 多 Agent / 跨会话通信** | #86279、#86608、#87323、#87694 | 形成"故障群"，send_message 链路存在系统性缺陷 |
| **🔒 沙箱与权限模型** | #73468（macOS 沙箱 ARG_MAX）、#87534（Auto Mode 计划限制） | 边缘场景暴露工程债务 |
| **🧠 记忆与上下文管理** | #87783（auto-memory 绑定溯源）、#87804（rules/ 主题触发器） | 新兴方向，社区主动提案 |
| **🍎 Intel Mac 兼容** | #87503、#87512、#87642、#87759 | 1.32352.x 更新后集中爆发的回归 |
| **🤖 新模型支持** | #87802（Fable 5 误报）、#87803（forensics 权限） | Fable 5、Opus 4.8 等新模型上线后的早期适配问题 |

---

## 💬 开发者关注点与痛点

### 🔴 紧急痛点（影响生产可用性）
1. **跨会话消息静默丢失** — `send_message` 报告成功但实际不投递，目标 session 永久挂起。社区已出现 4 条相互标记为 duplicate 的相关 Issue。
2. **Intel Mac 用户被 Cowork 新版本拒之门外** — 一夜之间 4 条回归报告全部针对 Intel Mac，建议官方在 Apple Silicon 之外补充 Intel Mac 兼容性测试矩阵。
3. **Windows 桌面端更新链断裂** — AppX 容器沙箱机制与旧版本进程冲突，导致每次更新都要重启甚至重装。

### 🟡 长期积压需求
1. **基础 UX 设置缺失** — 欢迎横幅、焦点抢占、空行占位等"理应可配置"的行为长期无法关闭。
2. **macOS 沙箱在大型 monorepo 下不可用** — Seatbelt profile 内联方式撞 ARG_MAX 上限，亟需外置策略文件。
3. **计费事故披露与补偿流程不透明** — 7·17 与 8·01 两起事故涉及千美元级金额，缺少公开的 root cause 与修复时间表。

### 🟢 建设性提案
1. **`.claude/rules/` 主题触发器**（#87804）— 补齐 `paths:` 之外的能力，使 rules 可基于主题语义加载。
2. **Auto memory 绑定溯源**（#87783）— 区分"已绑定源"与"未绑定漂移"的记忆，避免陈旧记忆污染上下文。
3. **MCP OAuth scope 可配置**（#83679）— 修复 `.mcp.json` 中自定义 scope 被硬编码默认值覆盖的问题。

---

## 🧭 一句话总结

> 昨日 v2.1.235 在**体验层**（拼写检查、缓存）有所进步，但**底层链路**（Cowork VM、跨会话消息、Windows 更新）的故障让社区焦点集中在稳定性而非新功能；建议关注 Intel Mac 回归与 send_message 故障群的后续官方回复。

---

*数据来源：[anthropics/claude-code](https://github.com/anthropics/claude-code) | 报告生成时间：2026-08-19*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-08-19**

---

## 📌 今日速览

今日 Codex 迎来 **v0.148.0 正式版发布**，TUI 新增 Markdown 导出、会话分叉（fork）与草稿预输入等核心能力。与此同时，**Windows 平台问题集中爆发**——浏览器插件初始化、WSL 仓库识别、Chrome Native Messaging 注册等成为社区讨论焦点，相关 Issue 当日评论数显著攀升。后端层面，**Guardian v2 安全风控体系持续完善**，多项缓存、Token 使用与失败安全（fail-closed）策略相继落地。

---

## 🚀 版本发布

### `rust-v0.148.0`（正式版）🔗 [Release](https://github.com/openai/codex/releases/tag/rust-v0.148.0)

**TUI 体验升级**
- 新增 `/export` 命令，支持将完整 TUI 会话导出为 Markdown，可写入剪贴板或新文件（#37358）
- 新增 `codex exec fork` 命令；TUI 恢复选择器支持会话归档与恢复（#37367/#37369/#37371）
- TUI 初始化期间支持草稿提示预输入

此外，`rust-v0.148.0-alpha.22` 与 `rust-v0.148.0-alpha.23` 两个 alpha 版本同日迭代，说明 0.148 系列仍在密集打磨。

---

## 🔥 社区热点 Issues

| # | Issue | 关键点 | 社区反应 |
|---|-------|--------|----------|
| [#39136](https://github.com/openai/codex/issues/39136) | **Windows 浏览器插件初始化失败**（Trusted RPC 依赖不在可信代码路径） | 影响 26.814.41407 版本；阻塞 Windows 用户使用内置浏览器 | 💬 63 / 👍 20，**今日最热** |
| [#32041](https://github.com/openai/codex/issues/32041) | **VS Code 扩展 26.5707.\* 在 Linux 下打开空白 Webview** | 回退到 26.5623 正常但缺少 5.6-Sol 支持，**回归与新特性矛盾**典型 | 💬 56 |
| [#2880](https://github.com/openai/codex/issues/2880) | **TUI 消息复制/导出为 Markdown**（**已关闭**✅） | 长期呼声最高的特性之一，本次随 v0.148.0 落地 | 💬 31 / 👍 78 |
| [#30408](https://github.com/openai/codex/issues/30408) | **MCP Server 进程泄漏**，单线程可达 9GB+ RSS | app-server 每个线程全量 spawn 全局 MCP，**永不清理**，长期未修 | 💬 29 |
| [#20500](https://github.com/openai/codex/issues/20500) | **同一连接器支持多账号授权** | 用户硬隐私边界需求，是当前诉求最强的 Enhancement | 💬 28 / 👍 107 |
| [#25928](https://github.com/openai/codex/issues/25928) | **VS Code/Cursor 扩展提交 Prompt 在入队前随机消失** | 影响 ChatGPT Pro 20x 用户，**静默丢消息** | 💬 27 |
| [#23930](https://github.com/openai/codex/issues/23930) | **子代理卡片关闭后仍卡在 UI** | macOS Desktop 端，关闭/读回路径与 UI 状态不一致 | 💬 26 |
| [#35119](https://github.com/openai/codex/issues/35119) | **Windows WSL 仓库被识别为非 Git** | 26.721.3404 引入的回归，影响 Windows 主力用户群 | 💬 23 |
| [#39173](https://github.com/openai/codex/issues/39173) | **App/Chrome 浏览器控制失败**（**已关闭**） | 与 #39136 同根因，Trusted RPC 路径问题 | 💬 21 |
| [#23200](https://github.com/openai/codex/issues/23200) | **支持无头远程 Linux 主机，去除桌面常驻依赖** | 让 Codex Mobile 真正成为远程开发控制层 | 💬 19 / 👍 48 |

---

## 🛠️ 重要 PR 进展

| # | PR | 说明 |
|---|----|------|
| [#39322](https://github.com/openai/codex/pull/39322) | **Header 认证强制校验工作区限制** | 用 `chatgpt-account-id` 校验外部 header 凭据，拒绝未授权账号 ID |
| [#39319](https://github.com/openai/codex/pull/39319) | **新增异步用户消息工具** `send_user_message_async` | 模型支持时启用，发送后立即返回 accepted，**轮次不中断** |
| [#39320](https://github.com/openai/codex/pull/39320) | **扩展 OAuth 元数据重定向测试覆盖** | 同源重定向、跨源拒绝、有界超时循环失败均覆盖 |
| [#39316](https://github.com/openai/codex/pull/39316) | **支持 Edu Plus / Edu Pro 账号套餐** | 认证、后端限流映射、app-server schema 同步识别 |
| [#39315](https://github.com/openai/codex/pull/39315) | **Guardian 转录条目的可缓存分块驱逐** | 用有界 buffer 替代"只保留最新 N 条"，**显著提升缓存稳定性** |
| [#39314](https://github.com/openai/codex/pull/39314) | **以捕获的会话环境运行 Hooks** | 配置重载时复用快照，避免环境漂移 |
| [#39312](https://github.com/openai/codex/pull/39312) | **为 Agent 消息添加异步投递元数据** | `delivery: "async"` 标记用户可见但不结束当前轮次的消息 |
| [#39311](https://github.com/openai/codex/pull/39311) | **统一执行审批绑定到 Shell 可执行文件** | 不熟可执行文件即便命令可信也需单独审批，**防间接信任绕过** |
| [#39307](https://github.com/openai/codex/pull/39307) | **Guardian V2 风控错误时 fail-closed** | 配置/分类失败一律提升为高风险，**不再沿用旧的低风险结果** |
| [#39304](https://github.com/openai/codex/pull/39304) | **Guardian v2 风险评分不再写入 rollout 历史** | 恢复/分叉线程视为无历史评分，**首次审批必经正常审核** |

> 其他值得关注：[#39301](https://github.com/openai/codex/pull/39301)（屏蔽 `NODE_REPL_AUTH_TOKEN` 泄漏至子进程）、[#39294](https://github.com/openai/codex/pull/39294)（SQLite 日志批量扩容至 2048/512/10s）、[#39296](https://github.com/openai/codex/pull/39296)（启用 MCP Tool Hooks）、[#39293](https://github.com/openai/codex/pull/39293)（移除 app-server 对 reqwest 的直接依赖）。

---

## 📈 功能需求趋势

从 Issue 标签与描述中可提炼出五大社区关注方向：

1. **Windows 平台稳定性**（占近期高评论 Issue 约 40%）
   WSL 仓库识别、Chrome 浏览器插件、Native Messaging 注册、WSL 集成终端、Remote Control 注册、context compaction 404——Windows 几乎每个核心功能都有未解决问题。
2. **MCP 生态治理**
   进程泄漏（#30408、#38754）、OAuth 刷新令牌僵死（#39054）、自定义 Responses 提供商不识别 MCP 工具（#31354），反映 MCP 集成仍是**生产化痛点**。
3. **多账号与隐私边界**
   单连接器多账号授权（#20500，107 👍）呼声最高，企业用户尤为迫切。
4. **远程/无头工作流**
   不依赖桌面常驻的 Linux 远程主机控制（#23200）、Remote 接入大线程性能（#38787），指向 **Codex 作为"移动控制层 + 云端执行层"** 的清晰产品方向。
5. **TUI/会话管理能力**
   会话分叉、归档、Markdown 导出（已落地于 v0.148.0）验证了开发者对此类"日常高频"能力的真实刚需。

---

## 💬 开发者关注点（高频痛点）

| 痛点 | 代表 Issue |
|------|------------|
| **进程/资源不清理** | MCP 进程泄漏、stdio MCP 重复 spawn 不回收 |
| **静默失败** | Prompt 入队前消失、子代理卡片卡死、Agent 状态不一致 |
| **回归与新特性无法兼得** | 新版本引入空白 Webview / WSL Git 误判，回退又失功能 |
| **跨平台能力不均衡** | Linux、WSL、Chrome 扩展链路反复出现注册/路径类问题 |
| **自定义模型/Provider 集成受限** | Responses API + MCP 工具、自定义模型上下文窗口不一致 |
| **教育/企业账号体系覆盖不足** | Edu Plus/Pro 套餐识别直到本周才补齐（#39316） |

---

**数据范围**：GitHub `openai/codex` 仓库，2026-08-18 至 2026-08-19。
**Report Generator**：基于 Releases / Issues / Pull Requests 公开数据汇总。

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-08-19**

---

## 📌 今日速览

今日社区活跃度集中在 **Auto Memory 系统稳定性**、**子代理（Subagent）可靠性** 与 **浏览器代理增强** 三大方向。夜间版 `v0.56.0` 持续集成 SSR Agent 系列修复，涵盖隐私提示文案、集成测试类型安全等细节。同时，多个 P1 级子代理挂起/状态误报问题获得维护者重点关注，提示即将到来的稳定版可能在子代理行为一致性上有重要修复。

---

## 🚀 版本发布

### v0.56.0-nightly.20260818.g194edea47

夜间快照版，集成两处 SSR Agent 问题修复：

- **#28820** —— 隐私提示措辞与选项选择优化，提升用户首次启动体验（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28820)）
- 集成测试中的 TypeScript strict-null 错误修复，强化类型安全

> Nightly 版本面向尝鲜用户，建议配合 issue tracker 验证回归。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 热度 | 摘要 |
|---|-------|------|------|
| [#22323](https://github.com/google-gemini/gemini-cli/issues/22323) | **P1** Subagent 在 MAX_TURNS 后错误报告为 GOAL 成功 | 💬12 👍2 | `codebase_investigator` 实际撞到回合上限却仍上报 success，导致用户无法感知中断，掩盖异常 |
| [#21409](https://github.com/google-gemini/gemini-cli/issues/21409) | **P1** Generalist agent 永久挂起 | 💬8 👍8 | 委派到通用代理后无响应长达一小时；社区点赞最多，说明复现门槛低且影响面广 |
| [#19873](https://github.com/google-gemini/gemini-cli/issues/19873) | **P2** 零依赖 OS 沙箱 + 执行后意图路由 | 💬8 👍1 | 提议让 Gemini 3 系列模型以原生 Bash 习惯运作，同时通过沙箱保障安全 |
| [#24353](https://github.com/google-gemini/gemini-cli/issues/24353) | **P1** 组件级行为评估 EPIC | 💬7 👍0 | 在已有 76 项行为评估基础上，构建更精细的组件级评测体系，跟踪 6 款支持模型的回归 |
| [#22745](https://github.com/google-gemini/gemini-cli/issues/22745) | **P2** 评估 AST 感知文件读取/搜索/映射 | 💬7 👍1 | 通过语法树精确读取方法边界、降低 token 噪音，是 Tactful Extraction 路线的上游铺垫 |
| [#21968](https://github.com/google-gemini/gemini-cli/issues/21968) | **P2** Gemini 极少主动调用自定义技能与子代理 | 💬6 👍0 | 用户反映需要显式指令才会触发 skills，模型自主调度能力偏弱 |
| [#26522](https://github.com/google-gemini/gemini-cli/issues/26522) | **P2** Auto Memory 死循环处理低信号会话 | 💬5 👍0 | 提取代理判定为低信号后会反复回到 inbox，建议加边界条件 |
| [#26525](https://github.com/google-gemini/gemini-cli/issues/26525) | **P2** Auto Memory 确定性脱敏与日志降噪 | 💬4 👍0 | 当前依赖模型提示词做脱敏，存在敏感数据进入上下文的窗口期，需要前置处理 |
| [#25166](https://github.com/google-gemini/gemini-cli/issues/25166) | **P1** Shell 命令执行后卡在 "Waiting input" | 💬4 👍3 | 简单 CLI 命令完成后界面仍显示运行中，影响体感流畅度 |
| [#22232](https://github.com/google-gemini/gemini-cli/issues/22232) | **P3** 浏览器代理会话接管与锁恢复 | 💬4 👍0 | `BrowserManager` 当前 fail-fast 策略导致持久会话下无法自愈，需要自动化接管 |

> **解读**：P1 集中在子代理状态机与 shell 终端交互；P2 在内存系统质量与 AST 工具演进两个战略方向并行推进。

---

## 🛠️ 重要 PR 进展（Top 10）

| # | PR | 状态 | 要点 |
|---|----|------|------|
| [#28892](https://github.com/google-gemini/gemini-cli/pull/28892) | 🔓 OPEN | 修复 `isValidContent` 中误删带工具/媒体的空文本回合，避免上下文裁剪丢包（[@DavidAPierce](https://github.com/google-gemini/gemini-cli/pull/28892)） |
| [#21661](https://github.com/google-gemini/gemini-cli/pull/21661) | ✅ CLOSED | `AskUserDialog` 选项描述前导空格清理（[@fresh3nough](https://github.com/google-gemini/gemini-cli/pull/21661)） |
| [#28898](https://github.com/google-gemini/gemini-cli/pull/28898) | 🔓 OPEN | 强化 PR 生成器子进程执行安全，避免凭证泄露到沙箱外（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28898)） |
| [#28883](https://github.com/google-gemini/gemini-cli/pull/28883) | ✅ CLOSED | SSR 修复 #20079：`~/.gemini/agents/` 下符号链接 Markdown 不被识别（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28883)） |
| [#28877](https://github.com/google-gemini/gemini-cli/pull/28877) | ✅ CLOSED | SSR 修复 #18551：流式内容中连续空格触发的误报循环检测（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28877)） |
| [#28876](https://github.com/google-gemini/gemini-cli/pull/28876) | ✅ CLOSED | SSR 修复 #18062：Cloud Shell 默认项目 404 处理（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28876)） |
| [#28873](https://github.com/google-gemini/gemini-cli/pull/28873) | ✅ CLOSED | SSR 修复 #28512：OAuth 回调超时未捕获 promise rejection（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28873)） |
| [#28871](https://github.com/google-gemini/gemini-cli/pull/28871) | ✅ CLOSED | SSR 修复 #14724：`compact` 匹配器迁移到 `compress` 枚举值（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28871)） |
| [#28870](https://github.com/google-gemini/gemini-cli/pull/28870) | ✅ CLOSED | SSR 修复 #21783：ACP 模式下先发出 pending tool_call 再请求权限（[@joneba-google](https://github.com/google-gemini/gemini-cli/pull/28870)） |
| [#18240](https://github.com/google-gemini/gemini-cli/pull/18240) | ✅ CLOSED | Markdown 表格智能列宽与文本换行渲染（[@devr0306](https://github.com/google-gemini/gemini-cli/pull/18240)） |

> **趋势观察**：joneba-google 主导的 SSR Agent 修复集群（#28871-#28898）单日合并 7 个 PR，覆盖 OAuth、Cloud Shell、ACP 协议、符号链接等长尾问题，体现自动化修复流水线的产能。

---

## 📈 功能需求趋势

从 50 条活跃 issue 提炼出五大方向：

1. **🤖 子代理（Subagent）可靠性**
   - 状态机准确性（#22323）、挂起恢复（#21409）、bug 报告上下文缺失（#21763）
   - 配置覆盖未被识别（#22267）、轨迹可见性（#22598）
   - 占比最高，反映 Gemini 3 系列模型子代理仍是核心能力短板

2. **🧠 Auto Memory 系统打磨**
   - #26516 / #26522 / #26523 / #26525 四条齐发，集中在"低信号会话去重、确定性脱敏、无效 patch 隔离"
   - 长期记忆是 CLI 差异化的关键，需在隐私/质量之间找到平衡

3. **🌐 浏览器代理（Browser Agent）韧性**
   - #22232 / #22267 / #21983 围绕会话锁定、Wayland 兼容、`settings.json` 覆盖
   - 真实用户场景复杂，fail-fast 策略需要让位给自动恢复

4. **🔐 安全与沙箱**
   - 零依赖 OS 沙箱 + 意图路由（#19873）
   - Auto Memory 凭证脱敏前置（#26525）
   - 扩展环境变量注入防护（#28863 已合）
   - 沙箱化是向企业/合规场景推进的前提

5. **🧰 工具智能化**
   - AST 感知文件读取/搜索（#22745 / #22746 / #19561）
   - 组件级评估体系（#24353）
   - Tactful Extraction 削减 36.6k/turn 的基线 token 消耗

---

## 💬 开发者关注点

**高频痛点：**

- **⏱ 终端交互体感**：#25166（Shell 卡 "Waiting input"）、#28641（窄宽度 ghost text 死循环，已修）、#21924（终端 resize 闪烁）—— Ink 渲染层需要系统性升级。
- **🔁 行为可观测性差**：bug 报告不包含子代理上下文（#21763）、子代理轨迹难分享（#22598）、Auto Memory 状态不透明（#26516），开发者调试心智负担高。
- **🧹 工作区污染**：#23571 反映模型常在临时目录生成脚本，仓库清理繁琐，需要更强的写入沙箱约束。
- **🧠 模型自主性**：#21968 指出 Gemini 极少主动调用 skills/sub-agents，与 Claude Code 的主动调度形成对比。
- **🔌 平台兼容**：#21983（Wayland）、#28869（gVisor runsc）等非主流环境接连暴雷，需补齐兼容性矩阵。

**高频需求：**

- 工具数量上限的智能过滤（#24246 指出 > 128/400 触发 400）
- 模型"自我认知"准确性（#21432 希望 CLI 能准确描述自身 flag/hotkey）
- 危险命令（`git reset --force` 等）的安全护栏（#22672）

---

**日报由社区动态自动整理，链接数据基于过去 24 小时窗口。** 如需深入某条 issue/PR 的技术细节，可点击上方链接直达 GitHub。

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**日期：2026-08-19** | **数据来源：github.com/github/copilot-cli**

---

## 📌 今日速览

**v1.0.81-1 正式发布**，带来 Gemini 3.7 Flash 模型支持、按 Agent 使用量统计输出、Schedule Manager 交互优化等多项更新。然而，**同日集中爆发的多个 Sandbox 相关 Bug**（#4521、#4522、#4524、#4516）反映出新版本在沙盒策略执行层面存在回归问题，引发社区高度关注。此外，组织级模型目录缺失（#4390）、BYOK 凭据热刷新（#3682）等长期议题持续被开发者追踪。

---

## 🚀 版本发布

### v1.0.81-1
| 类别 | 内容 |
|------|------|
| **新增** | • 支持 Gemini 3.7 Flash 模型<br>• `/sandbox` 中新增 `Ctrl+E` 直接打开 settings.json<br>• `--usage-output-file` JSON 输出新增 per-agent 用量指标 |
| **改进** | • Schedule Manager 中可用 `x` 键删除已调度的 `/every` 和 `/after` 提示 |
| **修复** | • 修复关闭 allow-all 时遗留问题（描述被截断） |

🔗 [查看完整 Release](https://github.com/github/copilot-cli/releases/tag/v1.0.81-1)

> ⚠️ **注意事项**：该版本同时引入了 Sandbox 相关回归问题，建议升级前关注 #4522。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 + 👍 数）精选 Top 10：

### 1. [#4390 组织级启用的模型在目录中缺失](https://github.com/github/copilot-cli/issues/4390) ⭐ 7
- **痛点**：Copilot Business 组织明确启用的 Claude Sonnet 5/Opus 5、Kimi K3 等模型在 CLI 有效模型目录中不可见
- **社区反应**：10 条评论、7 个 👍，影响所有企业用户
- **重要性**：直接阻碍企业付费用户在 CLI 中使用最新顶级模型

### 2. [#2904 自定义 Agent 应支持 reasoning effort 配置](https://github.com/github/copilot-cli/issues/2904) ⭐ 20
- **痛点**：`.agent.md` 自定义 Agent 的 frontmatter 仅支持 `model` 字段，无法按 Agent 配置推理强度
- **社区反应**：20 个 👍（本期最高）、7 条评论
- **重要性**：Agent 灵活性是 Copilot CLI 核心卖点，缺少细粒度控制影响高级用户定制能力

### 3. [#2958 支持按模式配置默认模型（plan vs autopilot）](https://github.com/github/copilot-cli/issues/2958) ⭐ 16
- **痛点**：用户希望 plan mode 和 autopilot mode 能使用不同的默认模型
- **社区反应**：16 个 👍、4 条评论
- **重要性**：反映了用户对"任务场景匹配模型"的精细化需求

### 4. [#4313 允许滚动浏览当前对话历史](https://github.com/github/copilot-cli/issues/4313)
- **痛点**：鼠标滚轮或 PageUp/PageDown 无法在 CLI 中浏览历史对话
- **社区反应**：8 条评论
- **重要性**：基础终端 UX 缺陷，长会话场景下严重影响体验

### 5. [#3682 支持不重启 CLI 刷新 BYOK 凭据](https://github.com/github/copilot-cli/issues/3682) ⭐ 6
- **痛点**：使用短期凭据（Entra ID、AWS STS、OIDC JWT）的 BYOK 提供商，CLI 仅在启动时读取 `COPILOT_PROVIDER_API_KEY`
- **社区反应**：6 个 👍、2 条评论
- **重要性**：企业 SSO 场景的刚需，凭据过期导致会话中断

### 6. [#3162 (CLOSED) 1.0.42 误报自定义 MCP 服务器被策略阻止](https://github.com/github/copilot-cli/issues/3162)
- **痛点**：已在 MCP 注册表中的服务器被 CLI 误判为 blocked
- **社区反应**：7 条评论、1 个 👍
- **重要性**：本期已被关闭，反映出 MCP 策略匹配机制已有改进

### 7. [#4096 (CLOSED) 第三方 MCP OAuth token 未桥接至 CLI 会话](https://github.com/github/copilot-cli/issues/4096)
- **痛点**：通过 GitHub Copilot App UI 完成 OAuth 认证后，Atlassian MCP 工具在 CLI 中不可用
- **社区反应**：6 条评论、2 个 👍
- **重要性**：App-CLI 凭据传递链路关键问题，本期已关闭

### 8. [#4522 1.0.81 强制启用沙盒覆盖用户配置](https://github.com/github/copilot-cli/issues/4522) ⭐ 5
- **痛点**：即便用户显式设置 `sandbox.enabled=false`，1.0.81-1 在服务端策略未确定时仍强制启用本地沙盒
- **社区反应**：5 个 👍、2 条评论
- **重要性**：**新版本重大回归**，直接影响用户工作流

### 9. [#4490 Atlassian MCP OAuth 认证在 1.0.80 中失效](https://github.com/github/copilot-cli/issues/4490)
- **痛点**：1.0.80 引入 RFC 8414 §3.3 回归，Atlassian MCP 认证失败（1.0.78 正常）
- **社区反应**：3 条评论
- **重要性**：标准合规性回归，影响所有 Atlassian 用户

### 10. [#4521/#4524/#4516 Sandbox 系列问题](https://github.com/github/copilot-cli/issues/4521)
- **痛点**：#4521 沙盒无法关闭；#4524 沙盒禁止使用 git；#4516 JVM 进程不识别沙盒 RW 授权
- **社区反应**：3+0+0 个 👍
- **重要性**：**新版本集中爆发的沙盒体验问题**，需官方优先级修复

---

## 📥 重要 PR 进展

> **本期统计：仅 1 条 PR 更新**，活跃度显著偏低。

### [#3163 ViewSonic monitor](https://github.com/github/copilot-cli/pull/3163)
- **内容**：声称针对 #2591、#3561、#3559 的显示器/Runner 相关修复
- **状态**：开放中，0 评论、0 👍
- **评估**：描述不清晰，建议关注其他更高质量的 Issue 讨论

📊 **观察**：PR 提交量明显减少，可能与近期发版节奏调整或开发者集中测试 1.0.81 相关。

---

## 📈 功能需求趋势

从本期 36 条活跃 Issue 中提炼出社区最关注的**六大方向**：

| 方向 | 代表 Issue | 热度指标 |
|------|------------|----------|
| 🤖 **模型控制精细化** | #2904、#2958、#4390 | 累计 43 👍 |
| 🔌 **MCP 生态完善** | #3162、#4096、#4392、#4490、#4515 | 累计 5 👍 |
| 🛡️ **沙盒策略改进** | #4521、#4522、#4524、#4516、#4206 | 累计 8 👍 |
| 🔐 **认证与凭据管理** | #3682、#4490 | 累计 6 👍 |
| 🖥️ **终端 UX 优化** | #4313、#4520、#4482 | 累计 2 👍 |
| 🧩 **Agent/Skill 能力** | #4438、#1990、#4511 | 累计 5 👍 |

---

## 💡 开发者关注点

综合本期 Issue 数据，开发者反馈集中在以下**五大痛点**：

### 1. 🚨 新版本沙盒机制引发信任危机
v1.0.81-1 上线当日即出现 4 条以上沙盒相关 Bug 报告，覆盖"无法关闭"、"禁止 git"、"JVM 不识别授权"、"覆盖用户配置"等场景。**建议企业用户暂缓升级，个人用户升级前先备份配置**。

### 2. 🔄 凭据生命周期管理缺失
BYOK 短期凭据、OAuth token 刷新等场景下，CLI 缺乏热更新能力，被迫重启进程打断工作流（#3682、#4392、#4490）。

### 3. 🎛️ Agent/模型粒度控制不够
"按 Agent 配置推理强度"、"按模式配置默认模型"等精细化需求持续走高，反映出 Copilot CLI 在**多 Agent 协作**方向仍有较大改进空间（#2904、#2958、#1990）。

### 4. 🧹 MCP 资源管理存在泄漏风险
多处 Issue 指向 stdio MCP 子进程无法被回收（#3698、#4392），在长会话场景下可能导致 CPU 占用飙升。

### 5. 📜 文档与配置一致性
#812 揭示的 "AGENTS.md 启动后不重载" 长达 8 个月未解决，#4523 提到的插件市场缺乏搜索过滤——**官方文档与实际行为脱节**仍是常见槽点。

---

## 📊 数据总览

| 指标 | 数值 |
|------|------|
| 新版本发布 | 1 (v1.0.81-1) |
| 活跃 Issue | 36 条 |
| 已关闭 Issue | 4 条 |
| 活跃 PR | 1 条 |
| 最高 👍 Issue | #2904 (20 👍) |
| 最高评论 Issue | #4390 (10 条) |

---

*本报告基于 2026-08-18 GitHub 数据自动生成，仅供参考。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**2026-08-19**

---

## 📌 今日速览

今日社区活跃度处于较低水平，过去 24 小时仅有 **2 条 Issue** 和 **2 条 PR** 更新，无新版本发布。值得关注的两大动态：其一，开发者反馈 Web UI 对非 Kimi（OpenAI 兼容）提供商存在消息渲染兼容性问题（[#2607](https://github.com/MoonshotAI/kimi-cli/issues/2607)）；其二，社区量化交易博主公开了 K3 + Kimi Code 在 Freqtrade 策略生成场景的完整基准测试报告（[#2608](https://github.com/MoonshotAI/kimi-cli/issues/2608)），为项目在金融垂直场景的应用提供了实证参考。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布，本节略。*

---

## 🔥 社区热点 Issues

> ⚠️ **说明**：过去 24 小时仅更新 2 条 Issue，以下为全部内容。

### 1. [#2607] Web UI 对非 Kimi（OpenAI 兼容）提供商的消息渲染 Bug
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2607
- **作者**：@chenxupeng1990-eng
- **社区反应**：💬 1 条评论 | 👍 0
- **为什么重要**：该 Bug 暴露了 Web UI 在多提供商架构下的兼容性问题——流式输出时显示正常，但任何 remount 操作（切换 tab、刷新页面、重新进入会话）后，自定义 OpenAI 兼容提供商返回的 assistant 消息会按 stream delta 逐行渲染，导致消息体被压缩成"窄长的竖列"。这类渲染缺陷直接影响企业级用户使用第三方 LLM 提供商时的体验。
- **状态**：OPEN，等待维护者确认。

### 2. [#2608] K3 + Kimi Code 在量化策略生成上的开源基准测试报告
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2608
- **作者**：@frank-quant
- **社区反应**：💬 0 条评论 | 👍 0
- **为什么重要**：B站/YouTube 科技博主公开两期使用 Kimi Code CLI 作为主驱动编写的 ETH 永续期货策略（基于 Freqtrade），并附带完整开源报告。这是首例面向中文社区的、具备约束条件（交易成本、滑点、风险敞口）的量化策略生成实测案例，对 Kimi Code CLI 在金融领域的推广具有标杆意义。
- **状态**：OPEN（实为分享/反馈，非 Bug 报告）。

---

## 🛠️ 重要 PR 进展

> ⚠️ **说明**：过去 24 小时仅更新 2 条 PR，以下为全部内容。

### 1. [#848] fix(kaos): log ssh failures when enabled — ✅ CLOSED
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/848
- **作者**：@powerfooI
- **内容**：修复 `kaos` 模块中 SSH 失败时未记录日志的问题。在 SSH 功能启用但连接失败时，之前缺乏可观测性，排障困难。该 PR 补充了失败日志，便于开发者快速定位网络/认证问题。
- **状态**：已关闭（由 Devin AI Review 协助评审），合并状态未明确披露。

### 2. [#2606] Dev/knowledge plane — 🟡 OPEN
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2606
- **作者**：@SoMiReMiReDo
- **内容**：提议新增"开发/知识平面（Dev/knowledge plane）"功能模块。根据 PR 描述推测，该模块可能用于分层组织开发上下文与项目知识文档，提升 Kimi Code CLI 在大型项目中的工程化能力。
- **状态**：OPEN，提交者已声明尚未与维护者进行前置讨论，存在被关闭风险。

---

## 📈 功能需求趋势

从今日仅有的 2 条 Issue 中可提炼以下方向：

| 趋势方向 | 证据 | 优先级推断 |
|---------|------|----------|
| **多提供商兼容性** | #2607 反映 OpenAI 兼容提供商渲染异常 | 🔴 高（影响第三方接入） |
| **金融/量化场景应用** | #2608 实证 K3 + Kimi Code 在量化策略生成的能力 | 🟡 中（垂直落地案例） |
| **远程执行可观测性** | #848 反映 kaos/SSH 调试痛点 | 🟡 中（运维友好性） |
| **知识/上下文管理** | #2606 提议"知识平面" | 🟢 待观察（需维护者确认） |

> 💡 **洞察**：今日数据虽少，但 #2607 暴露的渲染兼容性问题具有普遍性——随着 OpenAI 兼容 API 标准被广泛采用，CLI 工具的提供商适配层质量将成为开发者选型的关键指标。

---

## 👨‍💻 开发者关注点

1. **渲染层健壮性**：Web UI 在状态恢复场景（remount、reload）下的消息渲染一致性是核心痛点，说明项目在前端状态管理上仍有改进空间。

2. **远程/SSH 调试透明化**：#848 反映出开发者对失败可观测性的需求——CLI 工具静默失败会严重影响排障效率。

3. **垂直场景验证缺口**：#2608 表明社区用户有强烈意愿在金融量化等高价值场景验证 Kimi Code CLI 的能力，但项目本身缺乏官方的垂直场景基准。

4. **贡献者引导流程**：#2606 提交者明确表示"未事先与维护者讨论"，说明项目贡献者引导文档（CONTRIBUTING）可能需要更明确地强调 RFC/discussion 前置步骤。

---

## 📊 数据概览

| 指标 | 数量 | 备注 |
|------|------|------|
| 新 Release | 0 | — |
| 新 Issue | 2 | 1 Bug + 1 分享 |
| 新 PR | 2 | 1 已关闭 + 1 待审 |
| 总评论数 | 1 | 活跃度偏低 |
| 总点赞数 | 0 | 尚未形成社区热度 |

---

*本报告基于 2026-08-19 采集的 GitHub 公开数据生成，仅供参考。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-08-19**

---

## 1. 今日速览

今日 OpenCode 仓库无版本发布,但社区活跃度仍维持高位。讨论焦点集中在 **Zen 配额与计费异常**(多个用户报告余额未生效、请求被误限流)以及 **性能与存储问题**(event 表膨胀、上下文缓存失效导致本地 LLM 推理变慢)。同时,多份针对近一周回归 Bug 的 PR 陆续合入,涉及 message ID 翻转、Qwen 采样参数、子 agent 工具契约等关键修复。

---

## 2. 版本发布

过去 24 小时内无新版本发布。

---

## 3. 社区热点 Issues

下列 10 条 Issue 代表当前社区最关注的痛点与诉求,按综合热度(评论数 + 反应数)排序:

| # | Issue | 状态 | 关注点 | 链接 |
|---|-------|------|--------|------|
| 1 | **#3787 Linear Agent 集成** | CLOSED | 呼声极高(👍34),希望将 Linear Issues 直接分配给 OpenCode Agent,实现 Issue → PR 全自动化 | [查看](https://github.com/anomalyco/opencode/issues/3787) |
| 2 | **#32149 请求无响应卡死** | OPEN | 提交 prompt 后进入"thinking"状态后无回复,15 条评论,严重影响日常可用性 | [查看](https://github.com/anomalyco/opencode/issues/32149) |
| 3 | **#7648 TUI 流式滚动抑制** | CLOSED | 用户阅读时希望不被自动滚到底,呼声较高(👍18),体验型高频改进 | [查看](https://github.com/anomalyco/opencode/issues/7648) |
| 4 | **#26338 接入 CommandCode Provider** | CLOSED | 获赞最多(👍36),反映社区对新模型/服务接入的强烈需求 | [查看](https://github.com/anomalyco/opencode/issues/26338) |
| 5 | **#7226 /resume 与 /pause 命令** | CLOSED | 高票功能(👍28),弥补当前需 ESC + 重输提示的中断体验 | [查看](https://github.com/anomalyco/opencode/issues/7226) |
| 6 | **#33495 Zen 余额未绕过免费额度** | OPEN | 付费用户仍被 200 次/免费额度限制,直接关系到商业信任,7 条评论 | [查看](https://github.com/anomalyco/opencode/issues/33495) |
| 7 | **#37489 切换模式/压缩时上下文缓存失效** | OPEN | 本地 LLM(vLLM/Ollama)性能严重下降,影响大型项目体验 | [查看](https://github.com/anomalyco/opencode/issues/37489) |
| 8 | **#42729 引入 Qwen3.8-27B** | OPEN | 持续扩展 OpenCode Go 订阅模型目录的代表性请求 | [查看](https://github.com/anomalyco/opencode/issues/42729) |
| 9 | **#42935 OpenCode Go 20 分钟耗尽配额** | OPEN | DeepSeek V4 Flash 缓存骤降为 0 后配额被快速耗尽,疑似计费/缓存 Bug | [查看](https://github.com/anomalyco/opencode/issues/42935) |
| 10 | **#39831 Zen: gpt-5.6-luna/terra 持续 403** | OPEN | 同 Provider 下 nano/4 系列正常,仅 luna/terra 失败,定位上游接入问题 | [查看](https://github.com/anomalyco/opencode/issues/39831) |

**补充关注**:`#43303`(message ID 时间戳翻转导致会话恢复/历史回退异常)与 `#43297`(V2 subagent 工具契约错误要求 sessionID)虽新开不久,但属于会话层核心问题,值得关注后续。

---

## 4. 重要 PR 进展

| # | PR | 状态 | 内容摘要 | 链接 |
|---|----|------|----------|------|
| 1 | **#32370 加入 Linux 剪贴板 primary buffer 支持** | OPEN | 新增 `linux_clipboard_selection` 配置,默认使用 Ctrl+C/V,Linux 桌面体验完善 | [查看](https://github.com/anomalyco/opencode/pull/32370) |
| 2 | **#43314 图像附件解码失败时降级而非报错** | OPEN | 针对 AVIF/HEIC/BMP/TIFF 无法被 Photon 缩放或超尺寸导致整个 prompt 失败的问题 | [查看](https://github.com/anomalyco/opencode/pull/43314) |
| 3 | **#43310 移除 Qwen 模型硬编码采样参数** | CLOSED | 停止强制 `temperature:0.55 / top_p:1`,尊重 Provider/服务端默认;回归测试覆盖 Qwen3.8/Qwen3-Coder | [查看](https://github.com/anomalyco/opencode/pull/43310) |
| 4 | **#43309 标题生成字数可配置** | OPEN | 新增 `title_max_words` 配置,标题 Agent 按上限截断,避免 TUI 标题过长 | [查看](https://github.com/anomalyco/opencode/pull/43309) |
| 5 | **#43308 拖拽识别仅匹配文件** | OPEN | 文本/链接拖拽不再触发附件挂载,文件拖拽使用专属 MIME,沿用 subagent 会话卡片 | [查看](https://github.com/anomalyco/opencode/pull/43308) |
| 6 | **#43282 暴露子代理合法 ID** | OPEN | 修复 V2 subagent 工具描述未列出合法 agent ID,补足 #36761 | [查看](https://github.com/anomalyco/opencode/pull/43282) |
| 7 | **#42978 修复 Worktree 分支显示** | OPEN | 解决手动创建的 Git Worktree 在 Desktop 中分支显示错误(#42976) | [查看](https://github.com/anomalyco/opencode/pull/42978) |
| 8 | **#42520 文档新增 SCX.ai Provider** | OPEN | 同步 models.dev 接收的 Provider 注册,文档侧完善 | [查看](https://github.com/anomalyco/opencode/pull/42520) |
| 9 | **#29831 修复 Windows 分离子进程挂起** | OPEN | 在进程退出时即 resolve,避免子进程继续占 stdout 导致 Agent 永久等待 | [查看](https://github.com/anomalyco/opencode/pull/29831) |
| 10 | **#43306 文档新增 SuperCompress MCP 示例** | CLOSED | 上下文压缩类 MCP Server 文档示例,风格与 Sentry/Context7/Grep 对齐 | [查看](https://github.com/anomalyco/opencode/pull/43306) |

---

## 5. 功能需求趋势

从近 24 小时活跃 Issue 提炼,社区当前优先关注的方向:

- **🤖 多 Agent 编排与协作**:Subagent 工具契约修复(#43297)、合法 ID 暴露(#43282)显示 Agent 生态在快速演进中亟需更稳定的底层接口。
- **🔌 第三方工作流集成**:Linear Agent(#3787)、CommandCode(#26338)、Google Gemini schema 修复(#34130)说明社区希望 OpenCode 进一步嵌入项目管理与更广泛的 Provider。
- **🧠 模型目录扩展**:Qwen3.8-27B(#42729)、SCX.ai 文档化(#42520)反映出对 **OpenCode Go/Zen 订阅模型池** 的持续扩容需求。
- **🛠️ 开发者交互体验改进**:TUI 滚动抑制(#7648)、/resume 与 /pause(#7226)、标题长度可配置(#43309)、Linux 剪贴板支持(#32370)等体验型需求保持高密度。
- **📁 多工程/多 Worktree 工作流**:#42315、#43316 反映一个代码仓库跨目录/Worktree 协作的痛点,有望成为后续 V2 桌面端的重点。

---

## 6. 开发者关注点

汇总高频痛点,按严重程度排序:

1. **💸 计费与配额正确性**(最敏感)
   - Zen 余额未生效仍被限流(#33495、#43208)
   - Go 配额 20 分钟耗尽,缓存读取异常归零(#42935)
   - TUI 报价与 Web 不一致(#39891)
   - 多个用户已升级订阅仍被按免费用户处理,直接影响商业口碑。

2. **💾 存储与性能膨胀**
   - `event` 表存储完整消息快照,导致 `opencode.db` 达 GB 级(#41175、#42748 quadratic writes)
   - 上下文缓存失效影响本地 LLM 推理速度(#37489)
   - Message ID 48 位时间戳回绕(2026-08-14)导致会话排序错误(#43303)

3. **🧩 Provider 兼容性**
   - Gemini 400 schema 错误,nullable union 处理不当(#34130)
   - Zen: gpt-5.6-luna/terra 持续 403(#39831)
   - 硬编码采样参数无法关闭(#42775,已由 #43310 修复)

4. **🪟 稳定性与崩溃**
   - App 完全无响应(#43296)
   - prompt 提交后无回复卡死(#32149)
   - Web V2 窄屏控件与发送按钮重叠(#43295)

5. **🧭 项目与路径处理**
   - 移动目录后仍打开旧路径(#34737)
   - 同 git remote 不同本地 clone 产生相同 project_id(#42315)

**总结建议**:团队近期宜优先处理 **Zen/Go 计费链路回归** 与 **会话/事件存储的体积与一致性** 两大方向,这两类问题直接影响用户留存与商业信任,且相关议题正在快速累积。

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-08-19

> 数据来源：[badlogic/pi-mono](https://github.com/badlogic/pi-mono) · 监控窗口：过去 24 小时

---

## 📌 今日速览

今天 Pi 仓库没有新版本发布，活跃度集中在 **TUI 渲染性能** 和 **Provider/扩展接口的健壮性** 两条主线：一方面多位用户报告长会话下 TUI 闪烁、跳屏、整屏卡顿，相关 PR（#8327、#8330）已合并；另一方面围绕扩展 hook（`agent_recovery_exhausted`、pre-persistence 消息替换、skill 命名空间）、OpenAI/Anthropic/Bedrock 兼容层（超时、fallback 计费、reasoning 回传）以及会话文件并发写入安全（#8333）提交了大量修复与 RFC。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues

> 选取标准：影响范围、复现频率、安全/数据完整性意义、社区讨论深度。

| # | Issue | 重要性 | 链接 |
|---|-------|--------|------|
| **#8251** | GitHub Enterprise Copilot 登录后并发策略请求触发 HTTP 429，登录被自身限流"自废武功" | 影响所有 GHE Copilot 用户；`Promise.all` 并发拉取所有模型策略是典型反模式 | [earendil-works/pi#8251](https://github.com/earendil-works/pi/issues/8251) |
| **#8281** | 长会话（~10k 行）下 TUI 全屏闪烁；任何视口上方内容变化都会触发整屏重绘 | 社区高频抱怨的 UX 问题，#8327 PR 已尝试缓解（yield 长 markdown 渲染） | [#8281](https://github.com/earendil-works/pi/issues/8281) |
| **#6339** | 自动压缩阈值在 agentic 运行期间从不评估；只在 `run` 边界检查 | 老 issue（07-05 创建）持续翻新，说明社区对上下文管理体验不满意 | [#6339](https://github.com/earendil-works/pi/issues/6339) |
| **#8138** ⬜ OPEN | openai-codex "Sorry, something went wrong" 应被归类为可重试错误 | 影响 Codex 用户可用性，目前作为错误直接透传 | [#8138](https://github.com/earendil-works/pi/issues/8138) |
| **#8323** | OpenAI 客户端创建时未传 `timeout`，回落到 SDK 默认 600s；本地慢思考模型 10+ 分钟被截断 | provider 通用缺陷，影响所有 OpenAI 兼容路径 | [#8323](https://github.com/earendil-works/pi/issues/8323) |
| **#8286** | openai-completions 走真实网络（非 loopback）时静默失败或幻觉输出；仅 127.0.0.1 100% 成功 | 网络栈或本地 resolver 问题，对自托管 Ollama 用户影响巨大 | [#8286](https://github.com/earendil-works/pi/issues/8286) |
| **#8282** | Windows `find` 扫描大目录死进程，CPU 100% 占用 20 分钟无输出 | 建议默认改用 `fd`；社区反馈强烈的 Windows 体验问题 | [#8282](https://github.com/earendil-works/pi/issues/8282) |
| **#8300** | Pi 允许两个进程同时打开同一 session JSONL，无 in-use 锁，导致分支分叉、跨窗口投递 | **数据完整性/安全**类严重问题，#8333 PR 正是为此而生 | [#8300](https://github.com/earendil-works/pi/issues/8300) |
| **#8325** | 建议增加 `disabledCommands` 配置禁用内置斜杠命令（/share、/export 等） | **隐私**关注：/share 默认上传完整会话到 GitHub Gist，企业用户敏感 | [#8325](https://github.com/earendil-works/pi/issues/8325) |
| **#8331** | Provider SSE 流中途停顿时 agent 循环永久挂起 | 与 #8330 PR 互为修复对应，已合并 | [#8331](https://github.com/earendil-works/pi/issues/8331) |

---

## 🛠 重要 PR 进展

| # | PR | 说明 | 状态 |
|---|----|------|------|
| **#8333** | 强制单写者持有 session 文件，校验持久化物理尾部，并加入可选的 provider payload lineage 审计 | **会话安全/取证**：对应 #8300 提到的"双进程写同一文件"风险；fail-closed 设计 | ✅ CLOSED |
| **#8330** | Agent 流不活动 watchdog：provider SSE 流停滞不再永久阻塞 | 对应 #8331，UI 不卡、只杀流；可恢复上下文 | ✅ CLOSED |
| **#8327** | TUI 长 markdown 渲染让步（yield）：通过 `RenderContext` + 截止时间回调防止大字符串测量独占事件循环 | 直接缓解 #8281/#8306 的 TUI 闪烁与卡顿 | ✅ CLOSED |
| **#8326** | 新增 `disabledCommands` 设置项，可禁用内置斜杠命令并从补全隐藏 | 对应 #8325 的隐私诉求，closes #8325 | ✅ CLOSED |
| **#8316** | 新增 `agent_recovery_exhausted` 扩展 hook，在原生重试 + overflow compact-and-retry 耗尽、`agent_settled` 之前触发；handler 可返回 `{ retry: true }` 切换模型继续 | 扩展能力进一步对齐"模型回退 + 同会话续接"工作流 | ✅ CLOSED |
| **#8314** | Bedrock Converse 流回传 `reasoningContent.redactedContent` 加密推理块（用于 global.openai.gpt-5.6-terra 等） | 修复 #8315：之前仅处理 text/signature，丢失 opaque reasoning | ✅ CLOSED |
| **#8303** | 折叠工具输出时不再挂载 Kitty/iTerm Image 子节点，仅在展开时挂载 | 修复 #8304：折叠态下图片仍然占据高度/全图可见 | ✅ CLOSED |
| **#8319** ⬜ OPEN | Anthropic 服务端 fallback 实际返回 `claude-opus-4-8` 时，正确按回退模型而非请求模型计费 | 与 #8308 思路相同但做法更干净（不再直接走 model catalog），处理 #8285 | ⬜ OPEN |
| **#8307** ⬜ OPEN | 启用实验性 cache-friendly compaction：将压缩请求追加到主会话而非独立请求，复用暖缓存 | 显著降低长会话上下文压缩成本，目前仅自动压缩开启 | ⬜ OPEN |
| **#8254** ⬜ OPEN | 修复 Copilot 登录策略请求限流：先取账户目录→只更新已知且未配置的模型→受限请求带退避重试 | 修复 #7850 系列登录失败问题 | ⬜ OPEN |

> 另有关注价值：#8308（已被 #8313 revert 后由 #8319 接力）、#8287（替换 AI Gateway binding shim 为直连 fetch）、#6216（Amazon Bedrock Mantle OpenAI Responses provider，长期 OPEN）。

---

## 📈 功能需求趋势

通过对过去 24 小时更新的 50 条 Issue 归纳，社区需求集中在以下方向：

1. **TUI 性能与长会话可用性**（最高频）
   整屏闪烁（#8281）、跳屏（#8309）、工具结果图片折叠（#8304/8306）、markdown 渲染让步（#8327）——长 transcript 下 TUI 体验仍是头号痛点。

2. **Provider 兼容性硬化**
   OpenAI 客户端超时（#8323）、timeoutMs 透传（#8321）、fallback 计费（#8285/#8319）、`User-Agent` 一致性（#8305）、Bedrock reasoning 回传（#8315）、Ollama 远程网络失败（#8286）。

3. **扩展 API 表面扩张**
   `agent_recovery_exhausted`（#8317/#8316）、pre-persistence 消息替换 hook（#8292）、skill 命名空间（#8329）——社区正在"补齐"扩展生态的关键边角接口。

4. **隐私与数据完整性**
   `disabledCommands`（#8325/#8326）、session 文件写者锁（#8300/#8333）、session JSONL 审计 lineage（#8333）——企业场景必备。

5. **上下文压缩智能化**
   auto-compaction 阈值评估时机（#6339）、零 usage provider 阈值不触发（#8328）、cache-friendly compaction（#8307）、exhausted 后可扩展回退（#8317）。

6. **本地化与平台体验**
   Windows `find` 卡死改 `fd`（#8282）、Windows 安装路径推荐（#8299）、`/settings` 运行时语言切换（#8296）。

---

## 💬 开发者关注点

- **可靠性优于功能**：今天热度最高的不是"加什么"，而是"别挂、别闪、别丢"。TUI 在长会话下的卡顿、provider 流停滞导致 agent 死锁、并发写 session 导致数据分叉——这些"沉默杀手"被集中曝光。
- **扩展生态正在成型**：hook 提案密度明显增加（recovery、pre-persistence、skill namespace、disabledCommands），说明越来越多开发者把 Pi 当作平台而非终端工具。
- **隐私/合规觉醒**：以 #8325 为代表，社区开始质疑 `/share` 默认上传 Gist 这类"省心"特性的合规风险；企业用户期望更细粒度开关。
- **Windows 一等公民诉求**：从 `find` 卡死到 Defender 拖慢冷启动（#8299），Windows 平台体验仍是结构性短板，安装器文档也需更新。
- **"修一个破一个"现象**：#8313 紧急 revert #8308 后由 #8319 重做、#8333 直接 fail-closed 处理并发写者——近期提交显示出维护者对正确性的优先级正在上升，宁可合并慢也不留隐患。

---

*报告生成于 2026-08-19 · 数据快照来自 GitHub API · 仅统计过去 24 小时更新内容*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-08-19

> 数据范围：GitHub `QwenLM/qwen-code` 过去 24 小时活动

---

## 一、今日速览

今天最核心的信号是 **多 Agent / 多 Session 协作能力进入了密集落地阶段**：`v0.21.14-preview.0` 引入 live-session registry（`qwen sessions ps`）为后续 session 互通铺路，PR #9399 同步提交了"peer session collaboration"设计文档，而 #9402 agent board、#9396 session activity watermark、#8724 跨会话消息等议题也形成了一组联动推进。同时，**Review / Autofix 流水线自身的稳定性**成为第二主线：#9296 指出 500 次运行中 59% 被取消的资源浪费、#9125 提议加 flakiness gate、#9194 / #9221 / #9327 在补 test-pin 与 self-heal 等工程债务。

---

## 二、版本发布

### v0.21.14-preview.0
- **feat(core)** 新增 live-session registry，并暴露 `qwen sessions ps` 命令（[#8969](https://github.com/QwenLM/qwen-code/pull/8969)）
- **feat(daemon)** 附加 skill-toggle mutation metadata
- 详见 [Release v0.21.14-preview.0](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.14-preview.0)

### v0.21.11-nightly.20260818.259951c53e
- 与 preview.0 同步合入 `qwen sessions ps` 与 skill-toggle 元数据
- 详见 [Release v0.21.11-nightly.20260818.259951c53e](https://github.com/QwenLM/qwen-code/releases/tag/v0.21.11-nightly.20260818.259951c53e)

### DSW-EAS 基准测试（参考 v0.21.13）
| Release | SWE-bench Verified | Terminal-Bench 2.0 | 状态 |
|---|---|---|---|
| `dsw-eas-tb-smoke-20260818-r2` | 1/1 SUCCEEDED | 1/1 | 凭证刷新 smoke 通过 |
| `dsw-eas-tb-smoke-20260818-r1` | 1 | 1 | Sandbox 恢复 smoke |
| `dsw-eas-full-20260818-r3` | 500/500 SUCCEEDED | 89 | 全量端到端验证通过 |
| `dsw-eas-full-20260818-r2` | 500 QUARANTINED | 89 | 隔离 |
| `dsw-eas-full-20260818-r1` | 500 QUARANTINED | 89 | 隔离 |

> 全量跑出现隔离状态，建议关注结果归因。

---

## 三、社区热点 Issues

1. **#656 — [P1] API Error 400（InternalError.Algo.InvalidParameter）每次请求必现** ([链接](https://github.com/QwenLM/qwen-code/issues/656))  
   自 2025-09-19 报告至今未根治，11 条评论。涉及核心链路，影响所有用户；状态标记 `need-retesting`，建议关注是否有回归。

2. **#8718 — RFC：独立 Qwen Session 的原生协同** ([链接](https://github.com/QwenLM/qwen-code/issues/8718))  
   多 Agent 路线图关键 RFC（10 评论，CLOSED），已与 v0.21.14-preview.0 的 session registry 形成上下游呼应。

3. **#7040 — RFC：可靠的 auto-memory recall（时机 / 质量 / 遥测）** ([链接](https://github.com/QwenLM/qwen-code/issues/7040))  
   长期记忆召回的 RFC（10 评论）。当前阶段：遥测已合并（#7393）、recall + fast path 进入评审（#8716）。属于上下文性能路线图。

4. **#8316 — Ctrl+C 取消 prompt 后输入框内容未恢复** ([链接](https://github.com/QwenLM/qwen-code/issues/8316))  
   高频 UX 痛点（10 评论，CLOSED），影响所有交互式用户重写效率。

5. **#9194 — Review mutation-verified test-pin 缺口收口（PR #9096 评审遗留）** ([链接](https://github.com/QwenLM/qwen-code/issues/9194))  
   11 评论，涉及"代码改了但测试没真正约束"的硬性硬化项，反映社区对测试质量的把关。

6. **#9276 — Team 成员向 Leader 发送普通消息被误判为 shutdown** ([链接](https://github.com/QwenLM/qwen-code/issues/9276))  
   多 Agent 协作语义缺陷（7 评论，P2），与 #8718 / #8724 是同一协同链路问题。

7. **#8724 — 跨 Session 消息（同机互发）** ([链接](https://github.com/QwenLM/qwen-code/issues/8724))  
   `list_agents` / `send_message` + fail-closed 接收门（6 评论），是 session 间协作的关键拼图。

8. **#9296 — [P1] Qwen Autofix：review 事件风暴与重复地址 dispatch 浪费 runner** ([链接](https://github.com/QwenLM/qwen-code/issues/9296))  
   500 次运行 59% 被取消（294/500），4 类问题中含 P0 级"对已关闭/已合并 PR 仍启动 autofix"。

9. **#6806 — `/compress` / `/compress-fast` 后状态栏上下文百分比不刷新** ([链接](https://github.com/QwenLM/qwen-code/issues/6806))  
   7 评论（P2），影响用户对 token 用量的真实感知。

10. **#8400 — [P1] Desktop 0.0.5 / Windows：会话被静默自动删除** ([链接](https://github.com/QwenLM/qwen-code/issues/8400))  
    因 `session/load` 工作区 cwd 不匹配而误删本地镜像，桌面端关键数据丢失风险。

> 另值得关注：**#7427** web-shell artifact 错误刷屏（[链接](https://github.com/QwenLM/qwen-code/issues/7427)）、**#9353** Weixin typing indicator 过期（[链接](https://github.com/QwenLM/qwen-code/issues/9353)）、**#9438** Ollama 后端漏发 user 消息致 500（[链接](https://github.com/QwenLM/qwen-code/issues/9438)）。

---

## 四、重要 PR 进展

1. **#9441 — `fix(core)`: PreToolUse hook 返回 `ask` 时展示编辑/执行 diff** ([链接](https://github.com/QwenLM/qwen-code/pull/9441))  
   关闭 [#9434](https://github.com/QwenLM/qwen-code/issues/9434)，把 ask 升级为带 diff 的可视化确认，提升人工审批可用性。

2. **#9440 — `feat(desktop-electron)`: Computer Use 活动面板** ([链接](https://github.com/QwenLM/qwen-code/pull/9440))  
   依赖 #9169（Electron Web Shell 预览），在桌面端引入 Computer Use 专属 UI 表面。

3. **#9402 — `feat`: Agent Board — 跨独立启动 Agent 共享工作** ([链接](https://github.com/QwenLM/qwen-code/pull/9402))  
   替换此前误删目录的方案（#7799–#7803），是多 Agent 协作的核心 UI/协议层。

4. **#9399 — `docs`: 同侪 Session 协作设计文档** ([链接](https://github.com/QwenLM/qwen-code/pull/9399))  
   与 v0.21.14-preview.0 的 live-session registry 配套，覆盖"非 leader 派生"的会话间互通语义。

5. **#9396 — `feat(serve)`: 实时 Session 活跃度水位线** ([链接](https://github.com/QwenLM/qwen-code/pull/9396))  
   解决 activity-ordered cursor 在 live entry 中途退役时可能复制行的边界问题（拆分自 #9396 review）。

6. **#9393 — `feat(web-shell)`: 接入标准 Goal v3 控制平面** ([链接](https://github.com/QwenLM/qwen-code/pull/9393))  
   可在首条消息前创建/暂停/恢复/替换 Goal，绕过模型路由执行命令。

7. **#9389 — `feat(providers)`: setup 向导实时拉取推荐模型列表** ([链接](https://github.com/QwenLM/qwen-code/pull/9389))  
   替代冻结于发布日的列表，通过 OpenAI 兼容 `/models` 端点查询现状。

8. **#9380 — `feat(serve)`: 度量 ACP 子进程 V8 老生代峰值堆** ([链接](https://github.com/QwenLM/qwen-code/pull/9380))  
   在 daemon 既有资源轮询旁暴露峰值 committed / peak used 指标，便于排查内存问题。

9. **#9435 — `fix(cli)`: 把 daemon 重复工具调用熔断暴露为可见的 loop-detected 停止** ([链接](https://github.com/QwenLM/qwen-code/pull/9435))  
   让 #5657 的熔断在 ACP daemon 中产生一致的用户可观察错误，而非静默截断。

10. **#9436 — `fix(core)`: 仅在参数一致时把重复 provider 工具调用 id 视为重放** ([链接](https://github.com/QwenLM/qwen-code/pull/9436))  
    用规范化指纹区分"重放"与"id 撞车但语义不同"，避免误熔断。

> 另推荐关注：**#9423** 图像 payload 驱逐隔离（[链接](https://github.com/QwenLM/qwen-code/pull/9423)）、**#8966** 接受 `output.format: stream-json`（[链接](https://github.com/QwenLM/qwen-code/pull/8966)）、**#9339** DingTalk 解析转发的聊天记录（[链接](https://github.com/QwenLM/qwen-code/pull/9339)）、**#9417** heredoc 不被权限规则拆分（[链接](https://github.com/QwenLM/qwen-code/pull/9417)）、**#9340** 评审指出何时"方法而非补丁"才是开放问题（[链接](https://github.com/QwenLM/qwen-code/pull/9340)）。

---

## 五、功能需求趋势

提炼近 24h 全部 Issues 与 PR 的共性方向：

| 方向 | 信号强度 | 代表项 |
|---|---|---|
| **多 Agent / 跨 Session 协作** | 极强 | [#8718](https://github.com/QwenLM/qwen-code/issues/8718) · [#8724](https://github.com/QwenLM/qwen-code/issues/8724) · [#9276](https://github.com/QwenLM/qwen-code/issues/9276) · [#9282](https://github.com/QwenLM/qwen-code/issues/9282) · [#9291](https://github.com/QwenLM/qwen-code/issues/9291) · [#9430](https://github.com/QwenLM/qwen-code/issues/9430) · [#9402](https://github.com/QwenLM/qwen-code/pull/9402) · [#9399](https://github.com/QwenLM/qwen-code/pull/9399) · [#9396](https://github.com/QwenLM/qwen-code/pull/9396) |
| **记忆 / 上下文性能** | 强 | [#7040](https://github.com/QwenLM/qwen-code/issues/7040) · [#6806](https://github.com/QwenLM/qwen-code/issues/6806) · [#9423](https://github.com/QwenLM/qwen-code/pull/9423) · [#9331](https://github.com/QwenLM/qwen-code/pull/9331) |
| **Review / Autofix 流水线自身健壮性** | 强 | [#9296](https://github.com/QwenLM/qwen-code/issues/9296) · [#9125](https://github.com/QwenLM/qwen-code/issues/9125) · [#9194](https://github.com/QwenLM/qwen-code/issues/9194) · [#9278](https://github.com/QwenLM/qwen-code/issues/9278) · [#9221](https://github.com/QwenLM/qwen-code/pull/9221) · [#9327](https

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI（CodeWhale）社区动态日报

**日期：2026-08-19** | **数据来源：Hmbown/DeepSeek-TUI**

---

## 📌 今日速览

项目已正式从 `deepseek-tui` 更名为 **CodeWhale**（Shannon Labs 公开发布版本），v0.9.9 完成发布。本日 CI 体系加固与 TUI 体验修复是主线：维护者针对 v0.9.9 触发的 6 小时卡死 runner 事故紧急为所有 ci.yml job 加上 `timeout-minutes`；同时围绕窄终端状态栏、git 上下文展示、`/title` 与 `/rename` 拆分等用户体验回归点完成了多项收口工作。中文文档本地化（EPIC #5482）正式启动 Tier 1，国际化骨架（#5337 dictionary spine）持续收敛 `isZh` 分支。

---

## 🚀 版本发布

### v0.9.9（已发布，PR #5499 已合并）

**关键变更：**
- **修复**：窄终端（< 60 列）紧凑行指标显示问题（#5486）；rustdoc 裸 URL lint 告警（#5489）
- **变更**：稳定控制配置（stable controls）；优化标题栏渲染
- **品牌重塑**：包名、命令名更新为 `codewhale`（小写技术标识符），旧 `deepseek-tui` npm 包正式弃用

**相关 PR：**
- #5499 release: v0.9.9
- #5495 ci: cap every ci.yml job with timeout-minutes
- #5500 test(ci): harden release gate concurrency
- #5492 perf(skills): keep configured skill prompts stable (#5473)
- #5404 fix(client): fail closed on SSE UTF-8 split across HTTP/2 DATA (#5374)
- #5405 feat(tui): configurable model-visible read/tool-result budgets (#5367)
- #5493 fix(pricing): classify Orcarouter as an aggregator billing surface
- #5494 feat(config): configurable auto-router classifier timeout
- #5498 test(fleet): isolate delete flow from user state

---

## 🔥 社区热点 Issues（Top 10）

| # | 编号 | 标题 | 重要性 |
|---|------|------|--------|
| 1 | [#5316](https://github.com/Hmbown/CodeWhale/issues/5316) | **EPIC-005: CodeWhale TUI Crate Decomposition (Umbrella)** | 架构级史诗级 issue，追踪整个 TUI crate 拆分进度，所有子 EPIC 与 FEAT 都在此汇总。是理解项目未来模块化方向的总入口。 |
| 2 | [#5337](https://github.com/Hmbown/CodeWhale/issues/5337) | **Web: 完成 #4934 dictionary spine — 淘汰所有 isZh 分支** | 国际化架构关键里程碑，目标是把所有页面 i18n 收敛到统一的字典骨架，PR #5504 已落地两个最小页面。 |
| 3 | [#5437](https://github.com/Hmbown/CodeWhale/issues/5437) | **TUI: 形式化状态栏颜色语法 + 暴露 repo/worktree 状态** | 由外部设计评审触发，确认配色是"颜色词汇"而非"过多颜色"，要求保留紫色基调并增强仓库/工作树可见性，PR #5511 已部分实现。 |
| 4 | [#5299](https://github.com/Hmbown/CodeWhale/issues/5299) | **release: 将 npm 发布迁移到 trusted publishing** | 发布链路最后一公里自动化难题：v0.9.5 全链路已非交互，仅 npm wrapper 卡在人工 2FA。trusted publishing 上线后将彻底告别手动登录。 |
| 5 | [#5505](https://github.com/Hmbown/CodeWhale/issues/5505) | **[bug] `/new` 后系统提示被丢弃** | 影响所有用户的关键体验 bug：新会话后模型完全不收 system prompt，只有折叠的 `<context_update>` 行。同日已 CLOSED，说明修复速度快。 |
| 6 | [#5512](https://github.com/Hmbown/CodeWhale/issues/5512) | **[bug] 0.9.7 起 header 状态指示器（cw/whale/dots）从不渲染** | 跨平台可见性回归（Windows 11 + Windows Terminal + 0.9.8/0.9.9 复现），从 0.8.64 时代稳定功能消失，需要尽快定位。 |
| 7 | [#5497](https://github.com/Hmbown/CodeWhale/issues/5497) | **fix(tasks): 终结卡死的 durable 执行并限制事件增长** | 后端可靠性问题：Task Manager worker 在 `turn.completed` 不触发时永久占用，需增加终止化与取消宽限期。 |
| 8 | [#5508](https://github.com/Hmbown/CodeWhale/issues/5508) | **[enhancement] feat: 持续循环（continuous loop）** | AI 编排者用例：让 coordinator agent 进入无限回合直到外部中断，替代当前"一回合聚合 + 睡眠循环"的 hack 模式。 |
| 9 | [#5482](https://github.com/Hmbown/CodeWhale/issues/5482) | **EPIC(docs): 审查 + 部分重构 + 完整本地化为中文** | 面向中文用户群扩张的战略性文档 PR，PR #5507 已完成 Tier 1（迁移到 `docs/zh_hans/`）。 |
| 10 | [#5496](https://github.com/Hmbown/CodeWhale/issues/5496) | **ci: 限制 release-candidate 与 artifact workflow job** | 紧随 #5495 的 CI 加固姊妹篇，暴露 v0.9.9 期间 6 小时卡 runner 的真实事故，针对发布链路剩余未设 timeout 的 job 全部加护栏。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 关键内容 |
|----|------|---------|
| [#5511](https://github.com/Hmbown/CodeWhale/pull/5511) | feat(tui): show repository context in git chrome | 落实 #5437 的 repo/worktree 切片：状态栏现显示 `repo · branch*` 或 `repo/worktree · branch*`，超长路径优雅截断。 |
| [#5509](https://github.com/Hmbown/CodeWhale/pull/5509) | fix(tui): 还原 `/title` 为独立终端窗口标题 | 修复 #5430：`/title` 与 `/rename` 不再互相 alias，前者只改终端窗口标题（影响 tab/窗口管理），后者只改会话名（影响 picker/composer）。 |
| [#5506](https://github.com/Hmbown/CodeWhale/pull/5506) | feat(tui): 命令上下文适配器 + 迁移门（FEAT-015） | crate 拆分的前置基建：构建 TUI 自有的 DI/迁移基础设施，但刻意不迁移任何生产命令，确保渐进式拆分安全。 |
| [#5507](https://github.com/Hmbown/CodeWhale/pull/5507) | docs(i18n): 完成 Tier 1 中文文档本地化（#5482） | 把 `docs/LSP_*` 与 `docs/` 下既有翻译迁入 `docs/zh_hans/`，建立按语言分目录的文档布局。 |
| [#5504](https://github.com/Hmbown/CodeWhale/pull/5504) | feat(web): 把 docs/hooks 与 docs/troubleshooting 迁入 dictionary spine | 跟随 #5488 后清理掉 16 处 `isZh` 三元分支，让两个最小页面（各 12 分支）正式走字典化路线。 |
| [#5491](https://github.com/Hmbown/CodeWhale/pull/5491) | fix(tui): 执行前持久化审批结果 | 关 #5360：审批请求与终态在执行前先写入会话日志，无法持久化时拒绝执行，重连/中断后能重建已关闭的审批状态。 |
| [#5510](https://github.com/Hmbown/CodeWhale/pull/5510) | docs(readme): 恢复 star history chart | 尝试在被 GitHub 限流后恢复 star 趋势图（与 #5414 替换为 fanout.gif 的策略形成对比，社区贡献者选择再次尝试图表）。 |
| [#5404](https://github.com/Hmbown/CodeWhale/pull/5404) | fix(client): SSE UTF-8 跨 HTTP/2 DATA 拆分时 fail-closed | 关 #5374：macOS DeepSeek Flash 流式出现 U+FFFD/CJK 乱码。修复 Chat Completions SSE 解码在 stream-end 未终止时用 `from_utf8_lossy` 的隐患。 |
| [#5405](https://github.com/Hmbown/CodeWhale/pull/5405) | feat(tui): model-visible read/tool-result 预算可配置 | 自托管 DeepSeek V4 长上下文用户：放开 50 KiB/16 KiB/12000 chars 的硬编码上限，单 ~64 KiB 文件可少 ~20 次 read。 |
| [#5495](https://github.com/Hmbown/CodeWhale/pull/5495) | ci: 所有 ci.yml job 加 timeout-minutes | 救火 PR：v0.9.9 release 期间出现 6 小时卡死 runner 事故，10 个 job 全部加超时护栏，要求死 runner 立即失败。 |

---

## 📈 功能需求趋势

从 Issues 分布提炼出的社区关注方向：

1. **🌏 国际化与中文本地化（热度最高）**
   - #5482（EPIC 中文文档）、#5337（dictionary spine 收敛）
   - #5504、#5507 已落地，Tier 1 已完成

2. **🏗️ 架构重构与模块化**
   - #5316（EPIC-005 crate 拆分）、#5506（FEAT-015 迁移门）
   - TUI 拆分到独立 crate 是当下最重要的架构演进

3. **🤖 AI 编排与 agent 能力扩展**
   - #5508（持续循环回合）、#5491（审批持久化）、#5405（read/tool 预算）
   - 越来越多用户把 CodeWhale 作为 AI coordinator

4. **🔧 CI/CD 稳定性**
   - #5495、#5496、#5500 集中爆发
   - v0.9.9 release 触发的卡 runner 事故暴露 release 链路脆弱性

5. **📦 发布自动化**
   - #5299（npm trusted publishing）— 最后一公里

6. **🎨 TUI 体验与可观测性**
   - #5437（颜色语法形式化）、#5511（git context）
   - #5505（/new 丢 system prompt）、#5512（status indicator 渲染回归）

7. **💰 计费与路由准确性**
   - #5493（Orcarouter 误归类）、#5494（auto-router 超时可配）

---

## 👨‍💻 开发者关注点

**高频痛点：**

- **🔥 新会话系统提示丢失（#5505）**：影响所有用户的高优先级 bug。`/new` 后模型看不到项目指令，开发者立即拿不到一致行为，必须重连或重新配置。
- **🔥 跨平台状态栏渲染回归（#5512）**：Windows 11 + Windows Terminal 用户从 0.9.7 起丢失 cw/whale/dots 指示器，影响信任感。
- **⚠️ Release 链路脆弱（#5495/#5496）**：v0.9.9 实战中出现 6 小时卡死 runner，反映 GitHub 默认 360 分钟 timeout 在 release 关键路径上是不可接受的。
- **⚠️ SSE UTF-8 跨包拆分（#5404 → #5374）**：macOS 流式乱码，影响 CJK 用户最深——恰恰是社区主力。

**高频需求：**

- **可配置 budget**：自托管 DeepSeek V4 用户希望 `read`/`tool-result` 预算可调，反映长上下文场景对硬编码上限的强烈不满。
- **无限循环回合（#5508）**：AI-as-coordinator 模式普及后，coordinator 需要"持续运行直到中断"而非"回合内 sleep"。
- **中文文档体系**：中文用户增长触发系统化本地化需求，机器翻译+stale 文档双重痛点。
- **CI 可观测与可护栏**：发布工程团队对 release 链路 timeout、并发安全、artifact 上传稳定性的标准显著抬升。

---

*日报基于 GitHub Issues / Pull Requests / Releases 公开数据自动整理。链接均为 `Hmbown/CodeWhale` 仓库（项目已迁移自 `Hmbown/DeepSeek-TUI`）。*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*