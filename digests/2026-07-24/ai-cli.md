# AI CLI 工具社区动态日报 2026-07-24

> 生成时间: 2026-07-24 02:05 UTC | 覆盖工具: 9 个

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

# AI CLI 工具生态横向对比报告
**报告日期：2026-07-24 · 数据窗口：过去 24 小时**

---

## 一、生态全景

当前 AI CLI 工具生态已进入**"质量打磨期 + 架构分化期"**的交汇点：一方面，主流工具（Codex、Qwen Code）保持高频迭代节奏，alpha/nightly 版本日更；另一方面，长期悬而未决的稳定性问题（网络中断、并发安全、Windows 兼容）成为制约生产可用性的最大公约数痛点。**MCP（Model Context Protocol）** 正从概念阶段快速进入"协议细节决定生态成败"的实操阶段，跨工具的 OAuth、Session ID、Schema 规范化等问题集中暴露。同时，"远程/移动办公"、"子代理治理"、"Provider 兼容矩阵"三大新维度正在重塑下一阶段的竞争格局。

---

## 二、各工具活跃度对比

| 工具 | Issue 更新 | PR 更新 | 版本发布 | 社区特征标签 |
|------|----------|--------|---------|------------|
| **Claude Code** | 50（展示 Top 10） | 4 | ❌ 无 | Fable 5 套餐争议 + 网络中断 |
| **OpenAI Codex** | 50（展示 Top 10） | 50 | ✅ rust-v0.146.0-alpha.5 / alpha.3.1 | 高频 alpha 迭代 + Windows 稳定战 |
| **Gemini CLI** | Top 10（P1 密集） | 10+ | ❌ 无 | Subagent 稳定性 + Auto Memory 体系 |
| **GitHub Copilot CLI** | 数据不完整 | 数据不完整 | ✅ v1.0.74 | Open Plugin Spec v1 + CAPI 5MB 限制 |
| **Kimi Code CLI** | 6 | 12（单作者集中清扫） | ❌ 无 | MCP/Windows 双线修复 |
| **OpenCode** | 50（展示 Top 10） | 10 | ❌ 无 | Provider 发现 + 桌面 1.18.x 稳定性 |
| **Pi** | Top 10（维护者深度参与） | 10 | ❌ 无 | 受限采样 + Provider 兼容矩阵 |
| **Qwen Code** | 47 | 50 | ✅ v0.20.1-nightly.20260724 | v0.20.1 更新检查全线回归 |
| **DeepSeek TUI** | 14+（集中安全审计） | 4 | ⛔ v0.9.1 发布门禁 | 安全深度扫描 + 迁移期 UX 债 |

**活跃度梯队**：
- 🔴 **超活跃**：OpenAI Codex、Qwen Code（PR 数均达 50/日）
- 🟠 **高活跃**：Gemini CLI、OpenCode、Claude Code（Issue 量级 50）
- 🟡 **中等**：Pi、DeepSeek TUI（聚焦特定主题）
- 🟢 **低量高频**：Kimi Code CLI（Issue 少但 PR 集中清扫 12 个）

---

## 三、共同关注的功能方向

### 1. **MCP 协议生态完善** ⭐⭐⭐⭐⭐（最广泛共识）
- **Claude Code**：会话/对话 ID 未传递（#41836）、Filesystem 扩展握手失败（#80016）
- **OpenAI Codex**：MCP 进程池共享（#20883）、插件审批携带 plugin_id（#35029）
- **Gemini CLI**：OAuth token 刷新失败清空凭据（#28481）、HTTPS 强制（#28517）
- **Kimi Code CLI**：MCP session 复用（#2548）、启动容错（#2541）、schema 规范化（#2539）
- **Pi**：provider 重试可中断（#6980）、provider schema 严格化（#7010）
- **OpenCode**：MCP 插件 `_meta` 转发（#38579）、自定义 Provider reasoning 配置（#38594）
- **DeepSeek TUI**：MCP server 从不拉起（#4727，信任崩塌）、工具名 sanitize 碰撞（#4729）
- **GitHub Copilot CLI**：v1.0.74 引入 Open Plugin Spec v1 + mcp.json

**诉求收敛**：MCP 的 Session 管理、Token 刷新、Schema 跨厂商兼容成为普遍短板。

### 2. **跨平台稳定性（尤其 Windows）** ⭐⭐⭐⭐⭐
- **OpenAI Codex**：CPU 100%（#34879）、apply_patch 换行符（#4003）、WSL 集成（#28074）
- **Kimi Code CLI**：stdin 编码（#2547）、日志隔离（#2542）、插件崩溃（#2553）
- **Claude Code**：macOS ECONNRESET 近一年未根治（#5674）
- **Gemini CLI**：Wayland browser agent 失败（#21983）
- **DeepSeek TUI**：Windows ABNT2 键盘冲突（#4723）、macOS 启动崩溃（#4716）
- **OpenCode**：FreeBSD 不被官方支持（#38591）

**诉求收敛**：Windows 仍是"重灾区"，Linux 桌面变体（Wayland、ABNT2）和 BSD 也开始浮现。

### 3. **跨设备/移动办公体验** ⭐⭐⭐⭐
- **Claude Code**：Desktop 远程控制 CLI 会话（#29006，👍114 最高赞）
- **Kimi Code CLI**：远程控制（#1282，👍16 本周期最高互动）、Web 后台同步（#2545）
- **OpenCode**：IDE/移动端扩展（#33163、#36028）

**诉求收敛**："CLI 不应只是桌面工具"正在成为差异化竞争点。

### 4. **可观测性、配额与计费透明度** ⭐⭐⭐⭐
- **OpenAI Codex**：compaction 遥测（#22220、#35032）、配额仪表（#35047）
- **Claude Code**：PDF token 翻倍（#80449）、自动更新 265MB（#79942）
- **OpenCode**：内容过滤计费争议（#35475）、用量仪表数据矛盾（#38255）
- **Pi**：provider 重试可中断与缓存 key 治理（#6980、#7026）

**诉求收敛**：开发者要求"先看见再修复"，但数据源不一致正在侵蚀信任。

### 5. **子代理/Multi-Agent 治理** ⭐⭐⭐⭐
- **Gemini CLI**：挂起（#21409）、状态误报（#22323）、绕过权限（#22093）、无 subagent 上下文（#21763）
- **OpenCode**：子代理取消后 PowerShell 仍在扫描（#38564）、权限事件被忽略（#36868）
- **Pi**：父代理附件转发子代理（#32302）

**诉求收敛**：子代理的"清理链 + 权限边界 + 可观测性"是 2.0 时代的共同课题。

### 6. **TUI 渲染与无障碍** ⭐⭐⭐
- **Claude Code**：对话重复渲染（#49985）、TUI Bash 输出为空（#64474）
- **Gemini CLI**：shell 卡"Waiting input"（#25166）
- **Pi**：CJK 列计算（#7021）、超长会话重绘（#7017）、标准文本选择（#7038）
- **Qwen Code**：`qwen resume` 空白区（#7485）、文件名消失（#6014）、图标对齐（#7633）
- **Kimi Code CLI**：西里尔文字距异常（#2552）

### 7. **新模型分发与 Provider 兼容** ⭐⭐⭐⭐
- **Claude Code**：Fable 5 在 Max 套餐误报 credits（#79337/#79341）— 模型发布即翻车
- **Gemini CLI**：模型选择器不显示 3.5/3.6 Flash（#28485）— 默认值滞后治理
- **Pi**：Qwen3.8 思考档位缺失（#6951）、llama.cpp 启动竞态（#6948）、SiliconFlow 内置请求（#4742）
- **OpenCode**：OpenAI 兼容端点自动发现（#6231，👍187 — 当日最高赞议题）

---

## 四、差异化定位分析

| 工具 | 功能侧重 | 目标用户 | 技术路线 |
|------|---------|---------|---------|
| **Claude Code** | 长任务自动化、VSCode 生态、企业套餐 | 中高级开发者、SaaS 付费用户 | Anthropic 全栈闭源 + Max 套餐绑定 |
| **OpenAI Codex** | exec-server 架构、多渠道（Desktop/CLI/IDE） | 全栈开发者、Windows 用户占比高 | Rust 重构 + alpha 快速迭代 + Guardian V2 安全策略 |
| **Gemini CLI** | Subagent 编排、Auto Memory 体系 | Google Cloud 生态、自动化爱好者 | Caretaker / pr-generator 自动 triage 流水线 |
| **GitHub Copilot CLI** | Open Plugin Spec、IDE 集成 | GitHub 现有用户、企业 SaaS | 标准化插件清单 + mcp.json |
| **Kimi Code CLI** | MCP 工具链、Windows 编码兼容 | 中文用户、Windows 开发者 | Moonshot 上游适配 + 单作者集中清扫 |
| **OpenCode** | 多 Provider/本地模型、桌面 2.0 架构 | 本地模型玩家、多 Provider 用户 | 2.0 managed-service + CodeMode 快照重构 |
| **Pi** | 受限采样、本地模型、TUI 性能优化 | 硬核开发者、模型实验者 | mitsuhiko 个人主导 + LLM provider 抽象 |
| **Qwen Code** | 频道生态（微信/Telegram/GitHub）、IDE 嵌入 | 国内/国际化双语用户 | Daemon 信任热重载 + ACP 进程派生 |
| **DeepSeek TUI** | 安全策略、可终止性、迁移期重构 | 安全敏感用户、TUI 极客 | execpolicy 规则引擎 + 并发原语改造 |

**关键差异化判断**：
- **生态绑定型**：Claude Code（Anthropic）、Gemini（Google）、Copilot（GitHub）— 靠云服务深度绑定
- **Provider 抽象型**：OpenCode、Pi — 强调本地/多模型灵活性
- **架构先行型**：OpenAI Codex、Qwen Code — 通过架构重构（exec-server、daemon）建立壁垒
- **质量打磨型**：Kimi Code CLI、DeepSeek TUI — 进入"小步快跑修缺陷"阶段
- **社区自动化型**：Gemini CLI — Caretaker / Issue-to-PR 流水线最成熟

---

## 五、社区热度与成熟度

### 🔥 社区热度 Top 3（按 Issue 评论/点赞综合）

1. **OpenCode #6231**（30 评论 / 👍187）— OpenAI 兼容端点自动发现，反映**多 Provider 用户基数大**
2. **Claude Code #29006**（35 评论 / 👍114）— Desktop 远程控制，**最高单议题点赞**
3. **OpenAI Codex #20214**（75 评论 / 👍72）— Windows 卡顿，**最高评论数**

### 🚀 快速迭代期（PR/日 ≥ 30）

- **OpenAI Codex**：50 PR/日 + 2 个 alpha 版本，alpha 通道快速放量
- **Qwen Code**：50 PR/日 + nightly 增量，流程治理同步推进（Fleet Shepherd）

### 🛠️ 质量打磨期（PR/日 5-15）

- **Kimi Code CLI**：12 PR 集中清扫缺陷
- **OpenCode、Pi**：10 PR 左右，单议题深入修复

### 🔒 安全门禁期

- **DeepSeek TUI**：14+ 安全类 Issue 集中曝光，v0.9.1 硬性门禁，节奏被安全债拖累

### 📉 成熟稳定期迹象

- **Claude Code**：仅 4 PR/日，新版本未释出，**进入维护主导模式**
- **Gemini CLI**：Issue 偏向 P1 缺陷而非新功能请求

---

## 六、值得关注的趋势信号

### 趋势 1：**"新模型/新套餐 = Bug 放大器"**
- 现象：Fable 5 上线即触发 Max 套餐降级争议、Gemini 3.5/3.6 Flash 出现在后端但前端未分发
- 启示：模型/产品发布应配**长灰度期 + 透明降级提示**，"静默切换"已成社区红线

### 趋势 2：**MCP 从"能用"到"健壮"进入关键期**
- 现象：跨 7+ 工具同时暴露 Session、Token、Schema、命名碰撞问题
- 启示：MCP 生态的下一阶段竞争在于**协议细节实现质量**（而非是否支持 MCP），可参考早期 LSP 标准化路径

### 趋势 3：**跨设备/移动办公成为新战场**
- 现象：Claude Code / Kimi / OpenCode 均出现"远程控制 CLI 会话"高赞需求
- 启示：CLI 工具的形态边界正在被打破，**CLI × Desktop × Web × Mobile 的四端协同** 可能成为下一代标配

### 趋势 4：**并发安全与可终止性是"隐性 SLO"**
- 现象

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告（2026-07-24）

> ⚠️ **数据说明**：本次抓取中 PR 的评论数返回为 `undefined`，因此 PR 热度排名综合参考了「关联 Issue 评论数」「PR 关联的 Issue 数量」「最近活跃时间」「重复出现频次」四个维度。

---

## 一、热门 Skills 排行（PR）

### 🥇 1. skill-creator 一族修复（#1298 / #1323 / #1099 / #1050 / #362 / #361 / #539）
- **功能定位**：仓库的"造轮子"工具——用于创建与优化其他 Skill
- **讨论焦点**：所有 PR 都指向同一个 Bug——`run_eval.py` 报告 100% precision + 0% recall，导致描述优化循环形同虚设
- **额外痛点**：Windows 平台全面崩溃（subprocess PATHEXT、cp1252 编码、pipe 读取），以及 YAML 特殊字符、UTF-8 多字节字符引发的隐性解析失败
- **当前状态**：全部 OPEN
- **关联 Issue**：[#556 (12 comments)](https://github.com/anthropics/skills/issues/556) / [#1061 (3 comments)](https://github.com/anthropics/skills/issues/1061) / [#1169 (3 comments)](https://github.com/anthropics/skills/issues/1169)
- **代表 PR**：[#1298](https://github.com/anthropics/skills/pull/1298)、[#1323](https://github.com/anthropics/skills/pull/1323)、[#1099](https://github.com/anthropics/skills/pull/1099)、[#1050](https://github.com/anthropics/skills/pull/1050)

### 🥈 2. document-typography（#514）
- **功能定位**：AI 生成文档的排版质量控制（防止孤行寡字、标题断页、编号错位）
- **讨论焦点**：作者主张"所有 Claude 生成的文档都受此问题影响，但用户极少主动要求好的排版"——典型"用户感知不到但确实存在"的体验痛点
- **当前状态**：OPEN，自 2026-03-04 开放，已搁置 4 个月
- **链接**：[#514](https://github.com/anthropics/skills/pull/514)

### 🥉 3. frontend-design 改进（#210）
- **功能定位**：前端设计指导 Skill 的可执行性与内部一致性改进
- **讨论焦点**：让每条指令"在单轮对话中真的能被 Claude 执行"，避免过于抽象的指导
- **当前状态**：OPEN
- **链接**：[#210](https://github.com/anthropics/skills/pull/210)

### 4. ODT Skill（#486）
- **功能定位**：OpenDocument 格式（.odt/.ods）创建、模板填充、HTML 转换
- **讨论焦点**：补齐开源/ISO 标准文档格式支持，与现有 PDF/DOCX 形成完整 Office 矩阵
- **当前状态**：OPEN
- **链接**：[#486](https://github.com/anthropics/skills/pull/486)

### 5. skill-quality-analyzer & skill-security-analyzer（#83）
- **功能定位**：元 Skill——五维度（结构/可维护性/性能/安全/兼容性）的 Skill 质量分析
- **讨论焦点**：社区亟需"Skill 评估基础设施"，呼应 Issue #492 的信任边界问题
- **当前状态**：OPEN，自 2025-11-06 开放，是最老的待合并 PR 之一
- **链接**：[#83](https://github.com/anthropics/skills/pull/83)

### 6. testing-patterns（#723）
- **功能定位**：覆盖"测试金字塔"哲学、单元测试、React 组件测试、E2E 全链路
- **讨论焦点**：从"教 Claude 写代码"扩展到"教 Claude 写测试"
- **当前状态**：OPEN
- **链接**：[#723](https://github.com/anthropics/skills/pull/723)

### 7. color-expert（#1302）
- **功能定位**：色彩命名体系（ISCC-NBS/Munsell/XKCD/RAL）+ 色彩空间选型表
- **讨论焦点**：补齐设计类基础知识的权威参考
- **当前状态**：OPEN
- **链接**：[#1302](https://github.com/anthropics/skills/pull/1302)

### 8. self-audit（#1367）
- **功能定位**：交付前自审——机械文件验证 + 四维推理质量门
- **讨论焦点**：与 [#1385](https://github.com/anthropics/skills/issues/1385) Issue 中的"三门管线"提案呼应
- **当前状态**：OPEN，最新提交（2026-06-28）
- **链接**：[#1367](https://github.com/anthropics/skills/pull/1367)

---

## 二、社区需求趋势（Issues 提炼）

| 需求方向 | 代表 Issue | 评论数 | 核心诉求 |
|---------|-----------|--------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 社区 Skill 滥用 `anthropic/` 命名空间造成信任混淆，需官方建立命名/签名规范 |
| **🏢 企业级共享分发** | [#228](https://github.com/anthropics/skills/issues/228) | 14 | Claude.ai 缺少 Org 级 Skill 共享，目前需手动传文件再上传 |
| **🪟 跨平台兼容性** | [#1061](https://github.com/anthropics/skills/issues/1061) | 3 | skill-creator 在 Windows 原生 Python 下全面失效 |
| **🤖 Agent 治理** | [#412](https://github.com/anthropics/skills/issues/412) | 6 | 缺少面向 Agent 系统的策略执行、威胁检测、审计追踪 Skill |
| **🔌 协议互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 建议将 Skill 暴露为 MCP，统一 AI 软件的 API 表达 |
| **☁️ 云平台集成** | [#29](https://github.com/anthropics/skills/issues/29) | 4 | Skills 在 AWS Bedrock 上的可用性 |
| **📦 插件去重** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | document-skills 与 example-skills 安装了完全相同的 Skill，浪费上下文 |
| **🧠 紧凑记忆表达** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | 长任务下 Agent 自身的 Prose 记忆浪费大量 Token，需符号化压缩 |
| **✅ 输出质量门** | [#1385](https://github.com/anthropics/skills/issues/1385) | 3 | 提议"前校准→对抗审→交付验证"三门管线 |
| **🛡️ 企业数据合规** | [#1175](https://github.com/anthropics/skills/issues/1175) | 4 | SharePoint Online 文档场景下的安全与上下文担忧 |

**趋势归纳**：
1. **基础设施层**先于内容层——`run_eval.py` 失灵、Windows 崩溃、命名空间安全这些"地基"问题占据了一半以上的高评论 Issue
2. **企业落地诉求**凸显——Org 共享、Bedrock 兼容、SharePoint 安全是反复出现的关键词
3. **Skill 元能力**（自我审计、质量分析、安全分析）开始被社区视为与"业务 Skill"同等重要

---

## 三、高潜力待合并 PR（近期可能落地）

| PR | Skill | 关键理由 |
|----|-------|---------|
| [#1298](https://github.com/anthropics/skills/pull/1298) | fix(skill-creator): run_eval.py 0% recall | 关闭最严重的评估回路失效 Bug，10+ 独立复现 |
| [#1323](https://github.com/anthropics/skills/pull/1323) | fix: run_eval trigger detection | 同 Bug 的另一根因修复，可与 #1298 互补 |
| [#1099](https://github.com/anthropics/skills/pull/1099) | fix: Windows pipe reading | 阻塞 Windows 用户运行评估 |
| [#1050](https://github.com/anthropics/skills/pull/1050) | fix: Windows subprocess + encoding | 1 行修复，回归风险低 |
| [#539](https://github.com/anthropics/skills/pull/539) | warn: YAML special chars | 与 #361/#362 同期，根治隐性解析失败 |
| [#538](https://github.com/anthropics/skills/pull/538) | fix(pdf): case-sensitive paths | 简单但高频触发 |
| [#541](https://github.com/anthropics/skills/pull/541) | fix(docx): w:id collision | 防止文档损坏，安全修复 |
| [#509](https://github.com/anthropics/skills/pull/509) | docs: CONTRIBUTING.md | 关闭社区健康评分 25% 的最关键缺口 |
| [#83](https://github.com/anthropics/skills/pull/83) | skill-quality/security-analyzer | 直接回应 #492 的信任边界焦虑 |
| [#1302](https://github.com/anthropics/skills/pull/1302) | color-expert | 设计领域补全，活动热度持续 |

---

## 四、Skills 生态洞察

> **当前社区最集中的诉求是"Skills 基础设施的可信与可运维"——即在 Skill 数量爆发式增长之前，先把评估回路（run_eval）、跨平台兼容（Windows）、命名空间安全、版本共享机制这四块地基补齐，否则再多的业务 Skill 都建立在沙堆上。**

这一判断的证据链：
- **热度结构**：评论数最高的 Issue #492（信任边界，43）、#228（共享机制，14）、#556（评估失效，12）全部指向"基础设施"
- **PR 聚集度**：20 个热门 PR 中有 8 个以上是 `skill-creator`/`run_eval` 的 Bugfix，新增业务 Skill 反而占少数
- **生态前移**：社区提案（#1385 三门管线、#1329 紧凑记忆、#83 元分析器）显示讨论已从"做什么 Skill"转向"如何让 Skill 体系自洽"

---

# Claude Code 社区动态日报

**日期**: 2026-07-24
**数据来源**: [anthropics/claude-code](https://github.com/anthropics/claude-code)

---

## 📌 今日速览

今日社区焦点集中在 **Fable 5 模型与 Max 订阅的兼容性问题** 上，多名用户反馈自 7 月 20 日 Fable 5 成为 Max 标配以来，频繁被强制降级至 Opus 4.8 并提示需"usage credits"，相关 Issue 集中爆发。此外，**"Connection closed mid-response"** 网络中断类 Bug 仍是高优痛点，跨平台（macOS/Linux/Windows/WSL）均有报告，影响广泛。

---

## 🚀 版本发布

过去 24 小时内 **无新 Release**。最近一次版本信息未在本次数据中提供。

---

## 🔥 社区热点 Issues

### 1. [#79337](https://github.com/anthropics/claude-code/issues/79337) — Fable 5 在 Max 计划上误提示需要 usage credits
- **评论 40 / 👍 12**
- 自 7 月 20 日 Fable 5 加入 Max 套餐首日起，Max 用户遭遇 Claude Code 拒绝运行 Fable 5 并静默降级到 Opus 4.8 的问题。该问题直接影响 Max 订阅核心价值的兑现，是当前最紧急的体验性 Bug 之一。

### 2. [#5674](https://github.com/anthropics/claude-code/issues/5674) — macOS 持续性 ECONNRESET 网络错误（持续近一年）
- **评论 50 / 👍 47**
- 创建于 2025-08-13，长期未根治，跨平台对比验证是 macOS 特有问题。社区反应强烈，长期累积的"老问题"再次被顶起说明仍未被官方重视。

### 3. [#29006](https://github.com/anthropics/claude-code/issues/29006) — Claude Desktop 应用支持 Claude Code 远程控制会话
- **评论 35 / 👍 114**（最高点赞）
- 呼声最高的功能请求之一，希望在 Desktop 应用中实现对 CLI 会话的远程控制，反映用户对**桌面端 + CLI 协同工作流**的强烈需求。

### 4. [#69415](https://github.com/anthropics/claude-code/issues/69415) — API Error: Connection closed mid-response（VSCode/WSL 频繁）
- **评论 33 / 👍 65**
- 用户反馈该错误"频繁到无法使用任何任务"，属生产可用性级别的问题，影响 VS Code 扩展与 WSL 环境。

### 5. [#41836](https://github.com/anthropics/claude-code/issues/41836) — MCP 服务器无法识别并发会话/对话 ID
- **评论 14 / 👍 24**
- 揭示 Claude Code / Desktop / claude.ai 连接 HTTP MCP 时未传递会话标识，服务器端无法维持 per-conversation 状态。**MCP 生态扩展性**的关键缺陷。

### 6. [#37628](https://github.com/anthropics/claude-code/issues/37628) — VSCode 侧边栏重命名会话后终端 Tab 标题未同步
- **评论 11 / 👍 14**
- 会话重命名后，下一条消息即被覆盖，反映 VSCode 扩展中 UI 状态与终端状态不同步的问题。

### 7. [#79341](https://github.com/anthropics/claude-code/issues/79341) — Fable 5 在 Max 20x 计划上强制要求 usage credits
- **评论 7 / 👍 10**
- 与 #79337 同源的 Fable 5 套餐计费问题，20x 高级计划同样未能豁免。

### 8. [#49985](https://github.com/anthropics/claude-code/issues/49985) — Windows TUI 中对话内容重复渲染（v2.1.112）
- **评论 8 / 👍 22**
- 终端 TUI 输出多次重复同一段对话内容，影响阅读与日志追溯。

### 9. [#64968](https://github.com/anthropics/claude-code/issues/64968) — VS Code 扩展聊天面板代码块缺少语法高亮
- **评论 7 / 👍 21**
- 多次被关闭又重新打开的"老需求"，用户期待 VSCode 扩展支持 fenced code block 的 syntax highlighting。

### 10. [#80016](https://github.com/anthropics/claude-code/issues/80016) — Claude Desktop (Windows) Filesystem 扩展 handshake 成功但 tools/call 未派发
- **评论 9 / 👍 0**
- 与已关闭的 #22299 表现完全一致，重装无法修复，反映 Desktop 端 MCP filesystem 扩展存在回归或长期未解决的兼容问题。

---

## 🛠️ 重要 PR 进展

> 过去 24 小时 PR 数量较少（4 条），均为维护类小修复。

### 1. [#80495](https://github.com/anthropics/claude-code/pull/80495) — 修复 `/ralph-loop` 将用户 prompt 当作 shell 代码解析
- 修复 #16037。`/ralph-loop` 将 `$ARGUMENTS` 直接拼接到自动执行的 shell 行中，导致日常 prompt 解析失败，循环还未启动即报错。已在 Windows + git-bash 下复现，影响大量使用 ralph-loop 工作流的用户。

### 2. [#80508](https://github.com/anthropics/claude-code/pull/80508) — 修复 `auto-close-duplicates` 脚本中评论与反应的翻页逻辑
- 修复 #80506。脚本对 issues 列表进行了分页，但评论读取与 reactions 读取仍使用默认页大小 30 且不跟进分页，存在数据丢失风险。

### 3. [#41611](https://github.com/anthropics/claude-code/pull/41611) — 为 Claude Code 添加缺失的源码
- 长期悬而未决的 PR，作者希望补充缺失源码。

### 4. [#42604](https://github.com/anthropics/claude-code/pull/42604) — 从 Frontend Design Skill 中移除 "retro-futuristic" 推荐（已关闭）
- 内容质量类建议，已被关闭未合并。

---

## 📈 功能需求趋势

从今日活跃 Issue 中提炼的社区关注方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **🔌 VSCode 扩展能力完善** | #29006、#64968、#37628、#80742 | ⭐⭐⭐⭐⭐ |
| **🤖 Fable 5 模型与 Max 套餐适配** | #79337、#79341、#80382、#80741 | ⭐⭐⭐⭐⭐ |
| **🌐 网络稳定性 / API 中断** | #5674、#69415、#69336 | ⭐⭐⭐⭐ |
| **🧩 MCP 协议与生态** | #41836、#76040、#80016 | ⭐⭐⭐ |
| **🖥️ Desktop 应用功能完善** | #29006、#74696、#80016、#80724 | ⭐⭐⭐ |
| **📄 多模态与文档处理** | #80449（PDF token）、#80739（流式输出污染） | ⭐⭐⭐ |
| **⚙️ 自动更新机制** | #79942 | ⭐⭐ |

---

## 💬 开发者关注点

1. **新模型发布的"第一天就翻车"** — Fable 5 在 2026-07-20 正式成为 Max 标配，随即触发大量 Bug 报告（提示信息矛盾、降级静默、Max 20x 仍需 credits、安全机制误判等）。开发者呼吁：模型/套餐策略变更前应预留更长的灰度期，并提供清晰降级提示而非静默切换。

2. **网络层稳定性是最大公约数痛点** — "Connection closed mid-response" 跨平台（macOS/Linux/Windows/WSL）反复出现，且 #5674 这种近一年未根治的 macOS ECONNRESET 问题至今无解，对依赖 Claude Code 进行长任务自动化的开发者构成实质阻碍。

3. **VSCode 扩展已成为"一等公民"期待** — 远程控制、语法高亮、spinnerVerbs 自定义、终端 Tab 同步等多条诉求都指向 VSCode 扩展的能力补齐。社区希望扩展不仅是 CLI 的"壳"，而是具备完整会话管理能力。

4. **MCP 协议细节需要更严谨** — 会话 ID 缺失、JSON Schema `$ref` 解析失败、filesystem 扩展握手后无响应等，反映 MCP 在复杂企业场景下的健壮性仍待加强。

5. **资源消耗与成本透明度** — Read 工具打开 PDF 同时发送文本与图像导致 token 翻倍（#80449）、自动更新每会话下载 265MB 二进制（#79942），开发者期待更精细的资源/成本控制选项。

6. **TUI / 终端渲染稳定性** — 对话内容重复渲染（#49985）、`AskUserQuestion` 选项可见但问题文本缺失（#77242）、全屏 TUI 下 Bash 失败输出为空（#64474）等，是终端重度用户的高频痛点。

---

**报告生成时间**: 2026-07-24
**Issue 总数**: 50 条更新（展示 30 条最热）
**PR 总数**: 4 条更新

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-24**

---

## 📌 今日速览

今日 Codex 仓库持续聚焦于 **Windows 桌面端的稳定性问题**，多条高评论 P0/P1 级 Bug 集中曝光，涵盖 CPU 100% 占用、apply_patch 卡死、上下文压缩异常等。与此同时，开发团队通过 `copyberry` 机器人批量合并了一批 exec-server、proxy 路由与工具调度相关的重构 PR，并释出 `0.146.0-alpha.5` 与 `0.146.0-alpha.3.1` 两个 alpha 版本，迭代节奏保持紧凑。

---

## 🚀 版本发布

- **rust-v0.146.0-alpha.5** —— 0.146 系列的最新 alpha，详见 [Release #35067 关联](https://github.com/openai/codex)
- **rust-v0.146.0-alpha.3.1** —— alpha.3 的补丁版本，配套 PR [#35017](https://github.com/openai/codex/pull/35017) 已合并

> 提示：alpha 通道面向早期测试，建议生产环境继续使用稳定版。

---

## 🔥 社区热点 Issues

1. **[#20214](https://github.com/openai/codex/issues/20214) Windows 11 桌面端频繁卡顿/冻结**（💬 75 · 👍 72）
   长期高热 Bug。AMD Ryzen 5 + 32GB 内存仍出现明显卡顿，疑似渲染或 IPC 问题，社区讨论活跃。

2. **[#4003](https://github.com/openai/codex/issues/4003) Patched 文件在 Windows 上混合换行符**（💬 27 · 👍 71）
   经典老 Bug，自 2025 年延续至今。`apply_patch` 不尊重原文件换行符，触发跨平台协作痛点。

3. **[#22220](https://github.com/openai/codex/issues/22220) 会话压缩（Compaction）遥测与 Context Health**（💬 19 · 👍 12）
   用户希望直观查看上下文压缩触发频率与剩余窗口，对长会话调试价值高。

4. **[#20883](https://github.com/openai/codex/issues/20883) Codex Desktop 应使用项目级 MCP 进程池**（💬 15 · 👍 4）
   当前每个 chat 启动独立 stdio MCP 进程，资源浪费严重，建议改为项目级共享。

5. **[#35032](https://github.com/openai/codex/issues/35032) 自动压缩后仍剩余 80% 上下文**（💬 13）
   新报告的严重 Bug，压缩报告成功但实际可用窗口仅剩 20%，引发重复压缩浪费配额。

6. **[#13036](https://github.com/openai/codex/issues/13036) 支持多对话并行显示**（💬 12 · 👍 8）
   macOS App 长期只能激活单会话，多代理/多任务工作流受限。

7. **[#27284](https://github.com/openai/codex/issues/27284) SSH 远程项目显示 "No chats"**（💬 11）
   远程线程实际存在于 state DB，但 UI 不展示，影响 SSH 开发链路。

8. **[#28074](https://github.com/openai/codex/issues/28074) WSL 集成全新安装仍失效**（💬 11 · 👍 8）
   Windows + WSL 用户的关键开发路径持续受阻。

9. **[#19891](https://github.com/openai/codex/issues/19891) "For coding" 视图回归：隐藏文件名与命令**（💬 8 · 👍 8）
   UI 改动导致用户看不到编辑细节，被视为产品体验倒退。

10. **[#34879](https://github.com/openai/codex/issues/34879) ⚠️ P0 回归：Windows 启动后 WmiPrvSE 占满 32 核 CPU**（💬 5 · 👍 0）
    26.715.10079.0 版本回归 Bug，几乎不可用，强烈建议尽快修复。

---

## 🛠️ 重要 PR 进展

1. **[#35063](https://github.com/openai/codex/pull/35063) 追踪 World State 中的 Deferred Tool 命名空间** ✅ 已合并
   新增 `deferred_tool_world_state` feature flag，让模型感知延迟加载的工具命名空间与描述。

2. **[#35054](https://github.com/openai/codex/pull/35054) 允许禁用 `update_plan` 工具** ✅ 已合并
   新增 `tools.update_plan.enabled` 配置项，默认开启，可按需关闭以减少工具集噪音。

3. **[#35059](https://github.com/openai/codex/pull/35059) 解耦 exec-server HTTP 与 reqwest** ✅ 已合并
   `ReqwestHttpClient` 重命名为 `RouteAwareHttpClient`，统一走 Codex 共享路由感知传输。

4. **[#35056](https://github.com/openai/codex/pull/35056) exec-server WebSocket 走配置代理** ✅ 已合并
   远程环境连接（含重连）遵守 Codex 代理策略。

5. **[#35049](https://github.com/openai/codex/pull/35049) 注册 Guardian V2 特性开关** ✅ 已合并
   新增 `features.guardianv2`（自动审批复审），默认关闭、灰度开放。

6. **[#35048](https://github.com/openai/codex/pull/35048) 记录 `app/read` 请求耗时** ✅ 已合并
   新增 `codex.apps.read.duration_ms` 指标，按 `include_tools` 打标签，便于性能分析。

7. **[#35033](https://github.com/openai/codex/pull/35033) 暴露 Browser Use 配置需求** ✅ 已合并
   通过 `configRequirements/read` 返回 `browserUse.disableAutoReview`，对接 JS SDK。

8. **[#35031](https://github.com/openai/codex/pull/35031) 线程归档/删除强制 Writer 独占** ✅ 已合并
   防止多进程并发写入引发的分页线程状态损坏。

9. **[#35029](https://github.com/openai/codex/pull/35029) 命令审批保留插件来源信息** ✅ 已合并
   执行审批事件携带 `plugin_id` / `script_path`，提升审计可追溯性。

10. **[#35024](https://github.com/openai/codex/pull/35024) 自定义 Provider 启用独立 Web Search** 🔓 开放中
    新增 `supports_standalone_web_search` 模型级设置，让第三方 Responses provider 可选择启用 `web.run` 工具。

---

## 📈 功能需求趋势

从过去 24 小时活跃议题中提炼，社区关注度集中在以下方向：

- **🪟 Windows 桌面稳定性**（占比最高）
  CPU 100% 占用、apply_patch 卡死、UI 闪烁、WSL 集成断裂等几乎所有 P0/P1 Bug 都与 Windows 相关。**Windows-OS 标签**在 Top 30 Issue 中出现 ~12 次。

- **🧠 上下文与配额可观测性**
  #22220、#35032、#35047 均要求更透明的 compaction、rate-limit、quota 仪表，开发者期望"先看见再修复"。

- **🧩 MCP / 插件生态**
  MCP 进程池共享（#20883）、插件来源审计（#35029/#35020）、插件重启丢失（#29103）等成为新热点。

- **🖥️ 多会话/多代理 UI**
  #13036、#27284、#35041 反映 macOS 用户希望支持并行会话与远程线程管理。

- **🔍 浏览器使用 / Computer Use 配置化**
  #35033 / #35041 显示 Browser Use 的可配置化与可观测性正被快速推进。

---

## 👨‍💻 开发者关注点

综合 50 条 Issue 与 50 条 PR 的反馈，开发者最迫切的诉求包括：

1. **Windows 体验是一等公民**——目前大量"使用 Codex for Windows"的用户遭遇不可用级别的 Bug，回归控制（regression gating）明显不足。

2. **可观测性缺失**——上下文压缩、配额、远程会话状态、OpenAI 事件均无可视化指标，开发者被迫靠外部 status page 排查。

3. **MCP 与插件模型需要更细的权限边界**——`plugin_id` / `script_path` 已开始贯穿审批、Guardian、execution，但用户希望进一步看到"哪个插件在何时执行了什么"。

4. **跨平台一致性**——换行符（#4003）、文件路径、WSL 互操作等老问题持续暴露，团队需统一策略而非逐平台 patch。

5. **配额模型不透明**——多个账户/模型池出现矛盾读数（#35047），社区呼吁 Codex 与 Work Analytics 数据源统一。

---

> **日报小结**：今日主线是"Windows 稳定战 + exec-server 架构重构"。社区对 alpha 频道的快速迭代整体持积极态度，但 Windows 桌面端的连续 P0 回归正在消耗用户信心，建议下一版本优先做一次 Windows 专项回归测试与发布说明。

*数据来源：[github.com/openai/codex](https://github.com/openai/codex)，统计窗口：2026-07-23 ~ 2026-07-24 UTC*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报
**日期：2026-07-24**

---

## 📌 今日速览

今日 Gemini CLI 仓库动态以 **Subagent 稳定性** 与 **Auto Memory 系统改进** 为两条主线：P1 级 subagent 挂起、状态误报等历史问题持续推进修复，同时 SandyTao520 的 Auto Memory 系列 issue 集中曝光了重试循环、密钥泄露风险与无效 patch 隔离等多个漏洞。基础设施侧，**caretaker / pr-generator 流水线**的多个大型 PR（X/L 号变更）持续合入，自动 triage 与 Issue-to-PR 自动化能力快速成型。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#22323 – Subagent 达到 MAX_TURNS 后仍上报 GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
**优先级 P1 | 评论 12 | 👍 2**
`codebase_investigator` 子代理达到最大轮次限制后仍标记 `status: "success" / Termination Reason: "GOAL"`，掩盖了真实的中断，影响用户对子代理可靠性的判断。

### 2. [#21409 – Generalist agent 无限挂起](https://github.com/google-gemini/gemini-cli/issues/21409)
**优先级 P1 | 评论 8 | 👍 8**
只要 CLI 委派给 generalist 子代理即出现长时间挂起（最长等待 1 小时），简单文件夹创建也无法完成。👍 数量是今日 issue 中最高的，社区反响强烈。

### 3. [#24353 – 强化组件级评测体系](https://github.com/google-gemini/gemini-cli/issues/24353)
**优先级 P1 | 评论 7**
追踪"行为评测"基础设施二期：已积累 76 个 behavioral eval，覆盖 6 个 Gemini 模型，本次重点是组件级而非端到端评估。

### 4. [#22745 – AST 感知的文件读取/搜索/映射](https://github.com/google-gemini/gemini-cli/issues/22745)
**优先级 P2 | 评论 7 | 👍 1**
评估引入 AST 感知的工具能否在单次调用中精准定位方法边界、降低 token 噪声、提升子代理导航效率。

### 5. [#21968 – Gemini 极少自动使用 skills 与 sub-agents](https://github.com/google-gemini/gemini-cli/issues/21968)
**优先级 P2 | 评论 6**
用户反馈：除非显式指示，模型几乎不会主动调用自定义 skill 或 sub-agent。揭示了"工具自发现"机制的可用性短板。

### 6. [#26522 – Auto Memory 反复重试低信号会话](https://github.com/google-gemini/gemini-cli/issues/26522)
**优先级 P2 | 评论 5**
后台提取代理不读取的会话不会被标记为 processed，导致同一低信号会话在索引中反复弹出，需要"已读"机制或状态机改造。

### 7. [#25166 – Shell 命令完成后仍卡在"Waiting input"](https://github.com/google-gemini/gemini-cli/issues/25166)
**优先级 P1 | 评论 4 | 👍 3**
执行简单 CLI 后长时间显示"Awaiting user input"但命令早已结束，核心交互层的体验问题。

### 8. [#21983 – browser subagent 在 Wayland 下失败](https://github.com/google-gemini/gemini-cli/issues/21983)
**优先级 P1 | 评论 4 | 👍 1**
Wayland 桌面环境下 browser 子代理直接报错退出，影响 Linux 桌面用户覆盖率。

### 9. [#22232 – browser_agent 锁文件恢复与接管](https://github.com/google-gemini/gemini-cli/issues/22232)
**优先级 P3 | 评论 4**
当前 BrowserManager 对持久化 profile 锁采用 fail-fast，建议自动接管或解锁，提高多实例/残留进程场景的鲁棒性。

### 10. [#26525 – Auto Memory 缺乏确定性 redact 机制](https://github.com/google-gemini/gemini-cli/issues/26525)
**优先级 P2 | 评论 4**
transcript 内容在进入模型上下文后才由模型做 redact，存在密钥泄露风险；建议在调用前进行确定性脱敏并降低日志暴露。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#28519 – 修复无限认证循环](https://github.com/google-gemini/gemini-cli/pull/28519)
**P1 | size/s**
修复 `oauth_creds.json` 写入未 await 导致的无限 auth loop，强制 consent 流程，关闭 #28430。

### 2. [#28517 – 强制 GoogleCredentialsAuthProvider 走 HTTPS](https://github.com/google-gemini/gemini-cli/pull/28517)
**size/m | 安全**
新增协议校验，防止 ADC access/identity token 通过明文 HTTP 泄露，是当日最重要的安全加固。

### 3. [#28481 – 使用存储的 client ID 刷新 MCP OAuth token](https://github.com/google-gemini/gemini-cli/pull/28481)
**P1 | 安全**
修复 `gemini mcp add --transport http`（无 oauth block）场景下 OAuth 刷新本地失败并清空凭据的 bug，避免每次都需要重新认证。

### 4. [#28509 – getHistoryTurns 过滤 thought parts](https://github.com/google-gemini/gemini-cli/pull/28509)
**size/m**
在上下文管理关闭时过滤内部 monologue，避免历史中泄漏思考块引发重复推理或 API 错误。

### 5. [#28524 – Caretaker Triage prompt hill-climbing & 编排器更新](https://github.com/google-gemini/gemini-cli/pull/28524)
**size/m**
3 周 prompt 调优成果合入，新增 `code_explorer` skill 与 orchestrator 升级，triage 质量显著提升。

### 6. [#28433 / #28432 / #28431 / #28434 / #28435 – SSR Issue-to-PR 流水线](https://github.com/google-gemini/gemini-cli/pull/28433)
**size/l & xl | 一组大型 PR**
`joneba-google` 的 PR Generator 流水线系列：覆盖 Firestore 双锁、Cloud Run Job + Workflows 配置、Antigravity agent runner、系统 prompt 模板、底层工具模块等，是 Google 内部"事件 → 自动 PR"自动化的雏形。

### 7. [#28485 – model selector 支持 gemini-3.5-flash / 3.6-flash](https://github.com/google-gemini/gemini-cli/pull/28485)
**P2 | size/m**
修复 #28483：v0.51.0 用户无法在选择器中看到新 Flash 模型，原因是 `DEFAULT_GEMINI_FLASH_MODEL` 仍指向 2.5。

### 8. [#28446 – OAuth token exchange 改用原生 fetch](https://github.com/google-gemini/gemini-cli/pull/28446)
**P1 | size/m | 安全**
解决无头 VPS 上 `Premature close` 问题，关闭 #28440，提升跨环境登录稳定性。

### 9. [#28183 – VS Code 扩展关闭 diff tab 时保留终端焦点](https://github.com/google-gemini/gemini-cli/pull/28183)
**P1 | extensions | help wanted**
批准编辑后保持 integrated terminal 焦点，避免反复点击。**寻求社区协助，欢迎领取。**

### 10. [#28523 – File keychain 显式 tag 长度与校验](https://github.com/google-gemini/gemini-cli/pull/28523)
**size/m | 安全**
强制 128-bit (16-byte) auth tag，跨 Node.js runtime 处理畸形标签，提升凭据存储稳健性。

> 另：#28469（模型 fallback 时轮换 session ID）、#28352（issue title 注入防护）、#28411（自动关闭前先发说明评论）等 PR 已被关闭合入。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue / PR | 关注度 |
|---|---|---|
| **Subagent 稳定性与可靠性** | #22323 / #21409 / #22093 / #21763 | ⭐⭐⭐⭐⭐ |
| **Auto Memory 体系完善** | #26522 / #26523 / #26525 / #26516 | ⭐⭐⭐⭐⭐ |
| **新模型支持（3.5/3.6 Flash）** | #28485 (PR) | ⭐⭐⭐⭐ |
| **AST 感知的代码库工具** | #22745 / #22746 | ⭐⭐⭐⭐ |
| **Browser Agent 鲁棒性** | #21983 / #22232 / #22267 | ⭐⭐⭐ |
| **MCP / OAuth 安全与稳定性** | #28481 / #28446 / #28517 | ⭐⭐⭐⭐ |
| **本地 Subagent / Skills 自发现** | #21968 / #20195 / #20079 | ⭐⭐⭐ |
| **Caretaker / 自动 Issue-to-PR 流水线** | #28431–#28435 系列 | ⭐⭐⭐⭐ |

---

## 💬 开发者关注点

1. **Subagent 是当前最大痛点**
   - 挂起、状态误报、绕过权限（#22093 指出 v0.33.0 起子代理无需许可即被启用）、`/bug` 不携带 subagent 上下文（#21763）。子代理从"功能亮点"快速演变为"稳定性债"。

2. **Auto Memory 新功能带来新隐患**
   - 5 个 P2 issue 集中暴露后台 transcript 处理在安全（日志泄露、模型 redact 过晚）、健壮性（重复重试、跳过无效 patch）和体验上的系统性问题，需要尽快建立"已处理 / 已隔离 / 已 redact"的状态机。

3. **认证与凭据是安全高发区**
   - 仅今日即有 3 个 P1/size-m PR（#28519 / #28517 / #28481 / #28446）涉及 OAuth、ADC、HTTPS、MCP token 刷新，建议升级前重点回归 auth flow。

4. **新模型分发链路未打通**
   - 后端已具备 gemini-3.5/3.6 Flash，但 CLI 模型选择器只显示旧模型（#28485），反映出 **模型默认值的滞后治理** 问题。

5. **IDE / 终端体验仍被诟病**
   - shell 卡 "Waiting input"、VS Code 焦点丢失、退出外部编辑器导致 terminalBuffer 损坏（#24935），渲染层与外部进程交互仍是高频问题区。

6. **大模型"自发现工具"能力不足**
   - #21968 揭示：除非显式 prompt，否则模型几乎不主动调用 skills / sub-agents，这是 agent 框架可用性的关键短板。

---

*日报基于 GitHub Issues & Pull Requests 数据自动生成，欢迎转发与反馈。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**日期：2026-07-24** | 数据来源：github.com/github/copilot-cli

---

## 📌 今日速览

昨日 **v1.0.74** 正式发布，重点引入 **Open Plugin Spec v1** 插件清单与 `mcp.json` 配置支持，并修复 IDE 集成在重载 MCP 服务器时的断连问题。社区讨论高度集中于 **MCP 生态兼容性** 与 **会话/上下文管理**——CAPI Responses 5MB 请求限制引发的多个会话不可逆卡死问题成为焦点，同时出现了影响关键交互的回归（如 Ctrl+C 不再中断 agent 运行）。

---

## 🚀 版本发布

### v1.0.74（2026-07-23）

**新增 (Added

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报
**日期：2026-07-24**

---

## 📌 今日速览

今日社区活跃度较高，**`lihailong00` 单日提交了 12 个修复类 PR**，呈现"集中清扫缺陷"的态势，重点覆盖 MCP 工具链（4 个）、Windows 平台兼容性（3 个）、Shell/UI 交互（4 个）等领域。同时，社区围绕"**跨设备远程控制**"和"**手机端 Web 体验优化**"展开讨论，远程/移动办公场景的诉求持续升温。

---

## 🚀 版本发布

*过去 24 小时内无新版本发布。*

---

## 🔥 社区热点 Issues

> 注：过去 24 小时仅有 6 条 Issue 更新/创建，以下全部呈现。

### 1. [#1282](https://github.com/MoonshotAI/kimi-cli/issues/1282) — Feature Request: Remote Control
- **类型**：enhancement | 👍 **16** | 💬 6
- **核心诉求**：支持用户从手机、平板或浏览器**远程接管本地 CLI 会话**，实现"离开工位不中断工作流"。
- **关注度**：⭐⭐⭐⭐⭐（本周期最高互动量）
- **分析**：呼声最高的长期 Feature Request，反映出**多端协同**正成为 AI CLI 的下一个竞争焦点。

### 2. [#2545](https://github.com/MoonshotAI/kimi-cli/issues/2545) — 同步排队 Prompt 到后端（改善手机 Web 体验）
- **核心诉求**：手机用户在锁屏/切换应用时，浏览器在后台不会发送已排队的请求，需要后端兜底同步。
- **分析**：与 #1282 呼应，**移动端体验**成为近期社区焦点。

### 3. [#2553](https://github.com/MoonshotAI/kimi-cli/issues/2553) — `/plugins` 页面在安装 2+ 插件时崩溃（Windows v0.29.0）
- **核心问题**：安装两个及以上插件时，`/plugins` 管理界面抛出 `TypeError: Cannot read properties of undefined (reading 'value')`，整 CLI 崩溃。
- **分析**：Windows 平台的明确回归 bug，影响所有多插件用户，建议优先修复。

### 4. [#2538](https://github.com/MoonshotAI/kimi-cli/issues/2538) — `kimi-datasource` 插件 worker 池阻塞导致多会话卡死
- **核心问题**：3 个会话同时调用 `get_stock_info` 时，单一接口超时导致**所有会话阻塞**。
- **分析**：暴露**插件级连接池/超时隔离**的设计缺陷，是企业级可用性的关键议题。

### 5. [#2552](https://github.com/MoonshotAI/kimi-cli/issues/2552) — Kimi Desktop 西里尔字母字距异常
- **核心问题**：Windows 桌面版 Markdown 中的西里尔文单词字距不均、出现异常大间隙。
- **分析**：典型的**字体渲染国际化**问题，对俄语/东欧用户影响显著。

### 6. [#2555](https://github.com/MoonshotAI/kimi-cli/issues/2555) — A股量化 + AI Agent 实践分享
- **类型**：discussion（跨社区共建帖）
- **亮点**：作者基于 Hermes Agent 框架分享了"**真实 PnL 反馈闭环** + 参数化驱动"的量化 Agent 经验。
- **分析**：高质量的**领域延伸讨论**，展示了 Kimi CLI Agent 思路在金融场景的迁移价值。

---

## 🛠️ 重要 PR 进展

### 1. [#2548](https://github.com/MoonshotAI/kimi-cli/pull/2548) — `fix(mcp)`: 复用已初始化的 client session
- 在 toolset 生命周期内**保持 MCP 会话常开**，通过 `AsyncExitStack` 关闭；解决严格 stdio 服务端拒绝二次 `initialize` 的问题。
- **价值**：MCP 性能与稳定性双重提升。

### 2. [#2541](https://github.com/MoonshotAI/kimi-cli/pull/2541) — `fix(mcp)`: 延后启动失败后继续运行
- 捕获 `MCPRuntimeError` 在延后等待边界，不让可选 MCP 后台启动失败**中断交互回合**。
- **价值**：核心容错路径修复。

### 3. [#2539](https://github.com/MoonshotAI/kimi-cli/pull/2539) — `fix(mcp)`: 为 Moonshot API 规范化工具 schema
- 生成稳定的 Moonshot 兼容别名，补齐缺失的 root `object` 类型，修正 `anyOf`/required 形态。
- **价值**：直接关系到 **Moonshot 上游可用性**。

### 4. [#2547](https://github.com/MoonshotAI/kimi-cli/pull/2547) — `fix(windows)`: stdio 配置为 UTF-8
- 启动时对 Windows stdout/stderr 调用 `reconfigure(encoding='utf-8')`，解决 cp936/gbk 终端乱码。
- **价值**：中文用户最常碰到的"方块乱码"问题的根治方案。

### 5. [#2542](https://github.com/MoonshotAI/kimi-cli/pull/2542) — `fix(logging)`: Windows 进程日志隔离
- Windows 下使用 `kimi.<pid>.log`，避免 Loguru 轮转导致并发进程互相覆盖。
- **价值**：支持多进程/多实例调试。

### 6. [#2544](https://github.com/MoonshotAI/kimi-cli/pull/2544) — `fix(kaos)`: 终止本地进程树
- 本地 KAOS 命令独立进程组，取消/超时终止**完整子树**；SSH/ACP 路径不变。
- **价值**：杜绝僵尸进程残留。

### 7. [#2540](https://github.com/MoonshotAI/kimi-cli/pull/2540) — `fix(media)`: ICO 图像统一归一化为 PNG
- 上传 ICO 至模型前转为 PNG，保留 MIME/字节长度/尺寸元数据。
- **价值**：拓宽可上传图标/截图格式，提升模型兼容度。

### 8. [#2550](https://github.com/MoonshotAI/kimi-cli/pull/2550) — `fix(kosong)`: 传递消息序列化选项
- 将 Pydantic 序列化选项透传至 `Message.content`，避免 `id: null` 嵌套媒体被错误排除。
- **价值**：保证上游 LLM 接收到正确结构。

### 9. [#2546](https://github.com/MoonshotAI/kimi-cli/pull/2546) — `fix(print)`: 转义 stdin 回显中的 Rich markup
- 用户输入 `[/login]` 等字符不再被解释为 Rich 标签，**传给模型的字节保持原样**。
- **价值**：安全 + 一致性双重修复。

### 10. [#2554](https://github.com/MoonshotAI/kimi-cli/pull/2554) — `fix(tools)`: StrReplaceFile 替换计数基于运行中内容
- 替换统计按运行中内容而非原始快照，避免串行替换次数失真。
- **价值**：文件编辑工具的语义正确性改进。

---

## 📈 功能需求趋势

从 Issue 主题提炼，社区**最关注的方向**集中于以下三类：

| 方向 | 代表 Issue | 信号 |
|---|---|---|
| **🖥️ 跨设备/移动体验** | #1282、#2545 | 远程接管会话、Web 后台 Prompt 同步 |
| **🔌 插件生态健壮性** | #2553、#2538 | 插件管理崩溃、worker 池阻塞 |
| **🌍 国际化与平台适配** | #2552 | 西里尔文字渲染、隐含的 Windows/中文编码问题 |

辅助观察：
- **Agent 行业化落地**：#2555 体现了 Agent 框架向量化金融等垂直领域渗透的趋势。
- **平台一致性**：今日 PR 中 Windows 修复占比 25%（3/12），显示 **Windows 仍是核心短板**。

---

## 👨‍💻 开发者关注点

综合 Issue 与 PR，今日开发者反馈的核心痛点：

1. **MCP 集成不够稳**：4 个 PR 直指 MCP 会话复用、启动容错、schema 规范三大块——这是当前生态最薄弱、却最关键的扩展点。
2. **Windows 平台是"重灾区"**：编码（#2547）、日志隔离（#2542）、插件崩溃（#2553）、进程终止（#2544）四连击，反映 Windows 用户占比不容忽视。
3. **插件沙箱与隔离缺失**：#2538 揭示了当多会话共享数据源时**缺乏超时隔离/熔断**，影响企业级采用。
4. **移动/远程办公诉求强烈**：#1282 + #2545 共同指向"CLI 不应该只是桌面工具"。
5. **细节正确性受重视**：`lihailong00` 一系列"小而专"的修复（markup 转义、替换计数、ICO 归一化等）表明社区已从功能开发期进入**质量打磨期**。

---

*日报由社区数据自动汇总生成，关注 [MoonshotAI/kimi-cli](https://github.com/MoonshotAI/kimi-cli) 获取最新动态。*

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-24

## 📌 今日速览

OpenCode 仓库今日无新版本发布，但社区活跃度维持高位。议题侧围绕 **OpenAI 兼容端点自动发现模型**（#6231，30 条评论，187 👍）形成持续讨论焦点，同时桌面端 1.18.4 的多处渲染崩溃与子代理生命周期问题被集中反馈。PR 侧则聚焦 **会话变更面板修复**（#38592）、**CodeMode 目录快照重构**（#38183）以及 **工具调用稳定性** 的多项底层修复。

---

## 🚀 版本发布

无。过去 24 小时内未发布新版本。最新桌面版仍为社区报告问题的 **v1.18.4**（存在多处崩溃问题已被快速关闭修复）。

---

## 🔥 社区热点 Issues（Top 10）

1. **[#6231](https://github.com/anomalyco/opencode/issues/6231) — 自动发现 OpenAI 兼容端点的模型列表**
   - 状态：OPEN | 评论 30 | 👍 187
   - 重要度：⭐⭐⭐⭐⭐
   - 社区希望 LM Studio / Ollama / llama.cpp 等本地服务自动同步模型，避免在 `opencode.json` 手动维护。👍 数远超其他 Issue，反映这是高频痛点。

2. **[#37012](https://github.com/anomalyco/opencode/issues/37012) — 保留旧版布局选项**
   - 状态：OPEN | 评论 29 | 👍 30
   - 用户列举旧布局的多项优势（主窗口直达选项、工作区切换），反对强行切换。29 条评论反映此话题在用户群中存在较大分歧。

3. **[#37716](https://github.com/anomalyco/opencode/issues/37716) — Internal Server Error**
   - 状态：CLOSED | 评论 26
   - v1.18.3 桌面端多模型切换触发服务端内部错误，26 条评论说明此问题在不同模型/插件组合下被广泛复现。

4. **[#25848](https://github.com/anomalyco/opencode/issues/25848) — 会话重命名功能**
   - 状态：OPEN | 评论 11
   - 提议 `/rename` 命令或侧栏右键重命名会话，便于长会话管理。

5. **[#35475](https://github.com/anomalyco/opencode/issues/35475) — 内容过滤器误判并产生 ~$20 计费**
   - 状态：OPEN | 评论 10
   - 关键争议：内容过滤触发后用户被收取完整生成费用却未收到输出，触及**计费透明度**红线。

6. **[#37326](https://github.com/anomalyco/opencode/issues/37326) — 数学公式未渲染**
   - 状态：OPEN | 评论 7
   - 桌面端 v1.18.2 中模型输出的数学公式（LaTeX）未做渲染，影响教学与科学场景用户体验。

7. **[#26220](https://github.com/anomalyco/opencode/issues/26220) — 工具调用完成后进入无限循环**
   - 状态：OPEN | 评论 7
   - 进程存活但不响应输入，被命名为"Zen/big-pickle"事件，影响大批量自动化场景。

8. **[#36285](https://github.com/anomalyco/opencode/issues/36285) — 2.0 managed-service 重启引发重连风暴**
   - 状态：CLOSED | 评论 5
   - 自动更新期间打开新 TUI 会触发整个连接群体重连与冷启动，揭示 2.0 架构下的资源调度缺陷。

9. **[#38255](https://github.com/anomalyco/opencode/issues/38255) — 不同仪表盘用量数据不一致**
   - 状态：OPEN | 评论 5
   - 月度用量与细粒度仪表盘显示差异巨大（100% vs $10），引发对计费系统可信度的担忧。

10. **[#26266](https://github.com/anomalyco/opencode/issues/26266) — UI 中展示子代理的 reasoning/variant 等级**
    - 状态：OPEN | 评论 5 | 👍 6
    - 用户希望在调用子代理时能看到其思考等级参数，便于调试与成本控制。

---

## 🛠 重要 PR 进展（Top 10）

1. **[#38592](https://github.com/anomalyco/opencode/pull/38592) — 修复会话变更面板始终为空**
   - 修复 `Session.diff()` 桩函数与 `SessionSummary.diff()` 回退路径，关闭 #13981。直接解决"修改数十个文件仍显示 No changes"的长期 UI 痛点。

2. **[#35311](https://github.com/anomalyco/opencode/pull/35311) — 同一仓库的多个克隆识别为不同项目**
   - 一次性关闭 14 个相关 Issue（#17940、#19348、#29869 等），将项目身份与 worktree 解耦，提升多副本开发体验。

3. **[#38594](https://github.com/anomalyco/opencode/pull/38594) — 为自定义 Provider 增加 reasoning 与 token 限制配置**
   - 关闭 #38593，补齐自定义 Provider 的高级参数面板，与官方模型对齐。

4. **[#32302](https://github.com/anomalyco/opencode/pull/32302) — 将父代理附件转发给子代理**
   - 修复 `@mention` 子代理时附件丢失问题，关闭 #25553。

5. **[#38183](https://github.com/anomalyco/opencode/pull/38183) — CodeMode 目录基于结构化快照渲染差异**
   - CodeMode 系列工作（#36196）的关键一步：将模型侧指令文本收归 core 拥有，避免无效重载产生虚假指令更新。

6. **[#38067](https://github.com/anomalyco/opencode/pull/38067) — 用边沿触发替代全历史扫描来提醒模式切换**
   - 关闭 #38066，将 plan → build 切换的提醒从扫描整段会话改为事件触发，显著降低开销。

7. **[#38584](https://github.com/anomalyco/opencode/pull/38584) — 修复仓库迁移路径后的项目恢复**
   - 关闭 #38578，解决 Git 仓库移动后原路径被错误保留的问题。

8. **[#38581](https://github.com/anomalyco/opencode/pull/38581) — 保留 grep 中的符号链接路径**
   - 关闭 #38582，避免 grep 将符号链接解析为真实路径后导致后续工具调用错误。

9. **[#38579](https://github.com/anomalyco/opencode/pull/38579) — MCP 插件请求元数据转发**
   - 关闭 #17084，更新 #21539/#21624 的 MCP 工具路径实现，允许插件注入 `_meta`。

10. **[#38539](https://github.com/anomalyco/opencode/pull/38539) — TUI 预览写入文件的完整内容**
    - 将写入工具从单行 row 渲染为块卡片，返回真实的 before/after diff，与 patch 操作的红绿渲染对齐。

---

## 📈 功能需求趋势

从过去 24 小时活跃的 50 条 Issue 中可提炼出以下五大社区诉求方向：

| 方向 | 代表 Issue | 关注度 |
|------|-----------|--------|
| **多模型/Provider 集成** | #6231、#38554、#38329 | 高（OpenAI 兼容端点自动发现是 #1 痛点） |
| **桌面/UI 体验回归** | #37012、#37326、#6284、#38577、#38574 | 高（升级 1.18.x 后大量渲染/崩溃问题） |
| **子代理/多 Agent 协作** | #26266、#36868、#38564、#37267 | 中高（权限透传、生命周期、可观测性） |
| **IDE/移动端扩展** | #33163、#36028 | 中（远程控制 + VS Code 扩展安装问题） |
| **计费与配额透明度** | #35475、#38255、#35643 | 中（涉及付费用户信任） |

---

## 💬 开发者关注点

通过对 Issue 与 PR 的归类，当前开发者社区的高频痛点集中在：

1. **桌面端 1.18.x 稳定性下降** — 单日出现 #38577（renderer crash on `data.lsp`）、#38574（TUI crash on part.state.content）、#38565（主线程 100% 占用）等多个版本相关问题，升级用户回滚呼声渐起。
2. **子代理生命周期管理缺失** — #38564 揭示子代理被取消后 PowerShell 子进程仍在磁盘扫描；#36868 反映 `run --auto` 下权限事件被忽略；子代理的"清理链"是 2.0 的关键待办。
3. **Provider 元数据传递不足** — MCP / 自定义 Provider 的 reasoning、token、context 等字段缺失（#38594、#38579），限制了对低成本/特殊模型的使用。
4. **会话变更不可观测** — TUI 右侧面板空显示（#38592）+ 工具调用 diff 不直观（#38539），反映出"模型改了什么"在 UI 层面未被清晰传达。
5. **平台兼容性边缘案例** — #38591 报告 FreeBSD 不被官方 npm 包支持；#38544 揭示 Unix socket 路径在 advisory scan 中的假阳性报错，影响硬核用户部署。

> 整体来看，OpenCode 2.0 在架构层（managed-service、CodeMode、provider 抽象）的 PR 推进迅速，但桌面端体验与子代理治理仍需在近期版本中重点加固。

---
*日报基于 2026-07-23 至 2026-07-24 期间 GitHub `anomalyco/opencode` 仓库公开数据生成。*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报
**2026-07-24**

---

## 今日速览

今日社区动态以**模型兼容性修复**和**TUI/UX 体验优化**为主线。mitsuhiko 本人提交或参与了多起关键变更，包括「受限采样（constrained sampling）」功能 PR 合入、为 `/model` 拾取器恢复 `models.json` 热重载，以及 TUI 实验性「限制重绘」能力。同时，`wl-copy` 误报成功、Qwen3.8 思考档位配置缺失、llama.cpp 输出 token 硬编码等历史问题均有了对应的修复或方案。

---

## 版本发布

过去 24 小时内无新版本发布。

---

## 社区热点 Issues

1. **[#6306](https://github.com/earendil-works/pi/issues/6306) — Support Strict Tools / Grammar（已关闭）**
   由核心维护者 mitsuhiko 发起，讨论 SDK 层是否需要表达「自由格式」与「严格工具」的工具类型。涉及 LARK/Rust 正则约束、JSON Schema 严格采样，评论数高达 22 条，是本周最热议题。相关实现 PR [#6341](https://github.com/earendil-works/pi/pull/6341) 已合并。

2. **[#3252](https://github.com/earendil-works/pi/issues/3252) — `/model` 不应覆写持久化默认模型（已关闭）**
   用户希望 `/model` 仅切换当前会话模型，不改动 `~/.pi/settings.json` 中的启动默认值。反映了社区对「会话级 vs 全局配置」边界的关切。

3. **[#6951](https://github.com/earendil-works/pi/issues/6951) — Qwen3.8-Max-Preview 思考档位未配置（开放中）**
   Pi 当前使用 `minimal/low/medium/high`，但 Qwen 官方 API 实际为 `low/medium/xhigh`。需调整 `thinkingLevelMap`，否则用户调用 Qwen3.8 时思考档位失效。

4. **[#6999](https://github.com/earendil-works/pi/issues/6999) — 0.80.8+ 丢失 `models.json` 热重载（开放中）**
   ModelRuntime 重构后，`/model` 不再重读磁盘上的 `~/.pi/agent/models.json`，用户编辑后必须重启。当前已有对应修复 PR [#7036](https://github.com/earendil-works/pi/pull/7036)。

5. **[#6948](https://github.com/earendil-works/pi/issues/6948) — llama.cpp 内置 provider 启动时 `defaultProvider/defaultModel` 不生效（开放中）**
   异步模型刷新与启动配置存在竞态，会话不会以 settings.json 中配置的 llama.cpp 模型启动，而 `/model` 选择器中却能看到该模型。

6. **[#6872](https://github.com/earendil-works/pi/issues/6872) — `/copy` 在 `wl-copy` 失败时误报成功（开放中）**
   在 bwrap 等沙箱环境（仅继承 `WAYLAND_DISPLAY`，无 socket）中，wl-copy 失败但 `unref()` 导致未检查退出码，`xclip` / OSC 52 兜底逻辑被跳过。

7. **[#4742](https://github.com/earendil-works/pi/issues/4742) — 内置 SiliconFlow provider（已关闭）**
   用户请求将 SiliconFlow（聚合 Qwen、GLM、DeepSeek 等开源模型的服务）作为内置 provider，支持国际/中国双端点。同类请求见 [#7013](https://github.com/earendil-works/pi/issues/7013)。

8. **[#7033](https://github.com/earendil-works/pi/issues/7033) — 包清单畸形导致每个会话崩溃循环（已关闭）**
   `package.json` 的 `pi.skills/prompts/themes` 若为字符串（而非数组）会在启动时抛出 `entries.filter is not a function`，且脏包留在 settings 中，造成无限启动崩溃。

9. **[#7039](https://github.com/earendil-works/pi/issues/7039) — `.pi/workflow.json` 跨分支共享导致 phase-gate 卡住（已关闭）**
   单文件全仓共享使 `submit_plan/review/land` 在 worktree 间状态陈旧、阻塞新任务。涉及协作流程设计问题。

10. **[#7010](https://github.com/earendil-works/pi/issues/7010) — OpenAI 兼容 provider 未规范化可选对象工具 schema（已关闭）**
    `required` 字段未规范化影响网关与代理兼容性，对 OpenRouter 等聚合服务尤其重要。

---

## 重要 PR 进展

1. **[#6341](https://github.com/earendil-works/pi/pull/6341) — `feat(ai):` 支持受限采样（已合并，待讨论）**
    mitsuhiko 为工具增加 `constrainedSampling` 配置，工具可请求模型侧严格生成，包括 JSON Schema 严格模式和 provider 端 grammar 约束（OpenAI `strict`）。是 [#6306](https://github.com/earendil-works/pi/issues/6306) 的实现落地。

2. **[#7036](https://github.com/earendil-works/pi/pull/7036) — `fix(coding-agent):` 拾取器中重载模型配置（开放中）**
    修复 [#6999](https://github.com/earendil-works/pi/issues/6999) 报告的 `models.json` 热重载回归，mitsuhiko 同时建议简化 `refresh` 接口。

3. **[#7034](https://github.com/earendil-works/pi/pull/7034) — `fix(coding-agent):` 使用 llama context 决定输出上限（已合并）**
    解决 [#6994](https://github.com/earendil-works/pi/issues/6994)：移除固定 16384 token 上限，按每个加载模型的 context window 动态设定，并补充测试覆盖。

4. **[#7017](https://github.com/earendil-works/pi/pull/7017) — `feat(tui):` 实验性限制重绘（已合并）**
    为超长会话提供「不全量重绘 transcript」的开关，缓解大规模会话下的重绘性能问题。

5. **[#6618](https://github.com/earendil-works/pi/pull/6618) — `fix:` 不缓存 compaction 与 branch summary（已合并）**
    关闭 compaction/分支摘要轮的缓存写入，节省受支持 provider 的成本。

6. **[#7032](https://github.com/earendil-works/pi/pull/7032) — `fix(coding-agent):` 暴露不可用的 scoped 模型（开放中）**
    模型解析输出结构化 `no-match` 诊断，可在 `/scoped-models` 中查看并清理过期配置。

7. **[#7018](https://github.com/earendil-works/pi/pull/7018) — `feat(types):` `AssistantMessage` 新增 `hiddenThinkingLabel`（已合并）**
    支持每条消息独立的折叠思考标签（如「Thought for 3s」），便于区分模型仍在思考与已卡住。

8. **[#7016](https://github.com/earendil-works/pi/pull/7016) — `fix:` 内置模型生成时间修正（已合并）**
    新装包的本地 catalog mtime 可能晚于远程 `Last-Modified`，导致新模型被忽略。改用 catalog 记录的生成时间作为对比基准。

9. **[#6971](https://github.com/earendil-works/pi/pull/6971) — `feat(coding-agent):` 发出 `bash_execution_update` 事件（已合并）**
    闭合 [#6703](https://github.com/earendil-works/pi/issues/6703)：客户端可基于事件级 `id` 处理并行 bash 执行的实时更新。

10. **[#6980](https://github.com/earendil-works/pi/pull/6980) — `fix(ai):` provider 重试可中断（已合并）**
    替换 Anthropic / OpenAI SDK 内部重试，保留用户配置的次数、强制 `maxRetryDelayMS`、并通过 `AbortSignal` 支持中断。修复 [#6911](https://github.com/earendil-works/pi/issues/6911)。

---

## 功能需求趋势

综合近 24 小时的 Issue 与 PR 讨论，社区关注度集中在以下方向：

- **多 provider / 聚合服务支持**：SiliconFlow（#4742、#7013）、OpenRouter、Cloudflare AI Gateway 兼容、Qwen Token Plan、GitHub Copilot OAuth vs Plugin（#6970）。
- **受限生成与工具 schema 规范化**：Strict Tools / Grammar（#6306、#6341）、OpenAI 兼容 provider 的 `required` 字段规范化（#7010）、Anthropic tool-call ID 归一化碰撞（#7002）。
- **本地/本地化部署体验**：llama.cpp 启动竞态（#6948）、输出 token 上限（#6994 → #7034）、bundled 模型生成时间（#7016）。
- **TUI 体验与无障碍**：CJK/宽字符列计算（#7021）、窄终端滚动指示器截断（#7015）、超长会话重绘性能（#7017）、标准文本选择（#7038）、`-order-list` 重写（#5013）。
- **沙箱 / 剪贴板 / 跨平台**：wl-copy 失败检测（#6872、#7012、#7009）、HOME 路径前缀误判（#7006）、测试环境隔离（#6965）。
- **扩展机制完善**：ESM 模块共享（#7011）、扩展 reload 安全点（#5735）、`resource_discover` 作用域塌缩（#6968）、`bash_execution_update` 事件流（#6971）。

---

## 开发者关注点

从反馈中可总结出几类高频痛点：

- **配置粒度不足**：`/model` 副作用过大、settings 中默认 provider/model 与异步加载竞态、`.pi/workflow.json` 跨分支共享，反映出「全局 / 会话 / worktree」三级作用域模型需要更清晰的边界。
- **Provider 兼容性问题突出**：DeepSeek 在阿里通义套餐下的 `thinkingFormat` 被覆盖（#6998）、Qwen3.8 档位缺失（#6951）、Cloudflare 网关下 provider prefix 丢失（#7030），说明 provider 矩阵爆炸后维护成本上升。
- **错误处理粗糙**：API 错误响应体被忽略（#6749）、wl-copy 失败误报成功（#6872）、`prompt_cache_key` 网关不生效（#7026）、`refreshOpenAICodexToken` 漏 `scope` 致 401（#7001）——社区呼吁统一的错误传播与诊断结构。
- **安全与依赖卫生**：protobufjs 7.6.4 受 GHSA-j3f2-48v5-ccww 影响需升级至 7.6.5（#7005），由已合并 PR 处理；包清单畸形导致不可恢复崩溃（#7033）暴露了启动期 schema 校验缺失。
- **DX 与工作流效率**：受限采样（#6341）减少无效工具调用成本、provider 重试可中断（#6980）改善长任务取消体验、隐藏思考标签（#7018）提升输出可读性，说明社区在追求「更便宜、更可控、更易调试」的代理运行体验。

---

*报告生成时间：2026-07-24 · 数据来源：github.com/badlogic/pi-mono*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-07-24

## 📌 今日速览

今日 Qwen Code 发布了 v0.20.1 nightly 增量版本，社区活跃度维持在较高水位——过去 24 小时共更新 **47 条 Issue** 与 **50 条 PR**。**两条主线尤为突出**：一是 v0.20.1 引入的 `npm` 更新检查机制在 mise 包装器、npm 12、`getNpmCliPath` 解析等多处回归（#7515/#7520/#7543/#7539 形成闭环），二是 **E2E 测试稳定性**成为高频讨论焦点，连续多日主分支 CI 红牌（#7516/#7559/#7605/#7616）。此外，记忆系统、频道集成（微信/Telegram/GitHub）与冷启动性能是开发者讨论的密集区。

---

## 🚀 版本发布

### v0.20.1-nightly.20260724.7d17c44a3

本次 nightly 为增量构建，主要变更：

- **测试**：@doudouOUC 为遥测（telemetry）增加了 daemon 指标初始化顺序的覆盖测试，并文档化了 `metricReader` 的非对称行为（#7456）
- **性能（perf）**：附带的性能改进项（具体变更日志待补）

> ⚠️ 提示：v0.20.1 stable 自 7 月中旬发布以来，已集中暴露多个更新检查相关回归，建议在生产环境继续使用 npm 显式版本升级。

---

## 🔥 社区热点 Issues

按社区关注度（评论数 × 影响面）精选：

| # | Issue | 状态 | 优先级 | 关键点 |
|---|-------|------|--------|--------|
| [#5736](https://github.com/QwenLM/qwen-code/issues/5736) | more full prompt reprocessing in recent update? | CLOSED | P2 | 反映近期更新后本地 LLM 全量重处理更频繁，关联 llama.cpp prompt-cache 命中下降——是缓存作用域问题的代表反馈 |
| [#7147](https://github.com/QwenLM/qwen-code/issues/7147) | MCP server never successfully get tool and resource listing | CLOSED | P2 | Fastmail MCP 集成中认证通过但 tool 列表超时；#7195 已用专用 undici fetch 修复 |
| [#7599](https://github.com/QwenLM/qwen-code/issues/7599) | `record_artifact` 工作区产物缺 `managedId` | CLOSED | — | 影响 `sse.artifact_changed` 客户端协调，bot 自动报告 |
| [#7449](https://github.com/QwenLM/qwen-code/issues/7449) | proposal: enterprise external-memory integration profile | OPEN | P3 | @doudouOUC 提出的企业级外部记忆集成规范，与 #7585 形成"间接/直连"两条互补路线 |
| [#7585](https://github.com/QwenLM/qwen-code/issues/7585) | proposal: direct external context provider profile | OPEN | P3 | 与 #7449 同期讨论的"直连式"扩展规范，需要社区路线决策 |
| [#7485](https://github.com/QwenLM/qwen-code/issues/7485) | TUI: large blank area after `qwen resume` | OPEN | P2 | 复活会话后大块空白区，渲染层布局回归 |
| [#7264](https://github.com/QwenLM/qwen-code/issues/7264) | Cold-start follow-ups: 剩余 lazy-loading 候选 | OPEN | P2 | ACP 子进程 eager closure 17.24 MiB/2420 modules 的进一步延迟加载机会 |
| [#6014](https://github.com/QwenLM/qwen-code/issues/6014) | 新版不再显示读取的文件名 | OPEN | P2 | `read 1 file` 替代了原本的文件名展示，回归明显 |
| [#6806](https://github.com/QwenLM/qwen-code/issues/6806) | `/compress` 后状态行 context% 不刷新 | OPEN | P2 | 状态行 token 计数陈旧直到下次请求完成 |
| [#7616](https://github.com/QwenLM/qwen-code/issues/7616) | Do we really need this many E2E tests? | OPEN | P2 | @yiliang114 推动反思非确定性模型 API 上的 E2E 测试策略，呼应连续 CI 失败 |

> 次梯队的 [#7590](https://github.com/QwenLM/qwen-code/issues/7590)（微信频道 ACP 错误）、[#7609](https://github.com/QwenLM/qwen-code/issues/7609)（Telegram topic 路由错配到 #general）、[#7575](https://github.com/QwenLM/qwen-code/issues/7575)（`qwen serve` 模式下用户级 skills 未加载）亦是频道生态关键卡点。

---

## 🛠️ 重要 PR 进展

| PR | 标题 | 影响 |
|----|------|------|
| [#7268](https://github.com/QwenLM/qwen-code/pull/7268) | feat(serve): Hot-reload workspace trust changes | @doudouOUC 引入 trust-policy 快照与 generation 切换，让 daemon 信任变更无需重启 |
| [#7594](https://github.com/QwenLM/qwen-code/pull/7594) | perf(cli): Propagate compile cache to ACP children | 将 `serve` 的 Node module compile cache 暴露给后续派生的 ACP 子进程，降低冷启动开销 |
| [#7302](https://github.com/QwenLM/qwen-code/pull/7302) | feat(cli): reference prior sessions via `@` | 新增 `@session:<id>` 引用 + tab 补全，向主代理注入确定性只读的会话摘要 |
| [#7497](https://github.com/QwenLM/qwen-code/pull/7497) | feat(cli): native video input in `/learn` | `/learn` 增加原生视频路径（MP4/WebM/MOV/M4V + HTTP URL），按模型视频模态门控 |
| [#7607](https://github.com/QwenLM/qwen-code/pull/7607) | feat(core): configurable image generation models | 增加用户可配置的图像生成模型路由与审批闸工具 |
| [#7632](https://github.com/QwenLM/qwen-code/pull/7632) | feat(channels): GitHub polling adapter | GitHub 通知轮询 + @mention 唤醒架构，#7266 的重设计后继 |
| [#7471](https://github.com/QwenLM/qwen-code/pull/7471) | feat(web-shell): git mode selector | Web Shell 新建会话时嵌入 git 模式选择器（当前分支/worktree/new branch） |
| [#7589](https://github.com/QwenLM/qwen-code/pull/7589) | fix(cli): show tool descriptions in multi-tool compact summaries | 多工具折叠摘要里补回文件路径/搜索模式，去除"#6014 类盲区" |
| [#7603](https://github.com/QwenLM/qwen-code/pull/7603) | fix(sdk-java): Harden daemon transport reliability | Java SDK 适配 #7458 的 restart-safe event cursor 契约，附带 `eventEpoch` 透传 |
| [#7633](https://github.com/QwenLM/qwen-code/pull/7633) | fix(cli): align TUI icon columns | 工具状态图标与助手前缀列对齐到 2 列宽度，修复视觉错位 |

> 已合并或关闭的代表修复：[#7255](https://github.com/QwenLM/qwen-code/pull/7255)（OAuth URL 改为 OSC 8 超链接，关 #6428）、[#7195](https://github.com/QwenLM/qwen-code/pull/7195)（MCP Streamable HTTP 改用独立 undici fetch）、[#6506](https://github.com/QwenLM/qwen-code/pull/6506)（大粘贴性能优化，260K 字符由 ~1.7s 显著下降）。

---

## 📈 功能需求趋势

从 47 条 Issue 中归纳当前社区最热的五个方向：

1. **IDE 与编辑器集成**：`qwen serve` 在 VSCode Companion 的图像附件（#7489）、Web Shell 移动端 CodeMirror（#5958）、VSCode 终端未使用（#7578）等议题集中体现开发者希望 Qwen Code 深度嵌入主流 IDE。
2. **记忆与上下文外部化**：#7287 暴露 `MEMORY.md` 写入缺陷，#7449/#7585 双轨提案"企业外部记忆 / 直接外部上下文提供者"，#7575 则指出 `serve` 模式下用户级 skills 缺位——三者共同指向**跨会话上下文持久化**需求。
3. **频道生态扩展**：微信 (#7590)、Telegram (#7609)、GitHub (#7632) 三大频道适配器同时推进，Qwen Code 正加速成为多端对话入口。
4. **冷启动与体积优化**：#7264 是 ACP 进程 17.24 MiB eager closure 的后续切片，#7594 把 compile cache 拓展到 ACP 子进程——性能团队持续在**首发延迟**上发力。
5. **可观测性与发布治理**：#7167 Fleet Shepherd 自动看板、#7630 `review/self-reported` 自标 PR、#7616 反思 E2E 测试策略，反映项目从"功能交付"转向"流程与质量治理"。

---

## 🧭 开发者关注点

汇总 47 条 Issue 与 50 条 PR 的反馈，开发者社区当前痛点高度集中：

- **🔴 v0.20.1 更新检查链路全线回归**：mise bash 包装器（#7543）、npm 12 数组返回（#7520）、registry 网络假阳性（#7515）、孤儿更新产物（#7539）形成**四重故障**，直到 #7539/#7542 清理与提示机制才闭环。建议发布团队在 minor 版本上加更严格的 `mise` / npm 兼容性矩阵测试。
- **🔴 E2E 流水线信噪比低**：连续多日 #7516/#7559/#7605 主分支 E2E 红牌，#7616 直接质疑"测了不该测的东西"——用非确定性模型 API 校验确定性逻辑已成为明显反模式，亟需分层重构或引入 model-mock 通道。
- **🟡 TUI 渲染细节反复回退**：`qwen resume` 空白区（#7485）、图标列对齐（#7633 修复）、状态行刷新（#6806）、闪烁（#6137）、文件名消失（#6014）等多条小回归表明 TUI 缺少视觉回归快照测试。
- **🟡 MCP 集成成熟度不足**：`getNpmCliPath` 这类底层路径解析、MCP Streamable HTTP 的超时默认值（#7195 已修）、OAuth URL 折行（#7255 已修）显示**集成层在 v0.20 上仍较脆弱**。
- **🟢 积极信号**：`@doudouOUC`（企业记忆、冷启动、SDK 硬化）、`@yiliang114`（CI 反思）、`@wenshao`（流程治理）、`@LaZzyMan`（@session 引用 / 视频学习）等核心贡献者持续高质量输出，多条 P2 在 24 小时内从 issue→PR→合并闭环，社区响应速度保持健康。

---

> 报告基于 2026-07-24 GitHub 数据自动生成，所有链接指向 `QwenLM/qwen-code` 仓库对应条目。

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-24** · 数据来源：[Hmbown/CodeWhale](https://github.com/Hmbown/CodeWhale)

---

## 📌 今日速览

过去 24 小时内仓库未发布新版本，但社区进入了一轮密集的**安全与可靠性审计期**：维护者 Hmbown 一次性提交了 14 个高优先级 Issue，集中暴露 execpolicy / MCP / state / hooks / lane 等模块的并发安全、路径大小写、命令解析等关键问题，配合 17 个未处置的 Dependabot 警报，v0.9.1 的发布门槛被明确锁定为"完成仓库级安全审查"。与此同时，2 个 Stop-Ship 级 TUI 启动崩溃与 Composer 大段粘贴数据损坏问题引发广泛关注。

---

## 🚀 版本发布

*今日无新版本发布。* 当前主线为 **v0.9.1 发布关口**（参见 #4713），目标完成后才会继续推进 v0.9.2（#4610 已预备 session token header 新功能）。

---

## 🔥 社区热点 Issues（Top 10）

> 排序逻辑：优先级标签（stop-ship / security） > 评论热度 > 影响面

### 1. [#4716](https://github.com/Hmbown/CodeWhale/issues/4716) — `codew`/`codewhale` 启动后立即退出 ⛔ Stop-Ship
在 macOS 全新 Terminal.app 标签页中运行 TUI 直接退回 `[Process completed]`，CLI 帮助命令正常。v0.9.1 候选版本 `0dfe9170a10e` 必现，严重阻塞发布验收。

### 2. [#4713](https://github.com/Hmbown/CodeWhale/issues/4713) — v0.9.1 发布门槛：安全深度扫描与依赖警报处置 🛡️
明文列出 v0.9.1 发布前的硬性条件：处理 **17 个 Dependabot 警报**（7 high / 10 moderate，覆盖 axios、brace-expansion、ws 等 npm 家族），并完成全仓安全审查。这是当前版本流程的"守门人"。

### 3. [#4719](https://github.com/Hmbown/CodeWhale/issues/4719) — Composer：大段粘贴提示词在提交前发生字节级损坏
长 prompt 在路径截断（`codewhale-v091-exact-88a158-ci` → `work-88a158-ci`）、换行错乱、字符丢失，下游代理据此给出错误结论。数据完整性问题，影响所有长指令工作流。

### 4. [#4727](https://github.com/Hmbown/CodeWhale/issues/4727) — `codewhale mcp-server` 从不拉起配置的 MCP 服务，全部返回伪造 stub
MCP 服务器模式从未真正 spawn 用户配置的服务器，而是返回硬编码 stub 响应。所有依赖 MCP 的工作流实际运行在"假工具"之上。**信任与可观测性双重崩塌**。

### 5. [#4717](https://github.com/Hmbown/CodeWhale/issues/4717) — 设置菜单在非 DeepSeek provider 下仍突出显示 "DeepSeek fallback model"
当活跃 provider 为 `zai / GLM-5.2` 时，Model 区仍以显著位置展示"DeepSeek fallback model: deepseek-v4-pro"。遗留的 DeepSeek-era 假设未清理，品牌与配置语义不一致。

### 6. [#4720](https://github.com/Hmbown/CodeWhale/issues/4720) — Provider / 模型自动切换体验粗糙
运行中代理静默从 `deepseek-v4-pro` 切到 `zai / GLM-5.2`，切换时机、原因、对用户暴露程度都不透明。涉及核心路由策略，呼应 #4717。

### 7. [#4723](https://github.com/Hmbown/CodeWhale/issues/4723) — Windows 巴西 ABNT2 键盘：`AltGr+Q` 触发帮助浮层而非输入 "/"
ABNT2 键盘的 `/` 必须用 `AltGr+Q`，Windows 上报为 `Ctrl+Alt+Q`，但被 TUI 全局快捷键吞掉。**本地化输入可达性 bug**。

### 8. [#4725](https://github.com/Hmbown/CodeWhale/issues/4725) — execpolicy 路径规则无条件小写化，破坏大小写敏感文件系统 🛡️
`parse_path_for_matching` 不分平台把整条路径 lowercase，在 Linux ext4 / macOS APFS（区分大小写模式）下放行本应被拒的路径，**安全策略绕过**。

### 9. [#4740](https://github.com/Hmbown/CodeWhale/issues/4740) — execpolicy `denied_prefixes` 可通过在子命令前插入 flag 绕过 🛡️
`denied_prefixes = ["git push"]` 被纯字符串匹配，`git --no-pager push` 即可绕过。命令 token 化缺失导致**核心拒止规则形同虚设**。

### 10. [#4729](https://github.com/Hmbown/CodeWhale/issues/4729) — MCP 限定工具名 sanitize 后会跨服务器碰撞 🛡️
`sanitize_component` 对非字母数字字符一律转 `_`，不同 server/tool 名可能坍缩到同一个 `mcp__x__y` 限定名，导致工具路由歧义与潜在越权。

---

## 🛠️ 重要 PR 进展

> 今日仅 4 个 PR 处于活跃状态，全部纳入。

### ✅ [#4346](https://github.com/Hmbown/CodeWhale/pull/4346) — `fix: sanitize tool input_schema for Anthropic adapter`（CLOSED）
修复合 Anthropic 时含顶层 `oneOf/anyOf/allOf` 的工具被服务端 HTTP 400 拒收的问题。补齐跨厂商工具描述兼容性，**已合并**。

### 🔄 [#4724](https://github.com/Hmbown/CodeWhale/pull/4724) — `fix(tui): archive completed background shell output`（OPEN，作者 qinlinwang）
后台 Shell 任务结束时，把最终 stdout/stderr 尾段归档进所属 ExecCell，冻结显示时长，构建既有的 output summary。**补全后台任务的"完结证据链"**。

### 🔄 [#4722](https://github.com/Hmbown/CodeWhale/pull/4722) — `fix(tui): show complete edit previews in details`（OPEN，作者 nightt5879）
`edit_file` 审批卡保持紧凑，完整 `-/+` 搜索/替换预览改为按需在 Alt+V 详情分页器中渲染，并新增回归测试。**解决审批信息密度与完整性的矛盾**。

### 🔄 [#4610](https://github.com/Hmbown/CodeWhale/pull/4610) — `[v0.9.2] feat(tui): add configurable session token header`（OPEN，作者 XhesicaFrost）
引入可扩展的 `tui.header_items` 配置契约，支持 `header_items = ["tokens"]` 在 TUI 顶部显示累计输入/缓存命中/输出 token。**为 v0.9.2 预埋首个可见特性**。

---

## 📈 功能需求趋势

| 方向 | 代表 Issue | 社区信号 |
|---|---|---|
| **安全/审计基线** | #4713、#4725、#4726、#4729、#4730、#4740 | 一次提交 14+ 安全类 issue，呈"系统性排查"而非单点修复 |
| **Provider / 模型路由可观测性** | #4717、#4720、#4719 | 跨 provider 切换、品牌残留、粘贴损坏三个独立 issue 共同指向"路由层 UX 不成熟" |
| **本地化与跨平台 TUI** | #4723、#4716 | macOS 启动崩溃 + Windows ABNT2 输入冲突，说明快捷键与终端初始化缺乏矩阵测试 |
| **后台任务证据可追溯** | #4724、#4721 | 后台 shell 输出归档 + 设置菜单审计 = "信息可回放"的整体诉求 |
| **MCP 可信度** | #4727、#4728、#4729 | 三个 MCP 相关 bug 同时暴露：从不拉起、错误重试、名称碰撞 |
| **状态存储可靠性** | #4734、#4735、#4736、#4737、#4738 | SQLite 无 busy_timeout/WAL、JSONL 单行污染、并发压缩丢数据 → 并发模型整体欠缺 |
| **可配置 UI 扩展点** | #4610、#4718 | `header_items` 配置契约与 transcript 密度调整 → 社区期待"可定制 TUI" |

---

## 👨‍💻 开发者关注点

1. **并发原语普遍缺失**：hooks（#4741/#4739）、state（#4734/#4735/#4736）、lane（#4731）、app-server（#4737/#4738）、MCP（#4728）全部出现"无锁/不可中断/不可取消"的同类问题，说明仓库的并发模型未统一，**`JsonlHookSink` 已被重复提交两次**（#4739 与 #4741 内容一致），反映开发者对快速通道关闭流程的不满。
2. **安全策略绕过面集中**：execpolicy 连续 3 个 issue（#4725、#4726、#4740）+ MCP 1 个（#4729）+ 提权白名单（#4730）+ 子代理沙箱（#4042 已 CLOSED），构成完整的"策略层 → 工具层 → 子代理层"安全纵深缺口图谱。
3. **v0.9.1 → v0.9.2 的过渡焦虑**：#4713 明确把 v0.9.1 锁在"先安全后功能"，但 v0.9.2 的特性（如 #4610 token header）已经在排队，社区担心发布节奏被安全债拖累。
4. **DeepSeek → CodeWhale 迁移期的 UX 债**：#4717、#4720、#4721 集中指向"DeepSeek-era 假设未清理"，设置菜单、provider 切换、density 都需要一次系统性审计，而非逐项打补丁。
5. **"可终止性"是核心痛点**：#4738（无法取消 in-flight turn）、#4731（worktree/branch 不联动清理）、#4737（失败配置仍拆桥）都体现"操作一旦发起便不可逆/不可中断"，是开发者最希望改进的系统属性。

---

*日报生成时间：2026-07-24 · 数据窗口：过去 24 小时更新*

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*