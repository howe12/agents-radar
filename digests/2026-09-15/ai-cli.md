# AI CLI 工具社区动态日报 2026-09-15

> 生成时间: 2026-09-15 02:54 UTC | 覆盖工具: 9 个

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

# 主流 AI CLI 工具横向对比分析报告
**报告日期：2026-09-15 · 数据口径：各仓库过去 24 小时公开活动**

---

## 一、生态全景

AI CLI 工具赛道已度过"百模大战"的早期阶段，正进入**"扩展性 + 成本治理 + 跨平台稳定"三轨竞速期**：所有头部项目都在并行解决"模型够用之后剩下的问题"——函数级 Hooks、Token 熔断、Windows/桌面端质量、子代理可靠性。**Anthropic 阵营（Claude Code）靠"Mods 扩展机制"占据社区议程中心，OpenAI 阵营（Codex）陷入 WSL/桌面端/Astra 配额的反复救火，Google 阵营（Gemini CLI）以"企业安全 + Auto Memory"路线拉开身位**，而 OpenCode、Pi、DeepSeek TUI/Codewhale 等新兴或转型项目则在多 Provider 抽象、子代理编排、轻量化 runtime 上寻找差异化。从今日社区声量看，**9 个工具中 5 个的最热 Issue 都与"沉默失败"或"成本透明度"相关**，这反映出整个赛道正在从"功能上线竞赛"转向"生产可用性竞赛"。

---

## 二、各工具活跃度对比

| 工具 | 版本发布 | Issues（活跃/Top10） | PRs（合并/更新） | 社区主线 | 成熟度信号 |
|------|---------|---------------------|----------------|---------|----------|
| **Claude Code** | v2.1.271 / v2.1.272（2 个） | ~15 / 10 | 1 关闭 / 1 开放 / 1 关闭 | Mods/Hooks #91870 (174 评论) | PR 极少(3)，生态外溢至外部插件仓库 |
| **OpenAI Codex** | 0.155.0-alpha.2.4/4/5/6（4 个） | ~30+ / 10 | 全由 copyberry[bot] 提交，10 个 | WSL 项目管理 #41290 (67 评论) | 自动化流水线主导，密集迭代期 |
| **Gemini CLI** | v0.61.0-nightly.20260915 | ~50 / 10 + 备选 | 10 | Subagent 静默失败 #22323 (13 评论) | 夜间发版节奏稳定，安全 PR 集中合入 |
| **GitHub Copilot CLI** | v1.0.84-6/7/8（3 个补丁） | 22 / 10 | **0** | 多模型兼容 #4840/#4835/#4836 | PR 静默 24h，Issue 增长快于修复 |
| **Kimi Code CLI** | 无 | 3（1 关闭 / 2 开放） | 0 | CJK IME #2643、批注审阅 #2642 | 社区体量最小，单点高质量需求 |
| **OpenCode** | v1.18.31 | ~50 / 10 | 10（含 4 已合并） | 旧布局回归 #37012 (62 👍) | 双向反馈活跃，中文用户深度参与 |
| **Pi** | 无 | 50 被批量分诊 / 10 | 34 更新 / 10 重点 | 计费口径错乱 #8752 (5 👍) | 维护者主导架构级变更（#9548/#8474） |
| **Qwen Code** | v0.23.4 + nightly + cua-driver-rs 双版本 | ~30+ / 10 | 10 | TUI 静默崩溃 #11500 (13 评论) | 多线并发推进，破坏性变更谨慎 |
| **DeepSeek TUI/Codewhale** | v0.9.13 验证中 | ~50 / 13 | 10+ | TUI Crate 分解 EPIC #5316 (27 评论) | 重命名转型期，Linear 主导执行 |

**活跃度梯队**（综合 Issue 互动量 + PR 更新 + 发版节奏）：
1. **第一梯队（高频迭代）**：Gemini CLI、OpenCode、Pi、Qwen Code、Claude Code
2. **第二梯队（密集救火）**：OpenAI Codex、GitHub Copilot CLI
3. **第三梯队（社区体量小但聚焦）**：DeepSeek TUI/Codewhale、Kimi Code CLI

---

## 三、共同关注的功能方向

### 3.1 🪟 Windows / 桌面端稳定性（6/9 工具）
这是**最普遍、最易被低估**的痛点：
- **Claude Code**：KB5124008 导致 Plan9 挂载 100% 失败 #92984（113 评论）、反斜杠被吞 #89392、MSIX 闪屏
- **OpenAI Codex**：WSL 项目创建失败 #41290（67 评论，3 周未修）、Browser 控制 apikey 认证 #43410、Desktop 升级后侧栏项目消失 #42739
- **GitHub Copilot CLI**：PowerShell 窗口闪烁 #4549、Linux V8 OOM #4725
- **OpenCode**：Windows 网络盘项目加载失败 #49093
- **Qwen Code**：extension rename EPERM #11883、64-bit NTFS file id fail-open #11848
- **Pi**：Node runtime 打包改善 Windows 启动 #8474（已关闭）

**共识诉求**：跨平台一致性、IME/CJK 兼容、shell 转义语义统一、企业 Windows 部署回归测试覆盖。

### 3.2 💰 成本可见性与控制（5/9 工具）
- **Claude Code**：#85422 Token 熔断器（缺硬切机制）、#93596 Opus 5 thinking 通胀
- **OpenAI Codex**：#43230 Astra 额度暴增、#44395 "at capacity" 持续、#45536 强制任务预算
- **Pi**：#8752 Bedrock cache-miss 假性翻倍、#9210 Vercel Gateway 1h cache 错算、#9457（#9210 镜像）
- **DeepSeek TUI/Codewhale**：#6011 按组件/模型/缓存命中率的 token 核算
- **OpenCode**：SkillTool 上下文被前沿模型忽略造成浪费 #37334

**共识诉求**：**per-source（hooks/plugin/subagent）归因**、**硬熔断器**、**缓存命中率可视化**。

### 3.3 🔌 MCP 协议演进（4/9 工具）
- **Claude Code**：#92758 本地 MCP 60s 超时、#94010 session_id:"self" 失效
- **OpenAI Codex**：#44458 MCP 启动被 capability 破坏
- **GitHub Copilot CLI**：#4834 2026-07-28 MRTR、#4842 OAuth 并发、#4525（已修复）
- **Qwen Code**：bwrap + docker/podman 沙箱（#11614、#11711）作为 MCP 的安全底座

**共识诉求**：OAuth 凭据生命周期、协议升级窗口期的兼容矩阵、工具 schema 兼容性预检。

### 3.4 🤖 子代理（Sub-agent）可靠性（4/9 工具）
- **Gemini CLI**（最严重）：#22323 MAX_TURNS 被包装成 GOAL、#21409 委派后无限挂起 1 小时、#25166 Shell 完成后卡死
- **DeepSeek TUI/Codewhale**：#5529 wall-time 死亡丢失未提交工作
- **Kimi Code**：#1383 多 Agent 并发触发 API 限流（已关闭）
- **OpenCode**：多 worktree 工作流受损（与布局争议耦合）

**共识诉求**：**状态语义保真**、**wall-time 预算可中断**、**silent failure 探活机制**。

### 3.5 📂 会话/转录持久化（4/9 工具）
- **OpenAI Codex**：#42739 项目消失、#29915 权限模式不持久（2.5 个月）、#45577 thread 同步
- **Claude Code**：#94010 clear_session("self") 静默失败、#94418 archive_session("self") macOS 失效
- **Pi**：#9306 中止轮次留未匹配 toolCall、#9391 陈旧 thinking 块重放、#9440 全量扫描退化
- **OpenCode**：#23114 自动标题从 system context 而非用户消息生成

**共识诉求**：**会话状态机幂等性**、**跨设备续接可见性**、**异常路径的明确清理契约**。

### 3.6 🔇 "沉默失败"诊断学（3/9 工具，最被低估）
- **Gemini CLI**：#22323 + #25166 + #22186 + #21409 形成"沉默失败"主题
- **GitHub Copilot CLI**：#4556 extraKnownMarketplaces 拉取但未注册、#4837 插件 enabledPlugins 记为 false
- **Claude Code**：session_id:"self" 接受但行为失效

**共识诉求**：错误码规范化、状态机 fail-loud 而非 fail-silent、扩展激活路径的状态校验点。

---

## 四、差异化定位分析

| 维度 | Claude Code | OpenAI Codex | Gemini CLI | Copilot CLI | OpenCode | Pi | Qwen Code | Kimi Code | Codewhale |
|------|-------------|--------------|------------|-------------|----------|----|-----------|-----------|-----------|
| **核心定位** | 企业 + 扩展生态 | OpenAI 全家桶 | Agent 平台 + Auto Memory | GitHub 集成 + 多模型 | 开源多 Provider | 轻量 runtime | 多厂商 + 桌面 | 协作审阅 | Fleet 编排 |
| **目标用户** | 企业 DevOps / 高阶个人 | OpenAI 重度用户 | 复杂任务 Agent 用户 | GitHub 生态用户 | 多模型切换开发者 | Provider 抽象需求者 | 国产模型混用者 | 长篇协作场景 | 多 Agent 编排 |
| **技术路线** | 函数 Hooks/Mods | WSL/Desktop + Rust 重构 | Subagent + Gemini 3 沙箱 | BYOK + 多适配器 | 单一 transport 抽象 | OpenAI-compat 通用层 | 渠道分发 + bwrap | CJK + 协作 | EPIC 化重构 |
| **模型耦合** | Claude 系列 | GPT-6 Astra/Spark | Gemini 3 | 多家 BYOK | 多 Provider | Provider 无关 | 多家（含 DashScope/DeepSeek/GLM） | 自家 Kimi | 多 Provider + 模板 |
| **最显著差异化** | Mods 扩展机制（VSCode 路线） | Codex Desktop 整合度 | Auto Memory + 企业安全 | GitHub Action/Repo 集成 | worktree + 多 IDE | 跨模型 `reasoning_content` 透传 | Channels + CUA driver | 可视化批注 | Fleet anti-stall + Goal gates |
| **目标生态** | VSCode / Claude.ai | VSCode / Desktop | Cloud / Workspace | GitHub 全家 | VSCode/Desktop 多端 | Node CLI | 多渠道（钉钉首发） | Kimi Work | App-server / GPUI |

**关键观察**：
- **Anthropic** vs **OpenAI** vs **Google** 三家在 CLI 端的竞争已从"模型能力"下沉到"运维体验"——Claude

---

## 各工具详细报告

<details>
<summary><strong>Claude Code</strong> — <a href="https://github.com/anthropics/claude-code">anthropics/claude-code</a></summary>

## Claude Code Skills 社区热点

> 数据来源: [anthropics/skills](https://github.com/anthropics/skills)

# Claude Code Skills 社区热点报告

> 数据截止：2026-09-15 · 数据源：github.com/anthropics/skills

---

## 1. 热门 Skills 排行（按社区关注度）

> 注：PR 列表中评论数未公开（均显示 undefined），以下排行综合 PR 创建时间、关联 Issue 讨论度、维护活跃度综合排序。

### 🔥 TOP 1 · skill-creator 修复合集（PR #1298）
- **功能**：修复 skill-creator 在触发评估中的虚假漏报、Windows 下 select() 子进程管道失败、扫描被无关工具中断等关键缺陷
- **热点**：作为 Skills 生态的"元工具"，其稳定性直接影响所有下游 Skill 的开发迭代；社区对 trigger eval 准确性抱怨已久
- **状态**：OPEN（持续更新中）
- 链接：https://github.com/anthropics/skills/pull/1298

### 🔥 TOP 2 · mcp-builder 兼容性修复（PR #1742）
- **功能**：适配 mcp>=2.0.0 中 `streamable_http_client` 的重命名及自定义 header 配置方式变更
- **热点**：直接响应 Issue #1668，是当前 MCP 集成最迫切的痛点；不修复将导致整个 mcp-builder Skill 不可用
- **状态**：OPEN（高优先级修复）
- 链接：https://github.com/anthropics/skills/pull/1742

### 🔥 TOP 3 · document-typography Skill（PR #514）
- **功能**：为 AI 生成文档提供排版质量控制，解决孤词换行、标题孤行、编号错位等典型排版问题
- **热点**：Open 长达 6 个月未被合入，是"通用且高频"需求的典型代表；几乎影响所有文档生成场景
- **状态**：OPEN（高潜力）
- 链接：https://github.com/anthropics/skills/pull/514

### 🔥 TOP 4 · ODT Skill（PR #486）
- **功能**：支持 OpenDocument 格式（.odt/.ods）的创建、模板填充及转 HTML，对接 ISO 开放文档标准
- **热点**：覆盖 LibreOffice 用户及追求开放标准的政府/企业场景；与 PDF/DOCX 形成完整办公格式矩阵
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/486

### 🔥 TOP 5 · frontend-design Skill 升级（PR #210）
- **功能**：提升 frontend-design Skill 的清晰度与可执行性，确保每条指令可在单次对话内落地
- **热点**：前端开发是 Claude Code 高频场景，旧版"过于抽象"是长期槽点
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/210

### 🔥 TOP 6 · skill-quality-analyzer & skill-security-analyzer（PR #83）
- **功能**：五维（结构/文档/性能/可靠性/安全）的 Skill 质量分析元工具，可审计 Skill 内容安全性
- **热点**：与 Issue #492 的安全担忧形成呼应，是社区最迫切需要的"监管工具"
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/83

### 🔥 TOP 7 · md2video-audio Skill（PR #1703）
- **功能**：零成本将 Markdown 文档通过 Marp → MP4 视频，并合成类真人语音
- **热点**：零成本定位 + 视频化趋势，9 月最新动态引发讨论
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1703

### 🔥 TOP 8 · Hivemind 多 Agent 编排 Skill（PR #1628）
- **功能**：让 Claude Code 将机械任务委派给免费开源模型（opencode）执行，主模型只做规划与合并
- **热点**：紧扣"上下文窗口是稀缺资源"这一共识，是降本增效路径的明星提案
- **状态**：OPEN
- 链接：https://github.com/anthropics/skills/pull/1628

---

## 2. 社区需求趋势（来自 Issues）

按议题集中度，社区诉求可分为五个梯队：

| 梯队 | 核心诉求 | 代表 Issue |
|---|---|---|
| **信任与安全** | 社区 Skill 冒充官方 namespace，引发权限滥用担忧 | [#492](https://github.com/anthropics/skills/issues/492)（43 评论，最高热度） |
| **分发与协作** | 缺少组织级 Skill 共享机制，跨用户传 .skill 文件繁琐 | [#228](https://github.com/anthropics/skills/issues/228)（16 评论） |
| **可靠性** | trigger eval 0% 触发率、MCP 评估分数全 0、Skill 莫名消失 | [#556](https://github.com/anthropics/skills/issues/556)、[#1390](https://github.com/anthropics/skills/issues/1390)、[#62](https://github.com/anthropics/skills/issues/62) |
| **新能力方向** | 多 Agent 编排、Agent 治理、推理质量门控、紧凑记忆表示 | [#1329](https://github.com/anthropics/skills/issues/1329) compact-memory、[#1385](https://github.com/anthropics/skills/issues/1385) Reasoning Quality Gate、[#412](https://github.com/anthropics/skills/issues/412) agent-governance |
| **跨平台/协议** | 与 AWS Bedrock 兼容、Skill 作为 MCP 暴露、SharePoint 集成 | [#29](https://github.com/anthropics/skills/issues/29)、[#16](https://github.com/anthropics/skills/issues/16)、[#1175](https://github.com/anthropics/skills/issues/1175) |

**趋势关键词**：信任机制 > 触发可靠性 > 多 Agent 编排 > 跨平台互操作

---

## 3. 高潜力待合并 PR

以下 PR 关注度高但尚未合并，存在近期落地可能：

| PR | Skill | 潜力点 | 链接 |
|---|---|---|---|
| #1298 | skill-creator | 修复元工具根基，影响全部下游 Skill | https://github.com/anthropics/skills/pull/1298 |
| #1742 | mcp-builder | MCP v2 兼容性，不修复即失效 | https://github.com/anthropics/skills/pull/1742 |
| #514 | document-typography | 通用排版质量控制，6 个月长尾高需求 | https://github.com/anthropics/skills/pull/514 |
| #1628 | Hivemind | 命中多 Agent + 降本热点 | https://github.com/anthropics/skills/pull/1628 |
| #1703 | md2video-audio | 零成本视频化，差异化定位清晰 | https://github.com/anthropics/skills/pull/1703 |
| #525 | pyxel | 复古游戏开发差异化场景 | https://github.com/anthropics/skills/pull/525 |
| #1627 | buffer-api | 社媒 Agent Skill 标准化模板 | https://github.com/anthropics/skills/pull/1627 |

---

## 4. Skills 生态洞察（一句话总结）

> **社区最集中的诉求是：在 Skill 数量爆发式增长后，迫切需要建立"信任边界 + 触发可靠性 + 组织级分发"的三层基础设施——即先把 Skill 生态的"水电路"修通，再谈新能力扩展。**

支撑论据：
- Issue #492 以 43 评论一骑绝尘，远超第二名 16 评论，说明 **安全/真伪**是当下最大焦虑
- Issue #228（组织共享）、#556（触发失效）、#62（Skill 丢失）共同指向 **基础设施缺位**
- 而 PR 端大量涌现的 Hivemind、md2video-audio、compact-memory 等"创新型 Skill"则反映出：在底层工具稳定之前，社区正同时在 **新场景** 上做平行探索——等待基础设施拐点到来。

---

*报告生成时间：2026-09-15 · 基于 anthropics/skills 仓库公开 PR/Issue 数据*

---

# Claude Code 社区动态日报
**2026-09-15**

---

## 📌 今日速览

社区关注度高度集中于 **"Mods / 函数 Hooks 扩展机制"** 主线：核心增强提案 #91870 获得 174 条评论与 105 👍，官方已承诺将在"数周内"上线函数 Hooks。此外，**Windows 平台稳定性**问题集中爆发（KB5124008 导致的 Plan9 挂载失败、反斜杠被吞、MSIX 闪屏等），配合 **Opus 5 思考膨胀** 与 **Token 烧钱熔断器** 的成本话题，构成今天的三大主线。

---

## 🚀 版本发布

### v2.1.272（最新）
- Bug 修复与可靠性改进（官方未列出明细）

### v2.1.271
- **Claude Code Remote 会话新增 Fast Mode**：云端或自托管 Runner 会话现在遵循宿主机的 fast-mode 设置或会话内 `/fast` 命令（在组织策略允许时生效）
- **全屏 `/config` 面板支持鼠标**：滚轮可滚动设置列表

> 版本号推进节奏正常，Fast Mode 下放至 Remote/CCR 是企业用户期待已久的能力。

---

## 🔥 社区热点 Issues（Top 10）

| # | Issue | 平台/主题 | 评论 | 关注点 |
|---|---|---|---|---|
| 1 | [**#91870**](https://github.com/anthropics/claude-code/issues/91870) Mods — 让 Claude 扩展性提升 10 倍 | hooks/plugins | 174 | 🔥 **本日最热**。官方亲自下场：宣布"数周内"推出函数 Hooks，已开始设计 API 草案 |
| 2 | [**#92984**](https://github.com/anthropics/claude-code/issues/92984) Cowork (Windows) Plan9 挂载全量失败 | windows/cowork | 113 | Windows 更新 KB5124008 后 100% 复现，卸载 KB 即恢复，影响所有 Plan9 共享 |
| 3 | [**#86928**](https://github.com/anthropics/claude-code/issues/86928) 沙箱 Bash 间歇失败：apply-seccomp unshare 报错 | linux/sandbox | 16 | 约 1/10 调用失败，Docker/容器化场景痛点 |
| 4 | [**#85422**](https://github.com/anthropics/claude-code/issues/85422) Token 烧钱熔断器：运行时强制额度 | cost | 15 | 当前仅有警告，缺少 hooks/plugins/subagent 的逐源归属与硬切机制 |
| 5 | [**#89398**](https://github.com/anthropics/claude-code/issues/89398) `/` 不在行首时命令选择器不弹出，但回车仍执行 | windows/ui | 12 | 桌面端 UX 缺陷，存在静默执行风险 |
| 6 | [**#44933**](https://github.com/anthropics/claude-code/issues/44933) Cowork：启动时自动加载默认项目目录 | cowork/desktop | 9 | 👍 20，提升多项目用户开机体验 |
| 7 | [**#92758**](https://github.com/anthropics/claude-code/issues/92758) 本地 MCP 服务器 "Not ready after 60s" | windows/mcp | 7 | 共享池就绪状态 bug，远端连接成功但本地超时 |
| 8 | [**#82624**](https://github.com/anthropics/claude-code/issues/82624) Web/CCR git stop hook 存在两个误报 | hooks | 7 | 签名 hook 会重写历史并陷入 amend 死循环 |
| 9 | [**#78674**](https://github.com/anthropics/claude-code/issues/78674) Linux 后台任务被内存压力收割器批量杀死 | linux/bash | 5 | MemAvailable 充足但仍被 kill，PSI ~0 |
| 10 | [**#89392**](https://github.com/anthropics/claude-code/issues/89392) Bash 工具静默吞掉反斜杠（Windows/Git Bash） | windows/bash | 5 | `\\` → `\` 被吞，Windows 路径与转义全部失真 |

**值得额外关注的"次热"Issue：**
- [**#93596**](https://github.com/anthropics/claude-code/issues/93596) Opus 5 xhigh：自 9/11 起**几乎 100% 请求开启 thinking**，输出 token 涨 2–7 倍，疑似服务端静默变更
- [**#94010**](https://github.com/anthropics/claude-code/issues/94010) `clear_session("self")` 报告成功但实际未清理会话
- [**#94418**](https://github.com/anthropics/claude-code/issues/94418) macOS 定时任务无法 `archive_session("self")`
- [**#92533**](https://github.com/anthropics/claude-code/issues/92533) 任何 `tool.call` 函数 hook 都会破坏 Agent "worktree" 隔离

---

## 🔧 重要 PR 进展

> ⚠️ 过去 24 小时仅 3 个 PR 更新，远低于 Issues 活跃度，反映 **社区修改门槛高** 或代码贡献主要集中于外部插件仓库。

| PR | 状态 | 内容 |
|---|---|---|
| [**#94184**](https://github.com/anthropics/claude-code/pull/94184) | 🔴 已关闭 | `mods/diff`：与内置 `/diff` 像素级对齐的固定表头、滚轮路由、DiffDialog 退出全屏 |
| [**#71627**](https://github.com/anthropics/claude-code/pull/71627) | 🟢 开放中 | docs(sandbox)：补充 `prompt-approved hosts` 是 **会话作用域** 的说明，避免误用 |
| [**#83890**](https://github.com/anthropics/claude-code/pull/83890) | 🔴 已关闭 | 添加 pylint.yml |

> 💡 #94184 来自 #91870 核心贡献者 poteat，Mods 生态已在主仓库之外成型。

---

## 📈 功能需求趋势

按 Issue 标签聚合，过去 24h 高频需求方向：

1. **🧩 扩展性 / Hooks / Mods（最热）**
   - 函数 Hooks 即将官方上线，社区已开始设计三件套：会话/限流事件、Token 计数器、Diff 面板

2. **💰 成本控制（次热）**
   - 硬熔断器、Opus 5 thinking 通胀、逐源（hooks/plugin/subagent）归因

3. **🪟 Windows 桌面 / Cowork 稳定性**
   - KB 兼容、MSIX 闪屏、IME、目录挂载、Bash 转义——全部阻塞企业 Windows 部署

4. **🔌 MCP 集成**
   - 本地服务器就绪超时、工具卡片渲染 API、跨平台 MCP 状态

5. **🧠 Agent 系统增强**
   - `Agent` 工具的 per-call `effort` 参数（#77298, 👍13）、worktree 隔离与 hooks 的冲突（#92533）

6. **🆔 IDE / VSCode 扩展 UX**
   - 会话删除、permissionMode 持久化、diff 双开、初始权限丢失

7. **🔁 会话生命周期**
   - `self` 引用在 `clear`/`archive` 上的失效、跨设备续接的可见性

---

## 👨‍💻 开发者关注点

**核心痛点：**

- **"Mods 何时落地？"**——是社区的绝对主线，#91870 一条帖子下衍生出数十个 hook 设计提案。开发者希望 Claude Code 拥有类似 VSCode 扩展系统的能力，而不是被锁死在 prompt 工程里。

- **Windows 是事实上的二等公民**——今日 Top Issues 中 **Windows 标签占比超 50%**，涵盖 OS 更新兼容、shell 转义、GPU 驱动冲突、桌面集成等多个层次，企业 Windows 用户正在系统性承担代价。

- **成本可见性 ≠ 成本控制**——开发者已经能"看到"烧钱，但 Claude Code **没有任何机制能在运行时强制停手**（#85422）；叠加 Opus 5 服务端 thinking 通胀（#93596），企业 FinOps 几乎无法对账。

- **`session_id: "self"` 语义不一致**——多个工具（`clear_session`、`archive_session`）接受 `"self"` 但行为静默失败，没有错误码，调试极难。

- **扩展机制的"双重标准"**——官方插件商店（#83704）存在账户注册副本与 CLI 安装的"幽灵覆盖"，Update 走错仓库，Uninstall 跨仓库清理，本地一致性无保障。

**高频需求：**
1. 函数级 Hook API（PreToolUse / PostToolUse / Stop / Notification）
2. 运行时 Token 熔断器与 per-source 归因
3. 跨平台 session 状态透明化
4. Windows 平台的回归测试覆盖
5. `Agent` 工具的 per-call 模型/effort 覆盖
6. MCP 工具卡片渲染自定义能力

---

*日报基于 anthropics/claude-code 仓库过去 24 小时活动数据生成。*

</details>

<details>
<summary><strong>OpenAI Codex</strong> — <a href="https://github.com/openai/codex">openai/codex</a></summary>

# OpenAI Codex 社区动态日报
**2026-09-15**

---

## 📌 今日速览

今日 Codex 进入密集迭代期，Rust 端在 24 小时内连续推送 4 个 `0.155.0-alpha` 版本，CI 与包管理结构正经历重大重构。社区反馈层面，**Windows 平台仍是 Bug 重灾区**——WSL 项目管理、Desktop 端消息队列、Browser 控制等高频问题持续被诟病；同时 **GPT-6 Astra 模型额度与配额争议**成为新一轮热点，多位 Pro 订阅用户反馈额度消耗异常。

---

## 🚀 版本发布

过去 24 小时 Rust 端连续发布 4 个 alpha 版本，节奏明显加快：

| 版本 | 说明 |
|------|------|
| `rust-v0.155.0-alpha.6` | 最新 alpha |
| `rust-v0.155.0-alpha.5` | 顺序迭代 |
| `rust-v0.155.0-alpha.4` | 顺序迭代 |
| `rust-v0.155.0-alpha.2.4` | 较早 alpha 的补丁版 |

> 推测 0.155 正式版即将进入候选阶段，团队在 Windows 沙箱、daemon 包拆分、Image 内容重构等方向做密集合入验证。

---

## 🔥 社区热点 Issues

### 1. [#41290](https://github.com/openai/codex/issues/41290) — Windows WSL 下项目创建/删除失败 ⭐ 67 评论 / 51 👍
**最高热度 Issue**。用户反馈在 Windows 26.825.31414 版本中，将 Agent Environment 切换至 WSL 后，项目创建和移除流程异常。已存在近三周但仍未修复，反映出 WSL 集成在 Windows 端稳定性欠佳。

### 2. [#44781](https://github.com/openai/codex/issues/44781) — Desktop 队列消息编辑重发异常 ⭐ 31 评论 / 37 👍
编辑并重发已排队的消息时，触发 `App-server queued follow-up no longer exists` 错误，影响所有使用消息队列工作流的高级用户，疑似 app-server 状态机缺陷。

### 3. [#43410](https://github.com/openai/codex/issues/43410) — Windows + API Key 认证下 Browser 控制失败 ⭐ 29 评论 / 17 👍
Edge 插件与 native host 通信正常，但首操作因 `unsupported Codex auth method: apikey` 失败。**对自付费开发者影响显著**，Browser 控制能力等同于被切断。

### 4. [#36176](https://github.com/openai/codex/issues/36176) — Windows Desktop 持续轮询导致全局输入卡顿 ✅ CLOSED
26.721.4979.0 中全进程 PowerShell/WMI 轮询引发系统级输入延迟。多用户投诉后已关闭，建议关注后续版本是否彻底修复。

### 5. [#44458](https://github.com/openai/codex/issues/44458) — macOS CLI 0.154.0 破坏内置 MCP 启动 ⭐ 12 评论
Homebrew 安装的 0.154.0 中实验性 capability 导致 `gpt-6-astra` 下 Messages 与 Computer History 两个 MCP server 启动失败，跨平台回归风险显现。

### 6. [#42739](https://github.com/openai/codex/issues/42739) — Windows 更新后侧边栏本地项目消失 ⭐ 11 评论
更新 Desktop 后 "Projects" 显示空，但 Recents 仍可见，源文件夹完好。**升级路径数据迁移存在隐患**。

### 7. [#44395](https://github.com/openai/codex/issues/44395) — "Selected model is at capacity" 持续报错 ⭐ 9 评论
Pro 20x 用户长期遭遇模型容量满载无法使用，反映 **Astra 系列模型算力供给或路由配置可能存在问题**。

### 8. [#43230](https://github.com/openai/codex/issues/43230) — ASTRA Token 消耗异常暴增 ⭐ 8 评论 / 7 👍
用户早晨 reset 后短时间内额度大量燃烧，可能与计费/限流策略调整或特定工具调用路径相关。

### 9. [#29915](https://github.com/openai/codex/issues/29915) — 权限/审批模式不持久化 ⭐ 6 评论
新建或恢复 thread 后，permission/approval 模式选择丢失。已存在 2.5 个月，**长期未修复的老问题**，影响沙箱安全性体验。

### 10. [#29674](https://github.com/openai/codex/issues/29674) — 高频 TRACE 日志拖垮 SSD ⭐ 6 评论 / 6 👍
Codex Desktop 将高频 TRACE 日志写入 `~/.codex/logs_2.sqlite`，导致 SQLite + WAL 快速膨胀，对 SSD 写入量构成持续压力。

---

## 🛠 重要 PR 进展

> 今日所有 PR 来自 `copyberry[bot]` 自动化流水线，重点集中在 **Windows 沙箱加固、Daemon/CLI 包架构拆分、Attachment/Image 重构** 三大方向。

### 1. [#45580](https://github.com/openai/codex/pull/45580) — `codex app-server daemon update --from-cli`
新增 CLI 显式替换 daemon 包的能力，支持降级与本地构建，要求交互确认或 `--yes`。**简化运维链路**。

### 2. [#45579](https://github.com/openai/codex/pull/45579) — Fork 时复制当前 thread 附件
非临时 fork（包括早轮次 fork）现在会继承源 thread 的 attachments，新 ID 与时间戳，资源身份与载荷保留。

### 3. [#45559](https://github.com/openai/codex/pull/45559) — Windows 沙箱注册刷新在服务重启后恢复
修复 provisioning service 重启中断 runtime readiness 撤销流程的问题，**提升 Windows 沙箱可用性**。

### 4. [#45556](https://github.com/openai/codex/pull/45556) — Attachment 上传/解析 API
`AttachmentStore::persist` 被 `upload` + `resolve` 取代，返回内联字节或 file ID，下载 URL 需满足最小生命周期。**附件管理向云端化演进**。

### 5. [#45550](https://github.com/openai/codex/pull/45550) — Windows 沙箱 opt-in 注册包执行
通过 `CODEX_WINDOWS_REGISTERED_CORE=1` 启用，验证包家族身份与 OS package identity 后通过 service 记录的执行别名启动。

### 6. [#45549](https://github.com/openai/codex/pull/45549) — Turn 终止时保留已流式答案与计划
中断或失败时不再丢弃已缓冲的 answer/plan 内容，**改善长任务 transcript 完整性**。

### 7. [#45548](https://github.com/openai/codex/pull/45548) — Seatbelt 正确处理 Unix socket 权限
修复 macOS Seatbelt 忽略 `allow_unix_sockets` 的问题，避免继承活动代理的过宽权限，**沙箱安全收紧**。

### 8. [#45546](https://github.com/openai/codex/pull/45546) — Daemon 包脱离独立 CLI 安装
daemon 与 CLI 共享包导致耦合，本次拆分后 daemon 可独立更新而不影响 CLI 选择，**架构更清晰**。

### 9. [#45543](https://github.com/openai/codex/pull/45543) — 图像内容统一为 `ImageReference`
`ContentItem` 与 `FunctionCallOutputContentItem` 使用 `ImageReference::Inline`，保持 `image_url` 线协议格式，**为多模态统一铺路**。

### 10. [#45537](https://github.com/openai/codex/pull/45537) — Guardian 评审生命周期移入扩展
确保 Guardian review 在父进程关闭或历史重置时正确停止，rate limit 重试等待期间也能正确清理，**提升 review 可靠性**。

---

## 📈 功能需求趋势

从 Issue 标签与内容分析，社区关注点呈现以下分布：

| 方向 | 热度 | 代表 Issue |
|------|------|------------|
| **Windows 平台兼容性** | 🔥🔥🔥 | #41290、#44781、#43410、#45584、#45249 |
| **配额/限流/计费透明化** | 🔥🔥🔥 | #44395、#43230、#45192、#45536、#38199 |
| **Browser 控制 & MCP 集成** | 🔥🔥 | #43410、#45249、#44458、#45584 |
| **会话/Session 持久化与同步** | 🔥🔥 | #42739、#29915、#45577、#45583 |
| **性能与资源占用** | 🔥 | #36176、#29674、#42484、#45197 |
| **多模型支持（GPT-6 Astra、Spark）** | 🔥 | #43230、#43802、#38199 |
| **本地 Skill/Audit 能力** | 🌤 | #41760、#45536 |
| **自定义 Provider/Schema 兼容** | 🌤 | #37786、#39848 |

---

## 💡 开发者关注点

综合近 24 小时 Issue 与 PR 反馈，开发者社区的**核心痛点**集中在以下几方面：

1. **Windows 仍是最大不稳定源**
   WSL 切换、Browser 控制、App-Server 状态机、sandbox 注册更新等多类问题都集中于 Windows，团队虽持续合入沙箱加固 PR（#45550、#45559、#45542、#45533），但用户体验侧仍需观察下一稳定版。

2. **配额与计费透明度不足**
   多位 Pro/Pro 20x 用户反馈额度燃烧异常（#43230、#45192、#44395），#45536 明确建议引入 **"可强制执行的任务预算"**——这可能成为下一阶段产品演进的关键呼声。

3. **升级路径的数据/状态丢失**
   Windows 更新后侧栏项目丢失（#42739）、thread 同步缺失（#45577）、权限模式不持久（#29915）——**会话持久化是长期欠账**。

4. **新模型（GPT-6 Astra）配套能力未跟上**
   模型本身可用，但 #43802 反馈 Astra 编辑文件展示异常、#44395 反映容量长期满载，**新模型上线初期的"最后一公里"质量**仍是短板。

5. **自动化/审查能力扩展**
   `SkillInvocation` 事件日志（#41760）、Guardian reviewer（#45537）、安全检查误报（#45582）等方向，开发者希望把 Codex 用作更可控、可审计的工程流水线。

6. **自定义 Provider 生态**
   严格 OpenAI-兼容 provider（如 DeepSeek）被 `automation_update` schema 拒收（#37786、#39848），**自定义模型在工具调用层面的兼容性仍是开放问题**。

---

*日报基于 2026-09-15 当日 openai/codex 仓库公开数据整理。*

</details>

<details>
<summary><strong>Gemini CLI</strong> — <a href="https://github.com/google-gemini/gemini-cli">google-gemini/gemini-cli</a></summary>

# Gemini CLI 社区动态日报

**📅 2026-09-15** | 数据来源：google-gemini/gemini-cli

---

## 1. 今日速览

今日 v0.61.0-nightly.20260915 例行发布，社区讨论热度集中在 **Subagent 稳定性** 与 **Auto Memory 系统缺陷** 两条主线——多个 P1 Bug 揭示出子代理在超限/挂起后状态报告失真、Auto Memory 在低信号会话中无限重试、补丁校验缺失等结构性问题。与此同时，Enterprise 安全侧出现一波集中修复：策略目录权限校验、RFC 9207 OAuth 校验、沙箱递归边界、stdin 截断后读取等多项高优先级 PR 同步进入合入通道。

---

## 2. 版本发布

### 🆕 v0.61.0-nightly.20260915.g9c1b0a610
常规 nightly 自动版本升级，包含前一晚累积的代码变更。完整 diff 见 [compare 链接](https://github.com/google-gemini/gemini-cli/compare/v0.61.0-nightly.20260914.g9c1b0a610...v0.61.0-nightly.20260915.g9c1b0a610)。对应自动化 PR：[#29337](https://github.com/google-gemini/gemini-cli/pull/29337)。

> ℹ️ 关键修复通常随 release 一起合入，建议关注 PR #29335（AgentLoopContext 上下文丢失）、#29332（沙箱递归边界）以及 #29330（React 状态纯化）这几条与核心循环相关的改动。

---

## 3. 社区热点 Issues（按影响力精选 10 条）

### 🔴 P1 严重缺陷

| # | Issue | 评论 / 👍 | 重要性 |
|---|---|---|---|
| 1 | **[#22323](https://github.com/google-gemini/gemini-cli/issues/22323)** Subagent 在命中 `MAX_TURNS` 后仍上报 `status: "success"` + `Termination Reason: "GOAL"`，掩盖了真实的中断 | 13 / 2 | **状态语义被"美化"，下游决策可能基于错误结论**——属于"沉默失败"型高危 Bug |
| 2 | **[#21409](https://github.com/google-gemini/gemini-cli/issues/21409)** Generalist agent 委派后无限挂起（最长 1 小时） | 8 / 8 | 👍数最高，受影响范围广；显式禁用子代理可绕开，说明是委派路径而非模型问题 |
| 3 | **[#25166](https://github.com/google-gemini/gemini-cli/issues/25166)** Shell 命令执行完成后卡在 "Waiting input" | 4 / 3 | 极简单命令也会触发，用户体验严重退化；与 #21409、#22465 疑似同源 |
| 4 | **[#22186](https://github.com/google-gemini/gemini-cli/issues/22186)** `get-shit-done` 输出 hook 在打印用户摘要时崩溃 | 3 / 0 | 端到端工作流直接断流，影响外部扩展生态 |

### 🟡 P2 改进与功能

| # | Issue | 评论 / 👍 | 重要性 |
|---|---|---|---|
| 5 | **[#19873](https://github.com/google-gemini/gemini-cli/issues/19873)** 利用 Gemini 3 原生 bash 偏好，引入零依赖 OS 沙箱 + 执行后意图路由 | 9 / 1 | 面向 Gemini 3 时代的安全-能力平衡设计，路线级 EPIC |
| 6 | **[#22745](https://github.com/google-gemini/gemini-cli/issues/22745)** 评估 AST 感知的文件读/搜/映射价值 | 7 / 1 | 上下文效率优化方向，关联 Tactful Extraction (#19561) 与 codebase_investigator 改造 |
| 7 | **[#21968](https://github.com/google-gemini/gemini-cli/issues/21968)** Gemini 极少主动使用自定义 Skills 与子代理 | 6 / 0 | 反映 Skills/子代理 **可发现性** 的 UX 痛点——用户已声明但模型不调用 |
| 8 | **[#29141](https://github.com/google-gemini/gemini-cli/issues/29141)** DevTools HTTP 流按 chunk 解码导致多字节 UTF-8 字符损坏 | 6 / 0 | 影响调试可观测性，中文/日文等多字节内容开发者必中 |
| 9 | **[#22232](https://github.com/google-gemini/gemini-cli/issues/22232)** browser_agent 缺乏锁恢复与自动接管机制 | 4 / 0 | `BrowserManager` 当前的 fail-fast 策略在多实例下脆弱 |
| 10 | **[#20079](https://github.com/google-gemini/gemini-cli/issues/20079)** `~/.gemini/agents/*.md` 是符号链接时被忽略 | 4 / 0 | 影响 dotfiles 管理的开发者，与"配置即代码"理念相悖 |

### 备选关注
- **[#24246](https://github.com/google-gemini/gemini-cli/issues/24246)** 工具数 >128 时 400 错误——工具治理与可扩展性问题
- **[#23571](https://github.com/google-gemini/gemini-cli/issues/23571)** 模型在随机目录散布 tmp 脚本——破坏 git 工作区整洁
- **[#22672](https://github.com/google-gemini/gemini-cli/issues/22672)** Agent 需抑制破坏性命令（`git reset --force`、直改 DB 等）

---

## 4. 重要 PR 进展（精选 10 条）

### 🔒 安全 / 企业级（最活跃线）

| PR | 主题 | 价值 |
|---|---|---|
| **[#29336](https://github.com/google-gemini/gemini-cli/pull/29336)** | 将 `isDirectorySecure` 校验扩展到 user/workspace 策略目录 | 关掉 #29311 暴露的策略目录写权限盲区；支持 POSIX/Windows 属主校验 |
| **[#29333](https://github.com/google-gemini/gemini-cli/pull/29333)** | 对按约定发现的策略目录做权限审核 | 同上，针对"未显式命名"的目录进行安全过滤 |
| **[#29117](https://github.com/google-gemini/gemini-cli/pull/29117)** ✅ Closed | MCP OAuth 实现 RFC 9207 issuer 校验 | 防止 OAuth token 被错误路由至恶意 AS |
| **[#29328](https://github.com/google-gemini/gemini-cli/pull/29328)** | A2A 服务尊重 `LOG_LEVEL` 且不打印凭据 | 日志侧最小权限原则落地 |

### ⚙️ 核心循环修复

| PR | 主题 | 价值 |
|---|---|---|
| **[#29335](https://github.com/google-gemini/gemini-cli/pull/29335)** | `AgentLoopContext` 属性在对象 spread 时不再丢失 | 修复 P1，配置/工具注册表/消息总线在 spread 链路中被吃掉的隐性 Bug |
| **[#29332](https://github.com/google-gemini/gemini-cli/pull/29332)** | 沙箱扩展请求的递归深度设上限 | 一个 stub 工具即可触发 OOM 崩溃的 DoS 防护 |
| **[#29330](https://github.com/google-gemini/gemini-cli/pull/29330)** | Logger 异步路径中保留用户已键入的输入 | 修 React 状态纯化违规 + 多个非理论回归 |
| **[#29327](https://github.com/google-gemini/gemini-cli/pull/29327)** | SDK `AgentShell.exec` 真正支持 `env` 与 `timeoutSeconds` | 之前两个字段被默默忽略，`timeoutSeconds: 1` 实际等 30s |

### 🧰 体验与稳定性

| PR | 主题 | 价值 |
|---|---|---|
| **[#29329](https://github.com/google-gemini/gemini-cli/pull/29329)** | stdin 在截断后改为"暂停"而非"销毁" | 避免后续 reader 永久拿不到输入；并显式提示放弃 |
| **[#29242](https://github.com/google-gemini/gemini-cli/pull/29242)** | `isAuthenticationError` 停止对 `'401'` 做子串匹配 | 端口号 `4012`、行号等被误判为认证错误导致异常重登 |

> 另可关注：[#29287](https://github.com/google-gemini/gemini-cli/pull/29287)（`--yolo` 映射为 `allowedTools: ["*"]`，统一策略语义）已 Closed；[#29229](https://github.com/google-gemini/gemini-cli/pull/29229) 拒绝 settings 编辑器中的非有限数（修复 `1e309` → `Infinity` → `null` 静默写入）。

---

## 5. 功能需求趋势

从近 24 小时 50 条 Issue 中提炼出的方向（按提及频次与互动量加权）：

| 趋势 | 代表 Issue | 共识 |
|---|---|---|
| **🧠 Subagent / Agent 可靠性** | #22323, #21409, #25166, #22186, #22465, #22267, #22267 | 状态语义失真、无限挂起、shell 死锁是高优先级共性话题；**子代理"沉默失败"是当前最严重的可用性风险** |
| **🗂️ Auto Memory 系统完善** | #26516（tracker）, #26522, #26523, #26525 | 由 #26516 统一跟踪的 5 个子问题集中在：低信号重试、补丁校验、敏感信息确定性脱敏、补丁落盘原子性 |
| **🌐 Browser Agent 鲁棒性** | #22232, #21983, #22267 | 多实例/锁恢复、Wayland 兼容、settings.json 覆盖失效——浏览器作为深度工具进入生产可用前还需 2-3 个迭代 |
| **📉 上下文效率** | #19561 Tactful Extraction, #22745 AST 感知, #24246 工具数上限, #21924 终端渲染 | 围绕"减少单 turn token 消耗"的连续优化：精准读、AST 边界感知、工具剪枝、UI 渲染分批 |
| **🔐 安全默认** | #19873 OS 沙箱, #26525 确定性脱敏, #22672 破坏性命令抑制 | 从"模型自律"转向"沙箱强制 + 工具路由"的工程共识 |
| **🧩 Skills/子代理可发现性** | #21968, #21432（Self-Awareness）, #20079 | 模型的"自我认知"与对用户声明能力的调用率仍不足 |

---

## 6. 开发者关注点

**🔴 三大痛点（高频出现）**

1. **"静默失败"比"显式崩溃"更难调**  
   `#22323`（MAX_TURNS 被包装成 GOAL）、`#25166`（命令完成仍 Waiting input）、`#22186`（hook 末期崩）形成同主题：开发者**无法用 `status`/`exit code` 区分正常与异常路径**，被迫加额外的 timeout/探活。

2. **Auto Memory 从能力变成风险面**  
   #26516 系列的集中爆发说明：把本地转录文件喂回后台抽取 agent 之后，**secret 泄露、低信号重试、无效 patch 静默丢弃** 等连锁问题浮现。社区期待"默认安全"的提取策略（如 #26525 提到的确定性 redaction）。

3. **Shell / 子代理边界的可观察性缺失**  
   `ActivityLogger` 在多字节字符下的损坏（#29141）、`/bug` 不含子代理上下文（#21763）、subagent 轨迹无法 `/chat share`（#22598）——**调试链路在 Subagent + 浏览器工具层级上断裂**，是企业内推广的最大障碍。

**🟡 高频小需求**
- Wayland 兼容（#21983）
- 工具数 >128 时的剪枝策略（#24246）
- `/compress` 会话恢复后不持久（#21335）
- 模型随手写 tmp 脚本污染 git 树（#23571）
- 自定义 skill 是 symlink 时不识别（#20079）
- Agent 不应主动跑 `git reset --force`（#22672）

**🟢 积极信号**
- Enterprise 安全侧（#29333 / #29336 / #29117）以 L 尺寸 PR 形式在 24h 内集中合入，说明 **安全硬化已被提到与功能同等优先级**
- `PrNudgeSent` 状态（#29242、#29229、#29237）显示对 **陈旧 PR 的清理机制** 在自动运转，社区贡献被持续回看

---

*日报生成完毕。如需进一步聚焦某条主线（如 Auto Memory 全部子问题 / Enterprise 安全合入链路），可继续展开。*

</details>

<details>
<summary><strong>GitHub Copilot CLI</strong> — <a href="https://github.com/github/copilot-cli">github/copilot-cli</a></summary>

# GitHub Copilot CLI 社区动态日报

**报告日期：2026-09-15**

---

## 一、今日速览

过去 24 小时内，Copilot CLI 连续发布 **v1.0.84-6 / v1.0.84-7 / v1.0.84-8** 三个补丁版本，主要聚焦沙箱网络策略、Agent Factory 交互、Claude adaptive 思考模型与 MCP 兼容性修复。社区侧新开 18 条 Issue，问题集中在 **多模型兼容性（Deepseek/Grok/Gemini）、插件/市场沉默失败、企业策略预鉴权窗口漏洞** 三大方向。

---

## 二、版本发布

### 📦 v1.0.84-8（最新）

**新增**
- `transcriptView` 支持 `"concise"` 模式，将工具活动归并为可展开的工作摘要。

**优化**
- `/factories` 对话框支持暂停与恢复 Agent Factory 运行。

**修复**
- 登录、切换账户、注销后模型列表刷新异常。

🔗 [Release 1.0.84-8](https://github.com/github/copilot-cli)

---

### 📦 v1.0.84-7

**修复**
- 修复发送至 Claude adaptive-only 模型的 thinking shape：保留 adaptive 行为；关闭 thinking 时下调推理力度而非失败，且 reasoning effort 上限为 high。
- `/clear` 关闭会话时执行 `sessionEnd` 钩子。

---

### 📦 v1.0.84-6

**新增**
- `/config`：在 CLI 中打开侧边栏配置面板。
- `/sandbox`：支持网络主机 allow/deny 规则，不替换已配置的上游代理。

**优化**
- 对原生 shell 重定向与受支持的 in-place `sed` 操作应用托管的 Edit/Write 规则。

---

## 三、社区热点 Issues（Top 10）

| # | Issue | 核心内容 | 关注度 |
|---|---|---|---|
| 1 | [#4847](https://github.com/github/copilot-cli/issues/4847) | VS Code 长会话中托管设置自动刷新，导致 IDE MCP 重新加载失败并连带禁用 `/allow-all` | 今日新建，揭示 IDE 集成稳定性盲区 |
| 2 | [#4725](https://github.com/github/copilot-cli/issues/4725) | Linux 平台每几分钟触发 **JavaScript 堆 OOM**，影响长时间任务 | 👍1、5 评论 |
| 3 | [#4505](https://github.com/github/copilot-cli/issues/4505) | 恢复会话后所有 prompt 报 `input item ID does not belong to this connection`，`/fork` 也无法恢复 | 👍3、4 评论 |
| 4 | [#4549](https://github.com/github/copilot-cli/issues/4549) | Windows 执行 shell 命令时弹出可见 PowerShell 窗口，频繁闪烁严重干扰体验 | 👍1 |
| 5 | [#4556](https://github.com/github/copilot-cli/issues/4556) | 服务器托管的 `extraKnownMarketplaces` 已拉取但未注册到插件路径，存在静默鉴权失败 | 👍2 |
| 6 | [#3572](https://github.com/github/copilot-cli/issues/3572) | 在非 GitHub 仓库目录运行时，组织级自定义 Agent 不可见 | 👍3、长期未解 |
| 7 | [#4840](https://github.com/github/copilot-cli/issues/4840) | **BYOK + Deepseek** 调用时反序列化失败：`tools[4].type: unknown variant 'custom'` | 影响 BYOK 用户 |
| 8 | [#4836](https://github.com/github/copilot-cli/issues/4836) | **Grok 4.5** 工具数量超过 350 时直接 HTTP 400，未前置拦截 | 多模型兼容性 |
| 9 | [#4835](https://github.com/github/copilot-cli/issues/4835) | **Gemini Flash** 任一 MCP 工具 schema 含整数 enum 直接放在数组属性上，所有请求 HTTP 400 | 多模型兼容性 |
| 10 | [#4837](https://github.com/github/copilot-cli/issues/4837) | 策略驱动的 `enabledPlugins` 安装了插件但 `~/.copilot/config.json` 仍记录为 `false`，永不激活 | 策略/插件一致性 |

**额外值得追踪的关闭项**
- ✅ [#4525](https://github.com/github/copilot-cli/issues/4525)（**CLOSED**）：1.0.81-1 MCP `server/discover` 后又发送旧版 `initialize` 导致 -32022 的问题已修复。
- ✅ [#1029](https://github.com/github/copilot-cli/issues/1029)（**CLOSED**）：单条工具调用反馈应触发整体 replanning，已合并。

---

## 四、重要 PR 进展

> ⚠️ 过去 24 小时内 **无 PR 更新**，本节省略。

---

## 五、功能需求趋势

从 22 条活跃 Issue 中提炼，社区关注度按主题归类如下：

| 方向 | 代表 Issue | 热度信号 |
|---|---|---|
| **多模型兼容（BYOK）** | #4840、#4836、#4835、#4840 | 多家供应商 schema/limits 与 CLI 不匹配，错误信息不透明 |
| **MCP 协议演进** | #4834（2026-07-28 MRTR）、#4842（OAuth 并发）、#4525 | 协议升级窗口期频繁踩坑 |
| **企业策略 & 沙箱** | #4783、#4844、#4846、#4847 | 预鉴权 fail-closed 窗口期策略不一致；dev tool access 绕过沙箱 |
| **插件 / 市场** | #4556、#4837 | 静默失败问题频现，影响排查效率 |
| **会话与性能** | #4725、#4505、#4845 | 内存、会话状态机、并发安全 |
| **UX & 终端适配** | #4549、#4839、#4843、#4841 | Windows/Warp 适配、任务栏图标、Plan 面板渲染 |
| **自定义 Agent** | #3572、#4841 | 组织级 Agent 发现、Plan 模式渲染 |

---

## 六、开发者关注点（高频痛点）

1. **错误信息可读性差**：#4835 / #4836 / #4840 中，模型兼容性失败均以裸 HTTP 400 暴露，缺乏前置校验与结构化错误。建议官方在客户端对工具数量、Schema 兼容性做预检。

2. **策略/沙箱存在预鉴权漏洞窗口**：#4844（`--yolo` 被 fail-closed 吞掉）、#4846（dev tool access 绕过文件系统策略）、#4847（托管设置刷新使 `/allow-all` 失效），三者在交互启动期形成连锁风险。

3. **插件与市场"静默失败"**：#4556 与 #4837 均表现为系统看似正确完成安装/拉取，但运行时无法激活。缺乏日志或状态校验点，使企业部署排查成本陡增。

4. **会话状态机一致性**：#4505（恢复后 ID 失效）、#4845（会话永久卡在 In use）、#4842（OAuth 重连自愈但暴露硬错误），反映分布式状态机缺乏幂等与重试契约。

5. **Linux 运行时内存治理**：#4725 的 OOM 报告指向 V8 Mark-Compact 阶段堆接近 4 GB，缺少可观测指标与内存上限配置项。

6. **终端生态适配欠债**：Windows PowerShell 闪烁、Warp 主题不识别、任务栏图标无法关闭——这些"小问题"累积成 macOS / Windows 用户的体验摩擦。

---

*报告基于 GitHub `github/copilot-cli` 仓库过去 24 小时数据自动汇总。*

</details>

<details>
<summary><strong>Kimi Code CLI</strong> — <a href="https://github.com/MoonshotAI/kimi-cli">MoonshotAI/kimi-cli</a></summary>

# Kimi Code CLI 社区动态日报

**日期：2026-09-15**
**数据来源：github.com/MoonshotAI/kimi-cli**

---

## 📌 今日速览

过去 24 小时 Kimi CLI 仓库活跃度较低，未发布新版本，也无 PR 合并记录。社区讨论主要集中在 **2 条新提交的 Issues**：一条是关于 `kimi web` 在 CJK 输入法组词状态下回车键误触发送消息的 Bug，另一条是关于 Kimi Work 会话内对 Agent 回复进行可视化批注与审阅的功能需求。此外，一条 3 月份关于多 Agent 并发触发 API 限流的 Issue 已进入关闭流程。

---

## 🚀 版本发布

过去 24 小时**无新版本发布**，本节省略。

---

## 🔥 社区热点 Issues

> 今日仅有 3 条活跃 Issues，逐一列出如下：

### 1. #2643 [OPEN] kimi web 在 IME 组词状态下按回车被误判为发送消息
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2643
- **为什么重要**：这是一个典型的国际化体验 Bug，对所有使用中文、日文、韩文输入法的用户都有直接影响。用户在组词过程中按回车确认拼音/字母上屏时，预期是确认选词，结果却是"发送消息"，导致未完成的输入被直接发出，属于影响日常使用体验的严重问题。该 Bug 修复通常涉及 `compositionstart` / `compositionend` 事件的正确监听，需要前端与终端交互层的协同改动。
- **社区反应**：🆕 刚提交，0 评论 0 👍，尚处于待关注阶段。
- **建议**：建议维护者优先处理，可参考 VS Code、JetBrains 等已正确处理 IME 事件的成熟方案。

### 2. #2642 [OPEN] Kimi Work 会话内支持对 Agent 回复的可视化批注与审阅反馈
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/2642
- **为什么重要**：这是一条高质量的功能需求 Issue，作者提出了一个清晰的产品场景——在 Agent 给出长篇计划/报告/方案时，用户希望能对**任意段落**进行批注，批注结果以结构化形式回传给 Agent 用于迭代修订，而非只能在输入框用文字描述修改意见。这正是当前 LLM Agent 协作流程中的一个共性痛点：用户审阅成本高、反馈链路长。如果实现，将显著提升 Kimi Work 在复杂任务（代码评审、文档审阅、方案设计）场景下的可用性。
- **社区反应**：🆕 刚提交，0 评论 0 👍，但需求文档完整度高，包含用户场景、竞品对比（类 Cursor 批注、Notion 评论、Google Docs suggestion mode）和验收标准，具备被产品团队采纳的潜力。
- **建议**：维护者应认真评估其产品契合度，考虑在 Kimi Work 中引入"段落级 inline comment + 结构化 diff 反馈"机制。

### 3. #1383 [CLOSED] Allegretto 会员权益下多 Agent 并发触发 API 限流
- **链接**：https://github.com/MoonshotAI/kimi-cli/issues/1383
- **为什么重要**：该 Issue 揭示了 Kimi 在多 Agent 场景下的限流策略与会员权益描述之间可能存在不一致。用户反馈：在 OpenClaw 上使用 API 时，只要两个 Agent "龙虾"同时思考就会触发 `API rate limit`，但官方会员权益描述支持多 Agent。评论数 6 条，说明有一定讨论度。该 Issue 今日被关闭（可能是已修复、确认或转为内部处理），值得追踪关闭原因以了解官方对多 Agent 并发场景的最终策略。
- **社区反应**：👍 0 | 💬 6 评论，但已 CLOSED，处于收尾阶段。
- **建议**：开发者应关注关闭说明，明确多 Agent 并发场景下 API 调用的合理速率预期。

---

## 🔧 重要 PR 进展

过去 24 小时**无 PR 更新**，本节省略。

---

## 📈 功能需求趋势

虽然今日 Issues 数量有限，但综合历史数据与今日新提交的内容，可以提炼出以下几条社区关注的功能方向：

| 趋势方向 | 代表 Issue | 社区诉求 |
|---------|-----------|---------|
| **🤖 多 Agent 并发与协作** | #1383 | 会员权益与限流策略一致性；多 Agent 协同思考的场景支持 |
| **🖊️ Agent 回复审阅与协作** | #2642 | 段落级批注、结构化反馈、审阅-修订闭环 |
| **🌏 国际化与输入法体验** | #2643 | CJK 输入法组词状态下回车/候选词选择等交互正确性 |
| **💼 Kimi Work / Agent 平台化** | #2642 | 从 CLI 工具向一体化协作平台演进，强调审阅、可视化、迭代能力 |

---

## 👨‍💻 开发者关注点

综合今日社区反馈，开发者与用户集中关注以下痛点：

1. **多 Agent 并发的资源与限流问题**：并发调用是 Agent 工作流的常态，但当前限流策略让"多 Agent 协同"的宣传卖点受限，开发者期望更明确的多 Agent 配额或套餐分级。

2. **审阅反馈链路过于依赖文本**：现有 Agent 工作流中，用户对长回复的修改意见只能以自然语言重述，信息密度低且容易遗漏细节；社区强烈期待**可视化、段落级、结构化**的反馈通道（Issue #2642）。

3. **CJK 输入法兼容性是国际化短板**：IME 组词与回车的冲突是老问题但在 `kimi web` 仍存在（Issue #2643），对非英语用户的使用体验影响显著，期望官方在终端 UI 与 Web UI 中统一处理 composition 事件。

4. **Issue 响应与透明度**：#1383 历时半年才关闭，反映出社区对部分 Issue 处理周期较长、进展透明度不足的关注，建议官方在关闭时附上根因说明或修复版本指引。

---

> 📊 **今日数据小结**：3 Issues（1 CLOSED / 2 OPEN）· 0 PR · 0 Release
> 活跃度偏低，但 #2642 的功能需求与 #2643 的 IME Bug 都具备较高产品价值，建议后续追踪其处理进展。

</details>

<details>
<summary><strong>OpenCode</strong> — <a href="https://github.com/anomalyco/opencode">anomalyco/opencode</a></summary>

# OpenCode 社区动态日报
**2026-09-15**

---

## 📌 今日速览

OpenCode 发布 v1.18.31 修复了 ACP 会话恢复与 TUI 远程配置认证等关键问题；社区最大的争议焦点集中在 **新布局强制替换旧布局**（尤其影响多 worktree 工作流），同时 macOS 端 `undefined is not an object` 崩溃与本地 Ollama 超时问题获得大量关注。

---

## 🚀 版本发布

### v1.18.31
- **Core**：恢复 ACP 会话在加载/恢复/分叉时的 model、effort、mode、reasoning chunk 边界（@JacobNWolf）
- **TUI**：启动时正确显示远程配置认证错误并以失败状态退出
- **Extensions**：改进项（详细未列出）

[查看 Release](https://github.com/anomalyco/opencode/releases/tag/v1.18.31)

---

## 🔥 社区热点 Issues

| # | Issue | 状态 | 热度 | 要点 |
|---|-------|------|------|------|
| 1 | [#37012](https://github.com/anomalyco/opencode/issues/37012) 保留旧布局选项 | OPEN | 💬45 👍62 | **今日最高互动**，用户联名反对移除旧布局，要求恢复对工作区的快速访问能力 |
| 2 | [#22132](https://github.com/anomalyco/opencode/issues/22132) Ollama 本地提供方挂起 | CLOSED | 💬17 👍5 | 通过 `@ai-sdk/openai-compatible` 配置 Ollama 时简单 prompt 即卡死，但 `/v1/chat/completions` 正常 |
| 3 | [#26602](https://github.com/anomalyco/opencode/issues/26602) Desktop 5 分钟超时错误 | OPEN | 💬14 👍2 | 慢速本地提供方即使设置 `timeout:false` 仍会被 5 分钟 Headers Timeout 截断 |
| 4 | [#28175](https://github.com/anomalyco/opencode/issues/28175) 侧栏会话状态面板 | CLOSED | 💬10 👍3 | 多会话并行缺少统一监控入口，需跳转到 `/sessions` modal |
| 5 | [#48835](https://github.com/anomalyco/opencode/issues/48835) 新布局不支持多 worktree | OPEN | 💬7 👍9 | 9月14日强制切换新布局，但缺失多 worktree 支持，引发中文用户强烈反馈 |
| 6 | [#48811](https://github.com/anomalyco/opencode/issues/48811) macOS 提示词失败 | OPEN | 💬7 👍29 | **👍点赞最高**，每次 prompt 都报 `undefined is not an object (evaluating 'a.name')`，发生在 `SystemPrompt.environment` |
| 7 | [#23114](https://github.com/anomalyco/opencode/issues/23114) 会话标题生成错乱 | OPEN | 💬6 👍3 | 自动标题从注入的 memory/system context 而非真实用户消息生成 |
| 8 | [#32416](https://github.com/anomalyco/opencode/issues/32416) failed to fetch 错误 | CLOSED | 💬4 👍0 | 错误追踪分支导致非本项目变更被加载，弹出大量文件变更错误 |
| 9 | [#35875](https://github.com/anomalyco/opencode/issues/35875) 官网 Changelog 失效 | CLOSED | 💬4 👍0 | `opencode.ai/changelog` 与 `.json` 都为空 |
| 10 | [#49093](https://github.com/anomalyco/opencode/issues/49093) Windows 网络盘对话不显示 | OPEN | 💬3 👍0 | Win11 + v1.18.31 + 网络盘项目路径下新聊天窗口历史加载失败 |

---

## 🛠 重要 PR 进展

| PR | 状态 | 内容 |
|----|------|------|
| [#48867](https://github.com/anomalyco/opencode/pull/48867) | CLOSED | **feat(core): worktree API 改为基于 project**——所有操作需 `projectID`，直接回应 #48835 新布局缺 worktree 支持的痛点 |
| [#48908](https://github.com/anomalyco/opencode/pull/48908) | OPEN | **fix(session): 恢复 Responses API 模型的过期加密 reasoning**——修复 Zen/Console 网关上 Muse Spark/OpenAI 模型的会话恢复问题 |
| [#48423](https://github.com/anomalyco/opencode/pull/48423) | OPEN | **refactor(core): 用单一 transport 偏好替代 websocket flags**——统一 `Model.Info` 插件模式 |
| [#48724](https://github.com/anomalyco/opencode/pull/48724) | OPEN | **fix(desktop): macOS Beta 迁移到 Stable 安装器**——通过 Squirrel.Mac 路由到签名 DMG 并显示迁移对话框 |
| [#49089](https://github.com/anomalyco/opencode/pull/49089) | OPEN | **fix(tui): 退出时干净重置 terminal 模式**——解决终端损坏与会话尾声覆盖 shell 内容 |
| [#49087](https://github.com/anomalyco/opencode/pull/49087) | OPEN | **feat(app): URL 凭据净化与浏览器附件上下文保护** |
| [#49084](https://github.com/anomalyco/opencode/pull/49084) | OPEN | **refactor(vscode): 与 v2 CLI 对齐并解析 shim 符号链接** |
| [#49066](https://github.com/anomalyco/opencode/pull/49066) | CLOSED | **feat(app): Agents fleet 标签页**——跨项目 agent 视图，含 token sparkline、TTFT 延迟、$est 成本估算 |
| [#49064](https://github.com/anomalyco/opencode/pull/49064) | CLOSED | **feat(config): agent markdown prompt 支持 `{file:...}` 插值**——支持 CLAUDE.md、AGENTS.md、CONTEXT.md |
| [#49076](https://github.com/anomalyco/opencode/pull/49076) | OPEN | **feat(codemode): 新增 Uint8Array/TextEncoder/TextDecoder**——首个二进制类型，扩展边界的 bytes 处理 |

---

## 📈 功能需求趋势

从 50 条最新 Issues 中提炼出社区最关注的方向：

1. **🖥 IDE / 桌面布局与工作区**
   - 旧布局回归、Plan/Build 模式切换、多 worktree 支持、Project 编辑对话框持久化（#37012、#36995、#48835、#32164）

2. **🤖 新模型与 Provider 支持**
   - GPT-5.6 prompt caching 默认值、xAI Provider 列表显示、Vertex 错误细分（#36318、#28731、#35736）

3. **⏱ 稳定性与超时控制**
   - 本地提供方超时、重试退避、Headers Timeout（#26602、#37412、#22132）

4. **🔌 ACP / 集成协议**
   - ACP Plan emit todowrite、SessionUpdate、TUI attach 模式（#30659、#37060、v1.18.31 ACP 修复）

5. **📊 监控与会话管理**
   - 多会话状态面板、Agents fleet、session title 准确性（#28175、#49066、#23114）

6. **🌐 本地化与文档**
   - 印尼语 README、官方 Changelog 修复（#47913、#35875）

---

## 💡 开发者关注点

**核心痛点：**

- **🔴 布局迁移一刀切**：强制移除旧布局但新布局尚未完备（worktree、模式切换），导致中文与英文用户同时反弹，社区要求"渐进式迁移"或保留开关
- **🍎 macOS 兼容性**：iCloud Desktop/Documents 同步后项目路径变化导致 OpenCode 不可用（#49082），以及 `a.name` undefined 崩溃（#48811，29 赞）
- **🐢 本地提供方超时**：Ollama/LM Studio 等慢速提供方被 5 分钟硬截断，配置 `timeout:false` 无效（#26602）
- **🪟 Windows / 网络环境**：网络盘项目路径下消息加载失败，TUI 在 Windows 默认端口挂起
- **🔁 Plan/Build 模式可用性**：模式切换入口在最新版变得不可达，桌面应用近乎不可用（#36995）
- **💸 Token 浪费**：SkillTool 注入的上下文被前沿模型忽略，造成高 token 消耗（#37334）

**高频呼声：** "请保留旧布局"（#37012 62 赞）、"修复 macOS 崩溃"（#48811 29 赞）、"新布局必须支持多 worktree"（#48835 9 赞）。

---

*数据来源：GitHub API · 统计窗口：过去 24 小时 · 报告生成时间：2026-09-15*

</details>

<details>
<summary><strong>Pi</strong> — <a href="https://github.com/badlogic/pi-mono">badlogic/pi-mono</a></summary>

# Pi 社区动态日报 · 2026-09-15

> 数据来源：`github.com/earendil-works/pi`（原 `badlogic/pi-mono`）
> 采集窗口：过去 24 小时

---

## 📌 今日速览

过去 24 小时仓库**没有版本发布**，但 Issue/PR 流转活跃：50 个 Issue 被更新（绝大多数被打上 `untriaged` / `no-action` 后关闭，表明团队正在进行批量分诊），34 个 PR 被更新。讨论焦点集中在**多 Provider 集成边界条件**（Bedrock 缓存计费、Vercel Gateway 路由、Gemini thoughtSignature、Grok 错误归因）和**会话转录的可靠性**（compaction 残留、并发 session 竞态、System message 中途变更）。维护者主导的两项架构性 PR——`#9548`（系统消息落库）和 `#8474`（Node runtime 打包）——值得关注。

---

## 🚀 版本发布

无新版本发布。

---

## 🔥 社区热点 Issues（Top 10）

### 1. [#8752 bedrock-converse 用量未归一化导致假性 cache-miss 与输入成本翻倍](https://github.com/earendil-works/pi/issues/8752) · OPEN · 👍 5 · 💬 6
Anthropic 模型按 cache-净量上报 `input`，OpenAI 系模型按毛量（已含 cacheRead/Write），`bedrock-converse` 直接复制 `inputTokens` 导致计费口径错乱。**这是影响范围最广的成本问题之一**，跨多家模型家族。

### 2. [#9210 Vercel Gateway：cacheWrite1h 永远为 0，1h 写入按 5m 费率计费](https://github.com/earendil-works/pi/issues/9210) · OPEN · 💬 5
设置 `PI_CACHE_RETENTION=long` 时，`calculateCost` 仍按 5m 计价，1.25× 与 2× 的价差直接漏算。用户实际付得更多。

### 3. [#9211 vercelGatewayRouting 对 anthropic-messages 模型完全无效](https://github.com/earendil-works/pi/issues/9211) · OPEN · 💬 5
文档承诺的网关路由配置仅在 `openai-completions` 适配器生效，而内置目录中所有 vercel-ai-gateway 模型都是 `anthropic-messages`，**文档承诺的功能形同虚设**。

### 4. [#9391 压缩后陈旧的签名 thinking blocks 被每轮重放](https://github.com/earendil-works/pi/issues/9391) · OPEN · 💬 4 · 👍 1
长会话手动 compaction 后，每轮请求都打印 15 条 `prefix_binding_mismatch`，相同路径反复出现。直接污染上下文并浪费 token。

### 5. [#9306 中止/错误轮次留下未匹配的 toolCall 块，导致续跑被拒](https://github.com/earendil-works/pi/issues/9306) · OPEN · 💬 4
`stopReason: error/aborted` 且已流式发出 toolCall 时，工具调用残留在 context 中，下次 `runAgentLoopContinue` 直接被 provider 拒绝——**会话状态机的健壮性问题**。

### 6. [#9457 bedrock-converse: 1h cache writes 按 5m 计费](https://github.com/earendil-works/pi/issues/9457) · OPEN · 👍 4 · 💬 3
`cacheDetails` 正确但 `cacheWrite1h` 字段从未设置，与 #9210 是同一个 bug 在不同 provider 的镜像。

### 7. [#9440 使用 --session-id + 新 ID 时会扫描全部 4K+ transcript，启动 ~16s](https://github.com/earendil-works/pi/issues/9440) · OPEN · 💬 3
扩展以预设 ID 创建新会话时退化为全量扫描，性能严重退化。

### 8. [#9298 Grok 403 被错误归因为 "OpenAI API error"](https://github.com/earendil-works/pi/issues/9298) · CLOSED · 💬 7
通过 OpenAI-Responses formatter 调用 Grok 时，Grok 自身的 403（"跑完 credits"）被记成 OpenAI 计费错误，**调试体验差**。评论数最高，反映社区踩坑频次。

### 9. [#9444 Gemini thoughtSignature 在 openai-completions 流式 tool_calls 中被丢弃](https://github.com/earendil-works/pi/issues/9444) · OPEN · 💬 2
OpenAI 兼容网关后的 Gemini 模型在第二轮 tool use 时直接 400，签名未透传。

### 10. [#9606 TUI 在单个 grapheme > maxWidth 时无限递归崩溃](https://github.com/earendil-works/pi/issues/9606) · CLOSED · 💬 1
任意宽度 1 的 CJK 字符即可触发 `RangeError: Maximum call stack size exceeded`，**TUI 严重稳定性缺陷**。

> 其他值得留意：`#9354`（frontmatter 无效时 prompt 模板静默丢弃，skills 路径却会告警，体验不一致）、`#9596`（两个并发 `pi -c` 写入同一 session 文件无锁，事务悄悄交叉）、`#9447`（全屏模式滚轮一次只滚 1 行且无用户配置入口）。

---

## 🛠 重要 PR 进展（Top 10）

### 1. [#9548 中途系统消息 (Mid conversation system messages)](https://github.com/earendil-works/pi/pull/9548) · OPEN · mitsuhiko
**架构级变更**：把系统提示文本与工具变更写入 transcript，而非静默重写初始条件。补齐分支恢复与缓存前缀保留——直接回应 #9391（陈旧 thinking 块）一类问题。

### 2. [#8474 打包 Node runtime（降低文件 IO）](https://github.com/earendil-works/pi/pull/8474) · CLOSED · mitsuhiko
将 `pi-coding-agent` 的文件加载方式改为更少文件，针对 Windows Defender / 慢 IO 机器显著改善启动。**Windows 用户体感最直接**。

### 3. [#9601 使用精确 session-ID 查找避免 transcript 全量扫描](https://github.com/earendil-works/pi/pull/9601) · OPEN · metaist
直接修复 #9440，丢弃 async 包装以利于后续缓存命中。微基准显示显著加速。

### 4. [#9607 直补 summarization 流的 provider hooks](https://github.com/earendil-works/pi/pull/9607) · CLOSED · lksgs0
compaction / branch summary 走 `sessionStream` 但漏掉 `onPayload`，`before_provider_request` 扩展被跳过。补齐扩展 hook 一致性。

### 5. [#9594 新增 Gemini 专属 Antigravity OAuth provider](https://github.com/earendil-works/pi/pull/9594) · CLOSED · a209m
将独立 Antigravity transport + OAuth 流程适配回当前 provider 架构，**恢复订阅制 Gemini 接入**。

### 6. [#9605 新增 GMI Cloud provider](https://github.com/earendil-works/pi/pull/9605) · CLOSED · isaachuangGMICLOUD
基于 `openai-completions` 复用，GMI 作为上游多供应商聚合接入，开箱即用。

### 7. [#9434 允许扩展向会话系统提示追加内容](https://github.com/earendil-works/pi/pull/9434) · OPEN · wutongyuonce
闭合 #9432：`session_start` handler 可返回 `systemPromptAppend`，按扩展顺序合并并保留来源元数据。

### 8. [#6534 实验性：developer 消息角色](https://github.com/earendil-works/pi/pull/6534) · OPEN · mitsuhiko
实验性引入 developer role，对应 RFC 54。

### 9. [#9501 Windows shell 解析统一与文档化](https://github.com/earendil-works/pi/pull/9501) · OPEN · petrroll
统一 Windows 上各 shell 的发现路径，文档化，Pi 在 Windows 下体验显著改善。

### 10. [#9274 edit 工具 diff 渲染保留缩进](https://github.com/earendil-works/pi/pull/9274) · OPEN · dannote
修复"插入文本后删除行缩进丢失"的渲染缺陷，可读性提升。

> 同期值得关注的合并：`#8732`（DeepSeek 跨模型重放时保留 `reasoning_content`）、`#9504`（接受 Windows Store shell 别名）、`#9591`（导出 image bytes MIME 检测器，呼应 #9608）、`#9584`/`#9582`（`Ctrl+P` 在 scope 单模型时正确切换）。

---

## 📈 功能需求趋势

| 方向 | 代表性 Issue / PR |
|---|---|
| **Provider 集成完善** | #8752, #9210, #9211, #9298, #9444, #9594, #9605, #9437 |
| **缓存 / 计费正确性** | #8752, #9210, #9457, #9391 |
| **会话转录可靠性** | #9306, #9391, #9440, #9596, #9602, #9548 |
| **跨模型延续 (cross-model replay)** | #9433, #7920, #8732 |
| **TUI 稳定性与国际化** | #9606（CJK 崩溃）, #9447（滚轮）, #6995（kitty 图层）, #9329（Orca 终端）|
| **扩展 API 增强** | #7824, #9434, #9604（exec pid 上报）, #9608 |
| **新模型 / 角色** | #6534（developer role）, #9594, #9605 |

社区最高频的诉求可以概括为三件事：**计费账单要准确**、**多 Provider 不要踩坑**、**会话和 TUI 不能崩溃**。

---

## 👨‍💻 开发者关注点

1. **成本可观测性是底线**：Bedrock / Vercel Gateway 上的 `cacheWrite1h` 错算直接影响钱包，开发者要求 `cacheDetails` → `cacheWrite1h` 的映射逻辑透明一致。
2. **跨模型工作流的"小语种"陷阱**：换模型时 `reasoning_content` 与 `thoughtSignature` 是否透传，决定了多轮工具调用能否继续，是新手最容易撞的墙。
3. **会话状态机的健壮性**：compaction 后 thinking 块残留、aborted 轮次留下未匹配 toolCall、并发 `-c` 写入同一文件——开发者普遍希望 Pi 在异常路径上有明确的"清理或锁"，而不是悄悄污染。
4. **扩展可观测钩子**：`before_provider_request` 跳过 summarization、exec 拿不到子进程 pid 等诉求，表明扩展作者希望 Pi 暴露更细粒度的运行时钩子。
5. **Windows / 终端多样性**：`pi-coding-agent` 启动性能、shell 别名识别、TUI 在 CJK 与非主流终端（Orca）下的行为，仍是真实用户的主要痛点来源。

---

*日报生成时间：2026-09-15（基于过去 24 小时数据）*

</details>

<details>
<summary><strong>Qwen Code</strong> — <a href="https://github.com/QwenLM/qwen-code">QwenLM/qwen-code</a></summary>

# Qwen Code 社区动态日报 · 2026-09-15

## 今日速览

今日 Qwen Code 发布了 **v0.23.4** 正式版本与配套 cua-driver-rs **v0.20.7/0.20.8**，同时伴随新一轮功能 PR 集中合入。社区焦点高度集中在三件事上：**(1) TUI 静默崩溃（React #185）** 在多平台持续复现，已成 P1 头号顽疾；**(2) 跨厂商模型兼容性问题**（DeepSeek、ZHIPU/GLM）暴露 token 解析与 metadata 注入的协议缺陷；**(3) ACP / VS Code 权限队列设计** 在多请求并发下出现请求被静默 cancel 的边界 bug，需要重构会话作用域。

---

## 版本发布

### v0.23.4（正式版）
- **Breaking Change**：移除 channels 中可配置的消息前缀过滤（message-prefix filtering），符合资格的 channel 消息现在回归到发送者、群组、提及、配对等通用策略判断。([#11571](https://github.com/QwenLM/qwen-code/pull/11571))
- 建议升级前审阅 channel 集成（尤其是自定义 bot），确认行为不依赖前缀过滤。

### v0.23.4-nightly.20260914.f024b37689
- 主要进展：记录 Windows inode 门禁隐藏行为，并解除其中一个测试 skip（[#11853](https://github.com/QwenLM/qwen-code/pull/11853)）
- 修复 CUA driver 相关兼容问题

### cua-driver-rs v0.20.8 / v0.20.7
- **macOS**：已签名 + 公证的通用二进制 + `QwenCuaDriver.app`
- **Linux**：未签名 x86_64 + arm64（glibc 2.31 floor）
- **Windows**：UIAccess worker + 原生 SDK payload（x86_64 + arm64），未签名
- vendored under `packages/cua-driver`

---

## 社区热点 Issues

| # | Issue | 优先级 | 评论数 | 为什么重要 |
|---|-------|--------|--------|-----------|
| [#11500](https://github.com/QwenLM/qwen-code/issues/11500) | TUI 静默退出（React #185）— Ink useBoxMetrics 布局监听 setState 死循环 | P1 | 13 | 多后台 agent 接连完成时复现，进程无声退出回到 shell；是当前 UI 类第一号稳定性 bug |
| [#11590](https://github.com/QwenLM/qwen-code/issues/11590) | Qwen Code 向 DashScope 聚合网关请求体顶层注入 `metadata`，导致 ZHIPU/GLM 等非 Qwen 模型 400 | P1 | 8 | **多厂商兼容性的核心问题**——已关闭，但暴露请求适配层协议缺陷，后续类似问题风险高 |
| [#11834](https://github.com/QwenLM/qwen-code/issues/11834) | 你好 → `[API Error: 400 invalid params, function parameters is empty (2013)]` | P1 | 6 | 极简 prompt 也触发，且 `/update` 自身正常；指向 tool-call 序列化或历史上下文损坏 |
| [#11849](https://github.com/QwenLM/qwen-code/issues/11849) | 0.23.3 间歇性静默崩溃（后台 shell/subagent 完成嫌疑） | P1 | 5 | 与 #11500 同源，issue 标题明确标注相关，便于关联跟踪 |
| [#11887](https://github.com/QwenLM/qwen-code/issues/11887) | ACP `--acp` 忽略审批模式：tools 自动执行，从不发 `session/request_permission` | P2 | 4 | 0.23.2 / 0.23.4 均复现，**安全控制完全失效**，对 IDE 集成方是关键合规风险 |
| [#11872](https://github.com/QwenLM/qwen-code/issues/11872) | Web Terminal 报 "PTY not available" — `@lydell/node-pty` 已声明但未打包；macOS 代码签名阻断本地预编译 | P1 | 3 | Web shell 核心功能失效；涉及打包、签名、依赖解析三层耦合 |
| [#11851](https://github.com/QwenLM/qwen-code/issues/11851) | `isAsyncOperator` 把 `\r/\v/\f/\u00a0` 当 bash 词分隔符，allow 规则可被绕过注入第二条命令 | P1 | 3 | **shell 权限安全漏洞**——影响所有 Bash 工具的 allowlist 语义，需要立刻修复 |
| [#11862](https://github.com/QwenLM/qwen-code/issues/11862) | hooks matcher 末尾转义空格丢失，无 `|` 时正则失效 | P3 | 3 | 用户难以察觉的"静默失败"，debug log 把责任推给"无效正则"误导排查 |
| [#11884](https://github.com/QwenLM/qwen-code/issues/11884) | `/extensions` 更新无进度且无法清除 "update available" 状态 | P2 | 3 | UX 缺陷但易引起用户重复点击；状态机设计问题 |
| [#11883](https://github.com/QwenLM/qwen-code/issues/11883) | Windows 上 extension update/uninstall 报 `EPERM: rename` | P1 | 2 | 文件锁 + 路径替换原子性；Windows 用户升级 0.23.x 的主要阻塞 |

---

## 重要 PR 进展

| PR | 类型 | 内容简介 |
|----|------|----------|
| [#11822](https://github.com/QwenLM/qwen-code/pull/11822) | **feat(channels)** | 新增 channel 共享输出模式（`per_turn` / `per_response` / `per_task`），首发钉钉集成；`per_turn` 作为默认 |
| [#11805](https://github.com/QwenLM/qwen-code/pull/11805) | **feat(extensions)** | 扩展可携带动态工作流脚本（`workflows/` 目录或 `qwen-extension.json` 中的 `workflows` 字段），成为第三档保存工作流 |
| [#11903](https://github.com/QwenLM/qwen-code/pull/11903) | **feat(cli)** | OpenTUI 下 `/hooks` 升级为只读 hooks 浏览器，与 Ink 对话框行为对齐 |
| [#11802](https://github.com/QwenLM/qwen-code/pull/11802) | **fix(cli)** | ACP permission queue 改为会话作用域，解决并发请求被静默 cancel 的问题（修复 #11899 的根因） |
| [#11711](https://github.com/QwenLM/qwen-code/pull/11711) | **feat(core)** | 子 agent 支持容器执行（`QWEN_AGENT_EXECUTION_BACKEND=docker\|podman`），trusted operator 设置，环境文件无法覆盖 |
| [#11614](https://github.com/QwenLM/qwen-code/pull/11614) | **feat(cli)** | Linux 新增 bwrap 内核 sandbox 后端（opt-in，默认不变），无需 root / 守护进程 / 镜像 |
| [#11856](https://github.com/QwenLM/qwen-code/pull/11856) | **feat(core)** | 模型声明支持外部 reasoning profile 覆盖（efforts / 默认值），内置端点接受部分默认覆盖 |
| [#11840](https://github.com/QwenLM/qwen-code/pull/11840) | **feat(settings)** | 跨 session 消息默认开启，无需修改 `settings.json`；可通过 `agents.crossSessionMessaging=false` 关闭 |
| [#11875](https://github.com/QwenLM/qwen-code/pull/11875) | **fix(cli)** | 修复 >2^53 NTFS 文件 id 下 `isSameFile` / 删除日志降级为弱比较的 fail-open 漏洞（修复 #11848） |
| [#11900](https://github.com/QwenLM/qwen-code/pull/11900) | **refactor(goal)** | 删除第一代 Stop-hook Goal 实现（1,139 行产线 + 2,260 行测试），清理历史负担 |

> 另有 #11855（CI 在线 runner 双轨调度）、#11844（Web Shell tab pill 滑动动画）、#11480（Web Shell 脚注预览/分页）等 UX 改进类 PR 在推进。

---

## 功能需求趋势

1. **多渠道集成（DingTalk / Channels）**
   - [#11822](https://github.com/QwenLM/qwen-code/pull/11822) 落地三种共享输出模式；说明社区对"agent 输出如何分发到 IM"已有清晰诉求分类（turn / response / task）。

2. **沙箱与隔离执行**
   - [#11614](https://github.com/QwenLM/qwen-code/pull/11614) bwrap + [#11711](https://github.com/QwenLM/qwen-code/pull/11711) docker/podman 子 agent 容器化共同指向"agent 操作宿主风险"的统一诉求；不依赖 daemon、不污染默认路径。

3. **扩展生态（Extensions）**
   - 动态工作流 [#11805](https://github.com/QwenLM/qwen-code/pull/11805)、symlink 转义 #11896、文档同步 #11897、Windows EPERM #11883 都在同时推进，扩展模型正向"可编程安装源 + 安全边界"方向演化。

4. **跨厂商模型支持**
   - #11590（GLM metadata 注入）、#11894（DeepSeek `deepseek-flash` 解析错）持续暴露；开发者要求更稳健的 model id → token limits 映射与请求体 schema 自适配。

5. **ACP / IDE 集成**
   - 权限队列 #11802、会话作用域 #11899、IDE companion #11899、ACP 子进程测试 #11436——VS Code / ACP 通道已成为主战场。

6. **可观测与可治理**
   - daemon 协议规范化为 normative spec #11867、`web_search` 会话配额 #11846、`/hooks` 完整 UI #11903——开发者要求"agent 行为可见、可控、可审计"。

---

## 开发者关注点

1. **TUI / React 渲染稳定性**
   React #185 在 0.23.3 多个平台复现（[#11500](https://github.com/QwenLM/qwen-code/issues/11500) / [#11849](https://github.com/QwenLM/qwen-code/issues/11849) / [#11873](https://github.com/QwenLM/qwen-code/issues/11873)），社区急需确认 v0.23.4 是否已修；建议升级时优先验证长会话 + 后台 subagent 场景。

2. **Shell / 权限安全模型**
   #11851（isAsyncOperator 旁路）与 #11882（shell comment 语义分裂）共同揭示了 compound-command splitter 两套实现的不一致——这是接下来安全 PR 的核心区。

3. **Windows 路径上的小坑集合**
   64-bit NTFS file id（[#11848](https://github.com/QwenLM/qwen-code/issues/11848)）、extension rename EPERM（[#11883](https://github.com/QwenLM/qwen-code/issues/11883)）、macOS 本地预编译签名（[#11872](https://github.com/QwenLM/qwen-code/issues/11872)）——建议团队拉通"Windows 升级体验"专题。

4. **多厂商 LLM 协议兼容**
   开发者用同一份 CLI 切换 DashScope / DeepSeek / GLM / OpenAI 时频繁踩坑，问题集中在 (a) 请求体额外字段、(b) model name → token 解析、(c) 工具调用序列化；建议提供 `providers[].requestEnvelope` 声明式 schema 注入能力。

5. **CI / Fleet 自动化透明度**
   多个 Main CI 失败 issue（[#11600](https://github.com/QwenLM/qwen-code/issues/11600)、[#11678](https://github.com/QwenLM/qwen-code/issues/11678)、[#11890](https://github.com/QwenLM/qwen-code/issues/11890)）加 ECS runner 陈旧（[#11633](https://github.com/QwenLM/qwen-code/issues/11633)）暴露 fleet-shepherd bot 监控范围之外存在盲区；[#11855](https://github.com/QwenLM/qwen-code/pull/11855) 是当前缓解措施。

6. **错误信息质量**
   "invalid params, function parameters is empty"（[#11834](https://github.com/QwenLM/qwen-code/issues/11834)）等错误直接转嫁给用户，缺乏问题定位线索——CLI

</details>

<details>
<summary><strong>DeepSeek TUI</strong> — <a href="https://github.com/Hmbown/DeepSeek-TUI">Hmbown/DeepSeek-TUI</a></summary>

# DeepSeek TUI / Codewhale 社区动态日报

**日期：2026-09-15** | **数据来源：github.com/Hmbown/DeepSeek-TUI**

---

## 一、今日速览

项目已正式从 **DeepSeek-TUI** 演进为 Shannon Labs 的公开产品 **Codewhale**，v0.9.13 进入最终验证阶段，社区工作重心全面转向 v0.9.14 milestone。今日最值得关注的进展是 **EPIC-005 TUI Crate 分解** 进入执行期（27 条评论），同时 v0.9.14 第二个 slice run PR #6175 已开启，涵盖 lazy MCP、Session Picker UX 改进、启动修复等 9 项子任务。社区反馈集中暴露了几个高频痛点：模型 ID 弃用后无法迁移、Gemini 集成在 from-scratch 安装下报错、ACP session/new 与 session/load 的 id 不一致问题。

---

## 二、版本发布

### 🚢 v0.9.13（最终验证中）
- 发布日期：2026-09-14 更新
- 状态：`main` 分支为现行线，未打 tag，需等 CI 全绿
- **重要变更**：产品正式更名为 **Codewhale**（`codewhale` 命令、npm 包、release asset 全部小写）
- ⚠️ 旧 npm 包 `deepseek-tui` 已弃用，不再发布更新；v0.8.x 旧版 `deepseek` 用户需迁移

> [查看 Release](https://github.com/Hmbown/Codewhale/releases)

---

## 三、社区热点 Issues

### 1. [#5316 EPIC-005: CodeWhale TUI Crate 分解（Umbrella）](https://github.com/Hmbown/Codewhale/issues/5316)
**💬 27 条评论 | 🟢 OPEN** — 今日最热议题。该 EPIC 是 TUI crate 架构性分解的伞形 issue，遵循 Linear 上的 Codewhale Core execution plan，涵盖 C03–C10 各工作流的 owner、依赖顺序与完成证据。

### 2. [#6011 Token 核算与工具诊断（按组件/模型/缓存命中率）](https://github.com/Hmbown/Codewhale/issues/6011)
**💬 7 条评论 | 🟢 OPEN** — 属于 Core C11，规划了 per-component、per-model + cache hit rate、per-tool sinks、compaction cost 的完整 telemetry 体系。

### 3. [#5586 巨型文件分解：lib.rs (18.7k), config.rs (12.3k), client.rs (11.1k), runtime_threads.rs (9.3k)](https://github.com/Hmbown/Codewhale/issues/5586)
**💬 7 条评论 | 🟢 OPEN** — v0.9.12 重构延伸，属 Core C09，是 0.9.14 refactor backlog 的关键一环。

### 4. [#5587 Dead-code 清理 Phase 2-4：75 个 test-only markers、~242 个 stale allows](https://github.com/Hmbown/Codewhale/issues/5587)
**💬 6 条评论 | 🟢 OPEN** — 紧接 Phase 1（已落地 e5ca0aa86）的审计扩展，覆盖 379 个 `allow(dead_code)` 位点分类清理。

### 5. [#6018 Google Gemini "from scratch" 安装故障（已关闭）](https://github.com/Hmbown/Codewhale/issues/6018)
**💬 6 条评论 | 🔴 CLOSED** — 属 Core C22。from-scratch 安装下 Gemini 出现错误，今日 #6173 报告了同一问题复发。

### 6. [#6015 Fleet 自适应 anti-stall + 更宽的只读 shell 语法](https://github.com/Hmbown/Codewhale/issues/6015)
**💬 5 条评论 | 🟢 OPEN** — 已被 C05/C06 接纳，超越了此前"仅 postrelease、不扩大语法"的限制，作为默认配置而非用户配置提供。

### 7. [#6094 v0.9.14 — 起步指南：规划、如何参与、问题反馈](https://github.com/Hmbown/Codewhale/issues/6094)
**💬 4 条评论 | 👍 1 | 🟢 OPEN** — 官方维护者发布的入门向导，0.9.13 在最终验证中，main 为当前活动线，是新贡献者必读。

### 8. [#6009 /models 命令只返回部分模型列表 — 缺少分页（已关闭）](https://github.com/Hmbown/Codewhale/issues/6009)
**💬 4 条评论 | 🔴 CLOSED** — bug 修复：原 `/models` 仅发单次 `GET /v1/models`，未处理 OpenAI 风格的 `has_more`/`after` cursor 分页。

### 9. [#5856 Computer-use 插件：实时安装收据 + 首轮 act loop](https://github.com/Hmbown/Codewhale/issues/5856)
**💬 4 条评论 | 🟢 OPEN** — 标记为 release-blocker，需在发布构建中发现内置 bundle、审阅并启用。

### 10. [#6150 Op::SendMessage god-payload → TurnSpec，UI 在 input 路径上永不 await send()](https://github.com/Hmbown/Codewhale/issues/6150)
**💬 3 条评论 | 🟢 OPEN** — 0.9.14 重构 backlog。`Op::SendMessage` 累计 ~20 字段，需抽取 `struct TurnSpec` 防止进一步膨胀，并形式化证明 UI 路径不阻塞。

### 11. [#5529 Sub-agents 不可靠执行：wall-time 死亡丢失未提交工作（值得多关注）](https://github.com/Hmbown/Codewhale/issues/5529)
**💬 2 条评论 | 🟢 OPEN** — 核心 Fleet 价值主张受阻：worker/builder 子 agent 跑 shell 命令的三种失败模式：wall-time 预算中途中断、provider-route 失败阻塞 dispatch、shell 工具需 workarounds。

### 12. [#6035 模型 ID 钉死不传播：DeepSeek V4.1 Flash 弃用后遗留旧 ID](https://github.com/Hmbown/Codewhale/issues/6035)
**💬 2 条评论 | 🟢 OPEN** — 模型 ID 至少在 6 个地方独立钉死，没有共享 owner 或 vendor 弃用时的迁移路径。真实案例：DeepSeek 释放 `deepseek-flash` 并下线 `deepseek-v4-flash` 后，fleet/agent profile 仍持旧 id。

### 13. [#6013 Goal gates 独立验证：complete/blocked, needs_input/deferred/stalled 状态](https://github.com/Hmbown/Codewhale/issues/6013)
**💬 2 条评论 | 🟢 OPEN** — Core C06，提供 post-verify stage 与 gate 韧性，config-optional，默认行为不变。

---

## 四、重要 PR 进展

### 1. [#6175 v0.9.14 slice run 2：lazy MCP、session 恢复、picker UX、启动修复](https://github.com/Hmbown/Codewhale/pull/6175) 🟢
**作者：Hmbown** — v0.9.14 milestone 的第二个堆叠 slice run，基于 #6161 merge 后的 `origin/main`（`433685b2`）。9 个 issue slice + 1 个 lint 修复，每个 issue 一个 commit，提交前单独验证。关闭 #6099 等。

### 2. [#6161 v0.9.14：console-freeze、approval-death、compaction 与 session-retention 修复](https://github.com/Hmbown/Codewhale/pull/6161) ✅
**作者：Hmbown | 已合并** — 修复两个已诊断的 console-freeze/silent-death 缺陷（运行中的 turn 触发 `/mcp`；无人值守 approval run 被 idle-timeout cancel），以及 compaction retention 中孤儿 `tool_result` 的漏洞。

### 3. [#6171 feat(providers): 新增 AICraft OpenAI 兼容 provider 模板](https://github.com/Hmbown/Codewhale/pull/6171) 🟢
**作者：BX166** — 沿用 SenseNova、Baseten、Groq、Cerebras、Command Code 相同的 descriptor-row 模式，为 `aicraftapi.com` 添加 OpenAI 兼容 provider 设置模板（`AICRAFT_TEMPLATE_ID = "aicraft"`）。

### 4. [#6170 fix(weixin-bridge): 修复 Weixin bridge 可运行性并简化 Quick Start](https://github.com/Hmbown/Codewhale/pull/6170) 🟢
**作者：VincentCorleone** — 修复文档中指向不存在路径 `/opt/codewhale/weixin-bot-bridge`、缺少 runtime 启动命令、env 文件未被读取等问题，让首条微信消息能被正确处理。

### 5. [#5867 feat(config): 新增 [reasoning_only] 段配置重试次数与自定义参数](https://github.com/Hmbown/Codewhale/pull/5867) ✅
**作者：Gabriel-Degret | 已关闭** — 将硬编码的 `MAX_REASONING_ONLY_REPROMPTS = 2` 改为用户可配置。

### 6–10. 其他值得追踪
- [#6151 依赖去重：reqwest 0.12/0.13、toml/toml_edit、thiserror 1/2、bitflags 1/2、sha2/digest 分裂](https://github.com/Hmbown/Codewhale/issues/6151) — `cargo tree -d` 揭示的双版本依赖问题
- [#6132 Build: 跨 JSON 与 nextest 命令格式统一 Cargo warning 策略](https://github.com/Hmbown/Codewhale/issues/6132) — `CARGO_BUILD_WARNINGS=deny` 在 `--message-format=json` 下仍 exit 0 的边角行为
- [#6163 App-server: GET /v1/artifacts 和 GET /v1/files for GPUI Preview/Files](https://github.com/Hmbown/Codewhale/issues/6163) — 桌面端不应再发明第二套文件存储
- [#6168 App-server: GET /v1/instructions for GPUI Memory/instructions](https://github.com/Hmbown/Codewhale/issues/6168) — 同上，instructions 走本地 AGENTS/CLAUDE
- [#6174 ACP: session/new 返回带 provider 前缀的 sessionId，session/load 无法解析](https://github.com/Hmbown/Codewhale/issues/6174) — ACP 协议兼容性问题，需 session/load 兼容 prefix 与裸 id 两种形式

---

## 五、功能需求趋势

从近 24 小时的 50 条 Issue 提炼：

| 方向 | 代表 Issue | 趋势热度 |
|------|-----------|---------|
| **架构重构 / crate 分解** | #5316, #5586, #6150, #4173 | 🔥🔥🔥 |
| **可观测性 / Token & 工具诊断** | #6011 | 🔥🔥 |
| **Provider 集成** | #6018, #6173, #6009, #6171 | 🔥🔥 |
| **子 agent / Fleet 可靠性** | #5529, #5915, #5479, #5856 | 🔥🔥 |
| **会话与 UI 体验** | #6014, #6162, #6161, #6094 | 🔥🔥 |
| **桌面/IDE 集成（GPUI, app-server）** | #6163, #6168, #6015 | 🔥 |
| **依赖与构建治理** | #6151, #6132, #6147, #5587 | 🔥 |
| **安全 / 凭据迁移** | #6040, #6058 | 🔥 |
| **可插拔 Memory 后端** | #6050 | 🔥 |

**核心方向**：v0.9.14 已明确将"巨型文件分解 + 重构 backlog"作为头号工程；社区对 **多 provider 体验一致性**、**子 agent 真实可用性**、**桌面端 app-server 协议对齐** 的呼声最集中。

---

## 六、开发者关注点

1. **🔴 模型 ID 生命周期管理缺失**：模型在 vendor 端下线后，Codewhale 端无任何迁移路径，配置中的钉死 id 全部失效 (#6035)。开发者强烈需要统一的模型注册中心。

2. **🔴 Sub-agent 是产品核心价值但当前不可靠**：worker/builder 在 wall-time 中断时丢失未提交工作；provider-route 失败阻塞 dispatch；shell tooling 需绕过方案 (#5529)。Fleet 的"代理编排"叙事面临落地质疑。

3. **🟡 Gemini 集成稳定性**：from-scratch 安装下 #6018 修复后，#6173 立即复发相似问题 /models 错误。`/models` 分页 #6009 虽已关闭，但首装体验仍不够平滑。

4. **🟡 ACP 协议兼容性**：session/new 返回的带 provider 前缀 id 无法被 session/load 解析，而 session/list 报告的是裸 id (#6174)。破坏性变更需在协议层固化。

5. **🟡 MCP OAuth 登出无效**：重登后仍复用 remote grant，logout 无法切换授权 workspace (#6040)。安全/凭据生命周期是高频痛点。

6. **🟢 巨型文件分解**是社区共识：lib.rs 18.7k、config.rs 12.3k、client.rs 11.1k、runtime_threads.rs 9.3k — 单文件体积大到成为协作瓶颈 (#5586)。

7. **🟢 工程化建设**：依赖去重 (#6151)、warning 策略统一 (#6132)、无界 channel 治理 (#6147)、dead-code 持续清理 (#5587) — 显示出项目正从"功能快速迭代"过渡到"长期可维护性"。

---

> 📌 **维护者观察**：Hmbown 在多个 issue 中明确 *"`main` is the live line"* 与 *"Linear is the current execution authority"*，社区贡献者建议先看 [#6094 v0.9.14 start here](https://github.com/Hmbown/Codewhale/issues/6094) 与 [v0.9.14 milestone](https://github.com/Hmbown/CodeWhale/milestone/68)。

</details>

---
*本日报由 [agents-radar](https://github.com/howe12/agents-radar) 自动生成。*