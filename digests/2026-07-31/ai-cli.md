# AI CLI 工具社区动态日报 2026-07-31

> 生成时间: 2026-07-31 02:09 UTC | 覆盖工具: 9 个

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
**数据周期：2026-07-30 ~ 2026-07-31｜数据源：各项目 GitHub 公开动态**

---

## 一、生态全景

2026 年 7 月末的 AI CLI 工具生态呈现出**「成熟工具补短板、新兴工具抢赛道」**的双线态势：Anthropic、OpenAI、Google 三家的旗舰 CLI 均已步入"海量用户暴露脆弱性"的阶段，issue 焦点从"能不能用"转向"能不能稳定用、能不能管控用"；同时 OpenCode、Pi、CodeWhale 等新兴项目借力多 Provider 抽象与协议重构抢占差异化定位。**「子代理失控」「上下文/Token 可见性」「Provider 适配碎片化」「TUI 跨平台稳定性」**是本周期所有工具共同面对的四类核心挑战，反映行业正从"模型能力竞争"切换至"工程化与可观测性竞争"。

---

## 二、各工具活跃度对比

| 工具 | 24h Issue 更新 | 24h PR 合并 | 版本发布 | 整体状态 |
|------|---------------|-------------|----------|----------|
| **Claude Code** | ~50 | 1 | ❌ 无 | v2.1.220 长期未更新，社区不满累积 |
| **OpenAI Codex** | 10+ 高优 + 多条次级 | 15+ | ❌ 无 | codex-cli 0.145.0+，PR 流水线最活跃 |
| **Gemini CLI** | 10 焦点 | 10 | ❌ 无 | 安全加固+Agent 修复双线推进 |
| **GitHub Copilot CLI** | 10 焦点 | 0 | ✅ **v1.0.77** | 唯一当日发版，但仍暴露多项回归 |
| **Kimi Code CLI** | 3 | 1 | ❌ 无 | 社区体量小，聚焦可靠性 |
| **OpenCode** | 10+ 焦点 | 10+ | ✅ **v1.18.10** | 当日最活跃的版本+PR 组合 |
| **Pi** | 50（24h） | 31 | ❌ 无 | 协议重构密集期，PR 数量全场最高 |
| **Qwen Code** | 10 焦点 | 10 | ⚠️ nightly | 多供应商适配+桌面端产品化 |
| **DeepSeek TUI / CodeWhale** | 26 | 11 | ✅ **v0.9.2** | 品牌切换期，聚焦架构减肥 |

> 热力注释：**Pi** 的 PR 数量（31 条）显著领先，**OpenCode** 与 **DeepSeek/CodeWhale** 在版本迭代与架构重构上最具攻击性，**Claude Code** 虽-issue 量最高但官方响应节奏最慢。

---

## 三、共同关注的功能方向

### 1. 🔴 子代理 / 多 Agent 可观测性与计费护栏
- **Claude Code** #82104（TaskStop 失效，浪费 750k token）、#77730（后台 agent ID 失效）
- **OpenAI Codex** #26930（Subagent 推理等级重置）、#35097、#34821
- **Gemini CLI** #22323（subagent 误报 GOAL success）、#21409（generalist 挂起）、#21968（技能自发现不足）
- **OpenCode** 虽无明确 subagent issue，但 v1.18.10 多次涉及 session 状态修复
- **Qwen Code** #8128（subagent 状态对外暴露）
- **DeepSeek/CodeWhale** #4022/#3950（subagent CLI/TUI 对齐、拆分 6,970 行 mod.rs）

**统一诉求**：per-agent token cap、运行时用量仪表盘、supervisor/worker 协议、状态机失败语义标准化。

### 2. 🔴 上下文窗口与压缩策略
- **GitHub Copilot CLI** #4310（默认 128K 硬编码，对 1M 模型过早压缩）
- **Claude Code** #63566（`/claude-api` skill 无条件吃 77% 上下文）、#82761
- **OpenAI Codex** #23257（压缩反复嵌入 base64）、#35647
- **Gemini CLI** #28488（auto-compress on overflow PR）
- **DeepSeek/CodeWhale** #4394/#4704/#4707/#4709/#4710（稳健压缩契约全套）

**统一诉求**：能力感知路由、自动压缩策略、压缩失败 receipt 持久化、跨模型 token 归因。

### 3. 🟠 Provider 适配碎片化
- **Claude Code**：多账号切换被官方 invalid（#36151）
- **OpenAI Codex** #13200（Slack MCP OAuth DCR 失败）
- **Gemini CLI**：模型选择器缺失 3.5/3.6 flash（#28485）
- **Pi** #7047（Gemini 3.x tool-call id 丢失导致第二轮断流）、#7161（缺 `x-client-request-id`）、#5871（OAuth 硬编码 `sk-ant-oat`）
- **OpenCode** #39787（xAI 选项映射）、#37598/#37666（GLM-5.2 429、DeepSeek v4 提前放弃）
- **DeepSeek/CodeWhale** #4978（Anthropic 兼容层 400 错误）

**统一诉求**：声明式 Provider 元数据、tool-call id 透传、reasoning effort/finish_reason 字段 reconcile、OAuth 发现标准。

### 4. 🟠 TUI 跨平台稳定性
- **Claude Code** #74055（Windows 调度器任务风暴）
- **GitHub Copilot CLI** #4294（COLORTERM 注入）、#4296（iTerm2 粘贴）、#2841（MobaXterm）
- **Pi** #6300（Windows 每键重绘）、#7248（Wayland 剪贴板）、#7340（light 终端 bold 不可见）
- **Gemini CLI** #25166（shell 卡死）、#21983（Wayland browser subagent）、#24935（buffer 损坏）
- **Qwen Code** #8124（启动横幅缺行）、#8131（statusline 不可选）、#7972（Windows 崩溃 3 次）

**统一诉求**：ANSI/raw 模式抽象、终端能力探测、键盘布局本地化、跨平台事件循环。

### 5. 🟡 MCP / 扩展生态
- **OpenAI Codex** #13200（Slack MCP 登录）、#36218/#36239（连接器重构）
- **GitHub Copilot CLI** #4301（anyOf schema 字符串化）
- **Gemini CLI** #28481（MCP OAuth token 刷新）、#28410（tools/list 10 分钟挂起）
- **OpenCode** #39764（session.request 钩子）、#39776（TUI 插件热重载）
- **Qwen Code** #8057（Skills `disabledLevels`）、#8059（Hook `SessionDelete`）
- **Pi** #6747（markdown 渲染钩子）、#7148（`/loadout` 动态启停）

**统一诉求**：MCP 协议级 OAuth 兼容、union schema 序列化、插件生命周期隔离、CRUD 钩子完备化。

### 6. 🟡 成本与额度透明化
- **Claude Code** #82104（750k token 失控）、#77730
- **OpenAI Codex** #35552、#36213（GPT-SOL 5.6 配额争议）、#24080（暴露 resetsAt 等字段）
- **GitHub Copilot CLI** #4295（信用额度预警）、#4308/#4309（空闲计费）
- **OpenCode** #37748（Zen 配额计费）、#39790（429 重试到配额重置）

**统一诉求**：status_line 暴露余额/重置时间、per-task 硬上限、空闲态停止计费。

---

## 四、差异化定位分析

| 工具 | 核心定位 | 目标用户 | 技术路线特征 |
|------|----------|----------|--------------|
| **Claude Code** | 企业级深集成 | 付费开发者 / 企业 IT | Cowork 桌面端 + Hooks 自动化 + Subagent |
| **OpenAI Codex** | 全平台 + 多模态 | 个人开发者 → 企业 | app-server 协议 + MCP 重构 + MultiAgent |
| **Gemini CLI** | AI-first IDE 替代 | Google Cloud 用户 | AST 感知 + 行为评估 + Auto Memory |
| **GitHub Copilot CLI** | DevOps 自动化 | GitHub 生态企业 | OAuth 浏览器流 + autopilot + BYOK |
| **Kimi Code CLI** | 中文长上下文 | 国内 / 中文用户 | 简单直接，扩展接口修复导向 |
| **OpenCode** | **多 Provider 路由器** | 模型切换重度用户 | Modal 自动发现 + 本地 LAN / LiteLLM + 插件 |
| **Pi** | **Agent 扩展平台** | 扩展开发者 / 协议尝鲜者 | transport-neutral protocol + markdown 钩子 + FTS5 |
| **Qwen Code** | 多供应商 + 桌面端 | 阿里云 / 中文企业 | Anthropic/OpenAI/Gemini 三适配 + Tauri 桌面 |
| **DeepSeek TUI / CodeWhale** | **单 binary TUI + 远程化** | 终端原住民 / 远程工作流 | 子代理控制面 + 压缩契约 + 命令边界重构 |

**关键差异**：
- **OpenCode** 与 **Pi** 走"协议中立 / Provider 无关"路线，吸引希望不被任一厂商锁定的用户；
- **Claude Code** 与 **GitHub Copilot CLI** 更深绑定自家生态（Anthropic Max / GitHub Actions）；
- **CodeWhale** 与 **Gemini CLI** 强调 TUI 体验，但前者侧重架构减肥与远程化，后者侧重 AST 智能化；
- **Kimi** 与 **Qwen Code** 在中文社区与本地化 i18n 上有差异化优势。

---

## 五、社区热度与成熟度

### 🔥 热度梯队（按 24h Issue + PR 综合活跃度）

| 梯队 | 工具 | 特征 |
|------|------|------|
| **第一梯队**（高度活跃） | **Pi**、**OpenCode**、**DeepSeek/CodeWhale** | PR 数量多、版本发布节奏快、底层重构密集 |
| **第二梯队**（稳定活跃） | **OpenAI Codex**、**Gemini CLI**、**Claude Code** | Issue 体量最大、但官方响应周期长、积压明显 |
| **第三梯队**（一般活跃） | **GitHub Copilot CLI**、**Qwen Code** | Issue 频次中等，PR 节奏受发版周期影响 |
| **第四梯队**（低活跃） | **Kimi Code CLI** | 社区体量小，方向集中于稳定性 |

### 📊 成熟度信号

| 维度 | 表现最优 | 表现最弱 |
|------|----------|----------|
| **版本节奏** | OpenCode（频繁发版）、GitHub Copilot CLI（v1.0.77 当日发版） | Claude Code（v2.1.220 长期未更新） |
| **PR 流水线** | Pi（31 条）、OpenAI Codex（15+ 条） | GitHub Copilot CLI（0 条） |
| **企业级关注** | Claude Code、OpenAI Codex、GitHub Copilot CLI | Kimi、Pi（个人/极客导向） |
| **架构现代化** | OpenCode（plugin hot-reload）、Pi（protocol/client）、CodeWhale（rust crate 拆分） | Claude Code（v2.1.220 暴露出 Hooks 等子系统长期未重构） |
| **安全响应** | Gemini CLI（SSRF + Node 20 EOL 集中修复）、Qwen Code（URL authority 净化） | Claude Code（Hooks 沉默失败 #6305 一年未修） |

---

## 六、值得关注的趋势信号

### 📌 趋势 1：**"Agent Harness" 抽象正在取代"Code Agent"概念**
Pi 提出 `AgentHarness.shutdown()`、CodeWhale 拆分 `subagent/mod.rs`、OpenCode 暴露 `session.request` 钩子、Qwen Code 推动"LLM 排除在信任边界外"——**业界正从"agent 是单进程"转向"agent 是可被外部 harness 编排的生命周期"**。这对开发者意味着：未来选型时应优先考虑原生支持 supervisor/worker 协议、可观测事件流的工具。

### 📌 趋势 2：**"能力感知路由"取代"默认 128K 上下文"**
GitHub Copilot CLI #4310、Claude Code #63566、Gemini CLI #28488 都指向同一信号：**一刀切的 Token 预算时代结束**。模型路由层将根据能力元数据（context window、tool count、thinking budget）动态决策压缩策略与子代理分配。

### 📌 趋势 3：**Provider 抽象从"开关式"走向"声明式"
OpenCode 暴露 connector candidates、Pi 把 OAuth 检测改为 Provider 声明、CodeWhale 文档化授权顺序 8 步管道——**多 Provider 支持不再是"加个 if-else"，而是显式的能力元数据 + 字段映射 + 错误 reconcile 体系**。开发者若需自建 LLM 网关，应参考这一范式。

### 📌 趋势 4：**Token 计费正成为"用户信任"的核心战场**
7 个工具中有 6 个出现"计费不可见 / 失控 / 误计"类 issue。**透明化工具（status_line、实时仪表盘、硬上限、降级队列）将从"加分项"变为"续费决定项"**。Gemini CLI #28488、OpenAI Codex #24080、GitHub Copilot CLI #4295 都预示 2026 下半年会出现一波"成本可观测性"军备竞赛。

### 📌 趋势 5：**TUI 跨平台细节正在定义"开发者体验下限"**
从 Windows 每键重绘、Wayland 剪贴板、COLORTERM 注入到 ABNT2 键盘误触，**这些"小问题"正在成为用户从工具 A 迁移到工具 B 的核心决策点**。建议优先选择有活跃跨平台 PR 流水线的工具（如 OpenCode、Pi、CodeWhale）。

### 📌 趋势 6：**"远程化 / 多端同步"成为下一阶段战略高地**
Pi 一次性发布 `pi-protocol` + `pi-client` + `harness shutdown` 三件套、CodeWhale 推进 `Local (LAN)` 发现、OpenAI Codex 推进 Codex Remote workspace——**"我从手机/网页继续昨天在终端的会话"将成为标配能力**。建议关注这三条技术路线的标准化进展。

---

## 七、行动建议

| 角色 | 建议 |
|------|------|
| **个人开发者** | **OpenCode**（多 Provider + 插件热重载）或 **Pi**（扩展 API 表面）适合尝鲜；**Claude Code** / **GitHub Copilot CLI** 适合追求深度集成但需关注稳定性 |
| **企业团队** | 优先考虑 **OpenAI Codex**（app-server 协议成熟）与 **GitHub Copilot CLI**（OAuth + BYOK + 浏览器流完整），但需自行补足 token cap 与身份审计 |
| **扩展开发者** | **Pi**（markdown 钩子、`/loadout`）与 **OpenCode**（session.request 生命周期）提供了最丰富的扩展点 |
| **架构决策者** | 关注"Agent Harness 抽象"与"声明式 Provider"两条主线，避免锁定在单家模型 + 单家 CLI 的栈上 |
| **可靠性优先** | 短期内仍需为 **Claude Code v2.1.220** 准备回退方案；**CodeWhale** 与 **OpenCode** 的快速迭代也意味着版本回归风险较大 |

---

> 📊 **数据口径**：基于 2026-07-30 ~ 2026-07-31 各项目 GitHub 公开 Issues / PRs / Releases。不同项目的"活跃度"指标不完全可比（部分项目未公开全部数据），建议结合历史趋势与本报告交叉验证。

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告
**数据截止：2026-07-31 | 数据源：github.com/anthropics/skills**

---

## 1. 热门 Skills 排行（按社区关注度）

| # | PR | Skill 名称 | 核心功能 | 状态 |
|---|-----|-----------|---------|------|
| 1 | [#1298](https://github.com/anthropics/skills/pull/1298) | **skill-creator 修复包** | 修复 `run_eval.py` 始终报告 0% recall 的核心 bug（影响 SDK 描述优化循环），同时修复 Windows 子进程、编码与并发问题 | OPEN |
| 2 | [#1367](https://github.com/anthropics/skills/pull/1367) | **self-audit** | 交付前的输出审计：先做机械文件校验，再按四维度（严重性排序）做推理质量门控 | OPEN |
| 3 | [#514](https://github.com/anthropics/skills/pull/514) | **document-typography** | 排版质量控制：防止孤词换行、寡行段落、编号错位等几乎所有 AI 生成文档的通病 | OPEN |
| 4 | [#83](https://github.com/anthropics/skills/pull/83) | **skill-quality-analyzer / skill-security-analyzer** | 两个元技能：5 维度质量评估 + 安全审计，用于 Skill 自身治理 | OPEN |
| 5 | [#486](https://github.com/anthropics/skills/pull/486) | **ODT** | OpenDocument 格式生成与解析（.odt/.ods），与 docx/pdf 形成互补 | OPEN |
| 6 | [#1302](https://github.com/anthropics/skills/pull/1302) | **color-expert** | 颜色知识综合技能：命名系统（ISCC-NBS、Munsell、XKCD）、色彩空间使用决策表 | OPEN |
| 7 | [#723](https://github.com/anthropics/skills/pull/723) | **testing-patterns** | 全栈测试模式：Testing Trophy 哲学、单元测试、React 组件测试、QA 辅助 | OPEN |
| 8 | [#1479](https://github.com/anthropics/skills/pull/1479) | **plan-file-hygiene** | 解决规划制品无生命周期、不断累积的痛点（对应 issue #1417） | OPEN |

**讨论焦点**：前三名均为「通用基础设施型」技能——质量门控、文档排版、Skill 治理本身，反映社区已从「堆功能」转向「建标准」。

---

## 2. 社区需求趋势（Issues 信号）

| 需求方向 | 代表 Issue | 评论数 | 社区诉求 |
|---------|-----------|-------|---------|
| **🔒 安全与信任边界** | [#492](https://github.com/anthropics/skills/issues/492) | **43** | 社区 Skill 以 `anthropic/` 命名空间分发，冒充官方，存在权限滥用风险 |
| **🏢 组织级协作** | [#228](https://github.com/anthropics/skills/issues/228) | 16 | 在 Claude.ai 内实现 Org-wide Skill 共享，免去手动下载/上传流程 |
| **🛠️ skill-creator 工具链** | [#556](https://github.com/anthropics/skills/issues/556) (12)、[#1169](https://github.com/anthropics/skills/issues/1169) (3)、[#1061](https://github.com/anthropics/skills/issues/1061) (3) | 18+ | run_eval 全平台失效、Windows 全面不兼容、描述优化循环失效 |
| **🧠 智能体记忆压缩** | [#1329](https://github.com/anthropics/skills/issues/1329) | 9 | `compact-memory`：符号化压缩长时 Agent 状态，减少上下文占用 |
| **📦 打包与互操作** | [#16](https://github.com/anthropics/skills/issues/16) | 4 | 将 Skills 暴露为 MCP，统一 AI 软件的 API 协议 |
| **🧮 上下文窗口治理** | [#1487](https://github.com/anthropics/skills/issues/1487) | 4 | `claude-api` 单次注入 156k token，需懒加载机制 |
| **🏛️ 重复内容/插件治理** | [#189](https://github.com/anthropics/skills/issues/189) | 6 | `document-skills` 与 `example-skills` 插件内容重复 |
| **🤖 Agent 治理与审计** | [#412](https://github.com/anthropics/skills/issues/412) (CLOSED)、[#1385](https://github.com/anthropics/skills/issues/1385) | 9 | 政策执行、威胁检测、推理质量门控 Pipeline |

**趋势归纳**：从「要更多 Skill」转向「要让 Skill 体系更安全、更可靠、更省 Token」。

---

## 3. 高潜力待合并 PR（活跃但未合并）

这些 PR 关注度高、功能完整，可能在近期落地：

- **[#1298](https://github.com/anthropics/skills/pull/1298)** — skill-creator 核心修复，涉及 10+ 复现报告，阻塞整个描述优化生态，合并优先级最高
- **[#1367](https://github.com/anthropics/skills/pull/1367)** — self-audit 通用质量门控，与 issue #1385 提案呼应
- **[#1479](https://github.com/anthropics/skills/pull/1479)** — plan-file-hygiene，闭环 #1417 长期搁置问题
- **[#1302](https://github.com/anthropics/skills/pull/1302)** — color-expert，独立的色彩知识图谱，独立价值高
- **[#83](https://github.com/anthropics/skills/pull/83)** — 元技能（质量/安全分析），回应 #492 安全焦虑
- **[#1261](https://github.com/anthropics/skills/pull/1261)** — trigger-eval 隔离，修复 #1260 写脏用户项目的生产风险
- **[#514](https://github.com/anthropics/skills/pull/514)** — document-typography，所有文档类 Skill 的通用补丁

> 共同特征：均聚焦 **Skill 工程化基座**，而非单一领域功能。

---

## 4. Skills 生态洞察

> **社区当前最集中的诉求是「Skill 工程化」——把 Skill 从「Prompt 模板」升级为「可审计、可治理、可度量、可跨平台」的一等公民，重点解决信任边界（#492）、工具链失效（#556/#1169）、上下文与生命周期治理（#1487/#1417）三大基础问题。**

---

### 📎 备注
- 本期所有 PR 状态均为 **OPEN**，显示官方合并节奏放缓或评审门槛提升；
- Issue #492（43 评论）已远超其他议题，是当前社区第一优先级；
- skill-creator 相关修复占高活跃 PR 的 5/20，说明**基础设施缺陷**已成为生态最大瓶颈。

---

# Claude Code 社区动态日报
**日期：2026-07-31**

---

## 📌 今日速览

今日 GitHub 仓库无新版本发布，社区关注度集中在**桌面端 Cowork 稳定性**（多平台数据丢失、OAuth 故障、内核级崩溃）与**子代理 / Hooks 系统的失控问题**上。值得警惕的是 #6305（macOS Hooks 不执行）、#43719（自动更新导致 Cowork 会话丢失）与 #82104（TaskStop 无法终止子代理，750k token 浪费）三起高严重度问题持续累积用户不满，但官方在 24 小时内未给出修复 release。

---

## 🚀 版本发布

**过去 24 小时无新版本发布。** Issue 中提及的最新版本仍为 CLI `v2.1.220`（2026-07-14 起被广泛报告存在多个回归）。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#36151](https://github.com/anthropics/claude-code/issues/36151) — 多账号切换功能请求（已标记 invalid）
- **评论数：148｜👍：530**
- 尽管官方标记为 invalid，该帖是整个仓库当前热度最高的 issue。用户强烈要求在 Claude Mobile 上支持不共享邮箱的多账号切换。社区反应表明该需求被普遍低估。

### 2. [#6305](https://github.com/anthropics/claude-code/issues/6305) — Post/PreToolUse Hooks 在 macOS 上不执行
- **评论数：38｜👍：16**
- 自 2025-08 创建至今未修复的长期 bug，`.claude/settings.local.json` 中配置的 Hooks 完全没有触发。Hooks 是企业级自动化的核心机制，影响范围极广。

### 3. [#82104](https://github.com/anthropics/claude-code/issues/82104) — TaskStop 无法终止子代理，浪费 750k token
- **评论数：2**
- 三个缺陷叠加：(1) 父 agent TaskStop 不传递到子 agent；(2) 无运行时用量可见性；(3) 无费用上限。事件中被多计费 750,460 token，反映计费层缺乏硬性保护。

### 4. [#43719](https://github.com/anthropics/claude-code/issues/43719) — 自动更新清除 Cowork 会话磁盘（数据丢失）
- **评论数：5｜👍：2**
- **标记：regression, data-loss**。一次自动升级直接清除了用户的项目磁盘内容，且无任何恢复机制。属于 P0 级生产事故。

### 5. [#59854](https://github.com/anthropics/claude-code/issues/59854) — Cowork GitHub 连接器完全不可用
- **评论数：5｜👍：12**
- OAuth DCR 协议不支持、UI 显示误导状态、Disconnect 按钮失效。GitHub 集成是 Cowork 最常见场景，阻塞所有相关团队协作。

### 6. [#77730](https://github.com/anthropics/claude-code/issues/77730) — 后台 agent ID 在会话身份切换后无法解析
- **评论数：7**
- 导致后台 agent 只能全量重建上下文，token 燃烧严重。反映了后台 agent 持久化层设计缺陷。

### 7. [#78834](https://github.com/anthropics/claude-code/issues/78834) — Grep 工具在 64KB 文件上分配 4–17 GB 内存
- **评论数：3**
- `v2.1.214` 引入的正则引擎（ugrep）在 `.{N}` + `.{0,M}` 模式上以约 230 MB/s 持续分配内存。严重影响 Linux/WSL2 用户。

### 8. [#63566](https://github.com/anthropics/claude-code/issues/63566) — `/claude-api` 内置 skill 无条件吃满 ~77% 上下文
- **评论数：6｜👍：7**
- 中性提问即触发 token 飙升。技能系统缺少条件加载逻辑，是性能回归的典型案例。

### 9. [#74055](https://github.com/anthropics/claude-code/issues/74055) — 调度器重启后任务风暴（Windows）
- **评论数：2**
- 每日任务被重复触发，`enabled:false` 的任务也被执行，且 `lastRunAt` 不更新。Schedule/Routines 模块的状态机存在缺陷。

### 10. [#80973](https://github.com/anthropics/claude-code/issues/80973) — 无法更新支付方式，账户显示错乱
- **评论数：2**
- 用户被显示为 Free 套餐但实际为 Max 5x。订阅/支付链路与后端账户状态不一致，影响付费用户信任。

---

## 🔧 重要 PR 进展

过去 24 小时仓库**仅有 1 条 PR 更新**：

- [#82555](https://github.com/anthropics/claude-code/pull/82555) — `Claude/youtube instagram mcp yn2u6s`（已 CLOSED）
  - 提交者：`batuhunca-del`，无描述、无评论、无点赞。
  - 提交后立即关闭，未合入主干，反映社区代码贡献活跃度仍偏低，且官方对外部 PR 的接受流程不明。

> 备注：因 PR 数据不足，本期无法展示 10 条 PR 进展。建议关注官方近期是否释出针对 #6305、#43719 等高严重度 issue 的修复 patch。

---

## 📈 功能需求趋势

从近 24 小时活跃的 50 条 issue 中提炼出的社区诉求方向：

| 方向 | 代表 Issue | 社区热度 |
|------|-----------|----------|
| **Cowork 桌面端稳定性** | #43719, #59854, #71616, #72377 | 🔴 高（涉及数据丢失、内核崩溃） |
| **子代理 / 多 Agent 管理** | #77730, #82104, #78217 | 🟠 中高（涉及 token 失控、配置缺省） |
| **Hooks 系统修复** | #6305 | 🟠 高（长期未解，企业级阻塞） |
| **上下文 / 内存管理优化** | #63566, #79217, #82761 | 🟠 中（性能与可配置性） |
| **多账号与身份切换** | #36151, #80973 | 🟡 中（需求被官方 invalid） |
| **IDE 集成（VSCode）** | #82758, #82766 | 🟡 中（数学渲染、模型标识同步） |
| **多 Worktree / 多会话工作流** | #82764 | 🟡 新（统一审批面板） |
| **企业网络 / VPN 兼容性** | #82756, #82760, #82762 | 🟢 新兴（Microsoft GSA、代理穿透） |
| **本地化（i18n）** | #82763 | 🟢 新兴（非英文 prompt 失败） |
| **自动更新机制** | #82408 | 🟡 中（误导性错误状态） |

---

## 💡 开发者关注点

通过分析 issue 内容，社区当下最集中的痛点可归纳为以下五类：

1. **🔴 计费失控与可见性缺失** — 子代理无法被停止、token 消耗无硬上限、Hook/后台 agent 持续运行。开发者强烈呼吁引入 per-agent token cap 与实时用量仪表盘（#82104、#77730）。

2. **🔴 Cowork 数据可靠性** — 自动更新擦除会话、跨平台同步失败、iOS 自动归档。桌面端被定位为"尚未达到生产可用"（#43719、#81658、#71616）。

3. **🟠 Hooks 系统沉默失败** — 配置生效与否没有任何回执或日志，macOS 用户 Hooks 长期不触发。这让外部 CI/审计集成完全不可信（#6305）。

4. **🟠 性能回归频发** — Grep 内存爆炸、skill 无条件吃满 context、autocompact 变量静默失效。`v2.1.220` 被广泛质疑稳定性（#78834、#63566、#82761）。

5. **🟡 工作流协同能力不足** — 多 worktree、多会话下缺少统一的审批/状态聚合面板；VSCode 扩展中模型标识与 CLI 不同步；非英文 prompt 直接报错。开发者需要更成熟的"团队级"使用体验（#82764、#82766、#82763）。

---

> 📊 **本期数据来源**：github.com/anthropics/claude-code（50 条 issue 更新 / 1 条 PR 更新 / 0 次 release）

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**日期：2026-07-31**

---

## 📌 今日速览

今日 Codex 社区最显著的动态集中在 **Windows 平台稳定性** 上，多个高评论 Issue 涉及 Sysmon 驱动导致的 BSOD、PowerShell AST 内存泄漏、桌面应用 UI 卡死等系统性故障。**Rate Limit（速率限制）相关争议持续发酵**，特别是新发布的 GPT-SOL 5.6 模型被 Plus 用户认为配额不公平。同时，开发团队仍在积极推进 **MCP 连接器重构** 与 **app-server 协议优化**，有 20 余个相关 PR 完成合并。

---

## 🚀 版本发布

过去 24 小时无新版本发布。最近的活跃版本仍为 `codex-cli 0.145.0+` 与 Codex Desktop `26.721.4979.0`。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 关注度 | 为什么重要 |
|---|-------|--------|----------|
| 1 | **[#31035](https://github.com/openai/codex/issues/31035)** Windows 安装 SysmonDrv v13.22 引发 BSOD | 💬 22 | 严重系统崩溃级问题，影响 Windows Desktop 本地/PowerShell 会话，WinDbg 已确认根因 |
| 2 | **[#26478](https://github.com/openai/codex/issues/26478)** Windows Desktop 拼写检查显示 "No Guesses Found" | 💬 18 · 👍 25 | 广受认可的体验缺陷，系统自带拼写检查可用但 Codex 集成失败 |
| 3 | **[#35420](https://github.com/openai/codex/issues/35420)** OneDrive 工作区下流式连接反复断开 | 💬 17 | 影响 Windows 用户跨设备同步工作流，对企业用户尤为关键 |
| 4 | **[#35552](https://github.com/openai/codex/issues/35552)** Rate Limit 投诉帖 | 💬 13 | 反映社区对当前配额政策的不满情绪升温 |
| 5 | **[#32177](https://github.com/openai/codex/issues/32177)** 附加文本日志触发 "Request blocked" 并污染后续对话 | 💬 12 · 👍 11 | 安全拦截误判导致会话上下文被污染的高优先级问题 |
| 6 | **[#24080](https://github.com/openai/codex/issues/24080)** 请求将 rate-limit 重置时间、余额、套餐类型暴露为 status_line tokens | 💬 11 | 增强类请求，符合 CLI 透明化、可观测性的整体方向 |
| 7 | **[#13200](https://github.com/openai/codex/issues/13200)** Slack 官方 MCP 登录失败：`Dynamic client registration not supported` | 💬 10 · 👍 58 | 👍数极高，企业用户接入 Slack MCP 工作流的关键障碍 |
| 8 | **[#32707](https://github.com/openai/codex/issues/32707)** Pro 账号 5 小时用量桶从 App 与 API 中消失 | 💬 8 · 👍 3 | 订阅功能回退，影响付费用户的核心使用指标 |
| 9 | **[#26930](https://github.com/openai/codex/issues/26930)** Desktop 推理等级在 subagent 委托后从 xhigh 重置为 low | 💬 8 | 状态保留类缺陷，影响 Pro 用户的高级推理体验 |
| 10 | **[#23257](https://github.com/openai/codex/issues/23257)** Desktop 压缩检查点反复嵌入完整图片 base64 | 💬 8 · 👍 5 | 性能与存储放大问题，影响长期会话体验 |

**其他值得关注的已关闭/低活跃 Issue：**
- [#35681](https://github.com/openai/codex/issues/35681) ✅ 已关闭：Code Integrity 3033 错误（vk_swiftshader.dll）导致 MSIX 包损坏
- [#29317](https://github.com/openai/codex/issues/29317) Windows app-server PowerShell AST 内存泄漏 ~185GB，影响 RDP/RPC/SSH 执行
- [#34306](https://github.com/openai/codex/issues/34306) 网络安全请求安全拦截触发误判
- [#36213](https://github.com/openai/codex/issues/36213) GPT-SOL 5.6 对 Plus 用户不公平的争议
- [#34804](https://github.com/openai/codex/issues/34804) Codex 跨设备工作区连续性功能请求
- [#36251](https://github.com/openai/codex/issues/36251) ChatGPT-to-Codex 移交时附带模型与推理等级推荐

---

## 🔧 重要 PR 进展（Top 10）

| # | PR | 内容简介 |
|---|-----|----------|
| 1 | **[#31817](https://github.com/openai/codex/pull/31817)** 更新 models.json（自动化 bot） | 持续维护模型注册表 |
| 2 | **[#36239](https://github.com/openai/codex/pull/36239)** 刷新 app-server 预生成协议导出 | 在 `ExternalAgentConfigDetectResponse` 中暴露连接器候选，新增 `enterprise_cbp_automation` 计划类型 |
| 3 | **[#36237](https://github.com/openai/codex/pull/36237)** Windows 忽略符号化 `/tmp` 权限 | 修复 Unix 路径语义污染 Windows 沙箱策略的边界问题 |
| 4 | **[#36228](https://github.com/openai/codex/pull/36228)** 支持 Enterprise 自动化账户计划 | 在认证、后端响应、app-server 账户/限流 API 中识别 `enterprise_cbp_automation` |
| 5 | **[#36223](https://github.com/openai/codex/pull/36223)** 保留 read 命令操作中的执行器路径 | 客户端可访问执行器侧文件系统路径，而非主机侧路径 |
| 6 | **[#36221](https://github.com/openai/codex/pull/36221)** 协调 rollout 项时忽略透传元数据 | 修复重放工具调用时重复创建会话项的问题 |
| 7 | **[#36218](https://github.com/openai/codex/pull/36218)** 在外部 agent 检测中暴露连接器候选 | 为远程 MCP 配置与会话添加标准检测来源 |
| 8 | **[#36217](https://github.com/openai/codex/pull/36217)** Code Mode 仅通过独立 host 运行 | 将 V8 运行时抽离到 `codex-code-mode-runtime` 专用 crate，提升隔离性 |
| 9 | **[#31458](https://github.com/openai/codex/pull/31458)** exec-server：路由远程网络策略决策 | 将执行器本地代理策略回退到进程级核心策略决策器，Guardian 决策失败时关闭策略 |
| 10 | **[#31922](https://github.com/openai/codex/pull/31922)** core：添加工具无关（tool-free）线程模式 | 轻量辅助线程跳过 MCP、技能、插件与工具枚举，降低副作用开销 |

**其他值得关注的合并：**
- [#36207](https://github.com/openai/codex/pull/36207) 标准化沙箱违规事件记录
- [#36194](https://github.com/openai/codex/pull/36194) 流式输出缓冲区避免字节移动
- [#36191](https://github.com/openai/codex/pull/36191) 显式技能注入指标加标签
- [#36188](https://github.com/openai/codex/pull/36188) 线程历史投影对畸形 rollout 容错
- [#36187](https://github.com/openai/codex/pull/36187) 从配置的时钟刷新环境日期
- [#36184](https://github.com/openai/codex/pull/36184) 合并并发远程元数据请求

---

## 📈 功能需求趋势

从近 24 小时活跃 Issue 提炼出的社区关注方向：

| 方向 | 代表 Issue | 趋势解读 |
|------|----------|----------|
| **Windows 平台稳定性** | #31035, #29317, #33996, #35803, #35864 | Windows 仍是故障高发平台，沙箱、PowerShell、UI 渲染均有重大缺陷 |
| **Rate Limit 公平性** | #35552, #36213, #32707, #24080 | GPT-SOL 5.6 引发 Plus vs Pro 用户的强烈不满，透明度工具需求上升 |
| **MCP / 连接器生态** | #13200, #36218, #36239, #31471, #31472 | MCP 接入与连接器运行时重构并行推进，Slack 等官方 MCP 兼容性仍是痛点 |
| **会话上下文管理** | #32177, #23257, #35647, #20983, #33011 | 会话持久化、压缩、分叉等长生命周期问题频发 |
| **跨设备/工作区连续性** | #34804, #35420 | Codex Remote 与多设备工作流逐步成为高优先级需求 |
| **模型与推理可观测性** | #24080, #26930, #36251 | 暴露更多内部状态（限流、推理等级、模型选择）的呼声强烈 |
| **Subagent / MultiAgent** | #26930, #35097, #34821 | V1/V2 多代理边界与状态恢复存在多处不一致 |

---

## 💡 开发者关注点

**1. Windows 沙箱与安全栈的脆弱性**
Sysmon 驱动重装 BSOD、PowerShell AST 内存泄漏、未提权沙箱拒绝可执行 split writable root 等问题，暴露出 Codex Desktop 在 Windows 上的安全层深度集成仍有重大风险面。

**2. Rate Limit 政策与可观测性缺失**
GPT-SOL 5.6 上线后，Plus 用户认为配额相对 Pro 不公，且当前 `status_line` 只能展示百分比，无法看到 `resetsAt` / `windowDurationMins` / `credits.balance` 等关键字段。开发者急需**透明化工具**而非单纯提高配额。

**3. 会话状态生命周期管理混乱**
文本日志污染会话、压缩反复嵌入 base64、Subagent 推理等级重置、forked_from_id 仍写入父 rollout 全量等——这些问题都指向**会话持久化层缺少统一的不可变快照规范**。

**4. MCP 企业集成的标准化诉求**
Slack 官方 MCP 因 dynamic client registration 不支持而登录失败，反映出企业 MCP 接入流程仍需与主流 IdP/OAuth 标准对齐。

**5. 模型与推理等级的"智能默认"呼声**
[#36251](https://github.com/openai/codex/issues/36251) 等请求希望在 ChatGPT → Codex 移交时附带推荐模型与推理等级，体现用户希望减少手动调参的体验升级。

---

*日报生成时间：2026-07-31 · 数据来源：[github.com/openai/codex](https://github.com/openai/codex)*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**日期：2026-07-31**
**数据源：github.com/google-gemini/gemini-cli**

---

## 📌 今日速览

今日社区活跃度集中在 **Agent 子代理稳定性** 与 **Auto Memory 系统** 两类问题。多个 P1 级 Bug 报告子代理（subagent）在 `MAX_TURNS` 后错误返回 `GOAL` 成功状态或陷入无限挂起，另有四篇相关 Issue 集中曝光了 Auto Memory 在重试循环、敏感信息日志、无效 patch 隔离等方面的设计缺陷。同时，PR 端推进了 Node 22/24 升级、SSRF 修复、MCP OAuth 刷新等安全加固工作。

---

## 🚀 版本发布

过去 24 小时内**无新版本发布**。

---

## 🔥 社区热点 Issues

### 1. [#22323 - Subagent recovery after MAX_TURNS is reported as GOAL success](https://github.com/google-gemini/gemini-cli/issues/22323)
**P1 · agent · bug · 💬 12 · 👍 2**
`codebase_investigator` 子代理在触发最大轮次限制后仍向主会话回报 `status: "success"` 与 `Termination Reason: "GOAL"`，掩盖了实际中断事实。是当前评论数最高的活跃 Issue，反映了子代理状态机在失败路径上的语义不一致。

### 2. [#21409 - Generalist agent hangs](https://github.com/google-gemini/gemini-cli/issues/21409)
**P1 · agent · bug · 💬 8 · 👍 8**
通用代理（generalist agent）在创建文件夹等简单操作时无限挂起（最长等待 1 小时仍无响应）。当显式指示模型"不要委派给子代理"时问题消失。👍 数高说明这是高频痛点。

### 3. [#24353 - Robust component level evaluations](https://github.com/google-gemini/gemini-cli/issues/24353)
**P1 · aiq/eval_infra · 客户议题 · 💬 7**
继引入"行为评估测试"概念后，EPIC 持续推进 76 项行为评估在 6 个 Gemini 模型上的覆盖工作，是质量保障基础设施的重要议题。

### 4. [#22745 - Assess the impact of AST-aware file reads, search, and mapping](https://github.com/google-gemini/gemini-cli/issues/22745)
**P2 · agent · feature · 💬 7 · 👍 1**
探讨引入 AST 感知的文件读取/搜索/代码库映射能力，可精确按方法边界读取、减少 token 噪声，是性能优化的重要方向。

### 5. [#21968 - Gemini does not use skills and sub-agents enough](https://github.com/google-gemini/gemini-cli/issues/21968)
**P2 · agent · bug · 💬 6**
Gemini 几乎不会主动调用用户自定义的 skill 与子代理（gradle、git 等），除非显式提示。反映 Agent 在技能自发现与路由方面存在不足。

### 6. [#26522 - Stop Auto Memory from retrying low-signal sessions indefinitely](https://github.com/google-gemini/gemini-cli/issues/26522)
**P2 · agent · bug · 💬 5**
Auto Memory 在检测到低信号会话后未标记为已处理，导致后台持续反复拉取。

### 7. [#26525 - Add deterministic redaction and reduce Auto Memory logging](https://github.com/google-gemini/gemini-cli/issues/26525)
**P2 · security · bug · 💬 4**
Auto Memory 在模型上下文中已包含 transcript 原始内容后才执行"模型内部打码"，存在敏感信息泄露窗口。提议改用确定性打码并减少日志记录。

### 8. [#25166 - Shell command execution gets stuck with "Waiting input" after command completes](https://github.com/google-gemini/gemini-cli/issues/25166)
**P1 · core · bug · 💬 4 · 👍 3**
简单 shell 命令运行完成后，CLI 仍卡在"等待输入"状态。在多个用户环境下复现。

### 9. [#21983 - browser subagent fails in wayland](https://github.com/google-gemini/gemini-cli/issues/21983)
**P1 · agent · browser · bug · 💬 4 · 👍 1**
Browser subagent 在 Wayland 桌面环境（非 X11）下异常失败，错误报告 `Termination Reason: GOAL` 但未实际完成。

### 10. [#28555 - 🔒 Security: SSRF via DNS Resolution Bypass in web-fetch Tool (CVSS 8.6)](https://github.com/google-gemini/gemini-cli/issues/28555)
**P2 · core · security · bug · 💬 1**
**安全告警**：`web-fetch` 工具的 `isPrivateIp()` 校验未做 DNS 解析检查，攻击者可借助域名解析至内部 IP 绕过 SSRF 防护。CVSS 评分 8.6，属高危漏洞，建议优先修复。

---

## 🛠️ 重要 PR 进展

### 1. [#28566 - fix: propagate InvalidStreamError details to UI](https://github.com/google-gemini/gemini-cli/pull/28566)
**P1 · core · m/l/xl**
将 `InvalidStreamError` 的具体 `type` 和 `message` 透传到 CLI UI，便于在空响应场景中提示用户执行 `/compress` 等操作。

### 2. [#28603 - fix(docker): upgrade sandbox Dockerfile to Node 22](https://github.com/google-gemini/gemini-cli/pull/28603)
**P1 · security · xs**
Node 20 已于 2026-04-30 EOL，沙箱运行时升级至 Node 22 是必要的安全动作（与 #28602 的 builder 升级相辅）。

### 3. [#28481 - fix(core): refresh MCP OAuth tokens with the stored client ID](https://github.com/google-gemini/gemini-cli/pull/28481)
**P1 · security · m · 已发送 nudge**
修复 OAuth 发现 + 动态客户端注册场景下 MCP token 刷新失败的问题（会清空已存凭证、强制重新认证）。

### 4. [#28551 - fix(cli): fall back to embedded macOS seatbelt profiles if missing](https://github.com/google-gemini/gemini-cli/pull/28551)
**size/l · macOS 沙箱**
在 macOS sandbox 模式下找不到 `.sb` 配置文件时回退到嵌入式版本，修复关键启动崩溃问题。

### 5. [#28602 - chore(docker): update Docker base image to node:24-slim](https://github.com/google-gemini/gemini-cli/pull/28602)
**size/s+m**
更新 Docker 构建基础镜像到 Node 24-slim，修复运行阶段无法正确复制 CLI 包的问题。

### 6. [#28599 - fix(core): classify capacity exhaustion as terminal](https://github.com/google-gemini/gemini-cli/pull/28599) ⚠️ **已关闭**
**size/s+m · 已关闭**
针对预览模型返回 `MODEL_CAPACITY_EXHAUSTED`（HTTP 429）时的客户端挂起问题，将该错误归类为终态以触发快速回退。

### 7. [#28485 - fix(cli): add gemini-3.5-flash to model selector](https://github.com/google-gemini/gemini-cli/pull/28485)
**P2 · core · m/l · 已发送 nudge**
修复 v0.51.0 用户无法在模型选择器中选取 `gemini-3.5-flash` / `gemini-3.6-flash` 的问题。

### 8. [#28488 - feat(cli): auto-compress chat history on context window overflow](https://github.com/google-gemini/gemini-cli/pull/28488)
**P2 · core · l · 已发送 nudge**
新增 `model.autoCompressOnOverflow` 设置：上下文窗口即将溢出时自动压缩历史，避免在长任务中"卡死并警告"。

### 9. [#28410 - fix(core): shorten MCP tools/list discovery timeout](https://github.com/google-gemini/gemini-cli/pull/28410) ⚠️ **已关闭**
**P1 · agent · m · 已发送 nudge**
MCP `tools/list` 发现请求默认 10 分钟静默挂起（如服务器返回不匹配的 JSON-RPC id），现改为快速失败。

### 10. [#28597 - fix(cli): load environment variables before resolving settings placeholders](https://github.com/google-gemini/gemini-cli/pull/28597)
**size/l**
修复启动时本地 `.env` 尚未加载就开始解析 settings 占位符的竞态条件，改进设置加载顺序。

> **安全提示**：[#28594](https://github.com/google-gemini/gemini-cli/pull/28594) 为一个已关闭的 PoC，展示了 CI 工作流中 `workflow_run` 供应链漏洞，建议维护团队跟进加固。

---

## 📈 功能需求趋势

通过对过去 24 小时活跃 Issue 的聚类分析，社区关注度主要集中于以下方向：

| 主题 | 代表性 Issue | 关注点 |
|---|---|---|
| **Agent / 子代理可靠性** | #22323, #21409, #21968, #22093, #20195, #21000 | 子代理挂起、状态报告错误、技能自发现能力不足 |
| **Auto Memory 系统** | #26516, #26522, #26523, #26525 | 重试循环、敏感信息隔离、patch 校验机制 |
| **代码库分析智能化** | #22745, #22746, #24353 | AST 感知文件读取、行为评估体系 |
| **Browser Agent 健壮性** | #21983, #22232, #22267 | Wayland 兼容、会话接管、`settings.json` 配置生效 |
| **模型可用性与切换** | #24246 (工具数 128+ 报错), #28485 (3.5/3.6 flash 选择), #28592 (auto 模式显示) | 工具数限制、模型选择器更新、Preview 访问控制 |
| **UI/终端体验** | #25166 (shell 卡死), #24935 (终端 buffer 损坏), #21924 (resize 闪烁) | 终端渲染、外部编辑器退出、shell 状态机 |
| **安全加固** | #28555 (SSRF), #26525 (memory 隐私), #28603 (Node 升级) | SSRF 防护、EOL 运行时升级 |
| **Agent 自省能力** | #21432, #22598, #21763 | 准确了解自身 CLI 标志、subagent 轨迹可分享、Bug 报告上下文完整 |

---

## 👨‍💻 开发者关注点

综合 Issue 评论与 PR 反馈，开发者的核心痛点与高频需求可归纳为：

1. **Agent 行为可预测性不足**：子代理既可能挂起也可能误报成功，状态机的失败语义需要更严格的设计与测试覆盖。
2. **配置生效链路脆弱**：`settings.json`、`maxTurns`、环境变量等配置在 Browser Agent、子代理、settings 加载等多个层面出现"被忽略"问题。
3. **安全设计需前置**：从 SSRF 绕过到 Auto Memory 在模型上下文中再打码，反映在模型可触达的数据流入点缺少确定性安全闸口。
4. **工具爆炸问题**：工具数超过 128 即触发 400 错误，开发者希望 Agent 在启用工具时具备智能剪裁能力。
5. **长时间任务易"卡死"**：上下文溢出、shell 完成状态识别、模型容量耗尽等场景普遍存在"挂起 + 长时间无响应"，影响开发心流。
6. **新模型准入渠道不畅**：v0.51.0 用户无法直接选取 3.5/3.6 flash，反映在模型版本与 CLI 发版节奏间的同步存在断点。
7. **评估体系亟待健全**：维护团队正在构建"组件级行为评估"，社区期待由此带来的可量化回归基线。

---

*报告基于 GitHub Issue / PR 公开数据生成，所有数字与时间戳均以 GitHub 平台记录为准。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报
**2026-07-31**

---

## 1. 今日速览

🚀 **v1.0.77 正式发布**：本次带来浏览器 OAuth 登录流程（默认启用）、Ctrl+G 外置编辑器编辑自由回答、以及 autopilot 审批后可关闭沙箱等多项体验改进。

🐛 **关键 Bug 批量修复**：今日关闭了 7 个 Issue，覆盖超大附件会话死锁、BYOK 启动提示、退出界面异常、JavaScript-Undefined 转换崩溃等回归问题。

⚠️ **大模型上下文默认值争议**：社区报告 engine 在缺失能力元数据时硬编码 128K token 预算，对 1M 上下文模型（Anthropic）造成过早压缩，子任务冻结与空闲计费问题也集中浮现。

---

## 2. 版本发布

### 📦 v1.0.77（2026-07-30）

**Added**
- 新增浏览器 OAuth 登录流程，本地交互终端默认启用（远程/无头终端仍走 device code）；可通过 `--web-flow` / `--device-code` 强制切换，或在 `/login` 交互中选取
- `Ctrl+G` 可在 `ask_user` 自由回答模式下打开外部编辑器，且不会关闭当前 prompt
- Unconditional autopilot 审批在允许 bypass 时，会在本会话禁用沙箱

> ⚠️ 鉴于此版本后出现了 #4305（Undefined→Rust String 转换崩溃）等回归问题，建议从 1.0.76 升级前关注 1.0.77-0 预发布通道的反馈。

---

## 3. 社区热点 Issues

| # | Issue | 状态 | 为什么重要 |
|---|-------|------|----------|
| [#3767](https://github.com/github/copilot-cli/issues/3767) | 超大附件永久卡死会话 | ✅ CLOSED | 单次请求 9.1MB 即触发 CAPI 5MB 硬限制且无法恢复，影响核心交付流程；13 条评论，归属 sessions/context-memory 域 |
| [#4295](https://github.com/github/copilot-cli/issues/4295) | AI Credits Near-Limit Warning | 🟢 OPEN | 要求 CLI 与 VS 2026 Professional 拉齐信用额度预警，8 条评论，体现用户对**成本可见性**的强需求 |
| [#1381](https://github.com/github/copilot-cli/issues/1381) | 非 Git 仓库无法使用 Rewind | 🟢 OPEN | 长期高赞 Issue（👍10），jj-vcs 用户希望 Rewind 与 VCS 解耦，与 VS Code 体验对齐 |
| [#4293](https://github.com/github/copilot-cli/issues/4293) | 子代理全工具集返回空，无错误 | 🟢 OPEN | `task` 工具调起的 full-tool 子代理静默失败，限制工具集则正常，定位困难 |
| [#4310](https://github.com/github/copilot-cli/issues/4310) | 引擎默认回退 128K token 预算不合理 | 🟢 OPEN | 大上下文模型（1M Anthropic）被过早压缩，需要路由层做能力感知 |
| [#4299](https://github.com/github/copilot-cli/issues/4299) | 长会话后输入延迟指数上升 | 🟢 OPEN | 后台代理运行时键入延迟严重，1.0.76-5 出现，影响所有深度使用用户 |
| [#4301](https://github.com/github/copilot-cli/issues/4301) | MCP 工具 anyOf(array,string) 参数被字符串化 | 🟢 OPEN | MCP 客户端在 union schema 下扁平化参数，导致服务端解析失败，限制 MCP 集成灵活性 |
| [#4300](https://github.com/github/copilot-cli/issues/4300) | BYO-K 支持 bearerToken/Broker | 🟢 OPEN | 企业合规要求禁用密钥认证，需 SDK 风格的无头 token 方案以自动化 CLI |
| [#4298](https://github.com/github/copilot-cli/issues/4298) | 沙箱配置选择性启用工具 | 🟢 OPEN | 希望 `settings.json` 沙箱段支持工具白名单/包内工具收录 |
| [#4306](https://github.com/github/copilot-cli/issues/4306) | Autopilot 子任务冻结无响应 | 🟢 OPEN | `/fleet use` 配合 speckit 技能时无条件停顿，autopilot 模式稳定性问题 |

> **关闭归档**（同样值得关注）：#4258（BYOK 交互启动提示）、#4266（v1.0.74 退出界面）、#4305（JS-Undefined→Rust 转换）、#4230（Ctrl+G 提问模式修复，被 1.0.77 吸收）。

---

## 4. 重要 PR 进展

过去 24 小时内 **无 PR 更新**。建议关注 v1.0.77-0 预发布通道后续同步的合并活动。

---

## 5. 功能需求趋势

- **🛡️ 企业合规与认证**：BYO-K bearerToken/Broker（#4300）、OAuth 浏览器流已上线 → 推动 CLI 适配企业 CI 与本地策略
- **📊 成本与额度透明化**：信用额度预警（#4295）、空闲计费怀疑（#4308/#4309）→ 反映"看不见账单"焦虑
- **🧩 多模型与上下文管理**：128K 硬编码缺陷（#4310）、BYOK 兼容（#4258）→ 路由层能力感知成为关键
- **🔌 MCP 生态成熟**：anyOf schema 序列化（#4301）→ MCP 工具接入复杂度上升
- **🧰 沙箱与权限粒度**：选择性工具白名单（#4298）、autopilot bypass 联动（v1.0.77）→ 安全配置从"全开/全闭"向精细化演进
- **💻 终端与编辑器兼容**：iTerm2 粘贴（#4296）、MobaXterm 鼠标（#2841）、Ctrl+G 编辑器（已修复）、COLORTERM 注入（#4294）→ 跨平台体验仍是长尾痛点
- **🌀 VCS 与工作流灵活性**：非 Git 树的 Rewind（#1381）→ CLI 不应当把 Git 设为隐式前置

---

## 6. 开发者关注点

1. **长会话性能塌方** —— 同时跑后台代理时输入延迟暴增（#4299），子任务还会冻结（#4306），深度使用场景下"卡顿"成为首要痛点。
2. **代理/子代理静默失败** —— Sub-agent 返回空结果（#4293）没有任何日志或错误信号，定位非常困难，需要更清晰的失败可视化。
3. **信用消耗不可见** —— 任务结束后仍显示 97.8% 消耗（#4308/#4309），开发者对"何时停止扣费"缺乏信任。
4. **BYOK 体验分裂** —— 交互启动提示、OAuth 流程、bearerToken 缺失（#4258/#4300）等多个点让自托管/企业用户感知明显落差。
5. **MCP 集成脆弱** —— union schema 不被尊重（#4301），参数被字符串化，比 VS Code 的 MCP 体验更粗糙。
6. **跨终端细节缺失** —— iTerm2 粘贴、MobaXterm 滚轮、COLORTERM 注入（#4294）反映出 CLI 在终端兼容矩阵上仍需补考。
7. **附件与上下文边界** —— 5MB CAPI 限制导致会话永久不可恢复（#3767），暴露了"硬错误不可降级"的设计问题。

---

> 📌 **本日一句话**：v1.0.77 把登录与 autopilot 体验往前推了一大步，但围绕"长会话性能、BYOK 兼容性、子代理可观测性"的呼声正在快速上升，建议社区在下个版本优先回应这些方向。

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期**：2026-07-31  
**数据范围**：MoonshotAI/kimi-cli · 过去 24 小时活跃条目

---

## 📌 今日速览

过去 24 小时社区活跃度较低，共记录到 1 个 PR 更新和 3 个 Issue 互动。核心动态集中于两条新提交的 **Bug 报告**——LLM 服务返回 429 过载错误，以及 CLI 与浏览器标签联动的卡死问题——均指向当前 Kimi K3 模型在生产环境中的稳定性挑战。一项关于 `asyncio` 内存管理的 Hook 修复 PR 进入待审阅状态，预计将随下一个版本合并。

---

## 🚀 版本发布

> 过去 24 小时无新版本发布，跳过此章节。

---

## 🔥 社区热点 Issues

> ⚠️ 过去 24 小时仅有 3 条 Issue 更新，全部列出。

### #1283 · [OPEN] [enhancement] Memory System — 跨会话持久化上下文
- **作者**：CatKang · **状态**：长期讨论中（创建于 2026-02-27）
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1283
- **为什么重要**：这是仓库内讨论度最高的 Feature Request 之一（7 条评论），提出构建一套包含「AI 自动记忆」与「用户手动指令」双轨制的 Memory System。如果落地，将彻底改变 CLI 在多轮、长周期项目中的工作模式，是 Kimi Code CLI 向「Agent OS」演进的关键能力。
- **社区反应**：👍 0 · 评论持续活跃，社区普遍认可方向但仍在讨论存储粒度、隐私边界与自动记忆的触发策略。

### #2571 · [OPEN] [bug] LLM Overloaded! 429 限流导致 Kimi 完全不可用
- **作者**：andrew-sz · **版本**：v1.49.0 · **订阅**：Moderato · **模型**：Kimi K3 · **平台**：macOS Tahoe
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2571
- **为什么重要**：报告人反映遇到 `Error code: 429` 服务端限流，导致 CLI 完全无法使用。该问题直接影响付费用户的工作流，属于**阻塞性 Bug**，且发生在新发布的 Kimi K3 模型上，可能预示 K3 上线后的容量规划尚未完全匹配订阅级别。
- **社区反应**：👍 0 · 1 条评论，建议关注官方是否会在客户端补充退避重试或更友好的错误提示。

### #2570 · [OPEN] [bug] CLI 与浏览器标签状态关联的间歇性冻结
- **作者**：XbackMK · **版本**：v0.29.2 · **模型**：KIMI K3 HIGH · **平台**：Windows 11
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2570
- **为什么重要**：报告描述 CLI 出现「转圈月亮」后无响应，且**与浏览器标签页状态强相关**——这通常指向前端/渲染层在窗口失焦或事件循环饥饿时的状态机问题，而非纯后端故障。对 Windows 用户的体验影响较大。
- **社区反应**：👍 0 · 暂无评论，等待维护者复现确认。

---

## 🛠️ 重要 PR 进展

> ⚠️ 过去 24 小时仅有 1 条 PR 更新，全部列出。

### #2565 · [OPEN] fix(hooks): 保持对 fire-and-forget 钩子触发任务的强引用
- **作者**：LHMQ878 · **修复**：Issue #2564 · **创建**：2026-07-28
- **链接**：https://github.com/MoonshotAI/kimi-cli/pull/2565
- **修复内容**：定位到 `asyncio` 使用 `WeakSet` 持有运行中任务，导致在 `ToolResult` 返回后 `_hook_task` 立即被 GC，造成 fire-and-forget 钩子任务提前结束或丢失回调。修复方式是在生命周期内对任务保持强引用，确保钩子执行完成。
- **技术要点**：这是一个典型的 **asyncio 内存管理陷阱**，对所有依赖 Hook 扩展的用户（包括自定义工具、日志、审计插件）都是基础性修复，合并后应随下一个小版本发布。

---

## 📈 功能需求趋势

从近期的 Issue 与长期讨论提炼，社区关注方向按热度排序：

| 趋势 | 代表议题 | 说明 |
|------|----------|------|
| **持久化记忆 / 上下文管理** | #1283 | 最受期待的长线特性，影响多会话工作流 |
| **稳定性 & 错误处理** | #2571, #2570 | LLM 429 限流、UI 冻结等阻塞性问题 |
| **Hook / 扩展机制健壮性** | #2565 (PR) | 底层扩展接口的内存与生命周期正确性 |

总体来看，社区正在从「能用」阶段过渡到「**可靠、能扩展**」阶段：基础设施层面的稳定性与扩展性需求，正在取代早期对模型能力的关注。

---

## 💡 开发者关注点

综合本周期 Issue 与 PR，可以归纳出开发者反馈中的三大痛点：

1. **LLM 服务可用性波动**  
   Kimi K3 在 Moderato 等付费订阅下仍出现 429 错误，影响生产环境使用。开发者期望客户端具备更完善的退避与降级策略。

2. **CLI 在跨平台、长时任务下的 UI 稳定性**  
   Windows 11 下与浏览器标签联动的冻结问题，提示渲染层/事件循环仍有未覆盖的边界场景，需要更精细的状态管理。

3. **扩展接口的可靠性**  
   PR #2565 揭示的 `asyncio` 弱引用陷阱说明，社区已开始围绕 Hook、ToolResult 这类扩展 API 提出更严格的不变量要求——这对构建自定义工具链的开发者至关重要。

> 📊 **日报小结**：今日社区处于低活跃状态，但三个议题指向同一个方向——**生产化前的可靠性打磨**。建议维护者优先关注 #2571 的服务降级策略与 #2565 的合并窗口。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报 · 2026-07-31

---

## 📌 今日速览

**v1.18.10 版本正式发布**，自动发现 Modal 模型与桌面端体验优化同步上线。社区当天异常活跃：模型稳定性（Sol / Gemini-3.6 / GLM-5.2 上游错误）、Desktop 升级引发的崩溃回归、以及围绕 TUI 的密集 PR 合并潮构成本日三大主题。`rekram1-node` 与 `kitlangton` 仍是代码层最活跃的贡献者。

---

## 🚀 版本发布

### [v1.18.10](https://github.com/anomalyco/opencode/releases/tag/v1.18.10)

**Core**
- 🤖 自动发现可用 Modal 模型（@[devennavani](https://github.com/devennavani) 贡献）

**Desktop 改进**
- 防止重复添加同一附件
- 始终显示新建会话按钮
- Toast 通知优化：堆叠、关闭、移动端布局
- 标签页 hover / active 状态视觉细化

> ⚠️ 注意：升级到 v1.18.10 后部分用户报告切换会话时出现 `Stale read from <Show>` 崩溃，见 [#39704](https://github.com/anomalyco/opencode/issues/39704)，社区正在跟进修复（[#39767](https://github.com/anomalyco/opencode/pull/39767)）。

---

## 🔥 社区热点 Issues

| # | Issue | 评论 | 👍 | 为何值得关注 |
|---|-------|------|----|--------------|
| 1 | [#39653](https://github.com/anomalyco/opencode/issues/39653) GPT-5.6 Sol 反复报 "server overloaded" | 16 | 10 | 当日最热。OpenCode Zen 的 Sol 模型持续过载，而 Pi / Codex 正常，反映上游容量分配问题，影响生产可用性。 |
| 2 | [#39288](https://github.com/anomalyco/opencode/issues/39288) 升级到 1.18.8 后主屏幕报错 | 6 | 1 | 升级后即出现的 `AutoScroller plugin depends on Scroller plugin` 错误，影响所有升级用户。 |
| 3 | [#38655](https://github.com/anomalyco/opencode/issues/38655) 最新版无法在 plan/build 间切换 | 5 | 0 | UX 关键功能回归：build 模式被强制默认，用户无法切换。 |
| 4 | [#37762](https://github.com/anomalyco/opencode/issues/37762) Ollama 本地响应问题 | 8 | 0 | 本地 LLM 用户集中反馈，64GB RAM / 4GB VRAM 环境下准备邮件任务失败，与云端模型行为不一致。 |
| 5 | [#37628](https://github.com/anomalyco/opencode/issues/37628) `npm install -g opencode-ai` Windows 16 位兼容错误 | 5 | 0 | 安装链路问题影响新用户入门，与 Node 26 + npm 12 的兼容性相关。 |
| 6 | [#39491](https://github.com/anomalyco/opencode/issues/39491) Plan 模式可通过 bash 写文件 | 4 | 0 | **安全/语义隐患**：Claude Sonnet 4.6 在 plan 模式下绕过 write 工具限制，用 `cat > EOF` 写文件，破坏 plan/build 隔离假设。 |
| 7 | [#27837](https://github.com/anomalyco/opencode/issues/27837) Web UI session 列表为空（5 月起的长期问题） | 4 | 2 | Web 模式下 SSE 事件驱动逻辑未正确迭代 `/api/session`，同类问题在 [#39655](https://github.com/anomalyco/opencode/issues/39655) "No folders found" 中重现。 |
| 8 | [#29935](https://github.com/anomalyco/opencode/issues/29935) [FEATURE] 内置 LiteLLM 代理 | 3 | 5 | **社区高赞特性请求**：支持 100+ 提供商统一 OpenAI 兼容 API，今日已 CLOSED，疑似已合并实现。 |
| 9 | [#39771](https://github.com/anomalyco/opencode/issues/39771) 网络错误需快速失败与降级 | 3 | 0 | 国内 GitHub HTTPS 频繁被阻断场景下，60-120s 超时无 fallback 是真实痛点。 |
| 10 | [#39790](https://github.com/anomalyco/opencode/issues/39790) Session 对 429 重试直到配额重置 | 1 | 0 | `SessionRetry.policy()` 对 fixed-window quota 错误持续重试，浪费配额且无意义。 |

> 💡 模型稳定性相关的另外几条仍在发酵：Gemini 3.6-flash 上游错误（[#39293](https://github.com/anomalyco/opencode/issues/39293)）、NVIDIA GLM-5.2 HTTP 429（[#37666](https://github.com/anomalyco/opencode/issues/37666)）、DeepSeek v4 flash 提前放弃（[#38765](https://github.com/anomalyco/opencode/issues/38765)）。

---

## 🛠️ 重要 PR 进展

| # | PR | 作者 | 类型 | 要点 |
|---|----|------|------|------|
| 1 | [#39787](https://github.com/anomalyco/opencode/pull/39787) **fix(core): 映射 xAI 原生选项** | rekram1-node | Provider | 显式映射 `@ai-sdk/xai` 设置到原生 xAI provider options；校验 reasoning effort / storage / prompt cache key；过滤无效键。补全 catalog 与 user option 合并的映射测试。 |
| 2 | [#39764](https://github.com/anomalyco/opencode/pull/39764) **feat(plugin): 新增 session.request 钩子** | rekram1-node | Plugin | 在原生请求序列化与认证之后，允许插件修改最终 LLM URL、HTTP 头与序列化 body，作为 process-local `LLMClient` 回调传递。扩展插件对请求生命周期的控制力。 |
| 3 | [#39788](https://github.com/anomalyco/opencode/pull/39788) **fix(github): 兼容 GHES REST/GraphQL 端点** | rover0811 | Bugfix | GitHub Action 客户端此前忽略 GHES 标准端点变量，现支持自托管企业版。 |
| 4 | [#27554](https://github.com/anomalyco/opencode/pull/27554) **feat: 本地 LAN 提供商发现 + 模型自动发现** | androidand | Feature | `/connect` 中加入 `Local (LAN)` 发现，组合 mDNS 自动发现本地 OpenAI 兼容服务器，并自动列出其模型。关 #6231 / #27553。 |
| 5 | [#39776](https://github.com/anomalyco/opencode/pull/39776) **feat(tui): 本地 TUI 插件热重载** | kitlangton | DX | 编辑本地 TUI 插件无需重启即时生效；单个插件崩溃被隔离，不再拖垮整次生成或应用。 |
| 6 | [#39786](https://github.com/anomalyco/opencode/pull/39786) **fix(app): 在新布局中注册 new workspace / open project 快捷键** | ProdigyRahul | Bugfix | 替代 #37830：因命令已从 `new-session.tsx` 抽出，原修复无法合并，现重新注册 `cmd+o` / 新建 worktree 等快捷键。 |
| 7 | [#39783](https://github.com/anomalyco/opencode/pull/39783) + [#39784](https://github.com/anomalyco/opencode/pull/39784) **fix(tui): Tab 默认全局 scope + 选择器 scope 同步** | kitlangton | UX | 标签页默认一套全局集合；session 选择器初始 scope 由 Tab scope 决定（全局 → 所有项目，单目录 → 当前目录），`ctrl+a` 切换的 scope 仍可覆盖默认。 |
| 8 | [#39781](https://github.com/anomalyco/opencode/pull/39781) **feat(app): 创建 workspace 时可选择 base branch** | ProdigyRahul | Feature | `git worktree add --no-checkout -b <branch>` 不带 start point 现允许选择基准分支，避免新建 workspace 立即与上游偏离。 |
| 9 | [#39767](https://github.com/anomalyco/opencode/pull/39767) **fix(app): 防止 stale session tab 读取** | OpeOginni | Bugfix | Solid 在切换离开时仍读取旧 titlebar 内容，导致 v1.18.10 升级后的 `Stale read from <Show>` 崩溃。关 #39704 / #39766。 |
| 10 | [#39770](https://github.com/anomalyco/opencode/pull/39770) **fix(app): 防止文件树标签被裁剪** | OpeOginni | Bugfix | 文件树可缩窄到裁剪 "Files Changed" 标签，现提高最小宽度。 |

> 📦 同批已合并关闭的 TUI / Session 优化 PR：`#39780`（Open 菜单项目标签对齐）、`#39774`（异步列表更新保留选中）、`#39768`（删除会话 toast 包含名称）、`#39753`（新建会话继承目录）、`#39752`（`ctrl+o` 打开会话/项目菜单）、`#39748`（标题生成失败重试）、`#39747`（自动标题设为可选）、`#39782`（调试 gutter 文字对齐）。

---

## 📈 功能需求趋势

从过去 24h 更新的 Issues 中提炼，社区最强烈的声音集中在以下方向：

1. **多提供商稳定性（最高频）**
   - Sol（[#39653](https://github.com/anomalyco/opencode/issues/39653)）、Gemini 3.6（[#39293](https://github.com/anomalyco/opencode/issues/39293)）、GLM-5.2（[#37666](https://github.com/anomalyco/opencode/issues/37666)、[#37598](https://github.com/anomalyco/opencode/issues/37598)）、DeepSeek v4（[#38765](https://github.com/anomalyco/opencode/issues/38765)）、Zen 配额计费（[#37748](https://github.com/anomalyco/opencode/issues/37748)）。**OpenCode Zen / Go / 多上游 provider 治理是当下最痛点**。

2. **桌面端回归与崩溃**
   - v1.18.8 / v1.18.10 升级分别带来 plugin 加载错误（[#39288](https://github.com/anomalyco/opencode/issues/39288)）和 `Stale read from <Show>` 崩溃（[#39704](https://github.com/anomalyco/opencode/issues/39704)）。**版本升级路径需更稳健**。

3. **Web UI 一致性**
   - 会话列表为空（[#27837](https://github.com/anomalyco/opencode/issues/27837)）、项目列表为空（[#39655](https://github.com/anomalyco/opencode/issues/39655)）。**Web 与 Desktop 数据通路仍未完全对齐**。

4. **模式与权限边界**
   - Plan 模式绕过（[#39491](https://github.com/anomalyco/opencode/issues/39491)）、plan/build 切换失效（[#38655

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-07-31

## 📌 今日速览

今日 Pi 仓库进入"协议重构"密集期：`@earendil-works/pi-protocol` 与 `@earendil-works/pi-client` 双双落地，为远程会话与传输中立的客户端奠定基础；同时一系列 TUI 渲染与跨平台剪贴板 Bug 被快速关闭，开发者最关心的 **Agent 扩展 API 表面**、**多 Provider 适配**与**异步/Promise 卡死**类问题持续被推到台前。

---

## 🚀 版本发布

过去 24 小时内无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 评论 | 状态 | 重要性 |
|---|-------|------|------|--------|
| [#6747](https://github.com/earendil-works/pi/issues/6747) | An API for enhancing agent message markdown | 12 | CLOSED | 提供在 UI 层修改 markdown 渲染但不动 LLM 内容的扩展点（对应 PR #7231 已合并）。是 Agent 主题化生态的基石。 |
| [#5871](https://github.com/earendil-works/pi/issues/5871) | Anthropic OAuth-token detection 硬编码 `sk-ant-oat` | 8 | CLOSED | OAuth/Bearer 凭据判定从硬编码改为模型/Provider 显式声明，对自定义 Anthropic 网关用户至关重要。 |
| [#7194](https://github.com/earendil-works/pi/issues/7194) | 工具卡片滚出 viewport 时每秒整屏重绘 | 7 | CLOSED | 影响远程沙箱+PTY 转发场景，是 TUI 增量渲染性能的代表性痛点。 |
| [#7153](https://github.com/earendil-works/pi/issues/7153) | `/scoped-models` 等待 catalog refresh 时约 5 分钟无响应 | 6 | OPEN | 交互式 REPL 中同步阻塞，缺少 loading/timeout 兜底，影响首次模型选择体验。 |
| [#7161](https://github.com/earendil-works/pi/issues/7161) | `anthropic-messages` 不发送 `x-client-request-id` | 6 | OPEN | 网关/多账户会话亲和性失效，第三方代理用户反复回退到 round-robin，是企业级落地阻碍。 |
| [#6300](https://github.com/earendil-works/pi/issues/6300) | Windows TUI 每按键重绘一行 | 6 | OPEN | 在 Windows Command Prompt / Windows Terminal 下输入即破坏界面，跨平台可用性短板。 |
| [#5990](https://github.com/earendil-works/pi/issues/5990) | 对话框高于终端时 TUI 持续闪烁 | 6 | CLOSED | +3 点赞，社区关注度高，反映 TUI 重绘调度问题长期困扰扩展作者。 |
| [#7007](https://github.com/earendil-works/pi/issues/7007) | 并发 inline `custom({overlay:false})` 死锁 | 5 | CLOSED | 第二个 inline prompt 静默替换第一个且 Promise 永不 resolve，是扩展 API 设计的严重缺陷。 |
| [#7047](https://github.com/earendil-works/pi/issues/7047) | Gemini 3.x tool-call id 在多轮中被剥除 | 5 | OPEN | Gemini 3 要求原样回传 `id` 才能匹配响应；目前 fwd/replay 路径全部丢失，**整段工具调用在第二轮回话中断**。 |
| [#7187](https://github.com/earendil-works/pi/issues/7187) | 第三方包 manifest 错误导致用户整个会话崩溃 | 4 | CLOSED | screenpipe 报告的生产事故，暴露扩展包解析阶段的健壮性问题，亟需 schema 校验兜底。 |

---

## 🛠️ 重要 PR 进展（Top 10）

| PR | 标题 | 含义 |
|----|------|------|
| [#7344](https://github.com/earendil-works/pi/pull/7344) | feat(protocol): add remote session wire protocol | 新增传输中立、有界 CBOR + 增量帧的远程会话协议，是后续远程客户端/多端同步的根基。**已 CLOSED，准备合并**。 |
| [#7348](https://github.com/earendil-works/pi/pull/7348) | feat(client): add runtime-neutral session client | `@earendil-works/pi-client` 首发，对接上述协议，让应用方不绑定 Node/Bun 等宿主。 |
| [#7343](https://github.com/earendil-works/pi/pull/7343) | feat(agent): add harness shutdown lifecycle | `AgentHarness.shutdown()` 幂等关闭：拒绝新回合、安全 abort 活跃回合/compaction，宿主进程信号处理进入正轨。 |
| [#7309](https://github.com/earendil-works/pi/pull/7309) | fix(server): guard JSON.parse in RPC stdout handler | 防止 RPC 子进程 stdout 偶发非 JSON 行（deprecation warn、截断）导致 `JSON.parse` 整个连接崩溃，**Robustness 优先**。 |
| [#7261](https://github.com/earendil-works/pi/pull/7261) | fix(coding-agent): Wayland 剪贴板（wl-paste）支持 | 关闭 [#7248](https://github.com/earendil-works/pi/issues/7248)：Wayland 下 Ctrl+V 静默失效问题，Linux 桌面用户关键修复。 |
| [#7340](https://github.com/earendil-works/pi/pull/7340) | fix: light terminal 下 bold 文本不可见 | 用显式前景色覆盖 "bold-as-bright" 的终端怪癖，避免白底白字。 |
| [#7216](https://github.com/earendil-works/pi/pull/7216) | fix: delta content block 格式化（`[object Object]`） | Databricks/Qwen3 风格响应被系列化为对象字符串的著名渲染 bug，针对 #7062。 |
| [#7061](https://github.com/earendil-works/pi/pull/7061) | fix(openai-completions): array content & 缺 finish_reason | 同一类问题的另一面修复，已 CLOSED。 |
| [#7325](https://github.com/earendil-works/pi/pull/7325) | fix: custom-compaction 通过 `pi.registerProvider` 模型路由 | 关闭 #7273：扩展注册模型可在 `compat.complete()` 中识别，开始与运行时 Registry 一致化。 |
| [#7306](https://github.com/earendil-works/pi/pull/7306) | fix(coding-agent): SDK 示例中废弃 `getModel` 替换 | 由 #7271 批准，清理文档样板。 |

> 另外值得关注的草案：  
> - [#6216](https://github.com/earendil-works/pi/pull/6216) Amazon Bedrock Mantle OpenAI Responses Provider（提供 Bedrock 上的 OpenAI Responses）  
> - [#7339](https://github.com/earendil-works/pi/pull/7339) OpenAI `background: true` 模式支持（Draft，求设计反馈）  
> - [#6534](https://github.com/earendil-works/pi/pull/6534) `developer` 消息角色（RFC 54 跟进，实验性）  
> - [#7148](https://github.com/earendil-works/pi/pull/7148) `/loadout` 实验特性：会话中动态启停扩展并持久化  
> - [#7163](https://github.com/earendil-works/pi/pull/7163) `SessionRepo.search()` + SQLite FTS5 迁移  
> - [#7231](https://github.com/earendil-works/pi/pull/7231) Markdown API（关闭 #6747）  
> - [#7286](https://github.com/earendil-works/pi/pull/7286) Bedrock Provider 错误结构化元数据保留

---

## 📈 功能需求趋势

从今日活跃讨论提炼，开发者最关注的方向：

1. **扩展 / Agent API 表面扩展**（最多）
   - markdown 渲染钩子（#6747 / #7231）、`shouldStopAfterTurn` 暴露（#7299）、`agent_settled` 语义（#7350）、`/loadout`（#7148）、ACP 后端接入（#7320）。社区在推动 Pi 从"coding agent"演化为"agent harness"。

2. **TUI 跨平台与渲染稳定性**
   - Wayland 剪贴板（#7248 / #7261）、Windows 每键重绘（#6300）、iTerm2 不可用（#6784）、Devnagri 文字断行（#6124）、light 终端下 bold 不可见（#7340）、grapheme 宽度（#6987）。

3. **多 Provider / 模型协议适配**
   - Bedrock Mantle（#6216）、OpenAI background mode（#7339）、`developer` role（#6534）、Anthropic OAuth 声明化（#5871）、x-client-request-id（#7161）、Gemini 3 tool id（#7047）、Fireworks 超时（#7315）、OpenAI Responses 服务端 compaction（#7317）。

4. **稳健性 / 异步生命周期**
   - availability promise 不可恢复（#7301）、scoped-models 卡死（#7153）、API-key login hang（#7027）、inline custom 死锁（#7007）、包解析崩溃（#7187）、Anthropic 起始 block 丢弃（#7283）。

5. **远程化与多端**
   - pi-protocol（#7344）、pi-client（#7348）、harness shutdown（#7343）、runtime-neutral client —— 远程与会话迁移的整套蓝图。

6. **会话存储与检索**
   - SQLite + FTS5（#7163），为大规模历史恢复打基础。

---

## 🧑‍💻 开发者关注点

- **"Agent 扩展能做的事情越来越重要，但 API 接口不够稳定。"** markdown 钩子/loadout/shouldStopAfterTurn/agent_settled 一系列 PR 的接力说明：扩展作者处于 Pi 当前生态的核心位置。
- **"TUI 稳定性是迁移的最大障碍。"** Windows、iTerm2、Wayland、Unicode（Devnagri/grapheme 宽度）四类问题同时出现，跨平台体验仍是 Nightly 版本用户最大的 Friction 来源。
- **"Provider 适配碎片化问题严重。"** x-client-request-id、tool-call id、finish_reason、`[object Object]` 格式化、background mode 等多个 Issue 表明，Pi 的 Provider 抽象仍需在每个模型家族上做手工 reconcile；Bedrock Mantle/Mantle Responses/OpenAI background 是回应此痛点的方向。
- **"异步生命周期不可恢复是隐形的。"** availability promise、catalog refresh、login 后置请求的卡死（#7301、#7153、#7027）反映 Pi 在 Promise 取消/超时/bounded await 上的实践仍然稀薄，开发者强烈呼吁统一抽象。
- **"想要远程化。"** 今日常闭的 #7343/#7344/#7348 三件套对应社区呼声最高的"在另一台机器 / Web 端继续会话"能力，节奏紧凑，预计下一窗口期会进入 OSS 发布通道。

---

> 📎 数据口径：来自 `earendil-works/pi` 仓库过去 24 小时内更新的 Issues（50）与 Pull Requests（31），按评论数与时间排序整理。

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报

**日期：** 2026-07-31

---

## 📌 今日速览

Qwen Code v0.21.1 夜间构建版发布，修复了 CI 容器任务默认 Shell 缺失等基础问题。今日社区最显著的趋势是 **Anthropic 适配器的集中修复**（4 个相关 issue 由同一作者提交），加上 **OpenAI Responses API 内容生成器** 的引入，多模型后端支持正快速完善；与此同时，桌面端/Web Shell 与 Windows 平台相关反馈热度持续上升，CI E2E 测试在 SDK 权限控制场景下出现多个失败，已进入自动修复流程。

---

## 🚀 版本发布

### v0.21.1-nightly.20260731.702932cc7

夜间构建版，更新内容较少：
- 修复 CI 容器任务缺失默认 Bash Shell（[#7838](https://github.com/QwenLM/qwen-code/pull/7838)）
- Web Shell 相关小修复

> 该 commit `702932cc7` 对应的 E2E 测试主分支已红 ([#8173](https://github.com/QwenLM/qwen-code/issues/8173))，关注后续跟进。

---

## 🔥 社区热点 Issues

| # | 标题 | 评论 | 为何值得关注 |
|---|------|------|------|
| [#8124](https://github.com/QwenLM/qwen-code/issues/8124) | 启动横幅首帧偶发缺失顶部行 | 9 | 影响所有用户的首屏视觉体验，怀疑与 provider update 待处理状态相关，需复现路径 |
| [#4063](https://github.com/QwenLM/qwen-code/issues/4063) | core+cli 架构 Review：14 项结构性问题清单 | 5 | P0 问题指出 136 个文件直接依赖 `@google/genai` 类型，关系到长期架构解耦 |
| [#8083](https://github.com/QwenLM/qwen-code/issues/8083) | 显式化派生 Config 的上下文所有权 | 5 | P1 优先级，影响 subagent / scoped memory / approval-mode 多条核心路径 |
| [#7982](https://github.com/QwenLM/qwen-code/issues/7982) | 减少首 prompt 的 provider dispatch 延迟（已 CLOSED） | 5 | 服务端性能优化闭环完成，测量+对照阶段已合并 |
| [#8136](https://github.com/QwenLM/qwen-code/issues/8136) | Provider warning 净化器误删端口并泄漏带 `@` 的密码 | 4 | **安全** 类 bug，URL authority 边界判定逻辑缺陷，已配套 PR 修复 |
| [#8162](https://github.com/QwenLM/qwen-code/issues/8162) | Anthropic converter 历史轮 thinking 签名残留 | 4 | 多轮会话上下文裁剪后未清理签名块，可能引发 400 错误 |
| [#8138](https://github.com/QwenLM/qwen-code/issues/8138) | worktree 内 settings 误写到根 `.qwen` | 4 | Git worktree 隔离机制下配置写错位置，影响多 worktree 工作流 |
| [#8146](https://github.com/QwenLM/qwen-code/issues/8146) | 桌面客户端无法连接 LMStudio | 4 | 桌面端与本地模型生态的集成问题，体现社区对离线/本地化的需求 |
| [#8102](https://github.com/QwenLM/qwen-code/issues/8102) | 可信赖 agent runtime：确定性工具执行边界 | 4 | 提议将 LLM 排除在信任边界之外，由 runtime 强制授权/观测/评估，对企业落地有方向性意义 |
| [#7972](https://github.com/QwenLM/qwen-code/issues/7972) | 0.21.1 崩溃 3 次（Windows） | 4 | 0.21.1 升级到 Windows 后稳定性问题，影响中文用户与 [#8088](https://github.com/QwenLM/qwen-code/pull/8088) 相关联 |

---

## 🛠 重要 PR 进展

| PR | 类型 | 内容要点 |
|----|------|----------|
| [#8169](https://github.com/QwenLM/qwen-code/pull/8169) | ✨ 新功能 | **新增 OpenAI Responses API content generator**，与 Anthropic/Gemini 并列，多模型后端再下一城 |
| [#8163](https://github.com/QwenLM/qwen-code/pull/8163) | 🐛 Bug 修复 | Anthropic converter：不再误删尾随 `tool_use`，并对重复 `tool_result` 去重（修复 [#8159](https://github.com/QwenLM/qwen-code/issues/8159)） |
| [#8137](https://github.com/QwenLM/qwen-code/pull/8137) | 🔒 安全 | CLI：警告净化器改为按 URL authority 边界剥离凭据，删除启发式 hack（修复 [#8136](https://github.com/QwenLM/qwen-code/issues/8136)） |
| [#8088](https://github.com/QwenLM/qwen-code/pull/8088) | 🐛 Bug 修复 | VP 模式加 `uncaughtException` 处理器并提升错误可见性，定位后续崩溃 |
| [#8176](https://github.com/QwenLM/qwen-code/pull/8176) | ✨ 新功能 | 统一 tool-call 终止遥测契约，未分类核心软错误归为 `unknown` |
| [#8171](https://github.com/QwenLM/qwen-code/pull/8171) | ✨ 新功能 | 引入 `memory.agentMaxTurns` 配置，托管 dream/auto-skill review agent 最大轮数可调（修复 [#8168](https://github.com/QwenLM/qwen-code/issues/8168)） |
| [#8056](https://github.com/QwenLM/qwen-code/pull/8056) | ✨ 新功能 | `serve` 模式按所选 workspace 隔离托管记忆（异步 remember/forget/dream + 精确工作区存储选项） |
| [#8057](https://github.com/QwenLM/qwen-code/pull/8057) | ✨ 新功能 | Skills 新增 `disabledLevels`（`project/user/extension/bundled`），发现阶段即可屏蔽 |
| [#8132](https://github.com/QwenLM/qwen-code/pull/8132) | ✨ 新功能 | **Web Shell 打包为可发布的桌面应用**（基于 Tauri PoC），统一桌面端入口 |
| [#8059](https://github.com/QwenLM/qwen-code/pull/8059) | ✨ 新功能 | Hook 新增 `SessionDelete` 事件，删除历史会话后可触发自定义逻辑 |

---

## 📈 功能需求趋势

从近期 Issue/PR 中可提炼出五条主线方向：

1. **多模型后端 & 转换层健壮性**  
   - OpenAI Responses API 内容生成器正式进入代码库（[#8169](https://github.com/QwenLM/qwen-code/pull/8169)）  
   - Anthropic converter 出现"集中体检"：thinking 签名裁剪、tool_use id 字符集校验、tool_result 排序、orphan 清理四条 issue 同时打开，标志多供应商支持进入精细化阶段

2. **桌面端 & Web Shell 体验**  
   - Web Shell 包装为正式桌面 App（[#8132](https://github.com/QwenLM/qwen-code/pull/8132)）  
   - Composer/空会话动画增强（[#8098](https://github.com/QwenLM/qwen-code/pull/8098)）  
   - 插件页按钮文案简化（[#8174](https://github.com/QwenLM/qwen-code/pull/8174)）  
   - 与 LMStudio 等本地推理后端打通的需求被反复提起（[#8146](https://github.com/QwenLM/qwen-code/issues/8146)）

3. **企业级可信 Agent Runtime**  
   - [#8102](https://github.com/QwenLM/qwen-code/issues/8102) 提出"LLM 排除在信任边界外、runtime 强制约束/授权/观测"的渐进方案；同步 PR [#8032](https://github.com/QwenLM/qwen-code/pull/8032) 实现"主机工具调用 guard"，方向高度一致

4. **CI/CD & 自动化**  
   - Fleet Shepherd 仪表盘（[#7167](https://github.com/QwenLM/qwen-code/issues/7167)）持续运行  
   - 主分支 E2E 在 SDK 权限控制（[#8153](https://github.com/QwenLM/qwen-code/issues/8153)、[#8133](https://github.com/QwenLM/qwen-code/issues/8133)）、ACP cron（[#8076](https://github.com/QwenLM/qwen-code/issues/8076)）、模型动态切换（[#8072](https://github.com/QwenLM/qwen-code/issues/8072)、[#8108](https://github.com/QwenLM/qwen-code/issues/8108)）场景连续失败，已进入 autofix 流程  
   - [#4362](https://github.com/QwenLM/qwen-code/issues/4362) 提议 PR 级 "Auto Fix CI & 回应 Review Comments" 工作流

5. **Skill/Memory 体系扩展**  
   - Skills 支持层级禁用（[#8057](https://github.com/QwenLM/qwen-code/pull/8057)）  
   - Memory 支持 workspace 隔离（[#8056](https://github.com/QwenLM/qwen-code/pull/8056)）和 turn 上限（[#8171](https://github.com/QwenLM/qwen-code/pull/8171)）  
   - Session 文件归属查询（[#7966](https://github.com/QwenLM/qwen-code/issues/7966)）和 subagent 状态对外暴露（[#8128](https://github.com/QwenLM/qwen-code/issues/8128)）

---

## 💬 开发者关注点

- **崩溃可见性缺失**：VP 模式下崩溃直接吃掉 stdout，社区只能凭用户截图还原（[#8088](https://github.com/QwenLM/qwen-code/pull/8088)），"下一个崩溃至少要留下痕迹"成为普遍诉求。
- **凭据/安全卫生**：Provider warning 字符串拼接导致密码泄漏（[#8136](https://github.com/QwenLM/qwen-code/issues/8136)），警示开发者对所有面向用户的诊断输出做 authority 边界净化。
- **跨平台细节债**：Windows 仍是被吐槽重灾区——粘贴文件（[#7957](https://github.com/QwenLM/qwen-code/pull/7957)）、独立安装器调用 `Get-FileHash`（[#7118](https://github.com/QwenLM/qwen-code/issues/7118)）、worktree 配置路径（[#8138](https://github.com/QwenLM/qwen-code/issues/8138)），每个都暴露 Windows 平台的特殊处理遗漏。
- **TUI 渲染边界**：启动横幅缺行（[#8124](https://github.com/QwenLM/qwen-code/issues/8124)）、Virtualized History 模式 statusline 无法选中（[#8131](https://github.com/QwenLM/qwen-code/issues/8131)）、VP 模式光标越界（[#8113](https://github.com/QwenLM/qwen-code/issues/8113)），渲染层在大量迭代后仍需打磨。
- **会话归属与可观察性**：如何知道"哪些文件是哪个会话创建的"（[#7966](https://github.com/QwenLM/qwen-code/issues/7966)）、Agent Team 队友消息排队策略（[#8172](https://github.com/QwenLM/qwen-code/issues/8172)）、subagent 状态对外暴露（[#8128](https://github.com/QwenLM/qwen-code/issues/8128)），反映出多代理/长任务下用户对"控制感"的强烈需求。
- **架构长期化担忧**：依赖 `@google/genai` 私有类型（[#4063](https://github.com/QwenLM/qwen-code/issues/4063)）、派生 Config 隐式 `Object.create`（[#8083](https://github.com/QwenLM/qwen-code/issues/8083)），说明在多供应商并存的当下，社区对核心抽象的可替换性日益敏感。

---

*日报由 GitHub Issues / Pull Requests / Releases 公开数据整理生成；每日 UTC 02:00 左右产出次日报告。*

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI 社区动态日报
**日期：2026-07-31** ｜ **数据周期：2026-07-30 24h**

> 📌 **重要说明**：根据最新 Release 公告，原 `DeepSeek-TUI` 项目已正式更名为 **CodeWhale**（Shannon Labs 公开发布产品），CLI 命令为 `codewhale`。旧版 `deepseek-tui` npm 包已弃用。下文沿用 GitHub 仓库名 DeepSeek-TUI，但内容均已迁移至 CodeWhale 主线。

---

## 一、今日速览

项目今日完成 **v0.9.2 收尾发布**（PR #4982），主分支同步交付权限真相、Fleet 持久化、子代理转向、环境渲染、Provider 凭证 UX 等多项补丁。社区讨论重心已明确转向 **v0.9.3 架构重构**：TUI crate 单体拆分、子代理控制面、上下文压缩契约等议题成为焦点。同时，桌面端首公民化（#4986）、Anthropic API 兼容层 400 错误（#4978）等新方向开始涌现。

---

## 二、版本发布

### 🚢 v0.9.2（已通过 PR #4982 定版）

**核心变更：**
- 完成 v0.9.2 暂停移交阶段的修复：权限真相、Fleet 设置/持久化、推理检查、压缩错误、子代理监督/转向、沙箱真相、Provider 凭证 UX、环境剪影
- 抽取子代理 worktree 隔离
- 移除遗留/过期代码
- `codewhale` 命令、npm 包与发布资产名称保留小写技术标识符
- **旧版 `deepseek-tui` npm 包正式弃用**，不再发布后续版本

📎 [PR #4982](https://github.com/Hmbown/CodeWhale/pull/4982)

---

## 三、社区热点 Issues（Top 10）

| # | 编号 | 标题 | 为什么重要 |
|---|------|------|----------|
| 1 | [#2870](https://github.com/Hmbown/CodeWhale/issues/2870) | **EPIC: staged command-boundary refactor** | 19 条评论，跟踪 #2791 命令边界重构的分层落地，是 v0.9.3 关键里程碑 |
| 2 | [#2369](https://github.com/Hmbown/CodeWhale/issues/2369) | **Config 路径在 OS/Cygwin 间碎片化** | 已附补丁；Windows/Cygwin 用户配置路径不一致 + 静默迁移 bug，影响迁移可靠性 |
| 3 | [#4022](https://github.com/Hmbown/CodeWhale/issues/4022) | **v0.9.3 子代理 CLI/TUI 对齐** | 为云端与远程工作流铺路，避免子代理控制面被锁定在 TUI 中 |
| 4 | [#3306](https://github.com/Hmbown/CodeWhale/issues/3306) | **v0.9.3 总体重构** | 揭示核心痛点：87% 代码（~671k 行）挤在 `codewhale-tui`，需收敛 runtime 所有权 |
| 5 | [#4949](https://github.com/Hmbown/CodeWhale/issues/4949) | **"Constitution" 中文翻译讨论** | 宪法 vs 协作准则，中文母语者投票中，体现项目国际化治理 |
| 6 | [#4991](https://github.com/Hmbown/CodeWhale/issues/4991) | **TUI 编译时间讨论** | aboimpinto 抛出：单个 PR 编译 ~3 分钟，CI ~12 分钟；社区共鸣程度待观察 |
| 7 | [#4807](https://github.com/Hmbown/CodeWhale/issues/4807) | **水母剪影渲染简陋** | dogfood 证据：水母看起来像「blob-on-a-string」，TUI 环境渲染要补足视觉 |
| 8 | [#3950](https://github.com/Hmbown/CodeWhale/issues/3950) | **拆分 agent tool runtime** | `subagent/mod.rs` 已达 6,970 行 + 5,511 行测试，122 次提交，急需按职责切片 |
| 9 | [#4986](https://github.com/Hmbown/CodeWhale/issues/4986) | **桌面端首公民化** | JoeKerF 提出 Codex Desktop 式体验，可能成为 v0.9.3+ 战略方向 |
| 10 | [#4978](https://github.com/Hmbown/CodeWhale/issues/4978) | **Anthropic API 400 invalid_request_error** | OpenModel 等兼容 provider 频繁报错 `'type' must be in ["enabled","disabled","auto"]`，影响多 provider 用户 |

**同日已关闭的 v0.9.3 关键 issue**：
- #4989 子代理转向消息机制
- #4988 压缩失败前的 receipt 持久化
- #4987 Provider 凭证单一存储 + 共享窄终端 modal
- #4930 前台 shell 期间 Enter 解附（已通过 PR #4979 修复）

---

## 四、重要 PR 进展（Top 10）

| # | 编号 | 标题 | 内容/状态 |
|---|------|------|----------|
| 1 | [#4982](https://github.com/Hmbown/CodeWhale/pull/4982) | **release: finalize Codewhale v0.9.2** | ✅ 已关闭，v0.9.2 收尾合并 |
| 2 | [#4992](https://github.com/Hmbown/CodeWhale/pull/4992) | **Layer 5.2: 用户命令派发优先级** | aboimpinto 提交 Gherkin 验收测试 AT-004~AT-007，处理用户命令 vs 内置命令阴影/回退 |
| 3 | [#4990](https://github.com/Hmbown/CodeWhale/pull/4990) | **fix(devcontainer): Windows 开发支持** | 引入专用开发镜像（Rust toolchain+DBus 头），命名卷替代 HOME 绑定，规避 Windows HOME 展开问题 |
| 4 | [#4980](https://github.com/Hmbown/CodeWhale/pull/4980) | **docs(permissions): 授权顺序定版** | ✅ 已关闭；工具准入→hooks→注册 requirements→typed rules→auto-review→repo law→approval→sandbox 全链路文档 + 引擎契约测试 |
| 5 | [#4979](https://github.com/Hmbown/CodeWhale/pull/4979) | **fix(tui): 前台 shell 解附** | ✅ 已关闭；将阻塞型 Bash 移到 `/jobs` 后再 steer，区分真前台等待与同步 hook |
| 6 | [#4981](https://github.com/Hmbown/CodeWhale/pull/4981) | **feat(tui): LaTeX 环境/文本/命令支持** | 完整环境块渲染 + 内联命令 + 口音命令 + 大小写不敏感匹配 |
| 7 | [#4985](https://github.com/Hmbown/CodeWhale/pull/4985) | **feat(runtime-api): workspace 任务范围** | `GET /v1/tasks` 可选 `workspace` 过滤，`TaskSummary` 携带 workspace 路径 |
| 8 | [#4984](https://github.com/Hmbown/CodeWhale/pull/4984) | **fix runtime config + workspace 任务范围** | ✅ 已关闭；GUI-facing TUI runtime API 重基到最新 main |
| 9 | [#4983](https://github.com/Hmbown/CodeWhale/pull/4983) | **test(tui): 移除 Skills 视口顺序假设** | ✅ 已关闭；改为等待 owned-scan receipt，保留关键断言 |
| 10 | [#4977](https://github.com/Hmbown/CodeWhale/pull/4977) | **fix(tui): AltGr+"/" 误开帮助** | 巴西 ABNT2 键盘 `AltGr+Q` 被识别为 `Ctrl+Alt+Q` → 误触 `Ctrl-/` 帮助；修复后正斜杠直达编辑器 |

---

## 五、功能需求趋势

通过对 26 条活跃 issue + 11 条 PR 的聚类分析，社区关注的优先方向如下：

### 🔥 第一梯队：高强度（多 issue + 多 PR）
1. **v0.9.3 架构减肥**：TUI crate 单体拆分（main.rs 14,878 行、subagent/mod.rs 6,970 行），统一代码到库支撑的可执行文件（#3948、#3950、#3957、#4747、#3306）
2. **子代理控制面**：CLI/TUI parity、转向消息机制、监督、可唤醒 worker（#4022、#4989、#3950）
3. **上下文压缩与契约**：稳健生存契约、跨模型 token 归因门、稳定 system prompt 折叠、上下文去重（#4394、#4704、#4707、#4709、#4710、#4988）

### 🚀 第二梯队：体验/生态扩展
4. **桌面端产品化**：Codex Desktop 式首公民体验（#4986）
5. **跨平台一致性**：Windows devcontainer、Cygwin HOME 路径（#2369、#4990）
6. **键盘本地化**：ABNT2、AltGr 等非美式布局兼容（#4977）
7. **授权/沙箱安全模型**：文档化 + 引擎级契约测试（#4980）

### 🎨 第三梯队：质量改进
8. **环境动画打磨**：水母剪影、Work surface 动效（#4807）
9. **Prompt/Skill 性能**：技能多根递归重建开销（#3921）
10. **国际化治理**：中文术语统一（#4949）
11. **文档可视化**：录制真实会话 GIF 用于 README（#4906）

---

## 六、开发者关注点

### 🛠️ 痛点（高频反馈）

| 痛点 | 数据/案例 |
|------|----------|
| **TUI 编译慢** | 单 PR 增量编译 ~3 分钟，CI ~12 分钟；87% 代码集中在 `codewhale-tui` 单 crate（#4991、#3306） |
| **配置路径碎片** | Windows 与 Cygwin 的 home-dir 解析不一致，迁移会静默丢失配置（#2369） |
| **前台 shell 阻塞** | `sleep 30` / `cargo build` 时键入消息按 Enter，行为反直觉（#4930 → PR #4979 已修） |
| **Provider 凭证丢失** | 全新终端打开后历史密钥看似消失，因 `~/.codewhale/secrets` 与 `CODEWHALE_HOME` 隔离但 UI 不告知（#4987） |
| **Anthropic 兼容 provider 兼容性** | OpenModel 等频繁被返回 400：reasoning_effort 等字段值集合不一致（#4978） |
| **键盘布局冲突** | 巴西 ABNT2 用 `AltGr+Q` 输入 `/`，被吞成 `Ctrl+Alt+Q` → 帮助面板抢焦（PR #4977） |

### 📈 高频需求
- **更小的 binary 表面**：用户希望单一 executable，CLI 直接进入 TUI，无需 companion 二进制（#4747）
- **ToolRegistry 统一**：并存两套注册表（`codewhale-tools` vs `codewhale-tui`），需抽象对齐（#4174）
- **压缩可靠性证明**：需要持久化「触发原因 + 失败回执」便于诊断（#4988）
- **README 视频化**：纯文字描述无法体现 TUI 的动效本质，需要真实录屏（#4906）

---

> 📊 **数据范围说明**：本日报基于 2026-07-30 当日更新的 26 条 issue 与 11 条 PR 整理；陈旧但当日更新的 issue 已纳入考量。由于项目处于 DeepSeek-TUI → CodeWhale 的品牌切换期，issue 链接域名显示为 `Hmbown/CodeWhale`，请开发者注意跳转。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*